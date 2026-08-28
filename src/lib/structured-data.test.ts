import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import renderCaseStudyOpenGraphImage from "@/app/realisations/[slug]/opengraph-image";
import { CASES } from "@/components/realisations/cases";
import {
  buildCaseStudyStructuredData,
  frenchDateToIso,
} from "@/lib/case-study-structured-data";
import { buildGuideStructuredData } from "@/lib/guide-page-seo";
import { GUIDES } from "@/lib/guides";
import {
  ORGANIZATION_ID,
  PUBLIC_ORGANIZATION_ENTITY,
  PUBLIC_ORGANIZATION_JSON_LD,
  QUENTIN_HAGNERE_ID,
  QUENTIN_HAGNERE_PERSON,
  QUENTIN_HAGNERE_URL,
  WEBSITE_JSON_LD,
  WEBSITE_ID,
} from "@/lib/organization-structured-data";
import { SITE_URL } from "@/lib/seo";
import { SERVICE_LINKS } from "@/lib/services";
import { CDI_MEMBERS, FREELANCE_MEMBERS, TEAM } from "@/lib/team";

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

/**
 * Liste blanche des types schema.org réellement publiables par ce site.
 *
 * Le garde-fou ne compare plus une chaîne littérale exacte (`'"@type": "FAQPage"'`) :
 * une apostrophe simple, une espace en moins ou une variable intermédiaire
 * suffisaient à passer au travers. On extrait désormais TOUS les `@type` émis
 * dans les sources et on exige qu'ils appartiennent à cette liste — un
 * FAQPage, un HowTo, un Review ou un AggregateRating échoue donc quelle que
 * soit sa forme d'écriture.
 */
const ALLOWED_SCHEMA_TYPES = new Set([
  "AdministrativeArea",
  "Article",
  "Audience",
  "BreadcrumbList",
  "City",
  "CollectionPage",
  "ContactPage",
  "ContactPoint",
  "Country",
  "CreativeWork",
  "DigitalDocument",
  "DownloadAction",
  "EntryPoint",
  "ImageObject",
  "ItemList",
  "ListItem",
  "Offer",
  "OfferCatalog",
  "Organization",
  "Person",
  "PostalAddress",
  "PriceSpecification",
  "ProfessionalService",
  "PropertyValue",
  "QuantitativeValue",
  "Reservation",
  "ReserveAction",
  "Service",
  "SoftwareApplication",
  "Thing",
  "WebApplication",
  "WebPage",
  "WebSite",
]);

