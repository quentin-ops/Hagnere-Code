import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { GUIDES } from "./guides";

const guidesRoot = path.join(process.cwd(), "src/app/guides");

describe("guide registry", () => {
  it("keeps slugs, titles and descriptions unique", () => {
    for (const key of ["slug", "title", "metaDescription"] as const) {
      const values = GUIDES.map((guide) => guide[key]);
      expect(new Set(values).size, key).toBe(values.length);
    }
  });

  it("keeps real publication dates and positive reading times", () => {
    for (const guide of GUIDES) {
      expect(guide.datePublished, guide.slug).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(guide.dateModified, guide.slug).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(
        Date.parse(`${guide.dateModified}T12:00:00Z`),
        guide.slug,
      ).toBeGreaterThanOrEqual(Date.parse(`${guide.datePublished}T12:00:00Z`));
      expect(guide.readTimeMin, guide.slug).toBeGreaterThan(0);
    }
  });

  it("matches every published route and dedicated social image", () => {
    const registered = GUIDES.map((guide) => guide.slug).sort();
    const routed = fs
      .readdirSync(guidesRoot, { withFileTypes: true })
      .filter(
        (entry) =>
          entry.isDirectory() &&
          fs.existsSync(path.join(guidesRoot, entry.name, "page.tsx")),
      )
      .map((entry) => entry.name)
      .sort();

    expect(registered).toEqual(routed);
    for (const slug of registered) {
      expect(
        fs.existsSync(path.join(guidesRoot, slug, "opengraph-image.tsx")),
        slug,
      ).toBe(true);
    }
  });
});
