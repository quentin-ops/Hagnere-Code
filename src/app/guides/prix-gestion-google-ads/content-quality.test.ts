import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const slugDirectory = dirname(fileURLToPath(import.meta.url));
const repositoryRoot = resolve(slugDirectory, "../../../..");
const pageSource = readFileSync(resolve(slugDirectory, "page.tsx"), "utf8");
const normalizedPageSource = pageSource.replace(/\s+/g, " ");
const comparatorSource = readFileSync(
  resolve(repositoryRoot, "src/components/guides/GoogleAdsQuoteComparator.tsx"),
  "utf8",
);

describe("public content quality for the Google Ads quote guide", () => {
  it("keeps the visible H1 aligned with the registered hero headline", () => {
    expect(pageSource).toContain('heroTitle="Combien coûte vraiment"');
    expect(pageSource).toContain('heroTitleEm="la gestion de Google Ads ?"');
    expect(pageSource).not.toContain('heroTitleSuffix=": comparez');
    expect(pageSource).toContain("buildGuideStructuredData");
  });

  it("does not promise automatic ownership or unsupported structured data", () => {
    expect(pageSource).toContain(
      "Propriété, accès et actifs inventoriés au devis",
    );
    expect(pageSource).not.toContain(
      "Mesure et actifs rattachés au compte de l’annonceur",
    );
    expect(pageSource).not.toMatch(
      /\b(?:FAQPage|HowTo|Review|AggregateRating|wordCount)\b/,
    );
  });

  it("keeps the current legal, platform and privacy boundaries visible", () => {
    for (const reference of [
      "LEGIARTI000031011011",
      "cookies-et-autres-traceurs/regles/cookies/FAQ",
      "support.google.com/google-ads/answer/9750227",
      "support.google.com/google-ads/answer/10486536",
      "support.google.com/google-ads/answer/7456530",
      "support.google.com/google-ads/answer/2454137",
    ]) {
      expect(pageSource).toContain(reference);
    }
    expect(pageSource).toContain(
      "Aucun de ces trois niveaux ne suffit à définir votre montage",
    );
    expect(pageSource).toMatch(/refus doit\s+être aussi facile/);
  });

  it("explains the calculator's margin period, scope and exit limits", () => {
    expect(pageSource).toContain("sa propre assiette contractuelle");
    expect(pageSource).toContain("0 signifie « aucun plafond »");
    expect(normalizedPageSource).toContain("scénario mois par mois");
    expect(normalizedPageSource).toContain("pas un échéancier");
    expect(normalizedPageSource).toContain(
      "Si vous modifiez la période, adaptez aussi la marge par client : le calculateur ne la recalcule pas automatiquement",
    );
    expect(normalizedPageSource).toContain(
      "les sommes dues si vous arrêtez à 3, 6 ou 12 mois",
    );
    expect(pageSource).toContain("préavis encore facturé");
    expect(comparatorSource).toContain("Couverture non calculable");
    expect(comparatorSource).not.toContain('aria-live="polite"');
  });

  it("uses charged media terminology instead of mimicking the platform UI", () => {
    expect(pageSource).toContain("CPC média chargé HT");
    expect(pageSource).toContain("CPA média chargé HT");
    expect(pageSource).toContain("CPL qualifié média chargé HT");
    expect(normalizedPageSource).toContain("CPC média chargé vaut 5,10 € HT");
    expect(normalizedPageSource).toContain("CPA média chargé 102 € HT");
    expect(normalizedPageSource).toContain(
      "CPL qualifié média chargé 255 € HT",
    );
    expect(normalizedPageSource).toContain(
      "peuvent donc différer de celles affichées dans l’interface Google Ads",
    );
  });

  it("keeps the audited price and interface wording exact and bounded", () => {
    expect(normalizedPageSource).toContain(
      "Les prix affichés vont de 90 € HT à plusieurs milliers d’euros par mois",
    );
    expect(pageSource).not.toContain("quelques dizaines");
    expect(normalizedPageSource).toContain(
      "un audit à 500 € HT, une création de compte à 250 € HT et une gestion à partir de 450 € HT par mois",
    );
    expect(pageSource).not.toMatch(/\bamorti(?:e|s|es)?\b/i);
    expect(normalizedPageSource).toContain(
      "Coût ponctuel inclus une fois dans chaque comparaison",
    );
    expect(normalizedPageSource).toContain(
      "Tous les honoraires de ce scénario sont HT",
    );
    expect(pageSource).toContain("Gestion mensuelle HT");
    expect(normalizedPageSource).toContain(
      "budget média mensuel HT de 5 000 à 10 000 €",
    );
    expect(normalizedPageSource).toContain("300 € HT/mois. Le premier exclut");
    expect(normalizedPageSource).toContain(
      "18 h/mois supplémentaires à 55 €/h, soit 990 €/mois",
    );
    expect(normalizedPageSource).toContain("La différence devient 690 €/mois");
  });

  it("bounds privacy and internal service links to their real scope", () => {
    expect(pageSource).toContain(
      '{ label: "Durées comparées", value: "3 · 6 · 12" }',
    );
    expect(pageSource).toContain(
      '{ label: "Moyenne de marché", value: "Aucune" }',
    );
    expect(pageSource).toContain(
      '{ label: "Calculateur · envoi", value: "Aucun" }',
    );
    expect(pageSource).not.toContain('{ label: "Données envoyées"');
    expect(pageSource).toContain(
      "La TVA décaissée n’est pas toujours un coût final",
    );
    expect(pageSource).not.toContain("TVA de trésorerie");
    expect(normalizedPageSource).toContain(
      "marge contributive par client sur la période retenue",
    );
    expect(pageSource).not.toContain("Faire comparer mon projet");
    expect(pageSource).toContain('mobileCtaLabel="Décrire mon périmètre"');
    expect(pageSource).toContain('<Link href="/services/publicite-en-ligne">');
    expect(normalizedPageSource).toContain(
      "page publique, consultée le 30 juillet 2026, situe le forfait Starter à partir de 8 000 € de budget média mensuel",
    );
    expect(pageSource).toContain('title="Contrôle rapide avant signature"');
    expect(pageSource).not.toContain("Contrôle de cinq minutes");
  });
});
