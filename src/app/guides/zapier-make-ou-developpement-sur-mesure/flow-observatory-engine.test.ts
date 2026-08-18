import { describe, expect, it } from "vitest";
import {
  buildFlowDossier,
  calculateCandidateCost,
  calculateCurrentCost,
  cloneFlowInputs,
  createEmptyFlowInputs,
  decisionOutcomeLabels,
  evaluateFlow,
  failureGates,
  parseLocalizedNumber,
  type DecisionOutcome,
  type FlowObservatoryInputs,
} from "./flow-observatory-engine";

function completeExample(
  selectedOutcome: DecisionOutcome | null = "hybrid",
): FlowObservatoryInputs {
  const inputs = createEmptyFlowInputs();
  inputs.currentPlatform = "make";
  inputs.dataScope = "personal-data";
  inputs.sourceOfTruth = "Le CRM fait foi pour le statut du dossier";
  inputs.owner = "Responsable opérations";
  inputs.substitute = "Responsable support";
  inputs.maximumAcceptableDelayMinutes = 120;
  inputs.observation = {
    events: 1200,
    branchExecutions: 1680,
    billableUnits: 2540,
    completeSuccesses: 1130,
    visibleFailures: 30,
    partialSuccesses: 40,
    automaticRetries: 22,
    manualRetries: 8,
    duplicates: 3,
    observationHours: 4,
    correctionHours: 9,
    reconciliationHours: 5,
    includedContractHours: 3,
  };
  inputs.currentCosts = {
    subscriptionMonthly: 90,
    overagesMonthly: 40,
    optionsMonthly: 20,
    externalServicesMonthly: 30,
    humanHourlyCost: 55,
    remediationOneOff: 600,
    codeOperationsMonthly: 0,
    apiUpdatesAnnual: 300,
    incidentCostMonthly: 120,
    incidentBasis: "Incident fictif documenté sur la période",
    exitCost: 400,
  };
  inputs.candidateCosts = {
    kind: "hybrid",
    framingOneOff: 800,
    buildOneOff: 2800,
    testsOneOff: 900,
    migrationOneOff: 500,
    platformMonthly: 120,
    externalServicesMonthly: 30,
    humanHoursMonthly: 6,
    humanHourlyCost: 55,
    includedContractHours: 1,
    hostingMonthly: 50,
    monitoringMonthly: 80,
    maintenanceMonthly: 200,
    supportMonthly: 100,
    apiUpdatesAnnual: 600,
    incidentCostMonthly: 50,
    incidentBasis: "Hypothèse fictive nommée, à remplacer",
    exitCost: 1000,
  };
  inputs.uncertaintyPercent = 15;
  for (const gate of failureGates) inputs.gates[gate.key] = "pass";
  inputs.selectedOutcome = selectedOutcome;
  return inputs;
}

