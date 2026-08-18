export const WEBSITE_MAINTENANCE_DECISION_VERSION =
  "website-maintenance-decision-r3-2026-07-25";
export const WEBSITE_MAINTENANCE_SOURCE_DATE = "2026-07-25";

export const WEBSITE_MAINTENANCE_GATE_IDS = [
  "common_scope",
  "preventive_change",
  "business_monitoring",
  "tested_restore",
  "clean_recovery",
  "incident_sla",
  "security_licenses_eol",
  "unique_cost_origin",
  "third_party_exit",
] as const;

export type WebsiteMaintenanceGateId =
  (typeof WEBSITE_MAINTENANCE_GATE_IDS)[number];
export type WebsiteMaintenanceGateStatus = "pass" | "fail" | "unknown";

export const WEBSITE_MAINTENANCE_GATES: Record<
  WebsiteMaintenanceGateId,
  { label: string; expected: string }
> = {
  common_scope: {
    label: "Même périmètre et mêmes horaires",
    expected:
      "Les actifs, parcours métier, horaires couverts, dépendances et exclusions reprennent exactement le besoin commun.",
  },
  preventive_change: {
    label: "Changements testés et retour arrière",
    expected:
      "Chaque mise à jour a un inventaire, un test représentatif, un résultat, un responsable et une procédure de repli.",
  },
  business_monitoring: {
    label: "Parcours métier surveillés",
    expected:
      "Les contrôles portent sur les formulaires, paiements, e-mails ou tâches utiles, avec une alerte attribuée à une personne.",
  },
  tested_restore: {
    label: "Restauration complète chronométrée",
    expected:
      "Fichiers, données et configuration ont été restaurés puis testés ; le point repris et le temps réel sont consignés.",
  },
  clean_recovery: {
    label: "Reprise propre après compromission",
    expected:
      "Isolement, point sain, reconstruction propre, correction de l’entrée, rotation des accès et reconnexion graduelle sont prévus.",
  },
  incident_sla: {
    label: "Incident et SLA opposables",
    expected:
      "Sévérités, fenêtre, détection, accusé, intervention, contournement, rétablissement, correction, exclusions et recours sont écrits.",
  },
  security_licenses_eol: {
    label: "Sécurité, licences et fin de support",
    expected:
      "Versions, propriétaires, vulnérabilités, renouvellements, exceptions et coût probable de mise à niveau sont inventoriés.",
  },
  unique_cost_origin: {
    label: "Chaque coût affecté une seule fois",
    expected:
      "Forfait, capacité corrective, incident résiduel, outils, temps interne, évolution et sortie ont chacun une ligne unique.",
  },
  third_party_exit: {
    label: "Sortie reprise par un tiers",
    expected:
      "Comptes client, second administrateur, copie indépendante, documentation, révocation et reprise fonctionnent sans le mainteneur.",
  },
};

export interface WebsiteMaintenanceGateEvidence {
  status: WebsiteMaintenanceGateStatus;
  evidenceDate: string;
  artifactReference: string;
  scope: string;
  result: string;
  responsible: string;
}

export const WEBSITE_MAINTENANCE_GATE_EVIDENCE_FIELDS = [
  { key: "evidenceDate", label: "Date de la preuve" },
  { key: "artifactReference", label: "Artefact ou référence" },
  { key: "scope", label: "Périmètre vérifié" },
  { key: "result", label: "Résultat observé" },
  { key: "responsible", label: "Responsable" },
] as const;

export type WebsiteMaintenanceGateEvidenceField =
  (typeof WEBSITE_MAINTENANCE_GATE_EVIDENCE_FIELDS)[number]["key"];

export interface WebsiteMaintenanceEvidenceDateContext {
  evaluationDate: string;
  decisionDate: string;
}

export type WebsiteMaintenanceEvidenceDateIssue =
  | "invalidEvidenceDate"
  | "invalidEvaluationDate"
  | "afterEvaluationDate"
  | "afterDecisionDate";

export interface WebsiteMaintenanceEvidenceDateValidation {
  valid: boolean;
  issues: WebsiteMaintenanceEvidenceDateIssue[];
  maximumDate: string | undefined;
}

export interface WebsiteIncidentInput {
  durationHours: number | undefined;
  nonDeferrableMarginPerHour: number | undefined;
  refundsAndPenalties: number | undefined;
  externalRecovery: number | undefined;
  communication: number | undefined;
  internalPeople: number | undefined;
  internalHoursPerPerson: number | undefined;
  internalHourlyCost: number | undefined;
  redeployedSharePercent: number | undefined;
  recoverableCompensation: number | undefined;
}

export type WebsiteIncidentField = keyof WebsiteIncidentInput;

