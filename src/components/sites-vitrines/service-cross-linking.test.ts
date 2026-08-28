import { describe, expect, it } from "vitest";
import {
  stripFinalCta,
  stripFooter,
  stripNav,
} from "@/components/design-shared/stripBody";
import { composedBodyHtml as sitesVitrines } from "./composed-body";
import { composedBodyHtml as saasApplications } from "@/components/saas-applications/composed-body";
import { composedBodyHtml as outilsInternes } from "@/components/outils-internes/composed-body";
import { composedBodyHtml as ecommerce } from "@/components/ecommerce/composed-body";

/**
 * Ces pages sont des cibles Google Ads : elles doivent absorber du trafic payant
 * puis le redistribuer autrement que par le seul footer. Socle minimal vérifié
 * ici, dans le corps de page (nav, footer et CTA finale sont retirés comme au
 * rendu réel) :
 *
 *   - au moins deux autres pages services ;
 *   - au moins un guide pertinent ;
 *   - la grille tarifaire ;
 *   - le funnel de cadrage.
 *
 * Périmètre : les quatre pages de ce lot. Les sept autres pages `/services/*`
 * vivent dans d'autres répertoires et devront rejoindre ce socle.
 */
const PAGES = [
  { route: "/services/sites-vitrines", self: "sites-vitrines", html: sitesVitrines },
  {
    route: "/services/saas-applications-metier",
    self: "saas-applications-metier",
    html: saasApplications,
  },
  {
    route: "/services/outils-internes-sur-mesure",
    self: "outils-internes-sur-mesure",
    html: outilsInternes,
  },
  { route: "/services/ecommerce", self: "ecommerce", html: ecommerce },
] as const;

function bodyOnly(html: string): string {
  return stripNav(stripFooter(stripFinalCta(html)));
}

function internalHrefs(html: string): string[] {
  return [...bodyOnly(html).matchAll(/href="(\/[^"#]*)"/g)].map(
    (match) => match[1],
  );
}

describe("socle de maillage interne des pages services", () => {
  it.each(PAGES)("$route relie au moins deux services frères", ({ self, html }) => {
    const siblings = new Set(
      internalHrefs(html).filter(
        (href) => href.startsWith("/services/") && href !== `/services/${self}`,
      ),
    );

    expect([...siblings].sort()).toHaveLength(siblings.size);
    expect(siblings.size).toBeGreaterThanOrEqual(2);
  });

  it.each(PAGES)("$route relie au moins un guide", ({ html }) => {
    const guides = new Set(
      internalHrefs(html).filter((href) => href.startsWith("/guides/")),
    );

    expect(guides.size).toBeGreaterThanOrEqual(1);
  });

  it.each(PAGES)("$route relie la grille tarifaire et le funnel", ({ html }) => {
    const hrefs = new Set(internalHrefs(html));

    expect(hrefs.has("/tarifs")).toBe(true);
    expect(hrefs.has("/demarrer-un-projet")).toBe(true);
  });

  it("ne renvoie pas la page vitrine vers deux SaaS de comptabilité comme seules réalisations liées", () => {
    const cases = internalHrefs(sitesVitrines).filter((href) =>
      href.startsWith("/realisations/"),
    );

    expect(cases).toContain("/realisations/hagnere-patrimoine");
    expect(cases).toContain("/realisations/hagnere-investissement");
    expect(cases).not.toContain("/realisations/lmnp-ai");
    expect(cases).not.toContain("/realisations/sci-ai");
  });
});
