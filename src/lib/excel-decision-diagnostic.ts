export const EXCEL_DIAGNOSTIC_VERSION = "excel-decision-r5-2026-07-28";
export const EXCEL_SOURCE_VERIFIED_ON = "2026-07-28";
export const EXCEL_SOURCE_VERIFIED_ON_FR = "28 juillet 2026";

export const EXCEL_PATHWAY_IDS = [
  "keep_excel",
  "industrialize_excel",
  "standard_software",
  "named_platform",
  "custom_development",
] as const;

export type ExcelPathwayId = (typeof EXCEL_PATHWAY_IDS)[number];

export const EXCEL_PATHWAYS: Record<
  ExcelPathwayId,
  { label: string; shortLabel: string; gate: string }
> = {
  keep_excel: {
    label: "Conserver Excel",
    shortLabel: "Excel",
    gate: "Le fichier reste simple, stable, réversible, documenté et exploitable par deux personnes.",
  },
  industrialize_excel: {
    label: "Industrialiser Excel",
    shortLabel: "Excel industrialisé",
    gate: "La correction de la structure, des contrôles, de la coédition et du mode dégradé suffit au besoin.",
  },
  standard_software: {
    label: "Acheter un logiciel standard",
    shortLabel: "Logiciel standard",
    gate: "Le produit couvre au moins 80 % des exigences applicables et aucun besoin bloquant n’est contourné.",
  },
  named_platform: {
    label: "Configurer une plateforme nommée",
    shortLabel: "Plateforme nommée",
    gate: "Le produit et le plan testés passent les opérations, avec licences, administration et sortie maîtrisées.",
  },
  custom_development: {
    label: "Développer sur mesure",
    shortLabel: "Sur mesure",
    gate: "Un écart métier stable et différenciant demeure après élimination documentée du standard et des plateformes.",
  },
};

export const EXCEL_PATHWAY_COMPLEXITY: Record<ExcelPathwayId, number> = {
  keep_excel: 0,
  industrialize_excel: 1,
  standard_software: 2,
  named_platform: 3,
  custom_development: 4,
};

export const EXCEL_OPERATION_IDS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as const;

export type ExcelOperationId = (typeof EXCEL_OPERATION_IDS)[number];
export type ExcelConditionalOperationId = 4 | 5 | 6;
export const EXCEL_OPERATION_STATUSES = [
  "pass",
  "fail",
  "unknown",
  "not_applicable",
] as const;
export type ExcelOperationStatus = (typeof EXCEL_OPERATION_STATUSES)[number];
export const EXCEL_EVIDENCE_LEVELS = [
  "declared",
  "documented",
  "verified",
] as const;
export type ExcelEvidenceLevel = (typeof EXCEL_EVIDENCE_LEVELS)[number];

export const EXCEL_TEST_OPERATIONS: ReadonlyArray<{
  id: ExcelOperationId;
  title: string;
  expected: string;
  blocker: "universal" | "conditional" | "control";
}> = [
  {
    id: 1,
    title: "Créer puis rouvrir X-3051 avec une pièce jointe",
    expected: "3 051 lignes, total 4 655 826 €, pièce jointe lisible.",
    blocker: "universal",
  },
  {
    id: 2,
    title: "Rejeter une fiche avec champ ou date invalide",
    expected:
      "Aucune écriture partielle ; chaque erreur est expliquée au bon champ.",
    blocker: "universal",
  },
  {
    id: 3,
    title: "Retrouver X-2501 et calculer tous les agrégats",
    expected:
      "Recherche exacte et totaux sur toutes les lignes, y compris au-delà de 2 000.",
    blocker: "universal",
  },
  {
    id: 4,
    title: "Modifier X-0042 et reconstituer l’historique",
    expected: "Auteur, date, champ, ancienne et nouvelle valeur retrouvés.",
    blocker: "conditional",
  },
  {
    id: 5,
    title: "Appliquer les droits requis par le scénario",
    expected:
      "Chaque rôle prévu ne voit et ne modifie que les données autorisées.",
    blocker: "conditional",
  },
  {
    id: 6,
    title: "Modifier la même fiche à deux",
    expected:
      "Conflit détecté ou arbitré sans écrasement silencieux, résultat reproductible.",
    blocker: "conditional",
  },
  {
    id: 7,
    title: "Importer 95 lignes valides et expliquer 5 rejets",
    expected:
      "95 créations ; doublons et erreurs expliqués ; 3 146 lignes, total 4 656 021 €.",
    blocker: "universal",
  },
  {
    id: 8,
    title: "Supprimer X-2501 puis restaurer",
    expected:
      "3 145 lignes et 4 653 520 € après suppression, puis retour au résultat précédent.",
    blocker: "universal",
  },
  {
    id: 9,
    title: "Exporter puis réimporter données et pièces jointes",
    expected:
      "3 146 identifiants distincts, total 4 656 021 €, 11 pièces jointes et format réutilisable.",
    blocker: "universal",
  },
  {
    id: 10,
    title: "Simuler le départ du créateur",
    expected:
      "Propriétaire et suppléant reprennent comptes, connexions, restauration et exploitation sans compte personnel.",
    blocker: "universal",
  },
];

export const EXCEL_SCENARIO_IDS = ["simple", "central", "demanding"] as const;
export type ExcelScenarioId = (typeof EXCEL_SCENARIO_IDS)[number];

export interface ExcelScenario {
  id: ExcelScenarioId;
  label: string;
  users: number;
  rows: number;
  initialResidualHoursWeekly: number;
  roles: string;
  integrations: number;
  usage: string;
}

export const EXCEL_SCENARIOS: Record<ExcelScenarioId, ExcelScenario> = {
  simple: {
    id: "simple",
    label: "Simple",
    users: 5,
    rows: 1_500,
    initialResidualHoursWeekly: 1,
    roles: "lecteur + opérateur + administrateur",
    integrations: 0,
    usage: "bureau, processus stable",
  },
  central: {
    id: "central",
    label: "Central",
    users: 12,
    rows: 38_000,
    initialResidualHoursWeekly: 4,
    roles: "lecteur + opérateur + approbateur + administrateur",
    integrations: 1,
    usage: "bureau + mobile, historique",
  },
  demanding: {
    id: "demanding",
    label: "Exigeant",
    users: 25,
    rows: 150_000,
    initialResidualHoursWeekly: 8,
    roles: "rôles fins, équipes et administration séparées",
    integrations: 3,
    usage: "mobile/hors ligne à tester, données sensibles, continuité forte",
  },
};

export interface ExcelTcoAssumption {
  initialAndMigration: number;
  fixedMonthly: number;
  perUserMonthly: number;
  adminHoursMonthly: number;
  annualMaintenance: number;
  formationIntegrationExit: number;
  residualHoursWeekly: number;
}

export const EXCEL_TCO_ASSUMPTIONS: Record<
  ExcelScenarioId,
  Record<ExcelPathwayId, ExcelTcoAssumption>
> = {
  simple: {
    keep_excel: {
      initialAndMigration: 1_000,
      fixedMonthly: 0,
      perUserMonthly: 0,
      adminHoursMonthly: 2,
      annualMaintenance: 0,
      formationIntegrationExit: 0,
      residualHoursWeekly: 1,
    },
    industrialize_excel: {
      initialAndMigration: 3_500,
      fixedMonthly: 0,
      perUserMonthly: 0,
      adminHoursMonthly: 2,
      annualMaintenance: 0,
      formationIntegrationExit: 1_800,
      residualHoursWeekly: 0.25,
    },
    standard_software: {
      initialAndMigration: 3_500,
      fixedMonthly: 150,
      perUserMonthly: 0,
      adminHoursMonthly: 1,
      annualMaintenance: 0,
      formationIntegrationExit: 2_500,
      residualHoursWeekly: 0.2,
    },
    named_platform: {
      initialAndMigration: 9_500,
      fixedMonthly: 0,
      perUserMonthly: 17.3,
      adminHoursMonthly: 2,
      annualMaintenance: 1_000,
      formationIntegrationExit: 4_000,
      residualHoursWeekly: 0.2,
    },
    custom_development: {
      initialAndMigration: 29_000,
      fixedMonthly: 150,
      perUserMonthly: 0,
      adminHoursMonthly: 1,
      annualMaintenance: 4_000,
      formationIntegrationExit: 6_000,
      residualHoursWeekly: 0.15,
    },
  },
  central: {
    keep_excel: {
      initialAndMigration: 2_000,
      fixedMonthly: 0,
      perUserMonthly: 0,
      adminHoursMonthly: 10,
      annualMaintenance: 0,
      formationIntegrationExit: 0,
      residualHoursWeekly: 4,
    },
    industrialize_excel: {
      initialAndMigration: 7_000,
      fixedMonthly: 0,
      perUserMonthly: 0,
      adminHoursMonthly: 4,
      annualMaintenance: 800,
      formationIntegrationExit: 3_000,
      residualHoursWeekly: 1.5,
    },
    standard_software: {
      initialAndMigration: 8_000,
      fixedMonthly: 300,
      perUserMonthly: 0,
      adminHoursMonthly: 3,
      annualMaintenance: 0,
      formationIntegrationExit: 9_000,
      residualHoursWeekly: 1,
    },
    named_platform: {
      initialAndMigration: 18_000,
      fixedMonthly: 0,
      perUserMonthly: 17.3,
      adminHoursMonthly: 6,
      annualMaintenance: 2_000,
      formationIntegrationExit: 7_000,
      residualHoursWeekly: 0.75,
    },
    custom_development: {
      initialAndMigration: 43_000,
      fixedMonthly: 250,
      perUserMonthly: 0,
      adminHoursMonthly: 2,
      annualMaintenance: 6_000,
      formationIntegrationExit: 10_000,
      residualHoursWeekly: 0.5,
    },
  },
  demanding: {
    keep_excel: {
      initialAndMigration: 3_000,
      fixedMonthly: 0,
      perUserMonthly: 0,
      adminHoursMonthly: 20,
      annualMaintenance: 0,
      formationIntegrationExit: 0,
      residualHoursWeekly: 8,
    },
    industrialize_excel: {
      initialAndMigration: 14_000,
      fixedMonthly: 0,
      perUserMonthly: 0,
      adminHoursMonthly: 10,
      annualMaintenance: 1_500,
      formationIntegrationExit: 7_000,
      residualHoursWeekly: 4,
    },
    standard_software: {
      initialAndMigration: 20_000,
      fixedMonthly: 900,
      perUserMonthly: 0,
      adminHoursMonthly: 6,
      annualMaintenance: 2_000,
      formationIntegrationExit: 23_000,
      residualHoursWeekly: 2,
    },
    named_platform: {
      initialAndMigration: 40_000,
      fixedMonthly: 0,
      perUserMonthly: 17.3,
      adminHoursMonthly: 12,
      annualMaintenance: 5_000,
      formationIntegrationExit: 31_000,
      residualHoursWeekly: 1.5,
    },
    custom_development: {
      initialAndMigration: 85_000,
      fixedMonthly: 500,
      perUserMonthly: 0,
      adminHoursMonthly: 4,
      annualMaintenance: 12_000,
      formationIntegrationExit: 38_000,
      residualHoursWeekly: 1,
    },
  },
};

