import { describe, expect, it } from "vitest";
import {
  PRE_LAUNCH_TESTS,
  createEmptyLandingPageWorksheet,
  createThermoBureauExample,
  decideLandingPage,
  formatLandingPageContinuitySummary,
  validateLandingPageWorksheet,
  type LandingPageContinuityWorksheet,
} from "./landing-page-continuity";

function readyWorksheet(): LandingPageContinuityWorksheet {
  const worksheet = createEmptyLandingPageWorksheet();
  worksheet.context = {
    search: "logiciel devis artisan",
    pageReference: "/logiciel-devis",
    primaryAction: "Demander une démonstration",
    recipient: "Équipe commerciale",
    expectedConfirmation: "Demande transmise, sans rendez-vous automatique",
    device: "Pixel 9",
    browser: "Chrome 136",
    viewportWidth: "390",
    network: "4G",
    testDate: "2026-07-22",
    dedicatedPageNeed: "no",
  };
  worksheet.inventory = {
    adReference: "RSA Logiciel devis",
    campaignReference: "Search Logiciel devis",
    accountReference: "Compte entreprise",
    activeAdsReviewed: true,
    campaignComponentsReviewed: true,
    accountComponentsReviewed: true,
    automaticComponentsReviewed: true,
    enhancedFlexibilityReviewed: true,
    aiMaxStatus: "off",
    textCustomizationStatus: "absent",
    finalUrlExpansionStatus: "off",
    finalUrlExpansionReviewed: false,
    advancedNotes: "Aucune autre URL observée le jour du test.",
  };
  worksheet.claims = [
    {
      id: "claim-ready",
      origin: "title",
      level: "ad",
      text: "Logiciel de devis pour artisans",
      possibleUrl: "/logiciel-devis",
      pageResponse: "Le titre nomme le logiciel, les devis et les artisans.",
      evidenceOrCondition:
        "Fonctions réellement disponibles dans la version montrée.",
      owner: "Responsable produit",
      checkedAt: "2026-07-22",
      correction: "",
      status: "ready",
    },
  ];
  PRE_LAUNCH_TESTS.forEach((test) => {
    worksheet.tests[test.id] = {
      status: test.id === "trackers" ? "not-applicable" : "passed",
      note: "Test consigné.",
    };
  });
  return worksheet;
}

