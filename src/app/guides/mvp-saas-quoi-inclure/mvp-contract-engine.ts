export const mvpFamilyIds = [
  "valueJourney",
  "accountsAccess",
  "dataContinuity",
  "salesEntitlements",
  "helpIncidents",
  "administrationOperations",
  "measurementExit",
] as const;

export type MvpFamilyId = (typeof mvpFamilyIds)[number];

export const mvpTreatments = [
  "CONSTRUIRE",
  "MANUEL",
  "INTEGRER",
  "REPORTER",
  "INCONNU",
] as const;

export type MvpTreatment = (typeof mvpTreatments)[number];

export const mvpTestFormats = [
  "PROTOTYPE_SANS_PRODUCTION",
  "PILOTE_ACCOMPAGNE",
  "PREMIER_CLIENT_PRODUCTION",
] as const;

export type MvpTestFormat = (typeof mvpTestFormats)[number];

export const mvpSalesModes = [
  "CONTRAT_FACTURE_MANUELS",
  "ACHAT_AUTONOME",
] as const;

export type MvpSalesMode = (typeof mvpSalesModes)[number];

export const mvpNecessities = ["OUI", "NON", "INCONNU"] as const;

export type MvpNecessity = (typeof mvpNecessities)[number];

export type DecimalInput = string | number | null;

export type MvpContractStatus =
  | "STOP_REQUIRED_DECISIONS_UNKNOWN"
  | "STOP_CRITICAL_CAPABILITY_DEFERRED"
  | "STOP_MANUAL_OPERATION_UNBOUNDED"
  | "STOP_MANUAL_CAPACITY_EXCEEDED"
  | "TEST_FORMAT_NOT_PRODUCTION"
  | "PILOT_CANDIDATE_FOR_REVIEW"
  | "FIRST_CLIENT_CANDIDATE_FOR_REVIEW";

export interface ManualOperationInput {
  label: string;
  minutesPerOccurrence: DecimalInput;
  occurrencesPerClient: DecimalInput;
  explicitLimit: string;
}

export interface MvpCapabilityInput {
  id: MvpFamilyId;
  treatment: MvpTreatment;
  necessaryForTest: MvpNecessity;
  owner: string;
  expectedProof: string;
  failureRecovery: string;
  reviewTrigger: string;
  manualOperation: ManualOperationInput;
}

export interface MvpContractInput {
  testFormat: MvpTestFormat | "";
  testHorizon: string;
  soldOutcome: string;
  proofEvent: string;
  salesMode: MvpSalesMode | "";
  pilotClientCount: DecimalInput;
  manualCapacityMinutes: DecimalInput;
  autonomousPurchaseStates: string;
  autonomousPurchaseFailureProcedure: string;
  capabilities: MvpCapabilityInput[];
}

export interface ManualLoadEquation {
  familyId: MvpFamilyId;
  familyLabel: string;
  operation: string;
  minutesPerOccurrence: string;
  occurrencesPerClient: string;
  clients: string;
  explicitLimit: string;
  calculationStatus: "EXPLOITABLE" | "INEXPLOITABLE";
  totalMinutes: string | null;
  equation: string;
}

export interface MvpContractAssessment {
  status: MvpContractStatus;
  publicLabel: string;
  explanation: string;
  nextAction: string;
  missingDecisions: string[];
  criticalDeferredCapabilities: string[];
  unboundedManualOperations: string[];
  manualEquations: ManualLoadEquation[];
  manualLoadState: "COMPLETE" | "PARTIAL_UNUSABLE";
  manualLoadMinutes: string | null;
  manualCapacityMinutes: string | null;
  remainingCapacityMinutes: string | null;
  fieldErrors: Record<string, string[]>;
  humanReviewRequired: true;
  markdown: string;
}

export const MAX_PILOT_CLIENTS = 1_000_000;
export const MAX_MANUAL_MINUTES = 1_000_000;
export const MAX_OCCURRENCES_PER_CLIENT = 1_000_000;
export const MAX_DECIMAL_PLACES = 3;

const ZERO_BIGINT = BigInt(0);
const DECIMAL_SCALE = BigInt(1_000);
const TOTAL_SCALE = DECIMAL_SCALE * DECIMAL_SCALE;

interface ParsedDecimal {
  units: bigint | null;
  issue: "missing" | "format" | "precision" | "maximum" | null;
  normalized: string | null;
}

export const mvpFamilyLabels: Record<MvpFamilyId, string> = {
  valueJourney: "Parcours de valeur",
  accountsAccess: "Comptes et accès",
  dataContinuity: "Données et continuité",
  salesEntitlements: "Vente et droits associés",
  helpIncidents: "Aide et incidents",
  administrationOperations: "Administration et exploitation",
  measurementExit: "Mesure et sortie",
};

export const mvpTreatmentLabels: Record<MvpTreatment, string> = {
  CONSTRUIRE: "Construire dans le produit",
  MANUEL: "Opérer manuellement",
  INTEGRER: "Intégrer un service existant",
  REPORTER: "Reporter avec déclencheur",
  INCONNU: "À vérifier",
};

