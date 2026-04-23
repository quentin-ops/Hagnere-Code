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
import { techFaqHtml } from "./sections/tech-faq";

/**
 * Direction A — page centrée sur "construire un SaaS", pas sur présenter l'agence.
 * On retire délibérément : Stats, Verticals, Team (agency-wide, présents sur la homepage).
 *
 * Final layout :
 *   NAV → Breadcrumb → HERO →
 *   LOGO WALL (compact) → PROBLEMS (6 douleurs SaaS) →
 *   WHAT WE BUILD (6 cards) → CHECKLIST INCLUS/HORS SCOPE (12 in / 6 out) →
 *   ARCHITECTURE SCHEMATIC → CAPABILITIES (20 briques) →
 *   INTEGRATIONS WALL (6 groupes segmentés) → PROCESS → STACK →
 *   RELATED CASES → SCENARIOS (toggle interactif) → DE-RISK (4 peurs) →
 *   COMPARISON (SaaS-spec) → TESTIMONIALS (SaaS-spec) → REFUSE (ce qu'on ne fait pas) →
 *   PRICING → TRUST BADGES → FAQ commerciale → TECH FAQ (CTO) →
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

  // TECH FAQ : après la FAQ commerciale (avant la CTA qui sera strippée)
  out = out.replace(
    "<!-- CTA -->",
    techFaqHtml.trim() + "\n\n<!-- CTA -->",
  );

  return out;
}

export const composedBodyHtml = compose(rawBody);
