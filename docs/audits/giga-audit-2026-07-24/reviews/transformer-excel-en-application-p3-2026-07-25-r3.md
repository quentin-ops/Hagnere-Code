# Contre-audit P3 froid R3 — `transformer-excel-en-application`

Date : 25 juillet 2026  
Révision : R3  
Relecteur : cellule indépendante `excel_p3_cold_audit`  
Autorité : manifest P2 R3 du 25 juillet 2026  
Périmètre : recherche figée, rapport P3 R2, page, métadonnées, image sociale,
composant, moteur, tests, registre, calculs, branches, preuve, pédagogie, SEO et
conversion.  
Hors périmètre : P4 navigateur réel, multi-largeurs, interactions clavier ou
pointeur, presse-papiers système, impression/PDF réelle, déploiement, route de
production, sitemap et indexation effective.

Ce rapport est le seul fichier écrit pendant cette passe. Le rapport R2, le
journal, le manifest et les neuf fichiers figés ont été lus et contrôlés sans
modification.

## 1. Verdict exécutif

**Verdict P3 R3 : porte premium franchie, sous réserve de P4.**

```text
P0 ouverts : 0
P1 ouverts : 0
P2 ouverts : 2
Score aveugle : 96/100
Axes cœur : tous >= 9/10
Porte premium : franchie
Publication : non autorisée par ce P3 ; garder noindex jusqu'à P4 et décision humaine
```

Les cinq P1 du rapport R2 sont fermés. La page s'adresse directement au lecteur,
la date éditoriale est séparée de la date de décision, le niveau « vérifié »
exige un vérificateur identifié avec son rôle, les unités suivent la devise, et
le seuil de 80 % ne concerne plus que le logiciel standard. La table à quatre
colonnes est ramenée à trois. Les sondes d'enum, de booléens, de dates et de
devise sont désormais correctement bloquées par l'évaluateur.

La correction runtime R2 n'est toutefois pas exhaustive. Un `scenario` hors
schéma peut encore produire `launch`, et le constructeur de rapport lève une
exception sur plusieurs objets invalides. Ce résiduel reste P2 car l'interface
actuelle fournit un scénario typé et ne fabrique pas ces objets. Un second P2
concerne la date courante, calculée une seule fois au montage : un onglet gardé
ouvert après minuit conserve le plafond de la veille jusqu'au rechargement.

Ces P2 n'enfreignent pas la règle de porte fournie
`P0=0 / P1=0 / score>=90 / axes cœur>=9`. Ils doivent néanmoins être corrigés
avant de présenter le moteur exporté comme entièrement défensif.

## 2. Autorité du snapshot et intégrité

Manifest :
`docs/research/manifests/transformer-excel-en-application-p2-2026-07-25-r3.sha256`

SHA-256 du manifest :
`13893f68394e4184de9fbfc3453e07ee1c503d1214e2dda09441df6a34ca8919`

Résultat de `shasum -a 256 -c` : **9/9 OK**.

| Fichier figé | SHA-256 contrôlé | État |
| --- | --- | --- |
| Rapport P3 R2 | `6a2d055e44f1a181131e254dd156dc7709144eeca99438c9c6dc9cd9dcf9c5e6` | OK |
| Recherche et journal R3 | `7521b66f8f73c25aab5a94b5ef3f9a4edfee70e333c8c86accaebe1fada05f8d` | OK |
| Page | `00ace546e648d3ee34eeb7086df7145a1ab7620ef220257df79e1472f931ad45` | OK |
| Image sociale | `613d396aec5cf70de8b4f1020ddc668c6e23a4856aa14a6d1bccc32c45f207b7` | OK |
| Composant | `bb81291800f8d8d10626a1538122786ce32a85e7da7e3dc867fd32ac68d0d3a7` | OK |
| Moteur | `fc8d463792bdf79856aab7da36c09b948ea39ed5c2c618fa0dc70a00e4434e90` | OK |
| Tests du moteur | `54cfd160fa999712b61eebda4d127bbc4f200c562e8de86debc90a4ecc150e2f` | OK |
| Test qualité propre à la route | `bf026764887a11c24e642c0693a62669d40ad64f2b37d229737b731c5b0dc086` | OK |
| Registre | `e4762f5a80b8e54389d3ac6fea2a74408fde1106415fb98b8d58a2fe1bee3734` | OK |

