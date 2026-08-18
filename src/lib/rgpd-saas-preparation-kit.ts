export const RGPD_PREPARATION_STATUSES = [
  "unknown",
  "documented",
  "review-needed",
  "not-applicable-with-justification",
] as const;

export type RgpdPreparationStatus = (typeof RGPD_PREPARATION_STATUSES)[number];

export const RGPD_ROLE_HYPOTHESES = [
  "unknown",
  "controller-to-confirm",
  "processor-to-confirm",
  "joint-to-review",
  "mixed-purposes-to-split",
] as const;

export type RgpdRoleHypothesis = (typeof RGPD_ROLE_HYPOTHESES)[number];

export const RGPD_PREPARATION_STEPS = [
  {
    id: 1,
    shortLabel: "Traitements et rôles",
    title: "Décrire un traitement réel avant de parler de conformité",
    introduction:
      "Partez d’un usage concret du SaaS : quelles données entrent, pourquoi, pour qui et qui décide de quoi. Le rôle proposé reste une hypothèse à confirmer.",
  },
  {
    id: 2,
    shortLabel: "Prestataires et pays",
    title: "Suivre les données jusque chez les prestataires",
    introduction:
      "Un pays d’hébergement ne suffit pas. Il faut aussi relever les sous-traitants, l’assistance et les accès administrateurs à distance.",
  },
  {
    id: 3,
    shortLabel: "Produit, contrat et tests",
    title: "Vérifier que le produit peut tenir ce que le contrat promet",
    introduction:
      "Le relevé rapproche les clauses, les fonctions réellement disponibles et des tests observables. Une case cochée sans preuve reste une inconnue.",
  },
  {
    id: 4,
    shortLabel: "Actions, coûts et relevé",
    title: "Transformer les écarts en décisions finançables",
    introduction:
      "Nommez le responsable, l’échéance et les coûts renseignés. Les montants inconnus restent visibles et ne deviennent jamais zéro.",
  },
] as const;

export type RgpdPreparationStep = (typeof RGPD_PREPARATION_STEPS)[number]["id"];

type NextActionFamily =
  | "mapping"
  | "limit-feature"
  | "product-contract"
  | "build-test"
  | "specialist";