export const mvpTestFormatLabels: Record<MvpTestFormat, string> = {
  PROTOTYPE_SANS_PRODUCTION: "Prototype sans production",
  PILOTE_ACCOMPAGNE: "Pilote accompagné",
  PREMIER_CLIENT_PRODUCTION: "Premier client en production",
};

export const mvpSalesModeLabels: Record<MvpSalesMode, string> = {
  CONTRAT_FACTURE_MANUELS: "Contrat et facture gérés manuellement",
  ACHAT_AUTONOME: "Achat autonome",
};

const statusCopy: Record<
  MvpContractStatus,
  { publicLabel: string; explanation: string; nextAction: string }
> = {
  STOP_REQUIRED_DECISIONS_UNKNOWN: {
    publicLabel: "STOP — décisions indispensables à vérifier",
    explanation:
      "Au moins une décision structurante, une preuve, la période du test ou une entrée numérique manque ou est invalide. Aucune inconnue n’est convertie en zéro.",
    nextAction:
      "Complétez d’abord les décisions listées, puis relisez les capacités une par une.",
  },
  STOP_CRITICAL_CAPABILITY_DEFERRED: {
    publicLabel: "STOP — capacité critique reportée",
    explanation:
      "Une capacité nécessaire au test est reportée, ou une famille entière est reportée pour un premier client en production. La charge manuelle et le libellé « non nécessaire » ne compensent pas ce report.",
    nextAction:
      "Construisez, opérez manuellement ou intégrez la responsabilité actuelle, ou choisissez un test plus léger qui n’expose pas un client réel.",
  },
  STOP_MANUAL_OPERATION_UNBOUNDED: {
    publicLabel: "STOP — opération manuelle non bornée",
    explanation:
      "Une opération manuelle n’a pas de responsable, de limite, de procédure d’échec, de déclencheur ou d’équation exploitable sur la période déclarée.",
    nextAction:
      "Nommez l’opération, son responsable, ses limites et ses deux facteurs de charge avant de comparer la capacité.",
  },
  STOP_MANUAL_CAPACITY_EXCEEDED: {
    publicLabel: "STOP — capacité manuelle dépassée",
    explanation:
      "La charge planifiée dépasse la capacité totale saisie pour la même période de test. Le moteur ne choisit pas à votre place ce qu’il faut automatiser, réduire ou reporter.",
    nextAction:
      "Réduisez le test, augmentez une capacité réellement disponible ou revoyez explicitement le traitement des opérations concernées.",
  },
  TEST_FORMAT_NOT_PRODUCTION: {
    publicLabel: "Test utile, mais format non productif",
    explanation:
      "Le contrat décrit un prototype. Il peut répondre à une incertitude, mais il n’autorise pas l’accueil d’un client sur un service exploité.",
    nextAction:
      "Utilisez ce test pour apprendre, puis rédigez un nouveau contrat avant tout pilote ou premier client en production.",
  },
  PILOT_CANDIDATE_FOR_REVIEW: {
    publicLabel: "Candidat à un pilote accompagné",
    explanation:
      "Les décisions renseignées et la charge planifiée permettent une revue humaine du pilote. Ce statut n’est ni une homologation de sécurité ni une autorisation juridique.",
    nextAction:
      "Faites relire les responsabilités, les preuves, les reprises sur échec et les limites manuelles avant d’inviter le pilote.",
  },
  FIRST_CLIENT_CANDIDATE_FOR_REVIEW: {
    publicLabel: "Candidat à un premier client en production",
    explanation:
      "Le contrat peut être soumis à une décision humaine de mise en production. Le moteur ne prouve ni conformité, ni sécurité, ni acceptation contractuelle.",
    nextAction:
      "Faites valider le contrat, la recette, les obligations applicables et l’exploitation avant l’ouverture réelle.",
  },
};

function cleanText(value: unknown): string {
  if (typeof value !== "string") return "";

  return value
    .trim()
    .replace(/\r\n?/g, "\n")
    .replace(/[ \t]+/g, " ")
    .replace(/ *\n */g, "\n")
    .replace(/\n{3,}/g, "\n\n");
}

function parseDecimal(
  value: unknown,
  maximum: number,
  integerOnly = false,
): ParsedDecimal {
  if (value === null || value === undefined) {
    return { units: null, issue: "missing", normalized: null };
  }

  const raw = typeof value === "number" ? String(value) : cleanText(value);
  if (raw === "") {
    return { units: null, issue: "missing", normalized: null };
  }

  if (!/^\d+(?:\.\d+)?$/.test(raw)) {
    return { units: null, issue: "format", normalized: null };
  }

  const [wholeRaw, decimalsRaw = ""] = raw.split(".");
  if (integerOnly && decimalsRaw.length > 0) {
    return { units: null, issue: "precision", normalized: null };
  }
  if (decimalsRaw.length > MAX_DECIMAL_PLACES) {
    return { units: null, issue: "precision", normalized: null };
  }

  const normalizedWhole = wholeRaw.replace(/^0+(?=\d)/, "") || "0";
  const normalizedDecimals = decimalsRaw.padEnd(MAX_DECIMAL_PLACES, "0");
  const units =
    BigInt(normalizedWhole) * DECIMAL_SCALE + BigInt(normalizedDecimals || "0");
  const maximumUnits = BigInt(maximum) * DECIMAL_SCALE;

  if (units > maximumUnits) {
    return { units: null, issue: "maximum", normalized: null };
  }

  return {
    units,
    issue: null,
    normalized: formatScaled(units, DECIMAL_SCALE, MAX_DECIMAL_PLACES),
  };
}

