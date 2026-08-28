/**
 * Bloc « provenance » du mail d'équipe — d'où vient le lead, et sous quelle
 * référence il est stocké.
 *
 * Le défaut réparé : `project_brief` enregistre `landing_page`,
 * `referrer_host`, `utm` et `public_slug`, mais AUCUN code ne relisait ces
 * colonnes. La seule façon de savoir quelle page produit des demandes était
 * d'ouvrir la base — ce qui, en pratique, ne se fait pas. Le mail d'équipe est
 * le seul document lu à chaque lead : c'est là que l'information doit être,
 * sinon elle n'existe pas.
 *
 * Ce module ne rend PAS de HTML et ne connaît pas le gabarit du mail : il
 * produit des couples libellé / valeur, que la route insère dans son propre
 * tableau avec son propre `escapeHtml`. Une seconde implémentation de
 * l'échappement finirait par diverger de la première, et c'est exactement le
 * genre de divergence qui ne se voit qu'une fois exploitée.
 */

export type InquiryProvenanceInput = {
  /** Chemin d'atterrissage figé à l'arrivée sur le site, sans query string. */
  landingPage: string | null;
  /** Hôte du référent externe. Vide pour une visite directe ou interne. */
  referrerHost: string | null;
  /** Paramètres de campagne retenus, sérialisés `clé=valeur&…`. */
  utm: string | null;
  /** Identifiant non énumérable de la ligne `project_brief`. */
  publicSlug: string;
};

export type InquiryEmailRow = { label: string; value: string };

/**
 * Formulation de l'absence. Elle est explicite ligne par ligne parce que les
 * trois colonnes ne sont pas vides pour les mêmes raisons : un référent absent
 * est une information (accès direct), une campagne absente aussi (trafic
 * naturel), alors qu'une page d'entrée absente n'est que le signe que la
 * capture n'a pas eu lieu. Écrire « — » partout aurait mis les trois cas sur
 * le même plan et fait passer une mesure défaillante pour du trafic direct.
 */
const NO_PROVENANCE =
  "non capturée (stockage de session refusé, ou envoi hors parcours)";
const NO_REFERRER = "aucun — accès direct, favori ou lien interne";
const NO_CAMPAIGN = "aucune — trafic non balisé";

function clean(value: string | null | undefined): string {
  return typeof value === "string" ? value.trim() : "";
}

/**
 * Lignes de provenance du mail d'équipe.
 *
 * `landing_page` vaut `location.pathname` figé au premier chargement : il est
 * toujours renseigné quand la capture a fonctionné. Son absence ne veut donc
 * pas dire « visite directe » mais « rien n'a été capturé » — et dans ce cas
 * les deux autres lignes ne prouvent rien non plus. On les remplace alors par
 * une ligne unique, pour ne pas laisser lire trois faits là où il n'y en a
 * aucun.
 *
 * La référence du brief, elle, est toujours présente : c'est la clé qui relie
 * le mail à la ligne en base (`project_brief.public_slug`) et aux requêtes de
 * `docs/requetes-tableau-de-bord.md`.
 */
export function inquiryProvenanceRows(
  input: InquiryProvenanceInput,
): InquiryEmailRow[] {
  const landingPage = clean(input.landingPage);
  const referrerHost = clean(input.referrerHost);
  const utm = clean(input.utm);

  const rows: InquiryEmailRow[] = landingPage
    ? [
        { label: "Page d'entrée", value: landingPage },
        { label: "Référent", value: referrerHost || NO_REFERRER },
        { label: "Campagne", value: utm || NO_CAMPAIGN },
      ]
    : [{ label: "Provenance", value: NO_PROVENANCE }];

  rows.push({ label: "Référence brief", value: clean(input.publicSlug) || "—" });
  return rows;
}

/**
 * Rendu texte aligné sur la mise en forme du reste du mail (`Libellé : valeur`,
 * libellés alignés entre eux). Le padding se calcule sur les lignes réellement
 * produites : la variante « provenance non capturée » n'a pas les mêmes
 * libellés que la variante complète, et un padding figé aurait décalé l'une
 * ou l'autre.
 */
export function inquiryRowsToTextLines(rows: InquiryEmailRow[]): string[] {
  const width = rows.reduce((max, row) => Math.max(max, row.label.length), 0);
  return rows.map((row) => `${row.label.padEnd(width)} : ${row.value}`);
}
