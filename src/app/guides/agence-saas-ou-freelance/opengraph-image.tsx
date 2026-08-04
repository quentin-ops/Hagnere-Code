import { createGuideOgImage } from "@/components/guides/guide-og-image";

export const runtime = "edge";
export const alt =
  "Agence, freelance ou équipe hybride : choisir par responsabilité et relais";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return createGuideOgImage({
    title: "Agence, freelance ou équipe hybride ?",
    subtitle: "Choisir par phase, responsabilité et relais",
    labels: [
      "4 phases",
      "5 responsabilités",
      "2 exercices",
      "Aucun classement global",
    ],
    accent: "violet",
  });
}
