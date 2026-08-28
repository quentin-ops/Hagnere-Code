"use client";

import { useEffect, useRef, useState } from "react";
import { CALENDLY_URL } from "@/lib/calendly";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY_NATIONAL,
  CONTACT_PHONE_E164,
} from "@/lib/contact-details";
import { listenToCalendlyWidget } from "./calendly-tracking";

const CALENDLY_SCRIPT_SRC = "https://assets.calendly.com/assets/external/widget.js";
const CALENDLY_LOAD_TIMEOUT_MS = 12_000;

type CalendlyApi = {
  initInlineWidget: (options: {
    url: string;
    parentElement: HTMLElement;
  }) => void;
};

declare global {
  interface Window {
    Calendly?: CalendlyApi;
  }
}

/**
 * Le widget Calendly est un service tiers susceptible de déposer des cookies.
 * Aucun script, iframe ou appel réseau Calendly n'est déclenché avant le clic
 * explicite sur le bouton d'autorisation. Le choix n'est pas mémorisé : un
 * rechargement remet donc le widget dans son état bloqué.
 */
export function CalendlyEmbed({ height = 700 }: { height?: number }) {
  const [authorised, setAuthorised] = useState(false);
  const [loadFailed, setLoadFailed] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  /**
   * Le widget intégré publie sa progression par `postMessage`
   * (`calendly.event_type_viewed`, `calendly.event_scheduled`…). Sans cette
   * écoute, une prise de rendez-vous — la conversion la plus qualifiée du
   * site — ne laissait aucune trace mesurable. L'écoute démarre avec
   * l'autorisation explicite du visiteur, en même temps que le widget.
   */
  useEffect(() => {
    if (!authorised) return;
    return listenToCalendlyWidget();
  }, [authorised]);

  useEffect(() => {
    if (!authorised) return;

    let active = true;
    const markFailed = () => {
      if (active) setLoadFailed(true);
    };

    const initialise = () => {
      const parentElement = containerRef.current;
      if (!parentElement || parentElement.querySelector("iframe")) return;
      if (!window.Calendly) {
        markFailed();
        return;
      }
      try {
        window.Calendly.initInlineWidget({ url: CALENDLY_URL, parentElement });
      } catch {
        markFailed();
      }
    };

    // `load` ne garantit ni la présence de l'API globale ni la création de
    // l'iframe. Sans garde temporelle, un bloqueur de contenus peut laisser un
    // grand espace vide indéfiniment.
    const timeoutId = window.setTimeout(() => {
      if (!containerRef.current?.querySelector("iframe")) markFailed();
    }, CALENDLY_LOAD_TIMEOUT_MS);

    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${CALENDLY_SCRIPT_SRC}"]`,
    );

    if (existing) {
      if (window.Calendly) initialise();
      else existing.addEventListener("load", initialise, { once: true });
      existing.addEventListener("error", markFailed, { once: true });
      return () => {
        active = false;
        window.clearTimeout(timeoutId);
        existing.removeEventListener("load", initialise);
        existing.removeEventListener("error", markFailed);
      };
    }

    const script = document.createElement("script");
    script.src = CALENDLY_SCRIPT_SRC;
    script.async = true;
    script.addEventListener("load", initialise, { once: true });
    script.addEventListener("error", markFailed, { once: true });
    document.body.appendChild(script);

    return () => {
      active = false;
      window.clearTimeout(timeoutId);
      script.removeEventListener("load", initialise);
      script.removeEventListener("error", markFailed);
    };
  }, [authorised]);

  if (!authorised) {
    return (
      <div className="calendly-consent" style={{ minHeight: Math.min(height, 520) }}>
        <div className="calendly-consent-card">
          <span className="calendly-consent-kicker">Service externe</span>
          <h3>Afficher le calendrier Calendly ?</h3>
          <p>
            Calendly ne sera contacté qu&apos;après votre accord. Son affichage peut
            entraîner le dépôt de cookies et le transfert de données techniques
            vers ce prestataire.
          </p>
          <div className="calendly-consent-actions">
            <button type="button" onClick={() => setAuthorised(true)}>
              Autoriser et afficher le calendrier
            </button>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
              Ouvrir Calendly dans un nouvel onglet
            </a>
          </div>
          <p className="calendly-consent-alt">
            Sans Calendly : <a href={`mailto:${CONTACT_EMAIL}`}>envoyer un e-mail</a>
            {" "}ou appeler le{" "}
            <a href={`tel:${CONTACT_PHONE_E164}`}>
              {CONTACT_PHONE_DISPLAY_NATIONAL}
            </a>
            .
          </p>
        </div>
      </div>
    );
  }

  if (loadFailed) {
    return (
      <div className="calendly-consent" style={{ minHeight: Math.min(height, 420) }} role="alert">
        <div className="calendly-consent-card">
          <h3>Le calendrier ne répond pas.</h3>
          <p>Vous pouvez ouvrir directement la page de réservation ou nous écrire.</p>
          <div className="calendly-consent-actions">
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
              Ouvrir Calendly
            </a>
            <a href={`mailto:${CONTACT_EMAIL}`}>Envoyer un e-mail</a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="calendly-inline-widget"
      style={{ minWidth: 0, height }}
      aria-label="Réserver un créneau de découverte avec Hagnéré Code"
    />
  );
}
