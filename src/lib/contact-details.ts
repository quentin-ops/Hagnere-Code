/**
 * Coordonnées publiques de HAGNERE CODE, source unique.
 *
 * L'audit de 2026-08 a relevé que l'adresse de contact était répétée en dur
 * dans une soixantaine d'emplacements. Deux conséquences : une migration vers
 * une adresse au domaine de l'agence devenait un chantier à risque, et le NAP
 * (nom, adresse, téléphone) publié pouvait diverger d'une page à l'autre —
 * ce que le référencement local sanctionne.
 *
 * L'adresse par défaut est encore au domaine d'une autre société du groupe.
 * C'est un écart connu et assumé le temps que `contact@hagnere-code.ai` soit
 * ouvert en réception : le domaine sert déjà d'expéditeur des e-mails du site.
 * Poser `NEXT_PUBLIC_CONTACT_EMAIL` bascule alors tout le site en une variable,
 * sans toucher au code.
 */

const DEFAULT_CONTACT_EMAIL = "quentin@hagnere-patrimoine.fr";

/** Adresse affichée au public et utilisée dans les liens `mailto:`. */
export const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || DEFAULT_CONTACT_EMAIL;

/** Vrai tant que l'adresse publiée n'est pas au domaine de l'agence. */
export const CONTACT_EMAIL_IS_GROUP_DOMAIN =
  !CONTACT_EMAIL.endsWith("@hagnere-code.ai");

/**
 * Expéditeur par défaut des courriels transactionnels du site.
 *
 * Distinct de `CONTACT_EMAIL` : celui-ci est l'adresse AFFICHÉE, celui-là
 * l'adresse d'ENVOI, déjà au domaine de l'agence et déclarée comme telle dans
 * la politique de confidentialité. La variable serveur `CONTACT_FROM_EMAIL`
 * reste prioritaire, et est lue au moment de l'envoi et non à l'import.
 */
export const DEFAULT_CONTACT_SENDER_EMAIL = "contact@hagnere-code.ai";

/** Téléphone public, format E.164 pour les liens `tel:`. */
export const CONTACT_PHONE_E164 = "+33374472018";

/** Téléphone public, format lisible international. */
export const CONTACT_PHONE_DISPLAY = "+33 3 74 47 20 18";

/**
 * Même ligne, format national — celui qu'utilisent la pastille de navigation,
 * le tunnel et les CTA de guides, où le préfixe international allonge inutilement
 * un libellé déjà contraint. Deux écritures d'un seul et même numéro : les garder
 * dans le même module est ce qui empêche l'une de dériver de l'autre.
 */
export const CONTACT_PHONE_DISPLAY_NATIONAL = "03 74 47 20 18";

/** Siège social, aligné sur les mentions légales. */
export const CONTACT_ADDRESS = {
  street: "82 impasse de Bellevue",
  postalCode: "73000",
  locality: "Bassens",
  country: "FR",
} as const;

/** Adresse postale sur une ligne, pour les blocs de contact. */
export const CONTACT_ADDRESS_LINE = `${CONTACT_ADDRESS.street} · ${CONTACT_ADDRESS.postalCode} ${CONTACT_ADDRESS.locality}`;

/** URL wa.me correspondant à la ligne publiée. */
const DERIVED_WHATSAPP_URL = `https://wa.me/${CONTACT_PHONE_E164.replace(/\D/g, "")}`;

/**
 * Résout la tuile WhatsApp du pied de page.
 *
 * Le lien pointe par défaut sur la ligne publiée. Or `wa.me` ne « résout » que
 * si le numéro est effectivement enregistré sur WhatsApp : sur une ligne fixe,
 * cela suppose une inscription WhatsApp Business validée par appel vocal. Le
 * dépôt ne peut pas l'attester — seul un test depuis un téléphone le peut. Tant
 * que la vérification n'est pas faite, le comportement reste celui d'aujourd'hui,
 * et retirer un canal mort ne doit pas demander une modification de code :
 *
 * - variable absente → lien dérivé de `CONTACT_PHONE_E164` (comportement actuel) ;
 * - `off` → aucune tuile WhatsApp rendue ;
 * - numéro E.164 (`+33612345678` ou `33612345678`) → lien vers ce numéro, pour
 *   basculer sur un mobile réellement inscrit ;
 * - valeur invalide → repli sur le lien dérivé, comme pour `resolveCalendlyUrl`.
 */
export function resolveWhatsAppUrl(value?: string): string | null {
  const candidate = value?.trim();
  if (!candidate) return DERIVED_WHATSAPP_URL;
  if (candidate.toLowerCase() === "off") return null;

  const digits = candidate.replace(/^\+/, "");
  if (!/^[1-9]\d{7,14}$/.test(digits)) return DERIVED_WHATSAPP_URL;
  return `https://wa.me/${digits}`;
}

/** Lien WhatsApp publié, ou `null` quand le canal est désactivé. */
export const CONTACT_WHATSAPP_URL = resolveWhatsAppUrl(
  process.env.NEXT_PUBLIC_CONTACT_WHATSAPP,
);
