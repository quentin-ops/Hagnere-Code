import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { bodyHtml } from "./body";

const pageSource = readFileSync(
  new URL("../../app/tarifs/page.tsx", import.meta.url),
  "utf8",
);

describe("tarifs public claims", () => {
  it("ne présente pas un faux sondage ou des habitudes historiques comme des preuves", () => {
    const publishedContent = `${bodyHtml}\n${pageSource}`;

    expect(publishedContent).not.toMatch(/sondé une cinquantaine|comparatif fondé sur 47 devis/i);
    expect(publishedContent).not.toMatch(/on n['’]a jamais facturé/i);
  });

  it("aligne paiement, hébergement, garantie et SLA sur le devis", () => {
    const publishedContent = `${bodyHtml}\n${pageSource}`;

    expect(publishedContent).not.toMatch(/30\s*% à la signature[^<.]{0,100}40\s*% à la livraison/i);
    expect(publishedContent).not.toMatch(/hébergement est inclus 6 à 12 mois/i);
    expect(publishedContent).not.toMatch(/SLA\s*99[,.][59]\s*%/i);
    expect(publishedContent).not.toMatch(/30\s*j(?:ours)?[^<.]{0,80}garantie|garantie[^<.]{0,80}30\s*j/i);
    expect(publishedContent).not.toMatch(/Conformité RGPD clé en main/i);
    expect(publishedContent).toContain("Aucune inclusion implicite");
  });

  it("ne promet aucun quota SEO public d'articles ou de liens", () => {
    const publishedContent = `${bodyHtml}\n${pageSource}`;

    expect(publishedContent).not.toMatch(
      /(?:8|14|20\+?)\s*(?:articles?|contenus?)/i,
    );
    expect(publishedContent).not.toMatch(
      /(?:3|6)\s*(?:BL|backlinks?|liens? entrants?)/i,
    );
    expect(publishedContent).toContain(
      "Qualité, formats, validation et acquisition définis au devis",
    );
    expect(publishedContent).toContain(
      "production et acquisition cadrées au devis",
    );
  });
});
