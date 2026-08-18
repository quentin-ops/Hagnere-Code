import { createGuideOgImage } from "@/components/guides/guide-og-image";

export const runtime = "edge";
export const alt =
  "RGPD SaaS B2B : rôles, DPA, transferts, fonctions et sortie — Hagnéré Code";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return createGuideOgImage({
    title: "Quel dossier RGPD préparer pour un SaaS B2B ?",
    subtitle: "Faire coïncider le produit, le DPA et les preuves",
    labels: ["Rôles", "Transferts", "Tests", "Sortie"],
    accent: "emerald",
  });
}