export const EXCEL_TCO_HORIZON_MONTHS = 48;
export const EXCEL_TCO_HOURLY_COST = 45;
export const EXCEL_TCO_WORKING_WEEKS = 48;
export const EXCEL_MAX_SAFE_COST_AMOUNT = Number.MAX_SAFE_INTEGER;

export interface ExcelCostInputs extends ExcelTcoAssumption {
  licensedUsers: number;
  hourlyCost: number;
  workingWeeksPerYear: number;
}

export type ExcelCostUnitKind =
  | "money"
  | "money_per_month"
  | "money_per_user_month"
  | "money_per_hour"
  | "money_per_year"
  | "users"
  | "hours_per_month"
  | "hours_per_week"
  | "weeks_per_year";

export const EXCEL_COST_FIELDS: ReadonlyArray<{
  key: keyof ExcelCostInputs;
  label: string;
  unitKind: ExcelCostUnitKind;
}> = [
  {
    key: "initialAndMigration",
    label: "Mise en place + migration",
    unitKind: "money",
  },
  {
    key: "fixedMonthly",
    label: "Abonnement fixe",
    unitKind: "money_per_month",
  },
  {
    key: "perUserMonthly",
    label: "Licence par utilisateur",
    unitKind: "money_per_user_month",
  },
  {
    key: "licensedUsers",
    label: "Utilisateurs licenciés",
    unitKind: "users",
  },
  {
    key: "adminHoursMonthly",
    label: "Administration",
    unitKind: "hours_per_month",
  },
  {
    key: "hourlyCost",
    label: "Coût horaire chargé",
    unitKind: "money_per_hour",
  },
  {
    key: "annualMaintenance",
    label: "Maintenance annuelle",
    unitKind: "money_per_year",
  },
  {
    key: "formationIntegrationExit",
    label: "Formation + intégrations + sortie",
    unitKind: "money",
  },
  {
    key: "residualHoursWeekly",
    label: "Temps résiduel",
    unitKind: "hours_per_week",
  },
  {
    key: "workingWeeksPerYear",
    label: "Semaines travaillées",
    unitKind: "weeks_per_year",
  },
];

export const EXCEL_COST_FORMULA =
  "mise en place + (abonnement fixe × 48) + (licence × utilisateurs × 48) + (administration × coût horaire × 48) + (maintenance annuelle × 4) + formation/intégrations/sortie + (temps résiduel × semaines/an × 4 × coût horaire)";

export const EXCEL_CURRENCIES = [
  "EUR",
  "USD",
  "GBP",
  "CHF",
  "CAD",
  "AUD",
  "JPY",
] as const;
export type ExcelCurrency = "" | (typeof EXCEL_CURRENCIES)[number];
export const EXCEL_PLATFORM_TYPES = [
  "power_apps",
  "appsheet",
  "airtable",
  "other",
] as const;
export type ExcelPlatformType = (typeof EXCEL_PLATFORM_TYPES)[number];

export function getExcelCostUnit(
  unitKind: ExcelCostUnitKind,
  currency: ExcelCurrency,
): string {
  const money = currency || "devise";
  const units: Record<ExcelCostUnitKind, string> = {
    money,
    money_per_month: `${money}/mois`,
    money_per_user_month: `${money}/utilisateur/mois`,
    money_per_hour: `${money}/h`,
    money_per_year: `${money}/an`,
    users: "utilisateurs",
    hours_per_month: "h/mois",
    hours_per_week: "h/semaine",
    weeks_per_year: "semaines/an",
  };
  return units[unitKind];
}

export interface ExcelPlatformSelection {
  type: ExcelPlatformType;
  product: string;
  plan: string;
  activeUsers: number;
  externalUsers: number;
}

export interface ExcelOperationAssessment {
  status: ExcelOperationStatus;
  evidenceLevel: ExcelEvidenceLevel;
  reference: string;
  evidenceDate: string;
  verifiedBy: string;
  notApplicableReason: string;
  notApplicableDate: string;
}

export interface ExcelCriterionAssessment {
  met: boolean;
  evidenceLevel: ExcelEvidenceLevel;
  reference: string;
  evidenceDate: string;
  verifiedBy: string;
}

export interface ExcelCostBasis {
  confirmed: boolean;
  source: string;
  sourceDate: string;
  currency: ExcelCurrency;
  horizonMonths: number;
  coverage: string;
  owner: string;
  exclusions: string;
  xMin?: number;
  xMax?: number;
  iMin?: number;
  iMax?: number;
  zeroXConfirmed: boolean;
  zeroXJustification: string;
  zeroIConfirmed: boolean;
  zeroIJustification: string;
}

export interface ExcelCandidateDossier {
  pathway: ExcelPathwayId;
  operations: Record<ExcelOperationId, ExcelOperationAssessment>;
  conditionalOperations: Record<ExcelConditionalOperationId, boolean>;
  criterion: ExcelCriterionAssessment;
  standardCoveragePercent: number;
  platform: ExcelPlatformSelection;
  costInputs: ExcelCostInputs;
  costBasis: ExcelCostBasis;
}

export interface ExcelSharedReadiness {
  processStable: boolean;
  dataReady: boolean;
  ownerAndDeputyNamed: boolean;
  benefitMeasured: boolean;
  reference: string;
  evidenceDate: string;
}

export type ExcelCandidateVerdict = "eligible" | "report" | "stop";
export type ExcelFinalVerdict = "launch" | "report" | "stop" | "do_not_invest";

export interface ExcelCostInterval {
  pathway: ExcelPathwayId;
  knownAmount: number;
  minimum: number;
  maximum: number;
}

export interface ExcelCandidateResult {
  pathway: ExcelPathwayId;
  verdict: ExcelCandidateVerdict;
  label: string;
  title: string;
  summary: string;
  failedOperations: ExcelOperationId[];
  unknownOperations: ExcelOperationId[];
  missingEvidence: string[];
  invalidInputs: string[];
  missingReadiness: string[];
  passedOperations: number;
  applicableOperations: number;
  costInterval: ExcelCostInterval | null;
  actions: string[];
}

export interface ExcelComparisonInput {
  scenario: ExcelScenario;
  readiness: ExcelSharedReadiness;
  dossiers: Partial<Record<ExcelPathwayId, ExcelCandidateDossier>>;
  decisionDate: string;
  currentDate: string;
}

export interface ExcelComparisonResult {
  verdict: ExcelFinalVerdict;
  label: string;
  title: string;
  summary: string;
  selectedPathway: ExcelPathwayId | null;
  candidateResults: Partial<Record<ExcelPathwayId, ExcelCandidateResult>>;
  unresolvedPathways: ExcelPathwayId[];
  eligiblePathways: ExcelPathwayId[];
  actions: string[];
}

export const EXCEL_DECISION_DRAFT_STORAGE_KEY =
  "hagnere-code:excel-decision-draft:r5";
export const EXCEL_DECISION_DRAFT_MAX_BYTES = 2_000_000;
const EXCEL_DECISION_DRAFT_NAN = "__HAGNERE_CODE_NUMBER_NOT_SET__";

export interface ExcelDecisionDraft {
  version: string;
  savedAt: string;
  scenarioId: ExcelScenarioId;
  activePathway: ExcelPathwayId;
  readiness: ExcelSharedReadiness;
  dossiers: Record<ExcelPathwayId, ExcelCandidateDossier>;
  decisionDate: string;
}

export function conditionalOperationsForScenario(
  scenarioId: ExcelScenarioId,
): Record<ExcelConditionalOperationId, boolean> {
  if (scenarioId === "simple") return { 4: true, 5: true, 6: false };
  return { 4: true, 5: true, 6: true };
}

export function createExcelOperationAssessment(
  status: ExcelOperationStatus = "unknown",
): ExcelOperationAssessment {
  return {
    status,
    evidenceLevel: "declared",
    reference: "",
    evidenceDate: "",
    verifiedBy: "",
    notApplicableReason: "",
    notApplicableDate: "",
  };
}

export function createExcelOperationAssessments(
  conditionalOperations: Record<ExcelConditionalOperationId, boolean>,
): Record<ExcelOperationId, ExcelOperationAssessment> {
  return Object.fromEntries(
    EXCEL_OPERATION_IDS.map((id) => [
      id,
      createExcelOperationAssessment(
        (id === 4 || id === 5 || id === 6) && !conditionalOperations[id]
          ? "not_applicable"
          : "unknown",
      ),
    ]),
  ) as Record<ExcelOperationId, ExcelOperationAssessment>;
}

export function createExcelOperationStatuses(
  status: ExcelOperationStatus = "unknown",
): Record<ExcelOperationId, ExcelOperationStatus> {
  return Object.fromEntries(
    EXCEL_OPERATION_IDS.map((id) => [id, status]),
  ) as Record<ExcelOperationId, ExcelOperationStatus>;
}

export function isExcelOperationApplicable(
  id: ExcelOperationId,
  conditional: unknown,
): boolean {
  if (id === 4 || id === 5 || id === 6) {
    return isRecord(conditional) && conditional[id] === true;
  }
  return true;
}

function defaultPlatform(scenario: ExcelScenario): ExcelPlatformSelection {
  return {
    type: "power_apps",
    product: "Microsoft Power Apps",
    plan: "Premium",
    activeUsers: scenario.users,
    externalUsers: 0,
  };
}

