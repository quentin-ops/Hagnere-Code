import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
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
    // Content-Security-Policy permissif pour les besoins actuels :
    // - script-src : self + Calendly + GTM/Plausible/PostHog (analytics
    //   futurs) + 'unsafe-inline' pour les JSON-LD inline.
    // - frame-src : Calendly inline embed.
    // - connect-src : self + APIs externes que la page appelle (Anthropic
    //   est server-side, pas listé). Ajoute Calendly et Cloudflare R2.
    // - img-src : self + data: + Unsplash + Aceternity + Pravatar (déjà
    //   whitelistés dans next.config.images.remotePatterns) + R2.
    // - font-src : self + data:.
    // À durcir progressivement (retirer 'unsafe-inline' après migration
    // de tous les JSON-LD inline vers des stratégies nonce).
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://assets.calendly.com https://*.calendly.com https://www.googletagmanager.com https://plausible.io https://eu.posthog.com",
      "style-src 'self' 'unsafe-inline' https://assets.calendly.com",
      "img-src 'self' data: blob: https://assets.aceternity.com https://images.unsplash.com https://i.pravatar.cc https://*.r2.cloudflarestorage.com https://*.calendly.com",
      "font-src 'self' data:",
      "connect-src 'self' https://recherche-entreprises.api.gouv.fr https://api.groq.com https://*.calendly.com https://plausible.io https://eu.posthog.com https://*.r2.cloudflarestorage.com",
      "frame-src 'self' https://*.calendly.com",
      "media-src 'self' blob:",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'self'",
      "upgrade-insecure-requests",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
