import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { composedBodyHtml } from "./composed-body";
import { checklistHtml } from "./sections/checklist";

const bodySource = readFileSync(new URL("./body.ts", import.meta.url), "utf8");

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

  /**
   * Le hero sert une maquette étiquetée « EXEMPLE · FICTIF » qui affiche
   * « Rapport 52 pages · Deck 16 slides · Backlog 28 tickets » et
   * « 28 tickets · 12 quick wins ». La liste des livrables, elle, décrit ce qui
   * est réellement facturé et n'est pas étiquetée : aucun volume de la maquette
   * ne doit y être repris tel quel, sous peine de transformer un décor en
   * engagement — et de contredire la fourchette annoncée juste au-dessus
   * (« 20 à 30 tickets actionnables »).
   */
  it("ne reprend aucun volume de la maquette fictive dans les livrables facturés", () => {
    for (const figure of [
      /\b52\s*pages?\b/i,
      /\b16\s*slides?\b/i,
      /\b28\s*tickets?\b/i,
      /\b12\s*quick\s*wins?\b/i,
    ]) {
      expect(
        checklistHtml,
        `volume de la maquette du hero repris dans les livrables : ${figure}`,
      ).not.toMatch(figure);
    }

    // La seule quantité de tickets publiée reste la fourchette du backlog.
    expect(checklistHtml).toMatch(/20 à 30 tickets/);
  });

  it("ne publie pas de preuve client, d'équipe ou de délai inventés", () => {
    expect(composedBodyHtml).not.toMatch(/attorney-client privilege/i);
    expect(composedBodyHtml).not.toMatch(/ouvrés médian|méthodologie mesurée sur audits livrés/i);
    expect(composedBodyHtml).not.toMatch(/équipe dédiée\s*\d|\d+\s*seniors?\s*\+\s*lead/i);
    expect(composedBodyHtml).not.toMatch(/Express démarre en 3\s*j|Audit livré\s*&amp;\s*facturé/i);
  });

  /**
   * La réserve sur la certification était portée par DEUX sections : la carte
   * « santé » des verticales (retirée de la composition le 28/08/2026) et la
   * question FAQ « Conformité SOC2 / ISO 27001 / HDS / ACPR ».
   *
   * Quand la première a disparu, l'assertion a d'abord été assouplie pour
   * suivre — c'est l'inverse de ce qu'un garde-fou doit faire. Une réserve
   * réglementaire ne s'affaiblit pas parce que la section qui la portait
   * déménage : elle se réécrit dans la section qui reste. La phrase explicite
   * a donc été réintroduite dans la réponse survivante, et l'assertion forte
   * est rétablie.
   */
  it("ne transforme pas la mission en certification officielle", () => {
    expect(composedBodyHtml).not.toMatch(/HDS obligatoire|audit préparatoire indispensable/i);
    expect(composedBodyHtml).not.toMatch(/3[–-]6 mois[^<.]{0,100}certif/i);
    expect(composedBodyHtml).toContain("cette prestation ne délivre pas de certification HDS");
    expect(composedBodyHtml).toContain(
      "aucun gain de délai ni obtention de certification n'est garanti",
    );
  });

  it("ne présente pas le NDA comme universel", () => {
    expect(composedBodyHtml).not.toMatch(/NDA mutuel signé|NDA mutuel \+ clause|signature du NDA/i);
    expect(composedBodyHtml).toContain("NDA éventuel");
  });

  it("ne promet ni calendrier SEO ni citation par une IA", () => {
    expect(composedBodyHtml).not.toMatch(
      /premiers mouvements à 3 mois|trafic significatif à 6[–-]9 mois|ROI business mesurable à 9[–-]12 mois/i,
    );
    expect(composedBodyHtml).not.toMatch(/faire que votre site soit[^<.]{0,80}l'une de ces sources/i);
  });
  it("regroupe programmatiquement les boutons radio du mini-audit (WCAG 1.3.1 / RGAA 11.5)", () => {
    const radioNames = new Set(
      [...composedBodyHtml.matchAll(/name="(audit-q\d)"/g)].map((m) => m[1]),
    );
    const groups = [...composedBodyHtml.matchAll(
      /<div class="at-audit-options" role="radiogroup" aria-labelledby="(at-audit-q\d-title)">/g,
    )];

    expect(groups).toHaveLength(radioNames.size);
    for (const [, labelId] of groups) {
      expect(composedBodyHtml).toContain(`<h3 id="${labelId}">`);
    }
  });

  it("ne conserve aucun footer hérité dans le body", () => {
    expect(bodySource).not.toContain("<footer");
    expect(bodySource).not.toContain("<!-- FOOTER -->");
  });

  it("situe l'audit Express par rapport au Discovery Sprint de la grille tarifaire", () => {
    expect(composedBodyHtml).toMatch(/porte d'entrée payante propre à ce service/i);
    expect(composedBodyHtml).toContain('href="/tarifs"');
  });

  it("publie un maillage service→service dans le corps de la page", () => {
    expect(composedBodyHtml).toContain('href="/services/securite-rgpd"');
    expect(composedBodyHtml).toContain('href="/services/maintenance-evolution"');
    expect(composedBodyHtml).toContain('href="/services/saas-applications-metier"');
  });
});
