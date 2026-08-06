import { createGuideOgImage } from "@/components/guides/guide-og-image";

export const runtime = "edge";
export const alt =
  "Back-office sur mesure pour PME : contrat d’écran, exceptions et cinq options — Hagnéré Code";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return createGuideOgImage({
    title: "Back-office sur mesure pour PME",
    subtitle: "Rôle · action · données · preuve · exception · reprise",
    labels: ["8 écrans", "5 options", "0 score caché"],
    accent: "violet",
  });
}
