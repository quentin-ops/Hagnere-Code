#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const REGISTRY_MARKER =
  "\n];\n\n/** Une entrée n'est publique que si sa porte éditoriale est explicitement ouverte. */";

function render(template, replacements) {
  return Object.entries(replacements).reduce(
    (result, [token, value]) => result.replaceAll(token, value),
    template,
  );
}

function registryEntry({ slug, title, section, description, now }) {
  const value = (text) => JSON.stringify(text);
  return `  {
    slug: ${value(slug)},
    title: ${value(title)},
    cardTitle: ${value(title)},
    metaDescription: ${value(description)},
    cardDescription: ${value(description)},
    heroTitle: ${value(title)},
    section: ${value(section)},
    editorialStatus: "draft",
    datePublished: ${value(now)},
    dateModified: ${value(now)},
    readTimeMin: 1,
  },`;
}

export function scaffoldGuide({
  root,
  slug,
  title,
  section,
  description = "Brouillon privé à rechercher, rédiger et vérifier avant publication.",
  templateDir = path.join(root, "scripts", "templates", "guide"),
  now = new Date().toISOString(),
  dryRun = false,
  reuseResearch = false,
}) {
  if (!SLUG_PATTERN.test(slug ?? "")) {
    throw new Error("Le slug doit être en minuscules, chiffres et tirets simples.");
  }
  if (!title?.trim() || !section?.trim()) {
    throw new Error("Le titre et le silo éditorial sont obligatoires.");
  }
  if (description.length > 155) {
    throw new Error("La meta description du brouillon ne doit pas dépasser 155 caractères.");
  }

  const guideDir = path.join(root, "src", "app", "guides", slug);
  const pagePath = path.join(guideDir, "page.tsx");
  const ogPath = path.join(guideDir, "opengraph-image.tsx");
  const researchPath = path.join(root, "docs", "research", `${slug}.md`);
  const registryPath = path.join(root, "src", "lib", "guides.ts");
  const targets = [pagePath, ogPath, researchPath];

  for (const target of [pagePath, ogPath]) {
    if (fs.existsSync(target)) {
      throw new Error(`Refus d'écraser un fichier existant : ${target}`);
    }
  }
  if (reuseResearch && !fs.existsSync(researchPath)) {
    throw new Error(`Dossier historique introuvable : ${researchPath}`);
  }
  if (!reuseResearch && fs.existsSync(researchPath)) {
    throw new Error(`Refus d'écraser un fichier existant : ${researchPath}`);
  }

  const registry = fs.readFileSync(registryPath, "utf8");
  if (registry.includes(`slug: ${JSON.stringify(slug)}`)) {
    throw new Error(`Le slug ${slug} existe déjà dans le registre.`);
  }
  if (!registry.includes(REGISTRY_MARKER)) {
    throw new Error("Marqueur du registre introuvable ; aucun fichier n'a été créé.");
  }

  const replacements = {
    __SLUG_JSON__: JSON.stringify(slug),
    __TITLE_JSON__: JSON.stringify(title.trim()),
    __SECTION_JSON__: JSON.stringify(section.trim()),
  };
  const page = render(
    fs.readFileSync(path.join(templateDir, "page.tsx.template"), "utf8"),
    replacements,
  );
  const og = render(
    fs.readFileSync(
      path.join(templateDir, "opengraph-image.tsx.template"),
      "utf8",
    ),
    replacements,
  );
  const researchTemplate = fs.readFileSync(
    path.join(root, "docs", "research", "_modele-guide.md"),
    "utf8",
  );
  const research = researchTemplate
    .replace("Slug :", `Slug : ${slug}`)
    .replace("Statut actuel : Brouillon", "Statut actuel : Brouillon privé")
    .replace(
      "Requête principale, encore hypothétique avant recherche :",
      `Requête principale, encore hypothétique avant recherche : ${title.trim()}`,
    );
  const nextRegistry = registry.replace(
    REGISTRY_MARKER,
    `\n${registryEntry({
      slug,
      title: title.trim(),
      section: section.trim(),
      description,
      now,
    })}${REGISTRY_MARKER}`,
  );

  if (!dryRun) {
    fs.mkdirSync(guideDir, { recursive: true });
    fs.writeFileSync(pagePath, page);
    fs.writeFileSync(ogPath, og);
    if (!reuseResearch) fs.writeFileSync(researchPath, research);
    fs.writeFileSync(registryPath, nextRegistry);
  }

  return {
    slug,
    status: "draft",
    research: reuseResearch ? "reused" : "created",
    targets,
    registryPath,
    dryRun,
  };
}

function parseArgs(argv) {
  const values = {};
  for (let index = 0; index < argv.length; index += 1) {
    const key = argv[index];
    if (key === "--dry-run" || key === "--reuse-research") {
      values[key.slice(2)] = true;
      continue;
    }
    if (!key.startsWith("--") || !argv[index + 1]) {
      throw new Error(`Argument invalide : ${key}`);
    }
    values[key.slice(2)] = argv[index + 1];
    index += 1;
  }
  return values;
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  if (!args.slug || !args.title || !args.section) {
    throw new Error(
      "Usage : npm run scaffold:guide -- --slug mon-guide --title \"Titre\" --section \"Silo\" [--description \"...\"] [--reuse-research] [--dry-run]",
    );
  }
  const result = scaffoldGuide({
    root: process.cwd(),
    slug: args.slug,
    title: args.title,
    section: args.section,
    description: args.description,
    dryRun: args["dry-run"] === true,
    reuseResearch: args["reuse-research"] === true,
  });
  console.log(JSON.stringify(result, null, 2));
}

if (process.argv[1] && pathToFileURL(process.argv[1]).href === import.meta.url) {
  try {
    main();
  } catch (error) {
    console.error(error instanceof Error ? error.message : error);
    process.exitCode = 1;
  }
}
