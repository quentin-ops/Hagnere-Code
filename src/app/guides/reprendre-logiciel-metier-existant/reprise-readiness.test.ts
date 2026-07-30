import { describe, expect, it } from "vitest";
import {
  assessRepriseReadiness,
  createEmptyRepriseAnswers,
  repriseGateIds,
  type RepriseAnswers,
  type RepriseGateStatus,
} from "./reprise-readiness";

const allStatuses: RepriseGateStatus[] = [
  "unknown",
  "partial",
  "proved",
  "blocked",
];
const decisionPrecedence: RepriseGateStatus[] = [
  "blocked",
  "unknown",
  "partial",
];

function answersWith(status: RepriseGateStatus): RepriseAnswers {
  return Object.fromEntries(
    repriseGateIds.map((gateId) => [gateId, status]),
  ) as RepriseAnswers;
}

describe("assessRepriseReadiness", () => {
  it("reports a complete set of unknown answers", () => {
    const result = assessRepriseReadiness(createEmptyRepriseAnswers());

    expect(result.verdict).toBe("REPORTER");
    expect(result.concernedGateIds).toEqual(repriseGateIds);
  });

  it("allows only a framed review when every gate is proved", () => {
    const result = assessRepriseReadiness(answersWith("proved"));

    expect(result.verdict).toBe("BASCULE_ENCADREE");
    expect(result.concernedGateIds).toEqual([]);
    expect(result.explanation).toContain("ne remplace");
  });

  it("limits the mission when at least one proof is partial", () => {
    const answers = answersWith("proved");
    answers.restore = "partial";

    const result = assessRepriseReadiness(answers);

    expect(result.verdict).toBe("REPRISE_LIMITEE");
    expect(result.concernedGateIds).toEqual(["restore"]);
  });

  it("reports the decision when an answer is missing", () => {
    const answers = answersWith("proved");
    answers.deploy = "unknown";

    const result = assessRepriseReadiness(answers);

    expect(result.verdict).toBe("REPORTER");
    expect(result.concernedGateIds).toEqual(["deploy"]);
  });

  it("gives a blocked gate priority over unknown and partial gates", () => {
    const answers = answersWith("proved");
    answers.observe = "partial";
    answers.build = "unknown";
    answers.exit = "blocked";

    const result = assessRepriseReadiness(answers);

    expect(result.verdict).toBe("STOP");
    expect(result.concernedGateIds).toEqual(["exit"]);
  });

  it("treats an omitted key as unknown", () => {
    const result = assessRepriseReadiness({
      observe: "proved",
      build: "proved",
    });

    expect(result.verdict).toBe("REPORTER");
    expect(result.concernedGateIds).toEqual(["deploy", "restore", "exit"]);
  });

  it("recomputes the precedence and concerned gates for all 1,024 combinations", () => {
    const combinationCount = allStatuses.length ** repriseGateIds.length;

    for (let combination = 0; combination < combinationCount; combination++) {
      let cursor = combination;
      const answers = {} as RepriseAnswers;

      for (const gateId of repriseGateIds) {
        answers[gateId] = allStatuses[cursor % allStatuses.length];
        cursor = Math.floor(cursor / allStatuses.length);
      }

      const expectedStatus = decisionPrecedence.find((status) =>
        repriseGateIds.some((gateId) => answers[gateId] === status),
      );
      const expectedVerdict =
        expectedStatus === "blocked"
          ? "STOP"
          : expectedStatus === "unknown"
            ? "REPORTER"
            : expectedStatus === "partial"
              ? "REPRISE_LIMITEE"
              : "BASCULE_ENCADREE";
      const expectedGateIds = expectedStatus
        ? repriseGateIds.filter((gateId) => answers[gateId] === expectedStatus)
        : [];

      const result = assessRepriseReadiness(answers);

      expect(result.verdict).toBe(expectedVerdict);
      expect(result.concernedGateIds).toEqual(expectedGateIds);
    }
  });

  it.each([null, undefined])(
    "treats an empty runtime payload (%s) as entirely unknown",
    (answers) => {
      const result = assessRepriseReadiness(answers);

      expect(result.verdict).toBe("REPORTER");
      expect(result.concernedGateIds).toEqual(repriseGateIds);
    },
  );

  it.each([0, -1, 0.5, Number.NaN, Number.POSITIVE_INFINITY, "yes", null])(
    "never turns an unsupported runtime value (%s) into a green verdict",
    (invalidStatus) => {
      const answers = {
        ...answersWith("proved"),
        restore: invalidStatus,
      } as unknown as RepriseAnswers;

      const result = assessRepriseReadiness(answers);

      expect(result.verdict).toBe("REPORTER");
      expect(result.concernedGateIds).toEqual(["restore"]);
    },
  );
});
