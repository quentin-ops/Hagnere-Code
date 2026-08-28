import fs from "node:fs";
import path from "node:path";
import { beforeEach, describe, expect, it, vi } from "vitest";

const mocks = vi.hoisted(() => ({
  execute: vi.fn(),
  logError: vi.fn(),
  logWarn: vi.fn(),
}));

vi.mock("@/db", () => ({
  getDb: () => ({ execute: mocks.execute }),
}));

vi.mock("@/lib/logger", () => ({
  log: { error: mocks.logError, warn: mocks.logWarn },
}));

import { checkServiceRateLimit, releaseReservation } from "./ai-rate-limit";

const SOURCE = fs.readFileSync(
  path.join(process.cwd(), "src/lib/ai-rate-limit.ts"),
  "utf8",
);

/** Chaque compteur absent du row simulé vaut 0 côté décision. */
function counters(overrides: Record<string, number | null> = {}) {
  return {
    rows: [
      {
        ip_hour: 0,
        ip_day: 0,
        email_day: 0,
        global_day: 0,
        cost_day: 0,
        released_ip_hour: 0,
        released_global_day: 0,
        reservation_id: null,
        ...overrides,
      },
    ],
  };
}

describe("messages de blocage affichés au visiteur", () => {
  /**
   * Ces chaînes sont retournées telles quelles au navigateur et affichées
   * dans le bandeau d'erreur du funnel et du formulaire court. Tout le site
   * vouvoie : l'invariant est trivial à encoder, et le fichier a déjà dérivé.
   */
  const TUTOIEMENT = [
    /\bRéessaye\b/,
    /\bTu as\b/,
    /\bton réseau\b/,
    /\bcontacte\b/,
    /\bécris-nous\b/,
    /\bsaisis ton\b/,
    /\bcontacte-nous\b/,
  ];

  it.each(TUTOIEMENT)("ne tutoie jamais le visiteur (%s)", (pattern) => {
    expect(SOURCE).not.toMatch(pattern);
  });

  it("vouvoie et propose un canal de secours sur un refus", async () => {
    mocks.execute.mockResolvedValueOnce(counters({ ip_day: 99 }));

    const blocked = await checkServiceRateLimit(
      "203.0.113.5",
      null,
      "inquiry",
      null,
    );

    expect(blocked.allowed).toBe(false);
    if (blocked.allowed) return;
    expect(blocked.message).toMatch(/Réessayez/);
    expect(blocked.message).toContain("écrivez-nous");
  });
});

describe("checkServiceRateLimit — plafonds des tentatives relâchées", () => {
  beforeEach(() => {
    mocks.execute.mockReset();
    mocks.logError.mockReset();
    mocks.logWarn.mockReset();
  });

  it("autorise la réservation quand la base la retourne", async () => {
    mocks.execute.mockResolvedValueOnce(counters({ reservation_id: 55 }));

    const decision = await checkServiceRateLimit("203.0.113.5", null, "inquiry");

    expect(decision).toEqual({ allowed: true, reservationId: 55 });
  });

  it("bloque le martèlement de tentatives relâchées sans toucher au quota nominal", async () => {
    mocks.execute.mockResolvedValueOnce(counters({ released_ip_hour: 30 }));

    const decision = await checkServiceRateLimit("203.0.113.5", null, "inquiry");

    expect(decision.allowed).toBe(false);
    if (decision.allowed) return;
    expect(decision.reason).toBe("rate_retry_ip_hour");
    expect(decision.message).not.toMatch(/Réessaye\b/);
  });

  it("borne aussi le volume global des tentatives relâchées", async () => {
    mocks.execute.mockResolvedValueOnce(counters({ released_global_day: 500 }));

    const decision = await checkServiceRateLimit("203.0.113.5", null, "inquiry");

    expect(decision.allowed).toBe(false);
    if (decision.allowed) return;
    expect(decision.reason).toBe("rate_retry_global_day");
  });

  it("ne relâche jamais de créneau sur un service sans libération", async () => {
    mocks.execute.mockResolvedValueOnce(
      counters({ released_ip_hour: 10_000, released_global_day: 10_000, reservation_id: 7 }),
    );

    const decision = await checkServiceRateLimit(
      "203.0.113.5",
      null,
      "transcribe",
    );

    expect(decision).toEqual({ allowed: true, reservationId: 7 });
  });
});

describe("releaseReservation", () => {
  beforeEach(() => {
    mocks.execute.mockReset();
    mocks.logError.mockReset();
    mocks.execute.mockResolvedValue({ rows: [] });
  });

  it("refuse localement une libération sans réservation valide", async () => {
    await releaseReservation({
      reservationId: 0,
      service: "inquiry",
      reason: "validation",
    });

    expect(mocks.execute).not.toHaveBeenCalled();
    expect(mocks.logError).toHaveBeenCalledOnce();
  });

  it("met à jour la ligne réservée au lieu d'en insérer une nouvelle", async () => {
    await releaseReservation({
      reservationId: 42,
      service: "inquiry",
      reason: "validation",
    });

    expect(mocks.execute).toHaveBeenCalledOnce();
    const statement = JSON.stringify(mocks.execute.mock.calls[0][0]);
    expect(statement).toContain("UPDATE ai_call_log");
    expect(statement).not.toContain("INSERT INTO ai_call_log");
    // Seule une réservation encore ouverte et SANS coût engagé peut être
    // rendue : le disjoncteur coût doit garder la mémoire de la dépense.
    expect(statement).toContain("status = 'reserved'");
    expect(statement).toContain("tokens_used = 0");
  });

  it("n'interrompt jamais la réponse quand la base est indisponible", async () => {
    mocks.execute.mockRejectedValueOnce(new Error("database unavailable"));

    await expect(
      releaseReservation({
        reservationId: 42,
        service: "inquiry",
        reason: "ai_error",
      }),
    ).resolves.toBeUndefined();
    expect(mocks.logError).toHaveBeenCalledOnce();
  });
});

describe("compteurs du limiteur", () => {
  it("ne compte plus une réservation relâchée dans les plafonds principaux", () => {
    // Les compteurs nominaux filtrent explicitement status='reserved' :
    // une ligne passée à 'released' sort donc du quota du visiteur.
    expect(SOURCE).toContain("COUNT(*) FILTER (WHERE status = 'reserved')::int AS global_day");
    expect(SOURCE).toContain("status = 'released'");
    expect(SOURCE).toContain("SET status = 'released'");
  });
});
