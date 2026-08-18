export const SAAS_HANDOVER_DECISION_VERSION =
  "saas-handover-decision-r3-2026-07-28";
export const SAAS_HANDOVER_MAX_INPUT = 1_000_000_000_000;

export const SAAS_HANDOVER_OPTIONS = [
  {
    key: "stabilize",
    label: "Stabiliser l’existant",
    shortLabel: "Stabiliser",
  },
  {
    key: "migrate",
    label: "Migration ciblée",
    shortLabel: "Migrer",
  },
  {
    key: "rewrite",
    label: "Réécriture",
    shortLabel: "Réécrire",
  },
] as const;

export type SaasHandoverOptionKey =
  (typeof SAAS_HANDOVER_OPTIONS)[number]["key"];

export const SAAS_HANDOVER_TCO_FIELDS = [
  {
    key: "takeover",
    label: "Audit, prise en main ou cadrage",
  },
  {
    key: "initialWork",
    label: "Stabilisation, migration ou construction",
  },
  {
    key: "maintenance",
    label: "Maintenance sur 36 mois",
  },
  {
    key: "infrastructure",
    label: "Infrastructure et surveillance sur 36 mois",
  },
  {
    key: "internalCapacity",
    label: "Temps interne valorisé",
  },
  {
    key: "doubleRun",
    label: "Double exploitation",
  },
  {
    key: "documentedExit",
    label: "Sortie documentée",
  },
] as const;

export type SaasHandoverTcoField =
  (typeof SAAS_HANDOVER_TCO_FIELDS)[number]["key"];
export type SaasHandoverTcoOption = Record<SaasHandoverTcoField, number>;
export type SaasHandoverTcoInputs = Record<
  SaasHandoverOptionKey,
  SaasHandoverTcoOption
>;

export const SAAS_HANDOVER_EXAMPLE_TCO: SaasHandoverTcoInputs = {
  stabilize: {
    takeover: 9_000,
    initialWork: 18_000,
    maintenance: 79_200,
    infrastructure: 23_400,
    internalCapacity: 9_900,
    doubleRun: 0,
    documentedExit: 2_000,
  },
  migrate: {
    takeover: 9_000,
    initialWork: 67_000,
    maintenance: 64_800,
    infrastructure: 27_000,
    internalCapacity: 15_840,
    doubleRun: 0,
    documentedExit: 3_000,
  },
  rewrite: {
    takeover: 14_000,
    initialWork: 140_000,
    maintenance: 60_300,
    infrastructure: 32_400,
    internalCapacity: 12_100,
    doubleRun: 12_000,
    documentedExit: 4_000,
  },
};

export type SaasHandoverStatus = "PASS" | "STOP";

export type SaasHandoverTcoResult = {
  status: SaasHandoverStatus;
  invalidFields: string[];
  totals: Record<SaasHandoverOptionKey, number | null>;
  cheapest: SaasHandoverOptionKey | null;
};

export type RewriteThresholdInput = {
  monthlyContributionPerClient: number;
  productiveMonths: number;
};

export type RewriteThresholdResult = {
  status: SaasHandoverStatus;
  surcharge: number | null;
  clientMonths: number | null;
  simultaneousClients: number | null;
  roundedClients: number | null;
};

export type RpoInput = {
  eventsPerDay: number;
  backupIntervalHours: number;
  minutesPerEvent: number;
  reconstructionHourlyCost: number;
};

export type RpoResult = {
  status: SaasHandoverStatus;
  averageEventsExposed: number | null;
  maximumEventsExposed: number | null;
  maximumReconstructionCost: number | null;
};

export type RecoveryExerciseInput = {
  monthlyContribution: number;
  responderCount: number;
  responderHourlyCost: number;
  exerciseExternalHours: number;
  exerciseExternalRate: number;
  exerciseInternalHours: number;
  annualIncidentProbabilityPercent: number;
};

export type RecoveryExerciseResult = {
  status: SaasHandoverStatus;
  exerciseCost: number | null;
  hourlyExposure: number | null;
  breakEvenHours: number | null;
};

export type OutageResult = {
  status: SaasHandoverStatus;
  contributionExposed: number | null;
  capacityMobilized: number | null;
  total: number | null;
};

export type AccountRecoveryInput = {
  personalServiceCount: number;
  preparedExternalHoursPerService: number;
  crisisExternalHoursPerService: number;
  externalHourlyRate: number;
  preparedInternalHoursPerService: number;
  crisisInternalHoursPerService: number;
  internalHourlyCost: number;
  commonPreparedTooling: number;
};

