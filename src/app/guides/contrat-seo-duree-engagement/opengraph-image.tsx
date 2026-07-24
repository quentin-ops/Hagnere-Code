import { createGuideOgImage } from "@/components/guides/guide-og-image";

export const runtime = "edge";
export const alt =
  "Contrat SEO : durée, travaux, documents et sortie — Hagnéré Code";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return createGuideOgImage({
    title: "Faut-il signer douze mois de SEO ?",
    subtitle: "Relisez durée, travail, documents et sortie",
    labels: ["Coût", "Travaux", "Documents", "Accès", "Sortie"],
    accent: "amber",
  });
}
