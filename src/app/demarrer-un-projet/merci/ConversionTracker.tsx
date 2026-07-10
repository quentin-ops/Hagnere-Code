"use client";

import { useEffect } from "react";
import { trackFunnelEvent } from "@/lib/funnel-analytics";

/**
 * Émet l'événement de conversion à l'affichage de la page /merci.
 * La page elle-même sert d'URL stable pour les pixels basés sur la vue
 * de page (GA4, Meta, LinkedIn) ; cet événement couvre le tracking JS.
 */
export function ConversionTracker() {
  useEffect(() => {
    // Un seul événement par session — un refresh de /merci ne doit pas
    // compter deux conversions.
    const key = "pf:converted";
    if (window.sessionStorage.getItem(key)) return;
    window.sessionStorage.setItem(key, "1");
    trackFunnelEvent("pf:lead_confirmed", {});
  }, []);

  return null;
}
