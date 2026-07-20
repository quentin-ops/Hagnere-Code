import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const read = (relativePath: string) =>
  fs.readFileSync(path.join(process.cwd(), relativePath), "utf8");

describe("public commercial consistency", () => {
  it("ne présente pas le comparateur Excel comme un calcul de ROI", () => {
    const page = read("src/app/outils/calculateur-cout-excel/page.tsx");
    expect(page).not.toMatch(/ROI(?:\s|\u00a0)*(?:en|outil)/i);
  });

  it.each([
    "src/app/services/securite-rgpd/page.tsx",
    "src/app/services/maintenance-evolution/page.tsx",
    "src/app/services/sites-vitrines/page.tsx",
    "src/app/services/outils-internes-sur-mesure/page.tsx",
    "src/app/services/contenu-video/page.tsx",
    "src/app/services/publicite-en-ligne/page.tsx",
    "src/app/services/audit-technique/page.tsx",
  ])("ne publie pas d'Offer cachée et divergente dans %s", (file) => {
    expect(read(file)).not.toMatch(/\boffers\s*:/);
  });

  it("ne publie que l'Offer Discovery dont le prix est identique au visible", () => {
    const page = read("src/app/tarifs/page.tsx");
    const visible = read("src/components/tarifs/body.ts");
    expect(page.match(/"@type": "Offer"/g)).toHaveLength(1);
    expect(page).toContain('price: "1500"');
    expect(page).toContain("valueAddedTaxIncluded: false");
    expect(visible).toContain("1 500 €");
  });

  it("qualifie comme hors taxes chaque Offer numérique conservée", () => {
    const paths = [
      "src/app/tarifs/page.tsx",
      "src/app/agence-next-js/page.tsx",
    ];

    for (const file of paths) {
      expect(read(file)).toContain("valueAddedTaxIncluded: false");
    }
  });
});
