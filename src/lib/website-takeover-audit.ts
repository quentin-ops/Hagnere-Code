/**
 * Moteur local et déterministe d’audit avant reprise d’un site.
 *
 * Les règles sont volontairement prudentes :
 * - un STOP de sécurité, d’autorité ou de réversibilité prime tout ;
 * - une déclaration n’est jamais convertie en preuve vérifiée ;
 * - une zone applicable inconnue interdit un GO ;
 * - une absence de donnée monétaire reste ND, jamais zéro.
 */

export const WEBSITE_TAKEOVER_AUDIT_VERSION =
  "website-takeover-audit-r4-2026-07-27";
export const WEBSITE_TAKEOVER_AUDIT_SOURCE_DATE = "2026-07-27";

export const WEBSITE_TAKEOVER_ZONE_IDS = [
  "ownership_authorization",
  "domain_dns_tls_cdn",
  "infrastructure_iac_environments",
  "code_history_build",
  "cicd_artifact_rollback",
  "identities_secrets",
  "dependencies_sbom_licenses_eol",
  "data_migrations",
  "backups_restore_rpo_rto",
  "integrations_critical_journeys",
  "logs_metrics_alerts",
  "security_auth_incident",
  "performance_capacity",
  "seo_analytics",
  "accessibility",
  "privacy_processors_transfers_retention",
  "documentation_support",
  "reversibility_exit",
] as const;

export type WebsiteTakeoverZoneId = (typeof WEBSITE_TAKEOVER_ZONE_IDS)[number];

export type WebsiteTakeoverSeverity = "P0" | "P1" | "P2";
export type WebsiteTakeoverAuditLevel = "light" | "full" | "stop";
export type WebsiteTakeoverVerdict =
  "incomplete" | "go-with-reservations" | "go" | "stop";
export type WebsiteTakeoverEvidenceStatus =
  "unknown" | "declared" | "verified" | "failed" | "NA";

export type WebsiteTakeoverProofKind =
  | "unknown"
  | "declaration-only"
  | "build-only"
  | "backup-exists-only"
  | "provider-status-only"
  | "homepage-only"
  | "sbom-only"
  | "automated-accessibility-only"
  | "lighthouse-only"
  | "search-console-ownership-only"
  | "non-applicability-evidence"
  | "authorized-control-test"
  | "domain-dns-tls-cdn-inspection"
  | "architecture-iac-environment-review"
  | "source-history-build-reproduction"
  | "deployment-artifact-rollback-test"
  | "identity-secret-rotation-test"
  | "dependency-analysis-license-review"
  | "data-migration-reconciliation"
  | "restore-recovery-objective-test"
  | "end-to-end-journey-test"
  | "telemetry-alert-test"
  | "security-auth-incident-review"
  | "field-performance-capacity-test"
  | "seo-crawl-baseline"
  | "manual-automated-accessibility-review"
  | "privacy-record-contract-review"
  | "documentation-handover-test"
  | "exit-rehearsal";

export const WEBSITE_TAKEOVER_PROOF_LABELS: Record<
  WebsiteTakeoverProofKind,
  string
> = {
  unknown: "Preuve non renseignée",
  "declaration-only": "Déclaration seule",
  "build-only": "Build réussi seul",
  "backup-exists-only": "Existence déclarée d’une sauvegarde",
  "provider-status-only": "Page d’état fournisseur seule",
  "homepage-only": "Page d’accueil seule",
  "sbom-only": "SBOM sans analyse",
  "automated-accessibility-only": "Scan automatisé d’accessibilité seul",
  "lighthouse-only": "Mesure Lighthouse isolée",
  "search-console-ownership-only": "Propriété Search Console seule",
  "non-applicability-evidence":
    "Non-applicabilité démontrée par un contrôle daté",
  "authorized-control-test": "Contrôle et autorisation vérifiés",
  "domain-dns-tls-cdn-inspection": "Inspection domaine, DNS, TLS et CDN",
  "architecture-iac-environment-review":
    "Revue d’architecture, d’IaC et des environnements",
  "source-history-build-reproduction":
    "Source, historique, build et droits utiles vérifiés",
  "deployment-artifact-rollback-test":
    "Artefact, déploiement et retour arrière testés",
  "identity-secret-rotation-test":
    "Identités, coffre et rotation des secrets testés",
  "dependency-analysis-license-review":
    "Dépendances analysées, licences et fin de support revues",
  "data-migration-reconciliation": "Données, schéma et migrations réconciliés",
  "restore-recovery-objective-test":
    "Restauration et objectifs de reprise testés",
  "end-to-end-journey-test": "Parcours critique testé de bout en bout",
  "telemetry-alert-test": "Journaux, métriques et alerte testés",
  "security-auth-incident-review":
    "Sécurité, authentification et incidents revus",
  "field-performance-capacity-test":
    "Performance terrain, laboratoire et capacité vérifiées",
  "seo-crawl-baseline": "Crawl et référence SEO documentés",
  "manual-automated-accessibility-review":
    "Revue d’accessibilité manuelle et automatisée",
  "privacy-record-contract-review":
    "Registre, contrats et chaîne de sous-traitance revus",
  "documentation-handover-test":
    "Documentation utilisée lors d’une passation test",
  "exit-rehearsal": "Sortie et reprise par un tiers répétées",
};

export const WEBSITE_TAKEOVER_INSUFFICIENT_PROOF_KINDS = [
  "declaration-only",
  "build-only",
  "backup-exists-only",
  "provider-status-only",
  "homepage-only",
  "sbom-only",
  "automated-accessibility-only",
  "lighthouse-only",
  "search-console-ownership-only",
] as const satisfies readonly WebsiteTakeoverProofKind[];

interface WebsiteTakeoverZoneDefinition {
  label: string;
  expected: string;
  acceptedProofKind: WebsiteTakeoverProofKind;
  defaultSeverity: Exclude<WebsiteTakeoverSeverity, "P0">;
  alwaysApplicable: boolean;
}

export const WEBSITE_TAKEOVER_ZONES: Record<
  WebsiteTakeoverZoneId,
  WebsiteTakeoverZoneDefinition
> = {
  ownership_authorization: {
    label: "Propriété opérationnelle et autorisation",
    expected:
      "Une personne autorisée contrôle les comptes indispensables et peut mandater les vérifications sans présumer un droit contesté.",
    acceptedProofKind: "authorized-control-test",
    defaultSeverity: "P1",
    alwaysApplicable: true,
  },
  domain_dns_tls_cdn: {
    label: "Domaine, DNS, TLS, CDN et protection du trafic",
    expected:
      "Titulaire, registrar, NS autoritatifs, délégation, glue éventuelle, DNSSEC, DS parent, DNSKEY, certificats, CDN ou WAF, échéances, responsable du rollover et procédure de repli sont observés dans le périmètre.",
    acceptedProofKind: "domain-dns-tls-cdn-inspection",
    defaultSeverity: "P1",
    alwaysApplicable: true,
  },
  infrastructure_iac_environments: {
    label: "Infrastructure, IaC et environnements",
    expected:
      "Topologie, comptes, régions, runtimes, stockage, tâches, réseau, configuration et environnements sont reliés à une source maîtrisée.",
    acceptedProofKind: "architecture-iac-environment-review",
    defaultSeverity: "P1",
    alwaysApplicable: true,
  },
  code_history_build: {
    label: "Code, historique et construction",
    expected:
      "La source réellement déployée, son historique utile, ses instructions, un build reproductible et les droits contractuels ou de licence nécessaires pour utiliser, reproduire, modifier et maintenir le code sont identifiés.",
    acceptedProofKind: "source-history-build-reproduction",
    defaultSeverity: "P1",
    alwaysApplicable: false,
  },
  cicd_artifact_rollback: {
    label: "CI/CD, artefact, déploiement et retour arrière",
    expected:
      "La chaîne de livraison produit un artefact traçable, déploie une copie et permet un retour arrière observé.",
    acceptedProofKind: "deployment-artifact-rollback-test",
    defaultSeverity: "P1",
    alwaysApplicable: false,
  },
  identities_secrets: {
    label: "Identités, habilitations et secrets",
    expected:
      "Comptes humains et techniques, MFA, coffre, propriétaires, rotation et révocation sont vérifiés sans exporter les secrets.",
    acceptedProofKind: "identity-secret-rotation-test",
    defaultSeverity: "P1",
    alwaysApplicable: true,
  },
  dependencies_sbom_licenses_eol: {
    label: "Dépendances, SBOM, licences et fin de support",
    expected:
      "Composants directs et transitifs, vulnérabilités connues, licences, titulaires, mises à jour et fins de support sont analysés.",
    acceptedProofKind: "dependency-analysis-license-review",
    defaultSeverity: "P1",
    alwaysApplicable: false,
  },
  data_migrations: {
    label: "Données, schémas et migrations",
    expected:
      "Sources, volumes, schémas, migrations, cohérence, clés et exports sont testés sur une copie adaptée.",
    acceptedProofKind: "data-migration-reconciliation",
    defaultSeverity: "P1",
    alwaysApplicable: false,
  },
  backups_restore_rpo_rto: {
    label: "Sauvegardes, restauration, RPO et RTO",
    expected:
      "Contenu, fréquence, rétention et isolement des sauvegardes sont reliés à une restauration datée et aux objectifs réels.",
    acceptedProofKind: "restore-recovery-objective-test",
    defaultSeverity: "P1",
    alwaysApplicable: true,
  },
  integrations_critical_journeys: {
    label: "Intégrations et parcours critiques",
    expected:
      "Les parcours utilisateur et système utiles sont exécutés jusqu’au résultat final, y compris les effets différés et les tiers.",
    acceptedProofKind: "end-to-end-journey-test",
    defaultSeverity: "P1",
    alwaysApplicable: true,
  },
  logs_metrics_alerts: {
    label: "Journaux, métriques et alertes",
    expected:
      "Une télémétrie proportionnée permet d’observer un événement de test, de déclencher une alerte et d’identifier son destinataire.",
    acceptedProofKind: "telemetry-alert-test",
    defaultSeverity: "P1",
    alwaysApplicable: true,
  },
  security_auth_incident: {
    label: "Sécurité, authentification et incidents",
    expected:
      "Surface exposée, authentification, autorisations, correctifs, incidents connus et voie d’escalade sont revus sans promettre une sécurité absolue.",
    acceptedProofKind: "security-auth-incident-review",
    defaultSeverity: "P1",
    alwaysApplicable: true,
  },
  performance_capacity: {
    label: "Performance et capacité",
    expected:
      "Mesures terrain et laboratoire, parcours, volumes, budgets et limites de capacité sont datés et interprétés ensemble.",
    acceptedProofKind: "field-performance-capacity-test",
    defaultSeverity: "P2",
    alwaysApplicable: true,
  },
  seo_analytics: {
    label: "SEO, exploration, indexation et mesure",
    expected:
      "URL, statuts, robots, canonicals, sitemaps, redirections, données structurées, pages utiles et outils de mesure disposent d’une référence avant changement.",
    acceptedProofKind: "seo-crawl-baseline",
    defaultSeverity: "P2",
    alwaysApplicable: false,
  },
  accessibility: {
    label: "Accessibilité",
    expected:
      "Les parcours et composants représentatifs sont revus par tests automatiques et contrôles humains, sans confondre scan et conformité.",
    acceptedProofKind: "manual-automated-accessibility-review",
    defaultSeverity: "P2",
    alwaysApplicable: true,
  },
  privacy_processors_transfers_retention: {
    label: "RGPD, sous-traitants, transferts et rétention",
    expected:
      "Traitements, rôles, contrats, sous-traitants ultérieurs, transferts, accès, conservation, suppression et incidents sont reliés aux pratiques réelles.",
    acceptedProofKind: "privacy-record-contract-review",
    defaultSeverity: "P1",
    alwaysApplicable: false,
  },
  documentation_support: {
    label: "Documentation, exploitation et support",
    expected:
      "Architecture, runbooks, contacts, incidents, opérations courantes, astreinte et responsabilités permettent à une autre personne d’agir.",
    acceptedProofKind: "documentation-handover-test",
    defaultSeverity: "P2",
    alwaysApplicable: true,
  },
  reversibility_exit: {
    label: "Réversibilité et sortie",
    expected:
      "Comptes, code, données, configuration, documentation, révocation et assistance de sortie sont repris par un tiers sur preuve.",
    acceptedProofKind: "exit-rehearsal",
    defaultSeverity: "P1",
    alwaysApplicable: true,
  },
};