export const RGPD_PREPARATION_QUESTIONS = [
  {
    id: "purpose-and-necessity",
    step: 1,
    legend: "Finalité et nécessité",
    prompt:
      "La décision métier servie par ce traitement et la raison de chaque donnée sont-elles écrites ?",
    evidence: "Ex. fiche de traitement, décision produit ou compte rendu daté.",
    allowsNotApplicable: false,
    nextAction: "mapping",
  },
  {
    id: "data-categories",
    step: 1,
    legend: "Données et personnes concernées",
    prompt:
      "Les catégories de données, les personnes concernées et leurs sources sont-elles inventoriées ?",
    evidence:
      "Évitez « données utilisateur ». Nommez les champs réellement collectés.",
    allowsNotApplicable: false,
    nextAction: "mapping",
  },
  {
    id: "legal-basis-to-confirm",
    step: 1,
    legend: "Base juridique à faire confirmer",
    prompt:
      "La base envisagée, les faits qui pourraient la soutenir et la personne chargée de la confirmer sont-ils consignés ?",
    evidence:
      "Le questionnaire ne choisit aucune base. Il prépare les faits et la question à faire relire.",
    allowsNotApplicable: false,
    nextAction: "specialist",
  },
  {
    id: "sensitive-or-criminal-data",
    step: 1,
    legend: "Données sensibles ou relatives aux infractions",
    prompt:
      "La présence, l’absence ou l’arrivée possible de ces données a-t-elle été vérifiée avec une personne compétente ?",
    evidence:
      "Notez le résultat du triage et la personne qui doit le confirmer. Cet outil ne qualifie pas ces données.",
    allowsNotApplicable: true,
    nextAction: "specialist",
  },
  {
    id: "people-and-notice",
    step: 1,
    legend: "Information des personnes",
    prompt:
      "Le moment, le support et le responsable de l’information des personnes sont-ils identifiés ?",
    evidence:
      "Ex. écran d’inscription ou, pour une collecte indirecte, procédure article 14 avec source, échéance et preuve.",
    allowsNotApplicable: false,
    nextAction: "mapping",
  },
  {
    id: "retention-and-deletion",
    step: 1,
    legend: "Durées, archivage et suppression",
    prompt:
      "Les durées sont-elles reliées à une règle de suppression ou d’archivage effectivement testable ?",
    evidence:
      "Une durée dans un document ne prouve pas qu’une suppression fonctionne.",
    allowsNotApplicable: false,
    nextAction: "build-test",
  },
  {
    id: "role-by-purpose",
    step: 1,
    legend: "Rôle examiné finalité par finalité",
    prompt:
      "Les décisions réellement prises par chaque acteur sont-elles décrites avant de proposer un rôle ?",
    evidence:
      "Conservez les usages propres du fournisseur séparés des instructions du client.",
    allowsNotApplicable: false,
    nextAction: "specialist",
  },
  {
    id: "register-entries",
    step: 1,
    legend: "Entrées de registre",
    prompt:
      "Les informations nécessaires aux registres applicables sont-elles réunies et attribuées à un responsable ?",
    evidence:
      "Une ligne de registre doit pouvoir être actualisée lorsque le produit change.",
    allowsNotApplicable: false,
    nextAction: "mapping",
  },
  {
    id: "provider-inventory",
    step: 2,
    legend: "Inventaire des prestataires",
    prompt:
      "Les fournisseurs qui hébergent, observent, sauvegardent, assistent ou administrent les données sont-ils listés ?",
    evidence:
      "Incluez les services activables par option et les accès du support.",
    allowsNotApplicable: true,
    nextAction: "mapping",
  },
  {
    id: "hosting-locations",
    step: 2,
    legend: "Lieux de stockage et de sauvegarde",
    prompt:
      "Les pays de stockage principal, sauvegarde, reprise et journalisation sont-ils confirmés par une source datée ?",
    evidence:
      "Une région commerciale « Europe » n’est pas un inventaire de pays.",
    allowsNotApplicable: true,
    nextAction: "specialist",
  },
  {
    id: "remote-access",
    step: 2,
    legend: "Accès à distance",
    prompt:
      "Les pays depuis lesquels le support ou les administrateurs peuvent accéder aux données sont-ils connus ?",
    evidence:
      "Relevez aussi les accès exceptionnels et les conditions d’activation.",
    allowsNotApplicable: true,
    nextAction: "specialist",
  },
  {
    id: "subprocessors",
    step: 2,
    legend: "Sous-traitants ultérieurs",
    prompt:
      "La liste, le mécanisme d’information et la procédure d’objection ou d’arbitrage sont-ils documentés ?",
    evidence: "Consignez une preuve et la date de dernière vérification.",
    allowsNotApplicable: true,
    nextAction: "product-contract",
  },
  {
    id: "transfer-tool-and-assessment",
    step: 2,
    legend: "Transferts hors EEE à examiner",
    prompt:
      "Quand un accès ou transfert est concerné, le fondement envisagé et l’analyse complémentaire à réaliser sont-ils attribués ?",
    evidence:
      "Ne concluez pas depuis cet outil : notez ce qui doit être confirmé et par qui.",
    allowsNotApplicable: true,
    nextAction: "specialist",
  },
  {
    id: "transfer-reassessment",
    step: 2,
    legend: "Réévaluation des transferts",
    prompt:
      "Un événement déclencheur, un responsable et une date de réexamen sont-ils prévus ?",
    evidence:
      "Ex. changement de prestataire, de pays d’accès ou de mesures techniques.",
    allowsNotApplicable: true,
    nextAction: "specialist",
  },
  {
    id: "article-28-instructions",
    step: 3,
    legend: "Instructions et usages propres",
    prompt:
      "Le contrat distingue-t-il les instructions du client des finalités éventuellement décidées par le fournisseur ?",
    evidence:
      "Faites relire la qualification ; ce questionnaire ne la décide pas.",
    allowsNotApplicable: true,
    nextAction: "product-contract",
  },
  {
    id: "article-28-assistance",
    step: 3,
    legend: "Assistance, sous-traitants et fin de contrat",
    prompt:
      "Les engagements de confidentialité, sécurité, assistance, audit, sous-traitance, retour et suppression sont-ils reliés à des responsables ?",
    evidence:
      "Notez la clause et la fonction ou procédure qui permet de l’exécuter.",
    allowsNotApplicable: true,
    nextAction: "product-contract",
  },
  {
    id: "product-contract-consistency",
    step: 3,
    legend: "Cohérence produit–contrat",
    prompt:
      "Les promesses du contrat ont-elles été rapprochées des fonctions, limites, délais et preuves du produit ?",
    evidence:
      "Ex. export disponible, délai d’assistance réaliste, suppression vérifiable.",
    allowsNotApplicable: false,
    nextAction: "product-contract",
  },
  {
    id: "rights-workflow",
    step: 3,
    legend: "Demandes des personnes",
    prompt:
      "La réception, l’authentification, l’attribution, l’exécution et la preuve des demandes sont-elles testées ?",
    evidence: "Testez au moins un parcours avec des données fictives.",
    allowsNotApplicable: false,
    nextAction: "build-test",
  },
  {
    id: "security-evidence",
    step: 3,
    legend: "Mesures de sécurité et preuves",
    prompt:
      "Les mesures annoncées sont-elles reliées au risque, à un responsable et à une preuve récente ?",
    evidence:
      "Ex. contrôle d’accès, chiffrement, journaux, revue d’habilitations.",
    allowsNotApplicable: false,
    nextAction: "build-test",
  },
  {
    id: "restore-test",
    step: 3,
    legend: "Restauration et continuité",
    prompt:
      "Une restauration représentative a-t-elle été exécutée, chronométrée et rapprochée des engagements ?",
    evidence: "Une sauvegarde sans test de restauration reste une hypothèse.",
    allowsNotApplicable: false,
    nextAction: "build-test",
  },
  {
    id: "incident-workflow",
    step: 3,
    legend: "Incident impliquant des données",
    prompt:
      "La détection, l’escalade, l’horodatage, la décision et les notifications à examiner sont-ils organisés ?",
    evidence:
      "Le test doit conserver les faits, les inconnues et les responsables.",
    allowsNotApplicable: false,
    nextAction: "build-test",
  },
  {
    id: "exit-deletion",
    step: 3,
    legend: "Export, réversibilité et suppression",
    prompt:
      "Le client peut-il récupérer des données exploitables puis obtenir une preuve de suppression selon le périmètre convenu ?",
    evidence: "Testez formats, volumes, dépendances, délais et sauvegardes.",
    allowsNotApplicable: false,
    nextAction: "build-test",
  },
  {
    id: "aipd-triage",
    step: 4,
    legend: "Triage d’une analyse d’impact",
    prompt:
      "Les critères susceptibles d’appeler une analyse d’impact ont-ils été examinés et attribués à une personne compétente ?",
    evidence:
      "Le relevé consigne le triage ; il ne conclut pas à la place de cette personne.",
    allowsNotApplicable: true,
    nextAction: "specialist",
  },
  {
    id: "dpo-triage",
    step: 4,
    legend: "Triage du besoin de DPO",
    prompt:
      "Le besoin de désigner ou de consulter un DPO a-t-il été examiné au regard de l’organisation, des traitements et des règles sectorielles applicables ?",
    evidence:
      "Notez qui confirme, la date, puis, en cas de désignation, les moyens, conflits d’intérêts, coordonnées publiées et formalité CNIL.",
    allowsNotApplicable: true,
    nextAction: "specialist",
  },
  {
    id: "cookies-trackers",
    step: 4,
    legend: "Cookies, traceurs et SDK",
    prompt:
      "Les traceurs du produit et du site sont-ils inventoriés avec leur finalité, leur déclenchement et la décision à confirmer ?",
    evidence:
      "Incluez les outils de mesure, support, vidéo et expérimentation.",
    allowsNotApplicable: true,
    nextAction: "limit-feature",
  },
  {
    id: "ai-model-data",
    step: 4,
    legend: "Fonctions d’intelligence artificielle",
    prompt:
      "Pour chaque fonction IA, les données envoyées, la conservation, la réutilisation, le fournisseur et le contrôle humain sont-ils connus ?",
    evidence:
      "Si l’information manque, limitez la fonction ou restez en données fictives.",
    allowsNotApplicable: true,
    nextAction: "limit-feature",
  },
  {
    id: "switching-scope",
    step: 4,
    legend: "Changement de fournisseur et sortie",
    prompt:
      "Le périmètre de sortie, les obstacles techniques et contractuels et les obligations éventuellement applicables ont-ils été examinés ?",
    evidence:
      "Faites confirmer le cadre applicable ; l’outil prépare les faits, pas la conclusion juridique.",
    allowsNotApplicable: true,
    nextAction: "specialist",
  },
  {
    id: "exit-rehearsal",
    step: 4,
    legend: "Répétition de sortie",
    prompt:
      "Un test avec propriétaire, jeu de données fictif, critères d’acceptation et date de reprise est-il planifié ou exécuté ?",
    evidence:
      "Conservez les erreurs, le temps passé et les corrections à rejouer.",
    allowsNotApplicable: false,
    nextAction: "build-test",
  },
] as const satisfies ReadonlyArray<{
  id: string;
  step: RgpdPreparationStep;
  legend: string;
  prompt: string;
  evidence: string;
  allowsNotApplicable: boolean;
  nextAction: NextActionFamily;
}>;

