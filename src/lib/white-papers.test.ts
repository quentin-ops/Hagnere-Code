import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { WHITE_PAPERS } from "./white-papers";

function publicFile(href: string) {
  return path.join(process.cwd(), "public", href.replace(/^\//, ""));
}

describe("white papers", () => {
  it("publishes every declared PDF with a credible size and valid boundaries", () => {
    for (const entry of WHITE_PAPERS) {
      const filePath = publicFile(entry.pdf.href);

      expect(fs.existsSync(filePath), entry.pdf.href).toBe(true);
      const file = fs.readFileSync(filePath);
      const actualSize = fs.statSync(filePath).size;
      expect(actualSize, entry.pdf.href).toBeGreaterThan(20_000);
      expect(
        Math.abs(actualSize - entry.pdf.sizeBytes),
        entry.pdf.href,
      ).toBeLessThan(2_048);
      expect(file.subarray(0, 4).toString("ascii")).toBe("%PDF");
      expect(file.subarray(-16).toString("ascii")).toContain("%%EOF");
      expect(entry.pdf.sizeLabel).toMatch(/^PDF · \d+ Ko$/);
    }
  });

  it("keeps registry titles and descriptions within search-result limits", () => {
    // `page-metadata-invariants.test.ts` ne mesure que les `title:` littéraux
    // écrits dans un page.tsx. Le livre blanc passe le sien par référence au
    // registre : sans ce contrôle, sa longueur n'était vérifiée nulle part.
    const titles = new Set<string>();

    for (const entry of WHITE_PAPERS) {
      expect(
        entry.title.length,
        `${entry.slug} : title de ${entry.title.length} caractères — « ${entry.title} »`,
      ).toBeLessThanOrEqual(60);
      expect(entry.description.length, entry.slug).toBeGreaterThanOrEqual(50);
      expect(entry.description.length, entry.slug).toBeLessThanOrEqual(160);
      expect(entry.cardTitle.trim().length, entry.slug).toBeGreaterThan(0);

      expect(titles.has(entry.title), entry.title).toBe(false);
      titles.add(entry.title);
    }
  });

  it("uses stable public paths and matching download names", () => {
    const paths = WHITE_PAPERS.map((entry) => entry.path);
    const pdfHrefs = WHITE_PAPERS.map((entry) => entry.pdf.href);

    expect(new Set(paths).size).toBe(paths.length);
    expect(new Set(pdfHrefs).size).toBe(pdfHrefs.length);

    for (const entry of WHITE_PAPERS) {
      expect(entry.path).toMatch(/^\/livres-blancs\//);
      expect(entry.pdf.href).toMatch(/^\/ressources\//);
      expect(entry.pdf.href).not.toContain("..");
      expect(path.basename(entry.pdf.href)).toBe(entry.pdf.downloadName);
    }
  });
});
