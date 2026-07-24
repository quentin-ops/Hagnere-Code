import { createGuideOgImage } from "@/components/guides/guide-og-image";

export const runtime = "edge";
export const alt =
  "Site indexé mais sans trafic : vérifier les impressions, les clics et les pages — Hagnéré Code";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return createGuideOgImage({
    title: "Votre site est indexé, mais n’apporte aucune demande ?",
    subtitle: "Séparez indexation, impressions, clics et demandes",
    labels: ["Indexation", "Impressions", "Requêtes", "Clics", "Décision"],
    accent: "emerald",
  });
}
