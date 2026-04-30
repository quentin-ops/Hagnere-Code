"use client";

import { useEffect } from "react";

const CALENDLY_URL =
  "https://calendly.com/hagnere-patrimoine/hagnere-code-entretien-de-decouverte?hide_gdpr_banner=1";

const CALENDLY_SCRIPT_SRC = "https://assets.calendly.com/assets/external/widget.js";

/**
 * Calendly inline embed — snippet officiel.
 * Le div .calendly-inline-widget existe dans le DOM AVANT que le script
 * ne soit chargé (useEffect run après mount), donc widget.js trouve le
 * div au moment du parse et l'auto-initialise.
 */
export function CalendlyEmbed({ height = 700 }: { height?: number }) {
  useEffect(() => {
    if (document.querySelector(`script[src="${CALENDLY_SCRIPT_SRC}"]`)) return;
    const script = document.createElement("script");
    script.src = CALENDLY_SCRIPT_SRC;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url={CALENDLY_URL}
      style={{ minWidth: 320, height }}
      aria-label="Réserver un créneau Discovery avec Hagnéré Code"
    />
  );
}
