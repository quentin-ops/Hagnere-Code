import { describe, expect, it } from "vitest";
import sitemap from "@/app/sitemap";
import { GUIDES, PUBLISHED_GUIDES } from "@/lib/guides";
import { getLegacyGuideDestination } from "@/lib/legacy-guide-redirects";
import { buildLlmsText } from "@/lib/llms";
import { metadata } from "./page";

const slug = "calculer-roi-application-metier";

describe("publication integration for the application ROI guide", () => {
  it("serves the dedicated route without a legacy redirect", () => {
    expect(getLegacyGuideDestination(slug)).toBeNull();
  });

  it("keeps the safe non-production robots default and the canonical URL", () => {
    expect(metadata.robots).toMatchObject({
      index: false,
      follow: false,
    });
    expect(metadata.alternates?.canonical).toContain(`/guides/${slug}`);
  });

  it("publishes the approved guide through the registry, sitemap and llms text", () => {
    const guide = GUIDES.find((entry) => entry.slug === slug);

    expect(guide).toBeDefined();
    expect(guide?.editorialStatus).toBe("published");
    expect(PUBLISHED_GUIDES.some((entry) => entry.slug === slug)).toBe(true);
    expect(
      sitemap().some((entry) => entry.url.endsWith(`/guides/${slug}`)),
    ).toBe(true);
    expect(buildLlmsText()).toContain(`/guides/${slug}`);
    expect(buildLlmsText()).toContain(
      "Calculer le ROI d’une application métier",
    );
  });
});
