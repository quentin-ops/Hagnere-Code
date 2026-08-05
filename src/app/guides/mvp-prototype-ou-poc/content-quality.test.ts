import { createHash } from "node:crypto";
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
  "public/guides/mvp-prototype-ou-poc",
);
const researchPath = resolve(
  repositoryRoot,
  "docs/research/mvp-prototype-ou-poc.md",
);
const freezePath = resolve(
  repositoryRoot,
  "docs/research/mvp-prototype-ou-poc-input-freeze.md",
);
const p1ManifestPath = resolve(
  repositoryRoot,
  "docs/research/manifests/mvp-prototype-ou-poc-p1.sha256",
);
const p2ManifestPath = resolve(
  repositoryRoot,
  "docs/research/manifests/mvp-prototype-ou-poc-p2.sha256",
);
const p3ManifestPath = resolve(
  repositoryRoot,
  "docs/research/manifests/mvp-prototype-ou-poc-p3.sha256",
);
const manifestPath = resolve(
  repositoryRoot,
  "docs/research/manifests/mvp-prototype-ou-poc-p4.sha256",
);
const qualityManifestPath = resolve(
  repositoryRoot,
  "docs/research/manifests/mvp-prototype-ou-poc-quality.sha256",
);
const registryPath = resolve(repositoryRoot, "src/lib/guides.ts");
const pagePath = resolve(slugDirectory, "page.tsx");
const ogPath = resolve(slugDirectory, "opengraph-image.tsx");
const testPath = resolve(slugDirectory, "content-quality.test.ts");
const svgNames = [
  "objectif-preuve-public-passage-16x9.svg",
  "fiche-experience-4x3.svg",
  "poursuivre-reduire-arreter-1x1.svg",
] as const;
const svgPaths = svgNames.map((name) => resolve(publicDirectory, name));

const pageSource = readFileSync(pagePath, "utf8");
const pageCompact = pageSource.replace(/\s+/g, " ");
const ogSource = readFileSync(ogPath, "utf8");
const researchSource = readFileSync(researchPath, "utf8");
const researchCompact = researchSource.replace(/\s+/g, " ");
const freezeSource = readFileSync(freezePath, "utf8");
const registrySource = readFileSync(registryPath, "utf8");
const svgSources = svgPaths.map((path) => readFileSync(path, "utf8"));
const publicCopy = [pageSource, ogSource, ...svgSources].join("\n");
const p1ManifestSource = readFileSync(p1ManifestPath, "utf8");
const p2ManifestSource = readFileSync(p2ManifestPath, "utf8");
const p3ManifestSource = readFileSync(p3ManifestPath, "utf8");
const manifestSource = existsSync(manifestPath)
  ? readFileSync(manifestPath, "utf8")
  : "";
const qualityManifestSource = existsSync(qualityManifestPath)
  ? readFileSync(qualityManifestPath, "utf8")
  : "";
const pageMarkup = renderToStaticMarkup(createElement(Page));
const structuredData = [
  ...pageMarkup.matchAll(
    /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g,
  ),
].map((match) => JSON.parse(match[1] ?? "{}") as Record<string, unknown>);
const registeredGuide = getGuide("mvp-prototype-ou-poc");
const articleStructuredData = structuredData.find(
  (item) => item["@type"] === "Article",
);
const renderedH1Markup =
  pageMarkup.match(/<h1\b[^>]*>[\s\S]*?<\/h1>/i)?.[0] ?? "";
const renderedH1AriaLabel = decodeHtmlText(
  renderedH1Markup.match(/\baria-label="([^"]*)"/i)?.[1] ?? "",
);

