import { describe, expect, it } from "vitest";
import {
  REQUIRED_APPLICATION_ROI_COST_CATEGORIES,
  calculateApplicationRoi,
  type ApplicationRoiCostItem,
  type ApplicationRoiInputs,
} from "./application-roi";

const coreHistoricalCosts: ApplicationRoiCostItem[] = [
  {
    id: "cadrage",
    label: "Cadrage",
    category: "cadrage",
    kind: "cash",
    timing: "decision",
    knowledge: "known",
    amount: 4000,
  },
  {
    id: "realisation-integrations",
    label: "Réalisation et intégrations — enveloppe indivisible",
    category: "realisation",
    alsoCovers: ["integrations"],
    kind: "cash",
    timing: "decision",
    knowledge: "known",
    amount: 26000,
  },
  {
    id: "migration-formation",
    label: "Migration et formation — enveloppe indivisible",
    category: "migration",
    alsoCovers: ["formation-change"],
    kind: "cash",
    timing: "decision",
    knowledge: "known",
    amount: 2400,
  },
  {
    id: "initial-internal",
    label: "Temps interne initial",
    category: "temps-interne",
    kind: "internal-opportunity",
    timing: "decision",
    knowledge: "known",
    amount: 3600,
  },
  {
    id: "hosting",
    label: "Hébergement et surveillance",
    category: "licences-hebergement",
    kind: "cash",
    timing: "monthly-active",
    knowledge: "known",
    amount: 150,
  },
  {
    id: "maintenance",
    label: "Support et maintenance",
    category: "support-maintenance",
    kind: "cash",
    timing: "monthly-active",
    knowledge: "known",
    amount: 250,
  },
  {
    id: "exit",
    label: "Sortie et réversibilité",
    category: "sortie",
    kind: "cash",
    timing: "exit",
    knowledge: "known",
    amount: 1200,
  },
  {
    id: "security-zero-assumption",
    label: "Sécurité et conformité — hypothèse fictive à 0 €",
    category: "securite-conformite",
    kind: "cash",
    timing: "decision",
    knowledge: "known",
    amount: 0,
  },
  {
    id: "evolutions-zero-assumption",
    label: "Évolutions — hypothèse fictive à 0 €",
    category: "evolutions",
    kind: "cash",
    timing: "decision",
    knowledge: "known",
    amount: 0,
  },
  {
    id: "double-run-zero-assumption",
    label: "Double exploitation — hypothèse fictive à 0 €",
    category: "double-run",
    kind: "cash",
    timing: "decision",
    knowledge: "known",
    amount: 0,
  },
];

function completeCosts(
  costs: ApplicationRoiCostItem[],
): ApplicationRoiCostItem[] {
  const present = new Set(costs.map((cost) => cost.category));
  const explicitNotApplicable = REQUIRED_APPLICATION_ROI_COST_CATEGORIES.filter(
    (category) => !present.has(category),
  ).map(
    (category): ApplicationRoiCostItem => ({
      id: `na-${category}`,
      label: `${category} non applicable`,
      category,
      kind: "cash",
      timing: "decision",
      knowledge: "not-applicable",
      amount: null,
    }),
  );

  return [...costs, ...explicitNotApplicable];
}

const historical: ApplicationRoiInputs = {
  horizonMonths: 48,
  goLiveMonth: 5,
  rampMonths: 0,
  annualHoursOnTask: 723.2,
  avoidableCashHourlyOutlay: 0,
  economicHourlyValue: 36,
  technicallyRemovablePct: 100,
  adoptionPct: 100,
  laborCashRemovalPct: 0,
  usefulReallocationPct: 60,
  annualAvoidableCashCost: 2400,
  cashAvoidanceRealizationPct: 70,
  costs: coreHistoricalCosts,
};

function expectOk(input: ApplicationRoiInputs) {
  const result = calculateApplicationRoi(input);
  expect(result.status).toBe("OK");
  if (result.status !== "OK") {
    throw new Error(result.reasons.join("\n"));
  }
  return result;
}

