import { createGuideOgImage } from "@/components/guides/guide-og-image";

export const runtime = "edge";

export const alt =
  "Cahier des charges SaaS : décisions, responsables, preuves et exclusions";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return createGuideOgImage({
    title: "Cahier des charges SaaS",
    subtitle: "Faire chiffrer le même produit par chaque prestataire",
    labels: [
      "Organisation",
      "Rôles et droits",
      "Abonnement",
      "Preuves",
      "STOP sans score",
    ],
    accent: "blue",
  });
}
