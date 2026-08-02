# Dossier P1–P4 et intégration — Remplacer Microsoft Access sans perdre le métier

> Journal reconstruit de zéro le 1er août 2026 pour le guide
> `remplacer-microsoft-access-application-web`. Aucun paragraphe, statut, score
> ni verdict de l’ancien dossier n’a été repris. Après quatre passes et le
> contrôle transversal, le candidat est intégré au registre central et son
> build local de production est indexable. Il n’est pas déclaré public tant
> que le commit `main`, le déploiement READY et l’URL servie ne sont pas prouvés.

## Journal des quatre passes

Propriétaire éditorial unique : orchestrateur du lot Hagnéré Code.

| Passe                             | État                                        | Date       | Responsable                             | Snapshot                                               | Blocages                                    |
| --------------------------------- | ------------------------------------------- | ---------- | --------------------------------------- | ------------------------------------------------------ | ------------------------------------------- |
| 1. Création complète              | Validée par l’orchestrateur                 | 2026-08-01 | Agent `access_p1_creation`              | `remplacer-microsoft-access-application-web-p1.sha256` | `GO_PASSE_2` après correction du `NO_GO_P1` |
| 2. Enrichissement et vérification | Validée par l’orchestrateur                  | 2026-08-02 | Agent distinct `access_p2_verification` | `remplacer-microsoft-access-application-web-p2.sha256` | `GO_PASSE_3` rendu                          |
| 3. Polish rédactionnel            | Validée par l’orchestrateur                 | 2026-08-02 | Agent distinct `/root/access_p3_polish` | `remplacer-microsoft-access-application-web-p3.sha256` | `GO_PASSE_4` rendu                          |
| 4. Antipasse IA et contrôle final | Validée par l’orchestrateur                 | 2026-08-02 | Agents H2 distincts + orchestrateur     | `remplacer-microsoft-access-application-web-p4.sha256` | `GO_QUALITE_GUIDE` 96/100 après correction  |

Une modification d’un fichier du snapshot après calcul du manifeste invalide
la passe concernée. Le fichier manifeste ne s’auto-hache pas.

### Preuve d’entrée de la passe 2

- Contrôle effectué le 1er août 2026 avant la première modification P2 ;
  l’heure précise n’a pas été consignée dans une preuve terminale et n’est donc
  pas revendiquée.
- Commande : `shasum -a 256 -c
docs/research/manifests/remplacer-microsoft-access-application-web-p1.sha256`.
- Résultat : neuf lignes de manifeste, neuf fichiers `OK`, soit `9/9`.
- Le Prompt #2 a été extrait jusqu’à sa dernière ligne, rendu en 28 pages
  PNG et relu intégralement avant cette modification.
- `CLAUDE.md`, le workflow maître, les instructions qualité, la charte, la
  règle SEO, le dossier, la route, l’outil, les deux tests, l’OG et les trois
  SVG P1 ont été lus intégralement avant cette modification.
- Décision d’entrée communiquée par l’orchestrateur : `GO_PASSE_2` ; le
  registre partagé est `P1_VALIDEE`.

### Baseline P2 avant enrichissement

```text
page.tsx : 910 lignes
outil : 632 lignes
tests outil : 143 lignes
tests contenu : 312 lignes
OG : 210 lignes
H2 de guide : 8
FAQ visibles : 9
tableaux : 4
exemples fictifs : 3
sources visibles : 17
statut : ready-for-human-review, noindex/nofollow, hors registre
```

### Preuve d’entrée de la passe 3

- Contrôle effectué le 2 août 2026 avant la première modification P3 ; l’heure
  précise n’a pas été capturée dans une preuve terminale et n’est pas revendiquée.
- Commande : `shasum -a 256 -c
  docs/research/manifests/remplacer-microsoft-access-application-web-p2.sha256`.
- Résultat : neuf lignes de manifeste, neuf fichiers `OK`, soit `9/9`.
- Le Prompt #3 a été extrait intégralement : 468 blocs, dont 418 paragraphes et
  50 tableaux. Le DOCX a été rendu en 33 pages PNG, toutes inspectées à leur
  résolution originale avant la première modification.
- Le skill Documents, sa procédure de lecture/revue, `CLAUDE.md`, le workflow
  maître, les instructions qualité, la charte, la règle SEO, le modèle, le
  dossier, la route, l’outil, les deux tests, l’OG et les trois SVG ont été lus
  intégralement avant le polish.
- Décision d’entrée communiquée par l’orchestrateur : `GO_PASSE_3` ; le registre
  partagé est `P2_VALIDEE`.

### Baseline P3 avant polish

```text
page.tsx : 1 166 lignes
outil : 644 lignes
tests outil : 498 lignes
tests contenu : 339 lignes
OG : 210 lignes
H2 de guide : 8
FAQ visibles : 9
sources visibles : 21
temps de lecture mesuré : 18 min à 200 mots/minute
statut : ready-for-human-review, noindex/nofollow, hors registre
```

### Manifeste du snapshot

| Fichier contrôlé                                     | SHA-256                    | Passe | Remarque                              |
| ---------------------------------------------------- | -------------------------- | ----- | ------------------------------------- |
| Dossier, route, outil, tests, OG et trois SVG dédiés | Voir le manifeste P1 frère | P1    | Neuf fichiers ; aucun fichier partagé |

## 1. Fiche d’identité

```text
Slug : remplacer-microsoft-access-application-web
Statut actuel : brouillon P4 privé, ready-for-human-review, noindex/nofollow
Requête principale hypothétique : remplacer Microsoft Access par une application web
Variantes utiles : migration Access vers le web ; alternative à Access pour PME ;
Access vers SQL Server ; Access vers Dataverse ; moderniser une base Access
Moment du parcours : sécuriser, comprendre, comparer puis décider
Lecteur précis : dirigeant non technique d’une PME dont une activité dépend
d’une application Access comprise par peu de personnes
Situation déclenchante : départ du référent, besoin d’accès distant, version en
fin de support, lenteurs, corruption, croissance, nouvel outil à connecter
Décision principale : stabiliser Access ; séparer interface et données ; migrer
seulement le stockage ; adopter un standard ; utiliser une plateforme avec peu
de code ; reconstruire progressivement une application web dédiée ; ou ne pas migrer
Niveau initial : connaît le travail et le fichier, pas forcément les objets Access
5 questions indispensables : Access est-il abandonné ? que faut-il sauver ? que
voient les outils ? quelle trajectoire choisir ? comment basculer sans promesse ?
3 craintes : perdre des données ; casser des règles cachées ; payer une réécriture inutile
Action autonome : remplir un dossier de sortie local, une fiche par tâche ou objet
CTA possible : présenter le dossier et trois tâches représentatives
Hors périmètre : réparer une corruption, auditer la sécurité ou la conformité,
choisir une architecture, annoncer prix/délai, promettre une absence d’interruption
Date de recherche : 2026-08-01
Responsable de la synthèse : agent P1 distinct
```

### Décision de lancement

- Le sujet correspond à une demande proche d’un cadrage d’outil interne.
- L’intention n’est pas « acheter une application web », mais choisir une
  trajectoire après inventaire.
- Aucun volume Search Console, Keyword Planner ou outil tiers n’a été mesuré.
- La preuve originale est un dossier local qui conserve les inconnues.
- Décision P1 : créer un guide privé complet ; aucune décision de publication.

## 1 bis. Contrat de langage humain

