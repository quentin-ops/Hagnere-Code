export const COOKIE_CONSENT_STORAGE_KEY = "hc_consent_v1";
/**
 * Émis sur `window` chaque fois que le visiteur enregistre un choix. Permet aux
 * intégrations de mesure (Consent Mode Google) de réagir sans sondage.
 */
export const COOKIE_CONSENT_EVENT = "hc:consent-change";
export const COOKIE_CONSENT_EXPIRY_DAYS = 183;
export const COOKIE_CONSENT_VERSION = 3 as const;

/**
 * Formats antérieurs encore lisibles, migrés à la lecture (cf.
 * `upgradeStoredConsent`). Sans cette liste, relever
 * `COOKIE_CONSENT_VERSION` ferait redemander son choix à TOUS les visiteurs
 * existants : la validation ci-dessous purge tout enregistrement dont la
 * version ne correspond pas exactement.
 *
 * Version 2 → 3 : ajout de la catégorie `calendly`. Le choix analytics déjà
 * donné est conservé tel quel, avec son horodatage d'origine — une migration
 * ne doit ni réinterpréter un consentement ni en rallonger la durée.
 */
const MIGRATABLE_CONSENT_VERSIONS: ReadonlySet<number> = new Set([2]);

export type CookieConsentCategories = {
  necessary: true;
  analytics: boolean;
  /**
   * Affichage du widget de réservation tiers (Calendly). Distincte de
   * `analytics` : refuser la mesure d'audience n'a jamais empêché de prendre
   * rendez-vous, et l'accepter ne vaut pas accord pour charger un tiers.
   */
  calendly: boolean;
};

export type CookieConsent = {
  version: typeof COOKIE_CONSENT_VERSION;
  necessary: true;
  analytics: boolean;
  calendly: boolean;
  categories: CookieConsentCategories;
  ts: number;
};

/** Ce qu'on trouve réellement dans `localStorage` : n'importe quoi, ou presque. */
type StoredConsentShape = {
  version?: unknown;
  necessary?: unknown;
  analytics?: unknown;
  calendly?: unknown;
  categories?: {
    necessary?: unknown;
    analytics?: unknown;
    calendly?: unknown;
  };
  ts?: unknown;
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

/**
 * Bannière active par défaut, désactivable explicitement par `…=0`.
 *
 * L'inversion ne change rien à la production, où le drapeau est déjà posé.
 * Elle supprime un mode de panne silencieux ailleurs : tant que la bannière
 * n'existait qu'avec un drapeau POSÉ, tout environnement qui l'oubliait —
 * une preview, un poste de développement, un futur environnement — voyait
 * `isAnalyticsAllowed()` renvoyer `false` en permanence, donc aucun événement
 * écrit, sans le moindre signal. Un tunnel qui ne mesure rien a exactement
 * l'apparence d'un tunnel qui mesure.
 *
 * Le sens du défaut est le sujet : oublier d'activer coûte toute la mesure et
 * ne se voit pas ; oublier de désactiver coûte une bannière affichée et saute
 * aux yeux. On met donc le risque du côté visible.
 *
 * Ce défaut n'autorise rien par lui-même : la bannière propose un choix, elle
 * ne le présume pas. Sans choix positif et non expiré, `isAnalyticsAllowed()`
 * reste faux et le Consent Mode reste en `denied`.
 */
export function isCookieBannerEnabled(): boolean {
  const flag = process.env.NEXT_PUBLIC_COOKIE_BANNER?.trim().toLowerCase();
  return flag !== "0" && flag !== "false";
}

/**
 * Valide un enregistrement brut et le ramène au format courant.
 *
 * Renvoie `null` dès qu'une incohérence rend le choix ininterprétable : mieux
 * vaut redemander que déduire. La catégorie `calendly` absente d'un format
 * antérieur vaut REFUS — un consentement jamais présenté ne se présume pas.
 */
function upgradeStoredConsent(
  parsed: StoredConsentShape,
): CookieConsent | null {
  const version = parsed.version;
  const isCurrent = version === COOKIE_CONSENT_VERSION;
  if (
    typeof version !== "number" ||
    (!isCurrent && !MIGRATABLE_CONSENT_VERSIONS.has(version))
  ) {
    return null;
  }

  const analytics = parsed.analytics;
  if (
    parsed.necessary !== true ||
    typeof analytics !== "boolean" ||
    typeof parsed.ts !== "number" ||
    parsed.categories?.necessary !== true ||
    parsed.categories?.analytics !== analytics
  ) {
    return null;
  }

  const calendly = isCurrent ? parsed.calendly : false;
  if (typeof calendly !== "boolean") return null;
  // Le duplicata `categories` n'existe que pour la lisibilité de
  // l'enregistrement : s'il diverge du champ de tête, l'enregistrement a été
  // bricolé et n'est plus une preuve de choix.
  if (isCurrent && parsed.categories?.calendly !== calendly) return null;

  return {
    version: COOKIE_CONSENT_VERSION,
    necessary: true,
    analytics,
    calendly,
    categories: { necessary: true, analytics, calendly },
    ts: parsed.ts,
  };
}

/**
 * Écrit l'enregistrement sans rien diffuser. Utilisé par la migration : le
 * choix du visiteur n'a pas changé, seul son format évolue — réveiller les
 * abonnés depuis une simple LECTURE ferait entrer `readCookieConsent` dans les
 * écouteurs qui la rappellent.
 *
 * L'échec d'écriture est ignoré volontairement : un navigateur qui refuse le
 * stockage ne doit pas transformer une lecture valide en « pas de choix ».
 */
function persistConsent(consent: CookieConsent): void {
  try {
    window.localStorage?.setItem(
      COOKIE_CONSENT_STORAGE_KEY,
      JSON.stringify(consent),
    );
  } catch {
    /* Le stockage peut être désactivé par le navigateur. */
  }
}

export function readCookieConsent(now?: number): CookieConsent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage?.getItem(COOKIE_CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as StoredConsentShape;
    const ageMs =
      (now ?? Date.now()) - (typeof parsed.ts === "number" ? parsed.ts : 0);
    const consent = upgradeStoredConsent(parsed);
    if (
      !consent ||
      ageMs < 0 ||
      ageMs > COOKIE_CONSENT_EXPIRY_DAYS * 86_400_000
    ) {
      clearStoredCookieConsent();
      return null;
    }
    // Migration paresseuse : le prochain démarrage relit directement le format
    // courant, sans repasser par cette conversion.
    if (parsed.version !== COOKIE_CONSENT_VERSION) persistConsent(consent);
    return consent;
  } catch {
    clearStoredCookieConsent();
    return null;
  }
}