export type RgpdPreparationQuestionId =
  (typeof RGPD_PREPARATION_QUESTIONS)[number]["id"];

export interface RgpdPreparationAnswer {
  status: RgpdPreparationStatus;
  note: string;
  justification: string;
}

export interface RgpdPreparationContext {
  projectName: string;
  treatmentName: string;
  purpose: string;
  decisionOwner: string;
  reviewDate: string;
  roleHypothesis: RgpdRoleHypothesis;
  roleReasoning: string;
}

export interface RgpdPreparationProvider {
  id: string;
  name: string;
  service: string;
  storageCountries: string;
  remoteAccessCountries: string;
  roleHypothesis: RgpdRoleHypothesis;
  evidence: string;
}

export type RgpdRecurringPeriod = "monthly" | "annual";

export interface RgpdPreparationAction {
  id: string;
  title: string;
  owner: string;
  dueDate: string;
  includedInActionId: string;
  oneOffCash: string;
  recurringCash: string;
  recurringPeriod: RgpdRecurringPeriod;
  internalDays: string;
  costUnknown: boolean;
  zeroJustification: string;
  evidence: string;
}

export interface RgpdSaasPreparation {
  context: RgpdPreparationContext;
  answers: Record<RgpdPreparationQuestionId, RgpdPreparationAnswer>;
  providers: RgpdPreparationProvider[];
  actions: RgpdPreparationAction[];
  fictitiousExample: boolean;
}

export type RgpdPreparationIssueSeverity = "blocking" | "incomplete" | "review";

export interface RgpdPreparationIssue {
  path: string;
  message: string;
  severity: RgpdPreparationIssueSeverity;
  step: RgpdPreparationStep;
}

export interface RgpdPreparationValidation {
  issues: RgpdPreparationIssue[];
  isStructurallyValid: boolean;
  isReviewReady: boolean;
}

export type RgpdNextActionId =
  | "complete-mapping"
  | "limit-feature"
  | "build-and-test"
  | "reconcile-product-contract"
  | "specialist-review"
  | "ready-for-review";

export interface RgpdNextAction {
  id: RgpdNextActionId;
  label: string;
  explanation: string;
  firstReasons: string[];
}

export interface ParsedRgpdAmount {
  state: "empty" | "valid" | "invalid";
  value: number | null;
  normalized: string;
}

export interface RgpdCostSummary {
  oneOffCashEntered: number;
  monthlyCashEntered: number;
  annualCashEntered: number;
  internalDaysEntered: number;
  hasUnknownCosts: boolean;
  includedActionCount: number;
  countedActionCount: number;
}

const STATUS_LABELS: Record<RgpdPreparationStatus, string> = {
  unknown: "À documenter",
  documented: "Documenté avec une preuve ou une référence",
  "review-needed": "À faire relire ou arbitrer",
  "not-applicable-with-justification": "Non applicable avec justification",
};

const ROLE_LABELS: Record<RgpdRoleHypothesis, string> = {
  unknown: "Rôle non examiné",
  "controller-to-confirm": "Responsable du traitement à confirmer",
  "processor-to-confirm": "Sous-traitant à confirmer",
  "joint-to-review": "Responsabilité conjointe à examiner",
  "mixed-purposes-to-split": "Finalités mixtes à séparer et faire relire",
};

function blankAnswer(): RgpdPreparationAnswer {
  return { status: "unknown", note: "", justification: "" };
}

function emptyAnswers() {
  return Object.fromEntries(
    RGPD_PREPARATION_QUESTIONS.map((question) => [question.id, blankAnswer()]),
  ) as Record<RgpdPreparationQuestionId, RgpdPreparationAnswer>;
}

export function createEmptyRgpdPreparation(): RgpdSaasPreparation {
  return {
    context: {
      projectName: "",
      treatmentName: "",
      purpose: "",
      decisionOwner: "",
      reviewDate: "",
      roleHypothesis: "unknown",
      roleReasoning: "",
    },
    answers: emptyAnswers(),
    providers: [],
    actions: [createEmptyRgpdAction("action-1")],
    fictitiousExample: false,
  };
}

