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

  it("identifie clairement le rapport du hero comme une démonstration", () => {
    expect(composedBodyHtml).toContain(
      "EXEMPLE INTERNE ILLUSTRATIF — PAS UN RAPPORT CLIENT NI UNE MESURE RÉELLE",
    );
    expect(composedBodyHtml).toContain("EXEMPLE · FICTIF");
  });

  it("ne publie pas de preuve client, d'équipe ou de délai inventés", () => {
    expect(composedBodyHtml).not.toMatch(/attorney-client privilege/i);
    expect(composedBodyHtml).not.toMatch(/ouvrés médian|méthodologie mesurée sur audits livrés/i);
    expect(composedBodyHtml).not.toMatch(/équipe dédiée\s*\d|\d+\s*seniors?\s*\+\s*lead/i);
    expect(composedBodyHtml).not.toMatch(/Express démarre en 3\s*j|Audit livré\s*&amp;\s*facturé/i);
  });

  it("ne transforme pas la mission en certification officielle", () => {
    expect(composedBodyHtml).not.toMatch(/HDS obligatoire|audit préparatoire indispensable/i);
    expect(composedBodyHtml).not.toMatch(/3[–-]6 mois[^<.]{0,100}certif/i);
    expect(composedBodyHtml).toContain("cette prestation ne délivre pas de certification HDS");
  });

  it("ne présente pas le NDA comme universel", () => {
    expect(composedBodyHtml).not.toMatch(/NDA mutuel signé|NDA mutuel \+ clause|signature du NDA/i);
    expect(composedBodyHtml).toContain("NDA éventuel");
  });
});
