export const WEBSITE_INCIDENT_DOSSIER_VERSION =
  "website-incident-dossier-r1-2026-07-27";

export const WEBSITE_INCIDENT_RECOVERY_GATE_IDS = [
  "public_access",
  "dns_tls",
  "homepage_http",
  "critical_journey",
  "payment",
  "email",
  "webhook",
  "data_reconciliation",
  "cyber_clearance",
  "business_signoff",
] as const;

export type WebsiteIncidentRecoveryGateId =
  (typeof WEBSITE_INCIDENT_RECOVERY_GATE_IDS)[number];
export type WebsiteIncidentGateStatus = "unknown" | "pass" | "fail" | "NA";
export type WebsiteIncidentGateProofKind =
  | "unknown"
  | "claim-only"
  | "same-environment-only"
  | "provider-status-only"
  | "homepage-only"
  | "api-accepted-only"
  | "backup-exists-only"
  | "failure-observation"
  | "applicability-justification"
  | "independent-access"
  | "dns-tls-observation"
  | "http-observation"
  | "end-to-end"
  | "payment-reconciliation"
  | "delivery-confirmation"
  | "webhook-reconciliation"
  | "data-reconciliation"
  | "authorized-cyber-clearance"
  | "business-signoff";
export type WebsiteIncidentRoute =
  "incomplete" | "local" | "provider" | "technical" | "cyber";

export const WEBSITE_INCIDENT_GATE_PROOF_LABELS: Record<
  WebsiteIncidentGateProofKind,
  string
> = {
  unknown: "Non renseigné",
  "claim-only": "Simple affirmation",
  "same-environment-only": "Observation depuis le même environnement uniquement",
  "provider-status-only": "Page d’état fournisseur uniquement",
  "homepage-only": "Page d’accueil uniquement",
  "api-accepted-only": "Requête acceptée par l’API uniquement",
  "backup-exists-only": "Existence d’une sauvegarde uniquement",
  "failure-observation": "Observation documentée d’un échec",
  "applicability-justification":
    "Justification documentée de non-applicabilité",
  "independent-access": "Accès réellement indépendant",
  "dns-tls-observation": "Observation complète du DNS et de TLS",
  "http-observation": "Observation HTTP contrôlée",
  "end-to-end": "Recette de bout en bout",
  "payment-reconciliation": "Rapprochement du paiement et de la commande",
  "delivery-confirmation": "Confirmation de réception de l’e-mail",
  "webhook-reconciliation": "Rapprochement des webhooks",
  "data-reconciliation": "Rapprochement des données",
  "authorized-cyber-clearance": "Levée cyber explicitement autorisée",
  "business-signoff": "Validation métier documentée",
};

export const WEBSITE_INCIDENT_RECOVERY_GATES: Record<
  WebsiteIncidentRecoveryGateId,
  {
    label: string;
    expected: string;
    applicability:
      "always" | "payment" | "email" | "webhook" | "data" | "cyber";
    acceptedPassProof: WebsiteIncidentGateProofKind;
  }
> = {
  public_access: {
    label: "Accès public indépendant",
    expected:
      "Le service répond depuis au moins un accès indépendant et le périmètre géographique utile a été vérifié.",
    applicability: "always",
    acceptedPassProof: "independent-access",
  },
  dns_tls: {
    label: "Domaine, DNS et TLS",
    expected:
      "Le domaine, les serveurs DNS, les enregistrements utiles et la chaîne TLS sont vérifiés sans erreur bloquante.",
    applicability: "always",
    acceptedPassProof: "dns-tls-observation",
  },
  homepage_http: {
    label: "Réponse HTTP de la page d’accueil",
    expected:
      "La page d’accueil renvoie la réponse attendue, sans boucle, erreur douce ni page de maintenance servie en HTTP 200.",
    applicability: "always",
    acceptedPassProof: "http-observation",
  },
  critical_journey: {
    label: "Parcours métier critique",
    expected:
      "Le parcours métier décrit dans le dossier réussit de bout en bout avec un résultat observable.",
    applicability: "always",
    acceptedPassProof: "end-to-end",
  },
  payment: {
    label: "Paiement et commande",
    expected:
      "Autorisation, confirmation, commande, stock et absence de double débit sont réconciliés.",
    applicability: "payment",
    acceptedPassProof: "payment-reconciliation",
  },
  email: {
    label: "E-mail transactionnel",
    expected:
      "L’e-mail est réellement reçu ou son échec est observé ; l’acceptation par une API ne suffit pas.",
    applicability: "email",
    acceptedPassProof: "delivery-confirmation",
  },
  webhook: {
    label: "Webhooks et traitements asynchrones",
    expected:
      "Les événements manquants, dupliqués ou reçus dans le désordre sont réconciliés de façon idempotente.",
    applicability: "webhook",
    acceptedPassProof: "webhook-reconciliation",
  },
  data_reconciliation: {
    label: "Données et effets différés",
    expected:
      "Base, fichiers, files, caches, index et écritures intervenues pendant l’incident sont contrôlés selon le périmètre.",
    applicability: "data",
    acceptedPassProof: "data-reconciliation",
  },
  cyber_clearance: {
    label: "Levée du blocage cyber",
    expected:
      "En présence de signaux cyber, une personne compétente autorise explicitement la reprise sur preuve conservée.",
    applicability: "cyber",
    acceptedPassProof: "authorized-cyber-clearance",
  },
  business_signoff: {
    label: "Validation métier et observation",
    expected:
      "Un responsable métier valide le service utile après la reprise technique et une période d’observation documentée.",
    applicability: "always",
    acceptedPassProof: "business-signoff",
  },
};

export interface WebsiteIncidentTimeline {
  lastKnownGoodAt: string;
  firstFailureObservedAt: string;
  detectedAt: string;
  acknowledgedAt: string;
  mitigatedAt: string;
  technicallyRestoredAt: string;
  businessValidatedAt: string;
  monitoringEndedAt: string;
  closedAt: string;
}

export type WebsiteIncidentScope =
  | "unknown"
  | "single-device"
  | "single-network"
  | "multiple-networks"
  | "regional"
  | "global"
  | "partial";

export type WebsiteIncidentProviderStatus =
  "unknown" | "operational" | "degraded" | "outage";

export interface WebsiteIncidentProviderObservation {
  name: string;
  status: WebsiteIncidentProviderStatus;
  checkedAt: string;
  reference: string;
  scope: string;
}

export type WebsiteIncidentRecentChangeStatus =
  "unknown" | "none-known" | "known";

export interface WebsiteIncidentRecentChange {
  status: WebsiteIncidentRecentChangeStatus;
  changedAt: string;
  description: string;
}

export type WebsiteIncidentCyberAssessment =
  "unknown" | "no-signal" | "suspected" | "confirmed";

export type WebsiteIncidentIndependentAccess = "unknown" | "pass" | "fail";

const WEBSITE_INCIDENT_SCOPE_LABELS: Record<WebsiteIncidentScope, string> = {
  unknown: "Non qualifié",
  "single-device": "Un seul appareil",
  "single-network": "Un seul réseau",
  "multiple-networks": "Plusieurs réseaux",
  regional: "Régional",
  global: "Global",
  partial: "Partiel",
};

const WEBSITE_INCIDENT_PROVIDER_STATUS_LABELS: Record<
  WebsiteIncidentProviderStatus,
  string
> = {
  unknown: "Non consulté",
  operational: "Opérationnel",
  degraded: "Dégradé",
  outage: "Indisponible",
};

const WEBSITE_INCIDENT_RECENT_CHANGE_STATUS_LABELS: Record<
  WebsiteIncidentRecentChangeStatus,
  string
> = {
  unknown: "Non qualifié",
  "none-known": "Aucun changement connu",
  known: "Changement connu",
};

const WEBSITE_INCIDENT_CYBER_ASSESSMENT_LABELS: Record<
  WebsiteIncidentCyberAssessment,
  string
> = {
  unknown: "Non qualifiée",
  "no-signal": "Aucun signal observé, sans exclure une attaque",
  suspected: "Compromission possible",
  confirmed: "Compromission confirmée",
};

const WEBSITE_INCIDENT_INDEPENDENT_ACCESS_LABELS: Record<
  WebsiteIncidentIndependentAccess,
  string
> = {
  unknown: "Non vérifié",
  pass: "Réussi",
  fail: "Échec",
};

export interface WebsiteIncidentServiceProfile {
  criticalJourney: string;
  usesPayments: boolean | undefined;
  sendsTransactionalEmail: boolean | undefined;
  usesWebhooks: boolean | undefined;
  hasMutableData: boolean | undefined;
}

export interface WebsiteIncidentContext {
  reference: string;
  timeZone: string;
  url: string;
  symptom: string;
  scope: WebsiteIncidentScope;
  impact: string;
  provider: WebsiteIncidentProviderObservation;
  recentChange: WebsiteIncidentRecentChange;
  cyberAssessment: WebsiteIncidentCyberAssessment;
  cyberSignals: string[];
  independentAccess: WebsiteIncidentIndependentAccess;
  httpStatus: number | undefined;
  technicalEvidence: string;
  service: WebsiteIncidentServiceProfile;
}

export interface WebsiteIncidentObjectives {
  rtoMinutes: number | undefined;
  rtoStartedAt: string;
  rtoSource: string;
  rpoMinutes: number | undefined;
  dataRecoveryPointAt: string;
  rpoReferenceAt: string;
  rpoSource: string;
  slaReference: string;
  slaCoverageWindow: string;
  slaClockRule: string;
}

export interface WebsiteIncidentDirectCostInput {
  irrecoverableTransactions: number | undefined;
  marginPerTransaction: number | undefined;
  productivityPeople: number | undefined;
  productivityHoursPerPerson: number | undefined;
  productivityHourlyCost: number | undefined;
  coordinationPeople: number | undefined;
  coordinationHoursPerPerson: number | undefined;
  coordinationHourlyCost: number | undefined;
  coordinationDistinctFromProductivity: boolean | undefined;
  confirmedDirectCosts: number | undefined;
}

