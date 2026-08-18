export const SLA_MAINTENANCE_DECISION_VERSION =
  "sla-maintenance-decision-r1-2026-07-28";
export const SLA_MAINTENANCE_AS_OF_DATE = "2026-07-28";

export type NullableNumber = number | null;

const MAX_AMOUNT = 10_000_000_000;
const MAX_HOURS = 1_000_000;
const MAX_COUNT = 100_000_000;

function isKnown(
  value: NullableNumber,
  maximum = MAX_AMOUNT,
): value is number {
  return (
    value !== null &&
    Number.isFinite(value) &&
    decimalPlaces(value) <= 4 &&
    value >= 0 &&
    value <= maximum
  );
}

function decimalPlaces(value: number): number {
  const text = String(value).toLowerCase();
  const [coefficient, exponentText] = text.split("e");
  const exponent = exponentText === undefined ? 0 : Number(exponentText);
  const fractionDigits = (coefficient.split(".")[1] ?? "").length;
  return Math.max(0, fractionDigits - exponent);
}

function multiplyMoney(...values: number[]): number {
  return values.reduce((product, value) => product * value, 1);
}

function roundMoney(value: number): number {
  return Math.round(value * 100) / 100;
}

function sumMoney(values: number[]): number {
  return roundMoney(values.reduce((total, value) => total + value, 0));
}

export interface SlaAvailabilityInput {
  targetPercent: NullableNumber;
  windowDays: NullableNumber;
  coveredHoursPerDay: NullableNumber;
}

export type SlaAvailabilityResult =
  | {
      kind: "known";
      coveredMinutes: number;
      allowedDowntimeMinutes: number;
      allowedDowntimeSeconds: number;
    }
  | { kind: "unknown"; issues: string[] };

export function computeAvailability(
  input: SlaAvailabilityInput,
): SlaAvailabilityResult {
  const issues: string[] = [];
  if (
    !isKnown(input.targetPercent, 100) ||
    input.targetPercent <= 0 ||
    input.targetPercent >= 100
  ) {
    issues.push("targetPercent");
  }
  if (
    !isKnown(input.windowDays, 366) ||
    input.windowDays <= 0 ||
    !Number.isInteger(input.windowDays)
  ) {
    issues.push("windowDays");
  }
  if (
    !isKnown(input.coveredHoursPerDay, 24) ||
    input.coveredHoursPerDay <= 0
  ) {
    issues.push("coveredHoursPerDay");
  }
  if (issues.length > 0) return { kind: "unknown", issues };

  const coveredMinutes =
    input.windowDays! * input.coveredHoursPerDay! * 60;
  const allowedDowntimeMinutes =
    (coveredMinutes * (100 - input.targetPercent!)) / 100;
  return {
    kind: "known",
    coveredMinutes,
    allowedDowntimeMinutes,
    allowedDowntimeSeconds: Math.round(allowedDowntimeMinutes * 60),
  };
}

export const SLA_TIMELINE_FIELDS = [
  "observedAt",
  "acknowledgedAt",
  "interventionAt",
  "workaroundAt",
  "restoredAt",
  "dataVerifiedAt",
  "closedAt",
] as const;

export type SlaTimelineField = (typeof SLA_TIMELINE_FIELDS)[number];
export type SlaIncidentTimeline = Record<SlaTimelineField, string>;

const STRICT_OFFSET_DATE_TIME =
  /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(?::\d{2})?(?:Z|[+-]\d{2}:\d{2})$/;

function parseStrictInstant(value: string): number | null {
  if (!STRICT_OFFSET_DATE_TIME.test(value)) return null;
  const match = value.match(
    /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})(?::(\d{2}))?(Z|([+-])(\d{2}):(\d{2}))$/,
  );
  if (!match) return null;
  const [
    ,
    yearText,
    monthText,
    dayText,
    hourText,
    minuteText,
    secondText = "00",
    ,
    ,
    offsetHourText = "00",
    offsetMinuteText = "00",
  ] = match;
  const year = Number(yearText);
  const month = Number(monthText);
  const day = Number(dayText);
  const hour = Number(hourText);
  const minute = Number(minuteText);
  const second = Number(secondText);
  const offsetHour = Number(offsetHourText);
  const offsetMinute = Number(offsetMinuteText);
  if (
    month < 1 ||
    month > 12 ||
    day < 1 ||
    hour > 23 ||
    minute > 59 ||
    second > 59 ||
    offsetHour > 14 ||
    offsetMinute > 59 ||
    (offsetHour === 14 && offsetMinute !== 0)
  ) {
    return null;
  }
  const calendarProbe = new Date(Date.UTC(year, month - 1, day));
  if (
    calendarProbe.getUTCFullYear() !== year ||
    calendarProbe.getUTCMonth() !== month - 1 ||
    calendarProbe.getUTCDate() !== day
  ) {
    return null;
  }
  const epoch = Date.parse(value);
  return Number.isFinite(epoch) ? epoch : null;
}

