/**
 * Point d'entrée unique d'une conversion « lead ».
 *
 * Une demande peut arriver par deux chemins : le tunnel /demarrer-un-projet
 * (qui se termine sur /merci) et le formulaire de contact rendu par le footer
 * sur l'accueil, le hub /services, les 11 pages service et /tarifs.
 *
 * L'audit de 2026-08 avait relevé que seul le premier chemin était mesuré :
 * toutes les conversions issues des pages service — les cibles naturelles des
 * annonces — restaient invisibles. Les deux chemins passent désormais ici.
 */

import { isAnalyticsAllowed } from "@/lib/cookie-consent";
import { trackFunnelEvent, type FunnelEventName } from "@/lib/funnel-analytics";
import { leadConversionTarget } from "@/lib/google-measurement";

export type LeadSource = "project_funnel" | "contact_form";

type LeadConversionOptions = {
  /** Chemin de la page d'où part la demande, sans query string. */
  page?: string;
  /** Identifiant de déduplication. Sans lui, chaque appel compte. */
  dedupeKey?: string;
  /**
   * Portée de la déduplication :
   *
   * - `"session"` (défaut) : `sessionStorage`, donc conservée à travers un
   *   rechargement de l'onglet. Toute clé de cette portée est une écriture dans
   *   le navigateur : elle DOIT figurer au tableau « Stockages utilisés par le
   *   site » de /legal/cookies, qui s'annonce exhaustif.
   * - `"document"` : mémoire du document courant. Survit aux navigations
   *   internes (le module reste chargé), disparaît au rechargement. Aucune
   *   écriture navigateur, donc rien à inventorier — même compromis que la
   *   déduplication de `funnel-analytics`.
   */
  dedupeScope?: "session" | "document";
};

/**
 * Conversions déjà comptées dans le document courant. Aucune donnée : ni
 * identifiant visiteur, ni horodatage, ni écriture dans le navigateur.
 */
const convertedInDocument = new Set<string>();

/**
 * Vrai si la conversion a déjà été comptée. Marque la clé au passage : un
 * appel refusé plus loin (pas de consentement) n'atteint jamais cette fonction.
 */
function alreadyConverted(
  dedupeKey: string,
  scope: "session" | "document",
): boolean {
  if (scope === "document") {
    if (convertedInDocument.has(dedupeKey)) return true;
    convertedInDocument.add(dedupeKey);
    return false;
  }
  try {
    if (window.sessionStorage.getItem(dedupeKey)) return true;
    window.sessionStorage.setItem(dedupeKey, "1");
  } catch {
    /* Stockage indisponible : on mesure quand même, quitte à doublonner. */
  }
  return false;
}

/** Envoie la conversion à Google Ads si un identifiant et un libellé existent. */
function reportToGoogleAds(source: LeadSource): void {
  const target = leadConversionTarget();
  if (!target) return;
  const gtag = window.gtag;
  if (typeof gtag !== "function") return;
  gtag("event", "conversion", {
    send_to: target,
    event_source: source,
  });
}

/**
 * Enregistre une conversion côté mesure first-party ET côté Google Ads.
 * Ne fait rien sans consentement analytics.
 */
export function trackLeadConversion(
  source: LeadSource,
  eventName: FunnelEventName,
  options: LeadConversionOptions = {},
): void {
  if (typeof window === "undefined") return;
  if (!isAnalyticsAllowed()) return;

  const { dedupeKey, dedupeScope = "session", page } = options;
  if (dedupeKey && alreadyConverted(dedupeKey, dedupeScope)) return;

  trackFunnelEvent(eventName, {
    source,
    page: page ?? window.location.pathname,
  });
  reportToGoogleAds(source);
}
