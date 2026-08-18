import { describe, expect, it } from "vitest";
import {
  MOBILE_GATE_IDS,
  MOBILE_TCO_FIELDS,
  addCriticalModuleDays,
  buildMobileDecisionReport,
  calculateMobileTco,
  createEmptyMobileDecisionContext,
  createEmptyMobileGateEvidence,
  normalizeMobileSensitivityExtraDays,
  qualifyMobileCandidate,
  type MobileTcoInput,
} from "./mobile-framework-decision";

const OPTION_A: MobileTcoInput = {
  dayRate: 650,
  internalDayRate: 500,
  initialDays: 116,
  initialFixedCost: 3_000,
  technicalMaintenanceDaysPerYear: 20,
  productEvolutionDaysPerYear: 12,
  incidentAndSecurityDaysPerYear: 6,
  internalDaysPerYear: 8,
  servicesPerYear: 4_800,
  exitDays: 12,
};

const OPTION_B: MobileTcoInput = {
  ...OPTION_A,
  initialDays: 126,
  technicalMaintenanceDaysPerYear: 18,
};

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function numberFromReport(value: string): number {
  return Number(
    value
      .replace(/[\s\u202f\u00a0]/g, "")
      .replace(",", ".")
      .replace(/[^\d.-]/g, ""),
  );
}