`git diff --check` ciblé est vert sur les fichiers figés et le manifest. Les
modifications déjà présentes dans l'arbre appartiennent au snapshot audité.

## 3. Score aveugle sur dix axes

Le score ci-dessous a été refait depuis le snapshot, sans ajouter mécaniquement
les points retirés en R2.

| Axe | Note /10 | Motif |
| --- | ---: | --- |
| Intention de recherche | 10 | Question dirigeant nette, cinq voies et droit explicite de garder Excel, reporter ou arrêter. |
| Aide à la décision | 9 | Dix opérations, cinq dossiers et verdicts falsifiables ; le scénario runtime reste insuffisamment validé hors interface. |
| Pédagogie dirigeant | 9 | Progression, définitions, scène fictive, plan en trente jours et export autonome sur entrée valide ; charge cognitive à confirmer en P4. |
| Profondeur | 10 | Données, opérations, exploitation, sécurité, sortie, AppSheet, TCO, sensibilités, seuils et contre-cas sont substantiels. |
| Preuve et exactitude | 9 | Dates séparées, preuve attribuée, inconnues préservées et calculs exacts ; le rapport hors schéma peut encore lever. |
| Comparaison à périmètre égal | 10 | Cinq dossiers indépendants, applicabilité commune, devises communes et intervalles non chevauchants exigés. |
| Originalité et valeur utile | 10 | Protocole reproductible, cinq dossiers et capacité de conclure « ne pas investir ». |
| Style humain et anti-IA | 9 | Garde-fous propres à la route verts ; quelques passages restent denses mais aucune anomalie majeure. |
| Conversion et confiance | 10 | Un CTA éditorial, conflit d'intérêt explicite et aucune préférence forcée pour le sur-mesure. |
| SEO et produit éditorial | 10 | Canonique, Article, BreadcrumbList, OG et garde `noindex, nofollow` cohérents sur le rendu statique. |

**Total : 96/100.**

Axes cœur retenus — aide à la décision, pédagogie, preuve et comparaison — :
`9 / 9 / 9 / 10`. La porte premium demandée est donc franchie.

## 4. Rejeu indépendant des sept incidents R2

| Incident R2 | Statut R3 | Preuve froide |
| --- | --- | --- |
| P1-R1-04 — lead/H2 non conformes | **FERMÉ** | Lead direct `page.tsx:240-248`, H2 « Testez dix opérations avant de choisir » `:431`, test propre à la route 5/5 et rendu SSR conformes. |
| P1-R2-01 — date éditoriale utilisée comme plafond permanent | **FERMÉ** | Source figée et dates décision/courante distinctes ; validation ISO `excel-decision-diagnostic.ts:919-949`, moteur `:1191-1197`, champs UI `ExcelDecisionDiagnostic.tsx:400-428`. Une décision du 15 août avec pièces des 9–12 août est `eligible` le 20 août. |
| P1-R2-02 — documenté/vérifié synonymes | **FERMÉ** | `hasDocumentedEvidence` exige un vérificateur significatif pour `verified` (`excel-decision-diagnostic.ts:902-967`) ; champs et définitions UI présents ; vérificateurs exportés. Vide ou « Alice Dupont » donne `report`, « Luc Martin, contrôle interne » donne `eligible`; `documented` reste admissible sans vérificateur. |
| P1-R2-03 — unités euro dans un dossier USD/GBP | **FERMÉ** | Unités dérivées de la devise, sept devises autorisées ; sondes EUR, USD et GBP cohérentes dans les champs et l'export. `BANANA` produit `report`. |
| P1-R2-04 — seuil 80 % appliqué à tous | **FERMÉ** | Texte J11–15 corrigé `page.tsx:1206-1209`; branche moteur limitée à `standard_software` `excel-decision-diagnostic.ts:1447-1463`. Standard 79 = `stop`, standard 80 = `eligible`, sur-mesure 79 = `eligible`. Toutes les opérations applicables et la condition propre restent obligatoires. |
| P2-R2-01 — table à quatre colonnes | **FERMÉ** | Table `Variable / Hypothèse / Valeur calculée` `page.tsx:1069-1094`; test route vert et SSR : 14/14 tables ont trois colonnes. |
| P2-R2-02 — schéma runtime non défendu | **PARTIELLEMENT FERMÉ, reste P2** | Enums, booléens, dates, voie, devise et plateforme sont maintenant bloqués sans exception par l'évaluateur. Mais `scenario` n'est pas validé et le constructeur de rapport n'est pas sûr sur objet hors schéma ; détails en section 6. |

