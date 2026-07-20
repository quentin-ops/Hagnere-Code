import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const SITE_ORIGIN = "https://hagnere-code.ai";
const artifactRoot = resolve(".next/server/app");
const robotsPath = resolve(artifactRoot, "robots.txt.body");
const sitemapPath = resolve(artifactRoot, "sitemap.xml.body");
const llmsPath = resolve(artifactRoot, "llms.txt.body");
const guidesSourcePath = resolve("src/lib/guides.ts");
const ORGANIZATION_ID = `${SITE_ORIGIN}/#organization`;
const OBSOLETE_SIRET = /993\s*672\s*856\s*00016|99367285600016/;
const indexingEnabled = process.env.NEXT_PUBLIC_ENV === "production";

let failureCount = 0;

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

function htmlTagWithAttribute(html, tagName, attribute, expectedValue) {
  const tags = html.match(new RegExp(`<${tagName}\\b[^>]*>`, "gi")) ?? [];

  return tags.find((tag) => {
    const value = tag.match(
      new RegExp(`${attribute}=["']([^"']+)["']`, "i"),
    )?.[1];
    return value?.toLowerCase() === expectedValue.toLowerCase();
  });
}

function tagAttribute(tag, attribute) {
  return tag?.match(new RegExp(`${attribute}=["']([^"']+)["']`, "i"))?.[1];
}

function artifactHtmlPath(url) {
  const pathname = new URL(url).pathname.replace(/\/$/, "");
  return resolve(
    artifactRoot,
    pathname === "" ? "index.html" : `${pathname.replace(/^\//, "")}.html`,
  );
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
        if (node.url && node.url !== SITE_ORIGIN) {
          fail(`URL contradictoire pour #organization : ${pathname}`);
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
    });
  }

  if (OBSOLETE_SIRET.test(html)) {
    fail(`ancien SIRET encore présent dans le HTML public : ${pathname}`);
  }

  return checked;
}

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
  } else if (!/^Disallow: \/$/im.test(robots)) {
    fail("robots.txt de preview ne bloque pas l'exploration globale.");
  }
}

const sitemapXml = readRequired(sitemapPath, "sitemap.xml");
const sitemapUrls = sitemapXml
  ? Array.from(sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g), (match) => match[1])
  : [];
const sitemapUrlSet = new Set(sitemapUrls);

if (sitemapXml && sitemapUrls.length === 0) {
  fail("sitemap.xml ne contient aucune URL.");
}
if (sitemapUrlSet.size !== sitemapUrls.length) {
  fail("sitemap.xml contient au moins une URL dupliquée.");
}

let checkedPageCount = 0;
let checkedStructuredDataCount = 0;
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
  const robotsTag = htmlTagWithAttribute(html, "meta", "name", "robots");
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

  const canonicalTag = htmlTagWithAttribute(
    html,
    "link",
    "rel",
    "canonical",
  );
  const canonical = tagAttribute(canonicalTag, "href");
  if (canonical !== url) {
    fail(
      `canonical incohérent pour ${parsed.pathname} : ${canonical ?? "absent"}`,
    );
  }

  if (!/<title>[^<]+<\/title>/i.test(html)) {
    fail(`title absent : ${parsed.pathname}`);
  }
  if (!/<h1(?:\s|>)/i.test(html)) {
    fail(`H1 absent du HTML rendu : ${parsed.pathname}`);
  }
  const mainTag = htmlTagWithAttribute(html, "main", "id", "main-content");
  if (!mainTag) {
    fail(`landmark main#main-content absent : ${parsed.pathname}`);
  } else {
    const mainTargetCount = (
      html.match(/\bid=["']main-content["']/gi) ?? []
    ).length;
    if (mainTargetCount !== 1) {
      fail(
        `cible main-content dupliquée (${mainTargetCount}) : ${parsed.pathname}`,
      );
    }
    const primaryNavIndex = html.search(/<nav\b[^>]*class=["'][^"']*hc-nav/gi);
    const mainIndex = html.indexOf(mainTag);
    if (primaryNavIndex !== -1 && primaryNavIndex > mainIndex) {
      fail(`navigation principale imbriquée dans le main : ${parsed.pathname}`);
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

const guidesSource = readRequired(guidesSourcePath, "registre des guides");
const pendingGuideSlugs = guidesSource
  ? Array.from(
      guidesSource.matchAll(
        /slug:\s*"([^"]+)"[\s\S]{0,1400}?editorialStatus:\s*"ready-for-human-review"/g,
      ),
      (match) => match[1],
    )
  : [];

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
  if (!existsSync(pagePath)) {
    fail(`artefact du guide en attente absent : ${pathname}`);
    continue;
  }

  const html = readFileSync(pagePath, "utf8");
  const robotsTag = htmlTagWithAttribute(html, "meta", "name", "robots");
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
    `[SEO artifact] OK (${indexingEnabled ? "production indexable" : "preview noindex"}) : robots.txt, sitemap.xml (${sitemapUrls.length} URL), llms.txt (${llmsUrls.length} liens), ${checkedPageCount} pages, ${pendingGuideSlugs.length} guides en attente noindex et ${checkedStructuredDataCount} blocs JSON-LD contrôlés.`,
  );
}
