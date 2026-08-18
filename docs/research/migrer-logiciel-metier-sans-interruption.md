# Dossier de recherche — Migrer un logiciel métier sans interruption

> Slug cible : `migrer-logiciel-metier-sans-interruption`
> Passage : P3 — polish rédactionnel
> Date de gel du corpus : 30 juillet 2026
> Statut éditorial visé : `ready-for-human-review`
> Publication : **non autorisée dans ce passage**

## 0. Règle de travail

Ce dossier applique une règle de restauration avant création. La route ayant
disparu, quatre états ont été comparés avant d’écrire :

1. le checkout actif ;
2. `origin/main` ;
3. l’historique Git ;
4. l’URL publique réellement servie.

Le dernier snapshot riche retrouvé sert uniquement d’inventaire de risques. Son
texte n’est pas restauré et n’est pas recyclé. Le nouveau guide adopte une
architecture, un cas fictif, un outil et un vocabulaire propres.

La thèse éditoriale est la suivante :

> « Sans interruption » ne signifie pas promettre zéro seconde d’arrêt. Cela
> signifie définir comment l’activité continue, empêcher deux sources de vérité
> concurrentes, répéter la bascule et préserver assez de temps pour vérifier ou
> revenir en arrière.

Le guide nomme son artefact le **budget de bascule réversible**. Il combine cinq
preuves non compensables et quatre durées issues de la répétition. C’est une
méthode éditoriale Hagnéré Code, pas une norme, une certification, un audit à
distance ou une garantie de disponibilité.

## 1. Inventaire de disparition

### 1.1 Checkout actif

- aucune route
  `src/app/guides/migrer-logiciel-metier-sans-interruption/` ;
- aucun actif dans
  `public/guides/migrer-logiciel-metier-sans-interruption/` ;
- un ancien dossier de recherche et des manifestes existaient encore, mais leur
  snapshot courant ne pouvait plus être vérifié puisque la route avait été
  supprimée.

### 1.2 `origin/main`

`origin/main` conserve le dossier de recherche et les manifestes P1 à P4, mais
ne contient plus la route ni les actifs du slug.

### 1.3 Historique Git

| Élément                                  | Résultat                                                                                      |
| ---------------------------------------- | --------------------------------------------------------------------------------------------- |
| Première apparition de la route          | `14a388b91c2199ba1309cba304653248d6baf084` — « Ajoute dix guides SEO orientés dirigeants »    |
| Dernier snapshot riche avant suppression | `2965f520f13af5d2a1b9ea64d1d9e63cc83bc90d`                                                    |
| Suppression                              | `1e2abea69289e9d856dfeba392237f11bed6d293` — « feat: rebuild guides with four-pass workflow » |
| Blob historique de la page               | `e2a54365b1c7655fc6bb958ffa59f977e7110ca8`                                                    |
| Stabilité du blob                        | identique dans tous les snapshots vérifiés entre `14a388b` et `2965f52`                       |
| Volume historique                        | 951 lignes, 4 472 mots, 41 099 octets                                                         |
| Image sociale historique                 | 166 lignes                                                                                    |
| SHA-256 de la recherche historique       | `adbb5fcaa6eac5f4a0ad3592ce56e5a4f5207f6155e25e904f5db2e5c54a6c78`                            |

Le manifeste P4 du snapshot pré-suppression vérifie ses dix entrées. Le
manifeste courant échoue parce que les fichiers de route ont disparu et que les
fichiers partagés ont évolué. Cette différence ne prouve ni une régression de
contenu ni une publication : elle prouve seulement que le snapshot courant
n’est plus celui qui avait été contrôlé.

### 1.4 HTML public

L’URL
`https://hagnere-code.ai/guides/migrer-logiciel-metier-sans-interruption`
répond par une redirection HTTP 308 vers
`/services/outils-internes-sur-mesure`. La cible répond 200, mais l’ancien guide
n’est plus servi. Il n’existe donc pas de version publique riche à restaurer.

### 1.5 Décision de restauration

**Création neuve.** Le snapshot historique le plus riche est conservé comme
inventaire de thèmes à ne pas oublier :

- choix entre bascule unique, lots et coexistence ;
- répétition de la bascule ;
- vérification des données ;
- décision de retour arrière ;
- mode dégradé ;
- fermeture de l’ancien outil.

En revanche, le plan, les formulations, les chiffres, le cas fictif et l’outil
du snapshot ne sont pas repris.

## 2. Fiche d’identité

```text
Slug : migrer-logiciel-metier-sans-interruption
Statut actuel : Polish P3 terminé — G3 attendu
Requête principale : migrer logiciel métier sans interruption
Moment du parcours : sécuriser une décision de bascule
Lecteur précis : dirigeant, responsable métier ou responsable de projet d’une PME dont l’activité dépend d’un logiciel existant
Situation déclenchante : une nouvelle solution est prête ou presque, mais l’entreprise ne peut pas perdre commandes, interventions, dossiers ou factures pendant le changement
Décision principale après lecture : basculer, réduire le périmètre par lots ou reporter
Niveau de connaissance au départ : métier maîtrisé, vocabulaire technique variable
5 questions indispensables :
1. Quelles opérations doivent continuer pendant la fenêtre de bascule ?
2. Quel système peut encore enregistrer une modification à chaque étape ?
3. Quelles preuves doivent être obtenues avant GO ?
4. Combien de minutes faut-il garder pour vérifier et revenir en arrière ?
5. Qui prononce GO, STOP ou retour arrière ?
3 objections ou craintes :
- « Notre prestataire promet qu’il n’y aura aucune coupure. »
- « Faire fonctionner les deux logiciels en parallèle est forcément plus sûr. »
- « Une sauvegarde suffit pour revenir en arrière. »
Action utile sans contact commercial : remplir le budget de bascule réversible avec les résultats d’une répétition
CTA possible : faire cadrer les dépendances, les preuves et la fenêtre de bascule
Hors périmètre : prix universel, engagement de disponibilité, audit de sécurité, avis juridique, migration propre à un éditeur ou à un cloud
Date de la recherche : 30 juillet 2026
Responsable de la synthèse : passe P1 du second orchestrateur
```

## 3. Contrat de langage humain

- Phrase exacte que le lecteur pourrait dire au téléphone : « Je veux changer
  de logiciel, mais si les commandes ou les factures s’arrêtent lundi matin, je
  bloque l’entreprise. »
- Réponse qu’il attend en une phrase : « Faites répéter la bascule et le retour
  arrière sur le même périmètre, puis ne donnez GO que si cinq preuves sont
  acquises et si la fenêtre garde une marge mesurée. »
- Terme central expliqué sans jargon : la **bascule** est le moment où le
  nouveau logiciel devient la source de référence pour une opération donnée.
- Mots ordinaires employés par le lecteur : ancien logiciel, nouveau logiciel,
  commandes, dossiers, factures, copie, vérification, retour, responsable.
- Mots d’agence ou de consultant à éviter : transformation digitale, seamless,
  best-in-class, gouvernance holistique, conduite du changement 360.
- Projet des 150 premiers mots : partir du lundi matin et répondre sans
  promettre l’impossible.
- Ce que le lecteur saura décider après ces 150 mots : demander une répétition,
  un responsable de décision, une source de vérité et une marge de retour.
- H2 relus isolément : à contrôler après intégration.
- Comparaison comprise à 390 px sans colonne masquée : composant de tableau
  prévu avec cartes mobiles.
- FAQ dont la première phrase répond : oui, à contrôler après intégration.
- CTA formulé comme résultat pour le prospect : « Faire cadrer ma bascule ».

### Test sujet, action, résultat

