export const SAAS_SECURITY_REQUIREMENT_TEMPLATES = [
  {
    id: "privileged-access",
    label: "Administrateurs, identités techniques et accès d’urgence",
    help: "Comptes humains et techniques, privilèges, secrets, dernière utilisation, surveillance et révocation.",
  },
  {
    id: "tenant-separation",
    label: "Séparation entre entreprises clientes",
    help: "Interface, interface de programmation (API), recherche, pièces jointes, exports, tâches asynchrones, caches et accès support.",
  },
  {
    id: "restoration",
    label: "Restauration réellement utilisable",
    help: "Perte de données, temps de reprise technique, contrôle fonctionnel et décision du métier.",
  },
  {
    id: "software-security",
    label: "Secrets, dépendances et vulnérabilités",
    help: "Inventaire, versions, signalement, qualification, correction, contre-test et prévention de récidive.",
  },
  {
    id: "incident-response",
    label: "Détection, escalade et réaction à incident",
    help: "Personnes joignables, critères d’escalade, chronologie interne, contrat et obligations applicables.",
  },
  {
    id: "formal-assurance",
    label: "Autre exigence produit, contractuelle, sectorielle ou d’assurance",
    help: "Toute autre exigence à qualifier séparément des cinq contrôles essentiels. Elle peut être critique ; un dossier distinct ne la rend pas optionnelle.",
  },
] as const;

export type SaasSecurityRequirementId =
  (typeof SAAS_SECURITY_REQUIREMENT_TEMPLATES)[number]["id"];

export const SAAS_SECURITY_CRITICAL_CONTROL_IDS = [
  "privileged-access",
  "tenant-separation",
  "restoration",
  "software-security",
  "incident-response",
] as const satisfies readonly SaasSecurityRequirementId[];

export const SAAS_SECURITY_NATURES = [
  { id: "unknown", label: "À qualifier" },
  {
    id: "applicable-obligation",
    label: "Obligation légale ou sectorielle applicable",
  },
  {
    id: "independent-assurance",
    label: "Certification, audit ou rapport indépendant exigé",
  },
  { id: "contractual", label: "Exigence contractuelle négociable" },
  { id: "buyer-preference", label: "Préférence de l’acheteur" },
  { id: "internal", label: "Exigence décidée en interne" },
] as const;

export type SaasSecurityNature = (typeof SAAS_SECURITY_NATURES)[number]["id"];

export const SAAS_SECURITY_IMPORTANCE_LEVELS = [
  { id: "unknown", label: "À qualifier" },
  { id: "critical", label: "Indispensable avant signature" },
  { id: "important", label: "Important" },
  { id: "non-critical", label: "Non critique" },
] as const;

export type SaasSecurityImportance =
  (typeof SAAS_SECURITY_IMPORTANCE_LEVELS)[number]["id"];

export const SAAS_SECURITY_CONTROL_STATUSES = [
  { id: "unknown", label: "Inconnu" },
  { id: "proven", label: "Existe et est prouvé" },
  { id: "partial", label: "Partiel ou preuve insuffisante" },
  { id: "absent", label: "Absent ou contrôle en échec" },
  { id: "not-applicable", label: "Non applicable, avec justification" },
] as const;

export type SaasSecurityControlStatus =
  (typeof SAAS_SECURITY_CONTROL_STATUSES)[number]["id"];

export const SAAS_SECURITY_EVIDENCE_KINDS = [
  { id: "none", label: "Aucune pièce" },
  { id: "assertion", label: "Affirmation seulement" },
  { id: "document", label: "Document de conception ou procédure" },
  { id: "execution-trace", label: "Trace d’exécution observée" },
  { id: "tested", label: "Résultat de test ou d’exercice" },
  { id: "independent", label: "Assurance indépendante" },
] as const;

export type SaasSecurityEvidenceKind =
  (typeof SAAS_SECURITY_EVIDENCE_KINDS)[number]["id"];

export const SAAS_SECURITY_EVIDENCE_SCOPES = [
  { id: "unknown", label: "Périmètre inconnu" },
  { id: "partial", label: "Périmètre partiel" },
  { id: "exact", label: "Périmètre exact de la vente" },
] as const;

export type SaasSecurityEvidenceScope =
  (typeof SAAS_SECURITY_EVIDENCE_SCOPES)[number]["id"];

export const SAAS_SECURITY_RISK_LEVELS = [
  { id: "unknown", label: "À qualifier" },
  { id: "low", label: "Faible" },
  { id: "moderate", label: "Modéré" },
  { id: "high", label: "Élevé" },
  { id: "critical", label: "Critique" },
] as const;

export type SaasSecurityRiskLevel =
  (typeof SAAS_SECURITY_RISK_LEVELS)[number]["id"];

export const SAAS_SECURITY_DISPOSITIONS = [
  { id: "unknown", label: "Décision non prise" },
  { id: "keep-as-is", label: "Conserver dans l’état" },
  { id: "fix-before-signature", label: "Corriger avant signature" },
  {
    id: "condition-after-signature",
    label: "Demander un plan après signature",
  },
  {
    id: "renegotiate-or-refuse",
    label: "Renégocier l’exigence ou refuser",
  },
] as const;

export type SaasSecurityDisposition =
  (typeof SAAS_SECURITY_DISPOSITIONS)[number]["id"];

export const SAAS_SECURITY_MIN_PLANNED_HOURS = 0.01;
export const SAAS_SECURITY_MAX_DECLARED_HOURS = 1_000_000;

export interface SaasSecurityAssessmentContext {
  reference: string;
  productScope: string;
  observationDate: string;
  signatureDate: string;
  weeklyCapacityHours: number | null;
  safetyMarginPercent: number | null;
  riskApproverRole: string;
  buyerRequirementsComplete: boolean;
  remediationWorkComplete: boolean;
}

export interface SaasSecurityRequirementInput {
  id: SaasSecurityRequirementId;
  label: string;
  buyerRequirement: string;
  nature: SaasSecurityNature;
  importance: SaasSecurityImportance;
  status: SaasSecurityControlStatus;
  evidenceKind: SaasSecurityEvidenceKind;
  evidenceScope: SaasSecurityEvidenceScope;
  evidenceReference: string;
  evidenceResult: string;
  evidenceInvalidationTrigger: string;
  freshnessConfirmed: boolean;
  evidenceDate: string;
  reviewDueDate: string;
  changedSinceEvidence: boolean;
  residualRisk: SaasSecurityRiskLevel;
  ownerRole: string;
  remediationHours: number | null;
  targetDate: string;
  nextAction: string;
  disposition: SaasSecurityDisposition;
  internalAcceptance: boolean;
  internalAcceptanceReference: string;
  internalAcceptanceDate: string;
  buyerAcceptance: boolean;
  buyerAcceptanceReference: string;
  buyerAcceptanceDate: string;
  temporaryMeasure: string;
  reportabilityBasis: string;
  fundingConfirmed: boolean;
  fundingReference: string;
  fundingDate: string;
  notApplicableReason: string;
}

export interface SaasSecurityAssessment {
  context: SaasSecurityAssessmentContext;
  requirements: SaasSecurityRequirementInput[];
}

export type SaasSecurityDecisionCode =
  | "incomplete"
  | "refuse-or-renegotiate"
  | "postpone-and-qualify"
  | "fix-before-signing"
  | "sign-with-conditions"
  | "sign-on-scope";

export interface SaasSecurityCapacity {
  status: "unknown" | "available" | "deficit";
  calendarDays: number | null;
  baseHours: number | null;
  prudentHours: number | null;
  availableHours: number | null;
  gapHours: number | null;
}

export interface SaasSecurityDeferredCapacity {
  requirementId: SaasSecurityRequirementId;
  targetDate: string;
  status: "unknown" | "available" | "deficit";
  calendarDays: number | null;
  cumulativePrudentHours: number | null;
  availableHours: number | null;
  gapHours: number | null;
}

