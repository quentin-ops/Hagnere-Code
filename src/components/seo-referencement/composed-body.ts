import { bodyHtml as rawBody } from "./body";
import { logoWallHtml } from "./sections/logo-wall";
import { problemsHtml } from "./sections/problems";
import { checklistHtml } from "./sections/checklist";
import { serpAnatomyHtml } from "./sections/serp-anatomy";
import { arsenalHtml } from "./sections/arsenal";
import { integrationsHtml } from "./sections/integrations";
import { scenariosHtml } from "./sections/scenarios";
import { deriskHtml } from "./sections/derisk";
import { comparisonHtml } from "./sections/comparison";
import { testimonialsHtml } from "./sections/testimonials";
import { refuseHtml } from "./sections/refuse";
import { trustBadgesHtml } from "./sections/trust-badges";
import { techFaqHtml } from "./sections/tech-faq";
import { verticalsHtml } from "./sections/verticals";
import { perfHtml } from "./sections/perf";

/**
 * Page service SEO & référencement — layout centré sur preuve chiffrée + scénarios.
 *
 * Final layout :
 *   NAV → Breadcrumb → HERO (Search Console + Ahrefs mockups) →
 *   LOGO WALL → PROBLEMS (6 douleurs SEO) →
 *   WHAT WE LIVRE (8 services SEO) → CHECKLIST INCLUS/HORS SCOPE →
 *   ARCHITECTURE → CAPABILITIES (21 briques SEO) →
 *   ROI SEO (dial +187% + 4 KPIs + "comment on y arrive") →
 *   INTEGRATIONS (outils SEO) → PROCESS (6 étapes SEO) → STACK (outils pro) →
 *   RELATED CASES → VERTICALS (6 secteurs) →
 *   SCENARIOS (4 chemins : invisible / update / inbound / local) →
 *   DE-RISK (4 peurs SEO) → COMPARISON (Low-cost / Grande agence / Nous / DIY) →
 *   TESTIMONIALS → REFUSE → PRICING (Audit 2 400 € + 3 retainers) →
 *   TRUST BADGES → FAQ (12 questions SEO) → TECH FAQ →
 *   [SiteFooter React rendu à part]
 */
function compose(raw: string): string {
  let out = raw;

  // Remove the default STACK section (tech orbit) — not relevant for an SEO page.
  // Replaced by `arsenalHtml` (our actual SEO tool kit), injected below.
  out = out.replace(
    /<!-- STACK -->[\s\S]*?(?=<!-- RELATED CASES -->)/,
    arsenalHtml.trim() + "\n\n",
  );

  // LOGO WALL + PROBLEMS : juste après le hero, avant "WHAT WE BUILD"
  out = out.replace(
    "<!-- WHAT WE BUILD -->",
    logoWallHtml.trim() +
      "\n\n" +
      problemsHtml.trim() +
      "\n\n<!-- WHAT WE BUILD -->",
  );

  // CHECKLIST + SERP ANATOMY (remplace l'architecture SaaS générique) : entre "WHAT WE BUILD" et "CAPABILITIES"
  out = out.replace(
    "<!-- CAPABILITIES (dark) -->",
    checklistHtml.trim() +
      "\n\n" +
      serpAnatomyHtml.trim() +
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

  // VERTICALS + SCENARIOS + DE-RISK + COMPARISON + TESTIMONIALS + REFUSE
  out = out.replace(
    "<!-- PRICING -->",
    verticalsHtml.trim() +
      "\n\n" +
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