export type SlaTimelineResult =
  | {
      kind: "known";
      minutes: {
        acknowledgement: number;
        intervention: number;
        workaround: number;
        restoration: number;
        dataVerification: number;
        closure: number;
      };
    }
  | { kind: "unknown"; issues: string[] };

export function computeIncidentTimeline(
  input: SlaIncidentTimeline,
): SlaTimelineResult {
  const epochs = {} as Record<SlaTimelineField, number>;
  const issues: string[] = [];
  for (const field of SLA_TIMELINE_FIELDS) {
    const epoch = parseStrictInstant(input[field]);
    if (epoch === null) issues.push(field);
    else epochs[field] = epoch;
  }
  if (issues.length > 0) return { kind: "unknown", issues };

  for (let index = 1; index < SLA_TIMELINE_FIELDS.length; index += 1) {
    const previous = SLA_TIMELINE_FIELDS[index - 1];
    const current = SLA_TIMELINE_FIELDS[index];
    if (epochs[current] < epochs[previous]) {
      issues.push(`${current}:before:${previous}`);
    }
  }
  if (issues.length > 0) return { kind: "unknown", issues };
  const elapsed = (field: SlaTimelineField) =>
    Math.round((epochs[field] - epochs.observedAt) / 60_000);

  return {
    kind: "known",
    minutes: {
      acknowledgement: elapsed("acknowledgedAt"),
      intervention: elapsed("interventionAt"),
      workaround: elapsed("workaroundAt"),
      restoration: elapsed("restoredAt"),
      dataVerification: elapsed("dataVerifiedAt"),
      closure: elapsed("closedAt"),
    },
  };
}

export interface SlaIncidentCostInput {
  outageHours: NullableNumber;
  affectedPeople: NullableNumber;
  loadedHourlyCost: NullableNumber;
  productiveSharePercent: NullableNumber;
  reentryAndRecoveryCost: NullableNumber;
  lostContributionMarginPerHour: NullableNumber;
  externalRecoveryCosts: NullableNumber;
  serviceCredit: NullableNumber;
}

export type SlaIncidentCostResult =
  | {
      kind: "known";
      internalCapacity: number;
      reentryAndRecoveryCost: number;
      lostContributionMargin: number;
      externalRecoveryCosts: number;
      grossIncidentCost: number;
      serviceCredit: number;
      netEconomicExposure: number;
      creditCoveragePercent: number;
    }
  | { kind: "unknown"; issues: string[] };

