import { bodyHtml as rawBody } from "./body";
import { checklistHtml } from "./sections/checklist";
import { integrationsHtml } from "./sections/integrations";
import { securityHtml } from "./sections/security";
import { scenariosHtml } from "./sections/scenarios";
import { architectureHtml } from "./sections/architecture";
import { deriskHtml } from "./sections/derisk";
import { refuseHtml } from "./sections/refuse";
import { trustBadgesHtml } from "./sections/trust-badges";
import { techFaqHtml } from "./sections/tech-faq";
import { comparisonHtml } from "./sections/comparison";
import { timelineHtml } from "./sections/timeline";
import { testimonialsHtml } from "./sections/testimonials";

/**
 * Direction A — page centrée sur "construire un outil interne", pas sur présenter l'agence.
 *
 * Ordre final :
 *   NAV → Breadcrumb → HERO → PROBLEMS → CHECKLIST → USE CASES →
 *   COMPARISON (vs no-code / SaaS / ESN) →
 *   INTEGRATIONS → AUTOMATION BANNER → BRIQUES →
 *   ARCHITECTURE → SECURITY → SCENARIOS →
 *   TIMELINE (semaine 0 → J+90) →
 *   CASE HIGHLIGHT → TESTIMONIALS (+ stats bar) →
 *   PRICING (4 plans avec Audit 990 €) → ROI CALCULATOR →
 *   DE-RISK → REFUSE → TRUST BADGES → FAQ → TECH FAQ → [SiteFooter rendu à part]
 *
 * Notes d'ordonnancement :
 * - SECURITY déplacé après ARCHITECTURE (les deux sombres se suivent mais introduisent le même
 *   univers technique/DSI, au lieu de couper INTEGRATIONS ↔ AUTOMATION par deux sections sombres).
 * - COMPARISON en amont des preuves techniques : c'est la question commerciale qui bloque le plus
 *   tôt dans le parcours, il faut la traiter avant de détailler.
 * - TIMELINE après SCENARIOS : une fois qu'on a choisi son scénario, on veut voir le planning.
 * - TESTIMONIALS après CASE HIGHLIGHT : on confirme par des tiers après avoir montré son propre outil.
 */
function compose(raw: string): string {
  let out = raw;

  // CHECKLIST : entre PROBLEMS et USE CASES
  out = out.replace(
    "<!-- USE CASES (alternating) -->",
    checklistHtml.trim() + "\n\n<!-- USE CASES (alternating) -->",
  );

  // COMPARISON + INTEGRATIONS : entre USE CASES et AUTOMATION BANNER
  out = out.replace(
    "<!-- AUTOMATION BANNER (dark) -->",
    comparisonHtml.trim() +
      "\n\n" +
      integrationsHtml.trim() +
      "\n\n<!-- AUTOMATION BANNER (dark) -->",
  );

  // ARCHITECTURE + SECURITY + SCENARIOS + TIMELINE : entre BRIQUES et CASE HIGHLIGHT
  out = out.replace(
    "<!-- CASE HIGHLIGHT -->",
    architectureHtml.trim() +
      "\n\n" +
      securityHtml.trim() +
      "\n\n" +
      scenariosHtml.trim() +
      "\n\n" +
      timelineHtml.trim() +
      "\n\n<!-- CASE HIGHLIGHT -->",
  );

  // TESTIMONIALS : entre CASE HIGHLIGHT et PRICING
  out = out.replace(
    '<!-- PRICING -->\n<section class="pricing"',
    testimonialsHtml.trim() + '\n\n<!-- PRICING -->\n<section class="pricing"',
  );

  // DE-RISK + REFUSE + TRUST : entre ROI CALCULATOR et FAQ
  out = out.replace(
    "<!-- FAQ -->",
    deriskHtml.trim() +
      "\n\n" +
      refuseHtml.trim() +
      "\n\n" +
      trustBadgesHtml.trim() +
      "\n\n<!-- FAQ -->",
  );

  // TECH FAQ : après FAQ commerciale, avant CTA (qui sera strippé)
  out = out.replace(
    "<!-- CTA -->",
    techFaqHtml.trim() + "\n\n<!-- CTA -->",
  );

  return out;
}

export const composedBodyHtml = compose(rawBody);
