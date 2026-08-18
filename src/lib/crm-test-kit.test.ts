import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const csvPath = path.join(
  process.cwd(),
  "public/ressources/fiche-test-crm-12-actions.csv",
);
const guidePath = path.join(
  process.cwd(),
  "src/app/guides/crm-sur-mesure-ou-hubspot/page.tsx",
);

describe("fiche de test CRM téléchargeable", () => {
  it("contient les douze actions et douze colonnes stables", () => {
    const source = fs.readFileSync(csvPath, "utf8");
    const lines = source.trimEnd().split(/\r?\n/);

    expect(lines).toHaveLength(13);
    for (const line of lines) {
      expect(line.split(";")).toHaveLength(12);
    }

    for (const action of [
      "Créer un prospect",
      "Qualifier la demande",
      "Planifier la relance",
      "Préparer un devis",
      "Faire valider une exception",
      "Transmettre après la vente",
      "Retrouver un ancien échange",
      "Réattribuer un dossier",
      "Corriger un doublon",
      "Contrôler un objectif commercial",
      "Exporter une affaire complète",
      "Fermer l’accès d’un collaborateur",
    ]) {
      expect(source).toContain(`"${action}"`);
    }
  });

  it("est reliée depuis le guide avec un nom de téléchargement explicite", () => {
    const guide = fs.readFileSync(guidePath, "utf8");

    expect(guide).toContain('href="/ressources/fiche-test-crm-12-actions.csv"');
    expect(guide).toContain('download="fiche-test-crm-12-actions.csv"');
    expect(guide).toContain("CSV UTF-8 · 12 actions · 2 Ko");
    expect(guide).toContain("Il ne contient aucune macro");
  });
});
