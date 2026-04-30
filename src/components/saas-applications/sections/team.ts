import { buildServiceTeamHtml } from "@/lib/team-renderers";

export const teamHtml = buildServiceTeamHtml({
  prefix: "sa",
  heading: "Un gérant qui code,<br>six développeurs seniors.",
  description: `
    Pas de commercial entre vous et le produit, pas de sous-traitance offshore, pas de junior
    qui découvre Laravel sur votre projet. <b>3 CDI à Chambéry</b> (CTO + 2 devs) et <b>3 freelances long-terme intégrés</b>
    à nos rituels — toujours les mêmes personnes, nommées au cadrage.`,
  devsIntroTitle: "Six devs seniors,<br>augmentés par <em>Claude Code</em>.",
  devsIntroBody: `
    Tous formés à utiliser Claude Code comme copilote senior : recherches, architecture,
    plans d'implémentation, revues. <b>On pose moins de questions, on avance plus vite,
    on livre plus proprement.</b>`,
  founderRoleTitle: "Gérant associé codeur · Vision produit & cadrage",
  founderDomains: "Patrimoine · Immobilier · SaaS B2B",
});
