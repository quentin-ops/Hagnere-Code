/**
 * Source unique des formulations publiques du Discovery Sprint.
 *
 * Les CGV disposent que « toute réduction ou remise est expressément portée au
 * devis ; aucune autre réduction n'est présumée » (art. Prix et paiement).
 * Aucune surface publique ne peut donc annoncer une déduction inconditionnelle :
 * l'audit de 2026-08 avait relevé six emplacements affirmant « déduit à 100 % »
 * face à quatre emplacements conditionnels, dont deux sur la même page.
 *
 * Toute nouvelle mention de la déduction doit réutiliser une de ces constantes.
 * Le test src/lib/discovery-offer.test.ts interdit les variantes inconditionnelles.
 */

/** Prix public du Discovery Sprint, hors taxes. */
export const DISCOVERY_PRICE_EUR = 1500;

/** Badge court (cellules de tableau, listes de features, KPI). */
export const DISCOVERY_DEDUCTION_SHORT = "Déduit si phase 2 · conditions au devis";

/** Phrase courante dans un paragraphe de vente. */
export const DISCOVERY_DEDUCTION_SENTENCE =
  "Si la phase 2 est lancée avec nous, le devis précise la déduction applicable.";

/** Formulation longue, pour une FAQ ou un bloc de réassurance. */
export const DISCOVERY_DEDUCTION_LONG =
  "La déduction, son délai et les droits de réutilisation sont indiqués dans l'offre de Discovery signée. " +
  "Le format public courant prévoit une déduction lorsque la phase 2 est lancée avec nous, mais seul le devis " +
  "nominatif fixe les conditions et les livrables que vous pourrez remettre à une autre équipe.";
