import { existsSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import {
  assessSaasSchedule,
  createRelaisProExample,
  scheduleScenarioIds,
} from "./schedule-planner-engine";
import { SaasSchedulePlannerTool } from "./schedule-planner-tool";

const slugDirectory = dirname(fileURLToPath(import.meta.url));
const repositoryRoot = resolve(slugDirectory, "../../../..");
const publicDirectory = resolve(
  repositoryRoot,
  "public/guides/combien-de-temps-developper-saas",
);

const pagePath = resolve(slugDirectory, "page.tsx");
const ogPath = resolve(slugDirectory, "opengraph-image.tsx");
const enginePath = resolve(slugDirectory, "schedule-planner-engine.ts");
const toolPath = resolve(slugDirectory, "schedule-planner-tool.tsx");
const researchPath = resolve(
  repositoryRoot,
  "docs/research/combien-de-temps-developper-saas.md",
);
const inputFreezePath = resolve(
  repositoryRoot,
  "docs/research/combien-de-temps-developper-saas-input-freeze.md",
);
const svgPaths = [
  resolve(publicDirectory, "calendrier-saas-16x9.svg"),
  resolve(publicDirectory, "calendrier-saas-4x3.svg"),
  resolve(publicDirectory, "calendrier-saas-1x1.svg"),
];
const webpPaths = [
  resolve(publicDirectory, "calendrier-saas-16x9.webp"),
  resolve(publicDirectory, "calendrier-saas-4x3.webp"),
  resolve(publicDirectory, "calendrier-saas-1x1.webp"),
];

const pageSource = readFileSync(pagePath, "utf8");
const ogSource = readFileSync(ogPath, "utf8");
const engineSource = readFileSync(enginePath, "utf8");
const toolSource = readFileSync(toolPath, "utf8");
const researchSource = readFileSync(researchPath, "utf8");
const inputFreezeSource = readFileSync(inputFreezePath, "utf8");
const svgSources = svgPaths.map((path) => readFileSync(path, "utf8"));
const pageCompact = pageSource.replace(/\s+/g, " ");
const publicCopy = [
  pageSource,
  ogSource.replace('export const runtime = "edge";', ""),
  engineSource,
  toolSource,
  ...svgSources,
].join("\n");
const readerFacingStaticCopy = [
  pageSource,
  ogSource.replace('export const runtime = "edge";', ""),
  ...svgSources,
].join("\n");
const toolMarkup = renderToStaticMarkup(createElement(SaasSchedulePlannerTool));

describe("public content quality for the SaaS schedule guide", () => {
  it("aligns the search question, H1, metadata source and social promise", () => {
    expect(pageSource).toContain('heroTitle="Combien de temps faut-il"');
    expect(pageSource).toContain('heroTitleEm="pour développer"');
    expect(pageSource).toContain('heroTitleSuffix="un SaaS ?"');
    expect(pageSource).toContain(
      'const guide = getGuide("combien-de-temps-developper-saas")',
    );
    expect(ogSource).toContain(
      'title: "Combien de temps pour développer un SaaS ?"',
    );
    expect(ogSource).toContain(
      'subtitle: "Calculer une chaîne relative, puis la faire revoir"',
    );
  });

  it("answers directly before any visual in fewer than 150 words", () => {
    const answerSection = pageSource.slice(
      pageSource.indexOf('id="reponse"'),
      pageSource.indexOf("<GuideTable", pageSource.indexOf('id="reponse"')),
    );
    const answerText = answerSection
      .replace(/<[^>]+>/g, " ")
      .replace(/[{}"=]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    const firstSentence =
      "Il n’existe pas de durée universelle défendable pour développer un SaaS.";

    expect(answerSection.replace(/\s+/g, " ")).toContain(firstSentence);
    expect(answerSection.toLocaleLowerCase("fr-FR")).not.toContain(
      "cela dépend",
    );
    expect(answerText.split(" ").filter(Boolean).length).toBeLessThanOrEqual(
      150,
    );
    expect(pageSource.indexOf(firstSentence)).toBeLessThan(
      pageSource.indexOf("<Image"),
    );
  });

  it("keeps the premium architecture to nine sections plus visible FAQ", () => {
    expect(pageSource.match(/<GuidePremiumSection/g)).toHaveLength(9);
    expect(pageSource).toContain("faqCategories={faqCategories}");
    expect(faqCategoriesInSource()).toBe(3);
    // Choix éditorial assumé, pas un oubli : ce guide applique la règle de la
    // charte « au maximum un CTA éditorial dans l'article ». L'absence de
    // `sidebarContextCta` supprime donc aussi la barre d'action collante en
    // lecture mobile (GuidePremiumLayout ne la rend que si ce bloc existe) :
    // le seul point de contact commercial est le `strategyCta` de fin
    // d'article, doublé de la CTA de bas de FAQ. Rétablir la barre mobile
    // reviendrait à repasser à trois points de contact — c'est une décision
    // éditoriale, à prendre explicitement, pas un correctif technique.
    expect(pageSource).not.toContain("sidebarHeroCta=");
    expect(pageSource).not.toContain("sidebarContextCta=");
    expect(pageSource).not.toContain("<GuideInlineCTA");
    expect(pageSource).toContain("strategyCta={{");
  });

  it("uses only Article and BreadcrumbList through the shared helper", () => {
    expect(pageSource).toContain(
      "buildGuideStructuredData(guide, breadcrumbName)",
    );
    expect(publicCopy).not.toMatch(
      /FAQPage|SoftwareApplication|HowTo|Product|AggregateRating/,
    );
  });

  it("keeps the four engine statuses internal and shows plain French labels", () => {
    for (const status of [
      "STOP_REQUIRED_INPUTS_UNKNOWN",
      "STOP_INVALID_DEPENDENCY_NETWORK",
      "CLARIFY_CAPACITY_BEFORE_CALENDAR",
      "CALENDAR_CANDIDATE_FOR_REVIEW",
    ]) {
      expect(engineSource).toContain(status);
      expect(readerFacingStaticCopy).not.toContain(status);
      expect(toolMarkup).not.toContain(status);
    }
    for (const label of [
      "Calcul en attente : informations à compléter",
      "Ordre des tâches à corriger",
      "Disponibilités à clarifier",
      "Calendrier prêt à relire",
    ]) {
      expect(publicCopy).toContain(label);
    }
    expect(pageSource).toContain('{ label: "Score global", value: "Aucun" }');
    expect(toolSource).toContain("aucun score");
  });

  it("shows the longest-path equations and does not add true parallel work", () => {
    for (const expected of [
      "début(tâche) = maximum des fins de ses prérequis",
      "fin(tâche) = début(tâche) + durée du scénario",
      "fin du réseau = maximum des fins terminales",
      "Les branches parallèles ne sont pas additionnées",
      "support-prepare avance réellement en parallèle",
    ]) {
      expect(pageCompact).toContain(expected);
    }
    expect(engineSource).toContain("Math.max");
    expect(engineSource).toContain("determiningPathIds");
    expect(engineSource).toContain("determiningPathsIds");
    expect(pageCompact).toContain("aucun chemin déterminant n’est masqué");
  });

  it("replays favorable, central, prudent, combined stress and reverse reasoning", () => {
    expect(scheduleScenarioIds).toEqual([
      "favorable",
      "central",
      "prudent",
      "combinedStress",
    ]);

    const result = assessSaasSchedule(createRelaisProExample());
    expect(result.scenarios.map((scenario) => scenario.durationDays)).toEqual([
      16, 25, 37, 47,
    ]);
    expect(result.scenarios.map((scenario) => scenario.reserveDays)).toEqual([
      4, 4, 4, 4,
    ]);
    expect(result.reverseReasoning).toEqual(
      expect.objectContaining({
        maxWorkingDays: 34,
        prudentWithReserveDays: 41,
        gapDays: 7,
        needsDecision: true,
      }),
    );
    expect(pageCompact).toContain(
      "Attente externe et validation interne se dégradent ensemble",
    );
    expect(pageCompact).toContain(
      "Cette valeur n’autorise aucune réduction automatique",
    );
    expect(pageCompact).toContain(
      "prudent avec réserve 41 - maximum 34 = écart de 7 jours",
    );
    expect(pageCompact).not.toContain(
      "maximum 34 - prudent avec réserve 41 = écart de 7 jours",
    );
    expect(pageCompact).toContain(
      "Il n’emploie l’étiquette « stress combiné » que si ces deux familles portent chacune un effet additionnel strictement positif",
    );
  });

  it("defines J+N as an elapsed-duration axis without an off-by-one", () => {
    for (const source of [
      pageCompact,
      engineSource,
      toolSource,
      researchSource,
    ]) {
      expect(source.replace(/\s+/g, " ").toLocaleLowerCase("fr-FR")).toContain(
        "une tâche de 1 jour occupe j1 et atteint son jalon à j+1",
      );
    }
  });

  it("distinguishes finish lines and keeps non-development alternatives", () => {
    for (const expected of [
      "Preuve ciblée",
      "Prototype",
      "Pilote privé",
      "Service soutenable",
      "fonction déjà disponible",
      "processus manuel contrôlé",
      "contenu explicatif",
      "partenariat",
      "ne rien construire",
    ]) {
      expect(pageCompact).toContain(expected);
    }
  });

  it("keeps security, accessibility, data, restore and support inside the network", () => {
    for (const expected of [
      "données fictives",
      "règles d’accès",
      "accessibilité",
      "sécurité",
      "préproduction",
      "restauration",
      "observabilité",
      "support",
      "retour arrière",
    ]) {
      expect(pageCompact.toLocaleLowerCase("fr-FR")).toContain(
        expected.toLocaleLowerCase("fr-FR"),
      );
    }
  });

  it("records source versions and page-specific update dates accurately", () => {
    for (const expected of [
      "GAO · Schedule Assessment Guide · finale 2015",
      "Planning in agile · mise à jour 31 mars 2026",
      "Discovery · mise à jour 21 juin 2021",
      "Live · mise à jour 8 mai 2019",
      "Scrum Guide · version officielle novembre 2020",
      "SSDF v1.1 finale · février 2022",
      "SSDF v1.2 draft · 17 décembre 2025",
      "version 2024 mise à jour 2026",
    ]) {
      expect(pageCompact).toContain(expected);
      expect(researchSource).toContain(expected);
    }
    expect(pageCompact).toContain(
      "Initial Public Draft : elle ne remplace pas la v1.1 finale",
    );
    expect(pageCompact).toContain("recommandation de référence de ce guide");
    expect(pageCompact).not.toContain("base normative de ce guide");
  });

  it("keeps the calculator local, deterministic and copy-only", () => {
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

    expect(toolMarkup).toContain(
      "Calcul en attente : informations à compléter",
    );
    expect(toolMarkup).not.toMatch(
      /STOP_REQUIRED_INPUTS_UNKNOWN|STOP_INVALID_DEPENDENCY_NETWORK|CLARIFY_CAPACITY_BEFORE_CALENDAR|CALENDAR_CANDIDATE_FOR_REVIEW/,
    );
    for (const result of [
      assessSaasSchedule(createRelaisProExample()),
      assessSaasSchedule({
        finishLine: "",
        tasks: [],
        reserveDays: null,
        maxWorkingDays: null,
      }),
    ]) {
      expect(result.markdown).not.toMatch(
        /STOP_REQUIRED_INPUTS_UNKNOWN|STOP_INVALID_DEPENDENCY_NETWORK|CLARIFY_CAPACITY_BEFORE_CALENDAR|CALENDAR_CANDIDATE_FOR_REVIEW|external-wait|internal-validation/,
      );
    }
    expect(toolMarkup).toContain("Plan de calendrier SaaS généré en Markdown");
    expect(toolSource).toContain("key={draft.taskUiIds[index]}");
    expect(toolSource).toContain('aria-live="polite"');
    expect(toolSource).toContain('aria-atomic="true"');
    expect(toolMarkup).not.toContain("download=");
    expect(publicCopy).not.toMatch(/\b(?:xls|xlsx|csv)\b/i);
  });

  it("keeps the raw numeric contract aligned across public copy and code", () => {
    for (const source of [pageCompact, toolSource, researchSource]) {
      expect(source.replace(/\s+/g, " ")).toContain("1 000 000 jours ouvrés");
      expect(source.toLocaleLowerCase("fr-FR")).toContain("avant conversion");
      expect(source.toLocaleLowerCase("fr-FR")).toContain("point");
    }
    expect(pageCompact).toContain("six décimales significatives");
    expect(toolSource).toContain("max={MAX_WORKING_DAYS}");
    expect(toolSource).toContain('step="0.000001"');
    expect(toolSource).toContain("preserveRawWorkingDays");
    expect(toolSource).not.toContain("parseNumber");
    expect(toolSource).not.toContain("Number(event.target.value)");
    expect(engineSource).toContain("BigInt(normalizedWhole)");
    expect(engineSource).toContain("resultUnits > MAX_WORKING_DAY_UNITS");
    expect(researchSource).toContain("9000000000.1234567");
    expect(researchSource).toContain("1000000.000001");
  });

  it("uses three dedicated SVG and WebP assets with the expected ratios", () => {
    for (const path of [...svgPaths, ...webpPaths]) {
      expect(existsSync(path)).toBe(true);
    }
    expect(svgSources[0]).toContain('width="1600" height="900"');
    expect(svgSources[1]).toContain('width="1200" height="900"');
    expect(svgSources[2]).toContain('width="900" height="900"');
    for (const path of webpPaths) {
      const bytes = readFileSync(path);
      expect(bytes.subarray(0, 4).toString("ascii")).toBe("RIFF");
      expect(bytes.subarray(8, 12).toString("ascii")).toBe("WEBP");
    }
    expect(
      pageSource.match(/calendrier-saas-(?:16x9|4x3|1x1)\.webp/g),
    ).toHaveLength(3);
  });

  it("keeps every internal editorial and commercial link on an existing route", () => {
    for (const route of [
      "guides/valider-idee-saas-avant-developper",
      "guides/cahier-des-charges-saas",
      "guides/plan-recette-application-metier",
      "services/saas-applications-metier",
      "demarrer-un-projet",
      "guides",
    ]) {
      expect(
        existsSync(resolve(repositoryRoot, "src/app", route, "page.tsx")),
      ).toBe(true);
    }
  });

  it("keeps the frozen input and P1 research dossier present", () => {
    expect(inputFreezeSource).toContain("combien-de-temps-developper-saas");
    expect(researchSource).toContain("Registre des affirmations");
    expect(researchSource).toContain("Journal P1");
    expect(researchSource).toContain("historique");
  });
});

function faqCategoriesInSource(): number {
  return (pageSource.match(/key: "(?:estimation|hypotheses|decision)"/g) ?? [])
    .length;
}
