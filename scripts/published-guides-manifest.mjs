#!/usr/bin/env node

import { createHash } from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

export const PUBLISHED_GUIDES_MANIFEST =
  "docs/research/manifests/published-guides-current.sha256";

const BASE_FILES = [
  "src/lib/guide-page-seo.ts",
  "src/lib/guides.ts",
  "src/lib/search-indexing.ts",
];

function walkFiles(root, relativeDir) {
  const absoluteDir = path.join(root, relativeDir);
  if (!fs.existsSync(absoluteDir)) return [];
  return fs.readdirSync(absoluteDir, { withFileTypes: true }).flatMap((entry) => {
    const relativePath = path.posix.join(relativeDir, entry.name);
    if (entry.isDirectory()) return walkFiles(root, relativePath);
    return entry.isFile() && entry.name !== ".DS_Store" ? [relativePath] : [];
  });
}

function readPublishedSlugs(root) {
  const registry = fs.readFileSync(path.join(root, "src/lib/guides.ts"), "utf8");
  const entries = registry.matchAll(
    /slug:\s*"([a-z0-9-]+)"[\s\S]*?editorialStatus:\s*"(draft|review|published)"/g,
  );
  return [...entries]
    .filter((entry) => entry[2] === "published")
    .map((entry) => entry[1]);
}

export function collectPublishedGuideFiles(root) {
  const paths = new Set(BASE_FILES);
  for (const file of walkFiles(root, "src/components/guides")) paths.add(file);
  for (const slug of readPublishedSlugs(root)) {
    for (const file of walkFiles(root, `src/app/guides/${slug}`)) paths.add(file);
    for (const file of walkFiles(root, `public/guides/${slug}`)) paths.add(file);
  }
  return [...paths]
    .filter((file) => fs.existsSync(path.join(root, file)))
    .sort((a, b) => a.localeCompare(b, "en"));
}

export function buildPublishedGuidesManifest(root) {
  return `${collectPublishedGuideFiles(root)
    .map((file) => {
      const hash = createHash("sha256")
        .update(fs.readFileSync(path.join(root, file)))
        .digest("hex");
      return `${hash}  ${file}`;
    })
    .join("\n")}\n`;
}

export function verifyPublishedGuidesManifest(root) {
  const manifestPath = path.join(root, PUBLISHED_GUIDES_MANIFEST);
  if (!fs.existsSync(manifestPath)) {
    return { ok: false, reason: `${PUBLISHED_GUIDES_MANIFEST} absent` };
  }
  const expected = buildPublishedGuidesManifest(root);
  const actual = fs.readFileSync(manifestPath, "utf8");
  return actual === expected
    ? { ok: true, reason: "snapshot exact" }
    : { ok: false, reason: "snapshot périmé ou incomplet" };
}

function main() {
  const root = process.cwd();
  const mode = process.argv[2] ?? "--check";
  const manifestPath = path.join(root, PUBLISHED_GUIDES_MANIFEST);
  if (mode === "--write") {
    fs.writeFileSync(manifestPath, buildPublishedGuidesManifest(root));
    console.log(`${PUBLISHED_GUIDES_MANIFEST} mis à jour.`);
    return;
  }
  if (mode !== "--check") throw new Error("Usage : --check ou --write");
  const result = verifyPublishedGuidesManifest(root);
  if (!result.ok) throw new Error(result.reason);
  console.log(`${PUBLISHED_GUIDES_MANIFEST} : ${result.reason}.`);
}

if (process.argv[1] && pathToFileURL(process.argv[1]).href === import.meta.url) {
  try {
    main();
  } catch (error) {
    console.error(error instanceof Error ? error.message : error);
    process.exitCode = 1;
  }
}
