import { describe, expect, it } from "vitest";
import {
  acceptanceGateIds,
  assessAcceptanceReadiness,
  campaignFactFields,
  createEmptyAcceptanceGates,
  createEmptyCampaignFacts,
  type AcceptanceGates,
  type AcceptanceGateStatus,
  type AcceptanceVerdict,
  type CampaignFactId,
  type CampaignFacts,
} from "./acceptance-readiness";

const allStatuses: AcceptanceGateStatus[] = [
  "unknown",
  "partial",
  "ready",
  "blocked",
];

function gatesWith(status: AcceptanceGateStatus): AcceptanceGates {
  return Object.fromEntries(
    acceptanceGateIds.map((gateId) => [gateId, status]),
  ) as AcceptanceGates;
}

const cleanCampaign: CampaignFacts = {
  criticalCasesPlanned: 7,
  criticalCasesPassed: 7,
  failedCases: 0,
  openBlockingAnomalies: 0,
  openMajorAnomalies: 0,
  openMinorAnomalies: 0,
  pendingReservations: 0,
  blockedCases: 0,
  notRunCases: 0,
  casesWithoutEvidence: 0,
};

const invalidRuntimeValues: unknown[] = [
  -1,
  -0.5,
  0.5,
  Number.NaN,
  Number.POSITIVE_INFINITY,
  Number.NEGATIVE_INFINITY,
  Number.MAX_SAFE_INTEGER + 1,
  Number.MAX_VALUE,
  Symbol("1"),
  new Number(1),
  () => 1,
  "1",
  "",
  true,
  false,
  [],
  {},
  null,
  undefined,
];

