import { describe, expect, it } from "vitest";
import {
  createInquirySlug,
  isValidInquiryIdempotencyKey,
} from "./inquiry-idempotency";

describe("project inquiry idempotency", () => {
  const base = {
    secret: "test-secret-long-enough",
    canonicalPayload: JSON.stringify(["qu@example.com", "Même brief"]),
    now: new Date("2026-07-20T12:00:00Z"),
  };

  it("garde le même slug pour un retry identique", () => {
    const clientKey = "123e4567-e89b-42d3-a456-426614174000";
    expect(createInquirySlug({ ...base, clientKey })).toBe(
      createInquirySlug({ ...base, clientKey }),
    );
  });

  it("change le slug si le payload change même avec la même clé", () => {
    const clientKey = "123e4567-e89b-42d3-a456-426614174000";
    expect(createInquirySlug({ ...base, clientKey })).not.toBe(
      createInquirySlug({
        ...base,
        clientKey,
        canonicalPayload: JSON.stringify(["qu@example.com", "Brief corrigé"]),
      }),
    );
  });

  it("offre un fallback journalier stable aux clients sans header", () => {
    expect(createInquirySlug({ ...base, clientKey: null })).toBe(
      createInquirySlug({ ...base, clientKey: null }),
    );
  });

  it("rejette les clés trop courtes ou contenant des séparateurs", () => {
    expect(isValidInquiryIdempotencyKey(null)).toBe(true);
    expect(isValidInquiryIdempotencyKey("trop-court")).toBe(false);
    expect(isValidInquiryIdempotencyKey("1234567890123456/../../x")).toBe(false);
  });
});