export const WEBSITE_INCIDENT_FIELDS: ReadonlyArray<{
  key: WebsiteIncidentField;
  label: string;
  unit: string;
  help: string;
}> = [
  {
    key: "durationHours",
    label: "Durée d’indisponibilité",
    unit: "h",
    help: "Durée du parcours métier réellement indisponible.",
  },
  {
    key: "nonDeferrableMarginPerHour",
    label: "Marge non reportable",
    unit: "€/h",
    help: "Marge perdue, pas chiffre d’affaires brut ni ventes simplement décalées.",
  },
  {
    key: "refundsAndPenalties",
    label: "Remboursements, concessions ou pénalités",
    unit: "€",
    help: "Seulement les montants réellement probables dans ce scénario.",
  },
  {
    key: "externalRecovery",
    label: "Reprise externe, analyse et reconstruction",
    unit: "€",
    help: "Ne comptez pas ici une capacité corrective déjà incluse au forfait.",
  },
  {
    key: "communication",
    label: "Communication ou notification",
    unit: "€",
    help: "Prestataires, support client ou obligations réellement applicables.",
  },
  {
    key: "internalPeople",
    label: "Personnes internes mobilisées",
    unit: "personnes",
    help: "Personnes dont une partie du temps est réellement détournée.",
  },
  {
    key: "internalHoursPerPerson",
    label: "Heures internes par personne",
    unit: "h",
    help: "Temps consacré à cet incident par personne.",
  },
  {
    key: "internalHourlyCost",
    label: "Coût chargé du temps interne",
    unit: "€/h",
    help: "Coût chargé ou coût d’opportunité défendable.",
  },
  {
    key: "redeployedSharePercent",
    label: "Part du temps réellement réaffectée",
    unit: "%",
    help: "De 0 à 100 ; le temps déjà payé ne devient pas automatiquement un surcoût.",
  },
  {
    key: "recoverableCompensation",
    label: "Compensation récupérable",
    unit: "€",
    help: "Seulement si elle est applicable, réclamable et raisonnablement récupérable.",
  },
];

export interface WebsiteIncidentKnown {
  kind: "known";
  total: number;
  lostMargin: number;
  directCosts: number;
  internalCapacityCost: number;
  recoverableCompensation: number;
}

export interface WebsiteIncidentUnknown {
  kind: "unknown";
  issues: WebsiteIncidentField[];
  grossBeforeCompensation?: number;
}

export type WebsiteIncidentResult =
  WebsiteIncidentKnown | WebsiteIncidentUnknown;

export interface WebsiteMaintenanceTcoInput {
  initialTransition: number | undefined;
  preventiveAdaptiveAnnual: number | undefined;
  correctiveCapacityAnnual: number | undefined;
  serviceOperationsAnnual: number | undefined;
  editorialAssuranceAnnual: number | undefined;
  plannedEvolutionAnnual: number | undefined;
  internalCoordinationAnnual: number | undefined;
  hostingLicensesEolAnnual: number | undefined;
  residualIncidentReserveAnnual: number | undefined;
  exitRecovery: number | undefined;
}

export type WebsiteMaintenanceTcoField = keyof WebsiteMaintenanceTcoInput;

export const WEBSITE_MAINTENANCE_TCO_FIELDS: ReadonlyArray<{
  key: WebsiteMaintenanceTcoField;
  label: string;
  unit: string;
  help: string;
}> = [
  {
    key: "initialTransition",
    label: "Remise à niveau et transition",
    unit: "€ HT",
    help: "Audit de départ, corrections préalables, transfert et mise en place.",
  },
  {
    key: "preventiveAdaptiveAnnual",
    label: "Préventif et adaptations annuels",
    unit: "€ HT/an",
    help: "Inventaire, correctifs, compatibilité, tests et retour arrière.",
  },
  {
    key: "correctiveCapacityAnnual",
    label: "Capacité corrective annuelle",
    unit: "€ HT/an",
    help: "Incidents couverts par le forfait, unité, plafond et dépassement.",
  },
  {
    key: "serviceOperationsAnnual",
    label: "Opérations de service annuelles",
    unit: "€ HT/an",
    help: "Surveillance, sauvegarde, restauration, journaux et astreinte utile.",
  },
  {
    key: "editorialAssuranceAnnual",
    label: "Contenu et assurance annuels",
    unit: "€ HT/an",
    help: "Contenu, consentement, accessibilité et indexation technique.",
  },
  {
    key: "plannedEvolutionAnnual",
    label: "Évolutions planifiées annuelles",
    unit: "€ HT/an",
    help: "Capacité acceptée, séparée des corrections et de l’entretien.",
  },
  {
    key: "internalCoordinationAnnual",
    label: "Temps interne et relais annuels",
    unit: "€ HT/an",
    help: "Pilotage, validation, titulaire, suppléant et revues.",
  },
  {
    key: "hostingLicensesEolAnnual",
    label: "Hébergement, licences et fin de support",
    unit: "€ HT/an",
    help: "Comptes, outils, renouvellements et réserve de mise à niveau connue.",
  },
  {
    key: "residualIncidentReserveAnnual",
    label: "Réserve d’incident résiduel annuelle",
    unit: "€ HT/an",
    help: "Une seule ligne : impact restant après la couverture, jamais l’incident complet ajouté deux fois.",
  },
  {
    key: "exitRecovery",
    label: "Sortie et reprise à l’horizon",
    unit: "€ HT",
    help: "Export, documentation, rotation, build ou restauration par un tiers.",
  },
];

