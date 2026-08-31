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
 *
 * ⚠️ Ces variables sont lues AU BUILD, pas à l'exécution : Next remplace
 * `process.env.NEXT_PUBLIC_…` par sa valeur littérale dans le bundle client
 * seulement si elle est définie au moment où le bundle est construit. Les poser
 * sur l'hébergeur après un déploiement ne change rien tant qu'on n'a pas
 * redéployé. Le symptôme est silencieux et se lit dans le chunk servi : une
 * variable inlinée apparaît en clair (`"G-…"`), une variable absente au build
 * reste sous la forme `t.default.env.NEXT_PUBLIC_… ?? ""` et vaut donc `""`
 * dans le navigateur. C'est l'état relevé en production en août 2026 : GA4
 * inliné, les deux variables Google Ads non — `leadConversionTarget()` renvoyait
 * `null` et AUCUNE conversion ne pouvait remonter à Google Ads.
 *
 * ⚠️ Les deux variables Ads vont par paire. Avec l'identifiant seul,
 * `isGoogleMeasurementConfigured()` est vrai : gtag.js est chargé, la CSP
 * s'ouvre sur les domaines Google et les cookies Ads sont déposés — mais
 * `leadConversionTarget()` reste `null`, donc pas une seule conversion n'est
 * envoyée. C'est le pire des deux états, et rien ne le signale : la moitié
 * manquante ne se voit qu'en comptant les conversions reçues côté Google.
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
