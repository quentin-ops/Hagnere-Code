import { bodyHtml as rawBody } from "./body";
import { logoWallHtml } from "./sections/logo-wall";
import { checklistHtml } from "./sections/checklist";
import { architectureHtml } from "./sections/architecture";
import { integrationsHtml } from "./sections/integrations";
import { mobileAppHtml } from "./sections/mobile-app";
import { aiAutomationsHtml } from "./sections/ai-automations";
import { scenariosHtml } from "./sections/scenarios";
import { migrationHtml } from "./sections/migration";
import { gmvCalculatorHtml } from "./sections/gmv-calculator";
import { shopifyTruthsHtml } from "./sections/shopify-truths";
import { comparisonHtml } from "./sections/comparison";
import { deriskHtml } from "./sections/derisk";
import { complianceHtml } from "./sections/compliance";
import { refuseHtml } from "./sections/refuse";
import { trustBadgesHtml } from "./sections/trust-badges";
import { testimonialsHtml } from "./sections/testimonials";
import { techFaqHtml } from "./sections/tech-faq";
import { ecommerceFaqSectionHtml } from "./faq-content";

/**
 * Direction A — page centrée sur "créer votre boutique e-commerce", pas sur présenter l'agence.
 *
 * Sections d'origine conservées dans body.ts :
 *   NAV · Breadcrumb · HERO (visuel storefront + mobile) · PROBLEMS (6 cards) ·
 *   WHAT WE BUILD (6 blocs) · PROCESS (6 étapes) · STACK · PRICING (3 forfaits) · FAQ · CTA (strippée)
 *
 * Sections ajoutées (17, toutes e-commerce-spécifiques) :
 *   Logo wall · Checklist inclus/hors scope · Architecture schematic · Integrations FR segmenté ·
 *   Mobile app dédiée · AI automations dédiée · Scenarios interactifs · Migration zero-downtime ·
 *   GMV Calculator interactif · Shopify Truths · Comparison plateformes · De-risk 4 peurs ·
 *   Compliance 2026 FR · Refuse · Trust badges · Testimonials · Tech FAQ
 *
 * Ordre final de scroll (22 sections) :
 *   NAV → HERO → LOGO WALL → PROBLEMS → WHAT WE BUILD → CHECKLIST →
 *   ARCHITECTURE → INTEGRATIONS → MOBILE APP → AI AUTOMATIONS →
 *   PROCESS → STACK → SCENARIOS → MIGRATION → GMV CALCULATOR →
 *   SHOPIFY TRUTHS → COMPARISON → DE-RISK → COMPLIANCE →
 *   PRICING → TESTIMONIALS → REFUSE → TRUST BADGES → FAQ → TECH FAQ →
 *   [SiteFooter React]
 */
function compose(raw: string): string {
  let out = raw;

  // Le contenu visible et le JSON-LD utilisent la même source structurée.
  // Le bloc historique du template est remplacé avant toute autre insertion.
  // body.ts se termine désormais sur ce marqueur : la CTA finale et le
  // <footer> hérités en ont été retirés, ils sont rendus par <SiteFooter />.
  out = out.replace(
    /<!-- FAQ -->[\s\S]*$/,
    ecommerceFaqSectionHtml.trim() + "\n",
  );

  // Logo wall + Problems ordering: logo wall goes right after HERO, before PROBLEMS.
  // Problems is already in body.ts. We insert the logo wall before it.
  out = out.replace(
    "<!-- PROBLEMS -->",
    logoWallHtml.trim() + "\n\n<!-- PROBLEMS -->",
  );

  // Checklist + Architecture + Integrations + Mobile + AI : entre WHAT WE BUILD et PROCESS
  out = out.replace(
    "<!-- PROCESS -->",
    checklistHtml.trim() +
      "\n\n" +
      architectureHtml.trim() +
      "\n\n" +
      integrationsHtml.trim() +
      "\n\n" +
      mobileAppHtml.trim() +
      "\n\n" +
      aiAutomationsHtml.trim() +
      "\n\n<!-- PROCESS -->",
  );

  // Scenarios + Migration + GMV Calc + Shopify Truths + Comparison + De-risk + Compliance : entre STACK et PRICING
  out = out.replace(
    "<!-- PRICING -->",
    scenariosHtml.trim() +
      "\n\n" +
      migrationHtml.trim() +
      "\n\n" +
      gmvCalculatorHtml.trim() +
      "\n\n" +
      shopifyTruthsHtml.trim() +
      "\n\n" +
      comparisonHtml.trim() +
      "\n\n" +
      deriskHtml.trim() +
      "\n\n" +
      complianceHtml.trim() +
      "\n\n<!-- PRICING -->",
  );

  // Testimonials + Refuse + Trust badges : entre PRICING et FAQ
  out = out.replace(
    "<!-- FAQ -->",
    testimonialsHtml.trim() +
      "\n\n" +
      refuseHtml.trim() +
      "\n\n" +
      trustBadgesHtml.trim() +
      "\n\n<!-- FAQ -->",
  );

  // TECH FAQ : dernière section du document. La CTA finale et le <footer>
  // hérités ont été retirés de body.ts — ils sont rendus par <SiteFooter />.
  out = out.trimEnd() + "\n\n" + techFaqHtml.trim() + "\n";

  return out;
}

export const composedBodyHtml = compose(rawBody);
