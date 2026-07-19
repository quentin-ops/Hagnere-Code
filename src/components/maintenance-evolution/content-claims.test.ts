import { describe, expect, it } from "vitest";
import { composedBodyHtml } from "./composed-body";

describe("maintenance public claims", () => {
  it("ne transforme pas les CGV génériques en SLA ou remise automatique", () => {
    expect(composedBodyHtml).not.toMatch(/pénalit(?:é|és)[^<.]{0,80}auto/i);
    expect(composedBodyHtml).not.toMatch(/déduit(?:s)? à 100\s*%|préavis 60\s*j[^<.]{0,50}CGV/i);
  });

  it("ne publie pas de statistiques clients non étayées", () => {
    expect(composedBodyHtml).not.toMatch(/40\s*% des nouveaux clients|80\s*% de nos transitions/i);
    expect(composedBodyHtml).not.toMatch(/maximum 8 clients actifs/i);
  });

  it("n'annonce pas une passation gratuite ou un transfert IP anticipé par défaut", () => {
    expect(composedBodyHtml).not.toMatch(/5 jours? (?:de )?passation offerts?/i);
    expect(composedBodyHtml).not.toMatch(/propriété client[^<.]{0,80}(J\+1|dès le premier jour)/i);
  });
});
