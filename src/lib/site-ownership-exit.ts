export const SITE_OWNERSHIP_DOSSIER_VERSION =
  "site-ownership-exit-r3-2026-07-27";
export const SITE_OWNERSHIP_SOURCE_DATE = "2026-07-27";

export const SITE_OWNERSHIP_ACCESS_ITEMS = [
  {
    id: "domain",
    label: "Nom de domaine et bureau d’enregistrement",
    proof:
      "Titulaire ou registrant identifié, compte contrôlé par l’entreprise, AUTH_INFO récupérable et renouvellement visible.",
    critical: true,
  },
  {
    id: "dns",
    label: "DNS, CDN et protection du trafic",
    proof:
      "Organisation propriétaire, zones exportées, second administrateur et procédure de retour arrière.",
    critical: true,
  },
  {
    id: "hosting",
    label: "Hébergement, cloud ou plateforme SaaS",
    proof:
      "Compte, contrat, facturation, rôles et possibilité de transfert ou de sortie documentés.",
    critical: true,
  },
  {
    id: "repository",
    label: "Dépôt de code et historique des versions",
    proof:
      "Dépôt cloné depuis un compte de l’entreprise, historique complet et branche réellement déployée identifiée.",
    critical: true,
  },
  {
    id: "administration",
    label: "Administration du site et utilisateurs",
    proof:
      "Compte propriétaire, rôles nominatifs, secours interne et suppression d’un ancien prestataire testée.",
    critical: true,
  },
  {
    id: "database",
    label: "Base de données, fichiers et schéma",
    proof:
      "Export daté, pièces jointes, relations et procédure d’import contrôlés sur un environnement isolé.",
    critical: true,
  },
  {
    id: "backups",
    label: "Sauvegardes et restauration",
    proof:
      "Sauvegarde indépendante, date, rétention, chiffrement et restauration fonctionnelle observée.",
    critical: true,
  },
  {
    id: "deployment",
    label: "Mise en ligne, CI/CD et retour arrière",
    proof:
      "Build reproductible, pipeline détenu par l’entreprise, journal de déploiement et rollback testé.",
    critical: true,
  },
  {
    id: "secrets",
    label: "Variables, clés et comptes techniques",
    proof:
      "Inventaire sans secrets en clair dans le dépôt, coffre contrôlé et rotation possible sans l’auteur initial.",
    critical: true,
  },
  {
    id: "email",
    label: "Emails, formulaires et délivrabilité",
    proof:
      "Compte d’envoi, domaines authentifiés, destinations des formulaires et journaux accessibles.",
    critical: false,
  },
  {
    id: "analytics",
    label: "Analytics, Search Console et gestionnaire de balises",
    proof:
      "Propriété ou organisation entreprise, administrateur de secours et historique conservé.",
    critical: false,
  },
  {
    id: "consent",
    label: "Cookies, consentements et preuves RGPD",
    proof:
      "Compte, configuration publiée, journal des versions et export des preuves accessibles.",
    critical: false,
  },
  {
    id: "payments",
    label: "Paiement, boutique et abonnements clients",
    proof:
      "Titulaire du compte, bénéficiaire bancaire, webhooks, exports et procédure de reprise vérifiés.",
    critical: false,
  },
  {
    id: "licenses",
    label: "Thèmes, polices, extensions et services tiers",
    proof:
      "Inventaire, titulaire de chaque licence, coût, échéance, droit de transfert et solution de remplacement.",
    critical: false,
  },
] as const;

export type SiteOwnershipAccessId =
  (typeof SITE_OWNERSHIP_ACCESS_ITEMS)[number]["id"];

export const SITE_OWNERSHIP_PROOFS = [
  {
    id: "clean_login",
    label: "Connexion depuis une session propre",
    expected:
      "Un administrateur interne se connecte sans session, appareil ni adresse email du prestataire.",
  },
  {
    id: "domain_transfer",
    label: "Contrôle du domaine et du transfert",
    expected:
      "Le titulaire ou registrant, le compte, la MFA et la récupération du code de transfert sont contrôlés.",
  },
  {
    id: "clean_build",
    label: "Build depuis un poste propre",
    expected:
      "Une personne qui n’a pas développé le site reconstruit la version livrable depuis le dépôt et la documentation.",
  },
  {
    id: "restore",
    label: "Restauration isolée",
    expected:
      "Code, base, fichiers et configuration sont restaurés ailleurs puis les parcours essentiels sont testés.",
  },
  {
    id: "export_import",
    label: "Export puis import des données",
    expected:
      "L’export conserve champs, relations, pièces jointes, consentements et historique utiles sur un échantillon.",
  },
  {
    id: "license_inventory",
    label: "Inventaire des composants et licences",
    expected:
      "Chaque brique préexistante ou tierce a une origine, une version, une licence, un titulaire et une action de sortie.",
  },
  {
    id: "title_chain",
    label: "Chaîne salariés, freelances et sous-traitants",
    expected:
      "Le prestataire produit les contrats ou garanties couvrant les contributions qu’il prétend céder ou licencier.",
  },
  {
    id: "exit_rehearsal",
    label: "Répétition de passation",
    expected:
      "Une nouvelle équipe suit le runbook, déploie une copie, teste les formulaires et documente les écarts.",
  },
] as const;

export type SiteOwnershipProofId = (typeof SITE_OWNERSHIP_PROOFS)[number]["id"];

export const SITE_OWNERSHIP_CONTRACT_QUESTIONS = [
  {
    id: "foreground",
    label: "Ce qui est créé pour le projet est-il identifié ?",
    expected:
      "Maquettes, textes, code spécifique, documentation, schéma de données et autres livrables sont nommés précisément.",
  },
  {
    id: "background",
    label: "Le préexistant du prestataire est-il séparé ?",
    expected:
      "Le contrat inventorie le socle réutilisable et accorde les droits nécessaires à l’exploitation, la maintenance et la reprise.",
  },
  {
    id: "third_party",
    label: "Les briques tierces et leurs licences sont-elles annexées ?",
    expected:
      "Logiciels libres, thèmes, polices, images, extensions, IA et services SaaS ont une origine et des limites documentées.",
  },
  {
    id: "contributors",
    label: "La chaîne des contributeurs est-elle couverte ?",
    expected:
      "Salariés, freelances et sous-traitants sont déclarés, avec les droits ou garanties que le prestataire peut réellement transmettre.",
  },
  {
    id: "exit",
    label: "La sortie est-elle définie comme un livrable testable ?",
    expected:
      "Délais, formats, comptes, données, code, documentation, assistance, coûts et critères d’acceptation sont écrits.",
  },
  {
    id: "data_processing",
    label:
      "Le DPA et la chaîne des sous-traitants de données sont-ils cadrés ?",
    expected:
      "Objet, durée, nature, finalité, types de données, catégories de personnes, droits et obligations du responsable, instructions documentées, confidentialité, sécurité, assistance aux droits des personnes et aux obligations des articles 32 à 36, informations et audits, restitution ou suppression, sous-traitants ultérieurs, autorisation, information et objection sont documentés.",
  },
] as const;

