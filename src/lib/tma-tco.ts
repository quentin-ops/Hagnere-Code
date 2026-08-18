export const TMA_TCO_PATHS = [
  {
    key: "hybrid",
    label: "Formule hybride",
    shortLabel: "Hybride",
    description:
      "Quelques jours réservés couvrent les demandes qui reviennent ; les autres travaux sont autorisés séparément.",
  },
  {
    key: "capacity-annual-carry",
    label: "Capacité avec report annuel",
    shortLabel: "Capacité reportée",
    description:
      "Les jours non utilisés peuvent réellement servir plus tard dans l’année, s’ils restent disponibles au bon moment.",
  },
  {
    key: "time-spent",
    label: "Temps réellement mobilisé",
    shortLabel: "Temps passé",
    description:
      "Les jours consommés sont facturés ; l’entreprise garde une part importante du tri, des décisions et de la vérification.",
  },
  {
    key: "capacity-no-carry",
    label: "Capacité sans report",
    shortLabel: "Sans report",
    description:
      "Les jours expirent chaque mois ; les pointes déclenchent ici neuf jours de dépassement malgré quinze jours perdus.",
  },
  {
    key: "defined-lots",
    label: "Lots clairement définis",
    shortLabel: "Lots",
    description:
      "Corrections, diagnostics et évolutions reçoivent un prix et une sortie vérifiable par famille.",
  },
  {
    key: "on-demand",
    label: "Interventions ponctuelles",
    shortLabel: "Ponctuel",
    description:
      "Aucune capacité récurrente ; six jours fictifs de remise en contexte et un suivi plus lourd par votre équipe sont inclus.",
  },
  {
    key: "internal-hire",
    label: "Compétence internalisée",
    shortLabel: "Interne",
    description:
      "Le coût annuel de la fonction est comparé en trésorerie ; les jours restants ne sont ni gratuits ni automatiquement valorisés.",
  },
] as const;

export type TmaTcoPathKey = (typeof TMA_TCO_PATHS)[number]["key"];

export const TMA_TCO_FIELDS = [
  {
    key: "providerAnnual",
    label: "Coût externe ou coût de la fonction par an",
    help: "Selon l’option : prestataire, capacité, lots, outils ou coût chargé de la fonction internalisée.",
    suffix: "€",
  },
  {
    key: "internalHoursWeekly",
    label: "Temps de votre équipe chaque semaine",
    help: "Temps moyen consacré au tri, aux réponses, aux décisions et à la vérification du travail.",
    suffix: "h",
  },
  {
    key: "oneOff",
    label: "Reprise initiale, outils et sortie",
    help: "Diagnostic initial, transfert, documentation, formation, outils et changement de prestataire payés une seule fois sur l’horizon. Saisissez zéro uniquement si le poste est réellement nul ou déjà inclus et documenté.",
    suffix: "€",
  },
  {
    key: "residualAnnual",
    label: "Pertes et risques restant à votre charge par an",
    help: "Montant annuel documenté qui reste à la charge de l’entreprise et n’est pas déjà compté ailleurs. S’il est inconnu, cochez le poste à confirmer au lieu de le transformer en zéro.",
    suffix: "€",
  },
] as const;

export type TmaTcoField = (typeof TMA_TCO_FIELDS)[number]["key"];
export type TmaTcoPathInput = Record<TmaTcoField, number> & {
  hasUnknownCosts: boolean;
};
export type TmaTcoInputs = Record<TmaTcoPathKey, TmaTcoPathInput>;

export const TMA_TCO_HORIZONS = [12, 24, 36] as const;
export type TmaTcoHorizon = (typeof TMA_TCO_HORIZONS)[number];

export const TMA_TCO_EXAMPLE_INPUTS: TmaTcoInputs = {
  hybrid: {
    providerAnnual: 74100,
    internalHoursWeekly: 2,
    oneOff: 0,
    residualAnnual: 0,
    hasUnknownCosts: true,
  },
  "capacity-annual-carry": {
    providerAnnual: 72000,
    internalHoursWeekly: 3,
    oneOff: 0,
    residualAnnual: 0,
    hasUnknownCosts: true,
  },
  "time-spent": {
    providerAnnual: 72000,
    internalHoursWeekly: 5,
    oneOff: 0,
    residualAnnual: 0,
    hasUnknownCosts: true,
  },
  "capacity-no-carry": {
    providerAnnual: 79650,
    internalHoursWeekly: 3,
    oneOff: 0,
    residualAnnual: 0,
    hasUnknownCosts: true,
  },
  "defined-lots": {
    providerAnnual: 79800,
    internalHoursWeekly: 4,
    oneOff: 0,
    residualAnnual: 0,
    hasUnknownCosts: true,
  },
  "on-demand": {
    providerAnnual: 81600,
    internalHoursWeekly: 7,
    oneOff: 0,
    residualAnnual: 0,
    hasUnknownCosts: true,
  },
  "internal-hire": {
    providerAnnual: 102000,
    internalHoursWeekly: 2,
    oneOff: 0,
    residualAnnual: 0,
    hasUnknownCosts: true,
  },
};

