import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const shellSource = readFileSync(
  resolve(process.cwd(), "src/components/guides/GuidesShell.tsx"),
  "utf8",
);
const globalCss = readFileSync(
  resolve(process.cwd(), "src/app/globals.css"),
  "utf8",
);

describe("guide shell print contract", () => {
  it("keeps the site navigation and commercial footer out of guide PDFs", () => {
    expect(shellSource.match(/guide-print-exclude/g)).toHaveLength(2);
    expect(globalCss).toMatch(
      /@media print[\s\S]*\.guide-print-exclude\s*{\s*display:\s*none\s*!important;/,
    );
  });
});
