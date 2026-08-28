import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

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
    acc.push(full);
  }
  return acc;
}

const SOURCES = collectSources(path.join(projectRoot, "src"));

/**
 * Les CGV ne stipulent aucune garantie de non-dépassement ni pénalité : elles
 * excluent au contraire par défaut « frais de déplacement, licences, achats
 * médias, services tiers et consommations d'infrastructure », et prévoient
 * qu'une demande modifiant le périmètre passe par un chiffrage ou un avenant.
 *
 * Un absolu publié sans cette contrepartie est une garantie commerciale que
 * le contrat ne porte pas — exactement ce que sanctionne l'art. L121-2 du code
 * de la consommation, applicable au B2B.
 *
 * Le garde-fou existait sur la page d'accueil seule ; l'audit de 2026-08 a
 * trouvé les mêmes absolus intacts sur /tarifs, y compris dans son <title>.
 * Il couvre désormais tout src/.
 */
const FORBIDDEN_ABSOLUTES: ReadonlyArray<readonly [RegExp, string]> = [
  [/jamais de surprise/i, "promet l'absence totale d'imprévu"],
  [/0\s*(?:€\s*de\s*)?d[ée]passement/i, "chiffre un dépassement nul"],
  [/aucun d[ée]passement cach[ée]/i, "promet l'absence de dépassement caché"],
  [/budget annonc[ée]\s*=\s*budget factur[ée]/i, "promet une égalité de prix absolue"],
  [/prix annonc[ée]\s*=\s*prix pay[ée]/i, "promet une égalité de prix absolue"],
  [/le total ne bouge pas/i, "promet un total intangible"],
  [/qui ne bougent jamais/i, "promet des règles intangibles"],
  [/garantie sprint fixe/i, "présente une méthode comme une garantie"],
];

/** La formulation validée : elle nomme la contrepartie réelle (l'accord écrit). */
const VALIDATED_WORDING = /aucun (?:ajout|d[ée]passement) sans (?:votre )?accord écrit/i;

describe("garanties absolues sur les surfaces publiques", () => {
  it("ne publie aucun absolu que les CGV ne portent pas", () => {
    const offenders: string[] = [];
    for (const file of SOURCES) {
      const source = fs.readFileSync(file, "utf8");
      for (const [pattern, why] of FORBIDDEN_ABSOLUTES) {
        if (pattern.test(source)) {
          offenders.push(`${path.relative(projectRoot, file)} — ${why}`);
        }
      }
    }
    expect(offenders).toEqual([]);
  });

  it("garde la formulation contractuelle validée sur les pages de prix", () => {
    const pricingSurfaces = [
      "src/components/tarifs/body.ts",
      "src/components/homepage/body.ts",
    ];
    for (const relative of pricingSurfaces) {
      const source = fs.readFileSync(path.join(projectRoot, relative), "utf8");
      expect(source, relative).toMatch(VALIDATED_WORDING);
    }
  });

  it("garde les CGV comme source de l'exclusion de périmètre", () => {
    const cgv = fs.readFileSync(
      path.join(projectRoot, "src/components/legal/content/cgv.tsx"),
      "utf8",
    );
    expect(cgv).toMatch(/avenant|chiffrage|arbitrage/i);
  });
});
