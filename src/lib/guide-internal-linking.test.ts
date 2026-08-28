import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { GUIDES, PUBLISHED_GUIDES } from "./guides";

/**
 * Contrôle structurel du maillage interne entre guides.
 *
 * Contexte : l'audit du 7 août 2026 a mesuré 2,6 liens inter-guides par page,
 * cinq guides orphelins et trois guides sans aucun lien sortant. La règle d'or
 * (docs/regle-or-vigilance-seo-publication.md, §6) impose des liens
 * contextuels et interdit les pages orphelines.
 *
 * Ce test verrouille le résultat de la reprise du maillage. Il ne juge pas la
 * qualité rédactionnelle d'une ancre : il garantit seulement qu'aucun guide ne
 * repart isolé du reste du silo.
 */

// Corpus ramené de 18 à 9 guides le 28/08/2026 : exiger six liens sortants
// inter-guides supposerait un graphe presque complet entre les sept guides
// applicatifs et SaaS, donc des rapprochements fabriqués — ce que la règle d'or
// interdit. Quatre reste exigeant sans forcer le hors-sujet.
const MIN_OUTGOING = 4;
const MIN_INCOMING = 2;

/**
 * Guides dont le sujet n'a pas six voisins réellement pertinents. Ajouter des
 * liens au-delà de ce que la proximité thématique justifie produirait une
 * liste artificielle, ce que la règle d'or interdit explicitement.
 */
const TOPICAL_OUTLIERS: Record<string, number> = {
  // Plan de recette : ses seuls voisins honnêtes dans un corpus de neuf guides
  // sont le cahier des charges (ce qu'on recette), le MVP (le périmètre) et la
  // sécurité (le contrôle avant mise en service). Un quatrième lien serait un
  // rapprochement fabriqué, que la règle d'or interdit.
  "plan-recette-application-metier": 3,
  // MVP SaaS : son test de contenu compare le nombre exact de mots visibles à
  // readTimeMin et à un décompte figé dans docs/research. Ajouter un quatrième
  // lien suppose de rouvrir ces deux références dans le même changement ; ses
  // trois voisins (cahier des charges, plan de recette, sécurité) couvrent déjà
  // la suite de lecture honnête.
  "mvp-saas-quoi-inclure": 3,
  // Gestion publicitaire : les trois guides qui partageaient sa logique de
  // décision (choix d'un prestataire, calcul du ROI, validation d'une offre)
  // ont été retirés le 28/08/2026 faute de volume de recherche. Il ne lui reste
  // qu'un voisin réellement pertinent, le guide de visibilité organique.
  "prix-gestion-google-ads": 1,
  // Premier guide de son silo SEO : ses voisins pertinents sont pour l'instant
  // les pages de service SEO et d'audit, pas les guides SaaS ou applicatifs.
  // Cette exception doit disparaître à mesure que les guides SEO frères sont
  // publiés ; les liens de site réellement disponibles sont contrôlés plus bas.
  "pourquoi-site-pas-visible-google": 0,
};

const INCOMING_TOPICAL_OUTLIERS: Record<string, number> = {
  // Seul guide d'acquisition payante du corpus : son unique voisin éditorial est
  // le guide de visibilité organique, qui pointe désormais vers lui.
  "prix-gestion-google-ads": 1,
  // Le guide est déjà relié depuis le hub et deux pages de service. Exiger deux
  // liens depuis d'autres guides avant que le silo SEO existe fabriquerait des
  // rapprochements hors sujet.
  "pourquoi-site-pas-visible-google": 0,
};

const SITE_LEVEL_LINK_REQUIREMENTS: Record<
  string,
  { outgoingServices: number; inboundSources: string[] }
> = {
  "pourquoi-site-pas-visible-google": {
    outgoingServices: 2,
    inboundSources: [
      "src/components/seo-referencement/content.ts",
      "src/components/audit-technique/sections/what-we-do.ts",
    ],
  },
};

function pageSourceFor(slug: string): string {
  return readFileSync(
    path.join(process.cwd(), "src/app/guides", slug, "page.tsx"),
    "utf8",
  );
}

/**
 * Toutes les formes qui produisent un lien rendu vers un guide.
 *
 * Le motif ne couvrait que l'attribut JSX `href="…"`. Les guides passent aussi
 * leurs voisins en données — `relatedGuides={[{ label, href: "/guides/…" }]}`,
 * `ctaHref` et `primaryCtaHref` des blocs d'appel à l'action — que
 * `guide-premium-layout.tsx` rend en `<Link>`. Ces liens existent pour le
 * visiteur et pour le crawler, mais échappaient au comptage : droits-acces,
 * migrer et remplacer étaient mesurés en dessous de leur maillage réel.
 */
