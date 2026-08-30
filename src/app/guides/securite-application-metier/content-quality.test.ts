import { existsSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { getGuide, PUBLISHED_GUIDES } from "@/lib/guides";
import Page, { metadata } from "./page";

const slugDirectory = dirname(fileURLToPath(import.meta.url));
const repositoryRoot = resolve(slugDirectory, "../../../..");
const publicDirectory = resolve(
  repositoryRoot,
  "public/guides/securite-application-metier",
);

const pageSource = readFileSync(resolve(slugDirectory, "page.tsx"), "utf8");
const ogSource = readFileSync(
  resolve(slugDirectory, "opengraph-image.tsx"),
  "utf8",
);
const logicSource = readFileSync(
  resolve(slugDirectory, "security-readiness.ts"),
  "utf8",
);
const toolSource = readFileSync(
  resolve(slugDirectory, "security-readiness-tool.tsx"),
  "utf8",
);
const selfSource = readFileSync(
  resolve(slugDirectory, "content-quality.test.ts"),
  "utf8",
);
/** Grille tarifaire publique : source de vérité des prix maison cités ici. */
const pricingSource = readFileSync(
  resolve(repositoryRoot, "src/components/tarifs/body.ts"),
  "utf8",
);

const svgPaths = [
  resolve(publicDirectory, "socle-securite-16x9.svg"),
  resolve(publicDirectory, "socle-securite-4x3.svg"),
  resolve(publicDirectory, "socle-securite-1x1.svg"),
];
const webpPaths = [
  resolve(publicDirectory, "socle-securite-16x9.webp"),
  resolve(publicDirectory, "socle-securite-4x3.webp"),
  resolve(publicDirectory, "socle-securite-1x1.webp"),
];
const svgSources = svgPaths.map((file) => readFileSync(file, "utf8"));

const toolCompact = toolSource.replace(/\s+/g, " ");
const renderedPage = renderToStaticMarkup(Page());
const guide = getGuide("securite-application-metier");
const structuredData = [
  ...renderedPage.matchAll(
    /<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g,
  ),
].map((match) => JSON.parse(match[1]) as Record<string, unknown>);

/**
 * Retire les blocs marqués `data-read-time-exclude` — ici le seul outil local,
 * qui est un formulaire et non de la prose. Convention du dépôt, appliquée à
 * l'identique par `scripts/measure-guide-readtime.mjs`.
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

/** L'article tel qu'il est rendu, outil local compris. */
function fullArticleHtml() {
  const html = renderedPage.match(/<article\b[^>]*>([\s\S]*?)<\/article>/)?.[1];
  expect(html).toBeDefined();
  return html ?? "";
}

/** L'article sans l'outil local : la prose rédigée. */
function articleHtml() {
  return removeReadTimeExcludedElements(fullArticleHtml());
}

function countWords(html: string) {
  const text = html
    .replace(
      /<(script|style|template|noscript|svg)\b[^>]*>[\s\S]*?<\/\1>/gi,
      " ",
    )
    .replace(/<[^>]+>/g, " ")
    .replace(/&#(?:x[0-9a-f]+|[0-9]+);/gi, " ")
    .replace(/&[a-z]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
  return text.match(/[\p{L}\p{N}]+(?:[’'\-][\p{L}\p{N}]+)*/gu)?.length ?? 0;
}

function articleText() {
  return articleHtml()
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
  return countWords(articleHtml());
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

/**
 * Texte lisible en conservant les espaces insécables tels quels.
 *
 * `readerVisibleText` ramène tout blanc à une espace ordinaire, ce qui rendrait
 * la vérification typographique aveugle : U+00A0 appartient à `\s`.
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

/** Le corps FAQ, qui vit hors de `<article>` mais compte pour le lecteur. */
function faqWordCount() {
  const block = pageSource.match(
    /const faqCategories: GuidePremiumFaqCategory\[\] = \[([\s\S]*?)\n\];/,
  )?.[1];
  expect(block).toBeDefined();
  const texts = [
    ...(block ?? "").matchAll(/(?:question|answer|label):\s*\n?\s*"([^"]+)"/g),
  ].map((match) => match[1].replace(/\\u00a0/g, " "));
  return countWords(texts.join(" "));
}

describe("qualité de contenu du guide sécurité d’une application métier", () => {
  /* ──────────────────────────────────────────────
     Identité, registre et données structurées
     ────────────────────────────────────────────── */

  it("garde le H1 visible, le heroTitle du registre et le headline identiques", () => {
    const expectedHeadline =
      "Sécurité d’une application métier : que mesurer avant les vraies données ?";
    const h1Text = readerVisibleText(
      renderedPage.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1] ?? "",
    );

    expect(h1Text).toBe(expectedHeadline);
    expect(guide.heroTitle).toBe(expectedHeadline);
    expect(structuredData[0]).toMatchObject({ headline: expectedHeadline });
    // La balise <title> reste un objet distinct du H1 (§6.5) et courte.
    expect(guide.title).toBe(
      "Sécurité d’une application métier : les 4 mesures à faire",
    );
    expect(guide.title.length).toBeLessThanOrEqual(60);
    expect(guide.metaDescription.length).toBeLessThanOrEqual(155);
  });

  it("ne répète jamais le H1 dans un H2 de l’article", () => {
    const h2Texts = [...articleHtml().matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g)]
      .map((match) => readerVisibleText(match[1]).toLowerCase())
      .filter((text) => text !== "");

    expect(h2Texts.length).toBe(9);
    for (const h2 of h2Texts) {
      expect(h2, h2).not.toContain("sécurité d’une application métier");
      expect(h2, h2).not.toContain("que mesurer avant les vraies données");
    }
  });

  it("publie le guide par le registre central et pointe le bon canonique", () => {
    expect(guide.editorialStatus).toBe("published");
    expect(PUBLISHED_GUIDES.some((entry) => entry.slug === guide.slug)).toBe(
      true,
    );
    // Un build local ou de préversion reste privé ; la production ouvre l'index.
    expect(metadata.robots).toMatchObject({ index: false, follow: false });
    expect(metadata.alternates?.canonical).toBe(
      "https://hagnere-code.ai/guides/securite-application-metier",
    );
    expect(metadata.openGraph).toMatchObject({
      publishedTime: guide.datePublished,
      modifiedTime: guide.dateModified,
    });
    // La réécriture du 28/08/2026 est substantielle : la date visible, le
    // JSON-LD et le registre doivent la porter ensemble (§5.2 de la règle d'or).
    expect(guide.dateModified.startsWith("2026-08-28")).toBe(true);
    expect(readerVisibleText(renderedPage)).toContain("28 août 2026");
    expect(ogSource).toContain(
      'subtitle: "Quatre mesures avant d’ouvrir les vraies données"',
    );
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
     Calibre et temps de lecture (§5.3, charte §14.1)
     ────────────────────────────────────────────── */

  it("tient la bande « pilier structurant » quelle que soit la façon de compter", () => {
    // REQUALIFICATION ÉCRITE (§5.3, « on coupe, on scinde, ou on requalifie par
    // écrit »). La version précédente se déclarait « Méthode / parcours »
    // (3 000-4 200 mots) et ne tenait cette bande que sous la mesure la plus
    // étroite — prose seule, outil local exclu. Le contre-audit a relevé qu'avec
    // l'outil le guide dépassait de 16 %. Ce guide porte neuf sections, quatre
    // protocoles exécutables, quatre tableaux, une couche juridique, une grille
    // de décision et une section d'incidents : c'est un pilier structurant.
    // Il est désormais dans la bande 4 200-6 000 mots par les trois lectures
    // possibles, et sous le plafond dur de 6 000 :
    //   prose seule                       ≈ 4 360
    //   prose + outil local               ≈ 5 090
    //   prose + outil local + FAQ         ≈ 5 820
    const prose = articleWordCount();
    const withTool = countWords(fullArticleHtml());
    const everything = withTool + faqWordCount();

    expect(prose, `${prose} mots`).toBeGreaterThanOrEqual(4200);
    expect(prose, `${prose} mots`).toBeLessThanOrEqual(6000);
    expect(withTool, `${withTool} mots`).toBeGreaterThanOrEqual(4200);
    expect(withTool, `${withTool} mots`).toBeLessThanOrEqual(6000);
    // Plafond dur du protocole : au-delà, le sujet se découpe.
    expect(everything, `${everything} mots`).toBeLessThanOrEqual(6000);
  });

  it("aligne readTimeMin du registre sur la mesure du dépôt", () => {
    // Convention interne (docs/charte-qualite-guides.md §14.1) : mots visibles
    // du corps ÷ 200, arrondis à la minute. Mesuré le 28/08/2026 avec
    // `node scripts/measure-guide-readtime.mjs securite-application-metier`,
    // qui applique la même exclusion : 4 364 mots → 22 min.
    // Le hub (`GuidesHubPage`) affiche cette valeur : elle ne peut pas dériver.
    const measured = Math.max(1, Math.round(articleWordCount() / 200));
    expect(guide.readTimeMin, `mesure ${measured} min`).toBe(measured);
    expect(guide.readTimeMin).toBe(22);
  });

  /* ──────────────────────────────────────────────
     Typographie française (§9.3)
     ────────────────────────────────────────────── */

  it("n’écrit aucun insécable littéral dans le code", () => {
    // Un U+00A0 tapé dans une chaîne est invisible en relecture et se perd en
    // silence au premier passage par un heredoc ou une réécriture.
    for (const [name, source] of [
      ["page.tsx", pageSource],
      ["opengraph-image.tsx", ogSource],
      ["security-readiness.ts", logicSource],
      ["security-readiness-tool.tsx", toolSource],
      // Le contrôle vaut aussi pour lui-même : un insécable littéral dans une
      // classe de caractères se perd en silence au premier heredoc, et le test
      // continue de passer en ne vérifiant plus rien (§7.3 du protocole).
      // La classe ci-dessous est donc écrite en séquences d'échappement — elles
      // valent exactement les caractères U+00A0, U+202F et U+2009 pour le
      // moteur d'expressions régulières, sans les rendre invisibles au lecteur.
      ["content-quality.test.ts", selfSource],
    ] as const) {
      expect(/[\u00a0\u202f\u2009]/.test(source), name).toBe(false);
    }
    // …et l'insécable est bien présent une fois rendu.
    expect(
      (typographicText(articleHtml()).match(/\u00a0/g) ?? []).length,
    ).toBeGreaterThan(150);
  });

  it("pose un insécable avant chaque ponctuation double, outil local compris", () => {
    // Le contrôle porte sur `fullArticleHtml()`, pas sur la prose seule : la
    // version auditée mesurait l'article privé de l'outil, donc restait aveugle
    // exactement là où les dix-huit fautes se trouvaient.
    const text = typographicText(fullArticleHtml());
    const offenders = [...text.matchAll(/.{0,45}[^\s] [?!;:»].{0,20}/g)]
      .map((match) => match[0])
      // `npm audit --omit=dev` et les codes HTTP restent du code, pas de la prose.
      .filter((extract) => !extract.includes("--omit"));

    expect(offenders, offenders.join("\n")).toHaveLength(0);
  });

  it("colle les nombres à leur unité et sépare les milliers", () => {
    const text = typographicText(fullArticleHtml());

    expect([...text.matchAll(/\d €/g)].map((m) => m[0])).toHaveLength(0);
    expect([...text.matchAll(/\d %/g)].map((m) => m[0])).toHaveLength(0);
    expect([...text.matchAll(/\d h \d/g)].map((m) => m[0])).toHaveLength(0);
    // Aucun nombre de quatre chiffres ou plus collé, hors années.
    const glued = [...text.matchAll(/\b\d{4,}\b/g)]
      .map((m) => m[0])
      .filter((value) => !/^20\d\d$/.test(value));
    expect(glued, glued.join(", ")).toHaveLength(0);
  });

  it("n’emploie que des apostrophes courbes et des guillemets français", () => {
    const text = typographicText(fullArticleHtml());
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

    expect(words, `${words} mots`).toBeGreaterThanOrEqual(120);
    expect(words, `${words} mots`).toBeLessThanOrEqual(200);
    for (const value of ["993 €", "3 972 €", "6 620 €", "2 648 €"]) {
      expect(prose(answer ?? ""), value).toContain(value);
    }
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

  it("ne dépasse pas quatre tableaux éditoriaux, tous porteurs de chiffres", () => {
    const tables = [...articleHtml().matchAll(/<table[\s\S]*?<\/table>/g)].map(
      (match) => match[0],
    );
    expect(tables.length).toBe(4);
    for (const table of tables) {
      const digits = (readerVisibleText(table).match(/\d/g) ?? []).length;
      expect(digits, readerVisibleText(table).slice(0, 80)).toBeGreaterThan(6);
    }
    // Trois tableaux sur quatre restent à trois colonnes : à 390 px, la
    // question, la mesure et sa conséquence tiennent ensemble.
    const wide = tables.filter(
      (table) => (table.match(/<th [^>]*scope="col"/g) ?? []).length >= 4,
    );
    expect(wide).toHaveLength(1);
  });

  it("tient au moins dix valeurs chiffrées pour mille mots", () => {
    // §6.2. La densité se mesure sur les valeurs informatives de la prose : les
    // numéros de section, le numéro de téléphone et les millésimes sont retirés.
    const text = prose(articleHtml())
      .replace(/§ \d+/g, " ")
      .replace(/\b20\d\d\b/g, " ")
      .replace(/0\d(?: \d\d){4}/g, " ");
    const values = text.match(/\d+(?:[,.]\d+)?(?: \d{3})*/g) ?? [];
    const density = (values.length / articleWordCount()) * 1000;

    expect(
      density,
      `${values.length} valeurs pour ${articleWordCount()} mots`,
    ).toBeGreaterThanOrEqual(10);
  });

  it("répartit six à huit liens internes contextuels dans le corps (§6.5)", () => {
    const body = pageSource.slice(pageSource.indexOf('id="reponse"'));
    const contextual = [
      ...body.matchAll(/<(?:Link|TrackedGuideCtaLink)\s+href="(\/[^"]+)"/g),
    ].map((match) => match[1]);

    expect(contextual.length, contextual.join(", ")).toBeGreaterThanOrEqual(6);
    expect(contextual.length, contextual.join(", ")).toBeLessThanOrEqual(8);
    // Le contre-audit relevait quatre liens dans la seule section 08 : plus
    // aucune section n'en concentre plus de deux.
    const sections = [
      ...pageSource.matchAll(/id="([a-z-]+)"[\s\S]*?<\/GuidePremiumSection>/g),
    ];
    for (const section of sections) {
      const links = (
        section[0].match(/<(?:Link|TrackedGuideCtaLink)\s+href="\//g) ?? []
      ).length;
      expect(links, `${section[1]} : ${links} liens`).toBeLessThanOrEqual(2);
    }
  });

  /* ──────────────────────────────────────────────
     Le fond : les quatre mesures, protocole par protocole (§6.3)
     ────────────────────────────────────────────── */

  it("donne pour chaque mesure ce qu’on lance, ce qu’on lit et le seuil", () => {
    const text = prose(articleHtml());

    // Mesure 1 — restauration chronométrée.
    for (const fact of [
      "environnement séparé",
      "Notez l’heure de départ",
      "Remontez les cinq objets",
      "les fichiers déposés par les utilisateurs",
      "les secrets",
      "Restaurée en 40 minutes",
      "6 h 40 au lieu des 4 h acceptées",
    ]) {
      expect(text, fact).toContain(fact);
    }

    // Mesure 2 — l'alerte chronométrée.
    for (const fact of [
      "14 h 05",
      "14 h 12",
      "horodaté 12 h 05",
      "temps universel coordonné",
      "boîte générique",
      "conservés sept jours",
      "quinze minutes",
    ]) {
      expect(text, fact).toContain(fact);
    }

    // Mesure 3 — le compte témoin.
    for (const fact of [
      "Copier comme cURL",
      "Remplacez le jeton",
      "403 ou 404",
      "trois réponses sur dix reviennent en 200",
      "une seule réponse 200 bloque la mise en service",
      "contrôle d’accès rompu au niveau de l’objet",
    ]) {
      expect(text, fact).toContain(fact);
    }

    // Mesure 4 — le tri des dépendances.
    for (const fact of [
      "pip-audit",
      "osv-scanner",
      "1 043 paquets",
      "68 dépendances directes",
      "31 alertes",
      "224 jours",
      "9,0 à 10,0 critique",
      "probabilité qu’une faille soit exploitée dans les trente jours",
    ]) {
      expect(text, fact).toContain(fact);
    }
  });

  it("énumère bien dix pages sensibles pour dix rejeux (reproductibilité A3)", () => {
    // Le contre-audit relevait cinq exemples pour un seuil qui porte sur dix.
    const step = prose(articleHtml()).match(
      /ouvrez dix pages sensibles\s*:([^.]+)\./,
    )?.[1];
    expect(step, "étape 2 du compte témoin introuvable").toBeDefined();
    const items = (step ?? "").split(/,| et /).filter((part) => part.trim());
    expect(items.length, items.join(" | ")).toBe(10);
  });

  it("écrit la mise de côté qui fait passer 31 alertes à 6", () => {
    // Le contre-audit relevait une chaîne 31 → 4 → 3 → 1 dont le premier
    // maillon manquait : un lecteur qui refaisait le compte obtenait 29.
    const text = prose(articleHtml());
    expect(text).toContain(
      "Les quatorze moyennes et les onze basses rejoignent le lot du mois",
    );
    expect(text).toContain("Restent les six alertes critiques ou hautes");
    expect(text).toContain(
      "Ramener 6 alertes critiques ou hautes à celle qu’on corrige cette semaine",
    );
    // 1 critique + 5 hautes = 6 ; 14 moyennes + 11 basses = 25 ; 6 + 25 = 31.
    expect(1 + 5).toBe(6);
    expect(14 + 11).toBe(25);
    expect(6 + 25).toBe(31);
    // 6 − 2 = 4 ; 4 − 1 = 3 ; 3 − 2 = 1.
    expect(6 - 2).toBe(4);
    expect(4 - 1).toBe(3);
    expect(3 - 2).toBe(1);
  });

  it("ne fait pas doublon entre la commande lancée et la première question du tri", () => {
    // `npm audit --omit=dev` écarte déjà les dépendances de développement : la
    // commande du protocole ne porte plus l'option, et l'option est nommée là
    // où elle fait le tri.
    const text = prose(articleHtml());
    expect(text).toContain("npm audit pour du JavaScript");
    expect(text).toContain("Le code vulnérable part-il en production ?");
    expect(text).toContain(
      "l’option --omit=dev de npm audit les écarte d’office",
    );
    expect(text).not.toContain("npm audit --omit=dev pour du JavaScript");
  });

  it("raconte trois incidents portant chacun un montant ou une durée", () => {
    const incidents = articleHtml().match(
      /<section id="cas-fictif"[\s\S]*?<\/section>/,
    )?.[0];
    expect(incidents).toBeDefined();
    const headings = [
      ...(incidents ?? "").matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>/g),
    ].map((match) => prose(match[1]));

    expect(headings).toHaveLength(3);
    for (const heading of headings) {
      expect(heading, heading).toMatch(/\d/);
    }
    for (const fact of ["2 648 €", "6 620 €", "41 jours", "72 heures", "1 250 €"]) {
      expect(prose(incidents ?? ""), fact).toContain(fact);
    }
  });

  /* ──────────────────────────────────────────────
     Arithmétique : comparée à des constantes calculées à la main,
     jamais à une réimplémentation de la formule de la page (§7.3)
     ────────────────────────────────────────────── */

  it("publie un coût horaire ouvré égal aux constantes calculées à la main", () => {
    // Étapes tenues à la main, une par une :
    //   main-d'œuvre immobilisée : 21 personnes × 38 € = 798 € l'heure ;
    //   marge du jour            : 62 commandes × 84 € = 5 208 € ;
    //   marge horaire            : 5 208 ÷ 8 h = 651 € ;
    //   part non rattrapée       : 651 × 3 = 1 953, soit 195,30 € l'heure ;
    //   total                    : 798 + 195,30 = 993,30 €, arrondi à 993 €.
    expect(21 * 38).toBe(798);
    expect(62 * 84).toBe(5208);
    expect(5208 / 8).toBe(651);
    expect(651 * 3).toBe(1953);
    expect(798 * 10 + 1953).toBe(9933);

    const text = prose(articleHtml());
    expect(text).toContain("798 € l’heure");
    expect(text).toContain("195,30 € l’heure");
    expect(text).toContain("993,30 € l’heure");
    expect(text).toContain("5 208 €");
    expect(text).toContain("651 €");
    // Le montant est une heure OUVRÉE : sans cette borne, un arrêt de nuit se
    // facturerait au même prix. C'est l'erreur que le contre-audit a trouvée.
    expect(text).toContain("Ce montant vaut par heure ouvrée");
    expect(text).toContain("de 9 h à 17 h");
    // 993 € × 22 h = 21 846 € — le contre-exemple du samedi.
    expect(993 * 22).toBe(21846);
    expect(text).toContain("21 846 €");
  });

  it("publie l’écart de restauration égal aux constantes calculées à la main", () => {
    // Étapes tenues à la main :
    //   seuil accepté : 4 h × 993 € = 3 972 € ;
    //   durée mesurée : 6 h 40 = 20/3 h ; 993 × 20 = 19 860 ; 19 860 ÷ 3 = 6 620 € ;
    //   écart         : 6 620 − 3 972 = 2 648 €.
    expect(993 * 4).toBe(3972);
    expect(993 * 20).toBe(19860);
    expect(19860 / 3).toBe(6620);
    expect(6620 - 3972).toBe(2648);

    const text = prose(articleHtml());
    expect(text).toContain("3 972 €");
    expect(text).toContain("6 620 €");
    expect(text).toContain("2 648 €");
    // L'exercice de restauration se joue sur une copie : il ne coûte pas
    // 6 620 €. Le contre-audit avait relevé la facturation d'une répétition.
    expect(text).toContain(
      "L’exercice lui-même ne coûte que la demi-journée qu’il mobilise",
    );
    expect(text).toContain(
      "2 648 € si la même durée était subie en heures ouvrées",
    );
  });

  it("place l’incident n° 1 dans la journée de travail qu’il facture", () => {
    // 9 h 20 + 6 h 40 = 16 h 00, entre les 9 h et 17 h déclarés en section 02.
    expect(9 * 60 + 20 + (6 * 60 + 40)).toBe(16 * 60);
    expect(9 * 60 + 20).toBeGreaterThanOrEqual(9 * 60);
    expect(16 * 60).toBeLessThanOrEqual(17 * 60);

    const text = prose(articleHtml());
    expect(text).toContain("Un mardi à 9 h 20");
    expect(text).toContain("Service rétabli à 16 h");
    expect(text).toContain("à 993 € l’heure ouvrée");
    // La version auditée plaçait la panne un vendredi de 17 h à 23 h 40 :
    // six heures quarante entièrement hors des heures de travail facturées.
    expect(text).not.toContain("23 h 40");
  });

  it("publie la ressaisie au centime, sans arrondi non annoncé", () => {
    // Étapes tenues à la main :
    //   62 commandes × 6 min = 372 min ;
    //   372 min = 6 h 12 (372 − 6 × 60 = 12) ;
    //   372 × 38 € = 14 136 ; 14 136 ÷ 60 = 235,60 €.
    expect(62 * 6).toBe(372);
    expect(372 - 6 * 60).toBe(12);
    expect(372 * 38).toBe(14136);
    expect(14136 / 60).toBe(235.6);

    const text = prose(articleHtml());
    expect(text).toContain("372 minutes");
    expect(text).toContain("6 h 12");
    expect(text).toContain("235,60 € de temps chargé");
    // 236 € était le seul arrondi non annoncé du guide.
    expect(text).not.toContain("236 €");
  });

  it("publie les autres montants égaux aux constantes calculées à la main", () => {
    // Correction des trois routes : 2,5 j × 500 € = 1 250 €.
    expect(2.5 * 500).toBe(1250);
    // Exercice sur table : 5 personnes × 1 h × 38 € = 190 €.
    expect(5 * 38).toBe(190);
    // Plafond de l'article 83 : 12 000 000 × 2 % = 240 000 €.
    expect(12_000_000 * 2).toBe(24_000_000);
    expect(24_000_000 / 100).toBe(240_000);
    // Délai du correctif, 14 janvier → 26 août 2026 (année non bissextile) :
    // 17 (janvier) + 28 + 31 + 30 + 31 + 30 + 31 (juillet) + 26 = 224 jours.
    expect(17 + 28 + 31 + 30 + 31 + 30 + 31 + 26).toBe(224);
    // Perte de saisie : sauvegarde à 2 h, panne à 17 h → 15 heures.
    expect(17 - 2).toBe(15);
    // Utilisateurs : 12 + 6 + 9 + 4 + 2 + 1 = 34, dont 21 bloqués et 13 non.
    expect(12 + 6 + 9 + 4 + 2 + 1).toBe(34);
    expect(34 - 21).toBe(13);

    const text = prose(articleHtml());
    expect(text).toContain("1 250 €");
    expect(text).toContain("190 € de temps chargé");
    expect(text).toContain("240 000 €");
    expect(text).toContain("224 jours");
    expect(text).toContain("quinze heures");
  });

  it("ne compare plus le coût d’une correction à celui d’une autre panne", () => {
    // Le tableau de décision opposait 1 250 € (mesure 3) à 2 648 € (mesure 1) :
    // deux défaillances différentes. La ligne compare désormais un coût qui se
    // paie une fois à un écart qui se paie à chaque incident.
    const text = prose(articleHtml());
    expect(text).toContain(
      "La correction se paie une fois, l’écart se paie à chaque incident",
    );
    expect(text).not.toContain("1 250 € contre 2 648 €");
    expect(text).not.toContain("2 648 € par arrêt");
  });

  /* ──────────────────────────────────────────────
     Zéro invention (CLAUDE.md) — la règle qui prime
     ────────────────────────────────────────────── */

  it("annonce les huit hypothèses non sourcées, pas seulement deux", () => {
    const text = prose(articleHtml());
    expect(text).toContain("38 € l’heure chargée");
    expect(text).toContain("500 € la journée de développement");
    expect(text).toContain(
      "Huit quantités de ce guide ne sortent d’aucune source",
    );
    // Les six durées d'effort produisent des euros au même titre que les deux
    // montants : les taire était une transparence de façade.
    for (const assumption of [
      "six minutes par commande ressaisie",
      "deux jours et demi pour corriger trois routes",
      "une heure à cinq personnes pour l’exercice sur table",
      "une demi-journée pour l’exercice de restauration",
      "deux heures d’attente sur un ticket d’hébergement",
      "une journée pour la première série des quatre mesures contre deux heures ensuite",
    ]) {
      expect(text, assumption).toContain(assumption);
    }
    expect(text).toContain("Remplacez-les par les vôtres");
    expect(text).toContain("Les huit hypothèses de coût et de durée");
  });

  it("étiquette le cas construit sans lui inventer de provenance", () => {
    const text = prose(articleHtml());
    // L'étiquette doit être littéralement vraie : ni les volumes, ni l'effectif,
    // ni le coût horaire ne viennent d'une fourchette citée dans ce guide.
    expect(text).toContain(
      "Exemple construit : l’entreprise, ses volumes, ses horaires et ses coûts internes sont choisis pour l’exemple et ne viennent d’aucune source",
    );
    expect(text).toContain(
      "seuls les montants de prestation sont repris de notre grille publiée",
    );
    expect(text).toContain("Ce n’est pas un dossier client");
    expect(text).toContain("ce ne sont pas des dossiers clients");
    expect(text).not.toContain(
      "Exemple construit à partir des méthodes et des fourchettes",
    );
    // …et la levée d'ambiguïté précède les chiffres, jusque dans le hero.
    const hero = renderedPage.slice(0, renderedPage.indexOf('id="reponse"'));
    expect(prose(hero)).toContain(
      "viennent d’un cas construit pour ce guide, entreprise et volumes compris",
    );
    expect(prose(hero)).toContain("cas construit");
  });

  it("n’affirme aucune fréquence ni prévalence sur une population non mesurée", () => {
    // CLAUDE.md interdit l'historique d'exploitation. Une société créée le
    // 30/09/2025 ne sait pas ce qui est « le plus fréquent » ni ce que fait
    // « presque tout le monde ».
    const text = prose(articleHtml()).toLowerCase();
    for (const claim of [
      "presque tout le monde",
      "presque personne",
      "tout le monde cite",
      "le plus fréquent",
      "la plupart des",
      "le plus utile de la semaine",
      "le plus utile de tous",
      "l’erreur la plus fréquente",
      "dans la majorité",
      "la plupart du temps",
    ]) {
      expect(text, claim).not.toContain(claim);
    }
    expect(pageSource.toLowerCase()).not.toContain("le plus utile de tous");
  });

  it("n’attribue à Hagnéré Code aucun livrable qui ne soit pas au devis", () => {
    // Les puces de la barre latérale promettaient un résultat chiffré que
    // /services/audit-technique ne porte pas comme engagement.
    expect(pageSource).not.toContain("Chaque écart ramené à un montant");
    expect(pageSource).not.toContain(
      "Correction chiffrée avant toute reconstruction",
    );
    expect(pageSource).toContain(
      "Vos hypothèses de coût relues avec vos propres chiffres",
    );
    expect(prose(renderedPage)).toContain(
      "Un audit documente une décision ; il ne rend aucune application sûre",
    );
  });

  /* ──────────────────────────────────────────────
     Droit et référentiels : chaque affirmation dans son périmètre
     ────────────────────────────────────────────── */

  it("cite l’article 32 mot à mot entre guillemets français", () => {
    // Le texte officiel écrit « les mesures techniques et organisationnelles
    // appropriées afin de garantir un niveau de sécurité adapté au risque ».
    // « appropriées au risque » soudait deux syntagmes distincts (§7.1 point 8).
    const text = prose(articleHtml());
    expect(text).toContain(
      "« appropriées afin de garantir un niveau de sécurité adapté au risque »",
    );
    expect(text).not.toContain("« appropriées au risque »");
    expect(pageSource).not.toContain("appropriées au risque");
  });

  it("dit l’article 33 de la même façon partout, et sous condition de risque", () => {
    // §06 déclenchait « les 72 heures de l'article 33 » dès la lecture avérée,
    // quand §05 écrivait déjà la formulation exacte. Un juriste relève l'écart.
    const text = prose(articleHtml());
    expect(text).not.toContain("déclenche les 72 heures de l’article 33");
    expect(text).toContain(
      "si elle est susceptible d’engendrer un risque pour ces personnes",
    );
    const occurrences = (
      text.match(/sous 72 heures après en avoir pris connaissance/g) ?? []
    ).length;
    expect(occurrences, `${occurrences} occurrences`).toBeGreaterThanOrEqual(2);
  });

  it("cite le RGPD sans transformer un plafond en sanction", () => {
    const text = prose(articleHtml());
    expect(text).toContain("le montant le plus élevé étant retenu");
    expect(text).toContain(
      "c’est donc le plafond de 10 millions qui s’applique",
    );
    expect(text).toContain("Un plafond n’est pas une sanction");
    expect(text).toContain("le risque pour elles est élevé");
    // La transposition française de NIS 2 n'est pas affirmée dans le corps.
    expect(pageSource).toContain(
      "les modalités relèvent du texte français de transposition",
    );
    expect(text).not.toMatch(/conforme RGPD|certifié/i);
  });

  it("garde les référentiels dans leur portée annoncée", () => {
    const text = prose(articleHtml());
    expect(text).toContain("ASVS 5.0.0");
    expect(text).toContain("30 mai 2025");
    expect(text).toContain("CSWP 29, 26 février 2024");
    expect(text).toContain(
      "il n’impose ni ordre, ni liste de contrôles universelle",
    );
    expect(text).toContain("Aucun des deux ne certifie quoi que ce soit");
    expect(text).toContain("ANSSI-BP-100, version 1.1 du 27 novembre 2025");
    expect(text).toContain(
      "ses recommandations ne sont pas normatives sauf texte contraire",
    );
    expect(text).toContain("version 2.0 du 28 janvier 2022");
    expect(text).toContain("fiche CNIL du 14 mars 2024");
    expect(text).toContain("six mois à un an");
    expect(text).toContain("3-2-1 est un repère, pas une preuve de reprise");

    for (const reference of [
      "art_32/oj/fra",
      "art_33/oj/fra",
      "art_83/oj/fra",
      "cnil_guide_securite_personnelle.pdf",
      "securite-des-donnees-les-regles-essentielles",
      "securite-encadrer-les-developpements-informatiques",
      "securite-sauvegarder",
      "securite-tracer-les-operations",
      "anssi_fondamentaux_sauvegarde_systemes_dinformation_v1.1.pdf",
      "recommandations-de-securite-pour-larchitecture-dun-systeme-de-journalisation",
      "www-project-application-security-verification-standard",
      "www-project-api-security",
      "nist-cybersecurity-framework-csf-20",
      "first.org/cvss/v4-0",
      "known-exploited-vulnerabilities-catalog",
      "docs.npmjs.com/cli/v10/commands/npm-audit",
    ]) {
      expect(pageSource, reference).toContain(reference);
    }
  });

  /* ──────────────────────────────────────────────
     Voix, métiers et tics (§6.4, §9.2)
     ────────────────────────────────────────────── */

  it("nomme des métiers, pas des cases de tableau", () => {
    const text = prose(articleHtml());
    for (const job of [
      "directrice administrative et financière",
      "responsable applicatif",
      "développeur",
      "chauffeur-livreur",
      "préparateurs de commandes",
      "administration des ventes",
      "contrôleur de gestion",
      "expert-comptable",
      "commercial",
      "juriste",
      "délégué à la protection des données",
    ]) {
      expect(text, job).toContain(job);
    }

    // §6.4 : ces mots ne sont pas des personnes.
    expect(text).not.toMatch(/\b(?:le|un|les|des) prestataires?\b/i);
    expect(text).not.toMatch(/\b(?:le|un|les|des) intervenants?\b/i);
  });

  it("ne laisse passer aucun connecteur robotique ni tic de rédaction", () => {
    const text = prose(articleHtml());
    for (const tic of [
      "Il est important de noter",
      "Par ailleurs",
      "En effet",
      "Force est de constater",
      "Il convient de",
      "Concrètement,",
      "En conclusion",
      "Comme nous l’avons vu",
      "N’hésitez pas",
      "dans un monde où",
      "plongeons",
      // Métaphores fabriquées et dramatisation creuse relevées au contre-audit.
      "Un journal sans destinataire dort",
      "Les silences de cette heure-là valent son prix",
      // Adjectif vendeur sans chiffre, dans le guide qui chiffre tout.
      "La correction coûte peu",
    ]) {
      expect(text, tic).not.toContain(tic);
    }
  });

  it("varie la formule d’attaque après les tableaux et les protocoles (§6.5)", () => {
    // « Sur le cas construit » ouvrait six paragraphes sur neuf sections.
    const text = prose(articleHtml());
    const openers = (text.match(/Sur le cas construit/g) ?? []).length;
    expect(openers, `${openers} occurrences`).toBeLessThanOrEqual(3);
  });

  it("limite la symétrie binaire « A, pas B » (§9.2)", () => {
    // Quatorze occurrences dans le corps audité, une toutes les 300 mots.
    const text = prose(articleHtml());
    const binaries = (text.match(/,\s(?:pas|jamais|plutôt que)\s/g) ?? [])
      .length;
    expect(binaries, `${binaries} figures binaires`).toBeLessThanOrEqual(7);
    for (const figure of [
      "C’est une politesse, pas un contrôle",
      "votre reprise dépend d’une personne, pas d’une procédure",
      "Remontez cinq objets, pas un seul",
      "La directrice administrative et financière, pas le développeur",
      "un réglage par défaut, pas une décision",
      "appartiennent à la direction, pas à l’hébergeur",
      "ce que le code sait dire, pas ce que l’enquête demandera",
      "sont des hypothèses annoncées, pas des relevés",
    ]) {
      expect(text, figure).not.toContain(figure);
    }
  });

  it("garde intact le passage qui ne sert pas le commerce", () => {
    const text = prose(articleHtml());
    // Les deux trios de « trois des quatre mesures » se contredisaient : le
    // lecteur ne savait pas laquelle exigerait une prestation. Aucune ne l'exige.
    expect(text).toContain(
      "Aucune de ces quatre mesures ne demande de prestation extérieure",
    );
    expect(text).not.toContain(
      "Trois de ces quatre mesures ne demandent aucune prestation extérieure",
    );
    expect(text).toContain("vous n’avez besoin d’aucun audit");
    expect(text).toContain("Terminez par une date, pas par un badge");
    expect(pageSource).not.toMatch(
      /score de maturité|score sur 100|note pondérée|algorithme propriétaire/i,
    );
  });

  it("ne porte qu’un bloc de transparence et qu’un appel à l’action en ligne", () => {
    const text = prose(articleHtml());
    expect((text.match(/Transparence\./g) ?? []).length).toBe(1);
    expect(text).toContain(
      "Hagnéré Code vend des audits techniques et un accompagnement sécurité et RGPD, et perçoit des honoraires",
    );
    expect(text).toContain("aucune n’a été relevée chez un client");
    expect(text).toContain("à revérifier tous les douze mois");
    expect(text).toContain("seul un devis signé engage");
    expect((pageSource.match(/<TrackedGuideCtaLink/g) ?? []).length).toBe(1);
    expect(pageSource.indexOf('href="/demarrer-un-projet"')).toBeGreaterThan(
      pageSource.indexOf('id="decision"'),
    );
  });

  it("garde le lexique de consultant sous six occurrences pour mille mots", () => {
    // §9.4 : ces mots existent, ils ne doivent pas tenir lieu d'explication.
    const text = prose(articleHtml()).toLowerCase();
    const banned = [
      "périmètre",
      "livrable",
      "gouvernance",
      "dispositif",
      "traçabilité",
      "opposable",
      "criticité",
      "jalon",
      "réversibilité",
      "socle",
      "matrice",
      "arbitrage",
    ];
    const hits = banned.flatMap((word) => [
      ...text.matchAll(new RegExp(word, "g")),
    ]);
    const density = (hits.length / articleWordCount()) * 1000;
    expect(density, `${hits.length} occurrences`).toBeLessThanOrEqual(6);
  });

  /* ──────────────────────────────────────────────
     Prix maison : concordance avec la grille publiée
     ────────────────────────────────────────────── */

  it("cite les prix Hagnéré Code réellement publiés sur /tarifs", () => {
    const grid = pricingSource.replace(/(?:&nbsp;|[\s\u00a0\u202f])+/g, " ");
    for (const amount of ["2 000 € HT", "5 000 € HT", "8 k€ HT", "18 k€ HT"]) {
      expect(grid, `grille : ${amount}`).toContain(amount);
    }

    const text = prose(articleHtml());
    expect(text).toContain("2 000 € HT pour un audit flash");
    expect(text).toContain("5 000 € HT pour un cadrage sécurité et RGPD");
    expect(text).toContain("8 000 € HT");
    expect(text).toContain("18 000 € HT");
    expect(text).toContain("des repères indicatifs");
    expect(text).toContain("le devis signé fixe le prix ferme");
    expect(pageSource).toContain('href="/tarifs"');
  });

  /* ──────────────────────────────────────────────
     Maillage (§11.8)
     ────────────────────────────────────────────── */

  it("ne pointe que vers des guides publiés, et jamais vers lui-même", () => {
    const published = new Set(PUBLISHED_GUIDES.map((entry) => entry.slug));
    const targets = [
      ...pageSource.matchAll(
        /(?:href|ctaHref|primaryCtaHref)\s*[:=]\s*"\/guides\/([a-z0-9-]+)"/g,
      ),
    ].map((match) => match[1]);

    expect(targets.length).toBeGreaterThanOrEqual(6);
    for (const target of targets) {
      expect(published.has(target), target).toBe(true);
      // Deux renvois pointaient sur cette page elle-même sous les ancres
      // « définissez qui peut voir et modifier quoi » et « droits d'accès ».
      expect(target, target).not.toBe(guide.slug);
    }
    expect(new Set(targets).size).toBeGreaterThanOrEqual(4);

    // Une ancre annonçant un guide ne pointe jamais sur une page service.
    const serviceAnchors = [
      ...pageSource.matchAll(
        /<Link href="\/services\/[a-z0-9-]+">\s*([^<]*)</g,
      ),
    ].map((match) => match[1].trim());
    for (const anchor of serviceAnchors) {
      expect(anchor.toLowerCase(), anchor).not.toContain("guide");
    }
    // Le renvoi « Airtable ou Notion » pointait sur le guide Power Apps, qui ne
    // traite ni Airtable ni Notion : la promesse d'ancre doit tenir (§11.8).
    expect(pageSource).not.toContain("Airtable");
    expect(pageSource).not.toContain("prestataire sur preuves");
  });

  /* ──────────────────────────────────────────────
     Outil local
     ────────────────────────────────────────────── */

  it("garde l’outil local, sans score, sans envoi et hors temps de lecture", () => {
    expect(pageSource).toContain("<SecurityReadinessTool />");
    expect(toolSource).toContain('data-read-time-exclude="true"');
    expect(toolSource).not.toMatch(
      /\b(?:fetch|XMLHttpRequest|localStorage|sessionStorage|document\.cookie)\b/,
    );
    expect(toolSource).not.toContain('type="text"');
    expect(toolSource).not.toContain("<textarea");
    expect(toolSource).toContain('aria-live="polite"');
    expect(toolSource).toContain("<fieldset>");
    expect(toolSource).toContain("<legend");
    expect(toolCompact).toContain(
      "aucune réponse ne quitte la page ni n’est enregistrée durablement par cet outil",
    );
    expect(toolCompact).toContain("Aucun score n’est calculé");
    expect(toolSource.match(/\bmin-h-11\b/g)?.length).toBeGreaterThanOrEqual(3);

    // Les huit sujets de l'outil restent nommés dans la logique ; quatre
    // d'entre eux sont précisément les quatre mesures du corps.
    for (const controlId of [
      "assetsAndImpact",
      "accessAndSecrets",
      "deliveryAndDependencies",
      "backupAndRestore",
      "loggingAndDetection",
      "incidentResponse",
      "maintenance",
      "responsibilities",
    ]) {
      expect(logicSource, controlId).toContain(controlId);
    }
    expect(prose(articleHtml())).toContain(
      "Restent les conséquences métier, la conduite d’un incident, la maintenance après la mise en service et les responsabilités",
    );
  });

  it("garde le vocabulaire de production interne hors du corps de l’article", () => {
    // Périmètre volontaire : le corps rédigé. L'outil local emploie « STOP »
    // comme libellé visible d'un état bloquant, ce qui est son vocabulaire
    // d'écran et non celui de l'article.
    const visibleText = articleText();
    for (const marker of [
      /\bstop\b/iu,
      /à\s+sourcer/iu,
      /\bno_go\b/iu,
      /\bgate\b/iu,
      /\bpasse\s+[1-4]\b/iu,
      /\bhash\b/iu,
      /hagnere-code\.fr/iu,
      /\bpasse\s+de\s+plume\b/iu,
    ]) {
      expect(visibleText, marker.source).not.toMatch(marker);
    }
  });

  it("n’écrit aucun échappement dans un attribut JSX", () => {
    // Un `\u00a0` placé dans `caption="…"` n'est pas interprété : JSX ne traite
    // pas les échappements dans les valeurs d'attribut littérales, et la chaîne
    // s'affiche telle quelle au lecteur. Le défaut est apparu sur la légende du
    // tableau des dépendances.
    let inString = false;
    let start = -1;
    const offenders: string[] = [];
    for (let i = 0; i < pageSource.length; i += 1) {
      const character = pageSource[i];
      if (character === "\\" && inString) {
        i += 1;
        continue;
      }
      if (character !== '"') continue;
      if (!inString) {
        inString = true;
        start = i;
        continue;
      }
      inString = false;
      const body = pageSource.slice(start + 1, i);
      if (body.includes("\\u00a0") && pageSource[start - 1] === "=") {
        offenders.push(body.slice(0, 60));
      }
    }
    expect(offenders, offenders.join("\n")).toHaveLength(0);
    expect(readerVisibleText(articleHtml())).not.toContain("u00a0");
  });

  /* ──────────────────────────────────────────────
     Illustrations : le schéma doit dire ce que le texte dit
     ────────────────────────────────────────────── */

  it("livre trois ratios éditoriaux en SVG et WebP, tous accessibles", () => {
    for (const file of [...svgPaths, ...webpPaths]) {
      expect(existsSync(file), file).toBe(true);
    }
    expect(svgSources[0]).toMatch(
      /width="1600" height="900" viewBox="0 0 1600 900"/,
    );
    expect(svgSources[1]).toMatch(
      /width="1200" height="900" viewBox="0 0 1200 900"/,
    );
    expect(svgSources[2]).toMatch(
      /width="1000" height="1000" viewBox="0 0 1000 1000"/,
    );
    expect(pageSource).toContain(
      "/guides/securite-application-metier/socle-securite-16x9.webp",
    );
  });

  it("n’affiche plus dans l’image un vocabulaire que le texte a supprimé", () => {
    // Le schéma affichait « Socle de sécurité », « Une chaîne de preuves, pas
    // un score » et « STOP », pendant que le lexique interdit du corps bannit
    // « socle » et que le texte ne dit plus rien de tel : l'image contredisait
    // la page. Elle porte désormais les quatre mesures elles-mêmes.
    for (const source of svgSources) {
      const visible = [...source.matchAll(/<(?:text|title|desc)[^>]*>([^<]+)</g)]
        .map((match) => match[1])
        .join(" | ");
      for (const forbidden of ["Socle", "socle", "STOP", "chaîne de preuves"]) {
        expect(visible, `${forbidden} — ${visible.slice(0, 80)}`).not.toContain(
          forbidden,
        );
      }
      for (const expected of [
        "MESURE 1",
        "MESURE 2",
        "MESURE 3",
        "MESURE 4",
        "Restauration",
        "Alerte",
        "Compte témoin",
        "Dépendances",
      ]) {
        expect(visible, expected).toContain(expected);
      }
    }
    // L'attribut alt annonce ce que le lecteur d'écran doit recevoir : les
    // quatre mesures, pas l'angle abandonné de la « chaîne de preuves ».
    const alt = pageSource.match(/alt="([^"]+)"/)?.[1] ?? "";
    expect(alt).toContain("Les quatre mesures avant la mise en service");
    expect(alt).toContain("restauration chronométrée");
    expect(alt).not.toContain("chaîne de preuves");
    // …et le corps ne porte plus le paragraphe qui n'existait que pour couvrir
    // l'ancienne image.
    expect(prose(articleHtml())).not.toContain(
      "prévenir, détecter, reprendre et répondre",
    );
  });

  /* ──────────────────────────────────────────────
     FAQ (§6.8)
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

    const h2Texts = [...articleHtml().matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g)]
      .map((match) => readerVisibleText(match[1]).toLowerCase())
      .filter(Boolean);

    for (const question of questions) {
      expect(question.trim().endsWith("?"), question).toBe(true);
      expect(
        h2Texts.includes(question.replace(/\\u00a0/g, " ").toLowerCase()),
        question,
      ).toBe(false);
    }

    // §9.2 : la symétrie binaire « Non. » / « Oui, mais » était portée par
    // sept réponses sur neuf dans la version auditée.
    const binaryOpeners = answers.filter((answer) =>
      /^(?:Non|Oui)\b/.test(answer),
    ).length;
    expect(binaryOpeners / answers.length).toBeLessThanOrEqual(0.34);

    for (const answer of answers) {
      const words = answer.split(/\s+/).filter(Boolean).length;
      expect(words, answer.slice(0, 50)).toBeGreaterThanOrEqual(40);
      expect(words, answer.slice(0, 50)).toBeLessThanOrEqual(120);
    }

    // La FAQ compte les heures d'arrêt comme le corps : en heures ouvrées.
    expect(faqBlock).toContain("quatre heures ouvrées d’arrêt");
  });

  it("traite explicitement la requête cible", () => {
    const text = prose(articleHtml()).toLowerCase();
    expect(text).toContain("application métier");
    expect((text.match(/restaur/g) ?? []).length).toBeGreaterThanOrEqual(10);
    expect((text.match(/alerte/g) ?? []).length).toBeGreaterThanOrEqual(10);
  });
});
