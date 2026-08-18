import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { strFromU8, unzipSync } from "fflate";
import { describe, expect, it } from "vitest";
import { getGuide } from "./guides";

const root = process.cwd();
const routeSource = readFileSync(
  join(root, "src/app/guides/facturation-abonnements-saas/page.tsx"),
  "utf8",
);
const componentSource = readFileSync(
  join(root, "src/components/guides/SubscriptionBillingDecisionDossier.tsx"),
  "utf8",
);
const guideLayoutSource = readFileSync(
  join(root, "src/components/guides/guide-layout.tsx"),
  "utf8",
);
const engineSource = readFileSync(
  join(root, "src/lib/subscription-billing-oracle.ts"),
  "utf8",
);
const generatorSource = readFileSync(
  join(root, "scripts/generate-subscription-billing-kit.mjs"),
  "utf8",
);
const validatorSource = readFileSync(
  join(root, "scripts/validate-subscription-billing-kit.mjs"),
  "utf8",
);
const acceptanceTests = JSON.parse(
  readFileSync(
    join(root, "src/lib/subscription-billing-acceptance-tests.json"),
    "utf8",
  ),
) as Array<{ id: string; family: string; case: string; article: string }>;
const workbookSources = JSON.parse(
  readFileSync(
    join(root, "src/lib/subscription-billing-workbook-sources.json"),
    "utf8",
  ),
) as string[][];
const researchSource = readFileSync(
  join(root, "docs/research/facturation-abonnements-saas-r1-2026-07-28.md"),
  "utf8",
);
const workbookPath = join(
  root,
  "public/ressources/kit-pilotage-facturation-saas.xlsx",
);
const normalized = routeSource.replace(/\s+/g, " ");
const guide = getGuide("facturation-abonnements-saas");