describe("mobile framework decision calculations", () => {
  it("reproduces the fictitious 12, 36 and 60 month example", () => {
    expect(calculateMobileTco(OPTION_A, 12)).toMatchObject({
      kind: "known",
      total: 119_700,
    });
    expect(calculateMobileTco(OPTION_A, 36)).toMatchObject({
      kind: "known",
      total: 186_700,
    });
    expect(calculateMobileTco(OPTION_A, 60)).toMatchObject({
      kind: "known",
      total: 253_700,
    });

    expect(calculateMobileTco(OPTION_B, 12)).toMatchObject({
      kind: "known",
      total: 124_900,
    });
    expect(calculateMobileTco(OPTION_B, 36)).toMatchObject({
      kind: "known",
      total: 189_300,
    });
    expect(calculateMobileTco(OPTION_B, 60)).toMatchObject({
      kind: "known",
      total: 253_700,
    });
  });

  it("keeps a required unknown as ND instead of zero", () => {
    const result = calculateMobileTco(
      { ...OPTION_A, servicesPerYear: undefined },
      36,
    );

    expect(result).toEqual({
      kind: "unknown",
      horizonMonths: 36,
      missing: ["servicesPerYear"],
    });
  });

  it("shows how a critical module can reverse a small initial difference", () => {
    const withTwentyExtraDays = addCriticalModuleDays(OPTION_A, 20);
    const baseline = calculateMobileTco(OPTION_A, 12);
    const stressed = calculateMobileTco(withTwentyExtraDays, 12);

    expect(baseline.kind).toBe("known");
    expect(stressed.kind).toBe("known");
    if (baseline.kind === "known" && stressed.kind === "known") {
      expect(stressed.total - baseline.total).toBe(13_000);
    }
  });

  it("sanitizes negative and non-finite sensitivity while accepting zero", () => {
    for (const invalid of [-1, Number.NaN, Number.POSITIVE_INFINITY]) {
      expect(normalizeMobileSensitivityExtraDays(invalid)).toBeUndefined();
      expect(
        calculateMobileTco(addCriticalModuleDays(OPTION_A, invalid), 12),
      ).toEqual({
        kind: "unknown",
        horizonMonths: 12,
        missing: ["initialDays"],
      });
    }

    expect(normalizeMobileSensitivityExtraDays(0)).toBe(0);
    expect(addCriticalModuleDays(OPTION_A, 0)).toEqual(OPTION_A);
  });

  it("keeps pass empty, pass with spaces and fail empty unqualified", () => {
    const gates = createEmptyMobileGateEvidence();
    expect(qualifyMobileCandidate(gates)).toMatchObject({
      status: "unqualified",
      unknownGates: MOBILE_GATE_IDS,
    });

    for (const id of MOBILE_GATE_IDS) gates[id].status = "pass";
    expect(qualifyMobileCandidate(gates)).toMatchObject({
      status: "unqualified",
      unknownGates: MOBILE_GATE_IDS,
    });

    for (const id of MOBILE_GATE_IDS) gates[id].evidence = " \n\t ";
    expect(qualifyMobileCandidate(gates)).toMatchObject({
      status: "unqualified",
      unknownGates: MOBILE_GATE_IDS,
    });

    gates.critical_function.status = "fail";
    expect(qualifyMobileCandidate(gates)).toMatchObject({
      status: "unqualified",
      failedGates: [],
      unknownGates: MOBILE_GATE_IDS,
    });
  });

  it("qualifies seven evidenced passes and eliminates an evidenced fail", () => {
    const gates = createEmptyMobileGateEvidence();
    for (const id of MOBILE_GATE_IDS) {
      gates[id] = {
        status: "pass",
        evidence: `Build release, appareil et date — ${id}`,
      };
    }
    expect(qualifyMobileCandidate(gates)).toEqual({
      status: "qualified",
      failedGates: [],
      unknownGates: [],
    });

    gates.critical_function = {
      status: "fail",
      evidence: "Échec reproduit sur iPhone 12 et Pixel 7, build abc123.",
    };
    expect(qualifyMobileCandidate(gates)).toEqual({
      status: "eliminated",
      failedGates: ["critical_function"],
      unknownGates: [],
    });
  });

  it("keeps qualification and evidence coherent in the report", () => {
    const context = createEmptyMobileDecisionContext();
    for (const id of MOBILE_GATE_IDS) {
      context.candidates[0].gates[id].status = "pass";
    }

    let report = buildMobileDecisionReport(context);
    expect(report).toContain("Verdict des portes : NON QUALIFIÉE");
    expect(report).toContain("ND — statut PASS non étayé ; preuve requise");
    expect(report).not.toContain("PASS — preuve ND");

    for (const id of MOBILE_GATE_IDS) {
      context.candidates[0].gates[id].evidence =
        `Preuve datée sur appareil — ${id}`;
    }
    report = buildMobileDecisionReport(context);
    expect(report).toContain("Verdict des portes : QUALIFIÉE");
    expect(report).toContain(
      "PASS — Preuve datée sur appareil — critical_function",
    );

    context.candidates[0].gates.critical_function = {
      status: "fail",
      evidence: "Échec daté et reproduit sur la build release.",
    };
    report = buildMobileDecisionReport(context);
    expect(report).toContain(
      "Verdict des portes : ÉLIMINÉE — Fonction éliminatoire",
    );
    expect(report).toContain(
      "FAIL — Échec daté et reproduit sur la build release.",
    );
  });

  it("exports every TCO assumption and reconstructs scenario A from text", () => {
    const context = createEmptyMobileDecisionContext();
    context.candidates[0].tco = OPTION_A;
    context.candidates[0].sensitivityExtraDays = 20;
    const report = buildMobileDecisionReport(context);
    const reconstructed = {} as MobileTcoInput;

    for (const field of MOBILE_TCO_FIELDS) {
      const match = report.match(
        new RegExp(
          `^- ${escapeRegExp(field.label)} : (.+ ${escapeRegExp(field.unit)})$`,
          "m",
        ),
      );
      expect(match, field.label).not.toBeNull();
      reconstructed[field.key] = numberFromReport(match![1]);
    }

    expect(reconstructed).toEqual(OPTION_A);
    for (const horizon of [12, 36, 60] as const) {
      const expected = calculateMobileTco(reconstructed, horizon);
      const totalLine = report.match(
        new RegExp(`^TCO ${horizon} mois : (.+)$`, "m"),
      );
      expect(expected.kind).toBe("known");
      expect(totalLine).not.toBeNull();
      if (expected.kind === "known") {
        expect(numberFromReport(totalLine![1])).toBe(expected.total);
      }
    }

    expect(report).toContain(
      "Sensibilité — jours ajoutés au travail initial : 20 jours",
    );
    expect(report).toContain("Sensibilité 12 mois : 132");
    expect(report).toContain("Sensibilité 36 mois : 199");
    expect(report).toContain("Sensibilité 60 mois : 266");
    expect(report).not.toContain("+-");
  });

  it("exports every missing TCO field and all sensitivities as ND", () => {
    const context = createEmptyMobileDecisionContext();
    const report = buildMobileDecisionReport(context);

    for (const field of MOBILE_TCO_FIELDS) {
      expect(report).toContain(`- ${field.label} : ND (${field.unit})`);
    }
    expect(report).toContain("TCO 12 mois : ND");
    expect(report).toContain("TCO 36 mois : ND");
    expect(report).toContain("TCO 60 mois : ND");
    expect(report).toContain("Sensibilité 12 mois : ND");
    expect(report).toContain("Sensibilité 36 mois : ND");
    expect(report).toContain("Sensibilité 60 mois : ND");
    expect(report).toContain("NON QUALIFIÉE");
    expect(report).toContain("aucun vainqueur automatique");
    expect(report).not.toMatch(/React Native gagne|Flutter gagne/);
  });
});
