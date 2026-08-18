# Contre-audit P3 froid R2 — `transformer-excel-en-application`

Date : 25 juillet 2026  
Révision : R2  
Relecteur : cellule indépendante `excel_p3_cold_audit`  
Snapshot : manifest P2 R2 du 25 juillet 2026  
Périmètre : recherche, page, métadonnées, image sociale, composant, moteur,
tests, registre, calculs, branches, preuve, pédagogie, SEO et conversion.  
Hors périmètre : P4 navigateur réel, multi-largeurs, interactions au pointeur ou
au clavier, presse-papiers système, impression papier/PDF réelle, déploiement,
route de production et indexation effective.

Ce rapport est le seul fichier écrit pendant cette contre-audit. Les huit
fichiers du manifest, le journal de recherche et R1 ont été lus intégralement et
n'ont pas été modifiés.

## 1. Verdict exécutif

**Verdict P3 R2 : NO-GO premium.**

```text
P0 ouverts : 0
P1 ouverts : 5
P2 ouverts : 2
Score : 84/100
Décision : corriger, produire un snapshot R3, refaire un P3 ciblé, puis P4
```

Les cinq P0 de R1 sont neutralisés dans leur risque bloquant : le guide en revue
est bien `noindex`, les cinq dossiers sont séparés, la plateforme et son plan
invalident les coûts, les preuves et motifs N/A sont consommés, et la base de
coût est structurée. Les quinze TCO, les horizons à 24 mois, les sensibilités,
les seuils et le cas de données ont tous été recalculés avec succès.

Le seuil premium n'est néanmoins pas franchi. L'outil refuse toute pièce
postérieure au 25 juillet 2026, présente « documenté » et « vérifié » comme deux
niveaux alors qu'ils ont la même force logique, et affiche des unités en euros
pour des dossiers sélectionnés en USD ou GBP. Le plan d'action réintroduit en
outre une règle de 80 % applicable à « tout candidat », contradictoire avec le
moteur et le texte principal. Enfin, la correction de langage de R1 reste
partielle : le hero est corrigé, mais le lead n'emploie ni « vous », ni « votre
», ni « vos », et un titre conserve le jargon interdit par le test exact.

Le guide ne peut donc pas être qualifié de publiable premium sur ce snapshot,
même avec `P0 = 0`.

## 2. Autorité de snapshot et intégrité

Manifest :
`docs/research/manifests/transformer-excel-en-application-p2-2026-07-25-r2.sha256`

SHA-256 du manifest :
`13c88752be54a811b5510ac6ffe259470e0be4d7fa47de6cb3b49c3185bc04e3`

Résultat de `shasum -a 256 -c` : **8/8 OK**.

| Fichier figé | SHA-256 contrôlé | État |
| --- | --- | --- |
| R1 | `7f7ca54fec2eb0b896e9ba9337a9b50b162d93e5e8a52cace070e6d1550ef576` | OK |
| Recherche R2 | `b7885867f478aa4e9e8a8490039df9aa08c9d09279bb936d5299611c5684213c` | OK |
| Page | `0d832634a8987c82c235c3bedb44e9bce46ef4d5ae260d55acf229c79a91e45b` | OK |
| Image sociale | `613d396aec5cf70de8b4f1020ddc668c6e23a4856aa14a6d1bccc32c45f207b7` | OK |
| Composant | `39345588f23e906a5a47d91e5f12013e992cf456a13bd6e9ddaacda7407b2586` | OK |
| Moteur | `c067448caed59c94faf9ab39c1b5f0207a06b118c247610e7d33c62f949914a2` | OK |
| Tests du moteur | `2d93090d0f6d9bdc58c7c92521769ff0408de532033c8bc029c3e89fec4baded` | OK |
| Registre | `e4762f5a80b8e54389d3ac6fea2a74408fde1106415fb98b8d58a2fe1bee3734` | OK |

