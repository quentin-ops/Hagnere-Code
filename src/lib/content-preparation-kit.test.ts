import { describe, expect, it } from "vitest";
import {
  buildContentPreparationMarkdown,
  buildContentProductionComparisonMarkdown,
  buildServiMecaExampleMarkdown,
  calculateContentProduction,
  cloneContentProductionModel,
  CONTENT_PRODUCTION_EXAMPLE_MODEL,
  CONTENT_PRODUCTION_OPTION_KEYS,
  contentPreparationFileName,
  EMPTY_CONTENT_PREPARATION_PROFILE,
} from "./content-preparation-kit";

function confirmedExample() {
  const model = cloneContentProductionModel(CONTENT_PRODUCTION_EXAMPLE_MODEL);
  for (const option of CONTENT_PRODUCTION_OPTION_KEYS) {
    model.options[option].hasUnknownCosts = false;
  }
  return model;
}

describe("content preparation Markdown kit", () => {
  it("builds a complete, editable dossier without hiding empty answers", () => {
    const markdown = buildContentPreparationMarkdown({
      ...EMPTY_CONTENT_PREPARATION_PROFILE,
      companyName: "Atelier | Réseau",
      mainOffer: "Maintenance préventive",
      targetCustomer: "Responsable de production",
      validator: "Sonia, dirigeante",
    });

    expect(markdown).toContain(
      "# Dossier de contenus du site vitrine — Atelier \\| Réseau",
    );
    expect(markdown).toContain("Sonia, dirigeante");
    expect(markdown).toContain("## 1. Carte des pages");
    expect(markdown).toContain(
      "## 2. Phrases réellement employées par les clients",
    );
    expect(markdown).toContain("## 4. De la note brute à la page");
    expect(markdown).toContain("## 5. Registre des preuves");
    expect(markdown).toContain("## 6. Plan des photos");
    expect(markdown).toContain("## 8. Formulaire et traitement de la demande");
    expect(markdown).toContain("## 10. Test avant publication");
    expect(markdown).toContain("## 12. Suivi après publication");
    expect(markdown).toContain("[zone d’intervention]");
    expect(markdown).not.toContain("undefined");

    const hostile = buildContentPreparationMarkdown({
      ...EMPTY_CONTENT_PREPARATION_PROFILE,
      companyName: "Atelier <script>\nRéseau",
    });
    expect(hostile).toContain("Atelier &lt;script&gt; Réseau");
    expect(hostile).not.toContain("<script>");
  });

  it("ships a filled and explicitly fictitious end-to-end example", () => {
    const markdown = buildServiMecaExampleMarkdown();

    expect(markdown).toContain("Exemple entièrement fictif");
    expect(markdown).toContain("ServiMeca Industrie");
    expect(markdown).toContain("20 h | 8 h | 4 h | 2 180 €");
    expect(markdown).toContain("8 h | 4 h | 14 h | 2 020 €");
    expect(markdown).toContain("5 h | 3 h | 26 h | 2 835 €");
    expect(markdown).toContain("Elle ne comprend");
    expect(markdown).toContain("il ne produit pas un taux de conversion");
    expect(markdown).not.toContain("[à compléter]");
  });

  it("creates stable, accent-free file names", () => {
    expect(contentPreparationFileName("Café & Réseau 2027 !")).toBe(
      "dossier-contenus-site-vitrine-cafe-reseau-2027.md",
    );
    expect(contentPreparationFileName("   ")).toBe(
      "dossier-contenus-site-vitrine-a-completer.md",
    );
  });
});

