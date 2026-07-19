import { SITE_URL } from "./seo";

export interface WhitePaperEntry {
  slug: string;
  path: string;
  title: string;
  cardTitle: string;
  description: string;
  audience: string;
  datePublished: string;
  dateModified: string;
  readTimeMin: number;
  pdf: {
    href: string;
    downloadName: string;
    sizeBytes: number;
    sizeLabel: string;
  };
}

export const QUOTE_COMPARISON_WHITE_PAPER: WhitePaperEntry = {
  slug: "comparer-devis-site-internet",
  path: "/livres-blancs/comparer-devis-site-internet",
  title:
    "Comparer des devis de site internet sur 3 ans · Grille gratuite",
  cardTitle: "Grille de comparaison de devis web sur trois ans",
  description:
    "Une méthode vérifiable, une grille compatible Excel et Google Sheets, et un exemple rempli pour comparer trois devis web au-delà du prix de départ.",
  audience:
    "Dirigeants, responsables marketing, DSI et chefs de projet qui consultent plusieurs prestataires web.",
  datePublished: "2026-07-19",
  dateModified: "2026-07-19",
  readTimeMin: 22,
  pdf: {
    href:
      "/ressources/grille-comparaison-devis-web/livre-blanc-comparer-devis-site-internet-3-ans.pdf",
    downloadName: "livre-blanc-comparer-devis-site-internet-3-ans.pdf",
    sizeBytes: 66516,
    sizeLabel: "PDF · 65 Ko",
  },
};

export const WHITE_PAPERS: WhitePaperEntry[] = [
  QUOTE_COMPARISON_WHITE_PAPER,
];

export function whitePaperUrl(entry: WhitePaperEntry): string {
  return `${SITE_URL}${entry.path}`;
}
