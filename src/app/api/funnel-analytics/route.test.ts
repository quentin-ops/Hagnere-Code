import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const persistValues = vi.hoisted(() => vi.fn(async () => undefined));
const insertEvent = vi.hoisted(() => vi.fn(() => ({ values: persistValues })));

vi.mock("@/db", () => ({
  getDb: () => ({ insert: insertEvent }),
}));

import { POST } from "./route";

function analyticsRequest(
  payload: unknown,
  origin = "https://hagnere-code.ai",
): Request {
  return new Request("https://hagnere-code.ai/api/funnel-analytics", {
    method: "POST",
    headers: { "content-type": "application/json", origin },
    body: JSON.stringify(payload),
  });
}

describe("POST /api/funnel-analytics", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.stubEnv("NEXT_PUBLIC_ENV", "production");
    vi.stubEnv("NEXT_PUBLIC_FUNNEL_ANALYTICS_ENABLED", "true");
  });

  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it("writes an allowlisted, anonymous conversion event", async () => {
    const response = await POST(
      analyticsRequest({
        name: "white_paper_grid_copy",
        path: "/livres-blancs/comparer-devis-site-internet",
        props: { resource: "comparaison_devis_web_3_ans", count: 1 },
      }),
    );

    expect(response.status).toBe(204);
    expect(insertEvent).toHaveBeenCalledOnce();
    expect(persistValues).toHaveBeenCalledWith({
      eventName: "white_paper_grid_copy",
      path: "/livres-blancs/comparer-devis-site-internet",
      props: JSON.stringify({
        resource: "comparaison_devis_web_3_ans",
        count: 1,
      }),
    });
  });

  it("rejects unknown event names", async () => {
    const response = await POST(
      analyticsRequest({ name: "invented_event", path: "/", props: {} }),
    );

    expect(response.status).toBe(400);
    expect(insertEvent).not.toHaveBeenCalled();
  });

  it("rejects cross-origin submissions", async () => {
    const response = await POST(
      analyticsRequest(
        { name: "pf:funnel_open", path: "/demarrer-un-projet", props: {} },
        "https://example.net",
      ),
    );

    expect(response.status).toBe(403);
    expect(insertEvent).not.toHaveBeenCalled();
  });

  it("stays explicitly unavailable until a compatible collector is enabled", async () => {
    vi.stubEnv("NEXT_PUBLIC_FUNNEL_ANALYTICS_ENABLED", "false");

    const response = await POST(
      analyticsRequest({
        name: "pf:funnel_open",
        path: "/demarrer-un-projet",
        props: {},
      }),
    );

    expect(response.status).toBe(503);
    await expect(response.json()).resolves.toEqual({
      error: "Mesure de parcours désactivée.",
    });
    expect(insertEvent).not.toHaveBeenCalled();
  });

  it("returns 503 without claiming persistence when the database fails", async () => {
    persistValues.mockRejectedValueOnce(new Error("database unavailable"));

    const response = await POST(
      analyticsRequest({
        name: "guide_cta_click",
        path: "/guides/un-guide",
        props: { placement: "hero" },
      }),
    );

    expect(response.status).toBe(503);
    await expect(response.json()).resolves.toEqual({
      error: "Collecteur indisponible.",
    });
  });
});
