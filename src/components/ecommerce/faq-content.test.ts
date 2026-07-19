import { describe, expect, it } from "vitest";
import {
  buildEcommerceFaqJsonLd,
  ECOMMERCE_FAQ_ITEMS,
  ecommerceFaqAnswerText,
  ecommerceFaqItemsHtml,
} from "./faq-content";
import { composedBodyHtml } from "./composed-body";

describe("e-commerce FAQ source", () => {
  it("builds the visible FAQ and JSON-LD from the same ten entries", () => {
    const jsonLd = buildEcommerceFaqJsonLd();

    expect(ECOMMERCE_FAQ_ITEMS).toHaveLength(10);
    expect(jsonLd.mainEntity).toHaveLength(ECOMMERCE_FAQ_ITEMS.length);
    ECOMMERCE_FAQ_ITEMS.forEach((item, index) => {
      expect(ecommerceFaqItemsHtml).toContain(item.question);
      expect(jsonLd.mainEntity[index].name).toBe(item.question);
      expect(jsonLd.mainEntity[index].acceptedAnswer.text).toBe(
        ecommerceFaqAnswerText(item),
      );
    });
  });

  it("states the two-stage legal calendar without omitting reception", () => {
    const legalItem = ECOMMERCE_FAQ_ITEMS.find((item) =>
      item.question.includes("facturation électronique"),
    );
    const answer = legalItem ? ecommerceFaqAnswerText(legalItem) : "";

    expect(answer).toContain("toutes les entreprises");
    expect(answer).toContain("1er septembre 2026");
    expect(answer).toContain("PME et microentreprises le 1er septembre 2027");
  });

  it("does not publish an absolute migration-result claim", () => {
    const migrationItem = ECOMMERCE_FAQ_ITEMS.find((item) =>
      item.question.includes("5 000 produits"),
    );
    const answer = migrationItem ? ecommerceFaqAnswerText(migrationItem) : "";

    expect(answer).not.toMatch(/jamais perdu|zéro perte/i);
    expect(answer).toContain("ne permet pas de garantir");
  });

  it("replaces the legacy template FAQ in the rendered page", () => {
    expect(composedBodyHtml).toContain(ECOMMERCE_FAQ_ITEMS[0].question);
    expect(composedBodyHtml).toContain("calendrier officiel de la DGFiP");
    expect(composedBodyHtml).not.toMatch(/6 dernières migrations|12[–-]18 mois/);
  });
});
