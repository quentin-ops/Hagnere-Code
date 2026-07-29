import fs from "node:fs";
import path from "node:path";
import { afterEach, describe, expect, it, vi } from "vitest";
import { GUIDES, PUBLISHED_GUIDES, guideRobots } from "./guides";

const guidesRoot = path.join(process.cwd(), "src/app/guides");

afterEach(() => {
  vi.unstubAllEnvs();
});

describe("guide registry after the editorial reset", () => {
  it("exposes only the first rebuilt guide", () => {
    expect(GUIDES.map((guide) => guide.slug)).toEqual([
      "automatiser-processus-metier",
    ]);
    expect(PUBLISHED_GUIDES).toEqual(GUIDES);
  });

  it("keeps metadata unique, dated and restrained", () => {
    for (const key of ["slug", "title", "metaDescription"] as const) {
      const values = GUIDES.map((guide) => guide[key]);
      expect(new Set(values).size, key).toBe(values.length);
    }

    for (const guide of GUIDES) {
      expect(guide.title.length, `${guide.slug}: title`).toBeLessThanOrEqual(
        65,
      );
      expect(
        guide.metaDescription.length,
        `${guide.slug}: description`,
      ).toBeLessThanOrEqual(160);
      expect(guide.datePublished).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(guide.dateModified).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(
        Date.parse(`${guide.dateModified}T12:00:00Z`),
      ).toBeGreaterThanOrEqual(
        Date.parse(`${guide.datePublished}T12:00:00Z`),
      );
      expect(guide.readTimeMin).toBeGreaterThan(0);
    }
  });

  it("matches the static guide routes and their social images", () => {
    const registered = GUIDES.map((guide) => guide.slug).sort();
    const routed = fs
      .readdirSync(guidesRoot, { withFileTypes: true })
      .filter(
        (entry) =>
          entry.isDirectory() &&
          entry.name !== "[slug]" &&
          fs.existsSync(path.join(guidesRoot, entry.name, "page.tsx")),
      )
      .map((entry) => entry.name)
      .sort();

    expect(routed).toEqual(registered);

    for (const slug of registered) {
      expect(
        fs.existsSync(path.join(guidesRoot, slug, "opengraph-image.tsx")),
        slug,
      ).toBe(true);
    }
  });

  it("keeps visible guides free of unsupported schemas and fake experience", () => {
    const prohibited = [
      /FAQPage/,
      /HowTo/,
      /AggregateRating/,
      /wordCount/,
      /notre client/i,
      /cas client réel/i,
      /nous a contactés/i,
      /nous avons conseillé/i,
      /guide ultime/i,
      /meilleur guide de France/i,
      /\.xlsx?\b/i,
      /\.csv\b/i,
    ] as const;

    for (const guide of GUIDES) {
      const source = fs.readFileSync(
        path.join(guidesRoot, guide.slug, "page.tsx"),
        "utf8",
      );

      expect(source, guide.slug).toContain('"@type": "Article"');
      expect(source, guide.slug).toContain('"@type": "BreadcrumbList"');

      for (const pattern of prohibited) {
        expect(source, `${guide.slug}: ${pattern}`).not.toMatch(pattern);
      }
    }
  });

  it("indexes approved guides only in production", () => {
    const guide = PUBLISHED_GUIDES[0];
    expect(guide).toBeDefined();

    vi.stubEnv("VERCEL_ENV", "");
    vi.stubEnv("NEXT_PUBLIC_ENV", "preview");
    expect(guideRobots(guide)).toEqual({ index: false, follow: false });

    vi.stubEnv("NEXT_PUBLIC_ENV", "production");
    expect(guideRobots(guide)).toEqual({ index: true, follow: true });
    expect(
      guideRobots({
        ...guide,
        editorialStatus: "ready-for-human-review",
      }),
    ).toEqual({ index: false, follow: false });
  });
});
