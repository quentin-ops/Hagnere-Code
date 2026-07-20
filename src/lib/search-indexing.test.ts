import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { isSearchIndexingEnabled } from "./search-indexing";

function pageSources(dir: string): string[] {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) return pageSources(fullPath);
    return entry.name === "page.tsx" ? [fs.readFileSync(fullPath, "utf8")] : [];
  });
}

describe("search indexing environment", () => {
  it("uses the explicit environment outside a deployment platform", () => {
    expect(isSearchIndexingEnabled("production")).toBe(true);
    expect(isSearchIndexingEnabled("production\n")).toBe(true);
    expect(isSearchIndexingEnabled("development")).toBe(false);
    expect(isSearchIndexingEnabled("preview")).toBe(false);
  });

  it("makes the Vercel environment authoritative when it is available", () => {
    expect(isSearchIndexingEnabled(undefined, "production")).toBe(true);
    expect(isSearchIndexingEnabled("preview", "production")).toBe(true);
    expect(isSearchIndexingEnabled("production", "preview")).toBe(false);
    expect(isSearchIndexingEnabled(undefined, "preview")).toBe(false);
    expect(isSearchIndexingEnabled(undefined, "development")).toBe(false);
    expect(isSearchIndexingEnabled(undefined, undefined)).toBe(false);
  });

  it("keeps positive robots directives centralized in the root layout", () => {
    const sources = pageSources(path.join(process.cwd(), "src", "app"));

    for (const source of sources) {
      expect(source).not.toMatch(
        /robots\s*:\s*\{[\s\S]{0,300}?\bindex\s*:\s*true/,
      );
    }
  });
});
