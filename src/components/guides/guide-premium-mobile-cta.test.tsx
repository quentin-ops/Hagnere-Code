import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { GuidePremiumMobileCta } from "./guide-premium-mobile-cta";

describe("GuidePremiumMobileCta", () => {
  it("keeps the primary action shrinkable when text is enlarged", () => {
    const html = renderToStaticMarkup(
      <GuidePremiumMobileCta
        ctaHref="/services/outils-internes-sur-mesure"
        ctaLabel="Voir le service outils internes"
        phoneHref="tel:+33374472018"
        phoneLabel="03 74 47 20 18"
      />,
    );

    expect(html).toContain(
      'class="min-w-0 flex-1 flex items-center justify-center',
    );
    expect(html).toContain(
      'href="/services/outils-internes-sur-mesure"',
    );
  });

  it("keeps the secondary action as an explicitly named phone link", () => {
    const html = renderToStaticMarkup(
      <GuidePremiumMobileCta
        ctaHref="/services/outils-internes-sur-mesure"
        ctaLabel="Voir le service outils internes"
        phoneHref="tel:+33374472018"
        phoneLabel="03 74 47 20 18"
      />,
    );

    expect(html).toContain('href="tel:+33374472018"');
    expect(html).toContain('aria-label="Appeler 03 74 47 20 18"');
  });
});
