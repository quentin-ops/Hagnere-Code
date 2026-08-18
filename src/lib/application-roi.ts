export const APPLICATION_ROI_OPTION_KEYS = ["standard", "project"] as const;
export const APPLICATION_ROI_MODEL_VERSION = "2026-07-25-r3";

export type ApplicationRoiOptionKey =
  (typeof APPLICATION_ROI_OPTION_KEYS)[number];

export interface ApplicationRoiBaselineInputs {
  annualHours: number;
  hourlyCost: number;
  annualCashLosses: number;
  horizonMonths: number;
}

export interface ApplicationRoiOptionInputs {
  initialExternalCost: number;
  internalProjectHours: number;
  monthlyOperatingCost: number;
  exitCost: number;
  goLiveMonth: number;
  rampMonths: number;
  reusableHoursSharePct: number;
  avoidedCashSharePct: number;
  hasUnknownCosts: boolean;
}

export interface ApplicationRoiInputs {
  baseline: ApplicationRoiBaselineInputs;
  options: Record<ApplicationRoiOptionKey, ApplicationRoiOptionInputs>;
  costStressPct: number;
}

export const APPLICATION_ROI_OPTION_LABELS: Record<
  ApplicationRoiOptionKey,
  string
> = {
  standard: "Option simple ou logiciel standard",
  project: "Projet envisagé",
};

export const APPLICATION_ROI_EXAMPLE_INPUTS: ApplicationRoiInputs = {
  baseline: {
    annualHours: 723.2,
    hourlyCost: 36,
    annualCashLosses: 2400,
    horizonMonths: 48,
  },
  options: {
    standard: {
      initialExternalCost: 13840,
      internalProjectHours: 60,
      monthlyOperatingCost: 325,
      exitCost: 1050,
      goLiveMonth: 3,
      rampMonths: 3,
      reusableHoursSharePct: 50,
      avoidedCashSharePct: 60,
      hasUnknownCosts: false,
    },
    project: {
      initialExternalCost: 32400,
      internalProjectHours: 100,
      monthlyOperatingCost: 400,
      exitCost: 1200,
      goLiveMonth: 5,
      rampMonths: 6,
      reusableHoursSharePct: 60,
      avoidedCashSharePct: 70,
      hasUnknownCosts: false,
    },
  },
  costStressPct: 20,
};

export type ApplicationRoiBaselineField = keyof ApplicationRoiBaselineInputs;
export type ApplicationRoiOptionField = Exclude<
  keyof ApplicationRoiOptionInputs,
  "hasUnknownCosts"
>;

export interface ApplicationRoiValidationError {
  scope: "baseline" | ApplicationRoiOptionKey | "sensitivity";
  field:
    ApplicationRoiBaselineField | ApplicationRoiOptionField | "costStressPct";
}

export interface ApplicationRoiOptionResult {
  key: ApplicationRoiOptionKey;
  operatingMonths: number;
  equivalentFullBenefitMonths: number;
  baselineCapacityValue: number;
  baselineCashBurden: number;
  capacityBenefit: number;
  cashBenefit: number;
  totalBenefits: number;
  initialEconomicCost: number;
  recurringCost: number;
  totalCost: number;
  netEconomicValue: number;
  roiPct: number | null;
  paybackMonth: number | null;
  requiredReusableHoursSharePct: number | null;
  maximumInitialEconomicCost: number | null;
  canBreakEvenWithZeroInitialCost: boolean;
  hasUnknownCosts: boolean;
}

export interface ApplicationRoiSensitivityResult {
  key: "central" | "delay-3" | "delay-6" | "horizon-24" | "cost-stress";
  label: string;
  note: string;
  result: ApplicationRoiOptionResult;
}

export interface ApplicationRoiCalculation {
  isValid: boolean;
  validationErrors: ApplicationRoiValidationError[];
  baselineCapacityValue: number | null;
  baselineCashBurden: number | null;
  baselineTotalBurden: number | null;
  results: Record<ApplicationRoiOptionKey, ApplicationRoiOptionResult> | null;
  comparableWinner: ApplicationRoiOptionKey | "status-quo" | "tie" | null;
  projectShareToMatchStandardPct: number | null;
  sensitivity: ApplicationRoiSensitivityResult[];
}

