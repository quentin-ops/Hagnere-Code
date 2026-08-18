export const TECHNICAL_DEBT_HORIZONS = [12, 36, 60] as const;

export type TechnicalDebtHorizon = (typeof TECHNICAL_DEBT_HORIZONS)[number];

export const TECHNICAL_DEBT_LENSES = {
  cash: {
    label: "Trésorerie seule",
    description: "Décaissements du projet et dépenses réellement évitables.",
    breakEvenLabel: "Seuil de trésorerie annuelle",
    breakEvenUnit: "/ an",
  },
  capacity: {
    label: "Trésorerie + capacité",
    description:
      "Ajoute le temps interne valorisé, sans le présenter comme une économie bancaire.",
    breakEvenLabel: "Seuil de coût annuel observé",
    breakEvenUnit: "/ an",
  },
  risk: {
    label: "Avec risque attendu",
    description:
      "Ajoute probabilité × impact lorsque l’événement et ses coûts ne sont pas déjà comptés.",
    breakEvenLabel: "Seuil de coût annuel observé",
    breakEvenUnit: "/ an",
  },
} as const;

export type TechnicalDebtLens = keyof typeof TECHNICAL_DEBT_LENSES;

export const TECHNICAL_DEBT_FRICTION_FIELDS = [
  {
    key: "changesPerYear",
    label: "Changements par an",
    suffix: "",
    help: "Évolutions comparables observées sur une période représentative.",
  },
  {
    key: "extraHoursPerChange",
    label: "Heures supplémentaires par changement",
    suffix: "h",
    help: "Compréhension, reprise et correction hors travail utile.",
  },
  {
    key: "technicalHourlyRate",
    label: "Coût chargé de l’équipe technique",
    suffix: "€ / h",
    help: "Coût complet illustratif ou réellement documenté.",
  },
  {
    key: "incidentsPerYear",
    label: "Incidents distincts par an",
    suffix: "",
    help: "Incidents dont les heures ne figurent pas déjà dans les changements.",
  },
  {
    key: "hoursPerIncident",
    label: "Heures internes par incident",
    suffix: "h",
    help: "Réponse et remise en service hors factures externes.",
  },
  {
    key: "operators",
    label: "Personnes qui contournent le logiciel",
    suffix: "",
    help: "Personnes réellement concernées, pas tout l’effectif.",
  },
  {
    key: "workaroundHoursPerWeek",
    label: "Contournement par personne et par semaine",
    suffix: "h",
    help: "Ressaisie, contrôle ou opération manuelle attribuable.",
  },
  {
    key: "workingWeeks",
    label: "Semaines observées par an",
    suffix: "",
    help: "Exclure congés et périodes sans contournement.",
  },
  {
    key: "operationsHourlyRate",
    label: "Coût chargé des opérations",
    suffix: "€ / h",
    help: "Coût complet illustratif ou propre à l’entreprise.",
  },
  {
    key: "annualExternalCash",
    label: "Prestations d’urgence annuelles",
    suffix: "€",
    help: "Factures distinctes des heures internes.",
  },
  {
    key: "annualIncrementalOperations",
    label: "Licences et exploitation incrémentales",
    suffix: "€ / an",
    help: "Coûts qui disparaîtraient réellement si la friction était supprimée.",
  },
  {
    key: "futureIncidentImpact",
    label: "Impact d’un incident futur distinct",
    suffix: "€",
    help: "Impact qui exclut les heures, factures et ventes déjà comptées.",
  },
] as const;

export type TechnicalDebtFrictionField =
  (typeof TECHNICAL_DEBT_FRICTION_FIELDS)[number]["key"];

export type TechnicalDebtFrictionInputs = Record<
  TechnicalDebtFrictionField,
  number
>;

export const TECHNICAL_DEBT_OPTIONS = [
  {
    key: "wait",
    label: "Attendre sous surveillance",
    shortLabel: "Attendre",
    description:
      "Conserver le logiciel, nommer un propriétaire, une limite et une date de réexamen.",
  },
  {
    key: "stabilize",
    label: "Stabiliser une zone",
    shortLabel: "Stabiliser",
    description: "Tests, correction ciblée, sécurisation et transition courte.",
  },
  {
    key: "renovate",
    label: "Rénover progressivement",
    shortLabel: "Rénover",
    description: "Lots réversibles, coexistence et migration par étapes.",
  },
  {
    key: "standard",
    label: "Remplacer par un logiciel standard",
    shortLabel: "Standard",
    description:
      "Paramétrage, intégration, licences, migration, formation et sortie.",
  },
  {
    key: "rewrite",
    label: "Réécrire l’application",
    shortLabel: "Réécrire",
    description:
      "Construction, double fonctionnement, migration, recette et retrait.",
  },
] as const;

