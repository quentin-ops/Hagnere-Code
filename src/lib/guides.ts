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
    title: "Combien coûte un site internet en 2026 ? · Hagnéré Code",
    cardTitle: "Combien coûte un site internet en 2026 ?",
    metaDescription:
      "De 800 € à 120 000 € : les prix réels d'un site internet en 2026 par type et prestataire. Coûts cachés, coût sur 3 ans, aides et méthode pour budgéter.",
    cardDescription:
      "Fourchettes réelles par type de site et de prestataire, coût total sur 3 ans, devis décortiqué ligne par ligne, aides 2026 et méthode pour budgéter juste.",
    heroTitle: "Combien coûte un site internet professionnel en 2026 ?",
    section: "Budget & prix",
    datePublished: "2026-07-11",
    dateModified: "2026-07-13",
    readTimeMin: 22,
    featured: true,
  },
  {
    slug: "combien-coute-une-application-mobile",
    title: "Combien coûte une application mobile ? · Hagnéré Code",
    cardTitle: "Combien coûte une application mobile en 2026 ?",
    metaDescription:
      "De 5 000 € à 150 000 € : les prix réels d'une application mobile en 2026, commissions des stores, maintenance, coût sur 3 ans et méthode pour budgéter.",
    cardDescription:
      "Prix par type d'app et par prestataire, commissions Apple/Google, maintenance obligatoire, coût total sur 3 ans et devis de MVP décortiqué ligne par ligne.",
    heroTitle: "Combien coûte une application mobile en 2026 ?",
    section: "Budget & prix",
    datePublished: "2026-07-13",
    dateModified: "2026-07-13",
    readTimeMin: 19,
  },
  {
    slug: "prix-site-vitrine",
    title: "Prix d'un site vitrine en 2026 : tarifs réels · Hagnéré Code",
    cardTitle: "Prix d'un site vitrine en 2026",
    metaDescription:
      "De 500 € à 22 000 € : les prix réels d'un site vitrine en 2026 par gamme, prestataire et socle. Ce qui est inclus à chaque prix, coût sur 3 ans, méthode.",
    cardDescription:
      "Tarifs réels par gamme et par prestataire, grille « inclus / en supplément », coût total sur 3 ans abonnement vs achat, et notre grille publique justifiée.",
    heroTitle: "Prix d'un site vitrine en 2026 : le guide complet",
    section: "Budget & prix",
    datePublished: "2026-07-14",
    dateModified: "2026-07-14",
    readTimeMin: 19,
  },
  {
    slug: "prix-site-e-commerce",
    title: "Prix site e-commerce 2026 : 2 000 à 80 000 € · Hagnéré Code",
    cardTitle: "Prix d'un site e-commerce en 2026 : le vrai budget",
    metaDescription:
      "Le prix réel d'un site e-commerce en 2026 : grilles par plateforme, coût sur 3 ans, commissions, logistique et un devis d'agence décortiqué ligne à ligne.",
    cardDescription:
      "Grilles Shopify, WooCommerce, PrestaShop et sur-mesure, coût total sur 3 ans, commissions et logistique enfin chiffrées, devis réel ligne à ligne.",
    heroTitle: "Prix d'un site e-commerce : le vrai budget en 2026 (+ devis décortiqué)",
    section: "Budget & prix",
    datePublished: "2026-07-16",
    dateModified: "2026-07-16",
    readTimeMin: 22,
  },
  {
    slug: "nextjs-ou-wordpress",
    title: "Next.js ou WordPress en 2026 : le comparatif · Hagnéré Code",
    cardTitle: "Next.js ou WordPress : que choisir en 2026 ?",
    metaDescription:
      "Next.js ou WordPress pour votre site en 2026 ? Comparatif pour dirigeants : coûts sur 3 ans, sécurité et performance chiffrées, verdict clair par profil.",
    cardDescription:
      "Le comparatif écrit pour les dirigeants, pas pour les développeurs : coût total sur 3 ans, sécurité et performance sourcées, verdict tranché par profil.",
    heroTitle: "Next.js ou WordPress : le comparatif honnête pour décider en 2026",
    section: "Comparatifs & choix",
    datePublished: "2026-07-16",
    dateModified: "2026-07-16",
    readTimeMin: 21,
  },
  {
    slug: "cahier-des-charges-site-internet",
    title: "Cahier des charges site internet : modèle 2026 · Hagnéré Code",
    cardTitle: "Cahier des charges de site internet : modèle + exemple",
    metaDescription:
      "Le modèle complet de cahier des charges de site internet, commenté par une agence : 10 sections, exemple rempli, erreurs à éviter et exigences 2026.",
    cardDescription:
      "Le modèle en 10 sections commenté de l'intérieur par une agence qui en reçoit chaque semaine, avec exemple rempli, erreurs fatales et exigences 2026.",
    heroTitle: "Cahier des charges de site internet : le modèle complet (+ exemple)",
    section: "Cadrer son projet",
    datePublished: "2026-07-15",
    dateModified: "2026-07-15",
    readTimeMin: 20,
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
