/**
 * Lecture d'une réponse de /api/project-inquiry, partagée par ses DEUX clients :
 * le tunnel (ProjectFunnel) et le formulaire court du pied de page
 * (ContactProjectSection).
 *
 * Le prédicat vivait auparavant dans ProjectFunnel.tsx, et le footer testait
 * l'inverse (`json.captured === false`). Les deux défauts étaient donc opposés :
 * une réponse sans le champ valait ÉCHEC côté tunnel et SUCCÈS côté footer. Un
 * 200 dont le corps n'est pas exploitable — page d'erreur HTML insérée par un
 * proxy, corps tronqué, `res.json()` qui échoue et retombe sur `{}` — faisait
 * ainsi afficher « Message bien reçu », comptait une conversion et remettait le
 * formulaire à zéro alors que rien n'avait été enregistré : la saisie du
 * prospect était détruite.
 *
 * Un seul prédicat, un seul défaut : seul `captured === true` autorise à purger
 * le brouillon, à rediriger vers /demarrer-un-projet/merci et à compter la
 * conversion.
 */

/**
 * Un 200 ne vaut pas réception. /api/project-inquiry répond
 * `{ ok: true, captured: false }` quand le piège à robots se déclenche :
 * volontairement indiscernable d'un succès pour un robot, mais aucun brief
 * n'est enregistré. Sinon un visiteur réel dont le gestionnaire de mots de
 * passe a rempli le champ piège repart avec une page de remerciement et un
 * brief perdu.
 */
export function briefWasCaptured(
  httpOk: boolean,
  payload: { captured?: boolean },
): boolean {
  return httpOk && payload.captured === true;
}

/**
 * Délai maximal d'un envoi vers /api/project-inquiry, commun aux deux clients.
 *
 * Aucun des deux `fetch` n'était borné : une requête qui ne répond jamais —
 * connexion mobile qui pend, tunnel réseau coupé sans RST — laissait le bouton
 * désactivé sur « Envoi en cours… », sans issue. Le tunnel conserve au moins un
 * brouillon ; le formulaire du pied de page ne garde rien, et un rechargement y
 * fait tout retaper.
 */
export const PROJECT_INQUIRY_TIMEOUT_MS = 20_000;

/** Secondes affichées au visiteur quand ce délai est atteint. */
export const PROJECT_INQUIRY_TIMEOUT_SECONDS = Math.round(
  PROJECT_INQUIRY_TIMEOUT_MS / 1000,
);
