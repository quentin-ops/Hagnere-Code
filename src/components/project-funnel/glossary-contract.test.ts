import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const source = readFileSync(new URL("./ProjectFunnel.tsx", import.meta.url), "utf8");

/**
 * `TERM_DEFINITIONS` alimente les info-bulles des chips du tunnel : une chip
 * dont le libellé est une clé du glossaire affiche un « ? » cliquable.
 *
 * Une définition dont la clé ne correspond à aucun libellé rendu ne s'affiche
 * donc JAMAIS. Neuf des vingt-huit entrées étaient dans ce cas — écrites pour
 * des libellés renommés depuis, ou jamais créés. Rien ne le signalait : le
 * glossaire avait l'air fourni, l'aide n'existait pas.
 *
 * Le test lit la source plutôt que d'importer le module : `ProjectFunnel.tsx`
 * est un composant client volumineux dont les tables de libellés ne sont pas
 * exportées, et c'est bien leur écriture littérale qui doit correspondre.
 */
function definitionKeys(): string[] {
  const start = source.indexOf("const TERM_DEFINITIONS");
  const end = source.indexOf("function termTitle");
  expect(start, "TERM_DEFINITIONS introuvable").toBeGreaterThan(-1);
  expect(end, "termTitle introuvable").toBeGreaterThan(start);
  return [...source.slice(start, end).matchAll(/^\s*"([^"]+)":/gm)].map(
    (match) => match[1],
  );
}

/** Toutes les chaînes littérales du fichier, hors bloc de définitions. */
function renderedLabels(): Set<string> {
  const start = source.indexOf("const TERM_DEFINITIONS");
  const end = source.indexOf("function termTitle");
  const withoutGlossary = source.slice(0, start) + source.slice(end);
  return new Set(
    [...withoutGlossary.matchAll(/"([^"\\\n]+)"/g)].map((match) => match[1]),
  );
}

describe("glossaire du tunnel", () => {
  const keys = definitionKeys();

  it("trouve bien le glossaire qu'il est censé auditer", () => {
    expect(keys.length).toBeGreaterThan(10);
  });

  it("n'expose aucune définition morte", () => {
    const labels = renderedLabels();
    const dead = keys.filter((key) => !labels.has(key));
    expect(
      dead,
      `Ces définitions ne correspondent à aucun libellé rendu et ne s'afficheront jamais : ${dead.join(", ")}. Ajoutez le libellé, ou retirez la définition.`,
    ).toEqual([]);
  });
});