export type WebsiteIncidentDirectCostNumericField = Exclude<
  keyof WebsiteIncidentDirectCostInput,
  "coordinationDistinctFromProductivity"
>;

export const WEBSITE_INCIDENT_DIRECT_COST_LIMITS: Record<
  WebsiteIncidentDirectCostNumericField,
  { minimum: number; maximum: number; integer?: boolean; decimals?: number }
> = {
  irrecoverableTransactions: {
    minimum: 0,
    maximum: 1_000_000,
    integer: true,
  },
  marginPerTransaction: { minimum: 0, maximum: 10_000_000, decimals: 2 },
  productivityPeople: { minimum: 0, maximum: 100_000, integer: true },
  productivityHoursPerPerson: {
    minimum: 0,
    maximum: 8_784,
    decimals: 2,
  },
  productivityHourlyCost: {
    minimum: 0,
    maximum: 100_000,
    decimals: 2,
  },
  coordinationPeople: { minimum: 0, maximum: 100_000, integer: true },
  coordinationHoursPerPerson: {
    minimum: 0,
    maximum: 8_784,
    decimals: 2,
  },
  coordinationHourlyCost: {
    minimum: 0,
    maximum: 100_000,
    decimals: 2,
  },
  confirmedDirectCosts: {
    minimum: 0,
    maximum: 1_000_000_000_000,
    decimals: 2,
  },
};

export interface WebsiteIncidentGateEvidence {
  status: WebsiteIncidentGateStatus;
  proofKind: WebsiteIncidentGateProofKind;
  observedAt: string;
  evidenceReference: string;
  result: string;
  owner: string;
}

export interface WebsiteIncidentDossier {
  context: WebsiteIncidentContext;
  timeline: WebsiteIncidentTimeline;
  objectives: WebsiteIncidentObjectives;
  directCost: WebsiteIncidentDirectCostInput;
  recoveryGates: Record<
    WebsiteIncidentRecoveryGateId,
    WebsiteIncidentGateEvidence
  >;
}

export interface WebsiteIncidentIssue {
  code:
    | "missing-context"
    | "invalid-url"
    | "url-contains-credentials"
    | "invalid-time-zone"
    | "invalid-evaluation-time"
    | "invalid-timestamp"
    | "timestamp-offset-mismatch"
    | "future-timestamp"
    | "invalid-chronology"
    | "invalid-http-status"
    | "provider-proof-missing"
    | "provider-proof-outside-window"
    | "recent-change-details-missing"
    | "cyber-signals-missing"
    | "cyber-signals-inconsistent"
    | "http-502-no-cause"
    | "invalid-objective"
    | "objective-evidence-missing"
    | "sla-incomplete"
    | "gate-evidence-missing"
    | "gate-proof-insufficient"
    | "gate-evidence-outside-window"
    | "gate-applicability"
    | "critical-journey-missing"
    | "premature-closure";
  severity: "error" | "warning";
  message: string;
  field?: string;
  gateId?: WebsiteIncidentRecoveryGateId;
}

export type WebsiteIncidentObjectiveResult =
  | {
      kind: "not-defined";
      targetMinutes: undefined;
      actualMinutes: undefined;
      label: "ND";
      reason: string;
    }
  | {
      kind: "unknown";
      targetMinutes: number;
      actualMinutes: undefined;
      label: "ND";
      reason: string;
    }
  | {
      kind: "met" | "missed";
      targetMinutes: number;
      actualMinutes: number;
      label: "respecté" | "non respecté";
      reason: string;
    };

export type WebsiteIncidentSlaResult =
  | { kind: "not-defined"; label: "ND"; reason: string }
  | { kind: "incomplete"; label: "ND"; reason: string }
  | { kind: "documented"; label: "documenté"; reason: string };

export interface WebsiteIncidentDirectCostIssue {
  field: keyof WebsiteIncidentDirectCostInput | "total" | "possibleDoubleCount";
  code: "missing" | "invalid" | "possible-double-count" | "unsafe-total";
  message: string;
}

export type WebsiteIncidentDirectCostResult =
  | {
      kind: "unknown";
      label: "ND";
      issues: WebsiteIncidentDirectCostIssue[];
    }
  | {
      kind: "known";
      label: "calculé";
      lostMargin: number;
      productivityCost: number;
      coordinationCost: number;
      confirmedDirectCosts: number;
      total: number;
      issues: [];
    };

export interface WebsiteIncidentEffectiveGate {
  id: WebsiteIncidentRecoveryGateId;
  declaredStatus: WebsiteIncidentGateStatus;
  effectiveStatus: WebsiteIncidentGateStatus;
  applicable: boolean | undefined;
  evidenceComplete: boolean;
  reasons: string[];
}

export interface WebsiteIncidentTimelineEvaluation {
  valid: boolean;
  observedTechnicalOutageMinutes: number | undefined;
  observationUncertaintyMinutes: number | undefined;
}

export interface WebsiteIncidentClosureEvaluation {
  status: "not-ready" | "ready" | "closed";
  canClose: boolean;
  reasons: string[];
}

export interface WebsiteIncidentDossierEvaluation {
  version: string;
  evaluationTime: string;
  valid: boolean;
  route: WebsiteIncidentRoute;
  routeLabel: string;
  routeReason: string;
  causeConclusion: string;
  issues: WebsiteIncidentIssue[];
  timeline: WebsiteIncidentTimelineEvaluation;
  rto: WebsiteIncidentObjectiveResult;
  rpo: WebsiteIncidentObjectiveResult;
  sla: WebsiteIncidentSlaResult;
  directCost: WebsiteIncidentDirectCostResult;
  gates: Record<WebsiteIncidentRecoveryGateId, WebsiteIncidentEffectiveGate>;
  blockingGateIds: WebsiteIncidentRecoveryGateId[];
  closure: WebsiteIncidentClosureEvaluation;
  nextActions: string[];
}

interface ParsedInstant {
  epochMs: number;
  offsetMinutes: number;
}

interface TimestampRecord {
  field: string;
  label: string;
  value: string;
  gateId?: WebsiteIncidentRecoveryGateId;
}

const MAX_OBJECTIVE_MINUTES = 525_600;
const CENTS_PER_EURO = 100;
const MAX_SAFE_DIRECT_COST_CENTS = BigInt(Number.MAX_SAFE_INTEGER);

const TIMELINE_ORDER: Array<{
  key: keyof WebsiteIncidentTimeline;
  label: string;
}> = [
  { key: "lastKnownGoodAt", label: "dernier fonctionnement connu" },
  { key: "firstFailureObservedAt", label: "premier échec observé" },
  { key: "detectedAt", label: "détection" },
  { key: "acknowledgedAt", label: "prise en charge" },
  { key: "mitigatedAt", label: "mitigation" },
  { key: "technicallyRestoredAt", label: "rétablissement technique" },
  { key: "businessValidatedAt", label: "validation métier" },
  { key: "monitoringEndedAt", label: "fin d’observation" },
  { key: "closedAt", label: "clôture" },
];

const ROUTE_LABELS: Record<WebsiteIncidentRoute, string> = {
  incomplete: "Dossier incomplet",
  local: "Vérification locale",
  provider: "Escalade fournisseur",
  technical: "Diagnostic technique",
  cyber: "Escalade cyber prioritaire",
};

const GATE_STATUS_LABELS: Record<WebsiteIncidentGateStatus, string> = {
  unknown: "NON VÉRIFIÉ",
  pass: "CONFORME",
  fail: "ÉCHEC",
  NA: "NON APPLICABLE",
};

function emptyGate(): WebsiteIncidentGateEvidence {
  return {
    status: "unknown",
    proofKind: "unknown",
    observedAt: "",
    evidenceReference: "",
    result: "",
    owner: "",
  };
}

function createEmptyRecoveryGates(): Record<
  WebsiteIncidentRecoveryGateId,
  WebsiteIncidentGateEvidence
> {
  return Object.fromEntries(
    WEBSITE_INCIDENT_RECOVERY_GATE_IDS.map((id) => [id, emptyGate()]),
  ) as Record<WebsiteIncidentRecoveryGateId, WebsiteIncidentGateEvidence>;
}

export function createEmptyWebsiteIncidentDossier(): WebsiteIncidentDossier {
  return {
    context: {
      reference: "",
      timeZone: "",
      url: "",
      symptom: "",
      scope: "unknown",
      impact: "",
      provider: {
        name: "",
        status: "unknown",
        checkedAt: "",
        reference: "",
        scope: "",
      },
      recentChange: {
        status: "unknown",
        changedAt: "",
        description: "",
      },
      cyberAssessment: "unknown",
      cyberSignals: [],
      independentAccess: "unknown",
      httpStatus: undefined,
      technicalEvidence: "",
      service: {
        criticalJourney: "",
        usesPayments: undefined,
        sendsTransactionalEmail: undefined,
        usesWebhooks: undefined,
        hasMutableData: undefined,
      },
    },
    timeline: {
      lastKnownGoodAt: "",
      firstFailureObservedAt: "",
      detectedAt: "",
      acknowledgedAt: "",
      mitigatedAt: "",
      technicallyRestoredAt: "",
      businessValidatedAt: "",
      monitoringEndedAt: "",
      closedAt: "",
    },
    objectives: {
      rtoMinutes: undefined,
      rtoStartedAt: "",
      rtoSource: "",
      rpoMinutes: undefined,
      dataRecoveryPointAt: "",
      rpoReferenceAt: "",
      rpoSource: "",
      slaReference: "",
      slaCoverageWindow: "",
      slaClockRule: "",
    },
    directCost: {
      irrecoverableTransactions: undefined,
      marginPerTransaction: undefined,
      productivityPeople: undefined,
      productivityHoursPerPerson: undefined,
      productivityHourlyCost: undefined,
      coordinationPeople: undefined,
      coordinationHoursPerPerson: undefined,
      coordinationHourlyCost: undefined,
      coordinationDistinctFromProductivity: undefined,
      confirmedDirectCosts: undefined,
    },
    recoveryGates: createEmptyRecoveryGates(),
  };
}