- Phrase lecteur : « Ma boîte tourne sur une base Access faite il y a dix ans ;
  comment la remplacer sans perdre ce qu’elle fait ? »
- Réponse en une phrase : « Sécurisez une copie restaurable, recensez les tâches
  et dépendances, puis testez la trajectoire la plus petite qui reprend les
  résultats importants. »
- Terme expliqué : une plateforme `low-code` est une plateforme configurée avec
  peu de code, qui peut tout de même exiger développement, licences et maintenance.
- Mots ordinaires : fichier, écran, impression, export, personne responsable,
  résultat, sauvegarde, reprise, règle, connexion.
- Mots à éviter sans explication : legacy, lift-and-shift, UI, refactoring,
  cloud-native, seamless, scalabilité, modernization factory.
- Projet des 150 premiers mots : répondre « pas nécessairement », traiter
  l’incident actif, vérifier version/licence et restaurabilité.
- Décision après 150 mots : migrer n’est pas encore décidé ; l’inventaire vient avant la cible.
- FAQ avec réponse dans la première phrase : oui.
- Comparaisons lisibles sur mobile : cartes mobiles générées par `GuideTable`.
- CTA comme résultat : faire examiner l’application et obtenir les vérifications suivantes.

### Test sujet, action, résultat

| Formulation abstraite écartée | Qui agit ?               | Action                               | Résultat visible                 | Formulation retenue                                                                     |
| ----------------------------- | ------------------------ | ------------------------------------ | -------------------------------- | --------------------------------------------------------------------------------------- |
| Moderniser le système         | dirigeant + utilisateurs | lister trois tâches et leurs objets  | périmètre explicable             | « Reliez trois tâches aux formulaires, requêtes, rapports, macros, VBA et connexions. » |
| Sécuriser la migration        | responsable désigné      | tester copie, droits et restauration | reprise jouée                    | « Faites créer et restaurer une copie saine sans toucher à l’original. »                |
| Assurer la continuité         | équipe métier            | écrire le fonctionnement dégradé     | travail possible pendant l’arrêt | « Écrivez ce que l’équipe fait si Access s’arrête. »                                    |
| Garantir l’intégrité          | responsable données      | comparer source et cible             | écarts expliqués                 | « Réconciliez lignes, totaux, documents et rejets. »                                    |
| Prévoir la réversibilité      | acheteur + prestataire   | rejouer export et retour arrière     | sortie exécutable                | « Testez l’export et le retour avant la dépendance critique. »                          |

### Test de l’ouverture

- [x] situation vécue avant la méthode de l’agence ;
- [x] aucun sigle technique ne gouverne les 150 premiers mots ;
- [x] réponse directe avant les réserves ;
- [x] incident actif séparé du projet de modernisation ;
- [x] aucune promesse commerciale dans l’ouverture.

## 2. Cannibalisation

| Page existante                                 | Intention                                     | Différence du nouveau guide                                              | Arbitrage                                                                            |
| ---------------------------------------------- | --------------------------------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `/guides/reprendre-logiciel-metier-existant`   | reprendre un logiciel de technologie inconnue | inventaire Access précis, limites Documenter/Dependencies/SSMA/Dataverse | frontière éditoriale à surveiller ; aucun lien visible tant que cette route redirige |
| `/guides/transformer-excel-en-application`     | décider depuis un tableur                     | Access contient formulaires, requêtes, rapports, macros et VBA           | vocabulaire et artefact distincts                                                    |
| `/guides/power-apps-ou-application-sur-mesure` | comparer deux cibles                          | ici sept trajectoires, dont conserver et standard                        | Power Apps reste une option, pas le cadre entier                                     |
| `/guides/signes-besoin-logiciel-metier`        | vérifier si un nouvel outil est justifié      | le guide Access commence après l’identification d’un actif précis        | guide connexe publié et non redirigé                                                 |
| `/guides/automatiser-processus-metier`         | choisir le premier processus à automatiser    | ici préserver une application et ses dépendances avant toute cible       | guide connexe publié et non redirigé                                                 |
| `/services/outils-internes-sur-mesure`         | présenter le service                          | le guide répond et permet d’agir sans contact                            | un CTA contextuel seulement                                                          |

**Justification d’une URL distincte :** la décision porte sur la conservation du
travail dispersé dans les objets et dépendances propres à Access, pas sur le choix
générique d’un logiciel métier.

## 3. Demande, vocabulaire et carte SERP

### Questions observées le 1er août 2026

- Microsoft Access est-il abandonné ?
- Peut-on convertir une base Access en application web automatiquement ?
- Access vers SQL Server, Dataverse, Power Apps ou application dédiée ?
- Peut-on garder les formulaires Access et déplacer seulement les données ?
- Que deviennent VBA, macros, rapports, pièces jointes et tables liées ?
- Combien coûte la migration et peut-on la faire sans interruption ?

Mode d’observation : recherche web française et anglophone, pages Microsoft
officielles, pages d’agences et de vendeurs. Aucune volumétrie de requête mesurée.

### Carte d’intentions

| Intention     | Formulation                             | Réponse attendue                                            | Section       |
| ------------- | --------------------------------------- | ----------------------------------------------------------- | ------------- |
| urgence       | base Access corrompue / ne s’ouvre plus | isoler l’incident, copie et restauration                    | `#reponse`    |
| compréhension | que contient une base Access            | objets + tâches + dépendances humaines                      | `#travail`    |
| inventaire    | documenter une base Access              | dossier local multi-fiches                                  | `#inventaire` |
| faisabilité   | convertir Access automatiquement        | capacités et limites exactes                                | `#transfert`  |
| comparaison   | alternative Access PME                  | sept trajectoires équitables                                | `#choix`      |
| exécution     | migrer Access sans arrêt                | pilote, réconciliation, retour ; aucune promesse zéro arrêt | `#pilote`     |
| achat         | devis migration Access                  | périmètre, licences, propriété, maintenance                 | `#devis`      |

## 4. Carte concurrentielle

