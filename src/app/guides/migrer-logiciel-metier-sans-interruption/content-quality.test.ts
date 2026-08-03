import { existsSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const slugDirectory = dirname(fileURLToPath(import.meta.url));
const repositoryRoot = resolve(slugDirectory, "../../../..");
const publicDirectory = resolve(
  repositoryRoot,
  "public/guides/migrer-logiciel-metier-sans-interruption",
);

const pagePath = resolve(slugDirectory, "page.tsx");
const ogPath = resolve(slugDirectory, "opengraph-image.tsx");
const logicPath = resolve(slugDirectory, "cutover-readiness.ts");
const toolPath = resolve(slugDirectory, "cutover-readiness-tool.tsx");
const svgPaths = [
  resolve(publicDirectory, "migration-reversible-16x9.svg"),
  resolve(publicDirectory, "migration-reversible-4x3.svg"),
  resolve(publicDirectory, "migration-reversible-1x1.svg"),
];
const webpPaths = [
  resolve(publicDirectory, "migration-reversible-16x9.webp"),
  resolve(publicDirectory, "migration-reversible-4x3.webp"),
  resolve(publicDirectory, "migration-reversible-1x1.webp"),
];

const pageSource = readFileSync(pagePath, "utf8");
const ogSource = readFileSync(ogPath, "utf8");
const logicSource = readFileSync(logicPath, "utf8");
const toolSource = readFileSync(toolPath, "utf8");
const svgSources = svgPaths.map((file) => readFileSync(file, "utf8"));
const publicCopy = [
  pageSource,
  ogSource.replace('export const runtime = "edge";', ""),
  logicSource,
  toolSource,
  ...svgSources,
].join("\n");

describe("public content quality for the migration guide", () => {
  it("keeps the H1 contract and the social title aligned", () => {
    expect(pageSource).toContain('heroTitle="Migrer un logiciel métier"');
    expect(pageSource).toContain('heroTitleEm="sans interrompre"');
    expect(pageSource).toContain('heroTitleSuffix="l’activité"');
    expect(ogSource).toContain(
      'title: "Migrer un logiciel métier sans interrompre l’activité"',
    );
  });

  it("keeps the guide signature visible across the key surfaces", () => {
    expect(pageSource.toLocaleLowerCase("fr")).toContain(
      "budget de bascule réversible",
    );
    expect(toolSource.toLocaleLowerCase("fr")).toContain(
      "budget de bascule réversible",
    );
    expect(ogSource.toLocaleLowerCase("fr")).toContain(
      "budget de bascule réversible",
    );

    for (const [index, source] of svgSources.entries()) {
      const normalized = source.toLocaleLowerCase("fr");
      expect(normalized, svgPaths[index]).toContain("migration réversible");
      expect(normalized, svgPaths[index]).toContain("source d’écriture");
      expect(normalized, svgPaths[index]).toContain("stop");
      expect(normalized, svgPaths[index]).toContain("go");
    }
  });

  it("labels the new fictional case before exposing its numbers", () => {
    const fictionalLabel = pageSource.indexOf(
      'eyebrow="Cas entièrement fictif"',
    );
    const firstCaseNumber = pageSource.indexOf("680 commandes");

    expect(fictionalLabel).toBeGreaterThanOrEqual(0);
    expect(firstCaseNumber).toBeGreaterThan(fictionalLabel);
    expect(pageSource).toContain("247 min nécessaires");
    expect(pageSource).toContain("240 - 247 = -7 min de marge");
    expect(pageSource).toContain("187 min nécessaires");
    expect(pageSource).toContain("240 - 187 = 53 min de marge");
    expect(pageSource).toMatch(
      /La copie et la\s+vérification totalisent 160 minutes/,
    );
    expect(pageSource).not.toContain("La copie pourrait");
  });

  it("keeps the P2 decision boundaries visible", () => {
    expect(pageSource).toMatch(
      /Une condition critique non\s+observée\s+reste inconnue ou partielle/,
    );
    expect(pageSource).toContain(
      "Avant de financer une coexistence, vérifiez ce que l’existant couvre déjà",
    );
    expect(pageSource).toMatch(
      /L’outil de cette page\s+budgète du temps, pas ces coûts/,
    );
    expect(pageSource).toContain(
      "Doublez le volume et simulez une dépendance indisponible",
    );
    expect(toolSource).toMatch(
      /la fenêtre\s+métier et les quatre durées de la même répétition/,
    );
  });

  it("does not recycle the historical scenario or its former fingerprint", () => {
    for (const pattern of [
      /\b12[ .]?480\b/,
      /\b420\s+interventions?\b/i,
      /\b30\s+factures?\b/i,
      /\b10\s+utilisateurs?\b/i,
      /\b6\s*h(?:eures?)?\b/i,
      /\bfenêtre de six heures\b/i,
    ]) {
      expect(publicCopy).not.toMatch(pattern);
    }
  });

  it("does not introduce unsupported structured data or a download", () => {
    for (const pattern of [
      /\bFAQPage\b/,
      /\bHowTo\b/,
      /\bReview\b/,
      /\bAggregateRating\b/,
      /\.(?:xlsx?|csv)\b/i,
      /\btélécharger (?:le|la|un|une) (?:tableur|fichier)\b/i,
    ]) {
      expect(publicCopy).not.toMatch(pattern);
    }

    expect(pageSource).toContain("buildGuideStructuredData");
  });

  it("keeps the calculator local and free of confidential free-text fields", () => {
    expect(toolSource).not.toMatch(
      /\b(?:fetch|XMLHttpRequest|localStorage|sessionStorage)\b/,
    );
    expect(toolSource).not.toContain('type="text"');
    expect(toolSource).not.toContain("<textarea");
    expect(toolSource).toMatch(/elles ne\s+sont ni envoyées ni enregistrées/);
    expect(toolSource).toContain("Il ne remplace ni la");
  });

  it("expands DPO before using the abbreviation in every public source", () => {
    for (const [label, source] of [
      [pagePath, pageSource],
      [toolPath, toolSource],
      [logicPath, logicSource],
      [ogPath, ogSource],
      ...svgPaths.map((path, index) => [path, svgSources[index]]),
    ] as const) {
      const firstAbbreviation = source.indexOf("DPO");
      if (firstAbbreviation === -1) continue;

      const expansion = source.indexOf(
        "délégué à la protection des données (DPO)",
      );
      expect(expansion, label).toBeGreaterThanOrEqual(0);
      expect(expansion, label).toBeLessThanOrEqual(firstAbbreviation);
    }
  });

  it("keeps marketing shortcuts and false-client language out", () => {
    for (const pattern of [
      /\bseamless\b/i,
      /\bsans friction\b/i,
      /\b100\s*%\b/,
      /\bnotre client\b/i,
      /\bchez un client\b/i,
      /\bcas client\b/i,
      /\bnous garantissons\b/i,
      /\bzéro risque\b/i,
      /\btransformation digitale\b/i,
      /\bbest[- ]in[- ]class\b/i,
    ]) {
      expect(publicCopy).not.toMatch(pattern);
    }
  });

  it("ships exactly the three editorial ratios in SVG and WebP", () => {
    for (const file of [...svgPaths, ...webpPaths]) {
      expect(existsSync(file), file).toBe(true);
    }

    expect(svgSources[0]).toMatch(/viewBox="0 0 1600 900"/);
    expect(svgSources[1]).toMatch(/viewBox="0 0 1200 900"/);
    expect(svgSources[2]).toMatch(/viewBox="0 0 1000 1000"/);
  });
});
