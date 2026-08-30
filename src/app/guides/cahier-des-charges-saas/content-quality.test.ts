import { existsSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { getGuide, PUBLISHED_GUIDES } from "@/lib/guides";
import { specificationBlocks } from "./saas-specification-engine";
import Page, { metadata } from "./page";

const slugDirectory = dirname(fileURLToPath(import.meta.url));
const repositoryRoot = resolve(slugDirectory, "../../../..");
const publicDirectory = resolve(
  repositoryRoot,
  "public/guides/cahier-des-charges-saas",
);

const pageSource = readFileSync(resolve(slugDirectory, "page.tsx"), "utf8");
const ogSource = readFileSync(
  resolve(slugDirectory, "opengraph-image.tsx"),
  "utf8",
);
const engineSource = readFileSync(
  resolve(slugDirectory, "saas-specification-engine.ts"),
  "utf8",
);
const toolSource = readFileSync(
  resolve(slugDirectory, "saas-specification-tool.tsx"),
  "utf8",
);
/** Grille tarifaire publique : source de vérité des prix maison cités ici. */
const pricingSource = readFileSync(
  resolve(repositoryRoot, "src/components/tarifs/body.ts"),
  "utf8",
);

const svgPaths = [
  resolve(publicDirectory, "cahier-saas-16x9.svg"),
  resolve(publicDirectory, "cahier-saas-4x3.svg"),
  resolve(publicDirectory, "cahier-saas-1x1.svg"),
];
const webpPaths = [
  resolve(publicDirectory, "cahier-saas-16x9.webp"),
  resolve(publicDirectory, "cahier-saas-4x3.webp"),
  resolve(publicDirectory, "cahier-saas-1x1.webp"),
];

const renderedPage = renderToStaticMarkup(Page());
const saasGuide = getGuide("cahier-des-charges-saas");
const structuredData = [
  ...renderedPage.matchAll(
    /<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g,
  ),
].map((match) => JSON.parse(match[1]) as Record<string, unknown>);

/**
 * Retire les éléments marqués `data-read-time-exclude`.
 *
 * L’outil local et le dump Markdown de l’exemple fictif pèsent plusieurs
 * milliers de mots qu’aucun lecteur ne lit en continu : les compter ferait
 * mentir le calibre et le temps de lecture annoncé au registre.
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
 * partie de `\s` —, ce qui rendrait la vérification typographique aveugle.
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
    .replace(/&(?:rsquo|apos|#39);/gi, "’")
    .replace(/&(?:ndash|mdash);/gi, "—")
    .replace(/&euro;/gi, "€")
    .replace(/&quot;/gi, '"')
    .replace(/&[a-z]+;/gi, " ")
    .replace(/[ \t\r\n]+/g, " ")
    .trim();
}

/** Texte lisible, insécables ramenés à des espaces ordinaires. */
function prose(html: string) {
  return typographicText(html).replace(/[\u00a0\u202f]/g, " ");
}

/** Les lignes du premier tableau, cellule par cellule, telles que rendues. */
function firstTableRows() {
  const table = articleHtml().match(/<table[\s\S]*?<\/table>/)?.[0];
  expect(table).toBeDefined();
  const body = (table ?? "").match(/<tbody[\s\S]*?<\/tbody>/)?.[0] ?? "";
  return [...body.matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/g)].map((row) =>
    [...row[1].matchAll(/<(?:th|td)[^>]*>([\s\S]*?)<\/(?:th|td)>/g)].map(
      (cell) => prose(cell[1]),
    ),
  );
}

