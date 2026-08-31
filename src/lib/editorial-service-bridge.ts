/**
 * Passerelle des hubs éditoriaux vers l'offre.
 *
 * Les trois hubs — /ressources, /livres-blancs, /guides — mènent un lecteur
 * venu de Google jusqu'au bout d'une décision, puis doivent lui dire de quelle
 * nature est le projet qui en découle. Les deux premiers portaient chacun leur
 * copie de cette liste ; /guides n'en avait aucune et ne publiait donc aucun
 * lien vers /services ni /tarifs. C'est exactement ce que trois copies d'une
 * même liste finissent par produire.
 *
 * Le balisage reste propre à chaque hub — deux sont en Tailwind, /guides est
 * dans le langage de design maison. Seule la donnée est commune.
 */
export interface EditorialServiceRoute {
  href: `/services/${string}`;
  label: string;
  hint: string;
}

export const EDITORIAL_SERVICE_ROUTES: EditorialServiceRoute[] = [
  {
    href: "/services/sites-vitrines",
    label: "Sites vitrines et landing pages",
    hint: "Site public à construire ou à refondre",
  },
  {
    href: "/services/ecommerce",
    label: "E-commerce sur mesure",
    hint: "Vente en ligne et tunnel de commande",
  },
  {
    href: "/services/saas-applications-metier",
    label: "SaaS et applications métier",
    hint: "Produit ou logiciel derrière un identifiant",
  },
  {
    href: "/services/outils-internes-sur-mesure",
    label: "Outils internes sur mesure",
    hint: "Sortir des tableurs et automatiser un processus",
  },
];
