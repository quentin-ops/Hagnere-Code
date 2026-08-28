import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

import { FUNNEL_EVENT_NAMES } from "./funnel-analytics";

/**
 * `FUNNEL_EVENT_NAMES` est une union fermée, doublée par l'allowlist de
 * /api/funnel-analytics : y déclarer un nom est le seul moyen d'autoriser un
 * événement. Rien ne vérifiait qu'un nom déclaré soit ENSUITE émis.
 *
 * Deux entrées ne l'étaient pas : `contact_form_open` — le dénominateur du
 * formulaire de contact, donc tout taux d'abandon sur les pages service — et
 * `pf:calendly_booking_confirmed`, dont l'écouteur, construit en parallèle,
 * émettait un autre nom par un autre canal. Un nom déclaré sans émetteur ne
 * produit aucune erreur : simplement une table vide et une mesure qu'on croit
 * en place.
 */

const projectRoot = process.cwd();

function sourceFiles(directory: string): string[] {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const absolute = path.join(directory, entry.name);
    if (entry.isDirectory()) return sourceFiles(absolute);
    if (!/\.tsx?$/.test(entry.name) || /\.test\.tsx?$/.test(entry.name)) {
      return [];
    }
    return [absolute];
  });
}

/**
 * Noms passés à `trackFunnelEvent` ou `trackLeadConversion` quelque part dans
 * `src/`. On ne compte pas une simple mention : seul un argument d'appel prouve
 * qu'un composant émet réellement l'événement.
 */
function emittedNames(): Set<string> {
  const call = /track(?:FunnelEvent|LeadConversion)\(([^)]*)/g;
  const emitted = new Set<string>();

  for (const file of sourceFiles(path.join(projectRoot, "src"))) {
    const content = fs.readFileSync(file, "utf8");
    for (const match of content.matchAll(call)) {
      for (const literal of match[1].matchAll(/"([^"]+)"/g)) {
        emitted.add(literal[1]);
      }
    }
  }
  return emitted;
}

describe("chaque événement déclaré a un émetteur", () => {
  const emitted = emittedNames();

  it("trouve bien les appels qu'il est censé auditer", () => {
    // Si l'extraction casse, le test deviendrait rouge à tort ou vert à vide.
    expect(emitted.size).toBeGreaterThanOrEqual(FUNNEL_EVENT_NAMES.length);
    expect(emitted.has("pf:funnel_open")).toBe(true);
  });

  it.each(FUNNEL_EVENT_NAMES)(
    "%s est émis par au moins un composant",
    (name) => {
      expect(
        emitted.has(name),
        `${name} est déclaré dans FUNNEL_EVENT_NAMES et autorisé par /api/funnel-analytics, mais aucun appel à trackFunnelEvent ou trackLeadConversion ne l'émet : retirez-le, ou branchez l'émetteur.`,
      ).toBe(true);
    },
  );
});
