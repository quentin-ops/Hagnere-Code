/**
 * Configuration de la mesure Google (Ads + GA4).
 *
 * Le site n'a longtemps embarqué aucun tag : l'audit de 2026-08 a relevé qu'il
 * était impossible de savoir quel mot-clé produisait un contact, et que la CSP
 * aurait de toute façon bloqué un tag posé à la main.
 *
 * Le chargement est piloté par deux variables d'environnement. Tant qu'aucune
 * n'est définie, aucun script tiers n'est injecté et la CSP reste fermée
 * (cf. next.config.ts, qui lit les mêmes variables).
 *
 * - `NEXT_PUBLIC_GOOGLE_ADS_ID` : identifiant de conversion Google Ads (`AW-…`).
 * - `NEXT_PUBLIC_GA4_ID`        : identifiant de flux GA4 (`G-…`).
 * - `NEXT_PUBLIC_GOOGLE_ADS_LEAD_LABEL` : libellé de la conversion « lead »
 *   (la partie après la barre dans `AW-XXXX/YYYY`), utilisé à la confirmation.
 */

export const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ?? "";
export const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID ?? "";
export const GOOGLE_ADS_LEAD_LABEL =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_LEAD_LABEL ?? "";

const ADS_ID_PATTERN = /^AW-[A-Za-z0-9]+$/;
const GA4_ID_PATTERN = /^G-[A-Za-z0-9]+$/;

export function isValidAdsId(value: string): boolean {
  return ADS_ID_PATTERN.test(value);
}

export function isValidGa4Id(value: string): boolean {
  return GA4_ID_PATTERN.test(value);
}

/** Identifiants réellement exploitables, dans l'ordre de configuration gtag. */
export function measurementIds(
  adsId: string = GOOGLE_ADS_ID,
  ga4Id: string = GA4_ID,
): string[] {
  const ids: string[] = [];
  if (isValidGa4Id(ga4Id)) ids.push(ga4Id);
  if (isValidAdsId(adsId)) ids.push(adsId);
  return ids;
}

/** Vrai dès qu'un identifiant valide est configuré. */
export function isGoogleMeasurementConfigured(
  adsId: string = GOOGLE_ADS_ID,
  ga4Id: string = GA4_ID,
): boolean {
  return measurementIds(adsId, ga4Id).length > 0;
}

/**
 * Cible de conversion « lead » au format attendu par `gtag('event','conversion')`.
 * Renvoie null si l'identifiant ou le libellé manque : on n'envoie alors rien.
 */
export function leadConversionTarget(
  adsId: string = GOOGLE_ADS_ID,
  label: string = GOOGLE_ADS_LEAD_LABEL,
): string | null {
  if (!isValidAdsId(adsId) || !label.trim()) return null;
  return `${adsId}/${label.trim()}`;
}
