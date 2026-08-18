import { createGuideOgImage } from "@/components/guides/guide-og-image";

export const runtime = "edge";
export const alt =
  "Diagnostiquer une URL de l’exploration aux clics dans Google Search Console";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return createGuideOgImage({
    title: "Pourquoi mon site n’est-il pas visible sur Google ?",
    subtitle: "Une URL · une recherche · quatre contrôles",
    labels: ["Exploration", "Indexation", "Impressions et clics"],
    accent: "blue",
  });
}
