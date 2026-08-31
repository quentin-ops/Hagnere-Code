import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

/**
 * Les cartes « ce qu'on fait » de /services/audit-technique et
 * /services/publicite-en-ligne portent une étiquette de famille et un glyphe
 * d'icône posés sur une DILUTION de la couleur de famille :
 *
 *   background: color-mix(in srgb, var(--wwd-color) 10%, var(--paper) 90%)
 *
 * La moitié `--paper` bascule avec le thème, la couleur de famille est un
 * littéral figé : le ratio n'est donc PAS conservé d'un thème à l'autre. Une
 * teinte foncée (violet 700, bleu LinkedIn, encre neutre) échoue sur sa
 * dilution SOMBRE — l'encre neutre allait jusqu'à se peindre sur elle-même à
 * 1,01:1 — et une teinte claire (ambre, émeraude, ciel) échoue sur sa dilution
 * CLAIRE. D'où la séparation en deux jetons : `--wwd-color` identifie,
 * `--wwd-ink` écrit.
 *
 * Ce test ne fige aucune couleur : il relit les valeurs écrites dans la
 * feuille, recompose la dilution exactement comme le fait `color-mix`, et
 * calcule le ratio réel. Ajouter une famille, changer une teinte ou retoucher
 * le pourcentage de dilution reste libre — tant que l'étiquette reste lisible
 * dans les deux thèmes.
 */

type RGB = [number, number, number];

const MIN_TEXT_RATIO = 4.5; // WCAG 1.4.3 AA, texte courant de 11 px

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

/** `color-mix(in srgb, a p%, b (100-p)%)` : mélange linéaire des octets sRGB. */
function mix(a: RGB, b: RGB, share: number): RGB {
  return [0, 1, 2].map((i) =>
    Math.round(a[i] * share + b[i] * (1 - share)),
  ) as RGB;
}

function read(relativePath: string): string {
  return fs.readFileSync(path.join(process.cwd(), relativePath), "utf8");
}

type Page = {
  label: string;
  prefix: string;
  sections: string;
  page: string;
};

const PAGES: Page[] = [
  {
    label: "/services/audit-technique",
    prefix: "at",
    sections: "src/components/audit-technique/sections/sections.css",
    page: "src/components/audit-technique/page.css",
  },
  {
    label: "/services/publicite-en-ligne",
    prefix: "ads",
    sections: "src/components/publicite-en-ligne/sections/sections.css",
    page: "src/components/publicite-en-ligne/page.css",
  },
];

/** Valeur d'un jeton dans le bloc `:root` (clair) ou `html.dark` (sombre). */
function token(css: string, block: "root" | "dark", name: string): RGB {
  const opener = block === "root" ? ":root" : "html.dark";
  const start = css.indexOf(`${opener} {`);
  const body = css.slice(start, css.indexOf("}", start));
  const match = new RegExp(`--${name}\\s*:\\s*(#[0-9a-fA-F]{6})`).exec(body);
  if (!match) throw new Error(`jeton --${name} absent du bloc ${opener}`);
  return hex(match[1]);
}

/**
 * Part de `--wwd-color` dans la dilution déclarée par une règle, lue dans la
 * feuille plutôt que recopiée ici : si le pourcentage bouge, le test suit.
 */
