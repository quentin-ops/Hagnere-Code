import { describe, expect, it } from "vitest";
import {
  buildTmaTcoCsv,
  buildTmaTcoSummary,
  calculateDowntimeImpact,
  calculateGovernanceHoursBreakEven,
  calculateTmaTco,
  calculateVariableDaysBreakEven,
  cloneTmaTcoInputs,
  TMA_TCO_EXAMPLE_INPUTS,
  TMA_TCO_PATHS,
} from "./tma-tco";

function confirmedExampleInputs() {
  const inputs = cloneTmaTcoInputs(TMA_TCO_EXAMPLE_INPUTS);

  for (const path of TMA_TCO_PATHS) {
    inputs[path.key].hasUnknownCosts = false;
  }

  return inputs;
}

describe("TMA TCO calculation", () => {
  it("shows the seven partial examples without inventing a winner", () => {
    const result = calculateTmaTco(
      cloneTmaTcoInputs(TMA_TCO_EXAMPLE_INPUTS),
      12,
      60,
    );

    expect(result.isValid).toBe(true);
    expect(
      Object.fromEntries(result.results.map((item) => [item.path, item.total])),
    ).toEqual({
      hybrid: 80340,
      "capacity-annual-carry": 81360,
      "time-spent": 87600,
      "capacity-no-carry": 89010,
      "defined-lots": 92280,
      "on-demand": 103440,
      "internal-hire": 108240,
    });
    expect(result.lowestTotal).toBeNull();
    expect(
      result.results.every((item) => item.differenceFromLowest === null),
    ).toBe(true);
  });

  it("ranks only options whose important costs have been confirmed", () => {
    const inputs = confirmedExampleInputs();
    const complete = calculateTmaTco(inputs, 12, 60);

    expect(complete.lowestTotal).toBe(80340);
    expect(
      complete.results.find((item) => item.path === "hybrid")
        ?.differenceFromLowest,
    ).toBe(0);

    inputs.hybrid.hasUnknownCosts = true;
    const hybridExcluded = calculateTmaTco(inputs, 12, 60);

    expect(hybridExcluded.lowestTotal).toBe(81360);
    expect(
      hybridExcluded.results.find((item) => item.path === "hybrid")
        ?.differenceFromLowest,
    ).toBeNull();
  });

  it("keeps one-off costs unique while annual costs follow the horizon", () => {
    const inputs = cloneTmaTcoInputs(TMA_TCO_EXAMPLE_INPUTS);
    inputs.hybrid.oneOff = 5000;
    inputs.hybrid.residualAnnual = 1200;

    const result = calculateTmaTco(inputs, 24, 60);
    const hybrid = result.results.find((item) => item.path === "hybrid");

    expect(hybrid?.providerTotal).toBe(148200);
    expect(hybrid?.internalTotal).toBe(12480);
    expect(hybrid?.oneOff).toBe(5000);
    expect(hybrid?.residualTotal).toBe(2400);
    expect(hybrid?.total).toBe(168080);
  });

  it("rejects negative, empty and overflowing assumptions", () => {
    const negative = cloneTmaTcoInputs(TMA_TCO_EXAMPLE_INPUTS);
    negative.hybrid.providerAnnual = -1;
    expect(calculateTmaTco(negative, 12, 60).isValid).toBe(false);

    const missing = cloneTmaTcoInputs(TMA_TCO_EXAMPLE_INPUTS);
    missing["time-spent"].oneOff = Number.NaN;
    expect(calculateTmaTco(missing, 12, 60).isValid).toBe(false);

    const overflowing = cloneTmaTcoInputs(TMA_TCO_EXAMPLE_INPUTS);
    overflowing["internal-hire"].providerAnnual = Number.MAX_VALUE;
    expect(calculateTmaTco(overflowing, 36, 60).isValid).toBe(false);
  });

  it("recomputes downtime and decision boundaries", () => {
    expect(
      calculateDowntimeImpact({
        peopleBlocked: 15,
        hourlyCost: 45,
        durationHours: 4,
        lostTimeShare: 0.6,
        unrecoveredContribution: 2000,
      }),
    ).toBe(3620);
    expect(calculateVariableDaysBreakEven(81360, 44640, 850)).toBeCloseTo(
      43.2,
      10,
    );
    expect(calculateGovernanceHoursBreakEven(80340, 72000, 60)).toBeCloseTo(
      2.673076923,
      8,
    );
  });

  it("exports a qualified summary and a stable semicolon CSV", () => {
    const inputs = cloneTmaTcoInputs(TMA_TCO_EXAMPLE_INPUTS);
    const calculation = calculateTmaTco(inputs, 12, 60);
    const summary = buildTmaTcoSummary(inputs, calculation);
    const csv = buildTmaTcoCsv(inputs, calculation);

    expect(summary).toContain("hypothèses fictives et modifiables");
    expect(summary).toContain("Formule hybride : 80");
    expect(summary).toContain(
      "Aucun classement : chaque option conserve au moins un poste important à confirmer",
    );
    expect(csv.split("\n")).toHaveLength(8);
    expect(csv.split("\n").every((row) => row.split(";").length === 13)).toBe(
      true,
    );
    expect(csv).toContain('"Postes importants à confirmer"');
    expect(csv).toContain('"non classé"');
    expect(csv).not.toContain('"TCO"');
    expect(csv).toContain('"80340"');
  });
});
