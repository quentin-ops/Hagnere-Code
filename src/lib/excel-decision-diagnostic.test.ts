import { describe, expect, it } from "vitest";
import {
  EXCEL_COST_FIELDS,
  EXCEL_CURRENCIES,
  EXCEL_DIAGNOSTIC_VERSION,
  EXCEL_MAX_SAFE_COST_AMOUNT,
  EXCEL_OPERATION_IDS,
  EXCEL_PATHWAY_IDS,
  EXCEL_SCENARIOS,
  EXCEL_SOURCE_VERIFIED_ON,
  EXCEL_TCO_ASSUMPTIONS,
  buildExcelDecisionReport,
  calculateKnownExcelTco,
  changeExcelPlatformPlan,
  changeExcelPlatformProduct,
  changeExcelPlatformType,
  createExcelCandidateDossier,
  createExcelCandidateDossiers,
  evaluateExcelCandidate as evaluateExcelCandidateAtDate,
  evaluateExcelComparison as evaluateExcelComparisonAtDate,
  evaluateExcelDatasetBoundary,
  getExcelCostUnit,
  getExcelScenarioTcos,
  isExcelOperationApplicable,
  isValidExcelDecisionDate,
  isValidExcelEvidenceDate as isExcelEvidenceDateAtDecision,
  type ExcelCandidateDossier,
  type ExcelComparisonInput,
  type ExcelComparisonResult,
  type ExcelPathwayId,
  type ExcelSharedReadiness,
} from "./excel-decision-diagnostic";

const DECISION_DATE = "2026-07-25";
const CURRENT_DATE = "2026-07-25";

const READY: ExcelSharedReadiness = {
  processStable: true,
  dataReady: true,
  ownerAndDeputyNamed: true,
  benefitMeasured: true,
  reference: "Fiche commune PREP-2026-07-25",
  evidenceDate: "2026-07-25",
};

function evaluateExcelCandidate(
  dossier: ExcelCandidateDossier,
  readiness: ExcelSharedReadiness,
  decisionDate = DECISION_DATE,
  currentDate = CURRENT_DATE,
) {
  return evaluateExcelCandidateAtDate(
    dossier,
    readiness,
    decisionDate,
    currentDate,
  );
}

type ComparisonWithoutDates = Omit<
  ExcelComparisonInput,
  "decisionDate" | "currentDate"
> &
  Partial<Pick<ExcelComparisonInput, "decisionDate" | "currentDate">>;

function withDecisionDates(
  input: ComparisonWithoutDates,
): ExcelComparisonInput {
  return {
    ...input,
    decisionDate: input.decisionDate ?? DECISION_DATE,
    currentDate: input.currentDate ?? CURRENT_DATE,
  };
}

function evaluateExcelComparison(input: ComparisonWithoutDates) {
  return evaluateExcelComparisonAtDate(withDecisionDates(input));
}

function isValidExcelEvidenceDate(
  value: unknown,
  decisionDate = DECISION_DATE,
) {
  return isExcelEvidenceDateAtDecision(value, decisionDate);
}

function buildUnsafeReport(input: unknown, result?: unknown): string {
  return buildExcelDecisionReport(
    input as ExcelComparisonInput,
    result as ExcelComparisonResult,
  );
}

function expectCorrectionReport(text: string): void {
  expect(text).toContain("RAPPORT DE CORRECTION");
  expect(text).toContain("Décision : reporter la décision");
  expect(text).toContain("Voie retenue : aucune");
  expect(text).toContain("Aucun classement n’a été produit");
  expect(text).not.toContain("undefined");
  expect(text).not.toContain("NaN");
  expect(text).not.toMatch(/\blaunch\b/);
}

function documentedDossier(
  pathway: ExcelPathwayId,
  knownAmount: number,
  scenario = EXCEL_SCENARIOS.central,
): ExcelCandidateDossier {
  const dossier = createExcelCandidateDossier(scenario, pathway);

  for (const id of EXCEL_OPERATION_IDS) {
    const applicable = isExcelOperationApplicable(
      id,
      dossier.conditionalOperations,
    );
    dossier.operations[id] = {
      status: applicable ? "pass" : "not_applicable",
      evidenceLevel: "documented",
      reference: `Procès-verbal REC-${pathway}-${id}`,
      evidenceDate: "2026-07-24",
      verifiedBy: "",
      notApplicableReason: applicable
        ? ""
        : "La coédition simultanée ne fait pas partie du scénario validé",
      notApplicableDate: applicable ? "" : "2026-07-24",
    };
  }

  dossier.criterion = {
    met: true,
    evidenceLevel: "verified",
    reference: `Décision de porte GATE-${pathway}`,
    evidenceDate: "2026-07-25",
    verifiedBy: "Marie Dupont, contrôle interne",
  };
  dossier.standardCoveragePercent = 90;
  dossier.costInputs = {
    initialAndMigration: knownAmount,
    fixedMonthly: 0,
    perUserMonthly: 0,
    licensedUsers:
      pathway === "named_platform"
        ? dossier.platform.activeUsers + dossier.platform.externalUsers
        : scenario.users,
    adminHoursMonthly: 0,
    hourlyCost: 45,
    annualMaintenance: 0,
    formationIntegrationExit: 0,
    residualHoursWeekly: 0,
    workingWeeksPerYear: 48,
  };
  dossier.costBasis = {
    confirmed: true,
    source: `Devis ou mesure COST-${pathway}`,
    sourceDate: "2026-07-25",
    currency: "EUR",
    horizonMonths: 48,
    coverage:
      "Tous les postes visibles, licences, temps interne, sortie et exclusions",
    owner: "Responsable finance",
    exclusions: "Fiscalité et inflation hors estimation",
    xMin: 10,
    xMax: 20,
    iMin: 5,
    iMax: 10,
    zeroXConfirmed: false,
    zeroXJustification: "",
    zeroIConfirmed: false,
    zeroIJustification: "",
  };
  return dossier;
}

