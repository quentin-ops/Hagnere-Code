/**
 * Registre central des guides — SOURCE DE VÉRITÉ UNIQUE.
 *
 * Chaque guide déclaré ici alimente automatiquement :
 *   - le hub /guides (cartes + ItemList JSON-LD),
 *   - le sitemap (src/app/sitemap.ts),
 *   - les métadonnées et JSON-LD de la page du guide elle-même.
 *
 * Pour ajouter un guide : (1) ajouter son entrée ici, (2) créer
 * src/app/guides/<slug>/page.tsx en copiant le pattern du guide budget.
 * Rien d'autre à synchroniser — le test structurel du sitemap échoue si
 * la page existe sans entrée ici (et inversement le hub reflète ce registre).
 */

import { SITE_URL } from "./seo";

export interface GuideEntry {
  slug: string;
  /** Balise <title> (≤ 60 caractères de préférence). */
  title: string;
  /** Titre court pour les cartes du hub. */
  cardTitle: string;
  /** Meta description (≤ 155 caractères). */
  metaDescription: string;
  /** Description pour les cartes du hub (1-2 phrases). */
  cardDescription: string;
  /** H1 de la page. */
  heroTitle: string;
  /** Catégorie éditoriale (articleSection du JSON-LD + tag de carte). */
  section: string;
  datePublished: string; // ISO YYYY-MM-DD
  dateModified: string; // ISO YYYY-MM-DD
  readTimeMin: number;
  featured?: boolean;
}

export const GUIDES: GuideEntry[] = [
  {
    slug: "combien-coute-un-site-internet",
    title: "Combien coûte un site internet en 2026 ? Prix réels · Hagnéré Code",
    cardTitle: "Combien coûte un site internet en 2026 ?",
    metaDescription:
      "De 6 900 € à 120 000 € : les prix réels d'un site internet en 2026, poste par poste. Coûts cachés, exemples de devis, aides et méthode pour budgéter juste.",
    cardDescription:
      "Fourchettes réelles par type de site et de prestataire, coûts cachés sur 3 ans, décorticage de devis, aides 2026 et méthode pour budgéter juste.",
    heroTitle: "Combien coûte un site internet professionnel en 2026 ?",
    section: "Budget & prix",
    datePublished: "2026-07-11",
    dateModified: "2026-07-13",
    readTimeMin: 16,
    featured: true,
  },
];

export function guidePath(g: GuideEntry): string {
  return `/guides/${g.slug}`;
}

export function guideUrl(g: GuideEntry): string {
  return `${SITE_URL}${guidePath(g)}`;
}

export function getGuide(slug: string): GuideEntry {
  const g = GUIDES.find((e) => e.slug === slug);
  if (!g) throw new Error(`Guide inconnu dans src/lib/guides.ts : ${slug}`);
  return g;
}

/** « 13 juillet 2026 » à partir d'une date ISO. */
export function formatGuideDate(iso: string): string {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Europe/Paris",
  });
}