export type AccountRecoveryResult = {
  status: SaasHandoverStatus;
  preparedCost: number | null;
  crisisCost: number | null;
  directDifference: number | null;
};

function validNumber(
  value: number,
  {
    positive = false,
    integer = false,
    maximum = SAAS_HANDOVER_MAX_INPUT,
  }: { positive?: boolean; integer?: boolean; maximum?: number } = {},
): boolean {
  return (
    Number.isFinite(value) &&
    value >= (positive ? Number.EPSILON : 0) &&
    value <= maximum &&
    (!integer || Number.isInteger(value))
  );
}

export function cloneSaasHandoverTcoInputs(
  source: SaasHandoverTcoInputs,
): SaasHandoverTcoInputs {
  return {
    stabilize: { ...source.stabilize },
    migrate: { ...source.migrate },
    rewrite: { ...source.rewrite },
  };
}

export function calculateSaasHandoverTco(
  inputs: SaasHandoverTcoInputs,
): SaasHandoverTcoResult {
  const invalidFields: string[] = [];
  const totals = {} as Record<SaasHandoverOptionKey, number | null>;

  for (const option of SAAS_HANDOVER_OPTIONS) {
    let total = 0;
    let valid = true;
    for (const field of SAAS_HANDOVER_TCO_FIELDS) {
      const value = inputs[option.key][field.key];
      if (!validNumber(value)) {
        invalidFields.push(`${option.key}.${field.key}`);
        valid = false;
        continue;
      }
      total += value;
    }
    totals[option.key] = valid && Number.isFinite(total) ? total : null;
  }

  if (invalidFields.length > 0) {
    return { status: "STOP", invalidFields, totals, cheapest: null };
  }

  const cheapest = SAAS_HANDOVER_OPTIONS.reduce((best, option) =>
    (totals[option.key] ?? Infinity) < (totals[best.key] ?? Infinity)
      ? option
      : best,
  ).key;

  return { status: "PASS", invalidFields, totals, cheapest };
}

export function calculateRewriteThreshold(
  tco: SaasHandoverTcoResult,
  input: RewriteThresholdInput,
): RewriteThresholdResult {
  const stabilize = tco.totals.stabilize;
  const rewrite = tco.totals.rewrite;
  if (
    tco.status !== "PASS" ||
    stabilize === null ||
    rewrite === null ||
    !validNumber(input.monthlyContributionPerClient, { positive: true }) ||
    !validNumber(input.productiveMonths, { positive: true })
  ) {
    return {
      status: "STOP",
      surcharge: null,
      clientMonths: null,
      simultaneousClients: null,
      roundedClients: null,
    };
  }

  const surcharge = rewrite - stabilize;
  if (!Number.isFinite(surcharge) || surcharge <= 0) {
    return {
      status: "PASS",
      surcharge,
      clientMonths: 0,
      simultaneousClients: 0,
      roundedClients: 0,
    };
  }

  const clientMonths = surcharge / input.monthlyContributionPerClient;
  const simultaneousClients = clientMonths / input.productiveMonths;
  return {
    status: "PASS",
    surcharge,
    clientMonths,
    simultaneousClients,
    roundedClients: Math.ceil(simultaneousClients),
  };
}

export function calculateRpo(input: RpoInput): RpoResult {
  if (
    !validNumber(input.eventsPerDay) ||
    !validNumber(input.backupIntervalHours, {
      positive: true,
      maximum: 24 * 365,
    }) ||
    !validNumber(input.minutesPerEvent) ||
    !validNumber(input.reconstructionHourlyCost)
  ) {
    return {
      status: "STOP",
      averageEventsExposed: null,
      maximumEventsExposed: null,
      maximumReconstructionCost: null,
    };
  }

  const maximumEventsExposed =
    input.eventsPerDay * (input.backupIntervalHours / 24);
  const averageEventsExposed = maximumEventsExposed / 2;
  const maximumReconstructionCost =
    maximumEventsExposed *
    (input.minutesPerEvent / 60) *
    input.reconstructionHourlyCost;
  return {
    status: "PASS",
    averageEventsExposed,
    maximumEventsExposed,
    maximumReconstructionCost,
  };
}

