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
  QUENTIN_HAGNERE_ID,
  QUENTIN_HAGNERE_URL,
  WEBSITE_JSON_LD,
  WEBSITE_ID,
} from "@/lib/organization-structured-data";
import { SITE_URL } from "@/lib/seo";
import { SERVICE_LINKS } from "@/lib/services";
import { TEAM } from "@/lib/team";

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

let cachedPublicSources: string | undefined;

function publicSources(): string {
  cachedPublicSources ??= ["src/app", "src/components", "src/lib"]
    .flatMap((directory) => sourceFiles(path.join(projectRoot, directory)))
    .map((file) => fs.readFileSync(file, "utf8"))
    .join("\n");
  return cachedPublicSources;
}

describe("public structured data safeguards", () => {
  it("publishes no FAQPage markup for this non-eligible commercial site", () => {
    const sources = publicSources();

    expect(sources).not.toContain('"@type": "FAQPage"');
    expect(sources).not.toContain("faqJsonLd");
    expect(sources).not.toContain('"@type": "HowTo"');
    expect(sources).not.toContain('"@type": "HowToStep"');
    expect(sources).not.toMatch(/\bwordCount\s*:/);
    expect(sources).not.toMatch(/Tout validé Search Console/i);
  }, 30_000);

  it("never turns an imprecise case-study year into a fake January date", () => {
    const sources = publicSources();

    expect(sources).not.toMatch(/datePublished\s*:\s*`\$\{[^}]*\.year\}-01-01`/);

    for (const caseStudy of Object.values(CASES)) {
      const [article] = buildCaseStudyStructuredData(caseStudy);
      expect(article, caseStudy.slug).not.toHaveProperty("datePublished");
      expect(article, caseStudy.slug).not.toHaveProperty("dateModified");
      expect(article.author, caseStudy.slug).toEqual({ "@id": ORGANIZATION_ID });
      expect(article.publisher.url, caseStudy.slug).toBe(SITE_URL);
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
      expect(article.citation, caseStudy.slug).toBe(caseStudy.url);
      expect(article, caseStudy.slug).not.toHaveProperty("keywords");
      expect(JSON.stringify(article), caseStudy.slug).not.toMatch(
        /Drizzle|PostgreSQL|Tailwind|Meta Ads|multi[-‑ ]touch/i,
      );
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
  }, 30_000);

  it("uses one organization identity, the Bassens address and no obsolete SIRET", () => {
    const sources = publicSources();
    const organization = JSON.stringify(PUBLIC_ORGANIZATION_JSON_LD);

    expect(ORGANIZATION_ID).toBe(`${SITE_URL}/#organization`);
    expect(WEBSITE_ID).toBe(`${SITE_URL}/#website`);
    expect(WEBSITE_JSON_LD).toMatchObject({
      "@id": WEBSITE_ID,
      name: "Hagnéré Code",
      alternateName: "Hagnere Code",
      publisher: { "@id": ORGANIZATION_ID },
    });
    expect(QUENTIN_HAGNERE_ID).toBe(
      `${SITE_URL}/equipe#fondateur`,
    );
    expect(PUBLIC_ORGANIZATION_JSON_LD.founder).toMatchObject({
      "@id": QUENTIN_HAGNERE_ID,
      url: QUENTIN_HAGNERE_URL,
    });
    expect(sources).not.toContain(`${SITE_URL}/#business`);
    expect(organization).toContain("82 impasse de Bellevue");
    expect(organization).toContain("73000");
    expect(organization).toContain("Bassens");
    expect(organization).not.toContain("openingHoursSpecification");
    expect(organization).not.toMatch(/993\s?672\s?856\s?00016/);
    expect(sources).not.toMatch(/993\s?672\s?856\s?00016/);
    expect(organization).not.toContain("https://lmnp.ai");
    expect(organization).not.toContain("https://sci-ai.app");
    expect(organization).not.toContain("https://hagnere-patrimoine.fr");
    expect(organization).not.toContain("https://hagnere-investissement.fr");
    expect("sameAs" in PUBLIC_ORGANIZATION_JSON_LD).toBe(false);
    expect(PUBLIC_ORGANIZATION_JSON_LD).toMatchObject(
      PUBLIC_ORGANIZATION_ENTITY,
    );

    // Logo : Google demande au moins 112 px de côté et recommande la forme
    // ImageObject avec ses dimensions réelles plutôt qu'une simple URL.
    const logo = PUBLIC_ORGANIZATION_ENTITY.logo;
    expect(typeof logo).toBe("object");
    expect(logo).toMatchObject({ "@type": "ImageObject" });
    expect(logo.url).toBe(`${SITE_URL}/logos/logo-dark.png`);
    expect(Math.min(logo.width, logo.height)).toBeGreaterThanOrEqual(112);

    // Effectif dérivé du registre d'équipe : aucune valeur écrite à la main,
    // donc aucune dérive possible entre le schéma et les pages publiques.
    expect(PUBLIC_ORGANIZATION_ENTITY.numberOfEmployees.value).toBe(
      Object.keys(TEAM).length,
    );

    // Catalogue d'offres : strictement les services réellement publiés,
    // sans prix ni engagement, chacun rattaché à l'entité unique.
    const offers = PUBLIC_ORGANIZATION_ENTITY.hasOfferCatalog.itemListElement;
    expect(offers).toHaveLength(SERVICE_LINKS.length);
    for (const offer of offers) {
      expect(offer.itemOffered.provider).toEqual({ "@id": ORGANIZATION_ID });
      expect(offer.itemOffered.url.startsWith(`${SITE_URL}/services/`)).toBe(
        true,
      );
      expect("price" in offer).toBe(false);
      expect("priceSpecification" in offer).toBe(false);
    }
    expect(offers.map((offer) => offer.itemOffered.url)).toEqual(
      SERVICE_LINKS.map((service) => `${SITE_URL}${service.path}`),
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
