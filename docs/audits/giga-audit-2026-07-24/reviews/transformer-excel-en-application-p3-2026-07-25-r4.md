# Revalidation P3 froide R4 — `transformer-excel-en-application`

Date : 25 juillet 2026  
Révision : R4  
Relecteur : cellule indépendante `excel_p3_cold_audit`  
Autorité : manifest P2 R4 du 25 juillet 2026  
Périmètre : fermeture ciblée des deux P2 R3, sondes runtime et rapport,
horloge locale, tests, contrôle court des anciens P0/P1 et rendu SSR statique.  
Hors périmètre : navigateur/P4, interaction réelle, déploiement, production,
sitemap, indexation, commit, push et publication.

Ce rapport est le seul fichier écrit pendant cette passe. La production, la
recherche, les rapports antérieurs et les manifests sont restés strictement en
lecture seule.

## 1. Verdict exécutif

**Verdict R4 : les deux P2 R3 sont fermés ; GO P3 premium vers P4.**

```text
P0 ouverts : 0
P1 ouverts : 0
P2 ouverts : 0
Score aveugle : 98/100
Axes cœur : tous >= 9/10
Porte premium : franchie
P4 navigateur : toujours obligatoire
```

Le moteur refuse maintenant avant classement tout input ou scénario hors
schéma et toute applicabilité incompatible avec le scénario commun. Le rapport
valide profondément l'entrée et le résultat, retourne un rapport de correction
sur une structure invalide et recalcule le verdict au lieu de faire confiance à
un résultat fourni. Les sondes qui lançaient encore une voie en R3 retournent
toutes `report`, sans exception et sans candidat admissible.

La date courante est désormais rafraîchie après le prochain minuit local, au
focus et au retour d'un onglet visible. Le timer est reprogrammé et entièrement
nettoyé au démontage. Les fonctions pures se comportent correctement dans
plusieurs fuseaux et lors des changements d'heure.

Aucun nouveau P0, P1 ou P2 n'a été trouvé. Cette conclusion reste une porte vers
P4, pas une autorisation de publier ou d'indexer.

## 2. Autorité et intégrité du snapshot

Manifest :
`docs/research/manifests/transformer-excel-en-application-p2-2026-07-25-r4.sha256`

SHA-256 du manifest :
`0f3b09175d55cda6582ce5c2ba4949959949671232c6c09d34d2a007b08cac55`

Résultat de `shasum -a 256 -c` : **11/11 OK**.

| Fichier figé | SHA-256 contrôlé | État |
| --- | --- | --- |
| Rapport P3 R3 | `14dd5dd4f3f725cfaca9953502ef275786517e7a3d075177aba8b3a2201d6de1` | OK |
| Recherche et journal R4 | `913d77ad3a18d4daa88daba304cc1475c762ec7a93f297286a7b2d3449d10dda` | OK |
| Page | `00ace546e648d3ee34eeb7086df7145a1ab7620ef220257df79e1472f931ad45` | OK |
| Image sociale | `613d396aec5cf70de8b4f1020ddc668c6e23a4856aa14a6d1bccc32c45f207b7` | OK |
| Composant | `9e6fddd6eaa76e20034912ec7d32bb5a1c21f573d17a8c331a7fa96c3bfcbcd2` | OK |
| Moteur | `021b3b8e53a39671b5993d5415622afe97fb073b5e22f1aa21df39d058361de1` | OK |
| Tests moteur | `f2db05992283cf2c5f57a01ff3dbd9d78e603f69d70179b659fead147a6b692b` | OK |
| Test qualité route | `9b2361c5aeafd0e615d2dac60dd104090e9ad58df4073e4260e16af24d0005e2` | OK |
| Horloge locale | `342cda4701e08dabda0eb3088021546e75bafe20f664349c62522caa0eac3267` | OK |
| Tests horloge locale | `6635c45e8d569ea5c9418e815c006ac2be700fcbb6b4085c6aaeb481e5e54108` | OK |
| Registre | `e4762f5a80b8e54389d3ac6fea2a74408fde1106415fb98b8d58a2fe1bee3734` | OK |

Le rapport R3, le journal R4, le manifest et les fichiers R4 modifiés ont été
lus intégralement. `git diff --check` ciblé est vert.

## 3. Score aveugle R4

| Axe | Note /10 | Motif |
| --- | ---: | --- |
| Intention de recherche | 10 | Question, cinq voies et droit de ne pas investir toujours nets. |
| Aide à la décision | 10 | Scénario canonique, périmètre commun, cinq dossiers et classement défensif. |
| Pédagogie dirigeant | 9 | Progression et rapport solides ; densité du formulaire à confirmer avec des utilisateurs en P4. |
| Profondeur | 10 | Dix opérations, exploitation, sécurité, sortie, TCO, sensibilités et contre-cas préservés. |
| Preuve et exactitude | 10 | Dates, vérificateurs, inconnues, devises et résultat recalculé sont cohérents. |
| Comparaison à périmètre égal | 10 | L'applicabilité doit maintenant correspondre au scénario canonique, pas seulement être égale entre dossiers. |
| Originalité et valeur utile | 10 | Protocole reproductible et décision « ne pas investir » inchangés. |
| Style humain et anti-IA | 9 | Contrat propre à la route vert ; quelques passages restent volontairement denses. |
| Conversion et confiance | 10 | Un CTA, conflit d'intérêt explicite et aucune voie commerciale favorisée. |
| SEO et produit éditorial | 10 | Canonique, JSON-LD, OG et `noindex, nofollow` préservés. |