Les constats ci-dessous portent uniquement sur ce contenu figé. Les
modifications déjà présentes dans l'arbre de travail appartiennent au snapshot
audité, pas au relecteur.

## 3. Score détaillé selon les dix axes

| Axe | Note /10 | Motif |
| --- | ---: | --- |
| Intention de recherche | 8 | La question dirigeant et les cinq issues sont nettes ; le lead échoue encore à l'adresse directe exigée. |
| Aide à la décision | 7 | Les cinq dossiers et le droit de ne pas investir sont solides ; date figée et règle des 80 % contradictoire peuvent fausser l'action. |
| Pédagogie dirigeant | 7 | Cas, coûts et inconnues sont bien expliqués ; niveaux de preuve non définis et charge du formulaire restent difficiles. |
| Profondeur | 10 | Données, dix opérations, exploitation, sécurité, sortie, cinq voies, TCO, sensibilités et scénarios sont substantiels. |
| Preuve et exactitude | 7 | Calculs et sources sont robustes ; « vérifié » n'est ni attribué ni plus fort que « documenté », et les dates vieillissent mal. |
| Comparaison à périmètre égal | 7 | Le moteur compare cinq dossiers et bloque devises différentes ; les unités euro dans un dossier USD/GBP rendent toutefois la base incohérente. |
| Originalité et valeur utile | 10 | Le jeu reproductible, les cinq dossiers et la décision conditionnelle constituent une vraie valeur propre. |
| Style humain et anti-IA | 8 | Le hero est lecteur et la prose prend position ; le lead, un H2 et une table à quatre colonnes échouent encore aux garde-fous exacts. |
| Conversion et confiance | 10 | Un seul CTA éditorial, conflit d'intérêt explicite et possibilité de conclure « garder Excel » ou « ne pas investir ». |
| SEO et produit éditorial | 10 | Canonique, Article, BreadcrumbList, OG et garde `noindex` du statut en revue sont présents et cohérents au niveau SSR inspectable. |

**Total : 84/100.**

La porte premium exige `P0 = 0`, `P1 = 0`, au moins `90/100` et chaque axe
cœur à `9/10` ou plus. Trois conditions sur quatre échouent : cinq P1 restent
ouverts, le score est inférieur à 90, et les axes décision, pédagogie, preuve et
comparaison sont inférieurs à 9.

## 4. Revalidation séparée des treize incidents R1

Les statuts ne sont pas repris du journal R2 : chacun a été rejoué contre le
code, le rendu serveur ou un test.