export interface SaasSecurityAssessmentIssue {
  code:
    | "missing-context"
    | "incomplete-buyer-list"
    | "incomplete-workload"
    | "invalid-requirements"
    | "downgraded-critical-control"
    | "essential-control-not-applicable"
    | "non-reportable-obligation"
    | "applicable-obligation-dismissed"
    | "independent-assurance-dismissed"
    | "critical-requirement-dismissed"
    | "insufficient-formal-evidence"
    | "inconsistent-disposition"
    | "invalid-date"
    | "future-observation"
    | "expired-signature-date"
    | "signature-before-observation"
    | "invalid-capacity"
    | "invalid-margin"
    | "missing-requirement-details"
    | "future-evidence"
    | "review-before-evidence"
    | "invalid-target-date"
    | "unjustified-not-applicable"
    | "invalid-hours";
  message: string;
  requirementId?: SaasSecurityRequirementId;
}

export interface SaasSecurityDecisionResult {
  code: SaasSecurityDecisionCode;
  title: string;
  explanation: string;
  valid: boolean;
  issues: SaasSecurityAssessmentIssue[];
  triggers: string[];
  nextActions: string[];
  capacity: SaasSecurityCapacity;
  staleEvidenceIds: SaasSecurityRequirementId[];
  unknownRequirementIds: SaasSecurityRequirementId[];
  blockingRequirementIds: SaasSecurityRequirementId[];
  conditionalRequirementIds: SaasSecurityRequirementId[];
  deferredCapacities: SaasSecurityDeferredCapacity[];
  evaluationDate: string;
}

const DECISION_COPY: Record<
  SaasSecurityDecisionCode,
  { title: string; explanation: string }
> = {
  incomplete: {
    title: "Complétez les informations avant de décider",
    explanation:
      "L’atelier ne transforme pas une date, une charge, un périmètre ou une responsabilité inconnus en hypothèse favorable.",
  },
  "refuse-or-renegotiate": {
    title: "Renégocier l’exigence ou refuser ce périmètre",
    explanation:
      "Le dossier contient une décision explicite de renégociation ou de refus. La réponse honnête consiste à modifier le périmètre ou à ne pas promettre ce point.",
  },
  "postpone-and-qualify": {
    title: "Reporter la signature et qualifier le risque",
    explanation:
      "Au moins un contrôle indispensable, une pièce ou un risque reste inconnu, hors périmètre, périmé ou impossible à traiter dans la capacité disponible.",
  },
  "fix-before-signing": {
    title: "Corriger et contre-tester avant la signature",
    explanation:
      "Le travail paraît tenir dans la capacité déclarée, mais la signature reste suspendue jusqu’au résultat du contrôle et à l’acceptation interne du risque restant.",
  },
  "sign-with-conditions": {
    title: "Signer sous conditions, uniquement pour les écarts non critiques",
    explanation:
      "Les seuls écarts restants sont non critiques, couverts par une mesure temporaire, attribués et acceptés par l’autorité interne et l’acheteur. Le plan ne vaut pas correction.",
  },
  "sign-on-scope": {
    title: "Signer sur le périmètre effectivement prouvé",
    explanation:
      "Les exigences déclarées dans l’atelier sont actuelles, rattachées au bon périmètre et ne laissent pas de risque élevé connu. Ce résultat n’est ni une certification ni une garantie de sécurité.",
  },
};

function isIsoDate(value: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const parsed = new Date(`${value}T00:00:00Z`);
  return (
    !Number.isNaN(parsed.getTime()) &&
    parsed.toISOString().slice(0, 10) === value
  );
}

function daysBetweenIsoDates(start: string, end: string) {
  const startDate = new Date(`${start}T00:00:00Z`);
  const endDate = new Date(`${end}T00:00:00Z`);
  return Math.round((endDate.getTime() - startDate.getTime()) / 86_400_000);
}

function addDaysToIsoDate(start: string, days: number) {
  const date = new Date(`${start}T00:00:00Z`);
  date.setUTCDate(date.getUTCDate() + days);
  return date.toISOString().slice(0, 10);
}

function cleanSingleLine(value: string) {
  return value
    .trim()
    .replace(/[\u0000-\u001f\u007f]+/g, " ")
    .replace(/\s+/g, " ");
}

function formatNumber(value: number | null) {
  if (value === null || !Number.isFinite(value)) return "inconnu";
  if (value > 0 && value < SAAS_SECURITY_MIN_PLANNED_HOURS) {
    return "< 0,01";
  }
  if (value < 0 && value > -SAAS_SECURITY_MIN_PLANNED_HOURS) {
    return "> -0,01";
  }
  return new Intl.NumberFormat("fr-FR", {
    maximumFractionDigits: 2,
  }).format(value);
}

function optionLabel<T extends readonly { id: string; label: string }[]>(
  options: T,
  id: T[number]["id"],
) {
  return options.find((option) => option.id === id)?.label ?? id;
}

function evidenceIsStale(
  requirement: SaasSecurityRequirementInput,
  evaluationDate: string,
) {
  if (!isIsoDate(evaluationDate)) return false;
  if (requirement.changedSinceEvidence) return true;
  if (
    isIsoDate(requirement.reviewDueDate) &&
    requirement.reviewDueDate < evaluationDate
  ) {
    return true;
  }
  return false;
}

function evidenceIsAdequate(
  requirement: SaasSecurityRequirementInput,
  evaluationDate: string,
) {
  if (requirement.status !== "proven") return false;
  if (
    !["document", "execution-trace", "tested", "independent"].includes(
      requirement.evidenceKind,
    )
  ) {
    return false;
  }
  if (requirement.evidenceScope !== "exact") return false;
  if (cleanSingleLine(requirement.evidenceReference).length < 4) return false;
  if (cleanSingleLine(requirement.evidenceResult).length < 12) return false;
  if (cleanSingleLine(requirement.evidenceInvalidationTrigger).length < 12) {
    return false;
  }
  if (!requirement.freshnessConfirmed) return false;
  if (!cleanSingleLine(requirement.ownerRole)) return false;
  if (!isIsoDate(requirement.evidenceDate)) return false;
  if (!isIsoDate(requirement.reviewDueDate)) return false;
  if (evidenceIsStale(requirement, evaluationDate)) return false;
  if (
    requirement.importance === "critical" &&
    !["execution-trace", "tested", "independent"].includes(
      requirement.evidenceKind,
    )
  ) {
    return false;
  }
  return true;
}

function requirementNeedsWork(
  requirement: SaasSecurityRequirementInput,
  evaluationDate: string,
) {
  if (requirement.status === "not-applicable") return false;
  return !evidenceIsAdequate(requirement, evaluationDate);
}

export function createEmptySaasSecurityAssessment(): SaasSecurityAssessment {
  return {
    context: {
      reference: "",
      productScope: "",
      observationDate: "",
      signatureDate: "",
      weeklyCapacityHours: null,
      safetyMarginPercent: 25,
      riskApproverRole: "",
      buyerRequirementsComplete: false,
      remediationWorkComplete: false,
    },
    requirements: SAAS_SECURITY_REQUIREMENT_TEMPLATES.map((template) => ({
      id: template.id,
      label: template.label,
      buyerRequirement: "",
      nature: "unknown",
      importance: SAAS_SECURITY_CRITICAL_CONTROL_IDS.includes(
        template.id as (typeof SAAS_SECURITY_CRITICAL_CONTROL_IDS)[number],
      )
        ? "critical"
        : "unknown",
      status: "unknown",
      evidenceKind: "none",
      evidenceScope: "unknown",
      evidenceReference: "",
      evidenceResult: "",
      evidenceInvalidationTrigger: "",
      freshnessConfirmed: false,
      evidenceDate: "",
      reviewDueDate: "",
      changedSinceEvidence: false,
      residualRisk: "unknown",
      ownerRole: "",
      remediationHours: null,
      targetDate: "",
      nextAction: "",
      disposition: "unknown",
      internalAcceptance: false,
      internalAcceptanceReference: "",
      internalAcceptanceDate: "",
      buyerAcceptance: false,
      buyerAcceptanceReference: "",
      buyerAcceptanceDate: "",
      temporaryMeasure: "",
      reportabilityBasis: "",
      fundingConfirmed: false,
      fundingReference: "",
      fundingDate: "",
      notApplicableReason: "",
    })),
  };
}

