# BAT R4 — `facturation-abonnements-saas`

Date : 28 juillet 2026  
Périmètre : build local de production servi sur
`http://127.0.0.1:3016`  
Statut : preuve candidate avant nouveau contre-audit indépendant

## Build et contenu servi

- commande : `NODE_OPTIONS=--max-old-space-size=8192 npx next build` ;
- compilation et TypeScript : conformes ;
- génération statique : `159/159` routes ;
- route : `/guides/facturation-abonnements-saas` ;
- contenu visible de l’article : `5 707` mots, `37 391` caractères, un `h1`,
  douze `h2`, trente `h3`, sept tableaux et vingt-deux liens ;
- vingt-quatre cas de recette visibles ;
- un seul landmark `article` : les quatre résultats TCO utilisent des `div`
  sémantiques ordinaires ;
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

La largeur du document et celle du corps sont restées égales au viewport sur
les dix mesures. Le `h1` est resté visible.

## Clavier réel

Le parcours a été rejoué dans Google Chrome `150.0.7871.187` avec de vraies
commandes clavier Playwright, aux largeurs `320` et `1 440`.

| Contrôle | 320 px | 1440 px |
| --- | --- | --- |
| `Tab` jusqu’au résumé des coûts | 27 pas, focus visible | 30 pas, focus visible |
| `Enter` sur le résumé | volet ouvert | volet ouvert |
| `Tab` suivant | champ « Mise en place € » | champ « Mise en place € » |
| `Shift+Tab` | retour au résumé | retour au résumé |
| `Tab` jusqu’au groupe fiscal | 30 pas, radio inconnue | 30 pas, radio inconnue |
| `ArrowDown` | « Non requise » sélectionnée, `PASS` | « Non requise » sélectionnée, `PASS` |
| `Space` | sélection maintenue, `PASS` | sélection maintenue, `PASS` |
| `Tab` jusqu’à la remise à zéro | 4 pas | 4 pas |
| `Enter` sur « Réinitialiser » | retour au `STOP` initial | retour au `STOP` initial |
| `Tab` puis `Enter` sur le XLSX | téléchargement exact | téléchargement exact |

Captures du focus visible :

- `bat/keyboard-r4-320.png`, SHA-256
  `e79938993217e0bc2b356afb56740417cf6e1b8384f51621f0e1a3f81c176a14` ;
- `bat/keyboard-r4-1440.png`, SHA-256
  `c67fe91c01e6ec00bcab76f0ad1f8c9dd9f670034de65b329aaf46a0398d810c`.

## Outil métier

Parcours final dans le navigateur intégré :

1. état initial : `STOP`, qualification fiscale inconnue ;
2. choix explicite « Non requise pour ce test fictif » : `PASS` ;
3. passage de `100` à `500` clients :
   `56 160 / 33 880 / 48 740 / 102 480 €` ;
4. effacement des avoirs avec sélection clavier et `Backspace` :
   `À REVOIR`, valeurs dérivées inconnues ;
5. remise des avoirs à `100`, puis paiement à `9 599` :
   `STOP`, écart `-1.00 EUR`, créance calculée `301 €` ;
6. réinitialisation : scénario central et `STOP` fiscal restaurés.

Les tests unitaires adversariaux couvrent en plus la comparaison du snapshot
réel derrière l’empreinte déclarée, les changements de montant, devise, type
et date, ainsi que les débordements du grand livre et du rapprochement.

## Thèmes

Les thèmes ont été inspectés à `1 440 × 900` après la transition :

- clair : fond `rgb(255, 255, 255)`, texte `rgb(10, 10, 10)` ;
- sombre : fond `rgb(11, 11, 13)`, texte `rgb(250, 250, 250)`, titre de
  l’outil `rgb(255, 255, 255)`.

Captures :

- `bat/theme-r4-light-1440.png`, SHA-256
  `e0ff426225b7cc711d7ebc667337f70241ac96684b0911613edd27c5620746de` ;
- `bat/theme-r4-dark-1440.png`, SHA-256
  `7597694c785fe286c70495d92ac06aa94dd56065883b141bbb20cdcab0ee8a5a`.

## CTA contextualisé

URL :
`/demarrer-un-projet?service=saas&source=guide-facturation-saas`.

- le service « SaaS / application métier » est présélectionné ;
- le message d’arrivée nomme le guide ;
- après « Clarifier avant de décider », l’étape 2 contient exactement :

> Je souhaite faire relire un cycle de facturation SaaS déjà documenté. J’ai
> réuni une offre, une facture, un paiement, un cas d’échec, la règle de droits
> d’accès, les écarts de rapprochement et les inconnues fiscales ou
> contractuelles.

Le formulaire n’a pas été soumis.

## Journaux, téléchargement et classeur

- erreurs ou avertissements du guide : `0` ;
- erreurs ou avertissements du funnel : `0` ;
- événement navigateur de téléchargement : reçu ;
- XLSX : `HTTP 200` ;
- MIME :
  `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet` ;
- taille : `37 765` octets ;
- SHA-256 :
  `3e036382033ed592ef66ccd67c540575ab59b59102650b8c58a207e63b5771ed`.

Deux copies du classeur ont été réimportées avec dix feuilles chacune. Les
`23/23` contrôles, les vingt-quatre tests, les douze sources, les mutations de
TCO/seuil/rapprochement, les quatre sabotages et le scan d’erreurs de formule
sont conformes. Le moteur de recalcul est `@oai/artifact-tool`, pas Microsoft
Excel réel.

## Limites

Cette BAT prouve un build, des interactions, des calculs et des rendus locaux.
Elle ne prouve ni commit, ni push, ni déploiement, ni publication, ni
indexation.