export interface WebsiteTakeoverZoneEntry {
  applicable: boolean | undefined;
  status: WebsiteTakeoverEvidenceStatus;
  blocksReprise: boolean | undefined;
  proofKind: WebsiteTakeoverProofKind;
  environment: string;
  observedOn: string;
  validUntil: string;
  owner: string;
  artifactReference: string;
  result: string;
  limitation: string;
  forbiddenAction: string;
  reopenTrigger: string;
  nextAction: string;
  dueOn: string;
  naJustification: string;
}

export interface WebsiteTakeoverStopProfile {
  authorizationConfirmed: boolean | undefined;
  activeCompromise: boolean | undefined;
  destructiveOperationPlanned: boolean | undefined;
  restoreProven: boolean | undefined;
  isolatedTestingPossible: boolean | undefined;
  blockingAuthorityOrLegalDispute: boolean | undefined;
}

export interface WebsiteTakeoverComplexityProfile {
  hasPayments: boolean | undefined;
  hasAuthentication: boolean | undefined;
  hasAnyPersonalDataProcessing: boolean | undefined;
  processesPersonalData: boolean | undefined;
  hasMutableBusinessData: boolean | undefined;
  plansMigration: boolean | undefined;
  hasCustomCode: boolean | undefined;
  hasMultipleEnvironments: boolean | undefined;
  hasCriticalIntegration: boolean | undefined;
  highSeoStake: boolean | undefined;
  hasSla: boolean | undefined;
  hasRpo: boolean | undefined;
  hasRto: boolean | undefined;
  hasStructuralUnknown: boolean | undefined;
}

export interface WebsiteTakeoverAuditContext {
  reference: string;
  siteName: string;
  evaluationDate: string;
  commonScope: string;
  stopProfile: WebsiteTakeoverStopProfile;
  complexity: WebsiteTakeoverComplexityProfile;
}

export const WEBSITE_TAKEOVER_TRAJECTORY_IDS = [
  "control",
  "stabilize",
  "progressive-migration",
  "rebuild",
] as const;

export type WebsiteTakeoverTrajectoryId =
  (typeof WEBSITE_TAKEOVER_TRAJECTORY_IDS)[number];

export const WEBSITE_TAKEOVER_TRAJECTORIES: Record<
  WebsiteTakeoverTrajectoryId,
  { label: string; purpose: string }
> = {
  control: {
    label: "Mise sous contrôle de l’existant",
    purpose:
      "Reprendre l’exploitation sans changer inutilement l’architecture, après levée des blocages.",
  },
  stabilize: {
    label: "Stabilisation ciblée",
    purpose:
      "Corriger les risques prioritaires, documenter et fiabiliser sans migration générale.",
  },
  "progressive-migration": {
    label: "Modernisation ou migration progressive",
    purpose:
      "Remplacer par étapes les composants justifiés, avec coexistence, preuves et retour arrière.",
  },
  rebuild: {
    label: "Reconstruction ou remplacement",
    purpose:
      "Reproduire le même service utile sur un nouveau socle, puis migrer données, URL et exploitation.",
  },
};

export const WEBSITE_TAKEOVER_TCO_HORIZONS = [12, 36, 60] as const;
export type WebsiteTakeoverTcoHorizon =
  (typeof WEBSITE_TAKEOVER_TCO_HORIZONS)[number];
export type WebsiteTakeoverTaxBasis = "HT" | "TTC";
export const WEBSITE_TAKEOVER_COST_CATEGORIES = [
  "transition",
  "internal-time",
  "operations",
  "licences-services",
  "continuity-migration",
  "risk-reserve",
  "exit-reversibility",
] as const;
export type WebsiteTakeoverCostCategory =
  (typeof WEBSITE_TAKEOVER_COST_CATEGORIES)[number];
export const WEBSITE_TAKEOVER_COST_CATEGORY_LABELS: Record<
  WebsiteTakeoverCostCategory,
  string
> = {
  transition: "Audit, transfert, correction ou construction initiale",
  "internal-time": "Temps interne, gouvernance et formation",
  operations: "Exploitation, maintenance et support",
  "licences-services": "Licences, hébergement et services tiers",
  "continuity-migration":
    "Continuité, coexistence, migration et indisponibilité",
  "risk-reserve": "Réserve de risque explicitement justifiée",
  "exit-reversibility": "Sortie, réversibilité et fermeture",
};
export type WebsiteTakeoverCostFrequency =
  "one-off" | "monthly" | "annual" | "exit";

export interface WebsiteTakeoverTcoConvention {
  currency: string;
  taxBasis: WebsiteTakeoverTaxBasis | undefined;
  valuationDate: string;
  source: string;
  commonScope: string;
  costCategoriesReviewed: boolean | undefined;
  riskMethod: string;
}

export interface WebsiteTakeoverCostLine {
  rowKey: string;
  id: string;
  costKey: string;
  category: WebsiteTakeoverCostCategory;
  label: string;
  amountCents: string | undefined;
  quantity: string;
  frequency: WebsiteTakeoverCostFrequency;
  startMonth: number | undefined;
  endMonth: number | undefined;
  sourceDate: string;
  source: string;
}

export interface WebsiteTakeoverTrajectoryTcoInput {
  commonScope: string;
  assumptions: string;
  costLines: WebsiteTakeoverCostLine[];
}

export interface WebsiteTakeoverTcoInput {
  convention: WebsiteTakeoverTcoConvention;
  trajectories: Record<
    WebsiteTakeoverTrajectoryId,
    WebsiteTakeoverTrajectoryTcoInput
  >;
}

export interface WebsiteTakeoverAuditDossier {
  context: WebsiteTakeoverAuditContext;
  zones: Record<WebsiteTakeoverZoneId, WebsiteTakeoverZoneEntry>;
  tco: WebsiteTakeoverTcoInput;
}

export interface WebsiteTakeoverTriageResult {
  level: WebsiteTakeoverAuditLevel;
  complete: boolean;
  reasons: string[];
  missingFields: string[];
  lightBlockers: Array<keyof WebsiteTakeoverComplexityProfile>;
  stopCodes: WebsiteTakeoverStopCode[];
}

export type WebsiteTakeoverStopCode =
  | "authorization-absent"
  | "active-compromise"
  | "destructive-without-restore"
  | "isolated-test-impossible"
  | "authority-or-legal-block";

export interface WebsiteTakeoverZoneEvaluation {
  id: WebsiteTakeoverZoneId;
  label: string;
  applicable: boolean | undefined;
  declaredStatus: WebsiteTakeoverEvidenceStatus;
  effectiveStatus: WebsiteTakeoverEvidenceStatus;
  proofAccepted: boolean;
  evidenceComplete: boolean;
  reasons: string[];
  blocksCompletion: boolean;
}

export interface WebsiteTakeoverFinding {
  severity: WebsiteTakeoverSeverity;
  code:
    | "stop-condition"
    | "context-incomplete"
    | "zone-applicability"
    | "zone-unknown"
    | "zone-declared"
    | "zone-failed"
    | "zone-blocks-reprise"
    | "zone-impact-unknown"
    | "proof-insufficient"
    | "evidence-incomplete"
    | "evidence-date-invalid"
    | "evidence-expired"
    | "evidence-review-missing"
    | "complexity-applicability-conflict"
    | "personal-data-profile-conflict"
    | "na-invalid"
    | "tco-incomplete"
    | "scope-mismatch";
  message: string;
  zoneId?: WebsiteTakeoverZoneId;
  field?: string;
}

export interface WebsiteTakeoverTcoIssue {
  code:
    | "missing-convention"
    | "invalid-currency"
    | "invalid-date"
    | "missing-trajectory"
    | "scope-mismatch"
    | "missing-cost-line"
    | "missing-cost-category"
    | "invalid-cost-line"
    | "duplicate-cost";
  field: string;
  message: string;
  trajectoryId?: WebsiteTakeoverTrajectoryId;
}

export type WebsiteTakeoverTrajectoryTcoResult =
  | {
      kind: "known";
      label: "calculé";
      totalsCents: Record<WebsiteTakeoverTcoHorizon, string>;
      issues: [];
    }
  | {
      kind: "unknown";
      label: "ND";
      totalsCents: undefined;
      issues: WebsiteTakeoverTcoIssue[];
    };

export interface WebsiteTakeoverTcoEvaluation {
  kind: "known" | "unknown";
  convention: WebsiteTakeoverTcoConvention;
  issues: WebsiteTakeoverTcoIssue[];
  trajectories: Record<
    WebsiteTakeoverTrajectoryId,
    WebsiteTakeoverTrajectoryTcoResult
  >;
}

export interface WebsiteTakeoverAuditEvaluation {
  version: string;
  triage: WebsiteTakeoverTriageResult;
  verdict: WebsiteTakeoverVerdict;
  complete: boolean;
  canProceed: boolean;
  findings: WebsiteTakeoverFinding[];
  counts: Record<WebsiteTakeoverSeverity, number>;
  reasons: string[];
  zones: Record<WebsiteTakeoverZoneId, WebsiteTakeoverZoneEvaluation>;
  blockingZoneIds: WebsiteTakeoverZoneId[];
  tco: WebsiteTakeoverTcoEvaluation;
}

const STOP_MESSAGES: Record<WebsiteTakeoverStopCode, string> = {
  "authorization-absent":
    "STOP : aucune autorisation suffisante ne permet l’audit ou l’intervention envisagée.",
  "active-compromise":
    "STOP : une compromission active impose une réponse à incident avant la reprise ordinaire.",
  "destructive-without-restore":
    "STOP : une opération destructive est envisagée sans restauration préalablement prouvée.",
  "isolated-test-impossible":
    "STOP : le test ne peut pas être isolé sans exposer la production ou les données.",
  "authority-or-legal-block":
    "STOP : un conflit d’autorité, de mandat ou de droits interdit de présumer l’intervention autorisée.",
};

const COMPLEXITY_LABELS: Record<
  keyof WebsiteTakeoverComplexityProfile,
  string
> = {
  hasPayments: "paiement",
  hasAuthentication: "authentification",
  hasAnyPersonalDataProcessing:
    "traitement de données personnelles, même limité",
  processesPersonalData:
    "accès réel à des données personnelles ou traitement sensible, substantiel ou à risque",
  hasMutableBusinessData: "données métier mutables",
  plansMigration: "migration",
  hasCustomCode: "code spécifique",
  hasMultipleEnvironments: "plusieurs environnements",
  hasCriticalIntegration: "intégration critique",
  highSeoStake: "enjeu SEO fort",
  hasSla: "SLA",
  hasRpo: "RPO",
  hasRto: "RTO",
  hasStructuralUnknown: "inconnue structurante",
};

const WEBSITE_TAKEOVER_STOP_PROFILE_KEYS = [
  "authorizationConfirmed",
  "activeCompromise",
  "destructiveOperationPlanned",
  "restoreProven",
  "isolatedTestingPossible",
  "blockingAuthorityOrLegalDispute",
] as const satisfies readonly (keyof WebsiteTakeoverStopProfile)[];

const WEBSITE_TAKEOVER_COMPLEXITY_KEYS = [
  "hasPayments",
  "hasAuthentication",
  "hasAnyPersonalDataProcessing",
  "processesPersonalData",
  "hasMutableBusinessData",
  "plansMigration",
  "hasCustomCode",
  "hasMultipleEnvironments",
  "hasCriticalIntegration",
  "highSeoStake",
  "hasSla",
  "hasRpo",
  "hasRto",
  "hasStructuralUnknown",
] as const satisfies readonly (keyof WebsiteTakeoverComplexityProfile)[];