export function computeIncidentCost(
  input: SlaIncidentCostInput,
): SlaIncidentCostResult {
  const issues: string[] = [];
  const limits: Record<keyof SlaIncidentCostInput, number> = {
    outageHours: MAX_HOURS,
    affectedPeople: MAX_COUNT,
    loadedHourlyCost: MAX_AMOUNT,
    productiveSharePercent: 100,
    reentryAndRecoveryCost: MAX_AMOUNT,
    lostContributionMarginPerHour: MAX_AMOUNT,
    externalRecoveryCosts: MAX_AMOUNT,
    serviceCredit: MAX_AMOUNT,
  };
  for (const [field, maximum] of Object.entries(limits) as Array<
    [keyof SlaIncidentCostInput, number]
  >) {
    if (!isKnown(input[field], maximum)) issues.push(field);
  }
  if (
    input.productiveSharePercent !== null &&
    input.productiveSharePercent > 100
  ) {
    issues.push("productiveSharePercent");
  }
  if (
    input.affectedPeople !== null &&
    !Number.isInteger(input.affectedPeople)
  ) {
    issues.push("affectedPeople");
  }
  if (issues.length > 0) return { kind: "unknown", issues: [...new Set(issues)] };

  const internalCapacity = roundMoney(
    multiplyMoney(
      input.outageHours!,
      input.affectedPeople!,
      input.loadedHourlyCost!,
      input.productiveSharePercent!,
    ) / 100,
  );
  const lostContributionMargin = roundMoney(
    multiplyMoney(
      input.outageHours!,
      input.lostContributionMarginPerHour!,
    ),
  );
  const reentryAndRecoveryCost = roundMoney(input.reentryAndRecoveryCost!);
  const externalRecoveryCosts = roundMoney(input.externalRecoveryCosts!);
  const grossIncidentCost = roundMoney(
    internalCapacity +
      (reentryAndRecoveryCost +
        lostContributionMargin +
        externalRecoveryCosts),
  );
  const serviceCredit = roundMoney(input.serviceCredit!);
  if (serviceCredit > grossIncidentCost) {
    return {
      kind: "unknown",
      issues: ["serviceCredit:exceeds:grossIncidentCost"],
    };
  }

  return {
    kind: "known",
    internalCapacity,
    reentryAndRecoveryCost,
    lostContributionMargin,
    externalRecoveryCosts,
    grossIncidentCost,
    serviceCredit,
    netEconomicExposure: roundMoney(grossIncidentCost - serviceCredit),
    creditCoveragePercent:
      grossIncidentCost === 0
        ? 0
        : Math.round((serviceCredit / grossIncidentCost) * 10_000) / 100,
  };
}

export interface SlaRpoImpactInput {
  operationsPerHour: NullableNumber;
  rpoHours: NullableNumber;
  reentryMinutesPerOperation: NullableNumber;
  loadedHourlyCost: NullableNumber;
}

export type SlaRpoImpactResult =
  | {
      kind: "known";
      operationsAtRisk: number;
      reentryHours: number;
      reentryCost: number;
    }
  | { kind: "unknown"; issues: string[] };

export function computeRpoImpact(
  input: SlaRpoImpactInput,
): SlaRpoImpactResult {
  const issues: string[] = [];
  if (!isKnown(input.operationsPerHour, MAX_COUNT))
    issues.push("operationsPerHour");
  if (!isKnown(input.rpoHours, MAX_HOURS)) issues.push("rpoHours");
  if (!isKnown(input.reentryMinutesPerOperation, 1_440))
    issues.push("reentryMinutesPerOperation");
  if (!isKnown(input.loadedHourlyCost, MAX_AMOUNT))
    issues.push("loadedHourlyCost");
  if (issues.length > 0) return { kind: "unknown", issues };

  const operationsAtRisk = multiplyMoney(
    input.operationsPerHour!,
    input.rpoHours!,
  );
  const exactReentryHours =
    multiplyMoney(operationsAtRisk, input.reentryMinutesPerOperation!) / 60;
  return {
    kind: "known",
    operationsAtRisk,
    reentryHours: Math.round(exactReentryHours * 100) / 100,
    reentryCost: roundMoney(
      multiplyMoney(exactReentryHours, input.loadedHourlyCost!),
    ),
  };
}

export interface SlaCoverageOption {
  id: string;
  name: string;
  oneOffCost: NullableNumber;
  monthlyFee: NullableNumber;
  internalHoursPerMonth: NullableNumber;
  loadedHourlyCost: NullableNumber;
  annualExerciseCost: NullableNumber;
  residualIncidentsPerYear: NullableNumber;
  residualCostPerIncident: NullableNumber;
  residualEstimateSource: string;
  residualEstimateDate: string;
}

export type SlaCoverageEvaluation =
  | {
      kind: "known";
      id: string;
      name: string;
      contractedAnnualCost: number;
      internalAnnualCost: number;
      residualAnnualExposure: number;
      annualTotal: number;
    }
  | { kind: "unknown"; id: string; name: string; issues: string[] };

function isIsoDate(value: unknown): value is string {
  if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value))
    return false;
  const epoch = Date.parse(`${value}T00:00:00Z`);
  return (
    Number.isFinite(epoch) &&
    new Date(epoch).toISOString().slice(0, 10) === value
  );
}