describe("landing page continuity worksheet", () => {
  it("keeps every empty field unknown instead of declaring the page ready", () => {
    const worksheet = createEmptyLandingPageWorksheet();
    const validation = validateLandingPageWorksheet(worksheet);
    const decision = decideLandingPage(worksheet);

    expect(validation.valid).toBe(false);
    expect(validation.issues.map((issue) => issue.field)).toEqual(
      expect.arrayContaining([
        "search",
        "primaryAction",
        "recipient",
        "viewportWidth",
        "activeAdsReviewed",
        "aiMaxStatus",
        "textCustomizationStatus",
        "status",
      ]),
    );
    expect(decision.id).toBe("correct");
    expect(decision.unknowns.length).toBeGreaterThan(10);
  });

  it("validates an integer displayed width and real ISO dates", () => {
    const worksheet = readyWorksheet();
    worksheet.context.viewportWidth = "390.5";
    worksheet.context.testDate = "2026-02-30";
    worksheet.claims[0].checkedAt = "not-a-date";

    const validation = validateLandingPageWorksheet(worksheet);

    expect(validation.valid).toBe(false);
    expect(validation.issues.map((issue) => issue.message)).toEqual(
      expect.arrayContaining([
        "La largeur doit être un nombre entier compris entre 240 et 5 000 pixels.",
        "La date du test n’est pas valide.",
        "Ligne 1 : la date de dernière vérification n’est pas valide.",
      ]),
    );
  });

  it("always requires the text-adaptation check and keeps URL expansion conditional on AI Max", () => {
    const worksheet = readyWorksheet();
    worksheet.inventory.textCustomizationStatus = "unknown";

    let issues = validateLandingPageWorksheet(worksheet).issues;

    expect(issues.map((issue) => issue.field)).toContain(
      "textCustomizationStatus",
    );
    expect(issues.map((issue) => issue.field)).not.toContain(
      "finalUrlExpansionReviewed",
    );

    worksheet.inventory.textCustomizationStatus = "legacy";
    expect(validateLandingPageWorksheet(worksheet)).toEqual({
      valid: true,
      issues: [],
    });
    expect(formatLandingPageContinuitySummary(worksheet)).toContain(
      "Adaptation du texte : héritée d’avant AI Max",
    );

    worksheet.inventory.textCustomizationStatus = "active";
    expect(validateLandingPageWorksheet(worksheet).valid).toBe(true);
    expect(formatLandingPageContinuitySummary(worksheet)).toContain(
      "Adaptation du texte : active",
    );

    worksheet.inventory.aiMaxStatus = "on";
    worksheet.inventory.finalUrlExpansionStatus = "unknown";

    issues = validateLandingPageWorksheet(worksheet).issues;

    expect(issues.map((issue) => issue.field)).toEqual(
      expect.arrayContaining([
        "finalUrlExpansionStatus",
        "finalUrlExpansionReviewed",
      ]),
    );

    worksheet.inventory.finalUrlExpansionStatus = "on";
    worksheet.inventory.finalUrlExpansionReviewed = true;
    expect(validateLandingPageWorksheet(worksheet)).toEqual({
      valid: true,
      issues: [],
    });
  });

  it("produces each of the four decisions without a score", () => {
    const keep = readyWorksheet();
    const correct = readyWorksheet();
    correct.claims[0].status = "to-correct";
    correct.claims[0].correction = "Réécrire le titre de la page.";
    const create = readyWorksheet();
    create.context.dedicatedPageNeed = "yes";
    const postpone = readyWorksheet();
    postpone.claims[0].status = "blocking";
    postpone.claims[0].correction = "Obtenir l’autorisation avant de publier.";

    expect(decideLandingPage(keep).id).toBe("keep");
    expect(decideLandingPage(correct).id).toBe("correct");
    expect(decideLandingPage(create).id).toBe("create");
    expect(decideLandingPage(postpone).id).toBe("postpone");
    expect(decideLandingPage(keep).explanation).not.toMatch(
      /\d+\s*%|score de/i,
    );
    expect(decideLandingPage(keep).explanation).toContain(
      "ne garantit ni approbation, ni conversion, ni conformité",
    );
  });

  it("treats a failed reception test as a reason to postpone", () => {
    const worksheet = readyWorksheet();
    worksheet.tests.reception = {
      status: "failed",
      note: "La demande n’est pas arrivée dans la boîte attendue.",
    };

    const decision = decideLandingPage(worksheet);

    expect(decision.id).toBe("postpone");
    expect(decision.blockingReasons).toContain(
      "Test échoué : Demande reçue par la bonne personne.",
    );
  });

  it("does not accept a passed test without a written observation", () => {
    const worksheet = readyWorksheet();
    worksheet.tests.phone.note = "";

    const validation = validateLandingPageWorksheet(worksheet);
    const decision = decideLandingPage(worksheet);

    expect(validation.valid).toBe(false);
    expect(validation.issues).toContainEqual(
      expect.objectContaining({
        area: "test",
        field: "note",
        testId: "phone",
      }),
    );
    expect(decision.id).toBe("correct");
  });

  it("copies context, inventory, lines, tests, unknowns and the decision", () => {
    const worksheet = createThermoBureauExample();
    const summary = formatLandingPageContinuitySummary(worksheet);

    expect(worksheet.claims).toHaveLength(10);
    expect(worksheet.claims[9]).toEqual(
      expect.objectContaining({
        id: "claim-10",
        origin: "description",
        level: "ad",
        text: "Une visite technique pour recenser vos équipements et préparer un entretien adapté.",
        possibleUrl: "/entretien-climatisation-bureaux",
        owner: "Responsable service (rôle fictif)",
        checkedAt: "2026-07-15",
        status: "ready",
      }),
    );
    expect(worksheet.claims[9].pageResponse).not.toBe("");
    expect(worksheet.claims[9].evidenceOrCondition).not.toBe("");
    expect(summary).toContain("EXEMPLE ILLUSTRATIF FICTIF — ThermoBureau 73");
    expect(summary).toContain(
      "Recherche représentative : entretien climatisation bureaux Chambéry",
    );
    expect(summary).toContain("Composants automatiques : vérifiés");
    expect(summary).toContain(
      "Adaptation du texte : absente après vérification",
    );
    expect(summary).toContain("Dépannage climatisation");
    expect(summary).toContain(
      "Une visite technique pour recenser vos équipements et préparer un entretien adapté.",
    );
    expect(summary).toContain("TESTS AVANT LANCEMENT");
    expect(summary).toContain("INCONNUES");
    expect(summary).toContain("DÉCISION");
    expect(summary).toContain(
      "Corriger la page ou compléter la fiche, puis retester",
    );
    expect(summary).toContain("ne garantit ni résultat publicitaire");
    expect(summary).not.toMatch(/client Hagnéré|conforme WCAG|baisse.*CPC/i);
  });
});
