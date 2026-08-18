import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { getGuide } from "./guides";

const pagePath = join(
  process.cwd(),
  "src/app/guides/google-ads-saas-b2b/page.tsx",
);
const source = readFileSync(pagePath, "utf8");
const normalized = source.replace(/\s+/g, " ");
const resourceRoot = join(
  process.cwd(),
  "public/ressources/kit-pilotage-google-ads-saas-b2b",
);
const kitFile = (name: string) =>
  readFileSync(join(resourceRoot, name), "utf8");

describe("Google Ads SaaS B2B guide quality", () => {
  it("answers the director's economic question before teaching the mechanics", () => {
    const lead = source.match(/<p className="lead">([\s\S]*?)<\/p>/)?.[1] ?? "";

    expect(lead).toContain("combien avons-nous réellement dépensé");
    expect(lead).toContain("client activé");
    expect(lead).toContain("rentable");
    expect(normalized).toContain(
      "nous commencerions généralement par une campagne Search hors marque étroite",
    );
    expect(normalized).toContain(
      "Nous ne lancerions pas Performance Max en premier",
    );
    expect(source).toContain("AtelierFlow, un SaaS entièrement fictif");
  });

  it("follows the same account from click to renewal and includes the buying committee", () => {
    [
      "Recherche et clic",
      "Démonstration ou essai",
      "Prospect accepté",
      "Opportunité",
      "Proposition",
      "Contrat signé",
    ].forEach((step) => expect(source).toContain(step));

    ["Lead", "MQL", "SQL", "Signé", "Activé", "Renouvelé"].forEach((stage) =>
      expect(source).toContain(`title: "${stage}"`),
    );

    [
      "Utilisateur",
      "Responsable métier",
      "Décideur économique",
      "Informatique ou sécurité",
      "Juridique ou achats",
      "Direction ou finance",
    ].forEach((role) => expect(source).toContain(`"${role}"`));
  });

  it("compares campaigns, search intent, landing paths and alternative channels", () => {
    [
      "Search hors marque",
      "Search marque",
      "Search avec AI Max",
      "Performance Max",
      "Demand Gen et vidéo",
      "Remarketing",
    ].forEach((channel) => expect(source).toContain(`"${channel}"`));

    [
      "Votre marque",
      "Problème",
      "Catégorie",
      "Concurrent",
      "Information",
      "Hors cible",
    ].forEach((family) => expect(source).toContain(family));

    expect(source).toContain("Vente avec démonstration");
    expect(source).toContain("Essai en libre-service");
    expect(source).toContain("Premier écran");
    expect(source).toContain("Mobile et confirmation");
    expect(normalized).toContain(
      "AI Max n’est pas un nouveau type de campagne",
    );
    expect(source).toContain(
      "https://support.google.com/google-ads/answer/15910187?hl=fr",
    );

    ["Google Search", "SEO", "LinkedIn Ads", "Prospection directe"].forEach(
      (alternative) => expect(source).toContain(`"${alternative}"`),
    );
  });

  it("keeps platform attribution separate from CRM truth and causal lift", () => {
    ["GCLID", "GBRAID", "WBRAID"].forEach((identifier) =>
      expect(source).toContain(identifier),
    );
    expect(source).toContain("90 jours");
    expect(source).toContain("63 jours");
    expect(source).toContain("API Data Manager");
    expect(source).toContain("certains jetons développeur");
    expect(source).toContain("Conversion Lift");
    expect(source).toContain("groupe exposé");
    expect(source).toContain("groupe témoin");
    expect(normalized).toContain(
      "Une vente attribuée n’est pas forcément une vente incrémentale",
    );
    expect(normalized).not.toMatch(
      /depuis le 15 juin 2026,? (?:toutes )?les importations passent par/i,
    );
  });

  it("states the customer-data gate without treating hashing as a waiver", () => {
    expect(normalized).toContain(
      "Le hachage des coordonnées ne remplace ni l’information ni le choix juridique",
    );
    expect(normalized).toContain("données de première partie");
    expect(normalized).toContain(
      "d’obtenir le consentement lorsque la loi l’exige",
    );
    expect(source).toContain(
      "https://support.google.com/google-ads/answer/7475709?hl=fr",
    );
    expect(normalized).toContain(
      "Google interdit notamment l’envoi d’informations de conversion liées à des catégories sensibles",
    );
    expect(normalized).toContain(
      "Le hachage ne rend pas un envoi interdit acceptable",
    );
    expect(normalized).toContain("ce n’est ni une CMP, ni une preuve");
    expect(source).toContain(
      "https://www.cnil.fr/fr/cookies-et-autres-traceurs/que-dit-la-loi",
    );
  });

  it("reconciles the full AtelierFlow funnel and acquisition cost", () => {
    [
      "Dépense média : 12 000 €",
      "Clics = 12 000 / 6 = 2 000",
      "Leads = 2 000 × 4 % = 80",
      "80 × 40 % = 32",
      "32 × 50 % = 16",
      "16 × 50 % = 8",
      "8 × 50 % = 4",
      "4 × 75 % = 3",
      "2 clients sont encore présents à douze mois",
    ].forEach((calculation) => expect(source).toContain(calculation));

    [
      "12 000 €",
      "4 500 €",
      "2 000 €",
      "1 500 €",
      "1 000 €",
      "3 000 €",
      "24 000 €",
    ].forEach((amount) => expect(source).toContain(`"${amount}"`));

    expect(source).toContain("12 000 / 80 = 150 €");
    expect(source).toContain("24 000 / 80 = 300 €");
    expect(source).toContain("24 000 / 16 = 1 500 €");
    expect(source).toContain("24 000 / 8 = 3 000 €");
    expect(source).toContain("24 000 / 4 = 6 000 €");
    expect(source).toContain("24 000 / 3 = 8 000 €");
    expect(source).toContain("24 000 / 2 = 12 000 €");
  });

  it("shows cash timing, sensitivity and cumulative TCO without invented certainty", () => {
    expect(source).toContain("1 500 - 600 = 900 €");
    expect(source).toContain("8 000 / 900 = 8,9 mois");
    expect(source).toContain("12,9 mois");
    expect(source).toContain("8 × 900 = 7 200 €");
    expect(normalized).toContain(
      "Le payback de 8,9 mois suppose aussi que les 900 € de marge contributive restent constants",
    );

    [
      "10 667 €",
      "11,9 mois",
      "16 000 €",
      "17,8 mois",
      "10 000 €",
      "11,1 mois",
    ].forEach((value) => expect(source).toContain(value));

    expect(source).toContain("TCO 12 mois = 8 000 + 88 000 = 96 000 €");
    expect(source).toContain("TCO 36 mois = 8 000 + (3 × 88 000) = 272 000 €");
    expect(source).toContain("TCO 60 mois = 8 000 + (5 × 88 000) = 448 000 €");
    expect(normalized).toContain("Une inconnue n’est jamais égale à zéro");
    expect(normalized).toContain("Zéro vente ne donne jamais un CAC de 0 €");
  });

  it("provides operational stop gates, a soft CTA and the real static kit", () => {
    [
      "Lancer un pilote limité",
      "Corriger avant de dépenser plus",
      "Élargir par palier",
      "Arrêter ou déplacer le budget",
    ].forEach((decision) => expect(source).toContain(`"${decision}"`));
    expect(source).toContain("Quatre arrêts immédiats");
    expect(source).toContain("<GoogleAdsSaasPilotCalculator />");
    expect(normalized).toContain(
      "aucune valeur n’est envoyée ou stockée par cet outil",
    );
    expect(source.match(/<GuideInlineCTA\b/g)).toHaveLength(1);
    expect(source).toContain("showPhone={false}");
    expect(source).toContain("showSidebarCta={false}");
    expect(source).not.toMatch(/href="tel:|FAQPage|HowTo|Offer/i);

    const expectedFiles = [
      "00-mode-emploi.md",
      "01-icp-et-comite-achat.csv",
      "02-carte-requetes-et-campagnes.csv",
      "03-dictionnaire-evenements.csv",
      "04-cohorte-clic-client-retenu.csv",
      "05-couts-12-36-60.csv",
      "06-sensibilite-cac-payback.csv",
      "07-journal-experiences.csv",
      "08-checklist-mesure-consentement.csv",
      "09-exemple-atelierflow.csv",
      "10-releve-decision.md",
    ];
    expectedFiles.forEach((file) =>
      expect(existsSync(join(resourceRoot, file)), file).toBe(true),
    );

    const mode = kitFile("00-mode-emploi.md");
    const normalizedMode = mode.replace(/\s+/g, " ");
    [
      "`LP`",
      "`SCN`",
      "`STG`",
      "`ACTION`",
      "`ECO`",
      "`UNK`",
      "`RATIO`",
      "`SENS`",
    ].forEach((prefix) => expect(mode).toContain(prefix));
    expect(normalizedMode).toContain(
      "M12 signifie douze mois après l’activation de chaque compte",
    );

    const events = kitFile("03-dictionnaire-evenements.csv");
    const cohort = kitFile("04-cohorte-clic-client-retenu.csv");
    const checks = kitFile("08-checklist-mesure-consentement.csv");
    const example = kitFile("09-exemple-atelierflow.csv");
    expect(events).toContain(
      "EVT-007;compte activé;combien de clients ont atteint l’usage défini",
    );
    expect(events).toContain(
      "non retenu comme signal importable dans le scénario fictif - conserver dans le produit",
    );
    expect(cohort).toContain("dernière activation fictive plus 12 mois");
    expect(checks).toContain("MES-018;délai et diagnostic d’import");
    expect(example).toContain(
      "abonnement mensuel moyen fictif;1500;EUR par mois et par client",
    );
    expect(example).toContain(
      "coûts variables mensuels fictifs;600;EUR par mois et par client",
    );
    expect(
      existsSync(
        join(
          process.cwd(),
          "public/ressources/kit-pilotage-google-ads-saas-b2b.zip",
        ),
      ),
    ).toBe(true);
    expect(source).toContain(
      "/ressources/kit-pilotage-google-ads-saas-b2b.zip",
    );
  });

  it("keeps metadata aligned with the measured article", () => {
    const guide = getGuide("google-ads-saas-b2b");

    expect(guide.title).toContain("CAC");
    expect(guide.heroTitle).toContain("rentable");
    expect(guide.metaDescription).toContain("client activé");
    expect(guide.readTimeMin).toBe(43);
    expect(guide.editorialStatus).toBeUndefined();
  });
});