const WEBSITE_TAKEOVER_FULL_AUDIT_TRIGGER_KEYS = [
  "hasPayments",
  "hasAuthentication",
  "processesPersonalData",
  "hasMutableBusinessData",
  "plansMigration",
  "hasCustomCode",
  "hasMultipleEnvironments",
  "hasCriticalIntegration",
  "highSeoStake",
  "hasSla",
  "hasRpo",
  "hasRto",
  "hasStructuralUnknown",
] as const satisfies readonly (keyof WebsiteTakeoverComplexityProfile)[];

const ZONE_STATUS_LABELS: Record<WebsiteTakeoverEvidenceStatus, string> = {
  unknown: "NON VÉRIFIÉ",
  declared: "DÉCLARÉ, NON PROUVÉ",
  verified: "VÉRIFIÉ",
  failed: "ÉCHEC",
  NA: "NON APPLICABLE",
};

function emptyZoneEntry(): WebsiteTakeoverZoneEntry {
  return {
    applicable: undefined,
    status: "unknown",
    blocksReprise: undefined,
    proofKind: "unknown",
    environment: "",
    observedOn: "",
    validUntil: "",
    owner: "",
    artifactReference: "",
    result: "",
    limitation: "",
    forbiddenAction: "",
    reopenTrigger: "",
    nextAction: "",
    dueOn: "",
    naJustification: "",
  };
}

function createEmptyZones(): Record<
  WebsiteTakeoverZoneId,
  WebsiteTakeoverZoneEntry
> {
  return Object.fromEntries(
    WEBSITE_TAKEOVER_ZONE_IDS.map((id) => [id, emptyZoneEntry()]),
  ) as Record<WebsiteTakeoverZoneId, WebsiteTakeoverZoneEntry>;
}

function emptyTrajectoryTco(): WebsiteTakeoverTrajectoryTcoInput {
  return {
    commonScope: "",
    assumptions: "",
    costLines: [],
  };
}

export function createEmptyWebsiteTakeoverTcoInput(): WebsiteTakeoverTcoInput {
  return {
    convention: {
      currency: "",
      taxBasis: undefined,
      valuationDate: "",
      source: "",
      commonScope: "",
      costCategoriesReviewed: undefined,
      riskMethod: "",
    },
    trajectories: Object.fromEntries(
      WEBSITE_TAKEOVER_TRAJECTORY_IDS.map((id) => [id, emptyTrajectoryTco()]),
    ) as Record<WebsiteTakeoverTrajectoryId, WebsiteTakeoverTrajectoryTcoInput>,
  };
}

export function createEmptyWebsiteTakeoverAuditDossier(): WebsiteTakeoverAuditDossier {
  return {
    context: {
      reference: "",
      siteName: "",
      evaluationDate: "",
      commonScope: "",
      stopProfile: {
        authorizationConfirmed: undefined,
        activeCompromise: undefined,
        destructiveOperationPlanned: undefined,
        restoreProven: undefined,
        isolatedTestingPossible: undefined,
        blockingAuthorityOrLegalDispute: undefined,
      },
      complexity: {
        hasPayments: undefined,
        hasAuthentication: undefined,
        hasAnyPersonalDataProcessing: undefined,
        processesPersonalData: undefined,
        hasMutableBusinessData: undefined,
        plansMigration: undefined,
        hasCustomCode: undefined,
        hasMultipleEnvironments: undefined,
        hasCriticalIntegration: undefined,
        highSeoStake: undefined,
        hasSla: undefined,
        hasRpo: undefined,
        hasRto: undefined,
        hasStructuralUnknown: undefined,
      },
    },
    zones: createEmptyZones(),
    tco: createEmptyWebsiteTakeoverTcoInput(),
  };
}

function isMeaningful(value: unknown, minimumLength = 3): value is string {
  if (typeof value !== "string") return false;
  const normalized = value.trim();
  if (normalized.length < minimumLength) return false;
  return !/^(?:x+|\?+|-+|n\/?a|nd)$/i.test(normalized);
}

function parseIsoDate(value: string): number | undefined {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value.trim());
  if (!match) return undefined;
  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  const epoch = Date.UTC(year, month - 1, day);
  const date = new Date(epoch);
  if (
    date.getUTCFullYear() !== year ||
    date.getUTCMonth() !== month - 1 ||
    date.getUTCDate() !== day
  ) {
    return undefined;
  }
  return epoch;
}

function isSupportedTwoDecimalCurrency(value: unknown): boolean {
  if (typeof value !== "string") return false;
  const code = value.trim().toUpperCase();
  if (!/^[A-Z]{3}$/.test(code)) return false;
  const supportedValuesOf = (
    Intl as typeof Intl & {
      supportedValuesOf?: (key: "currency") => string[];
    }
  ).supportedValuesOf;
  const recognized = supportedValuesOf
    ? supportedValuesOf("currency").includes(code)
    : new Set([
        "AED",
        "AUD",
        "BRL",
        "CAD",
        "CHF",
        "CNY",
        "CZK",
        "DKK",
        "EUR",
        "GBP",
        "HKD",
        "INR",
        "MAD",
        "NOK",
        "NZD",
        "PLN",
        "RON",
        "SEK",
        "SGD",
        "USD",
        "ZAR",
      ]).has(code);
  if (!recognized) {
    return false;
  }
  try {
    const options = new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: code,
    }).resolvedOptions();
    return (
      options.minimumFractionDigits === 2 &&
      options.maximumFractionDigits === 2
    );
  } catch {
    return false;
  }
}

function parsePositiveInteger(value: unknown): bigint | undefined {
  if (typeof value !== "string") return undefined;
  if (!/^[1-9]\d{0,11}$/.test(value.trim())) return undefined;
  try {
    return BigInt(value.trim());
  } catch {
    return undefined;
  }
}

function uniqueStrings(values: string[]): string[] {
  return [...new Set(values)];
}

function isInsufficientProofKind(kind: WebsiteTakeoverProofKind): boolean {
  return (
    WEBSITE_TAKEOVER_INSUFFICIENT_PROOF_KINDS as readonly WebsiteTakeoverProofKind[]
  ).includes(kind);
}

export function triageWebsiteTakeoverAudit(
  context: WebsiteTakeoverAuditContext,
): WebsiteTakeoverTriageResult {
  const missingFields: string[] = [];
  const stopCodes: WebsiteTakeoverStopCode[] = [];
  const profile = context.stopProfile;

  if (profile.authorizationConfirmed === false) {
    stopCodes.push("authorization-absent");
  } else if (profile.authorizationConfirmed === undefined) {
    missingFields.push("stopProfile.authorizationConfirmed");
  }

  if (profile.activeCompromise === true) {
    stopCodes.push("active-compromise");
  } else if (profile.activeCompromise === undefined) {
    missingFields.push("stopProfile.activeCompromise");
  }

  if (profile.destructiveOperationPlanned === true) {
    if (profile.restoreProven !== true) {
      stopCodes.push("destructive-without-restore");
    }
  } else if (profile.destructiveOperationPlanned === undefined) {
    missingFields.push("stopProfile.destructiveOperationPlanned");
  }

  if (profile.isolatedTestingPossible === false) {
    stopCodes.push("isolated-test-impossible");
  } else if (profile.isolatedTestingPossible === undefined) {
    missingFields.push("stopProfile.isolatedTestingPossible");
  }

  if (profile.blockingAuthorityOrLegalDispute === true) {
    stopCodes.push("authority-or-legal-block");
  } else if (profile.blockingAuthorityOrLegalDispute === undefined) {
    missingFields.push("stopProfile.blockingAuthorityOrLegalDispute");
  }

  const lightBlockers = WEBSITE_TAKEOVER_FULL_AUDIT_TRIGGER_KEYS.filter(
    (key) => context.complexity[key] === true,
  );
  for (const key of WEBSITE_TAKEOVER_COMPLEXITY_KEYS) {
    const value = context.complexity[key];
    if (value === undefined) missingFields.push(`complexity.${key}`);
  }

  if (stopCodes.length > 0) {
    return {
      level: "stop",
      complete: missingFields.length === 0,
      reasons: stopCodes.map((code) => STOP_MESSAGES[code]),
      missingFields,
      lightBlockers,
      stopCodes,
    };
  }

  if (lightBlockers.length > 0 || missingFields.length > 0) {
    const blockers = lightBlockers.map((key) => COMPLEXITY_LABELS[key]);
    const reasons = [
      blockers.length > 0
        ? `Audit complet requis : ${blockers.join(", ")}.`
        : "Audit complet par précaution : les critères autorisant un audit léger ne sont pas tous qualifiés.",
    ];
    if (missingFields.length > 0) {
      reasons.push(
        "Le triage reste incomplet tant que chaque critère de sécurité et de complexité n’est pas renseigné.",
      );
    }
    return {
      level: "full",
      complete: missingFields.length === 0,
      reasons,
      missingFields,
      lightBlockers,
      stopCodes: [],
    };
  }

  return {
    level: "light",
    complete: true,
    reasons: [
      "Audit léger admissible : aucun déclencheur de STOP ou d’audit complet n’est déclaré.",
    ],
    missingFields: [],
    lightBlockers: [],
    stopCodes: [],
  };
}

function zoneEvidenceFieldsComplete(entry: WebsiteTakeoverZoneEntry): boolean {
  return [
    entry.environment,
    entry.observedOn,
    entry.validUntil,
    entry.owner,
    entry.artifactReference,
    entry.result,
    entry.limitation,
    entry.forbiddenAction,
    entry.reopenTrigger,
    entry.nextAction,
    entry.dueOn,
  ].every((value) => isMeaningful(value));
}

const ZONE_COMPLEXITY_REQUIREMENTS: Partial<
  Record<WebsiteTakeoverZoneId, Array<keyof WebsiteTakeoverComplexityProfile>>
> = {
  code_history_build: ["hasCustomCode"],
  cicd_artifact_rollback: ["hasCustomCode", "hasMultipleEnvironments"],
  dependencies_sbom_licenses_eol: ["hasCustomCode"],
  data_migrations: ["hasMutableBusinessData", "plansMigration"],
  seo_analytics: ["highSeoStake"],
  privacy_processors_transfers_retention: [
    "hasAnyPersonalDataProcessing",
    "processesPersonalData",
    "hasAuthentication",
    "hasPayments",
  ],
};

function complexityRequirementsForZone(
  dossier: WebsiteTakeoverAuditDossier,
  id: WebsiteTakeoverZoneId,
): Array<keyof WebsiteTakeoverComplexityProfile> {
  return (ZONE_COMPLEXITY_REQUIREMENTS[id] ?? []).filter(
    (key) => dossier.context.complexity[key] === true,
  );
}

function evidenceDatesAreValid(
  dossier: WebsiteTakeoverAuditDossier,
  entry: WebsiteTakeoverZoneEntry,
): boolean {
  const observedOn = parseIsoDate(entry.observedOn);
  const validUntil = parseIsoDate(entry.validUntil);
  const dueOn = parseIsoDate(entry.dueOn);
  const evaluationDate = parseIsoDate(dossier.context.evaluationDate);
  return Boolean(
    observedOn &&
    validUntil &&
    dueOn &&
    evaluationDate &&
    observedOn <= evaluationDate &&
    validUntil >= evaluationDate &&
    validUntil >= observedOn &&
    dueOn >= evaluationDate,
  );
}

function nonApplicabilityEvidenceComplete(
  dossier: WebsiteTakeoverAuditDossier,
  entry: WebsiteTakeoverZoneEntry,
): boolean {
  return (
    entry.proofKind === "non-applicability-evidence" &&
    entry.blocksReprise === false &&
    isMeaningful(entry.naJustification, 24) &&
    [
      entry.environment,
      entry.owner,
      entry.artifactReference,
      entry.result,
      entry.limitation,
      entry.forbiddenAction,
      entry.reopenTrigger,
      entry.nextAction,
    ].every((value) => isMeaningful(value)) &&
    evidenceDatesAreValid(dossier, entry)
  );
}

