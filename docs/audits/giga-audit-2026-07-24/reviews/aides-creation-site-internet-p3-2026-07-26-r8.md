# Contre-audit P3 R8 / moteur R9 — `aides-creation-site-internet`

Date : **26 juillet 2026**  
Statut : **huitième candidat éditorial, moteur R9, remis en double
contre-audit à froid**  
Publication, déploiement et indexation : **non autorisés**

## 1. Verdicts du candidat R8

Deux relecteurs indépendants ont vérifié le manifeste R8 au début et à la fin,
rejoué les défauts antérieurs et cherché de nouveaux contre-exemples :

```text
Audit factuel, juridique et financier : 78/100 — NO-GO P4
P0 : 0 ; P1 : 2 ; P2 : 0

Audit pédagogie, logique et accessibilité : 76/100 — NO-GO P4
P0 : 0 ; P1 : 2 ; P2 : 1

Manifeste R8 au début et à la fin : 39/39 conforme pour les deux relecteurs
SHA-256 du manifeste R8 :
e0a4ca901ad9efff2bfb759577ac9be5e6277b66776be1ece35b3ef39b50a538

Décision retenue : 76/100 — NO-GO
```

L'union conservée dans le registre de recherche comprend **2 P1 et 1 P2**.
Le présent candidat R9 corrige ces trois blocages sans s'attribuer de note ni
de GO.

## 2. Fermeture des deux P1 R8

| P1 R8                                                                                                                                                           | Correction R9                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Contre-preuve attendue                                                                                                                                                                                                                                                                                                                                                                                    |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Une branche externe ou inconnue bloquait le verdict, mais pouvait encore supprimer l'alerte témoin à 301 100 € en retirant son montant du précontrôle de cumul. | Le moteur conserve désormais une observation `unresolved` distincte des régimes général, agricole et pêche. Elle n'est jamais requalifiée. Avec un même État membre, un même périmètre d'entreprise unique, des dates et montants exploitables, le moteur affiche un signal prudent à qualification non résolue et ventile uniquement « reconnu » / « non qualifié ». Les groupes distincts ne sont jamais croisés ; une donnée manquante retire le total et demande la preuve. | 299 000 € reconnus + 2 100 € externes ou inconnus, dans les deux orientations courant/registre : total prudent 301 100 €, ventilation visible, revue externe obligatoire, aucun rattachement des 2 100 € à `2023/2831`. Même rejeu avec États ou groupes différents : aucun total croisé. Donnée manquante : aucun total inventé. Référence exacte contradictoire : priorité prudente sans double compte. |
| Un dossier pouvait devenir `received` alors que le paiement de l'aide précédait la date d'octroi juridique qui confère le droit.                                | Pour une subvention reçue avec octroi déclaré, `date du paiement de l'aide >= date d'octroi juridique` devient un invariant bloquant. Une contradiction rend le dossier invalide, la chronologie de paiement non prouvée, la couverture directe non documentée et toutes les sorties réalisées `ND`. L'égalité et un paiement postérieur restent admis ; une avance peut précéder la facture finale, jamais l'octroi.                                                           | Facture 24/07, paiement 25/07, octroi 26/07 : `invalid`, aucune contribution payée exploitable, aucun coût réalisé, aucun TXT « aide versée ». Rejouer remboursement, avance et paiement direct. Égalité et J+1 : admis si le reste de la chaîne est complet. Avance post-octroi mais pré-facture : admise. Paiement direct intégral mais antérieur à l'octroi : couverture invalide, reste `ND`.         |

Le contrôle de cumul R9 reste un **signal prudent**, pas une qualification
juridique. Les deux clés de rapprochement sont conservées dans l'interface sous
des libellés neutres lorsqu'une base reste externe ou inconnue. Elles
n'authentifient ni le régime ni l'éligibilité.

## 3. Fermeture du P2 R8

