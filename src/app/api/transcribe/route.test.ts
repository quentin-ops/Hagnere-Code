/**
 * Tests d'intégration légère pour /api/transcribe.
 * `fetch` est mocké : aucun appel réel à Groq pendant les tests.
 */
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { NextRequest } from "next/server";
import {
  checkServiceRateLimit,
  logAiCall,
  reserveServiceCost,
} from "@/lib/ai-rate-limit";
import { POST } from "./route";

vi.mock("@/lib/ai-rate-limit", () => ({
  checkServiceRateLimit: vi.fn(),
  logAiCall: vi.fn(),
  reserveServiceCost: vi.fn(),
}));

vi.mock("@/lib/logger", () => ({
  log: {
    debug: vi.fn(),
    error: vi.fn(),
    info: vi.fn(),
    warn: vi.fn(),
  },
}));

const mockedCheckServiceRateLimit = vi.mocked(checkServiceRateLimit);
const mockedReserveServiceCost = vi.mocked(reserveServiceCost);
const mockedLogAiCall = vi.mocked(logAiCall);

const ORIGIN = "https://hagnere-code.ai";
const WEBM_HEADER = [0x1a, 0x45, 0xdf, 0xa3];

function audioBytes(header: number[], size = 2048): Uint8Array<ArrayBuffer> {
  const bytes = new Uint8Array(size);
  bytes.set(header, 0);
  return bytes;
}

function textBytes(text: string): Uint8Array<ArrayBuffer> {
  const encoded = new TextEncoder().encode(text);
  const bytes = new Uint8Array(encoded.length);
  bytes.set(encoded);
  return bytes;
}

async function buildRequest(
  {
    bytes = audioBytes(WEBM_HEADER),
    type = "audio/webm",
    origin = ORIGIN as string | null,
    fieldName = "audio",
  } = {},
): Promise<NextRequest> {
  const form = new FormData();
  form.append(fieldName, new Blob([bytes], { type }), "brief.webm");
  const headers: Record<string, string> = { "x-real-ip": "203.0.113.42" };
  if (origin !== null) headers.origin = origin;
  const base = new Request(`${ORIGIN}/api/transcribe`, {
    method: "POST",
    body: form,
  });
  const body = await base.arrayBuffer();
  headers["content-type"] = base.headers.get("content-type") as string;
  return new NextRequest(`${ORIGIN}/api/transcribe`, {
    method: "POST",
    headers,
    body,
  });
}