export function createFictitiousSaasSecurityAssessment(
  evaluationDate: string,
): SaasSecurityAssessment {
  if (!isIsoDate(evaluationDate)) {
    throw new Error(
      "Une date locale d’évaluation valide est requise pour charger l’exemple fictif.",
    );
  }

  const dateAt = (offsetDays: number) =>
    addDaysToIsoDate(evaluationDate, offsetDays);
  const assessment = createEmptySaasSecurityAssessment();
  assessment.context = {
    reference: "EXEMPLE-SAAS-FICTIF-01",
    productScope:
      "Entreprise A — service documentaire entièrement fictif, production France",
    observationDate: evaluationDate,
    signatureDate: dateAt(28),
    weeklyCapacityHours: 20,
    safetyMarginPercent: 25,
    riskApproverRole: "Direction générale",
    buyerRequirementsComplete: true,
    remediationWorkComplete: true,
  };

  const example: Record<
    SaasSecurityRequirementId,
    Partial<SaasSecurityRequirementInput>
  > = {
    "privileged-access": {
      buyerRequirement: "Prouver les accès administrateurs et d’urgence",
      nature: "contractual",
      importance: "critical",
      status: "partial",
      evidenceKind: "document",
      evidenceScope: "exact",
      evidenceReference: "REG-ACC-EXEMPLE-01",
      evidenceResult:
        "La procédure existe, mais un compte historique reste à fermer et à contre-tester.",
      evidenceDate: dateAt(-37),
      reviewDueDate: dateAt(55),
      residualRisk: "high",
      ownerRole: "Responsable technique",
      remediationHours: 24,
      targetDate: dateAt(11),
      nextAction:
        "Fermer les comptes inutiles et contre-tester les accès d’urgence.",
      disposition: "fix-before-signature",
    },
    "tenant-separation": {
      buyerRequirement:
        "Démontrer qu’un client ne peut pas lire les données d’un autre",
      nature: "contractual",
      importance: "critical",
      status: "absent",
      evidenceKind: "none",
      evidenceScope: "exact",
      evidenceReference: "TEST-ISOLEMENT-A-PLANIFIER",
      evidenceResult:
        "Aucun test complet n’a encore couvert interface, API, exports et tâches asynchrones.",
      residualRisk: "critical",
      ownerRole: "Équipe produit",
      remediationHours: 36,
      targetDate: dateAt(15),
      nextAction:
        "Tester interface, API, exports, pièces jointes et tâches asynchrones.",
      disposition: "fix-before-signature",
    },
    restoration: {
      buyerRequirement: "Fournir le résultat du dernier essai de restauration",
      nature: "contractual",
      importance: "critical",
      status: "partial",
      evidenceKind: "execution-trace",
      evidenceScope: "partial",
      evidenceReference: "RESTORE-EXEMPLE-01",
      evidenceResult:
        "La base a été relevée, mais la validation fonctionnelle et les dépendances n’ont pas été rejouées.",
      evidenceDate: dateAt(-50),
      reviewDueDate: dateAt(42),
      residualRisk: "high",
      ownerRole: "Responsable exploitation",
      remediationHours: 20,
      targetDate: dateAt(17),
      nextAction: "Rejouer la reprise jusqu’à la validation fonctionnelle.",
      disposition: "fix-before-signature",
    },
    "software-security": {
      buyerRequirement: "Montrer le suivi des dépendances et vulnérabilités",
      nature: "buyer-preference",
      importance: "critical",
      status: "partial",
      evidenceKind: "document",
      evidenceScope: "partial",
      evidenceReference: "PROC-VULN-EXEMPLE-01",
      evidenceResult:
        "La qualification initiale est documentée ; les contre-tests et la recherche de variantes restent incomplets.",
      evidenceDate: dateAt(-45),
      reviewDueDate: dateAt(47),
      residualRisk: "moderate",
      ownerRole: "Équipe développement",
      remediationHours: 16,
      targetDate: dateAt(19),
      nextAction: "Qualifier les alertes et documenter les contre-tests.",
      disposition: "fix-before-signature",
    },
    "incident-response": {
      buyerRequirement: "Prouver l’escalade et les personnes joignables",
      nature: "contractual",
      importance: "critical",
      status: "partial",
      evidenceKind: "document",
      evidenceScope: "exact",
      evidenceReference: "PROC-INC-EXEMPLE-01",
      evidenceResult:
        "Les rôles sont nommés, mais l’escalade et la fiche d’appel n’ont pas été exercées.",
      evidenceDate: dateAt(-35),
      reviewDueDate: dateAt(57),
      residualRisk: "moderate",
      ownerRole: "Direction technique",
      remediationHours: 24,
      targetDate: dateAt(21),
      nextAction: "Exécuter un exercice et corriger la fiche d’appel.",
      disposition: "fix-before-signature",
    },
    "formal-assurance": {
      buyerRequirement:
        "Aucune certification, aucun rapport ni audit formel exigé pour cet exemple",
      nature: "buyer-preference",
      importance: "non-critical",
      status: "not-applicable",
      evidenceKind: "document",
      evidenceScope: "exact",
      evidenceReference: "EXIGENCE-ACHAT-EXEMPLE-01",
      evidenceResult:
        "Le scénario fictif ne contient aucune certification ni aucun rapport formel requis à la signature.",
      evidenceDate: dateAt(-30),
      reviewDueDate: dateAt(62),
      residualRisk: "low",
      ownerRole: "Direction commerciale",
      remediationHours: 0,
      targetDate: evaluationDate,
      nextAction:
        "Requalifier cette condition si l’acheteur modifie ses exigences.",
      disposition: "keep-as-is",
      notApplicableReason:
        "Le scénario fictif ne comporte aucune autre exigence d’assurance indépendante.",
    },
  };

  assessment.requirements = assessment.requirements.map((requirement) => {
    const merged = {
      ...requirement,
      ...example[requirement.id],
    };
    const hasEvidence = merged.evidenceKind !== "none";
    return {
      ...merged,
      evidenceInvalidationTrigger: hasEvidence
        ? "Changement de version, de flux, de fournisseur ou du contrôle observé."
        : "",
      freshnessConfirmed: hasEvidence,
    };
  });
  return assessment;
}

export function cloneSaasSecurityAssessment(
  assessment: SaasSecurityAssessment,
): SaasSecurityAssessment {
  return {
    context: { ...assessment.context },
    requirements: assessment.requirements.map((requirement) => ({
      ...requirement,
    })),
  };
}