**Total : 98/100.**

Axes cœur — décision, pédagogie, preuve et comparaison — :
`10 / 9 / 10 / 10`. La porte premium reste franchie.

## 4. Fermeture du P2 runtime et rapport R3

### 4.1 Input, scénario et périmètre commun

`isCanonicalExcelScenario` contrôle l'identifiant et tous les champs canoniques
du scénario (`excel-decision-diagnostic.ts:898-912`).
`evaluateExcelComparison` retourne une correction avant toute voie lorsque
l'input n'est pas un objet ou que le scénario n'est pas canonique
(`:1522-1564`). L'applicabilité des opérations 4, 5 et 6 est ensuite comparée à
celle du scénario choisi (`:1583-1608`).

Sondes indépendantes :

| Entrée | Exception | Verdict | Voie | Éligibles | Candidats évalués |
| --- | --- | --- | --- | --- | --- |
| `input = null` | non | `report` | aucune | 0 | 0 |
| `input = {}` | non | `report` | aucune | 0 | 0 |
| `scenario = null` | non | `report` | aucune | 0 | 0 |
| `scenario = {}` | non | `report` | aucune | 0 | 0 |
| `scenario.id = "banana"` | non | `report` | aucune | 0 | 0 |
| `scenario.users = "twelve"` | non | `report` | aucune | 0 | 0 |
| scénario simple + dossiers centraux | non | `report` | aucune | 0 | 0 |
| cinq dossiers partageant un périmètre simple sous scénario central | non | `report` | aucune | 0 | 0 |

Un clone par valeur exact du scénario central reste accepté et peut produire le
verdict légitime attendu. Le contrôle ne dépend donc pas de l'identité de
l'objet.

### 4.2 Rapport défensif

Le constructeur valide profondément :

- scénario et préparation ;
- cinq dossiers et identité de voie ;
- dix opérations et enums ;
- condition propre et plateforme ;
- postes, base de coût et bornes ;
- structure du résultat, candidats, tableaux et verdicts.

Ces garde-fous sont visibles dans
`excel-decision-diagnostic.ts:1834-2055`. Une structure invalide retourne
`RAPPORT DE CORRECTION` (`:2066-2082`) avant tout accès imbriqué ou `.trim()`.
Sur une structure valide, le moteur recalcule le résultat
(`:2084-2100`).

Sondes indépendantes :

```text
input null / {}                         -> correction, aucune exception
scenario / readiness / dossiers null   -> correction, aucune exception
operation.reference null               -> correction, aucune exception
criterion / platform null              -> correction, aucune exception
costBasis / costInputs null             -> correction, aucune exception
operations null                         -> correction, aucune exception
result null / {} / verdict "banana"     -> correction, aucune exception
```

Chaque correction contient :

```text
RAPPORT DE CORRECTION
Décision : reporter la décision
Voie retenue : aucune
Aucun classement n’a été produit à partir de ces données.
```

Aucune ne contient `undefined`, `NaN` ou le code `launch`.

Un résultat structurellement valide mais falsifié en
`launch / custom_development` sur un input dont le vrai gagnant est Excel est
ignoré. Le rapport recalculé contient :

```text
Décision : ne pas investir
Voie retenue : Conserver Excel
```

Le P2 runtime/rapport R3 est donc **fermé**.

## 5. Fermeture du P2 date après minuit

Le composant possède maintenant un setter de date
(`ExcelDecisionDiagnostic.tsx:155-166`). L'effet client
(`:170-211`) :

1. programme un timer juste après le prochain minuit local ;
2. rafraîchit puis reprogramme ce timer ;
3. rafraîchit et reprogramme au focus ;
4. fait de même lorsque l'onglet redevient visible ;
5. annule le timer et retire les deux écouteurs au démontage.

Le calcul pur se trouve dans `excel-local-date.ts:1-14`. Les deux tests unitaires
confirment le changement de jour et la durée jusqu'au prochain minuit.

Des sondes supplémentaires ont été exécutées au même instant dans les fuseaux
UTC, Europe/Paris, New York, Honolulu et Tokyo. Le jour local varie comme attendu
et le délai mène toujours au prochain minuit du fuseau. Pour Europe/Paris :

```text
26/07/2026 00:30 en été          -> 84 600 000 ms jusqu'au minuit suivant
29/03/2026 00:30, passage été    -> 81 000 000 ms
25/10/2026 00:30, passage hiver  -> 88 200 000 ms
```