/** `@type` déclarés en dur dans les sources, guillemets simples ou doubles. */
function declaredSchemaTypes(sources: string): string[] {
  const types: string[] = [];
  const property = /["']@type["']\s*:\s*(\[[^\]]*\]|["'][A-Za-z]+["'])/g;

  for (const match of sources.matchAll(property)) {
    const raw = match[1];
    for (const value of raw.matchAll(/["']([A-Za-z]+)["']/g)) {
      types.push(value[1]);
    }
  }
  return types;
}

/** Positions séquentielles, URLs absolues : invariants d'un fil d'Ariane. */
function expectValidBreadcrumb(breadcrumb: unknown, label: string): void {
  const parsed = JSON.parse(JSON.stringify(breadcrumb)) as {
    "@context": string;
    "@type": string;
    itemListElement: { "@type": string; position: number; name: string; item: string }[];
  };

  expect(parsed["@context"], label).toBe("https://schema.org");
  expect(parsed["@type"], label).toBe("BreadcrumbList");
  expect(parsed.itemListElement.length, label).toBeGreaterThanOrEqual(2);
  parsed.itemListElement.forEach((entry, index) => {
    expect(entry["@type"], `${label} #${index}`).toBe("ListItem");
    expect(entry.position, `${label} #${index}`).toBe(index + 1);
    expect(entry.name.length, `${label} #${index}`).toBeGreaterThan(0);
    expect(entry.item.startsWith(`${SITE_URL}/`), `${label} #${index}`).toBe(
      true,
    );
  });
}

describe("public structured data safeguards", () => {
  it("emits only the schema.org types this site is eligible for", () => {
    const sources = publicSources();
    const types = declaredSchemaTypes(sources);

    // Le scan doit rester productif : s'il ne remonte plus rien, c'est
    // l'extraction qui est cassée, pas le site qui est devenu propre.
    expect(types.length).toBeGreaterThan(50);
    const unexpected = [...new Set(types)].filter(
      (type) => !ALLOWED_SCHEMA_TYPES.has(type),
    );
    expect(unexpected).toEqual([]);

    // Aucune constante de balisage FAQ, quel que soit son nom exact.
    expect(sources).not.toMatch(/faq\w*json[-_]?ld/i);
    expect(sources).not.toMatch(/\bwordCount\s*:/);
    expect(sources).not.toMatch(/Tout validé Search Console/i);
  }, 30_000);

  it("builds parseable JSON-LD with valid breadcrumbs on every library builder", () => {
    for (const entity of [PUBLIC_ORGANIZATION_JSON_LD, WEBSITE_JSON_LD]) {
      const parsed = JSON.parse(JSON.stringify(entity)) as Record<
        string,
        unknown
      >;
      expect(parsed["@context"]).toBe("https://schema.org");
      expect(parsed["@id"]).toBeTypeOf("string");
    }

    for (const guide of GUIDES) {
      const [article, breadcrumb] = buildGuideStructuredData(
        guide,
        guide.cardTitle,
      );
      const parsedArticle = JSON.parse(JSON.stringify(article)) as Record<
        string,
        unknown
      >;

      expect(parsedArticle["@context"], guide.slug).toBe("https://schema.org");
      expect(parsedArticle.url, guide.slug).toBe(
        `${SITE_URL}/guides/${guide.slug}`,
      );
      // `author` et `publisher` référencent des nœuds canoniques publiés par
      // l'entité : leur `@id` doit rester celui du registre, jamais un doublon.
      expect(article.author["@id"], guide.slug).toBe(QUENTIN_HAGNERE_ID);
      expect(article.publisher["@id"], guide.slug).toBe(ORGANIZATION_ID);
      expectValidBreadcrumb(breadcrumb, `guide ${guide.slug}`);
    }

    for (const caseStudy of Object.values(CASES)) {
      const [article, breadcrumb] = buildCaseStudyStructuredData(caseStudy);
      expect(
        JSON.parse(JSON.stringify(article))["@context"],
        caseStudy.slug,
      ).toBe("https://schema.org");
      expectValidBreadcrumb(breadcrumb, `réalisation ${caseStudy.slug}`);
    }
  }, 30_000);

  it("keeps one Service name per published service URL", () => {
    const names = SERVICE_LINKS.map((service) => service.title);
    const paths = SERVICE_LINKS.map((service) => service.path);

    expect(new Set(names).size).toBe(names.length);
    expect(new Set(paths).size).toBe(paths.length);
  });

  it("dates each analysis from its real source-check day, never a fake January date", () => {
    const sources = publicSources();

    expect(sources).not.toMatch(/datePublished\s*:\s*`\$\{[^}]*\.year\}-01-01`/);
    // Une date française incomplète ou fantaisiste ne produit aucune date ISO :
    // l'Article reste sans date plutôt que d'en inventer une.
    expect(frenchDateToIso("2026")).toBeUndefined();
    expect(frenchDateToIso("juillet 2026")).toBeUndefined();
    expect(frenchDateToIso("31 février 2026")).toBeUndefined();
    expect(frenchDateToIso("20 juillet 2026")).toBe("2026-07-20");

    for (const caseStudy of Object.values(CASES)) {
      const [article] = buildCaseStudyStructuredData(caseStudy);
      // La date publiée est exactement celle déjà affichée sur la fiche
      // (« Source externe consultée le … »), au format ISO.
      const expectedDate = frenchDateToIso(caseStudy.sourceCheckedAt);
      expect(expectedDate, caseStudy.slug).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(article.datePublished, caseStudy.slug).toBe(expectedDate);
      expect(article.dateModified, caseStudy.slug).toBe(expectedDate);
      expect(article.author, caseStudy.slug).toMatchObject({
        "@id": ORGANIZATION_ID,
        name: "Hagnéré Code",
        url: SITE_URL,
      });
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
    // Aucune plage horaire fictive : le studio reçoit sur rendez-vous et
    // aucune amplitude n'est publiée tant qu'elle n'est pas réellement tenue.
    expect(organization).not.toMatch(/opens["']?\s*:/);
    expect(organization).not.toMatch(/closes["']?\s*:/);
    expect(organization).not.toMatch(/993\s?672\s?856\s?00016/);
    expect(sources).not.toMatch(/993\s?672\s?856\s?00016/);
    expect(organization).not.toContain("https://lmnp.ai");
    expect(organization).not.toContain("https://sci-ai.app");
    expect(organization).not.toContain("https://hagnere-patrimoine.fr");
    expect(organization).not.toContain("https://hagnere-investissement.fr");

    // `sameAs` reste autorisé mais strictement borné : uniquement des profils
    // officiels de CETTE personne morale, jamais un produit du groupe. La
    // règle documentée (docs/regle-or-vigilance-seo-publication.md) autorise
    // ce rattachement d'entité ; l'interdire en bloc bloquait le signal le
    // plus élémentaire, la page LinkedIn d'entreprise.
    const entitySameAs = (
      PUBLIC_ORGANIZATION_ENTITY as { sameAs?: readonly string[] }
    ).sameAs;
    if (entitySameAs) {
      expect(Array.isArray(entitySameAs)).toBe(true);
      for (const profile of entitySameAs) {
        expect(profile, profile).toMatch(
          /^https:\/\/(?:(?:www\.)?linkedin\.com\/company\/|annuaire-entreprises\.data\.gouv\.fr\/)/,
        );
      }
      expect(new Set(entitySameAs).size).toBe(entitySameAs.length);
    }

    // Effectif : `numberOfEmployees` désigne les SALARIÉS. Trois des sept
    // membres du registre sont des freelances affichés comme tels : publier
    // le total serait une revendication d'effectif salarié fausse, opposable
    // au registre du commerce. La propriété reste donc interdite.
    expect(organization).not.toContain("numberOfEmployees");
    expect("numberOfEmployees" in PUBLIC_ORGANIZATION_ENTITY).toBe(false);
    expect(FREELANCE_MEMBERS.length).toBeGreaterThan(0);
    expect(CDI_MEMBERS.length + FREELANCE_MEMBERS.length + 1).toBe(
      Object.keys(TEAM).length,
    );

    // `taxID` désignerait l'identifiant fiscal : y recopier le numéro de TVA
    // publiait deux fois la même donnée sous deux sens différents.
    expect(organization).not.toContain("taxID");
    expect(PUBLIC_ORGANIZATION_ENTITY.vatID).toBe("FR30993672856");

    expect(PUBLIC_ORGANIZATION_JSON_LD).toMatchObject(
      PUBLIC_ORGANIZATION_ENTITY,
    );

    // Une seule identité JSON-LD pour le fondateur, réutilisée telle quelle.
    expect(PUBLIC_ORGANIZATION_ENTITY.founder).toBe(QUENTIN_HAGNERE_PERSON);
    expect(QUENTIN_HAGNERE_PERSON.jobTitle).toBe(TEAM.quentin.role);
    expect(QUENTIN_HAGNERE_PERSON.worksFor).toEqual({
      "@id": ORGANIZATION_ID,
    });

    // Logo : Google demande au moins 112 px de côté et recommande la forme
    // ImageObject avec ses dimensions réelles plutôt qu'une simple URL.
    const logo = PUBLIC_ORGANIZATION_ENTITY.logo;
    expect(typeof logo).toBe("object");
    expect(logo).toMatchObject({ "@type": "ImageObject" });
    expect(logo.url).toBe(`${SITE_URL}/logos/logo-dark.png`);
    expect(Math.min(logo.width, logo.height)).toBeGreaterThanOrEqual(112);

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