export function validateSaasSecurityAssessment(
  assessment: SaasSecurityAssessment,
  evaluationDate: string,
): SaasSecurityAssessmentIssue[] {
  const issues: SaasSecurityAssessmentIssue[] = [];
  const { context } = assessment;
  const expectedRequirementIds = SAAS_SECURITY_REQUIREMENT_TEMPLATES.map(
    (template) => template.id,
  );
  const actualRequirementIds = assessment.requirements.map(
    (requirement) => requirement.id,
  );

  if (
    actualRequirementIds.length !== expectedRequirementIds.length ||
    new Set(actualRequirementIds).size !== expectedRequirementIds.length ||
    expectedRequirementIds.some((id) => !actualRequirementIds.includes(id))
  ) {
    issues.push({
      code: "invalid-requirements",
      message:
        "Le registre doit contenir exactement les cinq contrôles essentiels et la famille des autres exigences.",
    });
  }

  if (
    !cleanSingleLine(context.reference) ||
    !cleanSingleLine(context.productScope) ||
    !cleanSingleLine(context.riskApproverRole)
  ) {
    issues.push({
      code: "missing-context",
      message:
        "Indiquez une référence interne, le périmètre vendu et la fonction qui accepte le risque restant.",
    });
  }

  if (!context.buyerRequirementsComplete) {
    issues.push({
      code: "incomplete-buyer-list",
      message:
        "Confirmez que toutes les demandes de l’acheteur ont été recensées et rattachées aux six familles.",
    });
  }

  if (!context.remediationWorkComplete) {
    issues.push({
      code: "incomplete-workload",
      message:
        "Confirmez que chaque charge additionne toutes les corrections et tous les contre-tests encore ouverts dans sa famille.",
    });
  }

  if (!isIsoDate(evaluationDate)) {
    issues.push({
      code: "invalid-date",
      message: "La date locale d’évaluation de l’atelier est indisponible.",
    });
  }

  for (const [value, label] of [
    [context.observationDate, "date d’observation"],
    [context.signatureDate, "date limite de signature"],
  ] as const) {
    if (!isIsoDate(value)) {
      issues.push({
        code: "invalid-date",
        message: `Indiquez une ${label} valide.`,
      });
    }
  }

  if (
    isIsoDate(context.observationDate) &&
    isIsoDate(evaluationDate) &&
    context.observationDate > evaluationDate
  ) {
    issues.push({
      code: "future-observation",
      message:
        "La date d’observation ne peut pas être postérieure à la date locale d’évaluation.",
    });
  }

  if (
    isIsoDate(context.signatureDate) &&
    isIsoDate(evaluationDate) &&
    context.signatureDate < evaluationDate
  ) {
    issues.push({
      code: "expired-signature-date",
      message:
        "La date limite de signature est passée : actualisez le dossier avant de décider.",
    });
  }

  if (
    isIsoDate(context.observationDate) &&
    isIsoDate(context.signatureDate) &&
    context.signatureDate < context.observationDate
  ) {
    issues.push({
      code: "signature-before-observation",
      message:
        "La date limite de signature ne peut pas précéder la date de l’observation.",
    });
  }

  if (
    context.weeklyCapacityHours === null ||
    !Number.isFinite(context.weeklyCapacityHours) ||
    context.weeklyCapacityHours < 0 ||
    context.weeklyCapacityHours > SAAS_SECURITY_MAX_DECLARED_HOURS
  ) {
    issues.push({
      code: "invalid-capacity",
      message:
        "Indiquez une capacité nette comprise entre zéro et un million d’heures par semaine. Au-delà, fractionnez le dossier ou utilisez un modèle de capacité dédié.",
    });
  }

  if (
    context.safetyMarginPercent === null ||
    !Number.isFinite(context.safetyMarginPercent) ||
    context.safetyMarginPercent < 0 ||
    context.safetyMarginPercent > 100
  ) {
    issues.push({
      code: "invalid-margin",
      message: "La marge de prudence doit être comprise entre 0 % et 100 %.",
    });
  }

  for (const requirement of assessment.requirements) {
    if (
      !requirementNeedsWork(requirement, evaluationDate) &&
      (requirement.disposition === "condition-after-signature" ||
        (requirement.disposition === "fix-before-signature" &&
          (requirement.status === "not-applicable" ||
            requirement.residualRisk === "low")))
    ) {
      issues.push({
        code: "inconsistent-disposition",
        message: `${requirement.label} : la pièce actuelle et suffisante contredit le choix d’une correction ou d’un plan. Modifiez l’état, la pièce ou la décision.`,
        requirementId: requirement.id,
      });
    }

    if (
      SAAS_SECURITY_CRITICAL_CONTROL_IDS.includes(
        requirement.id as (typeof SAAS_SECURITY_CRITICAL_CONTROL_IDS)[number],
      ) &&
      requirement.importance !== "critical"
    ) {
      issues.push({
        code: "downgraded-critical-control",
        message: `${requirement.label} : ce contrôle essentiel ne peut pas être reclassé comme reportable par cet atelier.`,
        requirementId: requirement.id,
      });
    }

    if (
      requirement.nature === "applicable-obligation" &&
      requirement.disposition === "condition-after-signature"
    ) {
      issues.push({
        code: "non-reportable-obligation",
        message: `${requirement.label} : cet atelier ne peut pas décider qu’une obligation légale ou sectorielle applicable est reportable après la signature. Faites-la qualifier par la personne compétente, satisfaites-la avant de signer ou renégociez/refusez le périmètre.`,
        requirementId: requirement.id,
      });
    }

    if (
      requirement.nature === "applicable-obligation" &&
      requirement.status === "not-applicable"
    ) {
      issues.push({
        code: "applicable-obligation-dismissed",
        message: `${requirement.label} : une obligation déclarée applicable ne peut pas être simultanément écartée comme non applicable. Corrigez la qualification avec la personne compétente.`,
        requirementId: requirement.id,
      });
    }

    if (
      requirement.nature === "independent-assurance" &&
      requirement.status === "not-applicable"
    ) {
      issues.push({
        code: "independent-assurance-dismissed",
        message: `${requirement.label} : une certification, un audit ou un rapport indépendant déclaré exigé ne peut pas être écarté par une simple justification interne. Obtenez la pièce exacte ou renégociez/refusez l’exigence.`,
        requirementId: requirement.id,
      });
    }

    if (
      requirement.id === "formal-assurance" &&
      requirement.importance === "critical" &&
      requirement.status === "not-applicable" &&
      requirement.disposition !== "renegotiate-or-refuse"
    ) {
      issues.push({
        code: "critical-requirement-dismissed",
        message:
          "Autre exigence : un point déclaré indispensable avant signature ne peut pas être écarté unilatéralement comme non applicable. Faites confirmer l’exigence, corrigez la qualification ou renégociez/refusez le périmètre.",
        requirementId: requirement.id,
      });
    }

    if (
      requirement.nature === "independent-assurance" &&
      requirement.status === "proven" &&
      requirement.evidenceKind !== "independent"
    ) {
      issues.push({
        code: "insufficient-formal-evidence",
        message: `${requirement.label} : une certification, un audit ou un rapport indépendant déclaré satisfait doit être relié au document ou à l’examen indépendant exact qui le prouve.`,
        requirementId: requirement.id,
      });
    }

    if (
      SAAS_SECURITY_CRITICAL_CONTROL_IDS.includes(
        requirement.id as (typeof SAAS_SECURITY_CRITICAL_CONTROL_IDS)[number],
      ) &&
      requirement.status === "not-applicable"
    ) {
      issues.push({
        code: "essential-control-not-applicable",
        message: `${requirement.label} : ce contrôle essentiel doit être démontré sur l’architecture vendue et ne peut pas être écarté comme non applicable.`,
        requirementId: requirement.id,
      });
    }

    if (
      !cleanSingleLine(requirement.buyerRequirement) ||
      !cleanSingleLine(requirement.ownerRole) ||
      (requirement.status === "proven" &&
        (!cleanSingleLine(requirement.evidenceReference) ||
          cleanSingleLine(requirement.evidenceResult).length < 12 ||
          cleanSingleLine(requirement.evidenceInvalidationTrigger).length <
            12 ||
          !requirement.freshnessConfirmed))
    ) {
      issues.push({
        code: "missing-requirement-details",
        message: `${requirement.label} : indiquez la demande, la fonction responsable et, si le contrôle est prouvé, la référence et le résultat de la pièce.`,
        requirementId: requirement.id,
      });
    }

    if (
      requirement.remediationHours !== null &&
      (!Number.isFinite(requirement.remediationHours) ||
        requirement.remediationHours < 0 ||
        requirement.remediationHours > SAAS_SECURITY_MAX_DECLARED_HOURS)
    ) {
      issues.push({
        code: "invalid-hours",
        message: `${requirement.label} : la charge doit être comprise entre zéro et un million d’heures. Au-delà, fractionnez le dossier ou utilisez un modèle de capacité dédié.`,
        requirementId: requirement.id,
      });
    }

    if (
      ["fix-before-signature", "condition-after-signature"].includes(
        requirement.disposition,
      ) &&
      requirement.remediationHours !== null &&
      (!Number.isFinite(requirement.remediationHours) ||
        requirement.remediationHours < SAAS_SECURITY_MIN_PLANNED_HOURS)
    ) {
      issues.push({
        code: "invalid-hours",
        message: `${requirement.label} : une correction ou un contre-test encore ouvert exige une charge d’au moins 0,01 heure ; une charge inconnue reste vide et ne vaut pas zéro.`,
        requirementId: requirement.id,
      });
    }

    if (
      isIsoDate(requirement.evidenceDate) &&
      isIsoDate(context.observationDate) &&
      requirement.evidenceDate > context.observationDate
    ) {
      issues.push({
        code: "future-evidence",
        message: `${requirement.label} : une pièce future ne peut pas prouver l’état observé.`,
        requirementId: requirement.id,
      });
    }

    if (
      isIsoDate(requirement.evidenceDate) &&
      isIsoDate(requirement.reviewDueDate) &&
      requirement.reviewDueDate < requirement.evidenceDate
    ) {
      issues.push({
        code: "review-before-evidence",
        message: `${requirement.label} : la prochaine revue ne peut pas précéder la pièce.`,
        requirementId: requirement.id,
      });
    }

    if (
      requirement.targetDate &&
      (!isIsoDate(requirement.targetDate) ||
        (isIsoDate(context.observationDate) &&
          requirement.targetDate < context.observationDate) ||
        (isIsoDate(evaluationDate) &&
          ["fix-before-signature", "condition-after-signature"].includes(
            requirement.disposition,
          ) &&
          (requirementNeedsWork(requirement, evaluationDate) ||
            requirement.disposition === "fix-before-signature") &&
          requirement.targetDate < evaluationDate))
    ) {
      issues.push({
        code: "invalid-target-date",
        message: `${requirement.label} : une correction encore ouverte exige une échéance valide, à la date de décision ou après.`,
        requirementId: requirement.id,
      });
    }

    if (
      requirement.status === "not-applicable" &&
      (cleanSingleLine(requirement.notApplicableReason).length < 20 ||
        !["document", "execution-trace", "tested", "independent"].includes(
          requirement.evidenceKind,
        ) ||
        requirement.evidenceScope !== "exact" ||
        !isIsoDate(requirement.evidenceDate) ||
        !isIsoDate(requirement.reviewDueDate) ||
        evidenceIsStale(requirement, evaluationDate) ||
        cleanSingleLine(requirement.evidenceReference).length < 4 ||
        cleanSingleLine(requirement.evidenceResult).length < 12 ||
        cleanSingleLine(requirement.evidenceInvalidationTrigger).length < 12 ||
        !requirement.freshnessConfirmed ||
        !cleanSingleLine(requirement.ownerRole))
    ) {
      issues.push({
        code: "unjustified-not-applicable",
        message: `${requirement.label} : un statut non applicable exige une justification précise, une pièce actuelle sur le périmètre exact, son résultat et une fonction responsable.`,
        requirementId: requirement.id,
      });
    }
  }

  return issues;
}