export type TechnicalDebtOptionKey =
  (typeof TECHNICAL_DEBT_OPTIONS)[number]["key"];

export const TECHNICAL_DEBT_OPTION_FIELDS = [
  {
    key: "initialAndTransition",
    label: "Projet et transition",
    suffix: "€",
    help: "Travaux, migration, coexistence, recette, formation et retrait payés une fois.",
  },
  {
    key: "annualRecurring",
    label: "Coût propre annuel",
    suffix: "€ / an",
    help: "Maintenance, licences ou exploitation propres à cette option.",
  },
  {
    key: "cashReductionPercent",
    label: "Trésorerie réduite",
    suffix: "%",
    help: "Part des sorties de trésorerie observées que cette option ferait réellement disparaître.",
  },
  {
    key: "capacityReductionPercent",
    label: "Capacité réduite",
    suffix: "%",
    help: "Part du temps interne mobilisé que cette option libérerait réellement.",
  },
  {
    key: "incidentProbabilityPercent",
    label: "Probabilité annuelle de l’incident",
    suffix: "%",
    help: "Probabilité de l’incident futur distinct dans cette option.",
  },
] as const;

export type TechnicalDebtOptionField =
  (typeof TECHNICAL_DEBT_OPTION_FIELDS)[number]["key"];

export interface TechnicalDebtOptionInput extends Record<
  TechnicalDebtOptionField,
  number
> {
  hasUnknownCosts: boolean;
}

export type TechnicalDebtOptionInputs = Record<
  TechnicalDebtOptionKey,
  TechnicalDebtOptionInput
>;

export const TECHNICAL_DEBT_SENSITIVITY_VALUES = [
  12000, 34048, 80000, 300000,
] as const;

export const TECHNICAL_DEBT_EXAMPLE_FRICTION: TechnicalDebtFrictionInputs = {
  changesPerYear: 18,
  extraHoursPerChange: 9,
  technicalHourlyRate: 68,
  incidentsPerYear: 6,
  hoursPerIncident: 7,
  operators: 4,
  workaroundHoursPerWeek: 2,
  workingWeeks: 46,
  operationsHourlyRate: 32,
  annualExternalCash: 4800,
  annualIncrementalOperations: 3600,
  futureIncidentImpact: 40000,
};

export const TECHNICAL_DEBT_EXAMPLE_OPTIONS: TechnicalDebtOptionInputs = {
  wait: {
    initialAndTransition: 0,
    annualRecurring: 0,
    cashReductionPercent: 0,
    capacityReductionPercent: 0,
    incidentProbabilityPercent: 20,
    hasUnknownCosts: false,
  },
  stabilize: {
    initialAndTransition: 28800,
    annualRecurring: 3000,
    cashReductionPercent: 45,
    capacityReductionPercent: 45,
    incidentProbabilityPercent: 10,
    hasUnknownCosts: false,
  },
  renovate: {
    initialAndTransition: 74050,
    annualRecurring: 5000,
    cashReductionPercent: 75,
    capacityReductionPercent: 75,
    incidentProbabilityPercent: 5,
    hasUnknownCosts: false,
  },
  rewrite: {
    initialAndTransition: 154900,
    annualRecurring: 8000,
    cashReductionPercent: 85,
    capacityReductionPercent: 85,
    incidentProbabilityPercent: 3,
    hasUnknownCosts: false,
  },
  standard: {
    initialAndTransition: 60200,
    annualRecurring: 30000,
    cashReductionPercent: 65,
    capacityReductionPercent: 65,
    incidentProbabilityPercent: 4,
    hasUnknownCosts: false,
  },
};

export type TechnicalDebtValidationError =
  | { scope: "friction"; field: TechnicalDebtFrictionField }
  | {
      scope: "option";
      option: TechnicalDebtOptionKey;
      field: TechnicalDebtOptionField;
    };

export interface TechnicalDebtFrictionResult {
  deliveryCapacity: number;
  incidentCapacity: number;
  workaroundCapacity: number;
  internalCapacity: number;
  externalCash: number;
  observedFriction: number;
}

