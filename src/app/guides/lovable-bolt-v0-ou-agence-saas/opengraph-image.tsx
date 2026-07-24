import { createGuideOgImage } from "@/components/guides/guide-og-image";

export const runtime = "edge";
export const alt =
  "Lovable, Bolt, v0 ou agence : choisir comment lancer un SaaS — Hagnéré Code";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return createGuideOgImage({
    title: "Lovable, Bolt, v0 ou agence pour votre SaaS ?",
    subtitle: "8 vérifications pour choisir avant de construire",
    labels: ["Prototype", "Données", "Reprise", "Responsabilité"],
    accent: "violet",
  });
}
