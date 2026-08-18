import { describe, expect, it } from "vitest";
import {
  assessCutoverReadiness,
  createEmptyCutoverAnswers,
  createEmptyCutoverDurations,
  cutoverDurationFields,
  cutoverGateIds,
  type CutoverAnswers,
  type CutoverDurations,
  type CutoverGateStatus,
} from "./cutover-readiness";

const allStatuses: CutoverGateStatus[] = [
  "unknown",
  "partial",
  "proved",
  "blocked",
];

function answersWith(status: CutoverGateStatus): CutoverAnswers {
  return Object.fromEntries(
    cutoverGateIds.map((gateId) => [gateId, status]),
  ) as CutoverAnswers;
}

const measuredDurations: CutoverDurations = {
  windowMinutes: 240,
  copyAndActivationMinutes: 61,
  verificationMinutes: 52,
  fallbackMinutes: 54,
  decisionMinutes: 20,
};

const invalidDurationValues: unknown[] = [
  0,
  -0,
  -0.25,
  Number.NaN,
  Number.POSITIVE_INFINITY,
  Number.NEGATIVE_INFINITY,
  "12",
  "",
  true,
  false,
  [],
  {},
  null,
  undefined,
];

describe("assessCutoverReadiness", () => {
  it("creates fresh, fully unknown and unmeasured payloads", () => {
    const firstAnswers = createEmptyCutoverAnswers();
    const secondAnswers = createEmptyCutoverAnswers();
    const firstDurations = createEmptyCutoverDurations();
    const secondDurations = createEmptyCutoverDurations();

    expect(firstAnswers).not.toBe(secondAnswers);
    expect(firstDurations).not.toBe(secondDurations);
    expect(Object.keys(firstAnswers)).toEqual(cutoverGateIds);
    expect(Object.values(firstAnswers)).toEqual(
      cutoverGateIds.map(() => "unknown"),
    );
    expect(Object.keys(firstDurations)).toEqual(
      cutoverDurationFields.map(({ id }) => id),
    );
    expect(Object.values(firstDurations)).toEqual(
      cutoverDurationFields.map(() => null),
    );
  });

  it("reports all unknown proofs and all unmeasured durations by default", () => {
    const result = assessCutoverReadiness(
      createEmptyCutoverAnswers(),
      createEmptyCutoverDurations(),
    );

    expect(result.verdict).toBe("REPORTER");
    expect(result.concernedGateIds).toEqual(cutoverGateIds);
    expect(result.missingDurationIds).toEqual(
      cutoverDurationFields.map(({ id }) => id),
    );
    expect(result.budget).toBeNull();
  });

  it("keeps a blocked proof above unknowns, partials and the time budget", () => {
    const answers = answersWith("proved");
    answers.businessContinuity = "partial";
    answers.writeAuthority = "unknown";
    answers.restoredFallback = "blocked";

    const result = assessCutoverReadiness(answers, measuredDurations);

    expect(result.verdict).toBe("STOP");
    expect(result.concernedGateIds).toEqual(["restoredFallback"]);
  });

  it("recomputes proof precedence for all 1,024 combinations", () => {
    const combinationCount = allStatuses.length ** cutoverGateIds.length;

    for (let combination = 0; combination < combinationCount; combination++) {
      let cursor = combination;
      const answers = {} as CutoverAnswers;

      for (const gateId of cutoverGateIds) {
        answers[gateId] = allStatuses[cursor % allStatuses.length];
        cursor = Math.floor(cursor / allStatuses.length);
      }

      const expectedStatus = (["blocked", "unknown", "partial"] as const).find(
        (status) => cutoverGateIds.some((gateId) => answers[gateId] === status),
      );
      const expectedVerdict =
        expectedStatus === "blocked"
          ? "STOP"
          : expectedStatus === "unknown"
            ? "REPORTER"
            : expectedStatus === "partial"
              ? "REDUIRE_PAR_LOTS"
              : "BASCULE_ENCADREE";
      const expectedGateIds = expectedStatus
        ? cutoverGateIds.filter((gateId) => answers[gateId] === expectedStatus)
        : [];

      const result = assessCutoverReadiness(answers, measuredDurations);

      expect(result.verdict).toBe(expectedVerdict);
      expect(result.concernedGateIds).toEqual(expectedGateIds);
    }
  }, 15_000);

  it("gets the independent verdict distribution across all 1,024 proof combinations", () => {
    const verdictCounts = {
      STOP: 0,
      REPORTER: 0,
      REDUIRE_PAR_LOTS: 0,
      BASCULE_ENCADREE: 0,
    };

    for (
      let combination = 0;
      combination < allStatuses.length ** cutoverGateIds.length;
      combination++
    ) {
      let cursor = combination;
      const answers = {} as CutoverAnswers;

      for (const gateId of cutoverGateIds) {
        answers[gateId] = allStatuses[cursor % allStatuses.length];
        cursor = Math.floor(cursor / allStatuses.length);
      }

      verdictCounts[
        assessCutoverReadiness(answers, measuredDurations).verdict
      ]++;
    }

    expect(verdictCounts).toEqual({
      STOP: 781,
      REPORTER: 211,
      REDUIRE_PAR_LOTS: 31,
      BASCULE_ENCADREE: 1,
    });
  });

  it("uses the fictional full-scope rehearsal without hiding its deficit", () => {
    const result = assessCutoverReadiness(answersWith("proved"), {
      windowMinutes: 240,
      copyAndActivationMinutes: 92,
      verificationMinutes: 68,
      fallbackMinutes: 62,
      decisionMinutes: 25,
    });

    expect(result.verdict).toBe("REDUIRE_PAR_LOTS");
    expect(result.budget).toEqual({
      windowMinutes: 240,
      requiredMinutes: 247,
      marginMinutes: -7,
      marginRatePercent: (-7 / 240) * 100,
    });
  });

  it("reproduces the fictional reduced lot and its 53-minute margin", () => {
    const result = assessCutoverReadiness(
      answersWith("proved"),
      measuredDurations,
    );

    expect(result.verdict).toBe("BASCULE_ENCADREE");
    expect(result.budget?.requiredMinutes).toBe(187);
    expect(result.budget?.marginMinutes).toBe(53);
    expect(result.budget?.marginRatePercent).toBeCloseTo(22.0833, 4);
    expect(result.explanation).toContain("ne garantit");
  });

  it("accepts an exactly consumed window but leaves the human review explicit", () => {
    const result = assessCutoverReadiness(answersWith("proved"), {
      ...measuredDurations,
      windowMinutes: 187,
    });

    expect(result.verdict).toBe("BASCULE_ENCADREE");
    expect(result.budget?.marginMinutes).toBe(0);
    expect(result.explanation).toContain("revue humaine");
  });

  it("keeps decimal measurements exact before display rounding", () => {
    const result = assessCutoverReadiness(answersWith("proved"), {
      windowMinutes: 10.5,
      copyAndActivationMinutes: 2.25,
      verificationMinutes: 1.75,
      fallbackMinutes: 3.1,
      decisionMinutes: 0.9,
    });

    expect(result.verdict).toBe("BASCULE_ENCADREE");
    expect(result.budget?.requiredMinutes).toBeCloseTo(8);
    expect(result.budget?.marginMinutes).toBeCloseTo(2.5);
  });

  it("rejects every invalid runtime value in every duration field", () => {
    for (const { id } of cutoverDurationFields) {
      for (const value of invalidDurationValues) {
        const durations = {
          ...measuredDurations,
          [id]: value,
        } as unknown as CutoverDurations;

        const result = assessCutoverReadiness(answersWith("proved"), durations);

        expect(result.verdict, `${id} accepted ${String(value)}`).toBe(
          "REPORTER",
        );
        expect(result.missingDurationIds).toEqual([id]);
        expect(result.budget).toBeNull();
      }
    }
  });

  it.each([
    {
      label: "an overflowing sum",
      durations: {
        windowMinutes: Number.MAX_VALUE,
        copyAndActivationMinutes: Number.MAX_VALUE,
        verificationMinutes: Number.MAX_VALUE,
        fallbackMinutes: Number.MAX_VALUE,
        decisionMinutes: Number.MAX_VALUE,
      },
    },
    {
      label: "a component lost to floating-point precision",
      durations: {
        windowMinutes: Number.MAX_VALUE,
        copyAndActivationMinutes: Number.MAX_VALUE,
        verificationMinutes: 1,
        fallbackMinutes: 1,
        decisionMinutes: 1,
      },
    },
    {
      label: "a non-finite margin rate",
      durations: {
        windowMinutes: Number.MIN_VALUE,
        copyAndActivationMinutes: 1,
        verificationMinutes: 1,
        fallbackMinutes: 1,
        decisionMinutes: 1,
      },
    },
  ])("reports $label instead of exposing Infinity", ({ durations }) => {
    const result = assessCutoverReadiness(
      answersWith("proved"),
      durations as CutoverDurations,
    );

    expect(result.verdict).toBe("REPORTER");
    expect(result.budget).toBeNull();
    expect(result.missingDurationIds.length).toBeGreaterThan(0);
  });

  it("treats every omitted duration field as unmeasured", () => {
    for (const { id } of cutoverDurationFields) {
      const durations = { ...measuredDurations };
      delete (durations as Partial<CutoverDurations>)[id];

      const result = assessCutoverReadiness(answersWith("proved"), durations);

      expect(result.verdict).toBe("REPORTER");
      expect(result.missingDurationIds).toEqual([id]);
      expect(result.budget).toBeNull();
    }
  });

  it.each([
    0,
    -1,
    Number.NaN,
    Number.POSITIVE_INFINITY,
    "yes",
    null,
    undefined,
  ])(
    "normalizes an unsupported proof status (%s) to unknown",
    (invalidStatus) => {
      const answers = {
        ...answersWith("proved"),
        dataReconciliation: invalidStatus,
      } as unknown as CutoverAnswers;

      const result = assessCutoverReadiness(answers, measuredDurations);

      expect(result.verdict).toBe("REPORTER");
      expect(result.concernedGateIds).toEqual(["dataReconciliation"]);
    },
  );

  it.each([null, undefined, {}, [], "", 0, false])(
    "treats an unusable runtime proof payload (%s) as unknown",
    (answers) => {
      const result = assessCutoverReadiness(
        answers as unknown as CutoverAnswers,
        measuredDurations,
      );

      expect(result.verdict).toBe("REPORTER");
      expect(result.concernedGateIds).toEqual(cutoverGateIds);
    },
  );

  it.each([null, undefined, {}, [], "", 0, false])(
    "treats an unusable runtime duration payload (%s) as unmeasured",
    (durations) => {
      const result = assessCutoverReadiness(
        answersWith("proved"),
        durations as unknown as CutoverDurations,
      );

      expect(result.verdict).toBe("REPORTER");
      expect(result.missingDurationIds).toEqual(
        cutoverDurationFields.map(({ id }) => id),
      );
    },
  );

  it("does not let an incomplete proof become green even with no duration", () => {
    const answers = answersWith("proved");
    answers.decisionTeam = "partial";

    const result = assessCutoverReadiness(
      answers,
      createEmptyCutoverDurations(),
    );

    expect(result.verdict).toBe("REDUIRE_PAR_LOTS");
    expect(result.concernedGateIds).toEqual(["decisionTeam"]);
    expect(result.budget).toBeNull();
  });

  it("preserves blocked-proof precedence while exposing missing durations", () => {
    const answers = answersWith("proved");
    answers.restoredFallback = "blocked";

    const result = assessCutoverReadiness(
      answers,
      createEmptyCutoverDurations(),
    );

    expect(result.verdict).toBe("STOP");
    expect(result.concernedGateIds).toEqual(["restoredFallback"]);
    expect(result.missingDurationIds).toEqual(
      cutoverDurationFields.map(({ id }) => id),
    );
    expect(result.budget).toBeNull();
    expect(result.explanation).toContain("ne compensent pas");
  });

  it.each([
    ["positive", 188, "BASCULE_ENCADREE", 1],
    ["zero", 187, "BASCULE_ENCADREE", 0],
    ["negative", 186.5, "REDUIRE_PAR_LOTS", -0.5],
  ] as const)(
    "handles a %s budget margin without an implicit threshold",
    (_label, windowMinutes, expectedVerdict, expectedMargin) => {
      const result = assessCutoverReadiness(answersWith("proved"), {
        ...measuredDurations,
        windowMinutes,
      });

      expect(result.verdict).toBe(expectedVerdict);
      expect(result.budget?.requiredMinutes).toBe(187);
      expect(result.budget?.marginMinutes).toBe(expectedMargin);
    },
  );

  it("keeps the green result explicitly conditional and human-decided", () => {
    const result = assessCutoverReadiness(
      answersWith("proved"),
      measuredDurations,
    );

    expect(result.title).toMatch(/candidat/i);
    expect(result.explanation).toContain("revue humaine");
    expect(result.explanation).toContain("ne garantit");
    expect(result.nextAction).toMatch(/prononce ensuite GO ou STOP/i);
  });
});
