import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { getGuide, PUBLISHED_GUIDES } from "@/lib/guides";
import { getLegacyGuideDestination } from "@/lib/legacy-guide-redirects";
import Page, { metadata } from "./page";
import {
  calculateTcoComparison,
  createIncarnatedCaseTcoOptions,
  CASE_CARE_MONTHLY_EUR,
  CASE_INTERNAL_DAY_RATE_EUR,
  CASE_STARTER_BUILD_EUR,
} from "./power-apps-decision-model";

const slugDirectory = dirname(fileURLToPath(import.meta.url));
const repositoryRoot = resolve(slugDirectory, "../../../..");
const pageSource = readFileSync(resolve(slugDirectory, "page.tsx"), "utf8");
const modelSource = readFileSync(
  resolve(slugDirectory, "power-apps-decision-model.ts"),
  "utf8",
);
const workbenchSource = readFileSync(
  resolve(slugDirectory, "power-apps-decision-workbench.tsx"),
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
const normalizedPage = pageSource.replace(/\s+/g, " ");
const renderedPage = renderToStaticMarkup(Page());
const powerAppsGuide = getGuide("power-apps-ou-application-sur-mesure");
const structuredData = [
  ...renderedPage.matchAll(
    /<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g,
  ),
].map((match) => JSON.parse(match[1]) as Record<string, unknown>);

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

function articleText() {
  return articleHtml()
    .replace(
      /<(script|style|template|noscript|svg)\b[^>]*>[\s\S]*?<\/\1>/gi,
      " ",
    )
    .replace(/<[^>]+>/g, " ")
    .replace(/&#(?:x[0-9a-f]+|[0-9]+);/gi, " ")
    .replace(
      /&(?:nbsp|ensp|emsp|amp|apos|rsquo|lsquo|quot|ldquo|rdquo|ndash|mdash|euro);/gi,
      " ",
    )
    .replace(/&[a-z]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function articleWordCount() {
  return (
    articleText().match(/[\p{L}\p{N}]+(?:[’'\-][\p{L}\p{N}]+)*/gu)
      ?.length ?? 0
  );
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
 * `readerVisibleText` normalise tout blanc en espace ordinaire, ce qui rend
 * la vérification typographique impossible : U+00A0 fait partie de `\s`.
 */
function typographicText(html: string) {
  return html
    .replace(
      /<(script|style|template|noscript|svg)\b[^>]*>[\s\S]*?<\/\1>/gi,
      " ",
    )
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&#(?:160|xa0);/gi, "\u00a0")
    .replace(/&amp;/gi, "&")
    .replace(/&(?:rsquo|apos);/gi, "’")
    .replace(/&(?:ndash|mdash);/gi, "—")
    .replace(/&euro;/gi, "€")
    .replace(/&[a-z]+;/gi, " ")
    .replace(/[ \t\r\n]+/g, " ")
    .trim();
}

/**
 * Texte lisible, insécables ramenés à des espaces ordinaires.
 *
 * Les assertions de contenu se lisent alors comme la phrase publiée, sans
 * qu’un insécable invisible fasse échouer une comparaison exacte.
 */
function prose(html: string) {
  return typographicText(html).replace(/[\u00a0\u202f]/g, " ");
}

describe("content quality for Power Apps or custom application guide", () => {
  it("keeps the title, visible H1 and Article headline identical", () => {
    const expectedHeadline =
      "Power Apps ou application sur mesure : comment choisir ?";
    const h1Markup = renderedPage.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1];
    const h1Text = readerVisibleText(h1Markup ?? "");

    expect(powerAppsGuide.title).toBe(expectedHeadline);
    expect(h1Text).toBe(expectedHeadline);
    expect(structuredData[0]).toMatchObject({ headline: expectedHeadline });
    expect(pageSource).toContain(
      'heroTitle={"Power Apps ou application sur mesure\\u00a0:"}',
    );
    expect(pageSource).toContain(
      'heroTitleEm={"comment\\u00a0choisir\\u00a0?"}',
    );
  });

  it("ne répète jamais le H1 dans un H2 de l’article", () => {
    // §6.5 du protocole : le titre de couverture ne reprend aucun titre de
    // section. La version 3,5/10 ouvrait sur « Power Apps ou sur mesure : la
    // bonne réponse dépend de preuves », deux écrans sous un H1 quasi
    // identique.
    const h2Texts = [...articleHtml().matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g)]
      .map((match) => readerVisibleText(match[1]).toLowerCase())
      .filter((text) => text !== "");

    expect(h2Texts.length).toBeGreaterThanOrEqual(6);
    for (const h2 of h2Texts) {
      expect(h2, h2).not.toContain("power apps ou application sur mesure");
      expect(h2, h2).not.toContain("power apps ou sur mesure");
    }
  });

  it("tient le calibre requalifié en méthode", () => {
    // §5.3 du protocole. Le titre est comparatif — « X ou Y », donc 2 500 à
    // 3 500 mots — mais le contenu ne l'est plus : le guide porte une méthode
    // de migration en cinq étapes, un atelier de décision et une procédure de
    // sortie chiffrée dans les deux sens. C'est la bande « Méthode / parcours »,
    // 3 000 à 4 200 mots, que la version tenue ici respecte.
    //
    // Le §5.3 autorise explicitement ce choix : « Dépassement au-delà de 15 % :
    // on coupe, on scinde, ou on requalifie par écrit. » Requalification écrite
    // le 28 août 2026, après relecture : aucune coupe de 400 mots n'était
    // possible sans retirer de l'arithmétique vérifiée — le point de bascule à
    // 141 utilisateurs, sa sensibilité à 68 puis 11, et le chiffrage des deux
    // sorties. La version auditée pesait 8 381 mots, plus du double de celle-ci.
    const words = articleWordCount();
    expect(words).toBeGreaterThanOrEqual(3000);
    expect(words).toBeLessThanOrEqual(4200);
  });

  it("mesure un temps de lecture cohérent avec la longueur réelle", () => {
    // Le registre `src/lib/guides.ts` est hors du dossier du guide : il porte
    // encore `readTimeMin: 27`, hérité des 8 381 mots de la version auditée.
    // Ce test verrouille la valeur mesurée ; la mise à jour du registre est
    // signalée au propriétaire du site et n’appartient pas à ce dossier.
    const measured = Math.max(1, Math.round(articleWordCount() / 200));
    expect(measured).toBeGreaterThanOrEqual(14);
    expect(measured).toBeLessThanOrEqual(21);
    // Le hero n’affiche plus `readTimeMin` : annoncer 27 min sur un article de
    // ce calibre serait faux tant que le registre n’est pas repris.
    expect(pageSource).not.toContain("powerAppsGuide.readTimeMin");
  });

  it("publishes the approved guide through the central registry", () => {
    expect(powerAppsGuide.editorialStatus).toBe("published");
    expect(
      PUBLISHED_GUIDES.some((guide) => guide.slug === powerAppsGuide.slug),
    ).toBe(true);
    // A local or preview build remains private; production enables indexing.
    expect(metadata.robots).toMatchObject({ index: false, follow: false });
    expect(metadata.alternates?.canonical).toBe(
      "https://hagnere-code.ai/guides/power-apps-ou-application-sur-mesure",
    );
    expect(metadata.openGraph).toMatchObject({
      publishedTime: "2026-07-23T21:31:02+02:00",
      modifiedTime: powerAppsGuide.dateModified,
    });
    expect(getLegacyGuideDestination(powerAppsGuide.slug)).toBeNull();
    expect(pageSource).toContain(
      'getGuide("power-apps-ou-application-sur-mesure")',
    );
  });

  it("emits only Article and BreadcrumbList structured data", () => {
    expect(structuredData.map((item) => item["@type"])).toEqual([
      "Article",
      "BreadcrumbList",
    ]);
    expect(structuredData[0]).toMatchObject({
      datePublished: "2026-07-23T21:31:02+02:00",
      dateModified: powerAppsGuide.dateModified,
    });
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
      ["power-apps-decision-model.ts", modelSource],
      ["power-apps-decision-workbench.tsx", workbenchSource],
    ] as const) {
      expect(/[\u00a0\u202f\u2009]/.test(source), name).toBe(false);
    }
  });

  it("pose un insécable avant chaque ponctuation double du corps", () => {
    const text = typographicText(articleHtml());
    const offenders = [...text.matchAll(/.{0,40}[^\s] [?!;»].{0,20}/g)]
      .map((match) => match[0])
      // Les blocs de formule Power Fx sont du code, pas de la prose française.
      .filter((extract) => !extract.includes("Filter("));

    expect(offenders, offenders.join("\n")).toHaveLength(0);
  });

  it("colle les nombres à leur unité et sépare les milliers", () => {
    const text = typographicText(articleHtml());

    // Aucun montant en euros avec une espace ordinaire.
    expect([...text.matchAll(/\d €/g)].map((m) => m[0])).toHaveLength(0);
    // Aucun pourcentage avec une espace ordinaire.
    expect([...text.matchAll(/\d %/g)].map((m) => m[0])).toHaveLength(0);
    // Aucun nombre de quatre chiffres ou plus collé, hors années.
    const glued = [...text.matchAll(/\b\d{4,}\b/g)]
      .map((m) => m[0])
      .filter((value) => !/^20\d\d$/.test(value));
    expect(glued, glued.join(", ")).toHaveLength(0);
  });

  it("n’emploie que des apostrophes courbes et des guillemets français", () => {
    const text = typographicText(articleHtml());
    expect(text).not.toMatch(/[a-zàâäéèêëîïôöùûüç]'[a-zàâäéèêëîïôöùûüç]/i);
    expect(text).not.toContain('"');
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
    expect(prose(answer ?? "")).toMatch(/17,30 €/);
    expect(prose(answer ?? "")).toMatch(/8 000 €/);
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

  it("ne dépasse pas quatre tableaux, tous porteurs de chiffres", () => {
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

  it("tient au moins dix valeurs chiffrées pour mille mots", () => {
    // §6.2. La densité se mesure sur les valeurs informatives : les numéros de
    // section, le numéro de téléphone et les millésimes sont retirés.
    const text = prose(articleHtml())
      .replace(/\b20\d\d\b/g, " ")
      .replace(/0\d(?: \d\d){4}/g, " ");
    const values = text.match(/\d+(?:[,.]\d+)?(?: \d{3})*/g) ?? [];
    const density = (values.length / articleWordCount()) * 1000;

    expect(density, `${values.length} valeurs`).toBeGreaterThanOrEqual(10);
  });

  it("raconte trois incidents portant chacun un montant ou une durée", () => {
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
    for (const fact of [
      "4 180 €",
      "quatre jours ouvrés",
      "six jours",
      "2 100 €",
    ]) {
      expect(prose(incidents ?? ""), fact).toContain(fact);
    }
  });

  it("annonce son cas comme construit et nomme des métiers, pas des cases", () => {
    const text = prose(articleHtml());
    expect(text).toContain(
      // L'ancienne formule affirmait une provenance qui n'existait pas :
      // aucune fourchette de ce guide ne fonde l'effectif, la ville, le nombre
      // d'utilisateurs ni le volume de la liste. Relevé à la relecture du
      // 31/08/2026, après la même correction sur signes-besoin-logiciel-metier.
      "Exemple construit : l’entreprise, son effectif, sa ville, le nombre d’utilisateurs et le volume de la liste sont choisis pour l’exemple et ne viennent d’aucune source ; seuls les prix de licence Microsoft et les montants de notre grille publiée sont repris de sources citées.",
    );
    expect(text).toContain("Ce n’est pas un dossier client");

    for (const job of [
      "responsable administrative",
      "contrôleur de gestion",
      "administrateur Microsoft",
      "chefs d’atelier",
      "développeur",
      "expert-comptable",
      "technicien de maintenance",
      "DSI",
    ]) {
      expect(text, job).toContain(job);
    }
    // §6.4 : ces mots ne sont pas des personnes.
    expect(text).not.toMatch(/\b(?:le|un|les|des) prestataires?\b/i);
    expect(text).not.toMatch(/\b(?:le|un|les|des) intervenants?\b/i);
  });

  it("ne porte qu’un bloc de transparence et qu’un appel à l’action en ligne", () => {
    const text = prose(articleHtml());
    expect((text.match(/Transparence\./g) ?? []).length).toBe(1);
    expect(text).toContain(
      "Hagnéré Code développe des applications métier sur mesure et perçoit des honoraires",
    );
    expect(text).toContain("Les prix Microsoft et notre grille ont été relevés");
    expect(text).toContain("à revérifier tous les douze mois");
    expect(
      (pageSource.match(/<TrackedGuideCtaLink/g) ?? []).length,
    ).toBe(1);
  });

  it("garde intact le passage qui ne sert pas le commerce", () => {
    const text = prose(articleHtml());
    expect(text).toContain("Conserver Power Apps peut être la bonne décision");
    expect(text).toContain(
      "sur le seul terrain du prix, garder Power Apps gagne de très loin",
    );
    expect(pageSource).not.toMatch(
      /score de maturité|score sur 100|algorithme propriétaire/i,
    );
  });

  it("expose les cinq issues sans en privilégier une", () => {
    const outcomesBlock = pageSource.match(
      /const outcomes = \[([\s\S]*?)\] as const;/,
    )?.[1];
    expect(outcomesBlock).toBeDefined();
    expect(outcomesBlock?.match(/status:/g)).toHaveLength(5);
    for (const status of [
      "DÉCISION EN ATTENTE",
      "CONSERVER",
      "RENFORCER",
      "HYBRIDE",
      "RECONSTRUIRE",
    ]) {
      expect(outcomesBlock, status).toContain(`status: "${status}"`);
    }
  });

  /* ──────────────────────────────────────────────
     Fond : la règle du connecteur, les seuils, la bascule
     ────────────────────────────────────────────── */

  it("énonce la règle du connecteur et la chiffre sur le cas", () => {
    const text = prose(articleHtml());
    for (const fact of [
      "connecteurs standard",
      "connecteur personnalisé",
      "passerelle vers un serveur local",
      "SQL Server",
      "17,30 €",
      "9 × 17,30 € × 12",
      "1 868,40 € HT par an",
      "1 038 €",
      "multiplexing",
      "La page 25",
      "accès soit direct ou indirect",
    ]) {
      expect(text, fact).toContain(fact);
    }
    expect(text).toContain("10,40 €");
    expect(text).toContain("34,70 €");
    expect(text).toContain("10 USD");
    expect(text).toContain("janvier 2026");
    expect(text).toContain("réservé au développement et au test");
    expect(text).toContain("28 août 2026");
  });

  it("nomme Power Fx, Dataverse et les trois familles d’applications", () => {
    const text = prose(articleHtml());
    for (const term of [
      "Power Fx",
      "Dataverse",
      "application canevas",
      "application pilotée par modèle",
      "Power Pages",
    ]) {
      expect(text, term).toContain(term);
    }
  });

  it("sépare les trois seuils et rend la délégation reproductible", () => {
    const text = prose(articleHtml());
    for (const fact of [
      "30 millions",
      "5 000",
      "500, réglable de 1 à 2 000",
      "Lower(Statut)",
      "ligne bleue ondulée",
      "triangle jaune",
      "StartsWith",
      "limite de lignes de données",
    ]) {
      expect(text, fact).toContain(fact);
    }
    // La source ne promet pas que l’index lève le seuil : ne pas le promettre.
    expect(text).toContain("sans promettre qu’elles lèvent le seuil");
    expect(text).not.toContain("limite Power Apps à 2 000 lignes");
  });

  it("traite le hors-ligne et l’accessibilité sans les surpromettre", () => {
    const text = prose(articleHtml());
    expect(text).toContain("Dataverse et l’application mobile Power Apps");
    expect(text).toContain("exclut les connecteurs autres que Dataverse");
    expect(text).toContain("flux Power Automate");
    expect(text).toContain("sans démontrer le respect des WCAG ni du RGAA");
  });

  it("chiffre la sortie dans les deux sens", () => {
    const text = prose(articleHtml());
    expect(text).toContain("Quitter Power Apps suppose de reconstruire");
    expect(text).toContain("9 490 €");
    expect(text).toContain("Quitter une application sur mesure");
    expect(text).toContain("six jours de transfert");
    expect(text).toContain("2 100 €");
    expect(text).toContain("l’hébergement, facturé tous les mois");
    expect(text).toContain("montées de version");
    // La double exploitation ne se décrit plus sans montant.
    expect(text).toContain("440 €");
    expect(text).toContain("155,70 € par mois");
  });

  /* ──────────────────────────────────────────────
     Cohérence arithmétique : le guide contre le modèle
     ────────────────────────────────────────────── */

  it("affiche exactement les totaux que le modèle recalcule", () => {
    const results = calculateTcoComparison(createIncarnatedCaseTcoOptions());
    const powerApps = results.find(
      (result) => result.key === "current-power-apps",
    );
    const dedicated = results.find((result) => result.key === "dedicated");

    expect(powerApps?.complete).toBe(true);
    expect(dedicated?.complete).toBe(true);

    const euros = (value: number | null | undefined) =>
      new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 0 })
        .format(Math.round(value ?? Number.NaN))
        .replace(/[\u00a0\u202f]/g, " ");

    const text = prose(articleHtml());
    expect(euros(powerApps?.totalsEur[5])).toBe("30 732");
    expect(euros(dedicated?.totalsEur[5])).toBe("166 840");
    expect(text).toContain(`${euros(powerApps?.totalsEur[5])} €`);
    expect(text).toContain(`${euros(dedicated?.totalsEur[5])} €`);
    expect(text).toContain(`${euros(powerApps?.totalsEur[1])} €`);
    expect(text).toContain(`${euros(dedicated?.totalsEur[1])} €`);
    expect(text).toContain(`${euros(powerApps?.totalsEur[3])} €`);
    expect(text).toContain(`${euros(dedicated?.totalsEur[3])} €`);
  });

  it("retrouve le point de bascule par balayage, pas par la formule du guide", () => {
    // Méthode différente de celle du corps : le guide résout une équation
    // linéaire, le contrôle balaie utilisateur par utilisateur.
    const results = calculateTcoComparison(createIncarnatedCaseTcoOptions());
    const dedicatedFiveYears =
      results.find((result) => result.key === "dedicated")?.totalsEur[5] ?? 0;
    const day = CASE_INTERNAL_DAY_RATE_EUR;
    const fixedFiveYears =
      4 * day + (CASE_STARTER_BUILD_EUR + 3 * day + 440) + 0.5 * day * 60;

    let tipping = 0;
    for (let users = 1; users <= 5000; users += 1) {
      if (fixedFiveYears + users * 17.3 * 60 > dedicatedFiveYears) {
        tipping = users;
        break;
      }
    }

    expect(tipping).toBe(141);
    expect(prose(articleHtml())).toContain("141 utilisateurs");

    // Sensibilité : forfait de maintenance divisé par deux, puis maintenance
    // interne d’un jour par mois sans forfait.
    const dedicatedHalfCare =
      dedicatedFiveYears - (CASE_CARE_MONTHLY_EUR / 2) * 60;
    const dedicatedInternal =
      CASE_STARTER_BUILD_EUR + 3 * day + 440 + 6 * day + day * 60;

    const scan = (target: number) => {
      for (let users = 1; users <= 5000; users += 1) {
        if (fixedFiveYears + users * 17.3 * 60 > target) return users;
      }
      return 0;
    };

    expect(scan(dedicatedHalfCare)).toBe(68);
    expect(scan(dedicatedInternal)).toBe(11);
    const text = prose(articleHtml());
    expect(text).toContain("68 utilisateurs");
    expect(text).toContain("11 utilisateurs");
  });

  it("rend visibles les deux hypothèses non sourcées", () => {
    const text = prose(articleHtml());
    expect(text).toContain("350 € le jour chargé");
    expect(text).toContain("six semaines de double exploitation");
    expect(text).toContain(
      "Aucun des deux ne sort d’une source : ce sont des hypothèses",
    );
    expect(modelSource).toContain("CASE_INTERNAL_DAY_RATE_EUR = 350");
  });

  /* ──────────────────────────────────────────────
     Prix maison : concordance avec la grille publiée
     ────────────────────────────────────────────── */

  it("cite les prix Hagnéré Code réellement publiés sur /tarifs", () => {
    // Modèle repris de guides-price-consistency.test.ts : la grille reste la
    // source de vérité, le guide doit la suivre.
    const grid = pricingSource.replace(/(?:&nbsp;|[\s\u00a0\u202f])+/g, " ");
    for (const amount of [
      "990 € HT",
      "1 500 € HT",
      "8 k€ HT",
      "25 k€ HT",
      "80 k€ HT",
    ]) {
      expect(grid, `grille : ${amount}`).toContain(amount);
    }
    expect(grid).toContain("≈ 2 500 € HT / mois");

    const text = prose(articleHtml());
    expect(text).toContain("8 000 € HT");
    expect(text).toContain("25 000 € HT");
    expect(text).toContain("80 000 € HT");
    expect(text).toContain("1 500 € HT");
    expect(text).toContain("2 500 € HT par mois");
    expect(text).toContain("repères publics et indicatifs");
    expect(text).toContain("le devis signé fixe le prix ferme");
    expect(pageSource).toContain('href="/tarifs"');
  });

  /* ──────────────────────────────────────────────
     Style (§9.2) et maillage (§11.8)
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
    ]) {
      expect(text, tic).not.toContain(tic);
    }
  });

  it("ne pointe que vers des guides qui tiennent leur promesse", () => {
    const published = new Set(PUBLISHED_GUIDES.map((guide) => guide.slug));
    const targets = [
      ...pageSource.matchAll(
        /(?:href|ctaHref|primaryCtaHref)\s*[:=]\s*"\/guides\/([a-z0-9-]+)"/g,
      ),
    ].map((match) => match[1]);

    expect(targets.length).toBeGreaterThanOrEqual(6);
    for (const target of targets) {
      expect(published.has(target), target).toBe(true);
      // Le renvoi vers soi-même a existé sous l’ancre « Airtable, Notion ou
      // application métier », qui pointait sur cette page.
      expect(target).not.toBe(powerAppsGuide.slug);
    }
    expect(new Set(targets).size).toBeGreaterThanOrEqual(6);

    // Une ancre qui annonce un guide ne pointe jamais sur une page service.
    const serviceAnchors = [
      ...pageSource.matchAll(
        /<Link href="\/services\/[a-z0-9-]+">\s*([^<]*)</g,
      ),
    ].map((match) => match[1].trim());
    for (const anchor of serviceAnchors) {
      expect(anchor.toLowerCase(), anchor).not.toContain("guide");
    }
  });

  it("garde la section 06 hors du corps historique supprimé", () => {
    // Les 3 000 mots de protocole d’audit — « cinq tests de preuve » et
    // « cinq scénarios fictifs » — ne reviennent pas par imitation.
    for (const residue of [
      "Cinq tests pour séparer",
      "Scénario fictif composite",
      "Comment la même situation peut produire plusieurs conclusions",
      "La preuve minimale attendue pour chaque axe",
      "Quatre familles à confronter au même besoin",
      "Portée des principales familles de sources",
      "Airtable, Notion ou application métier",
      "diagnostic en trois situations",
      "comment choisir un prestataire sur preuves",
    ]) {
      expect(pageSource, residue).not.toContain(residue);
    }
  });

  /* ──────────────────────────────────────────────
     Atelier de décision
     ────────────────────────────────────────────── */

  it("ouvre l’atelier sur un calcul résolu, avec retour à la feuille vierge", () => {
    expect(pageSource).toContain("<PowerAppsDecisionWorkbench");
    expect(pageSource).toContain(
      "initialDecisionInputs={createIncarnatedCaseDecisionInputs()}",
    );
    expect(pageSource).toContain(
      "initialTcoOptions={createIncarnatedCaseTcoOptions()}",
    );
    expect(workbenchSource).toContain("Repartir d’une feuille vierge");
    expect(workbenchSource).toContain("resetToBlankSheet");
    expect(renderedPage).not.toContain("Décision suspendue");
  });

  it("garde l’atelier local, bloquant et sans persistance", () => {
    expect(modelSource).toContain('status: "STOP_MISSING_EVIDENCE"');
    expect(modelSource).toContain("candidateTotalsEur");
    expect(modelSource).toContain("validateCalculatedAmount");
    expect(modelSource).toContain("validateRequiredIntegerQuantity");
    expect(modelSource).toContain("validateRequiredNumericValue");
    expect(modelSource).toContain("Number.MAX_SAFE_INTEGER");
    expect(modelSource).toContain("publicPaygUsdPerActiveUserAppMonth: 10");
    expect(workbenchSource).toContain('data-read-time-exclude="true"');
    expect(workbenchSource).toContain("navigator.clipboard.writeText");
    expect(workbenchSource).toContain("window.print()");
    expect(workbenchSource).toContain('data-tco-mobile-results="true"');
    expect(workbenchSource).toContain('data-tco-desktop-results="true"');
    expect(workbenchSource).toContain("w-full table-fixed");
    expect(workbenchSource).not.toContain("overflow-x-auto");
    expect(modelSource).toContain("collectBlockingFailures");
    expect(workbenchSource.match(/role="status"/g)).toHaveLength(1);
    expect(workbenchSource).not.toMatch(
      /localStorage|sessionStorage|indexedDB/,
    );
    expect(workbenchSource).not.toMatch(/download\s*=|\.xlsx?\b|\.csv\b/i);
    expect(workbenchSource).not.toContain("<form");
  });

  it("keeps internal production vocabulary out of reader-visible text", () => {
    const visibleText = readerVisibleText(renderedPage);
    const forbiddenMarkers = [
      /\bstop\b/iu,
      /à\s+sourcer/iu,
      /\bno_go\b/iu,
      /\bgate\b/iu,
      /\bpasse\s+[1-4]\b/iu,
      /\bhash\b/iu,
      /\b(?:case|model)[-_][a-z0-9-]+\b/iu,
    ];

    for (const marker of forbiddenMarkers) {
      expect(visibleText, marker.source).not.toMatch(marker);
    }
  });

  it("uses three dedicated, accessible SVG ratios and a dynamic OG image", () => {
    const illustrations = [
      ["article-power-apps-16x9.svg", 'width="1600" height="900"'],
      ["article-power-apps-4x3.svg", 'width="1200" height="900"'],
      ["article-power-apps-1x1.svg", 'width="1200" height="1200"'],
    ] as const;

    for (const [fileName, dimensions] of illustrations) {
      const source = readFileSync(
        resolve(repositoryRoot, "public/guides", powerAppsGuide.slug, fileName),
        "utf8",
      );
      expect(source, fileName).toContain(dimensions);
      expect(source, fileName).toContain('role="img"');
      expect(source, fileName).toContain("aria-labelledby");
      expect(source, fileName).toContain("<title");
      expect(source, fileName).toContain("<desc");
    }

    expect(ogSource).toContain("createGuideOgImage");
    expect(ogSource).toContain("width: 1200, height: 630");
  });

  it("keeps commercial links compatible with a keep-Power-Apps conclusion", () => {
    expect(pageSource).toContain(
      'primaryCtaHref: "/services/outils-internes-sur-mesure"',
    );
    expect(pageSource).toContain('ctaHref: "/demarrer-un-projet"');
    expect(pageSource).toContain('secondaryLabel: "03 74 47 20 18"');
    expect(pageSource).toContain('secondaryHref: "tel:+33374472018"');
    expect(pageSource).toContain(
      '"Vous hésitez entre renforcer Power Apps et reconstruire\\u00a0?"',
    );
    expect(renderedPage).toContain('href="tel:+33374472018"');
    expect(renderedPage).toContain('aria-label="Appeler 03 74 47 20 18"');
    expect(normalizedPage).toContain(
      "Le premier échange peut conclure qu’il faut conserver ou renforcer Power Apps",
    );
    expect(powerAppsGuide.title.length).toBeLessThanOrEqual(60);
    expect(powerAppsGuide.metaDescription.length).toBeLessThanOrEqual(155);
  });

  it("garde une FAQ de six à dix questions, distinctes des H2", () => {
    const faqBlock = pageSource.match(
      /const faqCategories: GuidePremiumFaqCategory\[\] = \[([\s\S]*?)\n\];/,
    )?.[1];
    expect(faqBlock).toBeDefined();
    const questions = [...(faqBlock ?? "").matchAll(/question:\s*\n?\s*"([^"]+)"/g)]
      .map((match) => match[1]);

    expect(questions.length).toBeGreaterThanOrEqual(6);
    expect(questions.length).toBeLessThanOrEqual(10);
    for (const question of questions) {
      expect(question.trim().endsWith("?"), question).toBe(true);
    }

    // §9.2 : la symétrie binaire « Non. » / « Oui, mais » était portée par
    // neuf réponses sur douze dans la version auditée.
    const answers = [...(faqBlock ?? "").matchAll(/answer:\s*\n?\s*"([^"]+)"/g)]
      .map((match) => match[1]);
    expect(answers).toHaveLength(questions.length);
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
    const text = prose(articleHtml());
    expect(text.toLowerCase()).toContain(
      "power apps ou application sur mesure",
    );
    expect((text.match(/Power Apps/g) ?? []).length).toBeGreaterThanOrEqual(20);
  });
});
