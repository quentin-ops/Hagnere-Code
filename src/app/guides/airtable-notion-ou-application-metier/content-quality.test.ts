import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { PUBLISHED_GUIDES } from "@/lib/guides";
import { getLegacyGuideDestination } from "@/lib/legacy-guide-redirects";
import Page, { metadata } from "./page";
import {
  AIRTABLE_NOTION_DESCRIPTION,
  AIRTABLE_NOTION_HEADLINE,
  AIRTABLE_NOTION_IMAGES,
  AIRTABLE_NOTION_URL,
  airtableNotionGuide,
  structuredData,
} from "./guide-data";

const slugDirectory = dirname(fileURLToPath(import.meta.url));
const publicDirectory = resolve(slugDirectory, "../../../../public");
const pageSource = readFileSync(resolve(slugDirectory, "page.tsx"), "utf8");
const modelSource = readFileSync(
  resolve(slugDirectory, "airtable-notion-decision-model.ts"),
  "utf8",
);
const workbenchSource = readFileSync(
  resolve(slugDirectory, "airtable-notion-decision-workbench.tsx"),
  "utf8",
);
const ogSource = readFileSync(
  resolve(slugDirectory, "opengraph-image.tsx"),
  "utf8",
);
const renderedPage = renderToStaticMarkup(Page());
const normalizedSource = pageSource.replace(/\s+/g, " ");

