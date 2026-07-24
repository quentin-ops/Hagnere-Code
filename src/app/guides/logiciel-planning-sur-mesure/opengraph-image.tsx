import { createGuideOgImage } from "@/components/guides/guide-og-image";

export const runtime = "edge";
export const alt =
  "Logiciel de planning sur mesure : tester les contraintes avant de développer — Hagnéré Code";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return createGuideOgImage({
    title: "Faut-il un logiciel de planning sur mesure ?",
    subtitle: "15 conflits avant le moindre développement",
    labels: ["Contraintes", "Standard", "API", "Sur-mesure"],
    accent: "blue",
  });
}
