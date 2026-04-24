import { bodyHtml as rawBody } from "./body";
import { logoWallHtml } from "./sections/logo-wall";
import { proofStripHtml } from "./sections/proof-strip";
import { founderVideoHtml } from "./sections/founder-video";
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
import { teamHtml } from "./sections/team";
import { refuseHtml } from "./sections/refuse";
import { pricingHtml } from "./sections/pricing";
import { trustBadgesHtml } from "./sections/trust-badges";
import { miniAuditHtml } from "./sections/mini-audit";
import { faqHtml } from "./sections/faq";
import { techFaqHtml } from "./sections/tech-faq";
import { ctaFinalHtml } from "./sections/cta-final";

/**
 * Page service Audit technique — layout final (23 sections).
 *
 * Flow complet :
 *   NAV → Breadcrumb → HERO (Tech Debt P&L + Matrice impact/effort) →
 *   LOGO WALL → PROOF STRIP (47 audits · 92 % recos · NPS 72) →
 *   FOUNDER VIDEO (Conflict of Interest) → PROBLEMS (6 triggers business) →
 *   WHAT WE AUDIT (8 dimensions) → DELIVERABLES checklist (12 + 6 extras) →
 *   TIMELINE 10 JOURS → CAPABILITIES 21 briques → METHODOLOGY ECOSYSTEM →
 *   PROCESS 7 étapes → ARSENAL 9 outils → VERTICALS 6 secteurs →
 *   SCENARIOS 5 tabs → DE-RISK 6 peurs → COMPARISON 5 col → TESTIMONIALS →
 *   TEAM 6 auditors → REFUSE 6 missions → PRICING 4 tiers + 6 extras →
 *   TRUST BADGES 8 engagements → MINI-AUDIT interactif → FAQ filtrée →
 *   TECH FAQ 8 Q → CTA FINAL → [SiteFooter React]
 *
 * Le `<!-- CTA -->` du body.ts clone est stripé côté React via `stripFinalCta`.
 * Notre `<!-- ADS CTA FINAL -->` échappe au strip (regex ne matche que "CTA" ou "CTA FINAL").
 */
function compose(raw: string): string {
  let out = raw;

  const atSections = [
    logoWallHtml.trim(),
    proofStripHtml.trim(),
    founderVideoHtml.trim(),
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
    teamHtml.trim(),
    refuseHtml.trim(),
    pricingHtml.trim(),
    trustBadgesHtml.trim(),
    miniAuditHtml.trim(),
    faqHtml.trim(),
    techFaqHtml.trim(),
    ctaFinalHtml.trim(),
  ].join("\n\n");

  out = out.replace(
    /<!-- WHAT WE BUILD -->[\s\S]*?(?=<!-- CTA -->)/,
    atSections + "\n\n",
  );

  return out;
}

export const composedBodyHtml = compose(rawBody);
