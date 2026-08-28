import fs from "node:fs";
import path from "node:path";
import { Window } from "happy-dom";
import { describe, expect, it } from "vitest";

/**
 * Les accordéons de FAQ étaient des `<div class="faq-q">` : ni focalisables, ni
 * annoncés comme un contrôle, et leur réponse restait dans l'arbre
 * d'accessibilité (repli par `max-height: 0`, qui masque à l'œil mais pas au
 * lecteur d'écran). `useDesignInteractive` posait bien `role="button"`,
 * `aria-expanded` et `aria-controls`, mais seulement après hydratation : entre
 * le premier rendu et l'exécution du JavaScript, une page de 20 questions
 * exposait ses 20 réponses d'un bloc.
 *
 * Le gabarit émet désormais l'état correct dès le HTML servi :
 *   `<button type="button" class="faq-q" aria-expanded aria-controls="…">`
 *   `<div class="faq-a" id="…" hidden>`
 * et les feuilles de style replient par `display` plutôt que par une hauteur.
 *
 * Périmètre : les gabarits de ce lot. `homepage`, `methode`, `tarifs` et
 * `equipe` appartiennent à d'autres répertoires et devront suivre.
 */
const TEMPLATES = [
  "publicite-en-ligne/sections/faq.ts",
  "publicite-en-ligne/sections/tech-faq.ts",
  "maintenance-evolution/sections/faq.ts",
  "maintenance-evolution/sections/tech-faq.ts",
  "audit-technique/sections/faq.ts",
  "audit-technique/sections/tech-faq.ts",
  "securite-rgpd/sections/faq.ts",
  "securite-rgpd/sections/tech-faq.ts",
  "contenu-video/sections/faq.ts",
  "contenu-video/sections/tech-faq.ts",
  "sites-vitrines/sections/tech-faq.ts",
  "sites-vitrines/body.ts",
  "saas-applications/sections/tech-faq.ts",
  "saas-applications/body.ts",
  "outils-internes/sections/tech-faq.ts",
  "outils-internes/body.ts",
  "ecommerce/sections/tech-faq.ts",
  "ecommerce/faq-content.ts",
  "application-mobile/body.ts",
  "contact/body.ts",
];

/** Feuilles qui replient une réponse de FAQ. */
const STYLESHEETS = [
  "application-mobile/page.css",
  "audit-technique/page.css",
  "contact/page.css",
  "contenu-video/page.css",
  "ecommerce/page.css",
  "maintenance-evolution/page.css",
  "outils-internes/page.css",
  "publicite-en-ligne/page.css",
  "saas-applications/page.css",
  "securite-rgpd/page.css",
  "sites-vitrines/page.css",
];

const componentsRoot = path.join(process.cwd(), "src/components");

function read(relativePath: string): string {
  return fs.readFileSync(path.join(componentsRoot, relativePath), "utf8");
}

function questions(source: string): string[] {
  return source.match(/<button[^>]*class="faq-q"[^>]*>/g) ?? [];
}

function attribute(tag: string, name: string): string | undefined {
  return tag.match(new RegExp(`${name}="([^"]*)"`))?.[1];
}