function parseStrictIsoInstant(value: string): ParsedInstant | undefined {
  const match =
    /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{1,3}))?)?(Z|([+-])(\d{2}):(\d{2}))$/.exec(
      value,
    );
  if (!match) return undefined;

  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  const hour = Number(match[4]);
  const minute = Number(match[5]);
  const second = Number(match[6] ?? "0");
  const millisecond = Number((match[7] ?? "0").padEnd(3, "0"));
  if (
    year < 1_000 ||
    month < 1 ||
    month > 12 ||
    day < 1 ||
    day > 31 ||
    hour > 23 ||
    minute > 59 ||
    second > 59
  ) {
    return undefined;
  }

  const localAsUtc = Date.UTC(
    year,
    month - 1,
    day,
    hour,
    minute,
    second,
    millisecond,
  );
  const localProbe = new Date(localAsUtc);
  if (
    localProbe.getUTCFullYear() !== year ||
    localProbe.getUTCMonth() !== month - 1 ||
    localProbe.getUTCDate() !== day ||
    localProbe.getUTCHours() !== hour ||
    localProbe.getUTCMinutes() !== minute ||
    localProbe.getUTCSeconds() !== second
  ) {
    return undefined;
  }

  let offsetMinutes = 0;
  if (match[8] !== "Z") {
    const offsetHours = Number(match[10]);
    const offsetRemainder = Number(match[11]);
    if (
      offsetHours > 14 ||
      offsetRemainder > 59 ||
      (offsetHours === 14 && offsetRemainder !== 0)
    ) {
      return undefined;
    }
    const sign = match[9] === "-" ? -1 : 1;
    offsetMinutes = sign * (offsetHours * 60 + offsetRemainder);
  }

  const epochMs = localAsUtc - offsetMinutes * 60_000;
  if (!Number.isFinite(epochMs)) return undefined;
  return { epochMs, offsetMinutes };
}

function isValidTimeZone(timeZone: string): boolean {
  if (!timeZone.trim()) return false;
  try {
    new Intl.DateTimeFormat("en-GB", { timeZone }).format(new Date(0));
    return true;
  } catch {
    return false;
  }
}

function zonedParts(epochMs: number, timeZone: string): Record<string, number> {
  const formatter = new Intl.DateTimeFormat("en-GB", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
  });
  const result: Record<string, number> = {};
  for (const part of formatter.formatToParts(new Date(epochMs))) {
    if (
      part.type === "year" ||
      part.type === "month" ||
      part.type === "day" ||
      part.type === "hour" ||
      part.type === "minute" ||
      part.type === "second"
    ) {
      result[part.type] = Number(part.value);
    }
  }
  return result;
}

function offsetMinutesAt(epochMs: number, timeZone: string): number {
  const parts = zonedParts(epochMs, timeZone);
  const epochAtWholeSecond = Math.floor(epochMs / 1_000) * 1_000;
  return Math.round(
    (Date.UTC(
      parts.year,
      parts.month - 1,
      parts.day,
      parts.hour,
      parts.minute,
      parts.second,
    ) -
      epochAtWholeSecond) /
      60_000,
  );
}

function pad2(value: number): string {
  return String(value).padStart(2, "0");
}

function formatOffset(offsetMinutes: number): string {
  if (offsetMinutes === 0) return "Z";
  const sign = offsetMinutes < 0 ? "-" : "+";
  const absolute = Math.abs(offsetMinutes);
  return `${sign}${pad2(Math.floor(absolute / 60))}:${pad2(absolute % 60)}`;
}

function formatInstantInTimeZone(epochMs: number, timeZone: string): string {
  const parts = zonedParts(epochMs, timeZone);
  return `${parts.year}-${pad2(parts.month)}-${pad2(parts.day)}T${pad2(
    parts.hour,
  )}:${pad2(parts.minute)}:${pad2(parts.second)}${formatOffset(
    offsetMinutesAt(epochMs, timeZone),
  )}`;
}

function addUniqueIssue(
  issues: WebsiteIncidentIssue[],
  issue: WebsiteIncidentIssue,
): void {
  const duplicate = issues.some(
    (candidate) =>
      candidate.code === issue.code &&
      candidate.field === issue.field &&
      candidate.gateId === issue.gateId &&
      candidate.message === issue.message,
  );
  if (!duplicate) issues.push(issue);
}

function round(value: number, decimals = 2): number {
  const factor = 10 ** decimals;
  return Math.round((value + Number.EPSILON) * factor) / factor;
}

function minutesBetween(start: ParsedInstant, end: ParsedInstant): number {
  return round((end.epochMs - start.epochMs) / 60_000, 3);
}

function collectTimestampRecords(
  dossier: WebsiteIncidentDossier,
): TimestampRecord[] {
  const records: TimestampRecord[] = TIMELINE_ORDER.map(({ key, label }) => ({
    field: `timeline.${key}`,
    label,
    value: dossier.timeline[key],
  }));
  records.push(
    {
      field: "context.provider.checkedAt",
      label: "consultation du statut fournisseur",
      value: dossier.context.provider.checkedAt,
    },
    {
      field: "context.recentChange.changedAt",
      label: "changement récent",
      value: dossier.context.recentChange.changedAt,
    },
    {
      field: "objectives.rtoStartedAt",
      label: "début du chronomètre RTO",
      value: dossier.objectives.rtoStartedAt,
    },
    {
      field: "objectives.dataRecoveryPointAt",
      label: "point de reprise des données",
      value: dossier.objectives.dataRecoveryPointAt,
    },
    {
      field: "objectives.rpoReferenceAt",
      label: "référence de comparaison RPO",
      value: dossier.objectives.rpoReferenceAt,
    },
  );
  for (const id of WEBSITE_INCIDENT_RECOVERY_GATE_IDS) {
    records.push({
      field: `recoveryGates.${id}.observedAt`,
      label: `preuve de la porte « ${WEBSITE_INCIDENT_RECOVERY_GATES[id].label} »`,
      value: dossier.recoveryGates[id].observedAt,
      gateId: id,
    });
  }
  return records;
}

function validateTimestamps(
  dossier: WebsiteIncidentDossier,
  evaluationTime: string,
  issues: WebsiteIncidentIssue[],
): {
  evaluation: ParsedInstant | undefined;
  parsed: Map<string, ParsedInstant>;
  invalidFields: Set<string>;
  timeZoneValid: boolean;
} {
  const timeZone = dossier.context.timeZone.trim();
  const timeZoneValid = isValidTimeZone(timeZone);
  if (!timeZoneValid) {
    addUniqueIssue(issues, {
      code: "invalid-time-zone",
      severity: "error",
      field: "context.timeZone",
      message:
        "Le fuseau IANA du dossier est absent ou invalide ; les horodatages ne peuvent pas être comparés sûrement.",
    });
  }

  const evaluation = parseStrictIsoInstant(evaluationTime.trim());
  if (!evaluation) {
    addUniqueIssue(issues, {
      code: "invalid-evaluation-time",
      severity: "error",
      field: "evaluationTime",
      message:
        "L’heure d’évaluation doit être un instant ISO réel avec décalage explicite.",
    });
  } else if (
    timeZoneValid &&
    offsetMinutesAt(evaluation.epochMs, timeZone) !== evaluation.offsetMinutes
  ) {
    addUniqueIssue(issues, {
      code: "timestamp-offset-mismatch",
      severity: "error",
      field: "evaluationTime",
      message: `Le décalage de l’heure d’évaluation ne correspond pas au fuseau ${timeZone}.`,
    });
  }

  const parsed = new Map<string, ParsedInstant>();
  const invalidFields = new Set<string>();
  for (const record of collectTimestampRecords(dossier)) {
    const normalized = record.value.trim();
    if (!normalized) continue;
    const instant = parseStrictIsoInstant(normalized);
    if (!instant) {
      invalidFields.add(record.field);
      addUniqueIssue(issues, {
        code: "invalid-timestamp",
        severity: "error",
        field: record.field,
        gateId: record.gateId,
        message: `L’horodatage « ${record.label} » est invalide ou ne contient pas de décalage explicite.`,
      });
      continue;
    }
    parsed.set(record.field, instant);
    if (
      timeZoneValid &&
      offsetMinutesAt(instant.epochMs, timeZone) !== instant.offsetMinutes
    ) {
      invalidFields.add(record.field);
      addUniqueIssue(issues, {
        code: "timestamp-offset-mismatch",
        severity: "error",
        field: record.field,
        gateId: record.gateId,
        message: `Le décalage de « ${record.label} » ne correspond pas au fuseau ${timeZone} à cet instant.`,
      });
    }
    if (evaluation && instant.epochMs > evaluation.epochMs) {
      invalidFields.add(record.field);
      addUniqueIssue(issues, {
        code: "future-timestamp",
        severity: "error",
        field: record.field,
        gateId: record.gateId,
        message: `L’horodatage « ${record.label} » est postérieur à l’heure d’évaluation.`,
      });
    }
  }

  return { evaluation, parsed, invalidFields, timeZoneValid };
}

function validateTimeline(
  dossier: WebsiteIncidentDossier,
  parsed: Map<string, ParsedInstant>,
  invalidFields: Set<string>,
  issues: WebsiteIncidentIssue[],
): WebsiteIncidentTimelineEvaluation {
  let previous:
    | {
        key: keyof WebsiteIncidentTimeline;
        label: string;
        instant: ParsedInstant;
      }
    | undefined;
  let valid = true;
  for (const item of TIMELINE_ORDER) {
    const field = `timeline.${item.key}`;
    const instant = parsed.get(field);
    if (!instant || invalidFields.has(field)) continue;
    if (previous && instant.epochMs < previous.instant.epochMs) {
      valid = false;
      addUniqueIssue(issues, {
        code: "invalid-chronology",
        severity: "error",
        field,
        message: `La chronologie est incohérente : « ${item.label} » précède « ${previous.label} ».`,
      });
    }
    previous = { ...item, instant };
  }

  const failure = parsed.get("timeline.firstFailureObservedAt");
  const restored = parsed.get("timeline.technicallyRestoredAt");
  const lastKnownGood = parsed.get("timeline.lastKnownGoodAt");
  const observedTechnicalOutageMinutes =
    failure &&
    restored &&
    !invalidFields.has("timeline.firstFailureObservedAt") &&
    !invalidFields.has("timeline.technicallyRestoredAt") &&
    restored.epochMs >= failure.epochMs
      ? minutesBetween(failure, restored)
      : undefined;
  const observationUncertaintyMinutes =
    lastKnownGood &&
    failure &&
    !invalidFields.has("timeline.lastKnownGoodAt") &&
    !invalidFields.has("timeline.firstFailureObservedAt") &&
    failure.epochMs >= lastKnownGood.epochMs
      ? minutesBetween(lastKnownGood, failure)
      : undefined;

  return {
    valid,
    observedTechnicalOutageMinutes,
    observationUncertaintyMinutes,
  };
}

