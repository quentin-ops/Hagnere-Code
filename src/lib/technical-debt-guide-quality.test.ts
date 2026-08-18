import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import {
  calculateTechnicalDebtDecision,
  TECHNICAL_DEBT_EXAMPLE_FRICTION,
  TECHNICAL_DEBT_EXAMPLE_OPTIONS,
  TECHNICAL_DEBT_OPTIONS,
} from "./technical-debt-decision";

const root = process.cwd();
const pagePath = path.join(
  root,
  "src/app/guides/dette-technique-cout-entreprise/page.tsx",
);
const page = fs.readFileSync(pagePath, "utf8");
const normalizedPage = page.replace(/\s+/g, " ");
const resourceDirectory = path.join(
  root,
  "public/ressources/dossier-decision-dette-technique",
);
const resources = [
  "mode-emploi.md",
  "registre-evenements.csv",
  "exemple-atelier-nova.csv",
  "comparatif-options.csv",
  "decision-record.md",
];

function formatInteger(value: number) {
  return new Intl.NumberFormat("fr-FR", {
    maximumFractionDigits: 0,
  })
    .format(value)
    .replace(/\s/g, " ");
}

describe("guide dette technique — garde-fous de décision", () => {
  it("publishes five equal-scope options in one consistent order", () => {
    expect(TECHNICAL_DEBT_OPTIONS.map(({ shortLabel }) => shortLabel)).toEqual([
      "Attendre",
      "Stabiliser",
      "Rénover",
      "Standard",
      "Réécrire",
    ]);

    for (const phrase of [
      "mêmes parcours commande, planification, intervention et facturation",
      "migration, coexistence, recette, formation",
      "horizons de 12, 36 et 60 mois",
      "Cinq options au même périmètre",
    ]) {
      expect(normalizedPage).toContain(phrase);
    }
  });

  it("keeps treasury, internal capacity, risk and opportunity separate", () => {
    for (const phrase of [
      "Capacité interne valorisée",
      "Sorties de trésorerie attribuables",
      "Risque attendu",
      "Opportunité",
      "pas une économie bancaire promise",
      "hors du classement",
      "elle ne devient jamais zéro",
    ]) {
      expect(normalizedPage).toContain(phrase);
    }

    expect(page).not.toContain("Le contrôle inverse qui évite le P0");
  });

  it("keeps every displayed reference total aligned with the calculator", () => {
    for (const horizon of [12, 36, 60] as const) {
      const result = calculateTechnicalDebtDecision(
        TECHNICAL_DEBT_EXAMPLE_FRICTION,
        TECHNICAL_DEBT_EXAMPLE_OPTIONS,
        horizon,
        "risk",
      );

      for (const option of result.optionResults) {
        expect(normalizedPage).toContain(formatInteger(option.selectedTotal));
      }
    }
  });

  it("ships every promised reusable file without an email gate", () => {
    expect(normalizedPage).toContain("sans compte ni transmission de données");

    for (const filename of resources) {
      const filePath = path.join(resourceDirectory, filename);
      expect(fs.existsSync(filePath), filename).toBe(true);
      expect(fs.statSync(filePath).size, filename).toBeGreaterThan(80);
      expect(normalizedPage).toContain(
        `/ressources/dossier-decision-dette-technique/${filename}`,
      );
    }

    for (const downloadName of [
      "mode-emploi-dette-technique.md",
      "registre-evenements-dette-technique.csv",
      "exemple-atelier-nova-dette-technique.csv",
      "comparatif-options-dette-technique.csv",
      "releve-decision-dette-technique.md",
    ]) {
      expect(page).toContain(`download="${downloadName}"`);
    }
  });

  it("keeps the static option comparison CSV rectangular and explicit", () => {
    const csv = fs.readFileSync(
      path.join(resourceDirectory, "comparatif-options.csv"),
      "utf8",
    );
    const rows = csv.trim().split("\n");
    const columnCounts = rows.map((row) => row.split(";").length);

    expect(new Set(columnCounts)).toEqual(new Set([25]));
    expect(rows).toHaveLength(6);
    expect(csv).toContain('"retour_arriere_inclus"');
    expect(csv).toContain('"reduction_tresorerie_pct"');
    expect(csv).toContain('"reduction_capacite_pct"');
    expect(csv).toContain('"charge_comparable_12_mois_eur"');
    expect(csv).toContain('"charge_comparable_60_mois_eur"');
    expect(csv).toContain('"exemple fictif à remplacer"');

    expect(
      rows.slice(1).map((row) => row.split(";")[2].replaceAll('"', "")),
    ).toEqual([
      "Attendre sous surveillance",
      "Stabiliser une zone",
      "Rénover progressivement",
      "Remplacer par un logiciel standard",
      "Réécrire l’application",
    ]);
  });

  it("keeps every supporting CSV rectangular and versioned", () => {
    const expectedColumns = new Map([
      ["registre-evenements.csv", 16],
      ["exemple-atelier-nova.csv", 16],
    ]);

    for (const [filename, expectedColumnCount] of expectedColumns) {
      const rows = fs
        .readFileSync(path.join(resourceDirectory, filename), "utf8")
        .trim()
        .split("\n");

      expect(
        new Set(rows.map((row) => row.split(";").length)),
        filename,
      ).toEqual(new Set([expectedColumnCount]));
      expect(rows[0], filename).toContain('"version_dossier"');
      expect(rows[1], filename).toContain('"2026-07-24"');
    }

    const example = fs.readFileSync(
      path.join(resourceDirectory, "exemple-atelier-nova.csv"),
      "utf8",
    );
    expect(example).toContain('"probabilite_incident_pct"');
    expect(example).toContain('"cout_annuel_observe_eur"');
    expect(example).toContain('"20";"";"calcul : 20 % × 40000 €"');
    expect(example).toContain('"";"34048";"calcul"');
  });

  it("archives the exact decision, unit, unknowns and opportunity", () => {
    const decisionRecord = fs.readFileSync(
      path.join(resourceDirectory, "decision-record.md"),
      "utf8",
    );

    for (const phrase of [
      "Lecture retenue",
      "Charge totale comparable",
      "Écart avec le minimum",
      "Coûts encore inconnus",
      "Opportunité hors classement",
      "Exemple fictif rempli — Atelier Nova",
      "Le seuil de bascule n’a pas la même unité",
    ]) {
      expect(decisionRecord).toContain(phrase);
    }
  });

  it("makes the sensitivity convention and option assumptions reproducible", () => {
    for (const phrase of [
      "Trésorerie supprimée",
      "Capacité libérée",
      "25 648 / 34 048",
      "8 400 / 34 048",
      "Seuls ces deux sous-totaux changent proportionnellement",
      "L’impact de l’incident reste à 40 000 €",
    ]) {
      expect(normalizedPage).toContain(phrase);
    }
  });

  it("uses the five official DORA delivery metrics without inventing a sixth", () => {
    for (const phrase of [
      "fréquence de déploiement",
      "délai entre le changement de code et sa mise en production",
      "temps de rétablissement après un déploiement défaillant",
      "taux de déploiements qui nécessitent une intervention",
      "taux de reprise des déploiements",
    ]) {
      expect(normalizedPage).toContain(phrase);
    }
    expect(normalizedPage).toContain("deployment rework rate");

    expect(normalizedPage).not.toContain(
      "récupération après échec, le taux d’échec et le temps de reprise",
    );
  });

  it("states the decision limits, countercase and honest conversion boundary", () => {
    for (const phrase of [
      "Cette position ne vaut plus",
      "incident cyber en cours",
      "réécriture déjà irréversible",
      "ni devis automatique, ni promesse d’économie",
      "pas des obligations ni des barèmes pour une PME française",
    ]) {
      expect(normalizedPage).toContain(phrase);
    }
  });
});
