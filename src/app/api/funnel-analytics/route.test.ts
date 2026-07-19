import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const writeDataPoint = vi.hoisted(() => vi.fn());
const getCloudflareContext = vi.hoisted(() =>
  vi.fn(async () => ({ env: { FUNNEL_ANALYTICS: { writeDataPoint } } })),
);

vi.mock("@opennextjs/cloudflare", () => ({ getCloudflareContext }));

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
    expect(writeDataPoint).toHaveBeenCalledWith({
      indexes: ["white_paper_grid_copy"],
      blobs: [
        "/livres-blancs/comparer-devis-site-internet",
        JSON.stringify({ resource: "comparaison_devis_web_3_ans", count: 1 }),
      ],
      doubles: [2],
    });
  });

  it("rejects unknown event names", async () => {
    const response = await POST(
      analyticsRequest({ name: "invented_event", path: "/", props: {} }),
    );

    expect(response.status).toBe(400);
    expect(writeDataPoint).not.toHaveBeenCalled();
  });

  it("rejects cross-origin submissions", async () => {
    const response = await POST(
      analyticsRequest(
        { name: "pf:funnel_open", path: "/demarrer-un-projet", props: {} },
        "https://example.net",
      ),
    );

    expect(response.status).toBe(403);
    expect(writeDataPoint).not.toHaveBeenCalled();
  });
});
