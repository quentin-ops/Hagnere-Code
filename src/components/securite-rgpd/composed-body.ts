import { bodyHtml as rawBody } from "./body";
import { logoWallHtml } from "./sections/logo-wall";
import { symptomsHtml } from "./sections/symptoms";
import { matrixHtml } from "./sections/matrix";
import { riskRadarHtml } from "./sections/risk-radar";
import { processHtml } from "./sections/process";
import { comparisonHtml } from "./sections/comparison";
import { checklistHtml } from "./sections/checklist";
import { pricingHtml } from "./sections/pricing";
import { testimonialsHtml } from "./sections/testimonials";
import { trustBadgesHtml } from "./sections/trust-badges";
import { refuseHtml } from "./sections/refuse";
import { faqHtml } from "./sections/faq";
import { techFaqHtml } from "./sections/tech-faq";
import { relatedServicesHtml } from "./sections/related-services";

/**
 * Direction A — page centrée sur "Sécurité & RGPD" (audit + suivi + remédiation codée).
 *
 * Ordre des sections (avant le SiteFooter injecté en React) :
 *   NAV → HERO (cartographie sous-traitants, body.ts)
 *   → LOGO WALL + TRUST STRIP (NDA mutuel, DPA art. 28, sous-traitants UE, ISO 27001 aligné)
 *   → SYMPTÔMES (6 phrases CTO/DPO/CEO/DAF/RH avec réponses concrètes)
 *   → MATRICE 4 DOMAINES (RGPD · AI Act · Cyber · suivi récurrent)
 *   → RISK RADAR (décisions CNIL publiques et sourcées + effets à prouver)
 *   → PROCESS TRIO (cadrage / suivi technique / remédiation codée)
 *   → COMPARATIF (vs cabinet juridique pur, vs cabinet cyber pur)
 *   → CHECKLIST (inclus / hors scope)
 *   → PRICING (4 cards : cadrage / suivi Starter / suivi Scale / sprint dev)
 *   → TESTIMONIALS · TRUST BADGES · REFUSE · FAQ · TECH FAQ · SERVICES LIÉS
 *   → [CTA/FOOTER strippés → SiteFooter React]
 */
function compose(raw: string): string {
  let out = raw;

  // Ordre repensé post-audit :
  // - Refuse déplacé AVANT pricing (section à fort effet de sélectivité)
  // - Trust badges restent APRÈS pricing (rassurent après voir les prix)
  const stack = [
    logoWallHtml.trim(),
    symptomsHtml.trim(),
    matrixHtml.trim(),
    riskRadarHtml.trim(),
    processHtml.trim(),
    comparisonHtml.trim(),
    checklistHtml.trim(),
    refuseHtml.trim(),
    pricingHtml.trim(),
    testimonialsHtml.trim(),
    trustBadgesHtml.trim(),
    faqHtml.trim(),
    techFaqHtml.trim(),
    relatedServicesHtml.trim(),
  ].join("\n\n");

  out = out.trimEnd() + "\n\n" + stack + "\n";

  return out;
}

export const composedBodyHtml = compose(rawBody);
