# BAT R3 — `facturation-abonnements-saas`

Date : 28 juillet 2026  
Périmètre : build local de production servi sur
`http://127.0.0.1:3016`  
Statut : preuve candidate avant contre-audit indépendant

## Build et page contrôlée

- commande : `NODE_OPTIONS=--max-old-space-size=8192 npx next build` ;
- compilation et TypeScript : conformes ;
- génération statique : `159/159` routes ;
- route : `/guides/facturation-abonnements-saas` ;
- contenu servi : `5 746` mots, `37 687` caractères, un `h1`, douze
  `h2`, vingt-neuf `h3`, sept tableaux et vingt-deux liens dans l’article ;
- alignement calculé de l’article : `start`.

## Responsive et alignement

Mesures prises dans le navigateur intégré après le build R3 exact.

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

La largeur du document et celle du corps sont restées égales à la largeur
testée sur les dix points. Le `h1` est resté visible.

## Clavier réel

Deux parcours ont été rejoués dans Google Chrome `150.0.7871.187`, avec de
vraies commandes clavier Playwright, aux largeurs `320` et `1440`.

| Contrôle | 320 px | 1440 px |
| --- | --- | --- |
| `Tab` jusqu’au résumé des coûts | 27 pas, focus visible | 30 pas, focus visible |
| `Enter` sur le résumé | volet ouvert | volet ouvert |
| `Tab` suivant | champ « Mise en place € » | champ « Mise en place € » |
| `Shift+Tab` | retour au résumé | retour au résumé |
| `Tab` jusqu’au groupe fiscal | 30 pas, radio inconnue | 30 pas, radio inconnue |
| `ArrowDown` | « Non requise » sélectionnée, `PASS` | « Non requise » sélectionnée, `PASS` |
| `Space` sur « Non requise » | sélection maintenue, `PASS` | sélection maintenue, `PASS` |
| `Enter` sur « Réinitialiser » | retour au `STOP` initial | retour au `STOP` initial |
| `Enter` sur le téléchargement | `kit-pilotage-facturation-saas.xlsx` | `kit-pilotage-facturation-saas.xlsx` |

Le résumé, les champs, les radios, le bouton et le lien correspondaient tous
à `:focus-visible` avec un contour calculé non nul. Captures :

- `output/facturation-abonnements-saas-2026-07-28/bat/keyboard-320.png`,
  SHA-256
  `2faf449d5a59a16b28053b910be182dad17b0f5236ee1d5fc6f3fc04fcd3cc2c` ;
- `output/facturation-abonnements-saas-2026-07-28/bat/keyboard-1440.png`,
  SHA-256
  `1dd3668dff367df645a297f956b8c864fbbd506f5693fc4d75d012452f947f74`.

## Outil métier

Parcours final rejoué dans le navigateur intégré :

1. état initial : `STOP`, car la qualification fiscale est inconnue ;
2. choix explicite « Non requise pour ce test fictif » : `PASS` ;
3. passage de `100` à `500` clients :
   `56 160 / 33 880 / 48 740 / 102 480 €` ;
4. effacement des avoirs avec sélection clavier et `Backspace` :
   `À REVOIR`, net facturé, cash net et créance conservés inconnus ;
5. remise des avoirs à `100`, puis paiement à `9 599` :
   `STOP`, écart `-1.00 EUR` ;
6. réinitialisation : scénario central et `STOP` fiscal initial restaurés.

## Thèmes

Les thèmes clair et sombre ont été inspectés à `1440 × 900`. Le thème sombre
produit un fond de corps `rgb(11, 11, 13)` et un texte
`rgb(250, 250, 250)`. Captures :

- `theme-light-1440.png`, SHA-256
  `202a46d057965863f9b70baaef13b8cd338d2616b67932afccdc963ea012fed1` ;
- `theme-dark-1440.png`, SHA-256
  `7493272623027850d0d7031280cd4f5ce7dc9e6052cf2abde16c936b638e181c`.

## CTA contextualisé

URL exacte :
`/demarrer-un-projet?service=saas&source=guide-facturation-saas`.

- le service « SaaS / application métier » est présélectionné ;
- le message d’arrivée nomme le guide « Facturation et abonnements SaaS » ;
- après sélection de « Clarifier avant de décider » et passage à l’étape 2,
  le champ « Situation actuelle » contient exactement :

> Je souhaite faire relire un cycle de facturation SaaS déjà documenté. J’ai
> réuni une offre, une facture, un paiement, un cas d’échec, la règle de droits
> d’accès, les écarts de rapprochement et les inconnues fiscales ou
> contractuelles.

Aucune donnée n’a été envoyée et le formulaire n’a pas été soumis.

## Journaux et téléchargement HTTP

- erreurs et avertissements du guide : `0` ;
- erreurs et avertissements du funnel : `0` ;
- XLSX : `HTTP 200` ;
- MIME :
  `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet` ;
- taille : `36 174` octets ;
- SHA-256 :
  `c3e11b2f8b94dd1294d176e93dab8dec12a3a02345e28bbf2fc744eb5e8b0b6e`.

## Limites

Cette BAT prouve un build, des comportements et des rendus locaux. Elle ne
prouve ni commit, ni push, ni déploiement, ni publication, ni indexation. Le
classeur a été recalculé avec `@oai/artifact-tool`, pas dans Microsoft Excel
réel.
