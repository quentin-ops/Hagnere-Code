import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

import { composedBodyHtml as auditTechniqueHtml } from "@/components/audit-technique/composed-body";
import { composedBodyHtml as securiteRgpdHtml } from "@/components/securite-rgpd/composed-body";
import { composedBodyHtml as sitesVitrinesHtml } from "@/components/sites-vitrines/composed-body";
import { composedBodyHtml as ecommerceHtml } from "@/components/ecommerce/composed-body";
import { composedBodyHtml as publiciteEnLigneHtml } from "@/components/publicite-en-ligne/composed-body";
import { composedBodyHtml as saasApplicationsHtml } from "@/components/saas-applications/composed-body";
import { composedBodyHtml as applicationMobileHtml } from "@/components/application-mobile/composed-body";

/**
 * Ces pages sont des CHAÎNES de caractères assemblées par `composed-body.ts`
 * puis injectées en `dangerouslySetInnerHTML` : ni TypeScript ni le build ne
 * regardent à l'intérieur. Une balise fermante en trop y passe donc sans bruit
 * jusqu'au navigateur, où l'analyseur HTML la traite à sa façon — un `</svg>`
 * orphelin est ignoré, mais un `</div>` orphelin referme un conteneur trop tôt,
 * ce qui a déjà sorti une page entière de son enveloppe de thème ET provoqué un
 * échec d'hydratation React.
 *
 * L'analyseur ci-dessous est le garde-fou que rien d'autre ne fournit : une
 * pile appliquée à chaque export `bodyHtml` du périmètre, qui échoue sur toute
 * balise fermante orpheline et sur toute balise laissée ouverte. Il ne dépend
 * d'aucun contenu rédactionnel : réécrire une section entière ne le fait pas
 * broncher, déséquilibrer une balise oui.
 */

/** Éléments sans contenu : HTML vides, plus les primitives SVG usuelles. */
const VOID_ELEMENTS = new Set([
  "area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta",
  "param", "source", "track", "wbr",
  "path", "circle", "rect", "line", "polyline", "polygon", "ellipse", "stop",
  "use", "image", "animate", "set", "feoffset", "fegaussianblur",
  "fecolormatrix", "femerge", "femergenode", "feblend", "feflood", "fecomposite",
]);

const TAG =
  /<(\/?)([A-Za-z][A-Za-z0-9-]*)((?:[^<>"']|"[^"]*"|'[^']*')*?)(\/?)>/g;

type Imbalance = { line: number; message: string };

function unbalancedTags(html: string): Imbalance[] {
  const stripped = html.replace(/<!--[\s\S]*?-->/g, "");
  const stack: Array<{ name: string; line: number }> = [];
  const problems: Imbalance[] = [];
  const lineOf = (index: number) =>
    stripped.slice(0, index).split("\n").length;

  TAG.lastIndex = 0;
  let match: RegExpExecArray | null;
  while ((match = TAG.exec(stripped)) !== null) {
    const [, closing, rawName, , selfClosing] = match;
    const name = rawName.toLowerCase();
    if (selfClosing === "/" || VOID_ELEMENTS.has(name)) continue;

    if (!closing) {
      stack.push({ name, line: lineOf(match.index) });
      continue;
    }

    const top = stack[stack.length - 1];
    if (!top) {
      problems.push({
        line: lineOf(match.index),
        message: `</${name}> orpheline : plus rien d'ouvert à cet endroit`,
      });
    } else if (top.name !== name) {
      problems.push({
        line: lineOf(match.index),
        message: `</${name}> ferme alors que <${top.name}> (ouverte ligne ${top.line}) est encore en cours`,
      });
      // On resynchronise pour ne pas transformer une anomalie en cascade.
      const depth = stack.map((entry) => entry.name).lastIndexOf(name);
      if (depth >= 0) stack.length = depth;
    } else {
      stack.pop();
    }
  }

  for (const open of stack) {
    problems.push({
      line: open.line,
      message: `<${open.name}> jamais refermée`,
    });
  }
  return problems;
}

const PAGES: Array<[string, string]> = [
  ["audit-technique", auditTechniqueHtml],
  ["securite-rgpd", securiteRgpdHtml],
  ["sites-vitrines", sitesVitrinesHtml],
  ["ecommerce", ecommerceHtml],
  ["publicite-en-ligne", publiciteEnLigneHtml],
  ["saas-applications", saasApplicationsHtml],
  ["application-mobile", applicationMobileHtml],
];

describe("équilibrage des gabarits HTML en chaîne", () => {
  /**
   * Garde-fou anti-test-vide : un import cassé rendrait une chaîne vide, que
   * l'analyseur déclarerait parfaitement équilibrée.
   */
  it.each(PAGES)("%s livre bien un gabarit à analyser", (_name, html) => {
    expect(html.length).toBeGreaterThan(5000);
    expect(html).toContain("</div>");
  });

  it.each(PAGES)("%s ne laisse aucune balise déséquilibrée", (_name, html) => {
    const problems = unbalancedTags(html);
    const report = problems
      .map((problem) => `  ligne ${problem.line} : ${problem.message}`)
      .join("\n");
    expect(problems, `\n${report}`).toEqual([]);
  });

  /** L'analyseur doit mordre, sinon il ne protège rien. */
  it("détecte une fermante orpheline et une ouvrante oubliée", () => {
    expect(unbalancedTags("<div><span></span></div></div>")).toHaveLength(1);
    expect(unbalancedTags("<section><div></section>")).not.toEqual([]);
    expect(unbalancedTags("<div><br><img src='x'></div>")).toEqual([]);
    expect(unbalancedTags("<svg><path d='M0 0'/></svg>")).toEqual([]);
    // Un `<` littéral dans du texte ne doit pas être pris pour une balise.
    expect(unbalancedTags("<p>3 &lt; 4</p>")).toEqual([]);
  });
});

/** Le fichier doit rester au contact des pages qu'il protège. */
it("couvre chaque page du périmètre qui possède un composed-body", () => {
  const root = path.join(process.cwd(), "src/components");
  const covered = new Set(PAGES.map(([name]) => name));
  const missing = [...covered].filter(
    (name) => !fs.existsSync(path.join(root, name, "composed-body.ts")),
  );
  expect(missing, `composed-body.ts introuvable pour : ${missing}`).toEqual([]);
});
