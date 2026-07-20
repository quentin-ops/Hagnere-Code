"use client";

/**
 * Bannière de consentement cookies — implémentation maison.
 *
 * Pourquoi pas vanilla-cookieconsent : la lib v3 a un bug d'init avec
 * Next.js 16 + Turbopack + React StrictMode (DOM jamais créé, error
 * silencieuse dans show()). Plus simple et plus contrôlable de garder
 * notre propre implémentation, surtout vu le besoin minimal :
 *   - Aucun cookie tiers chargé sans action explicite de l'utilisateur
 *   - 2 catégories : strictement nécessaire (toujours OK) + analytics
 *     (désactivé par défaut, prêt pour Plausible/PostHog/GA4 plus tard)
 *
 * Principes d'interface issus des recommandations CNIL :
 *   - "Refuser" aussi visible que "Accepter"
 *   - Pas de pré-coche
 *   - Choix mémorisé 6 mois
 *   - Re-modifiable via le bouton "Gérer mes cookies" du footer
 */

import { useEffect, useRef, useState, useCallback } from "react";
import {
  clearStoredCookieConsent,
  isCookieBannerEnabled,
  readCookieConsent,
  writeCookieConsent,
} from "@/lib/cookie-consent";
import "./cookie-banner.css";

declare global {
  interface Window {
    openCookiePreferences?: () => void;
  }
}

