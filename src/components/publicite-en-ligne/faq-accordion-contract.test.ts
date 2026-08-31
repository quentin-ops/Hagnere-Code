import fs from "node:fs";
import path from "node:path";
import { Window } from "happy-dom";
import { describe, expect, it } from "vitest";

const componentsRoot = path.join(process.cwd(), "src/components");

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
/**
 * Répertoires qui n'ont pas encore migré vers le balisage accessible. Ils sont
 * nommés en creux : tout le reste est couvert, et un gabarit qui apparaît ou
 * disparaît n'a aucune liste à mettre à jour.
 *
 * `homepage` et `methode` en sont sortis le 30/08/2026 : leurs questions
 * étaient des <div> non focalisables, à qui le script ajoutait `role="button"`
 * seulement après hydratation — avant, elles n'existaient pour aucun clavier ni
 * lecteur d'écran. Elles sont désormais de vrais <button> servis avec leur
 * `aria-expanded` et leur `aria-controls`, et la remise à zéro `button.faq-q`
 * a été ajoutée dans les deux feuilles concernées : sans elle, le navigateur
 * centrait les questions (défaut qui existait aussi, non vu, sur /contact).
 *
 * Restent `equipe` et `tarifs`, à migrer de la même façon.
 */
const PENDING_DIRECTORIES = ["equipe", "tarifs"];

/**
 * Gabarits couverts — DÉRIVÉS du disque, plus codés en dur.
 *
 * La liste était une énumération de dix-neuf chemins. Le tri éditorial du
 * 28/08/2026 a supprimé sept modules `tech-faq.ts` (leurs questions ont été
 * fusionnées dans la FAQ principale de chaque page) : le test s'est mis à
 * échouer sur des fichiers absents, alors que rien de ce qu'il protège n'avait
 * bougé. Symétriquement, un gabarit AJOUTÉ n'entrait jamais dans la liste et
 * n'était donc jamais vérifié — le défaut inverse, silencieux celui-là.
 *
 * On scanne donc les fichiers qui déclarent réellement une question de FAQ.
 */
function declaringTemplates(): string[] {
  return fs
    .readdirSync(componentsRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .flatMap((entry) => {
      const dir = path.join(componentsRoot, entry.name);
      const sectionsDir = path.join(dir, "sections");
      const files = [
        ...fs.readdirSync(dir).map((file) => path.join(entry.name, file)),
        ...(fs.existsSync(sectionsDir)
          ? fs
              .readdirSync(sectionsDir)
              .map((file) => path.join(entry.name, "sections", file))
          : []),
      ];
      return files
        .filter(
          (file) =>
            file.endsWith(".ts") &&
            !file.includes(".test.") &&
            fs
              .readFileSync(path.join(componentsRoot, file), "utf8")
              .includes('class="faq-q"'),
        )
        .map((file) => file.split(path.sep).join("/"));
    })
    .sort();
}

const ALL_DECLARING = declaringTemplates();
const TEMPLATES = ALL_DECLARING.filter(
  (file) => !PENDING_DIRECTORIES.includes(file.split("/")[0]),
);

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
    // La couverture est dérivée : ce test ne vérifie plus qu'une liste soit à
    // jour, il vérifie que la liste d'attente n'a pas grossi en douce.
    const pending = ALL_DECLARING.filter((file) =>
      PENDING_DIRECTORIES.includes(file.split("/")[0]),
    );
    expect(pending.sort()).toEqual(["equipe/body.ts", "tarifs/body.ts"]);
    // Et qu'on couvre bien quelque chose : un scan qui ne trouve rien
    // passerait tous les `it.each` sans exécuter une seule assertion.
    expect(TEMPLATES.length).toBeGreaterThanOrEqual(10);
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

  /**
   * Un identifiant peut être une EXPRESSION de gabarit — `${faqAnswerId(i)}`
   * — et non une chaîne littérale : certaines pages génèrent leurs questions
   * dans une boucle plutôt que de les recopier une à une. Deux occurrences de
   * la même expression ne sont alors pas un doublon, c'est le même appel rendu
   * dans deux branches (repliée / dépliée) d'un seul gabarit.
   *
   * Ce test ne peut donc pas juger l'UNICITÉ d'un id dynamique — seul le
   * navigateur le peut, et c'est le rôle du contrôle `dupIds` de la passe
   * Playwright. Ce qu'il vérifie ici, et qui reste vrai dans les deux cas :
   * l'`aria-controls` d'une question désigne bien la réponse qui la suit.
   */
  const isDynamic = (value: string) => value.includes("${");

  it.each(TEMPLATES)("%s relie chaque question à une réponse repliée", (file) => {
    const source = read(file);
    const answers = source.match(/<div class="faq-a"[^>]*>/g) ?? [];
    const literalIds = answers
      .map((tag) => attribute(tag, "id") ?? "")
      .filter((id) => !isDynamic(id));

    expect(
      new Set(literalIds).size,
      `${file} : identifiants de réponse dupliqués`,
    ).toBe(literalIds.length);

    const byId = new Map(
      answers.map((tag) => [attribute(tag, "id") ?? "", tag]),
    );

    for (const tag of questions(source)) {
      const target = attribute(tag, "aria-controls") ?? "";
      const answer = byId.get(target);

      expect(answer, `${file} : aria-controls="${target}" sans cible`).toBeTruthy();

      // L'état servi doit correspondre à celui annoncé au lecteur d'écran.
      // Sur un id dynamique, les deux branches partagent l'expression : on
      // compare alors question et réponse DANS leur branche, pas globalement.
      if (isDynamic(target)) {
        for (const block of source.matchAll(
          /<button[^>]*class="faq-q"[^>]*aria-expanded="(true|false)"[\s\S]{0,4000}?<div class="faq-a"[^>]*?(\shidden)?>/g,
        )) {
          expect(
            Boolean(block[2]),
            `${file} : repli incohérent avec aria-expanded="${block[1]}"`,
          ).toBe(block[1] === "false");
        }
        continue;
      }

      const expanded = attribute(tag, "aria-expanded") === "true";
      expect(
        / hidden>/.test(answer ?? ""),
        `${file} : ${target} — repli incohérent avec aria-expanded`,
      ).toBe(!expanded);
    }
  });

  it("n'annonce pas un nombre de questions différent de celui rendu", () => {
    /* Plusieurs titres de FAQ affichent leur compte en dur — « Les 12
       questions », « Les 18 questions ». La fusion des FAQ techniques du
       28/08/2026 a fait passer plusieurs pages de 10-12 à 18-20 questions ;
       chaque titre a dû être corrigé à la main, et rien ne le vérifiait.

       Un compteur faux n'est pas cosmétique sur ce site : la page vend la
       transparence chiffrée, et un visiteur qui compte 18 réponses sous un
       titre qui en annonce 12 n'a plus de raison de croire les autres nombres.

       On ne peut pas dériver le compte à l'exécution sans provoquer un saut de
       rendu ; on le vérifie donc ici, à la construction. */
    const offenders: string[] = [];
    for (const file of TEMPLATES) {
      const source = read(file);
      const announced = source.match(/Les\s+(\d+)\s+questions/);
      if (!announced) continue;
      const real = questions(source).length;
      if (Number(announced[1]) !== real) {
        offenders.push(`${file} : annonce ${announced[1]}, en rend ${real}`);
      }
    }
    expect(offenders, offenders.join("\n")).toEqual([]);
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
