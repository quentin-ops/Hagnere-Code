import { bodyHtml as rawBody } from "./body";
import { logoWallHtml } from "./sections/logo-wall";
import { problemsHtml } from "./sections/problems";
import { whatWeDoHtml } from "./sections/what-we-do";
import { checklistHtml } from "./sections/checklist";
import { roiDashboardHtml } from "./sections/roi-dashboard";
import { capabilitiesHtml } from "./sections/capabilities";
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
 * Page service Maintenance & évolution — layout final.
 *
 * Flow complet :
 *   NAV → Breadcrumb → HERO (Prod Health Board + Changelog) →
 *   LOGO WALL → PROBLEMS → WHAT WE DO → CHECKLIST →
 *   SLA DASHBOARD (uptime + DORA) → CAPABILITIES 21 → ECOSYSTEM 3 stations →
 *   PROCESS 7 étapes → ARSENAL 9 outils → VERTICALS 6 secteurs →
 *   SCENARIOS 4 tabs → DE-RISK → COMPARISON 5 colonnes →
 *   TESTIMONIALS → REFUSE →
 *   PRICING (Audit 2 000 € + Essentiel 2 500 € / Scale 6 500 € / Premium 14 000 €) →
 *   TRUST BADGES → FAQ 12 Q → TECH FAQ 8 Q → CTA FINAL M&E →
 *   [SiteFooter React]
 *
 * Le `<!-- CTA -->` du body.ts clone est stripé côté React via `stripFinalCta`.
 * Notre `<!-- ADS CTA FINAL -->` échappe au strip (regex ne matche que "CTA" ou "CTA FINAL").
 */
function compose(raw: string): string {
  let out = raw;

  const meSections = [
    logoWallHtml.trim(),
    problemsHtml.trim(),
    whatWeDoHtml.trim(),
    checklistHtml.trim(),
    roiDashboardHtml.trim(),
    capabilitiesHtml.trim(),
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
    meSections + "\n\n",
  );

  return out;
}

export const composedBodyHtml = compose(rawBody);