function calculateCapacity(
  assessment: SaasSecurityAssessment,
  evaluationDate: string,
): SaasSecurityCapacity {
  const { context, requirements } = assessment;
  if (
    !isIsoDate(evaluationDate) ||
    !isIsoDate(context.observationDate) ||
    !isIsoDate(context.signatureDate) ||
    context.signatureDate < context.observationDate ||
    context.signatureDate < evaluationDate ||
    context.weeklyCapacityHours === null ||
    context.safetyMarginPercent === null ||
    !Number.isFinite(context.weeklyCapacityHours) ||
    !Number.isFinite(context.safetyMarginPercent) ||
    context.weeklyCapacityHours < 0 ||
    context.weeklyCapacityHours > SAAS_SECURITY_MAX_DECLARED_HOURS ||
    context.safetyMarginPercent < 0 ||
    context.safetyMarginPercent > 100
  ) {
    return {
      status: "unknown",
      calendarDays: null,
      baseHours: null,
      prudentHours: null,
      availableHours: null,
      gapHours: null,
    };
  }

  const work = requirements.filter(
    (requirement) =>
      requirement.disposition === "fix-before-signature" ||
      (requirementNeedsWork(requirement, evaluationDate) &&
        requirement.disposition !== "condition-after-signature"),
  );
  if (work.some((requirement) => requirement.remediationHours === null)) {
    const calendarDays = daysBetweenIsoDates(
      evaluationDate,
      context.signatureDate,
    );
    const availableHours = (context.weeklyCapacityHours * calendarDays) / 7;
    return {
      status: "unknown",
      calendarDays,
      baseHours: null,
      prudentHours: null,
      availableHours: Number.isFinite(availableHours) ? availableHours : null,
      gapHours: null,
    };
  }

  const baseHours = work.reduce(
    (sum, requirement) => sum + (requirement.remediationHours ?? 0),
    0,
  );
  const prudentHours = baseHours * (1 + context.safetyMarginPercent / 100);
  const calendarDays = daysBetweenIsoDates(
    evaluationDate,
    context.signatureDate,
  );
  const availableHours = (context.weeklyCapacityHours * calendarDays) / 7;
  const gapHours = availableHours - prudentHours;

  if (
    ![baseHours, prudentHours, calendarDays, availableHours, gapHours].every(
      Number.isFinite,
    )
  ) {
    return {
      status: "unknown",
      calendarDays: Number.isFinite(calendarDays) ? calendarDays : null,
      baseHours: Number.isFinite(baseHours) ? baseHours : null,
      prudentHours: null,
      availableHours: null,
      gapHours: null,
    };
  }

  return {
    status: gapHours >= 0 ? "available" : "deficit",
    calendarDays,
    baseHours,
    prudentHours,
    availableHours,
    gapHours,
  };
}

