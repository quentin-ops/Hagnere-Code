/**
 * Registre central des guides — SOURCE DE VÉRITÉ UNIQUE.
 *
 * Chaque guide déclaré ici alimente sa route, ses métadonnées et son JSON-LD.
 * Le hub, le sitemap et llms.txt utilisent PUBLISHED_GUIDES : un guide qui n'a
 * pas franchi la validation éditoriale documentée reste accessible par URL,
 * mais noindex.
 *
 * Pour ajouter un guide, suivre intégralement
 * docs/regle-or-vigilance-seo-publication.md,
 * docs/charte-qualite-guides.md et
 * docs/instructions-guide-de-qualite.md : recherche, quatre passes, contrôle
 * transversal, entrée ici, page, images dédiées, maillage et tests.
 * Le sitemap et llms.txt se synchronisent ensuite depuis ce registre ; ne pas
 * les modifier à la main.
 */

import { SITE_URL } from "./seo";
import {
  INDEXABLE_ROBOTS,
  PRIVATE_ROBOTS,
  isSearchIndexingEnabled,
} from "./search-indexing";

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
  /** Instant réel de première publication, ISO 8601 avec fuseau. */
  datePublished: string;
  /** Instant réel de dernière modification substantielle, ISO 8601 avec fuseau. */
  dateModified: string;
  readTimeMin: number;
  /** Images éditoriales visibles, en chemins absolus du site, pour Article. */
  articleImagePaths?: string[];
  featured?: boolean;
  /** Tant que la validation éditoriale manque, la route reste accessible mais noindex. */
  editorialStatus?: "ready-for-human-review";
}

export const GUIDES: GuideEntry[] = [
  {
    slug: "automatiser-processus-metier",
    title: "Quel processus métier automatiser en premier ?",
    cardTitle: "Quel processus automatiser en premier ?",
    metaDescription:
      "Choisissez le premier processus à automatiser : cinq portes bloquantes, sept réponses possibles et un calcul transparent avec vos propres données.",
    cardDescription:
      "Cinq portes bloquantes, sept réponses possibles et un calcul transparent pour choisir, reporter ou refuser une automatisation.",
    heroTitle: "Quel processus métier automatiser en premier ?",
    section: "Outils internes et automatisation",
    datePublished: "2026-07-29T17:01:33+02:00",
    dateModified: "2026-07-29T19:07:13Z",
    readTimeMin: 20,
    articleImagePaths: [
      "/guides/automatiser-processus-metier/article-processus-16x9.webp",
      "/guides/automatiser-processus-metier/article-processus-4x3.webp",
      "/guides/automatiser-processus-metier/article-processus-1x1.webp",
    ],
  },
  {
    slug: "valider-idee-saas-avant-developper",
    title: "Comment valider une idée SaaS avant de développer ?",
    cardTitle: "Valider une idée SaaS avant de développer",
    metaDescription:
      "Testez une idée SaaS avant de développer : problème, acheteur, prix, usage et critères pour continuer, changer ou arrêter.",
    cardDescription:
      "Séparez six questions, choisissez un test sans produit et décidez s’il faut continuer, changer l’idée, attendre ou arrêter.",
    heroTitle: "Valider une idée SaaS avant de développer",
    section: "SaaS et MVP",
    datePublished: "2026-07-30T07:04:32+02:00",
    dateModified: "2026-07-30T07:04:32+02:00",
    readTimeMin: 20,
    articleImagePaths: [
      "/guides/valider-idee-saas-avant-developper/article-validation-16x9.webp",
      "/guides/valider-idee-saas-avant-developper/article-validation-4x3.webp",
      "/guides/valider-idee-saas-avant-developper/article-validation-1x1.webp",
    ],
  },
  {
    slug: "prix-gestion-google-ads",
    title: "Prix de la gestion Google Ads en 2026 : 4 modèles comparés",
    cardTitle: "Prix d’une gestion Google Ads",
    metaDescription:
      "Comparez quatre modèles de rémunération Google Ads et calculez le coût complet à 3, 6 et 12 mois : média, honoraires, TVA, frais annexes et temps interne.",
    cardDescription:
      "Un guide et un calculateur local pour remettre quatre modes de rémunération sur la même base, sans confondre média, honoraires et acquisition.",
    heroTitle: "Combien coûte vraiment la gestion de Google Ads ?",
    section: "Google Ads & acquisition",
    datePublished: "2026-07-31T00:24:23+02:00",
    dateModified: "2026-07-31T00:24:23+02:00",
    readTimeMin: 32,
    articleImagePaths: [
      "/guides/prix-gestion-google-ads/article-prix-ads-16x9.webp",
      "/guides/prix-gestion-google-ads/article-prix-ads-4x3.webp",
      "/guides/prix-gestion-google-ads/article-prix-ads-1x1.webp",
    ],
  },
];

/** Guides ayant franchi la porte éditoriale documentée et donc découvrables. */
export const PUBLISHED_GUIDES = GUIDES.filter(
  (guide) => guide.editorialStatus !== "ready-for-human-review",
);

/**
 * Rend la politique d'indexation explicite au niveau de chaque guide.
 * Une preview reste toujours fermée, même pour un guide éditorialement validé.
 */
export function guideRobots(guide: GuideEntry) {
  const canBeIndexed =
    guide.editorialStatus !== "ready-for-human-review" &&
    isSearchIndexingEnabled(
      process.env.NEXT_PUBLIC_ENV,
      process.env.VERCEL_ENV,
    );

  return canBeIndexed ? INDEXABLE_ROBOTS : PRIVATE_ROBOTS;
}

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
  return new Date(iso).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Europe/Paris",
  });
}
