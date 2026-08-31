/**
 * Libellés des portes de conversion du site, source unique.
 *
 * L'audit du tunnel (08/2026) a relevé deux libellés concurrents pour une même
 * destination, `/demarrer-un-projet` : la barre de navigation — rendue sur les
 * 54 pages du site — disait « Démarrer un projet », le reste du site « Décrire
 * mon projet ».
 *
 * L'arbitrage d'août 2026 avait retenu « Décrire mon projet » au décompte des
 * occurrences. La passe UX de ce jour le renverse sur un critère d'intention
 * et non de fréquence : « décrire » nomme l'effort demandé au visiteur, pas ce
 * qu'il obtient. Le libellé retenu est donc **« Démarrer mon projet »**, et les
 * 25 fichiers qui recopiaient la chaîne ont été alignés dans la même passe.
 *
 * L'enjeu n'est pas cosmétique : le visiteur qui a vu un libellé en bas d'un
 * guide ne reconnaît pas l'autre dans l'en-tête comme la même porte, et la
 * mesure de conversion agrège deux libellés sous un seul événement sans
 * pouvoir les distinguer.
 *
 * Les métadonnées de la page de destination (titre, JSON-LD, `llms.txt`)
 * décrivent la PAGE et non l'ACTION : elles n'ont pas à suivre ce libellé.
 *
 * Modèle : `first-call.ts` (interlocuteur du premier rendez-vous) et
 * `discovery-offer.ts` (formulations de l'offre de cadrage).
 */

/** Action primaire : démarrer son projet via le tunnel de qualification. */
export const PRIMARY_ACTION_LABEL = "Démarrer mon projet";

/**
 * Variante courte de l'action primaire, pour les emplacements contraints.
 *
 * Sous 720 px, l'en-tête n'a plus la largeur du libellé complet : le CTA y
 * était devenu un carré d'icône sans aucun mot, sur le seul bouton de
 * conversion encore visible à ce point de rupture. Un mot court vaut mieux
 * qu'une fusée seule, et il reste un préfixe du libellé complet — le nom
 * accessible ne change donc pas de sens d'un point de rupture à l'autre.
 */
export const PRIMARY_ACTION_LABEL_SHORT = "Mon projet";

/** Destination de l'action primaire, identique partout. */
export const PRIMARY_ACTION_HREF = "/demarrer-un-projet";

/**
 * Action secondaire : réserver le créneau de 30 minutes.
 *
 * Même dispersion relevée par l'audit — « Réserver un appel », « Réserver un
 * cadrage », « Réserver 30 min », « Rendez-vous ». On retient la formulation
 * déjà portée par la carte du formulaire partagé, donc vue sur chaque page.
 *
 * Ce module n'exporte volontairement PAS de destination pour cette action :
 * elle mène tantôt à la page /rendez-vous, tantôt directement à Calendly selon
 * ce que le libellé de l'emplacement promet. Exporter une URL unique laisserait
 * croire que l'arbitrage est tranché alors qu'il dépend du texte du bouton.
 */
export const SECONDARY_ACTION_LABEL = "Réserver un créneau";

/**
 * Variante courte de l'action secondaire.
 *
 * Elle servait au bouton « Rendez-vous » de l'en-tête, retiré le 28/08/2026 :
 * la barre offre désormais deux portes — « Contact » (formulaire court) et
 * « Démarrer mon projet » (tunnel) — et la prise de rendez-vous reste
 * atteignable par la carte du méga-menu, les liens rapides mobiles, le pied de
 * page et /rendez-vous.
 *
 * La constante est conservée parce que la prise de rendez-vous n'a pas
 * disparu du site : le prochain emplacement contraint qui en aura besoin doit
 * repartir d'ici plutôt que de recopier une chaîne.
 */
export const SECONDARY_ACTION_LABEL_SHORT = "Rendez-vous";

/**
 * Troisième porte : le formulaire de contact simple.
 *
 * Elle existait dans le site (page `/contact`, pied de page, lien texte de la
 * pastille) mais pas dans les ACTIONS de l'en-tête, où seules deux portes
 * étaient offertes : un tunnel de qualification en plusieurs étapes et une
 * prise de rendez-vous. Un visiteur qui veut simplement laisser un message
 * n'avait donc, en haut de page, que la porte la plus engageante.
 *
 * C'est un défaut de tunnel et non de contenu : on ne fait pas passer par un
 * cadrage en trois minutes quelqu'un qui voulait écrire deux lignes. Le
 * libellé reste le mot que le visiteur cherche des yeux — « Contact » — et non
 * une reformulation commerciale, précisément parce que c'est la porte de sortie
 * de ceux que le vocabulaire commercial fait fuir.
 */
export const CONTACT_ACTION_LABEL = "Contact";

/** Destination de la porte de contact, identique partout. */
export const CONTACT_ACTION_HREF = "/contact";