export function compareCoverageOptions(
  options: readonly SlaCoverageOption[],
  asOfDate = SLA_MAINTENANCE_AS_OF_DATE,
): SlaCoverageEvaluation[] {
  if (!Array.isArray(options)) return [];
  return Array.from(options, (option) => {
    const candidate = option as
      | Partial<SlaCoverageOption>
      | null
      | undefined;
    const id = typeof candidate?.id === "string" ? candidate.id : "";
    const name = typeof candidate?.name === "string" ? candidate.name : "";
    const issues: string[] = [];
    if (
      typeof candidate?.id !== "string" ||
      !/^[^\u0000-\u0020]{1,64}$/u.test(candidate.id)
    ) {
      issues.push("id");
    }
    for (const field of [
      "oneOffCost",
      "monthlyFee",
      "internalHoursPerMonth",
      "loadedHourlyCost",
      "annualExerciseCost",
      "residualIncidentsPerYear",
      "residualCostPerIncident",
    ] as const) {
      if (!isKnown(candidate?.[field] ?? null)) issues.push(field);
    }
    if (name.trim().length < 2) issues.push("name");
    if (
      typeof candidate?.residualEstimateSource !== "string" ||
      candidate.residualEstimateSource.trim().length < 5
    )
      issues.push("residualEstimateSource");
    if (!isIsoDate(candidate?.residualEstimateDate))
      issues.push("residualEstimateDate");
    if (
      !isIsoDate(asOfDate) ||
      asOfDate > SLA_MAINTENANCE_AS_OF_DATE
    ) {
      issues.push("asOfDate");
    }
    if (
      isIsoDate(candidate?.residualEstimateDate) &&
      isIsoDate(asOfDate) &&
      candidate.residualEstimateDate > asOfDate
    ) {
      issues.push("residualEstimateDate:future");
    }
    if (issues.length > 0) {
      return { kind: "unknown", id, name, issues };
    }

    const contractedAnnualCost = roundMoney(
      candidate!.oneOffCost! +
        multiplyMoney(candidate!.monthlyFee!, 12) +
        candidate!.annualExerciseCost!,
    );
    const internalAnnualCost = roundMoney(
      multiplyMoney(
        candidate!.internalHoursPerMonth!,
        candidate!.loadedHourlyCost!,
        12,
      ),
    );
    const residualAnnualExposure = roundMoney(
      multiplyMoney(
        candidate!.residualIncidentsPerYear!,
        candidate!.residualCostPerIncident!,
      ),
    );
    return {
      kind: "known",
      id,
      name,
      contractedAnnualCost,
      internalAnnualCost,
      residualAnnualExposure,
      annualTotal: sumMoney([
        contractedAnnualCost,
        internalAnnualCost,
        residualAnnualExposure,
      ]),
    };
  });
}

export const SLA_REQUIRED_PROOFS = [
  "service-scope",
  "coverage-window",
  "measurement",
  "incident-clock",
  "restoration-test",
  "dependencies",
  "communications",
  "exit-eol",
] as const;
export type SlaProofId = (typeof SLA_REQUIRED_PROOFS)[number];
export type SlaProofStatus = "unknown" | "declared" | "verified" | "failed";

export interface SlaProofEntry {
  status: SlaProofStatus;
  evidenceRef: string;
  checkedOn: string;
  owner: string;
}

export interface SlaDecisionDossier {
  isFictitiousExample: boolean;
  emergencyOrCompromise: boolean;
  authorityConfirmed: boolean;
  serviceName: string;
  criticalJourney: string;
  coverageWindow: string;
  measurementOwner: string;
  asOfDate: string;
  availability: SlaAvailabilityInput;
  timeline: SlaIncidentTimeline;
  incidentCost: SlaIncidentCostInput;
  rpo: SlaRpoImpactInput;
  coverages: SlaCoverageOption[];
  proofs: Record<SlaProofId, SlaProofEntry>;
}

export type SlaDecisionGate =
  | {
      state: "STOP";
      reasons: string[];
      finalExportAllowed: false;
    }
  | {
      state: "INCOMPLET";
      reasons: string[];
      finalExportAllowed: false;
    }
  | {
      state: "COMPARABLE";
      reasons: string[];
      finalExportAllowed: false;
    }
  | {
      state: "DECISION_HUMAINE";
      reasons: string[];
      finalExportAllowed: true;
    };

