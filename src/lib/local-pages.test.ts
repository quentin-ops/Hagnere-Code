import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import {
  formatLocalPageDate,
  getLocalPage,
  LOCAL_PAGES,
  localPagePath,
} from "./local-pages";

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

  /**
   * Symétrique de la règle ci-dessus : la cannibalisation d'un cluster local
   * à trois niveaux se joue d'abord sur le <title>. Chaque requête tête
   * appartient à une seule page ; aucune page d'un autre niveau ne doit
   * porter la chaîne exacte réservée à une autre.
   */
  it("gives each exact search target to exactly one page of the cluster", () => {
    const RESERVED_TARGETS: { path: string; target: string }[] = [
      { path: "savoie", target: "Agence web en Savoie" },
      { path: "savoie/chambery", target: "Agence web à Chambéry" },
    ];

    for (const { path: reservedPath, target } of RESERVED_TARGETS) {
      const owner = getLocalPage("agence", reservedPath);
      expect(owner.title, target).toContain(target);

      for (const page of LOCAL_PAGES) {
        if (page === owner) continue;
        expect(
          page.title,
          `${localPagePath(page)} ne doit pas viser « ${target} »`,
        ).not.toContain(target);
      }
    }
  });

  it("formats registry dates deterministically in French UTC", () => {
    expect(formatLocalPageDate("2026-07-20")).toBe("20 juillet 2026");
  });

  it("renders each visible update label from the registry formatter", () => {
    for (const page of LOCAL_PAGES) {
      const pageFile = path.join(
        process.cwd(),
        "src/app",
        localPagePath(page).replace(/^\//, ""),
        "page.tsx",
      );
      const source = fs.readFileSync(pageFile, "utf8");

      expect(source, localPagePath(page)).toContain(
        "formatLocalPageDate(page.dateModified)",
      );
      expect(source, localPagePath(page)).not.toMatch(
        /Mis à jour le\s+\d{1,2}\s+[a-zéû]+\s+20\d{2}/i,
      );
    }
  });
});
