import { existsSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { getGuide } from "@/lib/guides";
import {
  assessPriorityWorkshop,
  compatibleDecisionsForRoute,
  createPilotFiveRequests,
  createPilotOverCapacity,
  isCapacityCountableRequest,
  isDecisionCompatibleWithRoute,
  priorityStatuses,
} from "./priority-workshop-engine";
import { PriorityWorkshopTool } from "./priority-workshop-tool";
import Page, { metadata } from "./page";

const slugDirectory = dirname(fileURLToPath(import.meta.url));
const repositoryRoot = resolve(slugDirectory, "../../../..");
const publicDirectory = resolve(
  repositoryRoot,
  "public/guides/prioriser-fonctionnalites-mvp-saas",
);

const pagePath = resolve(slugDirectory, "page.tsx");
const ogPath = resolve(slugDirectory, "opengraph-image.tsx");
const enginePath = resolve(slugDirectory, "priority-workshop-engine.ts");
const toolPath = resolve(slugDirectory, "priority-workshop-tool.tsx");
const researchPath = resolve(
  repositoryRoot,
  "docs/research/prioriser-fonctionnalites-mvp-saas.md",
);
const freezePath = resolve(
  repositoryRoot,
  "docs/research/prioriser-fonctionnalites-mvp-saas-input-freeze.md",
);
const svgPaths = [
  resolve(publicDirectory, "demandes-preuves-voies-16x9.svg"),
  resolve(publicDirectory, "lot-dependances-capacite-4x3.svg"),
  resolve(publicDirectory, "revue-humaine-decisions-1x1.svg"),
];
const webpPaths = [
  resolve(publicDirectory, "demandes-preuves-voies-16x9.webp"),
  resolve(publicDirectory, "lot-dependances-capacite-4x3.webp"),
  resolve(publicDirectory, "revue-humaine-decisions-1x1.webp"),
];

const pageSource = readFileSync(pagePath, "utf8");
const ogSource = readFileSync(ogPath, "utf8");
const engineSource = readFileSync(enginePath, "utf8");
const toolSource = readFileSync(toolPath, "utf8");
const researchSource = readFileSync(researchPath, "utf8");
const freezeSource = readFileSync(freezePath, "utf8");
const svgSources = svgPaths.map((path) => readFileSync(path, "utf8"));
const pageMarkup = renderToStaticMarkup(createElement(Page));
const toolMarkup = renderToStaticMarkup(createElement(PriorityWorkshopTool));
const pageCompact = pageSource.replace(/\s+/g, " ");
const publicCopy = [pageSource, ogSource, engineSource, toolSource].join("\n");
const structuredData = [
  ...pageMarkup.matchAll(
    /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g,
  ),
].map((match) => JSON.parse(match[1] ?? "{}") as Record<string, unknown>);
const registeredGuide = getGuide("prioriser-fonctionnalites-mvp-saas");

describe("public content quality for the SaaS prioritization guide", () => {
  it("aligns the natural-search metadata, H1 and central noindex entry", () => {
    const article = structuredData.find((item) => item["@type"] === "Article");
    const h1 = decodeHtmlText(
      pageMarkup.match(/<h1\b[^>]*>[\s\S]*?<\/h1>/i)?.[0] ?? "",
    );
    const title = String(metadata.title ?? "");
    const description = String(metadata.description ?? "");

    expect(title).toBe("Comment prioriser les fonctionnalités d’un SaaS ?");
    expect(title.length).toBeLessThanOrEqual(60);
    expect(description.length).toBeLessThanOrEqual(155);
    expect(normalizeSpace(String(article?.headline))).toBe(normalizeSpace(h1));
    expect(article?.datePublished).toBe("2026-07-23T14:17:43+02:00");
    expect(pageSource).toContain(
      'const guide = getGuide("prioriser-fonctionnalites-mvp-saas")',
    );
    expect(pageSource).not.toContain("const guide: GuideEntry");
    expect(registeredGuide.editorialStatus).toBe("ready-for-human-review");
    expect(registeredGuide.dateModified).toBe("2026-08-03T10:46:05+02:00");
  });

  it("answers directly before any visual and within the frozen opening", () => {
    const directAnswer =
      "Un score ne choisit pas à votre place. Une demande incomplète devient d’abord un test. Un incident, une obligation, un engagement ou une dépendance critique suit une voie séparée. Le prochain lot candidat est le plus petit ensemble cohérent dont le problème, la preuve, le résultat vérifiable, les dépendances et l’effort sont assez explicites pour une revue humaine.";

    expect(pageSource).toContain('heroDescription="' + directAnswer + '"');
    expect(wordCount(directAnswer)).toBeLessThanOrEqual(150);
    expect(pageSource.indexOf(directAnswer)).toBeLessThan(
      pageSource.indexOf("<Image"),
    );
    expect(pageSource).not.toMatch(/heroDescription="Cela dépend/i);
  });

  it("uses the premium architecture with nine sections and one late CTA", () => {
    expect(pageSource.match(/<GuidePremiumSection/g)).toHaveLength(9);
    expect(pageSource).toContain("<GuidePremiumLayout");
    expect(pageSource).toContain("<PriorityWorkshopTool");
    expect(pageSource).toContain("strategyCta={{");
    expect(pageSource).not.toContain("sidebarHeroCta=");
    expect(pageSource).not.toContain("sidebarContextCta=");
    expect(pageSource).not.toContain("faqCategories=");
    expect(pageSource.match(/\/demarrer-un-projet/g)).toHaveLength(1);
    expect(pageSource).toContain("showPhoneCta: false");

    const strategyMarkup =
      pageMarkup.match(
        /<section\b[^>]*data-guide-strategy-cta="true"[^>]*>[\s\S]*?<\/section>/i,
      )?.[0] ?? "";
    expect(strategyMarkup).toContain('href="/demarrer-un-projet"');
    expect(strategyMarkup).not.toContain("tel:");
    expect(pageMarkup.indexOf('data-priority-workshop="true"')).toBeLessThan(
      pageMarkup.indexOf('data-guide-strategy-cta="true"'),
    );
  });

  it("keeps the declared reading time aligned with visible article words", () => {
    const articleMarkup = extractArticleMarkup(pageMarkup);
    const visibleText = decodeHtmlText(
      stripReadTimeExcludedElements(articleMarkup),
    );
    const visibleWordCount = wordCount(visibleText);
    const expectedMinutes = Math.max(1, Math.round(visibleWordCount / 200));
    const declaredMinutes = registeredGuide.readTimeMin;

    expect(articleMarkup).not.toBe("");
    expect(
      declaredMinutes,
      visibleWordCount + " mots visibles à 200 mots/minute",
    ).toBe(expectedMinutes);
    expect(researchSource).toContain(
      visibleWordCount + " mots visibles, soit " + expectedMinutes + " minutes",
    );
  });

  it("emits only Article and BreadcrumbList structured data", () => {
    expect(structuredData.map((item) => item["@type"])).toEqual([
      "Article",
      "BreadcrumbList",
    ]);
    expect(publicCopy).not.toMatch(/\bwordCount\s*[:=]/);
  });

  it("follows five fictitious requests through five distinct decisions", () => {
    const example = createPilotFiveRequests();
    expect(example.requests).toHaveLength(5);
    expect(example.requests.map((request) => request.proposedDecision)).toEqual(
      ["treat_first", "test", "build", "buy_integrate", "defer"],
    );
    for (const id of [
      "REQ-INCIDENT",
      "REQ-TEST",
      "REQ-BUILD",
      "REQ-INTEGRATE",
      "REQ-DEFER",
    ]) {
      expect(pageMarkup).toContain(id);
    }
    expect(pageCompact).toContain(
      "L’exemple suivant ne décrit ni un client ni une mission Hagnéré Code",
    );
  });

  it("publishes the exact 9 of 10 and 11 of 10 calculations", () => {
    const base = assessPriorityWorkshop(createPilotFiveRequests());
    const overrun = assessPriorityWorkshop(createPilotOverCapacity());

    expect(base).toEqual(
      expect.objectContaining({
        status: "NEXT_LOT_CANDIDATE_FOR_REVIEW",
        totalSelectedPersonDays: "9",
        capacityPersonDays: "10",
        remainingPersonDays: "1",
      }),
    );
    expect(overrun).toEqual(
      expect.objectContaining({
        status: "STOP_SELECTED_LOT_EXCEEDS_CAPACITY",
        totalSelectedPersonDays: "11",
        overrunPersonDays: "1",
      }),
    );
    for (const expected of [
      "REQ-BUILD (6 j-p) + REQ-INTEGRATE (3 j-p) = 9 j-p",
      "capacité 10 j-p ; reste 1 j-p",
      "8 + 3 = 11 jours-personne",
      "dépasse la capacité de 10 de 1 jour-personne",
    ]) {
      expect(pageCompact).toContain(expected);
      expect(researchSource.replace(/\s+/g, " ")).toContain(expected);
    }
  });

  it("keeps all seven statuses and the stable frozen order visible", () => {
    expect(priorityStatuses).toEqual([
      "STOP_REQUIRED_CONTEXT_UNKNOWN",
      "STOP_CRITICAL_ROUTE_UNASSIGNED",
      "STOP_DEPENDENCY_OR_CAPACITY_UNKNOWN",
      "STOP_SELECTED_LOT_EXCEEDS_CAPACITY",
      "TESTS_REQUIRED_BEFORE_BUILD",
      "NO_BUILD_CANDIDATE",
      "NEXT_LOT_CANDIDATE_FOR_REVIEW",
    ]);
    for (const status of priorityStatuses) {
      expect(engineSource).toContain(status);
      expect(researchSource).toContain(status);
    }
    expect(engineSource).toContain(
      "Tester avant de construire — test explicite requis",
    );
    expect(engineSource).not.toContain(
      "Tester avant de construire — hypothèse encore faible",
    );
  });

  it("separates all five critical routes from ordinary comparison", () => {
    for (const route of [
      "incident",
      "security",
      "legal_compliance",
      "contract_commitment",
      "foundational_dependency",
    ]) {
      expect(engineSource).toContain('"' + route + '"');
    }
    for (const visibleLabel of [
      "Incident",
      "Sécurité",
      "Droit / conformité",
      "Engagement contractuel",
      "Dépendance fondatrice",
    ]) {
      expect(pageMarkup).toContain(visibleLabel);
    }
  });

  it("keeps the route, decision and capacity matrix explicit", () => {
    for (const route of [
      "incident",
      "security",
      "legal_compliance",
      "contract_commitment",
      "foundational_dependency",
    ] as const) {
      expect(compatibleDecisionsForRoute(route)).toEqual([
        "treat_first",
        "unknown",
      ]);
      expect(isDecisionCompatibleWithRoute(route, "build")).toBe(false);
    }
    expect(compatibleDecisionsForRoute("comparable")).toEqual([
      "build",
      "test",
      "buy_integrate",
      "defer",
      "unknown",
    ]);
    expect(isDecisionCompatibleWithRoute("comparable", "treat_first")).toBe(
      false,
    );
    for (const proposedDecision of [
      "build",
      "test",
      "buy_integrate",
    ] as const) {
      expect(
        isCapacityCountableRequest({
          route: "comparable",
          proposedDecision,
        }),
      ).toBe(true);
    }
    expect(
      isCapacityCountableRequest({
        route: "comparable",
        proposedDecision: "defer",
      }),
    ).toBe(false);
    expect(toolSource).toContain("Hors calcul de capacité");
    expect(pageCompact).toContain(
      "Seules les décisions construire, tester et acheter ou intégrer peuvent entrer dans le calcul du lot complet et de sa capacité",
    );
    expect(pageCompact).toContain(
      "Une dépendance nécessaire proposée au report ou placée sur une voie critique n’est jamais additionnée",
    );
    expect(pageCompact).toContain(
      "Chaque action nécessaire au lot doit aussi avoir un responsable",
    );
  });

  it("keeps rendered prose and form labels free of internal planning jargon", () => {
    const renderedReaderText = decodeHtmlText(pageMarkup + toolMarkup).replace(
      /STOP_CRITICAL_ROUTE_UNASSIGNED/g,
      "",
    );

    expect(renderedReaderText).not.toMatch(
      /\b(?:route|fermeture|comptable|comptables)\b/iu,
    );
    expect(pageCompact).toContain(
      "conserve chaque nombre exactement tel que vous l’avez saisi",
    );
    expect(pageCompact).toContain("voie d’instruction et de sa décision");
    expect(toolSource).toContain(
      'label="Prochaine action si la voie est critique"',
    );
    expect(toolSource).toContain("1. Période et capacité");
    expect(engineSource).toContain('unknown: "Voie d’instruction à vérifier"');
    expect(engineSource).toContain(
      "voie critique sans prochaine action assez précise pour être planifiée",
    );
    expect(engineSource).toContain("- Voie d’instruction :");
  });

  it("uses identical numerical bounds in engine, interface, prose and tests", () => {
    expect(engineSource).toContain("MAX_PERSON_DAYS = 10_000");
    expect(engineSource).toContain("MAX_DECIMAL_PLACES = 3");
    expect(toolSource).toContain("MAX_PERSON_DAYS.toLocaleString");
    expect(toolSource).toContain("MAX_DECIMAL_PLACES");
    expect(pageSource).toContain("10&nbsp;000 jours-personne");
    expect(pageCompact).toContain("trois décimales au maximum");
    expect(toolSource).not.toContain("Number(event.target.value)");
    expect(engineSource).toContain("PERSON_DAY_SCALE = 1_000");
    expect(engineSource).toContain("Number.isSafeInteger(scaled)");
    expect(engineSource.indexOf("saisie numérique invalide")).toBeLessThan(
      engineSource.indexOf('Number(canonicalInteger || "0")'),
    );
    expect(engineSource).toContain("!isBlank(request.effortPersonDays)");
    expect(engineSource).toContain('requestFieldId(index, "effort")');
  });

  it("links field-level errors and names the scrollable Markdown region", () => {
    expect(engineSource).toContain("fieldErrors: Record<string, string[]>");
    expect(toolSource).toContain('"aria-invalid": hasError || undefined');
    expect(toolSource).toContain('aria-labelledby="priority-export-title"');
    expect(toolMarkup).toContain('aria-invalid="true"');
    expect(toolMarkup).toContain('id="priority-period-errors"');

    const describedByIds = [
      ...toolMarkup.matchAll(/aria-describedby="([^"]+)"/g),
    ].flatMap((match) => (match[1] ?? "").split(/\s+/));
    for (const id of describedByIds) {
      expect(toolMarkup, `${id} must be rendered`).toContain(`id="${id}"`);
    }
  });

  it("keeps the tool local, copy-only, resettable and spreadsheet-free", () => {
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
    expect(toolMarkup).toContain("STOP_REQUIRED_CONTEXT_UNKNOWN");
    expect(toolSource).toContain("navigator.clipboard.writeText");
    expect(toolSource).toContain("Sélectionnez le brouillon Markdown");
    expect(toolSource).toContain("setDraft(emptyDraft())");
    expect(toolMarkup).not.toContain("download=");
    expect(pageSource).not.toContain('href=".csv');
    expect(pageSource).not.toContain('href=".xlsx');
    expect(pageSource).not.toContain('href=".xls');
  });

  it("documents source dates, authors, scopes and conflicts", () => {
    for (const expected of [
      "23 mars 2017",
      "Sean McBride",
      "5 janvier 2018",
      "Alex Osterwalder",
      "5 mars 2015",
      "9 août 2023",
      "8 décembre 2025",
      "SSDF 1.1",
      "7 juillet 2025",
      "Productboard",
      "30 juin 2026",
    ]) {
      expect(pageCompact).toContain(expected);
      expect(researchSource).toContain(expected);
    }
    expect(researchSource).toMatch(
      /#### C02 — Productboard, Customer Importance Score[\s\S]{0,500}- Mise à jour visible : 18 juin 2026\./,
    );
    expect(researchSource).toMatch(
      /#### C08 — Productboard, formules de priorisation[\s\S]{0,500}- Mise à jour visible après redirection canonique : 30 juin 2026\./,
    );
    for (const expected of [
      "Conflit",
      "Limite",
      "D3. Contradictions sérieuses résolues",
      "F. Registre des affirmations",
    ]) {
      expect(researchSource).toContain(expected);
    }
  });

  it("keeps missing values unknown when external formula conventions differ", () => {
    expect(pageCompact).toContain(
      "ses formules traitent automatiquement comme zéro les valeurs nulles",
    );
    expect(pageCompact).toContain(
      "Cet atelier fait volontairement l’inverse : une valeur absente reste inconnue",
    );
    expect(pageCompact).toContain(
      "deux outils peuvent donner un sens différent au même champ vide",
    );
  });

  it("uses three dedicated SVG and WebP assets at the frozen dimensions", () => {
    for (const path of [...svgPaths, ...webpPaths]) {
      expect(existsSync(path)).toBe(true);
    }
    expect(svgSources[0]).toContain('width="1600" height="900"');
    expect(svgSources[1]).toContain('width="1200" height="900"');
    expect(svgSources[2]).toContain('width="900" height="900"');
    expect(svgSources[0]).toContain("AUCUNE PROGRESSION AUTOMATIQUE");
    expect(svgSources[0]).toContain(
      "La preuve et la voie d’instruction restent visibles",
    );
    expect(svgSources[0]).not.toContain("La preuve et la route");
    expect(svgSources[1]).toContain("6 + 3 = 9 jours-personne");
    expect(svgSources[2]).toContain("REVUE");
    expect(svgSources[2]).toContain("AUCUN SCORE");
    for (const path of webpPaths) {
      const bytes = readFileSync(path);
      expect(bytes.subarray(0, 4).toString("ascii")).toBe("RIFF");
      expect(bytes.subarray(8, 12).toString("ascii")).toBe("WEBP");
    }
    expect(
      pageSource.match(
        /(?:demandes-preuves-voies-16x9|lot-dependances-capacite-4x3|revue-humaine-decisions-1x1)\.webp/g,
      ),
    ).toHaveLength(3);
    expect(registeredGuide.articleImagePaths).toEqual(
      webpPaths.map((path) =>
        path.replace(resolve(repositoryRoot, "public"), ""),
      ),
    );
  });

  it("keeps every editorial internal link on an existing route", () => {
    for (const route of [
      "guides/mvp-saas-quoi-inclure",
      "guides/cahier-des-charges-saas",
      "guides/combien-de-temps-developper-saas",
      "guides/securite-application-metier",
      "demarrer-un-projet",
      "guides",
      "equipe",
    ]) {
      expect(
        existsSync(resolve(repositoryRoot, "src/app", route, "page.tsx")),
      ).toBe(true);
    }
    for (const legacySlug of [
      "mvp-prototype-ou-poc",
      "faire-evoluer-saas-apres-mvp",
    ]) {
      expect(pageSource).not.toContain(["", "guides", legacySlug].join("/"));
    }
  });

  it("keeps provenance, local scope and future gates explicit", () => {
    expect(freezeSource).toContain("Gel d’entrée P1");
    expect(researchSource).toMatch(
      /^# Dossier complet — Prioriser les fonctionnalités d’un MVP SaaS$/m,
    );
    expect(researchSource).not.toMatch(/^# Reconstruction P1/m);
    expect(researchSource).not.toContain("| État de release P1");
    expect(researchSource).toContain("État après reprise");
    expect(researchSource).toContain("24 pages A4");
    expect(researchSource).toContain("6 247 mots");
    expect(researchSource).toContain("GO`, 94/100");
    expect(researchSource).toContain("zéro P0, zéro P1");
    expect(researchSource).toContain("**19/20**");
    for (const axis of [
      "Intention",
      "Décision",
      "Pédagogie",
      "Profondeur",
      "Preuve",
      "Comparaison",
      "Originalité",
      "Style",
      "Conversion",
      "SEO / produit",
    ]) {
      expect(researchSource).toContain(`| ${axis}`);
    }
    expect(researchSource).toContain("`b988dcef…b97f8`");
    expect(researchSource).not.toContain("b988dcef…a91aa");
    expect(researchSource).toContain("Un Q3 indépendant est requis");
    expect(pageCompact).toContain("première trace Git");
    expect(pageCompact).toContain(
      "elle décrit l’historique du code, pas sa disponibilité publique",
    );
    expect(pageCompact).toContain(
      "La présence du contenu dans le code, son intégration ou un build réussi ne prouvent pas à eux seuls l’existence d’une page servie, d’un déploiement, d’une publication ou d’une indexation",
    );
    expect(pageCompact).not.toContain("reconstruction P1");
    expect(pageCompact).not.toContain("Cette reconstruction reste locale");
    expect(pageCompact).not.toContain(
      "n’existe encore que dans le dépôt local",
    );
    expect(pageCompact).not.toContain("pour ce guide");
    expect(researchSource).toContain("ne prouve ni G1 validée, ni P2, ni P3");
  });
});

function decodeHtmlText(html: string): string {
  return html
    .replace(
      /<(script|style|template|noscript|svg)\b[^>]*>[\s\S]*?<\/\1>/gi,
      " ",
    )
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;|&#xA0;|&#160;/gi, "\u00a0")
    .replace(/&amp;/gi, " et ")
    .replace(/&(?:apos|#x27|#39);/gi, "'")
    .replace(/&quot;/gi, '"')
    .replace(/&#x([0-9a-f]+);/gi, (_match, value: string) =>
      String.fromCodePoint(Number.parseInt(value, 16)),
    )
    .replace(/&#([0-9]+);/g, (_match, value: string) =>
      String.fromCodePoint(Number.parseInt(value, 10)),
    )
    .replace(/\s+/g, " ")
    .trim();
}

function extractArticleMarkup(html: string): string {
  const opening = /<article\b[^>]*>/i.exec(html);
  if (!opening || opening.index === undefined) return "";

  const contentStart = opening.index + opening[0].length;
  const articleTag = /<\/?article\b[^>]*>/gi;
  articleTag.lastIndex = contentStart;
  let depth = 1;

  for (let tag = articleTag.exec(html); tag; tag = articleTag.exec(html)) {
    depth += tag[0].startsWith("</") ? -1 : 1;
    if (depth === 0) return html.slice(contentStart, tag.index);
  }

  return "";
}

function stripReadTimeExcludedElements(html: string): string {
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

    const matchingTag = new RegExp("</?" + tagName + "\\b[^>]*>", "gi");
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

function normalizeSpace(value: string): string {
  return value
    .replace(/\u00a0/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function wordCount(value: string): number {
  return (
    value.match(/[\p{L}\p{N}]+(?:[\u2019'\-][\p{L}\p{N}]+)*/gu)?.length ?? 0
  );
}
