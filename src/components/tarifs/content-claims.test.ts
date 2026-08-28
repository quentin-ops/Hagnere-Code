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
    // Motif générique : aucune inclusion d'hébergement ne peut être présentée
    // comme acquise ailleurs que dans le devis (cf. « Aucune inclusion implicite »).
    expect(publishedContent).not.toMatch(
      /h[ée]bergement[^<.]{0,40}(?:inclus|offert)/i,
    );
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

  it("ne republie pas les affirmations d'effectif bannies des pages services", () => {
    const publishedContent = `${bodyHtml}\n${pageSource}`;

    // Motifs interdits par publicite-en-ligne/content-claims.test.ts et
    // audit-technique/content-claims.test.ts : /tarifs vend les mêmes
    // prestations et ne peut pas rouvrir la brèche.
    expect(publishedContent).not.toMatch(
      /équipe dédiée\s*\d|équipe\s*\d+\s*pers|consultant senior dédié/i,
    );
    expect(publishedContent).not.toMatch(/\d+\s*seniors?\b|\bun senior\b/i);
    expect(publishedContent).not.toMatch(/\d+\s*seniors?\s*\+\s*lead/i);
  });

  it("aligne les lignes SEO et mobile sur ce que les pages service acceptent de chiffrer", () => {
    const publishedContent = `${bodyHtml}\n${pageSource}`;

    // /services/referencement-google ne publie aucun montant, et
    // /services/application-mobile écrit « on ne chiffre jamais ».
    expect(publishedContent).not.toMatch(
      /Fondations|Croissance —|1 450\s*€|2 850\s*€|4 900\s*€/i,
    );
    expect(publishedContent).not.toMatch(/\+12,5\s*k€/i);
    expect(bodyHtml).toContain("Audit SEO actionnable");
    expect(bodyHtml).toContain("Sprint de correction");
    expect(bodyHtml).toContain("Accompagnement organique");
    expect(bodyHtml).toContain("Lancement —");
    expect(bodyHtml).toContain("Performance —");
    expect(bodyHtml).toContain("Sur-mesure —");
  });
});