function dossiersWithWinner(
  winner: ExcelPathwayId,
  scenario = EXCEL_SCENARIOS.central,
): Record<ExcelPathwayId, ExcelCandidateDossier> {
  return Object.fromEntries(
    EXCEL_PATHWAY_IDS.map((pathway, index) => [
      pathway,
      documentedDossier(
        pathway,
        pathway === winner ? 1_000 : 10_000 + index * 1_000,
        scenario,
      ),
    ]),
  ) as Record<ExcelPathwayId, ExcelCandidateDossier>;
}

function validReportInput(
  winner: ExcelPathwayId = "named_platform",
): ExcelComparisonInput {
  return withDecisionDates({
    scenario: EXCEL_SCENARIOS.central,
    readiness: READY,
    dossiers: dossiersWithWinner(winner),
  });
}

describe("five autonomous candidate dossiers", () => {
  it("creates five distinct dossiers without state leakage", () => {
    const dossiers = createExcelCandidateDossiers(EXCEL_SCENARIOS.simple);

    expect(Object.keys(dossiers)).toHaveLength(5);
    expect(dossiers.keep_excel).not.toBe(dossiers.industrialize_excel);
    expect(dossiers.keep_excel.operations[1]).not.toBe(
      dossiers.industrialize_excel.operations[1],
    );

    dossiers.keep_excel.operations[1].status = "pass";
    dossiers.keep_excel.costBasis.owner = "Alice";

    expect(dossiers.industrialize_excel.operations[1].status).toBe("unknown");
    expect(dossiers.industrialize_excel.costBasis.owner).toBe("");
  });

  it("keeps operation 4 applicable in the simple scenario and explains operation 6", () => {
    const dossier = createExcelCandidateDossier(
      EXCEL_SCENARIOS.simple,
      "keep_excel",
    );

    expect(dossier.conditionalOperations).toEqual({
      4: true,
      5: true,
      6: false,
    });
    expect(EXCEL_SCENARIOS.simple.roles).toContain("administrateur");
    expect(EXCEL_SCENARIOS.central.roles).toContain("approbateur");
  });

  it("does not let a changed platform keep another product's price", () => {
    const powerApps = createExcelCandidateDossier(
      EXCEL_SCENARIOS.central,
      "named_platform",
    );
    expect(powerApps.costInputs.perUserMonthly).toBe(17.3);

    const appSheet = changeExcelPlatformType(
      powerApps,
      "appsheet",
      EXCEL_SCENARIOS.central,
    );
    const airtable = changeExcelPlatformType(
      powerApps,
      "airtable",
      EXCEL_SCENARIOS.central,
    );

    expect(appSheet.platform.product).toBe("Google AppSheet");
    expect(airtable.platform.product).toBe("Airtable");
    expect(appSheet.costInputs.perUserMonthly).not.toBe(17.3);
    expect(airtable.costInputs.perUserMonthly).not.toBe(17.3);
    expect(Number.isNaN(appSheet.costInputs.perUserMonthly)).toBe(true);
    expect(Number.isNaN(airtable.costInputs.perUserMonthly)).toBe(true);
    expect(appSheet.platform.plan).toBe("");
    expect(airtable.costBasis.source).toBe("");
  });

  it("invalidates every product-specific cost when an 'other' product changes", () => {
    const powerApps = createExcelCandidateDossier(
      EXCEL_SCENARIOS.central,
      "named_platform",
    );
    const changed = changeExcelPlatformProduct(powerApps, "Produit X");

    expect(changed.platform.product).toBe("Produit X");
    expect(changed.platform.plan).toBe("");
    expect(changed.costBasis.source).toBe("");
    expect(Number.isNaN(changed.costInputs.perUserMonthly)).toBe(true);
    expect(Number.isNaN(changed.costInputs.initialAndMigration)).toBe(true);
    expect(changed.costBasis.confirmed).toBe(false);
  });

  it("invalidates costs and confirmation when the plan changes", () => {
    const dossier = documentedDossier("named_platform", 1_000);
    const changed = changeExcelPlatformPlan(dossier, "Premium révisé");

    expect(changed.platform.plan).toBe("Premium révisé");
    expect(changed.costBasis.confirmed).toBe(false);
    expect(changed.costBasis.source).toBe("");
    expect(Number.isNaN(changed.costInputs.initialAndMigration)).toBe(true);
  });

  it("requires the platform population to include active and external users", () => {
    const dossier = documentedDossier("named_platform", 1_000);
    dossier.platform.activeUsers = 12;
    dossier.platform.externalUsers = 3;
    dossier.costInputs.licensedUsers = 12;

    expect(evaluateExcelCandidate(dossier, READY).verdict).toBe("report");

    dossier.costInputs.licensedUsers = 15;
    expect(evaluateExcelCandidate(dossier, READY).verdict).toBe("eligible");
  });
});

