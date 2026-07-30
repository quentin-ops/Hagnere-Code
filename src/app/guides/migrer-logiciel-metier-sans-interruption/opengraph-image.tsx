import { createGuideOgImage } from "@/components/guides/guide-og-image";

export const runtime = "edge";

export const alt =
  "Migrer un logiciel métier avec une source d’écriture, un seuil de décision et un retour mesuré";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return createGuideOgImage({
    title: "Migrer un logiciel métier sans interrompre l’activité",
    subtitle: "Le budget de bascule réversible",
    labels: [
      "5 preuves",
      "4 durées",
      "Source unique",
      "GO ou STOP",
      "Retour mesuré",
    ],
    accent: "amber",
  });
}