function defaultCostInputs(
  scenario: ExcelScenario,
  pathway: ExcelPathwayId,
): ExcelCostInputs {
  return {
    ...EXCEL_TCO_ASSUMPTIONS[scenario.id][pathway],
    licensedUsers: scenario.users,
    hourlyCost: EXCEL_TCO_HOURLY_COST,
    workingWeeksPerYear: EXCEL_TCO_WORKING_WEEKS,
  };
}

export function createExcelCandidateDossier(
  scenario: ExcelScenario,
  pathway: ExcelPathwayId,
): ExcelCandidateDossier {
  const conditionalOperations = conditionalOperationsForScenario(scenario.id);
  const powerApps = pathway === "named_platform";
  return {
    pathway,
    operations: createExcelOperationAssessments(conditionalOperations),
    conditionalOperations,
    criterion: {
      met: false,
      evidenceLevel: "declared",
      reference: "",
      evidenceDate: "",
      verifiedBy: "",
    },
    standardCoveragePercent: 80,
    platform: defaultPlatform(scenario),
    costInputs: defaultCostInputs(scenario, pathway),
    costBasis: {
      confirmed: false,
      source: powerApps
        ? "Microsoft Power Apps Pricing + estimation pédagogique à remplacer"
        : "Estimation pédagogique à remplacer par vos mesures ou devis",
      sourceDate: EXCEL_SOURCE_VERIFIED_ON,
      currency: "EUR",
      horizonMonths: EXCEL_TCO_HORIZON_MONTHS,
      coverage:
        "Postes visibles du diagnostic ; montants à confirmer pour votre organisation",
      owner: "",
      exclusions:
        "Fiscalité, inflation, risque extrême et coûts non saisis restent exclus",
      zeroXConfirmed: false,
      zeroXJustification: "",
      zeroIConfirmed: false,
      zeroIJustification: "",
    },
  };
}

export function createExcelCandidateDossiers(
  scenario: ExcelScenario,
): Record<ExcelPathwayId, ExcelCandidateDossier> {
  return Object.fromEntries(
    EXCEL_PATHWAY_IDS.map((pathway) => [
      pathway,
      createExcelCandidateDossier(scenario, pathway),
    ]),
  ) as Record<ExcelPathwayId, ExcelCandidateDossier>;
}

export function changeExcelPlatformType(
  dossier: ExcelCandidateDossier,
  type: ExcelPlatformType,
  scenario: ExcelScenario,
): ExcelCandidateDossier {
  if (dossier.pathway !== "named_platform") return dossier;
  if (type === "power_apps") {
    return {
      ...createExcelCandidateDossier(scenario, "named_platform"),
      operations: structuredClone(dossier.operations),
      conditionalOperations: { ...dossier.conditionalOperations },
      criterion: { ...dossier.criterion },
    };
  }

  const product =
    type === "appsheet"
      ? "Google AppSheet"
      : type === "airtable"
        ? "Airtable"
        : "";
  const emptyInputs = Object.fromEntries(
    EXCEL_COST_FIELDS.map(({ key }) => [key, Number.NaN]),
  ) as unknown as ExcelCostInputs;
  emptyInputs.licensedUsers = scenario.users;

  return {
    ...dossier,
    platform: {
      type,
      product,
      plan: "",
      activeUsers: scenario.users,
      externalUsers: 0,
    },
    costInputs: emptyInputs,
    costBasis: {
      ...dossier.costBasis,
      confirmed: false,
      source: "",
      sourceDate: "",
      currency: "",
      coverage: "",
      owner: "",
      exclusions: "",
      xMin: undefined,
      xMax: undefined,
      iMin: undefined,
      iMax: undefined,
      zeroXConfirmed: false,
      zeroXJustification: "",
      zeroIConfirmed: false,
      zeroIJustification: "",
    },
  };
}

export function changeExcelPlatformProduct(
  dossier: ExcelCandidateDossier,
  product: string,
): ExcelCandidateDossier {
  if (
    dossier.pathway !== "named_platform" ||
    dossier.platform.product === product
  ) {
    return dossier;
  }
  const invalidatedInputs = Object.fromEntries(
    EXCEL_COST_FIELDS.map(({ key }) => [key, Number.NaN]),
  ) as unknown as ExcelCostInputs;
  invalidatedInputs.licensedUsers = dossier.costInputs.licensedUsers;
  return {
    ...dossier,
    platform: { ...dossier.platform, product, plan: "" },
    costInputs: invalidatedInputs,
    costBasis: {
      ...dossier.costBasis,
      confirmed: false,
      source: "",
      sourceDate: "",
      currency: "",
      coverage: "",
      owner: "",
      exclusions: "",
      xMin: undefined,
      xMax: undefined,
      iMin: undefined,
      iMax: undefined,
      zeroXConfirmed: false,
      zeroXJustification: "",
      zeroIConfirmed: false,
      zeroIJustification: "",
    },
  };
}

export function changeExcelPlatformPlan(
  dossier: ExcelCandidateDossier,
  plan: string,
): ExcelCandidateDossier {
  if (dossier.pathway !== "named_platform" || dossier.platform.plan === plan) {
    return dossier;
  }
  const invalidatedInputs = Object.fromEntries(
    EXCEL_COST_FIELDS.map(({ key }) => [key, Number.NaN]),
  ) as unknown as ExcelCostInputs;
  invalidatedInputs.licensedUsers = dossier.costInputs.licensedUsers;
  return {
    ...dossier,
    platform: { ...dossier.platform, plan },
    costInputs: invalidatedInputs,
    costBasis: {
      ...dossier.costBasis,
      confirmed: false,
      source: "",
      sourceDate: "",
      currency: "",
      coverage: "",
      owner: "",
      exclusions: "",
      xMin: undefined,
      xMax: undefined,
      iMin: undefined,
      iMax: undefined,
      zeroXConfirmed: false,
      zeroXJustification: "",
      zeroIConfirmed: false,
      zeroIJustification: "",
    },
  };
}

export function calculateKnownExcelTco(
  scenario: ExcelScenario,
  assumption: ExcelTcoAssumption,
): number {
  return calculateExcelCostTotal(
    {
      ...assumption,
      licensedUsers: scenario.users,
      hourlyCost: EXCEL_TCO_HOURLY_COST,
      workingWeeksPerYear: EXCEL_TCO_WORKING_WEEKS,
    },
    EXCEL_TCO_HORIZON_MONTHS,
  );
}

export function calculateExcelCostTotal(
  inputs: ExcelCostInputs,
  horizonMonths: number,
): number {
  const years = horizonMonths / 12;
  return (
    inputs.initialAndMigration +
    inputs.fixedMonthly * horizonMonths +
    inputs.perUserMonthly * inputs.licensedUsers * horizonMonths +
    inputs.adminHoursMonthly * inputs.hourlyCost * horizonMonths +
    inputs.annualMaintenance * years +
    inputs.formationIntegrationExit +
    inputs.residualHoursWeekly *
      inputs.workingWeeksPerYear *
      years *
      inputs.hourlyCost
  );
}

export function getExcelScenarioTcos(
  scenarioId: ExcelScenarioId,
): Record<ExcelPathwayId, number> {
  const scenario = EXCEL_SCENARIOS[scenarioId];
  return Object.fromEntries(
    EXCEL_PATHWAY_IDS.map((pathway) => [
      pathway,
      calculateKnownExcelTco(
        scenario,
        EXCEL_TCO_ASSUMPTIONS[scenarioId][pathway],
      ),
    ]),
  ) as Record<ExcelPathwayId, number>;
}

function isRecord(value: unknown): value is Record<PropertyKey, unknown> {
  return typeof value === "object" && value !== null;
}

function includesValue<const T extends readonly string[]>(
  values: T,
  value: unknown,
): value is T[number] {
  return typeof value === "string" && values.includes(value);
}

function isCanonicalExcelScenario(value: unknown): value is ExcelScenario {
  if (!isRecord(value) || !includesValue(EXCEL_SCENARIO_IDS, value.id)) {
    return false;
  }
  const canonical = EXCEL_SCENARIOS[value.id];
  return (
    value.label === canonical.label &&
    value.users === canonical.users &&
    value.rows === canonical.rows &&
    value.initialResidualHoursWeekly === canonical.initialResidualHoursWeekly &&
    value.roles === canonical.roles &&
    value.integrations === canonical.integrations &&
    value.usage === canonical.usage
  );
}

function isMeaningful(value: unknown, minimum = 4): value is string {
  return typeof value === "string" && value.trim().length >= minimum;
}

function identifiesVerifierAndRole(value: unknown): value is string {
  if (typeof value !== "string") return false;
  const normalized = value.trim();
  if (normalized.length < 8) return false;
  const separated = normalized
    .split(/[,;–—-]+/)
    .map((part) => part.trim())
    .filter(Boolean);
  if (separated.length >= 2) {
    return (
      separated[0].length >= 3 &&
      separated.slice(1).join(" ").trim().length >= 3
    );
  }
  return normalized.split(/\s+/).filter(Boolean).length >= 3;
}

export function isValidExcelIsoDate(value: unknown): value is string {
  if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return false;
  }
  const parsed = new Date(`${value}T00:00:00Z`);
  if (Number.isNaN(parsed.getTime())) return false;
  if (parsed.toISOString().slice(0, 10) !== value) return false;
  return true;
}

export function isValidExcelDecisionDate(
  decisionDate: unknown,
  currentDate: unknown,
): boolean {
  return (
    isValidExcelIsoDate(decisionDate) &&
    isValidExcelIsoDate(currentDate) &&
    decisionDate <= currentDate
  );
}

export function isValidExcelEvidenceDate(
  value: unknown,
  decisionDate: unknown,
): boolean {
  return (
    isValidExcelIsoDate(value) &&
    isValidExcelIsoDate(decisionDate) &&
    value <= decisionDate
  );
}

function hasDocumentedEvidence(
  level: unknown,
  reference: unknown,
  date: unknown,
  verifiedBy: unknown,
  decisionDate: string,
): boolean {
  if (
    !includesValue(EXCEL_EVIDENCE_LEVELS, level) ||
    level === "declared" ||
    !isMeaningful(reference, 6) ||
    !isValidExcelEvidenceDate(date, decisionDate)
  ) {
    return false;
  }
  return level === "documented" || identifiesVerifierAndRole(verifiedBy);
}

