import { createGuideOgImage } from "@/components/guides/guide-og-image";

export const runtime = "edge";
export const alt =
  "Bubble ou SaaS sur mesure : comparer les preuves, le coût total et la capacité à changer de solution";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return createGuideOgImage({
    title: "Bubble ou SaaS sur mesure ?",
    subtitle: "Même besoin · preuves · coût total · changement testé",
    labels: ["Bubble", "Code dédié", "Hybride", "Simplifier", "Reporter"],
    accent: "emerald",
  });
}
