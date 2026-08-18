import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { getGuide, guideRobots } from "./guides";

function source(path: string): string {
  return readFileSync(join(process.cwd(), path), "utf8");
}

const routeSource = source(
  "src/app/guides/aides-creation-site-internet/page.tsx",
);
const ogSource = source(
  "src/app/guides/aides-creation-site-internet/opengraph-image.tsx",
);
const quickCheckSource = source("src/components/guides/SiteAidQuickCheck.tsx");
const quickCheckContractSource = source("src/lib/site-aid-quick-check.ts");
const quickCheckTestSource = source("src/lib/site-aid-quick-check.test.ts");
const normalizedRoute = routeSource.replace(/\s+/g, " ");

function visibleText(value: string): string {
  return value
    .replace(/<[^>]+>/g, " ")
    .replace(/\{[^}]*\}/g, " ")
    .replace(/&[a-z]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

describe("aides-creation-site-internet premium guide contract", () => {
  it("answers the real decision within the lead", () => {
    const lead = routeSource.match(/<p className="lead">([\s\S]*?)<\/p>/)?.[1];
    const text = visibleText(lead || "");

    expect(lead).toBeDefined();
    expect(text.split(/\s+/).length).toBeLessThanOrEqual(150);
    expect(text).toMatch(/6 000, 10 000 ou 20 000 € HT/i);
    expect(text).toMatch(/aucune subvention nationale automatique/i);
    expect(text).toMatch(
      /subvention, un accompagnement pris en charge, un prêt remboursable/i,
    );
    expect(normalizedRoute).toContain(
      "sans notification écrite, l’aide budgétée vaut 0 €",
    );
  });

  it("keeps the ten-part decision architecture and the useful legacy anchors", () => {
    for (const anchor of [
      "reponse-rapide",
      "aides-mortes",
      "aides-nationales",
      "fiscalite",
      "createurs",
      "formation",
      "regions",
      "aura",
      "mode-emploi",
      "arnaques",
      "micro",
      "sans-aide",
      "methode",
      "cas-avances-cumul",
    ]) {
      expect(routeSource).toContain(`id="${anchor}"`);
    }
    expect(routeSource.match(/label: "\d+\. /g)).toHaveLength(10);
    expect(routeSource.match(/<details className=/g)).toHaveLength(3);
    expect(routeSource).toContain(
      "Restructuration : ouvrez seulement après une fusion, acquisition ou",
    );
    expect(routeSource).toContain(
      "SIEG : ouvrez seulement si la décision cite le règlement 2023/2832",
    );
    expect(routeSource).toContain(
      "Agriculture, pêche et aquaculture : ouvrez seulement pour une",
    );
  });

  it("separates discovery from a short official-source check", () => {
    expect(routeSource).toContain("<SiteAidQuickCheck />");
    expect(routeSource.indexOf("<SiteAidQuickCheck />")).toBeLessThan(
      routeSource.indexOf("<GuideToc"),
    );
    expect(routeSource).toContain('id: "tri-aides-site"');
    expect(routeSource).not.toContain("<SiteAidDecisionDossier");
    expect(routeSource).not.toContain("<SiteAidPreDiagnosis");
    expect(quickCheckSource).toContain("Je cherche encore un dispositif");
    expect(quickCheckSource).toContain("J’ai une fiche officielle");
    expect(quickCheckSource).toContain("Étape {step.id}/3");
    expect(quickCheckSource).toContain("France Num");
    expect(quickCheckSource).toContain("Les-aides.fr — réseau CCI");
    expect(quickCheckSource).toContain(
      "conseillers-entreprises.service-public.gouv.fr",
    );
    expect(quickCheckSource).not.toContain("Aides-territoires");
    expect(quickCheckSource).not.toContain("<textarea");
    expect(quickCheckSource).not.toContain("contentEditable");
    expect(quickCheckSource.length).toBeLessThan(60_000);
  });

  it("never parses free text into a favourable legal conclusion", () => {
    for (const sourceText of [quickCheckSource, quickCheckContractSource]) {
      expect(sourceText).not.toMatch(
        /evidencePolarity|boundedEvidence|hasExplicitSgei|entrustmentEvidence/i,
      );
      expect(sourceText).not.toContain("textarea");
    }
    expect(quickCheckContractSource).toContain(
      'export type SiteAidTriState = "yes" | "no" | "unknown"',
    );
    expect(quickCheckContractSource).toContain('"allowed-in-writing"');
    expect(quickCheckContractSource).toContain('"forbidden-before-decision"');
    expect(normalizedRoute).toContain(
      "Le texte libre d’une décision n’est jamais interprété pour produire un résultat favorable.",
    );
    expect(normalizedRoute).toContain(
      "Ne confiez jamais cette conclusion à l’analyse automatique d’une citation libre.",
    );
  });

  it("keeps unknown values unknown and separates theory, notification and payment", () => {
    for (const expected of [
      "supportType",
      "invoiceVatAmount",
      "recoverableVatAmount",
      "theoreticalAid",
      "budgetedAid",
      "paidAid",
      "economicCostWithoutAid",
      "maximumCashNeedBeforeAid",
      "delayCost",
      "notificationStage",
    ]) {
      expect(quickCheckContractSource).toContain(expected);
    }
    expect(quickCheckContractSource).toContain(
      'if (input.notificationStage === "written")',
    );
    expect(quickCheckContractSource).toContain(
      'if (input.notificationStage === "paid")',
    );
    expect(quickCheckTestSource).toContain(
      "keeps the aid budgeted at zero before a written notification",
    );
    expect(quickCheckTestSource).toContain(
      "does not convert an unknown VAT treatment into zero",
    );
    expect(quickCheckTestSource).toContain(
      "distinguishes a documented payment from a notification",
    );
    expect(quickCheckTestSource).toContain(
      "calculates a partial VAT recovery exactly",
    );
    expect(quickCheckTestSource).toContain(
      "uses the invoice VAT total for a multi-rate quote",
    );
    expect(quickCheckTestSource).toContain(
      "ignores hidden notification and payment values outside their stage",
    );
    expect(quickCheckTestSource).toContain(
      "never subtracts a loan or guarantee from the invoice",
    );
    expect(quickCheckTestSource).toContain(
      "classifies a non-grant before reading grant-only answers or stale values",
    );
    expect(quickCheckTestSource).toContain(
      "rejects a zero written contribution as no financial notification",
    );
    expect(quickCheckTestSource).toContain(
      "rejects a zero payment as no documented payment",
    );
    expect(quickCheckTestSource).toContain(
      "ignores every hidden forecast and delay value at the paid stage",
    );
    expect(quickCheckTestSource).toContain(
      "ignores commitment, viability and pre-payment cash at the paid stage",
    );
    expect(quickCheckTestSource).toContain(
      "keeps accepted aggregate amounts valid in the report",
    );
  });

  it("keeps the public tri reproducible and keyboard-continuous", () => {
    expect(quickCheckSource).toContain('className="not-prose');
    expect(quickCheckSource).toContain("tabIndex={-1}");
    expect(quickCheckSource).toContain("heading?.focus()");
    expect(quickCheckSource).toContain("aria-describedby={helpId}");
    expect(quickCheckSource).toContain('aria-live="polite"');
    expect(quickCheckContractSource).toContain(
      "Facture TTC = devis HT + TVA totale de toutes les lignes.",
    );
    expect(quickCheckContractSource).toContain(
      "À joindre au dossier : URL ou référence exacte, autorité instructrice",
    );
    expect(quickCheckTestSource).toContain(
      "compares the delay cost with the written contribution",
    );
    expect(quickCheckTestSource).toContain(
      "blocks a written-notification decision with missing calculation inputs",
    );
    expect(quickCheckContractSource).toContain(
      "Sans objet pour cet état",
    );
    expect(quickCheckContractSource).toContain(
      "La contribution notifiée diffère de l’aide théorique calculée",
    );
    expect(quickCheckSource).toContain(
      "Au stade payé, les hypothèses prévisionnelles",
    );
  });

  it("allows a readable export while the dossier is incomplete", () => {
    expect(quickCheckSource).toContain("Télécharger le dossier de travail");
    expect(quickCheckSource).toContain(
      "Le téléchargement reste disponible même si le dossier est incomplet",
    );
    expect(quickCheckContractSource).toContain(
      "TRI AIDES SITE INTERNET — DOSSIER DE TRAVAIL",
    );
    expect(quickCheckContractSource).toContain(
      "Ce document ne prouve ni l’éligibilité",
    );
    expect(quickCheckSource).not.toContain("fetch(");
  });

  it("teaches six financing families and prudent financial boundaries", () => {
    for (const expected of [
      "Subvention",
      "Accompagnement",
      "Prêt",
      "ACRE ou ARCE",
      "Formation",
      "Traitement fiscal ou comptable",
      "Aide théorique = min(HT admissible × taux, plafond)",
      "Facture TTC",
      "Coût d’attente",
      "une TVA à confirmer ne vaut pas 0 %",
      "Équivalent-subvention brut (ESB) d’un prêt ou d’une garantie ≠ argent disponible",
    ]) {
      expect(normalizedRoute).toContain(expected);
    }
  });

  it("keeps expert legal cases as human annexes rather than calculator branches", () => {
    for (const expected of [
      "Le tri court s’arrête ici volontairement",
      "Consignez séparément la conclusion du relecteur",
      "Toute exception après une déclaration d’absence doit être examinée par l’autorité",
      "Une case vide ne prouve jamais l’absence d’une autre compensation",
      "300 000 €",
      "750 000 €",
      "1 050 000 €",
      "50 000 €",
      "30 000 €",
      "40 000 €",
    ]) {
      expect(normalizedRoute).toContain(expected);
    }
    expect(routeSource).not.toContain(
      "Cas de saisie refusée et formats avancés",
    );
    expect(routeSource).not.toContain("ce que l’outil sait réellement lire");
  });

  it("links primary French and European sources near volatile claims", () => {
    for (const expected of [
      "https://www.francenum.gouv.fr/aides-financieres/trouver-une-aide-financiere",
      "cheque-france-num-aide-de-500-euros-pour-soutenir",
      "https://www.francenum.gouv.fr/aides-financieres/atouts-numeriques",
      "campusnumerique.auvergnerhonealpes.fr/dispositifs/atouts-numeriques",
      "https://www.bretagne.bzh/aides/fiches/pass-commerce-artisanat/",
      "Guide-utilisateur-Extranet-PCA_V4-Entreprise.pdf",
      "https://entreprendre.service-public.gouv.fr/vosdroits/F11677",
      "https://www.service-public.gouv.fr/particuliers/vosdroits/F15252",
      "tout-savoir-sur-le-pret-boost",
      "location-financiere-aupres-des-professionnels-demarches",
      "eur-lex.europa.eu/eli/reg/2023/2831/oj",
      "eur-lex.europa.eu/eli/reg/2023/2832/oj",
      "eur-lex.europa.eu/eli/reg/2013/1408/2024-12-16/fra",
      "eur-lex.europa.eu/eli/reg/2014/717/2023-10-25/fra",
      "legifrance.gouv.fr/loda/id/JORFTEXT000053177293",
      "agriculture.gouv.fr/telecharger/153667",
      "legifrance.gouv.fr/codes/article_lc/LEGIARTI000046868472",
      "BOI-BIC-PDSTK-10-30-10-20-20230628",
    ]) {
      expect(routeSource).toContain(expected);
    }
  });

  it("does not transpose foreign programs into the French public page", () => {
    expect(routeSource).not.toMatch(
      /sba\.gov|find-government-grants|enterprisesg|kfw\.de|canada-small-business-financing/i,
    );
  });

  it("keeps an honest single commercial action", () => {
    expect(routeSource.match(/<GuideInlineCTA\b/g)).toHaveLength(1);
    expect(routeSource).toContain('ctaHref="/demarrer-un-projet"');
    expect(routeSource).toContain("showSidebarCta={false}");
    expect(routeSource).toContain("Hagnéré Code vend des sites internet");
    expect(routeSource).toContain("Aucune aide promise");
    expect(routeSource).toContain("Hagnéré Code n’instruit pas l’aide");
  });

  it("keeps structured data faithful and the route behind human review", () => {
    const guide = getGuide("aides-creation-site-internet");

    expect(routeSource.match(/type="application\/ld\+json"/g)).toHaveLength(2);
    expect(routeSource).toContain("buildGuideMetadata");
    expect(routeSource).toContain("buildGuideStructuredData");
    expect(routeSource).not.toMatch(/FAQPage|HowTo|Offer|wordCount/);
    expect(guide.title.length).toBeLessThanOrEqual(60);
    expect(guide.metaDescription.length).toBeGreaterThanOrEqual(120);
    expect(guide.metaDescription.length).toBeLessThanOrEqual(155);
    expect(guide.dateModified).toBe("2026-07-27");
    expect(guide.readTimeMin).toBeGreaterThanOrEqual(20);
    expect(guide.readTimeMin).toBeLessThanOrEqual(51);
    expect(guide.editorialStatus).toBe("ready-for-human-review");
    expect(guideRobots(guide)).toEqual({ index: false, follow: false });
    expect(ogSource).toContain("Aide = 0 € sans notification");
    expect(ogSource).toContain("Trésorerie TTC");
  });
});
