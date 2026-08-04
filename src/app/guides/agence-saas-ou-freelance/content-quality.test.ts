import { existsSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { getGuide } from "@/lib/guides";
import Page, { metadata } from "./page";

const slugDirectory = dirname(fileURLToPath(import.meta.url));
const repositoryRoot = resolve(slugDirectory, "../../../..");
const publicDirectory = resolve(
  repositoryRoot,
  "public/guides/agence-saas-ou-freelance",
);
const researchPath = resolve(
  repositoryRoot,
  "docs/research/agence-saas-ou-freelance.md",
);
const integrationManifestPath = resolve(
  repositoryRoot,
  "docs/research/manifests/agence-saas-ou-freelance-integration.sha256",
);
const pagePath = resolve(slugDirectory, "page.tsx");
const ogPath = resolve(slugDirectory, "opengraph-image.tsx");
const svgPaths = [
  resolve(publicDirectory, "equipe-responsabilites-16x9.svg"),
  resolve(publicDirectory, "carte-responsabilites-4x3.svg"),
  resolve(publicDirectory, "relais-incident-1x1.svg"),
];

const pageSource = readFileSync(pagePath, "utf8");
const pageCompact = pageSource.replace(/\s+/g, " ");
const ogSource = readFileSync(ogPath, "utf8");
const researchSource = readFileSync(researchPath, "utf8");
const integrationManifestSource = existsSync(integrationManifestPath)
  ? readFileSync(integrationManifestPath, "utf8")
  : "";
const researchCompact = researchSource.replace(/\s+/g, " ");
const svgSources = svgPaths.map((path) => readFileSync(path, "utf8"));
const publicCopy = [pageSource, ogSource, ...svgSources].join("\n");
const pageMarkup = renderToStaticMarkup(createElement(Page));
const structuredData = [
  ...pageMarkup.matchAll(
    /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g,
  ),
].map((match) => JSON.parse(match[1] ?? "{}") as Record<string, unknown>);
const registeredGuide = getGuide("agence-saas-ou-freelance");

describe("public content quality for the SaaS team-shape guide", () => {
  it("aligns central metadata, H1, dates and private indexing", () => {
    const article = structuredData.find((item) => item["@type"] === "Article");

    expect(metadata).toMatchObject({
      title: "Agence SaaS ou freelance : quelle équipe choisir ?",
      description:
        "Choisissez freelance, agence, équipe interne ou hybride selon la phase du SaaS, les responsabilités, le relais et les éléments à récupérer.",
      robots: { index: false, follow: false },
      alternates: {
        canonical: "https://hagnere-code.ai/guides/agence-saas-ou-freelance",
      },
    });
    expect(article?.headline).toBe(registeredGuide.heroTitle);
    expect(article?.datePublished).toBe("2026-07-22T11:05:08+02:00");
    expect(article?.dateModified).toBe("2026-08-04T14:40:46+02:00");
    expect(registeredGuide.readTimeMin).toBe(13);
    expect(registeredGuide.editorialStatus).toBe("ready-for-human-review");
    expect(registeredGuide.articleImagePaths).toHaveLength(3);
    expect(pageSource).toContain("const guide = getGuide(slug)");
    expect(pageSource).toContain("buildGuideMetadata(guide, imageAlt)");
    expect(pageSource).toContain(
      "buildGuideStructuredData(guide, breadcrumbName)",
    );
    expect(pageSource).toContain(
      'heroTitle={"Agence SaaS ou freelance\\u00a0:"}',
    );
    expect(pageSource).not.toContain(
      'heroTitle="Agence SaaS ou freelance\\u00a0:"',
    );
    expect(pageSource).not.toContain('heroTitle="Agence SaaS ou freelance :"');
    expect(pageSource).toContain('heroTitleEm="quelle équipe choisir ?"');
    expect(pageSource).toContain('tocLabel="Sommaire"');
    expect(pageSource).not.toContain(
      'tocLabel="De la prochaine phase à une reprise vérifiable"',
    );
    expect(ogSource).toContain(
      'title: "Agence, freelance ou équipe hybride ?"',
    );
    expect(ogSource).toContain(
      'subtitle: "Choisir par phase, responsabilité et relais"',
    );
    expect(pageSource).toContain("guide.dateModified");
    expect(pageSource).toContain('guide.readTimeMin + " min"');
    expect(pageSource).not.toContain("PRIVATE_ROBOTS");
  });

  it("emits Article and BreadcrumbList without unsupported rich-result types", () => {
    expect(
      structuredData.filter((item) => item["@type"] === "Article"),
    ).toHaveLength(1);
    expect(
      structuredData.filter((item) => item["@type"] === "BreadcrumbList"),
    ).toHaveLength(1);
    expect(publicCopy + JSON.stringify(structuredData)).not.toMatch(
      /\b(?:FAQPage|HowTo|Review|AggregateRating|SoftwareApplication|Product|wordCount)\b/,
    );
    expect(pageSource).toContain("structuredData.map");
  });

  it("keeps exactly one late project CTA and no sidebar or phone CTA", () => {
    expect(pageSource).toContain("strategyCta={{");
    expect(pageSource).not.toContain("sidebarHeroCta=");
    expect(pageSource).not.toContain("sidebarContextCta=");
    expect(pageSource).not.toContain("faqCategories=");
    expect(pageSource.match(/\/demarrer-un-projet/g)).toHaveLength(1);
    expect(pageSource).toContain("showPhoneCta: false");
    expect(researchSource).toContain("Un seul CTA tardif");
  });

  it("keeps hero badges actionable and fragmented headings accessible", () => {
    expect(pageSource).toContain(
      '{ label: "Responsabilités à attribuer", variant: "neutral" }',
    );
    expect(pageSource).toContain(
      '{ label: "Relais à tester", variant: "success" }',
    );
    expect(pageSource).not.toContain("Responsabilités vérifiées");
    expect(pageSource).not.toContain("Relais testé");

    const strategyBlock =
      pageSource.match(/strategyCta=\{\{([\s\S]*?)\n        \}\}/)?.[1] ?? "";
    const faqBlock =
      pageSource.match(/faqMeta=\{\{([\s\S]*?)\n        \}\}/)?.[1] ?? "";
    const readString = (source: string, property: string) => {
      const encoded =
        source.match(new RegExp(property + ': "((?:\\\\.|[^"])*)"'))?.[1] ?? "";
      return JSON.parse('"' + encoded + '"') as string;
    };
    const strategyName =
      readString(strategyBlock, "titleStart") +
      readString(strategyBlock, "titleEm");
    const faqName =
      readString(faqBlock, "titleStart") +
      readString(faqBlock, "titleEm") +
      readString(faqBlock, "titleEnd");

    expect(strategyName).toBe(
      "Décrire la phase et\u2009les responsabilités encore sans nom",
    );
    expect(faqName).toBe(
      "Comparer les\u2009responsabilités réelles\u2009avant les statuts.",
    );
    expect(strategyBlock).toContain('titleEm: "\\u2009les responsabilités');
    expect(faqBlock).toContain(
      'titleEm: "\\u2009responsabilités réelles\\u2009"',
    );
  });

  it("covers the four phases, five responsibilities and five outcomes", () => {
    for (const phase of [
      "Validation",
      "Construction",
      "Mise en ligne",
      "Exploitation et évolution",
    ]) {
      expect(pageSource).toContain(phase);
    }

    for (const responsibility of [
      "Décider",
      "Réaliser",
      "Contrôler",
      "Relayer",
      "Remettre",
    ]) {
      expect(pageSource).toContain(responsibility);
    }

    for (const outcome of [
      "Freelance",
      "Agence",
      "Équipe interne",
      "Équipe hybride",
      "Report",
    ]) {
      expect(pageSource).toContain(outcome);
    }

    expect(pageSource).toContain('{ label: "Exercices", value: "2" }');
    expect(ogSource).toContain('"2 exercices"');
    expect(publicCopy).not.toMatch(/Répétitions?|stress-tests?/i);
  });

  it("keeps the completion formula unambiguous and replayable", () => {
    const formula =
      "lignes incomplètes = lignes critiques − lignes dont les cinq champs sont tous renseignés";

    expect(pageCompact).toContain(formula);
    expect(researchCompact).toContain(formula);
    expect(pageSource).toContain("6 − 4 = 2");
    expect(pageSource).toContain("4 + 2 = 6");
    expect(researchSource).toContain("6 - 4 = 2");
    expect(researchSource).toContain("4 + 2 = 6");
    expect(svgSources[1]).toContain("6 − 4 = 2");
    expect(svgSources[1]).toContain("4 + 2 = 6");
    expect(pageCompact).toContain(
      "Cette carte est une méthode éditoriale de complétude, ni une norme, ni une garantie.",
    );
    expect(pageCompact).toContain(
      "Le calcul ne note ni compétence, ni qualité, ni disponibilité, ni coût.",
    );
    expect(pageCompact).toContain("Une ligne remplie n’est pas une preuve");
  });

  it("tests volume and dependency shocks without turning unknowns into zero", () => {
    for (const expected of [
      "Volume doublé dans le cas testé",
      "Service ou composant indispensable indisponible",
      "qui détecte la dépendance",
      "met en place un fonctionnement limité (« mode dégradé ») ou revient en arrière",
      "Le volume de départ, le seuil et la réponse restent à confirmer",
    ]) {
      expect(pageCompact).toContain(expected);
    }
    expect(pageCompact).toContain(
      "Un simple tiers, un sous-traitant au sens du RGPD et un sous-traitant ultérieur ne se confondent pas",
    );
  });

  it("turns continuity language into an action performed by the relay", () => {
    for (const expected of [
      "la personne prévue pour le relais d’exécuter une tâche de reprise",
      "tâche de reprise exécutée par le relais",
      "exécute lui-même un cas à partir de ces éléments",
      "tâche réellement exécutée par le relais",
    ]) {
      expect(pageCompact).toContain(expected);
    }
    expect(pageCompact).not.toMatch(/\brejou(?:er|é|ée|és|ées|e)\b/i);
  });

  it("makes hidden client work explicit without publishing a fictional TCO", () => {
    for (const costFamily of [
      "Besoin, phase et disponibilité client",
      "Conception, réalisation, intégration et contrôle",
      "Licences, services et comptes tiers",
      "Migration et mise en ligne",
      "Formation, adoption et assistance",
      "Maintenance, exploitation et évolution",
      "Sortie et reprise",
    ]) {
      expect(pageSource).toContain(costFamily);
    }
    expect(pageCompact).toContain("Un outil déjà payé couvre-t-il le besoin ?");
    expect(pageCompact).toContain(
      "pour la même phase, le même volume et le même niveau de service",
    );
    expect(pageCompact).toContain("l’inconnu n’est ni gratuit, ni inclus");
  });

  it("labels both fictional rehearsals before their narratives", () => {
    const changeLabel = pageSource.indexOf(
      'eyebrow="Exemple entièrement fictif · aucune expérience client"',
    );
    const changeNarrative = pageSource.indexOf(
      "Le produit permet à un responsable d’inviter des collègues.",
    );
    const incidentLabel = pageSource.indexOf(
      'eyebrow="Exemple entièrement fictif · aucune garantie de service"',
    );
    const incidentNarrative = pageSource.indexOf(
      "Après une mise en ligne, certains utilisateurs restent bloqués.",
    );

    expect(changeLabel).toBeGreaterThanOrEqual(0);
    expect(changeNarrative).toBeGreaterThan(changeLabel);
    expect(incidentLabel).toBeGreaterThanOrEqual(0);
    expect(incidentNarrative).toBeGreaterThan(incidentLabel);
    expect(pageSource).toContain(
      "Aucun client, prix, délai ou résultat Hagnéré Code n’est",
    );
  });

  it("uses current primary references with their visible limits", () => {
    for (const reference of [
      "LEGIARTI000006278958",
      "LEGIARTI000039279818",
      "CELEX%3A32016R0679",
      "rgpd-comment-bien-identifier-son-role",
      "securite-gerer-la-sous-traitance",
      "securite-encadrer-la-maintenance-et-la-fin-de-vie",
      "externalisation-et-securite-des-systemes-dinformation",
      "managing-repository-roles",
    ]) {
      expect(pageSource).toContain(reference);
      expect(researchSource).toContain(reference);
    }

    expect(pageCompact).toContain(
      "Cette fiche ne prescrit aucune forme générale d’équipe SaaS.",
    );
    expect(pageCompact).toContain(
      "Sa date interdit d’en faire un état technique actuel",
    );
    expect(pageCompact).toContain(
      "Tout développeur n’est pas automatiquement sous-traitant",
    );
    expect(pageCompact).toContain(
      "connaître l’identité de la chaîne de sous-traitance",
    );
    expect(pageCompact).toContain(
      "sécurité et externalisation ne doivent pas être opposées",
    );
    expect(pageCompact).toContain(
      "le recours à un prestataire peut être souhaitable lorsque les compétences internes manquent",
    );
    expect(pageCompact).not.toMatch(/\bNIS2\b/);
  });

  it("describes Hagnéré Code from shared team facts without inferring staffing", () => {
    expect(pageSource).toContain("TEAM_PUBLIC_COMPOSITION");
    expect(pageSource).toContain("FREELANCE_MEMBERS.length");
    expect(pageCompact).toContain(
      "elle ne prouve ni les personnes, ni la charge, ni le relais d’une mission donnée",
    );
    expect(pageSource).toContain('href="/equipe"');
  });

  it("ships three accessible editorial ratios and references each from the page", () => {
    for (const [index, path] of svgPaths.entries()) {
      expect(existsSync(path), path).toBe(true);
      expect(svgSources[index]).toContain('role="img"');
      expect(svgSources[index]).toContain(
        'aria-labelledby="title description"',
      );
      expect(svgSources[index]).toContain("<title");
      expect(svgSources[index]).toContain("<desc");
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
    for (const filename of svgPaths.map((path) => path.split("/").at(-1))) {
      expect(pageSource).toContain(filename);
    }
    expect(svgSources[0]).toContain("option de report");
  });

  it("keeps unsupported downloads, market shortcuts and false certainty out", () => {
    for (const pattern of [
      /\.(?:xlsx?|csv)\b/i,
      /\bTJM\b/,
      /\bprix moyen\b/i,
      /\bdélai moyen\b/i,
      /\bmeilleure agence\b/i,
      /\bmeilleur freelance\b/i,
      /\b100\s*%\b/,
      /\bzéro risque\b/i,
      /\bnous garantissons\b/i,
      /\bconforme RGPD\b/i,
      /\bcas client\b/i,
      /\bnotre client\b/i,
    ]) {
      expect(publicCopy).not.toMatch(pattern);
    }
    expect(pageCompact).toContain(
      "Prix, durée et effectif restent à confirmer",
    );
    for (const countercase of [
      "mission isolée et déjà bien encadrée",
      "un freelance ne devrait pas porter seul la décision produit, le contrôle et la continuité",
      "L’interne suppose une capacité vraiment disponible",
      "l’hybride, des frontières et des relais écrits de chaque côté",
      "reportez l’engagement",
    ]) {
      expect(pageCompact).toContain(countercase);
    }
  });

  it("preserves historical STOPs and documents the integrated private state", () => {
    for (const expected of [
      "Première date de publication : **INCONNUE**",
      "Date de modification publiée : **INCONNUE**",
      "Aucun déploiement, publication, indexation",
      "Temps de lecture : à mesurer",
      "Le maillage entrant et la suppression de la redirection historique restent",
      "INTEGRATION_CENTRALE_PRE_Q_VERTE",
      "datePublished: 2026-07-22T11:05:08+02:00",
      "date reste un **STOP opérationnel avant toute future",
      "1175/1175",
      "aucun déploiement, aucune publication, aucune indexation revendiqués",
    ]) {
      expect(researchSource).toContain(expected);
    }
  });

  it("freezes the exact 21-file integrated snapshot", () => {
    expect(existsSync(integrationManifestPath)).toBe(true);

    const entries = integrationManifestSource
      .trim()
      .split("\n")
      .map((line) => line.match(/^[a-f0-9]{64}  (.+)$/)?.[1]);

    expect(entries.every(Boolean)).toBe(true);
    expect(entries.toSorted()).toEqual(
      [
        "docs/research/agence-saas-ou-freelance-input-freeze.md",
        "docs/research/agence-saas-ou-freelance.md",
        "docs/research/manifests/agence-saas-ou-freelance-p1.sha256",
        "docs/research/manifests/agence-saas-ou-freelance-p2.sha256",
        "docs/research/manifests/agence-saas-ou-freelance-p3.sha256",
        "docs/research/manifests/agence-saas-ou-freelance-p4.sha256",
        "docs/research/manifests/agence-saas-ou-freelance-quality-1.sha256",
        "docs/research/mvp-saas-quoi-inclure.md",
        "public/guides/agence-saas-ou-freelance/carte-responsabilites-4x3.svg",
        "public/guides/agence-saas-ou-freelance/equipe-responsabilites-16x9.svg",
        "public/guides/agence-saas-ou-freelance/relais-incident-1x1.svg",
        "src/app/guides/agence-saas-ou-freelance/content-quality.test.ts",
        "src/app/guides/agence-saas-ou-freelance/opengraph-image.tsx",
        "src/app/guides/agence-saas-ou-freelance/page.tsx",
        "src/app/guides/mvp-saas-quoi-inclure/content-quality.test.ts",
        "src/app/guides/mvp-saas-quoi-inclure/page.tsx",
        "src/components/guides/GuidesHubPage.tsx",
        "src/lib/guides.test.ts",
        "src/lib/guides.ts",
        "src/lib/legacy-guide-redirects.test.ts",
        "src/lib/legacy-guide-redirects.ts",
      ].toSorted(),
    );
  });
});