const MAX_NUMERIC_INPUT = 1_000_000_000_000;

function isNonNegative(value: number) {
  return Number.isFinite(value) && value >= 0 && value <= MAX_NUMERIC_INPUT;
}

function isWholeNumberInRange(value: number, minimum: number, maximum: number) {
  return (
    Number.isFinite(value) &&
    Number.isInteger(value) &&
    value >= minimum &&
    value <= maximum
  );
}

function isPercentage(value: number) {
  return Number.isFinite(value) && value >= 0 && value <= 100;
}

function roundForExport(value: number) {
  return Math.round((value + Number.EPSILON) * 100) / 100;
}

export function cloneApplicationRoiInputs(
  inputs: ApplicationRoiInputs,
): ApplicationRoiInputs {
  return {
    baseline: { ...inputs.baseline },
    options: {
      standard: { ...inputs.options.standard },
      project: { ...inputs.options.project },
    },
    costStressPct: inputs.costStressPct,
  };
}

export function equivalentFullBenefitMonths(
  operatingMonths: number,
  rampMonths: number,
) {
  if (operatingMonths <= 0) {
    return 0;
  }

  if (rampMonths <= 1) {
    return operatingMonths;
  }

  let total = 0;
  for (let month = 1; month <= operatingMonths; month += 1) {
    total += Math.min(month / rampMonths, 1);
  }
  return total;
}

function adoptionRateAtMonth(
  calendarMonth: number,
  goLiveMonth: number,
  rampMonths: number,
) {
  if (calendarMonth < goLiveMonth) {
    return 0;
  }

  if (rampMonths <= 1) {
    return 1;
  }

  return Math.min((calendarMonth - goLiveMonth + 1) / rampMonths, 1);
}

function calculatePaybackMonth(
  baseline: ApplicationRoiBaselineInputs,
  option: ApplicationRoiOptionInputs,
  initialEconomicCost: number,
  netEconomicValue: number,
) {
  if (netEconomicValue < 0) {
    return null;
  }

  const stableMonthlyCapacityBenefit =
    (baseline.annualHours *
      baseline.hourlyCost *
      (option.reusableHoursSharePct / 100)) /
    12;
  const stableMonthlyCashBenefit =
    (baseline.annualCashLosses * (option.avoidedCashSharePct / 100)) / 12;
  if (
    initialEconomicCost === 0 &&
    option.monthlyOperatingCost === 0 &&
    option.exitCost === 0 &&
    stableMonthlyCapacityBenefit === 0 &&
    stableMonthlyCashBenefit === 0
  ) {
    return null;
  }

  let cumulative = -initialEconomicCost;

  for (let month = 1; month <= baseline.horizonMonths; month += 1) {
    const adoption = adoptionRateAtMonth(
      month,
      option.goLiveMonth,
      option.rampMonths,
    );
    if (adoption > 0) {
      cumulative +=
        (stableMonthlyCapacityBenefit + stableMonthlyCashBenefit) * adoption;
      cumulative -= option.monthlyOperatingCost;
    }
    if (
      month === baseline.horizonMonths &&
      baseline.horizonMonths >= option.goLiveMonth
    ) {
      cumulative -= option.exitCost;
    }
    if (month >= option.goLiveMonth && cumulative >= 0) {
      return month;
    }
  }

  return null;
}