function hasUsableNumber(value: unknown): value is number {
  return (
    typeof value === "number" &&
    Number.isFinite(value) &&
    value >= 0 &&
    value <= EXCEL_MAX_SAFE_COST_AMOUNT
  );
}

function validateCostBasis(
  dossier: ExcelCandidateDossier,
  decisionDate: string,
): string[] {
  const errors: string[] = [];
  if (
    !isRecord(dossier.costBasis) ||
    !isRecord(dossier.costInputs) ||
    !isRecord(dossier.platform)
  ) {
    return ["base, postes de coût ou plateforme hors schéma"];
  }
  const { costBasis, costInputs, platform } = dossier;

  if (costBasis.confirmed !== true) {
    errors.push(
      "base de coût non attestée : tous les postes doivent être remplacés ou confirmés",
    );
  }
  for (const { key, label } of EXCEL_COST_FIELDS) {
    if (!hasUsableNumber(costInputs[key])) {
      errors.push(`poste de coût invalide ou manquant : ${label}`);
    }
  }
  if (
    Number.isFinite(costInputs.licensedUsers) &&
    !Number.isInteger(costInputs.licensedUsers)
  ) {
    errors.push("le nombre d’utilisateurs licenciés doit être entier");
  }
  if (
    !Number.isInteger(costBasis.horizonMonths) ||
    costBasis.horizonMonths !== EXCEL_TCO_HORIZON_MONTHS
  ) {
    errors.push("l’horizon doit être exactement de 48 mois");
  }
  if (!isMeaningful(costBasis.source, 6)) {
    errors.push("source ou référence de coût manquante");
  }
  if (!isValidExcelEvidenceDate(costBasis.sourceDate, decisionDate)) {
    errors.push("date de source de coût invalide ou postérieure à la décision");
  }
  if (!includesValue(EXCEL_CURRENCIES, costBasis.currency)) {
    errors.push("devise absente ou hors liste ISO autorisée");
  }
  if (!isMeaningful(costBasis.coverage, 8)) {
    errors.push("couverture de la base de coût manquante");
  }
  if (!isMeaningful(costBasis.owner, 3)) {
    errors.push("responsable de la base de coût manquant");
  }
  if (!isMeaningful(costBasis.exclusions, 4)) {
    errors.push("exclusions de la base de coût manquantes");
  }
  if (!includesValue(EXCEL_PLATFORM_TYPES, platform.type)) {
    errors.push("type de plateforme hors liste autorisée");
  }

  if (dossier.pathway === "named_platform") {
    if (!isMeaningful(platform.product, 3)) {
      errors.push("produit de plateforme manquant");
    }
    if (!isMeaningful(platform.plan, 2)) {
      errors.push("plan de plateforme manquant");
    }
    if (
      !Number.isInteger(platform.activeUsers) ||
      platform.activeUsers < 1 ||
      !Number.isInteger(platform.externalUsers) ||
      platform.externalUsers < 0
    ) {
      errors.push("population interne/externe invalide");
    } else if (
      costInputs.licensedUsers !==
      platform.activeUsers + platform.externalUsers
    ) {
      errors.push(
        "les utilisateurs licenciés doivent couvrir actifs et externes",
      );
    }
    if (costInputs.perUserMonthly === 17.3) {
      const validPowerAppsPreset =
        platform.type === "power_apps" &&
        platform.product === "Microsoft Power Apps" &&
        platform.plan === "Premium" &&
        costBasis.currency === "EUR" &&
        /microsoft/i.test(costBasis.source) &&
        /power apps/i.test(costBasis.source) &&
        isValidExcelEvidenceDate(costBasis.sourceDate, decisionDate);
      if (!validPowerAppsPreset) {
        errors.push(
          "17,30 est réservé à Power Apps Premium en EUR avec source Microsoft datée",
        );
      }
    }
  }

  const bounds = [
    costBasis.xMin,
    costBasis.xMax,
    costBasis.iMin,
    costBasis.iMax,
  ];
  if (bounds.some((value) => value === undefined)) {
    errors.push("bornes X/I incomplètes");
  } else if (
    bounds.some(
      (value) =>
        value === undefined ||
        !Number.isFinite(value) ||
        value < 0 ||
        value > EXCEL_MAX_SAFE_COST_AMOUNT,
    )
  ) {
    errors.push("borne X/I invalide ou hors domaine numérique sûr");
  } else {
    if ((costBasis.xMin as number) > (costBasis.xMax as number)) {
      errors.push("borne X minimale supérieure à la maximale");
    }
    if ((costBasis.iMin as number) > (costBasis.iMax as number)) {
      errors.push("borne I minimale supérieure à la maximale");
    }
    if (costBasis.xMin === 0 && costBasis.xMax === 0) {
      if (
        costBasis.zeroXConfirmed !== true ||
        !isMeaningful(costBasis.zeroXJustification, 8)
      ) {
        errors.push("X à zéro non confirmé et non justifié");
      }
    }
    if (costBasis.iMin === 0 && costBasis.iMax === 0) {
      if (
        costBasis.zeroIConfirmed !== true ||
        !isMeaningful(costBasis.zeroIJustification, 8)
      ) {
        errors.push("I à zéro non confirmé et non justifié");
      }
    }
  }

  return errors;
}

function buildCostInterval(
  dossier: ExcelCandidateDossier,
): ExcelCostInterval | null {
  const { costBasis } = dossier;
  if (
    costBasis.xMin === undefined ||
    costBasis.xMax === undefined ||
    costBasis.iMin === undefined ||
    costBasis.iMax === undefined
  ) {
    return null;
  }
  const knownAmount = calculateExcelCostTotal(
    dossier.costInputs,
    costBasis.horizonMonths,
  );
  const minimum = knownAmount + costBasis.xMin + costBasis.iMin;
  const maximum = knownAmount + costBasis.xMax + costBasis.iMax;
  if (
    !Number.isFinite(knownAmount) ||
    !Number.isFinite(minimum) ||
    !Number.isFinite(maximum) ||
    knownAmount < 0 ||
    minimum < knownAmount ||
    maximum < minimum ||
    maximum > EXCEL_MAX_SAFE_COST_AMOUNT
  ) {
    return null;
  }
  return {
    pathway: dossier.pathway,
    knownAmount,
    minimum,
    maximum,
  };
}

