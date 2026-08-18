# Contre-audit P3 froid — `transformer-excel-en-application`

Date : 25 juillet 2026  
Révision : R1  
Relecteur : cellule indépendante `excel_p3_cold_audit`  
Périmètre : recherche, exactitude, logique, branches, pédagogie, comparaison,
SEO, conversion et contrôles statiques ciblés.  
Hors périmètre : P4 navigateur, contrôle multi-largeurs, impression réelle,
déploiement, route de production et indexation effective.

Ce rapport est le seul fichier créé par le relecteur. Aucun fichier de
production n’a été modifié.

## 1. Verdict exécutif

**Verdict P3 : NO-GO.**

```text
P0 : 5
P1 : 5
P2 : 3
Score : 61/100
Décision : correction obligatoire, nouveau P3 ciblé, puis P4
```

La page est nettement au-dessus des contenus commerciaux français échantillonnés
sur trois points : elle compare cinq voies, met le même cas chiffré sous
contrainte et fournit un diagnostic interactif. Ses additions visibles sont
exactes. Son dossier de recherche est riche, daté et majoritairement relié à
des sources primaires.

Le problème est plus profond qu’une imprécision de texte : le diagnostic peut
produire une recommandation qui ne correspond ni à la plateforme nommée ni à
un dossier de preuve suffisant. Il peut aussi qualifier des coûts de
« comparables » avec une base arbitraire et réutiliser l’état d’un candidat
pour un autre. Enfin, la page est encore marquée
`ready-for-human-review` mais n’appelle pas le garde-fou `guideRobots`.

Le guide ne doit donc pas être déclaré publiable sur ce snapshot. Les P0 ne
retirent pas la valeur du travail déjà accompli ; ils empêchent seulement de
présenter le résultat interactif comme une décision défendable.

## 2. Snapshot et porte de manifest

Le manifest P2 est l’autorité de snapshot pour cette passe.

| Élément                      | SHA-256 P2 contrôlé                                                | État |
| ---------------------------- | ------------------------------------------------------------------ | ---- |
| Recherche                    | `f7696bca0d85c8121f21cdeaf3e62af31f1e67646948a9dafdc2d7b708d8c2ef` | OK   |
| Page                         | `04487b17b53e9772d40ac0b54cda7c565db14d36e1de8704c3ab748fe514e983` | OK   |
| Image sociale                | `9d73a7f6bf4a3f40629346e9c8d20b31bf0ee0e189e952d0220a4d16f2c5d4ad` | OK   |
| Diagnostic React             | `631cea31f4dfa34d27b935ff4d2b781ec47686f4367a3a91eadb0e7a2c552ece` | OK   |
| Moteur de décision           | `8a74e0024fdc2aff7ecc48a379eb7d07103f8a825a395f0ce6c84fece4d375ad` | OK   |
| Tests du moteur              | `ed6a15dbfa9ac103deb659f97da024559a7faad3c15123dec7c1995f6af246d4` | OK   |
| Registre `src/lib/guides.ts` | `7c412f4d86ed7d6a1d277337d6ce7787bac4e4b671499385bd4a372adfedb52e` | OK   |

Résultat : **7/7 empreintes P2 concordent**.

Le manifest P1 reste utile pour retracer l’audit antérieur :

| Élément            | SHA-256 P1                                                         |
| ------------------ | ------------------------------------------------------------------ |
| Audit initial      | `ed4de068cb48b74ff718418a7bd2ae3c87256af5cf736fd519cdefa5ccc462f5` |
| Recherche          | `678e609c7f871f31a66e2036d461642675e745c169fd9809b07f7028efa20093` |
| Page               | `e80281de919fde1378afc38734b0acab9d251b1623634c1ebfdbf077e444fe72` |
| Diagnostic React   | `3c58f511f7109253c7979963061e5f90786ff11048e352ec9cd3b93632ebf233` |
| Moteur de décision | `e7fc50f37260866bcd66649d2f30b3078e8d6c4c86773743ecd63918f3f7a8d1` |

L’audit initial concorde encore avec P1 ; recherche, page, composant et moteur
ont ensuite changé. Cet écart P1 est **historique et attendu après P2**. Il
n’est pas classé P0. Toute correction issue de ce rapport devra en revanche
produire un nouveau manifest, puis refaire les contrôles sur ce nouveau
snapshot.

## 3. Score détaillé selon les dix axes