function calculateDeferredCapacities(
  assessment: SaasSecurityAssessment,
): SaasSecurityDeferredCapacity[] {
  const { context } = assessment;
  const deferred = assessment.requirements
    .filter(
      (requirement) =>
        requirement.importance === "non-critical" &&
        requirement.disposition === "condition-after-signature" &&
        ["partial", "absent"].includes(requirement.status),
    )
    .sort((left, right) => left.targetDate.localeCompare(right.targetDate));

  let cumulativeBaseHours = 0;
  return deferred.map((requirement) => {
    const datesAreUsable =
      isIsoDate(context.signatureDate) &&
      isIsoDate(requirement.targetDate) &&
      requirement.targetDate > context.signatureDate;
    const inputsAreUsable =
      datesAreUsable &&
      context.weeklyCapacityHours !== null &&
      Number.isFinite(context.weeklyCapacityHours) &&
      context.weeklyCapacityHours >= 0 &&
      context.weeklyCapacityHours <= SAAS_SECURITY_MAX_DECLARED_HOURS &&
      context.safetyMarginPercent !== null &&
      Number.isFinite(context.safetyMarginPercent) &&
      context.safetyMarginPercent >= 0 &&
      context.safetyMarginPercent <= 100 &&
      requirement.remediationHours !== null &&
      Number.isFinite(requirement.remediationHours) &&
      requirement.remediationHours >= SAAS_SECURITY_MIN_PLANNED_HOURS &&
      requirement.remediationHours <= SAAS_SECURITY_MAX_DECLARED_HOURS;

    if (!inputsAreUsable) {
      return {
        requirementId: requirement.id,
        targetDate: requirement.targetDate,
        status: "unknown" as const,
        calendarDays: datesAreUsable
          ? daysBetweenIsoDates(context.signatureDate, requirement.targetDate)
          : null,
        cumulativePrudentHours: null,
        availableHours: null,
        gapHours: null,
      };
    }

    cumulativeBaseHours += requirement.remediationHours ?? 0;
    const cumulativePrudentHours =
      cumulativeBaseHours * (1 + (context.safetyMarginPercent ?? 0) / 100);
    const calendarDays = daysBetweenIsoDates(
      context.signatureDate,
      requirement.targetDate,
    );
    const availableHours =
      (context.weeklyCapacityHours ?? 0) * (calendarDays / 7);
    const gapHours = availableHours - cumulativePrudentHours;

    if (
      ![
        cumulativeBaseHours,
        cumulativePrudentHours,
        calendarDays,
        availableHours,
        gapHours,
      ].every(Number.isFinite)
    ) {
      return {
        requirementId: requirement.id,
        targetDate: requirement.targetDate,
        status: "unknown" as const,
        calendarDays: Number.isFinite(calendarDays) ? calendarDays : null,
        cumulativePrudentHours: null,
        availableHours: null,
        gapHours: null,
      };
    }

    return {
      requirementId: requirement.id,
      targetDate: requirement.targetDate,
      status: gapHours >= 0 ? ("available" as const) : ("deficit" as const),
      calendarDays,
      cumulativePrudentHours,
      availableHours,
      gapHours,
    };
  });
}