export function evaluateExcelCandidate(
  dossier: ExcelCandidateDossier,
  readiness: ExcelSharedReadiness,
  decisionDate: string,
  currentDate: string,
): ExcelCandidateResult {
  const invalidInputs: string[] = [];
  const missingEvidence: string[] = [];
  const unknownOperations: ExcelOperationId[] = [];
  const failedOperations: ExcelOperationId[] = [];
  const documentedFailedOperations: ExcelOperationId[] = [];
  const rawDossier: unknown = dossier;
  const pathway =
    isRecord(rawDossier) && includesValue(EXCEL_PATHWAY_IDS, rawDossier.pathway)
      ? rawDossier.pathway
      : "keep_excel";

  if (!isRecord(rawDossier)) {
    invalidInputs.push("dossier hors schéma");
  } else if (!includesValue(EXCEL_PATHWAY_IDS, rawDossier.pathway)) {
    invalidInputs.push("voie hors liste autorisée");
  }

  const candidate = isRecord(rawDossier)
    ? (rawDossier as unknown as ExcelCandidateDossier)
    : createExcelCandidateDossier(EXCEL_SCENARIOS.central, pathway);
  const rawConditional: unknown = candidate.conditionalOperations;
  const conditionalValid =
    isRecord(rawConditional) &&
    ([4, 5, 6] as const).every((id) => typeof rawConditional[id] === "boolean");
  if (!conditionalValid) {
    invalidInputs.push(
      "applicabilité des opérations 4, 5 et 6 hors schéma booléen",
    );
  }
  const conditionalOperations: Record<ExcelConditionalOperationId, boolean> =
    conditionalValid
      ? (rawConditional as unknown as Record<
          ExcelConditionalOperationId,
          boolean
        >)
      : { 4: true, 5: true, 6: true };
  const applicableIds = EXCEL_OPERATION_IDS.filter((id) =>
    isExcelOperationApplicable(id, conditionalOperations),
  );
  const rawOperations: Record<PropertyKey, unknown> = isRecord(
    candidate.operations,
  )
    ? (candidate.operations as unknown as Record<PropertyKey, unknown>)
    : {};
  if (!isRecord(candidate.operations)) {
    invalidInputs.push("tableau des opérations hors schéma");
  }

  const decisionDateValid = isValidExcelDecisionDate(decisionDate, currentDate);
  if (!isValidExcelIsoDate(currentDate)) {
    invalidInputs.push("date courante de référence mal formée");
  }
  if (!decisionDateValid) {
    invalidInputs.push("date de décision absente, mal formée ou future");
  }

  for (const operation of EXCEL_TEST_OPERATIONS) {
    const rawAssessment = rawOperations[operation.id];
    const applicable = isExcelOperationApplicable(
      operation.id,
      conditionalOperations,
    );
    if (!isRecord(rawAssessment)) {
      invalidInputs.push(`opération ${operation.id} absente ou hors schéma`);
      continue;
    }
    const assessment = rawAssessment as unknown as ExcelOperationAssessment;
    if (!includesValue(EXCEL_OPERATION_STATUSES, assessment.status)) {
      invalidInputs.push(`opération ${operation.id} : statut hors liste`);
      continue;
    }
    if (!includesValue(EXCEL_EVIDENCE_LEVELS, assessment.evidenceLevel)) {
      invalidInputs.push(
        `opération ${operation.id} : niveau de preuve hors liste`,
      );
      continue;
    }
    if (
      typeof assessment.reference !== "string" ||
      typeof assessment.evidenceDate !== "string" ||
      typeof assessment.verifiedBy !== "string" ||
      typeof assessment.notApplicableReason !== "string" ||
      typeof assessment.notApplicableDate !== "string"
    ) {
      invalidInputs.push(`opération ${operation.id} : champs hors schéma`);
      continue;
    }
    if (!applicable) {
      if (operation.id !== 4 && operation.id !== 5 && operation.id !== 6) {
        invalidInputs.push(
          `opération universelle ${operation.id} déclarée non applicable`,
        );
      } else if (
        assessment.status !== "not_applicable" ||
        !isMeaningful(assessment.notApplicableReason, 8) ||
        !isValidExcelEvidenceDate(assessment.notApplicableDate, decisionDate)
      ) {
        missingEvidence.push(
          `opération ${operation.id} : motif et date de non-applicabilité requis`,
        );
      }
      continue;
    }

    if (assessment.status === "not_applicable") {
      invalidInputs.push(
        `opération applicable ${operation.id} marquée non applicable`,
      );
    } else if (assessment.status === "unknown") {
      unknownOperations.push(operation.id);
    } else if (assessment.status === "fail") {
      failedOperations.push(operation.id);
      if (
        !hasDocumentedEvidence(
          assessment.evidenceLevel,
          assessment.reference,
          assessment.evidenceDate,
          assessment.verifiedBy,
          decisionDate,
        )
      ) {
        missingEvidence.push(
          `opération ${operation.id} en échec : pièce documentée ou vérification attribuée requise`,
        );
      } else {
        documentedFailedOperations.push(operation.id);
      }
    } else if (
      !hasDocumentedEvidence(
        assessment.evidenceLevel,
        assessment.reference,
        assessment.evidenceDate,
        assessment.verifiedBy,
        decisionDate,
      )
    ) {
      missingEvidence.push(
        `opération ${operation.id} : pièce documentée ou vérification attribuée requise`,
      );
    }
  }

  if (
    pathway === "standard_software" &&
    (typeof candidate.standardCoveragePercent !== "number" ||
      !Number.isFinite(candidate.standardCoveragePercent) ||
      candidate.standardCoveragePercent < 0 ||
      candidate.standardCoveragePercent > 100)
  ) {
    invalidInputs.push("couverture standard hors de l’intervalle 0–100");
  }

  const readinessBooleanKeys = [
    "processStable",
    "dataReady",
    "ownerAndDeputyNamed",
    "benefitMeasured",
  ] as const;
  const rawReadiness: unknown = readiness;
  if (!isRecord(rawReadiness)) {
    invalidInputs.push("préparation commune hors schéma");
  } else {
    for (const key of readinessBooleanKeys) {
      if (typeof rawReadiness[key] !== "boolean") {
        invalidInputs.push(`préparation ${key} hors schéma booléen`);
      }
    }
    if (
      typeof rawReadiness.reference !== "string" ||
      typeof rawReadiness.evidenceDate !== "string"
    ) {
      invalidInputs.push("référence ou date de préparation hors schéma");
    }
  }
  const safeReadiness = isRecord(rawReadiness)
    ? rawReadiness
    : ({} as Record<PropertyKey, unknown>);
  const missingReadiness = [
    safeReadiness.processStable === false
      ? "processus et exceptions non stabilisés"
      : null,
    safeReadiness.dataReady === false
      ? "données et jeu d’essai non prêts"
      : null,
    safeReadiness.ownerAndDeputyNamed === false
      ? "propriétaire et suppléant non nommés"
      : null,
    safeReadiness.benefitMeasured === false
      ? "bénéfice non mesuré sur dix jours ouvrés"
      : null,
    !isMeaningful(safeReadiness.reference, 6)
      ? "référence commune de préparation manquante"
      : null,
    !isValidExcelEvidenceDate(safeReadiness.evidenceDate, decisionDate)
      ? "date de préparation invalide ou postérieure à la décision"
      : null,
  ].filter((item): item is string => item !== null);

  const costErrors = validateCostBasis(candidate, decisionDate);
  missingEvidence.push(...costErrors);
  const costInterval =
    costErrors.length === 0 ? buildCostInterval(candidate) : null;
  if (costErrors.length === 0 && costInterval === null) {
    invalidInputs.push(
      "intervalle de coût hors domaine numérique sûr : réduire les montants ou la portée",
    );
  }
  const rawCriterion: unknown = candidate.criterion;
  let criterionDocumented = false;
  let criterionMet = false;
  if (!isRecord(rawCriterion)) {
    invalidInputs.push("critère propre absent ou hors schéma");
  } else {
    if (typeof rawCriterion.met !== "boolean") {
      invalidInputs.push("résultat du critère propre hors schéma booléen");
    } else {
      criterionMet = rawCriterion.met;
    }
    if (!includesValue(EXCEL_EVIDENCE_LEVELS, rawCriterion.evidenceLevel)) {
      invalidInputs.push("niveau de preuve du critère propre hors liste");
    }
    if (
      typeof rawCriterion.reference !== "string" ||
      typeof rawCriterion.evidenceDate !== "string" ||
      typeof rawCriterion.verifiedBy !== "string"
    ) {
      invalidInputs.push("champs de preuve du critère propre hors schéma");
    } else if (
      includesValue(EXCEL_EVIDENCE_LEVELS, rawCriterion.evidenceLevel)
    ) {
      criterionDocumented = hasDocumentedEvidence(
        rawCriterion.evidenceLevel,
        rawCriterion.reference,
        rawCriterion.evidenceDate,
        rawCriterion.verifiedBy,
        decisionDate,
      );
    }
  }
  if (!criterionDocumented) {
    missingEvidence.push(
      "critère propre : pièce documentée ou vérification attribuée requise",
    );
  }
  const passedOperations = applicableIds.filter(
    (id) => isRecord(rawOperations[id]) && rawOperations[id].status === "pass",
  ).length;
  if (
    passedOperations + failedOperations.length + unknownOperations.length !==
    applicableIds.length
  ) {
    invalidInputs.push(
      "toutes les opérations applicables doivent avoir un statut reconnu",
    );
  }
  const base = {
    pathway,
    failedOperations,
    unknownOperations,
    missingEvidence,
    invalidInputs,
    missingReadiness,
    passedOperations,
    applicableOperations: applicableIds.length,
    costInterval,
  };

  if (invalidInputs.length > 0) {
    return {
      ...base,
      verdict: "report",
      label: "Dossier à corriger",
      title: "Ce dossier contient une valeur impossible à interpréter.",
      summary:
        "Une entrée invalide ne permet ni de retenir ni d’écarter cette voie. Corrigez les statuts, la couverture ou les nombres avant toute comparaison.",
      actions: [
        `Corriger : ${invalidInputs.join(" ; ")}.`,
        "Rejouer le dossier sans réutiliser les réponses d’une autre voie.",
      ],
    };
  }

  if (documentedFailedOperations.length > 0) {
    return {
      ...base,
      verdict: "stop",
      label: "Écarter cette voie",
      title: "Au moins une opération applicable échoue.",
      summary:
        "L’opération 1 comme chaque bloqueur doit réussir : une moyenne ne compense pas une création, une restauration ou une sortie défaillante.",
      actions: [
        `Corriger et rejouer les opérations ${documentedFailedOperations.join(", ")}.`,
        "Conserver la preuve de l’échec et du nouveau test.",
      ],
    };
  }

  if (!criterionMet && criterionDocumented) {
    return {
      ...base,
      verdict: "stop",
      label: "Écarter cette voie",
      title: "La condition propre à cette voie n’est pas satisfaite.",
      summary: EXCEL_PATHWAYS[pathway].gate,
      actions: [
        "Tester d’abord la voie moins complexe encore admissible.",
        "Ne pas lancer un achat ou un développement sur une préférence d’outil.",
      ],
    };
  }

  if (
    pathway === "standard_software" &&
    candidate.standardCoveragePercent < 80
  ) {
    return {
      ...base,
      verdict: "stop",
      label: "Écarter cette voie",
      title: "Le standard couvre moins de 80 % des exigences applicables.",
      summary:
        "Un prix catalogue ne répare pas les contournements. Testez un autre produit ou réduisez explicitement le besoin.",
      actions: [
        "Lister chaque écart et son coût annuel de contournement.",
        "Tester un autre produit standard avec la même fiche.",
      ],
    };
  }

  if (
    unknownOperations.length > 0 ||
    missingEvidence.length > 0 ||
    missingReadiness.length > 0
  ) {
    return {
      ...base,
      verdict: "report",
      label: "Dossier à compléter",
      title:
        "Une inconnue ou une preuve insuffisante interdit de classer cette voie.",
      summary:
        "Une déclaration n’est pas une preuve. Documentez chaque réussite, chaque non-applicabilité et la base de coût avant de comparer.",
      actions: [
        unknownOperations.length > 0
          ? `Tester les opérations ${unknownOperations.join(", ")}.`
          : "Conserver les références datées des opérations.",
        missingEvidence.length > 0
          ? `Compléter : ${missingEvidence.join(" ; ")}.`
          : "Faire vérifier les pièces par un tiers.",
        missingReadiness.length > 0
          ? `Lever : ${missingReadiness.join(" ; ")}.`
          : "Figer la version du dossier.",
      ],
    };
  }

  return {
    ...base,
    verdict: "eligible",
    label: "Admissible à la comparaison",
    title: `${EXCEL_PATHWAYS[pathway].label} possède un dossier exploitable.`,
    summary:
      "Cette voie peut entrer dans la comparaison économique. Elle n’est pas encore le choix final.",
    actions: [
      "Comparer son intervalle de coût aux autres voies admissibles.",
      "Conserver la version, les sources et les pièces du dossier.",
    ],
  };
}

function comparisonCorrection(
  title: string,
  summary: string,
  actions: string[],
): ExcelComparisonResult {
  return {
    verdict: "report",
    label: "Reporter la décision",
    title,
    summary,
    selectedPathway: null,
    candidateResults: {},
    unresolvedPathways: [...EXCEL_PATHWAY_IDS],
    eligiblePathways: [],
    actions,
  };
}