| Page                                                                                        | Réponse et angle                                               | Preuves/artefacts                       | Bon point                                               | Manque décisionnel                                                           | Conflit possible            |
| ------------------------------------------------------------------------------------------- | -------------------------------------------------------------- | --------------------------------------- | ------------------------------------------------------- | ---------------------------------------------------------------------------- | --------------------------- |
| [GG Software](https://www.ggsoftware.ch/fr/posts/entwicklung/excel-access-web-app/)         | Access/Excel deviennent limitants ; application web sur mesure | liste de bénéfices                      | formulation française, problèmes courants               | présente le web comme solution dominante, peu de trajectoires intermédiaires | agence de développement web |
| [Caspio](https://www.caspio.com/use-cases/migrate-microsoft-access-online/)                 | migrer Access vers sa plateforme cloud/no-code                 | import, cas clients, fonctions          | montre formulaires/rapports/intégrations                | promesses très larges, peu de règles cachées ou de non-migration             | éditeur de la cible vendue  |
| [Gislen](https://www.gislen.com/migrate-microsoft-access-to-web-application/)               | découverte, hybride, progressif, web                           | inventaire, profilage, POC              | reconnaît règles cachées et réécriture non systématique | trajectoires et preuves de retour restent orientées service                  | agence de migration         |
| [Access Evolved](https://accessevolved.com/cost-to-migrate-microsoft-access-to-power-apps/) | coûts vers Power Apps selon modèle, VBA, formulaires, données  | fourchettes commerciales et facteurs    | rappelle rapports, nettoyage, tests et support          | chiffres US non transposables ; Power Apps présumé                           | spécialiste Power Platform  |
| [Convertigo](https://www.convertigo.com/fr)                                                 | plateforme française/open source avec peu de code              | fonctions, connecteurs, tarifs affichés | expose cloud/on-premise et intégrations                 | page produit, pas un diagnostic Access ; indépendance/sécurité revendiquées  | éditeur de plateforme       |
| [Microsoft Access](https://www.microsoft.com/fr-fr/microsoft-365/access)                    | Access reste vendu pour PC                                     | page produit actuelle                   | contredit « Access est mort »                           | ne décide pas d’une trajectoire de PME                                       | éditeur du produit source   |

**Angle mort commun :** distinguer ce que les outils découvrent de ce que les
utilisateurs doivent prouver, tout en donnant à « stabiliser » et « ne pas
migrer » la même dignité qu’à une nouvelle plateforme.

**Valeur originale :** dossier de sortie local par tâche/objet, inconnues
explicites, sept trajectoires, limites sourcées des outils et recette avec retour.

## 5. Fiche de preuves

Consultation de toutes les sources : 2026-08-01.

| Affirmation utilisable                                                                                      | Source primaire et URL                                                                                                                                                      | Périmètre / passage utile                                                                    | Confiance | Emplacement               | Fraîcheur                             |
| ----------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | --------- | ------------------------- | ------------------------------------- |
| La fiche Access 2021 affiche « Retirement Date » au 13/10/2026                                              | [Microsoft Lifecycle](https://learn.microsoft.com/en-us/lifecycle/products/access-2021)                                                                                     | produit Access 2021 uniquement ; ne pas transformer ce champ en promesse autonome de support | élevée    | réponse + sources         | dynamique, vérifier avant publication |
| La fiche Access 2024 affiche « Retirement Date » au 09/10/2029                                              | [Microsoft Lifecycle](https://learn.microsoft.com/en-us/lifecycle/products/access-2024)                                                                                     | produit Access 2024 uniquement ; politique moderne                                           | élevée    | réponse + sources         | dynamique                             |
| Microsoft 365 Apps est « In Support » à la consultation                                                     | [fiche Microsoft 365 Apps](https://learn.microsoft.com/en-us/lifecycle/products/microsoft-365-apps)                                                                         | cycle moderne, aucune date fixe courante                                                     | élevée    | réponse + sources         | dynamique                             |
| Le cycle moderne exige mise à jour, licence/droit d’usage et offre de support encore proposée par Microsoft | [Modern Lifecycle Policy](https://learn.microsoft.com/en-us/lifecycle/policies/modern)                                                                                      | trois conditions cumulatives ; exigences de service et système propres au produit            | élevée    | réponse + sources         | dynamique                             |
| Access est vendu pour PC et Access 2024 est la version perpétuelle courante                                 | [Microsoft France](https://www.microsoft.com/fr-fr/microsoft-365/access)                                                                                                    | page produit, biais éditeur                                                                  | élevée    | réponse/FAQ               | dynamique                             |
| 2 Go moins l’espace des objets système et 255 utilisateurs simultanés sont des maxima publiés               | [Access specifications](https://support.microsoft.com/en-us/access/access-specifications)                                                                                   | maxima techniques, jamais capacité pratique promise ni seuils de confort                     | élevée    | réponse + sources         | stable, vérifier                      |
| Objets principaux : tables, requêtes, formulaires, rapports                                                 | [Structure of an Access database](https://support.microsoft.com/en-us/access/learn-the-structure-of-an-access-database)                                                     | structure technique ; liens externes possibles                                               | élevée    | travail + sources         | stable                                |
| Documenter produit des détails d’objets                                                                     | [Database Documenter](https://support.microsoft.com/en-us/access/document-and-print-your-database-design)                                                                   | rapport technique, pas priorité métier                                                       | élevée    | transfert                 | stable                                |
| Dependencies : 4 niveaux, exclusions macros/modules et requêtes                                             | [Object Dependencies](https://support.microsoft.com/en-us/access/use-the-object-dependencies-pane-to-see-how-objects-relate)                                                | dépend aussi des droits/cartes de nom                                                        | élevée    | transfert + sources       | stable                                |
| SSMA convertit tables/index/FK et plusieurs SELECT, pas UI/macros/VBA ni certaines requêtes                 | [SSMA converting objects](https://learn.microsoft.com/en-us/sql/ssma/access/converting-access-database-objects-accesstosql?view=sql-server-ver17)                           | SQL Server ; version doc 2026                                                                | élevée    | transfert + sources       | dynamique                             |
| Rapport SSMA donne % de conversion et temps estimé technique                                                | [SSMA assessment](https://learn.microsoft.com/en-us/sql/ssma/access/assessing-access-database-objects-for-conversion-accesstosql?view=sql-server-ver17)                     | ne mesure pas importance métier                                                              | élevée    | transfert                 | dynamique                             |
| Validation source/cible, environnement isolé et tests de performance                                        | [Access to SQL Server guide](https://learn.microsoft.com/en-us/sql/sql-server/migrate/guides/access-to-sql-server?view=sql-server-ver17)                                    | migration SQL Server, guide technique                                                        | élevée    | pilote                    | dynamique                             |
| Frontal Access possible sur tables SQL liées ; risques performance/types/authentification                   | [Link Access to SQL](https://learn.microsoft.com/en-us/sql/ssma/access/linking-access-applications-to-sql-server-azure-sql-db-accesstosql?view=sql-server-ver17)            | cas tables SQL Server/Azure SQL liées                                                        | élevée    | transfert + sources       | dynamique                             |
| Dataverse peut garder un frontal Access lié ; Power Apps est une interface séparée                          | [Migrate Access data to Dataverse](https://support.microsoft.com/en-US/Access/get-started-migrate-access-data-to-dataverse)                                                 | migration tables/données ; licences et erreurs possibles                                     | élevée    | FAQ/transfert + sources   | dynamique                             |
| Dataverse ne reprend pas tous les types/limites Access                                                      | [doc Power Apps FR](https://learn.microsoft.com/fr-fr/power-apps/maker/data-platform/migrate-access-to-dataverse)                                                           | Dataverse/Teams ; vérifier fonctionnalités/licences                                          | élevée    | transfert + sources       | dynamique                             |
| Ne pas ouvrir un fichier Access depuis OneDrive/bibliothèque SharePoint                                     | [Ways to share](https://support.microsoft.com/en-us/access/ways-to-share-an-access-desktop-database)                                                                        | avertissement limité à ce mode d’ouverture                                                   | élevée    | FAQ/transfert + sources   | stable                                |
| Éviter base Access scindée sur WAN/Azure file shares                                                        | [Deploy Access](https://support.microsoft.com/en-us/access/deploy-an-access-application)                                                                                    | risque lenteur/corruption pour cette architecture                                            | élevée    | choix/transfert + sources | stable                                |
| Séparer front/back peut améliorer fiabilité ; front par utilisateur                                         | [Split an Access database](https://support.microsoft.com/en-us/access/split-an-access-database)                                                                             | sauvegarder avant ; compatibilité des versions                                               | élevée    | choix                     | stable                                |
| Anciennes Access Web Apps déconseillées                                                                     | [Microsoft decision page](https://support.microsoft.com/en-gb/office/decide-whether-to-create-a-desktop-database-or-an-access-web-app-7bf7ccc9-0850-48f2-858f-273271d30fa0) | Access Services SharePoint, pas Access desktop                                               | élevée    | choix                     | historique                            |
| Sauvegardes fréquentes, séparée/offline, intégrité/restauration testées                                     | [CNIL sauvegarder](https://www.cnil.fr/fr/securite-sauvegarder)                                                                                                             | données personnelles ; proportionner                                                         | élevée    | inventaire + sources      | 2024, vérifier                        |
| Inventaires, risques, continuité, réversibilité et ancien backup durant migration                           | [ANSSI PDF](https://messervices.cyber.gouv.fr/documents-guides/anssi_essentiels_migration_1.0.pdf)                                                                          | guide SI général, pas Access ; proportionner PME                                             | élevée    | pilote + sources          | v1.0 01/2026                          |

### Contradictions résolues

- « Access est mort » contredit les pages produit et cycles actuels : formulation interdite.
- Retrait des anciennes Access Web Apps SharePoint ≠ retrait d’Access desktop.
- Migration vers Dataverse ≠ obligation de Power Apps : frontal Access lié possible.
- SSMA « conversion % » ≠ proportion du métier repris.
- 2 Go/255 ≠ seuils recommandés de migration.
- Cloud ≠ sécurité/conformité automatique ; aucune certification de cible déduite.

## 5 bis. Contre-audit P2 des preuves et enrichissements

### Porte d’entrée et méthode

- Le manifeste P1 a été vérifié `9/9 OK` avant le premier edit P2.
- Les 21 URL primaires du dossier ont été ouvertes et relues le 1er août 2026.
- Les pages produit et Lifecycle sont traitées comme dynamiques et devront être
  recliquées avant toute publication ultérieure.
- Les sources Microsoft décrivent leurs propres produits : leur portée
  technique est utilisable, mais leur biais éditeur interdit d’en déduire la
  cible commerciale à choisir.
- Le PDF ANSSI V1.0 de janvier 2026 a été lu sur ses deux pages ; la fiche CNIL
  consultée est datée du 14 mars 2024.

### Correspondance preuve visible / affirmation

| Groupe vérifié               | Sources ouvertes | Résultat P2                  | Correction ou limite conservée                                                                                           |
| ---------------------------- | ---------------: | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Produit et cycles            |                5 | Confirmé avec correction     | « Retirement Date » conservé comme libellé Microsoft ; trois conditions cumulatives du cycle moderne ajoutées            |
| Spécifications et structure  |                3 | Confirmé avec correction     | 2 Go moins objets système ; 255 reste un maximum ; Structure et Database Documenter ont désormais deux cartes distinctes |
| Dépendances et SSMA          |                5 | Confirmé                     | exclusions Object Dependencies et SSMA explicites ; guide de validation source/cible ajouté comme source autonome        |
| Dataverse                    |                2 | Confirmé avec séparation     | différences de types/licences séparées du scénario hybride Access–Dataverse                                              |
| Partage, WAN et scission     |                3 | Confirmé avec séparation     | OneDrive, WAN/Azure file shares et base scindée ont chacun leur propre carte                                             |
| Anciennes Web Apps           |                1 | Confirmé                     | retrait Access Services SharePoint ≠ retrait Access desktop                                                              |
| Sauvegarde et migration sûre |                2 | Confirmé, portée limitée     | CNIL pour données personnelles ; ANSSI pour migration SI générale, à proportionner                                       |
| **Total**                    |           **21** | **21/21 ouvert et attribué** | **21 cartes visibles pour 21 preuves, aucune carte parapluie**                                                           |

### Modifications factuelles apportées à la page

1. Remplacement de « fin de support » par le champ exact « Retirement Date »
   pour Access 2021 et Access 2024, avec avertissement contre toute promesse
   autonome de support jusqu’à cette date.
2. Ajout des trois conditions cumulatives du cycle moderne : rester à jour
   selon les exigences publiées, conserver le droit d’usage et vérifier que
   Microsoft propose encore la prise en charge.
3. Correction du plafond Access : 2 Go par base moins l’espace nécessaire aux
   objets système ; 255 utilisateurs simultanés reste un maximum publié, pas
   une capacité pratique promise.
4. Passage de 17 à 21 cartes de sources visibles : Database Documenter, guide
   Access vers SQL Server, scénario hybride Dataverse et base scindée ont
   chacun reçu leur source autonome.
5. Ajout de la méthode Microsoft de validation Access vers SQL Server :
   requêtes de validation sur source et cible, environnement isolé et tests de
   performance, sans la présenter comme une garantie ni comme une preuve des
   écrans et règles métier.

### Contre-audit de l’outil local

- Une fiche vide conserve exactement neuf inconnues.
- Criticité élevée sans responsable et sans preuve produit deux blocages.
- Données sensibles sans responsable produit un blocage distinct.
- Chacune des six cibles de changement ou suppression bloque si les dépendances
  restent vides ; `keep-access` n’ajoute pas ce blocage, mais la dépendance
  demeure une inconnue.
- Une fiche n’est prête que si les neuf champs sont renseignés et si aucun
  blocage ne subsiste ; « prête » signifie seulement discussion de pilote.
- Les 12 types d’éléments et les 8 choix de cible sont couverts par test.
- Les ajouts successifs gardent des IDs monotones uniques, même après
  suppression ; le composant refuse de descendre sous une fiche.
- Les compteurs visibles ont été exercés de `0` à `4` blocages puis jusqu’à une
  fiche complète, sans produire de recommandation d’architecture.
- La copie réussie et la copie refusée ont chacune un message vérifié ; l’échec
  ne conserve pas de faux succès. L’impression n’est déclenchée qu’au clic.

### Contrôles ciblés déjà obtenus

```text
Vitest outil : 15/15
Vitest contenu : 14/14
Total ciblé P2 : 29/29
Temps de lecture recalculé : 18 min à 200 mots/minute
Sources visibles : 21
Route : ready-for-human-review, noindex/nofollow, hors registre
```

### Risques et inconnues maintenus après P2

- Aucun fichier `.accdb`, pilote réel, mesure de performance ou restauration
  d’un cas client n’a été fourni : les procédures doivent être rejouées sur le
  dossier réel.
- Le coût, le délai, la fenêtre d’indisponibilité, les licences et la cible
  restent inconnus ; aucun chiffre ou score n’a été inventé.
- Les pages Microsoft peuvent changer ; leur état au 1er août 2026 ne constitue
  pas une preuve durable de support futur.
- Le guide reste privé. La présence du slug dans la redirection partagée et son
  absence du registre restent les deux échecs globaux attendus, hors périmètre
  d’écriture P2.
- Le BAT du build a confirmé 320 et 390 px sans débordement horizontal et sans
  overlay. La revendication initiale « sans erreur ni avertissement console »
  est retirée : le contrôle contradictoire du 2 août 2026 observe cinq
  avertissements de préchargement CSS à 390 px, mais aucune erreur console,
  aucun `pageerror` et aucune exception non interceptée. Le contrôle
  d’impression a découvert puis fait corriger un doublon formulaire/synthèse.

### Correction administrative P2 — console de production

Le contrôle a été rejoué avec le Playwright bundlé, Google Chrome et un serveur
`next start` local. Chaque mesure utilise un contexte neuf `390 × 844`, une URL
rendue unique par `?bat=<timestamp>`, `goto(..., { waitUntil: "networkidle" })`,
puis une attente de 5 000 ms. Les événements `console` de niveaux
`warning`/`error` et les événements `pageerror` sont enregistrés séparément.

| Route et exécution | HTTP | Avertissements console | Erreurs console | `pageerror` |
| --- | ---: | ---: | ---: | ---: |
| brouillon Access — contexte neuf 1 | 200 | 5 | 0 | 0 |
| brouillon Access — contexte neuf 2 | 200 | 5 | 0 | 0 |
| guide publié `prix-gestion-google-ads` — contexte neuf 1 | 200 | 5 | 0 | 0 |
| guide publié `prix-gestion-google-ads` — contexte neuf 2 | 200 | 5 | 0 | 0 |

Les vingt avertissements ont le même type : une ressource `.css` préchargée
n’a pas été utilisée dans les secondes suivant l’événement `load`. Quatre
chunks sont communs aux deux routes (`2ex5f0c4zd6wb.css`,
`0hgyiq83kzx9s.css`, `1g-iq7euvgg-e.css`, `1303sz2qab4qb.css`) ; le cinquième
est propre au bundle de chaque route (`16tl6dhkhmjty.css` pour Access,
`184zxh522cuj-.css` pour le témoin Ads). Une capture CDP séparée sur Access,
cache désactivé, retrouve les mêmes cinq avertissements, zéro
`Runtime.exceptionThrown` et aucun overlay.

La symétrie avec une route déjà publiée qualifie ce signal de comportement
générique du préchargement CSS du build Next.js, et non de régression
fonctionnelle propre au guide Access. Cette correction P2 ne prétend pas
supprimer ces avertissements et laisse donc le code du guide intact. Leur
éventuelle suppression relève d’un chantier partagé de chargement CSS, hors du
périmètre exclusif de cette passe.

### Inconnues conservées après P2

- Volumes de recherche réels et données Search Console : inconnus.
- Version, architecture et licence du lecteur : inconnues.
- Coût, délai, gains, indisponibilité, volumes et criticité : inconnus.
- Besoin juridique, localisation, conservation et exigences sectorielles : inconnus.
- Compatibilité exacte d’un type/driver/connecteur : à tester sur le dossier réel.
- Adéquation d’un standard, d’une plateforme ou du sur-mesure : non décidée.

### Calculs reproductibles

Aucun calcul ni prix publié en P1 ou P2. Le dossier compte seulement les champs
complétés, inconnus et points bloquants ; il ne produit ni score, ni ROI, ni
orientation automatique.

## 6. Empreinte éditoriale

| Guide voisin                | Ouverture            | Progression                 | Dispositif           | Différence retenue                                            |
| --------------------------- | -------------------- | --------------------------- | -------------------- | ------------------------------------------------------------- |
| besoin logiciel métier      | trois situations     | six réponses                | diagnostic orientant | ici aucun moteur de recommandation ; inventaire objet/tâche   |
| transformer Excel           | limites d’un tableur | choix d’outil               | comparaison          | Access exige requêtes, écrans, rapports, VBA et connexions    |
| reprendre logiciel existant | reprise d’un actif   | audit puis feuille de route | checklist            | ici capacités/limites Microsoft sourcées et sept trajectoires |

```text
Tension : moderniser sans effacer les règles et habitudes utiles.
Ouverture : réponse négative honnête + urgence/restauration.
Progression : sécuriser → comprendre → inventorier → limites outils → comparer → piloter → acheter → agir.
Artefact : dossier de sortie local multi-fiches.
Voix : dirigeant non technique, verbes concrets, aucun seuil magique.
CTA : après coût, propriété et maintenance ; un seul lien éditorial.
Conclusion : sept actions du lundi matin, pas un résumé commercial.
Différences : sept trajectoires ; preuve de reprise par objet ; hybride Access explicite ; aucune orientation mécanique.
```

## 7. Plan annoté et conservation des ancres

| Ancre             | Question                         | Preuve/exemple                                   | Décision                              | Format                   |
| ----------------- | -------------------------------- | ------------------------------------------------ | ------------------------------------- | ------------------------ |
| `reponse`         | faut-il remplacer ?              | cycles, spécifications, urgence                  | vérifier avant migrer                 | réponse + mémo + image   |
| `travail`         | que contient réellement Access ? | structure + 3 exemples fictifs                   | partir des tâches                     | cas + tableau            |
| `inventaire`      | que documenter ?                 | CNIL + dossier local                             | produire les preuves                  | outil multi-fiches       |
| `transfert`       | que voient les outils ?          | Microsoft Documenter/Dependencies/SSMA/Dataverse | automatiser sans déléguer le jugement | tableau 4 colonnes       |
| `choix`           | quelles trajectoires ?           | limites réseau/web apps                          | 7 options équitables                  | cartes fit/preuve/risque |
| `pilote`          | comment basculer ?               | ANSSI + validation Microsoft                     | progressif, retour explicite          | étapes + recette         |
| `devis`           | comment comparer les offres ?    | périmètre complet                                | écrire licences/propriété/maintenance | tableau                  |
| `premiere-action` | que faire lundi ?                | checklist                                        | lever une inconnue risquée            | conclusion actionnable   |

Les huit IDs historiques sont conservés afin de ne pas casser les liens profonds.

## 8. Ressource et logique de décision

```text
Ressource nécessaire : oui, dossier de sortie Access local.
Problème : le fichier et un rapport automatique ne décrivent pas tout le travail.
Résultat : plusieurs fiches copiables/imprimables avec objet, type, responsable,
fréquence, criticité, dépendance, nature des données, cible et preuve de reprise.
Format : composant navigateur ; aucun fichier XLS/XLSX/CSV/PDF généré.
Conclusion « ne pas investir » : oui, trajectoire 7.
Données : état React local ; aucun fetch, stockage navigateur ou soumission.
Copie/impression : seulement à la demande ; erreur de copie annoncée sans faux succès.
Logique : champs manquants et contradictions visibles ; aucun score ni recommandation.
Confidentialité : ne pas saisir mot de passe, secret ou donnée personnelle.
Bon fit : responsable disponible, copie saine, tâches observables, pilote arrêtable.
Mauvais fit : incident actif, aucune copie, aucun utilisateur, réécriture imposée.
Action non commerciale : compléter puis imprimer/copier le dossier.
CTA : présenter dossier + trois tâches ; résultat attendu = vérifications suivantes.
```

### Contrat de logique vérifié en P2

1. Une fiche vide conserve neuf inconnues.
2. Criticité élevée + responsable absent produit un blocage.
3. Criticité élevée + preuve absente produit un blocage.
4. Cible autre que conservation + dépendances vides produit un blocage.
5. Une fiche complète autorise seulement une discussion de pilote.
6. Aucun champ ne déclenche automatiquement standard, low-code ou web dédié.
7. Deux ajouts rapides gardent des identifiants uniques.
8. Un échec de copie n’est pas rendu comme un succès vert.

## 9. Exigences techniques P1 et handoff

- Métadonnées construites par `buildGuideMetadata` avec entrée locale privée
  `ready-for-human-review`, faute de droit P1 sur le registre partagé.
- JSON-LD construit par `buildGuideStructuredData` : uniquement `Article` et
  `BreadcrumbList`, avec trois ratios d’image Article.
- OG dédiée `1200 × 630`.
- Route absente du registre, hub, sitemap et `llms.txt` en P1.
- Aucun redirect, CSS, dépendance ou fichier partagé modifié. Le slug reste dans
  `src/lib/legacy-guide-redirects.ts` : la redirection peut masquer la route tant
  que l’orchestrateur ne l’a pas retirée lors de l’intégration finale autorisée.
- Sources visibles scindées lorsqu’un lien ne soutient pas plusieurs produits.

### Handoff P2 obligatoire

1. Recliquer chaque source dynamique et vérifier dates/version Microsoft.
2. Contre-lire SSMA, Dataverse hybride, OneDrive, WAN et authentification liée.
3. Vérifier le nombre exact d’inconnues/blocages et toutes les branches du composant.
4. Tester clavier, lecteurs d’écran, 320/390 px, impression et copie refusée.
5. Vérifier que « plateforme avec peu de code (low-code) » précède tout emploi nu.
6. Contrôler que l’ouverture reste sans jargon et que chaque FAQ répond d’abord.
7. Ne pas ajouter la route au registre ni l’indexer avant P4 + transversal.
8. Après validation finale seulement, retirer le slug du redirect partagé et
   vérifier la route servie ; P1 ne constitue pas cette preuve publique.

## 10. Rapport P1 — candidat terminé, gate orchestrateur en attente

```text
PASSE_1_TERMINEE
Slug : remplacer-microsoft-access-application-web
Fichiers : dossier P1, page, outil, tests, OG, trois SVG Article, manifeste P1
Contrat : sécuriser et inventorier avant de choisir parmi sept trajectoires
Sources primaires : Microsoft Lifecycle/Support/Learn, CNIL, ANSSI
SERP : 6 pages concurrentes, biais et angles manquants documentés
Plan : 8 ancres historiques conservées
Artefact : dossier local multi-fiches, inconnue ≠ zéro, aucune recommandation
Contre-cas : conserver, stabiliser ou ne pas migrer
CTA : un lien éditorial après la grille de devis ; CTAs partagés contextuels
Contrôles : ESLint ciblé 0 erreur/0 avertissement ; Vitest ciblé 22/22 ;
TypeScript `tsc --noEmit` vert ; rendu serveur avec H1 ; lecture mesurée 17 min ;
XML des 3 SVG valide ; aperçu raster 16:9 contrôlé ; `git diff --check` vert ;
suite complète 570/572, avec uniquement les deux échecs de gouvernance attendus :
brouillon local non enregistré et slug encore présent dans la redirection partagée
Risques résiduels : P2/P3/P4 et contrôle transversal non réalisés ;
la redirection partagée masque encore potentiellement la route ; pas de BAT
navigateur, build complet, publication, déploiement ou indexation en P1
Manifeste P1 : docs/research/manifests/remplacer-microsoft-access-application-web-p1.sha256
```

## 11. Rapport P2 — terminée, gate orchestrateur requis

```text
PASSE_2_TERMINEE
Slug : remplacer-microsoft-access-application-web
Statut : correction P2 terminée — en attente du gate orchestrateur ; aucun lancement P3
Entrée : manifeste P1 vérifié 9/9 avant le premier edit P2
Prompt : Prompt #2 lu jusqu’à EOF et 28 pages rendues contrôlées
Sources : 21/21 URL primaires ouvertes le 1er août 2026 ; 21 cartes visibles,
une affirmation par source, aucune carte parapluie
Corrections factuelles : Retirement Date distingué d’une promesse autonome de
support ; trois conditions du cycle moderne ; 2 Go moins objets système ;
255 qualifié comme maximum et non capacité pratique
Enrichissements : quatre cartes autonomes ajoutées ; validation source/cible,
environnement isolé et performance ajoutés pour la trajectoire SQL Server
Outil : neuf inconnues ; quatre familles de blocage ; toutes les cibles de
changement ; IDs monotones ; minimum une fiche ; copie succès/échec ; impression
Correction issue du BAT : interface interactive masquée à l’impression ; synthèse
textuelle complète conservée, deux fiches présentes, zéro contrôle interactif visible
Vitest ciblé : 29/29 (outil 15/15, contenu 14/14)
Suite complète : 577/579 ; seuls échecs attendus : brouillon local hors registre
et slug encore déclaré dans la redirection partagée
ESLint ciblé : 0 erreur, 0 avertissement
TypeScript : `tsc --noEmit` vert
Build : `npx next build` vert, 64 pages générées, route statique présente
Artefact SEO : OK en preview noindex ; 47 URL sitemap, 30 liens llms.txt,
47 pages, 5 temps de lecture et 82 blocs JSON-LD contrôlés
BAT build de production : 390 × 844 et 320 × 700 ; aucun débordement horizontal,
aucun ID dupliqué, huit H2, contrôles outil à 44 px minimum, aucun overlay
Contre-BAT console du 2 août 2026 à 390 × 844 : deux contextes neufs Access et
deux contextes neufs du guide publié prix-gestion-google-ads ; HTTP 200 à chaque
fois ; exactement cinq avertissements de préchargement CSS par navigation ;
zéro erreur console et zéro pageerror ; comportement partagé, non supprimé
Interaction navigateur : une fiche complète donne 1 complet, 1 avec inconnues,
0 blocage ; ajout d’une troisième fiche avec ID unique
SEO rendu : canonical exact ; robots noindex,nofollow ; Article + BreadcrumbList ;
trois images Article ; 21 liens de sources présents exactement une fois ; aucun
FAQPage, HowTo, Offer, Review, AggregateRating ou SoftwareApplication
Dates : datePublished P1 conservée ; dateModified P2 capturée par `date -Iseconds`
à `2026-08-01T14:17:36+02:00`, sans heure reconstruite
Serveurs locaux : dev et production arrêtés ; port 3107 sans écoute
Périmètre Git : aucun commit, push, publication, registre, redirect ou fichier partagé
Risques : aucune base .accdb réelle, aucun pilote client, prix/délai/licences/cible
toujours inconnus ; sources dynamiques à recliquer avant une publication future
Manifeste P2 : docs/research/manifests/remplacer-microsoft-access-application-web-p2.sha256
```

## 12. Rapport P3 — terminée, gate orchestrateur requis

```text
PASSE_3_TERMINEE
Slug : remplacer-microsoft-access-application-web
Statut : Terminée — en attente du gate orchestrateur ; aucun lancement P4
Agent distinct : /root/access_p3_polish
Entrée : manifeste P2 vérifié 9/9 avant le premier edit P3
Prompt : Prompt #3 extrait intégralement (468 blocs, dont 418 paragraphes et
50 tableaux), rendu en 33 pages PNG et 33/33 pages inspectées
Périmètre édité : page dédiée et présent dossier ; aucun fichier partagé,
aucune logique de l’outil, aucun test, aucune OG et aucun SVG modifiés
Polish : titres et métadonnées rendus plus naturels ; paragraphes raccourcis ;
transitions ajoutées ; jargon traduit ou expliqué ; répétitions de preuve,
périmètre, trajectoire et pilote réduites ; comparaisons, devis, migration et
CTA reformulés autour d’actions et de résultats observables
Préservé : 21 sources, sept trajectoires équitables, huit ancres historiques,
neuf FAQ directes, trois exemples fictifs, trois images Article, CTA prudent,
ready-for-human-review, noindex/nofollow, Article + BreadcrumbList seulement
Outil préservé : neuf inconnues, blocages, IDs monotones, copie et impression
Temps de lecture mesuré : 19 min à 200 mots/minute
Métadonnées : titre 48 caractères ; description 149 caractères ; datePublished
P1 conservée ; dateModified P3 capturée par `date -Iseconds` à
2026-08-02T10:18:51+02:00
Vitest ciblé : 29/29 (outil 15/15, contenu 14/14)
Suite complète : 577/579 ; seuls échecs attendus : brouillon local hors registre
et slug encore déclaré dans la redirection partagée
ESLint ciblé : 0 erreur, 0 avertissement
TypeScript : `tsc --noEmit` vert
Build : `npx next build` vert, 64 pages générées, route statique présente
BAT production : HTTP 200 à 390 × 844 et 320 × 700 ; H1 exact ; huit H2
éditoriaux sous les huit ancres historiques et onze H2 dans le DOM au total,
les trois autres étant Sources, FAQ et contact ; `scrollWidth == clientWidth`
pour le document aux deux largeurs ; la barre d’ancres conserve son débordement
interne horizontal prévu ; aucun ID dupliqué, overlay d’erreur ou chevauchement
imprévu ; CTA mobile sticky intentionnel ; contrôles outil à 44 px minimum ;
hero, ouverture, outil, cartes et conclusion inspectés visuellement
SEO rendu à 390 px : canonical exact ; robots noindex,nofollow ; Article +
BreadcrumbList ; 21 liens de sources ; huit ancres historiques présentes
Console production : à 390 px, cinq avertissements de préchargement CSS déjà
qualifiés de génériques en P2, zéro erreur et zéro pageerror ; à 320 px, quatre
de ces avertissements sur ce run, zéro erreur et zéro pageerror
Contre-contrôle orchestrateur indépendant : six avertissements CSS génériques à
390 px, aucun à 320 et 1 440 px, zéro erreur et zéro pageerror ; l’écart 5/4
contre 6/0/0 confirme un déclenchement temporel variable, pas une régression
fonctionnelle propre au guide
Impression : média print contrôlé ; synthèse visible avec les fiches 1 et 2 ;
zéro contrôle interactif visible sur 23 ; PDF A4 généré pour vérification locale
Serveurs : navigateur et serveur de production arrêtés ; port 3108 sans écoute
Périmètre Git : aucun commit, push, publication, déploiement, registre,
redirection ou fichier partagé
Risques : aucune base .accdb réelle, aucun pilote client, prix/délai/licences/cible
toujours inconnus ; P4 et contrôle transversal non réalisés ; route non publiée
Manifeste P3 : docs/research/manifests/remplacer-microsoft-access-application-web-p3.sha256
```

## 13. Rapport P4 — validée par l’orchestrateur

```text
PASSE_4_TERMINEE_ET_VALIDEE
Slug : remplacer-microsoft-access-application-web
Statut : GO_P4 ; contrôle transversal indépendant requis avant intégration
Entrée : manifeste P3 vérifié 9/9 avant le premier edit P4 ; snapshots locaux
page et dossier concordants avec les SHA-256 du manifeste P3
Prompt : Prompt 4 extrait intégralement (381 paragraphes, 0 tableau), rendu en
9 pages PNG et 9/9 pages inspectées à leur résolution originale
Organisation : huit rapports H2 en lecture seule produits par des agents
distincts ; le coordinateur P4 ayant calé sans éditer, l’orchestrateur a
consolidé les rapports et appliqué les corrections par lots contrôlés
Périmètre édité : page dédiée et présent dossier ; outil, deux tests, OG et
trois SVG inchangés par rapport au snapshot P3
Polish : tournures binaires, fragments administratifs, personnifications et
enchaînements mécaniques réduits ; exemples, inventaire, limites des outils,
sept options, pilote, devis et première action rendus plus concrets
Préservé : dates Lifecycle et leurs conditions ; 2 Go et 255 comme maxima non
pratiques ; portées SSMA, Dataverse, OneDrive, WAN, CNIL et ANSSI ; incident
actif ; sept trajectoires équitables ; inconnues visibles ; zéro interruption
et conversion totale non promises ; validation SQL Server explicitement partielle
Détecteur final distinct : GO_P4_DETECTEUR, puis GO_P4_DETECTEUR_RECONTROLE
après l’horodatage final ; 18,8/20 global, minimum 18,5/20 sur chaque H2,
trois tics faibles au total, zéro défaut critique, aucun fichier modifié
Temps de lecture mesuré : 3 945 mots, 20 min à 200 mots/minute
Métadonnées : datePublished P1 conservée ; dateModified finale capturée par
`date -Iseconds` à 2026-08-02T11:51:04+02:00
Vitest ciblé final : 29/29 (outil 15/15, contenu 14/14)
ESLint ciblé : 0 erreur, 0 avertissement
TypeScript : `tsc --noEmit` vert
Suite complète : 577/579 ; seuls échecs attendus avant intégration : brouillon
local hors registre et slug encore déclaré dans la redirection partagée
Build direct : `npx next build` vert, 64 pages générées, route statique présente
Artefact SEO : OK en preview noindex ; 47 URL sitemap, 30 liens llms.txt,
47 pages, 5 temps de lecture et 82 blocs JSON-LD contrôlés
Limite de commande : `npm run build` s’arrête volontairement au prebuild sur
les deux mêmes gates d’intégration ; il ne remplace pas le build direct validé
BAT production : HTTP 200 à 320 × 700, 390 × 844 et 1 440 × 1 000 ; un H1 ;
huit H2 éditoriaux, onze H2 au total et huit ancres ; canonical exact ; robots
noindex,nofollow ; Article + BreadcrumbList uniquement ; 21 sources officielles
visibles ; aucun ID dupliqué, overlay ou débordement horizontal
Accessibilité de l’outil : 23 contrôles, 18 champs tous reliés à un label,
hauteur minimale 44 px ; CTA mobile affiché après le hero et masqué sur desktop
Interaction : première fiche complétée = 1 complète, 1 avec inconnues et
0 blocage ; ajout d’une troisième fiche, suppression et retour à deux ; copie
confirmée avec en-tête et contenu renseigné dans le presse-papiers
Impression : synthèse visible avec les deux fiches ; 0 contrôle interactif sur
23 et CTA sticky masqué ; rendu détaillé inspecté
Console : 4 avertissements CSS génériques à 320 px, 5 à 390 px et 0 à 1 440 px ;
zéro erreur console, zéro pageerror et zéro requête en échec aux trois largeurs
Contrôle visuel orchestrateur : hero mobile et desktop, outil, sept options,
pilote, devis, conclusion, FAQ, contact et synthèse print inspectés ; hiérarchie,
alignements, respiration, CTA latéral et lisibilité validés
Serveurs : serveurs local et production arrêtés ; ports 3109 et 3110 libérés
Gate G4 orchestrateur : GO_P4 ; diff P3 relu, tests et BAT recontrôlés, outil,
tests, OG et trois SVG confirmés identiques au snapshot P3
Périmètre Git : aucun commit, push, intégration, publication, déploiement,
indexation, registre partagé ou redirection modifiés à ce stade
Risques résiduels : aucune base .accdb réelle, aucun pilote client et aucune
preuve propre à un contexte client ; prix, délai, licences et cible restent à
confirmer ; contrôle transversal et intégration finale encore requis
Manifeste P4 : docs/research/manifests/remplacer-microsoft-access-application-web-p4.sha256
```

## 14. Contrôle transversal initial — NO_GO et correction

```text
CONTROLE_TRANSVERSAL_INITIAL
Statut : NO_GO_CONTROLE_TRANSVERSAL ; aucune intégration autorisée sur ce verdict
Agent distinct : /root/access_transversal_recovery ; mission strictement read-only
Snapshot d’entrée : manifeste P4 historique vérifié 9/9
Sources : 21/21 URL primaires ouvertes et assertions décisives confirmées le
2 août 2026 ; exemples fictifs, aucun chiffre économique inventé
Fond : 97/100 ; décision/exhaustivité : 96/100 ; exactitude/sources : 98/100 ;
prudence juridique/sécurité : 95/100 ; SEO/E-E-A-T : 92/100 ;
architecture/UX : 94/100 ; style/antipasse IA : 94/100 ;
accessibilité/technique/rendu : 84/100 ; score global 94/100
Défauts : P0 0 ; P1 1 de preuve, car le contrôleur navigateur n’a achevé que
320 et 360 px avant instabilité ; P2 0 bloquant ; P3 1 typographique
Correction P3 : le point final a été rattaché à « effacer le métier. » pour
supprimer l’espace visible avant la ponctuation ; correction appliquée le
2026-08-02T21:40:01+02:00 sans effet sur le sens, les faits ou dateModified
Conséquence : le manifeste P4 reste une preuve historique et n’est pas réécrit ;
le candidat corrigé exige un nouveau manifeste qualité et un nouveau contrôle
indépendant exact, incluant les dix largeurs, zoom, police, paysage, thème sombre,
clavier, interactions, impression, console et réseau
Publication : interdite tant que le P1 de preuve n’est pas refermé et qu’un
GO_CONTROLE_TRANSVERSAL conforme n’est pas obtenu sur la nouvelle empreinte
```

## 15. Intégration du candidat de publication

```text
INTEGRATION_RELEASE_CANDIDATE
Autorisation : le commanditaire a explicitement demandé à l’orchestrateur de
contrôler lui-même les guides, de publier ceux qui passent les gates et de
poursuivre en autonomie ; aucune validation éditoriale supplémentaire n’est
revendiquée au nom d’une autre personne
Gate qualité : GO_CONTROLE_TRANSVERSAL indépendant et GO_QUALITE_GUIDE de
l’orchestrateur ; manifeste quality-1 13/13 ; score 96/100 ; chaque axe >=93 ;
P0/P1/P2/P3 0 ; BAT privé 10/10 largeurs, zoom 200 %, police 150 %, paysage,
thème sombre, clavier, outil, copie et impression
Historique de l’URL : le guide antérieur a été servi en production indexable le
22 juillet 2026 ; le déploiement Vercel dpl_6Aqz2HzCZ4xhpfby5VoJDPhQFzHw,
construit depuis le commit main 780351a, a terminé à 2026-07-22T09:09:47Z,
soit 2026-07-22T11:09:47+02:00 ; cette heure est conservée comme datePublished
de l’article refondu au lieu de fabriquer une nouvelle première publication
Modification : dateModified capturée par date -Iseconds lors du gel de
l’intégration à 2026-08-02T22:15:51+02:00 ; registre, Open Graph, Article,
badge visible et sitemap utilisent la même valeur
Source de vérité : entrée publiée ajoutée à src/lib/guides.ts sans
editorialStatus ; page dédiée reliée par getGuide ; métadonnées et JSON-LD
dérivés du même objet central
Découvrabilité : slug retiré de LEGACY_GUIDE_SLUGS ; compte exact 96 -> 95 et
test d’absence ajoutés ; icône Database ajoutée au hub ; lien entrant contextuel
ajouté depuis signes-besoin-logiciel-metier ; sitemap et llms.txt non modifiés
manuellement
Installation : npm ci, 750 paquets installés depuis le lockfile ; npm audit
--omit=dev : 0 vulnérabilité
Tests ciblés d’intégration : 73/73 ; ESLint ciblé, Prettier et tsc --noEmit verts
Gates SEO : npm run check:seo 176/176 ; NODE_ENV=production npm run check:seo
176/176
Suite globale : 87 fichiers, 579/579 tests verts
Build public : NEXT_PUBLIC_ENV=production npm run build vert ; 64 pages ; route
Access statique ; artefact SEO indexable : 48 URL sitemap, 31 liens llms.txt,
48 pages, 6 temps de lecture et 84 blocs JSON-LD
Temps de lecture servi : 3 936 mots, 20 min à 200 mots/minute
Contrôle HTTP local : guide 200 sans redirection ; hub 200 ; OG 200 image/png,
262 728 octets ; URL présente exactement une fois dans sitemap et llms.txt
SEO servi : canonical exact ; robots index,follow ; googleBot index,follow avec
large image preview ; Article + BreadcrumbList uniquement ; dates cohérentes ;
trois images Article ; HTML brut 496 561 octets, transfert gzip 76 895 octets
Statut Git : snapshot éditorial cherry-pické dans le worktree propre au commit
7060b59 ; raccordement partagé encore non committé, non poussé et non déployé
Manifeste : un manifeste release-candidate distinct doit geler cet état après
ce rapport ; le manifeste P4 reste historique et n’est pas réécrit
Gate restant : contre-audit indépendant de l’empreinte release exacte, puis
commit, push main, Vercel READY et preuve publique ; aucune indexation Google
n’est revendiquée
```

## 16. Contre-audit du candidat intégré — GO

```text
GO_RELEASE_CANDIDATE
Agent indépendant : /root/access_transversal_reaudit ; strictement read-only
Empreinte auditée : release-candidate-1, 20/20 fichiers conformes avant et après BAT
Intégrité : corps éditorial, 21 sources, FAQ, exemples, outil et règles métier
inchangés depuis quality-1 ; diff page limité à getGuide, import central et
retrait du statut draft ; aucun sitemap ou llms.txt édité manuellement
Vérifications rejouées : 579/579 tests ; SEO 176/176 deux fois ; TypeScript,
ESLint code, Prettier code et git diff --check verts ; audit dépendances 0
Artefact : 48 URL sitemap, 31 liens llms.txt, 48 pages, 6 temps de lecture,
84 JSON-LD ; guide et hub 200, OG 200 PNG, slug unique dans sitemap et llms.txt
BAT release : 320, 390, 768, 1 440 et 1 600 px ; dark mobile/desktop ; paysage ;
police 150 % ; zoom 200 % ; clavier FAQ ; outil vide/complet ; ajout, suppression,
copie et impression ; aucun overflow, ID dupliqué, overlay, erreur console,
pageerror ou requête échouée
SEO servi : canonical unique ; index,follow ; Article + BreadcrumbList ; trois
images ; datePublished historique, dateModified et lastmod cohérents ; 20 min
Score : 96/100 ; valeur 97, décision 96, exactitude 98, prudence 96, SEO 96,
architecture 96, style 94, accessibilité/release 98
Gravité : P0 0 ; P1 0 ; P2 0 ; P3 1 documentaire uniquement, car le long journal
Markdown historique n’est pas Prettier-conforme ; le code ciblé l’est
Décision orchestrateur : GO_RELEASE_CANDIDATE validé ; commit, push et déploiement
autorisés sous verrou d’intégration ; le guide n’est pas encore déclaré public
```