export interface WebsiteMaintenanceTcoKnown {
  kind: "known";
  horizonMonths: 12 | 36;
  total: number;
  initial: number;
  recurring: number;
  exit: number;
}

export interface WebsiteMaintenanceTcoUnknown {
  kind: "unknown";
  horizonMonths: 12 | 36;
  issues: WebsiteMaintenanceTcoField[];
}

export type WebsiteMaintenanceTcoResult =
  WebsiteMaintenanceTcoKnown | WebsiteMaintenanceTcoUnknown;

export interface WebsiteMaintenanceOfferInput {
  name: string;
  deliveryMode: string;
  scopeSummary: string;
  exclusions: string;
  residualRiskPayer: string;
  gates: Record<WebsiteMaintenanceGateId, WebsiteMaintenanceGateEvidence>;
  tco: WebsiteMaintenanceTcoInput;
}

export interface WebsiteMaintenanceDecisionContext {
  decisionDate: string;
  siteClass: string;
  businessFunctions: string;
  coverageWindow: string;
  rpoRto: string;
  lastRestoredPoint: string;
  measurementOwner: string;
  incident: WebsiteIncidentInput;
  offers: [WebsiteMaintenanceOfferInput, WebsiteMaintenanceOfferInput];
}

export const WEBSITE_MAINTENANCE_COMMON_FIELDS = [
  { key: "siteClass", label: "Classe du site" },
  { key: "businessFunctions", label: "Fonctions et impact métier" },
  { key: "coverageWindow", label: "Fenêtre de couverture" },
  {
    key: "rpoRto",
    label: "Perte de données et durée de reprise admises",
  },
  {
    key: "lastRestoredPoint",
    label: "Dernier point réellement restauré",
  },
  {
    key: "measurementOwner",
    label: "Responsable des mesures et décisions",
  },
] as const;

export type WebsiteMaintenanceCommonField =
  (typeof WEBSITE_MAINTENANCE_COMMON_FIELDS)[number]["key"];

export const WEBSITE_MAINTENANCE_OFFER_DESCRIPTOR_FIELDS = [
  { key: "deliveryMode", label: "Mode de prise en charge" },
  { key: "scopeSummary", label: "Périmètre inclus" },
  { key: "exclusions", label: "Exclusions" },
  { key: "residualRiskPayer", label: "Risque résiduel et payeur" },
] as const;

export type WebsiteMaintenanceOfferDescriptorField =
  (typeof WEBSITE_MAINTENANCE_OFFER_DESCRIPTOR_FIELDS)[number]["key"];

export interface WebsiteMaintenanceOfferQualification {
  status: "eliminated" | "unqualified" | "qualified";
  failedGates: WebsiteMaintenanceGateId[];
  unknownGates: WebsiteMaintenanceGateId[];
  missingCommonFields: WebsiteMaintenanceCommonField[];
  missingOfferFields: WebsiteMaintenanceOfferDescriptorField[];
  unknownTcoFields: WebsiteMaintenanceTcoField[];
}

const REQUIRED_INCIDENT_FIELDS = WEBSITE_INCIDENT_FIELDS.map(({ key }) => key);
const REQUIRED_TCO_FIELDS = WEBSITE_MAINTENANCE_TCO_FIELDS.map(
  ({ key }) => key,
);

function isKnownNonNegative(value: number | undefined): value is number {
  return value !== undefined && Number.isFinite(value) && value >= 0;
}

function isValidIncidentField(
  field: WebsiteIncidentField,
  value: number | undefined,
): value is number {
  if (!isKnownNonNegative(value)) return false;
  if (field === "redeployedSharePercent") return value <= 100;
  return true;
}

function hasRequiredText(value: string): boolean {
  const normalized = value.trim().toLocaleLowerCase("fr-FR");
  return (
    normalized.length >= 2 &&
    ![
      "nd",
      "n.d.",
      "n/d",
      "n/a",
      "na",
      "inconnu",
      "inconnue",
      "non déterminé",
      "non determine",
      "non défini",
      "non defini",
    ].includes(normalized)
  );
}

function isValidIsoDate(value: string): boolean {
  const normalized = value.trim();
  const match = normalized.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) return false;
  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  if (year < 1 || month < 1 || month > 12 || day < 1) return false;
  const leapYear = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
  const daysInMonth = [
    31,
    leapYear ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];
  return day <= daysInMonth[month - 1];
}