Résultat : les **5 P1 R2 sont fermés**, un P2 est fermé et un P2 est
seulement partiellement fermé.

## 5. Régressions R1 recherchées

Les treize incidents R1 ont été rejoués sur leurs zones à risque, sans reprendre
leur statut du journal.

| Incident R1 | Statut R3 |
| --- | --- |
| P0-01 — garde robots absent | **Fermé** : registre en revue et metadata `index=false, follow=false`. |
| P0-02 — plateforme libre gardant un prix Power Apps | **Fermé** : changement type/produit/plan invalide coûts et attestation ; 17,30 reste réservé au preset exact. |
| P0-03 — état partagé entre candidats | **Fermé** : cinq dossiers et objets d'opérations distincts ; test anti-fuite vert. |
| P0-04 — lancement sans preuve ou N/A motivé | **Fermé** : référence/date et motif/date N/A consommés ; opération applicable non documentée bloque. |
| P0-05 — base `"x"` et inconnues transformées en zéro | **Fermé** : base structurée, confirmation stricte, bornes X/I et justification des zéros. |
| P1-01 — coûts cachés / promesse de coûts complets | **Fermé** : dix postes visibles, formule, source, date, devise, couverture et exclusions ; métadescription dit « estimations explicites ». |
| P1-02 — copie/impression incomplète | **Fermé sur entrée valide** : même rapport autonome pour copie et impression, cinq dossiers, dates, preuves et coûts ; P4 visuelle reste requise. |
| P1-03 — deux CTA commerciaux | **Fermé** : une seule occurrence éditoriale `GuideInlineCTA`. |
| P1-04 — hero/ouverture non lecteurs | **Fermé** : hero et lead directs, H2 conforme, test propre à la route vert. |
| P1-05 — AppSheet incomplet | **Fermé** : prix/plans, population, limites, audit, transfert, filtre, lecture de feuille, historique et sortie couverts. |
| P2-01 — couverture NaN/hors bornes | **Fermé** : valeurs non finies et hors 0–100 bloquées. |
| P2-02 — deux semaines contre jours 1–10 | **Fermé** : « dix jours ouvrés (deux semaines) ». |
| P2-03 — statuts anglais exportés | **Fermé** : rapport français, aucun code de verdict/statut anglais sur le cas testé. |

Aucun ancien P0 ou P1 ne réapparaît.

## 6. Incidents ouverts R3

### P2-R2-02b — validation runtime encore incomplète sur le scénario et l'export

`evaluateExcelComparison` transforme prudemment `input` et `dossiers` en records
(`excel-decision-diagnostic.ts:1506-1515`), mais ne valide jamais
`input.scenario`. Le scénario n'est ensuite utilisé que pour le rapport. Avec
cinq dossiers complets et valides, les sondes suivantes donnent toutes :

```text
exception : non
verdict   : launch
voie      : industrialize_excel
```

Entrées testées :

