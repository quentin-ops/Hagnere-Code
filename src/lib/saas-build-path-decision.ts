export const SAAS_BUILD_DECISION_VERSION =
  "saas-build-path-decision-r1-2026-07-27";
export const SAAS_BUILD_SOURCE_DATE = "2026-07-27";
export const SAAS_DOSSIER_MAX_JSON_BYTES = 512_000;
export const SAAS_DOSSIER_MAX_TEXT_LENGTH = 500;
export const SAAS_TCO_MAX_INPUT = 1_000_000_000_000;

export const SAAS_SCOPE_ITEMS = [
  {
    id: "business-rules",
    label: "Règles métier et cas d’erreur",
    critical: true,
    expected:
      "Les règles, refus, doublons et corrections sont couverts sur le même périmètre.",
  },
  {
    id: "ux-accessibility",
    label: "UX, mobile et accessibilité",
    critical: false,
    expected:
      "Les parcours, appareils, navigateurs et besoins d’accessibilité sont nommés.",
  },
  {
    id: "auth-roles",
    label: "Authentification et rôles",
    critical: true,
    expected:
      "Création, récupération, suppression et contrôle des rôles sont inclus.",
  },
  {
    id: "tenant-isolation",
    label: "Isolation entre clients",
    critical: true,
    expected:
      "Les accès autorisés et interdits entre deux sociétés sont testés côté serveur.",
  },
  {
    id: "code-build-tests",
    label: "Code, dépôt, build et tests",
    critical: true,
    expected:
      "Le dépôt, le lockfile, l’installation propre, le build de production et les tests sont livrés.",
  },
  {
    id: "data-migrations-files",
    label: "Base, migrations, fichiers et identités",
    critical: true,
    expected:
      "Schéma, migrations, données, fichiers et comptes utilisateurs sont traités séparément.",
  },
  {
    id: "environments-release",
    label: "Environnements et mises en production",
    critical: true,
    expected:
      "Préproduction, production, variables, publication et retour arrière sont inclus.",
  },
  {
    id: "security-privacy",
    label: "Sécurité, données et cadre contractuel",
    critical: true,
    expected:
      "Menaces, secrets, droits, DPA, sous-traitants et mesures adaptées sont couverts.",
  },
  {
    id: "observability-support",
    label: "Logs, alertes, incident et support",
    critical: true,
    expected:
      "Détection, diagnostic, astreinte éventuelle, information et reprise ont un responsable.",
  },
  {
    id: "backup-restore",
    label: "Sauvegarde et restauration",
    critical: true,
    expected:
      "La sauvegarde inclut les bonnes briques et une restauration est réellement exercée.",
  },
  {
    id: "domain-email-payment",
    label: "Domaine, e-mails et paiements",
    critical: true,
    expected:
      "Comptes, DNS, délivrabilité, webhooks, échecs et remboursements sont inclus si nécessaires.",
  },
  {
    id: "documentation",
    label: "Documentation et transmission",
    critical: false,
    expected:
      "Une autre personne peut comprendre, corriger, déployer et exploiter le produit.",
  },
  {
    id: "accounts-ownership",
    label: "Propriété des comptes et droits",
    critical: true,
    expected:
      "Les comptes appartiennent à l’entreprise, avec second administrateur et droits vérifiés.",
  },
  {
    id: "complete-exit",
    label: "Sortie complète",
    critical: true,
    expected:
      "Code, frontend, backend, données, identités, fichiers, secrets, domaine et procédures peuvent être repris.",
  },
] as const;

export type SaasScopeId = (typeof SAAS_SCOPE_ITEMS)[number]["id"];
export type SaasScopeStatus =
  | "unknown"
  | "included"
  | "excluded"
  | "not-applicable";

export const SAAS_PROOF_GATES = [
  {
    id: "clean-build",
    label: "Clone, installation propre, build de production et tests",
  },
  {
    id: "dependencies-licenses",
    label: "Dépendances, licences, provenance et composants tiers",
  },
  {
    id: "tenant-attacks",
    label: "Deux sociétés et tentatives d’accès interdites",
  },
  {
    id: "secret-rotation",
    label: "Secrets hors code et rotation réellement testée",
  },
  {
    id: "data-export-restore",
    label: "Export puis restauration du schéma, des données et des fichiers",
  },
  {
    id: "identity-exit",
    label: "Sortie des identités et procédure de réinitialisation",
  },
  {
    id: "code-data-rollback",
    label: "Retour arrière du code et restauration des données séparés",
  },
  {
    id: "payment-email",
    label: "Webhooks, doublons, remboursements, rebonds et délivrabilité",
  },
  {
    id: "monitoring-incident",
    label: "Alerte reçue et exercice d’incident chronométré",
  },
  {
    id: "performance-accessibility",
    label: "Charge, appareils, navigateurs et parcours accessible",
  },
  {
    id: "account-transfer",
    label: "Transfert des comptes, du domaine et du second administrateur",
  },
  {
    id: "independent-takeover",
    label: "Reprise et publication par une seconde personne",
  },
] as const;

export type SaasProofGateId = (typeof SAAS_PROOF_GATES)[number]["id"];
export type SaasProofStatus =
  | "unverified"
  | "pass"
  | "fail"
  | "not-applicable";

