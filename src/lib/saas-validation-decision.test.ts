import { describe, expect, it } from "vitest";
import {
  SAAS_UNIT_ECONOMICS_SCENARIOS,
  SAAS_VALIDATION_EXAMPLE,
  buildSaasValidationSummary,
  calculateSaasUnitEconomics,
  cloneSaasValidationCandidate,
  createEmptySaasValidationCandidate,
  evaluateSaasValidationCandidate,
} from "./saas-validation-decision";

describe("evaluateSaasValidationCandidate", () => {
  it("values the fictitious test and stops at a bounded pilot", () => {
    const decision = evaluateSaasValidationCandidate(
      cloneSaasValidationCandidate(SAAS_VALIDATION_EXAMPLE),
    );

    expect(decision.valuedTestCostEur).toBe(4300);
    expect(decision.verdict).toBe("bounded-pilot");
    expect(decision.weakGates).toEqual(["usage"]);
  });

  it("keeps hard stops non-compensable", () => {
    const candidate = cloneSaasValidationCandidate(SAAS_VALIDATION_EXAMPLE);
    candidate.gates.usage = "demonstrated";
    candidate.hardStops.unauthorizedData = true;

    const decision = evaluateSaasValidationCandidate(candidate);

    expect(decision.verdict).toBe("stop");
    expect(decision.activeHardStops).toEqual(["unauthorizedData"]);
  });

  it("does not rewrite a contradicted hypothesis as a success", () => {
    const candidate = cloneSaasValidationCandidate(SAAS_VALIDATION_EXAMPLE);
    candidate.gates.problem = "contradicted";

    const decision = evaluateSaasValidationCandidate(candidate);

    expect(decision.verdict).toBe("pivot-or-stop");
    expect(decision.contradictedGates).toEqual(["problem"]);
  });

  it("requires demonstrated offer evidence before a pilot", () => {
    const candidate = cloneSaasValidationCandidate(SAAS_VALIDATION_EXAMPLE);
    candidate.gates.offer = "observed";

    expect(evaluateSaasValidationCandidate(candidate).verdict).toBe(
      "test-offer",
    );
  });

  it("allows only a limited MVP after observed repeat usage", () => {
    const candidate = cloneSaasValidationCandidate(SAAS_VALIDATION_EXAMPLE);
    candidate.gates.usage = "observed";

    expect(evaluateSaasValidationCandidate(candidate).verdict).toBe(
      "limited-mvp",
    );
  });

  it("creates a genuinely blank dossier without leaking NaN", () => {
    const candidate = createEmptySaasValidationCandidate();
    const decision = evaluateSaasValidationCandidate(candidate);
    const summary = buildSaasValidationSummary(candidate, decision);

    expect(decision.verdict).toBe("invalid");
    expect(decision.missingFields).toEqual([
      "name",
      "segment",
      "hypothesis",
      "experiment",
      "metric",
      "threshold",
      "result",
      "nextAction",
    ]);
    expect(new Set(Object.values(candidate.gates))).toEqual(
      new Set(["unknown"]),
    );
    expect(Object.values(candidate.hardStops)).not.toContain(true);
    expect(summary).toContain("à renseigner ou corriger");
    expect(summary).not.toContain("NaN");
  });

  it("never produces an MVP verdict from menus alone", () => {
    const candidate = cloneSaasValidationCandidate(SAAS_VALIDATION_EXAMPLE);
    candidate.gates.usage = "observed";
    candidate.hypothesis = "";
    candidate.experiment = "";
    candidate.metric = "";
    candidate.threshold = "";
    candidate.result = "";
    candidate.nextAction = "";

    const decision = evaluateSaasValidationCandidate(candidate);

    expect(decision.verdict).toBe("invalid");
    expect(decision.missingFields).toEqual([
      "hypothesis",
      "experiment",
      "metric",
      "threshold",
      "result",
      "nextAction",
    ]);
  });

  it("never masks a hard stop behind an incomplete dossier", () => {
    const candidate = createEmptySaasValidationCandidate();
    candidate.hardStops.unauthorizedData = true;

    const decision = evaluateSaasValidationCandidate(candidate);

    expect(decision.verdict).toBe("stop");
    expect(decision.valuedTestCostEur).toBeNull();
    expect(decision.activeHardStops).toEqual(["unauthorizedData"]);
  });
});

describe("calculateSaasUnitEconomics", () => {
  it("recalculates all three 12/36/60-month scenarios", () => {
    const results = SAAS_UNIT_ECONOMICS_SCENARIOS.map(
      calculateSaasUnitEconomics,
    );

    expect(results).toEqual([
      expect.objectContaining({
        name: "Prudent",
        monthlyContributionEur: 240,
        contributionRatePercent: 53.33,
        paybackMonths: 20,
        cumulativeContribution12MonthsEur: -1920,
        cumulativeContribution36MonthsEur: 3840,
        cumulativeContribution60MonthsEur: 9600,
      }),
      expect.objectContaining({
        name: "Central",
        monthlyContributionEur: 510,
        contributionRatePercent: 78.46,
        paybackMonths: 7.06,
        cumulativeContribution12MonthsEur: 2520,
        cumulativeContribution36MonthsEur: 14760,
        cumulativeContribution60MonthsEur: 27000,
      }),
      expect.objectContaining({
        name: "Robuste",
        monthlyContributionEur: 730,
        contributionRatePercent: 81.11,
        paybackMonths: 4.38,
        cumulativeContribution12MonthsEur: 5560,
        cumulativeContribution36MonthsEur: 23080,
        cumulativeContribution60MonthsEur: 40600,
      }),
    ]);
  });

  it("does not invent payback when contribution is non-positive", () => {
    const result = calculateSaasUnitEconomics({
      name: "Déficitaire",
      monthlyPriceEur: 100,
      monthlyVariableCostEur: 120,
      acquisitionAndOnboardingCostEur: 1000,
    });

    expect(result.monthlyContributionEur).toBe(-20);
    expect(result.paybackMonths).toBeNull();
  });
});
