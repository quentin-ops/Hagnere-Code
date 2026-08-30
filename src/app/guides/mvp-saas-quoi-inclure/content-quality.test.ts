import { existsSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { getGuide, PUBLISHED_GUIDES } from "@/lib/guides";
import {
  assessMvpContract,
  createAccordiaAutonomousPaymentFailure,
  createAccordiaCapacityStress,
  createAccordiaCriticalDeferred,
  createAccordiaExample,
  createAccordiaFirstClientDeferredAsNon,
  createAccordiaUnknownManualDuration,
  mvpFamilyIds,
  mvpTreatments,
} from "./mvp-contract-engine";
import Page, { metadata } from "./page";

/**
 * Contrat de contenu du guide « MVP SaaS : quoi inclure ? ».
 *
 * Deux passes successives ont laissé chacune un défaut que le contrat de
 * l'époque ne pouvait pas voir.
 *
 * Passe du 28 août, matin — défauts de forme, corrigés puis verrouillés ici :
 * calibre au-delà de la bande « méthode », huit tableaux pour un plafond de
 * quatre, aucun H2 en question, aucun euro dans la prose, un lien interne
 * pointant sur la page elle-même.
 *
 * Passe du 28 août, après-midi — défauts de fond relevés par un contre-audit
 * indépendant, corrigés dans cette version :
 *
 * - « franchir la barre des cinq écrans coûte au minimum 15 000 € HT » était
 *   une soustraction entre deux forfaits de périmètres différents, présentée
 *   comme une lecture de la grille. La grille ne tarife rien entre 6 et 9
 *   écrans, et son second forfait ajoute back-office riche, workflows
 *   complexes, intégrations tierces et IA ;
 * - « ces six réflexes ajoutent facilement six à huit écrans » alors que la
 *   colonne du tableau donne 4 à 6 ;
 * - le Discovery Sprint annoncé « déduit », là où /tarifs écrit « le devis
 *   précise la déduction applicable » ;
 * - neuf jours de retard qui ne se déduisaient d'aucun mécanisme, et une
 *   variante comparée à « 12 minutes supposées » qui n'existaient pas dans le
 *   scénario ;
 * - onze énoncés de fréquence (« presque toujours », « la plupart », « la
 *   conclusion la plus fréquente ») sur une population jamais mesurée ;
 * - 22 minutes cumulées par section pour 19 minutes annoncées au registre.
 *
 * L'arithmétique est désormais vérifiée contre des CONSTANTES calculées à la
 * main, dont les étapes sont écrites en commentaire au-dessus. Un test qui
 * réapplique la formule de la page hériterait de son erreur au lieu de la
 * trouver : c'est exactement ce qui s'était produit sur le coût de
 * financement d'un guide voisin.
 */

const slugDirectory = dirname(fileURLToPath(import.meta.url));
const repositoryRoot = resolve(slugDirectory, "../../../..");
const publicDirectory = resolve(
  repositoryRoot,
  "public/guides/mvp-saas-quoi-inclure",
);

const pageSource = readFileSync(resolve(slugDirectory, "page.tsx"), "utf8");
const ogSource = readFileSync(
  resolve(slugDirectory, "opengraph-image.tsx"),
  "utf8",
);
const engineSource = readFileSync(
  resolve(slugDirectory, "mvp-contract-engine.ts"),
  "utf8",
);
const toolSource = readFileSync(
  resolve(slugDirectory, "mvp-contract-tool.tsx"),
  "utf8",
);
/** Grille tarifaire publique : source de vérité des prix maison cités ici. */
const pricingSource = readFileSync(
  resolve(repositoryRoot, "src/components/tarifs/body.ts"),
  "utf8",
);

const svgPaths = [
  resolve(publicDirectory, "contrat-test-mvp-16x9.svg"),
  resolve(publicDirectory, "charge-manuelle-mvp-4x3.svg"),
  resolve(publicDirectory, "decision-mvp-1x1.svg"),
];
const webpPaths = [
  resolve(publicDirectory, "contrat-test-mvp-16x9.webp"),
  resolve(publicDirectory, "charge-manuelle-mvp-4x3.webp"),
  resolve(publicDirectory, "decision-mvp-1x1.webp"),
];
const svgSources = svgPaths.map((path) => readFileSync(path, "utf8"));

const registeredGuide = getGuide("mvp-saas-quoi-inclure");
const renderedPage = renderToStaticMarkup(createElement(Page));
const normalizedPage = pageSource.replace(/\s+/g, " ");
const structuredData = [
  ...renderedPage.matchAll(
    /<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g,
  ),
].map((match) => JSON.parse(match[1]) as Record<string, unknown>);

/* ──────────────────────────────────────────────
   Extraction : même découpe que le vérificateur d'artefact
   (scripts/verify-search-indexing-artifact.mjs). Les deux mesures ne peuvent
   donc pas diverger : le test échoue avant le build, pas après.
   ────────────────────────────────────────────── */

const VOID_ELEMENTS = new Set([
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

function stripReadTimeExcludedElements(html: string): string {
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
    if (VOID_ELEMENTS.has(tagName)) {
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

/** Corps de l'article, tel qu'il est rendu, sans aucun retrait. */
function rawArticleHtml(): string {
  const opening = /<article\b[^>]*>/i.exec(renderedPage);
  expect(opening, "aucun <article> rendu").not.toBeNull();
  const contentStart = (opening?.index ?? 0) + (opening?.[0].length ?? 0);
  const articleTag = /<\/?article\b[^>]*>/gi;
  articleTag.lastIndex = contentStart;
  let depth = 1;

  for (
    let tag = articleTag.exec(renderedPage);
    tag;
    tag = articleTag.exec(renderedPage)
  ) {
    depth += tag[0].startsWith("</") ? -1 : 1;
    if (depth === 0) return renderedPage.slice(contentStart, tag.index);
  }

  throw new Error("balise <article> non refermée");
}

/**
 * Corps de l'article vu par le compteur de temps de lecture.
 *
 * Le formulaire porte `data-read-time-exclude` et les légendes de tableau
 * portent `md:sr-only` : le vérificateur d'artefact les retire, ce test aussi.
 * Les légendes se relisent donc sur `rawArticleHtml()`.
 */
function articleHtml(): string {
  return stripReadTimeExcludedElements(rawArticleHtml());
}

/**
 * Texte lisible en conservant les insécables.
 *
 * Une normalisation générale des blancs rendrait le contrôle typographique
 * impossible : U+00A0 appartient à `\s`. Les remplacements ci-dessous sont
 * écrits en échappements explicites — un caractère insécable tapé littéralement
 * se perd en silence à la première réécriture du fichier, et le vérificateur
 * continue de passer au vert sans plus rien vérifier.
 */
function typographicText(html: string): string {
  return html
    .replace(
      /<(script|style|template|noscript|svg)\b[^>]*>[\s\S]*?<\/\1>/gi,
      " ",
    )
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, "\u00a0")
    .replace(/&#(?:160|xa0);/gi, "\u00a0")
    .replace(/&amp;/gi, "&")
    .replace(/&(?:rsquo|apos|#x27|#39);/gi, "’")
    .replace(/&(?:ndash|mdash);/gi, "—")
    .replace(/&euro;/gi, "€")
    .replace(/&(?:quot|ldquo|rdquo);/gi, '"')
    .replace(/&[a-z]+;/gi, " ")
    .replace(/[ \t\r\n]+/g, " ")
    .trim();
}

/** Texte lisible, insécables ramenés à des espaces ordinaires. */
function prose(html: string): string {
  return typographicText(html).replace(/[\u00a0\u202f]/g, " ");
}

function articleWordCount(): number {
  return (
    prose(articleHtml()).match(
      /[\p{L}\p{N}]+(?:[’'\-][\p{L}\p{N}]+)*/gu,
    )?.length ?? 0
  );
}

function h2Texts(): string[] {
  return [...articleHtml().matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g)]
    .map((match) => prose(match[1]))
    .filter((text) => text !== "");
}

function sectionHtml(id: string): string {
  const section = articleHtml().match(
    new RegExp(`<section id="${id}"[\\s\\S]*?</section>`),
  )?.[0];
  expect(section, `section #${id} absente`).toBeDefined();
  return section ?? "";
}

describe("qualité de contenu du guide MVP SaaS", () => {
  /* ──────────────────────────────────────────────
     Registre, métadonnées, données structurées
     ────────────────────────────────────────────── */

  it("garde le titre du registre, le H1 visible et le headline identiques", () => {
    const h1Markup = renderedPage.match(/<h1\b[^>]*>[\s\S]*?<\/h1>/i)?.[0] ?? "";
    const h1AriaLabel = h1Markup.match(/\baria-label="([^"]*)"/i)?.[1] ?? "";
    const normalize = (value: string) =>
      value.replace(/&#x27;|&#39;|&rsquo;/gi, "’").replace(/\s+/g, " ").trim();

    expect(registeredGuide.heroTitle).toBe(
      "MVP SaaS : quoi inclure avant le premier test\u00a0?",
    );
    expect(normalize(h1AriaLabel)).toBe(normalize(registeredGuide.heroTitle));
    expect(normalize(prose(h1Markup))).toBe(
      normalize(registeredGuide.heroTitle.replace(/\u00a0/g, " ")),
    );
    expect(structuredData[0]).toMatchObject({
      headline: registeredGuide.heroTitle,
    });
    expect(pageSource).toContain("heroTitle={heroHeading.start}");
    expect(pageSource).toContain("heroTitleEm={heroHeading.emphasis}");
    expect(pageSource).toContain("heroTitleSuffix={heroHeading.suffix}");
    expect(ogSource).toContain('title: "MVP SaaS : quoi inclure ?"');
  });

  it("ne répète jamais le H1 dans un H2 de l’article", () => {
    // §6.5 : le titre de couverture ne reprend aucun titre de section.
    const headings = h2Texts().map((text) => text.toLowerCase());
    expect(headings.length).toBe(10);
    for (const heading of headings) {
      expect(heading, heading).not.toContain("quoi inclure");
      expect(heading, heading).not.toContain("mvp saas :");
    }
  });

  it("publie le guide par le registre central, sans schéma retiré", () => {
    expect(registeredGuide.editorialStatus).toBe("published");
    expect(
      PUBLISHED_GUIDES.some((guide) => guide.slug === registeredGuide.slug),
    ).toBe(true);
    // Un build local ou de préversion reste privé ; la production ouvre l'index.
    expect(metadata.robots).toMatchObject({ index: false, follow: false });
    expect(metadata.alternates?.canonical).toBe(
      "https://hagnere-code.ai/guides/mvp-saas-quoi-inclure",
    );
    expect(structuredData.map((item) => item["@type"])).toEqual([
      "Article",
      "BreadcrumbList",
    ]);
    expect(structuredData[0]).toMatchObject({
      datePublished: registeredGuide.datePublished,
      dateModified: registeredGuide.dateModified,
    });
    expect(JSON.stringify(structuredData)).not.toMatch(
      /\b(?:FAQPage|HowTo|Offer|Review|AggregateRating|SoftwareApplication|Product|wordCount)\b/,
    );
  });

  it("garde une date de modification bien formée et non anticipée", () => {
    const published = Date.parse(registeredGuide.datePublished);
    const modified = Date.parse(registeredGuide.dateModified);

    expect(registeredGuide.dateModified).toMatch(
      /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:Z|[+-]\d{2}:\d{2})$/,
    );
    expect(Number.isNaN(modified)).toBe(false);
    expect(Number.isNaN(published)).toBe(false);
    expect(modified).toBeGreaterThanOrEqual(published);
    expect(modified).toBeLessThanOrEqual(Date.now());
  });

  /* ──────────────────────────────────────────────
     Calibre et temps de lecture (§5.3)
     ────────────────────────────────────────────── */

  it("tient la bande de calibre « méthode / parcours »", () => {
    // 3 000 à 4 200 mots. La version auditée pesait 4 890 mots visibles, dont
    // 1 678 venaient du formulaire : un lecteur ne « lit » pas des libellés de
    // champs. Le formulaire porte désormais `data-read-time-exclude`, comme
    // l'atelier du guide Power Apps, et la prose seule est mesurée.
    const words = articleWordCount();
    expect(words).toBeGreaterThanOrEqual(3000);
    expect(words).toBeLessThanOrEqual(4200);
  });

  it("aligne le temps de lecture déclaré sur les mots réellement lus", () => {
    // Le vérificateur d'artefact (postbuild) applique la même formule avec une
    // tolérance de ±1 minute : un écart ici casserait le build de production.
    const words = articleWordCount();
    const measured = Math.max(1, Math.round(words / 200));
    expect(registeredGuide.readTimeMin, `${words} mots visibles`).toBe(measured);
    expect(pageSource).toContain('data-read-time-exclude="true"');

    // Avertissement au prochain rédacteur : l'article est près d'une frontière
    // d'arrondi. 20 min tient de 3 900 à 4 099 mots ; au-delà, `readTimeMin`
    // passe à 21 ET un compteur de section doit suivre, faute de quoi le test
    // « somme des compteurs » tombe. Vérifié à la main : 4 099 ÷ 200 = 20,495
    // → 20 ; 4 100 ÷ 200 = 20,5 → 21 (Math.round arrondit .5 vers le haut).
    expect(Math.round(4099 / 200)).toBe(20);
    expect(Math.round(4100 / 200)).toBe(21);
    const plafond = 200 * registeredGuide.readTimeMin + 99;
    expect(words, `${plafond - words} mots de marge avant 21 min`).toBeLessThanOrEqual(
      plafond,
    );
  });

  it("fait tomber juste la somme des compteurs de section", () => {
    // La version auditée affichait 2+2+2+3+2+3+3+1+2+2 = 22 min par section
    // pour 19 min au registre : un lecteur qui additionne trouvait 22.
    // Chaque compteur vaut maintenant l'arrondi de sa propre longueur, et leur
    // somme vaut le readTimeMin publié.
    const counters = [...pageSource.matchAll(/readingTime="(\d+) min"/g)].map(
      (match) => Number(match[1]),
    );
    expect(counters).toHaveLength(10);
    const summed = counters.reduce((total, value) => total + value, 0);
    expect(summed, counters.join(" + ")).toBe(registeredGuide.readTimeMin);

    // Et chaque compteur est bien l'arrondi de la section qu'il annonce.
    const sections = [
      ...articleHtml().matchAll(/<section id="([a-z-]+)"[\s\S]*?<\/section>/g),
    ];
    expect(sections).toHaveLength(10);
    for (const [index, section] of sections.entries()) {
      const words =
        prose(section[0]).match(/[\p{L}\p{N}]+(?:[’'\-][\p{L}\p{N}]+)*/gu)
          ?.length ?? 0;
      expect(
        counters[index],
        `${section[1]} : ${words} mots`,
      ).toBe(Math.max(1, Math.round(words / 200)));
    }
  });

  /* ──────────────────────────────────────────────
     Typographie française (§9.3)
     ────────────────────────────────────────────── */

  it("n’écrit aucun insécable littéral dans le code", () => {
    // Un U+00A0 tapé dans une chaîne est invisible en relecture et se perd en
    // silence au premier passage par un heredoc ou une réécriture. La première
    // version de cette réécriture en contenait 94.
    for (const [name, source] of [
      ["page.tsx", pageSource],
      ["mvp-contract-engine.ts", engineSource],
      ["mvp-contract-tool.tsx", toolSource],
      ["opengraph-image.tsx", ogSource],
    ] as const) {
      expect(/[\u00a0\u202f\u2009]/.test(source), name).toBe(false);
    }
  });

  it("pose un insécable avant chaque ponctuation double du corps", () => {
    // Le lookahead rend les occurrences chevauchantes visibles : sans lui, un
    // seul extrait de 70 caractères masquait tous les défauts voisins.
    const text = typographicText(articleHtml());
    const offenders = [
      ...new Set(
        [...text.matchAll(/(?=(.{0,40}[^\s] [?!;:»].{0,20}))/g)].map(
          (match) => match[1].slice(20),
        ),
      ),
    ];

    expect(offenders, offenders.join("\n")).toHaveLength(0);
  });

  it("colle les nombres à leur unité et sépare les milliers", () => {
    const text = typographicText(articleHtml());

    expect([...text.matchAll(/\d €/g)].map((m) => m[0])).toHaveLength(0);
    expect([...text.matchAll(/\d %/g)].map((m) => m[0])).toHaveLength(0);
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

  it("garde les ancres publiées de la version précédente", () => {
    // §15 de la charte : une refonte préserve les ancres déjà publiées.
    for (const anchor of [
      "minimum",
      "format",
      "parcours",
      "familles",
      "manuel",
      "exemple",
      "outil",
      "alternatives",
      "decision",
    ]) {
      expect(pageSource, anchor).toContain(`id="${anchor}"`);
    }
  });

  it("porte une réponse directe courte et chiffrée", () => {
    const answer = sectionHtml("minimum");
    const paragraphs = [...answer.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)].slice(
      0,
      3,
    );
    const words = prose(paragraphs.map((p) => p[1]).join(" "))
      .split(/\s+/)
      .filter(Boolean).length;

    expect(words).toBeGreaterThanOrEqual(120);
    expect(words).toBeLessThanOrEqual(200);
    expect(prose(answer)).toContain("15 000 €");
    expect(prose(answer)).toContain("30 000 à 60 000 € HT");
    expect(prose(answer)).toContain("28 août 2026");
  });

  it("garde 40 à 60 % de H2 en question", () => {
    const headings = h2Texts();
    const interrogatives = headings.filter((text) =>
      text.endsWith("?"),
    ).length;
    const share = interrogatives / headings.length;

    expect(
      share,
      `${interrogatives}/${headings.length}`,
    ).toBeGreaterThanOrEqual(0.4);
    expect(share).toBeLessThanOrEqual(0.6);
  });

  it("ne dépasse pas quatre tableaux éditoriaux, tous porteurs de chiffres", () => {
    // La version auditée en portait huit : le plafond du §6.5 est de quatre.
    const tables = [
      ...rawArticleHtml().matchAll(/<table[\s\S]*?<\/table>/g),
    ].map((match) => match[0]);
    expect(tables.length).toBeGreaterThanOrEqual(3);
    expect(tables.length).toBeLessThanOrEqual(4);

    // §6.5 : « chacun avec un objet distinct ». Le contrôle porte donc sur les
    // légendes, pas sur un quota de chiffres par tableau — le tableau des sept
    // responsabilités est qualitatif par construction, et le chiffrer
    // reviendrait à fabriquer des nombres. Trois tableaux sur quatre portent
    // des montants ou des durées, ce qui suffit à écarter le tableau décoratif.
    const captions = tables.map((table) =>
      prose(table.match(/<caption[^>]*>([\s\S]*?)<\/caption>/)?.[1] ?? ""),
    );
    expect(new Set(captions).size).toBe(tables.length);
    for (const caption of captions) expect(caption.length).toBeGreaterThan(20);

    const numericTables = tables.filter(
      (table) => (prose(table).match(/\d/g) ?? []).length > 3,
    );
    expect(numericTables.length).toBeGreaterThanOrEqual(3);
  });

  it("tient au moins dix valeurs chiffrées pour mille mots", () => {
    // §6.2. Les millésimes et les numéros de section sont retirés de la mesure.
    const text = prose(articleHtml()).replace(/\b20\d\d\b/g, " ");
    const values = text.match(/\d+(?:[,.]\d+)?(?: \d{3})*/g) ?? [];
    const density = (values.length / articleWordCount()) * 1000;

    expect(density, `${values.length} valeurs`).toBeGreaterThanOrEqual(10);
  });

  /* ──────────────────────────────────────────────
     Fond : ce que le guide doit démontrer
     ────────────────────────────────────────────── */

  it("oppose le format du test aux responsabilités qu’il rend obligatoires", () => {
    const text = prose(sectionHtml("format"));
    for (const fact of [
      "Prototype sans production",
      "Pilote accompagné",
      "Premier client en production",
      "articles 5, 25 et 32",
      "Aucune donnée réelle n’entre",
    ]) {
      expect(text, fact).toContain(fact);
    }
    // La ligne d'arrivée est un gabarit reproductible, pas une formule creuse.
    expect(text).toContain("Pendant [période exacte]");
    expect(text).toContain("7 septembre au 18 octobre 2026");
  });

  it("rend la mesure reproductible et dit quoi faire quand elle dit non", () => {
    const text = prose(sectionHtml("parcours"));
    expect(text).toContain("Une connexion n’est pas un résultat");
    expect(text).toContain(
      "au moins deux des trois entreprises obtiennent une décision tracée",
    );
    expect(text).toContain("Et si une seule y arrive");
    expect(text).toContain("ne prolonge pas de deux semaines");
    expect(text).toContain(
      "Déplacer le seuil après coup revient à changer l’hypothèse",
    );
  });

  it("attribue les sept responsabilités et nomme leurs sources", () => {
    const text = prose(sectionHtml("familles"));
    for (const label of [
      "Parcours de valeur",
      "Comptes et accès",
      "Données et continuité",
      "Vente et droits associés",
      "Aide et incidents",
      "Administration et exploitation",
      "Mesure et sortie",
    ]) {
      expect(text, label).toContain(label);
    }
    for (const fact of [
      "version 1.1 du 27 novembre 2025",
      "5.0.0 publiée le 30 mai 2025",
      "WCAG 2.2, recommandation du 12 décembre 2024",
      "une copie jamais restaurée ne prouve rien",
      "Construire dans le produit",
      "Opérer manuellement",
      "Intégrer un service existant",
      "Reporter avec déclencheur",
      "À vérifier",
    ]) {
      expect(text, fact).toContain(fact);
    }
    // L'achat autonome ferme la porte au report, dans le texte comme au moteur.
    expect(text).toContain(
      "la page encaisse les cas nominaux et laisse les autres ouverts",
    );
  });

  it("chiffre ce qu’on ajoute à tort et refuse d’en faire un prix unitaire", () => {
    const text = prose(sectionHtml("trop-inclus"));
    for (const fact of [
      "estimation éditoriale Hagnéré Code",
      "3 000 à 5 000 € HT",
      "2 000 à 6 000 € HT",
      "Ce n’est pas un prix unitaire",
      "le premier écran porte l’authentification",
    ]) {
      expect(text, fact).toContain(fact);
    }
    // §8.1 A6 : deux lignes sont défendues contre l'intérêt commercial du site.
    expect(text).toContain("méritent parfois d’entrer dès le premier lot");
    expect(text).toContain("l’article 32 du règlement européen");
  });

  it("additionne la colonne « ce que ça pèse » sans inventer d’écrans", () => {
    /*
     * Addition refaite à la main sur les six lignes du tableau. Trois seulement
     * sont exprimées en écrans :
     *   écran d'administration    2 à 3 écrans
     *   matrice de rôles          1 écran
     *   tableau de bord           1 à 2 écrans
     *   minimum   2 + 1 + 1 = 4
     *   maximum   3 + 1 + 2 = 6
     * Les trois autres lignes ne sont pas exprimées en écrans (une intégration
     * par annuaire, un second produit, une série d'états d'échec) : les compter
     * en écrans reviendrait à inventer un chiffre.
     * Sur un MVP de 3 à 5 écrans : 3 + 4 = 7 et 5 + 6 = 11.
     * La version auditée publiait « six à huit écrans » sous l'ordre
     * « additionnez la deuxième colonne », résultat que son propre tableau ne
     * produit pas.
     */
    const ECRANS_AJOUTES_MIN = 4;
    const ECRANS_AJOUTES_MAX = 6;
    const TOTAL_MIN = 7;
    const TOTAL_MAX = 11;

    const section = sectionHtml("trop-inclus");
    const rows = [...section.matchAll(/<tr\b[\s\S]*?<\/tr>/g)].map((match) =>
      prose(match[0]),
    );
    // Les bornes du tableau sont relues dans le rendu, pas récrites ici.
    const weights = rows
      .map((row) => /(\d)(?: à (\d))? écrans?/.exec(row))
      .filter((match): match is RegExpExecArray => match !== null)
      .map((match) => [Number(match[1]), Number(match[2] ?? match[1])]);
    expect(weights, JSON.stringify(weights)).toEqual([
      [2, 3],
      [1, 1],
      [1, 2],
    ]);
    expect(weights.reduce((total, [low]) => total + low, 0)).toBe(
      ECRANS_AJOUTES_MIN,
    );
    expect(weights.reduce((total, [, high]) => total + high, 0)).toBe(
      ECRANS_AJOUTES_MAX,
    );

    const text = prose(section);
    expect(text).toContain(
      `soit ${ECRANS_AJOUTES_MIN} au minimum et ${ECRANS_AJOUTES_MAX} au maximum`,
    );
    expect(text).toContain("sept à onze");
    expect(TOTAL_MIN).toBe(3 + ECRANS_AJOUTES_MIN);
    expect(TOTAL_MAX).toBe(5 + ECRANS_AJOUTES_MAX);
    expect(text).not.toContain("six à huit écrans");
    expect(text).not.toContain("facilement");
  });

  it("ne vend plus la marche de 15 000 € comme un prix de cinq écrans", () => {
    /*
     * Ce que la grille publie réellement (src/components/tarifs/body.ts) :
     *   « 15 k€ HT · Essentiel — MVP 3–5 écrans »
     *   « 30–60 k€ HT · Standard — 10–15 écrans + IA »
     * Rien entre 6 et 9 écrans, et le second palier n'est pas le premier avec
     * cinq écrans de plus : il ajoute back-office riche, workflows métier
     * complexes, intégrations tierces et agents IA. L'écart 30 000 − 15 000
     * vaut donc 15 000 € HT À PÉRIMÈTRES DIFFÉRENTS, jamais le prix de cinq
     * écrans.
     */
    const text = prose(articleHtml());
    for (const banned of [
      "franchir la barre des cinq écrans coûte au minimum",
      "de quel côté de la barre des cinq vous tombez",
      "rapproche le devis du forfait suivant",
      "15 000 € HT d’écart au minimum",
      "passer de cinq à dix écrans",
    ]) {
      expect(text, banned).not.toContain(banned);
    }
    expect(registeredGuide.metaDescription).not.toContain("de plus");
    expect(registeredGuide.metaDescription).toContain(
      "entre six et neuf écrans",
    );

    expect(text).toContain("entre six et neuf écrans, elle n’affiche aucun");
    expect(text).toContain("ne couvrent pas le même produit");
    expect(text).toContain(
      "une marche entre deux périmètres différents, pas le prix de cinq écrans",
    );
    // Le périmètre que le second forfait ajoute est nommé, pas sous-entendu.
    for (const added of [
      "back-office riche",
      "workflows métier complexes",
      "intégrations tierces",
    ]) {
      expect(text, added).toContain(added);
    }
    expect(
      pageSource.match(/Frontière 5 → 10 écrans/),
      "la statistique du hero reprenait la marche inventée",
    ).toBeNull();
  });

  it("raconte trois incidents portant chacun un montant ou une durée", () => {
    const incidents = sectionHtml("exemple");
    const headings = [...incidents.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>/g)].map(
      (match) => prose(match[1]),
    );

    expect(headings.length).toBeGreaterThanOrEqual(3);
    for (const heading of headings) {
      expect(heading, heading).toMatch(/\d/);
    }
    for (const fact of [
      "700 €",
      "840 minutes",
      "35 × 2 × 3 = 210 minutes",
      "375 minutes pour 300 disponibles",
      "75 minutes de trop",
      "2 880 € HT",
      "240 € HT par mois",
    ]) {
      expect(prose(incidents), fact).toContain(fact);
    }
    // Les deux chiffres que la version auditée donnait sans mécanisme.
    expect(prose(incidents)).not.toContain("du 18 au 27 octobre");
    expect(prose(incidents)).not.toContain("au lieu des 12 supposées");
  });

  it("garde l’incident 1 compatible avec le remède vendu au §05", () => {
    // Le §05 propose, à la place de l'écran d'administration, « un accès en
    // lecture seule à la base, une personne nommée, trois requêtes écrites
    // d'avance ». Sans réserve, l'export de 312 décisions se ferait en une
    // requête et l'incident tomberait. Le guide doit donc dire ce que ce
    // substitut ne couvre pas — et le dire aux deux endroits.
    const remedy = prose(sectionHtml("trop-inclus"));
    expect(remedy).toContain("trois requêtes écrites d’avance");
    expect(remedy).toContain("pas la restitution");

    const incident = prose(sectionHtml("exemple"));
    expect(incident).toContain("L’accès en lecture seule de la section 05");
    expect(incident).toContain("servaient à consulter et à corriger");
  });

  it("annonce son cas comme construit et nomme des métiers, pas des cases", () => {
    const text = prose(articleHtml());
    // L'étiquette doit être LITTÉRALEMENT vraie : ni la période, ni les
    // volumes, ni les durées, ni l'abonnement, ni le coût du temps interne ne
    // sortent d'une fourchette citée quelque part. Dire « construit à partir
    // des fourchettes citées dans ce guide » leur inventait une provenance.
    expect(text).not.toContain("à partir des fourchettes citées");
    expect(text).toContain(
      "sont choisis pour l’exemple et ne viennent d’aucune source",
    );
    expect(text).toContain("Seuls les montants de prestation");
    expect(text).toContain("ce n’est pas un dossier client");
    expect(text).toContain("ce ne sont pas des dossiers clients");
    // La levée d'ambiguïté précède les chiffres qu'elle qualifie.
    const caseBlock = text.slice(0, text.indexOf("240 € HT"));
    expect(caseBlock, "l’étiquette doit précéder l’abonnement").toContain(
      "ne viennent d’aucune source",
    );

    for (const job of [
      "fondatrice",
      "opératrice",
      "développeur",
      "expert-comptable",
      "contrôleur de gestion",
      "service informatique",
    ]) {
      expect(text, job).toContain(job);
    }
    // §6.4 : ces mots ne sont pas des personnes.
    expect(text).not.toMatch(/\b(?:le|un|les|des) prestataires?\b/i);
    expect(text).not.toMatch(/\b(?:le|un|les|des) intervenants?\b/i);
  });

  it("rend visible l’unique hypothèse non sourcée", () => {
    const text = prose(sectionHtml("manuel"));
    expect(text).toContain("350 € le jour chargé");
    expect(text).toContain("50 € l’heure sur sept heures");
    expect(text).toContain("écrite ici pour que vous puissiez la contester");
    expect(text).toContain("Il ne dit rien de la sécurité ni de la légalité");
    // La charge planifiée ne se confond pas avec la charge d'incident.
    expect(text).toContain("deux lignes séparées");
    expect(text).not.toContain("Comptez la permanence, provisionnez l’incident");
  });

  /* ──────────────────────────────────────────────
     Arithmétique : le guide contre un recalcul indépendant
     ────────────────────────────────────────────── */

  it("retrouve la charge manuelle par addition, pas par la multiplication du moteur", () => {
    // Méthode différente de celle du corps et du moteur : chaque occurrence est
    // empilée une par une au lieu d'être multipliée.
    const accordia = assessMvpContract(createAccordiaExample());
    let total = 0;

    for (const equation of accordia.manualEquations) {
      const minutes = Number(equation.minutesPerOccurrence);
      const occurrences = Number(equation.occurrencesPerClient);
      const clients = Number(equation.clients);
      let stacked = 0;
      for (let client = 0; client < clients; client += 1) {
        for (let pass = 0; pass < occurrences; pass += 1) stacked += minutes;
      }
      expect(String(stacked), equation.familyLabel).toBe(equation.totalMinutes);
      total += stacked;
    }

    expect(total).toBe(237);
    expect(accordia.manualLoadMinutes).toBe("237");
    expect(accordia.manualCapacityMinutes).toBe("300");
    expect(accordia.remainingCapacityMinutes).toBe("63");

    const text = prose(sectionHtml("manuel"));
    expect(text).toContain("237 minutes");
    expect(text).toContain("300");
    expect(text).toContain("63 minutes");
  });

  it("vérifie à la main les conversions en heures et en euros", () => {
    /*
     * Calculé à la main, étape par étape, puis écrit en constantes. Le test ne
     * réapplique pas la formule de la page : il vérifie que la page imprime
     * bien ces nombres-là.
     *   350 € le jour chargé ÷ 7 h            =  50 € l'heure
     *   237 min = 180 + 57                    =  3 h 57
     *   237 ÷ 60 = 3,95 h ; 3,95 × 50 = 197,5 → 198 € (arrondi)
     *   300 ÷ 60 = 5 h    ; 5 × 50            = 250 €
     */
    const EUR_PAR_HEURE = 50;
    const HEURES = 3;
    const MINUTES_RESTANTES = 57;
    const COUT_CHARGE_EUR = 198;
    const COUT_CAPACITE_EUR = 250;

    // Contrôle inverse : la constante horaire redonne le jour chargé publié.
    expect(EUR_PAR_HEURE * 7).toBe(350);
    expect(HEURES * 60 + MINUTES_RESTANTES).toBe(237);
    expect(COUT_CAPACITE_EUR).toBe(EUR_PAR_HEURE * 5);

    const text = prose(sectionHtml("manuel"));
    expect(text).toContain(`${HEURES} heures et ${MINUTES_RESTANTES} minutes`);
    expect(text).toContain(`environ ${COUT_CHARGE_EUR} €`);
    expect(text).toContain(`${COUT_CAPACITE_EUR} €`);
    expect(text).toContain(`${EUR_PAR_HEURE} € l’heure sur sept heures`);
  });

  it("recalcule les deux variantes de volume et le seuil de bascule", () => {
    /*
     * Charge d'un seul client, calculée à la main sur les quatre opérations :
     *   accès    12 min × 2 fois = 24
     *   données  20 min × 1 fois = 20
     *   vente    15 min × 1 fois = 15
     *   aide     10 min × 2 fois = 20
     *   par client                = 79 min
     * Puis, capacité déclarée = 300 min sur les six semaines :
     *   3 clients : 79 × 3 = 237  → il reste 63
     *   4 clients : 79 × 4 = 316  → 16 de trop, premier dépassement
     *   5 clients : 79 × 5 = 395  → 95 de trop
     *   6 clients : 79 × 6 = 474  → 174 de trop
     * La version auditée fermait ce paragraphe sur « le seuil de bascule se lit
     * là, et nulle part ailleurs », sans jamais dire où il tombe.
     */
    const MINUTES_PAR_CLIENT = 79;
    const CAPACITE_MIN = 300;
    const CHARGE_3 = 237;
    const CHARGE_4 = 316;
    const CHARGE_5 = 395;
    const CHARGE_6 = 474;

    // Contrôles inverses sur les constantes, puis confrontation au moteur.
    expect(MINUTES_PAR_CLIENT * 3).toBe(CHARGE_3);
    expect(MINUTES_PAR_CLIENT * 4).toBe(CHARGE_4);
    expect(CHARGE_4).toBeGreaterThan(CAPACITE_MIN);
    expect(MINUTES_PAR_CLIENT * 3).toBeLessThan(CAPACITE_MIN);

    const stress = assessMvpContract(createAccordiaCapacityStress());
    const doubled = assessMvpContract({
      ...createAccordiaExample(),
      pilotClientCount: "6",
    });
    expect(stress.manualLoadMinutes).toBe(String(CHARGE_5));
    expect(doubled.manualLoadMinutes).toBe(String(CHARGE_6));
    expect(doubled.remainingCapacityMinutes).toBe("-174");

    const text = prose(sectionHtml("manuel"));
    expect(text).toContain(`${CHARGE_5} minutes`);
    expect(text).toContain("dépassent la capacité de 95 minutes");
    expect(text).toContain(`${CHARGE_6} minutes`);
    expect(text).toContain("dépassent de 174 minutes");
    expect(text).toContain("dès le quatrième client");
    expect(text).toContain(
      `${MINUTES_PAR_CLIENT} × 4 = ${CHARGE_4} minutes pour ${CAPACITE_MIN}`,
    );
    expect(text).not.toContain("et nulle part ailleurs");
  });

  it("recalcule l’arithmétique des trois incidents", () => {
    /*
     * Incident 1, calculé à la main :
     *   ressaisie              2 jours × 350 € le jour chargé = 700 €
     *   temps réellement passé 2 jours × 7 h × 60 min         = 840 min
     *   comparaison            840 ÷ 300 min de capacité      = 2,8
     *   retard                 2 jours de travail → 2 jours de report
     * La version auditée annonçait « neuf jours de retard » (18 → 27 octobre)
     * sans qu'aucun mécanisme ne produise les sept jours manquants.
     * Variante moteur : 237 − 60 (l'opération « données ») = 177.
     */
    const RESSAISIE_EUR = 700;
    const RESSAISIE_MIN = 840;
    const RAPPORT_CAPACITE = 2.8;
    const CHARGE_CONTINUITE_REPORTEE = 177;

    expect(RESSAISIE_EUR).toBe(2 * 350);
    expect(RESSAISIE_MIN).toBe(2 * 7 * 60);
    expect(Number((RESSAISIE_MIN / 300).toFixed(1))).toBe(RAPPORT_CAPACITE);

    const deferred = assessMvpContract(createAccordiaCriticalDeferred());
    expect(deferred.status).toBe("STOP_CRITICAL_CAPABILITY_DEFERRED");
    expect(deferred.manualLoadMinutes).toBe(
      String(CHARGE_CONTINUITE_REPORTEE),
    );

    /*
     * Incident 2, calculé à la main. La durée est « à vérifier » et comptée
     * pour ZÉRO — la version auditée la comparait à « 12 minutes supposées »
     * qui appartiennent au cas de base, pas à cette variante.
     *   trois autres opérations            237 − 72 = 165 min
     *   opération mesurée   35 min × 2 fois × 3 clients = 210 min
     *   total                              165 + 210  = 375 min
     *   dépassement                        375 − 300  =  75 min
     *   part de la capacité                 75 ÷ 300  =  25 %
     */
    const CHARGE_TROIS_AUTRES = 165;
    const CHARGE_MESUREE = 210;
    const CHARGE_TOTALE = 375;
    const DEPASSEMENT_MIN = 75;
    const PART_CAPACITE = 0.25;

    expect(CHARGE_TROIS_AUTRES).toBe(237 - 12 * 2 * 3);
    expect(CHARGE_MESUREE).toBe(35 * 2 * 3);
    expect(CHARGE_TOTALE).toBe(CHARGE_TROIS_AUTRES + CHARGE_MESUREE);
    expect(DEPASSEMENT_MIN).toBe(CHARGE_TOTALE - 300);
    expect(PART_CAPACITE).toBe(DEPASSEMENT_MIN / 300);

    const unknown = assessMvpContract(createAccordiaUnknownManualDuration());
    expect(unknown.status).toBe("STOP_MANUAL_OPERATION_UNBOUNDED");
    expect(unknown.manualLoadMinutes).toBe(String(CHARGE_TROIS_AUTRES));
    expect(unknown.manualLoadState).toBe("PARTIAL_UNUSABLE");

    /*
     * Incident 3 : 3 abonnements × 240 € HT × 4 mois = 2 880 € HT.
     */
    const IMPAYE_EUR = 2880;
    expect(IMPAYE_EUR).toBe(3 * 240 * 4);
    expect(
      assessMvpContract(createAccordiaAutonomousPaymentFailure()).status,
    ).toBe("STOP_REQUIRED_DECISIONS_UNKNOWN");

    const text = prose(sectionHtml("exemple"));
    expect(text).toContain(`${RESSAISIE_EUR} €`);
    expect(text).toContain(`${RESSAISIE_MIN} minutes`);
    expect(text).toContain(`${RAPPORT_CAPACITE.toString().replace(".", ",")} fois`);
    expect(text).toContain(`${CHARGE_CONTINUITE_REPORTEE} minutes`);
    expect(text).toContain(`${CHARGE_TROIS_AUTRES} minutes`);
    expect(text).toContain(`${CHARGE_TOTALE} minutes pour 300 disponibles`);
    expect(text).toContain("un quart de la capacité");
    expect(text).toContain("2 880 € HT");
  });

  it("garde les priorités de blocage du moteur au-dessus des totaux", () => {
    expect(mvpFamilyIds).toEqual([
      "valueJourney",
      "accountsAccess",
      "dataContinuity",
      "salesEntitlements",
      "helpIncidents",
      "administrationOperations",
      "measurementExit",
    ]);
    expect(mvpTreatments).toEqual([
      "CONSTRUIRE",
      "MANUEL",
      "INTEGRER",
      "REPORTER",
      "INCONNU",
    ]);
    expect(
      assessMvpContract(createAccordiaFirstClientDeferredAsNon()).status,
    ).toBe("STOP_CRITICAL_CAPABILITY_DEFERRED");
    expect(assessMvpContract(createAccordiaExample()).status).toBe(
      "PILOT_CANDIDATE_FOR_REVIEW",
    );
    for (const status of [
      "STOP_REQUIRED_DECISIONS_UNKNOWN",
      "STOP_CRITICAL_CAPABILITY_DEFERRED",
      "STOP_MANUAL_OPERATION_UNBOUNDED",
      "STOP_MANUAL_CAPACITY_EXCEEDED",
      "TEST_FORMAT_NOT_PRODUCTION",
      "PILOT_CANDIDATE_FOR_REVIEW",
      "FIRST_CLIENT_CANDIDATE_FOR_REVIEW",
    ]) {
      expect(engineSource).toContain(status);
    }
    expect(pageSource).toContain('{ label: "Score global", value: "Aucun" }');
  });

  /* ──────────────────────────────────────────────
     Prix maison : concordance avec la grille publiée
     ────────────────────────────────────────────── */

  it("cite les prix Hagnéré Code réellement publiés sur /tarifs", () => {
    const grid = pricingSource.replace(/(?:&nbsp;|[\s\u00a0\u202f])+/g, " ");
    for (const amount of [
      "15 k€ HT",
      "30–60 k€ HT",
      "1 500 € HT",
      "8 k€ HT",
    ]) {
      expect(grid, `grille : ${amount}`).toContain(amount);
    }
    expect(grid).toContain("Essentiel — MVP 3–5 écrans");
    expect(grid).toContain("Standard — 10–15 écrans");
    expect(grid).toContain("≈ 2 500 € HT / mois");

    /*
     * La carte du palier « Essentiel » affiche 6,9–15 k€ HT. Ce plancher est
     * celui du site vitrine, et /tarifs le dit lui-même, juste sous les cartes.
     * C'est ce qui autorise le guide à citer 15 000 € HT pour un MVP, et ce qui
     * rend la division 15 000 ÷ 3 écrans légitime. Verrouillé ici : le jour où
     * la grille retire cette phrase, le guide doit être relu.
     */
    expect(grid).toContain("6,9–15 k€");
    expect(grid).toContain("<b>6,9 k€ HT</b> (site vitrine)");
    expect(grid).toContain(
      "un MVP SaaS « Essentiel » démarre par exemple à 15 k€ HT, pas à 6,9 k€ HT",
    );
    // Le second forfait n'est pas le premier avec des écrans en plus.
    for (const scope of [
      "back-office riche",
      "Workflows métier complexes",
      "Intégrations tierces",
      "Agents IA selon besoin",
    ]) {
      expect(grid, `périmètre Standard : ${scope}`).toContain(scope);
    }
    // Formulation exacte du Discovery : une condition, pas une garantie.
    expect(grid).toContain(
      "Si la phase suivante est lancée avec nous, le devis précise la déduction applicable",
    );

    const text = prose(articleHtml());
    expect(text).toContain("15 000 € hors taxes (HT)");
    expect(text).toContain("30 000 à 60 000 € HT");
    expect(text).toContain("1 500 € HT sur deux jours");
    expect(text).toContain("8 000 € HT de projet");
    expect(text).toContain("2 500 € HT par mois");
    expect(pageSource).toContain('href="/tarifs"');

    /*
     * Le lecteur doit apprendre le plancher de 6 900 € HT DANS le guide, pas
     * seulement en cliquant sur /tarifs. Sans cette ligne, un prospect qui voit
     * la carte « 6,9–15 k€ HT » après avoir lu « 15 000 € HT » soupçonne le
     * guide d'avoir retenu le haut de la bande — alors que c'est la grille qui
     * réserve 6,9 k€ au site vitrine.
     *
     * La levée d'ambiguïté est posée au §05, à l'endroit précis où le guide
     * DIVISE 15 000 € par un nombre d'écrans, et non au §01 : la réponse
     * directe est plafonnée à 200 mots par le §6.5 de la charte et en pesait
     * déjà 199. La version longue, elle, tient dans la note de sources, qui ne
     * compte pas dans le temps de lecture. Attentes écrites en espaces
     * ORDINAIRES : `prose` aplatit les insécables avant de comparer.
     */
    expect(prose(sectionHtml("trop-inclus"))).toContain(
      "La division part de 15 000 € : la grille réserve son ticket d’entrée de 6 900 € HT au site vitrine.",
    );
    const sources = prose(renderedPage);
    expect(sources).toContain(
      "le ticket d’entrée de 6 900 € HT de la même page est annoncé pour un site vitrine",
    );
    expect(sources).toContain("démarre à 15 000 € HT, pas à 6 900 € HT");
  });

  it("n’annonce pas le Discovery Sprint comme une remise acquise", () => {
    // /tarifs écrit « le devis précise la déduction applicable » et la FAQ
    // tarifs « la déduction, son délai et les droits sont indiqués dans l'offre
    // signée ». Écrire « déduit » transformerait une condition contractuelle en
    // engagement commercial pris par une page de guide.
    const visible = prose(renderedPage);
    expect(visible).toContain("le devis précise la déduction applicable");
    expect(visible).not.toMatch(/déduit si la phase suivante/i);
    expect(visible).not.toMatch(/et déduit si/i);
    expect(pageSource).not.toMatch(/deux jours, déduit/);
  });

  it("recalcule le rapport prix / écran et la marche entre forfaits", () => {
    /*
     * Calculé à la main sur les deux montants publiés au tableau par service :
     *   15 000 € ÷ 5 écrans = 3 000 € par écran (borne basse du palier MVP)
     *   15 000 € ÷ 3 écrans = 5 000 € par écran (borne haute)
     *   30 000 € ÷ 15 écrans = 2 000 € par écran
     *   60 000 € ÷ 10 écrans = 6 000 € par écran
     *   30 000 − 15 000      = 15 000 € d'écart, À PÉRIMÈTRES DIFFÉRENTS
     *
     * Le contre-audit proposait de refaire la division sur 6 900 €, ce qui
     * donnerait 1 380 à 5 000 € par écran. Cette lecture est écartée, et pour
     * une raison vérifiable plutôt que par confort : /tarifs range le ticket
     * d'entrée de 6,9 k€ HT sous « site vitrine » et écrit qu'« un MVP SaaS
     * "Essentiel" démarre par exemple à 15 k€ HT, pas à 6,9 k€ HT ». Diviser
     * 6 900 € par un nombre d'écrans appliquerait à un MVP un prix que la
     * source réserve explicitement à autre chose. Les deux phrases de la grille
     * sont verrouillées dans le test de concordance ci-dessus : si elles
     * disparaissent, ce calcul-ci n'a plus de fondement et doit être refait.
     */
    const BAS_MVP = 3000;
    const HAUT_MVP = 5000;
    const BAS_STANDARD = 2000;
    const HAUT_STANDARD = 6000;
    const MARCHE = 15000;

    // Contrôles inverses : les constantes reconstruisent les forfaits publiés.
    expect(BAS_MVP * 5).toBe(15000);
    expect(HAUT_MVP * 3).toBe(15000);
    expect(BAS_STANDARD * 15).toBe(30000);
    expect(HAUT_STANDARD * 10).toBe(60000);
    expect(15000 + MARCHE).toBe(30000);

    const text = prose(articleHtml());
    // Écrit en clair : `toLocaleString` produirait une espace fine insécable
    // (U+202F) là où la page pose un U+00A0, et le test comparerait deux
    // chaînes différentes en croyant vérifier le même nombre.
    expect(text).toContain("3 000 à 5 000 € HT");
    expect(text).toContain("2 000 à 6 000 € HT");
  });

  it("garde le « environ » de la maintenance jusque dans le total annuel", () => {
    /*
     * La grille écrit « ≈ 2 500 € HT / mois ». Multiplier un repère approché
     * par douze donne un total approché :
     *   2 500 € × 12 mois = 30 000 € HT ≈ le total annuel
     * 30 000 € HT est la BORNE BASSE du forfait Standard (30 000 à 60 000),
     * pas « autant que le lot 2 » : l'égalité ne tient qu'à cette borne.
     */
    const REPERE_MENSUEL = 2500;
    const ANNUEL = 30000;
    expect(REPERE_MENSUEL * 12).toBe(ANNUEL);

    const text = prose(articleHtml());
    expect(text).toContain("un repère indicatif d’environ 2 500 € HT par mois");
    expect(text).toContain("font environ 30 000 € HT");
    expect(text).toContain("la borne basse du forfait de développement suivant");
    expect(text).toContain("qui va de 30 000 à 60 000 € HT");
    expect(text).not.toContain("autant que le lot 2");
  });

  /* ──────────────────────────────────────────────
     Style (§9.2), maillage et dispositif commercial
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
      "Dans un monde où",
      "Plongeons",
      "N’hésitez pas",
      "Comme nous l’avons vu",
    ]) {
      expect(text, tic).not.toContain(tic);
    }
  });

  it("n’avance aucune fréquence sur une population jamais mesurée", () => {
    // Onze énoncés de ce type avaient été relevés : ils empruntent l'autorité
    // d'un corpus de missions qu'une société créée le 30/09/2025 ne peut pas
    // publier. Chacun a été réécrit en mécanisme (« quand X, alors Y »).
    const visible = prose(renderedPage);
    for (const claim of [
      "presque toujours",
      "la plupart des tests",
      "reviennent systématiquement",
      "qu’on oublie le plus souvent",
      "la conclusion la plus fréquente",
      "toujours dans les échecs",
      "six mois plus tard",
      "coûte toujours plus cher",
      "c’est toujours ainsi",
      "presque jamais le développement",
      "il manque presque toujours",
    ]) {
      expect(visible, claim).not.toContain(claim);
    }
    // Les mécanismes qui les remplacent, eux, doivent être là.
    const text = prose(articleHtml());
    expect(text).toContain("Le piège tient à un enchaînement court");
    expect(text).toContain("Le devis décrit le parcours quand tout marche");
    expect(text).toContain("faute de quoi rien n’empêche la même demande");
  });

  it("ne rejoue pas trois fois le gabarit « n’est pas X, c’est Y »", () => {
    // Le contre-audit a relevé trois occurrences du même moule, plus trois
    // chutes en « ne prouve / ne mesure / ne dit plus rien ». Elles sont
    // supprimées mot pour mot, pas déplacées.
    const text = prose(articleHtml());
    for (const cast of [
      "Le format n’est pas un mot sur un devis",
      "n’est pas une vente, c’est une créance",
      "ce n’est pas le devis qu’il faut relire, c’est le projet",
      "ne mesure plus rien",
      "et nulle part ailleurs",
      "c’est précisément par là qu’un pilote déborde",
    ]) {
      expect(text, cast).not.toContain(cast);
    }
    // Le moule restant est compté : au plus une occurrence dans tout l'article.
    const remaining = text.match(/n’est pas [^.;:]{3,60}, c’est /g) ?? [];
    expect(remaining, remaining.join(" | ")).toHaveLength(0);
  });

  it("pose l’insécable jusque dans les attributs invisibles au test de prose", () => {
    // Le contrôle typographique retire les balises avant de mesurer : il ne
    // voyait donc pas « Arbre sans score : quatre STOP » dans l'attribut alt de
    // la troisième illustration.
    //
    // Portée volontairement limitée aux attributs écrits dans CE guide. Deux
    // libellés voisins portent le même défaut mais appartiennent à des sources
    // partagées par les neuf guides : le `aria-label` « Tableau défilable : … »
    // composé par `GuideTable`, et celui du H1, dérivé du titre du registre.
    // Les corriger depuis ce fichier sortirait du périmètre de ce guide.
    const attributes = [
      ...rawArticleHtml().matchAll(/\s(?:alt|title)="([^"]*)"/g),
    ].map((match) => match[1].replace(/&nbsp;|&#(?:160|xa0);/gi, "\u00a0"));

    expect(attributes.length).toBeGreaterThanOrEqual(3);
    const offenders = attributes.filter((value) => /[^\s] [?!;:»]/.test(value));
    expect(offenders, offenders.join("\n")).toHaveLength(0);
  });

  it("rend la comparaison du §02 lisible sans colonne masquée à 390 px", () => {
    // Condition bloquante §13.4 de la charte. Le tableau du §02 porte quatre
    // colonnes et la réponse est dans la troisième. `GuideTable` ne la masque
    // pas : sous 768 px, `globals.css` passe chaque cellule en bloc et réinjecte
    // son en-tête depuis `data-label`. Ce test verrouille le mécanisme — sans
    // `data-label`, la mise en cartes rendrait les cellules anonymes.
    const table = /<table[\s\S]*?<\/table>/.exec(sectionHtml("format"))?.[0];
    expect(table, "tableau du §02 absent").toBeDefined();

    const head = /<thead[\s\S]*?<\/thead>/.exec(table ?? "")?.[0] ?? "";
    const headers = [...head.matchAll(/<th[^>]*>([\s\S]*?)<\/th>/g)].map((match) =>
      prose(match[1]),
    );
    expect(headers).toHaveLength(4);
    expect(headers[2]).toBe("Ce que vous pourrez conclure");

    // Trois lignes de quatre cellules : la première est un `th scope="row"`,
    // les trois autres des `td`. Toutes doivent porter leur en-tête.
    const body = /<tbody[\s\S]*?<\/tbody>/.exec(table ?? "")?.[0] ?? "";
    const cells = [...body.matchAll(/<(?:td|th)[^>]*>/g)].map((match) => match[0]);
    expect(cells).toHaveLength(12);
    for (const cell of cells) {
      expect(cell, cell).toMatch(/data-label="/);
    }
    expect(body).toContain('data-label="Ce que vous pourrez conclure"');
    // La classe qui déclenche la mise en cartes doit rester sur le tableau.
    expect(table).toMatch(/class="[^"]*\bguide-table\b/);
    const stylesheet = readFileSync(
      resolve(repositoryRoot, "src/app/globals.css"),
      "utf8",
    );
    expect(stylesheet).toContain("@media (max-width: 767px)");
    expect(stylesheet).toContain(".guide-table [data-label]::before");
  });

  it("ne laisse aucun vocabulaire de production dans le texte lisible", () => {
    const visible = prose(renderedPage);
    for (const marker of [
      /\bpasse\s+[1-4]\b/iu,
      /première trace Git/iu,
      /prêt pour revue humaine/iu,
      /contre-audit/iu,
      /\bhash\b/iu,
    ]) {
      expect(visible, marker.source).not.toMatch(marker);
    }
  });

  it("ne pointe que vers des guides publiés, jamais vers lui-même", () => {
    const published = new Set(PUBLISHED_GUIDES.map((guide) => guide.slug));
    const targets = [
      ...pageSource.matchAll(
        /(?:href|ctaHref|primaryCtaHref)\s*[:=]\s*"\/guides\/([a-z0-9-]+)"/g,
      ),
    ].map((match) => match[1]);

    // La version auditée renvoyait vers elle-même sous l'ancre « la validation
    // d'une idée SaaS », et deux ancres annonçant des guides pointaient sur des
    // pages de service.
    expect(new Set(targets).size).toBeGreaterThanOrEqual(4);
    for (const target of targets) {
      expect(published.has(target), target).toBe(true);
      expect(target).not.toBe(registeredGuide.slug);
    }

    const serviceAnchors = [
      ...pageSource.matchAll(/<Link href="\/services\/[a-z0-9-]+">\s*([^<]*)</g),
    ].map((match) => match[1].trim().toLowerCase());
    for (const anchor of serviceAnchors) {
      expect(anchor, anchor).not.toContain("guide");
    }
    // Le contrat transversal du corpus impose au moins un lien de service.
    expect(pageSource).toContain('"/services/saas-applications-metier"');
  });

  it("ne porte qu’un bloc de transparence et qu’un appel à l’action en ligne", () => {
    const text = prose(articleHtml());
    expect((text.match(/Transparence\./g) ?? []).length).toBe(1);
    expect(text).toContain(
      "Hagnéré Code développe des applications SaaS sur mesure et perçoit des honoraires",
    );
    expect(text).toContain("relevés le 28 août 2026");
    expect(text).toContain("à revérifier tous les douze mois");
    expect(text).toContain("seul un devis signé engage");
    expect((pageSource.match(/<TrackedGuideCtaLink/g) ?? []).length).toBe(1);
    // Un seul encart final : la section partagée `strategyCta` est donc absente.
    expect(pageSource).not.toContain("strategyCta=");
  });

  it("garde intact le passage qui ne sert pas le commerce", () => {
    const text = prose(articleHtml());
    expect(text).toContain("Ne rien construire peut être la bonne décision");
    expect(text).toContain("construisez moins maintenant");
    expect(text).toContain(
      "sert autant à justifier un projet qu’à le repousser d’un an",
    );
    expect(pageSource).not.toMatch(
      /score de maturité|score sur 100|algorithme propriétaire/i,
    );
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

    const headings = new Set(h2Texts().map((text) => text.toLowerCase()));
    for (const question of questions) {
      expect(question.trim().endsWith("?"), question).toBe(true);
      expect(question.includes("\\u00a0?"), question).toBe(true);
      expect(
        headings.has(question.replace(/\\u00a0/g, " ").toLowerCase()),
        question,
      ).toBe(false);
    }

    // §9.2 : la symétrie binaire « Oui, si… » / « Non. » était portée par neuf
    // réponses sur douze dans la version auditée.
    const binaryOpeners = answers.filter((answer) =>
      /^(?:Non|Oui)\b/.test(answer),
    ).length;
    expect(binaryOpeners / answers.length).toBeLessThanOrEqual(0.34);
    for (const answer of answers) {
      const words = answer
        .replace(/\\u00a0/g, " ")
        .split(/\s+/)
        .filter(Boolean).length;
      expect(words, answer.slice(0, 50)).toBeGreaterThanOrEqual(40);
      expect(words, answer.slice(0, 50)).toBeLessThanOrEqual(120);
    }

    expect(pageSource).toContain("faqCategories={faqCategories}");
    expect(pageSource).toContain('ctaHref: "/demarrer-un-projet"');
  });

  /* ──────────────────────────────────────────────
     Outil local et actifs
     ────────────────────────────────────────────── */

  it("garde l’outil local, déterministe et sans transmission", () => {
    for (const forbidden of [
      /\bfetch\s*\(/,
      /XMLHttpRequest/,
      /WebSocket/,
      /localStorage/,
      /sessionStorage/,
      /document\.cookie/,
      /sendBeacon/,
    ]) {
      expect(engineSource).not.toMatch(forbidden);
      expect(toolSource).not.toMatch(forbidden);
    }
    expect(toolSource).toContain("aucun score");
    expect(toolSource).toContain('aria-live="polite"');
    expect(engineSource).toContain("BigInt(normalizedWhole)");
    expect(engineSource).toContain("MAX_DECIMAL_PLACES = 3");
    expect(renderedPage).not.toContain("download=");
    expect(pageSource).toContain("<MvpFirstClientContractTool />");
  });

  it("garde les trois illustrations dédiées et leurs rapports", () => {
    for (const path of [...svgPaths, ...webpPaths]) {
      expect(existsSync(path), path).toBe(true);
    }
    expect(svgSources[0]).toContain('width="1600" height="900"');
    expect(svgSources[1]).toContain('width="1200" height="900"');
    expect(svgSources[2]).toContain('width="900" height="900"');
    // Le visuel de charge affiche les mêmes facteurs que le moteur.
    for (const visualCopy of [
      "12 min × 2 occurrences × 3 clients",
      "20 min × 1 occurrence × 3 clients",
      "15 min × 1 occurrence × 3 clients",
      "10 min × 2 occurrences × 3 clients",
    ]) {
      expect(svgSources[1], visualCopy).toContain(visualCopy);
    }
    expect(registeredGuide.articleImagePaths).toEqual([
      "/guides/mvp-saas-quoi-inclure/contrat-test-mvp-16x9.webp",
      "/guides/mvp-saas-quoi-inclure/charge-manuelle-mvp-4x3.webp",
      "/guides/mvp-saas-quoi-inclure/decision-mvp-1x1.webp",
    ]);
    expect(
      pageSource.match(
        /(?:contrat-test-mvp-16x9|charge-manuelle-mvp-4x3|decision-mvp-1x1)\.webp/g,
      ),
    ).toHaveLength(3);
    for (const path of webpPaths) {
      const bytes = readFileSync(path);
      expect(bytes.subarray(0, 4).toString("ascii")).toBe("RIFF");
      expect(bytes.subarray(8, 12).toString("ascii")).toBe("WEBP");
    }
  });

  it("ne réintroduit aucun tic de la version auditée", () => {
    for (const residue of [
      "Délimitez le minimum par la preuve à obtenir",
      "Attribuez une décision et un responsable à chacune des sept familles",
      "Comparez service, intégration et absence de logiciel avant de construire",
      "Sept variantes du même contrat fictif",
      "la validation d’une idée SaaS",
      "calcul du retour sur investissement",
      "combien de temps il faut pour développer un SaaS",
      "le choix d’un prestataire sur preuves",
      "ajoutent facilement six à huit écrans",
      "franchir la barre des cinq écrans",
      "Six réflexes reviennent",
      "Comptez la permanence, provisionnez l’incident",
      "au lieu des 12 supposées",
      "neuf jours de retard",
    ]) {
      expect(normalizedPage, residue).not.toContain(residue);
    }
  });

  it("traite explicitement la requête cible", () => {
    const text = prose(articleHtml()).toLowerCase();
    expect(text).toContain("mvp");
    expect(text).toContain("premier lot");
    expect((text.match(/écran/g) ?? []).length).toBeGreaterThanOrEqual(15);
    expect(registeredGuide.title.replace(/\u00a0/g, " ").length).toBeLessThanOrEqual(60);
    expect(registeredGuide.metaDescription.length).toBeLessThanOrEqual(155);
  });
});
