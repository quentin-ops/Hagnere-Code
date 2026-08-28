import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { composedBodyHtml } from "./composed-body";

const bodySource = readFileSync(new URL("./body.ts", import.meta.url), "utf8");

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

  it("ne promet ni calendrier SEO ni citation par une IA", () => {
    expect(composedBodyHtml).not.toMatch(
      /premiers mouvements à 3 mois|trafic significatif à 6[–-]9 mois|ROI business mesurable à 9[–-]12 mois/i,
    );
    expect(composedBodyHtml).not.toMatch(/faire que votre site soit[^<.]{0,80}l'une de ces sources/i);
  });

  it("ne présume ni capacité, surveillance permanente ni audit inclus", () => {
    expect(composedBodyHtml).not.toMatch(
      /Slack 24\/7|plusieurs milliers de requêtes \/ seconde|auditable en 3[–-]6 mois|audit de sécurité annuel[^<.]{0,80}inclus/i,
    );
  });

  it("présente les scénarios comme fictifs sans répartition inventée", () => {
    expect(composedBodyHtml).toMatch(/scénarios sont fictifs/i);
    expect(composedBodyHtml).toMatch(/situations-types fictives/i);
    expect(composedBodyHtml).not.toMatch(/(?:40|25|20|15)\s*%[^<]{0,50}(?:entrées|transition|post-levée|modernisation)/i);
  });

  it("ne promet ni continuité parfaite, ni rareté, ni durée de vie arbitraire", () => {
    expect(composedBodyHtml).not.toMatch(/aucune coupure|sans coupure|2\s*(?:slots?|places?)\s*Premium|3[–-]5\s*ans|3 à 5 ans/i);
    expect(composedBodyHtml).not.toMatch(/root cause[^<.]{0,60}10\s*min|cause racine[^<.]{0,60}10\s*min/i);
  });

  it("conditionne surveillance, accès et droits au contrat", () => {
    expect(composedBodyHtml).not.toMatch(/monitor(?:é|ing)[^<.]{0,50}24\/7|(?:vidéos?|documentation)[^<.]{0,50}à vie/i);
    expect(composedBodyHtml).not.toMatch(/tout reste en propriété client|propriété client[^<.]{0,80}sans réserve/i);
    expect(composedBodyHtml).toMatch(/titularité, droits, licences et transfert après paiement/i);
    expect(composedBodyHtml).toMatch(/couverture définie au contrat/i);
  });
  it("regroupe programmatiquement les boutons radio du mini-audit (WCAG 1.3.1 / RGAA 11.5)", () => {
    const radioNames = new Set(
      [...composedBodyHtml.matchAll(/name="(audit-q\d)"/g)].map((m) => m[1]),
    );
    const groups = [...composedBodyHtml.matchAll(
      /<div class="me-audit-options" role="radiogroup" aria-labelledby="(me-audit-q\d-title)">/g,
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

  it("nomme les forfaits de run comme la grille tarifaire (Care / Care+ / Care Pro)", () => {
    expect(composedBodyHtml).toContain("<h3>Care</h3>");
    expect(composedBodyHtml).toContain("<h3>Care+</h3>");
    expect(composedBodyHtml).toContain("<h3>Care Pro</h3>");
    expect(composedBodyHtml).not.toMatch(/<h3>(?:Essentiel|Scale|Premium)<\/h3>/);
  });

  it("ne publie ni taille d'équipe ni durée d'engagement absentes du devis", () => {
    expect(composedBodyHtml).not.toMatch(/équipe\s*\d(?:\s*[–-]\s*\d)?\s*pers/i);
    expect(composedBodyHtml).not.toMatch(/\d+\s*mois min\./i);
  });

  it("publie un maillage service→service dans le corps de la page", () => {
    expect(composedBodyHtml).toContain('href="/services/audit-technique"');
    expect(composedBodyHtml).toContain('href="/services/securite-rgpd"');
    expect(composedBodyHtml).toContain('href="/services/saas-applications-metier"');
  });
});
