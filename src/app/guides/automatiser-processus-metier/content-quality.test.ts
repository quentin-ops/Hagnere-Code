import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { getGuide, PUBLISHED_GUIDES } from "@/lib/guides";
import Page, { metadata } from "./page";
import {
  calculateProcessPriority,
  INITIAL_INPUTS,
} from "./process-priority-tool";

const slugDirectory = dirname(fileURLToPath(import.meta.url));
const repositoryRoot = resolve(slugDirectory, "../../../..");
const pageSource = readFileSync(resolve(slugDirectory, "page.tsx"), "utf8");
const toolSource = readFileSync(
  resolve(slugDirectory, "process-priority-tool.tsx"),
  "utf8",
);
const ogSource = readFileSync(
  resolve(slugDirectory, "opengraph-image.tsx"),
  "utf8",
);
/** Grille tarifaire publique : source de vérité des prix maison cités ici. */
const pricingSource = readFileSync(
  resolve(repositoryRoot, "src/components/tarifs/body.ts"),
  "utf8",
);
const renderedPage = renderToStaticMarkup(Page());
const guide = getGuide("automatiser-processus-metier");
const structuredData = [
  ...renderedPage.matchAll(
    /<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g,
  ),
].map((match) => JSON.parse(match[1]) as Record<string, unknown>);

/**
 * Port fidèle de `stripReadTimeExcludedElements`, dans
 * `scripts/measure-guide-readtime.mjs`.
 *
 * La version précédente de ce fichier annonçait faire « comme le script » sans
 * retirer les blocs `sr-only` ni traiter les éléments orphelins : elle comptait
 * 56 mots de plus, et le commentaire rendait l'écart invisible. Les trois
 * différences — sélecteur `sr-only`, liste des éléments sans fermeture,
 * `toLowerCase` sur le nom de balise — sont donc reprises telles quelles. Le
 * script reste la mesure de référence, parce qu'il lit la page servie ; ce port
 * ne sert qu'à faire échouer le fichier quand la page et le registre divergent
 * entre deux mesures.
 */
