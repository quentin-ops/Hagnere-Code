import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const publicRoots = ["src/app", "src/components"];

function publicSources(directory: string): Array<{ file: string; source: string }> {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) return publicSources(file);
    if (!/\.(?:ts|tsx)$/.test(entry.name) || entry.name.includes(".test.")) {
      return [];
    }
    return [{ file, source: fs.readFileSync(file, "utf8").replace(/\s+/g, " ") }];
  });
}

describe("public commercial claims", () => {
  it("does not turn an unmeasured sales-response objective into a 24-hour guarantee", () => {
    const sources = publicRoots.flatMap((root) =>
      publicSources(path.join(process.cwd(), root)),
    );
    const forbidden = [
      /(?:réponse|répond(?:re|ons|ez)?)[^.!?]{0,120}sous 24\s*(?:h|heures)/i,
      /sous 24\s*(?:h|heures)[^.!?]{0,120}(?:réponse|répond(?:re|ons|ez)?)/i,
      /24 h ouvrées maximum/i,
      /(?:souvent|en pratique)\s+3\s*[–-]\s*6\s*h/i,
    ];

    for (const { file, source } of sources) {
      for (const pattern of forbidden) {
        expect(source, `${path.relative(process.cwd(), file)}: ${pattern}`).not.toMatch(
          pattern,
        );
      }
    }
  });
});