function formatScaled(
  units: bigint,
  scale: bigint,
  maximumDecimals: number,
): string {
  const sign = units < ZERO_BIGINT ? "-" : "";
  const absolute = units < ZERO_BIGINT ? -units : units;
  const whole = absolute / scale;
  const remainder = absolute % scale;
  if (remainder === ZERO_BIGINT) return `${sign}${whole}`;

  const decimals = remainder
    .toString()
    .padStart(maximumDecimals, "0")
    .replace(/0+$/, "");
  return `${sign}${whole}.${decimals}`;
}

function decimalIssueLabel(
  issue: ParsedDecimal["issue"],
  field: string,
  maximum: number,
  integerOnly = false,
): string {
  if (issue === "missing") return `${field} à vérifier`;
  if (issue === "format") {
    return `${field} invalide : utilisez des chiffres positifs et un point décimal`;
  }
  if (issue === "precision") {
    return integerOnly
      ? `${field} invalide : un nombre entier est requis`
      : `${field} invalide : au maximum ${MAX_DECIMAL_PLACES} décimales`;
  }
  return `${field} invalide : maximum ${maximum.toLocaleString("fr-FR")}`;
}

function emptyManualOperation(): ManualOperationInput {
  return {
    label: "",
    minutesPerOccurrence: null,
    occurrencesPerClient: null,
    explicitLimit: "",
  };
}

function emptyCapability(id: MvpFamilyId): MvpCapabilityInput {
  return {
    id,
    treatment: "INCONNU",
    necessaryForTest: "INCONNU",
    owner: "",
    expectedProof: "",
    failureRecovery: "",
    reviewTrigger: "",
    manualOperation: emptyManualOperation(),
  };
}

export function createEmptyMvpContract(): MvpContractInput {
  return {
    testFormat: "",
    testHorizon: "",
    soldOutcome: "",
    proofEvent: "",
    salesMode: "",
    pilotClientCount: null,
    manualCapacityMinutes: null,
    autonomousPurchaseStates: "",
    autonomousPurchaseFailureProcedure: "",
    capabilities: mvpFamilyIds.map(emptyCapability),
  };
}

function exampleCapability(
  id: MvpFamilyId,
  treatment: MvpTreatment,
  owner: string,
  expectedProof: string,
  failureRecovery: string,
  reviewTrigger: string,
  manual?: {
    label: string;
    minutes: string;
    occurrences: string;
    limit: string;
  },
): MvpCapabilityInput {
  return {
    id,
    treatment,
    necessaryForTest: "OUI",
    owner,
    expectedProof,
    failureRecovery,
    reviewTrigger,
    manualOperation: manual
      ? {
          label: manual.label,
          minutesPerOccurrence: manual.minutes,
          occurrencesPerClient: manual.occurrences,
          explicitLimit: manual.limit,
        }
      : emptyManualOperation(),
  };
}