export interface TechnicalDebtOptionResult {
  option: TechnicalDebtOptionKey;
  projectAndRecurringCash: number;
  residualCash: number;
  cashTotal: number;
  residualCapacity: number;
  riskExposure: number;
  selectedTotal: number;
  differenceFromLowest: number | null;
  breakEvenAnnualAmount: number | null;
  breakEvenBasis: "cash" | "observed" | null;
  /** @deprecated Use breakEvenAnnualAmount. Kept for compatible exports. */
  breakEvenAnnualFriction: number | null;
  isComparable: boolean;
}

export interface TechnicalDebtCalculation {
  isValid: boolean;
  horizonMonths: TechnicalDebtHorizon;
  lens: TechnicalDebtLens;
  friction: TechnicalDebtFrictionResult | null;
  optionResults: TechnicalDebtOptionResult[];
  lowestTotal: number | null;
  validationErrors: TechnicalDebtValidationError[];
}

export interface TechnicalDebtSensitivityResult {
  annualObservedFriction: number;
  scaleFactor: number;
  calculation: TechnicalDebtCalculation;
  winner: TechnicalDebtOptionKey | null;
}

function isValidAmount(value: number) {
  return Number.isFinite(value) && value >= 0;
}

function isValidPercent(value: number) {
  return isValidAmount(value) && value <= 100;
}

function roundMoney(value: number) {
  return Math.round((value + Number.EPSILON) * 100) / 100;
}

export function cloneTechnicalDebtFrictionInputs(
  inputs: TechnicalDebtFrictionInputs,
): TechnicalDebtFrictionInputs {
  return { ...inputs };
}

export function cloneTechnicalDebtOptionInputs(
  inputs: TechnicalDebtOptionInputs,
): TechnicalDebtOptionInputs {
  return {
    wait: { ...inputs.wait },
    stabilize: { ...inputs.stabilize },
    renovate: { ...inputs.renovate },
    standard: { ...inputs.standard },
    rewrite: { ...inputs.rewrite },
  };
}

export function getTechnicalDebtValidationMessage(
  error: TechnicalDebtValidationError,
) {
  if (error.scope === "friction") {
    const field = TECHNICAL_DEBT_FRICTION_FIELDS.find(
      (item) => item.key === error.field,
    );
    return `${field?.label ?? "Cette valeur"} : saisissez un nombre positif ou nul.`;
  }

  const field = TECHNICAL_DEBT_OPTION_FIELDS.find(
    (item) => item.key === error.field,
  );
  if (
    error.field === "cashReductionPercent" ||
    error.field === "capacityReductionPercent" ||
    error.field === "incidentProbabilityPercent"
  ) {
    return `${field?.label ?? "Ce pourcentage"} : saisissez une valeur entre 0 et 100.`;
  }
  return `${field?.label ?? "Cette valeur"} : saisissez un nombre positif ou nul.`;
}

function validateTechnicalDebtInputs(
  frictionInputs: TechnicalDebtFrictionInputs,
  optionInputs: TechnicalDebtOptionInputs,
) {
  const validationErrors: TechnicalDebtValidationError[] = [];

  for (const field of TECHNICAL_DEBT_FRICTION_FIELDS) {
    if (!isValidAmount(frictionInputs[field.key])) {
      validationErrors.push({ scope: "friction", field: field.key });
    }
  }

  for (const option of TECHNICAL_DEBT_OPTIONS) {
    for (const field of TECHNICAL_DEBT_OPTION_FIELDS) {
      const value = optionInputs[option.key][field.key];
      const isValid =
        field.key === "cashReductionPercent" ||
        field.key === "capacityReductionPercent" ||
        field.key === "incidentProbabilityPercent"
          ? isValidPercent(value)
          : isValidAmount(value);

      if (!isValid) {
        validationErrors.push({
          scope: "option",
          option: option.key,
          field: field.key,
        });
      }
    }
  }

  return validationErrors;
}

