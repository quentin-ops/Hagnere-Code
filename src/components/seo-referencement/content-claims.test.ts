import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const source = readFileSync(new URL("./SeoReferencement.tsx", import.meta.url), "utf8");

describe("SEO public page claims", () => {
  it("limits proof to public pages and scopes price and rights", () => {
    expect(source).not.toMatch(/produits du groupe en production|groupe que nous exploitons|100\s*%[^\n]{0,80}livrables conservés/i);
    expect(source).toContain("pas leur exploitation interne, leur sécurité ou leurs résultats");
    expect(source).toContain("transfert après paiement complet selon les CGV");
    expect(source).toContain("sans accord écrit préalable");
  });

  it("states response timing as a non-guaranteed objective", () => {
    expect(source).not.toMatch(/réponse[^\n]{0,80}sous 24 h/i);
    expect(source).toContain("répondre le prochain jour ouvré, sans délai garanti");
  });
});
