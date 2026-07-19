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
 * Conforme CNIL :
 *   - "Refuser" aussi visible que "Accepter"
 *   - Pas de pré-coche
 *   - Choix mémorisé 13 mois
 *   - Re-modifiable via le bouton "Gérer mes cookies" du footer
 */

import { useEffect, useState, useCallback } from "react";
import "./cookie-banner.css";

const COOKIE_BANNER_ENABLED =
  process.env.NEXT_PUBLIC_COOKIE_BANNER === "1" ||
  process.env.NEXT_PUBLIC_COOKIE_BANNER === "true";

const STORAGE_KEY = "hc_consent_v1";
const EXPIRY_DAYS = 395; // 13 mois (recommandation CNIL)

type Consent = {
  necessary: true; // toujours
  analytics: boolean;
  ts: number; // timestamp ms
};

declare global {
  interface Window {
    openCookiePreferences?: () => void;
  }
}

function readConsent(): Consent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Consent;
    // Expiré ?
    const ageMs = Date.now() - (parsed.ts || 0);
    if (ageMs > EXPIRY_DAYS * 86400 * 1000) return null;
    return parsed;
  } catch {
    return null;
  }
}

function writeConsent(c: Omit<Consent, "ts">): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...c, ts: Date.now() }));
  } catch {
    /* localStorage unavailable */
  }
}

export function CookieBanner() {
  const [open, setOpen] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [analyticsChoice, setAnalyticsChoice] = useState(false);

  // Premier mount : afficher si pas de consent valide
  // (setTimeout : évite un setState synchrone dans l'effet — react-hooks/set-state-in-effect)
  useEffect(() => {
    if (!COOKIE_BANNER_ENABLED) return;
    const id = window.setTimeout(() => {
      const existing = readConsent();
      if (!existing) {
        setOpen(true);
      } else {
        setAnalyticsChoice(existing.analytics);
      }
    }, 0);
    return () => window.clearTimeout(id);
  }, []);

  // Expose API globale pour le bouton du footer
  useEffect(() => {
    if (!COOKIE_BANNER_ENABLED) return;
    window.openCookiePreferences = () => {
      const existing = readConsent();
      if (existing) setAnalyticsChoice(existing.analytics);
      setShowDetail(true);
      setOpen(true);
    };
    return () => {
      delete window.openCookiePreferences;
    };
  }, []);

  const acceptAll = useCallback(() => {
    writeConsent({ necessary: true, analytics: true });
    setOpen(false);
    setShowDetail(false);
  }, []);

  const refuseAll = useCallback(() => {
    writeConsent({ necessary: true, analytics: false });
    setOpen(false);
    setShowDetail(false);
  }, []);

  const savePreferences = useCallback(() => {
    writeConsent({ necessary: true, analytics: analyticsChoice });
    setOpen(false);
    setShowDetail(false);
  }, [analyticsChoice]);

  if (!COOKIE_BANNER_ENABLED) return null;
  if (!open) return null;

  if (showDetail) {
    return (
      <div className="hc-cb-backdrop" role="dialog" aria-labelledby="hc-cb-title" aria-modal="true">
        <div className="hc-cb-modal">
          <div className="hc-cb-modal-head">
            <h2 id="hc-cb-title">Préférences cookies</h2>
            <button
              type="button"
              className="hc-cb-close"
              onClick={() => setShowDetail(false)}
              aria-label="Fermer"
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
                Stockage local utilisé pour le bon fonctionnement du site : votre
                préférence de thème (clair ou sombre) et vos brouillons de
                formulaire. Ces éléments ne peuvent pas être désactivés car ils
                sont indispensables à l&apos;expérience.
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
                  />
                  <span className="hc-cb-toggle-slider" aria-hidden="true" />
                </label>
              </header>
              <p>
                Le site mesure quelques actions de conversion via une route du
                même domaine, sans identifiant persistant ni adresse IP stockée.
                Aucun outil d&apos;analytics tiers n&apos;est chargé. Tout futur outil
                soumis au consentement respectera le choix exprimé ici.
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
            <button type="button" className="hc-cb-btn hc-cb-btn-ghost" onClick={refuseAll}>
              Refuser tout
            </button>
            <button type="button" className="hc-cb-btn hc-cb-btn-ghost" onClick={savePreferences}>
              Enregistrer mes choix
            </button>
            <button type="button" className="hc-cb-btn hc-cb-btn-primary" onClick={acceptAll}>
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
        Nous conservons en local sur votre appareil votre préférence de thème
        et vos brouillons de formulaire pour améliorer votre navigation.
        Détails dans notre <a href="/legal/cookies">politique cookies</a>.
      </p>
      <div className="hc-cb-toast-actions">
        <button type="button" className="hc-cb-btn hc-cb-btn-ghost" onClick={() => setShowDetail(true)}>
          Voir le détail
        </button>
        <button type="button" className="hc-cb-btn hc-cb-btn-ghost" onClick={refuseAll}>
          Refuser
        </button>
        <button type="button" className="hc-cb-btn hc-cb-btn-primary" onClick={acceptAll}>
          Accepter
        </button>
      </div>
    </div>
  );
}
