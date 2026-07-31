import { createGuideOgImage } from "@/components/guides/guide-og-image";

export const runtime = "edge";
export const alt =
  "Calculer le ROI d’une application métier sans inventer les gains — Hagnéré Code";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return createGuideOgImage({
    title: "Calculer le ROI d’une application métier sans inventer les gains",
    subtitle:
      "Trésorerie, capacité, TCO complet, scénarios et retour durable",
    labels: [
      "12 coûts",
      "2 ROI",
      "3 scénarios",
      "STOP sur inconnue",
    ],
    accent: "emerald",
  });
}
