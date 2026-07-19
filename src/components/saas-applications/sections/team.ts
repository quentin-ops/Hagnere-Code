import { buildServiceTeamHtml } from "@/lib/team-renderers";

export const teamHtml = buildServiceTeamHtml({
  prefix: "sa",
  heading: "Un gérant qui code,<br>sept développeurs.",
  description: `
    Pas de commercial entre vous et le produit, pas de sous-traitance offshore, pas de junior
    qui découvre React sur votre projet. <b>Sept développeurs</b> travaillent avec le gérant, intégrés
    aux mêmes rituels — toujours les mêmes personnes, nommées au cadrage.`,
  devsIntroTitle: "Des devs seniors,<br>augmentés par <em>Claude Code</em>.",
  devsIntroBody: `
    Tous formés à utiliser Claude Code comme copilote senior : recherches, architecture,
    plans d'implémentation, revues. <b>On pose moins de questions, on avance plus vite,
    on livre plus proprement.</b>`,
  founderRoleTitle: "Gérant associé codeur · Vision produit & cadrage",
  founderDomains: "Patrimoine · Immobilier · SaaS B2B",
});
