import { bodyHtml as rawBody } from "./body";
import { logoWallHtml } from "./sections/logo-wall";
import { verticalsHtml } from "./sections/verticals";
import { comparisonHtml } from "./sections/comparison";
import { trustHtml } from "./sections/trust";
import { calcTeaserHtml } from "./sections/calc-teaser";

/**
 * Compose the final homepage body HTML by splicing new sections
 * into the original design HTML at known anchor comments.
 *
 * Layout order after splicing:
 *   Hero → Logo wall → Stack → Studio → Describe → Méthode → Comparison →
 *   Verticals → Réalisations → Stats → Équipe → Tarifs → FAQ → Final CTA
 */
function compose(raw: string): string {
  let out = raw;

  // Logo wall: between HERO and LOGO BAR (tech stack)
  out = out.replace(
    "<!-- LOGO BAR -->",
    logoWallHtml.trim() + "\n\n<!-- LOGO BAR -->",
  );

  // Comparison: after Méthode, before Réalisations
  out = out.replace(
    "<!-- REALISATIONS -->",
    comparisonHtml.trim() + "\n\n<!-- REALISATIONS -->",
  );

  // Verticals: just before Réalisations (but after the comparison we just inserted)
  out = out.replace(
    "<!-- REALISATIONS -->",
    verticalsHtml.trim() + "\n\n<!-- REALISATIONS -->",
  );

  // Trust badges: just after STATS (dark), before EQUIPE
  out = out.replace(
    "<!-- EQUIPE -->",
    trustHtml.trim() + "\n\n<!-- EQUIPE -->",
  );

  // Calculator teaser: just before TARIFS (where budget comes up)
  out = out.replace(
    "<!-- TARIFS -->",
    calcTeaserHtml.trim() + "\n\n<!-- TARIFS -->",
  );

  // Strip the final-CTA section — replaced by the new React "Parlons de votre projet"
  out = out.replace(
    /<!-- CTA FINAL -->[\s\S]*?<\/section>\s*/m,
    "",
  );

  // Strip the footer — will be rendered as React <SiteFooter />
  out = out.replace(/<!-- FOOTER -->[\s\S]*?<\/footer>\s*$/m, "");

  return out;
}

export const composedBodyHtml = compose(rawBody);