function calculateOption(
  key: ApplicationRoiOptionKey,
  baseline: ApplicationRoiBaselineInputs,
  option: ApplicationRoiOptionInputs,
): ApplicationRoiOptionResult {
  const operatingMonths = Math.max(
    0,
    baseline.horizonMonths - option.goLiveMonth + 1,
  );
  const fullBenefitMonths = equivalentFullBenefitMonths(
    operatingMonths,
    option.rampMonths,
  );
  const baselineCapacityValue =
    baseline.annualHours * baseline.hourlyCost * (baseline.horizonMonths / 12);
  const baselineCashBurden =
    baseline.annualCashLosses * (baseline.horizonMonths / 12);
  const capacityBenefit =
    ((baseline.annualHours *
      baseline.hourlyCost *
      (option.reusableHoursSharePct / 100)) /
      12) *
    fullBenefitMonths;
  const cashBenefit =
    ((baseline.annualCashLosses * (option.avoidedCashSharePct / 100)) / 12) *
    fullBenefitMonths;
  const totalBenefits = capacityBenefit + cashBenefit;
  const internalProjectCost = option.internalProjectHours * baseline.hourlyCost;
  const initialEconomicCost = option.initialExternalCost + internalProjectCost;
  const recurringCost = option.monthlyOperatingCost * operatingMonths;
  const exitCostInHorizon = operatingMonths > 0 ? option.exitCost : 0;
  const totalCost = initialEconomicCost + recurringCost + exitCostInHorizon;
  const netEconomicValue = totalBenefits - totalCost;
  const roiPct = totalCost > 0 ? (netEconomicValue / totalCost) * 100 : null;
  const capacityBenefitAtOneHundredPct =
    ((baseline.annualHours * baseline.hourlyCost) / 12) * fullBenefitMonths;
  const rawRequiredReusableHoursSharePct =
    capacityBenefitAtOneHundredPct > 0
      ? ((totalCost - cashBenefit) / capacityBenefitAtOneHundredPct) * 100
      : null;
  const requiredReusableHoursSharePct =
    rawRequiredReusableHoursSharePct === null
      ? null
      : Math.max(0, rawRequiredReusableHoursSharePct);
  const rawMaximumInitialEconomicCost =
    totalBenefits - recurringCost - exitCostInHorizon;
  const canBreakEvenWithZeroInitialCost = rawMaximumInitialEconomicCost >= 0;
  const maximumInitialEconomicCost = canBreakEvenWithZeroInitialCost
    ? rawMaximumInitialEconomicCost
    : null;

  return {
    key,
    operatingMonths,
    equivalentFullBenefitMonths: fullBenefitMonths,
    baselineCapacityValue,
    baselineCashBurden,
    capacityBenefit,
    cashBenefit,
    totalBenefits,
    initialEconomicCost,
    recurringCost,
    totalCost,
    netEconomicValue,
    roiPct,
    paybackMonth: calculatePaybackMonth(
      baseline,
      option,
      initialEconomicCost,
      netEconomicValue,
    ),
    requiredReusableHoursSharePct,
    maximumInitialEconomicCost,
    canBreakEvenWithZeroInitialCost,
    hasUnknownCosts: option.hasUnknownCosts,
  };
}

function validateInputs(inputs: ApplicationRoiInputs) {
  const errors: ApplicationRoiValidationError[] = [];
  const { baseline } = inputs;

  for (const field of [
    "annualHours",
    "hourlyCost",
    "annualCashLosses",
  ] as const) {
    if (!isNonNegative(baseline[field])) {
      errors.push({ scope: "baseline", field });
    }
  }

  if (!isWholeNumberInRange(baseline.horizonMonths, 12, 120)) {
    errors.push({ scope: "baseline", field: "horizonMonths" });
  }

  for (const key of APPLICATION_ROI_OPTION_KEYS) {
    const option = inputs.options[key];
    for (const field of [
      "initialExternalCost",
      "internalProjectHours",
      "monthlyOperatingCost",
      "exitCost",
    ] as const) {
      if (!isNonNegative(option[field])) {
        errors.push({ scope: key, field });
      }
    }
    for (const field of [
      "reusableHoursSharePct",
      "avoidedCashSharePct",
    ] as const) {
      if (!isPercentage(option[field])) {
        errors.push({ scope: key, field });
      }
    }
    if (!isWholeNumberInRange(option.goLiveMonth, 1, baseline.horizonMonths)) {
      errors.push({ scope: key, field: "goLiveMonth" });
    }
    if (!isWholeNumberInRange(option.rampMonths, 1, baseline.horizonMonths)) {
      errors.push({ scope: key, field: "rampMonths" });
    }
  }

  if (!isNonNegative(inputs.costStressPct) || inputs.costStressPct > 300) {
    errors.push({ scope: "sensitivity", field: "costStressPct" });
  }

  return errors;
}

