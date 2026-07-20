/**
 * Source de vérité de l'indexation publique.
 *
 * `NEXT_PUBLIC_ENV` reste l'override explicite : une valeur non vide autre que
 * `production` ferme toujours l'indexation. Quand cet override n'est pas
 * configuré, Vercel fournit `VERCEL_ENV` au build ; seul son environnement
 * `production` peut alors ouvrir l'indexation. Un simple `next build` local ne
 * suffit donc jamais à rendre le site indexable par accident.
 */
export function isSearchIndexingEnabled(
  deploymentEnv: string | undefined,
  platformDeploymentEnv?: string | undefined,
): boolean {
  const explicitEnv = deploymentEnv?.trim();

  if (explicitEnv) {
    return explicitEnv === "production";
  }

  return platformDeploymentEnv?.trim() === "production";
}
