import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { bodyHtml } from "./body";

/**
 * `design-shared/responsive.css` effondre les grilles partagées du dépôt, mais
 * ne connaît aucun des sélecteurs propres à cette page. Sans media query locale,
 * `.uc-row`, `.uc-copy .feats`, `.caseh-inner` et `.caseh-metrics` restaient en
 * deux colonnes sur téléphone : des colonnes d'une centaine de pixels, du texte
 * coupé au milieu des mots et des mockups SVG 600×450 réduits à ~150 px.
 */
const PAGE_CSS = path.join(
  process.cwd(),
  "src/components/outils-internes/page.css",
);
const SHARED_RESPONSIVE = path.join(
  process.cwd(),
  "src/components/design-shared/responsive.css",
);

const PAGE_SPECIFIC_GRIDS = [
  ".uc-row",
  ".uc-copy .feats",
  ".caseh-inner",
  ".caseh-metrics",
];

function narrowMediaCss(css: string): string {
  const blocks: string[] = [];
  const opener = /@media[^{]*max-width:\s*(\d+)px[^{]*\{/g;

  let match: RegExpExecArray | null;
  while ((match = opener.exec(css)) !== null) {
    if (Number(match[1]) > 900) continue;

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

describe("cas d'usage de /services/outils-internes-sur-mesure sur mobile", () => {
  const pageCss = fs.readFileSync(PAGE_CSS, "utf8");
  const sharedCss = fs.readFileSync(SHARED_RESPONSIVE, "utf8");
  const narrow = narrowMediaCss(pageCss);

  it("instancie toujours les blocs concernés dans le markup", () => {
    expect(bodyHtml).toContain('class="uc-row');
    expect(bodyHtml).toContain('class="feats"');
    expect(bodyHtml).toContain('class="caseh-inner"');
    expect(bodyHtml).toContain('class="caseh-metrics"');
  });

  it("effondre chaque grille propre à la page sous 900 px", () => {
    expect(narrow.length, "page.css n'a aucune media query étroite").toBeGreaterThan(0);

    for (const selector of PAGE_SPECIFIC_GRIDS) {
      // Le sélecteur est toujours déclaré en multi-colonnes hors media query…
      expect(pageCss, `${selector} n'est plus déclaré ici`).toContain(selector);
      // …et il doit repasser sur une colonne dans le palier étroit.
      const escaped = selector.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      expect(
        narrow,
        `${selector} reste multi-colonnes sur téléphone`,
      ).toMatch(new RegExp(`${escaped}[^{}]*\\{[^}]*grid-template-columns:\\s*1fr`));
    }
  });

  it("remet le texte au-dessus du visuel sur les lignes inversées", () => {
    expect(narrow).toMatch(/\.uc-row\.flip \.uc-copy\s*\{\s*order:\s*1/);
    expect(narrow).toMatch(/\.uc-row\.flip \.uc-visual\s*\{\s*order:\s*2/);
  });

  it("documente que la feuille partagée ne couvre pas ces sélecteurs", () => {
    for (const selector of PAGE_SPECIFIC_GRIDS) {
      expect(
        sharedCss.includes(selector),
        `${selector} est désormais dans responsive.css : la surcharge locale peut être retirée`,
      ).toBe(false);
    }
  });
});
