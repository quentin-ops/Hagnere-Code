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
      "Mesurez quatre processus en une semaine, écartez ceux qui échouent aux cinq questions, puis lisez un décompte à douze mois qui sort négatif.",
    cardDescription:
      "Comment mesurer un processus, ce que les plateformes facturent vraiment, et un décompte à douze mois qui sort négatif de 546 €.",
    heroTitle: "Quel processus métier automatiser en premier\u00a0?",
    section: "Outils internes et automatisation",
    editorialStatus: "published",
    // Guide mis en avant dans l'encart « Essentiel » du hub. Le drapeau doit
    // rester explicite : sans lui, le hub retombait sur PUBLISHED_GUIDES[0],
    // donc sur un accident d'ordre du tableau, et le badge « Essentiel » des
    // cartes de collection ne s'affichait jamais. Un seul guide publié peut
    // le porter (invariant verrouillé par src/lib/guides.test.ts).
    featured: true,
    datePublished: "2026-07-29T17:01:33+02:00",
    dateModified: "2026-08-28T18:00:00+02:00",
    readTimeMin: 21,
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
    readTimeMin: 34,
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
      "Gestion Google Ads : forfait, pourcentage, hybride ou temps passé, le coût complet à 3, 6 et 12 mois et le budget média où l’ordre s’inverse.",
    cardDescription:
      "Le décompte ligne à ligne d’un cas construit à 5 000 € HT de média par mois, les trois seuils où le classement des modèles s’inverse, et le prix d’une sortie.",
    heroTitle: "Combien coûte vraiment la gestion de Google Ads ?",
    section: "Google Ads & acquisition",
    editorialStatus: "published",
    datePublished: "2026-07-31T00:24:23+02:00",
    dateModified: "2026-08-28T18:00:00+02:00",
    readTimeMin: 15,
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
    readTimeMin: 19,
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
      "Compter les cas, chiffrer les jours, écrire des seuils mesurables : la recette d’une application métier, calculée sur un cas construit.",
    cardDescription:
      "Le décompte des cas, le budget en jours de votre équipe et la réécriture des critères d’acceptation avec seuil, assiette et fenêtre de mesure.",
    heroTitle:
      "Plan de recette d’une application métier : prouver avant d’accepter",
    section: "Préparer son projet",
    editorialStatus: "published",
    datePublished: "2026-07-30T16:30:59+02:00",
    dateModified: "2026-07-30T16:30:59+02:00",
    readTimeMin: 20,
    articleImagePaths: [
      "/guides/plan-recette-application-metier/recette-preuve-16x9.webp",
      "/guides/plan-recette-application-metier/recette-preuve-4x3.webp",
      "/guides/plan-recette-application-metier/recette-preuve-1x1.webp",
    ],
  },
  {
    slug: "securite-application-metier",
    title: "Sécurité d’une application métier : les 4 mesures à faire",
    cardTitle: "Sécurité d’une application métier",
    metaDescription:
      "Restauration chronométrée, alerte suivie, compte témoin rejoué, dépendances triées : quatre mesures et le coût de chaque échec.",
    cardDescription:
      "Quatre mesures reproductibles avant d’ouvrir les vraies données : ce qu’on lance, le nombre qu’on lit, le seuil qui tranche et ce que coûte un échec.",
    heroTitle:
      "Sécurité d’une application métier : que mesurer avant les vraies données ?",
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
    title: "Comment rédiger un cahier des charges SaaS\u00a0?",
    cardTitle: "Rédiger un cahier des charges SaaS",
    metaDescription:
      "Trois devis pour le même SaaS, de 34\u00a0000 à 129\u00a0000\u00a0€ HT\u00a0: le décompte poste par poste, les exigences testables, la grille de dépouillement.",
    cardDescription:
      "Le décompte qui ramène trois devis au même produit, les exigences dont on sait écrire l’échec, et la grille à joindre aux candidats.",
    heroTitle:
      "Cahier des charges SaaS\u00a0: trois devis pour le même produit et un écart de 3,8 à 1",
    section: "Préparer son projet",
    editorialStatus: "published",
    datePublished: "2026-07-22T07:29:32+02:00",
    dateModified: "2026-08-28T16:05:00+02:00",
    readTimeMin: 20,
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
      "Quoi mettre dans le premier lot d’un SaaS, ce qui peut rester manuel, et pourquoi passer de 5 à 10 écrans coûte 15\u00a0000\u00a0€ HT de plus sur notre grille.",
    cardDescription:
      "Sept responsabilités à attribuer, six ajouts inutiles à retirer et une charge humaine calculée avant la première ligne de code.",
    heroTitle: "MVP SaaS : quoi inclure avant le premier test\u00a0?",
    section: "SaaS et MVP",
    editorialStatus: "published",
    datePublished: "2026-07-20T15:19:41+02:00",
    dateModified: "2026-08-28T17:05:00+02:00",
    readTimeMin: 19,
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
      "Cinq pannes se cachent derrière un site invisible sur Google : la commande à taper, le champ à lire dans Search Console, ce que le constat ne prouve pas.",
    cardDescription:
      "Cinq pannes derrière un site invisible sur Google, et le protocole de mesure qui dit laquelle est la vôtre avant de corriger quoi que ce soit.",
    heroTitle: "Pourquoi mon site n’est-il pas visible sur Google ?",
    section: "Référencement naturel",
    editorialStatus: "published",
    datePublished: "2026-08-18T12:42:00Z",
    dateModified: "2026-08-28T09:00:00Z",
    readTimeMin: 20,
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
