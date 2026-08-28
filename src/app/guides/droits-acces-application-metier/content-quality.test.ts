import { existsSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { AccessRightsReadinessTool } from "./access-rights-readiness-tool";

const slugDirectory = dirname(fileURLToPath(import.meta.url));
const repositoryRoot = resolve(slugDirectory, "../../../..");
const publicDirectory = resolve(
  repositoryRoot,
  "public/guides/droits-acces-application-metier",
);

const pagePath = resolve(slugDirectory, "page.tsx");
const ogPath = resolve(slugDirectory, "opengraph-image.tsx");
const logicPath = resolve(slugDirectory, "access-rights-readiness.ts");
const toolPath = resolve(slugDirectory, "access-rights-readiness-tool.tsx");
const researchPath = resolve(
  repositoryRoot,
  "docs/research/droits-acces-application-metier.md",
);
const svgPaths = [
  resolve(publicDirectory, "matrice-droits-16x9.svg"),
  resolve(publicDirectory, "matrice-droits-4x3.svg"),
  resolve(publicDirectory, "matrice-droits-1x1.svg"),
];
const webpPaths = [
  resolve(publicDirectory, "matrice-droits-16x9.webp"),
  resolve(publicDirectory, "matrice-droits-4x3.webp"),
  resolve(publicDirectory, "matrice-droits-1x1.webp"),
];

const pageSource = readFileSync(pagePath, "utf8");
const ogSource = readFileSync(ogPath, "utf8");
const logicSource = readFileSync(logicPath, "utf8");
const toolSource = readFileSync(toolPath, "utf8");
const researchSource = readFileSync(researchPath, "utf8");
const pageCompact = pageSource.replace(/\s+/g, " ");
const toolCompact = toolSource.replace(/\s+/g, " ");
const svgSources = svgPaths.map((path) => readFileSync(path, "utf8"));
const publicCopy = [
  pageSource,
  ogSource.replace('export const runtime = "edge";', ""),
  logicSource,
  toolSource,
  ...svgSources,
].join("\n");
const publicCopyCompact = publicCopy.replace(/\s+/g, " ");
const toolMarkup = renderToStaticMarkup(
  createElement(AccessRightsReadinessTool),
);

describe("public content quality for the access-rights guide", () => {
  it("aligns the intent, H1 and social promise", () => {
    expect(pageSource).toContain('heroTitle="Qui peut voir et modifier quoi"');
    expect(pageSource).toContain('heroTitleEm="dans votre application métier"');
    expect(pageSource).toContain('heroTitleSuffix="?"');
    expect(ogSource).toContain(
      'title: "Droits d’accès d’une application métier"',
    );
    expect(ogSource).toContain(
      'subtitle: "Qui voit, modifie, valide, exporte ou supprime quoi ?"',
    );
    expect(pageSource.slice(0, 18_000)).toContain(
      "Une règle d’accès relie une personne, une action et un objet",
    );
  });

  it("answers early with objects, actions, decisions, scope and refusal", () => {
    const answerSection = pageSource.slice(
      pageSource.indexOf('id="reponse"'),
      pageSource.indexOf('id="matrice"'),
    );

    for (const expected of [
      "objets métier",
      "autorisé",
      "refusé",
      "à décider",
      "portée",
      "refus",
      "cas autorisé",
      "cas refusé",
      "Une inconnue",
    ]) {
      expect(answerSection.toLocaleLowerCase("fr-FR")).toContain(
        expected.toLocaleLowerCase("fr-FR"),
      );
    }

    expect(answerSection).not.toMatch(/\bRBAC\b/);
    expect(pageSource).toContain("Le contrôle par rôles, appelé RBAC");
  });

  it("keeps all seven controls visible and distinct", () => {
    for (const label of [
      "Rôles, objets et actions",
      "Portée et relations",
      "Refus en l’absence de règle",
      "Validation des droits sensibles",
      "Arrivée, mobilité et départ",
      "Tests d’autorisation et de refus",
      "Trace d’audit utile",
    ]) {
      expect(logicSource).toContain(label);
    }

    for (const controlId of [
      "matrix",
      "scopeAndRelations",
      "defaultDeny",
      "sensitiveApproval",
      "lifecycle",
      "acceptanceTests",
      "auditTrace",
    ]) {
      expect(logicSource).toContain(`id: "${controlId}"`);
    }
  });

  it("keeps role, attribute and relationship models understandable", () => {
    for (const explanation of [
      "Le contrôle par rôles, appelé RBAC",
      "Il devient moins lisible si vous créez",
      "la règle dépend d’un attribut",
      "ou d’une relation",
      "contrôle fondé sur des attributs (ABAC)",
      "sur des relations (ReBAC)",
      "La règle métier observable doit guider ce choix",
    ]) {
      expect(pageCompact).toContain(explanation);
    }
  });

  it("keeps legal claims inside the personal-data perimeter", () => {
    expect(pageCompact).toContain(
      "Les références RGPD et CNIL citées ici restent limitées aux traitements de données personnelles",
    );
    expect(pageCompact).toContain(
      "Le moindre privilège réduit les droits au besoin réel. C’est une recommandation de conception, pas une loi universelle",
    );
    expect(pageCompact).toContain(
      "La revue annuelle n’est pas une fréquence légale universelle",
    );
    expect(pageCompact).toContain(
      "Ici, un droit d’accès est une autorisation dans l’application",
    );
    expect(pageCompact).toContain(
      "Le droit d’une personne concernée à obtenir ses données au titre du RGPD, notamment son article 15, est un autre sujet",
    );
  });

  it("uses the current dated primary corpus", () => {
    for (const reference of [
      "securite-gerer-les-habilitations",
      "securite-tracer-les-operations",
      "2026-05/cnil_guide_securite_personnelle.pdf",
      "CELEX:32016R0679",
      "art_15/oj",
      "Authorization_Cheat_Sheet.html",
      "www-project-application-security-verification-standard",
    ]) {
      expect(pageSource).toContain(reference);
      expect(researchSource).toContain(reference);
    }

    for (const date of [
      "13 mars 2024",
      "14 mars 2024",
      "mise à jour 2026",
      "30 mai 2025",
      "30 juillet 2026",
    ]) {
      expect(`${pageSource}\n${researchSource}`).toContain(date);
    }
  });

  it("separates an audit trace from an alert and compliance proof", () => {
    for (const expected of [
      "Une trace enregistre une action ; une alerte exige un autre mécanisme",
      "Une trace devient une alerte seulement si une règle la repère",
      "Un journal sans lecture n’est pas une alerte",
      "Elle n’alerte pas automatiquement",
      "ne prouve pas, à elle seule, la conformité",
    ]) {
      expect(publicCopyCompact).toContain(expected);
    }
  });

  it("keeps lifecycle, temporary access and reviews observable", () => {
    for (const expected of [
      "arrivée, la mobilité et le départ",
      "Délégation limitée et date de fin",
      "Expiration ou retrait vérifié",
      "Ancienne requête refusée",
      "Absence de cumul non décidé",
    ]) {
      expect(pageCompact).toContain(expected);
    }
  });

  it("keeps the existing-function alternative and fictitious separation rule visible", () => {
    expect(pageCompact).toContain(
      "Avant de développer une couche de droits sur mesure",
    );
    expect(pageCompact).toContain(
      "Une personne ne valide jamais sa propre demande",
    );
    expect(researchSource).not.toMatch(/\bau-dessus d’un seuil\b/i);
  });

  it("turns each important rule into an allowed and denied test", () => {
    expect(pageCompact).toContain(
      "À chaque autorisation critique, associez un test de refus",
    );
    for (const testCase of [
      "Positif",
      "Horizontal",
      "Vertical",
      "Cycle de vie",
      "État",
      "Trace",
    ]) {
      expect(pageSource).toContain(`"${testCase}"`);
    }
    expect(pageCompact).toContain(
      "Le contrôle doit être appliqué côté serveur à chaque requête concernée",
    );
  });

  it("keeps the fictional case labelled before its narrative", () => {
    const labelIndex = pageSource.indexOf(
      'eyebrow="Exemple illustratif entièrement fictif"',
    );
    const narrativeIndex = pageSource.indexOf(
      "Dans ce scénario, une personne crée et consulte ses demandes",
    );

    expect(labelIndex).toBeGreaterThanOrEqual(0);
    expect(narrativeIndex).toBeGreaterThan(labelIndex);
    expect(pageCompact).toContain(
      "Aucun client, logiciel, organisation ou résultat réel n’est représenté",
    );
    expect(publicCopy).not.toMatch(
      /\b(?:notre client|chez un client|cas client réel|client accompagné)\b/i,
    );
  });

  it("keeps the tool local, closed-choice, resettable and accessible", () => {
    expect(toolSource).not.toMatch(
      /\b(?:fetch|XMLHttpRequest|localStorage|sessionStorage|document\.cookie)\b/,
    );
    expect(toolSource).not.toContain('type="text"');
    expect(toolSource).not.toContain("<textarea");
    expect(toolSource).toContain('aria-live="polite"');
    expect(toolSource).toContain('aria-atomic="true"');
    expect(toolSource).toContain("<fieldset");
    expect(toolSource).toContain("<legend");
    expect(toolSource).toContain("Réinitialiser");
    expect(toolSource).toContain("motion-reduce:transition-none");
    expect(
      toolSource.match(/\bfocus-within:ring-2\b/g)?.length,
    ).toBeGreaterThanOrEqual(2);
    expect(
      toolSource.match(/\bfocus-within:ring-cyan-500\b/g)?.length,
    ).toBeGreaterThanOrEqual(2);
    expect(toolCompact).toContain(
      "l’outil ne transmet, ne stocke et ne note aucune réponse",
    );
    expect(toolSource.match(/\bmin-h-11\b/g)?.length).toBeGreaterThanOrEqual(3);
  });

  it("renders every radio group with its own contextual legend", () => {
    const groups = [
      ...toolMarkup.matchAll(/(<fieldset\b[^>]*>)([\s\S]*?)<\/fieldset>/g),
    ];
    const expectedLegends = [
      "L’application traite-t-elle des données personnelles ?",
      "Certaines actions ont-elles un impact sensible ?",
      "Les droits changent-ils selon une équipe ou un établissement ?",
      "Des remplacements ou délégations temporaires existent-ils ?",
      "Rôles, objets et actions",
      "Portée et relations",
      "Refus en l’absence de règle",
      "Validation des droits sensibles",
      "Arrivée, mobilité et départ",
      "Tests d’autorisation et de refus",
      "Trace d’audit utile",
    ];

    expect(groups).toHaveLength(expectedLegends.length);
    expect(toolMarkup).toContain(
      '<section aria-labelledby="access-context-heading">',
    );
    expect(toolMarkup).toContain(
      '<section aria-labelledby="access-controls-heading">',
    );

    groups.forEach((group, index) => {
      const legendText = group[2]
        .match(/<legend\b[^>]*>([\s\S]*?)<\/legend>/)?.[1]
        .replace(/<[^>]+>/g, "")
        .trim();

      expect(group[1], expectedLegends[index]).toContain("aria-describedby=");
      expect(legendText).toBe(expectedLegends[index]);
      expect(group[2].match(/type="radio"/g)).toHaveLength(3);
    });
  });

  it("exposes no score, unsupported schema or spreadsheet download", () => {
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
    expect(toolCompact).toContain("aucun score");
  });

  it("avoids false certainty and universal legal claims", () => {
    for (const pattern of [
      /\bnous garantissons\b/i,
      /\bzéro risque\b/i,
      /\b100\s*%\b/,
      /\bconforme RGPD\b/i,
      /\bcertifié OWASP\b/i,
      /\bcertifié CNIL\b/i,
      /\bpreuve automatique de conformité\b/i,
      /\btous les droits doivent être revus chaque année\b/i,
      /\btous les journaux.*un an\b/i,
    ]) {
      expect(publicCopy).not.toMatch(pattern);
    }
  });

  it("keeps the commercial destination honest and delayed", () => {
    expect(pageSource).toContain(
      'primaryCtaHref: "/services/outils-internes-sur-mesure"',
    );
    expect(pageSource).toContain('mobileCtaLabel="Faire relire la matrice"');
    expect(pageSource).toContain('ctaLabel: "Faire relire la matrice"');
    expect(pageSource).toContain('ctaHref: "/demarrer-un-projet"');
    // Le lien commercial de fin d'article passe par `TrackedGuideCtaLink` :
    // sans lui, le clic le plus bas de la page n'émet aucun `guide_cta_click`
    // et la conversion n'est attribuable à aucun guide.
    expect(pageSource).toContain(
      '<TrackedGuideCtaLink\n              href="/demarrer-un-projet"\n              placement="article_end_inline"\n            >\n              décrire le projet\n            </TrackedGuideCtaLink>',
    );
    expect(pageSource.indexOf('href="/demarrer-un-projet"')).toBeGreaterThan(
      pageSource.indexOf('id="cas-fictif"'),
    );
  });

  it("uses direct language without editorial or metaphorical framing", () => {
    for (const expected of [
      "Avant de nommer un modèle technique, votre équipe doit répondre",
      "Gardez un rôle simple tant qu’il exprime la vraie règle",
      "L’outil affiche d’abord le point qui empêche de décider",
      "Une réponse documentée ne compense jamais un STOP antérieur",
      "Commencez par un seul objet",
    ]) {
      expect(pageCompact).toContain(expected);
    }

    for (const removed of [
      "Ce guide traite-t-il",
      "matrice concrète",
      "Votre équipe veut des règles claires, pas",
      "Commencez donc",
      "Un rôle simple gagne",
      "La trace raconte",
      "conforme par magie",
      "L’outil conserve le premier point",
      "Aucun bon point",
      "La recette alterne",
      "Une prochaine action autonome",
    ]) {
      expect(pageCompact).not.toContain(removed);
    }
  });

  it("ships exactly three original editorial ratios in SVG and WebP", () => {
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
    expect(svgSources[1]).toContain(
      '<title id="title">Cinq dimensions, deux tests et une trace</title>',
    );
    expect(svgSources[1]).toContain(
      ">Cinq dimensions, deux tests et une trace</text>",
    );
    expect(svgSources[1]).not.toMatch(/\bsix décisions\b/i);
    expect(svgSources[1]).toContain(
      "Refus par défaut · cycle arrivée–mobilité–départ · test autorisé + test refusé",
    );
    expect(svgSources[1]).not.toMatch(/aucun téléchargement/i);
    expect(svgSources[2]).toContain('fill="#67E8F9" opacity=".95"');
    expect(svgSources[2].match(/<path d="M/g)).toHaveLength(6);
    expect(svgSources[2]).toContain(">À la date prévue</text>");
    expect(svgSources[2]).not.toContain("Sans inertie");

    for (const source of svgSources) {
      expect(source).toContain("SCHÉMA");
      expect(source).toContain("FICTIVES");
      expect(source).toMatch(/SANS SCORE|AUCUN SCORE/);
      expect(source).toContain("<title");
      expect(source).toContain("<desc");
    }
  });

  it("keeps integration and external states explicit in research", () => {
    for (const expected of [
      'editorialStatus: "ready-for-human-review"',
      "Commit :** NON EFFECTUE",
      "Push :** NON EFFECTUE",
      "Déploiement :** NON EFFECTUE",
      "Publication :** NON EFFECTUEE",
      "URL publique :** NON VERIFIEE",
      "Indexation :** NON VERIFIEE",
    ]) {
      expect(researchSource).toContain(expected);
    }
  });
});