describe("evidence and applicability gates", () => {
  it("never launches a passing operation without a dated reference", () => {
    const dossier = documentedDossier("industrialize_excel", 1_000);
    dossier.operations[3].reference = "";

    const result = evaluateExcelCandidate(dossier, READY);

    expect(result.verdict).toBe("report");
    expect(result.missingEvidence.join(" ")).toContain("opération 3");
  });

  it("distinguishes declared, documented and verified evidence", () => {
    const declared = documentedDossier("keep_excel", 1_000);
    declared.operations[1].evidenceLevel = "declared";
    expect(evaluateExcelCandidate(declared, READY).verdict).toBe("report");

    declared.operations[1].evidenceLevel = "documented";
    expect(evaluateExcelCandidate(declared, READY).verdict).toBe("eligible");

    declared.operations[1].evidenceLevel = "verified";
    expect(evaluateExcelCandidate(declared, READY).verdict).toBe("report");

    declared.operations[1].verifiedBy = "x";
    expect(evaluateExcelCandidate(declared, READY).verdict).toBe("report");

    declared.operations[1].verifiedBy = "Alice Dupont";
    expect(evaluateExcelCandidate(declared, READY).verdict).toBe("report");

    declared.operations[1].verifiedBy = "Luc Martin, contrôle interne";
    expect(evaluateExcelCandidate(declared, READY).verdict).toBe("eligible");
  });

  it("requires an identified verifier for a verified pathway criterion", () => {
    const dossier = documentedDossier("custom_development", 1_000);
    dossier.criterion.verifiedBy = "";
    expect(evaluateExcelCandidate(dossier, READY).verdict).toBe("report");

    dossier.criterion.verifiedBy = "Sonia Petit";
    expect(evaluateExcelCandidate(dossier, READY).verdict).toBe("report");

    dossier.criterion.verifiedBy = "Sonia Petit, responsable métier";
    expect(evaluateExcelCandidate(dossier, READY).verdict).toBe("eligible");
  });

  it("requires a dated reason for every non-applicable operation", () => {
    const dossier = documentedDossier(
      "keep_excel",
      1_000,
      EXCEL_SCENARIOS.simple,
    );
    dossier.operations[6].notApplicableReason = "";

    expect(evaluateExcelCandidate(dossier, READY).verdict).toBe("report");

    dossier.operations[6].notApplicableReason =
      "Aucune coédition simultanée dans le scénario signé";
    dossier.operations[6].notApplicableDate = "";
    expect(evaluateExcelCandidate(dossier, READY).verdict).toBe("report");
  });

  it("cannot eliminate a path with an undocumented failure or criterion", () => {
    const failed = documentedDossier("standard_software", 1_000);
    failed.operations[2] = {
      ...failed.operations[2],
      status: "fail",
      reference: "",
      evidenceDate: "",
    };
    expect(evaluateExcelCandidate(failed, READY).verdict).toBe("report");

    const rejected = documentedDossier("custom_development", 1_000);
    rejected.criterion.met = false;
    rejected.criterion.reference = "";
    expect(evaluateExcelCandidate(rejected, READY).verdict).toBe("report");
  });

  it("stops on a documented failure of operation 1", () => {
    const dossier = documentedDossier("named_platform", 1_000);
    dossier.operations[1].status = "fail";

    const result = evaluateExcelCandidate(dossier, READY);

    expect(result.verdict).toBe("stop");
    expect(result.failedOperations).toContain(1);
  });

  it("requires a documented pathway-specific criterion", () => {
    const dossier = documentedDossier("custom_development", 1_000);
    dossier.criterion.reference = "";

    expect(evaluateExcelCandidate(dossier, READY).verdict).toBe("report");
  });
});