export interface TmaTcoValidationError {
  path?: TmaTcoPathKey;
  field: TmaTcoField | "internalHourlyRate" | "horizonMonths";
}

export interface TmaTcoPathResult {
  path: TmaTcoPathKey;
  providerTotal: number;
  internalTotal: number;
  oneOff: number;
  residualTotal: number;
  total: number;
  averageMonthly: number;
  hasUnknownCosts: boolean;
  differenceFromLowest: number | null;
}

export interface TmaTcoCalculation {
  isValid: boolean;
  horizonMonths: TmaTcoHorizon;
  internalHourlyRate: number;
  results: TmaTcoPathResult[];
  lowestTotal: number | null;
  validationErrors: TmaTcoValidationError[];
}

function isValidAmount(value: number) {
  return Number.isFinite(value) && value >= 0;
}

export function cloneTmaTcoInputs(inputs: TmaTcoInputs): TmaTcoInputs {
  return {
    hybrid: { ...inputs.hybrid },
    "capacity-annual-carry": { ...inputs["capacity-annual-carry"] },
    "time-spent": { ...inputs["time-spent"] },
    "capacity-no-carry": { ...inputs["capacity-no-carry"] },
    "defined-lots": { ...inputs["defined-lots"] },
    "on-demand": { ...inputs["on-demand"] },
    "internal-hire": { ...inputs["internal-hire"] },
  };
}

export function calculateTmaTco(
  inputs: TmaTcoInputs,
  horizonMonths: TmaTcoHorizon,
  internalHourlyRate: number,
): TmaTcoCalculation {
  const validationErrors: TmaTcoValidationError[] = [];

  if (!TMA_TCO_HORIZONS.includes(horizonMonths)) {
    validationErrors.push({ field: "horizonMonths" });
  }

  if (!isValidAmount(internalHourlyRate)) {
    validationErrors.push({ field: "internalHourlyRate" });
  }

  for (const path of TMA_TCO_PATHS) {
    for (const field of TMA_TCO_FIELDS) {
      if (!isValidAmount(inputs[path.key][field.key])) {
        validationErrors.push({ path: path.key, field: field.key });
      }
    }
  }

  if (validationErrors.length > 0) {
    return {
      isValid: false,
      horizonMonths,
      internalHourlyRate,
      results: [],
      lowestTotal: null,
      validationErrors,
    };
  }

  const years = horizonMonths / 12;
  const resultsWithoutDifference = TMA_TCO_PATHS.map((path) => {
    const values = inputs[path.key];
    const providerTotal = values.providerAnnual * years;
    const internalTotal =
      values.internalHoursWeekly * 52 * internalHourlyRate * years;
    const residualTotal = values.residualAnnual * years;
    const total = providerTotal + internalTotal + values.oneOff + residualTotal;

    return {
      path: path.key,
      providerTotal,
      internalTotal,
      oneOff: values.oneOff,
      residualTotal,
      total,
      averageMonthly: total / horizonMonths,
      hasUnknownCosts: values.hasUnknownCosts,
    };
  });

  if (
    resultsWithoutDifference.some((result) =>
      Object.values(result).some(
        (value) => typeof value === "number" && !Number.isFinite(value),
      ),
    )
  ) {
    return {
      isValid: false,
      horizonMonths,
      internalHourlyRate,
      results: [],
      lowestTotal: null,
      validationErrors: TMA_TCO_PATHS.flatMap((path) =>
        TMA_TCO_FIELDS.map((field) => ({
          path: path.key,
          field: field.key,
        })),
      ),
    };
  }

  const comparableResults = resultsWithoutDifference.filter(
    (result) => !result.hasUnknownCosts,
  );
  const lowestTotal =
    comparableResults.length > 0
      ? Math.min(...comparableResults.map((result) => result.total))
      : null;

  return {
    isValid: true,
    horizonMonths,
    internalHourlyRate,
    lowestTotal,
    validationErrors,
    results: resultsWithoutDifference.map((result) => ({
      ...result,
      differenceFromLowest:
        lowestTotal === null || result.hasUnknownCosts
          ? null
          : result.total - lowestTotal,
    })),
  };
}

export interface DowntimeImpactInputs {
  peopleBlocked: number;
  hourlyCost: number;
  durationHours: number;
  lostTimeShare: number;
  unrecoveredContribution: number;
}

export function calculateDowntimeImpact(inputs: DowntimeImpactInputs) {
  const values = Object.values(inputs);
  if (
    values.some((value) => !isValidAmount(value)) ||
    inputs.lostTimeShare > 1
  ) {
    return Number.NaN;
  }

  return (
    inputs.peopleBlocked *
      inputs.hourlyCost *
      inputs.durationHours *
      inputs.lostTimeShare +
    inputs.unrecoveredContribution
  );
}

