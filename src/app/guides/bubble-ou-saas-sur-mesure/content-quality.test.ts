import { createHash } from "node:crypto";
import { existsSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { getGuide } from "@/lib/guides";
import Page, { metadata } from "./page";

const slug = "bubble-ou-saas-sur-mesure";
const slugDirectory = dirname(fileURLToPath(import.meta.url));
const repositoryRoot = resolve(slugDirectory, "../../../..");
const pagePath = resolve(slugDirectory, "page.tsx");
const ogPath = resolve(slugDirectory, "opengraph-image.tsx");
const testPath = resolve(slugDirectory, "content-quality.test.ts");
const researchPath = resolve(repositoryRoot, `docs/research/${slug}.md`);
const freezePath = resolve(
  repositoryRoot,
  `docs/research/${slug}-input-freeze.md`,
);
const p1ManifestPath = resolve(
  repositoryRoot,
  `docs/research/manifests/${slug}-p1.sha256`,
);
const p2ManifestPath = resolve(
  repositoryRoot,
  `docs/research/manifests/${slug}-p2.sha256`,
);
const p3ManifestPath = resolve(
  repositoryRoot,
  `docs/research/manifests/${slug}-p3.sha256`,
);
const p4ManifestPath = resolve(
  repositoryRoot,
  `docs/research/manifests/${slug}-p4.sha256`,
);
const integrationManifestPath = resolve(
  repositoryRoot,
  `docs/research/manifests/${slug}-integration.sha256`,
);
const registryPath = resolve(repositoryRoot, "src/lib/guides.ts");
const publicDirectory = resolve(repositoryRoot, `public/guides/${slug}`);
const svgNames = [
  "cinq-sorties-decision-16x9.svg",
  "tco-et-plan-sortie-4x3.svg",
  "migration-par-capacite-1x1.svg",
] as const;
const svgPaths = svgNames.map((name) => resolve(publicDirectory, name));

const pageSource = readFileSync(pagePath, "utf8");
const pageCompact = pageSource.replace(/\s+/g, " ");
const ogSource = readFileSync(ogPath, "utf8");
const testSource = readFileSync(testPath, "utf8");
const researchSource = readFileSync(researchPath, "utf8");
const researchCompact = researchSource.replace(/\s+/g, " ");
const freezeSource = readFileSync(freezePath, "utf8");
const registrySource = readFileSync(registryPath, "utf8");
const svgSources = svgPaths.map((path) => readFileSync(path, "utf8"));
const p1ManifestSource = readFileSync(p1ManifestPath, "utf8");
const p2ManifestSource = readFileSync(p2ManifestPath, "utf8");
const p3ManifestSource = readFileSync(p3ManifestPath, "utf8");
const p4ManifestSource = readFileSync(p4ManifestPath, "utf8");
const integrationManifestSource = existsSync(integrationManifestPath)
  ? readFileSync(integrationManifestPath, "utf8")
  : "";
const publicCopy = [pageSource, ogSource, ...svgSources].join("\n");
const pageMarkup = renderToStaticMarkup(createElement(Page));
const structuredData = [
  ...pageMarkup.matchAll(
    /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g,
  ),
].map((match) => JSON.parse(match[1] ?? "{}") as Record<string, unknown>);
const article = structuredData.find((item) => item["@type"] === "Article");
const registeredGuide = getGuide(slug);
const h1Markup = pageMarkup.match(/<h1\b[^>]*>[\s\S]*?<\/h1>/i)?.[0] ?? "";
const h1AriaLabel = decodeHtml(
  h1Markup.match(/\baria-label="([^"]*)"/i)?.[1] ?? "",
);

