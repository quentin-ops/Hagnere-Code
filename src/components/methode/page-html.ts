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
 *
 * La bande à logos `techStackHtml`, épissée ici depuis le 28/08/2026, a été
 * retirée le 31/08/2026 : /equipe publiait déjà le même inventaire d'outils
 * en huit rangées, si bien que deux pages de conversion consacraient chacune
 * un grand écran à la même liste, dans deux traitements graphiques différents.
 * L'inventaire reste sur /equipe, où il répond à une question réelle — qui
 * sait faire quoi. `body.ts` porte désormais un `#stack` court : quatre choix
 * de stack et leur raison, avec un renvoi vers /equipe. Plus rien n'est épissé
 * ici, d'où le `raw` passé directement aux strips.
 */
export const pageHtml = stripNav(stripFooter(stripFinalCta(raw)));