function hasText(value: unknown, minimumLength: number): value is string {
  return typeof value === "string" && value.trim().length >= minimumLength;
}

function computesKnown(compute: () => { kind: string }): boolean {
  try {
    return compute().kind === "known";
  } catch {
    return false;
  }
}

export function evaluateDecisionGate(
  dossier: SlaDecisionDossier,
): SlaDecisionGate {
  if (!dossier || typeof dossier !== "object") {
    return {
      state: "INCOMPLET",
      reasons: ["Le dossier de décision est absent ou illisible."],
      finalExportAllowed: false,
    };
  }
  if (
    dossier.emergencyOrCompromise === true ||
    dossier.authorityConfirmed === false
  ) {
    return {
      state: "STOP",
      reasons: [
        dossier.emergencyOrCompromise
          ? "Un incident ou une compromission active doit être traité avant la comparaison contractuelle."
          : "Le mandat ou l’autorité de décision n’est pas confirmé.",
      ],
      finalExportAllowed: false,
    };
  }

  const reasons: string[] = [];
  if (dossier.emergencyOrCompromise !== false)
    reasons.push("Le statut d’incident ou de compromission doit être explicitement NON.");
  if (dossier.authorityConfirmed !== true)
    reasons.push("L’autorité doit être explicitement confirmée.");
  if (dossier.isFictitiousExample !== false)
    reasons.push(
      "La provenance doit confirmer explicitement que les valeurs fictives ont été remplacées.",
    );
  if (
    [
      dossier.serviceName,
      dossier.criticalJourney,
      dossier.coverageWindow,
      dossier.measurementOwner,
    ].some((value) => !hasText(value, 3))
  ) {
    reasons.push("Le service, le parcours, la plage ou le responsable manque.");
  }
  const validAsOfDate =
    isIsoDate(dossier.asOfDate) &&
    dossier.asOfDate <= SLA_MAINTENANCE_AS_OF_DATE;
  if (!validAsOfDate)
    reasons.push("La date d’arrêté est invalide ou future.");
  if (!computesKnown(() => computeAvailability(dossier.availability)))
    reasons.push("Le calcul de disponibilité est incomplet.");
  if (!computesKnown(() => computeIncidentTimeline(dossier.timeline)))
    reasons.push("La chronologie de l’incident est incomplète ou incohérente.");
  if (!computesKnown(() => computeIncidentCost(dossier.incidentCost)))
    reasons.push("Le coût d’incident est incomplet ou incohérent.");
  if (!computesKnown(() => computeRpoImpact(dossier.rpo)))
    reasons.push("L’impact du RPO est incomplet.");
  let coverages: SlaCoverageEvaluation[] = [];
  let coverageComputationFailed = false;
  try {
    coverages = Array.isArray(dossier.coverages)
      ? compareCoverageOptions(
          dossier.coverages,
          validAsOfDate ? dossier.asOfDate : "",
        )
      : [];
  } catch {
    coverageComputationFailed = true;
  }
  if (
    coverageComputationFailed ||
    coverages.length !== 3 ||
    coverages.some((option) => option.kind !== "known") ||
    new Set(coverages.map((option) => option.id)).size !== coverages.length
  ) {
    reasons.push(
      "Les trois couvertures doivent être complètes, datées et identifiées de façon unique.",
    );
  }
  const missingProofs = SLA_REQUIRED_PROOFS.filter(
    (proofId) => !dossier.proofs?.[proofId],
  );
  if (missingProofs.length > 0) {
    reasons.push(
      `${missingProofs.length} domaine(s) de preuve sont absents du dossier.`,
    );
  }
  const malformedVerifiedProofs = SLA_REQUIRED_PROOFS.filter((proofId) => {
    const proof = dossier.proofs?.[proofId];
    return (
      proof?.status === "verified" &&
      (!hasText(proof.evidenceRef, 6) ||
        !hasText(proof.owner, 3) ||
        !isIsoDate(proof.checkedOn) ||
        proof.checkedOn > dossier.asOfDate)
    );
  });
  if (malformedVerifiedProofs.length > 0) {
    reasons.push(
      `${malformedVerifiedProofs.length} preuve(s) marquées vérifiées n’ont pas de référence, date admissible ou responsable.`,
    );
  }
  if (reasons.length > 0) {
    return { state: "INCOMPLET", reasons, finalExportAllowed: false };
  }

  const proofStatuses = SLA_REQUIRED_PROOFS.map(
    (proofId) => dossier.proofs[proofId].status,
  );
  if (proofStatuses.includes("failed")) {
    return {
      state: "STOP",
      reasons: ["Au moins une preuve requise a échoué."],
      finalExportAllowed: false,
    };
  }
  const unresolved = proofStatuses.filter((status) => status !== "verified");
  if (unresolved.length > 0) {
    return {
      state: "COMPARABLE",
      reasons: [
        `${unresolved.length} preuve(s) restent déclarées ou non vérifiées.`,
        "Les scénarios peuvent être comparés, mais aucune décision finale ne doit être exportée.",
      ],
      finalExportAllowed: false,
    };
  }
  return {
    state: "DECISION_HUMAINE",
    reasons: [
      "Les calculs et preuves sont complets ; le moteur ne choisit pas le niveau contractuel à la place des responsables.",
    ],
    finalExportAllowed: true,
  };
}

