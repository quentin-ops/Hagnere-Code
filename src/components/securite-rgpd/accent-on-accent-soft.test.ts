import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

/**
 * Quand un jeton de TEXTE et son jeton de FOND sont tous les deux redéfinis
 * sous `html.dark`, le ratio n'est pas conservé — il doit être recalculé.
 *
 * `--accent` sur `--accent-soft` est le cas d'école du dépôt : en thème clair
 * c'est #6D28D9 sur #EDE9FE (5,98:1), et en sombre les deux jetons bougent dans
 * le MÊME sens relatif — l'accent s'éclaircit (#8B5CF6) pendant que la surface
 * s'assombrit (#2A1458). L'écart se referme et le ratio tombe à 3,70:1 : c'est
 * ce qui rendait pénibles les numéros du sommaire de /methode (10,5 px) et le
 * numéro de rail de /services/securite-rgpd (14 px).
 *
 * Le test ne cherche pas une couleur nommée : pour chaque règle qui pose du
 * texte sur `--accent-soft`, il résout la couleur effective dans les deux
 * thèmes (surcharge `html.dark` comprise) et calcule le ratio réel. Une autre
 * façon de repasser au-dessus du seuil — éclaircir `--accent-soft`, choisir un
 * troisième jeton — passe le test sans qu'il faille le retoucher.
 */

type RGB = [number, number, number];

const MIN_RATIO = 4.5; // WCAG 1.4.3 AA — 10,5 px et 14 px, donc texte courant

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

/**
 * Couleur de texte effective d'un sélecteur : la déclaration de base, puis la
 * surcharge `html.dark <selector>` si le thème sombre en pose une.
 */
function effectiveColor(
  css: string,
  selector: string,
  theme: "root" | "dark",
): string {
  const escaped = selector.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const pick = (source: string): string | null => {
    const rule = new RegExp(`(^|[},/*\\s])${escaped}\\s*\\{([^{}]*)\\}`, "m").exec(
      source,
    );
    if (!rule) return null;
    const color = /(?:^|[;{\s])color\s*:\s*([^;}]+)/.exec(rule[2]);
    return color ? color[1].trim() : null;
  };

  const base = pick(css.replace(/html\.dark [^{}]*\{[^{}]*\}/g, ""));
  if (theme === "root") {
    expect(base, `${selector} : aucune couleur de base`).toBeTruthy();
    return base as string;
  }

  const darkRule = new RegExp(
    `html\\.dark ${escaped}\\s*\\{([^{}]*)\\}`,
  ).exec(css);
  const dark = darkRule
    ? /(?:^|[;{\s])color\s*:\s*([^;}]+)/.exec(darkRule[1])?.[1].trim()
    : null;
  const value = dark ?? base;
  expect(value, `${selector} : aucune couleur résoluble en sombre`).toBeTruthy();
  return value as string;
}

/**
 * Règles qui posent du texte sur `--accent-soft`. Le fond est nommé ici parce
 * qu'il est déclaré dans la même règle ou héritée d'un parent unique.
 */
const CASES = [
  {
    label: "sommaire de /methode",
    sheet: "src/components/methode/page.css",
    tokens: "src/components/methode/page.css",
    selector: ".hc-design .mtoc-link.is-active .mtoc-num",
    /** Élément qui peint réellement le fond sous ce texte. */
    surfaceHolder: ".hc-design .mtoc-link.is-active",
    background: "accent-soft",
  },
  {
    label: "rail de procédure de /services/securite-rgpd",
    sheet: "src/components/securite-rgpd/sections/sections.css",
    tokens: "src/components/securite-rgpd/page.css",
    selector: ".sr-proc-rail-num",
    surfaceHolder: ".sr-proc-rail-num",
    background: "accent-soft",
  },
];

describe.each(CASES)("texte sur --accent-soft — $label", (item) => {
  const css = read(item.sheet);
  const tokens = read(item.tokens);

  it("pose bien son fond sur --accent-soft", () => {
    // Garde-fou : si le fond change, le ratio calculé plus bas ne décrit plus
    // ce que voit le visiteur. Le test doit alors être relu, pas cru sur parole.
    const escaped = item.surfaceHolder.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const rule = new RegExp(`${escaped}\\s*\\{([^{}]*)\\}`).exec(css);
    expect(
      rule?.[1],
      `${item.surfaceHolder} doit poser var(--${item.background})`,
    ).toMatch(new RegExp(`background:\\s*var\\(--${item.background}\\)`));
  });

  it.each(["root", "dark"] as const)(
    "reste au-dessus de 4,5:1 en thème %s",
    (theme) => {
      const declared = effectiveColor(css, item.selector, theme);
      const name = /^var\(--([a-z-]+)\)$/.exec(declared)?.[1];
      expect(name, `couleur "${declared}" non résoluble`).toBeTruthy();

      const ink = token(tokens, theme, name as string);
      const surface = token(tokens, theme, item.background);
      const ratio = contrastRatio(ink, surface);

      expect(
        ratio,
        `${item.selector} : --${name} sur --${item.background} → ${ratio.toFixed(2)}:1`,
      ).toBeGreaterThanOrEqual(MIN_RATIO);
    },
  );
});
