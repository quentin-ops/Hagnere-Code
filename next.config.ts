import type { NextConfig } from "next";
import path from "node:path";
import { resourceDownloadPaths } from "./src/lib/resources";
import { SITE_URL } from "./src/lib/seo";
import { WHITE_PAPERS } from "./src/lib/white-papers";

/**
 * Domaines de mesure Google (Ads + GA4). Ils ne sont ajoutés à la CSP que si
 * un identifiant de conversion est configuré : tant que le site ne mesure rien,
 * la politique reste aussi fermée qu'avant.
 */
const googleMeasurementEnabled = Boolean(
  process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || process.env.NEXT_PUBLIC_GA4_ID,
);

const googleScriptSources = googleMeasurementEnabled
  ? [
      "https://www.googletagmanager.com",
      "https://www.google-analytics.com",
      // Le linker de conversion Ads est servi depuis cet hôte.
      "https://www.googleadservices.com",
    ]
  : [];

const googleConnectSources = googleMeasurementEnabled
  ? [
      // Hôte des conversions Google Ads. Il manquait : gtag.js se chargeait
      // depuis googletagmanager, mais le ping de conversion part vers
      // googleadservices.com/pagead/conversion — bloqué par la CSP, donc
      // aucune conversion ne serait remontée, sans erreur visible côté serveur
      // puisqu'aucun point de collecte report-to n'est configuré.
      "https://www.googleadservices.com",
      "https://www.googletagmanager.com",
      // Conteneurs régionaux de gtag.js : sans ce point, le transport de
      // secours d'une partie des visiteurs européens est bloqué.
      "https://*.googletagmanager.com",
      "https://www.google-analytics.com",
      "https://*.google-analytics.com",
      "https://*.analytics.google.com",
      "https://googleads.g.doubleclick.net",
      "https://www.google.com",
    ]
  : [];

const googleImageSources = googleMeasurementEnabled
  ? [
      // Le tag de conversion Ads utilise aussi un pixel image sur cet hôte.
      "https://www.googleadservices.com",
      "https://www.googletagmanager.com",
      "https://www.google-analytics.com",
      "https://googleads.g.doubleclick.net",
      "https://www.google.com",
      "https://www.google.fr",
    ]
  : [];

const scriptSources = [
  "'self'",
  "'unsafe-inline'",
  ...(process.env.NODE_ENV !== "production" ? ["'unsafe-eval'"] : []),
  "https://calendly.com",
  "https://*.calendly.com",
  ...googleScriptSources,
].join(" ");

/**
 * Point de collecte des violations CSP (route interne, aucune écriture en
 * base). Il rend visible côté serveur un blocage de ressource — en premier
 * lieu celui du tag de conversion Google au lancement des campagnes.
 *
 * `Reporting-Endpoints` attend une URL absolue : en local, on pointe sur
 * l'origine de développement pour ne pas envoyer les rapports en production.
 */
const CSP_REPORT_PATH = "/api/csp-report";
const CSP_REPORT_URL =
  process.env.NODE_ENV === "production"
    ? `${SITE_URL}${CSP_REPORT_PATH}`
    : `http://localhost:3000${CSP_REPORT_PATH}`;

