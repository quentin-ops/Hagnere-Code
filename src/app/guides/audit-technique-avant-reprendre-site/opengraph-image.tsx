import { createGuideOgImage } from "@/components/guides/guide-og-image";

export const runtime = "edge";
export const alt =
  "Audit technique avant reprise d’un site : niveaux, preuves, TCO et décision — Hagnéré Code";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return createGuideOgImage({
    title: "Quel audit avant de reprendre un site ?",
    subtitle: "3 niveaux · 18 domaines · TCO 12/36/60 mois",
    labels: ["STOP", "Preuves", "Trajectoires", "Dossier local"],
    accent: "blue",
  });
}
