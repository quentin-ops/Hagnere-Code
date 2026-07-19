import { describe, expect, it } from "vitest";
import { getLocalPage, LOCAL_PAGES, localPagePath } from "./local-pages";

describe("local SEO pages", () => {
  it("keeps routes, titles and headings unique and within the editorial limits", () => {
    expect(LOCAL_PAGES.length).toBeLessThanOrEqual(25);
    expect(new Set(LOCAL_PAGES.map(localPagePath)).size).toBe(LOCAL_PAGES.length);
    expect(new Set(LOCAL_PAGES.map((page) => page.title)).size).toBe(
      LOCAL_PAGES.length,
    );
    expect(new Set(LOCAL_PAGES.map((page) => page.heroTitle)).size).toBe(
      LOCAL_PAGES.length,
    );

    for (const page of LOCAL_PAGES) {
      expect(page.title.length, page.title).toBeLessThanOrEqual(60);
      expect(
        page.metaDescription.length,
        page.metaDescription,
      ).toBeLessThanOrEqual(155);
      expect(page.dateModified >= page.datePublished, localPagePath(page)).toBe(
        true,
      );
    }
  });

  it("reserves the exact Chambéry target for the dedicated city page", () => {
    const agency = getLocalPage("agence", "");
    const chambery = getLocalPage("agence", "savoie/chambery");

    expect(agency.locality).toBe("Bassens");
    expect(agency.title).toContain("Bassens");
    expect(chambery.title).toMatch(/^Agence web à Chambéry/);
    expect(chambery.locality).toBe("Chambéry");
  });
});
