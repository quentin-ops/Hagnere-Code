import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { getDb } from "@/db";
import {
  bindReservationEmail,
  checkServiceRateLimit,
  logAiCall,
  releaseReservation,
} from "@/lib/ai-rate-limit";
import {
  getMathChallengeSecret,
  isValidMathChallenge,
  isMathChallengeExpired,
} from "@/lib/math-challenge";
import { getClientIp } from "@/lib/rate-limit";
import { sendResendEmail } from "@/lib/resend-email";
import { POST } from "./route";

vi.mock("@/db", () => ({
  getDb: vi.fn(),
}));

vi.mock("@/lib/ai-rate-limit", () => ({
  bindReservationEmail: vi.fn(),
  checkServiceRateLimit: vi.fn(),
  hashEmail: vi.fn(() => "hashed-email"),
  logAiCall: vi.fn(),
  releaseReservation: vi.fn(),
}));

vi.mock("@/lib/math-challenge", () => ({
  getMathChallengeSecret: vi.fn(),
  isValidMathChallenge: vi.fn(),
  isMathChallengeExpired: vi.fn(),
}));

vi.mock("@/lib/rate-limit", () => ({
  getClientIp: vi.fn(),
}));

vi.mock("@/lib/resend-email", () => ({
  sendResendEmail: vi.fn(),
}));

vi.mock("@/lib/logger", () => ({
  log: {
    debug: vi.fn(),
    error: vi.fn(),
    info: vi.fn(),
    warn: vi.fn(),
  },
}));

vi.mock("resend", () => ({
  Resend: vi.fn(function MockResend() {
    return {};
  }),
}));

const mockedGetDb = vi.mocked(getDb);
const mockedCheckServiceRateLimit = vi.mocked(checkServiceRateLimit);
const mockedBindReservationEmail = vi.mocked(bindReservationEmail);
const mockedLogAiCall = vi.mocked(logAiCall);
const mockedReleaseReservation = vi.mocked(releaseReservation);
const mockedGetMathChallengeSecret = vi.mocked(getMathChallengeSecret);
const mockedIsValidMathChallenge = vi.mocked(isValidMathChallenge);
const mockedIsMathChallengeExpired = vi.mocked(isMathChallengeExpired);
const mockedGetClientIp = vi.mocked(getClientIp);
const mockedSendResendEmail = vi.mocked(sendResendEmail);

const IDEMPOTENCY_KEY = "submission_test_1234567890";

const VALID_BODY = {
  firstName: "Alice",
  lastName: "Martin",
  email: "alice@example.com",
  company: "Exemple SAS",
  projectType: "Application métier",
  timeline: "Ce trimestre",
  budget: "15–30 k€",
  message: "Nous souhaitons remplacer un processus manuel devenu fragile.",
  phone: "+33 6 12 34 56 78",
  mathChallenge: {
    answer: 7,
    token: "signed-math-token",
  },
  consent: true,
};

type MockDatabaseOptions = {
  insertedId?: number | null;
  existingId?: number | null;
};

function createMockDatabase({
  insertedId = 42,
  existingId = null,
}: MockDatabaseOptions = {}) {
  const returning = vi.fn().mockResolvedValue(
    insertedId == null ? [] : [{ id: insertedId }],
  );
  const onConflictDoNothing = vi.fn(() => ({ returning }));
  const values = vi.fn((payload: unknown) => {
    void payload;
    return { onConflictDoNothing };
  });
  const insert = vi.fn(() => ({ values }));

  const selectLimit = vi.fn().mockResolvedValue(
    existingId == null ? [] : [{ id: existingId }],
  );
  const selectWhere = vi.fn(() => ({ limit: selectLimit }));
  const selectFrom = vi.fn(() => ({ where: selectWhere }));
  const select = vi.fn(() => ({ from: selectFrom }));

  const updateWhere = vi.fn().mockResolvedValue(undefined);
  const updateSet = vi.fn(() => ({ where: updateWhere }));
  const update = vi.fn(() => ({ set: updateSet }));

  return {
    db: { insert, select, update },
    insert,
    values,
    onConflictDoNothing,
    returning,
    select,
    selectLimit,
    update,
  };
}

