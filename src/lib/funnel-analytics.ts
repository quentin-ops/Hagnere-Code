/**
 * Funnel analytics — vendor-agnostic event hub.
 *
 * Forwards events to whatever script the page already has loaded:
 *   - Plausible : window.plausible(name, { props })
 *   - PostHog   : window.posthog.capture(name, props)
 *   - GA4       : window.gtag('event', name, props)
 *   - dataLayer : window.dataLayer.push({ event: name, ...props })
 *
 * If none are present (current state of the site), events go to
 * console.debug — so we keep a trail in dev and only need to add the
 * vendor script tag later to start collecting.
 *
 * Why not pick one vendor now: the team hasn't chosen yet (PostHog vs
 * Plausible). This indirection means changing vendor later doesn't
 * require touching every call site.
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
    if (Array.isArray(window.dataLayer)) {
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
