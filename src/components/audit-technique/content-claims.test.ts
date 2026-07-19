import { describe, expect, it } from "vitest";
import { composedBodyHtml } from "./composed-body";

describe("audit technique public claims", () => {
  it("ne présente pas CERT-FR comme une qualification de pentest", () => {
    expect(composedBodyHtml).not.toMatch(/pentest[^<.]{0,80}CERT-FR|agréé CERT-FR/i);
  });

  it("ne présente pas un partenaire PASSI non identifié comme déjà acquis", () => {
    expect(composedBodyHtml).not.toMatch(/notre partenaire[^<.]{0,80}PASSI|partenaire agréé/i);
  });

  it("n'annonce ni remboursement automatique ni transfert avant paiement complet", () => {
    expect(composedBodyHtml).not.toMatch(/50\s*%\s*rembours|100\s*%\s*déduit/i);
    expect(composedBodyHtml).not.toMatch(/propriété client exclusive[^<.]{0,80}(J\+10|dès)/i);
  });

  it("ne promet pas un téléchargement ou des licences enterprise inexistants", () => {
    expect(composedBodyHtml).not.toMatch(/PDF[^<.]{0,80}téléchargeable avant signature/i);
    expect(composedBodyHtml).not.toMatch(/licences? enterprise[^<.]{0,80}inclus/i);
  });
});