| ID R1 | Statut R2 | Preuve indépendante ligne/test |
| --- | --- | --- |
| P0-01 — garde `robots` absent | **FERMÉ** | `page.tsx:12,23` importe et applique `guideRobots`; `guides.ts:1519-1531` ferme tout guide en revue ; `guides.test.ts:85-116` est vert ; inspection de `metadata` : `{index:false, follow:false}` et canonique correcte. |
| P0-02 — plateforme libre avec prix Power Apps | **FERMÉ** | `ExcelDecisionDiagnostic.tsx:62-70` type les produits ; `excel-decision-diagnostic.ts:624-751` invalide type, produit et plan ; tests `:150-201` verts ; `17,30` est réservé au preset exact par `:902-915` et test `:359-389`. |
| P0-03 — état partagé entre candidats | **FERMÉ** | `ExcelDecisionDiagnostic.tsx:149-198` conserve un record par voie et met à jour seulement la clé active ; `:230-258` propage uniquement l'applicabilité commune ; test d'absence de fuite `excel-decision-diagnostic.test.ts:119-133` vert. |
| P0-04 — lancement sans preuve/N/A motivé | **FERMÉ au niveau P0, réserve P1-R2-02** | Référence et date sont exigées par `excel-decision-diagnostic.ts:999-1057`; motifs N/A par `:1009-1023`; tests négatifs `:217-286` verts. Aucun lancement avec preuve vide n'a été obtenu. La distinction sémantique « documenté/vérifié » reste insuffisante, sans rouvrir le contournement P0 initial. |
| P0-05 — base `"x"` et inconnues ramenées à zéro | **FERMÉ** | Validation structurée `excel-decision-diagnostic.ts:834-958`; tests base arbitraire, date, inconnues et zéro justifié `:290-357` verts ; une base pédagogique non attestée reste en report. |
| P1-01 — coûts cachés et métadescription « complets » | **FERMÉ, réserve P1-R2-03** | Dix postes éditables sont rendus par `ExcelDecisionDiagnostic.tsx:855-884`, base/source/devise par `:886-943`, formule par `excel-decision-diagnostic.ts:384-385`; registre `guides.ts:1055-1068` annonce « estimations explicites ». Les unités multidevises restent un nouveau défaut distinct. |
| P1-02 — copie/impression incomplète | **FERMÉ mécaniquement** | Un seul `reportText` alimente copie et `<pre>` d'impression (`ExcelDecisionDiagnostic.tsx:163-179,308-342`); le rapport exhaustif est construit en `excel-decision-diagnostic.ts:1490-1599`; test `:592-628` vert. L'impression visuelle réelle reste P4. |
| P1-03 — deux CTA commerciaux | **FERMÉ** | Une seule occurrence `GuideInlineCTA` dans la page (`page.tsx:1258-1267`), aucune dans le diagnostic ; le contrôle éditorial compte un CTA. Les liens globaux répétés du shell ne constituent pas un second placement éditorial. |
| P1-04 — hero et ouverture non lecteurs | **OUVERT PARTIELLEMENT** | Hero corrigé en `page.tsx:173-180` et sonde : adresse lecteur vraie, aucun jargon. Mais lead `:240-247` sans `vous/votre/vos` et H2 `:428-430` avec « preuve » échouent à la regex exacte de `guide-human-language.test.ts:1289-1335`. |
| P1-05 — AppSheet incomplet | **FERMÉ** | Prix/limites `page.tsx:534-580`, utilisateurs externes `:582-590`, audit 7/53 jours `:592-606`, transfert complet `:608-621`, historique DB 30 jours `:623-637`, filtre non suffisant et lecture de feuille `:720-739`. Sources officielles rouvertes. |
| P2-01 — couverture `NaN`/hors bornes | **FERMÉ** | Contrôle fini `0–100` dans `excel-decision-diagnostic.ts:1060-1067`; tests `NaN`, `Infinity`, `-1`, `100`, `101` en `excel-decision-diagnostic.test.ts:424-435`. |
| P2-02 — deux semaines contre jours 1 à 10 | **FERMÉ** | `page.tsx:1218` dit « Dix jours ouvrés (deux semaines) » ; le moteur reprend dix jours ouvrés en `excel-decision-diagnostic.ts:1075-1076`. |
| P2-03 — statuts anglais exportés | **FERMÉ** | Tables françaises `excel-decision-diagnostic.ts:1448-1479`; test d'absence de codes anglais `excel-decision-diagnostic.test.ts:592-628` vert. |

Synthèse de clôture R1 :

- cinq P0 fermés dans leur risque bloquant ;
- quatre P1 fermés, un P1 seulement partiellement corrigé et encore ouvert ;
- trois P2 fermés ;
- deux réserves issues de corrections R1 sont enregistrées comme nouveaux P1,
  sans rétrograder artificiellement les anciens P0.

## 5. Incidents ouverts R2

### 5.1 P1 — majeurs

#### P1-R1-04 — correction de langage incomplète

Le hero passe désormais la règle d'adresse lecteur. Le lead de 57 mots reste
toutefois dépourvu de `vous`, `votre` ou `vos` (`page.tsx:240-247`) et le titre
« Le test des dix opérations transforme une préférence en preuve »
(`:428-430`) contient un terme interdit par la regex de langage.

