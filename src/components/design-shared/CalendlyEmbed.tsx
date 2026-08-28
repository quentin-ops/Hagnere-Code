"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { CALENDLY_URL } from "@/lib/calendly";
import {
  COOKIE_CONSENT_EVENT,
  isCalendlyEmbedAllowed,
  rememberCalendlyEmbedConsent,
} from "@/lib/cookie-consent";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY_NATIONAL,
  CONTACT_PHONE_E164,
} from "@/lib/contact-details";
import { listenToCalendlyWidget } from "./calendly-tracking";

const CALENDLY_SCRIPT_SRC = "https://assets.calendly.com/assets/external/widget.js";
const CALENDLY_LOAD_TIMEOUT_MS = 12_000;

/**
 * Canal local au document, en plus de `COOKIE_CONSENT_EVENT`.
 *
 * Le titre de la section et le widget doivent décrire le même écran. Le clic
 * sur « Autoriser » est normalement diffusé par l'écriture du consentement,
 * mais un navigateur qui refuse le stockage n'écrit rien, donc ne diffuse
 * rien : sans ce second canal, le widget s'affichait pendant que le titre
 * continuait d'annoncer une autorisation à donner.
 */
const CALENDLY_AUTHORISED_EVENT = "hc:calendly-authorised";

/** La hauteur passe par une variable CSS : voir le commentaire de `height`. */
type CalendlyHeightStyle = CSSProperties & { "--calendly-h": string };

const heightStyle = (height: number): CalendlyHeightStyle => ({
  "--calendly-h": `${height}px`,
});

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
 * Autorisation courante du widget tiers, telle qu'elle est mémorisée.
 *
 * L'état de départ est TOUJOURS « non autorisé » : c'est ce que le serveur rend
 * (il n'a pas accès au stockage du visiteur) et l'hydratation doit lui
 * correspondre. La lecture réelle se fait au montage, puis à chaque changement
 * de consentement — un « Refuser tout » dans la bannière doit retirer l'iframe
 * Calendly sans attendre un rechargement.
 */
function useCalendlyAuthorisation(): [boolean, () => void] {
  const [authorised, setAuthorised] = useState(false);

  useEffect(() => {
    const syncFromStorage = () => setAuthorised(isCalendlyEmbedAllowed());
    const authoriseLocally = () => setAuthorised(true);

    // setTimeout : évite un setState synchrone dans l'effet
    // (react-hooks/set-state-in-effect), comme dans CookieBanner.
    const id = window.setTimeout(syncFromStorage, 0);
    window.addEventListener(COOKIE_CONSENT_EVENT, syncFromStorage);
    window.addEventListener(CALENDLY_AUTHORISED_EVENT, authoriseLocally);
    return () => {
      window.clearTimeout(id);
      window.removeEventListener(COOKIE_CONSENT_EVENT, syncFromStorage);
      window.removeEventListener(CALENDLY_AUTHORISED_EVENT, authoriseLocally);
    };
  }, []);

  const authorise = useCallback(() => {
    rememberCalendlyEmbedConsent(true);
    window.dispatchEvent(new Event(CALENDLY_AUTHORISED_EVENT));
  }, []);

  return [authorised, authorise];
}

/**
 * Rend la copie qui correspond à ce que le visiteur a réellement sous les yeux.
 *
 * Le titre de /rendez-vous annonçait « Réservez directement ci-dessous »
 * au-dessus d'un mur d'autorisation : la réservation n'était pas à un clic mais
 * à deux, et le calendrier promis n'existait nulle part sur l'écran.
 */
export function CalendlyAuthorisationSwitch({
  pending,
  ready,
}: {
  pending: ReactNode;
  ready: ReactNode;
}) {
  const [authorised] = useCalendlyAuthorisation();
  return <>{authorised ? ready : pending}</>;
}

/**
 * Le widget Calendly est un service tiers susceptible de déposer des cookies.
 * Aucun script, iframe ou appel réseau Calendly n'est déclenché avant le clic
 * explicite sur le bouton d'autorisation. Ce choix est mémorisé avec les autres
 * consentements (`hc_consent_v1`) : il n'est plus redemandé d'une page à
 * l'autre ni à chaque rechargement, et reste révocable depuis « Gérer mes
 * cookies » en pied de page.
 *
 * `height` est une hauteur SOUHAITÉE, pas une hauteur imposée : elle est
 * publiée en variable CSS et bornée par la feuille de styles à la hauteur
 * réellement visible.
 */
export function CalendlyEmbed({ height = 700 }: { height?: number }) {
  const [authorised, authorise] = useCalendlyAuthorisation();
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
      <div className="calendly-consent" style={heightStyle(height)}>
        <div className="calendly-consent-card">
          <span className="calendly-consent-kicker">Service externe</span>
          <h3>Afficher le calendrier Calendly ?</h3>
          <p>
            Calendly ne sera contacté qu&apos;après votre accord. Son affichage peut
            entraîner le dépôt de cookies et le transfert de données techniques
            vers ce prestataire. Votre accord est conservé avec vos autres
            préférences cookies, et se retire depuis « Gérer mes cookies ».
          </p>
          <div className="calendly-consent-actions">
            <button type="button" onClick={authorise}>
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
      <div
        className="calendly-consent calendly-consent--error"
        style={heightStyle(height)}
        role="alert"
      >
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
      style={heightStyle(height)}
      aria-label="Réserver un créneau de découverte avec Hagnéré Code"
    />
  );
}
