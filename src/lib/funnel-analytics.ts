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
  // Les deux étapes qui PRÉCÈDENT la confirmation. `trackCalendlyEvent` les
  // diffusait déjà, mais elles n'étaient ni dans cette union fermée ni dans le
  // pont de GoogleMeasurement : la réservation n'avait qu'un numérateur, sans
  // le clic sortant ni l'entrée dans le widget qui permettent de savoir où on
  // perd les gens. Aucun nouvel émetteur n'est créé ici.
  "pf:calendly_booking_started",
  "pf:calendly_outbound_click",
  "pf:funnel_open",
  "pf:landing_cta_click",
  "pf:lead_confirmed",
  "pf:siren_lookup_fail",
  "pf:siren_lookup_success",
  "pf:step_complete",
  "pf:step_skip",
  // Entrée dans une étape. Sans lui, la chaîne ne se reconstitue qu'en cousant
  // step_complete et step_skip : une étape ATTEINTE puis abandonnée sans clic
  // n'émettait rien du tout, et c'est précisément l'abandon qu'on cherche à
  // mesurer. Un « % de visiteurs qui atteignent l'étape N » était incalculable.
  "pf:step_view",
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
  // Même raison pour l'entrée d'étape : le bouton « Retour » du tunnel ferait
  // recompter chaque passage, et le dénominateur du décrochage gonflerait avec
  // les hésitations au lieu de compter des visiteurs.
  "pf:step_view": "step",
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
 * Collecteur actif par défaut, désactivable explicitement. Ce drapeau public
 * ne contient aucun secret.
 *
 * Les trois conditions qui justifiaient l'attente sont remplies : la table
 * `funnel_analytics_event` est migrée et reçoit déjà des écritures, la
 * bannière de consentement est en place (`isCookieBannerEnabled`), et la
 * collecte reste subordonnée à un choix analytics positif — `trackFunnelEvent`
 * ne part jamais sans `isAnalyticsAllowed()`.
 *
 * Comme pour la bannière, le sens du défaut est le sujet : un drapeau à poser
 * s'oublie en silence, et son oubli coûtait ici la totalité de la mesure du
 * tunnel. Poser `NEXT_PUBLIC_FUNNEL_ANALYTICS_ENABLED=0` suffit à revenir en
 * arrière.
 */
export function isFunnelAnalyticsCollectionEnabled(): boolean {
  const value = process.env.NEXT_PUBLIC_FUNNEL_ANALYTICS_ENABLED?.trim().toLowerCase();
  return value !== "0" && value !== "false";
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