| Formulation abstraite à éviter | Qui agit ?                       | Action concrète                                                                 | Résultat lecteur                                           | Formulation retenue                                                                |
| ------------------------------ | -------------------------------- | ------------------------------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Sécuriser la transition        | Le responsable de bascule        | attribue chaque opération à une seule source d’écriture                         | les équipes savent où enregistrer une modification         | « Écrivez quel logiciel enregistre chaque opération pendant la transition. »       |
| Valider la migration           | Les responsables métier désignés | rejouent des parcours et rapprochent des dossiers connus                        | les écarts deviennent observables                          | « Faites rejouer les parcours critiques et rapprochez des dossiers témoins. »      |
| Assurer la continuité          | L’entreprise                     | prépare un mode dégradé et son retour à la normale                              | l’activité peut continuer dans une limite connue           | « Décrivez le mode dégradé, sa capacité et la façon de ressaisir les opérations. » |
| Prévoir un rollback            | L’équipe de bascule              | répète le retour et mesure sa durée                                             | la décision intervient avant que la fenêtre soit consommée | « Répétez le retour arrière et réservez ses minutes dans la fenêtre. »             |
| Décommissionner le legacy      | Le propriétaire du système       | observe, met en lecture seule, archive ou supprime selon les règles applicables | une dépendance cachée n’est pas détruite trop tôt          | « Désactivez avant de supprimer et contrôlez un cycle métier complet. »            |

### Test de l’ouverture

- [x] la situation vécue apparaît avant la méthode de l’agence ;
- [x] aucun sigle ne retarde la réponse ;
- [x] aucun lexique de masse ne précède la décision ;
- [x] aucune métaphore ne devient un système à apprendre ;
- [x] la réserve sur « zéro interruption » est immédiatement suivie d’une
      méthode concrète.

## 4. Cannibalisation

| Page existante                               | Intention                                                 | Frontière du nouveau guide                                                                         | Lien ou arbitrage                                                          |
| -------------------------------------------- | --------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `/guides/reprendre-logiciel-metier-existant` | décider si une nouvelle équipe peut reprendre un existant | ici, la capacité de reprise est supposée étudiée ; la décision porte sur la bascule vers une cible | lien contextuel depuis la fin du guide de reprise après validation humaine |
| `/services/outils-internes-sur-mesure`       | présenter une offre de création d’outil                   | le guide fournit une méthode autonome de bascule                                                   | lien commercial seulement après la réponse                                 |
| `/services/maintenance-evolution`            | présenter une offre de maintenance                        | aucune offre de maintenance ni audit de reprise dans ce guide                                      | pas de CTA concurrent                                                      |
| `/guides/automatiser-processus-metier`       | choisir un premier processus à automatiser                | ici, le processus et la cible existent déjà ; on sécurise le changement de système                 | pas de duplication du calcul d’automatisation                              |

**Justification d’une URL distincte :** la page répond à la décision temporelle
et opérationnelle « pouvons-nous changer de source de vérité dans cette fenêtre
sans perdre les opérations de transition ? », que les pages de création, de
reprise et d’automatisation ne traitent pas.

## 5. Demande et vocabulaire du lecteur

Observation qualitative du 30 juillet 2026, non assimilable à une mesure de
volume :

- migrer logiciel métier sans interruption ;
- changer de logiciel sans arrêter l’activité ;
- plan de bascule logiciel ;
- migration données logiciel métier ;
- migration progressive ou bascule unique ;
- plan de retour arrière ;
- ancien et nouveau logiciel en parallèle ;
- vérifier les données après migration.

La plupart des résultats emploient « migration progressive », « tests »,
« rollback » et « coexistence ». Ils expliquent rarement :

- qui a le droit d’écrire dans quel système pendant la transition ;
- comment traiter les opérations nées après la dernière copie ;
- à quelle minute la décision de retour doit être prise ;
- pourquoi la durée du retour appartient à la fenêtre ;
- pourquoi une réponse manquante ne vaut pas zéro.

## 6. Carte concurrentielle

Les pages commerciales servent à observer l’offre de réponse, pas à soutenir
les faits du guide.

| Page observée le 30/07/2026                           | Réponse et angle                                            | Bon point                                        | Manque décisionnel                                                                        | Conflit d’intérêt            |
| ----------------------------------------------------- | ----------------------------------------------------------- | ------------------------------------------------ | ----------------------------------------------------------------------------------------- | ---------------------------- |
| DINNO — refonte de système d’information              | modernisation progressive et conservation des règles métier | alerte sur les règles implicites et le découpage | pas de budget de fenêtre ni verdict avec donnée manquante                                 | vend la refonte              |
| Dawap — refonte logiciel métier                       | lots, coexistence, tests, suivi et retour                   | cite la reprise/archivage des données            | réponse courte, sans arbitrage de source d’écriture                                       | vend la refonte              |
| Pragmea — refonte d’application web                   | audit, vision produit et migration progressive              | distingue des incréments utiles                  | statistiques secondaires fragiles et peu de critères GO/STOP                              | vend la refonte              |
| Exeis Conseil — cut-over plan                         | détaille le séquencement des tâches                         | utile pour le déroulé et les propriétaires       | pas d’outil autonome ni calcul explicite de la marge de retour                            | vend du conseil              |
| Edana — changer de logiciel sans perturber l’activité | coexistence et lots                                         | aborde la continuité métier                      | présente parfois le parallèle comme rassurant sans traiter assez le double enregistrement | vend des services numériques |

**Angle mort commun :** la bascule est présentée comme une suite de tâches ou
une préférence d’architecture, alors que le dirigeant doit surtout décider avec
des preuves, une source d’écriture explicite et une fenêtre mesurée.

**Valeur originale :** un outil local sans score moyen qui combine cinq preuves
bloquantes à un budget de temps. Il peut conclure STOP, REPORTER, RÉDUIRE PAR
LOTS ou CANDIDAT À UNE BASCULE ENCADRÉE.

## 7. Corpus primaire retenu

Dates de contenu et de consultation sont distinguées.