describe("structured 48-month cost bases", () => {
  it("uses the selected ISO currency only for monetary fields", () => {
    expect(EXCEL_CURRENCIES).toEqual([
      "EUR",
      "USD",
      "GBP",
      "CHF",
      "CAD",
      "AUD",
      "JPY",
    ]);
    expect(getExcelCostUnit("money", "USD")).toBe("USD");
    expect(getExcelCostUnit("money_per_user_month", "GBP")).toBe(
      "GBP/utilisateur/mois",
    );
    expect(getExcelCostUnit("money_per_hour", "JPY")).toBe("JPY/h");
    expect(getExcelCostUnit("users", "CHF")).toBe("utilisateurs");
    expect(getExcelCostUnit("hours_per_month", "CAD")).toBe("h/mois");
  });

  it("does not make pedagogical defaults decision-ready by adding an owner", () => {
    const dossier = documentedDossier("keep_excel", 1_000);
    dossier.costBasis.confirmed = false;
    dossier.costBasis.owner = "Direction";

    const result = evaluateExcelCandidate(dossier, READY);

    expect(result.verdict).toBe("report");
    expect(result.missingEvidence.join(" ")).toContain("non attestée");
  });

  it("rejects an arbitrary one-character basis", () => {
    const dossier = documentedDossier("keep_excel", 1_000);
    dossier.costBasis.source = "x";

    const result = evaluateExcelCandidate(dossier, READY);

    expect(result.verdict).toBe("report");
    expect(result.missingEvidence).toContain(
      "source ou référence de coût manquante",
    );
  });

  it.each(["25/07/2026", "2026-02-30", "2026-07-26"])(
    "rejects invalid or future date %s",
    (date) => {
      const dossier = documentedDossier("keep_excel", 1_000);
      dossier.costBasis.sourceDate = date;
      expect(evaluateExcelCandidate(dossier, READY).verdict).toBe("report");
    },
  );

  it("validates real, non-future ISO dates only", () => {
    expect(isValidExcelEvidenceDate("2026-07-25")).toBe(true);
    expect(isValidExcelEvidenceDate("2026-07-26")).toBe(false);
    expect(isValidExcelEvidenceDate("2026-02-30")).toBe(false);
    expect(isValidExcelEvidenceDate("25/07/2026")).toBe(false);
  });

  it("separates the editorial source date from a later user decision", () => {
    const dossier = documentedDossier(
      "keep_excel",
      1_000,
      EXCEL_SCENARIOS.simple,
    );
    for (const id of EXCEL_OPERATION_IDS) {
      dossier.operations[id].evidenceDate = "2026-08-10";
      if (dossier.operations[id].status === "not_applicable") {
        dossier.operations[id].notApplicableDate = "2026-08-10";
      }
    }
    dossier.criterion.evidenceDate = "2026-08-11";
    dossier.costBasis.sourceDate = "2026-08-12";
    const readiness = {
      ...READY,
      evidenceDate: "2026-08-09",
    };

    expect(
      evaluateExcelCandidate(dossier, readiness, "2026-08-15", "2026-08-20")
        .verdict,
    ).toBe("eligible");
  });

  it("requires a valid, non-future decision date and bounds every piece to it", () => {
    expect(isValidExcelDecisionDate("2026-08-15", "2026-08-20")).toBe(true);
    expect(isValidExcelDecisionDate("2099-01-01", "2026-08-20")).toBe(false);
    expect(isValidExcelDecisionDate("zzzz", "2026-08-20")).toBe(false);
    expect(isValidExcelDecisionDate("2026-08-15", "malformed")).toBe(false);

    const dossier = documentedDossier("keep_excel", 1_000);
    dossier.operations[1].evidenceDate = "2026-08-16";
    expect(
      evaluateExcelCandidate(dossier, READY, "2026-08-15", "2026-08-20")
        .verdict,
    ).toBe("report");
  });

  it("bounds preparation and non-applicability dates to the decision date", () => {
    const dossier = documentedDossier(
      "keep_excel",
      1_000,
      EXCEL_SCENARIOS.simple,
    );
    dossier.operations[6].notApplicableDate = "2026-07-26";
    expect(evaluateExcelCandidate(dossier, READY).verdict).toBe("report");

    const futurePreparation = {
      ...READY,
      evidenceDate: "2026-07-26",
    };
    expect(
      evaluateExcelCandidate(
        documentedDossier("keep_excel", 1_000),
        futurePreparation,
      ).verdict,
    ).toBe("report");
  });

  it("does not convert unknown costs into zero", () => {
    const dossier = documentedDossier("industrialize_excel", 1_000);
    dossier.costBasis.xMin = undefined;
    dossier.costBasis.xMax = undefined;

    const result = evaluateExcelCandidate(dossier, READY);

    expect(result.verdict).toBe("report");
    expect(result.costInterval).toBeNull();
  });

  it("requires explicit dated justification for zero X and zero I", () => {
    const dossier = documentedDossier("industrialize_excel", 1_000);
    dossier.costBasis.xMin = 0;
    dossier.costBasis.xMax = 0;
    dossier.costBasis.iMin = 0;
    dossier.costBasis.iMax = 0;

    expect(evaluateExcelCandidate(dossier, READY).verdict).toBe("report");

    dossier.costBasis.zeroXConfirmed = true;
    dossier.costBasis.zeroXJustification =
      "Devis ferme : aucun coût hors postes visibles";
    dossier.costBasis.zeroIConfirmed = true;
    dossier.costBasis.zeroIJustification =
      "Historique vérifié : aucun incident résiduel retenu";

    expect(evaluateExcelCandidate(dossier, READY).verdict).toBe("eligible");
  });

  it("allows 17.30 only for the exact sourced Power Apps Premium preset", () => {
    const valid = documentedDossier("named_platform", 1_000);
    valid.costInputs.perUserMonthly = 17.3;
    valid.costBasis.source =
      "Microsoft Power Apps Pricing — offre Power Apps Premium";
    valid.costBasis.sourceDate = "2026-07-25";
    valid.costBasis.currency = "EUR";
    valid.platform.type = "power_apps";
    valid.platform.product = "Microsoft Power Apps";
    valid.platform.plan = "Premium";
    expect(evaluateExcelCandidate(valid, READY).verdict).toBe("eligible");

    for (const mutate of [
      (dossier: ExcelCandidateDossier) => {
        dossier.platform.plan = "Free";
      },
      (dossier: ExcelCandidateDossier) => {
        dossier.platform.product = "Produit détourné";
      },
      (dossier: ExcelCandidateDossier) => {
        dossier.costBasis.currency = "USD";
      },
      (dossier: ExcelCandidateDossier) => {
        dossier.costBasis.source = "Tarif revendeur sans source primaire";
      },
    ]) {
      const invalid = structuredClone(valid);
      mutate(invalid);
      expect(evaluateExcelCandidate(invalid, READY).verdict).toBe("report");
    }
  });

  it.each(EXCEL_COST_FIELDS.map((field) => field.key))(
    "reports a missing or non-finite cost input: %s",
    (key) => {
      const dossier = documentedDossier("keep_excel", 1_000);
      dossier.costInputs[key] = Number.NaN;
      expect(evaluateExcelCandidate(dossier, READY).verdict).toBe("report");
    },
  );

  it("recalculates known cost from the visible formula inputs", () => {
    const dossier = documentedDossier("standard_software", 1_000);
    dossier.costInputs.fixedMonthly = 10;
    dossier.costInputs.perUserMonthly = 2;
    dossier.costInputs.licensedUsers = 5;
    dossier.costInputs.adminHoursMonthly = 1;
    dossier.costInputs.annualMaintenance = 100;
    dossier.costInputs.formationIntegrationExit = 200;
    dossier.costInputs.residualHoursWeekly = 0.5;

    const result = evaluateExcelCandidate(dossier, READY);

    expect(result.costInterval?.knownAmount).toBe(
      1_000 +
        10 * 48 +
        2 * 5 * 48 +
        1 * 45 * 48 +
        100 * 4 +
        200 +
        0.5 * 48 * 4 * 45,
    );
  });
});