export function evaluateExcelComparison(
  input: ExcelComparisonInput,
): ExcelComparisonResult {
  const rawInput: unknown = input;
  if (!isRecord(rawInput)) {
    return comparisonCorrection(
      "Le dossier de comparaison est absent ou hors schéma.",
      "Aucune voie n’est évaluée tant que le cas commun n’est pas un objet structuré.",
      [
        "Renseigner le scénario, la préparation, les cinq dossiers et les dates.",
        "Relancer la comparaison après correction.",
      ],
    );
  }
  const inputRecord = rawInput;
  if (!isCanonicalExcelScenario(inputRecord.scenario)) {
    return comparisonCorrection(
      "Le scénario est absent, modifié ou hors liste.",
      "Utilisez sans altération un scénario simple, central ou exigeant. Une valeur libre ne peut ni retenir ni écarter une voie.",
      [
        "Choisir de nouveau l’un des trois scénarios proposés.",
        "Recréer les cinq dossiers depuis ce scénario.",
      ],
    );
  }
  const scenario = inputRecord.scenario;
  const rawDossiers = isRecord(inputRecord.dossiers)
    ? inputRecord.dossiers
    : ({} as Record<PropertyKey, unknown>);
  const decisionDate =
    typeof inputRecord.decisionDate === "string"
      ? inputRecord.decisionDate
      : "";
  const currentDate =
    typeof inputRecord.currentDate === "string" ? inputRecord.currentDate : "";
  const readiness = inputRecord.readiness as ExcelSharedReadiness;
  const mismatchedPathways = EXCEL_PATHWAY_IDS.filter((pathway) => {
    const dossier = rawDossiers[pathway];
    return (
      dossier !== undefined &&
      (!isRecord(dossier) || dossier.pathway !== pathway)
    );
  });
  const expectedConditional = conditionalOperationsForScenario(scenario.id);
  const scenarioScopeMismatches = EXCEL_PATHWAY_IDS.filter((pathway) => {
    const dossier = rawDossiers[pathway];
    if (!isRecord(dossier) || dossier.pathway !== pathway) {
      return false;
    }
    const conditional = dossier.conditionalOperations;
    if (!isRecord(conditional)) return false;
    return ([4, 5, 6] as const).some(
      (id) => conditional[id] !== expectedConditional[id],
    );
  });
  if (mismatchedPathways.length > 0 || scenarioScopeMismatches.length > 0) {
    return comparisonCorrection(
      mismatchedPathways.length > 0
        ? "Un dossier est rangé sous la mauvaise voie."
        : "Les exigences conditionnelles divergent du scénario choisi.",
      "La clé de chaque dossier et l’applicabilité des opérations 4, 5 et 6 doivent provenir du même scénario commun.",
      [
        mismatchedPathways.length > 0
          ? `Reclasser : ${mismatchedPathways.map((id) => EXCEL_PATHWAYS[id].label).join(", ")}.`
          : `Recréer depuis le scénario ${scenario.label} : ${scenarioScopeMismatches.map((id) => EXCEL_PATHWAYS[id].label).join(", ")}.`,
        "Rejouer les cinq dossiers après correction.",
      ],
    );
  }
  const populationMismatches = EXCEL_PATHWAY_IDS.filter((pathway) => {
    const dossier = rawDossiers[pathway];
    return (
      isRecord(dossier) &&
      dossier.pathway === pathway &&
      isRecord(dossier.costInputs) &&
      dossier.costInputs.licensedUsers !== scenario.users
    );
  });
  if (populationMismatches.length > 0) {
    return comparisonCorrection(
      "Les cinq voies ne chiffrent pas la même population.",
      `Le scénario ${scenario.label} fixe ${scenario.users} utilisateurs. Chaque coût doit couvrir cette population entière, externes compris, avant toute comparaison.`,
      [
        `Corriger les utilisateurs licenciés : ${populationMismatches.map((id) => EXCEL_PATHWAYS[id].label).join(", ")}.`,
        "Vérifier que les utilisateurs actifs et externes de la plateforme totalisent la même population.",
        "Recalculer les cinq dossiers sur ce périmètre commun.",
      ],
    );
  }
  const candidateResults = Object.fromEntries(
    EXCEL_PATHWAY_IDS.flatMap((pathway) => {
      const dossier = rawDossiers[pathway];
      return isRecord(dossier) && dossier.pathway === pathway
        ? [
            [
              pathway,
              evaluateExcelCandidate(
                dossier as unknown as ExcelCandidateDossier,
                readiness,
                decisionDate,
                currentDate,
              ),
            ],
          ]
        : [];
    }),
  ) as Partial<Record<ExcelPathwayId, ExcelCandidateResult>>;
  const missingPathways = EXCEL_PATHWAY_IDS.filter(
    (pathway) => !rawDossiers[pathway],
  );
  const unresolvedPathways = EXCEL_PATHWAY_IDS.filter(
    (pathway) =>
      !candidateResults[pathway] ||
      candidateResults[pathway]?.verdict === "report",
  );
  const eligiblePathways = EXCEL_PATHWAY_IDS.filter(
    (pathway) => candidateResults[pathway]?.verdict === "eligible",
  );

  if (missingPathways.length > 0 || unresolvedPathways.length > 0) {
    return {
      verdict: "report",
      label: "Reporter la décision",
      title:
        "Les cinq dossiers ne permettent pas encore un classement défendable.",
      summary:
        "Un candidat incomplet pourrait changer l’ordre. Il reste donc visible et bloque la sélection, au lieu d’être traité comme un coût nul.",
      selectedPathway: null,
      candidateResults,
      unresolvedPathways,
      eligiblePathways,
      actions: [
        `Compléter : ${unresolvedPathways.map((id) => EXCEL_PATHWAYS[id].label).join(", ")}.`,
        "Écarter explicitement une voie seulement avec un échec ou un critère documenté.",
        "Recalculer les cinq dossiers sur le même scénario.",
      ],
    };
  }

  if (eligiblePathways.length === 0) {
    return {
      verdict: "stop",
      label: "Arrêter",
      title: "Aucune voie ne reste admissible.",
      summary:
        "Conservez le mode dégradé, revoyez le besoin et ne forcez pas une solution parmi cinq dossiers écartés.",
      selectedPathway: null,
      candidateResults,
      unresolvedPathways,
      eligiblePathways,
      actions: [
        "Revenir au problème et aux règles métier.",
        "Corriger les bloqueurs avant de relancer une comparaison.",
      ],
    };
  }

  const eligibleCurrencies = new Set(
    eligiblePathways.map((pathway) => {
      const dossier = rawDossiers[pathway];
      return isRecord(dossier) && isRecord(dossier.costBasis)
        ? dossier.costBasis.currency
        : undefined;
    }),
  );
  if (eligibleCurrencies.size > 1) {
    return {
      verdict: "report",
      label: "Reporter la décision",
      title: "Les voies admissibles ne sont pas chiffrées dans la même devise.",
      summary:
        "Des devises différentes ne se comparent pas directement. Convertissez tous les dossiers dans une devise commune avec un taux, une source et une date documentés.",
      selectedPathway: null,
      candidateResults,
      unresolvedPathways: eligiblePathways,
      eligiblePathways,
      actions: [
        "Choisir une devise commune.",
        "Documenter le taux de change, sa source et sa date dans chaque base.",
        "Recalculer tous les postes et les bornes avant de classer.",
      ],
    };
  }

  const intervals = eligiblePathways
    .map((pathway) => candidateResults[pathway]?.costInterval)
    .filter(
      (item): item is ExcelCostInterval => item !== null && item !== undefined,
    )
    .sort((left, right) => left.minimum - right.minimum);
  if (intervals.length !== eligiblePathways.length) {
    return {
      verdict: "report",
      label: "Reporter la décision",
      title: "Un coût admissible reste incomplet.",
      summary:
        "Chaque voie fonctionnellement admissible doit avoir une base de coût structurée avant d’être classée.",
      selectedPathway: null,
      candidateResults,
      unresolvedPathways: eligiblePathways,
      eligiblePathways,
      actions: [
        "Compléter les postes, la source, la date, la devise et les bornes.",
      ],
    };
  }

  const first = intervals[0];
  const isolated = intervals
    .slice(1)
    .every((interval) => first.maximum < interval.minimum);
  if (!isolated) {
    return {
      verdict: "report",
      label: "Reporter la décision",
      title: "Les coûts admissibles se chevauchent ou sont à égalité.",
      summary:
        "Mesurez les postes qui peuvent encore inverser l’ordre. Une égalité exacte n’autorise aucun gagnant.",
      selectedPathway: null,
      candidateResults,
      unresolvedPathways: eligiblePathways,
      eligiblePathways,
      actions: [
        "Réduire les fourchettes X/I avec un devis ou une mesure.",
        "Ne pas départager au goût de l’outil.",
      ],
    };
  }

  if (first.pathway === "keep_excel") {
    return {
      verdict: "do_not_invest",
      label: "Ne pas investir",
      title: "Conserver Excel est la voie admissible la moins coûteuse.",
      summary:
        "La bonne décision n’est pas toujours une application. Gouvernez le fichier, fixez une date de réexamen et conservez les preuves.",
      selectedPathway: first.pathway,
      candidateResults,
      unresolvedPathways,
      eligiblePathways,
      actions: [
        "Documenter le fichier, son propriétaire, son suppléant et sa restauration.",
        "Définir les signaux qui rouvriront la décision.",
      ],
    };
  }

  return {
    verdict: "launch",
    label: "Lancer un pilote borné",
    title: `${EXCEL_PATHWAYS[first.pathway].label} est la voie admissible la moins coûteuse.`,
    summary:
      "Les voies plus simples ont été écartées ou coûtent davantage sur des bases datées. Le résultat autorise un pilote réversible, pas une mise en production automatique.",
    selectedPathway: first.pathway,
    candidateResults,
    unresolvedPathways,
    eligiblePathways,
    actions: [
      "Fixer durée, budget, utilisateurs, métriques et critères d’arrêt.",
      "Faire exécuter restauration et export complet par le suppléant.",
      "Décider après le pilote : déployer, corriger ou arrêter.",
    ],
  };
}

export type ExcelDatasetBoundary =
  | "invalid"
  | "empty"
  | "single_row_no_capacity_conclusion"
  | "client_window_boundary"
  | "above_client_window";

export function evaluateExcelDatasetBoundary(
  rowCount: number,
): ExcelDatasetBoundary {
  if (
    !Number.isFinite(rowCount) ||
    !Number.isInteger(rowCount) ||
    rowCount < 0
  ) {
    return "invalid";
  }
  if (rowCount === 0) return "empty";
  if (rowCount === 1) return "single_row_no_capacity_conclusion";
  if (rowCount <= 2_000) return "client_window_boundary";
  return "above_client_window";
}

