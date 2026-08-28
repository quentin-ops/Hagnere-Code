import { describe, expect, it } from "vitest";
import sitemap from "@/app/sitemap";
import { GUIDES, PUBLISHED_GUIDES } from "./guides";
import {
  buildLlmsText,
  LLMS_CORE_LINKS,
  LLMS_LEGAL_LINKS,
  LLMS_SERVICE_LINKS,
  LLMS_STACK_LINKS,
  LLMS_TOOL_LINKS,
} from "./llms";
import { DOWNLOADABLE_RESOURCES } from "./resources";
import { SITE_URL } from "./seo";
import { WHITE_PAPERS } from "./white-papers";

const markdownUrls = (text: string): string[] =>
  Array.from(text.matchAll(/\]\((https:\/\/[^)]+)\)/g), (match) => match[1]);

/**
 * `buildLlmsText` normalise les espaces via `markdownText` : une espace
 * insécable présente dans un titre de registre devient une espace ordinaire
 * dans le fichier publié. La comparaison doit appliquer la même normalisation,
 * sinon tout titre contenant « ? » ou « : » précédé d'une insécable échoue.
 */
const normalizeForLlms = (value: string): string =>
  value.replace(/\s+/g, " ").replace(/[[\]]/g, "").trim();

describe("llms.txt", () => {
  const text = buildLlmsText();
  const urls = markdownUrls(text);

  it("publishes a concise, honest description of its role", () => {
    expect(text).toMatch(/^# Hagnéré Code\n/);
    expect(text).toContain("Les autorisations de crawl sont définies par robots.txt");
    expect(text).toContain("Il ne garantit ni indexation, ni classement, ni citation");
    expect(text).toContain(
      "aucun impact positif ou négatif sur sa visibilité ou son classement",
    );
    expect(text).not.toContain("llms-full");
  });

  it("lists every guide that passed human review exactly once", () => {
    for (const guide of PUBLISHED_GUIDES) {
      const url = `${SITE_URL}/guides/${guide.slug}`;
      expect(urls.filter((candidate) => candidate === url), guide.slug).toHaveLength(1);
      expect(text, guide.slug).toContain(normalizeForLlms(guide.cardTitle));
      expect(text, guide.slug).toContain(`Mise à jour réelle : ${guide.dateModified}.`);
    }

    for (const guide of GUIDES.filter(
      (entry) => entry.editorialStatus !== "published",
    )) {
      expect(urls).not.toContain(`${SITE_URL}/guides/${guide.slug}`);
    }
  });

  it("lists every white paper and resource landing page, never a binary download", () => {
    for (const entry of WHITE_PAPERS) {
      expect(urls, entry.slug).toContain(`${SITE_URL}${entry.path}`);
      expect(urls, entry.slug).not.toContain(`${SITE_URL}${entry.pdf.href}`);
    }

    for (const resource of DOWNLOADABLE_RESOURCES) {
      expect(urls, resource.id).toContain(`${SITE_URL}${resource.path}`);
      expect(urls, resource.id).not.toContain(`${SITE_URL}${resource.primary.href}`);
    }
  });

  it("stays aligned with every service landing page in the sitemap", () => {
    const sitemapServices = sitemap()
      .map((entry) => entry.url)
      .filter((url) => url.startsWith(`${SITE_URL}/services/`))
      .sort();
    const llmsServices = LLMS_SERVICE_LINKS.map(
      (entry) => `${SITE_URL}${entry.path}`,
    ).sort();

    expect(llmsServices).toEqual(sitemapServices);
  });

  it("contains only unique canonical HTTPS links already declared in the sitemap", () => {
    const sitemapUrls = new Set(sitemap().map((entry) => entry.url));
    expect(new Set(urls).size).toBe(urls.length);

    for (const url of urls) {
      expect(url).toMatch(/^https:\/\/hagnere-code\.ai(?:\/|$)/);
      expect(sitemapUrls.has(url), url).toBe(true);
    }

    const declaredLinks = [
      ...LLMS_CORE_LINKS,
      ...LLMS_SERVICE_LINKS,
      ...LLMS_STACK_LINKS,
      ...LLMS_TOOL_LINKS,
      ...LLMS_LEGAL_LINKS,
    ];
    expect(declaredLinks.every((entry) => entry.path.startsWith("/"))).toBe(true);
  });

  /**
   * Invariant inversé : la liste d'INCLUSIONS ne protège de rien (une page
   * ajoutée au sitemap reste invisible de llms.txt sans qu'aucun test ne le
   * remarque — c'est ainsi que /tarifs, les trois pages locales et les quatre
   * analyses avaient disparu de l'index). On exige donc la couverture
   * complète du sitemap, avec une liste d'EXCLUSIONS explicites et justifiées.
   */
  it("publishes every sitemap URL, save the explicitly excluded ones", () => {
    const EXCLUDED_FROM_LLMS: { url: string; reason: string }[] = [];
    const excluded = new Set(EXCLUDED_FROM_LLMS.map((entry) => entry.url));
    const published = new Set(urls);

    const missing = sitemap()
      .map((entry) => entry.url)
      .filter((url) => !published.has(url) && !excluded.has(url));

    expect(missing).toEqual([]);

    // Une exclusion doit rester une décision, pas un oubli : toute entrée de
    // la liste doit encore exister dans le sitemap et porter une raison.
    const sitemapUrls = new Set(sitemap().map((entry) => entry.url));
    for (const entry of EXCLUDED_FROM_LLMS) {
      expect(sitemapUrls.has(entry.url), entry.url).toBe(true);
      expect(entry.reason.length, entry.url).toBeGreaterThan(0);
    }
  });
});
