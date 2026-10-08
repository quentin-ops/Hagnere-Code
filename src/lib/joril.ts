/**
 * Joril et l'offre « assistants IA », telles que hagnere-code.ai les présente.
 *
 * Source unique : la bande de /services, celle de /realisations, la carte de
 * l'accueil, l'entrée du méga-menu et la tuile du pied de page lisent tous ce
 * fichier. Une phrase recopiée à cinq endroits finit par diverger ; or ces
 * phrases engagent (voir « Règle d'or » dans CLAUDE.md).
 *
 * Ce que le site peut écrire, et seulement cela (ordres du dirigeant du
 * 08/10/2026, vérifiés sur https://joril.ai et dans le dépôt joril-ai-site) :
 *
 *   - Joril est l'assistant IA intégré à LMNP.AI. Le site lmnp.ai est édité par
 *     LMNP AI, SAS du groupe Hagnéré (SIREN 109092247, créée le 24/08/2026,
 *     présidente Hagnéré Holding One ; mentions légales de lmnp.ai, version 4.0
 *     du 11/09/2026, et annuaire des entreprises, lus le 08/10/2026). Il n'est
 *     PAS édité par Comptabilité AI : cette erreur a figuré sur le site jusqu'au
 *     08/10/2026 au soir et ne doit pas revenir. Joril reste la propriété de
 *     Comptabilité AI (SIREN 978548899), qui le propose sous licence sur
 *     joril.ai ;
 *   - Joril a été conçu et développé par Hagnéré Code : fait déclaré par
 *     Quentin Hagnéré le 08/10/2026 (« Oui on peut l'écrire, c'est bien le
 *     cas »), consigné dans CLAUDE.md pour qu'un audit ne le retire pas. Il ne
 *     vaut que pour Joril : la page publique de LMNP.AI ne prouve toujours pas
 *     qui a conçu le logiciel lui-même, et /realisations n'en dit rien ;
 *   - la nouvelle version de LMNP.AI, avec Joril, est en alpha ;
 *   - le premier déploiement de Joril dans LMNP.AI est annoncé à partir du
 *     25 octobre 2026 (décision du dirigeant, 08/10/2026) ;
 *   - joril.ai présente l'offre de Comptabilité AI : des assistants IA sur
 *     mesure pour les logiciels, back-offices et espaces clients des
 *     entreprises, réalisés et déployés par Hagnéré Code ;
 *   - ces assistants sont fournis sous licence d'utilisation (le client n'est
 *     pas propriétaire du code), selon les conditions de joril.ai : décision du
 *     dirigeant, 08/10/2026 au soir. Ni frais ni formules recopiés ici.
 *
 * Ce que le site n'écrit PAS : aucun client, aucun chiffre, aucun résultat,
 * aucun témoignage, aucun prix, aucune mention « en production » pour LMNP.AI
 * (la nouvelle version est en alpha). LMNP.AI reste un produit du groupe, pas
 * un client indépendant (CLAUDE.md, règle d'or).
 *
 * Quand le premier déploiement a eu lieu, ou si le calendrier bouge, c'est ici
 * et nulle part ailleurs qu'il faut corriger.
 */

export const JORIL_URL = "https://joril.ai";
export const JORIL_HOST = "joril.ai";

/** Libellé court : menu, pied de page, accueil. */
export const JORIL_LABEL = "Assistants IA (Joril)";

/**
 * Ce qu'est Joril, qui l'a conçu et qui édite le logiciel qui l'accueille.
 * Formule sobre : la conception ne vaut que pour Joril, jamais pour LMNP.AI.
 * L'éditeur de LMNP.AI est LMNP AI (mentions légales de lmnp.ai, 11/09/2026),
 * pas Comptabilité AI, qui possède Joril et le propose sous licence.
 */
export const JORIL_DEFINITION =
  "Joril, l'assistant IA intégré à LMNP.AI, a été conçu et développé par Hagnéré Code. LMNP.AI est édité par LMNP AI, société du groupe Hagnéré.";

/**
 * Version courte pour l'accueil : deux phrases. Le détail (éditeur de LMNP.AI,
 * calendrier, conditions) reste sur /services et /realisations. L'alpha est
 * dite ici : nommer Joril dans LMNP.AI sans elle laisserait croire qu'il y
 * tourne déjà pour tous.
 */
export const JORIL_ACCUEIL =
  "Joril, l'assistant IA de LMNP.AI (nouvelle version en alpha), a été conçu et développé par Hagnéré Code. Comptabilité AI propose des assistants IA aux entreprises sous licence d'utilisation : conditions sur joril.ai.";

/** Statut de la nouvelle version de LMNP.AI : alpha, jamais « en production ». */
export const JORIL_STATUT =
  "La nouvelle version de LMNP.AI, avec Joril, est en alpha.";

/** Calendrier annoncé (décision du dirigeant, 08/10/2026). */
export const JORIL_CALENDRIER =
  "Le premier déploiement de Joril dans LMNP.AI est prévu à partir du 25 octobre 2026.";

/** L'offre aux entreprises, telle que joril.ai la présente. */
export const JORIL_OFFRE =
  "Sur joril.ai, Comptabilité AI, propriétaire de Joril, propose des assistants IA sur mesure pour les logiciels, back-offices et espaces clients des entreprises. Hagnéré Code les réalise et les déploie.";

/**
 * Régime de l'offre (décision du dirigeant, 08/10/2026 au soir) : les assistants
 * Joril sont fournis sous licence d'utilisation, le client n'est pas propriétaire
 * du code. hagnere-code.ai dit ailleurs, pour ses projets d'agence, que les
 * livrables spécifiques sont transférés après paiement complet : sans cette
 * phrase, un acheteur qui lit les deux sites y verrait une contradiction. Les
 * conditions de l'agence ne changent pas ; les conditions de la licence (frais,
 * formules) restent sur joril.ai et ne sont pas recopiées ici.
 */
export const JORIL_LICENCE =
  "Les assistants Joril sont proposés par Comptabilité AI sous licence d'utilisation, selon les conditions présentées sur joril.ai.";

/** Réserve : l'offre est présentée, elle n'est pas prouvée par un client. */
export const JORIL_RESERVE =
  "Cette page présente une offre : elle ne cite aucun client et n'annonce aucun résultat.";

/** Entrée du méga-menu : titre et sous-titre. */
export const JORIL_MENU = {
  title: JORIL_LABEL,
  sub: "Un assistant IA dans votre logiciel. Offre présentée sur joril.ai.",
} as const;
