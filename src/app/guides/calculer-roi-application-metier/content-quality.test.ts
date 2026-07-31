import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import { getGuide } from "@/lib/guides";

const slugDirectory = dirname(fileURLToPath(import.meta.url));
const guide = getGuide("calculer-roi-application-metier");
const pageSource = readFileSync(resolve(slugDirectory, "page.tsx"), "utf8");
const calculatorSource = readFileSync(
  resolve(slugDirectory, "application-roi-calculator.tsx"),
  "utf8",
);
const ogSource = readFileSync(
  resolve(slugDirectory, "opengraph-image.tsx"),
  "utf8",
);
const normalizedPage = pageSource.replace(/\s+/g, " ");

describe("public content quality for the application ROI guide", () => {
  it("uses the approved central guide entry and restrained SEO builders", () => {
    expect(pageSource).toContain(
      'getGuide("calculer-roi-application-metier")',
    );
    expect(pageSource).toContain("buildGuideMetadata");
    expect(pageSource).toContain("buildGuideStructuredData");
    expect(pageSource).not.toContain("editorialStatus");
    expect(pageSource).not.toContain("type GuideEntry");
    expect(pageSource).not.toMatch(
      /\b(?:FAQPage|HowTo|Review|AggregateRating|wordCount)\b/,
    );
  });

  it("keeps the visible H1, metadata and dedicated article images aligned", () => {
    expect(pageSource).toContain('heroTitle="Calculer le ROI d’une"');
    expect(pageSource).toContain('heroTitleEm="application métier"');
    expect(pageSource).toContain(
      'heroTitleSuffix="sans inventer les gains"',
    );
    expect(pageSource).toContain(
      'src="/guides/calculer-roi-application-metier/article-roi-16x9.webp"',
    );
    expect(pageSource).toContain(
      "Une maquette de bureau place des documents, un calendrier, des contrôles et une application autour d’une balance centrale",
    );
    expect(guide.articleImagePaths).toEqual([
      "/guides/calculer-roi-application-metier/article-roi-16x9.webp",
      "/guides/calculer-roi-application-metier/article-roi-4x3.webp",
      "/guides/calculer-roi-application-metier/article-roi-1x1.webp",
    ]);
  });

  it("separates cash, capacity, qualitative value and both ROI formulas", () => {
    for (const phrase of [
      "Décaissement hors main-d’œuvre évité",
      "Décaissement lié aux heures",
      "Capacité utile",
      "Qualitatif",
      "GAIN NET DE TRÉSORERIE",
      "ROI DE TRÉSORERIE",
      "GAIN NET ÉCONOMIQUE",
      "ROI ÉCONOMIQUE",
      "TCO économique",
    ]) {
      expect(pageSource, phrase).toContain(phrase);
    }
    expect(normalizedPage).toContain(
      "Le taux techniquement retirable ne réduit pas une facture hors main-d’œuvre",
    );
  });

  it("forces the full TCO, STOP contract and durable payback boundary", () => {
    for (const family of [
      "1. Cadrage",
      "2. Réalisation",
      "3. Migration",
      "4. Intégrations",
      "5. Formation et changement",
      "6. Temps interne",
      "7. Licences et hébergement",
      "8. Support et maintenance",
      "9. Sécurité et conformité",
      "10. Évolutions",
      "11. Double exploitation",
      "12. Sortie et réversibilité",
    ]) {
      expect(pageSource, family).toContain(family);
    }
    expect(normalizedPage).toContain(
      "Une ligne de devis peut couvrir plusieurs familles sans les ventiler",
    );
    expect(pageSource).toContain("Le retour durable");
    expect(normalizedPage).toContain("aucun déficit de financement");
    expect(normalizedPage).toContain(
      "le cumul redevient nul ou positif après avoir été négatif",
    );
    expect(normalizedPage).toContain(
      "Avec H12, une mise en service M10 et une rampe de six mois",
    );
    expect(normalizedPage).toContain(
      "seuls 1/6, 2/6 et 3/6 sont observés",
    );
    expect(calculatorSource).toContain("STOP · aucune estimation produite");
  });

  it("uses complete scenarios and demonstrates that the simple option wins", () => {
    expect(normalizedPage).toContain(
      "M8 · rampe 6 mois · adoption 70 %",
    );
    expect(normalizedPage).toContain(
      "Réalisation +15 % · hébergement + maintenance +15 % · double exploitation 600 €/mois de M7 à M9",
    );
    expect(normalizedPage).toContain(
      "sécurité et conformité, évolutions et double exploitation sont posées à 0 €",
    );
    expect(pageSource).toContain(
      'headers={["Famille", "Questions à poser", "Moment habituel"]}',
    );
    expect(normalizedPage).toContain(
      "M4 · rampe 2 mois · adoption 100 %",
    );
    expect(normalizedPage).toContain(
      "8 000 € de TCO battent 54 800 € de sur-mesure",
    );
    expect(normalizedPage).toContain(
      "Les autres familles de coûts y sont explicitement supposées non applicables",
    );
    expect(pageSource).toContain("Statu quo");
    expect(pageSource).toContain("Standard ou SaaS");
    expect(pageSource).toContain("Sur-mesure");
  });

  it("keeps current primary sources and their scope limits visible", () => {
    for (const reference of [
      "2381340",
      "comment-mesurer-les-effets-de-la",
      "securite-encadrer-les-developpements-informatiques",
      "ce-quil-faut-savoir-sur-lanalyse-dimpact",
      "securite-gerer-la-sous-traitance",
      "guide-cybersecurite-start-up-numerique",
      "boite-a-outils-qvct-numerique.pdf",
    ]) {
      expect(pageSource, reference).toContain(reference);
    }
    expect(normalizedPage).toContain(
      "vise d’abord les start-up qui développent un produit logiciel",
    );
    expect(normalizedPage).toContain(
      "Guide ancien, toujours publié",
    );
    expect(normalizedPage).toContain(
      "Une AIPD est requise pour un traitement susceptible d’engendrer un risque élevé ; elle n’est pas automatique pour toute application",
    );
    expect(normalizedPage).toContain(
      "quatre établissements sanitaires, sociaux et médico-sociaux",
    );
    expect(normalizedPage).toContain(
      "pas une preuve universelle d’adoption ou de performance",
    );
  });

  it("keeps the internal guide link restricted to the current published upstream guide", () => {
    const guideLinks = [
      ...pageSource.matchAll(/href="(\/guides\/[^"]+)"/g),
    ].map((match) => match[1]);
    expect([...new Set(guideLinks)]).toEqual([
      "/guides/automatiser-processus-metier",
    ]);
    for (const legacySlug of [
      "prix-logiciel-sur-mesure",
      "erp-ou-logiciel-sur-mesure",
      "cahier-des-charges-application-metier",
      "cout-maintenance-application-metier",
    ]) {
      expect(pageSource).not.toContain(`/guides/${legacySlug}`);
    }
  });

  it("provides a visible OUTILS conversion path without promising a result", () => {
    expect(pageSource).toContain('eyebrow: "OUTILS"');
    expect(pageSource).toContain("Faire vérifier");
    expect(pageSource).toContain('primaryCtaHref: "/demarrer-un-projet"');
    expect(pageSource).toContain(
      'mobileCtaLabel="Voir le service outils internes"',
    );
    expect(pageSource).toContain(
      'ctaLabel: "Voir le service outils internes"',
    );
    expect(pageSource).toContain(
      'ctaHref: "/services/outils-internes-sur-mesure"',
    );
    expect(pageSource).toContain('secondaryLabel: "03 74 47 20 18"');
    expect(pageSource).toContain(
      'secondaryHref: "tel:+33374472018"',
    );
    expect(normalizedPage).toContain(
      "L’objectif du premier échange n’est pas de promettre un ROI",
    );
    expect(pageSource).not.toMatch(
      /ROI garanti|rentabilité garantie|retour garanti/i,
    );
  });

  it("keeps calculator units and disabled states readable in dark mode", () => {
    expect(calculatorSource).toContain(
      "dark:disabled:text-zinc-300",
    );
    expect(
      calculatorSource.match(
        /absolute inset-y-0 right-3 mt-2 flex items-center text-xs font-semibold text-zinc-500 dark:text-zinc-300/g,
      ),
    ).toHaveLength(2);
    expect(calculatorSource).toContain(
      "interpretApplicationRoiResult",
    );
    expect(calculatorSource).not.toContain(
      "Les deux lectures sont positives",
    );
  });

  it("keeps the final copy free from the mechanical phrases removed in P4", () => {
    for (const phrase of [
      "Faire challenger",
      "Challenger mes hypothèses",
      "prochaine preuve",
      "lecture contradictoire",
      "Forcez les douze familles",
      "Affichez deux gains nets",
      "Faites perdre le sur-mesure",
    ]) {
      expect(pageSource, phrase).not.toContain(phrase);
    }
    expect(calculatorSource).not.toContain(
      "Le prochain travail utile consiste",
    );
    expect(calculatorSource).not.toContain(
      "Cela autorise un examen plus détaillé",
    );
    expect(ogSource).toContain(
      "Trésorerie, capacité, TCO complet, scénarios et retour durable",
    );
    expect(ogSource).not.toContain(
      "Cash, capacité, TCO complet, scénarios et retour durable",
    );
  });
});
