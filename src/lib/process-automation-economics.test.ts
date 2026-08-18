import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import {
  AUTOMATION_OPTION_ASSUMPTIONS,
  calculateAutomationOptionValue,
  calculateKnownBreakEvenUsefulRate,
  calculateKnownCapacityScenario,
} from "./process-automation-economics";

function option(id: "native" | "connector" | "custom") {
  const match = AUTOMATION_OPTION_ASSUMPTIONS.find(
    (candidate) => candidate.id === id,
  );
  if (!match) throw new Error(`Option introuvable : ${id}`);
  return match;
}

function csvNumber(value: string) {
  return Number(value.replace(",", "."));
}

describe("process automation economics", () => {
  it.each([
    [132, "native", 36, 867.825],
    [132, "connector", 36, -4_126.06],
    [132, "custom", 36, -19_722.72],
    [600, "native", 36, 16_166.55],
    [600, "connector", 36, 28_109],
    [600, "custom", 36, 22_338],
    [1_800, "native", 36, 55_394.05],
    [1_800, "connector", 36, 110_763],
    [1_800, "custom", 36, 130_186],
  ] as const)(
    "calculates %s h/year, %s, %s months",
    (hours, optionId, horizon, expectedNet) => {
      expect(
        calculateAutomationOptionValue(
          hours,
          horizon,
          option(optionId),
        ).netEconomicValue,
      ).toBeCloseTo(expectedNet, 2);
    },
  );

  it.each([
    [12, "native", 3_866.55],
    [12, "connector", 2_537],
    [12, "custom", -11_694],
    [36, "native", 16_166.55],
    [36, "connector", 28_109],
    [36, "custom", 22_338],
    [60, "native", 28_466.55],
    [60, "connector", 53_681],
    [60, "custom", 56_370],
  ] as const)(
    "keeps the 600 h/year comparison reproducible at %s months for %s",
    (horizon, optionId, expectedNet) => {
      expect(
        calculateAutomationOptionValue(
          600,
          horizon,
          option(optionId),
        ).netEconomicValue,
      ).toBeCloseTo(expectedNet, 2);
    },
  );

  it.each([
    [0, 0, -100, null],
    [0.2, 3_049.8, -43.222211, 274.936535],
    [0.4, 6_099.6, 13.555578, 28.289446],
    [0.49, 7_472.01, 39.105583, 20.153761],
    [0.7, 10_674.3, 98.722261, 12.060338],
  ] as const)(
    "uses one 225 euro/month cost basis for useful rate %s",
    (rate, annualProxy, roi, payback) => {
      const result = calculateKnownCapacityScenario(rate);

      expect(result.totalKnownCost).toBe(16_114.4);
      expect(result.annualCapacityProxy).toBeCloseTo(annualProxy, 2);
      expect(result.roiPercent).toBeCloseTo(roi, 2);
      if (payback === null) {
        expect(result.paybackMonths).toBeNull();
      } else {
        expect(result.paybackMonths).toBeCloseTo(payback, 2);
      }
    },
  );

  it("calculates the same 35.23 percent break-even threshold", () => {
    expect(calculateKnownBreakEvenUsefulRate()).toBeCloseTo(0.3523, 4);
  });

  it("keeps every downloadable comparison row reproducible from its own assumptions", () => {
    const rows = readFileSync(
      join(
        process.cwd(),
        "public/ressources/comparaison-options-automatisation.csv",
      ),
      "utf8",
    )
      .trim()
      .split(/\r?\n/)
      .map((row) => row.split(";"));
    const headers = rows[0];
    const column = (label: string) => {
      const index = headers.indexOf(label);
      if (index < 0) throw new Error(`Colonne CSV introuvable : ${label}`);
      return index;
    };
    const optionIds = new Map<string, "native" | "connector" | "custom">([
      ["Fonction native", "native"],
      ["Connecteur", "connector"],
      ["Sur-mesure", "custom"],
    ]);

    for (const row of rows.slice(1)) {
      const optionId = optionIds.get(row[column("Option")]);
      if (!optionId) throw new Error(`Option CSV inconnue : ${row[4]}`);
      const result = calculateAutomationOptionValue(
        csvNumber(row[column("Charge actuelle h/an")]),
        csvNumber(row[column("Horizon mois")]),
        option(optionId),
        csvNumber(row[column("Coût horaire de référence HT")]),
      );

      expect(csvNumber(row[column("Mois actifs")])).toBe(result.activeMonths);
      expect(
        csvNumber(row[column("Mois équivalents à pleine couverture")]),
      ).toBe(result.equivalentFullCoverageMonths);
      expect(
        csvNumber(row[column("Capacité brute modélisée HT")]),
      ).toBeCloseTo(result.capacityProxy, 2);
      expect(
        csvNumber(row[column("Coût économique modélisé HT")]),
      ).toBeCloseTo(result.economicCost, 2);
      expect(
        csvNumber(row[column("Valeur nette économique")]),
      ).toBeCloseTo(result.netEconomicValue, 2);
      expect(row[column("Convention de rampe")]).toContain("1/N");
    }
  });

  it("rejects invalid rates rather than clipping them silently", () => {
    expect(() => calculateKnownCapacityScenario(-0.01)).toThrow();
    expect(() => calculateKnownCapacityScenario(1.01)).toThrow();
  });
});
