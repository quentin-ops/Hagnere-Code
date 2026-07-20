/**
 * Source de vérité de l'indexation publique.
 *
 * La valeur est volontairement explicite : le serveur de développement reste
 * en noindex, tandis que les scripts de build imposent `production` avant que
 * Next.js ne génère les métadonnées et robots.txt statiques.
 */
export function isSearchIndexingEnabled(
  deploymentEnv: string | undefined,
): boolean {
  return deploymentEnv === "production";
}
