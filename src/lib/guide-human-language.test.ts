import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { getGuide, GUIDES } from "./guides";

const flagshipPath = join(
  process.cwd(),
  "src/app/guides/seo-ou-google-ads/page.tsx",
);

const flagshipSource = readFileSync(flagshipPath, "utf8");

const guideSources = GUIDES.map((guide) => ({
  guide,
  source: readFileSync(
    join(process.cwd(), "src/app/guides", guide.slug, "page.tsx"),
    "utf8",
  ),
}));

const july22PublicationSlugs = new Set([
  "landing-page-google-ads",
  "suivi-conversions-google-ads",
  "pourquoi-site-pas-visible-google",
  "cout-maintenance-application-metier",
  "reprendre-saas-developpe-par-freelance",
  "choisir-prestataire-application-metier",
  "cahier-des-charges-saas",
  "budget-google-ads-pme",
  "remplacer-microsoft-access-application-web",
  "preparer-contenus-site-vitrine",
]);

const rejectedFramework =
  /contrainte qui commande|contrainte dominante|portes non compensables|cinq portes|prochaine preuve|matrice d['’]arbitrage|tranche verticale|socles chiffrés|chaîne jusqu['’]au résultat métier|comité d['’]investissement|report ciblé/i;

const consultantJargon =
  /\b(cadrage|périmètre|preuve|socle|arbitrage|gouvernance|réversibilité|criticité|recette|jalon|livrable|trajectoire|activation)\b/i;

function visibleWords(source: string): string[] {
  return source
    .replace(/<[^>]+>/g, " ")
    .replace(/\{[^}]*\}/g, " ")
    .replace(/&[a-z]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
}

describe("human language guardrails for guides", () => {
  it("keeps the SEO versus Ads opening in the reader's language", () => {
    expect(flagshipSource).toMatch(
      /Vous cherchez à savoir s’il vaut mieux investir dans le\s+référencement/,
    );
    expect(flagshipSource).toMatch(
      /Google Ads — payer pour afficher des\s+annonces/,
    );
  });

  it("does not reintroduce the rejected consultant framework", () => {
    const rejectedPhrases = [
      "contrainte qui commande",
      "contrainte dominante",
      "cinq portes",
      "portes non compensables",
      "prochaine preuve",
      "matrice d’arbitrage",
      "report ciblé",
      "comité d’investissement",
      "chaîne jusqu’au résultat métier",
    ];

    for (const phrase of rejectedPhrases) {
      expect(flagshipSource.toLowerCase()).not.toContain(phrase.toLowerCase());
    }
  });

  it("keeps every published guide free of the rejected framework", () => {
    for (const { guide, source } of guideSources) {
      expect(source, guide.slug).not.toMatch(rejectedFramework);
    }
  });

  it("gives every guide a short introduction addressed to the reader", () => {
    const readerLanguage =
      /\b(vous|votre|vos|comparez|choisissez|découvrez|vérifiez|prévoyez|ajoutez|distinguez|séparez)\b/i;

    for (const { guide, source } of guideSources) {
      const heroDescription = source.match(/heroDescription="([^"]+)"/)?.[1];

      expect(heroDescription, `${guide.slug}: heroDescription`).toBeDefined();
      expect(heroDescription, `${guide.slug}: reader language`).toMatch(
        readerLanguage,
      );
      expect(
        heroDescription?.length,
        `${guide.slug}: hero length`,
      ).toBeLessThan(330);
    }
  });

  it("starts every article with a direct, reader-facing lead under 150 words", () => {
    const readerLanguage = /\b(vous|votre|vos)\b/i;

    for (const { guide, source } of guideSources) {
      const lead = source.match(/<p className="lead">([\s\S]*?)<\/p>/)?.[1];

      expect(lead, `${guide.slug}: lead`).toBeDefined();
      expect(lead, `${guide.slug}: reader-facing lead`).toMatch(readerLanguage);
      expect(
        visibleWords(lead || "").length,
        `${guide.slug}: lead length`,
      ).toBeLessThanOrEqual(150);
      expect(lead, `${guide.slug}: consultant jargon in lead`).not.toMatch(
        consultantJargon,
      );
    }
  });

  it("keeps the hero free of untranslated consultant language", () => {
    for (const { guide, source } of guideSources) {
      const heroDescription = source.match(/heroDescription="([^"]+)"/)?.[1];

      expect(heroDescription, `${guide.slug}: heroDescription`).toBeDefined();
      expect(
        heroDescription,
        `${guide.slug}: consultant jargon in hero`,
      ).not.toMatch(consultantJargon);
    }
  });

  it("keeps section titles understandable without agency vocabulary", () => {
    for (const { guide, source } of guideSources) {
      const sectionTitles = Array.from(
        source.matchAll(/<h[23]\b[^>]*>([\s\S]*?)<\/h[23]>/g),
        (match) =>
          match[1]
            .replace(/<[^>]+>/g, " ")
            .replace(/\{[^}]*\}/g, " ")
            .replace(/\s+/g, " ")
            .trim(),
      );

      for (const title of sectionTitles) {
        expect(title, `${guide.slug}: section title`).not.toMatch(
          consultantJargon,
        );
      }
    }
  });

  it("does not copy the same opening or section plan between guides", () => {
    const openings = new Map<string, string>();
    const plans = new Map<string, string>();

    for (const { guide, source } of guideSources) {
      const lead = source
        .match(/<p className="lead">([\s\S]*?)<\/p>/)?.[1]
        .replace(/<[^>]+>/g, " ")
        .replace(/\{[^}]*\}/g, " ")
        .replace(/\s+/g, " ")
        .trim()
        .toLowerCase();
      const headings = Array.from(
        source.matchAll(/<h2\b[^>]*>([\s\S]*?)<\/h2>/g),
        (match) =>
          match[1]
            .replace(/<[^>]+>/g, " ")
            .replace(/\{[^}]*\}/g, " ")
            .replace(/^\s*\d+[.)]?\s*/, "")
            .replace(/\s+/g, " ")
            .trim()
            .toLowerCase(),
      ).join(" | ");

      expect(lead, `${guide.slug}: opening`).toBeTruthy();
      expect(headings, `${guide.slug}: section plan`).toBeTruthy();
      expect(
        openings.get(lead || ""),
        `${guide.slug}: copied opening`,
      ).toBeUndefined();
      expect(
        plans.get(headings),
        `${guide.slug}: copied section plan`,
      ).toBeUndefined();

      openings.set(lead || "", guide.slug);
      plans.set(headings, guide.slug);
    }
  });

  it("does not repeat the old mechanical example and contact boilerplate", () => {
    const rejectedBoilerplate =
      /fil rouge|décrivez votre projet en 3 minutes|prochain jour ouvré/i;

    for (const { guide, source } of guideSources) {
      expect(source, guide.slug).not.toMatch(rejectedBoilerplate);
    }
  });

  it("does not impose the same mechanical ending on every guide", () => {
    const rejectedEnding =
      /(?:la réponse|le verdict) en 30 secondes|à retenir\s*:\s*les \d+|décider en cinq (?:étapes|questions)/i;

    for (const { guide, source } of guideSources) {
      expect(source, guide.slug).not.toMatch(rejectedEnding);
    }
  });

  it("keeps editorial pressure proportionate", () => {
    for (const { guide, source } of guideSources) {
      const inlineCtas = source.match(/<GuideInlineCTA\b/g) || [];
      const faqBlock = source.match(
        /const faqItems\s*=\s*\[([\s\S]*?)\n\];/,
      )?.[1];
      const faqCount = faqBlock?.match(/\bquestion:\s*["']/g)?.length || 0;

      expect(faqBlock, `${guide.slug}: FAQ block`).toBeDefined();
      expect(
        inlineCtas.length,
        `${guide.slug}: inline CTAs`,
      ).toBeLessThanOrEqual(1);
      expect(faqCount, `${guide.slug}: FAQ count`).toBeLessThanOrEqual(10);

      if (inlineCtas.length === 1) {
        const ctaIndex = source.indexOf("<GuideInlineCTA");
        const headingsBeforeCta =
          source.slice(0, ctaIndex).match(/<h2\b/g)?.length || 0;
        const headingCount = source.match(/<h2\b/g)?.length || 0;

        expect(
          headingsBeforeCta,
          `${guide.slug}: CTA before sufficient standalone value`,
        ).toBeGreaterThanOrEqual(Math.ceil(headingCount / 2));
      }
    }
  });

  it("keeps search titles, summaries and public cards concise", () => {
    for (const guide of GUIDES) {
      expect(guide.title.length, `${guide.slug}: title`).toBeLessThanOrEqual(
        60,
      );
      expect(
        guide.metaDescription.length,
        `${guide.slug}: meta description`,
      ).toBeLessThanOrEqual(155);
      const expectedReviewDate = july22PublicationSlugs.has(guide.slug)
        ? "2026-07-22"
        : "2026-07-21";
      expect(guide.dateModified, `${guide.slug}: review date`).toBe(
        expectedReviewDate,
      );

      const publicCopy = [
        guide.title,
        guide.cardTitle,
        guide.metaDescription,
        guide.cardDescription,
        guide.heroTitle,
      ].join(" ");

      expect(publicCopy, guide.slug).not.toMatch(rejectedFramework);
    }
  });

  it("shows the actual review date on every article", () => {
    for (const { guide, source } of guideSources) {
      expect(source, `${guide.slug}: updated label`).toMatch(
        /updatedLabel=\{[^\n]*dateModified[^\n]*\}/,
      );
      expect(
        source,
        `${guide.slug}: published date used as review date`,
      ).not.toMatch(/updatedLabel=\{[^\n]*datePublished[^\n]*\}/);
    }
  });

  it("limits editorial comparison tables to three columns", () => {
    for (const { guide, source } of guideSources) {
      const headerBlocks = source.matchAll(
        /<GuideTable[\s\S]*?headers=\{\[([\s\S]*?)\]\}/g,
      );

      for (const match of headerBlocks) {
        const headers = match[1].match(/(["'])(?:\\.|(?!\1)[\s\S])*?\1/g) || [];
        expect(
          headers.length,
          `${guide.slug}: table columns`,
        ).toBeLessThanOrEqual(3);
      }
    }
  });

  it("uses mobile-readable comparisons instead of wide guide tables", () => {
    expect(flagshipSource).not.toContain("<GuideTable");
    expect(flagshipSource).toContain("md:grid-cols-2");
  });

  it("keeps the public card and metadata free of the rejected vocabulary", () => {
    const guide = getGuide("seo-ou-google-ads");
    const publicCopy = [
      guide.metaDescription,
      guide.cardDescription,
      guide.heroTitle,
    ].join(" ");

    expect(publicCopy).not.toMatch(
      /preuve|matrice|contrainte dominante|report ciblé/i,
    );
  });
});
