import { describe, expect, it } from "vitest";
import {
  confirmationMailFailureOutcome,
  deliverInquiryEmails,
  missingMailProviderOutcome,
  teamMailFailureOutcome,
} from "./project-inquiry-delivery";

describe("project inquiry delivery outcomes", () => {
  it("ne simule jamais un succès en production si ni DB ni e-mail ne conservent le lead", () => {
    const outcome = missingMailProviderOutcome(true, false);

    expect(outcome.status).toBe(503);
    expect(outcome.payload.ok).toBeUndefined();
    expect(outcome.payload.captured).toBe(false);
  });

  it("demande un autre canal même si la DB a capturé sans notification", () => {
    const outcome = missingMailProviderOutcome(true, true);

    expect(outcome.status).toBe(503);
    expect(outcome.payload).toMatchObject({
      captured: true,
      teamNotified: false,
      confirmationSent: false,
    });
    expect(outcome.payload.error).toContain("Réessayez");
  });

  it("réserve le faux succès sans clé au développement local", () => {
    const outcome = missingMailProviderOutcome(false, false);

    expect(outcome.status).toBe(200);
    expect(outcome.payload.dev).toBe(true);
  });

  it("demande un retry idempotent quand l'e-mail équipe échoue", () => {
    const outcome = teamMailFailureOutcome(true);

    expect(outcome.status).toBe(502);
    expect(outcome.payload.ok).toBeUndefined();
    expect(outcome.payload.error).toContain("ne dupliquera pas");
  });

  it("confirme la capture quand seul l'e-mail prospect échoue", () => {
    const outcome = confirmationMailFailureOutcome();

    expect(outcome.status).toBe(200);
    expect(outcome.payload).toMatchObject({
      ok: true,
      captured: true,
      teamNotified: true,
      confirmationSent: false,
    });
  });

  it("ne transforme pas une panne du second e-mail en échec de notification équipe", async () => {
    const result = await deliverInquiryEmails(
      async () => ({ ok: true }),
      async () => {
        const error = new Error("provider timeout");
        error.name = "TimeoutError";
        throw error;
      },
    );

    expect(result).toEqual({
      kind: "confirmation_failed",
      errorName: "TimeoutError",
    });
  });

  it("arrête le flux si la notification équipe échoue", async () => {
    let confirmationCalled = false;
    const result = await deliverInquiryEmails(
      async () => ({ ok: false, errorName: "rate_limit_exceeded" }),
      async () => {
        confirmationCalled = true;
        return { ok: true };
      },
    );

    expect(result.kind).toBe("team_failed");
    expect(confirmationCalled).toBe(false);
  });
});
