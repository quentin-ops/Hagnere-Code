import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

/**
 * Le calculateur Excel est une page d'atterrissage : elle sera servie à du
 * trafic payant, majoritairement mobile, et ses cinq curseurs sont le seul
 * geste demandé au visiteur. Une piste de 8 px de haut faisait de ce geste
 * la partie la plus difficile de la page.
 */
const styles = readFileSync(
  join(process.cwd(), "src/components/tools/excel-calculator.css"),
  "utf8",
);
const source = readFileSync(
  join(process.cwd(), "src/components/tools/ExcelCalculator.tsx"),
  "utf8",
);

/** Bloc de déclarations d'un sélecteur exact, tel qu'écrit dans la feuille. */
function block(selector: string): string {
  const index = styles.indexOf(`${selector} {`);
  expect(index, `sélecteur absent : ${selector}`).toBeGreaterThan(-1);
  const start = styles.indexOf("{", index);
  return styles.slice(start + 1, styles.indexOf("}", start));
}

describe("curseurs du calculateur — cible tactile", () => {
  it("porte la zone attrapable du curseur à 44 px", () => {
    const input = block('.calc-field input[type="range"]');
    expect(input).toMatch(/height:\s*44px/);
    // La hauteur ne sert qu'à la cible : la piste visible est redessinée
    // dans les pseudo-éléments, l'élément lui-même reste transparent.
    expect(input).toMatch(/background:\s*transparent/);
    expect(input).toMatch(/border:\s*0/);
    expect(input).not.toMatch(/height:\s*8px/);
  });

  it("redessine la piste dans les deux moteurs", () => {
    for (const selector of [
      '.calc-field input[type="range"]::-webkit-slider-runnable-track',
      '.calc-field input[type="range"]::-moz-range-track',
    ]) {
      const track = block(selector);
      expect(track).toMatch(/height:\s*8px/);
      expect(track).toMatch(/background:\s*var\(--paper-3\)/);
      expect(track).toMatch(/border-radius:\s*999px/);
    }
  });

  it("garde un état de survol sur la piste, pas sur la zone transparente", () => {
    for (const selector of [
      '.calc-field input[type="range"]:hover::-webkit-slider-runnable-track',
      '.calc-field input[type="range"]:hover::-moz-range-track',
      'html.dark .calc-field input[type="range"]:hover::-webkit-slider-runnable-track',
      'html.dark .calc-field input[type="range"]:hover::-moz-range-track',
    ]) {
      expect(block(selector)).toMatch(/background:/);
    }
    // Repeindre l'input lui-même remplirait les 44 px de la cible.
    expect(styles).not.toMatch(
      /\.calc-field input\[type="range"\]:hover\s*{/,
    );
  });

  it("laisse un anneau de focus au clavier", () => {
    // `outline: none` sur l'élément écrasait la règle globale
    // `:focus-visible` : le curseur devenait invisible au Tab.
    const focus = block('.calc-field input[type="range"]:focus-visible');
    expect(focus).toMatch(/outline:\s*2px solid/);
  });
});

describe("capture du calculateur — un 200 ne vaut pas réception", () => {
  it("n'annonce la capture que si la route l'a confirmée", () => {
    // /api/project-inquiry répond 200 `{ ok: true, captured: false }` sans
    // rien enregistrer : le seul `res.ok` affichait « demande envoyée ».
    expect(source).toContain("if (!res.ok || json.captured !== true) {");
    expect(source).not.toMatch(/if \(!res\.ok\)\s*\{/);
  });
});
