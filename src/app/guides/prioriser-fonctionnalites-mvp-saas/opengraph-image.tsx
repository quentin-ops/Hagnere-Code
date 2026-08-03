import { createGuideOgImage } from "@/components/guides/guide-og-image";

export const runtime = "edge";
export const alt =
  "Prioriser les fonctionnalités d’un SaaS avec preuves, dépendances et capacité";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return createGuideOgImage({
    title: "Que développer maintenant ?",
    subtitle: "Demandes, preuves et capacité avant le prochain lot SaaS",
    labels: [
      "Voies critiques séparées",
      "5 décisions humaines",
      "Dépendances comptées",
      "Aucun score arbitre",
    ],
    accent: "violet",
  });
}
