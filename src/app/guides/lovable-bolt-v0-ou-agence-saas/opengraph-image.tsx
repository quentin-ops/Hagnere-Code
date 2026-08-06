import { createGuideOgImage } from "@/components/guides/guide-og-image";

export const runtime = "edge";
export const alt =
  "Lovable, Bolt, v0 ou agence : choisir qui construit et qui reprend le SaaS";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return createGuideOgImage({
    title: "Lovable, Bolt, v0 ou agence ?",
    subtitle: "Choisir ce qu’une autre personne devra pouvoir reprendre",
    labels: [
      "Prototype autonome",
      "Revue ciblée",
      "Construction accompagnée",
      "Simplifier ou différer",
    ],
    accent: "violet",
  });
}