/** 16390 → « 16 390 ». Mise en forme seule : aucun calcul du guide n’est rejoué. */
function fr(value: number) {
  return String(value).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

/** « 26 000 € » → 26000 ; « Non chiffré » → null. */
function euros(cell: string): number | null {
  const cleaned = cell.replace(/\s/g, "");
  if (!/€/.test(cleaned)) return null;
  const digits = cleaned.replace(/[^\d]/g, "");
  return digits === "" ? null : Number(digits);
}

describe("qualité du guide cahier des charges SaaS", () => {
  /* ──────────────────────────────────────────────
     Identité de la page
     ────────────────────────────────────────────── */

  it("garde le H1 visible, le registre et le JSON-LD sur le même titre", () => {
    const expected =
      "Cahier des charges SaaS\u00a0: écrire les exigences avant de comparer les prix";
    const h1Markup = renderedPage.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1];

    expect(typographicText(h1Markup ?? "")).toBe(expected);
    expect(saasGuide.heroTitle).toBe(expected);
    expect(structuredData[0]).toMatchObject({ headline: expected });
    expect(pageSource).toContain(
      'heroTitle={"Cahier des charges SaaS\\u00a0: écrire les exigences"}',
    );
    expect(pageSource).toContain('heroTitleEm="avant de comparer"');
    expect(pageSource).toContain('heroTitleSuffix="les prix"');
  });

  it("ne reprend jamais le titre de couverture dans un H2", () => {
    // §6.5 du protocole : trente-neuf guides ont été publiés avec le titre de
    // leur première section répété deux écrans plus bas.
    const h2Texts = [...articleHtml().matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g)]
      .map((match) => readerVisibleText(match[1]).toLowerCase())
      .filter((text) => text !== "");

    expect(h2Texts.length).toBeGreaterThanOrEqual(6);
    for (const h2 of h2Texts) {
      expect(h2, h2).not.toContain("cahier des charges saas");
      expect(h2, h2).not.toContain("faire chiffrer le même produit");
    }
  });

  it("tient la bande de calibre méthode et parcours", () => {
    // §5.3 : « Méthode / parcours — comment faire, les étapes », 3 000 à
    // 4 200 mots. Le guide décrit un parcours de consultation en huit étapes,
    // du décompte des devis au dépouillement des réponses.
    //
    // REQUALIFICATION DE CALIBRE, écrite et motivée comme l’exige le §5.3.
    //
    // Ce que la page rend : environ 8 500 mots de texte visible. Ce que ce
    // contrôle mesure : environ 4 200. L’écart tient à deux sous-arbres
    // marqués `data-read-time-exclude`, et le §5.3 impose de dire pourquoi
    // plutôt que de laisser un chiffre plus flatteur passer sans raison.
    //
    // 1. La trame locale (`SaasSpecificationTool`) est un formulaire de
    //    quarante-cinq zones de texte. Ses libellés ne se lisent pas : ils se
    //    remplissent. La convention du dépôt les exclut déjà pour six autres
    //    guides (`scripts/measure-guide-readtime.mjs`).
    // 2. Le dump Markdown de DossierClair pèse à lui seul près de 4 500 mots.
    //    C’est le PREMIER artefact purement textuel que cette convention
    //    couvre, et c’est le point qui demandait une décision plutôt qu’un
    //    réflexe. Il est exclu parce qu’il n’est pas de la prose lue en
    //    continu : c’est un document modèle, affiché dans un `<pre>`
    //    défilable de 760 px de haut, que le lecteur parcourt par rubrique
    //    pour y prendre une formulation, exactement comme il remplirait le
    //    formulaire au-dessus. Le compter reviendrait à facturer au lecteur le
    //    temps de lire un modèle qu’il vient chercher, pas parcourir.
    //
    // Conséquence assumée : le temps de lecture publié au registre décrit la
    // prose du guide (environ 21 min), pas la page entière. Un lecteur qui
    // lirait le modèle ligne à ligne y passerait nettement plus longtemps.
    // Cette exclusion reste une décision éditoriale à confirmer par le
    // propriétaire du site ; elle est écrite ici pour qu’elle soit visible et
    // révocable, pas pour la rendre définitive.
    const words = articleWordCount();
    expect(words).toBeGreaterThanOrEqual(3000);
    expect(words).toBeLessThanOrEqual(4200);
  });

  it("annonce au registre un temps de lecture conforme à la mesure", () => {
    // Même convention que `scripts/verify-search-indexing-artifact.mjs` :
    // mots visibles de l’article divisés par 200, tolérance d’une minute.
    const measured = Math.max(1, Math.round(articleWordCount() / 200));
    expect(Math.abs(saasGuide.readTimeMin - measured)).toBeLessThanOrEqual(1);
  });

  it("fait tomber la somme des temps de section sur le temps annoncé", () => {
    // A5 du §8.1 : un lecteur qui additionne doit retrouver le total. Les huit
    // badges de section affichaient 24 min pour un article mesuré à 20.
    const perSection = [
      ...pageSource.matchAll(/readingTime=\{"(\d+)\\u00a0min"\}/g),
    ].map((match) => Number(match[1]));

    expect(perSection).toHaveLength(8);
    expect(perSection.reduce((total, value) => total + value, 0)).toBe(
      saasGuide.readTimeMin,
    );
  });

  it("n’invente ni client, ni vécu, ni garantie", () => {
    // Règle d’or du dépôt : aucun témoignage, aucune métrique client, aucun
    // historique d’exploitation, aucune garantie générique.
    const visible = prose(renderedPage);
    for (const forbidden of [
      /\bnotre client\b/i,
      /\bnos clients (?:nous|ont)\b/i,
      /\bnous avons livré\b/i,
      /\bnous refusons régulièrement\b/i,
      /\bnotre historique\b/i,
      /\bles cahiers des charges que nous relisons\b/i,
      /\bdepuis \d+ ans\b/i,
      /\b\d+ projets livrés\b/i,
      /\bnous garantissons\b/i,
      /\bgarantie de résultat\b/i,
      /\bSLA de \d+/i,
      /\blivré en \d+ (?:jours|semaines|mois)\b/i,
      /\b100\s*%\b/,
    ]) {
      expect(visible, forbidden.source).not.toMatch(forbidden);
    }
  });

  it("compte réellement les mots de la phrase ambiguë citée", () => {
    // La section 06 annonce « Dix mots page 6 ». La phrase citée en section 02
    // est la source : le contrôle la relit et la recompte.
    const text = prose(articleHtml());
    const quoted = text.match(
      /« (Les inspecteurs doivent pouvoir saisir leur rapport depuis le terrain)\. »/,
    )?.[1];

    expect(quoted).toBeDefined();
    expect((quoted ?? "").split(/\s+/).filter(Boolean)).toHaveLength(10);
    expect(text).toContain("Dix mots page 6");
  });

  it("publie le guide par le registre central", () => {
    expect(saasGuide.editorialStatus).toBe("published");
    expect(
      PUBLISHED_GUIDES.some((entry) => entry.slug === saasGuide.slug),
    ).toBe(true);
    // Un build local ou de préversion reste privé ; la production indexe.
    expect(metadata.robots).toMatchObject({ index: false, follow: false });
    expect(metadata.alternates?.canonical).toBe(
      "https://hagnere-code.ai/guides/cahier-des-charges-saas",
    );
    expect(metadata.openGraph).toMatchObject({
      publishedTime: saasGuide.datePublished,
      modifiedTime: saasGuide.dateModified,
    });
    expect(ogSource).toContain('title: "Cahier des charges SaaS"');
    expect(ogSource).not.toContain("prestataire");
  });

  it("n’émet que les données structurées Article et BreadcrumbList", () => {
    expect(structuredData.map((item) => item["@type"])).toEqual([
      "Article",
      "BreadcrumbList",
    ]);
    expect(JSON.stringify(structuredData)).not.toMatch(
      /\b(?:FAQPage|HowTo|Offer|Review|AggregateRating|SoftwareApplication|Product|wordCount)\b/,
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
      ["saas-specification-engine.ts", engineSource],
      ["saas-specification-tool.tsx", toolSource],
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

    expect([...text.matchAll(/\d €/g)].map((m) => m[0])).toHaveLength(0);
    expect([...text.matchAll(/\d %/g)].map((m) => m[0])).toHaveLength(0);
    // Aucun groupe de milliers séparé par une espace ordinaire.
    expect([...text.matchAll(/\d \d{3}(?!\d)/g)].map((m) => m[0])).toHaveLength(
      0,
    );
    // Aucun nombre de quatre chiffres ou plus collé, hors millésimes et hors
    // numéro de règlement européen, qui ne prend pas de séparateur.
    const glued = [...text.matchAll(/\b\d{4,}\b/g)]
      .map((m) => m[0])
      .filter((value) => !/^20\d\d$/.test(value))
      .filter((value) => !new RegExp(`2023/${value}`).test(text));
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
      /<section id="reponse-courte"[\s\S]*?<\/section>/,
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

    const text = prose(answer ?? "");
    expect(text).toContain("34 000");
    expect(text).toContain("129 000 € hors taxes");
    expect(text).toContain("44 000 € HT");
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

    // Chaque tableau porte au moins quatre lignes de contenu : un tableau de
    // deux lignes est une phrase déguisée.
    for (const table of tables) {
      const bodyRows = [
        ...(table.match(/<tbody[\s\S]*?<\/tbody>/)?.[0] ?? "").matchAll(
          /<tr[^>]*>/g,
        ),
      ].length;
      expect(
        bodyRows,
        readerVisibleText(table).slice(0, 60),
      ).toBeGreaterThanOrEqual(4);
    }

    // Trois des quatre tableaux chiffrent. Le quatrième énumère les huit états
    // d’abonnement : exiger des montants dans un tableau de noms d’états
    // pousserait à en inventer.
    const numericTables = tables.filter(
      (table) => (readerVisibleText(table).match(/\d/g) ?? []).length > 20,
    );
    expect(numericTables.length).toBeGreaterThanOrEqual(2);
  });

  it("tient au moins dix valeurs chiffrées pour mille mots", () => {
    // §6.2 : au moins dix valeurs réelles pour 1 000 mots, dans la prose.
    // Ne comptent pas — et sont donc retirées avant le décompte — les numéros
    // de section, les temps de lecture, les millésimes et le numéro de
    // téléphone. Les laisser gonflerait la densité d’une vingtaine de valeurs
    // sans qu’aucune ne porte d’assiette.
    const text = prose(articleHtml())
      .replace(/§ \d+/g, " ")
      .replace(/\b\d+ min\b/g, " ")
      .replace(/\b20\d\d\b/g, " ")
      .replace(/0\d(?: \d\d){4}/g, " ");
    const values = text.match(/\d+(?:[,.]\d+)?(?: \d{3})*/g) ?? [];
    const density = (values.length / articleWordCount()) * 1000;

    expect(density, `${values.length} valeurs`).toBeGreaterThanOrEqual(10);
    // Garde-fou : un décompte qui s’effondrerait signalerait une extraction
    // cassée plutôt qu’un guide devenu creux.
    expect(values.length).toBeGreaterThanOrEqual(90);
  });

  /* ──────────────────────────────────────────────
     Arithmétique : le guide recalculé par une autre méthode
     ────────────────────────────────────────────── */

  it("retrouve les trois totaux annoncés en additionnant les postes", () => {
    // Le corps affiche les totaux ; le contrôle les reconstruit poste par
    // poste depuis le tableau rendu, puis les confronte au texte.
    const rows = firstTableRows();
    expect(rows).toHaveLength(8);

    const detail = rows.slice(0, 7);
    const announced = rows[7];
    expect(announced[0]).toBe("Total annoncé");

    for (let column = 1; column <= 3; column += 1) {
      const sum = detail.reduce(
        (total, row) => total + (euros(row[column]) ?? 0),
        0,
      );
      expect(euros(announced[column]), `colonne ${column}`).toBe(sum);
    }

    const [a, b, c] = [1, 2, 3].map((column) => euros(announced[column]) ?? 0);
    expect([a, b, c]).toEqual([34000, 58000, 129000]);

    // Postes laissés vides par la société A : le guide en annonce quatre.
    const unpriced = detail.filter((row) => euros(row[1]) === null).length;
    expect(unpriced).toBe(4);
    expect(prose(articleHtml())).toContain("Quatre postes sur sept");
  });

  it("publie des rapports calculés à couple constant", () => {
    // La version auditée écrivait « l’écart annoncé de 3,8 pour 1 devient
    // 1,5 pour 1 » : 3,8 valait C/A et 1,5 valait C/B. Le dénominateur
    // changeait en silence, et un lecteur qui refaisait la division ne
    // retrouvait rien. Les constantes ci-dessous sont posées À LA MAIN, avec
    // leurs étapes ; le test ne rejoue AUCUNE formule de la page.
    //
    // Amplitude des trois totaux, société A → société C :
    //   129 000 / 34 000 → 34 000 × 3 = 102 000, reste 27 000,
    //   27 000 / 34 000 = 0,794 → 3,794 → 3,8
    const AMPLITUDE_A_VERS_C = "3,8";
    //
    // Couple B–C, seul couple comparable : B ne laisse qu’une ligne vide,
    // quand A en laisse quatre.
    //   avant décompte : 129 000 / 58 000 → 58 000 × 2 = 116 000,
    //     reste 13 000, 13 000 / 58 000 = 0,224 → 2,224 → 2,2
    const COUPLE_BC_AVANT = "2,2";
    //   129 000 − 44 000 = 85 000
    const TOTAL_C_COMPARABLE = 85000;
    //   après décompte : 85 000 / 58 000 → reste 27 000,
    //     27 000 / 58 000 = 0,4655 → 1,4655 → 1,5
    const COUPLE_BC_APRES = "1,5";
    //   85 000 − 58 000 = 27 000
    const ECART_RESIDUEL = 27000;
    //   44 000 / 27 000 = 1,6296 → 1,6
    const POIDS_DE_LA_PHRASE = "1,6";
    //   44 000 / 129 000 = 0,3411 → 34,1 % → 34 %
    const PART_DU_POSTE_POURCENT = 34;
    //   85 000 − 60 000 = 25 000 (borne haute de la grille maison)
    const DEPASSEMENT_BORNE_HAUTE = 25000;

    // Le tableau rendu doit porter les deux montants dont tout dépend.
    const rows = firstTableRows();
    const offline = euros(
      rows.find((row) => row[0].startsWith("Saisie sur le terrain"))?.[3] ?? "",
    );
    expect(offline).toBe(44000);
    expect(rows[7][0]).toBe("Total annoncé");
    expect(euros(rows[7][3])).toBe(TOTAL_C_COMPARABLE + 44000);

    const text = prose(articleHtml());
    expect(text).toContain(`${AMPLITUDE_A_VERS_C} pour 1`);
    expect(text).toContain(`${COUPLE_BC_AVANT} pour 1`);
    expect(text).toContain(`${COUPLE_BC_APRES} pour 1`);
    expect(text).toContain(`${fr(TOTAL_C_COMPARABLE)} € HT`);
    expect(text).toContain(`${fr(ECART_RESIDUEL)} €`);
    expect(text).toContain(`${POIDS_DE_LA_PHRASE} fois`);
    expect(text).toContain(
      `${PART_DU_POSTE_POURCENT} % du devis le plus élevé`,
    );
    expect(text).toContain(`reste ${fr(DEPASSEMENT_BORNE_HAUTE)} € au-dessus`);

    // Le couple comparé est nommé, et le 3,8 est explicitement disqualifié
    // comme mesure : c’est ce qui manquait à la version auditée.
    expect(text).toContain("Sur ce couple B et C");
    expect(text).toContain("un rapport calculé sur trois listes de postes");
    // Et le rapprochement fautif ne revient nulle part.
    expect(text).not.toMatch(/3,8[^.]{0,60}devient[^.]{0,20}1,5/);
  });

  it("recalcule le chiffre d’affaires perdu de l’incident d’abonnement", () => {
    // Constantes posées à la main, étapes écrites :
    //   11 × 1 490 → 1 490 × 10 = 14 900, + 1 490 = 16 390
    const MANQUE_A_FACTURER = 16390;
    //   11 / 43 = 0,2558 → 25,58 % → 26 %
    const PART_DES_ORGANISATIONS_POURCENT = 26;

    const text = prose(articleHtml());
    expect(text).toContain(`${fr(MANQUE_A_FACTURER)} € HT`);
    expect(text).toContain(`${PART_DES_ORGANISATIONS_POURCENT} %`);
    expect(text).toContain("1 490 € HT");
    expect(text).toContain("16 390 € HT");
    expect(text).toContain("26 %");
    expect(text).toContain("quarante-trois organisations");
  });

  it("situe les totaux dans la bande maison sans se tromper de compte", () => {
    // Le corps annonçait « deux d’entre eux sortent même de la bande que notre
    // propre grille publie ». Un lecteur qui compare les montants imprimés à la
    // bande 30 000–60 000 € HT n’en trouve qu’un seul au-dessus : 34 000 et
    // 58 000 y sont tous deux à l’intérieur. Constantes posées à la main :
    //
    //   bande publiée sur /tarifs : 30 000 à 60 000 € HT
    const BORNE_BASSE = 30000;
    const BORNE_HAUTE = 60000;
    //   2 × 60 000 = 120 000, et 129 000 > 120 000 : « plus du double » est vrai
    const DOUBLE_BORNE_HAUTE = 120000;
    //   129 000 − 44 000 = 85 000 ; 85 000 − 60 000 = 25 000
    const TOTAL_C_COMPARABLE = 85000;
    const DEPASSEMENT_BORNE_HAUTE = 25000;

    const rows = firstTableRows();
    const totals = [1, 2, 3].map((column) => euros(rows[7][column]) ?? 0);
    expect(totals).toEqual([34000, 58000, 129000]);

    // Verdict écrit à la main pour chacun des trois totaux, pas dérivé d’un
    // compte que le test recalculerait avec la méthode de la page.
    expect(totals[0]).toBeGreaterThanOrEqual(BORNE_BASSE); // 34 000 : dedans
    expect(totals[0]).toBeLessThanOrEqual(BORNE_HAUTE);
    expect(totals[1]).toBeGreaterThanOrEqual(BORNE_BASSE); // 58 000 : dedans
    expect(totals[1]).toBeLessThanOrEqual(BORNE_HAUTE);
    expect(totals[2]).toBeGreaterThan(BORNE_HAUTE); // 129 000 : le seul dehors
    expect(totals[2]).toBeGreaterThan(DOUBLE_BORNE_HAUTE);

    // Et le total C reste au-dessus de la bande même une fois la saisie sans
    // réseau retirée : les deux montants viennent du tableau rendu, les deux
    // repères de la grille sont posés à la main.
    const offline =
      euros(
        rows.find((row) => row[0].startsWith("Saisie sur le terrain"))?.[3] ??
          "",
      ) ?? 0;
    expect(totals[2] - offline).toBe(TOTAL_C_COMPARABLE);
    expect(TOTAL_C_COMPARABLE - BORNE_HAUTE).toBe(DEPASSEMENT_BORNE_HAUTE);

    const text = prose(articleHtml());
    expect(text).toContain(
      "le plus élevé des trois totaux sort de la bande que notre propre grille publie",
    );
    expect(text).toContain("vaut plus du double de sa borne haute");
    expect(text).not.toMatch(/deux d’entre eux sortent/);
  });

  it("nomme les quatre postes que la société A n’a pas chiffrés", () => {
    // « Trois d’entre eux devront être payés à quelqu’un » ne disait pas
    // lesquels : c’est le dénombrement affirmé et non traçable que l’audit
    // reprochait déjà aux « trois états qui gardent la porte ouverte ». Le
    // tableau nomme les quatre lignes vides ; le corps doit nommer les trois
    // qu’il déclare inévitables, et dire ce qu’il advient de la quatrième.
    const rows = firstTableRows();
    const unpriced = rows
      .slice(0, 7)
      .filter((row) => euros(row[1]) === null)
      .map((row) => row[0]);
    expect(unpriced).toHaveLength(4);
    expect(unpriced[0]).toContain("Reprise");
    expect(unpriced[1]).toContain("Abonnement");
    expect(unpriced[2]).toContain("Saisie sur le terrain sans réseau");
    expect(unpriced[3]).toContain("Hébergement");

    const text = prose(articleHtml());
    expect(text).toContain(
      "La reprise, l’abonnement et l’hébergement devront être payés à quelqu’un",
    );
    // La quatrième n’est pas déclarée payable d’office : elle attend la
    // décision que la section 07 range parmi les trois à prendre.
    expect(text).toContain(
      "la saisie sans réseau, elle, attend un arbitrage que personne n’a encore rendu",
    );
    expect(text).not.toContain("Trois d’entre eux devront être payés");
  });

  it("relie les huit états d’abonnement aux vingt-quatre décisions annoncées", () => {
    const tables = [...articleHtml().matchAll(/<table[\s\S]*?<\/table>/g)].map(
      (match) => match[0],
    );
    const subscriptionTable = tables.find((table) =>
      table.includes("incomplete_expired"),
    );
    expect(subscriptionTable).toBeDefined();
    const rows = [
      ...(subscriptionTable ?? "").matchAll(/<tr[^>]*>[\s\S]*?<\/tr>/g),
    ].length;
    // Une ligne d’en-tête plus les huit états.
    expect(rows).toBe(9);

    const states = [
      "trialing",
      "active",
      "incomplete",
      "incomplete_expired",
      "past_due",
      "canceled",
      "unpaid",
      "paused",
    ];
    const text = prose(articleHtml());
    for (const state of states) {
      expect(text, state).toContain(state);
    }
    expect(states).toHaveLength(8);
    expect(states.length * 3).toBe(24);
    expect(text).toContain("vingt-quatre lignes à écrire");
  });

  /* ──────────────────────────────────────────────
     Fond : sources vérifiées et citées
     ────────────────────────────────────────────── */

  it("cite le Data Act avec ses articles, ses dates et sa limite", () => {
    const text = prose(articleHtml());
    for (const fact of [
      "12 septembre 2025",
      "30 jours calendaires",
      "12 janvier 2027",
      "article 25",
      "article 29",
      "services de traitement de données",
      "Il ne dit rien du code source",
    ]) {
      expect(text, fact).toContain(fact);
    }
    // La portée du texte n’est jamais élargie à tout abonnement.
    expect(text).toContain("et non tout abonnement qu’on appelle SaaS");
    expect(prose(renderedPage)).not.toMatch(
      /droit universel d’export|tout SaaS est couvert/i,
    );
  });

  it("distingue la cession de droits et le logiciel du salarié", () => {
    const text = prose(articleHtml());
    for (const fact of [
      "L131-3",
      "mention distincte",
      "L113-9",
      "vise le salarié dans l’exercice de ses fonctions",
      "n’est pas votre salariée",
      // A1 du §8.1 : un juriste sait que la portée du formalisme de l’article
      // L131-3 sur un logiciel est discutée. Le guide le dit au lieu de
      // conclure à sa place.
      "se plaide encore",
    ]) {
      expect(text, fact).toContain(fact);
    }
    expect(pageSource).toContain("LEGIARTI000006278958");
    expect(pageSource).toContain("LEGIARTI000039279818");
  });

  it("reprend les comportements de notification documentés", () => {
    const text = prose(articleHtml());
    for (const fact of [
      "L’ordre n’est pas garanti",
      "peut arriver deux fois",
      "jusqu’à trois jours",
      "trois tentatives",
      "23 heures",
      "Actif ne veut pas dire payé",
    ]) {
      expect(text, fact).toContain(fact);
    }
    // Le guide ne choisit pas le fournisseur de paiement.
    expect(text).toContain("citée ici comme repère de dénombrement");
    expect(pageSource).not.toMatch(/Stripe est (?:le|un) standard/i);
  });

  it("rend les exigences non fonctionnelles vérifiables", () => {
    const text = prose(articleHtml());
    for (const fact of [
      "12 décembre 2024",
      "neuf critères",
      "niveaux A et AA",
      "4.1.1",
      "2.5.8",
      "24 × 24 pixels CSS",
      "5.0.0",
      "30 mai 2025",
      "350 exigences",
      "dix-sept chapitres",
    ]) {
      expect(text, fact).toContain(fact);
    }
    // Aucune promesse de conformité.
    expect(prose(renderedPage)).not.toMatch(
      /conforme RGPD|conforme WCAG|certifié OWASP|nous garantissons|zéro risque/i,
    );
  });

  it("donne une commande reproductible sans inventer de seuil", () => {
    const text = prose(articleHtml());
    expect(text).toContain("grep -onEi");
    expect(text).toContain("cahier-des-charges.txt");
    expect(text).toContain("Aucun seuil publié n’existe pour cette densité");

    // La version auditée écrivait, DEUX LIGNES après avoir déclaré qu’inventer
    // un seuil serait pire que de s’en passer : « Si le compte n’a pas au
    // moins baissé de moitié, le document a été relu, pas retravaillé. »
    // Les 50 % étaient exactement le seuil que la phrase précédente
    // interdisait. Aucune proportion de ce genre ne doit revenir.
    expect(text).not.toMatch(
      /baissé de moiti|de moitié au moins|divisé par deux/i,
    );
    expect(text).not.toMatch(/le document a été relu, pas retravaillé/);
    expect(text).not.toMatch(
      /(?:seuil|compte|densité)[^.]{0,80}\b(?:moins de |au moins )?\d{1,3}\s?%/i,
    );
  });

  it("ne publie aucune durée d’effort que personne n’a mesurée", () => {
    // Six durées de la version auditée supposaient un vécu d’exploitation que
    // la société n’a pas : « Comptez 40 minutes par personne », « La
    // réécriture de l’exigence R-14 prend une heure », « coûtaient une
    // demi-journée d’écriture », « une demi-journée pour créer deux
    // organisations fictives », « se rejoue ensuite en quatre minutes », « en
    // dix minutes ». Aucune ne portait d’assiette ni de source (§6.2).
    const text = prose(renderedPage);
    for (const invented of [
      /\bComptez \d+ minutes\b/i,
      /\bquatre-vingts minutes\b/i,
      /\bprend une heure\b/i,
      /\bune demi-journée\b/i,
      /\ben quatre minutes\b/i,
      /\ben dix minutes\b/i,
      /\bcoûte \d+ (?:minutes|heures|jours)\b/i,
    ]) {
      expect(text, invented.source).not.toMatch(invented);
    }

    // Les seules durées qui subsistent sont celles des sources citées.
    const article = prose(articleHtml());
    expect(article).toContain("23 heures");
    expect(article).toContain("72 heures");
    expect(article).toContain("30 jours calendaires");
    expect(article).toContain("14 jours ouvrables");
  });

  /* ──────────────────────────────────────────────
     Ce qui rate, cas construit, honnêteté
     ────────────────────────────────────────────── */

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
    for (const fact of ["44 000 € HT d’écart", "16 390 € HT", "72 heures"]) {
      expect(prose(incidents ?? ""), fact).toContain(fact);
    }

    // La version auditée concluait « Trois jours pour la responsable
    // informatique et le délégué à la protection des données : six fois le
    // coût du test qui l’aurait évité, une demi-journée […] ». Le facteur
    // était faux — 3 jours × 2 personnes = 6 jours-personne, divisés par
    // 0,5 jour-personne, cela fait 12 et non 6 — et ses deux opérandes étaient
    // des durées inventées. Le rapprochement a été retiré, pas réparé.
    expect(prose(incidents ?? "")).not.toMatch(/fois le coût/i);
  });

  it("annonce son cas comme construit et nomme des métiers, pas des cases", () => {
    const text = prose(articleHtml());
    // L’étiquette doit être LITTÉRALEMENT vraie. La version auditée écrivait
    // « Exemple construit à partir des repères cités dans ce guide » alors que
    // ni les montants de devis, ni les volumes, ni l’effectif ne venaient
    // d’une fourchette citée : c’était une provenance inventée.
    expect(text).toContain(
      "les montants des devis, les volumes, l’effectif et le prix de l’abonnement sont choisis pour la démonstration et ne viennent d’aucune source",
    );
    expect(text).toContain("Ce n’est pas un dossier client");
    expect(text).toContain("entièrement fictif");
    expect(prose(renderedPage)).not.toContain(
      "Exemple construit à partir des repères cités dans ce guide",
    );

    for (const job of [
      "directrice générale",
      "responsable informatique",
      "inspecteur",
      "délégué à la protection des données",
      "avocat",
      "expert-comptable",
      "bailleur",
    ]) {
      expect(prose(renderedPage), job).toContain(job);
    }
    // §6.4 : ces mots ne sont pas des personnes.
    expect(text).not.toMatch(/\b(?:le|un|les|des) prestataires?\b/i);
    expect(text).not.toMatch(/\b(?:le|un|les|des) intervenants?\b/i);
  });

  it("étiquette le cas construit sur les surfaces lues seules", () => {
    // Charte §4.1 : « L’étiquette reste visible lorsqu’il est repris dans un
    // tableau, un encadré ou une FAQ autonome. » La version auditée publiait
    // « Trois sociétés ont chiffré le même document de quatorze pages : 34 000,
    // 58 000 et 129 000 € HT » dans le hero, « Trois devis, un écart de 3,8 à
    // 1 » sur la carte sociale et « Trois devis pour le même SaaS, de 34 000 à
    // 129 000 € HT » en description SERP — un fait de marché inventé, sur une
    // page destinée à des campagnes payantes.
    const heroDescription = pageSource.match(
      /heroDescription=\{\s*"([^"]+)"\s*\}/,
    )?.[1];
    expect(heroDescription).toBeDefined();
    const hero = (heroDescription ?? "").replace(/\\u00a0/g, " ");
    // L’étiquette PRÉCÈDE les chiffres : un lecteur qui ne lit que le hero ne
    // doit pas repartir avec un relevé.
    expect(hero.indexOf("Exemple construit")).toBe(0);
    expect(hero.indexOf("non un dossier client")).toBeLessThan(
      hero.indexOf("34 000"),
    );
    expect(hero).toContain("ne viennent d’aucun relevé de marché");

    // Le bandeau du hero porte la même levée d’ambiguïté, à côté des `stats`.
    expect(pageSource).toContain(
      'label: "Exemple construit · aucun dossier client"',
    );
    expect(pageSource).toContain(
      '{ label: "Exemple construit", value: "3 devis" }',
    );

    // H1, carte sociale et description SERP n’affirment plus aucune mesure.
    for (const surface of [
      saasGuide.heroTitle,
      saasGuide.metaDescription,
      saasGuide.cardDescription,
      ogSource,
    ]) {
      expect(surface, surface.slice(0, 60)).not.toMatch(
        /34\s?000|58\s?000|129\s?000|44\s?000|3,8|2,2|1,5/,
      );
    }

    // Et la première réponse de la FAQ, lue seule dans un extrait de
    // recherche, porte l’étiquette avant son chiffre.
    const firstAnswer =
      pageSource.match(/answer:\s*\n?\s*"([^"]+)"/)?.[1] ?? "";
    expect(firstAnswer).toContain("Dans l’exemple construit pour ce guide");
    expect(firstAnswer.indexOf("exemple construit")).toBeLessThan(
      firstAnswer.indexOf("quatorze pages"),
    );
  });

  it("qualifie les 72 heures CNIL dans la phrase qui les porte", () => {
    // Art. 33 RGPD : le délai court à compter de la PRISE DE CONNAISSANCE, et
    // l’obligation tombe si la violation n’est pas susceptible d’engendrer un
    // risque. La version auditée gardait ces deux réserves dans le seul bloc
    // `legalSources`, loin de l’affirmation.
    const sentence = prose(articleHtml()).match(
      /Le jour où un rapport apparaît[^]*?plan de recette\./,
    )?.[0];
    expect(sentence).toBeDefined();
    expect(sentence).toContain("72 heures");
    expect(sentence).toContain("prend connaissance de la violation");
    expect(sentence).toContain("et non celui où elle survient");
    expect(sentence).toContain(
      "risque pour les droits et libertés des personnes concernées",
    );
    expect(prose(renderedPage)).not.toMatch(
      /compte à rebours de la notification à la CNIL est de 72/,
    );
  });

  it("rend au Data Act sa période transitoire alternative", () => {
    // Art. 25(4) du règlement (UE) 2023/2854 : en cas d’impossibilité
    // technique, le fournisseur informe le client dans les 14 jours ouvrables
    // et indique une période alternative « qui ne peut excéder sept mois ».
    // La retirer laissait les 30 jours passer pour un plancher ferme dans un
    // tableau intitulé « Ce qui l’encadre aujourd’hui ».
    const text = prose(articleHtml());
    expect(text).toContain(
      "période transitoire maximale de 30 jours calendaires",
    );
    expect(text).toContain("qui ne peut excéder sept mois");
    expect(text).toContain("14 jours ouvrables");
    expect(text).toContain("techniquement impossible à tenir");
    expect(text).toContain("Ces 30 jours ne sont pas un plancher ferme");
    // Le tableau de sortie porte la même réserve, puisqu’il se lit seul.
    const exitTable = [...articleHtml().matchAll(/<table[\s\S]*?<\/table>/g)]
      .map((match) => prose(match[0]))
      .find(
        (table) => table.includes("réversibilité") || table.includes("L113-9"),
      );
    expect(exitTable).toBeDefined();
    expect(exitTable).toContain("sept mois");
  });

  it("compte les objets de la sortie comme le tableau les montre", () => {
    // Le corps ouvrait la section sur « quatre objets […] dont un seul est
    // encadré par un texte », juste au-dessus d’un tableau qui en adosse DEUX à
    // un texte : les données au règlement européen, le code source aux articles
    // L131-3 et L113-9. Un lecteur qui compte la colonne « Ce qui l’encadre
    // aujourd’hui » ne retrouvait pas le chiffre annoncé.
    //
    // Compté à la main sur les quatre lignes du tableau :
    //   1. données de vos clients .......... règlement européen  → un texte
    //   2. code source ..................... L131-3, L113-9      → un texte
    //   3. accès, secrets, hébergement ..... « Aucun texte général »
    //   4. documentation d’exploitation .... « Aucun texte général »
    const OBJETS = 4;
    const ADOSSES_A_UN_TEXTE = 2;
    const SANS_TEXTE_GENERAL = 2;
    expect(ADOSSES_A_UN_TEXTE + SANS_TEXTE_GENERAL).toBe(OBJETS);

    const exitTable = [...articleHtml().matchAll(/<table[\s\S]*?<\/table>/g)]
      .map((match) => match[0])
      .find((table) => table.includes("L113-9"));
    expect(exitTable).toBeDefined();
    const middleCells = [
      ...(exitTable ?? "").matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/g),
    ]
      .map((row) =>
        [...row[1].matchAll(/<(?:th|td)[^>]*>([\s\S]*?)<\/(?:th|td)>/g)].map(
          (cell) => prose(cell[1]),
        ),
      )
      .filter((cells) => cells.length === 3)
      .slice(1)
      .map((cells) => cells[1]);

    expect(middleCells).toHaveLength(OBJETS);
    expect(
      middleCells.filter((cell) => cell.startsWith("Aucun texte général")),
    ).toHaveLength(SANS_TEXTE_GENERAL);
    expect(
      middleCells.filter((cell) => !cell.startsWith("Aucun texte général")),
    ).toHaveLength(ADOSSES_A_UN_TEXTE);

    const text = prose(articleHtml());
    expect(text).toContain("Deux d’entre eux sont adossés à un texte");
    expect(text).not.toContain("dont un seul est encadré par un texte");
  });

  it("ne compare pas une bande tarifée avec IA à un portail qui n’en a pas", () => {
    // /tarifs libelle la bande 30–60 k€ HT « Standard — 10–15 écrans + IA ».
    // Comparer un portail sans IA à cette bande sans le dire est une
    // comparaison à fonctions inégales (charte §12.6).
    expect(pricingSource.replace(/(?:&nbsp;|\s)+/g, " ")).toContain(
      "10–15 écrans + IA",
    );
    const text = prose(articleHtml());
    expect(text).toContain("10–15 écrans + IA");
    expect(text).toContain("aucune fonction d’intelligence artificielle");
    expect(text).toContain(
      "la comparaison ne porte pas sur les mêmes fonctions",
    );
    // Le titre annonce la grille maison, plus un « repère de marché ».
    expect(text).not.toContain("Le repère de marché qui manque au tableau");
    expect(text).toContain("Le repère qui suit est le nôtre");
    expect(text).toContain("et non une observation du marché");
  });

  it("ne laisse ni superlatif de marché ni dénombrement introuvable", () => {
    const text = prose(renderedPage);
    for (const superlative of [
      "la plus détaillée du marché",
      "Le piège le plus coûteux",
      "la clause la plus chère",
      "le seul critère qui ne se discute pas",
      "noir sur blanc",
    ]) {
      expect(text, superlative).not.toContain(superlative);
    }

    // « trois d’entre elles gardent la porte ouverte » ne nommait aucun état.
    // Les trois sont maintenant nommés, et se retrouvent dans le tableau.
    const article = prose(articleHtml());
    expect(article).toContain(
      "trois d’entre elles décrivent une situation où le paiement n’a pas abouti",
    );
    for (const state of ["incomplete", "past_due", "unpaid"]) {
      expect(article, state).toContain(state);
    }
    expect(article).not.toContain("gardent la porte ouverte");
  });

  it("ne fait plus de l’antithèse « pas X, c’est Y » son geste de clôture", () => {
    // §9.2, « symétrie binaire répétée ». La version auditée en portait plus de
    // dix en 3 980 mots, jusque dans le sous-titre du hero et la FAQ.
    const text = prose(renderedPage);
    for (const tic of [
      "ne sert pas à décrire un produit, il sert",
      "n’est pas moins chère, elle est incomplète",
      "Ce n’est pas un score, c’est une liste de travail",
      "sert ici de compteur, pas de choix",
      "a été relu, pas retravaillé",
      "Ce n’est pas la preuve qu’il est trop cher",
      "n’est pas l’inconnue, c’est l’inconnue invisible",
      "n’est pas le nombre de pages, mais le nombre",
      "au premier jour, pas au dernier",
      "Payer ne cède rien",
      "Le prix arrive en dernier",
      "n’a pas deux états, il en a huit",
      "n’est pas une livraison",
      "reste une hypothèse",
      "Aucune des trois ne se prend",
      "pas une validation juridique",
    ]) {
      expect(text, tic).not.toContain(tic);
    }

    // Plancher de contrôle : la tournure subsiste, mais elle ne doit plus être
    // le métronome du texte. Deux occurrences au plus dans la prose.
    const antitheses =
      prose(articleHtml()).match(
        /\bn(?:e |’)(?:est|sert|vient|vaut) pas [^.;:]{3,60}, (?:c’est|il|elle|mais)\b/gi,
      ) ?? [];
    expect(antitheses, antitheses.join(" · ")).toHaveLength(0);
  });

  it("ne referme plus ses paragraphes sur une chute aphoristique", () => {
    // §9.2. L’audit a relevé huit chutes de fin de paragraphe devenues un
    // métronome. Elles sont citées ici mot pour mot : un tic nommé par le
    // contre-audit doit disparaître dans les termes où il a été nommé, pas
    // seulement se déplacer d’un paragraphe à l’autre.
    const text = prose(renderedPage);
    for (const chute of [
      "Aucune n’exagère.",
      "Tant qu’elle n’est pas revenue, cette colonne ne se compare à rien.",
      "Une livraison sans dépôt à jour n’est pas une livraison.",
      "Un document non joué reste une hypothèse.",
      "Autrement dit : une facture acquittée n’énumère rien.",
      "Le prix arrive en dernier.",
      "vous venez d’écrire un trou de trésorerie dans votre produit.",
      "Aucune des trois ne se prend en regardant les totaux.",
    ]) {
      expect(text, chute).not.toContain(chute);
    }
  });

  it("ne fait plus du chiffre trois une figure de style", () => {
    // §9.2, « triplette numérotée ». La version auditée portait 39 occurrences
    // de « trois » dans le corps, dont trois H3 ouverts par le mot : « Trois cas
    // où ce document n’est pas celui qu’il vous faut », « Trois comportements à
    // écrire même si vous changez de fournisseur », « Trois lignes à ajouter au
    // contrat ».
    const article = prose(articleHtml());
    for (const tic of [
      "Trois cas où ce document n’est pas celui qu’il vous faut",
      "Trois comportements à écrire",
      "Trois lignes à ajouter au contrat",
      "Les trois situations ci-dessous",
      "trois d’entre elles gardent la porte ouverte",
    ]) {
      expect(article, tic).not.toContain(tic);
    }

    // Aucun titre ne s’ouvre plus sur le mot.
    const headings = [
      ...articleHtml().matchAll(/<h[23][^>]*>([\s\S]*?)<\/h[23]>/g),
    ].map((match) => prose(match[1]));
    expect(headings.length).toBeGreaterThanOrEqual(12);
    for (const heading of headings) {
      expect(heading, heading).not.toMatch(/^Trois\b/i);
    }

    // Cliquet, pas cible : 27 occurrences subsistent, et chacune porte quelque
    // chose — les trois devis du cas, les trois photos de l’exigence R-14, les
    // trois jours de relance et les trois tentatives documentés par la source,
    // les trois candidats d’une consultation. Le plafond est posé sur la mesure
    // du jour pour que le compte ne puisse que baisser.
    const occurrences = (article.match(/\btrois\b/gi) ?? []).length;
    expect(occurrences, `${occurrences} occurrences`).toBeLessThanOrEqual(27);
  });

  it("n’impose au lecteur aucun mot propre au guide", () => {
    // Charte §9.1 : « soustrayable » était posé dans la deuxième phrase du
    // corps et servait de titre à toute la FAQ, où un lecteur arrivé par un
    // extrait de recherche le rencontrait sans définition.
    expect(pageSource).not.toMatch(/soustrayable/i);
    expect(saasGuide.metaDescription).not.toMatch(/soustrayable/i);

    // Les deux seuls mots que l’outil impose sont définis dans le corps, à
    // l’endroit où le lecteur le rencontre (charte §10.3).
    const trame = articleHtml().match(
      /<section id="trame"[\s\S]*?<\/section>/,
    )?.[0];
    const text = prose(trame ?? "");
    expect(text).toContain("STOP");
    expect(text).toContain("marque une décision à prendre avant l’envoi");
    expect(text).toContain("à décider");
    expect(toolSource).toContain("STOP");
  });

  it("ouvre le guide au lecteur qui n’a encore aucun devis", () => {
    // §6.1, test bloquant : « reprendre la situation telle que le lecteur la
    // vit ». La requête cible est « comment rédiger un cahier des charges
    // SaaS » ; la version auditée ouvrait sur « Vous avez envoyé un document
    // de quatorze pages à trois sociétés », ce qui excluait la majorité.
    const opening = prose(
      articleHtml().match(/<section id="reponse-courte"[\s\S]*?<\/p>/)?.[0] ??
        "",
    );
    expect(opening).toContain("Vous devez écrire le document");
    expect(opening).toContain("ou vous venez de recevoir des devis");
    expect(prose(renderedPage)).not.toContain(
      "Vous avez envoyé un document de quatorze pages à trois sociétés",
    );
  });

  it("ne porte qu’un bloc de transparence et qu’un appel à l’action en ligne", () => {
    const text = prose(articleHtml());
    expect((text.match(/Transparence\./g) ?? []).length).toBe(1);
    expect(text).toContain(
      "fait partie des sociétés qu’un cahier des charges comme celui-ci met en concurrence",
    );
    expect(text).toContain("à revérifier tous les douze mois");
    expect(text).toContain("seul un devis signé engage");
    expect((pageSource.match(/<TrackedGuideCtaLink/g) ?? []).length).toBe(1);
  });

  it("garde intact le passage qui ne sert pas le commerce", () => {
    const text = prose(articleHtml());
    expect(text).toContain("Le cas où ce guide conclut contre nous");
    expect(text).toContain(
      "Un échange avec nous ne vous apprendra rien de plus",
    );
    expect(pageSource).not.toMatch(
      /score de maturité|score sur 100|note pondérée|algorithme propriétaire/i,
    );
  });

  it("cite les prix Hagnéré Code réellement publiés sur la grille", () => {
    const grid = pricingSource.replace(/(?:&nbsp;|\s)+/g, " ");
    for (const amount of ["15 k€ HT", "30–60 k€ HT", "1 500 € HT", "8 k€ HT"]) {
      expect(grid, `grille : ${amount}`).toContain(amount);
    }

    const text = prose(articleHtml());
    expect(text).toContain("15 000 € HT");
    expect(text).toContain("30 000 et 60 000 € HT");
    expect(text).toContain("repères publics et indicatifs");
    expect(text).toContain("seul un devis signé fixe un prix ferme");
    expect(pageSource).toContain('href="/tarifs"');
  });

  /* ──────────────────────────────────────────────
     Style (§9.2) et maillage
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
      "Dans cet article",
      "plongeons",
    ]) {
      expect(text, tic).not.toContain(tic);
    }
  });

  it("ne pointe que vers des destinations internes publiées, jamais vers soi", () => {
    const published = new Set(PUBLISHED_GUIDES.map((entry) => entry.slug));
    const guideTargets = [
      ...pageSource.matchAll(
        /(?:href|ctaHref|primaryCtaHref)\s*[:=]\s*"\/guides\/([a-z0-9-]+)"/g,
      ),
    ].map((match) => match[1]);

    expect(new Set(guideTargets).size).toBeGreaterThanOrEqual(4);
    for (const target of guideTargets) {
      expect(published.has(target), target).toBe(true);
      // La version auditée renvoyait vers elle-même sous l’ancre
      // « choisir un prestataire sur preuves ».
      expect(target).not.toBe(saasGuide.slug);
    }

    expect(pageSource).toContain('"/services/saas-applications-metier"');
    // Une ancre qui annonce un guide ne pointe jamais vers une page service.
    const serviceAnchors = [
      ...pageSource.matchAll(
        /<Link href="\/services\/[a-z0-9-]+">\s*([^<]*)</g,
      ),
    ].map((match) => match[1].trim());
    for (const anchor of serviceAnchors) {
      expect(anchor.toLowerCase(), anchor).not.toContain("guide");
      expect(anchor.toLowerCase(), anchor).not.toContain("combien de temps");
    }
  });

  it("ne réintroduit aucun résidu de la version auditée", () => {
    for (const residue of [
      "Les cinq natures d’information",
      "Séparer les couches pour ne pas faire choisir le produit",
      "Relier chaque événement d’abonnement à une décision du produit",
      "Passer d’un adjectif invérifiable à une exigence réceptionnable",
      "Postes à rendre comparables sans inventer de montant",
      "choisir un prestataire sur preuves",
      "combien de temps il faut pour développer un SaaS",
      "À définir",
      "À attribuer",
    ]) {
      expect(pageSource, residue).not.toContain(residue);
    }
  });

  /* ──────────────────────────────────────────────
     Trame locale et exemple fictif
     ────────────────────────────────────────────── */

  it("garde la trame locale, sans réseau ni persistance", () => {
    expect(toolSource).not.toMatch(
      /\b(?:fetch|XMLHttpRequest|localStorage|sessionStorage|indexedDB|document\.cookie)\b/,
    );
    expect(toolSource).not.toMatch(
      /download\s*=|URL\.createObjectURL|new Blob/,
    );
    expect(toolSource).toContain("navigator.clipboard.writeText");
    expect(engineSource).toContain("STOP_REQUIRED_INPUTS_UNKNOWN");
    expect(engineSource).toContain("CANDIDATE_FOR_VENDOR_COMPARISON");

    expect(specificationBlocks).toHaveLength(9);
    const text = prose(articleHtml());
    expect(text).toContain("Neuf blocs, cinq champs par bloc");
    expect(text).toContain("quarante-cinq zones de texte");
    expect(specificationBlocks.length * 5).toBe(45);
    expect(pageSource).toContain('{ label: "Score global", value: "Aucun" }');
  });

  it("sort l’outil et le dump Markdown du temps de lecture", () => {
    // Sans cette exclusion, l’exemple fictif ajouterait plusieurs milliers de
    // mots au calibre et au temps de lecture annoncé au registre.
    expect(
      (pageSource.match(/data-read-time-exclude="true"/g) ?? []).length,
    ).toBe(2);

    const rawArticle =
      renderedPage.match(/<article\b[^>]*>([\s\S]*?)<\/article>/)?.[1] ?? "";
    const rawWords =
      readerVisibleText(rawArticle).match(
        /[\p{L}\p{N}]+(?:[’'\-][\p{L}\p{N}]+)*/gu,
      )?.length ?? 0;

    expect(rawWords).toBeGreaterThan(articleWordCount() + 1500);
    expect(renderedPage).toContain("Atelier Nord");
  });

  it("étiquette l’exemple fictif avant de l’afficher", () => {
    const compact = pageSource.replace(/\s+/g, " ");
    const labelIndex = compact.indexOf("cas entièrement fictif");
    const outputIndex = compact.indexOf("{dossierClair.markdown}");
    expect(labelIndex).toBeGreaterThanOrEqual(0);
    expect(outputIndex).toBeGreaterThan(labelIndex);
    expect(engineSource).toContain(
      'projectName: "DossierClair — exemple entièrement fictif"',
    );
  });

  it("expose trois illustrations dédiées, en SVG et en WebP", () => {
    for (const file of [...svgPaths, ...webpPaths]) {
      expect(existsSync(file), file).toBe(true);
    }
    for (const path of webpPaths) {
      const image = readFileSync(path);
      expect(image.subarray(0, 4).toString("ascii")).toBe("RIFF");
      expect(image.subarray(8, 12).toString("ascii")).toBe("WEBP");
    }
    expect(pageSource.match(/<Image\b/g)).toHaveLength(3);
    expect(saasGuide.articleImagePaths).toHaveLength(3);
  });

  /* ──────────────────────────────────────────────
     FAQ et requête cible
     ────────────────────────────────────────────── */

  it("garde une FAQ de six à dix questions, distinctes des H2", () => {
    const faqBlock = pageSource.match(
      /const faqCategories: GuidePremiumFaqCategory\[\] = \[([\s\S]*?)\n\];/,
    )?.[1];
    expect(faqBlock).toBeDefined();
    const questions = [
      ...(faqBlock ?? "").matchAll(/question:\s*\n?\s*"([^"]+)"/g),
    ].map((match) => match[1]);

    expect(questions.length).toBeGreaterThanOrEqual(6);
    expect(questions.length).toBeLessThanOrEqual(10);
    for (const question of questions) {
      expect(question.trim().endsWith("?"), question).toBe(true);
    }

    const answers = [
      ...(faqBlock ?? "").matchAll(/answer:\s*\n?\s*"([^"]+)"/g),
    ].map((match) => match[1]);
    expect(answers).toHaveLength(questions.length);
    // §9.2 : la symétrie binaire « Non. » / « Oui, mais » était le tic de la
    // version auditée.
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
    expect(text).toContain("cahier des charges saas");
    // Plancher, pas cible : la requête est portée par le H1, le fil d’Ariane
    // et le titre de page ; la répéter davantage dans le corps serait du
    // remplissage.
    expect(
      (text.match(/cahier des charges/g) ?? []).length,
    ).toBeGreaterThanOrEqual(6);
    expect(saasGuide.title.length).toBeLessThanOrEqual(60);
    expect(saasGuide.metaDescription.length).toBeLessThanOrEqual(155);
  });
});