export function websiteMaintenanceEvidenceDateMaximum(
  context: WebsiteMaintenanceEvidenceDateContext,
): string | undefined {
  const evaluationDate = context.evaluationDate.trim();
  const decisionDate = context.decisionDate.trim();
  if (!isValidIsoDate(evaluationDate)) return undefined;
  if (
    isValidIsoDate(decisionDate) &&
    decisionDate < evaluationDate
  ) {
    return decisionDate;
  }
  return evaluationDate;
}

export function validateWebsiteMaintenanceEvidenceDate(
  evidenceDate: string,
  context: WebsiteMaintenanceEvidenceDateContext,
): WebsiteMaintenanceEvidenceDateValidation {
  const issues: WebsiteMaintenanceEvidenceDateIssue[] = [];
  const normalizedEvidenceDate = evidenceDate.trim();
  const normalizedEvaluationDate = context.evaluationDate.trim();
  const normalizedDecisionDate = context.decisionDate.trim();
  const evaluationDateValid = isValidIsoDate(normalizedEvaluationDate);
  const decisionDateValid = isValidIsoDate(normalizedDecisionDate);

  if (!isValidIsoDate(normalizedEvidenceDate)) {
    issues.push("invalidEvidenceDate");
  }
  if (!evaluationDateValid) {
    issues.push("invalidEvaluationDate");
  }
  if (
    issues.length === 0 &&
    normalizedEvidenceDate > normalizedEvaluationDate
  ) {
    issues.push("afterEvaluationDate");
  }
  if (
    isValidIsoDate(normalizedEvidenceDate) &&
    decisionDateValid &&
    normalizedEvidenceDate > normalizedDecisionDate
  ) {
    issues.push("afterDecisionDate");
  }

  return {
    valid: issues.length === 0,
    issues,
    maximumDate: websiteMaintenanceEvidenceDateMaximum(context),
  };
}

function isValidGateEvidenceField(
  field: WebsiteMaintenanceGateEvidenceField,
  value: string,
  dateContext: WebsiteMaintenanceEvidenceDateContext,
): boolean {
  if (field === "evidenceDate") {
    return validateWebsiteMaintenanceEvidenceDate(value, dateContext).valid;
  }
  return hasRequiredText(value) && value.trim().length >= 2;
}

export function missingWebsiteMaintenanceGateEvidenceFields(
  gate: WebsiteMaintenanceGateEvidence,
  dateContext: WebsiteMaintenanceEvidenceDateContext,
): WebsiteMaintenanceGateEvidenceField[] {
  return WEBSITE_MAINTENANCE_GATE_EVIDENCE_FIELDS.filter(
    ({ key }) => !isValidGateEvidenceField(key, gate[key], dateContext),
  ).map(({ key }) => key);
}

export function createEmptyWebsiteMaintenanceGateEvidence(): Record<
  WebsiteMaintenanceGateId,
  WebsiteMaintenanceGateEvidence
> {
  return Object.fromEntries(
    WEBSITE_MAINTENANCE_GATE_IDS.map((id) => [
      id,
      {
        status: "unknown",
        evidenceDate: "",
        artifactReference: "",
        scope: "",
        result: "",
        responsible: "",
      },
    ]),
  ) as Record<WebsiteMaintenanceGateId, WebsiteMaintenanceGateEvidence>;
}

export function createEmptyWebsiteIncidentInput(): WebsiteIncidentInput {
  return {
    durationHours: undefined,
    nonDeferrableMarginPerHour: undefined,
    refundsAndPenalties: undefined,
    externalRecovery: undefined,
    communication: undefined,
    internalPeople: undefined,
    internalHoursPerPerson: undefined,
    internalHourlyCost: undefined,
    redeployedSharePercent: undefined,
    recoverableCompensation: undefined,
  };
}

export function createEmptyWebsiteMaintenanceTcoInput(): WebsiteMaintenanceTcoInput {
  return {
    initialTransition: undefined,
    preventiveAdaptiveAnnual: undefined,
    correctiveCapacityAnnual: undefined,
    serviceOperationsAnnual: undefined,
    editorialAssuranceAnnual: undefined,
    plannedEvolutionAnnual: undefined,
    internalCoordinationAnnual: undefined,
    hostingLicensesEolAnnual: undefined,
    residualIncidentReserveAnnual: undefined,
    exitRecovery: undefined,
  };
}

export function createEmptyWebsiteMaintenanceOffer(
  name: string,
): WebsiteMaintenanceOfferInput {
  return {
    name,
    deliveryMode: "",
    scopeSummary: "",
    exclusions: "",
    residualRiskPayer: "",
    gates: createEmptyWebsiteMaintenanceGateEvidence(),
    tco: createEmptyWebsiteMaintenanceTcoInput(),
  };
}

export function createEmptyWebsiteMaintenanceDecisionContext(): WebsiteMaintenanceDecisionContext {
  return {
    decisionDate: "",
    siteClass: "",
    businessFunctions: "",
    coverageWindow: "",
    rpoRto: "",
    lastRestoredPoint: "",
    measurementOwner: "",
    incident: createEmptyWebsiteIncidentInput(),
    offers: [
      createEmptyWebsiteMaintenanceOffer("Offre A"),
      createEmptyWebsiteMaintenanceOffer("Offre B"),
    ],
  };
}

