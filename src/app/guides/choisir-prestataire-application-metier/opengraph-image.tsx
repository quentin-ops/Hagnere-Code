import { createGuideOgImage } from "@/components/guides/guide-og-image";

export const runtime = "edge";

export const alt =
  "Choisir un prestataire d’application métier avec un cas commun, huit points documentés et une décision sans score global";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return createGuideOgImage({
    title: "Choisir un prestataire d’application métier",
    subtitle: "Un cas commun, huit points à documenter",
    labels: [
      "Même cas métier",
      "Périmètre",
      "Coûts connus",
      "Données et droits",
      "Sortie possible",
    ],
    accent: "blue",
  });
}
