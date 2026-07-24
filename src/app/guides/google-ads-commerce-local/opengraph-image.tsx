import { createGuideOgImage } from "@/components/guides/guide-og-image";

export const runtime = "edge";
export const alt =
  "Google Ads pour commerce local : relier appels, itinéraires et ventes — Hagnéré Code";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return createGuideOgImage({
    title: "Google Ads peut-il amener des clients en magasin ?",
    subtitle: "Distinguez signal, visite et vente observée",
    labels: ["Appel", "Réservation", "Itinéraire", "Visite", "Vente"],
    accent: "emerald",
  });
}
