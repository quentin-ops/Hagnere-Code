import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { resolve } from "node:path";

const SITE_ORIGIN = "https://hagnere-code.ai";
const artifactRoot = resolve(".next/server/app");
const robotsPath = resolve(artifactRoot, "robots.txt.body");
const sitemapPath = resolve(artifactRoot, "sitemap.xml.body");
const llmsPath = resolve(artifactRoot, "llms.txt.body");
const guidesSourcePath = resolve("src/lib/guides.ts");
const appPathsManifestPath = resolve(".next/server/app-paths-manifest.json");
const ORGANIZATION_ID = `${SITE_ORIGIN}/#organization`;
const ORGANIZATION_NAME = "Hagnéré Code";
const ORGANIZATION_SIREN = "993672856";
const OBSOLETE_SIRET = /993\s*672\s*856\s*00016|99367285600016/;
const GUIDE_WORDS_PER_MINUTE = 200;
const GUIDE_READ_TIME_TOLERANCE_MIN = 1;
// Même politique que src/lib/search-indexing.ts : l'override explicite gagne,
// sinon le build Vercel de production est la seule détection automatique
// autorisée. NODE_ENV=production ne suffit volontairement pas.
const explicitIndexingEnv = process.env.NEXT_PUBLIC_ENV?.trim();
const indexingEnabled = explicitIndexingEnv
  ? explicitIndexingEnv === "production"
  : process.env.VERCEL_ENV?.trim() === "production";
let failureCount = 0;
const allowedSocialImageOrigins = new Set([SITE_ORIGIN]);

if (!indexingEnabled) {
  for (const envName of [
    "VERCEL_URL",
    "VERCEL_BRANCH_URL",
    "VERCEL_PROJECT_PRODUCTION_URL",
  ]) {
    const value = process.env[envName]?.trim();
    if (!value) continue;
    try {
      allowedSocialImageOrigins.add(
        new URL(value.includes("://") ? value : `https://${value}`).origin,
      );
    } catch {
      fail(`origine Vercel invalide dans ${envName} : ${value}`);
    }
  }
}
const buildInputRoots = [resolve("src"), resolve("public")];
const buildInputFiles = [
  "next.config.ts",
  "open-next.config.ts",
  "package.json",
  "package-lock.json",
  "postcss.config.mjs",
  "tsconfig.json",
  "wrangler.jsonc",
].map((path) => resolve(path));

let checkedGuideReadTimeCount = 0;

function fail(message) {
  failureCount += 1;
  console.error(`[SEO artifact] ${message}`);
}

function readRequired(path, label) {
  if (!existsSync(path)) {
    fail(`${label} introuvable : ${path}`);
    return null;
  }

  return readFileSync(path, "utf8");
}

function newestFileUnder(path) {
  if (!existsSync(path)) return null;
  const stat = statSync(path);
  if (stat.isFile()) return { path, mtimeMs: stat.mtimeMs };
  if (!stat.isDirectory()) return null;

  let newest = null;
  for (const entry of readdirSync(path, { withFileTypes: true })) {
    // Les liens symboliques sont exclus : leur cible peut sortir du dépôt et
    // ne fait pas partie de l'entrée reproductible du build.
    if (entry.isSymbolicLink()) continue;
    const candidate = newestFileUnder(resolve(path, entry.name));
    if (candidate && (!newest || candidate.mtimeMs > newest.mtimeMs)) {
      newest = candidate;
    }
  }
  return newest;
}

function checkArtifactFreshness() {
  const artifactPaths = [
    robotsPath,
    sitemapPath,
    llmsPath,
    appPathsManifestPath,
  ];
  if (artifactPaths.some((path) => !existsSync(path))) return;

  const newestInput = [...buildInputRoots, ...buildInputFiles]
    .map(newestFileUnder)
    .filter(Boolean)
    .sort((a, b) => b.mtimeMs - a.mtimeMs)[0];
  const oldestArtifact = artifactPaths
    .map((path) => ({ path, mtimeMs: statSync(path).mtimeMs }))
    .sort((a, b) => a.mtimeMs - b.mtimeMs)[0];

  if (newestInput && newestInput.mtimeMs > oldestArtifact.mtimeMs) {
    fail(
      `artefact périmé : ${newestInput.path} est plus récent que ${oldestArtifact.path}. Relancer le build sans écriture source concurrente.`,
    );
  }
}

