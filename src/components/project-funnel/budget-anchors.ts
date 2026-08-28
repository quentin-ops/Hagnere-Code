import type { ProjectKindId } from "./ProjectFunnel";

/**
 * Repère de prix affiché dans le tunnel, à l'étape où l'on demande une tranche
 * de budget.
 *
 * Le problème réparé : le tunnel imposait de choisir entre « < 15k », « 15-30k »
 * et « 30-60k » sans jamais donner un seul montant ni mentionner `/tarifs`. Deux
 * échecs symétriques en découlaient — soit le visiteur cochait « Préfère en
 * discuter » et la demande arrivait non qualifiée, soit il cochait la tranche
 * basse, se croyait hors budget et partait alors qu'il était éligible. La
 * question la plus anxiogène du parcours était posée AU visiteur au lieu d'être
 * répondue POUR lui.
 *
 * Aucun chiffrage n'est calculé ici : ce sont les montants d'entrée DÉJÀ
 * PUBLIÉS sur `/tarifs`, rapatriés là où naît l'objection. Le funnel reste
 * lead-only.
 *
 * ⚠️ Ces montants sont une COPIE. `budget-anchors.test.ts` vérifie que chacun
 * figure encore dans `src/components/tarifs/body.ts`, à côté du lien de service
 * indiqué : une évolution de la grille tarifaire qui oublierait ce fichier fait
 * échouer les tests au lieu de laisser deux prix diverger sur le site.
 */
export type BudgetAnchor = {
  /** Chemin de la page service, tel qu'il figure dans le tableau de /tarifs. */
  servicePath: string;
  /** Premier palier publié pour ce service, à l'écriture exacte de /tarifs. */
  from: string;
};

/**
 * Services dont le premier palier est un montant. Ceux publiés « Sur devis »
 * (application mobile, référencement) sont volontairement absents : afficher
 * « à partir de Sur devis » n'aiderait personne, et inventer un montant pour
 * combler le trou est exclu.
 */
export const BUDGET_ANCHORS: Partial<Record<ProjectKindId, BudgetAnchor>> = {
  site: { servicePath: "/services/sites-vitrines", from: "6,9 k€ HT" },
  saas: { servicePath: "/services/saas-applications-metier", from: "15 k€ HT" },
  outil: { servicePath: "/services/outils-internes-sur-mesure", from: "8 k€ HT" },
  ecommerce: { servicePath: "/services/ecommerce", from: "15 k€ HT" },
  ads: { servicePath: "/services/publicite-en-ligne", from: "1 800 €/m HT" },
  content: { servicePath: "/services/contenu-video", from: "2 500 € HT" },
  audit: { servicePath: "/services/audit-technique", from: "8 k€ HT" },
  security: { servicePath: "/services/securite-rgpd", from: "5 k€ HT" },
  maintenance: { servicePath: "/services/maintenance-evolution", from: "2 000 € HT" },
};

export function getBudgetAnchor(kind: ProjectKindId): BudgetAnchor | null {
  return BUDGET_ANCHORS[kind] ?? null;
}
