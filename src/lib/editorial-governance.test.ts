import { createHash } from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { GUIDES, PUBLISHED_GUIDES } from "./guides";

const researchRoot = path.join(process.cwd(), "docs/research");

const frozenFourPassLot = [
  "prioriser-fonctionnalites-mvp-saas",
  "back-office-sur-mesure-pme",
  "digitaliser-bons-intervention",
  "portail-client-b2b-sur-mesure",
  "application-suivi-production-pme",
  "faire-evoluer-saas-apres-mvp",
  "google-search-ads-ou-performance-max",
  "seo-local-pme",
  "tma-ou-regie",
  "cahier-des-charges-saas",
  "site-one-page-ou-multipage",
  "application-gestion-interventions-terrain",
  "agence-saas-ou-freelance",
  "reprendre-maintenance-site-autre-agence",
  "choisir-agence-google-ads",
  "choisir-agence-seo",
  "migrer-logiciel-metier-sans-interruption",
  "leads-google-ads-non-qualifies",
  "site-internet-en-panne-que-faire",
  "mvp-prototype-ou-poc",
  "automatiser-saisie-donnees-entreprise",
  "connecter-erp-crm-logiciel-metier",
  "combien-de-temps-developper-saas",
  "positions-google-baissent",
  "combien-de-temps-resultats-seo",
  "landing-page-ou-site-vitrine",
  "power-apps-ou-application-sur-mesure",
  "logiciel-gestion-stock-sur-mesure",
  "facturation-abonnements-saas",
  "seo-saas-b2b",
  "calculer-cout-par-lead-google-ads",
  "google-ads-ou-meta-ads",
  "sla-maintenance-applicative",
  "dette-technique-cout-entreprise",
  "prise-rendez-vous-en-ligne-site-vitrine",
  "crm-sur-mesure-ou-hubspot",
  "lovable-bolt-v0-ou-agence-saas",
  "rgpd-saas-b2b",
  "zapier-make-ou-developpement-sur-mesure",
  "logiciel-planning-sur-mesure",
  "google-ads-saas-b2b",
  "google-ads-commerce-local",
  "contrat-seo-duree-engagement",
  "site-indexe-sans-trafic",
  "audit-technique-avant-reprendre-site",
] as const;

const delegatedPublicationGuides = [
  "prioriser-fonctionnalites-mvp-saas",
  "back-office-sur-mesure-pme",
  "digitaliser-bons-intervention",
  "portail-client-b2b-sur-mesure",
  "application-suivi-production-pme",
  "faire-evoluer-saas-apres-mvp",
  "google-search-ads-ou-performance-max",
  "seo-local-pme",
  "tma-ou-regie",
  "site-one-page-ou-multipage",
  "agence-saas-ou-freelance",
  "application-gestion-interventions-terrain",
  "audit-google-ads-que-verifier",
  "audit-seo-que-contient-il",
  "automatiser-processus-metier",
  "automatiser-saisie-donnees-entreprise",
  "choisir-agence-google-ads",
  "choisir-agence-seo",
  "combien-de-temps-developper-saas",
  "combien-de-temps-resultats-seo",
  "connecter-erp-crm-logiciel-metier",
  "contrat-tma-application",
  "landing-page-ou-site-vitrine",
  "leads-google-ads-non-qualifies",
  "migrer-logiciel-metier-sans-interruption",
  "mvp-prototype-ou-poc",
  "mvp-saas-quoi-inclure",
  "positions-google-baissent",
  "pourquoi-google-ads-ne-convertit-pas",
  "prix-gestion-google-ads",
  "reprendre-maintenance-site-autre-agence",
  "reprendre-logiciel-metier-existant",
  "reprendre-mvp-vibe-code",
  "seo-ou-google-ads",
  "signes-besoin-logiciel-metier",
  "site-internet-en-panne-que-faire",
  "template-ou-site-sur-mesure",
  "valider-idee-saas-avant-developper",
  "power-apps-ou-application-sur-mesure",
  "logiciel-gestion-stock-sur-mesure",
  "facturation-abonnements-saas",
  "seo-saas-b2b",
  "calculer-cout-par-lead-google-ads",
  "google-ads-ou-meta-ads",
  "sla-maintenance-applicative",
  "dette-technique-cout-entreprise",
  "prise-rendez-vous-en-ligne-site-vitrine",
  "crm-sur-mesure-ou-hubspot",
  "lovable-bolt-v0-ou-agence-saas",
  "rgpd-saas-b2b",
  "zapier-make-ou-developpement-sur-mesure",
  "logiciel-planning-sur-mesure",
  "google-ads-saas-b2b",
  "google-ads-commerce-local",
  "contrat-seo-duree-engagement",
  "site-indexe-sans-trafic",
  "audit-technique-avant-reprendre-site",
] as const;

function parseManifest(manifestPath: string) {
  return fs
    .readFileSync(manifestPath, "utf8")
    .trim()
    .split("\n")
    .map((line) => {
      const match = line.match(/^([a-f0-9]{64}) {2}(.+)$/);
      expect(match, `${manifestPath}: ${line}`).not.toBeNull();
      return { expectedHash: match![1], relativePath: match![2] };
    });
}

function fileHash(filePath: string) {
  return createHash("sha256").update(fs.readFileSync(filePath)).digest("hex");
}

describe("editorial governance evidence", () => {
  it("keeps the four passes and the final common snapshot demonstrable", () => {
    for (const slug of frozenFourPassLot) {
      for (const pass of [1, 2, 3, 4]) {
        const manifestPath = path.join(
          researchRoot,
          "manifests",
          `${slug}-p${pass}.sha256`,
        );
        expect(fs.existsSync(manifestPath), `${slug}: P${pass}`).toBe(true);

        const entries = parseManifest(manifestPath);
        expect(entries.length, `${slug}: P${pass}`).toBeGreaterThan(0);

        for (const entry of entries) {
          const targetPath = path.join(process.cwd(), entry.relativePath);
          expect(
            fs.existsSync(targetPath),
            `${slug}: P${pass}: ${entry.relativePath}`,
          ).toBe(true);

          if (pass === 4) {
            expect(
              fileHash(targetPath),
              `${slug}: P4: ${entry.relativePath}`,
            ).toBe(entry.expectedHash);
          }
        }
      }
    }
  });

  it("publishes the delegated corpus only with documented independent counter-audits", () => {
    for (const slug of delegatedPublicationGuides) {
      const guide = GUIDES.find((entry) => entry.slug === slug);
      expect(guide, slug).toBeDefined();
      expect(guide?.editorialStatus, slug).toBeUndefined();
      expect(PUBLISHED_GUIDES, slug).toContain(guide);

      const researchPath = path.join(researchRoot, `${slug}.md`);
      expect(fs.existsSync(researchPath), slug).toBe(true);

      const source = fs.readFileSync(researchPath, "utf8");
      const normalized = source.replace(/\s+/g, " ");

      expect(normalized, slug).toContain(
        "publiable — validation éditoriale déléguée",
      );
      expect(normalized, slug).toContain(
        "Décision de publication : autorisée explicitement par le commanditaire",
      );
      expect(normalized, slug).toMatch(/\b(?:19|20)\/20\b/);
      expect(normalized, slug).toMatch(
        /Test (?:réel|réalisé par une personne réelle)\s*:\s*non/i,
      );
      expect(normalized, slug).not.toMatch(
        /test(?:é|ée)? par (?:un |une )?lecteur humain réel[^.]{0,80}(?:oui|réalisé)/i,
      );
    }
  });
});
