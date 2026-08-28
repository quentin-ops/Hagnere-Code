import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

import { bodyHtml } from "./body";

/**
 * Deux défauts relevés par l'audit 2026-08 sur /tarifs :
 *   - la hiérarchie sautait de h2 à h4 (18 <h4> pour 8 <h3>, trois ruptures) ;
 *   - les titres de rupture typographique collaient deux phrases dans le nom
 *     accessible, un <br> n'insérant aucune espace (« Quatre règlesqui… »).
 *
 * Les deux sont vérifiés sur la source du corps de page, pas sur le HTML
 * composé, afin de ne contrôler que le fichier réellement possédé ici.
 *
 * `src/components/ui/heading-hierarchy.test.ts` documente ce défaut comme
 * « restant à traiter » : le contrôle vit ici, sur le fragment réellement
 * injecté dans <main>, et son propriétaire peut retirer la mention.
 */
const bodySource = readFileSync(new URL("./body.ts", import.meta.url), "utf8");

const headings = [
  ...bodySource.matchAll(/<(h[1-6])[^>]*>([\s\S]*?)<\/\1>/g),
].map((match) => ({ level: Number(match[1][1]), inner: match[2] }));

describe("titres de /tarifs", () => {
  it("expose des titres à contrôler", () => {
    expect(headings.length).toBeGreaterThan(10);
  });

  it("n'ouvre qu'un seul h1", () => {
    expect(headings.filter((heading) => heading.level === 1)).toHaveLength(1);
  });

  it("ne saute jamais plus d'un niveau de titre", () => {
    let previous = 0;

    for (const heading of headings) {
      if (previous > 0) {
        expect(
          heading.level,
          `saut de h${previous} à h${heading.level}`,
        ).toBeLessThanOrEqual(previous + 1);
      }
      previous = heading.level;
    }
  });

  it("ne colle pas deux phrases dans le nom accessible", () => {
    for (const heading of headings) {
      expect(
        heading.inner,
        `h${heading.level} : espace manquante avant <br>`,
      ).not.toMatch(/\S<br\s*\/?>/);
    }
  });

  it("n'ouvre aucun h4 orphelin dans le fragment réellement rendu", () => {
    // Contrôle sur le HTML composé (nav incluse), pas seulement sur la source :
    // c'est ce plan-là que lit une technologie d'assistance.
    const rendered = [...bodyHtml.matchAll(/<h([1-6])\b[^>]*>/g)].map((match) =>
      Number(match[1]),
    );

    expect(rendered.length).toBeGreaterThan(10);
    expect(rendered.filter((level) => level === 4)).toHaveLength(0);

    let previous = 0;
    for (const level of rendered) {
      if (previous > 0) {
        expect(level, `saut de h${previous} à h${level}`).toBeLessThanOrEqual(
          previous + 1,
        );
      }
      previous = level;
    }
  });
});