export function evaluateWebsiteTakeoverZone(
  dossier: WebsiteTakeoverAuditDossier,
  id: WebsiteTakeoverZoneId,
): WebsiteTakeoverZoneEvaluation {
  const definition = WEBSITE_TAKEOVER_ZONES[id];
  const entry = dossier.zones[id];
  const reasons: string[] = [];
  const complexityRequirements = complexityRequirementsForZone(dossier, id);
  let effectiveStatus = entry.status;
  let proofAccepted =
    entry.proofKind === definition.acceptedProofKind &&
    !isInsufficientProofKind(entry.proofKind);
  const evidenceComplete = zoneEvidenceFieldsComplete(entry);

  if (
    entry.applicable === false &&
    (definition.alwaysApplicable || complexityRequirements.length > 0)
  ) {
    effectiveStatus = "unknown";
    reasons.push(
      definition.alwaysApplicable
        ? "Cette zone est toujours applicable à une reprise de site."
        : `Cette zone est requise par le profil déclaré : ${complexityRequirements
            .map((key) => COMPLEXITY_LABELS[key])
            .join(", ")}.`,
    );
  } else if (entry.applicable === undefined) {
    effectiveStatus = "unknown";
    reasons.push("L’applicabilité de cette zone n’est pas qualifiée.");
  } else if (entry.applicable === false) {
    if (entry.status !== "NA") {
      effectiveStatus = "unknown";
      reasons.push(
        "Une zone déclarée non applicable doit utiliser le statut NA.",
      );
    } else if (!nonApplicabilityEvidenceComplete(dossier, entry)) {
      effectiveStatus = "unknown";
      reasons.push(
        "Le statut NA exige un contrôle de non-applicabilité, un motif spécifique, un périmètre, un auteur, des dates valides, un artefact, un résultat, une limite, une action interdite, un impact explicitement non bloquant, un événement de réouverture et une prochaine revue.",
      );
    } else {
      effectiveStatus = "NA";
      proofAccepted = true;
    }
  } else if (entry.status === "NA") {
    effectiveStatus = "unknown";
    reasons.push("Une zone applicable ne peut pas être neutralisée par NA.");
  }

  if (entry.applicable === true && entry.status === "verified") {
    if (!proofAccepted) {
      effectiveStatus = "declared";
      reasons.push(
        `La preuve « ${WEBSITE_TAKEOVER_PROOF_LABELS[entry.proofKind]} » ne valide pas cette zone.`,
      );
    }
    if (!evidenceComplete) {
      effectiveStatus = "declared";
      reasons.push(
        "Une vérification exige environnement, date, propriétaire, référence, résultat, limite et action interdite.",
      );
    }
    if (!evidenceDatesAreValid(dossier, entry)) {
      effectiveStatus = "declared";
      reasons.push(
        "Les dates de preuve, de validité ou de prochaine revue sont invalides, futures ou expirées à la date d’évaluation.",
      );
    }
  }

  if (entry.applicable === true && entry.status === "declared") {
    effectiveStatus = "declared";
    reasons.push("L’élément est déclaré mais pas vérifié.");
  }

  if (entry.applicable === true && entry.status === "failed") {
    effectiveStatus = "failed";
    reasons.push("Le contrôle de cette zone a échoué.");
    if (!isMeaningful(entry.result)) {
      reasons.push(
        "L’échec doit néanmoins être relié à un résultat observé et documenté.",
      );
    }
  }

  if (entry.applicable === true && entry.status === "unknown") {
    effectiveStatus = "unknown";
    reasons.push(
      "Aucune conclusion vérifiée n’est disponible pour cette zone.",
    );
  }

  return {
    id,
    label: definition.label,
    applicable: entry.applicable,
    declaredStatus: entry.status,
    effectiveStatus,
    proofAccepted,
    evidenceComplete,
    reasons: uniqueStrings(reasons),
    blocksCompletion:
      effectiveStatus === "unknown" ||
      ((effectiveStatus === "verified" || effectiveStatus === "NA") &&
        entry.blocksReprise !== false),
  };
}

function zoneFindingSeverity(
  dossier: WebsiteTakeoverAuditDossier,
  id: WebsiteTakeoverZoneId,
): Exclude<WebsiteTakeoverSeverity, "P0"> {
  const entry = dossier.zones[id];
  if (id === "seo_analytics" && dossier.context.complexity.highSeoStake) {
    return "P1";
  }
  if (id === "performance_capacity" && dossier.context.complexity.hasSla) {
    return "P1";
  }
  const defaultSeverity = WEBSITE_TAKEOVER_ZONES[id].defaultSeverity;
  if (defaultSeverity === "P1") return "P1";

  const nonBlockingReservationComplete =
    entry.blocksReprise === false &&
    [
      entry.environment,
      entry.observedOn,
      entry.validUntil,
      entry.owner,
      entry.artifactReference,
      entry.result,
      entry.limitation,
      entry.forbiddenAction,
      entry.reopenTrigger,
      entry.nextAction,
      entry.dueOn,
    ].every((value) => isMeaningful(value)) &&
    evidenceDatesAreValid(dossier, entry);

  return nonBlockingReservationComplete ? "P2" : "P1";
}

function zoneFindings(
  dossier: WebsiteTakeoverAuditDossier,
  zone: WebsiteTakeoverZoneEvaluation,
): WebsiteTakeoverFinding[] {
  const entry = dossier.zones[zone.id];
  const severity = zoneFindingSeverity(dossier, zone.id);
  const findings: WebsiteTakeoverFinding[] = [];
  const complexityRequirements = complexityRequirementsForZone(
    dossier,
    zone.id,
  );

  if (zone.effectiveStatus === "verified" || zone.effectiveStatus === "NA") {
    if (entry.blocksReprise === true) {
      findings.push({
        severity: "P1",
        code: "zone-blocks-reprise",
        zoneId: zone.id,
        field: `zones.${zone.id}.blocksReprise`,
        message: `${zone.label} : la preuve est qualifiée, mais son résultat est déclaré bloquant pour la reprise.`,
      });
    } else if (entry.blocksReprise === undefined) {
      findings.push({
        severity: "P1",
        code: "zone-impact-unknown",
        zoneId: zone.id,
        field: `zones.${zone.id}.blocksReprise`,
        message: `${zone.label} : l’impact du résultat sur la reprise n’est pas qualifié.`,
      });
    }
    return findings;
  }

  if (entry.applicable === false && complexityRequirements.length > 0) {
    findings.push({
      severity,
      code: "complexity-applicability-conflict",
      zoneId: zone.id,
      field: `zones.${zone.id}.applicable`,
      message: `${zone.label} : la non-applicabilité contredit le profil (${complexityRequirements
        .map((key) => COMPLEXITY_LABELS[key])
        .join(", ")}).`,
    });
  }

  if (entry.status === "NA") {
    findings.push({
      severity,
      code: "na-invalid",
      zoneId: zone.id,
      field: `zones.${zone.id}.naJustification`,
      message: `${zone.label} : la non-applicabilité n’est pas démontrée.`,
    });
    return findings;
  }
  if (entry.status === "verified" && !zone.proofAccepted) {
    findings.push({
      severity,
      code: "proof-insufficient",
      zoneId: zone.id,
      field: `zones.${zone.id}.proofKind`,
      message: `${zone.label} : la preuve fournie est insuffisante pour valider la porte.`,
    });
  }
  if (entry.status === "verified" && !zone.evidenceComplete) {
    findings.push({
      severity,
      code: "evidence-incomplete",
      zoneId: zone.id,
      field: `zones.${zone.id}`,
      message: `${zone.label} : la preuve dite vérifiée est incomplète.`,
    });
  }
  if (entry.status === "verified" && !evidenceDatesAreValid(dossier, entry)) {
    const evaluationDate = parseIsoDate(dossier.context.evaluationDate);
    const validUntil = parseIsoDate(entry.validUntil);
    findings.push({
      severity,
      code:
        evaluationDate && validUntil && validUntil < evaluationDate
          ? "evidence-expired"
          : "evidence-date-invalid",
      zoneId: zone.id,
      field: `zones.${zone.id}.observedOn,validUntil,dueOn`,
      message:
        evaluationDate && validUntil && validUntil < evaluationDate
          ? `${zone.label} : la preuve a expiré avant la date d’évaluation.`
          : `${zone.label} : les dates de preuve, de validité ou de revue ne sont pas cohérentes.`,
    });
  }
  if (
    entry.status === "verified" &&
    (!isMeaningful(entry.reopenTrigger) ||
      !isMeaningful(entry.nextAction) ||
      parseIsoDate(entry.dueOn) === undefined)
  ) {
    findings.push({
      severity,
      code: "evidence-review-missing",
      zoneId: zone.id,
      field: `zones.${zone.id}.reopenTrigger,nextAction,dueOn`,
      message: `${zone.label} : l’événement de réouverture et la prochaine revue ne sont pas planifiés.`,
    });
  }
  if (zone.effectiveStatus === "failed") {
    findings.push({
      severity,
      code: "zone-failed",
      zoneId: zone.id,
      message: `${zone.label} : contrôle en échec ; ${entry.forbiddenAction.trim() || "l’action concernée reste interdite"}.`,
    });
    return findings;
  }
  if (zone.effectiveStatus === "declared") {
    if (findings.length === 0) {
      findings.push({
        severity,
        code: "zone-declared",
        zoneId: zone.id,
        message: `${zone.label} : déclaration disponible, vérification encore nécessaire.`,
      });
    }
    return findings;
  }
  if (entry.applicable === undefined) {
    findings.push({
      severity,
      code: "zone-applicability",
      zoneId: zone.id,
      field: `zones.${zone.id}.applicable`,
      message: `${zone.label} : applicabilité non qualifiée.`,
    });
    return findings;
  }
  findings.push({
    severity,
    code: "zone-unknown",
    zoneId: zone.id,
    message: `${zone.label} : zone applicable non vérifiée.`,
  });
  return findings;
}

function parseCents(value: string | undefined): bigint | undefined {
  if (value === undefined || !/^\d{1,30}$/.test(value.trim())) {
    return undefined;
  }
  try {
    return BigInt(value.trim());
  } catch {
    return undefined;
  }
}

function normalizedKey(value: unknown): string {
  if (typeof value !== "string") return "";
  return value.trim().toLocaleLowerCase("fr-FR").replace(/\s+/g, " ");
}

function divideRoundHalfUp(numerator: bigint, denominator: bigint): bigint {
  return (numerator + denominator / BigInt(2)) / denominator;
}

function costForHorizonCents(
  line: WebsiteTakeoverCostLine,
  amountCents: bigint,
  quantity: bigint,
  horizon: WebsiteTakeoverTcoHorizon,
): bigint {
  const startMonth = line.startMonth as number;
  if (horizon < startMonth) return BigInt(0);
  const base = amountCents * quantity;
  if (line.frequency === "one-off" || line.frequency === "exit") return base;
  const effectiveEnd = Math.min(horizon, line.endMonth as number);
  if (effectiveEnd < startMonth) return BigInt(0);
  const activeMonths = effectiveEnd - startMonth + 1;
  if (line.frequency === "monthly") {
    return base * BigInt(activeMonths);
  }
  return divideRoundHalfUp(base * BigInt(activeMonths), BigInt(12));
}

