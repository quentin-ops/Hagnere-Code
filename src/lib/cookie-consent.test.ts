import { afterEach, describe, expect, it, vi } from "vitest";

import {
  COOKIE_CONSENT_STORAGE_KEY,
  isAnalyticsAllowed,
  readCookieConsent,
  writeCookieConsent,
} from "./cookie-consent";

describe("cookie consent storage", () => {
  afterEach(() => {
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
      categories: { necessary: boolean; analytics: boolean };
    };
    expect(stored).toMatchObject({
      version: 2,
      analytics: false,
      categories: { necessary: true, analytics: false },
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
});