export function calculateWebsiteIncidentImpact(
  input: WebsiteIncidentInput,
): WebsiteIncidentResult {
  const issues = REQUIRED_INCIDENT_FIELDS.filter(
    (field) => !isValidIncidentField(field, input[field]),
  );
  if (issues.length > 0) return { kind: "unknown", issues };

  const lostMargin = input.durationHours! * input.nonDeferrableMarginPerHour!;
  const directCosts =
    input.refundsAndPenalties! + input.externalRecovery! + input.communication!;
  const internalCapacityCost =
    input.internalPeople! *
    input.internalHoursPerPerson! *
    input.internalHourlyCost! *
    (input.redeployedSharePercent! / 100);
  const gross = lostMargin + directCosts + internalCapacityCost;

  if (input.recoverableCompensation! > gross) {
    return {
      kind: "unknown",
      issues: ["recoverableCompensation"],
      grossBeforeCompensation: gross,
    };
  }

  return {
    kind: "known",
    total: gross - input.recoverableCompensation!,
    lostMargin,
    directCosts,
    internalCapacityCost,
    recoverableCompensation: input.recoverableCompensation!,
  };
}

export function withWebsiteIncidentDurationAndMargin(
  input: WebsiteIncidentInput,
  durationHours: number,
  nonDeferrableMarginPerHour: number,
): WebsiteIncidentInput {
  return {
    ...input,
    durationHours,
    nonDeferrableMarginPerHour,
  };
}

export function calculateWebsiteMaintenanceTco(
  input: WebsiteMaintenanceTcoInput,
  horizonMonths: 12 | 36,
): WebsiteMaintenanceTcoResult {
  const issues = REQUIRED_TCO_FIELDS.filter(
    (field) => !isKnownNonNegative(input[field]),
  );
  if (issues.length > 0) return { kind: "unknown", horizonMonths, issues };

  const years = horizonMonths / 12;
  const recurringAnnual =
    input.preventiveAdaptiveAnnual! +
    input.correctiveCapacityAnnual! +
    input.serviceOperationsAnnual! +
    input.editorialAssuranceAnnual! +
    input.plannedEvolutionAnnual! +
    input.internalCoordinationAnnual! +
    input.hostingLicensesEolAnnual! +
    input.residualIncidentReserveAnnual!;
  const recurring = years * recurringAnnual;

  return {
    kind: "known",
    horizonMonths,
    total: input.initialTransition! + recurring + input.exitRecovery!,
    initial: input.initialTransition!,
    recurring,
    exit: input.exitRecovery!,
  };
}

export function calculateWebsiteMaintenanceTcoSeries(
  input: WebsiteMaintenanceTcoInput,
): [WebsiteMaintenanceTcoResult, WebsiteMaintenanceTcoResult] {
  return [
    calculateWebsiteMaintenanceTco(input, 12),
    calculateWebsiteMaintenanceTco(input, 36),
  ];
}

export function effectiveWebsiteMaintenanceGateStatus(
  gate: WebsiteMaintenanceGateEvidence,
  dateContext: WebsiteMaintenanceEvidenceDateContext,
): WebsiteMaintenanceGateStatus {
  if (
    gate.status === "unknown" ||
    missingWebsiteMaintenanceGateEvidenceFields(gate, dateContext).length > 0
  ) {
    return "unknown";
  }
  return gate.status;
}

export function qualifyWebsiteMaintenanceOffer(
  context: WebsiteMaintenanceDecisionContext,
  offer: WebsiteMaintenanceOfferInput,
  evaluationDate: string,
): WebsiteMaintenanceOfferQualification {
  const dateContext = {
    evaluationDate,
    decisionDate: context.decisionDate,
  };
  const missingCommonFields = WEBSITE_MAINTENANCE_COMMON_FIELDS.filter(
    ({ key }) => !hasRequiredText(context[key]),
  ).map(({ key }) => key);
  const missingOfferFields = WEBSITE_MAINTENANCE_OFFER_DESCRIPTOR_FIELDS.filter(
    ({ key }) => !hasRequiredText(offer[key]),
  ).map(({ key }) => key);
  const failedGates = WEBSITE_MAINTENANCE_GATE_IDS.filter(
    (id) =>
      effectiveWebsiteMaintenanceGateStatus(offer.gates[id], dateContext) ===
      "fail",
  );
  const unknownGates = WEBSITE_MAINTENANCE_GATE_IDS.filter(
    (id) =>
      effectiveWebsiteMaintenanceGateStatus(offer.gates[id], dateContext) ===
      "unknown",
  );
  const tco = calculateWebsiteMaintenanceTco(offer.tco, 12);
  const unknownTcoFields = tco.kind === "unknown" ? tco.issues : [];

  if (failedGates.length > 0) {
    return {
      status: "eliminated",
      failedGates,
      unknownGates,
      missingCommonFields,
      missingOfferFields,
      unknownTcoFields,
    };
  }
  if (
    missingCommonFields.length > 0 ||
    missingOfferFields.length > 0 ||
    unknownGates.length > 0 ||
    unknownTcoFields.length > 0
  ) {
    return {
      status: "unqualified",
      failedGates: [],
      unknownGates,
      missingCommonFields,
      missingOfferFields,
      unknownTcoFields,
    };
  }
  return {
    status: "qualified",
    failedGates: [],
    unknownGates: [],
    missingCommonFields: [],
    missingOfferFields: [],
    unknownTcoFields: [],
  };
}

