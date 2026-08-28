import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

import { bodyHtml } from "./body";

/**
 * Un prix B2B doit porter sa base de taxation là où il est lu.
 *
 * `/tarifs` (« Tous les montants de cette page sont en euros hors taxes »),
 * `/agence` et les pages service le font toutes. L'accueil et `/services` —
 * les deux surfaces les plus consultées — publiaient encore quatre forfaits et
 * neuf budgets catalogue sans un seul « HT ». Ce test ferme l'écart et empêche
 * qu'un nouveau montant réapparaisse nu.
 *
 * `pricing-grid.test.ts` couvre la même exigence pour `/tarifs`.
 */

const servicesHubSource = readFileSync(
  join(process.cwd(), "src/components/services/ServicesHubPage.tsx"),
  "utf8",
);

describe("base de taxation des prix de l'accueil", () => {
  const priceSectionStart = bodyHtml.indexOf('<div class="price-grid">');
  const priceSectionEnd = bodyHtml.indexOf("<!-- FAQ -->", priceSectionStart);

  it("qualifie l'unité de chaque carte de forfait", () => {
    const units = [
      ...bodyHtml.matchAll(/<span class="per">([^<]+)<\/span>/g),
    ].map((match) => match[1]);

    expect(units.length).toBeGreaterThanOrEqual(4);
    for (const unit of units) {
      expect(unit, `unité de prix sans base de taxation : « ${unit} »`).toMatch(
        /\bHT\b/,
      );
    }
  });

  it("qualifie le ticket d'entrée affiché dans le héros outils internes", () => {
    const heroPrices = [
      ...bodyHtml.matchAll(/<span class="svc-hero-price">([\s\S]*?)<\/span>/g),
    ].map((match) => match[1]);

    expect(heroPrices.length).toBeGreaterThan(0);
    for (const price of heroPrices) {
      expect(price, `prix héros sans base de taxation : « ${price} »`).toMatch(
        /\bHT\b/,
      );
    }
  });

  it("rappelle la base de taxation sous la grille de forfaits", () => {
    expect(priceSectionStart).toBeGreaterThan(-1);
    expect(priceSectionEnd).toBeGreaterThan(priceSectionStart);

    const priceSection = bodyHtml.slice(priceSectionStart, priceSectionEnd);
    expect(priceSection).toMatch(/hors taxes/i);
    // Une fourchette reste un ordre de grandeur, jamais un engagement.
    expect(priceSection).toMatch(/indicatif|ordres de grandeur/i);
  });
});

describe("base de taxation des budgets du catalogue /services", () => {
  const budgets = [
    ...servicesHubSource.matchAll(/\bbudget:\s*"([^"]+)"/g),
  ].map((match) => match[1]);

  it("lit bien les budgets du catalogue", () => {
    expect(budgets.length).toBeGreaterThanOrEqual(10);
  });

  it("qualifie chaque budget chiffré", () => {
    const monetary = budgets.filter((budget) => budget.includes("€"));
    expect(monetary.length).toBeGreaterThanOrEqual(8);

    const nude = monetary.filter((budget) => !/\bHT\b/.test(budget));
    expect(nude).toEqual([]);
  });

  it("rappelle la base de taxation dans l'intro du catalogue", () => {
    expect(servicesHubSource).toMatch(/hors taxes/i);
  });
});
