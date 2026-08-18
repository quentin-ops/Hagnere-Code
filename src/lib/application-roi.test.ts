import { describe, expect, it } from "vitest";
import {
  APPLICATION_ROI_EXAMPLE_INPUTS,
  APPLICATION_ROI_MODEL_VERSION,
  buildApplicationRoiCsv,
  buildApplicationRoiSummary,
  calculateApplicationRoi,
  cloneApplicationRoiInputs,
  equivalentFullBenefitMonths,
} from "./application-roi";

describe("application métier ROI calculation", () => {
  it("models a linear adoption ramp without inventing full benefits at launch", () => {
    expect(equivalentFullBenefitMonths(44, 6)).toBe(41.5);
    expect(equivalentFullBenefitMonths(46, 3)).toBe(45);
    expect(equivalentFullBenefitMonths(5, 1)).toBe(5);
    expect(equivalentFullBenefitMonths(0, 6)).toBe(0);
  });

  it("reproduces the documented fictional example and ranks on net value", () => {
    const calculation = calculateApplicationRoi(
      cloneApplicationRoiInputs(APPLICATION_ROI_EXAMPLE_INPUTS),
    );

    expect(calculation.isValid).toBe(true);
    expect(calculation.baselineCapacityValue).toBeCloseTo(104140.8, 8);
    expect(calculation.baselineCashBurden).toBeCloseTo(9600, 8);
    expect(calculation.baselineTotalBurden).toBeCloseTo(113740.8, 8);
    expect(calculation.comparableWinner).toBe("standard");
    expect(calculation.projectShareToMatchStandardPct).toBeCloseTo(
      79.084035256,
      6,
    );

    const standard = calculation.results?.standard;
    expect(APPLICATION_ROI_EXAMPLE_INPUTS.options.standard).toMatchObject({
      initialExternalCost: 13840,
      internalProjectHours: 60,
    });
    expect(standard?.equivalentFullBenefitMonths).toBe(45);
    expect(standard?.initialEconomicCost).toBeCloseTo(16000, 8);
    expect(standard?.totalBenefits).toBeCloseTo(54216, 8);
    expect(standard?.totalCost).toBeCloseTo(32000, 8);
    expect(standard?.netEconomicValue).toBeCloseTo(22216, 8);
    expect(standard?.roiPct).toBeCloseTo(69.425, 8);
    expect(standard?.paybackMonth).toBe(22);

    const project = calculation.results?.project;
    expect(project?.operatingMonths).toBe(44);
    expect(project?.equivalentFullBenefitMonths).toBe(41.5);
    expect(project?.capacityBenefit).toBeCloseTo(54023.04, 8);
    expect(project?.cashBenefit).toBeCloseTo(5810, 8);
    expect(project?.totalBenefits).toBeCloseTo(59833.04, 8);
    expect(project?.initialEconomicCost).toBeCloseTo(36000, 8);
    expect(project?.totalCost).toBeCloseTo(54800, 8);
    expect(project?.netEconomicValue).toBeCloseTo(5033.04, 8);
    expect(project?.roiPct).toBeCloseTo(9.184379562, 8);
    expect(project?.paybackMonth).toBe(43);
    expect(project?.requiredReusableHoursSharePct).toBeCloseTo(54.41011835, 8);
    expect(project?.maximumInitialEconomicCost).toBeCloseTo(41033.04, 8);
  });

  it("isolates the five documented sensitivity cases", () => {
    const calculation = calculateApplicationRoi(
      cloneApplicationRoiInputs(APPLICATION_ROI_EXAMPLE_INPUTS),
    );
    const sensitivity = Object.fromEntries(
      calculation.sensitivity.map((item) => [item.key, item.result]),
    );

    expect(sensitivity.central.netEconomicValue).toBeCloseTo(5033.04, 8);
    expect(sensitivity["delay-3"].netEconomicValue).toBeCloseTo(1907.76, 8);
    expect(sensitivity["delay-3"].roiPct).toBeCloseTo(3.559253731, 8);
    expect(sensitivity["delay-6"].netEconomicValue).toBeCloseTo(-1217.52, 8);
    expect(sensitivity["delay-6"].roiPct).toBeCloseTo(-2.32351145, 8);
    expect(sensitivity["horizon-24"].netEconomicValue).toBeCloseTo(-19969.2, 8);
    expect(sensitivity["horizon-24"].roiPct).toBeCloseTo(-44.179646018, 8);
    expect(sensitivity["cost-stress"].netEconomicValue).toBeCloseTo(
      -2166.96,
      8,
    );
    expect(sensitivity["cost-stress"].roiPct).toBeCloseTo(-3.495096774, 8);
  });

  it("refuses every decision output that depends on incomplete costs", () => {
    const inputs = cloneApplicationRoiInputs(APPLICATION_ROI_EXAMPLE_INPUTS);
    inputs.options.project.hasUnknownCosts = true;
    const calculation = calculateApplicationRoi(inputs);

    expect(calculation.isValid).toBe(true);
    expect(calculation.results?.project.totalCost).toBe(54800);
    expect(calculation.comparableWinner).toBeNull();
    expect(buildApplicationRoiSummary(inputs, calculation)).toContain(
      "aucun classement tant qu’un coût important reste à confirmer",
    );
    const summary = buildApplicationRoiSummary(inputs, calculation);
    const csv = buildApplicationRoiCsv(
      inputs,
      calculation,
      new Date("2026-07-25T08:00:00.000Z"),
    );
    expect(summary).toContain(
      "non classable tant qu’un coût important reste à confirmer",
    );
    expect(summary).not.toContain("79,08 %");
    expect(summary).toContain(
      "Résultats économiques : non calculables tant que les coûts incomplets ne sont pas chiffrés",
    );
    expect(summary).toContain(
      "Non calculable : les sensibilités resteraient provisoires",
    );
    expect(summary).not.toContain("54,41 %");
    expect(summary).not.toContain("41 033,04 €");
    expect(summary).not.toContain("5 033,04 €");
    expect(summary).not.toContain("1 907,76 €");
    expect(summary).not.toContain("ROI économique simple : 9,18 %");
    expect(summary).not.toContain(
      "Premier mois de retour économique : 43",
    );
    expect(csv).toContain(
      '"heures_reutilisees_projet_pour_egaler_option_standard";"";"non classable - couts incomplets";"texte"',
    );
    expect(csv).not.toContain(
      '"heures_reutilisees_projet_pour_egaler_option_standard";"";79,08',
    );
    expect(csv).toContain(
      '"seuil_heures_reutilisees";27,25;"non calculable - couts incomplets";"pourcentage"',
    );
    expect(csv).toContain(
      '"cout_initial_economique_maximal";38216;"non calculable - couts incomplets";"EUR"',
    );
    expect(csv).toContain(
      '"roi_economique_simple";69,43;"non calculable - couts incomplets";"pourcentage"',
    );
    expect(csv).toContain(
      '"mois_retour_economique";22;"non calculable - couts incomplets";"mois"',
    );
    expect(csv).toContain(
      '"delay-3_valeur_economique_nette";"";"non calculable - couts incomplets";"texte"',
    );
    expect(csv).not.toContain(
      '"delay-3_valeur_economique_nette";"";1907,76;"EUR"',
    );
  });

  it("scopes incomplete-cost outputs to either option or both options", () => {
    const standardUnknown = cloneApplicationRoiInputs(
      APPLICATION_ROI_EXAMPLE_INPUTS,
    );
    standardUnknown.options.standard.hasUnknownCosts = true;
    const standardCalculation = calculateApplicationRoi(standardUnknown);
    const standardSummary = buildApplicationRoiSummary(
      standardUnknown,
      standardCalculation,
    );
    const standardCsv = buildApplicationRoiCsv(
      standardUnknown,
      standardCalculation,
      new Date("2026-07-25T08:00:00.000Z"),
    );

    expect(standardSummary).not.toMatch(
      /Valeur économique nette : 22.216 €/,
    );
    expect(standardSummary).toMatch(
      /Valeur économique nette : 5.033,04 €/,
    );
    expect(standardSummary).toMatch(
      /Mise en service retardée de 3 mois : valeur nette 1.907,76 €/,
    );
    expect(standardCsv).toContain(
      '"valeur_economique_nette";"non calculable - couts incomplets";5033,04;"EUR"',
    );
    expect(standardCsv).toContain(
      '"central_valeur_economique_nette";"";5033,04;"EUR"',
    );

    const bothUnknown = cloneApplicationRoiInputs(
      APPLICATION_ROI_EXAMPLE_INPUTS,
    );
    bothUnknown.options.standard.hasUnknownCosts = true;
    bothUnknown.options.project.hasUnknownCosts = true;
    const bothCalculation = calculateApplicationRoi(bothUnknown);
    const bothSummary = buildApplicationRoiSummary(
      bothUnknown,
      bothCalculation,
    );
    const bothCsv = buildApplicationRoiCsv(
      bothUnknown,
      bothCalculation,
      new Date("2026-07-25T08:00:00.000Z"),
    );

    expect(bothSummary).not.toContain("Valeur économique nette :");
    expect(bothSummary).not.toContain("ROI économique simple :");
    expect(bothSummary).not.toContain("Premier mois de retour économique :");
    expect(bothSummary).toContain(
      "Non calculable : les sensibilités resteraient provisoires",
    );
    expect(bothCsv).toContain(
      '"valeur_economique_nette";"non calculable - couts incomplets";"non calculable - couts incomplets";"EUR"',
    );
    expect(bothCsv).toContain(
      '"central_roi_economique_simple";"";"non calculable - couts incomplets";"texte"',
    );
  });

  it("preserves the real delayed calendar beyond the analysis horizon", () => {
    const delayed = cloneApplicationRoiInputs(APPLICATION_ROI_EXAMPLE_INPUTS);
    delayed.baseline.horizonMonths = 120;
    delayed.options.project.goLiveMonth = 119;
    delayed.options.project.rampMonths = 6;

    const delayedCalculation = calculateApplicationRoi(delayed);
    const delayedSensitivity = Object.fromEntries(
      delayedCalculation.sensitivity.map((item) => [item.key, item.result]),
    );

    expect(delayedSensitivity["delay-3"].operatingMonths).toBe(0);
    expect(delayedSensitivity["delay-3"].totalBenefits).toBe(0);
    expect(delayedSensitivity["delay-3"].recurringCost).toBe(0);
    expect(delayedSensitivity["delay-3"].totalCost).toBe(36000);
    expect(delayedSensitivity["delay-6"].operatingMonths).toBe(0);

    const longRamp = cloneApplicationRoiInputs(APPLICATION_ROI_EXAMPLE_INPUTS);
    longRamp.baseline.horizonMonths = 120;
    longRamp.options.project.goLiveMonth = 20;
    longRamp.options.project.rampMonths = 60;
    const shortHorizon = calculateApplicationRoi(longRamp).sensitivity.find(
      (item) => item.key === "horizon-24",
    );

    expect(shortHorizon?.result.operatingMonths).toBe(5);
    expect(shortHorizon?.result.equivalentFullBenefitMonths).toBeCloseTo(
      0.25,
      10,
    );
  });

  it("never reports payback before launch and handles a no-investment case", () => {
    const freeLaunch = cloneApplicationRoiInputs(
      APPLICATION_ROI_EXAMPLE_INPUTS,
    );
    freeLaunch.options.project.initialExternalCost = 0;
    freeLaunch.options.project.internalProjectHours = 0;
    freeLaunch.options.project.monthlyOperatingCost = 10;
    freeLaunch.options.project.exitCost = 0;
    freeLaunch.options.project.goLiveMonth = 5;
    freeLaunch.options.project.rampMonths = 1;

    expect(
      calculateApplicationRoi(freeLaunch).results?.project.paybackMonth,
    ).toBe(5);

    const noInvestment = cloneApplicationRoiInputs(
      APPLICATION_ROI_EXAMPLE_INPUTS,
    );
    noInvestment.baseline.annualHours = 0;
    noInvestment.baseline.annualCashLosses = 0;
    noInvestment.options.project.initialExternalCost = 0;
    noInvestment.options.project.internalProjectHours = 0;
    noInvestment.options.project.monthlyOperatingCost = 0;
    noInvestment.options.project.exitCost = 0;

    expect(
      calculateApplicationRoi(noInvestment).results?.project.paybackMonth,
    ).toBeNull();
  });

  it("distinguishes a positive equality from unknown costs and statu quo", () => {
    const inputs = cloneApplicationRoiInputs(APPLICATION_ROI_EXAMPLE_INPUTS);
    inputs.options.project = { ...inputs.options.standard };
    const calculation = calculateApplicationRoi(inputs);

    expect(calculation.results?.project.netEconomicValue).toBeGreaterThan(0);
    expect(calculation.comparableWinner).toBe("tie");
    expect(buildApplicationRoiSummary(inputs, calculation)).toContain(
      "les deux options créent la même valeur économique nette",
    );
  });

  it("turns out-of-domain thresholds into explicit boundary states", () => {
    const cashPaysForEverything = cloneApplicationRoiInputs(
      APPLICATION_ROI_EXAMPLE_INPUTS,
    );
    cashPaysForEverything.baseline.annualCashLosses = 10000;
    cashPaysForEverything.options.project.initialExternalCost = 1000;
    cashPaysForEverything.options.project.internalProjectHours = 0;
    cashPaysForEverything.options.project.monthlyOperatingCost = 0;
    cashPaysForEverything.options.project.exitCost = 0;
    cashPaysForEverything.options.project.goLiveMonth = 1;
    cashPaysForEverything.options.project.rampMonths = 1;
    cashPaysForEverything.options.project.reusableHoursSharePct = 0;
    cashPaysForEverything.options.project.avoidedCashSharePct = 100;

    const covered = calculateApplicationRoi(cashPaysForEverything);
    expect(covered.results?.project.requiredReusableHoursSharePct).toBe(0);
    expect(covered.results?.project.canBreakEvenWithZeroInitialCost).toBe(true);

    const impossible = cloneApplicationRoiInputs(
      APPLICATION_ROI_EXAMPLE_INPUTS,
    );
    impossible.options.project.initialExternalCost = 500000;
    const impossibleCalculation = calculateApplicationRoi(impossible);

    expect(
      impossibleCalculation.results?.project.requiredReusableHoursSharePct,
    ).toBeGreaterThan(100);
    expect(
      impossibleCalculation.results?.project.canBreakEvenWithZeroInitialCost,
    ).toBe(true);

    impossible.options.project.monthlyOperatingCost = 50000;
    const impossibleEvenForFree = calculateApplicationRoi(impossible);
    expect(
      impossibleEvenForFree.results?.project.canBreakEvenWithZeroInitialCost,
    ).toBe(false);
    expect(
      impossibleEvenForFree.results?.project.maximumInitialEconomicCost,
    ).toBeNull();
    expect(
      buildApplicationRoiSummary(impossible, impossibleEvenForFree),
    ).toContain("impossible même avec un coût initial nul");
  });

  it("rejects missing, negative, impossible-calendar and percentage inputs", () => {
    const inputs = cloneApplicationRoiInputs(APPLICATION_ROI_EXAMPLE_INPUTS);
    inputs.baseline.annualHours = Number.NaN;
    inputs.baseline.horizonMonths = 11;
    inputs.options.standard.initialExternalCost = -1;
    inputs.options.standard.goLiveMonth = 49;
    inputs.options.project.rampMonths = 0;
    inputs.options.project.reusableHoursSharePct = 101;
    inputs.costStressPct = 301;

    const calculation = calculateApplicationRoi(inputs);

    expect(calculation.isValid).toBe(false);
    expect(calculation.results).toBeNull();
    expect(calculation.validationErrors).toEqual(
      expect.arrayContaining([
        { scope: "baseline", field: "annualHours" },
        { scope: "baseline", field: "horizonMonths" },
        { scope: "standard", field: "initialExternalCost" },
        { scope: "standard", field: "goLiveMonth" },
        { scope: "project", field: "rampMonths" },
        { scope: "project", field: "reusableHoursSharePct" },
        { scope: "sensitivity", field: "costStressPct" },
      ]),
    );
    expect(buildApplicationRoiCsv(inputs, calculation)).toBe("");

    const overflowing = cloneApplicationRoiInputs(
      APPLICATION_ROI_EXAMPLE_INPUTS,
    );
    overflowing.options.project.initialExternalCost = Number.MAX_VALUE;
    expect(calculateApplicationRoi(overflowing).isValid).toBe(false);
  });

  it("exports assumptions, thresholds, sensitivity and explicit limitations", () => {
    const inputs = cloneApplicationRoiInputs(APPLICATION_ROI_EXAMPLE_INPUTS);
    const calculation = calculateApplicationRoi(inputs);
    const summary = buildApplicationRoiSummary(inputs, calculation);
    const csv = buildApplicationRoiCsv(
      inputs,
      calculation,
      new Date("2026-07-25T08:00:00.000Z"),
    );
    const rows = csv.split("\n");

    expect(summary).toContain("Valeur de capacité réutilisée : 54");
    expect(summary).toContain(
      `Version du modèle : ${APPLICATION_ROI_MODEL_VERSION}`,
    );
    expect(summary).toContain(
      "Option simple ou logiciel standard crée la valeur économique nette la plus élevée",
    );
    expect(summary).toContain("Mise en service retardée de 6 mois");
    expect(summary).toContain(
      "La capacité réutilisée n’est pas une entrée de caisse",
    );

    expect(rows.length).toBeGreaterThan(30);
    expect(rows.every((row) => row.split(";").length === 5)).toBe(true);
    expect(csv).toContain(
      '"heures_reutilisees_projet_pour_egaler_option_standard"',
    );
    expect(csv).toContain('"delay-6_valeur_economique_nette"');
    expect(csv).toContain('"charge_economique_actuelle_sur_horizon"');
    expect(csv).toContain(
      `"version_modele";"${APPLICATION_ROI_MODEL_VERSION}";"${APPLICATION_ROI_MODEL_VERSION}";"texte"`,
    );
    expect(csv).toContain(
      '"date_export";"2026-07-25T08:00:00.000Z";"2026-07-25T08:00:00.000Z";"ISO-8601"',
    );
    expect(csv).toContain('"responsable_du_benefice"');
    expect(csv).toContain('"source_des_hypotheses"');
    expect(csv).toContain('"confiance_des_hypotheses"');
    expect(csv).toContain(
      '"standard - valeur economique nette la plus elevee"',
    );
    expect(csv).toContain('"Sans fiscalité, inflation, financement ni VAN"');
  });

  it("clones nested option inputs before the interface edits them", () => {
    const clone = cloneApplicationRoiInputs(APPLICATION_ROI_EXAMPLE_INPUTS);
    clone.options.project.initialExternalCost = 1;

    expect(
      APPLICATION_ROI_EXAMPLE_INPUTS.options.project.initialExternalCost,
    ).toBe(32400);
  });
});
