import { bodyHtml as rawBody } from "./body";
import { logoWallHtml } from "./sections/logo-wall";
import { verticalsHtml } from "./sections/verticals";
import { comparisonHtml } from "./sections/comparison";
import { trustHtml } from "./sections/trust";
import { calcTeaserHtml } from "./sections/calc-teaser";
import { equipeHtml } from "./sections/equipe";

/**
 * Compose the final homepage body HTML by splicing new sections
 * into the original design HTML at known anchor comments.
 *
 * Layout order after splicing:
 *   Hero → Logo wall → Studio → Verticals → Réalisations → Tarifs → Méthode →
 *   Trust → Comparison → Premier cadrage → Équipe → Stack → Calculator → FAQ
 *
 * L'ordre suit une question d'acheteur par section : ce qu'on fait, si mon cas
 * en fait partie, ce qui existe déjà, combien ça coûte, comment ça se passe,
 * pourquoi vous, comment démarrer, avec qui. La demande de contact la plus
 * insistante (« Premier cadrage ») arrive donc après les preuves et le prix,
 * plus en 5ᵉ position comme avant l'audit d'août 2026.
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
  const describeHtml = getCommentedSection(out, "<!-- DESCRIBE YOUR PROJECT -->");
  const tarifsHtml = getCommentedSection(out, "<!-- TARIFS -->");
  const rawEquipeHtml = getCommentedSection(out, "<!-- EQUIPE -->");

  // Replace the early technical stack with a compact proof strip.
  if (stackHtml) {
    out = out.replace(stackHtml, logoWallHtml.trim());
  }

  // Les trois sections déplacées sont retirées de leur position d'origine,
  // puis réinsérées plus bas dans l'ordre de lecture voulu.
  for (const moved of [methodeHtml, describeHtml, tarifsHtml]) {
    if (moved) out = out.replace(moved, "");
  }

  // Replace the static EQUIPE section with the team-driven version.
  // The new module reads from src/lib/team.ts (single source of truth).
  if (rawEquipeHtml) {
    out = out.replace(rawEquipeHtml, equipeHtml.trim());
  }

  // Verticals: after services, so prospects can quickly recognize their case.
  out = out.replace(
    "<!-- REALISATIONS -->",
    verticalsHtml.trim() + "\n\n<!-- REALISATIONS -->",
  );

  // Après la preuve : le prix, puis la méthode, la confiance, le comparatif et
  // enfin la demande de cadrage.
  out = out.replace(
    "<!-- EQUIPE -->",
    [
      tarifsHtml.trim(),
      methodeHtml.trim(),
      trustHtml.trim(),
      comparisonHtml.trim(),
      describeHtml.trim(),
      "<!-- EQUIPE -->",
    ]
      .filter(Boolean)
      .join("\n\n"),
  );

  // Stack + calculator: late-stage reassurance before the FAQ.
  out = out.replace(
    "<!-- FAQ -->",
    [
      stackHtml.trim(),
      calcTeaserHtml.trim(),
      "<!-- FAQ -->",
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
