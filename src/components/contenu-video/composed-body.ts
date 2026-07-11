import { bodyHtml as rawBody } from "./body";
import { logoWallHtml } from "./sections/logo-wall";
import { problemsHtml } from "./sections/problems";
import { whatWeProduceHtml } from "./sections/what-we-produce";
import { pipelineHtml } from "./sections/pipeline";
import { processHtml } from "./sections/process";
import { stackHtml } from "./sections/stack";
import { scenariosHtml } from "./sections/scenarios";
import { checklistHtml } from "./sections/checklist";
import { pricingHtml } from "./sections/pricing";
import { testimonialsHtml } from "./sections/testimonials";
import { trustBadgesHtml } from "./sections/trust-badges";
import { refuseHtml } from "./sections/refuse";
import { faqHtml } from "./sections/faq";
import { techFaqHtml } from "./sections/tech-faq";

/**
 * Direction A — page centrée sur "production de contenu & vidéo".
 *
 * Ordre des sections (avant le SiteFooter injecté en React) :
 *   NAV → HERO (body.ts)
 *   → LOGO WALL → PROBLEMS (6 quotes) → WHAT WE PRODUCE (bento)
 *   → PIPELINE IA (2 voies : vous tournez / on s'occupe de tout)
 *   → PROCESS (roadmap éditoriale) → STACK & STUDIO
 *   → SCÉNARIOS (3 packs interactifs) → CHECKLIST (inclus / hors scope)
 *   → PRICING (4 cards) → TESTIMONIALS → TRUST BADGES
 *   → CE QU'ON REFUSE → FAQ commerciale → TECH/PROD FAQ
 *   → [CTA/FOOTER strippés → SiteFooter React]
 */
function compose(raw: string): string {
  let out = raw;

  const stack = [
    logoWallHtml.trim(),
    problemsHtml.trim(),
    whatWeProduceHtml.trim(),
    pipelineHtml.trim(),
    processHtml.trim(),
    stackHtml.trim(),
    scenariosHtml.trim(),
    checklistHtml.trim(),
    pricingHtml.trim(),
    testimonialsHtml.trim(),
    trustBadgesHtml.trim(),
    refuseHtml.trim(),
    faqHtml.trim(),
    techFaqHtml.trim(),
  ].join("\n\n");

  out = out.replace(
    "<!-- CTA -->",
    stack + "\n\n<!-- CTA -->",
  );

  return out;
}

export const composedBodyHtml = compose(rawBody);
