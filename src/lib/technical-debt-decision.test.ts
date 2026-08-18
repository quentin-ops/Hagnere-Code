import { describe, expect, it } from "vitest";
import {
  buildTechnicalDebtCsv,
  buildTechnicalDebtSummary,
  calculateTechnicalDebtSensitivity,
  calculateTechnicalDebtDecision,
  cloneTechnicalDebtFrictionInputs,
  cloneTechnicalDebtOptionInputs,
  TECHNICAL_DEBT_EXAMPLE_FRICTION,
  TECHNICAL_DEBT_EXAMPLE_OPTIONS,
  TECHNICAL_DEBT_SENSITIVITY_VALUES,
} from "./technical-debt-decision";

describe("calculateTechnicalDebtDecision", () => {
  it("separates internal capacity from attributable cash", () => {
    const result = calculateTechnicalDebtDecision(
      TECHNICAL_DEBT_EXAMPLE_FRICTION,
      TECHNICAL_DEBT_EXAMPLE_OPTIONS,
      36,
      "risk",
    );

    expect(result.friction).toEqual({
      deliveryCapacity: 11016,
      incidentCapacity: 2856,
      workaroundCapacity: 11776,
      internalCapacity: 25648,
      externalCash: 8400,
      observedFriction: 34048,
    });
  });

  it("reproduces the five equal-scope totals at 12, 36 and 60 months", () => {
    const twelve = calculateTechnicalDebtDecision(
      TECHNICAL_DEBT_EXAMPLE_FRICTION,
      TECHNICAL_DEBT_EXAMPLE_OPTIONS,
      12,
      "risk",
    );
    const thirtySix = calculateTechnicalDebtDecision(
      TECHNICAL_DEBT_EXAMPLE_FRICTION,
      TECHNICAL_DEBT_EXAMPLE_OPTIONS,
      36,
      "risk",
    );
    const sixty = calculateTechnicalDebtDecision(
      TECHNICAL_DEBT_EXAMPLE_FRICTION,
      TECHNICAL_DEBT_EXAMPLE_OPTIONS,
      60,
      "risk",
    );

    expect(
      twelve.optionResults.map(({ selectedTotal }) => selectedTotal),
    ).toEqual([42048, 54526.4, 89562, 103716.8, 169207.2]);
    expect(
      thirtySix.optionResults.map(({ selectedTotal }) => selectedTotal),
    ).toEqual([126144, 105979.2, 120586, 190750.4, 197821.6]);
    expect(
      sixty.optionResults.map(({ selectedTotal }) => selectedTotal),
    ).toEqual([210240, 157432, 151610, 277784, 226436]);
  });

  it("changes the verdict when the decision lens changes", () => {
    const cash = calculateTechnicalDebtDecision(
      TECHNICAL_DEBT_EXAMPLE_FRICTION,
      TECHNICAL_DEBT_EXAMPLE_OPTIONS,
      36,
      "cash",
    );
    const capacity = calculateTechnicalDebtDecision(
      TECHNICAL_DEBT_EXAMPLE_FRICTION,
      TECHNICAL_DEBT_EXAMPLE_OPTIONS,
      36,
      "capacity",
    );

    expect(cash.optionResults[0].differenceFromLowest).toBe(0);
    expect(capacity.optionResults[1].differenceFromLowest).toBe(0);
    expect(cash.optionResults[1].cashTotal).toBe(51660);
    expect(capacity.optionResults[1].selectedTotal).toBe(93979.2);
  });

  it("calculates the break-even friction with and without risk", () => {
    const withoutRisk = calculateTechnicalDebtDecision(
      TECHNICAL_DEBT_EXAMPLE_FRICTION,
      TECHNICAL_DEBT_EXAMPLE_OPTIONS,
      36,
      "capacity",
    );
    const withRisk = calculateTechnicalDebtDecision(
      TECHNICAL_DEBT_EXAMPLE_FRICTION,
      TECHNICAL_DEBT_EXAMPLE_OPTIONS,
      36,
      "risk",
    );
    const stabilizationWithoutRisk = withoutRisk.optionResults.find(
      ({ option }) => option === "stabilize",
    );
    const stabilizationWithRisk = withRisk.optionResults.find(
      ({ option }) => option === "stabilize",
    );

    expect(stabilizationWithoutRisk?.breakEvenAnnualAmount).toBe(28000);
    expect(stabilizationWithRisk?.breakEvenAnnualAmount).toBeCloseTo(
      19111.111111,
    );
    expect(stabilizationWithoutRisk?.breakEvenBasis).toBe("observed");
    const cashDecision = calculateTechnicalDebtDecision(
      TECHNICAL_DEBT_EXAMPLE_FRICTION,
      TECHNICAL_DEBT_EXAMPLE_OPTIONS,
      36,
      "cash",
    );
    expect(cashDecision.optionResults[1].breakEvenAnnualAmount).toBe(28000);
    expect(cashDecision.optionResults[1].breakEvenBasis).toBe("cash");
  });

  it("excludes options with unknown costs from the ranking", () => {
    const options = cloneTechnicalDebtOptionInputs(
      TECHNICAL_DEBT_EXAMPLE_OPTIONS,
    );
    options.stabilize.hasUnknownCosts = true;

    const result = calculateTechnicalDebtDecision(
      TECHNICAL_DEBT_EXAMPLE_FRICTION,
      options,
      36,
      "risk",
    );

    expect(result.optionResults[1]).toMatchObject({
      isComparable: false,
      differenceFromLowest: null,
    });
    expect(result.optionResults[2].differenceFromLowest).toBe(0);
  });

  it("rejects negative, empty and over-100 percent inputs", () => {
    const friction = cloneTechnicalDebtFrictionInputs(
      TECHNICAL_DEBT_EXAMPLE_FRICTION,
    );
    const options = cloneTechnicalDebtOptionInputs(
      TECHNICAL_DEBT_EXAMPLE_OPTIONS,
    );
    friction.operators = Number.NaN;
    options.rewrite.capacityReductionPercent = 101;
    options.standard.initialAndTransition = -1;

    const result = calculateTechnicalDebtDecision(
      friction,
      options,
      36,
      "risk",
    );

    expect(result.isValid).toBe(false);
    expect(result.optionResults).toEqual([]);
    expect(result.validationErrors).toEqual([
      { scope: "friction", field: "operators" },
      {
        scope: "option",
        option: "standard",
        field: "initialAndTransition",
      },
      {
        scope: "option",
        option: "rewrite",
        field: "capacityReductionPercent",
      },
    ]);
  });

  it("clones nested option values before state-like edits", () => {
    const clone = cloneTechnicalDebtOptionInputs(
      TECHNICAL_DEBT_EXAMPLE_OPTIONS,
    );
    clone.rewrite.initialAndTransition = 1;

    expect(TECHNICAL_DEBT_EXAMPLE_OPTIONS.rewrite.initialAndTransition).toBe(
      154900,
    );
  });

  it("keeps the reference totals when cash and capacity rates are equal", () => {
    const result = calculateTechnicalDebtDecision(
      TECHNICAL_DEBT_EXAMPLE_FRICTION,
      TECHNICAL_DEBT_EXAMPLE_OPTIONS,
      36,
      "risk",
    );

    expect(
      result.optionResults.map(({ selectedTotal }) => selectedTotal),
    ).toEqual([126144, 105979.2, 120586, 190750.4, 197821.6]);
  });

  it("allows cash and capacity reductions to differ", () => {
    const options = cloneTechnicalDebtOptionInputs(
      TECHNICAL_DEBT_EXAMPLE_OPTIONS,
    );
    options.stabilize.cashReductionPercent = 80;
    options.stabilize.capacityReductionPercent = 10;

    const result = calculateTechnicalDebtDecision(
      TECHNICAL_DEBT_EXAMPLE_FRICTION,
      options,
      36,
      "risk",
    );
    const stabilize = result.optionResults.find(
      ({ option }) => option === "stabilize",
    );

    expect(stabilize?.residualCash).toBe(5040);
    expect(stabilize?.residualCapacity).toBe(69249.6);
    expect(stabilize?.selectedTotal).toBe(124089.6);
  });

  it("reproduces the documented proportional sensitivity winners", () => {
    const sensitivity = calculateTechnicalDebtSensitivity(
      TECHNICAL_DEBT_EXAMPLE_FRICTION,
      TECHNICAL_DEBT_EXAMPLE_OPTIONS,
      36,
      "risk",
    );

    expect(
      sensitivity.map(({ annualObservedFriction }) => annualObservedFriction),
    ).toEqual([...TECHNICAL_DEBT_SENSITIVITY_VALUES]);
    expect(sensitivity.map(({ winner }) => winner)).toEqual([
      "wait",
      "stabilize",
      "renovate",
      "rewrite",
    ]);
    expect(
      sensitivity[2].calculation.optionResults.map(
        ({ selectedTotal }) => selectedTotal,
      ),
    ).toEqual([264000, 181800, 155050, 239000, 218500]);
  });
});