function buildSensitivity(
  inputs: ApplicationRoiInputs,
): ApplicationRoiSensitivityResult[] {
  const project = inputs.options.project;
  const baseline = inputs.baseline;
  const delayedByThree = {
    ...project,
    goLiveMonth: project.goLiveMonth + 3,
  };
  const delayedBySix = {
    ...project,
    goLiveMonth: project.goLiveMonth + 6,
  };
  const shorterBaseline = {
    ...baseline,
    horizonMonths: Math.min(24, baseline.horizonMonths),
  };
  const stressMultiplier = 1 + inputs.costStressPct / 100;
  const stressedCost = {
    ...project,
    initialExternalCost: project.initialExternalCost * stressMultiplier,
    internalProjectHours: project.internalProjectHours * stressMultiplier,
  };

  return [
    {
      key: "central",
      label: "Vos hypothèses centrales",
      note: `${project.rampMonths} mois de montée d’adoption`,
      result: calculateOption("project", baseline, project),
    },
    {
      key: "delay-3",
      label: "Mise en service retardée de 3 mois",
      note: "Toutes les autres hypothèses restent identiques.",
      result: calculateOption("project", baseline, delayedByThree),
    },
    {
      key: "delay-6",
      label: "Mise en service retardée de 6 mois",
      note: "Toutes les autres hypothèses restent identiques.",
      result: calculateOption("project", baseline, delayedBySix),
    },
    {
      key: "horizon-24",
      label:
        baseline.horizonMonths > 24
          ? "Horizon réduit à 24 mois"
          : `Horizon conservé à ${baseline.horizonMonths} mois`,
      note:
        baseline.horizonMonths > 24
          ? "Le processus ou l’outil doit être remplacé plus tôt."
          : "Votre horizon est déjà inférieur ou égal à 24 mois.",
      result: calculateOption("project", shorterBaseline, {
        ...project,
      }),
    },
    {
      key: "cost-stress",
      label: `Coût initial économique +${inputs.costStressPct}%`,
      note: "Remplacez ce taux par l’écart documenté de projets ou devis comparables.",
      result: calculateOption("project", baseline, stressedCost),
    },
  ];
}

export function calculateApplicationRoi(
  inputs: ApplicationRoiInputs,
): ApplicationRoiCalculation {
  const validationErrors = validateInputs(inputs);

  if (validationErrors.length > 0) {
    return {
      isValid: false,
      validationErrors,
      baselineCapacityValue: null,
      baselineCashBurden: null,
      baselineTotalBurden: null,
      results: null,
      comparableWinner: null,
      projectShareToMatchStandardPct: null,
      sensitivity: [],
    };
  }

  const baselineCapacityValue =
    inputs.baseline.annualHours *
    inputs.baseline.hourlyCost *
    (inputs.baseline.horizonMonths / 12);
  const baselineCashBurden =
    inputs.baseline.annualCashLosses * (inputs.baseline.horizonMonths / 12);
  const results = {
    standard: calculateOption(
      "standard",
      inputs.baseline,
      inputs.options.standard,
    ),
    project: calculateOption(
      "project",
      inputs.baseline,
      inputs.options.project,
    ),
  };
  const hasUnknownCosts =
    results.standard.hasUnknownCosts || results.project.hasUnknownCosts;
  let comparableWinner: ApplicationRoiCalculation["comparableWinner"] = null;

  if (!hasUnknownCosts) {
    if (
      results.standard.netEconomicValue <= 0 &&
      results.project.netEconomicValue <= 0
    ) {
      comparableWinner = "status-quo";
    } else {
      const difference =
        results.standard.netEconomicValue - results.project.netEconomicValue;
      const equalityTolerance =
        Math.max(
          1,
          Math.abs(results.standard.netEconomicValue),
          Math.abs(results.project.netEconomicValue),
        ) * 1e-9;

      if (Math.abs(difference) <= equalityTolerance) {
        comparableWinner = "tie";
      } else {
        comparableWinner = difference > 0 ? "standard" : "project";
      }
    }
  }

  const projectCapacityAtOneHundredPct =
    ((inputs.baseline.annualHours * inputs.baseline.hourlyCost) / 12) *
    results.project.equivalentFullBenefitMonths;
  const rawProjectShareToMatchStandardPct =
    projectCapacityAtOneHundredPct > 0
      ? ((results.standard.netEconomicValue +
          results.project.totalCost -
          results.project.cashBenefit) /
          projectCapacityAtOneHundredPct) *
        100
      : null;
  const projectShareToMatchStandardPct =
    rawProjectShareToMatchStandardPct === null
      ? null
      : Math.max(0, rawProjectShareToMatchStandardPct);

  return {
    isValid: true,
    validationErrors: [],
    baselineCapacityValue,
    baselineCashBurden,
    baselineTotalBurden: baselineCapacityValue + baselineCashBurden,
    results,
    comparableWinner,
    projectShareToMatchStandardPct,
    sensitivity: buildSensitivity(inputs),
  };
}

