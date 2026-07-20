import { describe, expect, it, vi } from "vitest";

import {
  LEGACY_PROJECT_DRAFT_STORAGE_KEYS,
  PROJECT_DRAFT_EXPIRY_MS,
  PROJECT_DRAFT_STORAGE_KEY,
  getProjectDraftRemainingMs,
  purgeLegacyProjectDrafts,
  sanitizeProjectDraftState,
} from "./project-draft";

describe("project draft privacy", () => {
  it("retire toutes les coordonnées avant sérialisation", () => {
    const state = {
      description: "Refondre notre extranet",
      budget: "20–40 k€",
      firstName: "Alice",
      lastName: "Martin",
      email: "alice@example.com",
      phone: "+33 6 00 00 00 00",
      siren: "123456789",
      company: "Exemple SAS",
      role: "Direction",
      honeypot: "robot",
      consent: true,
    };

    expect(sanitizeProjectDraftState(state)).toEqual({
      description: "Refondre notre extranet",
      budget: "20–40 k€",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      siren: "",
      company: "",
      role: "",
      honeypot: "",
      consent: false,
    });
  });

  it("purge les anciennes clés durables et toute v3 mal placée", () => {
    const removeItem = vi.fn();

    purgeLegacyProjectDrafts({ removeItem });

    expect(removeItem.mock.calls.map(([key]) => key)).toEqual([
      ...LEGACY_PROJECT_DRAFT_STORAGE_KEYS,
      PROJECT_DRAFT_STORAGE_KEY,
    ]);
  });

  it("fait réellement expirer un brouillon après 24 heures", () => {
    const now = Date.UTC(2026, 6, 20, 12);

    expect(getProjectDraftRemainingMs(now, now)).toBe(
      PROJECT_DRAFT_EXPIRY_MS,
    );
    expect(
      getProjectDraftRemainingMs(now - PROJECT_DRAFT_EXPIRY_MS + 1, now),
    ).toBe(1);
    expect(
      getProjectDraftRemainingMs(now - PROJECT_DRAFT_EXPIRY_MS, now),
    ).toBe(0);
    expect(getProjectDraftRemainingMs(now + 1, now)).toBe(0);
  });
});
