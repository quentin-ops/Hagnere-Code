import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { GoogleAdsQuoteComparator } from "./GoogleAdsQuoteComparator";

describe("GoogleAdsQuoteComparator", () => {
  it("renders the four models and the three comparison dates", () => {
    const html = renderToStaticMarkup(<GoogleAdsQuoteComparator />);

    expect(html).toContain("Forfait fixe");
    expect(html).toContain("Pourcentage");
    expect(html).toContain("Hybride");
    expect(html).toContain("Temps passé");
    // L'en-tete est empilé depuis que la dernière colonne était amputée de
    // 68px a toutes les largeurs : « 12 mois » puis « HT / TTC / connu ».
    for (const months of [3, 6, 12]) {
      expect(html).toContain(`${months} mois`);
    }
    expect(html).toContain("HT / TTC / connu");
    expect(html).toContain("Comparaison mobile des coûts Google Ads");
  });

  it("exposes the privacy, tax and no-guarantee boundaries", () => {
    const html = renderToStaticMarkup(<GoogleAdsQuoteComparator />);

    expect(html).toContain("Calcul local · saisies non transmises");
    expect(html).toContain("Aucun compte, envoi ou");
    expect(html).toContain("montants saisis dans ce calculateur");
    expect(html).toContain("pas un avis fiscal");
    expect(html).toContain("ne prédit ni les conversions");
    expect(html).toContain("ni la trésorerie");
    expect(html).toContain("ne simule ni montée en charge ni saisonnalité");
  });

  it("compares quote-specific scope, fee ranges, internal time and exit", () => {
    const html = renderToStaticMarkup(<GoogleAdsQuoteComparator />);

    expect(html).toContain("Budget média mensuel hors coût réglementaire");
    expect(html.match(/Assiette mensuelle contractuelle/g)).toHaveLength(2);
    expect(html).toContain("Minimum mensuel");
    expect(html).toContain("Plafond mensuel");
    expect(html).toContain("0 signifie « aucun plafond »");
    expect(html).toContain("Mise à niveau mensuelle du périmètre");
    expect(html.match(/Sommes dues si vous arrêtez l’offre/g)).toHaveLength(4);
    expect(html.match(/Arrêt à 3 mois/g)).toHaveLength(4);
    expect(html.match(/Arrêt à 6 mois/g)).toHaveLength(4);
    expect(html.match(/Arrêt à 12 mois/g)).toHaveLength(4);
    expect(html).toContain('for="quote-fixedExitCost3MonthsHT"');
    expect(html).toContain('id="quote-fixedExitCost12MonthsHT"');
    expect(html).not.toContain("ExitCostAtHorizon");
    expect(html).toContain("dont sortie");
    expect(html).toContain("Coût d’une heure interne");
    expect(html).toContain("Résultats commerciaux et marge par client");
    expect(html).toContain("Période retenue pour la marge par client");
    expect(html).toContain("ne la recalcule pas automatiquement");
    expect(html).toContain("Coût mensuel comparable");
    expect(html).toContain("coût initial comparable");
    expect(html).toContain(
      "Écart par rapport au seuil de couverture, par prospect qualifié",
    );
    expect(html).toContain("masquer les prix et ajustements");
    expect(html).toContain("ouvrir les prix et ajustements");
  });

  it("associates labels explicitly and exposes an accessible desktop table", () => {
    const html = renderToStaticMarkup(<GoogleAdsQuoteComparator />);

    expect(html).toContain('for="quote-monthlyMediaSpendHT"');
    expect(html).toContain('id="quote-monthlyMediaSpendHT"');
    expect(html).not.toMatch(/<label[^>]*>(?:(?!<\/label>)[\s\S])*<input/);
    expect(html).toContain(
      "Comparaison des coûts Google Ads sur trois, six et douze mois",
    );
    expect(html).toContain(
      'role="region" aria-label="Comparaison tabulaire des coûts Google Ads sur trois, six et douze mois" tabindex="0"',
    );
    expect(html).toContain("Placez-y le focus");
    expect(html).toContain("un taux de TVA commun");
    expect(html).not.toContain('aria-live="polite"');
    expect(html).toContain('type="button"');
    expect(html).not.toContain("<form");
  });

  it("uses charged media terminology and a distinct unavailable threshold label", () => {
    const html = renderToStaticMarkup(<GoogleAdsQuoteComparator />);

    expect(html).toContain("CPC média chargé · HT");
    expect(html).toContain("CPA média chargé · HT");
    expect(html).toContain("CPL qualifié média chargé · HT");
    expect(html).toContain("Couverture non calculable");
    expect(html).toContain('data-break-even-status="covered"');
  });
});
