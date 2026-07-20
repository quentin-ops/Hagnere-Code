import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import renderCaseStudyOpenGraphImage from "@/app/realisations/[slug]/opengraph-image";
import { CASES } from "@/components/realisations/cases";
import { buildCaseStudyStructuredData } from "@/lib/case-study-structured-data";
import {
  ORGANIZATION_ID,
  PUBLIC_ORGANIZATION_ENTITY,
  PUBLIC_ORGANIZATION_JSON_LD,
} from "@/lib/organization-structured-data";
import { SITE_URL } from "@/lib/seo";

const projectRoot = process.cwd();

function read(relativePath: string): string {
  return fs.readFileSync(path.join(projectRoot, relativePath), "utf8");
}

function sourceFiles(directory: string): string[] {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const absolutePath = path.join(directory, entry.name);
    if (entry.isDirectory()) return sourceFiles(absolutePath);
    if (!entry.name.match(/\.(?:ts|tsx)$/) || entry.name.match(/\.test\.(?:ts|tsx)$/)) {
      return [];
    }
    return [absolutePath];
  });
}

describe("public structured data safeguards", () => {
  it("publishes no FAQPage markup after Google removed support in May 2026", () => {
    const publicSources = ["src/app", "src/components", "src/lib"]
      .flatMap((directory) => sourceFiles(path.join(projectRoot, directory)))
      .map((file) => fs.readFileSync(file, "utf8"))
      .join("\n");

    expect(publicSources).not.toContain('"@type": "FAQPage"');
    expect(publicSources).not.toContain("faqJsonLd");
    expect(publicSources).not.toContain('"@type": "HowTo"');
    expect(publicSources).not.toContain('"@type": "HowToStep"');
    expect(publicSources).not.toMatch(/Tout validé Search Console/i);
  });

  it("never turns an imprecise case-study year into a fake January date", () => {
    const publicSources = ["src/app", "src/components", "src/lib"]
      .flatMap((directory) => sourceFiles(path.join(projectRoot, directory)))
      .map((file) => fs.readFileSync(file, "utf8"))
      .join("\n");

    expect(publicSources).not.toMatch(/datePublished\s*:\s*`\$\{[^}]*\.year\}-01-01`/);

    for (const caseStudy of Object.values(CASES)) {
      const [article] = buildCaseStudyStructuredData(caseStudy);
      expect(article, caseStudy.slug).not.toHaveProperty("datePublished");
      expect(article, caseStudy.slug).not.toHaveProperty("dateModified");
      expect(article.author.url, caseStudy.slug).toBe(SITE_URL);
      expect(article.image, caseStudy.slug).toBe(
        `${SITE_URL}/realisations/${caseStudy.slug}/opengraph-image`,
      );
      expect(article.about, caseStudy.slug).toMatchObject({
        "@type":
          caseStudy.slug === "lmnp-ai" || caseStudy.slug === "sci-ai"
            ? "SoftwareApplication"
            : "WebSite",
        name: caseStudy.brandName,
        url: caseStudy.url,
      });
    }

    expect(
      fs.existsSync(
        path.join(projectRoot, "src/app/realisations/[slug]/opengraph-image.tsx"),
      ),
    ).toBe(true);
  });

  it("renders a valid dedicated social image for every case study", async () => {
    for (const slug of Object.keys(CASES)) {
      const response = await renderCaseStudyOpenGraphImage({
        params: Promise.resolve({ slug }),
      });
      const image = await response.arrayBuffer();

      expect(response.status, slug).toBe(200);
      expect(response.headers.get("content-type"), slug).toBe("image/png");
      expect(image.byteLength, slug).toBeGreaterThan(10_000);
    }
  });

  it("uses one organization identity, the Bassens address and no obsolete SIRET", () => {
    const publicSources = ["src/app", "src/components", "src/lib"]
      .flatMap((directory) => sourceFiles(path.join(projectRoot, directory)))
      .map((file) => fs.readFileSync(file, "utf8"))
      .join("\n");
    const organization = JSON.stringify(PUBLIC_ORGANIZATION_JSON_LD);

    expect(ORGANIZATION_ID).toBe(`${SITE_URL}/#organization`);
    expect(publicSources).not.toContain(`${SITE_URL}/#business`);
    expect(organization).toContain("82 impasse de Bellevue");
    expect(organization).toContain("73000");
    expect(organization).toContain("Bassens");
    expect(organization).not.toContain("openingHoursSpecification");
    expect(organization).not.toMatch(/993\s?672\s?856\s?00016/);
    expect(publicSources).not.toMatch(/993\s?672\s?856\s?00016/);
    expect(organization).not.toContain("https://lmnp.ai");
    expect(organization).not.toContain("https://sci-ai.app");
    expect(organization).not.toContain("https://hagnere-patrimoine.fr");
    expect(organization).not.toContain("https://hagnere-investissement.fr");
    expect("sameAs" in PUBLIC_ORGANIZATION_JSON_LD).toBe(false);
    expect(PUBLIC_ORGANIZATION_JSON_LD).toMatchObject(
      PUBLIC_ORGANIZATION_ENTITY,
    );

    const contactSource = read("src/app/contact/page.tsx");
    const agencySource = read("src/app/agence/page.tsx");
    const teamSource = read("src/app/equipe/page.tsx");
    const pricingSource = read("src/app/tarifs/page.tsx");
    expect(contactSource).toContain("mainEntity: PUBLIC_ORGANIZATION_ENTITY");
    expect(agencySource).toContain(
      "JSON.stringify(PUBLIC_ORGANIZATION_JSON_LD)",
    );
    expect(teamSource).toContain("...PUBLIC_ORGANIZATION_JSON_LD");
    expect(pricingSource).toContain("...PUBLIC_ORGANIZATION_JSON_LD");
    expect(teamSource).not.toContain('jobTitle: "Gérant');
  });
});
