import { SITE_URL } from "@/lib/seo";
import { TEAM } from "@/lib/team";

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const QUENTIN_HAGNERE_ID = `${SITE_URL}/equipe#fondateur`;
export const QUENTIN_HAGNERE_URL = QUENTIN_HAGNERE_ID;

/**
 * Entité publique unique de Hagnéré Code.
 *
 * Organization et ProfessionalService décrivent ici la même personne morale :
 * un seul @id évite de créer artificiellement deux entreprises. Les profils ou
 * produits liés ne doivent pas être placés dans `sameAs`, réservé à des pages
 * qui identifient réellement cette même entité.
 */
export const PUBLIC_ORGANIZATION_ENTITY = {
  "@type": ["Organization", "ProfessionalService"],
  "@id": ORGANIZATION_ID,
  name: "Hagnéré Code",
  alternateName: ["Hagnere Code", "HAGNÉRÉ CODE"],
  legalName: "HAGNERE CODE",
  url: SITE_URL,
  logo: `${SITE_URL}/logos/logo-dark.png`,
  image: `${SITE_URL}/og-image.png`,
  description:
    "Agence web complète basée à Bassens, aux portes de Chambéry (Savoie) : développement sur mesure de sites vitrines, e-commerce, SaaS, applications métier, outils internes, SEO et Google Ads.",
  foundingDate: "2025-09-30",
  founder: {
    "@type": "Person",
    "@id": QUENTIN_HAGNERE_ID,
    name: TEAM.quentin.fullName,
    jobTitle: TEAM.quentin.role,
    url: QUENTIN_HAGNERE_URL,
    sameAs: TEAM.quentin.linkedin ? [TEAM.quentin.linkedin] : undefined,
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "82 impasse de Bellevue",
    addressLocality: "Bassens",
    addressRegion: "Savoie",
    postalCode: "73000",
    addressCountry: "FR",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "quentin@hagnere-patrimoine.fr",
    telephone: "+33374472018",
    availableLanguage: ["French"],
    areaServed: "FR",
  },
  email: "quentin@hagnere-patrimoine.fr",
  telephone: "+33374472018",
  areaServed: [
    { "@type": "AdministrativeArea", name: "Savoie" },
    { "@type": "AdministrativeArea", name: "Haute-Savoie" },
    { "@type": "AdministrativeArea", name: "Isère" },
    { "@type": "AdministrativeArea", name: "Ain" },
    { "@type": "AdministrativeArea", name: "Auvergne-Rhône-Alpes" },
    { "@type": "Country", name: "France" },
  ],
  knowsAbout: [
    "Création de site internet",
    "Développement web sur mesure",
    "Site e-commerce",
    "Développement SaaS",
    "Applications métier",
    "Outils internes",
    "Application mobile",
    "Référencement naturel (SEO)",
    "Campagnes Google Ads",
    "Refonte de site internet",
    "Maintenance et infogérance web",
  ],
  // Identifiants légaux stables de la personne morale. Aucun SIRET
  // d'établissement n'est publié tant que le transfert de siège est en cours.
  taxID: "FR30993672856",
  vatID: "FR30993672856",
  identifier: [
    { "@type": "PropertyValue", propertyID: "SIREN", value: "993672856" },
    { "@type": "PropertyValue", propertyID: "NAF", value: "62.01Z" },
  ],
} as const;

export const PUBLIC_ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  ...PUBLIC_ORGANIZATION_ENTITY,
} as const;

export const WEBSITE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: "Hagnéré Code",
  alternateName: "Hagnere Code",
  url: SITE_URL,
  inLanguage: "fr-FR",
  publisher: { "@id": ORGANIZATION_ID },
} as const;
