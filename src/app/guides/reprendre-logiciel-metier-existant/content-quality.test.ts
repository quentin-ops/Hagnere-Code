import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const slugDirectory = dirname(fileURLToPath(import.meta.url));
const repositoryRoot = resolve(slugDirectory, "../../../..");

const publicCopyFiles = [
  resolve(slugDirectory, "page.tsx"),
  resolve(slugDirectory, "opengraph-image.tsx"),
  resolve(slugDirectory, "reprise-readiness.ts"),
  resolve(slugDirectory, "reprise-readiness-tool.tsx"),
  resolve(
    repositoryRoot,
    "public/guides/reprendre-logiciel-metier-existant/reprise-logiciel-16x9.svg",
  ),
  resolve(
    repositoryRoot,
    "public/guides/reprendre-logiciel-metier-existant/reprise-logiciel-4x3.svg",
  ),
  resolve(
    repositoryRoot,
    "public/guides/reprendre-logiciel-metier-existant/reprise-logiciel-1x1.svg",
  ),
];

const publicCopy = publicCopyFiles
  .map((file) => readFileSync(file, "utf8"))
  .join("\n")
  .replace('export const runtime = "edge";', "");

const forbiddenPublicCopy = [
  /\bTMA\b/i,
  /\bartefacts?\b/i,
  /\bruntime\b/i,
  /\bCI\b/,
  /\btopologie\b/i,
  /\bregistres?\b/i,
  /\bbinaires?\b/i,
  /\bclone neuf\b/i,
  /\bSTOP HUMAIN\b/i,
  /\b(?:une|cinq) portes?\b/i,
  /\bcinq preuves avant la bascule\b/i,
  /\bdécision de reprise\s+—\s+une page\b/i,
  /\bfaites tenir la décision\b/i,
  /\btags?\b/i,
  /\bpaquets?\b/i,
  /\bURLs?\b(?!\()/i,
  /\bliste verrouillée\b/i,
  /\bcompte racine\b/i,
];

describe("public content quality for the takeover guide", () => {
  it.each(forbiddenPublicCopy)(
    "keeps forbidden jargon and the former editorial fingerprint out: %s",
    (pattern) => {
      expect(publicCopy).not.toMatch(pattern);
    },
  );

  it("expands DPO before using the abbreviation in each public source", () => {
    for (const file of publicCopyFiles) {
      const source = readFileSync(file, "utf8");
      const firstAbbreviation = source.indexOf("DPO");

      if (firstAbbreviation === -1) {
        continue;
      }

      const expansion = source.indexOf(
        "délégué à la protection des données (DPO)",
      );
      expect(expansion, file).toBeGreaterThanOrEqual(0);
      expect(expansion, file).toBeLessThanOrEqual(firstAbbreviation);
    }
  });

  it("names the guide method and its final record across key surfaces", () => {
    for (const file of [
      resolve(slugDirectory, "page.tsx"),
      resolve(slugDirectory, "opengraph-image.tsx"),
      ...publicCopyFiles.filter((file) => file.endsWith(".svg")),
    ]) {
      const source = readFileSync(file, "utf8").toLocaleLowerCase("fr");
      expect(source, file).toContain("test de relève");
      expect(source, file).toContain("procès-verbal de reprise");
    }
  });
});