function isValidObjectiveTarget(value: number | undefined): value is number {
  return (
    typeof value === "number" &&
    Number.isFinite(value) &&
    value > 0 &&
    value <= MAX_OBJECTIVE_MINUTES
  );
}

function evaluateObjective(
  kind: "RTO" | "RPO",
  target: number | undefined,
  source: string,
  start: ParsedInstant | undefined,
  end: ParsedInstant | undefined,
  startField: string,
  endField: string,
  invalidFields: Set<string>,
  issues: WebsiteIncidentIssue[],
): WebsiteIncidentObjectiveResult {
  if (target === undefined) {
    return {
      kind: "not-defined",
      targetMinutes: undefined,
      actualMinutes: undefined,
      label: "ND",
      reason: `${kind} absent : aucune conformité n’est déduite.`,
    };
  }
  if (!isValidObjectiveTarget(target)) {
    addUniqueIssue(issues, {
      code: "invalid-objective",
      severity: "error",
      field: kind === "RTO" ? "objectives.rtoMinutes" : "objectives.rpoMinutes",
      message: `${kind} doit être strictement positif et ne pas dépasser ${MAX_OBJECTIVE_MINUTES.toLocaleString(
        "fr-FR",
      )} minutes.`,
    });
    return {
      kind: "unknown",
      targetMinutes: target,
      actualMinutes: undefined,
      label: "ND",
      reason: `${kind} invalide : aucune comparaison effectuée.`,
    };
  }
  if (!source.trim() || !start || !end) {
    addUniqueIssue(issues, {
      code: "objective-evidence-missing",
      severity: "warning",
      field: kind === "RTO" ? "objectives.rtoSource" : "objectives.rpoSource",
      message: `${kind} est défini mais sa source ou les deux instants de comparaison manquent.`,
    });
    return {
      kind: "unknown",
      targetMinutes: target,
      actualMinutes: undefined,
      label: "ND",
      reason: `${kind} défini, mais preuve ou chronomètre incomplet.`,
    };
  }
  if (invalidFields.has(startField) || invalidFields.has(endField)) {
    return {
      kind: "unknown",
      targetMinutes: target,
      actualMinutes: undefined,
      label: "ND",
      reason: `${kind} défini, mais un horodatage de comparaison est invalide.`,
    };
  }
  if (end.epochMs < start.epochMs) {
    addUniqueIssue(issues, {
      code: "invalid-chronology",
      severity: "error",
      field: endField,
      message: `La comparaison ${kind} est impossible : sa fin précède son début.`,
    });
    return {
      kind: "unknown",
      targetMinutes: target,
      actualMinutes: undefined,
      label: "ND",
      reason: `${kind} défini, mais chronologie de comparaison incohérente.`,
    };
  }
  const actualMinutes = minutesBetween(start, end);
  const met = actualMinutes <= target;
  return {
    kind: met ? "met" : "missed",
    targetMinutes: target,
    actualMinutes,
    label: met ? "respecté" : "non respecté",
    reason: `${actualMinutes.toLocaleString(
      "fr-FR",
    )} min observées pour une cible de ${target.toLocaleString("fr-FR")} min.`,
  };
}

function evaluateSla(
  objectives: WebsiteIncidentObjectives,
  issues: WebsiteIncidentIssue[],
): WebsiteIncidentSlaResult {
  const values = [
    objectives.slaReference.trim(),
    objectives.slaCoverageWindow.trim(),
    objectives.slaClockRule.trim(),
  ];
  if (values.every((value) => !value)) {
    return {
      kind: "not-defined",
      label: "ND",
      reason: "Aucun SLA documenté : aucun respect contractuel n’est affirmé.",
    };
  }
  if (values.some((value) => !value)) {
    addUniqueIssue(issues, {
      code: "sla-incomplete",
      severity: "warning",
      field: "objectives.slaReference",
      message:
        "Le SLA doit préciser sa référence, sa fenêtre de couverture et sa règle de départ du chronomètre.",
    });
    return {
      kind: "incomplete",
      label: "ND",
      reason:
        "SLA partiel : la conformité contractuelle ne peut pas être calculée.",
    };
  }
  return {
    kind: "documented",
    label: "documenté",
    reason:
      "Le contrat est identifié ; le moteur ne déduit pas automatiquement un droit, une pénalité ou une exclusion.",
  };
}

function scaledInteger(
  value: number,
  decimals: number,
): number | undefined {
  const factor = 10 ** decimals;
  const scaled = value * factor;
  const rounded = Math.round(scaled);
  const floatingPointTolerance = Math.max(
    1e-7,
    Number.EPSILON * Math.max(1, Math.abs(scaled)),
  );
  if (
    !Number.isSafeInteger(rounded) ||
    Math.abs(scaled - rounded) > floatingPointTolerance
  ) {
    return undefined;
  }
  return rounded;
}

function roundedNonnegativeQuotient(
  numerator: bigint,
  denominator: bigint,
): bigint {
  return (numerator + denominator / BigInt(2)) / denominator;
}

function centsAsExactEuros(cents: bigint): number | undefined {
  if (cents > MAX_SAFE_DIRECT_COST_CENTS) return undefined;
  const numericCents = Number(cents);
  const euros = numericCents / CENTS_PER_EURO;
  return Math.round(euros * CENTS_PER_EURO) === numericCents
    ? euros
    : undefined;
}

export function calculateWebsiteIncidentDirectCost(
  input: WebsiteIncidentDirectCostInput,
): WebsiteIncidentDirectCostResult {
  const issues: WebsiteIncidentDirectCostIssue[] = [];
  const numericFields = Object.keys(
    WEBSITE_INCIDENT_DIRECT_COST_LIMITS,
  ) as WebsiteIncidentDirectCostNumericField[];

  for (const field of numericFields) {
    const value = input[field];
    const limit = WEBSITE_INCIDENT_DIRECT_COST_LIMITS[field];
    if (value === undefined) {
      issues.push({
        field,
        code: "missing",
        message: `${field} absent : le coût reste ND.`,
      });
      continue;
    }
    if (
      !Number.isFinite(value) ||
      value < limit.minimum ||
      value > limit.maximum ||
      (limit.integer === true && !Number.isInteger(value)) ||
      (limit.decimals !== undefined &&
        scaledInteger(value, limit.decimals) === undefined)
    ) {
      issues.push({
        field,
        code: "invalid",
        message: `${field} doit rester entre ${limit.minimum.toLocaleString(
          "fr-FR",
          )} et ${limit.maximum.toLocaleString("fr-FR")}${
          limit.integer ? " et être entier" : ""
        }${
          limit.decimals === undefined
            ? ""
            : ` et comporter au plus ${limit.decimals} décimales`
        }.`,
      });
    }
  }
  if (issues.length > 0) {
    return { kind: "unknown", label: "ND", issues };
  }

  const marginPerTransactionCents = scaledInteger(
    input.marginPerTransaction as number,
    2,
  ) as number;
  const productivityHoursHundredths = scaledInteger(
    input.productivityHoursPerPerson as number,
    2,
  ) as number;
  const productivityHourlyCostCents = scaledInteger(
    input.productivityHourlyCost as number,
    2,
  ) as number;
  const coordinationHoursHundredths = scaledInteger(
    input.coordinationHoursPerPerson as number,
    2,
  ) as number;
  const coordinationHourlyCostCents = scaledInteger(
    input.coordinationHourlyCost as number,
    2,
  ) as number;
  const confirmedDirectCostsCents = scaledInteger(
    input.confirmedDirectCosts as number,
    2,
  ) as number;

  const lostMarginCents =
    BigInt(input.irrecoverableTransactions as number) *
    BigInt(marginPerTransactionCents);
  const productivityCostCents = roundedNonnegativeQuotient(
    BigInt(input.productivityPeople as number) *
      BigInt(productivityHoursHundredths) *
      BigInt(productivityHourlyCostCents),
    BigInt(CENTS_PER_EURO),
  );
  const coordinationCostCents = roundedNonnegativeQuotient(
    BigInt(input.coordinationPeople as number) *
      BigInt(coordinationHoursHundredths) *
      BigInt(coordinationHourlyCostCents),
    BigInt(CENTS_PER_EURO),
  );

  if (
    productivityCostCents > BigInt(0) &&
    coordinationCostCents > BigInt(0) &&
    input.coordinationDistinctFromProductivity !== true
  ) {
    return {
      kind: "unknown",
      label: "ND",
      issues: [
        {
          field: "possibleDoubleCount",
          code: "possible-double-count",
          message:
            "Les heures de coordination doivent être confirmées distinctes des heures de productivité avant addition.",
        },
      ],
    };
  }

  const totalCents =
    lostMarginCents +
    productivityCostCents +
    coordinationCostCents +
    BigInt(confirmedDirectCostsCents);
  const exactAmounts = {
    lostMargin: centsAsExactEuros(lostMarginCents),
    productivityCost: centsAsExactEuros(productivityCostCents),
    coordinationCost: centsAsExactEuros(coordinationCostCents),
    confirmedDirectCosts: centsAsExactEuros(
      BigInt(confirmedDirectCostsCents),
    ),
    total: centsAsExactEuros(totalCents),
  };
  if (Object.values(exactAmounts).some((value) => value === undefined)) {
    return {
      kind: "unknown",
      label: "ND",
      issues: [
        {
          field: "total",
          code: "unsafe-total",
          message:
            "Le total dépasse la borne représentable exactement au centime ; aucune valeur n’est publiée.",
        },
      ],
    };
  }

  return {
    kind: "known",
    label: "calculé",
    lostMargin: exactAmounts.lostMargin as number,
    productivityCost: exactAmounts.productivityCost as number,
    coordinationCost: exactAmounts.coordinationCost as number,
    confirmedDirectCosts: exactAmounts.confirmedDirectCosts as number,
    total: exactAmounts.total as number,
    issues: [],
  };
}