describe("contrat des accordéons de FAQ", () => {
  it("couvre bien tous les gabarits qui déclarent une FAQ", () => {
    const declaring = fs
      .readdirSync(componentsRoot, { withFileTypes: true })
      .filter((entry) => entry.isDirectory())
      .flatMap((entry) => {
        const dir = path.join(componentsRoot, entry.name);
        const files = [
          ...fs.readdirSync(dir).map((file) => path.join(entry.name, file)),
          ...(fs.existsSync(path.join(dir, "sections"))
            ? fs
                .readdirSync(path.join(dir, "sections"))
                .map((file) => path.join(entry.name, "sections", file))
            : []),
        ];
        return files.filter(
          (file) =>
            file.endsWith(".ts") &&
            !file.includes(".test.") &&
            read(file).includes('class="faq-q"'),
        );
      });

    // Répertoires appartenant à d'autres lots, à faire migrer ensuite.
    const pending = declaring.filter(
      (file) => !TEMPLATES.includes(file.split(path.sep).join("/")),
    );

    expect(pending.sort()).toEqual([
      "equipe/body.ts",
      "homepage/body.ts",
      "methode/body.ts",
      "tarifs/body.ts",
    ]);
  });

  it.each(TEMPLATES)("%s expose ses questions comme des boutons", (file) => {
    const source = read(file);
    const tags = questions(source);

    expect(tags.length, `${file} : aucune question trouvée`).toBeGreaterThan(0);
    // Plus aucune question ne reste un <div> non focalisable.
    expect(source).not.toContain('<div class="faq-q"');

    for (const tag of tags) {
      expect(tag, file).toContain('type="button"');
      expect(attribute(tag, "aria-expanded"), `${file} : ${tag}`).toMatch(
        /^(true|false)$/,
      );
      expect(attribute(tag, "aria-controls"), `${file} : ${tag}`).toBeTruthy();
    }
  });

  it.each(TEMPLATES)("%s relie chaque question à une réponse repliée", (file) => {
    const source = read(file);
    const answers = source.match(/<div class="faq-a"[^>]*>/g) ?? [];
    const byId = new Map(
      answers.map((tag) => [attribute(tag, "id") ?? "", tag]),
    );

    expect(byId.size, `${file} : identifiants de réponse dupliqués`).toBe(
      answers.length,
    );

    for (const tag of questions(source)) {
      const target = attribute(tag, "aria-controls") ?? "";
      const answer = byId.get(target);

      expect(answer, `${file} : aria-controls="${target}" sans cible`).toBeTruthy();

      // L'état servi doit correspondre à celui annoncé au lecteur d'écran.
      const expanded = attribute(tag, "aria-expanded") === "true";
      expect(
        / hidden>/.test(answer ?? ""),
        `${file} : ${target} — repli incohérent avec aria-expanded`,
      ).toBe(!expanded);
    }
  });

  it("n'émet pas de contenu de flux dans un bouton", () => {
    for (const file of TEMPLATES) {
      const source = read(file);
      for (const match of source.matchAll(
        /<button[^>]*class="faq-q"[^>]*>([\s\S]*?)<\/button>/g,
      )) {
        expect(match[1], `${file} : <div> dans un <button class="faq-q">`).not.toMatch(
          /<div\b/,
        );
      }
    }
  });

  /**
   * Le preflight de Tailwind v4 déclare
   * `[hidden]:where(:not([hidden='until-found'])){display:none!important}`.
   * Sans `!important` sur la règle d'ouverture, une réponse dépliée resterait
   * invisible : l'attribut `hidden` n'est jamais retiré du DOM, c'est la classe
   * `.faq-item.open` qui porte l'état. Sa spécificité (0,3,0) l'emporte sur
   * celle du preflight (0,1,0) à condition que les deux soient `!important`.
   */
  it.each(STYLESHEETS)("%s replie les réponses par display, pas par hauteur", (file) => {
    const css = read(file);

    expect(css, `${file} : pas de repli [hidden]`).toMatch(
      /\.faq-a\[hidden\]\s*\{[^}]*display:\s*none/,
    );
    expect(
      css,
      `${file} : l'ouverture ne bat pas [hidden]{display:none!important} du preflight`,
    ).toMatch(/\.faq-item\.open \.faq-a\{[^}]*display:\s*block\s*!important/);
  });

  /**
   * Vérification de bout en bout de la cascade, plutôt que du texte de la
   * feuille : le preflight de Tailwind est injecté tel qu'il est publié, puis
   * on lit le `display` calculé dans les trois états réels.
   *
   * Le cas piégeux est `a-toggled` : `useDesignInteractive` ouvre un accordéon
   * en ajoutant la classe `.faq-item.open`, sans jamais retirer l'attribut
   * `hidden` du HTML servi. Sans `!important`, cette réponse resterait masquée
   * par le preflight — c'est-à-dire toutes les questions sauf la première.
   */
  const PREFLIGHT =
    "[hidden]:where(:not([hidden='until-found'])) { display: none !important; }";

  it.each(STYLESHEETS)("%s : une réponse ouverte reste visible", (file) => {
    const window = new Window();
    const { document } = window;

    document.body.innerHTML = `
      <style>${PREFLIGHT}</style>
      <style>${read(file)}</style>
      <div class="faq-item open">
        <button type="button" class="faq-q" aria-expanded="true" aria-controls="a-initial">Q</button>
        <div class="faq-a" id="a-initial">Ouverte dès le HTML servi</div>
      </div>
      <div class="faq-item open">
        <button type="button" class="faq-q" aria-expanded="true" aria-controls="a-toggled">Q</button>
        <div class="faq-a" id="a-toggled" hidden>Ouverte par le script</div>
      </div>
      <div class="faq-item">
        <button type="button" class="faq-q" aria-expanded="false" aria-controls="a-shut">Q</button>
        <div class="faq-a" id="a-shut" hidden>Réponse repliée</div>
      </div>`;

    const display = (id: string) => {
      const element = document.getElementById(id);
      if (!element) throw new Error(`${file} : #${id} absent du document`);
      return window.getComputedStyle(element).display;
    };

    expect(display("a-initial"), `${file} : réponse ouverte masquée`).toBe("block");
    expect(
      display("a-toggled"),
      `${file} : réponse dépliée par le script restée masquée`,
    ).toBe("block");
    expect(display("a-shut"), `${file} : réponse fermée visible`).toBe("none");
  });

  it("n'ouvre plus aucune réponse sur une hauteur chiffrée", () => {
    const sheets = [
      ...STYLESHEETS,
      "audit-technique/sections/sections.css",
      "contenu-video/sections/sections.css",
      "ecommerce/sections/sections.css",
      "maintenance-evolution/sections/sections.css",
      "outils-internes/sections/sections.css",
      "publicite-en-ligne/sections/sections.css",
      "saas-applications/sections/sections.css",
      "securite-rgpd/sections/sections.css",
      "sites-vitrines/sections/sections.css",
    ];

    const offenders = sheets.flatMap((file) => {
      const css = read(file);
      const open = [
        ...css.matchAll(/\.faq-item\.open[^{}]*\.faq-a\s*\{([^}]*)\}/g),
      ];
      return open
        .filter((match) => /max-height:\s*\d/.test(match[1]))
        .map((match) => `${file} : ${match[0].replace(/\s+/g, " ")}`);
    });

    expect(offenders, offenders.join("\n")).toEqual([]);
  });
});
