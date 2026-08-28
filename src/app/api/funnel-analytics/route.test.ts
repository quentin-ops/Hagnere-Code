import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const persistValues = vi.hoisted(() => vi.fn(async () => undefined));
const insertEvent = vi.hoisted(() => vi.fn(() => ({ values: persistValues })));
const checkServiceRateLimit = vi.hoisted(() => vi.fn());
const logError = vi.hoisted(() => vi.fn());

vi.mock("@/db", () => ({
  getDb: () => ({ insert: insertEvent }),
}));

vi.mock("@/lib/ai-rate-limit", () => ({
  checkServiceRateLimit,
}));

vi.mock("@/lib/rate-limit", () => ({
  getClientIp: () => "203.0.113.9",
}));

vi.mock("@/lib/logger", () => ({
  log: {
    debug: vi.fn(),
    error: logError,
    info: vi.fn(),
    warn: vi.fn(),
  },
}));

import { POST } from "./route";

function analyticsRequest(
  payload: unknown,
  origin: string | null = "https://hagnere-code.ai",
): Request {
  const headers: Record<string, string> = {
    "content-type": "application/json",
  };
  if (origin !== null) headers.origin = origin;
  return new Request("https://hagnere-code.ai/api/funnel-analytics", {
    method: "POST",
    headers,
    body: JSON.stringify(payload),
  });
}

describe("POST /api/funnel-analytics", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.stubEnv("NEXT_PUBLIC_ENV", "production");
    vi.stubEnv("NEXT_PUBLIC_FUNNEL_ANALYTICS_ENABLED", "true");
    checkServiceRateLimit.mockResolvedValue({
      allowed: true,
      reservationId: 7,
    });
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

  it("refuse une requête sans en-tête Origin, avant même de compter le quota", async () => {
    const response = await POST(
      analyticsRequest(
        { name: "pf:funnel_open", path: "/demarrer-un-projet", props: {} },
        null,
      ),
    );

    expect(response.status).toBe(403);
    expect(checkServiceRateLimit).not.toHaveBeenCalled();
    expect(insertEvent).not.toHaveBeenCalled();
  });

  it("refuse l'écriture au-delà du plafond et annonce un délai de réessai", async () => {
    checkServiceRateLimit.mockResolvedValue({
      allowed: false,
      reason: "rate_ip_hour",
      message: "Trop de tentatives sur la dernière heure.",
      retryAfterSec: 3600,
    });

    const response = await POST(
      analyticsRequest({
        name: "pf:step_complete",
        path: "/demarrer-un-projet",
        props: { step: "contexte" },
      }),
    );

    expect(response.status).toBe(429);
    expect(response.headers.get("Retry-After")).toBe("3600");
    expect(insertEvent).not.toHaveBeenCalled();
  });

  it("compte le quota sur le service analytics avant toute écriture", async () => {
    await POST(
      analyticsRequest({
        name: "pf:step_complete",
        path: "/demarrer-un-projet",
        props: { step: "contexte" },
      }),
    );

    expect(checkServiceRateLimit).toHaveBeenCalledWith(
      "203.0.113.9",
      null,
      "analytics",
      null,
    );
    expect(
      checkServiceRateLimit.mock.invocationCallOrder[0],
    ).toBeLessThan(insertEvent.mock.invocationCallOrder[0]);
  });

  it("n'écrit rien si le compteur persistant est indisponible", async () => {
    checkServiceRateLimit.mockRejectedValue(new Error("database unavailable"));

    const response = await POST(
      analyticsRequest({
        name: "pf:funnel_open",
        path: "/demarrer-un-projet",
        props: {},
      }),
    );

    expect(response.status).toBe(503);
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

  it("journalise l'échec d'écriture via le logger sanitisant, jamais l'objet Error brut", async () => {
    const failure = new Error("neon: connection to db-host refused");
    persistValues.mockRejectedValueOnce(failure);

    await POST(
      analyticsRequest({
        name: "guide_cta_click",
        path: "/guides/un-guide",
        props: { placement: "hero" },
      }),
    );

    expect(logError).toHaveBeenCalledWith("funnel_analytics_write_failed", {
      err: failure,
    });
  });
});