export const SAAS_TCO_FIELDS = [
  {
    id: "initialSubscriptions",
    label: "Abonnements, crédits et services de construction",
    unit: "€",
    help: "Montants ponctuels jusqu’au livrable accepté, sans confondre crédits et produit fini.",
  },
  {
    id: "internalInitialDays",
    label: "Temps initial du porteur et de l’équipe",
    unit: "jours",
    help: "Cadrage, prompts, retours, recette, comptes et coordination.",
  },
  {
    id: "externalInitialDays",
    label: "Conception, développement et stabilisation externes",
    unit: "jours",
    help: "Même livrable pour les deux options, y compris corrections nécessaires.",
  },
  {
    id: "reviewDays",
    label: "Revue technique, sécurité et juridique",
    unit: "jours",
    help: "Journées réellement prévues ; zéro uniquement si le poste est couvert ailleurs et prouvé.",
  },
  {
    id: "internalDayCost",
    label: "Coût chargé d’une journée interne",
    unit: "€/j",
    help: "Salaire, charges et coût d’opportunité selon votre convention.",
  },
  {
    id: "externalDayRate",
    label: "Coût d’une journée externe",
    unit: "€/j",
    help: "Tarif moyen cohérent avec les postes externes saisis.",
  },
  {
    id: "servicesMonthly",
    label: "Hébergement, base, e-mail, suivi et outils",
    unit: "€/mois",
    help: "Tous les services récurrents au volume retenu.",
  },
  {
    id: "internalRunDaysMonthly",
    label: "Pilotage et support internes",
    unit: "j/mois",
    help: "Recette, réponses clients, décisions et coordination.",
  },
  {
    id: "technicalRunDaysMonthly",
    label: "Maintenance et exploitation techniques",
    unit: "j/mois",
    help: "Correctifs, dépendances, sécurité, alertes et petites évolutions nécessaires.",
  },
  {
    id: "annualExercises",
    label: "Audits et exercices annuels",
    unit: "€/an",
    help: "Restauration, incident, sécurité, accessibilité ou contrôle indépendant.",
  },
  {
    id: "exitDays",
    label: "Sortie, transfert et reprise",
    unit: "jours",
    help: "Temps estimé pour transférer le produit complet, pas seulement un ZIP.",
  },
] as const;

export type SaasTcoField = (typeof SAAS_TCO_FIELDS)[number]["id"];
export type SaasTcoInput = Record<SaasTcoField, number | undefined>;
export type SaasTcoHorizon = 12 | 36 | 60;
export const SAAS_TCO_HORIZONS: SaasTcoHorizon[] = [12, 36, 60];

export type SaasCommercialEvidence =
  | "unknown"
  | "none"
  | "interviews"
  | "written-commitment"
  | "paid";
export type SaasStage =
  | "unknown"
  | "demo"
  | "internal-pilot"
  | "paid-pilot"
  | "production";
export type SaasDataRisk =
  | "unknown"
  | "fictitious"
  | "personal"
  | "sensitive";
export type SaasTenancy =
  | "unknown"
  | "no-account"
  | "single-organization"
  | "multi-tenant";
export type SaasPayment = "unknown" | "none" | "sandbox" | "live";
export type SaasIntegration =
  | "unknown"
  | "none"
  | "non-critical"
  | "critical";
export type SaasOutageImpact =
  | "unknown"
  | "low"
  | "work-delayed"
  | "contractual";
export type SaasTeamCapability =
  | "unknown"
  | "non-technical"
  | "frontend"
  | "full-stack"
  | "product-operations";

export interface SaasDecisionContext {
  decisionDate: string;
  need: string;
  firstBuyer: string;
  commercialEvidence: SaasCommercialEvidence;
  stage: SaasStage;
  dataRisk: SaasDataRisk;
  tenancy: SaasTenancy;
  payment: SaasPayment;
  integration: SaasIntegration;
  outageImpact: SaasOutageImpact;
  teamCapability: SaasTeamCapability;
}

export interface SaasScopeEvidence {
  status: SaasScopeStatus;
  note: string;
}

export interface SaasProofEvidence {
  status: SaasProofStatus;
  testedAt: string;
  environment: string;
  owner: string;
  independentReviewer: string;
  evidenceReference: string;
  notes: string;
}

export interface SaasCandidate {
  name: string;
  route: string;
  proposalReference: string;
  scope: Record<SaasScopeId, SaasScopeEvidence>;
  proofs: Record<SaasProofGateId, SaasProofEvidence>;
  tco: SaasTcoInput;
}

export interface SaasDecisionDossier {
  context: SaasDecisionContext;
  candidates: [SaasCandidate, SaasCandidate];
}

export type SaasMinimumRoute =
  | "incomplete"
  | "pause"
  | "solo-prototype"
  | "reviewed-pilot"
  | "responsible-build";

export interface SaasRouteRecommendation {
  route: SaasMinimumRoute;
  title: string;
  reasons: string[];
  missing: string[];
}

export interface SaasTcoKnown {
  kind: "known";
  horizonMonths: SaasTcoHorizon;
  initial: number;
  recurring: number;
  exit: number;
  total: number;
  averageMonthly: number;
}

export interface SaasTcoUnknown {
  kind: "unknown";
  horizonMonths: SaasTcoHorizon;
  missing: SaasTcoField[];
}

export type SaasTcoResult = SaasTcoKnown | SaasTcoUnknown;

export interface SaasCandidateQualification {
  status: "blocked" | "unqualified" | "qualified";
  contextGaps: string[];
  candidateGaps: string[];
  scopeGaps: SaasScopeId[];
  invalidScopeEvidence: SaasScopeId[];
  prohibitedNotApplicable: Array<SaasScopeId | SaasProofGateId>;
  failedProofs: SaasProofGateId[];
  unverifiedProofs: SaasProofGateId[];
  invalidProofs: SaasProofGateId[];
}

const CONTEXT_REQUIREMENTS: Array<{
  key: keyof Pick<
    SaasDecisionContext,
    | "commercialEvidence"
    | "stage"
    | "dataRisk"
    | "tenancy"
    | "payment"
    | "integration"
    | "outageImpact"
    | "teamCapability"
  >;
  label: string;
}> = [
  { key: "commercialEvidence", label: "preuve commerciale" },
  { key: "stage", label: "étape visée" },
  { key: "dataRisk", label: "nature des données" },
  { key: "tenancy", label: "comptes et organisations" },
  { key: "payment", label: "paiement" },
  { key: "integration", label: "intégrations" },
  { key: "outageImpact", label: "impact d’une panne" },
  { key: "teamCapability", label: "compétences disponibles" },
];

function currentUtcDate(): string {
  return new Date().toISOString().slice(0, 10);
}

function parseIsoDay(value: string): number | null {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return null;
  }

  const timestamp = Date.parse(`${value}T00:00:00Z`);
  if (
    Number.isNaN(timestamp) ||
    new Date(timestamp).toISOString().slice(0, 10) !== value
  ) {
    return null;
  }

  return timestamp;
}