describe("POST /api/transcribe", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.stubEnv("VERCEL", "1");
    vi.stubEnv("GROQ_API_KEY", "gsk_test");
    mockedCheckServiceRateLimit.mockResolvedValue({
      allowed: true,
      reservationId: 12,
    });
    mockedReserveServiceCost.mockResolvedValue({
      allowed: true,
      reservationId: 12,
    });
    mockedLogAiCall.mockResolvedValue(undefined);
    vi.spyOn(global, "fetch").mockImplementation(
      async () =>
        new Response(JSON.stringify({ text: "Bonjour, voici mon brief." }), {
          status: 200,
          headers: { "content-type": "application/json" },
        }),
    );
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.unstubAllEnvs();
  });

  it("transcrit un enregistrement conforme", async () => {
    const response = await POST(await buildRequest());

    expect(response.status).toBe(200);
    await expect(response.json()).resolves.toEqual({
      text: "Bonjour, voici mon brief.",
    });
    expect(mockedCheckServiceRateLimit).toHaveBeenCalledWith(
      "203.0.113.42",
      null,
      "transcribe",
      null,
    );
  });

  it("refuse une requête sans en-tête Origin, avant de consommer le quota", async () => {
    const response = await POST(await buildRequest({ origin: null }));

    expect(response.status).toBe(403);
    expect(mockedCheckServiceRateLimit).not.toHaveBeenCalled();
    expect(global.fetch).not.toHaveBeenCalled();
  });

  it("refuse une origine étrangère", async () => {
    const response = await POST(
      await buildRequest({ origin: "https://example.net" }),
    );

    expect(response.status).toBe(403);
    expect(mockedCheckServiceRateLimit).not.toHaveBeenCalled();
  });

  it("415 quand les octets ne sont pas ceux d'un audio malgré un MIME valide", async () => {
    const response = await POST(
      await buildRequest({ bytes: textBytes("<?php echo 1;") }),
    );

    expect(response.status).toBe(415);
    expect(global.fetch).not.toHaveBeenCalled();
  });

  it("415 quand le type déclaré n'est pas un format audio attendu", async () => {
    const response = await POST(
      await buildRequest({ type: "application/zip" }),
    );

    expect(response.status).toBe(415);
    expect(global.fetch).not.toHaveBeenCalled();
  });

  it("413 dès l'annonce d'un corps hors gabarit, sans lire le flux", async () => {
    const response = await POST(
      new NextRequest(`${ORIGIN}/api/transcribe`, {
        method: "POST",
        headers: {
          origin: ORIGIN,
          "x-real-ip": "203.0.113.42",
          "content-length": "99999999",
        },
      }),
    );

    expect(response.status).toBe(413);
    expect(mockedCheckServiceRateLimit).not.toHaveBeenCalled();
  });

  it("429 avec Retry-After lorsque le limiteur persistant refuse", async () => {
    mockedCheckServiceRateLimit.mockResolvedValueOnce({
      allowed: false,
      reason: "rate_ip_hour",
      message: "Trop de tentatives sur la dernière heure.",
      retryAfterSec: 3600,
    });

    const response = await POST(await buildRequest());

    expect(response.status).toBe(429);
    expect(response.headers.get("Retry-After")).toBe("3600");
    expect(global.fetch).not.toHaveBeenCalled();
  });

  // Relayer le statut de Groq faisait passer une clé expirée (401) ou un quota
  // fournisseur (429) pour une décision de NOTRE API. Le client, lui, affiche
  // le message renvoyé quel que soit le statut : c'est donc le statut lui-même
  // qui doit rester honnête pour les sondes et les journaux.
  it.each([400, 401, 403, 429, 500, 503])(
    "normalise en 502 l'échec fournisseur %i",
    async (providerStatus) => {
      vi.spyOn(global, "fetch").mockImplementation(
        async () => new Response("{}", { status: providerStatus }),
      );

      const response = await POST(await buildRequest());

      expect(response.status).toBe(502);
      // 429 reste réservé à nos propres plafonds, qui seuls savent quand
      // réessayer : une panne amont ne porte aucun Retry-After.
      expect(response.headers.get("Retry-After")).toBeNull();
      expect(mockedLogAiCall).toHaveBeenCalledWith(
        expect.objectContaining({ status: "ai_error" }),
      );
    },
  );

  it("réserve le 429 aux plafonds de coût que nous décidons", async () => {
    mockedReserveServiceCost.mockResolvedValueOnce({
      allowed: false,
      reason: "cost_breaker",
      message: "Plafond quotidien de dictée atteint.",
      retryAfterSec: 1800,
    });

    const response = await POST(await buildRequest());

    expect(response.status).toBe(429);
    expect(response.headers.get("Retry-After")).toBe("1800");
    expect(global.fetch).not.toHaveBeenCalled();
  });

  it("borne le nombre de transcriptions simultanées au lieu de saturer la mémoire", async () => {
    let releaseGroq: (() => void) | null = null;
    const pending = new Promise<void>((resolve) => {
      releaseGroq = resolve;
    });
    vi.spyOn(global, "fetch").mockImplementation(async () => {
      await pending;
      return new Response(JSON.stringify({ text: "ok" }), { status: 200 });
    });

    const requests = await Promise.all(
      Array.from({ length: 6 }, () => buildRequest()),
    );
    const responses = Promise.all(requests.map((request) => POST(request)));
    const settled = await Promise.race([
      responses,
      new Promise<Response[]>((resolve) =>
        setTimeout(async () => {
          releaseGroq?.();
          resolve(await responses);
        }, 20),
      ),
    ]);

    const statuses = settled.map((response) => response.status);
    expect(statuses.filter((status) => status === 503).length).toBeGreaterThan(0);
    expect(statuses.filter((status) => status === 200).length).toBeLessThanOrEqual(4);
  });
});