export function createAccordiaExample(): MvpContractInput {
  return {
    testFormat: "PILOTE_ACCOMPAGNE",
    testHorizon:
      "Du 7 septembre au 18 octobre 2026 inclus — période fictive du pilote Accordia",
    soldOutcome:
      "Accordia — exemple entièrement fictif : un devis fournisseur reçoit une décision traçable sans échange de fichier par courriel.",
    proofEvent:
      "L’administratrice achats invite un responsable de site, celui-ci approuve ou refuse le devis, puis l’opérateur du service retrouve la décision et l’exporte.",
    salesMode: "CONTRAT_FACTURE_MANUELS",
    pilotClientCount: "3",
    manualCapacityMinutes: "300",
    autonomousPurchaseStates: "",
    autonomousPurchaseFailureProcedure: "",
    capabilities: [
      exampleCapability(
        "valueJourney",
        "CONSTRUIRE",
        "Responsable produit Accordia",
        "Soumission, décision et motif visibles de bout en bout pour les trois rôles fictifs.",
        "Revenir au devis non modifié et consigner l’échec si la décision ne peut pas être enregistrée.",
        "Revoir le parcours si un rôle doit contourner Accordia pour obtenir la décision.",
      ),
      exampleCapability(
        "accountsAccess",
        "MANUEL",
        "Opératrice du pilote Accordia",
        "Invitation nominative, rôle vérifié et retrait d’accès rejoué.",
        "Suspendre l’invitation, corriger le rôle et consigner l’action avant un nouvel essai.",
        "Réexaminer dès que deux invitations ou reprises par client ne suffisent plus.",
        {
          label: "Créer ou reprendre les accès du pilote",
          minutes: "12",
          occurrences: "2",
          limit: "Deux interventions planifiées par client pendant le pilote.",
        },
      ),
      exampleCapability(
        "dataContinuity",
        "MANUEL",
        "Opératrice données Accordia",
        "Import fictif contrôlé, export relu et restauration d’un jeu d’essai rejouée.",
        "Bloquer l’import, restaurer le jeu d’essai précédent et faire vérifier l’intégrité.",
        "Réexaminer avant toute seconde importation par client ou toute donnée plus sensible.",
        {
          label: "Préparer et contrôler l’import initial",
          minutes: "20",
          occurrences: "1",
          limit: "Un import initial de données fictives par client.",
        },
      ),
      exampleCapability(
        "salesEntitlements",
        "MANUEL",
        "Fondatrice fictive d’Accordia",
        "Contrat pilote signé, facture émise et droits ouverts seulement après contrôle.",
        "Ne pas ouvrir les droits, corriger le document et faire confirmer la décision commerciale.",
        "Réexaminer avant une deuxième facture, un abonnement ou un achat autonome.",
        {
          label: "Contrôler le contrat et émettre la facture pilote",
          minutes: "15",
          occurrences: "1",
          limit: "Un contrat et une facture manuels par client pilote.",
        },
      ),
      exampleCapability(
        "helpIncidents",
        "MANUEL",
        "Opératrice support Accordia",
        "Demande attribuée, réponse tracée et fermeture confirmée avec l’utilisateur fictif.",
        "Suspendre l’action risquée, informer le pilote et suivre une procédure d’incident distincte de cette charge planifiée.",
        "Réexaminer si deux permanences planifiées par client ne couvrent plus les demandes.",
        {
          label: "Tenir une permanence d’aide planifiée",
          minutes: "10",
          occurrences: "2",
          limit:
            "Deux permanences planifiées par client ; les incidents imprévisibles restent hors de la somme.",
        },
      ),
      exampleCapability(
        "administrationOperations",
        "INTEGRER",
        "Responsable technique Accordia",
        "Actions d’administration attribuées, état du service visible et retour arrière rejoué.",
        "Désactiver l’opération, revenir au dernier état contrôlé et ouvrir un incident.",
        "Réexaminer si le service intégré ne permet plus l’action ou la preuve attendue.",
      ),
      exampleCapability(
        "measurementExit",
        "CONSTRUIRE",
        "Responsable produit Accordia",
        "Événement de décision observé et export du client vérifié avant la fin du pilote.",
        "Conserver les traces autorisées, corriger la mesure et demander confirmation sans inventer un succès.",
        "Réexaminer si l’événement ne distingue plus une décision obtenue d’une simple connexion.",
      ),
    ],
  };
}

export function createAccordiaCapacityStress(): MvpContractInput {
  return { ...createAccordiaExample(), pilotClientCount: "5" };
}

export function createAccordiaCriticalDeferred(): MvpContractInput {
  const example = createAccordiaExample();
  return {
    ...example,
    capabilities: example.capabilities.map((capability) =>
      capability.id === "dataContinuity"
        ? {
            ...capability,
            treatment: "REPORTER",
            manualOperation: emptyManualOperation(),
          }
        : capability,
    ),
  };
}

export function createAccordiaUnknownManualDuration(): MvpContractInput {
  const example = createAccordiaExample();
  return {
    ...example,
    capabilities: example.capabilities.map((capability) =>
      capability.id === "accountsAccess"
        ? {
            ...capability,
            owner: "",
            manualOperation: {
              ...capability.manualOperation,
              minutesPerOccurrence: null,
            },
          }
        : capability,
    ),
  };
}

export function createAccordiaAutonomousPaymentFailure(): MvpContractInput {
  const example = createAccordiaExample();
  return {
    ...example,
    salesMode: "ACHAT_AUTONOME",
    autonomousPurchaseStates:
      "Achat commencé, paiement en traitement, accès ouvert et abonnement interrompu.",
    autonomousPurchaseFailureProcedure: "",
    capabilities: example.capabilities.map((capability) =>
      capability.id === "salesEntitlements"
        ? {
            ...capability,
            treatment: "INTEGRER",
            manualOperation: emptyManualOperation(),
          }
        : capability,
    ),
  };
}

export function createAccordiaFirstClientDeferredAsNon(): MvpContractInput {
  const example = createAccordiaExample();
  return {
    ...example,
    testFormat: "PREMIER_CLIENT_PRODUCTION",
    capabilities: example.capabilities.map((capability) =>
      capability.id === "administrationOperations"
        ? {
            ...capability,
            necessaryForTest: "NON",
            treatment: "REPORTER",
          }
        : capability,
    ),
  };
}

function capabilityMap(
  capabilities: MvpCapabilityInput[],
): Map<MvpFamilyId, MvpCapabilityInput> {
  const map = new Map<MvpFamilyId, MvpCapabilityInput>();
  for (const capability of capabilities) {
    if (mvpFamilyIds.includes(capability.id) && !map.has(capability.id)) {
      map.set(capability.id, capability);
    }
  }
  return map;
}

