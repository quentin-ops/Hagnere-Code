import { describe, expect, it } from "vitest";
import { composedBodyHtml } from "./composed-body";

describe("sites vitrines public claims", () => {
  it("ne publie pas les métriques commerciales non étayées de l'ancienne page", () => {
    expect(composedBodyHtml).not.toMatch(/98\s*% des positions|5[×x] plus rapide|\+7 à \+15\s*%|ROI se fait en 6[–-]12 mois|2 ans sans risque/i);
  });

  it("identifie la valeur Lighthouse comme un exemple et non une médiane client", () => {
    expect(composedBodyHtml).not.toMatch(/médiane sur nos livraisons/i);
    expect(composedBodyHtml).toContain("Exemple illustratif d'un objectif de performance");
  });

  it("ne promet aucun délai, position ou résultat SEO non maîtrisable", () => {
    expect(composedBodyHtml).not.toMatch(
      /ranking local\s+en\s+\d|conservation des positions|pensé pour ranker|stratégie[^.]{0,120}performe sur|fait signer vos prospects|transforme votre budget Ads en leads qualifiés/i,
    );
    expect(composedBodyHtml).toContain(
      "Exploration, indexation et classement restent mesurés séparément, sans délai garanti.",
    );
  });

  it("dimensionne sauvegarde, support et capacité au contrat", () => {
    expect(composedBodyHtml).not.toMatch(
      /Backups PostgreSQL toutes les 15 minutes|RTO cible\s*:\s*2 h|RPO cible\s*:\s*15 min|Alerting Slack 24\/7|plusieurs milliers de requêtes \/ seconde/i,
    );
    expect(composedBodyHtml).not.toMatch(
      /audit de sécurité annuel[^<.]{0,80}inclus/i,
    );
  });
});
