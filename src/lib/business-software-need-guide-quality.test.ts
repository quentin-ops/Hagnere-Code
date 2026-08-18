import { createHash } from "node:crypto";
import { existsSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import proofs from "./business-software-need-proofs.json";
import sources from "./business-software-need-sources.json";
import {
  BUSINESS_SOFTWARE_PROOF_IDS,
  createFictitiousBusinessSoftwareNeedDossier,
  evaluateBusinessSoftwareNeed,
} from "./business-software-need-decision";
import { getGuide } from "./guides";

const root = process.cwd();
const routePath = join(
  root,
  "src/app/guides/signes-besoin-logiciel-metier/page.tsx",
);
const routeSource = readFileSync(routePath, "utf8");
const componentSource = readFileSync(
  join(root, "src/components/guides/BusinessSoftwareNeedDossier.tsx"),
  "utf8",
);
const engineSource = readFileSync(
  join(root, "src/lib/business-software-need-decision.ts"),
  "utf8",
);
const researchSource = readFileSync(
  join(root, "docs/research/signes-besoin-logiciel-metier-r1-2026-07-28.md"),
  "utf8",
);
const workbookPath = join(
  root,
  "public/ressources/kit-diagnostic-besoin-logiciel-metier.xlsx",
);
const validationPath = join(
  root,
  "output/signes-besoin-logiciel-metier/workbook/validation.json",
);
const normalized = routeSource.replace(/\s+/g, " ");
const guide = getGuide("signes-besoin-logiciel-metier");

describe("guide premium du besoin d’un logiciel métier", () => {
  it("conserve le gabarit Patrimoine, le texte à gauche et un CTA éditorial", () => {
    expect(routeSource).toContain("<GuideLayout");
    expect(routeSource).toContain("showSidebarCta={false}");
    expect(routeSource).toContain("showPhone={false}");
    expect(routeSource).not.toContain("text-center");
    expect(componentSource).not.toContain("text-center");
    expect(routeSource.match(/<GuideInlineCTA\b/g)).toHaveLength(1);
    expect(routeSource).toContain("data-guide-chapter-gate");
  });

  it("répond sans faux seuil et garde huit réponses non hiérarchiques", () => {
    const lead = routeSource.match(/<p className="lead">([\s\S]*?)<\/p>/)?.[1];
    expect(lead).toContain("Peut-être");
    for (const expected of [
      "Sécuriser maintenant",
      "Simplifier ou standardiser",
      "Corriger l’existant",
      "Automatiser",
      "Prototyper en low-code",
      "Acheter un logiciel",
      "Étudier le sur-mesure",
      "Observer encore",
      "Il n’existe pas de seuil magique",
      "pas que le sur-mesure est la bonne réponse",
    ]) {
      expect(normalized, expected).toContain(expected);
    }
  });

  it("publie seize chapitres, quatorze gates, dix FAQ et douze tableaux", () => {
    for (const id of [
      "probleme-solution",
      "securiser",
      "observer",
      "contournements",
      "vrai-probleme",
      "six-reponses",
      "trois-situations",
      "regles-donnees",
      "standard-erp-low-code",
      "sur-mesure",
      "tco",
      "pilote",
      "securite-accessibilite",
      "migration-sortie",
      "prochaine-decision",
      "sources",
    ]) {
      expect(routeSource).toContain(`id="${id}"`);
    }
    expect(componentSource).toContain('id="diagnostic-logiciel-metier"');
    expect(routeSource.match(/<ChapterGate\b/g)).toHaveLength(14);
    expect(routeSource.match(/question:/g)).toHaveLength(10);
    expect(routeSource.match(/<GuideTable\b/g)).toHaveLength(12);
    expect(routeSource.length).toBeGreaterThan(85_000);
  });

  it("couvre baseline, données, fit-gap, TCO, pilote, continuité et sortie", () => {
    for (const expected of [
      "période normale",
      "période de tension",
      "cas rare",
      "72 heures",
      "324 heures",
      "source de vérité",
      "reprise idempotente",
      "Fit-gap",
      "low-code",
      "9 640 €",
      "216 000 €",
      "30 jours après le pilote",
      "90 jours après le pilote",
      "RTO",
      "RPO",
      "lecteur d’écran",
      "double fonctionnement",
      "export réimporté",
    ]) {
      expect(normalized, expected).toContain(expected);
    }
  });

  it("maintient vingt-six sources internationales uniques et bornées", () => {
    expect(sources).toHaveLength(26);
    expect(new Set(sources.map((source) => source.id)).size).toBe(26);
    for (const source of sources) {
      expect(source.accessedOn).toBe("2026-07-28");
      expect(source.url).toMatch(/^https:\/\//);
      expect(source.scope.length).toBeGreaterThan(100);
      expect(source.limits.length).toBeGreaterThan(100);
    }
    for (const required of [
      "GOVUK-CHOOSE-TECH",
      "GOVUK-COTS",
      "OECD-SME-DIGITAL",
      "DTA-DIGITAL-STANDARD",
      "CANADA-DIGITAL-STANDARDS",
      "EC-SME-MATURITY",
      "EU-REUSE-BUY-BUILD",
      "DIGITALGOV-ACQUISITIONS",
      "NIST-CSF-2",
      "NIST-SP800-34",
      "CNIL-CONTINUITE",
      "FRANCENUM-ERP",
      "MICROSOFT-POWER-COE",
    ]) {
      expect(
        sources.some((source) => source.id === required),
        required,
      ).toBe(true);
    }
    expect(routeSource).toContain("sources.map((source)");
  });

  it("relie exactement huit preuves sans référence orpheline", () => {
    const sourceIds = new Set(sources.map((source) => source.id));
    expect(proofs).toHaveLength(8);
    expect(proofs.map((proof) => proof.id)).toEqual([
      ...BUSINESS_SOFTWARE_PROOF_IDS,
    ]);
    for (const proof of proofs) {
      expect(proof.expected.length).toBeGreaterThan(120);
      expect(proof.acceptedEvidence.length).toBeGreaterThanOrEqual(3);
      for (const sourceId of proof.sourceIds) {
        expect(sourceIds.has(sourceId), sourceId).toBe(true);
      }
    }
  });

  it("rend l’outil local, déterministe, accessible et fail-closed", () => {
    for (const expected of [
      "Outil local et déterministe",
      "aucun appel réseau",
      "EXEMPLE FICTIF",
      "Confirmer mes données réelles",
      "Télécharger le CSV de travail",
      "Importer un dossier JSON",
      "Ajouter une option",
      "deux à six options",
      "Copier la note finale",
      "aria-live",
      "JSON_IMPORT_MAX_BYTES",
      "focus-within:ring-2",
      "data-decision-stage",
      "La note finale reste verrouillée",
      "Pilote, suivis +30/+90 et expiration",
      "Date d’expiration de la décision",
    ]) {
      expect(componentSource).toContain(expected);
    }
    expect(componentSource).not.toContain('type="password"');
    expect(componentSource).not.toContain("<textarea");
    for (const expected of [
      '"SECURISER_D_ABORD"',
      '"INCOMPLET"',
      '"OBSERVER"',
      '"CORRIGER_STANDARDISER"',
      '"COMPARER_PILOTER"',
      '"DECISION_HUMAINE"',
    ]) {
      expect(engineSource).toContain(expected);
    }
    expect(engineSource).toContain("parseBusinessSoftwareNeedJson");
    const fictitious = evaluateBusinessSoftwareNeed(
      createFictitiousBusinessSoftwareNeedDossier(),
    );
    expect(fictitious.state).toBe("INCOMPLET");
    expect(fictitious.finalExportAllowed).toBe(false);
  });

  it("livre un classeur validé et bloqué sur l’exemple fictif", () => {
    expect(existsSync(workbookPath)).toBe(true);
    expect(statSync(workbookPath).size).toBeGreaterThan(40_000);
    const validation = JSON.parse(readFileSync(validationPath, "utf8"));
    const hash = createHash("sha256")
      .update(readFileSync(workbookPath))
      .digest("hex");
    expect(validation.status).toBe("PASS_LOCAL");
    expect(validation.sha256).toBe(hash);
    expect(validation.sources).toBe(26);
    expect(validation.proofs).toBe(8);
    expect(validation.formulas).toBe(97);
    expect(validation.scenarios).toMatchObject({
      mutations: 12,
      adversarial: 96,
      sabotage: 97,
      total: 205,
    });
    expect(validation.archive).toMatchObject({
      frozenSheets: 13,
      filteredSheets: 13,
      macros: 0,
      externalLinks: 0,
    });
    expect(validation.finalGate).toContain("BLOQUE_EXEMPLE_FICTIF");
  });

  it("documente les limites de portée et la frontière locale", () => {
    for (const expected of [
      "ne sont jamais présentés comme obligations françaises",
      "source éditeur",
      "sans seuil individuel",
      "business-software-need-r2-2026-07-28",
      "schemaVersion: 2",
      "aucune recalculation par Microsoft Excel réel",
      "ni commit, ni push, ni déploiement, ni publication, ni indexation",
    ]) {
      expect(researchSource).toContain(expected);
    }
    expect(guide.dateModified).toBe("2026-07-28");
    expect(guide.readTimeMin).toBe(45);
  });
});