Le test global retourne 30/33 avec trois échecs affichés sur
`securite-saas-b2b`. Comme chaque boucle s'arrête au premier `expect` défaillant,
ces trois erreurs préexistantes masquent les guides suivants. Une sonde
spécifique reproduisant exactement les regex du test sur cette route donne :

```text
hero : lecteur=true, jargon=false, 197 caractères
lead : lecteur=false, jargon=false, 57 mots
titre en défaut : "Le test des dix opérations transforme une préférence en preuve"
```

Correction minimale : ajouter une adresse directe dans le lead et reformuler le
H2 sans le vocabulaire banni, puis exécuter un test par route qui agrège tous les
écarts au lieu de s'arrêter au premier guide.

#### P1-R2-01 — date d'arrêté éditoriale utilisée comme plafond permanent

`EXCEL_DIAGNOSTIC_AS_OF` vaut `2026-07-25`
(`excel-decision-diagnostic.ts:1-2`). Cette constante est injectée dans le
dossier (`ExcelDecisionDiagnostic.tsx:163-169`) et devient le `max` HTML de la
préparation (`:434-439`), de la condition propre (`:660-665`), des preuves
d'opération (`:803-808`), des motifs N/A (`:833-838`) et de la source de coût
(`:912-917`). La validation rejette ensuite toute date supérieure à cet arrêté
(`excel-decision-diagnostic.ts:806-815`).

Sonde :

```text
asOf constant              = 2026-07-25
date 2026-07-26, défaut    = invalide
date 2026-07-26, asOf 08-01= valide
```

Le problème n'est pas la reproductibilité d'un audit daté ; c'est la confusion
entre date de version du modèle et date du dossier utilisateur. Dès le lendemain
du snapshot, une pièce ou un devis courant est impossible à saisir et reste
refusé indéfiniment si la page n'est pas republiée.

Correction minimale : conserver la version éditoriale séparément, calculer ou
demander une date d'arrêté de dossier non future, valider cette date elle-même,
et comparer les pièces à cette date.

#### P1-R2-02 — « documenté » et « vérifié » sont synonymes logiques

