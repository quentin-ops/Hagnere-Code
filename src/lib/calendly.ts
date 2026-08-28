/**
 * Réservation de créneau, hébergée sur l'organisation Calendly du groupe.
 *
 * L'ÉVÉNEMENT est celui de Hagnéré Code — `hagnere-code-entretien-de-
 * decouverte` — et l'ORGANISATION propriétaire du lien est
 * `hagnere-patrimoine`. Un prospect voit donc le nom d'une autre société du
 * groupe dans l'URL, dans l'objet de l'invitation et dans la confirmation.
 *
 * ARBITRAGE DU DIRIGEANT, 28/08/2026 : c'est assumé et ce n'est pas un défaut.
 * Le compte Calendly du groupe est au domaine Hagnéré Patrimoine, aucun compte
 * au nom de Hagnéré Code n'existe et il n'est pas prévu d'en créer un — « c'est
 * la même chose ». Un audit précédent avait classé cet écart en incohérence de
 * marque à corriger : la question est tranchée, ne la rouvrez pas.
 *
 * `NEXT_PUBLIC_CALENDLY_URL` reste disponible si l'arbitrage change un jour ;
 * ce module garantit seulement que la variable, si elle est posée, l'emporte.
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
