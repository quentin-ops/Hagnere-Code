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
    slug: "proprietaire-site-internet-code-source",
    title: "Qui est propriétaire de votre site internet ? · Hagnéré Code",
    metaDescription:
      "Payer ne transfère aucun droit : la loi, les briques que personne ne peut vous céder, les 14 accès à réclamer et la marche à suivre quand le conflit est là.",
    cardTitle: "Propriété d'un site internet et du code source",
    cardDescription:
      "Ce qui décide de votre liberté n'est pas la titularité des droits mais le triptyque titularité + accès + technologie standard. Sources primaires Légifrance.",
    heroTitle: "Qui est propriétaire de votre site et de son code source ?",
    section: "Cadrer son projet",
    datePublished: "2026-07-19",
    dateModified: "2026-07-19",
    readTimeMin: 30,
  },
  {
    slug: "prix-referencement-naturel",
    title: "Prix du référencement naturel 2026 · Hagnéré Code",
    metaDescription:
      "Le seul guide qui convertit chaque forfait SEO en heures de consultant, démonte 8 statistiques recopiées partout et cite la jurisprudence française.",
    cardTitle: "Prix du référencement naturel : ce que vous achetez vraiment",
    cardDescription:
      "Un forfait SEO n'est pas un prix, c'est un nombre d'heures. 221 €/mois achètent moins de deux heures de travail — la démonstration, et tout ce qu'elle implique.",
    heroTitle: "Prix du référencement naturel : le guide 2026",
    section: "Budget & prix",
    datePublished: "2026-07-18",
    dateModified: "2026-07-18",
    readTimeMin: 29,
  },
  {
    slug: "pourquoi-mon-site-est-lent",
    title: "Pourquoi mon site est lent : le diagnostic · Hagnéré Code",
    metaDescription:
      "Les vraies causes mesurées, la différence labo/terrain que personne n'explique, les chiffres bidon démontés — et les correctifs par rapport gain/effort.",
    cardTitle: "Pourquoi mon site est lent : diagnostic et solutions",
    cardDescription:
      "Le seul guide qui dit que le vrai maillon faible du mobile n'est pas vos images mais votre serveur — chiffres du Web Almanac à l'appui.",
    heroTitle: "Pourquoi mon site est lent : le diagnostic complet",
    section: "Comparatifs & choix",
    datePublished: "2026-07-18",
    dateModified: "2026-07-18",
    readTimeMin: 24,
  },
  {
    slug: "no-code-ou-sur-mesure",
    title: "No-code ou sur-mesure : le comparatif 2026 · Hagnéré Code",
    cardTitle: "No-code ou développement sur mesure : comment choisir",
    metaDescription:
      "Tarifs relevés le 18/07/2026, plafonds contractuels réels, 4 chiffres bidon démontés, courbe de coût sur 5 ans — et les cas où le no-code gagne.",
    cardDescription:
      "Le seul comparatif avec des tarifs réellement relevés, les plafonds officiels des éditeurs, et les chiffres inventés du secteur démontés un par un.",
    heroTitle: "No-code ou développement sur mesure : le comparatif chiffré",
    section: "Comparatifs & choix",
    datePublished: "2026-07-18",
    dateModified: "2026-07-18",
    readTimeMin: 25,
  },
  {
    slug: "migrer-wordpress-vers-nextjs",
    title: "Migrer WordPress vers Next.js : le guide 2026 · Hagnéré Code",
    cardTitle: "Migrer de WordPress vers Next.js : méthode, prix, risques",
    metaDescription:
      "Prix en euros, protocole SEO sourcé Google, ce qui casse et son remplacement, les 5 cas où il ne faut pas migrer. Le guide complet, sources à l'appui.",
    cardDescription:
      "Les 3 architectures cibles, le protocole SEO zéro perte, les vrais prix en euros, le coût total sur 3 ans — et quand rester sur WordPress.",
    heroTitle: "Migrer de WordPress vers Next.js : méthode, prix et risques réels",
    section: "Comparatifs & choix",
    datePublished: "2026-07-18",
    dateModified: "2026-07-18",
    readTimeMin: 25,
  },
  {
    slug: "tjm-developpeur-web",
    title: "TJM développeur web 2026 : le guide de l'acheteur · Hagnéré Code",
    cardTitle: "TJM développeur web : ce que ça coûte vraiment à un client",
    metaDescription:
      "Baromètres 2026 comparés, pourquoi ils se contredisent, la conversion TJM → jours → budget, forfait ou régie : le seul guide écrit côté acheteur.",
    cardDescription:
      "Toutes les pages sur le TJM parlent au freelance qui fixe son prix. Celle-ci parle à l'entreprise qui paie : grilles sourcées, jours par livrable, lecture de devis.",
    heroTitle: "TJM développeur web en 2026 : le guide de celui qui paie",
    section: "Budget & prix",
    datePublished: "2026-07-18",
    dateModified: "2026-07-18",
    readTimeMin: 25,
  },
  {
    slug: "choisir-son-agence-web",
    title: "Comment choisir son agence web en 2026 · Hagnéré Code",
    cardTitle: "Choisir son agence web : la méthode de vérification",
    metaDescription:
      "18 vérifications gratuites, 13 questions avec le barème des réponses, les signaux d'alerte ancrés en jurisprudence — et comment nous auditer, nous aussi.",
    cardDescription:
      "Tout le monde liste des critères. Ce guide donne la méthode de vérification objective, le barème des bonnes réponses et les pièges confirmés en justice.",
    heroTitle: "Comment choisir son agence web : la méthode de vérification objective",
    section: "Cadrer son projet",
    datePublished: "2026-07-18",
    dateModified: "2026-07-18",
    readTimeMin: 26,
  },
  {
    slug: "agence-web-ou-freelance",
    title: "Agence web ou freelance : qui choisir en 2026 · Hagnéré Code",
    cardTitle: "Agence web ou freelance : la grille de décision honnête",
    metaDescription:
      "TJM sourcés, risques quantifiés (INSEE), propriété du code, sous-traitance : la grille de décision par budget qu'aucun comparatif ne donne. Biais déclaré.",
    cardDescription:
      "Le comparatif que personne n'ose écrire : TJM sourcés, risque de disparition chiffré, propriété du code, sous-traitance déguisée — et une grille par budget.",
    heroTitle: "Agence web ou freelance : la grille de décision honnête, par budget et par risque",
    section: "Comparatifs & choix",
    datePublished: "2026-07-18",
    dateModified: "2026-07-18",
    readTimeMin: 24,
  },
  {
    slug: "creer-un-site-avec-ia",
    title: "Créer un site avec l'IA : le guide honnête 2026 · Hagnéré Code",
    cardTitle: "Créer un site avec l'IA : ce qui marche vraiment en 2026",
    metaDescription:
      "Générateurs no-code, vibe coding, assistants pro : prix vérifiés, pièges réels, position de Google — et pourquoi l'IA a fait baisser le prix du sur-mesure.",
    cardDescription:
      "Les 3 familles d'outils IA passées au crible : prix réels avec renouvellements, pièges documentés, position officielle de Google — et le vrai bouleversement.",
    heroTitle: "Créer un site avec l'IA : ce qui marche, ce qui déçoit, ce que ça coûte",
    section: "Comparatifs & choix",
    datePublished: "2026-07-18",
    dateModified: "2026-07-18",
    readTimeMin: 24,
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
    dateModified: "2026-07-18",
    readTimeMin: 25,
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
    dateModified: "2026-07-17",
    readTimeMin: 25,
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
    dateModified: "2026-07-18",
    readTimeMin: 25,
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
    dateModified: "2026-07-18",
    readTimeMin: 25,
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
    dateModified: "2026-07-18",
    readTimeMin: 25,
  },
  {
    slug: "aides-creation-site-internet",
    title: "Aide création site internet : les vraies aides 2026 · Hagnéré Code",
    cardTitle: "Aides à la création de site internet : le vrai panorama 2026",
    metaDescription:
      "Chèque France Num ? Mort depuis 2021. Voici les aides réellement actives en 2026 pour financer votre site : région par région, vérifiées à la source.",
    cardDescription:
      "Le seul panorama qui vérifie chaque dispositif à la source : aides mortes signalées, aides régionales actives, mode d'emploi de dépôt et arnaques à éviter.",
    heroTitle: "Aides à la création de site internet : ce qui existe vraiment en 2026",
    section: "Financer son projet",
    datePublished: "2026-07-16",
    dateModified: "2026-07-17",
    readTimeMin: 25,
  },
  {
    slug: "combien-coute-un-saas",
    title: "Combien coûte un SaaS en 2026 ? Prix réels · Hagnéré Code",
    cardTitle: "Combien coûte un SaaS en 2026 ?",
    metaDescription:
      "De 5 000 € à 100 000 €+ : le vrai prix d'un SaaS en 2026, coûts d'exploitation chiffrés, impact réel de l'IA et devis de MVP décortiqué ligne à ligne.",
    cardDescription:
      "Fourchettes par étape (POC, MVP, V1), coûts d'exploitation poste par poste, ce que l'IA change vraiment, et un devis de MVP réel décortiqué ligne à ligne.",
    heroTitle: "Combien coûte un SaaS ? Le vrai budget en 2026 (+ devis de MVP décortiqué)",
    section: "Budget & prix",
    datePublished: "2026-07-17",
    dateModified: "2026-07-17",
    readTimeMin: 25,
  },
  {
    slug: "prix-logiciel-sur-mesure",
    title: "Prix logiciel sur mesure 2026 : 5 000 à 250 000 € · Hagnéré Code",
    cardTitle: "Prix d'un logiciel sur mesure : le vrai budget 2026",
    metaDescription:
      "Combien coûte un logiciel sur mesure ? Grille 2026 par type, méthode jours × TJM, match chiffré contre SaaS et Excel, et un devis décortiqué ligne à ligne.",
    cardDescription:
      "La grille par type d'outil, la méthode pour vérifier un devis, le match sur 3 ans contre SaaS et Excel, le ROI en heures gagnées et un devis décortiqué.",
    heroTitle: "Prix d'un logiciel sur mesure : le vrai budget en 2026 (+ devis décortiqué)",
    section: "Budget & prix",
    datePublished: "2026-07-17",
    dateModified: "2026-07-17",
    readTimeMin: 25,
  },
  {
    slug: "prix-refonte-site-internet",
    title: "Refonte site internet : prix 2026, 1 500 à 40 000 € · Hagnéré Code",
    cardTitle: "Refonte de site internet : le vrai prix en 2026",
    metaDescription:
      "Combien coûte une refonte de site ? Grille 2026 par type, la migration SEO enfin chiffrée, un devis réel décortiqué — et quand il ne faut pas refondre.",
    cardDescription:
      "Les grilles 2026 par type de refonte, le poste migration SEO que tous les devis oublient, un devis réel ligne à ligne et les cas où il ne faut pas refondre.",
    heroTitle: "Refonte de site internet : le vrai prix en 2026 (+ devis décortiqué)",
    section: "Budget & prix",
    datePublished: "2026-07-17",
    dateModified: "2026-07-17",
    readTimeMin: 25,
  },
  {
    slug: "shopify-ou-sur-mesure",
    title: "Shopify ou e-commerce sur mesure : le match 2026 · Hagnéré Code",
    cardTitle: "Shopify ou e-commerce sur mesure : que choisir en 2026 ?",
    metaDescription:
      "Shopify ou e-commerce sur mesure ? Le vrai coût de Shopify commissions comprises, le coût de sortie que personne ne chiffre et le verdict par profil.",
    cardDescription:
      "Le coût réel de Shopify commissions et apps comprises, le match sur 3 ans avec point de bascule, le coût de sortie que personne ne chiffre, verdict par profil.",
    heroTitle: "Shopify ou e-commerce sur mesure : le comparatif honnête pour décider en 2026",
    section: "Comparatifs & choix",
    datePublished: "2026-07-17",
    dateModified: "2026-07-18",
    readTimeMin: 25,
  },
  {
    slug: "cout-maintenance-site-internet",
    title: "Coût maintenance site internet : prix réels 2026 · Hagnéré Code",
    cardTitle: "Coût de la maintenance d'un site internet en 2026",
    metaDescription:
      "Combien coûte la maintenance d'un site ? Prix 2026 par type, forfaits réels nommés, contrat décodé (SLA, pièges) et le coût de ne rien maintenir.",
    cardDescription:
      "Les prix 2026 par type de site, les forfaits réels du marché nommés, le contrat décodé clause par clause et le coût chiffré de ne pas maintenir du tout.",
    heroTitle: "Coût de la maintenance d'un site internet : les vrais prix 2026 (+ contrat décodé)",
    section: "Budget & prix",
    datePublished: "2026-07-17",
    dateModified: "2026-07-18",
    readTimeMin: 25,
  },
  {
    slug: "woocommerce-ou-shopify",
    title: "WooCommerce ou Shopify : le comparatif 2026 · Hagnéré Code",
    cardTitle: "WooCommerce ou Shopify : que choisir en 2026 ?",
    metaDescription:
      "WooCommerce ou Shopify en 2026 ? Coûts réels des deux côtés, vitesse mesurée sur données réelles, migration chiffrée et verdict honnête par profil.",
    cardDescription:
      "Le comparatif qui source tout : coûts réels des deux côtés, vitesse mesurée sur données réelles, sécurité et responsabilités, migration chiffrée, verdict par profil.",
    heroTitle: "WooCommerce ou Shopify : le comparatif honnête pour décider en 2026",
    section: "Comparatifs & choix",
    datePublished: "2026-07-17",
    dateModified: "2026-07-18",
    readTimeMin: 25,
  },
  {
    slug: "combien-de-temps-pour-creer-un-site",
    title: "Combien de temps pour créer un site internet ? · Hagnéré Code",
    cardTitle: "Combien de temps pour créer un site internet ?",
    metaDescription:
      "Site vitrine : 4-8 semaines. E-commerce : 2-4 mois. Les délais réels 2026 phase par phase, la part du planning qui dépend de vous et les rétro-plannings.",
    cardDescription:
      "Les délais réels par type et par méthode, le planning phase par phase, la moitié du calendrier qui dépend du client et les rétro-plannings Noël, salon, saison.",
    heroTitle: "Combien de temps pour créer un site internet ? Les délais réels en 2026",
    section: "Cadrer son projet",
    datePublished: "2026-07-17",
    dateModified: "2026-07-17",
    readTimeMin: 25,
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
    dateModified: "2026-07-18",
    readTimeMin: 25,
  },
  {
    slug: "react-native-ou-flutter",
    title: "React Native ou Flutter : que choisir en 2026 · Hagnéré Code",
    cardTitle: "React Native ou Flutter : que choisir en 2026 ?",
    metaDescription:
      "React Native ou Flutter ? Le comparatif pour dirigeants : coûts réels, recrutement en France, pérennité de chaque camp et verdict par profil.",
    cardDescription:
      "Le comparatif écrit pour les dirigeants, pas pour les développeurs : coûts et TJM réels, vivier de recrutement français, gouvernance des deux camps, verdict par profil.",
    heroTitle: "React Native ou Flutter : le comparatif honnête pour décider en 2026",
    section: "Comparatifs & choix",
    datePublished: "2026-07-17",
    dateModified: "2026-07-18",
    readTimeMin: 25,
  },
  {
    slug: "cahier-des-charges-application-mobile",
    title: "Cahier des charges application mobile : modèle 2026 · Hagnéré Code",
    cardTitle: "Cahier des charges d'application mobile : modèle + exemple",
    metaDescription:
      "Le modèle complet de cahier des charges d'application mobile : 10 sections commentées, exemple rempli, règles des stores et erreurs à éviter.",
    cardDescription:
      "Le modèle en 10 sections commenté par une agence mobile, l'exemple rempli, les règles Apple/Google chiffrées, la maintenance obligatoire et les erreurs fatales.",
    heroTitle: "Cahier des charges d'application mobile : le modèle complet (+ exemple)",
    section: "Cadrer son projet",
    datePublished: "2026-07-17",
    dateModified: "2026-07-17",
    readTimeMin: 25,
  },
  {
    slug: "refonte-sans-perdre-son-seo",
    title: "Refonte sans perdre son SEO : la méthode 2026 · Hagnéré Code",
    cardTitle: "Refonte de site sans perdre son SEO : la méthode complète",
    metaDescription:
      "Redirections 301, mythes démontés à la source Google, protocole J+1/M+3, cas WordPress vers Next.js, plan d'urgence : la méthode anti-perte de trafic.",
    cardDescription:
      "La méthode sourcée Google Search Central : 3 scénarios de risque, plan de redirection, protocole de surveillance daté, cas WordPress → Next.js et plan d'urgence.",
    heroTitle: "Refondre son site sans perdre son SEO : la méthode complète, sourcée Google",
    section: "Cadrer son projet",
    datePublished: "2026-07-18",
    dateModified: "2026-07-18",
    readTimeMin: 24,
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
    dateModified: "2026-07-17",
    readTimeMin: 25,
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
