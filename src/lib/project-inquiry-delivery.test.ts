import { describe, expect, it } from "vitest";
import {
  confirmationMailFailureOutcome,
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

  it("signale explicitement une capture DB sans notification e-mail", () => {
    const outcome = missingMailProviderOutcome(true, true);

    expect(outcome.status).toBe(202);
    expect(outcome.payload).toMatchObject({
      ok: true,
      captured: true,
      teamNotified: false,
      confirmationSent: false,
    });
  });

  it("réserve le faux succès sans clé au développement local", () => {
    const outcome = missingMailProviderOutcome(false, false);

    expect(outcome.status).toBe(200);
    expect(outcome.payload.dev).toBe(true);
  });

  it("évite un renvoi quand la DB a capturé le lead mais l'e-mail équipe échoue", () => {
    const outcome = teamMailFailureOutcome(true);

    expect(outcome.status).toBe(202);
    expect(outcome.payload.ok).toBe(true);
    expect(outcome.payload.message).toContain("Inutile de renvoyer");
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
});
