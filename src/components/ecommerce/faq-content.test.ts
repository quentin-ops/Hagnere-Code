import { describe, expect, it } from "vitest";
import {
  ECOMMERCE_FAQ_ITEMS,
  ecommerceFaqAnswerText,
  ecommerceFaqItemsHtml,
} from "./faq-content";
import { composedBodyHtml } from "./composed-body";

describe("e-commerce FAQ source", () => {
  it("builds the visible FAQ from the ten editorial entries", () => {
    expect(ECOMMERCE_FAQ_ITEMS).toHaveLength(10);
    ECOMMERCE_FAQ_ITEMS.forEach((item) => {
      expect(ecommerceFaqItemsHtml).toContain(item.question);
      expect(ecommerceFaqAnswerText(item).trim().length).toBeGreaterThan(0);
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
    expect(composedBodyHtml).not.toMatch(
      /6\s+dernières migrations|12[–-]18 mois/i,
    );
  });

  it("keeps commercial examples separate from unsupported guarantees", () => {
    expect(composedBodyHtml).not.toMatch(
      /zéro trafic perdu|zéro perte SEO|méthode qui élimine ce risque|sans perte mesurable|core web vitals verts garantis/i,
    );
    expect(composedBodyHtml).not.toMatch(
      /clients fidèles achètent\s*2[×x]|conversion x2|taux de récupération doublé|volume traité\s*×\s*3/i,
    );
    expect(composedBodyHtml).not.toMatch(
      /pénalité 7\s*%|sauvegardes toutes les 15 min|99,95\s*%|47\s*en 30j/i,
    );
    expect(composedBodyHtml).not.toMatch(
      /cloud shopify \(canada\/us\)|0 \(tout inclus\)|native, fournie j\+1|on l'intègre en 2[–-]5 jours/i,
    );
    expect(composedBodyHtml).not.toMatch(
      /500 à 1\s*000 commandes\/minute|db-prod-16|rto cible 2 h|rollback en 1 commande/i,
    );
    expect(composedBodyHtml).not.toMatch(
      /le plus demandé|gmv x1[,.]8|bascule zero-downtime|sous-traitance offshore|alertes 24\/7/i,
    );
    expect(composedBodyHtml).toContain(
      "elle ne peut pas garantir des positions ou un trafic immobiles",
    );
    expect(composedBodyHtml).toContain("données de démonstration");
  });

  it("limits product proof to publicly observable pages and functions", () => {
    expect(composedBodyHtml).not.toMatch(
      /nous les exploitons|utilisateurs réels|paiements refusés[^<.]{0,80}chez nous|en production/i,
    );
    expect(composedBodyHtml).toContain(
      "Ils ne prouvent pas l'exploitation interne",
    );
    expect(composedBodyHtml).toContain("page publique à consulter");
  });
});
