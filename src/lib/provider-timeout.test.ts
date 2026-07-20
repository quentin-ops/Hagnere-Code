import { describe, expect, it } from "vitest";
import { isProviderTimeoutError } from "./provider-timeout";

describe("isProviderTimeoutError", () => {
  it.each(["AbortError", "TimeoutError"])(
    "reconnaît une interruption fournisseur %s",
    (name) => {
      const error = new Error("provider timeout");
      error.name = name;
      expect(isProviderTimeoutError(error)).toBe(true);
    },
  );

  it("n'assimile pas une erreur fournisseur ordinaire à un timeout", () => {
    expect(isProviderTimeoutError(new Error("HTTP 500"))).toBe(false);
    expect(isProviderTimeoutError("AbortError")).toBe(false);
  });
});
