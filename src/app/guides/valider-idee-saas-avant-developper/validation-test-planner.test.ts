import { describe, expect, it } from "vitest";
import {
  assessValidationTest,
  type ValidationTestPlan,
} from "./validation-test-planner";

const completePlan: ValidationTestPlan = {
  risk: "buyer",
  segment: "Directions achats de PME industrielles",
  assumption:
    "Un acheteur habilité accepte d’examiner un pilote payant pour ce problème.",
  test: "commercial-offer",
  observation: "Réponses d’acheteurs habilités à une proposition écrite.",
  continueCriterion: "Le seuil écrit avant le test est atteint.",
  pivotCriterion: "Le problème existe mais le signataire ou le budget diffère.",
  stopCriterion: "Aucun acheteur n’accepte la prochaine étape définie.",
  owner: "La fondatrice",
};

describe("assessValidationTest", () => {
  it("valide une carte complète lorsque le test observe le risque choisi", () => {
    const result = assessValidationTest(completePlan);

    expect(result.ready).toBe(true);
    expect(result.missingFields).toEqual([]);
    expect(result.warning).toBeNull();
    expect(result.copyText).toContain("Continuer si");
    expect(result.copyText).toContain("Arrêter ou mettre en attente si");
  });

  it("ne confond pas une structure complète avec une validation de marché", () => {
    const result = assessValidationTest({
      ...completePlan,
      assumption: "Phrase remplie mais non vérifiée",
    });

    expect(result.ready).toBe(true);
    expect(result.testedScope).toContain("parcours d’achat");
    expect(result.untestedScope).toContain("ne prouve pas");
  });

  it("refuse une carte sans critère d’arrêt", () => {
    const result = assessValidationTest({
      ...completePlan,
      stopCriterion: "   ",
    });

    expect(result.ready).toBe(false);
    expect(result.missingFields).toContain("condition d’arrêt");
  });

  it("signale qu’un entretien ne valide pas un prix", () => {
    const result = assessValidationTest({
      ...completePlan,
      risk: "price",
      test: "retrospective-interview",
    });

    expect(result.ready).toBe(false);
    expect(result.warning).toContain("Acceptation de l’offre et du prix");
    expect(result.untestedScope).toContain("l’achat");
  });

  it("ne traite pas un entretien rétrospectif comme un test d’achat", () => {
    const result = assessValidationTest({
      ...completePlan,
      risk: "buyer",
      test: "retrospective-interview",
    });

    expect(result.ready).toBe(false);
    expect(result.warning).toContain("Acheteur et décision d’achat");
    expect(result.untestedScope).toContain("l’achat");
  });

  it("limite un essai technique à la faisabilité", () => {
    const result = assessValidationTest({
      ...completePlan,
      risk: "feasibility",
      test: "technical-spike",
    });

    expect(result.ready).toBe(true);
    expect(result.testedScope).toContain("inconnue technique précise");
    expect(result.untestedScope).toContain("ne prouve ni le besoin");
  });

  it("ne transforme pas une page d’attente en preuve d’achat", () => {
    const result = assessValidationTest({
      ...completePlan,
      risk: "channel",
      test: "qualified-landing",
    });

    expect(result.ready).toBe(true);
    expect(result.untestedScope).toContain("Une adresse laissée");
    expect(result.untestedScope).toContain("budget");
  });

  it("refuse une page de présentation pour trancher directement le problème", () => {
    const result = assessValidationTest({
      ...completePlan,
      risk: "problem",
      test: "qualified-landing",
    });

    expect(result.ready).toBe(false);
    expect(result.warning).toContain("Problème réellement prioritaire");
  });

  it("refuse un prototype cliquable pour trancher directement le problème", () => {
    const result = assessValidationTest({
      ...completePlan,
      risk: "problem",
      test: "clickable-prototype",
    });

    expect(result.ready).toBe(false);
    expect(result.warning).toContain("Problème réellement prioritaire");
  });

  it("ne traite pas un pilote manuel comme un test de prix par défaut", () => {
    const result = assessValidationTest({
      ...completePlan,
      risk: "price",
      test: "manual-pilot",
    });

    expect(result.ready).toBe(false);
    expect(result.warning).toContain("Acceptation de l’offre et du prix");
  });

  it("normalise les espaces dans la carte copiée sans modifier le sens", () => {
    const result = assessValidationTest({
      ...completePlan,
      segment: "  Directions   achats \n de PME  ",
    });

    expect(result.copyText).toContain("Segment : Directions achats de PME");
    expect(result.copyText).not.toContain("  Directions");
  });
});
