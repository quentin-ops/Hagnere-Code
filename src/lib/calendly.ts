/**
 * Repli de réservation, hébergé sur l'organisation Calendly du groupe.
 *
 * L'ÉVÉNEMENT est bien celui de Hagnéré Code — `hagnere-code-entretien-de-
 * decouverte` — mais l'ORGANISATION propriétaire du lien est
 * `hagnere-patrimoine`. Un prospect arrivé par une annonce Hagnéré Code voit
 * donc le nom d'une autre société du groupe dans l'URL, dans l'objet de
 * l'invitation et dans la confirmation Calendly. Avant l'ouverture des
 * campagnes, poser `NEXT_PUBLIC_CALENDLY_URL` sur un compte au nom de Hagnéré
 * Code : c'est un changement de configuration, pas de code, et aucune URL de
 * remplacement n'est écrite ici tant que le compte n'existe pas.
 *
 * La création du compte et le choix du slug relèvent du dirigeant ; ce module
 * garantit seulement que la variable, si elle est posée, l'emporte.
 */
export const DEFAULT_CALENDLY_URL =
  "https://calendly.com/hagnere-patrimoine/hagnere-code-entretien-de-decouverte";

/**
 * Limite la configuration au domaine déjà autorisé par la CSP. Une valeur
 * absente ou invalide retombe sur le créneau public par défaut.
 */
export function resolveCalendlyUrl(value?: string): string {
  const candidate = value?.trim();
  if (!candidate) return DEFAULT_CALENDLY_URL;

  try {
    const url = new URL(candidate);
    const host = url.hostname.toLowerCase();
    if (
      url.protocol !== "https:" ||
      (host !== "calendly.com" && !host.endsWith(".calendly.com"))
    ) {
      return DEFAULT_CALENDLY_URL;
    }
    url.hash = "";
    return url.toString().replace(/\/$/, "");
  } catch {
    return DEFAULT_CALENDLY_URL;
  }
}

export const CALENDLY_URL = resolveCalendlyUrl(
  process.env.NEXT_PUBLIC_CALENDLY_URL,
);
