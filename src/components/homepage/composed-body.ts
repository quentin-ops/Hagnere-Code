import { bodyHtml as rawBody } from "./body";
import { logoWallHtml } from "./sections/logo-wall";
import { verticalsHtml } from "./sections/verticals";
import { trustHtml } from "./sections/trust";
import { calcTeaserHtml } from "./sections/calc-teaser";
import { equipeHtml } from "./sections/equipe";

/**
 * Compose le corps final de la page d'accueil en déplaçant, dans le HTML de
 * maquette, des sections repérées par leurs commentaires d'ancrage.
 *
 * Ordre après composition :
 *   Héros → Preuves → Situations → Studio → Réalisations → Tarifs → Méthode →
 *   Confiance → Équipe → Calculateur → FAQ
 *
 * L'ordre suit une question d'acheteur par section : ce qu'on fait, ce qui le
 * prouve, si mon cas en fait partie, ce qu'on sait faire, ce qui existe déjà,
 * combien ça coûte, comment ça se passe, pourquoi vous, avec qui.
 *
 * ── Passe UX du 28/08/2026 ────────────────────────────────────────────────
 * Mesure d'entrée : 23,2 écrans sur un 1440 × 900, **45,5 écrans sur un
 * 390 × 844**. Une page d'accueil qui demande quarante-cinq hauteurs d'écran
 * de défilement ne se lit pas, elle s'abandonne. Trois sections en sortent :
 *
 *   - « Comparer trois modes de prestation » → /tarifs. Comparer des
 *     prestataires est une tâche de fin de parcours, pas d'accueil, et
 *     /tarifs portait déjà une grille de comparaison. Ses quatre critères
 *     d'organisation (équipe affectée, continuité, interlocuteur, à choisir
 *     si) ont été fusionnés dans cette grille : rien n'est perdu.
 *   - « Décrivez-nous votre besoin » → supprimée. Bloc de conversion dont le
 *     bouton pointait sur `#contact`, c'est-à-dire sur le formulaire du pied
 *     de page — présent sur TOUTES les pages du site. Un bloc de 1,35 écran
 *     pour annoncer un formulaire situé 4 sections plus bas.
 *   - « Une stack moderne » → /methode. Le choix des technologies rassure une
 *     DSI, pas un dirigeant de PME qui découvre le studio ; il appartient au
 *     chapitre « comment on travaille ».
 *
 * Et « Les situations où on est vraiment utile » REMONTE avant le catalogue
 * de services : le visiteur se reconnaît dans une situation avant de savoir
 * nommer le service qui la traite. Le catalogue répond à une question que la
 * section des situations vient de lui faire poser.
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
  const methodeHtml = getCommentedSection(out, "<!-- METHODE -->");
  const describeHtml = getCommentedSection(out, "<!-- DESCRIBE YOUR PROJECT -->");
  const tarifsHtml = getCommentedSection(out, "<!-- TARIFS -->");
  const rawEquipeHtml = getCommentedSection(out, "<!-- EQUIPE -->");

  // `<!-- LOGO BAR -->` n'est plus qu'une ancre : la section « Notre stack »
  // qu'elle introduisait vit maintenant dans `design-shared/tech-stack.ts`, et
  // est rendue par /methode. Le marqueur reste ce qui fixe la position du mur
  // de preuves, juste sous le héros.
  out = out.replace("<!-- LOGO BAR -->", logoWallHtml.trim());

  // Sections retirées de leur position d'origine : les deux premières sont
  // réinsérées plus bas, la troisième ne revient pas.
  for (const moved of [methodeHtml, describeHtml, tarifsHtml]) {
    if (moved) out = out.replace(moved, "");
  }

  // Situations : juste avant le catalogue de services, pas après.
  out = out.replace(
    "<!-- STUDIO FULL-STACK -->",
    verticalsHtml.trim() + "\n\n<!-- STUDIO FULL-STACK -->",
  );

  // Après la preuve : le prix, puis la méthode, puis la confiance.
  out = out.replace(
    "<!-- EQUIPE -->",
    [
      tarifsHtml.trim(),
      methodeHtml.trim(),
      trustHtml.trim(),
      "<!-- EQUIPE -->",
    ]
      .filter(Boolean)
      .join("\n\n"),
  );

  // La section statique EQUIPE cède la place à la version pilotée par
  // src/lib/team.ts (source unique de la composition publiée).
  if (rawEquipeHtml) {
    out = out.replace(rawEquipeHtml, equipeHtml.trim());
  }

  // Calculateur : dernière réassurance avant la FAQ.
  out = out.replace(
    "<!-- FAQ -->",
    [calcTeaserHtml.trim(), "<!-- FAQ -->"].filter(Boolean).join("\n\n"),
  );

  // Le CTA final est remplacé par la section React « Parlons de votre projet ».
  out = out.replace(/<!-- CTA FINAL -->[\s\S]*?<\/section>\s*/m, "");

  // Le pied de page statique est remplacé par <SiteFooter />.
  out = out.replace(/<!-- FOOTER -->[\s\S]*?<\/footer>\s*$/m, "");

  return out;
}

export const composedBodyHtml = compose(rawBody);
