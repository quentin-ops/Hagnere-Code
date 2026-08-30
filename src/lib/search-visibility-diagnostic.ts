export type SearchVisibilityStepId =
  "crawl" | "index" | "impressions" | "clicks";

export type SearchVisibilityStatus =
  | "unknown"
  | "url-unknown"
  | "crawl-success"
  | "crawl-failed"
  | "indexed"
  | "not-indexed"
  | "visible-impressions"
  | "visible-clicks"
  | "zero-visible-clicks"
  | "no-visible-data";

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
  unknown: "Je n’ai pas encore vérifié",
  "url-unknown": "L’adresse n’est pas connue dans l’inspection",
  "crawl-success": "Google a pu ouvrir la page",
  "crawl-failed": "L’ouverture a échoué ou a été bloquée",
  indexed: "Vue Index Google : cette version est indexée",
  "not-indexed": "Vue Index Google : cette version n’est pas indexée",
  "visible-impressions": "Des impressions sont visibles",
  "visible-clicks": "Au moins un clic est visible",
  "zero-visible-clicks": "Zéro clic est visible avec ces filtres",
  "no-visible-data": "Aucune donnée n’est visible dans le rapport",
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
  stepId: SearchVisibilityStepId | "classified";
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
    id: "crawl",
    title: "1. Exploration de la page",
    completeStatus: "crawl-success",
    action:
      "Inspectez l’URL. Une adresse inconnue conduit aux liens internes et au sitemap ; une ouverture en échec conduit au motif affiché.",
    limit:
      "Une page qui s’ouvre dans votre navigateur n’est pas forcément celle que Google a pu récupérer lors de sa dernière exploration.",
  },
  {
    id: "index",
    title: "2. Version retenue dans l’index",
    completeStatus: "indexed",
    action:
      "Dans la vue Index Google, relevez le motif de non-indexation, l’instruction noindex éventuelle et l’URL canonique sélectionnée par Google. Une nouvelle exploration n’a de sens qu’après la correction observée.",
    limit:
      "Une demande d’indexation ne corrige ni un blocage, ni un doublon, ni le choix d’une autre adresse principale.",
  },
  {
    id: "impressions",
    title: "3. Impressions pour cette recherche",
    completeStatus: "visible-impressions",
    action:
      "Dans Performances, fixez le contexte, filtrez l’URL canonique sélectionnée par Google et relevez le total de la page. Ajoutez la recherche exacte en dernier. Si aucune ligne n’apparaît, indiquez « aucune donnée visible ».",
    limit:
      "Une requête absente du tableau ne prouve pas zéro impression : certaines lignes sont anonymisées, omises ou tronquées, et le filtre de requête retire les requêtes anonymisées du total.",
  },
  {
    id: "clicks",
    title: "4. Clics pour cette recherche",
    completeStatus: "visible-clicks",
    action:
      "Relevez le nombre de clics avec les mêmes filtres. Si des impressions existent sans clic, gardez aussi le titre et l’extrait affichés avant d’approfondir le diagnostic de visibilité.",
    limit:
      "Des impressions sans clic classent le problème ; elles ne prouvent pas à elles seules qu’il faut refaire la page ou le site.",
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
          ? "Le constat manque encore : reprenez le diagnostic ici."
          : "L’état choisi ne permet pas encore de passer au contrôle suivant.",
        limit: rule.limit,
        action: rule.action,
      };
    }
  }

  return {
    stepId: "classified",
    title: "L’indexation n’est plus le premier problème à examiner",
    conclusion:
      "Pour cette URL, cette recherche et cette période, vous avez relevé un état indexé, des impressions et au moins un clic avec les mêmes filtres.",
    limit:
      "Cette fiche ne juge ni la quantité de trafic, ni la qualité de la page, ni les demandes commerciales. Elle s’arrête volontairement ici.",
    action:
      "Gardez la fiche datée. Si la visibilité reste insuffisante, ouvrez un diagnostic séparé sur la recherche visée, le résultat affiché et les pages concurrentes.",
  };
}

export function formatSearchVisibilityDiagnostic(
  identity: SearchVisibilityIdentity,
  steps: SearchVisibilitySteps,
  finding: SearchVisibilityFinding,
) {
  const valueOr = (value: string, fallback: string) => value.trim() || fallback;
  const lines = [
    "FICHE URL–RECHERCHE",
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
        `Constat relevé : ${value.evidence.trim() || "non renseigné"}`,
      ];
    }),
    "",
    `Premier contrôle à reprendre : ${finding.title}`,
    `Ce que vous pouvez conclure : ${finding.conclusion}`,
    `Limite : ${finding.limit}`,
    `Action suivante : ${finding.action}`,
    `Date de recontrôle : ${valueOr(identity.recheckAt, "non renseignée")}`,
    "",
    "Cette fiche organise vos relevés. Elle ne constitue pas un verdict de Google.",
  ];

  return lines.join("\n");
}