function htmlTagsWithAttribute(html, tagName, attribute, expectedValue) {
  const tags = html.match(new RegExp(`<${tagName}\\b[^>]*>`, "gi")) ?? [];

  return tags.filter((tag) => {
    const value = tag.match(
      new RegExp(`${attribute}=["']([^"']+)["']`, "i"),
    )?.[1];
    return value?.toLowerCase() === expectedValue.toLowerCase();
  });
}

function htmlTagWithAttribute(html, tagName, attribute, expectedValue) {
  return htmlTagsWithAttribute(html, tagName, attribute, expectedValue)[0];
}

function tagAttribute(tag, attribute) {
  return tag?.match(new RegExp(`${attribute}=["']([^"']+)["']`, "i"))?.[1];
}

function requiredMetaContent(html, attribute, value, pathname) {
  const tags = htmlTagsWithAttribute(html, "meta", attribute, value);
  if (tags.length !== 1) {
    fail(`meta ${value} présente ${tags.length} fois au lieu d'une : ${pathname}`);
  }
  const tag = tags[0];
  const content = tagAttribute(tag, "content")?.trim();
  if (!content) {
    fail(`meta ${value} absente ou vide : ${pathname}`);
    return "";
  }
  return content;
}

function checkSocialImage(imageUrl, pathname, appPaths) {
  let parsed;
  try {
    parsed = new URL(imageUrl);
  } catch {
    fail(`URL og:image invalide pour ${pathname} : ${imageUrl}`);
    return;
  }

  if (!allowedSocialImageOrigins.has(parsed.origin)) {
    fail(`og:image externe ou non autorisée pour ${pathname} : ${imageUrl}`);
    return;
  }

  const imagePath = parsed.pathname.replace(/\/$/, "");
  const dynamicRoute = `${imagePath}/route`;
  const staticAsset = resolve("public", imagePath.replace(/^\//, ""));
  const dynamicSegments = dynamicRoute.split("/");
  const matchingManifestRoute = Object.keys(appPaths).find((candidate) => {
    const candidateSegments = candidate.split("/");
    return (
      candidateSegments.length === dynamicSegments.length &&
      candidateSegments.every(
        (segment, index) =>
          /^\[[^/]+\]$/.test(segment) || segment === dynamicSegments[index],
      )
    );
  });
  if (!matchingManifestRoute && !existsSync(staticAsset)) {
    fail(`og:image sans route ni fichier public pour ${pathname} : ${imagePath}`);
    return;
  }

  if (existsSync(staticAsset)) {
    const image = readFileSync(staticAsset);
    const pngSignature = image.subarray(0, 8).toString("hex");
    if (pngSignature !== "89504e470d0a1a0a" || image.length < 24) {
      fail(`image sociale statique non PNG ou illisible pour ${pathname} : ${imagePath}`);
      return;
    }
    const width = image.readUInt32BE(16);
    const height = image.readUInt32BE(20);
    if (width !== 1200 || height !== 630) {
      fail(
        `image sociale statique ${width}×${height} au lieu de 1200×630 pour ${pathname} : ${imagePath}`,
      );
    }
    return;
  }

  const sourceRoute = matchingManifestRoute.replace(/\/route$/, "");
  const sourcePath = resolve("src/app", `${sourceRoute.replace(/^\//, "")}.tsx`);
  if (!existsSync(sourcePath)) {
    fail(`source de l'image sociale introuvable pour ${pathname} : ${sourceRoute}`);
    return;
  }
  const source = readFileSync(sourcePath, "utf8");
  if (
    !/export\s+const\s+size\s*=\s*\{[\s\S]*?width\s*:\s*1200\s*,[\s\S]*?height\s*:\s*630[\s\S]*?\}/m.test(
      source,
    )
  ) {
    fail(`image sociale dynamique sans taille 1200×630 pour ${pathname} : ${sourceRoute}`);
  }
}

function checkPageMetadata(html, url, appPaths) {
  const { pathname } = new URL(url);
  const description = requiredMetaContent(html, "name", "description", pathname);
  const ogTitle = requiredMetaContent(html, "property", "og:title", pathname);
  const ogDescription = requiredMetaContent(
    html,
    "property",
    "og:description",
    pathname,
  );
  const ogUrl = requiredMetaContent(html, "property", "og:url", pathname);
  const ogImage = requiredMetaContent(html, "property", "og:image", pathname);
  const ogType = requiredMetaContent(html, "property", "og:type", pathname);
  const twitterCard = requiredMetaContent(html, "name", "twitter:card", pathname);
  requiredMetaContent(html, "name", "twitter:title", pathname);
  requiredMetaContent(html, "name", "twitter:description", pathname);
  const twitterImage = requiredMetaContent(html, "name", "twitter:image", pathname);

  if (description && description.length < 50) {
    fail(`meta description trop peu informative (${description.length} caractères) : ${pathname}`);
  }
  if (ogTitle && ogTitle.length < 10) {
    fail(`og:title trop peu informatif : ${pathname}`);
  }
  if (ogDescription && ogDescription.length < 50) {
    fail(`og:description trop peu informative : ${pathname}`);
  }
  if (ogUrl !== url) {
    fail(`og:url incohérent pour ${pathname} : ${ogUrl || "absent"}`);
  }
  if (twitterCard !== "summary_large_image") {
    fail(`twitter:card inattendue pour ${pathname} : ${twitterCard || "absente"}`);
  }
  if (ogImage) checkSocialImage(ogImage, pathname, appPaths);
  if (twitterImage && twitterImage !== ogImage) {
    checkSocialImage(twitterImage, pathname, appPaths);
  }
  if (ogType === "article" && ogImage && twitterImage) {
    try {
      const ogPath = new URL(ogImage).pathname;
      const twitterPath = new URL(twitterImage).pathname;
      if (ogPath !== twitterPath) {
        fail(`images OpenGraph et Twitter divergentes pour ${pathname}`);
      }
    } catch {
      // Les erreurs d'URL sont déjà signalées par checkSocialImage.
    }
  }

  return { description, ogTitle };
}

function artifactHtmlPath(url) {
  const pathname = new URL(url).pathname.replace(/\/$/, "");
  return resolve(
    artifactRoot,
    pathname === "" ? "index.html" : `${pathname.replace(/^\//, "")}.html`,
  );
}

function checkDocumentBasics(html, canonicalUrl) {
  const { pathname } = new URL(canonicalUrl);
  const canonicalTags = htmlTagsWithAttribute(html, "link", "rel", "canonical");
  if (canonicalTags.length !== 1) {
    fail(`canonical présente ${canonicalTags.length} fois au lieu d'une : ${pathname}`);
  }
  const canonical = tagAttribute(canonicalTags[0], "href");
  if (canonical !== canonicalUrl) {
    fail(`canonical incohérent pour ${pathname} : ${canonical ?? "absent"}`);
  }

  const titleCount = (html.match(/<title\b[^>]*>[\s\S]*?<\/title>/gi) ?? []).length;
  if (titleCount !== 1) {
    fail(`title présent ${titleCount} fois au lieu d'un : ${pathname}`);
  }
  const h1Count = (html.match(/<h1(?:\s|>)/gi) ?? []).length;
  if (h1Count !== 1) {
    fail(`H1 présent ${h1Count} fois au lieu d'un : ${pathname}`);
  }
  if (htmlTagsWithAttribute(html, "html", "lang", "fr").length !== 1) {
    fail(`langue racine absente ou différente de fr : ${pathname}`);
  }

  const mainTag = htmlTagWithAttribute(html, "main", "id", "main-content");
  if (!mainTag) {
    fail(`landmark main#main-content absent : ${pathname}`);
    return;
  }
  const mainTargetCount = (html.match(/\bid=["']main-content["']/gi) ?? []).length;
  if (mainTargetCount !== 1) {
    fail(`cible main-content dupliquée (${mainTargetCount}) : ${pathname}`);
  }
  const primaryNavIndex = html.search(/<nav\b[^>]*class=["'][^"']*hc-nav/gi);
  const mainIndex = html.indexOf(mainTag);
  if (primaryNavIndex !== -1 && primaryNavIndex > mainIndex) {
    fail(`navigation principale imbriquée dans le main : ${pathname}`);
  }
}

function decodeHtmlText(html) {
  return html
    .replace(
      /<(script|style|template|noscript|svg)\b[^>]*>[\s\S]*?<\/\1>/gi,
      " ",
    )
    .replace(/<[^>]+>/g, " ")
    .replace(/&#(x?[0-9a-f]+);/gi, (_match, value) => {
      const hexadecimal = value[0].toLowerCase() === "x";
      const codePoint = Number.parseInt(
        hexadecimal ? value.slice(1) : value,
        hexadecimal ? 16 : 10,
      );
      return Number.isFinite(codePoint) && codePoint >= 0 && codePoint <= 0x10ffff
        ? String.fromCodePoint(codePoint)
        : " ";
    })
    .replace(/&(?:nbsp|ensp|emsp);/gi, " ")
    .replace(/&amp;/gi, " et ")
    .replace(/&(?:apos|rsquo|lsquo);/gi, "'")
    .replace(/&(?:quot|ldquo|rdquo);/gi, '"')
    .replace(/&(?:ndash|mdash);/gi, "-")
    .replace(/&euro;/gi, " euro ")
    .replace(/&[a-z]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function checkGuideReadTime(html, pathname, guideEntry) {
  const articleHtml = html.match(/<article\b[^>]*>([\s\S]*?)<\/article>/i)?.[1];
  if (!articleHtml) {
    fail(`contenu article introuvable pour calculer le temps de lecture : ${pathname}`);
    return;
  }
  if (!Number.isInteger(guideEntry?.readTimeMin) || guideEntry.readTimeMin < 1) {
    fail(`readTimeMin absent ou invalide dans le registre : ${pathname}`);
    return;
  }

  const visibleText = decodeHtmlText(articleHtml);
  const wordCount =
    visibleText.match(/[\p{L}\p{N}]+(?:[\u2019'\-][\p{L}\p{N}]+)*/gu)
      ?.length ?? 0;
  if (wordCount < 100) {
    fail(`article trop court ou extraction illisible (${wordCount} mots) : ${pathname}`);
    return;
  }

  const estimatedReadTime = Math.max(
    1,
    Math.round(wordCount / GUIDE_WORDS_PER_MINUTE),
  );
  const difference = Math.abs(guideEntry.readTimeMin - estimatedReadTime);
  if (difference > GUIDE_READ_TIME_TOLERANCE_MIN) {
    fail(
      `readTimeMin ${guideEntry.readTimeMin} min incohérent avec ${wordCount} mots visibles (~${estimatedReadTime} min à ${GUIDE_WORDS_PER_MINUTE} mots/min, tolérance ±${GUIDE_READ_TIME_TOLERANCE_MIN}) : ${pathname}`,
    );
  }
  checkedGuideReadTimeCount += 1;
}

function visitJson(value, visitor) {
  if (Array.isArray(value)) {
    value.forEach((entry) => visitJson(entry, visitor));
    return;
  }
  if (!value || typeof value !== "object") return;

  visitor(value);
  Object.values(value).forEach((entry) => visitJson(entry, visitor));
}

function checkStructuredData(html, pathname) {
  const scripts = Array.from(
    html.matchAll(
      /<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi,
    ),
    (match) => match[1].trim(),
  );

  let checked = 0;
  const articles = [];
  for (const [index, source] of scripts.entries()) {
    let structuredData;
    try {
      structuredData = JSON.parse(source);
    } catch (error) {
      fail(
        `JSON-LD invalide (${index + 1}) pour ${pathname} : ${error.message}`,
      );
      continue;
    }

    checked += 1;
    visitJson(structuredData, (node) => {
      if (node["@id"] === `${SITE_ORIGIN}/#business`) {
        fail(`ancienne entité #business encore publiée : ${pathname}`);
      }
      if (node["@id"] === ORGANIZATION_ID) {
        if (node.name && node.name !== ORGANIZATION_NAME) {
          fail(`nom contradictoire pour #organization : ${pathname}`);
        }
        if (node.legalName && node.legalName !== "HAGNERE CODE") {
          fail(`raison sociale contradictoire pour #organization : ${pathname}`);
        }
        if (node.url && node.url !== SITE_ORIGIN) {
          fail(`URL contradictoire pour #organization : ${pathname}`);
        }
        if (node.vatID && node.vatID !== "FR30993672856") {
          fail(`numéro de TVA contradictoire pour #organization : ${pathname}`);
        }
        if (Array.isArray(node.identifier)) {
          const siren = node.identifier.find(
            (entry) => entry?.propertyID === "SIREN",
          );
          if (siren && siren.value !== ORGANIZATION_SIREN) {
            fail(`SIREN contradictoire pour #organization : ${pathname}`);
          }
        }
        if (
          node.address &&
          (node.address.streetAddress !== "82 impasse de Bellevue" ||
            node.address.postalCode !== "73000" ||
            node.address.addressLocality !== "Bassens")
        ) {
          fail(`adresse contradictoire pour #organization : ${pathname}`);
        }
      }

      const nodeType = Array.isArray(node["@type"])
        ? node["@type"]
        : [node["@type"]];
      if (nodeType.includes("FAQPage")) {
        fail(`FAQPage obsolète encore publiée dans ${pathname}`);
      }
      if (nodeType.includes("HowTo") || nodeType.includes("HowToStep")) {
        fail(`schéma HowTo obsolète encore publié dans ${pathname}`);
      }
      if (nodeType.includes("Article")) articles.push(node);
      if (Object.hasOwn(node, "wordCount")) {
        fail(`wordCount non calculé encore publié dans ${pathname}`);
      }
    });
  }

  const guideMatch = pathname.match(/^\/guides\/([^/]+)$/);
  if (guideMatch) {
    const slug = guideMatch[1];
    const guideEntry = guideEntries.find((entry) => entry.slug === slug);
    const canonicalUrl = `${SITE_ORIGIN}${pathname}`;
    if (!guideEntry) {
      fail(`guide rendu absent du registre central : ${pathname}`);
    } else {
      checkGuideReadTime(html, pathname, guideEntry);
    }
    if (articles.length !== 1) {
      fail(`guide avec ${articles.length} schéma(s) Article au lieu d'un : ${pathname}`);
    } else {
      const article = articles[0];
      const images = Array.isArray(article.image) ? article.image : [article.image];
      const expectedImage = `${canonicalUrl}/opengraph-image`;
      if (!String(article.headline || "").trim()) {
        fail(`Article sans headline : ${pathname}`);
      }
      if (article.url !== canonicalUrl || article.mainEntityOfPage?.["@id"] !== canonicalUrl) {
        fail(`Article sans URL canonique cohérente : ${pathname}`);
      }
      if (!images.includes(expectedImage)) {
        fail(`Article sans image canonique dédiée : ${pathname}`);
      }
      if (
        guideEntry &&
        (article.datePublished !== guideEntry.datePublished ||
          article.dateModified !== guideEntry.dateModified)
      ) {
        fail(`dates Article divergentes du registre : ${pathname}`);
      }
      if (!article.author) fail(`Article sans auteur : ${pathname}`);
      if (article.publisher?.["@id"] !== ORGANIZATION_ID) {
        fail(`Article sans publisher canonique : ${pathname}`);
      }
    }
  }

  if (OBSOLETE_SIRET.test(html)) {
    fail(`ancien SIRET encore présent dans le HTML public : ${pathname}`);
  }
  return checked;
}

checkArtifactFreshness();

const robots = readRequired(robotsPath, "robots.txt");
if (robots) {
  if (!/^User-agent: \*$/im.test(robots)) {
    fail("robots.txt ne publie pas de règle générique User-agent: *.");
  }
  if (indexingEnabled) {
    if (!/^Allow: \/$/im.test(robots)) {
      fail("robots.txt n'autorise pas explicitement l'exploration du site.");
    }
    if (/^Disallow: \/$/im.test(robots)) {
      fail("robots.txt bloque encore l'ensemble du site avec Disallow: /.");
    }
    if (!/^Disallow: \/api\/$/im.test(robots)) {
      fail("robots.txt ne protège pas les routes non éditoriales /api/.");
    }
    if (
      !/^Sitemap: https:\/\/hagnere-code\.ai\/sitemap\.xml$/im.test(robots)
    ) {
      fail("robots.txt ne publie pas le sitemap canonique.");
    }
    const disallowedPaths = Array.from(
      robots.matchAll(/^Disallow:\s*(.*)$/gim),
      (match) => match[1].trim(),
    ).filter(Boolean);
    for (const blockedPath of disallowedPaths) {
      if (blockedPath !== "/api/") {
        fail(`robots.txt bloque une zone publique inattendue : ${blockedPath}`);
      }
    }
  } else if (!/^Disallow: \/$/im.test(robots)) {
    fail("robots.txt de preview ne bloque pas l'exploration globale.");
  }
}

const sitemapXml = readRequired(sitemapPath, "sitemap.xml");
const sitemapUrls = sitemapXml
  ? Array.from(sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g), (match) => match[1])
  : [];
const sitemapUrlSet = new Set(sitemapUrls);

let appPaths = {};
const appPathsManifest = readRequired(
  appPathsManifestPath,
  "manifeste des routes Next.js",
);
if (appPathsManifest) {
  try {
    appPaths = JSON.parse(appPathsManifest);
  } catch (error) {
    fail(`manifeste des routes Next.js invalide : ${error.message}`);
  }
}

const guidesSource = readRequired(guidesSourcePath, "registre des guides");
const guideEntries = guidesSource
  ? Array.from(
      guidesSource.matchAll(
        /\{\s*slug:\s*"([^"]+)"([\s\S]*?)\n\s*\},/g,
      ),
      (match) => ({
        slug: match[1],
        pending: /editorialStatus:\s*"ready-for-human-review"/.test(match[2]),
        datePublished: match[2].match(/datePublished:\s*"([^"]+)"/)?.[1],
        dateModified: match[2].match(/dateModified:\s*"([^"]+)"/)?.[1],
        readTimeMin: Number(
          match[2].match(/readTimeMin:\s*(\d+)/)?.[1] ?? Number.NaN,
        ),
      }),
    )
  : [];

if (sitemapXml && sitemapUrls.length === 0) {
  fail("sitemap.xml ne contient aucune URL.");
}
if (sitemapXml && /<(?:priority|changefreq)>/i.test(sitemapXml)) {
  fail("sitemap.xml contient encore priority ou changefreq, valeurs non maintenues.");
}
if (sitemapUrlSet.size !== sitemapUrls.length) {
  fail("sitemap.xml contient au moins une URL dupliquée.");
}

let checkedPageCount = 0;
let checkedStructuredDataCount = 0;
const descriptions = new Map();
const socialTitles = new Map();
for (const url of sitemapUrls) {
  let parsed;
  try {
    parsed = new URL(url);
  } catch {
    fail(`URL invalide dans sitemap.xml : ${url}`);
    continue;
  }

  if (parsed.origin !== SITE_ORIGIN) {
    fail(`origine non canonique dans sitemap.xml : ${url}`);
    continue;
  }

  const pagePath = artifactHtmlPath(url);
  if (!existsSync(pagePath)) {
    fail(`page du sitemap absente de l'artefact : ${parsed.pathname}`);
    continue;
  }

  const html = readFileSync(pagePath, "utf8");
  const robotsTags = htmlTagsWithAttribute(html, "meta", "name", "robots");
  if (robotsTags.length !== 1) {
    fail(
      `meta robots présente ${robotsTags.length} fois au lieu d'une : ${parsed.pathname}`,
    );
  }
  const robotsTag = robotsTags[0];
  const robotsContent = tagAttribute(robotsTag, "content")?.toLowerCase();
  if (indexingEnabled) {
    if (!robotsContent || !robotsContent.includes("index")) {
      fail(`directive robots index absente : ${parsed.pathname}`);
    }
    if (robotsContent?.includes("noindex") || robotsContent?.includes("nofollow")) {
      fail(`page du sitemap générée non indexable : ${parsed.pathname}`);
    }
  } else if (
    !robotsContent?.includes("noindex") ||
    !robotsContent.includes("nofollow")
  ) {
    fail(`page de preview sans noindex,nofollow : ${parsed.pathname}`);
  }

  checkDocumentBasics(html, url);
  const { description, ogTitle } = checkPageMetadata(html, url, appPaths);
  for (const [label, value, values] of [
    ["meta description", description, descriptions],
    ["og:title", ogTitle, socialTitles],
  ]) {
    if (!value) continue;
    const previousPath = values.get(value);
    if (previousPath) {
      fail(`${label} dupliqué entre ${previousPath} et ${parsed.pathname}`);
    } else {
      values.set(value, parsed.pathname);
    }
  }
  checkedStructuredDataCount += checkStructuredData(html, parsed.pathname);

  checkedPageCount += 1;
}

const llms = readRequired(llmsPath, "llms.txt");
const llmsUrls = llms
  ? Array.from(
      llms.matchAll(/\]\((https:\/\/[^)\s]+)\)/g),
      (match) => match[1],
    )
  : [];
const llmsUrlSet = new Set(llmsUrls);

if (llms) {
  if (!/^# Hagnéré Code$/m.test(llms)) {
    fail("llms.txt ne contient pas son titre principal.");
  }
  for (const heading of [
    "## Services",
    "## Guides",
    "## Livres blancs",
    "## Ressources pratiques",
  ]) {
    if (!llms.includes(heading)) {
      fail(`section absente de llms.txt : ${heading}`);
    }
  }
  if (llmsUrlSet.size !== llmsUrls.length) {
    fail("llms.txt contient au moins une URL dupliquée.");
  }

  for (const url of llmsUrls) {
    let parsed;
    try {
      parsed = new URL(url);
    } catch {
      fail(`URL invalide dans llms.txt : ${url}`);
      continue;
    }

    if (parsed.origin !== SITE_ORIGIN) {
      fail(`origine non canonique dans llms.txt : ${url}`);
    }
    if (!sitemapUrlSet.has(url)) {
      fail(`URL de llms.txt absente du sitemap : ${url}`);
    }
  }

  const mustAppearInLlms = sitemapUrls.filter((url) => {
    const pathname = new URL(url).pathname;
    return [
      /^\/guides\/[^/]+$/,
      /^\/services\/[^/]+$/,
      /^\/livres-blancs\/[^/]+$/,
      /^\/ressources\/[^/]+$/,
    ].some((pattern) => pattern.test(pathname));
  });

  for (const url of mustAppearInLlms) {
    if (!llmsUrlSet.has(url)) {
      fail(`contenu éditorial du sitemap absent de llms.txt : ${url}`);
    }
  }
}

const pendingGuideSlugs = guideEntries
  .filter(({ pending }) => pending)
  .map(({ slug }) => slug);
const publishedGuideSlugs = guideEntries
  .filter(({ pending }) => !pending)
  .map(({ slug }) => slug);
const guidesHub = readRequired(
  resolve(artifactRoot, "guides.html"),
  "hub des guides",
);

function guideHubContains(slug) {
  return Boolean(
    guidesHub?.match(
      new RegExp(`href=["']/guides/${slug.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}["']`, "i"),
    ),
  );
}

for (const slug of publishedGuideSlugs) {
  const pathname = `/guides/${slug}`;
  const canonicalUrl = `${SITE_ORIGIN}${pathname}`;
  const pagePath = artifactHtmlPath(canonicalUrl);

  if (!sitemapUrlSet.has(canonicalUrl)) {
    fail(`guide publié absent du sitemap : ${pathname}`);
  }
  if (!llmsUrlSet.has(canonicalUrl)) {
    fail(`guide publié absent de llms.txt : ${pathname}`);
  }
  if (!guideHubContains(slug)) {
    fail(`guide publié absent du hub /guides : ${pathname}`);
  }
  if (!existsSync(pagePath)) {
    fail(`artefact du guide publié absent : ${pathname}`);
    continue;
  }

  // Le parcours sitemap couvre normalement ces contrôles. Cette seconde
  // lecture rend néanmoins le garde-fou bidirectionnel et détecte un build
  // périmé où la source publie le guide mais l'artefact l'exclut encore.
  if (!sitemapUrlSet.has(canonicalUrl)) {
    const html = readFileSync(pagePath, "utf8");
    checkDocumentBasics(html, canonicalUrl);
    checkPageMetadata(html, canonicalUrl, appPaths);
    checkStructuredData(html, pathname);
    const robotsTags = htmlTagsWithAttribute(html, "meta", "name", "robots");
    const robotsContent = tagAttribute(robotsTags[0], "content")?.toLowerCase();
    if (
      robotsTags.length !== 1 ||
      !robotsContent?.includes("index") ||
      robotsContent.includes("noindex") ||
      robotsContent.includes("nofollow")
    ) {
      fail(`guide publié non indexable dans l'artefact : ${pathname}`);
    }
  }
}

for (const slug of pendingGuideSlugs) {
  const pathname = `/guides/${slug}`;
  const canonicalUrl = `${SITE_ORIGIN}${pathname}`;
  const pagePath = artifactHtmlPath(canonicalUrl);

  if (sitemapUrlSet.has(canonicalUrl)) {
    fail(`guide avec porte éditoriale non levée présent dans le sitemap : ${pathname}`);
  }
  if (llmsUrlSet.has(canonicalUrl)) {
    fail(`guide avec porte éditoriale non levée présent dans llms.txt : ${pathname}`);
  }
  if (guideHubContains(slug)) {
    fail(`guide avec porte éditoriale non levée présent dans le hub : ${pathname}`);
  }
  if (!existsSync(pagePath)) {
    fail(`artefact du guide en attente absent : ${pathname}`);
    continue;
  }

  const html = readFileSync(pagePath, "utf8");
  checkDocumentBasics(html, canonicalUrl);
  checkPageMetadata(html, canonicalUrl, appPaths);
  checkStructuredData(html, pathname);
  const robotsTags = htmlTagsWithAttribute(html, "meta", "name", "robots");
  if (robotsTags.length !== 1) {
    fail(
      `meta robots présente ${robotsTags.length} fois au lieu d'une : ${pathname}`,
    );
  }
  const robotsTag = robotsTags[0];
  const robotsContent = tagAttribute(robotsTag, "content")?.toLowerCase();
  if (
    !robotsContent?.includes("noindex") ||
    !robotsContent.includes("nofollow")
  ) {
    fail(`guide avec porte éditoriale non levée indexable : ${pathname}`);
  }
}

if (failureCount > 0) {
  console.error(
    `[SEO artifact] ${failureCount} erreur(s) bloquante(s) détectée(s).`,
  );
  process.exitCode = 1;
} else {
  console.log(
    `[SEO artifact] OK (${indexingEnabled ? "production indexable" : "preview noindex"}) : robots.txt, sitemap.xml (${sitemapUrls.length} URL), llms.txt (${llmsUrls.length} liens), ${checkedPageCount} pages, ${checkedGuideReadTimeCount} temps de lecture et ${checkedStructuredDataCount} blocs JSON-LD contrôlés.`,
  );
}
