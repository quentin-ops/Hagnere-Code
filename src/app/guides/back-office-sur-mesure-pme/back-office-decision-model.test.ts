import { describe, expect, it } from "vitest";
import {
  MAX_SAFE_OBSERVED_MINUTES,
  WORKLOAD_ROUNDING_NOTE,
  WORKLOAD_ROUNDING_POLICY,
  buildDecisionDossier,
  calculateObservedWorkload,
  createEmptyDecisionInputs,
  evaluateDecision,
  proofQuestions,
  type DecisionInputs,
  type DecisionOption,
} from "./back-office-decision-model";

function completeInputs(selectedOption: DecisionOption | null): DecisionInputs {
  const inputs = createEmptyDecisionInputs();
  for (const question of proofQuestions) inputs.evidence[question.key] = "yes";
  inputs.evidence.existingCoversContract = "no";
  inputs.evidence.standardCoversContract = "no";
  inputs.evidence.boundaryIsolable = "no";
  inputs.workload = {
    period: "week",
    caseCount: 120,
    activeMinutesPerCase: 6,
    recoveryCaseCount: 8,
    recoveryMinutesPerCase: 15,
    recoveryAlreadyIncluded: false,
  };
  inputs.selectedOption = selectedOption;
  return inputs;
}

describe("back-office decision model", () => {
  it("defines a named fixed-point rounding policy", () => {
    expect(WORKLOAD_ROUNDING_POLICY).toMatchObject({
      name: "dixièmes de minute sûrs",
      minuteStep: 0.1,
      minuteScale: 10,
      minuteDecimalPlaces: 1,
      hourDecimalPlaces: 4,
    });
    expect(MAX_SAFE_OBSERVED_MINUTES * 10).toBe(Number.MAX_SAFE_INTEGER);
  });

  it("defines fourteen explicit proof questions without a score", () => {
    expect(proofQuestions).toHaveLength(14);
    expect(new Set(proofQuestions.map((question) => question.key)).size).toBe(
      14,
    );
    expect(proofQuestions.map((question) => question.number)).toEqual(
      Array.from({ length: 14 }, (_, index) => index + 1),
    );
    expect(evaluateDecision(createEmptyDecisionInputs())).not.toHaveProperty(
      "score",
    );
    expect(
      proofQuestions.find((question) => question.key === "existingOptionTested")
        ?.question,
    ).toContain("processus manuel actuel");
    expect(
      proofQuestions.find((question) => question.key === "boundaryIsolable")
        ?.question,
    ).toContain("Une brique légère testée");
  });

  it("starts suspended and never manufactures a recommendation", () => {
    const result = evaluateDecision(createEmptyDecisionInputs());
    expect(result.status).toBe("STOP_MISSING_EVIDENCE");
    expect(result.canConclude).toBe(false);
    expect(result.selectedDecision).toBeNull();
    expect(result.criticalUnknowns.length).toBeGreaterThan(14);
  });

  it("returns all five options without ranking them", () => {
    const result = evaluateDecision(createEmptyDecisionInputs());
    expect(result.optionAssessments.map((item) => item.option)).toEqual([
      "keep-configure",
      "standard",
      "light-assembly",
      "custom-back-office",
      "defer",
    ]);
  });

  it("calculates active, recovery and total workload with visible units", () => {
    const result = calculateObservedWorkload({
      period: "month",
      caseCount: 200,
      activeMinutesPerCase: 4.5,
      recoveryCaseCount: 12,
      recoveryMinutesPerCase: 20,
      recoveryAlreadyIncluded: false,
    });
    expect(result.status).toBe("COMPLETE");
    expect(result.activeMinutes).toBe(900);
    expect(result.recoveryMinutes).toBe(240);
    expect(result.totalObservedMinutes).toBe(1140);
    expect(result.totalObservedHours).toBe(19);
  });

  it("reproduces the guide example without hidden rounding", () => {
    const result = calculateObservedWorkload({
      period: "week",
      caseCount: 120,
      activeMinutesPerCase: 6,
      recoveryCaseCount: 8,
      recoveryMinutesPerCase: 15,
      recoveryAlreadyIncluded: false,
    });
    expect(result).toMatchObject({
      status: "COMPLETE",
      activeMinutes: 720,
      recoveryMinutes: 120,
      totalObservedMinutes: 840,
      totalObservedHours: 14,
    });
  });

  it("normalizes 3 × 0.1 to 0.3 without leaking binary precision", () => {
    const result = calculateObservedWorkload({
      period: "week",
      caseCount: 3,
      activeMinutesPerCase: 0.1,
      recoveryCaseCount: 0,
      recoveryMinutesPerCase: 0,
      recoveryAlreadyIncluded: false,
    });
    expect(result).toMatchObject({
      status: "COMPLETE",
      activeMinutes: 0.3,
      recoveryMinutes: 0,
      totalObservedMinutes: 0.3,
      totalObservedHours: 0.005,
    });
    expect(JSON.stringify(result)).not.toContain("0.30000000000000004");
  });

  it("adds 0.1 and 0.2 exactly and keeps included recovery separate", () => {
    const inputs = {
      period: "week" as const,
      caseCount: 1,
      activeMinutesPerCase: 0.1,
      recoveryCaseCount: 1,
      recoveryMinutesPerCase: 0.2,
      recoveryAlreadyIncluded: false,
    };
    const excluded = calculateObservedWorkload(inputs);
    expect(excluded).toMatchObject({
      status: "COMPLETE",
      activeMinutes: 0.1,
      recoveryMinutes: 0.2,
      totalObservedMinutes: 0.3,
      totalObservedHours: 0.005,
    });

    const included = calculateObservedWorkload({
      ...inputs,
      recoveryAlreadyIncluded: true,
    });
    expect(included).toMatchObject({
      status: "COMPLETE",
      activeMinutes: 0.1,
      recoveryMinutes: 0.2,
      totalObservedMinutes: 0.1,
      totalObservedHours: 0.0017,
    });
  });

  it("does not double-count recovery already included in active time", () => {
    const result = calculateObservedWorkload({
      period: "day",
      caseCount: 10,
      activeMinutesPerCase: 12,
      recoveryCaseCount: 2,
      recoveryMinutesPerCase: 30,
      recoveryAlreadyIncluded: true,
    });
    expect(result.activeMinutes).toBe(120);
    expect(result.recoveryMinutes).toBe(60);
    expect(result.totalObservedMinutes).toBe(120);
    expect(result.explanation).toContain("n’est pas ajoutée une seconde fois");
  });

  it("accepts zero as observed data rather than unknown", () => {
    const result = calculateObservedWorkload({
      period: "week",
      caseCount: 0,
      activeMinutesPerCase: 0,
      recoveryCaseCount: 0,
      recoveryMinutesPerCase: 0,
      recoveryAlreadyIncluded: false,
    });
    expect(result.status).toBe("COMPLETE");
    expect(result.totalObservedMinutes).toBe(0);
    expect(result.missing).toEqual([]);
  });

  it("preserves the smallest positive step and rejects finer silent precision", () => {
    const smallest = calculateObservedWorkload({
      period: "week",
      caseCount: 1,
      activeMinutesPerCase: 0.1,
      recoveryCaseCount: 0,
      recoveryMinutesPerCase: 0,
      recoveryAlreadyIncluded: false,
    });
    expect(smallest).toMatchObject({
      status: "COMPLETE",
      activeMinutes: 0.1,
      totalObservedMinutes: 0.1,
      totalObservedHours: 0.0017,
    });

    const finerThanPolicy = calculateObservedWorkload({
      period: "week",
      caseCount: 1,
      activeMinutesPerCase: 0.05,
      recoveryCaseCount: 0,
      recoveryMinutesPerCase: 0,
      recoveryAlreadyIncluded: false,
    });
    expect(finerThanPolicy.status).toBe("INVALID");
    expect(finerThanPolicy.activeMinutes).toBeNull();
    expect(finerThanPolicy.errors.join(" ")).toContain("pas de 0,1 minute");
  });

  it("keeps missing workload values unknown instead of converting them to zero", () => {
    const result = calculateObservedWorkload({
      period: "unknown",
      caseCount: null,
      activeMinutesPerCase: null,
      recoveryCaseCount: null,
      recoveryMinutesPerCase: null,
      recoveryAlreadyIncluded: false,
    });
    expect(result.status).toBe("INCOMPLETE");
    expect(result.totalObservedMinutes).toBeNull();
    expect(result.missing).toContain("nombre de cas");
  });

  it("rejects negative, fractional and non-finite incompatible values", () => {
    for (const workload of [
      {
        period: "week" as const,
        caseCount: -1,
        activeMinutesPerCase: 2,
        recoveryCaseCount: 0,
        recoveryMinutesPerCase: 0,
        recoveryAlreadyIncluded: false,
      },
      {
        period: "week" as const,
        caseCount: 1.5,
        activeMinutesPerCase: 2,
        recoveryCaseCount: 0,
        recoveryMinutesPerCase: 0,
        recoveryAlreadyIncluded: false,
      },
      {
        period: "week" as const,
        caseCount: 1,
        activeMinutesPerCase: Number.POSITIVE_INFINITY,
        recoveryCaseCount: 0,
        recoveryMinutesPerCase: 0,
        recoveryAlreadyIncluded: false,
      },
    ]) {
      expect(calculateObservedWorkload(workload).status).toBe("INVALID");
    }
  });

  it("rejects a recovery count greater than the observed case count", () => {
    const result = calculateObservedWorkload({
      period: "week",
      caseCount: 4,
      activeMinutesPerCase: 10,
      recoveryCaseCount: 5,
      recoveryMinutesPerCase: 2,
      recoveryAlreadyIncluded: false,
    });
    expect(result.status).toBe("INVALID");
    expect(result.errors.join(" ")).toContain(
      "ne peut pas dépasser le nombre total de cas",
    );
  });

  it("rejects unsafe minute values and products even when a multiplier is zero", () => {
    const unsafeMinute = calculateObservedWorkload({
      period: "week",
      caseCount: 0,
      activeMinutesPerCase: Number.MAX_SAFE_INTEGER + 1,
      recoveryCaseCount: 0,
      recoveryMinutesPerCase: 0,
      recoveryAlreadyIncluded: false,
    });
    expect(unsafeMinute.status).toBe("INVALID");

    const largestRepresentableTenth = calculateObservedWorkload({
      period: "week",
      caseCount: 1,
      activeMinutesPerCase: MAX_SAFE_OBSERVED_MINUTES,
      recoveryCaseCount: 0,
      recoveryMinutesPerCase: 0,
      recoveryAlreadyIncluded: false,
    });
    expect(largestRepresentableTenth.status).toBe("COMPLETE");
    expect(largestRepresentableTenth.activeMinutes).toBe(
      MAX_SAFE_OBSERVED_MINUTES,
    );

    const unrepresentableTenth = calculateObservedWorkload({
      period: "week",
      caseCount: 0,
      activeMinutesPerCase: MAX_SAFE_OBSERVED_MINUTES + 0.1,
      recoveryCaseCount: 0,
      recoveryMinutesPerCase: 0,
      recoveryAlreadyIncluded: false,
    });
    expect(unrepresentableTenth.status).toBe("INVALID");
    expect(unrepresentableTenth.errors.join(" ")).toContain(
      "plage de calcul fiable",
    );

    const unsafeProduct = calculateObservedWorkload({
      period: "week",
      caseCount: Number.MAX_SAFE_INTEGER,
      activeMinutesPerCase: 2,
      recoveryCaseCount: 0,
      recoveryMinutesPerCase: 0,
      recoveryAlreadyIncluded: false,
    });
    expect(unsafeProduct.status).toBe("INVALID");
    expect(unsafeProduct.errors.join(" ")).toContain(
      "dépasse la plage de calcul fiable",
    );
  });

  it("keeps a complete dossier awaiting a manual option selection", () => {
    const result = evaluateDecision(completeInputs(null));
    expect(result.status).toBe("AWAITING_SELECTION");
    expect(result.canConclude).toBe(false);
    expect(result.selectedDecision).toBeNull();
  });

  it("allows a manually selected custom option only after the explicit proofs", () => {
    const inputs = completeInputs("custom-back-office");
    const result = evaluateDecision(inputs);
    expect(result.status).toBe("READY_FOR_REVIEW");
    expect(result.selectedDecision).toBe("custom-back-office");
    expect(result.reasons.join(" ")).toContain("choisie manuellement");
  });

  it("accepts an observed manual process as the tested existing situation", () => {
    const inputs = completeInputs("custom-back-office");
    inputs.evidence.existingOptionTested = "yes";
    const result = evaluateDecision(inputs);
    expect(result.status).toBe("READY_FOR_REVIEW");
    expect(result.selectedDecision).toBe("custom-back-office");
    expect(
      result.optionAssessments.find(
        (assessment) => assessment.option === "custom-back-office",
      )?.status,
    ).toBe("AVAILABLE");
  });

  it("blocks every investment option when the current tool or manual process was not tested", () => {
    const inputs = completeInputs("standard");
    inputs.evidence.existingOptionTested = "no";
    inputs.evidence.standardCoversContract = "yes";
    const result = evaluateDecision(inputs);
    expect(result.status).toBe("STOP_MISSING_EVIDENCE");
    expect(result.canConclude).toBe(false);
    expect(result.blockingFacts.join(" ")).toContain(
      "outil ou le processus actuel",
    );
  });

  it("keeps an untested light boundary unknown instead of treating it as feasible", () => {
    const inputs = completeInputs("light-assembly");
    inputs.evidence.boundaryIsolable = "unknown";
    const result = evaluateDecision(inputs);
    expect(result.status).toBe("STOP_MISSING_EVIDENCE");
    expect(result.canConclude).toBe(false);
    expect(result.criticalUnknowns.join(" ")).toContain(
      "Écart couvert par une brique isolable",
    );
  });

  it("makes light assembly and custom mutually exclusive on the tested boundary", () => {
    const lightInputs = completeInputs("light-assembly");
    lightInputs.evidence.boundaryIsolable = "yes";
    const lightResult = evaluateDecision(lightInputs);
    expect(lightResult.status).toBe("READY_FOR_REVIEW");
    expect(
      lightResult.optionAssessments.find(
        (assessment) => assessment.option === "light-assembly",
      )?.status,
    ).toBe("AVAILABLE");
    expect(
      lightResult.optionAssessments.find(
        (assessment) => assessment.option === "custom-back-office",
      )?.status,
    ).toBe("CONTRADICTED");

    const customInputs = completeInputs("custom-back-office");
    customInputs.evidence.boundaryIsolable = "no";
    const customResult = evaluateDecision(customInputs);
    expect(customResult.status).toBe("READY_FOR_REVIEW");
    expect(
      customResult.optionAssessments.find(
        (assessment) => assessment.option === "light-assembly",
      )?.status,
    ).toBe("CONTRADICTED");
    expect(
      customResult.optionAssessments.find(
        (assessment) => assessment.option === "custom-back-office",
      )?.status,
    ).toBe("AVAILABLE");
  });

  it("allows keep and standard only when their own contract is covered", () => {
    const keepInputs = completeInputs("keep-configure");
    keepInputs.evidence.existingCoversContract = "yes";
    expect(evaluateDecision(keepInputs).status).toBe("READY_FOR_REVIEW");

    const standardInputs = completeInputs("standard");
    standardInputs.evidence.standardCoversContract = "yes";
    expect(evaluateDecision(standardInputs).status).toBe("READY_FOR_REVIEW");
  });

  it("contradicts custom when a tested standard already covers the contract", () => {
    const inputs = completeInputs("custom-back-office");
    inputs.evidence.standardCoversContract = "yes";
    const result = evaluateDecision(inputs);
    expect(result.status).toBe("CONTRADICTED_SELECTION");
    expect(result.selectedDecision).toBeNull();
    expect(result.reasons.join(" ")).toContain("Standard suffisant");
  });

  it("blocks the decision when the process is unstable", () => {
    const inputs = completeInputs("custom-back-office");
    inputs.evidence.processStable = "no";
    const result = evaluateDecision(inputs);
    expect(result.status).toBe("STOP_MISSING_EVIDENCE");
    expect(result.blockingFacts.join(" ")).toContain("instable");
  });

  it("blocks unknown rights, TCO and owners even when custom was selected", () => {
    const inputs = completeInputs("custom-back-office");
    inputs.evidence.rightsDataExportQualified = "unknown";
    inputs.evidence.tcoAndHorizonDocumented = "unknown";
    inputs.evidence.supportOwnerNamed = "unknown";
    const result = evaluateDecision(inputs);
    expect(result.canConclude).toBe(false);
    expect(result.criticalUnknowns.join(" ")).toContain(
      "Droits, données et export",
    );
    expect(result.criticalUnknowns.join(" ")).toContain("Coût total");
    expect(result.criticalUnknowns.join(" ")).toContain("Support");
  });

  it("makes defer explicit without pretending missing evidence is a final recommendation", () => {
    const inputs = createEmptyDecisionInputs();
    inputs.selectedOption = "defer";
    const result = evaluateDecision(inputs);
    expect(result.status).toBe("DEFERRED_FOR_EVIDENCE");
    expect(result.canConclude).toBe(false);
    expect(result.selectedDecision).toBeNull();
  });

  it("produces a copyable dossier with formulas, five options and limits", () => {
    const inputs = completeInputs("custom-back-office");
    const dossier = buildDecisionDossier(inputs);
    expect(dossier).toContain("Charge active : 720 min / semaine observée");
    expect(dossier).toContain("Charge de reprise : 120 min");
    expect(dossier).toContain("CINQ OPTIONS");
    expect(dossier).toContain("Conserver et mieux configurer");
    expect(dossier).toContain("Cadrer un back-office dédié");
    expect(dossier).toContain("ne constitue ni un devis");
  });

  it("keeps normalized decimal values in the copied dossier", () => {
    const inputs = completeInputs("custom-back-office");
    inputs.workload = {
      period: "week",
      caseCount: 3,
      activeMinutesPerCase: 0.1,
      recoveryCaseCount: 0,
      recoveryMinutesPerCase: 0,
      recoveryAlreadyIncluded: false,
    };
    const dossier = buildDecisionDossier(inputs);
    expect(dossier).toContain("Charge active : 0.3 min");
    expect(dossier).toContain("Charge totale observée : 0.3 min (0.005 h)");
    expect(dossier).toContain(WORKLOAD_ROUNDING_NOTE);
    expect(dossier).not.toContain("0.30000000000000004");
  });
});
