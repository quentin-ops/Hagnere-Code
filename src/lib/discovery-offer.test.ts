import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

import {
  DISCOVERY_DEDUCTION_LONG,
  DISCOVERY_DEDUCTION_SENTENCE,
  DISCOVERY_DEDUCTION_SHORT,
  DISCOVERY_PRICE_EUR,
} from "./discovery-offer";

const projectRoot = process.cwd();

function collectSources(dir: string, acc: string[] = []): string[] {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      collectSources(full, acc);
      continue;
    }
    if (!/\.(ts|tsx)$/.test(entry.name)) continue;
    if (/\.test\.tsx?$/.test(entry.name)) continue;
    if (full.endsWith(path.join("lib", "discovery-offer.ts"))) continue;
    acc.push(full);
  }
  return acc;
}

const SOURCES = collectSources(path.join(projectRoot, "src"));

/**
 * Les CGV disposent qu'« aucune autre réduction n'est présumée » hors devis.
 * Une surface publique ne peut donc pas promettre une déduction ferme du
 * Discovery Sprint. L'audit de 2026-08 avait trouvé six emplacements en
 * contradiction avec les CGV et avec quatre autres emplacements du site.
 */
const UNCONDITIONAL_DEDUCTION = [
  /d[ée]duits?\s*(?:e|s)?\s*à\s*100\s*%/i,
  /enti[èe]rement\s+d[ée]duit/i,
  /int[ée]gralement\s+d[ée]duit/i,
  /d[ée]duits?\s+du\s+forfait/i,
  /d[ée]duits?\s+du\s+devis\s+final/i,
  /d[ée]ductibles?\b/i,
];

describe("promesse de déduction du Discovery Sprint", () => {
  it("expose des formulations conditionnelles cohérentes avec les CGV", () => {
    expect(DISCOVERY_PRICE_EUR).toBe(1500);
    for (const copy of [
      DISCOVERY_DEDUCTION_SHORT,
      DISCOVERY_DEDUCTION_SENTENCE,
      DISCOVERY_DEDUCTION_LONG,
    ]) {
      expect(copy).toMatch(/devis/i);
      for (const forbidden of UNCONDITIONAL_DEDUCTION) {
        expect(copy).not.toMatch(forbidden);
      }
    }
  });

  it("n'annonce nulle part une déduction inconditionnelle", () => {
    const offenders: string[] = [];
    for (const file of SOURCES) {
      const source = fs.readFileSync(file, "utf8");
      for (const forbidden of UNCONDITIONAL_DEDUCTION) {
        if (forbidden.test(source)) {
          offenders.push(`${path.relative(projectRoot, file)} → ${forbidden.source}`);
        }
      }
    }
    expect(offenders).toEqual([]);
  });

  it("garde les CGV comme seule source de la réduction", () => {
    const cgv = fs.readFileSync(
      path.join(projectRoot, "src/components/legal/content/cgv.tsx"),
      "utf8",
    );
    expect(cgv).toMatch(/aucune autre réduction n'est présumée/i);
  });
});
