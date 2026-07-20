/**
 * Événements de conversion first-party. Le navigateur envoie uniquement le
 * nom, le chemin (sans query string) et des propriétés primitives à une route
 * du même domaine. Le Worker les écrit dans Cloudflare Analytics Engine.
 */

import { isAnalyticsAllowed } from "@/lib/cookie-consent";

type EventProps = Record<string, string | number | boolean | undefined>;

export const FUNNEL_EVENT_NAMES = [
  "excel_diagnostic_result_copy",
  "guide_cta_click",
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
 * La production Vercel ne dispose pas du binding Analytics Engine utilisé par
 * le collecteur Cloudflare. La mesure reste donc explicitement inactive tant
 * qu'un collecteur compatible n'a pas été déployé et validé. Ce drapeau ne
 * contient aucun secret : il empêche surtout le navigateur d'émettre des
 * requêtes vouées à échouer.
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
