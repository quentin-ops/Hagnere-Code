import { createGuideOgImage } from "@/components/guides/guide-og-image";

export const runtime = "edge";

export const alt =
  "Sécurité d’une application métier : menaces, restauration, détection et responsables avant la mise en service";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return createGuideOgImage({
    title: "Sécurité d’une application métier",
    subtitle: "Menaces, restauration, détection et responsables",
    labels: [
      "Prévenir",
      "Détecter",
      "Restaurer",
      "Répondre",
      "Décider sans score",
    ],
    accent: "blue",
  });
}
