import type { Metadata } from "next";
import { ExcelCalculator } from "@/components/tools/ExcelCalculator";

export const metadata: Metadata = {
  title: "Calculateur : combien vous coûte votre Excel ? · Hagnéré Code",
  description:
    "Calculez en 2 min le coût caché de vos Excel métier : temps perdu, erreurs, ressaisies. Comparez avec le prix d'un outil sur mesure et obtenez votre ROI en mois. Gratuit, sans engagement.",
  alternates: { canonical: "/outils/calculateur-cout-excel" },
  openGraph: {
    title: "Combien vous coûte réellement votre Excel ?",
    description:
      "Calculateur gratuit du coût caché de vos tableurs métier. ROI outil sur mesure en mois.",
    url: "/outils/calculateur-cout-excel",
    type: "website",
  },
};

export default function Page() {
  return <ExcelCalculator />;
}
