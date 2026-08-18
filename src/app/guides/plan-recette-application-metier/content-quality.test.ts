import { existsSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const slugDirectory = dirname(fileURLToPath(import.meta.url));
const repositoryRoot = resolve(slugDirectory, "../../../..");
const publicDirectory = resolve(
  repositoryRoot,
  "public/guides/plan-recette-application-metier",
);

const pagePath = resolve(slugDirectory, "page.tsx");
const ogPath = resolve(slugDirectory, "opengraph-image.tsx");
const logicPath = resolve(slugDirectory, "acceptance-readiness.ts");
const toolPath = resolve(slugDirectory, "acceptance-readiness-tool.tsx");
const researchPath = resolve(
  repositoryRoot,
  "docs/research/plan-recette-application-metier.md",
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

const pageSource = readFileSync(pagePath, "utf8");
const ogSource = readFileSync(ogPath, "utf8");
const logicSource = readFileSync(logicPath, "utf8");
const toolSource = readFileSync(toolPath, "utf8");
const researchSource = readFileSync(researchPath, "utf8");
const svgSources = svgPaths.map((file) => readFileSync(file, "utf8"));
const publicCopy = [
  pageSource,
  ogSource.replace('export const runtime = "edge";', ""),
  logicSource,
  toolSource,
  ...svgSources,
].join("\n");

describe("public content quality for the acceptance-plan guide", () => {
  it("keeps the H1, intent and social title aligned", () => {
    expect(pageSource).toContain(
      'heroTitle="Plan de recette d’une application métier :"',
    );
    expect(pageSource).toContain('heroTitleEm="prouver avant"');
    expect(pageSource).toContain('heroTitleSuffix="d’accepter"');
    expect(ogSource).toContain(
      'title: "Plan de recette d’une application métier"',
    );
    expect(pageSource.slice(0, 20_000)).toMatch(
      /Une recette relie un besoin à une preuve/,
    );
  });

  it("keeps the guide signature on all key surfaces", () => {
    expect(pageSource.toLocaleLowerCase("fr")).toContain("chaîne de preuve");
    expect(toolSource.toLocaleLowerCase("fr")).toContain(
      "chaîne de preuve de recette",
    );
    expect(ogSource.toLocaleLowerCase("fr")).toContain(
      "prouver avant d’accepter",
    );

    for (const [index, source] of svgSources.entries()) {
      const normalized = source.toLocaleLowerCase("fr");
      expect(normalized, svgPaths[index]).toContain("chaîne de preuve");
      expect(normalized, svgPaths[index]).toContain("besoin métier");
      expect(normalized, svgPaths[index]).toContain("cas rejouable");
      expect(normalized, svgPaths[index]).toContain("preuve");
      expect(normalized, svgPaths[index]).toContain("décision humaine");
      expect(normalized, svgPaths[index]).toContain("stop / corriger");
    }
  });

  it("labels the fictional case before exposing its values", () => {
    const fictionalLabel = pageSource.indexOf(
      'eyebrow="Cas entièrement fictif"',
    );
    const firstAmount = pageSource.indexOf("40,00 €");

    expect(fictionalLabel).toBeGreaterThanOrEqual(0);
    expect(firstAmount).toBeGreaterThan(fictionalLabel);
    expect(pageSource).toContain("40,00 + 140,00 + 25,00 = 205,00 €");
    expect(pageSource).toContain(
      "Aucun nom, tarif ou dossier réel n’est utilisé.",
    );
  });

  it("keeps the core decision boundaries visible", () => {
    expect(pageSource).toContain("réussi, échoué, bloqué et non exécuté");
    expect(pageSource).toContain("La gravité décrit l’impact observé");
    expect(pageSource).toContain(
      "La priorité indique l’ordre de traitement décidé",
    );
    expect(pageSource).toContain(
      "L’étiquette « mineure » ne protège aucune décision",
    );
    expect(pageSource).toMatch(/dossier candidat à la décision/i);
    expect(pageSource).toContain(
      "La portée contractuelle ne se déduit pas de cette page",
    );
    for (const requiredGuard of [
      "scopeExitAndSpecialistChecks",
      "decisionAuthorityAndContract",
      "failedCases",
      "pendingReservations",
    ]) {
      expect(logicSource).toContain(requiredGuard);
    }
    expect(logicSource).toContain('"CANDIDATE_FOR_ACCEPTANCE"');
    expect(logicSource).toContain("n’accepte pas le logiciel automatiquement");
  });

  it("does not expose unsupported structured data or downloads", () => {
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

  it("keeps the tool local and free of confidential free-text fields", () => {
    expect(toolSource).not.toMatch(
      /\b(?:fetch|XMLHttpRequest|localStorage|sessionStorage)\b/,
    );
    expect(toolSource).not.toContain('type="text"');
    expect(toolSource).not.toContain("<textarea");
    expect(toolSource).toMatch(/elles ne sont ni\s+envoyées ni\s+enregistrées/);
    expect(toolSource).toContain("N’entrez aucun nom");
    expect(toolSource).toContain("Il ne remplace ni les tests");
  });

  it("uses current, bounded primary references", () => {
    for (const expectedReference of [
      "ISTQB_CTFL_Syllabus_v4.0.1.pdf",
      "https://www.iso.org/standard/79429.html",
      "https://www.iso.org/standard/78176.html",
      "https://www.cnil.fr/fr/tester-vos-applications",
      "https://www.w3.org/WAI/test-evaluate/",
      "www-project-application-security-verification-standard",
    ]) {
      expect(pageSource).toContain(expectedReference);
      expect(researchSource).toContain(expectedReference);
    }

    expect(pageSource).toContain("ASVS 5.0.0");
    expect(pageSource).toContain("ISO/IEC 25010:2023");
    expect(pageSource).toContain(
      "données personnelles de production à ne pas utiliser",
    );
    expect(pageSource).toContain("Ce guide ne crée aucune dérogation");
    expect(pageSource).toContain(
      "Référence pédagogique, pas certification du projet",
    );
  });

  it("keeps false certainty and false-client language out", () => {
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
      /\bconforme RGPD\b/i,
      /\bcertifié ISTQB\b/i,
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