describe("calculateApplicationRoi", () => {
  it("reproduces the 48-month historical oracle without a ramp", () => {
    const result = expectOk(historical);

    expect(result.activeMonths).toBe(44);
    expect(result.cashTco).toBeCloseTo(51200, 8);
    expect(result.economicTco).toBeCloseTo(54800, 8);
    expect(result.cashBenefits).toBeCloseTo(6160, 8);
    expect(result.economicBenefits).toBeCloseTo(63437.44, 8);
    expect(result.cashRoiPct.value).toBeCloseTo(-87.96875, 8);
    expect(result.economicRoiPct.value).toBeCloseTo(15.7617518, 7);
    expect(result.durableCashPaybackMonth).toBeNull();
    expect(result.durableEconomicPaybackMonth).toBe(39);
    expect(result.monthlyFlows[38].cumulativeEconomic).toBeCloseTo(
      -580.16,
      8,
    );
    expect(result.monthlyFlows[39].cumulativeEconomic).toBeCloseTo(461.6, 8);
    expect(result.monthlyFlows[48].cumulativeEconomic).toBeCloseTo(
      8637.44,
      8,
    );
  });

  it("reproduces the prudent economic ROI oracle", () => {
    const result = expectOk({
      ...historical,
      usefulReallocationPct: 35,
      cashAvoidanceRealizationPct: 40,
    });

    expect(result.cashBenefits).toBeCloseTo(3520, 8);
    expect(result.economicBenefits).toBeCloseTo(36931.84, 8);
    expect(result.economicRoiPct.value).toBeCloseTo(-32.6061314, 7);
  });

  it("applies the ramp from the first active month without shifting go-live", () => {
    const result = expectOk({
      ...historical,
      horizonMonths: 6,
      goLiveMonth: 3,
      rampMonths: 3,
      costs: completeCosts([]),
    });

    expect(result.monthlyFlows.map((flow) => flow.rampFactor)).toEqual([
      0,
      0,
      0,
      1 / 3,
      2 / 3,
      1,
      1,
    ]);
  });

  it("reproduces the exact ramped benefit and durable payback oracle", () => {
    const result = expectOk({
      ...historical,
      horizonMonths: 6,
      goLiveMonth: 3,
      rampMonths: 3,
      annualHoursOnTask: 1200,
      economicHourlyValue: 1,
      usefulReallocationPct: 100,
      annualAvoidableCashCost: 0,
      cashAvoidanceRealizationPct: 0,
      costs: completeCosts([
        {
          id: "ramp-investment",
          label: "Investissement",
          category: "realisation",
          kind: "cash",
          timing: "decision",
          knowledge: "known",
          amount: 120,
        },
      ]),
    });

    expect(result.economicBenefits).toBeCloseTo(300, 10);
    expect(result.monthlyFlows[4].cumulativeEconomic).toBeCloseTo(-20, 10);
    expect(result.monthlyFlows[5].cumulativeEconomic).toBeCloseTo(80, 10);
    expect(result.firstEconomicCrossingMonth).toBe(5);
    expect(result.durableEconomicPaybackMonth).toBe(5);
    expect(result.economicPaybackStatus).toBe("REACHED");
  });

  it("keeps the observed fractions when the horizon ends before the ramp", () => {
    const result = expectOk({
      ...historical,
      horizonMonths: 12,
      goLiveMonth: 10,
      rampMonths: 6,
      annualHoursOnTask: 12,
      economicHourlyValue: 12,
      usefulReallocationPct: 100,
      annualAvoidableCashCost: 0,
      cashAvoidanceRealizationPct: 0,
      costs: completeCosts([]),
    });

    expect(result.activeMonths).toBe(3);
    expect(result.monthlyFlows.slice(10).map((flow) => flow.rampFactor)).toEqual([
      1 / 6,
      2 / 6,
      3 / 6,
    ]);
    expect(result.economicBenefits).toBeCloseTo(12, 12);
  });

  it("counts go-live on the last month as exactly one active month", () => {
    const result = expectOk({
      ...historical,
      horizonMonths: 12,
      goLiveMonth: 12,
      rampMonths: 1,
      costs: completeCosts([]),
    });

    expect(result.activeMonths).toBe(1);
    expect(result.monthlyFlows.filter((flow) => flow.active)).toHaveLength(1);
    expect(result.monthlyFlows[12].economicBenefits).toBeGreaterThan(0);
  });

  it("represents double-run as an exact inclusive monthly range", () => {
    const result = expectOk({
      ...historical,
      horizonMonths: 6,
      goLiveMonth: 3,
      costs: completeCosts([
        {
          id: "double-run",
          label: "Double exploitation",
          category: "double-run",
          kind: "cash",
          timing: "monthly-range",
          knowledge: "known",
          amount: 100,
          startMonth: 2,
          endMonth: 4,
        },
      ]),
    });

    expect(result.cashTco).toBe(300);
    expect(
      result.monthlyFlows
        .filter((flow) => flow.cashCosts === 100)
        .map((flow) => flow.month),
    ).toEqual([2, 3, 4]);
  });

  it("supports a dated one-off cash flow", () => {
    const result = expectOk({
      ...historical,
      horizonMonths: 6,
      goLiveMonth: 3,
      costs: completeCosts([
        {
          id: "security-review",
          label: "Revue de sécurité",
          category: "securite-conformite",
          kind: "cash",
          timing: "month",
          knowledge: "known",
          amount: 750,
          month: 4,
        },
      ]),
    });

    expect(result.cashTco).toBe(750);
    expect(result.monthlyFlows[4].cashCosts).toBe(750);
  });

  it("counts an exit cost once at the horizon and nowhere else", () => {
    const result = expectOk(historical);
    const exitMonths = result.monthlyFlows.filter(
      (flow) => flow.cashCosts === 1600,
    );

    expect(exitMonths.map((flow) => flow.month)).toEqual([48]);
    expect(result.monthlyFlows[47].cashCosts).toBe(400);
  });

  it("keeps first crossing separate when the exit cost cancels payback", () => {
    const result = expectOk({
      ...historical,
      horizonMonths: 3,
      goLiveMonth: 1,
      annualHoursOnTask: 720,
      economicHourlyValue: 1,
      usefulReallocationPct: 100,
      annualAvoidableCashCost: 0,
      cashAvoidanceRealizationPct: 0,
      costs: completeCosts([
        {
          id: "initial",
          label: "Investissement",
          category: "realisation",
          kind: "cash",
          timing: "decision",
          knowledge: "known",
          amount: 100,
        },
        {
          id: "exit",
          label: "Sortie",
          category: "sortie",
          kind: "cash",
          timing: "exit",
          knowledge: "known",
          amount: 100,
        },
      ]),
    });

    expect(result.firstEconomicCrossingMonth).toBe(2);
    expect(result.durableEconomicPaybackMonth).toBeNull();
    expect(result.economicPaybackStatus).toBe("NOT_REACHED");
    expect(result.monthlyFlows[3].cumulativeEconomic).toBeCloseTo(-20, 8);
  });

  it("does not claim payback before a later cost creates an investment deficit", () => {
    const result = expectOk({
      ...historical,
      horizonMonths: 3,
      goLiveMonth: 1,
      annualHoursOnTask: 1200,
      economicHourlyValue: 1,
      usefulReallocationPct: 100,
      annualAvoidableCashCost: 0,
      cashAvoidanceRealizationPct: 0,
      costs: completeCosts([
        {
          id: "late-cost",
          label: "Coût tardif",
          category: "realisation",
          kind: "cash",
          timing: "month",
          knowledge: "known",
          amount: 100,
          month: 3,
        },
      ]),
    });

    expect(result.economicTco).toBe(100);
    expect(result.monthlyFlows[2].cumulativeEconomic).toBe(200);
    expect(result.monthlyFlows[3].cumulativeEconomic).toBe(200);
    expect(result.firstEconomicCrossingMonth).toBeNull();
    expect(result.durableEconomicPaybackMonth).toBeNull();
    expect(result.economicPaybackStatus).toBe("NO_FINANCING_DEFICIT");
  });

  it("separates marginal cash labor outlay from economic capacity value", () => {
    const result = expectOk({
      ...historical,
      horizonMonths: 12,
      goLiveMonth: 1,
      annualHoursOnTask: 100,
      avoidableCashHourlyOutlay: 10,
      economicHourlyValue: 50,
      laborCashRemovalPct: 20,
      usefulReallocationPct: 30,
      annualAvoidableCashCost: 0,
      cashAvoidanceRealizationPct: 0,
      costs: completeCosts([]),
    });

    expect(result.laborCashBenefits).toBeCloseTo(200, 10);
    expect(result.usefulCapacityBenefits).toBe(1500);
    expect(result.economicBenefits).toBe(1700);
  });

  it("returns minus 100 percent for known zero adoption and stops for unknown adoption", () => {
    const knownZero = expectOk({
      ...historical,
      adoptionPct: 0,
    });

    expect(knownZero.cashBenefits).toBe(0);
    expect(knownZero.economicBenefits).toBe(0);
    expect(knownZero.cashRoiPct.value).toBe(-100);
    expect(knownZero.economicRoiPct.value).toBe(-100);

    expect(
      calculateApplicationRoi({
        ...historical,
        adoptionPct: null,
      }).status,
    ).toBe("STOP");
  });

  it("describes an unknown labor saving without the cash shorthand", () => {
    const result = calculateApplicationRoi({
      ...historical,
      laborCashRemovalPct: null,
    });

    expect(result.status).toBe("STOP");
    if (result.status === "STOP") {
      expect(result.reasons.join(" ")).toContain(
        "une dépense réellement supprimée",
      );
      expect(result.reasons.join(" ")).not.toContain("cash supprimé");
    }
  });

  it("returns non-applicable ROI and payback instead of infinity when TCO is zero", () => {
    const result = expectOk({
      ...historical,
      costs: completeCosts([]),
    });

    expect(result.cashTco).toBe(0);
    expect(result.economicTco).toBe(0);
    expect(result.cashRoiPct).toEqual({
      status: "NOT_APPLICABLE",
      value: null,
    });
    expect(result.economicRoiPct).toEqual({
      status: "NOT_APPLICABLE",
      value: null,
    });
    expect(result.firstCashCrossingMonth).toBeNull();
    expect(result.durableEconomicPaybackMonth).toBeNull();
    expect(result.cashPaybackStatus).toBe("NOT_APPLICABLE");
    expect(result.economicPaybackStatus).toBe("NOT_APPLICABLE");
  });

  it("keeps cash ROI non-applicable when only an internal economic cost exists", () => {
    const result = expectOk({
      ...historical,
      costs: historical.costs.map((cost) =>
        cost.id === "initial-internal"
          ? { ...cost, amount: 100 }
          : {
              ...cost,
              knowledge: "not-applicable" as const,
              amount: null,
            },
      ),
    });

    expect(result.cashTco).toBe(0);
    expect(result.economicTco).toBe(100);
    expect(result.cashRoiPct).toEqual({
      status: "NOT_APPLICABLE",
      value: null,
    });
    expect(result.economicRoiPct.status).toBe("VALUE");
    expect(result.economicRoiPct.value).toBeGreaterThan(0);
  });

  it("distinguishes an exact zero ROI from a positive ROI", () => {
    const result = expectOk({
      ...historical,
      horizonMonths: 1,
      goLiveMonth: 1,
      rampMonths: 0,
      annualHoursOnTask: 0,
      avoidableCashHourlyOutlay: 0,
      economicHourlyValue: 0,
      technicallyRemovablePct: 0,
      adoptionPct: 100,
      laborCashRemovalPct: 0,
      usefulReallocationPct: 0,
      annualAvoidableCashCost: 1200,
      cashAvoidanceRealizationPct: 100,
      costs: historical.costs.map((cost) =>
        cost.id === "cadrage"
          ? { ...cost, amount: 100 }
          : {
              ...cost,
              knowledge: "not-applicable" as const,
              amount: null,
            },
      ),
    });

    expect(result.cashTco).toBe(100);
    expect(result.economicTco).toBe(100);
    expect(result.cashBenefits).toBe(100);
    expect(result.economicBenefits).toBe(100);
    expect(result.cashRoiPct).toEqual({ status: "VALUE", value: 0 });
    expect(result.economicRoiPct).toEqual({ status: "VALUE", value: 0 });
  });

  it("stops when finite inputs overflow a derived benefit", () => {
    const result = calculateApplicationRoi({
      ...historical,
      annualHoursOnTask: Number.MAX_VALUE,
      economicHourlyValue: Number.MAX_VALUE,
      usefulReallocationPct: 100,
      costs: completeCosts([]),
    });

    expect(result).toEqual({
      status: "STOP",
      reasons: [
        "Les entrées produisent une valeur hors de la plage numérique exploitable du calculateur : réduisez leur échelle avant de recalculer.",
      ],
    });
    expect(JSON.stringify(result)).not.toMatch(/null.*ROI|Infinity|NaN/);
  });

  it("stops when repeated finite costs overflow a cumulative flow", () => {
    const result = calculateApplicationRoi({
      ...historical,
      horizonMonths: 2,
      goLiveMonth: 1,
      annualHoursOnTask: 0,
      annualAvoidableCashCost: 0,
      costs: completeCosts([
        {
          id: "extreme-recurring",
          label: "Coût récurrent extrême",
          category: "licences-hebergement",
          kind: "cash",
          timing: "monthly-active",
          knowledge: "known",
          amount: Number.MAX_VALUE,
        },
      ]),
    });

    expect(result.status).toBe("STOP");
    if (result.status === "STOP") {
      expect(result.reasons.join(" ")).toContain("plage numérique exploitable");
    }
  });

  it("stops when a finite but tiny TCO makes the ROI overflow", () => {
    const result = calculateApplicationRoi({
      ...historical,
      costs: completeCosts([
        {
          id: "tiny-investment",
          label: "Investissement numérique minimal",
          category: "realisation",
          kind: "cash",
          timing: "decision",
          knowledge: "known",
          amount: Number.MIN_VALUE,
        },
      ]),
    });

    expect(result.status).toBe("STOP");
    if (result.status === "STOP") {
      expect(result.reasons.join(" ")).toContain("plage numérique exploitable");
    }
  });

  it("stops on null or invalid horizon, go-live and ramp values", () => {
    const invalidCases: Array<Partial<ApplicationRoiInputs>> = [
      { horizonMonths: null },
      { horizonMonths: 0 },
      { horizonMonths: 49 },
      { horizonMonths: 12.5 },
      { goLiveMonth: null },
      { goLiveMonth: 0 },
      { goLiveMonth: 49 },
      { rampMonths: null },
      { rampMonths: -1 },
      { rampMonths: 2.5 },
    ];

    for (const invalid of invalidCases) {
      expect(
        calculateApplicationRoi({ ...historical, ...invalid }).status,
      ).toBe("STOP");
    }
  });

  it("stops on invalid dated or ranged costs", () => {
    const invalidCosts: ApplicationRoiCostItem[] = [
      {
        id: "bad-month",
        label: "Hors horizon",
        category: "realisation",
        kind: "cash",
        timing: "month",
        knowledge: "known",
        amount: 1,
        month: 49,
      },
      {
        id: "bad-range",
        label: "Plage inversée",
        category: "double-run",
        kind: "cash",
        timing: "monthly-range",
        knowledge: "known",
        amount: 1,
        startMonth: 4,
        endMonth: 3,
      },
    ];

    for (const cost of invalidCosts) {
      expect(
        calculateApplicationRoi({
          ...historical,
          costs: completeCosts([cost]),
        }).status,
      ).toBe("STOP");
    }
  });

  it("stops on duplicate identifiers and any unstudied cost", () => {
    const duplicate = calculateApplicationRoi({
      ...historical,
      costs: [
        ...historical.costs,
        { ...historical.costs[0] },
      ],
    });
    const unknown = calculateApplicationRoi({
      ...historical,
      costs: completeCosts([
        {
          id: "security",
          label: "Sécurité à chiffrer",
          category: "securite-conformite",
          kind: "cash",
          timing: "go-live",
          knowledge: "unknown",
          amount: null,
        },
      ]),
    });

    expect(duplicate.status).toBe("STOP");
    expect(unknown.status).toBe("STOP");
  });

  it("requires every cost family to be known, zero or explicitly not applicable", () => {
    const incompleteCosts = coreHistoricalCosts.filter(
      (cost) => cost.category !== "securite-conformite",
    );
    expect(
      calculateApplicationRoi({
        ...historical,
        costs: incompleteCosts,
      }).status,
    ).toBe("STOP");

    expect(
      calculateApplicationRoi({
        ...historical,
        costs: completeCosts(incompleteCosts),
      }).status,
    ).toBe("OK");
  });

  it("distinguishes a known zero from an explicit not-applicable cost", () => {
    const costs = completeCosts([
      {
        id: "known-zero-security",
        label: "Sécurité — hypothèse connue à zéro",
        category: "securite-conformite",
        kind: "cash",
        timing: "go-live",
        knowledge: "known",
        amount: 0,
      },
    ]);
    const result = expectOk({ ...historical, costs });

    expect(result.economicTco).toBe(0);
    expect(
      costs.find((cost) => cost.category === "securite-conformite")?.knowledge,
    ).toBe("known");
    expect(
      costs.find((cost) => cost.category === "migration")?.knowledge,
    ).toBe("not-applicable");
  });

  it("refuses to double count labor between cash removal and useful capacity", () => {
    expect(
      calculateApplicationRoi({
        ...historical,
        laborCashRemovalPct: 50,
        usefulReallocationPct: 60,
      }).status,
    ).toBe("STOP");

    const valid = expectOk({
      ...historical,
      avoidableCashHourlyOutlay: 10,
      laborCashRemovalPct: 40,
      usefulReallocationPct: 60,
    });
    expect(valid.economicBenefits).toBeCloseTo(
      valid.cashBenefits + valid.usefulCapacityBenefits,
      10,
    );
  });

  it("keeps attributable non-labor cash independent from technical labor removal", () => {
    const result = expectOk({
      ...historical,
      technicallyRemovablePct: 0,
      adoptionPct: 50,
      annualAvoidableCashCost: 2400,
      cashAvoidanceRealizationPct: 50,
      usefulReallocationPct: 0,
      costs: completeCosts([]),
    });

    expect(result.laborCashBenefits).toBe(0);
    expect(result.usefulCapacityBenefits).toBe(0);
    expect(result.avoidedCashBenefits).toBeCloseTo(2200, 8);
    expect(result.cashBenefits).toBeCloseTo(2200, 8);
  });

  it("does not pre-round monthly ramps before summing the horizon", () => {
    const result = expectOk({
      ...historical,
      horizonMonths: 3,
      goLiveMonth: 1,
      rampMonths: 3,
      annualHoursOnTask: 1,
      economicHourlyValue: 1,
      annualAvoidableCashCost: 0,
      cashAvoidanceRealizationPct: 0,
      usefulReallocationPct: 100,
      costs: completeCosts([]),
    });

    expect(result.economicBenefits).toBeCloseTo(1 / 6, 12);
  });

  it("reproduces an option-simple oracle where the alternative wins", () => {
    const result = expectOk({
      horizonMonths: 48,
      goLiveMonth: 2,
      rampMonths: 0,
      annualHoursOnTask: 723.2,
      avoidableCashHourlyOutlay: 0,
      economicHourlyValue: 36,
      technicallyRemovablePct: 100,
      adoptionPct: 100,
      laborCashRemovalPct: 0,
      usefulReallocationPct: 25,
      annualAvoidableCashCost: 2400,
      cashAvoidanceRealizationPct: 40,
      costs: completeCosts([
        {
          id: "simple-initial",
          label: "Configuration",
          category: "realisation",
          kind: "cash",
          timing: "decision",
          knowledge: "known",
          amount: 4000,
        },
        {
          id: "simple-monthly",
          label: "Abonnement",
          category: "licences-hebergement",
          kind: "cash",
          timing: "monthly-active",
          knowledge: "known",
          amount: 75,
        },
        {
          id: "simple-exit",
          label: "Sortie",
          category: "sortie",
          kind: "cash",
          timing: "exit",
          knowledge: "known",
          amount: 475,
        },
      ]),
    });

    expect(result.cashTco).toBeCloseTo(8000, 8);
    expect(result.economicTco).toBeCloseTo(8000, 8);
    expect(result.cashBenefits).toBeCloseTo(3760, 8);
    expect(result.economicBenefits).toBeCloseTo(29252.8, 8);
    expect(result.cashRoiPct.value).toBeCloseTo(-53, 8);
    expect(result.economicRoiPct.value).toBeCloseTo(265.66, 2);
    expect(result.durableEconomicPaybackMonth).toBe(9);
  });
});
