import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { verifyPublishedGuidesManifest } from "../../scripts/published-guides-manifest.mjs";
import { GUIDES } from "./guides";

const researchRoot = path.join(process.cwd(), "docs", "research");
const manifestsRoot = path.join(researchRoot, "manifests");
const allowedStatuses = ["draft", "review", "published"] as const;

describe("editorial governance gate", () => {
  it("requires an explicit closed-by-default status for every guide", () => {
    for (const guide of GUIDES) {
      expect(
        Object.hasOwn(guide, "editorialStatus"),
        `${guide.slug}: editorialStatus absent`,
      ).toBe(true);
      expect(
        allowedStatuses,
        `${guide.slug}: editorialStatus inconnu`,
      ).toContain(guide.editorialStatus);
    }
  });

  it("requires a versioned research dossier for every guide", () => {
    for (const guide of GUIDES) {
      const researchPath = path.join(researchRoot, `${guide.slug}.md`);
      expect(fs.existsSync(researchPath), researchPath).toBe(true);
      expect(fs.statSync(researchPath).size, researchPath).toBeGreaterThan(0);
    }
  });

  it("requires non-empty P1 through P4 manifests for every guide", () => {
    for (const guide of GUIDES) {
      for (const pass of [1, 2, 3, 4]) {
        const manifestPath = path.join(
          manifestsRoot,
          `${guide.slug}-p${pass}.sha256`,
        );
        expect(fs.existsSync(manifestPath), manifestPath).toBe(true);

        const manifest = fs.readFileSync(manifestPath, "utf8").trim();
        expect(manifest, manifestPath).not.toBe("");
        for (const line of manifest.split("\n")) {
          expect(line, manifestPath).toMatch(/^[a-f0-9]{64} {2}\S/);
        }
      }
    }
  });

  it("pins the exact current source and assets of the published corpus", () => {
    expect(verifyPublishedGuidesManifest(process.cwd())).toEqual({
      ok: true,
      reason: "snapshot exact",
    });
  });
});