describe("candidate contracts and final five-way verdict", () => {
  it.each([
    [Number.NaN, "report"],
    [Number.POSITIVE_INFINITY, "report"],
    [-1, "report"],
    [100, "eligible"],
    [101, "report"],
  ] as const)("handles standard coverage %s", (coverage, verdict) => {
    const dossier = documentedDossier("standard_software", 1_000);
    dossier.standardCoveragePercent = coverage;
    expect(evaluateExcelCandidate(dossier, READY).verdict).toBe(verdict);
  });

  it("keeps the actions unique when standard coverage is below 80 percent", () => {
    const dossier = documentedDossier("standard_software", 1_000);
    dossier.standardCoveragePercent = 79;

    const result = evaluateExcelCandidate(dossier, READY);
    expect(result.verdict).toBe("stop");
    expect(new Set(result.actions).size).toBe(result.actions.length);
    expect(
      result.actions.filter((action) =>
        action.includes("Tester un autre produit standard"),
      ),
    ).toHaveLength(1);
  });

  it.each(EXCEL_PATHWAY_IDS)(
    "can select %s from five independent, complete dossiers",
    (winner) => {
      const result = evaluateExcelComparison({
        scenario: EXCEL_SCENARIOS.central,
        readiness: READY,
        dossiers: dossiersWithWinner(winner),
      });

      expect(result.selectedPathway).toBe(winner);
      expect(result.verdict).toBe(
        winner === "keep_excel" ? "do_not_invest" : "launch",
      );
    },
  );

  it("returns do-not-invest when keeping Excel wins", () => {
    const result = evaluateExcelComparison({
      scenario: EXCEL_SCENARIOS.central,
      readiness: READY,
      dossiers: dossiersWithWinner("keep_excel"),
    });

    expect(result.verdict).toBe("do_not_invest");
    expect(result.label).toBe("Ne pas investir");
  });

  it("blocks the final verdict when a candidate is missing", () => {
    const dossiers = dossiersWithWinner("industrialize_excel");
    delete (dossiers as Partial<typeof dossiers>).named_platform;

    const result = evaluateExcelComparison({
      scenario: EXCEL_SCENARIOS.central,
      readiness: READY,
      dossiers,
    });

    expect(result.verdict).toBe("report");
    expect(result.unresolvedPathways).toContain("named_platform");
  });

  it("rejects a dossier stored under another pathway key", () => {
    const dossiers = dossiersWithWinner("industrialize_excel");
    dossiers.named_platform = dossiers.keep_excel;

    const result = evaluateExcelComparison({
      scenario: EXCEL_SCENARIOS.central,
      readiness: READY,
      dossiers,
    });

    expect(result.verdict).toBe("report");
    expect(result.title).toContain("mauvaise voie");
  });

  it("requires equal-scope conditional operations across all five dossiers", () => {
    const dossiers = dossiersWithWinner("industrialize_excel");
    dossiers.named_platform.conditionalOperations[6] = false;
    dossiers.named_platform.operations[6].status = "not_applicable";
    dossiers.named_platform.operations[6].notApplicableReason =
      "Retiré pour favoriser ce candidat";
    dossiers.named_platform.operations[6].notApplicableDate = "2026-07-25";

    const result = evaluateExcelComparison({
      scenario: EXCEL_SCENARIOS.central,
      readiness: READY,
      dossiers,
    });

    expect(result.verdict).toBe("report");
    expect(result.title).toContain("divergent");
  });

  it("requires every pathway to price the scenario's full population", () => {
    const dossiers = dossiersWithWinner("named_platform");
    dossiers.named_platform.platform.activeUsers = 1;
    dossiers.named_platform.platform.externalUsers = 0;
    dossiers.named_platform.costInputs.licensedUsers = 1;

    const mismatch = evaluateExcelComparison({
      scenario: EXCEL_SCENARIOS.central,
      readiness: READY,
      dossiers,
    });

    expect(mismatch.verdict).toBe("report");
    expect(mismatch.title).toContain("même population");
    expect(mismatch.candidateResults).toEqual({});

    dossiers.named_platform.platform.activeUsers = 12;
    dossiers.named_platform.costInputs.licensedUsers = 12;
    expect(
      evaluateExcelComparison({
        scenario: EXCEL_SCENARIOS.central,
        readiness: READY,
        dossiers,
      }).verdict,
    ).toBe("launch");
  });

  it("rejects a comparison even when all five dossiers understate users equally", () => {
    const dossiers = dossiersWithWinner("industrialize_excel");
    for (const pathway of EXCEL_PATHWAY_IDS) {
      dossiers[pathway].costInputs.licensedUsers = 1;
    }
    dossiers.named_platform.platform.activeUsers = 1;
    dossiers.named_platform.platform.externalUsers = 0;

    const result = evaluateExcelComparison({
      scenario: EXCEL_SCENARIOS.central,
      readiness: READY,
      dossiers,
    });

    expect(result.verdict).toBe("report");
    expect(result.selectedPathway).toBeNull();
    expect(result.title).toContain("même population");
  });

  it("never compares admissible dossiers expressed in different currencies", () => {
    const dossiers = dossiersWithWinner("standard_software");
    dossiers.named_platform.costBasis.currency = "USD";

    const result = evaluateExcelComparison({
      scenario: EXCEL_SCENARIOS.central,
      readiness: READY,
      dossiers,
    });

    expect(result.verdict).toBe("report");
    expect(result.title).toContain("même devise");
  });

  it("blocks the final verdict when an unresolved candidate could alter the order", () => {
    const dossiers = dossiersWithWinner("standard_software");
    dossiers.keep_excel.operations[3].reference = "";

    const result = evaluateExcelComparison({
      scenario: EXCEL_SCENARIOS.central,
      readiness: READY,
      dossiers,
    });

    expect(result.verdict).toBe("report");
    expect(result.unresolvedPathways).toContain("keep_excel");
  });

  it("cannot launch a complex path by giving a simpler path an invalid input", () => {
    const dossiers = dossiersWithWinner("custom_development");
    dossiers.standard_software.standardCoveragePercent = Number.NaN;

    const result = evaluateExcelComparison({
      scenario: EXCEL_SCENARIOS.central,
      readiness: READY,
      dossiers,
    });

    expect(result.verdict).toBe("report");
    expect(result.unresolvedPathways).toContain("standard_software");
  });

  it("accepts the largest safe interval boundary and rejects max plus one", () => {
    const dossier = documentedDossier("keep_excel", 0);
    for (const { key } of EXCEL_COST_FIELDS) {
      dossier.costInputs[key] = 0;
    }
    dossier.costBasis.xMin = EXCEL_MAX_SAFE_COST_AMOUNT;
    dossier.costBasis.xMax = EXCEL_MAX_SAFE_COST_AMOUNT;
    dossier.costBasis.iMin = 0;
    dossier.costBasis.iMax = 0;
    dossier.costBasis.zeroIConfirmed = true;
    dossier.costBasis.zeroIJustification =
      "Aucun incident résiduel dans ce cas borné";

    const safe = evaluateExcelCandidate(dossier, READY);
    expect(safe.verdict).toBe("eligible");
    expect(safe.costInterval?.maximum).toBe(EXCEL_MAX_SAFE_COST_AMOUNT);

    dossier.costBasis.xMax = EXCEL_MAX_SAFE_COST_AMOUNT + 1;
    expect(evaluateExcelCandidate(dossier, READY).verdict).toBe("report");
  });

  it("reports a finite-input multiplication that exceeds the safe cost domain", () => {
    const dossier = documentedDossier("named_platform", 0);
    for (const { key } of EXCEL_COST_FIELDS) {
      dossier.costInputs[key] = 0;
    }
    dossier.platform.activeUsers = 1;
    dossier.platform.externalUsers = 0;
    dossier.costInputs.licensedUsers = 1;
    dossier.costInputs.perUserMonthly = EXCEL_MAX_SAFE_COST_AMOUNT;

    const candidate = evaluateExcelCandidate(dossier, READY);
    expect(candidate.verdict).toBe("report");
    expect(candidate.invalidInputs.join(" ")).toContain(
      "domaine numérique sûr",
    );

    const dossiers = dossiersWithWinner("named_platform");
    dossiers.named_platform = dossier;
    const comparison = evaluateExcelComparison({
      scenario: EXCEL_SCENARIOS.central,
      readiness: READY,
      dossiers,
    });
    expect(comparison.verdict).toBe("report");
    expect(comparison.selectedPathway).toBeNull();
  });

  it("reports an exact tie and overlapping intervals", () => {
    const tie = dossiersWithWinner("industrialize_excel");
    tie.keep_excel.costInputs.initialAndMigration = 1_000;
    expect(
      evaluateExcelComparison({
        scenario: EXCEL_SCENARIOS.central,
        readiness: READY,
        dossiers: tie,
      }).verdict,
    ).toBe("report");

    const overlap = dossiersWithWinner("industrialize_excel");
    overlap.keep_excel.costInputs.initialAndMigration = 1_030;
    overlap.industrialize_excel.costBasis.xMax = 100;
    expect(
      evaluateExcelComparison({
        scenario: EXCEL_SCENARIOS.central,
        readiness: READY,
        dossiers: overlap,
      }).verdict,
    ).toBe("report");
  });

  it("stops when every candidate is documented and eliminated", () => {
    const dossiers = dossiersWithWinner("industrialize_excel");
    for (const pathway of EXCEL_PATHWAY_IDS) {
      dossiers[pathway].criterion.met = false;
    }

    expect(
      evaluateExcelComparison({
        scenario: EXCEL_SCENARIOS.central,
        readiness: READY,
        dossiers,
      }).verdict,
    ).toBe("stop");
  });
});

