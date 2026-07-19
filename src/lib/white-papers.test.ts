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
