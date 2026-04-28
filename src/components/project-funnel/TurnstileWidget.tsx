"use client";

import { useEffect, useRef, useState } from "react";

// Public site key — exposable côté client. La secret key est server-only
// (utilisée dans /api/estimate via verifyTurnstileToken).
const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "";
const TURNSTILE_SCRIPT_SRC =
  "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

interface TurnstileApi {
  render: (
    container: HTMLElement,
    opts: {
      sitekey: string;
      callback?: (token: string) => void;
      "expired-callback"?: () => void;
      "error-callback"?: () => void;
      appearance?: "always" | "execute" | "interaction-only";
      theme?: "light" | "dark" | "auto";
      size?: "normal" | "compact";
    },
  ) => string;
  reset: (widgetId?: string) => void;
  remove: (widgetId: string) => void;
}

declare global {
  interface Window {
    turnstile?: TurnstileApi;
    onloadTurnstileCallback?: () => void;
  }
}

/**
 * Cloudflare Turnstile (CAPTCHA invisible / interaction-only).
 *
 * Anti-bot avant l'appel /api/estimate (qui coûte 0,30 € par call).
 * Le widget est rendu seulement si NEXT_PUBLIC_TURNSTILE_SITE_KEY est
 * présent — sinon on skip silencieusement (mode dev / setup pas fini).
 *
 * `appearance: "interaction-only"` = invisible 99 % du temps, ne montre
 * un challenge que si Cloudflare a un signal de risque sur la session.
 *
 * Le parent reçoit le token via `onToken` quand validé. Le token expire
 * 5 min, donc on le rafraîchit si l'utilisateur reste longtemps sur la
 * page récap (geste rare en pratique).
 */
export function TurnstileWidget({
  onToken,
  onExpire,
}: {
  onToken: (token: string) => void;
  onExpire?: () => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  // 1. Charge le script Turnstile une seule fois (dédupliqué si déjà DOM).
  // Le setState ici synchronise React avec le namespace global Cloudflare
  // (window.turnstile) injecté par un script externe — c'est exactement
  // le pattern de "synchronisation avec un système extérieur" que la
  // règle react-hooks/set-state-in-effect autorise. On le désactive
  // localement pour le polling (chargement asynchrone du script tiers).
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    if (!SITE_KEY) return;
    if (typeof window === "undefined") return;
    if (window.turnstile) {
      setScriptLoaded(true);
      return;
    }
    if (document.querySelector(`script[src*="turnstile/v0/api.js"]`)) {
      // Script déjà en cours de chargement — attendre window.turnstile.
      const interval = setInterval(() => {
        if (window.turnstile) {
          setScriptLoaded(true);
          clearInterval(interval);
        }
      }, 100);
      return () => clearInterval(interval);
    }
    const script = document.createElement("script");
    script.src = TURNSTILE_SCRIPT_SRC;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      // Petit délai pour laisser Turnstile initialiser le namespace global.
      const tick = () => {
        if (window.turnstile) setScriptLoaded(true);
        else setTimeout(tick, 50);
      };
      tick();
    };
    document.head.appendChild(script);
    // Pas de cleanup : on garde le script chargé pour les re-mounts.
  }, []);
  /* eslint-enable react-hooks/set-state-in-effect */

  // 2. Render le widget une fois le script prêt.
  useEffect(() => {
    if (!SITE_KEY) return;
    if (!scriptLoaded) return;
    if (!containerRef.current) return;
    if (widgetIdRef.current) return; // déjà rendu

    const id = window.turnstile!.render(containerRef.current, {
      sitekey: SITE_KEY,
      appearance: "interaction-only",
      theme: "light",
      size: "normal",
      callback: (token) => onToken(token),
      "expired-callback": () => {
        if (onExpire) onExpire();
      },
      "error-callback": () => {
        // Log silencieux — Cloudflare retry automatiquement
      },
    });
    widgetIdRef.current = id;

    return () => {
      if (widgetIdRef.current && window.turnstile) {
        try {
          window.turnstile.remove(widgetIdRef.current);
        } catch {
          /* widget déjà nettoyé */
        }
        widgetIdRef.current = null;
      }
    };
  }, [scriptLoaded, onToken, onExpire]);

  if (!SITE_KEY) return null;

  return (
    <div className="pf-turnstile" aria-label="Vérification anti-bot Cloudflare">
      <div ref={containerRef} />
    </div>
  );
}

export const TURNSTILE_ENABLED = Boolean(SITE_KEY);
