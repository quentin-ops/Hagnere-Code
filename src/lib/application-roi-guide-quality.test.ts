import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { getGuide } from "./guides";

const root = process.cwd();
const pagePath = path.join(
  root,
  "src/app/guides/calculer-roi-application-metier/page.tsx",
);
const calculatorPath = path.join(
  root,
  "src/components/guides/ApplicationRoiCalculator.tsx",
);
const page = fs.readFileSync(pagePath, "utf8");
const calculator = fs.readFileSync(calculatorPath, "utf8");
const normalizedPage = page.replace(/\s+/g, " ");
const normalizedCalculator = calculator.replace(/\s+/g, " ");

describe("calculer ROI application métier guide quality gate", () => {
  it("keeps the rewritten guide behind the human-review gate", () => {
    const guide = getGuide("calculer-roi-application-metier");

    expect(guide.dateModified).toBe("2026-07-25");
    expect(guide.editorialStatus).toBe("ready-for-human-review");
    expect(guide.readTimeMin).toBeGreaterThanOrEqual(25);
  });

  it("publishes the adoption-adjusted example without stale central totals", () => {
    for (const value of [
      "41,5 mois",
      "59 833,04 €",
      "5 033,04 €",
      "9,18 %",
      "mois 43",
      "54,41 %",
      "41 033 €",
      "79,08 %",
    ]) {
      expect(page, value).toContain(value);
    }

    expect(page).toContain(
      "Si l’on supposait 100 % du bénéfice dès le premier mois en service",
    );
    expect(normalizedPage).toContain("le même cas donnerait 15,76 %");
    expect(page).not.toContain("L’ancien calcul sans montée d’adoption");
    expect(page).not.toContain(
      "Le résultat utile à la décision est donc un ROI d’environ 16 %",
    );
    expect(page).not.toContain("gain net 8 600 € ; ROI 16 %");
  });

  it("shows calculated sensitivity and a real non-purchase conclusion", () => {
    for (const value of [
      "1 907,76 € ; ROI 3,56 %",
      "−1 217,52 € ; ROI −2,32 %",
      "−19 969,20 € ; ROI −44,18 %",
      "−2 166,96 € ; ROI −3,50 %",
    ]) {
      expect(page, value).toContain(value);
    }

    expect(normalizedPage).toContain(
      "ne pas développer est ici la meilleure décision",
    );
    expect(normalizedPage).toContain(
      "même si Hagnéré Code pourrait vendre ce développement",
    );
    expect(page).toContain("<ApplicationRoiCalculator />");
  });

  it("keeps the fictional options comparable and the close result qualified", () => {
    expect(page).toContain("2 560 € externes + 40 h internes à 36 €");
    expect(page).toContain("13 840 € externes + 60 h internes à 36 €");
    expect(page).toContain("32 400 € externes + 100 h internes à 36 €");
    expect(page).toContain("soit seulement 1 274,40 € de plus");
    expect(normalizedPage).toContain(
      "Il n’y a pas ici de gagnant robuste entre ces deux options",
    );
    expect(normalizedPage).toContain(
      "Décalez-la de trois, puis de six mois en conservant les autres hypothèses",
    );
    expect(normalizedPage).not.toContain(
      "Ajoutez trois ou six mois de montée en charge",
    );
  });

  it("uses international primary frameworks for the missing decision angles", () => {
    for (const source of [
      "gov.uk/government/publications/digital-and-data-benefits-framework",
      "gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government",
      "gao.gov/assets/gao-20-195g.pdf",
      "digital.gov.au/policy/benefits-management-policy/guidance",
      "verwaltungsvorschriften-im-internet.de",
      "canada.ca/en/government/system/laws/developing-improving-federal-regulations",
    ]) {
      expect(page, source).toContain(source);
    }

    expect(page).not.toContain("www.anact.fr/table-de-simulation-numerique");
    expect(page).toContain("benchmark Royaume-Uni");
  });

  it("keeps unknown costs, cash and the payback convention explicit", () => {
    expect(normalizedCalculator).toContain(
      "Des coûts importants restent à confirmer",
    );
    expect(normalizedCalculator).toContain(
      "La capacité réutilisée n’est pas une entrée de caisse",
    );
    expect(normalizedCalculator).toContain(
      "Le coût de sortie est imputé au dernier mois",
    );
    expect(calculator).toContain("aucune donnée envoyée");
    expect(calculator).not.toContain("fetch(");
  });
});
