import { bodyHtml as raw } from "./body";
import { techStackHtml } from "@/components/design-shared/tech-stack";
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
 * La section « Notre stack » est épissée ici, après le chapitre Claude Code :
 * les deux répondent à la même question — avec quels outils vous travaillez —
 * et l'enchaînement va du plus commenté (l'agent IA) au plus vérifiable (les
 * versions et les briques). Elle vient de la page d'accueil, où elle coûtait
 * 1,26 écran à un public qui n'était pas le sien (cf. `tech-stack.ts`).
 */
const withTechStack = raw.replace(
  "<!-- CE QUE VOUS POUVEZ VÉRIFIER",
  `${techStackHtml.trim()}\n\n<!-- CE QUE VOUS POUVEZ VÉRIFIER`,
);

export const pageHtml = stripNav(stripFooter(stripFinalCta(withTechStack)));
