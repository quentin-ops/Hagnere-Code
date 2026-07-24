import { createGuideOgImage } from "@/components/guides/guide-og-image";

export const runtime = "edge";
export const alt =
  "CRM sur mesure ou HubSpot : tester le processus avant de remplacer — Hagnéré Code";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return createGuideOgImage({
    title: "HubSpot, module spécifique ou CRM sur mesure ?",
    subtitle: "12 actions, 36 mois et une sortie testée",
    labels: ["Processus", "Droits", "Coût", "Sortie"],
    accent: "blue",
  });
}
