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
import { inquiryProvenanceRows, inquiryRowsToTextLines } from "./inquiry-email";
import { POST } from "./route";

/**
 * Non-régression de la décision 20 : le mail d'équipe porte la provenance du
 * lead et la référence de la ligne en base.
 *
 * Ce fichier est SÉPARÉ de `route.test.ts` volontairement : ce dernier couvre
 * le contrat anti-abus et la réponse publique de la route, deux sujets qui
 * bougent pour d'autres raisons. Les assertions ci-dessous ne portent que sur
 * ce que l'équipe lit dans sa boîte.
 */

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

const IDEMPOTENCY_KEY = "submission_test_0987654321";

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
  mathChallenge: { answer: 7, token: "signed-math-token" },
  consent: true,
};

/** Base en mémoire : la persistance n'est pas le sujet de ce fichier. */
function createMockDatabase() {
  const returning = vi.fn().mockResolvedValue([{ id: 42 }]);
  const onConflictDoNothing = vi.fn(() => ({ returning }));
  // Signature déclarée en générique plutôt qu'en paramètre nommé : c'est ce qui
  // type `values.mock.calls[0][0]` — sans quoi le mock passe pour une fonction
  // sans argument et les assertions sur la ligne réellement insérée ne
  // compilent pas — sans introduire de paramètre inutilisé.
  const values = vi.fn<(row: Record<string, unknown>) => { onConflictDoNothing: typeof onConflictDoNothing }>(
    () => ({ onConflictDoNothing }),
  );
  const insert = vi.fn(() => ({ values }));

  const selectLimit = vi.fn().mockResolvedValue([]);
  const selectWhere = vi.fn(() => ({ limit: selectLimit }));
  const selectFrom = vi.fn(() => ({ where: selectWhere }));
  const select = vi.fn(() => ({ from: selectFrom }));

  const updateWhere = vi.fn().mockResolvedValue(undefined);
  const updateSet = vi.fn(() => ({ where: updateWhere }));
  const update = vi.fn(() => ({ set: updateSet }));

  return { db: { insert, select, update }, values };
}

function buildRequest(body: Record<string, unknown>): Request {
  return new Request("https://hagnere-code.ai/api/project-inquiry", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "idempotency-key": IDEMPOTENCY_KEY,
      "user-agent": "inquiry-email-test/1.0",
    },
    body: JSON.stringify(body),
  });
}

type SentMail = { to: string[]; subject: string; text: string; html: string };

function sentMails(): { team: SentMail; confirmation: SentMail } {
  const calls = mockedSendResendEmail.mock.calls;
  expect(calls).toHaveLength(2);
  return {
    team: calls[0][1] as unknown as SentMail,
    confirmation: calls[1][1] as unknown as SentMail,
  };
}

describe("inquiryProvenanceRows", () => {
  it("rend les trois faits de provenance quand la capture a fonctionné", () => {
    const rows = inquiryProvenanceRows({
      landingPage: "/livres-blancs/cahier-des-charges",
      referrerHost: "www.google.com",
      utm: "utm_source=google&source=livre-blanc",
      publicSlug: "abcdef0123456789abcdef0123456789",
    });

    expect(rows).toEqual([
      { label: "Page d'entrée", value: "/livres-blancs/cahier-des-charges" },
      { label: "Référent", value: "www.google.com" },
      { label: "Campagne", value: "utm_source=google&source=livre-blanc" },
      {
        label: "Référence brief",
        value: "abcdef0123456789abcdef0123456789",
      },
    ]);
  });

  /**
   * Une visite directe sans campagne EST une information ; elle ne doit pas se
   * lire comme une mesure en panne. Les deux formulations sont donc distinctes
   * et explicites — c'est tout l'enjeu de la décision.
   */
  it("distingue l'absence de référent et de campagne d'une provenance non capturée", () => {
    const direct = inquiryProvenanceRows({
      landingPage: "/tarifs",
      referrerHost: null,
      utm: "",
      publicSlug: "slug",
    });
    expect(direct.map((row) => row.value)).toEqual([
      "/tarifs",
      "aucun — accès direct, favori ou lien interne",
      "aucune — trafic non balisé",
      "slug",
    ]);

    const missing = inquiryProvenanceRows({
      landingPage: null,
      referrerHost: "www.google.com",
      utm: "utm_source=google",
      publicSlug: "slug",
    });
    // Sans page d'entrée, rien n'a été capturé : afficher un référent et une
    // campagne ferait lire trois faits là où il n'y en a aucun.
    expect(missing.map((row) => row.label)).toEqual([
      "Provenance",
      "Référence brief",
    ]);
    expect(missing[0].value).toMatch(/non capturée/);
  });

  it("aligne les libellés sur la variante réellement produite", () => {
    expect(
      inquiryRowsToTextLines([
        { label: "Référent", value: "a" },
        { label: "Référence brief", value: "b" },
      ]),
    ).toEqual(["Référent        : a", "Référence brief : b"]);
  });
});

