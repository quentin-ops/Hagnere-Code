/**
 * Routes éditoriales retirées lors de la remise à zéro du 29 juillet 2026.
 *
 * La liste est volontairement fermée : une URL arbitraire sous /guides ne doit
 * pas être redirigée comme si elle avait existé. À mesure qu'un guide est
 * réécrit et republié, son slug doit être retiré de cette liste.
 */
export const LEGACY_GUIDE_SLUGS = [
  "agence-saas-ou-freelance",
  "agence-web-ou-freelance",
  "aides-creation-site-internet",
  "application-gestion-interventions-terrain",
  "application-suivi-production-pme",
  "audit-google-ads-que-verifier",
  "audit-seo-que-contient-il",
  "audit-technique-avant-reprendre-site",
  "automatiser-saisie-donnees-entreprise",
  "back-office-sur-mesure-pme",
  "budget-google-ads-pme",
  "cahier-des-charges-application-metier",
  "cahier-des-charges-application-mobile",
  "cahier-des-charges-saas",
  "cahier-des-charges-site-internet",
  "calculer-cout-par-lead-google-ads",
  "choisir-agence-google-ads",
  "choisir-agence-seo",
  "choisir-prestataire-application-metier",
  "choisir-son-agence-web",
  "combien-coute-un-crm",
  "combien-coute-un-saas",
  "combien-coute-un-site-internet",
  "combien-coute-une-application-mobile",
  "combien-de-temps-developper-saas",
  "combien-de-temps-pour-creer-un-site",
  "combien-de-temps-resultats-seo",
  "connecter-erp-crm-logiciel-metier",
  "contrat-seo-duree-engagement",
  "contrat-tma-application",
  "cout-maintenance-application-metier",
  "cout-maintenance-site-internet",
  "creer-un-site-avec-ia",
  "crm-sur-mesure-ou-hubspot",
  "dette-technique-cout-entreprise",
  "digitaliser-bons-intervention",
  "erp-ou-logiciel-sur-mesure",
  "facturation-abonnements-saas",
  "faire-evoluer-saas-apres-mvp",
  "google-ads-commerce-local",
  "google-ads-ou-meta-ads",
  "google-ads-saas-b2b",
  "google-search-ads-ou-performance-max",
  "landing-page-google-ads",
  "landing-page-ou-site-vitrine",
  "leads-google-ads-non-qualifies",
  "logiciel-gestion-stock-sur-mesure",
  "logiciel-planning-sur-mesure",
  "lovable-bolt-v0-ou-agence-saas",
  "migrer-logiciel-metier-sans-interruption",
  "migrer-wordpress-vers-nextjs",
  "mvp-prototype-ou-poc",
  "mvp-saas-quoi-inclure",
  "nextjs-ou-wordpress",
  "no-code-ou-sur-mesure",
  "portail-client-b2b-sur-mesure",
  "positions-google-baissent",
  "pourquoi-google-ads-ne-convertit-pas",
  "pourquoi-mon-site-est-lent",
  "pourquoi-mon-site-ne-convertit-pas",
  "pourquoi-site-pas-visible-google",
  "power-apps-ou-application-sur-mesure",
  "preparer-contenus-site-vitrine",
  "prioriser-fonctionnalites-mvp-saas",
  "prise-rendez-vous-en-ligne-site-vitrine",
  "prix-logiciel-sur-mesure",
  "prix-referencement-naturel",
  "prix-refonte-site-internet",
  "prix-site-e-commerce",
  "prix-site-vitrine",
  "proprietaire-site-internet-code-source",
  "react-native-ou-flutter",
  "refonte-sans-perdre-son-seo",
  "remplacer-microsoft-access-application-web",
  "reprendre-logiciel-metier-existant",
  "reprendre-maintenance-site-autre-agence",
  "reprendre-mvp-vibe-code",
  "reprendre-saas-developpe-par-freelance",
  "rgpd-saas-b2b",
  "securite-saas-b2b",
  "seo-local-pme",
  "seo-ou-google-ads",
  "seo-saas-b2b",
  "shopify-ou-sur-mesure",
  "site-indexe-sans-trafic",
  "site-internet-en-panne-que-faire",
  "site-one-page-ou-multipage",
  "sla-maintenance-applicative",
  "suivi-conversions-google-ads",
  "template-ou-site-sur-mesure",
  "tjm-developpeur-web",
  "tma-ou-regie",
  "transformer-excel-en-application",
  "wix-ou-wordpress",
  "woocommerce-ou-shopify",
  "zapier-make-ou-developpement-sur-mesure",
] as const;

export type LegacyGuideSlug = (typeof LEGACY_GUIDE_SLUGS)[number];

const legacyGuideSet = new Set<string>(LEGACY_GUIDE_SLUGS);

const destinationRules: ReadonlyArray<{
  pattern: RegExp;
  destination: string;
}> = [
  {
    pattern:
      /google-ads|google-search-ads|meta-ads|cout-par-lead|landing-page-google|suivi-conversions/,
    destination: "/services/publicite-en-ligne",
  },
  {
    pattern:
      /(?:^|-)seo(?:-|$)|referencement|positions-google|site-indexe|visible-google/,
    destination: "/services/referencement-google",
  },
  {
    pattern: /rgpd|securite/,
    destination: "/services/securite-rgpd",
  },
  {
    pattern: /application-mobile|react-native|flutter/,
    destination: "/services/application-mobile",
  },
  {
    pattern: /e-commerce|shopify|woocommerce/,
    destination: "/services/ecommerce",
  },
  {
    pattern:
      /maintenance|(?:^|-)tma(?:-|$)|sla|dette-technique|reprendre-site|site-en-panne/,
    destination: "/services/maintenance-evolution",
  },
  {
    pattern:
      /saas|(?:^|-)mvp(?:-|$)|lovable|bolt|facturation-abonnements|valider-idee/,
    destination: "/services/saas-applications-metier",
  },
  {
    pattern:
      /site|wordpress|wix|web|vitrine|landing-page|refonte|agence-web|contenus/,
    destination: "/services/sites-vitrines",
  },
  {
    pattern:
      /logiciel|application|crm|erp|automatiser|excel|back-office|portail|digitaliser|power-apps|no-code|zapier|make|processus|planning|interventions|production|tjm/,
    destination: "/services/outils-internes-sur-mesure",
  },
];

export function getLegacyGuideDestination(slug: string): string | null {
  if (!legacyGuideSet.has(slug)) return null;

  return (
    destinationRules.find(({ pattern }) => pattern.test(slug))?.destination ??
    "/guides"
  );
}