const STATUS_LABELS: Record<ExcelOperationStatus, string> = {
  pass: "réussi",
  fail: "échec",
  unknown: "non testé",
  not_applicable: "non applicable",
};

const EVIDENCE_LABELS: Record<ExcelEvidenceLevel, string> = {
  declared: "déclaré",
  documented: "documenté",
  verified: "vérifié",
};

const CANDIDATE_LABELS: Record<ExcelCandidateVerdict, string> = {
  eligible: "admissible à la comparaison",
  report: "dossier à compléter",
  stop: "voie écartée",
};

const FINAL_LABELS: Record<ExcelFinalVerdict, string> = {
  launch: "lancer un pilote borné",
  report: "reporter la décision",
  stop: "arrêter",
  do_not_invest: "ne pas investir",
};

function isStringArray(value: unknown): value is string[] {
  return (
    Array.isArray(value) && value.every((item) => typeof item === "string")
  );
}

function isPathwayArray(value: unknown): value is ExcelPathwayId[] {
  return (
    Array.isArray(value) &&
    value.every((item) => includesValue(EXCEL_PATHWAY_IDS, item))
  );
}

function isOperationIdArray(value: unknown): value is ExcelOperationId[] {
  return (
    Array.isArray(value) &&
    value.every(
      (item) =>
        typeof item === "number" &&
        (EXCEL_OPERATION_IDS as readonly number[]).includes(item),
    )
  );
}

function isReportableOperationAssessment(
  value: unknown,
): value is ExcelOperationAssessment {
  return (
    isRecord(value) &&
    includesValue(EXCEL_OPERATION_STATUSES, value.status) &&
    includesValue(EXCEL_EVIDENCE_LEVELS, value.evidenceLevel) &&
    typeof value.reference === "string" &&
    typeof value.evidenceDate === "string" &&
    typeof value.verifiedBy === "string" &&
    typeof value.notApplicableReason === "string" &&
    typeof value.notApplicableDate === "string"
  );
}

function isReportableCriterion(
  value: unknown,
): value is ExcelCriterionAssessment {
  return (
    isRecord(value) &&
    typeof value.met === "boolean" &&
    includesValue(EXCEL_EVIDENCE_LEVELS, value.evidenceLevel) &&
    typeof value.reference === "string" &&
    typeof value.evidenceDate === "string" &&
    typeof value.verifiedBy === "string"
  );
}

function isReportablePlatform(value: unknown): value is ExcelPlatformSelection {
  return (
    isRecord(value) &&
    includesValue(EXCEL_PLATFORM_TYPES, value.type) &&
    typeof value.product === "string" &&
    typeof value.plan === "string" &&
    typeof value.activeUsers === "number" &&
    typeof value.externalUsers === "number"
  );
}

function isReportableCostInputs(value: unknown): value is ExcelCostInputs {
  return (
    isRecord(value) &&
    EXCEL_COST_FIELDS.every(({ key }) => typeof value[key] === "number")
  );
}

function isOptionalNumber(value: unknown): value is number | undefined {
  return value === undefined || typeof value === "number";
}

function isReportableCostBasis(value: unknown): value is ExcelCostBasis {
  return (
    isRecord(value) &&
    typeof value.confirmed === "boolean" &&
    typeof value.source === "string" &&
    typeof value.sourceDate === "string" &&
    (value.currency === "" ||
      includesValue(EXCEL_CURRENCIES, value.currency)) &&
    typeof value.horizonMonths === "number" &&
    typeof value.coverage === "string" &&
    typeof value.owner === "string" &&
    typeof value.exclusions === "string" &&
    isOptionalNumber(value.xMin) &&
    isOptionalNumber(value.xMax) &&
    isOptionalNumber(value.iMin) &&
    isOptionalNumber(value.iMax) &&
    typeof value.zeroXConfirmed === "boolean" &&
    typeof value.zeroXJustification === "string" &&
    typeof value.zeroIConfirmed === "boolean" &&
    typeof value.zeroIJustification === "string"
  );
}

function isReportableDossier(
  value: unknown,
  pathway: ExcelPathwayId,
): value is ExcelCandidateDossier {
  if (
    !isRecord(value) ||
    value.pathway !== pathway ||
    !isRecord(value.operations) ||
    !isRecord(value.conditionalOperations)
  ) {
    return false;
  }
  const operations = value.operations;
  const conditionalOperations = value.conditionalOperations;
  return (
    EXCEL_OPERATION_IDS.every((id) =>
      isReportableOperationAssessment(operations[id]),
    ) &&
    ([4, 5, 6] as const).every(
      (id) => typeof conditionalOperations[id] === "boolean",
    ) &&
    isReportableCriterion(value.criterion) &&
    typeof value.standardCoveragePercent === "number" &&
    isReportablePlatform(value.platform) &&
    isReportableCostInputs(value.costInputs) &&
    isReportableCostBasis(value.costBasis)
  );
}

function isReportableReadiness(value: unknown): value is ExcelSharedReadiness {
  return (
    isRecord(value) &&
    typeof value.processStable === "boolean" &&
    typeof value.dataReady === "boolean" &&
    typeof value.ownerAndDeputyNamed === "boolean" &&
    typeof value.benefitMeasured === "boolean" &&
    typeof value.reference === "string" &&
    typeof value.evidenceDate === "string"
  );
}

function isReportableComparisonInput(
  value: unknown,
): value is ExcelComparisonInput {
  if (
    !isRecord(value) ||
    !isCanonicalExcelScenario(value.scenario) ||
    !isReportableReadiness(value.readiness) ||
    !isRecord(value.dossiers) ||
    typeof value.decisionDate !== "string" ||
    typeof value.currentDate !== "string"
  ) {
    return false;
  }
  const dossiers = value.dossiers;
  return EXCEL_PATHWAY_IDS.every((pathway) =>
    isReportableDossier(dossiers[pathway], pathway),
  );
}

export function createExcelDecisionDraft(
  input: Omit<ExcelDecisionDraft, "version" | "savedAt">,
  savedAt = new Date().toISOString(),
): ExcelDecisionDraft {
  return {
    version: EXCEL_DIAGNOSTIC_VERSION,
    savedAt,
    scenarioId: input.scenarioId,
    activePathway: input.activePathway,
    readiness: input.readiness,
    dossiers: input.dossiers,
    decisionDate: input.decisionDate,
  };
}

export function serializeExcelDecisionDraft(draft: ExcelDecisionDraft): string {
  return JSON.stringify(draft, (_key, value: unknown) =>
    typeof value === "number" && !Number.isFinite(value)
      ? EXCEL_DECISION_DRAFT_NAN
      : value,
  );
}

export function parseExcelDecisionDraft(
  rawJson: string,
): ExcelDecisionDraft | null {
  if (
    typeof rawJson !== "string" ||
    rawJson.length === 0 ||
    new TextEncoder().encode(rawJson).byteLength >
      EXCEL_DECISION_DRAFT_MAX_BYTES
  ) {
    return null;
  }

  let value: unknown;
  try {
    value = JSON.parse(rawJson, (_key, item: unknown) =>
      item === EXCEL_DECISION_DRAFT_NAN ? Number.NaN : item,
    );
  } catch {
    return null;
  }
  if (
    !isRecord(value) ||
    value.version !== EXCEL_DIAGNOSTIC_VERSION ||
    typeof value.savedAt !== "string" ||
    Number.isNaN(new Date(value.savedAt).getTime()) ||
    !includesValue(EXCEL_SCENARIO_IDS, value.scenarioId) ||
    !includesValue(EXCEL_PATHWAY_IDS, value.activePathway) ||
    typeof value.decisionDate !== "string" ||
    (value.decisionDate !== "" && !isValidExcelIsoDate(value.decisionDate)) ||
    !isReportableReadiness(value.readiness) ||
    !isRecord(value.dossiers)
  ) {
    return null;
  }

  const scenarioId = value.scenarioId;
  const dossiers = value.dossiers;
  if (
    !EXCEL_PATHWAY_IDS.every((pathway) =>
      isReportableDossier(dossiers[pathway], pathway),
    )
  ) {
    return null;
  }
  const expectedConditional = conditionalOperationsForScenario(scenarioId);
  if (
    EXCEL_PATHWAY_IDS.some((pathway) =>
      ([4, 5, 6] as const).some(
        (id) =>
          (dossiers[pathway] as ExcelCandidateDossier).conditionalOperations[
            id
          ] !== expectedConditional[id],
      ),
    )
  ) {
    return null;
  }

  return {
    version: EXCEL_DIAGNOSTIC_VERSION,
    savedAt: value.savedAt,
    scenarioId,
    activePathway: value.activePathway,
    readiness: structuredClone(value.readiness),
    dossiers: structuredClone(
      dossiers as unknown as Record<ExcelPathwayId, ExcelCandidateDossier>,
    ),
    decisionDate: value.decisionDate,
  };
}

function isReportableCostInterval(value: unknown): value is ExcelCostInterval {
  return (
    isRecord(value) &&
    includesValue(EXCEL_PATHWAY_IDS, value.pathway) &&
    typeof value.knownAmount === "number" &&
    typeof value.minimum === "number" &&
    typeof value.maximum === "number"
  );
}

function isReportableCandidateResult(
  value: unknown,
  pathway: ExcelPathwayId,
): value is ExcelCandidateResult {
  return (
    isRecord(value) &&
    value.pathway === pathway &&
    includesValue(["eligible", "report", "stop"] as const, value.verdict) &&
    typeof value.label === "string" &&
    typeof value.title === "string" &&
    typeof value.summary === "string" &&
    isOperationIdArray(value.failedOperations) &&
    isOperationIdArray(value.unknownOperations) &&
    isStringArray(value.missingEvidence) &&
    isStringArray(value.invalidInputs) &&
    isStringArray(value.missingReadiness) &&
    typeof value.passedOperations === "number" &&
    typeof value.applicableOperations === "number" &&
    (value.costInterval === null ||
      isReportableCostInterval(value.costInterval)) &&
    isStringArray(value.actions)
  );
}

