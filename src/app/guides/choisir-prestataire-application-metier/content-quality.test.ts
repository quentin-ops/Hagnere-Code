import { existsSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const slugDirectory = dirname(fileURLToPath(import.meta.url));
const repositoryRoot = resolve(slugDirectory, "../../../..");
const publicDirectory = resolve(
  repositoryRoot,
  "public/guides/choisir-prestataire-application-metier",
);

const pagePath = resolve(slugDirectory, "page.tsx");
const ogPath = resolve(slugDirectory, "opengraph-image.tsx");
const logicPath = resolve(slugDirectory, "provider-evidence.ts");
const toolPath = resolve(slugDirectory, "provider-evidence-tool.tsx");
const researchPath = resolve(
  repositoryRoot,
  "docs/research/choisir-prestataire-application-metier.md",
);
const svgPaths = [
  resolve(publicDirectory, "comparaison-preuves-16x9.svg"),
  resolve(publicDirectory, "comparaison-preuves-4x3.svg"),
  resolve(publicDirectory, "comparaison-preuves-1x1.svg"),
];
const webpPaths = [
  resolve(publicDirectory, "comparaison-preuves-16x9.webp"),
  resolve(publicDirectory, "comparaison-preuves-4x3.webp"),
  resolve(publicDirectory, "comparaison-preuves-1x1.webp"),
];

const pageSource = readFileSync(pagePath, "utf8");
const ogSource = readFileSync(ogPath, "utf8");
const logicSource = readFileSync(logicPath, "utf8");
const toolSource = readFileSync(toolPath, "utf8");
const researchSource = readFileSync(researchPath, "utf8");
const pageCompact = pageSource.replace(/\s+/g, " ");
const toolCompact = toolSource.replace(/\s+/g, " ");
const svgSources = svgPaths.map((file) => readFileSync(file, "utf8"));
const publicCopy = [
  pageSource,
  ogSource.replace('export const runtime = "edge";', ""),
  logicSource,
  toolSource,
  ...svgSources,
].join("\n");

describe("public content quality for the provider-selection guide", () => {
  it("keeps the H1, intent and social promise aligned", () => {
    expect(pageSource).toContain('heroTitle="Comment choisir le prestataire"');
    expect(pageSource).toContain('heroTitleEm="de votre application métier"');
    expect(pageSource).toContain('heroTitleSuffix="?"');
    expect(ogSource).toContain(
      'title: "Choisir un prestataire d’application métier"',
    );
    expect(ogSource).toContain(
      'subtitle: "Un cas commun, huit points à documenter"',
    );
    expect(pageSource.slice(0, 22_000)).toContain(
      "Le choix commence quand les dossiers décrivent le même projet",
    );
  });

  it("puts the answer, counter-case and independent next action in the page", () => {
    for (const expected of [
      "Agence, freelance ou équipe interne peuvent convenir",
      "financez un cadrage court",
      "même situation métier fictive",
      "Une inconnue reste une inconnue",
      "Une condition inacceptable ne se compense pas",
    ]) {
      expect(pageCompact).toContain(expected);
    }
    expect(pageCompact).toContain("ne retenez personne");
  });

  it("labels the fictional case before its business narrative", () => {
    const labelIndex = pageSource.indexOf(
      'eyebrow="Scénario entièrement fictif"',
    );
    const narrativeIndex = pageSource.indexOf(
      "Une personne saisit une commande reçue par téléphone",
    );

    expect(labelIndex).toBeGreaterThanOrEqual(0);
    expect(narrativeIndex).toBeGreaterThan(labelIndex);
    expect(pageSource).toContain(
      "Aucun client, volume, prix ou système réel n’est représenté.",
    );
  });

  it("keeps all non-compensable subjects visible in prose and logic", () => {
    for (const expected of [
      "Compréhension",
      "Périmètre",
      "Validation",
      "Coûts",
      "Données",
      "Droits et comptes",
      "Maintenance",
      "Sortie",
    ]) {
      expect(pageSource).toContain(expected);
    }

    for (const criterionId of [
      "businessUnderstanding",
      "scopeAndExclusions",
      "acceptance",
      "costs",
      "dataAndSecurity",
      "rightsAndAccounts",
      "maintenance",
      "exit",
    ]) {
      expect(logicSource).toContain(criterionId);
    }
  });

  it("does not expose a score, unsupported schema or spreadsheet download", () => {
    for (const pattern of [
      /\bFAQPage\b/,
      /\bHowTo\b/,
      /\bReview\b/,
      /\bAggregateRating\b/,
      /\bwordCount\b/,
      /\.(?:xlsx?|csv)\b/i,
      /\bscore sur 100\b/i,
      /\bnote pondérée\b/i,
      /hagnere-code\.fr/i,
    ]) {
      expect(publicCopy).not.toMatch(pattern);
    }

    expect(pageSource).toContain("buildGuideStructuredData");
    expect(pageSource).toContain("sans le réduire à une note");
    expect(pageSource).toContain("SANS SCORE GLOBAL");
  });

  it("keeps the tool local and excludes confidential free text", () => {
    expect(toolSource).not.toMatch(
      /\b(?:fetch|XMLHttpRequest|localStorage|sessionStorage)\b/,
    );
    expect(toolSource).not.toContain('type="text"');
    expect(toolSource).not.toContain("<textarea");
    expect(toolCompact).toContain(
      "les réponses restent dans cette page et ne sont pas envoyées",
    );
    expect(toolSource).toContain("Ne saisissez ni nom");
    expect(toolCompact).toContain("ne certifie pas un prestataire");
  });

  it("keeps every interactive control at least 44px tall", () => {
    expect(toolSource.match(/\bmin-h-11\b/g)).toHaveLength(3);
    expect(toolSource.match(/\bpy-3\b/g)).toHaveLength(3);
    expect(toolSource).not.toMatch(/\bpy-2(?:\.5)?\b/);
    expect(toolSource).toContain("motion-reduce:transition-none");
  });

  it("uses bounded primary references on the public page and in research", () => {
    const references = [
      "Guide_sourcage_operationnel.pdf",
      "reglement-europeen-protection-donnees/chapitre4",
      "rgpd-comment-bien-identifier-son-role",
      "securite-gerer-la-sous-traitance",
      "standard-contractual-clauses-controllers-and-processors-eueea_fr",
      "mon-fournisseur-de-service-me-dit-que-cest-securise-8ldkcu",
      "LEGIARTI000006278958",
      "LEGIARTI000039279818",
      "externalisation-et-securite-des-systemes-dinformation",
      "vosdroits/R19859",
    ];

    for (const reference of references) {
      expect(pageSource).toContain(reference);
      expect(researchSource).toContain(reference);
    }

    expect(pageCompact).toContain(
      "Elle vise la commande publique ; ce guide en transpose seulement les questions",
    );
    expect(pageSource).toContain("Ce document date de 2010");
    expect(pageCompact).toContain("Ce guide ne qualifie pas votre situation");
    expect(pageCompact).toContain(
      "un contrat ou un autre acte juridique écrit",
    );
    expect(pageCompact).toContain("la qualification dépend des faits");
  });

  it("does not let observation silently replace documentary evidence", () => {
    expect(toolSource).toContain('label: "Écrit + observé"');
    expect(toolCompact).toContain(
      "conserve cette trace et ajoute le travail sur le cas fictif commun",
    );
    expect(logicSource).toContain('"written_and_observed"');
    expect(logicSource).not.toMatch(/minimum:\s*"observed"/);
  });

  it("keeps false certainty and false-client language out", () => {
    for (const pattern of [
      /\bnotre client\b/i,
      /\bchez un client\b/i,
      /\bcas client\b/i,
      /\bnous garantissons\b/i,
      /\bzéro risque\b/i,
      /\b100\s*%\b/,
      /\bconforme RGPD\b/i,
      /\bmeilleure agence\b/i,
      /\bmeilleur freelance\b/i,
      /\bprix moyen\b/i,
      /\bdélai moyen\b/i,
      /\bprojet livré\b/i,
      /\bdevis réel\b/i,
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

    for (const [index, source] of svgSources.entries()) {
      expect(source, svgPaths[index]).toMatch(
        /(?:Aucune donnée réelle|AUCUNE DONNÉE RÉELLE|Aucune donnée réelle)/,
      );
      expect(source, svgPaths[index]).toContain("STOP");
    }
  });

  it("documents the completed local integration without pretending publication", () => {
    expect(researchSource).toContain('datePublished: "<instant réel');
    expect(researchSource).toContain(
      'editorialStatus: "ready-for-human-review"',
    );
    expect(researchSource).toContain(
      "intégration : effectuée localement, en attente du contre-audit Q",
    );
    expect(researchSource).toContain("3 375 mots visibles");
    expect(researchSource).toContain("Aucun déploiement");
    expect(researchSource).toContain("publication : non effectuée");
    expect(researchSource).toContain("indexation : non vérifiée");
  });
});
