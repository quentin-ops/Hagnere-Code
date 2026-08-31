import { bodyHtml as rawBody } from "./body";
import { logoWallHtml } from "./sections/logo-wall";
import { problemsHtml } from "./sections/problems";
import { checklistHtml } from "./sections/checklist";
import { architectureHtml } from "./sections/architecture";
import { integrationsHtml } from "./sections/integrations";
import { scenariosHtml } from "./sections/scenarios";
import { deriskHtml } from "./sections/derisk";
import { comparisonHtml } from "./sections/comparison";
import { testimonialsHtml } from "./sections/testimonials";
import { refuseHtml } from "./sections/refuse";
import { trustBadgesHtml } from "./sections/trust-badges";

/**
 * Direction A — page centrée sur "construire un SaaS", pas sur présenter l'agence.
 * Les sections Stats, Verticals et Team, communes à toute l'agence, ne sont pas
 * reprises ici : elles vivent sur la homepage et sur /equipe.
 *
 * La navigation, la CTA finale et le <footer> ne sont plus dans body.ts :
 * <MainNav /> et <SiteFooter /> les rendent hors du landmark <main>.
 *
 * L'ORDRE des sections vit dans la composition ci-dessous, et lui seul fait
 * foi. L'énumération en prose qui figurait ici a été retirée : elle dérive à
 * chaque passe et se met à décrire une page qui n'existe plus.
 *
 * Décision de la passe UX du 28/08/2026 :
 *   - Les deux FAQ consécutives n'en font plus qu'une. Les huit questions
 *     techniques sont dans `body.ts`, introduites par un `h3.faq-subhead`
 *     « — Pour les profils techniques », suivi de la réserve qui les
 *     accompagnait dans l'ancienne section : « Les réponses ci-dessous
 *     décrivent notre méthode ; les choix finaux dépendent du contexte. »
 *     Sans elle, huit descriptions de méthode se lisaient comme huit
 *     engagements.
 *   - `sections/tech-faq.ts` a été supprimé après vérification, question par
 *     question, que rien ne manquait dans la FAQ d'accueil.
 */
function compose(raw: string): string {
  let out = raw;

  // LOGO WALL + PROBLEMS : juste après le hero, avant "WHAT WE BUILD"
  out = out.replace(
    "<!-- WHAT WE BUILD -->",
    logoWallHtml.trim() +
      "\n\n" +
      problemsHtml.trim() +
      "\n\n<!-- WHAT WE BUILD -->",
  );

  // CHECKLIST + ARCHITECTURE : entre "WHAT WE BUILD" et "CAPABILITIES"
  out = out.replace(
    "<!-- CAPABILITIES (dark) -->",
    checklistHtml.trim() +
      "\n\n" +
      architectureHtml.trim() +
      "\n\n<!-- CAPABILITIES (dark) -->",
  );

  // INTEGRATIONS : entre "CAPABILITIES" et "PROCESS"
  out = out.replace(
    "<!-- PROCESS -->",
    integrationsHtml.trim() + "\n\n<!-- PROCESS -->",
  );

  // SCENARIOS + DE-RISK + COMPARISON + TESTIMONIALS + REFUSE : entre "RELATED CASES" et "PRICING"
  out = out.replace(
    "<!-- PRICING -->",
    scenariosHtml.trim() +
      "\n\n" +
      deriskHtml.trim() +
      "\n\n" +
      comparisonHtml.trim() +
      "\n\n" +
      testimonialsHtml.trim() +
      "\n\n" +
      refuseHtml.trim() +
      "\n\n<!-- PRICING -->",
  );

  // TRUST BADGES : entre "PRICING" et "FAQ"
  out = out.replace(
    "<!-- FAQ -->",
    trustBadgesHtml.trim() + "\n\n<!-- FAQ -->",
  );

  // La FAQ technique n'est plus une section à part : ses huit questions ont été
  // déplacées en fin de `.faq-list` dans body.ts, sous l'intertitre
  // « — Pour les profils techniques ». Deux FAQ à la suite obligeaient à
  // parcourir la première en entier pour découvrir la seconde.
  // Le module `sections/tech-faq.ts` reste sur disque : il est listé en dur
  // dans `publicite-en-ligne/faq-accordion-contract.test.ts`, hors périmètre.
  out = out.trimEnd() + "\n";

  return out;
}

export const composedBodyHtml = compose(rawBody);