describe("guide premium facturation des abonnements SaaS", () => {
  it("répond par quatre chemins et conserve l’option manuelle", () => {
    const lead =
      routeSource.match(/<p className="lead">([\s\S]*?)<\/p>/)?.[1] ?? "";

    expect(lead).toContain("La bonne architecture de facturation");
    expect(lead).toContain("Quelques abonnements homogènes peuvent rester");
    expect(lead).toContain("Un moteur hébergé devient utile");
    expect(lead).toContain("Une couche métier s’impose");
    expect(lead).toContain("Un moteur totalement spécifique");
    expect(normalized).toContain(
      "La collecte du paiement, le moteur de facturation, la couche métier et la comptabilité sont des rôles différents",
    );
    expect(normalized).toContain(
      "Un vendeur officiel (Merchant of Record) n’est pas une simple cinquième ligne tarifaire",
    );
  });

  it("relie sept sources de vérité et huit événements sans les confondre", () => {
    for (const source of [
      "Offre acceptée",
      "Contrat et commande",
      "Plan de facturation",
      "Facture et avoir",
      "Paiement et remboursement",
      "Droit d’accès",
      "Comptabilité et contrôle",
    ]) {
      expect(routeSource).toContain(source);
    }
    for (const event of [
      "L’offre est acceptée",
      "Le compte et l’organisation sont créés",
      "La facture est préparée puis émise",
      "Le paiement évolue",
      "La quantité ou l’usage arrive",
      "La formule change",
      "Un paiement ou une facture est contesté",
      "Le client résilie ou sort",
    ]) {
      expect(routeSource).toContain(event);
    }
  });

  it("publie un outil local avec les TCO, sensibilités et sorties nulles corrects", () => {
    expect(routeSource).toContain("<SubscriptionBillingDecisionDossier />");
    expect(componentSource).toContain("Rien n’est envoyé");
    expect(componentSource).toContain(
      "/ressources/kit-pilotage-facturation-saas.xlsx",
    );
    expect(engineSource).toContain("calculateSubscriptionBillingTco");
    expect(engineSource).toContain("calculateBillingClientThreshold");
    for (const value of [
      "12 960 €",
      "12 760 €",
      "34 820 €",
      "98 160 €",
      "96,3768",
      "97e",
      "183",
      "247",
      "74",
    ]) {
      expect(normalized).toContain(value);
    }
    expect(normalized).toContain(
      "Dire « 74 clients » aurait mélangé une sensibilité sans frais variables avec le scénario central",
    );
    expect(existsSync(workbookPath)).toBe(true);
    const workbookBytes = readFileSync(workbookPath);
    expect(workbookBytes.subarray(0, 2).toString()).toBe("PK");
    const workbookArchive = unzipSync(workbookBytes);
    const testsWorksheet = strFromU8(
      workbookArchive["xl/worksheets/sheet7.xml"],
    );
    expect(testsWorksheet).toContain(
      '<x:pane xSplit="3" ySplit="5" topLeftCell="D6" activePane="bottomRight" state="frozen" />',
    );
    expect(workbookSources).toHaveLength(15);
    expect(new Set(workbookSources.map((row) => row[2])).size).toBe(15);
    expect(generatorSource).toContain(
      "subscription-billing-workbook-sources.json",
    );
    expect(validatorSource).toContain(
      "subscription-billing-workbook-sources.json",
    );
  });

  it("réconcilie MRR, facture, avoir, paiement, remboursement et créance", () => {
    for (const expected of [
      "37 500 €",
      "3 500 €",
      "41 000 €",
      "350 €",
      "40 650 €",
      "40 750 €",
      "100 €",
      "3 800 €",
      "45 600 €",
    ]) {
      expect(routeSource).toContain(expected);
    }
    expect(normalized).toContain(
      "rembourse 100 € rattachés à la correction documentée : le cash net revient à 40 650 €",
    );
    expect(normalized).toContain(
      "Sans l’avoir, le remboursement aurait recréé 350 € de créance",
    );
    expect(normalized).toContain(
      "ouverture + factures nettes − paiements affectés + remboursements affectés",
    );
    expect(normalized).toContain(
      "Une période clôturée ne se réécrit pas silencieusement",
    );
    expect(engineSource).toContain("unexplained-balance");
    expect(engineSource).toContain("late-financial-event");
  });

  it("traite les webhooks comme un flux signé, dédupliqué et non ordonné", () => {
    expect(routeSource).toContain("https://docs.stripe.com/webhooks");
    expect(routeSource).toContain(
      "https://docs.stripe.com/api/idempotent_requests",
    );
    for (const expected of [
      "vérifier la signature",
      "ne garantit pas l’ordre de livraison",
      "de gérer les doublons",
      "de traiter asynchronement",
      "récupérer les objets manquants",
      "Clé d’idempotence API et déduplication de webhook",
    ]) {
      expect(normalized).toContain(expected);
    }
    expect(engineSource).toContain("processedEventFingerprints");
    expect(engineSource).toContain("businessKeyFingerprints");
    expect(engineSource).toContain("eventSnapshots");
    expect(engineSource).toContain("subscription-billing-r4-2026-07-28");
    expect(engineSource).toContain("idempotency-conflict");
    expect(engineSource).toContain("mixed-currency");
  });

  it("publie le calendrier français exact, les quatre mentions et la nuance e-reporting", () => {
    expect(normalized).toContain(
      "Au 1er septembre 2026, toutes les entreprises concernées doivent pouvoir recevoir",
    );
    expect(normalized).toContain(
      "grandes entreprises et ETI doivent également émettre",
    );
    expect(normalized).toContain("<strong>1er septembre 2027</strong>");
    expect(normalized).toContain(
      "l’obligation d’émission et de e-reporting s’étend aux PME et micro-entreprises",
    );
    for (const mention of [
      "Numéro SIREN du client",
      "Catégorie de l’opération",
      "Option pour la TVA sur les débits",
      "Adresse complète de livraison",
    ]) {
      expect(routeSource).toContain(mention);
    }
    expect(normalized).toContain(
      "hors option pour les débits et opérations autoliquidées",
    );
    expect(normalized).toContain(
      "Le simple statut « facture émise » ne contient donc pas toute l’information attendue",
    );
  });

  it("préqualifie les ventes internationales sans inventer la TVA", () => {
    for (const flow of [
      "France B2B domestique",
      "Union européenne B2B",
      "Union européenne B2C",
      "Royaume-Uni — services numériques",
      "Canada — GST/HST numérique",
      "Australie — services et produits numériques importés",
      "États-Unis — sales tax par État",
      "Autre pays hors Union européenne",
      "Merchant of Record",
    ]) {
      expect(routeSource).toContain(flow);
    }
    for (const source of [
      "https://taxation-customs.ec.europa.eu/taxation/vat/vat-directive/place-taxation_en",
      "https://www.gov.uk/guidance/the-vat-rules-if-you-supply-digital-services-to-private-consumers",
      "https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses/digital-economy-gsthst/charge-collect/cross-border.html",
      "https://www.ato.gov.au/law/view/document?DocID=GST%2FGSTR20171%2FNAT%2FATO%2F00001",
      "https://www.mtc.gov/uniformity/sales-tax-on-digital-products/",
      "https://www.tax.ny.gov/pubs_and_bulls/tg_bulletins/st/computer_software.htm",
      "https://comptroller.texas.gov/taxes/publications/96-259.php",
      "https://cdtfa.ca.gov/taxes-and-fees/manuals/am-04.pdf",
    ]) {
      expect(routeSource).toContain(source);
    }
    expect(normalized).toContain(
      "Ne vous fiez pas à une seule adresse IP ou au pays de la carte",
    );
    expect(normalized).toContain(
      "Routez-le vers l’expert-comptable ou le fiscaliste",
    );
    expect(normalized).toContain(
      "Aucun booléen national « SaaS taxable » n’est défendable",
    );
    expect(normalized).toContain(
      "Trois traitements administratifs contradictoires du SaaS aux États-Unis",
    );
  });

  it("partage vingt-quatre tests canoniques avec le classeur et une porte PASS, revue ou STOP", () => {
    expect(acceptanceTests).toHaveLength(24);
    expect(routeSource).toContain(
      'import acceptanceTests from "@/lib/subscription-billing-acceptance-tests.json"',
    );
    for (const [index, test] of acceptanceTests.entries()) {
      expect(test.id).toBe(`T-${String(index + 1).padStart(2, "0")}`);
      expect(test.family.length).toBeGreaterThan(0);
      expect(test.article.length).toBeGreaterThan(40);
      expect(generatorSource).toContain(`"${test.id}"`);
      expect(generatorSource).toContain(`"${test.case}"`);
    }
    expect(generatorSource).toContain(
      "Divergence du test canonique",
    );
    expect(validatorSource).toContain(
      "canonicalAcceptanceTests.map((test) => [test.id, test.case])",
    );
    expect(routeSource).toContain("Critères de sortie de recette");
    expect(routeSource).toContain("Doublons no-op");
    expect(routeSource).toContain("conflit d’idempotence");
    expect(normalized).toContain(
      "Le bon livrable n’est pas seulement une suite de captures vertes",
    );
  });

  it("reste aligné à gauche, daté et honnête sur son statut", () => {
    expect(routeSource).not.toContain("text-center");
    expect(componentSource).toContain("text-left");
    expect(componentSource).not.toContain("text-center");
    expect(guideLayoutSource).toContain("{point.number}");
    expect(routeSource.match(/<GuideInlineCTA\b/g)).toHaveLength(1);
    expect(routeSource).toContain('ctaService="saas"');
    expect(routeSource).toContain('ctaSource="guide-facturation-saas"');
    expect(routeSource).toContain("showSidebarCta={false}");
    expect(guide.dateModified).toBe("2026-07-28");
    expect(guide.readTimeMin).toBe(25);
    expect(normalized).toContain(
      "Les sources ci-dessous ont été revérifiées le 28 juillet 2026",
    );
    expect(researchSource).toContain(
      "L’ancien `19/20` reste un artefact historique",
    );
    expect(researchSource).toContain(
      "Statut : **GO_LOCAL_DRAFT R6 — 98/99/100, aucun P0/P1**",
    );
  });
});
