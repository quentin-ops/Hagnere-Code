/**
 * Détecte les sélecteurs de classe CSS qui ne peuvent styler aucun élément.
 *
 * Pourquoi ce contrôle existe : quand une section d'une page service est
 * supprimée, son fichier `sections.css` reste en place. Les octets continuent
 * d'être expédiés — sur les pages `/services/*` qui sont précisément les
 * cibles des campagnes Google Ads. Un relevé du 28/08/2026 a trouvé environ
 * 11 % du CSS source dans ce cas, concentré sur les trois `sections.css` des
 * pages issues des sections supprimées.
 *
 * Méthode, volontairement identique à celle du relevé :
 *   1. tous les jetons `class=` du HTML servi (`.next/server/app/**\/*.html`),
 *      après normalisation de l'échappement RSC (`\"`, `<`) ;
 *   2. plus tout jeton apparaissant dans les sources TS/TSX, pour couvrir le
 *      code non atteint par le build courant ;
 *   3. toute classe d'un sélecteur de `src/**\/*.css` absente des deux
 *      ensembles est comptée morte.
 *
 * Limite assumée : une classe posée à côté d'une classe de base stylée
 * (`sf-field sf-field-message`) est un modificateur sémantique, pas une règle
 * morte — c'est l'inverse du cas cherché ici, et il n'apparaît donc pas dans
 * ce comptage, qui part du CSS et non du HTML.
 *
 * Usage :
 *   npm run build                      # produit .next/server/app/**\/*.html
 *   node scripts/check-dead-css.mjs    # échoue si un fichier régresse
 *   node scripts/check-dead-css.mjs --report   # relevé complet, sans échec
 *   node scripts/check-dead-css.mjs --write    # fige la référence courante
 *
 * La référence vit dans `scripts/dead-css-baseline.json`. Elle plafonne
 * l'existant sans prétendre qu'il est propre : les familles restantes y sont
 * visibles, et aucune ne peut grossir sans faire échouer ce contrôle.
 */

import {
  existsSync,
  readFileSync,
  readdirSync,
  statSync,
  writeFileSync,
} from "node:fs";
import path from "node:path";

const APP_BUILD_DIR = path.resolve(".next/server/app");
const SRC_DIR = path.resolve("src");
const BASELINE_PATH = path.resolve("scripts/dead-css-baseline.json");

function walk(dir, extensions, found = []) {
  for (const entry of readdirSync(dir)) {
    if (entry === "node_modules") continue;
    const full = path.join(dir, entry);
    if (statSync(full).isDirectory()) walk(full, extensions, found);
    else if (extensions.some((ext) => entry.endsWith(ext))) found.push(full);
  }
  return found;
}

/** Jetons `class=` du HTML servi, échappement RSC neutralisé. */
function collectRenderedTokens() {
  if (!existsSync(APP_BUILD_DIR)) return null;

  const tokens = new Set();
  for (const file of walk(APP_BUILD_DIR, [".html"])) {
    const html = readFileSync(file, "utf8")
      .replace(/\\"/g, '"')
      .replace(/\\u003c/gi, "<")
      .replace(/\\u003e/gi, ">");
    for (const match of html.matchAll(
      /class(?:Name)?=(?:"([^"]*)"|'([^']*)')/g,
    )) {
      for (const token of (match[1] ?? match[2] ?? "").split(/\s+/)) {
        if (token) tokens.add(token);
      }
    }
  }
  return tokens;
}

const classSelectorsOf = (css) =>
  [...css.matchAll(/\.(-?[A-Za-z_][\w-]*)/g)].map((match) => match[1]);

function main() {
  const rendered = collectRenderedTokens();
  if (rendered === null) {
    console.error(
      `[CSS mort] artefact de build introuvable : ${APP_BUILD_DIR}\n` +
        "Lancez `npm run build` avant ce contrôle.",
    );
    process.exit(1);
  }

  const sourceText = walk(SRC_DIR, [".ts", ".tsx"])
    .map((file) => readFileSync(file, "utf8"))
    .join("\n");

  const liveCache = new Map();
  const isLive = (name) => {
    const cached = liveCache.get(name);
    if (cached !== undefined) return cached;
    const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const live =
      rendered.has(name) ||
      new RegExp(`(?<![\\w-])${escaped}(?![\\w-])`).test(sourceText);
    liveCache.set(name, live);
    return live;
  };

  const results = [];
  for (const file of walk(SRC_DIR, [".css"]).sort()) {
    const relative = path.relative(process.cwd(), file);
    const names = [...new Set(classSelectorsOf(readFileSync(file, "utf8")))];
    const dead = names.filter((name) => !isLive(name)).sort();
    results.push({ file: relative, classes: names.length, dead });
  }

  const totalDead = results.reduce((sum, r) => sum + r.dead.length, 0);

  if (process.argv.includes("--write")) {
    const baseline = Object.fromEntries(
      results
        .filter((r) => r.dead.length > 0)
        .map((r) => [r.file, r.dead.length]),
    );
    writeFileSync(BASELINE_PATH, `${JSON.stringify(baseline, null, 2)}\n`);
    console.log(
      `[CSS mort] référence écrite : ${BASELINE_PATH} (${totalDead} classes mortes sur ${results.length} fichiers).`,
    );
    return;
  }

  if (process.argv.includes("--report")) {
    for (const r of results.filter((x) => x.dead.length > 0)) {
      console.log(`\n${r.file} — ${r.dead.length}/${r.classes} classes mortes`);
      console.log(`  ${r.dead.join(", ")}`);
    }
    console.log(`\n[CSS mort] total : ${totalDead} classes.`);
    return;
  }

  if (!existsSync(BASELINE_PATH)) {
    console.error(
      `[CSS mort] référence absente : ${BASELINE_PATH}\n` +
        "Lancez `node scripts/check-dead-css.mjs --write` après un build propre.",
    );
    process.exit(1);
  }

  const baseline = JSON.parse(readFileSync(BASELINE_PATH, "utf8"));
  let failures = 0;

  for (const r of results) {
    const allowed = baseline[r.file] ?? 0;
    if (r.dead.length > allowed) {
      failures += 1;
      console.error(
        `[CSS mort] ${r.file} : ${r.dead.length} classes mortes, référence ${allowed}.`,
      );
      console.error(`           ${r.dead.join(", ")}`);
    }
  }

  for (const [file, allowed] of Object.entries(baseline)) {
    const current = results.find((r) => r.file === file);
    if (!current) {
      console.log(`[CSS mort] ${file} a disparu — retirez-le de la référence.`);
      continue;
    }
    if (current.dead.length < allowed) {
      console.log(
        `[CSS mort] ${file} : ${current.dead.length} classes mortes (référence ${allowed}). ` +
          "Resserrez la référence avec `--write`.",
      );
    }
  }

  if (failures > 0) {
    console.error(
      `\n[CSS mort] ${failures} fichier(s) en régression. ` +
        "Supprimez les règles devenues inatteignables, ou justifiez la hausse " +
        "en mettant la référence à jour.",
    );
    process.exit(1);
  }

  console.log(
    `[CSS mort] aucune régression : ${totalDead} classes mortes sur ${results.length} fichiers CSS.`,
  );
}

main();
