/**
 * Libellés des deux portes de conversion du site, source unique.
 *
 * L'audit du tunnel (08/2026) a relevé deux libellés concurrents pour une même
 * destination, `/demarrer-un-projet` : la barre de navigation — rendue sur les
 * 60+ pages du site — disait « Démarrer un projet », le reste du site « Décrire
 * mon projet ». Un décompte a tranché : 30 occurrences pour « Décrire mon
 * projet » contre 14 pour « Démarrer un projet », dont la majorité ne sont pas
 * des boutons mais les métadonnées de la page de destination (titre, JSON-LD,
 * `llms.txt`) — qui décrivent la PAGE et non l'ACTION, et n'ont donc pas à
 * changer. C'est donc « Décrire mon projet » qui est retenu.
 *
 * L'enjeu n'est pas cosmétique : le visiteur qui a vu « Décrire mon projet » en
 * bas d'un guide ne reconnaît pas « Démarrer un projet » dans l'en-tête comme
 * la même porte, et la mesure de conversion agrège deux libellés sous un seul
 * événement sans pouvoir les distinguer.
 *
 * Tant que chaque bouton recopiait sa chaîne, l'écart était invisible. Toute
 * nouvelle porte primaire ou secondaire doit passer par ces constantes.
 *
 * Modèle : `first-call.ts` (interlocuteur du premier rendez-vous) et
 * `discovery-offer.ts` (formulations de l'offre de cadrage).
 */

/** Action primaire : décrire son projet dans le tunnel de qualification. */
export const PRIMARY_ACTION_LABEL = "Décrire mon projet";

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
 * Variante courte de l'action secondaire, pour la pastille de navigation, où
 * le libellé complet ferait déborder la ligne unique de l'en-tête compact.
 */
export const SECONDARY_ACTION_LABEL_SHORT = "Rendez-vous";
