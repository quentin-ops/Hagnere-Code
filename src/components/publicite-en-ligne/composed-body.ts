import { bodyHtml as rawBody } from "./body";
import { logoWallHtml } from "./sections/logo-wall";
import { problemsHtml } from "./sections/problems";
import { whatWeDoHtml } from "./sections/what-we-do";
import { checklistHtml } from "./sections/checklist";
import { trackingSchemaHtml } from "./sections/tracking-schema";
import { capabilitiesHtml } from "./sections/capabilities";
import { roiDashboardHtml } from "./sections/roi-dashboard";
import { integrationsHtml } from "./sections/integrations";
import { processHtml } from "./sections/process";
import { arsenalHtml } from "./sections/arsenal";
import { verticalsHtml } from "./sections/verticals";
import { scenariosHtml } from "./sections/scenarios";
import { deriskHtml } from "./sections/derisk";
import { comparisonHtml } from "./sections/comparison";
import { testimonialsHtml } from "./sections/testimonials";
import { refuseHtml } from "./sections/refuse";
import { pricingHtml } from "./sections/pricing";
import { trustBadgesHtml } from "./sections/trust-badges";
import { faqHtml } from "./sections/faq";
import { techFaqHtml } from "./sections/tech-faq";
import { ctaFinalHtml } from "./sections/cta-final";

/**
 * Page service Publicité en ligne — layout final.
 *
 * Full flow :
 *   NAV → Breadcrumb → HERO (Looker Studio + Meta Ads Manager) →
 *   LOGO WALL → PROBLEMS → WHAT WE DO → CHECKLIST → TRACKING SCHEMA →
 *   CAPABILITIES → ROI DASHBOARD → ECOSYSTEM → PROCESS → ARSENAL → VERTICALS →
 *   SCENARIOS 4 tabs → DE-RISK → COMPARISON → TESTIMONIALS → REFUSE →
 *   PRICING (Audit 1 500 € + Starter 1 800 € / Scale 3 500 € / Premium 4 500 €) →
 *   TRUST BADGES → FAQ commerciale (12 Q) → TECH FAQ (8 Q techniques) →
 *   CTA FINAL Ads → [SiteFooter React]
 *
 * Le `<!-- CTA -->` du body.ts (SEO) est stripé côté React via `stripFinalCta`.
 * Notre `<!-- ADS CTA FINAL -->` échappe au strip (regex ne matche que "CTA" ou "CTA FINAL").
 */
function compose(raw: string): string {
  let out = raw;

  const adsSections = [
    logoWallHtml.trim(),
    problemsHtml.trim(),
    whatWeDoHtml.trim(),
    checklistHtml.trim(),
    trackingSchemaHtml.trim(),
    capabilitiesHtml.trim(),
    roiDashboardHtml.trim(),
    integrationsHtml.trim(),
    processHtml.trim(),
    arsenalHtml.trim(),
    verticalsHtml.trim(),
    scenariosHtml.trim(),
    deriskHtml.trim(),
    comparisonHtml.trim(),
    testimonialsHtml.trim(),
    refuseHtml.trim(),
    pricingHtml.trim(),
    trustBadgesHtml.trim(),
    faqHtml.trim(),
    techFaqHtml.trim(),
    ctaFinalHtml.trim(),
  ].join("\n\n");

  out = out.replace(
    /<!-- WHAT WE BUILD -->[\s\S]*?(?=<!-- CTA -->)/,
    adsSections + "\n\n",
  );

  return out;
}

export const composedBodyHtml = compose(rawBody);
