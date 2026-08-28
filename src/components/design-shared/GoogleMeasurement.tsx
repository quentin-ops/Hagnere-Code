"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

import {
  COOKIE_CONSENT_EVENT,
  isAnalyticsAllowed,
} from "@/lib/cookie-consent";
import {
  GOOGLE_ADS_ID,
  GA4_ID,
  isGoogleMeasurementConfigured,
  measurementIds,
} from "@/lib/google-measurement";
import { trackFunnelEvent } from "@/lib/funnel-analytics";
import {
  CALENDLY_EVENTS,
  CALENDLY_TRACKING_EVENT,
  listenToCalendlyOutboundLinks,
} from "./calendly-tracking";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Charge gtag.js en Consent Mode v2.
 *
 * Le script n'est injecté qu'après un consentement analytics positif : tant que
 * le visiteur n'a rien accepté, aucune requête ne part vers Google. C'est plus
 * strict que le Consent Mode « chargement systématique, signaux refusés », et
 * cohérent avec ce que /legal/cookies annonce au visiteur.
 */
export function GoogleMeasurement() {
  const [consented, setConsented] = useState(false);

  useEffect(() => {
    const sync = () => setConsented(isAnalyticsAllowed());
    sync();
    window.addEventListener(COOKIE_CONSENT_EVENT, sync);
    return () => window.removeEventListener(COOKIE_CONSENT_EVENT, sync);
  }, []);

  /**
   * Les liens Calendly sortants (`target="_blank"`) sont rendus par le pied de
   * page, le méga-menu et plusieurs corps de page servis en HTML : les tracer
   * un par un demanderait de modifier chaque occurrence. Un écouteur délégué
   * posé une fois sur le document les couvre tous. Ce composant est le seul
   * point de montage global de la mesure, d'où son emplacement ici.
   *
   * Le hook reste inconditionnel — le composant peut retourner `null` juste
   * après — et `trackCalendlyEvent` sort de lui-même sans consentement.
   */
  useEffect(() => listenToCalendlyOutboundLinks(), []);

  /**
   * Pont vers la mesure first-party. `trackCalendlyEvent` diffuse déjà chaque
   * événement en `CustomEvent` sur `window` ; la confirmation d'un créneau ne
   * partait pourtant qu'en événement gtag nommé, jamais dans la table
   * first-party — le nom `pf:calendly_booking_confirmed` était déclaré sans
   * émetteur. Le pont vit ici parce que ce composant est monté une seule fois,
   * globalement, quelle que soit la page qui porte le widget.
   *
   * Aucune conversion Google Ads n'est envoyée : on n'invente pas de libellé
   * (cf. calendly-tracking.ts). `trackFunnelEvent` revérifie le consentement.
   */
  useEffect(() => {
    const onCalendly = (event: Event) => {
      const detail = (
        event as CustomEvent<{
          name?: string;
          page?: string;
          widget?: string;
        } | null>
      ).detail;
      // Les trois étapes du canal de réservation, et non la seule
      // confirmation : sans le clic sortant ni l'entrée dans le widget, on
      // observe un numérateur sans savoir où les gens décrochent.
      //
      // Chaque nom est passé en littéral, et non via une table de
      // correspondance : `funnel-analytics-emitters.test.ts` vérifie qu'un nom
      // déclaré dans `FUNNEL_EVENT_NAMES` est réellement émis quelque part, et
      // ne sait lire que les arguments littéraux d'un appel. Une table rendrait
      // ces trois événements invisibles à cette garde.
      const props = { widget: detail?.widget, page: detail?.page };
      switch (detail?.name) {
        case CALENDLY_EVENTS.outboundClick:
          trackFunnelEvent("pf:calendly_outbound_click", props);
          return;
        case CALENDLY_EVENTS.bookingStarted:
          trackFunnelEvent("pf:calendly_booking_started", props);
          return;
        case CALENDLY_EVENTS.bookingConfirmed:
          trackFunnelEvent("pf:calendly_booking_confirmed", props);
          return;
        default:
          return;
      }
    };
    window.addEventListener(CALENDLY_TRACKING_EVENT, onCalendly);
    return () => window.removeEventListener(CALENDLY_TRACKING_EVENT, onCalendly);
  }, []);

  if (!isGoogleMeasurementConfigured() || !consented) return null;

  const ids = measurementIds(GOOGLE_ADS_ID, GA4_ID);
  const primaryId = ids[0];

  return (
    <>
      <Script
        id="gtag-src"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(primaryId)}`}
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('js', new Date());
gtag('consent', 'default', {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'denied',
  wait_for_update: 500
});
gtag('consent', 'update', {
  ad_storage: 'granted',
  ad_user_data: 'granted',
  ad_personalization: 'granted',
  analytics_storage: 'granted'
});
${ids
  .map((id) => `gtag('config', ${JSON.stringify(id)}, { anonymize_ip: true });`)
  .join("\n")}
        `}
      </Script>
    </>
  );
}
