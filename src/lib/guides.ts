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
    slug: "reprendre-logiciel-metier-existant",
    title: "Reprendre un logiciel métier : le test de relève",
    cardTitle: "Reprendre un logiciel métier existant",
    metaDescription:
      "Faites le test de relève : vérifiez code, accès, déploiement, sauvegardes, données et contrat avant de confier votre logiciel à une nouvelle équipe.",
    cardDescription:
      "Un test de relève en cinq capacités et un procès-verbal de reprise pour décider de reprendre, limiter la mission ou reporter la bascule.",
    heroTitle: "Reprendre un logiciel métier existant sans signer à l’aveugle",
    section: "Maintenance & reprise",
    datePublished: "2026-07-30T12:47:39+02:00",
    dateModified: "2026-07-30T12:47:39+02:00",
    readTimeMin: 12,
    articleImagePaths: [
      "/guides/reprendre-logiciel-metier-existant/reprise-logiciel-16x9.webp",
      "/guides/reprendre-logiciel-metier-existant/reprise-logiciel-4x3.webp",
      "/guides/reprendre-logiciel-metier-existant/reprise-logiciel-1x1.webp",
    ],
    editorialStatus: "ready-for-human-review",
  },
  {
    slug: "migrer-logiciel-metier-sans-interruption",
    title: "Migrer un logiciel métier sans interruption",
    cardTitle: "Migrer un logiciel métier sans interrompre l’activité",
    metaDescription:
      "Préparez une migration sans arrêt subi : un logiciel de référence, cinq preuves, une répétition et assez de temps pour décider ou revenir.",
    cardDescription:
      "Cinq preuves et un budget en minutes pour basculer, réduire le lot ou reporter sans masquer les inconnues.",
    heroTitle: "Migrer un logiciel métier sans interrompre l’activité",
    section: "Outils internes et migration",
    datePublished: "2026-07-30T14:53:22+02:00",
    dateModified: "2026-07-30T14:53:22+02:00",
    readTimeMin: 19,
    articleImagePaths: [
      "/guides/migrer-logiciel-metier-sans-interruption/migration-reversible-16x9.webp",
      "/guides/migrer-logiciel-metier-sans-interruption/migration-reversible-4x3.webp",
      "/guides/migrer-logiciel-metier-sans-interruption/migration-reversible-1x1.webp",
    ],
    editorialStatus: "ready-for-human-review",
  },
  {
    slug: "plan-recette-application-metier",
    title: "Plan de recette d’une application métier",
    cardTitle: "Préparer la recette d’une application métier",
    metaDescription:
      "Transformez vos besoins métier en cas de recette rejouables, preuves et décision, sans masquer tests critiques, anomalies ni réserves.",
    cardDescription:
      "Une chaîne besoin, cas, preuve et huit points non compensables pour préparer une décision sans cacher les échecs ni les réserves.",
    heroTitle:
      "Plan de recette d’une application métier : prouver avant d’accepter",
    section: "Préparer son projet",
    datePublished: "2026-07-30T16:30:59+02:00",
    dateModified: "2026-07-30T16:30:59+02:00",
    readTimeMin: 16,
    articleImagePaths: [
      "/guides/plan-recette-application-metier/recette-preuve-16x9.webp",
      "/guides/plan-recette-application-metier/recette-preuve-4x3.webp",
      "/guides/plan-recette-application-metier/recette-preuve-1x1.webp",
    ],
    editorialStatus: "ready-for-human-review",
  },
  {
    slug: "choisir-prestataire-application-metier",
    title: "Choisir un prestataire d’application métier",
    cardTitle: "Choisir le prestataire de son application métier",
    metaDescription:
      "Comparez des prestataires sur un même cas : périmètre, coûts, validation, données, droits, maintenance et sortie, sans score global.",
    cardDescription:
      "Un cas métier commun, huit points non compensables et un outil local pour choisir, préciser, cadrer ou reporter.",
    heroTitle: "Comment choisir le prestataire de votre application métier ?",
    section: "Préparer son projet",
    datePublished: "2026-07-30T18:41:28+02:00",
    dateModified: "2026-07-30T18:41:28+02:00",
    readTimeMin: 17,
    articleImagePaths: [
      "/guides/choisir-prestataire-application-metier/comparaison-preuves-16x9.webp",
      "/guides/choisir-prestataire-application-metier/comparaison-preuves-4x3.webp",
      "/guides/choisir-prestataire-application-metier/comparaison-preuves-1x1.webp",
    ],
    editorialStatus: "ready-for-human-review",
  },
  {
    slug: "securite-application-metier",
    title: "Sécurité d’une application métier avant sa mise en service",
    cardTitle: "Sécurité d’une application métier",
    metaDescription:
      "Menaces, sauvegardes testées, journaux, alertes et responsables : fixez des exigences proportionnées avant la mise en service.",
    cardDescription:
      "Une méthode sans score pour obtenir des preuves, tester la restauration, attribuer les alertes et décider de la mise en service.",
    heroTitle: "Quel socle de sécurité exiger pour une application métier ?",
    section: "Préparer son projet",
    datePublished: "2026-07-30T22:03:29+02:00",
    dateModified: "2026-07-30T22:03:29+02:00",
    readTimeMin: 16,
    articleImagePaths: [
      "/guides/securite-application-metier/socle-securite-16x9.webp",
      "/guides/securite-application-metier/socle-securite-4x3.webp",
      "/guides/securite-application-metier/socle-securite-1x1.webp",
    ],
    editorialStatus: "ready-for-human-review",
  },
  {
    slug: "droits-acces-application-metier",
    title: "Droits d’accès d’une application métier",
    cardTitle: "Droits d’accès d’une application métier",
    metaDescription:
      "Définissez qui peut voir, modifier, valider, exporter ou supprimer quoi : matrice sans score, portée, refus, cycle de vie et tests d’accès.",
    cardDescription:
      "Une matrice de dix dimensions, des STOP non compensables et un outil local pour préciser rôles, portée, refus, revue et tests.",
    heroTitle: "Qui peut voir et modifier quoi dans votre application métier ?",
    section: "Applications métiers et outils internes",
    datePublished: "2026-07-31T01:07:59+02:00",
    dateModified: "2026-07-31T01:07:59+02:00",
    readTimeMin: 14,
    articleImagePaths: [
      "/guides/droits-acces-application-metier/matrice-droits-16x9.webp",
      "/guides/droits-acces-application-metier/matrice-droits-4x3.webp",
      "/guides/droits-acces-application-metier/matrice-droits-1x1.webp",
    ],
    editorialStatus: "ready-for-human-review",
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
