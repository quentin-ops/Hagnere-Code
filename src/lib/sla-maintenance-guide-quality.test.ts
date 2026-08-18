import { existsSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import proofs from "./sla-maintenance-required-proofs.json";
import sources from "./sla-maintenance-workbook-sources.json";
import {
  SLA_REQUIRED_PROOFS,
  createFictitiousSlaDecisionDossier,
  evaluateDecisionGate,
} from "./sla-maintenance-decision";
import { getGuide } from "./guides";

const root = process.cwd();
const routePath = join(
  root,
  "src/app/guides/sla-maintenance-applicative/page.tsx",
);
const routeSource = readFileSync(routePath, "utf8");
const componentSource = readFileSync(
  join(
    root,
    "src/components/guides/SlaMaintenanceDecisionDossier.tsx",
  ),
  "utf8",
);
const engineSource = readFileSync(
  join(root, "src/lib/sla-maintenance-decision.ts"),
  "utf8",
);
const researchSource = readFileSync(
  join(root, "docs/research/sla-maintenance-applicative-r1-2026-07-28.md"),
  "utf8",
);
const ogSource = readFileSync(
  join(root, "src/app/guides/sla-maintenance-applicative/opengraph-image.tsx"),
  "utf8",
);
const workbookPath = join(
  root,
  "public/ressources/kit-sla-maintenance-applicative.xlsx",
);
const validationPath = join(
  root,
  "output/sla-maintenance-applicative/workbook/validation.json",
);
const normalized = routeSource.replace(/\s+/g, " ");
const guide = getGuide("sla-maintenance-applicative");

describe("guide premium SLA et maintenance applicative", () => {
  it("conserve le gabarit Patrimoine, le texte à gauche et un seul CTA", () => {
    expect(routeSource).toContain("<GuideLayout");
    expect(routeSource).toContain("showSidebarCta={false}");
    expect(routeSource).toContain("data-guide-chapter-gate");
    expect(routeSource).not.toContain("text-center");
    expect(componentSource).not.toContain("text-center");
    expect(routeSource.match(/<GuideInlineCTA\b/g)).toHaveLength(1);
    expect(routeSource).toContain("showPhone={false}");
    expect(routeSource).not.toMatch(/target="_blank"\s+target="_blank"/);
  });

  it("répond immédiatement et route les cinq erreurs critiques", () => {
    const lead = routeSource.match(
      /<p className="lead">([\s\S]*?)<\/p>/,
    )?.[1];
    expect(lead).toBeDefined();
    expect(lead).toContain("sept");
    expect(lead).toContain("preuves");
    for (const expected of [
      "confondre accusé de réception et rétablissement métier",
      "promettre 24/7",
      "écrire un RPO sans restauration",
      "remplacer un coût ou un risque inconnu par zéro",
      "crédit de service comme une indemnisation complète",
    ]) {
      expect(normalized).toContain(expected);
    }
  });

  it("publie quinze chapitres utiles, quatorze gates et dix FAQ", () => {
    for (const id of [
      "definition",
      "service-sli",
      "sept-horloges",
      "plage",
      "disponibilite",
      "severite",
      "rto-rpo",
      "cout-incident",
      "dependances",
      "correctifs-eol",
      "communication",
      "contrat",
      "comparer",
      "exercices",
      "sources",
    ]) {
      expect(routeSource).toContain(`id="${id}"`);
    }
    expect(componentSource).toContain('id="atelier-sla"');
    expect(routeSource.match(/<h2 id="/g)?.length).toBeGreaterThanOrEqual(15);
    expect(routeSource.match(/<ChapterGate\b/g)).toHaveLength(14);
    expect(routeSource.match(/question:/g)).toHaveLength(10);
    expect(routeSource.length).toBeGreaterThan(45_000);
  });

  it("traite les calculs, l’organisation, le contrat et les exercices", () => {
    for (const expected of [
      "43 min 12 s",
      "4 min 19 s environ",
      "sept horloges",
      "error budget",
      "soixante opérations",
      "quatre heures de travail",
      "1 764 €",
      "3 564 €",
      "3 364 €",
      "5,61 %",
      "astreinte humaine",
      "fournisseur d’identité",
      "fin de support",
      "post-mortem",
      "article 1103",
      "article 1217",
      "DORA",
    ]) {
      expect(normalized, expected).toContain(expected);
    }
    expect(routeSource).toContain("<FormulaBox>");
    expect(routeSource.match(/<GuideTable\b/g)?.length).toBeGreaterThanOrEqual(
      9,
    );
  });

  it("maintient quinze sources officielles, uniques et bornées", () => {
    expect(sources).toHaveLength(15);
    expect(new Set(sources.map((source) => source.id)).size).toBe(15);
    for (const source of sources) {
      expect(source.accessedOn).toBe("2026-07-28");
      expect(source.url).toMatch(/^https:\/\//);
      expect(source.title.length).toBeGreaterThan(15);
      expect(source.publisher.length).toBeGreaterThan(3);
      expect(source.scope.length).toBeGreaterThan(50);
      expect(source.limits.length).toBeGreaterThan(50);
    }
    for (const required of [
      "GOOGLE-SRE-SLO",
      "NIST-RTO",
      "NIST-RPO",
      "ANSSI-BACKUP-2025",
      "LEGIFRANCE-1103",
      "LEGIFRANCE-1217",
      "UK-SOFTWARE-CODE-2026",
      "NCSC-APC",
      "BSI-BACKUP",
      "DORA-ART11-12",
      "ISO-27031-2025",
      "ISO-20000-1",
      "ISO-22301",
      "ASD-ESSENTIAL-EIGHT",
    ]) {
      expect(sources.some((source) => source.id === required), required).toBe(
        true,
      );
    }
    expect(routeSource).toContain("sources.map((source)");
  });

  it("relie exactement huit preuves au registre sans source orpheline", () => {
    const sourceIds = new Set(sources.map((source) => source.id));
    expect(proofs).toHaveLength(8);
    expect(SLA_REQUIRED_PROOFS).toHaveLength(8);
    expect(proofs.map((proof) => proof.id)).toEqual([...SLA_REQUIRED_PROOFS]);
    for (const proof of proofs) {
      expect(proof.expected.length).toBeGreaterThan(100);
      expect(proof.acceptedEvidence.length).toBeGreaterThanOrEqual(3);
      for (const sourceId of proof.sourceIds) {
        expect(sourceIds.has(sourceId), sourceId).toBe(true);
      }
    }
    const referenced = new Set(proofs.flatMap((proof) => proof.sourceIds));
    expect([...sourceIds].filter((id) => !referenced.has(id))).toEqual([]);
  });

  it("conserve les limites internationales et juridiques explicites", () => {
    for (const expected of [
      "ne transforme jamais un référentiel étranger en obligation française",
      "volontaire et centré sur la sécurité",
      "ni du droit français",
      "entités financières",
      "ne fournissent aucun avis juridique",
      "aucune certification",
      "ni une recommandation de taux",
    ]) {
      expect(normalized).toContain(expected);
    }
    expect(researchSource).toContain("DORA");
    expect(researchSource).toMatch(/financi/);
    expect(researchSource).toContain("BSI");
    expect(researchSource).toContain("ISO 22301");
  });

  it("rend l’outil local, déterministe et fail-closed", () => {
    for (const expected of [
      "Outil local et déterministe",
      "aucun appel réseau",
      "EXEMPLE FICTIF",
      "Confirmer mes données réelles",
      "Télécharger le CSV de travail",
      "Copier la note de décision finale",
      "data-decision-stage",
      "La note finale reste verrouillée",
    ]) {
      expect(componentSource).toContain(expected);
    }
    expect(componentSource).not.toContain('type="password"');
    expect(componentSource).not.toContain("<textarea");
    expect(engineSource).toContain('state: "STOP"');
    expect(engineSource).toContain('state: "INCOMPLET"');
    expect(engineSource).toContain('state: "COMPARABLE"');
    expect(engineSource).toContain('state: "DECISION_HUMAINE"');
    expect(
      evaluateDecisionGate(createFictitiousSlaDecisionDossier()).state,
    ).toBe("INCOMPLET");
  });

  it("livre le classeur contrôlé et le garde bloqué sur l’exemple fictif", () => {
    expect(routeSource).toContain(
      "/ressources/kit-sla-maintenance-applicative.xlsx",
    );
    expect(existsSync(workbookPath)).toBe(true);
    expect(statSync(workbookPath).size).toBeGreaterThan(50_000);
    expect(existsSync(validationPath)).toBe(true);
    const validation = JSON.parse(readFileSync(validationPath, "utf8"));
    expect(validation.status).toBe("PASS_LOCAL");
    expect(validation.sheets).toHaveLength(17);
    expect(validation.sources).toBe(15);
    expect(validation.proofs).toBe(8);
    expect(validation.formulas).toBe(90);
    expect(validation.scenarios).toEqual(
      expect.objectContaining({
        mutations: 8,
        adversarial: 43,
        sabotage: 90,
        total: 141,
      }),
    );
    expect(validation.previews).toHaveLength(17);
    expect(validation.secretScan.candidates).toBe(0);
    expect(validation.formulaErrors).toEqual([]);
    expect(validation.finalGate).toContain("BLOQUE_EXEMPLE_FICTIF");
  });

  it("met à jour le catalogue et conserve une image OG dédiée", () => {
    expect(guide.dateModified).toBe("2026-07-28");
    expect(guide.readTimeMin).toBeGreaterThanOrEqual(30);
    expect(guide.metaDescription.length).toBeLessThanOrEqual(170);
    expect(guide.metaDescription).toContain("RTO");
    expect(guide.metaDescription).toContain("RPO");
    expect(ogSource).toContain("SLA POUR DIRIGEANTS");
    expect(ogSource).toContain("réponse rapide ne rétablit pas");
  });

  it("n’émet volontairement aucun FAQPage et aucune fausse preuve commerciale", () => {
    expect(routeSource).not.toContain('"@type": "FAQPage"');
    expect(routeSource).not.toContain("aggregateRating");
    expect(routeSource).not.toContain("reviewRating");
    expect(routeSource).not.toContain("client satisfait");
    expect(routeSource).not.toContain("meilleur SLA du marché");
  });
});
