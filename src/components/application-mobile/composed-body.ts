import { bodyHtml as rawBody } from "./body";
import { logoWallHtml } from "./sections/logo-wall";
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
 *   LOGO WALL (4 produits du groupe, comme les pages sœurs) →
 *   TRUST STRIP (Cadré · Mesuré · Testé · Encadré · Écrit + stack) →
 *   PROBLEMS (6 situations) →
 *   WHAT WE BUILD (9 verticals) → CAPABILITIES (20 features natives) →
 *   STORES (App Store + Play Store) → OWNERSHIP (9 actifs à inventorier) →
 *   PROCESS (5 étapes) → STACK (RN + Expo + EAS) → RELATED CASES →
 *   DE-RISK (4 peurs + 9 engagements contractuels) → COMPARISON (vs site/PWA) → REFUSE (red flags) →
 *   PRICING (3 forfaits) →
 *   PREUVES PUBLIQUES (aucun client externe · 3 cartes) →
 *   FAQ (commerciale + technique fusionnées) → SERVICES LIÉS →
 *   [SiteFooter React rendu à part]
 *
 * Passe UX du 31/08/2026 — deux déplacements, pour aligner l'ouverture et la
 * preuve sur les trois autres pages services :
 *
 *   1. PREUVES PUBLIQUES était la section juste après le hero. La deuxième
 *      chose qu'un visiteur lisait sur « application mobile » était donc
 *      « Pas de client à citer », avant même d'avoir compris ce qu'on lui vend.
 *      Sur les pages sœurs, le même message arrive après l'offre, la méthode et
 *      les prix (15/20 vitrines, 14/19 SaaS, 19/22 e-commerce) : il descend ici
 *      juste après PRICING, et passe du pavé gris de logos aux trois cartes
 *      blanches descriptives du gabarit commun.
 *   2. LOGO WALL. Cette page était la seule des quatre à ne pas ouvrir sur le
 *      bandeau des quatre logos, et à le resservir douze lignes plus bas dans la
 *      section preuves. Le bandeau prend la position 01 ; TRUST STRIP le suit.
 *      ⚠️ Le kicker et la phrase de qualification du bandeau sont obligatoires :
 *      quatre logos nus sous un hero se lisent comme des logos clients.
 */
function compose(raw: string): string {
  let out = raw;

  // LOGO WALL + TRUST STRIP + PROBLEMS — juste après le hero, avant "WHAT WE BUILD"
  out = out.replace(
    "<!-- WHAT WE BUILD -->",
    logoWallHtml.trim() +
      "\n\n" +
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

  // PREUVES PUBLIQUES — après le bloc tarifaire, comme sur les pages sœurs.
  out = out.replace(
    "<!-- FAQ -->",
    proofHtml.trim() + "\n\n<!-- FAQ -->",
  );

  // SERVICES LIÉS : dernière section du document.
  out = out.trimEnd() + "\n\n" + relatedServicesHtml.trim() + "\n";

  return out;
}

export const composedBodyHtml = compose(rawBody);