export function createEmptySaasDecisionContext(): SaasDecisionContext {
  return {
    decisionDate: "",
    need: "",
    firstBuyer: "",
    commercialEvidence: "unknown",
    stage: "unknown",
    dataRisk: "unknown",
    tenancy: "unknown",
    payment: "unknown",
    integration: "unknown",
    outageImpact: "unknown",
    teamCapability: "unknown",
  };
}

function createEmptyScope(): Record<SaasScopeId, SaasScopeEvidence> {
  return Object.fromEntries(
    SAAS_SCOPE_ITEMS.map((item) => [
      item.id,
      { status: "unknown", note: "" },
    ]),
  ) as Record<SaasScopeId, SaasScopeEvidence>;
}

function createEmptyProofs(): Record<SaasProofGateId, SaasProofEvidence> {
  return Object.fromEntries(
    SAAS_PROOF_GATES.map((gate) => [
      gate.id,
      {
        status: "unverified",
        testedAt: "",
        environment: "",
        owner: "",
        independentReviewer: "",
        evidenceReference: "",
        notes: "",
      },
    ]),
  ) as Record<SaasProofGateId, SaasProofEvidence>;
}

export function createEmptySaasTco(): SaasTcoInput {
  return Object.fromEntries(
    SAAS_TCO_FIELDS.map((field) => [field.id, undefined]),
  ) as SaasTcoInput;
}

export function createEmptySaasCandidate(name: string): SaasCandidate {
  return {
    name,
    route: "",
    proposalReference: "",
    scope: createEmptyScope(),
    proofs: createEmptyProofs(),
    tco: createEmptySaasTco(),
  };
}

export function createEmptySaasDecisionDossier(): SaasDecisionDossier {
  return {
    context: createEmptySaasDecisionContext(),
    candidates: [
      createEmptySaasCandidate("Option A"),
      createEmptySaasCandidate("Option B"),
    ],
  };
}

export type SaasDossierImportResult =
  | { ok: true; dossier: SaasDecisionDossier }
  | { ok: false; error: string };

const COMMERCIAL_EVIDENCE_VALUES: SaasCommercialEvidence[] = [
  "unknown",
  "none",
  "interviews",
  "written-commitment",
  "paid",
];
const STAGE_VALUES: SaasStage[] = [
  "unknown",
  "demo",
  "internal-pilot",
  "paid-pilot",
  "production",
];
const DATA_RISK_VALUES: SaasDataRisk[] = [
  "unknown",
  "fictitious",
  "personal",
  "sensitive",
];
const TENANCY_VALUES: SaasTenancy[] = [
  "unknown",
  "no-account",
  "single-organization",
  "multi-tenant",
];
const PAYMENT_VALUES: SaasPayment[] = [
  "unknown",
  "none",
  "sandbox",
  "live",
];
const INTEGRATION_VALUES: SaasIntegration[] = [
  "unknown",
  "none",
  "non-critical",
  "critical",
];
const OUTAGE_IMPACT_VALUES: SaasOutageImpact[] = [
  "unknown",
  "low",
  "work-delayed",
  "contractual",
];
const TEAM_CAPABILITY_VALUES: SaasTeamCapability[] = [
  "unknown",
  "non-technical",
  "frontend",
  "full-stack",
  "product-operations",
];
const SCOPE_STATUS_VALUES: SaasScopeStatus[] = [
  "unknown",
  "included",
  "excluded",
  "not-applicable",
];
const PROOF_STATUS_VALUES: SaasProofStatus[] = [
  "unverified",
  "pass",
  "fail",
  "not-applicable",
];

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function readBoundedString(
  source: Record<string, unknown>,
  key: string,
  maximumLength = SAAS_DOSSIER_MAX_TEXT_LENGTH,
): string | null {
  const value = source[key];
  return typeof value === "string" && value.length <= maximumLength
    ? value
    : null;
}

function readEnumValue<T extends string>(
  source: Record<string, unknown>,
  key: string,
  allowed: readonly T[],
): T | null {
  const value = source[key];
  return typeof value === "string" && allowed.includes(value as T)
    ? (value as T)
    : null;
}

export function serializeSaasDecisionDossier(
  dossier: SaasDecisionDossier,
  evaluationDate = currentUtcDate(),
): string {
  for (const candidate of dossier.candidates) {
    for (const field of SAAS_TCO_FIELDS) {
      const value = candidate.tco[field.id];
      if (
        value !== undefined &&
        (!Number.isFinite(value) ||
          value < 0 ||
          value > SAAS_TCO_MAX_INPUT)
      ) {
        throw new Error(
          `Export impossible : le poste de coût « ${field.label} » est invalide.`,
        );
      }
    }
  }

  const serialized = JSON.stringify(
    {
      schemaVersion: SAAS_BUILD_DECISION_VERSION,
      exportedAt: evaluationDate,
      dossier: {
        context: { ...dossier.context },
        candidates: dossier.candidates.map((candidate) => ({
          name: candidate.name,
          route: candidate.route,
          proposalReference: candidate.proposalReference,
          scope: Object.fromEntries(
            SAAS_SCOPE_ITEMS.map((item) => [
              item.id,
              { ...candidate.scope[item.id] },
            ]),
          ),
          proofs: Object.fromEntries(
            SAAS_PROOF_GATES.map((gate) => [
              gate.id,
              { ...candidate.proofs[gate.id] },
            ]),
          ),
          tco: Object.fromEntries(
            SAAS_TCO_FIELDS.map((field) => [
              field.id,
              candidate.tco[field.id] ?? null,
            ]),
          ),
        })),
      },
    },
    null,
    2,
  );

  const validation = parseSaasDecisionDossierJson(serialized);
  if (!validation.ok) {
    throw new Error(`Export impossible : ${validation.error}`);
  }

  return serialized;
}