function formatPlainNumber(value: number) {
  return roundForExport(value).toLocaleString("fr-FR", {
    maximumFractionDigits: 2,
  });
}

function formatPlainPct(value: number | null) {
  return value === null ? "non calculable" : `${formatPlainNumber(value)} %`;
}

function formatPlainRequiredShare(value: number | null) {
  if (value === null) {
    return "non calculable";
  }
  if (value > 100) {
    return `impossible dans la plage 0–100 % (seuil théorique : ${formatPlainPct(value)})`;
  }
  if (value === 0) {
    return "déjà atteint sans réutiliser d’heures";
  }
  return formatPlainPct(value);
}

export function buildApplicationRoiSummary(
  inputs: ApplicationRoiInputs,
  calculation: ApplicationRoiCalculation,
) {
  if (!calculation.isValid || !calculation.results) {
    return "Calcul incomplet : corriger les champs signalés.";
  }

  const hasUnknownComparisonCosts = APPLICATION_ROI_OPTION_KEYS.some(
    (key) => calculation.results?.[key].hasUnknownCosts,
  );
  const lines = [
    "Comparaison économique d’une application métier",
    `Version du modèle : ${APPLICATION_ROI_MODEL_VERSION}`,
    `Horizon : ${inputs.baseline.horizonMonths} mois`,
    `Charge actuelle valorisée : ${formatPlainNumber(calculation.baselineTotalBurden ?? 0)} €`,
  ];

  for (const key of APPLICATION_ROI_OPTION_KEYS) {
    const result = calculation.results[key];
    if (result.hasUnknownCosts) {
      lines.push(
        "",
        APPLICATION_ROI_OPTION_LABELS[key],
        "Résultats économiques : non calculables tant que les coûts incomplets ne sont pas chiffrés.",
        "Coûts à confirmer : oui",
      );
      continue;
    }

    lines.push(
      "",
      APPLICATION_ROI_OPTION_LABELS[key],
      `Coût complet renseigné : ${formatPlainNumber(result.totalCost)} €`,
      `Valeur de capacité réutilisée : ${formatPlainNumber(result.capacityBenefit)} €`,
      `Dépenses évitées : ${formatPlainNumber(result.cashBenefit)} €`,
      `Valeur économique nette : ${formatPlainNumber(result.netEconomicValue)} €`,
      `ROI économique simple : ${formatPlainPct(result.roiPct)}`,
      `Premier mois de retour économique : ${result.paybackMonth ?? "hors horizon"}`,
      `Part d’heures réutilisées nécessaire pour atteindre zéro : ${formatPlainRequiredShare(result.requiredReusableHoursSharePct)}`,
      `Coût initial économique maximal : ${
        !result.canBreakEvenWithZeroInitialCost
          ? "impossible même avec un coût initial nul"
          : result.maximumInitialEconomicCost === null
            ? "non calculable"
            : `${formatPlainNumber(result.maximumInitialEconomicCost)} €`
      }`,
      `Coûts à confirmer : ${result.hasUnknownCosts ? "oui" : "non"}`,
    );
  }

  if (calculation.comparableWinner === null) {
    lines.push(
      "",
      "Verdict comparatif : aucun classement tant qu’un coût important reste à confirmer.",
    );
  } else if (calculation.comparableWinner === "status-quo") {
    lines.push(
      "",
      "Verdict comparatif : aucune des deux options ne crée une valeur économique nette positive avec ces hypothèses.",
    );
  } else if (calculation.comparableWinner === "tie") {
    lines.push(
      "",
      "Verdict comparatif : les deux options créent la même valeur économique nette avec ces hypothèses.",
    );
  } else {
    lines.push(
      "",
      `Verdict comparatif : ${APPLICATION_ROI_OPTION_LABELS[calculation.comparableWinner]} crée la valeur économique nette la plus élevée parmi les deux options renseignées.`,
    );
  }

  lines.push(
    `Part d’heures réutilisées nécessaire au projet pour égaler l’option standard : ${
      hasUnknownComparisonCosts
        ? "non classable tant qu’un coût important reste à confirmer"
        : formatPlainRequiredShare(calculation.projectShareToMatchStandardPct)
    }`,
    "",
    "Sensibilité du projet envisagé",
  );

  if (calculation.results.project.hasUnknownCosts) {
    lines.push(
      "Non calculable : les sensibilités resteraient provisoires tant que les coûts incomplets du projet ne sont pas chiffrés.",
    );
  } else {
    for (const sensitivity of calculation.sensitivity) {
      lines.push(
        `${sensitivity.label} : valeur nette ${formatPlainNumber(sensitivity.result.netEconomicValue)} € ; ROI ${formatPlainPct(sensitivity.result.roiPct)}`,
      );
    }
  }

  lines.push(
    "",
    "Limites : estimation économique illustrative, non actualisée, sans fiscalité ni financement. La capacité réutilisée n’est pas une entrée de caisse. Le coût de sortie est imputé au dernier mois de l’horizon.",
  );

  return lines.join("\n");
}