export const WEBSITE_MAINTENANCE_CRITICALITY_SCENARIOS = [
  {
    id: "showcase",
    label: "Simple — vitrine",
    initial: 800,
    maintenanceAnnual: 1_440,
    hostingToolsAnnual: 540,
    internalAnnual: 540,
    evolutionAnnual: 1_500,
    incidentReserveAnnual: 300,
    exit: 500,
  },
  {
    id: "shop",
    label: "Central — boutique",
    initial: 2_500,
    maintenanceAnnual: 16_800,
    hostingToolsAnnual: 3_000,
    internalAnnual: 600,
    evolutionAnnual: 6_500,
    incidentReserveAnnual: 2_370,
    exit: 1_800,
  },
  {
    id: "critical",
    label: "Exigeant — service critique",
    initial: 12_000,
    maintenanceAnnual: 60_000,
    hostingToolsAnnual: 18_000,
    internalAnnual: 16_800,
    evolutionAnnual: 24_000,
    incidentReserveAnnual: 10_000,
    exit: 15_000,
  },
] as const;

export type WebsiteMaintenanceCriticalityScenario =
  (typeof WEBSITE_MAINTENANCE_CRITICALITY_SCENARIOS)[number];

export function calculateWebsiteMaintenanceCriticalityScenario(
  scenario: WebsiteMaintenanceCriticalityScenario,
  horizonMonths: 12 | 36,
): { recurringAnnual: number; total: number } {
  const recurringAnnual =
    scenario.maintenanceAnnual +
    scenario.hostingToolsAnnual +
    scenario.internalAnnual +
    scenario.evolutionAnnual +
    scenario.incidentReserveAnnual;
  return {
    recurringAnnual,
    total:
      scenario.initial + (horizonMonths / 12) * recurringAnnual + scenario.exit,
  };
}

export const WEBSITE_MAINTENANCE_DELIVERY_MODES = [
  {
    id: "internal",
    label: "Interne structuré",
    initial: 2_500,
    operationsAnnual: 12_000,
    coordinationAnnual: 4_000,
    commonToolsAnnual: 3_000,
    commonEvolutionAnnual: 6_500,
    exit: 2_500,
  },
  {
    id: "freelance",
    label: "Freelance + relais nommé",
    initial: 1_800,
    operationsAnnual: 10_800,
    coordinationAnnual: 3_000,
    commonToolsAnnual: 3_000,
    commonEvolutionAnnual: 6_500,
    exit: 1_500,
  },
  {
    id: "agency",
    label: "Agence",
    initial: 2_500,
    operationsAnnual: 16_800,
    coordinationAnnual: 300,
    commonToolsAnnual: 3_000,
    commonEvolutionAnnual: 6_500,
    exit: 1_800,
  },
  {
    id: "tma",
    label: "TMA organisée",
    initial: 4_500,
    operationsAnnual: 28_800,
    coordinationAnnual: 600,
    commonToolsAnnual: 3_000,
    commonEvolutionAnnual: 6_500,
    exit: 3_000,
  },
] as const;

export type WebsiteMaintenanceDeliveryMode =
  (typeof WEBSITE_MAINTENANCE_DELIVERY_MODES)[number];

export function calculateWebsiteMaintenanceDeliveryMode(
  mode: WebsiteMaintenanceDeliveryMode,
  horizonMonths: 12 | 36,
): { recurringAnnual: number; total: number } {
  const recurringAnnual =
    mode.operationsAnnual +
    mode.coordinationAnnual +
    mode.commonToolsAnnual +
    mode.commonEvolutionAnnual;
  return {
    recurringAnnual,
    total: mode.initial + (horizonMonths / 12) * recurringAnnual + mode.exit,
  };
}

function formatAmount(value: number): string {
  return `${Math.round(value).toLocaleString("fr-FR")} € HT`;
}

function formatPreciseEuro(value: number): string {
  return `${value.toLocaleString("fr-FR", {
    maximumFractionDigits: 2,
  })} €`;
}

function formatRequiredText(value: string): string {
  return hasRequiredText(value) ? value.trim() : "ND";
}

function formatRawNumber(value: number): string {
  return value.toLocaleString("fr-FR", {
    useGrouping: false,
    maximumFractionDigits: 20,
  });
}

