import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { PUBLISHED_GUIDES } from "@/lib/guides";
import { getLegacyGuideDestination } from "@/lib/legacy-guide-redirects";
import { accessGuide, structuredData } from "./guide-data";
import Page, { metadata } from "./page";

const slugDirectory = dirname(fileURLToPath(import.meta.url));
const pageSource = readFileSync(resolve(slugDirectory, "page.tsx"), "utf8");
const guideDataSource = readFileSync(
  resolve(slugDirectory, "guide-data.ts"),
  "utf8",
);
const inboundGuideSource = readFileSync(
  resolve(slugDirectory, "../signes-besoin-logiciel-metier/page.tsx"),
  "utf8",
);
const toolSource = readFileSync(
  resolve(slugDirectory, "access-exit-dossier.tsx"),
  "utf8",
);
const ogSource = readFileSync(
  resolve(slugDirectory, "opengraph-image.tsx"),
  "utf8",
);
const normalizedPage = pageSource.replace(/\s+/g, " ");

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

function articleWordCount() {
  const html = renderToStaticMarkup(Page());
  const articleHtml = html.match(/<article\b[^>]*>([\s\S]*?)<\/article>/)?.[1];
  expect(articleHtml).toBeDefined();
  const text = removeReadTimeExcludedElements(articleHtml ?? "")
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

  return (
    text.match(/[\p{L}\p{N}]+(?:[\u2019'\-][\p{L}\p{N}]+)*/gu)?.length ?? 0
  );
}

describe("content quality for the Microsoft Access replacement guide", () => {
  it("renders a server-side H1 and uses the measured article reading time", () => {
    const html = renderToStaticMarkup(Page());
    expect(html).toContain("<h1");
    expect(html).toContain("Remplacer Microsoft Access sans perdre");
    expect(Math.max(1, Math.round(articleWordCount() / 200))).toBe(
      accessGuide.readTimeMin,
    );
  });

  it("uses the approved central guide entry and keeps previews private", () => {
    expect(accessGuide.editorialStatus).toBe("published");
    expect(
      PUBLISHED_GUIDES.some((guide) => guide.slug === accessGuide.slug),
    ).toBe(true);
    expect(metadata.robots).toMatchObject({ index: false, follow: false });
    expect(metadata.alternates?.canonical).toBe(
      "https://hagnere-code.ai/guides/remplacer-microsoft-access-application-web",
    );
    expect(metadata.openGraph).toMatchObject({
      publishedTime: accessGuide.datePublished,
      modifiedTime: accessGuide.dateModified,
    });
    expect(pageSource).toContain("buildGuideMetadata(");
    expect(guideDataSource).toContain("buildGuideStructuredData(");
    expect(guideDataSource).toContain(
      'getGuide(\n  "remplacer-microsoft-access-application-web",\n)',
    );
    expect(getLegacyGuideDestination(accessGuide.slug)).toBeNull();
    expect(inboundGuideSource).toContain(
      'href: "/guides/remplacer-microsoft-access-application-web"',
    );
  });

  it("uses only Article and BreadcrumbList structured data", () => {
    expect(structuredData.map((item) => item["@type"])).toEqual([
      "Article",
      "BreadcrumbList",
    ]);
    expect(JSON.stringify(structuredData)).not.toMatch(
      /\b(?:FAQPage|HowTo|Offer|Review|AggregateRating|SoftwareApplication|wordCount)\b/,
    );
    expect(structuredData[0]).toMatchObject({
      datePublished: accessGuide.datePublished,
      dateModified: accessGuide.dateModified,
    });
  });

  it("preserves all historical deep-link anchors", () => {
    for (const id of [
      "reponse",
      "travail",
      "inventaire",
      "transfert",
      "choix",
      "pilote",
      "devis",
      "premiere-action",
    ]) {
      expect(pageSource, id).toContain(`id="${id}"`);
    }
  });

  it("answers before selling and does not claim Access is dead", () => {
    const html = renderToStaticMarkup(Page());
    expect(normalizedPage).toContain(
      "Pas nécessairement, et surtout pas avant d’avoir sécurisé l’existant.",
    );
    expect(normalizedPage).toContain(
      "Microsoft commercialise encore Access pour PC",
    );
    expect(normalizedPage).toContain("13 octobre 2026");
    expect(normalizedPage).toContain("9 octobre 2029");
    expect(normalizedPage).toContain("« Retirement Date »");
    expect(normalizedPage).toContain(
      "pas d’une promesse autonome de « support garanti jusqu’à »",
    );
    expect(normalizedPage).toContain(
      "rester à jour selon les exigences de service et système publiées",
    );
    expect(normalizedPage).toContain(
      "disposer d’une licence ou d’un droit d’usage",
    );
    expect(normalizedPage).toContain(
      "que Microsoft propose encore la prise en charge",
    );
    expect(normalizedPage).toContain(
      "La phrase « Access est mort » ne permet donc aucune décision",
    );
    expect(html).toContain("plateforme avec peu de code (<em>low-code</em>)");
    expect(pageSource).not.toMatch(
      /migration garantie sans interruption|migration 100\s?% sans interruption|aucune interruption garantie|sans perte garantie|conversion automatique complète/i,
    );
  });

  it("covers the entire Access workload rather than only tables", () => {
    for (const term of [
      "tables",
      "requêtes",
      "formulaires",
      "rapports",
      "macros",
      "VBA",
      "pièces jointes",
      "lien hypertexte",
      "chemin local",
      "ODBC",
      "API",
      "tâche planifiée",
      "comptes de service",
      "licences",
      "maintenance",
    ]) {
      expect(pageSource, term).toContain(term);
    }
  });

  it("compares exactly seven fair trajectories including no migration", () => {
    const trajectoryBlock = pageSource.match(
      /const trajectories = \[([\s\S]*?)\] as const;/,
    )?.[1];

    expect(trajectoryBlock).toBeDefined();
    expect(trajectoryBlock?.match(/number: "[1-7]"/g)).toHaveLength(7);
    for (const title of [
      "Conserver et stabiliser Access",
      "Séparer l’interface et les données",
      "Migrer seulement le stockage",
      "Adopter un logiciel standard",
      "Utiliser une plateforme avec peu de code (low-code)",
      "Reconstruire progressivement une application web dédiée",
      "Ne pas migrer maintenant",
    ]) {
      expect(trajectoryBlock, title).toContain(title);
    }
    expect(trajectoryBlock?.match(/fit:/g)).toHaveLength(7);
    expect(trajectoryBlock?.match(/proof:/g)).toHaveLength(7);
    expect(trajectoryBlock?.match(/risk:/g)).toHaveLength(7);
  });

  it("states exact limits for OneDrive, WAN and automated tools", () => {
    expect(normalizedPage).toContain(
      "2 Go par base, moins l’espace nécessaire aux objets système",
    );
    expect(normalizedPage).toContain(
      "255 est le maximum publié d’utilisateurs simultanés",
    );
    expect(normalizedPage).toContain("pas une capacité pratique promise");
    expect(normalizedPage).toContain(
      "Microsoft déconseille d’ouvrir un fichier Access depuis OneDrive ou une bibliothèque SharePoint",
    );
    expect(normalizedPage).toContain(
      "une base Access scindée sur un WAN ou des partages de fichiers Azure",
    );
    expect(normalizedPage).toContain(
      "Ces avertissements visent ces configurations précises",
    );
    expect(normalizedPage).toContain(
      "Pas les formulaires, rapports, macros ou modules",
    );
    expect(normalizedPage).toContain(
      "Une interface Power Apps ne résulte pas de l’export",
    );
    expect(normalizedPage).toContain(
      "conserver temporairement le frontal Access",
    );
  });

  it("ships a local multi-item dossier with honest unknowns", () => {
    expect(pageSource).toContain("<AccessExitDossierTool");
    expect(toolSource).toContain("summarizeExitDossier");
    expect(toolSource).toContain("buildExitDossierText");
    expect(toolSource).toContain("navigator.clipboard.writeText");
    expect(toolSource).toContain("window.print()");
    expect(toolSource).toContain("nextItemId.current += 1");
    expect(toolSource).not.toContain("Date.now()");
    expect(toolSource).not.toContain("fetch(");
    expect(toolSource).not.toContain("localStorage");
    expect(toolSource).not.toContain("sessionStorage");
    expect(toolSource).not.toContain("<form");
    expect(toolSource).not.toMatch(/\.(?:xlsx?|csv|pdf)\b/i);
    expect(toolSource.match(/role="status"/g)).toHaveLength(1);
  });

  it("labels fictional examples and avoids fake performance claims", () => {
    expect(pageSource.match(/Exemple fictif [123]/g)).toHaveLength(3);
    expect(`${pageSource}\n${toolSource}`).not.toMatch(
      /(?:10|20|30|40|50|80|90|100)\s?% (?:plus|de gain|d’économie)|ROI garanti|rentabilité garantie|gain garanti|100 % sécurisé|conforme au RGPD/i,
    );
  });

  it("cites primary sources visibly and identifies their scope", () => {
    for (const source of [
      "microsoft.com/fr-fr/microsoft-365/access",
      "lifecycle/products/access-2021",
      "lifecycle/products/access-2024",
      "lifecycle/products/microsoft-365-apps",
      "lifecycle/policies/modern",
      "access-specifications",
      "learn-the-structure-of-an-access-database",
      "document-and-print-your-database-design",
      "use-the-object-dependencies-pane",
      "converting-access-database-objects-accesstosql",
      "assessing-access-database-objects-for-conversion",
      "sql-server/migrate/guides/access-to-sql-server",
      "linking-access-applications-to-sql-server",
      "migrate-access-to-dataverse",
      "get-started-migrate-access-data-to-dataverse",
      "ways-to-share-an-access-desktop-database",
      "deploy-an-access-application",
      "split-an-access-database",
      "decide-whether-to-create-a-desktop-database-or-an-access-web-app",
      "cnil.fr/fr/securite-sauvegarder",
      "anssi_essentiels_migration_1.0.pdf",
    ]) {
      expect(pageSource, source).toContain(source);
    }
    expect(pageSource.match(/^\s+source: /gm)).toHaveLength(21);
    expect(normalizedPage).toContain(
      "Le périmètre principal est la protection des données personnelles",
    );
    expect(normalizedPage).toContain(
      "Guide général de migration des systèmes d’information",
    );
  });

  it("uses one restrained editorial link and contextual shared CTAs", () => {
    expect(
      pageSource.match(/<Link href="\/demarrer-un-projet">/g),
    ).toHaveLength(1);
    expect(pageSource).toContain(
      'primaryCtaLabel: "Décrire mon application Access"',
    );
    expect(pageSource).toContain(
      'ctaHref: "/services/outils-internes-sur-mesure"',
    );
    expect(pageSource).toContain('mobileCtaLabel="Cadrer Access"');
    expect(pageSource).not.toContain("ctaTitle:");
  });

  it("links only to live published guides in the related-guides block", () => {
    for (const slug of [
      "signes-besoin-logiciel-metier",
      "automatiser-processus-metier",
    ]) {
      expect(pageSource).toContain(`href: "/guides/${slug}"`);
      expect(PUBLISHED_GUIDES.some((guide) => guide.slug === slug)).toBe(true);
      expect(getLegacyGuideDestination(slug)).toBeNull();
    }
    const redirectedRelatedSlugs = [
      ["reprendre", "logiciel", "metier", "existant"].join("-"),
      ["cahier", "des", "charges", "application", "metier"].join("-"),
    ];
    for (const slug of redirectedRelatedSlugs) {
      expect(pageSource).not.toContain(`href: "/guides/${slug}"`);
    }
  });

  it("ships dedicated three-ratio Article images and a 1200 by 630 OG", () => {
    expect(accessGuide.articleImagePaths).toEqual([
      "/guides/remplacer-microsoft-access-application-web/article-sortie-access-16x9.svg",
      "/guides/remplacer-microsoft-access-application-web/article-sortie-access-4x3.svg",
      "/guides/remplacer-microsoft-access-application-web/article-sortie-access-1x1.svg",
    ]);
    expect(pageSource).toContain("article-sortie-access-16x9.svg");
    expect(ogSource).toContain(
      "Inventaire · 7 trajectoires · preuves de reprise",
    );
    expect(ogSource).toContain(
      "export const size = { width: 1200, height: 630 }",
    );
  });
});
