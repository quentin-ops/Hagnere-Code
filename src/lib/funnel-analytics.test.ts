import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import {
  FUNNEL_EVENT_NAMES,
  resetFunnelDeduplication,
  trackFunnelEvent,
} from "./funnel-analytics";

describe("trackFunnelEvent", () => {
  const sendBeacon = vi.fn<Navigator["sendBeacon"]>(() => true);
  const fetch = vi.fn(() => Promise.resolve(new Response(null, { status: 204 })));

  beforeEach(() => {
    resetFunnelDeduplication();
    vi.unstubAllEnvs();
    vi.stubEnv("NEXT_PUBLIC_COOKIE_BANNER", "1");
    vi.stubEnv("NEXT_PUBLIC_FUNNEL_ANALYTICS_ENABLED", "true");
    sendBeacon.mockReset();
    sendBeacon.mockReturnValue(true);
    fetch.mockReset();
    fetch.mockResolvedValue(new Response(null, { status: 204 }));
    vi.stubGlobal("window", {
      location: { pathname: "/livres-blancs/comparer-devis-site-internet" },
      navigator: { sendBeacon },
      fetch,
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
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    vi.unstubAllEnvs();
  });

  it("autorise l'état de capture partielle du formulaire", () => {
    expect(FUNNEL_EVENT_NAMES).toContain("pf:submit_partial");
  });

  it("déclare le nom d'événement nécessaire à une réservation confirmée", () => {
    // L'union est fermée : sans cette entrée, aucun composant ne peut émettre
    // la confirmation de créneau et la route API la rejetterait.
    expect(FUNNEL_EVENT_NAMES).toContain("pf:calendly_booking_confirmed");
  });

  it("n'écrit qu'une fois par étape, quels que soient les allers-retours", () => {
    trackFunnelEvent("pf:step_complete", { step: "projet", index: 0 });
    trackFunnelEvent("pf:step_complete", { step: "projet", index: 0 });

    expect(sendBeacon).toHaveBeenCalledOnce();

    // Une autre étape reste une mesure distincte.
    trackFunnelEvent("pf:step_complete", { step: "contact", index: 1 });
    expect(sendBeacon).toHaveBeenCalledTimes(2);

    // Un événement hors table de déduplication n'est jamais filtré.
    trackFunnelEvent("pf:step_skip", { step: "projet" });
    trackFunnelEvent("pf:step_skip", { step: "projet" });
    expect(sendBeacon).toHaveBeenCalledTimes(4);
  });

  it("ne consomme pas la déduplication quand le consentement manque", () => {
    vi.stubEnv("NEXT_PUBLIC_FUNNEL_ANALYTICS_ENABLED", "false");
    trackFunnelEvent("pf:step_complete", { step: "projet" });
    expect(sendBeacon).not.toHaveBeenCalled();

    vi.stubEnv("NEXT_PUBLIC_FUNNEL_ANALYTICS_ENABLED", "true");
    trackFunnelEvent("pf:step_complete", { step: "projet" });
    expect(sendBeacon).toHaveBeenCalledOnce();
  });

  it("n'ajoute aucun identifiant de visiteur aux propriétés envoyées", async () => {
    // /legal/confidentialite publie « sans identifiant visiteur ajouté par le
    // collecteur ». Toute clé de corrélation ajoutée ici rendrait cette
    // mention fausse : la changer suppose de modifier la page, la version de
    // notice et l'inventaire /legal/cookies dans le même changement.
    trackFunnelEvent("pf:step_complete", { step: "projet" });

    const blob = sendBeacon.mock.calls[0][1] as Blob;
    const sent = JSON.parse(await blob.text()) as {
      props: Record<string, unknown>;
    };
    expect(Object.keys(sent.props)).toEqual(["step"]);
  });

  it("sends primitive properties to the first-party endpoint", async () => {
    trackFunnelEvent("resource_download_click", {
      resource: "kit-cdc-site",
      count: 1,
      available: true,
      omitted: undefined,
    });

    expect(sendBeacon).toHaveBeenCalledOnce();
    expect(sendBeacon.mock.calls[0][0]).toBe("/api/funnel-analytics");
    const blob = sendBeacon.mock.calls[0][1] as Blob;
    await expect(blob.text()).resolves.toBe(
      JSON.stringify({
        name: "resource_download_click",
        path: "/livres-blancs/comparer-devis-site-internet",
        props: { resource: "kit-cdc-site", count: 1, available: true },
      }),
    );
  });

  it("falls back to keepalive fetch when sendBeacon refuses the payload", () => {
    sendBeacon.mockReturnValueOnce(false);

    trackFunnelEvent("white_paper_grid_copy");

    expect(fetch).toHaveBeenCalledWith(
      "/api/funnel-analytics",
      expect.objectContaining({ method: "POST", keepalive: true }),
    );
  });

  it("never breaks the visitor action when both transports fail", () => {
    sendBeacon.mockImplementationOnce(() => {
      throw new Error("beacon unavailable");
    });
    fetch.mockImplementationOnce(() => {
      throw new Error("fetch unavailable");
    });

    expect(() => trackFunnelEvent("white_paper_grid_copy")).not.toThrow();
  });

  it("does not send analytics when the enabled banner was refused", () => {
    Object.assign(window, {
      localStorage: {
        getItem: vi.fn(() =>
          JSON.stringify({
            version: 2,
            necessary: true,
            analytics: false,
            categories: { necessary: true, analytics: false },
            ts: Date.now(),
          }),
        ),
      },
    });

    trackFunnelEvent("guide_cta_click");

    expect(sendBeacon).not.toHaveBeenCalled();
    expect(fetch).not.toHaveBeenCalled();
  });

  it("does not send analytics when the banner is disabled", () => {
    vi.stubEnv("NEXT_PUBLIC_COOKIE_BANNER", "0");

    trackFunnelEvent("guide_cta_click");

    expect(sendBeacon).not.toHaveBeenCalled();
    expect(fetch).not.toHaveBeenCalled();
  });

  it("does not emit anything when no compatible collector is enabled", () => {
    vi.stubEnv("NEXT_PUBLIC_FUNNEL_ANALYTICS_ENABLED", "false");

    trackFunnelEvent("guide_cta_click");

    expect(sendBeacon).not.toHaveBeenCalled();
    expect(fetch).not.toHaveBeenCalled();
  });

  it("does not send analytics after the 183-day choice has expired", () => {
    Object.assign(window, {
      localStorage: {
        getItem: vi.fn(() =>
          JSON.stringify({
            version: 2,
            necessary: true,
            analytics: true,
            categories: { necessary: true, analytics: true },
            ts: Date.now() - 184 * 86_400_000,
          }),
        ),
      },
    });

    trackFunnelEvent("guide_cta_click");

    expect(sendBeacon).not.toHaveBeenCalled();
    expect(fetch).not.toHaveBeenCalled();
  });

  it("sends analytics after an explicit positive choice", () => {
    vi.stubEnv("NEXT_PUBLIC_COOKIE_BANNER", "true");
    Object.assign(window, {
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

    trackFunnelEvent("guide_cta_click");

    expect(sendBeacon).toHaveBeenCalledOnce();
  });
});
