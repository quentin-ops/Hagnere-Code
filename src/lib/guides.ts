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
    slug: "calculer-roi-application-metier",
    title: "ROI d’une application métier : calcul et cas complet",
    cardTitle: "Calculer le ROI d’une application métier",
    metaDescription:
      "Calculez le ROI d’une application métier sans confondre trésorerie et temps gagné : coût total, scénarios, délai de retour et comparaison des options.",
    cardDescription:
      "Deux lectures du ROI, douze familles de coûts et trois scénarios pour décider sans transformer une inconnue en zéro.",
    heroTitle:
      "Calculer le ROI d’une application métier sans inventer les gains",
    section: "Outils internes et automatisation",
    datePublished: "2026-07-31T05:30:49+02:00",
    dateModified: "2026-07-31T05:30:49+02:00",
    readTimeMin: 23,
    articleImagePaths: [
      "/guides/calculer-roi-application-metier/article-roi-16x9.webp",
      "/guides/calculer-roi-application-metier/article-roi-4x3.webp",
      "/guides/calculer-roi-application-metier/article-roi-1x1.webp",
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
    slug: "remplacer-microsoft-access-application-web",
    title: "Remplacer Microsoft Access : 7 options comparées",
    cardTitle: "Remplacer Microsoft Access sans perdre le métier",
    metaDescription:
      "Comment remplacer Access sans perdre données ni règles métier ? Inventaire, 7 options, limites des conversions automatiques et migration progressive.",
    cardDescription:
      "Un dossier de sortie local, sept options comparées sur les mêmes critères et une migration progressive, sans imposer d’emblée une application web.",
    heroTitle:
      "Remplacer Microsoft Access sans perdre le travail qu’il contient",
    section: "Outils internes et automatisation",
    datePublished: "2026-07-22T11:09:47+02:00",
    dateModified: "2026-08-02T22:15:51+02:00",
    readTimeMin: 20,
    articleImagePaths: [
      "/guides/remplacer-microsoft-access-application-web/article-sortie-access-16x9.svg",
      "/guides/remplacer-microsoft-access-application-web/article-sortie-access-4x3.svg",
      "/guides/remplacer-microsoft-access-application-web/article-sortie-access-1x1.svg",
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
    datePublished: "2026-07-23T21:31:02+02:00",
    dateModified: "2026-08-03T07:58:56+02:00",
    readTimeMin: 26,
    articleImagePaths: [
      "/guides/power-apps-ou-application-sur-mesure/article-power-apps-16x9.svg",
      "/guides/power-apps-ou-application-sur-mesure/article-power-apps-4x3.svg",
      "/guides/power-apps-ou-application-sur-mesure/article-power-apps-1x1.svg",
    ],
  },
  {
    slug: "airtable-notion-ou-application-metier",
    title: "Airtable, Notion ou application métier : comment choisir ?",
    cardTitle: "Airtable, Notion ou application métier",
    metaDescription:
      "Comparez Airtable, Notion et une application métier avec 12 tests sur les droits, les données, l’exploitation et la sortie, sans imposer le sur-mesure.",
    cardDescription:
      "Douze preuves, cinq issues et une grille de sortie pour décider s’il faut garder Airtable ou Notion, renforcer l’organisation, hybrider ou migrer.",
    heroTitle: "Airtable, Notion ou application métier : comment choisir ?",
    section: "Outils internes et automatisation",
    datePublished: "2026-08-05T21:41:54+02:00",
    dateModified: "2026-08-05T21:41:54+02:00",
    readTimeMin: 24,
    articleImagePaths: [
      "/guides/airtable-notion-ou-application-metier/article-airtable-notion-16x9.svg",
      "/guides/airtable-notion-ou-application-metier/article-airtable-notion-4x3.svg",
      "/guides/airtable-notion-ou-application-metier/article-airtable-notion-1x1.svg",
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
    datePublished: "2026-07-22T07:29:32+02:00",
    dateModified: "2026-08-01T13:03:24+02:00",
    readTimeMin: 42,
    articleImagePaths: [
      "/guides/cahier-des-charges-saas/cahier-saas-16x9.webp",
      "/guides/cahier-des-charges-saas/cahier-saas-4x3.webp",
      "/guides/cahier-des-charges-saas/cahier-saas-1x1.webp",
    ],
    editorialStatus: "ready-for-human-review",
  },
  {
    slug: "combien-de-temps-developper-saas",
    title: "Combien de temps faut-il pour développer un SaaS ?",
    cardTitle: "Estimer le délai de développement d’un SaaS",
    metaDescription:
      "Calculez un calendrier SaaS à partir des dépendances, des capacités et de quatre scénarios, sans durée moyenne ni promesse de date.",
    cardDescription:
      "Un planificateur local pour relier les tâches, tester quatre scénarios, garder les inconnues visibles et mesurer l’écart au délai disponible.",
    heroTitle: "Combien de temps faut-il pour développer un SaaS ?",
    section: "Préparer son projet",
    datePublished: "2026-07-23T00:59:26+02:00",
    dateModified: "2026-08-02T22:39:26+02:00",
    readTimeMin: 17,
    articleImagePaths: [
      "/guides/combien-de-temps-developper-saas/calendrier-saas-16x9.webp",
      "/guides/combien-de-temps-developper-saas/calendrier-saas-4x3.webp",
      "/guides/combien-de-temps-developper-saas/calendrier-saas-1x1.webp",
    ],
    editorialStatus: "ready-for-human-review",
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
    datePublished: "2026-07-20T15:19:41+02:00",
    dateModified: "2026-08-03T04:14:58+02:00",
    readTimeMin: 23,
    articleImagePaths: [
      "/guides/mvp-saas-quoi-inclure/contrat-test-mvp-16x9.webp",
      "/guides/mvp-saas-quoi-inclure/charge-manuelle-mvp-4x3.webp",
      "/guides/mvp-saas-quoi-inclure/decision-mvp-1x1.webp",
    ],
    editorialStatus: "ready-for-human-review",
  },
  {
    slug: "prioriser-fonctionnalites-mvp-saas",
    title: "Comment prioriser les fonctionnalités d’un SaaS ?",
    cardTitle: "Prioriser les fonctionnalités d’un SaaS",
    metaDescription:
      "Transformez les demandes SaaS en problèmes prouvés, séparez les urgences, puis vérifiez dépendances et capacité avant de choisir le prochain lot.",
    cardDescription:
      "Un atelier sans score magique pour séparer les voies critiques, tester les hypothèses faibles et vérifier le prochain lot avec ses dépendances.",
    heroTitle:
      "Quelles fonctionnalités développer maintenant dans votre SaaS\u00a0?",
    section: "SaaS et MVP",
    datePublished: "2026-07-23T14:17:43+02:00",
    dateModified: "2026-08-03T10:46:05+02:00",
    readTimeMin: 10,
    articleImagePaths: [
      "/guides/prioriser-fonctionnalites-mvp-saas/demandes-preuves-voies-16x9.webp",
      "/guides/prioriser-fonctionnalites-mvp-saas/lot-dependances-capacite-4x3.webp",
      "/guides/prioriser-fonctionnalites-mvp-saas/revue-humaine-decisions-1x1.webp",
    ],
    editorialStatus: "ready-for-human-review",
  },
  {
    slug: "agence-saas-ou-freelance",
    title: "Agence SaaS ou freelance : quelle équipe choisir ?",
    cardTitle: "Agence SaaS ou freelance",
    metaDescription:
      "Choisissez freelance, agence, équipe interne ou hybride selon la phase du SaaS, les responsabilités, le relais et les éléments à récupérer.",
    cardDescription:
      "Une carte par phase pour nommer qui décide, réalise, contrôle, relaie et remet, puis comparer cinq formes d’équipe sans classement global.",
    heroTitle: "Agence SaaS ou freelance\u00a0: quelle équipe choisir\u00a0?",
    section: "SaaS et MVP",
    datePublished: "2026-07-22T11:05:08+02:00",
    dateModified: "2026-08-04T14:40:46+02:00",
    readTimeMin: 13,
    articleImagePaths: [
      "/guides/agence-saas-ou-freelance/equipe-responsabilites-16x9.svg",
      "/guides/agence-saas-ou-freelance/carte-responsabilites-4x3.svg",
      "/guides/agence-saas-ou-freelance/relais-incident-1x1.svg",
    ],
    editorialStatus: "ready-for-human-review",
  },
  {
    slug: "mvp-prototype-ou-poc",
    title: "Prototype, POC, pilote ou MVP : que choisir ?",
    cardTitle: "Prototype, POC, pilote ou MVP ?",
    metaDescription:
      "Choisissez le test adapté à l’inconnue à lever : prototype, preuve de concept, pilote ou MVP, avec preuve, personnes, passage et arrêt.",
    cardDescription:
      "Une matrice de preuve, une fiche en huit champs et un cas calculé pour choisir, combiner, reporter ou arrêter avant de construire.",
    heroTitle: "Prototype, POC, pilote ou MVP\u00a0: que construire d’abord ?",
    section: "SaaS et MVP",
    datePublished: "2026-07-23T00:59:26+02:00",
    dateModified: "2026-08-05T10:01:50+02:00",
    readTimeMin: 15,
    articleImagePaths: [
      "/guides/mvp-prototype-ou-poc/objectif-preuve-public-passage-16x9.svg",
      "/guides/mvp-prototype-ou-poc/fiche-experience-4x3.svg",
      "/guides/mvp-prototype-ou-poc/poursuivre-reduire-arreter-1x1.svg",
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
