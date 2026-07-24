import { createGuideOgImage } from "@/components/guides/guide-og-image";

export const runtime = "edge";
export const alt =
  "RGPD pour un SaaS B2B : rôles, fonctions, contrat et données — Hagnéré Code";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return createGuideOgImage({
    title: "Que prévoir pour le RGPD de votre SaaS B2B ?",
    subtitle: "Suivre une donnée, de la collecte à la suppression",
    labels: ["Rôles", "Données", "Contrat", "Incident"],
    accent: "emerald",
  });
}