| ID  | Source primaire                                                                                                                                                        | Passage utile                                                                                                                                                                                                                                       | Usage et limite                                                                                                           | Date/consultation                                                     |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| S1  | [ANSSI — Sécuriser une migration numérique, v1.0](https://messervices.cyber.gouv.fr/documents-guides/anssi_essentiels_migration_1.0.pdf)                               | associer métier, DSI et sécurité ; maintenir la cartographie jusqu’au retrait ; adapter PCA/PRA ; protéger les exports ; conserver les moyens d’accéder aux anciennes sauvegardes ; tester les procédures avant lancement ; auditer après migration | socle public directement consacré à la migration ; document « Les Essentiels », pas un référentiel détaillé ni une norme  | publié le 23/01/2026 ; PDF v1.0 daté 01/2026 ; consulté le 30/07/2026 |
| S2  | [ANSSI — Sauvegarde des systèmes d’information, v1.1](https://messervices.cyber.gouv.fr/documents-guides/anssi_fondamentaux_sauvegarde_systemes_dinformation_v1.1.pdf) | la stratégie tient compte de la perte de données et de la durée d’interruption admissibles ; recommandations à adapter ; la sauvegarde ne remplace pas tous les besoins de réplication ou d’archivage                                               | soutient l’exigence de restauration répétée et de périmètre ; pas de durée universelle                                    | version 1.1 du 27/11/2025 ; consultée le 30/07/2026                   |
| S3  | [CNIL — Prévoir la continuité et la reprise d’activité](https://www.cnil.fr/fr/securite-prevoir-la-continuite-et-la-reprise-dactivite)                                 | prévoir un fonctionnement dégradé sans réduire la protection ; tester les restaurations et le plan ; prévoir le retour à la normale ; faire des exercices                                                                                           | données personnelles et sécurité ; ne fixe pas un plan de bascule universel                                               | page du 14/03/2024 ; consultée le 30/07/2026                          |
| S4  | [CNIL — Sauvegarder](https://www.cnil.fr/fr/securite-sauvegarder)                                                                                                      | sauvegardes régulières, protégées et séparées ; tester intégrité et restauration ; ne pas découvrir leur inutilisabilité le jour du besoin                                                                                                          | appuie la preuve de retour ; la règle 3-2-1 citée par la CNIL reste un conseil général à adapter                          | page du 14/03/2024 ; consultée le 30/07/2026                          |
| S5  | [CNIL — Encadrer les développements informatiques](https://www.cnil.fr/fr/securite-encadrer-les-developpements-informatiques)                                          | tests complets ; environnement distinct de la production ; données fictives ou anonymisées autant que possible ; préproduction avec données réelles sous conditions et sécurité équivalente                                                         | cadre les copies et environnements de répétition ; ne rend pas des données réelles nécessaires                            | page du 14/03/2024 ; consultée le 30/07/2026                          |
| S6  | [CNIL — Gérer la sous-traitance](https://www.cnil.fr/fr/securite-gerer-la-sous-traitance)                                                                              | garanties suffisantes et vérifiables ; contrat ; restitution/destruction ; incidents ; chiffrement et traçabilité selon le cas                                                                                                                      | utile si un prestataire traite des données personnelles ; ne vaut pas analyse du contrat réel                             | page du 14/03/2024 ; consultée le 30/07/2026                          |
| S7  | [RGPD — texte officiel EUR-Lex](https://eur-lex.europa.eu/eli/reg/2016/679/oj?locale=fr)                                                                               | art. 5 : minimisation, exactitude, limitation de conservation ; art. 28 : sous-traitance ; art. 32 : confidentialité, intégrité, disponibilité, résilience, restauration et tests réguliers selon le risque                                         | obligation dépendant du traitement réel ; aucune « conformité automatique » par l’outil                                   | règlement (UE) 2016/679 ; consulté le 30/07/2026                      |
| S8  | [AWS Prescriptive Guidance — Cutover stage](https://docs.aws.amazon.com/prescriptive-guidance/latest/best-practices-migration-cutover/cutover-stage.html)              | gel des écritures, copie finale, synchronisation, routage et tests ; choix global ou progressif selon dépendances ; seuils de retour, gestion des données et décideur nommé                                                                         | illustration technique d’un fournisseur cloud, non norme générale et non prescription d’architecture pour chaque logiciel | documentation consultée le 30/07/2026                                 |
| S9  | [Microsoft Azure Well-Architected — Safe deployments](https://learn.microsoft.com/en-us/azure/well-architected/operational-excellence/safe-deployments)                | exposition progressive, contrôles de santé, arrêt en cas d’anomalie, complexité des retours sur données avec état, désactivation avant suppression                                                                                                  | illustration fournisseur pour déploiements ; ne prouve pas qu’une bascule progressive est toujours possible               | mise à jour le 17/06/2026 ; consultée le 30/07/2026                   |

## 8. Fiche de preuves

| Affirmation utilisable                                                                                   | Source     | Nature                                 | Périmètre et nuance                                        | Emplacement visible                 | Conséquence lecteur                                                                  |
| -------------------------------------------------------------------------------------------------------- | ---------- | -------------------------------------- | ---------------------------------------------------------- | ----------------------------------- | ------------------------------------------------------------------------------------ |
| Une migration sûre associe métier, informatique et sécurité en amont                                     | S1         | bonne pratique ANSSI                   | à adapter à la taille du projet                            | section répétition                  | un parcours métier doit avoir un responsable métier, pas seulement un test technique |
| Les procédures opérationnelles et de sécurité doivent être définies et testées avant lancement           | S1         | bonne pratique ANSSI                   | « Les Essentiels », pas certification                      | section décision GO/STOP            | une procédure écrite non répétée reste une inconnue                                  |
| Les anciennes sauvegardes doivent rester accessibles pendant la transition selon leur durée de vie       | S1         | bonne pratique ANSSI                   | dépend de la politique de sauvegarde                       | section retour/retrait              | ne pas supprimer l’environnement ou les clés trop tôt                                |
| La restauration doit être testée                                                                         | S2, S3, S4 | recommandations publiques convergentes | résultat à dater et borner                                 | outil et section répétition         | « sauvegarde présente » ne suffit pas                                                |
| Un mode dégradé ne doit pas abaisser la protection des données et doit prévoir le retour à la normale    | S3         | recommandation CNIL                    | concerne les données personnelles et la sécurité           | section contrat de continuité       | le cahier ou fichier temporaire a des accès, une conservation et une ressaisie       |
| Les tests utilisent autant que possible des données fictives ou anonymisées et un environnement distinct | S5         | recommandation CNIL                    | données réelles en préproduction seulement sous conditions | section répétition                  | limiter les copies et les protéger                                                   |
| Une bascule progressive dépend de l’architecture et des dépendances                                      | S8, S9     | documentation fournisseur              | ne pas généraliser à tous les logiciels                    | comparaison des stratégies          | choisir par dépendances, pas par effet de mode                                       |
| Un retour après de nouvelles écritures exige une stratégie de données explicite                          | S8, S9     | documentation fournisseur              | exemple cloud ; principe opérationnel à adapter            | sections source de vérité et retour | interdire le double maître implicite et tenir un journal de transition               |
| Les données personnelles confiées à un prestataire exigent un contrat et des garanties vérifiables       | S6, S7     | cadre CNIL/RGPD                        | qualification par responsables compétents                  | section données                     | ne pas transmettre une copie sans rôle, sécurité et sort prévus                      |

### Contradictions et données à ne pas publier

- **« Zéro interruption garanti »** : retiré. Une fenêtre sans indisponibilité
  visible peut être visée, mais l’inconnue et les dépendances rendent une
  garantie universelle trompeuse.
- **« Le parallèle est toujours plus sûr »** : retiré. Deux systèmes capables
  d’écrire la même information peuvent créer des divergences. La coexistence
  n’est défendable que si la source de référence, la synchronisation, le
  traitement des écarts et la date de fin sont explicites.
- **« Une sauvegarde permet forcément de revenir »** : retiré. La restauration,
  les clés, les dépendances et la durée doivent être testées.
- **« Une bascule progressive est toujours préférable »** : retiré. Certaines
  dépendances, contraintes de licence, d’identité, de données ou de latence
  imposent un déplacement coordonné.
- **Durées types, taux de succès et statistiques de projet** : non publiés faute
  de corpus primaire comparable et daté.
- **Valeurs du cas historique** : non reprises.

## 9. Calcul reproductible : budget de bascule réversible

### 9.1 Entrées

La fenêtre vient de l’échéance fixée par le métier. Les quatre durées d’étape
viennent de la répétition d’un périmètre représentatif de la décision. Toutes
les valeurs utilisent la même unité, la minute :

- `fenêtre` : durée réellement disponible entre le gel des écritures et
  l’échéance métier de reprise ;
- `copieEtActivation` : copie finale ou synchronisation, activation et
  redirection ;
- `verification` : contrôles métier, données, droits, intégrations et
  supervision ;
- `retour` : arrêt de la cible, remise en service de la source et traitement
  prévu des écritures de transition ;
- `decision` : temps réservé pour instruire les écarts et faire prononcer le
  verdict par la personne nommée.

### 9.2 Formules

```text
temps_requis =
  copie_et_activation
  + vérification
  + retour_arrière
  + décision

marge = fenêtre_disponible - temps_requis

taux_de_marge = marge / fenêtre_disponible × 100
```

La durée du retour est réservée même si l’objectif est de ne pas l’utiliser.
Sinon, la décision peut arriver après consommation de la fenêtre. Le taux de
marge est seulement un repère descriptif ; aucun seuil universel de GO n’est
inventé.

### 9.3 Précédence de décision

1. une preuve `bloqué` donne `STOP` ;
2. une preuve `non renseigné` donne `REPORTER` ;
3. une preuve `partiel` donne `RÉDUIRE PAR LOTS` ;
4. une durée absente, nulle, négative, non finie ou non mesurée donne
   `REPORTER` ;
5. un temps requis supérieur à la fenêtre donne `RÉDUIRE PAR LOTS` ;
6. cinq preuves démontrées et une marge non négative donnent
   `CANDIDAT À UNE BASCULE ENCADRÉE`.

Le dernier verdict exige toujours une revue humaine. Il ne garantit ni absence
d’incident, ni conformité, ni compatibilité complète.

### 9.4 Cas fictif nouveau

Entreprise fictive de négoce :

- 680 commandes ouvertes ;
- 74 expéditions attendues le lendemain ;
- 12 rôles utilisateurs ;
- 24 dossiers témoins choisis avant la répétition ;
- fenêtre disponible : 240 min.

Première répétition, périmètre global :

```text
92 min copie et activation
+ 68 min vérification
+ 62 min retour arrière
+ 25 min décision
= 247 min nécessaires

240 - 247 = -7 min
```

Verdict : **RÉDUIRE PAR LOTS**, même si les cinq preuves sont démontrées. Il
manque sept minutes avant même un aléa.

Répétition du premier lot :

```text
61 min copie et activation
+ 52 min vérification
+ 54 min retour arrière
+ 20 min décision
= 187 min nécessaires

240 - 187 = 53 min de marge
53 / 240 × 100 = 22,08 %, affiché 22,1 %
```

Verdict de l’outil : **CANDIDAT À UNE BASCULE ENCADRÉE**, sous réserve de la
revue humaine et du maintien des preuves. Ces valeurs sont fictives et ne sont
ni une moyenne ni une promesse.

Contrôle inverse :

```text
187 + 53 = 240
```

## 10. Empreinte éditoriale à ne pas reproduire

| Guide proche                         | Ouverture                          | Progression                  | Artefact                       | Risque de répétition                                                         |
| ------------------------------------ | ---------------------------------- | ---------------------------- | ------------------------------ | ---------------------------------------------------------------------------- |
| `reprendre-logiciel-metier-existant` | départ du mainteneur et dépôt reçu | cinq capacités de relève     | test de relève + procès-verbal | éviter cinq mêmes verbes, inventaire de reprise et issue « mission limitée » |
| `automatiser-processus-metier`       | choix du premier processus         | portes puis calcul d’intérêt | matrice d’automatisation       | éviter score économique ou priorisation de processus                         |
| `valider-idee-saas-avant-developper` | idée avant produit                 | hypothèses et expériences    | fiche de preuve marché         | éviter séquence d’entretiens et décision produit                             |

Choix du nouveau guide :

```text
Tension motrice : il reste assez de temps pour réussir, mais reste-t-il assez de temps pour constater un échec et revenir ?
Ouverture : lundi matin et opérations réelles, pour répondre avant le vocabulaire technique
Progression : contrat d’activité → source d’écriture → forme de bascule → répétition → outil → cas chiffré → jour J → retour → retrait
Artefact signature : budget de bascule réversible
Rythme : phrases directes, verbes métier, réserves immédiatement suivies d’une action
Place du CTA : après la méthode complète, vers le cadrage d’un contexte réel
Conclusion : un relevé GO/STOP transmissible, pas une promesse commerciale
Différences :
1. combinaison de preuves qualitatives et d’une fenêtre en minutes ;
2. question de la source d’écriture pendant la transition ;
3. retour arrière traité comme une issue normale et mesurée ;
4. cas fictif où « tout est vert » mais la fenêtre impose de réduire le périmètre ;
5. aucun score moyen.
```

## 11. Plan annoté

| Section            | Question résolue                                            | Preuve ou exemple                         | Décision                                                 | Format                     |
| ------------------ | ----------------------------------------------------------- | ----------------------------------------- | -------------------------------------------------------- | -------------------------- |
| Réponse courte     | que signifie honnêtement « sans interruption » ?            | contrat du lundi matin                    | exiger une bascule réversible                            | ouverture + schéma         |
| Contrat d’activité | que doit continuer à fonctionner ?                          | parcours et capacité du mode dégradé      | fixer le périmètre métier                                | matrice                    |
| Source d’écriture  | où enregistrer une opération pendant la transition ?        | exemples commande/facture                 | interdire le double maître implicite                     | tableau                    |
| Forme de bascule   | global, lots ou coexistence ?                               | dépendances et limites S8/S9              | choisir par preuve                                       | comparaison                |
| Répétition         | que faut-il vraiment rejouer ?                              | S1–S5                                     | produire les cinq preuves et quatre durées               | déroulé                    |
| Outil              | le dossier permet-il GO ?                                   | calcul pur et précédence                  | STOP / REPORTER / LOTS / CANDIDAT                        | composant interactif local |
| Cas fictif         | pourquoi une preuve technique ne suffit pas ?               | 247 min pour 240, puis 187 min            | réduire et répéter                                       | calcul reproductible       |
| Jour J             | qui décide et dans quel ordre ?                             | journal horodaté                          | prononcer avant la limite                                | liste chronologique        |
| Retour             | comment reprendre sans perdre les écritures de transition ? | source d’écriture + journal de transition | arrêter proprement et réconcilier                        | procédure                  |
| Après              | quand fermer l’ancien système ?                             | S1/S9                                     | désactiver, observer, archiver ou supprimer selon règles | matrice                    |

## 12. Ressource et conversion

```text
Une ressource est-elle nécessaire ? oui
Problème : distinguer une impression de préparation d’un dossier réellement basculable dans la fenêtre
Résultat autonome : un verdict prudent et un budget en minutes
Format : outil web local ; aucun tableur téléchargeable
Champs : cinq preuves, fenêtre, copie/activation, vérification, retour, décision
Exemple rempli : cas fictif de négoce dans l’article
Conclusion « ne pas basculer » : STOP ou REPORTER
Sources et limites : visibles avant et après l’outil
Données saisies : état React dans le navigateur ; aucune transmission ni persistance
Processus de génération : logique TypeScript pure testée
QA : combinaisons de portes, valeurs invalides, formatage, accessibilité native, remise à zéro
Limites : ne remplace ni répétition, audit, responsable sécurité, responsable du traitement, délégué à la protection des données ou conseil juridique
Bon fit Hagnéré Code : logiciel métier avec dépendances et périmètre explicables
Mauvais fit : urgence cyber en cours, droits incertains, absence d’accès autorisé, migration non observée
Action non commerciale : réduire le lot ou planifier une répétition
CTA : « Faire cadrer ma bascule » vers `/demarrer-un-projet`
```

## 13. Contrat de l’outil

### 13.1 Cinq preuves

1. **Continuité métier démontrée** : parcours critiques et mode dégradé rejoués.
2. **Source d’écriture maîtrisée** : chaque opération a une source de référence
   et un traitement des écritures de transition.
3. **Données rapprochées** : dossiers témoins, totaux et écarts vérifiés avec
   propriétaires.
4. **Retour arrière restauré** : retour exécuté sur un environnement isolé,
   durée et périmètre consignés.
5. **Décision et équipe prêtes** : décideur, responsables, support,
   communication, surveillance et conditions d’arrêt disponibles.

Statuts : `non renseigné`, `partiel`, `démontré`, `bloqué`.

### 13.2 Garanties logiques

- normalisation de toute valeur inattendue vers `non renseigné` ;
- aucune durée préremplie ;
- `0`, nombre négatif, `NaN`, `Infinity`, chaîne vide ou valeur non numérique
  ne devient jamais une durée mesurée ;
- un blocage prime sur tout le reste ;
- une inconnue prime sur une preuve partielle ;
- aucune moyenne entre preuves ;
- le calcul conserve les décimales et arrondit uniquement l’affichage ;
- une somme ou un taux que JavaScript ne peut pas représenter comme un nombre
  fini donne `REPORTER`, jamais un budget contenant `Infinity` ;
- la remise à zéro efface preuves et durées ;
- aucune requête réseau, aucun stockage local, aucun champ libre.

### 13.3 Tests prévus

- les `4^5 = 1 024` combinaisons de preuves ;
- précédence `bloqué > non renseigné > partiel` ;
- cinq preuves démontrées avec marge positive, nulle et négative ;
- durées absentes, nulles, négatives, non finies et décimales ;
- valeurs finies extrêmes dont la somme, la précision ou le taux déborde ;
- objets partiels et valeurs runtime inattendues ;
- cohérence du cas fictif ;
- présence du contrat de prudence dans l’interface.

## 14. Spécification des visuels

Trois ratios, même système visuel mais compositions réellement adaptées :

- `migration-reversible-16x9.svg` et `.webp` : frise source → passage contrôlé
  → cible, avec seuil de décision et retour ;
- `migration-reversible-4x3.svg` et `.webp` : composition empilée pour carte ;
- `migration-reversible-1x1.svg` et `.webp` : composition compacte pour
  partage/carte carrée.

Le 16:9 est visible dans l’article. Les trois WebP alimentent `Article.image`.
Le texte alternatif décrit la relation utile, sans recopier le titre. Les SVG
ne contiennent ni promesse de zéro arrêt ni score universel.

## 15. Handoff des fichiers partagés — ne pas appliquer en P1

Ces modifications sont nécessaires à l’intégration, mais appartiennent à
l’orchestrateur sur la branche propre.

### 15.1 Entrée proposée dans `src/lib/guides.ts`

```ts
{
  slug: "migrer-logiciel-metier-sans-interruption",
  title: "Migrer un logiciel métier sans interruption",
  cardTitle: "Migrer un logiciel métier sans interrompre l’activité",
  metaDescription:
    "Préparez une migration sans arrêt subi : source de vérité, répétition, retour arrière et budget de bascule pour décider GO, STOP ou par lots.",
  cardDescription:
    "Cinq preuves non compensables et un budget en minutes pour basculer, réduire le lot ou reporter sans masquer les inconnues.",
  heroTitle:
    "Migrer un logiciel métier sans interrompre l’activité",
  section: "Outils internes et migration",
  datePublished: "<instant réel d’intégration ISO 8601 +02:00>",
  dateModified: "<même instant tant que la page n’a pas changé>",
  readTimeMin: "<mesure du contenu visible / 200, arrondie au supérieur>",
  articleImagePaths: [
    "/guides/migrer-logiciel-metier-sans-interruption/migration-reversible-16x9.webp",
    "/guides/migrer-logiciel-metier-sans-interruption/migration-reversible-4x3.webp",
    "/guides/migrer-logiciel-metier-sans-interruption/migration-reversible-1x1.webp",
  ],
  editorialStatus: "ready-for-human-review",
}
```

Le `heroTitle` proposé correspond exactement au H1 assemblé par les trois
propriétés du layout. L’orchestrateur doit mesurer le temps de lecture après
intégration ; ne pas convertir une estimation en fait.

### 15.2 Redirection historique

- retirer ce slug de `src/lib/legacy-guide-redirects.ts` ;
- adapter le test de redirections ;
- vérifier qu’aucune redirection ne prend encore priorité sur la route.

### 15.3 Hub et maillage

- ajouter la carte au hub en conservant `editorialStatus:
"ready-for-human-review"` : la route reste `noindex,nofollow` et absente des
  sorties de publication tant que la validation manque ;
- proposer une icône de route ou de permutation, sans nouveau vocabulaire
  public ;
- ajouter après validation un lien contextuel depuis la conclusion de
  `/guides/reprendre-logiciel-metier-existant` :
  « préparer la bascule vers un nouveau logiciel » ;
- ajouter un lien contextuel depuis
  `/services/outils-internes-sur-mesure` seulement si la phrase répond à une
  vraie question de continuité ;
- ne pas éditer manuellement sitemap ou `llms.txt`, qui dépendent du registre.

### 15.4 Validation attendue après intégration

- cohérence H1 / registre / métadonnées / `Article.headline` ;
- JSON-LD limité à `Article` et `BreadcrumbList` ;
- `noindex,nofollow` vérifié ;
- route absente du hub publié, sitemap et `llms.txt` tant que le statut est
  brouillon ;
- build, tests partagés, rendu 390 px et bureau, image sociale 1200 × 630 ;
- aucune publication, indexation ou promesse publique déduite d’un GO local.

## 16. Journal des quatre passes

Propriétaire éditorial : orchestrateur du lot des 100 guides.

| Passe                             | État                        | Date       | Responsable                 | Snapshot             | Blocages                                |
| --------------------------------- | --------------------------- | ---------- | --------------------------- | -------------------- | --------------------------------------- |
| 1. Création complète              | G1 — GO_PASSE_2             | 30/07/2026 | second orchestrateur — P1   | manifeste P1 du slug | aucun pour ouvrir P2                    |
| 2. Enrichissement et vérification | G2 — GO_PASSE_3             | 30/07/2026 | contre-auditeur P2 distinct | manifeste P2 du slug | aucun pour ouvrir P3                    |
| 3. Polish rédactionnel            | Terminée — en attente de G3 | 30/07/2026 | agent P3 distinct           | manifeste P3 du slug | verdict G3 à rendre par l’orchestrateur |
| 4. Antipasse IA et contrôle final | Bloquée                     |            | agent P4 distinct           |                      | G3 non rendu                            |

Une modification d’un fichier du snapshot après création du manifeste invalide
la porte P1 jusqu’à régénération et revue du diff.

## 17. Rapport P1 — création complète

```text
PASSE_1_TERMINEE
Slug : migrer-logiciel-metier-sans-interruption
Fichiers créés ou réécrits :
- docs/research/migrer-logiciel-metier-sans-interruption.md
- src/app/guides/migrer-logiciel-metier-sans-interruption/page.tsx
- src/app/guides/migrer-logiciel-metier-sans-interruption/opengraph-image.tsx
- src/app/guides/migrer-logiciel-metier-sans-interruption/cutover-readiness.ts
- src/app/guides/migrer-logiciel-metier-sans-interruption/cutover-readiness-tool.tsx
- src/app/guides/migrer-logiciel-metier-sans-interruption/cutover-readiness.test.ts
- src/app/guides/migrer-logiciel-metier-sans-interruption/content-quality.test.ts
- public/guides/migrer-logiciel-metier-sans-interruption/migration-reversible-16x9.{svg,webp}
- public/guides/migrer-logiciel-metier-sans-interruption/migration-reversible-4x3.{svg,webp}
- public/guides/migrer-logiciel-metier-sans-interruption/migration-reversible-1x1.{svg,webp}
- docs/research/manifests/migrer-logiciel-metier-sans-interruption-p1.sha256
Contrat de réponse : cinq preuves non compensables + budget de bascule réversible
Sources primaires : ANSSI migration et sauvegarde, CNIL continuité/sauvegarde/développement/sous-traitance, RGPD, documentations AWS et Microsoft bornées comme illustrations
Plan : activité → source d’écriture → stratégie → répétition → outil → cas → jour J → retour → retrait
Calcul : 247 min pour 240, puis 187 min et 53 min de marge sur un lot fictif
Contre-cas : toutes les preuves démontrées, mais fenêtre insuffisante
CTA : Faire cadrer ma bascule → /demarrer-un-projet
Contrôles :
- inventaire checkout / origin/main / historique Git / URL publique avant création
- TypeScript sans émission : OK
- ESLint sur tous les fichiers TypeScript/TSX du slug : OK
- Prettier sur le dossier de recherche et les fichiers TypeScript/TSX : OK
- Vitest : 46/46 (moteur exhaustif, payloads runtime, calculs et qualité publique)
- 1 024 combinaisons de preuves testées
- SVG : xmllint 3/3
- WebP : 1600×900, 1200×900 et 1000×1000, métadonnées Sharp conformes
- inspection visuelle originale des trois ratios par le helper, le propriétaire P1 et l’orchestrateur : OK
- image sociale rendue et inspectée : PNG 1200×630, lisible et non tronquée
- aucun fichier partagé, registre, lock ou Git modifié par cette passe
P0 : 0 dans le snapshot propre au slug
P1 : 0 dans le snapshot propre au slug
Risques résiduels :
- appliquer les changements partagés décrits en section 15 sur la branche propre
- mesurer le temps de lecture sur le HTML intégré
- lancer build et BAT navigateur après intégration ; ils ne sont pas simulés dans cette passe bornée
- confier P2, P3 et P4 à des agents distincts ; aucune de ces passes n’est anticipée ici
Manifeste P1 : docs/research/manifests/migrer-logiciel-metier-sans-interruption-p1.sha256
```

## 18. Rapport P2 — vérification contradictoire

### 18.1 Gel P1 et porte G1

- décision transmise par l’orchestrateur : `GO_PASSE_2` ;
- SHA-256 du manifeste P1 :
  `cc999bab645f4079f1589cb0e4aedfc6e25c36998eedb5fc6a56766ccd0d5e63` ;
- vérification avant modification : 13 fichiers sur 13 conformes ;
- le manifeste P1 reste historique et n’a pas été modifié par P2.

Les neuf sources visibles ont été rouvertes sur leurs domaines officiels le
30 juillet 2026. Les dates et portées annoncées en P1 sont confirmées :

- ANSSI migration : publication du 23/01/2026, PDF v1.0 daté 01/2026 ;
- ANSSI sauvegarde : version 1.1 du 27/11/2025 ;
- quatre fiches CNIL : 14/03/2024 ; leur contenu reste cohérent avec le guide
  pratique CNIL mis à jour en 2026 ;
- Microsoft : mise à jour du 17/06/2026 ;
- AWS : documentation fournisseur sans date de contenu affichée, consultation
  datée plutôt que fraîcheur inventée ;
- RGPD : texte officiel, articles 5, 28 et 32 ; aucune conclusion de conformité
  automatique n’en est tirée.

### 18.2 Registre des affirmations contrôlables

Les formulations répétées dans la FAQ, les tableaux, la prose et l’outil sont
regroupées par conséquence décisionnelle.

| ID  | Affirmation contrôlée                                                                                       | Preuve ou contrôle               | Verdict P2                                            |
| --- | ----------------------------------------------------------------------------------------------------------- | -------------------------------- | ----------------------------------------------------- |
| A01 | aucune garantie universelle de zéro interruption                                                            | S1, S8, S9 et limites du réel    | conservée                                             |
| A02 | la bascule attribue une source de référence à un périmètre                                                  | définition de méthode            | conservée comme méthode, pas comme norme              |
| A03 | cinq preuves non compensables précèdent le budget de temps                                                  | contrat éditorial et moteur      | conservée, revue humaine maintenue                    |
| A04 | le retour et la décision appartiennent au temps requis                                                      | calcul indépendant               | conservée                                             |
| A05 | le mode dégradé ne doit pas réduire la protection et prévoit le retour                                      | S3, S7                           | conservée                                             |
| A06 | un support temporaire peut créer une copie de données à protéger et supprimer                               | S3, S7                           | conservée, conditionnelle au contenu réel             |
| A07 | deux systèmes qui écrivent sans règle peuvent diverger                                                      | S8, S9 et logique de conflit     | conservée                                             |
| A08 | une synchronisation ne décide pas seule quelle version gagne                                                | S8, S9                           | conservée                                             |
| A09 | global, lots et coexistence dépendent de l’architecture et des dépendances                                  | S8, S9                           | conservée, aucune préférence universelle              |
| A10 | une approche progressive peut réduire l’exposition mais n’est pas toujours possible                         | S8, S9                           | conservée avec portée fournisseur                     |
| A11 | un lot ne réduit le risque que s’il isole une dépendance ou une preuve                                      | raisonnement explicite           | conservée comme test de décision                      |
| A12 | des fonctions et licences déjà payées peuvent éviter une coexistence sur mesure                             | vérification contrat/capacité    | ajout décisif, sans supposer leur disponibilité       |
| A13 | nettoyage, interfaces, doubles licences, formation, support, maintenance et sortie ne sont pas dans l’outil | frontière de l’outil             | ajout décisif, aucun prix inventé                     |
| A14 | une répétition doit représenter le périmètre décidé                                                         | S8, contrepoint « non testable » | corrigée ; « même périmètre » absolu retiré           |
| A15 | une condition critique non observée reste inconnue ou partielle                                             | moteur et prudence               | ajout décisif                                         |
| A16 | version, volume, rôles, données, droits, intégrations et pièces jointes bornent la preuve                   | S1, S5, S8                       | conservée                                             |
| A17 | métier, informatique et sécurité doivent être impliqués ; procédures testées avant lancement                | S1                               | conservée, bonnes pratiques non normatives            |
| A18 | une alerte de sécurité ou une intégrité douteuse sort du scénario normal                                    | S1, S2                           | conservée                                             |
| A19 | volume doublé ou tiers indisponible impose une nouvelle preuve, pas une règle de trois automatique          | S8 et test de sensibilité        | ajouté                                                |
| A20 | les tests utilisent un environnement distinct et, autant que possible, des données fictives ou anonymisées  | S5, S7                           | conservée ; données réelles non interdites absolument |
| A21 | une sauvegarde présente ne prouve pas la restauration ni le retour                                          | S1 à S4                          | conservée                                             |
| A22 | l’accès aux anciennes sauvegardes, clés et dépendances doit survivre au retrait utile                       | S1, S2                           | conservée                                             |
| A23 | le calcul n’utilise aucune moyenne de preuves et refuse l’inconnu                                           | moteur et 1 024 combinaisons     | conservée                                             |
| A24 | aucun seuil de marge universel ne transforme le résultat en GO                                              | absence de source universelle    | conservée ; le vert reste « candidat »                |
| A25 | 92 + 68 + 62 + 25 = 247, puis 240 − 247 = −7                                                                | recalcul indépendant             | conservée                                             |
| A26 | 61 + 52 + 54 + 20 = 187 ; marge 53 ; taux 22,0833… %                                                        | recalcul indépendant             | conservée ; affichage 22,1 % exact                    |
| A27 | 160 minutes correspondent à copie plus vérification, pas à la copie seule                                   | 92 + 68                          | formulation corrigée                                  |
| A28 | le seuil de décision précède le budget décision + retour                                                    | dérivation algébrique            | conservée                                             |
| A29 | un retour avec écritures nouvelles exige gel, capture, rapprochement et responsable                         | S8, S9                           | conservée, pas de retour « bouton » promis            |
| A30 | sous-traitance, garanties, accès, incidents et sort des données restent à qualifier                         | S6, S7                           | conservée, responsable du traitement explicite        |
| A31 | désactiver et observer avant suppression aide à révéler une dépendance cachée                               | S1, S9                           | conservée, cycle métier à définir localement          |
| A32 | l’outil ne transmet, ne persiste et ne collecte aucun texte libre                                           | revue statique du composant      | conservée et testée                                   |
| A33 | toute entrée ou arithmétique non représentable reste non mesurée                                            | cas limites JavaScript           | moteur corrigé : `REPORTER`, jamais `Infinity`        |

### 18.3 Contrepoints et cas d’échec recherchés

- **Progressif contre coordonné** : AWS décrit des contraintes de nom, licence,
  identité ou latence qui peuvent imposer une bascule coordonnée. « Par lots »
  ne gagne donc pas par principe.
- **Répétition contre réel** : AWS indique que certaines situations de
  production ne peuvent pas être testées à cause de dépendances. La page exige
  désormais de borner le non-testé, la détection et la mesure de repli au lieu
  de prétendre reproduire l’identique.
- **Retour simple contre données avec état** : Microsoft avertit que le retour
  d’une base, d’un schéma ou d’un composant avec état peut être complexe. Le
  guide conserve la stratégie explicite des écritures de transition.
- **Données fictives contre données réelles** : la CNIL privilégie les données
  fictives ou anonymisées, mais permet une préproduction avec données réelles
  sous conditions. Aucune interdiction absolue n’est publiée.
- **Sauvegarde contre tous les besoins** : l’ANSSI précise qu’une sauvegarde ne
  couvre pas nécessairement une perte admissible inférieure à 24 heures ni
  l’archivage légal. La restauration n’est qu’une partie du retour.
- **Méthode contre norme** : le document ANSSI « Les Essentiels » et le guide
  de sauvegarde demandent une adaptation au contexte. Les cinq preuves restent
  présentées comme une méthode Hagnéré Code.

La recommandation échoue ou doit être reportée si le périmètre critique ne peut
pas être observé, si les écritures de transition n’ont pas de propriétaire, si
un tiers indispensable n’a pas de repli, si les droits ou contrats sont
incertains, si un incident est en cours, ou si la décision n’intervient plus
assez tôt pour exécuter le retour.

### 18.4 Calculs et cas limites reproduits

```text
Périmètre global fictif
92 + 68 + 62 + 25 = 247
240 - 247 = -7

Premier lot fictif
61 + 52 + 54 + 20 = 187
240 - 187 = 53
53 / 240 × 100 = 22,0833333333...
187 + 53 = 240

Répartition indépendante des 1 024 états de preuves
STOP = 1 024 - 3^5 = 781
REPORTER = 3^5 - 2^5 = 211
RÉDUIRE PAR LOTS = 2^5 - 1 = 31
CANDIDAT = 1
Total = 1 024
```

Les champs vides, omis, `0`, `-0`, négatifs, décimaux, chaînes, booléens,
tableaux, objets, `null`, `undefined`, `NaN` et infinis ont été retestés. Trois
familles supplémentaires de nombres pourtant finis sont couvertes :

1. somme des quatre étapes qui déborde ;
2. petite étape perdue lors de l’addition à une valeur extrême ;
3. taux de marge non fini après division par une fenêtre positive extrême.

Ces trois cas rendent désormais `REPORTER` et ne produisent aucun budget. TVA,
HT/TTC, trésorerie, prix et horizon de retour financier sont sans objet : aucun
montant n’entre dans le moteur. Les coûts cachés sont explicitement sortis du
budget en minutes et doivent être comparés séparément sur un horizon identique.

### 18.5 Sortie P2

```text
PASSE_2_TERMINEE
Affirmations contrôlées : 33 familles, prose + tableaux + FAQ + outil + visuels
Affirmations corrigées : 5 — périmètre représentatif, fenêtre distincte des quatre durées, sens des 160 minutes, libellé durée/preuve, arithmétique extrême
Affirmations retirées : 1 absolu — « même périmètre que le jour J »
Contre-sources : AWS global/progressif et scénarios non testables ; Microsoft retour avec état ; CNIL données réelles sous conditions ; ANSSI limites de la sauvegarde et portée non normative
Calculs reproduits : 247/-7 ; 187/53/22,0833… ; contrôle inverse ; seuil décision + retour ; distribution 781/211/31/1
Cas limites : 1 024 combinaisons, payloads incomplets, zéro, négatifs, décimaux, non finis et trois arithmétiques finies extrêmes
Enrichissements décisifs : fonctions déjà payées, coûts hors outil, volume doublé, tiers indisponible, non-testé explicite et responsable de détection/retour
Risques résiduels : marge nulle sans confort ; contrats, coûts et capacités propres au projet non observés ; build/BAT et intégration partagée réservés aux portes ultérieures
Tests : Vitest ciblé 51/51 ; TypeScript, ESLint et Prettier OK ; SVG 3/3 ; manifeste P2 vérifié 13/13
Manifeste P2 : docs/research/manifests/migrer-logiciel-metier-sans-interruption-p2.sha256
```

## 19. Rapport P3 — polish rédactionnel

### 19.1 Gel P2 et porte G2

- décision transmise par l’orchestrateur : `GO_PASSE_3` ;
- SHA-256 du manifeste P2 :
  `f831281a9d5c488f20b4c5b766fb08a4bb60cfa41ee3f247e748bc968b5e84be` ;
- vérification avant modification : 13 fichiers sur 13 conformes ;
- les faits, calculs, verdicts, sources et manifestes P1/P2 sont restés
  inchangés.

### 19.2 Sortie P3

```text
PASSE_3_TERMINEE
Problèmes de lisibilité corrigés : libellé du sommaire « Répéter » ; réponse et H2 rendus autonomes ; CTA exprimés comme action ; deux formulations abstraites remplacées ; paragraphe fonctions/coûts scindé en deux idées
Jargon retiré ou défini : « big bang/l’agile », « source de vérité », « faire cadrer » et « preuves non compensables » retirés des surfaces précoces ; « bascule » et « source d’écriture » définies en français courant dès l’ouverture
Transitions : passage des fonctions déjà payées à leur coût complet séparé ; enchaînement forme de bascule → périmètre de répétition → preuves → budget conservé
FAQ : 9 réponses sur 9 donnent la réponse dans leur première phrase ; aucune duplication ni nouvelle réserve ajoutée
Faits laissés inchangés : neuf sources et leurs portées ; cinq preuves ; quatre durées ; 680 commandes, 74 expéditions, 12 rôles, 24 dossiers témoins ; 247/-7 et 187/53/22,1 % ; ordre STOP/REPORTER/RÉDUIRE/CANDIDAT
Nuances protégées : aucune garantie de zéro interruption ; progressif non universel ; données réelles seulement sous conditions ; coûts hors outil ; marge nulle sans confort ; verdict vert toujours candidat à une revue humaine
Robustesse du test : sous forte charge, le contrôle exhaustif des 1 024 combinaisons a dépassé une fois le timeout générique de 5 s sans assertion métier en échec ; timeout explicite et borné à 15 s ajouté à ce seul test, sans changement de logique
Tests : Vitest ciblé 51/51 après reprise ; TypeScript sans émission OK ; ESLint ciblé OK ; Prettier OK
P0 : 0
P1 : 0
Manifeste P3 : docs/research/manifests/migrer-logiciel-metier-sans-interruption-p3.sha256
```

## 20. Rapport P4 — antipasse IA

### 20.1 Gel P3 et porte G3

- décision transmise par l’orchestrateur : `GO_PASSE_4` ;
- SHA-256 du manifeste P3 :
  `f985191a2a108a2bb86aaf3d333a724e63e63d8a76fb50438e97b9844df3ae34` ;
- vérification avant modification : 13 fichiers sur 13 conformes ;
- les manifestes P1, P2 et P3 sont restés historiques et inchangés ;
- P4 a modifié uniquement la page, deux microcopies de l’outil et ce journal.
  Les faits, le moteur, les tests, les visuels, l’image sociale et les sources
  n’ont pas été réouverts.

### 20.2 Revue des quinze motifs

| Motif recherché                         | Constat P4                                                                                                   | Traitement                                                                             |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------- |
| 1. Autosatisfaction                     | « de façon universelle et honnête » attribuait inutilement une qualité morale au texte                       | réponse FAQ ramenée à la limite vérifiable : aucun plan ne vaut pour tous les systèmes |
| 2. Triptyques réflexes                  | deux paragraphes enchaînaient trois négations construites sur le même patron                                 | syntaxe variée et cause/effet explicités ; listes de preuves et de durées conservées   |
| 3. Symétrie binaire excessive           | plusieurs surfaces répétaient « pas une promesse », « pas un mode », « ne remplace pas »                     | héros, CTA contextuel, H2, mémos et transitions réécrits positivement                  |
| 4. Adjectifs vendeurs sans chiffre      | aucun superlatif ni adjectif commercial décisif                                                              | aucune correction                                                                      |
| 5. Métaphores forcées                   | aucune métaphore structurante ; « fenêtre » et « bascule » sont des termes opératoires définis               | conservation                                                                           |
| 6. Parenthèses en cascade               | aucune cascade ; l’expansion « délégué à la protection des données (DPO) » est nécessaire                    | conservation                                                                           |
| 7. Connecteurs robotiques               | peu de connecteurs de stock, mais deux transitions reposaient sur une opposition abstraite                   | dépendances → forme de bascule et journal → décision rendus explicites                 |
| 8. Conclusion qui répète                | le dernier mémo résumait les thèmes déjà traités au lieu de donner un contrôle observable                    | conclusion remplacée par une consigne testable auprès de chaque équipe                 |
| 9. Longueur de phrases uniforme         | cadence répétitive localisée dans les ouvertures des sections 5 et 6                                         | phrases courtes et développements causaux alternés                                     |
| 10. Verbes neutres qui cachent l’action | « le mode dégradé n’est pas un mot » et « le déroulé n’est pas une liste » retardaient la tâche              | tâches nommées : décrire la procédure, attribuer l’exécution et le contrôle            |
| 11. Formulations administratives        | la section du jour J accumulait cinq attributs sans transition                                               | le journal devient le sujet actif et le moment de consultation du décideur est précisé |
| 12. Inversions artificielles            | aucune inversion sujet-verbe artificielle                                                                    | aucune correction                                                                      |
| 13. Puces parallèles mais pauvres       | les listes parallèles décrivent des preuves, quatre durées ou six opérations de retour réellement distinctes | conservation : leur parallélisme sert l’exécution et les tests, il n’est pas décoratif |
| 14. Dramatisation creuse                | aucune urgence, catastrophe, promesse absolue ou témoignage implicite                                        | aucune correction                                                                      |
| 15. Logique implicite                   | le passage des dépendances au choix de stratégie et celui des preuves au budget demandaient une inférence    | les deux relations de décision sont désormais écrites                                  |

Contrôles supplémentaires :

- aucun emploi éditorial de « concret », « essentiel », « stratégique » ou
  « clé » ; les occurrences de « clé » désignent un identifiant ou une clé
  technique ;
- la question du calculateur et les questions FAQ sont fonctionnelles, pas des
  séries rhétoriques ;
- les réserves négatives encore visibles bornent une source, une preuve, une
  conformité ou un verdict. Elles ne servent pas de slogan ;
- la charpente visuelle reste celle du corpus, mais le parcours propre au guide
  demeure distinct : opérations du lundi, source d’écriture, forme de bascule,
  répétition, budget en minutes, cas fictif, jour J, retour, retrait.

### 20.3 Contrôle de chaque H2 isolément

| H2  | Réponse au titre et contrôle P4                                                                                                      |
| --- | ------------------------------------------------------------------------------------------------------------------------------------ |
| 01  | répond immédiatement à la possibilité de viser la continuité et pose le retour comme condition ; faux contraste retiré               |
| 02  | transforme « disponible » en parcours métier observables et attribués ; exemples conservés avec une cadence moins mécanique          |
| 03  | nomme le risque de divergence et exige une règle préalable ; question rhétorique retirée                                             |
| 04  | relie les dépendances au choix coordonné, par lots ou en coexistence ; préférence abstraite retirée                                  |
| 05  | exige un périmètre représentatif et rend le hors-test visible ; l’absolu écarté par P2 reste écarté                                  |
| 06  | place les cinq preuves avant le calcul ; deux démonstrations négatives parallèles sont devenues une consigne causale                 |
| 07  | conserve le contre-cas où cinq preuves démontrées conduisent à réduire le lot ; le statut « candidat » est explicité sobrement       |
| 08  | attribue chaque ligne du journal et indique quand le décideur la consulte ; introduction administrative retirée                      |
| 09  | part des écritures de transition, puis déroule leur préservation pendant le retour ; liste procédurale conservée                     |
| 10  | distingue surveillance, lecture seule, archivage et suppression ; la conclusion finit sur une consigne vérifiable auprès de l’équipe |

### 20.4 Cas fictif, transitions et passages conservés

Le cas reste annoncé « entièrement fictif » avant le premier nombre. Aucune
formulation ne le transforme en client, témoignage, moyenne ou délai conseillé.
Les deux lectures restent contrastées de façon utile :

- périmètre global : cinq preuves déclarées démontrées, `247 min` requises dans
  `240 min`, soit `-7 min` et le verdict `RÉDUIRE PAR LOTS` ;
- premier lot : `187 min` requises, `53 min` de marge et `22,1 %` après arrondi,
  soit seulement un candidat à la revue humaine.

Passages conservés volontairement :

- le tableau des cinq preuves, car chaque ligne porte une démonstration et une
  condition STOP différentes ;
- les quatre durées, car elles correspondent exactement aux termes du calcul ;
- les six étapes numérotées du retour, parce que leur parallélisme rend l’ordre
  exécutable ;
- les réponses uniformes du moteur pour `STOP`, `REPORTER`, `RÉDUIRE PAR LOTS`
  et `BASCULE ENCADRÉE`, car cette cohérence permet de comparer les états sans
  changer leur priorité ;
- les limites des sources ANSSI, CNIL, AWS, Microsoft et RGPD, même lorsqu’elles
  emploient une négation, car elles empêchent de présenter une bonne pratique ou
  une illustration fournisseur comme une norme universelle ;
- les trois bénéfices des deux CTA, tous reliés à une preuve, une durée ou un
  cas d’arrêt et non à une promesse commerciale.

### 20.5 Faits, contradictions et contrôles

Faits inchangés :

- neuf sources, leurs dates, leur portée et leurs limites ;
- cinq preuves non compensables et quatre durées positives mesurées ;
- ordre des verdicts : `STOP`, `REPORTER`, `RÉDUIRE PAR LOTS`, puis
  `BASCULE ENCADRÉE` ;
- priorité du blocage, de l’inconnu et du partiel sur le budget ;
- données fictives du cas : 680 commandes, 74 expéditions, 12 rôles et 24
  dossiers témoins ;
- calculs `247 / -7` et `187 / 53 / 22,1 %`, marge nulle admise sans confort et
  arithmétiques extrêmes renvoyées à `REPORTER` ;
- données personnelles, contrats, droits, sécurité, coûts hors outil,
  dépendances tierces et conditions non testables toujours renvoyés aux
  responsables compétents ou maintenus comme inconnus.

Contradictions finales :

- aucune contradiction entre la réponse initiale, le verdict vert conditionnel,
  le cas fictif et la clôture ;
- aucune promesse de zéro interruption, de conformité, de compatibilité, de
  délai, de prix ou de réussite ;
- aucun témoignage implicite, superlatif, téléchargement ou urgence artificielle
  ajouté.

### 20.6 Sortie P4

```text
PASSE_4_TERMINEE
Motifs repérés : autosatisfaction isolée ; faux contrastes répétés ; deux triptyques négatifs ; H2 et introductions uniformes ; deux enchaînements implicites ; conclusion mécanique
Corrections : héros, CTA contextuel, 4 H2, plusieurs transitions ou ouvertures, titres de mémo/encadré/conclusion et 2 microcopies d’outil
Passages conservés et raison : listes de preuves, durées et retour réellement opérationnelles ; verdicts uniformes pour comparaison ; limites sourcées nécessaires
Faits inchangés : sources, dates, cinq preuves, quatre durées, moteur, priorités, cas fictif, nombres, calculs, verdicts, limites, destinations et garde-fous CTA
Exemples contrôlés : cas fictif global 247/-7 ; premier lot 187/53/22,1 % ; aucune langue de faux client
Contradictions finales : aucune ; réponse initiale, outil, cas, jour J, retour et clôture restent cohérents
Tests : Vitest ciblé 51/51 ; TypeScript sans émission ; ESLint ciblé ; Prettier ; xmllint 3/3
Manifeste P4 : docs/research/manifests/migrer-logiciel-metier-sans-interruption-p4.sha256 — 13/13
P0 : 0
P1 : 0
```
