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
import { createPortal } from "react-dom";
import {
  clearStoredCookieConsent,
  isCookieBannerEnabled,
  readCookieConsent,
  writeCookieConsent,
} from "@/lib/cookie-consent";
import { CONTACT_EMAIL } from "@/lib/contact-details";
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
  const toastRef = useRef<HTMLDivElement>(null);
  // Vrai uniquement quand la carte s'affiche d'elle-même faute de choix
  // enregistré. Le retour depuis la fenêtre de détail réaffiche la carte lui
  // aussi : sans ce drapeau, elle reprendrait le focus au visiteur qui vient
  // de refermer la fenêtre depuis le pied de page.
  const shouldFocusToastRef = useRef(false);
  const [portalHost, setPortalHost] = useState<HTMLElement | null>(null);

  /** Rend le focus à l'élément qui l'avait avant l'ouverture, s'il existe encore. */
  const restoreFocus = useCallback(() => {
    const previous = previousFocusRef.current;
    previousFocusRef.current = null;
    if (previous && previous.isConnected) previous.focus({ preventScroll: true });
  }, []);

  const openDetails = useCallback(() => {
    const declencheur =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    previousFocusRef.current = declencheur;
    /* « Voir le détail » vit DANS la carte : le bouton est démonté avec elle,
       et le rendre au retour visait un nœud détaché — le focus retombait sur
       BODY, mesuré. Dans ce cas seulement, c'est la carte qui doit le
       reprendre. Depuis le pied de page, au contraire, le bouton « Gérer mes
       cookies » existe toujours et garde la main. */
    shouldFocusToastRef.current = !!declencheur?.closest(".hc-cb-toast");
    setShowDetail(true);
    setOpen(true);
  }, []);

  // Premier mount : créer le point de montage, puis afficher si pas de
  // consent valide.
  // (setTimeout : évite un setState synchrone dans l'effet — react-hooks/set-state-in-effect)
  useEffect(() => {
    const hote = document.createElement("div");
    const id = window.setTimeout(() => {
      if (!isCookieBannerEnabled()) {
        clearStoredCookieConsent();
        return;
      }

      /* Point de montage remonté en tête de <body>.
         ---------------------------------------------------------------------
         Mesuré aux frappes clavier réelles depuis `document.body` : la carte
         étant rendue en dernier dans le corps du document, ses quatre
         commandes occupaient les toutes dernières positions de l'ordre de
         tabulation — 137 tabulations sur l'accueil et 149 sur
         /services/publicite-en-ligne avant d'atteindre « Politique cookies »,
         son premier focusable. L'ordre du clavier contredisait l'ordre
         visuel, puisque la carte est visible dès le chargement et recouvre
         déjà une partie du contenu.

         On la place donc juste après le lien d'évitement, qui doit rester le
         tout premier arrêt. Rien ne bouge à l'écran : la carte est en
         `position: fixed` avec un `z-index` explicite (9000, et 9100 pour la
         fenêtre de détail), très au-dessus de la navigation (60/70) ; seule
         la position dans le document change. Un portail plutôt qu'un
         déplacement dans `layout.tsx` : le point de montage appartient ainsi
         au composant qui l'utilise, et disparaît avec lui. */
      hote.setAttribute("data-cookie-banner-host", "");
      const lienEvitement = document.querySelector(".skip-to-content");
      if (lienEvitement && lienEvitement.parentNode === document.body) {
        document.body.insertBefore(hote, lienEvitement.nextSibling);
      } else {
        document.body.insertBefore(hote, document.body.firstChild);
      }
      setPortalHost(hote);

      const existing = readCookieConsent();
      if (!existing) {
        shouldFocusToastRef.current = true;
        setOpen(true);
      } else {
        setAnalyticsChoice(existing.analytics);
      }
    }, 0);
    return () => {
      window.clearTimeout(id);
      hote.remove();
    };
  }, []);

  /* Le focus entre dans la carte à son apparition.
     `role="dialog"` sans déplacement de focus laissait `document.activeElement`
     sur BODY au chargement : la boîte s'annonçait comme un dialogue sans
     jamais en être un pour le clavier ni pour un lecteur d'écran. On vise le
     conteneur (`tabIndex={-1}`) et non un bouton, pour ne pas présélectionner
     « Accepter » ni « Refuser » — le choix doit rester également accessible
     des deux côtés. Pas d'`aria-modal` en revanche : la carte ne masque ni
     n'inerte le reste de la page, qui reste entièrement utilisable à la
     souris ; l'annoncer modale serait faux pour les lecteurs d'écran. */
  useEffect(() => {
    if (!open || showDetail || !portalHost) return;
    if (!shouldFocusToastRef.current) return;
    shouldFocusToastRef.current = false;
    const active = document.activeElement;
    previousFocusRef.current =
      active instanceof HTMLElement && active !== document.body ? active : null;
    toastRef.current?.focus({ preventScroll: true });
  }, [open, showDetail, portalHost]);

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
    restoreFocus();
  }, [restoreFocus]);

  const refuseAll = useCallback(() => {
    writeCookieConsent({ necessary: true, analytics: false });
    setOpen(false);
    setShowDetail(false);
    restoreFocus();
  }, [restoreFocus]);

  const savePreferences = useCallback(() => {
    writeCookieConsent({ necessary: true, analytics: analyticsChoice });
    setOpen(false);
    setShowDetail(false);
    restoreFocus();
  }, [analyticsChoice, restoreFocus]);

  if (!isCookieBannerEnabled()) return null;
  if (!open) return null;
  // Le point de montage naît après l'hydratation. La bannière n'est de toute
  // façon jamais rendue côté serveur (`open` démarre à false), donc aucun
  // écart d'hydratation possible.
  if (!portalHost) return null;

  if (showDetail) {
    return createPortal(
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
                Ce choix autorise l&apos;envoi de quelques actions de conversion à
                une route du même domaine. Cette mesure interne n&apos;ajoute ni
                identifiant persistant, ni adresse IP au jeu de données.
              </p>
              <p>
                Le même choix conditionne le chargement de la mesure Google
                (Google&nbsp;Ads et, le cas échéant, Analytics), utilisée pour
                rattacher une demande à la campagne qui l&apos;a amenée. Lorsqu&apos;elle
                est chargée, elle dépose ses propres cookies et peut recourir à un
                identifiant publicitaire&nbsp;: le tag Google est configuré pour
                n&apos;activer la mesure et la publicité qu&apos;après votre acceptation.
                Tant que vous n&apos;avez pas accepté, aucun script Google n&apos;est
                chargé et aucune requête ne part vers Google. Tout futur outil
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
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
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
      </div>,
      portalHost,
    );
  }

  // Banner compact en bas à droite
  return createPortal(
    <div
      className="hc-cb-toast"
      role="dialog"
      aria-labelledby="hc-cb-toast-title"
      aria-describedby="hc-cb-toast-desc"
      ref={toastRef}
      tabIndex={-1}
    >
      <div className="hc-cb-toast-eyebrow">Vie privée</div>
      <h2 id="hc-cb-toast-title" className="hc-cb-toast-title">
        Respect de votre vie privée
      </h2>
      {/* Résumé, pas exposé complet. Le texte précédent faisait huit lignes : sur
          un 390 x 844, la carte occupait 384 px et RECOUVRAIT les deux boutons du
          héros — mesuré, `elementFromPoint` en leur centre renvoyait le bandeau.
          Le détail par catégorie, avec sa bascule, reste à un geste : « Voir le
          détail » ouvre la fenêtre qui porte l'information complète, et le lien
          vers la politique cookies est conservé ici. */}
      <p id="hc-cb-toast-desc" className="hc-cb-toast-desc">
        Le thème, et un brouillon sans vos coordonnées si vous le demandez, sont
        conservés dans ce navigateur. « Accepter » autorise en plus une mesure
        d&apos;audience facultative (Google&nbsp;Ads, Google&nbsp;Analytics) et ses
        cookies&nbsp;; « Refuser » les laisse désactivées.{" "}
        <a href="/legal/cookies">Politique cookies</a>.
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
    </div>,
    portalHost,
  );
}