function validateCostLine(
  line: WebsiteTakeoverCostLine,
  trajectoryId: WebsiteTakeoverTrajectoryId,
  index: number,
  valuationDate: string,
): WebsiteTakeoverTcoIssue[] {
  const issues: WebsiteTakeoverTcoIssue[] = [];
  const prefix = `trajectories.${trajectoryId}.costLines.${index}`;
  if (
    !isMeaningful(line.rowKey) ||
    !isMeaningful(line.id) ||
    !isMeaningful(line.costKey) ||
    !isMeaningful(line.label) ||
    !isMeaningful(line.source)
  ) {
    issues.push({
      code: "invalid-cost-line",
      field: prefix,
      trajectoryId,
      message:
        "Chaque ligne de coût exige un identifiant, une origine unique, un libellé et une source.",
    });
  }
  if (
    !(WEBSITE_TAKEOVER_COST_CATEGORIES as readonly string[]).includes(
      line.category,
    )
  ) {
    issues.push({
      code: "invalid-cost-line",
      field: `${prefix}.category`,
      trajectoryId,
      message: "Chaque coût doit appartenir à une catégorie TCO canonique.",
    });
  }
  if (parseCents(line.amountCents) === undefined) {
    issues.push({
      code:
        line.amountCents === undefined
          ? "missing-cost-line"
          : "invalid-cost-line",
      field: `${prefix}.amountCents`,
      trajectoryId,
      message:
        "Le montant en centimes est absent ou invalide ; il reste ND et ne devient pas zéro.",
    });
  }
  if (parsePositiveInteger(line.quantity) === undefined) {
    issues.push({
      code: "invalid-cost-line",
      field: `${prefix}.quantity`,
      trajectoryId,
      message:
        "La quantité doit être un entier positif explicite ; un coût nul se documente avec un montant nul et une quantité de 1.",
    });
  }
  const validStart =
    Number.isInteger(line.startMonth) &&
    (line.startMonth as number) >=
      (line.frequency === "monthly" || line.frequency === "annual" ? 1 : 0) &&
    (line.startMonth as number) <= 60;
  if (!validStart) {
    issues.push({
      code: "invalid-cost-line",
      field: `${prefix}.startMonth`,
      trajectoryId,
      message:
        "Le mois de départ doit être un entier dans l’horizon 0–60 ; un coût récurrent commence au mois 1 au plus tôt.",
    });
  }
  const validEnd =
    Number.isInteger(line.endMonth) &&
    (line.endMonth as number) >= (line.startMonth ?? 0) &&
    (line.endMonth as number) <= 60;
  if (!validEnd) {
    issues.push({
      code: "invalid-cost-line",
      field: `${prefix}.endMonth`,
      trajectoryId,
      message:
        "Le mois de fin doit être explicite, compris entre le mois de départ et le mois 60.",
    });
  }
  const parsedSourceDate = parseIsoDate(line.sourceDate);
  const parsedValuationDate = parseIsoDate(valuationDate);
  if (
    !parsedSourceDate ||
    !parsedValuationDate ||
    parsedSourceDate > parsedValuationDate
  ) {
    issues.push({
      code: "invalid-date",
      field: `${prefix}.sourceDate`,
      trajectoryId,
      message:
        "Chaque montant exige une date de source ISO au plus tard égale à la date de valorisation.",
    });
  }
  return issues;
}

function unknownTrajectoryTco(
  issues: WebsiteTakeoverTcoIssue[],
): WebsiteTakeoverTrajectoryTcoResult {
  return {
    kind: "unknown",
    label: "ND",
    totalsCents: undefined,
    issues,
  };
}

export function calculateWebsiteTakeoverTco(
  input: WebsiteTakeoverTcoInput,
): WebsiteTakeoverTcoEvaluation {
  const conventionIssues: WebsiteTakeoverTcoIssue[] = [];
  if (
    !isMeaningful(input.convention.commonScope, 10) ||
    !isMeaningful(input.convention.source, 5) ||
    !input.convention.taxBasis ||
    input.convention.costCategoriesReviewed !== true ||
    !isMeaningful(input.convention.riskMethod, 10)
  ) {
    conventionIssues.push({
      code: "missing-convention",
      field: "convention",
      message:
        "Le périmètre commun, la base HT/TTC, la source, la revue des catégories et la méthode de réserve de risque sont obligatoires.",
    });
  }
  if (!isSupportedTwoDecimalCurrency(input.convention.currency)) {
    conventionIssues.push({
      code: "invalid-currency",
      field: "convention.currency",
      message:
        "La devise doit être un code ISO 4217 à deux décimales pris en charge, par exemple EUR, USD ou CHF.",
    });
  }
  if (parseIsoDate(input.convention.valuationDate) === undefined) {
    conventionIssues.push({
      code: "invalid-date",
      field: "convention.valuationDate",
      message: "La date de valorisation doit être une date ISO réelle.",
    });
  }

  const trajectoryResults = {} as Record<
    WebsiteTakeoverTrajectoryId,
    WebsiteTakeoverTrajectoryTcoResult
  >;
  const allIssues = [...conventionIssues];

  for (const id of WEBSITE_TAKEOVER_TRAJECTORY_IDS) {
    const trajectory = input.trajectories[id];
    const issues: WebsiteTakeoverTcoIssue[] = [...conventionIssues];
    if (!trajectory) {
      const issue: WebsiteTakeoverTcoIssue = {
        code: "missing-trajectory",
        field: `trajectories.${id}`,
        trajectoryId: id,
        message: `La trajectoire « ${WEBSITE_TAKEOVER_TRAJECTORIES[id].label} » est absente.`,
      };
      issues.push(issue);
      allIssues.push(issue);
      trajectoryResults[id] = unknownTrajectoryTco(issues);
      continue;
    }
    if (
      normalizedKey(trajectory.commonScope) !==
        normalizedKey(input.convention.commonScope) ||
      !isMeaningful(trajectory.commonScope, 10)
    ) {
      issues.push({
        code: "scope-mismatch",
        field: `trajectories.${id}.commonScope`,
        trajectoryId: id,
        message:
          "Cette trajectoire ne reprend pas exactement le périmètre commun de comparaison.",
      });
    }
    if (!isMeaningful(trajectory.assumptions, 10)) {
      issues.push({
        code: "missing-convention",
        field: `trajectories.${id}.assumptions`,
        trajectoryId: id,
        message:
          "Les hypothèses propres à la trajectoire doivent être explicites.",
      });
    }
    if (trajectory.costLines.length === 0) {
      issues.push({
        code: "missing-cost-line",
        field: `trajectories.${id}.costLines`,
        trajectoryId: id,
        message:
          "Aucune ligne de coût n’est renseignée ; le TCO reste ND et non nul.",
      });
    }

    const seenIds = new Set<string>();
    const seenRowKeys = new Set<string>();
    const seenCostKeys = new Set<string>();
    const seenCategories = new Set<WebsiteTakeoverCostCategory>();
    trajectory.costLines.forEach((line, index) => {
      issues.push(
        ...validateCostLine(line, id, index, input.convention.valuationDate),
      );
      const normalizedRowKey = normalizedKey(line.rowKey);
      const normalizedId = normalizedKey(line.id);
      const costKey = normalizedKey(line.costKey);
      if (
        (normalizedRowKey && seenRowKeys.has(normalizedRowKey)) ||
        (normalizedId && seenIds.has(normalizedId)) ||
        (costKey && seenCostKeys.has(costKey))
      ) {
        issues.push({
          code: "duplicate-cost",
          field: `trajectories.${id}.costLines.${index}.costKey`,
          trajectoryId: id,
          message:
            "Deux lignes portent la même origine de coût ; le double compte doit être levé.",
        });
      }
      if (normalizedRowKey) seenRowKeys.add(normalizedRowKey);
      if (normalizedId) seenIds.add(normalizedId);
      if (costKey) seenCostKeys.add(costKey);
      if (
        (WEBSITE_TAKEOVER_COST_CATEGORIES as readonly string[]).includes(
          line.category,
        )
      ) {
        seenCategories.add(line.category);
      }
    });
    for (const category of WEBSITE_TAKEOVER_COST_CATEGORIES) {
      if (!seenCategories.has(category)) {
        issues.push({
          code: "missing-cost-category",
          field: `trajectories.${id}.costLines`,
          trajectoryId: id,
          message: `Catégorie absente : ${WEBSITE_TAKEOVER_COST_CATEGORY_LABELS[category]}. Ajoutez une ligne sourcée, y compris avec un montant nul lorsque c’est réellement le cas.`,
        });
      }
    }

    if (issues.length > 0) {
      trajectoryResults[id] = unknownTrajectoryTco(issues);
      allIssues.push(
        ...issues.filter((issue) => !conventionIssues.includes(issue)),
      );
      continue;
    }

    const totals = {} as Record<WebsiteTakeoverTcoHorizon, string>;
    for (const horizon of WEBSITE_TAKEOVER_TCO_HORIZONS) {
      let total = BigInt(0);
      for (const line of trajectory.costLines) {
        const cents = parseCents(line.amountCents) as bigint;
        const quantity = parsePositiveInteger(line.quantity) as bigint;
        total += costForHorizonCents(line, cents, quantity, horizon);
      }
      totals[horizon] = total.toString();
    }
    trajectoryResults[id] = {
      kind: "known",
      label: "calculé",
      totalsCents: totals,
      issues: [],
    };
  }

  return {
    kind: WEBSITE_TAKEOVER_TRAJECTORY_IDS.every(
      (id) => trajectoryResults[id]?.kind === "known",
    )
      ? "known"
      : "unknown",
    convention: input.convention,
    issues: allIssues,
    trajectories: trajectoryResults,
  };
}

function contextMissingFields(context: WebsiteTakeoverAuditContext): string[] {
  const missing: string[] = [];
  if (!isMeaningful(context.reference)) missing.push("context.reference");
  if (!isMeaningful(context.siteName)) missing.push("context.siteName");
  if (!isMeaningful(context.commonScope, 10)) {
    missing.push("context.commonScope");
  }
  if (parseIsoDate(context.evaluationDate) === undefined) {
    missing.push("context.evaluationDate");
  }
  return missing;
}

function countFindings(
  findings: WebsiteTakeoverFinding[],
): Record<WebsiteTakeoverSeverity, number> {
  return {
    P0: findings.filter((finding) => finding.severity === "P0").length,
    P1: findings.filter((finding) => finding.severity === "P1").length,
    P2: findings.filter((finding) => finding.severity === "P2").length,
  };
}

