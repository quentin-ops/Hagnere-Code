/**
 * Provenance d'un lead — capturée à l'ATTERRISSAGE, lue à la soumission.
 *
 * Le problème qu'elle résout : le site publie des dizaines de guides et des
 * livres blancs qui pointent vers `/demarrer-un-projet?source=…`, et rien ne
 * lisait ce paramètre. Un brief arrivait donc sans qu'on puisse savoir quelle
 * page l'avait produit — impossible d'arbitrer où porter l'effort éditorial.
 *
 * Pourquoi à l'atterrissage et pas au moment du formulaire : un visiteur entre
 * le plus souvent par un guide, lit, puis ouvre le tunnel. Lu depuis le tunnel,
 * `location.pathname` vaudrait toujours `/demarrer-un-projet` et `referrer`
 * l'URL du guide — on perdrait la vraie porte d'entrée et la vraie source
 * externe. La valeur est donc figée au premier chargement de la session, puis
 * transportée telle quelle jusqu'à l'envoi.
 *
 * Ce qui est volontairement NON capturé, dans la même ligne que l'abandon de
 * `ip` et `user_agent` sur `project_brief` :
 *  - l'URL complète du référent (elle peut porter une requête de recherche ou
 *    un identifiant) — on ne garde que l'hôte ;
 *  - la query string d'atterrissage — on ne garde que les paramètres de
 *    campagne connus ;
 *  - toute forme d'identifiant visiteur, de cookie ou d'empreinte.
 *
 * Rien ne quitte le navigateur tant que la personne n'envoie pas son brief.
 */

const STORAGE_KEY = "pf:src:v1";

/** Paramètres de campagne retenus. `source` est celui des livres blancs. */
const TRACKED_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "source",
  "gclid",
] as const;

export type LeadSource = {
  /** Chemin d'atterrissage, sans query string. */
  landingPage: string;
  /** Hôte du référent externe, vide pour une visite directe ou interne. */
  referrerHost: string;
  /** Paramètres de campagne sérialisés `clé=valeur`, séparés par `&`. */
  utm: string;
};

const EMPTY: LeadSource = { landingPage: "", referrerHost: "", utm: "" };

/** Borne la taille de chaque valeur : ces colonnes ne sont pas un journal. */
function clamp(value: string, max = 200): string {
  return value.slice(0, max);
}

function readReferrerHost(referrer: string, currentHost: string): string {
  if (!referrer) return "";
  try {
    const host = new URL(referrer).hostname.toLowerCase();
    // Une navigation interne n'est pas une source : elle masquerait la vraie
    // origine derrière le domaine du site lui-même.
    return host === currentHost.toLowerCase() ? "" : clamp(host);
  } catch {
    return "";
  }
}

function readCampaign(search: string): string {
  let params: URLSearchParams;
  try {
    params = new URLSearchParams(search);
  } catch {
    return "";
  }
  const pairs: string[] = [];
  for (const key of TRACKED_PARAMS) {
    const value = params.get(key)?.trim();
    if (value) pairs.push(`${key}=${clamp(value, 120)}`);
  }
  return clamp(pairs.join("&"), 400);
}

/**
 * Fige la provenance de la session si elle ne l'est pas déjà.
 *
 * Idempotent : seul le PREMIER appel de la session écrit. Les suivants — un
 * changement de page, un remontage React en mode strict — laissent la valeur
 * initiale intacte, ce qui est tout l'intérêt.
 */
export function captureLeadSource(): LeadSource {
  if (typeof window === "undefined") return EMPTY;
  try {
    const existing = window.sessionStorage.getItem(STORAGE_KEY);
    if (existing) return JSON.parse(existing) as LeadSource;
  } catch {
    // Stockage indisponible (navigation privée verrouillée, réglage strict) :
    // on continue sans provenance plutôt que de casser le formulaire.
    return EMPTY;
  }

  const source: LeadSource = {
    landingPage: clamp(window.location.pathname),
    referrerHost: readReferrerHost(document.referrer, window.location.hostname),
    utm: readCampaign(window.location.search),
  };

  try {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(source));
  } catch {
    /* La provenance est un confort d'analyse, jamais un prérequis d'envoi. */
  }
  return source;
}

/** Lit la provenance figée, sans jamais l'écrire. */
export function readLeadSource(): LeadSource {
  if (typeof window === "undefined") return EMPTY;
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return EMPTY;
    const parsed = JSON.parse(raw) as Partial<LeadSource>;
    return {
      landingPage: clamp(String(parsed.landingPage ?? "")),
      referrerHost: clamp(String(parsed.referrerHost ?? "")),
      utm: clamp(String(parsed.utm ?? ""), 400),
    };
  } catch {
    return EMPTY;
  }
}
