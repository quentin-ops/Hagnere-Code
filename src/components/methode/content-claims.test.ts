import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { bodyHtml } from "./body";

const pageSource = readFileSync(
  new URL("../../app/methode/page.tsx", import.meta.url),
  "utf8",
);

describe("methode public claims", () => {
  it("n'annonce pas de capacité, pénalité ou résultat automatique", () => {
    const publishedContent = `${bodyHtml}\n${pageSource}`;

    expect(publishedContent).not.toMatch(/pénalité de\s*7\s*%/i);
    expect(publishedContent).not.toMatch(/(?:2|deux) places?[^<.]{0,80}(?:mois|disponible)/i);
    expect(publishedContent).not.toMatch(/résultat commercial garanti/i);
  });

  it("rappelle que capacité et conséquences dépendent du devis", () => {
    expect(bodyHtml).toContain("La capacité disponible et la date réaliste de démarrage");
    expect(bodyHtml).toContain("Aucune pénalité automatique");
  });
});