export function evaluateWebsiteTakeoverAudit(
  dossier: WebsiteTakeoverAuditDossier,
): WebsiteTakeoverAuditEvaluation {
  const triage = triageWebsiteTakeoverAudit(dossier.context);
  const findings: WebsiteTakeoverFinding[] = triage.stopCodes.map((code) => ({
    severity: "P0",
    code: "stop-condition",
    field: `context.stopProfile.${code}`,
    message: STOP_MESSAGES[code],
  }));

  const missingContext = contextMissingFields(dossier.context);
  const allMissingContext = uniqueStrings([
    ...missingContext,
    ...triage.missingFields,
  ]);
  if (allMissingContext.length > 0) {
    findings.push({
      severity: "P1",
      code: "context-incomplete",
      field: allMissingContext.join(","),
      message: `Contexte incomplet : ${allMissingContext.join(", ")}.`,
    });
  }
  if (
    dossier.context.complexity.processesPersonalData === true &&
    dossier.context.complexity.hasAnyPersonalDataProcessing === false
  ) {
    findings.push({
      severity: "P1",
      code: "personal-data-profile-conflict",
      field:
        "context.complexity.hasAnyPersonalDataProcessing,context.complexity.processesPersonalData",
      message:
        "Profil incohérent : un accès réel à des données personnelles ou un traitement sensible, substantiel ou à risque implique que le site traite des données personnelles.",
    });
  }

  const zones = {} as Record<
    WebsiteTakeoverZoneId,
    WebsiteTakeoverZoneEvaluation
  >;
  for (const id of WEBSITE_TAKEOVER_ZONE_IDS) {
    const zone = evaluateWebsiteTakeoverZone(dossier, id);
    zones[id] = zone;
    findings.push(...zoneFindings(dossier, zone));
  }

  const tco = calculateWebsiteTakeoverTco(dossier.tco);
  const tcoRequired = triage.level === "full";
  if (tcoRequired && tco.kind === "unknown") {
    findings.push({
      severity: "P1",
      code: "tco-incomplete",
      field: "tco",
      message:
        "Le TCO 12/36/60 mois reste ND tant que conventions, quatre trajectoires et lignes de coût ne sont pas toutes reproductibles.",
    });
  }
  if (
    isMeaningful(dossier.context.commonScope, 10) &&
    (tcoRequired ||
      isMeaningful(dossier.tco.convention.commonScope, 10)) &&
    normalizedKey(dossier.tco.convention.commonScope) !==
      normalizedKey(dossier.context.commonScope)
  ) {
    findings.push({
      severity: "P1",
      code: "scope-mismatch",
      field: "tco.convention.commonScope",
      message:
        "Le périmètre du TCO ne correspond pas au périmètre technique du dossier.",
    });
  }

  const counts = countFindings(findings);
  const blockingZoneIds = WEBSITE_TAKEOVER_ZONE_IDS.filter(
    (id) =>
      zones[id].blocksCompletion ||
      (zoneFindingSeverity(dossier, id) === "P1" &&
        zones[id].effectiveStatus !== "verified" &&
        zones[id].effectiveStatus !== "NA"),
  );
  const incomplete =
    allMissingContext.length > 0 ||
    blockingZoneIds.length > 0 ||
    (tcoRequired && tco.kind === "unknown") ||
    counts.P1 > 0;

  let verdict: WebsiteTakeoverVerdict;
  if (triage.level === "stop" || counts.P0 > 0) {
    verdict = "stop";
  } else if (incomplete) {
    verdict = "incomplete";
  } else if (counts.P1 > 0 || counts.P2 > 0) {
    verdict = "go-with-reservations";
  } else {
    verdict = "go";
  }

  const reasons = [...triage.reasons];
  if (!tcoRequired && tco.kind === "unknown") {
    reasons.push(
      triage.level === "light"
        ? "TCO ND : non requis pour ce verdict technique léger ; il devient obligatoire avant toute décision économique entre plusieurs trajectoires."
        : "TCO ND : non requis pour constater le STOP ; il devra être complété seulement après la levée des P0 et avant une décision économique.",
    );
  }
  if (verdict === "stop") {
    reasons.push(
      "La reprise ordinaire reste suspendue jusqu’à la levée documentée de chaque P0.",
    );
  } else if (verdict === "incomplete") {
    reasons.push(
      "Aucun GO de reprise n’est possible : une porte P1, une zone applicable, le contexte ou le TCO reste non levé. Seules des actions préparatoires explicitement hors du périmètre bloqué peuvent continuer.",
    );
  } else if (verdict === "go-with-reservations") {
    reasons.push(
      "La reprise peut avancer dans le périmètre prouvé ; seules des réserves P2 non bloquantes restent planifiées.",
    );
  } else {
    reasons.push(
      "GO limité au périmètre, aux environnements, aux preuves et à la date du dossier.",
    );
  }

  return {
    version: WEBSITE_TAKEOVER_AUDIT_VERSION,
    triage,
    verdict,
    complete: !incomplete,
    canProceed:
      counts.P0 === 0 &&
      counts.P1 === 0 &&
      (verdict === "go" || verdict === "go-with-reservations"),
    findings,
    counts,
    reasons: uniqueStrings(reasons),
    zones,
    blockingZoneIds,
    tco,
  };
}

function strongProofForZone(
  id: WebsiteTakeoverZoneId,
): WebsiteTakeoverProofKind {
  return WEBSITE_TAKEOVER_ZONES[id].acceptedProofKind;
}

function fictitiousCostLine(
  category: WebsiteTakeoverCostCategory,
  label: string,
  amountCents: string,
  frequency: WebsiteTakeoverCostFrequency,
  startMonth: number,
  endMonth = frequency === "monthly" || frequency === "annual"
    ? 60
    : startMonth,
): WebsiteTakeoverCostLine {
  return {
    rowKey: `fictif-${category}`,
    id: category,
    costKey: category,
    category,
    label,
    amountCents,
    quantity: "1",
    frequency,
    startMonth,
    endMonth,
    sourceDate: "2026-07-27",
    source: "Exemple fictif — à remplacer par une source datée.",
  };
}

export function createFictitiousWebsiteTakeoverAuditDossier(): WebsiteTakeoverAuditDossier {
  const dossier = createEmptyWebsiteTakeoverAuditDossier();
  const commonScope =
    "Boutique fictive : catalogue, compte client, panier, paiement de test, formulaires, données, deux environnements et URL conservées";
  dossier.context = {
    reference: "AUDIT-FICTIF-2026-001",
    siteName: "Boutique Alpine fictive",
    evaluationDate: "2026-07-27",
    commonScope,
    stopProfile: {
      authorizationConfirmed: true,
      activeCompromise: false,
      destructiveOperationPlanned: true,
      restoreProven: true,
      isolatedTestingPossible: true,
      blockingAuthorityOrLegalDispute: false,
    },
    complexity: {
      hasPayments: true,
      hasAuthentication: true,
      hasAnyPersonalDataProcessing: true,
      processesPersonalData: true,
      hasMutableBusinessData: true,
      plansMigration: false,
      hasCustomCode: true,
      hasMultipleEnvironments: true,
      hasCriticalIntegration: true,
      highSeoStake: true,
      hasSla: true,
      hasRpo: true,
      hasRto: true,
      hasStructuralUnknown: false,
    },
  };

  for (const [index, id] of WEBSITE_TAKEOVER_ZONE_IDS.entries()) {
    dossier.zones[id] = {
      applicable: true,
      status: "verified",
      blocksReprise: false,
      proofKind: strongProofForZone(id),
      environment: "Copie isolée fictive et lecture seule de la production",
      observedOn: "2026-07-26",
      validUntil: "2026-08-26",
      owner: "Responsable fictif de la zone",
      artifactReference: `PV-FICTIF-${String(index + 1).padStart(2, "0")}`,
      result: `Contrôle fictif concluant pour « ${WEBSITE_TAKEOVER_ZONES[id].label} ».`,
      limitation:
        "Résultat limité au périmètre fictif, aux comptes de test et à la date indiquée.",
      forbiddenAction:
        "Aucune bascule hors du périmètre fictif sans nouvelle décision.",
      reopenTrigger:
        "Réouvrir à tout changement de compte, version, fournisseur, incident ou périmètre.",
      nextAction: "Rejouer le contrôle fictif et faire approuver le résultat.",
      dueOn: "2026-08-26",
      naJustification: "",
    };
  }
  dossier.zones.documentation_support = {
    ...dossier.zones.documentation_support,
    status: "declared",
    proofKind: "declaration-only",
    result:
      "Un runbook fictif est annoncé mais n’a pas encore été utilisé par une personne indépendante.",
    forbiddenAction:
      "Ne pas retirer l’ancien support avant la répétition de passation.",
  };

  dossier.tco.convention = {
    currency: "EUR",
    taxBasis: "HT",
    valuationDate: "2026-07-27",
    source:
      "Jeu d’hypothèses entièrement fictif pour démontrer le calcul ; aucun prix de marché n’est affirmé.",
    commonScope,
    costCategoriesReviewed: true,
    riskMethod:
      "Réserve fictive explicite par trajectoire ; remplacer par une méthode décidée et sourcée.",
  };
  const trajectoryCosts: Record<
    WebsiteTakeoverTrajectoryId,
    WebsiteTakeoverCostLine[]
  > = {
    control: [
      fictitiousCostLine(
        "transition",
        "Audit, reprise et documentation initiale",
        "750000",
        "one-off",
        0,
      ),
      fictitiousCostLine(
        "internal-time",
        "Temps interne de pilotage et de transfert",
        "200000",
        "one-off",
        0,
      ),
      fictitiousCostLine(
        "operations",
        "Exploitation et maintenance mensuelles",
        "120000",
        "monthly",
        1,
      ),
      fictitiousCostLine(
        "licences-services",
        "Licences et contrôles annuels",
        "180000",
        "annual",
        1,
      ),
      fictitiousCostLine(
        "continuity-migration",
        "Continuité et bascule contrôlée",
        "100000",
        "one-off",
        0,
      ),
      fictitiousCostLine(
        "risk-reserve",
        "Réserve de risque fictive",
        "80000",
        "one-off",
        0,
      ),
      fictitiousCostLine(
        "exit-reversibility",
        "Sortie et reprise finale",
        "300000",
        "exit",
        0,
      ),
    ],
    stabilize: [
      fictitiousCostLine(
        "transition",
        "Audit et stabilisation initiale",
        "1800000",
        "one-off",
        0,
      ),
      fictitiousCostLine(
        "internal-time",
        "Pilotage interne de la stabilisation",
        "350000",
        "one-off",
        0,
      ),
      fictitiousCostLine(
        "operations",
        "Exploitation renforcée mensuelle",
        "145000",
        "monthly",
        1,
      ),
      fictitiousCostLine(
        "licences-services",
        "Licences, sécurité et revues annuelles",
        "260000",
        "annual",
        1,
      ),
      fictitiousCostLine(
        "continuity-migration",
        "Coexistence et continuité de service",
        "250000",
        "one-off",
        0,
      ),
      fictitiousCostLine(
        "risk-reserve",
        "Réserve de risque fictive",
        "200000",
        "one-off",
        0,
      ),
      fictitiousCostLine(
        "exit-reversibility",
        "Sortie et reprise finale",
        "350000",
        "exit",
        0,
      ),
    ],
    "progressive-migration": [
      fictitiousCostLine(
        "transition",
        "Socle et migration progressive",
        "4200000",
        "one-off",
        0,
      ),
      fictitiousCostLine(
        "internal-time",
        "Pilotage interne et formation progressive",
        "600000",
        "one-off",
        0,
      ),
      fictitiousCostLine(
        "operations",
        "Coexistence puis exploitation mensuelle",
        "165000",
        "monthly",
        1,
      ),
      fictitiousCostLine(
        "licences-services",
        "Licences et revues annuelles",
        "220000",
        "annual",
        1,
      ),
      fictitiousCostLine(
        "continuity-migration",
        "Coexistence, réconciliation et bascule",
        "900000",
        "one-off",
        0,
      ),
      fictitiousCostLine(
        "risk-reserve",
        "Réserve de risque fictive",
        "500000",
        "one-off",
        0,
      ),
      fictitiousCostLine(
        "exit-reversibility",
        "Sortie et reprise finale",
        "400000",
        "exit",
        0,
      ),
    ],
    rebuild: [
      fictitiousCostLine(
        "transition",
        "Reconstruction et migration initiales",
        "7800000",
        "one-off",
        0,
      ),
      fictitiousCostLine(
        "internal-time",
        "Pilotage interne, recette et formation",
        "900000",
        "one-off",
        0,
      ),
      fictitiousCostLine(
        "operations",
        "Exploitation mensuelle du nouveau socle",
        "135000",
        "monthly",
        1,
      ),
      fictitiousCostLine(
        "licences-services",
        "Licences et revues annuelles",
        "160000",
        "annual",
        1,
      ),
      fictitiousCostLine(
        "continuity-migration",
        "Double exploitation, migration et bascule",
        "1200000",
        "one-off",
        0,
      ),
      fictitiousCostLine(
        "risk-reserve",
        "Réserve de risque fictive",
        "800000",
        "one-off",
        0,
      ),
      fictitiousCostLine(
        "exit-reversibility",
        "Sortie et reprise finale",
        "450000",
        "exit",
        0,
      ),
    ],
  };
  for (const id of WEBSITE_TAKEOVER_TRAJECTORY_IDS) {
    dossier.tco.trajectories[id] = {
      commonScope,
      assumptions:
        "Hypothèses fictives constantes ; mêmes fonctions, volumes, niveaux de service, données et exigences pour les quatre voies.",
      costLines: trajectoryCosts[id],
    };
  }

  return dossier;
}

