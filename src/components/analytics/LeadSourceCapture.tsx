"use client";

import { useEffect } from "react";
import { captureLeadSource } from "@/lib/lead-source";

/**
 * Fige la provenance de la session dès le premier écran, quel qu'il soit.
 *
 * Monté sur toutes les routes, comme `LegacyProjectDraftCleanup` : un visiteur
 * entre par un guide ou un livre blanc bien plus souvent que par le tunnel, et
 * c'est cette première page — pas celle du formulaire — qui dit quel contenu
 * amène des clients. Lue depuis le tunnel seul, la provenance vaudrait toujours
 * `/demarrer-un-projet`.
 *
 * `captureLeadSource` est idempotent : seul le premier chargement de la session
 * écrit, et rien ne quitte le navigateur tant qu'aucun brief n'est envoyé.
 */
export function LeadSourceCapture() {
  useEffect(() => {
    captureLeadSource();
  }, []);

  return null;
}
