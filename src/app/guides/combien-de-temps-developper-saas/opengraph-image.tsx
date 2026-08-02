import { createGuideOgImage } from "@/components/guides/guide-og-image";

export const runtime = "edge";

export const alt =
  "Combien de temps pour développer un SaaS : dépendances, capacité et scénarios";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return createGuideOgImage({
    title: "Combien de temps pour développer un SaaS ?",
    subtitle: "Calculer une chaîne relative, puis la faire revoir",
    labels: [
      "Ligne d’arrivée",
      "Dépendances",
      "Capacité",
      "Stress combiné",
      "STOP sans score",
    ],
    accent: "violet",
  });
}