function removeReadTimeExcludedElements(html: string) {
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

function articleHtml() {
  const html = renderedPage.match(/<article\b[^>]*>([\s\S]*?)<\/article>/)?.[1];
  expect(html).toBeDefined();
  return removeReadTimeExcludedElements(html ?? "");
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

function articleWordCount() {
  return (
    articleText().match(/[\p{L}\p{N}]+(?:[’'\-][\p{L}\p{N}]+)*/gu)?.length ?? 0
  );
}

function articleText() {
  return readerVisibleText(articleHtml());
}

/**
 * Texte lisible en conservant les insécables.
 *
 * `readerVisibleText` ramène tout blanc à une espace ordinaire, ce qui rend
 * la vérification typographique impossible : U+00A0 appartient à `\s`. La
 * substitution de `&nbsp;` s'écrit ici en échappement explicite ; un
 * caractère littéral tapé dans le remplacement se perdrait en silence et le
 * contrôle passerait au vert sans rien vérifier.
 */
function typographicText(html: string) {
  return html
    .replace(
      /<(script|style|template|noscript|svg)\b[^>]*>[\s\S]*?<\/\1>/gi,
      " ",
    )
    .replace(/&nbsp;/gi, "\u00a0")
    .replace(/&#(?:160|xa0);/gi, "\u00a0")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&(?:rsquo|apos);/gi, "’")
    .replace(/&(?:ndash|mdash);/gi, "—")
    .replace(/&euro;/gi, "€")
    .replace(/&[a-z]+;/gi, " ")
    .replace(/[ \t\r\n]+/g, " ")
    .trim();
}

/** Texte lisible, insécables ramenés à des espaces ordinaires. */
function prose(html: string) {
  return typographicText(html).replace(/[\u00a0\u202f]/g, " ");
}

/** Prose seule : ni tableau, ni bloc de formule, ni titre. */
function proseParagraphs() {
  const withoutBlocks = articleHtml()
    .replace(/<table[\s\S]*?<\/table>/g, " ")
    .replace(/<pre[\s\S]*?<\/pre>/g, " ");
  return [...withoutBlocks.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/g)]
    .map((match) => readerVisibleText(match[1]))
    .join(" ");
}

describe("qualité de contenu du guide « quel processus automatiser »", () => {
  /* ──────────────────────────────────────────────
     Identité, registre et données structurées
     ────────────────────────────────────────────── */

  it("garde le titre, le H1 visible et le headline identiques", () => {
    const expected = "Quel processus métier automatiser en premier ?";
    const h1 = readerVisibleText(
      renderedPage.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1] ?? "",
    );

    const flat = (value: unknown) =>
      String(value).replace(/[\u00a0\u202f]/g, " ");

    expect(guide.title).toBe(expected);
    expect(h1).toBe(expected);
    // Le H1 visible et le `headline` structuré viennent tous deux de
    // `heroTitle`, qui porte l'insécable avant le point d'interrogation. La
    // balise `title`, elle, reste en espace ordinaire : elle est tronquée par
    // les moteurs et ne se lit pas comme une phrase.
    expect(flat(structuredData[0].headline)).toBe(expected);
    expect(String(structuredData[0].headline)).toContain("\u00a0?");
    expect(pageSource).toContain('heroTitleSuffix={"en premier\\u00a0?"}');
  });

  it("ne répète jamais le H1 dans un H2 de l’article", () => {
    // §6.5 : le titre de couverture ne reprend aucun titre de section.
    const h2Texts = [...articleHtml().matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g)]
      .map((match) => readerVisibleText(match[1]).toLowerCase())
      .filter((text) => text !== "");

    expect(h2Texts).toHaveLength(8);
    for (const h2 of h2Texts) {
      expect(h2, h2).not.toContain("processus métier automatiser");
      expect(h2, h2).not.toContain("automatiser en premier");
    }
  });

  it("tient la bande de calibre « méthode / parcours »", () => {
    // §5.3 : 3 000 à 4 200 mots. La requête cible — « quel processus
    // automatiser en premier » — décrit un parcours, pas une comparaison :
    // le guide fait mesurer, éliminer, chiffrer, puis décider.
    // Le calculateur est exclu du décompte, comme du temps de lecture : ses
    // libellés de champs ne sont pas de la prose.
    const words = articleWordCount();
    expect(words).toBeGreaterThanOrEqual(3_000);
    expect(words).toBeLessThanOrEqual(4_200);
  });

  it("annonce un temps de lecture cohérent avec la longueur mesurée", () => {
    // Convention du dépôt : mots visibles ÷ 200, hors blocs exclus.
    // `scripts/verify-search-indexing-artifact.mjs` tolère ±1 minute.
    const measured = Math.max(1, Math.round(articleWordCount() / 200));
    expect(Math.abs(guide.readTimeMin - measured)).toBeLessThanOrEqual(1);
  });

  it("fait concorder les minutes de section, le registre et le hub", () => {
    // Le hub et la page affichaient 21 et 24 minutes pour le même article :
    // le lecteur comptait lui-même l'écart en descendant. La somme des durées
    // de section est donc verrouillée sur `readTimeMin`, seule valeur que le
    // hub, le registre et les données structurées lisent.
    const perSection = [...pageSource.matchAll(/readingTime="(\d+) min"/g)].map(
      (match) => Number(match[1]),
    );
    const total = perSection.reduce((sum, value) => sum + value, 0);

    expect(perSection).toHaveLength(8);
    expect(total, `${perSection.join(" + ")} = ${total}`).toBe(
      guide.readTimeMin,
    );
  });

  it("publie le guide par le registre central", () => {
    expect(guide.editorialStatus).toBe("published");
    expect(PUBLISHED_GUIDES.some((item) => item.slug === guide.slug)).toBe(true);
    expect(metadata.alternates?.canonical).toBe(
      "https://hagnere-code.ai/guides/automatiser-processus-metier",
    );
    expect(metadata.openGraph).toMatchObject({
      publishedTime: guide.datePublished,
      modifiedTime: guide.dateModified,
    });
    expect(Date.parse(guide.dateModified)).toBeGreaterThan(
      Date.parse(guide.datePublished),
    );
    expect(guide.metaDescription.length).toBeLessThanOrEqual(155);
    expect(guide.title.length).toBeLessThanOrEqual(60);
  });

  it("n’émet que les schémas Article et BreadcrumbList", () => {
    expect(structuredData.map((item) => item["@type"])).toEqual([
      "Article",
      "BreadcrumbList",
    ]);
    expect(JSON.stringify(structuredData)).not.toMatch(
      /\b(?:FAQPage|HowTo|Offer|Review|AggregateRating|Product|wordCount)\b/,
    );
  });

  /* ──────────────────────────────────────────────
     Typographie française (§9.3)
     ────────────────────────────────────────────── */

  it("n’écrit aucun insécable littéral dans le code", () => {
    // Un U+00A0 tapé dans une chaîne est invisible en relecture et se perd en
    // silence au premier passage par un heredoc ou une réécriture.
    for (const [name, source] of [
      ["page.tsx", pageSource],
      ["process-priority-tool.tsx", toolSource],
      ["opengraph-image.tsx", ogSource],
    ] as const) {
      expect(/[\u00a0\u202f\u2009]/.test(source), name).toBe(false);
    }
  });

  it("pose un insécable avant chaque ponctuation double du corps", () => {
    const text = typographicText(articleHtml());
    const offenders = [...text.matchAll(/.{0,40}[^\s] [?!;:»].{0,20}/g)].map(
      (match) => match[0],
    );

    expect(offenders, offenders.join("\n")).toHaveLength(0);
  });

  it("colle les nombres à leur unité et sépare les milliers", () => {
    const text = typographicText(articleHtml());

    expect([...text.matchAll(/.{0,30}\d €.{0,10}/g)].map((m) => m[0])).toEqual(
      [],
    );
    expect([...text.matchAll(/.{0,30}\d %.{0,10}/g)].map((m) => m[0])).toEqual(
      [],
    );
    expect([...text.matchAll(/.{0,30}\d \$.{0,10}/g)].map((m) => m[0])).toEqual(
      [],
    );
    const glued = [...text.matchAll(/\b\d{4,}\b/g)]
      .map((m) => m[0])
      .filter((value) => !/^20\d\d$/.test(value));
    expect(glued, glued.join(", ")).toHaveLength(0);
  });

  it("n’emploie que des apostrophes courbes et des guillemets français", () => {
    const text = typographicText(articleHtml());
    expect(text).not.toMatch(/[a-zàâäéèêëîïôöùûüç]'[a-zàâäéèêëîïôöùûüç]/i);
    expect(text).not.toContain('"');
    expect(text).toContain("«\u00a0");
    expect(text).toContain("\u00a0»");
  });

  /* ──────────────────────────────────────────────
     Structure (§6.5)
     ────────────────────────────────────────────── */

  it("porte une réponse directe courte et chiffrée", () => {
    const answer = articleHtml().match(
      /<section id="reponse"[\s\S]*?<\/section>/,
    )?.[0];
    expect(answer).toBeDefined();
    const paragraphs = [
      ...(answer ?? "").matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g),
    ].slice(0, 3);
    const words = readerVisibleText(paragraphs.map((p) => p[1]).join(" "))
      .split(/\s+/)
      .filter(Boolean).length;

    expect(words).toBeGreaterThanOrEqual(120);
    expect(words).toBeLessThanOrEqual(200);
    expect(prose(answer ?? "")).toContain("32, 25, 21 et 12 heures par mois");
    expect(prose(answer ?? "")).toContain("−546 €");
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
    expect(share).toBeLessThanOrEqual(0.6);
  });

  it("ne dépasse pas quatre tableaux éditoriaux, tous porteurs de chiffres", () => {
    const tables = [...articleHtml().matchAll(/<table[\s\S]*?<\/table>/g)].map(
      (match) => match[0],
    );
    expect(tables.length).toBeGreaterThanOrEqual(3);
    expect(tables.length).toBeLessThanOrEqual(4);
    for (const table of tables) {
      const digits = (readerVisibleText(table).match(/\d/g) ?? []).length;
      expect(digits, readerVisibleText(table).slice(0, 80)).toBeGreaterThan(6);
    }
  });

  it("tient au moins dix valeurs chiffrées pour mille mots de prose", () => {
    // §6.2. La densité se mesure sur la prose : ni tableau, ni bloc de
    // formule, ni libellé de formulaire. Les millésimes ne comptent pas.
    const text = proseParagraphs().replace(/\b20\d\d\b/g, " ");
    const words = text.match(/[\p{L}\p{N}]+(?:[’'\-][\p{L}\p{N}]+)*/gu) ?? [];
    const values = text.match(/\d+(?:[,.]\d+)?(?: \d{3})*/g) ?? [];
    const density = (values.length / words.length) * 1000;

    expect(
      density,
      `${values.length} valeurs pour ${words.length} mots de prose`,
    ).toBeGreaterThanOrEqual(10);
  });

  it("raconte trois incidents portant chacun un montant ou une durée", () => {
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
    for (const fact of [
      "5 550 € décalés d’un jour",
      "0,91 €",
      "23 relances en double",
      "89,40 €",
      "83 250 €",
      "109,48 €",
      "198,88 €",
      "48 relances",
      "88 800 €",
      "124,08 €",
      "268,20 €",
      "ils coûtent peu",
    ]) {
      expect(prose(incidents ?? ""), fact).toContain(fact);
    }
  });

  it("chiffre le coût de financement des trois incidents", () => {
    /*
     * Constantes posées à la main. Le contrôle précédent réimplémentait la
     * formule de la page — `dailyFlow × days × 0,06 × days / 365` — donc il
     * héritait de ses deux fautes au lieu de les trouver : le retard traité
     * comme maximal alors qu'il est moyen, et un flux journalier fractionnaire
     * mélangé à des relances entières.
     *
     * UNITÉ TENUE : la relance entière, 1 850 € TTC, au rythme de 90 par mois
     * soit trois par jour. FORMULE PUBLIÉE : montant × taux × jours ÷ 365, au
     * taux de 6 %. RETARD d'un envoi suspendu N jours : (N + 1) ÷ 2.
     *
     * Incident 1 — quota épuisé, une journée de relances décalée d'un jour.
     *   3 × 1 850                 = 5 550 €
     *   5 550 × 0,06              = 333
     *   333 ÷ 365                 = 0,912328…    → 0,91 €
     *   Une heure pour comprendre : 1 × 44,70    = 44,70 €
     *
     * Incident 2 — campagne suspendue quinze jours.
     *   15 × 3                    = 45 relances
     *   45 × 1 850                = 83 250 €
     *   retard moyen (15 + 1) ÷ 2 = 8 jours
     *   83 250 × 0,06             = 4 995
     *   4 995 × 8                 = 39 960
     *   39 960 ÷ 365              = 109,479452…  → 109,48 €
     *   Deux heures de comptable : 2 × 44,70     = 89,40 €
     *   Total : 89,40 + 109,48    = 198,88 €     → 199 € au titre
     *
     * Incident 3 — flux arrêté seize jours.
     *   16 × 3                    = 48 relances
     *   48 × 1 850                = 88 800 €
     *   retard moyen (16 + 1) ÷ 2 = 8,5 jours
     *   88 800 × 0,06             = 5 328
     *   5 328 × 8,5               = 45 288
     *   45 288 ÷ 365              = 124,076712…  → 124,08 €
     *   Six heures pour republier : 6 × 44,70    = 268,20 €
     */
    const incidents = prose(
      articleHtml().match(/<section id="incidents"[\s\S]*?<\/section>/)?.[0] ??
        "",
    );

    // Les montants décalés sont des multiples entiers de la facture moyenne :
    // aucun flux calendaire fractionnaire ne se glisse dans la section.
    for (const [relances, montant] of [
      [3, "5 550 €"],
      [45, "83 250 €"],
      [48, "88 800 €"],
    ] as const) {
      const exact = new Intl.NumberFormat("fr-FR")
        .format(relances * 1_850)
        .replace(/[  ]/g, " ");
      expect(`${exact} €`, `${relances} relances`).toBe(montant);
      expect(incidents, montant).toContain(montant);
    }

    for (const printed of [
      "0,91 €",
      "44,70 €",
      "89,40 €",
      "109,48 €",
      "198,88 €",
      "124,08 €",
      "268,20 €",
    ]) {
      expect(incidents, printed).toContain(printed);
    }

    // Le total imprimé est la somme exacte des deux montants imprimés : un
    // lecteur qui additionne 89,40 et 109,48 retrouve 198,88 au centime.
    expect(89.4 + 109.48).toBeCloseTo(198.88, 10);
    expect(2 * 44.7).toBeCloseTo(89.4, 10);
    expect(6 * 44.7).toBeCloseTo(268.2, 10);

    // Le modèle du retard moyen est écrit, pas seulement appliqué.
    expect(incidents).toContain("montant décalé × taux × jours ÷ 365");
    expect(incidents).toContain("(N + 1) ÷ 2 jours de retard en moyenne");
    expect(incidents).toContain("huit jours de retard en moyenne");
    expect(incidents).toContain("8,5 jours de retard en moyenne");

    // Le guide ne présente jamais le montant décalé comme une perte.
    expect(incidents).toContain("Chiffrez ce décalage au lieu de l’invoquer");
    expect(incidents).toContain("Le montant est petit");
    // L'incident du quota relève du régime officiel, pas de la transition.
    expect(incidents).toContain("période de transition");
    expect(incidents).toContain("pas un incident d’aujourd’hui");
  });

  it("annonce son cas comme construit et nomme des métiers, pas des cases", () => {
    const text = prose(articleHtml());
    // L'étiquette dit littéralement ce qui vient d'une source et ce qui est
    // choisi. « À partir des fourchettes citées dans ce guide » était faux :
    // aucune fourchette du guide ne fonde 320/60/140/90 dossiers, 26 salariés
    // ni 1 850 € de facture moyenne.
    expect(text).toContain(
      "les volumes, les durées, l’effectif, la ville et la facture moyenne sont choisis pour la démonstration et ne viennent d’aucune source",
    );
    expect(text).toContain("Ce n’est pas un dossier client");
    expect(text).toContain("ce ne sont pas des dossiers clients");
    expect(text).not.toContain("à partir des fourchettes citées");

    for (const job of [
      "responsable administration des ventes",
      "comptable",
      "chargés d’affaires",
      "magasinier",
      "expert-comptable",
      "administrateur",
      "développement",
      "délégué à la protection des données",
    ]) {
      expect(text, job).toContain(job);
    }
    // §6.4 : ces mots ne sont pas des personnes.
    expect(text).not.toMatch(/\b(?:le|un|les|des) prestataires?\b/i);
    expect(text).not.toMatch(/\b(?:le|un|les|des) intervenants?\b/i);
  });

  it("lève l’ambiguïté du cas avant d’afficher la première mesure", () => {
    // Le bandeau, le hero et la première phrase précèdent tous le bloc qui
    // portait l'étiquette : un lecteur qui ne lit que le haut de page repartait
    // avec quatre mesures qui se lisaient comme un relevé fait chez un client.
    const hero = prose(renderedPage.split("<article")[0] ?? "");
    expect(hero).toContain("Exemple construit, pas un dossier client");
    expect(hero).toContain("Exemple construit · processus");
    expect(hero).toContain("Ce guide le montre sur un exemple construit");
    expect(hero).toContain("rien de relevé chez un client");

    const firstParagraph = prose(
      articleHtml().match(/<p[^>]*>([\s\S]*?)<\/p>/)?.[1] ?? "",
    );
    expect(firstParagraph).toContain("exemple construit");
    expect(firstParagraph).toContain("non relevés chez un client");
    // L'étiquette précède bien les 320 commandes et les 32 heures.
    expect(firstParagraph.indexOf("exemple construit")).toBeLessThan(
      firstParagraph.indexOf("320"),
    );
  });

  it("ne porte qu’un bloc de transparence et qu’un appel à l’action en ligne", () => {
    const text = prose(articleHtml());
    expect((text.match(/Transparence\./g) ?? []).length).toBe(1);
    expect(text).toContain(
      "Hagnéré Code construit des outils internes sur mesure et perçoit des honoraires",
    );
    expect(text).toContain("relevés le 28 août 2026");
    expect(text).toContain("à revérifier tous les douze mois");
    expect((pageSource.match(/<TrackedGuideCtaLink/g) ?? []).length).toBe(1);
  });

  it("garde intacts les passages qui ne servent pas le commerce", () => {
    const text = prose(articleHtml());
    expect(text).toContain("Ce que notre propre grille dit contre nous");
    expect(text).toContain(
      "ne justifie pas le premier palier de notre grille d’outils internes",
    );
    expect(text).toContain("C’est une décision, pas un échec");
    expect(text).toContain(
      "ne rien automatiser cette année » reste une conclusion acceptable",
    );
  });

  /* ──────────────────────────────────────────────
     Fond : la mesure, les seuils, les sources
     ────────────────────────────────────────────── */

  it("expose la méthode de mesure, pas seulement son résultat", () => {
    const text = prose(articleHtml());
    for (const fact of [
      "balance âgée",
      "export CSV",
      "douze mois glissants",
      "Vingt dossiers consécutifs",
      "heure de début, heure de fin",
      "La médiane décrit le cas courant",
      "neuvième décile",
      "8,4 minutes de moyenne",
      "3 minutes de médiane",
      "24 minutes sur 84",
      "28,6 %",
      "la seule des trois valeurs qui s’additionne",
    ]) {
      expect(text, fact).toContain(fact);
    }
  });

  it("chiffre les quatre candidats et justifie le classement", () => {
    const text = prose(articleHtml());
    for (const fact of [
      "320",
      "60",
      "140",
      "90",
      "32 h",
      "25 h",
      "21 h",
      "12 h",
      "22 min",
    ]) {
      expect(text, fact).toContain(fact);
    }
    expect(text).toContain("90 heures par mois");
  });

  it("cite les deux règles de comptage des plateformes avec leur source", () => {
    const text = prose(articleHtml());
    for (const fact of [
      "Le déclencheur, les filtres et les chemins ne comptent pas",
      "Les actions en échec comptent, les nouvelles tentatives et la pagination aussi",
      "750 tâches par mois pour 19,99 $",
      "5 000 pour 89 $",
      "100 000 pour 489 $",
      "6 000 requêtes par utilisateur et par 24 heures",
      "le quota ne se reporte pas au lendemain",
      "Rejouer une exécution entière refait tourner les étapes déjà réussies",
      "540 actions réussies",
      "810 requêtes",
      "1 280 requêtes",
      "5 120 requêtes",
      "40 000 requêtes",
      "250 000 requêtes",
      "50 000 requêtes",
      "période de transition",
    ]) {
      expect(text, fact).toContain(fact);
    }
    // Les montants sont un échantillon daté, jamais un prix de marché.
    expect(text).toContain("échantillon daté d’un seul éditeur");
    expect(text).toContain("28 août 2026");
  });

  it("source le coût horaire et son champ, au lieu de le poser", () => {
    const text = prose(articleHtml());
    expect(text).toContain("44,70 €");
    expect(text).toContain("entreprises de dix salariés ou plus");
    expect(text).toContain("déclaration sociale nominative");
    expect(text).toContain("L’INSEE publie");
    // Les hypothèses non sourcées sont annoncées comme telles.
    expect(text).toContain("ne sortent d’aucune source");
    for (const hypothesis of [
      "65 % de temps techniquement retirable",
      "85 % d’adoption moyenne",
      "50 % des heures libérées",
      "quatre jours de sept heures",
      "deux heures de suivi par mois",
    ]) {
      expect(text, hypothesis).toContain(hypothesis);
    }
  });

  it("traite la sortie du calcul quand la mesure du temps dit non", () => {
    const text = prose(articleHtml());
    for (const fact of [
      "13,6 jours",
      "13,4 jours",
      "1 850 € TTC",
      "166 500 €",
      "1 998 000 €",
      "5 474 €",
      "21 896 €",
      "1 314 €",
      "+768 €",
      "657 €",
      "+111 €",
      "elle ne vaut rien et l’écart reste à −546 €",
      "Deux gains qui s’additionnent, un qui fait doublon",
    ]) {
      expect(text, fact).toContain(fact);
    }
    // Les quatre hypothèses de cette section sont annoncées comme non
    // sourcées, au même titre que les cinq de la section 05 : la liste de la
    // section 05 ne couvrait que le tableau à douze mois.
    expect(text).toContain("Quatre nombres entrent ici sans venir d’une source");
    expect(text).toContain("La section 06 en ajoutera quatre autres");
  });

  /* ──────────────────────────────────────────────
     Arithmétique : le guide confronté au modèle
     ────────────────────────────────────────────── */

  it("affiche exactement le décompte que le modèle recalcule", () => {
    const result = calculateProcessPriority(INITIAL_INPUTS);
    const text = prose(articleHtml());

    // Les valeurs imprimées dans le tableau, et la ligne du modèle qui doit
    // les produire. La comparaison se fait dans les deux sens : une valeur du
    // guide qui ne serait plus calculée, ou un calcul qui ne serait plus
    // publié, font échouer ce contrôle.
    const printed = [
      { label: "144 h", value: result.baselineHours, expected: 144 },
      {
        label: "93,60 h",
        value: result.technicallyRemovableHours,
        expected: 93.6,
      },
      { label: "79,56 h", value: result.actuallyFreedHours, expected: 79.56 },
      { label: "39,78 h", value: result.reassignableHours, expected: 39.78 },
      {
        label: "1 778,17 €",
        value: result.capacityValue,
        expected: 1_778.166,
      },
      { label: "1 251,60 €", value: result.initialCost, expected: 1_251.6 },
      {
        label: "1 072,80 €",
        value: result.totalCost - result.initialCost,
        expected: 1_072.8,
      },
      { label: "−546,23 €", value: result.netValue, expected: -546.234 },
    ] as const;

    for (const row of printed) {
      expect(row.value, row.label).toBeCloseTo(row.expected, 6);
      expect(text, row.label).toContain(row.label);
    }
    // L'arrondi publié suit bien la valeur calculée.
    expect(
      Math.round(Math.abs(result.netValue) * 100) / 100,
    ).toBe(546.23);
    expect(Math.round(result.capacityValue * 100) / 100).toBe(1_778.17);
  });

  it("retrouve le seuil de 118 relances par balayage, pas par la formule du guide", () => {
    // Méthode différente de celle publiée : le guide résout une inéquation
    // linéaire, ce contrôle balaie le volume relance par relance.
    let tipping = 0;
    for (let cases = 1; cases <= 5_000; cases += 1) {
      const scan = calculateProcessPriority({
        ...INITIAL_INPUTS,
        casesPerMonth: cases,
      });
      if (scan.netValue > 0) {
        tipping = cases;
        break;
      }
    }

    const text = prose(articleHtml());
    expect(tipping).toBe(118);
    expect(text).toContain("118 relances par mois");
    expect(text).toContain("28 de plus qu’aujourd’hui");
    expect(tipping - INITIAL_INPUTS.casesPerMonth).toBe(28);
  });

  it("vérifie la sensibilité au suivi et l’identité en heures publiées", () => {
    const halved = calculateProcessPriority({
      ...INITIAL_INPUTS,
      monthlyRunCost: INITIAL_INPUTS.loadedHourlyCost,
    });
    const text = prose(articleHtml());

    expect(halved.netValue).toBeCloseTo(-9.834, 6);
    expect(text).toContain("−9,83 €");
    expect(text).toContain(
      "39,78 heures rendues contre 52 heures dépensées",
    );
    expect(text).toContain("il ne change jamais le signe du résultat");
  });

  it("garde la chaîne de trésorerie exacte à chaque arrondi publié", () => {
    /*
     * Le contrôle précédent se disait « méthode indépendante » alors qu'il
     * additionnait quatre fois le même flux quotidien : c'est × 4 écrit
     * autrement, donc la même formule que la page.
     *
     * Les constantes ci-dessous sont posées à la main, maillon par maillon :
     *   90 × 1 850 €          = 166 500 € par mois
     *   166 500 × 12          = 1 998 000 € sur l'année
     *   1 998 000 ÷ 365       = 5 473,9726…  € par jour → 5 474 €
     *   5 473,9726 × 4 jours  = 21 895,8904… €          → 21 896 €
     *   21 895,8904 × 6 %     = 1 313,7534… €           → 1 314 €
     *   1 313,7534 − 546,234  =   767,5194…             → +768 €
     *   21 895,8904 × 3 %     =   656,8767… €           → 657 €
     *     656,8767 − 546,234  =   110,6427…             → +111 €
     */
    const DAILY = 5_473.9726;
    const FOUR_DAYS = 21_895.8904;
    const AT_SIX = 1_313.7534;
    const AT_THREE = 656.8767;
    const TWELVE_MONTH_GAP = -546.234;

    expect(90 * 1_850).toBe(166_500);
    expect(166_500 * 12).toBe(1_998_000);
    expect(Math.round(DAILY)).toBe(5_474);
    expect(Math.round(FOUR_DAYS)).toBe(21_896);
    expect(Math.round(AT_SIX)).toBe(1_314);
    expect(Math.round(AT_SIX + TWELVE_MONTH_GAP)).toBe(768);
    expect(Math.round(AT_THREE)).toBe(657);
    expect(Math.round(AT_THREE + TWELVE_MONTH_GAP)).toBe(111);

    // Chaque maillon est publié, pour que le lecteur refasse la chaîne.
    const text = prose(articleHtml());
    for (const printed of [
      "166 500 €",
      "1 998 000 €",
      "5 474 €",
      "21 896 €",
      "1 314 €",
      "+768 €",
      "657 €",
      "+111 €",
    ]) {
      expect(text, printed).toContain(printed);
    }
    // La formule qui produit 0,91 €, 109,48 € et 124,08 € est publiée elle
    // aussi : sans elle, trois chiffres du guide n'étaient pas refaisables.
    expect(text).toContain("montant décalé × taux annuel × jours de retard ÷ 365");
  });

  it("publie l’écart aux trois horizons et le délai que l’outil affiche", () => {
    /*
     * Le guide s'arrêtait à douze mois et présentait −546 € comme un refus
     * définitif, alors que son propre calculateur affichait déjà un retour à
     * 21,3 mois quatre écrans plus bas.
     *
     * Constantes calculées à la main, le modèle étant linéaire en mois :
     *   90 cas × 8 min ÷ 60                    = 12 h par mois
     *   12 × 65 % × 85 % × 50 %                = 3,315 h réaffectées par mois
     *   dépenses : 28 h une fois, puis 2 h par mois
     *     12 mois : 3,315 × 12 =  39,78 h − ( 28 + 24) =  −12,22 h
     *     24 mois : 3,315 × 24 =  79,56 h − ( 28 + 48) =   +3,56 h
     *     36 mois : 3,315 × 36 = 119,34 h − ( 28 + 72) =  +19,34 h
     *   × 44,70 € : −546,234 € ; +159,132 € ; +864,498 €
     *   équilibre : 1 251,60 ÷ (3,315 × 44,70 − 89,40)
     *             = 1 251,60 ÷ 58,7805 = 21,2927… mois → 21,3 mois
     */
    const at12 = calculateProcessPriority(INITIAL_INPUTS);
    const at24 = calculateProcessPriority({
      ...INITIAL_INPUTS,
      horizonMonths: 24,
    });
    const at36 = calculateProcessPriority({
      ...INITIAL_INPUTS,
      horizonMonths: 36,
    });

    expect(at24.reassignableHours).toBeCloseTo(79.56, 6);
    expect(at36.reassignableHours).toBeCloseTo(119.34, 6);
    expect(at12.netValue).toBeCloseTo(-546.234, 6);
    expect(at24.netValue).toBeCloseTo(159.132, 6);
    expect(at36.netValue).toBeCloseTo(864.498, 6);
    expect(Math.round(at24.netValue)).toBe(159);
    expect(Math.round(at36.netValue)).toBe(864);
    expect(at24.decision).toBe("pilot");

    // Le délai affiché par l'outil et celui écrit dans la prose sont le même.
    expect(at12.breakEvenMonths).not.toBeNull();
    expect(Math.round((at12.breakEvenMonths ?? 0) * 10) / 10).toBe(21.3);

    const text = prose(articleHtml());
    expect(text).toContain("79,56 heures en vingt-quatre mois contre 76");
    expect(text).toContain("119,34 heures contre 100");
    expect(text).toContain("+159 €");
    expect(text).toContain("+864 €");
    expect(text).toContain("21,3 mois");
    expect(text).toContain("verdict d’horizon");
    // Le bandeau porte le même délai que la prose et que l'outil.
    expect(pageSource).toContain('{ label: "Équilibre du même flux", value: "21,3');
    // La limite du calculateur est écrite sous le calculateur.
    expect(text).toContain("cet outil ne compte que des heures");
  });

  it("garde les quatre lignes chronométrées arithmétiquement exactes", () => {
    const measured = [
      { cases: 320, minutes: 6, hours: 32 },
      { cases: 60, minutes: 25, hours: 25 },
      { cases: 140, minutes: 9, hours: 21 },
      { cases: 90, minutes: 8, hours: 12 },
    ];
    const text = prose(articleHtml());
    let total = 0;

    for (const line of measured) {
      expect((line.cases * line.minutes) / 60).toBe(line.hours);
      total += line.hours;
      expect(text).toContain(`${line.hours} h`);
    }

    expect(total).toBe(90);
    expect(text).toContain("90 heures par mois");
    // Le contre-exemple des dix dossiers : 24 minutes retirées sur 84.
    expect(Math.round(((8 * 3) / (8 * 3 + 2 * 30)) * 1000) / 10).toBe(28.6);
  });

  /* ──────────────────────────────────────────────
     Prix maison : concordance avec la grille publiée
     ────────────────────────────────────────────── */

  it("cite les prix Hagnéré Code réellement publiés sur /tarifs", () => {
    const grid = pricingSource.replace(/(?:&nbsp;|[\s\u00a0\u202f])+/g, " ");
    for (const amount of ["990 € HT", "1 500 € HT", "8 k€ HT"]) {
      expect(grid, `grille : ${amount}`).toContain(amount);
    }

    const text = prose(articleHtml());
    expect(text).toContain("8 000 € HT");
    expect(text).toContain("1 500 € HT");
    expect(text).toContain("repères publics et indicatifs");
    expect(text).toContain("le devis signé fixe le prix ferme");
    expect(pageSource).toContain('href="/tarifs"');
  });

  /* ──────────────────────────────────────────────
     Style (§9.2), métaphores et maillage (§11.8)
     ────────────────────────────────────────────── */

  it("ne laisse passer aucun connecteur robotique", () => {
    const text = prose(articleHtml());
    for (const tic of [
      "Il est important de noter",
      "Par ailleurs",
      "En effet",
      "Force est de constater",
      "Il convient de",
      "Concrètement,",
      "En conclusion",
      "N’hésitez pas",
      "dans un monde où",
      "plongeons",
    ]) {
      expect(text, tic).not.toContain(tic);
    }
  });

  it("ne rapporte aucune fréquence sur une population jamais mesurée", () => {
    // Une société créée le 30/09/2025 n'a observé ni « la plupart des dossiers
    // présentés en comité », ni « l'erreur la plus fréquente des tableaux de
    // priorisation ». Ces sept formules sont supprimées, pas déplacées : le
    // contrôle porte sur le corps, la FAQ et le hero.
    const faqBlock =
      pageSource.match(
        /const faqCategories: GuidePremiumFaqCategory\[\] = \[([\s\S]*?)\n\];/,
      )?.[1] ?? "";
    const everything = `${prose(renderedPage)} ${faqBlock}`;

    for (const claim of [
      "Personne ne connaît le volume réel",
      "a déjà financé beaucoup de projets décevants",
      "la plupart des dossiers présentés en comité",
      "l’erreur la plus fréquente des tableaux de priorisation",
      "L’erreur de budget la plus commune",
      "rend positifs les dossiers qui ne le sont pas",
      "aucun flux ne saura écrire",
      "presque toujours le mauvais premier essai",
      "qu’aucun comparatif ne reprend",
    ]) {
      expect(everything, claim).not.toContain(claim);
    }
    // Et aucun quantificateur de fréquence ne revient par une autre porte.
    for (const pattern of [
      /la plupart des (?:dossiers|entreprises|projets|équipes)/i,
      /l[’']erreur la plus (?:fréquente|commune|répandue)/i,
      /dans (?:la|notre) (?:plupart|majorité) des cas/i,
      /nous (?:constatons|observons|voyons souvent)/i,
    ]) {
      expect(everything, pattern.source).not.toMatch(pattern);
    }
  });

  it("casse le gabarit « A, pas B » et les titres tout en négation", () => {
    // §9.2 : six titres sur seize suivaient la même symétrie binaire, et
    // quatre encadrés sur cinq s'ouvraient sur une négation.
    const html = articleHtml();
    const headings = [...html.matchAll(/<h[23][^>]*>([\s\S]*?)<\/h[23]>/g)].map(
      (match) => prose(match[1]),
    );

    for (const gone of [
      "Le volume se compte sur douze mois, pas sur une semaine",
      "Le temps actif se chronomètre, il ne se déclare pas",
      "Les quatre jours se mesurent, ils ne se supposent pas",
      "Ce que la plateforme compte n’est pas ce que vous comptez",
      "Un processus qui vient de changer ne se mesure pas",
      "Ne comptez jamais deux fois la même heure",
      "Une question qui ne se rattrape pas après coup",
    ]) {
      expect(prose(renderedPage), gone).not.toContain(gone);
    }

    // Deux titres au plus gardent la construction « A, pas B ».
    const binary = headings.filter((heading) =>
      /,\s*(?:pas|il ne|ils ne|elle ne)\b|\bn’est pas\b/i.test(heading),
    );
    expect(binary, binary.join(" | ")).toHaveLength(0);

    // Le même verbe-charnière ne sert plus trois fois d'affilée.
    const text = prose(html);
    expect((text.match(/tient (?:en|dans) /g) ?? []).length).toBeLessThanOrEqual(
      1,
    );
    expect((text.match(/Appliquons/g) ?? []).length).toBeLessThanOrEqual(1);
    // §12.10 : la triade « plusieurs équipes, plusieurs règles et plusieurs
    // logiciels » vit à un seul endroit, le mémo des sept réponses.
    const triad = /plusieurs équipes, plusieurs règles et plusieurs logiciels/g;
    expect(
      (`${text} ${pageSource}`.match(triad) ?? []).length,
    ).toBeLessThanOrEqual(2);
  });

  it("ne raconte la boucle des 320 commandes qu’à un endroit", () => {
    // §12.10 : une démonstration vit à un endroit canonique. Le chiffrage des
    // 1 280 requêtes appartient à la section 04 ; la section 07 y renvoie.
    const html = articleHtml();
    const section = (id: string) =>
      prose(html.match(new RegExp(`<section id="${id}"[\\s\\S]*?</section>`))?.[0] ?? "");

    expect(section("facture")).toContain("1 280 requêtes");
    expect(section("facture")).toContain("5 120 requêtes");
    expect(section("incidents")).not.toContain("1 280 requêtes");
    expect(section("incidents")).toContain("la boucle chiffrée en section 04");
  });

  it("ne réintroduit pas la métaphore propriétaire des « portes »", () => {
    // La version auditée nommait « cinq portes non compensatoires » un
    // filtre que le lecteur devait apprendre avant d'apprendre le sujet.
    // Le contrôle porte sur le corps et sur la FAQ écrite dans ce fichier :
    // le gabarit partagé n'appartient pas à ce guide.
    const faqBlock =
      pageSource.match(
        /const faqCategories: GuidePremiumFaqCategory\[\] = \[([\s\S]*?)\n\];/,
      )?.[1] ?? "";
    const visible = `${prose(articleHtml())} ${faqBlock}`;
    // « porte » au singulier reste un verbe légitime — « la balance âgée porte
    // une ligne par facture ». C'est le pluriel métaphorique qui est banni.
    expect(visible).not.toMatch(/\bportes\b/i);
    expect(visible).not.toMatch(/porte (?:bloquante|non compensatoire)/i);
    expect(visible).not.toContain("non compensatoire");
    // La légende du tableau est `md:sr-only` : le script de mesure la retire
    // de l'article, donc le contrôle porte sur la page rendue.
    expect(prose(renderedPage)).toContain(
      "Cinq questions qui ne se compensent pas",
    );
  });

  it("ne pointe que vers des guides publiés, jamais vers lui-même", () => {
    const published = new Set(PUBLISHED_GUIDES.map((item) => item.slug));
    const targets = [
      ...pageSource.matchAll(
        /(?:href|ctaHref|primaryCtaHref)\s*[:=]\s*"\/guides\/([a-z0-9-]+)"/g,
      ),
    ].map((match) => match[1]);

    expect(targets.length).toBeGreaterThanOrEqual(6);
    for (const target of targets) {
      expect(published.has(target), target).toBe(true);
      expect(target).not.toBe(guide.slug);
    }
    expect(new Set(targets).size).toBeGreaterThanOrEqual(5);
    expect(pageSource).toContain(
      'primaryCtaHref: "/services/outils-internes-sur-mesure"',
    );
  });

  it("garde le calculateur local, hors temps de lecture et sans persistance", () => {
    expect(pageSource).toContain("<ProcessPriorityTool />");
    expect(toolSource).toContain('data-read-time-exclude="true"');
    expect(toolSource).not.toMatch(/localStorage|sessionStorage|indexedDB/);
    expect(toolSource).not.toMatch(/fetch\(|<form|action=/);
    expect(toolSource).toContain("export const INITIAL_INPUTS");
    // Le premier écran montre un calcul résolu, pas une décision bloquée.
    expect(renderedPage).not.toContain("Pas encore prêt pour un essai");
    expect(renderedPage).toContain("À simplifier, reporter ou traiter autrement");
  });

  it("garde le vocabulaire de production hors du texte visible", () => {
    const visibleText = readerVisibleText(renderedPage);
    for (const marker of [
      /\bpasse\s+[1-4]\b/iu,
      /à\s+sourcer/iu,
      /\bno_go\b/iu,
      /\bgate\b/iu,
      /\bhash\b/iu,
      /\b(?:case|model)[-_][a-z0-9-]+\b/iu,
    ]) {
      expect(visibleText, marker.source).not.toMatch(marker);
    }
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

    const h2Texts = [...articleHtml().matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g)]
      .map((match) => readerVisibleText(match[1]).toLowerCase())
      .filter(Boolean);
    for (const question of questions) {
      expect(question.trim().endsWith("?"), question).toBe(true);
      expect(h2Texts, question).not.toContain(question.trim().toLowerCase());
    }

    // §9.2 : la symétrie binaire « Oui, … » / « Non. … » est un tic.
    const binaryOpeners = answers.filter((answer) =>
      /^(?:Non|Oui)\b/.test(answer),
    ).length;
    expect(binaryOpeners / answers.length).toBeLessThanOrEqual(0.34);
    for (const answer of answers) {
      const words = answer.split(/\s+/).filter(Boolean).length;
      expect(words, answer.slice(0, 50)).toBeGreaterThanOrEqual(40);
      expect(words, answer.slice(0, 50)).toBeLessThanOrEqual(120);
    }
  });

  it("traite explicitement la requête cible", () => {
    const text = prose(articleHtml()).toLowerCase();
    expect(text).toContain("premier essai");
    expect((text.match(/processus/g) ?? []).length).toBeGreaterThanOrEqual(12);
    expect((text.match(/automatis/g) ?? []).length).toBeGreaterThanOrEqual(8);
    expect((text.match(/flux/g) ?? []).length).toBeGreaterThanOrEqual(20);
  });
});
