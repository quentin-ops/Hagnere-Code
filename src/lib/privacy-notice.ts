/**
 * Version de la notice vie privée, source unique.
 *
 * Chaque demande enregistrée est horodatée avec la version de la politique que
 * la personne a effectivement pu lire, et cette version est reprise dans les
 * e-mails de confirmation. L'audit de 2026-08 avait relevé que la route API
 * épinglait encore `2026-07-20` alors que la page publiée avait changé : les
 * leads portaient une version qui ne correspondait plus au texte affiché.
 *
 * Règle : à chaque modification de fond de /legal/confidentialite, mettre à
 * jour cette constante ET ajouter l'entrée correspondante dans l'historique
 * public des versions de la page. Le test associé vérifie que la page publiée
 * et cette constante ne peuvent pas diverger.
 */
export const PRIVACY_NOTICE_VERSION = "2026-08-27";