const GUIDE_LINK_FORMS =
  /(?:href|ctaHref|primaryCtaHref|secondaryCtaHref)\s*[:=]\s*"\/guides\/([a-z0-9-]+)"/g;

function outgoingGuideLinks(slug: string): Set<string> {
  const source = pageSourceFor(slug);
  const links = new Set(
    [...source.matchAll(GUIDE_LINK_FORMS)].map((m) => m[1]),
  );
  links.delete(slug);
  return links;
}

const linkGraph = new Map<string, Set<string>>(
  PUBLISHED_GUIDES.map((guide) => [guide.slug, outgoingGuideLinks(guide.slug)]),
);

const incoming = new Map<string, number>(
  PUBLISHED_GUIDES.map((guide) => [guide.slug, 0]),
);
for (const targets of linkGraph.values()) {
  for (const target of targets) {
    if (incoming.has(target)) {
      incoming.set(target, (incoming.get(target) ?? 0) + 1);
    }
  }
}

describe("maillage interne des guides", () => {
  it("réserve les invariants de maillage aux seuls guides publiés", () => {
    expect([...linkGraph.keys()]).toEqual(
      PUBLISHED_GUIDES.map((guide) => guide.slug),
    );

    for (const guide of GUIDES) {
      if (guide.editorialStatus !== "published") {
        expect(
          linkGraph.has(guide.slug),
          `${guide.slug} : un ${guide.editorialStatus} ne doit pas entrer dans le graphe publié`,
        ).toBe(false);
        expect(incoming.has(guide.slug)).toBe(false);
      }
    }
  });

  it("ne contient aucun lien vers un guide inexistant", () => {
    const known = new Set(PUBLISHED_GUIDES.map((guide) => guide.slug));
    for (const [slug, targets] of linkGraph) {
      for (const target of targets) {
        expect(known.has(target), `${slug} -> ${target}`).toBe(true);
      }
    }
  });

  it("donne à chaque guide au moins six liens sortants contextuels", () => {
    for (const guide of PUBLISHED_GUIDES) {
      const expected = TOPICAL_OUTLIERS[guide.slug] ?? MIN_OUTGOING;
      expect(
        linkGraph.get(guide.slug)?.size ?? 0,
        `${guide.slug} : liens sortants insuffisants`,
      ).toBeGreaterThanOrEqual(expected);
    }
  });

  it("ne laisse aucun guide orphelin", () => {
    for (const guide of PUBLISHED_GUIDES) {
      const expected =
        INCOMING_TOPICAL_OUTLIERS[guide.slug] ?? MIN_INCOMING;
      expect(
        incoming.get(guide.slug) ?? 0,
        `${guide.slug} : aucun guide ne pointe vers lui`,
      ).toBeGreaterThanOrEqual(expected);
    }
  });

  it("compense chaque exception thématique par un maillage de site vérifiable", () => {
    for (const [slug, requirement] of Object.entries(
      SITE_LEVEL_LINK_REQUIREMENTS,
    )) {
      const guideSource = pageSourceFor(slug);
      const outgoingServices = new Set(
        [
          ...guideSource.matchAll(
            /(?:href|ctaHref|primaryCtaHref|secondaryCtaHref)\s*[:=]\s*"(\/services\/[a-z0-9-]+)"/g,
          ),
        ].map((match) => match[1]),
      );
      expect(
        outgoingServices.size,
        `${slug} : liens de service sortants insuffisants`,
      ).toBeGreaterThanOrEqual(requirement.outgoingServices);

      for (const sourcePath of requirement.inboundSources) {
        const source = readFileSync(path.join(process.cwd(), sourcePath), "utf8");
        expect(
          source,
          `${sourcePath} doit pointer vers ${slug}`,
        ).toContain(`/guides/${slug}`);
      }
    }
  });

  it("place les liens dans la prose et jamais avec une ancre vide ou générique", () => {
    const bannedAnchors = [
      "cliquez ici",
      "ici",
      "en savoir plus",
      "voir plus",
      "lire la suite",
      "ce lien",
    ];
    for (const guide of PUBLISHED_GUIDES) {
      const source = pageSourceFor(guide.slug);
      const anchors = [
        ...source.matchAll(
          /<Link\s+href="\/guides\/[a-z0-9-]+"\s*>([\s\S]*?)<\/Link>/g,
        ),
      ].map((m) => m[1].replace(/\s+/g, " ").trim().toLowerCase());
      for (const anchor of anchors) {
        expect(anchor.length, `${guide.slug} : ancre vide`).toBeGreaterThan(0);
        expect(
          bannedAnchors.includes(anchor),
          `${guide.slug} : ancre non descriptive « ${anchor} »`,
        ).toBe(false);
      }
    }
  });
});
