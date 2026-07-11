import { bodyHtml as rawBody } from "./body";
import { logoWallHtml } from "./sections/logo-wall";
import { symptomsHtml } from "./sections/symptoms";
import { matrixHtml } from "./sections/matrix";
import { processHtml } from "./sections/process";
import { comparisonHtml } from "./sections/comparison";
import { riskRadarHtml } from "./sections/risk-radar";
import { checklistHtml } from "./sections/checklist";
import { pricingHtml } from "./sections/pricing";
import { testimonialsHtml } from "./sections/testimonials";
import { trustBadgesHtml } from "./sections/trust-badges";
import { refuseHtml } from "./sections/refuse";
import { faqHtml } from "./sections/faq";
import { techFaqHtml } from "./sections/tech-faq";

/**
 * Direction A — page centrée sur "Sécurité & RGPD" (DPO + audit + remédiation codée).
 *
 * Ordre des sections (avant le SiteFooter injecté en React) :
 *   NAV → HERO (cartographie sous-traitants, body.ts)
 *   → LOGO WALL + TRUST STRIP (NDA mutuel, DPA art. 28, sous-traitants UE, ISO 27001 aligné)
 *   → SYMPTÔMES (6 phrases CTO/DPO/CEO/DAF/RH avec réponses concrètes)
 *   → MATRICE 4 DOMAINES (RGPD · AI Act · Cyber · DPO)
 *   → PROCESS TRIO (cadrage / DPO mensuel / remédiation codée)
 *   → COMPARATIF (vs cabinet juridique pur, vs cabinet cyber pur)
 *   → RISK RADAR (sanctions CNIL chiffrées vs deals débloqués)
 *   → CHECKLIST (inclus / hors scope)
 *   → PRICING (4 cards : cadrage / DPO Starter / DPO Scale featured / sprint dev)
 *   → TESTIMONIALS · TRUST BADGES · REFUSE · FAQ · TECH FAQ
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
    processHtml.trim(),
    comparisonHtml.trim(),
    riskRadarHtml.trim(),
    checklistHtml.trim(),
    refuseHtml.trim(),
    pricingHtml.trim(),
    testimonialsHtml.trim(),
    trustBadgesHtml.trim(),
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
