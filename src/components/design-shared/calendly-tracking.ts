"use client";

import { isAnalyticsAllowed } from "@/lib/cookie-consent";
import { CALENDLY_URL } from "@/lib/calendly";

/**
 * Mesure des rendez-vous Calendly.
 *
 * Le widget est le premier canal de conversion mis en avant sur le site (carte
 * « LE PLUS RAPIDE » du bloc contact, CTA du méga-menu, page /rendez-vous),
 * et c'était le seul qui ne laissait aucune trace : ni la prise de rendez-vous
 * dans le widget intégré, ni les liens sortants ouverts dans un nouvel onglet.
 * Une campagne Google Ads n'avait donc aucun moyen de rattacher un clic payant
 * à un rendez-vous réservé.
 *
 * Deux règles tenues ici :
 *
 *  - rien ne part sans consentement analytics — la fonction sort avant tout
 *    appel si `isAnalyticsAllowed()` est faux, comme le reste de la mesure ;
 *  - on n'invente aucun libellé de conversion Google Ads. Les événements sont
 *    envoyés en événements gtag nommés ; le rattachement à une action de
 *    conversion se fait côté Google, avec l'identifiant réellement créé.
 */

/** Événements émis. Noms stables : ils servent de clé côté Google. */
export const CALENDLY_EVENTS = {
  /** Un rendez-vous a été confirmé dans le widget intégré. */
  bookingConfirmed: "calendly_booking_confirmed",
  /** Le visiteur a atteint l'étape de saisie du widget intégré. */
  bookingStarted: "calendly_booking_started",
  /** Un lien Calendly sortant a été activé (nouvel onglet). */
  outboundClick: "calendly_outbound_click",
} as const;

export type CalendlyEventName =
  (typeof CALENDLY_EVENTS)[keyof typeof CALENDLY_EVENTS];

/** Événement `CustomEvent` émis sur `window`, pour un branchement local. */
export const CALENDLY_TRACKING_EVENT = "hc:calendly";

type EventProps = Record<string, string | number | boolean>;

/**
 * Envoie l'événement à gtag s'il est présent, et le rediffuse toujours en
 * `CustomEvent` — la page reste observable même sans tag Google configuré.
 */
export function trackCalendlyEvent(
  name: CalendlyEventName,
  props: EventProps = {},
): void {
  if (typeof window === "undefined") return;
  if (!isAnalyticsAllowed()) return;

  const payload = { ...props, page: window.location.pathname };
  window.dispatchEvent(
    new CustomEvent(CALENDLY_TRACKING_EVENT, { detail: { name, ...payload } }),
  );

  const gtag = window.gtag;
  if (typeof gtag !== "function") return;
  gtag("event", name, payload);
}

/** Vrai pour une origine `postMessage` réellement servie par Calendly. */
export function isCalendlyOrigin(origin: string): boolean {
  try {
    const host = new URL(origin).hostname.toLowerCase();
    return host === "calendly.com" || host.endsWith(".calendly.com");
  } catch {
    return false;
  }
}

/**
 * Nom d'événement Calendly porté par un message du widget, ou null.
 * Le widget publie `{ event: "calendly.event_scheduled", payload: {...} }`.
 */
export function calendlyMessageEvent(data: unknown): string | null {
  if (!data || typeof data !== "object") return null;
  const event = (data as { event?: unknown }).event;
  if (typeof event !== "string") return null;
  return event.startsWith("calendly.") ? event : null;
}

/**
 * Installe l'écoute des messages du widget intégré. Renvoie la fonction de
 * retrait, à appeler au démontage.
 */
export function listenToCalendlyWidget(): () => void {
  if (typeof window === "undefined") return () => {};

  const onMessage = (event: MessageEvent) => {
    if (!isCalendlyOrigin(event.origin)) return;
    const name = calendlyMessageEvent(event.data);
    if (!name) return;

    if (name === "calendly.event_scheduled") {
      trackCalendlyEvent(CALENDLY_EVENTS.bookingConfirmed, {
        widget: "inline",
      });
      return;
    }
    if (name === "calendly.event_type_viewed") {
      trackCalendlyEvent(CALENDLY_EVENTS.bookingStarted, { widget: "inline" });
    }
  };

  window.addEventListener("message", onMessage);
  return () => window.removeEventListener("message", onMessage);
}

/** Vrai si l'URL pointe vers Calendly (lien sortant à tracer). */
export function isCalendlyHref(href: string): boolean {
  try {
    const host = new URL(href, window.location.origin).hostname.toLowerCase();
    return host === "calendly.com" || host.endsWith(".calendly.com");
  } catch {
    return false;
  }
}

/**
 * Installe un écouteur délégué sur le document : tout lien Calendly sortant
 * (pied de page, méga-menu, corps de page servi en HTML) laisse une trace,
 * sans avoir à modifier chaque occurrence. Renvoie la fonction de retrait.
 */
export function listenToCalendlyOutboundLinks(): () => void {
  if (typeof document === "undefined") return () => {};

  const onClick = (event: MouseEvent) => {
    const target = event.target;
    if (!(target instanceof Element)) return;
    const link = target.closest("a");
    if (!link) return;
    const href = link.getAttribute("href");
    if (!href || !isCalendlyHref(href)) return;

    trackCalendlyEvent(CALENDLY_EVENTS.outboundClick, {
      // Distingue le lien canonique des éventuelles variantes de créneau.
      canonical: href.startsWith(CALENDLY_URL),
      new_tab: link.getAttribute("target") === "_blank",
    });
  };

  // Capture : un `stopPropagation` d'un gestionnaire intermédiaire ne doit pas
  // faire disparaître la mesure.
  document.addEventListener("click", onClick, true);
  return () => document.removeEventListener("click", onClick, true);
}