export function createEmptyRgpdProvider(id: string): RgpdPreparationProvider {
  return {
    id,
    name: "",
    service: "",
    storageCountries: "",
    remoteAccessCountries: "",
    roleHypothesis: "unknown",
    evidence: "",
  };
}

export function createEmptyRgpdAction(id: string): RgpdPreparationAction {
  return {
    id,
    title: "",
    owner: "",
    dueDate: "",
    includedInActionId: "",
    oneOffCash: "",
    recurringCash: "",
    recurringPeriod: "annual",
    internalDays: "",
    costUnknown: true,
    zeroJustification: "",
    evidence: "",
  };
}

function clean(value: string) {
  return value.trim().replace(/\s+/g, " ");
}

function isIsoDate(value: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const parsed = new Date(`${value}T00:00:00Z`);
  return (
    !Number.isNaN(parsed.getTime()) &&
    parsed.toISOString().slice(0, 10) === value
  );
}

export function parseRgpdAmount(raw: string): ParsedRgpdAmount {
  const trimmed = raw.replace(/[\u00a0\u202f]/g, " ").trim();

  if (trimmed === "") {
    return { state: "empty", value: null, normalized: "" };
  }

  const compactPattern = /^(?:0|[1-9]\d*)(?:[,.]\d{1,2})?$/;
  const groupedPattern = /^(?:[1-9]\d{0,2}(?: \d{3})+)(?:,\d{1,2})?$/;
  if (!compactPattern.test(trimmed) && !groupedPattern.test(trimmed)) {
    return { state: "invalid", value: null, normalized: trimmed };
  }

  const normalized = trimmed.replaceAll(" ", "").replace(",", ".");
  const value = Number(normalized);
  if (!Number.isFinite(value) || value > 100_000_000) {
    return { state: "invalid", value: null, normalized };
  }

  return {
    state: "valid",
    value: Math.round((value + Number.EPSILON) * 100) / 100,
    normalized,
  };
}

function addIssue(
  issues: RgpdPreparationIssue[],
  step: RgpdPreparationStep,
  path: string,
  message: string,
  severity: RgpdPreparationIssueSeverity = "incomplete",
) {
  issues.push({ step, path, message, severity });
}

function validateContext(
  preparation: RgpdSaasPreparation,
  issues: RgpdPreparationIssue[],
) {
  const required = [
    ["projectName", "Nommez le projet ou le produit examiné."],
    ["treatmentName", "Nommez un traitement ou usage concret à suivre."],
    ["purpose", "Écrivez la décision métier ou la finalité examinée."],
    [
      "decisionOwner",
      "Nommez le rôle responsable de la prochaine décision, sans donnée personnelle.",
    ],
  ] as const;

  for (const [field, message] of required) {
    if (!clean(preparation.context[field])) {
      addIssue(issues, 1, `context.${field}`, message);
    }
  }

  if (!preparation.context.reviewDate) {
    addIssue(issues, 1, "context.reviewDate", "Indiquez la date de la revue.");
  } else if (!isIsoDate(preparation.context.reviewDate)) {
    addIssue(
      issues,
      1,
      "context.reviewDate",
      "La date de revue n’est pas valide.",
    );
  }

  if (preparation.context.roleHypothesis === "unknown") {
    addIssue(
      issues,
      1,
      "context.roleHypothesis",
      "Choisissez une hypothèse de rôle à confirmer.",
    );
  }
  if (!clean(preparation.context.roleReasoning)) {
    addIssue(
      issues,
      1,
      "context.roleReasoning",
      "Décrivez qui décide des finalités et des moyens pour justifier l’hypothèse.",
    );
  }
}

function validateAnswers(
  preparation: RgpdSaasPreparation,
  issues: RgpdPreparationIssue[],
) {
  for (const question of RGPD_PREPARATION_QUESTIONS) {
    const answer = preparation.answers[question.id];
    const prefix = `answer.${question.id}`;

    if (answer.status === "unknown") {
      addIssue(
        issues,
        question.step,
        `${prefix}.status`,
        `${question.legend} : indiquez ce qui est documenté, à revoir ou non applicable.`,
      );
      continue;
    }

    if (answer.status === "not-applicable-with-justification") {
      if (!question.allowsNotApplicable) {
        addIssue(
          issues,
          question.step,
          `${prefix}.status`,
          `${question.legend} : ce point ne peut pas être écarté dans ce parcours.`,
          "blocking",
        );
      }
      if (!clean(answer.justification)) {
        addIssue(
          issues,
          question.step,
          `${prefix}.justification`,
          `${question.legend} : expliquez précisément pourquoi ce point ne s’applique pas.`,
        );
      }
      continue;
    }

    if (!clean(answer.note)) {
      addIssue(
        issues,
        question.step,
        `${prefix}.note`,
        `${question.legend} : ajoutez la preuve, la référence ou la question exacte à arbitrer.`,
      );
    }
  }
}