export function createFictitiousSlaDecisionDossier(): SlaDecisionDossier {
  return {
    isFictitiousExample: true,
    emergencyOrCompromise: false,
    authorityConfirmed: true,
    serviceName: "Facturation B2B — exemple fictif",
    criticalJourney: "Créer, valider puis envoyer une facture",
    coverageWindow: "24 h/24, 7 j/7, heure de Paris",
    measurementOwner: "Responsable opérations — exemple fictif",
    asOfDate: SLA_MAINTENANCE_AS_OF_DATE,
    availability: {
      targetPercent: 99.9,
      windowDays: 30,
      coveredHoursPerDay: 24,
    },
    timeline: {
      observedAt: "2026-07-28T09:10:00+02:00",
      acknowledgedAt: "2026-07-28T09:18:00+02:00",
      interventionAt: "2026-07-28T10:05:00+02:00",
      workaroundAt: "2026-07-28T11:40:00+02:00",
      restoredAt: "2026-07-28T14:20:00+02:00",
      dataVerifiedAt: "2026-07-28T16:00:00+02:00",
      closedAt: "2026-07-28T18:00:00+02:00",
    },
    incidentCost: {
      outageHours: 4.2,
      affectedPeople: 12,
      loadedHourlyCost: 35,
      productiveSharePercent: 100,
      reentryAndRecoveryCost: 420,
      lostContributionMarginPerHour: 114.2857,
      externalRecoveryCosts: 900,
      serviceCredit: 200,
    },
    rpo: {
      operationsPerHour: 40,
      rpoHours: 1.5,
      reentryMinutesPerOperation: 4,
      loadedHourlyCost: 35,
    },
    coverages: [
      {
        id: "a",
        name: "Heures ouvrées",
        oneOffCost: 5_000,
        monthlyFee: 1_200,
        internalHoursPerMonth: 4,
        loadedHourlyCost: 47,
        annualExerciseCost: 2_000,
        residualIncidentsPerYear: 2,
        residualCostPerIncident: 4_000,
        residualEstimateSource: "Hypothèse interne fictive A",
        residualEstimateDate: SLA_MAINTENANCE_AS_OF_DATE,
      },
      {
        id: "b",
        name: "Plage étendue",
        oneOffCost: 4_000,
        monthlyFee: 1_650,
        internalHoursPerMonth: 3,
        loadedHourlyCost: 47,
        annualExerciseCost: 2_500,
        residualIncidentsPerYear: 1,
        residualCostPerIncident: 5_836,
        residualEstimateSource: "Hypothèse interne fictive B",
        residualEstimateDate: SLA_MAINTENANCE_AS_OF_DATE,
      },
      {
        id: "c",
        name: "Continuité renforcée",
        oneOffCost: 8_000,
        monthlyFee: 3_200,
        internalHoursPerMonth: 2,
        loadedHourlyCost: 47,
        annualExerciseCost: 4_000,
        residualIncidentsPerYear: 0.5,
        residualCostPerIncident: 3_672,
        residualEstimateSource: "Hypothèse interne fictive C",
        residualEstimateDate: SLA_MAINTENANCE_AS_OF_DATE,
      },
    ],
    proofs: Object.fromEntries(
      SLA_REQUIRED_PROOFS.map((id) => [
        id,
        {
          status: "declared",
          evidenceRef: `REF-FICTIVE-${id.toUpperCase()}`,
          checkedOn: SLA_MAINTENANCE_AS_OF_DATE,
          owner: "Responsable fictif",
        },
      ]),
    ) as Record<SlaProofId, SlaProofEntry>,
  };
}

