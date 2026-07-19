import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { trackFunnelEvent } from "./funnel-analytics";

describe("trackFunnelEvent", () => {
  const sendBeacon = vi.fn<Navigator["sendBeacon"]>(() => true);
  const fetch = vi.fn(() => Promise.resolve(new Response(null, { status: 204 })));

  beforeEach(() => {
    vi.clearAllMocks();
    vi.stubGlobal("window", {
      location: { pathname: "/livres-blancs/comparer-devis-site-internet" },
      navigator: { sendBeacon },
      fetch,
    });
  });

  afterEach(() => {
    vi.unstubAllGlobals();
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
});
