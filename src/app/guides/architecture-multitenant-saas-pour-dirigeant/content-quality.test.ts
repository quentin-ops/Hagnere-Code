import { createHash } from "node:crypto";
import { readFileSync, readdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { GUIDES, PUBLISHED_GUIDES } from "@/lib/guides";
import Page, {
  MULTITENANT_DESCRIPTION,
  MULTITENANT_HEADLINE,
  MULTITENANT_IMAGES,
  MULTITENANT_SLUG,
  MULTITENANT_URL,
  localDraftContract,
  metadata,
  structuredData,
} from "./page";

const slugDirectory = dirname(fileURLToPath(import.meta.url));
const repositoryRoot = resolve(slugDirectory, "../../../..");
const publicDirectory = resolve(
  repositoryRoot,
  "public/guides/architecture-multitenant-saas-pour-dirigeant",
);
const researchPath = resolve(
  repositoryRoot,
  "docs/research/architecture-multitenant-saas-pour-dirigeant.md",
);
const freezePath = resolve(
  repositoryRoot,
  "docs/research/architecture-multitenant-saas-pour-dirigeant-input-freeze.md",
);
const p1ManifestPath = resolve(
  repositoryRoot,
  "docs/research/manifests/architecture-multitenant-saas-pour-dirigeant-p1.sha256",
);
const p2ManifestPath = resolve(
  repositoryRoot,
  "docs/research/manifests/architecture-multitenant-saas-pour-dirigeant-p2.sha256",
);
const pagePath = resolve(slugDirectory, "page.tsx");
const ogPath = resolve(slugDirectory, "opengraph-image.tsx");
const svgNames = [
  "couches-isolation-saas.svg",
  "cinq-familles-isolation.svg",
  "protocole-tenants-a-b.svg",
] as const;
const svgPaths = svgNames.map((name) => resolve(publicDirectory, name));

const pageSource = readFileSync(pagePath, "utf8");
const pageCompact = pageSource.replace(/\s+/g, " ");
const ogSource = readFileSync(ogPath, "utf8");
const researchSource = readFileSync(researchPath, "utf8");
const researchCompact = researchSource.replace(/\s+/g, " ");
const freezeSource = readFileSync(freezePath, "utf8");
const freezeBytes = readFileSync(freezePath);
const p1ManifestSource = readFileSync(p1ManifestPath, "utf8");
const p2ManifestSource = readFileSync(p2ManifestPath, "utf8");
const svgSources = svgPaths.map((path) => readFileSync(path, "utf8"));
const publicCopy = [pageSource, ogSource, ...svgSources].join("\n");
const pageMarkup = renderToStaticMarkup(createElement(Page));

const sha256 = (value: string | Buffer) =>
  createHash("sha256").update(value).digest("hex");

const count = (value: string, needle: string) => value.split(needle).length - 1;

const visibleText = (html: string) =>
  html
    .replace(
      /<(script|style|template|noscript|svg)\b[^>]*>[\s\S]*?<\/\1>/gi,
      " ",
    )
    .replace(/<[^>]+>/g, " ")
    .replace(/&#(x?[0-9a-f]+);/gi, (_match, value: string) => {
      const hexadecimal = value[0].toLowerCase() === "x";
      const codePoint = Number.parseInt(
        hexadecimal ? value.slice(1) : value,
        hexadecimal ? 16 : 10,
      );
      return Number.isFinite(codePoint) ? String.fromCodePoint(codePoint) : " ";
    })
    .replace(/&(?:nbsp|ensp|emsp);/gi, " ")
    .replace(/&amp;/gi, " et ")
    .replace(/&(?:apos|rsquo|lsquo);/gi, "'")
    .replace(/&(?:quot|ldquo|rdquo);/gi, '"')
    .replace(/&(?:ndash|mdash);/gi, "-")
    .replace(/&[a-z]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();

const wordCount = (html: string) =>
  visibleText(html).match(
    /[\p{L}\p{N}]+(?:[\u2019'\-][\p{L}\p{N}]+)*/gu,
  )?.length ?? 0;

describe("P2 content quality for the multitenant SaaS architecture guide", () => {
  it("keeps the local route private until central integration", () => {
    expect(localDraftContract).toEqual({
      editorialStatus: "ready-for-human-review",
    });
    expect(metadata).toMatchObject({
      title: MULTITENANT_HEADLINE,
      description: MULTITENANT_DESCRIPTION,
      robots: { index: false, follow: false },
      alternates: { canonical: MULTITENANT_URL },
    });
    expect(GUIDES.some((guide) => guide.slug === MULTITENANT_SLUG)).toBe(false);
    expect(
      PUBLISHED_GUIDES.some((guide) => guide.slug === MULTITENANT_SLUG),
    ).toBe(false);
    expect(pageSource).toContain("PRIVATE_ROBOTS");
    expect(pageSource).not.toContain("getGuide(");
    expect(pageSource).not.toContain("buildGuideMetadata(");
    expect(pageSource).not.toMatch(/datePublished|dateModified/);
  });

  it("aligns the visible promise, metadata and conservative schemas", () => {
    expect(MULTITENANT_HEADLINE).toBe(
      "Architecture multitenant SaaS : que faut-il isoler ?",
    );
    expect(MULTITENANT_DESCRIPTION.length).toBeLessThanOrEqual(155);
    expect(metadata.openGraph).toMatchObject({
      type: "article",
      title: MULTITENANT_HEADLINE,
      description: MULTITENANT_DESCRIPTION,
      url: MULTITENANT_URL,
    });
    expect(pageMarkup).toContain("Architecture multitenant SaaS :");
    expect(pageMarkup).toContain("que faut-il isoler ?");
    expect(structuredData.map((item) => item["@type"])).toEqual([
      "Article",
      "BreadcrumbList",
    ]);
    const article = structuredData[0];
    expect(article).toMatchObject({
      "@type": "Article",
      headline: MULTITENANT_HEADLINE,
      description: MULTITENANT_DESCRIPTION,
      url: MULTITENANT_URL,
      image: MULTITENANT_IMAGES.map(
        (image) => `https://hagnere-code.ai${image}`,
      ),
      isPartOf: {
        "@type": "CollectionPage",
        "@id": "https://hagnere-code.ai/guides#collection",
      },
    });
    expect(JSON.stringify(structuredData)).not.toMatch(
      /datePublished|dateModified|FAQPage|HowTo|Review|AggregateRating|Product|SoftwareApplication|wordCount/,
    );
  });

  it("answers the reader's three questions before adding terminology", () => {
    const hero = pageSource.match(/heroDescription="([^"]+)"/)?.[1] ?? "";
    expect(hero.trim().split(/\s+/).length).toBeGreaterThanOrEqual(80);
    expect(hero.trim().split(/\s+/).length).toBeLessThanOrEqual(110);
    for (const phrase of [
      "plusieurs organisations",
      "cela ne signifie pas que tous les clients partagent tout",
      "Une base par client n’est ni automatiquement plus sûre",
      "ni automatiquement moins chère",
      "ce qui doit être séparé",
      "comment vous le testerez",
      "quel travail récurrent vous acceptez",
      "cinq familles sans les classer",
      "deux organisations",
    ]) {
      expect(hero).toContain(phrase);
    }
    expect(pageCompact).toContain(
      "Ces modèles répondent à des contraintes différentes",
    );
    expect(pageCompact).toContain(
      "Une inconnue bien formulée vaut mieux qu’un dédié par réflexe",
    );
  });

  it("maps ten layers and five non-ranked isolation families", () => {
    expect(pageSource.match(/number="(?:0[1-9]|10)"/g)).toHaveLength(10);
    for (const layer of [
      "Tenant métier",
      "Identité et contexte actif",
      "Autorisation objet",
      "Application et tâches de fond",
      "Données et fichiers",
      "Cache et recherche",
      "Événements et files",
      "Logs, support et administration",
      "Sauvegarde, restauration et sortie",
      "Calcul, réseau, région et déploiement",
    ]) {
      expect(pageSource).toContain(layer);
    }
    for (const family of [
      "Données partagées avec clé de tenant",
      "Schéma ou namespace séparé",
      "Base, stockage ou ressource dédiée",
      "Déploiement dédié",
      "Hybride ou isolation ciblée",
    ]) {
      expect(pageSource).toContain(family);
    }
    expect(pageCompact).toContain(
      "Cinq familles comparées sans score ni gagnant universel",
    );
    expect(pageCompact).toContain(
      "La base peut être propre au client tandis que le calcul",
    );
  });

  it("derives every displayed section time from rendered words at 200 wpm", () => {
    for (const id of [
      "reponse",
      "couches",
      "familles",
      "consequences",
      "chemin",
      "protocole",
      "rls",
      "exploitation",
      "contrat",
      "action",
    ]) {
      const sectionMarkup =
        pageMarkup.match(
          new RegExp(
            `<section[^>]*id="${id}"[^>]*>([\\s\\S]*?)<\\/section>`,
          ),
        )?.[1] ?? "";
      expect(sectionMarkup, id).not.toBe("");
      const declaredMinutes = Number(
        visibleText(sectionMarkup).match(/\b(\d+) min\b/)?.[1],
      );
      const measuredMinutes = Math.max(
        1,
        Math.round(wordCount(sectionMarkup) / 200),
      );
      expect(declaredMinutes, id).toBe(measuredMinutes);
    }
  });

  it("keeps the 60-minute exercise distinct from any project estimate", () => {
    expect(pageCompact).toContain("un créneau volontaire de 60 minutes");
    expect(pageCompact).toContain(
      "Ce nombre n’est ni un délai projet ni une estimation du cadrage complet",
    );
    expect(researchCompact).toContain(
      "durée éditoriale volontaire, non donnée de marché",
    );
  });

  it("turns architecture into business and operating consequences", () => {
    for (const consequence of [
      "Onboarding",
      "Offres",
      "Mises à jour",
      "Voisin bruyant",
      "Incident",
      "Restauration",
      "Support",
      "Mesure des coûts",
      "Sortie",
    ]) {
      expect(pageSource).toContain(`"${consequence}"`);
    }
    for (const costBasket of [
      "Infrastructure",
      "Provisionnement",
      "Évolutions",
      "Exploitation",
      "Sortie",
    ]) {
      expect(pageSource).toContain(`"${costBasket}"`);
    }
    expect(pageCompact).toContain(
      "Aucun multiplicateur de marché n’est défendable ici",
    );
    expect(pageCompact).toContain(
      "Une demande vague de « serveur dédié » ne suffit pas",
    );
    expect(pageSource).not.toMatch(
      /\b(?:€|euros?|ROI garanti|économie garantie)\b/i,
    );
  });

  it("bounds dedicated deployments, messaging and control-plane claims", () => {
    expect(pageCompact).toContain(
      "identité, onboarding ou opérations peuvent rester communs",
    );
    expect(pageCompact).toContain(
      "Un petit parc peut couvrir le plan de contrôle par des procédures documentées et des scripts",
    );
    expect(pageCompact).toContain(
      "il n’impose ni produit ni seuil universel",
    );
    expect(pageCompact).toContain(
      "une exigence de conception à tester, pas une citation littérale d’OWASP",
    );
    expect(researchSource).toMatch(
      /^\| F23 \| A_NUANCER \| DEDUCTION\s+\|/m,
    );
    expect(researchCompact).toContain(
      "OWASP propagation générale ; Azure messaging",
    );
    expect(researchCompact).toContain(
      "processus manuels documentés sans construire un composant complet",
    );
  });

  it("defines a fictional two-organization protocol with nine independent outcomes", () => {
    for (const marker of [
      "Exemple entièrement fictif — non exécuté",
      "Atelier Aube",
      "Bureau Boréal",
      "lea@atelier-aube.example",
      "yanis@bureau-boreal.example",
      "A-ALPHA",
      "B-BRAVO",
      "Aucun résultat de ce protocole n’est présenté comme une preuve client",
      "Neuf scénarios A/B non compensables",
      "FERMÉ",
      "ÉCHEC",
      "NON EXÉCUTÉ",
      "INCONNU",
    ]) {
      expect(pageCompact).toContain(marker);
    }
    for (const scenario of [
      "Lecture",
      "Écriture",
      "Export",
      "Tâche de fond",
      "Fichier",
      "Cache",
      "Logs et support",
      "Sauvegarde",
      "Restauration",
    ]) {
      expect(pageSource).toContain(`"${scenario}"`);
    }
    expect(pageCompact).toContain(
      "Compter huit succès sur neuf ne crée ni note de sécurité",
    );
    expect(pageCompact).toContain("il ne certifie ni sécurité ni conformité");
  });

  it("states PostgreSQL 18 RLS scope and backup behavior precisely", () => {
    for (const phrase of [
      "un refus par défaut",
      "BYPASSRLS",
      "contournent toujours les politiques",
      "Le propriétaire de la table les contourne normalement",
      "FORCE ROW LEVEL SECURITY",
      "TRUNCATE",
      "REFERENCES",
      "les clés primaires, uniques et étrangères",
      "révéler indirectement qu’une valeur existe",
      "politiques permissives se combinent par `OR`",
      "restrictives par `AND`",
      "au moins une permissive doit d’abord accorder l’accès",
      "peut créer une course concurrente",
      "actions parallèles font donc partie du test",
      "`row_security=off` ne désactive pas et ne contourne pas RLS",
      "provoque une erreur lorsqu’une requête serait filtrée",
      "restaurez sur une copie",
    ]) {
      expect(pageCompact).toContain(phrase);
    }
    expect(pageCompact).toContain(
      "il ne remplace pas l’autorisation objet de l’application",
    );
    expect(pageCompact).toContain(
      "L’isolation des fichiers, caches, index, files, exports ou logs",
    );
    expect(pageCompact).not.toContain(
      "Que les rôles d’administration ne contournent jamais la règle",
    );
  });

  it("uses reopened primary sources with explicit limits", () => {
    const officialUrls = [
      "https://docs.aws.amazon.com/wellarchitected/latest/saas-lens/isolation-mindset.html",
      "https://docs.aws.amazon.com/wellarchitected/latest/saas-lens/silo-pool-and-bridge-models.html",
      "https://docs.aws.amazon.com/wellarchitected/latest/saas-lens/targeted-isolation.html",
      "https://learn.microsoft.com/en-us/azure/architecture/guide/multitenant/considerations/tenancy-models",
      "https://learn.microsoft.com/en-us/azure/architecture/guide/multitenant/approaches/storage-data",
      "https://learn.microsoft.com/en-us/azure/architecture/guide/multitenant/approaches/compute",
      "https://learn.microsoft.com/en-us/azure/architecture/guide/multitenant/approaches/deployment-configuration",
      "https://learn.microsoft.com/en-us/azure/architecture/guide/multitenant/approaches/identity",
      "https://learn.microsoft.com/en-us/azure/architecture/guide/multitenant/approaches/integration",
      "https://learn.microsoft.com/en-us/azure/architecture/guide/multitenant/approaches/messaging",
      "https://learn.microsoft.com/en-us/azure/architecture/guide/multitenant/considerations/control-planes",
      "https://www.postgresql.org/docs/18/ddl-rowsecurity.html",
      "https://www.postgresql.org/docs/18/sql-createpolicy.html",
      "https://owasp.org/API-Security/editions/2023/en/0xa1-broken-object-level-authorization/",
      "https://cheatsheetseries.owasp.org/cheatsheets/Multi_Tenant_Security_Cheat_Sheet.html",
    ];
    expect(officialUrls).toHaveLength(15);
    for (const url of officialUrls) {
      expect(pageSource).toContain(url);
      expect(researchSource).toContain(url);
    }
    expect(researchSource).toContain(
      "Toutes les URL ci-dessous ont été ouvertes",
    );
    expect(researchSource).toContain("6 août 2026");
    expect(researchSource).toContain("4 avril 2023");
    expect(researchSource).toContain("27 juin 2025");
    expect(researchSource).toContain("11 août 2025");
    expect(researchSource).toContain("23 juin 2026");
    expect(researchSource).toContain("12 août 2025");
    expect(researchSource).toContain("23 mai 2026");
    expect(researchSource).toContain("17 octobre 2025");
    expect(researchSource).toContain("6 janvier 2026");
    expect(researchSource).toContain("1er juillet 2025");
    expect(researchSource).toContain("9 mai 2025");
    const deploymentSourceRow =
      researchSource
        .split("\n")
        .find((line) => line.includes("[Azure — Deployment and configuration]")) ??
      "";
    expect(deploymentSourceRow).toContain("12 août 2025");
    expect(deploymentSourceRow).not.toContain("30 avril 2026");
    expect(researchSource).not.toContain(
      "contexte tenant, cache, tâches asynchrones",
    );
    expect(pageSource).not.toContain(
      "Contexte tenant dans caches, tâches, fichiers et opérations",
    );
    expect(pageSource).not.toContain(
      "https://www.postgresql.org/docs/current/ddl-rowsecurity.html",
    );
    expect(pageCompact).toContain(
      "une certification, un avis juridique ou une garantie de sécurité demandent un autre cadre",
    );
  });

  it("provides twelve factual FAQs without FAQPage markup", () => {
    expect(pageSource.match(/question:/g)).toHaveLength(12);
    for (const question of [
      "Que signifie multitenant pour un SaaS B2B ?",
      "Faut-il une base de données par client ?",
      "RLS suffit-elle à isoler les clients dans PostgreSQL ?",
      "Un identifiant UUID protège-t-il un objet ?",
      "Une offre dédiée est-elle toujours plus chère ?",
      "Ce protocole certifie-t-il la sécurité ou le RGPD ?",
      "Quelle décision prendre si les contraintes sont inconnues ?",
    ]) {
      expect(pageSource).toContain(question);
    }
    expect(pageMarkup).not.toContain('"@type":"FAQPage"');
  });

  it("keeps one late project CTA and only proven internal links", () => {
    expect(count(pageSource, 'ctaHref: "/demarrer-un-projet"')).toBe(1);
    expect(pageSource).toContain("showPhoneCta: false");
    expect(pageSource).not.toContain("tel:");
    const linkedNeighbors = [
      "cahier-des-charges-saas",
      "mvp-saas-quoi-inclure",
      "droits-acces-application-metier",
      "bubble-ou-saas-sur-mesure",
    ];
    for (const slug of linkedNeighbors) {
      expect(pageSource).toContain(`href="/guides/${slug}"`);
      expect(GUIDES.some((guide) => guide.slug === slug)).toBe(true);
    }
    expect(pageSource.match(/<Link href="\/guides\//g)).toHaveLength(4);
    for (const futureSlug of [
      "facturation-abonnements-saas",
      "securite-saas-b2b",
      "rgpd-saas-b2b",
      "heberger-saas-france-ou-europe",
    ]) {
      expect(pageSource).not.toContain(`href="/guides/${futureSlug}"`);
    }
  });

  it("ships exactly three local, accessible and inert SVG diagrams", () => {
    expect(readdirSync(publicDirectory).sort()).toEqual([...svgNames].sort());
    expect(MULTITENANT_IMAGES).toEqual(
      svgNames.map(
        (name) =>
          `/guides/architecture-multitenant-saas-pour-dirigeant/${name}`,
      ),
    );
    for (const svg of svgSources) {
      expect(svg).toMatch(/^<svg\b/);
      expect(svg).toContain('role="img"');
      expect(svg).toContain('aria-labelledby="title desc"');
      expect(svg).toContain('<title id="title">');
      expect(svg).toContain('<desc id="desc">');
      expect(svg).toMatch(/viewBox="0 0 \d+ \d+"/);
      expect(svg).not.toMatch(
        /<script|<foreignObject|href="https?:|xlink:href=/i,
      );
    }
    for (const layer of [
      "Tenant métier",
      "Identité et contexte actif",
      "Autorisation objet",
      "Application et tâches de fond",
      "Données et fichiers",
      "Cache et recherche",
      "Événements et files",
      "Logs, support et administration",
      "Sauvegarde, restauration et sortie",
      "Calcul, réseau, région et déploiement",
    ]) {
      expect(svgSources[0]).toContain(layer);
    }
    const familyLabels = [
      "Partage contrôlé",
      "Schéma ou namespace",
      "Données dédiées",
      "Déploiement dédié",
      "Hybride ou ciblée",
    ];
    for (const label of familyLabels) {
      expect(svgSources[1].indexOf(label), label).toBeGreaterThan(-1);
    }
    for (let index = 1; index < familyLabels.length; index += 1) {
      expect(svgSources[1].indexOf(familyLabels[index])).toBeGreaterThan(
        svgSources[1].indexOf(familyLabels[index - 1]),
      );
    }
    expect(ogSource).toContain('title: "Architecture multitenant SaaS"');
    expect(ogSource).toContain(
      'subtitle: "Choisir ce qui doit être partagé ou dédié"',
    );
    expect(ogSource).toContain('"Aucun modèle universel"');
  });

  it("keeps a complete fact register, coverage matrix and reader perspectives", () => {
    const factRows = researchSource.match(/^\| F\d{2} \|.*$/gm) ?? [];
    expect(factRows).toHaveLength(41);
    expect(
      factRows.filter((row) => /\|\s*VERIFIED\s*\|/.test(row)),
    ).toHaveLength(32);
    expect(
      factRows.filter((row) => /\|\s*A_NUANCER\s*\|/.test(row)),
    ).toHaveLength(7);
    expect(
      factRows.filter((row) => /\|\s*A_RETIRER\s*\|/.test(row)),
    ).toHaveLength(0);
    expect(
      factRows.filter((row) => /\|\s*INCONNUE\s*\|/.test(row)),
    ).toHaveLength(2);
    expect(researchCompact).toContain(
      "32 `VERIFIED`, 7 `A_NUANCER`, 0 `A_RETIRER`, 2 `INCONNUE`",
    );
    expect(researchSource).not.toContain("| BLOQUANT |");
    for (const perspective of [
      "Dirigeant",
      "Métier utilisateur",
      "Opérations",
      "Finance",
      "IT / sécurité",
      "Données / RGPD",
      "Achats / juridique",
      "Adoption",
      "Maintenance",
      "Incident / reprise",
      "Solution simple / statu quo",
      "Réversibilité",
    ]) {
      const escapedPerspective = perspective.replace(
        /[.*+?^${}()|[\]\\]/g,
        "\\$&",
      );
      expect(researchSource).toMatch(
        new RegExp(`\\|\\s*${escapedPerspective}\\s*\\|\\s*APPLICABLE\\s*\\|`),
      );
    }
    expect(researchSource).toContain("PASSE_1_TERMINEE");
    expect(researchSource).toContain("PASSE_2_TERMINEE");
  });

  it("preserves the frozen input and P1 snapshot, then replays P2", () => {
    expect(sha256(freezeBytes)).toBe(
      "d398f38c7e602158b29a94489f302c8f96c5f7d0b358b0cacc3496472b51a76a",
    );
    expect(freezeSource).toContain(
      "architecture-multitenant-saas-pour-dirigeant",
    );

    const expectedPaths = [
      "docs/research/architecture-multitenant-saas-pour-dirigeant.md",
      "public/guides/architecture-multitenant-saas-pour-dirigeant/cinq-familles-isolation.svg",
      "public/guides/architecture-multitenant-saas-pour-dirigeant/couches-isolation-saas.svg",
      "public/guides/architecture-multitenant-saas-pour-dirigeant/protocole-tenants-a-b.svg",
      "src/app/guides/architecture-multitenant-saas-pour-dirigeant/content-quality.test.ts",
      "src/app/guides/architecture-multitenant-saas-pour-dirigeant/opengraph-image.tsx",
      "src/app/guides/architecture-multitenant-saas-pour-dirigeant/page.tsx",
    ];
    expect(sha256(p1ManifestSource)).toBe(
      "72c96fe9de42605eec56746181129570b88ec36dc431540f69fa394b08d4da19",
    );
    const p1ManifestLines = p1ManifestSource.trim().split("\n");
    const p2ManifestLines = p2ManifestSource.trim().split("\n");
    for (const [name, source, lines] of [
      ["P1", p1ManifestSource, p1ManifestLines],
      ["P2", p2ManifestSource, p2ManifestLines],
    ] as const) {
      expect(lines, name).toHaveLength(7);
      expect(
        lines.map((line) => line.slice(66)).sort(),
        name,
      ).toEqual([...expectedPaths].sort());
      expect(source, name).not.toContain("input-freeze");
      expect(source, name).not.toContain(
        "architecture-multitenant-saas-pour-dirigeant-p1.sha256",
      );
      expect(source, name).not.toContain(
        "architecture-multitenant-saas-pour-dirigeant-p2.sha256",
      );
      for (const line of lines) {
        expect(line, name).toMatch(/^[a-f0-9]{64}  [^\s]+$/);
      }
    }
    for (const line of p2ManifestLines) {
      const expectedHash = line.slice(0, 64);
      const relativePath = line.slice(66);
      expect(
        sha256(readFileSync(resolve(repositoryRoot, relativePath))),
        relativePath,
      ).toBe(expectedHash);
    }
  });

  it("avoids unsupported publication, customer and security claims", () => {
    expect(publicCopy).not.toMatch(
      /(?:déjà publié|en production|nos clients|chez nos clients|audit réussi|certifié|100\s?% sécurisé|zéro fuite|garantit la conformité)/i,
    );
    expect(pageCompact).toContain(
      "Aucun modèle d’isolation, outil, fournisseur, base dédiée ou politique RLS ne garantit à lui seul",
    );
    expect(pageCompact).toContain(
      "Rouvrez les sources et testez le produit réel avant toute décision",
    );
    expect(researchCompact).toContain(
      "Les sources doivent être rouvertes avant publication réelle",
    );
  });
});