| P2 R8                                                                                                                                                                       | Correction R9                                                                                                                                                                                                                         | Contre-preuve attendue                                                                                                                                                                                          |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Sur la quatrième ligne de devis ajoutée dynamiquement, un clic souris réel sur les erreurs montant, TVA ou admissibilité pouvait laisser le focus dans le résumé d'erreurs. | Le lien conserve son `href` natif, empêche la navigation décalée, focalise immédiatement le contrôle exact, puis restaure ce focus après le rendu dynamique. Le clavier, les champs statiques et le registre conservent leur contrat. | Ajouter une quatrième ligne, provoquer les trois erreurs, activer chaque lien par un vrai événement souris : défaut empêché, focus sur l'identifiant positionnel exact avant et après le rendu. Rejouer Entrée. |

## 4. Contrat de décision R9

- **Base reconnue** : règlement exact, État membre, entreprise unique, date
  d'octroi et montant alimentent uniquement le régime réellement reconnu.
- **Base non résolue** : montant conservé dans une provenance séparée, sans
  attribution à un règlement ; validation externe obligatoire.
- **Signal prudent** : même État, même périmètre et même fenêtre seulement ;
  total reconnu + non qualifié à partir du seuil universel de 300 000 €, sans
  conclusion juridique.
- **Preuve insuffisante** : aucun total inventé ; le précontrôle indique
  exactement ce qui manque.
- **Paiement réalisé** : jamais antérieur à l'octroi juridique ; sinon aucune
  sortie financière réalisée.
- **Accessibilité** : lien natif, clic, clavier, focus et identifiant exact
  restent cohérents, y compris après ajout dynamique.

La version testée est
`SITE_AID_DECISION_VERSION = site-aid-decision-r9-2026-07-26`.

## 5. Vérifications du candidat R9

```text
Tests ciblés consolidés : 259/259, 7 fichiers
Tests moteur seuls : 153/153
Tests interface seuls : 29/29
Tests moteur + interface + contrat éditorial : 197/197
Tests qualité dédiés : 15/15
Porte documentaire : 77/77
TypeScript global : conforme
ESLint ciblé : conforme
Prettier 3.6.2 ciblé : conforme
Build Next.js direct : conforme
Pages statiques : 159/159
Suite SEO globale : 491/492
Défaut global restant : ancien manifeste P4 de
prioriser-fonctionnalites-mvp-saas sur src/lib/guides.ts
Défaut local aides-creation-site-internet : aucun
```

L'écart de gouvernance SEO est antérieur et extérieur à ce guide. Le build
direct compile, contrôle TypeScript et génère les 159 pages, dont la route du
guide et son image sociale.

## 6. Sources primaires à contrôler

- [règlement général (UE) 2023/2831](https://eur-lex.europa.eu/eli/reg/2023/2831/oj) ;
- [règlement agricole 1408/2013 consolidé](https://eur-lex.europa.eu/eli/reg/2013/1408/2024-12-16/fra) ;
- [règlement pêche et aquaculture 717/2014 consolidé](https://eur-lex.europa.eu/eli/reg/2014/717/2023-10-25/fra) ;
- [décret français 2025-1361](https://www.legifrance.gouv.fr/loda/id/JORFTEXT000053177293) ;
- [circulaire du Premier ministre du 3 mars 2026](https://agriculture.gouv.fr/telecharger/153667).

## 7. Porte de sortie

Le présent rapport **ne s'auto-attribue aucune note**. R9 n'obtient un
**GO P4** que si deux nouveaux relecteurs indépendants :

1. vérifient le nouveau manifeste commun au début et à la fin ;
2. rejouent les deux P1 et le P2 R8 ;
3. rejouent les dix-sept défauts documentés des candidats R4 à R7 ;
4. confrontent les règles financières et juridiques aux sources primaires ;
5. recherchent de nouveaux contre-exemples, y compris plusieurs bases non
   résolues, groupes distincts et chronologies limites ;
6. rendent chacun une note sur 100 avec `P0/P1/P2` ;
7. concluent séparément à `P0 = 0`, `P1 = 0` et à l'absence de P2 empêchant une
   expérience premium.

Un éventuel GO P3 n'autorise toujours ni publication ni indexation. La P4 doit
encore prouver le rendu réel aux dix largeurs, le clavier, les thèmes, les
scénarios du formulaire, le TXT, l'impression A4, l'image sociale, les
métadonnées, le statut robots et l'absence du sitemap.