/**
 * Enregistre un choix COMPLET : toute catégorie omise par l'appelant est
 * écrite comme refusée.
 *
 * La bannière ne présente pas la catégorie `calendly` et appelle donc cette
 * fonction sans elle. Le défaut de refus est délibéré : « Refuser tout » doit
 * refuser tout, y compris un widget tiers autorisé plus tôt. Le coût est
 * visible et se rattrape d'un clic (le mur d'autorisation réapparaît devant le
 * calendrier) ; l'inverse — garder un tiers autorisé après un refus — serait
 * invisible et faux.
 */
export function writeCookieConsent(
  consent: Pick<CookieConsent, "necessary" | "analytics"> &
    Partial<Pick<CookieConsent, "calendly">>,
): void {
  if (typeof window === "undefined") return;
  try {
    const storedConsent: CookieConsent = {
      version: COOKIE_CONSENT_VERSION,
      necessary: true,
      analytics: consent.analytics,
      calendly: consent.calendly === true,
      categories: {
        necessary: true,
        analytics: consent.analytics,
        calendly: consent.calendly === true,
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

/**
 * Même règle que `isAnalyticsAllowed`, appliquée au widget tiers : sans
 * bannière il n'existe aucun stockage de consentement, donc rien à mémoriser —
 * le mur d'autorisation redemande alors l'accord à chaque chargement, ce qui
 * reste le comportement sûr.
 */
export function isCalendlyEmbedAllowed(): boolean {
  if (!isCookieBannerEnabled()) {
    clearStoredCookieConsent();
    return false;
  }
  return readCookieConsent()?.calendly === true;
}

/**
 * Mémorise l'accord donné devant le widget lui-même, SANS toucher au choix
 * analytics déjà exprimé dans la bannière : les deux catégories vivent dans le
 * même enregistrement, et une réécriture naïve aurait effacé l'une en
 * enregistrant l'autre.
 *
 * Effet de bord assumé : autoriser le widget avant d'avoir répondu à la
 * bannière crée l'enregistrement, donc fixe la mesure d'audience sur son défaut
 * — refusée. C'est le seul défaut acceptable (rien n'est présumé en faveur de
 * la mesure), et il reste modifiable par « Gérer mes cookies » en pied de page.
 */
export function rememberCalendlyEmbedConsent(allowed: boolean): void {
  if (typeof window === "undefined" || !isCookieBannerEnabled()) return;
  const existing = readCookieConsent();
  writeCookieConsent({
    necessary: true,
    analytics: existing?.analytics === true,
    calendly: allowed,
  });
}