describe("technical debt decision exports", () => {
  it("exports a plain-language summary without turning capacity into cash", () => {
    const calculation = calculateTechnicalDebtDecision(
      TECHNICAL_DEBT_EXAMPLE_FRICTION,
      TECHNICAL_DEBT_EXAMPLE_OPTIONS,
      36,
      "risk",
    );
    const summary = buildTechnicalDebtSummary(
      TECHNICAL_DEBT_EXAMPLE_FRICTION,
      TECHNICAL_DEBT_EXAMPLE_OPTIONS,
      calculation,
    );

    expect(summary).toContain("36 mois");
    expect(summary).toContain("Capacité interne valorisée");
    expect(summary).toContain("Sorties de trésorerie attribuables");
    expect(summary).toContain("n’est pas une économie bancaire");
    expect(summary).toContain("L’opportunité commerciale reste hors");
  });

  it("exports assumptions, subtotals, five options and limitations to CSV", () => {
    const calculation = calculateTechnicalDebtDecision(
      TECHNICAL_DEBT_EXAMPLE_FRICTION,
      TECHNICAL_DEBT_EXAMPLE_OPTIONS,
      60,
      "capacity",
    );
    const csv = buildTechnicalDebtCsv(
      TECHNICAL_DEBT_EXAMPLE_FRICTION,
      TECHNICAL_DEBT_EXAMPLE_OPTIONS,
      calculation,
    );

    expect(csv).toContain('"Horizon (mois)";"60"');
    expect(csv).toContain('"Lecture";"Trésorerie + capacité"');
    expect(csv).toContain('"Attendre sous surveillance"');
    expect(csv).toContain('"Remplacer par un logiciel standard"');
    expect(csv).toContain("Une heure, facture ou conséquence");
  });

  it("does not export partial totals when validation fails", () => {
    const friction = cloneTechnicalDebtFrictionInputs(
      TECHNICAL_DEBT_EXAMPLE_FRICTION,
    );
    friction.changesPerYear = Number.NaN;
    const calculation = calculateTechnicalDebtDecision(
      friction,
      TECHNICAL_DEBT_EXAMPLE_OPTIONS,
      36,
      "risk",
    );

    expect(
      buildTechnicalDebtSummary(
        friction,
        TECHNICAL_DEBT_EXAMPLE_OPTIONS,
        calculation,
      ),
    ).toBe("");
    expect(
      buildTechnicalDebtCsv(
        friction,
        TECHNICAL_DEBT_EXAMPLE_OPTIONS,
        calculation,
      ),
    ).toBe("");
  });
});