| Axe                          | Note /10 | Motif                                                                                                                                                                                                                            |
| ---------------------------- | -------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Intention de recherche       |        6 | Le sujet répond bien à « faut-il conserver, industrialiser, standardiser, passer au no-code/low-code ou construire ? », mais le hero parle en protocole de consultant plutôt qu’au lecteur et déclenche le plafond de la charte. |
| Aide à la décision           |        5 | Les cinq voies et le droit de ne pas développer sont utiles ; l’état non isolé par candidat, les preuves facultatives et les bases non validées rendent toutefois le verdict non fiable.                                         |
| Pédagogie dirigeant          |        6 | Le cas continu et les comparaisons de coûts sont parlants. « Périmètre », « recette », les statuts anglais exportés et plusieurs mécanismes cachés limitent la compréhension autonome.                                           |
| Profondeur                   |        8 | Cas de données, opérations, TCO, sensibilité, réversibilité, sauvegarde, licences, preuve et critères d’arrêt : la couverture est substantielle.                                                                                 |
| Preuve et exactitude         |        6 | Les chiffres visibles ont été recalculés avec succès et les sources sont solides, mais un verdict « lancer » reste possible sans pièce et une base non datée peut passer.                                                        |
| Comparaison à périmètre égal |        5 | La matrice éditoriale est riche, mais le moteur n’évalue pas réellement cinq dossiers candidats distincts et applique un coût Power Apps à tout nom de plateforme.                                                               |
| Originalité et valeur utile  |        9 | Le jeu de données reproductible, les cinq trajectoires et le diagnostic constituent une vraie proposition originale dans le corpus observé.                                                                                      |
| Style humain et anti-IA      |        6 | La page contient des prises de position et un cas concret, mais le hero échoue aux deux garde-fous de langue ciblés. Plafond de charte appliqué.                                                                                 |
| Conversion et confiance      |        6 | Le guide peut conclure à conserver Excel et annonce que les réponses ne sont pas envoyées. Deux CTA commerciaux concurrents et un export incomplet fragilisent la confiance.                                                     |
| SEO et produit éditorial     |        4 | Canonique, métadonnées, maillage, OG et JSON-LD sont présents ; l’absence de `guideRobots` pour un guide encore en revue est bloquante.                                                                                          |

Total : **61/100**.

Le seuil de 90/100 n’est pas atteint. Les axes cœur ne sont pas tous à 9/10 et
les plafonds de la charte s’appliquent au hero. Le NO-GO reste de toute façon
imposé par les P0 et P1.

## 4. Registre dédupliqué des incidents

### 4.1 P0 — bloquants

| ID    | Défaut prouvé                                                                                                                                                                                                                                                                                                                                         | Risque lecteur / publication                                                                                                                                                       | Correction minimale attendue                                                                                                                                                                                                                 | Revalidation exigée                                                                                                                                      |
| ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| P0-01 | La fiche du registre porte `editorialStatus: "ready-for-human-review"`, mais `generateMetadata` n’appelle pas `guideRobots(guide)`. Le test de gouvernance échoue exactement sur cette route.                                                                                                                                                         | Une page en attente de validation humaine peut perdre le garde-fou d’indexation prévu par le corpus.                                                                               | Importer et retourner `robots: guideRobots(guide)` dans les métadonnées, sans changer le statut éditorial avant clôture des incidents et P4.                                                                                                 | Test ciblé du registre vert, rendu des métadonnées local, puis contrôle du HTML de production après déploiement.                                         |
| P0-02 | Le champ « plateforme nommée » accepte notamment Airtable, AppSheet, une chaîne vide ou tout texte libre, mais le TCO `named_platform` applique toujours **17,30 € par utilisateur et par mois**, prix Power Apps.                                                                                                                                    | Le lecteur peut saisir « AppSheet » ou « Airtable » et recevoir un coût attribuable à Power Apps ; le classement économique devient faux par construction.                         | Remplacer le texte libre par des plateformes typées avec leur modèle de coût daté, ou ne calculer aucun TCO tant que le produit et ses paramètres ne sont pas explicitement choisis. Réserver 17,30 € au seul scénario Power Apps documenté. | Tests par produit, effectif, invités/externes et durée ; affichage clair de la devise, date, engagement et exclusions ; nouveau recalcul indépendant.    |
| P0-03 | Le composant conserve un **état unique** de statuts, preuves, préparation et bornes. Changer de parcours ne réinitialise que `pathwayCriterionMet`; changer de scénario réinitialise tout. Aucun dossier de résultat n’est indexé par candidat.                                                                                                       | Une réponse obtenue pour une voie peut être réutilisée pour une autre. La page affiche cinq candidats mais ne compare pas cinq résultats autonomes à critères et coûts identiques. | Conserver un dossier par candidat, ou réinitialiser explicitement toutes les entrées lors du changement de candidat et demander confirmation. Évaluer admissibilité, coût et preuves pour chaque candidat avant tout « moins cher ».         | Test séquentiel sur les cinq candidats : réponses opposées, aller-retour entre onglets, absence de fuite d’état, tableau comparatif final reproductible. |
| P0-04 | Les champs de preuve sont explicitement facultatifs. Les opérations conditionnelles 4, 5 et 6 peuvent être marquées non applicables sans justification. Le moteur ne reçoit que les statuts et booléens, jamais les pièces. Un test confirme qu’une opération conditionnelle en échec peut être désactivée et que le moteur peut conclure « lancer ». | Le diagnostic appelle « documenté » un ensemble de cases auto-déclarées et peut autoriser un lancement sans trace contrôlable.                                                     | Exiger au moins une référence ou un motif daté pour chaque critère décisif ; justifier toute non-applicabilité ; distinguer « déclaré », « documenté » et « vérifié » ; interdire « lancer » si la preuve minimale manque.                   | Tests négatifs : preuves vides, N/A sans motif, pièce obsolète, opération obligatoire inconnue ; aucune branche ne doit conclure « lancer ».             |
| P0-05 | `evaluateExcelTcoBounds` vérifie seulement que `basis.trim()` est non vide. Une base égale à `"x"` passe. Avec X=0 et I=0 pour les cinq voies, le moteur retourne `status: "comparable"` et choisit l’industrialisation.                                                                                                                              | Une décision chiffrée peut être présentée comme datée alors qu’elle ne contient ni date, ni source, ni nature de coût. L’inconnu est transformé en zéro.                           | Structurer la base : date ISO, source, devise, durée, périmètre et auteur ; refuser les coûts inconnus au lieu de les convertir en zéro ; afficher « incomparables » si un poste requis manque.                                              | Tests avec texte arbitraire, date invalide/future, source vide, X/I manquants, zéro justifié et zéro par défaut.                                         |