function decodeHtml(value: string): string {
  return value
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

describe("integrated editorial quality without factual drift for the Bubble or custom SaaS decision guide", () => {
  it("keeps the registered draft private without inventing editorial dates", () => {
    expect(metadata).toMatchObject({
      title: "Bubble ou SaaS sur mesure : comment choisir ?",
      description:
        "Comparez Bubble et une base de code dédiée avec les mêmes besoins : charge réelle, coût total, données, équipe, capacité à changer de solution et preuves.",
      robots: { index: false, follow: false },
      alternates: {
        canonical: "https://hagnere-code.ai/guides/bubble-ou-saas-sur-mesure",
      },
    });
    expect(pageSource).toContain("const guide = getGuide(slug)");
    expect(pageSource).toContain("buildGuideMetadata(guide, imageAlt)");
    expect(pageSource).toContain(
      "buildGuideStructuredData(guide, breadcrumbName)",
    );
    expect(pageSource).not.toContain("PRIVATE_ROBOTS");
    expect(registrySource).toContain('slug: "bubble-ou-saas-sur-mesure"');
    expect(registeredGuide.editorialStatus).toBe("ready-for-human-review");
    expect(registeredGuide.datePublished).toBeUndefined();
    expect(registeredGuide.dateModified).toBeUndefined();
    expect(metadata.openGraph).not.toHaveProperty("publishedTime");
    expect(metadata.openGraph).not.toHaveProperty("modifiedTime");
    expect(article).not.toHaveProperty("datePublished");
    expect(article).not.toHaveProperty("dateModified");
    expect(researchCompact).toContain(
      "Aucune `datePublished` ni `dateModified` n’est prouvée",
    );
    expect(freezeSource).toContain(
      "la future `datePublished` ne sera jamais inventée",
    );
    expect(createHash("sha256").update(freezeSource).digest("hex")).toBe(
      "19e1d876f7b401a67814d592c6336a95a355b75fbca521e22b0a73df702ad610",
    );
    expect(createHash("sha256").update(p1ManifestSource).digest("hex")).toBe(
      "d7ca23c373e53b955a428ad6fe82336c670854f89de6faf609acc3aa69fd2334",
    );
  });

  it("aligns the visible answer, metadata and allowed structured data", () => {
    expect(structuredData.map((item) => item["@type"])).toEqual([
      "Article",
      "BreadcrumbList",
    ]);
    expect(article?.headline).toBe(registeredGuide.heroTitle);
    expect(h1AriaLabel).toBe(article?.headline);
    expect(article?.articleSection).toBe("SaaS");
    expect(h1AriaLabel).toContain(String(article?.articleSection));
    expect(article?.image).toHaveLength(3);
    expect(article?.isPartOf).toMatchObject({
      "@type": "CollectionPage",
      "@id": "https://hagnere-code.ai/guides#collection",
    });
    expect(publicCopy + JSON.stringify(structuredData)).not.toMatch(
      /\b(?:FAQPage|HowTo|Review|AggregateRating|Product|SoftwareApplication|wordCount)\b/,
    );

    const hero = pageSource.match(/heroDescription="([^"]+)"/)?.[1] ?? "";
    expect(hero.trim().split(/\s+/).length).toBeLessThanOrEqual(100);
    for (const expected of [
      "Vous hésitez à lancer ou conserver votre application sur Bubble",
      "Bubble est rationnel",
      "code dédiée devient défendable",
      "isoler une capacité",
      "simplifier le besoin ou reporter",
      "même service sur le même horizon",
      "n’est ni un coût total, ni un devis de migration",
    ]) {
      expect(hero).toContain(expected);
    }
  });

  it("offers five evidence-led outcomes and preserves strong countercases", () => {
    for (const expected of [
      "Rester ou démarrer sur Bubble",
      "Construire en code dédié",
      "Isoler une capacité",
      "Simplifier",
      "Reporter",
      "Une migration n’est pas une mise à niveau automatique",
      "Une base de code dédiée peut être lente, chère ou fragile",
      "Une préférence technique ne remplace ni un test",
    ]) {
      expect(pageCompact).toContain(expected);
    }
    expect(pageSource).toContain(
      "Cas fictif qualitatif — aucun prix ni délai inventé",
    );
    expect(pageSource).toContain(
      "Cas fictif qualitatif — contrainte non négociable",
    );
    expect(pageSource).toContain("Cas fictif qualitatif — frontière stable");
    expect(pageSource).toContain("Cas inverse");
    expect(researchSource).toContain(
      "Hagnéré Code vend du développement sur mesure",
    );
  });

  it("dates Bubble pricing and prevents the plan base from posing as a TCO", () => {
    for (const expected of [
      "5 août 2026",
      "50 000",
      "175 000",
      "250 000",
      "500 000",
      "59 $ US",
      "209 $ US",
      "549 $ US",
      "Sur contact",
      "59 $ US/mois × 12 mois = 708 $ US/an",
      "209 $ US/mois × 12 mois = 2 508 $ US/an",
      "549 $ US/mois × 12 mois = 6 588 $ US/an",
      "hors taxes",
      "imposent le paiement en dollars US",
      "ajoutent les taxes applicables",
      "paiement d’avance",
      "3 $ US par tranche de 100 Go et par mois",
      "Ce calcul n’est pas un TCO",
      "dépassements facturés (overages)",
    ]) {
      expect(pageCompact).toContain(expected);
    }
    expect(pageCompact).toContain(
      "taxes applicables, WU additionnelles, dépassements facturés (overages), plugins, stockage, API tierces, travail humain et sortie restent à ajouter",
    );
    expect(researchCompact).toContain("contrôle inverse `708 ÷ 12 = 59`");
    expect(researchCompact).toContain(
      "les Terms §11 établissent le paiement en dollars US",
    );
    expect(researchCompact).toContain(
      "aucune comparaison financière de cas n’est produite",
    );
    expect(pageSource).toContain(
      "https://manual.bubble.io/help-guides/getting-started/building-for.../native-ios-and-android/what-is-a-native-mobile-app",
    );
  });

  it("tests performance through actual work rather than a universal user ceiling", () => {
    for (const expected of [
      "Il n’existe pas de seuil universel sérieux",
      "requêtes, les enchaînements d’actions (workflows), les fichiers et les appels d’API",
      "Parcours critique",
      "Pointe",
      "Croissance des données",
      "Volume doublé",
      "Dépendance tierce",
      "Écrivez votre seuil avant le test",
      "Suspendre si la charge n’est pas définie",
    ]) {
      expect(pageCompact).toContain(expected);
    }
    expect(pageCompact).toContain(
      "95e centile, c’est-à-dire le temps sous lequel se trouvent 95 % des observations",
    );
    expect(pageCompact).not.toMatch(
      /(?:Bubble|code)[^.!?]{0,80}(?:plus rapide|plus performant)\b/i,
    );
  });

  it("separates platform security, customer duties and contractual exclusions", () => {
    for (const expected of [
      "Un accord de traitement des données (DPA) ne sécurise pas à lui seul votre application",
      "le client reste responsable",
      "partagé aux États-Unis",
      "instance Enterprise dédiée",
      "ce choix ne s’applique pas à l’environnement partagé",
      "Le DPA §13.4 exclut les catégories détaillées juste après ce tableau",
      "données personnelles d’enfants de moins de 16 ans",
      "Une catégorie exclue apparaît dans le besoin",
      "Data Privacy Framework",
      "clauses contractuelles types",
      "efforts commercialement raisonnables",
      "responsabilité à 100 $ US",
      "ne garantissent pas l’absence d’interruption",
      "Évitez donc les verdicts « Bubble conforme » ou « Bubble non conforme »",
      "Règles de confidentialité",
    ]) {
      expect(pageCompact).toContain(expected);
    }
    expect(pageSource).toContain("https://bubble.io/dpa");
    expect(pageSource).toContain("https://bubble.io/subprocessors");
    expect(pageSource).toContain("https://bubble.io/terms");
    expect(pageSource).toContain("https://www.cnil.fr/fr/sous-traitant");
    expect(pageSource).toContain(
      "https://www.cnil.fr/fr/responsables-de-traitement-comment-identifier-et-traiter-des-transferts-de-donnees-hors-ue",
    );
    expect(pageSource).toContain(
      "https://manual.bubble.io/help-guides/infrastructure/hosting-and-scaling/how-bubble-hosting-works",
    );
    expect(pageSource).toContain(
      "https://manual.bubble.io/core-resources/data/privacy",
    );
    expect(researchSource).toContain("DPA §13.4 exclut identifiants publics");
    for (const excludedCategory of [
      "numéros d’identification délivrés par une autorité publique",
      "biométrie",
      "mots de passe de comptes en ligne",
      "identifiants de comptes financiers",
      "données de déclarations fiscales",
      "données de carte bancaire soumises à la norme PCI DSS",
      "données personnelles d’enfants de moins de 16 ans",
      "données pénales",
      "catégories particulières du RGPD",
    ]) {
      expect(pageMarkup).toContain(excludedCategory);
    }
  });

  it("distinguishes rights, data export, Bubble JSON and executable portability", () => {
    for (const expected of [
      "design, les workflows et les données",
      "CSV, JSON ou NDJSON",
      "sauvegardée en JSON puis réimportée dans Bubble",
      "plan Growth requis",
      "ne s’exporte pas sous forme de code exécutable autonome",
      "Retour à une version applicative et restauration de la base testés séparément",
      "les données créées après le point choisi peuvent être perdues",
      "Données",
      "Schéma",
      "Enchaînements (workflows)",
      "Intégrations",
      "Exploitation",
      "Gouvernance",
      "Un export réussi ne prouve pas une reprise réussie",
    ]) {
      expect(pageCompact + svgSources.join(" ")).toContain(expected);
    }
    expect(researchCompact).toContain(
      "Le JSON d’application s’importe dans Bubble ; il ne prouve pas une exécution autonome",
    );
    expect(pageSource).toContain(
      "https://manual.bubble.io/help-guides/data/the-database/export-import-data/exporting-data",
    );
    expect(pageSource).toContain(
      "https://manual.bubble.io/help-guides/getting-started/navigating-the-bubble-editor/tabs-and-sections/settings-tab/overview",
    );
    expect(pageSource).toContain(
      "https://manual.bubble.io/help-guides/maintaining-an-application/database-maintenance/database-backups",
    );
    expect(pageSource).toContain(
      "https://manual.bubble.io/help-guides/maintaining-an-application/version-control",
    );
    const bubbleJsonDefinition =
      "configuration reste une sauvegarde destinée à Bubble, pas un";
    expect(pageSource.split(bubbleJsonDefinition)).toHaveLength(2);
    expect(pageMarkup.split(bubbleJsonDefinition)).toHaveLength(2);
  });

  it("provides a symmetric TCO with overlap controls and no silent zero", () => {
    for (const expected of [
      "TCO_option(H) = INITIAUX_option",
      "+ PLATEFORME_INFRA_option(H)",
      "+ SECURITE_CONFORMITE_option(H)",
      "migration_vers_Bubble",
      "migration_vers_Code",
      "plan (WU incluses) + WU_additionnelles",
      "les WU incluses ne sont jamais recomptées",
      "MAINTENANCE_option(H) inclut, si nécessaire, maintien de compétence, formation",
      "Une dépense déjà comptée dans INITIAUX_option ou EXPLOITATION_option(H) n'est jamais recomptée",
      "Une facture annuelle n'est pas un coût mensuel",
      "Écart E = TCO_Bubble(H) - TCO_Code(H)",
      "E > 0 : Bubble coûte plus",
      "E < 0 : Bubble coûte moins",
      "E = 0 : égalité",
      "0 = absence de coût et de temps prouvée",
      "NON APPLICABLE",
      "À CONFIRMER",
      "Contrôle inverse",
      "Risque de double compte",
      "Perte de revenu/capacité, décaissement et temps séparés",
      "Une inconnue importante ne devient jamais zéro",
      "Équipe et remplacement",
      "quelle compétence doit être formée, transmise ou recrutée",
      "exercice de reprise par une autre personne",
      "Formation ou passation déjà comptée dans les coûts initiaux ou l’exploitation",
    ]) {
      expect(pageCompact).toContain(expected);
    }
    expect(researchCompact).toContain(
      "prestation déjà comprise, temps non monétaire et continuité",
    );
    expect(researchCompact).toContain(
      "Sécurité et conformité existent des deux côtés",
    );
    expect(researchCompact).toContain(
      "`NON APPLICABLE` exige une raison écrite",
    );
    expect(researchCompact).toContain(
      "Une autre personne peut-elle reprendre après un départ ?",
    );
    expect(researchCompact).toContain(
      "relèvent uniquement de `MAINTENANCE_option(H)`",
    );
    const tcoDefinition =
      "Le coût total de possession (TCO) additionne les ressources";
    expect(pageSource.split(tcoDefinition)).toHaveLength(2);
    expect(pageMarkup.split(tcoDefinition)).toHaveLength(2);
    expect(pageSource).not.toContain("excluent toute garantie d’interruption");
    for (const row of [
      "Initiaux",
      "Plateforme / infrastructure",
      "Intégrations",
      "Exploitation",
      "Maintenance",
      "Sécurité / conformité",
      "Incident",
      "Sortie",
    ]) {
      expect(pageSource).toContain(`"${row}"`);
    }
  });

  it("ships an autonomous decision sheet before one honest late CTA", () => {
    for (const expected of [
      "Tenez une réunion de sortie avant la réunion de choix",
      "Décision :",
      "Service comparable :",
      "Exigences non négociables :",
      "Mesures :",
      "Contrats :",
      "TCO :",
      "Essai de sortie :",
      "Contre-cas :",
      "Verdict :",
      "Un échange avec Hagnéré Code est utile",
      "Il ne l’est pas si vous cherchez",
    ]) {
      expect(pageCompact).toContain(expected);
    }

    const configuredCtaLinks =
      pageSource.match(/ctaHref: "\/demarrer-un-projet"/g) ?? [];
    expect(configuredCtaLinks).toHaveLength(1);
    expect(pageSource).not.toContain("sidebarHeroCta=");
    expect(pageSource).not.toContain("sidebarContextCta=");
    expect(pageSource).toContain("showPhoneCta: false");
    expect(pageSource).toContain(
      "Bubble, code, hybride, simplification ou report restent possibles",
    );
    expect(pageSource).toContain(
      'ctaLabel: "Décrire mon besoin et mes contraintes"',
    );
    expect(pageMarkup).toContain('data-guide-strategy-cta="true"');
  });

  it("covers every software perspective and closes the P2 matrix", () => {
    const perspectives = [
      "Dirigeant non technique",
      "Métier utilisateur",
      "Opérations",
      "Finance",
      "IT et sécurité",
      "Données et RGPD",
      "Achats ou juridique",
      "Adoption",
      "Maintenance",
      "Incident et reprise",
      "Réversibilité / changement de prestataire",
      "Solution plus simple / statu quo",
    ];
    for (const perspective of perspectives) {
      const escapedPerspective = perspective.replace(
        /[.*+?^${}()|[\]\\]/g,
        "\\$&",
      );
      expect(researchSource).toMatch(
        new RegExp(`\\| ${escapedPerspective}\\s+\\| APPLICABLE\\s+\\|`),
      );
    }
    expect(researchSource).not.toContain("| BLOQUANT |");
    expect(researchSource).toContain("| Prix/délais personnalisés |");
    expect(researchSource).toMatch(/\| RENVOI_EXPLICITE\s+\|/);
    expect(researchSource).toMatch(/\| ECARTE_JUSTIFIE\s+\|/);
    expect(researchSource).toContain("Aucun angle matériel `BLOQUANT`");
  });

  it("keeps the FAQ visible without rich-result schemas and links only real neighbors", () => {
    for (const question of [
      "Bubble est-il réservé aux prototypes et aux MVP ?",
      "Combien d’utilisateurs une application Bubble peut-elle supporter ?",
      "Est-ce que je possède mon application Bubble ?",
      "Peut-on dire qu’une application Bubble est conforme au RGPD ?",
      "À quel moment faut-il quitter Bubble ?",
      "Une architecture hybride réduit-elle forcément le risque ?",
      "Comment comparer une offre Bubble et un devis sur mesure ?",
      "Faut-il migrer tout le produit en une seule fois ?",
    ]) {
      expect(pageMarkup).toContain(question);
    }
    for (const neighbor of [
      "/guides/mvp-saas-quoi-inclure",
      "/guides/prioriser-fonctionnalites-mvp-saas",
      "/guides/agence-saas-ou-freelance",
      "/guides/mvp-prototype-ou-poc",
    ]) {
      expect(registrySource).toContain(`slug: "${neighbor.split("/").pop()}"`);
      expect(pageSource).toContain(neighbor);
    }
    expect(pageMarkup).toContain(
      "Vous conservez vos droits sur le contenu direct",
    );
    expect(pageMarkup).toContain("Pas en juxtaposant leurs prix");
  });

  it("removes production language and preserves every rendered link boundary", () => {
    expect(pageMarkup).not.toContain("Revue éditoriale en cours");
    expect(pageMarkup).not.toContain("Questions résiduelles");
    expect(pageMarkup).not.toContain("simple wrapper");
    expect(pageMarkup).not.toContain("RACI");
    expect(pageMarkup).not.toContain("double run");
    expect(pageCompact).toContain(
      "possibilité de changer de solution — l’essai de sortie —",
    );
    expect(pageCompact).toContain(
      "alertes et journaux de suivi, panne partielle et retour arrière testés",
    );
    expect(pageCompact).toContain(
      "données de carte bancaire soumises à la norme PCI DSS",
    );
    expect(pageCompact).toContain(
      "notifications techniques (webhooks), clés d’accès (secrets)",
    );
    expect(pageCompact).toContain(
      "Quatre situations pour choisir entre Bubble, code, hybride, simplification ou report",
    );
    expect(pageSource).not.toMatch(
      /réversibilité|observabilité|arbitrage technique|cartes soumises au PCI DSS/i,
    );
    expect(pageMarkup).not.toMatch(/<\/a>[A-Za-zÀ-ÿ]/);
    expect(pageMarkup).not.toMatch(/<\/a>\s+[,;]/);
    expect(pageSource.match(/\{", "\}/g)).toHaveLength(4);

    for (const expectedJoin of [
      "MVP</a>. Si",
      "fonctionnalités</a>. Ces",
      "Bubble Pricing</a> affiche",
      "21 avril 2025</a> imposent",
      "mobile native</a> présente",
      "Scaling with Bubble</a> explique",
      "(DPA)</a>, révisé",
      "sous-traitants</a>, révisée",
      "confidentialité</a> qualifie",
      "How Bubble hosting works</a> annonce",
      "transferts hors UE</a> demande",
      "conditions standard Bubble</a> promettent",
      "CNIL rappelle</a> que",
      "conditions Bubble</a> incluent",
      "CSV, JSON ou NDJSON</a>, et",
      "réimportée dans Bubble</a>, avec",
      "contrôle de version</a> permet",
      "restauration de la base</a> suit",
    ]) {
      expect(pageMarkup).toContain(expectedJoin);
    }

    for (const brokenJoin of [
      "Bubble Pricingaffiche",
      "2025imposent",
      "nativeprésente",
      "Bubbleexplique",
      "confidentialitéqualifie",
      "worksannonce",
      "UEdemande",
      "Bubblepromettent",
      "CNIL rappelleque",
      "conditions Bubbleincluent",
      "versionpermet",
      "basesuit",
    ]) {
      expect(pageMarkup).not.toContain(brokenJoin);
    }
  });

  it("preserves three accessible SVGs and the exact historical P4 snapshot", () => {
    expect(svgSources).toHaveLength(3);
    for (const source of svgSources) {
      expect(source).toMatch(/^<svg\b/);
      expect(source).toContain('role="img"');
      expect(source).toContain("<title");
      expect(source).toContain("<desc");
      expect(source).not.toMatch(/<script|javascript:|<foreignObject/i);
    }
    for (const svgName of svgNames) {
      expect(pageSource).toContain(`/guides/${slug}/${svgName}`);
    }
    expect(ogSource).toContain("Bubble ou SaaS sur mesure ?");
    expect(ogSource.match(/export const alt\s*=\s*"([^"]+)";/)?.[1]).toBe(
      "Bubble ou SaaS sur mesure : comparer les preuves, le coût total et la capacité à changer de solution",
    );
    expect(ogSource.match(/subtitle:\s*"([^"]+)"/)?.[1]).toBe(
      "Même besoin · preuves · coût total · changement testé",
    );
    expect(ogSource).not.toContain("essai de sortie");
    expect(ogSource).toContain('accent: "emerald"');

    const expectedPaths = [
      `docs/research/${slug}.md`,
      `src/app/guides/${slug}/page.tsx`,
      `src/app/guides/${slug}/opengraph-image.tsx`,
      `src/app/guides/${slug}/content-quality.test.ts`,
      ...svgNames.map((name) => `public/guides/${slug}/${name}`),
    ].sort();
    expect(createHash("sha256").update(p2ManifestSource).digest("hex")).toBe(
      "d5bad628190a0cc6c8298a7f1136a69bde44e22ea71e4ae4d77e26be692bc3dc",
    );
    expect(createHash("sha256").update(p3ManifestSource).digest("hex")).toBe(
      "1d61b34f7df922ad3c34ff72da59038508959941ef7589f39e939eed9fcd60b1",
    );
    expect(createHash("sha256").update(p4ManifestSource).digest("hex")).toBe(
      "f1110411d2679b45eb292b760053b31e023521da03fc9de05fa538de9cd1d92f",
    );

    const entries = p4ManifestSource.trim().split("\n");
    expect(entries).toHaveLength(expectedPaths.length);
    expect(entries.map((entry) => entry.slice(66)).sort()).toEqual(
      expectedPaths,
    );
    for (const entry of entries) {
      expect(entry).toMatch(/^[a-f0-9]{64}  [^\s]+$/);
    }
    expect(p4ManifestSource).not.toContain("input-freeze");
    expect(p4ManifestSource).not.toContain(`${slug}-p1.sha256`);
    expect(p4ManifestSource).not.toContain(`${slug}-p2.sha256`);
    expect(p4ManifestSource).not.toContain(`${slug}-p3.sha256`);
    expect(p4ManifestSource).not.toContain(`${slug}-p4.sha256`);
    expect(testSource).toContain("exact historical P4 snapshot");
  });

  it("freezes and replays the exact 21-file integrated private snapshot", () => {
    expect(existsSync(integrationManifestPath)).toBe(true);

    const expectedPaths = [
      `docs/research/${slug}-input-freeze.md`,
      `docs/research/${slug}.md`,
      `docs/research/manifests/${slug}-p1.sha256`,
      `docs/research/manifests/${slug}-p2.sha256`,
      `docs/research/manifests/${slug}-p3.sha256`,
      `docs/research/manifests/${slug}-p4.sha256`,
      "docs/research/mvp-saas-quoi-inclure.md",
      ...svgNames.map((name) => `public/guides/${slug}/${name}`),
      `src/app/guides/${slug}/content-quality.test.ts`,
      `src/app/guides/${slug}/opengraph-image.tsx`,
      `src/app/guides/${slug}/page.tsx`,
      "src/app/guides/mvp-saas-quoi-inclure/content-quality.test.ts",
      "src/app/guides/mvp-saas-quoi-inclure/page.tsx",
      "src/components/guides/GuidesHubPage.tsx",
      "src/components/guides/guide-premium-layout-accessibility.test.ts",
      "src/components/guides/guide-premium-layout.tsx",
      "src/lib/guide-page-seo.ts",
      "src/lib/guides.test.ts",
      "src/lib/guides.ts",
    ].toSorted();
    const entries = integrationManifestSource
      .trim()
      .split("\n")
      .map((line) => line.match(/^([a-f0-9]{64})  ([^\s]+)$/));

    expect(entries).toHaveLength(21);
    expect(entries.every(Boolean)).toBe(true);
    expect(entries.map((entry) => entry?.[2]).toSorted()).toEqual(
      expectedPaths,
    );
    for (const entry of entries) {
      const expectedHash = entry?.[1];
      const relativePath = entry?.[2];
      expect(relativePath).toBeTruthy();
      expect(
        createHash("sha256")
          .update(readFileSync(resolve(repositoryRoot, relativePath ?? "")))
          .digest("hex"),
      ).toBe(expectedHash);
    }
    expect(integrationManifestSource).not.toContain(
      `${slug}-integration.sha256`,
    );
  });
});
