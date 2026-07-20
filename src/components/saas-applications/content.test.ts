import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { composedBodyHtml } from "./composed-body";

const servicePageSource = readFileSync(
  new URL("../../app/services/saas-applications-metier/page.tsx", import.meta.url),
  "utf8",
);

describe("SaaS service page credibility", () => {
  it("uses only the verified internal products as proof", () => {
    expect(composedBodyHtml).toContain("LMNP.AI");
    expect(composedBodyHtml).toContain("SCI-AI.app");
    expect(composedBodyHtml).toContain("Aucun témoignage à afficher");
    expect(composedBodyHtml).not.toContain("Comptabilité AI");
    expect(composedBodyHtml).not.toMatch(/clients payants|investisseurs confirmés|levée en cours/i);
  });

  it("does not publish fabricated history or universal infrastructure claims", () => {
    const publishedContent = `${composedBodyHtml}\n${servicePageSource}`;

    expect(publishedContent).not.toMatch(/dans 70\s?%|dans 30\s?%/i);
    expect(publishedContent).not.toMatch(/chaque semaine en call/i);
    expect(publishedContent).not.toMatch(/plusieurs milliers de requêtes/i);
    expect(publishedContent).not.toMatch(/on a déjà livré du code soumis/i);
    expect(publishedContent).not.toMatch(/sauvegardes toutes les 15 minutes/i);
    expect(publishedContent).not.toMatch(/au-delà de 10 utilisateurs payants/i);
    expect(publishedContent).not.toMatch(/le plus choisi/i);
    expect(publishedContent).not.toMatch(/30 jours[^<.]{0,60}garantie|garantie[^<.]{0,60}30 jours/i);
  });

  it("connects the service decision to the three relevant guides", () => {
    expect(composedBodyHtml).toContain("/guides/transformer-excel-en-application");
    expect(composedBodyHtml).toContain("/guides/no-code-ou-sur-mesure");
    expect(composedBodyHtml).toContain("/guides/combien-coute-un-saas");
  });

  it("states that ranges need scoping and that architecture choices are documented", () => {
    expect(composedBodyHtml).toContain("pas à promettre une date");
    expect(composedBodyHtml).toContain("RPO et RTO");
    expect(composedBodyHtml).toContain("Aucun dépassement unilatéral");
  });

  it("limits SaaS proof to public availability and visible functions", () => {
    expect(composedBodyHtml).not.toMatch(/nous les faisons tourner tous les jours|joignables quand la période déclarative|factures d'hébergement|utilisé en interne tous les jours|exploité par nos soins/i);
    expect(composedBodyHtml).toContain("pages SaaS à vérifier directement");
    expect(composedBodyHtml).toContain("page publique à consulter");
  });
});