function dilutionShare(css: string, selector: string): number {
  const start = css.indexOf(`${selector} {`);
  expect(start, `règle ${selector} introuvable`).toBeGreaterThan(-1);
  const body = css.slice(start, css.indexOf("}", start));
  const match =
    /color-mix\(in srgb,\s*var\(--wwd-color\)\s*(\d+)%/.exec(body);
  if (!match) throw new Error(`${selector} ne dilue plus --wwd-color`);
  return Number(match[1]) / 100;
}

/** Déclarations `--wwd-*` par famille, thème clair puis surcharges sombres. */
function families(css: string, prefix: string) {
  const base = new RegExp(
    `\\.${prefix}-wwd-card\\[data-family="([a-z-]+)"\\]\\s*\\{([^}]*)\\}`,
    "g",
  );
  const dark = new RegExp(
    `html\\.dark \\.${prefix}-wwd-card\\[data-family="([a-z-]+)"\\]\\s*\\{([^}]*)\\}`,
    "g",
  );

  const out = new Map<
    string,
    { color: RGB; inkLight?: RGB; inkDark?: RGB; darkColor?: RGB }
  >();

  for (const m of css.matchAll(base)) {
    // `matchAll` sur la règle de base attrape aussi les règles `html.dark`,
    // qui en sont un suffixe : on les laisse au second balayage.
    const before = css.slice(Math.max(0, m.index - 11), m.index);
    if (before.endsWith("html.dark ")) continue;
    const decl = m[2];
    const color = /--wwd-color:\s*(#[0-9a-fA-F]{6})/.exec(decl);
    if (!color) continue;
    const inkLight = /--wwd-ink-light:\s*(#[0-9a-fA-F]{6})/.exec(decl);
    const inkDark = /--wwd-ink-dark:\s*(#[0-9a-fA-F]{6})/.exec(decl);
    out.set(m[1], {
      color: hex(color[1]),
      inkLight: inkLight ? hex(inkLight[1]) : undefined,
      inkDark: inkDark ? hex(inkDark[1]) : undefined,
    });
  }

  for (const m of css.matchAll(dark)) {
    const entry = out.get(m[1]);
    if (!entry) continue;
    const color = /--wwd-color:\s*(#[0-9a-fA-F]{6})/.exec(m[2]);
    if (color) entry.darkColor = hex(color[1]);
    const inkDark = /--wwd-ink-dark:\s*(#[0-9a-fA-F]{6})/.exec(m[2]);
    if (inkDark) entry.inkDark = hex(inkDark[1]);
  }

  return out;
}

describe.each(PAGES)("étiquettes de famille — $label", (page) => {
  const css = read(page.sections);
  const tokens = read(page.page);

  /**
   * Garde-fou anti-test-vide : sans ce contrôle, renommer la classe ou
   * repasser la couleur du texte sur `--wwd-color` rendrait tout le reste du
   * fichier vert sans rien vérifier.
   */
  it("écrit l'étiquette et le glyphe avec --wwd-ink, pas --wwd-color", () => {
    for (const selector of [`.${page.prefix}-wwd-badge`, `.${page.prefix}-wwd-icon`]) {
      const start = css.indexOf(`${selector} {`);
      expect(start, `règle ${selector} introuvable`).toBeGreaterThan(-1);
      const body = css.slice(start, css.indexOf("}", start));
      expect(body, `${selector} doit écrire avec var(--wwd-ink)`).toMatch(
        /color:\s*var\(--wwd-ink\)/,
      );
    }
  });

  /**
   * Second garde-fou anti-test-vide, sur l'axe que le premier ne couvrait pas.
   *
   * Tout ce fichier MODÉLISE la résolution de `--wwd-ink` au lieu de la lire :
   * il calcule les contrastes à partir de `--wwd-ink-light` / `--wwd-ink-dark`
   * en supposant que deux règles de bascule les branchent. Supprimer la ligne
   * `html.dark .<prefix>-wwd-card { --wwd-ink: ... }` laissait donc les 60 tests
   * VERTS — alors que la mesure au navigateur, après cette suppression, faisait
   * tomber 13 des 16 étiquettes sous 4,5:1 en thème sombre, jusqu'à 2,63:1.
   * Le test protégeait tout sauf la ligne qui porte la correction.
   */
  it("branche --wwd-ink dans les deux thèmes", () => {
    for (const [theme, selecteur] of [
      ["clair", `.${page.prefix}-wwd-card`],
      ["sombre", `html.dark .${page.prefix}-wwd-card`],
    ] as const) {
      const regle = new RegExp(
        `${selecteur.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s*\\{[^}]*--wwd-ink:\\s*var\\(--wwd-ink-${theme === "clair" ? "light" : "dark"}`,
      );
      expect(
        css,
        `${selecteur} doit brancher --wwd-ink sur --wwd-ink-${theme === "clair" ? "light" : "dark"} : sans cette règle, les contrastes calculés ici ne décrivent plus la page`,
      ).toMatch(regle);
    }
  });

  it("déclare au moins six familles", () => {
    expect(families(css, page.prefix).size).toBeGreaterThanOrEqual(6);
  });

  const cases: Array<[string, "root" | "dark", string]> = [
    ["étiquette", "root", `.${page.prefix}-wwd-badge`],
    ["étiquette", "dark", `.${page.prefix}-wwd-badge`],
    ["glyphe", "root", `.${page.prefix}-wwd-icon`],
    ["glyphe", "dark", `.${page.prefix}-wwd-icon`],
  ];

  it.each(cases)(
    "%s reste au-dessus de 4,5:1 en thème %s",
    (_what, theme, selector) => {
      const paper = token(tokens, theme, "paper");
      const share = dilutionShare(css, selector);

      const failures = [...families(css, page.prefix).entries()].flatMap(
        ([name, family]) => {
          const identity =
            theme === "dark" ? (family.darkColor ?? family.color) : family.color;
          const ink =
            theme === "dark"
              ? (family.inkDark ?? identity)
              : (family.inkLight ?? identity);
          const background = mix(identity, paper, share);
          const ratio = contrastRatio(ink, background);
          return ratio < MIN_TEXT_RATIO
            ? [`${name} : ${ratio.toFixed(2)}:1`]
            : [];
        },
      );

      expect(failures, failures.join("\n")).toEqual([]);
    },
  );
});
