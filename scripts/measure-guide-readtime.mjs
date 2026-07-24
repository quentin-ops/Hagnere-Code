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
  return htmlTagsWithAttribute(
    html,
    tagName,
    attribute,
    expectedValue,
  )[0];
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
  const openingElement =
    /<([a-z][a-z0-9-]*)\b[^>]*\bdata-read-time-exclude=["']true["'][^>]*>/gi;
  let cursor = 0;
  let output = "";

  for (
    let opening = openingElement.exec(html);
    opening;
    opening = openingElement.exec(html)
  ) {
    output += html.slice(cursor, opening.index);

    const tagName = opening[1];
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
    visibleText.match(/[\p{L}\p{N}]+(?:[\u2019'\-][\p{L}\p{N}]+)*/gu)
      ?.length ?? 0;
  const readTime = Math.max(1, Math.round(wordCount / WORDS_PER_MINUTE));

  console.log(`${slug}\t${wordCount} mots\t${readTime} min`);
}
