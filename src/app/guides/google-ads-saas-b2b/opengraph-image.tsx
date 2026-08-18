import { createGuideOgImage } from "@/components/guides/guide-og-image";

export const runtime = "edge";
export const alt =
  "Google Ads pour SaaS B2B : du clic au client rentable — Hagnéré Code";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return createGuideOgImage({
    title: "Google Ads peut-il être rentable pour votre SaaS B2B ?",
    subtitle: "CAC complet · payback · cycle commercial",
    labels: ["CIBLER", "MESURER", "SIGNER", "ACTIVER", "RENTABILISER"],
    accent: "violet",
  });
}
