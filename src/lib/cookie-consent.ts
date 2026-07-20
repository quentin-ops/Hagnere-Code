export const COOKIE_CONSENT_STORAGE_KEY = "hc_consent_v1";
export const COOKIE_CONSENT_EXPIRY_DAYS = 183;

export type CookieConsent = {
  necessary: true;
  analytics: boolean;
  ts: number;
};

export function isCookieBannerEnabled(): boolean {
  return (
    process.env.NEXT_PUBLIC_COOKIE_BANNER === "1" ||
    process.env.NEXT_PUBLIC_COOKIE_BANNER === "true"
  );
}

export function readCookieConsent(now = Date.now()): CookieConsent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage?.getItem(COOKIE_CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<CookieConsent>;
    const ageMs = now - (parsed.ts || 0);
    if (
      parsed.necessary !== true ||
      typeof parsed.analytics !== "boolean" ||
      ageMs < 0 ||
      ageMs > COOKIE_CONSENT_EXPIRY_DAYS * 86_400_000
    ) {
      return null;
    }
    return parsed as CookieConsent;
  } catch {
    return null;
  }
}

export function writeCookieConsent(
  consent: Omit<CookieConsent, "ts">,
): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage?.setItem(
      COOKIE_CONSENT_STORAGE_KEY,
      JSON.stringify({ ...consent, ts: Date.now() }),
    );
  } catch {
    /* Le stockage peut être désactivé par le navigateur. */
  }
}

/**
 * Sans bannière, la mesure reste désactivée. Lorsqu'elle est activée, aucun
 * événement ne part avant un choix analytics positif et non expiré.
 */
export function isAnalyticsAllowed(): boolean {
  if (!isCookieBannerEnabled()) return false;
  return readCookieConsent()?.analytics === true;
}
