"use client";

import { useEffect } from "react";
import { trackLeadConversion } from "@/lib/lead-conversion";

/**
 * Émet l'événement de conversion à l'affichage de la page /merci.
 * La page elle-même sert d'URL stable pour les pixels basés sur la vue
 * de page ; cet événement couvre la mesure first-party et Google Ads.
 */
export function ConversionTracker() {
  useEffect(() => {
    // Un seul événement par session — un refresh de /merci ne doit pas
    // compter deux conversions.
    trackLeadConversion("project_funnel", "pf:lead_confirmed", {
      dedupeKey: "pf:converted",
    });
  }, []);

  return null;
}
