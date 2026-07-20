export const COOKIE_CONSENT_STORAGE_KEY = "hc_consent_v1";
export const COOKIE_CONSENT_EXPIRY_DAYS = 183;
export const COOKIE_CONSENT_VERSION = 2 as const;

export type CookieConsent = {
  version: typeof COOKIE_CONSENT_VERSION;
  necessary: true;
  analytics: boolean;
  categories: {
    necessary: true;
    analytics: boolean;
  };
  ts: number;
};

export function clearStoredCookieConsent(): void {
  try {
    window.localStorage?.removeItem(COOKIE_CONSENT_STORAGE_KEY);
  } catch {
    /* Le stockage peut être désactivé par le navigateur. */
  }
}

export function isCookieBannerEnabled(): boolean {
  return (
    process.env.NEXT_PUBLIC_COOKIE_BANNER === "1" ||
    process.env.NEXT_PUBLIC_COOKIE_BANNER === "true"
  );
}

export function readCookieConsent(now?: number): CookieConsent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage?.getItem(COOKIE_CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<CookieConsent>;
    const ageMs = (now ?? Date.now()) - (parsed.ts || 0);
    if (
      parsed.version !== COOKIE_CONSENT_VERSION ||
      parsed.necessary !== true ||
      typeof parsed.analytics !== "boolean" ||
      parsed.categories?.necessary !== true ||
      parsed.categories?.analytics !== parsed.analytics ||
      ageMs < 0 ||
      ageMs > COOKIE_CONSENT_EXPIRY_DAYS * 86_400_000
    ) {
      clearStoredCookieConsent();
      return null;
    }
    return parsed as CookieConsent;
  } catch {
    clearStoredCookieConsent();
    return null;
  }
}

export function writeCookieConsent(
  consent: Pick<CookieConsent, "necessary" | "analytics">,
): void {
  if (typeof window === "undefined") return;
  try {
    const storedConsent: CookieConsent = {
      version: COOKIE_CONSENT_VERSION,
      necessary: true,
      analytics: consent.analytics,
      categories: {
        necessary: true,
        analytics: consent.analytics,
      },
      ts: Date.now(),
    };
    window.localStorage?.setItem(
      COOKIE_CONSENT_STORAGE_KEY,
      JSON.stringify(storedConsent),
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
  if (!isCookieBannerEnabled()) {
    clearStoredCookieConsent();
    return false;
  }
  return readCookieConsent()?.analytics === true;
}