const securityHeaders = [
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    // Isolation : aucune page du site n'ouvre de popup cross-origin
    // (Calendly est embarqué en iframe), et aucune ressource n'a vocation à
    // être chargée par un site tiers.
    key: "Cross-Origin-Opener-Policy",
    value: "same-origin",
  },
  {
    key: "Cross-Origin-Resource-Policy",
    value: "same-origin",
  },
  {
    // Reporting API : nomme le point de collecte utilisé par `report-to`.
    key: "Reporting-Endpoints",
    value: `csp-endpoint="${CSP_REPORT_URL}"`,
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    // Microphone allowed for our own origin (used on /demarrer-un-projet
    // for voice-to-text dictation). Camera + geolocation stay disabled —
    // we don't use them. interest-cohort=() opts out of FLoC.
    key: "Permissions-Policy",
    value: "camera=(), microphone=(self), geolocation=(), interest-cohort=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    // Content-Security-Policy :
    // - script-src : self + Calendly + 'unsafe-inline' pour les JSON-LD.
    //   `'unsafe-eval'` reste limité au serveur de développement, car le
    //   rafraîchissement React en dépend. Il est absent du build public.
    // - frame-src : Calendly inline embed.
    // - connect-src : self + destinations réellement appelées par le
    //   NAVIGATEUR. Groq et Recherche d'entreprises n'y figurent pas :
    //   ils ne sont contactés que côté serveur, via /api/transcribe et
    //   /api/sirene. Les y laisser n'aurait élargi que les destinations
    //   d'exfiltration possibles.
    //   `*.r2.cloudflarestorage.com` a été RETIRÉ d'img-src et de connect-src :
    //   aucun fichier de src/ n'appelle cet hôte. Une autorisation qui ne sert
    //   rien n'ajoute qu'une destination d'exfiltration et un prestataire à
    //   déclarer. À la première image ou requête réellement servie depuis R2,
    //   la réintroduire ET déclarer Cloudflare dans le tableau des
    //   destinataires de /legal/confidentialite.
    // - img-src : self + data: + blob: + Calendly (+ pixels Google quand la
    //   mesure est configurée).
    // - font-src : self + data:.
    // - report-to / report-uri : sans point de collecte, un blocage CSP
    //   (le tag de conversion, par exemple) reste invisible côté serveur.
    //
    // `'unsafe-inline'` dans script-src est un choix ASSUMÉ, pas une dette
    // en attente : les JSON-LD et le thème initial sont injectés inline, et
    // aucune page ne reflète de paramètre d'URL ni de saisie utilisateur
    // dans le HTML rendu. À revoir si une page venait à le faire.
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      `script-src ${scriptSources}`,
      "style-src 'self' 'unsafe-inline' https://calendly.com https://*.calendly.com",
      [
        "img-src 'self' data: blob: https://calendly.com https://*.calendly.com",
        ...googleImageSources,
      ].join(" "),
      "font-src 'self' data: https://calendly.com https://*.calendly.com",
      [
        "connect-src 'self' https://calendly.com https://*.calendly.com",
        ...googleConnectSources,
      ].join(" "),
      "frame-src 'self' https://calendly.com https://*.calendly.com",
      "media-src 'self' blob:",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'self'",
      "upgrade-insecure-requests",
      "report-to csp-endpoint",
      // Conservé pour Firefox et Safari, qui n'implémentent pas report-to.
      `report-uri ${CSP_REPORT_PATH}`,
    ].join("; "),
  },
];

const noIndexDownloadPaths = [
  ...resourceDownloadPaths,
  ...WHITE_PAPERS.map((entry) => entry.pdf.href),
];

/**
 * Cache des actifs statiques servis depuis `public/`.
 *
 * Une semaine de cache navigateur, puis un jour de `stale-while-revalidate`
 * pour absorber la revalidation sans faire attendre le visiteur. Pas
 * d'`immutable` : les noms de fichiers ne portent aucune empreinte, donc
 * remplacer une image doit rester possible sans que les navigateurs déjà
 * passés restent bloqués sur l'ancienne version au-delà de cette fenêtre.
 */
const STATIC_ASSET_CACHE_CONTROL =
  "public, max-age=604800, stale-while-revalidate=86400";

/**
 * Préfixes d'actifs stables. Chacun désigne un répertoire de `public/` qui ne
 * correspond à AUCUNE route de page : un en-tête de cache long posé sur un
 * préfixe partagé avec des pages figerait du HTML éditorial pendant une
 * semaine.
 *
 * C'est précisément pourquoi `/ressources/:path*` n'y figure pas :
 * `/ressources/<kit>` est une page HTML rendue par `src/app/ressources`, et
 * seuls les fichiers téléchargeables vivent un niveau plus bas. Ces fichiers
 * reçoivent le même en-tête, mais par leur chemin exact
 * (`noIndexDownloadPaths`), sans jamais toucher les pages.
 *
 * Rappel de déploiement : sur Cloudflare (Workers Assets), un actif servi
 * directement par la plateforme ne traverse pas le Worker — la même politique
 * doit alors être portée par `public/_headers`, hors de ce fichier.
 */
const staticAssetSources = ["/logos/:path*", "/team/:path*", "/images/:path*"];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      ...staticAssetSources.map((source) => ({
        source,
        headers: [
          { key: "Cache-Control", value: STATIC_ASSET_CACHE_CONTROL },
        ],
      })),
      ...noIndexDownloadPaths.map((source) => ({
        source,
        headers: [
          { key: "X-Robots-Tag", value: "noindex" },
          { key: "Cache-Control", value: STATIC_ASSET_CACHE_CONTROL },
        ],
      })),
    ];
  },
  async redirects() {
    return [
      {
        // La page service existante cible déjà cette intention commerciale.
        // L'alias évite une seconde page concurrente et concentre les signaux
        // sur l'URL canonique historique.
        source: "/agence-developpement-saas-sur-mesure",
        destination: "/services/saas-applications-metier",
        permanent: true,
      },
      {
        // Anciens permaliens de résultat d'estimation envoyés par email
        // avant la suppression du chiffrage IA — on renvoie vers le funnel
        // plutôt qu'un 404.
        source: "/demarrer-un-projet/r/:slug",
        destination: "/demarrer-un-projet",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