function calculateFromTechnicalDebtFriction(
  friction: TechnicalDebtFrictionResult,
  optionInputs: TechnicalDebtOptionInputs,
  horizonMonths: TechnicalDebtHorizon,
  lens: TechnicalDebtLens,
  futureIncidentImpact: number,
): TechnicalDebtCalculation {
  const years = horizonMonths / 12;
  const rawResults = TECHNICAL_DEBT_OPTIONS.map((option) => {
    const input = optionInputs[option.key];
    const cashReductionRate = input.cashReductionPercent / 100;
    const capacityReductionRate = input.capacityReductionPercent / 100;
    const projectAndRecurringCash = roundMoney(
      input.initialAndTransition + input.annualRecurring * years,
    );
    const residualCash = roundMoney(
      friction.externalCash * (1 - cashReductionRate) * years,
    );
    const cashTotal = roundMoney(projectAndRecurringCash + residualCash);
    const residualCapacity = roundMoney(
      friction.internalCapacity * (1 - capacityReductionRate) * years,
    );
    const riskExposure = roundMoney(
      (input.incidentProbabilityPercent / 100) * futureIncidentImpact * years,
    );
    const selectedTotal = roundMoney(
      cashTotal +
        (lens === "cash" ? 0 : residualCapacity) +
        (lens === "risk" ? riskExposure : 0),
    );
    const waitRisk =
      (optionInputs.wait.incidentProbabilityPercent / 100) *
      futureIncidentImpact;
    const optionRisk =
      (input.incidentProbabilityPercent / 100) * futureIncidentImpact;
    const fixedDifference =
      input.initialAndTransition +
      input.annualRecurring * years +
      (lens === "risk" ? (optionRisk - waitRisk) * years : 0);
    const annualReducible =
      lens === "cash"
        ? friction.externalCash * cashReductionRate
        : friction.externalCash * cashReductionRate +
          friction.internalCapacity * capacityReductionRate;
    const breakEvenAnnualAmount =
      option.key === "wait" || annualReducible <= 0
        ? null
        : roundMoney(
            lens === "cash"
              ? fixedDifference / (years * cashReductionRate)
              : (fixedDifference * friction.observedFriction) /
                  (years * annualReducible),
          );
    const breakEvenBasis: TechnicalDebtOptionResult["breakEvenBasis"] =
      breakEvenAnnualAmount === null
        ? null
        : lens === "cash"
          ? "cash"
          : "observed";

    return {
      option: option.key,
      projectAndRecurringCash,
      residualCash,
      cashTotal,
      residualCapacity,
      riskExposure,
      selectedTotal,
      differenceFromLowest: null,
      breakEvenAnnualAmount,
      breakEvenBasis,
      breakEvenAnnualFriction: breakEvenAnnualAmount,
      isComparable: !input.hasUnknownCosts,
    };
  });

  const comparableTotals = rawResults
    .filter((result) => result.isComparable)
    .map((result) => result.selectedTotal);
  const lowestTotal =
    comparableTotals.length > 0 ? Math.min(...comparableTotals) : null;
  const optionResults = rawResults.map((result) => ({
    ...result,
    differenceFromLowest:
      result.isComparable && lowestTotal !== null
        ? roundMoney(result.selectedTotal - lowestTotal)
        : null,
  }));

  if (
    !Number.isFinite(friction.observedFriction) ||
    optionResults.some((result) => !Number.isFinite(result.selectedTotal))
  ) {
    return {
      isValid: false,
      horizonMonths,
      lens,
      friction: null,
      optionResults: [],
      lowestTotal: null,
      validationErrors: TECHNICAL_DEBT_FRICTION_FIELDS.map((field) => ({
        scope: "friction" as const,
        field: field.key,
      })),
    };
  }

  return {
    isValid: true,
    horizonMonths,
    lens,
    friction,
    optionResults,
    lowestTotal,
    validationErrors: [],
  };
}

export function calculateTechnicalDebtDecision(
  frictionInputs: TechnicalDebtFrictionInputs,
  optionInputs: TechnicalDebtOptionInputs,
  horizonMonths: TechnicalDebtHorizon,
  lens: TechnicalDebtLens,
): TechnicalDebtCalculation {
  const validationErrors = validateTechnicalDebtInputs(
    frictionInputs,
    optionInputs,
  );
  if (validationErrors.length > 0) {
    return {
      isValid: false,
      horizonMonths,
      lens,
      friction: null,
      optionResults: [],
      lowestTotal: null,
      validationErrors,
    };
  }

  const deliveryCapacity = roundMoney(
    frictionInputs.changesPerYear *
      frictionInputs.extraHoursPerChange *
      frictionInputs.technicalHourlyRate,
  );
  const incidentCapacity = roundMoney(
    frictionInputs.incidentsPerYear *
      frictionInputs.hoursPerIncident *
      frictionInputs.technicalHourlyRate,
  );
  const workaroundCapacity = roundMoney(
    frictionInputs.operators *
      frictionInputs.workaroundHoursPerWeek *
      frictionInputs.workingWeeks *
      frictionInputs.operationsHourlyRate,
  );
  const internalCapacity = roundMoney(
    deliveryCapacity + incidentCapacity + workaroundCapacity,
  );
  const externalCash = roundMoney(
    frictionInputs.annualExternalCash +
      frictionInputs.annualIncrementalOperations,
  );
  const observedFriction = roundMoney(internalCapacity + externalCash);
  const friction: TechnicalDebtFrictionResult = {
    deliveryCapacity,
    incidentCapacity,
    workaroundCapacity,
    internalCapacity,
    externalCash,
    observedFriction,
  };

  return calculateFromTechnicalDebtFriction(
    friction,
    optionInputs,
    horizonMonths,
    lens,
    frictionInputs.futureIncidentImpact,
  );
}