export function calculateVariableDaysBreakEven(
  capacityTotal: number,
  hybridFixedAndInternal: number,
  variableDayRate: number,
) {
  if (
    !isValidAmount(capacityTotal) ||
    !isValidAmount(hybridFixedAndInternal) ||
    !Number.isFinite(variableDayRate) ||
    variableDayRate <= 0
  ) {
    return Number.NaN;
  }

  return (capacityTotal - hybridFixedAndInternal) / variableDayRate;
}

export function calculateGovernanceHoursBreakEven(
  targetTotal: number,
  externalAnnual: number,
  internalHourlyRate: number,
) {
  if (
    !isValidAmount(targetTotal) ||
    !isValidAmount(externalAnnual) ||
    !Number.isFinite(internalHourlyRate) ||
    internalHourlyRate <= 0
  ) {
    return Number.NaN;
  }

  return (targetTotal - externalAnnual) / (52 * internalHourlyRate);
}

function formatTextAmount(value: number) {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 2,
  }).format(value);
}

function csvCell(value: string | number) {
  const text = String(value).replaceAll('"', '""');
  return `"${text}"`;
}

export function buildTmaTcoSummary(
  inputs: TmaTcoInputs,
  calculation: TmaTcoCalculation,
) {
  if (!calculation.isValid) {
    throw new Error("La comparaison TMA doit être valide avant son export.");
  }

  const lines = [
    "Comparaison TMA ou régie — coûts renseignés, hypothèses fictives et modifiables",
    `Horizon : ${calculation.horizonMonths} mois`,
    `Coût interne chargé : ${formatTextAmount(calculation.internalHourlyRate)} par heure`,
    "",
  ];

  for (const result of calculation.results) {
    const path = TMA_TCO_PATHS.find((item) => item.key === result.path);
    const source = inputs[result.path];
    lines.push(
      `${path?.label ?? result.path} : ${formatTextAmount(result.total)} de coûts renseignés`,
      `  Coût externe ou coût de la fonction saisi : ${formatTextAmount(source.providerAnnual)} par an`,
      `  Temps de votre équipe : ${source.internalHoursWeekly} h/semaine, soit ${formatTextAmount(result.internalTotal)} sur l’horizon`,
      `  Reprise initiale, outils et sortie : ${formatTextAmount(result.oneOff)}`,
      `  Pertes et risques restant à votre charge : ${formatTextAmount(result.residualTotal)} sur l’horizon`,
      `  Postes importants à confirmer : ${source.hasUnknownCosts ? "oui — coût partiel, option exclue du classement" : "non — postes déclarés complets"}`,
      result.differenceFromLowest === null
        ? "  Écart au coût renseigné le plus faible : non calculé"
        : `  Écart au coût renseigné le plus faible comparable : ${formatTextAmount(result.differenceFromLowest)}`,
      "",
    );
  }

  lines.push(
    calculation.lowestTotal === null
      ? "Aucun classement : chaque option conserve au moins un poste important à confirmer."
      : "Le coût renseigné le plus faible n’est pas nécessairement la meilleure décision : comparez aussi couverture, compétences, dépendance, acceptation, accès et sortie.",
    "Un zéro signifie uniquement que le poste est réellement nul ou déjà inclus et documenté. Un poste inconnu doit rester marqué à confirmer.",
    "Les montants de départ sont fictifs : ils ne constituent ni des prix de marché, ni un devis Hagnéré Code.",
  );

  return lines.join("\n");
}

export function buildTmaTcoCsv(
  inputs: TmaTcoInputs,
  calculation: TmaTcoCalculation,
) {
  if (!calculation.isValid) {
    throw new Error("La comparaison TMA doit être valide avant son export.");
  }

  const rows = [
    [
      "Option",
      "Horizon mois",
      "Coût externe ou coût de la fonction annuel saisi",
      "Temps de votre équipe h/semaine",
      "Coût interne €/h",
      "Reprise initiale, outils et sortie",
      "Pertes et risques restant à votre charge par an",
      "Postes importants à confirmer",
      "Coût externe ou coût de la fonction sur horizon",
      "Temps de votre équipe sur horizon",
      "Pertes et risques sur horizon",
      "Coût renseigné",
      "Écart au coût renseigné le plus faible comparable",
    ],
    ...calculation.results.map((result) => {
      const path = TMA_TCO_PATHS.find((item) => item.key === result.path);
      const source = inputs[result.path];
      return [
        path?.label ?? result.path,
        calculation.horizonMonths,
        source.providerAnnual,
        source.internalHoursWeekly,
        calculation.internalHourlyRate,
        source.oneOff,
        source.residualAnnual,
        source.hasUnknownCosts ? "oui" : "non",
        result.providerTotal,
        result.internalTotal,
        result.residualTotal,
        result.total,
        result.differenceFromLowest ?? "non classé",
      ];
    }),
  ];

  return rows.map((row) => row.map(csvCell).join(";")).join("\n");
}
