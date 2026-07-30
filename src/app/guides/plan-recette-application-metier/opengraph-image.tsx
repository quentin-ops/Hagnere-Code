import { createGuideOgImage } from "@/components/guides/guide-og-image";

export const runtime = "edge";

export const alt =
  "Plan de recette d’une application métier reliant besoin, cas, preuve et décision";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return createGuideOgImage({
    title: "Plan de recette d’une application métier",
    subtitle: "Prouver avant d’accepter",
    labels: [
      "Besoin traçable",
      "Cas rejouable",
      "Données",
      "Preuve",
      "Décision humaine",
    ],
    accent: "blue",
  });
}