function isReportableComparisonResult(
  value: unknown,
): value is ExcelComparisonResult {
  if (
    !isRecord(value) ||
    !includesValue(
      ["launch", "report", "stop", "do_not_invest"] as const,
      value.verdict,
    ) ||
    typeof value.label !== "string" ||
    typeof value.title !== "string" ||
    typeof value.summary !== "string" ||
    !isRecord(value.candidateResults) ||
    !isPathwayArray(value.unresolvedPathways) ||
    !isPathwayArray(value.eligiblePathways) ||
    !isStringArray(value.actions) ||
    !(
      value.selectedPathway === null ||
      includesValue(EXCEL_PATHWAY_IDS, value.selectedPathway)
    )
  ) {
    return false;
  }
  const candidateResults = value.candidateResults;
  return EXCEL_PATHWAY_IDS.every((pathway) => {
    const candidate = candidateResults[pathway];
    return (
      candidate === undefined || isReportableCandidateResult(candidate, pathway)
    );
  });
}

function reportNumber(value: number | undefined, unit = ""): string {
  if (value === undefined || !Number.isFinite(value)) return "non renseigné";
  return `${value.toLocaleString("fr-FR", { maximumFractionDigits: 2 })}${unit}`;
}

function reportBoolean(value: unknown): string {
  return value === true ? "oui" : "non";
}

function buildExcelCorrectionReport(): string {
  return [
    "Décision Excel vers application — Hagnéré Code",
    `Version du modèle : ${EXCEL_DIAGNOSTIC_VERSION}`,
    `Date de vérification éditoriale des sources : ${EXCEL_SOURCE_VERIFIED_ON}`,
    "",
    "RAPPORT DE CORRECTION",
    "- Décision : reporter la décision",
    "- Voie retenue : aucune",
    "- Motif : le dossier ou son résultat est absent, incomplet ou hors schéma.",
    "- Action 1 : corriger le scénario, la préparation et les cinq dossiers.",
    "- Action 2 : relancer l’évaluation avant de copier ou imprimer.",
    "",
    "Aucun classement n’a été produit à partir de ces données.",
    "Limites : diagnostic local indicatif ; aucune homologation de sécurité, conformité, performance ou conseil juridique.",
  ].join("\n");
}

export function buildExcelDecisionReport(
  input: ExcelComparisonInput,
  result = evaluateExcelComparison(input),
): string {
  const rawInput: unknown = input;
  const rawResult: unknown = result;
  if (
    !isReportableComparisonInput(rawInput) ||
    !isReportableComparisonResult(rawResult)
  ) {
    return buildExcelCorrectionReport();
  }
  const normalizedInput = rawInput;
  const normalizedResult = evaluateExcelComparison(normalizedInput);
  if (!isReportableComparisonResult(normalizedResult)) {
    return buildExcelCorrectionReport();
  }
  const lines = [
    "Décision Excel vers application — Hagnéré Code",
    `Version du modèle : ${EXCEL_DIAGNOSTIC_VERSION}`,
    `Date de vérification éditoriale des sources : ${EXCEL_SOURCE_VERIFIED_ON}`,
    `Date de décision du dossier : ${normalizedInput.decisionDate || "non renseignée"}`,
    `Date courante utilisée pour contrôler la décision : ${normalizedInput.currentDate || "non renseignée"}`,
    `Scénario : ${normalizedInput.scenario.label}`,
    `Utilisateurs : ${normalizedInput.scenario.users}`,
    `Lignes : ${normalizedInput.scenario.rows.toLocaleString("fr-FR")}`,
    `Rôles : ${normalizedInput.scenario.roles}`,
    `Intégrations : ${normalizedInput.scenario.integrations}`,
    `Usage : ${normalizedInput.scenario.usage}`,
    "",
    "Préparation commune",
    `- Processus stable : ${reportBoolean(normalizedInput.readiness.processStable)}`,
    `- Données prêtes : ${reportBoolean(normalizedInput.readiness.dataReady)}`,
    `- Bénéfice mesuré pendant dix jours ouvrés : ${reportBoolean(normalizedInput.readiness.benefitMeasured)}`,
    `- Propriétaire et suppléant nommés : ${reportBoolean(normalizedInput.readiness.ownerAndDeputyNamed)}`,
    `- Référence : ${normalizedInput.readiness.reference.trim() || "non renseignée"}`,
    `- Date : ${normalizedInput.readiness.evidenceDate || "non renseignée"}`,
    "",
  ];

  for (const pathway of EXCEL_PATHWAY_IDS) {
    const dossier = normalizedInput.dossiers[pathway];
    const candidate = normalizedResult.candidateResults[pathway];
    lines.push(`DOSSIER — ${EXCEL_PATHWAYS[pathway].label}`);
    if (!dossier || !candidate) {
      lines.push(
        dossier
          ? "- Dossier non évalué : corriger le cas commun avant de le détailler."
          : "- Dossier absent",
        "",
      );
      continue;
    }
    lines.push(
      `- Verdict du dossier : ${CANDIDATE_LABELS[candidate.verdict]}`,
      `- Condition propre satisfaite : ${reportBoolean(dossier.criterion.met)}`,
      `- Condition propre, niveau de preuve : ${EVIDENCE_LABELS[dossier.criterion.evidenceLevel]}`,
      `- Condition propre, référence : ${dossier.criterion.reference.trim() || "non renseignée"}`,
      `- Condition propre, date : ${dossier.criterion.evidenceDate || "non renseignée"}`,
      `- Condition propre, vérificateur : ${dossier.criterion.verifiedBy.trim() || "non renseigné"}`,
      `- Couverture standard : ${Number.isFinite(dossier.standardCoveragePercent) ? `${dossier.standardCoveragePercent} %` : "non renseignée"}`,
    );
    if (pathway === "named_platform") {
      lines.push(
        `- Produit : ${dossier.platform.product.trim() || "non renseigné"}`,
        `- Type de produit : ${
          dossier.platform.type === "power_apps"
            ? "Power Apps"
            : dossier.platform.type === "appsheet"
              ? "AppSheet"
              : dossier.platform.type === "airtable"
                ? "Airtable"
                : "autre"
        }`,
        `- Plan : ${dossier.platform.plan.trim() || "non renseigné"}`,
        `- Utilisateurs actifs : ${reportNumber(dossier.platform.activeUsers)}`,
        `- Utilisateurs externes ou invités : ${reportNumber(dossier.platform.externalUsers)}`,
      );
    }
    lines.push(
      "- Opérations :",
      ...EXCEL_TEST_OPERATIONS.map((operation) => {
        const assessment = dossier.operations[operation.id];
        return [
          `  ${operation.id}. ${operation.title}`,
          `     Statut : ${STATUS_LABELS[assessment.status] ?? "valeur invalide"}`,
          `     Niveau de preuve : ${EVIDENCE_LABELS[assessment.evidenceLevel] ?? "valeur invalide"}`,
          `     Référence : ${assessment.reference.trim() || "non renseignée"}`,
          `     Date de preuve : ${assessment.evidenceDate || "non renseignée"}`,
          `     Vérificateur : ${assessment.verifiedBy.trim() || "non renseigné"}`,
          `     Motif de non-applicabilité : ${assessment.notApplicableReason.trim() || "non renseigné"}`,
          `     Date de non-applicabilité : ${assessment.notApplicableDate || "non renseignée"}`,
        ].join("\n");
      }),
      "- Base de coût structurée :",
      `  Postes remplacés ou confirmés : ${reportBoolean(dossier.costBasis.confirmed)}`,
      `  Montant connu recalculé : ${reportNumber(candidate.costInterval?.knownAmount, ` ${dossier.costBasis.currency || "devise non renseignée"}`)}`,
      `  Source/référence : ${dossier.costBasis.source.trim() || "non renseignée"}`,
      `  Date de source : ${dossier.costBasis.sourceDate || "non renseignée"}`,
      `  Devise : ${dossier.costBasis.currency || "non renseignée"}`,
      `  Horizon : ${reportNumber(dossier.costBasis.horizonMonths, " mois")}`,
      `  Couverture : ${dossier.costBasis.coverage.trim() || "non renseignée"}`,
      `  Responsable : ${dossier.costBasis.owner.trim() || "non renseigné"}`,
      `  Exclusions : ${dossier.costBasis.exclusions.trim() || "non renseignées"}`,
      `  Formule : ${EXCEL_COST_FORMULA}`,
      ...EXCEL_COST_FIELDS.map(
        ({ key, label, unitKind }) =>
          `  ${label} : ${reportNumber(
            dossier.costInputs[key],
            ` ${getExcelCostUnit(unitKind, dossier.costBasis.currency)}`,
          )}`,
      ),
      `  X : ${reportNumber(dossier.costBasis.xMin)} à ${reportNumber(dossier.costBasis.xMax)} ${dossier.costBasis.currency || "devise non renseignée"}`,
      `  X nul confirmé : ${reportBoolean(dossier.costBasis.zeroXConfirmed)}`,
      `  Justification de X nul : ${dossier.costBasis.zeroXJustification.trim() || "non renseignée"}`,
      `  I : ${reportNumber(dossier.costBasis.iMin)} à ${reportNumber(dossier.costBasis.iMax)} ${dossier.costBasis.currency || "devise non renseignée"}`,
      `  I nul confirmé : ${reportBoolean(dossier.costBasis.zeroIConfirmed)}`,
      `  Justification de I nul : ${dossier.costBasis.zeroIJustification.trim() || "non renseignée"}`,
      `  Intervalle total : ${reportNumber(candidate.costInterval?.minimum)} à ${reportNumber(candidate.costInterval?.maximum)} ${dossier.costBasis.currency || "devise non renseignée"}`,
      "",
    );
  }

  lines.push(
    "VERDICT FINAL",
    `- Décision : ${FINAL_LABELS[normalizedResult.verdict]}`,
    `- Voie retenue : ${normalizedResult.selectedPathway ? EXCEL_PATHWAYS[normalizedResult.selectedPathway].label : "aucune"}`,
    `- Motif : ${normalizedResult.title}`,
    `- Synthèse : ${normalizedResult.summary}`,
    "- Prochaines actions :",
    ...normalizedResult.actions.map((action) => `  - ${action}`),
    "",
    "Limites : diagnostic local indicatif ; aucune homologation de sécurité, conformité, performance ou conseil juridique.",
  );
  return lines.join("\n");
}

export const buildExcelDecisionClipboardText = buildExcelDecisionReport;