describe("assessAcceptanceReadiness", () => {
  it("creates fresh unknown gates and unmeasured campaign facts", () => {
    const firstGates = createEmptyAcceptanceGates();
    const secondGates = createEmptyAcceptanceGates();
    const firstFacts = createEmptyCampaignFacts();
    const secondFacts = createEmptyCampaignFacts();

    expect(firstGates).not.toBe(secondGates);
    expect(firstFacts).not.toBe(secondFacts);
    expect(Object.keys(firstGates)).toEqual(acceptanceGateIds);
    expect(Object.values(firstGates)).toEqual(
      acceptanceGateIds.map(() => "unknown"),
    );
    expect(Object.keys(firstFacts)).toEqual(
      campaignFactFields.map(({ id }) => id),
    );
    expect(Object.values(firstFacts)).toEqual(
      campaignFactFields.map(() => null),
    );
  });

  it("reports every unknown gate by default", () => {
    const result = assessAcceptanceReadiness(
      createEmptyAcceptanceGates(),
      createEmptyCampaignFacts(),
    );

    expect(result.verdict).toBe("REWRITE_CASE");
    expect(result.concernedGateIds).toEqual(acceptanceGateIds);
    expect(result.concernedFactIds).toEqual([]);
    expect(result.remainingCriticalCases).toBeNull();
  });

  it("keeps a blocked gate above unknown, partial and green campaign data", () => {
    const gates = gatesWith("ready");
    gates.businessTraceability = "partial";
    gates.versionAndEnvironment = "unknown";
    gates.representativeData = "blocked";

    const result = assessAcceptanceReadiness(gates, cleanCampaign);

    expect(result.verdict).toBe("STOP_PREPARATION");
    expect(result.concernedGateIds).toEqual(["representativeData"]);
  });

  it("recomputes gate precedence for all 65,536 combinations", () => {
    for (
      let combination = 0;
      combination < allStatuses.length ** acceptanceGateIds.length;
      combination++
    ) {
      let cursor = combination;
      const gates = {} as AcceptanceGates;

      for (const gateId of acceptanceGateIds) {
        gates[gateId] = allStatuses[cursor % allStatuses.length];
        cursor = Math.floor(cursor / allStatuses.length);
      }

      const expectedStatus = (["blocked", "unknown", "partial"] as const).find(
        (status) =>
          acceptanceGateIds.some((gateId) => gates[gateId] === status),
      );
      const expectedVerdict: AcceptanceVerdict =
        expectedStatus === "blocked"
          ? "STOP_PREPARATION"
          : expectedStatus === "unknown"
            ? "REWRITE_CASE"
            : expectedStatus === "partial"
              ? "COMPLETE_CASE"
              : "CANDIDATE_FOR_ACCEPTANCE";
      const expectedGateIds = expectedStatus
        ? acceptanceGateIds.filter((gateId) => gates[gateId] === expectedStatus)
        : [];

      const result = assessAcceptanceReadiness(gates, cleanCampaign);

      expect(result.verdict).toBe(expectedVerdict);
      expect(result.concernedGateIds).toEqual(expectedGateIds);
    }
  }, 15_000);

  it("gets the independent verdict distribution across all gate combinations", () => {
    const counts: Partial<Record<AcceptanceVerdict, number>> = {};

    for (
      let combination = 0;
      combination < allStatuses.length ** acceptanceGateIds.length;
      combination++
    ) {
      let cursor = combination;
      const gates = {} as AcceptanceGates;

      for (const gateId of acceptanceGateIds) {
        gates[gateId] = allStatuses[cursor % allStatuses.length];
        cursor = Math.floor(cursor / allStatuses.length);
      }

      const verdict = assessAcceptanceReadiness(gates, cleanCampaign).verdict;
      counts[verdict] = (counts[verdict] ?? 0) + 1;
    }

    expect(counts).toEqual({
      STOP_PREPARATION: 58_975,
      REWRITE_CASE: 6_305,
      COMPLETE_CASE: 255,
      CANDIDATE_FOR_ACCEPTANCE: 1,
    });
  });

  it("keeps all seven verdicts in their documented conservative order", () => {
    const scenarios: {
      gates: AcceptanceGates;
      facts: CampaignFacts;
      verdict: AcceptanceVerdict;
    }[] = [
      {
        gates: {
          ...gatesWith("ready"),
          representativeData: "blocked",
          decisionAuthorityAndContract: "unknown",
        },
        facts: { ...cleanCampaign, openBlockingAnomalies: 1 },
        verdict: "STOP_PREPARATION",
      },
      {
        gates: {
          ...gatesWith("ready"),
          decisionAuthorityAndContract: "unknown",
          scopeExitAndSpecialistChecks: "partial",
        },
        facts: { ...cleanCampaign, openBlockingAnomalies: 1 },
        verdict: "REWRITE_CASE",
      },
      {
        gates: {
          ...gatesWith("ready"),
          scopeExitAndSpecialistChecks: "partial",
        },
        facts: { ...cleanCampaign, criticalCasesPlanned: 0 },
        verdict: "COMPLETE_CASE",
      },
      {
        gates: gatesWith("ready"),
        facts: { ...cleanCampaign, criticalCasesPlanned: 0 },
        verdict: "MEASURE_CAMPAIGN",
      },
      {
        gates: gatesWith("ready"),
        facts: {
          ...cleanCampaign,
          criticalCasesPassed: 6,
          pendingReservations: 1,
        },
        verdict: "FIX_BEFORE_DECISION",
      },
      {
        gates: gatesWith("ready"),
        facts: { ...cleanCampaign, pendingReservations: 1 },
        verdict: "REVIEW_RESIDUAL_RISK",
      },
      {
        gates: gatesWith("ready"),
        facts: cleanCampaign,
        verdict: "CANDIDATE_FOR_ACCEPTANCE",
      },
    ];

    for (const scenario of scenarios) {
      expect(
        assessAcceptanceReadiness(scenario.gates, scenario.facts).verdict,
      ).toBe(scenario.verdict);
    }
  });

  it("rejects every invalid runtime value in every campaign field", () => {
    for (const { id } of campaignFactFields) {
      for (const value of invalidRuntimeValues) {
        const facts = {
          ...cleanCampaign,
          [id]: value,
        } as unknown as CampaignFacts;

        const result = assessAcceptanceReadiness(gatesWith("ready"), facts);

        expect(result.verdict, `${id} accepted ${String(value)}`).toBe(
          "MEASURE_CAMPAIGN",
        );
        expect(result.concernedFactIds, `${id} not reported`).toContain(id);
      }
    }
  });

  it("requires at least one critical case but accepts verified zeroes elsewhere", () => {
    const noCriticalCase = assessAcceptanceReadiness(gatesWith("ready"), {
      ...cleanCampaign,
      criticalCasesPlanned: 0,
      criticalCasesPassed: 0,
    });

    expect(noCriticalCase.verdict).toBe("MEASURE_CAMPAIGN");
    expect(noCriticalCase.concernedFactIds).toEqual(["criticalCasesPlanned"]);

    const cleanResult = assessAcceptanceReadiness(
      gatesWith("ready"),
      cleanCampaign,
    );
    expect(cleanResult.verdict).toBe("CANDIDATE_FOR_ACCEPTANCE");
  });

  it("accepts safe extreme counters without overflowing the remainder", () => {
    const allCritical = assessAcceptanceReadiness(gatesWith("ready"), {
      ...cleanCampaign,
      criticalCasesPlanned: Number.MAX_SAFE_INTEGER,
      criticalCasesPassed: Number.MAX_SAFE_INTEGER,
    });
    expect(allCritical.verdict).toBe("CANDIDATE_FOR_ACCEPTANCE");
    expect(allCritical.remainingCriticalCases).toBe(0);

    const oneCriticalMissing = assessAcceptanceReadiness(gatesWith("ready"), {
      ...cleanCampaign,
      criticalCasesPlanned: Number.MAX_SAFE_INTEGER,
      criticalCasesPassed: Number.MAX_SAFE_INTEGER - 1,
    });
    expect(oneCriticalMissing.verdict).toBe("FIX_BEFORE_DECISION");
    expect(oneCriticalMissing.remainingCriticalCases).toBe(1);

    const extremeResidual = assessAcceptanceReadiness(gatesWith("ready"), {
      ...cleanCampaign,
      failedCases: Number.MAX_SAFE_INTEGER,
      pendingReservations: Number.MAX_SAFE_INTEGER,
    });
    expect(extremeResidual.verdict).toBe("REVIEW_RESIDUAL_RISK");
    expect(extremeResidual.concernedFactIds).toEqual([
      "failedCases",
      "pendingReservations",
    ]);
  });

  it("treats every omitted campaign fact as unmeasured", () => {
    for (const { id } of campaignFactFields) {
      const facts = { ...cleanCampaign };
      delete (facts as Partial<CampaignFacts>)[id];

      const result = assessAcceptanceReadiness(gatesWith("ready"), facts);

      expect(result.verdict).toBe("MEASURE_CAMPAIGN");
      expect(result.concernedFactIds).toEqual([id]);
    }
  });

  it("rejects a critical success count greater than the planned count", () => {
    const result = assessAcceptanceReadiness(gatesWith("ready"), {
      ...cleanCampaign,
      criticalCasesPlanned: 7,
      criticalCasesPassed: 8,
    });

    expect(result.verdict).toBe("MEASURE_CAMPAIGN");
    expect(result.concernedFactIds).toEqual([
      "criticalCasesPlanned",
      "criticalCasesPassed",
    ]);
  });

  it.each([
    0,
    -1,
    Number.NaN,
    Number.POSITIVE_INFINITY,
    "ready-ish",
    null,
    undefined,
  ])("normalizes an unsupported gate status (%s) to unknown", (status) => {
    const gates = {
      ...gatesWith("ready"),
      representativeData: status,
    } as unknown as AcceptanceGates;

    const result = assessAcceptanceReadiness(gates, cleanCampaign);

    expect(result.verdict).toBe("REWRITE_CASE");
    expect(result.concernedGateIds).toEqual(["representativeData"]);
  });

  it.each([null, undefined, {}, [], "", 0, false])(
    "treats an unusable gate payload (%s) as unknown",
    (gates) => {
      const result = assessAcceptanceReadiness(
        gates as unknown as AcceptanceGates,
        cleanCampaign,
      );

      expect(result.verdict).toBe("REWRITE_CASE");
      expect(result.concernedGateIds).toEqual(acceptanceGateIds);
    },
  );

  it.each([null, undefined, {}, [], "", 0, false])(
    "treats an unusable campaign payload (%s) as unmeasured",
    (facts) => {
      const result = assessAcceptanceReadiness(
        gatesWith("ready"),
        facts as unknown as CampaignFacts,
      );

      expect(result.verdict).toBe("MEASURE_CAMPAIGN");
      expect(result.concernedFactIds).toEqual(
        campaignFactFields.map(({ id }) => id),
      );
    },
  );

  it("keeps case quality above campaign measurement", () => {
    const gates = gatesWith("ready");
    gates.observableExpectedResult = "partial";

    const result = assessAcceptanceReadiness(gates, createEmptyCampaignFacts());

    expect(result.verdict).toBe("COMPLETE_CASE");
    expect(result.concernedGateIds).toEqual(["observableExpectedResult"]);
  });

  it("requires every critical case to be proved", () => {
    const result = assessAcceptanceReadiness(gatesWith("ready"), {
      ...cleanCampaign,
      criticalCasesPassed: 6,
    });

    expect(result.verdict).toBe("FIX_BEFORE_DECISION");
    expect(result.concernedFactIds).toEqual(["criticalCasesPassed"]);
    expect(result.remainingCriticalCases).toBe(1);
  });

  it("keeps an open blocking anomaly above residual-risk counters", () => {
    const result = assessAcceptanceReadiness(gatesWith("ready"), {
      ...cleanCampaign,
      openBlockingAnomalies: 1,
      openMajorAnomalies: 3,
      notRunCases: 2,
    });

    expect(result.verdict).toBe("FIX_BEFORE_DECISION");
    expect(result.concernedFactIds).toEqual(["openBlockingAnomalies"]);
  });

  it.each([
    "failedCases",
    "openMajorAnomalies",
    "openMinorAnomalies",
    "pendingReservations",
    "blockedCases",
    "notRunCases",
    "casesWithoutEvidence",
  ] as CampaignFactId[])(
    "exposes residual risk when %s is non-zero",
    (factId) => {
      const result = assessAcceptanceReadiness(gatesWith("ready"), {
        ...cleanCampaign,
        [factId]: 1,
      });

      expect(result.verdict).toBe("REVIEW_RESIDUAL_RISK");
      expect(result.concernedFactIds).toEqual([factId]);
      expect(result.remainingCriticalCases).toBe(0);
    },
  );

  it("keeps the clean result conditional and human-decided", () => {
    const result = assessAcceptanceReadiness(gatesWith("ready"), cleanCampaign);

    expect(result.verdict).toBe("CANDIDATE_FOR_ACCEPTANCE");
    expect(result.title).toMatch(/candidat/i);
    expect(result.explanation).toContain("ne garantit pas");
    expect(result.explanation).toContain("n’accepte pas");
    expect(result.nextAction).toMatch(/La personne nommée prononce/i);
    expect(result.remainingCriticalCases).toBe(0);
  });
});