describe("integrated content quality for the prototype, POC, pilot and MVP guide", () => {
  it("centralizes private metadata while preserving the historical date boundary", () => {
    expect(metadata).toMatchObject({
      title: "Prototype, POC, pilote ou MVP : que choisir ?",
      description:
        "Choisissez le test adapté à l’inconnue à lever : prototype, preuve de concept, pilote ou MVP, avec preuve, personnes, passage et arrêt.",
      robots: { index: false, follow: false },
      alternates: {
        canonical: "https://hagnere-code.ai/guides/mvp-prototype-ou-poc",
      },
    });
    expect(pageSource).toContain(
      'heroTitle={"Prototype, POC, pilote ou MVP\\u00a0:"}',
    );
    expect(pageSource).not.toContain(
      'heroTitle="Prototype, POC, pilote ou MVP\\u00a0:"',
    );
    expect(pageMarkup).toContain("Prototype, POC, pilote ou MVP\u00a0:");
    expect(pageMarkup).not.toContain("MVP\\u00a0:");
    expect(pageSource).toContain('heroTitleEm="que construire d’abord ?"');
    expect(pageSource).not.toContain("PRIVATE_ROBOTS");
    expect(pageSource).toContain("getGuide(slug)");
    expect(pageSource).toContain("buildGuideMetadata(guide, imageAlt)");
    expect(registrySource).toContain('slug: "mvp-prototype-ou-poc"');
    expect(registeredGuide).toMatchObject({
      datePublished: "2026-07-23T00:59:26+02:00",
      dateModified: "2026-08-05T10:01:50+02:00",
      readTimeMin: 15,
      editorialStatus: "ready-for-human-review",
    });
    expect(metadata.openGraph).toMatchObject({
      publishedTime: registeredGuide.datePublished,
      modifiedTime: registeredGuide.dateModified,
    });
    expect(freezeSource).toContain(
      "La vraie première date de publication de la future route n’est pas prouvée",
    );
    expect(freezeSource).not.toContain("versions publiées");
    expect(freezeSource).toContain("snapshots Git historiques");
  });

  it("aligns the visible H1 with the central Article and collection schema", () => {
    expect(structuredData.map((item) => item["@type"])).toEqual([
      "Article",
      "BreadcrumbList",
    ]);
    expect(articleStructuredData?.headline).toBe(registeredGuide.heroTitle);
    expect(renderedH1AriaLabel).toBe(registeredGuide.heroTitle);
    expect(articleStructuredData?.image).toHaveLength(3);
    expect(articleStructuredData?.datePublished).toBe(
      registeredGuide.datePublished,
    );
    expect(articleStructuredData?.dateModified).toBe(
      registeredGuide.dateModified,
    );
    expect(articleStructuredData?.isPartOf).toMatchObject({
      "@type": "CollectionPage",
      "@id": "https://hagnere-code.ai/guides#collection",
      name: "Guides Hagnéré Code",
    });
    expect(publicCopy + JSON.stringify(structuredData)).not.toMatch(
      /\b(?:FAQPage|HowTo|Review|AggregateRating|Product|SoftwareApplication|wordCount)\b/,
    );
  });

  it("answers early with four distinct questions and no universal order", () => {
    const hero = pageSource.match(/heroDescription="([^"]+)"/)?.[1] ?? "";
    expect(hero.trim().split(/\s+/).length).toBeLessThanOrEqual(100);
    for (const expected of [
      "prototype",
      "POC",
      "pilote",
      "MVP",
      "apprentissage client défini",
      "Le retour répété n’est requis",
      "preuve attendue",
      "conditions de passage ou d’arrêt",
      "arrêtez-vous là",
    ]) {
      expect(hero).toContain(expected);
    }
    expect(pageCompact).toContain(
      "Ils ne forment aucune file d’attente obligatoire.",
    );
    expect(pageCompact).toContain("Vous pourrez alors nommer le livrable.");
    expect(researchCompact).toContain(
      "Il n’existe pas de séquence universelle",
    );
  });

  it("locks the two post-Q responsive corrections without touching shared UI", () => {
    expect(pageSource).toContain('{ label: "Champs", value: "8" }');
    expect(pageSource).not.toContain('{ label: "Fiche", value: "8 champs" }');
    expect(pageSource).toContain('initial="!"');
    expect(pageSource).not.toContain('initial="ARRÊT"');
    expect(pageSource).toContain('eyebrow="Dernière vérification"');
    expect(pageSource).toContain(
      'title="Une inconnue importante ne devient jamais zéro"',
    );
    expect(researchSource).toContain("## Reprise qualité post-Q");
    expect(qualityManifestSource.trim()).not.toBe("");

    const qualityEntries = qualityManifestSource.trim().split("\n");
    expect(qualityEntries).toHaveLength(3);
    for (const entry of qualityEntries) {
      expect(entry).toMatch(/^[a-f0-9]{64}  [^\s]+$/);
    }
    for (const required of [
      "docs/research/mvp-prototype-ou-poc.md",
      "src/app/guides/mvp-prototype-ou-poc/page.tsx",
      "src/app/guides/mvp-prototype-ou-poc/content-quality.test.ts",
    ]) {
      expect(qualityManifestSource).toContain("  " + required);
    }
    expect(qualityManifestSource).not.toContain("input-freeze");
    expect(qualityManifestSource).not.toMatch(
      /mvp-prototype-ou-poc-(?:p[1-4]|quality)\.sha256/,
    );
    expect(createHash("sha256").update(manifestSource).digest("hex")).toBe(
      "f08af53df4cae09b43365093f9bb59b468af513b9f919ac3b7285d746af4f607",
    );
  });

  it("implements the objective, evidence, audience and pass matrix", () => {
    for (const heading of [
      "Format et objectif",
      "Preuve attendue",
      "Personnes à observer",
      "Condition de passage ou d’arrêt",
      "Prototype · comprendre ou parcourir",
      "POC · franchir une contrainte technique",
      "Pilote · tenir dans le vrai travail",
      "MVP · obtenir un apprentissage client",
    ]) {
      expect(pageSource).toContain(heading);
    }
    expect(pageCompact).toContain("Deux inconnues peuvent exiger deux tests");
    expect(pageCompact).toContain("l’échec de l’un des deux");
  });

  it("makes the eight-field experiment sheet copiable", () => {
    for (const field of [
      "Décision que ce test doit rendre possible",
      "Inconnue principale et hypothèse que le test peut contredire",
      "Cas inclus / cas explicitement exclus",
      "Personnes capables de produire la preuve",
      "Événement ou mesure et méthode de collecte",
      "Condition de passage / condition d’arrêt",
      "Responsable, données, accès, sécurité et retour arrière",
      "Résultats, limites, actifs, accès et prochaine décision remis",
    ]) {
      expect(pageSource).toContain(field);
    }
    expect(researchSource).toContain("Fiche d’expérience en huit champs");
    expect(svgSources[1]).toContain("Fiche d’expérience en huit champs");
    expect(svgSources[1]).toContain("jamais une inconnue transformée en zéro");
    expect(pageCompact).toContain(
      "une donnée manquante ne devient ni zéro, ni « oui »",
    );
  });

  it("uses direct reader language while preserving every P2 decision boundary", () => {
    for (const plainLanguage of [
      "preuve de concept (POC)",
      "produit minimum viable (MVP)",
      "hypothèse que le test peut contredire",
      "Personnes à observer",
      "fondement juridique — la « base légale » au sens du RGPD",
      "retour au fonctionnement précédent",
    ]) {
      expect(pageCompact).toContain(plainLanguage);
    }
    for (const editorialJargon of [
      "public de preuve",
      "hypothèse falsifiable",
      "taxonomie officielle",
      "corpus",
      "inconnue matérielle",
      "sans STOP",
      "MVP · usage réel",
    ]) {
      expect(publicCopy.toLocaleLowerCase("fr")).not.toContain(
        editorialJargon.toLocaleLowerCase("fr"),
      );
    }
    expect(ogSource).toContain("MVP · apprentissage");
    expect(pageCompact).toContain(
      "il n’exige un usage répété que si l’hypothèse porte sur le retour",
    );
    expect(pageCompact).toContain(
      "Avant tout pilote, il faut donc ventiler les sept erreurs",
    );
    expect(pageCompact).toContain(
      "Masquer les noms ou les remplacer par des codes produit souvent des données",
    );
    expect(pageCompact).toContain(
      "Élargir le périmètre ouvre une nouvelle expérience",
    );
  });

  it("keeps each format within the evidence it can support", () => {
    for (const limit of [
      "Elle adoptera ou paiera nécessairement le service.",
      "Le système est techniquement faisable ou performant.",
      "La réussite du POC ne vaut que pour la décision écrite",
      "Un pilote n’est pas conforme par son seul nom.",
      "« Minimum » ne désigne donc pas une version négligée de la vision complète.",
      "Cette définition n’impose pas un usage répété à tous les MVP.",
      "Un MVP limité à une équipe peut aussi être un pilote",
      "l’échec opérationnel ne doit pas être compensé par un signal client — ni l’inverse",
    ]) {
      expect(pageCompact).toContain(limit);
    }
  });

  it("uses live primary sources with their scope and limitations", () => {
    for (const url of [
      "https://www.gov.uk/service-manual/design/making-prototypes",
      "https://www.gov.uk/service-manual/agile-delivery/how-the-alpha-phase-works",
      "https://www.gov.uk/service-manual/user-research/user-research-in-alpha",
      "https://www.procurementpathway.civilservice.gov.uk/documents/best-practice/testing-and-piloting-services-sourcing-playbook/business-need",
      "https://euraxess.ec.europa.eu/career-development/researchers/manual-major-steps-for-research-valorisation",
      "https://leanstartup.co/resources/articles/what-is-an-mvp/",
      "https://www.cnil.fr/fr/securite-encadrer-les-developpements-informatiques",
      "https://www.cnil.fr/fr/technologies/lanonymisation-de-donnees-personnelles",
      "https://www.cnil.fr/fr/les-bases-legales/liceite-essentiel-sur-les-bases-legales",
      "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958",
      "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000039279818",
    ]) {
      expect(pageSource + researchSource).toContain(url);
    }
    for (const limit of [
      "Ce cadre GOV.UK n’est pas une norme universelle.",
      "pas une qualification contractuelle française",
      "sans imposer un ordre à un SaaS",
      "La méthode ne garantit aucune adoption.",
      "elles restent personnelles et soumises au RGPD",
      "Le consentement n’est ni automatique",
      "Ces textes ne qualifient pas seuls",
    ]) {
      expect(pageCompact).toContain(limit);
    }
    expect(researchSource).toContain(
      "Recherche ouverte à nouveau le **4 août 2026**",
    );
  });

  it("keeps the fictitious POC calculation reproducible and bounded", () => {
    for (const calculation of [
      "40 documents × 4 champs = 160",
      "153 ÷ 160 × 100 = 95,625 %",
      "153 exacts + 7 inexacts = 160",
      "152 ÷ 160 × 100 = 95 %",
      "153 − 152 = 1 contrôle",
    ]) {
      expect(pageSource).toContain(calculation);
    }
    expect(researchSource).toContain("40 documents × 4 champs = 160 contrôles");
    for (const boundary of [
      "Exemple entièrement fictif · aucune expérience client",
      "Le POC dépasse son seuil fictif d’un seul contrôle.",
      "Elle ne prouve ni performance en production, ni sécurité, ni coût",
      "Les sept erreurs restent dans le rapport",
      "Leur répartition par champ et par document n’est pas fournie",
      "le taux global pourrait masquer toutes les erreurs sur le total TTC",
      "Ventiler les sept erreurs",
    ]) {
      expect(pageCompact).toContain(boundary);
    }
  });

  it("covers no-build, ambiguity, stress and handoff outcomes", () => {
    for (const expected of [
      "Valeur de décision",
      "Préparation et construction",
      "Participation",
      "Données et exploitation",
      "Sortie et suite",
      "gardez le montant « à cadrer »",
      "Aucun logiciel pour l’instant",
      "Observation, entretien, simulation ou outil existant.",
      "Si le volume double",
      "résultat inconnu et fonctionnement limité",
      "des données pseudonymisées",
      "la « base légale » au sens du RGPD",
      "Cette base se choisit avant le traitement",
      "L’environnement de préproduction, utilisé avant la mise en service, doit alors être sécurisé au même niveau que la production",
      "Réduire ou refaire le test",
      "Reporter",
      "Arrêter",
      "accès à fermer",
      "données à restituer, conserver ou supprimer",
      "composants, licences, auteurs et droits à qualifier",
      "écrivez « à vérifier », le responsable et la prochaine preuve",
      "Élargir le périmètre ouvre une nouvelle expérience",
      "ne changez qu’une dimension à la fois",
    ]) {
      expect(pageCompact).toContain(expected);
    }
  });

  it("keeps one transparent late CTA and no download or phone funnel", () => {
    expect(pageSource).toContain("strategyCta={{");
    expect(pageSource).not.toContain("sidebarHeroCta=");
    expect(pageSource).not.toContain("sidebarContextCta=");
    expect(pageSource.match(/\/demarrer-un-projet/g)).toHaveLength(1);
    expect(pageSource).toContain("showPhoneCta: false");
    expect(pageCompact).toContain(
      "un prototype, un POC, un pilote, un MVP, un test manuel, un outil existant ou un report",
    );
    expect(pageCompact).toContain(
      "elle ne vaut ni devis automatique, ni promesse de délai",
    );
    expect(publicCopy).not.toMatch(/\.(?:xlsx?|csv)\b/i);
    expect(publicCopy).not.toMatch(/\btel:/i);
  });

  it("removes the P3 writing tics without weakening the decision boundaries", () => {
    for (const revised of [
      "La preuve qui vous manque indique le test à construire.",
      "Partez de la question qui bloque la décision",
      "Vous n’avez pas besoin des quatre formats pour avancer.",
      "Aucun nombre ne convient à tous les tests.",
      "Ces quatre noms restent des repères de travail",
      "La question à trancher détermine le test à construire",
      "Huit champs relient le test à la décision qu’il autorise.",
      "Les erreurs et les arrêts restent visibles dans la revue.",
    ]) {
      expect(publicCopy).toContain(revised);
    }
    for (const removed of [
      "Choisissez selon la preuve qui manque, pas selon une chronologie supposée.",
      "Il n’existe pas de nombre universel dans ce guide.",
      "Une méthode de choix, pas une règle universelle",
      "Huit champs. Une preuve. Une décision limitée.",
      "Ni feu vert automatique, ni moyenne qui masque un arrêt.",
      "cette page ne les remplace pas",
    ]) {
      expect(publicCopy).not.toContain(removed);
    }
    expect(publicCopy).not.toMatch(
      /\b(?:révolutionnaire|incontournable|stratégique|synergie|optimal|robuste)\b/i,
    );
  });

  it("ships three accessible SVGs and eight visible FAQ questions", () => {
    expect(svgPaths.every((path) => existsSync(path))).toBe(true);
    expect(pageSource.match(/<Image/g)).toHaveLength(3);
    svgSources.forEach((source, index) => {
      expect(source).toContain('role="img"');
      expect(source).toContain('aria-labelledby="title desc"');
      expect(source.match(/<title id="title">/g)).toHaveLength(1);
      expect(source.match(/<desc id="desc">/g)).toHaveLength(1);
      expect(source).not.toMatch(/<image\b|data:image|href="https?:/);
      expect(pageSource).toContain(svgNames[index]);
    });
    const faqBlock =
      pageSource.match(
        /const faqItems = \[([\s\S]*?)\n\];\n\nexport default function Page/,
      )?.[1] ?? "";
    expect(faqBlock.match(/question: "/g)).toHaveLength(8);
    expect(pageMarkup.match(/data-slot="accordion-item"/g)).toHaveLength(8);
    expect(pageSource).not.toContain("faqCategories=");
  });

  it("records the exact P4 manifest, protected inputs and pass closure", () => {
    expect(existsSync(pagePath)).toBe(true);
    expect(existsSync(ogPath)).toBe(true);
    expect(existsSync(testPath)).toBe(true);
    expect(manifestSource.trim()).not.toBe("");
    const entries = manifestSource.trim().split("\n");
    expect(entries).toHaveLength(7);
    entries.forEach((entry) => {
      expect(entry).toMatch(/^[a-f0-9]{64}  [^\s]+$/);
    });
    for (const required of [
      "docs/research/mvp-prototype-ou-poc.md",
      "src/app/guides/mvp-prototype-ou-poc/page.tsx",
      "src/app/guides/mvp-prototype-ou-poc/opengraph-image.tsx",
      "src/app/guides/mvp-prototype-ou-poc/content-quality.test.ts",
      ...svgNames.map((name) => "public/guides/mvp-prototype-ou-poc/" + name),
    ]) {
      expect(manifestSource).toContain("  " + required);
    }
    expect(manifestSource).not.toContain("input-freeze");
    expect(manifestSource).not.toContain("mvp-prototype-ou-poc-p1.sha256");
    expect(manifestSource).not.toContain("mvp-prototype-ou-poc-p2.sha256");
    expect(manifestSource).not.toContain("mvp-prototype-ou-poc-p3.sha256");
    expect(manifestSource).not.toContain("mvp-prototype-ou-poc-p4.sha256");
    expect(createHash("sha256").update(freezeSource).digest("hex")).toBe(
      "407597ff6f3c670f8624c6c226a3eeef318c22b2549e2ad3f57cc660bc7151d9",
    );
    expect(createHash("sha256").update(p1ManifestSource).digest("hex")).toBe(
      "6ea9d134698ca241917a8c9b6d28c204ffcab427aa0e075dd4887244e3b18d78",
    );
    expect(createHash("sha256").update(p2ManifestSource).digest("hex")).toBe(
      "473c75dd8cb9fe3bf9e123c5f65a637b20f037a81ed4cd84f8824385aebaaf1c",
    );
    expect(createHash("sha256").update(p3ManifestSource).digest("hex")).toBe(
      "41e887fc14141c3a0bc0f401d7ddab0cbb34e23554cda9d9fe07468c61a2a572",
    );

    expect(researchSource).not.toMatch(/À implémenter|À tester/);
    for (const finalState of [
      "Contrôlé statiquement",
      "Implémentée et testée",
      "Implémenté et testé",
      "Rejoué statiquement",
      "Rendue statiquement · 8/8",
      "Implémentés · XML 3/3",
      "Contrôlée statiquement",
    ]) {
      expect(researchSource).toContain(finalState);
    }
    expect(researchCompact).toContain(
      "P4 devra revalider les faits vivants, la plume et la cohérence du candidat slug-only.",
    );
    expect(researchCompact).toContain(
      "Après GO P4, ces points et leurs preuves relèvent exclusivement de l’orchestrateur d’intégration",
    );
    expect(researchCompact).toContain(
      "Aucun agent slug-only ne ferme le registre, les dates ou le temps de lecture.",
    );

    for (const proof of [
      "PASSE_1_TERMINEE",
      "PASSE_2_TERMINEE",
      "PASSE_3_TERMINEE",
      "PASSE_4_TERMINEE",
      "Vitest ciblé : 12/12",
      "TypeScript : npx tsc --noEmit — vert",
      "ESLint ciblé : vert",
      "Prettier ciblé : vert",
      "XML des SVG : 3/3",
      "Rendu statique React : vert",
      "Manifeste P4 : 7/7",
      "Espaces finaux, y compris fichiers untracked : aucun",
      "d4a7fb58b44e46314156e60cd580c45a4224021d — inchangé",
      "aucun git add, commit ou push",
      "aucun deploy, déploiement, publication ou indexation",
    ]) {
      expect(researchSource).toContain(proof);
    }
    expect(researchCompact).toContain(
      "Il ne constitue ni la porte G4 de l’orchestrateur, ni le contrôle transversal, ni une preuve publique.",
    );
  });
});

function decodeHtmlText(value: string): string {
  return value
    .replace(/&#(x?[0-9a-f]+);/gi, (_match, encoded: string) => {
      const hexadecimal = encoded[0]?.toLowerCase() === "x";
      const codePoint = Number.parseInt(
        hexadecimal ? encoded.slice(1) : encoded,
        hexadecimal ? 16 : 10,
      );
      return Number.isFinite(codePoint) ? String.fromCodePoint(codePoint) : "";
    })
    .replace(/&nbsp;/gi, "\u00a0")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&(?:apos|rsquo|lsquo);/gi, "'");
}
