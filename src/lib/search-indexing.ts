/**
 * Source de vérité de l'indexation publique.
 *
 * Sur Vercel, `VERCEL_ENV` est autoritaire : une preview reste ainsi fermée
 * même si une variable personnalisée est mal configurée. Hors Vercel,
 * `NEXT_PUBLIC_ENV` reste l'override explicite utilisé par la CI et la chaîne
 * Cloudflare. Un simple `next build` local ne suffit donc jamais à rendre le
 * site indexable par accident.
 */
export function isSearchIndexingEnabled(
  deploymentEnv: string | undefined,
  platformDeploymentEnv?: string | undefined,
): boolean {
  const platformEnv = platformDeploymentEnv?.trim();

  if (platformEnv) {
    return platformEnv === "production";
  }

  return deploymentEnv?.trim() === "production";
}

/** Directives communes à toute page publique indexable. */
export const INDEXABLE_ROBOTS = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
} as const;

/** Une preview ou un contenu éditorial non validé reste entièrement fermé. */
export const PRIVATE_ROBOTS = {
  index: false,
  follow: false,
} as const;
