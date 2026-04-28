"use client";

import { useEffect, useRef, useState } from "react";

const CALENDLY_URL =
  "https://calendly.com/hagnere-patrimoine/hagnere-code-entretien-de-decouverte?hide_gdpr_banner=1";

const CALENDLY_SCRIPT_SRC = "https://assets.calendly.com/assets/external/widget.js";

/**
 * Lazy-loaded Calendly inline embed.
 * - Le script Calendly (~1.5 MB) ne charge QUE quand le composant entre
 *   dans le viewport (IntersectionObserver, rootMargin 200px) — la page
 *   du résultat IA reste rapide même si le user ne scroll pas jusqu'au bout.
 * - Charge une seule fois (déduplique si script déjà dans le DOM)
 * - Fallback link "Open in new tab" si script fail
 */
export function CalendlyEmbed({ height = 700 }: { height?: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  // Lazy init avoids a cascading render: if the Calendly script is already
  // in the DOM (user re-opens the result view), we start in "ready" state.
  const [scriptStatus, setScriptStatus] = useState<"idle" | "loading" | "ready" | "error">(() => {
    if (typeof window === "undefined") return "idle";
    return document.querySelector(`script[src="${CALENDLY_SCRIPT_SRC}"]`)
      ? "ready"
      : "idle";
  });
  const [inView, setInView] = useState(false);

  // Observe le placeholder pour démarrer le chargement uniquement quand
  // l'utilisateur s'approche de l'iframe. rootMargin 200px = pré-charge
  // juste avant que ça arrive dans la viewport (transition fluide).
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (scriptStatus !== "idle") return;
    const node = containerRef.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setInView(true);
            obs.disconnect();
            break;
          }
        }
      },
      { rootMargin: "200px 0px" },
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [scriptStatus]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!inView || scriptStatus !== "idle") return;

    // Le setState ici synchronise React avec un système externe (DOM
    // script tag) — c'est le pattern canonical accepté par useEffect.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setScriptStatus("loading");
    const script = document.createElement("script");
    script.src = CALENDLY_SCRIPT_SRC;
    script.async = true;
    script.onload = () => setScriptStatus("ready");
    script.onerror = () => setScriptStatus("error");
    document.body.appendChild(script);
  }, [inView, scriptStatus]);

  if (scriptStatus === "error") {
    return (
      <div className="cal-fallback">
        <p>Le widget Calendly n&apos;a pas pu se charger.</p>
        <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn btn-accent btn-lg">
          📅 Ouvrir Calendly dans un nouvel onglet
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
          </svg>
        </a>
      </div>
    );
  }

  // Avant chargement : un placeholder visible avec CTA fallback. Donne un
  // signal à l'utilisateur qu'il peut cliquer s'il préfère ouvrir Calendly
  // dans un onglet sans attendre le widget.
  if (scriptStatus === "idle" || scriptStatus === "loading") {
    return (
      <div
        ref={containerRef}
        className="cal-placeholder"
        style={{ minHeight: `${height}px` }}
        aria-label="Calendly se charge…"
      >
        <div className="cal-placeholder-inner">
          {scriptStatus === "loading" ? (
            <span className="cal-placeholder-loading">Chargement du calendrier…</span>
          ) : (
            <span className="cal-placeholder-hint">Le calendrier va se charger en arrivant ici.</span>
          )}
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="cal-placeholder-link">
            Ouvrir Calendly directement →
          </a>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="calendly-inline-widget"
      data-url={CALENDLY_URL}
      style={{ minWidth: "320px", height: `${height}px` }}
      aria-label="Réserve un créneau Discovery avec Hagnéré Code"
    />
  );
}