### 4.2 P1 — majeurs

| ID    | Défaut prouvé                                                                                                                                                                                                                                                                                                              | Risque lecteur                                                                                                                                                            | Correction minimale attendue                                                                                                                                                                                                         | Revalidation exigée                                                                                                                      |
| ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| P1-01 | Les postes qui produisent les quinze TCO sont enfermés dans le code. L’interface ne laisse modifier que X et I. La métadescription annonce « 15 coûts complets » alors que chaque total reste un socle d’hypothèses + X/I et ne couvre pas nécessairement migration, intégration, support, fiscalité, inflation ou risque. | Le lecteur peut voir un total exact mais ne peut ni refaire chaque ligne ni vérifier qu’il compare son propre périmètre. « Complet » sur-promet la portée réelle.         | Publier une table de postes, unités, quantités, prix, source/date, exclusions et formule ; rendre les postes déterminants éditables ou fournir un fichier autonome ; remplacer « complets » par une formulation fidèle.              | Recalcul depuis les seuls éléments visibles, sans lire le code ; test de sensibilité poste par poste ; validation de la métadescription. |
| P1-02 | Le rapport copié et la vue imprimée omettent des entrées qui peuvent changer le verdict : stabilité du processus, données prêtes, bénéfice mesuré, critère propre à la voie et pourcentage de couverture standard.                                                                                                         | Le document exporté ne permet pas à un tiers de reproduire ou contester la recommandation.                                                                                | Exporter toutes les entrées décisives, leur date, leur source, les motifs N/A, le candidat choisi et la version des hypothèses.                                                                                                      | Comparer entrée par entrée l’écran, le presse-papiers et l’impression ; rejouer le verdict depuis l’export seul.                         |
| P1-03 | La page contient deux placements commerciaux menant à `/demarrer-un-projet` : un CTA éditorial dans la page et un CTA intégré au diagnostic.                                                                                                                                                                               | La conversion prend le pas sur la décision et dépasse le maximum d’un CTA commercial prévu par la charte.                                                                 | Garder un seul CTA commercial ; transformer l’autre en action utile non commerciale, par exemple télécharger, imprimer ou sauvegarder le diagnostic.                                                                                 | Test ciblé des liens et lecture humaine de la page finale.                                                                               |
| P1-04 | Le hero décrit « un protocole de décision » « à périmètre égal » avec « la même recette ». Le test ciblé signale à la fois l’absence d’adresse au lecteur et le jargon de consultant.                                                                                                                                      | L’ouverture demande au dirigeant de décoder la méthode avant de reconnaître son problème.                                                                                 | Ouvrir sur une situation ou une question en « vous », puis expliquer le résultat concret. Remplacer ou définir les mots signalés.                                                                                                    | `guide-human-language.test.ts` vert pour cette route et relecture humaine du premier écran.                                              |
| P1-05 | La comparaison AppSheet donne prix et limites de base, mais renvoie licences externes, audit et transfert à une vérification ultérieure. Elle omet aussi deux limites décisives : un security filter n’est pas une solution de sécurité complète, et une source tableur peut être lue en entier avant filtrage.            | Le candidat semble comparable à Power Apps et Airtable alors que ses conditions de licence, traçabilité, transfert et exposition des données peuvent changer la décision. | Ajouter les règles officielles sur utilisateurs connectés/invités, historique d’audit, transfert de l’application et des sources, security filters, lecture des feuilles et historique AppSheet Database, avec date et conséquences. | Relecture source par source et cas comparatif : interne, externe, départ du propriétaire, incident et restauration.                      |

### 4.3 P2 — corrections recommandées

