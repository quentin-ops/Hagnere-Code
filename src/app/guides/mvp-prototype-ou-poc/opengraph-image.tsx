import { createGuideOgImage } from "@/components/guides/guide-og-image";

export const runtime = "edge";
export const alt =
  "Prototype, POC, pilote ou MVP : choisir selon la preuve attendue";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return createGuideOgImage({
    title: "Prototype, POC, pilote ou MVP ?",
    subtitle: "La question à trancher détermine le test à construire",
    labels: [
      "Prototype · parcours",
      "POC · faisabilité",
      "Pilote · vrai travail",
      "MVP · apprentissage",
    ],
    accent: "blue",
  });
}
