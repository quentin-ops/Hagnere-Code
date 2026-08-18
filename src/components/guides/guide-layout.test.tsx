import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { GuideToc } from "./guide-content-blocks";
import { GuideLayout } from "./guide-layout";

const sharedProps = {
  heroTitle: "Titre du guide",
  heroDescription: "Description éditoriale du guide.",
  keyPoints: [
    {
      number: "01",
      title: "Repère utile",
      description: "",
      color: "violet" as const,
    },
  ],
  relatedLinks: [],
  faqTitle: "Questions fréquentes",
  faqItems: [],
};

describe("GuideLayout", () => {
  it("applique le gabarit Patrimoine aux routes /guides sans recentrer l’article", () => {
    const html = renderToStaticMarkup(
      <GuideLayout
        {...sharedProps}
        breadcrumbs={[
          { label: "Guides", href: "/guides" },
          { label: "Guide test" },
        ]}
        showSidebarCta={false}
      >
        <p>Introduction du guide.</p>
        <GuideToc items={[{ id: "choisir", label: "Bien choisir" }]} />
        <h2 id="choisir">Bien choisir</h2>
      </GuideLayout>,
    );

    const articleTag =
      html.match(/<article[^>]+data-guide-article="true"[^>]*>/)?.[0] ?? "";

    expect(html).toContain('data-guide-layout="patrimoine-premium"');
    expect(html).toContain('data-guide-toc-style="pills"');
    expect(articleTag).toContain("max-w-[760px]");
    expect(articleTag).not.toContain("mx-auto");
    expect(html.indexOf('data-guide-toc-style="pills"')).toBeLessThan(
      html.indexOf('data-guide-article="true"'),
    );
  });

  it("préserve le rendu historique des pages hors /guides", () => {
    const html = renderToStaticMarkup(
      <GuideLayout
        {...sharedProps}
        breadcrumbs={[{ label: "Notre agence" }]}
        showSidebarCta={false}
      >
        <GuideToc items={[{ id: "agence", label: "Notre agence" }]} />
        <h2 id="agence">Notre agence</h2>
      </GuideLayout>,
    );

    expect(html).not.toContain('data-guide-layout="patrimoine-premium"');
    expect(html).toContain('data-guide-toc-style="stacked"');
  });
});
