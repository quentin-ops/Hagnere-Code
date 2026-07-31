import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { composedBodyHtml } from "./composed-body";

const componentSource = readFileSync(
  new URL("./OutilsInternes.tsx", import.meta.url),
  "utf8",
);

describe("outils internes public claims", () => {
  it("ne publie pas les anciennes performances non étayées", () => {
    expect(composedBodyHtml).not.toMatch(/40\s*000\s*factures|98[,.]4\s*%|0[,.]004\s*€/i);
    expect(composedBodyHtml).not.toMatch(/\+?14\s*h[^<.]{0,80}(?:gagn|économ)|ROI atteint/i);
    expect(composedBodyHtml).not.toMatch(/taux d'adoption moyen|chez au moins trois clients/i);
  });

  it("ne présente pas les fonctions juridiques comme une conformité automatique", () => {
    expect(composedBodyHtml).not.toMatch(/RGPD (?:clé|clef) en main|100\s*%\s*RGPD/i);
    expect(composedBodyHtml).toContain("les qualifications juridiques restent à valider");
  });

  it("identifie les données de démonstration et les limites du calculateur", () => {
    expect(composedBodyHtml).toContain("EXEMPLE ILLUSTRATIF · DONNÉES FICTIVES");
    expect(composedBodyHtml).toContain("simulation non contractuelle");
    expect(composedBodyHtml).toContain("Ce montant n'est pas une économie garantie");
  });

  it("relie le service au guide de calcul du ROI avec une ancre descriptive", () => {
    expect(componentSource).toContain(
      '"/guides/calculer-roi-application-metier"',
    );
    expect(componentSource).toContain(
      '"Calculer le ROI sans inventer les gains"',
    );
    expect(componentSource).toContain(
      "Quatre ressources pour choisir avant de développer.",
    );
  });
});
