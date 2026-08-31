import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

/**
 * Le « / » du fil d'Ariane est un vrai nœud de texte dans le DOM : il tombe donc
 * sous WCAG 1.4.3, comme les maillons qui l'entourent.
 *
 * Il était peint par `var(--line)` — un jeton de FILET, calibré pour tracer une
 * bordure de 1 px, pas pour porter du texte. Résultat mesuré : 1,26:1 en clair
 * et 1,32:1 en sombre, sur toutes les pages service à la fois. L'échec n'était
 * donc pas propre au thème sombre : c'était un jeton employé hors de son rôle.
 *
 * Ce test relit la couleur écrite et la confronte au `--paper` du même thème.
 * Il n'impose aucune valeur : repasser sur `--mute`, sur `--ink-4` ou sur un
 * littéral suffisamment contrasté le laisse vert. Reprendre un jeton de filet
 * le fait échouer, quel que soit son nom.
 */

type RGB = [number, number, number];

const MIN_RATIO = 4.5; // WCAG 1.4.3 AA — le séparateur fait 12 px

const SHEETS = [
  "src/components/application-mobile/page.css",
  "src/components/audit-technique/page.css",
  "src/components/ecommerce/page.css",
  "src/components/publicite-en-ligne/page.css",
  "src/components/saas-applications/page.css",
  "src/components/securite-rgpd/page.css",
  "src/components/sites-vitrines/page.css",
];

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

/** Accepte la forme courte `#fff` autant que `#ffffff`. */
function hex(value: string): RGB {
  const match = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(value.trim());
  if (!match) throw new Error(`couleur non calculable : "${value}"`);
  const digits =
    match[1].length === 3
      ? match[1].replace(/./g, (d) => d + d)
      : match[1];
  const n = parseInt(digits, 16);
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

/** Couleur du séparateur, telle qu'écrite : jeton ou littéral. */
function separatorColor(css: string): string {
  const rule = /\.crumb \.sep\{([^}]*)\}/.exec(css);
  expect(rule, "règle .crumb .sep introuvable").toBeTruthy();
  const color = /(?:^|[;{\s])color\s*:\s*([^;}]+)/.exec(rule?.[1] ?? "");
  expect(color, ".crumb .sep ne déclare pas de couleur").toBeTruthy();
  return (color?.[1] ?? "").trim();
}

describe("séparateurs de fil d'Ariane", () => {
  it("teste réellement des feuilles qui déclarent la règle", () => {
    const declaring = SHEETS.filter((sheet) => read(sheet).includes(".crumb .sep{"));
    expect(declaring).toEqual(SHEETS);
  });

  it.each(SHEETS)("%s garde un séparateur lisible dans les deux thèmes", (sheet) => {
    const css = read(sheet);
    const declared = separatorColor(css);

    const failures = (["root", "dark"] as const).flatMap((theme) => {
      const name = /^var\(--([a-z0-9-]+)\)$/.exec(declared)?.[1];
      const ink = name ? token(css, theme, name) : hex(declared);
      const paper = token(css, theme, "paper");
      const ratio = contrastRatio(ink, paper);
      return ratio < MIN_RATIO
        ? [`${theme} : ${declared} sur --paper → ${ratio.toFixed(2)}:1`]
        : [];
    });

    expect(failures, failures.join("\n")).toEqual([]);
  });
});

/**
 * Le hero de /methode porte son propre fil d'Ariane, sur un dégradé ÉPINGLÉ
 * sombre (`linear-gradient(180deg,#0A0A0A,#0F0A1A)`) : ni `--paper` ni le thème
 * n'entrent en jeu, les couleurs y sont des `rgba(255,255,255,a)`. Le même
 * défaut s'y jouait donc dans les deux thèmes à la fois — le séparateur à 0,25
 * d'opacité tombait à 2,17:1.
 *
 * Le test compose l'alpha écrit sur le fond déclaré, et vérifie en plus que la
 * hiérarchie tient : le séparateur ne doit pas devenir plus voyant que les
 * maillons, ni les maillons plus voyants que la page courante. Sans cette
 * seconde assertion, « passer le séparateur en blanc » suffirait à faire
 * verdir le contraste en cassant la lecture.
 */
describe("fil d'Ariane du hero de /methode", () => {
  const css = read("src/components/methode/page.css");

  /** Stop le plus clair du dégradé du hero : le pire cas pour du texte clair. */
  function heroBackground(): RGB {
    const rule = /\.hc-design \.mhero\{([^}]*)\}/.exec(css);
    expect(rule, "règle .hc-design .mhero introuvable").toBeTruthy();
    const stops = [...(rule?.[1] ?? "").matchAll(/#([0-9a-fA-F]{6})/g)].map((m) =>
      hex(`#${m[1]}`),
    );
    expect(stops.length, ".mhero ne déclare plus de dégradé lisible").toBeGreaterThan(1);
    return stops.reduce((a, b) => (luminance(a) >= luminance(b) ? a : b));
  }

  /** `rgba(255,255,255,a)` composé sur le fond du hero. */
  function composited(selector: string): RGB {
    const escaped = selector.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const rule = new RegExp(`${escaped}\\{([^}]*)\\}`).exec(css);
    expect(rule, `règle ${selector} introuvable`).toBeTruthy();
    const color = /(?:^|[;{\s])color\s*:\s*([^;}]+)/.exec(rule?.[1] ?? "")?.[1].trim();
    expect(color, `${selector} ne déclare pas de couleur`).toBeTruthy();

    const numbers = (color ?? "").match(/[\d.]+/g)?.map(Number) ?? [];
    const background = heroBackground();
    if ((color ?? "").startsWith("#")) return hex(color as string);
    const [r, g, b, a = 1] = numbers;
    return [0, 1, 2].map((i) =>
      Math.round([r, g, b][i] * a + background[i] * (1 - a)),
    ) as RGB;
  }

  it("garde le séparateur du hero au-dessus de 4,5:1", () => {
    const ratio = contrastRatio(composited(".mhero-crumb .sep"), heroBackground());
    expect(ratio, `séparateur du hero → ${ratio.toFixed(2)}:1`).toBeGreaterThanOrEqual(
      MIN_RATIO,
    );
  });

  it("garde le séparateur en retrait des maillons et de la page courante", () => {
    const background = heroBackground();
    const separator = contrastRatio(composited(".mhero-crumb .sep"), background);
    const link = contrastRatio(composited(".mhero-crumb a"), background);
    const current = contrastRatio(
      composited(".mhero-crumb span:last-child"),
      background,
    );

    expect(separator).toBeLessThanOrEqual(link);
    expect(link).toBeLessThanOrEqual(current);
  });
});