Les journées de 23 ou 25 heures sont donc traitées par l'horloge locale, sans
supposer qu'un jour vaut toujours 86 400 000 ms.

Le P2 minuit R3 est **fermé**. Un rendu statique au même instant produit
logiquement une date initiale différente en UTC et à Paris. L'hydratation réelle
serveur/client autour d'un changement de jour reste à observer en P4 ; ce P3
sans navigateur n'établit pas de régression fonctionnelle.

## 6. Rapport valide et multidevise

Les rapports valides EUR, USD et GBP ont été reconstruits séparément. Chacun
contient :

- la version `excel-decision-r4-2026-07-25` ;
- date éditoriale, date de décision et date courante ;
- préparation commune ;
- exactement cinq sections `DOSSIER —` ;
- conditions propres, références, dates et vérificateurs ;
- dix opérations par dossier ;
- formule, postes, X/I, intervalles et prochaine action ;
- devise choisie et unités physiques inchangées ;
- verdict final français.

Aucun rapport valide testé ne contient `RAPPORT DE CORRECTION`, `undefined` ou
`NaN`. Les unités USD et GBP ne réintroduisent pas l'euro.

## 7. Contrôle court des anciens P0/P1

Les fichiers page, image sociale et registre ont la même empreinte que le
snapshot R3. Les zones à haut risque restent fermées :

| Risque historique | Contrôle R4 |
| --- | --- |
| Indexation prématurée | `ready-for-human-review`, `index=false`, `follow=false` |
| État partagé entre voies | cinq dossiers distincts ; test anti-fuite vert |
| Lancement sans preuve/N/A | référence/date et motif/date toujours consommés |
| Coûts inconnus ramenés à zéro | attestation, bornes X/I et zéro justifié préservés |
| Prix Power Apps réutilisé | changement produit/plan invalide toujours la base |
| Documenté/vérifié confondus | personne et rôle toujours exigés pour `verified` |
| Devises incohérentes | unités dynamiques et comparaison multidevise bloquée |
| Seuil 80 % universel | branche réservée au logiciel standard |
| Langage, table, CTA | test route 6/6 ; 14 tables à trois colonnes ; un CTA |
| AppSheet / sortie / conflit d'intérêt | contenu de page inchangé et présent |

Le rendu SSR statique en mémoire confirme :

```text
HTML : 333 503 octets
JSON-LD : Article + BreadcrumbList
robots : index=false, follow=false
canonical : https://hagnere-code.ai/guides/transformer-excel-en-application
version R4 : présente
lead direct et opération 1 universelle : présents
H2 corrigé : présent
14/14 tables : trois colonnes
7 devises : présentes
CTA éditorial : 1
```

Aucun ancien P0/P1 ne réapparaît.

## 8. Contrôles techniques reproduits

| Contrôle | Résultat froid R4 |
| --- | --- |
| Manifest | 11/11 OK |
| Moteur seul | 107/107 |
| Horloge locale | 2/2 |
| Test propre à la route | 6/6 |
| Gouvernance des guides | 10/10 |
| Paquet Excel ciblé | **125/125** |
| ESLint ciblé | Vert |
| `tsc --noEmit` | Vert |
| `git diff --check` ciblé | Vert |
| Langue humaine globale | 30/33 ; trois échecs préexistants exclusivement sur `securite-saas-b2b` |

Le total annoncé est cohérent :
`107 moteur + 2 horloge + 6 route + 10 gouvernance = 125`.

Les quinze TCO publiés restent couverts dans les 107 tests moteur. Les
hypothèses et la page n'ont pas changé dans R4 ; aucune divergence arithmétique
nouvelle n'est observée.

## 9. Recherche de régressions nouvelles

Aucune nouvelle anomalie classable P0, P1 ou P2 n'a été trouvée.

Deux limites restent volontairement hors verdict P3 :

- la densité réelle du formulaire sur petit écran et au clavier ;
- l'hydratation et le passage réel de minuit lorsque serveur et navigateur
  n'utilisent pas le même fuseau.

Elles exigent précisément la P4 interdite dans cette passe et ne sont pas
présentées comme validées.

## 10. Porte vers P4

La porte premium fournie est satisfaite :

```text
P0 = 0
P1 = 0
P2 = 0
score = 98/100
axes cœur >= 9/10
```

**GO P3 premium vers P4.**

Le statut `ready-for-human-review` et la politique `noindex, nofollow` doivent
rester actifs jusqu'à une P4 réelle et une décision humaine. La P4 doit couvrir
les largeurs 320 à 1 600 px, clavier, focus, visibilité, retour de veille,
passage réel de minuit, fuseau/hydratation, thèmes, débordements, presse-papiers
et impression/PDF.

Décision finale :

**les deux P2 R3 sont fermés ; 0 P0, 0 P1, 0 P2, 98/100 ; porte P3 premium
franchie vers P4.**
