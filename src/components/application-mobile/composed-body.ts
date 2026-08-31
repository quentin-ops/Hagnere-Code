import { bodyHtml as rawBody } from "./body";
import { trustStripHtml } from "./sections/trust-strip";
import { problemsHtml } from "./sections/problems";
import { storesHtml } from "./sections/stores";
import { ownershipHtml } from "./sections/ownership";
import { deriskHtml } from "./sections/derisk";
import { comparisonHtml } from "./sections/comparison";
import { refuseHtml } from "./sections/refuse";
import { proofHtml } from "./sections/proof";
import { relatedServicesHtml } from "./sections/related-services";

/**
 * Final layout for /services/application-mobile :
 *
 *   NAV → Breadcrumb → HERO →
 *   TRUST STRIP (chiffres + logos stack) →
 *   PREUVES PUBLIQUES (aucun client externe · 4 produits du groupe) →
 *   PROBLEMS (6 situations) →
 *   WHAT WE BUILD (9 verticals) → CAPABILITIES (20 features natives) →
 *   STORES (App Store + Play Store) → OWNERSHIP (9 actifs à inventorier) →
 *   PROCESS (5 étapes) → STACK (RN + Expo + EAS) → RELATED CASES →
 *   DE-RISK (4 peurs + 9 engagements contractuels) → COMPARISON (vs site/PWA) → REFUSE (red flags) →
 *   PRICING (3 forfaits) →
 *   FAQ (commerciale + technique fusionnées) → SERVICES LIÉS →
 *   [SiteFooter React rendu à part]
 */
function compose(raw: string): string {
  let out = raw;

  // TRUST STRIP + PROBLEMS — juste après le hero, avant "WHAT WE BUILD"
  out = out.replace(
    "<!-- WHAT WE BUILD -->",
    trustStripHtml.trim() +
      "\n\n" +
      proofHtml.trim() +
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

  // SERVICES LIÉS : dernière section du document.
  out = out.trimEnd() + "\n\n" + relatedServicesHtml.trim() + "\n";

  return out;
}

export const composedBodyHtml = compose(rawBody);