export function redactWebsiteTakeoverSecretsBestEffort(value: string): string {
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
    .replace(/\bglpat-[A-Za-z0-9_-]{12,}\b/g, "[JETON MASQUÉ]")
    .replace(/\bnpm_[A-Za-z0-9]{20,}\b/g, "[JETON MASQUÉ]")
    .replace(/\bxox[bpa]-[A-Za-z0-9-]{10,}\b/g, "[JETON MASQUÉ]")
    .replace(/\b(?:AKIA|ASIA)[0-9A-Z]{16}\b/g, "[IDENTIFIANT AWS MASQUÉ]")
    .replace(/\bAIza[0-9A-Za-z_-]{20,}\b/g, "[CLÉ API MASQUÉE]")
    .replace(/\bya29\.[0-9A-Za-z_-]{20,}\b/g, "[JETON MASQUÉ]")
    .replace(
      /([a-z][a-z0-9+.-]*:\/\/)[^/\s:@]+:[^@\s/]+@/gi,
      "$1[IDENTIFIANTS MASQUÉS]@",
    )
    .replace(
      /([?&](?:access_?token|api_?key|client_?secret|key|password|secret|sig|signature|x-amz-signature|x-goog-signature|token)=)[^&#\s]*/gi,
      "$1[MASQUÉ]",
    )
    .replace(
      /\b(password|passwd|pwd|token|access_?token|api[-_ ]?key|client[-_ ]?secret|secret|authorization|cookie)\b\s*[:=]\s*(?:"[^"]*"|'[^']*'|[^\s,;]+)/gi,
      "$1=[MASQUÉ]",
    );
}

function safeText(value: string): string {
  const redacted = redactWebsiteTakeoverSecretsBestEffort(value.trim());
  return redacted || "ND";
}

function formatIntegerFr(value: string): string {
  return value.replace(/\B(?=(\d{3})+(?!\d))/g, "\u202f");
}

export function formatWebsiteTakeoverCents(
  cents: string,
  currency: string,
  taxBasis: WebsiteTakeoverTaxBasis,
): string {
  const normalized = cents.padStart(3, "0");
  const euros = normalized.slice(0, -2) || "0";
  const fraction = normalized.slice(-2);
  return `${formatIntegerFr(euros)},${fraction} ${currency} ${taxBasis}`;
}

export function formatWebsiteTakeoverZoneImpact(
  blocksReprise: boolean | undefined,
  findingSeverities: readonly WebsiteTakeoverSeverity[],
): string {
  if (blocksReprise === undefined) return "non qualifié";
  if (blocksReprise) return "bloquant — P1";
  if (findingSeverities.includes("P1")) {
    return "qualification non bloquante incomplète — P1";
  }
  if (findingSeverities.includes("P2")) {
    return "non bloquant, planifié — P2";
  }
  return "non bloquant";
}

export function buildWebsiteTakeoverAuditFilename(
  dossier: WebsiteTakeoverAuditDossier,
  extension: "txt" | "json" | "csv" = "txt",
): string {
  const date = parseIsoDate(dossier.context.evaluationDate)
    ? dossier.context.evaluationDate
    : "local";
  return `dossier-audit-reprise-${date}.${extension}`;
}

export function buildWebsiteTakeoverAuditReport(
  dossier: WebsiteTakeoverAuditDossier,
): string {
  const evaluation = evaluateWebsiteTakeoverAudit(dossier);
  const lines: string[] = [
    "DOSSIER LOCAL D’AUDIT AVANT REPRISE D’UN SITE",
    `Version : ${evaluation.version}`,
    `Référence : ${safeText(dossier.context.reference)}`,
    `Site : ${safeText(dossier.context.siteName)}`,
    `Date d’évaluation : ${safeText(dossier.context.evaluationDate)}`,
    `Périmètre commun : ${safeText(dossier.context.commonScope)}`,
    "",
    "VERDICT",
    `Niveau : ${evaluation.triage.level === "light" ? "AUDIT LÉGER" : evaluation.triage.level === "full" ? "AUDIT COMPLET" : "STOP"}`,
    `Décision : ${
      evaluation.verdict === "go"
        ? "GO"
        : evaluation.verdict === "go-with-reservations"
          ? "GO SOUS RÉSERVES"
          : evaluation.verdict === "stop"
            ? "STOP"
            : "DOSSIER INCOMPLET"
    }`,
    `P0 : ${evaluation.counts.P0} — P1 : ${evaluation.counts.P1} — P2 : ${evaluation.counts.P2}`,
    ...evaluation.reasons.map((reason) => `- ${safeText(reason)}`),
    "",
    "DIX-HUIT ZONES DE PREUVE",
  ];

  for (const [index, id] of WEBSITE_TAKEOVER_ZONE_IDS.entries()) {
    const entry = dossier.zones[id];
    const zone = evaluation.zones[id];
    const findingSeverities = evaluation.findings
      .filter((finding) => finding.zoneId === id)
      .map((finding) => finding.severity);
    lines.push(
      `ZONE ${String(index + 1).padStart(2, "0")} — ${zone.label} : ${ZONE_STATUS_LABELS[zone.effectiveStatus]}`,
      `  Applicable : ${
        entry.applicable === undefined
          ? "NON QUALIFIÉ"
          : entry.applicable
            ? "OUI"
            : "NON"
      }`,
      `  Impact sur la reprise : ${formatWebsiteTakeoverZoneImpact(
        entry.blocksReprise,
        findingSeverities,
      ).toLocaleUpperCase("fr-FR")}`,
      `  Type de preuve : ${WEBSITE_TAKEOVER_PROOF_LABELS[entry.proofKind]} (${entry.proofKind})`,
      `  Environnement : ${safeText(entry.environment)}`,
      `  Date de preuve : ${safeText(entry.observedOn)}`,
      `  Valide jusqu’au : ${safeText(entry.validUntil)}`,
      `  Propriétaire : ${safeText(entry.owner)}`,
      `  Artefact : ${safeText(entry.artifactReference)}`,
      `  Résultat : ${safeText(entry.result)}`,
      `  Limite : ${safeText(entry.limitation)}`,
      `  Action interdite : ${safeText(entry.forbiddenAction)}`,
      `  Événement de réouverture : ${safeText(entry.reopenTrigger)}`,
      `  Prochaine action : ${safeText(entry.nextAction)}`,
      `  Échéance : ${safeText(entry.dueOn)}`,
      `  Justification NA : ${safeText(entry.naJustification)}`,
      ...zone.reasons.map((reason) => `  Motif : ${safeText(reason)}`),
    );
  }

  lines.push("", "TCO À PÉRIMÈTRE ÉGAL");
  lines.push(
    `État global : ${evaluation.tco.kind === "known" ? "CALCULÉ" : "ND"}`,
    `Convention : ${safeText(evaluation.tco.convention.currency)} ${evaluation.tco.convention.taxBasis ?? "ND"} — ${safeText(evaluation.tco.convention.valuationDate)}`,
    `Périmètre : ${safeText(evaluation.tco.convention.commonScope)}`,
    `Source des hypothèses : ${safeText(evaluation.tco.convention.source)}`,
    `Catégories relues : ${
      evaluation.tco.convention.costCategoriesReviewed === true
        ? "OUI"
        : "NON OU ND"
    }`,
    `Méthode de réserve : ${safeText(evaluation.tco.convention.riskMethod)}`,
  );
  const conventionIssues = evaluation.tco.issues.filter(
    (issue) => issue.trajectoryId === undefined,
  );
  if (conventionIssues.length > 0) {
    lines.push(
      "Corrections de convention :",
      ...conventionIssues.map(
        (issue) => `- ${safeText(issue.message)} [${safeText(issue.field)}]`,
      ),
    );
  }
  for (const id of WEBSITE_TAKEOVER_TRAJECTORY_IDS) {
    const input = dossier.tco.trajectories[id];
    const result = evaluation.tco.trajectories[id];
    lines.push(
      "",
      `TRAJECTOIRE — ${WEBSITE_TAKEOVER_TRAJECTORIES[id].label}`,
      `  Périmètre : ${safeText(input?.commonScope ?? "")}`,
      `  Hypothèses : ${safeText(input?.assumptions ?? "")}`,
    );
    const trajectoryIssues = evaluation.tco.issues.filter(
      (issue) => issue.trajectoryId === id,
    );
    if (trajectoryIssues.length > 0) {
      lines.push(
        "  Corrections requises :",
        ...trajectoryIssues.map(
          (issue) =>
            `  - ${safeText(issue.message)} [${safeText(issue.field)}]`,
        ),
      );
    }
    for (const line of input?.costLines ?? []) {
      const formattedUnitCost =
        line.amountCents !== undefined && evaluation.tco.convention.taxBasis
          ? formatWebsiteTakeoverCents(
              line.amountCents,
              evaluation.tco.convention.currency,
              evaluation.tco.convention.taxBasis,
            )
          : "ND";
      lines.push(
        `  COÛT — ${WEBSITE_TAKEOVER_COST_CATEGORY_LABELS[line.category] ?? safeText(line.category)}`,
        `    ${safeText(line.label)} · quantité ${safeText(line.quantity)} × ${formattedUnitCost} · ${line.frequency} · mois ${line.startMonth ?? "ND"} à ${line.endMonth ?? "ND"}`,
        `    Source datée ${safeText(line.sourceDate)} : ${safeText(line.source)}`,
      );
    }
    if (result.kind === "known" && evaluation.tco.convention.taxBasis) {
      for (const horizon of WEBSITE_TAKEOVER_TCO_HORIZONS) {
        lines.push(
          `  ${horizon} mois : ${formatWebsiteTakeoverCents(
            result.totalsCents[horizon],
            evaluation.tco.convention.currency,
            evaluation.tco.convention.taxBasis,
          )}`,
        );
      }
    } else {
      lines.push("  Totaux 12/36/60 mois : ND");
    }
  }

  lines.push(
    "",
    "PRÉCAUTION",
    "Ce rapport est local. Ne pas y copier de mot de passe, clé, jeton, cookie, donnée client ou journal brut. Le masquage automatique est best-effort et ne garantit jamais l’absence de secret.",
  );
  return redactWebsiteTakeoverSecretsBestEffort(lines.join("\n"));
}

function sanitizeExportValue(value: unknown): unknown {
  if (typeof value === "string") {
    return redactWebsiteTakeoverSecretsBestEffort(value);
  }
  if (Array.isArray(value)) return value.map(sanitizeExportValue);
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, child]) => [
        key,
        sanitizeExportValue(child),
      ]),
    );
  }
  return value;
}

