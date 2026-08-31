import { bodyHtml as rawBody } from "./body";
import { logoWallHtml } from "./sections/logo-wall";
import { proofStripHtml } from "./sections/proof-strip";
import { founderVideoHtml } from "./sections/founder-video";
import { whatWeDoHtml } from "./sections/what-we-do";
import { checklistHtml } from "./sections/checklist";
import { roiDashboardHtml } from "./sections/roi-dashboard";
import { capabilitiesHtml } from "./sections/capabilities";
import { integrationsHtml } from "./sections/integrations";
import { processHtml } from "./sections/process";
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
import { relatedServicesHtml } from "./sections/related-services";
import { ctaFinalHtml } from "./sections/cta-final";

/**
 * Page service Audit technique — layout final.
 *
 * Passe UX du 28/08/2026 : la page demandait 43,6 hauteurs d'écran sur un
 * 1440 × 900 et 82,8 sur un 390 × 844, pour 26 sections. Quatre décisions,
 * toutes visibles dans le tableau `atSections` ci-dessous :
 *
 *   1. DEUX FAQ consécutives → une seule. Les huit questions techniques ont
 *      rejoint la FAQ principale, qui portait déjà un filtre par profil
 *      (CEO · CTO · DAF · VC) ; elles y sont marquées `data-persona="cto"`.
 *   2. VERTICALS (« Six verticales où notre méthode est la plus affûtée »)
 *      retirée : la page portait alors PROBLEMS (6 déclencheurs) et SCENARIOS
 *      (5 situations chiffrées), qui faisaient le même travail d'orientation —
 *      ces deux-là ont fini par fusionner, voir la décision 5 — et le site se
 *      positionne explicitement comme « pas une agence sectorielle ».
 *      ⚠️ Cette section portait un vocabulaire réglementaire qui n'existe plus
 *      ailleurs sur la page (PCI-DSS, TRACFIN, Qualiopi, RGAA, DSP2, KYC/AML).
 *      La réserve HDS, elle, a été réécrite dans la réponse FAQ sur les
 *      certifications — un garde-fou de test la protège.
 *   3. ARSENAL (« Neuf outils mobilisables ») retirée : INTEGRATIONS reprend
 *      SonarQube, Semgrep, Snyk, Datadog, Grafana, PHPStan, Dependabot,
 *      GitGuardian et PASSI. Deux noms ne survivent nulle part — Psalm et le
 *      renvoi à l'annuaire ANSSI où se vérifie une qualification PASSI.
 *   4. CAPABILITIES (21 vérifications, 4,42 écrans) repliée en `<details>`
 *      natifs, une famille par volet, le premier ouvert. Le contenu reste dans
 *      le DOM, donc indexable.
 *
 * Résultat mesuré : 35,9 écrans en 1440 × 900, 67 en 390 × 844, 23 sections.
 *
 * Passe UX du 31/08/2026 — cinquième décision :
 *
 *   5. PROBLEMS (« Six situations qui déclenchent un audit ») retirée et
 *      FUSIONNÉE dans SCENARIOS, qui remonte juste après le message du
 *      fondateur. Les deux sections racontaient les mêmes situations à sept
 *      sections d'écart : « Notre VC demande une tech DD… », « On rachète une
 *      boîte… », « Notre nouveau CTO arrive… », « Un client enterprise exige
 *      SOC2… », « On hésite entre patcher ou refaire à zéro » figuraient
 *      littéralement dans les deux, PROBLEMS renvoyant au devis là où SCENARIOS
 *      chiffre. Le lecteur arrivé à la 11e section n'apprenait rien, alors que
 *      le prix par situation existait dès la 4e.
 *      Le seul déclencheur qui n'avait pas son pendant chiffré — le post-mortem
 *      d'incident — est devenu le sixième onglet de SCENARIOS, au format et au
 *      montant EXPRESS de la grille tarifaire de la page. La réserve de PROBLEMS
 *      (« ces exemples ne décrivent pas des dossiers clients ») a été réécrite
 *      dans le chapô de SCENARIOS ; l'ancre `#triggers` qu'elle portait n'était
 *      référencée nulle part.
 *      ⚠️ Ne pas rétablir PROBLEMS sans retirer les onglets correspondants :
 *      c'est exactement le doublon que cette passe supprime.
 *
 * NON FAIT, volontairement : la fusion de TRUST BADGES dans DE-RISK. Les deux
 * répondent bien à la même question, mais leurs grilles n'ont ni le même
 * nombre de colonnes ni le même contrat de contenu — chaque carte de DE-RISK
 * exige une « peur » citée, qu'il aurait fallu inventer. Interdit.
 *
 * Flow complet :
 *   NAV → Breadcrumb → HERO (Tech Debt P&L + Matrice impact/effort) →
 *   LOGO WALL → PROOF STRIP (8 dimensions · ISO 19011 · 0 CoI · NDA J0) →
 *   FOUNDER VIDEO (Conflict of Interest) → SCENARIOS 6 tabs chiffrés →
 *   WHAT WE AUDIT (8 dimensions) → DELIVERABLES checklist (12 + 6 extras) →
 *   TIMELINE 10 JOURS → CAPABILITIES 21 briques (repliées) → METHODOLOGY ECOSYSTEM →
 *   PROCESS 7 étapes → DE-RISK 6 peurs → COMPARISON 5 col → TESTIMONIALS →
 *   TEAM 6 auditors → REFUSE 6 missions → PRICING 4 tiers + 6 extras →
 *   TRUST BADGES 8 engagements → MINI-AUDIT interactif → FAQ filtrée (20 Q,
 *   dont les 8 questions techniques rapatriées) → SERVICES LIÉS → CTA FINAL → [SiteFooter React]
 *
 * (Cette énumération est un CONFORT DE LECTURE, pas une source : l'ordre qui
 *  fait foi est le tableau `atSections` ci-dessous. En cas d'écart, croire le
 *  tableau — c'est lui que le navigateur exécute.)
 *
 * La CTA finale héritée a été retirée de body.ts : la seule CTA rendue est
 * `<!-- ADS CTA FINAL -->`, qui échappe volontairement à `stripFinalCta`.
 */
function compose(raw: string): string {
  let out = raw;

  const atSections = [
    logoWallHtml.trim(),
    proofStripHtml.trim(),
    founderVideoHtml.trim(),
    scenariosHtml.trim(),
    whatWeDoHtml.trim(),
    checklistHtml.trim(),
    roiDashboardHtml.trim(),
    capabilitiesHtml.trim(),
    integrationsHtml.trim(),
    processHtml.trim(),
    deriskHtml.trim(),
    comparisonHtml.trim(),
    testimonialsHtml.trim(),
    teamHtml.trim(),
    refuseHtml.trim(),
    pricingHtml.trim(),
    trustBadgesHtml.trim(),
    miniAuditHtml.trim(),
    faqHtml.trim(),
    relatedServicesHtml.trim(),
    ctaFinalHtml.trim(),
  ].join("\n\n");

  out = out.replace(
    /<!-- WHAT WE BUILD -->[\s\S]*$/,
    atSections + "\n\n",
  );

  return out;
}

export const composedBodyHtml = compose(rawBody);
