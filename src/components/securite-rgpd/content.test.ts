import { describe, expect, it } from "vitest";
import { composedBodyHtml } from "./composed-body";
import { riskRadarHtml } from "./sections/risk-radar";

describe("security and GDPR service credibility", () => {
  it("does not claim an unverified DPO designation or certification", () => {
    expect(composedBodyHtml).not.toMatch(
      /vous nous nommez dpo|dpo certifié afnor|désignation officielle cnil|dpo starter|dpo scale/i,
    );
    expect(composedBodyHtml).toContain(
      "Pas au titre de l'offre actuellement publiée",
    );
    expect(composedBodyHtml).toMatch(/votre DPO ou conseil/i);
  });

  it("keeps deadlines, service levels and legal qualifications scoped", () => {
    expect(composedBodyHtml).not.toMatch(
      /le plus choisi|sla 4 h|plus que 102 jours|sanction max\s*:\s*35 m€|7 % ca|délai légal cnil\s*:\s*généralement|engagement\s*<\/span>\s*<span[^>]*>12 mois/i,
    );
    expect(composedBodyHtml).toMatch(/périmètre.*confirmé au devis/i);
  });

  it("reserves paid legal analysis to qualified advisers", () => {
    expect(composedBodyHtml).not.toMatch(
      /audit des DPA et clauses|SCC \+ analyse transferts|gap RGPD\s*\/\s*AI Act|changements applicables à vous/i,
    );
    expect(composedBodyHtml).toContain(
      "n'incluent ni consultation juridique, ni qualification réglementaire, ni représentation",
    );
    expect(composedBodyHtml).toContain(
      "Consultation et qualification juridiques",
    );
  });

  it("keeps the optional sanction radar sourced and free of invented client gains", () => {
    expect(riskRadarHtml).toContain("https://www.cnil.fr/fr/bilan-sanctions-2025");
    expect(riskRadarHtml).toContain("Amazon France Logistique");
    expect(riskRadarHtml).not.toContain("ANONYMISÉ · 2025");
    expect(riskRadarHtml).not.toContain("LEVIER · OBSERVÉ CHEZ CLIENTS");
    expect(riskRadarHtml).toContain("aucun dossier ne garantit");
    expect(composedBodyHtml).not.toContain("LEVIER · OBSERVÉ CHEZ CLIENTS");
    expect(composedBodyHtml).toContain("EXEMPLE · état de cartographie");
  });

  it("does not claim universal NDA, processor clauses or EU-only vendors", () => {
    expect(composedBodyHtml).not.toMatch(/NDA mutuel J0|article 28 RGPD intégrés à chaque mission/i);
    expect(composedBodyHtml).not.toMatch(/Sous-traitants UE[^<]{0,100}Cloudflare EU/i);
    expect(composedBodyHtml).toContain("sans certification revendiquée");
  });
});
