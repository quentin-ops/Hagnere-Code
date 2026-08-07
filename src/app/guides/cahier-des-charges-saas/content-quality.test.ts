import { existsSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { specificationBlocks } from "./saas-specification-engine";
import { SaasSpecificationTool } from "./saas-specification-tool";

const slugDirectory = dirname(fileURLToPath(import.meta.url));
const repositoryRoot = resolve(slugDirectory, "../../../..");
const publicDirectory = resolve(
  repositoryRoot,
  "public/guides/cahier-des-charges-saas",
);

const pagePath = resolve(slugDirectory, "page.tsx");
const ogPath = resolve(slugDirectory, "opengraph-image.tsx");
const enginePath = resolve(slugDirectory, "saas-specification-engine.ts");
const toolPath = resolve(slugDirectory, "saas-specification-tool.tsx");
const researchPath = resolve(
  repositoryRoot,
  "docs/research/cahier-des-charges-saas.md",
);
const inputFreezePath = resolve(
  repositoryRoot,
  "docs/research/cahier-des-charges-saas-input-freeze.md",
);
const svgPaths = [
  resolve(publicDirectory, "cahier-saas-16x9.svg"),
  resolve(publicDirectory, "cahier-saas-4x3.svg"),
  resolve(publicDirectory, "cahier-saas-1x1.svg"),
];
const webpPaths = [
  resolve(publicDirectory, "cahier-saas-16x9.webp"),
  resolve(publicDirectory, "cahier-saas-4x3.webp"),
  resolve(publicDirectory, "cahier-saas-1x1.webp"),
];

const pageSource = readFileSync(pagePath, "utf8");
const ogSource = readFileSync(ogPath, "utf8");
const engineSource = readFileSync(enginePath, "utf8");
const toolSource = readFileSync(toolPath, "utf8");
const researchSource = readFileSync(researchPath, "utf8");
const inputFreezeSource = readFileSync(inputFreezePath, "utf8");
const svgSources = svgPaths.map((path) => readFileSync(path, "utf8"));
const pageCompact = pageSource.replace(/\s+/g, " ");
const toolMarkup = renderToStaticMarkup(createElement(SaasSpecificationTool));
const publicCopy = [
  pageSource,
  ogSource.replace('export const runtime = "edge";', ""),
  engineSource,
  toolSource,
  ...svgSources,
].join("\n");

describe("public content quality for the SaaS specification guide", () => {
  it("aligns search intent, H1 and the social promise", () => {
    expect(pageSource).toContain('heroTitle="Cahier des charges SaaS :"');
    expect(pageSource).toContain('heroTitleEm="faire chiffrer"');
    expect(pageSource).toContain('heroTitleSuffix="le même produit"');
    expect(pageSource).toContain(
      'const guide = getGuide("cahier-des-charges-saas")',
    );
    expect(ogSource).toContain('title: "Cahier des charges SaaS"');
    expect(ogSource).toContain(
      'subtitle: "Faire chiffrer le même produit par chaque prestataire"',
    );
  });

  it("answers before the first visual with all comparison fields", () => {
    const answerSection = pageSource.slice(
      pageSource.indexOf('id="reponse-courte"'),
      pageSource.indexOf('id="frontiere"'),
    );

    for (const expected of [
      "même SaaS",
      "responsable",
      "preuve de réception",
      "exclusion",
      "STOP",
      "À décider",
      "ne la compense pas",
    ]) {
      expect(answerSection.toLocaleLowerCase("fr-FR")).toContain(
        expected.toLocaleLowerCase("fr-FR"),
      );
    }
  });

  it("covers the complete lifecycle of a client organization", () => {
    for (const expected of [
      "création de l’organisation",
      "premier propriétaire",
      "transfert de responsabilité",
      "suspension",
      "fermeture",
      "invitation",
      "modification de rôle",
      "révocation",
      "Atelier Nord",
      "Studio Rivage",
    ]) {
      expect(pageCompact).toContain(expected);
    }
  });

  it("compares development with an already-paid, simpler or no-build option", () => {
    for (const expected of [
      "fonction déjà payée",
      "Processus plus léger",
      "Ne pas développer",
      "un cahier des charges n’est pas une raison de commander du code",
      "écarts décisifs",
    ]) {
      expect(pageCompact).toContain(expected);
    }

    expect(engineSource).toContain("une fonction déjà payée");
    expect(engineSource).toContain("l’option plus simple");
  });

  it("keeps product access rules observable and versioned", () => {
    expect(pageCompact).toContain(
      "son objet, son action, sa portée et son refus",
    );

    for (const expected of [
      "cas autorisé",
      "cas refusé",
      "v5.0.0-8.1.1",
      "v5.0.0-8.2.2",
      "v5.0.0-8.3.1",
      "v5.0.0-8.3.2",
      "v5.0.0-8.4.1",
      "v5.0.0-7.4.2",
    ]) {
      expect(pageCompact).toContain(expected);
      expect(researchSource).toContain(expected);
    }
  });

  it("separates offers, internal subscription state and payment provider", () => {
    for (const expected of [
      "table qui relie chaque offre aux droits d’usage",
      "Événement observé",
      "État interne",
      "Effet sur le droit",
      "Message client",
      "Action et responsable",
      "ne choisit pas Stripe",
      "ne copie pas ses statuts comme modèle universel",
    ]) {
      expect(pageCompact).toContain(expected);
    }

    expect(pageCompact).not.toMatch(/\bStripe est (?:le|un) standard\b/i);
  });

  it("distinguishes membership revocation from whole-account termination", () => {
    for (const expected of [
      "requête suivante sur la portée retirée",
      "toutes les sessions prennent fin si le compte entier est désactivé ou supprimé",
      "changement d’autorisation ou ses mesures compensatoires",
    ]) {
      expect(pageCompact).toContain(expected);
    }

    expect(researchSource).toContain(
      "Distinguer retrait d’une portée, qui doit être refusée, et désactivation du compte",
    );
    expect(engineSource).toContain(
      "ses éventuels accès à une autre organisation ne sont pas modifiés",
    );
  });

  it("covers failures, operations, support access and data decisions", () => {
    for (const expected of [
      "Action échouée",
      "Événement manquant",
      "Tiers indisponible",
      "Correction manuelle",
      "Accès support",
      "Ouverture, intervention, fermeture, puis refus",
      "qui le détecte",
      "revenir en arrière",
      "aucune perte ni double droit",
      "inventaire de données",
      "données de facturation",
      "données de support",
      "durée inconnue",
    ]) {
      expect(pageCompact).toContain(expected);
    }
  });

  it("compares full maintenance and exit costs without inventing a number", () => {
    for (const expected of [
      "Le coût complet garde le même périmètre",
      "Cadrage et reprise",
      "Intégrations et licences",
      "Migration et adoption",
      "maintenance corrective et évolutive",
      "Coût de sortie",
      "inconnue en zéro",
    ]) {
      expect(pageCompact).toContain(expected);
    }
  });

  it("distinguishes backup, restore, export, cancellation and deletion", () => {
    for (const expected of [
      "Sauvegarder",
      "Restaurer",
      "jeu fictif restauré",
      "Exporter",
      "Résiliation demandée",
      "Supprimer",
      "testez la sortie prévue",
      "restauration impossible",
    ]) {
      expect(pageCompact.toLocaleLowerCase("fr-FR")).toContain(
        expected.toLocaleLowerCase("fr-FR"),
      );
    }
  });

  it("states the Data Act boundary without universalizing SaaS portability", () => {
    for (const expected of [
      "chapitre VI",
      "services de traitement de données",
      "articles 23 à 25",
      "champ",
      "données exportables",
      "actifs numériques",
      "tout abonnement appelé SaaS",
      "faites qualifier l’application du Data Act",
    ]) {
      expect(pageCompact).toContain(expected);
    }

    for (const forbidden of [
      /\btout SaaS est couvert par le Data Act\b/i,
      /\ble Data Act impose l’export à tous les SaaS\b/i,
      /\bdroit universel d’export\b/i,
    ]) {
      expect(publicCopy).not.toMatch(forbidden);
    }
  });

  it("makes non-functional requirements testable without claiming compliance", () => {
    for (const expected of [
      "conditions, l’environnement, le seuil décidé",
      "WCAG 2.2",
      "2.1.1",
      "2.4.7",
      "3.3.1",
      "3.3.2",
      "4.1.3",
      "320 px",
      "volume déclaré puis à son double",
      "variation de coût séparée",
      "nouveaux tests",
      "personne habilitée prononce l’acceptation",
    ]) {
      expect(pageCompact).toContain(expected);
    }

    for (const forbidden of [
      /\bconforme RGPD\b/i,
      /\bconforme WCAG\b/i,
      /\bcertifié OWASP\b/i,
      /\bnous garantissons\b/i,
      /\bzéro risque\b/i,
      /\b100\s*%\b/,
    ]) {
      expect(publicCopy).not.toMatch(forbidden);
    }
  });

  it("renders all nine distinct decision blocks in the local tool", () => {
    const fieldsets = [
      ...toolMarkup.matchAll(/<fieldset\b[^>]*>([\s\S]*?)<\/fieldset>/g),
    ];

    expect(fieldsets).toHaveLength(specificationBlocks.length);
    for (const block of specificationBlocks) {
      expect(toolMarkup).toContain(block.title);
      expect(toolMarkup).toContain(block.decisionPrompt);
      expect(toolMarkup).toContain(block.ownerPrompt);
      expect(toolMarkup).toContain(block.evidencePrompt);
      expect(toolMarkup).toContain(block.exclusionPrompt);
      expect(toolMarkup).toContain(block.blockingUnknownPrompt);
    }

    expect(toolMarkup.match(/<textarea\b/g)).toHaveLength(
      specificationBlocks.length * 5,
    );
    expect(pageSource).toContain('{ label: "Champs par bloc", value: "5" }');
    expect(pageCompact).toContain("45 zones de texte");
    expect(toolSource).toContain("cinq champs séparés");
  });

  it("keeps the tool local, resettable, copyable and keyboard-visible", () => {
    expect(toolSource).not.toMatch(
      /\b(?:fetch|XMLHttpRequest|localStorage|sessionStorage|indexedDB|document\.cookie)\b/,
    );
    expect(toolSource).toContain("navigator.clipboard.writeText");
    expect(toolSource).toContain("Copier le Markdown");
    expect(toolSource).toContain("Réinitialiser");
    expect(toolSource).toContain("Charger l’exemple fictif");
    expect(toolSource).toContain('aria-live="polite"');
    expect(toolMarkup.match(/role="status"/g)).toHaveLength(1);
    expect(toolMarkup).not.toMatch(/<section\b[^>]*(?:aria-live|aria-atomic)/);

    const conciseStatus = toolMarkup.match(
      /<div role="status" aria-atomic="true">([\s\S]*?)<\/div>/,
    )?.[1];
    expect(conciseStatus).toContain(
      "STOP — une décision ou une inconnue bloquante reste à traiter",
    );
    expect(conciseStatus).not.toContain("STOP à attribuer");
    expect(conciseStatus).not.toContain("Points à compléter");
    expect(conciseStatus).not.toContain("Prochaine action");
    expect(toolSource).toContain("focus-visible:outline");
    expect(toolSource).toContain("motion-reduce:transition-none");
    expect(toolSource.match(/\bmin-h-11\b/g)?.length).toBeGreaterThanOrEqual(3);
    expect(toolSource).toContain("dark:");
    expect(pageCompact).toContain("aucun fichier XLS, XLSX ou CSV");
  });

  it("uses non-compensable STOP branches and no global score", () => {
    expect(engineSource).toContain("STOP_REQUIRED_INPUTS_UNKNOWN");
    expect(engineSource).toContain("CLARIFY_BEFORE_COMPARISON");
    expect(engineSource).toContain("CANDIDATE_FOR_VENDOR_COMPARISON");
    expect(engineSource).toContain("Une ligne STOP n’est compensée");
    expect(engineSource).toContain("declaresNoBlockingUnknown");
    expect(engineSource).toContain(
      'normalizeBlockingUnknownDeclaration(value) === "aucune identifiee"',
    );
    expect(
      engineSource.match(/blockingUnknown: "Aucune identifiée"/g),
    ).toHaveLength(specificationBlocks.length);
    expect(toolSource).toContain("Premier point à traiter · aucun score");
    expect(pageSource).toContain('{ label: "Score global", value: "Aucun" }');

    for (const forbidden of [
      /\bscore sur 100\b/i,
      /\bnote pondérée\b/i,
      /\bscore global calculé\b/i,
      /\bAggregateRating\b/,
      /\bReview\b/,
    ]) {
      expect(publicCopy).not.toMatch(forbidden);
    }
  });

  it("keeps public vocabulary direct without the jargon removed in P3", () => {
    for (const forbidden of [
      /\bback-office\b/i,
      /\bremédiation\b/i,
      /\bréconcilier\b/i,
      /\bscalable\b/i,
      /\bretests?\b/i,
    ]) {
      expect(publicCopy).not.toMatch(forbidden);
    }
  });

  it("labels the complete DossierClair case before showing it", () => {
    const labelIndex = pageSource.indexOf(
      'eyebrow="Exemple entièrement fictif"',
    );
    const outputIndex = pageSource.indexOf("{dossierClair.markdown}");

    expect(labelIndex).toBeGreaterThanOrEqual(0);
    expect(outputIndex).toBeGreaterThan(labelIndex);
    expect(pageCompact).toContain(
      "Atelier Nord et Studio Rivage sont deux organisations inventées",
    );
    expect(pageCompact).toContain(
      "20 puis 40 organisations, 100 puis 200 personnes internes",
    );
    expect(pageCompact).toContain("hypothèses fictives de consultation");
    expect(engineSource).toContain(
      'projectName: "DossierClair — exemple entièrement fictif"',
    );
    expect(engineSource).toContain("Studio Rivage");
    expect(engineSource).toContain("Remise aux prestataires");
  });

  it("limits structured data to Article and BreadcrumbList helpers", () => {
    expect(pageSource).toContain("buildGuideStructuredData");
    expect(pageSource).toContain('type="application/ld+json"');

    for (const forbidden of [
      /\bFAQPage\b/,
      /\bHowTo\b/,
      /\bOffer\b/,
      /\bAggregateRating\b/,
      /\bwordCount\b/,
    ]) {
      expect(publicCopy).not.toMatch(forbidden);
    }
  });

  it("uses only the frozen internal destinations", () => {
    const internalDestinations = [
      ...pageSource.matchAll(
        /(?:href=|href:|primaryCtaHref:|ctaHref:)\s*["'](\/[^"'#?]*)/g,
      ),
    ].map((match) => match[1]);
    const allowed = new Set([
      "/guides/valider-idee-saas-avant-developper",
      "/guides/droits-acces-application-metier",
      "/guides/combien-de-temps-developper-saas",
      "/guides/mvp-saas-quoi-inclure",
      // Ajoutés le 7 août 2026 lors de la reprise du maillage interne :
      // chapitres du cahier des charges qui possèdent leur propre dossier.
      "/guides/plan-recette-application-metier",
      "/guides/securite-application-metier",
      "/guides/migrer-logiciel-metier-sans-interruption",
      "/guides/choisir-prestataire-application-metier",
      "/guides",
      "/services/saas-applications-metier",
      "/demarrer-un-projet",
    ]);

    expect(internalDestinations.length).toBeGreaterThanOrEqual(8);
    for (const destination of internalDestinations) {
      expect(allowed.has(destination), destination).toBe(true);
    }

    expect(pageSource).not.toMatch(
      /href=["']\/guides\/(?:cahier-des-charges-application-web|creer-saas|mvp-saas)(?:["'/#?])/,
    );
  });

  it("exposes no download implementation or architecture choice", () => {
    for (const forbidden of [
      /\bdownload\s*=/i,
      /\bURL\.createObjectURL\b/,
      /\bnew Blob\b/,
      /\barchitecture recommandée\b/i,
      /\bchoisir Stripe\b/i,
      /\bchoisir AWS\b/i,
      /\bSLA de \d+/i,
      /\blivré en \d+ (?:jours|semaines|mois)\b/i,
    ]) {
      expect(publicCopy).not.toMatch(forbidden);
    }
  });

  it("ships three dedicated editorial ratios in SVG and WebP", () => {
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
      /width="900" height="900" viewBox="0 0 900 900"/,
    );

    for (const source of svgSources) {
      expect(source).toContain("<title");
      expect(source).toContain("<desc");
      expect(source).toMatch(/STOP|À DÉCIDER/);
    }

    for (const path of webpPaths) {
      const image = readFileSync(path);
      expect(image.subarray(0, 4).toString("ascii")).toBe("RIFF");
      expect(image.subarray(8, 12).toString("ascii")).toBe("WEBP");
    }
  });

  it("makes all three WebP files visible in the guide", () => {
    for (const basename of [
      "cahier-saas-16x9.webp",
      "cahier-saas-4x3.webp",
      "cahier-saas-1x1.webp",
    ]) {
      expect(pageSource).toContain(
        "/guides/cahier-des-charges-saas/" + basename,
      );
    }

    expect(pageSource.match(/<Image\b/g)).toHaveLength(3);
  });

  it("preserves the input freeze and records the official corpus", () => {
    expect(inputFreezeSource).toContain("Gel d'entrée P1");
    expect(inputFreezeSource).toContain("Ne modifier aucun fichier partagé");

    for (const reference of [
      "2026-05/cnil_guide_securite_personnelle.pdf",
      "www-project-application-security-verification-standard",
      "github.com/OWASP/ASVS/tree/v5.0.0",
      "www.w3.org/TR/WCAG22",
      "docs.stripe.com/billing/subscriptions/webhooks",
      "docs.stripe.com/webhooks",
      "eur-lex.europa.eu/eli/reg/2023/2854",
      "data-act-explained",
      "LEGIARTI000006278958",
    ]) {
      expect(researchSource).toContain(reference);
    }
  });
});
