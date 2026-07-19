import { describe, expect, it } from "vitest";
import { hashEmail } from "./ai-rate-limit";

describe("hashEmail", () => {
  it("normalise la casse et les espaces avant hachage", () => {
    expect(hashEmail("  Quentin@Example.com ")).toBe(hashEmail("quentin@example.com"));
  });

  it("ne produit pas le préfixe base64 réversible de l'adresse", () => {
    const email = "quentin@example.com";
    const reversiblePrefix = Buffer.from(email).toString("base64url").slice(0, 12);
    const digest = hashEmail(email);

    expect(digest).toHaveLength(12);
    expect(digest).not.toBe(reversiblePrefix);
    expect(Buffer.from(digest!, "base64url").toString("utf8")).not.toContain("quentin");
  });

  it("renvoie null pour une valeur absente ou vide", () => {
    expect(hashEmail(null)).toBeNull();
    expect(hashEmail("   ")).toBeNull();
  });
});