| ID    | Défaut                                                                                                                                                                                                                  | Correction et contrôle                                                                                                                      |
| ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| P2-01 | Le moteur exporté ne rejette que `standardCoveragePercent < 80`. `NaN` contourne la condition ; une valeur infinie ou supérieure à 100 n’est pas bornée. L’interface HTML réduit le risque sans protéger l’API logique. | Exiger `Number.isFinite(value)` et `0 <= value <= 100`, puis appliquer le seuil. Ajouter `NaN`, `Infinity`, `-1`, `100` et `101` aux tests. |
| P2-02 | Le plan parle de « mesurer deux semaines », mais le tableau indique « Jours 1 à 10 ».                                                                                                                                   | Écrire « dix jours ouvrés, soit deux semaines » si c’est bien l’hypothèse, puis harmoniser partout.                                         |
| P2-03 | Le rapport copié expose les codes bruts `pass`, `fail`, `unknown` et `not_applicable`.                                                                                                                                  | Traduire les statuts en français dans l’artefact lecteur, sans modifier les valeurs internes.                                               |

## 5. Recalcul indépendant du cas continu

### 5.1 Jeu de données et opérations

Les six opérations du cas ont été rejouées sans reprendre les totaux affichés.

| Étape                           |     Calcul indépendant | Lignes |     Somme | Verdict |
| ------------------------------- | ---------------------: | -----: | --------: | ------- |
| Fichier initial                 | somme des 3 050 lignes |  3 050 | 4 652 775 | Exact   |
| Ajout `X-3051`                  |    `4 652 775 + 3 051` |  3 051 | 4 655 826 | Exact   |
| Correction `X-0042` de 42 à 142 |      `4 655 826 + 100` |  3 051 | 4 655 926 | Exact   |
| Import de 95 lignes à 1         |       `4 655 926 + 95` |  3 146 | 4 656 021 | Exact   |
| Suppression `X-2501`            |    `4 656 021 - 2 501` |  3 145 | 4 653 520 | Exact   |
| Restauration                    |    `4 653 520 + 2 501` |  3 146 | 4 656 021 | Exact   |

Le lot conserve également **11 pièces jointes**. Les totaux, le retour arrière
et les limites de lignes sont cohérents. Les tests du moteur couvrent notamment
0, 1, 2 000, 2 001, -1, 1,5, `NaN` et `Infinity` pour la borne de données.

### 5.2 Les quinze TCO à 48 mois

Les montants ci-dessous ont été recalculés depuis les constantes et règles du
moteur. Ils correspondent aux résultats visibles du snapshot.

| Scénario | Conserver Excel | Industrialiser Excel | Standard du marché | Plateforme nommée | Sur-mesure |
| -------- | --------------: | -------------------: | -----------------: | ----------------: | ---------: |
| Simple   |        13 960 € |             11 780 € |           17 088 € |          27 700 € |   61 656 € |
| Central  |        58 160 € |             34 800 € |           46 520 € |       62 404,80 € |   97 640 € |
| Exigeant |       115 320 € |             83 160 € |          124 440 € |         150 640 € |  212 280 € |

Verdict arithmétique : **15/15 exacts** à l’arrondi affiché.

Cette exactitude n’efface pas P0-02 : le montant « plateforme nommée » est
arithmétiquement juste pour la formule codée, mais la formule n’est pas liée au
produit saisi.

### 5.3 Sensibilité centrale à 24 mois

| Voie                 | Total recalculé |
| -------------------- | --------------: |
| Conserver Excel      |        30 080 € |
| Industrialiser Excel |        22 400 € |
| Standard du marché   |        31 760 € |
| Plateforme nommée    |     43 702,40 € |
| Sur-mesure           |        75 320 € |

Verdict arithmétique : **5/5 exacts**.

### 5.4 Seuils et écarts

| Affirmation                                                              | Recalcul                           |                                Résultat |
| ------------------------------------------------------------------------ | ---------------------------------- | --------------------------------------: |
| Temps résiduel hebdomadaire où Excel central rejoint l’industrialisation | équation indépendante des deux TCO | `0,747685 h/semaine`, soit `44,861 min` |
| Arrondi publié                                                           | `44,861 min`                       |                                `45 min` |
| Plateforme nommée – standard, central                                    | `(62 404,80 - 46 520) / 4`         |                         `3 971,20 €/an` |
| Sur-mesure – standard, central                                           | `(97 640 - 46 520) / 4`            |                           `12 780 €/an` |
| Sur-mesure – standard, exigeant                                          | `(212 280 - 124 440) / 4`          |                           `21 960 €/an` |
| Sur-mesure – plateforme nommée, exigeant                                 | `(212 280 - 150 640) / 4`          |                           `15 410 €/an` |
| Standard – industrialisation, central                                    | `(46 520 - 34 800) / 4`            |                            `2 930 €/an` |

Tous les seuils visibles sont exacts. Le comparateur d’intervalles emploie bien
une dominance stricte : le maximum d’une voie doit rester inférieur au minimum
des autres. Ce choix prudent est correct.

## 6. Audit des branches et du moteur

### 6.1 Ce qui fonctionne

