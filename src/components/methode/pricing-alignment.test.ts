import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

import { bodyHtml } from "./body";

/**
 * `/methode` publie quatre « repères repris de la grille tarifaire ». Trois
 * plafonnaient la moitié en dessous du périmètre qu'ils décrivaient : « Outil
 * interne 8–25 k€ · process ciblé → CRM/ERP léger » quand le CRM/ERP léger est
 * publié à 25–50 k€, « MVP SaaS 15–30 k€ · 3–5 → 10–15 écrans » quand le
 * périmètre 10–15 écrans est publié à 30–60 k€, « Refonte e-commerce
 * 30–70 k€ · multi-canal → B2B multi-pays » quand le B2B multi-pays est publié
 * à 70–120 k€. Le prospect ancrait un budget deux fois inférieur au devis.
 *
 * Ce test relie chaque repère aux deux forfaits que sa légende nomme, tels
 * qu'ils sont publiés sur la page service correspondante : le plancher du
 * repère est le plancher du forfait d'entrée cité, son plafond est le plafond
 * du forfait haut cité. Toute dérive d'un côté ou de l'autre le fait échouer.
 *
 * Convention du site : `/tarifs` affiche un montant par colonne (le point
 * d'entrée du palier), la page service publie la fourchette complète du même
 * palier. C'est la page service qui fait foi pour une fourchette.
 */

const read = (relative: string) =>
  readFileSync(join(process.cwd(), relative), "utf8");

type Scope = {
  /** Libellé du repère sur /methode. */
  marker: string;
  /** Page service qui publie les fourchettes de référence. */
  reference: string;
  /** Forfait d'entrée nommé par la légende du repère. */
  floorPlan: string;
  /** Forfait haut nommé par la légende du repère. */
  ceilingPlan: string;
};

const SCOPES: Scope[] = [
  {
    marker: "Site vitrine",
    reference: "src/components/sites-vitrines/body.ts",
    floorPlan: "Essentiel",
    ceilingPlan: "Performance",
  },
  {
    marker: "Outil interne",
    reference: "src/components/outils-internes/body.ts",
    floorPlan: "Starter",
    ceilingPlan: "Pro",
  },
  {
    marker: "MVP SaaS B2B",
    reference: "src/components/saas-applications/body.ts",
    floorPlan: "Essentiel",
    ceilingPlan: "Standard",
  },
  {
    marker: "Refonte e-commerce",
    reference: "src/components/ecommerce/body.ts",
    floorPlan: "Refonte + App mobile",
    ceilingPlan: "B2B + B2C + multi-pays",
  },
];

/**
 * Montants d'une étiquette de prix, exprimés en milliers d'euros.
 * « 8–15 k€ » → [8, 15] ; « à partir de 6 900 € » → [6.9].
 * Une étiquette sans chiffre (« Sur-mesure ») renvoie une liste vide.
 */
function amountsInThousands(label: string): number[] {
  const glued = label.replace(/(?<=\d)[\s  ](?=\d)/g, "");
  const numbers = [...glued.matchAll(/\d+(?:[,.]\d+)?/g)].map((match) =>
    Number(match[0].replace(",", ".")),
  );
  if (numbers.length === 0) return [];
  return label.includes("k€")
    ? numbers
    : numbers.map((value) => value / 1000);
}

/** Montant affiché par chaque forfait d'une page service, par nom de forfait. */
function planAmounts(source: string): Map<string, number[]> {
  const plans = new Map<string, number[]>();
  for (const chunk of source.split(/<div class="plan[ "]/).slice(1)) {
    const name = /<h3>([\s\S]*?)<\/h3>/.exec(chunk)?.[1]?.trim();
    const amount = /<span class="amount">([\s\S]*?)<\/span>/.exec(chunk)?.[1];
    if (name && amount !== undefined && !plans.has(name)) {
      plans.set(name, amountsInThousands(amount));
    }
  }
  return plans;
}

const markers = new Map(
  [
    ...bodyHtml.matchAll(
      /<div class="mfinal-fourchette-name">([^<]+)<\/div>\s*<div class="mfinal-fourchette-price">([^<]+)<\/div>/g,
    ),
  ].map((match) => [match[1].trim(), match[2].trim()] as const),
);

describe("repères de prix de /methode", () => {
  it("publie exactement les quatre repères attendus", () => {
    expect([...markers.keys()]).toEqual(SCOPES.map((scope) => scope.marker));
  });

  it("annonce que les repères viennent de la grille tarifaire, en HT", () => {
    expect(bodyHtml).toMatch(/Repères repris de la <a href="\/tarifs">grille tarifaire<\/a>/);
    expect(bodyHtml).toMatch(/en euros HT/);
    expect(bodyHtml).toMatch(/EXEMPLES INDICATIFS/);
  });

  it.each(SCOPES)(
    "aligne le repère « $marker » sur les forfaits $floorPlan → $ceilingPlan",
    ({ marker, reference, floorPlan, ceilingPlan }) => {
      const label = markers.get(marker);
      expect(label, `repère « ${marker} » absent de /methode`).toBeDefined();

      const bounds = amountsInThousands(label as string);
      expect(bounds, `repère « ${marker} » : fourchette illisible`).toHaveLength(
        2,
      );

      const plans = planAmounts(read(reference));
      const floor = plans.get(floorPlan);
      const ceiling = plans.get(ceilingPlan);
      expect(floor, `${reference} : forfait « ${floorPlan} » introuvable`)
        .toBeDefined();
      expect(ceiling, `${reference} : forfait « ${ceilingPlan} » introuvable`)
        .toBeDefined();
      expect((floor as number[]).length).toBeGreaterThan(0);
      expect((ceiling as number[]).length).toBeGreaterThan(0);

      expect(
        bounds[0],
        `« ${marker} » : le plancher doit être celui du forfait « ${floorPlan} »`,
      ).toBe(Math.min(...(floor as number[])));
      expect(
        bounds[1],
        `« ${marker} » : le plafond doit être celui du forfait « ${ceilingPlan} »`,
      ).toBe(Math.max(...(ceiling as number[])));
      expect(bounds[1]).toBeGreaterThan(bounds[0]);
    },
  );
});
