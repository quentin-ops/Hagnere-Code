import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { getGuide, guideRobots } from "./guides";
import {
  SAAS_PROOF_GATES,
  SAAS_SCOPE_ITEMS,
  SAAS_TCO_FIELDS,
  SAAS_TCO_HORIZONS,
} from "./saas-build-path-decision";

const routeSource = readFileSync(
  join(
    process.cwd(),
    "src/app/guides/lovable-bolt-v0-ou-agence-saas/page.tsx",
  ),
  "utf8",
);
const componentSource = readFileSync(
  join(
    process.cwd(),
    "src/components/guides/SaasBuildPathDecisionDossier.tsx",
  ),
  "utf8",
);
const engineSource = readFileSync(
  join(process.cwd(), "src/lib/saas-build-path-decision.ts"),
  "utf8",
);

function visibleText(source: string): string {
  return source
    .replace(/<[^>]+>/g, " ")
    .replace(/\{[^}]*\}/g, " ")
    .replace(/&[a-z]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

describe("lovable-bolt-v0 premium guide contract", () => {
  it("answers the decision in the lead without promising a universal winner", () => {
    const lead = routeSource.match(/<p className="lead">([\s\S]*?)<\/p>/)?.[1];
    const text = visibleText(lead || "");

    expect(lead).toBeDefined();
    expect(text.split(/\s+/).length).toBeLessThanOrEqual(180);
    expect(text).toMatch(/données fictives/i);
    expect(text).toMatch(/revue professionnelle/i);
    expect(text).toMatch(/ne construisez pas/i);
    expect(text).toMatch(/moins sur le « meilleur outil »/i);
  });

  it("publishes conditional verdicts for six materially different profiles", () => {
    for (const expected of [
      "Besoin encore hypothétique",
      "Fondateur non technique",
      "Profil technique",
      "Équipe déjà organisée autour de Next.js",
      "Pilote B2B",
      "Produit payé, sensible ou essentiel",
    ]) {
      expect(routeSource).toContain(expected);
    }
    for (const path of [
      "Lovable",
      "Bolt",
      "v0",
      "Équipe responsable nommée",
      "Aucun développement",
    ]) {
      expect(routeSource).toContain(path);
    }
    expect(routeSource).toContain("Le biais de ce guide");
  });

  it("dates current platform facts and exposes official contradictions", () => {
    const normalized = routeSource.replace(/\s+/g, " ");

    expect(normalized).toContain("27 juillet 2026");
    expect(normalized).toContain("TanStack Start");
    expect(normalized).toContain("13 mai 2026");
    expect(normalized).toContain("anciens projets React/Vite");
    expect(normalized).toContain(
      "retour à une version du projet ne restaure ni la base Bolt ni Supabase",
    );
    expect(normalized).toContain(
      "le dépôt GitHub devient la source de vérité du code",
    );
    expect(normalized).toContain(
      "conditions StackBlitz consultées le 27 juillet 2026",
    );
    expect(normalized).toContain("10 janvier 2024");
    expect(normalized).toContain("faites confirmer par écrit");
    expect(routeSource).not.toContain("v0.dev/");
  });

  it("uses current primary product sources and a secure-development reference", () => {
    for (const source of [
      "https://docs.lovable.dev/introduction/faq",
      "https://docs.lovable.dev/tips-tricks/deployment-hosting-ownership",
      "https://docs.lovable.dev/features/security",
      "https://support.bolt.new/building/using-bolt/projects-files",
      "https://support.bolt.new/building/using-bolt/rollback-backup",
      "https://support.bolt.new/account-and-subscription/corporate-commercial",
      "https://stackblitz.com/terms-of-service",
      "https://v0.app/docs/full-stack-apps",
      "https://v0.app/docs/github",
      "https://v0.app/docs/projects",
      "https://vercel.com/legal/ai-product-terms",
      "https://csrc.nist.gov/pubs/sp/800/218/final",
    ]) {
      expect(routeSource).toContain(source);
    }
    expect(routeSource).toContain("27 août 2026");
  });

  it("provides a reproducible brief without pretending it was executed", () => {
    const normalized = routeSource.replace(/\s+/g, " ");

    for (const expected of [
      "Alba et Noro",
      "trois rôles",
      "Douze accès autorisés et interdits",
      "Export du schéma, des lignes et des fichiers",
      "au moins trois essais par outil",
      "même temps total",
      "seconde personne",
      "publiez « non testé »",
    ]) {
      expect(normalized).toContain(expected);
    }
    expect(normalized).toContain(
      "Hagnéré Code n’a pas exécuté ici trois constructions répétées",
    );
    expect(normalized).toContain(
      "Hagnéré Code n’a pas construit ici le même produit trois fois",
    );
    expect(normalized).not.toMatch(
      /(?:Lovable|Bolt|v0)\s+(?:gagne|est le vainqueur)/i,
    );
  });

  it("covers production, agency responsibility, privacy and complete exit", () => {
    const normalized = routeSource.replace(/\s+/g, " ");

    for (const expected of [
      "migrations",
      "RPO et un RTO observés",
      "webhook rejoué",
      "Performance et accessibilité",
      "Incident et support",
      "Discovery produit",
      "DPA",
      "sous-traitants",
      "réinitialisation des identités",
      "frontend",
      "backend",
      "fonctions",
      "domaine",
    ]) {
      expect(normalized).toContain(expected);
    }
  });

  it("shows dated entry prices but never confuses them with complete cost", () => {
    const normalized = routeSource.replace(/\s+/g, " ");

    expect(normalized).toContain("Pro à 25 $/mois");
    expect(normalized).toContain("Teams à 30 $/membre/mois");
    expect(normalized).toContain("Team à 30 $/utilisateur/mois");
    expect(normalized).toContain("Business à 100 $/utilisateur/mois");
    expect(normalized).toContain("dollars, hors conversion, taxes");
    expect(normalized).toContain("coût économique estimé");
    expect(normalized).toContain("pas un total « HT » homogène");
  });

  it("contains reproducible fictitious TCO arithmetic over three horizons", () => {
    const normalized = routeSource.replace(/\s+/g, " ");

    for (const expected of [
      "15 000 €",
      "28 350 €",
      "14 760 €",
      "19 320 €",
      "33 360 €",
      "52 170 €",
      "62 880 €",
      "90 810 €",
      "92 400 €",
      "129 450 €",
    ]) {
      expect(normalized).toContain(expected);
    }
    expect(normalized).toContain("montants arbitraires et remplaçables");
    expect(normalized).toContain("ne permettent volontairement pas de conclure");
  });

  it("ships one real local dossier with strict ND and evidence gates", () => {
    expect(
      routeSource.match(/<SaasBuildPathDecisionDossier\s*\/>/g),
    ).toHaveLength(1);
    expect(SAAS_SCOPE_ITEMS).toHaveLength(14);
    expect(SAAS_PROOF_GATES).toHaveLength(12);
    expect(SAAS_TCO_FIELDS).toHaveLength(11);
    expect(SAAS_TCO_HORIZONS).toEqual([12, 36, 60]);
    expect(engineSource).toContain("périmètre ou preuves non qualifiés");
    expect(engineSource).toContain("date de décision non future");
    expect(engineSource).toContain("test daté dans le futur");
    expect(engineSource).toContain("Hypothèses brutes du coût économique");
    expect(engineSource).toContain("Preuve commerciale");
    expect(engineSource).toContain("Livrable sans référence exploitable");
    expect(engineSource).toContain("owner.trim()");
    expect(engineSource).toContain("independentReviewer.trim()");
    expect(componentSource).toContain("aucune donnée envoyée");
    expect(componentSource).toContain("Copier le dossier");
    expect(componentSource).toContain("Exporter en JSON");
    expect(componentSource).toContain("Importer un JSON");
    expect(componentSource).toContain("Imprimer le dossier");
    expect(componentSource).toContain("Oui, effacer");
    expect(componentSource).not.toContain("window.confirm");
    expect(componentSource).toContain('data-read-time-exclude="true"');
  });

  it("uses three disclosed fictitious cases and keeps four outcomes open", () => {
    for (const expected of [
      "Camille",
      "Mehdi",
      "Sofia",
      "Cas pédagogiques, pas références clients",
      "Prototypez seul",
      "Ajoutez une revue",
      "Faites accompagner la construction",
      "Ne construisez pas encore",
    ]) {
      expect(routeSource).toContain(expected);
    }
    expect(routeSource.match(/<GuideInlineCTA\b/g)).toHaveLength(1);
  });

  it("keeps six useful FAQs and faithful structured data", () => {
    const faq = routeSource.match(
      /const faqItems:[\s\S]*?=\s*\[([\s\S]*?)\n\];/,
    )?.[1];

    expect(faq?.match(/\bquestion:\s*["']/g)).toHaveLength(6);
    expect(routeSource.match(/type="application\/ld\+json"/g)).toHaveLength(2);
    expect(routeSource).not.toMatch(/FAQPage|HowTo|Offer|AggregateRating/);
  });

  it("dates the refreshed registry entry without changing its publication state", () => {
    const guide = getGuide("lovable-bolt-v0-ou-agence-saas");

    expect(guide.dateModified).toBe("2026-07-27");
    expect(guide.readTimeMin).toBe(28);
    expect(guide.editorialStatus).toBeUndefined();
    expect(guideRobots(guide)).toBeDefined();
  });
});