export function calculateRecoveryExercise(
  input: RecoveryExerciseInput,
): RecoveryExerciseResult {
  if (
    !validNumber(input.monthlyContribution) ||
    !validNumber(input.responderCount, { integer: true }) ||
    !validNumber(input.responderHourlyCost) ||
    !validNumber(input.exerciseExternalHours) ||
    !validNumber(input.exerciseExternalRate) ||
    !validNumber(input.exerciseInternalHours) ||
    !validNumber(input.annualIncidentProbabilityPercent, { maximum: 100 })
  ) {
    return {
      status: "STOP",
      exerciseCost: null,
      hourlyExposure: null,
      breakEvenHours: null,
    };
  }

  const exerciseCost =
    input.exerciseExternalHours * input.exerciseExternalRate +
    input.exerciseInternalHours * input.responderHourlyCost;
  const hourlyExposure =
    input.monthlyContribution / (30 * 24) +
    input.responderCount * input.responderHourlyCost;
  const probability = input.annualIncidentProbabilityPercent / 100;
  const breakEvenHours =
    hourlyExposure > 0 && probability > 0
      ? exerciseCost / (probability * hourlyExposure)
      : null;
  return {
    status: breakEvenHours === null ? "STOP" : "PASS",
    exerciseCost,
    hourlyExposure,
    breakEvenHours,
  };
}

export function calculateOutage(
  input: RecoveryExerciseInput,
  outageHours: number,
): OutageResult {
  if (
    !validNumber(outageHours) ||
    !validNumber(input.monthlyContribution) ||
    !validNumber(input.responderCount, { integer: true }) ||
    !validNumber(input.responderHourlyCost)
  ) {
    return {
      status: "STOP",
      contributionExposed: null,
      capacityMobilized: null,
      total: null,
    };
  }

  const contributionExposed =
    (input.monthlyContribution / (30 * 24)) * outageHours;
  const capacityMobilized =
    input.responderCount * input.responderHourlyCost * outageHours;
  return {
    status: "PASS",
    contributionExposed,
    capacityMobilized,
    total: contributionExposed + capacityMobilized,
  };
}

export function calculateAccountRecovery(
  input: AccountRecoveryInput,
): AccountRecoveryResult {
  const values = Object.entries(input);
  if (
    values.some(
      ([key, value]) =>
        !validNumber(value, {
          integer: key === "personalServiceCount",
        }),
    )
  ) {
    return {
      status: "STOP",
      preparedCost: null,
      crisisCost: null,
      directDifference: null,
    };
  }

  const preparedPerService =
    input.preparedExternalHoursPerService * input.externalHourlyRate +
    input.preparedInternalHoursPerService * input.internalHourlyCost;
  const crisisPerService =
    input.crisisExternalHoursPerService * input.externalHourlyRate +
    input.crisisInternalHoursPerService * input.internalHourlyCost;
  const preparedCost =
    preparedPerService * input.personalServiceCount +
    input.commonPreparedTooling;
  const crisisCost = crisisPerService * input.personalServiceCount;
  return {
    status: "PASS",
    preparedCost,
    crisisCost,
    directDifference: crisisCost - preparedCost,
  };
}

export type SaasHandoverExportState = {
  tcoInputs: SaasHandoverTcoInputs;
  tco: SaasHandoverTcoResult;
  rewriteInput: RewriteThresholdInput;
  rewrite: RewriteThresholdResult;
  rpoInput: RpoInput;
  rpo: RpoResult;
  recoveryInput: RecoveryExerciseInput;
  recovery: RecoveryExerciseResult;
  outageHours: number;
  outage: OutageResult;
  accountInput: AccountRecoveryInput;
  accounts: AccountRecoveryResult;
};

