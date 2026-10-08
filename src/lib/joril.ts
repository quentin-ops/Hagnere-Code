/**
 * Joril et l'offre « assistants IA », telles que hagnere-code.ai les présente.
 *
 * Source unique : la bande de /services, celle de /realisations, la carte de
 * l'accueil, l'entrée du méga-menu et la tuile du pied de page lisent tous ce
 * fichier. Une phrase recopiée à cinq endroits finit par diverger ; or ces
 * phrases engagent (voir « Règle d'or » dans CLAUDE.md).
 *
 * Ce que le site peut écrire, et seulement cela (ordre du dirigeant du
 * 08/10/2026, vérifié sur https://joril.ai et dans le dépôt joril-ai-site) :
 *
 *   - Joril est l'assistant IA intégré à LMNP.AI, logiciel édité par
 *     Comptabilité AI, société du groupe Hagnéré (SIREN 978548899) ;
 *   - la nouvelle version de LMNP.AI, avec Joril, est en alpha ;
 *   - le premier déploiement de Joril dans LMNP.AI est annoncé à partir du
 *     25 octobre 2026 (décision du dirigeant, 08/10/2026) ;
 *   - joril.ai présente l'offre de Comptabilité AI : des assistants IA sur
 *     mesure pour les logiciels, back-offices et espaces clients des
 *     entreprises, réalisés et déployés par Hagnéré Code.
 *
 * Ce que le site n'écrit PAS : aucun client, aucun chiffre, aucun résultat,
 * aucun témoignage, aucun prix, aucune mention « en production » pour LMNP.AI
 * (la nouvelle version est en alpha), et jamais que Hagnéré Code aurait
 * construit Joril dans LMNP.AI : la page ne le prouve pas (CLAUDE.md, règle
 * d'or — LMNP.AI est un produit du groupe, pas un client indépendant).
 *
 * Quand le premier déploiement a eu lieu, ou si le calendrier bouge, c'est ici
 * et nulle part ailleurs qu'il faut corriger.
 */

export const JORIL_URL = "https://joril.ai";
export const JORIL_HOST = "joril.ai";

/** Libellé court : menu, pied de page, accueil. */
export const JORIL_LABEL = "Assistants IA (Joril)";

/** Phrase unique sur ce qu'est Joril et qui édite le logiciel qui l'accueille. */
export const JORIL_DEFINITION =
  "Joril est l'assistant IA intégré à LMNP.AI, logiciel édité par Comptabilité AI, société du groupe Hagnéré.";

/** Statut de la nouvelle version de LMNP.AI : alpha, jamais « en production ». */
export const JORIL_STATUT =
  "La nouvelle version de LMNP.AI, avec Joril, est en alpha.";

/** Calendrier annoncé (décision du dirigeant, 08/10/2026). */
export const JORIL_CALENDRIER =
  "Le premier déploiement de Joril dans LMNP.AI est prévu à partir du 25 octobre 2026.";

/** L'offre aux entreprises, telle que joril.ai la présente. */
export const JORIL_OFFRE =
  "Sur joril.ai, Comptabilité AI propose des assistants IA sur mesure pour les logiciels, back-offices et espaces clients des entreprises. Hagnéré Code les réalise et les déploie.";

/** Réserve : l'offre est présentée, elle n'est pas prouvée par un client. */
export const JORIL_RESERVE =
  "Cette page présente une offre : elle ne cite aucun client et n'annonce aucun résultat.";

/** Entrée du méga-menu : titre et sous-titre. */
export const JORIL_MENU = {
  title: JORIL_LABEL,
  sub: "Un assistant IA dans votre logiciel. Offre présentée sur joril.ai.",
} as const;