export function parseSaasDecisionDossierJson(
  raw: string,
): SaasDossierImportResult {
  if (
    new TextEncoder().encode(raw).byteLength >
    SAAS_DOSSIER_MAX_JSON_BYTES
  ) {
    return {
      ok: false,
      error: "Le fichier dépasse la limite locale de 512 Ko.",
    };
  }

  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    return { ok: false, error: "Le fichier ne contient pas un JSON valide." };
  }

  if (!isRecord(parsed)) {
    return { ok: false, error: "La racine du dossier est invalide." };
  }
  if (parsed.schemaVersion !== SAAS_BUILD_DECISION_VERSION) {
    return {
      ok: false,
      error: "La version du dossier ne correspond pas à cet outil.",
    };
  }
  if (!isRecord(parsed.dossier)) {
    return { ok: false, error: "Le contenu du dossier est absent." };
  }

  const rawContext = parsed.dossier.context;
  const rawCandidates = parsed.dossier.candidates;
  if (!isRecord(rawContext) || !Array.isArray(rawCandidates)) {
    return { ok: false, error: "Le contexte ou les options sont invalides." };
  }
  if (rawCandidates.length !== 2) {
    return {
      ok: false,
      error: "Le dossier doit contenir exactement deux options.",
    };
  }

  const decisionDate = readBoundedString(rawContext, "decisionDate", 10);
  const need = readBoundedString(rawContext, "need");
  const firstBuyer = readBoundedString(rawContext, "firstBuyer");
  const commercialEvidence = readEnumValue(
    rawContext,
    "commercialEvidence",
    COMMERCIAL_EVIDENCE_VALUES,
  );
  const stage = readEnumValue(rawContext, "stage", STAGE_VALUES);
  const dataRisk = readEnumValue(rawContext, "dataRisk", DATA_RISK_VALUES);
  const tenancy = readEnumValue(rawContext, "tenancy", TENANCY_VALUES);
  const payment = readEnumValue(rawContext, "payment", PAYMENT_VALUES);
  const integration = readEnumValue(
    rawContext,
    "integration",
    INTEGRATION_VALUES,
  );
  const outageImpact = readEnumValue(
    rawContext,
    "outageImpact",
    OUTAGE_IMPACT_VALUES,
  );
  const teamCapability = readEnumValue(
    rawContext,
    "teamCapability",
    TEAM_CAPABILITY_VALUES,
  );

  if (
    decisionDate === null ||
    need === null ||
    firstBuyer === null ||
    commercialEvidence === null ||
    stage === null ||
    dataRisk === null ||
    tenancy === null ||
    payment === null ||
    integration === null ||
    outageImpact === null ||
    teamCapability === null
  ) {
    return { ok: false, error: "Le contexte contient une valeur invalide." };
  }

  const candidates: SaasCandidate[] = [];
  for (const [candidateIndex, rawCandidate] of rawCandidates.entries()) {
    if (!isRecord(rawCandidate)) {
      return {
        ok: false,
        error: `L’option ${candidateIndex + 1} est invalide.`,
      };
    }

    const name = readBoundedString(rawCandidate, "name");
    const route = readBoundedString(rawCandidate, "route");
    const proposalReference = readBoundedString(
      rawCandidate,
      "proposalReference",
    );
    if (
      name === null ||
      route === null ||
      proposalReference === null ||
      !isRecord(rawCandidate.scope) ||
      !isRecord(rawCandidate.proofs) ||
      !isRecord(rawCandidate.tco)
    ) {
      return {
        ok: false,
        error: `L’option ${candidateIndex + 1} est incomplète.`,
      };
    }

    const scope = {} as Record<SaasScopeId, SaasScopeEvidence>;
    for (const item of SAAS_SCOPE_ITEMS) {
      const rawEvidence = rawCandidate.scope[item.id];
      if (!isRecord(rawEvidence)) {
        return {
          ok: false,
          error: `Le livrable « ${item.label} » est absent.`,
        };
      }
      const status = readEnumValue(
        rawEvidence,
        "status",
        SCOPE_STATUS_VALUES,
      );
      const note = readBoundedString(rawEvidence, "note");
      if (status === null || note === null) {
        return {
          ok: false,
          error: `Le livrable « ${item.label} » est invalide.`,
        };
      }
      scope[item.id] = { status, note };
    }

    const proofs = {} as Record<SaasProofGateId, SaasProofEvidence>;
    for (const gate of SAAS_PROOF_GATES) {
      const rawEvidence = rawCandidate.proofs[gate.id];
      if (!isRecord(rawEvidence)) {
        return {
          ok: false,
          error: `La preuve « ${gate.label} » est absente.`,
        };
      }
      const status = readEnumValue(
        rawEvidence,
        "status",
        PROOF_STATUS_VALUES,
      );
      const testedAt = readBoundedString(rawEvidence, "testedAt", 10);
      const environment = readBoundedString(rawEvidence, "environment");
      const owner = readBoundedString(rawEvidence, "owner");
      const independentReviewer = readBoundedString(
        rawEvidence,
        "independentReviewer",
      );
      const evidenceReference = readBoundedString(
        rawEvidence,
        "evidenceReference",
      );
      const notes = readBoundedString(rawEvidence, "notes");
      if (
        status === null ||
        testedAt === null ||
        environment === null ||
        owner === null ||
        independentReviewer === null ||
        evidenceReference === null ||
        notes === null
      ) {
        return {
          ok: false,
          error: `La preuve « ${gate.label} » est invalide.`,
        };
      }
      proofs[gate.id] = {
        status,
        testedAt,
        environment,
        owner,
        independentReviewer,
        evidenceReference,
        notes,
      };
    }

    const tco = {} as SaasTcoInput;
    for (const field of SAAS_TCO_FIELDS) {
      const value = rawCandidate.tco[field.id];
      if (value === null || value === undefined) {
        tco[field.id] = undefined;
      } else if (
        typeof value === "number" &&
        Number.isFinite(value) &&
        value >= 0 &&
        value <= SAAS_TCO_MAX_INPUT
      ) {
        tco[field.id] = value;
      } else {
        return {
          ok: false,
          error: `Le poste de coût « ${field.label} » est invalide.`,
        };
      }
    }

    candidates.push({
      name,
      route,
      proposalReference,
      scope,
      proofs,
      tco,
    });
  }

  return {
    ok: true,
    dossier: {
      context: {
        decisionDate,
        need,
        firstBuyer,
        commercialEvidence,
        stage,
        dataRisk,
        tenancy,
        payment,
        integration,
        outageImpact,
        teamCapability,
      },
      candidates: candidates as [SaasCandidate, SaasCandidate],
    },
  };
}

