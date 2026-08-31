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
import { relatedServicesHtml } from "./sections/related-services";

/**
 * Direction A — page centrée sur "Sécurité & RGPD" (audit + suivi + remédiation codée).
 *
 * L'ORDRE des sections n'est pas décrit ici : il est dans le tableau `stack`
 * ci-dessous, et lui seul fait foi. L'énumération en prose qui figurait à cet
 * endroit avait dérivé — elle annonçait CHECKLIST → PRICING → TESTIMONIALS
 * quand le tableau exécutait CHECKLIST → REFUSE → PRICING → TESTIMONIALS, et
 * décrivait un bandeau de confiance (« ISO 27001 aligné ») que le module ne
 * publie plus. Une documentation qui contredit le code coûte plus qu'elle
 * n'apporte : on la remplace par les décisions, qui ne se déduisent pas du code.
 *
 * Décisions de la passe UX du 28/08/2026 :
 *   - Les deux FAQ consécutives n'en font plus qu'une. Les huit questions
 *     techniques sont dans `sections/faq.ts`, introduites par un `h3.eyebrow`
 *     « — Pour les profils techniques » : ce niveau de titre est ce qui les
 *     rend repérables à la navigation par titres, et c'est lui qui ramène le
 *     mot « RSSI » sur la page.
 *   - `sections/tech-faq.ts` a été supprimé ; ses questions ont été comparées
 *     une à une à la version d'origine avant suppression.
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
    relatedServicesHtml.trim(),
  ].join("\n\n");

  out = out.trimEnd() + "\n\n" + stack + "\n";

  return out;
}

export const composedBodyHtml = compose(rawBody);