function gateApplicability(
  dossier: WebsiteIncidentDossier,
  id: WebsiteIncidentRecoveryGateId,
): boolean | undefined {
  const applicability = WEBSITE_INCIDENT_RECOVERY_GATES[id].applicability;
  if (applicability === "always") return true;
  if (applicability === "payment") return dossier.context.service.usesPayments;
  if (applicability === "email")
    return dossier.context.service.sendsTransactionalEmail;
  if (applicability === "webhook") return dossier.context.service.usesWebhooks;
  if (applicability === "data") return dossier.context.service.hasMutableData;

  const hasSignal =
    dossier.context.cyberSignals.some((signal) => signal.trim().length > 0) ||
    dossier.recoveryGates.cyber_clearance.status === "fail";
  if (
    dossier.context.cyberAssessment === "suspected" ||
    dossier.context.cyberAssessment === "confirmed" ||
    hasSignal
  ) {
    return true;
  }
  if (dossier.context.cyberAssessment === "no-signal") return false;
  return undefined;
}

function evidenceComplete(evidence: WebsiteIncidentGateEvidence): boolean {
  if (evidence.status === "unknown") return false;
  return Boolean(
    evidence.proofKind !== "unknown" &&
    evidence.observedAt.trim() &&
    evidence.evidenceReference.trim() &&
    evidence.result.trim() &&
    evidence.owner.trim(),
  );
}

function gateEvidenceEarliestAnchor(
  id: WebsiteIncidentRecoveryGateId,
  status: WebsiteIncidentGateStatus,
): { field: string; label: string } | undefined {
  if (status === "unknown") return undefined;
  if (status === "fail") {
    return {
      field: "timeline.firstFailureObservedAt",
      label: "l’instant du premier échec observé",
    };
  }
  if (id === "cyber_clearance" && status === "pass") {
    return {
      field: "timeline.technicallyRestoredAt",
      label: "l’instant du rétablissement technique",
    };
  }
  if (status === "NA") {
    return {
      field: "timeline.detectedAt",
      label: "l’instant de détection de l’incident",
    };
  }
  if (id === "business_signoff") {
    return {
      field: "timeline.monitoringEndedAt",
      label: "l’instant de fin de la période d’observation",
    };
  }
  return {
    field: "timeline.technicallyRestoredAt",
    label: "l’instant du rétablissement technique",
  };
}

function evaluateGate(
  dossier: WebsiteIncidentDossier,
  id: WebsiteIncidentRecoveryGateId,
  parsed: Map<string, ParsedInstant>,
  invalidFields: Set<string>,
  issues: WebsiteIncidentIssue[],
): WebsiteIncidentEffectiveGate {
  const evidence = dossier.recoveryGates[id];
  const applicable = gateApplicability(dossier, id);
  const complete = evidenceComplete(evidence);
  const reasons: string[] = [];
  let effectiveStatus = evidence.status;
  const evidenceField = `recoveryGates.${id}.observedAt`;

  if (applicable === undefined) {
    reasons.push("Applicabilité non qualifiée dans le profil de service.");
    effectiveStatus = "unknown";
    if (evidence.status === "NA") {
      addUniqueIssue(issues, {
        code: "gate-applicability",
        severity: "error",
        gateId: id,
        field: `recoveryGates.${id}.status`,
        message: `La porte « ${WEBSITE_INCIDENT_RECOVERY_GATES[id].label} » ne peut pas être déclarée non applicable sans profil explicite.`,
      });
    }
  } else if (applicable && evidence.status === "NA") {
    reasons.push("La porte est applicable et ne peut pas être neutralisée.");
    effectiveStatus = "unknown";
    addUniqueIssue(issues, {
      code: "gate-applicability",
      severity: "error",
      gateId: id,
      field: `recoveryGates.${id}.status`,
      message: `La porte applicable « ${WEBSITE_INCIDENT_RECOVERY_GATES[id].label} » est déclarée non applicable.`,
    });
  } else if (!applicable && evidence.status !== "NA") {
    reasons.push(
      "Le profil indique une fonction absente ; le statut attendu est NA.",
    );
    effectiveStatus = "unknown";
    if (evidence.status !== "unknown") {
      addUniqueIssue(issues, {
        code: "gate-applicability",
        severity: "error",
        gateId: id,
        field: `recoveryGates.${id}.status`,
        message: `La porte « ${WEBSITE_INCIDENT_RECOVERY_GATES[id].label} » contredit le profil de service.`,
      });
    }
  }
  if (
    id === "critical_journey" &&
    evidence.status === "pass" &&
    !dossier.context.service.criticalJourney.trim()
  ) {
    reasons.push("Le parcours métier critique à recetter n’est pas décrit.");
    effectiveStatus = "unknown";
    addUniqueIssue(issues, {
      code: "critical-journey-missing",
      severity: "error",
      gateId: id,
      field: "context.service.criticalJourney",
      message:
        "La porte « Parcours métier critique » ne peut pas réussir tant que le parcours à recetter n’est pas décrit.",
    });
  }

  if (evidence.status !== "unknown" && !complete) {
    reasons.push("La preuve est incomplète.");
    addUniqueIssue(issues, {
      code: "gate-evidence-missing",
      severity: evidence.status === "fail" ? "warning" : "error",
      gateId: id,
      field: `recoveryGates.${id}`,
      message: `La porte « ${WEBSITE_INCIDENT_RECOVERY_GATES[id].label} » doit contenir date, référence, résultat et responsable.`,
    });
    if (evidence.status !== "fail") effectiveStatus = "unknown";
  }
  if (
    evidence.status === "pass" &&
    evidence.proofKind !== WEBSITE_INCIDENT_RECOVERY_GATES[id].acceptedPassProof
  ) {
    reasons.push(
      "Le type de preuve ne démontre pas la réussite de cette porte.",
    );
    effectiveStatus = "unknown";
    addUniqueIssue(issues, {
      code: "gate-proof-insufficient",
      severity: "error",
      gateId: id,
      field: `recoveryGates.${id}.proofKind`,
      message: `La preuve « ${evidence.proofKind} » ne suffit pas pour valider « ${WEBSITE_INCIDENT_RECOVERY_GATES[id].label} ».`,
    });
  }
  if (
    evidence.status === "NA" &&
    evidence.proofKind !== "applicability-justification"
  ) {
    reasons.push("La non-applicabilité n’est pas justifiée par le profil.");
    effectiveStatus = "unknown";
    addUniqueIssue(issues, {
      code: "gate-proof-insufficient",
      severity: "error",
      gateId: id,
      field: `recoveryGates.${id}.proofKind`,
      message: `La porte « ${WEBSITE_INCIDENT_RECOVERY_GATES[id].label} » exige une justification structurée pour le statut NA.`,
    });
  }
  if (invalidFields.has(`recoveryGates.${id}.observedAt`)) {
    reasons.push("L’horodatage de preuve est invalide.");
    effectiveStatus = "unknown";
  }

  const earliestAnchor = gateEvidenceEarliestAnchor(id, evidence.status);
  const evidenceInstant = parsed.get(evidenceField);
  if (
    evidence.status !== "unknown" &&
    evidenceInstant &&
    !invalidFields.has(evidenceField) &&
    earliestAnchor
  ) {
    const anchorInstant = parsed.get(earliestAnchor.field);
    if (
      !anchorInstant ||
      invalidFields.has(earliestAnchor.field) ||
      evidenceInstant.epochMs < anchorInstant.epochMs
    ) {
      reasons.push(
        `La preuve n’est pas valablement située après ${earliestAnchor.label}.`,
      );
      effectiveStatus = "unknown";
      addUniqueIssue(issues, {
        code: "gate-evidence-outside-window",
        severity: "error",
        gateId: id,
        field: evidenceField,
        message: `La preuve de « ${WEBSITE_INCIDENT_RECOVERY_GATES[id].label} » doit être horodatée à partir de ${earliestAnchor.label}.`,
      });
    }

    const closedAt = parsed.get("timeline.closedAt");
    if (
      closedAt &&
      !invalidFields.has("timeline.closedAt") &&
      evidenceInstant.epochMs > closedAt.epochMs
    ) {
      reasons.push("La preuve est postérieure à la clôture déclarée.");
      effectiveStatus = "unknown";
      addUniqueIssue(issues, {
        code: "gate-evidence-outside-window",
        severity: "error",
        gateId: id,
        field: evidenceField,
        message: `La preuve de « ${WEBSITE_INCIDENT_RECOVERY_GATES[id].label} » est postérieure à la clôture déclarée.`,
      });
    }
  }
  if (evidence.status === "unknown") {
    reasons.push("Aucune preuve concluante.");
  }

  return {
    id,
    declaredStatus: evidence.status,
    effectiveStatus,
    applicable,
    evidenceComplete: complete,
    reasons,
  };
}

function validateUrl(value: string, issues: WebsiteIncidentIssue[]): boolean {
  try {
    const url = new URL(value);
    if (
      (url.protocol !== "http:" && url.protocol !== "https:") ||
      !url.hostname
    ) {
      throw new Error("unsupported URL");
    }
    if (url.username || url.password) {
      addUniqueIssue(issues, {
        code: "url-contains-credentials",
        severity: "error",
        field: "context.url",
        message:
          "L’URL du dossier ne doit pas contenir d’identifiant ou de mot de passe.",
      });
      return false;
    }
    return true;
  } catch {
    addUniqueIssue(issues, {
      code: "invalid-url",
      severity: "error",
      field: "context.url",
      message: "L’URL doit être une adresse HTTP ou HTTPS valide.",
    });
    return false;
  }
}

