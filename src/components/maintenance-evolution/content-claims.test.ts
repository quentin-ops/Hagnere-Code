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
});