function formatAssumption(
  value: number | undefined,
  unit: string,
  valid: boolean,
): string {
  if (!valid || value === undefined) return `ND (${unit})`;
  return `${formatRawNumber(value)} ${unit}`;
}

function formatIncidentAssumption(
  field: WebsiteIncidentField,
  value: number | undefined,
  unit: string,
  result: WebsiteIncidentResult,
): string {
  if (
    field === "recoverableCompensation" &&
    result.kind === "unknown" &&
    result.grossBeforeCompensation !== undefined &&
    value !== undefined
  ) {
    return `${formatRawNumber(value)} ${unit} (invalide : dépasse le coût brut de ${formatPreciseEuro(
      result.grossBeforeCompensation,
    )})`;
  }
  return formatAssumption(value, unit, isValidIncidentField(field, value));
}

function formatTcoAssumption(value: number | undefined, unit: string): string {
  return formatAssumption(value, unit, isKnownNonNegative(value));
}

function formatTco(result: WebsiteMaintenanceTcoResult): string {
  if (result.kind === "unknown") {
    return `ND — ${result.issues.length} poste(s) requis à renseigner`;
  }
  return formatAmount(result.total);
}

function formatIncident(result: WebsiteIncidentResult): string {
  if (result.kind === "unknown") {
    if (result.grossBeforeCompensation !== undefined) {
      return `ND — compensation récupérable supérieure au coût brut de ${formatPreciseEuro(
        result.grossBeforeCompensation,
      )}`;
    }
    return `ND — ${result.issues.length} poste(s) requis à corriger`;
  }
  return formatAmount(result.total);
}

function formatEvidenceFieldForReport(
  gate: WebsiteMaintenanceGateEvidence,
  field: (typeof WEBSITE_MAINTENANCE_GATE_EVIDENCE_FIELDS)[number],
  dateContext: WebsiteMaintenanceEvidenceDateContext,
): string {
  const value = gate[field.key].trim();
  if (field.key === "evidenceDate") {
    const validation = validateWebsiteMaintenanceEvidenceDate(
      value,
      dateContext,
    );
    if (validation.valid) return value;

    const reasons = [
      validation.issues.includes("invalidEvidenceDate")
        ? "date ISO absente ou invalide"
        : "",
      validation.issues.includes("invalidEvaluationDate")
        ? "date d’évaluation invalide"
        : "",
      validation.issues.includes("afterEvaluationDate")
        ? `postérieure à la date d’évaluation ${dateContext.evaluationDate.trim()}`
        : "",
      validation.issues.includes("afterDecisionDate")
        ? `postérieure à la date de décision ${dateContext.decisionDate.trim()}`
        : "",
    ].filter(Boolean);
    return `ND (${reasons.join(" ; ")})`;
  }
  return isValidGateEvidenceField(field.key, value, dateContext) ? value : "ND";
}

function formatGateForReport(
  gate: WebsiteMaintenanceGateEvidence,
  dateContext: WebsiteMaintenanceEvidenceDateContext,
): string {
  const effectiveStatus = effectiveWebsiteMaintenanceGateStatus(
    gate,
    dateContext,
  );
  const missingFields = missingWebsiteMaintenanceGateEvidenceFields(
    gate,
    dateContext,
  );
  const evidence = WEBSITE_MAINTENANCE_GATE_EVIDENCE_FIELDS.map(
    (field) =>
      `${field.label.toLocaleLowerCase("fr-FR")} : ${formatEvidenceFieldForReport(
        gate,
        field,
        dateContext,
      )}`,
  ).join(" ; ");

  if (effectiveStatus === "unknown") {
    if (gate.status === "unknown") {
      return `ND — statut non démontré ; ${evidence}`;
    }
    return `ND — statut ${gate.status.toUpperCase()} non étayé ; ${missingFields.length} élément(s) requis manquant(s) ou invalide(s) ; ${evidence}`;
  }
  return `${effectiveStatus.toUpperCase()} — ${evidence}`;
}

function qualificationLabel(
  qualification: WebsiteMaintenanceOfferQualification,
): string {
  if (qualification.status === "qualified") return "QUALIFIÉE";
  if (qualification.status === "eliminated") {
    return `ÉLIMINÉE — ${qualification.failedGates
      .map((id) => WEBSITE_MAINTENANCE_GATES[id].label)
      .join(", ")}`;
  }
  const reasons = [
    qualification.missingCommonFields.length
      ? `${qualification.missingCommonFields.length} champ(s) commun(s) manquant(s)`
      : "",
    qualification.missingOfferFields.length
      ? `${qualification.missingOfferFields.length} descriptif(s) d’offre manquant(s)`
      : "",
    qualification.unknownGates.length
      ? `${qualification.unknownGates.length} porte(s) restent ND`
      : "",
    qualification.unknownTcoFields.length
      ? `${qualification.unknownTcoFields.length} poste(s) TCO restent ND`
      : "",
  ].filter(Boolean);
  return `NON QUALIFIÉE — ${reasons.join(" ; ")}`;
}

