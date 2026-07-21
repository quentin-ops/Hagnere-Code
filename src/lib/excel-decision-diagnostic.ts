export interface ExcelDiagnosticContextAnswer {
  label: string;
  checked: boolean;
}

export const EXCEL_PAIN_KEYS = [
  "simultaneous",
  "mobile",
  "permissions",
  "duplicates",
  "auditTrail",
  "fragileRules",
  "integrations",
  "costlyIncident",
] as const;

export type ExcelPainKey = (typeof EXCEL_PAIN_KEYS)[number];

export interface ExcelDiagnosticAnswers extends Record<ExcelPainKey, boolean> {
  processRulesUnderstood: boolean;
  existingSoftwareCoversEssentials: boolean;
  microsoft365: boolean;
}

export type ExcelDiagnosticRecommendationCode =
  | "keep_excel"
  | "existing_software"
  | "secure_and_scope"
  | "prototype"
  | "configured_platform"
  | "custom_scope";

export interface ExcelDiagnosticRecommendation {
  code: ExcelDiagnosticRecommendationCode;
  label: string;
  title: string;
  summary: string;
  actions: string[];
  tone: "green" | "blue" | "violet";
}

const CRITICAL_SIGNAL_KEYS = [
  "permissions",
  "auditTrail",
  "costlyIncident",
] as const satisfies readonly ExcelPainKey[];

export function getExcelPainScore(answers: ExcelDiagnosticAnswers): number {
  return EXCEL_PAIN_KEYS.reduce(
    (total, key) => total + Number(answers[key]),
    0,
  );
}

export function getExcelCriticalSignalCount(
  answers: ExcelDiagnosticAnswers,
): number {
  return CRITICAL_SIGNAL_KEYS.reduce(
    (total, key) => total + Number(answers[key]),
    0,
  );
}

