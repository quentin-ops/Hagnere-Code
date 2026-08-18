export const CRM_TCO_PATHS = [
  {
    key: "keep-standard",
    label: "Garder une solution standard",
    shortLabel: "Standard",
    description:
      "Licences, administration, accompagnement ponctuel et préparation d’une sortie.",
  },
  {
    key: "reconfigure",
    label: "Reconfigurer la solution standard",
    shortLabel: "Reconfiguration",
    description:
      "Audit, réglages, nettoyage, formation, licences et administration courante.",
  },
  {
    key: "hybrid",
    label: "Ajouter un module métier",
    shortLabel: "Hybride",
    description:
      "CRM standard, développement ciblé, connexion, hébergement et maintenance.",
  },
  {
    key: "custom",
    label: "Construire un CRM sur mesure",
    shortLabel: "Sur mesure",
    description:
      "Conception, développement, migration, exploitation, maintenance et sortie.",
  },
] as const;

export type CrmTcoPathKey = (typeof CRM_TCO_PATHS)[number]["key"];

export const CRM_TCO_COST_FIELDS = [
  {
    key: "initial",
    label: "Coûts fixes",
    help: "Payés une fois au démarrage ou à la sortie : cadrage, configuration, développement, migration, formation ou réversibilité.",
  },
  {
    key: "monthly",
    label: "Coûts mensuels",
    help: "Licences, hébergement, support ou administration revenant chaque mois.",
  },
  {
    key: "annual",
    label: "Coûts annuels",
    help: "Maintenance, contrôle, formation ou prestation revenant une fois par an.",
  },
] as const;

export type CrmTcoCostField = (typeof CRM_TCO_COST_FIELDS)[number]["key"];

export type CrmTcoCostInput = Record<CrmTcoCostField, number>;

export type CrmTcoInputs = Record<CrmTcoPathKey, CrmTcoCostInput>;

export const CRM_TCO_HORIZONS = [12, 36, 60] as const;

export type CrmTcoHorizon = (typeof CRM_TCO_HORIZONS)[number];

export const CRM_TCO_SCENARIOS = {
  central: {
    label: "Central",
    description: "Montants saisis, sans marge ajoutée",
    multipliers: {
      initial: 1,
      monthly: 1,
      annual: 1,
    },
  },
  recurring: {
    label: "Récurrent +25 %",
    description: "Mensuel et annuel × 1,25",
    multipliers: {
      initial: 1,
      monthly: 1.25,
      annual: 1.25,
    },
  },
  project: {
    label: "Projet +25 %",
    description: "Coûts fixes × 1,25",
    multipliers: {
      initial: 1.25,
      monthly: 1,
      annual: 1,
    },
  },
} as const;

export type CrmTcoScenario = keyof typeof CRM_TCO_SCENARIOS;

export const CRM_TCO_EXAMPLE_INPUTS: CrmTcoInputs = {
  "keep-standard": {
    initial: 2520,
    monthly: 780,
    annual: 0,
  },
  reconfigure: {
    initial: 10180,
    monthly: 735,
    annual: 0,
  },
  hybrid: {
    initial: 41670,
    monthly: 1335,
    annual: 0,
  },
  custom: {
    initial: 125450,
    monthly: 2160,
    annual: 0,
  },
};

export interface CrmTcoValidationError {
  path: CrmTcoPathKey;
  field: CrmTcoCostField;
}

export interface CrmTcoPathResult {
  path: CrmTcoPathKey;
  initial: number;
  monthly: number;
  annual: number;
  baseTotal: number;
  total: number;
  averageMonthly: number;
  differenceFromLowest: number;
}

export interface CrmTcoCalculation {
  isValid: boolean;
  horizonMonths: CrmTcoHorizon;
  scenario: CrmTcoScenario;
  multipliers: CrmTcoCostInput;
  results: CrmTcoPathResult[];
  lowestTotal: number | null;
  validationErrors: CrmTcoValidationError[];
}

function isValidAmount(value: number) {
  return Number.isFinite(value) && value >= 0;
}

export function cloneCrmTcoInputs(inputs: CrmTcoInputs): CrmTcoInputs {
  return {
    "keep-standard": { ...inputs["keep-standard"] },
    reconfigure: { ...inputs.reconfigure },
    hybrid: { ...inputs.hybrid },
    custom: { ...inputs.custom },
  };
}

