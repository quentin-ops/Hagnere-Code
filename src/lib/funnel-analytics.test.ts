import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { FUNNEL_EVENT_NAMES, trackFunnelEvent } from "./funnel-analytics";

describe("trackFunnelEvent", () => {
  const sendBeacon = vi.fn<Navigator["sendBeacon"]>(() => true);
  const fetch = vi.fn(() => Promise.resolve(new Response(null, { status: 204 })));

  beforeEach(() => {
    vi.unstubAllEnvs();
    vi.stubEnv("NEXT_PUBLIC_COOKIE_BANNER", "1");
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