function validateProviders(
  preparation: RgpdSaasPreparation,
  issues: RgpdPreparationIssue[],
) {
  const inventoryStatus = preparation.answers["provider-inventory"].status;
  if (
    inventoryStatus !== "unknown" &&
    inventoryStatus !== "not-applicable-with-justification" &&
    preparation.providers.length === 0
  ) {
    addIssue(
      issues,
      2,
      "providers",
      "Ajoutez au moins un prestataire ou marquez l’inventaire non applicable avec une justification.",
    );
  }

  const seenIds = new Set<string>();
  preparation.providers.forEach((provider, index) => {
    const prefix = `provider.${provider.id}`;
    if (!provider.id || seenIds.has(provider.id)) {
      addIssue(
        issues,
        2,
        `${prefix}.id`,
        `Prestataire ${index + 1} : l’identifiant est absent ou dupliqué.`,
        "blocking",
      );
    }
    seenIds.add(provider.id);

    const fields = [
      ["name", "nommez le prestataire"],
      ["service", "décrivez le service utilisé"],
      [
        "storageCountries",
        "indiquez les pays de stockage, ou écrivez « aucun stockage » si cela a été vérifié",
      ],
      [
        "remoteAccessCountries",
        "indiquez les pays d’accès à distance, ou écrivez « aucun accès » si cela a été vérifié",
      ],
      ["evidence", "ajoutez une source et sa date de vérification"],
    ] as const;
    for (const [field, message] of fields) {
      if (!clean(provider[field])) {
        addIssue(
          issues,
          2,
          `${prefix}.${field}`,
          `Prestataire ${index + 1} : ${message}.`,
        );
      }
    }
    if (provider.roleHypothesis === "unknown") {
      addIssue(
        issues,
        2,
        `${prefix}.roleHypothesis`,
        `Prestataire ${index + 1} : choisissez une hypothèse de rôle à confirmer.`,
      );
    }
  });
}

function actionStructuralIssues(
  actions: RgpdPreparationAction[],
): RgpdPreparationIssue[] {
  const issues: RgpdPreparationIssue[] = [];
  const ids = new Set(actions.map((action) => action.id));

  actions.forEach((action, index) => {
    const path = `action.${action.id}.includedInActionId`;
    if (
      !action.id ||
      actions.filter((candidate) => candidate.id === action.id).length > 1
    ) {
      addIssue(
        issues,
        4,
        `action.${action.id}.id`,
        `Action ${index + 1} : l’identifiant est absent ou dupliqué.`,
        "blocking",
      );
    }
    if (action.includedInActionId && !ids.has(action.includedInActionId)) {
      addIssue(
        issues,
        4,
        path,
        `Action ${index + 1} : l’action mère n’existe plus.`,
        "blocking",
      );
    }
    if (action.includedInActionId === action.id) {
      addIssue(
        issues,
        4,
        path,
        `Action ${index + 1} : une action ne peut pas s’inclure elle-même.`,
        "blocking",
      );
    }
  });

  for (const action of actions) {
    const visited = new Set<string>();
    let current: RgpdPreparationAction | undefined = action;
    while (current?.includedInActionId) {
      if (visited.has(current.id)) {
        addIssue(
          issues,
          4,
          `action.${action.id}.includedInActionId`,
          `Action « ${clean(action.title) || action.id} » : la chaîne d’inclusion forme une boucle.`,
          "blocking",
        );
        break;
      }
      visited.add(current.id);
      current = actions.find(
        (candidate) => candidate.id === current?.includedInActionId,
      );
    }
  }

  return issues;
}

function validateActions(
  preparation: RgpdSaasPreparation,
  issues: RgpdPreparationIssue[],
) {
  if (preparation.actions.length === 0) {
    addIssue(
      issues,
      4,
      "actions",
      "Ajoutez au moins une action, même si son coût reste explicitement inconnu.",
    );
    return;
  }

  issues.push(...actionStructuralIssues(preparation.actions));

  preparation.actions.forEach((action, index) => {
    const prefix = `action.${action.id}`;
    const fields = [
      ["title", "nommez une action concrète"],
      ["owner", "attribuez un rôle responsable"],
      ["evidence", "indiquez le résultat attendu ou la preuve à conserver"],
    ] as const;
    for (const [field, message] of fields) {
      if (!clean(action[field])) {
        addIssue(
          issues,
          4,
          `${prefix}.${field}`,
          `Action ${index + 1} : ${message}.`,
        );
      }
    }

    if (!action.dueDate) {
      addIssue(
        issues,
        4,
        `${prefix}.dueDate`,
        `Action ${index + 1} : indiquez une échéance.`,
      );
    } else if (!isIsoDate(action.dueDate)) {
      addIssue(
        issues,
        4,
        `${prefix}.dueDate`,
        `Action ${index + 1} : l’échéance n’est pas valide.`,
      );
    }

    const amounts = [
      ["oneOffCash", "trésorerie ponctuelle"],
      ["recurringCash", "trésorerie récurrente"],
      ["internalDays", "capacité interne en jours"],
    ] as const;
    const parsed = amounts.map(([field, label]) => ({
      field,
      label,
      result: parseRgpdAmount(action[field]),
    }));
    parsed.forEach(({ field, label, result }) => {
      if (result.state === "invalid") {
        addIssue(
          issues,
          4,
          `${prefix}.${field}`,
          `Action ${index + 1} : le montant « ${label} » doit être un nombre positif, avec au plus deux décimales.`,
          "blocking",
        );
      }
    });

    if (action.includedInActionId) {
      if (
        parsed.some(({ result }) => result.state !== "empty") ||
        action.costUnknown
      ) {
        addIssue(
          issues,
          4,
          `${prefix}.includedInActionId`,
          `Action ${index + 1} : une action incluse ne doit porter aucun coût propre, sinon le total risque d’être compté deux fois.`,
          "blocking",
        );
      }
    } else if (
      parsed.every(({ result }) => result.state === "empty") &&
      !action.costUnknown
    ) {
      addIssue(
        issues,
        4,
        `${prefix}.costUnknown`,
        `Action ${index + 1} : renseignez au moins un coût ou gardez l’option « coût encore inconnu ».`,
      );
    }

    const hasEnteredZero = parsed.some(
      ({ result }) => result.state === "valid" && result.value === 0,
    );
    if (hasEnteredZero && !clean(action.zeroJustification)) {
      addIssue(
        issues,
        4,
        `${prefix}.zeroJustification`,
        `Action ${index + 1} : justifiez chaque montant saisi à zéro.`,
      );
    }
  });
}

