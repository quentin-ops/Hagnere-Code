/**
 * Formulation canonique de l'interlocuteur du premier rendez-vous.
 *
 * L'audit d'août 2026 a relevé six façons différentes de nommer cette personne
 * sur des pages qu'un prospect enchaîne en trois clics (« quelqu'un qui code »,
 * « un développeur senior », « un expert », « le fondateur », « un associé »,
 * « l'équipe »). « Associé » était en outre inexact : la société est une SASU
 * avec un président fondateur, sans associé.
 *
 * On retient une formulation unique, exacte et vérifiable : l'équipe compte
 * sept personnes, toutes techniques, sans commercial. On ne promet donc pas
 * une personne nommée (on ne sait pas qui prendra l'appel), mais un profil.
 *
 * Toute nouvelle occurrence sur la page d'accueil doit passer par ces
 * constantes — l'invariant est verrouillé par first-call.test.ts.
 */

/** Forme longue, utilisée dans une phrase (« vous parlez à … »). */
export const FIRST_CALL_CONTACT = "un développeur senior de l'équipe";

/** Forme courte, utilisée dans une liste ou une puce. */
export const FIRST_CALL_CONTACT_SHORT = "un développeur senior";

/** Libellé de bouton menant au cadrage. */
export const FIRST_CALL_CTA = "Parler à un développeur";

/** Mention compacte sous un CTA ou dans un pied de bloc. */
export const FIRST_CALL_META = "30 min avec un développeur senior";
