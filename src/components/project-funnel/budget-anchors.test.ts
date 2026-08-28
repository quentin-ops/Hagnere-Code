import { describe, expect, it } from "vitest";

import { bodyHtml } from "@/components/tarifs/body";
import { BUDGET_ANCHORS } from "./budget-anchors";

/**
 * Le tunnel affiche un montant d'entrée à l'étape budget. Ce montant est une
 * COPIE de la grille publiée sur /tarifs : sans garde, les deux pouvaient
 * diverger et le site aurait annoncé deux prix différents pour le même service
 * — exactement ce que les guides du site reprochent aux prestataires.
 *
 * La garde est volontairement stricte sur l'écriture EXACTE (« 6,9 k€ HT »),
 * espace insécable compris : c'est ce que le visiteur compare d'un écran à
 * l'autre.
 */
describe("repères de prix du tunnel", () => {
  /** Lignes du tableau de /tarifs : lien de service + cellules de prix. */
  const rows = bodyHtml
    .split('<div class="ptable-row">')
    .slice(1)
    .map((row) => ({
      href: row.match(/href="([^"]+)"/)?.[1] ?? "",
      prices: [...row.matchAll(/<div class="ptcol"><b>([^<]+)<\/b>/g)].map(
        (match) => match[1],
      ),
    }))
    .filter((row) => row.href && row.prices.length > 0);

  it("trouve bien le tableau qu'il est censé auditer", () => {
    // Si l'extraction casse, les assertions suivantes passeraient à vide.
    expect(rows.length).toBeGreaterThanOrEqual(10);
  });

  it.each(Object.entries(BUDGET_ANCHORS))(
    "aligne le repère de %s sur le premier palier publié",
    (_kind, anchor) => {
      const row = rows.find((candidate) => candidate.href === anchor!.servicePath);
      expect(
        row,
        `Aucune ligne de /tarifs ne porte ${anchor!.servicePath} : le lien a changé, corrigez budget-anchors.ts.`,
      ).toBeDefined();
      // Le repère annoncé au visiteur est le PREMIER palier de la ligne.
      expect(
        row!.prices[0],
        `Le tunnel annonce « ${anchor!.from} » pour ${anchor!.servicePath}, /tarifs publie « ${row!.prices[0]} ».`,
      ).toBe(anchor!.from);
    },
  );

  it("n'annonce jamais un montant pour un service publié « Sur devis »", () => {
    for (const [, anchor] of Object.entries(BUDGET_ANCHORS)) {
      const row = rows.find((candidate) => candidate.href === anchor!.servicePath);
      expect(row!.prices[0]).not.toMatch(/sur devis/i);
    }
  });
});
