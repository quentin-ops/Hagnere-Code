import fs from "node:fs";
import path from "node:path";
import { afterEach, describe, expect, it, vi } from "vitest";
import {
  GUIDES_COLLECTION_ID,
  buildGuideStructuredData,
} from "./guide-page-seo";
import { GUIDES, PUBLISHED_GUIDES, guideRobots } from "./guides";
import {
  ORGANIZATION_ID,
  QUENTIN_HAGNERE_ID,
} from "./organization-structured-data";
import { SITE_URL } from "./seo";

const guidesRoot = path.join(process.cwd(), "src/app/guides");
const guidesHubSource = fs.readFileSync(
  path.join(process.cwd(), "src/components/guides/GuidesHubPage.tsx"),
  "utf8",
);
const repriseGuideSource = fs.readFileSync(
  path.join(
    process.cwd(),
    "src/app/guides/reprendre-logiciel-metier-existant/page.tsx",
  ),
  "utf8",
);
const outilsScenariosSource = fs.readFileSync(
  path.join(
    process.cwd(),
    "src/components/outils-internes/sections/scenarios.ts",
  ),
  "utf8",
);

afterEach(() => {
  vi.unstubAllEnvs();
});

describe("guide registry after the editorial reset", () => {
  it("registers rebuilt guides but publishes only approved guides", () => {
    expect(GUIDES.map((guide) => guide.slug)).toEqual([
      "automatiser-processus-metier",
      "valider-idee-saas-avant-developper",
      "reprendre-logiciel-metier-existant",
      "migrer-logiciel-metier-sans-interruption",
    ]);
    expect(PUBLISHED_GUIDES.map((guide) => guide.slug)).toEqual([
      "automatiser-processus-metier",
      "valider-idee-saas-avant-developper",
    ]);
  });

  it("links the migration guide from the takeover guide and service context", () => {
    const migrationPath = "/guides/migrer-logiciel-metier-sans-interruption";

    expect(repriseGuideSource).toContain(migrationPath);
    expect(outilsScenariosSource).toContain(migrationPath);
  });

  it("keeps metadata unique, dated and restrained", () => {
    for (const key of ["slug", "title", "metaDescription"] as const) {
      const values = GUIDES.map((guide) => guide[key]);
      expect(new Set(values).size, key).toBe(values.length);
    }

    for (const guide of GUIDES) {
      expect(guide.title.length, `${guide.slug}: title`).toBeLessThanOrEqual(
        65,
      );
      expect(
        guide.metaDescription.length,
        `${guide.slug}: description`,
      ).toBeLessThanOrEqual(160);
      expect(guide.datePublished).toMatch(
        /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:Z|[+-]\d{2}:\d{2})$/,
      );
      expect(guide.dateModified).toMatch(
        /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:Z|[+-]\d{2}:\d{2})$/,
      );
      expect(Date.parse(guide.dateModified)).toBeGreaterThanOrEqual(
        Date.parse(guide.datePublished),
      );
      expect(guide.readTimeMin).toBeGreaterThan(0);
      expect(guide.articleImagePaths).toHaveLength(3);
    }
  });

  it("matches the static guide routes and their social images", () => {
    const registered = GUIDES.map((guide) => guide.slug).sort();
    const routed = fs
      .readdirSync(guidesRoot, { withFileTypes: true })
      .filter(
        (entry) =>
          entry.isDirectory() &&
          entry.name !== "[slug]" &&
          fs.existsSync(path.join(guidesRoot, entry.name, "page.tsx")),
      )
      .map((entry) => entry.name)
      .sort();

    expect(routed).toEqual(registered);

    for (const slug of registered) {
      expect(
        fs.existsSync(path.join(guidesRoot, slug, "opengraph-image.tsx")),
        slug,
      ).toBe(true);

      const guide = GUIDES.find((entry) => entry.slug === slug);
      for (const imagePath of guide?.articleImagePaths ?? []) {
        expect(
          fs.existsSync(
            path.join(process.cwd(), "public", imagePath.replace(/^\//, "")),
          ),
          imagePath,
        ).toBe(true);
      }
    }
  });

  it("assigns every rebuilt guide to a named hub collection and icon", () => {
    for (const guide of GUIDES) {
      expect(guidesHubSource, `${guide.slug}: collection`).toContain(
        `section: "${guide.section}"`,
      );
      expect(guidesHubSource, `${guide.slug}: icon`).toContain(
        `"${guide.slug}":`,
      );
    }
  });

  it("keeps visible guides free of unsupported schemas and fake experience", () => {
    const prohibited = [
      /FAQPage/,
      /HowTo/,
      /AggregateRating/,
      /wordCount/,
      /notre client/i,
      /cas client réel/i,
      /nous a contactés/i,
      /nous avons conseillé/i,
      /guide ultime/i,
      /meilleur guide de France/i,
      /\.xlsx?\b/i,
      /\.csv\b/i,
    ] as const;

    for (const guide of GUIDES) {
      const source = fs.readFileSync(
        path.join(guidesRoot, guide.slug, "page.tsx"),
        "utf8",
      );
      const [article, breadcrumb] = buildGuideStructuredData(
        guide,
        "Titre du fil d’Ariane",
      );

      expect(source, guide.slug).toContain("buildGuideStructuredData");
      expect(article["@type"], guide.slug).toBe("Article");
      expect(article.headline, guide.slug).toBe(guide.heroTitle);
      expect(article.author["@id"], guide.slug).toBe(QUENTIN_HAGNERE_ID);
      expect(article.publisher["@id"], guide.slug).toBe(ORGANIZATION_ID);
      expect(article.isPartOf["@id"], guide.slug).toBe(GUIDES_COLLECTION_ID);
      expect(article["@id"], guide.slug).toBe(
        `${SITE_URL}/guides/${guide.slug}#article`,
      );
      expect(article.image, guide.slug).toEqual(
        guide.articleImagePaths?.map((imagePath) => `${SITE_URL}${imagePath}`),
      );
      expect(breadcrumb["@type"], guide.slug).toBe("BreadcrumbList");

      for (const pattern of prohibited) {
        expect(source, `${guide.slug}: ${pattern}`).not.toMatch(pattern);
      }
    }
  });

  it("indexes approved guides only in production", () => {
    const guide = PUBLISHED_GUIDES[0];
    expect(guide).toBeDefined();

    vi.stubEnv("VERCEL_ENV", "");
    vi.stubEnv("NEXT_PUBLIC_ENV", "preview");
    expect(guideRobots(guide)).toEqual({
      index: false,
      follow: false,
    });

    vi.stubEnv("NEXT_PUBLIC_ENV", "production");
    expect(guideRobots(guide)).toMatchObject({
      index: true,
      follow: true,
      googleBot: {
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    });
    expect(
      guideRobots({
        ...guide,
        editorialStatus: "ready-for-human-review",
      }),
    ).toEqual({ index: false, follow: false });
  });
});