```text
scenario = null
scenario = {}
scenario.id = "banana"
scenario simple avec dossiers centraux
scenario.users = "twelve"
```

Un input hors schéma peut donc encore produire `launch`, contrairement au
contrat « entrée invalide = jamais eligible/launch ».

La seconde manifestation est `buildExcelDecisionReport`
(`excel-decision-diagnostic.ts:1801-1917`). La fonction accède directement à
`input.decisionDate`, `input.scenario.label`, `input.readiness.*`,
`input.dossiers[pathway]` et appelle `.trim()` sur les champs imbriqués. Sondes :

```text
buildExcelDecisionReport(null)                 -> TypeError
buildExcelDecisionReport({})                   -> TypeError
scenario = null, dossiers valides              -> TypeError
readiness = null, dossiers valides             -> TypeError
dossiers = null                                -> TypeError
operation.reference = null                     -> TypeError sur trim
```

L'évaluateur est bien sûr pour les attaques R2 demandées, mais la bibliothèque
exportée n'est donc pas encore défensive de bout en bout, notamment avant
export. L'interface typée ne génère pas ces objets : **P2**, pas P0/P1.

Correction minimale :

1. valider `scenario` contre `EXCEL_SCENARIO_IDS` et ses champs attendus avant
   tout classement ;
2. vérifier la cohérence scénario/dossiers nécessaire au périmètre commun ;
3. faire consommer au rapport un résultat normalisé, ou lui faire retourner un
   rapport de correction au lieu de lever ;
4. ajouter des tests négatifs sur `scenario`, `input`, `result` et les champs
   imbriqués du rapport.

### P2-R3-01 — date courante figée pendant toute la vie de l'onglet

`currentLocalIsoDate` calcule la date locale (`ExcelDecisionDiagnostic.tsx:
151-157`), puis `currentDate` est créée avec
`const [currentDate] = useState(currentLocalIsoDate)` sans setter (`:159-170`).
Tous les plafonds de date et le moteur réutilisent ensuite cette valeur.

Un onglet ouvert avant minuit et utilisé après minuit conserve donc la date de
la veille. Une pièce ou une décision du nouveau jour est refusée jusqu'au
rechargement. Le moteur injecté reste déterministe ; le défaut concerne le cycle
de vie de l'interface.

Correction minimale : recalculer la date au retour de visibilité/focus et après
le prochain minuit, puis réévaluer la décision. Le risque de fuseau/hydratation
serveur-client doit être contrôlé en P4.

## 7. Sondes adversariales et branches de décision

| Sonde | Résultat R3 |
| --- | --- |
| Date postérieure au 25/07 mais antérieure à la décision | `eligible` |
| Décision future, date `25/08/2026`, 30 février, date courante mal formée | `report`, aucune exception |
| Source de coût postérieure à la décision | `report` |
| Preuve ou N/A postérieur à la décision | `report` |
| `documented` avec vérificateur vide | admissible si référence/date valides |
| `verified` avec vérificateur vide ou non significatif | `report` |
| `verified` avec personne et rôle | admissible |
| Opération 1 documentée en échec | `stop` |
| Statut ou niveau de preuve hors enum | `report`, aucune exception |
| Devise `BANANA` sur les cinq dossiers | `report`, jamais `launch` |
| Type de plateforme hors enum | `report` |
| Readiness `"false"` sous forme de chaîne | `report` |
| Applicabilité conditionnelle `null` ou `"false"` | `report` |
| Critère propre `"false"` sous forme de chaîne | `report` |
| Dossier sous mauvaise clé / candidat absent / applicabilité divergente | `report` |
| Couverture standard 79 / 80 | `stop` / `eligible` |
| Couverture 79 sur le sur-mesure | `eligible` si toutes les portes passent |
| Garder Excel gagnant | `do_not_invest` |
| Égalité ou intervalles chevauchants | `report` |
| Tous les candidats documentés et éliminés | `stop` |
| Cinq gagnants forcés tour à tour | chaque voie peut gagner ; Excel donne `do_not_invest`, les quatre autres `launch` |
| Input `scenario` invalide avec dossiers valides | **défaut : `launch`** |
| Rapport sur input hors schéma | **défaut : TypeError** |

