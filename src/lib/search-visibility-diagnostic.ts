export type SearchVisibilityStepId =
  "discovery" | "crawl" | "index" | "impressions" | "clicks" | "leads";

export type SearchVisibilityStatus =
  | "unknown"
  | "proved"
  | "not-proved"
  | "success"
  | "failed"
  | "indexed"
  | "not-indexed"
  | "visible-value"
  | "zero-visible-clicks"
  | "no-visible-data"
  | "attributed-value"
  | "observed-unattributed"
  | "not-tracked";

export interface SearchVisibilityStepValue {
  status: SearchVisibilityStatus;
  evidence: string;
}

export type SearchVisibilitySteps = Record<
  SearchVisibilityStepId,
  SearchVisibilityStepValue
>;

export const SEARCH_VISIBILITY_STATUS_LABELS: Record<
  SearchVisibilityStatus,
  string
> = {
  unknown: "Je ne sais pas encore",
  proved: "Adresse reconnue par Google",
  "not-proved": "Adresse non reconnue",
  success: "Exploration réussie",
  failed: "Exploration échouée ou bloquée",
  indexed: "Cette version est indexée",
  "not-indexed": "Cette version n’est pas indexée",
  "visible-value": "Au moins une valeur positive est visible",
  "zero-visible-clicks": "Zéro clic est visible avec ces filtres",
  "no-visible-data": "Aucune donnée n’est visible dans le rapport",
  "attributed-value": "Une valeur attribuée à ce parcours est disponible",
  "observed-unattributed": "Des demandes existent, attribution non prouvée",
  "not-tracked": "Les demandes ne sont pas suivies",
};

export interface SearchVisibilityIdentity {
  checkedAt: string;
  period: string;
  url: string;
  query: string;
  queryType: string;
  context: string;
  owner: string;
  recheckAt: string;
}

export interface SearchVisibilityFinding {
  stepId: SearchVisibilityStepId | "complete";
  title: string;
  conclusion: string;
  limit: string;
  action: string;
}

type StepRule = {
  id: SearchVisibilityStepId;
  title: string;
  completeStatus: SearchVisibilityStatus;
  action: string;
  limit: string;
};

export const SEARCH_VISIBILITY_RULES: StepRule[] = [
  {
    id: "discovery",
    title: "1. Découverte de l’adresse",
    completeStatus: "proved",
    action:
      "Inspectez l’URL dans Search Console. Si Google ne la connaît pas, vérifiez ensuite ses liens internes et sa présence dans le sitemap.",
    limit:
      "La présence dans un sitemap ou dans un lien ne prouve pas, à elle seule, que Google a déjà découvert l’adresse.",
  },
  {
    id: "crawl",
    title: "2. Ouverture de la page par Google",
    completeStatus: "success",
    action:
      "Traitez uniquement l’erreur observée : réponse serveur, redirection, accès bloqué ou ressource indispensable non récupérée.",
    limit:
      "Une page accessible dans votre navigateur n’est pas forcément la version que Google a pu ouvrir lors de sa dernière exploration.",
  },
  {
    id: "index",
    title: "3. Version retenue dans l’index",
    completeStatus: "indexed",
    action:
      "Lisez la raison affichée, le noindex éventuel et les adresses canoniques déclarée et choisie avant de demander une nouvelle exploration.",
    limit:
      "Une demande d’indexation ne corrige ni un blocage, ni un doublon, ni une autre adresse choisie comme version principale.",
  },
  {
    id: "impressions",
    title: "4. Affichages visibles pour cette recherche",
    completeStatus: "visible-value",
    action:
      "Vérifiez la période et les filtres page, requête, pays et appareil. Conservez la mention « aucune donnée visible » si aucune ligne n’apparaît.",
    limit:
      "L’absence d’une ligne de requête dans Search Console ne prouve pas qu’aucune impression n’a jamais eu lieu.",
  },
  {
    id: "clicks",
    title: "5. Clics visibles pour cette recherche",
    completeStatus: "visible-value",
    action:
      "Comparez le titre et l’extrait affichés à la recherche visée, puis examinez le contexte et la position sans en déduire une causalité automatique.",
    limit:
      "Des impressions sans clic ne prouvent pas qu’une refonte complète est nécessaire.",
  },
  {
    id: "leads",
    title: "6. Demandes attribuables à ce parcours",
    completeStatus: "attributed-value",
    action:
      "Vérifiez d’abord le comptage et l’attribution des formulaires, appels ou rendez-vous au même parcours avant de conclure sur la conversion.",
    limit:
      "Des demandes observées ailleurs ne peuvent pas être divisées par les clics Search Console sans une attribution commune prouvée.",
  },
];

export function findFirstUnprovedStep(
  steps: SearchVisibilitySteps,
): SearchVisibilityFinding {
  for (const rule of SEARCH_VISIBILITY_RULES) {
    const value = steps[rule.id];
    const evidenceMissing = value.evidence.trim().length === 0;
    if (value.status !== rule.completeStatus || evidenceMissing) {
      return {
        stepId: rule.id,
        title: rule.title,
        conclusion: evidenceMissing
          ? "La preuve n’est pas encore recopiée : le diagnostic s’arrête ici."
          : "L’état choisi ne permet pas encore de fermer cette étape.",
        limit: rule.limit,
        action: rule.action,
      };
    }
  }

  return {
    stepId: "complete",
    title: "Les six étapes sont renseignées",
    conclusion:
      "La chaîne est documentée pour cette URL, cette recherche et cette période. Cela ne prouve ni une performance suffisante ni une causalité commerciale.",
    limit:
      "Ce diagnostic décrit les preuves recopiées ; il ne remplace pas les rapports d’origine ni un contrôle de leur configuration.",
    action:
      "Conservez la fiche datée, vérifiez la qualité des demandes et décidez du prochain test avec un responsable et une date.",
  };
}

export function formatSearchVisibilityDiagnostic(
  identity: SearchVisibilityIdentity,
  steps: SearchVisibilitySteps,
  finding: SearchVisibilityFinding,
) {
  const valueOr = (value: string, fallback: string) => value.trim() || fallback;
  const lines = [
    "DIAGNOSTIC URL–RECHERCHE",
    `Date du contrôle : ${valueOr(identity.checkedAt, "non renseignée")}`,
    `Période observée : ${valueOr(identity.period, "non renseignée")}`,
    `URL : ${valueOr(identity.url, "non renseignée")}`,
    `Recherche exacte : ${valueOr(identity.query, "non renseignée")}`,
    `Type de recherche : ${valueOr(identity.queryType, "non renseigné")}`,
    `Pays et appareil : ${valueOr(identity.context, "non renseignés")}`,
    `Responsable : ${valueOr(identity.owner, "non renseigné")}`,
    "",
    ...SEARCH_VISIBILITY_RULES.flatMap((rule) => {
      const value = steps[rule.id];
      return [
        rule.title,
        `État : ${SEARCH_VISIBILITY_STATUS_LABELS[value.status]}`,
        `Preuve : ${value.evidence.trim() || "non renseignée"}`,
      ];
    }),
    "",
    `Premier point à vérifier : ${finding.title}`,
    `Conclusion autorisée : ${finding.conclusion}`,
    `Limite : ${finding.limit}`,
    `Action suivante : ${finding.action}`,
    `Date de recontrôle : ${valueOr(identity.recheckAt, "non renseignée")}`,
    "",
    "Cette fiche est un outil Hagnéré Code. Elle ne constitue pas un verdict de Google.",
  ];

  return lines.join("\n");
}
