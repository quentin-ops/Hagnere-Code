import { createHash } from "node:crypto";
import { existsSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { GUIDES, PUBLISHED_GUIDES } from "@/lib/guides";
import { getLegacyGuideDestination } from "@/lib/legacy-guide-redirects";
import Page, { metadata } from "./page";
import {
  BACK_OFFICE_DESCRIPTION,
  BACK_OFFICE_HEADLINE,
  BACK_OFFICE_IMAGES,
  BACK_OFFICE_SECTION,
  BACK_OFFICE_SLUG,
  BACK_OFFICE_URL,
  structuredData,
} from "./guide-data";

const slugDirectory = dirname(fileURLToPath(import.meta.url));
const repositoryRoot = resolve(slugDirectory, "../../../../");
const publicDirectory = resolve(slugDirectory, "../../../../public");
const p0Path = resolve(
  repositoryRoot,
  "docs/research/back-office-sur-mesure-pme-p0.md",
);
const p4ManifestPath = resolve(
  repositoryRoot,
  "docs/research/manifests/back-office-sur-mesure-pme-p4.sha256",
);
const integrationManifestPath = resolve(
  repositoryRoot,
  "docs/research/manifests/back-office-sur-mesure-pme-integration.sha256",
);
const pageSource = readFileSync(resolve(slugDirectory, "page.tsx"), "utf8");
const guideDataSource = readFileSync(
  resolve(slugDirectory, "guide-data.ts"),
  "utf8",
);
const modelSource = readFileSync(
  resolve(slugDirectory, "back-office-decision-model.ts"),
  "utf8",
);
const workbenchSource = readFileSync(
  resolve(slugDirectory, "back-office-decision-workbench.tsx"),
  "utf8",
);
const renderedPage = renderToStaticMarkup(Page());
const normalizedSource = pageSource.replace(/\s+/g, " ");
const registeredGuide = GUIDES.find((guide) => guide.slug === BACK_OFFICE_SLUG);

function sha256(path: string) {
  return createHash("sha256").update(readFileSync(path)).digest("hex");
}

function visibleText(html: string) {
  return html
    .replace(
      /<(script|style|template|noscript|svg)\b[^>]*>[\s\S]*?<\/\1>/gi,
      " ",
    )
    .replace(/<[^>]+>/g, " ")
    .replace(/&#x([0-9a-f]+);/gi, (_, hex: string) =>
      String.fromCodePoint(Number.parseInt(hex, 16)),
    )
    .replace(/&#([0-9]+);/g, (_, decimal: string) =>
      String.fromCodePoint(Number.parseInt(decimal, 10)),
    )
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&apos;|&#39;/gi, "'")
    .replace(/&quot;/gi, '"')
    .replace(/&rsquo;|&lsquo;/gi, "’")
    .replace(/&[a-z]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function articleWordCount() {
  const article = renderedPage.match(
    /<article\b[^>]*>([\s\S]*?)<\/article>/,
  )?.[1];
  expect(article).toBeDefined();
  const withoutWorkbench = (article ?? "").replace(
    /<section\b(?=[^>]*data-read-time-exclude="true")[^>]*>[\s\S]*?<\/section>/i,
    " ",
  );
  return (
    visibleText(withoutWorkbench).match(
      /[\p{L}\p{N}]+(?:[\u2019'\-][\p{L}\p{N}]+)*/gu,
    )?.length ?? 0
  );
}

function inlineTextBoundaryConcatenations(html: string) {
  const patterns = [
    /[\p{L}\p{N}]<(?:a|strong|em)\b/gu,
    /<\/(?:a|strong|em)>[\p{L}\p{N}]/gu,
  ];
  return patterns.flatMap((pattern) =>
    [...html.matchAll(pattern)].map((match) => match[0]),
  );
}

describe("P3 editorial quality for back-office sur mesure PME", () => {
  it("keeps the H1 and Article headline aligned with restrained metadata", () => {
    expect(registeredGuide).toBeDefined();
    const h1 = renderedPage.match(/<h1\b([^>]*)>([\s\S]*?)<\/h1>/);
    expect(visibleText(h1?.[2] ?? "")).toBe(
      BACK_OFFICE_HEADLINE.replace(/\s+/g, " "),
    );
    const ariaLabel = h1?.[1].match(/aria-label="([^"]+)"/)?.[1];
    expect(visibleText(ariaLabel ?? "")).toBe(
      BACK_OFFICE_HEADLINE.replace(/\s+/g, " "),
    );
    expect(metadata.title).toBe(registeredGuide?.title);
    expect(registeredGuide?.heroTitle).toBe(BACK_OFFICE_HEADLINE);
    expect(structuredData[0]).toMatchObject({
      "@type": "Article",
      headline: BACK_OFFICE_HEADLINE,
      description: BACK_OFFICE_DESCRIPTION,
      url: BACK_OFFICE_URL,
      articleSection: BACK_OFFICE_SECTION,
    });
    expect(BACK_OFFICE_DESCRIPTION.length).toBeGreaterThanOrEqual(135);
    expect(BACK_OFFICE_DESCRIPTION.length).toBeLessThanOrEqual(160);
  });

  it("keeps rendered inline JSX boundaries free of concatenated words", () => {
    expect(inlineTextBoundaryConcatenations(renderedPage)).toEqual([]);
  });

  it("does not duplicate obvious leading articles in rendered prose", () => {
    const text = visibleText(renderedPage);
    for (const duplicatedArticle of [
      "Le Le Référentiel général d’amélioration de l’accessibilité",
      "Le Le Règlement général sur la protection des données",
      "Un Un CRM",
      "Une Une application métier",
    ]) {
      expect(text, duplicatedArticle).not.toContain(duplicatedArticle);
    }
  });

  it("defines business and compliance acronyms where readers meet them", () => {
    const text = visibleText(renderedPage);
    for (const explanation of [
      "CRM (outil de gestion de la relation client)",
      "ERP (progiciel qui centralise plusieurs fonctions de l’entreprise)",
      "projet de sécurité applicative OWASP",
      "retour sur investissement (ROI)",
      "Référentiel général d’amélioration de l’accessibilité (RGAA)",
      "Règlement général sur la protection des données (RGPD)",
      "comité social et économique (CSE)",
    ]) {
      expect(text, explanation).toContain(explanation);
    }
    expect(text).not.toContain("commande B2B");
    expect(text).not.toContain("Support / IT");
    expect(text).not.toContain("Sécurité / IT");
  });

  it("links the decision stages without formulaic editorial filler", () => {
    const text = visibleText(renderedPage);
    for (const bridge of [
      "Ce contrat relu révèle alors les familles d’écran réellement utiles",
      "qui peut agir et comment l’équipe reprend-elle lorsque l’action échoue",
      "Ces échecs fournissent ensuite le même test aux cinq options",
      "le prototype doit faire apparaître les erreurs et les reprises",
      "nommez maintenant les personnes qui exploiteront l’outil",
      "une preuve à consigner avec la décision",
    ]) {
      expect(text, bridge).toContain(bridge);
    }
    expect(text).not.toMatch(
      /il est important de|dans cette optique|de surcroît|en conclusion|ce qu’il faut retenir/i,
    );
  });

  it("closes only the bounded P4 artificial formulations", () => {
    const text = visibleText(renderedPage);
    for (const oldFormulation of [
      "La file n’est pas une liste exhaustive",
      "La fiche n’est pas une copie de la base",
      "La reprise n’est pas un bouton Rejouer",
      "Le support n’est pas une adresse générique",
      "Une méthode qui ne peut jamais conclure “garder l’existant” prépare une vente",
    ]) {
      expect(text, oldFormulation).not.toContain(oldFormulation);
    }
    for (const retainedMeaning of [
      "La file montre le travail à traiter",
      "La fiche rend l’état et sa source compréhensibles",
      "Rejouer ne suffit pas pour reprendre",
      "Le support a besoin d’un diagnostic exploitable",
      "Si « garder l’existant » est impossible, la comparaison est biaisée",
      "le support doit pouvoir diagnostiquer puis reprendre sans aide de l’auteur",
    ]) {
      expect(text, retainedMeaning).toContain(retainedMeaning);
    }

    const heroSvg = readFileSync(
      resolve(publicDirectory, BACK_OFFICE_IMAGES[0].replace(/^\//, "")),
      "utf8",
    );
    expect(heroSvg).toContain("Du traitement courant à la reprise");
    expect(heroSvg).not.toContain("sans angle mort");
  });

  it("avoids the exact title-body echo in the first screen-family card", () => {
    const text = visibleText(renderedPage);
    expect(text).not.toContain(
      "La file montre le travail à traiter Elle montre",
    );
    expect(text).toContain(
      "La file montre le travail à traiter Elle indique ce qui attend une action",
    );
  });

  it("overrides the shared FAQ CTA delay with honest slug-specific copy", () => {
    const text = visibleText(renderedPage);
    expect(text).toContain(
      "Décrivez votre question et les preuves déjà réunies ; elle sera relue avant toute proposition.",
    );
    expect(text).not.toContain("Un conseiller vous rappelle sous 24 h.");
    expect(text).not.toMatch(/\bsous\s+24\s*(?:h\b|heures?\b)/iu);
  });

  it("keeps the registered route private until publication is proven", () => {
    expect(pageSource).not.toContain(
      'editorialStatus: "ready-for-human-review"',
    );
    expect(GUIDES.some((guide) => guide.slug === BACK_OFFICE_SLUG)).toBe(true);
    expect(metadata.robots).toMatchObject({ index: false, follow: false });
    expect(metadata.alternates?.canonical).toBe(BACK_OFFICE_URL);
    expect(
      PUBLISHED_GUIDES.some((guide) => guide.slug === BACK_OFFICE_SLUG),
    ).toBe(false);
    expect(getLegacyGuideDestination(BACK_OFFICE_SLUG)).toBeNull();
    expect(guideDataSource).not.toMatch(/datePublished|dateModified/);
    expect(JSON.stringify(structuredData)).not.toMatch(
      /datePublished|dateModified/,
    );
  });

  it("emits only Article and BreadcrumbList without unsupported schemas", () => {
    expect(structuredData.map((item) => item["@type"])).toEqual([
      "Article",
      "BreadcrumbList",
    ]);
    expect(JSON.stringify(structuredData)).not.toMatch(
      /FAQPage|HowTo|Review|AggregateRating|Product|Offer|wordCount/,
    );
    expect(renderedPage).not.toContain("FAQPage");
  });

  it("delivers the nine-step decision path and twelve residual FAQs", () => {
    const sectionIds = [
      "reponse",
      "contrat",
      "ecrans",
      "cas-difficiles",
      "options",
      "charge",
      "prototype",
      "responsables",
      "lundi",
    ];
    expect(renderedPage.match(/<h1\b/g)).toHaveLength(1);
    for (const id of sectionIds) {
      expect(renderedPage).toContain(`id="${id}"`);
    }
    expect(pageSource.match(/question:/g)).toHaveLength(12);
    expect(renderedPage).toContain("Qu’est-ce qu’un back-office dans une PME");
    expect(renderedPage).toContain("Qui maintient l’outil après livraison");
  });

  it("contains all twelve screen-contract fields and eight screen families", () => {
    for (const marker of [
      "Tâche et résultat",
      "Déclencheur",
      "Rôle autorisé",
      "Actions",
      "Données nécessaires",
      "Source de vérité",
      "Preuve utile",
      "Erreur ou exception",
      "Reprise",
      "Responsable du blocage",
      "Tiers indisponible",
      "Critère de recette",
    ]) {
      expect(pageSource, marker).toContain(marker);
    }
    for (const family of [
      "File de travail",
      "Fiche de détail",
      "Création et modification",
      "Action de masse",
      "Exception et reprise",
      "Historique et preuve",
      "Administration des droits",
      "Supervision et support",
    ]) {
      expect(pageSource, family).toContain(family);
    }
    expect(renderedPage).toContain("Familles à éprouver");
    expect(renderedPage).not.toContain("Écrans éprouvés");
  });

  it("covers the mandatory hard cases and five honest outcomes", () => {
    for (const hardCase of [
      "Doublon après création",
      "Modification simultanée",
      "Écriture locale, tiers en échec",
      "Propriétaire absent",
      "Compte administrateur utilisé",
      "Donnée sensible visible par le mauvais rôle",
      "Export trop large",
      "Intégration indisponible plusieurs heures",
      "Sauvegarde jamais restaurée",
      "Changement de prestataire ou arrêt du service",
      "succès partiel",
      "incident actif",
    ]) {
      expect(normalizedSource.toLocaleLowerCase("fr"), hardCase).toContain(
        hardCase.toLocaleLowerCase("fr"),
      );
    }
    for (const option of [
      "Conserver et mieux configurer",
      "Adopter un standard",
      "Assembler légèrement",
      "Cadrer un back-office dédié",
      "Différer ou abandonner",
    ]) {
      expect(pageSource, option).toContain(option);
    }
    expect(modelSource).not.toMatch(/score\s*[:=]/i);
  });

  it("labels every narrative scenario fictitious near its facts", () => {
    expect(
      pageSource.match(/Exemple entièrement fictif/g)?.length,
    ).toBeGreaterThanOrEqual(3);
    expect(normalizedSource).toContain(
      "Cet exemple n’est ni un client, ni un écran de production, ni un résultat Hagnéré Code",
    );
    expect(normalizedSource).not.toMatch(
      /notre client|chez un client|nous avons obtenu/i,
    );
  });

  it("keeps calculations bounded, local and separate from ROI", () => {
    expect(pageSource).toContain("cas × minutes actives par cas");
    expect(pageSource).toContain("cas en reprise × minutes de reprise");
    expect(pageSource).toContain("active + reprise, sauf si déjà incluse");
    expect(normalizedSource).toContain(
      "Ce résultat décrit une charge ; il ne prouve ni économie, ni rentabilité, ni budget de projet",
    );
    expect(workbenchSource).not.toMatch(
      /\bfetch\s*\(|XMLHttpRequest|WebSocket|sendBeacon|localStorage|sessionStorage|indexedDB/,
    );
    expect(workbenchSource).not.toMatch(/download\s*=|\.xlsx?\b|\.csv\b/i);
  });

  it("uses one guide-specific action destination and explains the six-step brief", () => {
    expect(pageSource).not.toContain("strategyCta=");
    expect(pageSource).toContain('primaryCtaHref: "/demarrer-un-projet"');
    expect(pageSource).toContain('ctaHref: "/demarrer-un-projet"');
    expect(normalizedSource).toContain(
      "projet, contexte, contenu, contraintes, coordonnées, puis synthèse et envoi",
    );
    expect(normalizedSource).toContain("ni devis automatique ni engagement");
    expect(normalizedSource).toContain(
      "garder, configurer, acheter, tester ou différer plutôt que développer",
    );
  });

  it("includes dated and bounded primary sources rather than market claims", () => {
    for (const domain of [
      "design.numerique.gouv.fr",
      "anact.fr",
      "cnil.fr",
      "eur-lex.europa.eu",
      "cheatsheetseries.owasp.org",
      "accessibilite.numerique.gouv.fr",
      "legifrance.gouv.fr",
    ]) {
      expect(pageSource, domain).toContain(domain);
    }
    expect(normalizedSource).toContain(
      "Recommandations d’ingénierie, pas texte légal français",
    );
    expect(normalizedSource).toContain(
      "vise aussi certains agents publics, pas les prestataires par défaut",
    );
    expect(normalizedSource).toContain(
      "une période glissante de six mois à un an",
    );
    expect(normalizedSource).toContain(
      "revue régulière, a minima chaque année",
    );
    expect(normalizedSource).toContain(
      "entreprises privées de 50 salariés et plus",
    );
    expect(normalizedSource).toContain("étendue, destination, lieu et durée");
    expect(normalizedSource).toContain(
      "Quelques clés pour réussir un projet numérique",
    );
    expect(normalizedSource).not.toMatch(
      /PDF et sa portée devront être rouvertes|durée indicative et les exceptions doivent être revalidées/i,
    );
    expect(normalizedSource).not.toMatch(
      /prix moyen de \d|délai moyen de \d|gain garanti/i,
    );
  });

  it("ships three accessible original SVG variants with exact dimensions", () => {
    const expected = [
      [BACK_OFFICE_IMAGES[0], 'width="1600" height="900"'],
      [BACK_OFFICE_IMAGES[1], 'width="1200" height="900"'],
      [BACK_OFFICE_IMAGES[2], 'width="1000" height="1000"'],
    ] as const;
    for (const [imagePath, dimensions] of expected) {
      const absolutePath = resolve(
        publicDirectory,
        imagePath.replace(/^\//, ""),
      );
      expect(existsSync(absolutePath), imagePath).toBe(true);
      const svg = readFileSync(absolutePath, "utf8");
      expect(svg).toContain(dimensions);
      expect(svg).toContain('role="img"');
      expect(svg).toContain("<title");
      expect(svg).toContain("<desc");
      expect(svg).toContain("Maquette — données fictives");
      expect(svg).not.toMatch(/logo produit|client fictif|€/i);
    }
    expect(structuredData[0].image).toEqual(
      BACK_OFFICE_IMAGES.map((image) => `https://hagnere-code.ai${image}`),
    );
  });

  it("renders a substantial article without production jargon or prohibited downloads", () => {
    expect(articleWordCount()).toBeGreaterThanOrEqual(2800);
    expect(renderedPage).toContain("<article");
    expect(visibleText(renderedPage)).not.toMatch(
      /GO_PASSE|NO_GO|snapshot|manifeste|ready-for-human-review|SHA-256/i,
    );
    expect(pageSource).not.toMatch(/href=["'][^"']*\.(?:xlsx?|csv)["']/i);
    expect(pageSource).not.toMatch(
      /guide ultime|révolutionnaire|imbattable|personne ne vous le dit/i,
    );
  });

  it("preserves the normalized P0 and historical 15-entry P4 snapshot", () => {
    expect(sha256(p0Path)).toBe(
      "070360018fdcd02b2c530d7dc26f5e4e0e1401c31365066959daff39313bd452",
    );
    expect(sha256(p4ManifestPath)).toBe(
      "a2b306555f162a9b0cca1adb4744625ad9ad156c8bad096dc09e66e48e6e6a99",
    );

    const expectedPaths = [
      "docs/research/back-office-sur-mesure-pme-p0.md",
      "docs/research/back-office-sur-mesure-pme.md",
      "docs/research/manifests/back-office-sur-mesure-pme-p1.sha256",
      "docs/research/manifests/back-office-sur-mesure-pme-p2.sha256",
      "docs/research/manifests/back-office-sur-mesure-pme-p3.sha256",
      "public/guides/back-office-sur-mesure-pme/article-back-office-contrat-ecran-16x9.svg",
      "public/guides/back-office-sur-mesure-pme/article-back-office-contrat-ecran-1x1.svg",
      "public/guides/back-office-sur-mesure-pme/article-back-office-contrat-ecran-4x3.svg",
      "src/app/guides/back-office-sur-mesure-pme/back-office-decision-model.test.ts",
      "src/app/guides/back-office-sur-mesure-pme/back-office-decision-model.ts",
      "src/app/guides/back-office-sur-mesure-pme/back-office-decision-workbench.test.tsx",
      "src/app/guides/back-office-sur-mesure-pme/back-office-decision-workbench.tsx",
      "src/app/guides/back-office-sur-mesure-pme/content-quality.test.ts",
      "src/app/guides/back-office-sur-mesure-pme/guide-data.ts",
      "src/app/guides/back-office-sur-mesure-pme/page.tsx",
    ].toSorted();
    const entries = readFileSync(p4ManifestPath, "utf8")
      .trim()
      .split("\n")
      .map((line) => line.match(/^[a-f0-9]{64}  ([^\s]+)$/)?.[1] ?? "")
      .toSorted();

    expect(entries).toHaveLength(15);
    expect(entries).toEqual(expectedPaths);
  });

  it("freezes and replays the exact 25-file integrated private snapshot", () => {
    expect(existsSync(integrationManifestPath)).toBe(true);

    const expectedPaths = [
      "docs/research/back-office-sur-mesure-pme-p0.md",
      "docs/research/back-office-sur-mesure-pme.md",
      "docs/research/manifests/back-office-sur-mesure-pme-p1.sha256",
      "docs/research/manifests/back-office-sur-mesure-pme-p2.sha256",
      "docs/research/manifests/back-office-sur-mesure-pme-p3.sha256",
      "docs/research/manifests/back-office-sur-mesure-pme-p4.sha256",
      "public/guides/back-office-sur-mesure-pme/article-back-office-contrat-ecran-16x9.svg",
      "public/guides/back-office-sur-mesure-pme/article-back-office-contrat-ecran-1x1.svg",
      "public/guides/back-office-sur-mesure-pme/article-back-office-contrat-ecran-4x3.svg",
      "src/app/guides/back-office-sur-mesure-pme/back-office-decision-model.test.ts",
      "src/app/guides/back-office-sur-mesure-pme/back-office-decision-model.ts",
      "src/app/guides/back-office-sur-mesure-pme/back-office-decision-workbench.test.tsx",
      "src/app/guides/back-office-sur-mesure-pme/back-office-decision-workbench.tsx",
      "src/app/guides/back-office-sur-mesure-pme/content-quality.test.ts",
      "src/app/guides/back-office-sur-mesure-pme/guide-data.ts",
      "src/app/guides/back-office-sur-mesure-pme/opengraph-image.tsx",
      "src/app/guides/back-office-sur-mesure-pme/page.tsx",
      "src/app/guides/lovable-bolt-v0-ou-agence-saas/content-quality.test.ts",
      "src/app/guides/signes-besoin-logiciel-metier/content-quality.test.ts",
      "src/app/guides/signes-besoin-logiciel-metier/page.tsx",
      "src/components/guides/GuidesHubPage.tsx",
      "src/lib/guides.test.ts",
      "src/lib/guides.ts",
      "src/lib/legacy-guide-redirects.test.ts",
      "src/lib/legacy-guide-redirects.ts",
    ].toSorted();
    const entries = readFileSync(integrationManifestPath, "utf8")
      .trim()
      .split("\n")
      .map((line) => line.match(/^([a-f0-9]{64})  ([^\s]+)$/));

    expect(entries).toHaveLength(25);
    expect(entries.every(Boolean)).toBe(true);
    expect(entries.map((entry) => entry?.[2]).toSorted()).toEqual(
      expectedPaths,
    );
    for (const entry of entries) {
      const expectedHash = entry?.[1];
      const relativePath = entry?.[2];
      expect(relativePath).toBeTruthy();
      expect(sha256(resolve(repositoryRoot, relativePath ?? ""))).toBe(
        expectedHash,
      );
    }
    expect(readFileSync(integrationManifestPath, "utf8")).not.toContain(
      "back-office-sur-mesure-pme-integration.sha256",
    );
  });
});
