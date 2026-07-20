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