export function validateRgpdPreparation(
  preparation: RgpdSaasPreparation,
): RgpdPreparationValidation {
  const issues: RgpdPreparationIssue[] = [];
  validateContext(preparation, issues);
  validateAnswers(preparation, issues);
  validateProviders(preparation, issues);
  validateActions(preparation, issues);

  const isStructurallyValid = !issues.some(
    (issue) => issue.severity === "blocking",
  );
  const isReviewReady = !issues.some(
    (issue) => issue.severity === "blocking" || issue.severity === "incomplete",
  );

  return { issues, isStructurallyValid, isReviewReady };
}

export function summarizeRgpdCosts(
  preparation: RgpdSaasPreparation,
): RgpdCostSummary {
  let oneOffCashEntered = 0;
  let monthlyCashEntered = 0;
  let annualCashEntered = 0;
  let internalDaysEntered = 0;
  let hasUnknownCosts = false;
  let includedActionCount = 0;
  let countedActionCount = 0;

  for (const action of preparation.actions) {
    if (action.includedInActionId) {
      includedActionCount += 1;
      continue;
    }

    countedActionCount += 1;
    hasUnknownCosts ||= action.costUnknown;
    const oneOff = parseRgpdAmount(action.oneOffCash);
    const recurring = parseRgpdAmount(action.recurringCash);
    const internal = parseRgpdAmount(action.internalDays);

    if (oneOff.state === "valid" && oneOff.value !== null) {
      oneOffCashEntered += oneOff.value;
    }
    if (recurring.state === "valid" && recurring.value !== null) {
      if (action.recurringPeriod === "monthly") {
        monthlyCashEntered += recurring.value;
      } else {
        annualCashEntered += recurring.value;
      }
    }
    if (internal.state === "valid" && internal.value !== null) {
      internalDaysEntered += internal.value;
    }
  }

  const round = (value: number) =>
    Math.round((value + Number.EPSILON) * 100) / 100;

  return {
    oneOffCashEntered: round(oneOffCashEntered),
    monthlyCashEntered: round(monthlyCashEntered),
    annualCashEntered: round(annualCashEntered),
    internalDaysEntered: round(internalDaysEntered),
    hasUnknownCosts,
    includedActionCount,
    countedActionCount,
  };
}

function decision(
  id: RgpdNextActionId,
  label: string,
  explanation: string,
  reasons: string[],
): RgpdNextAction {
  return { id, label, explanation, firstReasons: reasons.slice(0, 5) };
}

export function determineRgpdNextAction(
  preparation: RgpdSaasPreparation,
): RgpdNextAction {
  const validation = validateRgpdPreparation(preparation);
  const unresolved = validation.issues.filter(
    (issue) => issue.severity === "blocking" || issue.severity === "incomplete",
  );

  if (unresolved.length > 0) {
    return decision(
      "complete-mapping",
      "Compléter la cartographie avant de conclure",
      "Traitez le premier fait manquant ou incohérent. Une inconnue documentée vaut mieux qu’une réponse supposée.",
      unresolved.map((issue) => issue.message),
    );
  }

  const answerNeedsReview = (family: NextActionFamily) =>
    RGPD_PREPARATION_QUESTIONS.filter(
      (question) =>
        question.nextAction === family &&
        preparation.answers[question.id].status === "review-needed",
    );

  const limitFeature = answerNeedsReview("limit-feature");
  if (limitFeature.length > 0) {
    return decision(
      "limit-feature",
      "Limiter la fonction ou rester en données fictives",
      "Une fonction utilisant des traceurs ou de l’IA reste à examiner. Limitez son périmètre tant que les données, le fournisseur et les décisions ne sont pas confirmés.",
      limitFeature.map((question) => question.legend),
    );
  }

  const productContract = answerNeedsReview("product-contract");
  if (productContract.length > 0) {
    return decision(
      "reconcile-product-contract",
      "Réconcilier le produit et le contrat",
      "Une promesse contractuelle ou une chaîne de sous-traitance reste à rapprocher du fonctionnement réel du SaaS.",
      productContract.map((question) => question.legend),
    );
  }

  const buildTests = answerNeedsReview("build-test");
  if (buildTests.length > 0) {
    return decision(
      "build-and-test",
      "Construire ou rejouer les tests manquants",
      "Le dossier décrit le besoin, mais il manque encore une preuve obtenue sur le produit : droits, sécurité, restauration, incident ou sortie.",
      buildTests.map((question) => question.legend),
    );
  }

  const specialistQuestions = answerNeedsReview("specialist");
  const specialistRole = [
    "joint-to-review",
    "mixed-purposes-to-split",
  ].includes(preparation.context.roleHypothesis);
  if (specialistRole || specialistQuestions.length > 0) {
    return decision(
      "specialist-review",
      "Préparer une revue avec le DPO, le juriste ou le spécialiste concerné",
      "Les faits sont suffisamment structurés pour poser des questions précises, mais l’outil ne tranche ni le rôle, ni la base, ni un transfert.",
      [
        ...(specialistRole
          ? [ROLE_LABELS[preparation.context.roleHypothesis]]
          : []),
        ...specialistQuestions.map((question) => question.legend),
      ],
    );
  }

  return decision(
    "ready-for-review",
    "Dossier prêt pour une revue humaine",
    "Le dossier est suffisamment renseigné pour une revue. Cela ne valide ni le rôle, ni la base juridique, ni le transfert, ni la conformité du SaaS.",
    [],
  );
}

