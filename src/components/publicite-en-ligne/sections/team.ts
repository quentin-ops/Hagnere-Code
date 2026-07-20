import { buildServiceTeamHtml } from "@/lib/team-renderers";
import { TEAM_PUBLIC_COMPOSITION, TEAM_TOTAL_COUNT } from "@/lib/team";

export const teamHtml = buildServiceTeamHtml({
  prefix: "ads",
  heading: `${TEAM_TOTAL_COUNT} personnes,<br>toutes nommées.`,
  description: `
    Pas de commercial entre vous et le produit, pas de sous-traitance offshore, pas de junior
    qui découvre SEO sur votre projet. <b>${TEAM_PUBLIC_COMPOSITION}</b>. Toute l'équipe partage les
    mêmes exigences de travail. Les personnes affectées, leurs rôles et les relais sont nommés au cadrage.`,
  devsIntroTitle: "Des devs seniors,<br>augmentés par <em>Claude Code</em>.",
  devsIntroBody: `
    Tous formés à utiliser Claude Code comme copilote senior : recherches, architecture,
    plans d'implémentation, revues. <b>On pose moins de questions, on avance plus vite,
    on livre plus proprement.</b>`,
  founderRoleTitle: "Président fondateur codeur · Vision produit & cadrage",
  founderDomains: "Patrimoine · Immobilier · site B2B",
});
