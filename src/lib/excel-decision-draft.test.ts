import { describe, expect, it } from "vitest";
import {
  EXCEL_DECISION_DRAFT_MAX_BYTES,
  EXCEL_DIAGNOSTIC_VERSION,
  EXCEL_SCENARIOS,
  createExcelCandidateDossiers,
  createExcelDecisionDraft,
  parseExcelDecisionDraft,
  serializeExcelDecisionDraft,
} from "./excel-decision-diagnostic";

function draft() {
  const dossiers = createExcelCandidateDossiers(EXCEL_SCENARIOS.central);
  dossiers.keep_excel.criterion.reference = "PREUVE-EXCEL-01";
  return createExcelDecisionDraft(
    {
      scenarioId: "central",
      activePathway: "keep_excel",
      readiness: {
        processStable: true,
        dataReady: false,
        ownerAndDeputyNamed: false,
        benefitMeasured: false,
        reference: "PREP-01",
        evidenceDate: "",
      },
      dossiers,
      decisionDate: "2026-07-28",
    },
    "2026-07-28T12:00:00.000Z",
  );
}

describe("versioned Excel decision drafts", () => {
  it("round-trips an incomplete dossier without converting unset numbers to zero", () => {
    const source = draft();
    expect(Number.isNaN(source.dossiers.keep_excel.costBasis.xMin)).toBe(false);
    expect(
      Number.isNaN(source.dossiers.named_platform.costInputs.perUserMonthly),
    ).toBe(false);
    source.dossiers.keep_excel.costInputs.initialAndMigration = Number.NaN;

    const parsed = parseExcelDecisionDraft(serializeExcelDecisionDraft(source));

    expect(parsed?.version).toBe(EXCEL_DIAGNOSTIC_VERSION);
    expect(parsed?.savedAt).toBe("2026-07-28T12:00:00.000Z");
    expect(parsed?.dossiers.keep_excel.criterion.reference).toBe(
      "PREUVE-EXCEL-01",
    );
    expect(
      Number.isNaN(
        parsed?.dossiers.keep_excel.costInputs.initialAndMigration ?? 0,
      ),
    ).toBe(true);
  });

  it("rejects malformed, oversized and stale-version files", () => {
    expect(parseExcelDecisionDraft("{")).toBeNull();
    expect(
      parseExcelDecisionDraft(" ".repeat(EXCEL_DECISION_DRAFT_MAX_BYTES + 1)),
    ).toBeNull();
    expect(
      parseExcelDecisionDraft(
        "é".repeat(Math.floor(EXCEL_DECISION_DRAFT_MAX_BYTES / 2) + 1),
      ),
    ).toBeNull();

    const stale = { ...draft(), version: "excel-decision-r1" };
    expect(parseExcelDecisionDraft(JSON.stringify(stale))).toBeNull();
  });

  it("rejects missing pathways and scenario-specific applicability drift", () => {
    const missing = draft();
    delete (missing.dossiers as Partial<typeof missing.dossiers>)
      .custom_development;
    expect(
      parseExcelDecisionDraft(serializeExcelDecisionDraft(missing)),
    ).toBeNull();

    const drifted = draft();
    drifted.dossiers.named_platform.conditionalOperations[6] = false;
    expect(
      parseExcelDecisionDraft(serializeExcelDecisionDraft(drifted)),
    ).toBeNull();
  });
});
