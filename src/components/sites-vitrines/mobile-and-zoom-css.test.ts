import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

/**
 * Deux régressions de rendu verrouillées ici.
 *
 * 1. `design-shared/responsive.css` fait passer `.proc-grid` à
 *    `repeat(2, 1fr) !important` sous 1024 px mais ne l'effondre jamais sous
 *    768 px, et il ignore complètement `.scase-grid`. Les deux grilles
 *    restaient donc à deux colonnes sur téléphone. Chaque page qui déclare ces
 *    grilles doit les effondrer elle-même.
 *
 * 2. Les réponses de FAQ étaient ouvertes par une transition vers une
 *    `max-height` chiffrée avec `overflow: hidden` : à 200 % de taille de texte
 *    (WCAG 1.4.4) ou sur écran étroit, les réponses longues étaient coupées
 *    sans défilement possible.
 */
/**
 * Feuilles candidates. La liste est un PÉRIMÈTRE (quelles pages sont sous
 * contrat), pas un inventaire : le test ne retient ensuite que celles qui
 * déclarent réellement une règle d'ouverture de FAQ.
 *
 * Pourquoi : une règle peut légitimement passer de `sections/sections.css` au
 * `page.css` de la même page — c'est arrivé à ecommerce lors du tri du
 * 28/08/2026. Exiger sa présence dans un fichier PRÉCIS transformait un
 * déménagement en régression, alors que la propriété protégée (« aucune
 * réponse ouverte sur une hauteur chiffrée ») restait vraie.
 *
 * Le garde-fou anti-test-vide se déplace donc d'un cran : au moins une feuille
 * de chaque PAGE doit porter la règle.
 */
const CSS_SCOPE = [
  ["src/components/sites-vitrines/page.css", "src/components/sites-vitrines/sections/sections.css"],
  ["src/components/saas-applications/page.css", "src/components/saas-applications/sections/sections.css"],
  ["src/components/ecommerce/page.css", "src/components/ecommerce/sections/sections.css"],
  ["src/components/outils-internes/page.css", "src/components/outils-internes/sections/sections.css"],
];

const FAQ_OPEN_RULE = /\.faq-item\.open[^{}]*\.faq-a\s*\{([^}]*)\}/g;

const CSS_FILES = CSS_SCOPE.flat().filter((file) =>
  new RegExp(FAQ_OPEN_RULE.source).test(
    fs.readFileSync(path.join(process.cwd(), file), "utf8"),
  ),
);

const GRID_PAGES = [
  { file: "src/components/sites-vitrines/page.css", grids: [".proc-grid", ".scase-grid"] },
  { file: "src/components/saas-applications/page.css", grids: [".proc-grid", ".scase-grid"] },
  { file: "src/components/ecommerce/page.css", grids: [".proc-grid"] },
];

function read(relativePath: string): string {
  return fs.readFileSync(path.join(process.cwd(), relativePath), "utf8");
}

/** Blocs `@media (max-width: N)` dont le palier est ≤ 768 px. */
function narrowMediaBlocks(css: string): string {
  const blocks: string[] = [];
  const opener = /@media[^{]*max-width:\s*(\d+)px[^{]*\{/g;

  let match: RegExpExecArray | null;
  while ((match = opener.exec(css)) !== null) {
    if (Number(match[1]) > 768) continue;

    let depth = 1;
    let index = opener.lastIndex;
    while (index < css.length && depth > 0) {
      if (css[index] === "{") depth += 1;
      else if (css[index] === "}") depth -= 1;
      index += 1;
    }
    blocks.push(css.slice(opener.lastIndex, index));
  }

  return blocks.join("\n");
}

describe("rendu mobile des grilles de cartes", () => {
  it.each(GRID_PAGES)(
    "$file effondre ses grilles sous 768 px",
    ({ file, grids }) => {
      const css = read(file);
      const narrow = narrowMediaBlocks(css);

      for (const grid of grids) {
        expect(css, `${file}: ${grid} n'est plus déclarée ici`).toContain(grid);

        const rule = new RegExp(
          `\\${grid}\\s*\\{[^}]*grid-template-columns:\\s*1fr\\s*!important`,
        );
        expect(
          narrow,
          `${file}: ${grid} reste multi-colonnes sous 768 px`,
        ).toMatch(rule);
      }
    },
  );
});

describe("FAQ lisible à 200 % de taille de texte", () => {
  it("laisse chaque page sous contrat déclarer son ouverture de FAQ", () => {
    // Remplace l'ancien garde-fou par-fichier : ce qui compte est qu'AUCUNE
    // page ne perde sa règle, pas dans quel fichier de la page elle vit.
    for (const [pageCss, sectionsCss] of CSS_SCOPE) {
      expect(
        CSS_FILES.includes(pageCss) || CSS_FILES.includes(sectionsCss),
        `${pageCss} : aucune règle d'ouverture de FAQ dans les feuilles de la page`,
      ).toBe(true);
    }
  });

  it.each(CSS_FILES)("%s n'ouvre plus les réponses sur une hauteur fixe", (file) => {
    const css = read(file);
    const openRules = [
      ...css.matchAll(new RegExp(FAQ_OPEN_RULE.source, "g")),
    ].map((match) => match[1]);

    expect(
      openRules.length,
      `${file}: aucune règle d'ouverture de FAQ trouvée — le test ne protège plus rien`,
    ).toBeGreaterThan(0);

    for (const declarations of openRules) {
      expect(
        declarations,
        `${file}: réponse de FAQ ouverte sur une max-height chiffrée`,
      ).not.toMatch(/max-height:\s*\d/);
      expect(
        declarations,
        `${file}: réponse de FAQ ouverte sans libérer la hauteur`,
      ).toMatch(/max-height:\s*none/);
    }
  });
});
