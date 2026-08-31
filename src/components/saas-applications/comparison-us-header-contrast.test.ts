import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

/**
 * Les tableaux comparatifs des pages service inversent volontairement la
 * colonne « Nous » :
 *
 *   .xx-cmp-head .xx-cmp-col-us { background: var(--ink); color: var(--paper) }
 *
 * `--ink` est NOIR en thème clair et CLAIR en thème sombre : la surface bascule
 * donc à chaque changement de thème. Le titre et le prix suivent déjà via
 * `var(--paper)` ; le sur-titre, lui, était peint par un littéral violet pâle
 * qui tombait à 2,61:1 sur #FAFAFA — pour le mot qui désigne VOTRE colonne dans
 * le bloc de comparaison.
 *
 * Le jeton `--accent-on-ink` existe exactement pour ce cas : un accent posé sur
 * une surface qui s'inverse. Ce test vérifie la propriété — le sur-titre est
 * lisible dans les deux thèmes — en recalculant le ratio depuis les valeurs
 * écrites, pas en figeant un nom de couleur.
 */

type RGB = [number, number, number];

const MIN_RATIO = 4.5; // WCAG 1.4.3 AA — le sur-titre fait 11 px

function channel(value: number): number {
  const c = value / 255;
  return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
}

function luminance([r, g, b]: RGB): number {
  return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
}

function contrastRatio(a: RGB, b: RGB): number {
  const [light, dark] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (light + 0.05) / (dark + 0.05);
}

function hex(value: string): RGB {
  const match = /^#([0-9a-f]{6})$/i.exec(value.trim());
  if (!match) throw new Error(`couleur non calculable : "${value}"`);
  const n = parseInt(match[1], 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

function read(relativePath: string): string {
  return fs.readFileSync(path.join(process.cwd(), relativePath), "utf8");
}

function token(css: string, block: "root" | "dark", name: string): RGB {
  const opener = block === "root" ? ":root" : "html.dark";
  const start = css.indexOf(`${opener} {`);
  const body = css.slice(start, css.indexOf("}", start));
  const match = new RegExp(`--${name}\\s*:\\s*(#[0-9a-fA-F]{6})`).exec(body);
  if (!match) throw new Error(`jeton --${name} absent du bloc ${opener}`);
  return hex(match[1]);
}

/** Une déclinaison du tableau : préfixe de classe, feuille, jetons de page. */
const TABLES = [
  {
    label: "/services/saas-applications-metier",
    prefix: "sa",
    sections: "src/components/saas-applications/sections/sections.css",
    page: "src/components/saas-applications/page.css",
  },
  {
    label: "/services/sites-vitrines",
    prefix: "sv",
    sections: "src/components/sites-vitrines/sections/sections.css",
    page: "src/components/sites-vitrines/page.css",
  },
  {
    label: "/services/ecommerce",
    prefix: "ec",
    sections: "src/components/ecommerce/sections/sections.css",
    page: "src/components/ecommerce/page.css",
  },
  {
    label: "/services/publicite-en-ligne",
    prefix: "ads",
    sections: "src/components/publicite-en-ligne/sections/sections.css",
    page: "src/components/publicite-en-ligne/page.css",
  },
];

/** Valeur de `color` déclarée par une règle, quelle que soit sa mise en forme. */
function colorOf(css: string, selector: string): string {
  const escaped = selector.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const rule = new RegExp(`${escaped}\\s*\\{([^{}]*)\\}`).exec(css);
  expect(rule, `règle ${selector} introuvable`).toBeTruthy();
  const color = /(?:^|[;{\s])color\s*:\s*([^;}]+)/.exec(rule?.[1] ?? "");
  expect(color, `${selector} ne déclare pas de couleur`).toBeTruthy();
  return (color?.[1] ?? "").trim();
}

describe.each(TABLES)("en-tête « Nous » — $label", (table) => {
  const css = read(table.sections);
  const tokens = read(table.page);
  const selector = `.${table.prefix}-cmp-head .${table.prefix}-cmp-col-us .${table.prefix}-cmp-kind`;

  /**
   * La surface est `var(--ink)` : si un jour elle cesse de s'inverser, le
   * raisonnement de ce test tombe et il faut le relire, pas le contourner.
   */
  it("garde une colonne « Nous » peinte par un jeton qui s'inverse", () => {
    const head = `.${table.prefix}-cmp-head .${table.prefix}-cmp-col-us`;
    const escaped = head.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const rule = new RegExp(`${escaped}\\s*\\{([^{}]*)\\}`).exec(css);
    expect(rule?.[1], `${head} doit poser son fond sur var(--ink)`).toMatch(
      /background:\s*var\(--ink\)/,
    );
  });

  it("écrit le sur-titre avec un jeton, pas un littéral", () => {
    expect(
      colorOf(css, selector),
      "un littéral ne peut pas suivre l'inversion de la surface",
    ).toMatch(/^var\(--[a-z-]+\)$/);
  });

  it.each(["root", "dark"] as const)(
    "reste au-dessus de 4,5:1 en thème %s",
    (theme) => {
      const declared = colorOf(css, selector);
      const name = /^var\(--([a-z-]+)\)$/.exec(declared)?.[1];
      expect(name, `couleur "${declared}" non résoluble`).toBeTruthy();

      const ink = token(tokens, theme, name as string);
      const surface = token(tokens, theme, "ink");
      const ratio = contrastRatio(ink, surface);

      expect(
        ratio,
        `${selector} : --${name} sur --ink → ${ratio.toFixed(2)}:1`,
      ).toBeGreaterThanOrEqual(MIN_RATIO);
    },
  );
});