function asMarkdownCell(value: string): string {
  const cleaned = cleanText(value);
  return cleaned === ""
    ? "À vérifier"
    : cleaned.replace(/\|/g, "\\|").replace(/\n/g, " ");
}

function decimalInputLabel(value: DecimalInput, parsed: ParsedDecimal): string {
  if (parsed.normalized !== null) return parsed.normalized;
  if (typeof value === "number") return String(value);
  return cleanText(value) || "À vérifier";
}

function minuteValueLabel(value: string | null): string {
  return value === null ? "À vérifier" : `${value} min`;
}

function buildMarkdown(
  input: MvpContractInput,
  status: MvpContractStatus,
  assessmentData: Omit<
    MvpContractAssessment,
    "status" | "publicLabel" | "explanation" | "nextAction" | "markdown"
  >,
): string {
  const copy = statusCopy[status];
  const format = input.testFormat
    ? mvpTestFormatLabels[input.testFormat]
    : "À vérifier";
  const salesMode = input.salesMode
    ? mvpSalesModeLabels[input.salesMode]
    : "À vérifier";
  const clients = parseDecimal(
    input.pilotClientCount,
    MAX_PILOT_CLIENTS,
    true,
  ).normalized;
  const testHorizon = asMarkdownCell(input.testHorizon);
  const autonomousPurchaseStates =
    input.salesMode === "ACHAT_AUTONOME"
      ? asMarkdownCell(input.autonomousPurchaseStates)
      : "Non applicable — achat autonome non retenu";
  const autonomousPurchaseFailureProcedure =
    input.salesMode === "ACHAT_AUTONOME"
      ? asMarkdownCell(input.autonomousPurchaseFailureProcedure)
      : "Non applicable — achat autonome non retenu";
  const capabilities = capabilityMap(input.capabilities);

  const lines = [
    "# Contrat du premier client SaaS — brouillon local",
    "",
    `- Statut : ${status}`,
    `- Lecture : ${copy.publicLabel}`,
    `- Format du test : ${format}`,
    `- Période couverte par le test : ${testHorizon}`,
    `- Résultat vendu : ${asMarkdownCell(input.soldOutcome)}`,
    `- Événement de preuve : ${asMarkdownCell(input.proofEvent)}`,
    `- Mode de vente : ${salesMode}`,
    `- États d’achat autonome et de droits : ${autonomousPurchaseStates}`,
    `- Procédure d’échec de paiement autonome : ${autonomousPurchaseFailureProcedure}`,
    `- Clients du test : ${clients ?? "À vérifier"}`,
    `- Capacité manuelle totale déclarée sur cette période : ${minuteValueLabel(assessmentData.manualCapacityMinutes)}`,
    "",
    "## Capacités",
    "",
    "| Famille | Nécessaire | Traitement | Responsable | Preuve | Reprise sur échec | Déclencheur |",
    "| --- | --- | --- | --- | --- | --- | --- |",
  ];

  for (const id of mvpFamilyIds) {
    const capability = capabilities.get(id);
    lines.push(
      `| ${mvpFamilyLabels[id]} | ${capability?.necessaryForTest ?? "INCONNU"} | ${capability ? mvpTreatmentLabels[capability.treatment] : "À vérifier"} | ${asMarkdownCell(capability?.owner ?? "")} | ${asMarkdownCell(capability?.expectedProof ?? "")} | ${asMarkdownCell(capability?.failureRecovery ?? "")} | ${asMarkdownCell(capability?.reviewTrigger ?? "")} |`,
    );
  }

  lines.push("", "## Charge manuelle planifiée", "");
  lines.push(
    `Période commune : ${testHorizon}`,
    "Les occurrences par client et la capacité totale couvrent l’ensemble de cette même période, sans conversion implicite.",
    "",
  );
  if (assessmentData.manualEquations.length === 0) {
    lines.push("Aucune équation exploitable. À vérifier.");
  } else {
    for (const equation of assessmentData.manualEquations) {
      lines.push(
        `- ${equation.operation} — limite : ${asMarkdownCell(equation.explicitLimit)} — calcul ${equation.calculationStatus === "EXPLOITABLE" ? "exploitable" : "inexploitable"} : ${equation.equation}`,
      );
    }
    if (assessmentData.manualLoadState === "PARTIAL_UNUSABLE") {
      lines.push(
        "- État de la somme : partiel/inexploitable",
        `- Sous-total des seules opérations exploitables : ${minuteValueLabel(assessmentData.manualLoadMinutes)}`,
      );
    } else {
      lines.push(
        "- État de la somme : complète",
        `- Somme planifiée sur toute la période : ${minuteValueLabel(assessmentData.manualLoadMinutes)}`,
      );
    }
    lines.push(
      `- Capacité totale saisie sur toute la même période : ${minuteValueLabel(assessmentData.manualCapacityMinutes)}`,
    );
    if (assessmentData.remainingCapacityMinutes !== null) {
      lines.push(
        `- Capacité restante sur cette période après charge planifiée : ${assessmentData.remainingCapacityMinutes} min`,
      );
    }
  }

  lines.push(
    "",
    "Les incidents imprévisibles ne valent jamais zéro : ils restent hors de la somme planifiée et exigent la reprise sur échec écrite dans chaque famille.",
  );

  if (assessmentData.missingDecisions.length > 0) {
    lines.push("", "## Décisions à vérifier", "");
    assessmentData.missingDecisions.forEach((item) => lines.push(`- ${item}`));
  }
  if (assessmentData.criticalDeferredCapabilities.length > 0) {
    lines.push("", "## Capacités critiques reportées", "");
    assessmentData.criticalDeferredCapabilities.forEach((item) =>
      lines.push(`- ${item}`),
    );
  }
  if (assessmentData.unboundedManualOperations.length > 0) {
    lines.push("", "## Opérations manuelles non bornées", "");
    assessmentData.unboundedManualOperations.forEach((item) =>
      lines.push(`- ${item}`),
    );
  }

  lines.push(
    "",
    "## Décision humaine",
    "",
    copy.explanation,
    "",
    copy.nextAction,
    "",
    "Ce brouillon n’est ni une autorisation juridique, ni une homologation de sécurité, ni une mise en production.",
  );

  return lines.join("\n");
}