export function buildWebsiteMaintenanceDecisionReport(
  context: WebsiteMaintenanceDecisionContext,
  evaluationDate: string,
): string {
  const incident = calculateWebsiteIncidentImpact(context.incident);
  const normalizedEvaluationDate = evaluationDate.trim();
  const dateContext = {
    evaluationDate: normalizedEvaluationDate,
    decisionDate: context.decisionDate,
  };
  const lines = [
    "DOSSIER DE MAINTENANCE PROUVÉE",
    `Version : ${WEBSITE_MAINTENANCE_DECISION_VERSION}`,
    `Sources du guide vérifiées le : ${WEBSITE_MAINTENANCE_SOURCE_DATE}`,
    `Date d’évaluation du dossier : ${
      isValidIsoDate(normalizedEvaluationDate)
        ? normalizedEvaluationDate
        : "ND (date invalide)"
    }`,
    `Date de décision : ${formatRequiredText(context.decisionDate)}`,
    "",
    "BESOIN COMMUN",
    `Classe du site : ${formatRequiredText(context.siteClass)}`,
    `Fonctions et impact métier : ${formatRequiredText(context.businessFunctions)}`,
    `Fenêtre de couverture : ${formatRequiredText(context.coverageWindow)}`,
    `Perte de données et durée de reprise admises : ${formatRequiredText(context.rpoRto)}`,
    `Dernier point réellement restauré : ${formatRequiredText(context.lastRestoredPoint)}`,
    `Responsable des mesures et décisions : ${formatRequiredText(context.measurementOwner)}`,
    "",
    "COÛT D’UN INCIDENT — HYPOTHÈSES COMMUNES",
  ];

  WEBSITE_INCIDENT_FIELDS.forEach((field) => {
    lines.push(
      `- ${field.label} : ${formatIncidentAssumption(
        field.key,
        context.incident[field.key],
        field.unit,
        incident,
      )}`,
    );
  });
  lines.push(
    `Impact incident calculé : ${formatIncident(incident)}`,
    "Cet impact n’est pas ajouté automatiquement au TCO. Seule la réserve annuelle résiduelle de chaque offre est comptée, une fois.",
  );

  context.offers.forEach((offer) => {
    const qualification = qualifyWebsiteMaintenanceOffer(
      context,
      offer,
      normalizedEvaluationDate,
    );
    const tco = calculateWebsiteMaintenanceTcoSeries(offer.tco);

    lines.push(
      "",
      formatRequiredText(offer.name).toUpperCase(),
      `Mode de prise en charge : ${formatRequiredText(offer.deliveryMode)}`,
      `Périmètre inclus : ${formatRequiredText(offer.scopeSummary)}`,
      `Exclusions : ${formatRequiredText(offer.exclusions)}`,
      `Risque résiduel et payeur : ${formatRequiredText(offer.residualRiskPayer)}`,
      `Verdict de comparabilité : ${qualificationLabel(qualification)}`,
    );

    WEBSITE_MAINTENANCE_GATE_IDS.forEach((id) => {
      lines.push(
        `- ${WEBSITE_MAINTENANCE_GATES[id].label} : ${formatGateForReport(
          offer.gates[id],
          dateContext,
        )}`,
      );
    });

    lines.push("", "HYPOTHÈSES TCO");
    WEBSITE_MAINTENANCE_TCO_FIELDS.forEach((field) => {
      lines.push(
        `- ${field.label} : ${formatTcoAssumption(
          offer.tco[field.key],
          field.unit,
        )}`,
      );
    });
    lines.push(
      "",
      `${
        qualification.status === "qualified"
          ? "TCO 12 mois"
          : "Sous-total non comparable à 12 mois"
      } : ${formatTco(tco[0])}`,
      `${
        qualification.status === "qualified"
          ? "TCO 36 mois"
          : "Sous-total non comparable à 36 mois"
      } : ${formatTco(tco[1])}`,
    );
  });

  lines.push(
    "",
    "RÈGLE DE DÉCISION",
    "Un FAIL étayé par une date, un artefact ou une référence, un périmètre, un résultat et un responsable élimine l’offre ; un statut sans ces cinq éléments reste ND.",
    "Une offre n’est qualifiée et comparable que si les six champs communs, les quatre descriptifs propres à l’offre, les neuf portes et les dix postes TCO sont complets.",
    "Toute somme calculable avant cette qualification est un sous-total non comparable, jamais un prix permettant de classer l’offre.",
    "Ne comparez les prix qu’entre offres qualifiées. Le rapport ne désigne aucun gagnant automatique.",
    "Chaque coût doit apparaître une seule fois. L’incident calculé séparément ne se rajoute jamais à une réserve résiduelle déjà incluse.",
  );

  return lines.join("\n");
}
