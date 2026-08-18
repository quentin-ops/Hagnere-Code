# BAT R5 — `facturation-abonnements-saas`

Date : 28 juillet 2026  
Périmètre : build local de production servi sur
`http://127.0.0.1:3016`  
Statut : preuve candidate avant nouveau contre-audit indépendant

> Rectificatif du contre-audit : l’export R5 ne sérialisait pas le volet figé
> de la feuille `TESTS`, malgré l’appel du générateur. Cette affirmation R5 est
> donc invalide. Le défaut et son contrôle OpenXML sont corrigés dans la BAT R6.

## Corrections issues des contre-audits R4

La R5 ferme les quatre P1 cumulés des audits R4 :

1. les badges du hero affichent réellement `07 / 24 / 24` ;
2. l’article et le XLSX partagent vingt-quatre identifiants et cas canoniques ;
3. l’explication Planor indique la créance correcte de `350 €` sans l’avoir ;
4. le validateur compare les quinze lignes de sources, champ par champ, dans
   les deux copies réimportées du classeur.

Les P2 utiles sont aussi traités :

- `#reponse` est désormais un vrai `h2` ;
- « du devis à l’encaissement (quote-to-cash) » est traduit dans le XLSX ;
- les colonnes `ID` et `Cas` devaient rester figées dans la feuille `TESTS`,
  mais le contre-audit a démontré que l’export R5 ne sérialisait pas ce volet ;
- les sorties du rapprochement affichent les centimes ;
- New York, le Texas et la Californie illustrent, à partir d’administrations
  fiscales d’États, trois traitements volontairement contradictoires du SaaS.

## Build et contenu servi

- commande : `npx next build` ;
- compilation et TypeScript du build : conformes ;
- génération statique : `159/159` routes ;
- route : `/guides/facturation-abonnements-saas` ;
- contenu visible de l’article : `6 068` mots, `39 779` caractères, un `h1`,
  treize `h2`, trente `h3`, huit tableaux et vingt-cinq liens ;
- vingt-quatre cas de recette canoniques visibles ;
- seize liens dans la section « Sources » du guide et quinze lignes de
  maintenance complémentaires, volontairement distinctes, dans le classeur ;
- un seul landmark `article` ;
- article, `h1` et paragraphes calculés avec `text-align: start`.

## Responsive

| Largeur | Largeur article | Bord gauche | Débordement horizontal | Article / h1 / paragraphe |
| ---: | ---: | ---: | --- | --- |
| 320 | 288 | 16 | non | `start / start / start` |
| 360 | 328 | 16 | non | `start / start / start` |
| 390 | 358 | 16 | non | `start / start / start` |
| 430 | 398 | 16 | non | `start / start / start` |
| 640 | 608 | 16 | non | `start / start / start` |
| 768 | 736 | 16 | non | `start / start / start` |
| 1024 | 760 | 16 | non | `start / start / start` |
| 1280 | 760 | 66 | non | `start / start / start` |
| 1440 | 760 | 146 | non | `start / start / start` |
| 1600 | 760 | 226 | non | `start / start / start` |

Le document et le corps restent égaux au viewport après stabilisation du
layout sur les dix mesures.

## Clavier réel

Le parcours a été rejoué dans Google Chrome `150.0.7871.187` aux largeurs
`320` et `1 440`.

| Contrôle | 320 px | 1440 px |
| --- | --- | --- |
| `Tab` jusqu’au résumé des coûts | 27 pas, focus visible | 30 pas, focus visible |
| `Enter` sur le résumé | volet ouvert | volet ouvert |
| `Tab` suivant | champ « Mise en place € » | champ « Mise en place € » |
| `Shift+Tab` | retour au résumé | retour au résumé |
| `Tab` jusqu’au groupe fiscal | 30 pas | 30 pas |
| `ArrowDown` | « Non requise », `PASS` | « Non requise », `PASS` |
| `Space` | sélection maintenue | sélection maintenue |
| remise à zéro | 4 pas, retour `STOP` | 4 pas, retour `STOP` |
| téléchargement XLSX | nom exact | nom exact |

Captures :

- `bat/keyboard-r5-320.png`, SHA-256
  `304d65f00c26543aa4d35ecd5ba834da9d5f99b413f2f93765bb6944515bea47` ;
- `bat/keyboard-r5-1440.png`, SHA-256
  `1c0f2e802b539e9c5aa2885db83a25b548227d5a215ced73be51b4f4907fe9b4`.

## Outil métier

Parcours dans le navigateur intégré :

1. qualification fiscale inconnue : `STOP` ;
2. choix explicite « Non requise » : `PASS` ;
3. avoir vidé au clavier : `À REVOIR`, trois sorties dérivées inconnues ;
4. avoir restauré puis paiement à `9 599` : `STOP`, cash net
   `9 599,00 €`, créance calculée `301,00 €` pour `300,00 €` observés ;
5. remise à zéro : `STOP` fiscal initial.

Les `33/33` tests de l’oracle couvrent aussi snapshot réel et empreinte
déclarée, changements de montant, devise, type ou date, ordre, devise,
clôture et débordements numériques.

## Thèmes

- clair : fond `rgb(255, 255, 255)`, texte `rgb(10, 10, 10)` ;
- sombre : fond `rgb(11, 11, 13)`, texte `rgb(250, 250, 250)`, titre de
  l’outil `rgb(255, 255, 255)`.

Captures :

- `bat/theme-r5-light-1440.png`, SHA-256
  `42007294ad4aab42e33e000cfb868cca51b77338bdb45b9538d885070df6c741` ;
- `bat/theme-r5-dark-1440.png`, SHA-256
  `d715930feba3e88d1c18789bd44cded87d31f1f3d38640666e9db4b099d82250`.

## CTA contextualisé

URL :
`/demarrer-un-projet?service=saas&source=guide-facturation-saas`.

- service SaaS présélectionné ;
- objectif « Clarifier avant de décider » choisi ;
- étape 2 atteinte avec la situation exacte préremplie ;
- aucun formulaire soumis.

## Téléchargement et classeur

- `HTTP 200` ;
- MIME :
  `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet` ;
- taille : `38 392` octets ;
- SHA-256 :
  `5f67ddf063dd77854f03c6436b90d46787be5fb4e2671fd61647c25563ebe649`.

Deux copies ont été réimportées avec dix feuilles chacune. Sont conformes :

- `23/23` contrôles ;
- vingt-quatre cas canoniques identiques à l’article ;
- quinze lignes de sources exactes dans les deux copies ;
- mutations de TCO, seuils et rapprochement ;
- quatre sabotages de formules détectés ;
- aucune erreur de formule.

Le moteur de recalcul est `@oai/artifact-tool`, pas Microsoft Excel réel.

## Contrôles ciblés et frontières globales

- tests ciblés : `55/55` ;
- ESLint ciblé : aucune erreur ni aucun avertissement ;
- contrôle global SEO : `962/964`, avec deux défauts historiques de
  gouvernance éditoriale hors de ce guide ;
- `tsc --noEmit` global : une erreur historique dans
  `SaasValidationDecisionJournal.test.tsx`, hors de ce guide ;
- journaux navigateur guide et funnel : aucune erreur ni aucun avertissement.

Cette BAT prouve un build, des interactions, des calculs et des rendus locaux.
Elle ne prouve ni commit, ni push, ni déploiement, ni publication, ni
indexation.
