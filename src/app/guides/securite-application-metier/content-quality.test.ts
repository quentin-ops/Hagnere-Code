import { existsSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const slugDirectory = dirname(fileURLToPath(import.meta.url));
const repositoryRoot = resolve(slugDirectory, "../../../..");
const publicDirectory = resolve(
  repositoryRoot,
  "public/guides/securite-application-metier",
);

const pagePath = resolve(slugDirectory, "page.tsx");
const ogPath = resolve(slugDirectory, "opengraph-image.tsx");
const logicPath = resolve(slugDirectory, "security-readiness.ts");
const toolPath = resolve(slugDirectory, "security-readiness-tool.tsx");
const researchPath = resolve(
  repositoryRoot,
  "docs/research/securite-application-metier.md",
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

describe("public content quality for the business-application security guide", () => {
  it("keeps H1, intent and social promise aligned", () => {
    expect(pageSource).toContain('heroTitle="Quel socle de sécurité exiger"');
    expect(pageSource).toContain('heroTitleEm="pour une application métier"');
    expect(pageSource).toContain('heroTitleSuffix="?"');
    expect(ogSource).toContain('title: "Sécurité d’une application métier"');
    expect(ogSource).toContain(
      'subtitle: "Menaces, restauration, détection et responsables"',
    );
    expect(pageSource.slice(0, 19_000)).toContain(
      "Les faits observables valent mieux qu’une promesse de sécurité",
    );
  });

  it("puts the direct answer, stop path and autonomous actions in the page", () => {
    for (const expected of [
      "prévenir",
      "détecter",
      "reprendre",
      "répondre",
      "restauration",
      "alerte",
      "responsable",
      "limitez le pilote ou reportez",
      "Une inconnue reste une question ouverte",
    ]) {
      expect(pageCompact.toLowerCase()).toContain(expected.toLowerCase());
    }
    expect(pageCompact).toContain(
      "Incident actif : quittez la revue générique",
    );
  });

  it("keeps all eight non-compensable controls visible in prose and logic", () => {
    for (const label of [
      "Conséquences et actifs",
      "Accès et secrets",
      "Développement, tests et dépendances",
      "Sauvegarde et restauration",
      "Journaux, alerte et détection",
      "Réponse à incident",
      "Maintenance et corrections",
      "Responsabilités et suppléance",
    ]) {
      expect(logicSource).toContain(label);
    }

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
      expect(logicSource).toContain(controlId);
    }

    const responsibilitiesDefinition = logicSource.slice(
      logicSource.indexOf('id: "responsibilities"'),
      logicSource.indexOf("] as const;"),
    );
    expect(responsibilitiesDefinition).toContain('minimum: "tested"');
    expect(responsibilitiesDefinition).toContain(
      "contacts et suppléance confirmés par un exercice",
    );
  });

  it("makes known context choices consequential without imposing an external expert", () => {
    expect(logicSource).toContain('"REVIEW_CONTEXTUAL_RISKS"');
    expect(pageCompact).toContain(
      "Un impact matériel ou critique, des données personnelles ou une exposition Internet conduisent à une revue qui tient compte du contexte",
    );
    expect(pageCompact).toContain(
      "Ces compétences peuvent être internes ; aucun intervenant extérieur n’est imposé par défaut",
    );
    expect(pageCompact).toContain(
      "Seul le contexte déclaré limité, sans données personnelles et sans exposition Internet, aboutit à la revue métier limitée",
    );
  });

  it("defines security and continuity jargon at its first useful explanation", () => {
    for (const explanation of [
      "règlement général sur la protection des données (RGPD)",
      "Application Security Verification Standard",
      "perte de données maximale admissible est appelée PDMA, ou RPO en anglais",
      "durée maximale d’interruption admissible est appelée DMIA, ou RTO en anglais",
      "délégué à la protection des données (DPD, aussi appelé DPO)",
      "responsable de la sécurité des systèmes d’information (RSSI)",
      "comment continuer sans l’application (mode dégradé)",
      "Govern (gouverner), Identify (identifier)",
      "Un exercice sur table — une simulation discutée sans provoquer d’incident réel",
    ]) {
      expect(pageCompact).toContain(explanation);
    }
  });

  it("replaces internal escalation jargon with the action expected from the reader", () => {
    expect(publicCopy).not.toMatch(/\b(?:escalade|escalader|pipeline)\b/);
    expect(pageCompact).toContain(
      "alerte le niveau responsable, y compris en cas d’absence",
    );
    expect(pageCompact).toContain("transmission au niveau responsable");
  });

  it("keeps the P4 voice varied without talking about the guide itself", () => {
    for (const heading of [
      "Une menace prend sens par ses conséquences sur l’activité",
      "Prévention, détection, reprise et réponse se tiennent ensemble",
      "La restauration révèle ce que la sauvegarde permet vraiment",
      "Les responsabilités doivent tenir même en cas d’absence",
      "L’outil fait remonter le premier point à traiter",
      "Une décision écrite garde ses limites visibles",
      "Les vraies données attendront la restauration et l’alerte",
    ]) {
      expect(pageSource).toContain(`title="${heading}"`);
    }

    for (const discardedAutomation of [
      "Demandez une chaîne de preuves, pas une promesse de sécurité",
      "Traduisez la menace en conséquence métier observable",
      "Reliez prévention, détection, reprise et réponse",
      "Prouvez la capacité de reprise par une restauration",
      "Nommez qui décide, qui agit et qui remplace",
      "Trouvez la prochaine preuve sans fabriquer une note",
      "Choisissez la suite sans transformer la revue en feu vert",
      "La valeur du guide est la décision suivante",
      "Le lecteur repart avec une action observable",
      "Ce guide impose",
      "le guide n’impose",
    ]) {
      expect(pageSource).not.toContain(discardedAutomation);
    }

    expect(pageCompact).toContain("Terminez par une action datée");
    expect(pageCompact).toContain(
      "Un accès bloqué aide peu si les secrets fuient ailleurs",
    );
    expect(pageCompact).toContain(
      "Des journaux sans alerte laissent l’événement dormir",
    );
  });

  it("keeps legal and framework claims within their actual perimeter", () => {
    expect(pageCompact).toContain("Pour un traitement de données personnelles");
    expect(pageCompact).toContain(
      "Il ne fournit pas une fréquence de sauvegarde ou une architecture universelle",
    );
    expect(pageCompact).toContain(
      "Le repère 3-2-1 n’est pas présenté ici comme une loi universelle",
    );
    expect(pageCompact).toContain(
      "six mois à un an concerne les données de journalisation destinées à sécuriser un traitement de données personnelles",
    );
    expect(pageCompact).toContain(
      "Ce n’est ni une certification, ni une preuve globale de sécurité",
    );
    expect(pageCompact).toContain(
      "Les fonctions n’imposent ni ordre, ni checklist universelle",
    );
    expect(pageCompact).toContain(
      "ses recommandations ne sont pas normatives sauf texte contraire et doivent être adaptées",
    );
    expect(pageCompact).toContain(
      "ses recommandations de non normatives sauf texte contraire et exige leur adaptation au contexte",
    );
  });

  it("uses the dated primary corpus in public copy and research", () => {
    for (const reference of [
      "art_32/oj/fra",
      "2026-05/cnil_guide_securite_personnelle.pdf",
      "securite-des-donnees-les-regles-essentielles",
      "securite-encadrer-les-developpements-informatiques",
      "securite-sauvegarder",
      "securite-tracer-les-operations",
      "anssi_fondamentaux_sauvegarde_systemes_dinformation_v1.1.pdf",
      "recommandations-de-securite-pour-larchitecture-dun-systeme-de-journalisation",
      "www-project-application-security-verification-standard",
      "nist-cybersecurity-framework-csf-20",
    ]) {
      expect(pageSource).toContain(reference);
      expect(researchSource).toContain(reference);
    }

    for (const datedClaim of [
      "27 novembre 2025",
      "28 janvier 2022",
      "30 mai 2025",
      "26 février 2024",
      "14 mars 2024",
      "19 juin 2026",
      "mise à jour 2026",
    ]) {
      expect(pageSource).toContain(datedClaim);
      expect(researchSource).toContain(datedClaim);
    }

    expect(researchSource).toContain(
      "anssi-guide-recommandations_securite_architecture_systeme_journalisation.pdf",
    );
    expect(researchSource).toContain("recommandation_-_journalisation.pdf");
  });

  it("does not cannibalize the SaaS buyer-evidence guide", () => {
    for (const pattern of [
      /\bquestionnaire de sécurité\b/i,
      /\bquestionnaire acheteur\b/i,
      /\bprospect grand compte\b/i,
      /\bcycle de vente\b/i,
      /\bsales enablement\b/i,
      /\bclosing commercial\b/i,
      /\bdossier de vente\b/i,
    ]) {
      expect(publicCopy).not.toMatch(pattern);
    }
    expect(researchSource).toContain("`securite-saas-b2b`");
    expect(researchSource).toContain(
      "aucun questionnaire commercial, aucune promesse de vente",
    );
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
      /\bscore global calculé\b/i,
      /hagnere-code\.fr/i,
    ]) {
      expect(publicCopy).not.toMatch(pattern);
    }

    expect(pageSource).toContain("buildGuideStructuredData");
    expect(pageSource).toContain('value: "Aucun"');
    expect(toolCompact).toContain("Aucun score n’est calculé");
  });

  it("keeps the planner local, closed-choice and accessible", () => {
    expect(toolSource).not.toMatch(
      /\b(?:fetch|XMLHttpRequest|localStorage|sessionStorage|document\.cookie)\b/,
    );
    expect(toolSource).not.toContain('type="text"');
    expect(toolSource).not.toContain("<textarea");
    expect(toolSource).toContain('aria-live="polite"');
    expect(toolSource).toContain("<fieldset>");
    expect(toolSource).toContain("<legend");
    expect(toolSource).toContain("motion-reduce:transition-none");
    expect(toolCompact).toContain(
      "aucune réponse ne quitte la page ni n’est enregistrée durablement par cet outil",
    );
    expect(toolSource.match(/\bmin-h-11\b/g)?.length).toBeGreaterThanOrEqual(3);
  });

  it("labels the fictional case before its narrative and avoids false clients", () => {
    const labelIndex = pageSource.indexOf(
      'eyebrow="Scénario entièrement fictif"',
    );
    const narrativeIndex = pageSource.indexOf(
      "L’hébergement annonce des sauvegardes quotidiennes",
    );

    expect(labelIndex).toBeGreaterThanOrEqual(0);
    expect(narrativeIndex).toBeGreaterThan(labelIndex);
    expect(pageCompact).toContain(
      "Aucun client, système, incident ou résultat réel n’est représenté",
    );
    expect(publicCopy).not.toMatch(
      /\b(?:notre client|chez un client|cas client réel|client accompagné)\b/i,
    );
  });

  it("keeps false certainty and unsupported universals out", () => {
    for (const pattern of [
      /\bnous garantissons\b/i,
      /\bzéro risque\b/i,
      /\b100\s*%\b/,
      /\bconforme RGPD\b/i,
      /\bcertifié OWASP\b/i,
      /\bcertifié NIST\b/i,
      /\bcertifié ANSSI\b/i,
      /\bapplication inviolable\b/i,
      /\bRPO de 24 h pour tous\b/i,
      /\btous les logs.*un an\b/i,
      /\bprix moyen\b/i,
      /\bdélai moyen\b/i,
    ]) {
      expect(publicCopy).not.toMatch(pattern);
    }
  });

  it("routes audit first and commercial contact only after the decision path", () => {
    expect(pageSource).toContain('primaryCtaHref: "/services/audit-technique"');
    expect(pageSource).toContain('ctaHref: "/services/audit-technique"');
    expect(pageSource).toContain(
      '<Link href="/demarrer-un-projet">décrire le projet</Link>',
    );
    expect(pageSource.indexOf('href="/demarrer-un-projet"')).toBeGreaterThan(
      pageSource.indexOf('id="decision"'),
    );
  });

  it("ships exactly three editorial ratios in SVG and WebP", () => {
    for (const file of [...svgPaths, ...webpPaths]) {
      expect(existsSync(file), file).toBe(true);
    }

    expect(svgSources[0]).toMatch(
      /width="1600" height="900" viewBox="0 0 1600 900"/,
    );
    expect(svgSources[1]).toMatch(
      /width="1200" height="900" viewBox="0 0 1200 900"/,
    );
    expect(svgSources[1]).toContain(
      'x="70" y="82" fill="#67E8F9" font-family="Arial, Helvetica, sans-serif" font-size="17" font-weight="700" letter-spacing="3">REVUE AVANT MISE EN SERVICE</text>',
    );
    expect(svgSources[1]).not.toContain(
      "APPLICATION MÉTIER · REVUE AVANT MISE EN SERVICE",
    );
    expect(svgSources[2]).toMatch(
      /width="1000" height="1000" viewBox="0 0 1000 1000"/,
    );

    for (const source of svgSources) {
      expect(source).toContain("STOP");
      expect(source).toMatch(/SCHÉMA/);
      expect(source).toContain("RÉPONDRE");
      expect(source).not.toContain("DÉCIDER");
    }
  });

  it("names the four capacities consistently in accessible SVG descriptions", () => {
    for (const source of svgSources) {
      const description = source.match(/<desc id="desc">([^<]+)<\/desc>/i)?.[1];

      expect(description).toBeDefined();
      expect(description?.toLocaleLowerCase("fr-FR")).toContain(
        "prévenir, détecter, reprendre et répondre",
      );
      expect(source).not.toMatch(/décider/i);
    }
  });

  it("keeps publication-state unknowns explicit in the handoff", () => {
    expect(researchSource).toContain(
      'datePublished: "<instant réel de première publication>"',
    );
    expect(researchSource).toContain(
      'readTimeMin: "<mesure réelle sur le HTML servi>"',
    );
    expect(researchSource).toContain(
      'editorialStatus: "ready-for-human-review"',
    );
    expect(researchSource).toContain("non committé, non poussé, non déployé");
    expect(researchSource).toContain("état public de la route");
    expect(researchSource).toContain("indexation");
  });
});
