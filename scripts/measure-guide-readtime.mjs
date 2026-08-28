const WORDS_PER_MINUTE = 200;
const baseUrl = (process.env.GUIDE_BASE_URL || "http://localhost:3000").replace(
  /\/$/,
  "",
);
const slugs = process.argv.slice(2);

if (slugs.length === 0) {
  console.error(
    "Usage: node scripts/measure-guide-readtime.mjs <slug> [<slug> ...]",
  );
  process.exit(1);
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

function extractGuideArticleHtml(html) {
  const mainTag = htmlTagWithAttribute(html, "main", "id", "main-content");
  if (!mainTag) return null;

  const mainIndex = html.indexOf(mainTag);
  const openingMatch = /<article\b[^>]*>/gi;
  openingMatch.lastIndex = mainIndex + mainTag.length;
  const opening = openingMatch.exec(html);
  if (!opening) return null;

  const contentStart = opening.index + opening[0].length;
  const articleTag = /<\/?article\b[^>]*>/gi;
  articleTag.lastIndex = contentStart;
  let depth = 1;

  for (let tag = articleTag.exec(html); tag; tag = articleTag.exec(html)) {
    depth += tag[0].startsWith("</") ? -1 : 1;
    if (depth === 0) {
      return html.slice(contentStart, tag.index);
    }
  }

  return null;
}

function stripReadTimeExcludedElements(html) {
  const voidElements = new Set([
    "area",
    "base",
    "br",
    "col",
    "embed",
    "hr",
    "img",
    "input",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr",
  ]);
  const openingElement =
    /<([a-z][a-z0-9-]*)\b(?=[^>]*(?:\bdata-read-time-exclude=["']true["']|\bclass=["'][^"']*\bsr-only\b[^"']*["']))[^>]*>/gi;
  let cursor = 0;
  let output = "";

  for (
    let opening = openingElement.exec(html);
    opening;
    opening = openingElement.exec(html)
  ) {
    output += html.slice(cursor, opening.index);

    const tagName = opening[1].toLowerCase();
    if (voidElements.has(tagName)) {
      cursor = opening.index + opening[0].length;
      openingElement.lastIndex = cursor;
      continue;
    }
    const matchingTag = new RegExp(`</?${tagName}\\b[^>]*>`, "gi");
    matchingTag.lastIndex = opening.index + opening[0].length;
    let depth = 1;
    let closingEnd = -1;

    for (let tag = matchingTag.exec(html); tag; tag = matchingTag.exec(html)) {
      depth += tag[0].startsWith("</") ? -1 : 1;
      if (depth === 0) {
        closingEnd = matchingTag.lastIndex;
        break;
      }
    }

    if (closingEnd === -1) return html;
    cursor = closingEnd;
    openingElement.lastIndex = closingEnd;
  }

  return output + html.slice(cursor);
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
      return Number.isFinite(codePoint) &&
        codePoint >= 0 &&
        codePoint <= 0x10ffff
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

/**
 * `--check` compare la mesure au readTimeMin publié dans le registre.
 *
 * Le 28/08/2026, deux guides annonçaient une durée fausse au hub, chacun dans
 * un sens : 21 min affichées pour 34 min de lecture réelle, et 27 min affichées
 * pour 19. Rien ne pouvait les attraper — `guides.test.ts` ne vérifie que
 * `readTimeMin > 0`, et un comptage refait sur la source dérive de −17 % à
 * +20 % selon la part de code du fichier, donc trop pour servir de barrière.
 *
 * Le seul comptage juste est celui de l'article rendu, que ce script fait déjà.
 * Il exige un serveur, donc il ne peut pas vivre dans la suite de tests : c'est
 * une étape de la passe finale d'un guide, pas un test unitaire.
 */
const checkMode = slugs[0] === "--check";
if (checkMode) slugs.shift();

const registry = checkMode
  ? await import("../src/lib/guides.ts")
      .then((module) => module.GUIDES)
      .catch(() => null)
  : null;

if (checkMode && !registry) {
  console.error(
    "--check : registre illisible depuis node. Utiliser `npx tsx` pour cette commande.",
  );
  process.exit(1);
}

const TOLERANCE_MIN = 1;

for (const slug of slugs) {
  const response = await fetch(`${baseUrl}/guides/${slug}`);
  if (!response.ok) {
    console.error(`${slug}: HTTP ${response.status}`);
    process.exitCode = 1;
    continue;
  }

  const articleHtml = extractGuideArticleHtml(await response.text());
  if (!articleHtml) {
    console.error(`${slug}: article introuvable`);
    process.exitCode = 1;
    continue;
  }

  const visibleText = decodeHtmlText(
    stripReadTimeExcludedElements(articleHtml),
  );
  const wordCount =
    visibleText.match(/[\p{L}\p{N}]+(?:[\u2019'\-][\p{L}\p{N}]+)*/gu)?.length ??
    0;
  const readTime = Math.max(1, Math.round(wordCount / WORDS_PER_MINUTE));

  if (!checkMode) {
    console.log(`${slug}\t${wordCount} mots\t${readTime} min`);
    continue;
  }

  const published = registry.find((guide) => guide.slug === slug)?.readTimeMin;
  if (published === undefined) {
    console.error(`${slug}: absent du registre`);
    process.exitCode = 1;
    continue;
  }

  const drift = Math.abs(published - readTime);
  const status = drift <= TOLERANCE_MIN ? "OK  " : "ÉCART";
  console.log(
    `${status} ${slug}\tmesuré ${readTime} min\tpublié ${published} min`,
  );
  if (drift > TOLERANCE_MIN) process.exitCode = 1;
}
