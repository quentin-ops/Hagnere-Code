import { createGuideOgImage } from "@/components/guides/guide-og-image";

export const runtime = "edge";
export const alt =
  "Architecture multitenant SaaS : choisir ce qui doit être partagé ou dédié";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return createGuideOgImage({
    title: "Architecture multitenant SaaS",
    subtitle: "Choisir ce qui doit être partagé ou dédié",
    labels: ["10 couches", "5 familles", "Test A/B", "Aucun modèle universel"],
    accent: "violet",
  });
}
