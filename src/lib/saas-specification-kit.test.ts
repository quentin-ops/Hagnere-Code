import { describe, expect, it } from "vitest";
import {
  buildDossierClairExampleMarkdown,
  buildSaasOfferComparisonMarkdown,
  buildSaasSpecificationMarkdown,
  calculateSaasOfferComparison,
  cloneSaasOfferInputs,
  EMPTY_SAAS_SPECIFICATION_PROFILE,
  parseSaasDecimalAmount,
  SAAS_OFFER_EXAMPLE_INPUTS,
  SAAS_OFFER_KEYS,
  saasSpecificationFileName,
} from "./saas-specification-kit";

describe("strict SaaS decimal parsing", () => {
  it("accepts French or point decimals with at most two decimal places", () => {
    expect(parseSaasDecimalAmount("1250")).toBe(1250);
    expect(parseSaasDecimalAmount("1250,5")).toBe(1250.5);
    expect(parseSaasDecimalAmount("1250.50")).toBe(1250.5);
    expect(parseSaasDecimalAmount(" 0,00 ")).toBe(0);
  });

  it("rejects ambiguous, partial, exponential and negative amounts", () => {
    [
      "",
      "1 250,50",
      "1,250.50",
      "1.250,50",
      "1e3",
      "-1",
      "+1",
      "1.",
      ",5",
      "1,234",
      "12 euros",
    ].forEach((raw) => expect(parseSaasDecimalAmount(raw)).toBeNaN());
  });
});

function confirmedExample() {
  const inputs = cloneSaasOfferInputs(SAAS_OFFER_EXAMPLE_INPUTS);
  for (const offer of SAAS_OFFER_KEYS) {
    inputs[offer].hasUnknownCosts = false;
  }
  return inputs;
}

describe("SaaS specification Markdown", () => {
  it("builds the complete executive template and keeps empty fields explicit", () => {
    const markdown = buildSaasSpecificationMarkdown({
      ...EMPTY_SAAS_SPECIFICATION_PROFILE,
      projectName: "Portail | partenaires",
      targetCompany: "Réseaux de 20 à 100 magasins",
      decisionMaker: "Sonia, directrice générale",
    });

    expect(markdown).toContain(
      "# Cahier des charges SaaS — Portail \\| partenaires",
    );
    expect(markdown).toContain("Sonia, directrice générale");
    expect(markdown).toContain("[Situation observable");
    expect(markdown).toContain(
      "## 1. Décision : poursuivre, arrêter ou reporter",
    );
    expect(markdown).toContain("## 3. Rôles, droits et responsabilités");
    expect(markdown).toContain("## 4. Parcours principal et échecs");
    expect(markdown).toContain("## 7. Facturation et droits d’accès");
    expect(markdown).toContain("## 8. Migration et mise en service");
    expect(markdown).toContain(
      "## 9. Tests d’acceptation et nouveaux essais après correction",
    );
    expect(markdown).toContain("## 10. Coûts renseignés sur 24 mois");
    expect(markdown).toContain("## 12. Changements et version de référence");
    expect(markdown).toContain("## 13. Double sortie");
    expect(markdown).toContain("## 14. Mesures à 30 et 90 jours");
    expect(markdown).toContain("## 15. Sources, preuves et limites");
    expect(markdown).not.toContain("undefined");
  });

  it("ships a filled, qualified DossierClair example", () => {
    const markdown = buildDossierClairExampleMarkdown();

    expect(markdown).toContain("Exemple entièrement fictif");
    expect(markdown).toContain("Claire crée, Léa complète");
    expect(markdown).toContain(
      "| **Coût renseigné sur 24 mois** | **123 200 €** | **111 700 €** | **120 899,92 €** |",
    );
    expect(markdown).toContain(
      "| Étude et décisions initiales | 0 € | 0 € | 8 000 € |",
    );
    expect(markdown).toContain(
      "| Maintenance et assistance sur 24 mois | 36 000 € | 30 000 € | 33 600 € |",
    );
    expect(markdown).toContain(
      "| Sortie et transfert | 8 000 € | 5 000 € | 6 000 € |",
    );
    expect(markdown).toContain("Double sortie");
    expect(markdown).toContain("ne sont ni des prix de marché");
    expect(markdown).toContain(
      "Le temps de travail actif médian est de 52 minutes par dossier",
    );
    expect(markdown).toContain(
      "| 90 jours | Dossiers revenus incomplets | 5 sur 24 | 2 sur 24 au plus |",
    );
    expect(markdown).toContain(
      "Le temps d’attente du client n’est pas encore mesuré",
    );
    expect(markdown).not.toContain("[à compléter]");
  });

  it("creates stable, accent-free Markdown file names", () => {
    expect(saasSpecificationFileName("Café & Réseau 2027 !")).toBe(
      "cahier-des-charges-saas-cafe-reseau-2027.md",
    );
    expect(saasSpecificationFileName("   ")).toBe(
      "cahier-des-charges-saas-a-completer.md",
    );
  });
});

