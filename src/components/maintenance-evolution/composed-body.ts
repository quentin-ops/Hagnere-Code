import { bodyHtml as rawBody } from "./body";
import { logoWallHtml } from "./sections/logo-wall";
import { proofStripHtml } from "./sections/proof-strip";
import { founderVideoHtml } from "./sections/founder-video";
import { problemsHtml } from "./sections/problems";
import { whatWeDoHtml } from "./sections/what-we-do";
import { checklistHtml } from "./sections/checklist";
import { miniAuditHtml } from "./sections/mini-audit";
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
import { faqHtml } from "./sections/faq";
import { techFaqHtml } from "./sections/tech-faq";
import { relatedServicesHtml } from "./sections/related-services";
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
 *   PRICING (porte d'entrée + 3 forfaits de run) →
 *   TRUST BADGES → FAQ 12 Q → TECH FAQ 8 Q → SERVICES LIÉS → CTA FINAL M&E →
 *   [SiteFooter React]
 *
 * Aucun montant n'est recopié dans ce commentaire : la seule source des prix
 * publiés est `sections/pricing.ts`. Les recopier ici les fait dériver.
 *
 * La CTA finale héritée a été retirée de body.ts : la seule CTA rendue est
 * `<!-- ADS CTA FINAL -->`, qui échappe volontairement à `stripFinalCta`.
 */
function compose(raw: string): string {
  let out = raw;

  const meSections = [
    logoWallHtml.trim(),
    proofStripHtml.trim(),
    founderVideoHtml.trim(),
    problemsHtml.trim(),
    whatWeDoHtml.trim(),
    checklistHtml.trim(),
    miniAuditHtml.trim(),
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
    faqHtml.trim(),
    techFaqHtml.trim(),
    relatedServicesHtml.trim(),
    ctaFinalHtml.trim(),
  ].join("\n\n");

  out = out.replace(
    /<!-- WHAT WE BUILD -->[\s\S]*$/,
    meSections + "\n\n",
  );

  return out;
}

export const composedBodyHtml = compose(rawBody);
