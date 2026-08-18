import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { renderToStaticMarkup } from "react-dom/server";
import { afterEach, describe, expect, it, vi } from "vitest";
import { buildGuideStructuredData } from "@/lib/guide-page-seo";
import { getGuide, guideRobots, PUBLISHED_GUIDES } from "@/lib/guides";
import Page, { metadata } from "./page";

const slugDirectory = dirname(fileURLToPath(import.meta.url));
const pageSource = readFileSync(resolve(slugDirectory, "page.tsx"), "utf8");
const toolSource = readFileSync(
  resolve(
    slugDirectory,
    "../../../components/guides/SearchVisibilityDiagnostic.tsx",
  ),
  "utf8",
);
const renderedPage = renderToStaticMarkup(Page());
const guide = getGuide("pourquoi-site-pas-visible-google");
const structuredData = buildGuideStructuredData(
  guide,
  "Pourquoi mon site n’est pas visible sur Google",
);
const articleImagePaths = [
  "/guides/pourquoi-site-pas-visible-google/diagnostic-google-16x9.svg",
  "/guides/pourquoi-site-pas-visible-google/diagnostic-google-4x3.svg",
  "/guides/pourquoi-site-pas-visible-google/diagnostic-google-1x1.svg",
] as const;
const articleImageDimensions = [
  [1600, 900],
  [1200, 900],
  [1200, 1200],
] as const;

