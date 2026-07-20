/**
 * Tests d'intégration légère pour /api/sirene.
 * On mock global fetch pour ne pas frapper la vraie API gouv pendant les tests.
 */
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { NextRequest } from "next/server";
import { checkServiceRateLimit } from "@/lib/ai-rate-limit";
import { GET } from "./route";

vi.mock("@/lib/ai-rate-limit", () => ({
  checkServiceRateLimit: vi.fn(),
}));

const mockedCheckServiceRateLimit = vi.mocked(checkServiceRateLimit);

const SAMPLE_SUCCESS = {
  results: [
    {
      siren: "993672856",
      nom_complet: "HAGNÉRÉ CODE",
      nom_raison_sociale: "HAGNERE CODE",
      siege: { siret: "99367285600016" },
    },
  ],
  total_results: 1,
};

function buildReq(query = "", headers: Record<string, string> = {}): NextRequest {
  const url = `https://example.com/api/sirene${query ? "?" + query : ""}`;
  return new NextRequest(url, { headers });
}

describe("GET /api/sirene", () => {
  beforeEach(() => {
    vi.stubEnv("VERCEL", "1");
    mockedCheckServiceRateLimit.mockResolvedValue({
      allowed: true,
      reservationId: 1,
    });
    vi.spyOn(global, "fetch").mockImplementation(async () =>
      new Response(JSON.stringify(SAMPLE_SUCCESS), {
        status: 200,
        headers: { "content-type": "application/json" },
      }),
    );
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.unstubAllEnvs();
  });

  it("400 si pas de paramètre siren", async () => {
    const res = await GET(buildReq("", { "x-real-ip": "10.0.0.1" }));
    expect(res.status).toBe(400);
    const body = await res.json();
    expect(body.error).toMatch(/SIREN/i);
  });

  it("400 si format SIREN invalide", async () => {
    const res = await GET(buildReq("siren=12345", { "x-real-ip": "10.0.0.2" }));
    expect(res.status).toBe(400);
  });

  it("accepte les SIREN avec espaces (clean avant validation)", async () => {
    const res = await GET(
      buildReq("siren=993+672+856", { "x-real-ip": "10.0.0.3" }),
    );
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.siren).toBe("993672856");
    expect(body.companyName).toBe("HAGNÉRÉ CODE");
    expect(mockedCheckServiceRateLimit).toHaveBeenCalledWith(
      "10.0.0.3",
      null,
      "sirene",
      null,
    );
  });

  it("404 si l'API gouv ne renvoie aucun résultat", async () => {
    vi.spyOn(global, "fetch").mockImplementation(async () =>
      new Response(JSON.stringify({ results: [], total_results: 0 }), { status: 200 }),
    );
    const res = await GET(buildReq("siren=000000000", { "x-real-ip": "10.0.0.4" }));
    expect(res.status).toBe(404);
  });

  it("500 si l'API gouv renvoie une erreur", async () => {
    vi.spyOn(global, "fetch").mockImplementation(async () =>
      new Response("Bad Gateway", { status: 502 }),
    );
    const res = await GET(buildReq("siren=993672856", { "x-real-ip": "10.0.0.5" }));
    expect(res.status).toBe(500);
  });

  it("retourne 429 lorsque le limiteur persistant refuse la requête", async () => {
    mockedCheckServiceRateLimit.mockResolvedValueOnce({
      allowed: false,
      reason: "rate_ip_hour",
      message: "Trop de recherches.",
      retryAfterSec: 3600,
    });

    const blocked = await GET(buildReq("siren=993672856", { "x-real-ip": "10.0.0.99" }));
    expect(blocked.status).toBe(429);
    expect(blocked.headers.get("Retry-After")).toBe("3600");
    expect(global.fetch).not.toHaveBeenCalled();
  });

  it("échoue fermé si le stockage du limiteur est indisponible", async () => {
    mockedCheckServiceRateLimit.mockRejectedValueOnce(new Error("database unavailable"));

    const res = await GET(buildReq("siren=993672856", { "x-real-ip": "10.0.0.100" }));
    expect(res.status).toBe(503);
    expect(res.headers.get("Retry-After")).toBe("60");
    expect(global.fetch).not.toHaveBeenCalled();
  });
});