export function buildSaasHandoverSummary(
  args: SaasHandoverExportState,
): string {
  const lines = [
    `Modèle : ${SAAS_HANDOVER_DECISION_VERSION}`,
    "Les montants sont illustratifs, hors taxes et ne décrivent aucun client.",
  ];
  if (args.tco.status === "PASS") {
    lines.push(
      `TCO 36 mois — stabiliser : ${args.tco.totals.stabilize} € ; migrer : ${args.tco.totals.migrate} € ; réécrire : ${args.tco.totals.rewrite} €.`,
    );
    for (const option of SAAS_HANDOVER_OPTIONS) {
      lines.push(
        `${option.label} — ${SAAS_HANDOVER_TCO_FIELDS.map(
          (field) =>
            `${field.label} : ${args.tcoInputs[option.key][field.key]} €`,
        ).join(" ; ")}.`,
      );
    }
  } else {
    lines.push("TCO : STOP — hypothèse manquante ou invalide.");
  }
  if (args.rewrite.status === "PASS") {
    lines.push(
      `Seuil de réécriture : ${args.rewrite.surcharge} € de surcoût ; contribution saisie ${args.rewriteInput.monthlyContributionPerClient} € par client et par mois ; ${args.rewriteInput.productiveMonths} mois productifs ; ${args.rewrite.clientMonths} clients-mois ; ${args.rewrite.roundedClients} client(s) équivalent(s) sur toute la période, arrondi(s) au supérieur.`,
    );
  } else {
    lines.push("Seuil de réécriture : STOP.");
  }
  if (args.rpo.status === "PASS") {
    lines.push(
      `RPO saisi : ${args.rpoInput.eventsPerDay} événement(s) par jour ; point restaurable toutes les ${args.rpoInput.backupIntervalHours} h ; ${args.rpoInput.minutesPerEvent} min et ${args.rpoInput.reconstructionHourlyCost} € / h pour reconstituer un événement ; exposition moyenne ${args.rpo.averageEventsExposed}, maximale ${args.rpo.maximumEventsExposed}, capacité maximale ${args.rpo.maximumReconstructionCost} €.`,
    );
  }
  if (args.recovery.status === "PASS") {
    lines.push(
      `Exercice saisi : contribution exposée ${args.recoveryInput.monthlyContribution} € / mois ; ${args.recoveryInput.responderCount} personne(s) à ${args.recoveryInput.responderHourlyCost} € / h ; ${args.recoveryInput.exerciseExternalHours} h externes à ${args.recoveryInput.exerciseExternalRate} € / h ; ${args.recoveryInput.exerciseInternalHours} h internes ; probabilité annuelle ${args.recoveryInput.annualIncidentProbabilityPercent} % ; coût ${args.recovery.exerciseCost} € ; seuil illustratif ${args.recovery.breakEvenHours} h.`,
    );
  }
  if (args.outage.status === "PASS") {
    lines.push(
      `Arrêt saisi ${args.outageHours} h : contribution exposée ${args.outage.contributionExposed} € ; capacité mobilisée ${args.outage.capacityMobilized} € ; total ${args.outage.total} € illustratifs.`,
    );
  }
  if (args.accounts.status === "PASS") {
    lines.push(
      `Comptes personnels : ${args.accountInput.personalServiceCount} service(s) ; préparation ${args.accountInput.preparedExternalHoursPerService} h externes et ${args.accountInput.preparedInternalHoursPerService} h internes par service ; crise ${args.accountInput.crisisExternalHoursPerService} h externes et ${args.accountInput.crisisInternalHoursPerService} h internes par service ; tarifs ${args.accountInput.externalHourlyRate} € / h externe et ${args.accountInput.internalHourlyCost} € / h interne ; outillage commun ${args.accountInput.commonPreparedTooling} € ; passation ${args.accounts.preparedCost} € ; crise ${args.accounts.crisisCost} € ; écart ${args.accounts.directDifference} €.`,
    );
  }
  lines.push(
    "Limites : aucun taux de panne, revenu perdu, pénalité, TVA, coût juridique ou valeur future n’est déduit automatiquement.",
  );
  return lines.join("\n");
}