export function recommendMinimumSaasRoute(
  context: SaasDecisionContext,
  evaluationDate = currentUtcDate(),
): SaasRouteRecommendation {
  const missing = CONTEXT_REQUIREMENTS.filter(
    ({ key }) => context[key] === "unknown",
  ).map(({ label }) => label);

  const decisionTimestamp = parseIsoDay(context.decisionDate);
  const evaluationTimestamp = parseIsoDay(evaluationDate);
  if (!context.decisionDate) {
    missing.push("date de décision");
  } else if (decisionTimestamp === null) {
    missing.push("date de décision valide");
  } else if (
    evaluationTimestamp === null ||
    decisionTimestamp > evaluationTimestamp
  ) {
    missing.push("date de décision non future");
  }
  if (!context.need.trim()) {
    missing.push("besoin à démontrer");
  }
  if (!context.firstBuyer.trim()) {
    missing.push("premier acheteur ou utilisateur");
  }

  if (missing.length > 0) {
    return {
      route: "incomplete",
      title: "Diagnostic incomplet",
      reasons: [
        "Une inconnue reste une inconnue : elle ne vaut ni absence de risque ni feu vert.",
      ],
      missing,
    };
  }

  if (context.commercialEvidence === "none") {
    return {
      route: "pause",
      title: "Ne construisez pas encore",
      reasons: [
        "Aucun entretien, engagement écrit ou paiement ne confirme encore le besoin.",
        "Un prototype peut illustrer une discussion, mais il ne doit pas devenir un investissement de production.",
      ],
      missing: [],
    };
  }

  const responsibleReasons: string[] = [];
  if (context.stage === "production") {
    responsibleReasons.push("la prochaine version doit être exploitée en production");
  }
  if (context.dataRisk === "sensitive") {
    responsibleReasons.push("des données sensibles sont prévues");
  }
  if (context.payment === "live") {
    responsibleReasons.push("des paiements réels sont prévus");
  }
  if (context.integration === "critical") {
    responsibleReasons.push("une intégration critique conditionne le service");
  }
  if (context.outageImpact === "contractual") {
    responsibleReasons.push("une panne engage une obligation ou l’activité du client");
  }

  if (responsibleReasons.length > 0) {
    return {
      route: "responsible-build",
      title: "Construction avec responsabilité technique nommée",
      reasons: responsibleReasons.concat(
        context.teamCapability === "product-operations"
          ? "Cette responsabilité peut être portée en interne si les preuves et le relais sont réels."
          : "Une équipe accompagnante ou interne doit couvrir conception, revue, mise en production et exploitation.",
      ),
      missing: [],
    };
  }

  const reviewedReasons: string[] = [];
  if (context.stage === "paid-pilot") {
    reviewedReasons.push("un client paiera le pilote");
  }
  if (context.stage === "internal-pilot") {
    reviewedReasons.push("des utilisateurs dépendront déjà du pilote");
  }
  if (context.dataRisk === "personal") {
    reviewedReasons.push("des données personnelles seront traitées");
  }
  if (context.tenancy === "multi-tenant") {
    reviewedReasons.push("plusieurs organisations doivent rester isolées");
  }
  if (context.payment === "sandbox") {
    reviewedReasons.push("le parcours de paiement doit être testé");
  }
  if (context.integration === "non-critical") {
    reviewedReasons.push("une intégration externe est nécessaire");
  }
  if (context.outageImpact === "work-delayed") {
    reviewedReasons.push("une panne retarderait un travail réel");
  }

  if (reviewedReasons.length > 0) {
    return {
      route: "reviewed-pilot",
      title: "Prototype ou pilote avec revue indépendante",
      reasons: reviewedReasons.concat(
        "La revue doit pouvoir bloquer la mise à disposition et demander une stabilisation.",
      ),
      missing: [],
    };
  }

  return {
    route: "solo-prototype",
    title: "Prototype autonome, fictif et jetable",
    reasons: [
      "Le prochain test reste une démonstration à faible conséquence.",
      "Gardez les données fictives, fixez une limite de temps et acceptez de jeter la base produite.",
    ],
    missing: [],
  };
}

function isKnownNonNegative(value: number | undefined): value is number {
  return (
    value !== undefined &&
    Number.isFinite(value) &&
    value >= 0 &&
    value <= SAAS_TCO_MAX_INPUT
  );
}

export function calculateSaasTco(
  input: SaasTcoInput,
  horizonMonths: SaasTcoHorizon,
): SaasTcoResult {
  const missing = SAAS_TCO_FIELDS.filter(
    (field) => !isKnownNonNegative(input[field.id]),
  ).map((field) => field.id);

  if (missing.length > 0) {
    return { kind: "unknown", horizonMonths, missing };
  }

  const years = horizonMonths / 12;
  const initial =
    input.initialSubscriptions! +
    input.internalInitialDays! * input.internalDayCost! +
    (input.externalInitialDays! + input.reviewDays!) *
      input.externalDayRate!;
  const recurring =
    horizonMonths *
      (input.servicesMonthly! +
        input.internalRunDaysMonthly! * input.internalDayCost! +
        input.technicalRunDaysMonthly! * input.externalDayRate!) +
    years * input.annualExercises!;
  const exit = input.exitDays! * input.externalDayRate!;
  const total = initial + recurring + exit;

  return {
    kind: "known",
    horizonMonths,
    initial,
    recurring,
    exit,
    total,
    averageMonthly: total / horizonMonths,
  };
}

export function calculateSaasTcoSeries(
  input: SaasTcoInput,
): SaasTcoResult[] {
  return SAAS_TCO_HORIZONS.map((horizon) =>
    calculateSaasTco(input, horizon),
  );
}

function scopeNotApplicableAllowed(
  context: SaasDecisionContext,
  scopeId: SaasScopeId,
): boolean {
  if (scopeId === "tenant-isolation") {
    return context.tenancy !== "multi-tenant";
  }
  if (scopeId === "domain-email-payment") {
    return context.payment === "none" && context.stage === "demo";
  }
  if (scopeId === "auth-roles") {
    return context.tenancy === "no-account" && context.stage === "demo";
  }
  if (
    [
      "data-migrations-files",
      "observability-support",
      "backup-restore",
    ].includes(scopeId)
  ) {
    return context.stage === "demo" && context.dataRisk === "fictitious";
  }
  if (scopeId === "documentation") {
    return context.stage === "demo";
  }
  return false;
}

