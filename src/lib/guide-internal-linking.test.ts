import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { GUIDES } from "./guides";

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

const MIN_OUTGOING = 6;
const MIN_INCOMING = 2;

/**
 * Guides dont le sujet n'a pas six voisins réellement pertinents. Ajouter des
 * liens au-delà de ce que la proximité thématique justifie produirait une
 * liste artificielle, ce que la règle d'or interdit explicitement.
 */
const TOPICAL_OUTLIERS: Record<string, number> = {
  // Gestion publicitaire : seuls le choix d'un prestataire, le calcul du ROI
  // et la validation d'une offre partagent réellement sa logique de décision.
  "prix-gestion-google-ads": 3,
};

function pageSourceFor(slug: string): string {
  return readFileSync(
    path.join(process.cwd(), "src/app/guides", slug, "page.tsx"),
    "utf8",
  );
}

function outgoingGuideLinks(slug: string): Set<string> {
  const source = pageSourceFor(slug);
  const links = new Set(
    [...source.matchAll(/href="\/guides\/([a-z0-9-]+)"/g)].map((m) => m[1]),
  );
  links.delete(slug);
  return links;
}

const linkGraph = new Map<string, Set<string>>(
  GUIDES.map((guide) => [guide.slug, outgoingGuideLinks(guide.slug)]),
);

const incoming = new Map<string, number>(
  GUIDES.map((guide) => [guide.slug, 0]),
);
for (const targets of linkGraph.values()) {
  for (const target of targets) {
    if (incoming.has(target)) {
      incoming.set(target, (incoming.get(target) ?? 0) + 1);
    }
  }
}

describe("maillage interne des guides", () => {
  it("ne contient aucun lien vers un guide inexistant", () => {
    const known = new Set(GUIDES.map((guide) => guide.slug));
    for (const [slug, targets] of linkGraph) {
      for (const target of targets) {
        expect(known.has(target), `${slug} -> ${target}`).toBe(true);
      }
    }
  });

  it("donne à chaque guide au moins six liens sortants contextuels", () => {
    for (const guide of GUIDES) {
      const expected = TOPICAL_OUTLIERS[guide.slug] ?? MIN_OUTGOING;
      expect(
        linkGraph.get(guide.slug)?.size ?? 0,
        `${guide.slug} : liens sortants insuffisants`,
      ).toBeGreaterThanOrEqual(expected);
    }
  });

  it("ne laisse aucun guide orphelin", () => {
    for (const guide of GUIDES) {
      expect(
        incoming.get(guide.slug) ?? 0,
        `${guide.slug} : aucun guide ne pointe vers lui`,
      ).toBeGreaterThanOrEqual(MIN_INCOMING);
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
    for (const guide of GUIDES) {
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
