import { describe, expect, it } from "vitest";
import { composedBodyHtml } from "./composed-body";

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
      /le plus choisi|sla 4 h|plus que 102 jours|sanction max\s*:\s*35 m€|7 % ca|délai légal cnil\s*:\s*généralement/i,
    );
    expect(composedBodyHtml).toMatch(/périmètre.*confirmé au devis/i);
  });

  it("does not render the unsupported sanctions and client-gain radar", () => {
    expect(composedBodyHtml).not.toContain("Amazon France Logistique");
    expect(composedBodyHtml).not.toContain("LEVIER · OBSERVÉ CHEZ CLIENTS");
    expect(composedBodyHtml).toContain("EXEMPLE · état de cartographie");
  });

  it("does not claim universal NDA, processor clauses or EU-only vendors", () => {
    expect(composedBodyHtml).not.toMatch(/NDA mutuel J0|article 28 RGPD intégrés à chaque mission/i);
    expect(composedBodyHtml).not.toMatch(/Sous-traitants UE[^<]{0,100}Cloudflare EU/i);
    expect(composedBodyHtml).toContain("sans certification revendiquée");
  });
});
