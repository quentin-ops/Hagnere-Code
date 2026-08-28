import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

/**
 * Le jeton `--accent` change de valeur avec le thème : #6D28D9 en clair,
 * #8B5CF6 en sombre. Toute surface qui pose du blanc dessus est donc conforme
 * en clair (7,1:1) et hors seuil en sombre (4,23:1, sous les 4,5:1 exigés par
 * WCAG 1.4.3 AA pour du texte courant — les libellés concernés font 10 à 15 px).
 *
 * Ces pages sont des cibles Google Ads : le bouton principal et la pastille de
 * forfait sont exactement les éléments sur lesquels se joue le clic. Chaque
 * feuille qui déclare une de ces surfaces doit donc porter une redéfinition
 * `html.dark` vers un violet assez foncé. Le test ne vérifie pas une chaîne :
 * il calcule le ratio réel de la valeur écrite.
 *
 * `src/components/ui/css-contrast.test.ts` couvre les paires color/background
 * déclarées ensemble, thème clair seulement. Ce test-ci couvre l'axe manquant
 * — la redéfinition sombre — sur les feuilles de ce périmètre.
 */

/** Feuilles de style qui déclarent une surface accent portant du texte blanc. */
const SHEETS = [
  "src/components/application-mobile/page.css",
  "src/components/audit-technique/page.css",
  "src/components/contenu-video/page.css",
  "src/components/ecommerce/page.css",
  "src/components/maintenance-evolution/page.css",
  "src/components/outils-internes/page.css",
  "src/components/publicite-en-ligne/page.css",
  "src/components/saas-applications/page.css",
  "src/components/securite-rgpd/page.css",
  "src/components/sites-vitrines/page.css",
];

const MIN_RATIO = 4.5;
const WHITE: RGB = [255, 255, 255];

type RGB = [number, number, number];

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

function hex(value: string): RGB | null {
  const match = /^#([0-9a-f]{6})$/i.exec(value.trim());
  if (!match) return null;
  const n = parseInt(match[1], 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

function read(relativePath: string): string {
  return fs.readFileSync(path.join(process.cwd(), relativePath), "utf8");
}

/** Valeur de `background` déclarée par une règle `html.dark <selector>`. */
function darkBackground(css: string, selector: string): string | null {
  const escaped = selector.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const rule = new RegExp(
    `html\\.dark ${escaped}(?:[^{}]*?)\\{([^{}]*)\\}`,
    "g",
  );

  let found: string | null = null;
  for (const match of css.matchAll(rule)) {
    const background = /(?:^|[;{\s])background(?:-color)?\s*:\s*([^;}]+)/.exec(
      match[1],
    );
    if (background) found = background[1].trim();
  }
  return found;
}

/** Surfaces qui déclarent `background: var(--accent)` avec `color:#fff`. */
const ACCENT_SURFACES = [".hc-design .btn-accent", ".plan-badge", ".ba-arrow"];

describe("surfaces accent en thème sombre", () => {
  it("teste réellement des feuilles (garde-fou anti-test-vide)", () => {
    const declared = SHEETS.filter((sheet) =>
      ACCENT_SURFACES.some((surface) => read(sheet).includes(`${surface}{`)),
    );
    expect(declared).toEqual(SHEETS);
  });

  it.each(SHEETS)("%s repasse chaque surface accent au-dessus de 4,5:1", (sheet) => {
    const css = read(sheet);

    const failures = ACCENT_SURFACES.filter((surface) =>
      css.includes(`${surface}{`),
    ).flatMap((surface) => {
      const override = darkBackground(css, surface);
      if (!override) {
        return [`${surface} : aucune redéfinition html.dark du fond`];
      }
      const color = hex(override);
      if (!color) {
        return [`${surface} : fond sombre "${override}" non calculable`];
      }
      const ratio = contrastRatio(WHITE, color);
      return ratio < MIN_RATIO
        ? [`${surface} : #fff sur ${override} → ${ratio.toFixed(2)}:1`]
        : [];
    });

    expect(failures, failures.join("\n")).toEqual([]);
  });

  it.each(SHEETS)("%s garde un survol accent lisible en sombre", (sheet) => {
    const css = read(sheet);
    const hover = darkBackground(css, "\\.hc-design \\.btn-accent:hover");
    const raw = /html\.dark \.hc-design \.btn-accent:hover\{background:(#[0-9a-fA-F]{6})\}/.exec(
      css,
    );
    const value = raw?.[1] ?? hover;

    expect(value, `${sheet} : pas de survol accent redéfini en sombre`).toBeTruthy();
    const color = hex(value ?? "");
    expect(color, `${sheet} : survol "${value}" non calculable`).toBeTruthy();
    expect(contrastRatio(WHITE, color as RGB)).toBeGreaterThanOrEqual(MIN_RATIO);
  });

  /**
   * L'éyebrow des sections sombres est posé sur un fond noir fixe, pas sur un
   * jeton : sa couleur doit être littérale et indépendante du thème.
   */
  it.each(SHEETS)("%s garde une éyebrow lisible sur fond sombre", (sheet) => {
    const css = read(sheet);
    const match = /\.eyebrow\.on-dark\{color:(#[0-9a-fA-F]{3,6})\}/.exec(css);

    expect(match, `${sheet} : .eyebrow.on-dark n'est plus déclarée ici`).toBeTruthy();
    const color = hex(match?.[1] ?? "");
    expect(color).toBeTruthy();
    expect(contrastRatio(color as RGB, [10, 10, 10])).toBeGreaterThanOrEqual(
      MIN_RATIO,
    );
  });

  /**
   * Pastilles d'état de /services/securite-rgpd : le pictogramme blanc est un
   * élément non textuel (WCAG 1.4.11, 3:1), mais il est aussi le seul porteur
   * de l'information — on garde le seuil du texte.
   */
  it("garde les pastilles d'état sécurité au-dessus de 4,5:1", () => {
    const css = read("src/components/securite-rgpd/sections/sections.css");
    const backgrounds = [
      /\.sr-symp-answer-ic \{[^}]*background:\s*(#[0-9a-fA-F]{6})/,
      /\.sr-symp-answer-warn \.sr-symp-answer-ic \{ background: (#[0-9a-fA-F]{6}); \}/,
      /\.sr-symp-answer-urgent \.sr-symp-answer-ic \{ background: (#[0-9a-fA-F]{6}); \}/,
    ].map((pattern) => pattern.exec(css)?.[1]);

    expect(backgrounds.every(Boolean)).toBe(true);
    for (const background of backgrounds) {
      const color = hex(background ?? "");
      expect(color, `${background} non calculable`).toBeTruthy();
      expect(
        contrastRatio(WHITE, color as RGB),
        `#fff sur ${background}`,
      ).toBeGreaterThanOrEqual(MIN_RATIO);
    }
  });
});