function csvNumber(value: number | null) {
  if (value === null) {
    return "";
  }
  return String(roundForExport(value)).replace(".", ",");
}

export function buildApplicationRoiCsv(
  inputs: ApplicationRoiInputs,
  calculation: ApplicationRoiCalculation,
  generatedAt: Date = new Date(),
) {
  if (!calculation.isValid || !calculation.results) {
    return "";
  }

  const hasUnknownComparisonCosts = APPLICATION_ROI_OPTION_KEYS.some(
    (key) => calculation.results?.[key].hasUnknownCosts,
  );
  const rows: Array<Array<string | number | boolean | null>> = [
    ["section", "champ", "option_standard", "projet_envisage", "unite"],
    [
      "meta",
      "version_modele",
      APPLICATION_ROI_MODEL_VERSION,
      APPLICATION_ROI_MODEL_VERSION,
      "texte",
    ],
    [
      "meta",
      "date_export",
      generatedAt.toISOString(),
      generatedAt.toISOString(),
      "ISO-8601",
    ],
    [
      "base",
      "horizon",
      inputs.baseline.horizonMonths,
      inputs.baseline.horizonMonths,
      "mois",
    ],
    [
      "base",
      "heures_actuelles_annuelles",
      inputs.baseline.annualHours,
      inputs.baseline.annualHours,
      "heures",
    ],
    [
      "base",
      "cout_horaire",
      inputs.baseline.hourlyCost,
      inputs.baseline.hourlyCost,
      "EUR",
    ],
    [
      "base",
      "decaissements_actuels_annuels",
      inputs.baseline.annualCashLosses,
      inputs.baseline.annualCashLosses,
      "EUR",
    ],
    [
      "sensibilite",
      "stress_cout_initial",
      "",
      inputs.costStressPct,
      "pourcentage",
    ],
    [
      "base",
      "charge_economique_actuelle_sur_horizon",
      calculation.baselineTotalBurden,
      calculation.baselineTotalBurden,
      "EUR",
    ],
  ];

  const inputFields: Array<[string, ApplicationRoiOptionField, string]> = [
    ["cout_externe_initial", "initialExternalCost", "EUR"],
    ["heures_internes_projet", "internalProjectHours", "heures"],
    ["cout_mensuel", "monthlyOperatingCost", "EUR"],
    ["cout_sortie", "exitCost", "EUR"],
    ["mois_mise_en_service", "goLiveMonth", "mois"],
    ["montee_adoption", "rampMonths", "mois"],
    ["heures_reutilisees", "reusableHoursSharePct", "pourcentage"],
    ["decaissements_evites", "avoidedCashSharePct", "pourcentage"],
  ];

  for (const [label, field, unit] of inputFields) {
    rows.push([
      "hypothese",
      label,
      inputs.options.standard[field],
      inputs.options.project[field],
      unit,
    ]);
  }

  rows.push([
    "hypothese",
    "couts_a_confirmer",
    inputs.options.standard.hasUnknownCosts,
    inputs.options.project.hasUnknownCosts,
    "booleen",
  ]);

  type NumericResultField = Exclude<
    keyof ApplicationRoiOptionResult,
    "key" | "hasUnknownCosts" | "canBreakEvenWithZeroInitialCost"
  >;

  const resultFields: Array<[string, NumericResultField, string]> = [
    ["mois_equivalents_plein_benefice", "equivalentFullBenefitMonths", "mois"],
    ["valeur_capacite", "capacityBenefit", "EUR"],
    ["depenses_evitees", "cashBenefit", "EUR"],
    ["benefices_cumules", "totalBenefits", "EUR"],
    ["cout_complet", "totalCost", "EUR"],
    ["valeur_economique_nette", "netEconomicValue", "EUR"],
    ["roi_economique_simple", "roiPct", "pourcentage"],
    ["mois_retour_economique", "paybackMonth", "mois"],
    [
      "seuil_heures_reutilisees",
      "requiredReusableHoursSharePct",
      "pourcentage",
    ],
    ["cout_initial_economique_maximal", "maximumInitialEconomicCost", "EUR"],
  ];

  for (const [label, field, unit] of resultFields) {
    rows.push([
      "resultat",
      label,
      calculation.results.standard.hasUnknownCosts
        ? "non calculable - couts incomplets"
        : calculation.results.standard[field],
      calculation.results.project.hasUnknownCosts
        ? "non calculable - couts incomplets"
        : calculation.results.project[field],
      unit,
    ]);
  }

  const verdict = (() => {
    if (calculation.comparableWinner === null) {
      return "aucun classement - cout important a confirmer";
    }
    if (calculation.comparableWinner === "status-quo") {
      return "aucune option positive - statu quo ou reprise des hypotheses";
    }
    if (calculation.comparableWinner === "tie") {
      return "egalite de valeur economique nette";
    }
    return `${calculation.comparableWinner} - valeur economique nette la plus elevee`;
  })();

  rows.push(["verdict", "comparaison", "", verdict, "texte"]);

  rows.push([
    "seuil",
    "heures_reutilisees_projet_pour_egaler_option_standard",
    "",
    hasUnknownComparisonCosts
      ? "non classable - couts incomplets"
      : calculation.projectShareToMatchStandardPct,
    hasUnknownComparisonCosts ? "texte" : "pourcentage",
  ]);

  for (const sensitivity of calculation.sensitivity) {
    const sensitivityValue = calculation.results.project.hasUnknownCosts
      ? "non calculable - couts incomplets"
      : sensitivity.result.netEconomicValue;
    const sensitivityRoi = calculation.results.project.hasUnknownCosts
      ? "non calculable - couts incomplets"
      : sensitivity.result.roiPct;
    const sensitivityUnit = calculation.results.project.hasUnknownCosts
      ? "texte"
      : null;

    rows.push(
      [
        "sensibilite",
        `${sensitivity.key}_valeur_economique_nette`,
        "",
        sensitivityValue,
        sensitivityUnit ?? "EUR",
      ],
      [
        "sensibilite",
        `${sensitivity.key}_roi_economique_simple`,
        "",
        sensitivityRoi,
        sensitivityUnit ?? "pourcentage",
      ],
    );
  }

  rows.push(
    [
      "limite",
      "modele",
      "La capacité réutilisée n’est pas une entrée de caisse",
      "La capacité réutilisée n’est pas une entrée de caisse",
      "",
    ],
    [
      "limite",
      "perimetre",
      "Sans fiscalité, inflation, financement ni VAN",
      "Sans fiscalité, inflation, financement ni VAN",
      "",
    ],
    [
      "limite",
      "convention_payback",
      "Le coût de sortie est imputé au dernier mois",
      "Le coût de sortie est imputé au dernier mois",
      "",
    ],
    ["suivi", "responsable_du_benefice", "", "", "a_completer"],
    ["suivi", "source_des_hypotheses", "", "", "a_completer"],
    ["suivi", "confiance_des_hypotheses", "", "", "faible_moyenne_elevee"],
    ["suivi", "adoption_reelle", "", "", "a_completer"],
    ["suivi", "cout_reel", "", "", "a_completer"],
    ["suivi", "decision_et_date", "", "", "a_completer"],
  );

  return rows
    .map((row) =>
      row
        .map((value) => {
          if (typeof value === "number") {
            return csvNumber(value);
          }
          const text = String(value ?? "");
          return `"${text.replaceAll('"', '""')}"`;
        })
        .join(";"),
    )
    .join("\n");
}
