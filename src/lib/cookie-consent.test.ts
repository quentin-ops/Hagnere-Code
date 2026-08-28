import { afterEach, describe, expect, it, vi } from "vitest";

import {
  COOKIE_CONSENT_STORAGE_KEY,
  isAnalyticsAllowed,
  isCalendlyEmbedAllowed,
  readCookieConsent,
  rememberCalendlyEmbedConsent,
  writeCookieConsent,
} from "./cookie-consent";

describe("cookie consent storage", () => {
  afterEach(() => {
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
    vi.unstubAllEnvs();
  });

  it("supprime un choix expiré ou provenant d'un ancien format", () => {
    const removeItem = vi.fn();
    vi.stubGlobal("window", {
      localStorage: {
        getItem: vi.fn(() =>
          JSON.stringify({ necessary: true, analytics: true, ts: Date.now() }),
        ),
        removeItem,
      },
    });

    expect(readCookieConsent()).toBeNull();
    expect(removeItem).toHaveBeenCalledWith(COOKIE_CONSENT_STORAGE_KEY);
  });

  it("enregistre la version et les catégories effectivement présentées", () => {
    const setItem = vi.fn();
    vi.stubGlobal("window", {
      localStorage: { setItem },
    });

    writeCookieConsent({ necessary: true, analytics: false });

    expect(setItem).toHaveBeenCalledOnce();
    const stored = JSON.parse(setItem.mock.calls[0][1] as string) as {
      version: number;
      analytics: boolean;
      calendly: boolean;
      categories: { necessary: boolean; analytics: boolean; calendly: boolean };
    };
    // La bannière ne présente pas le widget tiers : la catégorie omise par
    // l'appelant est enregistrée comme refusée, jamais présumée acquise.
    expect(stored).toMatchObject({
      version: 3,
      analytics: false,
      calendly: false,
      categories: { necessary: true, analytics: false, calendly: false },
    });
  });

  it("purge un ancien choix lorsque la bannière est désactivée", () => {
    const removeItem = vi.fn();
    vi.stubGlobal("window", {
      localStorage: { removeItem },
    });
    vi.stubEnv("NEXT_PUBLIC_COOKIE_BANNER", "0");

    expect(isAnalyticsAllowed()).toBe(false);
    expect(removeItem).toHaveBeenCalledWith(COOKIE_CONSENT_STORAGE_KEY);
  });

  it("évalue l’âge du choix après sa lecture", () => {
    const now = vi
      .spyOn(Date, "now")
      .mockReturnValueOnce(1_000)
      .mockReturnValueOnce(1_001);
    vi.stubGlobal("window", {
      localStorage: {
        getItem: vi.fn(() =>
          JSON.stringify({
            version: 2,
            necessary: true,
            analytics: true,
            categories: { necessary: true, analytics: true },
            ts: Date.now(),
          }),
        ),
      },
    });

    expect(readCookieConsent()).toMatchObject({ analytics: true });
    expect(now).toHaveBeenCalledTimes(2);
  });
});

/**
 * Non-régression du widget tiers (Calendly).
 *
 * Le mur d'autorisation ne mémorisait rien : passer de /contact à /rendez-vous,
 * ou simplement recharger, redemandait l'accord. Le stocker imposait un
 * nouveau format d'enregistrement — donc une migration, sinon relever
 * `COOKIE_CONSENT_VERSION` effaçait le choix analytics de tous les visiteurs
 * déjà passés.
 */
describe("consentement du widget de réservation tiers", () => {
  afterEach(() => {
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
    vi.unstubAllEnvs();
  });

  /** localStorage minimal, partagé par les scénarios de migration. */
  function stubStorage(initial: string | null) {
    const store = new Map<string, string>();
    if (initial !== null) store.set(COOKIE_CONSENT_STORAGE_KEY, initial);
    vi.stubGlobal("window", {
      localStorage: {
        getItem: (key: string) => store.get(key) ?? null,
        setItem: (key: string, value: string) => store.set(key, value),
        removeItem: (key: string) => {
          store.delete(key);
        },
      },
      dispatchEvent: () => true,
    });
    return store;
  }

  const storedRecord = (store: Map<string, string>) =>
    JSON.parse(store.get(COOKIE_CONSENT_STORAGE_KEY) ?? "null") as {
      version: number;
      analytics: boolean;
      calendly: boolean;
      ts: number;
    };

  it("migre un choix v2 sans le redemander ni prolonger sa durée", () => {
    const ts = Date.now() - 86_400_000;
    const store = stubStorage(
      JSON.stringify({
        version: 2,
        necessary: true,
        analytics: true,
        categories: { necessary: true, analytics: true },
        ts,
      }),
    );

    expect(readCookieConsent()).toMatchObject({
      version: 3,
      analytics: true,
      calendly: false,
      ts,
    });
    // Réécrit au format courant, avec l'horodatage d'origine : la migration ne
    // doit pas offrir 183 jours supplémentaires au consentement.
    expect(storedRecord(store)).toMatchObject({ version: 3, analytics: true, ts });
  });

  it("ne présume aucun accord pour le tiers à partir d'un choix analytics", () => {
    stubStorage(
      JSON.stringify({
        version: 2,
        necessary: true,
        analytics: true,
        categories: { necessary: true, analytics: true },
        ts: Date.now(),
      }),
    );

    expect(isAnalyticsAllowed()).toBe(true);
    expect(isCalendlyEmbedAllowed()).toBe(false);
  });

  it("mémorise l'accord donné devant le widget sans écraser le choix analytics", () => {
    const store = stubStorage(
      JSON.stringify({
        version: 3,
        necessary: true,
        analytics: true,
        calendly: false,
        categories: { necessary: true, analytics: true, calendly: false },
        ts: Date.now(),
      }),
    );

    rememberCalendlyEmbedConsent(true);

    expect(storedRecord(store)).toMatchObject({ analytics: true, calendly: true });
    expect(isCalendlyEmbedAllowed()).toBe(true);
    expect(isAnalyticsAllowed()).toBe(true);
  });

  it("laisse un enregistrement d'un format inconnu être purgé", () => {
    const store = stubStorage(
      JSON.stringify({
        version: 99,
        necessary: true,
        analytics: true,
        calendly: true,
        categories: { necessary: true, analytics: true, calendly: true },
        ts: Date.now(),
      }),
    );

    expect(readCookieConsent()).toBeNull();
    expect(store.has(COOKIE_CONSENT_STORAGE_KEY)).toBe(false);
  });

  it("oublie l'accord du widget quand la bannière est désactivée", () => {
    // Sans bannière, aucun consentement n'est stocké : le mur d'autorisation
    // redemande l'accord à chaque chargement plutôt que de s'appuyer sur un
    // enregistrement que `isAnalyticsAllowed` purgerait de toute façon.
    stubStorage(
      JSON.stringify({
        version: 3,
        necessary: true,
        analytics: false,
        calendly: true,
        categories: { necessary: true, analytics: false, calendly: true },
        ts: Date.now(),
      }),
    );
    vi.stubEnv("NEXT_PUBLIC_COOKIE_BANNER", "0");

    expect(isCalendlyEmbedAllowed()).toBe(false);
  });
});