L'opération 1 est bien universelle dans le modèle et citée dès l'introduction de
la page (`page.tsx:250-259`). Le plan J11–15 et le moteur ne permettent pas à un
score de 80 % de compenser une opération applicable en échec.

## 8. Recalcul indépendant des chiffres

La formule a été recodée séparément sans appeler le calculateur de production :

```text
mise en place
+ fixe mensuel × mois
+ licence × utilisateurs × mois
+ administration × coût horaire × mois
+ maintenance annuelle × années
+ formation/intégrations/sortie
+ résiduel hebdomadaire × semaines ouvrées × années × coût horaire
```

### 8.1 Quinze TCO à 48 mois

| Scénario | Garder Excel | Industrialiser | Standard | Plateforme | Sur-mesure | Verdict |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| Simple | 13 960 € | 11 780 € | 17 088 € | 27 700 € | 61 656 € | 5/5 exacts |
| Central | 58 160 € | 34 800 € | 46 520 € | 62 404,80 € | 97 640 € | 5/5 exacts |
| Exigeant | 115 320 € | 83 160 € | 124 440 € | 150 640 € | 212 280 € | 5/5 exacts |

Résultat : **15/15 exacts**.

### 8.2 Horizons, sensibilités et seuils

| Série | Recalcul indépendant | Verdict |
| --- | --- | --- |
| Horizon central 24 mois — industrialiser / standard / plateforme / sur-mesure | 22 400 / 31 760 / 43 702,40 / 75 320 € | Exact |
| Temps initial 1 / 4 / 8 h par semaine | 8 640 / 34 560 / 69 120 € | Exact |
| Coût 30 / 45 / 60 €/h pour 4 h par semaine | 23 040 / 34 560 / 46 080 € | Exact |
| Licences 5 / 12 / 25 × 17,30 × 48 | 4 152 / 9 964,80 / 20 760 € | Exact |
| Administration 2 / 6 / 12 h par mois | 4 320 / 12 960 / 25 920 € | Exact |
| Garder vs industrialiser, simple | 0,747685 h/semaine = 44,861 min | Arrondi publié exact |
| Plateforme vs standard, central | 3 971,20 €/an | Exact |
| Sur-mesure vs standard, central | 12 780 €/an | Exact |
| Sur-mesure vs standard, exigeant | 21 960 €/an | Exact |
| Sur-mesure vs plateforme, exigeant | 15 410 €/an | Exact |
| Standard vs industrialiser, central | 2 930 €/an | Exact |

### 8.3 Jeu de données continu

| Étape | Lignes | Somme | Verdict |
| --- | ---: | ---: | --- |
| Somme 1 à 3 050 | 3 050 | 4 652 775 | Exact |
| Ajouter 3 051 | 3 051 | 4 655 826 | Exact |
| Corriger 42 en 142 | 3 051 | 4 655 926 | Exact |
| Importer 95 lignes à 1 | 3 146 | 4 656 021 | Exact |
| Supprimer 2 501 | 3 145 | 4 653 520 | Exact |
| Restaurer 2 501 | 3 146 | 4 656 021 | Exact |

Les bornes 0, 1, 2 000, 2 001, négatif, décimal, `NaN` et `Infinity` sont
couvertes par les tests et classées sans transformer 2 000 en capacité maximale
d'un produit.

## 9. Export autonome sur entrée valide

Les rapports EUR, USD et GBP testés contiennent chacun :

- version R3 ;
- date éditoriale du 25 juillet 2026 ;
- date de décision et date courante distinctes ;
- préparation commune ;
- exactement cinq sections `DOSSIER —` ;
- conditions propres, opérations, références, dates et vérificateurs ;
- formule, dix postes, unités physiques et monétaires cohérentes ;
- X/I, intervalles, verdict et prochaines actions.