export function assessMvpContract(
  input: MvpContractInput,
): MvpContractAssessment {
  const missingDecisions: string[] = [];
  const criticalDeferredCapabilities: string[] = [];
  const unboundedManualOperations: string[] = [];
  const manualEquations: ManualLoadEquation[] = [];
  const fieldErrors: Record<string, string[]> = {};
  const capabilities = capabilityMap(input.capabilities);

  function linkFieldError(fieldId: string | undefined, message: string) {
    if (!fieldId) return;
    fieldErrors[fieldId] = [...(fieldErrors[fieldId] ?? []), message];
  }

  function addMissingDecision(message: string, fieldId?: string) {
    missingDecisions.push(message);
    linkFieldError(fieldId, message);
  }

  function addCriticalDeferred(message: string, fieldId?: string) {
    criticalDeferredCapabilities.push(message);
    linkFieldError(fieldId, message);
  }

  function addUnboundedManual(message: string, fieldId?: string) {
    unboundedManualOperations.push(message);
    linkFieldError(fieldId, message);
  }

  if (!input.testFormat || !mvpTestFormats.includes(input.testFormat)) {
    addMissingDecision("Format du test à vérifier", "mvp-test-format");
  }
  const testHorizon = cleanText(input.testHorizon);
  if (testHorizon === "") {
    addMissingDecision(
      "Période couverte par le test à vérifier",
      "mvp-test-horizon",
    );
  }
  if (cleanText(input.soldOutcome) === "") {
    addMissingDecision("Résultat métier vendu à vérifier", "mvp-sold-outcome");
  }
  if (cleanText(input.proofEvent) === "") {
    addMissingDecision(
      "Événement qui prouve le résultat à vérifier",
      "mvp-proof-event",
    );
  }
  if (!input.salesMode || !mvpSalesModes.includes(input.salesMode)) {
    addMissingDecision("Mode de vente à vérifier", "mvp-sales-mode");
  }

  const clients = parseDecimal(input.pilotClientCount, MAX_PILOT_CLIENTS, true);
  if (clients.issue) {
    addMissingDecision(
      decimalIssueLabel(
        clients.issue,
        "Nombre de clients du test",
        MAX_PILOT_CLIENTS,
        true,
      ),
      "mvp-client-count",
    );
  } else if (clients.units === ZERO_BIGINT) {
    addMissingDecision(
      "Nombre de clients du test invalide : minimum 1",
      "mvp-client-count",
    );
  }

  const capacity = parseDecimal(
    input.manualCapacityMinutes,
    MAX_MANUAL_MINUTES,
  );
  if (capacity.issue) {
    addMissingDecision(
      decimalIssueLabel(
        capacity.issue,
        "Capacité manuelle disponible",
        MAX_MANUAL_MINUTES,
      ),
      "mvp-manual-capacity",
    );
  }

  if (input.salesMode === "ACHAT_AUTONOME") {
    if (cleanText(input.autonomousPurchaseStates) === "") {
      addMissingDecision(
        "États retenus pour l’achat autonome et les droits associés à vérifier",
        "mvp-autonomous-states",
      );
    }
    if (cleanText(input.autonomousPurchaseFailureProcedure) === "") {
      addMissingDecision(
        "Échec de paiement autonome : détection, information, droits et reprise à vérifier",
        "mvp-autonomous-failure",
      );
    }
    const salesEntitlements = capabilities.get("salesEntitlements");
    if (salesEntitlements && salesEntitlements.necessaryForTest !== "OUI") {
      addMissingDecision(
        "Vente et droits associés : la nécessité doit être « OUI » pour un achat autonome",
        "mvp-capability-salesEntitlements-necessary",
      );
    }
  }

  for (const id of mvpFamilyIds) {
    const capability = capabilities.get(id);
    const familyLabel = mvpFamilyLabels[id];
    const prefix = `mvp-capability-${id}`;
    if (!capability) {
      addMissingDecision(`${familyLabel} : famille absente`);
      continue;
    }

    if (!mvpNecessities.includes(capability.necessaryForTest)) {
      addMissingDecision(
        `${familyLabel} : nécessité invalide`,
        `${prefix}-necessary`,
      );
    } else if (capability.necessaryForTest === "INCONNU") {
      addMissingDecision(
        `${familyLabel} : nécessité pour le test à vérifier`,
        `${prefix}-necessary`,
      );
    }

    if (!mvpTreatments.includes(capability.treatment)) {
      addMissingDecision(
        `${familyLabel} : traitement invalide`,
        `${prefix}-treatment`,
      );
    } else if (capability.treatment === "INCONNU") {
      addMissingDecision(
        `${familyLabel} : traitement à vérifier`,
        `${prefix}-treatment`,
      );
    }

    if (cleanText(capability.expectedProof) === "") {
      addMissingDecision(
        `${familyLabel} : preuve attendue à vérifier`,
        `${prefix}-proof`,
      );
    }

    if (capability.treatment === "MANUEL") {
      if (cleanText(capability.owner) === "") {
        addUnboundedManual(
          `${familyLabel} : responsable à vérifier`,
          `${prefix}-owner`,
        );
      }
      if (cleanText(capability.failureRecovery) === "") {
        addUnboundedManual(
          `${familyLabel} : reprise sur échec à vérifier`,
          `${prefix}-failure`,
        );
      }
      if (cleanText(capability.reviewTrigger) === "") {
        addUnboundedManual(
          `${familyLabel} : déclencheur de réexamen à vérifier`,
          `${prefix}-trigger`,
        );
      }
      if (cleanText(capability.manualOperation.label) === "") {
        addUnboundedManual(
          `${familyLabel} : opération manuelle à nommer`,
          `${prefix}-manual-label`,
        );
      }
      if (cleanText(capability.manualOperation.explicitLimit) === "") {
        addUnboundedManual(
          `${familyLabel} : limite manuelle à vérifier`,
          `${prefix}-manual-limit`,
        );
      }

      const minutes = parseDecimal(
        capability.manualOperation.minutesPerOccurrence,
        MAX_MANUAL_MINUTES,
      );
      const occurrences = parseDecimal(
        capability.manualOperation.occurrencesPerClient,
        MAX_OCCURRENCES_PER_CLIENT,
      );

      if (minutes.issue) {
        addUnboundedManual(
          decimalIssueLabel(
            minutes.issue,
            `${familyLabel} : minutes par occurrence`,
            MAX_MANUAL_MINUTES,
          ),
          `${prefix}-manual-minutes`,
        );
      } else if (minutes.units === ZERO_BIGINT) {
        addUnboundedManual(
          `${familyLabel} : les minutes par occurrence doivent être supérieures à zéro`,
          `${prefix}-manual-minutes`,
        );
      }

      if (occurrences.issue) {
        addUnboundedManual(
          decimalIssueLabel(
            occurrences.issue,
            `${familyLabel} : occurrences par client`,
            MAX_OCCURRENCES_PER_CLIENT,
          ),
          `${prefix}-manual-occurrences`,
        );
      } else if (occurrences.units === ZERO_BIGINT) {
        addUnboundedManual(
          `${familyLabel} : les occurrences par client doivent être supérieures à zéro`,
          `${prefix}-manual-occurrences`,
        );
      }

      let calculationIsExploitable = false;
      let totalMinutes: string | null = null;
      if (
        minutes.units !== null &&
        minutes.units > ZERO_BIGINT &&
        occurrences.units !== null &&
        occurrences.units > ZERO_BIGINT &&
        clients.units !== null &&
        clients.units > ZERO_BIGINT &&
        testHorizon !== ""
      ) {
        calculationIsExploitable = true;
        const clientCount = clients.units / DECIMAL_SCALE;
        const totalUnits = minutes.units * occurrences.units * clientCount;
        totalMinutes = formatScaled(totalUnits, TOTAL_SCALE, 6);
      }
      const minutesLabel = decimalInputLabel(
        capability.manualOperation.minutesPerOccurrence,
        minutes,
      );
      const occurrencesLabel = decimalInputLabel(
        capability.manualOperation.occurrencesPerClient,
        occurrences,
      );
      const clientsLabel = decimalInputLabel(input.pilotClientCount, clients);
      const operation =
        cleanText(capability.manualOperation.label) || familyLabel;
      const explicitLimit =
        cleanText(capability.manualOperation.explicitLimit) || "À vérifier";
      const periodLabel = testHorizon || "À vérifier";
      const calculationResult =
        totalMinutes === null ? "calcul inexploitable" : `${totalMinutes} min`;
      const minutesFactor =
        minutes.issue === "missing"
          ? "minutes par occurrence à vérifier"
          : `${minutesLabel} min`;

      manualEquations.push({
        familyId: id,
        familyLabel,
        operation,
        minutesPerOccurrence: minutesLabel,
        occurrencesPerClient: occurrencesLabel,
        clients: clientsLabel,
        explicitLimit,
        calculationStatus: calculationIsExploitable
          ? "EXPLOITABLE"
          : "INEXPLOITABLE",
        totalMinutes,
        equation: `${minutesFactor} × ${occurrencesLabel} occurrence(s)/client sur toute la période × ${clientsLabel} client(s) = ${calculationResult} sur toute la même période « ${periodLabel} »`,
      });
    } else if (capability.treatment !== "INCONNU") {
      if (cleanText(capability.owner) === "") {
        addMissingDecision(
          `${familyLabel} : responsable à vérifier`,
          `${prefix}-owner`,
        );
      }
      if (cleanText(capability.failureRecovery) === "") {
        addMissingDecision(
          `${familyLabel} : reprise sur échec à vérifier`,
          `${prefix}-failure`,
        );
      }
      if (cleanText(capability.reviewTrigger) === "") {
        addMissingDecision(
          `${familyLabel} : déclencheur de réexamen à vérifier`,
          `${prefix}-trigger`,
        );
      }
    }

    if (capability.treatment === "REPORTER") {
      if (capability.necessaryForTest === "OUI") {
        addCriticalDeferred(
          `Report critique : ${familyLabel} est nécessaire au test`,
          `${prefix}-treatment`,
        );
      } else if (input.testFormat === "PREMIER_CLIENT_PRODUCTION") {
        addCriticalDeferred(
          `Report interdit en production : ${familyLabel}, même si la famille est déclarée non nécessaire`,
          `${prefix}-treatment`,
        );
      }
    }
  }

  if (capabilities.size !== input.capabilities.length) {
    addMissingDecision(
      "Familles du contrat invalides : doublon ou identifiant non reconnu",
    );
  }

  const exploitableManualEquations = manualEquations.filter(
    (equation) => equation.totalMinutes !== null,
  );
  const manualLoadState =
    testHorizon === "" ||
    manualEquations.some(
      (equation) => equation.calculationStatus === "INEXPLOITABLE",
    )
      ? ("PARTIAL_UNUSABLE" as const)
      : ("COMPLETE" as const);
  const manualLoadUnits = exploitableManualEquations.reduce((sum, equation) => {
    const normalized = equation.totalMinutes;
    if (normalized === null) return sum;
    const [whole, decimals = ""] = normalized.split(".");
    return (
      sum + BigInt(whole) * TOTAL_SCALE + BigInt(decimals.padEnd(6, "0") || "0")
    );
  }, ZERO_BIGINT);
  const capacityTotalUnits =
    capacity.units === null ? null : capacity.units * DECIMAL_SCALE;
  const remainingCapacityUnits =
    capacityTotalUnits === null || manualLoadState === "PARTIAL_UNUSABLE"
      ? null
      : capacityTotalUnits - manualLoadUnits;

  let status: MvpContractStatus;
  if (missingDecisions.length > 0) {
    status = "STOP_REQUIRED_DECISIONS_UNKNOWN";
  } else if (criticalDeferredCapabilities.length > 0) {
    status = "STOP_CRITICAL_CAPABILITY_DEFERRED";
  } else if (unboundedManualOperations.length > 0) {
    status = "STOP_MANUAL_OPERATION_UNBOUNDED";
  } else if (
    capacityTotalUnits !== null &&
    manualLoadState === "COMPLETE" &&
    manualLoadUnits > capacityTotalUnits
  ) {
    status = "STOP_MANUAL_CAPACITY_EXCEEDED";
    linkFieldError(
      "mvp-manual-capacity",
      "Capacité manuelle totale insuffisante pour la charge de cette période",
    );
  } else if (input.testFormat === "PROTOTYPE_SANS_PRODUCTION") {
    status = "TEST_FORMAT_NOT_PRODUCTION";
  } else if (input.testFormat === "PILOTE_ACCOMPAGNE") {
    status = "PILOT_CANDIDATE_FOR_REVIEW";
  } else if (input.testFormat === "PREMIER_CLIENT_PRODUCTION") {
    status = "FIRST_CLIENT_CANDIDATE_FOR_REVIEW";
  } else {
    status = "STOP_REQUIRED_DECISIONS_UNKNOWN";
  }

  const copy = statusCopy[status];
  const assessmentData = {
    missingDecisions,
    criticalDeferredCapabilities,
    unboundedManualOperations,
    manualEquations,
    manualLoadState,
    manualLoadMinutes:
      testHorizon === "" ||
      clients.units === null ||
      (manualEquations.length > 0 && exploitableManualEquations.length === 0)
        ? null
        : formatScaled(manualLoadUnits, TOTAL_SCALE, 6),
    manualCapacityMinutes: capacity.normalized,
    remainingCapacityMinutes:
      remainingCapacityUnits === null
        ? null
        : formatScaled(remainingCapacityUnits, TOTAL_SCALE, 6),
    fieldErrors,
    humanReviewRequired: true as const,
  };

  return {
    status,
    ...copy,
    ...assessmentData,
    markdown: buildMarkdown(input, status, assessmentData),
  };
}
