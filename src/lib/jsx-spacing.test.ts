import { readdirSync, readFileSync } from "node:fs";
import { join, relative } from "node:path";
import ts from "typescript";
import { describe, expect, it } from "vitest";

/**
 * Mots collés à un lien (ou à un texte en gras) dans les pages JSX.
 *
 * Le 08/10/2026, la page /agence-next-js affichait en production « Notre page
 * réalisationsinventorie les quatre produits… ». Deux mécanismes différents
 * produisent cette faute, tous deux invisibles à la lecture rapide de la source
 * et au rendu des tests :
 *
 * 1. SWC, le compilateur du build de production de Next 16.2, supprime l'espace
 *    de tête d'un texte JSX posé juste après un élément quand ce texte tient
 *    sur plusieurs lignes ET contient une entité HTML (&apos;, &nbsp;, &amp;…).
 *    Mesuré sur le SWC de Next et sur esbuild (Vitest) :
 *
 *      <p>x <a>lien</a> d&apos;autre</p>               → espace gardée par les deux
 *      <p>x <a>lien</a> suite                          → espace PERDUE par SWC,
 *           d&apos;autre sur la ligne suivante</p>        gardée par esbuild
 *
 *    La source est juste, les tests passent, seule la page construite est
 *    fausse. Onze occurrences corrigées le 08/10/2026.
 *
 * 2. La règle classique de JSX : un saut de ligne entre un élément et le texte
 *    voisin supprime l'espace. `</a>⏎ pour les situations` donne « droitspour ».
 *    Trois occurrences corrigées le 08/10/2026 (page d'accessibilité,
 *    réclamations).
 *
 * Le remède est le même : une espace explicite, `</a>{" "}pour…`. Ce test lit le
 * code et cherche ces deux formes. Si Next corrige un jour le point 1, la
 * première règle pourra être retirée.
 */

const ROOT = process.cwd();

/** Parents où l'on écrit de la prose : un mot collé y est une faute visible. */
const PROSE_PARENTS = new Set([
  "p", "li", "td", "th", "dd", "dt", "blockquote", "h1", "h2", "h3", "h4", "h5", "h6",
  "em", "strong", "b", "i", "small", "figcaption", "summary", "label",
]);

/**
 * Éléments en ligne qui portent du texte lu. `sup` et `sub` sont absents : « 1er »,
 * « 75e » se collent exprès. Un `span` de mise en page (`block`, `flex`) est écarté.
 */
const INLINE_TEXT = new Set([
  "a", "Link", "strong", "b", "em", "i", "code", "abbr", "mark", "small", "kbd", "u", "time", "cite", "span",
]);

export type SpacingFault = {
  rule: "swc-espace-de-tete" | "saut-de-ligne";
  line: number;
  context: string;
};

const WORD = /[\p{L}\p{N}]/u;

function tagName(node: ts.Node): string | null {
  if (ts.isJsxElement(node)) return node.openingElement.tagName.getText();
  if (ts.isJsxSelfClosingElement(node)) return node.tagName.getText();
  return null;
}

function isLayoutSpan(node: ts.JsxElement): boolean {
  if (node.openingElement.tagName.getText() !== "span") return false;
  return /\b(block|flex|inline-flex|grid)\b/.test(node.openingElement.attributes.getText());
}

/**
 * Caractère visible au bord d'un nœud, tel que React le rendra : " " pour une
 * espace gardée, une lettre, ou null quand on ne sait pas.
 */
function visibleEdge(node: ts.JsxChild, side: "start" | "end"): string | null {
  if (ts.isJsxText(node)) {
    const raw = node.text;
    if (/^\s*$/.test(raw)) return /\n/.test(raw) ? null : " ";
    const margin = (side === "start" ? raw.match(/^\s*/) : raw.match(/\s*$/))?.[0] ?? "";
    if (margin && !/\n/.test(margin)) return " ";
    return side === "start" ? raw.trimStart()[0] : raw.trimEnd().slice(-1);
  }
  if (ts.isJsxExpression(node)) {
    const expression = node.expression;
    if (expression && (ts.isStringLiteral(expression) || ts.isNoSubstitutionTemplateLiteral(expression))) {
      return side === "start" ? (expression.text[0] ?? null) : (expression.text.slice(-1) || null);
    }
    return "?";
  }
  if (ts.isJsxElement(node)) {
    const children = node.children.filter(
      (child) => !(ts.isJsxText(child) && /^\s*$/.test(child.text) && /\n/.test(child.text)),
    );
    if (children.length === 0) return null;
    return visibleEdge(side === "start" ? children[0] : children[children.length - 1], side);
  }
  return null;
}

function isReadableInline(node: ts.JsxChild | undefined): node is ts.JsxElement {
  return (
    node !== undefined &&
    ts.isJsxElement(node) &&
    INLINE_TEXT.has(tagName(node) ?? "") &&
    !isLayoutSpan(node)
  );
}

