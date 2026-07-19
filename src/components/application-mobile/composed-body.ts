import { bodyHtml as rawBody } from "./body";
import { trustStripHtml } from "./sections/trust-strip";
import { problemsHtml } from "./sections/problems";
import { storesHtml } from "./sections/stores";
import { ownershipHtml } from "./sections/ownership";
import { deriskHtml } from "./sections/derisk";
import { comparisonHtml } from "./sections/comparison";
import { refuseHtml } from "./sections/refuse";
import { trustBadgesHtml } from "./sections/trust-badges";
import { techFaqHtml } from "./sections/tech-faq";

/**
 * Final layout for /services/application-mobile :
 *
 *   NAV → Breadcrumb → HERO →
 *   TRUST STRIP (chiffres + logos stack) → PROBLEMS (6 situations) →
 *   WHAT WE BUILD (9 verticals) → CAPABILITIES (20 features natives) →
 *   STORES (App Store + Play Store) → OWNERSHIP (9 actifs à inventorier) →
 *   PROCESS (5 étapes) → STACK (RN + Expo + EAS) → RELATED CASES →
 *   DE-RISK (4 peurs) → COMPARISON (vs site/PWA) → REFUSE (red flags) →
 *   PRICING (3 forfaits) → TRUST BADGES (9 engagements) →
 *   FAQ commerciale → TECH FAQ (CTO) →
 *   [SiteFooter React rendu à part]
 */
function compose(raw: string): string {
  let out = raw;

  // TRUST STRIP + PROBLEMS — juste après le hero, avant "WHAT WE BUILD"
  out = out.replace(
    "<!-- WHAT WE BUILD -->",
    trustStripHtml.trim() +
      "\n\n" +
      problemsHtml.trim() +
      "\n\n<!-- WHAT WE BUILD -->",
  );

  // STORES + OWNERSHIP — entre "CAPABILITIES" et "PROCESS"
  out = out.replace(
    "<!-- PROCESS -->",
    storesHtml.trim() +
      "\n\n" +
      ownershipHtml.trim() +
      "\n\n<!-- PROCESS -->",
  );

  // DE-RISK + COMPARISON + REFUSE — entre "RELATED CASES" et "PRICING"
  out = out.replace(
    "<!-- PRICING -->",
    deriskHtml.trim() +
      "\n\n" +
      comparisonHtml.trim() +
      "\n\n" +
      refuseHtml.trim() +
      "\n\n<!-- PRICING -->",
  );

  // TRUST BADGES — entre "PRICING" et "FAQ"
  out = out.replace(
    "<!-- FAQ -->",
    trustBadgesHtml.trim() + "\n\n<!-- FAQ -->",
  );

  // TECH FAQ — après la FAQ commerciale, avant la CTA (qui sera strippée)
  out = out.replace(
    "<!-- CTA -->",
    techFaqHtml.trim() + "\n\n<!-- CTA -->",
  );

  return out;
}

export const composedBodyHtml = compose(rawBody);
