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
  /** Porte de publication explicite : seuls les guides `published` sont publics. */
  editorialStatus: "draft" | "review" | "published";
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
    editorialStatus: "published",
    // Guide mis en avant dans l'encart « Essentiel » du hub. Le drapeau doit
    // rester explicite : sans lui, le hub retombait sur PUBLISHED_GUIDES[0],
    // donc sur un accident d'ordre du tableau, et le badge « Essentiel » des
    // cartes de collection ne s'affichait jamais. Un seul guide publié peut
    // le porter (invariant verrouillé par src/lib/guides.test.ts).
    featured: true,
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
    slug: "signes-besoin-logiciel-metier",
    title: "Besoin d’un logiciel métier : le diagnostic en 6 réponses",
    cardTitle: "Votre entreprise a-t-elle besoin d’un logiciel métier ?",
    metaDescription:
      "Documentez trois blocages réels, sécurisez les urgences et comparez six réponses avant de choisir entre l’existant, un standard ou du sur-mesure.",
    cardDescription:
      "Trois situations réelles, six réponses comparées et une décision qui peut rester « observer ».",
    heroTitle: "Votre entreprise a-t-elle besoin d’un logiciel métier ?",
    section: "Outils internes et automatisation",
    editorialStatus: "published",
    datePublished: "2026-08-01T11:59:46+02:00",
    dateModified: "2026-08-01T11:59:46+02:00",
    readTimeMin: 21,
    articleImagePaths: [
      "/guides/signes-besoin-logiciel-metier/article-diagnostic-16x9.svg",
      "/guides/signes-besoin-logiciel-metier/article-diagnostic-4x3.svg",
      "/guides/signes-besoin-logiciel-metier/article-diagnostic-1x1.svg",
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
    editorialStatus: "published",
    datePublished: "2026-07-31T00:24:23+02:00",
    dateModified: "2026-07-31T00:24:23+02:00",
    readTimeMin: 32,
    articleImagePaths: [
      "/guides/prix-gestion-google-ads/article-prix-ads-16x9.webp",
      "/guides/prix-gestion-google-ads/article-prix-ads-4x3.webp",
      "/guides/prix-gestion-google-ads/article-prix-ads-1x1.webp",
    ],
  },
  {
    slug: "power-apps-ou-application-sur-mesure",
    title: "Power Apps ou application sur mesure : comment choisir ?",
    cardTitle: "Power Apps ou application sur mesure",
    metaDescription:
      "Power Apps ou application sur mesure ? Comparez limites vérifiées, coûts à 1, 3 et 5 ans, gouvernance et sortie avant de choisir.",
    cardDescription:
      "Une méthode sans score opaque, quatre coûts totaux de possession (TCO) à renseigner et un plan de migration réversible pour comparer les options.",
    heroTitle: "Power Apps ou application sur mesure : comment choisir ?",
    section: "Outils internes et automatisation",
    editorialStatus: "published",
    datePublished: "2026-07-23T21:31:02+02:00",
    dateModified: "2026-08-03T07:58:56+02:00",
    readTimeMin: 27,
    articleImagePaths: [
      "/guides/power-apps-ou-application-sur-mesure/article-power-apps-16x9.svg",
      "/guides/power-apps-ou-application-sur-mesure/article-power-apps-4x3.svg",
      "/guides/power-apps-ou-application-sur-mesure/article-power-apps-1x1.svg",
    ],
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
    editorialStatus: "published",
    datePublished: "2026-07-30T16:30:59+02:00",
    dateModified: "2026-07-30T16:30:59+02:00",
    readTimeMin: 16,
    articleImagePaths: [
      "/guides/plan-recette-application-metier/recette-preuve-16x9.webp",
      "/guides/plan-recette-application-metier/recette-preuve-4x3.webp",
      "/guides/plan-recette-application-metier/recette-preuve-1x1.webp",
    ],
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
    editorialStatus: "published",
    datePublished: "2026-07-30T22:03:29+02:00",
    dateModified: "2026-07-30T22:03:29+02:00",
    readTimeMin: 16,
    articleImagePaths: [
      "/guides/securite-application-metier/socle-securite-16x9.webp",
      "/guides/securite-application-metier/socle-securite-4x3.webp",
      "/guides/securite-application-metier/socle-securite-1x1.webp",
    ],
  },
  {
    slug: "cahier-des-charges-saas",
    title: "Comment rédiger un cahier des charges SaaS ?",
    cardTitle: "Rédiger un cahier des charges SaaS",
    metaDescription:
      "Rédigez un cahier des charges SaaS comparable : périmètre, droits, abonnement, données, support, sortie, preuves et inconnues bloquantes.",
    cardDescription:
      "Neuf blocs et cinq champs par bloc pour décrire le même produit, révéler les inconnues bloquantes et comparer des offres sur des preuves.",
    heroTitle: "Cahier des charges SaaS : faire chiffrer le même produit",
    section: "Préparer son projet",
    editorialStatus: "published",
    datePublished: "2026-07-22T07:29:32+02:00",
    dateModified: "2026-08-01T13:03:24+02:00",
    readTimeMin: 42,
    articleImagePaths: [
      "/guides/cahier-des-charges-saas/cahier-saas-16x9.webp",
      "/guides/cahier-des-charges-saas/cahier-saas-4x3.webp",
      "/guides/cahier-des-charges-saas/cahier-saas-1x1.webp",
    ],
  },
  {
    slug: "mvp-saas-quoi-inclure",
    title: "MVP SaaS : quoi inclure avant un premier client\u00a0?",
    cardTitle: "MVP SaaS : quoi inclure\u00a0?",
    metaDescription:
      "Définissez le MVP SaaS d’un premier client : quoi construire, gérer manuellement, intégrer ou reporter, avec charge calculée et STOP explicites.",
    cardDescription:
      "Sept familles, cinq choix et une charge manuelle calculée pour délimiter un premier test exploitable.",
    heroTitle: "MVP SaaS : quoi inclure avant le premier test\u00a0?",
    section: "SaaS et MVP",
    editorialStatus: "published",
    datePublished: "2026-07-20T15:19:41+02:00",
    dateModified: "2026-08-03T04:14:58+02:00",
    readTimeMin: 23,
    articleImagePaths: [
      "/guides/mvp-saas-quoi-inclure/contrat-test-mvp-16x9.webp",
      "/guides/mvp-saas-quoi-inclure/charge-manuelle-mvp-4x3.webp",
      "/guides/mvp-saas-quoi-inclure/decision-mvp-1x1.webp",
    ],
  },
  {
    slug: "pourquoi-site-pas-visible-google",
    title: "Pourquoi mon site n’est-il pas visible sur Google ?",
    cardTitle: "Pourquoi mon site n’est-il pas visible sur Google ?",
    metaDescription:
      "Suivez une URL de l’exploration aux clics dans Search Console, puis remplissez une fiche pour choisir entre corriger, recontrôler ou faire auditer.",
    cardDescription:
      "Une URL, une recherche et quatre contrôles dans Search Console pour trouver où la visibilité s’arrête avant de corriger.",
    heroTitle: "Pourquoi mon site n’est-il pas visible sur Google ?",
    section: "Référencement naturel",
    editorialStatus: "published",
    datePublished: "2026-08-18T12:42:00Z",
    dateModified: "2026-08-18T12:42:00Z",
    readTimeMin: 13,
    articleImagePaths: [
      "/guides/pourquoi-site-pas-visible-google/diagnostic-google-16x9.svg",
      "/guides/pourquoi-site-pas-visible-google/diagnostic-google-4x3.svg",
      "/guides/pourquoi-site-pas-visible-google/diagnostic-google-1x1.svg",
    ],
  },
];

/** Une entrée n'est publique que si sa porte éditoriale est explicitement ouverte. */
export function isGuidePublished(guide: GuideEntry): boolean {
  return guide.editorialStatus === "published";
}

/** Guides ayant franchi la porte éditoriale documentée et donc découvrables. */
export const PUBLISHED_GUIDES = GUIDES.filter(isGuidePublished);

/**
 * Rend la politique d'indexation explicite au niveau de chaque guide.
 * Une preview reste toujours fermée, même pour un guide éditorialement validé.
 */
export function guideRobots(guide: GuideEntry) {
  const canBeIndexed =
    isGuidePublished(guide) &&
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