- la borne du jeu de données est traitée explicitement ;
- les valeurs négatives, décimales, non finies et le seuil 2 000/2 001 sont
  testés ;
- le comparateur d’intervalles ne déclare pas de gagnant si les plages se
  chevauchent ;
- le moteur distingue blocage, collecte, test, report et lancement ;
- changer de scénario remet les réponses à zéro ;
- les opérations obligatoires et conditionnelles sont représentées ;
- la copie reste locale et les événements analytiques ne transmettent que le
  guide et le placement, pas les réponses.

### 6.2 Branches qui invalident le verdict

**Fuite d’état entre candidats.** Le même tableau de statuts, les mêmes preuves,
les mêmes bornes et les mêmes booléens servent à la voie active. Un simple
changement de voie ne remet à zéro que le critère propre à cette voie. Le
lecteur peut donc renseigner une trajectoire, changer d’onglet et hériter du
dossier précédent.

**Plateforme non typée.** Un libellé libre pilote l’affichage, mais pas le
modèle de coût. La voie reste `named_platform`, quelle que soit la chaîne.

**Preuve non consommée par le moteur.** Le composant collecte éventuellement
un texte de preuve, mais le moteur ne reçoit pas ce texte. Une réponse
« conforme » vide de preuve est donc équivalente à une réponse documentée.

**Non-applicabilité non motivée.** Les opérations 4, 5 et 6 peuvent être
retirées du verdict sans motif. Ce comportement est même consacré par un test
où un échec conditionnel désactivé n’empêche pas le lancement.

**Base seulement non vide.** Une sonde manuelle a envoyé `"x"` comme `basis`
aux cinq coûts, avec X=0 et I=0. Résultat observé :

```text
status: "comparable"
least-cost pathway: "industrialize_excel"
```

Le moteur vérifie donc la présence d’un caractère, pas une base datée et
traçable.

**Couverture standard non finie.** Le seuil `< 80` fonctionne pour un nombre
normal, mais `NaN < 80` vaut faux en JavaScript. L’interface borne en pratique
le champ ; le moteur exporté doit néanmoins défendre son propre contrat.

## 7. Sources primaires rouvertes le 25 juillet 2026

La vérification ci-dessous porte sur l’état courant des pages officielles,
pas seulement sur le dossier de recherche.

### 7.1 Microsoft Power Platform