export function evaluateSaasSecurityAssessment(
  assessment: SaasSecurityAssessment,
  evaluationDate: string,
): SaasSecurityDecisionResult {
  const issues = validateSaasSecurityAssessment(assessment, evaluationDate);
  const { context, requirements } = assessment;
  const capacity = calculateCapacity(assessment, evaluationDate);
  const deferredCapacities = calculateDeferredCapacities(assessment);
  const staleEvidenceIds = requirements
    .filter((requirement) => evidenceIsStale(requirement, evaluationDate))
    .map((requirement) => requirement.id);
  const unknownRequirementIds = requirements
    .filter(
      (requirement) =>
        requirement.nature === "unknown" ||
        requirement.importance === "unknown" ||
        requirement.status === "unknown" ||
        requirement.residualRisk === "unknown" ||
        requirement.disposition === "unknown",
    )
    .map((requirement) => requirement.id);
  const blockingRequirementIds = requirements
    .filter((requirement) => {
      const missingProof = requirementNeedsWork(requirement, evaluationDate);
      return (
        ["high", "critical"].includes(requirement.residualRisk) ||
        (requirement.importance === "critical" && missingProof) ||
        (requirement.importance === "important" &&
          ["partial", "absent"].includes(requirement.status)) ||
        requirement.disposition === "fix-before-signature"
      );
    })
    .map((requirement) => requirement.id);
  const conditionalRequirementIds = requirements
    .filter(
      (requirement) =>
        requirement.importance === "non-critical" &&
        requirement.disposition === "condition-after-signature" &&
        ["partial", "absent"].includes(requirement.status),
    )
    .map((requirement) => requirement.id);

  const triggers: string[] = [];
  const nextActions: string[] = [];

  function buildResult(code: SaasSecurityDecisionCode) {
    return {
      code,
      ...DECISION_COPY[code],
      valid: issues.length === 0,
      issues,
      triggers,
      nextActions: nextActions.slice(0, 3),
      capacity,
      staleEvidenceIds,
      unknownRequirementIds,
      blockingRequirementIds,
      conditionalRequirementIds,
      deferredCapacities,
      evaluationDate,
    };
  }

  if (issues.length > 0) {
    triggers.push(...issues.map((issue) => issue.message));
    nextActions.push(
      "Corriger les dates, le périmètre, la capacité et les justifications signalées.",
    );
    return buildResult("incomplete");
  }

  const explicitlyRefused = requirements.filter(
    (requirement) => requirement.disposition === "renegotiate-or-refuse",
  );
  if (explicitlyRefused.length > 0) {
    triggers.push(
      ...explicitlyRefused.map(
        (requirement) =>
          `${requirement.label} : renégociation ou refus choisi dans le dossier.`,
      ),
    );
    nextActions.push(
      "Faire confirmer l’exigence par la personne compétente.",
      "Réduire ou renégocier le périmètre proposé.",
      "Refuser de revendiquer la mesure si elle ne sera pas mise en œuvre.",
    );
    return buildResult("refuse-or-renegotiate");
  }

  if (unknownRequirementIds.length > 0) {
    triggers.push(
      ...requirements
        .filter((requirement) => unknownRequirementIds.includes(requirement.id))
        .map(
          (requirement) => `${requirement.label} : qualification incomplète.`,
        ),
    );
    nextActions.push(
      "Nommer la nature et l’importance de chaque exigence.",
      "Retrouver le fait, la pièce et le risque restant.",
      "Faire qualifier les obligations par la personne compétente.",
    );
    return buildResult("postpone-and-qualify");
  }

  if (staleEvidenceIds.length > 0) {
    triggers.push(
      ...requirements
        .filter((requirement) => staleEvidenceIds.includes(requirement.id))
        .map(
          (requirement) =>
            `${requirement.label} : pièce périmée ou invalidée par un changement.`,
        ),
    );
    nextActions.push(
      "Rejouer le contrôle sur le périmètre actuel.",
      "Dater le résultat et sa prochaine revue.",
    );
    return buildResult("postpone-and-qualify");
  }

  if (
    blockingRequirementIds.length > 0 &&
    (capacity.status !== "available" ||
      requirements
        .filter((requirement) =>
          blockingRequirementIds.includes(requirement.id),
        )
        .some(
          (requirement) =>
            requirement.disposition !== "fix-before-signature" ||
            !cleanSingleLine(requirement.ownerRole) ||
            !cleanSingleLine(requirement.nextAction) ||
            !isIsoDate(requirement.targetDate) ||
            requirement.targetDate > context.signatureDate,
        ))
  ) {
    triggers.push(
      ...requirements
        .filter((requirement) =>
          blockingRequirementIds.includes(requirement.id),
        )
        .map(
          (requirement) => `${requirement.label} : blocage avant signature.`,
        ),
    );
    if (capacity.status === "deficit" && capacity.gapHours !== null) {
      triggers.push(
        `La capacité manque de ${formatNumber(Math.abs(capacity.gapHours))} h avant la date déclarée.`,
      );
    } else if (capacity.status === "unknown") {
      triggers.push("La charge totale avant signature reste inconnue.");
    }
    nextActions.push(
      "Réduire le périmètre, ajouter une capacité confirmée ou décaler la signature.",
      "Attribuer chaque correction et son contre-test.",
      "Ne pas demander au client d’accepter un risque critique à la place de l’entreprise.",
    );
    return buildResult("postpone-and-qualify");
  }

  if (blockingRequirementIds.length > 0) {
    triggers.push(
      ...requirements
        .filter((requirement) =>
          blockingRequirementIds.includes(requirement.id),
        )
        .map(
          (requirement) =>
            `${requirement.label} : correction et contre-test requis.`,
        ),
    );
    nextActions.push(
      "Exécuter les corrections dans l’ordre de gravité.",
      "Conserver le résultat du contre-test et ses limites.",
      "Faire accepter le risque restant par l’autorité interne compétente.",
    );
    return buildResult("fix-before-signing");
  }

  if (conditionalRequirementIds.length > 0) {
    const conditionalRequirements = requirements.filter((requirement) =>
      conditionalRequirementIds.includes(requirement.id),
    );
    const conditionalProblems: string[] = [];

    for (const requirement of conditionalRequirements) {
      if (!["low", "moderate"].includes(requirement.residualRisk)) {
        conditionalProblems.push(
          `${requirement.label} : le risque restant est trop élevé pour être reporté.`,
        );
      }
      if (cleanSingleLine(requirement.temporaryMeasure).length < 12) {
        conditionalProblems.push(
          `${requirement.label} : la mesure temporaire vérifiable n’est pas décrite.`,
        );
      }
      if (cleanSingleLine(requirement.reportabilityBasis).length < 12) {
        conditionalProblems.push(
          `${requirement.label} : le caractère reportable de l’écart n’est pas justifié.`,
        );
      }
      if (!requirement.fundingConfirmed) {
        conditionalProblems.push(
          `${requirement.label} : le financement du plan n’est pas confirmé.`,
        );
      } else if (
        cleanSingleLine(requirement.fundingReference).length < 4 ||
        !isIsoDate(requirement.fundingDate) ||
        requirement.fundingDate < context.observationDate ||
        requirement.fundingDate > evaluationDate
      ) {
        conditionalProblems.push(
          `${requirement.label} : la confirmation de financement exige une référence et une date comprise entre l’observation et la décision.`,
        );
      }
      if (!requirement.internalAcceptance) {
        conditionalProblems.push(
          `${requirement.label} : l’autorité interne n’a pas accepté le risque restant.`,
        );
      } else if (
        cleanSingleLine(requirement.internalAcceptanceReference).length < 4 ||
        !isIsoDate(requirement.internalAcceptanceDate) ||
        requirement.internalAcceptanceDate < context.observationDate ||
        requirement.internalAcceptanceDate > evaluationDate
      ) {
        conditionalProblems.push(
          `${requirement.label} : l’acceptation interne exige une référence et une date comprise entre l’observation et la décision.`,
        );
      }
      if (!requirement.buyerAcceptance) {
        conditionalProblems.push(
          `${requirement.label} : l’acheteur n’a pas accepté le plan par écrit.`,
        );
      } else if (
        cleanSingleLine(requirement.buyerAcceptanceReference).length < 4 ||
        !isIsoDate(requirement.buyerAcceptanceDate) ||
        requirement.buyerAcceptanceDate < context.observationDate ||
        requirement.buyerAcceptanceDate > evaluationDate
      ) {
        conditionalProblems.push(
          `${requirement.label} : l’accord écrit de l’acheteur exige une référence et une date comprise entre l’observation et la décision.`,
        );
      }
      if (!cleanSingleLine(requirement.ownerRole)) {
        conditionalProblems.push(
          `${requirement.label} : aucune fonction responsable n’est nommée.`,
        );
      }
      if (!cleanSingleLine(requirement.nextAction)) {
        conditionalProblems.push(
          `${requirement.label} : la correction et son contre-test ne sont pas décrits.`,
        );
      }
      if (
        !isIsoDate(requirement.targetDate) ||
        requirement.targetDate <= context.signatureDate
      ) {
        conditionalProblems.push(
          `${requirement.label} : l’échéance d’un plan après signature doit être strictement postérieure à la signature.`,
        );
      }
    }

    for (const deferredCapacity of deferredCapacities) {
      const requirement = requirements.find(
        (item) => item.id === deferredCapacity.requirementId,
      );
      if (deferredCapacity.status === "unknown") {
        conditionalProblems.push(
          `${requirement?.label ?? deferredCapacity.requirementId} : la capacité entre la signature et l’échéance reste inconnue.`,
        );
      }
      if (
        deferredCapacity.status === "deficit" &&
        deferredCapacity.gapHours !== null
      ) {
        conditionalProblems.push(
          `${requirement?.label ?? deferredCapacity.requirementId} : il manque ${formatNumber(Math.abs(deferredCapacity.gapHours))} h avant l’échéance du plan.`,
        );
      }
    }

    if (conditionalProblems.length > 0) {
      triggers.push(...conditionalProblems);
      nextActions.push(
        "Décrire la mesure temporaire et la base qui autorise réellement le report.",
        "Confirmer le financement, le responsable et le résultat qui fermera l’écart.",
        "Faire valider le risque restant en interne.",
      );
      return buildResult("postpone-and-qualify");
    }

    triggers.push(
      ...conditionalRequirements.map(
        (requirement) =>
          `${requirement.label} : écart non critique, reportable, couvert et financé.`,
      ),
    );
    nextActions.push(
      "Joindre la mesure temporaire et l’échéance au contrat.",
      "Conserver les deux acceptations et la personne responsable.",
      "Rejouer le contrôle avant de fermer l’écart.",
    );
    return buildResult("sign-with-conditions");
  }

  const inadequateEvidence = requirements.filter(
    (requirement) =>
      requirement.status !== "not-applicable" &&
      !evidenceIsAdequate(requirement, evaluationDate),
  );
  if (inadequateEvidence.length > 0) {
    triggers.push(
      ...inadequateEvidence.map(
        (requirement) =>
          `${requirement.label} : la pièce ne prouve pas le contrôle sur le périmètre vendu.`,
      ),
    );
    nextActions.push(
      "Obtenir une pièce actuelle sur le périmètre exact.",
      "Tester les contrôles indispensables plutôt que déduire leur efficacité d’une politique.",
    );
    return buildResult("postpone-and-qualify");
  }

  const unacceptedModerateRisk = requirements.filter(
    (requirement) =>
      requirement.residualRisk === "moderate" &&
      (!requirement.internalAcceptance ||
        cleanSingleLine(requirement.internalAcceptanceReference).length < 4 ||
        !isIsoDate(requirement.internalAcceptanceDate) ||
        requirement.internalAcceptanceDate < context.observationDate ||
        requirement.internalAcceptanceDate > evaluationDate),
  );
  if (unacceptedModerateRisk.length > 0) {
    triggers.push(
      ...unacceptedModerateRisk.map(
        (requirement) =>
          `${requirement.label} : le risque modéré restant n’a pas d’acceptation interne datée et référencée.`,
      ),
    );
    nextActions.push(
      "Faire décider le risque restant par l’autorité interne compétente.",
      "Conserver la référence et la date de cette décision.",
    );
    return buildResult("postpone-and-qualify");
  }

  triggers.push(
    "Aucun contrôle indispensable déclaré ne reste inconnu, en échec ou couvert par une pièce hors périmètre.",
  );
  nextActions.push(
    "Répondre uniquement sur le périmètre vérifié.",
    "Prévoir la prochaine revue après un changement significatif.",
    "Conserver les exceptions et limites dans le dossier transmis.",
  );
  return buildResult("sign-on-scope");
}

