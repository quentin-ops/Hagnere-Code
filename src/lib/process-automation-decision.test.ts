import { describe, expect, it } from "vitest";
import {
  PROCESS_AUTOMATION_EXAMPLE,
  buildProcessAutomationSummary,
  cloneProcessAutomationCandidate,
  createEmptyProcessAutomationCandidate,
  evaluateProcessAutomationCandidate,
} from "./process-automation-decision";

describe("evaluateProcessAutomationCandidate", () => {
  it("annualises observed work without calling it a cash saving", () => {
    const result = evaluateProcessAutomationCandidate(
      cloneProcessAutomationCandidate(PROCESS_AUTOMATION_EXAMPLE),
    );

    expect(result.annualCases).toBe(1440);
    expect(result.annualActiveHours).toBe(96);
    expect(result.annualCorrectionHours).toBe(36);
    expect(result.annualObservedHours).toBe(132);
    expect(result.verdict).toBe("bounded-pilot");
  });

  it("keeps hard stops non-compensable", () => {
    const candidate = cloneProcessAutomationCandidate(
      PROCESS_AUTOMATION_EXAMPLE,
    );
    candidate.hardStops.irreversibleAction = true;

    const result = evaluateProcessAutomationCandidate(candidate);

    expect(result.verdict).toBe("stop");
    expect(result.activeHardStops).toEqual(["irreversibleAction"]);
  });

  it("asks for observation when a criterion is still unknown", () => {
    const candidate = cloneProcessAutomationCandidate(
      PROCESS_AUTOMATION_EXAMPLE,
    );
    candidate.readiness.inputs = "unknown";

    const result = evaluateProcessAutomationCandidate(candidate);

    expect(result.verdict).toBe("observe");
    expect(result.unknownReadiness).toEqual(["inputs"]);
  });

  it("rejects missing or negative quantitative inputs", () => {
    const candidate = cloneProcessAutomationCandidate(
      PROCESS_AUTOMATION_EXAMPLE,
    );
    candidate.casesPerMonth = Number.NaN;

    expect(evaluateProcessAutomationCandidate(candidate).verdict).toBe(
      "invalid",
    );

    candidate.casesPerMonth = -1;
    expect(evaluateProcessAutomationCandidate(candidate).verdict).toBe(
      "invalid",
    );
  });

  it("does not recommend a pilot without observed cases and work", () => {
    const candidate = cloneProcessAutomationCandidate(
      PROCESS_AUTOMATION_EXAMPLE,
    );
    candidate.casesPerMonth = 0;
    candidate.activeMinutesPerCase = 0;
    candidate.correctionHoursPerMonth = 0;

    const result = evaluateProcessAutomationCandidate(candidate);

    expect(result.annualCases).toBe(0);
    expect(result.annualObservedHours).toBe(0);
    expect(result.verdict).toBe("observe");
  });

  it("creates a blank candidate without inheriting the example evidence", () => {
    const candidate = createEmptyProcessAutomationCandidate();

    expect(candidate.name).toBe("");
    expect(candidate.casesPerMonth).toBeNaN();
    expect(new Set(Object.values(candidate.readiness))).toEqual(
      new Set(["unknown"]),
    );
    expect(Object.values(candidate.hardStops)).not.toContain(true);
    const decision = evaluateProcessAutomationCandidate(candidate);
    const summary = buildProcessAutomationSummary(candidate, decision);

    expect(decision.verdict).toBe("invalid");
    expect(summary).toContain("à renseigner ou corriger");
    expect(summary).not.toContain("NaN");
  });

  it("builds a French dossier without leaking internal identifiers", () => {
    const candidate = cloneProcessAutomationCandidate(
      PROCESS_AUTOMATION_EXAMPLE,
    );
    const decision = evaluateProcessAutomationCandidate(candidate);
    const summary = buildProcessAutomationSummary(candidate, decision);

    expect(summary).toContain("Candidat à un pilote borné");
    expect(summary).toContain("Début, fin et résultat : documenté");
    expect(summary).toContain("Exceptions connues et orientées : partiel");
    expect(summary).not.toMatch(
      /bounded-pilot|boundary|documented|exceptions: partial/,
    );
  });
});