describe("runtime schema rejects adversarial values without throwing", () => {
  it.each([
    ["null", null],
    ["empty object", {}],
  ])("rejects comparison input %s before evaluating a pathway", (_, input) => {
    expect(() =>
      evaluateExcelComparisonAtDate(input as ExcelComparisonInput),
    ).not.toThrow();
    const result = evaluateExcelComparisonAtDate(input as ExcelComparisonInput);

    expect(result.verdict).toBe("report");
    expect(result.selectedPathway).toBeNull();
    expect(result.eligiblePathways).toEqual([]);
    expect(result.candidateResults).toEqual({});
  });

  it.each([
    ["null", null],
    ["empty object", {}],
    ["unknown id", { ...EXCEL_SCENARIOS.central, id: "banana" }],
    ["non-numeric users", { ...EXCEL_SCENARIOS.central, users: "twelve" }],
  ])(
    "rejects scenario %s without throwing or selecting a path",
    (_, scenario) => {
      const input = {
        scenario,
        readiness: READY,
        dossiers: dossiersWithWinner("industrialize_excel"),
        decisionDate: DECISION_DATE,
        currentDate: CURRENT_DATE,
      } as unknown as ExcelComparisonInput;

      expect(() => evaluateExcelComparisonAtDate(input)).not.toThrow();
      const result = evaluateExcelComparisonAtDate(input);
      expect(result.verdict).toBe("report");
      expect(result.selectedPathway).toBeNull();
      expect(result.eligiblePathways).toEqual([]);
      expect(
        Object.values(result.candidateResults).some(
          (candidate) => candidate?.verdict === "eligible",
        ),
      ).toBe(false);
    },
  );

  it("rejects central dossiers under the simple scenario", () => {
    const input = {
      scenario: EXCEL_SCENARIOS.simple,
      readiness: READY,
      dossiers: dossiersWithWinner("industrialize_excel"),
      decisionDate: DECISION_DATE,
      currentDate: CURRENT_DATE,
    };

    expect(() => evaluateExcelComparisonAtDate(input)).not.toThrow();
    const result = evaluateExcelComparisonAtDate(input);
    expect(result.verdict).toBe("report");
    expect(result.selectedPathway).toBeNull();
    expect(result.eligiblePathways).toEqual([]);
    expect(result.candidateResults).toEqual({});
    expect(result.title).toContain("scénario choisi");
  });

  it("accepts a canonical scenario cloned by value", () => {
    const input = {
      scenario: structuredClone(EXCEL_SCENARIOS.central),
      readiness: READY,
      dossiers: dossiersWithWinner("industrialize_excel"),
      decisionDate: DECISION_DATE,
      currentDate: CURRENT_DATE,
    };

    expect(evaluateExcelComparisonAtDate(input).verdict).toBe("launch");
  });

  it("rejects an operation status outside the enum instead of accepting 9/10", () => {
    const dossier = documentedDossier("keep_excel", 1_000);
    (
      dossier.operations[1] as unknown as {
        status: string;
      }
    ).status = "banana";

    expect(() => evaluateExcelCandidate(dossier, READY)).not.toThrow();
    const result = evaluateExcelCandidate(dossier, READY);
    expect(result.verdict).toBe("report");
    expect(result.passedOperations).toBe(9);
    expect(result.invalidInputs.join(" ")).toContain("statut hors liste");
  });

  it("rejects an evidence level outside the enum", () => {
    const dossier = documentedDossier("keep_excel", 1_000);
    (
      dossier.operations[1] as unknown as {
        evidenceLevel: string;
      }
    ).evidenceLevel = "banana";

    expect(() => evaluateExcelCandidate(dossier, READY)).not.toThrow();
    expect(evaluateExcelCandidate(dossier, READY).verdict).toBe("report");
  });

  it("rejects BANANA as a currency and never launches the comparison", () => {
    const dossiers = dossiersWithWinner("industrialize_excel");
    for (const pathway of EXCEL_PATHWAY_IDS) {
      (
        dossiers[pathway].costBasis as unknown as {
          currency: string;
        }
      ).currency = "BANANA";
    }

    expect(() =>
      evaluateExcelComparison({
        scenario: EXCEL_SCENARIOS.central,
        readiness: READY,
        dossiers,
      }),
    ).not.toThrow();
    expect(
      evaluateExcelComparison({
        scenario: EXCEL_SCENARIOS.central,
        readiness: READY,
        dossiers,
      }).verdict,
    ).toBe("report");
  });

  it("rejects string false readiness instead of treating it as true", () => {
    const dossier = documentedDossier("keep_excel", 1_000);
    const invalidReadiness = {
      ...READY,
      processStable: "false",
    } as unknown as ExcelSharedReadiness;

    expect(() =>
      evaluateExcelCandidate(dossier, invalidReadiness),
    ).not.toThrow();
    expect(evaluateExcelCandidate(dossier, invalidReadiness).verdict).toBe(
      "report",
    );
  });

  it.each([null, "false"])(
    "rejects non-boolean conditional applicability %s without throwing",
    (invalidConditional) => {
      const dossier = documentedDossier("keep_excel", 1_000);
      dossier.conditionalOperations =
        invalidConditional as unknown as ExcelCandidateDossier["conditionalOperations"];

      expect(() => evaluateExcelCandidate(dossier, READY)).not.toThrow();
      expect(evaluateExcelCandidate(dossier, READY).verdict).toBe("report");
    },
  );

  it("rejects a non-boolean criterion and malformed verifier fields", () => {
    const nonBooleanCriterion = documentedDossier("keep_excel", 1_000);
    (
      nonBooleanCriterion.criterion as unknown as {
        met: string;
      }
    ).met = "false";

    expect(() =>
      evaluateExcelCandidate(nonBooleanCriterion, READY),
    ).not.toThrow();
    expect(evaluateExcelCandidate(nonBooleanCriterion, READY).verdict).toBe(
      "report",
    );

    const malformedVerifier = documentedDossier("keep_excel", 1_000);
    (
      malformedVerifier.criterion as unknown as {
        verifiedBy: null;
      }
    ).verifiedBy = null;
    expect(() =>
      evaluateExcelCandidate(malformedVerifier, READY),
    ).not.toThrow();
    expect(evaluateExcelCandidate(malformedVerifier, READY).verdict).toBe(
      "report",
    );
  });

  it("rejects a platform type outside the enum", () => {
    const dossier = documentedDossier("named_platform", 1_000);
    (
      dossier.platform as unknown as {
        type: string;
      }
    ).type = "banana";

    expect(() => evaluateExcelCandidate(dossier, READY)).not.toThrow();
    expect(evaluateExcelCandidate(dossier, READY).verdict).toBe("report");
  });

  it("rejects 2099 and malformed decision contexts deterministically", () => {
    const dossiers = dossiersWithWinner("keep_excel");
    const future = {
      scenario: EXCEL_SCENARIOS.central,
      readiness: READY,
      dossiers,
      decisionDate: "2099-01-01",
      currentDate: "2026-08-20",
    };
    const malformed = {
      ...future,
      decisionDate: "2026-08-15",
      currentDate: "malformed",
    };

    expect(() => evaluateExcelComparisonAtDate(future)).not.toThrow();
    expect(evaluateExcelComparisonAtDate(future).verdict).toBe("report");
    expect(() => evaluateExcelComparisonAtDate(malformed)).not.toThrow();
    expect(evaluateExcelComparisonAtDate(malformed).verdict).toBe("report");
  });

  it("keeps the pathway key and dossier identity protected", () => {
    const dossiers = dossiersWithWinner("industrialize_excel");
    dossiers.named_platform = dossiers.keep_excel;

    expect(
      evaluateExcelComparison({
        scenario: EXCEL_SCENARIOS.central,
        readiness: READY,
        dossiers,
      }).verdict,
    ).toBe("report");
  });
});

