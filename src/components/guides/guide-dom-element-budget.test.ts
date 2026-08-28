import { describe, expect, it } from "vitest";
// Module partagé avec la CLI `node scripts/measure-guide-dom-elements.mjs`,
// pour que la mesure de ce test et celle qui alimente le tableau de référence
// de `docs/dette-technique-duplication-dom.md` ne puissent pas diverger.
import { measureBuiltGuides } from "../../../scripts/measure-guide-dom-elements.mjs";

/**
 * Garde-fou du plafond d'éléments DOM par guide.
 *
 * `docs/dette-technique-duplication-dom.md` fixe un plafond de non-régression
 * et un seuil d'alerte, mais rien ne les vérifiait : la valeur a redérivé en
 * silence entre la rédaction du document (27/08/2026) et le build suivant.
 *
 * Ce qui s'est passé, et pourquoi ce test compte la coquille séparément :
 * le dépassement ne venait d'aucun guide. Les 18 guides ont augmenté du même
 * nombre d'éléments d'un coup, parce que `SiteFooter.tsx` a gagné un repli
 * sans JavaScript et des zones d'accessibilité. Ces ajouts sont légitimes et
 * on ne les retire pas — mais un plafond global seul ne dit pas s'il faut
 * relire un guide ou la coquille. D'où les deux invariants ci-dessous.
 *
 * Le test lit l'artefact de build. Sans `npm run build` préalable, il n'y a
 * rien à mesurer : la suite l'annonce au lieu d'échouer, mais elle échoue
 * réellement dès qu'un build est présent et dépasse le budget.
 */

/**
 * Plafond de non-régression, exprimé en éléments par guide.
 *
 * Le document arrondit le maximum observé au-dessus. Mesure du 28/08/2026,
 * protocole de `docs/dette-technique-duplication-dom.md`, artefact de build :
 * min 1 542, médiane 1 881, max 2 757 (`power-apps-ou-application-sur-mesure`).
 * Le plafond est donc porté de 2 700 à 2 800.
 *
 * Un guide qui le dépasse a ajouté de la structure, pas du contenu : dire
 * laquelle et pourquoi, ou la retirer. Ne relever ce chiffre qu'avec la mesure
 * qui le justifie, et mettre à jour le tableau de référence du document dans
 * le même mouvement (`node scripts/measure-guide-dom-elements.mjs --markdown`).
 */
const GUIDE_ELEMENT_CEILING = 2800;

/**
 * Budget de la coquille partagée, mesurée sur le bloc `<footer>` : 276
 * éléments au 28/08/2026, identiques sur les 18 guides. La marge autorise une
 * évolution mineure du pied de page sans rouvrir ce fichier ; au-delà, c'est
 * la coquille qu'il faut relire, et le décalage se répercutera sur tous les
 * guides à la fois.
 */
const SHARED_FOOTER_ELEMENT_BUDGET = 320;

type GuideMeasure = {
  slug: string;
  elements: number;
  footerElements: number | null;
};

const measures = measureBuiltGuides() as GuideMeasure[];
const hasBuild = measures.length > 0;

describe.skipIf(!hasBuild)("budget d'éléments DOM des guides", () => {
  it("garde chaque guide sous le plafond de non-régression", () => {
    const overBudget = measures
      .filter((guide) => guide.elements > GUIDE_ELEMENT_CEILING)
      .map((guide) => `${guide.slug} : ${guide.elements}`);

    expect(
      overBudget,
      `plafond ${GUIDE_ELEMENT_CEILING} éléments dépassé. Dire quelle structure a été ` +
        "ajoutée et pourquoi, ou la retirer — puis mettre à jour " +
        "docs/dette-technique-duplication-dom.md avec la mesure qui le justifie.",
    ).toEqual([]);
  });

  it("rend la même coquille sur tous les guides, sous son budget", () => {
    const footerCounts = [...new Set(measures.map((g) => g.footerElements))];

    expect(
      footerCounts,
      "le pied de page ne compte pas le même nombre d'éléments selon les guides : " +
        "un rendu conditionnel s'y est glissé, et le budget par guide devient " +
        "illisible.",
    ).toHaveLength(1);

    const footerElements = footerCounts[0];
    expect(footerElements, "aucun bloc <footer> trouvé dans l'artefact").not.toBeNull();
    expect(
      footerElements,
      `la coquille partagée dépasse ${SHARED_FOOTER_ELEMENT_BUDGET} éléments : ` +
        "le surcoût est payé par les 18 guides à la fois, pas par une page.",
    ).toBeLessThanOrEqual(SHARED_FOOTER_ELEMENT_BUDGET);
  });
});