describe("SaaS offer comparison", () => {
  it("reproduces the three DossierClair totals at 24 months", () => {
    const inputs = cloneSaasOfferInputs(SAAS_OFFER_EXAMPLE_INPUTS);
    const calculation = calculateSaasOfferComparison(inputs, 24);

    expect(calculation.isValid).toBe(true);
    expect(inputs.A).toMatchObject({
      discovery: 0,
      construction: 45000,
      migration: 12000,
      monthlyMaintenance: 1500,
      monthlyInfrastructure: 750,
      monthlyLicenses: 175,
      exit: 8000,
    });
    expect(inputs.B).toMatchObject({
      discovery: 0,
      construction: 62000,
      migration: 0,
      monthlyMaintenance: 1250,
      monthlyInfrastructure: 500,
      monthlyLicenses: 112.5,
      exit: 5000,
    });
    expect(inputs.C.discovery).toBe(8000);
    expect(inputs.C.construction).toBe(52000);
    expect(inputs.C.migration).toBe(4000);
    expect(inputs.C.monthlyMaintenance).toBe(1400);
    expect(inputs.C.monthlyInfrastructure).toBe(583.33);
    expect(inputs.C.monthlyLicenses).toBe(137.5);
    expect(inputs.C.exit).toBe(6000);
    expect(
      Object.fromEntries(
        calculation.results.map((result) => [result.offer, result.total]),
      ),
    ).toEqual({ A: 123200, B: 111700, C: 120899.92 });
  });

  it("applies monthly costs to the closed 12 and 36 month horizons", () => {
    const inputs = cloneSaasOfferInputs(SAAS_OFFER_EXAMPLE_INPUTS);
    const twelveMonths = calculateSaasOfferComparison(inputs, 12);
    const thirtySixMonths = calculateSaasOfferComparison(inputs, 36);

    expect(
      Object.fromEntries(
        twelveMonths.results.map((result) => [result.offer, result.total]),
      ),
    ).toEqual({ A: 94100, B: 89350, C: 95449.96 });
    expect(
      Object.fromEntries(
        thirtySixMonths.results.map((result) => [result.offer, result.total]),
      ),
    ).toEqual({ A: 152300, B: 134050, C: 146349.88 });
  });

  it("never ranks while one or more important costs remain unknown", () => {
    const allUnknown = calculateSaasOfferComparison(
      cloneSaasOfferInputs(SAAS_OFFER_EXAMPLE_INPUTS),
      24,
    );
    expect(allUnknown.lowestTotal).toBeNull();
    expect(
      allUnknown.results.every(
        (result) => result.differenceFromLowest === null,
      ),
    ).toBe(true);

    const oneUnknown = confirmedExample();
    oneUnknown.C.hasUnknownCosts = true;
    const partial = calculateSaasOfferComparison(oneUnknown, 24);
    expect(partial.lowestTotal).toBeNull();
    expect(
      partial.results.every((result) => result.differenceFromLowest === null),
    ).toBe(true);
  });

  it("identifies only the lowest entered cost after all unknowns are cleared", () => {
    const calculation = calculateSaasOfferComparison(confirmedExample(), 24);

    expect(calculation.lowestTotal).toBe(111700);
    expect(
      calculation.results.find((result) => result.offer === "B")
        ?.differenceFromLowest,
    ).toBe(0);
    expect(
      calculation.results.find((result) => result.offer === "A")
        ?.differenceFromLowest,
    ).toBe(11500);
    expect(
      calculation.results.find((result) => result.offer === "C")
        ?.differenceFromLowest,
    ).toBe(9199.92);
  });

  it("requires a written explanation for every zero before a complete comparison", () => {
    const inputs = confirmedExample();
    inputs.B.zeroJustification = "";
    const calculation = calculateSaasOfferComparison(inputs, 24);

    expect(calculation.isValid).toBe(false);
    expect(calculation.validationErrors).toContainEqual({
      offer: "B",
      field: "zeroJustification",
    });
  });

  it("keeps the displayed monthly amount reconstructible", () => {
    const inputs = cloneSaasOfferInputs(SAAS_OFFER_EXAMPLE_INPUTS);
    const calculation = calculateSaasOfferComparison(inputs, 24);
    const c = calculation.results.find((result) => result.offer === "C");

    expect(inputs.C.monthlyInfrastructure * 24).toBeCloseTo(13999.92, 10);
    expect(c?.total).toBe(120899.92);
  });

  it("rounds programmatic inputs to the same centime precision as the form", () => {
    const inputs = confirmedExample();
    inputs.A.construction = 1.234;
    const calculation = calculateSaasOfferComparison(inputs, 24);
    const result = calculation.results.find((item) => item.offer === "A");

    expect(result?.oneOffTotal).toBe(20001.23);
    expect(result?.total).toBe(78201.23);
  });

  it("lists every tied lowest offer and escapes active Markdown markers", () => {
    const inputs = confirmedExample();
    inputs.A = { ...inputs.B, zeroJustification: inputs.B.zeroJustification };
    const calculation = calculateSaasOfferComparison(inputs, 24);
    const markdown = buildSaasOfferComparisonMarkdown(inputs, calculation);

    expect(
      calculation.results
        .filter((result) => result.differenceFromLowest === 0)
        .map((result) => result.offer),
    ).toEqual(["A", "B"]);
    expect(markdown).toContain(
      "Coût renseigné le plus faible : offre A et offre B",
    );

    const custom = buildSaasSpecificationMarkdown({
      ...EMPTY_SAAS_SPECIFICATION_PROFILE,
      projectName:
        "<img src=x onerror=alert(1)> **urgent** [lien](https://example.test)",
    });
    expect(custom).not.toContain("<img");
    expect(custom).toContain("&lt;img");
    expect(custom).not.toContain("[lien](https://example.test)");
  });

  it("rejects negative, empty, overflowing amounts and open horizons", () => {
    const negative = cloneSaasOfferInputs(SAAS_OFFER_EXAMPLE_INPUTS);
    negative.A.discovery = -1;
    expect(calculateSaasOfferComparison(negative, 24).isValid).toBe(false);

    const missing = cloneSaasOfferInputs(SAAS_OFFER_EXAMPLE_INPUTS);
    missing.B.construction = Number.NaN;
    expect(calculateSaasOfferComparison(missing, 24).isValid).toBe(false);

    const overflowing = cloneSaasOfferInputs(SAAS_OFFER_EXAMPLE_INPUTS);
    overflowing.C.monthlyMaintenance = Number.MAX_VALUE;
    expect(calculateSaasOfferComparison(overflowing, 36).isValid).toBe(false);

    const openHorizon = calculateSaasOfferComparison(
      cloneSaasOfferInputs(SAAS_OFFER_EXAMPLE_INPUTS),
      18,
    );
    expect(openHorizon.isValid).toBe(false);
    expect(openHorizon.validationErrors).toContainEqual({
      field: "horizonMonths",
    });
  });

  it("clones every offer without sharing mutable records", () => {
    const clone = cloneSaasOfferInputs(SAAS_OFFER_EXAMPLE_INPUTS);
    clone.A.discovery = 1;
    clone.B.hasUnknownCosts = false;

    expect(SAAS_OFFER_EXAMPLE_INPUTS.A.discovery).toBe(0);
    expect(SAAS_OFFER_EXAMPLE_INPUTS.B.hasUnknownCosts).toBe(true);
  });

  it("exports assumptions, inclusions, exclusions and unknowns without a false verdict", () => {
    const inputs = cloneSaasOfferInputs(SAAS_OFFER_EXAMPLE_INPUTS);
    const partial = calculateSaasOfferComparison(inputs, 24);
    const markdown = buildSaasOfferComparisonMarkdown(inputs, partial);

    expect(markdown).toContain("Aucun classement");
    expect(markdown).toContain("## Hypothèses saisies");
    expect(markdown).toContain("Étude et décisions initiales");
    expect(markdown).toContain("Sortie et transfert");
    expect(markdown).toContain("Justification des montants nuls");
    expect(markdown).toContain("soit 36 000,00 € sur l’horizon");
    expect(markdown).toContain("## Inclus dans le calcul");
    expect(markdown).toContain("## Exclus du calcul sauf saisie");
    expect(markdown).toContain("## Inconnus à fermer avant décision");
    expect(markdown).toContain("Offre A : au moins un coût important");
    expect(markdown).not.toContain("meilleure offre");

    const completeInputs = confirmedExample();
    const complete = calculateSaasOfferComparison(completeInputs, 24);
    const completeMarkdown = buildSaasOfferComparisonMarkdown(
      completeInputs,
      complete,
    );
    expect(completeMarkdown).toContain(
      "Coût renseigné le plus faible : offre B",
    );
    expect(completeMarkdown).not.toContain("meilleure offre");
  });

  it("refuses to export an invalid comparison", () => {
    const inputs = cloneSaasOfferInputs(SAAS_OFFER_EXAMPLE_INPUTS);
    inputs.A.exit = Number.NaN;
    const invalid = calculateSaasOfferComparison(inputs, 24);

    expect(() => buildSaasOfferComparisonMarkdown(inputs, invalid)).toThrow(
      "doit être valide",
    );
  });
});
