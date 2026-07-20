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