export function spacingFaults(fileName: string, source: string): SpacingFault[] {
  const sf = ts.createSourceFile(fileName, source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const faults: SpacingFault[] = [];
  const lineOf = (pos: number) => sf.getLineAndCharacterOfPosition(pos).line + 1;
  const squeeze = (text: string) => text.replace(/\s+/g, " ").trim();

  const visit = (node: ts.Node): void => {
    if (ts.isJsxElement(node) || ts.isJsxFragment(node)) {
      const children = node.children;
      const parentTag = ts.isJsxElement(node) ? tagName(node) : null;

      children.forEach((child, index) => {
        if (!ts.isJsxText(child) || /^\s*$/.test(child.text)) return;
        const previous = children[index - 1];
        const next = children[index + 1];

        // 1. SWC : texte multi-ligne avec entité, qui commence par une espace après un élément.
        const raw = child.text;
        const multiLine = /\n/.test(raw.trim());
        const hasEntity = /&[a-zA-Z#0-9]+;/.test(raw);
        const startsWithSpace = /^[ \t]+\S/.test(raw);
        if (previous && !ts.isJsxText(previous) && multiLine && hasEntity && startsWithSpace) {
          faults.push({
            rule: "swc-espace-de-tete",
            line: lineOf(child.pos),
            context: `…${squeeze(previous.getText(sf)).slice(-40)} ⟦${squeeze(raw).slice(0, 40)}…`,
          });
        }

        // 2. Saut de ligne entre de la prose et un lien ou un texte en gras voisin.
        if (parentTag === null || !PROSE_PARENTS.has(parentTag)) return;
        const here = { start: visibleEdge(child, "start"), end: visibleEdge(child, "end") };

        if (isReadableInline(previous)) {
          const edge = visibleEdge(previous, "end");
          if (edge && WORD.test(edge) && here.start && WORD.test(here.start)) {
            faults.push({
              rule: "saut-de-ligne",
              line: lineOf(child.pos),
              context: `…${squeeze(previous.getText(sf)).slice(-40)} ⟦${squeeze(raw).slice(0, 40)}…`,
            });
          }
        }
        if (isReadableInline(next)) {
          const edge = visibleEdge(next, "start");
          if (edge && WORD.test(edge) && here.end && WORD.test(here.end)) {
            faults.push({
              rule: "saut-de-ligne",
              line: lineOf(child.end),
              context: `…${squeeze(raw).slice(-40)} ⟦${squeeze(next.getText(sf)).slice(0, 40)}…`,
            });
          }
        }
      });
    }
    ts.forEachChild(node, visit);
  };
  visit(sf);
  return faults;
}

function tsxFiles(dir: string, out: string[] = []): string[] {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== "node_modules") tsxFiles(path, out);
    } else if (entry.name.endsWith(".tsx") && !entry.name.endsWith(".test.tsx")) {
      out.push(path);
    }
  }
  return out;
}

describe("mots collés à un lien dans les pages JSX", () => {
  it("repère la forme qui a collé « réalisations » à « inventorie » (perte d'espace par SWC)", () => {
    const bad = `export const A = () => (
  <p>
    Notre page <a href="/x">réalisations</a> inventorie les quatre
    produits d&apos;autre part.
  </p>
);`;
    const faults = spacingFaults("A.tsx", bad);
    expect(faults.map((fault) => fault.rule)).toEqual(["swc-espace-de-tete"]);
    expect(faults[0].context).toContain("inventorie");
  });

  it("repère un lien séparé du mot suivant, ou précédent, par un simple saut de ligne", () => {
    const bad = `export const A = () => (
  <>
    <p>
      vous pouvez vous rapprocher du<a href="/x">Défenseur</a>
      pour les situations relevant de ses compétences.
    </p>
    <p>
      Vous pouvez saisir la
      <a href="/y">CNIL</a> directement.
    </p>
  </>
);`;
    const faults = spacingFaults("A.tsx", bad);
    // « du<a>… » (mot→lien), « …</a>⏎pour » (lien→mot) et « la⏎<a>CNIL… » (mot→lien).
    expect(faults.map((fault) => fault.rule)).toEqual(["saut-de-ligne", "saut-de-ligne", "saut-de-ligne"]);
  });

  it("laisse passer les formes sûres", () => {
    const safe = `export const A = () => (
  <>
    <p>Notre <a href="/x">page</a>{" "}inventorie les quatre
    produits d&apos;autre part.</p>
    <p>Notre <a href="/x">page</a> inventorie d&apos;autre part</p>
    <p>Notre <a href="/x">page</a> inventorie les quatre
    produits sans entité.</p>
    <p>
      pour les cas
      <a href="/x"> Défenseur des droits</a>{" "}
      pour les situations.
    </p>
    <p>Le <strong>1<sup>er</sup></strong> et le 75<sup>e</sup> jour, le prix<span className="block">HT</span></p>
    <p>Un résultat <a href="/x">lien</a>, puis un point.</p>
    <p>{count} ligne{count > 1 ? "s" : ""}</p>
  </>
);`;
    expect(spacingFaults("A.tsx", safe)).toEqual([]);
  });

  it("n'en laisse aucun dans les pages et composants du site", () => {
    const offenders = tsxFiles(join(ROOT, "src")).flatMap((file) =>
      spacingFaults(file, readFileSync(file, "utf8")).map(
        (fault) => `${relative(ROOT, file)}:${fault.line}  [${fault.rule}]  ${fault.context}`,
      ),
    );

    expect(
      offenders,
      'Mot collé à un lien : écrire {" "} entre l\'élément et le texte (voir l\'en-tête de ce fichier).',
    ).toEqual([]);
  });
});
