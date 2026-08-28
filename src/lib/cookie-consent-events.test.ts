import { afterEach, describe, expect, it, vi } from "vitest";

import {
  COOKIE_CONSENT_EVENT,
  COOKIE_CONSENT_STORAGE_KEY,
  clearStoredCookieConsent,
  isAnalyticsAllowed,
  readCookieConsent,
} from "./cookie-consent";

/**
 * Diffusion du RETRAIT de consentement.
 *
 * `writeCookieConsent` émettait déjà `COOKIE_CONSENT_EVENT`, mais pas
 * `clearStoredCookieConsent` — or c'est elle qui efface le choix quand il a
 * expiré, qu'il est corrompu ou que la bannière est désactivée. Les
 * intégrations abonnées (GoogleMeasurement) gardaient donc `consented = true`
 * et laissaient gtag.js chargé et actif jusqu'au rechargement de la page.
 */

type Listener = (event: Event) => void;

function stubWindow(initial: string | null) {
  const store = new Map<string, string>();
  if (initial !== null) store.set(COOKIE_CONSENT_STORAGE_KEY, initial);
  const listeners: Listener[] = [];
  const received: (unknown | null)[] = [];

  vi.stubGlobal("window", {
    localStorage: {
      getItem: (key: string) => store.get(key) ?? null,
      setItem: (key: string, value: string) => store.set(key, value),
      removeItem: (key: string) => {
        store.delete(key);
      },
    },
    dispatchEvent: (event: Event) => {
      received.push((event as CustomEvent).detail ?? null);
      for (const listener of [...listeners]) listener(event);
      return true;
    },
    addEventListener: (name: string, listener: Listener) => {
      if (name === COOKIE_CONSENT_EVENT) listeners.push(listener);
    },
  });

  return { store, listeners, received };
}

const validConsent = (ageMs = 0) =>
  JSON.stringify({
    version: 2,
    necessary: true,
    analytics: true,
    categories: { necessary: true, analytics: true },
    ts: Date.now() - ageMs,
  });

afterEach(() => {
  vi.unstubAllGlobals();
  vi.unstubAllEnvs();
});

describe("clearStoredCookieConsent", () => {
  it("prévient les abonnés qu'il n'y a plus de consentement", () => {
    const { store, received } = stubWindow(validConsent());

    clearStoredCookieConsent();

    expect(store.has(COOKIE_CONSENT_STORAGE_KEY)).toBe(false);
    // Un détail nul : l'abonné rappelle `isAnalyticsAllowed()` de toute façon.
    expect(received).toEqual([null]);
  });

  it("reste silencieux quand il n'y avait rien à effacer", () => {
    const { received } = stubWindow(null);

    clearStoredCookieConsent();

    expect(received).toEqual([]);
  });

  it("diffuse le retrait quand un choix expiré est purgé à la lecture", () => {
    vi.stubEnv("NEXT_PUBLIC_COOKIE_BANNER", "1");
    const { received } = stubWindow(validConsent(200 * 86_400_000));

    expect(readCookieConsent()).toBeNull();
    expect(received).toEqual([null]);
  });

  it("ne boucle pas quand un abonné rappelle isAnalyticsAllowed", () => {
    // Chemin le plus exposé : bannière désactivée. `isAnalyticsAllowed` purge
    // à chaque appel, et l'abonné la rappelle à chaque événement.
    vi.stubEnv("NEXT_PUBLIC_COOKIE_BANNER", "0");
    const { listeners, received } = stubWindow(validConsent());
    let seen = 0;
    listeners.push(() => {
      seen += 1;
      isAnalyticsAllowed();
    });

    expect(isAnalyticsAllowed()).toBe(false);

    expect(seen).toBe(1);
    expect(received).toEqual([null]);
  });
});
