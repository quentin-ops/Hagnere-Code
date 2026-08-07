import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

/**
 * Garde-fou contre le retour du contenu dupliqué dans le DOM des guides.
 *
 * Deux composants rendaient auparavant deux fois le même contenu, une version
 * étant masquée par `display: none` selon la largeur d'écran :
 *
 * - `GuideTable` : cartes `md:hidden` + tableau `hidden md:block` ;
 * - `GuidePremiumLayout` : bloc d'action `lg:hidden` + `hidden lg:block`.
 *
 * L'accessibilité n'en souffrait pas — `display: none` retire l'élément de
 * l'arbre d'accessibilité — et le référencement non plus. Mais tout extracteur
 * de texte qui n'applique pas les feuilles de style lisait le contenu deux
 * fois : c'est le cas des robots des assistants génératifs, alors même que la
 * citation par ces assistants est un objectif du site.
 *
 * Les deux mises en page sont désormais obtenues par placement CSS à partir
 * d'un rendu unique. Ce test relit la source pour empêcher qu'un futur
 * composant réintroduise le motif « rendre deux fois, masquer l'une ».
 */

const read = (relativePath: string): string =>
  readFileSync(path.join(process.cwd(), relativePath), "utf8");

const layoutSource = read("src/components/guides/guide-premium-layout.tsx");
const tableSource = read("src/components/guides/guide-content-blocks.tsx");
const globalCss = read("src/app/globals.css");

describe("rendu unique des blocs de guide", () => {
  it("ne rend le bloc d'action du hero qu'une seule fois", () => {
    const renders = layoutSource.split("<PremiumSidebarHeroCta").length - 1;
    expect(renders, "le bloc d'action est rendu plusieurs fois").toBe(1);
  });

  it("place le bloc d'action par la grille plutôt que par un doublon masqué", () => {
    expect(layoutSource).toContain("lg:col-start-2");
    expect(layoutSource).toContain("lg:row-span-2");
    expect(layoutSource).not.toMatch(/hidden lg:block lg:pt-2/);
  });

  it("ne rend qu'un seul tableau dans GuideTable", () => {
    expect(tableSource.split("<table").length - 1).toBe(1);
    expect(tableSource).not.toContain("not-prose my-6 md:hidden");
    expect(tableSource).not.toContain("hidden overflow-x-auto md:block");
  });

  it("obtient la présentation en cartes par CSS et par data-label", () => {
    expect(tableSource).toContain("data-label=");
    expect(globalCss).toContain(".guide-table");
    expect(globalCss).toContain("content: attr(data-label)");
    // L'en-tête est masqué en cartes : le libellé vient de `data-label`.
    expect(globalCss).toMatch(/\.guide-table thead\s*\{\s*display: none/);
    // Le thème sombre doit être traité, sinon les cartes restent blanches.
    expect(globalCss).toContain("html.dark .guide-table tr");
  });
});