export function CookieBanner() {
  const [open, setOpen] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [analyticsChoice, setAnalyticsChoice] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const openDetails = useCallback(() => {
    previousFocusRef.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    setShowDetail(true);
    setOpen(true);
  }, []);

  // Premier mount : afficher si pas de consent valide
  // (setTimeout : évite un setState synchrone dans l'effet — react-hooks/set-state-in-effect)
  useEffect(() => {
    const id = window.setTimeout(() => {
      if (!isCookieBannerEnabled()) {
        clearStoredCookieConsent();
        return;
      }
      const existing = readCookieConsent();
      if (!existing) {
        setOpen(true);
      } else {
        setAnalyticsChoice(existing.analytics);
      }
    }, 0);
    return () => window.clearTimeout(id);
  }, []);

  // Le panneau détaillé se comporte comme une vraie fenêtre modale : focus
  // initial, boucle au clavier, fermeture par Échap et restitution du focus.
  useEffect(() => {
    if (!open || !showDetail) return;

    const modal = modalRef.current;
    const initialFocus = modal?.querySelector<HTMLElement>(
      "[data-cookie-initial-focus]",
    );
    initialFocus?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        setShowDetail(false);
        return;
      }
      if (event.key !== "Tab" || !modal) return;

      const focusables = Array.from(
        modal.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((element) => !element.hasAttribute("hidden"));
      if (focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      previousFocusRef.current?.focus();
      previousFocusRef.current = null;
    };
  }, [open, showDetail]);

  // Expose API globale pour le bouton du footer
  useEffect(() => {
    if (!isCookieBannerEnabled()) return;
    window.openCookiePreferences = () => {
      const existing = readCookieConsent();
      if (existing) setAnalyticsChoice(existing.analytics);
      openDetails();
    };
    return () => {
      delete window.openCookiePreferences;
    };
  }, [openDetails]);

  const acceptAll = useCallback(() => {
    writeCookieConsent({ necessary: true, analytics: true });
    setOpen(false);
    setShowDetail(false);
  }, []);

  const refuseAll = useCallback(() => {
    writeCookieConsent({ necessary: true, analytics: false });
    setOpen(false);
    setShowDetail(false);
  }, []);

  const savePreferences = useCallback(() => {
    writeCookieConsent({ necessary: true, analytics: analyticsChoice });
    setOpen(false);
    setShowDetail(false);
  }, [analyticsChoice]);

  if (!isCookieBannerEnabled()) return null;
  if (!open) return null;

  if (showDetail) {
    return (
      <div className="hc-cb-backdrop" role="dialog" aria-labelledby="hc-cb-title" aria-modal="true">
        <div className="hc-cb-modal" ref={modalRef}>
          <div className="hc-cb-modal-head">
            <h2 id="hc-cb-title">Préférences cookies</h2>
            <button
              type="button"
              className="hc-cb-close"
              onClick={() => setShowDetail(false)}
              aria-label="Fermer"
              data-cookie-initial-focus
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="hc-cb-modal-body">
            <section className="hc-cb-section">
              <header className="hc-cb-section-head">
                <h3>Strictement nécessaires</h3>
                <span className="hc-cb-pill hc-cb-pill-active">Toujours actif</span>
              </header>
              <p>
                Le site conserve la préférence de thème que vous demandez. Le
                brouillon limité aux informations de projet n&apos;est créé dans
                l&apos;onglet courant que si vous activez le bouton prévu dans le
                formulaire. Les nom, courriel, téléphone, SIREN et coordonnées
                de contact en sont exclus.
              </p>
            </section>

            <section className="hc-cb-section">
              <header className="hc-cb-section-head">
                <h3>Mesure d&apos;audience</h3>
                <label className="hc-cb-toggle">
                  <input
                    type="checkbox"
                    checked={analyticsChoice}
                    onChange={(e) => setAnalyticsChoice(e.target.checked)}
                    aria-label="Autoriser la mesure d’audience facultative"
                  />
                  <span className="hc-cb-toggle-slider" aria-hidden="true" />
                </label>
              </header>
              <p>
                Ce choix autorise, uniquement lorsqu&apos;un collecteur est
                techniquement disponible, l&apos;envoi de quelques actions de
                conversion à une route du même domaine, sans identifiant
                persistant ni adresse IP ajoutée au jeu de mesure. Aucun outil
                d&apos;analytics tiers n&apos;est chargé. Tout futur outil soumis au
                consentement devra respecter le choix exprimé ici.
              </p>
            </section>

            <section className="hc-cb-section">
              <h3>Vos droits</h3>
              <p>
                Vous pouvez modifier vos préférences à tout moment via le lien
                « Gérer mes cookies » disponible dans le pied de page du site.
                Pour toute demande relative à vos droits RGPD (accès,
                rectification, effacement) :{" "}
                <a href="mailto:quentin@hagnere-patrimoine.fr">
                  quentin@hagnere-patrimoine.fr
                </a>
                .
              </p>
            </section>
          </div>

          <div className="hc-cb-modal-actions">
            <button type="button" className="hc-cb-btn hc-cb-btn-choice" onClick={refuseAll}>
              Refuser tout
            </button>
            <button type="button" className="hc-cb-btn hc-cb-btn-ghost" onClick={savePreferences}>
              Enregistrer mes choix
            </button>
            <button type="button" className="hc-cb-btn hc-cb-btn-choice" onClick={acceptAll}>
              Tout accepter
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Banner compact en bas à droite
  return (
    <div className="hc-cb-toast" role="dialog" aria-labelledby="hc-cb-toast-title" aria-describedby="hc-cb-toast-desc">
      <div className="hc-cb-toast-eyebrow">Vie privée</div>
      <h2 id="hc-cb-toast-title" className="hc-cb-toast-title">
        Respect de votre vie privée
      </h2>
      <p id="hc-cb-toast-desc" className="hc-cb-toast-desc">
        Le thème peut être conservé et un brouillon sans coordonnées ne l&apos;est
        que si vous le demandez dans le formulaire. « Accepter » autorise aussi une mesure
        d&apos;audience facultative, sans identifiant publicitaire ; « Refuser » la
        laisse désactivée. Détails dans notre{" "}
        <a href="/legal/cookies">politique cookies</a>.
      </p>
      <div className="hc-cb-toast-actions">
        <button type="button" className="hc-cb-btn hc-cb-btn-ghost" onClick={openDetails}>
          Voir le détail
        </button>
        <button type="button" className="hc-cb-btn hc-cb-btn-choice" onClick={refuseAll}>
          Refuser
        </button>
        <button type="button" className="hc-cb-btn hc-cb-btn-choice" onClick={acceptAll}>
          Accepter
        </button>
      </div>
    </div>
  );
}
