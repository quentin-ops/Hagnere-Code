import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { getGuide } from "./guides";

const root = process.cwd();
const page = readFileSync(
  join(root, "src/app/guides/suivi-conversions-google-ads/page.tsx"),
  "utf8",
);
const og = readFileSync(
  join(root, "src/app/guides/suivi-conversions-google-ads/opengraph-image.tsx"),
  "utf8",
);
const normalized = page.replace(/\s+/g, " ");
const guide = getGuide("suivi-conversions-google-ads");

describe("guide suivi des conversions Google Ads renforcé", () => {
  it("commence par la décision du dirigeant et fournit une synthèse autonome", () => {
    const lead = page.match(/<p className="lead">([\s\S]*?)<\/p>/)?.[1] ?? "";
    const shortDecision =
      page.match(
        /<h2 id="decision-cinq-minutes">[\s\S]*?<h2 id="ce-que-google-compte">/,
      )?.[0] ?? "";

    expect(lead).toContain("Google Ads affiche 75 conversions");
    expect(lead).toContain("le journal interne contient 72 événements");
    expect(lead).toContain("quatre ventes");
    expect(lead).toContain("augmenter le budget");
    expect(shortDecision).toContain("Quel résultat paie réellement");
    expect(shortDecision).toContain("Combien de dossiers identiques");
    expect(shortDecision).toContain("Où apparaît le premier nombre non prouvé");
    expect(shortDecision).toContain("Quelle action influence actuellement");
    expect(shortDecision).toContain("Le signal vaut-il davantage que son coût");
    expect(shortDecision).toContain("Notre avis professionnel");
  });

  it("suit le dossier jusqu’au paiement, à la correction et à la marge", () => {
    [
      "Opportunité ouverte",
      "Contrat signé",
      "Facture émise",
      "Paiement reçu",
      "Correction",
      "Marge de contribution avant acquisition",
    ].forEach((stage) => expect(page).toContain(`"${stage}"`));

    [
      "case_id interne",
      "event_id",
      "transaction_id / order_id",
      "GCLID, GBRAID ou WBRAID",
      "Horodatage et fuseau",
      "Valeur, devise et statut",
      "État du consentement",
      "job_id, état et motif de rejet",
    ].forEach((field) => expect(page).toContain(field));

    expect(normalized).toContain(
      "Ce sont trois preuves possibles d’une seule demande, pas trois demandes",
    );
    expect(normalized).toContain(
      "Tous ces champs ne doivent pas être envoyés à Google",
    );
  });

  it("documente sans exagération la migration Data Manager de 2026", () => {
    expect(normalized).toContain("Depuis le 15 juin 2026");
    expect(normalized).toContain("Data Manager API");
    expect(normalized).toContain("UploadClickConversions");
    expect(normalized).toContain(
      "Certains flux historiques peuvent conserver un accès",
    );
    expect(normalized).toContain(
      "à partir d’avril 2026 les données fournies par l’utilisateur peuvent arriver simultanément",
    );
    expect(page).toContain(
      "https://developers.google.com/google-ads/api/docs/deprecations",
    );
    expect(page).toContain(
      "https://support.google.com/google-ads/answer/10029210?hl=fr",
    );
    expect(normalized).not.toMatch(
      /depuis le 15 juin 2026,? (?:tous|toutes|chaque) .* passent? obligatoirement/i,
    );
  });

  it("sépare comptage, déduplication, fenêtres et cycle commercial", () => {
    expect(normalized).toContain(
      "Le réglage « Une » ou « Toutes » peut multiplier le même signal",
    );
    expect(normalized).toContain("Ce réglage ne remplace pas la déduplication");
    expect(normalized).toContain("taux de répétition");
    expect(page).toContain(
      "https://support.google.com/google-ads/answer/3438531?hl=fr",
    );
    [
      "La fenêtre de conversion",
      "La limite d’import",
      "Le délai de traitement",
      "Le cycle commercial",
    ].forEach((clock) => expect(page).toContain(clock));
    expect(page).toContain(
      "https://support.google.com/google-ads/answer/3123169?hl=fr",
    );
    expect(normalized).toContain(
      "C’est une règle de méthode Hagnéré Code, pas un seuil imposé par Google",
    );
  });

  it("rend le consentement, le hachage et la donnée client contrôlables", () => {
    [
      "ad_storage",
      "analytics_storage",
      "ad_user_data",
      "ad_personalization",
      "Avant tout choix",
      "Après acceptation",
      "Après refus",
      "Après retrait",
    ].forEach((term) => expect(page).toContain(term));
    expect(page).toContain(
      "https://support.google.com/analytics/answer/14218557?hl=fr",
    );
    expect(normalized).toContain(
      "la poursuite de la navigation ne vaut pas consentement",
    );
    expect(normalized).toContain(
      "la pseudonymisation n’est pas une anonymisation",
    );
    expect(normalized).toContain(
      "Une capture Tag Assistant verte ne remplace donc ni l’information du visiteur",
    );
  });

  it("traite les appels, faux leads et capacité commerciale comme une chaîne métier", () => {
    ["31", "24", "17", "10", "6", "2"].forEach((volume) =>
      expect(page).toContain(`"${volume}"`),
    );
    [
      "Appels enregistrés par le dispositif",
      "Appels décrochés",
      "Conversations utiles",
      "Rendez-vous pris",
      "Rendez-vous honorés",
    ].forEach((stage) => expect(page).toContain(`"${stage}"`));
    expect(page).toContain(
      "https://support.google.com/google-ads/answer/9099302?hl=fr",
    );
    expect(page).toContain(
      "https://support.google.com/google-ads/answer/6100664?hl=fr",
    );
    expect(page).toContain(
      "https://support.google.com/google-ads/answer/6275629?hl=fr",
    );
    expect(normalized).toContain(
      "clic sur un numéro de téléphone du site mobile</strong> : le clic est observé, pas l’appel lui-même",
    );
    expect(normalized).toContain(
      "clic sur une annonce ou un composant d’appel sans numéro de transfert",
    );
    expect(normalized).toContain("ne prouve pas qu’un appel a eu lieu");
    expect(normalized).toContain(
      "Cette cohorte suppose un mécanisme qui enregistre réellement les appels",
    );
    expect(normalized).toContain(
      "conversion d’appel importée</strong> : elle peut représenter la qualification ou la vente",
    );
    expect(normalized).toContain("spam ou robot");
    expect(normalized).toContain("client déjà connu");
    expect(normalized).toContain("doublon inter-canal");
    expect(normalized).toContain("délai médian de premier rappel");
    expect(normalized).toContain(
      "Si l’équipe peut absorber 20 nouveaux prospects et que la campagne en produit déjà 35",
    );
  });

  it("sépare l’attribution de l’incrémentalité et conserve les corrections", () => {
    expect(normalized).toContain(
      "Une conversion attribuée n’est pas forcément incrémentale",
    );
    expect(normalized).toContain(
      "cette conversion aurait-elle eu lieu sans la publicité",
    );
    expect(page).toContain(
      "https://support.google.com/google-ads/answer/14102450?hl=fr",
    );
    expect(normalized).toContain(
      "Cet outil n’est pas disponible pour tous les comptes",
    );
    expect(normalized).toContain(
      "Une vente peut être annulée, remboursée ou réévaluée",
    );
    expect(page).toContain(
      "https://support.google.com/google-ads/answer/7686447?hl=fr",
    );
  });

  it("recalcule CPQL, CAC, marge et sensibilités sans appeler le ROAS un bénéfice", () => {
    [
      "4 000 € de coût complet ÷ 18 prospects qualifiés = 222,22 €",
      "4 000 € de coût complet ÷ 4 ventes = 1 000 €",
      "7 200 € ÷ 4 ventes = 1 800 €",
      "7 200 € − 4 000 € = 3 200 €",
      "Média 3 900 € · coût complet 4 900 € · CAC 1 225 €",
      "72 × 70 % = 50,4 événements",
      "2,8 ventes attendues · CAC 1 428,57 €",
      "5,2 ventes attendues · CAC 769,23 €",
      "Solde attendu : 5 360 €",
    ].forEach((calculation) => expect(page).toContain(calculation));
    expect(normalized).toContain(
      "Les ventes décimales sont des espérances de scénario, jamais des clients réels",
    );
    expect(normalized).toContain("ce n’est pas un bénéfice");
    expect(normalized).toContain(
      "Avec une marge de contribution avant acquisition par vente inférieure à 1 428,57 €",
    );
  });

  it("adapte le signal à quatre modèles et garde une conversion honnête", () => {
    [
      "B2B avec cycle long",
      "Service local par téléphone",
      "E-commerce",
      "SaaS",
    ].forEach((model) => expect(page).toContain(`"${model}"`));
    expect(normalized).toContain("Notre intérêt commercial est déclaré");
    expect(normalized).toContain(
      "La bonne conclusion peut pourtant être de garder votre balise",
    );
    expect(page.match(/<GuideInlineCTA\b/g)).toHaveLength(1);
    expect(page).toContain("showPhone={false}");
    expect(page).toContain("showSidebarCta={false}");
    expect(page.indexOf("<GuideInlineCTA")).toBeGreaterThan(
      page.indexOf('<h2 id="decider">'),
    );
    expect(page.indexOf("<GuideInlineCTA")).toBeLessThan(
      page.indexOf('<h2 id="sources">'),
    );
    expect(page.match(/<GuideTable\b/g)?.length ?? 0).toBeLessThanOrEqual(13);
    expect(page.match(/<InfoBox\b/g)?.length ?? 0).toBeLessThanOrEqual(8);
    expect(page).not.toMatch(/FAQPage|HowTo|Offer|href="tel:/i);
  });

  it("maintient des métadonnées prudentes et une durée mesurée", () => {
    expect(guide.title).toBe(
      "Conversions Google Ads : demandes, ventes et marge",
    );
    expect(guide.dateModified).toBe("2026-07-25");
    expect(guide.readTimeMin).toBe(40);
    expect(guide.metaDescription).toContain("combien deviennent des ventes");
    expect(guide.metaDescription).toContain("Data Manager");
    expect(guide.metaDescription).not.toMatch(
      /rentabilité garantie|vraies ventes garanties|suivi parfait/i,
    );
    expect(og).toContain("Que deviennent vos conversions Google Ads ?");
    expect(og).toContain("Appels · CRM · ventes · marge · décision");
  });
});
