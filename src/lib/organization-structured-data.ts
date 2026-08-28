import {
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
  CONTACT_PHONE_E164,
} from "@/lib/contact-details";
import { SITE_URL } from "@/lib/seo";
import { SERVICE_LINKS } from "@/lib/services";
import { TEAM } from "@/lib/team";

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const QUENTIN_HAGNERE_ID = `${SITE_URL}/equipe#fondateur`;
export const QUENTIN_HAGNERE_URL = QUENTIN_HAGNERE_ID;

/**
 * Référence minimale vers l'entité publique, à utiliser partout où une page
 * doit seulement pointer vers l'organisation (`provider`, `publisher`,
 * `author`, `worksFor`, `seller`…).
 *
 * Recopier l'entité complète dans chaque page multiplierait les définitions
 * concurrentes du même `@id` : un moteur lit alors autant de descriptions
 * qu'il y a de pages, et la première divergence de nom, de logo ou d'adresse
 * casse l'unicité de l'entité. Le nœud complet n'est publié qu'une fois, par
 * `PUBLIC_ORGANIZATION_JSON_LD`.
 */
export const ORGANIZATION_REF = { "@id": ORGANIZATION_ID } as const;

/**
 * Identité JSON-LD canonique du fondateur — nœud unique à réutiliser partout.
 *
 * Toute page qui décrit Quentin Hagnéré (entité, guides, livres blancs, kits)
 * doit spreader cette constante plutôt que redéclarer une `Person` locale :
 * un `@id` stable et un seul `jobTitle` évitent qu'un moteur voie trois
 * personnes différentes. L'ancre `#fondateur` existe réellement dans le DOM
 * de /equipe, donc l'identifiant est résoluble côté utilisateur.
 */
export const QUENTIN_HAGNERE_PERSON = {
  "@type": "Person",
  "@id": QUENTIN_HAGNERE_ID,
  name: TEAM.quentin.fullName,
  jobTitle: TEAM.quentin.role,
  url: QUENTIN_HAGNERE_URL,
  sameAs: TEAM.quentin.linkedin ? [TEAM.quentin.linkedin] : undefined,
  worksFor: ORGANIZATION_REF,
} as const;

/**
 * Entité publique unique de Hagnéré Code.
 *
 * Organization et ProfessionalService décrivent ici la même personne morale :
 * un seul @id évite de créer artificiellement deux entreprises.
 *
 * `sameAs` est autorisé mais strictement borné aux profils officiels de CETTE
 * personne morale — typiquement sa page LinkedIn d'entreprise. Les produits du
 * groupe (LMNP.AI, SCI-AI.app, Hagnéré Patrimoine, Hagnéré Investissement) n'y
 * ont jamais leur place : ce ne sont pas la même entité. Tant qu'aucun profil
 * officiel de HAGNERE CODE n'est vérifié, la propriété reste absente plutôt
 * que remplie au jugé. L'invariant est verrouillé dans structured-data.test.ts.
 */
export const PUBLIC_ORGANIZATION_ENTITY = {
  "@type": ["Organization", "ProfessionalService"],
  "@id": ORGANIZATION_ID,
  name: "Hagnéré Code",
  alternateName: ["Hagnere Code", "HAGNÉRÉ CODE"],
  legalName: "HAGNERE CODE",
  url: SITE_URL,
  // Google demande un logo carré ou rectangulaire d'au moins 112 px de côté,
  // et recommande la forme ImageObject avec ses dimensions réelles plutôt
  // qu'une simple URL : le fichier mesure 770 × 479 px.
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/logos/logo-dark.png`,
    width: 770,
    height: 479,
    caption: "Logo Hagnéré Code",
  },
  image: `${SITE_URL}/og-image.png`,
  description:
    "Agence web complète basée à Bassens, aux portes de Chambéry (Savoie) : développement sur mesure de sites vitrines, e-commerce, SaaS, applications métier, outils internes, SEO et Google Ads.",
  foundingDate: "2025-09-30",
  founder: QUENTIN_HAGNERE_PERSON,
  // NAP (nom, adresse, téléphone) repris de `contact-details.ts` : le JSON-LD
  // est la version lue par les moteurs et par une future fiche d'établissement.
  // S'il diverge d'un caractère du bloc affiché sur /contact ou du pied de page,
  // c'est le référencement local qui le paie.
  address: {
    "@type": "PostalAddress",
    streetAddress: CONTACT_ADDRESS.street,
    addressLocality: CONTACT_ADDRESS.locality,
    addressRegion: "Savoie",
    postalCode: CONTACT_ADDRESS.postalCode,
    addressCountry: CONTACT_ADDRESS.country,
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: CONTACT_EMAIL,
    telephone: CONTACT_PHONE_E164,
    availableLanguage: ["French"],
    areaServed: "FR",
  },
  email: CONTACT_EMAIL,
  telephone: CONTACT_PHONE_E164,
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
  // Aucun `numberOfEmployees` : schema.org définit cette propriété comme le
  // nombre de SALARIÉS de l'organisation. Le registre `TEAM` compte sept
  // personnes, dont trois déclarées `status: "freelance"` et affichées comme
  // telles sur /equipe (badge FREELANCE) : publier 7 reviendrait à revendiquer
  // en lecture machine un effectif salarié contredit par le site lui-même et
  // par le registre du commerce. La composition réelle reste portée par le
  // texte visible (TEAM_PUBLIC_COMPOSITION) et par la liste `member` de
  // /equipe, qui n'affirment aucun lien salarial. Voir la règle d'or de
  // CLAUDE.md : jamais d'effectif revendiqué non conforme.
  // Catalogue d'offres dérivé du registre des services : il décrit ce que
  // l'entreprise propose réellement, sans prix ni engagement, et aide les
  // moteurs comme les assistants à relier l'entité à ses prestations.
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Prestations Hagnéré Code",
    itemListElement: SERVICE_LINKS.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.description,
        url: `${SITE_URL}${service.path}`,
        provider: ORGANIZATION_REF,
      },
    })),
  },
  // Identifiants légaux stables de la personne morale. Aucun SIRET
  // d'établissement n'est publié tant que le transfert de siège est en cours.
  // Pas de `taxID` : cette propriété désigne l'identifiant fiscal, pas le
  // numéro de TVA intracommunautaire. Y recopier la valeur de `vatID` publiait
  // deux fois la même donnée sous deux sens différents.
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
  publisher: ORGANIZATION_REF,
} as const;