export type SiteOwnershipContractQuestionId =
  (typeof SITE_OWNERSHIP_CONTRACT_QUESTIONS)[number]["id"];

export type SiteOwnershipAuditStatus =
  "unknown" | "declared" | "verified" | "blocked" | "not-applicable";

export type SiteOwnershipControlStatus =
  "unknown" | "yes" | "no" | "not-supported";

export interface SiteOwnershipAccessInput {
  status: SiteOwnershipAuditStatus;
  ownerControl: string;
  companyControl: SiteOwnershipControlStatus;
  backupAdmin: SiteOwnershipControlStatus;
  mfa: SiteOwnershipControlStatus;
  evidenceRef: string;
  checkedOn: string;
  nextAction: string;
  notApplicableReason: string;
}

export type SiteOwnershipProofStatus =
  "unknown" | "pass" | "fail" | "not-applicable";

export interface SiteOwnershipProofInput {
  status: SiteOwnershipProofStatus;
  evidenceRef: string;
  checkedOn: string;
  nextAction: string;
  notApplicableReason: string;
}

export type SiteOwnershipContractStatus =
  "unknown" | "yes" | "no" | "not-applicable";

export interface SiteOwnershipContractInput {
  status: SiteOwnershipContractStatus;
  contractRef: string;
  nextAction: string;
  notApplicableReason: string;
}

export const SITE_OWNERSHIP_PLATFORMS = [
  { id: "unknown", label: "À identifier" },
  { id: "custom", label: "Développement sur mesure" },
  { id: "wordpress", label: "WordPress / CMS auto-hébergé" },
  { id: "wix", label: "Wix" },
  { id: "shopify", label: "Shopify" },
  { id: "webflow", label: "Webflow" },
  { id: "hubspot", label: "HubSpot" },
  { id: "squarespace", label: "Squarespace" },
  { id: "other", label: "Autre ou architecture mixte" },
] as const;

export type SiteOwnershipPlatform =
  (typeof SITE_OWNERSHIP_PLATFORMS)[number]["id"];

export const SITE_OWNERSHIP_CRITICALITIES = [
  { id: "unknown", label: "À qualifier" },
  { id: "brochure", label: "Site vitrine sans acquisition critique" },
  { id: "lead-generation", label: "Site qui génère des demandes" },
  { id: "ecommerce", label: "Boutique ou paiement en ligne" },
  { id: "business-critical", label: "Service indispensable à l’activité" },
] as const;

export type SiteOwnershipCriticality =
  (typeof SITE_OWNERSHIP_CRITICALITIES)[number]["id"];

function isSiteOwnershipProofRequired(
  id: SiteOwnershipProofId,
  context: SiteOwnershipBusinessContext,
): boolean {
  if (["clean_login", "domain_transfer", "exit_rehearsal"].includes(id)) {
    return true;
  }
  if (
    ["custom", "wordpress"].includes(context.platform) &&
    ["clean_build", "restore"].includes(id)
  ) {
    return true;
  }
  return (
    id === "export_import" &&
    ["lead-generation", "ecommerce", "business-critical"].includes(
      context.criticality,
    )
  );
}

function isSiteOwnershipContractRequired(
  id: SiteOwnershipContractQuestionId,
): boolean {
  return id === "foreground" || id === "exit";
}

export function isSiteOwnershipAccessCritical(
  id: SiteOwnershipAccessId,
  criticality: SiteOwnershipCriticality,
): boolean {
  const alwaysCritical = SITE_OWNERSHIP_ACCESS_ITEMS.find(
    (item) => item.id === id,
  )?.critical;
  if (alwaysCritical) return true;
  if (
    id === "email" &&
    ["lead-generation", "business-critical"].includes(criticality)
  ) {
    return true;
  }
  return (
    id === "payments" &&
    ["ecommerce", "business-critical"].includes(criticality)
  );
}

export const SITE_OWNERSHIP_EXIT_PATHS = [
  {
    id: "negotiate",
    label: "Négocier la remise et les droits",
    help: "Prix demandé, audit du matériel remis, migration, licences et maintenance.",
  },
  {
    id: "legal",
    label: "Faire chiffrer la voie juridique",
    help: "Uniquement sur devis et scénario d’un avocat ; le dossier ne prédit ni délai ni issue.",
  },
  {
    id: "rebuild",
    label: "Reconstruire et migrer",
    help: "Nouveau projet, reprise des contenus et données, SEO, interruption et maintenance.",
  },
] as const;

export type SiteOwnershipExitPathId =
  (typeof SITE_OWNERSHIP_EXIT_PATHS)[number]["id"];

export interface SiteOwnershipBusinessContext {
  dossierName: string;
  siteUrl: string;
  auditDate: string;
  currentSupplier: string;
  platform: SiteOwnershipPlatform;
  criticality: SiteOwnershipCriticality;
  monthlyLeads: number | null;
  leadConversionPercent: number | null;
  contributionMarginPerSale: number | null;
}

export interface SiteOwnershipExitCostInput {
  upfrontCost: number | null;
  contingencyPercent: number | null;
  technicalAuditDays: number | null;
  technicalDayRate: number | null;
  migrationCost: number | null;
  internalDays: number | null;
  internalDayRate: number | null;
  annualLicences: number | null;
  annualMaintenance: number | null;
  downtimeWeeks: number | null;
  leadDropPercent: number | null;
  assumptions: string;
}