export function calculateCrmTco(
  inputs: CrmTcoInputs,
  horizonMonths: CrmTcoHorizon,
  scenario: CrmTcoScenario,
): CrmTcoCalculation {
  const validationErrors: CrmTcoValidationError[] = [];

  for (const path of CRM_TCO_PATHS) {
    for (const field of CRM_TCO_COST_FIELDS) {
      if (!isValidAmount(inputs[path.key][field.key])) {
        validationErrors.push({
          path: path.key,
          field: field.key,
        });
      }
    }
  }

  const multipliers = CRM_TCO_SCENARIOS[scenario].multipliers;

  if (validationErrors.length > 0) {
    return {
      isValid: false,
      horizonMonths,
      scenario,
      multipliers,
      results: [],
      lowestTotal: null,
      validationErrors,
    };
  }

  const resultsWithoutDifference = CRM_TCO_PATHS.map((path) => {
    const values = inputs[path.key];
    const baseTotal =
      values.initial +
      values.monthly * horizonMonths +
      values.annual * (horizonMonths / 12);
    const total =
      values.initial * multipliers.initial +
      values.monthly * horizonMonths * multipliers.monthly +
      values.annual * (horizonMonths / 12) * multipliers.annual;

    return {
      path: path.key,
      initial: values.initial,
      monthly: values.monthly,
      annual: values.annual,
      baseTotal,
      total,
      averageMonthly: total / horizonMonths,
    };
  });

  const overflowPaths = resultsWithoutDifference
    .filter(
      (result) =>
        !Number.isFinite(result.baseTotal) ||
        !Number.isFinite(result.total) ||
        !Number.isFinite(result.averageMonthly),
    )
    .map((result) => result.path);

  if (overflowPaths.length > 0) {
    return {
      isValid: false,
      horizonMonths,
      scenario,
      multipliers,
      results: [],
      lowestTotal: null,
      validationErrors: overflowPaths.flatMap((path) =>
        CRM_TCO_COST_FIELDS.map((field) => ({
          path,
          field: field.key,
        })),
      ),
    };
  }

  const lowestTotal = Math.min(
    ...resultsWithoutDifference.map((result) => result.total),
  );
  const results = resultsWithoutDifference.map((result) => ({
    ...result,
    differenceFromLowest: result.total - lowestTotal,
  }));

  return {
    isValid: true,
    horizonMonths,
    scenario,
    multipliers,
    results,
    lowestTotal,
    validationErrors,
  };
}

function formatTextAmount(value: number) {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 2,
  }).format(value);
}

function formatCsvNumber(value: number) {
  return value.toFixed(2).replace(".", ",");
}

function quoteCsv(value: string) {
  return `"${value.replaceAll('"', '""')}"`;
}

export function buildCrmTcoSummary(
  inputs: CrmTcoInputs,
  calculation: CrmTcoCalculation,
) {
  if (!calculation.isValid) {
    return "";
  }

  const scenario = CRM_TCO_SCENARIOS[calculation.scenario];
  const lines = [
    `Comparaison CRM / TCO — ${calculation.horizonMonths} mois — scénario ${scenario.label.toLowerCase()} (${scenario.description.toLowerCase()})`,
    "Hypothèses fictives et modifiables : ce résultat n’est ni un tarif de marché, ni un devis, ni une recommandation automatique.",
    "",
  ];

  for (const path of CRM_TCO_PATHS) {
    const values = inputs[path.key];
    const result = calculation.results.find((item) => item.path === path.key);

    if (!result) {
      continue;
    }

    lines.push(
      `${path.label} : coûts fixes ${formatTextAmount(values.initial)} ; mensuels ${formatTextAmount(values.monthly)} ; annuels ${formatTextAmount(values.annual)} ; total ${formatTextAmount(result.total)} ; moyenne ${formatTextAmount(result.averageMonthly)}/mois ; écart au minimum ${formatTextAmount(result.differenceFromLowest)}.`,
    );
  }

  lines.push(
    "",
    "Limites : coûts constants, sans inflation, fiscalité, financement, remise, gain commercial ni valeur du risque. Le total le plus faible n’est pas nécessairement la meilleure décision.",
  );

  return lines.join("\n");
}

export function buildCrmTcoCsv(
  inputs: CrmTcoInputs,
  calculation: CrmTcoCalculation,
) {
  if (!calculation.isValid) {
    return "";
  }

  const scenario = CRM_TCO_SCENARIOS[calculation.scenario];
  const rows: string[][] = [
    ["Calculateur CRM / TCO"],
    ["Hypothèses", "Fictives et modifiables ; ni tarif de marché, ni devis."],
    ["Horizon (mois)", String(calculation.horizonMonths)],
    ["Scénario", scenario.label],
    [
      "Coefficients du test",
      `Fixe × ${formatCsvNumber(calculation.multipliers.initial)} ; mensuel × ${formatCsvNumber(calculation.multipliers.monthly)} ; annuel × ${formatCsvNumber(calculation.multipliers.annual)}`,
    ],
    [],
    [
      "Voie",
      "Coûts fixes (€)",
      "Coûts mensuels (€)",
      "Coûts annuels (€)",
      "Total sur l’horizon (€)",
      "Moyenne mensuelle (€)",
      "Écart avec le minimum (€)",
    ],
  ];

  for (const path of CRM_TCO_PATHS) {
    const values = inputs[path.key];
    const result = calculation.results.find((item) => item.path === path.key);

    if (!result) {
      continue;
    }

    rows.push([
      path.label,
      formatCsvNumber(values.initial),
      formatCsvNumber(values.monthly),
      formatCsvNumber(values.annual),
      formatCsvNumber(result.total),
      formatCsvNumber(result.averageMonthly),
      formatCsvNumber(result.differenceFromLowest),
    ]);
  }

  rows.push(
    [],
    [
      "Limites",
      "Coûts constants ; inflation, fiscalité, financement, remises, gains et risques exclus.",
    ],
  );

  return rows.map((row) => row.map(quoteCsv).join(";")).join("\n");
}