export function calculateTechnicalDebtSensitivity(
  frictionInputs: TechnicalDebtFrictionInputs,
  optionInputs: TechnicalDebtOptionInputs,
  horizonMonths: TechnicalDebtHorizon,
  lens: TechnicalDebtLens,
  annualObservedFrictionValues: readonly number[] = TECHNICAL_DEBT_SENSITIVITY_VALUES,
): TechnicalDebtSensitivityResult[] {
  const baseline = calculateTechnicalDebtDecision(
    frictionInputs,
    optionInputs,
    horizonMonths,
    lens,
  );
  if (
    !baseline.isValid ||
    !baseline.friction ||
    baseline.friction.observedFriction <= 0
  ) {
    return [];
  }

  return annualObservedFrictionValues
    .filter((value) => isValidAmount(value))
    .map((annualObservedFriction) => {
      const scaleFactor =
        annualObservedFriction / baseline.friction!.observedFriction;
      const scaledFriction: TechnicalDebtFrictionResult = {
        deliveryCapacity: roundMoney(
          baseline.friction!.deliveryCapacity * scaleFactor,
        ),
        incidentCapacity: roundMoney(
          baseline.friction!.incidentCapacity * scaleFactor,
        ),
        workaroundCapacity: roundMoney(
          baseline.friction!.workaroundCapacity * scaleFactor,
        ),
        internalCapacity: roundMoney(
          baseline.friction!.internalCapacity * scaleFactor,
        ),
        externalCash: roundMoney(baseline.friction!.externalCash * scaleFactor),
        observedFriction: roundMoney(annualObservedFriction),
      };
      const calculation = calculateFromTechnicalDebtFriction(
        scaledFriction,
        optionInputs,
        horizonMonths,
        lens,
        frictionInputs.futureIncidentImpact,
      );
      const winner =
        calculation.optionResults.find(
          (result) => result.isComparable && result.differenceFromLowest === 0,
        )?.option ?? null;
      return {
        annualObservedFriction: roundMoney(annualObservedFriction),
        scaleFactor,
        calculation,
        winner,
      };
    });
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

export function buildTechnicalDebtSummary(
  frictionInputs: TechnicalDebtFrictionInputs,
  optionInputs: TechnicalDebtOptionInputs,
  calculation: TechnicalDebtCalculation,
) {
  if (!calculation.isValid || !calculation.friction) {
    return "";
  }

  const lens = TECHNICAL_DEBT_LENSES[calculation.lens];
  const lines = [
    `Dette technique — comparaison sur ${calculation.horizonMonths} mois — lecture ${lens.label.toLowerCase()}`,
    "Exemple fictif et modifiable : ni devis, ni économie garantie, ni recommandation automatique.",
    "",
    `Capacité interne valorisée : ${formatTextAmount(calculation.friction.internalCapacity)}/an.`,
    `Sorties de trésorerie attribuables : ${formatTextAmount(calculation.friction.externalCash)}/an.`,
    `Coût annuel observé (capacité + trésorerie) : ${formatTextAmount(calculation.friction.observedFriction)}/an ; ce total ne constitue pas une économie de caisse.`,
    "",
  ];

  for (const option of TECHNICAL_DEBT_OPTIONS) {
    const input = optionInputs[option.key];
    const result = calculation.optionResults.find(
      (item) => item.option === option.key,
    );

    if (!result) {
      continue;
    }

    lines.push(
      `${option.label} : projet et transition ${formatTextAmount(input.initialAndTransition)} ; récurrent ${formatTextAmount(input.annualRecurring)}/an ; trésorerie réduite ${input.cashReductionPercent.toLocaleString("fr-FR")} % ; capacité réduite ${input.capacityReductionPercent.toLocaleString("fr-FR")} % ; risque annuel ${input.incidentProbabilityPercent.toLocaleString("fr-FR")} % ; trésorerie sur l’horizon ${formatTextAmount(result.cashTotal)} ; capacité résiduelle ${formatTextAmount(result.residualCapacity)} ; risque attendu ${formatTextAmount(result.riskExposure)} ; charge totale comparable ${formatTextAmount(result.selectedTotal)}${input.hasUnknownCosts ? " ; coûts importants encore inconnus, option exclue du classement" : ""}.`,
    );
  }

  lines.push(
    "",
    "Limites : chaque heure, facture et incident doit avoir un identifiant unique. Une capacité salariée valorisée n’est pas une économie bancaire. L’opportunité commerciale reste hors du classement.",
  );

  return lines.join("\n");
}

export function buildTechnicalDebtCsv(
  frictionInputs: TechnicalDebtFrictionInputs,
  optionInputs: TechnicalDebtOptionInputs,
  calculation: TechnicalDebtCalculation,
) {
  if (!calculation.isValid || !calculation.friction) {
    return "";
  }

  const rows: string[][] = [
    ["Dossier de décision — dette technique"],
    [
      "Limite",
      "Exemple fictif et modifiable ; ni devis, ni économie garantie, ni recommandation automatique.",
    ],
    ["Horizon (mois)", String(calculation.horizonMonths)],
    ["Lecture", TECHNICAL_DEBT_LENSES[calculation.lens].label],
    [],
    ["Hypothèse de friction", "Valeur"],
  ];

  for (const field of TECHNICAL_DEBT_FRICTION_FIELDS) {
    rows.push([field.label, formatCsvNumber(frictionInputs[field.key])]);
  }

  rows.push(
    [],
    ["Sous-total", "Valeur annuelle (€)", "Ce que cela signifie"],
    [
      "Capacité interne valorisée",
      formatCsvNumber(calculation.friction.internalCapacity),
      "Temps libérable, pas économie de caisse automatique",
    ],
    [
      "Sorties de trésorerie attribuables",
      formatCsvNumber(calculation.friction.externalCash),
      "Dépenses potentiellement évitables si les hypothèses se vérifient",
    ],
    [
      "Coût annuel observé (capacité + trésorerie)",
      formatCsvNumber(calculation.friction.observedFriction),
      "Somme de catégories distinctes, pas bénéfice promis",
    ],
    [],
    [
      "Option",
      "Projet et transition (€)",
      "Récurrent annuel (€)",
      "Trésorerie réduite (%)",
      "Capacité réduite (%)",
      "Probabilité incident (%)",
      "Trésorerie sur l’horizon (€)",
      "Capacité résiduelle (€)",
      "Risque attendu (€)",
      "Charge totale comparable (€)",
      "Coûts inconnus",
      "Convention",
    ],
  );

  for (const option of TECHNICAL_DEBT_OPTIONS) {
    const input = optionInputs[option.key];
    const result = calculation.optionResults.find(
      (item) => item.option === option.key,
    );

    if (!result) {
      continue;
    }

    rows.push([
      option.label,
      formatCsvNumber(input.initialAndTransition),
      formatCsvNumber(input.annualRecurring),
      formatCsvNumber(input.cashReductionPercent),
      formatCsvNumber(input.capacityReductionPercent),
      formatCsvNumber(input.incidentProbabilityPercent),
      formatCsvNumber(result.cashTotal),
      formatCsvNumber(result.residualCapacity),
      formatCsvNumber(result.riskExposure),
      formatCsvNumber(result.selectedTotal),
      input.hasUnknownCosts ? "oui" : "non",
      "La sensibilité met à l’échelle cash et capacité proportionnellement ; risque, probabilités et coûts fixes restent inchangés.",
    ]);
  }

  rows.push(
    [],
    [
      "Seuil de bascule",
      TECHNICAL_DEBT_LENSES[calculation.lens].breakEvenLabel,
      TECHNICAL_DEBT_LENSES[calculation.lens].breakEvenUnit,
    ],
    [
      "Convention de sensibilité",
      "Cash et capacité sont mis à l’échelle proportionnellement ; impact, probabilités et coûts fixes restent inchangés.",
    ],
    [
      "Anti-double comptage",
      "Une heure, facture ou conséquence reçoit un identifiant unique et une seule catégorie.",
    ],
    [
      "Opportunité",
      "Hors du classement ; utiliser la marge, la causalité et la part non récupérée, jamais le chiffre d’affaires brut.",
    ],
  );

  return rows.map((row) => row.map(quoteCsv).join(";")).join("\n");
}