function proofNotApplicableAllowed(
  context: SaasDecisionContext,
  gateId: SaasProofGateId,
): boolean {
  if (gateId === "tenant-attacks") {
    return context.tenancy !== "multi-tenant";
  }
  if (gateId === "payment-email") {
    return context.payment === "none";
  }
  if (
    ["data-export-restore", "identity-exit", "code-data-rollback"].includes(
      gateId,
    )
  ) {
    return context.stage === "demo" && context.dataRisk === "fictitious";
  }
  return false;
}

function proofValidationIssues(
  evidence: SaasProofEvidence,
  decisionDate: string,
  evaluationDate: string,
): string[] {
  if (evidence.status === "not-applicable") {
    return evidence.notes.trim().length >= 8
      ? []
      : ["justification N/A insuffisante"];
  }
  if (evidence.status !== "pass") {
    return [];
  }

  const issues: string[] = [];
  if (!evidence.testedAt) {
    issues.push("date du test manquante");
  }
  if (!evidence.environment.trim()) {
    issues.push("environnement ou version manquant");
  }
  if (!evidence.owner.trim()) {
    issues.push("responsable manquant");
  }
  if (!evidence.independentReviewer.trim()) {
    issues.push("relecteur indépendant manquant");
  }
  if (evidence.evidenceReference.trim().length < 3) {
    issues.push("référence de preuve insuffisante");
  }

  const testedTimestamp = parseIsoDay(evidence.testedAt);
  const decisionTimestamp = parseIsoDay(decisionDate);
  const evaluationTimestamp = parseIsoDay(evaluationDate);
  if (evidence.testedAt && testedTimestamp === null) {
    issues.push("date du test invalide");
  }
  if (testedTimestamp !== null) {
    if (
      decisionTimestamp !== null &&
      testedTimestamp > decisionTimestamp
    ) {
      issues.push("test postérieur à la décision");
    }
    if (
      evaluationTimestamp === null ||
      testedTimestamp > evaluationTimestamp
    ) {
      issues.push("test daté dans le futur");
    }
  }

  if (
    evidence.owner.trim() &&
    evidence.independentReviewer.trim() &&
    evidence.owner.trim().toLocaleLowerCase("fr") !==
      evidence.independentReviewer.trim().toLocaleLowerCase("fr")
  ) {
    // Deux personnes distinctes : aucune anomalie à ajouter.
  } else if (
    evidence.owner.trim() &&
    evidence.independentReviewer.trim()
  ) {
    issues.push("responsable et relecteur identiques");
  }

  return issues;
}

function isValidProof(
  evidence: SaasProofEvidence,
  decisionDate: string,
  evaluationDate: string,
): boolean {
  return proofValidationIssues(
    evidence,
    decisionDate,
    evaluationDate,
  ).length === 0;
}

export function qualifySaasCandidate(
  context: SaasDecisionContext,
  candidate: SaasCandidate,
  evaluationDate = currentUtcDate(),
): SaasCandidateQualification {
  const recommendation = recommendMinimumSaasRoute(
    context,
    evaluationDate,
  );
  const contextGaps = [...recommendation.missing];
  if (recommendation.route === "pause") {
    contextGaps.push("preuve commerciale suffisante avant construction");
  }

  const candidateGaps: string[] = [];
  if (candidate.name.trim().length < 2) {
    candidateGaps.push("nom de l’option");
  }
  if (candidate.route.trim().length < 3) {
    candidateGaps.push("outil, plan et version");
  }
  if (candidate.proposalReference.trim().length < 3) {
    candidateGaps.push("devis, date ou snapshot");
  }

  const scopeGaps: SaasScopeId[] = [];
  const invalidScopeEvidence: SaasScopeId[] = [];
  const prohibitedNotApplicable: Array<SaasScopeId | SaasProofGateId> = [];

  for (const item of SAAS_SCOPE_ITEMS) {
    const evidence = candidate.scope[item.id];
    if (
      evidence.status === "unknown" ||
      (item.critical && evidence.status === "excluded")
    ) {
      scopeGaps.push(item.id);
    }
    if (
      evidence.status !== "unknown" &&
      evidence.note.trim().length < 8
    ) {
      invalidScopeEvidence.push(item.id);
    }
    if (
      evidence.status === "not-applicable" &&
      (!scopeNotApplicableAllowed(context, item.id) ||
        evidence.note.trim().length < 8)
    ) {
      prohibitedNotApplicable.push(item.id);
    }
  }

  const failedProofs: SaasProofGateId[] = [];
  const unverifiedProofs: SaasProofGateId[] = [];
  const invalidProofs: SaasProofGateId[] = [];

  for (const gate of SAAS_PROOF_GATES) {
    const evidence = candidate.proofs[gate.id];
    if (evidence.status === "fail") {
      failedProofs.push(gate.id);
    }
    if (evidence.status === "unverified") {
      unverifiedProofs.push(gate.id);
    }
    if (
      evidence.status === "not-applicable" &&
      !proofNotApplicableAllowed(context, gate.id)
    ) {
      prohibitedNotApplicable.push(gate.id);
    }
    if (
      !isValidProof(
        evidence,
        context.decisionDate,
        evaluationDate,
      )
    ) {
      invalidProofs.push(gate.id);
    }
  }

  const isBlocked =
    failedProofs.length > 0 ||
    prohibitedNotApplicable.length > 0 ||
    invalidProofs.length > 0;
  const isUnqualified =
    contextGaps.length > 0 ||
    candidateGaps.length > 0 ||
    scopeGaps.length > 0 ||
    invalidScopeEvidence.length > 0 ||
    unverifiedProofs.length > 0;

  return {
    status: isBlocked
      ? "blocked"
      : isUnqualified
        ? "unqualified"
        : "qualified",
    contextGaps,
    candidateGaps,
    scopeGaps,
    invalidScopeEvidence,
    prohibitedNotApplicable,
    failedProofs,
    unverifiedProofs,
    invalidProofs,
  };
}