describe("flow observatory engine", () => {
  it("starts with unknowns instead of manufacturing zeros", () => {
    const inputs = createEmptyFlowInputs();
    const result = evaluateFlow(inputs);
    expect(result.status).toBe("STOP_MISSING_EVIDENCE");
    expect(result.canConclude).toBe(false);
    expect(result.currentCost.total12Months).toBeNull();
    expect(inputs.observation.events).toBeNull();
    expect(result.missing).toContain("événements reçus");
    expect(result).not.toHaveProperty("score");
  });

  it("defines exactly seven non-compensable failure gates", () => {
    expect(failureGates).toHaveLength(7);
    expect(failureGates.map((gate) => gate.number)).toEqual([
      1, 2, 3, 4, 5, 6, 7,
    ]);
    expect(new Set(failureGates.map((gate) => gate.key)).size).toBe(7);
  });

  it("exposes exactly the five frozen manual outcomes", () => {
    expect(Object.keys(decisionOutcomeLabels)).toEqual([
      "keep-secure",
      "change-platform",
      "hybrid",
      "dedicated",
      "simplify-stop",
    ]);
  });

  it("parses French and English decimals while preserving blank as unknown", () => {
    expect(parseLocalizedNumber("")).toEqual({
      state: "unknown",
      value: null,
    });
    expect(parseLocalizedNumber("1,25")).toEqual({
      state: "valid",
      value: 1.25,
    });
    expect(parseLocalizedNumber("1.25")).toEqual({
      state: "valid",
      value: 1.25,
    });
    expect(parseLocalizedNumber("1\u202f234,50")).toEqual({
      state: "valid",
      value: 1234.5,
    });
    for (const invalid of ["-1", "1,234", "1.2.3", "NaN", "Infinity"])
      expect(parseLocalizedNumber(invalid).state).toBe("invalid");
  });

  it("reproduces the current 12 and 36 month example", () => {
    const cost = calculateCurrentCost(completeExample());
    expect(cost).toMatchObject({
      status: "COMPLETE",
      initialCost: 600,
      platformMonthly: 150,
      externalServicesMonthly: 30,
      humanMonthly: 825,
      codeOperationsMonthly: 0,
      incidentMonthly: 120,
      apiUpdatesAnnual: 300,
      exitCost: 400,
      total12Months: 14800,
      total36Months: 42400,
      interval12Months: [12580, 17020],
      interval36Months: [36040, 48760],
    });
  });

  it("reproduces the hybrid candidate and keeps cost categories separate", () => {
    const cost = calculateCandidateCost(completeExample());
    expect(cost).toMatchObject({
      status: "COMPLETE",
      initialCost: 5000,
      platformMonthly: 120,
      externalServicesMonthly: 30,
      humanMonthly: 275,
      codeOperationsMonthly: 430,
      incidentMonthly: 50,
      apiUpdatesAnnual: 600,
      exitCost: 1000,
      total12Months: 17460,
      total36Months: 40380,
      interval12Months: [14841, 20079],
      interval36Months: [34323, 46437],
    });
  });

  it("does not count included human hours twice", () => {
    const inputs = completeExample();
    expect(evaluateFlow(inputs)).toMatchObject({
      observedHumanHours: 18,
      nonOverlappingHumanHours: 15,
    });
    inputs.observation.includedContractHours = 18;
    expect(calculateCurrentCost(inputs).humanMonthly).toBe(0);
  });

  it("accepts explicit zeros as evidence", () => {
    const inputs = completeExample("keep-secure");
    inputs.observation = {
      events: 0,
      branchExecutions: 0,
      billableUnits: 0,
      completeSuccesses: 0,
      visibleFailures: 0,
      partialSuccesses: 0,
      automaticRetries: 0,
      manualRetries: 0,
      duplicates: 0,
      observationHours: 0,
      correctionHours: 0,
      reconciliationHours: 0,
      includedContractHours: 0,
    };
    const result = evaluateFlow(inputs);
    expect(result.status).toBe("READY_FOR_HUMAN_REVIEW");
    expect(result.pendingEvents).toBe(0);
    expect(result.completeSuccessRate).toBeNull();
    expect(result.currentCost.humanMonthly).toBe(0);
  });

  it("rejects inconsistent outcomes and invalid numeric values", () => {
    const inputs = completeExample();
    inputs.observation.completeSuccesses = 1200;
    inputs.observation.visibleFailures = 1;
    inputs.currentCosts.subscriptionMonthly = -1;
    const result = evaluateFlow(inputs);
    expect(result.status).toBe("STOP_INVALID_INPUT");
    expect(result.errors.join(" ")).toContain(
      "ne peuvent pas dépasser les événements reçus",
    );
    expect(result.errors.join(" ")).toContain(
      "abonnement mensuel attribué",
    );
  });

  it("rejects contract hours greater than observed or candidate hours", () => {
    const current = completeExample();
    current.observation.includedContractHours = 19;
    expect(calculateCurrentCost(current).status).toBe("INVALID");

    const candidate = completeExample();
    candidate.candidateCosts.includedContractHours = 7;
    expect(calculateCandidateCost(candidate).status).toBe("INVALID");
  });

  it("blocks a failed gate even when every cost field is complete", () => {
    const inputs = completeExample();
    inputs.gates.duplicateWebhook = "fail";
    const result = evaluateFlow(inputs);
    expect(result.status).toBe("STOP_GATE_FAILURE");
    expect(result.canConclude).toBe(false);
    expect(result.failedGates).toContain("4. Même webhook reçu deux fois");
    expect(result.currentCost.status).toBe("COMPLETE");
  });

  it("blocks an unknown gate instead of treating it as passed", () => {
    const inputs = completeExample();
    inputs.gates.rateLimit429 = "unknown";
    const result = evaluateFlow(inputs);
    expect(result.status).toBe("STOP_MISSING_EVIDENCE");
    expect(result.missing.join(" ")).toContain("porte 2");
  });

  it("requires a manually selected outcome after all evidence is complete", () => {
    const result = evaluateFlow(completeExample(null));
    expect(result.status).toBe("AWAITING_MANUAL_SELECTION");
    expect(result.canConclude).toBe(false);
    expect(result.selectedOutcome).toBeNull();
  });

  it("requires the candidate kind to match the selected outcome", () => {
    const inputs = completeExample("change-platform");
    expect(inputs.candidateCosts.kind).toBe("hybrid");
    const result = evaluateFlow(inputs);
    expect(result.status).toBe("STOP_TARGET_MISMATCH");
    expect(result.canConclude).toBe(false);
  });

  it("can review keep or simplify without manufacturing candidate costs", () => {
    for (const outcome of [
      "keep-secure",
      "simplify-stop",
    ] as const satisfies DecisionOutcome[]) {
      const inputs = completeExample(outcome);
      inputs.candidateCosts = createEmptyFlowInputs().candidateCosts;
      const result = evaluateFlow(inputs);
      expect(result.status).toBe("READY_FOR_HUMAN_REVIEW");
      expect(result.candidateCost).toBeNull();
    }
  });

  it("shows interval overlap at both horizons without recommending", () => {
    const result = evaluateFlow(completeExample());
    expect(result.status).toBe("READY_FOR_HUMAN_REVIEW");
    expect(result.comparison).toEqual({
      difference12Months: 2660,
      difference36Months: -2020,
      intervalsOverlap12Months: true,
      intervalsOverlap36Months: true,
    });
    expect(result.nextActions.join(" ")).toContain(
      "ne pas départager les options par le coût seul",
    );
  });

  it("requires an incident basis even when the explicit incident cost is zero", () => {
    const inputs = completeExample();
    inputs.currentCosts.incidentCostMonthly = 0;
    inputs.currentCosts.incidentBasis = "";
    const result = evaluateFlow(inputs);
    expect(result.status).toBe("STOP_MISSING_EVIDENCE");
    expect(result.missing.join(" ")).toContain("base documentée");
  });

  it("builds a copyable dossier with measures, gates, costs and five outputs", () => {
    const inputs = completeExample();
    const dossier = buildFlowDossier(inputs);
    expect(dossier).toContain("OBSERVATOIRE D'UN FLUX — DOSSIER LOCAL");
    expect(dossier).toContain("Événements : 1200");
    expect(dossier).toContain("4. Même webhook reçu deux fois : PASS");
    expect(dossier).toContain("12 mois : 14\u202f800");
    expect(dossier).toContain("[x] Choisir une architecture hybride");
    expect(dossier).toContain("Aucun verdict automatique");
  });

  it("clones nested inputs before a caller mutates them", () => {
    const original = completeExample();
    const cloned = cloneFlowInputs(original);
    cloned.observation.events = 1;
    cloned.currentCosts.subscriptionMonthly = 1;
    cloned.gates.rateLimit429 = "fail";
    expect(original.observation.events).toBe(1200);
    expect(original.currentCosts.subscriptionMonthly).toBe(90);
    expect(original.gates.rateLimit429).toBe("pass");
  });
});
