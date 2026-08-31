import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { renderToStaticMarkup } from "react-dom/server";
import { afterEach, describe, expect, it, vi } from "vitest";
import { getGuide, guideRobots, PUBLISHED_GUIDES } from "@/lib/guides";
import Page, { metadata } from "./page";

const slugDirectory = dirname(fileURLToPath(import.meta.url));
const repositoryRoot = resolve(slugDirectory, "../../../..");
const pageSource = readFileSync(resolve(slugDirectory, "page.tsx"), "utf8");
const ogSource = readFileSync(
  resolve(slugDirectory, "opengraph-image.tsx"),
  "utf8",
);
const toolSource = readFileSync(
  resolve(
    repositoryRoot,
    "src/components/guides/SearchVisibilityDiagnostic.tsx",
  ),
  "utf8",
);
/** Grille tarifaire publique : source de vérité des prix maison cités ici. */
const pricingSource = readFileSync(
  resolve(repositoryRoot, "src/components/tarifs/body.ts"),
  "utf8",
);
/** Registre central : ses chaînes sortent sur le hub, dans le <title> et en JSON-LD. */
const registrySource = readFileSync(
  resolve(repositoryRoot, "src/lib/guides.ts"),
  "utf8",
);
const renderedPage = renderToStaticMarkup(Page());
const guide = getGuide("pourquoi-site-pas-visible-google");
const structuredData = [
  ...renderedPage.matchAll(
    /<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g,
  ),
].map((match) => JSON.parse(match[1]) as Record<string, unknown>);

const articleImagePaths = [
  "/guides/pourquoi-site-pas-visible-google/diagnostic-google-16x9.svg",
  "/guides/pourquoi-site-pas-visible-google/diagnostic-google-4x3.svg",
  "/guides/pourquoi-site-pas-visible-google/diagnostic-google-1x1.svg",
] as const;
const articleImageDimensions = [
  [1600, 900],
  [1200, 900],
  [1200, 1200],
] as const;

/* ──────────────────────────────────────────────
   Extraction du corps réellement lu
   ────────────────────────────────────────────── */

/**
 * Transcription littérale de `stripReadTimeExcludedElements`
 * (`scripts/measure-guide-readtime.mjs`).
 *
 * La version précédente de ce fichier prétendait suivre « la même convention
 * que le script » alors qu'elle ignorait les éléments `sr-only` et les balises
 * orphelines. Elle comptait 4 064 mots là où le script du dépôt en comptait
 * 4 009 : deux mesures pour une seule page, donc un temps de lecture
 * invérifiable. Les quatre légendes de tableau portent `md:sr-only`, ce qui
 * suffisait à produire l'écart.
 */
function stripReadTimeExcludedElements(html: string) {
  const voidElements = new Set([
    "area",
    "base",
    "br",
    "col",
    "embed",
    "hr",
    "img",
    "input",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr",
  ]);
  const openingElement =
    /<([a-z][a-z0-9-]*)\b(?=[^>]*(?:\bdata-read-time-exclude=["']true["']|\bclass=["'][^"']*\bsr-only\b[^"']*["']))[^>]*>/gi;
  let cursor = 0;
  let output = "";

  for (
    let opening = openingElement.exec(html);
    opening;
    opening = openingElement.exec(html)
  ) {
    output += html.slice(cursor, opening.index);

    const tagName = opening[1].toLowerCase();
    if (voidElements.has(tagName)) {
      cursor = opening.index + opening[0].length;
      openingElement.lastIndex = cursor;
      continue;
    }
    const matchingTag = new RegExp(`</?${tagName}\\b[^>]*>`, "gi");
    matchingTag.lastIndex = opening.index + opening[0].length;
    let depth = 1;
    let closingEnd = -1;

    for (let tag = matchingTag.exec(html); tag; tag = matchingTag.exec(html)) {
      depth += tag[0].startsWith("</") ? -1 : 1;
      if (depth === 0) {
        closingEnd = matchingTag.lastIndex;
        break;
      }
    }

    if (closingEnd === -1) return html;
    cursor = closingEnd;
    openingElement.lastIndex = closingEnd;
  }

  return output + html.slice(cursor);
}