function routeWebsiteIncident(
  dossier: WebsiteIncidentDossier,
  coreComplete: boolean,
  providerEvidenceValid: boolean,
): {
  route: WebsiteIncidentRoute;
  reason: string;
} {
  const cyberTriggered =
    dossier.context.cyberAssessment === "suspected" ||
    dossier.context.cyberAssessment === "confirmed" ||
    dossier.context.cyberSignals.some((signal) => signal.trim()) ||
    dossier.recoveryGates.cyber_clearance.status === "fail";
  if (cyberTriggered) {
    return {
      route: "cyber",
      reason:
        "Un signal cyber ou une levée cyber en échec impose l’escalade prioritaire ; les tests actifs non autorisés doivent cesser.",
    };
  }
  if (!coreComplete) {
    return {
      route: "incomplete",
      reason:
        "Le contexte ou les preuves minimales ne permettent pas encore de choisir une branche fiable.",
    };
  }
  if (
    (dossier.context.scope === "single-device" ||
      dossier.context.scope === "single-network") &&
    dossier.context.independentAccess === "pass"
  ) {
    return {
      route: "local",
      reason:
        "Le service répond depuis un accès indépendant tandis que l’impact observé reste limité au poste ou au réseau local.",
    };
  }
  if (
    providerEvidenceValid &&
    (dossier.context.provider.status === "degraded" ||
      dossier.context.provider.status === "outage")
  ) {
    return {
      route: "provider",
      reason:
        "Une dégradation fournisseur documentée justifie l’escalade fournisseur, sans prouver à elle seule la cause racine.",
    };
  }
  if (
    dossier.context.independentAccess === "fail" ||
    dossier.context.httpStatus !== undefined ||
    dossier.context.technicalEvidence.trim() ||
    dossier.context.scope === "multiple-networks" ||
    dossier.context.scope === "regional" ||
    dossier.context.scope === "global" ||
    dossier.context.scope === "partial"
  ) {
    return {
      route: "technical",
      reason:
        dossier.context.httpStatus === 502
          ? "Une réponse HTTP 502 oriente vers le diagnostic technique, mais ne permet pas d’attribuer la cause à l’application, à l’origine, à la passerelle ou à un prestataire."
          : "L’échec dépasse le seul environnement local et nécessite un diagnostic technique par couches.",
    };
  }
  return {
    route: "incomplete",
    reason:
      "Aucun test indépendant ou signal suffisamment qualifié ne permet encore d’orienter l’incident.",
  };
}

function uniqueStrings(values: string[]): string[] {
  return [...new Set(values.filter((value) => value.trim()))];
}

export function evaluateWebsiteIncidentDossier(
  dossier: WebsiteIncidentDossier,
  evaluationTime: string,
): WebsiteIncidentDossierEvaluation {
  const issues: WebsiteIncidentIssue[] = [];
  const timestampValidation = validateTimestamps(
    dossier,
    evaluationTime,
    issues,
  );
  const timeline = validateTimeline(
    dossier,
    timestampValidation.parsed,
    timestampValidation.invalidFields,
    issues,
  );

  const missingContext: string[] = [];
  if (!dossier.context.reference.trim()) missingContext.push("référence");
  if (!dossier.context.url.trim()) missingContext.push("URL");
  if (!dossier.context.symptom.trim()) missingContext.push("symptôme");
  if (!dossier.context.impact.trim()) missingContext.push("impact");
  if (dossier.context.scope === "unknown") missingContext.push("périmètre");
  if (!dossier.timeline.firstFailureObservedAt.trim())
    missingContext.push("premier échec observé");
  if (!dossier.timeline.detectedAt.trim()) missingContext.push("détection");
  if (missingContext.length > 0) {
    addUniqueIssue(issues, {
      code: "missing-context",
      severity: "error",
      field: "context",
      message: `Contexte minimal manquant : ${missingContext.join(", ")}.`,
    });
  }
  const urlValid = dossier.context.url.trim()
    ? validateUrl(dossier.context.url.trim(), issues)
    : false;

  const httpStatus = dossier.context.httpStatus;
  const httpStatusValid =
    httpStatus === undefined ||
    (Number.isInteger(httpStatus) && httpStatus >= 100 && httpStatus <= 599);
  if (!httpStatusValid) {
    addUniqueIssue(issues, {
      code: "invalid-http-status",
      severity: "error",
      field: "context.httpStatus",
      message: "Le statut HTTP doit être un entier compris entre 100 et 599.",
    });
  }
  if (httpStatus === 502) {
    addUniqueIssue(issues, {
      code: "http-502-no-cause",
      severity: "warning",
      field: "context.httpStatus",
      message:
        "HTTP 502 est une observation de passerelle ou d’amont, pas une preuve de cause racine.",
    });
  }

  let providerEvidenceValid = true;
  if (dossier.context.provider.status !== "unknown") {
    const providerCheckedAtField = "context.provider.checkedAt";
    const firstFailureField = "timeline.firstFailureObservedAt";
    const missing = [
      dossier.context.provider.name.trim(),
      dossier.context.provider.checkedAt.trim(),
      dossier.context.provider.reference.trim(),
      dossier.context.provider.scope.trim(),
    ].some((value) => !value);
    if (
      missing ||
      timestampValidation.invalidFields.has(providerCheckedAtField)
    ) {
      providerEvidenceValid = false;
      addUniqueIssue(issues, {
        code: "provider-proof-missing",
        severity: "error",
        field: "context.provider",
        message:
          "Un statut fournisseur qualifié exige fournisseur, date, référence et périmètre observé.",
      });
    } else {
      const providerCheckedAt =
        timestampValidation.parsed.get(providerCheckedAtField);
      const firstFailure = timestampValidation.parsed.get(firstFailureField);
      const closedAt = timestampValidation.parsed.get("timeline.closedAt");
      if (
        !providerCheckedAt ||
        !firstFailure ||
        timestampValidation.invalidFields.has(firstFailureField) ||
        providerCheckedAt.epochMs < firstFailure.epochMs ||
        (closedAt !== undefined &&
          !timestampValidation.invalidFields.has("timeline.closedAt") &&
          providerCheckedAt.epochMs > closedAt.epochMs)
      ) {
        providerEvidenceValid = false;
        addUniqueIssue(issues, {
          code: "provider-proof-outside-window",
          severity: "error",
          field: providerCheckedAtField,
          message:
            "Le statut fournisseur doit être consulté pendant l’incident, entre le premier échec observé et la clôture déclarée.",
        });
      }
    }
  }

  if (
    dossier.context.recentChange.status === "known" &&
    (!dossier.context.recentChange.changedAt.trim() ||
      !dossier.context.recentChange.description.trim())
  ) {
    addUniqueIssue(issues, {
      code: "recent-change-details-missing",
      severity: "error",
      field: "context.recentChange",
      message:
        "Un changement déclaré connu doit comporter son instant et sa description, sans être présenté comme la cause.",
    });
  }

  const nonEmptyCyberSignals = dossier.context.cyberSignals.filter((signal) =>
    signal.trim(),
  );
  if (
    (dossier.context.cyberAssessment === "suspected" ||
      dossier.context.cyberAssessment === "confirmed") &&
    nonEmptyCyberSignals.length === 0
  ) {
    addUniqueIssue(issues, {
      code: "cyber-signals-missing",
      severity: "error",
      field: "context.cyberSignals",
      message:
        "Une suspicion ou confirmation cyber doit être reliée à au moins un signal factuel, sans copier de secret.",
    });
  }
  if (
    (dossier.context.cyberAssessment === "no-signal" ||
      dossier.context.cyberAssessment === "unknown") &&
    nonEmptyCyberSignals.length > 0
  ) {
    addUniqueIssue(issues, {
      code: "cyber-signals-inconsistent",
      severity: "error",
      field: "context.cyberAssessment",
      message:
        "Des signaux cyber sont consignés mais l’évaluation cyber ne les qualifie pas.",
    });
  }

  const timelineCoreFields = [
    "timeline.firstFailureObservedAt",
    "timeline.detectedAt",
  ];
  const coreComplete =
    missingContext.length === 0 &&
    urlValid &&
    timestampValidation.timeZoneValid &&
    timestampValidation.evaluation !== undefined &&
    !issues.some(
      (issue) =>
        issue.field === "evaluationTime" ||
        timelineCoreFields.includes(issue.field ?? ""),
    );
  const routeResult = routeWebsiteIncident(
    dossier,
    coreComplete,
    providerEvidenceValid,
  );

  const rto = evaluateObjective(
    "RTO",
    dossier.objectives.rtoMinutes,
    dossier.objectives.rtoSource,
    timestampValidation.parsed.get("objectives.rtoStartedAt"),
    timestampValidation.parsed.get("timeline.technicallyRestoredAt"),
    "objectives.rtoStartedAt",
    "timeline.technicallyRestoredAt",
    timestampValidation.invalidFields,
    issues,
  );
  const rpo = evaluateObjective(
    "RPO",
    dossier.objectives.rpoMinutes,
    dossier.objectives.rpoSource,
    timestampValidation.parsed.get("objectives.dataRecoveryPointAt"),
    timestampValidation.parsed.get("objectives.rpoReferenceAt"),
    "objectives.dataRecoveryPointAt",
    "objectives.rpoReferenceAt",
    timestampValidation.invalidFields,
    issues,
  );
  const sla = evaluateSla(dossier.objectives, issues);
  const directCost = calculateWebsiteIncidentDirectCost(dossier.directCost);

  const gates = Object.fromEntries(
    WEBSITE_INCIDENT_RECOVERY_GATE_IDS.map((id) => [
      id,
      evaluateGate(
        dossier,
        id,
        timestampValidation.parsed,
        timestampValidation.invalidFields,
        issues,
      ),
    ]),
  ) as Record<WebsiteIncidentRecoveryGateId, WebsiteIncidentEffectiveGate>;
  const blockingGateIds = WEBSITE_INCIDENT_RECOVERY_GATE_IDS.filter((id) => {
    const status = gates[id].effectiveStatus;
    return status !== "pass" && status !== "NA";
  });

  const closureReasons: string[] = [];
  if (routeResult.route === "incomplete") {
    closureReasons.push("La route de triage reste incomplète.");
  }
  if (!timeline.valid) {
    closureReasons.push("La chronologie contient une incohérence.");
  }
  for (const [field, label] of [
    ["timeline.technicallyRestoredAt", "rétablissement technique"],
    ["timeline.businessValidatedAt", "validation métier"],
    ["timeline.monitoringEndedAt", "fin d’observation"],
  ] as const) {
    const key = field.replace("timeline.", "") as keyof WebsiteIncidentTimeline;
    if (
      !dossier.timeline[key].trim() ||
      timestampValidation.invalidFields.has(field)
    ) {
      closureReasons.push(`Horodatage de ${label} absent ou invalide.`);
    }
  }
  if (blockingGateIds.length > 0) {
    closureReasons.push(
      `Portes non levées : ${blockingGateIds
        .map((id) => WEBSITE_INCIDENT_RECOVERY_GATES[id].label)
        .join(", ")}.`,
    );
  }
  if (issues.some((issue) => issue.severity === "error")) {
    closureReasons.push(
      "Le dossier contient au moins une incohérence ou preuve invalide.",
    );
  }

  let canClose = closureReasons.length === 0;
  if (dossier.timeline.closedAt.trim() && !canClose) {
    addUniqueIssue(issues, {
      code: "premature-closure",
      severity: "error",
      field: "timeline.closedAt",
      message:
        "Une clôture est déclarée alors que la validation métier, l’observation, les preuves ou la chronologie ne permettent pas de clôturer.",
    });
    if (
      !closureReasons.includes(
        "Une clôture prématurée est inscrite dans le dossier.",
      )
    ) {
      closureReasons.push(
        "Une clôture prématurée est inscrite dans le dossier.",
      );
    }
    canClose = false;
  }

  const closureStatus: WebsiteIncidentClosureEvaluation["status"] = canClose
    ? dossier.timeline.closedAt.trim()
      ? "closed"
      : "ready"
    : "not-ready";

  const nextActions: string[] = [];
  if (routeResult.route === "cyber") {
    nextActions.push(
      "Suspendre les tests actifs non autorisés, préserver les preuves et joindre le référent cyber par un canal sûr.",
    );
  } else if (routeResult.route === "local") {
    nextActions.push(
      "Comparer poste, navigateur, réseau local, résolution DNS et accès indépendant avant toute modification du site.",
    );
  } else if (routeResult.route === "provider") {
    nextActions.push(
      "Ouvrir ou compléter l’incident fournisseur avec heure, périmètre et référence, tout en maintenant les tests du service réel.",
    );
  } else if (routeResult.route === "technical") {
    nextActions.push(
      "Diagnostiquer successivement DNS/TLS, CDN/WAF, origine, runtime, application, données et dépendances tierces.",
    );
  } else {
    nextActions.push(
      "Compléter le contexte minimal et effectuer un test passif depuis un accès indépendant.",
    );
  }
  if (httpStatus === 502) {
    nextActions.push(
      "Conserver le 502 comme symptôme horodaté ; vérifier passerelle, amont, origine et dépendances sans attribuer la cause.",
    );
  }
  if (blockingGateIds.length > 0) {
    nextActions.push(
      "Lever chaque porte applicable avec une observation, une référence, un résultat et un responsable.",
    );
  }
  if (directCost.kind === "unknown") {
    nextActions.push(
      "Conserver le coût à ND jusqu’à disposer de valeurs bornées et sans double comptage.",
    );
  }
  if (rto.kind === "not-defined" || rpo.kind === "not-defined") {
    nextActions.push(
      "Afficher les objectifs absents à ND ; ne pas les reconstruire après l’incident pour déclarer une conformité.",
    );
  }

  return {
    version: WEBSITE_INCIDENT_DOSSIER_VERSION,
    evaluationTime: evaluationTime.trim(),
    valid: !issues.some((issue) => issue.severity === "error"),
    route: routeResult.route,
    routeLabel: ROUTE_LABELS[routeResult.route],
    routeReason: routeResult.reason,
    causeConclusion:
      "Cause non établie : la route organise l’escalade et ne constitue pas un diagnostic de cause.",
    issues,
    timeline,
    rto,
    rpo,
    sla,
    directCost,
    gates,
    blockingGateIds,
    closure: {
      status: closureStatus,
      canClose,
      reasons: uniqueStrings(closureReasons),
    },
    nextActions: uniqueStrings(nextActions),
  };
}