function readerVisibleText(html: string) {
  return html
    .replace(
      /<(script|style|template|noscript|svg)\b[^>]*>[\s\S]*?<\/\1>/gi,
      " ",
    )
    .replace(/<[^>]+>/g, " ")
    .replace(/&#(?:x[0-9a-f]+|[0-9]+);/gi, " ")
    .replace(
      /&(?:nbsp|amp|apos|quot|rsquo|lsquo|ldquo|rdquo|ndash|mdash);/gi,
      " ",
    )
    .replace(/&[a-z]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function removeReadTimeExcludedElements(html: string) {
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

function articleWordCount() {
  const articleMarkup = renderedPage.match(
    /<article\b[^>]*>([\s\S]*?)<\/article>/,
  )?.[1];
  expect(articleMarkup).toBeDefined();
  const withoutLocalTool = removeReadTimeExcludedElements(articleMarkup ?? "");
  const text = readerVisibleText(withoutLocalTool);
  return (
    text.match(/[\p{L}\p{N}]+(?:[\u2019'\-][\p{L}\p{N}]+)*/gu)?.length ?? 0
  );
}

function inlineTextBoundaryConcatenations(html: string) {
  const patterns = [
    /[\p{L}\p{N}]<(?:a|strong|em)\b/gu,
    /<\/(?:a|strong|em)>[\p{L}\p{N}]/gu,
  ];
  return patterns.flatMap((pattern) =>
    [...html.matchAll(pattern)].map((match) => match[0]),
  );
}

describe("P3 content quality for Airtable, Notion or custom application", () => {
  it("keeps title, H1 and Article headline identical", () => {
    const h1 = renderedPage.match(/<h1\b([^>]*)>([\s\S]*?)<\/h1>/);
    expect(readerVisibleText(h1?.[2] ?? "")).toBe(AIRTABLE_NOTION_HEADLINE);
    const h1AriaLabel = h1?.[1].match(/aria-label="([^"]+)"/)?.[1];
    expect(h1AriaLabel?.replace(/\s+/g, " ")).toBe(AIRTABLE_NOTION_HEADLINE);
    expect(metadata.title).toBe(AIRTABLE_NOTION_HEADLINE);
    expect(airtableNotionGuide.title).toBe(AIRTABLE_NOTION_HEADLINE);
    expect(structuredData[0]).toMatchObject({
      "@type": "Article",
      headline: AIRTABLE_NOTION_HEADLINE,
      description: AIRTABLE_NOTION_DESCRIPTION,
      url: AIRTABLE_NOTION_URL,
      author: { "@type": "Person" },
      publisher: { "@type": "Organization" },
    });
    expect(AIRTABLE_NOTION_DESCRIPTION.length).toBeGreaterThanOrEqual(145);
    expect(AIRTABLE_NOTION_DESCRIPTION.length).toBeLessThanOrEqual(160);
  });

  it("keeps rendered inline JSX boundaries free of concatenated words", () => {
    expect(inlineTextBoundaryConcatenations(renderedPage)).toEqual([]);
    expect(readerVisibleText(renderedPage)).not.toContain("fictifset");
  });

  it("keeps the P4 anti-AI and reader-clarity guardrails", () => {
    for (const marker of [
      "personne ne vous le dit",
      "ce comparatif n’existe nulle part",
      "imbattable",
      "atout majeur",
      "véritable gouffre",
      "piège silencieux",
      "Il est important de noter",
      "Force est de constater",
      "Pour conclure",
      "En conclusion",
      "Ce qu’il faut retenir",
      "La plupart des incidents",
      "Le piège apparaît",
      "remédiation raisonnable",
      "données de delta",
      "fenêtre tolérée",
      "transformations déterministes",
    ]) {
      expect(normalizedSource.toLocaleLowerCase("fr"), marker).not.toContain(
        marker.toLocaleLowerCase("fr"),
      );
    }

    expect(normalizedSource).toContain(
      '{ label: "Atelier · envoi", value: "Aucun" }',
    );
    expect(normalizedSource).not.toContain(
      '{ label: "Données envoyées", value: "0" }',
    );
    expect(normalizedSource).toContain(
      "Comme aucune limite structurelle n’a été reproduite, construire une application ajouterait du coût sans corriger le problème observé",
    );
    expect(normalizedSource).not.toContain(
      "sans résoudre une limite reproduite",
    );
    expect(normalizedSource).toContain(
      "Si cette inconnue peut changer la décision, ne rendez pas encore la bascule irréversible",
    );
  });

  it("publishes the approved guide through the central registry with exact dates", () => {
    expect(metadata.robots).toMatchObject({ index: false, follow: false });
    expect(metadata.alternates?.canonical).toBe(AIRTABLE_NOTION_URL);
    expect(airtableNotionGuide.editorialStatus).toBe("published");
    expect(
      PUBLISHED_GUIDES.some((guide) => guide.slug === airtableNotionGuide.slug),
    ).toBe(true);
    expect(pageSource).not.toContain(
      'editorialStatus: "ready-for-human-review"',
    );
    expect(airtableNotionGuide.readTimeMin).toBe(25);
    expect(structuredData[0]).toMatchObject({
      datePublished: airtableNotionGuide.datePublished,
      dateModified: airtableNotionGuide.dateModified,
    });
    expect(metadata.openGraph).toMatchObject({
      publishedTime: airtableNotionGuide.datePublished,
      modifiedTime: airtableNotionGuide.dateModified,
    });
    expect(pageSource).toContain(
      "formatGuideDate(airtableNotionGuide.dateModified)",
    );
    expect(getLegacyGuideDestination(airtableNotionGuide.slug)).toBeNull();
  });

  it("emits only restrained Article and BreadcrumbList structured data", () => {
    expect(structuredData.map((item) => item["@type"])).toEqual([
      "Article",
      "BreadcrumbList",
    ]);
    expect(JSON.stringify(structuredData)).not.toMatch(
      /\b(?:FAQPage|HowTo|Review|AggregateRating|Product|Offer|wordCount)\b/,
    );
  });

  it("delivers a substantial server-rendered article with matching read time", () => {
    expect(renderedPage).toContain("<article");
    expect(renderedPage).toContain(
      "Commencez par conserver Airtable ou Notion",
    );
    expect(articleWordCount()).toBeGreaterThanOrEqual(3800);
    expect(Math.max(1, Math.round(articleWordCount() / 200))).toBe(
      airtableNotionGuide.readTimeMin,
    );
    expect(normalizedSource).toContain(
      "`${airtableNotionGuide.readTimeMin} min`",
    );
  });

  it("offers exactly five neutral outcomes including STOP and two keep outcomes", () => {
    const outcomesBlock = pageSource.match(
      /const outcomes = \[([\s\S]*?)\] as const;/,
    )?.[1];
    expect(outcomesBlock?.match(/status:/g)).toHaveLength(5);
    for (const outcome of [
      "STOP",
      "CONSERVER",
      "RENFORCER",
      "HYBRIDE",
      "SORTIR PROGRESSIVEMENT",
    ]) {
      expect(outcomesBlock, outcome).toContain(`status: "${outcome}"`);
    }
    expect(normalizedSource).toContain("CONSERVER AIRTABLE");
    expect(normalizedSource).toContain("CONSERVER NOTION");
    expect(pageSource).not.toMatch(
      /score sur 100|score de maturité|algorithme propriétaire/i,
    );
  });

  it("contains the twelve-dimensional load test and full exit grid", () => {
    expect(modelSource.match(/number: (?:[1-9]|1[0-2]),/g)).toHaveLength(12);
    expect(modelSource).toContain("organizationalDimensions");
    for (const key of [
      "objects",
      "owners",
      "data",
      "attachments",
      "rights",
      "automations",
      "integrations",
      "rules",
      "history",
      "uat",
      "coexistence",
      "rollback",
    ]) {
      expect(modelSource, key).toContain(`key: "${key}"`);
    }
  });

  it("keeps every critical unknown as a STOP and accepts explicit zero", () => {
    expect(modelSource).toContain('status: "STOP_MISSING_EVIDENCE"');
    expect(modelSource).toContain("value === null");
    expect(modelSource).toContain("value < 0");
    expect(modelSource).not.toContain("value <= 0");
    expect(normalizedSource).toContain("Une inconnue ne vaut ni zéro ni échec");
  });

  it("keeps the workbench local, copyable and printable", () => {
    expect(pageSource).toContain("<AirtableNotionDecisionWorkbench />");
    expect(workbenchSource).toContain("navigator.clipboard.writeText(dossier)");
    expect(workbenchSource).toContain("window.print()");
    expect(workbenchSource).toContain('data-read-time-exclude="true"');
    expect(workbenchSource).not.toMatch(
      /\b(?:fetch|XMLHttpRequest|localStorage|sessionStorage|indexedDB)\b/,
    );
    expect(`${pageSource}\n${workbenchSource}`).not.toMatch(
      /\.(?:xlsx?|csv)\b/i,
    );
  });

  it("separates product boundaries from governance failures", () => {
    expect(modelSource).not.toContain("dimension.kind");
    expect(modelSource).toContain('attribution === "platform-boundary"');
    expect(modelSource).toContain('attribution === "governance-remediable"');
    expect(modelSource).toContain("cause de l’échec à qualifier");
    expect(workbenchSource).toContain("Cause de l’échec");
    expect(modelSource).toContain("La plateforme n’est pas encore en cause");
    expect(modelSource).toContain(
      "Conservez le socle utile et extrayez une seule contrainte",
    );
  });

  it("states current product limits with dates and explicit uncertainty", () => {
    for (const fact of [
      "Au 5 août 2026",
      "cinq requêtes par seconde et par base",
      "cinquante requêtes par seconde",
      "d’attendre trente secondes",
      "moyenne de trois requêtes par seconde et par connexion",
      "partagée entre toutes ses connexions et ajustée à son plan",
      "sans plafond chiffré publié",
      "allonger progressivement cette attente",
      "un léger décalage",
      "1 000 éléments de bloc et 500 Ko",
      "un déclenchement compte comme exécution même lorsque les actions échouent",
      "Airtable indique ne pas prendre en charge un fonctionnement hors connexion",
      "Notion propose le hors-ligne",
      "les 50 premières lignes de la première vue",
      "Les sous-pages ne suivent pas automatiquement",
      "l’une indique un an, l’autre deux",
      "à vérifier sur notre espace de travail et notre contrat",
      "plans Team, Business et Enterprise Scale",
      "plans Business et Enterprise",
    ]) {
      expect(normalizedSource, fact).toContain(fact);
    }
  });

  it("defines essential technical terms before relying on their shorthand", () => {
    const articleMarkup = renderedPage.match(
      /<article\b[^>]*>([\s\S]*?)<\/article>/,
    )?.[1];
    expect(articleMarkup).toBeDefined();
    const articleText = readerVisibleText(articleMarkup ?? "");

    for (const [term, definition] of [
      ["API", "interface de programmation (API)"],
      ["workspace", "espace de travail (workspace)"],
      ["webhooks", "notifications automatiques entre services (webhooks)"],
      [
        "Retry-After",
        "délai indiqué par le service dans l’instruction Retry-After",
      ],
      ["CSV", "fichier tabulaire de données brutes (CSV)"],
      ["snapshots", "copies instantanées (snapshots)"],
      [
        "DPA",
        "addendum contractuel de traitement des données (Data Processing Addendum, ou DPA)",
      ],
      ["RGPD", "règlement général sur la protection des données (RGPD)"],
      ["SaaS", "logiciel fourni comme un service en ligne (SaaS)"],
    ] as const) {
      const definitionStart = articleText.indexOf(definition);
      expect(definitionStart, definition).toBeGreaterThanOrEqual(0);
      expect(articleText.indexOf(term), term).toBe(
        definitionStart + definition.indexOf(term),
      );
    }

    expect(articleText).toContain(
      "allonger progressivement cette attente et lui ajouter un léger décalage",
    );
    expect(articleText).toContain(
      "Rejouer la même demande ne produit pas un second effet",
    );
    expect(articleText).toContain("intégrations de ressources humaines");
    expect(articleText).not.toMatch(
      /\bRH\b|\bIdempotence\b|recul exponentiel et aléa/i,
    );
  });

  it("does not mistake edit permissions for visibility or data residency for GDPR compliance", () => {
    expect(normalizedSource).toContain(
      "elles ne changent pas à elles seules la visibilité des données",
    );
    expect(normalizedSource).toContain(
      "Ni une région européenne, ni un plan Enterprise, ni une application dédiée ne certifie à lui seul la conformité",
    );
    expect(normalizedSource).toContain(
      "l’article 28 du règlement général sur la protection des données (RGPD)",
    );
    expect(normalizedSource).toContain(
      "Le client conserve ses propres responsabilités",
    );
    expect(normalizedSource).toContain(
      "Un addendum contractuel de traitement des données (Data Processing Addendum, ou DPA) public n’est pas encore votre preuve contractuelle",
    );
    expect(normalizedSource).toContain(
      "Une page publique prouve des conditions proposées, pas celles que votre organisation a effectivement acceptées",
    );
  });

  it("compares total costs on an identical scope without inventing prices", () => {
    for (const costBoundary of [
      "Comparez un coût total, pas une licence à un devis",
      "Une ligne inconnue reste « à vérifier » ; elle ne vaut jamais zéro",
      "Sièges payants, plan, stockage, automatisations, interface de programmation (API), modules et connecteurs",
      "Supervision, sécurité, sauvegardes, maintenance, support et évolutions techniques",
      "le coût d’un arrêt et le temps métier perdu",
    ]) {
      expect(normalizedSource, costBoundary).toContain(costBoundary);
    }
    expect(pageSource).not.toMatch(
      /(?:€|euros?|dollars?|\$)\s*\d|\d\s*(?:€|euros?|dollars?)/i,
    );
  });

  it("covers export, re-import, restore and rollback rather than claiming portability", () => {
    for (const boundary of [
      "l’export en fichier tabulaire de données brutes (CSV) se fait table par table",
      "Les pièces jointes se récupèrent séparément",
      "crée une nouvelle base avec un nouvel identifiant d’application",
      "ne pas se recréer automatiquement à la réimportation",
      "Répétez la migration avant de lui faire confiance",
      "retour arrière réellement joué",
    ]) {
      expect(normalizedSource, boundary).toContain(boundary);
    }
  });

  it("labels every scenario as fictional and keeps contradictory conclusions", () => {
    expect(readerVisibleText(renderedPage)).toContain(
      "Les cinq scénarios ci-dessous sont entièrement fictifs",
    );
    expect(pageSource.match(/Exemple fictif [1-5]/g)).toHaveLength(5);
    expect(normalizedSource).toContain(
      "Si votre méthode ne peut jamais conclure « conserver Airtable » ou « conserver Notion »",
    );
    expect(pageSource).not.toMatch(
      /client réel|cas client|gain garanti|ROI garanti|zéro erreur|100 % adapté/i,
    );
  });

  it("uses primary official sources and records their scope", () => {
    for (const source of [
      "support.airtable.com/v1/docs/airtable-plans",
      "support.airtable.com/managing-api-call-limits-in-airtable",
      "airtable.com/company/dpa",
      "airtable.com/company/subprocessors",
      "notion.com/help/sharing-and-permissions",
      "notion.com/fr/help/relations-and-rollups",
      "notion.so/Data-Processing-Addendum",
      "notion.so/Notion-s-List-of-Subprocessors",
      "developers.notion.com/reference/request-limits",
      "cnil.fr/fr/securite-cloud-informatique-en-nuage",
      "cnil.fr/fr/sous-traitant",
      "eur-lex.europa.eu/eli/reg/2016/679/art_28",
    ]) {
      expect(pageSource, source).toContain(source);
    }
    expect(pageSource).not.toContain(
      "cnil.fr/fr/securite-recourir-un-prestataire-cloud",
    );
    expect(pageSource).not.toContain("cnil.fr/fr/definition/sous-traitant");
    expect(normalizedSource).toContain("Page mise à jour le 24 juillet 2026");
    expect(normalizedSource).toContain("consultées le 5 août 2026");
    expect(normalizedSource).toContain(
      "vérifier l’espace de travail et le contrat réels",
    );
  });

  it("ships three accessible illustrations and a 1200 by 630 social image", () => {
    expect(AIRTABLE_NOTION_IMAGES).toHaveLength(3);
    for (const imagePath of AIRTABLE_NOTION_IMAGES) {
      const svg = readFileSync(
        resolve(publicDirectory, `.${imagePath}`),
        "utf8",
      );
      expect(svg).toContain("<title");
      expect(svg).toContain("<desc");
      expect(svg).toContain('role="img"');
    }
    expect(ogSource).toContain(
      "export const size = { width: 1200, height: 630 }",
    );
    expect(ogSource).toContain(
      "Usage réel · droits · données · automatisations · sortie réversible",
    );
  });

  it("uses restrained lead destinations and permits the keep conclusion", () => {
    expect(pageSource).toContain('primaryCtaHref: "/demarrer-un-projet"');
    expect(pageSource).toContain(
      'ctaHref: "/services/outils-internes-sur-mesure"',
    );
    expect(normalizedSource).toContain(
      "Le premier échange peut conclure qu’il faut garder Airtable ou Notion",
    );
    expect(normalizedSource).toContain(
      "Le premier échange doit pouvoir conclure que l’outil actuel reste préférable",
    );
  });
});
