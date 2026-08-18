# BAT R6 — `facturation-abonnements-saas`

Date : 28 juillet 2026  
Périmètre : correction finale du classeur et de sa chaîne de preuve locale  
Statut : **GO_LOCAL_DRAFT — contre-audits 98/99/100, aucun P0/P1**

## Delta R6

La R6 ne modifie ni le texte servi, ni l’outil React, ni le responsive, ni les
thèmes, ni le funnel. Les preuves navigateur R5 restent donc applicables à ce
code inchangé. Elle ferme les réserves du contre-audit R5 :

1. les lignes `1:5` et colonnes `A:C` de `TESTS` sont réellement figées dans
   l’OpenXML, avec cellule supérieure gauche `D6` ;
2. le validateur contrôle le volet et ses trois sélections dans l’artefact et
   la copie publique avant toute réimportation ;
3. les quinze lignes de maintenance des sources sont désormais dans un JSON
   canonique partagé par le générateur et le validateur ;
4. la preuve distingue les seize liens de la section « Sources » de l’article
   des quinze lignes complémentaires du classeur.

Le post-traitement OpenXML est nécessaire parce que l’export
`@oai/artifact-tool` ne sérialise pas les appels `freezeRows(5)` et
`freezeColumns(3)`. Il est borné à `xl/worksheets/sheet7.xml` et échoue
explicitement si la vue attendue n’existe plus.

## Génération et validation reproductibles

Les deux commandes ont été exécutées avec le runtime documentaire Codex
`26.727.11326` et son `NODE_PATH` explicite :

- `node scripts/generate-subscription-billing-kit.mjs` ;
- `node scripts/validate-subscription-billing-kit.mjs`.

Résultats :

- deux copies strictement identiques, réimportées avec dix feuilles chacune ;
- `23/23` contrôles ;
- vingt-quatre cas canoniques ;
- quinze lignes de sources, sept champs par ligne ;
- mutations TCO, seuils et rapprochement conformes ;
- quatre sabotages de formules détectés ;
- aucune erreur de formule ;
- volet OpenXML vérifié dans les deux copies :
  `xSplit=3`, `ySplit=5`, `topLeftCell=D6`, état `frozen`.

Le moteur de recalcul est `@oai/artifact-tool`, pas Microsoft Excel réel.

## Artefact et livraison HTTP locale

- taille : `40 127` octets ;
- SHA-256 :
  `66dffc0ca6766d9362ffdccd2d79c61fa6238eee239c43ed98087c39d3436474` ;
- sortie contrôlée et copie publique : hash identique ;
- HTTP local : `200` ;
- MIME :
  `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet` ;
- octets et hash servis : identiques à l’artefact contrôlé.

## Contrôles de régression

- tests ciblés après ajout de l’assertion OpenXML : `55/55` ;
- ESLint ciblé après correction : aucune erreur ni aucun avertissement ;
- les preuves R5 responsive, clavier, thèmes, outil métier et funnel concernent
  du code d’exécution inchangé ;
- aucune soumission de formulaire.

Cette BAT prouve uniquement un candidat local. Elle ne prouve ni commit, ni
push, ni déploiement, ni publication, ni indexation.

## Contre-audits de clôture

- technique : `98/100`, `GO_LOCAL_DRAFT`, aucun P0/P1 ;
- factuel : `99/100`, `GO_LOCAL_DRAFT`, aucun P0/P1/P2 ;
- UX : `100/100`, `GO_LOCAL_DRAFT`, aucun P0/P1/P2 ;
- manifeste candidat : `90/90` avant et après les lectures seules.

Le P2 technique est la frontière déjà déclarée : le classeur n’a pas été
recalculé dans Microsoft Excel réel.
