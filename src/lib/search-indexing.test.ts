import { describe, expect, it } from "vitest";
import { isSearchIndexingEnabled } from "./search-indexing";

describe("search indexing environment", () => {
  it("enables indexing only for an explicit production build", () => {
    expect(isSearchIndexingEnabled("production")).toBe(true);
    expect(isSearchIndexingEnabled("development")).toBe(false);
    expect(isSearchIndexingEnabled("preview")).toBe(false);
    expect(isSearchIndexingEnabled(undefined)).toBe(false);
  });
});
