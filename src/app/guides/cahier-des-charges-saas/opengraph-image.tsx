import { createGuideOgImage } from "@/components/guides/guide-og-image";

export const runtime = "edge";

export const alt =
  "Cahier des charges SaaS : les postes à aligner avant de comparer des devis";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return createGuideOgImage({
    title: "Cahier des charges SaaS",
    subtitle:
      "Ce qu’un document doit trancher pour que deux devis se comparent",
    labels: [
      "Décompte poste par poste",
      "Exigence testable",
      "Huit états d’abonnement",
      "Sortie et droits",
      "Grille de dépouillement",
    ],
    accent: "blue",
  });
}
