import { createGuideOgImage } from "@/components/guides/guide-og-image";

export const runtime = "edge";
export const alt =
  "Google Ads pour SaaS B2B : relier le clic au contrat signé — Hagnéré Code";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return createGuideOgImage({
    title: "Google Ads est-il rentable pour votre SaaS B2B ?",
    subtitle: "Remontez du contrat signé jusqu’au clic",
    labels: ["Contrat", "Proposition", "Prospect", "Démo", "Clic"],
    accent: "violet",
  });
}
