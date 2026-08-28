/**
 * Mesure le nombre d'éléments DOM de chaque guide publié, à partir de
 * l'artefact de build.
 *
 * Applique à l'identique le protocole de
 * `docs/dette-technique-duplication-dom.md` (section « Protocole ») : on
 * compte les balises ouvrantes du HTML servi. Le comptage est le même que
 * l'on neutralise ou non les blocs `<script>` et `<style>` — la charge RSC
 * est sérialisée en chaînes échappées et n'introduit aucune balise.
 *
 * Usage :
 *   npm run build            # produit .next/server/app/guides/*.html
 *   node scripts/measure-guide-dom-elements.mjs
 *   node scripts/measure-guide-dom-elements.mjs --markdown
 *
 * Deux colonnes sont produites :
 *   - « total » : le nombre d'éléments de la page entière ;
 *   - « coquille » : le nombre d'éléments du bloc `<footer>`, identique sur
 *     tous les guides. Cette colonne existe parce que le dépassement du
 *     27/08/2026 ne venait pas du contenu d'un guide mais de la coquille
 *     partagée : `src/components/design-shared/SiteFooter.tsx` a décalé les
 *     18 guides du même nombre d'éléments d'un coup. Sans elle, on relit le
 *     mauvais fichier.
 *
 * Le garde-fou automatique est ailleurs :
 * `src/components/guides/guide-dom-element-budget.test.ts`. Ce script sert à
 * réécrire le tableau de référence du document quand la mesure a bougé pour
 * une raison assumée.
 */

import { existsSync, readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const GUIDES_BUILD_DIR = path.resolve(".next/server/app/guides");

/** Protocole du document : nombre de balises ouvrantes. */
export function countElements(html) {
  return (html.match(/<[a-zA-Z][a-zA-Z0-9-]*[\s>/]/g) || []).length;
}

/** Éléments du bloc `<footer>` — la coquille partagée par tous les guides. */
export function countFooterElements(html) {
  const start = html.indexOf("<footer");
  const end = html.lastIndexOf("</footer>");
  if (start === -1 || end === -1 || end < start) return null;
  return countElements(html.slice(start, end + "</footer>".length));
}

export function measureBuiltGuides() {
  if (!existsSync(GUIDES_BUILD_DIR)) return [];

  return readdirSync(GUIDES_BUILD_DIR)
    .filter((name) => name.endsWith(".html"))
    .map((name) => {
      const html = readFileSync(path.join(GUIDES_BUILD_DIR, name), "utf8");
      return {
        slug: name.replace(/\.html$/, ""),
        elements: countElements(html),
        footerElements: countFooterElements(html),
      };
    })
    .sort((a, b) => a.elements - b.elements);
}

function median(values) {
  const sorted = [...values].sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0
    ? (sorted[middle - 1] + sorted[middle]) / 2
    : sorted[middle];
}

// Exécuté en ligne de commande uniquement : le test vitest importe ce module.
const isMain =
  Boolean(process.argv[1]) &&
  path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);

if (isMain) {
  const measures = measureBuiltGuides();

  if (measures.length === 0) {
    console.error(
      `[guides DOM] artefact de build introuvable : ${GUIDES_BUILD_DIR}\n` +
        "Lancez `npm run build` avant de mesurer.",
    );
    process.exit(1);
  }

  const counts = measures.map((m) => m.elements);
  const min = measures[0];
  const max = measures[measures.length - 1];
  const footers = new Set(measures.map((m) => m.footerElements));

  if (process.argv.includes("--markdown")) {
    console.log("| Repère | Valeur | Guide |");
    console.log("|---|---|---|");
    console.log(`| Minimum | ${min.elements} éléments | \`${min.slug}\` |`);
    console.log(`| Médiane | ${median(counts)} éléments | — |`);
    console.log(`| Maximum | ${max.elements} éléments | \`${max.slug}\` |`);
  } else {
    for (const m of measures) {
      console.log(`${String(m.elements).padStart(6)}  ${m.slug}`);
    }
    console.log("");
    console.log(`guides mesurés : ${measures.length}`);
    console.log(`minimum        : ${min.elements} (${min.slug})`);
    console.log(`médiane        : ${median(counts)}`);
    console.log(`maximum        : ${max.elements} (${max.slug})`);
  }

  console.log("");
  if (footers.size === 1) {
    console.log(
      `coquille <footer> : ${[...footers][0]} éléments, identique sur les ${measures.length} guides.`,
    );
  } else {
    console.log(
      `coquille <footer> : comptages DIFFÉRENTS selon les guides (${[...footers].join(", ")}) — ` +
        "un rendu conditionnel s'est glissé dans le pied de page.",
    );
  }
}