Aucun `undefined`, `NaN` ou code de statut/verdict anglais n'est émis sur ces cas
valides. Le même texte alimente copie et impression. L'impression visuelle et le
presse-papiers système restent hors P3.

## 10. Contrôles techniques et SSR en mémoire

| Contrôle | Résultat |
| --- | --- |
| Manifest | 9/9 empreintes OK |
| Tests moteur seuls | **78/78** |
| Tests moteur + route + gouvernance | **93/93** |
| Test propre à la route Excel | **5/5** |
| Gouvernance des guides seule | **10/10** |
| Langue humaine globale | 30/33 ; trois échecs exclusivement sur `securite-saas-b2b` |
| ESLint ciblé page/OG/composant/moteur/tests/registre | Vert |
| `tsc --noEmit` | Vert |
| `git diff --check` ciblé | Vert |

Le journal R3 annonce `77/77` tests moteur (`docs/research/
transformer-excel-en-application.md:1900-1906`), alors que le snapshot figé en
exécute **78/78**. Le total combiné 93/93 annoncé est exact
(`78 + 5 + 10 = 93`). Il s'agit d'un écart de traçabilité non bloquant, pas d'un
échec de test.

La page a été rendue statiquement en mémoire avec React, sans navigateur et sans
écrire de build :

```text
HTML statique : 333 503 octets
JSON-LD : Article + BreadcrumbList
metadata.robots : index=false, follow=false
canonical : https://hagnere-code.ai/guides/transformer-excel-en-application
lead direct : présent
opération 1 universelle en introduction : présente
H2 corrigé : présent
diagnostic cinq voies : présent
devises EUR/USD/GBP/CHF/CAD/AUD/JPY : présentes
tables éditoriales : 14/14 à trois colonnes
règle exacte des 80 % : présente
CTA éditorial : 1
```

Ce rendu confirme la structure SSR, pas son ergonomie réelle.

## 11. Limites P4 obligatoires

Aucun navigateur réel n'a été utilisé. Restent à vérifier :

- largeurs 320, 360, 390, 430, 640, 768, 1024, 1280, 1440 et 1600 px ;
- clavier, focus, ordre de tabulation et annonces `aria-live` ;
- conservation visible des cinq dossiers et absence de fuite lors des
  allers-retours ;
- champs de date, minuit, retour de veille et fuseau serveur/client ;
- erreurs, selecteurs, tableaux, onglets et débordements sur mobile ;
- thèmes clair/sombre, zoom et polices chargées ;
- copie réelle dans le presse-papiers ;
- pagination, coupures et exhaustivité de l'impression/PDF.

La densité du diagnostic reste un risque d'usage à observer : cinq dossiers,
dix opérations, preuves datées, critère propre, dix coûts et bornes X/I. La
segmentation est bonne dans le code, mais seul un test réel dira si un dirigeant
comprend ce qui est commun, ce qui est propre à une voie et pourquoi un dossier
incomplet bloque le classement.

## 12. Conclusion et porte de sortie

Le snapshot R3 ferme tous les P0/P1 historiques et franchit la porte premium
définie :

```text
P0 = 0
P1 = 0
score = 96/100
axes cœur = 9/10 minimum
```

**GO P3 premium vers P4**, sans autorisation implicite de publier, déployer ou
indexer. Le statut `ready-for-human-review` et `noindex, nofollow` doivent rester
en place jusqu'à la décision humaine et au P4.

Avant ou pendant P4, corriger de préférence :

1. la validation runtime du scénario et la robustesse du constructeur de
   rapport ;
2. le rafraîchissement de la date courante après minuit/retour de veille ;
3. le décompte `77/77` du journal lors d'une prochaine mise à jour autorisée.

Décision finale de cette passe :

**porte P3 premium franchie — 0 P0, 0 P1, 2 P2, 96/100 ; P4 réelle encore
obligatoire.**
