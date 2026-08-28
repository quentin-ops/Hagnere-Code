import { bodyHtml as raw } from "./body";
import {
  stripFooter,
  stripFinalCta,
  stripNav,
} from "@/components/design-shared/stripBody";

/**
 * HTML réellement injecté dans <main> sur /methode.
 *
 * Isolé du composant pour qu'un test puisse asserter sur ce qui atteint
 * l'utilisateur, et non sur `body.ts` brut : `stripFinalCta` supprime toute
 * section introduite par un marqueur `<!-- CTA FINAL -->` placée en fin de
 * document. La page se termine volontairement par un bloc « budgets repères et
 * prochaine étape » qui doit survivre, d'où son marqueur `<!-- CLOTURE
 * METHODE ... -->`.
 */
export const pageHtml = stripNav(stripFooter(stripFinalCta(raw)));
