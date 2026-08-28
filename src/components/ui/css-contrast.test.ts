import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

/**
 * WCAG 1.4.3 : 4,5:1 pour un texte courant. Le contrôle ne demande pas de
 * navigateur : il relit chaque règle CSS qui déclare *à la fois* `color` et
 * `background`/`background-color`, résout les jetons `var(--x)` définis dans le
 * même fichier, et calcule le ratio.
 *
 * Il ne remplace pas un audit complet (il ignore les couleurs héritées d'un
 * parent), mais il attrape la classe d'erreur la plus fréquente — une pastille
 * ou un libellé coloré posé sur sa propre teinte pastel, comme le numéro
 * d'étape du calculateur Excel : #F59E0B sur #FEF3C7, soit 1,93:1.
 *
 * Périmètre : les feuilles de style corrigées lors de cette passe. Ajouter un
 * fichier à `STYLESHEETS` verrouille la même garantie ailleurs.
 */

const STYLESHEETS = [
  "src/components/tools/excel-calculator.css",
  "src/components/methode/page.css",
  "src/components/equipe/page.css",
  "src/components/contact/page.css",
  // Coquille partagée : une régression ici se compte en dizaines de pages.
  "src/components/design-shared/site-footer.css",
  "src/components/design-shared/nav-dropdown.css",
];

const MIN_RATIO = 4.5;

/**
 * Le thème sombre n'est pas encore verrouillé ici : le jeton `--accent`
 * (#8B5CF6) porte du blanc à 4,23:1 sur les boutons et pastilles accent, et ce
 * jeton est partagé par toutes les feuilles de page du site (tarifs, homepage,
 * services…). Le corriger dans deux fichiers seulement désynchroniserait la
 * charte. Passer `THEMES` à ["clair", "sombre"] une fois la teinte accent
 * sombre arbitrée globalement : le test signalera alors les 10 occurrences.
 */
const THEMES: ReadonlyArray<"clair" | "sombre"> = ["clair"];

function channel(value: number): number {
  const c = value / 255;
  return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
}

function luminance([r, g, b]: [number, number, number]): number {
  return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
}

export function contrastRatio(
  a: [number, number, number],
  b: [number, number, number],
): number {
  const [light, dark] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (light + 0.05) / (dark + 0.05);
}

