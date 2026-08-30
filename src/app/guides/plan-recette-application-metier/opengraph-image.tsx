import { createGuideOgImage } from "@/components/guides/guide-og-image";

export const runtime = "edge";

export const alt =
  "Plan de recette d’une application métier : compter les cas, chiffrer les jours, écrire les seuils, décider";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return createGuideOgImage({
    title: "Plan de recette d’une application métier",
    subtitle: "Prouver avant d’accepter",
    labels: [
      "Compter les cas",
      "Chiffrer les jours",
      "Écrire les seuils",
      "Choisir les données",
      "Décider",
    ],
    accent: "blue",
  });
}
