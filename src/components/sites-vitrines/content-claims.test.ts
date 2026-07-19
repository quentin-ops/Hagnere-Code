import { describe, expect, it } from "vitest";
import { composedBodyHtml } from "./composed-body";

describe("sites vitrines public claims", () => {
  it("ne publie pas les métriques commerciales non étayées de l'ancienne page", () => {
    expect(composedBodyHtml).not.toMatch(/98\s*% des positions|5[×x] plus rapide|\+7 à \+15\s*%|ROI se fait en 6[–-]12 mois|2 ans sans risque/i);
  });

  it("identifie la valeur Lighthouse comme un exemple et non une médiane client", () => {
    expect(composedBodyHtml).not.toMatch(/médiane sur nos livraisons/i);
    expect(composedBodyHtml).toContain("Exemple illustratif d'un objectif de performance");
  });
});
