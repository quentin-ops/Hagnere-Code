/**
 * Registre des pages locales — SOURCE DE VÉRITÉ UNIQUE.
 *
 * Même principe que src/lib/guides.ts : chaque page locale déclarée ici
 * alimente automatiquement le sitemap, et servira au maillage interne.
 *
 * ⚠️ RÈGLE D'OUVERTURE D'UNE PAGE (docs/plan-seo-local-savoie.md, §1) :
 * une commune n'ouvre une page QUE si l'on peut écrire honnêtement les
 * quatre éléments suivants — filière dominante nommée, trois à cinq
 * entreprises ou institutions réelles, zones d'activité exactes, et un cas
 * d'usage web ou logiciel propre à cette économie. Si l'un manque, la page
 * n'existe pas. C'est ce qui sépare une page locale utile d'une doorway page.
 *
 * ⚠️ PLAFOND DUR : 25 URL locales. Au-delà, on bascule mécaniquement dans le
 * modèle de pages dupliquées que le plan refuse.
 *
 * ⚠️ CADENCE : une page locale toutes les deux semaines maximum, et aucune
 * nouvelle page tant qu'une page existante est à zéro impression après
 * 90 jours (frein dur du plan).
 */

export type LocalPageLevel = "territoire" | "departement" | "ville" | "ville-service" | "secteur";

export interface LocalPageEntry {
  /** Chemin après /agence (ou /secteurs), sans slash initial ni final.
   *  Exemples : "" (pilier), "savoie", "savoie/chambery". */
  path: string;
  /** Racine de l'URL : /agence pour le territoire, /secteurs pour les filières. */
  root: "agence" | "secteurs";
  level: LocalPageLevel;
  /** Balise <title> (≤ 60 caractères de préférence). */
  title: string;
  /** Meta description (≤ 155 caractères). */
  metaDescription: string;
  /** H1 de la page. */
  heroTitle: string;
  /** Commune ou territoire principal, pour le balisage et le maillage. */
  locality: string;
  datePublished: string; // ISO YYYY-MM-DD
  dateModified: string; // ISO YYYY-MM-DD
}

/**
 * Vide à dessein : les pages s'ajoutent une par une, au fur et à mesure de
 * leur publication réelle (vague 1 = /agence, /agence/savoie,
 * /agence/savoie/chambery). Ne jamais pré-remplir ce tableau avec des pages
 * non écrites : le test structurel du sitemap échouerait, et surtout une URL
 * déclarée sans contenu est exactement le signal qu'on veut éviter.
 */
export const LOCAL_PAGES: LocalPageEntry[] = [
  {
    path: "",
    root: "agence",
    level: "territoire",
    title: "Agence web à Chambéry (Savoie) · Hagnéré Code",
    metaDescription:
      "Agence web installée à Chambéry : sites, e-commerce, applications métier, référencement et Google Ads. Savoie et Haute-Savoie sur place, France à distance.",
    heroTitle: "Notre agence web à Chambéry : le territoire que nous couvrons",
    locality: "Chambéry",
    datePublished: "2026-07-18",
    dateModified: "2026-07-18",
  },
  {
    path: "savoie",
    root: "agence",
    level: "departement",
    title: "Agence web en Savoie (73) · Hagnéré Code",
    metaDescription:
      "Six territoires, six économies : bassin chambérien, lac du Bourget, Tarentaise, Maurienne, Combe de Savoie. Ce que chacun achète vraiment en numérique.",
    heroTitle: "Développement web en Savoie : six territoires, six économies",
    locality: "Savoie",
    datePublished: "2026-07-18",
    dateModified: "2026-07-18",
  },
  {
    path: "savoie/chambery",
    root: "agence",
    level: "ville",
    title: "Agence web à Chambéry : développement sur mesure · Hagnéré Code",
    metaDescription:
      "Agence installée au 82 impasse de Bellevue : sites, applications métier, référencement, Google Ads. L'économie chambérienne et ses besoins numériques réels.",
    heroTitle: "Agence web à Chambéry : ce que cette ville achète vraiment",
    locality: "Chambéry",
    datePublished: "2026-07-18",
    dateModified: "2026-07-18",
  },
];

export function localPagePath(p: LocalPageEntry): string {
  return p.path ? `/${p.root}/${p.path}` : `/${p.root}`;
}

export function localPageUrl(p: LocalPageEntry): string {
  return `https://hagnere-code.ai${localPagePath(p)}`;
}

export function getLocalPage(root: LocalPageEntry["root"], path: string): LocalPageEntry {
  const found = LOCAL_PAGES.find((e) => e.root === root && e.path === path);
  if (!found) {
    throw new Error(`Page locale inconnue dans src/lib/local-pages.ts : /${root}/${path}`);
  }
  return found;
}