function visibleText(html: string) {
  return html
    .replace(
      /<(script|style|template|noscript|svg)\b[^>]*>[\s\S]*?<\/\1>/gi,
      " ",
    )
    .replace(/<[^>]+>/g, " ")
    .replace(/&#(?:x[0-9a-f]+|[0-9]+);/gi, " ")
    .replace(/&[a-z]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

afterEach(() => {
  vi.unstubAllEnvs();
});

describe("P1 content quality for Google search visibility", () => {
  it("publishes the approved guide while keeping local previews private", () => {
    expect(guide.editorialStatus).toBe("published");
    expect(PUBLISHED_GUIDES.some((item) => item.slug === guide.slug)).toBe(
      true,
    );
    expect(metadata.robots).toMatchObject({ index: false, follow: false });

    vi.stubEnv("NEXT_PUBLIC_ENV", "production");
    expect(guideRobots(guide)).toMatchObject({ index: true, follow: true });
  });

  it("keeps title, H1, canonical and structured data centralized", () => {
    const h1 = renderedPage.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/)?.[1] ?? "";
    expect(visibleText(h1)).toBe(guide.heroTitle);
    expect(metadata.title).toBe(guide.title);
    expect(metadata.alternates?.canonical).toBe(
      "https://hagnere-code.ai/guides/pourquoi-site-pas-visible-google",
    );
    expect(structuredData.map((item) => item["@type"])).toEqual([
      "Article",
      "BreadcrumbList",
    ]);
    expect(structuredData[0]).toMatchObject({
      headline: guide.heroTitle,
      description: guide.metaDescription,
      datePublished: guide.datePublished,
      dateModified: guide.dateModified,
    });
  });

  it("ships three deterministic Article images and renders the 16:9 illustration", () => {
    expect(guide.articleImagePaths).toEqual(articleImagePaths);
    expect(structuredData[0].image).toEqual(
      articleImagePaths.map((path) => `https://hagnere-code.ai${path}`),
    );

    articleImagePaths.forEach((imagePath, index) => {
      const source = readFileSync(
        resolve(slugDirectory, "../../../../public", imagePath.slice(1)),
        "utf8",
      );
      const [width, height] = articleImageDimensions[index];
      expect(source).toContain(`width="${width}" height="${height}"`);
      expect(source).toContain(`viewBox="0 0 ${width} ${height}"`);
      expect(source).toContain("<title id=\"title\">");
      expect(source).toContain("<desc id=\"desc\">");
      expect(source).not.toMatch(/<text\b/i);
    });

    expect(renderedPage).toContain("diagnostic-google-16x9.svg");
    expect(renderedPage).toContain(
      "Une fiche avec une URL et une recherche reliée aux contrôles d’exploration, d’indexation, d’impressions et de clics",
    );

    const generator = readFileSync(
      resolve(
        slugDirectory,
        "../../../../scripts/generate-search-visibility-article-images.mjs",
      ),
      "utf8",
    );
    for (const imagePath of articleImagePaths) {
      expect(generator).toContain(imagePath.split("/").at(-1));
    }
  });

  it("answers with the URL-to-click path in the opening", () => {
    const articleText = visibleText(
      renderedPage.match(/<article\b[^>]*>([\s\S]*?)<\/article>/)?.[1] ?? "",
    );
    const opening = articleText.split(/\s+/).slice(0, 150).join(" ");
    for (const marker of ["URL", "explor", "index", "impression", "clic"]) {
      expect(opening.toLocaleLowerCase("fr")).toContain(
        marker.toLocaleLowerCase("fr"),
      );
    }
  });

  it("uses only official Google domains for external technical links", () => {
    const externalHosts = [...pageSource.matchAll(/href="(https:[^"]+)"/g)].map(
      (match) => new URL(match[1]).hostname,
    );
    expect(externalHosts.length).toBeGreaterThanOrEqual(8);
    expect(
      externalHosts.every((host) =>
        ["developers.google.com", "support.google.com"].includes(host),
      ),
    ).toBe(true);
  });

  it("keeps one four-control local artifact without public internal codes", () => {
    expect(pageSource.match(/<SearchVisibilityDiagnostic \/>/g)).toHaveLength(
      1,
    );
    expect(toolSource).toContain("Les quatre contrôles, dans l’ordre");
    expect(renderedPage.match(/<fieldset\b/g)).toHaveLength(4);
    expect(visibleText(renderedPage)).not.toMatch(
      /crawl-success|not-indexed|visible-impressions|zero-visible-clicks/,
    );
    expect(toolSource).not.toMatch(
      /\bfetch\s*\(|XMLHttpRequest|localStorage|sessionStorage|document\.cookie/,
    );
  });

  it("preserves the indexed/live split and canonical performance limits", () => {
    const text = visibleText(renderedPage).toLocaleLowerCase("fr");
    for (const marker of [
      "le test en direct ne prouve pas l’indexation",
      "attribue la plupart des impressions et clics à",
      "robots.txt peut empêcher googlebot de voir le noindex",
      "la recherche exacte — appelée « requête » dans le rapport — vient en dernier",
      "requêtes anonymisées ne sont plus comprises dans le total filtré",
    ]) {
      expect(text).toContain(marker.toLocaleLowerCase("fr"));
    }
  });

  it("uses concrete public wording for the intervention and index analysis", () => {
    const text = visibleText(renderedPage).toLocaleLowerCase("fr");
    for (const marker of [
      "balises principales",
      "vérifications prévues par écrit",
      "une analyse de référencement google devient plus utile",
    ]) {
      expect(text).toContain(marker.toLocaleLowerCase("fr"));
    }
    expect(text).not.toMatch(
      /signaux de la page|périmètre écrit avant intervention|le périmètre relève/,
    );
  });

  it("keeps production markers and decorative sample numbers out of the visible copy", () => {
    const text = visibleText(renderedPage);
    expect(text).not.toMatch(/\b(?:STOP|NO_GO|PASSE_[1-4]|GATE_P[1-4])\b/i);
    expect(text).not.toMatch(
      /guide ultime|approche complète|expertise unique|il convient de|en outre/i,
    );
    expect(toolSource).not.toMatch(
      /page seule 120 impressions|54 impressions|1 clic visible sur les mêmes 28 jours/,
    );
    expect(text).toContain(
      "Ce guide localise un blocage ; il ne promet aucun classement",
    );
  });

  it("stops before the future indexed-without-traffic guide", () => {
    expect(pageSource).toContain(
      "Le guide s’arrête avant « indexé mais sans trafic »",
    );
    expect(pageSource).not.toMatch(/href=.*site-indexe-sans-trafic/);
    expect(pageSource).not.toMatch(
      /position garantie|délai garanti de classement/i,
    );
  });
});