function buildRequest(
  body: Record<string, unknown> = VALID_BODY,
  idempotencyKey = IDEMPOTENCY_KEY,
): Request {
  return new Request("https://hagnere-code.ai/api/project-inquiry", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "idempotency-key": idempotencyKey,
      "user-agent": "route-contract-test/1.0",
    },
    body: JSON.stringify(body),
  });
}

async function readPublicPayload(response: Response) {
  const payload = (await response.json()) as Record<string, unknown>;
  const serialized = JSON.stringify(payload);
  expect(payload).not.toHaveProperty("briefId");
  expect(payload).not.toHaveProperty("briefSlug");
  expect(serialized).not.toMatch(/brief(?:Id|Slug)/i);
  return payload;
}

describe("POST /api/project-inquiry", () => {
  beforeEach(() => {
    vi.stubEnv("RESEND_API_KEY", "re_test_project_inquiry");
    vi.stubEnv("CONTACT_TO_EMAIL", "team@example.com");
    vi.stubEnv("CONTACT_FROM_EMAIL", "contact@example.com");

    mockedGetClientIp.mockReturnValue("203.0.113.24");
    mockedGetMathChallengeSecret.mockReturnValue("test-math-secret");
    mockedIsValidMathChallenge.mockReturnValue(true);
    mockedIsMathChallengeExpired.mockReturnValue(false);
    mockedCheckServiceRateLimit.mockResolvedValue({
      allowed: true,
      reservationId: 101,
    });
    mockedBindReservationEmail.mockResolvedValue({
      allowed: true,
      reservationId: 101,
    });
    mockedLogAiCall.mockResolvedValue(undefined);
    mockedReleaseReservation.mockResolvedValue(undefined);
    mockedSendResendEmail.mockResolvedValue({
      data: { id: "email-test-id" },
      error: null,
      headers: null,
    });

    const { db } = createMockDatabase();
    mockedGetDb.mockReturnValue(db as unknown as ReturnType<typeof getDb>);
  });

  afterEach(() => {
    vi.unstubAllEnvs();
    vi.clearAllMocks();
  });

  it("réserve le quota IP/global mais n'attache jamais l'email si le captcha est invalide", async () => {
    mockedIsValidMathChallenge.mockReturnValue(false);

    const response = await POST(buildRequest());
    const payload = await readPublicPayload(response);

    expect(response.status).toBe(403);
    expect(payload.error).toMatch(/anti-robot/i);
    expect(mockedCheckServiceRateLimit).toHaveBeenCalledWith(
      "203.0.113.24",
      null,
      "inquiry",
      "route-contract-test/1.0",
    );
    expect(mockedBindReservationEmail).not.toHaveBeenCalled();
    expect(mockedGetDb).not.toHaveBeenCalled();
    expect(mockedSendResendEmail).not.toHaveBeenCalled();
    expect(mockedLogAiCall).toHaveBeenCalledWith(
      expect.objectContaining({
        reservationId: 101,
        status: "blocked",
        blockReason: "captcha_failed",
      }),
    );
  });

  /**
   * Un jeton authentique dont l'échéance est passée n'est pas une tentative de
   * fraude : c'est quelqu'un qui a pris son temps, très souvent parce que son
   * navigateur mobile a gelé l'onglet. Lui répondre « réponse incorrecte » en
   * lui décomptant un envoi le poussait à réessayer jusqu'au verrouillage.
   */
  it("relâche le créneau et redemande une question quand le jeton anti-robot a expiré", async () => {
    mockedIsValidMathChallenge.mockReturnValue(false);
    mockedIsMathChallengeExpired.mockReturnValue(true);

    const response = await POST(buildRequest());
    const payload = await readPublicPayload(response);

    expect(response.status).toBe(403);
    expect(payload.mathChallengeExpired).toBe(true);
    // Le message ne doit pas accuser d'erreur de calcul.
    expect(payload.error).not.toMatch(/incorrecte/i);
    expect(payload.error).toMatch(/expir/i);

    // Le créneau est rendu : la tentative ne compte pas contre le prospect.
    expect(mockedReleaseReservation).toHaveBeenCalledWith(
      expect.objectContaining({ reservationId: 101, service: "inquiry" }),
    );
    // Et elle n'est pas journalisée comme un blocage anti-robot.
    expect(mockedLogAiCall).not.toHaveBeenCalledWith(
      expect.objectContaining({ blockReason: "captcha_failed" }),
    );
    expect(mockedBindReservationEmail).not.toHaveBeenCalled();
    expect(mockedSendResendEmail).not.toHaveBeenCalled();
  });

  it("réserve d'abord IP/global, puis attache l'email uniquement après captcha et validation", async () => {
    const response = await POST(buildRequest());
    const payload = await readPublicPayload(response);

    expect(response.status).toBe(200);
    expect(payload).toMatchObject({
      ok: true,
      captured: true,
      teamNotified: true,
      confirmationSent: true,
    });
    expect(mockedCheckServiceRateLimit).toHaveBeenCalledWith(
      "203.0.113.24",
      null,
      "inquiry",
      "route-contract-test/1.0",
    );
    expect(mockedBindReservationEmail).toHaveBeenCalledWith(
      101,
      "inquiry",
      "alice@example.com",
    );
    expect(
      mockedCheckServiceRateLimit.mock.invocationCallOrder[0],
    ).toBeLessThan(mockedBindReservationEmail.mock.invocationCallOrder[0]);
    expect(mockedSendResendEmail).toHaveBeenCalledTimes(2);
  });

  it("réutilise le même slug interne et les mêmes clés Resend lors d'un retry qui rencontre le conflit DB", async () => {
    const conflictDb = createMockDatabase({
      insertedId: null,
      existingId: 77,
    });
    mockedGetDb.mockReturnValue(
      conflictDb.db as unknown as ReturnType<typeof getDb>,
    );

    const firstResponse = await POST(buildRequest());
    const firstPayload = await readPublicPayload(firstResponse);
    const retryResponse = await POST(buildRequest());
    const retryPayload = await readPublicPayload(retryResponse);

    expect(firstResponse.status).toBe(200);
    expect(retryResponse.status).toBe(200);
    expect(firstPayload).toMatchObject({ ok: true, captured: true });
    expect(retryPayload).toMatchObject({ ok: true, captured: true });
    expect(conflictDb.returning).toHaveBeenCalledTimes(2);
    expect(conflictDb.selectLimit).toHaveBeenCalledTimes(2);

    const firstValues = conflictDb.values.mock.calls[0][0] as {
      publicSlug: string;
    };
    const retryValues = conflictDb.values.mock.calls[1][0] as {
      publicSlug: string;
    };
    expect(firstValues.publicSlug).toHaveLength(32);
    expect(retryValues.publicSlug).toBe(firstValues.publicSlug);

    const resendKeys = mockedSendResendEmail.mock.calls.map((call) => call[2]);
    expect(resendKeys).toEqual([
      `inquiry-${firstValues.publicSlug}-team`,
      `inquiry-${firstValues.publicSlug}-confirmation`,
      `inquiry-${firstValues.publicSlug}-team`,
      `inquiry-${firstValues.publicSlug}-confirmation`,
    ]);
  });

  it("retourne 502 et captured:true si l'email équipe échoue après persistance", async () => {
    mockedSendResendEmail.mockResolvedValueOnce({
      data: null,
      error: {
        name: "internal_server_error",
        message: "temporary outage",
        statusCode: 500,
      },
      headers: null,
    });

    const response = await POST(buildRequest());
    const payload = await readPublicPayload(response);

    expect(response.status).toBe(502);
    expect(payload).toMatchObject({
      captured: true,
      teamNotified: false,
      confirmationSent: false,
    });
    expect(payload).not.toHaveProperty("ok", true);
    expect(mockedSendResendEmail).toHaveBeenCalledTimes(1);
    // Panne d'envoi : le créneau est rendu au prospect, sinon le
    // « Réessayez » affiché l'enverrait droit sur un 429.
    expect(mockedReleaseReservation).toHaveBeenCalledWith({
      reservationId: 101,
      service: "inquiry",
      reason: "ai_error",
      briefId: 42,
    });
    expect(mockedLogAiCall).not.toHaveBeenCalled();
  });

  it("ne renvoie aucun faux succès si la base et l'email équipe échouent", async () => {
    mockedGetDb.mockImplementation(() => {
      throw new Error("database unavailable");
    });
    mockedSendResendEmail.mockResolvedValueOnce({
      data: null,
      error: {
        name: "internal_server_error",
        message: "temporary outage",
        statusCode: 500,
      },
      headers: null,
    });

    const response = await POST(buildRequest());
    const payload = await readPublicPayload(response);

    expect(response.status).toBe(502);
    expect(payload).toMatchObject({
      captured: false,
      teamNotified: false,
      confirmationSent: false,
    });
    expect(payload).not.toHaveProperty("ok", true);
    expect(mockedSendResendEmail).toHaveBeenCalledTimes(1);
    expect(mockedReleaseReservation).toHaveBeenCalledWith({
      reservationId: 101,
      service: "inquiry",
      reason: "ai_error",
      briefId: null,
    });
  });

  it("rend le créneau réservé quand la demande est refusée pour champs invalides", async () => {
    const response = await POST(
      buildRequest({ ...VALID_BODY, company: "", message: "trop court" }),
    );
    const payload = await readPublicPayload(response);

    expect(response.status).toBe(400);
    expect(payload.errors).toMatchObject({ company: expect.any(String) });
    expect(mockedReleaseReservation).toHaveBeenCalledWith({
      reservationId: 101,
      service: "inquiry",
      reason: "validation",
    });
    // Aucune ligne d'issue supplémentaire : la réservation elle-même porte
    // désormais le résultat, elle n'est pas doublée par un INSERT.
    expect(mockedLogAiCall).not.toHaveBeenCalled();
    expect(mockedGetDb).not.toHaveBeenCalled();
    expect(mockedSendResendEmail).not.toHaveBeenCalled();
  });

  it("ne prétend pas avoir enregistré la demande quand le champ piège est rempli", async () => {
    const response = await POST(
      buildRequest({ ...VALID_BODY, honeypot: "https://spam.example" }),
    );
    const payload = await readPublicPayload(response);

    // Réponse volontairement indistinguable d'un succès pour un robot…
    expect(response.status).toBe(200);
    expect(payload.ok).toBe(true);
    // …mais sans `captured: true`, le seul marqueur sur lequel le client peut
    // s'appuyer pour rediriger vers /merci et compter une conversion.
    expect(payload.captured).toBe(false);
    expect(mockedCheckServiceRateLimit).not.toHaveBeenCalled();
    expect(mockedGetDb).not.toHaveBeenCalled();
    expect(mockedSendResendEmail).not.toHaveBeenCalled();
  });

  it("normalise le SIREN et borne chaque élément des tableaux persistés", async () => {
    const mock = createMockDatabase();
    mockedGetDb.mockReturnValue(mock.db as unknown as ReturnType<typeof getDb>);

    await POST(
      buildRequest({
        ...VALID_BODY,
        company: "Exemple\r\nSAS",
        siren: "12 345",
        objectives: ["a".repeat(400), "Gagner du temps"],
      }),
    );

    const values = mock.values.mock.calls[0][0] as {
      company: string;
      siren: string | null;
      objectives: string[];
    };
    expect(values.company).toBe("Exemple SAS");
    expect(values.siren).toBeNull();
    expect(values.objectives[0]).toHaveLength(120);
    expect(values.objectives[1]).toBe("Gagner du temps");
  });

  it("n'expédie qu'un extrait du message dans l'accusé de réception", async () => {
    const longMessage = `${"Contexte détaillé du projet. ".repeat(60)}FIN`;

    await POST(buildRequest({ ...VALID_BODY, message: longMessage }));

    const [teamEmail, confirmationEmail] = mockedSendResendEmail.mock.calls.map(
      (call) => call[1] as { text: string; html: string },
    );
    // L'équipe reçoit le brief complet…
    expect(teamEmail.text).toContain("FIN");
    // …le prospect, seulement un extrait : l'accusé part vers une adresse
    // fournie par le soumetteur depuis un domaine authentifié.
    expect(confirmationEmail.text).not.toContain("FIN");
    expect(confirmationEmail.html).not.toContain("FIN");
    expect(confirmationEmail.text).toContain("Début de votre message");
  });
});
