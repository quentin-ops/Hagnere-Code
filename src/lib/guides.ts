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
    slug: "audit-seo-que-contient-il",
    title: "Audit SEO : que doit-il contenir ? · Hagnéré Code",
    cardTitle: "Audit SEO : ce que le rapport doit permettre de décider",
    metaDescription:
      "Découvrez les preuves, analyses et livrables à exiger d’un audit SEO, puis vérifiez si son plan d’action peut réellement être exécuté et mesuré.",
    cardDescription:
      "Une méthode pour vérifier périmètre, preuves, priorités, responsables et critères d’acceptation avant de financer les corrections.",
    heroTitle: "Audit SEO : que doit-il contenir pour être vraiment utile ?",
    section: "Référencement naturel",
    datePublished: "2026-07-20",
    dateModified: "2026-07-20",
    readTimeMin: 16,
  },
  {
    slug: "audit-google-ads-que-verifier",
    title: "Audit Google Ads : que vérifier ? · Hagnéré Code",
    cardTitle: "Audit Google Ads : les contrôles avant de dépenser plus",
    metaDescription:
      "Suivi des conversions, requêtes, ciblage, annonces, enchères, consentement et accès : auditez Google Ads avant d’augmenter le budget.",
    cardDescription:
      "Une méthode fondée sur des preuves pour vérifier mesure, trafic acheté, valeur métier, accès et responsabilités avant toute hausse de budget.",
    heroTitle: "Audit Google Ads : que vérifier avant d’investir ?",
    section: "Cadrer son projet",
    datePublished: "2026-07-20",
    dateModified: "2026-07-20",
    readTimeMin: 18,
  },
  {
    slug: "mvp-saas-quoi-inclure",
    title: "MVP SaaS : quoi inclure ? · Hagnéré Code",
    cardTitle: "MVP SaaS : quelles fonctionnalités inclure et exclure ?",
    metaDescription:
      "Comptes, droits, données, facturation, support et mesure : définissez le minimum pour mettre un premier client SaaS B2B en production.",
    cardDescription:
      "Une méthode pour construire une tranche verticale exploitable, choisir ce qui peut rester manuel et tester le premier client avant le devis.",
    heroTitle:
      "MVP SaaS : que faut-il inclure pour mettre un premier client en production ?",
    section: "Cadrer son projet",
    datePublished: "2026-07-20",
    dateModified: "2026-07-20",
    readTimeMin: 23,
  },
  {
    slug: "reprendre-logiciel-metier-existant",
    title: "Reprendre un logiciel métier : checklist · Hagnéré Code",
    cardTitle: "Reprendre un logiciel métier existant : audit et checklist",
    metaDescription:
      "Code, accès, données, dette technique, contrat : la checklist pour changer de prestataire et décider s’il faut stabiliser, migrer ou réécrire.",
    cardDescription:
      "Cinq portes non compensables et huit tests pour vérifier qu’une nouvelle équipe peut réellement observer, restaurer, livrer et quitter le logiciel.",
    heroTitle:
      "Comment reprendre un logiciel métier existant sans perdre le code, les données ni la continuité de service ?",
    section: "Cadrer son projet",
    datePublished: "2026-07-20",
    dateModified: "2026-07-20",
    readTimeMin: 20,
  },
  {
    slug: "calculer-roi-application-metier",
    title: "Calculer le ROI d’une application métier · Hagnéré Code",
    cardTitle: "Calculer le ROI d’une application métier",
    metaDescription:
      "Mesurez coût actuel, TCO, gains attribuables et délai de retour. Trois scénarios fictifs et quatre options comparées sur 48 mois.",
    cardDescription:
      "Une méthode pour distinguer temps théorique et bénéfice réel, refaire trois scénarios, comparer quatre options et contrôler le résultat après lancement.",
    heroTitle: "Comment calculer le ROI d’une application métier ?",
    section: "Budget & prix",
    datePublished: "2026-07-20",
    dateModified: "2026-07-20",
    readTimeMin: 23,
  },
  {
    slug: "automatiser-processus-metier",
    title: "Automatiser un processus métier : méthode · Hagnéré Code",
    cardTitle: "Automatiser un processus métier : quoi choisir d’abord",
    metaDescription:
      "Choisissez le bon processus à automatiser : matrice gain-risque-stabilité, options, rentabilité fictive, tests, responsabilités et cas inadaptés.",
    cardDescription:
      "Une méthode pour observer, classer et tester le premier processus à automatiser, avec six réponses possibles et une rentabilité fictive recalculable.",
    heroTitle: "Automatiser un processus métier : lequel choisir en premier ?",
    section: "Cadrer son projet",
    datePublished: "2026-07-20",
    dateModified: "2026-07-20",
    readTimeMin: 18,
  },
  {
    slug: "valider-idee-saas-avant-developper",
    title: "Valider une idée SaaS avant de développer · Hagnéré Code",
    cardTitle: "Valider une idée SaaS avant de développer",
    metaDescription:
      "Testez problème, acheteur, accès, engagement et faisabilité avant un MVP : entretiens sans biais, tests sans code et critères de décision.",
    cardDescription:
      "Une méthode concrète entre entreprises pour hiérarchiser les preuves, tester sans code et décider de développer, pivoter ou arrêter sans fausse validation.",
    heroTitle: "Comment valider une idée SaaS avant de développer ?",
    section: "Cadrer son projet",
    datePublished: "2026-07-20",
    dateModified: "2026-07-20",
    readTimeMin: 20,
  },
  {
    slug: "prix-gestion-google-ads",
    title: "Prix de gestion Google Ads en 2026 · Hagnéré Code",
    cardTitle: "Prix de gestion Google Ads : comparer les vrais postes",
    metaDescription:
      "Budget média, honoraires, mise en route, suivi, pages et créations : calculez le coût Google Ads sur 3, 6 et 12 mois et comparez les devis.",
    cardDescription:
      "Séparez média, honoraires et coûts annexes, comparez forfait, pourcentage et hybride, puis calculez trois socles, le coût par prospect et la sortie.",
    heroTitle:
      "Prix de gestion Google Ads : ce que coûte vraiment une campagne",
    section: "Budget & prix",
    datePublished: "2026-07-20",
    dateModified: "2026-07-20",
    readTimeMin: 18,
  },
  {
    slug: "transformer-excel-en-application",
    title: "Transformer Excel en application métier · Hagnéré Code",
    cardTitle: "Transformer un fichier Excel en application métier",
    metaDescription:
      "Quand garder Excel, choisir un logiciel, Power Apps/no-code ou du sur-mesure. Diagnostic gratuit, coût sur 4 ans, migration, RGPD et contrat.",
    cardDescription:
      "Un diagnostic transparent pour choisir entre Excel fiabilisé, logiciel existant, Power Apps/no-code et sur-mesure, puis migrer sans perdre l'historique.",
    heroTitle: "Transformer un fichier Excel en application métier",
    section: "Cadrer son projet",
    datePublished: "2026-07-19",
    dateModified: "2026-07-19",
    readTimeMin: 19,
  },
  {
    slug: "cahier-des-charges-application-metier",
    title: "Comment rédiger le cahier des charges d'une application métier",
    cardTitle: "Rédiger le cahier des charges d'une application métier",
    metaDescription:
      "Méthode, modèle et exemple pour cadrer une application métier : scénarios, données, droits, recette, migration et comparaison des offres.",
    cardDescription:
      "Une méthode fondée sur les scénarios et les preuves de recette, avec un kit Word et PDF réellement téléchargeable sans email.",
    heroTitle:
      "Cahier des charges d'une application métier : la méthode complète",
    section: "Cadrer son projet",
    datePublished: "2026-07-20",
    dateModified: "2026-07-20",
    readTimeMin: 23,
  },
  {
    slug: "combien-coute-un-crm",
    title: "Combien coûte un CRM en 2026 ? · Hagnéré Code",
    cardTitle: "Combien coûte un CRM ? Trois socles sur 36 mois",
    metaDescription:
      "Prix d'un CRM en 2026 : trois socles chiffrés sur 36 mois, puis la méthode TCO pour intégrer licences, temps interne, contrat et sortie.",
    cardDescription:
      "Trois socles CRM recalculables, les tarifs publics datés et une grille pour construire un coût total sans traiter les inconnues comme nulles.",
    heroTitle: "Combien coûte un CRM en 2026 ?",
    section: "Budget & prix",
    datePublished: "2026-07-20",
    dateModified: "2026-07-20",
    readTimeMin: 19,
  },
  {
    slug: "erp-ou-logiciel-sur-mesure",
    title: "ERP ou logiciel sur mesure : comment choisir · Hagnéré Code",
    cardTitle: "ERP, logiciel standard ou sur mesure : comment choisir",
    metaDescription:
      "Comparez ERP standard, configurable, hybride et sur mesure : critères, coût total, adoption, intégrations, sécurité et réversibilité.",
    cardDescription:
      "Une méthode de décision pour tester les processus critiques, comparer le coût sur quatre ans et exiger adoption, intégrations et réversibilité.",
    heroTitle: "ERP, logiciel standard ou sur mesure : comment choisir ?",
    section: "Comparatifs & choix",
    datePublished: "2026-07-20",
    dateModified: "2026-07-20",
    readTimeMin: 26,
  },
  {
    slug: "pourquoi-mon-site-ne-convertit-pas",
    title: "Pourquoi mon site ne convertit pas · Hagnéré Code",
    metaDescription:
      "Avant de refaire votre site, prouvez qu'il est en cause. Le taux affiché est faux dans les deux sens — et les 7 signes chiffrés qui disent de ne PAS refondre.",
    cardTitle: "Pourquoi mon site ne convertit pas : le diagnostic",
    cardDescription:
      "Le guide qui montre pourquoi votre taux affiché peut être trompeur, avec un scénario fictif composite autour d'un devis de refonte à 14 900 € à remettre en question.",
    heroTitle: "Pourquoi mon site ne convertit pas : l'arbre de diagnostic",
    section: "Cadrer son projet",
    datePublished: "2026-07-19",
    dateModified: "2026-07-20",
    readTimeMin: 23,
  },
  {
    slug: "proprietaire-site-internet-code-source",
    title: "Qui est propriétaire de votre site internet ? · Hagnéré Code",
    metaDescription:
      "Payer n'emporte pas automatiquement tous les droits : cadre légal, licences des composants, 14 accès à réclamer et marche à suivre en cas de conflit.",
    cardTitle: "Propriété d'un site internet et du code source",
    cardDescription:
      "Ce qui décide de votre liberté n'est pas la titularité des droits mais le triptyque titularité + accès + technologie standard. Sources primaires Légifrance.",
    heroTitle: "Qui est propriétaire de votre site et de son code source ?",
    section: "Cadrer son projet",
    datePublished: "2026-07-19",
    dateModified: "2026-07-20",
    readTimeMin: 28,
  },
  {
    slug: "prix-referencement-naturel",
    title: "Prix du référencement naturel 2026 · Hagnéré Code",
    metaDescription:
      "Convertissez chaque forfait SEO en heures de consultant, vérifiez 8 statistiques souvent recopiées et consultez les références juridiques citées.",
    cardTitle: "Prix du référencement naturel : ce que vous achetez vraiment",
    cardDescription:
      "Un forfait SEO n'est pas un prix, c'est un nombre d'heures. 221 €/mois achètent moins de deux heures de travail — la démonstration, et tout ce qu'elle implique.",
    heroTitle: "Prix du référencement naturel : le guide 2026",
    section: "Budget & prix",
    datePublished: "2026-07-18",
    dateModified: "2026-07-20",
    readTimeMin: 29,
  },
  {
    slug: "pourquoi-mon-site-est-lent",
    title: "Pourquoi mon site est lent : le diagnostic · Hagnéré Code",
    metaDescription:
      "Mesures labo et terrain, causes possibles, statistiques à vérifier et correctifs classés par rapport gain/effort pour diagnostiquer un site lent.",
    cardTitle: "Pourquoi mon site est lent : diagnostic et solutions",
    cardDescription:
      "Une méthode pour mesurer images, serveur et JavaScript sur mobile, puis confronter le diagnostic aux données du Web Almanac.",
    heroTitle: "Pourquoi mon site est lent : le diagnostic complet",
    section: "Comparatifs & choix",
    datePublished: "2026-07-18",
    dateModified: "2026-07-20",
    readTimeMin: 17,
  },
  {
    slug: "no-code-ou-sur-mesure",
    title: "No-code ou sur-mesure : le comparatif 2026 · Hagnéré Code",
    cardTitle: "No-code ou développement sur mesure : comment choisir",
    metaDescription:
      "Tarifs relevés le 18/07/2026, plafonds publiés, quatre chiffres sans source fiable examinés, coût sur cinq ans et cas où le no-code convient.",
    cardDescription:
      "Tarifs relevés et datés, plafonds publiés par les éditeurs, hypothèses de coût explicites et comparaison sur cinq ans.",
    heroTitle: "No-code ou développement sur mesure : le comparatif chiffré",
    section: "Comparatifs & choix",
    datePublished: "2026-07-18",
    dateModified: "2026-07-20",
    readTimeMin: 22,
  },
  {
    slug: "migrer-wordpress-vers-nextjs",
    title: "Migrer WordPress vers Next.js : le guide 2026 · Hagnéré Code",
    cardTitle: "Migrer de WordPress vers Next.js : méthode, prix, risques",
    metaDescription:
      "Prix en euros, protocole SEO sourcé Google, ce qui casse et son remplacement, les 5 cas où il ne faut pas migrer. Le guide complet, sources à l'appui.",
    cardDescription:
      "Trois architectures cibles, un protocole de migration SEO sans garantie de positions, des prix en euros et le coût total sur trois ans.",
    heroTitle:
      "Migrer de WordPress vers Next.js : méthode, prix et risques réels",
    section: "Comparatifs & choix",
    datePublished: "2026-07-18",
    dateModified: "2026-07-20",
    readTimeMin: 32,
  },
  {
    slug: "tjm-developpeur-web",
    title: "TJM développeur web 2026 : le guide de l'acheteur · Hagnéré Code",
    cardTitle: "TJM développeur web : ce que ça coûte vraiment à un client",
    metaDescription:
      "Baromètres 2026 comparés, écarts expliqués et conversion TJM → jours → budget pour lire une proposition en forfait ou en régie côté acheteur.",
    cardDescription:
      "Une lecture côté entreprise : grilles sourcées, conversion en jours par livrable et méthode pour comparer les devis.",
    heroTitle: "TJM développeur web en 2026 : le guide de celui qui paie",
    section: "Budget & prix",
    datePublished: "2026-07-18",
    dateModified: "2026-07-20",
    readTimeMin: 28,
  },
  {
    slug: "choisir-son-agence-web",
    title: "Comment choisir son agence web en 2026 · Hagnéré Code",
    cardTitle: "Choisir son agence web : la méthode de vérification",
    metaDescription:
      "18 vérifications gratuites, 13 questions avec le barème des réponses, les signaux d'alerte ancrés en jurisprudence — et comment nous auditer, nous aussi.",
    cardDescription:
      "Une méthode de vérification, un barème de réponses et des points de vigilance reliés aux sources juridiques citées.",
    heroTitle:
      "Comment choisir son agence web : la méthode de vérification objective",
    section: "Cadrer son projet",
    datePublished: "2026-07-18",
    dateModified: "2026-07-20",
    readTimeMin: 29,
  },
  {
    slug: "agence-web-ou-freelance",
    title: "Agence web ou freelance : qui choisir en 2026 · Hagnéré Code",
    cardTitle: "Agence web ou freelance : la grille de décision honnête",
    metaDescription:
      "TJM sourcés, données INSEE contextualisées, propriété du code et sous-traitance : une grille de décision par budget avec biais déclaré.",
    cardDescription:
      "TJM sourcés, données de continuité contextualisées, propriété du code, sous-traitance et grille de décision par budget.",
    heroTitle:
      "Agence web ou freelance : la grille de décision honnête, par budget et par risque",
    section: "Comparatifs & choix",
    datePublished: "2026-07-18",
    dateModified: "2026-07-20",
    readTimeMin: 22,
  },
  {
    slug: "creer-un-site-avec-ia",
    title: "Créer un site avec l'IA : le guide honnête 2026 · Hagnéré Code",
    cardTitle: "Créer un site avec l'IA : ce qui marche vraiment en 2026",
    metaDescription:
      "Générateurs no-code, vibe coding, assistants pro : coûts, propriété, sécurité, limites des études de productivité et position officielle de Google.",
    cardDescription:
      "Trois familles d'outils IA comparées : prix datés, renouvellements, propriété, sécurité, position de Google et limites des études disponibles.",
    heroTitle:
      "Créer un site avec l'IA : ce qui marche, ce qui déçoit, ce que ça coûte",
    section: "Comparatifs & choix",
    datePublished: "2026-07-18",
    dateModified: "2026-07-20",
    readTimeMin: 22,
  },
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
    dateModified: "2026-07-20",
    readTimeMin: 37,
    featured: true,
  },
  {
    slug: "combien-coute-une-application-mobile",
    title: "Combien coûte une application mobile ? · Hagnéré Code",
    cardTitle: "Combien coûte une application mobile en 2026 ?",
    metaDescription:
      "Repères de prix pour une application mobile en 2026, frais des stores, maintenance, coût sur trois ans et méthode pour construire votre budget.",
    cardDescription:
      "Repères par type d'app et prestataire, frais Apple/Google, maintenance à modéliser, coût sur trois ans et simulation détaillée d'un MVP.",
    heroTitle: "Combien coûte une application mobile en 2026 ?",
    section: "Budget & prix",
    datePublished: "2026-07-13",
    dateModified: "2026-07-20",
    readTimeMin: 29,
  },
  {
    slug: "prix-site-vitrine",
    title: "Prix d'un site vitrine en 2026 : tarifs réels · Hagnéré Code",
    cardTitle: "Prix d'un site vitrine en 2026",
    metaDescription:
      "Repères de prix d'un site vitrine en 2026 par gamme, prestataire et socle. Comparez les inclusions, les coûts sur trois ans et les hypothèses.",
    cardDescription:
      "Fourchettes publiques par gamme et prestataire, grille « inclus / en supplément », coût total sur trois ans et grille commerciale Hagnéré Code.",
    heroTitle: "Prix d'un site vitrine en 2026 : le guide complet",
    section: "Budget & prix",
    datePublished: "2026-07-14",
    dateModified: "2026-07-20",
    readTimeMin: 30,
  },
  {
    slug: "prix-site-e-commerce",
    title: "Prix site e-commerce 2026 : 2 000 à 80 000 € · Hagnéré Code",
    cardTitle: "Prix d'un site e-commerce en 2026 : le vrai budget",
    metaDescription:
      "Le prix réel d'un site e-commerce en 2026 : grilles par plateforme, coût sur 3 ans, commissions, logistique et un devis d'agence décortiqué ligne à ligne.",
    cardDescription:
      "Grilles Shopify, WooCommerce, PrestaShop et sur-mesure, coût total sur trois ans, commissions, logistique et simulation ligne à ligne.",
    heroTitle:
      "Prix d'un site e-commerce : le vrai budget en 2026 (+ devis décortiqué)",
    section: "Budget & prix",
    datePublished: "2026-07-16",
    dateModified: "2026-07-20",
    readTimeMin: 30,
  },
  {
    slug: "nextjs-ou-wordpress",
    title: "Next.js ou WordPress en 2026 : le comparatif · Hagnéré Code",
    cardTitle: "Next.js ou WordPress : que choisir en 2026 ?",
    metaDescription:
      "Next.js ou WordPress pour votre site en 2026 ? Comparatif pour dirigeants : coûts sur 3 ans, sécurité et performance chiffrées, verdict clair par profil.",
    cardDescription:
      "Le comparatif écrit pour les dirigeants, pas pour les développeurs : coût total sur 3 ans, sécurité et performance sourcées, verdict tranché par profil.",
    heroTitle:
      "Next.js ou WordPress : le comparatif honnête pour décider en 2026",
    section: "Comparatifs & choix",
    datePublished: "2026-07-16",
    dateModified: "2026-07-20",
    readTimeMin: 28,
  },
  {
    slug: "aides-creation-site-internet",
    title: "Aide création site internet : les vraies aides 2026 · Hagnéré Code",
    cardTitle: "Aides à la création de site internet : le vrai panorama 2026",
    metaDescription:
      "Chèque France Num ? Mort depuis 2021. Voici les aides réellement actives en 2026 pour financer votre site : région par région, vérifiées à la source.",
    cardDescription:
      "Chaque dispositif est relié à sa source et à sa date de vérification : aides closes signalées, dispositifs régionaux, dépôt et points de vigilance.",
    heroTitle:
      "Aides à la création de site internet : ce qui existe vraiment en 2026",
    section: "Financer son projet",
    datePublished: "2026-07-16",
    dateModified: "2026-07-20",
    readTimeMin: 25,
  },
  {
    slug: "combien-coute-un-saas",
    title: "Combien coûte un SaaS en 2026 ? Budget complet · Hagnéré Code",
    cardTitle: "Combien coûte un SaaS en 2026 ?",
    metaDescription:
      "Repères de budget d'un SaaS en 2026, coûts d'exploitation, usages possibles de l'IA et simulation détaillée d'un devis de MVP.",
    cardDescription:
      "Fourchettes éditoriales par étape, coûts d'exploitation poste par poste, limites des gains IA et simulation de devis MVP ligne à ligne.",
    heroTitle:
      "Combien coûte un SaaS ? Le budget complet en 2026 (+ devis de MVP décortiqué)",
    section: "Budget & prix",
    datePublished: "2026-07-17",
    dateModified: "2026-07-20",
    readTimeMin: 31,
  },
  {
    slug: "prix-logiciel-sur-mesure",
    title: "Prix logiciel sur mesure 2026 : 5 000 à 250 000 € · Hagnéré Code",
    cardTitle: "Prix d'un logiciel sur mesure : le budget complet 2026",
    metaDescription:
      "Combien coûte un logiciel sur mesure ? Grille 2026 par type, méthode jours × TJM, match chiffré contre SaaS et Excel, et un devis décortiqué ligne à ligne.",
    cardDescription:
      "La grille par type d'outil, la méthode pour vérifier un devis, un TCO sur 3 ans, des scénarios sur 5 ans, un ROI correctement calculé et un devis décortiqué.",
    heroTitle:
      "Prix d'un logiciel sur mesure : le budget complet en 2026 (+ devis décortiqué)",
    section: "Budget & prix",
    datePublished: "2026-07-17",
    dateModified: "2026-07-20",
    readTimeMin: 28,
  },
  {
    slug: "prix-refonte-site-internet",
    title: "Refonte site internet : prix 2026, 1 500 à 40 000 € · Hagnéré Code",
    cardTitle: "Refonte de site internet : le vrai prix en 2026",
    metaDescription:
      "Combien coûte une refonte de site ? Grille 2026 par type, migration SEO chiffrée, simulation détaillée — et les cas où il ne faut pas refondre.",
    cardDescription:
      "Les grilles 2026 par type de refonte, le poste migration SEO souvent oublié, une simulation ligne à ligne et les cas où il ne faut pas refondre.",
    heroTitle:
      "Refonte de site internet : le vrai prix en 2026 (+ devis décortiqué)",
    section: "Budget & prix",
    datePublished: "2026-07-17",
    dateModified: "2026-07-20",
    readTimeMin: 25,
  },
  {
    slug: "shopify-ou-sur-mesure",
    title: "Shopify ou e-commerce sur mesure : le match 2026 · Hagnéré Code",
    cardTitle: "Shopify ou e-commerce sur mesure : que choisir en 2026 ?",
    metaDescription:
      "Shopify ou e-commerce sur mesure ? Coût complet de Shopify commissions comprises, coût de sortie souvent oublié et verdict par profil.",
    cardDescription:
      "Le coût complet de Shopify, commissions et apps comprises, le match sur 3 ans avec point de bascule, le coût de sortie et le verdict par profil.",
    heroTitle:
      "Shopify ou e-commerce sur mesure : le comparatif honnête pour décider en 2026",
    section: "Comparatifs & choix",
    datePublished: "2026-07-17",
    dateModified: "2026-07-20",
    readTimeMin: 27,
  },
  {
    slug: "cout-maintenance-site-internet",
    title: "Coût maintenance site internet : prix réels 2026 · Hagnéré Code",
    cardTitle: "Coût de la maintenance d'un site internet en 2026",
    metaDescription:
      "Combien coûte la maintenance d'un site ? Prix 2026 par type, forfaits réels nommés, contrat décodé (SLA, pièges) et le coût de ne rien maintenir.",
    cardDescription:
      "Les prix 2026 par type de site, les forfaits réels du marché nommés, le contrat décodé clause par clause et le coût chiffré de ne pas maintenir du tout.",
    heroTitle:
      "Coût de la maintenance d'un site internet : les vrais prix 2026 (+ contrat décodé)",
    section: "Budget & prix",
    datePublished: "2026-07-17",
    dateModified: "2026-07-20",
    readTimeMin: 21,
  },
  {
    slug: "woocommerce-ou-shopify",
    title: "WooCommerce ou Shopify : le comparatif 2026 · Hagnéré Code",
    cardTitle: "WooCommerce ou Shopify : que choisir en 2026 ?",
    metaDescription:
      "WooCommerce ou Shopify en 2026 ? Coûts réels des deux côtés, vitesse mesurée sur données réelles, migration chiffrée et verdict honnête par profil.",
    cardDescription:
      "Le comparatif qui source tout : coûts réels des deux côtés, vitesse mesurée sur données réelles, sécurité et responsabilités, migration chiffrée, verdict par profil.",
    heroTitle:
      "WooCommerce ou Shopify : le comparatif honnête pour décider en 2026",
    section: "Comparatifs & choix",
    datePublished: "2026-07-17",
    dateModified: "2026-07-20",
    readTimeMin: 23,
  },
  {
    slug: "combien-de-temps-pour-creer-un-site",
    title: "Combien de temps pour créer un site internet ? · Hagnéré Code",
    cardTitle: "Combien de temps pour créer un site internet ?",
    metaDescription:
      "Construisez le délai d'un site phase par phase : périmètre, contenus, validations, dépendances, recette et rétroplanning, sans promesse universelle.",
    cardDescription:
      "Des scénarios de planification par type de site, les dépendances côté client et prestataire, et des rétroplannings à adapter à votre échéance.",
    heroTitle:
      "Combien de temps pour créer un site internet ? La méthode de planification 2026",
    section: "Cadrer son projet",
    datePublished: "2026-07-17",
    dateModified: "2026-07-20",
    readTimeMin: 21,
  },
  {
    slug: "wix-ou-wordpress",
    title: "Wix ou WordPress : le comparatif honnête 2026 · Hagnéré Code",
    cardTitle: "Wix ou WordPress : que choisir en 2026 ?",
    metaDescription:
      "Wix ou WordPress en 2026 ? Les vrais prix TTC, la vitesse mesurée, ce que vous récupérez si vous quittez Wix (sourcé) et le verdict par profil.",
    cardDescription:
      "Les vrais prix TTC des deux côtés, la vitesse mesurée sur données réelles, ce qui s'exporte (et ne s'exporte pas) de Wix, le verdict par profil — zéro affiliation.",
    heroTitle: "Wix ou WordPress : le comparatif honnête pour décider en 2026",
    section: "Comparatifs & choix",
    datePublished: "2026-07-17",
    dateModified: "2026-07-20",
    readTimeMin: 23,
  },
  {
    slug: "react-native-ou-flutter",
    title: "React Native ou Flutter : que choisir en 2026 · Hagnéré Code",
    cardTitle: "React Native ou Flutter : que choisir en 2026 ?",
    metaDescription:
      "React Native ou Flutter ? Le comparatif pour dirigeants : coûts comparés, recrutement en France, pérennité de chaque camp et verdict par profil.",
    cardDescription:
      "Le comparatif écrit pour les dirigeants, pas pour les développeurs : coûts et repères de TJM, vivier de recrutement français, gouvernance des deux camps, verdict par profil.",
    heroTitle:
      "React Native ou Flutter : le comparatif honnête pour décider en 2026",
    section: "Comparatifs & choix",
    datePublished: "2026-07-17",
    dateModified: "2026-07-20",
    readTimeMin: 25,
  },
  {
    slug: "cahier-des-charges-application-mobile",
    title: "Cahier des charges application mobile : modèle 2026 · Hagnéré Code",
    cardTitle: "Cahier des charges d'application mobile : modèle + exemple",
    metaDescription:
      "Le modèle complet de cahier des charges d'application mobile : 10 sections commentées, exemple rempli, règles des stores et erreurs à éviter.",
    cardDescription:
      "Le modèle en 10 sections commenté par une agence mobile, l'exemple rempli, les règles Apple/Google chiffrées, la maintenance à prévoir et les erreurs à éviter.",
    heroTitle:
      "Cahier des charges d'application mobile : le modèle complet (+ exemple)",
    section: "Cadrer son projet",
    datePublished: "2026-07-17",
    dateModified: "2026-07-20",
    readTimeMin: 28,
  },
  {
    slug: "refonte-sans-perdre-son-seo",
    title: "Refonte sans perdre son SEO : la méthode 2026 · Hagnéré Code",
    cardTitle: "Refonte de site sans perdre son SEO : la méthode complète",
    metaDescription:
      "Redirections 301, mythes démontés à la source Google, protocole J+1/M+3, cas WordPress vers Next.js, plan d'urgence : la méthode anti-perte de trafic.",
    cardDescription:
      "La méthode sourcée Google Search Central : 3 scénarios de risque, plan de redirection, protocole de surveillance daté, cas WordPress → Next.js et plan d'urgence.",
    heroTitle:
      "Refondre son site sans perdre son SEO : la méthode complète, sourcée Google",
    section: "Cadrer son projet",
    datePublished: "2026-07-18",
    dateModified: "2026-07-19",
    readTimeMin: 27,
  },
  {
    slug: "cahier-des-charges-site-internet",
    title: "Comment rédiger un cahier des charges de site · Guide 2026",
    cardTitle: "Comment rédiger un cahier des charges de site internet",
    metaDescription:
      "Méthode en 13 étapes pour cadrer un site : rubriques, périmètre, budget, responsabilités, recette, erreurs à éviter et passage du besoin au devis.",
    cardDescription:
      "Une méthode détaillée pour transformer un besoin métier en périmètre comparable, critères de recette et consultation exploitable.",
    heroTitle: "Comment rédiger un cahier des charges de site internet utile",
    section: "Cadrer son projet",
    datePublished: "2026-07-15",
    dateModified: "2026-07-19",
    readTimeMin: 25,
  },
];

/** Guides ayant franchi la porte éditoriale humaine et donc découvrables. */
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
