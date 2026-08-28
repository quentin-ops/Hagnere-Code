import { describe, expect, it } from "vitest";
import { logoWallHtml } from "./sections/logo-wall";

/**
 * Miroir de src/components/sites-vitrines/logo-wall-qualification.test.ts.
 *
 * Ce test-là ne couvre que les trois murs de logos des pages services, parce
 * que son auteur ne pouvait pas écrire hors de son périmètre. Celui-ci étend
 * exactement le même invariant au mur de logos de la page d'accueil, avec la
 * formulation publiée mot pour mot sur les pages services.
 *
 * Restent à couvrir, par leurs propriétaires respectifs :
 * audit-technique, maintenance-evolution et publicite-en-ligne.
 */
function visibleText(html: string): string {
  return html
    .replace(/<!--[\s\S]*?-->/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

describe("mur de logos de la page d'accueil", () => {
  const text = visibleText(logoWallHtml);

  it("nomme le groupe au-dessus de la bande, pas seulement dans l'aria-label", () => {
    expect(text).toMatch(/produits du groupe Hagnéré/i);
  });

  it("dit ce que ces pages ne prouvent pas, dans les termes publiés ailleurs", () => {
    expect(text).toMatch(/pas des clients indépendants/i);
    expect(text).toMatch(
      /pas leur conception, leur exploitation, leur audience ni leurs résultats/i,
    );
  });

  it("n'attribue jamais ces produits à un client externe", () => {
    expect(text).not.toMatch(/nos clients|ils nous font confiance/i);
  });
});