function redactSecrets(value: string): string {
  return value
    .replace(
      /-----BEGIN(?: [A-Z0-9]+)* PRIVATE KEY-----[\s\S]*?-----END(?: [A-Z0-9]+)* PRIVATE KEY-----/gi,
      "[CLÉ PRIVÉE MASQUÉE]",
    )
    .replace(
      /\bAuthorization\s*:?\s*Basic\s+[A-Za-z0-9+/=]{8,}(?![A-Za-z0-9+/=])/gi,
      "Authorization: Basic [SECRET MASQUÉ]",
    )
    .replace(/\bBearer\s+[A-Za-z0-9._~+/=-]{8,}/gi, "Bearer [SECRET MASQUÉ]")
    .replace(
      /\beyJ[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}(?:\.[A-Za-z0-9_-]{5,})?\b/g,
      "[JETON MASQUÉ]",
    )
    .replace(/\bsk_(?:live|test)_[A-Za-z0-9_]{8,}\b/gi, "[JETON MASQUÉ]")
    .replace(/\bgh[opusr]_[A-Za-z0-9]{20,}\b/g, "[JETON MASQUÉ]")
    .replace(/\bgithub_pat_[A-Za-z0-9_]{20,}\b/g, "[JETON MASQUÉ]")
    .replace(/\bxox[bpa]-[A-Za-z0-9-]{10,}\b/g, "[JETON MASQUÉ]")
    .replace(/\bAKIA[0-9A-Z]{16}\b/g, "[IDENTIFIANT AWS MASQUÉ]")
    .replace(/(https?:\/\/)[^/\s:@]+:[^@\s/]+@/gi, "$1[IDENTIFIANTS MASQUÉS]@")
    .replace(
      /([?&](?:access_?token|api_?key|client_?secret|key|password|secret|signature|token)=)[^&#\s]*/gi,
      "$1[MASQUÉ]",
    )
    .replace(
      /\b(password|passwd|pwd|token|access_?token|api[-_ ]?key|client[-_ ]?secret|secret|authorization|cookie)\b\s*[:=]\s*(?:"[^"]*"|'[^']*'|[^\s,;]+)/gi,
      "$1=[MASQUÉ]",
    );
}

function safe(value: string): string {
  const normalized = redactSecrets(value.trim());
  return normalized || "ND";
}

function formatCurrency(value: number): string {
  return `${value.toLocaleString("fr-FR", {
    maximumFractionDigits: 2,
  })} €`;
}

function objectiveReportLine(
  label: "RTO" | "RPO",
  result: WebsiteIncidentObjectiveResult,
): string {
  if (result.kind === "met" || result.kind === "missed") {
    return `${label} : ${result.label} — ${result.reason}`;
  }
  return `${label} : ND — ${result.reason}`;
}

export function buildWebsiteIncidentDossierReport(
  dossier: WebsiteIncidentDossier,
  evaluationTime: string,
): string {
  const evaluation = evaluateWebsiteIncidentDossier(dossier, evaluationTime);
  const lines: string[] = [
    "DOSSIER LOCAL D’INCIDENT ET DE REPRISE WEB",
    `Version : ${evaluation.version}`,
    `Évalué à : ${safe(evaluation.evaluationTime)}`,
    `Référence : ${safe(dossier.context.reference)}`,
    "",
    "VERDICT",
    `Route : ${evaluation.routeLabel}`,
    `Motif : ${evaluation.routeReason}`,
    evaluation.causeConclusion,
    `Clôture : ${
      evaluation.closure.status === "closed"
        ? "CLÔTURÉE"
        : evaluation.closure.status === "ready"
          ? "PRÊTE À ÊTRE AUTORISÉE"
          : "INTERDITE"
    }`,
    "",
    "CONTEXTE FACTUEL",
    `Fuseau : ${safe(dossier.context.timeZone)}`,
    `URL : ${safe(dossier.context.url)}`,
    `Symptôme : ${safe(dossier.context.symptom)}`,
    `Périmètre : ${WEBSITE_INCIDENT_SCOPE_LABELS[dossier.context.scope]}`,
    `Impact : ${safe(dossier.context.impact)}`,
    `Accès indépendant : ${
      WEBSITE_INCIDENT_INDEPENDENT_ACCESS_LABELS[
        dossier.context.independentAccess
      ]
    }`,
    `HTTP observé : ${
      dossier.context.httpStatus === undefined
        ? "ND"
        : String(dossier.context.httpStatus)
    }`,
    `Preuve technique : ${safe(dossier.context.technicalEvidence)}`,
    `Fournisseur : ${safe(dossier.context.provider.name)}`,
    `Statut fournisseur : ${
      WEBSITE_INCIDENT_PROVIDER_STATUS_LABELS[dossier.context.provider.status]
    }`,
    `Statut consulté à : ${safe(dossier.context.provider.checkedAt)}`,
    `Référence fournisseur : ${safe(dossier.context.provider.reference)}`,
    `Périmètre fournisseur : ${safe(dossier.context.provider.scope)}`,
    `Changement récent : ${
      WEBSITE_INCIDENT_RECENT_CHANGE_STATUS_LABELS[
        dossier.context.recentChange.status
      ]
    }`,
    `Changement à : ${safe(dossier.context.recentChange.changedAt)}`,
    `Description du changement : ${safe(
      dossier.context.recentChange.description,
    )}`,
    `Évaluation cyber : ${
      WEBSITE_INCIDENT_CYBER_ASSESSMENT_LABELS[
        dossier.context.cyberAssessment
      ]
    }`,
    `Signaux cyber : ${
      dossier.context.cyberSignals.length > 0
        ? dossier.context.cyberSignals.map(safe).join(" | ")
        : "aucun signal consigné"
    }`,
    `Parcours critique : ${safe(dossier.context.service.criticalJourney)}`,
    "",
    "CHRONOLOGIE",
  ];

  for (const item of TIMELINE_ORDER) {
    lines.push(`${item.label} : ${safe(dossier.timeline[item.key])}`);
  }
  lines.push(
    `Durée technique observée : ${
      evaluation.timeline.observedTechnicalOutageMinutes === undefined
        ? "ND"
        : `${evaluation.timeline.observedTechnicalOutageMinutes.toLocaleString(
            "fr-FR",
          )} min`
    }`,
    `Incertitude entre dernier bon et premier mauvais : ${
      evaluation.timeline.observationUncertaintyMinutes === undefined
        ? "ND"
        : `${evaluation.timeline.observationUncertaintyMinutes.toLocaleString(
            "fr-FR",
          )} min`
    }`,
    "",
    "OBJECTIFS ET CONTRAT",
    objectiveReportLine("RTO", evaluation.rto),
    `Source RTO : ${safe(dossier.objectives.rtoSource)}`,
    objectiveReportLine("RPO", evaluation.rpo),
    `Source RPO : ${safe(dossier.objectives.rpoSource)}`,
    `SLA : ${evaluation.sla.label} — ${evaluation.sla.reason}`,
    `Référence SLA : ${safe(dossier.objectives.slaReference)}`,
    `Couverture SLA : ${safe(dossier.objectives.slaCoverageWindow)}`,
    `Règle d’horloge SLA : ${safe(dossier.objectives.slaClockRule)}`,
    "",
    "COÛT DIRECT PRUDENT",
  );
  if (evaluation.directCost.kind === "known") {
    lines.push(
      `Marge irrécupérable : ${formatCurrency(
        evaluation.directCost.lostMargin,
      )}`,
      `Productivité : ${formatCurrency(
        evaluation.directCost.productivityCost,
      )}`,
      `Coordination distincte : ${formatCurrency(
        evaluation.directCost.coordinationCost,
      )}`,
      `Coûts directs confirmés : ${formatCurrency(
        evaluation.directCost.confirmedDirectCosts,
      )}`,
      `Total direct prudent : ${formatCurrency(evaluation.directCost.total)}`,
    );
  } else {
    lines.push(
      "Total direct prudent : ND",
      ...evaluation.directCost.issues.map(
        (issue) => `- ${safe(issue.message)}`,
      ),
    );
  }

  lines.push("", "DIX PORTES DE REPRISE");
  for (const id of WEBSITE_INCIDENT_RECOVERY_GATE_IDS) {
    const definition = WEBSITE_INCIDENT_RECOVERY_GATES[id];
    const gate = dossier.recoveryGates[id];
    const effective = evaluation.gates[id];
    lines.push(
      `${definition.label} : ${GATE_STATUS_LABELS[effective.effectiveStatus]}`,
      `  Attendu : ${definition.expected}`,
      `  Déclaré : ${GATE_STATUS_LABELS[gate.status]}`,
      `  Type de preuve : ${
        WEBSITE_INCIDENT_GATE_PROOF_LABELS[gate.proofKind]
      } (${gate.proofKind})`,
      `  Observé à : ${safe(gate.observedAt)}`,
      `  Preuve : ${safe(gate.evidenceReference)}`,
      `  Résultat : ${safe(gate.result)}`,
      `  Responsable : ${safe(gate.owner)}`,
    );
  }

  lines.push("", "BLOCAGES DE CLÔTURE");
  if (evaluation.closure.reasons.length === 0) {
    lines.push(
      "- Aucun blocage de reprise identifié par les règles du dossier.",
    );
  } else {
    lines.push(
      ...evaluation.closure.reasons.map((reason) => `- ${safe(reason)}`),
    );
  }

  lines.push("", "ANOMALIES ET AVERTISSEMENTS");
  if (evaluation.issues.length === 0) {
    lines.push("- Aucun.");
  } else {
    lines.push(
      ...evaluation.issues.map(
        (issue) =>
          `- ${issue.severity === "error" ? "ERREUR" : "ATTENTION"} : ${safe(
            issue.message,
          )}`,
      ),
    );
  }

  lines.push(
    "",
    "PROCHAINES ACTIONS",
    ...evaluation.nextActions.map((action) => `- ${safe(action)}`),
    "",
    "PRÉCAUTION",
    "Ce rapport est local. Ne pas y copier de mot de passe, clé, jeton, cookie, donnée client ni journal brut. Les chaînes ressemblant à des secrets sont masquées selon une approche automatique best-effort, qui ne garantit jamais qu’un export est exempt de secret.",
  );
  return redactSecrets(lines.join("\n"));
}

function completedGate(
  status: Exclude<WebsiteIncidentGateStatus, "unknown">,
  proofKind: WebsiteIncidentGateProofKind,
  observedAt: string,
  reference: string,
  result: string,
  owner: string,
): WebsiteIncidentGateEvidence {
  return {
    status,
    proofKind,
    observedAt,
    evidenceReference: reference,
    result,
    owner,
  };
}

export function createFictitiousWebsiteIncidentDossier(
  evaluationTime: string,
  timeZone = "Europe/Paris",
): WebsiteIncidentDossier {
  const evaluation = parseStrictIsoInstant(evaluationTime.trim());
  if (
    !evaluation ||
    !isValidTimeZone(timeZone) ||
    offsetMinutesAt(evaluation.epochMs, timeZone) !== evaluation.offsetMinutes
  ) {
    throw new Error(
      "Une heure d’évaluation ISO avec décalage cohérent avec le fuseau est obligatoire.",
    );
  }
  const before = (minutes: number) =>
    formatInstantInTimeZone(evaluation.epochMs - minutes * 60_000, timeZone);
  const dossier = createEmptyWebsiteIncidentDossier();
  dossier.context = {
    reference: "INC-FICTIF-2026-001",
    timeZone,
    url: "https://boutique.example.invalid/",
    symptom:
      "HTTP 502 observé sur l’accueil et échec du formulaire depuis deux réseaux.",
    scope: "multiple-networks",
    impact:
      "Accueil et formulaire indisponibles ; deux demandes fictives non récupérables.",
    provider: {
      name: "Hébergeur fictif",
      status: "operational",
      checkedAt: before(132),
      reference: "STATUS-FICTIF-0848",
      scope: "Région Europe annoncée opérationnelle",
    },
    recentChange: {
      status: "known",
      changedAt: before(150),
      description:
        "Déploiement applicatif fictif consigné ; il reste un fait temporel et non une cause prouvée.",
    },
    cyberAssessment: "no-signal",
    cyberSignals: [],
    independentAccess: "fail",
    httpStatus: 502,
    technicalEvidence:
      "Réponse 502 horodatée et reproduite ; la couche responsable n’est pas déduite du code HTTP.",
    service: {
      criticalJourney: "Ouvrir l’accueil puis envoyer le formulaire de contact",
      usesPayments: false,
      sendsTransactionalEmail: true,
      usesWebhooks: false,
      hasMutableData: true,
    },
  };
  dossier.timeline = {
    lastKnownGoodAt: before(145),
    firstFailureObservedAt: before(138),
    detectedAt: before(135),
    acknowledgedAt: before(130),
    mitigatedAt: before(115),
    technicallyRestoredAt: before(48),
    businessValidatedAt: before(40),
    monitoringEndedAt: before(15),
    closedAt: before(10),
  };
  dossier.objectives = {
    rtoMinutes: 120,
    rtoStartedAt: before(138),
    rtoSource: "PCA-FICTIF-RTO-120",
    rpoMinutes: 15,
    dataRecoveryPointAt: before(148),
    rpoReferenceAt: before(138),
    rpoSource: "PCA-FICTIF-RPO-15",
    slaReference: "SLA-FICTIF-2026",
    slaCoverageWindow: "Lundi-vendredi 08:00-18:00 Europe/Paris",
    slaClockRule: "Départ à la première alerte qualifiée et enregistrée",
  };
  dossier.directCost = {
    irrecoverableTransactions: 2,
    marginPerTransaction: 120,
    productivityPeople: 3,
    productivityHoursPerPerson: 1.5,
    productivityHourlyCost: 45,
    coordinationPeople: 2,
    coordinationHoursPerPerson: 2,
    coordinationHourlyCost: 60,
    coordinationDistinctFromProductivity: true,
    confirmedDirectCosts: 350,
  };

  const passTimes: Record<WebsiteIncidentRecoveryGateId, number> = {
    public_access: 47,
    dns_tls: 46,
    homepage_http: 45,
    critical_journey: 40,
    payment: 39,
    email: 39,
    webhook: 38,
    data_reconciliation: 38,
    cyber_clearance: 37,
    business_signoff: 15,
  };
  for (const id of WEBSITE_INCIDENT_RECOVERY_GATE_IDS) {
    const applicability = WEBSITE_INCIDENT_RECOVERY_GATES[id].applicability;
    const isNotApplicable =
      applicability === "payment" ||
      applicability === "webhook" ||
      applicability === "cyber";
    dossier.recoveryGates[id] = completedGate(
      isNotApplicable ? "NA" : "pass",
      isNotApplicable
        ? "applicability-justification"
        : WEBSITE_INCIDENT_RECOVERY_GATES[id].acceptedPassProof,
      before(passTimes[id]),
      `PV-FICTIF-${id.toUpperCase()}`,
      isNotApplicable
        ? "Fonction absente ou aucun signal cyber selon le profil fictif."
        : "Contrôle fictif réussi sur le périmètre décrit.",
      isNotApplicable ? "Responsable de service fictif" : "Recetteur fictif",
    );
  }
  return dossier;
}
