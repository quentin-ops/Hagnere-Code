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
 *   Hero → Logo wall → Studio → Verticals → Describe → Réalisations → Stats →
 *   Méthode → Trust → Comparison → Équipe → Stack → Calculator → Tarifs →
 *   FAQ → Final CTA
 */
function getCommentedSection(source: string, marker: string): string {
  const start = source.indexOf(marker);
  if (start === -1) return "";

  const endTag = "</section>";
  const end = source.indexOf(endTag, start);
  if (end === -1) return "";

  return source.slice(start, end + endTag.length);
}

function compose(raw: string): string {
  let out = raw;
  const stackHtml = getCommentedSection(out, "<!-- LOGO BAR -->");
  const methodeHtml = getCommentedSection(out, "<!-- METHODE -->");

  // Replace the early technical stack with a compact proof strip.
  if (stackHtml) {
    out = out.replace(stackHtml, logoWallHtml.trim());
  }

  // Move the method below the proof sections, where process questions come up.
  if (methodeHtml) {
    out = out.replace(methodeHtml, "");
  }

  // Verticals: after services, so prospects can quickly recognize their case.
  out = out.replace(
    "<!-- DESCRIBE YOUR PROJECT -->",
    verticalsHtml.trim() + "\n\n<!-- DESCRIBE YOUR PROJECT -->",
  );

  // Method + trust + comparison: objection handling after visible proof.
  out = out.replace(
    "<!-- EQUIPE -->",
    [
      methodeHtml.trim(),
      trustHtml.trim(),
      comparisonHtml.trim(),
      "<!-- EQUIPE -->",
    ]
      .filter(Boolean)
      .join("\n\n"),
  );

  // Stack + calculator: late-stage reassurance before pricing.
  out = out.replace(
    "<!-- TARIFS -->",
    [
      stackHtml.trim(),
      calcTeaserHtml.trim(),
      "<!-- TARIFS -->",
    ]
      .filter(Boolean)
      .join("\n\n"),
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