export interface SiteOwnershipDossier {
  context: SiteOwnershipBusinessContext;
  accesses: Record<SiteOwnershipAccessId, SiteOwnershipAccessInput>;
  proofs: Record<SiteOwnershipProofId, SiteOwnershipProofInput>;
  contract: Record<SiteOwnershipContractQuestionId, SiteOwnershipContractInput>;
  paths: Record<SiteOwnershipExitPathId, SiteOwnershipExitCostInput>;
}

export interface SiteOwnershipTcoKnown {
  kind: "known";
  horizonMonths: 12 | 36 | 60;
  total: number;
  initial: number;
  recurring: number;
  interruptionLoss: number;
}

export interface SiteOwnershipTcoUnknown {
  kind: "unknown";
  horizonMonths: 12 | 36 | 60;
  missing: string[];
  invalid: string[];
}

export type SiteOwnershipTcoResult =
  SiteOwnershipTcoKnown | SiteOwnershipTcoUnknown;

export type EffectiveSiteOwnershipAccessStatus =
  SiteOwnershipAuditStatus | "declared-from-unproven-verification";

export type EffectiveSiteOwnershipProofStatus = SiteOwnershipProofStatus;
export type EffectiveSiteOwnershipContractStatus = SiteOwnershipContractStatus;

const TCO_HORIZONS = [12, 36, 60] as const;
const MAX_AMOUNT = 1_000_000_000;
const MAX_DAYS = 10_000;
const MAX_WEEKS = 260;

function emptyAccess(): SiteOwnershipAccessInput {
  return {
    status: "unknown",
    ownerControl: "",
    companyControl: "unknown",
    backupAdmin: "unknown",
    mfa: "unknown",
    evidenceRef: "",
    checkedOn: "",
    nextAction: "",
    notApplicableReason: "",
  };
}

function emptyProof(): SiteOwnershipProofInput {
  return {
    status: "unknown",
    evidenceRef: "",
    checkedOn: "",
    nextAction: "",
    notApplicableReason: "",
  };
}

function emptyContract(): SiteOwnershipContractInput {
  return {
    status: "unknown",
    contractRef: "",
    nextAction: "",
    notApplicableReason: "",
  };
}

export function createEmptySiteOwnershipExitCost(): SiteOwnershipExitCostInput {
  return {
    upfrontCost: null,
    contingencyPercent: null,
    technicalAuditDays: null,
    technicalDayRate: null,
    migrationCost: null,
    internalDays: null,
    internalDayRate: null,
    annualLicences: null,
    annualMaintenance: null,
    downtimeWeeks: null,
    leadDropPercent: null,
    assumptions: "",
  };
}

export function createEmptySiteOwnershipDossier(): SiteOwnershipDossier {
  return {
    context: {
      dossierName: "",
      siteUrl: "",
      auditDate: "",
      currentSupplier: "",
      platform: "unknown",
      criticality: "unknown",
      monthlyLeads: null,
      leadConversionPercent: null,
      contributionMarginPerSale: null,
    },
    accesses: Object.fromEntries(
      SITE_OWNERSHIP_ACCESS_ITEMS.map((item) => [item.id, emptyAccess()]),
    ) as Record<SiteOwnershipAccessId, SiteOwnershipAccessInput>,
    proofs: Object.fromEntries(
      SITE_OWNERSHIP_PROOFS.map((item) => [item.id, emptyProof()]),
    ) as Record<SiteOwnershipProofId, SiteOwnershipProofInput>,
    contract: Object.fromEntries(
      SITE_OWNERSHIP_CONTRACT_QUESTIONS.map((item) => [
        item.id,
        emptyContract(),
      ]),
    ) as Record<SiteOwnershipContractQuestionId, SiteOwnershipContractInput>,
    paths: Object.fromEntries(
      SITE_OWNERSHIP_EXIT_PATHS.map((path) => [
        path.id,
        createEmptySiteOwnershipExitCost(),
      ]),
    ) as Record<SiteOwnershipExitPathId, SiteOwnershipExitCostInput>,
  };
}