describe("reader-autonomous report", () => {
  it("contains shared inputs, five dossiers, costs, proofs and French verdicts", () => {
    const dossiers = dossiersWithWinner(
      "named_platform",
      EXCEL_SCENARIOS.simple,
    );
    dossiers.keep_excel.operations[1].status = "fail";
    dossiers.keep_excel.operations[6].status = "not_applicable";
    dossiers.keep_excel.conditionalOperations[6] = false;
    dossiers.keep_excel.operations[6].notApplicableReason =
      "Aucune coédition simultanée dans le cas simple";
    dossiers.keep_excel.operations[6].notApplicableDate = "2026-07-25";
    dossiers.named_platform.operations[1].evidenceLevel = "verified";
    dossiers.named_platform.operations[1].verifiedBy =
      "Luc Martin, contrôle interne";
    const input = withDecisionDates({
      scenario: EXCEL_SCENARIOS.simple,
      readiness: READY,
      dossiers,
    });
    const text = buildExcelDecisionReport(
      input,
      evaluateExcelComparison(input),
    );

    expect(text).toContain(EXCEL_DIAGNOSTIC_VERSION);
    expect(text).toContain(
      `Date de vérification éditoriale des sources : ${EXCEL_SOURCE_VERIFIED_ON}`,
    );
    expect(text).toContain("Date de décision du dossier : 2026-07-25");
    expect(text).toContain(
      "Condition propre, vérificateur : Marie Dupont, contrôle interne",
    );
    expect(text).toContain("Vérificateur : Luc Martin, contrôle interne");
    expect(text).toContain("Préparation commune");
    expect(text.match(/^DOSSIER — /gm)).toHaveLength(5);
    expect(text).toContain("Condition propre satisfaite");
    expect(text).toContain("Couverture standard");
    expect(text).toContain("Produit : Microsoft Power Apps");
    expect(text).toContain("Source/référence");
    expect(text).toContain("Formule :");
    expect(text).toContain("Motif de non-applicabilité");
    expect(text).toContain("Statut : échec");
    expect(text).toContain("Statut : non applicable");
    expect(text).toContain("VERDICT FINAL");
    expect(text).not.toMatch(
      /\b(pass|fail|unknown|not_applicable|eligible|report|stop|launch|do_not_invest)\b/,
    );
    expect(text).not.toContain("undefined");
    expect(text).not.toContain("NaN");
  });

  it("exports monetary values in the chosen currency without changing physical units", () => {
    const dossiers = dossiersWithWinner("named_platform");
    for (const pathway of EXCEL_PATHWAY_IDS) {
      dossiers[pathway].costBasis.currency = "USD";
    }
    const input = withDecisionDates({
      scenario: EXCEL_SCENARIOS.central,
      readiness: READY,
      dossiers,
    });
    const text = buildExcelDecisionReport(input);

    expect(text).toContain("Mise en place + migration : 10");
    expect(text).toContain(" USD");
    expect(text).toContain("Licence par utilisateur : 0 USD/utilisateur/mois");
    expect(text).toContain("Utilisateurs licenciés : 12 utilisateurs");
    expect(text).toContain("Administration : 0 h/mois");
    expect(text).not.toContain(" €");
  });

  it("never emits undefined or NaN after a platform change", () => {
    const dossiers = dossiersWithWinner("named_platform");
    dossiers.named_platform = changeExcelPlatformType(
      dossiers.named_platform,
      "appsheet",
      EXCEL_SCENARIOS.central,
    );
    const input = withDecisionDates({
      scenario: EXCEL_SCENARIOS.central,
      readiness: READY,
      dossiers,
    });
    const text = buildExcelDecisionReport(input);

    expect(text).toContain("Produit : Google AppSheet");
    expect(text).toContain("non renseigné");
    expect(text).not.toContain("undefined");
    expect(text).not.toContain("NaN");
  });
});

