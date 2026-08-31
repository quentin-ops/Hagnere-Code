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
import { perfHtml } from "./sections/perf";

/**
 * Direction A — page centrée sur "faire construire un site vitrine", pas sur
 * présenter l'agence. Les sections Stats et Team, communes à toute l'agence,
 * ne sont pas reprises ici : elles vivent sur la homepage et sur /equipe.
 *
 * La navigation, la CTA finale et le <footer> ne sont plus dans body.ts :
 * <MainNav /> et <SiteFooter /> les rendent hors du landmark <main>.
 *
 * Ordre de scroll réel :
 *   Breadcrumb → HERO →
 *   LOGO WALL (produits du groupe, qualifié) → PROBLEMS →
 *   WHAT WE BUILD → CHECKLIST INCLUS/HORS SCOPE →
 *   ARCHITECTURE SCHEMATIC → CAPABILITIES →
 *   PERF (budget de performance) → INTEGRATIONS WALL (segmenté) →
 *   PROCESS → STACK → RELATED CASES →
 *   SCENARIOS (toggle interactif) → DE-RISK →
 *   COMPARISON → TESTIMONIALS → REFUSE (cas propres au vitrine) →
 *   PRICING → TRUST BADGES → FAQ (commerciale + technique, fusionnées) →
 *   [SiteFooter React rendu à part]
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

  // PERF (unique to sites vitrines) : juste après "CAPABILITIES", avant "PROCESS"
  // Performance is the hero value prop → put it early, right after capabilities.
  out = out.replace(
    integrationsHtml.trim() + "\n\n<!-- PROCESS -->",
    perfHtml.trim() +
      "\n\n" +
      integrationsHtml.trim() +
      "\n\n<!-- PROCESS -->",
  );

  // SCENARIOS + DE-RISK + COMPARISON + TESTIMONIALS + REFUSE
  // « sv-verticals » retiré : « sv-problems » (six situations) et « sv-scenarios »
  // (trois situations, trois chemins) font déjà ce travail d'orientation, et une
  // liste de verticales contredit le positionnement « pas une agence sectorielle ».
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

  // Les questions techniques (ex-section « sv-tfaq ») ont été fusionnées dans
  // la FAQ unique de body.ts : deux FAQ successives obligeaient à parcourir la
  // première en entier pour découvrir la seconde. Le module sections/tech-faq.ts
  // reste en place, référencé par le contrat d'accordéons de publicite-en-ligne.
  out = out.trimEnd() + "\n";

  return out;
}

export const composedBodyHtml = compose(rawBody);