/** N'accepte qu'une couleur opaque et sûre à comparer : #rgb, #rrggbb, rgb(). */
function parseColor(raw: string): [number, number, number] | null {
  const value = raw.trim();

  const short = /^#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(value);
  if (short) {
    return [
      parseInt(short[1] + short[1], 16),
      parseInt(short[2] + short[2], 16),
      parseInt(short[3] + short[3], 16),
    ];
  }

  const long = /^#([0-9a-f]{6})$/i.exec(value);
  if (long) {
    const n = parseInt(long[1], 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  }

  const rgb = /^rgb\(\s*(\d+)[\s,]+(\d+)[\s,]+(\d+)\s*\)$/i.exec(value);
  if (rgb) {
    return [Number(rgb[1]), Number(rgb[2]), Number(rgb[3])];
  }

  return null;
}

type Rule = { selector: string; block: string; dark: boolean };

function rules(css: string): Rule[] {
  const out: Rule[] = [];
  for (const match of css.matchAll(/([^{}]+)\{([^{}]*)\}/g)) {
    const selector = match[1].trim().replace(/\s+/g, " ");
    if (selector.startsWith("@")) continue;
    out.push({
      selector,
      block: match[2],
      dark: /html\.dark\b/.test(selector),
    });
  }
  return out;
}

/**
 * Deux palettes : la claire (déclarations hors `html.dark`) et la sombre
 * (la claire, écrasée par les redéfinitions de `html.dark`). Sans cette
 * distinction, un jeton redéfini pour le thème sombre deviendrait
 * irrésolvable et la règle qui l'utilise sortirait silencieusement du champ
 * du test — c'était exactement le cas de `--warn` / `--warn-soft`.
 */
function readPalettes(all: Rule[]): { light: Map<string, string>; dark: Map<string, string> } {
  const light = new Map<string, string>();
  const overrides = new Map<string, string>();

  for (const rule of all) {
    for (const decl of rule.block.matchAll(/(--[\w-]+)\s*:\s*([^;{}]+)(?:;|$)/g)) {
      const [, name, value] = decl;
      const target = rule.dark ? overrides : light;
      if (!target.has(name)) target.set(name, value.trim());
    }
  }

  return { light, dark: new Map([...light, ...overrides]) };
}

function resolve(value: string, tokens: Map<string, string>): string | null {
  const token = /^var\(\s*(--[\w-]+)\s*\)$/.exec(value.trim());
  if (!token) return value.trim();
  const resolved = tokens.get(token[1]);
  return resolved ?? null;
}

type Pair = {
  selector: string;
  theme: "clair" | "sombre";
  color: [number, number, number];
  background: [number, number, number];
};

function declaredPairs(css: string): Pair[] {
  const all = rules(css);
  const palettes = readPalettes(all);
  const pairs: Pair[] = [];

  for (const rule of all) {
    const colorDecl = /(?:^|[;{\s])color\s*:\s*([^;}]+)/.exec(rule.block);
    const bgDecl =
      /(?:^|[;{\s])background(?:-color)?\s*:\s*([^;}]+)/.exec(rule.block);
    if (!colorDecl || !bgDecl) continue;

    // Une règle neutre s'applique dans les deux thèmes : ses jetons changent.
    const themes = THEMES.filter((theme) =>
      rule.dark ? theme === "sombre" : true,
    );

    for (const theme of themes) {
      const tokens = theme === "clair" ? palettes.light : palettes.dark;
      const rawColor = resolve(colorDecl[1], tokens);
      const rawBg = resolve(bgDecl[1], tokens);
      if (!rawColor || !rawBg) continue;

      const color = parseColor(rawColor);
      const background = parseColor(rawBg);
      if (!color || !background) continue;

      pairs.push({ selector: rule.selector, theme, color, background });
    }
  }

  return pairs;
}

function readSheet(relativePath: string): Pair[] {
  return declaredPairs(
    fs.readFileSync(path.join(process.cwd(), relativePath), "utf8"),
  );
}

describe("contraste des paires color/background déclarées ensemble", () => {
  it("analyse réellement des règles (garde-fou anti-test-vide)", () => {
    const total = STYLESHEETS.reduce(
      (sum, sheet) => sum + readSheet(sheet).length,
      0,
    );
    expect(total).toBeGreaterThan(10);
  });

  it.each(STYLESHEETS)("%s tient 4,5:1", (relativePath) => {
    const failures = readSheet(relativePath)
      .map((pair) => ({ ...pair, ratio: contrastRatio(pair.color, pair.background) }))
      .filter((pair) => pair.ratio < MIN_RATIO)
      .map(
        (pair) =>
          `[${pair.theme}] ${pair.selector} → ${pair.ratio.toFixed(2)}:1 (rgb(${pair.color}) sur rgb(${pair.background}))`,
      );

    expect(failures, failures.join("\n")).toEqual([]);
  });

  /**
   * Le moteur ci-dessus ignore volontairement les couleurs semi-transparentes
   * (il ne sait pas sur quoi elles sont posées). La mention sous le CTA
   * Calendly est justement de celles-là : `rgba(255,255,255,α)` sur le dégradé
   * de `.sf-card`. Elle est rendue sur chaque page du site, donc on la vérifie
   * explicitement, en composant l'alpha sur les deux extrémités du dégradé.
   */
  it("tient 4,5:1 pour la mention monospace sous le CTA Calendly", () => {
    const css = fs.readFileSync(
      path.join(process.cwd(), "src/components/design-shared/site-footer.css"),
      "utf8",
    );

    const alpha = Number(
      /\.sf-card-meta\s*{[^}]*color:\s*rgba\(255,\s*255,\s*255,\s*([\d.]+)\)/
        .exec(css)?.[1],
    );
    const gradient =
      /\.sf-card\s*{[^}]*background:\s*linear-gradient\(180deg,\s*(#[0-9a-f]{6}),\s*(#[0-9a-f]{6})\)/i
        .exec(css);

    expect(Number.isFinite(alpha)).toBe(true);
    expect(gradient).not.toBeNull();

    const stops = [gradient![1], gradient![2]].map((stop) => {
      const rgb = parseColor(stop);
      expect(rgb, stop).not.toBeNull();
      return rgb as [number, number, number];
    });

    for (const background of stops) {
      const flattened = background.map((channelValue) =>
        Math.round(alpha * 255 + (1 - alpha) * channelValue),
      ) as [number, number, number];
      const ratio = contrastRatio(flattened, background);
      expect(ratio, `α=${alpha} sur rgb(${background})`).toBeGreaterThanOrEqual(
        MIN_RATIO,
      );
    }
  });

  it("calcule un ratio conforme à la formule WCAG", () => {
    // Noir sur blanc = 21:1, la borne haute de l'échelle.
    expect(contrastRatio([0, 0, 0], [255, 255, 255])).toBeCloseTo(21, 5);
    // Le défaut d'origine : ambre #F59E0B sur ambre pastel #FEF3C7.
    expect(contrastRatio([245, 158, 11], [254, 243, 199])).toBeLessThan(2);
  });
});
