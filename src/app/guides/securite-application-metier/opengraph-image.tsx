import { createGuideOgImage } from "@/components/guides/guide-og-image";

export const runtime = "edge";

export const alt =
  "Sécurité d’une application métier : restauration chronométrée, alerte suivie, compte témoin et dépendances triées";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return createGuideOgImage({
    title: "Sécurité d’une application métier",
    subtitle: "Quatre mesures avant d’ouvrir les vraies données",
    labels: [
      "Restaurer",
      "Alerter",
      "Compte témoin",
      "Dépendances",
      "Aucun score",
    ],
    accent: "blue",
  });
}
