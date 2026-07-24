import { createGuideOgImage } from "@/components/guides/guide-og-image";

export const runtime = "edge";
export const alt =
  "Zapier, Make ou développement sur mesure : réparer ou reconstruire — Hagnéré Code";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return createGuideOgImage({
    title: "Make, Zapier ou connexion sur mesure ?",
    subtitle: "30 jours de faits et 5 pannes testées",
    labels: ["Flux", "Erreurs", "Coût", "Hybride"],
    accent: "amber",
  });
}
