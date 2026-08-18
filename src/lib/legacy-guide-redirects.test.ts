import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import {
  getLegacyGuideDestination,
  LEGACY_GUIDE_SLUGS,
} from "./legacy-guide-redirects";

describe("legacy guide redirects", () => {
  it("keeps the reset inventory complete and unique", () => {
    expect(LEGACY_GUIDE_SLUGS).toHaveLength(97);
    expect(new Set(LEGACY_GUIDE_SLUGS).size).toBe(
      LEGACY_GUIDE_SLUGS.length,
    );
    expect(LEGACY_GUIDE_SLUGS).not.toContain(
      "automatiser-processus-metier",
    );
    expect(LEGACY_GUIDE_SLUGS).not.toContain(
      "valider-idee-saas-avant-developper",
    );
    expect(LEGACY_GUIDE_SLUGS).not.toContain("prix-gestion-google-ads");
    expect(LEGACY_GUIDE_SLUGS).not.toContain(
      "reprendre-logiciel-metier-existant",
    );
  });

  it("redirects only routes that actually existed", () => {
    expect(getLegacyGuideDestination("seo-local-pme")).toBe(
      "/services/referencement-google",
    );
    expect(getLegacyGuideDestination("google-ads-saas-b2b")).toBe(
      "/services/publicite-en-ligne",
    );
    expect(getLegacyGuideDestination("rgpd-saas-b2b")).toBe(
      "/services/securite-rgpd",
    );
    expect(getLegacyGuideDestination("une-url-inventee")).toBeNull();
  });

  it("always points a known legacy route to an active site route", () => {
    for (const slug of LEGACY_GUIDE_SLUGS) {
      const destination = getLegacyGuideDestination(slug);
      expect(destination, slug).toMatch(
        /^\/(?:guides|services\/[a-z0-9-]+)$/,
      );
      expect(
        fs.existsSync(
          path.join(
            process.cwd(),
            "src/app",
            destination!.replace(/^\//, ""),
            "page.tsx",
          ),
        ),
        `${slug} -> ${destination}`,
      ).toBe(true);
    }
  });

  it("does not keep internal links to a redirected guide", () => {
    const sourceRoot = path.join(process.cwd(), "src");
    const ignored = new Set([
      path.join(sourceRoot, "lib", "legacy-guide-redirects.ts"),
      path.join(sourceRoot, "lib", "legacy-guide-redirects.test.ts"),
    ]);
    const findings: string[] = [];

    const visit = (directory: string) => {
      for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
        const absolute = path.join(directory, entry.name);
        if (entry.isDirectory()) {
          visit(absolute);
          continue;
        }
        if (
          ignored.has(absolute) ||
          !/\.(?:ts|tsx)$/.test(entry.name)
        ) {
          continue;
        }

        const source = fs.readFileSync(absolute, "utf8");
        for (const slug of LEGACY_GUIDE_SLUGS) {
          if (source.includes(`/guides/${slug}`)) {
            findings.push(`${path.relative(process.cwd(), absolute)} -> ${slug}`);
          }
        }
      }
    };

    visit(sourceRoot);
    expect(findings).toEqual([]);
  });
});
