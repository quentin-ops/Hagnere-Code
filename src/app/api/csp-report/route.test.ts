import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const logWarn = vi.hoisted(() => vi.fn());

vi.mock("@/lib/logger", () => ({
  log: { debug: vi.fn(), error: vi.fn(), info: vi.fn(), warn: logWarn },
}));

import { POST } from "./route";

function reportRequest(payload: unknown, ip = "203.0.113.77"): Request {
  return new Request("https://hagnere-code.ai/api/csp-report", {
    method: "POST",
    headers: { "content-type": "application/reports+json", "x-real-ip": ip },
    body: typeof payload === "string" ? payload : JSON.stringify(payload),
  });
}

describe("POST /api/csp-report", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.stubEnv("VERCEL", "1");
  });

  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it("journalise une ressource réellement bloquée (Reporting API)", async () => {
    const response = await POST(
      reportRequest([
        {
          type: "csp-violation",
          body: {
            documentURL: "https://hagnere-code.ai/demarrer-un-projet",
            effectiveDirective: "script-src-elem",
            blockedURL: "https://www.googletagmanager.com/gtag/js",
          },
        },
      ]),
    );

    expect(response.status).toBe(204);
    expect(logWarn).toHaveBeenCalledWith("csp_violation_reported", {
      directive: "script-src-elem",
      blockedUri: "https://www.googletagmanager.com/gtag/js",
      documentUri: "https://hagnere-code.ai/demarrer-un-projet",
    });
  });

  it("accepte aussi le format historique report-uri", async () => {
    const response = await POST(
      reportRequest({
        "csp-report": {
          "document-uri": "https://hagnere-code.ai/",
          "effective-directive": "connect-src",
          "blocked-uri": "https://www.google-analytics.com/g/collect",
        },
      }),
    );

    expect(response.status).toBe(204);
    expect(logWarn).toHaveBeenCalledOnce();
  });

  it("ignore le bruit des extensions de navigateur", async () => {
    const response = await POST(
      reportRequest({
        "csp-report": {
          "document-uri": "https://hagnere-code.ai/",
          "effective-directive": "script-src-elem",
          "blocked-uri": "chrome-extension",
        },
      }),
    );

    expect(response.status).toBe(204);
    expect(logWarn).not.toHaveBeenCalled();
  });

  it("refuse un corps illisible sans rien journaliser", async () => {
    const response = await POST(reportRequest("pas du json"));

    expect(response.status).toBe(400);
    expect(logWarn).not.toHaveBeenCalled();
  });

  it("borne le nombre de rapports acceptés par IP", async () => {
    const statuses: number[] = [];
    for (let i = 0; i < 60; i += 1) {
      const response = await POST(
        reportRequest(
          {
            "csp-report": {
              "document-uri": "https://hagnere-code.ai/",
              "effective-directive": "img-src",
              "blocked-uri": "https://example.net/pixel.gif",
            },
          },
          "198.51.100.4",
        ),
      );
      statuses.push(response.status);
      if (response.status === 429) break;
    }

    expect(statuses).toContain(429);
  });
});