function escapeCsv(value: string | number): string {
  const text = String(value);
  return `"${text.replaceAll('"', '""')}"`;
}

export function buildSlaDecisionCsv(dossier: SlaDecisionDossier): string {
  const availability = computeAvailability(dossier.availability);
  const timeline = computeIncidentTimeline(dossier.timeline);
  const incident = computeIncidentCost(dossier.incidentCost);
  const rpo = computeRpoImpact(dossier.rpo);
  const coverages = compareCoverageOptions(dossier.coverages);
  const gate = evaluateDecisionGate(dossier);
  const rows: Array<[string, string, string]> = [
    ["PROVENANCE", "Exemple fictif", dossier.isFictitiousExample ? "OUI" : "NON"],
    ["CONTEXTE", "Service", dossier.serviceName],
    ["CONTEXTE", "Parcours critique", dossier.criticalJourney],
    ["CONTEXTE", "Plage", dossier.coverageWindow],
    ["DECISION", "État", gate.state],
  ];
  if (availability.kind === "known") {
    rows.push([
      "DISPONIBILITE",
      "Arrêt admis en minutes",
      availability.allowedDowntimeMinutes.toFixed(2),
    ]);
  }
  if (timeline.kind === "known") {
    for (const [key, value] of Object.entries(timeline.minutes)) {
      rows.push(["CHRONOLOGIE", key, String(value)]);
    }
  }
  if (incident.kind === "known") {
    rows.push(["INCIDENT", "Coût brut", incident.grossIncidentCost.toFixed(2)]);
    rows.push(["INCIDENT", "Crédit séparé", incident.serviceCredit.toFixed(2)]);
    rows.push([
      "INCIDENT",
      "Exposition nette",
      incident.netEconomicExposure.toFixed(2),
    ]);
  }
  if (rpo.kind === "known") {
    rows.push(["RPO", "Opérations à risque", String(rpo.operationsAtRisk)]);
    rows.push(["RPO", "Heures de ressaisie", String(rpo.reentryHours)]);
    rows.push(["RPO", "Coût de ressaisie", rpo.reentryCost.toFixed(2)]);
  }
  for (const coverage of coverages) {
    rows.push([
      "COUVERTURE",
      coverage.name,
      coverage.kind === "known" ? coverage.annualTotal.toFixed(2) : "ND",
    ]);
  }
  return (
    "\uFEFFType;Élément;Valeur\r\n" +
    rows.map((row) => row.map(escapeCsv).join(";")).join("\r\n")
  );
}

export function buildSlaFinalDecisionNote(
  dossier: SlaDecisionDossier,
): string {
  const gate = evaluateDecisionGate(dossier);
  if (!gate.finalExportAllowed) {
    throw new Error(
      `Export final bloqué — ${gate.state} : ${gate.reasons.join(" ")}`,
    );
  }
  const coverages = compareCoverageOptions(dossier.coverages);
  return [
    "NOTE DE DÉCISION SLA — À VALIDER PAR LES RESPONSABLES",
    `Version moteur : ${SLA_MAINTENANCE_DECISION_VERSION}`,
    `Arrêté au : ${dossier.asOfDate}`,
    `Service : ${dossier.serviceName}`,
    `Parcours : ${dossier.criticalJourney}`,
    `Plage : ${dossier.coverageWindow}`,
    "",
    "Comparaison annuelle, hypothèses comprises :",
    ...coverages.map((coverage) =>
      coverage.kind === "known"
        ? `- ${coverage.name} : ${coverage.annualTotal.toFixed(2)} €`
        : `- ${coverage.name} : ND`,
    ),
    "",
    "Le moteur ne recommande pas automatiquement une offre. La direction, le métier, la technique et le conseil juridique compétent arbitrent le niveau, les exclusions, la responsabilité et les recours.",
  ].join("\n");
}
