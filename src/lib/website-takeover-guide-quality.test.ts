import { readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { getGuide, guideRobots } from "./guides";

const routeSource = readFileSync(
  join(
    process.cwd(),
    "src/app/guides/audit-technique-avant-reprendre-site/page.tsx",
  ),
  "utf8",
);
const componentSource = readFileSync(
  join(process.cwd(), "src/components/guides/WebsiteTakeoverAuditDossier.tsx"),
  "utf8",
);
const engineSource = readFileSync(
  join(process.cwd(), "src/lib/website-takeover-audit.ts"),
  "utf8",
);
const nextConfigSource = readFileSync(
  join(process.cwd(), "next.config.ts"),
  "utf8",
);
const researchSource = readFileSync(
  join(
    process.cwd(),
    "docs/research/audit-technique-avant-reprendre-site-r1-2026-07-27.md",
  ),
  "utf8",
);
const resourcePath = join(
  process.cwd(),
  "public/ressources/dossier-audit-reprise-site.txt",
);
const resourceSource = readFileSync(resourcePath, "utf8");

function visibleText(source: string): string {
  return source
    .replace(/<[^>]+>/g, " ")
    .replace(/\{[^}]*\}/g, " ")
    .replace(/&[a-z]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

describe("audit technique avant reprise premium guide contract", () => {
  it("answers the real decision in a compact lead without a universal GO", () => {
    const lead = routeSource.match(/<p className="lead">([\s\S]*?)<\/p>/)?.[1];
    const text = visibleText(lead ?? "");

    expect(lead).toBeDefined();
    expect(text.split(/\s+/).length).toBeLessThanOrEqual(190);
    for (const expected of [
      "qu’est-ce qui a réellement été vérifié",
      "cinq situations de STOP",
      "audit proportionné",
      "mise sous contrôle",
      "stabilisation",
      "migration progressive",
      "reconstruction",
      "limité aux éléments",
    ]) {
      expect(text).toContain(expected);
    }
    expect(text).not.toMatch(/site est sûr|garanti sans risque|certifie/i);
  });

  it("puts the five STOP conditions before ordinary audit work", () => {
    const stopIndex = routeSource.indexOf('<h2 id="stop-60-secondes">');
    const levelIndex = routeSource.indexOf('<h2 id="niveau">');
    const stopSection = visibleText(routeSource.slice(stopIndex, levelIndex));

    expect(stopIndex).toBeGreaterThan(-1);
    expect(stopIndex).toBeLessThan(levelIndex);
    for (const expected of [
      "autorité",
      "compromission",
      "opération destructive",
      "vrais paiements",
      "litige bloquant",
      "préservez les journaux",
      "Ne contournez pas un compte",
    ]) {
      expect(stopSection).toContain(expected);
    }
  });

  it("defines public, light, full and STOP routes without light-audit loopholes", () => {
    const normalized = routeSource.replace(/\s+/g, " ");

    for (const expected of [
      "Niveau 1 · Pré-vérification publique",
      "Niveau 2 · Audit léger de reprise",
      "Niveau 3 · Audit complet de reprise",
      "sans paiement, authentification",
      "données métier mutables",
      "multi- environnement",
      "intégration critique",
      "fort enjeu SEO",
      "RPO/RTO",
      "architecture inconnue",
      "Un audit léger devient complet",
    ]) {
      expect(normalized).toContain(expected);
    }
  });

  it("publishes all eighteen domains and their false-green boundaries", () => {
    const domainTitles = [
      "Autorisation, propriété et contrôle",
      "Domaine, DNS, TLS, CDN et WAF",
      "Infrastructure, IaC et environnements",
      "Code, historique et build",
      "CI/CD, artefact, migrations et rollback",
      "Dépendances, SBOM, licences et fin de support",
      "Identités, secrets et comptes de service",
      "Données, flux et migrations",
      "Sauvegardes, restauration, RPO et RTO",
      "Intégrations et parcours critiques",
      "Journaux, métriques et alertes",
      "Sécurité, authentification et incident",
      "Performance et capacité",
      "SEO et analytics",
      "Accessibilité",
      "RGPD, sous-traitants, transferts et rétention",
      "Documentation, support et responsabilité",
      "Réversibilité et paquet de sortie",
    ];

    expect(new Set(domainTitles).size).toBe(18);
    for (const domain of domainTitles) {
      expect(routeSource).toContain(domain);
    }
    expect(routeSource.match(/Faux vert à éviter/g)).toHaveLength(1);

    const offlineZones = resourceSource.match(/^ZONE \d{2} - /gm) ?? [];
    expect(offlineZones).toHaveLength(18);
    for (const expected of [
      "AUTORITÉ, CONTRATS ET CONTRÔLE DES ACTIFS",
      "DOMAINE, DNS, TLS ET CERTIFICATS",
      "CHAÎNE LOGICIELLE, SBOM, PROVENANCE ET LICENCES",
      "SAUVEGARDES, RESTAURATION, RTO ET RPO",
      "RELEASE, DÉPLOIEMENT, ROLLBACK, FIX-FORWARD ET RÉCONCILIATION",
      "RGPD, DONNÉES PERSONNELLES ET DONNÉES DE TEST",
      "ACCESSIBILITÉ ET USAGES ASSISTÉS",
      "SEO, ANALYTICS, BALISES ET CONTINUITÉ D'ACQUISITION",
      "DOCUMENTATION, SUPPORT, TRANSFERT ET RÉVERSIBILITÉ",
    ]) {
      expect(resourceSource).toContain(expected);
    }
  });

  it("requires structured evidence and never lets declarations close a gate", () => {
    const normalized = routeSource.replace(/\s+/g, " ");

    for (const expected of [
      "inconnu, déclaré, vérifié, en échec ou non applicable",
      "type de preuve",
      "environnement",
      "date",
      "propriétaire",
      "référence d’artefact",
      "résultat",
      "limite",
      "action interdite",
      "Une mention « non applicable » exige les mêmes éléments de traçabilité",
      "Une porte applicable inconnue empêche le GO",
      "Aucun GO de reprise avant levée",
    ]) {
      expect(normalized).toContain(expected);
    }
    for (const insufficient of [
      "un build réussi",
      "une sauvegarde présente",
      "une page d’accueil verte",
      "Un SBOM est un inventaire, pas un feu vert",
      "Un scan automatisé seul",
      "Un score Lighthouse isolé",
      "Search Console ne prouve pas",
    ]) {
      expect(normalized).toContain(insufficient);
    }
  });

  it("handles restoration, personal data and irreversible release effects safely", () => {
    const normalized = routeSource.replace(/\s+/g, " ");

    for (const expected of [
      "données fictives ou anonymisées par défaut",
      "Une copie réduite n’est pas forcément anonyme",
      "files d’attente",
      "RPO",
      "RTO",
      "vérifier qu’elle est suffisamment saine",
      "neutraliser paiements",
      "réconcilier commande",
      "fix-forward",
      "migrations et écritures persistent",
      "rotation et révocation",
    ]) {
      expect(normalized).toContain(expected);
    }
    expect(normalized).not.toContain("données fictives ou réduites");
  });

  it("separates audit, pentest, accessibility, performance and SEO conclusions", () => {
    const normalized = routeSource.replace(/\s+/g, " ");

    for (const expected of [
      "Un audit de reprise n’est ni un pentest exhaustif",
      "Un score Lighthouse isolé",
      "Un scan automatisé seul",
      "conclusion de conformité porte sur des pages complètes",
      "Search Console et analytics sont des sources",
      "Ces axes se complètent mais ne se remplacent pas",
    ]) {
      expect(normalized).toContain(expected);
    }
  });

  it("states the Article 28 chain without treating every maintainer as a processor", () => {
    const normalized = routeSource.replace(/\s+/g, " ");

    for (const expected of [
      "Lorsque la nouvelle équipe traite des données personnelles",
      "objet, durée, nature, finalité",
      "catégories de données et de personnes",
      "instructions documentées",
      "sous-traitants ultérieurs",
      "transferts",
      "restitution ou suppression",
      "Le rôle dépend des traitements et des accès réels",
    ]) {
      expect(normalized).toContain(expected);
    }
  });

  it("compares four trajectories at equal scope and keeps unknown TCO inputs as ND", () => {
    const normalized = routeSource.replace(/\s+/g, " ");

    for (const path of [
      "Mise sous contrôle",
      "Stabilisation ciblée",
      "Migration progressive",
      "Reconstruction ou remplacement",
    ]) {
      expect(normalized).toContain(path);
    }
    for (const expected of [
      "mêmes fonctions, volumes",
      "12, 36 et 60 mois",
      "HT/TTC",
      "une inconnue reste",
      "jamais ramenée à zéro",
      "Évitez les doubles comptes",
      "Les scénarios sont comparés en centimes",
    ]) {
      expect(normalized).toContain(expected);
    }
  });

  it("uses four explicitly fictitious examples covering GO, P2, a blocked takeover and STOP", () => {
    const normalized = routeSource.replace(/\s+/g, " ");
    for (const expected of [
      "Cas A · GO borné",
      "Cas B · GO sous réserves P2",
      "Cas C · reprise bloquée, préparation autorisée",
      "Cas D · STOP",
      "Comparaison fictive de quatre verdicts",
      "ne décrit ni un client ni une mission réelle",
      "ni des tarifs",
      "ni des moyennes de marché",
    ]) {
      expect(normalized).toContain(expected);
    }
  });

  it("ships a real local dossier and a substantial standalone offline pack", () => {
    expect(
      routeSource.match(/<WebsiteTakeoverAuditDossier\s*\/>/g),
    ).toHaveLength(1);
    expect(routeSource).toContain("/ressources/dossier-audit-reprise-site.txt");
    expect(statSync(resourcePath).size).toBeGreaterThan(25_000);
    for (const expected of [
      "STOP",
      "AUDIT LÉGER",
      "AUDIT COMPLET",
      "SYNTHÈSE DIRIGEANT",
      "RACI",
      "RPO",
      "RTO",
      "SBOM",
      "TCO 12",
      "TCO 36",
      "TCO 60",
      "PAQUET DE SORTIE",
      "QUESTIONNAIRE À ENVOYER AU PRESTATAIRE",
    ]) {
      expect(resourceSource.toLocaleUpperCase("fr-FR")).toContain(expected);
    }
    expect(nextConfigSource).toContain(
      'source: "/ressources/dossier-audit-reprise-site.txt"',
    );
    expect(nextConfigSource).toContain(
      '{ key: "X-Robots-Tag", value: "noindex, nofollow" }',
    );
  });

  it("keeps the interactive dossier local, review-gated and A4 printable", () => {
    const normalizedComponent = componentSource.replace(/\s+/g, " ");
    for (const expected of [
      "aucune donnée envoyée",
      "aucune sauvegarde automatique",
      "relire",
      "Télécharger",
      "JSON",
      "CSV",
      "Imprimer",
      "best-effort",
      "@page { size: A4",
      "website-takeover-print-report",
      "data-read-time-exclude",
    ]) {
      expect(normalizedComponent).toContain(expected);
    }
    expect(componentSource).not.toMatch(
      /\b(?:fetch|XMLHttpRequest|localStorage|sessionStorage)\b/,
    );
    expect(engineSource).toMatch(/mask|redact|masqu/i);
  });

  it("uses current primary sources across France, EU, UK, US, AU and Germany", () => {
    const pageSources = [
      "https://messervices.cyber.gouv.fr/documents-guides/anssi_fondamentaux_sauvegarde_systemes_dinformation_v1.1.pdf",
      "https://cert.ssi.gouv.fr/les-bons-reflexes-en-cas-dintrusion-sur-un-systeme-dinformation/",
      "https://www.cnil.fr/fr/tester-vos-applications",
      "https://www.cnil.fr/fr/securite-gerer-la-sous-traitance",
      "https://www.afnic.fr/noms-de-domaine/tout-savoir/gerer-son-nom-de-domaine/",
      "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958",
      "https://www.enisa.europa.eu/publications/enisa-technical-advisory-for-secure-use-of-package-managers",
      "https://www.bsi.bund.de/dok/10990836",
      "https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Grundschutz/BSI_Standards/standard_200_4.pdf?__blob=publicationFile&v=8",
      "https://www.incibe.es/sites/default/files/contenidos/dosieres/metad_contratacion_de_servicios.pdf",
      "https://www.ncsc.gov.uk/collection/developers-collection/principles/secure-the-build-and-deployment-pipeline",
      "https://www.cisa.gov/sites/default/files/2025-08/2025_CISA_SBOM_Minimum_Elements.pdf",
      "https://csrc.nist.gov/pubs/sp/800/218/final",
      "https://www.cyber.gov.au/business-government/protecting-devices-systems/cloud-computing/cloud-shared-responsibility-model-guidance-for-individuals-and-small-and-medium-businesses",
      "https://owasp.org/www-community/Component_Analysis",
      "https://www.w3.org/TR/WCAG22/",
      "https://www.rfc-editor.org/rfc/rfc4035",
      "https://www.rfc-editor.org/rfc/rfc7344",
      "https://www.rfc-editor.org/rfc/rfc9364",
      "https://www.rfc-editor.org/rfc/rfc9615",
      "https://web.dev/articles/vitals?hl=fr",
      "https://developers.google.com/search/docs/crawling-indexing/site-move-no-url-changes?hl=fr",
      "https://docs.github.com/en/repositories/creating-and-managing-repositories/transferring-a-repository",
    ];
    for (const source of pageSources) {
      expect(routeSource).toContain(source);
    }

    const researchSources = [
      "https://messervices.cyber.gouv.fr/documents-guides/anssi_fondamentaux_sauvegarde_systemes_dinformation_v1.1.pdf",
      "https://cert.ssi.gouv.fr/les-bons-reflexes-en-cas-dintrusion-sur-un-systeme-dinformation/",
      "https://www.cnil.fr/fr/tester-vos-applications",
      "https://www.cnil.fr/fr/securite-gerer-la-sous-traitance",
      "https://www.afnic.fr/noms-de-domaine/tout-savoir/gerer-son-nom-de-domaine/",
      "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958",
      "https://www.enisa.europa.eu/publications/enisa-technical-advisory-for-secure-use-of-package-managers",
      "https://www.bsi.bund.de/dok/10990836",
      "https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Grundschutz/BSI_Standards/standard_200_4.pdf?__blob=publicationFile&v=8",
      "https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Grundschutz/IT-GS-Kompendium/XML_Kompendium_2023.html",
      "https://www.incibe.es/sites/default/files/contenidos/dosieres/metad_contratacion_de_servicios.pdf",
      "https://www.ncsc.gov.uk/collection/developers-collection/principles/secure-the-build-and-deployment-pipeline",
      "https://www.cisa.gov/sites/default/files/2025-08/2025_CISA_SBOM_Minimum_Elements.pdf",
      "https://csrc.nist.gov/pubs/sp/800/218/final",
      "https://www.cyber.gov.au/business-government/asds-cyber-security-frameworks/ism/cyber-security-guidelines/guidelines-for-system-management",
      "https://owasp.org/www-project-web-security-testing-guide/stable/",
      "https://www.w3.org/TR/WCAG22/",
      "https://www.rfc-editor.org/rfc/rfc4035",
      "https://www.rfc-editor.org/rfc/rfc7344",
      "https://www.rfc-editor.org/rfc/rfc9364",
      "https://www.rfc-editor.org/rfc/rfc9615",
      "https://web.dev/articles/vitals",
      "https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes",
      "https://docs.github.com/en/repositories/creating-and-managing-repositories/transferring-a-repository",
    ];
    for (const source of researchSources) {
      expect(researchSource).toContain(source);
    }
    for (const currentSource of [
      "https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final",
      "https://slsa.dev/spec/v1.2/",
    ]) {
      expect(resourceSource).toContain(currentSource);
    }
    expect(resourceSource).not.toContain(
      "https://csrc.nist.gov/pubs/sp/800/34/r1/final",
    );
    expect(resourceSource).not.toContain("https://slsa.dev/spec/v1.0/");
    expect(researchSource).toContain("Public Comment Draft, août 2025");
    expect(researchSource).toContain(
      "ne représente pas la position finale du gouvernement américain",
    );
    expect(routeSource).toContain(
      "Aucun n’est transposé comme obligation universelle",
    );
  });

  it("revokes the historical false green and records the three cold baselines", () => {
    for (const expected of [
      "44/100",
      "72/100",
      "ancien",
      "19/20",
      "invalid",
      "faux GO",
      "P0",
      "P1",
      "P2",
    ]) {
      expect(researchSource).toMatch(new RegExp(expected, "i"));
    }
  });

  it("dates and describes the refreshed guide without fabricated schema", () => {
    const entry = getGuide("audit-technique-avant-reprendre-site");

    expect(entry.dateModified).toBe("2026-07-27");
    expect(entry.readTimeMin).toBeGreaterThanOrEqual(25);
    expect(entry.metaDescription.length).toBeLessThanOrEqual(160);
    expect(entry.title).toContain("méthode complète");
    expect(entry.editorialStatus).toBeUndefined();
    expect(guideRobots(entry)).toBeDefined();
    expect(routeSource.match(/type="application\/ld\+json"/g)).toHaveLength(2);
    expect(routeSource).not.toMatch(/FAQPage|HowTo|Offer|AggregateRating/);
  });

  it("qualifies the CTA without inviting secrets or promising emergency support", () => {
    const normalized = routeSource.replace(/\s+/g, " ");

    for (const expected of [
      "Qualifier une reprise sans transmettre de secret",
      "type de site",
      "fonctions importantes",
      "données traitées",
      "comptes contrôlés",
      "dernière restauration prouvée",
      "N’envoyez aucun mot de passe",
      "clé",
      "jeton",
      "cookie",
      "donnée client",
      "journal brut",
    ]) {
      expect(normalized).toContain(expected);
    }
    expect(routeSource).toContain('ctaService="audit"');
    expect(routeSource).toContain(
      'ctaSource="guide-audit-reprise-site"',
    );
    expect(normalized).not.toMatch(/urgence 24\/7|prise en charge immédiate/i);
  });
});
