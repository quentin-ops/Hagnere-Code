/**
 * Événements de conversion first-party. Le navigateur envoie uniquement le
 * nom, le chemin (sans query string) et des propriétés primitives à une route
 * du même domaine. La route les écrit dans la table Neon dédiée, sans IP,
 * user-agent, cookie ni identifiant visiteur.
 */

import { isAnalyticsAllowed } from "@/lib/cookie-consent";

type EventProps = Record<string, string | number | boolean | undefined>;

export const FUNNEL_EVENT_NAMES = [
  "contact_form_open",
  "contact_form_submit_error",
  "contact_form_submit_success",
  "excel_diagnostic_result_copy",
  "guide_cta_click",
  // Confirmation d'un créneau pris depuis l'embarqué Calendly. `FunnelEventName`
  // est une union fermée et la route API n'accepte que les noms de cette liste.
  //
  // Émis par GoogleMeasurement, seul point de montage global de la mesure : il
  // écoute le `CustomEvent` que `trackCalendlyEvent` diffuse déjà sur `window`.
  // Le nom a longtemps été déclaré ici SANS émetteur — l'écouteur du widget,
  // construit en parallèle, n'envoyait qu'un événement gtag nommé
  // (`calendly_booking_confirmed`, sans `send_to`), donc rien dans la table
  // first-party. La prise de rendez-vous, premier canal de conversion mis en
  // avant sur le site, n'y laissait aucune ligne.
  //
  // Ce n'est PAS une conversion Google Ads : seul `trackLeadConversion` envoie
  // un `send_to` avec le libellé de conversion, et aucun libellé n'a été créé
  // pour Calendly. Le rattachement se fait côté Google, à partir de l'événement
  // gtag nommé — ce qui suppose un identifiant GA4 configuré.
  "pf:calendly_booking_confirmed",
  "pf:funnel_open",
  "pf:landing_cta_click",
  "pf:lead_confirmed",
  "pf:siren_lookup_fail",
  "pf:siren_lookup_success",
  "pf:step_complete",
  "pf:step_skip",
  "pf:step_validation_block",
  "pf:submit_error",
  "pf:submit_partial",
  "pf:submit_start",
  "pf:submit_success",
  "pf:voice_record_start",
  "resource_download_click",
  "white_paper_checklist_copy",
  "white_paper_grid_copy",
] as const;

export type FunnelEventName = (typeof FUNNEL_EVENT_NAMES)[number];

/**
 * Événements à n'écrire qu'une fois par valeur de propriété, dans la durée de
 * vie du document courant.
 *
 * `pf:step_complete` est émis à chaque appui sur « Continuer ». Un visiteur qui
 * revient en arrière puis avance à nouveau — le tunnel expose un bouton
 * « Retour » — produisait autant de lignes que d'allers-retours : le taux de
 * complétion par étape, qui pilotera les enchères, était mécaniquement gonflé
 * par les hésitations. La déduplication porte sur le couple (nom, étape) et ne
 * conserve aucune donnée : ni identifiant, ni horodatage, ni écriture dans le
 * navigateur. Elle disparaît avec l'onglet ou le rechargement de la page.
 */
const DEDUPED_BY_PROPERTY: Partial<Record<FunnelEventName, string>> = {
  "pf:step_complete": "step",
};

const emittedOnce = new Set<string>();

/**
 * Vide la mémoire de déduplication. Utilisé par les tests ; en production, le
 * cycle de vie du document suffit.
 */
export function resetFunnelDeduplication(): void {
  emittedOnce.clear();
}

/**
 * La mesure reste explicitement inactive tant que le stockage, la bannière et
 * le consentement n'ont pas été déployés et validés. Ce drapeau public ne
 * contient aucun secret.
 */
export function isFunnelAnalyticsCollectionEnabled(): boolean {
  const value = process.env.NEXT_PUBLIC_FUNNEL_ANALYTICS_ENABLED;
  return value === "1" || value === "true";
}

export function trackFunnelEvent(
  name: FunnelEventName,
  props: EventProps = {},
): void {
  if (typeof window === "undefined") return;
  if (!isFunnelAnalyticsCollectionEnabled()) return;
  if (!isAnalyticsAllowed()) return;

  // Strip undefined values — most analytics dislike them.
  const cleanProps: EventProps = {};
  for (const [k, v] of Object.entries(props)) {
    if (v !== undefined) cleanProps[k] = v;
  }

  const dedupeProperty = DEDUPED_BY_PROPERTY[name];
  if (dedupeProperty) {
    const key = `${name}|${String(cleanProps[dedupeProperty] ?? "")}`;
    if (emittedOnce.has(key)) return;
    emittedOnce.add(key);
  }

  const payload = JSON.stringify({
    name,
    path: window.location?.pathname || "/",
    props: cleanProps,
  });

  let dispatched = false;

  try {
    if (typeof window.navigator?.sendBeacon === "function") {
      dispatched = window.navigator.sendBeacon(
        "/api/funnel-analytics",
        new Blob([payload], { type: "application/json" }),
      );
    }
  } catch {
    /* La mesure ne doit jamais bloquer l'action demandée par le visiteur. */
  }

  if (!dispatched) {
    try {
      if (typeof window.fetch === "function") {
        void window
          .fetch("/api/funnel-analytics", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: payload,
            keepalive: true,
          })
          .catch(() => undefined);
        dispatched = true;
      }
    } catch {
      /* même garantie : une panne de mesure reste invisible pour le funnel */
    }
  }

  if (!dispatched && process.env.NODE_ENV !== "production") {
    console.debug(`[analytics] ${name}`, cleanProps);
  }
}
