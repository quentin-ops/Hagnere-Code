import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

import { bodyHtml as tarifsHtml } from "@/components/tarifs/body";
import { ECOMMERCE_FAQ_ITEMS, ecommerceFaqAnswerText } from "./faq-content";
import { gmvCalculatorHtml } from "./sections/gmv-calculator";

const MAINTENANCE_PRICING = readFileSync(
  join(process.cwd(), "src/components/maintenance-evolution/sections/pricing.ts"),
  "utf8",
);

/**
 * Le coût d'une TMA Hagnéré Code avait quatre réponses selon la page :
 * « Sur devis » sur /tarifs et /services/maintenance-evolution, des ordres de
 * grandeur explicitement indicatifs dans les scénarios de la page maintenance,
 * 1 500 €/mois dans le simulateur e-commerce, et une fourchette
 * « 800 à 2 500 €/mois » dans la FAQ e-commerce — celle-ci n'existant nulle
 * part ailleurs.
 *
 * Position retenue : le prix reste « sur devis ». Une page peut donc utiliser
 * un montant comme hypothèse de calcul, à condition de le dire.
 */
describe("position TMA affichée par la page e-commerce", () => {
  const maintenanceAnswer = (() => {
    const item = ECOMMERCE_FAQ_ITEMS.find((entry) =>
      entry.question.includes("maintient"),
    );
    return item ? ecommerceFaqAnswerText(item) : "";
  })();

  it("les pages de référence publient bien « Sur devis »", () => {
    expect(MAINTENANCE_PRICING).toContain('<span class="amount">Sur devis</span>');
    // La ligne maintenance de la grille tarifaire dit la même chose.
    expect(tarifsHtml).toContain("<span>Care — périmètre au contrat</span>");
  });

  it("la FAQ ne publie pas une fourchette mensuelle que personne d'autre ne publie", () => {
    expect(maintenanceAnswer).not.toBe("");
    expect(
      maintenanceAnswer,
      "fourchette de TMA publiée dans la FAQ e-commerce",
    ).not.toMatch(/\d[\d\s]*\s*(?:à|[–-])\s*\d[\d\s]*\s*€\s*\/?\s*mois/i);
    expect(maintenanceAnswer).toMatch(/sur devis/i);
  });

  it("le simulateur présente son montant de TMA comme une hypothèse", () => {
    expect(gmvCalculatorHtml).toMatch(/hypothèses de calcul, pas un tarif/i);
    expect(gmvCalculatorHtml).toMatch(/sur devis/i);
    expect(gmvCalculatorHtml).toContain('href="/services/maintenance-evolution"');
    expect(gmvCalculatorHtml).toContain('href="/tarifs"');
  });
});