| Source primaire                                                                                                                                                                                                                                        | Fait contrôlé                                                                                                                                                                                     | Verdict sur le guide                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| [Power Apps pricing](https://www.microsoft.com/fr-fr/power-platform/products/power-apps/pricing)                                                                                                                                                       | Power Apps Premium est affiché à 17,30 € HT par utilisateur/mois avec engagement annuel ; capacité Dataverse incluse et options additionnelles.                                                   | Le prix Power Apps est actuel. Il ne peut pas être réutilisé pour une plateforme arbitraire.                        |
| [Delegation overview](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/delegation-overview)                                                                                                                                              | Les requêtes non délégables ne traitent localement que 500 lignes par défaut, réglables jusqu’à 2 000, avec risque de résultats partiels incorrects. Page mise à jour le 13 janvier 2026.         | Le seuil 2 000 et l’avertissement sont fondés.                                                                      |
| [Excel Online (Business) connector](https://learn.microsoft.com/en-us/connectors/excelonlinebusiness/)                                                                                                                                                 | Taille maximale de fichier 25 Mo, verrou possible jusqu’à six minutes et modifications simultanées non prises en charge.                                                                          | Les réserves sur Excel comme base multi-utilisateur sont fondées.                                                   |
| [Backup and restore environments](https://learn.microsoft.com/en-us/power-platform/admin/backup-restore-environments)                                                                                                                                  | Rétention habituelle de sept jours, jusqu’à 28 jours pour certains environnements de production gérés ; restauration à l’échelle de l’environnement et restrictions. Mise à jour le 24 juin 2026. | Le guide doit maintenir le périmètre exact et ne pas transformer une sauvegarde d’environnement en export autonome. |
| [Manage Dataverse auditing](https://learn.microsoft.com/en-us/power-platform/admin/manage-dataverse-auditing)                                                                                                                                          | Activation aux niveaux environnement, table et colonne ; consommation de stockage et gestion séparée de certaines lectures/exports. Mise à jour le 21 avril 2026.                                 | Les exigences de journal doivent être vérifiées et prouvées, pas seulement cochées.                                 |
| [Manage the default environment](https://learn.microsoft.com/en-us/power-platform/guidance/adoption/manage-default-environment) et [changer le propriétaire d’un cloud flow](https://learn.microsoft.com/en-us/power-automate/change-cloud-flow-owner) | Gouvernance des ressources sans propriétaire et transfert de propriété des flux.                                                                                                                  | Le couple titulaire/suppléant du guide va dans le bon sens.                                                         |

### 7.2 Google AppSheet

| Source primaire                                                                                                                                                 | Fait contrôlé                                                                                                                                                                                                                                           | Conséquence                                                                                      |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| [AppSheet pricing](https://about.appsheet.com/pricing/)                                                                                                         | Starter 5 USD, Core 10 USD et Enterprise Plus 20 USD par utilisateur/mois sur la page consultée ; Core peut être inclus dans certaines offres Workspace. Les utilisateurs prévus, y compris certains externes/invités, ont des implications de licence. | Prix et population licenciée doivent être des entrées, pas une note à vérifier après le verdict. |
| [AppSheet database limits](https://support.google.com/appsheet/answer/12653576?hl=en)                                                                           | Limites de lignes selon l’offre.                                                                                                                                                                                                                        | Les limites publiques du guide sont cohérentes, à garder datées.                                 |
| [Audit history](https://support.google.com/appsheet/answer/10104794?hl=en)                                                                                      | Historique d’audit généralement de sept jours, jusqu’à 53 jours en Enterprise Plus ; l’attribution utilisateur dépend de la connexion.                                                                                                                  | P1-05 : une exigence de traçabilité ne peut pas rester générique.                                |
| [Transfer an app](https://support.google.com/appsheet/answer/10104991?hl=en) et [team collaboration](https://support.google.com/appsheet/answer/10104801?hl=en) | Le transfert de l’application ne suffit pas toujours : sources, fichiers, droits et propriété doivent suivre.                                                                                                                                           | Tester le départ du propriétaire et transférer avant fermeture du compte.                        |
| [Security filters](https://support.google.com/appsheet/answer/10104488?hl=en) et [data access](https://support.google.com/appsheet/answer/10104706?hl=en)       | Un security filter n’est pas une solution complète à lui seul ; avec une feuille, la source peut être lue avant filtrage.                                                                                                                               | Critère de sécurité décisif absent de la comparaison publique.                                   |
| [AppSheet database history](https://support.google.com/appsheet/answer/12726292?hl=en)                                                                          | Historique et restauration de changements sur 30 jours pour AppSheet Database, selon les conditions documentées.                                                                                                                                        | Distinguer l’historique de base, l’audit et une stratégie de sauvegarde restaurable.             |

### 7.3 Airtable

| Source primaire                                                                                                                                          | Fait contrôlé                                                                                                                                                                                            | Verdict                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| [Airtable plans](https://support.airtable.com/docs/airtable-plans)                                                                                       | Team : 24 USD en mensuel ou 20 USD par collaborateur/mois facturé annuellement, 50 000 enregistrements/base et 20 Go de pièces jointes/base. Page mise à jour le 9 juillet 2026.                         | Les ordres de grandeur du guide sont actuels.                                  |
| [Revision history](https://support.airtable.com/docs/record-level-revision-history-overview)                                                             | L’historique dépend du plan ; la page consultée le 25 juillet donne notamment un an pour Team et deux ans pour Business. Mise à jour le 25 juin 2026.                                                    | Garder plan, durée et date ensemble ; ne pas agréger plusieurs plans.          |
| [Base snapshots](https://support.airtable.com/docs/taking-and-restoring-base-snapshots)                                                                  | La restauration crée une nouvelle base et un nouvel identifiant ; l’historique de révision ne suit pas et les snapshots ne sont pas un calendrier de sauvegarde garanti. Mise à jour le 24 juillet 2026. | Le test de restauration doit contrôler liens, automatisations et identifiants. |
| [Attachment field](https://support.airtable.com/docs/attachment-field) et [data residency](https://support.airtable.com/docs/data-residency-at-airtable) | Téléchargement en masse sous conditions ; résidence UE réservée à certaines offres et certains traitements restent hors région.                                                                          | Les pièces jointes et la localisation ne se résument pas à un quota.           |

### 7.4 Sauvegarde, réversibilité et droit

| Source                                                                                                                         | Contrôle                                                                                                                                                                                             | Verdict                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| [CNIL — Sauvegarder](https://www.cnil.fr/fr/securite-sauvegarder)                                                              | Sauvegardes régulières, isolées, protégées et restauration testée.                                                                                                                                   | Le guide a raison de demander une preuve de restauration, mais cette preuve doit devenir une entrée bloquante. |
| [ANSSI — Sauvegarde des systèmes d’information](https://messervices.cyber.gouv.fr/guides/sauvegarde-des-systemes-dinformation) | Stratégie, copies séparées, intégrité et exercices de restauration.                                                                                                                                  | Même conclusion.                                                                                               |
| [Règlement (UE) 2023/2854, article 29](https://eur-lex.europa.eu/eli/reg/2023/2854/oj?locale=fr)                               | Suppression progressive des frais de changement de fournisseur, avec fin prévue au 12 janvier 2027 ; certains frais ordinaires, de résiliation anticipée ou services additionnels restent distincts. | La formulation datée du guide est juste si ces limites restent visibles.                                       |
| [Commission européenne — Data Act explained](https://digital-strategy.ec.europa.eu/en/factpages/data-act-explained)            | Vue d’ensemble officielle des règles de changement et d’interopérabilité.                                                                                                                            | Source de contexte, pas preuve d’une migration gratuite.                                                       |

### 7.5 Benchmark international de méthode

- Le [GAO Cost Estimating and Assessment Guide](https://www.gao.gov/products/gao-20-195g)
  demande une base explicite, une structure de coûts, des hypothèses, une vue
  cycle de vie, une sensibilité et une mise à jour par les coûts réels.
- L’[AQuA Book](https://www.gov.uk/guidance/the-aqua-book), publié dans sa
  version consultée le 30 juillet 2025, insiste sur les rôles, le journal des
  hypothèses, le versionnement et l’assurance indépendante.
- Les [outils de model quality assurance du DESNZ](https://www.gov.uk/government/publications/energy-security-and-net-zero-modelling-quality-assurance-qa-tools-and-guidance)
  fournissent un autre repère public pour gouverner un modèle.
- Le référentiel allemand BSI `CON.3` rappelle notamment que le miroir n’est
  pas une sauvegarde et que RPO et restauration doivent être testés.

Le guide reprend déjà plusieurs de ces principes. Pour atteindre le niveau
annoncé, il lui manque surtout une base de coûts visible/versionnée et un
export permettant une assurance indépendante.

## 8. Benchmark éditorial français actuel

Échantillon exploratoire, pas mesure exhaustive du marché et **aucune promesse
de classement** :

| Contenu consulté                                                                                                                                                                      | Force utile                                                               | Limite par rapport au guide audité                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| [Access it — Transformer Excel en application](https://www.access-it.fr/actualite/transformer-excel-application/) (16 juin 2026)                                                      | Trajectoires retenue, augmentation, hybride et sur-mesure bien racontées. | Contenu commercial sans même fixture, TCO rejouable ni dossier de preuve.                                              |
| [ZeroBug — Power Apps pour une PME](https://www.zerobug.fr/blog/power-apps-application-metier-pme/) (5 juin 2026)                                                                     | Cas d’usage concrets et entrée accessible pour PME.                       | Présente de façon trop large Power Apps comme inclus ou sans coût outil ; pas de comparaison économique reproductible. |
| [France Num — pourquoi utiliser des outils no-code](https://www.francenum.gouv.fr/guides-et-conseils/pilotage-de-lentreprise/numerisation-des-processus/pourquoi-utiliser-des-outils) | Panorama public plus neutre des usages et limites.                        | Ne vise pas une décision au même niveau de détail opérationnel.                                                        |

Le guide Hagnéré Code apporte davantage de valeur visible par son cas continu,
ses scénarios et son droit de conserver Excel. Il ne peut toutefois convertir
ce surcroît de couverture en supériorité démontrée tant que le résultat
interactif n’est pas reproductible candidat par candidat.

## 9. Parcours lecteur, pédagogie et objections

### Points solides

- la page ne présume pas que le sur-mesure est la bonne sortie ;
- cinq issues sont nommées et chacune a un domaine d’emploi ;
- un seul jeu de données traverse ajout, correction, import, suppression,
  restauration et pièces jointes ;
- les inconnues X et I restent visibles au lieu d’être complètement cachées ;
- les sensibilités rendent les écarts annuels concrets ;
- titulaire, suppléant, réversibilité et restauration dépassent la simple
  comparaison de fonctionnalités ;
- la page formule des objections loyales au no-code, au standard et au
  développement.

### Ruptures de compréhension

Le hero commence par la méthode. Une meilleure entrée commencerait par la
situation du lecteur : fichier devenu critique, plusieurs utilisateurs,
erreurs, propriétaire unique ou besoin d’audit. La méthode viendrait ensuite
comme réponse.

Le mot « comparable » est trop fort lorsque les hypothèses restent invisibles
et que X/I valent zéro. « Comparable sous les hypothèses ci-dessous » serait
déjà plus exact, à condition d’afficher ces hypothèses.

Le diagnostic mélange aujourd’hui trois niveaux :

```text
déclaré par le lecteur
→ documenté par une référence
→ vérifié par un tiers ou un test
```

Ces niveaux doivent devenir distincts. Une case cochée ne prouve pas une
restauration, un journal d’audit ou une réversibilité.

Enfin, « mesurer deux semaines » et « Jours 1 à 10 » sont compatibles seulement
si la page dit explicitement « dix jours ouvrés ». Ce détail est mineur, mais
il compte dans un plan destiné à être exécuté.

## 10. SEO, données structurées, maillage et conversion

### Conforme sur le snapshot

- titre et métadescription dans des longueurs exploitables ;
- URL canonique cohérente ;
- image Open Graph dédiée et métadonnées Twitter ;
- JSON-LD `Article` et `BreadcrumbList` ;
- auteur, date de publication et date de modification exposés ;
- aucune donnée structurée trompeuse `FAQPage`, `HowTo`, `Offer` ou
  `wordCount` ;
- une seule FAQ visible dans la page, sans schéma FAQ interdit ;
- maillage entrant déjà fourni par plusieurs guides connexes : CRM,
  automatisation, no-code, cahier des charges, ERP et coûts ;
- les événements analytiques ne contiennent pas les réponses du diagnostic ;
- la mention « aucune réponse envoyée » est cohérente avec l’implémentation
  contrôlée et les événements sont soumis aux garde-fous de consentement.

### Non conforme ou à corriger

1. **Robots :** incident P0-01. Le statut de revue doit commander la balise.
2. **Promesse de métadescription :** « 15 coûts complets » doit être ramené à
   « 15 estimations à hypothèses explicites » ou équivalent.
3. **Langue du hero :** deux garde-fous ciblés échouent.
4. **CTA :** deux appels commerciaux pointent vers la même route.
5. **Export :** un artefact incomplet ne peut pas servir de preuve de décision.

## 11. Contrôles automatiques rejoués

| Contrôle                                                                                         | Résultat                                                     | Lecture                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `npx vitest run --maxWorkers=2 src/lib/excel-decision-diagnostic.test.ts src/lib/guides.test.ts` | **42/43 réussis**                                            | Le moteur réussit 33/33. Le seul échec ciblé est le garde-fou robots de cette route.                                                                       |
| `npm test -- src/lib/guide-human-language.test.ts`                                               | **2 échecs propres au guide**                                | Hero non adressé au lecteur ; terme interdit `périmètre`. Les trois autres échecs de cette commande concernent `securite-saas-b2b` et sont hors périmètre. |
| `npm run check:seo` global                                                                       | **409 réussis, 9 échoués ; 43/47 fichiers de tests réussis** | Trois échecs concernent ce guide : robots et les deux contrôles de langue. Les six autres relèvent de travaux partagés hors périmètre.                     |
| ESLint ciblé page, OG, composant, moteur, tests et registre                                      | **Réussi**                                                   | Aucun défaut de lint ciblé.                                                                                                                                |
| TypeScript sans émission                                                                         | **Réussi**                                                   | Aucun défaut de typage statique.                                                                                                                           |
| `git diff --check` ciblé                                                                         | **Réussi**                                                   | Aucun défaut d’espaces ou de patch sur les fichiers contrôlés.                                                                                             |

Les tests existants valident bien l’arithmétique nominale. Ils ne détectent pas
encore la liaison produit-prix, la fuite d’état entre candidats, l’absence de
preuve ni la faiblesse sémantique de `basis`.

## 12. Ordre de correction recommandé

1. Fermer P0-02 à P0-05 dans le modèle de données et le moteur.
2. Ajouter les tests négatifs avant de reconnecter l’interface.
3. Fermer P0-03 dans l’état React et vérifier les cinq candidats en séquence.
4. Publier les hypothèses et rendre l’export autonome pour fermer P1-01 et
   P1-02.
5. Compléter AppSheet, corriger le hero, le plan et les statuts exportés.
6. Réduire à un CTA commercial.
7. Ajouter `guideRobots`, conserver le statut de revue, régénérer un manifest
   sur le snapshot corrigé.
8. Rejouer P3, puis seulement lancer P4 et demander l’autorisation humaine de
   publication.

## 13. Résiduel explicitement laissé à P4

Cette passe n’a contrôlé :

- ni le navigateur réel ;
- ni les largeurs 320, 360, 390, 430, 640, 768, 1 024, 1 280, 1 440 et
  1 600 px ;
- ni les thèmes clair/sombre ;
- ni la navigation clavier, le lecteur d’écran, le focus, les erreurs et les
  annonces dynamiques du diagnostic ;
- ni l’impression ou le PDF réel ;
- ni le débordement des tableaux et des libellés ;
- ni la route publiée, le HTML servi, la balise robots de production, le
  sitemap, le déploiement ou l’indexation.

Ces éléments ne sont ni réussis ni échoués ici : ils sont **non vérifiés**. Le
statut éditorial doit rester en revue tant que les P0/P1 ne sont pas fermés,
qu’un nouveau P3 n’est pas vert et que la P4 réelle n’est pas effectuée.

## 14. Décision finale

```text
Qualité du fond : substantielle
Exactitude des calculs visibles : réussie
Fiabilité du verdict interactif : insuffisante
Gouvernance d’indexation : non conforme
P0 / P1 / P2 : 5 / 5 / 3
Score : 61/100
Verdict P3 froid : NO-GO
```

Le guide mérite d’être corrigé plutôt que simplifié : son avantage est
précisément de relier les données, les opérations, le coût, la preuve et la
réversibilité. La prochaine passe doit rendre cette chaîne réellement
reproductible :

```text
un candidat
→ ses hypothèses datées
→ ses coûts propres
→ ses critères et preuves
→ son verdict
→ un export complet
→ une comparaison entre cinq dossiers autonomes
```

Tant que cette chaîne n’existe pas, la page peut informer, mais elle ne peut pas
encore soutenir la promesse d’une décision défendable à périmètre égal.