L'interface propose trois labels sans définition (`ExcelDecisionDiagnostic.tsx:
53-60`) et ne demande ni vérificateur, ni date de vérification, ni conclusion
distincte. Le moteur accepte tout niveau différent de `declared`
(`excel-decision-diagnostic.ts:817-827`). Les deux sondes donnent donc exactement
le même verdict :

```text
toutes les preuves "documented" = eligible
toutes les preuves "verified"   = eligible
```

Le test intitulé « distinguishes declared, documented and verified evidence »
(`excel-decision-diagnostic.test.ts:227-237`) ne démontre en réalité que deux
classes : déclaré est refusé ; documenté et vérifié sont acceptés.

Le risque n'est plus un lancement sans référence ni date, ce qui explique
`P1` plutôt que `P0`. Le lecteur peut néanmoins attribuer à « vérifié » une
assurance indépendante que le modèle ne possède pas.

Correction minimale : définir les niveaux dans l'interface. Soit supprimer
« vérifié », soit exiger identité/rôle du vérificateur, date, conclusion et
éventuelle indépendance, avec une règle distincte seulement là où elle change
réellement la décision.

#### P1-R2-03 — dossier USD/GBP avec unités de coût en euros

Les dix unités sont codées en dur, dont `€`, `€/mois`,
`€/utilisateur/mois`, `€/h` et `€/an`
(`excel-decision-diagnostic.ts:351-381`). Le composant les affiche telles
quelles (`ExcelDecisionDiagnostic.tsx:863-883`), puis propose séparément EUR,
USD ou GBP (`:924-940`). Le rapport réutilise les unités euro
(`excel-decision-diagnostic.ts:1573-1576`) tandis que l'intervalle total emploie
la devise sélectionnée (`:1583`).

Un dossier AppSheet en USD peut donc afficher, par exemple, une licence
« €/utilisateur/mois » et conclure par un total « USD ». Le test de devises
différentes (`excel-decision-diagnostic.test.ts:510-522`) protège la comparaison
entre dossiers, pas la cohérence interne d'un dossier.

Correction minimale : dériver les unités monétaires de `costBasis.currency` ou
séparer unité physique et devise ; bloquer le calcul tant que toutes les sommes
ne sont pas exprimées dans la même devise ; tester les trois devises à l'écran
et dans l'export.

#### P1-R2-04 — le plan d'action applique 80 % à tous les candidats

Le texte principal dit correctement que toute opération applicable doit réussir
et que 80 % ne concerne que le logiciel standard (`page.tsx:491-497`). Le moteur
applique aussi ce seuil uniquement à `standard_software`
(`excel-decision-diagnostic.ts:1169-1185`).

Mais le plan des jours 11 à 15 ordonne : « Écarter tout candidat sous 80 % »
(`page.tsx:1223-1226`). Cette règle peut éliminer Excel, une plateforme ou le
sur-mesure sur une moyenne qui n'existe pas dans leur contrat, ou faire croire
qu'un score global compense une opération bloquante.

Correction minimale : écrire « écarter un logiciel standard sous 80 % des
exigences applicables ; pour toute voie, écarter au premier besoin bloquant
documenté en échec ».

### 5.2 P2 — corrections recommandées

#### P2-R2-01 — table de sensibilité à quatre colonnes

La table `Variable / Bas / Central / Haut` de `page.tsx:1068-1110` contient
quatre colonnes. Elle échoue au garde-fou exact
`guide-human-language.test.ts:1471-1484`, qui limite les tables éditoriales à
trois colonnes pour la lecture mobile. Cet échec propre à la route est masqué par
le premier échec du même test sur `securite-saas-b2b`.

Correction minimale : transformer chaque variable en carte ou en deux lignes,
ou fusionner bas/central/haut dans une colonne lisible.

#### P2-R2-02 — contrat TypeScript non défendu à l'exécution

Les contrôles de type protègent le composant, mais les fonctions exportées
n'établissent pas leur schéma à l'exécution. Sondes directes :

```text
status opération = "banana"         -> eligible, 9 réussies / 10 applicables
evidenceLevel = "banana"            -> eligible
currency = "BANANA" sur 5 dossiers  -> launch, industrialize_excel
readiness = chaînes "false"         -> eligible
conditional[4] = null + motif N/A   -> eligible
asOf = "zzzz", preuve en 2099       -> date acceptée
```

La cause est visible dans les branches `status`
(`excel-decision-diagnostic.ts:1026-1057`), qui traitent tout autre texte comme
une réussite documentable sans vérifier `passed === applicable`; dans
`level !== "declared"` (`:823-827`); dans la devise seulement non vide (`:869`);
dans les booléens testés par vérité JavaScript (`:1069-1084`) ; et dans la date
`asOf` jamais validée (`:806-815`).

Ces valeurs ne sont pas produites par l'interface actuelle, d'où `P2` plutôt que
`P0/P1`. La bibliothèque exportée doit néanmoins rejeter tout objet hors schéma
avant d'évaluer ou d'exporter.

Correction minimale : validation de schéma runtime à l'entrée, branche
exhaustive avec rejet par défaut, égalité stricte
`passedOperations === applicableOperations`, enum de devise et validation ISO de
`asOf`.

## 6. Recalcul indépendant de tous les chiffres publiés

La formule a été recodée séparément depuis les postes visibles, sans appeler le
calculateur de production :

```text
initial
+ fixe mensuel × mois
+ licence × utilisateurs × mois
+ administration × 45 × mois
+ maintenance annuelle × années
+ formation/intégrations/sortie
+ résiduel hebdomadaire × 48 × années × 45
```

### 6.1 Quinze TCO à 48 mois

| Scénario | Garder Excel | Industrialiser | Standard | Plateforme | Sur-mesure | Verdict |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| Simple | 13 960 € | 11 780 € | 17 088 € | 27 700 € | 61 656 € | 5/5 exacts |
| Central | 58 160 € | 34 800 € | 46 520 € | 62 404,80 € | 97 640 € | 5/5 exacts |
| Exigeant | 115 320 € | 83 160 € | 124 440 € | 150 640 € | 212 280 € | 5/5 exacts |

Résultat : **15/15 exacts**. Le test de production
`excel-decision-diagnostic.test.ts:651-680` confirme le même tableau.

### 6.2 Horizons centraux à 24 mois

| Voie | Recalcul | Publié | Verdict |
| --- | ---: | ---: | --- |
| Industrialiser Excel | 22 400 € | 22 400 € | Exact |
| Logiciel standard | 31 760 € | 31 760 € | Exact |
| Plateforme | 43 702,40 € | 43 702,40 € | Exact |
| Sur-mesure | 75 320 € | 75 320 € | Exact |

### 6.3 Sensibilités et seuils

| Série | Recalcul | Verdict |
| --- | --- | --- |
| Temps 1 / 4 / 8 h par semaine | 8 640 / 34 560 / 69 120 € | Exact |
| Coût 30 / 45 / 60 € pour 4 h/semaine | 23 040 / 34 560 / 46 080 € | Exact |
| Licences 5 / 12 / 25 × 17,30 × 48 | 4 152 / 9 964,80 / 20 760 € | Exact |
| Admin 2 / 6 / 12 h/mois | 4 320 / 12 960 / 25 920 € | Exact |
| Garder vs industrialiser | 0,747685 h/semaine, soit 44,861 min | Arrondi 0,748 h / 45 min exact |
| Plateforme vs standard, central | 3 971,20 €/an | Exact |
| Sur-mesure vs standard, central | 12 780 €/an | Exact |
| Sur-mesure vs standard, exigeant | 21 960 €/an | Exact |
| Sur-mesure vs plateforme, exigeant | 15 410 €/an | Exact |
| Standard vs industrialiser, central | 2 930 €/an | Exact |

### 6.4 Cas de données continu

| Étape | Lignes | Somme | Verdict |
| --- | ---: | ---: | --- |
| Somme 1 à 3 050 | 3 050 | 4 652 775 | Exact |
| Ajouter 3 051 | 3 051 | 4 655 826 | Exact |
| Corriger 42 en 142 | 3 051 | 4 655 926 | Exact |
| Importer 95 lignes à 1 | 3 146 | 4 656 021 | Exact |
| Supprimer 2 501 | 3 145 | 4 653 520 | Exact |
| Restaurer 2 501 | 3 146 | 4 656 021 | Exact |

Les 11 pièces jointes sont conservées dans la spécification éditoriale. Les
bornes 0, 1, 2 000, 2 001, négatif, décimal, `NaN` et `Infinity` sont couvertes
par `excel-decision-diagnostic.test.ts:682-696`.

## 7. Rejeu des branches et sondes adversariales demandées

| Sonde | Résultat R2 | Preuve |
| --- | --- | --- |
| Dossier rangé sous la mauvaise clé | Report | Test `:478-490` |
| Aller-retour entre voies / fuite d'état | Aucune fuite observée ; la valeur A persiste sans contaminer B | État par clé `ExcelDecisionDiagnostic.tsx:149-198`; test `:119-133` |
| Applicabilité divergente entre dossiers | Report global | Test `:492-508` |
| Preuve déclarée | Report | Test `:227-237` |
| Référence vide ou date future | Report | Tests `:217-225,313-327` |
| N/A sans motif ou sans date | Report | Test `:239-253` |
| Base égale à `"x"` | Report | Test `:301-311` |
| Hypothèses pédagogiques seulement attestées par un propriétaire | Report | Test `:290-299` |
| Changement type/produit/plan | Coûts et attestation invalidés | Tests `:150-201` |
| Prix 17,30 détourné | Report | Test `:359-389` |
| Actifs + externes non couverts | Report ; somme exacte admissible | Test `:203-213` |
| Dossiers EUR/USD mélangés | Report | Test `:510-522` |
| Dossier USD interne | **Défaut : unités euro, total USD** | P1-R2-03 |
| Coûts `NaN` / non finis | Report pour chacun des dix postes | Tests paramétrés `:391-398` |
| Couverture `NaN/Infinity/-1/101` | Report ; 100 admissible | Test `:424-435` |
| Bornes X/I absentes, inversées ou non finies | Report | Validation `excel-decision-diagnostic.ts:919-955` et sondes |
| Égalité exacte / intervalles chevauchants | Report | Test `:552-573` |
| Candidat éliminé vs candidat non résolu | Éliminé ne bloque pas ; non résolu bloque | Tests `:524-550,575-588` |
| Garder Excel moins cher | `do_not_invest` | Tests `:437-462` |
| Candidat absent | Report | Test `:464-476` |
| Tous les candidats éliminés | Stop | Test `:575-588` |
| Export exhaustif et français | Vert ; cinq dossiers, preuves, coûts, motifs, version et verdict | Test `:592-628` |
| Impression | Même texte autonome dans `<pre>` | `ExcelDecisionDiagnostic.tsx:176-179,340-342`; rendu papier non P3 |
| Robots/noindex | `index=false`, `follow=false` | SSR des métadonnées + tests `guides.test.ts:85-116` |
| Hero lecteur | Vert | `page.tsx:173-180`; sonde exacte |
| Lead et H2 langage | **Défaut propre à la route** | P1-R1-04 |
| Nombre de CTA éditoriaux | 1 | `page.tsx:1258-1267` |
| AppSheet licence/audit/transfert/filtres/historique | Couverture présente | `page.tsx:534-637,720-739` |
| Toutes les opérations applicables | Le moteur exige une preuve et bloque inconnu/échec ; statut hors enum reste P2 | `excel-decision-diagnostic.ts:999-1218` |
| Seuil 80 % | Correct dans le moteur, contradictoire dans le plan | P1-R2-04 |

Les 62 tests du moteur passent. Ils couvrent les branches normales et la plupart
des attaques demandées, mais pas les six valeurs hors contrat runtime de
P2-R2-02, ni le vieillissement de la date, ni les unités multidevises.

## 8. Sources primaires volatiles rouvertes

Réouverture textuelle le 25 juillet 2026, sans inspection UX :

- [Microsoft Power Apps pricing](https://www.microsoft.com/fr-fr/power-platform/products/power-apps/pricing) :
  Premium 17,30 € HT/utilisateur/mois avec paiement annuel, capacité Dataverse
  additionnelle 34,70 € HT/Go/mois ;
- [Microsoft — délégation Power Apps](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/delegation-overview) :
  500 lignes par défaut, limite réglable à 2 000 et risque de résultat partiel ;
- [Microsoft — connecteur Excel Online Business](https://learn.microsoft.com/en-us/connectors/excelonlinebusiness/) :
  25 Mo, verrou possible jusqu'à six minutes et modifications simultanées non
  prises en charge ;
- [Google AppSheet pricing](https://about.appsheet.com/pricing/) : Starter 5 USD,
  Core 10 USD, Enterprise Plus 20 USD/utilisateur/mois ; 2 500 lignes en
  Starter/Core et 200 000 en Enterprise Plus pour AppSheet Database ;
- [Google — filtres de sécurité AppSheet](https://support.google.com/appsheet/answer/10104488?hl=en) :
  un filtre n'est pas une solution de sécurité complète ;
- [Google — historique AppSheet Database](https://support.google.com/appsheet/answer/12726292?hl=en) :
  historique, annulation et restauration jusqu'à trente jours ;
- [Airtable plans](https://support.airtable.com/docs/airtable-plans) : Team
  24 USD mensuels ou 20 USD annuels par collaborateur, 50 000 enregistrements,
  20 Go et un an d'historique.

Aucun écart chiffré n'a été trouvé sur ces affirmations publiques. Cette
concordance ne corrige pas les défauts du moteur ou de l'interface et ne vaut pas
garantie de prix future.

## 9. Contrôles techniques et SSR sans navigateur

| Contrôle | Résultat |
| --- | --- |
| Manifest | 8/8 empreintes OK |
| `excel-decision-diagnostic.test.ts` | 62/62 |
| Moteur + `guides.test.ts` | 72/72 |
| ESLint ciblé des six fichiers TypeScript/TSX | Vert |
| `tsc --noEmit` | Vert |
| `git diff --check` ciblé | Vert |
| Test exact `guide-human-language.test.ts` | 30/33 ; trois premiers échecs affichés sur `securite-saas-b2b` |
| Sonde langage isolée de cette route | Trois écarts : lead, H2, table quatre colonnes |

Faute de serveur déjà actif et pour respecter l'interdiction d'écrire des
artefacts de build, la page a été rendue en mémoire avec le moteur SSR React,
sans navigateur et sans `.next` :

```text
HTML statique : 312 073 octets
scripts JSON-LD : 2
Article : présent
BreadcrumbList : présent
hero : présent
cinq voies : présentes
trois labels de preuve : présents
dix postes de coût : présents
metadata.robots : index=false, follow=false
canonical : https://hagnere-code.ai/guides/transformer-excel-en-application
```

Le nombre de liens `/demarrer-un-projet` du HTML global n'est pas un décompte de
CTA éditoriaux : le shell du site répète navigation et pied de page. Le fichier
de page contient un seul placement `GuideInlineCTA`, conformément au contrat.

## 10. Limites P4 et charge cognitive

Aucun vrai navigateur n'a été utilisé. Ne sont donc pas validés :

- lisibilité réelle à 320–1600 px ;
- focus, clavier, lecteurs d'écran et annonces `aria-live` ;
- longueur des cinq onglets et conservation visuelle de leur état ;
- sélecteurs de date, champs numériques et erreurs sur mobile ;
- copie dans le presse-papiers système ;
- pagination, coupures, contraste et exhaustivité de l'impression ;
- comportement avec zoom, polices chargées et thèmes clair/sombre.

La charge cognitive est un risque P4 important, pas un défaut visuel affirmé par
ce P3 : cinq dossiers × dix opérations, références et dates, critère propre, dix
postes de coût, base structurée et bornes X/I représentent un volume élevé.
L'interface segmente ce travail et garde un candidat actif, mais un test
utilisateur doit vérifier qu'un dirigeant sait :

1. ce qui est commun aux cinq voies ;
2. ce qui doit être ressaisi pour chaque voie ;
3. pourquoi un candidat incomplet bloque le classement ;
4. la différence entre déclaré, documenté et vérifié après correction ;
5. où reprendre un dossier sans perdre le contexte.

Le P4 devra au minimum capturer l'état initial, un dossier rempli, les cinq
résumés, un report, un stop, `do_not_invest`, un lancement, les erreurs de coût
et l'impression.

## 11. Porte de sortie

Un R3 peut revenir en P3 ciblé après :

1. séparation de la date de version et de la date d'arrêté du dossier ;
2. définition ou suppression du niveau « vérifié » ;
3. unités monétaires cohérentes avec EUR/USD/GBP ;
4. correction de la règle des 80 % dans le plan ;
5. lead et H2 conformes au test lecteur ;
6. remplacement de la table à quatre colonnes ;
7. validation runtime exhaustive et tests des sondes P2-R2-02 ;
8. nouveau manifest figé et nouveau passage des 62 tests.

Sur ce snapshot R2, la décision finale reste :

**NO-GO premium — P0 fermé, mais P1 non nul, score inférieur à 90 et axes cœur
inférieurs à 9.**
