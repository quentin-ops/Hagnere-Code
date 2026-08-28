import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { composedBodyHtml } from "./composed-body";

const componentSource = readFileSync(
  new URL("./OutilsInternes.tsx", import.meta.url),
  "utf8",
);

describe("outils internes public claims", () => {
  it("ne publie pas les anciennes performances non étayées", () => {
    expect(composedBodyHtml).not.toMatch(/40\s*000\s*factures|98[,.]4\s*%|0[,.]004\s*€/i);
    expect(composedBodyHtml).not.toMatch(/ROI atteint/i);
    expect(composedBodyHtml).not.toMatch(/taux d'adoption moyen|chez au moins trois clients/i);
  });

  /**
   * Un gain de temps chiffré est une métrique de résultat : la règle d'or
   * l'interdit sans protocole de mesure publié, y compris à l'intérieur d'une
   * maquette. Le motif précédent ne bloquait que l'ancienne formule littérale
   * (« +14 h »), ce qui a laissé revenir « temps gagné équipe compta : 3h12 »
   * dans un visuel. On interdit désormais la formulation, pas une valeur.
   */
  it("ne chiffre aucun gain de temps, même dans une maquette", () => {
    expect(composedBodyHtml).not.toMatch(
      /temps\s+(?:gagné|économisé)|heures?\s+(?:gagnées?|économisées?)|\d+\s*h(?:\d+)?\s*(?:de\s+)?(?:gagn|économ)/i,
    );
  });

  it("ne présente pas les fonctions juridiques comme une conformité automatique", () => {
    expect(composedBodyHtml).not.toMatch(/RGPD (?:clé|clef) en main|100\s*%\s*RGPD/i);
    expect(composedBodyHtml).toContain("les qualifications juridiques restent à valider");
  });

  it("identifie les données de démonstration et les limites du calculateur", () => {
    expect(composedBodyHtml).toContain("EXEMPLE ILLUSTRATIF · DONNÉES FICTIVES");
    expect(composedBodyHtml).toContain("simulation non contractuelle");
    expect(composedBodyHtml).toContain("Ce montant n'est pas une économie garantie");
  });

  /**
   * Les quatre fenêtres « CAS N°0X » montrent des sociétés, des montants et des
   * séquences inventés. Sans étiquette dans la fenêtre elle-même, elles se
   * lisent comme des captures d'un client réel — la seule étiquette de la page
   * se trouvait 550 lignes plus bas, sur un autre bloc.
   */
  it("étiquette chaque fenêtre de cas d'usage comme une maquette fictive", () => {
    const visuals = composedBodyHtml.split('<div class="uc-visual">').slice(1);
    expect(visuals.length).toBeGreaterThanOrEqual(4);

    for (const [index, visual] of visuals.entries()) {
      const svgStart = visual.indexOf("<svg");
      expect(svgStart, `fenêtre n°${index + 1} sans visuel`).toBeGreaterThan(-1);

      const window = visual.slice(0, svgStart);
      expect(
        window,
        `fenêtre de cas d'usage n°${index + 1} sans étiquette de fiction`,
      ).toMatch(/DONNÉES FICTIVES/);
    }
  });

  it("relie le service au guide de calcul du ROI avec une ancre descriptive", () => {
    expect(componentSource).toContain(
      '"/guides/calculer-roi-application-metier"',
    );
    expect(componentSource).toContain(
      '"Calculer le ROI sans inventer les gains"',
    );
    expect(componentSource).toContain(
      "Quatre ressources pour choisir avant de développer.",
    );
  });
});
