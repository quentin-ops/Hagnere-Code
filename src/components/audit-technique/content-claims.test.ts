import { describe, expect, it } from "vitest";
import { composedBodyHtml } from "./composed-body";

describe("audit technique public claims", () => {
  it("ne présente pas CERT-FR comme une qualification de pentest", () => {
    expect(composedBodyHtml).not.toMatch(/pentest[^<.]{0,80}CERT-FR|agréé CERT-FR/i);
  });

  it("ne présente pas un partenaire PASSI non identifié comme déjà acquis", () => {
    expect(composedBodyHtml).not.toMatch(/notre partenaire[^<.]{0,80}PASSI|partenaire agréé/i);
  });
});
