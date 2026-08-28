import { describe, expect, it } from "vitest";

import { bodyHtml as tarifsHtml } from "@/components/tarifs/body";
import { bodyHtml } from "./body";

/**
 * La landing SaaS invite explicitement à comparer ses forfaits à /tarifs. Or
 * l'audit de 2026-08 a trouvé trois écarts sur des cartes portant les mêmes
 * noms, dont un contradictoire dans son unité de compte : « Partenariat »
 * valait « à partir de 120 k€ HT » ici et « 8–20 k€ HT / mois » sur la grille,
 * pendant que la ligne SaaS du tableau réintroduisait 120 k€. Forfait projet ou
 * abonnement ? Les trois chiffres ne se recoupaient pas.
 *
 * Convention retenue, la même que src/components/methode/pricing-alignment.test.ts :
 * la page service publie la fourchette complète d'un palier, /tarifs publie le
 * point d'entrée de ce palier dans sa ligne de tableau. Ce test relie les deux.
 */

/** Montants d'une étiquette, en milliers d'euros. « 15–30 k€ » → [15, 30]. */
function amountsInThousands(label: string): number[] {
  const glued = label.replace(/(?<=\d)[\s  ](?=\d)/g, "");
  const numbers = [...glued.matchAll(/\d+(?:[,.]\d+)?/g)].map((match) =>
    Number(match[0].replace(",", ".")),
  );
  if (numbers.length === 0) return [];
  return label.includes("k€") ? numbers : numbers.map((value) => value / 1000);
}

/** Forfaits de la landing : nom, montant affiché et unité. */
const LANDING_PLANS = new Map(
  bodyHtml
    .split('<div class="plan ')
    .slice(1)
    .flatMap((chunk) => {
      const name = /<h3>([^<]+)<\/h3>/.exec(chunk)?.[1]?.trim();
      const amount = /<span class="amount">([^<]+)<\/span>/.exec(chunk)?.[1]?.trim();
      const unit = /<span class="per">([^<]+)<\/span>/.exec(chunk)?.[1]?.trim();
      return name && amount && unit ? [[name, { amount, unit }] as const] : [];
    }),
);

/** Ligne « SaaS & applis métier » du tableau de /tarifs. */
const GRID_ROW =
  tarifsHtml
    .split('<div class="ptable-row">')
    .slice(1)
    .find((chunk) =>
      chunk.includes('<a href="/services/saas-applications-metier">'),
    ) ?? "";

const GRID_CELLS = [
  ...GRID_ROW.matchAll(/<div class="ptcol"><b>([^<]+)<\/b><span>([^<]*)<\/span>/g),
].map((match) => ({ price: match[1].trim(), note: match[2].trim() }));

describe("alignement des forfaits SaaS entre la landing et /tarifs", () => {
  it("lit les trois forfaits de la landing et les trois cellules de la grille", () => {
    expect([...LANDING_PLANS.keys()]).toEqual([
      "Essentiel",
      "Standard",
      "Partenariat",
    ]);
    expect(GRID_CELLS).toHaveLength(3);
  });

  it.each([
    ["Essentiel", 0],
    ["Standard", 1],
    ["Partenariat", 2],
  ] as const)(
    "fait démarrer la cellule « %s » de la grille au plancher publié par la landing",
    (plan, index) => {
      const landing = LANDING_PLANS.get(plan);
      expect(landing, `${plan} : forfait absent de la landing`).toBeDefined();

      const landingBounds = amountsInThousands((landing as { amount: string }).amount);
      const gridBounds = amountsInThousands(GRID_CELLS[index].price);

      expect(landingBounds.length, `${plan} : landing sans montant lisible`).toBeGreaterThan(0);
      expect(gridBounds.length, `${plan} : grille sans montant lisible`).toBeGreaterThan(0);
      expect(
        Math.min(...gridBounds),
        `${plan} : la grille démarre à ${Math.min(...gridBounds)} k€ et la landing à ${Math.min(...landingBounds)} k€`,
      ).toBe(Math.min(...landingBounds));
    },
  );

  /**
   * Un forfait projet et un abonnement ne se comparent pas. Le Partenariat doit
   * donc porter la même unité de compte des deux côtés — un mensuel, celui que
   * publient déjà /tarifs et l'accueil.
   */
  it("compte le Partenariat en mensuel des deux côtés, jamais en forfait projet", () => {
    const landing = LANDING_PLANS.get("Partenariat");
    expect(landing?.unit).toMatch(/\/\s*mois/);
    expect(landing?.unit).toMatch(/\bHT\b/);
    expect(`${landing?.amount} ${landing?.unit}`).not.toMatch(/à partir de 120/i);

    expect(GRID_CELLS[2].price, "grille : cellule Partenariat non mensuelle").toMatch(
      /€\/m\b/,
    );
    expect(tarifsHtml, "/tarifs republie un forfait projet de 120 k€ pour le co-build").not.toMatch(
      /120 k€ HT<\/b><span>Partenariat/,
    );

    // La carte « Partenariat » de /tarifs reste la référence mensuelle.
    const tarifsPartnership =
      tarifsHtml
        .split('<div class="plan ')
        .slice(1)
        .find((chunk) => chunk.includes("<h3>Partenariat</h3>")) ?? "";
    expect(tarifsPartnership).not.toBe("");
    expect(
      amountsInThousands(
        /<span class="amount">([^<]+)<\/span>/.exec(tarifsPartnership)?.[1] ?? "",
      ),
    ).toEqual(amountsInThousands((landing as { amount: string }).amount));
  });

  /**
   * « Essentiel » et « Standard » nomment sur /tarifs des formats qui couvrent
   * tous les services et démarrent donc plus bas qu'un projet SaaS. Tant que le
   * même nom sert des deux côtés, la page qui invite à comparer doit le dire.
   */
  it("prévient que les cartes homonymes de /tarifs couvrent tous les services", () => {
    const pricingHead =
      /<section class="pricing" id="tarifs">[\s\S]*?<\/div>\s*<\/div>/.exec(bodyHtml)?.[0] ??
      "";
    expect(pricingHead).toContain('<a href="/tarifs">');
    expect(pricingHead).toMatch(/couvrent <b>tous les services<\/b>/);
    expect(pricingHead).toMatch(/15 k€ HT/);

    // Symétriquement, /tarifs dit que ses quatre formats sont transverses.
    expect(tarifsHtml).toMatch(/Ces quatre formats couvrent tous les services/);
  });
});