function localTodayIsoDate(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function isIsoDateOnOrBefore(value: string, upperBound: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const parsed = new Date(`${value}T00:00:00Z`);
  return (
    Number.isFinite(parsed.getTime()) &&
    parsed.toISOString().slice(0, 10) === value &&
    value <= upperBound
  );
}

function isFreshIsoDate(
  value: string,
  referenceDate = localTodayIsoDate(),
): boolean {
  if (!isIsoDateOnOrBefore(referenceDate, localTodayIsoDate())) return false;
  if (!isIsoDateOnOrBefore(value, referenceDate)) return false;
  const checkedAt = new Date(`${value}T00:00:00Z`).getTime();
  const referenceAt = new Date(`${referenceDate}T00:00:00Z`).getTime();
  return referenceAt - checkedAt <= 366 * 24 * 60 * 60 * 1_000;
}

function extractValidDateOnOrBefore(
  value: string,
  upperBound: string,
): string | null {
  const candidates = [
    ...value.matchAll(/\b(20\d{2})-(\d{2})-(\d{2})\b/g),
    ...value.matchAll(/\b(\d{2})\/(\d{2})\/(20\d{2})\b/g),
  ].map((match) =>
    match[0].includes("/")
      ? `${match[3]}-${match[2]}-${match[1]}`
      : `${match[1]}-${match[2]}-${match[3]}`,
  );
  return (
    candidates.find((candidate) =>
      isIsoDateOnOrBefore(candidate, upperBound),
    ) ?? null
  );
}

function isHttpUrl(value: string): boolean {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

function hasMeaningfulText(value: string, minimumLength: number): boolean {
  const trimmed = value.trim();
  const compact = trimmed.replace(/\s+/g, "").toLocaleLowerCase("fr");
  return trimmed.length >= minimumLength && new Set(compact).size >= 4;
}

export function effectiveSiteOwnershipAccessStatus(
  input: SiteOwnershipAccessInput,
  referenceDate?: string,
): EffectiveSiteOwnershipAccessStatus {
  if (input.status === "blocked") return "blocked";
  if (input.status === "not-applicable") {
    return hasMeaningfulText(input.notApplicableReason, 12) &&
      hasMeaningfulText(input.evidenceRef, 8) &&
      isFreshIsoDate(input.checkedOn, referenceDate)
      ? "not-applicable"
      : "unknown";
  }
  if (input.status === "verified") {
    const verificationComplete =
      hasMeaningfulText(input.ownerControl, 3) &&
      hasMeaningfulText(input.evidenceRef, 8) &&
      isFreshIsoDate(input.checkedOn, referenceDate) &&
      input.companyControl !== "unknown" &&
      input.backupAdmin !== "unknown" &&
      input.mfa !== "unknown";
    return verificationComplete
      ? "verified"
      : "declared-from-unproven-verification";
  }
  return input.status;
}

export function effectiveSiteOwnershipProofStatus(
  input: SiteOwnershipProofInput,
  referenceDate?: string,
): EffectiveSiteOwnershipProofStatus {
  if (input.status === "fail") return "fail";
  if (input.status === "not-applicable") {
    return hasMeaningfulText(input.notApplicableReason, 12) &&
      hasMeaningfulText(input.evidenceRef, 8) &&
      isFreshIsoDate(input.checkedOn, referenceDate)
      ? "not-applicable"
      : "unknown";
  }
  if (input.status === "pass") {
    return hasMeaningfulText(input.evidenceRef, 8) &&
      isFreshIsoDate(input.checkedOn, referenceDate)
      ? "pass"
      : "unknown";
  }
  return "unknown";
}

export function effectiveSiteOwnershipContractStatus(
  input: SiteOwnershipContractInput,
): EffectiveSiteOwnershipContractStatus {
  if (input.status === "no") return "no";
  if (input.status === "not-applicable") {
    return hasMeaningfulText(input.notApplicableReason, 12) &&
      hasMeaningfulText(input.contractRef, 8)
      ? "not-applicable"
      : "unknown";
  }
  if (input.status === "yes") {
    return hasMeaningfulText(input.contractRef, 8) ? "yes" : "unknown";
  }
  return "unknown";
}

function isKnownNumber(value: number | null): value is number {
  return value !== null && Number.isFinite(value);
}

function validateAmount(
  value: number | null,
  field: string,
  missing: string[],
  invalid: string[],
) {
  if (!isKnownNumber(value)) {
    missing.push(field);
  } else if (value < 0 || value > MAX_AMOUNT) {
    invalid.push(field);
  }
}

function validateBounded(
  value: number | null,
  field: string,
  max: number,
  missing: string[],
  invalid: string[],
) {
  if (!isKnownNumber(value)) {
    missing.push(field);
  } else if (value < 0 || value > max) {
    invalid.push(field);
  }
}

export function calculateSiteOwnershipTco(
  context: SiteOwnershipBusinessContext,
  input: SiteOwnershipExitCostInput,
  horizonMonths: 12 | 36 | 60,
  pathId?: SiteOwnershipExitPathId,
): SiteOwnershipTcoResult {
  const missing: string[] = [];
  const invalid: string[] = [];

  if (!hasMeaningfulText(input.assumptions, 12)) {
    missing.push("hypothèses, exclusions et base de comparaison");
  }
  validateAmount(input.upfrontCost, "coût initial ou devis", missing, invalid);
  if (
    pathId === "legal" &&
    isKnownNumber(input.upfrontCost) &&
    input.upfrontCost <= 0
  ) {
    missing.push("devis juridique positif et daté");
  }
  if (pathId === "legal") {
    const legalReferenceDate = isIsoDateOnOrBefore(
      context.auditDate,
      localTodayIsoDate(),
    )
      ? context.auditDate
      : null;
    if (!legalReferenceDate) {
      missing.push("date d’audit avant le calcul juridique");
    } else if (
      !extractValidDateOnOrBefore(input.assumptions, legalReferenceDate)
    ) {
      missing.push(
        "date calendaire du devis juridique, non future et antérieure ou égale à l’audit",
      );
    }
  }
  validateBounded(
    input.contingencyPercent,
    "réserve ou dépassement (%)",
    100,
    missing,
    invalid,
  );
  validateBounded(
    input.technicalAuditDays,
    "jours d’audit technique",
    MAX_DAYS,
    missing,
    invalid,
  );
  validateAmount(
    input.technicalDayRate,
    "taux journalier technique",
    missing,
    invalid,
  );
  validateAmount(input.migrationCost, "migration", missing, invalid);
  validateBounded(
    input.internalDays,
    "jours internes",
    MAX_DAYS,
    missing,
    invalid,
  );
  validateAmount(
    input.internalDayRate,
    "coût journalier interne",
    missing,
    invalid,
  );
  validateAmount(input.annualLicences, "licences annuelles", missing, invalid);
  validateAmount(
    input.annualMaintenance,
    "maintenance annuelle",
    missing,
    invalid,
  );
  validateBounded(
    input.downtimeWeeks,
    `semaines d’impact dans l’horizon de ${horizonMonths} mois`,
    Math.min(MAX_WEEKS, horizonMonths * (52.1429 / 12)),
    missing,
    invalid,
  );
  validateBounded(
    input.leadDropPercent,
    "baisse des demandes (%)",
    100,
    missing,
    invalid,
  );

  const commercialImpactActive =
    isKnownNumber(input.downtimeWeeks) &&
    input.downtimeWeeks > 0 &&
    isKnownNumber(input.leadDropPercent) &&
    input.leadDropPercent > 0;

  if (commercialImpactActive) {
    validateAmount(
      context.monthlyLeads,
      "demandes mensuelles",
      missing,
      invalid,
    );
    validateBounded(
      context.leadConversionPercent,
      "conversion des demandes (%)",
      100,
      missing,
      invalid,
    );
    validateAmount(
      context.contributionMarginPerSale,
      "marge contributive par vente",
      missing,
      invalid,
    );
  }

  if (missing.length > 0 || invalid.length > 0) {
    return {
      kind: "unknown",
      horizonMonths,
      missing: [...new Set(missing)],
      invalid: [...new Set(invalid)],
    };
  }

  const initial =
    input.upfrontCost! * (1 + input.contingencyPercent! / 100) +
    input.technicalAuditDays! * input.technicalDayRate! +
    input.migrationCost! +
    input.internalDays! * input.internalDayRate!;
  const interruptionLoss = commercialImpactActive
    ? (input.downtimeWeeks! / (52.1429 / 12)) *
      context.monthlyLeads! *
      (input.leadDropPercent! / 100) *
      (context.leadConversionPercent! / 100) *
      context.contributionMarginPerSale!
    : 0;
  const recurring =
    (horizonMonths / 12) * (input.annualLicences! + input.annualMaintenance!);

  return {
    kind: "known",
    horizonMonths,
    total: initial + interruptionLoss + recurring,
    initial,
    recurring,
    interruptionLoss,
  };
}

export function calculateSiteOwnershipTcoSeries(
  context: SiteOwnershipBusinessContext,
  input: SiteOwnershipExitCostInput,
  pathId?: SiteOwnershipExitPathId,
): [SiteOwnershipTcoResult, SiteOwnershipTcoResult, SiteOwnershipTcoResult] {
  return TCO_HORIZONS.map((horizon) =>
    calculateSiteOwnershipTco(context, input, horizon, pathId),
  ) as [SiteOwnershipTcoResult, SiteOwnershipTcoResult, SiteOwnershipTcoResult];
}

export interface SiteOwnershipDossierEvaluation {
  code: "danger" | "incomplete" | "documented";
  context: {
    complete: boolean;
    issues: string[];
  };
  access: {
    verified: number;
    declared: number;
    blocked: number;
    unknown: number;
    notApplicable: number;
    controlGaps: number;
  };
  proof: {
    passed: number;
    failed: number;
    unknown: number;
    notApplicable: number;
  };
  contract: {
    yes: number;
    no: number;
    unknown: number;
    notApplicable: number;
  };
  criticalIssues: string[];
}

export function evaluateSiteOwnershipDossier(
  dossier: SiteOwnershipDossier,
): SiteOwnershipDossierEvaluation {
  const contextIssues = [
    !dossier.context.dossierName.trim() ? "nom du dossier" : "",
    !isHttpUrl(dossier.context.siteUrl) ? "URL HTTP(S) du site" : "",
    !isIsoDateOnOrBefore(dossier.context.auditDate, localTodayIsoDate())
      ? "date d’audit valide et non future"
      : "",
    !dossier.context.currentSupplier.trim()
      ? "prestataire ou équipe actuelle"
      : "",
    dossier.context.platform === "unknown" ? "plateforme" : "",
    dossier.context.criticality === "unknown" ? "criticité" : "",
  ].filter(Boolean);
  const accessStatuses = SITE_OWNERSHIP_ACCESS_ITEMS.map((item) => {
    const input = dossier.accesses[item.id];
    return {
      ...item,
      critical: isSiteOwnershipAccessCritical(
        item.id,
        dossier.context.criticality,
      ),
      input,
      status: effectiveSiteOwnershipAccessStatus(
        input,
        dossier.context.auditDate,
      ),
    };
  });
  const proofStatuses = SITE_OWNERSHIP_PROOFS.map((item) => ({
    ...item,
    required: isSiteOwnershipProofRequired(item.id, dossier.context),
    status: effectiveSiteOwnershipProofStatus(
      dossier.proofs[item.id],
      dossier.context.auditDate,
    ),
  }));
  const contractStatuses = SITE_OWNERSHIP_CONTRACT_QUESTIONS.map((item) => ({
    ...item,
    required: isSiteOwnershipContractRequired(item.id),
    status: effectiveSiteOwnershipContractStatus(dossier.contract[item.id]),
  }));

  const criticalIssues = [
    ...accessStatuses
      .filter((item) => item.critical && item.status === "blocked")
      .map((item) => `${item.label} : ${accessIssueStatusLabel(item.status)}`),
    ...accessStatuses
      .filter(
        (item) =>
          item.critical &&
          item.input.status === "verified" &&
          item.input.companyControl === "no",
      )
      .map(
        (item) =>
          `${item.label} : contrôle de l’entreprise — ${controlGapStatusLabel(
            item.input.companyControl,
          )}`,
      ),
    ...accessStatuses
      .filter(
        (item) =>
          item.critical &&
          item.input.status === "verified" &&
          item.input.backupAdmin === "no",
      )
      .map(
        (item) =>
          `${item.label} : administrateur de secours — ${controlGapStatusLabel(
            item.input.backupAdmin,
          )}`,
      ),
    ...accessStatuses
      .filter(
        (item) =>
          item.critical &&
          item.input.status === "verified" &&
          item.input.mfa === "no",
      )
      .map(
        (item) =>
          `${item.label} : MFA — ${controlGapStatusLabel(item.input.mfa)}`,
      ),
    ...proofStatuses
      .filter((item) => item.status === "fail")
      .map((item) => `${item.label} : échec`),
    ...contractStatuses
      .filter((item) => item.status === "no")
      .map((item) => `${item.label} : non`),
    ...accessStatuses
      .filter(
        (item) =>
          item.critical && !["verified", "blocked"].includes(item.status),
      )
      .map((item) => `${item.label} : ${accessIssueStatusLabel(item.status)}`),
    ...accessStatuses
      .filter(
        (item) =>
          item.critical &&
          item.input.status === "verified" &&
          !["yes", "no"].includes(item.input.companyControl),
      )
      .map(
        (item) =>
          `${item.label} : contrôle de l’entreprise — ${controlGapStatusLabel(
            item.input.companyControl,
          )}`,
      ),
    ...accessStatuses
      .filter(
        (item) =>
          item.critical &&
          item.input.status === "verified" &&
          !["yes", "no"].includes(item.input.backupAdmin),
      )
      .map(
        (item) =>
          `${item.label} : administrateur de secours — ${controlGapStatusLabel(
            item.input.backupAdmin,
          )}`,
      ),
    ...accessStatuses
      .filter(
        (item) =>
          item.critical &&
          item.input.status === "verified" &&
          !["yes", "no"].includes(item.input.mfa),
      )
      .map(
        (item) =>
          `${item.label} : MFA — ${controlGapStatusLabel(item.input.mfa)}`,
      ),
    ...proofStatuses
      .filter(
        (item) => item.required && !["pass", "fail"].includes(item.status),
      )
      .map((item) => `${item.label} : contrôle requis non réussi`),
    ...contractStatuses
      .filter((item) => item.required && !["yes", "no"].includes(item.status))
      .map((item) => `${item.label} : réponse documentée requise`),
  ];

  const hasDanger =
    accessStatuses.some((item) => item.status === "blocked") ||
    accessStatuses.some(
      (item) =>
        item.critical &&
        item.input.status === "verified" &&
        [
          item.input.companyControl,
          item.input.backupAdmin,
          item.input.mfa,
        ].some((status) => status === "no"),
    ) ||
    proofStatuses.some((item) => item.status === "fail") ||
    contractStatuses.some((item) => item.status === "no");
  const allDocumented =
    contextIssues.length === 0 &&
    accessStatuses.every(
      (item) =>
        (item.status === "not-applicable" && !item.critical) ||
        (item.status === "verified" &&
          item.input.companyControl === "yes" &&
          item.input.backupAdmin === "yes" &&
          item.input.mfa === "yes"),
    ) &&
    proofStatuses.every(
      (item) =>
        item.status === "pass" ||
        (item.status === "not-applicable" && !item.required),
    ) &&
    contractStatuses.every(
      (item) =>
        item.status === "yes" ||
        (item.status === "not-applicable" && !item.required),
    );

  return {
    code: hasDanger ? "danger" : allDocumented ? "documented" : "incomplete",
    context: {
      complete: contextIssues.length === 0,
      issues: contextIssues,
    },
    access: {
      verified: accessStatuses.filter((item) => item.status === "verified")
        .length,
      declared: accessStatuses.filter((item) =>
        ["declared", "declared-from-unproven-verification"].includes(
          item.status,
        ),
      ).length,
      blocked: accessStatuses.filter((item) => item.status === "blocked")
        .length,
      unknown: accessStatuses.filter((item) => item.status === "unknown")
        .length,
      notApplicable: accessStatuses.filter(
        (item) => item.status === "not-applicable",
      ).length,
      controlGaps: accessStatuses.filter(
        (item) =>
          item.input.status === "verified" &&
          [
            item.input.companyControl,
            item.input.backupAdmin,
            item.input.mfa,
          ].some((status) => status !== "yes"),
      ).length,
    },
    proof: {
      passed: proofStatuses.filter((item) => item.status === "pass").length,
      failed: proofStatuses.filter((item) => item.status === "fail").length,
      unknown: proofStatuses.filter((item) => item.status === "unknown").length,
      notApplicable: proofStatuses.filter(
        (item) => item.status === "not-applicable",
      ).length,
    },
    contract: {
      yes: contractStatuses.filter((item) => item.status === "yes").length,
      no: contractStatuses.filter((item) => item.status === "no").length,
      unknown: contractStatuses.filter((item) => item.status === "unknown")
        .length,
      notApplicable: contractStatuses.filter(
        (item) => item.status === "not-applicable",
      ).length,
    },
    criticalIssues,
  };
}

function formatEuro(value: number): string {
  return `${Math.round(value).toLocaleString("fr-FR")} €`;
}

function formatText(value: string): string {
  return value.trim() || "ND";
}

function formatNumber(value: number | null, suffix = ""): string {
  return isKnownNumber(value)
    ? `${new Intl.NumberFormat("fr-FR", {
        maximumFractionDigits: 2,
      }).format(value)}${suffix}`
    : "ND";
}

function accessStatusLabel(status: EffectiveSiteOwnershipAccessStatus): string {
  const labels: Record<EffectiveSiteOwnershipAccessStatus, string> = {
    unknown: "ND",
    declared: "Déclaré, non vérifié",
    verified: "Vérifié avec preuve",
    blocked: "Bloqué",
    "not-applicable": "Non applicable, justifié",
    "declared-from-unproven-verification":
      "Déclaré seulement : preuve de vérification incomplète",
  };
  return labels[status];
}

function accessIssueStatusLabel(
  status: EffectiveSiteOwnershipAccessStatus,
): string {
  return status === "unknown"
    ? "non documenté"
    : accessStatusLabel(status).toLowerCase();
}

function auditStatusLabel(status: SiteOwnershipAuditStatus): string {
  const labels: Record<SiteOwnershipAuditStatus, string> = {
    unknown: "ND",
    declared: "Déclaré, non vérifié",
    verified: "Vérifié avec preuve",
    blocked: "Bloqué",
    "not-applicable": "Non applicable",
  };
  return labels[status];
}

function controlStatusLabel(status: SiteOwnershipControlStatus): string {
  const labels: Record<SiteOwnershipControlStatus, string> = {
    unknown: "ND",
    yes: "Oui",
    no: "Non",
    "not-supported": "Non proposé par le service",
  };
  return labels[status];
}

function controlGapStatusLabel(status: SiteOwnershipControlStatus): string {
  const labels: Record<SiteOwnershipControlStatus, string> = {
    unknown: "statut non documenté",
    yes: "contrôle confirmé",
    no: "contrôle absent",
    "not-supported": "fonction non proposée par le service",
  };
  return labels[status];
}

function proofStatusLabel(status: EffectiveSiteOwnershipProofStatus): string {
  const labels: Record<EffectiveSiteOwnershipProofStatus, string> = {
    unknown: "ND",
    pass: "Réussi avec preuve",
    fail: "Échec observé",
    "not-applicable": "Non applicable, prouvé",
  };
  return labels[status];
}

function contractStatusLabel(
  status: EffectiveSiteOwnershipContractStatus,
): string {
  const labels: Record<EffectiveSiteOwnershipContractStatus, string> = {
    unknown: "ND",
    yes: "Oui, documenté",
    no: "Non ou insuffisant",
    "not-applicable": "Non applicable, documenté",
  };
  return labels[status];
}

export function buildSiteOwnershipDossierReport(
  dossier: SiteOwnershipDossier,
): string {
  const evaluation = evaluateSiteOwnershipDossier(dossier);
  const platform =
    SITE_OWNERSHIP_PLATFORMS.find(
      (item) => item.id === dossier.context.platform,
    )?.label ?? "À identifier";
  const criticality =
    SITE_OWNERSHIP_CRITICALITIES.find(
      (item) => item.id === dossier.context.criticality,
    )?.label ?? "À qualifier";
  const lines = [
    "DOSSIER DE PROPRIÉTÉ ET DE RÉVERSIBILITÉ DU SITE",
    `Version : ${SITE_OWNERSHIP_DOSSIER_VERSION}`,
    `Référentiel vérifié le : ${SITE_OWNERSHIP_SOURCE_DATE}`,
    "",
    "AVERTISSEMENT",
    "Ce dossier organise des faits, des preuves et des hypothèses économiques. Il ne prouve pas la propriété intellectuelle, ne constitue pas un avis juridique et ne prédit ni l’issue ni le délai d’une procédure. Faites vérifier le contrat et le droit applicable par un avocat ; faites tester la reprise par une équipe technique indépendante.",
    "",
    "CONTEXTE",
    `Dossier : ${formatText(dossier.context.dossierName)}`,
    `Site : ${formatText(dossier.context.siteUrl)}`,
    `Date d’audit : ${formatText(dossier.context.auditDate)}`,
    `Prestataire actuel : ${formatText(dossier.context.currentSupplier)}`,
    `Plateforme : ${platform}`,
    `Criticité : ${criticality}`,
    `Demandes mensuelles : ${formatNumber(dossier.context.monthlyLeads)}`,
    `Conversion des demandes : ${formatNumber(
      dossier.context.leadConversionPercent,
      " %",
    )}`,
    `Marge contributive par vente : ${formatNumber(
      dossier.context.contributionMarginPerSale,
      " €",
    )}`,
    "",
    "SYNTHÈSE DU DOSSIER",
    `Statut : ${
      evaluation.code === "danger"
        ? "danger ou échec observé"
        : evaluation.code === "documented"
          ? "documenté, sans validation juridique"
          : "incomplet"
    }`,
    `Contexte : ${
      evaluation.context.complete
        ? "complet"
        : `incomplet — ${evaluation.context.issues.join(", ")}`
    }`,
    `Accès : ${evaluation.access.verified} vérifié(s), ${evaluation.access.controlGaps} avec contrôle de l’entreprise ou protection à corriger, ${evaluation.access.declared} déclaré(s), ${evaluation.access.blocked} bloqué(s), ${evaluation.access.unknown} ND, ${evaluation.access.notApplicable} non applicable(s) prouvé(s)`,
    `Preuves : ${evaluation.proof.passed} réussie(s), ${evaluation.proof.failed} en échec, ${evaluation.proof.unknown} ND, ${evaluation.proof.notApplicable} non applicable(s) justifiée(s)`,
    `Contrat : ${evaluation.contract.yes} oui documenté(s), ${evaluation.contract.no} non, ${evaluation.contract.unknown} ND, ${evaluation.contract.notApplicable} non applicable(s) justifié(s)`,
  ];

  if (evaluation.criticalIssues.length > 0) {
    lines.push(
      "",
      "POINTS CRITIQUES",
      ...evaluation.criticalIssues.map((issue) => `- ${issue}`),
    );
  }

  lines.push("", "14 ACCÈS");
  SITE_OWNERSHIP_ACCESS_ITEMS.forEach((template, index) => {
    const input = dossier.accesses[template.id];
    lines.push(
      "",
      `${index + 1}. ${template.label}${
        isSiteOwnershipAccessCritical(template.id, dossier.context.criticality)
          ? " [critique]"
          : ""
      }`,
      `Statut saisi : ${auditStatusLabel(input.status)}`,
      `Statut retenu : ${accessStatusLabel(
        effectiveSiteOwnershipAccessStatus(input, dossier.context.auditDate),
      )}`,
      `Titulaire ou organisation observée : ${formatText(input.ownerControl)}`,
      `Contrôle effectif de l’entreprise : ${controlStatusLabel(
        input.companyControl,
      )}`,
      `Administrateur de secours : ${controlStatusLabel(input.backupAdmin)}`,
      `MFA : ${controlStatusLabel(input.mfa)}`,
      `Preuve : ${formatText(input.evidenceRef)}`,
      `Vérifié le : ${formatText(input.checkedOn)}`,
      `Action : ${formatText(input.nextAction)}`,
      `Motif de non-applicabilité : ${formatText(input.notApplicableReason)}`,
      `Preuve minimale attendue : ${template.proof}`,
    );
  });

  lines.push("", "8 PREUVES D’EXÉCUTION");
  SITE_OWNERSHIP_PROOFS.forEach((template, index) => {
    const input = dossier.proofs[template.id];
    lines.push(
      "",
      `${index + 1}. ${template.label}`,
      `Statut saisi : ${proofStatusLabel(input.status)}`,
      `Statut retenu : ${proofStatusLabel(
        effectiveSiteOwnershipProofStatus(input, dossier.context.auditDate),
      )}`,
      `Preuve : ${formatText(input.evidenceRef)}`,
      `Vérifié le : ${formatText(input.checkedOn)}`,
      `Action : ${formatText(input.nextAction)}`,
      `Motif de non-applicabilité : ${formatText(input.notApplicableReason)}`,
      `Résultat attendu : ${template.expected}`,
    );
  });

  lines.push(
    "",
    `${SITE_OWNERSHIP_CONTRACT_QUESTIONS.length} QUESTIONS CONTRACTUELLES`,
  );
  SITE_OWNERSHIP_CONTRACT_QUESTIONS.forEach((template, index) => {
    const input = dossier.contract[template.id];
    lines.push(
      "",
      `${index + 1}. ${template.label}`,
      `Réponse saisie : ${contractStatusLabel(input.status)}`,
      `Réponse retenue : ${contractStatusLabel(
        effectiveSiteOwnershipContractStatus(input),
      )}`,
      `Référence du contrat ou de l’annexe : ${formatText(input.contractRef)}`,
      `Action : ${formatText(input.nextAction)}`,
      `Motif de non-applicabilité : ${formatText(input.notApplicableReason)}`,
      `Point attendu : ${template.expected}`,
    );
  });

  lines.push("", "COMPARAISON ÉCONOMIQUE");
  SITE_OWNERSHIP_EXIT_PATHS.forEach((template) => {
    const input = dossier.paths[template.id];
    const series = calculateSiteOwnershipTcoSeries(
      dossier.context,
      input,
      template.id,
    );
    lines.push(
      "",
      template.label.toUpperCase(),
      `Coût initial ou devis : ${formatNumber(input.upfrontCost, " € HT")}`,
      `Réserve ou dépassement : ${formatNumber(
        input.contingencyPercent,
        " %",
      )}`,
      `Audit technique : ${formatNumber(
        input.technicalAuditDays,
        " j",
      )} × ${formatNumber(input.technicalDayRate, " € HT/j")}`,
      `Migration : ${formatNumber(input.migrationCost, " € HT")}`,
      `Temps interne : ${formatNumber(
        input.internalDays,
        " j",
      )} × ${formatNumber(input.internalDayRate, " € /j")}`,
      `Licences annuelles : ${formatNumber(input.annualLicences, " € HT/an")}`,
      `Maintenance annuelle : ${formatNumber(
        input.annualMaintenance,
        " € HT/an",
      )}`,
      `Impact : ${formatNumber(
        input.downtimeWeeks,
        " semaine(s)",
      )}, baisse ${formatNumber(input.leadDropPercent, " %")}`,
      `Hypothèses : ${formatText(input.assumptions)}`,
    );
    series.forEach((result) => {
      if (result.kind === "known") {
        lines.push(
          `TCO ${result.horizonMonths} mois : ${formatEuro(result.total)} (initial ${formatEuro(
            result.initial,
          )}, récurrent ${formatEuro(
            result.recurring,
          )}, marge exposée ${formatEuro(result.interruptionLoss)})`,
        );
      } else {
        lines.push(
          `TCO ${result.horizonMonths} mois : ND`,
          `  Champs manquants : ${result.missing.join(", ") || "aucun"}`,
          `  Champs invalides : ${result.invalid.join(", ") || "aucun"}`,
        );
      }
    });
  });

  lines.push(
    "",
    "RÈGLE DE LECTURE",
    "Le total le plus bas parmi les scénarios complets n’est pas une recommandation. Vérifiez séparément les droits exploitables, la capacité de reprise, les délais, la continuité commerciale et les risques propres au dossier. Un scénario ND ne vaut ni zéro ni exclusion.",
    "Chaque total est un coût brut du scénario saisi, pas un surcoût différentiel par rapport au contrat actuel. Le calcul n’actualise ni inflation, ni valeur temps de l’argent, ni fiscalité. Ajoutez dans les postes et hypothèses les périodes de chevauchement, décommissionnement, cloud, données, sécurité et impacts SEO qui concernent réellement le dossier.",
  );

  return lines.join("\n");
}

export function buildSiteOwnershipDossierFilename(
  dossier: SiteOwnershipDossier,
): string {
  const safeName = dossier.context.dossierName
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 60);
  return `dossier-propriete-reversibilite-${
    safeName || "site"
  }-${dossier.context.auditDate || "sans-date"}.txt`;
}

function cloneDossier(dossier: SiteOwnershipDossier): SiteOwnershipDossier {
  return JSON.parse(JSON.stringify(dossier)) as SiteOwnershipDossier;
}

export function createFictitiousAlpIsolationDossier(): SiteOwnershipDossier {
  const dossier = createEmptySiteOwnershipDossier();
  dossier.context = {
    dossierName: "Alp’Isolation — exemple fictif",
    siteUrl: "https://exemple.invalid",
    auditDate: "2026-07-27",
    currentSupplier: "Agence historique — exemple fictif",
    platform: "wordpress",
    criticality: "lead-generation",
    monthlyLeads: 50,
    leadConversionPercent: 15,
    contributionMarginPerSale: 1_200,
  };

  dossier.accesses.domain = {
    status: "verified",
    ownerControl: "Alp’Isolation SAS — exemple fictif",
    companyControl: "yes",
    backupAdmin: "yes",
    mfa: "yes",
    evidenceRef: "Capture registrar + test de récupération du 27/07/2026",
    checkedOn: "2026-07-27",
    nextAction:
      "Conserver le code de transfert dans le coffre de l’entreprise.",
    notApplicableReason: "",
  };
  dossier.accesses.hosting = {
    ...emptyAccess(),
    status: "declared",
    ownerControl: "Compte ouvert par l’agence",
    companyControl: "no",
    backupAdmin: "no",
    mfa: "unknown",
    nextAction: "Demander un compte propriétaire au nom de l’entreprise.",
  };
  dossier.accesses.repository = {
    ...emptyAccess(),
    status: "blocked",
    ownerControl: "Agence historique",
    companyControl: "no",
    backupAdmin: "no",
    mfa: "unknown",
    evidenceRef: "Demande de remise sans réponse — exemple fictif",
    checkedOn: "2026-07-27",
    nextAction:
      "Faire qualifier séparément les droits et la possibilité de reconstruire.",
  };

  dossier.proofs.domain_transfer = {
    status: "pass",
    evidenceRef: "Récupération AUTH_INFO observée — exemple fictif",
    checkedOn: "2026-07-27",
    nextAction: "Aucune ; renouveler le contrôle chaque année.",
    notApplicableReason: "",
  };
  dossier.proofs.clean_build = {
    status: "fail",
    evidenceRef: "Dépôt non remis — aucun build tiers possible",
    checkedOn: "2026-07-27",
    nextAction: "Obtenir les sources ou chiffrer la reconstruction.",
    notApplicableReason: "",
  };

  dossier.contract.foreground = {
    status: "no",
    contractRef: "Devis 2023 : formule « site livré », sans inventaire",
    nextAction: "Faire analyser les pièces et demander une annexe précise.",
    notApplicableReason: "",
  };
  dossier.contract.third_party = {
    status: "no",
    contractRef: "Aucune annexe de licences",
    nextAction: "Identifier le thème à 79 € HT/an et les extensions.",
    notApplicableReason: "",
  };

  dossier.paths.negotiate = {
    upfrontCost: 9_000,
    contingencyPercent: 0,
    technicalAuditDays: 3,
    technicalDayRate: 900,
    migrationCost: 2_500,
    internalDays: 3,
    internalDayRate: 450,
    annualLicences: 79,
    annualMaintenance: 3_600,
    downtimeWeeks: 0.5,
    leadDropPercent: 10,
    assumptions:
      "Montants fictifs. La remise n’est acceptée qu’après inventaire, preuve des droits transmis et test de build.",
  };
  dossier.paths.legal = {
    ...createEmptySiteOwnershipExitCost(),
    assumptions:
      "ND tant qu’un avocat n’a pas défini la stratégie, les actes, les intervenants, les honoraires et les aléas du dossier.",
  };
  dossier.paths.rebuild = {
    upfrontCost: 14_500,
    contingencyPercent: 25,
    technicalAuditDays: 0,
    technicalDayRate: 900,
    migrationCost: 3_500,
    internalDays: 8,
    internalDayRate: 450,
    annualLicences: 400,
    annualMaintenance: 4_800,
    downtimeWeeks: 6,
    leadDropPercent: 20,
    assumptions:
      "Montants fictifs. Dépassement de 25 %, migration SEO et baisse temporaire de 20 % des demandes testés comme hypothèses prudentes.",
  };

  return cloneDossier(dossier);
}
