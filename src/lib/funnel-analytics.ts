/**
 * Funnel analytics — vendor-agnostic event hub.
 *
 * This module does not install a collector. It forwards events only to an
 * additional analytics script that the site has already loaded and configured:
 *   - Plausible : window.plausible(name, { props })
 *   - PostHog   : window.posthog.capture(name, props)
 *   - GA4       : window.gtag('event', name, props)
 *   - dataLayer : window.dataLayer.push({ event: name, ...props })
 *
 * Keeping collection separate from event declaration avoids silently changing
 * the site's privacy posture when a new funnel action is instrumented.
 */

type EventProps = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    plausible?: (name: string, opts?: { props?: EventProps }) => void;
    posthog?: { capture: (name: string, props?: EventProps) => void };
    gtag?: (cmd: "event", name: string, params?: EventProps) => void;
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function trackFunnelEvent(name: string, props: EventProps = {}): void {
  if (typeof window === "undefined") return;

  // Strip undefined values — most analytics dislike them.
  const cleanProps: EventProps = {};
  for (const [k, v] of Object.entries(props)) {
    if (v !== undefined) cleanProps[k] = v;
  }

  let dispatched = false;

  try {
    if (typeof window.plausible === "function") {
      window.plausible(name, { props: cleanProps });
      dispatched = true;
    }
  } catch {
    /* swallow vendor-side errors — never break the funnel for analytics */
  }

  try {
    if (window.posthog?.capture) {
      window.posthog.capture(name, cleanProps);
      dispatched = true;
    }
  } catch {
    /* ignore */
  }

  try {
    if (typeof window.gtag === "function") {
      window.gtag("event", name, cleanProps);
      dispatched = true;
    }
  } catch {
    /* ignore */
  }

  try {
    if (typeof window.gtag !== "function" && Array.isArray(window.dataLayer)) {
      window.dataLayer.push({ event: name, ...cleanProps });
      dispatched = true;
    }
  } catch {
    /* ignore */
  }

  if (!dispatched && process.env.NODE_ENV !== "production") {
    console.debug(`[analytics] ${name}`, cleanProps);
  }
}
