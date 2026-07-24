import { createGuideOgImage } from "@/components/guides/guide-og-image";

export const runtime = "edge";
export const alt =
  "Audit technique avant la reprise d’un site : accès, restauration et décision — Hagnéré Code";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return createGuideOgImage({
    title: "Peut-on reprendre ce site sans prendre un risque inutile ?",
    subtitle: "3 vérifications avant la promesse de maintenance",
    labels: ["Accès", "Restauration", "Fonctions", "GO ou STOP"],
    accent: "blue",
  });
}