export function getExcelDiagnosticRecommendation(
  answers: ExcelDiagnosticAnswers,
): ExcelDiagnosticRecommendation {
  const painScore = getExcelPainScore(answers);
  const criticalSignalCount = getExcelCriticalSignalCount(answers);

  if (answers.existingSoftwareCoversEssentials && painScore > 0) {
    return {
      code: "existing_software",
      label: "Orientation : logiciel existant à tester",
      title:
        "Testez d’abord le logiciel qui couvre tous vos besoins indispensables.",
      summary:
        "Cette piste n’est prioritaire que si les droits d’accès, les échanges, les contrôles et les situations d’incident dont vous avez réellement besoin sont couverts, sans contournement fragile.",
      actions: [
        "Faire exécuter un scénario normal et les incidents critiques par trois futurs utilisateurs.",
        "Chiffrer licences, paramétrage, reprise des données, formation et sortie sur quatre ans.",
        "Vérifier l’export complet, l’hébergement, les droits et les fonctions indispensables avant de signer.",
      ],
      tone: "green",
    };
  }

  if (criticalSignalCount > 0) {
    return {
      code: "secure_and_scope",
      label: "Orientation : sécuriser puis étudier",
      title: "Ne décidez pas à partir du nombre total de cases cochées.",
      summary:
        "Un besoin de droits fins, de traçabilité ou un incident capable de bloquer une vente, une paie ou la production exige une étude séparée. Garder Excel, acheter un logiciel ou développer ne peut être tranché sans vérifier ce risque.",
      actions: [
        "Écrire le scénario critique, sa conséquence et la procédure manuelle de secours.",
        "Tester si un logiciel existant couvre ce scénario et tous les besoins indispensables.",
        "Faire chiffrer une étude limitée avec droits, traces, sauvegarde, reprise et tests d’incident.",
      ],
      tone: "violet",
    };
  }

  if (painScore <= 2) {
    return {
      code: "keep_excel",
      label: "Orientation : fiabiliser Excel",
      title:
        "Vous n’avez probablement pas besoin de remplacer Excel maintenant.",
      summary:
        "Les difficultés déclarées restent limitées et aucun signal critique n’est présent. Commencez par rendre le fichier partageable, documenté et mesurable avant de financer une migration.",
      actions: [
        "Créer une table structurée, des listes de valeurs et une feuille de mode d’emploi.",
        "Tester la coédition si les copies concurrentes constituent le seul blocage.",
        "Mesurer pendant quatre semaines les heures de ressaisie, erreurs et verrouillages.",
      ],
      tone: "green",
    };
  }

  if (!answers.processRulesUnderstood) {
    return {
      code: "prototype",
      label: answers.microsoft365
        ? "Orientation : prototype Power Apps"
        : "Orientation : prototype no-code",
      title:
        "Votre besoin mérite un prototype, pas encore un développement complet.",
      summary:
        "Le problème est réel, mais le déroulement normal et les principales exceptions ne sont pas encore assez compris. Un prototype limité à un seul flux permet d’apprendre sans figer trop tôt de mauvaises règles.",
      actions: [
        answers.microsoft365
          ? "Vérifier dans votre environnement Microsoft 365 les licences Power Apps, la source de données et chaque connecteur avant le test."
          : "Tester une base no-code sur un seul processus et avec des données non sensibles.",
        "Fixer un plafond de temps, de licences et d’enregistrements avant le test.",
        "Écrire dès le départ comment exporter les données si le prototype devient insuffisant.",
      ],
      tone: "blue",
    };
  }

  if (painScore <= 5 && !answers.integrations) {
    return {
      code: "configured_platform",
      label: answers.microsoft365
        ? "Orientation : Power Apps / low-code"
        : "Orientation : no-code maîtrisé",
      title:
        "Une plateforme peut suffire, après vérification du coût et de la sortie.",
      summary:
        "Le processus est compris, sa criticité reste contenue et aucune intégration complexe n’est déclarée. Une solution configurée peut résoudre le problème sans financer tout de suite un logiciel spécifique.",
      actions: [
        answers.microsoft365
          ? "Vérifier les licences Power Apps, la source de données et les connecteurs nécessaires dans votre environnement."
          : "Comparer les limites sur les utilisateurs, les lignes, les automatisations et l’historique.",
        "Additionner quatre ans de licences et le temps d’administration interne.",
        "Exiger un export test avant la mise en production et nommer deux administrateurs internes.",
      ],
      tone: "blue",
    };
  }

  return {
    code: "custom_scope",
    label: "Orientation : étude spécifique",
    title: "Un développement spécifique devient défendable — pas automatique.",
    summary:
      "Le cumul des intégrations, règles métier, usages simultanés ou fragilités dépasse ce qu’un tableur gère sereinement. La prochaine étape est une étude limitée, pas un grand projet signé à l’aveugle.",
    actions: [
      "Isoler un premier processus qui produit une valeur visible et peut fonctionner seul.",
      "Nettoyer un échantillon de données et écrire dix scénarios à tester avant le devis.",
      "Comparer le coût total sur quatre ans avec le statu quo et au moins une solution existante.",
    ],
    tone: "violet",
  };
}

export interface ExcelDiagnosticClipboardInput {
  recommendation: {
    label: string;
    title: string;
    summary: string;
    actions: readonly string[];
  };
  painScore: number;
  painSignalCount: number;
  selectedSignals: readonly string[];
  contextAnswers: readonly ExcelDiagnosticContextAnswer[];
}

export function buildExcelDiagnosticClipboardText({
  recommendation,
  painScore,
  painSignalCount,
  selectedSignals,
  contextAnswers,
}: ExcelDiagnosticClipboardInput): string {
  return [
    "Diagnostic Excel vers application — Hagnéré Code",
    `Résultat : ${recommendation.label}`,
    recommendation.title,
    recommendation.summary,
    "",
    `Signaux cochés (${painScore}/${painSignalCount}) :`,
    ...(selectedSignals.length > 0
      ? selectedSignals.map((signal) => `- ${signal}`)
      : ["- Aucun signal coché"]),
    "",
    "Contexte de décision :",
    ...contextAnswers.map(
      ({ label, checked }) => `- ${label} : ${checked ? "Oui" : "Non"}`,
    ),
    "",
    "Prochaines actions :",
    ...recommendation.actions.map((action) => `- ${action}`),
    "",
    "Résultat indicatif : à confronter au processus, aux données et aux offres du marché.",
  ].join("\n");
}
