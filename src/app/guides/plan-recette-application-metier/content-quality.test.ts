import { existsSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { getGuide, PUBLISHED_GUIDES } from "@/lib/guides";
import Page, { metadata } from "./page";
import { acceptanceGates, campaignFactFields } from "./acceptance-readiness";

const slugDirectory = dirname(fileURLToPath(import.meta.url));
const repositoryRoot = resolve(slugDirectory, "../../../..");
const publicDirectory = resolve(
  repositoryRoot,
  "public/guides/plan-recette-application-metier",
);

const pageSource = readFileSync(resolve(slugDirectory, "page.tsx"), "utf8");
const ogSource = readFileSync(
  resolve(slugDirectory, "opengraph-image.tsx"),
  "utf8",
);
const logicSource = readFileSync(
  resolve(slugDirectory, "acceptance-readiness.ts"),
  "utf8",
);
const toolSource = readFileSync(
  resolve(slugDirectory, "acceptance-readiness-tool.tsx"),
  "utf8",
);
const svgPaths = [
  resolve(publicDirectory, "recette-preuve-16x9.svg"),
  resolve(publicDirectory, "recette-preuve-4x3.svg"),
  resolve(publicDirectory, "recette-preuve-1x1.svg"),
];
const webpPaths = [
  resolve(publicDirectory, "recette-preuve-16x9.webp"),
  resolve(publicDirectory, "recette-preuve-4x3.webp"),
  resolve(publicDirectory, "recette-preuve-1x1.webp"),
];
const svgSources = svgPaths.map((file) => readFileSync(file, "utf8"));

const guide = getGuide("plan-recette-application-metier");
const renderedPage = renderToStaticMarkup(Page());
const structuredData = [
  ...renderedPage.matchAll(
    /<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g,
  ),
].map((match) => JSON.parse(match[1]) as Record<string, unknown>);

/**
 * Retire du corps les blocs exclus du temps de lecture.
 *
 * L'atelier de la section 07 porte `data-read-time-exclude`, comme le veut la
 * convention de `scripts/measure-guide-readtime.mjs` : c'est un formulaire, pas
 * de la prose. Le calibre et la densité de chiffres se mesurent donc sur le
 * texte réellement lu.
 */
function removeReadTimeExcludedElements(html: string) {
  const openingElement =
    /<([a-z][a-z0-9-]*)\b[^>]*\bdata-read-time-exclude=["']true["'][^>]*>/gi;
  let cursor = 0;
  let output = "";

  for (
    let opening = openingElement.exec(html);
    opening;
    opening = openingElement.exec(html)
  ) {
    output += html.slice(cursor, opening.index);
    const tagName = opening[1];
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
    readerVisibleText(articleHtml()).match(
      /[\p{L}\p{N}]+(?:[’'\-][\p{L}\p{N}]+)*/gu,
    )?.length ?? 0
  );
}

/**
 * Texte lisible en conservant les espaces insécables.
 *
 * `readerVisibleText` ramène tout blanc à une espace ordinaire — U+00A0 fait
 * partie de `\s` — ce qui rendrait tout contrôle typographique aveugle.
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
    .replace(/&(?:rsquo|apos|#x27);/gi, "’")
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

/** Corps sans les tableaux ni les blocs de formule : la prose seule. */
function proseOnlyHtml() {
  return articleHtml()
    .replace(/<table[\s\S]*?<\/table>/g, " ")
    .replace(/<pre[\s\S]*?<\/pre>/g, " ");
}

const euro = (value: number) =>
  new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 0 })
    .format(Math.round(value))
    .replace(/[\u00a0\u202f]/g, " ");

const oneDecimal = (value: number) => Math.round(value * 10) / 10;

describe("qualité éditoriale du guide plan de recette", () => {
  /* ──────────────────────────────────────────────
     Calibre, structure et registre
     ────────────────────────────────────────────── */

  it("tient la bande « méthode / parcours » de 3 000 à 4 200 mots", () => {
    // §5.3 du protocole. Le guide décrit un parcours complet — compter les cas,
    // chiffrer les jours, écrire les seuils, choisir les données, mesurer,
    // décider — ce qui est la bande « Méthode / parcours ». Aucune
    // requalification n'est nécessaire : la mesure ci-dessous reste dans la
    // bande, atelier interactif exclu comme le veut la convention de temps de
    // lecture du dépôt.
    const words = articleWordCount();
    expect(words).toBeGreaterThanOrEqual(3000);
    expect(words).toBeLessThanOrEqual(4200);
  });

  it("aligne le temps de lecture du registre sur la longueur mesurée", () => {
    // Convention du dépôt (docs/charte-qualite-guides.md §14.1) : mots visibles
    // du corps divisés par 200, arrondis à la minute. Le registre portait
    // encore `readTimeMin: 16`, hérité de la version précédente, soit quatre
    // minutes de moins que la version tenue ici. Ce test échoue si l'un des
    // deux bouge sans l'autre.
    const measured = Math.max(1, Math.round(articleWordCount() / 200));
    expect(measured).toBe(guide.readTimeMin);
    // Le hero n'affiche pas la durée : les cinq repères qu'il porte disent
    // mieux ce que le lecteur va y trouver.
    expect(pageSource).not.toContain("guide.readTimeMin");
  });

  it("fait tenir la somme des minutes de section dans le temps publié", () => {
    // Ajout du 30/08/2026. Le registre, le hub et les huit compteurs de section
    // affichaient trois durées différentes : 20 min publiées, 24 min cumulées
    // en tête de section, 22 min réellement lues. Rien ne les reliait.
    //
    // La mesure qui fait autorité est celle de l'article rendu, produite par
    // `npx tsx scripts/measure-guide-readtime.mjs --check <slug>` : 4 140 mots,
    // soit 21 min. Chaque section est arrondie séparément à 200 mots/minute,
    // et la somme des huit arrondis doit retomber sur ce total.
    const sectionMinutes = [
      ...pageSource.matchAll(/readingTime="(\d+) min"/g),
    ].map((match) => Number(match[1]));

    expect(sectionMinutes).toHaveLength(8);
    expect(sectionMinutes.reduce((sum, minutes) => sum + minutes, 0)).toBe(
      guide.readTimeMin,
    );
    // Aucune section ne peut annoncer une durée qui s'écarte de plus d'une
    // minute de sa propre longueur.
    const sections = [
      ...articleHtml().matchAll(/<section id="[a-z]+"[\s\S]*?<\/section>/g),
    ].map((match) => match[0]);
    expect(sections).toHaveLength(8);
    sections.forEach((section, index) => {
      const words =
        readerVisibleText(section).match(
          /[\p{L}\p{N}]+(?:[’'\-][\p{L}\p{N}]+)*/gu,
        )?.length ?? 0;
      const measured = Math.max(1, Math.round(words / 200));
      expect(
        Math.abs(measured - sectionMinutes[index]),
        `section ${index + 1} : ${words} mots, ${sectionMinutes[index]} min annoncées`,
      ).toBeLessThanOrEqual(1);
    });
  });

  it("garde le titre, le H1 visible et le headline structuré identiques", () => {
    const expectedHeadline =
      "Plan de recette d’une application métier : prouver avant d’accepter";
    const h1Text = readerVisibleText(
      renderedPage.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1] ?? "",
    );

    expect(guide.heroTitle).toBe(expectedHeadline);
    expect(h1Text).toBe(expectedHeadline);
    expect(structuredData[0]).toMatchObject({ headline: expectedHeadline });
    expect(pageSource).toContain(
      'heroTitle="Plan de recette d’une application métier :"',
    );
    expect(pageSource).toContain('heroTitleEm="prouver avant"');
    expect(pageSource).toContain('heroTitleSuffix="d’accepter"');
    expect(ogSource).toContain(
      'title: "Plan de recette d’une application métier"',
    );
  });

  it("ne répète jamais le H1 dans un H2 de l’article", () => {
    const h2Texts = [...articleHtml().matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g)]
      .map((match) => readerVisibleText(match[1]).toLowerCase())
      .filter(Boolean);

    expect(h2Texts.length).toBe(8);
    for (const h2 of h2Texts) {
      expect(h2, h2).not.toContain("plan de recette d’une application métier");
      expect(h2, h2).not.toContain("prouver avant d’accepter");
    }
  });

  it("garde 40 à 60 % de H2 en question", () => {
    const h2Texts = [...articleHtml().matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g)]
      .map((match) => readerVisibleText(match[1]))
      .filter(Boolean);
    const interrogatives = h2Texts.filter((text) => text.endsWith("?")).length;
    const share = interrogatives / h2Texts.length;

    expect(share, `${interrogatives}/${h2Texts.length}`).toBeGreaterThanOrEqual(
      0.4,
    );
    expect(share).toBeLessThanOrEqual(0.6);
  });

  it("ne dépasse pas quatre tableaux éditoriaux, tous chiffrés", () => {
    // §6.5 : maximum 4 tableaux. La version auditée en portait 7, dont trois
    // ne contenaient aucun chiffre — c'étaient des listes déguisées.
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

  it("tient plus de dix valeurs chiffrées pour mille mots dans la prose", () => {
    // §6.2. Mesure sur la prose seule : tableaux et blocs de formule exclus,
    // millésimes et numéros de téléphone retirés. La version auditée tombait à
    // moins de la moitié de ce seuil une fois ses tableaux retirés.
    //
    // Correction du 30/08/2026 : le compteur gonflait la densité annoncée en
    // comptant ce que §6.2 exclut — les numéros de section rendus (« § 01 »),
    // les durées de lecture (« 2 min ») et les renvois « section 03 » en prose.
    // Le contre-audit a chiffré l'écart : 41,2 annoncés pour 35,6 réels. Les
    // trois familles sont retirées avant comptage ; le plancher ne bouge pas.
    const text = prose(proseOnlyHtml())
      .replace(/§ \d+/g, " ")
      .replace(/\b\d+ min\b/g, " ")
      .replace(/\bsections? \d+/gi, " ")
      .replace(/\b20\d\d\b/g, " ")
      .replace(/0\d(?: \d\d){4}/g, " ");
    const values = text.match(/\d+(?:[,.]\d+)?(?: \d{3})*/g) ?? [];
    const words =
      readerVisibleText(proseOnlyHtml()).match(
        /[\p{L}\p{N}]+(?:[’'\-][\p{L}\p{N}]+)*/gu,
      )?.length ?? 0;
    const density = (values.length / words) * 1000;

    expect(density, `${values.length} valeurs pour ${words} mots`)
      .toBeGreaterThanOrEqual(10);
  });

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

    // §6.5 impose 120 à 180 mots. Le plafond de 200 admis jusqu'ici était un
    // trou du filet relevé au contre-audit : il laissait passer une réponse
    // directe hors calibre. Mesure du jour : 176 mots.
    expect(words).toBeGreaterThanOrEqual(120);
    expect(words).toBeLessThanOrEqual(180);
    const text = prose(answer ?? "");
    expect(text).toContain("56 cas");
    expect(text).toContain("6,2 jours");
    expect(text).toContain("2 170 €");
    expect(text).toContain("25 000 € hors taxes");
  });

  /* ──────────────────────────────────────────────
     Typographie française (§9.3)
     ────────────────────────────────────────────── */

  it("n’écrit aucun insécable littéral dans le code", () => {
    // Un U+00A0 tapé dans une chaîne est invisible en relecture et se perd en
    // silence dès que le fichier transite par un heredoc ou une réécriture.
    for (const [name, source] of [
      ["page.tsx", pageSource],
      ["acceptance-readiness.ts", logicSource],
      ["acceptance-readiness-tool.tsx", toolSource],
    ] as const) {
      expect(/[\u00a0\u202f\u2009]/.test(source), name).toBe(false);
    }
  });

  it("pose un insécable avant chaque ponctuation double du corps", () => {
    const text = typographicText(articleHtml());
    const offenders = [...text.matchAll(/.{0,40}[^\s] [?!;»].{0,20}/g)].map(
      (match) => match[0],
    );

    expect(offenders, offenders.join("\n")).toHaveLength(0);
  });

  it("pose un insécable avant les deux-points de la prose", () => {
    // Ajout du 30/08/2026 : le contrôle ci-dessus teste `[?!;»]` mais pas les
    // deux-points, alors que la prose de ce guide en est pleine — une
    // régression y serait passée inaperçue. La mesure porte sur la prose seule
    // parce que les deux blocs `<pre>` sont des gabarits à recopier dans un
    // document : leurs deux-points s'y écrivent avec une espace ordinaire.
    const text = typographicText(proseOnlyHtml());
    const offenders = [...text.matchAll(/.{0,40}[^\s] :.{0,20}/g)].map(
      (match) => match[0],
    );

    expect(offenders, offenders.join("\n")).toHaveLength(0);
  });

  it("colle les nombres à leur unité et sépare les milliers", () => {
    const text = typographicText(articleHtml());

    expect([...text.matchAll(/\d €/g)].map((m) => m[0])).toHaveLength(0);
    expect([...text.matchAll(/\d %/g)].map((m) => m[0])).toHaveLength(0);
    // Les seuls nombres de quatre chiffres ou plus admis sont les millésimes et
    // les numéros de normes ISO cités tels qu'ils s'écrivent.
    const glued = [...text.matchAll(/\b\d{4,}\b/g)]
      .map((m) => m[0])
      .filter((value) => !/^(?:20\d\d|29119|25010)$/.test(value));
    expect(glued, glued.join(", ")).toHaveLength(0);
  });

  it("n’emploie que des apostrophes courbes et des guillemets français", () => {
    const text = typographicText(articleHtml());
    expect(text).not.toMatch(/[a-zàâäéèêëîïôöùûüç]'[a-zàâäéèêëîïôöùûüç]/i);
    expect(text).not.toContain('"');
    expect(text).toContain("«\u00a0L’application doit être rapide.\u00a0»");
  });

  /* ──────────────────────────────────────────────
     Arithmétique : recalcul par une méthode différente (§7.1)
     ────────────────────────────────────────────── */

  it("recalcule le budget de la campagne cas par cas, pas par multiplication", () => {
    // Le guide multiplie 56 × 15 min. Le contrôle empile les cas un à un, en
    // secondes, puis convertit : une erreur de facteur ne peut pas se propager
    // du corps au vérificateur.
    const cases = 56;
    const writeSeconds = 15 * 60;
    const runSeconds = 10 * 60;
    const replaySeconds = 5 * 60;
    const touchedPerCycle = Math.round(cases * 0.3);
    const cycles = 2;

    let total = 0;
    for (let index = 0; index < cases; index += 1) {
      total += writeSeconds + runSeconds;
    }
    for (let cycle = 0; cycle < cycles; cycle += 1) {
      for (let index = 0; index < touchedPerCycle; index += 1) {
        total += replaySeconds;
      }
    }

    expect(touchedPerCycle).toBe(17);
    expect(total / 60).toBe(1570);
    const hours = Math.floor(total / 3600);
    const minutes = Math.round((total % 3600) / 60);
    expect(`${hours} h ${minutes}`).toBe("26 h 10");

    const executionDays = oneDecimal(total / 3600 / 7);
    expect(executionDays).toBe(3.7);
    const totalDays = oneDecimal(executionDays + 1.5 + 0.5 + 0.5);
    expect(totalDays).toBe(6.2);
    const internalCost = totalDays * 350;
    expect(euro(internalCost)).toBe("2 170");
    expect(oneDecimal((internalCost / 25000) * 100)).toBe(8.7);

    // L'écart d'arrondi ne dort plus dans une tolérance de test : la page le
    // publie. Le contre-audit avait relevé que le guide arrondissait 3,7381 j
    // à 3,7 avant de multiplier, sans le dire, et que seul le test absorbait la
    // différence. Constante refaite à la main :
    //   1 570 min ÷ 60 = 26,1666… h ; ÷ 7 = 3,73809… j
    //   3,73809… + 2,5 = 6,23809… j ; × 350 € = 2 183,33 €
    //   2 183,33 − 2 170 = 13,33 € — les « treize euros » écrits au guide
    const unrounded = (total / 3600 / 7 + 2.5) * 350;
    expect(euro(unrounded)).toBe("2 183");
    expect(Math.round(unrounded - internalCost)).toBe(13);

    const text = prose(articleHtml());
    expect(text).toContain("840 min, soit 14 h");
    expect(text).toContain("560 min, soit 9 h 20");
    expect(text).toContain("170 min, soit 2 h 50");
    expect(text).toContain("6,2 jours, soit 2 170 €");
    expect(text).toContain("8,7 % du budget");
    expect(text).toContain("3,74 jours, le total 6,24 jours et le coût 2 183 €");
    expect(text).toContain("treize euros de plus que la ligne affichée");
  });

  it("recalcule la sensibilité annoncée sur le temps d’écriture", () => {
    const budgetDays = (writeMinutes: number) => {
      const minutes = 56 * writeMinutes + 56 * 10 + 2 * 17 * 5;
      return oneDecimal(oneDecimal(minutes / 60 / 7) + 2.5);
    };

    expect(budgetDays(8)).toBe(5.3);
    expect(budgetDays(25)).toBe(7.6);
    expect(budgetDays(15)).toBe(6.2);
    expect(prose(articleHtml())).toContain("de 5,3 à 7,6 jours");
  });

  it("recalcule le rejeu de la campagne suivante", () => {
    let seconds = 0;
    for (let index = 0; index < 56; index += 1) seconds += 5 * 60;
    expect(seconds / 60).toBe(280);
    expect(
      `${Math.floor(seconds / 3600)} h ${Math.round((seconds % 3600) / 60)}`,
    ).toBe("4 h 40");
    const text = prose(articleHtml());
    expect(text).toContain("4 h 40 contre 26 h 10");
    expect(text).toContain("4 h 40 de rejeu au lieu de 26 h 10");
  });

  it("recalcule le décompte des 56 cas ligne à ligne", () => {
    const lines = [
      { source: "parcours", count: 6 },
      { source: "règles", count: 19 + 11 },
      { source: "droits", count: 7 },
      { source: "flux", count: 3 * 3 },
      { source: "reprise", count: 4 },
    ];
    const total = lines.reduce((sum, line) => sum + line.count, 0);
    expect(total).toBe(56);

    const text = prose(articleHtml());
    expect(text).toContain("6 parcours → 6 cas");
    expect(text).toContain("19 règles, dont 11 à seuil → 30 cas");
    expect(text).toContain("4 rôles, 7 actions interdites → 7 cas");
    expect(text).toContain("3 flux × 3 → 9 cas");
    expect(text).toContain("4 points de coupure → 4 cas");
    expect(text).toContain(
      "Six plus trente, plus sept, plus neuf, plus quatre : 56 cas",
    );
  });

  it("recalcule le seuil de 2 % du CCAG-TIC minute par minute", () => {
    // Le guide pose 22 × 10 h. Le contrôle empile les journées ouvrées et les
    // minutes de la fenêtre d'ouverture, puis applique le taux.
    //
    // Constantes refaites à la main, étape par étape :
    //   22 j × 10 h × 60 min = 13 200 min
    //   13 200 × 2 %         = 264 min
    //   264 ÷ 60             = 4 h reste 24 min → 4 h 24
    //   plancher de la fourchette, mois à deux fériés ouvrés :
    //   18 j × 600 min = 10 800 min ; × 2 % = 216 min → 3 h 36
    let minutes = 0;
    for (let workingDay = 0; workingDay < 22; workingDay += 1) {
      for (let hour = 8; hour < 18; hour += 1) minutes += 60;
    }
    expect(minutes).toBe(13200);
    const tolerated = minutes * 0.02;
    expect(tolerated).toBe(264);
    expect(
      `${Math.floor(tolerated / 60)} h ${Math.round(tolerated % 60)}`,
    ).toBe("4 h 24");

    const text = prose(articleHtml());
    expect(text).toContain("22 × 10 = 220 heures");
    expect(text).toContain("13 200 minutes");
    expect(text).toContain("264 minutes");
    expect(text).toContain("4 h 24");
    expect(text).toContain("toutes les 60 secondes");
    // Le contre-audit a relevé que 22 jours ouvrés est le maximum d'une fenêtre
    // de trente jours, jamais le cas général : 22 j quatre fois sur sept, 21 j
    // deux fois, 20 j une fois, fériés encore à déduire. Un chiffre proposé en
    // copier-coller contractuel doit donc annoncer sa borne haute et sa borne
    // basse, et la règle qui les produit toutes les deux.
    expect(text).toContain("Au maximum, donc");
    expect(text).toContain("3 h 36");
    expect(text).toContain("12 minutes par jour ouvré");
    // 18 j × 600 min × 2 % = 216 min = 3 h 36 : la borne basse est vérifiable.
    expect(18 * 600 * 0.02).toBe(216);
    expect(`${Math.floor(216 / 60)} h ${216 % 60}`).toBe("3 h 36");
  });

  it("recalcule les deux mesures de fin de campagne", () => {
    const coverage = (19 / (19 + 7)) * 100;
    expect(Math.round(coverage)).toBe(73);
    const escaped = (8 / (37 + 8)) * 100;
    expect(oneDecimal(escaped)).toBe(17.8);

    const text = prose(articleHtml());
    expect(text).toContain("19 ÷ 26 = 73 %");
    expect(text).toContain("8 ÷ (37 + 8) = 17,8 %");
    expect(text).toContain("la couverture tombe à 73 %");
    expect(text).toContain("Il n’existe pas de seuil de référence publiable");
  });

  it("recalcule le volume du jeu d’essai contre un mois réel", () => {
    // Correction du 30/08/2026. Ce test vérifiait 40 ÷ 340 = 11,8 % alors qu'il
    // exigeait dans la ligne suivante que 7 × 4 fasse 28 : il verrouillait le
    // défaut relevé au contre-audit, un jeu d'essai de 40 dossiers qui ne sort
    // d'aucun calcul du guide. La méthode enseignée en section 05 donne
    // 7 types × 4 modes = 28 croisements, et c'est ce 28 que la page retient.
    //
    // Constante refaite à la main, étape par étape :
    //   28 ÷ 340        = 0,0823529…
    //   × 100           = 8,23529… %
    //   arrondi au dixième → 8,2 %
    const caseTypes = 7;
    const billingModes = 4;
    expect(caseTypes * billingModes).toBe(28);
    expect(oneDecimal((28 / 340) * 100)).toBe(8.2);

    const text = prose(articleHtml());
    expect(text).toContain("8,2 % d’un mois réel à 340 factures");
    expect(text).toContain("sept dossiers suffisent si vous les combinez");
    expect(text).toContain("vingt-huit s’il faut jouer chaque croisement");
    expect(text).toContain("7 × 4 = 28 dossiers");
    // Le nombre non dérivé de la version auditée ne doit pas revenir.
    expect(text).not.toContain("40 dossiers");
  });

  /* ──────────────────────────────────────────────
     Ce qui rate, à conséquences chiffrées (§6.5)
     ────────────────────────────────────────────── */

  it("raconte trois incidents portant chacun un montant ou un volume", () => {
    const incidents = articleHtml().match(
      /<section id="incidents"[\s\S]*?<\/section>/,
    )?.[0];
    expect(incidents).toBeDefined();
    const headings = [
      ...(incidents ?? "").matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>/g),
    ].map((match) => prose(match[1]));

    expect(headings.length).toBeGreaterThanOrEqual(3);
    for (const heading of headings) {
      expect(heading, heading).toMatch(/\d/);
    }

    // Arithmétique des incidents, refaite ici.
    const impactedInvoices = Math.round(340 * 0.12);
    expect(impactedInvoices).toBe(41);
    expect(impactedInvoices * 34 * 3).toBe(4182);
    expect(impactedInvoices * 3).toBe(123);
    expect(2 * 350).toBe(700);
    expect(56 - 33).toBe(23);
    expect(1.5 * 350).toBe(525);

    const text = prose(incidents ?? "");
    for (const fact of [
      "41 × 34 × 3 font 4 182 €",
      "123 factures",
      "700 € de temps interne",
      "23 cas sur 56",
      "525 €",
      "7 500 €",
    ]) {
      expect(text, fact).toContain(fact);
    }
  });

  /* ──────────────────────────────────────────────
     Sources, périmètre juridique et zéro invention
     ────────────────────────────────────────────── */

  it("cite le CCAG-TIC avec ses délais réels et son périmètre", () => {
    const text = prose(articleHtml());
    for (const fact of [
      "arrêté du 30 mars 2021",
      "article 32",
      "vérification d’aptitude",
      "vérification de service régulier",
      "trente jours",
      "de 8 h à 18 h, du lundi au vendredi, jours fériés exclus",
      "article 33",
      "les prestations sont réputées admises",
      "imputables à chaque élément de matériel",
    ]) {
      expect(text, fact).toContain(fact);
    }
    // Le texte ne s'applique pas à tous les contrats : la réserve est écrite.
    expect(text).toContain(
      "qui ne s’applique qu’aux marchés qui s’y réfèrent",
    );
    expect(pageSource).toContain(
      "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000043310689",
    );
  });

  it("garde les références primaires et leur portée", () => {
    for (const reference of [
      "ISTQB_CTFL_Syllabus_v4.0.1.pdf",
      "https://www.iso.org/standard/79429.html",
      "https://www.iso.org/standard/78176.html",
      "https://www.cnil.fr/fr/tester-vos-applications",
      "https://www.cnil.fr/fr/securite-encadrer-les-developpements-informatiques",
      "https://www.w3.org/WAI/test-evaluate/",
      "www-project-application-security-verification-standard",
      "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000038811937/",
    ]) {
      expect(pageSource, reference).toContain(reference);
    }
    expect(pageSource).toContain(
      "Référence pédagogique, pas certification du projet",
    );
    expect(pageSource).toContain(
      "Aucun champ détaillé non public n’est attribué à la norme",
    );
  });

  it("cadre l’accessibilité sans vendre un audit inutile", () => {
    const text = prose(articleHtml());
    expect(text).toContain("250 millions d’euros");
    expect(text).toContain("28 juin 2025");
    expect(text).toContain("ne commandez pas d’audit de conformité");
    expect(text).toContain(
      "aucun outil automatique ne détermine seul la conformité",
    );
    // Le régime de sanction a changé : la page ne cite aucun montant d'amende.
    expect(text).not.toMatch(/amende/i);
  });

  it("annonce son cas comme construit et nomme des métiers", () => {
    // Correction du 30/08/2026. Ce test exigeait l'étiquette « Exemple
    // construit à partir des fourchettes citées dans ce guide », qui est
    // littéralement fausse : aucune fourchette publiée dans ce guide ne donne
    // les 340 factures, les 19 règles, les 15/10/5 minutes ni les 350 € du jour
    // chargé — ces valeurs sont posées pour l'exemple. Un test ne peut pas
    // verrouiller une phrase que la page ne peut pas tenir. L'exigence est donc
    // relevée, pas abaissée : la page doit dire lesquelles de ses valeurs ne
    // viennent d'aucune source, et laquelle vient de la grille publiée.
    const text = prose(articleHtml());
    expect(text).toContain(
      "Exemple construit : les volumes, les durées et le coût du jour chargé " +
        "sont choisis pour l’exemple et ne viennent d’aucune source ; seul le " +
        "montant du projet est repris de la grille de prix de ce site. " +
        "Ce n’est pas un dossier client.",
    );
    expect(text).toContain("ce ne sont pas des dossiers clients");
    // §6.2 : la levée d'ambiguïté précède les chiffres. Le hero et la
    // description sociale portent des mesures ; ils portent donc la réserve.
    expect(pageSource).toContain(
      "dont les volumes sont choisis pour l’exemple\\u00a0— jamais d’un dossier client.",
    );
    expect(guide.metaDescription).toContain("calculée sur un cas construit");

    for (const job of [
      "responsable facturation",
      "directeur d’exploitation",
      "contrôleuse de gestion",
      "développeur",
      "comptable",
      "exploitant",
      "expert-comptable",
      "testeur",
    ]) {
      expect(text, job).toContain(job);
    }
    // §6.4 : ces mots ne sont pas des personnes.
    expect(text).not.toMatch(/\b(?:le|un|les|des) prestataires?\b/i);
    expect(text).not.toMatch(/\b(?:le|un|les|des) intervenants?\b/i);
  });

  it("ne laisse passer aucune fausse certitude ni faux vécu", () => {
    const publicCopy = [pageSource, ogSource, logicSource, toolSource]
      .concat(svgSources)
      .join("\n");

    for (const pattern of [
      /\bnotre client\b/i,
      /\bchez un client\b/i,
      /\bcas client\b/i,
      /\bnous garantissons\b/i,
      /\bnous avons livré\b/i,
      /\bzéro risque\b/i,
      /\bconforme RGPD\b/i,
      /\bcertifié ISTQB\b/i,
      /\b100\s*%\b/,
      /\btransformation digitale\b/i,
    ]) {
      expect(publicCopy, pattern.source).not.toMatch(pattern);
    }
  });

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
      "plongeons",
      "Dans un monde où",
    ]) {
      expect(text, tic).not.toContain(tic);
    }
  });

  /* ──────────────────────────────────────────────
     Conversion et conflit d’intérêts (§8.1 A6)
     ────────────────────────────────────────────── */

  it("ne porte qu’un bloc de transparence et qu’un appel à l’action en ligne", () => {
    const text = prose(articleHtml());
    expect((text.match(/Transparence\./g) ?? []).length).toBe(1);
    expect(text).toContain(
      "Hagnéré Code développe des applications métier sur mesure et perçoit des honoraires",
    );
    expect(text).toContain("relus le 28 août 2026");
    expect(text).toContain("à revérifier tous les douze mois");
    expect(text).toContain("seul un devis signé engage");
    expect((pageSource.match(/<TrackedGuideCtaLink/g) ?? []).length).toBe(1);
  });

  it("garde intact le passage qui ne sert pas le commerce", () => {
    const text = prose(articleHtml());
    expect(text).toContain(
      "En dessous d’un certain budget, cette campagne est une erreur",
    );
    expect(text).toContain("un quart du développement");
    expect(text).toContain("ils ne sont pas vendus, ils sont à vous");
    expect(pageSource).not.toMatch(/score sur 100|algorithme propriétaire/i);
  });

  it("ne pointe que vers des guides publiés et une page de service", () => {
    const published = new Set(PUBLISHED_GUIDES.map((entry) => entry.slug));
    const guideTargets = [
      ...pageSource.matchAll(
        /(?:href|ctaHref|primaryCtaHref)\s*[:=]\s*"\/guides\/([a-z0-9-]+)"/g,
      ),
    ].map((match) => match[1]);

    expect(new Set(guideTargets).size).toBeGreaterThanOrEqual(3);
    for (const target of guideTargets) {
      expect(published.has(target), target).toBe(true);
      expect(target).not.toBe(guide.slug);
    }
    expect(pageSource).toContain('primaryCtaHref: "/services/saas-applications-metier"');
    expect(pageSource).toContain('href="/services/maintenance-evolution"');
  });

  /* ──────────────────────────────────────────────
     Registre, metadata et données structurées
     ────────────────────────────────────────────── */

  it("publie le guide par le registre central", () => {
    expect(guide.editorialStatus).toBe("published");
    expect(PUBLISHED_GUIDES.some((entry) => entry.slug === guide.slug)).toBe(
      true,
    );
    expect(metadata.robots).toMatchObject({ index: false, follow: false });
    expect(metadata.alternates?.canonical).toBe(
      "https://hagnere-code.ai/guides/plan-recette-application-metier",
    );
    expect(guide.metaDescription.length).toBeLessThanOrEqual(155);
    expect(guide.title.length).toBeLessThanOrEqual(60);
  });

  it("n’émet que les données structurées Article et BreadcrumbList", () => {
    expect(structuredData.map((item) => item["@type"])).toEqual([
      "Article",
      "BreadcrumbList",
    ]);
    expect(structuredData[0]).toMatchObject({
      datePublished: guide.datePublished,
      dateModified: guide.dateModified,
    });
    expect(JSON.stringify(structuredData)).not.toMatch(
      /\b(?:FAQPage|HowTo|Offer|Review|AggregateRating|Product|wordCount)\b/,
    );
  });

  /* ──────────────────────────────────────────────
     FAQ
     ────────────────────────────────────────────── */

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
    // §9.2 : la symétrie binaire « Oui… / Non… » ne porte pas la FAQ.
    const binaryOpeners = answers.filter((answer) =>
      /^(?:Non|Oui)\b/.test(answer),
    ).length;
    expect(binaryOpeners / answers.length).toBeLessThanOrEqual(0.34);
  });

  /* ──────────────────────────────────────────────
     Atelier local
     ────────────────────────────────────────────── */

  it("garde l’atelier local, bloquant et sans persistance", () => {
    expect(acceptanceGates).toHaveLength(8);
    expect(campaignFactFields).toHaveLength(10);
    expect(prose(articleHtml())).toContain(
      "huit points de relecture, dix compteurs de campagne, sept issues",
    );

    expect(toolSource).toContain('data-read-time-exclude="true"');
    expect(toolSource).not.toMatch(
      /\b(?:fetch|XMLHttpRequest|localStorage|sessionStorage|indexedDB)\b/,
    );
    expect(toolSource).not.toContain('type="text"');
    expect(toolSource).not.toContain("<textarea");
    expect(toolSource).toMatch(/elles ne sont ni\s+envoyées ni\s+enregistrées/);
    expect(toolSource).toContain("N’entrez aucun nom");
    expect(toolSource).toContain("Il ne remplace ni les tests");
    expect(toolSource.match(/\bpy-3\b/g)).toHaveLength(3);
    expect(toolSource).not.toMatch(/\bpy-2(?:\.5)?\b/);

    expect(logicSource).toContain('"CANDIDATE_FOR_ACCEPTANCE"');
    expect(logicSource).toContain("n’accepte pas le logiciel automatiquement");
    for (const guard of [
      "scopeExitAndSpecialistChecks",
      "decisionAuthorityAndContract",
      "failedCases",
      "pendingReservations",
    ]) {
      expect(logicSource).toContain(guard);
    }
  });

  it("traite explicitement la requête cible", () => {
    const text = prose(articleHtml()).toLowerCase();
    expect(text).toContain("plan de recette d’application métier");
    expect((text.match(/recette/g) ?? []).length).toBeGreaterThanOrEqual(12);
    expect(text).toContain("cas de recette");
  });

  it("livre les trois ratios éditoriaux en SVG et en WebP", () => {
    for (const file of [...svgPaths, ...webpPaths]) {
      expect(existsSync(file), file).toBe(true);
    }
    expect(svgSources[0]).toMatch(/viewBox="0 0 1600 900"/);
    expect(svgSources[1]).toMatch(/viewBox="0 0 1200 900"/);
    expect(svgSources[2]).toMatch(/viewBox="0 0 1000 1000"/);
    expect(pageSource).toContain("recette-preuve-16x9.webp");
  });
});