export function buildSaasSecurityDecisionText(
  assessment: SaasSecurityAssessment,
  evaluationDate: string,
) {
  const result = evaluateSaasSecurityAssessment(assessment, evaluationDate);
  const { context } = assessment;
  const requirementLabels = Object.fromEntries(
    assessment.requirements.map((requirement) => [
      requirement.id,
      cleanSingleLine(requirement.label),
    ]),
  ) as Record<SaasSecurityRequirementId, string>;
  const lines = [
    "DOSSIER DE DÉCISION — SÉCURITÉ D’UN SAAS B2B",
    "Version : 1",
    `Statut : ${result.valid ? "DOSSIER ÉVALUÉ" : "BROUILLON INCOMPLET — NE PAS UTILISER POUR AUTORISER UNE SIGNATURE"}`,
    "",
    "CONTEXTE",
    `Référence interne : ${cleanSingleLine(context.reference) || "inconnue"}`,
    `Produit et périmètre : ${cleanSingleLine(context.productScope) || "inconnu"}`,
    `Date locale d’évaluation : ${result.evaluationDate || "inconnue"}`,
    `Observation : ${context.observationDate || "inconnue"}`,
    `Date limite de signature : ${context.signatureDate || "inconnue"}`,
    `Autorité interne pressentie : ${cleanSingleLine(context.riskApproverRole) || "inconnue"}`,
    `Demandes acheteur recensées : ${context.buyerRequirementsComplete ? "oui" : "non"}`,
    `Charges ouvertes recensées : ${context.remediationWorkComplete ? "oui" : "non"}`,
    "",
    "DÉCISION PROVISOIRE",
    result.title,
    result.explanation,
    "",
    "MOTIFS",
    ...(result.triggers.length > 0
      ? result.triggers.map((trigger) => `- ${cleanSingleLine(trigger)}`)
      : ["- Aucun motif calculable."]),
    "",
    "CAPACITÉ AVANT SIGNATURE",
    `Capacité nette déclarée : ${formatNumber(context.weeklyCapacityHours)} h/semaine`,
    `Marge de prudence déclarée : ${formatNumber(context.safetyMarginPercent)} %`,
    `Jours calendaires disponibles : ${formatNumber(result.capacity.calendarDays)}`,
    `Charge initiale : ${formatNumber(result.capacity.baseHours)} h`,
    `Charge avec marge de prudence : ${formatNumber(result.capacity.prudentHours)} h`,
    `Capacité disponible : ${formatNumber(result.capacity.availableHours)} h`,
    `Écart de capacité : ${formatNumber(result.capacity.gapHours)} h`,
    "Formule : charge prudente = charge initiale × (1 + marge) ; capacité = heures nettes par semaine × jours disponibles / 7.",
    "",
    "CAPACITÉ DES PLANS APRÈS SIGNATURE",
    ...(result.deferredCapacities.length > 0
      ? result.deferredCapacities.map(
          (item) =>
            `- ${requirementLabels[item.requirementId] || "Autre exigence"} — échéance ${item.targetDate || "inconnue"} — ${formatNumber(item.calendarDays)} jours après signature — charge prudente cumulée ${formatNumber(item.cumulativePrudentHours)} h — capacité ${formatNumber(item.availableHours)} h — écart ${formatNumber(item.gapHours)} h`,
        )
      : ["- Aucun écart reporté dans ce dossier."]),
    "",
    "PROCHAINES ACTIONS",
    ...(result.nextActions.length > 0
      ? result.nextActions.map((action) => `- ${cleanSingleLine(action)}`)
      : ["- Compléter le dossier."]),
    "",
    "REGISTRE",
  ];

  for (const [index, requirement] of assessment.requirements.entries()) {
    lines.push(
      "",
      `EXIGENCE ${index + 1} — ${cleanSingleLine(requirement.label)}`,
      `Demande : ${cleanSingleLine(requirement.buyerRequirement) || "inconnue"}`,
      `Nature : ${optionLabel(SAAS_SECURITY_NATURES, requirement.nature)}`,
      `Importance : ${optionLabel(SAAS_SECURITY_IMPORTANCE_LEVELS, requirement.importance)}`,
      `État : ${optionLabel(SAAS_SECURITY_CONTROL_STATUSES, requirement.status)}`,
      `Pièce : ${optionLabel(SAAS_SECURITY_EVIDENCE_KINDS, requirement.evidenceKind)}`,
      `Périmètre de la pièce : ${optionLabel(SAAS_SECURITY_EVIDENCE_SCOPES, requirement.evidenceScope)}`,
      `Référence de la pièce : ${cleanSingleLine(requirement.evidenceReference) || "inconnue"}`,
      `Résultat observé : ${cleanSingleLine(requirement.evidenceResult) || "inconnu"}`,
      `Événement invalidant : ${cleanSingleLine(requirement.evidenceInvalidationTrigger) || "inconnu"}`,
      `Fraîcheur vérifiée pour la décision : ${requirement.freshnessConfirmed ? "oui" : "non"}`,
      `Date de la pièce : ${requirement.evidenceDate || "inconnue"}`,
      `Prochaine revue : ${requirement.reviewDueDate || "inconnue"}`,
      `Changement depuis la pièce : ${requirement.changedSinceEvidence ? "oui" : "non"}`,
      `Risque restant : ${optionLabel(SAAS_SECURITY_RISK_LEVELS, requirement.residualRisk)}`,
      `Propriétaire : ${cleanSingleLine(requirement.ownerRole) || "inconnu"}`,
      `Charge : ${formatNumber(requirement.remediationHours)} h`,
      `Échéance : ${requirement.targetDate || "inconnue"}`,
      `Décision : ${optionLabel(SAAS_SECURITY_DISPOSITIONS, requirement.disposition)}`,
      `Action : ${cleanSingleLine(requirement.nextAction) || "inconnue"}`,
      `Mesure temporaire : ${cleanSingleLine(requirement.temporaryMeasure) || "aucune"}`,
      `Base du report : ${cleanSingleLine(requirement.reportabilityBasis) || "non justifiée"}`,
      `Financement confirmé : ${requirement.fundingConfirmed ? "oui" : "non"}`,
      `Financement — référence : ${cleanSingleLine(requirement.fundingReference) || "inconnue"}`,
      `Financement — date : ${requirement.fundingDate || "inconnue"}`,
      `Acceptation interne : ${requirement.internalAcceptance ? "oui" : "non"}`,
      `Acceptation interne — référence : ${cleanSingleLine(requirement.internalAcceptanceReference) || "inconnue"}`,
      `Acceptation interne — date : ${requirement.internalAcceptanceDate || "inconnue"}`,
      `Accord acheteur : ${requirement.buyerAcceptance ? "oui" : "non"}`,
      `Accord acheteur — référence : ${cleanSingleLine(requirement.buyerAcceptanceReference) || "inconnue"}`,
      `Accord acheteur — date : ${requirement.buyerAcceptanceDate || "inconnue"}`,
      `Non applicable — justification : ${cleanSingleLine(requirement.notApplicableReason) || "sans objet"}`,
    );
  }

  lines.push(
    "",
    "LIMITES",
    "- Cet atelier ne certifie ni la sécurité ni la conformité du SaaS.",
    "- Il ne remplace pas un audit, un test d’intrusion, un responsable de la sécurité des systèmes d’information, un juriste ou un spécialiste sectoriel.",
    "- Une capacité calculée ne garantit pas un délai : dépendances, congés, fournisseurs et délais d’audit peuvent manquer.",
    "- L’accord du client ne neutralise ni une obligation applicable, ni un contrôle critique en échec, ni un risque inacceptable.",
    "- La sixième famille couvre toute autre exigence produit, contractuelle, sectorielle ou d’assurance. Elle peut être critique ; un dossier distinct ne la rend pas optionnelle.",
    "- Cet atelier ne peut pas décider qu’une obligation légale ou sectorielle applicable est reportable après la signature : faites-la qualifier par la personne compétente, satisfaites-la ou renégociez/refusez le périmètre.",
    "- La sixième famille ne porte qu’une seule décision : séparez les exigences qui n’ont pas la même nature, le même état, le même risque ou la même échéance, puis retenez le verdict le plus restrictif.",
    "- Ne joignez pas de secret, donnée personnelle ou détail d’architecture exploitable à ce fichier.",
  );

  return lines.join("\n");
}

export function buildSaasSecurityDecisionFilename(
  assessment: SaasSecurityAssessment,
) {
  const safeReference =
    cleanSingleLine(assessment.context.reference)
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 48) || "sans-reference";
  const safeDate = isIsoDate(assessment.context.observationDate)
    ? assessment.context.observationDate
    : "sans-date";
  return `dossier-decision-securite-${safeReference}-${safeDate}-v1.txt`;
}
