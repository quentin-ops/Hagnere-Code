export const COOKIE_CONSENT_STORAGE_KEY = "hc_consent_v1";
/**
 * Émis sur `window` chaque fois que le visiteur enregistre un choix. Permet aux
 * intégrations de mesure (Consent Mode Google) de réagir sans sondage.
 */
export const COOKIE_CONSENT_EVENT = "hc:consent-change";
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

/**
 * Vrai pendant la diffusion d'un retrait de consentement. `isAnalyticsAllowed`
 * rappelle `clearStoredCookieConsent`, et les écouteurs rappellent
 * `isAnalyticsAllowed` : sans ce verrou, la paire boucle indéfiniment.
 */
let notifyingConsentChange = false;

export function clearStoredCookieConsent(): void {
  if (typeof window === "undefined") return;

  let hadStoredChoice = false;
  try {
    hadStoredChoice =
      window.localStorage?.getItem(COOKIE_CONSENT_STORAGE_KEY) != null;
  } catch {
    /* Le stockage peut être désactivé par le navigateur. */
  }
  try {
    window.localStorage?.removeItem(COOKIE_CONSENT_STORAGE_KEY);
  } catch {
    /* Idem : l'absence de purge ne doit jamais faire échouer l'appelant. */
  }

  // Le retrait doit être diffusé comme l'enregistrement : c'est ici que le
  // consentement est effacé quand il a expiré, qu'il est corrompu ou que la
  // bannière est désactivée. Sans cet événement, GoogleMeasurement gardait
  // `consented = true` et gtag.js restait injecté et actif jusqu'au
  // rechargement de la page.
  if (!hadStoredChoice || notifyingConsentChange) return;
  notifyingConsentChange = true;
  try {
    window.dispatchEvent(
      new CustomEvent<CookieConsent | null>(COOKIE_CONSENT_EVENT, {
        detail: null,
      }),
    );
  } catch {
    /* Sans diffusion, la mesure se resynchronise au prochain chargement. */
  } finally {
    notifyingConsentChange = false;
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
    window.dispatchEvent(
      new CustomEvent<CookieConsent>(COOKIE_CONSENT_EVENT, {
        detail: storedConsent,
      }),
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