export function isSaasCandidateEconomicallyComparable(
  context: SaasDecisionContext,
  candidate: SaasCandidate,
  evaluationDate = currentUtcDate(),
): boolean {
  const qualification = qualifySaasCandidate(
    context,
    candidate,
    evaluationDate,
  );
  return (
    qualification.status === "qualified" &&
    calculateSaasTcoSeries(candidate.tco).every(
      (result) => result.kind === "known",
    )
  );
}

function formatNumber(value: number): string {
  return Math.round(value).toLocaleString("fr-FR");
}

const SCOPE_STATUS_LABELS: Record<SaasScopeStatus, string> = {
  unknown: "ND",
  included: "Inclus",
  excluded: "Exclu",
  "not-applicable": "N/A justifié",
};

const PROOF_STATUS_LABELS: Record<SaasProofStatus, string> = {
  unverified: "Non vérifié",
  pass: "Réussi",
  fail: "Échec",
  "not-applicable": "N/A justifié",
};

const COMMERCIAL_EVIDENCE_LABELS: Record<SaasCommercialEvidence, string> = {
  unknown: "ND",
  none: "Aucune preuve probante",
  interviews: "Entretiens et problème confirmé",
  "written-commitment": "Engagement écrit ou lettre d’intention",
  paid: "Paiement ou commande",
};

const STAGE_LABELS: Record<SaasStage, string> = {
  unknown: "ND",
  demo: "Démonstration jetable",
  "internal-pilot": "Pilote interne",
  "paid-pilot": "Pilote client payé",
  production: "Production exploitée",
};

const DATA_RISK_LABELS: Record<SaasDataRisk, string> = {
  unknown: "ND",
  fictitious: "Uniquement fictives",
  personal: "Personnelles ou confidentielles",
  sensitive: "Sensibles ou fortement réglementées",
};

const TENANCY_LABELS: Record<SaasTenancy, string> = {
  unknown: "ND",
  "no-account": "Aucun compte",
  "single-organization": "Une seule organisation",
  "multi-tenant": "Plusieurs organisations isolées",
};

const PAYMENT_LABELS: Record<SaasPayment, string> = {
  unknown: "ND",
  none: "Aucun paiement",
  sandbox: "Paiement en bac à sable",
  live: "Paiement réel",
};

const INTEGRATION_LABELS: Record<SaasIntegration, string> = {
  unknown: "ND",
  none: "Aucune",
  "non-critical": "Présente mais non critique",
  critical: "Critique pour le service",
};

const OUTAGE_IMPACT_LABELS: Record<SaasOutageImpact, string> = {
  unknown: "ND",
  low: "Faible, démonstration reportable",
  "work-delayed": "Travail réel retardé",
  contractual: "Engagement ou activité bloquée",
};

const TEAM_CAPABILITY_LABELS: Record<SaasTeamCapability, string> = {
  unknown: "ND",
  "non-technical": "Aucune compétence technique",
  frontend: "Interface et intégration légère",
  "full-stack": "Développement full-stack",
  "product-operations": "Produit, sécurité et exploitation",
};

const QUALIFICATION_LABELS: Record<
  SaasCandidateQualification["status"],
  string
> = {
  blocked: "Bloquée",
  unqualified: "Non qualifiée",
  qualified: "Qualifiée pour comparaison",
};

function formatRawTcoValue(
  value: number | undefined,
  unit: string,
): string {
  if (!isKnownNonNegative(value)) {
    return "ND";
  }
  return `${value.toLocaleString("fr-FR", {
    maximumFractionDigits: 2,
  })} ${unit}`;
}