/** Transcription littérale de `decodeHtmlText` du même script. */
function decodeHtmlText(html: string) {
  return html
    .replace(
      /<(script|style|template|noscript|svg)\b[^>]*>[\s\S]*?<\/\1>/gi,
      " ",
    )
    .replace(/<[^>]+>/g, " ")
    .replace(/&#(x?[0-9a-f]+);/gi, (_match, value: string) => {
      const hexadecimal = value[0].toLowerCase() === "x";
      const codePoint = Number.parseInt(
        hexadecimal ? value.slice(1) : value,
        hexadecimal ? 16 : 10,
      );
      return Number.isFinite(codePoint) &&
        codePoint >= 0 &&
        codePoint <= 0x10ffff
        ? String.fromCodePoint(codePoint)
        : " ";
    })
    .replace(/&(?:nbsp|ensp|emsp);/gi, " ")
    .replace(/&amp;/gi, " et ")
    .replace(/&(?:apos|rsquo|lsquo);/gi, "'")
    .replace(/&(?:quot|ldquo|rdquo);/gi, '"')
    .replace(/&(?:ndash|mdash);/gi, "-")
    .replace(/&euro;/gi, " euro ")
    .replace(/&[a-z]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function articleHtml() {
  const html = renderedPage.match(/<article\b[^>]*>([\s\S]*?)<\/article>/)?.[1];
  expect(html).toBeDefined();
  return stripReadTimeExcludedElements(html ?? "");
}

/**
 * Le corps, blocs de code retirés.
 *
 * Les deux `<pre>` de ce guide portent des commandes `curl` et les paramètres
 * d'un appel d'API. Ce n'est pas de la prose française : la typographie §9.3 ne
 * s'y applique pas — `rowLimit : 25000` s'écrit ainsi ou ne s'exécute pas — et
 * ses nombres ne sont pas des valeurs éditoriales. Ils restent en revanche
 * comptés dans le calibre, puisque le lecteur les lit.
 */
function proseHtml() {
  return articleHtml().replace(/<pre\b[\s\S]*?<\/pre>/gi, " ");
}

function readerVisibleText(html: string) {
  return html
    .replace(
      /<(script|style|template|noscript|svg)\b[^>]*>[\s\S]*?<\/\1>/gi,
      " ",
    )
    .replace(/<[^>]+>/g, " ")
    .replace(/&#(?:x[0-9a-f]+|[0-9]+);/gi, " ")
    .replace(/&[a-z]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** Mot au sens du script du dépôt, sur le texte décodé comme lui. */
function articleWordCount() {
  return (
    decodeHtmlText(articleHtml()).match(
      /[\p{L}\p{N}]+(?:[’'\-][\p{L}\p{N}]+)*/gu,
    )?.length ?? 0
  );
}

/**
 * Texte lisible en conservant les espaces insécables tels quels.
 *
 * `readerVisibleText` normalise tout blanc en espace ordinaire, ce qui rend la
 * vérification typographique impossible : U+00A0 fait partie de `\s`.
 * `&quot;` est décodé en guillemet droit, sans quoi le contrôle des guillemets
 * français ne voit rien : React échappe `"` dans le texte, et la règle
 * générique `&[a-z]+;` l'effaçait avant comparaison.
 */
function typographicText(html: string) {
  return html
    .replace(
      /<(script|style|template|noscript|svg)\b[^>]*>[\s\S]*?<\/\1>/gi,
      " ",
    )
    .replace(/&nbsp;/gi, " ")
    .replace(/&#(?:160|xa0);/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&(?:rsquo|apos);/gi, "’")
    .replace(/&(?:ndash|mdash);/gi, "—")
    .replace(/&euro;/gi, "€")
    .replace(/&(?:quot|ldquo|rdquo);/gi, '"')
    .replace(/&[a-z]+;/gi, " ")
    .replace(/[ \t\r\n]+/g, " ")
    .trim();
}

/** Texte lisible, insécables ramenés à des espaces ordinaires. */
function prose(html: string) {
  return typographicText(html).replace(/[  ]/g, " ");
}

const body = () => prose(proseHtml());

/**
 * Chaînes de `page.tsx` qui sortent hors de l'`<article>` : FAQ, sources,
 * réserve, encarts d'appel. Le contrôle typographique du corps ne les voyait
 * pas, alors qu'elles sont lues et indexées comme le reste.
 */
function outOfArticleLiterals() {
  const blocks = [
    pageSource.match(
      /const faqCategories: GuidePremiumFaqCategory\[\] = \[([\s\S]*?)\n\];/,
    )?.[1],
    pageSource.match(/legalSources=\{\[([\s\S]*?)\n {8}\]\}/)?.[1],
    pageSource.match(/disclaimer=\{\{([\s\S]*?)\n {8}\}\}/)?.[1],
    pageSource.match(/heroDescription=\{([\s\S]*?)\}\n {8}stats=/)?.[1],
  ];
  for (const block of blocks) expect(block).toBeDefined();
  return blocks
    .join("\n")
    .replace(/href:\s*"[^"]*"/g, " ")
    .replace(/\\u00a0/g, " ")
    .replace(/\\"/g, '"');
}

/* ──────────────────────────────────────────────
   Arithmétique des scénarios, refaite à la main
   ────────────────────────────────────────────── */

/**
 * Chaque constante ci-dessous est calculée à la main, étapes écrites, puis
 * confrontée à la phrase qui la publie. Rien n'est recalculé depuis la formule
 * du guide : un test qui rejoue la formule de la page hérite de son erreur au
 * lieu de la trouver — c'est ce qui était reproché à la version précédente.
 *
 * Hypothèse publiée : 350 € le jour chargé, sept heures travaillées.
 *
 *   350 ÷ 7                                        =    50 € l'heure
 *   scénario 1 · correction 1 h        50 × 1      =    50 €
 *   scénario 1 · reprise 2 j          350 × 2      =   700 €
 *   scénario 1 · total                 50 + 700    =   750 €
 *   scénario 2 · réécriture 4 j       350 × 4      = 1 400 €
 *   scénario 2 · correction 1 h        50 × 1      =    50 €
 *   scénario 2 · écart              1 400 − 50     = 1 350 €
 *   scénario 3 · agence 3 j           350 × 3      = 1 050 €
 *   scénario 3 · correction 0,5 j     350 ÷ 2      =   175 €
 *
 *   somme des six montants publiés
 *     50 + 700 + 1 400 + 50 + 1 050 + 175          = 3 425 €
 *   lecture par nature de dépense
 *     corrections utiles      50 + 50 + 175        =   275 €
 *     mauvaise cause       1 400 + 1 050           = 2 450 €
 *     reprise                                      =   700 €
 *     275 + 2 450 + 700                            = 3 425 €  ✔ recoupe
 *   lecture par payeur
 *     interne   50 + 700 + 1 400 + 50 + 175        = 2 375 €
 *     agence extérieure                            = 1 050 €
 *     2 375 + 1 050                                = 3 425 €  ✔ recoupe
 *
 * Le total ne peut donc pas s'appeler « temps interne » : 1 050 € sont une
 * facture d'agence, pas des heures de l'entreprise.
 */
const HAND = {
  hourEur: 50,
  twoDaysEur: 700,
  fourDaysEur: 1400,
  threeDaysEur: 1050,
  halfDayEur: 175,
  firstScenarioEur: 750,
  gapEur: 1350,
  totalEur: 3425,
  fixesEur: 275,
  wastedEur: 2450,
  internalEur: 2375,
  agencyEur: 1050,
} as const;

/**
 * Mesure du 30/08/2026 par `npx tsx scripts/measure-guide-readtime.mjs
 * pourquoi-site-pas-visible-google`, jouée sur l'article RENDU : « 4199 mots
 * 21 min ». La constante monte de vingt-quatre mots, tous portés par deux
 * corrections de fond du 30/08/2026 : le nom du bouton « Tester l'URL active »
 * ajouté au §02, et la phrase du §06 qui dit enfin que les trois scénarios
 * s'excluent avant de les additionner. Le calibre reste dans la bande 3 000 à
 * 4 200 mots, et 4 199 ÷ 200 = 20,995 s'arrondit toujours à 21 minutes :
 * `readTimeMin` ne bouge pas. L'exigence du test est inchangée : égalité
 * stricte avec le script, temps de lecture recalculé depuis le nombre de mots.
 */
const MEASURED_WORDS = 4199;
const MEASURED_READ_TIME = 21;

afterEach(() => {
  vi.unstubAllEnvs();
});

describe("qualité de contenu — pourquoi mon site n’est pas visible sur Google", () => {
  /* ──────────────────────────────────────────────
     Registre, metadata et données structurées
     ────────────────────────────────────────────── */

  it("publie le guide par le registre central et garde la preview privée", () => {
    expect(guide.editorialStatus).toBe("published");
    expect(PUBLISHED_GUIDES.some((item) => item.slug === guide.slug)).toBe(
      true,
    );
    expect(metadata.robots).toMatchObject({ index: false, follow: false });
    expect(metadata.alternates?.canonical).toBe(
      "https://hagnere-code.ai/guides/pourquoi-site-pas-visible-google",
    );

    vi.stubEnv("NEXT_PUBLIC_ENV", "production");
    expect(guideRobots(guide)).toMatchObject({ index: true, follow: true });
  });

  it("garde title, H1 et headline identiques à une insécable près", () => {
    const h1 = renderedPage.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/)?.[1] ?? "";
    // `readerVisibleText` aplatit U+00A0 : la comparaison se fait donc sur le
    // titre du registre aplati de la même façon. La typographie du registre est
    // vérifiée séparément, sur ses chaînes brutes.
    expect(readerVisibleText(h1)).toBe(guide.heroTitle.replace(/ /g, " "));
    expect(metadata.title).toBe(guide.title);
    expect(structuredData.map((item) => item["@type"])).toEqual([
      "Article",
      "BreadcrumbList",
    ]);
    expect(structuredData[0]).toMatchObject({
      headline: guide.heroTitle,
      description: guide.metaDescription,
      dateModified: guide.dateModified,
    });
    // La date de première publication ne bouge jamais : on la compare comme un
    // INSTANT, pas comme une chaîne. « 2026-08-18T12:42:00Z » et
    // « 2026-08-18T14:42:00+02:00 » désignent la même seconde ; épingler la
    // notation faisait échouer l'unification du fuseau du registre — la seule
    // entrée en `Z` produisait la seule ligne du sitemap hors convention —
    // alors que rien de ce que ce test protège n'en dépendait.
    expect(Date.parse(structuredData[0].datePublished as string)).toBe(
      Date.parse("2026-08-18T12:42:00Z"),
    );
    // Ce qui est protégé ici, c'est la passe substantielle du 30/08/2026 —
    // libellés d'interface, localisateur de source, dates de relecture, ce que
    // le §15 de la charte range parmi les changements substantiels — et son
    // accord avec le bandeau lu par le lecteur, vérifié juste après.
    //
    // L'assertion épinglait la CHAÎNE « 2026-08-30T17:30:00Z ». Elle épinglait
    // donc aussi deux choses qu'elle ne cherchait pas à protéger : une heure
    // ronde à la seconde 00, jamais un instant observé, et une notation `Z`
    // qui faisait de cette seule URL l'exception au fuseau des huit autres
    // lignes du sitemap. Corriger l'une ou l'autre faisait rougir un test qui
    // n'en avait cure. Elle porte désormais sur le JOUR, qui est la propriété,
    // et laisse l'heure au relevé du registre (voir src/lib/guides.ts et
    // l'invariant « instant enregistré » de src/lib/guides.test.ts).
    expect(guide.dateModified.slice(0, 10)).toBe("2026-08-30");
    expect(guide.dateModified).toMatch(/[+-]\d{2}:\d{2}$/);
    // Et la date lue par le lecteur dans le bandeau doit être celle-là.
    expect(readerVisibleText(renderedPage)).toContain(
      "Mis à jour le 30 août 2026",
    );
    // Repères d'affichage de la SERP, pas des seuils de conformité.
    expect(guide.title.length).toBeLessThanOrEqual(60);
    expect(guide.metaDescription.length).toBeLessThanOrEqual(155);
    expect(guide.cardDescription.length).toBeLessThanOrEqual(160);
    expect(JSON.stringify(structuredData)).not.toMatch(
      /\b(?:FAQPage|HowTo|Offer|Review|AggregateRating|SoftwareApplication|Product|wordCount)\b/,
    );
  });

  it("pose les insécables dans l’entrée du registre, pas seulement dans la page", () => {
    // Ces quatre chaînes sortent sur la carte du hub, dans le <title> de la
    // SERP, dans la meta description et dans le headline JSON-LD. Le contrôle
    // du corps ne pouvait pas les voir : elles ne sont pas rendues dans
    // l'`<article>`, et `readerVisibleText` aplatit l'insécable avant de
    // comparer.
    for (const value of [
      guide.title,
      guide.cardTitle,
      guide.heroTitle,
      guide.metaDescription,
      guide.cardDescription,
    ]) {
      expect(value, value).not.toMatch(/[^\s] [?!;:»]/);
      expect(value, value).not.toMatch(/« /);
    }
    expect(guide.title).toContain("Google ?");
    expect(guide.heroTitle).toContain("Google ?");
    expect(guide.cardTitle).toContain("Google ?");
    expect(guide.metaDescription).toContain("Google :");

    // Le registre est un fichier partagé : seule l'entrée de ce guide est
    // contrôlée ici, et elle doit écrire ses insécables en séquence d'échappement.
    const entry = registrySource.match(
      /\{\n\s*slug: "pourquoi-site-pas-visible-google",[\s\S]*?\n {2}\},/,
    )?.[0];
    expect(entry).toBeDefined();
    expect(/[   ]/.test(entry ?? "")).toBe(false);
    expect(entry).toContain("\\u00a0?");
  });

  it("ne répète jamais le H1 dans un H2 de l’article", () => {
    const h2Texts = [...articleHtml().matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g)]
      .map((match) => readerVisibleText(match[1]).toLowerCase())
      .filter((text) => text !== "");

    expect(h2Texts.length).toBeGreaterThanOrEqual(6);
    for (const h2 of h2Texts) {
      expect(h2, h2).not.toContain("visible sur google");
      expect(h2, h2).not.toContain("pourquoi mon site");
    }
  });

  /* ──────────────────────────────────────────────
     Calibre et rythme (§5.3)
     ────────────────────────────────────────────── */

  it("tient la bande « méthode / diagnostic », 3 000 à 4 200 mots", () => {
    // §5.3 du protocole. La requête est un diagnostic — « pourquoi mon site
    // n'est pas visible » — et le guide livre un parcours de mesure en huit
    // étapes, avec commandes, quotas et calendrier de recontrôle. C'est la
    // bande « Méthode / parcours ». Aucune requalification n'est nécessaire.
    const words = articleWordCount();
    expect(words).toBeGreaterThanOrEqual(3000);
    expect(words).toBeLessThanOrEqual(4200);
  });

  it("annonce le temps de lecture mesuré par le script du dépôt", () => {
    // Le 30/08/2026, `npx tsx scripts/measure-guide-readtime.mjs
    // pourquoi-site-pas-visible-google` a répondu « 4175 mots 21 min », et
    // `--check` a confirmé « mesuré 21 min / publié 21 min ». Les
    // deux fonctions du script sont transcrites en tête de ce fichier : la
    // valeur ci-dessus doit donc être retrouvée à l'identique, sinon le test et
    // le script ne mesurent plus la même page.
    expect(articleWordCount()).toBe(MEASURED_WORDS);
    expect(Math.max(1, Math.round(MEASURED_WORDS / 200))).toBe(
      MEASURED_READ_TIME,
    );
    expect(guide.readTimeMin).toBe(MEASURED_READ_TIME);
    expect(pageSource).toContain("${guide.readTimeMin} min");
  });

  it("garde 40 à 60 % de H2 en question", () => {
    const h2Texts = [...articleHtml().matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g)]
      .map((match) => readerVisibleText(match[1]))
      .filter((text) => text !== "");
    const interrogatives = h2Texts.filter((text) => text.endsWith("?")).length;
    const share = interrogatives / h2Texts.length;

    expect(share, `${interrogatives}/${h2Texts.length}`).toBeGreaterThanOrEqual(
      0.4,
    );
    expect(share, `${interrogatives}/${h2Texts.length}`).toBeLessThanOrEqual(
      0.6,
    );
  });

  it("ne dépasse pas quatre tableaux éditoriaux, aux objets distincts", () => {
    const tables = [...articleHtml().matchAll(/<table[\s\S]*?<\/table>/g)].map(
      (match) => match[0],
    );
    expect(tables.length).toBeGreaterThanOrEqual(3);
    expect(tables.length).toBeLessThanOrEqual(4);

    // Aucun tableau ragé : chaque ligne remplit exactement les colonnes
    // annoncées. Une cellule manquante décale silencieusement la lecture en
    // cartes sur téléphone, où les libellés sont réinjectés par CSS.
    for (const table of tables) {
      const columns = (table.match(/<th\b[^>]*scope="col"/g) ?? []).length;
      expect(columns).toBeGreaterThanOrEqual(3);
      const rows = [...table.matchAll(/<tr\b[\s\S]*?<\/tr>/g)].slice(1);
      expect(rows.length).toBeGreaterThanOrEqual(4);
      for (const row of rows) {
        const cells = (row[0].match(/<t[dh]\b/g) ?? []).length;
        expect(cells, readerVisibleText(row[0]).slice(0, 60)).toBe(columns);
      }
    }

    // Chaque tableau porte sa légende, et deux légendes ne se ressemblent pas.
    // Les légendes sont `md:sr-only`, donc retirées du corps mesuré : elles se
    // relisent sur le rendu complet.
    const captions = [
      ...renderedPage.matchAll(/<caption[^>]*>([\s\S]*?)<\/caption>/g),
    ].map((match) => readerVisibleText(match[1]));
    expect(captions.length).toBe(tables.length);
    expect(captions.every((caption) => caption.length > 25)).toBe(true);
    expect(new Set(captions).size).toBe(tables.length);

    // Le §6.2 interdit le chiffre creux : les deux tableaux qui pilotent une
    // dépense — codes HTTP et décision — portent des valeurs, la carte des
    // cinq pannes n'en porte aucune parce qu'elle associe un constat à un
    // écran, pas un montant.
    const numeric = tables.filter(
      (table) => (readerVisibleText(table).match(/\d/g) ?? []).length > 4,
    );
    expect(numeric.length).toBeGreaterThanOrEqual(2);
  });

  it("porte une réponse directe courte, chiffrée et étiquetée", () => {
    const answer = articleHtml().match(
      /<section id="url-recherche"[\s\S]*?<\/section>/,
    )?.[0];
    expect(answer).toBeDefined();
    const paragraphs = [
      ...(answer ?? "").matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g),
    ].slice(0, 3);
    const words = readerVisibleText(paragraphs.map((p) => p[1]).join(" "))
      .split(/\s+/)
      .filter(Boolean).length;

    expect(words).toBeGreaterThanOrEqual(120);
    expect(words).toBeLessThanOrEqual(210);
    const text = prose(answer ?? "");
    expect(text).toContain("exploration, indexation");
    // §4.1 de la charte : un ordre de grandeur sans corpus publiable se nomme
    // « estimation éditoriale » et expose ses hypothèses, à l'endroit même où
    // il est lu. La durée du tri initial n'est portée par aucune source.
    expect(text).toContain("une vingtaine de minutes");
    expect(text).toContain("estimation éditoriale Hagnéré Code");
    // Et la même page ne doit pas la promouvoir en statistique de bandeau.
    expect(readerVisibleText(renderedPage)).not.toMatch(/Tri initial/);
    // §6.1 de la charte : les termes indispensables sont traduits à leur
    // première apparition, pas deux écrans plus bas.
    expect(text).toContain("l’outil gratuit où Google dit au propriétaire");
    expect(text).toContain("l’adresse que Google retient comme");
  });

  it("tient au moins dix valeurs chiffrées pour mille mots", () => {
    // §6.2. La densité se mesure sur la prose. Ne comptent ni les blocs de
    // code, ni les millésimes, ni les numéros de section (« § 01 »), ni les
    // libellés de contrôle (« Contrôle 3 ») : ce sont des repères de
    // navigation, pas des valeurs éditoriales. La version précédente les
    // comptait et surdéclarait la densité de douze valeurs.
    const text = body()
      .replace(/\b20\d\d\b/g, " ")
      .replace(/§ 0\d/g, " ")
      .replace(/section 0\d/gi, " ")
      .replace(/Contrôle [1-4]/g, " ");
    const values = text.match(/\d+(?:[,.]\d+)?(?: \d{3})*/g) ?? [];
    const density = (values.length / articleWordCount()) * 1000;

    expect(density, `${values.length} valeurs`).toBeGreaterThanOrEqual(10);
  });

  /* ──────────────────────────────────────────────
     Typographie française (§9.3)
     ────────────────────────────────────────────── */

  it("n’écrit aucun insécable littéral dans le code", () => {
    // Un U+00A0 tapé dans une chaîne est invisible en relecture et se perd en
    // silence au premier passage par un heredoc ou une réécriture.
    expect(/[   ]/.test(pageSource)).toBe(false);
  });

  it("pose un insécable avant chaque ponctuation double du corps", () => {
    const text = typographicText(proseHtml());
    const offenders = [...text.matchAll(/.{0,45}[^\s] [?!;:»].{0,20}/g)].map(
      (match) => match[0],
    );

    expect(offenders, offenders.join("\n")).toHaveLength(0);
  });

  it("applique la même typographie hors de l’article", () => {
    // FAQ, bloc de sources, réserve et description du hero sont rendus en
    // dehors de l'`<article>` : le contrôle précédent ne les atteignait pas.
    const text = outOfArticleLiterals();
    const doublePunctuation = [
      ...text.matchAll(/.{0,45}[^\s\\] [?!;»].{0,20}/g),
    ].map((match) => match[0]);
    expect(doublePunctuation, doublePunctuation.join("\n")).toHaveLength(0);
    // Les deux-points demandent une exception : `site:` et `https:` en portent
    // sans espace avant, et seule la forme « mot espace deux-points » est fautive.
    const colons = [...text.matchAll(/.{0,45}[^\s\\] :.{0,20}/g)].map(
      (match) => match[0],
    );
    expect(colons, colons.join("\n")).toHaveLength(0);
    const openers = [...text.matchAll(/« .{0,40}/g)].map((match) => match[0]);
    expect(openers, openers.join("\n")).toHaveLength(0);
  });

  it("pose un insécable après chaque guillemet ouvrant du corps", () => {
    const text = typographicText(proseHtml());
    const offenders = [...text.matchAll(/« .{0,40}/g)].map((match) => match[0]);

    expect(offenders, offenders.join("\n")).toHaveLength(0);
  });

  it("colle les nombres à leur unité et sépare les milliers", () => {
    const text = typographicText(proseHtml());

    expect([...text.matchAll(/\d €/g)].map((m) => m[0])).toHaveLength(0);
    expect([...text.matchAll(/\d %/g)].map((m) => m[0])).toHaveLength(0);
    const glued = [...text.matchAll(/\b\d{4,}\b/g)]
      .map((m) => m[0])
      .filter((value) => !/^20\d\d$/.test(value));
    expect(glued, glued.join(", ")).toHaveLength(0);
  });

  it("n’emploie que des apostrophes courbes et des guillemets français", () => {
    const text = typographicText(proseHtml());
    expect(text).not.toMatch(/[a-zàâäéèêëîïôöùûüç]'[a-zàâäéèêëîïôöùûüç]/i);

    // Un seul guillemet droit est toléré, et pour une raison précise : l'aide
    // de Google écrit son motif d'indexation `URL marquée "noindex"` avec des
    // guillemets droits. Le reproduire mot pour mot vaut mieux que le
    // franciser, puisque le lecteur cherchera cette chaîne dans son interface.
    const quoted = [...text.matchAll(/.{0,20}"[^"]*".{0,4}/g)].map(
      (match) => match[0],
    );
    expect(quoted.length, quoted.join("\n")).toBeGreaterThan(0);
    for (const occurrence of quoted) {
      expect(occurrence, occurrence).toContain('URL marquée "noindex"');
    }
  });

  /* ──────────────────────────────────────────────
     Fond : les faits sourcés doivent rester exacts
     ────────────────────────────────────────────── */

  it("cite les plafonds d’exploration réellement documentés", () => {
    const text = body();
    for (const fact of [
      "2 premiers Mo",
      "64 premiers Mo",
      "données non compressées",
      "500 Kio",
      "24 heures",
      "12 premières heures",
      "30 jours sur la dernière version valide",
      "0,8 seconde",
      "1,8 seconde",
      "10 sauts",
    ]) {
      expect(text, fact).toContain(fact);
    }
    // Le repère de 15 Mo est celui des robots Google en général : le guide le
    // nomme pour le corriger, et nomme désormais la page qui le porte.
    expect(text).toContain("15 Mo qui circule encore");
    expect(text).toContain("présentation des robots d’exploration Google");
    expect(text).toContain("pas celui de Googlebot pour la recherche");
    // La page Googlebot porte « Dernière mise à jour le 2026/02/05 (UTC) ».
    expect(text).toContain("mise à jour le 5 février 2026");
    expect(text).not.toContain("3 février 2026");
  });

  it("rend au 75e centile l’assiette que web.dev lui donne", () => {
    // web.dev/articles/ttfb rattache le 75e centile au First Contentful Paint
    // (« so that the 75th percentile of users experience an FCP within the
    // "good" threshold »). Les deux seuils TTFB, eux, sont publiés sans
    // centile. Les accoler était un transfert d'assiette (§7.2 du protocole).
    const text = body();
    expect(text).toContain("First Contentful Paint, pas à ces deux seuils");
    expect(text).not.toMatch(/75\s*e?\s*centile des visites/);
    // Et un curl en un tir n'est pas davantage une mesure de terrain.
    expect(text).toContain("ni un centile ni une mesure de terrain");
    expect(outOfArticleLiterals()).not.toContain("au 75e centile des visites");
  });

  it("reproduit les libellés du rapport tels que l’aide les écrit", () => {
    const text = body();
    for (const label of [
      "« Explorée, actuellement non indexée »",
      "« Détectée, actuellement non indexée »",
      "« Page en double sans URL canonique sélectionnée par l’utilisateur »",
      '« URL marquée "noindex" »',
      "« URL bloquée par le fichier robots.txt »",
    ]) {
      expect(text, label).toContain(label);
    }
    // Anciens libellés du rapport Couverture, retirés de l'interface : les
    // publier entre guillemets envoyait le lecteur chercher une chaîne
    // introuvable dans son écran.
    expect(text).not.toContain("Exclue par la balise noindex");
    expect(text).not.toContain("« Bloquée par le fichier robots.txt »");
    expect(text).toContain("inutile de renvoyer l’URL");
    expect(text).toContain("exploration reportée pour ne pas surcharger");
    expect(text).toContain("ne doit pas être bloquée par");
    expect(text).toContain("un code d’état 2xx ne");
    // A1 du §8.1 : un référenceur sait que la charge serveur n'explique pas
    // tous les « Détectée, actuellement non indexée ». Le guide le dit.
    expect(text).toContain(
      "un arbitrage que Google ne détaille dans aucun champ public",
    );
  });

  it("nomme les deux champs de canonique comme l’inspection d’URL les nomme", () => {
    const text = body();
    expect(text).toContain("Une redirection est un signal fort");
    expect(text).toContain("l’inclusion dans un sitemap un signal faible");
    expect(text).toContain("URL canonique déclarée par l’utilisateur");
    expect(text).toContain("URL canonique sélectionnée par Google");
    expect(text).toContain("« Cette URL est sur Google »");
    // Formulations qui n'existent sur aucun écran de la Search Console.
    expect(text).not.toContain("canonique choisie par Google");
    expect(text).not.toContain("l’URL est sur Google");
    expect(outOfArticleLiterals()).not.toContain(
      "canonique choisie par Google",
    );
  });

  it("n’emploie que des libellés que le lecteur retrouve dans son écran", () => {
    // « test en direct » n'existe nulle part dans l'aide française. Relevé du
    // 30/08/2026 sur le HTML brut de
    // support.google.com/webmasters/answer/9012289?hl=fr : la chaîne « en
    // direct » y compte 0 occurrence, « test en ligne » 45, et le bouton porte
    // le nom « Tester l'URL active » (« Cliquez sur Tester l'URL active »).
    // Un lecteur qui cherchait « test en direct » dans son écran ne trouvait
    // rien — exactement le reproche que ce guide adresse aux autres.
    const text = body();
    expect(text).not.toContain("test en direct");
    expect(pageSource).not.toContain("test en direct");
    expect(text).toContain("test en ligne");
    expect(text).toContain("« Tester l’URL active »");

    // Le garde-fou sur « canonique choisie par Google » ne voyait pas l'outil
    // de la section 07 : son bloc porte data-read-time-exclude="true" et
    // `stripReadTimeExcludedElements` le retire avant tout contrôle du corps.
    // Il est donc vérifié ici sur ses deux fichiers sources.
    const toolLogic = readFileSync(
      resolve(repositoryRoot, "src/lib/search-visibility-diagnostic.ts"),
      "utf8",
    );
    for (const source of [toolSource, toolLogic]) {
      expect(source).not.toContain("canonique choisie par Google");
      expect(source).not.toContain("adresse canonique Google");
      expect(source).not.toContain("test en direct");
      expect(source).toContain("URL canonique sélectionnée par Google");
    }
  });

  it("rattache la règle d’accès à la page qui la porte vraiment", () => {
    // Relevé du 30/08/2026 sur support.google.com/webmasters/answer/7687615?hl=fr :
    // la page liste quatre autorisations et donne une ligne « Inspection de
    // l'URL » (« Exploration uniquement » pour l'accès limité), mais elle
    // n'emploie pas une seule fois le mot « indexation » et ne déconseille
    // nulle part de partager son compte. La règle d'accès est sur
    // « Demander l'exploration de vos URL » : « Vous devez être un propriétaire
    // ou un utilisateur avec accès complet à la propriété Search Console pour
    // pouvoir demander une indexation dans l'outil d'inspection d'URL. »
    const sources =
      pageSource.match(/legalSources=\{\[([\s\S]*?)\n {8}\]\}/)?.[1] ?? "";
    const entries = sources.split(/\n {10}\{/).slice(1);
    expect(entries.length).toBeGreaterThanOrEqual(20);
    const entryFor = (needle: string) =>
      entries.find((entry) => entry.includes(needle)) ?? "";

    const permissions = entryFor("webmasters/answer/7687615");
    expect(permissions).not.toBe("");
    expect(permissions).not.toContain("indexation");
    expect(permissions).not.toContain("compte personnel");
    expect(permissions).toContain("Exploration uniquement");

    const recrawl = entryFor("ask-google-to-recrawl");
    expect(recrawl).toContain(
      "propriétaire ou utilisateur avec accès complet sur la propriété",
    );

    // Et la FAQ dit au lecteur laquelle des deux pages porte quoi.
    const faq = outOfArticleLiterals();
    expect(faq).toContain("celle sur la demande d’exploration ajoute");
    expect(faq).not.toContain(
      "Google documente séparément le rôle de propriétaire",
    );
    // La consigne de ne pas partager son compte est une recommandation maison :
    // elle est signée, pas prêtée à Google.
    expect(faq).toContain(
      "c’est notre recommandation, pas une consigne de Google",
    );
  });

  it("dit la limite de sitemap comme la source l’écrit", () => {
    // « Tous les formats limitent la taille d'un seul sitemap à 50 Mo (sans
    // compression) ou 50 000 URL » (build-sitemap, relevé le 30/08/2026). La
    // FAQ écrivait « 50 000 URL et 50 Mo par fichier » : elle perdait la
    // compression, qui est ce qui rend le chiffre utilisable.
    // `outOfArticleLiterals` rend en U+00A0 les insécables de la source : les
    // chaînes cherchées ici les portent donc, écrites en séquence
    // d'échappement pour rester visibles en relecture.
    const text = outOfArticleLiterals();
    expect(text).toContain(
      "50\u00a0Mo sans compression ou 50\u00a0000\u00a0URL",
    );
    expect(text).not.toContain("50\u00a0000\u00a0URL et 50\u00a0Mo");
    expect(text).toContain("URL absolues et complètes");
  });

  it("donne les quotas d’API et dit qui exécute l’appel", () => {
    const text = body();
    for (const fact of [
      "1 000 lignes",
      "2 000 requêtes par jour",
      "600 par minute",
      "1 200 requêtes par minute",
      "25 000",
      "requêtes anonymisées",
      "exportation groupée",
    ]) {
      expect(text, fact).toContain(fact);
    }
    // §6.4 : un dirigeant n'appelle pas une API. Le guide nomme qui le fait.
    expect(text).toContain(
      "à confier à un développeur autorisé sur la propriété",
    );
    expect(text).toContain("qu’un développeur l’appelle pour vous");
  });

  it("rend le protocole praticable sans propriété Search Console", () => {
    // A3 du §8.1 : le cas de départ le plus courant derrière la requête est un
    // dirigeant qui n'a jamais ouvert la Search Console. Le guide le traite
    // dans le corps, et pas seulement en FAQ.
    const text = body();
    expect(text).toContain(
      "Si vous n’avez aucune propriété dans la Search Console",
    );
    expect(text).toContain("sections 03 à 05 n’ont aucun sens sans elle");
    expect(outOfArticleLiterals()).toContain(
      "Je n’ai jamais ouvert de Search Console",
    );
  });

  it("annonce trois commandes, trois écrans, et les joue sous le même agent", () => {
    // A5 du §8.1 : la réponse directe promettait « deux écrans » quand le corps
    // en déroulait trois. Et le contrôle du noindex se jouait sans `-A`, donc
    // passait à côté d'un noindex servi au seul Googlebot — précisément le
    // défaut que la commande prétend attraper.
    const text = body();
    expect(text).toContain("trois écrans de la Search Console");
    expect(text).not.toContain("deux écrans de la Search Console");
    // Ces trois commandes se jouent depuis un poste client contre le serveur.
    // « à taper sur votre serveur » envoyait le lecteur chercher un accès SSH
    // dont il n'a pas besoin, et contredisait la §02 (« depuis votre poste »)
    // comme la FAQ (« se jouent depuis n'importe quel poste »).
    expect(text).toContain("trois commandes à taper depuis votre poste");
    expect(text).not.toContain("commandes à taper sur votre serveur");
    expect(text).toContain("mesure un seul chargement depuis votre poste");
    // La limite de 2 Mo porte sur « un type de fichier compatible », pas sur le
    // HTML : le bandeau ne doit pas resserrer ce que la source dit.
    const banner = readerVisibleText(renderedPage);
    expect(banner).not.toContain("HTML lu par Googlebot");
    expect(banner).toContain("Lu par Googlebot");
    const commands = [...pageSource.matchAll(/^curl [\s\S]*?$/gm)].map(
      (match) => match[0],
    );
    expect(commands).toHaveLength(2);
    for (const command of commands) {
      expect(command, command).toContain("-A Googlebot");
    }
    expect(pageSource).not.toContain("https://exemple.fr/...");
  });

  it("traite la position moyenne sans la transformer en indicateur de pilotage", () => {
    const text = body();
    expect(text).toContain(
      "position moyenne du résultat le mieux classé de l’ensemble du site",
    );
    expect(text).toContain("moyenne de vos meilleurs résultats");
    expect(text).toContain("données préliminaires");
    // Superlatif de classement sur une population jamais mesurée.
    expect(text).not.toContain("première source de conclusions fausses");
  });

  it("dit ce que la documentation dit du délai, sans le compléter", () => {
    const text = body();
    expect(text).toContain("plusieurs jours, voire plusieurs semaines");
    expect(text).toContain("n’est pas garantie");
    expect(text).toContain("n’accélère rien");
    expect(text).toContain("jusqu’à une semaine");
    expect(text).toContain("au moins un an");
    // Ces deux faits viennent de la page « changement d'adresse avec
    // modification des URL » : le guide la nomme, faute de quoi le lecteur ne
    // peut pas remonter à la source depuis la phrase (§4.1 de la charte).
    expect(text).toContain("changement d’adresse avec modification des URL");
    expect(text).not.toMatch(/position garantie|délai garanti de classement/i);
    expect(text).not.toMatch(/nous garantissons|vous serez premier/i);
  });

  it("cite dans le bloc de sources chaque page réellement utilisée", () => {
    const sources = pageSource.match(
      /legalSources=\{\[([\s\S]*?)\n {8}\]\}/,
    )?.[1];
    expect(sources).toBeDefined();
    for (const href of [
      "crawling-indexing/googlebot",
      "crawling-indexing/overview-google-crawlers",
      "crawling-indexing/site-move-with-url-changes",
      "monitor-debug/search-operators/all-search-site",
      "webmasters/answer/7440203",
      "webmasters/answer/9012289",
      "web.dev/articles/ttfb",
    ]) {
      expect(sources, href).toContain(href);
    }
  });

  /* ──────────────────────────────────────────────
     Ce qui rate : arithmétique confrontée au texte
     ────────────────────────────────────────────── */

  it("raconte trois scénarios portant chacun un montant", () => {
    const incidents = articleHtml().match(
      /<section id="incidents"[\s\S]*?<\/section>/,
    )?.[0];
    expect(incidents).toBeDefined();
    const headings = [
      ...(incidents ?? "").matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>/g),
    ].map((match) => prose(match[1]));

    expect(headings).toHaveLength(3);
    for (const heading of headings) {
      expect(heading, heading).toMatch(/\d/);
    }
  });

  it("publie des montants qui s’additionnent, portés par leur durée", () => {
    // Recoupements A5 sur les constantes calculées à la main en tête de fichier.
    expect(
      HAND.hourEur +
        HAND.twoDaysEur +
        HAND.fourDaysEur +
        HAND.hourEur +
        HAND.threeDaysEur +
        HAND.halfDayEur,
    ).toBe(HAND.totalEur);
    expect(HAND.hourEur + HAND.twoDaysEur).toBe(HAND.firstScenarioEur);
    expect(HAND.fourDaysEur - HAND.hourEur).toBe(HAND.gapEur);
    expect(HAND.hourEur + HAND.hourEur + HAND.halfDayEur).toBe(HAND.fixesEur);
    expect(HAND.fourDaysEur + HAND.threeDaysEur).toBe(HAND.wastedEur);
    expect(HAND.fixesEur + HAND.wastedEur + HAND.twoDaysEur).toBe(
      HAND.totalEur,
    );
    expect(HAND.internalEur + HAND.agencyEur).toBe(HAND.totalEur);

    // Chaque montant publié est attaché dans le texte à la durée qui le
    // produit : changer « quatre jours » en « cinq jours » casse le test, ce
    // que la version précédente ne faisait pas.
    const text = body();
    for (const phrase of [
      "350 € le jour chargé",
      "50 € l’heure sur une base de sept heures",
      "une heure, soit 50 €",
      "la reprise, deux jours",
      "soit 700 €",
      "Total, 750 €",
      "quatre jours, 1 400 €",
      "une heure et 50 €",
      "L’écart entre les deux, 1 350 €",
      "trois jours, 1 050 € facturés",
      "une demi-journée d’administrateur système, 175 €",
      "pèsent 3 425 €",
      "275 € de corrections utiles",
      "2 450 € engagés sur la mauvaise cause",
      "700 € de reprise",
    ]) {
      expect(text, phrase).toContain(phrase);
    }
  });

  it("n’appelle pas « temps interne » une facture d’agence", () => {
    // §7.2 : les trois jours de l'agence sont facturés, pas consommés en
    // interne. Les valoriser au coût interne puis les additionner sous
    // l'étiquette « temps interne » est un transfert d'assiette.
    const text = body();
    expect(text).toContain(
      "2 375 € de temps interne et 1 050 € facturés par une agence extérieure",
    );
    expect(text).toContain("ce total ne s’appelle donc pas « temps interne »");
    expect(text).not.toContain("totalisent 3 425 € de temps interne");
  });

  it("ne publie pas comme plafond une borne qu’il atteint", () => {
    // La deuxième ligne du tableau §08 monte à 700 € pile : « sous la barre des
    // 700 € » était faux au point de contact.
    const text = body();
    expect(text).toContain("175 à 700 €");
    expect(text).toContain("aucune ne dépasse 700 €");
    expect(text).not.toContain("sous la barre des 700");
  });

  it("garde cohérents les nombres du cas construit", () => {
    // 74 URL déclarées = 68 pages en ligne + 6 adresses supprimées à la
    // refonte. L'ancienne et la nouvelle page répondent toutes deux 200 : elles
    // font partie des 68, pas des 6. Le compte se referme.
    expect(68 + 6).toBe(74);
    // 12 000 URL à inspecter, 2 000 par jour et par propriété : six jours.
    expect(12000 / 2000).toBe(6);
    // 68 pages contre un quota de 600 requêtes par minute : une seule minute.
    expect(68).toBeLessThan(600);

    const text = body();
    expect(text).toContain("68 pages en ligne");
    expect(text).toContain("un sitemap qui en déclare 74");
    expect(text).toContain("plus six adresses supprimées lors de la refonte");
    expect(text).toContain("six adresses supprimées retirées du sitemap");
    expect(text).toContain("12 000 URL");
    expect(text).toContain("six jours au quota journalier");
    expect(text).toContain("34 pages sur 68");
    expect(text).toContain("une seule minute de quota");
  });

  /* ──────────────────────────────────────────────
     Honnêteté éditoriale (§8.1, règle d'or §5.5)
     ────────────────────────────────────────────── */

  it("étiquette son cas construit sans lui inventer de provenance", () => {
    const text = body();
    // L'étiquette doit être littéralement vraie : rien dans ce cas ne provient
    // d'une fourchette publiée, et elle le dit au lieu de le laisser croire.
    expect(text).toContain(
      "Exemple construit : le métier, la ville, les volumes et les durées d’intervention sont choisis pour l’exemple et ne viennent d’aucune source",
    );
    expect(text).toContain("Ce n’est pas un dossier client");
    expect(text).toContain("ce ne sont pas des dossiers clients");
    // Les durées sont l'autre famille d'hypothèses : elle est déclarée aussi,
    // dans la section qui chiffre et dans le tableau de décision.
    expect(text).toContain("Deux familles d’hypothèses les chiffrent");
    expect(text).toContain("Aucune de ces durées ne vient d’une source");
    expect(text).toContain(
      "Ses durées viennent, comme là-bas, de l’exemple et d’aucune source",
    );

    for (const job of [
      "responsable marketing",
      "développeur",
      "administrateur système",
      "expert-comptable",
      "consultant",
      "imprimeur",
    ]) {
      expect(text, job).toContain(job);
    }
    // §6.4 : ces mots ne sont pas des personnes.
    expect(text).not.toMatch(/\b(?:le|un|les|des) intervenants?\b/i);
    expect(text).not.toMatch(/\bl’entité\b|\bles entités\b/i);
  });

  it("écrit les scénarios au conditionnel, comme des hypothèses", () => {
    // Règle d'or §5.5 : décisions, devis et incidents d'un scénario fictif
    // s'écrivent au conditionnel ou avec « supposons », jamais comme une
    // expérience vécue. La version précédente les racontait à l'indicatif.
    const incidents = prose(
      articleHtml().match(/<section id="incidents"[\s\S]*?<\/section>/)?.[0] ??
        "",
    );
    expect((incidents.match(/Supposons/g) ?? []).length).toBeGreaterThanOrEqual(
      2,
    );
    for (const conditional of [
      "basculeraient",
      "vivrait",
      "demanderait",
      "coûterait",
      "pourrait en déduire",
      "chercherait",
      "serait",
    ]) {
      expect(incidents, conditional).toContain(conditional);
    }
    for (const indicative of [
      "Personne ne regarde le rapport",
      "L’équipe en déduit que la page ne fonctionne pas",
      "L’agence en place cherche du côté des titres",
      "La cause est dans la fenêtre de sauvegarde",
    ]) {
      expect(incidents, indicative).not.toContain(indicative);
    }
    // Trois pannes indépendantes sur un site de 68 pages en quatre mois, ce
    // n'est pas vraisemblable : le guide dit qu'elles ne se cumulent pas.
    expect(incidents).toContain("ils ne se cumulent pas");
    // Et puisqu'ils ne se cumulent pas, leur somme n'est le budget de
    // personne : la page l'écrit à l'endroit exact où elle additionne, au lieu
    // de laisser croire à une facture de 3 425 € pour l'imprimeur.
    expect(incidents).toContain("Ces trois scénarios s’excluent");
    expect(incidents).toContain("leur somme ne décrit aucune facture réelle");
    expect(incidents).toContain("Ainsi lus, les trois scénarios pèsent");
    // La réserve sur le lien 503 → « Détectée » vit dans le scénario qu'elle
    // concerne, pas deux écrans plus haut.
    expect(incidents).toContain("La réserve appartient à ce scénario");
    expect(incidents).toContain(
      "aucun champ de la Search Console ne le confirmerait",
    );
  });

  it("garde intact le passage qui ne sert pas le commerce", () => {
    const text = body();
    expect(text).toContain("Ne rien acheter aujourd’hui");
    expect(text).toContain(
      "ne justifie pas 2 000 € d’audit, et nous le dirons avant de vous envoyer un devis",
    );
    expect(text).toContain("Les quatre premières lignes se règlent en interne");
    // Le budget d'exploration est le premier argument de vente du secteur : le
    // guide en donne les seuils officiels au lieu de l'invoquer.
    const faqText = pageSource.match(
      /const faqCategories: GuidePremiumFaqCategory\[\] = \[([\s\S]*?)\n\];/,
    )?.[1];
    expect(faqText).toContain("plus d’un million de pages uniques");
    expect(faqText).toContain("ce n’est pas le sujet");
  });

  it("ne porte qu’un bloc de transparence et aucune promesse de position", () => {
    const text = body();
    expect((text.match(/Transparence\./g) ?? []).length).toBe(1);
    expect(text).toContain(
      "la dernière ligne du tableau ci-dessus peut donc nous rapporter, les cinq autres non",
    );
    // Treize des vingt-deux sources sont entrées dans la page le 30/08/2026 :
    // une date de relecture au 28 août ne pouvait pas les couvrir. Les
    // vingt-deux ont été rouvertes le 30/08/2026, et les deux endroits qui
    // annoncent cette relecture — la réserve de périmètre et ce bloc — doivent
    // dire la même date.
    expect(text).toContain("Les sources officielles ont été relues le 30 août");
    expect(outOfArticleLiterals()).toContain(
      "les sources officielles citées ici ont été relues le 30 août 2026",
    );
    // Aucune date de consultation ne doit précéder l'entrée de sa source.
    expect(outOfArticleLiterals()).not.toContain("le 28 août 2026");
    expect(text).toContain(
      "Aucune position, aucune date d’indexation et aucun volume de trafic ne sont garantis",
    );
    // La réserve de fin de page redit d'où viennent les durées et les coûts,
    // pour le lecteur qui n'a lu ni la section 06 ni la section 08.
    expect(outOfArticleLiterals()).toContain(
      "Les durées et les coûts internes de ce guide sont des hypothèses éditoriales choisies pour l’exemple, jamais des relevés faits chez un client.",
    );
  });

  it("cite les prix Hagnéré Code réellement publiés sur /tarifs", () => {
    const grid = pricingSource.replace(/(?:&nbsp;|[\s  ])+/g, " ");
    for (const amount of ["2 000 € HT", "8 000 € HT", "1 500 € HT"]) {
      expect(grid, `grille : ${amount}`).toContain(amount);
    }
    // La page tarifs écrit noir sur blanc que le SEO ne publie aucun montant :
    // le guide ne doit donc en inventer aucun.
    expect(grid).toContain("aucune page du site ne publie de montant");

    const text = body();
    expect(text).toContain("8 000 € HT");
    expect(text).toContain("2 000 € HT");
    expect(text).toContain("aucune de nos pages n’en publie de montant");
    expect(pageSource).toContain('href="/tarifs"');
    expect(text).not.toMatch(/référencement à partir de \d/i);
  });

  /* ──────────────────────────────────────────────
     Style (§9.2) et maillage
     ────────────────────────────────────────────── */

  it("ne laisse passer aucun connecteur robotique", () => {
    const text = body();
    for (const tic of [
      "Il est important de noter",
      "Par ailleurs",
      "En effet",
      "Force est de constater",
      "Il convient de",
      "Concrètement,",
      "En conclusion",
      "N’hésitez pas",
      "plongeons",
      "Dans un monde où",
      "De nos jours",
      "guide ultime",
      "approche complète",
    ]) {
      expect(text, tic).not.toContain(tic);
    }
  });

  it("ne juge pas un corpus concurrent qu’il n’a jamais relevé", () => {
    // §2 de la règle d'or et §9.2 : posture de supériorité, dramatisation
    // creuse, commentaire du guide sur lui-même, aphorisme de fin de
    // paragraphe. Chacune de ces phrases avait été relevée mot pour mot.
    const text = body();
    for (const tic of [
      "que la plupart des articles racontent de travers",
      "que les articles du secteur passent sous silence",
      "son libellé exact vaut mieux que n’importe quelle interprétation",
      "Les deux issues existent",
      "Ce guide ne suppose pas d’avance laquelle est la vôtre",
      "n’ont ni la même cause, ni le même coût",
      "l’ordre des filtres n’est pas décoratif",
      "empoisonne les comités de direction",
      "la sort en cinq minutes",
      "ce qui se planifie au lieu de se découvrir",
      "C’est la même logique qu’un plan de recette",
      "coûte trois minutes",
      "lu en trois minutes",
    ]) {
      expect(text, tic).not.toContain(tic);
    }
    // Triplette numérotée : les trois plafonds sont désormais nommés, pas
    // comptés.
    expect(text).not.toMatch(/Le premier est la taille/);
    expect(text).not.toMatch(/Le deuxième est le fichier/);
    expect(text).not.toMatch(/Le troisième est le temps/);
    // Et « recette » comme mot de métier disparaît du corps : le §6.3 de la
    // charte l'interdit, le dossier de recherche du guide aussi.
    expect(text).not.toMatch(/noindex de recette|plan de recette|de recette /);
  });

  it("n’emploie que des domaines Google officiels en lien technique externe", () => {
    const externalHosts = [
      ...pageSource.matchAll(/href\s*[:=]\s*"(https:[^"]+)"/g),
    ].map((match) => new URL(match[1]).hostname);
    expect(externalHosts.length).toBeGreaterThanOrEqual(12);
    for (const host of externalHosts) {
      expect(
        ["developers.google.com", "support.google.com", "web.dev"],
        host,
      ).toContain(host);
    }
  });

  it("ne pointe que vers des guides et des services réellement publiés", () => {
    const published = new Set(PUBLISHED_GUIDES.map((item) => item.slug));
    const guideTargets = [
      ...pageSource.matchAll(
        /(?:href|ctaHref|primaryCtaHref)\s*[:=]\s*"\/guides\/([a-z0-9-]+)"/g,
      ),
    ].map((match) => match[1]);

    expect(guideTargets.length).toBeGreaterThanOrEqual(3);
    for (const target of guideTargets) {
      expect(published.has(target), target).toBe(true);
      expect(target).not.toBe(guide.slug);
    }

    const services = [
      ...pageSource.matchAll(/href="(\/services\/[a-z0-9-]+)"/g),
    ].map((match) => match[1]);
    expect(new Set(services).size).toBeGreaterThanOrEqual(3);
  });

  it("garde l’outil de relevé local, hors du temps de lecture", () => {
    expect(pageSource.match(/<SearchVisibilityDiagnostic \/>/g)).toHaveLength(
      1,
    );
    expect(pageSource).toContain('data-read-time-exclude="true"');
    expect(renderedPage.match(/<fieldset\b/g)).toHaveLength(4);
    expect(toolSource).toContain("Les quatre contrôles, dans l’ordre");
    expect(toolSource).not.toMatch(
      /\bfetch\s*\(|XMLHttpRequest|localStorage|sessionStorage|document\.cookie/,
    );
    // Les codes internes du modèle ne doivent jamais atteindre le lecteur.
    expect(readerVisibleText(renderedPage)).not.toMatch(
      /crawl-success|not-indexed|visible-impressions|zero-visible-clicks/,
    );
    expect(readerVisibleText(renderedPage)).not.toMatch(
      /\b(?:STOP|NO_GO|PASSE_[1-4]|GATE_P[1-4])\b/,
    );
  });

  it("sert trois illustrations accessibles et une image sociale dédiée", () => {
    expect(guide.articleImagePaths).toEqual(articleImagePaths);
    expect(structuredData[0].image).toEqual(
      articleImagePaths.map((path) => `https://hagnere-code.ai${path}`),
    );

    articleImagePaths.forEach((imagePath, index) => {
      const source = readFileSync(
        resolve(repositoryRoot, "public", imagePath.slice(1)),
        "utf8",
      );
      const [width, height] = articleImageDimensions[index];
      expect(source, imagePath).toContain(
        `width="${width}" height="${height}"`,
      );
      expect(source, imagePath).toContain(`viewBox="0 0 ${width} ${height}"`);
      expect(source, imagePath).toContain('<title id="title">');
      expect(source, imagePath).toContain('<desc id="desc">');
    });

    expect(renderedPage).toContain("diagnostic-google-16x9.svg");
    expect(ogSource).toContain("createGuideOgImage");
    expect(ogSource).toContain("width: 1200, height: 630");
  });

  it("garde une FAQ de six à dix questions, distinctes des H2", () => {
    const faqBlock = pageSource.match(
      /const faqCategories: GuidePremiumFaqCategory\[\] = \[([\s\S]*?)\n\];/,
    )?.[1];
    expect(faqBlock).toBeDefined();

    const questions = [
      ...(faqBlock ?? "").matchAll(/question:\s*\n?\s*"([^"]+)"/g),
    ].map((match) => match[1]);
    const answers = [
      ...(faqBlock ?? "").matchAll(/answer:\s*\n?\s*"([^"]+)"/g),
    ].map((match) => match[1]);

    expect(questions.length).toBeGreaterThanOrEqual(6);
    expect(questions.length).toBeLessThanOrEqual(10);
    expect(answers).toHaveLength(questions.length);

    for (const question of questions) {
      expect(question.trim().endsWith("?"), question).toBe(true);
    }
    for (const answer of answers) {
      const words = answer.split(/\s+/).filter(Boolean).length;
      expect(words, answer.slice(0, 50)).toBeGreaterThanOrEqual(40);
      expect(words, answer.slice(0, 50)).toBeLessThanOrEqual(120);
    }

    // §9.2 : la symétrie binaire « Non. » / « Oui, mais » ne doit pas devenir
    // le gabarit de la FAQ.
    const binaryOpeners = answers.filter((answer) =>
      /^(?:Non|Oui)\b/.test(answer),
    ).length;
    expect(binaryOpeners / answers.length).toBeLessThanOrEqual(0.34);

    const h2Texts = [...articleHtml().matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g)]
      .map((match) => readerVisibleText(match[1]).toLowerCase())
      .filter(Boolean);
    for (const question of questions) {
      expect(h2Texts, question).not.toContain(
        question.toLowerCase().replace(/\\u00a0/g, " "),
      );
    }
  });

  it("traite explicitement la requête cible", () => {
    const text = body().toLowerCase();
    expect(text).toContain("search console");
    expect(text).toContain("invisible");
    expect(
      (body().match(/Search Console/g) ?? []).length,
    ).toBeGreaterThanOrEqual(8);
  });
});
