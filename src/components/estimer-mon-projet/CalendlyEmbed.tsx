"use client";

import { useEffect, useRef, useState } from "react";

const CALENDLY_URL =
  "https://calendly.com/hagnere-patrimoine/hagnere-code-entretien-de-decouverte?hide_gdpr_banner=1";

const CALENDLY_SCRIPT_SRC = "https://assets.calendly.com/assets/external/widget.js";

/**
 * Lazy-loaded Calendly inline embed.
 * - Loads the Calendly script once (deduped if already in the DOM)
 * - Renders the official `.calendly-inline-widget` container
 * - Falls back to a "Open in new tab" link if the script fails to load
 */
export function CalendlyEmbed({ height = 700 }: { height?: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  // Lazy init avoids a cascading render: if the Calendly script is already
  // in the DOM (user re-opens the result view), we start in "ready" state.
  const [scriptStatus, setScriptStatus] = useState<"loading" | "ready" | "error">(() => {
    if (typeof window === "undefined") return "loading";
    return document.querySelector(`script[src="${CALENDLY_SCRIPT_SRC}"]`)
      ? "ready"
      : "loading";
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (scriptStatus !== "loading") return;

    const script = document.createElement("script");
    script.src = CALENDLY_SCRIPT_SRC;
    script.async = true;
    script.onload = () => setScriptStatus("ready");
    script.onerror = () => setScriptStatus("error");
    document.body.appendChild(script);
    // Don't remove on unmount: if user re-opens the result, the cached script is reused
  }, [scriptStatus]);

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