describe("content production comparison", () => {
  it("reproduces the three central scenario totals and separates time", () => {
    const calculation = calculateContentProduction(
      cloneContentProductionModel(CONTENT_PRODUCTION_EXAMPLE_MODEL),
    );

    expect(calculation.isValid).toBe(true);
    expect(
      Object.fromEntries(
        calculation.results.map((result) => [result.option, result.totalValue]),
      ),
    ).toEqual({
      internal: 2180,
      hybrid: 2020,
      delegated: 2835,
    });
    expect(
      calculation.results.find((result) => result.option === "hybrid"),
    ).toMatchObject({
      internalHours: 12,
      providerHours: 14,
      totalHours: 26,
      internalCapacityValue: 760,
      providerCost: 1260,
    });
  });

  it("never ranks while at least one material cost remains unknown", () => {
    const calculation = calculateContentProduction(
      cloneContentProductionModel(CONTENT_PRODUCTION_EXAMPLE_MODEL),
    );

    expect(calculation.hasAnyUnknownCosts).toBe(true);
    expect(calculation.lowestValue).toBeNull();
    expect(
      calculation.results.every(
        (result) => result.differenceFromLowest === null,
      ),
    ).toBe(true);

    const oneUnknown = confirmedExample();
    oneUnknown.options.internal.hasUnknownCosts = true;
    expect(calculateContentProduction(oneUnknown).lowestValue).toBeNull();
  });

  it("identifies only the lowest entered total after every unknown is closed", () => {
    const calculation = calculateContentProduction(confirmedExample());

    expect(calculation.lowestValue).toBe(2020);
    expect(
      Object.fromEntries(
        calculation.results.map((result) => [
          result.option,
          result.differenceFromLowest,
        ]),
      ),
    ).toEqual({
      internal: 160,
      hybrid: 0,
      delegated: 815,
    });
  });

  it("changes the answer when internal capacity is less expensive", () => {
    const model = confirmedExample();
    model.rates = { direction: 50, team: 30, provider: 90 };
    const calculation = calculateContentProduction(model);

    expect(calculation.lowestValue).toBe(1600);
    expect(
      calculation.results.find((result) => result.option === "internal")
        ?.differenceFromLowest,
    ).toBe(0);
    expect(
      calculation.results.find((result) => result.option === "hybrid")
        ?.differenceFromLowest,
    ).toBe(180);
  });

  it("uses the same centime precision for typed and programmatic values", () => {
    const model = confirmedExample();
    model.options.internal.direction = 20.009;
    const calculation = calculateContentProduction(model);

    expect(
      calculation.results.find((result) => result.option === "internal"),
    ).toMatchObject({
      internalHours: 28.01,
      internalCapacityValue: 1820.75,
      totalValue: 2180.75,
    });
  });

  it("rejects negative, empty and non-finite rates or hours", () => {
    const negative = confirmedExample();
    negative.rates.direction = -1;
    expect(calculateContentProduction(negative)).toMatchObject({
      isValid: false,
      lowestValue: null,
    });

    const missing = confirmedExample();
    missing.options.hybrid.provider = Number.NaN;
    expect(calculateContentProduction(missing).validationErrors).toContainEqual(
      {
        scope: "hours",
        option: "hybrid",
        role: "provider",
      },
    );

    const overflowing = confirmedExample();
    overflowing.options.delegated.team = Number.MAX_VALUE;
    expect(calculateContentProduction(overflowing).isValid).toBe(false);
  });

  it("clones all nested records", () => {
    const clone = cloneContentProductionModel(CONTENT_PRODUCTION_EXAMPLE_MODEL);
    clone.rates.direction = 1;
    clone.options.hybrid.provider = 1;
    clone.options.internal.hasUnknownCosts = false;

    expect(CONTENT_PRODUCTION_EXAMPLE_MODEL.rates.direction).toBe(75);
    expect(CONTENT_PRODUCTION_EXAMPLE_MODEL.options.hybrid.provider).toBe(14);
    expect(
      CONTENT_PRODUCTION_EXAMPLE_MODEL.options.internal.hasUnknownCosts,
    ).toBe(true);
  });

  it("exports assumptions and withholds a verdict when costs remain unknown", () => {
    const model = cloneContentProductionModel(CONTENT_PRODUCTION_EXAMPLE_MODEL);
    const partial = calculateContentProduction(model);
    const markdown = buildContentProductionComparisonMarkdown(model, partial);

    expect(markdown).toContain("Aucun classement");
    expect(markdown).toContain("2 180,00 €");
    expect(markdown).toContain("2 020,00 €");
    expect(markdown).toContain("2 835,00 €");
    expect(markdown).toContain("capacité mobilisée");
    expect(markdown).toContain("## Inconnus à fermer");
    expect(markdown).not.toContain("meilleure option");

    const completeModel = confirmedExample();
    const complete = calculateContentProduction(completeModel);
    const completeMarkdown = buildContentProductionComparisonMarkdown(
      completeModel,
      complete,
    );
    expect(completeMarkdown).toContain(
      "Coût renseigné le plus faible : Entretiens et rédaction hybride",
    );
    expect(completeMarkdown).not.toContain("est la meilleure option");
  });

  it("refuses to export an invalid calculation", () => {
    const model = confirmedExample();
    model.options.internal.direction = Number.NaN;
    const invalid = calculateContentProduction(model);

    expect(() =>
      buildContentProductionComparisonMarkdown(model, invalid),
    ).toThrow("doit être valide");
  });
});
