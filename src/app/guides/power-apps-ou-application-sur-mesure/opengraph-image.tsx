import { createGuideOgImage } from "@/components/guides/guide-og-image";

export const runtime = "edge";
export const alt =
  "Power Apps ou application sur mesure : diagnostic, TCO et plan de décision — Hagnéré Code";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return createGuideOgImage({
    title: "Power Apps ou application sur mesure ?",
    subtitle:
      "Preuves · 4 coûts comparés · correction ciblée · migration réversible",
    labels: ["Suspendre", "Conserver", "Renforcer", "Hybride", "Reconstruire"],
    accent: "violet",
  });
}