describe("POST /api/project-inquiry — provenance dans le mail d'équipe", () => {
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

  it("porte la page d'entrée, le référent, la campagne et le public_slug", async () => {
    const { db, values } = createMockDatabase();
    mockedGetDb.mockReturnValue(db as unknown as ReturnType<typeof getDb>);

    const response = await POST(
      buildRequest({
        ...VALID_BODY,
        landingPage: "/guides/refonte-site-web",
        referrerHost: "www.google.com",
        utm: "utm_source=google&utm_campaign=guides",
      }),
    );
    expect(response.status).toBe(200);

    const { team } = sentMails();
    const persisted = values.mock.calls[0][0] as {
      publicSlug: string;
      landingPage: string | null;
    };

    for (const body of [team.text, team.html]) {
      expect(body).toContain("/guides/refonte-site-web");
      expect(body).toContain("www.google.com");
      expect(body).toContain(persisted.publicSlug);
    }
    expect(team.text).toContain("utm_source=google&utm_campaign=guides");
    // Le gabarit HTML échappe la valeur — le `&` d'une campagne ne doit pas
    // pouvoir ouvrir une entité dans le mail.
    expect(team.html).toContain("utm_source=google&amp;utm_campaign=guides");
    // Le mail affiche exactement ce qui est écrit en base, pas une seconde
    // normalisation qui pourrait en différer.
    expect(persisted.landingPage).toBe("/guides/refonte-site-web");
  });

  it("dit explicitement quand la provenance est absente, sans la faire passer pour une visite directe", async () => {
    const response = await POST(buildRequest(VALID_BODY));
    expect(response.status).toBe(200);

    const { team } = sentMails();
    expect(team.text).toContain("Provenance :");
    expect(team.text).toMatch(/non capturée/);
    expect(team.html).toMatch(/non capturée/);
  });

  /**
   * L'accusé de réception part vers une adresse fournie par le soumetteur :
   * il n'a aucune raison de transporter la référence interne du brief.
   */
  it("n'expose ni la provenance ni la référence interne au prospect", async () => {
    const { db, values } = createMockDatabase();
    mockedGetDb.mockReturnValue(db as unknown as ReturnType<typeof getDb>);

    await POST(
      buildRequest({ ...VALID_BODY, landingPage: "/tarifs", utm: "gclid=xyz" }),
    );

    const { confirmation } = sentMails();
    const persisted = values.mock.calls[0][0] as { publicSlug: string };

    expect(confirmation.to).toEqual([VALID_BODY.email]);
    expect(confirmation.text).not.toContain(persisted.publicSlug);
    expect(confirmation.html).not.toContain(persisted.publicSlug);
    expect(confirmation.text).not.toContain("gclid=xyz");
    expect(confirmation.html).not.toContain("gclid=xyz");
  });
});
