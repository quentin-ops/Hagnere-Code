import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { getGuide } from "./guides";

const root = process.cwd();
const routeSource = readFileSync(
  join(root, "src/app/guides/prix-gestion-google-ads/page.tsx"),
  "utf8",
);
const plannerSource = readFileSync(
  join(root, "src/components/guides/GoogleAdsManagementCostPlanner.tsx"),
  "utf8",
);
const engineSource = readFileSync(
  join(root, "src/lib/google-ads-management-cost.ts"),
  "utf8",
);
const ogSource = readFileSync(
  join(root, "src/app/guides/prix-gestion-google-ads/opengraph-image.tsx"),
  "utf8",
);
const researchSource = readFileSync(
  join(root, "docs/research/prix-gestion-google-ads-r1-2026-07-27.md"),
  "utf8",
);
const gridPath = join(
  root,
  "public/ressources/grille-comparaison-devis-google-ads.csv",
);
const gridSource = readFileSync(gridPath, "utf8");
const normalized = routeSource.replace(/\s+/g, " ");
const guide = getGuide("prix-gestion-google-ads");

describe("guide prix de gestion Google Ads premium", () => {
  it("répond sans inventer de moyenne et conserve les inconnues", () => {
    const lead =
      routeSource.match(/<p className="lead">([\s\S]*?)<\/p>/)?.[1] ?? "";

    expect(lead).toContain("Il n’existe pas de prix moyen public");
    expect(lead).toContain("Votre coût renseigné");
    expect(normalized).toContain("elle ne vaut jamais zéro par défaut");
    expect(normalized).toContain("ne constitue ni un panel représentatif");
    expect(normalized).toContain("ne devient donc ni une moyenne");
    expect(routeSource).not.toMatch(
      /prix moyen (?:d’une |de la )?(?:agence|gestion)|fourchette de marché estimée/i,
    );
  });

  it("sépare les neuf lignes, les deux types de budget et la surcharge France", () => {
    expect(routeSource).toContain("9 lignes à séparer");
    for (const expected of [
      "budget média",
      "surcharges et taxes",
      "gestion",
      "mise en route",
      "mesure",
      "les outils, connexions, alertes et licences",
      "temps de votre équipe",
    ]) {
      expect(normalized).toContain(expected);
    }
    expect(routeSource).toContain(
      "https://support.google.com/google-ads/answer/10486536?hl=fr",
    );
    expect(routeSource).toContain(
      "https://support.google.com/google-ads/answer/10486938?hl=fr",
    );
    expect(routeSource).toContain(
      "https://support.google.com/google-ads/answer/9750227?hl=fr",
    );
    expect(normalized).toContain("coût opérationnel réglementaire de 2 %");
    expect(normalized).toContain(
      "Si 900 € sont réellement facturés pour des annonces toutes servies en France, la surcharge est de 18 €",
    );
    expect(normalized).toContain(
      "Ne confondez pas plafond configuré, dépense et facture",
    );
    expect(normalized).toContain(
      "Le budget configuré borne ou pilote la diffusion ; il ne garantit pas que chaque euro sera dépensé",
    );
  });

  it("compare cinq tarifs français et cinq méthodes étrangères sans les appeler marché", () => {
    for (const vendor of [
      "MS Web",
      "Viaduc",
      "DP Medias",
      "Ad-Works",
      "Vizetoo",
      "Emprise Digital",
      "DPOM",
      "PPC Solutions",
      "DREIKON",
      "Hoorah",
    ]) {
      expect(routeSource).toContain(vendor);
    }
    for (const url of [
      "https://emprisedigital.co/blog/google-ads-management-cost/",
      "https://www.dpom.co.uk/ppc-pricing-packages/",
      "https://ppcsolutions.ca/ppc-management-fees/",
      "https://www.dreikon.de/leistungen/sea-agentur/google-ads/",
      "https://www.hoorahonline.com.au/google-ads-price-guide",
    ]) {
      expect(routeSource).toContain(url);
    }
    expect(normalized).toContain(
      "Leurs montants ne doivent pas être convertis en « prix français",
    );
    expect(normalized).toContain(
      "Ce corpus volontairement contradictoire compare des prix propres, pas un marché mondial",
    );
  });

  it("compare fixe, pourcentage et hybride avec un vrai outil local", () => {
    expect(routeSource).toContain("<GoogleAdsManagementCostPlanner />");
    expect(plannerSource).toContain("Calcul local · aucune donnée envoyée");
    expect(plannerSource).toContain("text-left");
    expect(plannerSource).not.toContain("text-center");
    expect(engineSource).toContain("RATE_SCALE = 10_000");
    expect(engineSource).toContain("fixedVsPercentageFeeBasisCrossing");
    expect(engineSource).toContain("knownCostPerQualifiedLead");
    expect(engineSource).toContain("surchargeEligibleSpendShareRate");
    expect(plannerSource).toContain(
      "Assiette mensuelle des honoraires variables",
    );
    expect(plannerSource).toContain(
      "Part de la dépense soumise à cette surcharge",
    );
    expect(existsSync(gridPath)).toBe(true);
    expect(gridSource.trim().split(/\r?\n/)).toHaveLength(28);
    expect(gridSource).toContain("Coût renseigné sur 3 mois");
    expect(gridSource).toContain("Conversions principales et secondaires");
    expect(gridSource).not.toContain("CPL complet");
  });

  it("compare trois niveaux du même cas et publie des calculs reproductibles", () => {
    expect(normalized).toContain("même entreprise locale fictive");
    for (const expected of [
      "Essentiel",
      "Central",
      "Exigeant",
      "6 355 €",
      "9 806 €",
      "16 708 €",
      "9 174 €",
      "14 606 €",
      "25 469 €",
      "16 210 €",
      "26 113 €",
      "45 919 €",
      "3 742 + (6 × 1 810,60) = 14 605,60 €",
    ]) {
      expect(routeSource).toContain(expected);
    }
    for (const status of [
      "incluse",
      "supposée à zéro",
      "exclue",
      "à confirmer",
    ]) {
      expect(routeSource).toContain(status);
    }
  });

  it("dérive le CPL maximal de la marge et contrôle la surcharge", () => {
    for (const expected of [
      "Valeur de marge attendue par prospect = 2 400 × 20 % = 480 €",
      "Enveloppe dépense + surcharge maximale / prospect = 480 − 80 = 400 €",
      "Dépense média prévisionnelle maximale = 400 ÷ 1,02 = 392,16 € / prospect",
      "Dépense média mensuelle retenue = 15 × 392,16 = 5 882,35 €",
      "Surcharge = 117,65 € ; dépense + surcharge = 6 000 €",
      "3 ventes × 2 400 € = 7 200 € de marge",
      "l’enveloppe dépense et surcharge cible tombe à 304 €",
    ]) {
      expect(normalized).toContain(expected);
    }
    expect(normalized).toContain("Seuil d’arrêt à écrire avant la campagne");
    expect(normalized).toContain("il ne garantit ni quinze prospects");
    expect(normalized).toContain(
      "CPC) divise la dépense média réelle par les clics facturés",
    );
    expect(normalized).toContain(
      "coût par action configurée (CPA), coût d’acquisition client réel (CAC)",
    );
    expect(normalized).toContain(
      "dépense maximale = marge disponible ÷ (1 + taux de surcharge + taux d’honoraires)",
    );
    expect(normalized).not.toContain(
      "CPL média = budget média configuré ÷ prospects qualifiés",
    );
  });

  it("traite les conversions et la propriété du compte avec leurs exceptions", () => {
    expect(routeSource).toContain(
      "https://support.google.com/google-ads/answer/11461796?hl=fr",
    );
    expect(routeSource).toContain(
      "https://support.google.com/google-ads/answer/15707550?hl=fr",
    );
    expect(normalized).toContain(
      "une action secondaire ajoutée à un objectif personnalisé peut tout de même servir aux enchères",
    );
    expect(normalized).toContain(
      "son activation ne prouve pas que l’attribution est exacte",
    );
    expect(normalized).toContain(
      "L’association d’un compte client existant à un compte administrateur ne lui donne pas automatiquement la propriété",
    );
    expect(normalized).toContain(
      "un compte administrateur qui crée le compte client en devient automatiquement propriétaire",
    );
  });

  it("déclare le conflit commercial et préqualifie avant le CTA", () => {
    expect(normalized).toContain(
      "Hagnéré Code vend cette prestation et n’est donc pas une source neutre",
    );
    expect(normalized).toContain("minimum de trois mois");
    expect(normalized).toContain(
      "ce ne sont pas les prix d’une campagne Search locale isolée",
    );
    expect(normalized).toContain(
      "un freelance, un audit ponctuel ou une gestion interne peut être plus proportionné",
    );
    expect(routeSource).toContain('ctaService="ads"');
    expect(routeSource).toContain('ctaSource="guide-prix-gestion-google-ads"');
    expect(routeSource).toContain("showSidebarCta={false}");
    expect(routeSource.match(/<GuideInlineCTA\b/g)).toHaveLength(1);
  });

  it("maintient une identité éditoriale prudente et datée", () => {
    expect(guide.dateModified).toBe("2026-07-27");
    expect(guide.readTimeMin).toBe(27);
    expect(guide.metaDescription).toContain("trois modèles");
    expect(guide.cardDescription).toContain("benchmark international");
    expect(guide.metaDescription).not.toMatch(/complet|garanti|numéro 1/i);
    expect(guide.cardDescription).not.toMatch(/complet|garanti|numéro 1/i);
    expect(ogSource).toContain("COÛT RENSEIGNÉ");
    expect(ogSource).toContain("9 LIGNES");
    expect(ogSource).not.toContain("COÛT COMPLET");
    expect(normalized).toContain(
      "Sources techniques et économiques vérifiées le 27 juillet 2026",
    );
    expect(researchSource).toContain("Statut du lot : EN VALIDATION");
  });
});
