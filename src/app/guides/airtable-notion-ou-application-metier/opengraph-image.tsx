import { createGuideOgImage } from "@/components/guides/guide-og-image";

export const runtime = "edge";
export const alt =
  "Airtable, Notion ou application métier : douze contrôles pour décider — Hagnéré Code";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return createGuideOgImage({
    title: "Airtable, Notion ou application métier ?",
    subtitle:
      "Usage réel · droits · données · automatisations · sortie réversible",
    labels: ["STOP", "Conserver", "Renforcer", "Hybride", "Sortir"],
    accent: "violet",
  });
}
