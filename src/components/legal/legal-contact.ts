/**
 * Coordonnées publiées par les pages légales.
 *
 * Les pages légales sont le NAP de référence : c'est l'adresse qui y figure
 * qu'un lecteur, un huissier ou un annuaire recopie. Elles ne doivent donc
 * jamais réécrire à la main ce que `@/lib/contact-details` publie déjà ;
 * ce module se contente de rendre l'adresse postale au format attendu par un
 * document juridique (une ligne, pays en toutes lettres), sans introduire de
 * seconde source de vérité.
 */

import { CONTACT_ADDRESS } from "@/lib/contact-details";

/** Nom du pays en toutes lettres, à partir du code ISO de la source unique. */
const COUNTRY_LABELS: Record<string, string> = { FR: "France" };

/** « 82 impasse de Bellevue, 73000 Bassens, France ». */
export const LEGAL_POSTAL_ADDRESS = `${CONTACT_ADDRESS.street}, ${CONTACT_ADDRESS.postalCode} ${CONTACT_ADDRESS.locality}, ${
  COUNTRY_LABELS[CONTACT_ADDRESS.country] ?? CONTACT_ADDRESS.country
}`;
