import { createHash } from "node:crypto";
import { existsSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { getGuide } from "@/lib/guides";
import Page, { metadata } from "./page";

const slug = "lovable-bolt-v0-ou-agence-saas";
const slugDirectory = dirname(fileURLToPath(import.meta.url));
const repositoryRoot = resolve(slugDirectory, "../../../..");
const publicDirectory = resolve(repositoryRoot, `public/guides/${slug}`);
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
const legacyRedirectPath = resolve(
  repositoryRoot,
  "src/lib/legacy-guide-redirects.ts",
);
const pagePath = resolve(slugDirectory, "page.tsx");
const ogPath = resolve(slugDirectory, "opengraph-image.tsx");
const testPath = resolve(slugDirectory, "content-quality.test.ts");
const svgNames = [
  "chaine-garde-produit.svg",
  "frontieres-responsabilite.svg",
  "colis-remise-saas.svg",
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
const legacyRedirectSource = readFileSync(legacyRedirectPath, "utf8");
const integrationManifestSource = existsSync(integrationManifestPath)
  ? readFileSync(integrationManifestPath, "utf8")
  : "";
const svgSources = svgPaths.map((path) => readFileSync(path, "utf8"));
const publicCopy = [pageSource, ogSource, ...svgSources].join("\n");
const pageMarkup = renderToStaticMarkup(createElement(Page));
const structuredData = [
  ...pageMarkup.matchAll(
    /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g,
  ),
].map((match) => JSON.parse(match[1] ?? "{}") as Record<string, unknown>);
const article = structuredData.find((item) => item["@type"] === "Article");
const registeredGuide = getGuide(slug);

const canonicalUrl = ["https://hagnere-code.ai", "guides", slug].join("/");
const expectedTitle =
  "Lovable, Bolt, v0 ou agence : comment lancer votre SaaS ?";
const expectedDescription =
  "Lovable, Bolt, v0 ou agence : choisissez qui construit votre SaaS et vérifiez code, accès, données, mise en ligne, incidents et reprise.";

function sha256(path: string) {
  return createHash("sha256").update(readFileSync(path)).digest("hex");
}

describe("integrated quality for the Lovable, Bolt, v0 or SaaS agency guide", () => {
  it("keeps the registered draft private without inventing editorial dates", () => {
    expect(metadata).toMatchObject({
      title: expectedTitle,
      description: expectedDescription,
      robots: { index: false, follow: false },
      alternates: { canonical: canonicalUrl },
      openGraph: {
        type: "article",
        title: "Lovable, Bolt, v0 ou agence : lancer un SaaS",
        description: expectedDescription,
        url: canonicalUrl,
      },
    });
    expect(metadata.openGraph).not.toHaveProperty("publishedTime");
    expect(metadata.openGraph).not.toHaveProperty("modifiedTime");
    expect(pageSource).toContain("const guide = getGuide(slug)");
    expect(pageSource).toContain("buildGuideMetadata(guide, imageAlt)");
    expect(pageSource).toContain(
      "buildGuideStructuredData(guide, breadcrumbName)",
    );
    expect(pageSource).not.toContain("PRIVATE_ROBOTS");
    expect(pageSource).not.toContain(
      'editorialStatus: "ready-for-human-review"',
    );
    expect(pageSource).not.toContain("datePublished");
    expect(pageSource).not.toContain("dateModified");
    expect(ogSource).toContain("choisir qui construit et qui reprend le SaaS");
    expect(ogSource).toContain(
      "Choisir ce qu’une autre personne devra pouvoir reprendre",
    );
    expect(registrySource).toContain(`slug: "${slug}"`);
    expect(legacyRedirectSource).not.toContain(`"${slug}"`);
    expect(registeredGuide.editorialStatus).toBe("ready-for-human-review");
    expect(registeredGuide.datePublished).toBeUndefined();
    expect(registeredGuide.dateModified).toBeUndefined();
    expect(registeredGuide.readTimeMin).toBe(15);
    expect(researchCompact).toContain(
      "Aucune date de publication n’est créée par cette intégration",
    );
    expect(researchSource).toContain("GO_QUALITE_GUIDE");
  });

  it("renders only Article and BreadcrumbList with one coherent headline", () => {
    expect(structuredData.map((item) => item["@type"])).toEqual([
      "Article",
      "BreadcrumbList",
    ]);
    expect(article?.headline).toBe(expectedTitle);
    expect(article?.description).toBe(expectedDescription);
    expect(article?.url).toBe(canonicalUrl);
    expect(article).not.toHaveProperty("datePublished");
    expect(article).not.toHaveProperty("dateModified");
    expect(article?.articleSection).toBe("SaaS");
    expect(article?.image).toHaveLength(3);
    expect(pageMarkup).toContain("Lovable, Bolt, v0 ou agence");
    expect(publicCopy + JSON.stringify(structuredData)).not.toMatch(
      /\b(?:FAQPage|HowTo|Review|AggregateRating|Product|SoftwareApplication|wordCount)\b/,
    );
  });

  it("answers within the hero with all four non-hierarchical paths", () => {
    const hero = pageSource.match(/heroDescription="([^"]+)"/)?.[1] ?? "";
    expect(hero.trim().split(/\s+/).length).toBeLessThanOrEqual(150);
    for (const expected of [
      "prototyper seul avec Lovable, Bolt ou v0",
      "faites-le relire avant d’aller plus loin",
      "faites-vous accompagner dès la construction",
      "simplifiez le test ou reportez-le",
      "ce qu’une autre personne devra pouvoir reprendre",
    ]) {
      expect(hero).toContain(expected);
    }
    expect(pageCompact).toContain(
      "Retirez du test ce que personne ne sait gérer",
    );
    expect(pageCompact).toContain("Simplifier ou différer");
  });

  it("distinguishes the three products and locks the five critical source boundaries", () => {
    for (const expected of [
      "TanStack Start",
      "une branche active à la fois",
      "15 août sauf acceptation expresse anticipée",
      "audit complet payant ≠ contrôle de base de données tous plans",
      "Supabase au démarrage exige actuellement un plan payant et un projet Vite",
      "Next.js n’est pas pris en charge",
      "Visibilité du chat, visibilité Production et ressources partagées du projet",
      "Next.js est le défaut le plus fiable, sans exclure d’autres frameworks",
      "Trois points à vérifier dans les documentations",
      "Aucun résultat de benchmark ici",
    ]) {
      expect(pageCompact).toContain(expected);
    }
    expect(pageCompact).not.toContain("seulement main");
    expect(pageCompact).not.toContain("Les projets Claude Agent nouveaux");
    expect(pageCompact).not.toContain("GitHub peut devenir source de vérité");
    expect(pageCompact).not.toContain("GitHub peut être source de vérité");
    expect(pageCompact).toContain(
      "Renommer le dépôt seul est documenté comme sûr",
    );
    expect(pageCompact).toContain(
      "transfert, renommage du compte ou de l’organisation, suppression et déconnexion",
    );
    expect(pageCompact).not.toContain("v0 est un outil front-end");
    for (const source of [
      "https://docs.lovable.dev/features/security",
      "https://docs.lovable.dev/integrations/github",
      "https://docs.lovable.dev/tips-tricks/deployment-hosting-ownership",
      "https://docs.lovable.dev/features/business/data-opt-out",
      "https://docs.lovable.dev/introduction/credits-and-usage",
      "https://lovable.dev/terms",
      "https://support.bolt.new/building/security",
      "https://support.bolt.new/building/using-bolt/rollback-backup",
      "https://support.bolt.new/integrations/supabase",
      "https://support.bolt.new/account-and-subscription/tokens",
      "https://support.bolt.new/cloud/hosting/plans",
      "https://support.bolt.new/concepts/intro-llms",
      "https://v0.app/docs/full-stack-apps",
      "https://v0.app/docs/github",
      "https://v0.app/docs/projects",
      "https://v0.app/docs/sharing",
      "https://v0.app/docs/pricing",
      "https://v0.app/docs/security",
      "https://vercel.com/legal/ai-product-terms",
      "https://www.cnil.fr/sites/default/files/2026-05/cnil_guide_securite_personnelle.pdf",
    ]) {
      expect(pageSource).toContain(source);
    }
    expect(pageCompact).toContain("6 août 2026");
    expect(pageCompact).toContain(
      "Bolt affirme ne jamais utiliser les données du projet pour entraîner ses agents IA",
    );
    expect(pageCompact).toContain(
      "cette phrase ne documente pas, à elle seule, conservation, sous-traitants ou contrat",
    );
  });

  it("implements eight exact non-compensable custody stations", () => {
    const stations = [
      "1 · Périmètre",
      "2 · Code",
      "3 · Identités",
      "4 · Déploiement",
      "5 · Données",
      "6 · Secrets",
      "7 · Erreur",
      "8 · Retour et relève",
    ];
    for (const station of stations) {
      expect(pageSource).toContain(station);
    }
    for (const evidenceField of [
      "Personne responsable",
      "Seconde personne qui vérifie",
      "Trace conservée",
      "Test volontaire d’échec",
      "Condition pour passer la main",
      "FERMÉ / ÉCHEC / INCONNU",
    ]) {
      expect(pageSource).toContain(evidenceField);
    }
    expect(pageSource).toContain("F + E + I = 8");
    expect(pageSource).toContain("décision de transfert = SUSPENDRE");
    expect(pageSource).not.toContain("décision de transfert = STOP");
    expect(publicCopy).not.toContain("décision de transfert = STOP");
    expect(pageCompact).toContain("Une inconnue ne devient jamais zéro");
    expect(pageCompact).toContain("la remise reste suspendue");
    expect(pageCompact).toContain("Méthode non testée ici");
  });

  it("uses two explicitly fictional accounts and no customer evidence", () => {
    for (const expected of [
      "Exemple entièrement fictif",
      "Relais Devis",
      "Atelier Lune",
      "Atelier Silex",
      "lea@atelier-lune.example",
      "yanis@atelier-silex.example",
      "aucune donnée réelle",
      "Aucun client",
    ]) {
      expect(pageCompact).toContain(expected);
    }
    expect(pageCompact).toContain("tentative d’accès croisé");
    expect(pageCompact).toContain("ne certifie pas l’application");
    expect(pageCompact).toContain(
      "observer un utilisateur métier accomplir l’action sans aide du créateur",
    );
    expect(pageCompact).toContain(
      "ne prouve ni adoption ni utilité commerciale",
    );
    expect(pageCompact).toContain(
      "la préproduction doit être protégée comme la production",
    );
  });

  it("separates code, data, restoration, account migration and operations", () => {
    for (const expected of [
      "Récupération du code",
      "Export des données",
      "Restauration",
      "Migration des comptes",
      "Reprise opérationnelle",
      "une archive de code ne contient pas automatiquement",
      "l’historique de versions ne restaure ni Bolt Database ni Supabase",
      "une seule branche est active à la fois",
    ]) {
      expect(pageCompact).toContain(expected);
    }
    expect(pageCompact).toContain("secret dans Git");
    expect(pageCompact).toContain("Journaux, message, alerte et responsable");
    expect(pageCompact).toContain(
      "Après un retour à une version antérieure dans Bolt",
    );
    expect(pageCompact).toContain("un volume fictif doublé");
    expect(pageCompact).toContain("service tiers indisponible");
  });

  it("shows loyal good and bad fits plus a do-not-build outcome", () => {
    for (const expected of [
      "Bon et mauvais fit de l’autonomie",
      "Bon et mauvais fit de l’agence",
      "Quand l’autonomie, la revue ou l’accompagnement conviennent",
      "Hagnéré Code vend de l’accompagnement SaaS",
      "Décider de ne pas construire est un résultat",
      "entretien, un formulaire, une démonstration sans compte ou une procédure manuelle",
      "Aucun prix, délai ou gain moyen comparable n’est prouvé ici",
      "Ne comparez pas directement les unités affichées",
      "construction, exécution, fournisseurs externes et travail humain",
    ]) {
      expect(pageCompact + researchCompact).toContain(expected);
    }
    expect(pageCompact).toContain(
      "Fixez volontairement 45 minutes pour commencer",
    );
    expect(pageCompact).toContain(
      "n’est pas une estimation du temps nécessaire",
    );
  });

  it("keeps one late, loyal CTA without phone or legacy-route links", () => {
    expect(pageSource.match(/\/demarrer-un-projet/g) ?? []).toHaveLength(1);
    expect(pageSource).toContain('ctaLabel: "Décrire ce qui doit être repris"');
    expect(pageSource).toContain("showPhoneCta: false");
    expect(pageSource).not.toContain("sidebarHeroCta=");
    expect(pageSource).not.toContain("sidebarContextCta=");
    expect(pageSource).not.toContain("tel:");
    expect(pageSource).not.toContain("reprendre-mvp-vibe-code");
    expect(pageSource).not.toContain("no-code-ou-sur-mesure");
    expect(pageCompact).toContain("Si votre scénario exige déjà");
  });

  it("translates the custody method into words a non-technical reader can reuse", () => {
    for (const expected of [
      "personne responsable",
      "seconde personne",
      "trace à conserver",
      "test volontaire d’échec",
      "condition pour passer la main",
      "compilation sur un environnement vierge",
      "retour à une version antérieure",
    ]) {
      expect(pageCompact.toLocaleLowerCase("fr")).toContain(
        expected.toLocaleLowerCase("fr"),
      );
    }
    for (const removedPublicWording of [
      "Cadrer la prochaine preuve",
      "Bon fit",
      "Mauvais fit",
      "Gardien nommé :",
      "Témoin indépendant :",
      "Contre-preuve volontaire :",
      "Seuil de transfert :",
      "Un scanner est un capteur",
      "Les 45 minutes sont une contrainte éditoriale",
    ]) {
      expect(publicCopy).not.toContain(removedPublicWording);
    }
  });

  it("keeps ten distinct, action-led section titles without formulaic conclusion wording", () => {
    const sectionTitles = [
      ...pageSource.matchAll(
        /<GuidePremiumSection\s+[\s\S]*?\btitle="([^"]+)"/g,
      ),
    ].map((match) => match[1] ?? "");

    expect(sectionTitles).toHaveLength(10);
    expect(new Set(sectionTitles).size).toBe(10);
    expect(sectionTitles).toContain(
      "Choisissez qui construit avant d’ouvrir un outil",
    );
    expect(sectionTitles).toContain(
      "Validez seulement la prochaine étape du projet",
    );
    expect(
      sectionTitles.filter((title) => title.startsWith("Décidez")),
    ).toEqual([]);
    expect(publicCopy).not.toMatch(
      /ce qu’il faut retenir|en conclusion|il convient de|solution robuste|choix incontournable|révolutionn(?:e|er)/i,
    );
  });

  it("does not promise long-term reversibility from the first construction choice", () => {
    expect(pageCompact).not.toContain(
      "Votre décision ne vous engage pas pour les trois prochaines années",
    );
    expect(pageCompact).toContain(
      "Ne transformez pas le choix du premier test en engagement de long terme",
    );
    expect(pageCompact).toContain(
      "Reposez la question à l’étape suivante si le périmètre, les données ou la responsabilité changent",
    );
  });

  it("publishes a formal G1 coverage matrix and all charter perspectives", () => {
    for (const status of [
      "COUVERT",
      "RENVOI_EXPLICITE",
      "ECARTE_JUSTIFIE",
      "APPLICABLE",
    ]) {
      expect(researchSource).toContain(status);
    }
    expect(researchSource).not.toMatch(/^\|[^\n]+\| BLOQUANT \|/m);
    expect(researchSource).toContain(
      "Aucune ligne matérielle n’est `BLOQUANT`",
    );
    for (const perspective of [
      "Dirigeant",
      "Métier",
      "Opérations",
      "Finance",
      "IT / sécurité",
      "Données / RGPD",
      "Achats / juridique",
      "Adoption",
      "Maintenance",
      "Incident / reprise",
      "Réversibilité",
      "Solution simple / statu quo",
    ]) {
      expect(researchCompact).toContain(`| ${perspective} | APPLICABLE |`);
    }
    expect(researchSource).toContain("Matrice formelle de couverture G1");
    expect(researchSource).toContain("Localisation dossier / page");
    expect(researchSource).toContain("Dates éditoriales et publication réelle");
  });

  it("classifies every P2 assertion and every contradictory question with an explicit public outcome", () => {
    const p2Statuses = [
      "VERIFIED",
      "A_NUANCER",
      "A_RETIRER",
      "INCONNUE",
    ] as const;
    for (const status of p2Statuses) {
      expect(researchSource).toContain(`\`${status}\``);
    }

    const expectedIds = [
      ...Array.from(
        { length: 13 },
        (_, index) => `L${String(index + 1).padStart(2, "0")}`,
      ),
      ...Array.from(
        { length: 15 },
        (_, index) => `B${String(index + 1).padStart(2, "0")}`,
      ),
      ...Array.from(
        { length: 12 },
        (_, index) => `V${String(index + 1).padStart(2, "0")}`,
      ),
      ...Array.from(
        { length: 4 },
        (_, index) => `C${String(index + 1).padStart(2, "0")}`,
      ),
    ].sort();
    const assertionRows = [
      ...researchSource.matchAll(
        /^\| (L\d{2}|B\d{2}|V\d{2}|C\d{2}) \| (VERIFIED|A_NUANCER|A_RETIRER|INCONNUE)\s+\|/gm,
      ),
    ];
    expect(assertionRows).toHaveLength(44);
    expect(assertionRows.map((row) => row[1] ?? "").sort()).toEqual(
      expectedIds,
    );

    const actualCounts: Record<(typeof p2Statuses)[number], number> = {
      VERIFIED: 0,
      A_NUANCER: 0,
      A_RETIRER: 0,
      INCONNUE: 0,
    };
    for (const row of assertionRows) {
      const status = row[2] as (typeof p2Statuses)[number];
      actualCounts[status] += 1;
    }
    expect(actualCounts).toEqual({
      VERIFIED: 34,
      A_NUANCER: 8,
      A_RETIRER: 0,
      INCONNUE: 2,
    });
    expect(researchCompact).toContain(
      `${actualCounts.VERIFIED} \`VERIFIED\`, ${actualCounts.A_NUANCER} \`A_NUANCER\`, ${actualCounts.A_RETIRER} \`A_RETIRER\`, ${actualCounts.INCONNUE} \`INCONNUE\``,
    );
    expect(researchCompact).toContain("les huit formulations trop larges");

    for (const status of [
      "AJOUTEE",
      "DEJA_COUVERTE",
      "RENVOYEE",
      "ECARTEE_JUSTIFIEE",
    ]) {
      expect(researchSource).toContain(status);
    }
    expect(researchSource).toContain("Registre exhaustif des assertions");
    expect(researchSource).toContain("Sort dans la page publique candidate");
  });

  it("keeps the visible FAQ complete without restricted structured data", () => {
    const questions = pageSource.match(/question: "/g) ?? [];
    expect(questions).toHaveLength(12);
    for (const expected of [
      "Quel outil choisir",
      "Télécharger le code en ZIP",
      "Revenir à une version antérieure",
      "Un scan intégré",
      "À qui appartient",
      "Quand faut-il ne pas construire",
    ]) {
      expect(pageSource).toContain(expected);
    }
    expect(pageMarkup).toContain("Questions fréquentes");
  });

  it("ships three accessible original SVGs with robust mobile presentation", () => {
    for (const [index, svgPath] of svgPaths.entries()) {
      expect(existsSync(svgPath)).toBe(true);
      const source = svgSources[index] ?? "";
      expect(source).toContain('<title id="title">');
      expect(source).toContain('<desc id="desc">');
      expect(source).toContain('role="img"');
      expect(source).toContain('aria-labelledby="title desc"');
      expect(source).toMatch(/viewBox="0 0 \d+ \d+"/);
      expect(source).toContain('font-family="Arial, sans-serif"');
      const textElements = source.match(/<text\b[^>]*>/g) ?? [];
      expect(textElements.length).toBeGreaterThan(0);
      for (const textElement of textElements) {
        expect(textElement).toMatch(/fill="#[a-fA-F0-9]{6}"/);
        expect(textElement).toMatch(/font-size="\d+"/);
      }
      expect(source).not.toContain("<script");
      expect(source).not.toMatch(/(?:href|xlink:href)="https?:/);
    }
    expect(pageSource).toContain("min-w-[720px]");
    expect(pageSource).toContain("min-w-[680px]");
    expect(pageSource).toContain("min-w-[560px]");
    expect(pageSource.match(/overflow-x-auto/g)).toHaveLength(3);
    expect(pageSource.match(/tabIndex=\{0\}/g)).toHaveLength(3);
    for (const svgName of svgNames) {
      expect(pageSource).toContain(svgName);
    }
  });

  it("does not recycle the historical public signature", () => {
    for (const historical of [
      "Un lien qui fonctionne",
      "premier client",
      "huit preuves identiques",
      "mois 1",
      "mois 13",
      "Alba",
      "Noro",
      "Préparer mon premier test",
    ]) {
      expect(publicCopy).not.toContain(historical);
    }
    expect(researchSource).toContain("Contrôle de non-réutilisation");
    expect(researchSource).toContain("chaîne de garde du produit");
  });

  it("preserves the immutable P0 freeze", () => {
    expect(sha256(freezePath)).toBe(
      "c3fda447fd85d41e67d90fbc97c48fb159a91cdd725800c57fae542f43acc113",
    );
    expect(freezeSource).toContain(
      "HEAD d’entrée : `5f305b0cc6566c093b86a7234b64c0b5291eaeb4`",
    );
    expect(freezeSource).toContain("aucun `git add`, commit, push");
  });

  it("preserves the immutable seven-entry P1 manifest as a historical snapshot", () => {
    expect(existsSync(p1ManifestPath)).toBe(true);
    expect(sha256(p1ManifestPath)).toBe(
      "c08a27774c97ffb4feaf345470592217f2d5b73a04805e4180ef432b6f1f39ae",
    );
    const manifestSource = readFileSync(p1ManifestPath, "utf8");
    const entries = manifestSource.trim().split("\n");
    expect(entries).toHaveLength(7);

    const expectedRelativePaths = [
      `docs/research/${slug}.md`,
      `src/app/guides/${slug}/page.tsx`,
      `src/app/guides/${slug}/opengraph-image.tsx`,
      `src/app/guides/${slug}/content-quality.test.ts`,
      ...svgNames.map((name) => `public/guides/${slug}/${name}`),
    ].sort();
    const actualRelativePaths = entries
      .map((entry) => entry.match(/^[a-f0-9]{64}  (.+)$/)?.[1] ?? "")
      .sort();

    expect(actualRelativePaths).toEqual(expectedRelativePaths);
    for (const entry of entries) {
      const match = entry.match(/^([a-f0-9]{64})  (.+)$/);
      expect(match).not.toBeNull();
    }
    expect(manifestSource).not.toContain("input-freeze");
    expect(manifestSource).not.toContain(`${slug}-p1.sha256`);
    expect(manifestSource).not.toContain("src/lib/guides.ts");
  });

  it("preserves the immutable seven-entry P2 manifest as a historical snapshot", () => {
    expect(existsSync(p2ManifestPath)).toBe(true);
    expect(sha256(p2ManifestPath)).toBe(
      "e30ce514ef3f3119263b229bd595d73f41388b510bc5eca17829a9c48087b516",
    );
    const manifestSource = readFileSync(p2ManifestPath, "utf8");
    const entries = manifestSource.trim().split("\n");
    expect(entries).toHaveLength(7);

    const expectedRelativePaths = [
      `docs/research/${slug}.md`,
      `src/app/guides/${slug}/page.tsx`,
      `src/app/guides/${slug}/opengraph-image.tsx`,
      `src/app/guides/${slug}/content-quality.test.ts`,
      ...svgNames.map((name) => `public/guides/${slug}/${name}`),
    ].sort();
    const actualRelativePaths = entries
      .map((entry) => entry.match(/^[a-f0-9]{64}  (.+)$/)?.[1] ?? "")
      .sort();

    expect(actualRelativePaths).toEqual(expectedRelativePaths);
    for (const entry of entries) {
      const match = entry.match(/^([a-f0-9]{64})  (.+)$/);
      expect(match).not.toBeNull();
    }
    expect(manifestSource).not.toContain("input-freeze");
    expect(manifestSource).not.toContain(`${slug}-p2.sha256`);
    expect(manifestSource).not.toContain("src/lib/guides.ts");
  });

  it("preserves the immutable seven-entry P3 manifest as a historical snapshot", () => {
    expect(existsSync(p3ManifestPath)).toBe(true);
    expect(sha256(p3ManifestPath)).toBe(
      "435dab8483fa49d03ce9a9aff3fd5b744c13eed0cb9fbce40538514304847bc0",
    );
    const manifestSource = readFileSync(p3ManifestPath, "utf8");
    const entries = manifestSource.trim().split("\n");
    expect(entries).toHaveLength(7);

    const expectedRelativePaths = [
      `docs/research/${slug}.md`,
      `src/app/guides/${slug}/page.tsx`,
      `src/app/guides/${slug}/opengraph-image.tsx`,
      `src/app/guides/${slug}/content-quality.test.ts`,
      ...svgNames.map((name) => `public/guides/${slug}/${name}`),
    ].sort();
    const actualRelativePaths = entries
      .map((entry) => entry.match(/^[a-f0-9]{64}  (.+)$/)?.[1] ?? "")
      .sort();

    expect(actualRelativePaths).toEqual(expectedRelativePaths);
    for (const entry of entries) {
      const match = entry.match(/^([a-f0-9]{64})  (.+)$/);
      expect(match).not.toBeNull();
    }
    expect(manifestSource).not.toContain("input-freeze");
    expect(manifestSource).not.toContain(`${slug}-p3.sha256`);
    expect(manifestSource).not.toContain("src/lib/guides.ts");
  });

  it("preserves the immutable seven-entry P4 manifest as a historical snapshot", () => {
    expect(existsSync(p4ManifestPath)).toBe(true);
    expect(sha256(p4ManifestPath)).toBe(
      "e5c4b547417574099019071221b50d25aaa407592a392e995ddc382344e79ad2",
    );
    const manifestSource = readFileSync(p4ManifestPath, "utf8");
    const entries = manifestSource.trim().split("\n");
    expect(entries).toHaveLength(7);

    const expectedRelativePaths = [
      `docs/research/${slug}.md`,
      `src/app/guides/${slug}/page.tsx`,
      `src/app/guides/${slug}/opengraph-image.tsx`,
      `src/app/guides/${slug}/content-quality.test.ts`,
      ...svgNames.map((name) => `public/guides/${slug}/${name}`),
    ].sort();
    const actualRelativePaths = entries
      .map((entry) => entry.match(/^[a-f0-9]{64}  (.+)$/)?.[1] ?? "")
      .sort();

    expect(actualRelativePaths).toEqual(expectedRelativePaths);
    for (const entry of entries) {
      const match = entry.match(/^([a-f0-9]{64})  (.+)$/);
      expect(match).not.toBeNull();
    }
    expect(manifestSource).not.toContain("input-freeze");
    expect(manifestSource).not.toContain(`${slug}-p4.sha256`);
    expect(manifestSource).not.toContain("src/lib/guides.ts");
  });

  it("preserves the exact historical 25-file integrated private snapshot", () => {
    expect(existsSync(integrationManifestPath)).toBe(true);
    expect(sha256(integrationManifestPath)).toBe(
      "92f8fb85df2d1308643a2784301177189714d4802ec8233ad36e056d7fc23c67",
    );

    const expectedPaths = [
      `docs/research/${slug}-input-freeze.md`,
      `docs/research/${slug}.md`,
      `docs/research/manifests/${slug}-p1.sha256`,
      `docs/research/manifests/${slug}-p2.sha256`,
      `docs/research/manifests/${slug}-p3.sha256`,
      `docs/research/manifests/${slug}-p4.sha256`,
      "docs/research/mvp-saas-quoi-inclure.md",
      ...svgNames.map((name) => `public/guides/${slug}/${name}`),
      "src/app/guides/bubble-ou-saas-sur-mesure/content-quality.test.ts",
      `src/app/guides/${slug}/content-quality.test.ts`,
      `src/app/guides/${slug}/opengraph-image.tsx`,
      `src/app/guides/${slug}/page.tsx`,
      "src/app/guides/mvp-saas-quoi-inclure/content-quality.test.ts",
      "src/app/guides/mvp-saas-quoi-inclure/page.tsx",
      "src/components/design-shared/SiteFooter.tsx",
      "src/components/design-shared/accessibility-contract.test.tsx",
      "src/components/guides/guide-premium-faq-categorized.test.tsx",
      "src/components/guides/guide-premium-faq-categorized.tsx",
      "src/components/guides/GuidesHubPage.tsx",
      "src/lib/guides.test.ts",
      "src/lib/guides.ts",
      "src/lib/legacy-guide-redirects.test.ts",
      "src/lib/legacy-guide-redirects.ts",
    ].toSorted();
    const entries = integrationManifestSource
      .trim()
      .split("\n")
      .map((line) => line.match(/^([a-f0-9]{64})  ([^\s]+)$/));

    expect(entries).toHaveLength(25);
    expect(entries.every(Boolean)).toBe(true);
    expect(entries.map((entry) => entry?.[2]).toSorted()).toEqual(
      expectedPaths,
    );
    expect(integrationManifestSource).not.toContain(
      `${slug}-integration.sha256`,
    );
    expect(testSource).toContain(
      "exact historical 25-file integrated private snapshot",
    );
  });
});