export function buildSaasHandoverCsv(args: SaasHandoverExportState): string {
  const escape = (value: string | number | null) =>
    `"${String(value ?? "").replaceAll('"', '""')}"`;
  const rows: Array<Array<string | number | null>> = [
    ["Section", "Hypothèse ou résultat", "Valeur", "Unité"],
    ["Métadonnées", "Modèle", SAAS_HANDOVER_DECISION_VERSION, ""],
    ["Métadonnées", "Horizon", 36, "mois"],
  ];
  for (const option of SAAS_HANDOVER_OPTIONS) {
    for (const field of SAAS_HANDOVER_TCO_FIELDS) {
      rows.push([
        `TCO — ${option.label}`,
        field.label,
        args.tcoInputs[option.key][field.key],
        "€ HT",
      ]);
    }
    rows.push([
      `TCO — ${option.label}`,
      "Total sur 36 mois",
      args.tco.totals[option.key],
      "€ HT",
    ]);
  }
  const add = (
    section: string,
    label: string,
    value: string | number | null,
    unit: string,
  ) => rows.push([section, label, value, unit]);

  add(
    "Seuil de réécriture",
    "Contribution mensuelle par client",
    args.rewriteInput.monthlyContributionPerClient,
    "€ / mois",
  );
  add(
    "Seuil de réécriture",
    "Mois productifs",
    args.rewriteInput.productiveMonths,
    "mois",
  );
  add(
    "Seuil de réécriture",
    "Surcoût contre stabilisation",
    args.rewrite.surcharge,
    "€ HT",
  );
  add(
    "Seuil de réécriture",
    "Clients-mois requis",
    args.rewrite.clientMonths,
    "clients-mois",
  );
  add(
    "Seuil de réécriture",
    "Clients équivalents sur toute la période",
    args.rewrite.roundedClients,
    "clients",
  );

  add(
    "RPO",
    "Événements métier par jour",
    args.rpoInput.eventsPerDay,
    "/ jour",
  );
  add(
    "RPO",
    "Intervalle du point restaurable",
    args.rpoInput.backupIntervalHours,
    "heures",
  );
  add(
    "RPO",
    "Reconstitution par événement",
    args.rpoInput.minutesPerEvent,
    "minutes",
  );
  add(
    "RPO",
    "Coût de capacité",
    args.rpoInput.reconstructionHourlyCost,
    "€ / h",
  );
  add("RPO", "Exposition moyenne", args.rpo.averageEventsExposed, "événements");
  add(
    "RPO",
    "Exposition maximale",
    args.rpo.maximumEventsExposed,
    "événements",
  );
  add(
    "RPO",
    "Capacité maximale de reconstitution",
    args.rpo.maximumReconstructionCost,
    "€",
  );

  add(
    "Exercice de restauration",
    "Contribution mensuelle exposée",
    args.recoveryInput.monthlyContribution,
    "€ / mois",
  );
  add(
    "Exercice de restauration",
    "Personnes mobilisées",
    args.recoveryInput.responderCount,
    "personnes",
  );
  add(
    "Exercice de restauration",
    "Coût horaire par personne",
    args.recoveryInput.responderHourlyCost,
    "€ / h",
  );
  add(
    "Exercice de restauration",
    "Heures externes",
    args.recoveryInput.exerciseExternalHours,
    "heures",
  );
  add(
    "Exercice de restauration",
    "Tarif externe",
    args.recoveryInput.exerciseExternalRate,
    "€ / h",
  );
  add(
    "Exercice de restauration",
    "Heures internes",
    args.recoveryInput.exerciseInternalHours,
    "heures",
  );
  add(
    "Exercice de restauration",
    "Probabilité annuelle d’incident",
    args.recoveryInput.annualIncidentProbabilityPercent,
    "%",
  );
  add(
    "Exercice de restauration",
    "Coût de l’exercice",
    args.recovery.exerciseCost,
    "€",
  );
  add(
    "Exercice de restauration",
    "Heures à éviter au seuil",
    args.recovery.breakEvenHours,
    "heures",
  );

  add("Arrêt simulé", "Durée saisie", args.outageHours, "heures");
  add(
    "Arrêt simulé",
    "Contribution exposée",
    args.outage.contributionExposed,
    "€",
  );
  add("Arrêt simulé", "Capacité mobilisée", args.outage.capacityMobilized, "€");
  add("Arrêt simulé", "Total", args.outage.total, "€");

  const accountRows: Array<[string, number, string]> = [
    [
      "Services sur comptes personnels",
      args.accountInput.personalServiceCount,
      "services",
    ],
    [
      "Heures externes préparées / service",
      args.accountInput.preparedExternalHoursPerService,
      "heures",
    ],
    [
      "Heures externes en crise / service",
      args.accountInput.crisisExternalHoursPerService,
      "heures",
    ],
    ["Tarif externe", args.accountInput.externalHourlyRate, "€ / h"],
    [
      "Heures internes préparées / service",
      args.accountInput.preparedInternalHoursPerService,
      "heures",
    ],
    [
      "Heures internes en crise / service",
      args.accountInput.crisisInternalHoursPerService,
      "heures",
    ],
    ["Coût interne", args.accountInput.internalHourlyCost, "€ / h"],
    ["Coffre et MFA communs", args.accountInput.commonPreparedTooling, "€"],
  ];
  for (const [label, value, unit] of accountRows) {
    add("Comptes personnels", label, value, unit);
  }
  add(
    "Comptes personnels",
    "Passation préparée",
    args.accounts.preparedCost,
    "€",
  );
  add(
    "Comptes personnels",
    "Récupération en crise",
    args.accounts.crisisCost,
    "€",
  );
  add(
    "Comptes personnels",
    "Écart direct",
    args.accounts.directDifference,
    "€",
  );
  add(
    "Limite",
    "Périmètre",
    "Illustratif, HT, aucun client réel, hypothèses à remplacer",
    "",
  );
  return rows.map((row) => row.map(escape).join(";")).join("\n");
}
