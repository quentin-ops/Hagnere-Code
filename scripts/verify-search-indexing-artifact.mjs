import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const artifactRoot = resolve(".next/server/app");
const robotsPath = resolve(artifactRoot, "robots.txt.body");

function fail(message) {
  console.error(`[SEO artifact] ${message}`);
  process.exitCode = 1;
}

if (!existsSync(robotsPath)) {
  fail(`robots.txt introuvable : ${robotsPath}`);
} else {
  const robots = readFileSync(robotsPath, "utf8");

  if (!/^Allow: \/$/m.test(robots)) {
    fail("robots.txt n'autorise pas explicitement l'exploration du site.");
  }
  if (/^Disallow: \/$/m.test(robots)) {
    fail("robots.txt bloque encore l'ensemble du site avec Disallow: /.");
  }
  if (!/^Sitemap: https:\/\/hagnere-code\.ai\/sitemap\.xml$/m.test(robots)) {
    fail("robots.txt ne publie pas le sitemap canonique.");
  }
}

const publicPages = [
  "index.html",
  "agence.html",
  "contact.html",
  "equipe.html",
  "livres-blancs/comparer-devis-site-internet.html",
  "services.html",
  "services/ecommerce.html",
  "services/referencement-google.html",
  "tarifs.html",
];

for (const relativePath of publicPages) {
  const pagePath = resolve(artifactRoot, relativePath);
  if (!existsSync(pagePath)) {
    fail(`page publique absente de l'artefact : ${relativePath}`);
    continue;
  }

  const html = readFileSync(pagePath, "utf8");
  if (/<meta\s+name=["']robots["'][^>]*content=["'][^"']*noindex/i.test(html)) {
    fail(`page publique générée en noindex : ${relativePath}`);
  }
}

if (!process.exitCode) {
  console.log(
    `[SEO artifact] robots.txt et ${publicPages.length} pages publiques sont indexables.`,
  );
}