export function buildSaasDecisionReport(
  context: SaasDecisionContext,
  candidates: [SaasCandidate, SaasCandidate],
  evaluationDate = currentUtcDate(),
): string {
  const recommendation = recommendMinimumSaasRoute(
    context,
    evaluationDate,
  );
  const lines = [
    "DOSSIER COMPARATIF — BUILDER IA OU ACCOMPAGNEMENT",
    `Version : ${SAAS_BUILD_DECISION_VERSION}`,
    `Référentiel produits consulté : ${SAAS_BUILD_SOURCE_DATE}`,
    `Dossier contrôlé au : ${evaluationDate}`,
    `Date de décision : ${context.decisionDate || "ND"}`,
    "",
    "CONTEXTE",
    `Besoin : ${context.need || "ND"}`,
    `Premier acheteur ou utilisateur : ${context.firstBuyer || "ND"}`,
    `Preuve commerciale : ${COMMERCIAL_EVIDENCE_LABELS[context.commercialEvidence]}`,
    `Étape : ${STAGE_LABELS[context.stage]}`,
    `Données : ${DATA_RISK_LABELS[context.dataRisk]}`,
    `Organisations : ${TENANCY_LABELS[context.tenancy]}`,
    `Paiement : ${PAYMENT_LABELS[context.payment]}`,
    `Intégrations : ${INTEGRATION_LABELS[context.integration]}`,
    `Impact d’une panne : ${OUTAGE_IMPACT_LABELS[context.outageImpact]}`,
    `Compétences : ${TEAM_CAPABILITY_LABELS[context.teamCapability]}`,
    "",
    `SEUIL MINIMAL : ${recommendation.title}`,
    ...recommendation.reasons.map((reason) => `- ${reason}`),
    ...recommendation.missing.map((item) => `- À renseigner : ${item}`),
  ];

  for (const candidate of candidates) {
    const qualification = qualifySaasCandidate(
      context,
      candidate,
      evaluationDate,
    );
    const tcoSeries = calculateSaasTcoSeries(candidate.tco);
    const qualificationReasons = [
      ...(qualification.contextGaps.length
        ? [
            `- Contexte à compléter (${qualification.contextGaps.length}) : ${qualification.contextGaps.join(
              ", ",
            )}`,
          ]
        : []),
      ...(qualification.candidateGaps.length
        ? [
            `- Option à documenter (${qualification.candidateGaps.length}) : ${qualification.candidateGaps.join(
              ", ",
            )}`,
          ]
        : []),
      ...qualification.invalidScopeEvidence.map((scopeId) => {
        const item = SAAS_SCOPE_ITEMS.find(
          (scopeItem) => scopeItem.id === scopeId,
        );
        return `- Livrable sans référence exploitable : ${item?.label ?? scopeId}`;
      }),
      ...qualification.prohibitedNotApplicable.map((id) => {
        const label =
          SAAS_SCOPE_ITEMS.find((item) => item.id === id)?.label ??
          SAAS_PROOF_GATES.find((gate) => gate.id === id)?.label ??
          id;
        return `- N/A incompatible : ${label}`;
      }),
      ...qualification.failedProofs.map((proofId) => {
        const gate = SAAS_PROOF_GATES.find(
          (proofGate) => proofGate.id === proofId,
        );
        return `- Preuve en échec : ${gate?.label ?? proofId}`;
      }),
      ...qualification.invalidProofs.map((proofId) => {
        const gate = SAAS_PROOF_GATES.find(
          (proofGate) => proofGate.id === proofId,
        );
        const issues = proofValidationIssues(
          candidate.proofs[proofId],
          context.decisionDate,
          evaluationDate,
        );
        return `- Preuve invalide : ${gate?.label ?? proofId} — ${issues.join(
          " ; ",
        )}`;
      }),
    ];
    lines.push(
      "",
      `OPTION — ${candidate.name || "Sans nom"}`,
      `Voie et version : ${candidate.route || "ND"}`,
      `Devis ou snapshot : ${candidate.proposalReference || "ND"}`,
      `Qualification : ${QUALIFICATION_LABELS[qualification.status]}`,
      ...(qualificationReasons.length
        ? ["Motifs de qualification", ...qualificationReasons]
        : ["Motifs de qualification : aucun blocage documentaire détecté"]),
      "",
      "Périmètre",
      ...SAAS_SCOPE_ITEMS.map((item) => {
        const evidence = candidate.scope[item.id];
        return `- ${item.label} : ${SCOPE_STATUS_LABELS[evidence.status]}${
          evidence.note ? ` — ${evidence.note}` : ""
        }`;
      }),
      "",
      "Preuves",
      ...SAAS_PROOF_GATES.map((gate) => {
        const evidence = candidate.proofs[gate.id];
        const validationIssues = proofValidationIssues(
          evidence,
          context.decisionDate,
          evaluationDate,
        );
        const details = [
          evidence.testedAt,
          evidence.environment,
          evidence.owner ? `resp. ${evidence.owner}` : "",
          evidence.independentReviewer
            ? `relecture ${evidence.independentReviewer}`
            : "",
          evidence.evidenceReference,
          evidence.notes,
          validationIssues.length
            ? `INVALIDE : ${validationIssues.join(" ; ")}`
            : "",
        ].filter(Boolean);
        return `- ${gate.label} : ${PROOF_STATUS_LABELS[evidence.status]}${
          details.length ? ` — ${details.join(" · ")}` : ""
        }`;
      }),
      "",
      "Hypothèses brutes du coût économique",
      ...SAAS_TCO_FIELDS.map(
        (field) =>
          `- ${field.label} : ${formatRawTcoValue(
            candidate.tco[field.id],
            field.unit,
          )}`,
      ),
      "",
      "Coût économique estimé",
      ...tcoSeries.map((result) => {
        if (qualification.status !== "qualified") {
          return `- ${result.horizonMonths} mois : ND (périmètre ou preuves non qualifiés)`;
        }
        return result.kind === "unknown"
          ? `- ${result.horizonMonths} mois : ND (${result.missing.length} poste(s) manquant(s))`
          : `- ${result.horizonMonths} mois : ${formatNumber(result.total)} € (construction ${formatNumber(result.initial)} €, exploitation ${formatNumber(result.recurring)} €, sortie ${formatNumber(result.exit)} €)`;
      }),
    );
  }

  lines.push(
    "",
    "RÈGLES DE LECTURE",
    "- Une inconnue reste ND ; elle ne vaut jamais zéro.",
    "- Un échec critique bloque l’option, même si son coût apparent est inférieur.",
    "- Un dépôt, un ZIP, un scanner vert ou une certification de plateforme ne prouvent pas seuls la reprise ni la sécurité de l’application.",
    "- Les agrégats mélangent dépenses externes et coût du temps interne : ils sont affichés en €, jamais en € HT.",
    "- Ce dossier n’est ni un benchmark exécuté par Hagnéré Code ni une validation juridique ou de sécurité.",
  );

  return lines.join("\n");
}

export function createFictitiousSaasDecisionDossier(): SaasDecisionDossier {
  const context: SaasDecisionContext = {
    decisionDate: "2026-07-27",
    need:
      "Vérifier qu’un responsable comprend et clôture un audit sans tableur.",
    firstBuyer:
      "Deux cabinets fictifs ont accepté un entretien ; aucun engagement écrit.",
    commercialEvidence: "interviews",
    stage: "demo",
    dataRisk: "fictitious",
    tenancy: "multi-tenant",
    payment: "none",
    integration: "none",
    outageImpact: "low",
    teamCapability: "frontend",
  };

  const optionA = createEmptySaasCandidate("Builder + revue");
  optionA.route = "Prototype fictif avec revue indépendante";
  optionA.proposalReference = "Hypothèses fictives à remplacer";
  optionA.tco = {
    initialSubscriptions: 600,
    internalInitialDays: 18,
    externalInitialDays: 4,
    reviewDays: 3,
    internalDayCost: 450,
    externalDayRate: 900,
    servicesMonthly: 180,
    internalRunDaysMonthly: 1,
    technicalRunDaysMonthly: 0.5,
    annualExercises: 1800,
    exitDays: 4,
  };

  const optionB = createEmptySaasCandidate("Équipe accompagnante");
  optionB.route = "Construction cadrée sur le même brief";
  optionB.proposalReference = "Hypothèses fictives à remplacer";
  optionB.tco = {
    initialSubscriptions: 900,
    internalInitialDays: 9,
    externalInitialDays: 22,
    reviewDays: 4,
    internalDayCost: 450,
    externalDayRate: 900,
    servicesMonthly: 260,
    internalRunDaysMonthly: 0.5,
    technicalRunDaysMonthly: 1,
    annualExercises: 2700,
    exitDays: 5,
  };

  return { context, candidates: [optionA, optionB] };
}