describe("defensive report normalization", () => {
  it.each([
    ["null input", () => null],
    ["empty input", () => ({})],
    ["null scenario", () => ({ ...validReportInput(), scenario: null })],
    ["null readiness", () => ({ ...validReportInput(), readiness: null })],
    ["null dossiers", () => ({ ...validReportInput(), dossiers: null })],
  ])("returns an autonomous correction report for %s", (_, createInput) => {
    const input = createInput();
    expect(() => buildUnsafeReport(input)).not.toThrow();
    expectCorrectionReport(buildUnsafeReport(input));
  });

  it("does not call trim when an operation reference is null", () => {
    const input = validReportInput();
    (
      input.dossiers.keep_excel?.operations[1] as unknown as {
        reference: null;
      }
    ).reference = null;

    expect(() => buildUnsafeReport(input)).not.toThrow();
    expectCorrectionReport(buildUnsafeReport(input));
  });

  it.each([
    ["costBasis", undefined],
    ["costBasis", null],
    ["costInputs", undefined],
    ["costInputs", {}],
    ["criterion", undefined],
    ["criterion", null],
    ["platform", undefined],
    ["platform", {}],
    ["operations", undefined],
    ["operations", null],
  ] as const)(
    "returns correction when dossier field %s is %s",
    (field, invalidValue) => {
      const input = validReportInput();
      const dossier = input.dossiers.keep_excel as unknown as Record<
        string,
        unknown
      >;
      dossier[field] = invalidValue;

      expect(() => buildUnsafeReport(input)).not.toThrow();
      expectCorrectionReport(buildUnsafeReport(input));
    },
  );

  it.each([
    ["null", () => null],
    ["empty object", () => ({})],
    [
      "verdict outside enum",
      (input: ExcelComparisonInput) => ({
        ...evaluateExcelComparisonAtDate(input),
        verdict: "banana",
      }),
    ],
  ])("returns correction for result %s", (_, createResult) => {
    const input = validReportInput();
    const result = createResult(input);

    expect(() => buildUnsafeReport(input, result)).not.toThrow();
    expectCorrectionReport(buildUnsafeReport(input, result));
  });

  it("recomputes a shaped result instead of trusting a forged launch", () => {
    const input = validReportInput("keep_excel");
    const forged = {
      ...evaluateExcelComparisonAtDate(input),
      verdict: "launch",
      selectedPathway: "custom_development",
    };

    const text = buildUnsafeReport(input, forged);
    expect(text).toContain("Décision : ne pas investir");
    expect(text).toContain("Voie retenue : Conserver Excel");
    expect(text).not.toContain("RAPPORT DE CORRECTION");
    expect(text).not.toContain("undefined");
    expect(text).not.toContain("NaN");
  });
});

describe("stable arithmetic and boundary signals", () => {
  it("recalculates the 15 published examples", () => {
    expect(getExcelScenarioTcos("simple")).toEqual({
      keep_excel: 13_960,
      industrialize_excel: 11_780,
      standard_software: 17_088,
      named_platform: 27_700,
      custom_development: 61_656,
    });
    expect(getExcelScenarioTcos("central")).toEqual({
      keep_excel: 58_160,
      industrialize_excel: 34_800,
      standard_software: 46_520,
      named_platform: 62_404.8,
      custom_development: 97_640,
    });
    expect(getExcelScenarioTcos("demanding")).toEqual({
      keep_excel: 115_320,
      industrialize_excel: 83_160,
      standard_software: 124_440,
      named_platform: 150_640,
      custom_development: 212_280,
    });
    expect(
      calculateKnownExcelTco(
        EXCEL_SCENARIOS.central,
        EXCEL_TCO_ASSUMPTIONS.central.named_platform,
      ),
    ).toBe(62_404.8);
  });

  it.each([
    [0, "empty"],
    [1, "single_row_no_capacity_conclusion"],
    [2_000, "client_window_boundary"],
    [2_001, "above_client_window"],
  ] as const)("classifies %i rows as %s", (rows, expected) => {
    expect(evaluateExcelDatasetBoundary(rows)).toBe(expected);
  });

  it.each([-1, 1.5, Number.NaN, Number.POSITIVE_INFINITY])(
    "rejects invalid row count %s",
    (rows) => {
      expect(evaluateExcelDatasetBoundary(rows)).toBe("invalid");
    },
  );
});