export function buildWebsiteTakeoverAuditJson(
  dossier: WebsiteTakeoverAuditDossier,
): string {
  const dossierForExport = {
    ...dossier,
    context: {
      ...dossier.context,
      stopProfile: Object.fromEntries(
        WEBSITE_TAKEOVER_STOP_PROFILE_KEYS.map((key) => [
          key,
          dossier.context.stopProfile[key] ?? null,
        ]),
      ),
      complexity: Object.fromEntries(
        WEBSITE_TAKEOVER_COMPLEXITY_KEYS.map((key) => [
          key,
          dossier.context.complexity[key] ?? null,
        ]),
      ),
    },
    zones: Object.fromEntries(
      WEBSITE_TAKEOVER_ZONE_IDS.map((id) => [
        id,
        {
          ...dossier.zones[id],
          blocksReprise: dossier.zones[id].blocksReprise ?? null,
        },
      ]),
    ),
  };
  return JSON.stringify(
    sanitizeExportValue({
      version: WEBSITE_TAKEOVER_AUDIT_VERSION,
      dossier: dossierForExport,
      evaluation: evaluateWebsiteTakeoverAudit(dossier),
    }),
    null,
    2,
  );
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function isStringRecord<const Keys extends readonly string[]>(
  value: unknown,
  keys: Keys,
): value is Record<string, unknown> & Record<Keys[number], string> {
  return isRecord(value) && keys.every((key) => typeof value[key] === "string");
}

function hasExactKeys(
  value: Record<string, unknown>,
  keys: readonly string[],
): boolean {
  const actualKeys = Object.keys(value);
  return (
    actualKeys.length === keys.length &&
    keys.every((key) => Object.prototype.hasOwnProperty.call(value, key))
  );
}

export function parseWebsiteTakeoverAuditJson(
  serialized: string,
): WebsiteTakeoverAuditDossier {
  if (serialized.length > 2_000_000) {
    throw new Error("Le fichier dépasse la limite locale de 2 Mo.");
  }
  let parsed: unknown;
  try {
    parsed = JSON.parse(serialized);
  } catch {
    throw new Error("Le fichier JSON est illisible.");
  }
  if (!isRecord(parsed) || !isRecord(parsed.dossier)) {
    throw new Error("Le JSON ne contient pas de dossier d’audit.");
  }
  if (parsed.version !== WEBSITE_TAKEOVER_AUDIT_VERSION) {
    throw new Error(
      `Version incompatible : ${String(parsed.version ?? "absente")}.`,
    );
  }
  const dossier = parsed.dossier;
  if (
    !isRecord(dossier.context) ||
    !isRecord(dossier.context.stopProfile) ||
    !isRecord(dossier.context.complexity) ||
    !isRecord(dossier.zones) ||
    !isRecord(dossier.tco) ||
    !isRecord(dossier.tco.convention) ||
    !isRecord(dossier.tco.trajectories)
  ) {
    throw new Error("La structure du dossier est incomplète.");
  }

  const context = dossier.context;
  const stopProfile = context.stopProfile;
  const complexity = context.complexity;
  if (!isRecord(stopProfile) || !isRecord(complexity)) {
    throw new Error("Le triage du dossier est incomplet.");
  }
  if (
    !isStringRecord(context, [
      "reference",
      "siteName",
      "evaluationDate",
      "commonScope",
    ])
  ) {
    throw new Error("Le contexte contient des types invalides.");
  }
  const booleanOrNull = (value: unknown) =>
    value === true || value === false || value === null;
  if (
    !hasExactKeys(stopProfile, WEBSITE_TAKEOVER_STOP_PROFILE_KEYS) ||
    !hasExactKeys(complexity, WEBSITE_TAKEOVER_COMPLEXITY_KEYS) ||
    !Object.values(stopProfile).every(booleanOrNull) ||
    !Object.values(complexity).every(booleanOrNull)
  ) {
    throw new Error(
      "Le triage doit contenir exactement les six critères STOP et les quatorze critères de qualification, dont treize déclencheurs d’audit complet, avec oui, non ou non qualifié.",
    );
  }

  const zoneStringFields = [
    "proofKind",
    "status",
    "environment",
    "observedOn",
    "validUntil",
    "owner",
    "artifactReference",
    "result",
    "limitation",
    "forbiddenAction",
    "reopenTrigger",
    "nextAction",
    "dueOn",
    "naJustification",
  ] as const;
  for (const id of WEBSITE_TAKEOVER_ZONE_IDS) {
    const entry = dossier.zones[id];
    if (
      !isRecord(entry) ||
      !(
        entry.applicable === true ||
        entry.applicable === false ||
        entry.applicable === undefined
      ) ||
      !Object.prototype.hasOwnProperty.call(entry, "blocksReprise") ||
      !booleanOrNull(entry.blocksReprise) ||
      !isStringRecord(entry, zoneStringFields) ||
      !(Object.keys(ZONE_STATUS_LABELS) as string[]).includes(entry.status) ||
      !(Object.keys(WEBSITE_TAKEOVER_PROOF_LABELS) as string[]).includes(
        entry.proofKind,
      )
    ) {
      throw new Error(`La zone ${id} est invalide ou absente.`);
    }
  }

  const convention = dossier.tco.convention;
  if (
    !isStringRecord(convention, [
      "currency",
      "valuationDate",
      "source",
      "commonScope",
      "riskMethod",
    ]) ||
    !(
      convention.taxBasis === "HT" ||
      convention.taxBasis === "TTC" ||
      convention.taxBasis === undefined
    ) ||
    !(
      convention.costCategoriesReviewed === true ||
      convention.costCategoriesReviewed === false ||
      convention.costCategoriesReviewed === undefined
    )
  ) {
    throw new Error("La convention TCO est invalide.");
  }

  const costStringFields = [
    "rowKey",
    "id",
    "costKey",
    "category",
    "label",
    "quantity",
    "frequency",
    "sourceDate",
    "source",
  ] as const;
  for (const id of WEBSITE_TAKEOVER_TRAJECTORY_IDS) {
    const trajectory = dossier.tco.trajectories[id];
    if (
      !isRecord(trajectory) ||
      !isStringRecord(trajectory, ["commonScope", "assumptions"]) ||
      !Array.isArray(trajectory.costLines)
    ) {
      throw new Error(`La trajectoire ${id} est invalide ou absente.`);
    }
    for (const line of trajectory.costLines) {
      if (
        !isRecord(line) ||
        !isStringRecord(line, costStringFields) ||
        !(
          typeof line.amountCents === "string" || line.amountCents === undefined
        ) ||
        !(
          typeof line.startMonth === "number" || line.startMonth === undefined
        ) ||
        !(typeof line.endMonth === "number" || line.endMonth === undefined) ||
        !(WEBSITE_TAKEOVER_COST_CATEGORIES as readonly string[]).includes(
          line.category,
        ) ||
        !(["one-off", "monthly", "annual", "exit"] as const).includes(
          line.frequency as WebsiteTakeoverCostFrequency,
        )
      ) {
        throw new Error(`Une ligne de coût de ${id} est invalide.`);
      }
    }
  }

  const normalizedDossier = structuredClone(dossier);
  const normalizedContext = normalizedDossier.context as Record<
    string,
    unknown
  >;
  const normalizedStopProfile = normalizedContext.stopProfile as Record<
    string,
    unknown
  >;
  const normalizedComplexity = normalizedContext.complexity as Record<
    string,
    unknown
  >;
  for (const key of WEBSITE_TAKEOVER_STOP_PROFILE_KEYS) {
    if (normalizedStopProfile[key] === null) {
      normalizedStopProfile[key] = undefined;
    }
  }
  for (const key of WEBSITE_TAKEOVER_COMPLEXITY_KEYS) {
    if (normalizedComplexity[key] === null) {
      normalizedComplexity[key] = undefined;
    }
  }
  const normalizedZones = normalizedDossier.zones as Record<
    string,
    Record<string, unknown>
  >;
  for (const id of WEBSITE_TAKEOVER_ZONE_IDS) {
    if (normalizedZones[id].blocksReprise === null) {
      normalizedZones[id].blocksReprise = undefined;
    }
  }

  return normalizedDossier as unknown as WebsiteTakeoverAuditDossier;
}

function csvCell(value: unknown): string {
  const raw = redactWebsiteTakeoverSecretsBestEffort(String(value ?? ""));
  const neutralized = /^[=+\-@\t\r]/.test(raw.trimStart()) ? `'${raw}` : raw;
  return `"${neutralized.replace(/"/g, '""')}"`;
}

export function buildWebsiteTakeoverAuditCsv(
  dossier: WebsiteTakeoverAuditDossier,
): string {
  const evaluation = evaluateWebsiteTakeoverAudit(dossier);
  const rows: unknown[][] = [
    [
      "section",
      "id",
      "libellé",
      "champ",
      "valeur",
      "version",
      "verdict",
      "périmètre",
      "applicable",
      "statut déclaré",
      "statut effectif",
      "preuve",
      "environnement",
      "date",
      "propriétaire",
      "artefact",
      "résultat",
      "limite",
      "action interdite",
      "justification NA",
      "valide jusqu’au",
      "réouverture",
      "prochaine action",
      "échéance",
      "catégorie TCO",
      "quantité",
      "montant unitaire (centimes)",
      "fréquence",
      "mois début",
      "mois fin",
      "date source",
      "source",
      "12 mois (centimes)",
      "36 mois (centimes)",
      "60 mois (centimes)",
      "impact sur la reprise",
    ],
  ];
  const blank = () => Array(36).fill("");
  const metadata = [
    ["version", WEBSITE_TAKEOVER_AUDIT_VERSION],
    ["reference", dossier.context.reference],
    ["site", dossier.context.siteName],
    ["evaluationDate", dossier.context.evaluationDate],
    ["commonScope", dossier.context.commonScope],
    ["auditLevel", evaluation.triage.level],
    ["verdict", evaluation.verdict],
    ["canProceed", evaluation.canProceed],
    ["P0", evaluation.counts.P0],
    ["P1", evaluation.counts.P1],
    ["P2", evaluation.counts.P2],
  ] as const;
  for (const [field, value] of metadata) {
    const row = blank();
    Object.assign(row, {
      0: "métadonnée",
      1: field,
      3: field,
      4: value,
      5: WEBSITE_TAKEOVER_AUDIT_VERSION,
      6: evaluation.verdict,
      7: dossier.context.commonScope,
    });
    rows.push(row);
  }
  for (const [index, finding] of evaluation.findings.entries()) {
    const row = blank();
    Object.assign(row, {
      0: "réserve",
      1: `${finding.severity}-${index + 1}`,
      2: finding.message,
      3: finding.code,
      4: finding.field ?? finding.zoneId ?? "",
      5: WEBSITE_TAKEOVER_AUDIT_VERSION,
      6: evaluation.verdict,
      7: dossier.context.commonScope,
    });
    rows.push(row);
  }
  for (const [index, id] of WEBSITE_TAKEOVER_ZONE_IDS.entries()) {
    const entry = dossier.zones[id];
    const zone = evaluation.zones[id];
    const findingSeverities = evaluation.findings
      .filter((finding) => finding.zoneId === id)
      .map((finding) => finding.severity);
    const row = blank();
    Object.assign(row, {
      0: "zone",
      1: `${String(index + 1).padStart(2, "0")}-${id}`,
      2: zone.label,
      5: WEBSITE_TAKEOVER_AUDIT_VERSION,
      6: evaluation.verdict,
      7: dossier.context.commonScope,
      8: entry.applicable === undefined ? "inconnu" : entry.applicable,
      9: entry.status,
      10: zone.effectiveStatus,
      11: WEBSITE_TAKEOVER_PROOF_LABELS[entry.proofKind],
      12: entry.environment,
      13: entry.observedOn,
      14: entry.owner,
      15: entry.artifactReference,
      16: entry.result,
      17: entry.limitation,
      18: entry.forbiddenAction,
      19: entry.naJustification,
      20: entry.validUntil,
      21: entry.reopenTrigger,
      22: entry.nextAction,
      23: entry.dueOn,
      35: formatWebsiteTakeoverZoneImpact(
        entry.blocksReprise,
        findingSeverities,
      ),
    });
    rows.push(row);
  }
  for (const id of WEBSITE_TAKEOVER_TRAJECTORY_IDS) {
    const result = evaluation.tco.trajectories[id];
    const trajectory = dossier.tco.trajectories[id];
    const summaryRow = blank();
    Object.assign(summaryRow, {
      0: "TCO-trajectoire",
      1: id,
      2: WEBSITE_TAKEOVER_TRAJECTORIES[id].label,
      4: trajectory.assumptions,
      5: WEBSITE_TAKEOVER_AUDIT_VERSION,
      6: evaluation.verdict,
      7: trajectory.commonScope,
      13: evaluation.tco.convention.valuationDate,
      31: evaluation.tco.convention.source,
      32: result.kind === "known" ? result.totalsCents[12] : "ND",
      33: result.kind === "known" ? result.totalsCents[36] : "ND",
      34: result.kind === "known" ? result.totalsCents[60] : "ND",
    });
    rows.push(summaryRow);
    for (const line of trajectory.costLines) {
      const costRow = blank();
      Object.assign(costRow, {
        0: "TCO-coût",
        1: `${id}:${line.id}`,
        2: line.label,
        3: line.costKey,
        5: WEBSITE_TAKEOVER_AUDIT_VERSION,
        6: evaluation.verdict,
        7: trajectory.commonScope,
        24: WEBSITE_TAKEOVER_COST_CATEGORY_LABELS[line.category],
        25: line.quantity,
        26: line.amountCents ?? "ND",
        27: line.frequency,
        28: line.startMonth,
        29: line.endMonth,
        30: line.sourceDate,
        31: line.source,
      });
      rows.push(costRow);
    }
  }
  return `\uFEFF${rows.map((row) => row.map(csvCell).join(";")).join("\n")}`;
}
