"use client";

/**
 * Bannière de consentement cookies — pré-installée mais désactivée.
 *
 * Active la bannière en passant le flag d'env `NEXT_PUBLIC_COOKIE_BANNER=1`
 * (ou en mettant `enabled` à true ici). Tant que le site ne dépose AUCUN
 * cookie soumis à consentement (pas d'analytics, pas de pixel pub), la
 * bannière reste invisible — la page /legal/cookies déclare l'absence de
 * cookies à consentement.
 *
 * Quand un outil analytics (Plausible, PostHog, GA4) est ajouté :
 *   1. Mettre `NEXT_PUBLIC_COOKIE_BANNER=1` dans l'env
 *   2. Mettre à jour la liste de cookies dans /legal/cookies (tableau nominatif)
 *   3. Câbler les services analytics dans la callback `onAccept`
 *
 * Conforme aux recommandations CNIL (déc. 2020) :
 *   - Bouton "Refuser tout" aussi visible que "Accepter tout"
 *   - Pas de pré-coche
 *   - Choix conservé 13 mois max
 *   - Re-demande seulement si nouveaux cookies / nouvelle finalité
 */

import { useEffect } from "react";

const COOKIE_BANNER_ENABLED =
  process.env.NEXT_PUBLIC_COOKIE_BANNER === "1" ||
  process.env.NEXT_PUBLIC_COOKIE_BANNER === "true";

export function CookieBanner() {
  useEffect(() => {
    if (!COOKIE_BANNER_ENABLED) return;
    if (typeof window === "undefined") return;

    let cancelled = false;

    (async () => {
      const CookieConsent = await import("vanilla-cookieconsent");
      // Le CSS doit être ajouté en tag <link> dans /public/ ou importé dans
      // un fichier .css statique, car Next/Turbopack ne supporte pas
      // l'import dynamique d'asset CSS depuis un module client.
      // Tant que la bannière est désactivée, le CSS n'est pas chargé.
      // À activer : ajouter `import "vanilla-cookieconsent/dist/cookieconsent.css";`
      // au top de ce fichier (sortie du bloc if). Pour l'instant on injecte
      // un <link rel="stylesheet"> à la volée pour ne rien embarquer en bundle.
      const linkId = "cc-stylesheet";
      if (typeof document !== "undefined" && !document.getElementById(linkId)) {
        const link = document.createElement("link");
        link.id = linkId;
        link.rel = "stylesheet";
        // Copie statique de vanilla-cookieconsent v3 publiée dans /public/
        link.href = "/cookieconsent.css";
        document.head.appendChild(link);
      }

      if (cancelled) return;

      CookieConsent.run({
        guiOptions: {
          consentModal: {
            layout: "box",
            position: "bottom right",
            equalWeightButtons: true,
            flipButtons: false,
          },
          preferencesModal: {
            layout: "box",
            position: "right",
            equalWeightButtons: true,
            flipButtons: false,
          },
        },
        cookie: {
          name: "hc_consent",
          // 13 mois en secondes (recommandation CNIL)
          expiresAfterDays: 395,
          domain: typeof window !== "undefined" ? window.location.hostname : "",
          path: "/",
          sameSite: "Lax",
        },
        categories: {
          necessary: {
            enabled: true,
            readOnly: true,
          },
          analytics: {
            enabled: false,
            autoClear: {
              cookies: [
                { name: /^_ga/ },
                { name: "_gid" },
                { name: /^plausible/ },
                { name: /^posthog/ },
              ],
            },
          },
        },
        language: {
          default: "fr",
          translations: {
            fr: {
              consentModal: {
                title: "Cookies — votre choix",
                description:
                  "On utilise des stockages strictement nécessaires (mémorisation du thème, brouillon de formulaire). Si on active un jour des outils de mesure d'audience, votre choix ici sera sollicité. Détails dans la <a href=\"/legal/cookies\">politique cookies</a>.",
                acceptAllBtn: "Tout accepter",
                acceptNecessaryBtn: "Refuser",
                showPreferencesBtn: "Personnaliser",
              },
              preferencesModal: {
                title: "Préférences cookies",
                acceptAllBtn: "Tout accepter",
                acceptNecessaryBtn: "Refuser tout",
                savePreferencesBtn: "Enregistrer mes choix",
                closeIconLabel: "Fermer",
                sections: [
                  {
                    title: "Strictement nécessaires",
                    description:
                      "Ces stockages sont indispensables au fonctionnement du site (thème clair/sombre, brouillon de formulaire). Ils ne peuvent pas être désactivés.",
                    linkedCategory: "necessary",
                  },
                  {
                    title: "Mesure d'audience",
                    description:
                      "Cookies analytiques utilisés uniquement si vous y consentez. Aucun outil n'est actif aujourd'hui ; cette catégorie reste désactivée par défaut.",
                    linkedCategory: "analytics",
                  },
                  {
                    title: "Vos droits",
                    description:
                      "Vous pouvez modifier vos choix à tout moment depuis la page <a href=\"/legal/cookies\">politique cookies</a>. Pour exercer vos droits RGPD : <a href=\"mailto:hello@hagnere-code.fr\">hello@hagnere-code.fr</a>.",
                  },
                ],
              },
            },
          },
        },
      });
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}
