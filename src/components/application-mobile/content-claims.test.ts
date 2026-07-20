import { describe, expect, it } from "vitest";
import { composedBodyHtml } from "./composed-body";

describe("application mobile public claims", () => {
  it("aligne les droits sur les CGV", () => {
    expect(composedBodyHtml).not.toMatch(/(?:code|propriété)[^<.]{0,80}(?:J\+1|dès le premier jour)/i);
    expect(composedBodyHtml).not.toMatch(/cession exclusive[^<.]{0,80}(?:dans nos|aux) CGV/i);
  });

  it("ne promet pas de pénalité ou de délai de store par défaut", () => {
    expect(composedBodyHtml).not.toMatch(/pénalité de retard contractuelle|pénalité de retard de 7\s*%/i);
    expect(composedBodyHtml).not.toMatch(/garantie sur 2 stores/i);
  });

  it("ne transforme pas des chiffres viraux en statistiques Apple ou produit", () => {
    expect(composedBodyHtml).not.toMatch(/Apple[^<.]{0,100}(?:refuse|rejette)[^<.]{0,40}40\s*%/i);
    expect(composedBodyHtml).not.toMatch(/désinstallée?[^<.]{0,60}(?:6|six) mois/i);
    expect(composedBodyHtml).not.toMatch(/SLA\s*4\s*h/i);
  });

  it("présente DPO et consentement des mineurs de façon conditionnelle", () => {
    expect(composedBodyHtml).not.toMatch(/données santé[^<.]{0,100}DPO obligatoire/i);
    expect(composedBodyHtml).not.toMatch(/mineurs[^<.]{0,100}double consentement parental/i);
  });
});