function escapeMarkdown(value: string) {
  return clean(value)
    .replaceAll("\\", "\\\\")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replace(/([`*_[\]()#+.!|])/g, "\\$1");
}

function display(value: string, fallback = "inconnu") {
  return clean(value) ? escapeMarkdown(value) : fallback;
}

function euro(value: number) {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 2,
  }).format(value);
}

function amountDisplay(raw: string, unit: string) {
  const parsed = parseRgpdAmount(raw);
  if (parsed.state === "empty") return "non renseigné";
  if (parsed.state === "invalid" || parsed.value === null) {
    return `invalide : ${escapeMarkdown(raw)}`;
  }
  return `${parsed.value.toLocaleString("fr-FR", {
    maximumFractionDigits: 2,
  })} ${unit}`;
}

export function rgpdPreparationFileName(
  preparation: RgpdSaasPreparation,
  validation = validateRgpdPreparation(preparation),
) {
  const slug =
    clean(preparation.context.projectName)
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 60) || "projet";
  return `${validation.isReviewReady ? "releve" : "brouillon"}-preparation-rgpd-${slug}.md`;
}

export function buildRgpdPreparationMarkdown(preparation: RgpdSaasPreparation) {
  const validation = validateRgpdPreparation(preparation);
  const nextAction = determineRgpdNextAction(preparation);
  const costs = summarizeRgpdCosts(preparation);
  const lines = [
    `# ${validation.isReviewReady ? "Relevé de préparation RGPD" : "Brouillon de préparation RGPD"} — ${display(preparation.context.projectName, "projet non nommé")}`,
    "",
    preparation.fictitiousExample
      ? "> EXEMPLE ENTIÈREMENT FICTIF — entreprise, données, décisions et montants inventés uniquement pour expliquer la méthode. Ce ne sont ni des tarifs de marché, ni un avis, ni un résultat Hagnéré Code."
      : "> Document de travail préparatoire. Il ne constitue ni un avis juridique, ni une validation de conformité.",
    "",
    validation.isReviewReady
      ? "**État du relevé : suffisamment renseigné pour une revue humaine.**"
      : `**État du relevé : brouillon — ${validation.issues.length} point${validation.issues.length > 1 ? "s" : ""} à traiter.**`,
    "",
    "## Périmètre suivi",
    "",
    `- Projet : ${display(preparation.context.projectName)}`,
    `- Traitement ou usage : ${display(preparation.context.treatmentName)}`,
    `- Finalité ou décision métier : ${display(preparation.context.purpose)}`,
    `- Responsable de la prochaine décision : ${display(preparation.context.decisionOwner)}`,
    `- Date de revue : ${display(preparation.context.reviewDate)}`,
    `- Hypothèse de rôle, à confirmer : ${ROLE_LABELS[preparation.context.roleHypothesis]}`,
    `- Raisonnement factuel : ${display(preparation.context.roleReasoning)}`,
    "",
    "## Relevé des points examinés",
  ];

  for (const step of RGPD_PREPARATION_STEPS) {
    lines.push("", `### ${step.id}. ${step.shortLabel}`, "");
    RGPD_PREPARATION_QUESTIONS.filter(
      (question) => question.step === step.id,
    ).forEach((question) => {
      const answer = preparation.answers[question.id];
      lines.push(
        `- **${question.legend}** — ${STATUS_LABELS[answer.status]}`,
        `  - Preuve, référence ou question : ${display(answer.note, "non renseignée")}`,
      );
      if (answer.status === "not-applicable-with-justification") {
        lines.push(
          `  - Justification : ${display(answer.justification, "non renseignée")}`,
        );
      }
    });
  }

  lines.push("", "## Prestataires et accès", "");
  if (preparation.providers.length === 0) {
    lines.push("Aucun prestataire saisi.");
  } else {
    preparation.providers.forEach((provider, index) => {
      lines.push(
        `${index + 1}. **${display(provider.name, "prestataire non nommé")}** — ${display(provider.service, "service inconnu")}`,
        `   - Stockage et sauvegarde : ${display(provider.storageCountries)}`,
        `   - Accès à distance : ${display(provider.remoteAccessCountries)}`,
        `   - Hypothèse de rôle : ${ROLE_LABELS[provider.roleHypothesis]}`,
        `   - Source et date : ${display(provider.evidence)}`,
      );
    });
  }

  lines.push("", "## Plan d’action et coûts renseignés", "");
  preparation.actions.forEach((action, index) => {
    const parent = preparation.actions.find(
      (candidate) => candidate.id === action.includedInActionId,
    );
    lines.push(
      `${index + 1}. **${display(action.title, "action non nommée")}**`,
      `   - Responsable : ${display(action.owner)} · échéance : ${display(action.dueDate)}`,
      action.includedInActionId
        ? `   - Coût : inclus dans « ${display(parent?.title ?? action.includedInActionId)} » ; aucun montant ajouté au total.`
        : `   - Trésorerie ponctuelle : ${amountDisplay(action.oneOffCash, "€")}`,
      ...(action.includedInActionId
        ? []
        : [
            `   - Trésorerie récurrente : ${amountDisplay(action.recurringCash, `€ par ${action.recurringPeriod === "monthly" ? "mois" : "an"}`)}`,
            `   - Capacité interne : ${amountDisplay(action.internalDays, "jour(s)")}`,
            `   - Coût encore inconnu : ${action.costUnknown ? "oui — non converti en zéro" : "non déclaré"}`,
          ]),
      `   - Résultat ou preuve attendue : ${display(action.evidence)}`,
    );
    if (clean(action.zeroJustification)) {
      lines.push(
        `   - Justification d’un zéro saisi : ${display(action.zeroJustification)}`,
      );
    }
  });

  lines.push(
    "",
    "### Sous-totaux des seuls montants renseignés",
    "",
    `- Trésorerie ponctuelle : ${euro(costs.oneOffCashEntered)}`,
    `- Trésorerie récurrente mensuelle : ${euro(costs.monthlyCashEntered)} / mois`,
    `- Trésorerie récurrente annuelle : ${euro(costs.annualCashEntered)} / an`,
    `- Capacité interne : ${costs.internalDaysEntered.toLocaleString("fr-FR")} jour(s)`,
    `- Actions comptées : ${costs.countedActionCount} ; actions incluses sans double compte : ${costs.includedActionCount}`,
    costs.hasUnknownCosts
      ? "- **Au moins un coût reste inconnu. Les sous-totaux ne sont donc pas un coût complet et l’inconnue n’a pas été convertie en zéro.**"
      : "- Aucun coût n’est marqué inconnu ; vérifiez néanmoins le périmètre et les hypothèses avant toute comparaison.",
  );

  if (validation.issues.length > 0) {
    lines.push("", "## Points à traiter avant une revue qualifiée", "");
    validation.issues.forEach((issue) =>
      lines.push(`- ${escapeMarkdown(issue.message)}`),
    );
  }

  lines.push(
    "",
    "## Prochaine action",
    "",
    `**${nextAction.label}**`,
    "",
    nextAction.explanation,
  );
  nextAction.firstReasons.forEach((reason) =>
    lines.push(`- ${escapeMarkdown(reason)}`),
  );

  lines.push(
    "",
    "## Limites obligatoires",
    "",
    "- Aucun score de conformité n’est calculé.",
    "- Les rôles affichés sont des hypothèses à confirmer finalité par finalité.",
    "- Le relevé ne confirme ni base juridique, ni transfert, ni analyse d’impact, ni obligation de désigner un DPO.",
    "- Les preuves, contrats, tests et décisions doivent être relus par les personnes compétentes.",
    "",
    validation.isReviewReady
      ? "Le dossier est suffisamment renseigné pour une revue. Cela ne valide ni le rôle, ni la base juridique, ni le transfert, ni la conformité du SaaS."
      : "Ce brouillon n’est pas un dossier prêt pour revue. Commencez par le premier point signalé.",
  );

  return lines.join("\n");
}

export function createFictitiousRgpdPreparationExample(): RgpdSaasPreparation {
  const preparation = createEmptyRgpdPreparation();
  preparation.fictitiousExample = true;
  preparation.context = {
    projectName: "Orbia Démo",
    treatmentName: "Import et suivi des inscriptions aux formations B2B",
    purpose:
      "Permettre au client de planifier les sessions et de suivre les inscriptions jusqu’à leur clôture",
    decisionOwner: "Direction produit fictive",
    reviewDate: "2026-07-24",
    roleHypothesis: "processor-to-confirm",
    roleReasoning:
      "Dans cet exemple fictif, le client choisit les salariés importés et la finalité d’organisation des sessions ; la facturation et les autres usages propres d’Orbia restent à isoler et faire confirmer.",
  };

  for (const question of RGPD_PREPARATION_QUESTIONS) {
    preparation.answers[question.id] = {
      status: "documented",
      note: `Référence fictive ${question.id}, version du 24 juillet 2026 ; à remplacer par une preuve réelle.`,
      justification: "",
    };
  }
  preparation.answers["sensitive-or-criminal-data"] = {
    status: "review-needed",
    note: "Un champ libre peut recevoir une information inattendue ; arbitrage fictif à préparer avec le DPO.",
    justification: "",
  };
  preparation.answers["transfer-tool-and-assessment"] = {
    status: "review-needed",
    note: "Accès de support hors EEE déclaré dans le cas fictif ; mécanisme et analyse à confirmer par un spécialiste.",
    justification: "",
  };
  preparation.answers["cookies-trackers"] = {
    status: "not-applicable-with-justification",
    note: "",
    justification:
      "Le parcours fictif examiné ne contient aucun traceur optionnel ; ce point devrait être revérifié sur le produit et le site réels.",
  };
  preparation.answers["ai-model-data"] = {
    status: "not-applicable-with-justification",
    note: "",
    justification:
      "Aucune fonction IA n’est activée dans le périmètre fictif examiné.",
  };

  preparation.providers = [
    {
      id: "provider-1",
      name: "Hébergeur Atlas fictif",
      service: "Base applicative et sauvegardes du cas de démonstration",
      storageCountries: "France et Allemagne — déclaration fictive à vérifier",
      remoteAccessCountries:
        "France et Canada — accès de support fictif à examiner",
      roleHypothesis: "processor-to-confirm",
      evidence:
        "Annexe prestataires fictive, version du 24 juillet 2026 ; aucune source réelle.",
    },
  ];

  preparation.actions = [
    {
      id: "action-1",
      title: "Cartographier les champs et les finalités",
      owner: "Responsable produit fictif",
      dueDate: "2026-08-15",
      includedInActionId: "",
      oneOffCash: "3 900",
      recurringCash: "",
      recurringPeriod: "annual",
      internalDays: "3",
      costUnknown: false,
      zeroJustification: "",
      evidence: "Matrice fictive relue et datée.",
    },
    {
      id: "action-2",
      title: "Préparer la revue contrat–produit",
      owner: "Responsable opérations fictif",
      dueDate: "2026-08-29",
      includedInActionId: "",
      oneOffCash: "2 500",
      recurringCash: "",
      recurringPeriod: "annual",
      internalDays: "2",
      costUnknown: true,
      zeroJustification: "",
      evidence:
        "Questions fictives attribuées ; coût de revue spécialisée encore inconnu.",
    },
    {
      id: "action-3",
      title: "Tester droits, restauration et sortie",
      owner: "Responsable technique fictif",
      dueDate: "2026-09-12",
      includedInActionId: "",
      oneOffCash: "2 000",
      recurringCash: "3 000",
      recurringPeriod: "annual",
      internalDays: "4,5",
      costUnknown: false,
      zeroJustification: "",
      evidence:
        "Procès-verbal fictif avec jeu de données de démonstration et anomalies.",
    },
    {
      id: "action-4",
      title: "Exécuter le test d’export du cas fictif",
      owner: "Responsable technique fictif",
      dueDate: "2026-09-05",
      includedInActionId: "action-3",
      oneOffCash: "",
      recurringCash: "",
      recurringPeriod: "annual",
      internalDays: "",
      costUnknown: false,
      zeroJustification: "",
      evidence: "Export fictif lisible et contrôlé sur cinq enregistrements.",
    },
  ];

  return preparation;
}
