import { SITE_URL } from "./seo";

export interface ServiceRegistryEntry {
  title: string;
  path: `/services/${string}`;
  description: string;
}

/**
 * Identifiant JSON-LD canonique d'une prestation.
 *
 * Sans lui, chaque service était décrit par deux nœuds `Service` anonymes
 * portant la MÊME `url` : celui de la page (nom long, commercial) et celui du
 * `hasOfferCatalog` de l'entité, réémis sur toutes les pages qui publient
 * l'organisation. Deux entités sans `@id`, deux noms, deux descriptions, un
 * seul document : un consommateur de données structurées devait arbitrer.
 *
 * Un `@id` stable règle le problème à la racine — c'est le même geste que
 * `ORGANIZATION_REF` pour l'entité publique. Le nœud complet n'est publié
 * qu'une fois, sur la page du service ; le catalogue et le hub /services ne
 * portent plus que la référence.
 */
export function serviceEntityId(path: ServiceRegistryEntry["path"]): string {
  return `${SITE_URL}${path}#service`;
}

/** Source unique des pages service publiées dans sitemap.xml et llms.txt. */
export const SERVICE_LINKS: ServiceRegistryEntry[] = [
  {
    title: "SaaS et applications métier",
    path: "/services/saas-applications-metier",
    description:
      "Conception et développement de logiciels SaaS et d'applications métier sur mesure.",
  },
  {
    title: "Outils internes sur mesure",
    path: "/services/outils-internes-sur-mesure",
    description:
      "Automatisation de processus et remplacement d'outils internes fragiles ou dispersés.",
  },
  {
    title: "Sites vitrines",
    path: "/services/sites-vitrines",
    description:
      "Conception de sites publics rapides, accessibles et administrables.",
  },
  {
    title: "E-commerce",
    path: "/services/ecommerce",
    description:
      "Conception, intégration et évolution de boutiques et parcours de vente en ligne.",
  },
  {
    title: "Référencement Google",
    path: "/services/referencement-google",
    description:
      "Audit, stratégie de contenu, référencement local et amélioration technique mesurable.",
  },
  {
    title: "Publicité en ligne",
    path: "/services/publicite-en-ligne",
    description:
      "Cadrage, instrumentation et gestion de campagnes d'acquisition payante.",
  },
  {
    title: "Contenu et vidéo",
    path: "/services/contenu-video",
    description:
      "Production et intégration de contenus utiles aux parcours éditoriaux et commerciaux.",
  },
  {
    title: "Application mobile",
    path: "/services/application-mobile",
    description:
      "Cadrage et développement d'applications mobiles selon le besoin et les contraintes du produit.",
  },
  {
    title: "Maintenance et évolution",
    path: "/services/maintenance-evolution",
    description:
      "Maintenance corrective, évolutive, observabilité et accompagnement après livraison.",
  },
  {
    title: "Sécurité et RGPD",
    path: "/services/securite-rgpd",
    description:
      "Audit applicatif et remédiation technique en coordination avec les responsables juridiques du client.",
  },
  {
    title: "Audit technique",
    path: "/services/audit-technique",
    description:
      "Diagnostic de performance, qualité, sécurité, dette technique et capacité d'évolution.",
  },
];
