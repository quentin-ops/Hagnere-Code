import { describe, expect, it } from "vitest";
import {
  buildCrmTcoCsv,
  buildCrmTcoSummary,
  calculateCrmTco,
  cloneCrmTcoInputs,
  CRM_TCO_EXAMPLE_INPUTS,
  type CrmTcoInputs,
} from "./crm-tco";

const CONTROLLED_INPUTS: CrmTcoInputs = {
  "keep-standard": {
    initial: 100,
    monthly: 10,
    annual: 120,
  },
  reconfigure: {
    initial: 200,
    monthly: 20,
    annual: 240,
  },
  hybrid: {
    initial: 300,
    monthly: 30,
    annual: 360,
  },
  custom: {
    initial: 400,
    monthly: 40,
    annual: 480,
  },
};

describe("calculateCrmTco", () => {
  it("combines initial, monthly and annual costs on 12, 36 and 60 months", () => {
    const twelveMonths = calculateCrmTco(CONTROLLED_INPUTS, 12, "central");
    const thirtySixMonths = calculateCrmTco(CONTROLLED_INPUTS, 36, "central");
    const sixtyMonths = calculateCrmTco(CONTROLLED_INPUTS, 60, "central");

    expect(twelveMonths.results[0]).toMatchObject({
      baseTotal: 340,
      total: 340,
      averageMonthly: 340 / 12,
      differenceFromLowest: 0,
    });
    expect(thirtySixMonths.results[0]).toMatchObject({
      baseTotal: 820,
      total: 820,
      averageMonthly: 820 / 36,
      differenceFromLowest: 0,
    });
    expect(sixtyMonths.results[0]).toMatchObject({
      baseTotal: 1300,
      total: 1300,
      averageMonthly: 1300 / 60,
      differenceFromLowest: 0,
    });
  });

  it("stresses recurring and fixed costs separately instead of scaling every option alike", () => {
    const recurring = calculateCrmTco(CONTROLLED_INPUTS, 36, "recurring");
    const project = calculateCrmTco(CONTROLLED_INPUTS, 36, "project");

    expect(recurring.multipliers).toEqual({
      initial: 1,
      monthly: 1.25,
      annual: 1.25,
    });
    expect(recurring.results[0].total).toBe(1000);
    expect(project.multipliers).toEqual({
      initial: 1.25,
      monthly: 1,
      annual: 1,
    });
    expect(project.results[0].total).toBe(845);
  });

  it("can change the ranking when two options have different cost structures", () => {
    const inputs = cloneCrmTcoInputs(CONTROLLED_INPUTS);
    inputs["keep-standard"] = { initial: 0, monthly: 100, annual: 0 };
    inputs.reconfigure = { initial: 3300, monthly: 0, annual: 0 };
    inputs.hybrid = { initial: 100000, monthly: 0, annual: 0 };
    inputs.custom = { initial: 100000, monthly: 0, annual: 0 };

    const central = calculateCrmTco(inputs, 36, "central");
    const recurring = calculateCrmTco(inputs, 36, "recurring");
    const project = calculateCrmTco(inputs, 36, "project");

    expect(central.results[1].differenceFromLowest).toBe(0);
    expect(recurring.results[0].differenceFromLowest).toBeGreaterThan(0);
    expect(project.results[0].differenceFromLowest).toBe(0);
  });

  it("reproduces the article’s central examples at 36 and 60 months", () => {
    const thirtySixMonths = calculateCrmTco(
      CRM_TCO_EXAMPLE_INPUTS,
      36,
      "central",
    );
    const sixtyMonths = calculateCrmTco(CRM_TCO_EXAMPLE_INPUTS, 60, "central");

    expect(thirtySixMonths.results.map(({ total }) => total)).toEqual([
      30600, 36640, 89730, 203210,
    ]);
    expect(sixtyMonths.results.map(({ total }) => total)).toEqual([
      49320, 54280, 121770, 255050,
    ]);
  });

  it("identifies invalid, empty or negative values without returning totals", () => {
    const inputs = cloneCrmTcoInputs(CONTROLLED_INPUTS);
    inputs.hybrid.monthly = -1;
    inputs.custom.annual = Number.NaN;

    const result = calculateCrmTco(inputs, 36, "central");

    expect(result.isValid).toBe(false);
    expect(result.results).toEqual([]);
    expect(result.lowestTotal).toBeNull();
    expect(result.validationErrors).toEqual([
      { path: "hybrid", field: "monthly" },
      { path: "custom", field: "annual" },
    ]);
  });

  it("refuses finite inputs whose multiplication would overflow", () => {
    const inputs = cloneCrmTcoInputs(CONTROLLED_INPUTS);
    inputs.custom.monthly = Number.MAX_VALUE;

    const result = calculateCrmTco(inputs, 60, "recurring");

    expect(result.isValid).toBe(false);
    expect(result.results).toEqual([]);
    expect(result.validationErrors).toEqual([
      { path: "custom", field: "initial" },
      { path: "custom", field: "monthly" },
      { path: "custom", field: "annual" },
    ]);
  });

  it("clones every nested option before state-style mutations", () => {
    const clone = cloneCrmTcoInputs(CRM_TCO_EXAMPLE_INPUTS);
    clone.custom.initial = 1;

    expect(CRM_TCO_EXAMPLE_INPUTS.custom.initial).toBe(125450);
  });
});

describe("CRM TCO exports", () => {
  it("builds a plain-language summary with every path and its limitations", () => {
    const calculation = calculateCrmTco(CONTROLLED_INPUTS, 36, "central");
    const summary = buildCrmTcoSummary(CONTROLLED_INPUTS, calculation);

    expect(summary).toContain("36 mois");
    expect(summary).toContain("scénario central");
    expect(summary).toContain("Garder une solution standard");
    expect(summary).toContain("Reconfigurer la solution standard");
    expect(summary).toContain("Ajouter un module métier");
    expect(summary).toContain("Construire un CRM sur mesure");
    expect(summary).toContain("ni un tarif de marché, ni un devis");
    expect(summary).toContain(
      "Le total le plus faible n’est pas nécessairement la meilleure décision",
    );
  });

  it("builds a semicolon-separated CSV with editable assumptions and totals", () => {
    const calculation = calculateCrmTco(CONTROLLED_INPUTS, 60, "recurring");
    const csv = buildCrmTcoCsv(CONTROLLED_INPUTS, calculation);

    expect(csv).toContain('"Horizon (mois)";"60"');
    expect(csv).toContain('"Scénario";"Récurrent +25 %"');
    expect(csv).toContain(
      '"Coefficients du test";"Fixe × 1,00 ; mensuel × 1,25 ; annuel × 1,25"',
    );
    expect(csv).toContain('"Garder une solution standard"');
    expect(csv).toContain('"Coûts fixes (€)"');
    expect(csv).toContain("ni tarif de marché, ni devis.");
  });

  it("does not export a misleading partial result when inputs are invalid", () => {
    const inputs = cloneCrmTcoInputs(CONTROLLED_INPUTS);
    inputs.reconfigure.initial = Number.NaN;
    const calculation = calculateCrmTco(inputs, 36, "central");

    expect(buildCrmTcoSummary(inputs, calculation)).toBe("");
    expect(buildCrmTcoCsv(inputs, calculation)).toBe("");
  });
});
