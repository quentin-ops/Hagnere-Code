"use client";

import { useEffect } from "react";
import { purgeLegacyProjectDrafts } from "@/lib/project-draft";

/**
 * Nettoyage transitoire global : d'anciennes versions du formulaire pouvaient
 * conserver des coordonnées en localStorage. Le composant reste monté sur toutes
 * les routes afin que la purge ne dépende pas d'un retour sur le formulaire.
 */
export function LegacyProjectDraftCleanup() {
  useEffect(() => {
    try {
      purgeLegacyProjectDrafts(window.localStorage);
    } catch {
      /* Stockage indisponible : aucune donnée ne peut être lue ni supprimée. */
    }
  }, []);

  return null;
}
