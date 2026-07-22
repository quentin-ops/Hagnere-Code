/**
 * Registre central des guides — SOURCE DE VÉRITÉ UNIQUE.
 *
 * Chaque guide déclaré ici alimente sa route, ses métadonnées et son JSON-LD.
 * Le hub, le sitemap et llms.txt utilisent PUBLISHED_GUIDES : un guide qui n'a
 * pas franchi la validation éditoriale documentée reste accessible par URL,
 * mais noindex.
 *
 * Pour ajouter un guide, suivre intégralement
 * docs/regle-or-vigilance-seo-publication.md et docs/charte-qualite-guides.md :
 * recherche, entrée ici, page, image Open Graph dédiée, maillage et tests.
 * Le sitemap et llms.txt se synchronisent ensuite depuis ce registre ; ne pas
 * les modifier à la main.
 */

import { SITE_URL } from "./seo";
import { isSearchIndexingEnabled } from "./search-indexing";

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
  /** Tant que la validation éditoriale manque, la route reste accessible mais noindex. */
  editorialStatus?: "ready-for-human-review";
}

export const GUIDES: GuideEntry[] = [
  {
    slug: "choisir-agence-seo",
    title: "Choisir une agence SEO : les preuves avant de signer",
    cardTitle: "Comment choisir une agence SEO ?",
    metaDescription:
      "Comparez trois devis SEO sur cinq points concrets, repérez les promesses dangereuses et sachez quand signer, demander des précisions ou attendre.",
    cardDescription:
      "Comparez ce qui sera fait, les pages concernées, ce que l’agence vous remettra, les comptes que vous garderez et le bilan prévu.",
    heroTitle:
      "Comment choisir une agence SEO quand les devis ne promettent pas la même chose ?",
    section: "Référencement naturel",
    datePublished: "2026-07-22",
    dateModified: "2026-07-22",
    readTimeMin: 12,
  },
  {
    slug: "choisir-agence-google-ads",
    title: "Choisir une agence Google Ads : 6 preuves à exiger",
    cardTitle: "Comment choisir une agence Google Ads ?",
    metaDescription:
      "Comparez les agences Google Ads sur six points concrets : accès au compte, budget, personne en charge, suivi des ventes, décisions et conditions de départ.",
    cardDescription:
      "Envoyez les mêmes informations, rencontrez la personne qui gérera les campagnes et exigez six preuves avant de comparer les promesses.",
    heroTitle:
      "Comment choisir une agence Google Ads sans vous fier aux promesses ?",
    section: "Google Ads & acquisition",
    datePublished: "2026-07-22",
    dateModified: "2026-07-22",
    readTimeMin: 12,
  },
  {
    slug: "reprendre-maintenance-site-autre-agence",
    title: "Changer d’agence de maintenance : reprendre son site",
    cardTitle: "Comment changer d’équipe pour maintenir votre site ?",
    metaDescription:
      "Avant de changer d’agence, vérifiez domaine, hébergement, sauvegarde, formulaires et accès. Testez la reprise avant de retirer l’ancien compte.",
    cardDescription:
      "Séparez maintenance, hébergement et domaine, restaurez une copie puis retirez l’ancienne agence seulement lorsque la reprise fonctionne.",
    heroTitle:
      "Comment confier la maintenance de votre site à une autre agence en gardant le contrôle ?",
    section: "Maintenance & reprise",
    datePublished: "2026-07-22",
    dateModified: "2026-07-22",
    readTimeMin: 14,
  },
  {
    slug: "agence-saas-ou-freelance",
    title: "Agence SaaS ou freelance : comment choisir ?",
    cardTitle: "Agence ou freelance : qui couvrira vraiment votre SaaS ?",
    metaDescription:
      "Agence ou freelance pour votre SaaS ? Comparez qui publie, aide les clients, traite les incidents, garde les accès et assure la suite.",
    cardDescription:
      "Comparez qui mettra le SaaS en ligne, aidera les clients, traitera les incidents et permettra à une autre équipe de reprendre.",
    heroTitle:
      "Agence ou freelance : qui doit construire et faire vivre votre SaaS ?",
    section: "Comparatifs & choix",
    datePublished: "2026-07-22",
    dateModified: "2026-07-22",
    readTimeMin: 13,
  },
  {
    slug: "application-gestion-interventions-terrain",
    title: "Application d’intervention terrain : que prévoir ?",
    cardTitle: "Que doit relier votre application d’interventions ?",
    metaDescription:
      "Planning, mobile, compte rendu, facturation : suivez une intervention complète pour choisir un logiciel standard, une connexion ou du sur-mesure.",
    cardDescription:
      "Suivez une intervention du premier appel aux éléments de facturation, testez cinq situations difficiles et choisissez le niveau de solution utile.",
    heroTitle:
      "Quelle application faut-il pour gérer vos interventions terrain ?",
    section: "Préparer son projet",
    datePublished: "2026-07-22",
    dateModified: "2026-07-22",
    readTimeMin: 12,
  },
  {
    slug: "landing-page-google-ads",
    title: "Landing page Google Ads : quelle page utiliser ?",
    cardTitle: "Votre page est-elle prête pour vos clics Google Ads ?",
    metaDescription:
      "Vérifiez si votre page répond à vos annonces Search, puis gardez-la, corrigez-la, créez-en une autre ou reportez la campagne.",
    cardDescription:
      "Vérifiez les titres, descriptions, page, formulaire et réception avant de décider si votre campagne Search peut démarrer.",
    heroTitle: "Votre page est-elle prête à recevoir vos clics Google Ads ?",
    section: "Google Ads & acquisition",
    datePublished: "2026-07-22",
    dateModified: "2026-07-22",
    readTimeMin: 21,
  },
  {
    slug: "suivi-conversions-google-ads",
    title: "Conversions Google Ads : demandes et ventes · Hagnéré Code",
    cardTitle: "Vos conversions Google Ads sont-elles de vraies demandes ?",
    metaDescription:
      "Reliez conversions Google Ads, demandes, devis et ventes. Testez la chaîne, évitez les doublons et choisissez l’action qui doit guider les enchères.",
    cardDescription:
      "Un registre simple pour suivre les mêmes dossiers de l’événement envoyé jusqu’à la vente, sans confondre conversion publicitaire et client réel.",
    heroTitle: "Comment relier vos conversions Google Ads aux vraies ventes ?",
    section: "Google Ads & acquisition",
    datePublished: "2026-07-22",
    dateModified: "2026-07-22",
    readTimeMin: 22,
  },
  {
    slug: "pourquoi-site-pas-visible-google",
    title: "Site invisible sur Google : que vérifier ? · Hagnéré Code",
    cardTitle: "Pourquoi votre site n’apparaît-il pas sur Google ?",
    metaDescription:
      "Site en ligne mais introuvable ? Vérifiez une URL et une recherche dans Search Console, puis corrigez la première preuve qui manque.",
    cardDescription:
      "Un diagnostic gratuit pour distinguer découverte, exploration, indexation, impressions, clics et demandes avant de commander une refonte.",
    heroTitle: "Pourquoi votre site n’apparaît-il pas sur Google ?",
    section: "Référencement naturel",
    datePublished: "2026-07-22",
    dateModified: "2026-07-22",
    readTimeMin: 16,
  },
  {
    slug: "cout-maintenance-application-metier",
    title: "Maintenance application métier : quel coût ? · Hagnéré Code",
    cardTitle: "Combien coûte la maintenance de votre application métier ?",
    metaDescription:
      "Hébergement, support, corrections, sécurité et évolutions : construisez le budget annuel de votre application sans appliquer un pourcentage arbitraire.",
    cardDescription:
      "Un registre annuel fondé sur vos factures, incidents et projets décidés, avec un exemple chiffré et les montants encore inconnus laissés visibles.",
    heroTitle:
      "Combien coûte la maintenance annuelle d’une application métier ?",
    section: "Budget & prix",
    datePublished: "2026-07-22",
    dateModified: "2026-07-22",
    readTimeMin: 12,
  },
  {
    slug: "reprendre-saas-developpe-par-freelance",
    title: "Départ du développeur SaaS : que reprendre ? · Hagnéré Code",
    cardTitle: "Votre développeur SaaS part : quels accès reprendre ?",
    metaDescription:
      "Votre développeur part ? Vérifiez code, comptes, paiements, données, domaine et support avant de retirer ses accès ou de décider une refonte.",
    cardDescription:
      "Dix fiches pour reprendre les comptes qui font réellement fonctionner un SaaS et retirer chaque ancien accès après un contrôle observable.",
    heroTitle: "Comment reprendre un SaaS développé par un freelance ?",
    section: "Préparer son projet",
    datePublished: "2026-07-22",
    dateModified: "2026-07-22",
    readTimeMin: 16,
  },
  {
    slug: "choisir-prestataire-application-metier",
    title: "Choisir un prestataire d’application métier · Hagnéré Code",
    cardTitle: "Choisir le bon prestataire pour son application métier",
    metaDescription:
      "Comparez plusieurs prestataires sur un même cas métier : réponses écrites, prix, maintenance, données, code et décision sans jargon.",
    cardDescription:
      "Un entretien identique pour tous, six engagements écrits et une fiche de décision qui révèle les hypothèses cachées derrière chaque devis.",
    heroTitle: "Comment choisir le prestataire de votre application métier ?",
    section: "Préparer son projet",
    datePublished: "2026-07-22",
    dateModified: "2026-07-22",
    readTimeMin: 13,
  },
  {
    slug: "cahier-des-charges-saas",
    title: "Cahier des charges SaaS : exemple complet · Hagnéré Code",
    cardTitle: "Rédiger un cahier des charges SaaS sans jargon",
    metaDescription:
      "Suivez un exemple rempli de cahier des charges SaaS : comptes clients, abonnement, droits, support, données, tests et sortie du service.",
    cardDescription:
      "Un SaaS fictif suivi de l’achat au départ du client pour rendre visibles les décisions, exclusions, tests et responsabilités oubliés.",
    heroTitle:
      "Cahier des charges SaaS : comment cadrer le produit de l’abonnement à la sortie du client ?",
    section: "Préparer son projet",
    datePublished: "2026-07-22",
    dateModified: "2026-07-22",
    readTimeMin: 16,
  },
  {
    slug: "budget-google-ads-pme",
    title: "Quel budget Google Ads pour une PME ? · Hagnéré Code",
    cardTitle: "Quel budget Google Ads votre PME peut-elle tester ?",
    metaDescription:
      "Calculez un budget test Google Ads avec votre marge, les clics prévus, le coût complet et la perte que votre trésorerie peut accepter.",
    cardDescription:
      "Comparez la prévision Google, la marge finançable et le risque de trésorerie avant de lancer une campagne Search, sans minimum arbitraire.",
    heroTitle: "Quel budget Google Ads prévoir pour une PME ?",
    section: "Google Ads & acquisition",
    datePublished: "2026-07-22",
    dateModified: "2026-07-22",
    readTimeMin: 9,
  },
  {
    slug: "remplacer-microsoft-access-application-web",
    title: "Remplacer Access par une application web · Hagnéré Code",
    cardTitle: "Comment remplacer Microsoft Access sans tout perdre ?",
    metaDescription:
      "Base Access devenue fragile ou inaccessible à distance ? Découvrez quoi inventorier, ce qui peut être transféré et comment migrer sans tout refaire.",
    cardDescription:
      "Données, formulaires, états, VBA et fichiers liés : une méthode pour comprendre l’existant, comparer quatre trajectoires et tester un pilote.",
    heroTitle: "Comment remplacer Microsoft Access sans tout perdre ?",
    section: "Préparer son projet",
    datePublished: "2026-07-22",
    dateModified: "2026-07-22",
    readTimeMin: 14,
  },
  {
    slug: "preparer-contenus-site-vitrine",
    title: "Préparer les contenus d’un site vitrine · Hagnéré Code",
    cardTitle: "Que préparer avant de faire créer votre site vitrine ?",
    metaDescription:
      "Textes, photos, preuves, formulaire : découvrez ce que vous devez fournir, ce que le prestataire peut produire et ce qu’il faut vérifier.",
    cardDescription:
      "Une méthode simple pour rassembler les faits, les preuves et les visuels, répartir la rédaction et savoir si votre dossier est prêt.",
    heroTitle: "Que préparer avant de faire créer votre site vitrine ?",
    section: "Préparer son projet",
    datePublished: "2026-07-22",
    dateModified: "2026-07-22",
    readTimeMin: 16,
  },
  {
    slug: "pourquoi-google-ads-ne-convertit-pas",
    title: "Google Ads ne convertit pas : que vérifier ? · Hagnéré Code",
    cardTitle: "Pourquoi Google Ads ne convertit pas malgré les clics ?",
    metaDescription:
      "Des clics mais peu de clients ? Repérez si la mesure compte la mauvaise action, si les contacts se perdent ou ne deviennent pas des ventes rentables.",
    cardDescription:
      "Partez de votre symptôme, rapprochez Google Ads des contacts et des ventes, puis corrigez le premier endroit où le résultat réel disparaît.",
    heroTitle: "Pourquoi Google Ads ne convertit pas malgré les clics ?",
    section: "Google Ads & acquisition",
    datePublished: "2026-07-21",
    dateModified: "2026-07-21",
    readTimeMin: 15,
  },
  {
    slug: "reprendre-mvp-vibe-code",
    title: "Reprendre un MVP Lovable, Bolt ou v0 · Hagnéré Code",
    cardTitle: "Peut-on reprendre un MVP créé avec Lovable, Bolt ou v0 ?",
    metaDescription:
      "Votre MVP Lovable, Bolt ou v0 peut-il être repris ? Vérifiez code, mise en ligne, données, accès et comptes avant de conserver ou réécrire.",
    cardDescription:
      "Cinq vérifications concrètes pour savoir ce qui peut être conservé, stabilisé, migré ou réécrit sans jeter votre premier produit par principe.",
    heroTitle: "Peut-on reprendre un MVP créé avec Lovable, Bolt ou v0 ?",
    section: "Préparer son projet",
    datePublished: "2026-07-21",
    dateModified: "2026-07-21",
    readTimeMin: 15,
  },
  {
    slug: "signes-besoin-logiciel-metier",
    title: "Besoin d’un logiciel métier : les signes · Hagnéré Code",
    cardTitle: "Votre entreprise a-t-elle besoin d’un logiciel métier ?",
    metaDescription:
      "Fichiers, ressaisies, erreurs : découvrez quand sécuriser, corriger, automatiser, acheter un outil ou étudier un logiciel métier sur mesure.",
    cardDescription:
      "Partez de trois problèmes réels, écartez les faux signaux et choisissez entre corriger, automatiser, acheter, étudier du sur-mesure ou attendre.",
    heroTitle: "Votre entreprise a-t-elle besoin d’un logiciel métier ?",
    section: "Préparer son projet",
    datePublished: "2026-07-21",
    dateModified: "2026-07-21",
    readTimeMin: 12,
  },
  {
    slug: "template-ou-site-sur-mesure",
    title: "Template ou site sur mesure : comment choisir · Hagnéré Code",
    cardTitle: "Template, personnalisé ou sur mesure : que choisir ?",
    metaDescription:
      "Template, site personnalisé ou conception sur mesure : comparez budget, liberté de création, autonomie et entretien pour choisir le bon niveau.",
    cardDescription:
      "Quatre choix expliqués simplement, de la correction de l’existant à la conception complète, avec leurs bénéfices, leurs limites et leurs coûts.",
    heroTitle:
      "Template, site personnalisé ou sur mesure : quel niveau choisir ?",
    section: "Comparatifs & choix",
    datePublished: "2026-07-20",
    dateModified: "2026-07-21",
    readTimeMin: 12,
  },
  {
    slug: "seo-ou-google-ads",
    title: "SEO ou Google Ads : comment choisir · Hagnéré Code",
    cardTitle: "SEO ou Google Ads : où investir en premier ?",
    metaDescription:
      "SEO ou Google Ads ? Comparez délai, budget, coûts et résultats attendus pour choisir quoi lancer d’abord, ou ce qu’il faut corriger avant.",
    cardDescription:
      "Une réponse claire selon votre urgence, votre budget, votre type de vente et la manière dont vous répondez aux personnes intéressées.",
    heroTitle: "SEO ou Google Ads : où investir en premier ?",
    section: "Comparatifs & choix",
    datePublished: "2026-07-20",
    dateModified: "2026-07-21",
    readTimeMin: 17,
  },
  {
    slug: "contrat-tma-application",
    title: "Contrat TMA : clauses et prix à vérifier · Hagnéré Code",
    cardTitle: "Contrat TMA : que prévoir avant une panne ?",
    metaDescription:
      "Délais, incidents, prix, sécurité, évolutions et sortie : découvrez ce qu’un contrat TMA doit préciser avant de confier votre application.",
    cardDescription:
      "Un guide clair pour savoir qui intervient, sous quel délai, à quel prix et jusqu’à quel résultat lorsque votre application tombe en panne.",
    heroTitle: "Contrat TMA : que faut-il écrire avant le premier incident ?",
    section: "Préparer son projet",
    datePublished: "2026-07-20",
    dateModified: "2026-07-21",
    readTimeMin: 24,
  },
  {
    slug: "audit-seo-que-contient-il",
    title: "Audit SEO : que doit-il contenir ? · Hagnéré Code",
    cardTitle: "Audit SEO : que devez-vous obtenir à la fin ?",
    metaDescription:
      "Découvrez ce qu’un audit SEO doit examiner, expliquer et classer pour savoir quoi corriger en premier et comment contrôler le résultat.",
    cardDescription:
      "Un bon rapport ne livre pas une liste d’erreurs : il explique les problèmes, leur importance, la personne qui doit agir et le contrôle à réaliser.",
    heroTitle: "Audit SEO : que doit-il contenir pour être vraiment utile ?",
    section: "Référencement naturel",
    datePublished: "2026-07-20",
    dateModified: "2026-07-21",
    readTimeMin: 19,
  },
  {
    slug: "audit-google-ads-que-verifier",
    title: "Audit Google Ads : que vérifier ? · Hagnéré Code",
    cardTitle: "Audit Google Ads : faut-il corriger ou investir plus ?",
    metaDescription:
      "Découvrez ce qu’un audit Google Ads doit vérifier pour relier clics, prospects et ventes avant de corriger ou d’augmenter votre budget.",
    cardDescription:
      "Conversions, mots recherchés, annonces, pages et budget : les contrôles qui permettent de décider quoi corriger et quoi arrêter.",
    heroTitle: "Audit Google Ads : que vérifier avant d’investir ?",
    section: "Préparer son projet",
    datePublished: "2026-07-20",
    dateModified: "2026-07-21",
    readTimeMin: 16,
  },
  {
    slug: "mvp-saas-quoi-inclure",
    title: "MVP SaaS : quoi inclure ? · Hagnéré Code",
    cardTitle: "MVP SaaS : les 7 indispensables au premier lancement",
    metaDescription:
      "Votre premier client est prêt : découvrez ce que votre MVP SaaS doit absolument permettre, ce qui peut rester manuel et ce qui peut attendre.",
    cardDescription:
      "Accès, tâche principale, sauvegarde, aide et paiement : une checklist concrète pour livrer une petite version vraiment utilisable.",
    heroTitle:
      "MVP SaaS : que faut-il construire pour servir un premier client ?",
    section: "Préparer son projet",
    datePublished: "2026-07-20",
    dateModified: "2026-07-21",
    readTimeMin: 24,
  },
  {
    slug: "reprendre-logiciel-metier-existant",
    title: "Reprendre un logiciel métier existant · Hagnéré Code",
    cardTitle: "Changer d’équipe sur un logiciel métier : par où commencer ?",
    metaDescription:
      "Prestataire silencieux, bugs ou changement d’équipe : découvrez quoi récupérer et vérifier avant de faire reprendre votre logiciel métier.",
    cardDescription:
      "Les accès, sauvegardes et tests à demander, les premières 48 heures et la décision entre stabiliser, migrer ou réécrire.",
    heroTitle:
      "Comment reprendre un logiciel métier existant sans perdre le code, les données ni la continuité de service ?",
    section: "Préparer son projet",
    datePublished: "2026-07-20",
    dateModified: "2026-07-21",
    readTimeMin: 15,
  },
  {
    slug: "calculer-roi-application-metier",
    title: "Calculer le ROI d’une application métier · Hagnéré Code",
    cardTitle: "Une application métier sera-t-elle rentable ?",
    metaDescription:
      "Calculez si une application métier vaut son coût : dépenses complètes, temps réellement réutilisé, économies et délai de retour sur investissement.",
    cardDescription:
      "Une méthode chiffrée pour comparer le sur-mesure, un logiciel existant, une amélioration simple et le statu quo sans gonfler les gains.",
    heroTitle: "Comment calculer le ROI d’une application métier ?",
    section: "Budget & prix",
    datePublished: "2026-07-20",
    dateModified: "2026-07-21",
    readTimeMin: 28,
  },
  {
    slug: "automatiser-processus-metier",
    title: "Quel processus automatiser en premier ? · Hagnéré Code",
    cardTitle: "Quel processus faut-il automatiser en premier ?",
    metaDescription:
      "Vous perdez du temps en ressaisies ou relances ? Identifiez la première tâche à automatiser, comparez les solutions et vérifiez si elle sera rentable.",
    cardDescription:
      "Observez une semaine de travail, comparez six réponses possibles et testez la solution la plus simple avant d’investir davantage.",
    heroTitle: "Automatiser un processus métier : lequel choisir en premier ?",
    section: "Préparer son projet",
    datePublished: "2026-07-20",
    dateModified: "2026-07-21",
    readTimeMin: 16,
  },
  {
    slug: "valider-idee-saas-avant-developper",
    title: "Valider une idée SaaS avant de développer · Hagnéré Code",
    cardTitle: "Valider une idée SaaS avant de développer",
    metaDescription:
      "Avant de financer votre SaaS, vérifiez le problème, l’acheteur et le prix avec des entretiens, un test manuel et un plan de terrain sur 14 jours.",
    cardDescription:
      "Un plan concret pour parler aux bons prospects, tester le service sans logiciel et décider de développer, modifier l’offre ou arrêter.",
    heroTitle: "Comment valider une idée SaaS avant de développer ?",
    section: "Préparer son projet",
    datePublished: "2026-07-20",
    dateModified: "2026-07-21",
    readTimeMin: 14,
  },
  {
    slug: "prix-gestion-google-ads",
    title: "Prix de gestion Google Ads en 2026 · Hagnéré Code",
    cardTitle: "Combien coûte la gestion de Google Ads ?",
    metaDescription:
      "Budget payé à Google, honoraires et frais de lancement : comparez les prix de gestion Google Ads et trois exemples complets sur 3, 6 et 12 mois.",
    cardDescription:
      "Des repères publics et trois budgets d’entreprise pour comprendre la facture complète, le coût par prospect et les lignes à exiger dans un devis.",
    heroTitle: "Prix de gestion Google Ads : quel budget prévoir ?",
    section: "Budget & prix",
    datePublished: "2026-07-20",
    dateModified: "2026-07-21",
    readTimeMin: 21,
  },
  {
    slug: "transformer-excel-en-application",
    title: "Transformer Excel en application métier · Hagnéré Code",
    cardTitle: "Votre fichier Excel doit-il devenir une application ?",
    metaDescription:
      "Votre entreprise dépend d’un fichier Excel fragile ? Comparez quatre solutions, leurs coûts, la migration des données et les clauses à prévoir.",
    cardDescription:
      "Un diagnostic pour choisir entre Excel fiabilisé, logiciel existant, plateforme no-code et application sur mesure, sans perdre l’historique.",
    heroTitle:
      "Faut-il transformer votre fichier Excel en application métier ?",
    section: "Préparer son projet",
    datePublished: "2026-07-19",
    dateModified: "2026-07-21",
    readTimeMin: 15,
  },
  {
    slug: "cahier-des-charges-application-metier",
    title: "Cahier des charges d’une application métier · Hagnéré Code",
    cardTitle: "Rédiger le cahier des charges d'une application métier",
    metaDescription:
      "Expliquez votre besoin, obtenez des devis comparables et évitez les malentendus grâce à un modèle gratuit de cahier des charges d’application métier.",
    cardDescription:
      "Les 7 questions à traiter, des exemples concrets et un modèle Word et PDF gratuit pour préparer votre projet sans jargon technique.",
    heroTitle:
      "Cahier des charges d’une application métier : comment obtenir des devis comparables ?",
    section: "Préparer son projet",
    datePublished: "2026-07-20",
    dateModified: "2026-07-21",
    readTimeMin: 23,
  },
  {
    slug: "combien-coute-un-crm",
    title: "Combien coûte un CRM en 2026 ? · Hagnéré Code",
    cardTitle: "Combien coûte un CRM sur 36 mois ?",
    metaDescription:
      "Prix d’un CRM en 2026 : trois entreprises chiffrées sur 36 mois, les dépenses souvent oubliées et une grille simple pour comparer deux offres.",
    cardDescription:
      "Petite équipe, PME commerciale ou organisation complexe : additionnez abonnement, mise en route, données, formation, connexions et temps interne.",
    heroTitle: "Combien coûte un CRM en 2026 ?",
    section: "Budget & prix",
    datePublished: "2026-07-20",
    dateModified: "2026-07-21",
    readTimeMin: 18,
  },
  {
    slug: "erp-ou-logiciel-sur-mesure",
    title: "ERP ou logiciel sur mesure : comment choisir · Hagnéré Code",
    cardTitle: "ERP, logiciel standard ou sur mesure : comment choisir",
    metaDescription:
      "ERP, logiciel existant, module spécifique ou application sur mesure : comparez les options selon vos tâches, vos outils et le coût sur quatre ans.",
    cardDescription:
      "Partez des ressaisies, erreurs et fichiers actuels pour choisir la solution la plus simple qui couvre réellement le travail de l’entreprise.",
    heroTitle: "ERP, logiciel standard ou sur mesure : comment choisir ?",
    section: "Comparatifs & choix",
    datePublished: "2026-07-20",
    dateModified: "2026-07-21",
    readTimeMin: 23,
  },
  {
    slug: "pourquoi-mon-site-ne-convertit-pas",
    title: "Pourquoi mon site ne convertit pas · Hagnéré Code",
    metaDescription:
      "Votre site reçoit des visites mais peu de demandes ? Vérifiez le trafic, l’offre, la confiance et le suivi commercial avant d’investir dans une refonte.",
    cardTitle: "Pourquoi mon site ne convertit pas : le diagnostic",
    cardDescription:
      "Un diagnostic en ordre pour trouver où les clients se perdent, choisir le premier correctif et éviter une refonte inutile.",
    heroTitle: "Pourquoi votre site ne génère-t-il pas assez de demandes ?",
    section: "Préparer son projet",
    datePublished: "2026-07-19",
    dateModified: "2026-07-21",
    readTimeMin: 15,
  },
  {
    slug: "proprietaire-site-internet-code-source",
    title: "Qui est propriétaire de votre site internet ? · Hagnéré Code",
    metaDescription:
      "Vous avez payé votre site : découvrez ce qui vous appartient, ce qui dépend du contrat et les 14 accès à récupérer avant de changer de prestataire.",
    cardTitle: "Votre site vous appartient-il vraiment ?",
    cardDescription:
      "Textes, données, code, licences et comptes ne suivent pas les mêmes règles. Voici quoi vérifier avant de signer ou si votre site est déjà bloqué.",
    heroTitle: "Qui est propriétaire de votre site et de son code source ?",
    section: "Préparer son projet",
    datePublished: "2026-07-19",
    dateModified: "2026-07-21",
    readTimeMin: 12,
  },
  {
    slug: "prix-referencement-naturel",
    title: "Prix du référencement naturel 2026 · Hagnéré Code",
    metaDescription:
      "Quels prix prévoir pour le référencement naturel en 2026 ? Comparez audit, accompagnement local ou national et le travail inclus chaque mois.",
    cardTitle: "Prix du référencement naturel : quel budget prévoir ?",
    cardDescription:
      "Des fourchettes observées, le contenu attendu d’un forfait et les questions qui permettent de comparer deux devis sans acheter une promesse Google.",
    heroTitle: "Prix du référencement naturel : quel budget prévoir en 2026 ?",
    section: "Budget & prix",
    datePublished: "2026-07-18",
    dateModified: "2026-07-21",
    readTimeMin: 27,
  },
  {
    slug: "pourquoi-mon-site-est-lent",
    title: "Pourquoi mon site est lent ? Diagnostic · Hagnéré Code",
    metaDescription:
      "Votre site s’affiche lentement ou bouge pendant la lecture ? Identifiez la cause, choisissez la première correction et évitez une refonte inutile.",
    cardTitle: "Pourquoi votre site est-il lent ?",
    cardDescription:
      "Des tests simples pour relier chaque symptôme à sa cause, choisir la première correction et éviter une refonte inutile.",
    heroTitle: "Pourquoi votre site est-il lent et que faut-il corriger ?",
    section: "Comparatifs & choix",
    datePublished: "2026-07-18",
    dateModified: "2026-07-21",
    readTimeMin: 13,
  },
  {
    slug: "no-code-ou-sur-mesure",
    title: "No-code ou sur mesure : comment choisir ? · Hagnéré Code",
    cardTitle: "No-code ou sur mesure : comment choisir ?",
    metaDescription:
      "No-code, logiciel existant ou sur mesure : comparez coûts, limites, dépendance et cas d’usage pour choisir sans investir plus que nécessaire.",
    cardDescription:
      "Comparez les coûts, les limites et la dépendance de chaque solution, puis choisissez selon votre besoin et votre horizon de temps.",
    heroTitle: "No-code ou sur mesure : lequel choisir pour votre entreprise ?",
    section: "Comparatifs & choix",
    datePublished: "2026-07-18",
    dateModified: "2026-07-21",
    readTimeMin: 21,
  },
  {
    slug: "migrer-wordpress-vers-nextjs",
    title: "Migrer WordPress vers Next.js : le guide 2026 · Hagnéré Code",
    cardTitle: "Migrer de WordPress vers Next.js : méthode, prix, risques",
    metaDescription:
      "Votre site WordPress pose problème ? Comparez réparation, meilleur hébergement et migration vers Next.js, avec prix, risques SEO et méthode.",
    cardDescription:
      "Avant de migrer, comparez quatre solutions et découvrez les coûts, les risques SEO et les précautions à prévoir.",
    heroTitle: "Faut-il migrer votre site WordPress vers Next.js ?",
    section: "Comparatifs & choix",
    datePublished: "2026-07-18",
    dateModified: "2026-07-21",
    readTimeMin: 20,
  },
  {
    slug: "tjm-developpeur-web",
    title: "TJM développeur web 2026 : quels tarifs ? · Hagnéré Code",
    cardTitle: "TJM développeur web : du tarif au budget du projet",
    metaDescription:
      "Un développeur vous annonce un prix par jour ? Comparez les tarifs 2026, le nombre de jours, le résultat attendu et les coûts après livraison.",
    cardDescription:
      "Des repères de marché et une méthode simple pour transformer un tarif journalier en budget puis comparer deux devis sur le même travail.",
    heroTitle: "TJM développeur web : comment juger le prix d’un devis ?",
    section: "Budget & prix",
    datePublished: "2026-07-18",
    dateModified: "2026-07-21",
    readTimeMin: 14,
  },
  {
    slug: "choisir-son-agence-web",
    title: "Comment choisir son agence web en 2026 · Hagnéré Code",
    cardTitle: "Comment choisir une agence web sans se tromper ?",
    metaDescription:
      "Vous comparez des agences web ? Voici les questions à poser, les réalisations, le devis, les coûts futurs et les clauses à vérifier avant de signer.",
    cardDescription:
      "Dix vérifications concrètes pour comparer l’écoute, le travail livré, l’équipe, le devis, les coûts futurs et votre liberté de changer.",
    heroTitle: "Comment choisir la bonne agence web pour votre entreprise ?",
    section: "Préparer son projet",
    datePublished: "2026-07-18",
    dateModified: "2026-07-21",
    readTimeMin: 12,
  },
  {
    slug: "agence-web-ou-freelance",
    title: "Agence web ou freelance : qui choisir en 2026 · Hagnéré Code",
    cardTitle: "Agence web ou freelance : qui choisir ?",
    metaDescription:
      "Vous comparez une agence web et un freelance ? Examinez les personnes, le prix, le délai, la continuité, le contrat et les solutions intermédiaires.",
    cardDescription:
      "Comparez le travail réellement prévu, les personnes disponibles, le coût sur trois ans et votre capacité à changer de prestataire.",
    heroTitle: "Agence web ou freelance : qui choisir pour votre projet ?",
    section: "Comparatifs & choix",
    datePublished: "2026-07-18",
    dateModified: "2026-07-21",
    readTimeMin: 16,
  },
  {
    slug: "creer-un-site-avec-ia",
    title: "Créer un site avec l'IA en 2026 · Hagnéré Code",
    cardTitle: "Créer un site avec l'IA : est-ce une bonne idée ?",
    metaDescription:
      "L’IA suffit-elle pour créer votre site ? Comparez générateurs, prototype et accompagnement professionnel selon vos besoins, vos risques et votre budget.",
    cardDescription:
      "Ce que l’IA peut réellement créer, ses coûts et ses limites, et les situations où un professionnel reste utile.",
    heroTitle: "Créer un site avec l’IA : est-ce adapté à votre entreprise ?",
    section: "Comparatifs & choix",
    datePublished: "2026-07-18",
    dateModified: "2026-07-21",
    readTimeMin: 15,
  },
  {
    slug: "combien-coute-un-site-internet",
    title: "Combien coûte un site internet en 2026 ? · Hagnéré Code",
    cardTitle: "Combien coûte un site internet en 2026 ?",
    metaDescription:
      "Quel budget prévoir pour un site internet en 2026 ? Comparez site simple, vitrine, boutique et application, puis ajoutez entretien et abonnements.",
    cardDescription:
      "Des fourchettes par type de projet, ce qu’un devis doit inclure et les coûts à prévoir pendant les trois premières années.",
    heroTitle: "Combien coûte un site internet professionnel en 2026 ?",
    section: "Budget & prix",
    datePublished: "2026-07-11",
    dateModified: "2026-07-21",
    readTimeMin: 15,
    featured: true,
  },
  {
    slug: "combien-coute-une-application-mobile",
    title: "Combien coûte une application mobile ? · Hagnéré Code",
    cardTitle: "Combien coûte une application mobile en 2026 ?",
    metaDescription:
      "Quel budget prévoir pour une application mobile ? Comparez les projets, les postes du devis, les frais Apple et Google, puis le coût de la maintenance.",
    cardDescription:
      "Des fourchettes selon l’usage, les postes du devis, les frais Apple et Google et les coûts à prévoir après la mise en ligne.",
    heroTitle: "Quel budget prévoir pour une application mobile en 2026 ?",
    section: "Budget & prix",
    datePublished: "2026-07-13",
    dateModified: "2026-07-21",
    readTimeMin: 14,
  },
  {
    slug: "prix-site-vitrine",
    title: "Prix d'un site vitrine en 2026 · Hagnéré Code",
    cardTitle: "Prix d’un site vitrine : quel budget est utile ?",
    metaDescription:
      "Combien coûte un site vitrine en 2026 ? Comparez les prix d’un projet réalisé seul, par un freelance ou une agence, puis les coûts sur trois ans.",
    cardDescription:
      "Choisissez le bon niveau selon le rôle du site, les contenus à produire et ce que le devis inclut réellement — sans croire qu’un gros budget garantit des clients.",
    heroTitle: "Prix d’un site vitrine en 2026 : quel budget prévoir ?",
    section: "Budget & prix",
    datePublished: "2026-07-14",
    dateModified: "2026-07-21",
    readTimeMin: 14,
  },
  {
    slug: "prix-site-e-commerce",
    title: "Prix d’un site e-commerce en 2026 · Hagnéré Code",
    cardTitle: "Prix d’un site e-commerce : le budget complet",
    metaDescription:
      "Création, fonctionnement, paiements, acquisition et logistique : calculez le budget complet d’un site e-commerce et comparez quatre types de boutiques.",
    cardDescription:
      "Petite boutique, PME, catalogue complexe ou plateforme spécialisée : quatre scénarios chiffrés et les coûts à prévoir après la mise en ligne.",
    heroTitle: "Prix d’un site e-commerce : quel budget prévoir en 2026 ?",
    section: "Budget & prix",
    datePublished: "2026-07-16",
    dateModified: "2026-07-21",
    readTimeMin: 17,
  },
  {
    slug: "nextjs-ou-wordpress",
    title: "Next.js ou WordPress : lequel choisir ? · Hagnéré Code",
    cardTitle: "Next.js ou WordPress : lequel choisir ?",
    metaDescription:
      "Choisissez entre Next.js et WordPress selon les personnes qui modifieront le site, les fonctions attendues, le budget et l’entretien sur trois ans.",
    cardDescription:
      "WordPress facilite souvent la publication. Next.js donne davantage de liberté pour une expérience spécifique : voici quand chaque choix est raisonnable.",
    heroTitle: "Next.js ou WordPress : comment choisir pour votre entreprise ?",
    section: "Comparatifs & choix",
    datePublished: "2026-07-16",
    dateModified: "2026-07-21",
    readTimeMin: 18,
  },
  {
    slug: "aides-creation-site-internet",
    title: "Aides pour créer un site internet en 2026 · Hagnéré Code",
    cardTitle: "Quelles aides pour créer un site internet en 2026 ?",
    metaDescription:
      "Vous cherchez une aide pour financer votre site ? Découvrez les dispositifs nationaux et régionaux, les conditions et l’ordre à respecter avant de signer.",
    cardDescription:
      "Les aides nationales et régionales à vérifier, les anciens dispositifs à écarter et les démarches à accomplir avant de signer un devis.",
    heroTitle: "Quelles aides peuvent financer votre site internet en 2026 ?",
    section: "Financer son projet",
    datePublished: "2026-07-16",
    dateModified: "2026-07-21",
    readTimeMin: 16,
  },
  {
    slug: "combien-coute-un-saas",
    title: "Combien coûte un SaaS en 2026 ? · Hagnéré Code",
    cardTitle: "Quel budget prévoir pour créer un SaaS ?",
    metaDescription:
      "Notre estimation place une première version de SaaS entre 15 000 et 40 000 €. Découvrez les hypothèses, les frais mensuels et les points à vérifier.",
    cardDescription:
      "Une estimation expliquée, les frais mensuels, les délais et les questions à trancher avant d’investir dans le développement d’un SaaS.",
    heroTitle: "Quel budget faut-il prévoir pour créer et exploiter un SaaS ?",
    section: "Budget & prix",
    datePublished: "2026-07-17",
    dateModified: "2026-07-21",
    readTimeMin: 14,
  },
  {
    slug: "prix-logiciel-sur-mesure",
    title: "Prix d'un logiciel sur mesure en 2026 · Hagnéré Code",
    cardTitle: "Quel budget prévoir pour un logiciel sur mesure ?",
    metaDescription:
      "Nos scénarios placent un logiciel sur mesure de 5 000 € à plus de 60 000 €. Comparez les solutions, les postes du devis et le coût total avant de choisir.",
    cardDescription:
      "Des fourchettes par type de projet, les postes d’un devis et une comparaison avec un abonnement ou un fichier Excel.",
    heroTitle: "Combien coûte un logiciel sur mesure en 2026 ?",
    section: "Budget & prix",
    datePublished: "2026-07-17",
    dateModified: "2026-07-21",
    readTimeMin: 21,
  },
  {
    slug: "prix-refonte-site-internet",
    title: "Prix d’une refonte de site en 2026 · Hagnéré Code",
    cardTitle: "Refonte de site : faut-il corriger ou tout refaire ?",
    metaDescription:
      "Comparez correction ciblée, refonte partielle et reconstruction complète : estimations 2026, passage des anciennes pages et coûts après mise en ligne.",
    cardDescription:
      "Trois scénarios pour décider si la refonte est utile, comprendre ce que le devis inclut et protéger les pages qui fonctionnent déjà.",
    heroTitle: "Prix d’une refonte de site : quel niveau choisir en 2026 ?",
    section: "Budget & prix",
    datePublished: "2026-07-17",
    dateModified: "2026-07-21",
    readTimeMin: 14,
  },
  {
    slug: "shopify-ou-sur-mesure",
    title: "Shopify ou sur mesure : que choisir ? · Hagnéré Code",
    cardTitle: "Shopify ou boutique sur mesure : que choisir ?",
    metaDescription:
      "Shopify ou boutique sur mesure ? Comparez besoins, coûts sur trois ans, entretien et possibilité de changer avant de choisir votre solution.",
    cardDescription:
      "Shopify convient souvent à une boutique classique. Le sur-mesure devient utile pour des règles métier précises : voici comment reconnaître la différence.",
    heroTitle: "Shopify ou e-commerce sur mesure : lequel choisir ?",
    section: "Comparatifs & choix",
    datePublished: "2026-07-17",
    dateModified: "2026-07-21",
    readTimeMin: 15,
  },
  {
    slug: "cout-maintenance-site-internet",
    title: "Coût de maintenance d’un site en 2026 · Hagnéré Code",
    cardTitle: "Maintenance d’un site : combien prévoir chaque mois ?",
    metaDescription:
      "Découvrez le coût mensuel de la maintenance d’un site vitrine, d’une boutique ou d’une application, les services inclus et les clauses à vérifier.",
    cardDescription:
      "Des repères indicatifs, trois niveaux d’entretien et une lecture simple du contrat pour savoir ce qui se passe en cas de panne ou de mise à jour.",
    heroTitle: "Combien coûte la maintenance d’un site internet en 2026 ?",
    section: "Budget & prix",
    datePublished: "2026-07-17",
    dateModified: "2026-07-21",
    readTimeMin: 16,
  },
  {
    slug: "woocommerce-ou-shopify",
    title: "WooCommerce ou Shopify : que choisir ? · Hagnéré Code",
    cardTitle: "WooCommerce ou Shopify : que choisir en 2026 ?",
    metaDescription:
      "Vous hésitez entre WooCommerce et Shopify ? Comparez l’entretien, les coûts, la liberté et la façon de vendre pour choisir selon votre entreprise.",
    cardDescription:
      "Shopify simplifie l’entretien ; WooCommerce donne davantage de contrôle. Comparez les deux solutions selon votre équipe et votre activité.",
    heroTitle:
      "WooCommerce ou Shopify : quelle solution convient à votre entreprise ?",
    section: "Comparatifs & choix",
    datePublished: "2026-07-17",
    dateModified: "2026-07-21",
    readTimeMin: 15,
  },
  {
    slug: "combien-de-temps-pour-creer-un-site",
    title: "Créer un site : combien de temps faut-il ? · Hagnéré Code",
    cardTitle: "Combien de temps pour créer un site internet ?",
    metaDescription:
      "Vous avez une date à tenir ? Comparez les délais par type de site, préparez les contenus et validations et découvrez ce qui peut accélérer sans bâcler.",
    cardDescription:
      "Vitrine, boutique ou application : des délais réalistes et les décisions à prendre pour organiser le projet autour de votre échéance.",
    heroTitle: "Combien de temps faut-il pour créer votre site internet ?",
    section: "Préparer son projet",
    datePublished: "2026-07-17",
    dateModified: "2026-07-21",
    readTimeMin: 13,
  },
  {
    slug: "wix-ou-wordpress",
    title: "Wix ou WordPress : que choisir en 2026 ? · Hagnéré Code",
    cardTitle: "Wix ou WordPress : que choisir en 2026 ?",
    metaDescription:
      "Wix ou WordPress ? Comparez simplicité, prix, entretien, référencement et récupération du site pour choisir selon votre entreprise.",
    cardDescription:
      "Wix pour construire simplement, WordPress pour davantage de liberté : les avantages, limites et responsabilités expliqués sans parti pris.",
    heroTitle: "Wix ou WordPress : lequel choisir pour votre entreprise ?",
    section: "Comparatifs & choix",
    datePublished: "2026-07-17",
    dateModified: "2026-07-21",
    readTimeMin: 13,
  },
  {
    slug: "react-native-ou-flutter",
    title: "React Native ou Flutter : lequel choisir ? · Hagnéré Code",
    cardTitle: "React Native ou Flutter : lequel choisir ?",
    metaDescription:
      "Comparez React Native et Flutter selon votre équipe, les fonctions de l’application, le coût d’entretien et la facilité à changer de prestataire.",
    cardDescription:
      "Deux solutions professionnelles pour iPhone et Android, expliquées sans jargon à partir des usages, du budget et de l’équipe qui entretiendra le projet.",
    heroTitle:
      "React Native ou Flutter : comment choisir pour votre application ?",
    section: "Comparatifs & choix",
    datePublished: "2026-07-17",
    dateModified: "2026-07-21",
    readTimeMin: 13,
  },
  {
    slug: "cahier-des-charges-application-mobile",
    title: "Cahier des charges d'application mobile · Hagnéré Code",
    cardTitle: "Cahier des charges d'application mobile : quoi écrire ?",
    metaDescription:
      "Vous voulez obtenir des devis comparables pour une application mobile ? Préparez dix sections, les règles des stores, le budget et les coûts futurs.",
    cardDescription:
      "Un modèle en dix sections, expliqué sans jargon, avec un exemple fictif rempli et les décisions à prendre avant de demander des devis.",
    heroTitle:
      "Que faut-il écrire pour faire chiffrer votre application mobile ?",
    section: "Préparer son projet",
    datePublished: "2026-07-17",
    dateModified: "2026-07-21",
    readTimeMin: 19,
  },
  {
    slug: "refonte-sans-perdre-son-seo",
    title: "Refonte de site sans perdre son SEO · Hagnéré Code",
    cardTitle: "Refondre son site sans perdre ses pages utiles",
    metaDescription:
      "Découvrez quoi conserver avant une refonte, comment relier les anciennes pages aux nouvelles et quels contrôles exiger après la mise en ligne.",
    cardDescription:
      "Cinq règles non techniques pour protéger les pages qui attirent déjà des visiteurs, préparer les changements et réagir si le trafic baisse.",
    heroTitle: "Comment refondre son site sans perdre son référencement ?",
    section: "Préparer son projet",
    datePublished: "2026-07-18",
    dateModified: "2026-07-21",
    readTimeMin: 11,
  },
  {
    slug: "cahier-des-charges-site-internet",
    title: "Cahier des charges site internet 2026 · Hagnéré Code",
    cardTitle: "Cahier des charges de site internet : quoi écrire ?",
    metaDescription:
      "Vous devez demander des devis pour un site ? Voici quoi écrire, quel niveau de détail choisir et comment répartir contenus, budget, délais et tests.",
    cardDescription:
      "Un modèle simple à adapter selon votre projet, avec les pages, contenus, responsabilités, budget, délais et vérifications à prévoir.",
    heroTitle: "Que faut-il écrire dans le cahier des charges de votre site ?",
    section: "Préparer son projet",
    datePublished: "2026-07-15",
    dateModified: "2026-07-21",
    readTimeMin: 13,
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

  return canBeIndexed
    ? ({ index: true, follow: true } as const)
    : ({ index: false, follow: false } as const);
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
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Europe/Paris",
  });
}
