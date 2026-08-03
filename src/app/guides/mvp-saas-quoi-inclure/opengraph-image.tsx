import { createGuideOgImage } from "@/components/guides/guide-og-image";

export const runtime = "edge";
export const alt =
  "MVP SaaS : sept familles pour décider quoi inclure dans le premier test";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return createGuideOgImage({
    title: "MVP SaaS : quoi inclure ?",
    subtitle: "Transformer le périmètre en contrat de test explicite",
    labels: [
      "7 familles",
      "5 traitements",
      "Charge manuelle",
      "STOP sans score",
    ],
    accent: "violet",
  });
}
