# Contre-audit P3 R2 — `aides-creation-site-internet`

Date : **26 juillet 2026**  
Statut : **second candidat corrigé remis en double contre-audit**  
Publication, déploiement et indexation : **non autorisés**

## 1. Pourquoi un R2

Le manifeste P3 R1 a été vérifié intégralement par deux relecteurs indépendants
avant et après leur audit. Leurs verdicts étaient :

```text
Audit factuel, juridique et financier : 68/100 — NO-GO
Audit pédagogie, logique et accessibilité : 84/100 — NO-GO
P0 : 0
Union des défauts : P1 = 6 ; P2 = 7
Manifeste R1 : 27/27 conforme pour les deux relecteurs
```

Le guide public et ses sources françaises restaient solides. Les blocages
venaient du moteur et du parcours du dossier local. Le présent reçu ne
s’auto-attribue aucune note : il fige les corrections à remettre aux mêmes
contre-épreuves froides.

## 2. Fermeture des P1 du R1

| Référence | Contre-exemple R1                                                                               | Correction R2                                                                                                                                                                                                                 | Test ou preuve                                                                               |
| --------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| R1-P1-01  | Une assiette TTC, TVA non récupérable ou autre produisait quand même une aide théorique HT.     | Champ mécanique `basisScope` ; seule l’assiette `eligible-ex-vat` autorise la théorie. Une autre assiette produit `unsupported-basis`, une limite explicite dans l’écran et le TXT, et aucune théorie.                        | Cas `basisScope=other` et enum corrompue.                                                    |
| R1-P1-02  | Un gate `no` sans référence devenait `excluded` et « critère négatif prouvé ».                  | L’exclusion n’existe que si le `no` possède une preuve suffisante ; sinon le verdict reste incomplet.                                                                                                                         | Contre-test exact `beneficiary=no`, preuve vide.                                             |
| R1-P1-03  | Des données incohérentes continuaient à réduire coûts et trésorerie.                            | Les relations taux/plafond/théorie, notification/encaissement et mode/prépaiement ont leurs propres drapeaux de validité. Une donnée invalide ne nourrit plus aucune réduction ; le cash revient au besoin prudent.           | Notification 2 101 € pour théorie 2 100 €, remboursement + 50 %, avance 0 %, direct ≠ 100 %. |
| R1-P1-04  | Paiement direct : 2 100 € notifiés puis 1 800 € reçus réduisaient encore le cash de 2 100 €.    | À l’état encaissé, la part disponible avant fournisseur est calculée sur le montant réellement reçu.                                                                                                                          | Facture 12 000 €, besoin maximal attendu et obtenu : 10 200 €.                               |
| R1-P1-05  | Un coût « réalisé » ne demandait aucune référence de facture finale ni de paiement fournisseur. | Correspondance des lignes, date et référence de facture finale, référence du paiement fournisseur, date et référence d’encaissement de l’aide sont séparées et toutes obligatoires avant montant reçu, écart et coût réalisé. | Cas de retrait de chaque pièce ; ordre des dates contrôlé.                                   |
| R1-P1-06  | Le parcours neuf affichait « aucune notification » mais gardait secrètement le gate `unknown`.  | L’entrée vide et le composant synchronisent `stage=none` avec `notification=no`.                                                                                                                                              | Dossier neuf rempli sans toucher au sélecteur : aucun blocage artificiel de notification.    |

## 3. Fermeture des P2 du R1

| Référence                        | Correction R2                                                                                                                                                                                                                                              |
| -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| R1-P2-01 — de minimis            | Le moteur groupe les aides générales identifiables par régime, État membre, entreprise unique et fenêtre de trois ans. Au-delà de 300 000 €, il émet une alerte de dépassement **potentiel** et exige confirmation, sans conclusion juridique automatique. |
| R1-P2-02 — enums runtime         | Admissibilité, même assiette/facture et autres états critiques sont validés à l’exécution ; une valeur hors contrat rend le dossier invalide au lieu de devenir 0 ou de disparaître.                                                                       |
| R1-P2-03 — débordements          | Les sommes et produits dérivés passent par un garde de finitude. Les entrées extrêmes ne peuvent plus produire `Infinity` ou `NaN` avec un verdict positif.                                                                                                |
| R1-P2-04 — benchmark KfW         | Le benchmark précise que le Digitalisierungs-Check est obligatoire pour le niveau 1 décrit, que son score ne change ni accord ni conditions, et que le justificatif d’usage est facultatif.                                                                |
| R1-P2-05 — benchmark SBA         | La SBA est bornée au chiffrage du besoin, aux dépenses, au plan, aux projections et à ses domaines officiels ; les formulations « impose la capacité » et les signaux non sourcés lui ont été retirés.                                                     |
| R1-P2-06 — listes clavier        | Clés d’interface stables ; focus au premier champ ajouté ; après suppression, focus sur la ligne voisine ou le bouton d’ajout ; annonce brève pour devis et registre.                                                                                      |
| R1-P2-07 — récupération d’erreur | Le résumé est focalisé après « Analyser », les erreurs renvoient aux sections concernées et les contrôles identifiables reçoivent `aria-invalid` et `aria-describedby`. Une seule région `aria-live` polie demeure.                                        |

Le dernier P2 est séparé en deux lignes car le relecteur pédagogique avait
distingué le clavier de la récupération après erreur.

## 4. Invariants supplémentaires de R2

- version du moteur : `site-aid-decision-r3-2026-07-26` ;
- aucun montant non fini n’entre dans l’écran ou le TXT ;
- les résultats indépendants restent visibles, mais aucune donnée fautive ne
  réduit un coût ;
- le besoin maximal de trésorerie reste prudent lorsque le versement préalable
  n’est pas prouvé ;
- le registre de minimis alerte sans se substituer à l’autorité ;
- facture fournisseur, paiement fournisseur et encaissement de l’aide restent
  trois traces distinctes ;
- le formulaire initial, l’ajout, la suppression, l’analyse, le téléchargement,
  l’impression et l’effacement ont chacun une action testable.

## 5. Vérifications du candidat R2

```text
Tests ciblés : 107/107
TypeScript : conforme
ESLint ciblé : conforme
Build Next.js direct : conforme
Pages statiques : 159/159
Suite SEO globale : 491/492
Défaut global restant : ancien manifeste P4 de
prioriser-fonctionnalites-mvp-saas sur src/lib/guides.ts
Défaut local aides-creation-site-internet : aucun
```

Le précontrôle de `npm run build` conserve cet unique écart historique hors
périmètre. Le moteur Next.js direct compile, contrôle TypeScript et génère les
159 pages.

## 6. Porte de sortie

R2 n’obtient un **GO P4** que si deux relecteurs indépendants :

1. vérifient le nouveau manifeste commun au début et à la fin ;
2. rejouent tous les P1 et P2 de R1, sans se fier aux assertions de ce rapport ;
3. recherchent de nouveaux contre-exemples ;
4. rendent chacun une note sur 100 avec `P0/P1/P2` ;
5. concluent séparément à `P0 = 0`, `P1 = 0` et à l’absence de P2 empêchant une
   expérience premium.

Un éventuel GO P3 n’autorise toujours ni publication ni indexation. La P4 doit
encore prouver le rendu réel aux dix largeurs, le clavier, clair/sombre, les
scénarios du formulaire, le TXT, l’impression A4, l’image sociale, les
métadonnées, le statut robots et l’absence du sitemap.
