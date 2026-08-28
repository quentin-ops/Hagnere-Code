import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

/**
 * Les trois feuilles de style du design historique — accueil, /methode,
 * /equipe — dupliquent les mêmes règles `.btn` et `.faq-a`. Deux régressions
 * d'accessibilité s'y reproduisaient donc à l'identique :
 *
 *  1. `.btn { padding: 10px 16px }` avec un libellé de 14 px produit une cible
 *     d'environ 41 px de haut, sous le minimum tactile de 44x44
 *     (WCAG 2.5.5, Apple HIG). Le `min-height` corrige la hauteur sans toucher
 *     à la largeur ni au padding horizontal.
 *  2. `.faq-item.open .faq-a { max-height: 400px }` rogne les réponses longues
 *     dès que le texte est agrandi à 200 % (WCAG 1.4.4) ou affiché sur mobile,
 *     sans défilement possible puisque l'état fermé pose `overflow: hidden`.
 *     L'ouverture doit donc lever la contrainte : `max-height: none` +
 *     `overflow: visible`, la transition passant par l'opacité.
 *
 * Le même correctif est déjà appliqué sur ecommerce, sites-vitrines et
 * saas-applications ; les feuilles restantes appartiennent à d'autres
 * répertoires.
 */
const STYLESHEETS = [
  "src/components/homepage/homepage.css",
  "src/components/methode/page.css",
  "src/components/equipe/page.css",
];

function read(relativePath: string): string {
  return fs.readFileSync(path.join(process.cwd(), relativePath), "utf8");
}

/** Retire les commentaires CSS : seules les règles réellement appliquées comptent. */
function rules(source: string): string {
  return source.replace(/\/\*[\s\S]*?\*\//g, " ");
}

describe("cibles tactiles et accordéons du design historique", () => {
  it.each(STYLESHEETS)("%s garantit 44 px de haut sur .btn", (file) => {
    const css = rules(read(file));
    // Le sélecteur de base seul : `.dd-cta .btn` et consorts ne comptent pas.
    const base = /(?:^|\n)[ \t]*\.btn\s*\{([^}]*)\}/.exec(css);
    expect(base, `${file}: règle .btn introuvable`).not.toBeNull();
    expect(base?.[1], `${file}: cible tactile sous 44 px`).toMatch(
      /min-height:\s*44px/,
    );
  });

  it.each(STYLESHEETS)("%s n'impose pas de hauteur à une réponse ouverte", (file) => {
    const css = rules(read(file));
    const open = /\.faq-item\.open\s+\.faq-a\s*\{([^}]*)\}/.exec(css);
    expect(open, `${file}: règle .faq-item.open .faq-a introuvable`).not.toBeNull();

    const declarations = open?.[1] ?? "";
    expect(declarations, `${file}: réponse rognée à 200 % de texte`).toMatch(
      /max-height:\s*none/,
    );
    expect(declarations, `${file}: contenu débordant masqué sans défilement`).toMatch(
      /overflow:\s*visible/,
    );
    expect(declarations).not.toMatch(/max-height:\s*\d/);

    // L'état fermé reste replié, et l'animation passe par l'opacité — une
    // transition sur max-height n'a plus de valeur cible à interpoler.
    const closed = /(?:^|\n)[ \t]*\.faq-a\s*\{([^}]*)\}/.exec(css)?.[1] ?? "";
    expect(closed, `${file}: état fermé introuvable`).toMatch(/max-height:\s*0/);
    expect(closed).toMatch(/opacity:\s*0/);
    expect(closed).not.toMatch(/transition:\s*max-height/);
  });
});
