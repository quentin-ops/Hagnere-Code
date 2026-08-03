# Dossier de preuve P1, P2, P3 puis P4 — Power Apps ou application sur mesure

Dates des passes : P1 les 2–3 août 2026 ; P2, P3 et P4 le 3 août 2026, heure de Paris
Slug : `power-apps-ou-application-sur-mesure`
Passes couvertes : **P1 — création**, **P2 — enrichissement, contradiction et vérification indépendante**, **P3 — polish rédactionnel**, puis **P4 — antipasse IA**
Responsables de passe : `/root/powerapps_pass1`, `/root/powerapps_pass2`, `/root/powerapps_pass3`, puis `/root/powerapps_pass4`
Entrée obligatoire : `docs/research/power-apps-ou-application-sur-mesure-p0.md`
État courant : `PASSE_3_V2_PRETE_G3`, nouveau snapshot P3-v2 à figer après NO_GO Q3

> Les sections 1 à 15 conservent le journal P1 tel qu'il existait à la remise de
> cette passe. Les sections 16 à 25 constituent le contre-audit P2 et son journal
> G2. Les sections 26 à 32 constituent le polish P3. Les sections 33 et suivantes
> constituent l'antipasse IA P4. Ce dossier ne constitue pas une autorisation
> d'intégration, d'indexation, de déploiement ou de publication.

## 1. Journal de production

| Étape             | État                               | Preuve                                                                       | Limite                                                                |
| ----------------- | ---------------------------------- | ---------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| Gel P0            | consommé sans modification de fond | fichier P0 inclus dans le snapshot                                           | validation appartenant à l'orchestrateur                              |
| Prompt Word P1    | lu jusqu'à la fin                  | extraction `textutil`, 647 paragraphes et 24 tableaux vérifiés dans le XML   | les règles projet neutralisent les consignes patrimoine incompatibles |
| Sources critiques | rouvertes le 2 août 2026           | registre d'affirmations ci-dessous                                           | pages et contrats peuvent évoluer                                     |
| Moteur pur        | créé puis corrigé après G1         | cinq statuts, inconnues/échecs bloquants, contradictions et invariant option | aide à la décision, pas audit                                         |
| TCO               | créé de zéro                       | 1/3/5 ans, connu/inconnu/non applicable, zéro explicite                      | aucune devise USD convertie                                           |
| Workbench         | créé puis corrigé après G1 v2      | libellés contextuels, cartes TCO jusqu'à `xl`, table repliable, copie/print  | aucun stockage, réseau ou téléchargement                              |
| Article           | créé de zéro                       | neuf sections, cinq scénarios fictifs, FAQ et sources visibles               | P1, pas encore contre-audité par P2                                   |
| Visuels           | créés de zéro                      | SVG 16:9, 4:3, 1:1 et OG 1200×630                                            | inspection navigateur finale réservée à la chaîne ultérieure          |
| Contrôle G1 no 1  | `NO_GO`                            | neuf familles d'écarts sémantiques, décisionnels et responsive               | aucune passe suivante lancée                                          |
| Correction G1     | terminée                           | matrice des preuves, UI mobile et erreurs TCO corrigées                      | nouveau contrôle G1 requis                                            |
| Contrôle G1 no 2  | `NO_GO` ciblé                      | table encore visible et défilable dès `md` dans un article de 636–744 px     | moteur et 42 tests fonctionnels validés                               |
| Correction G1 v2  | terminée                           | cartes jusqu'à `xl`, table fixe repliable sans largeur minimale ni scroll    | nouveau contrôle G1 requis                                            |
| Tests P1          | exécutés                           | 42 tests ciblés, TypeScript et ESLint                                        | le redirect historique reste volontairement actif                     |
| Passe 2           | non commencée                      | aucun manifest P2                                                            | doit être un autre agent                                              |
| Passe 3           | non commencée                      | aucun manifest P3                                                            | doit être un autre agent                                              |
| Passe 4           | non commencée                      | aucun manifest P4                                                            | doit être un autre agent                                              |

### Correctifs exigés par G1 et preuves de fermeture

| Écart G1                                             | Correction P1                                                                                                   | Preuve locale                                                        |
| ---------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| Utilisateurs absents confondus avec zéro             | `null` maintient STOP ; zéro explicite accepté ; négatif/non fini bloqué                                        | tests unitaires courant/projeté, zéro, négatif, `Infinity`, `NaN`    |
| Sémantique tri-state ambiguë                         | libellés exacts « aucune preuve fiable », « contrôle daté satisfaisant », « résultat insatisfaisant »           | modèle, workbench, dossier copiable et tests de rendu                |
| `no` fondateur produisant un verdict                 | observation du périmètre et inventaire licences/flux insatisfaisants maintiennent STOP                          | tests matriciels et bloc rouge distinct dans l'interface             |
| Recommandation absente des options défendables       | mapping explicite statut → option et repli STOP si l'invariant échoue                                           | matrice de chaque preuve `no` en contexte applicable                 |
| Nouveau projet invité à « conserver »                | libellés « Retenir/Cadrer Power Platform » et option contextuelle                                               | test de rendu négatif sur « Conserver Power Apps »                   |
| Surface publique canevas/model-driven conservée      | verdict de changement de surface et prochain test Power Pages, hybride, dédié                                   | matrice nouveau/existant × canevas/model-driven                      |
| Résultats décisifs encore scrollables à 1024/1280 px | cartes exhaustives jusqu'à `xl` ; table `xl` en `w-full table-fixed`, sans largeur minimale ni région défilable | tests DOM/source des breakpoints et interdiction du scroll/min-width |
| Erreur TCO affichée comme zéro inconnue              | état d'erreur prioritaire et messages visibles en mobile comme en desktop                                       | test exact « 1 erreur(s)… » et absence de « 0 inconnue(s) »          |
| Anciennes passes susceptibles d'être confondues      | seuls P0, dossier et artefacts P1 entrent dans le snapshot ; P2/P3/P4 restent supprimés                         | inventaire final des manifests et manifest P1 à douze entrées        |

## 2. Lecture des instructions Word

Document lu :
`/Users/quentinhagnere/Downloads/Prompt #1 - Création Article.docx`.

Méthode reproductible :

1. tentative du chargeur de dépendances documentaire du workspace ; le
   processus n'a pas rendu la main et a été arrêté sans modifier le document ;
2. extraction en texte avec `textutil -convert txt -stdout` ;
3. lecture séquentielle de la sortie jusqu'à EOF ;
4. contre-comptage du corps Word avec
   `unzip -p <document.docx> word/document.xml` : **647 paragraphes et 24
   tableaux**.

Consignes P1 conservées : intention avant rédaction, réponse directe, plan
orienté décision, couverture des questions réelles, sources primaires, exemples
pédagogiques, limites et rédaction utile à un lecteur humain.

Consignes neutralisées par la gouvernance du projet : vocabulaire patrimoine,
statuts ORIAS/CIF, quotas mécaniques, trois appels commerciaux obligatoires,
balisage structuré de FAQ ou de tutoriel, faux cas clients, affirmations non
sourcées et publication par l'agent P1.

## 3. Fiche d'identité éditoriale

```text
Requête principale : Power Apps ou application sur mesure
Lecteurs : dirigeant, responsable métier, DSI, responsable transformation ou product owner d'une PME/ETI française
Situations : nouveau projet ou Power App existante
Décision : STOP, conserver, renforcer, hybrider ou reconstruire
Action autonome : réunir les preuves et produire quatre TCO à 1, 3 et 5 ans
CTA principal : /services/outils-internes-sur-mesure
CTA projet : /demarrer-un-projet
Issue commerciale compatible : « restez sur Power Apps »
Hors périmètre : audit de tenant, interprétation contractuelle, validation licence/sécurité/conformité, devis, promesse de performance
DatePublished préservée : 2026-07-23T21:31:02+02:00
Statut local : ready-for-human-review, noindex/nofollow
```

### Réponse éditoriale en une phrase

Power Apps reste défendable lorsque les cas difficiles, le coût contractuel,
les droits, l'exploitation et la restauration sont prouvés ; une application
dédiée devient défendable après reproduction d'une limite importante, échec
d'une remédiation raisonnable, insuffisance d'un hybride propre et comparaison
complète des TCO.

### Questions que le guide doit résoudre

1. Power Apps est-il adapté au nouveau projet ou au besoin existant ?
2. La gêne observée vient-elle de la plateforme, des données, d'une formule, du
   tenant ou de la gouvernance ?
3. Que signifient réellement les seuils SharePoint et de délégation ?
4. Comment différencier application canevas, application pilotée par modèle,
   Power Pages et application dédiée ?
5. Comment traiter les salariés, invités B2B et utilisateurs publics ?
6. Le hors-ligne est-il réellement couvert sur les appareils ciblés ?
7. Les licences, connecteurs, flux, API, DLP et rôles sont-ils confirmés ?
8. L'application peut-elle être déployée et restaurée sans le maker initial ?
9. Que comprend un TCO comparable à 1, 3 et 5 ans ?
10. Quelle remédiation tester avant de reconstruire ?
11. Comment migrer avec coexistence, recette, rollback et extinction ?

## 4. Frontière sémantique et cannibalisation

| Page voisine                                         | Intention de la page voisine               | Frontière du présent guide                                                               | Maillage retenu                                      |
| ---------------------------------------------------- | ------------------------------------------ | ---------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| `/guides/remplacer-microsoft-access-application-web` | sortir ou stabiliser Access                | arbitrage spécifique Power Platform après ou sans Access                                 | guide lié, aucune répétition de l'inventaire Access  |
| `/guides/no-code-ou-sur-mesure`                      | comparer des familles génériques           | détails Microsoft : surfaces, licences, délégation, DLP, ALM, invités, offline et sortie | pas de lien tant que cette route n'est pas republiée |
| `/guides/transformer-excel-en-application`           | sortir d'un classeur                       | évaluer Power Platform comme architecture                                                | pas de lien tant que cette route n'est pas republiée |
| `/guides/calculer-roi-application-metier`            | calcul financier général                   | quatre TCO techniques et contractuels, sans inventer les gains                           | lien de prolongement dans la section coût            |
| `/guides/automatiser-processus-metier`               | choisir le processus à automatiser         | choisir l'architecture Power Platform après le processus                                 | guide lié                                            |
| Guides SaaS                                          | créer et distribuer un produit multitenant | outil métier et gouvernance Power Platform                                               | aucune duplication                                   |

Justification de l'URL : la requête porte sur une décision spécifique à
Microsoft Power Platform, dont les contraintes de licence, tenant, sources,
délégation, politiques de données, ALM, utilisateurs externes, offline et
réversibilité ne sont pas couvertes par un comparatif low-code générique.

## 5. Architecture de la page P1

Ancres historiques préservées : `reponse`, `chemins`, `cinq-tests`, `cout`,
`audit`, `sources`.

| Section       | Décision servie                            | Contenu distinctif                                     |
| ------------- | ------------------------------------------ | ------------------------------------------------------ |
| `reponse`     | savoir si un verdict est déjà défendable   | cinq sorties, règle de réfutabilité et STOP incident   |
| `chemins`     | choisir la séquence selon nouveau/existant | quatre surfaces comparées au même besoin               |
| `cinq-tests`  | séparer limite et défaut corrigeable       | besoin/données, audience, usage, tenant, sortie        |
| `cout`        | comparer sans faux zéro                    | tarifs datés, licence vs contrat vs TCO et workbench   |
| `scenarios`   | comprendre la logique conditionnelle       | cinq compositions explicitement fictives               |
| `remediation` | tester avant réécriture                    | symptômes, causes, action bornée et test de sortie     |
| `audit`       | rendre une migration exécutable            | dix étapes, coexistence, recette, rollback, extinction |
| `lundi`       | agir sans commander une solution           | réunion de preuves et livrable autonome                |
| `sources`     | connaître la portée des preuves            | types de sources, volatilité et limites                |

## 6. Registre d'affirmations primaires

Toutes les sources ci-dessous ont été rouvertes pendant la passe 1, le 2 août 2026. « Publiable en P1 » signifie que le texte est qualifié et daté ; P2 doit
néanmoins refaire sa propre vérification indépendante.

> **Remplacement P2/G2 :** la ligne P1 ci-dessous contenant « 2 000 nouvelles
> licences » est conservée uniquement comme trace historique du travail P1. Ce
> n'est plus un fait courant publié par le guide. La formulation actuelle,
> vérifiée sur la page France le 3 août 2026, est « minimum de 2 000
> postes/licences », sous réserve du contrat.

### 6.1 Prix et licences

| Source primaire                                                                                                                                                 | Fait P1                                                                                                                                                                      | Qualification obligatoire                                                            | État             |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | ---------------- |
| <https://www.microsoft.com/fr-fr/power-platform/products/power-apps/pricing>                                                                                    | Premium 17,30 € HT/utilisateur/mois, annuel ; 10,40 € à partir de 2 000 nouvelles licences ; Developer pour développement/test ; extension base Dataverse 34,70 € HT/Go/mois | prix public vérifié le 2 août 2026, pas devis ni prix contractuel                    | KEEP             |
| <https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/microsoft/bade/documents/products-and-services/en-us/bizapps/Power-Platform-Licensing-Guide.pdf> | journal de juillet 2026 : ancien abonnement per app en fin de commercialisation depuis janvier 2026 ; droits Microsoft 365 limités                                           | ne pas publier de capacité initiale Dataverse contradictoire ; confronter au contrat | KEEP avec limite |
| <https://learn.microsoft.com/fr-fr/power-platform/admin/pay-as-you-go-meters>                                                                                   | compteur 10 USD par utilisateur actif unique, par application et par mois ; ouvertures répétées non recomptées                                                               | aucune conversion USD/EUR ; utiliser contrat ou facture Azure                        | KEEP             |

Décisions rédactionnelles :

- aucun ancien prix à 5 USD présenté comme achetable en 2026 ;
- aucune phrase « Power Apps est gratuit avec Microsoft 365 » ;
- le repère public à 17,30 € est une aide éditable qui reste `unknown` jusqu'à
  confirmation explicite ;
- aucun tarif Power Pages chiffré dans le corps, car il n'est pas nécessaire à
  la décision et reste volatil.

### 6.2 Surfaces et audience externe

| Source primaire                                                                        | Fait P1                                                                                      | Qualification obligatoire                                              | État                 |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- | -------------------- |
| <https://learn.microsoft.com/fr-fr/power-apps/maker/canvas-apps/share-app-guests>      | invité Entra B2B, licence Power Apps et permissions sur données sont des contrôles distincts | une licence dans un tenant n'accorde pas tous les droits dans un autre | KEEP                 |
| <https://www.microsoft.com/fr-fr/power-platform/products/power-pages/pricing>          | Power Pages possède son propre modèle pour utilisateurs externes                             | aucun tarif non nécessaire dans le corps ; revérifier lors d'un projet | KEEP comme frontière |
| <https://learn.microsoft.com/fr-fr/power-apps/maker/data-platform/data-platform-intro> | Dataverse propose tables relationnelles, métadonnées, règles, sécurité et API                | implique conception, gouvernance et droits à confirmer                 | KEEP                 |

Décision rédactionnelle : application canevas partagée, application pilotée par
modèle, Power Pages et application dédiée sont présentées comme des surfaces
distinctes, jamais comme quatre habillages interchangeables.

### 6.3 SharePoint, Dataverse et délégation

| Source primaire                                                                                                                                | Fait P1                                                          | Qualification obligatoire                                         | État |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- | ----------------------------------------------------------------- | ---- |
| <https://support.microsoft.com/fr-fr/office/g%C3%A9rer-des-listes-et-des-biblioth%C3%A8ques-volumineuses-b8588dae-9387-48c2-9248-c24122f07c59> | jusqu'à 30 millions d'éléments ; seuil de vue/requête 5 000      | seuil de requête différent de la capacité de stockage             | KEEP |
| <https://learn.microsoft.com/fr-fr/power-apps/maker/canvas-apps/delegation-overview>                                                           | limite locale non délégable 500 par défaut, configurable à 2 000 | une formule non délégable peut rendre le résultat partiel ou faux | KEEP |

Décision rédactionnelle : la phrase « Power Apps est limité à 2 000 lignes »
est explicitement réfutée. Le test porte sur l'exactitude au-delà des premières
lignes, pas uniquement sur la vitesse.

### 6.4 Connecteurs, requêtes et protection de service

| Source primaire                                                                         | Usage P1                                      | Limite                                                |
| --------------------------------------------------------------------------------------- | --------------------------------------------- | ----------------------------------------------------- |
| <https://learn.microsoft.com/fr-fr/connectors/>                                         | inventaire des connecteurs et limites propres | catalogue, pas preuve de configuration dans le tenant |
| <https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/connections-list>       | connexions et surfaces d'authentification     | état réel à inventorier                               |
| <https://learn.microsoft.com/fr-fr/power-platform/admin/api-request-limits-allocations> | droits liés à la licence                      | nombres volatils, aucune promesse de débit            |
| <https://learn.microsoft.com/fr-fr/power-apps/developer/data-platform/api-limits>       | protection de service Dataverse               | distincte des allocations et limites de connecteur    |

Décision rédactionnelle : les valeurs volatiles d'API ne sont pas reproduites.
Le guide impose de distinguer allocations de licence, protection Dataverse et
limites de connecteur.

### 6.5 Environnements, ALM, rôles et DLP

| Source primaire                                                                          | Fait P1                                             | Limite                                                                                           |
| ---------------------------------------------------------------------------------------- | --------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| <https://learn.microsoft.com/fr-fr/power-platform/admin/environments-overview>           | séparation par environnements                       | l'environnement par défaut n'est pas une exploitation implicite acceptable pour une app critique |
| <https://learn.microsoft.com/en-us/power-platform/alm/basics-alm>                        | solutions et cycle de vie                           | discipline organisationnelle encore nécessaire                                                   |
| <https://learn.microsoft.com/fr-fr/power-platform/alm/pipelines>                         | transport de solution entre environnements          | les pipelines ne transportent pas les données métier                                             |
| <https://learn.microsoft.com/fr-fr/power-platform/alm/use-source-control-solution-files> | extraction et contrôle de version                   | pas un export React/Next portable                                                                |
| <https://learn.microsoft.com/fr-fr/power-platform/admin/database-security>               | rôles Dataverse cumulatifs                          | tester le moindre privilège avec de vrais comptes                                                |
| <https://learn.microsoft.com/en-us/power-platform/admin/wp-data-loss-prevention>         | politiques de données et combinaison de connecteurs | examiner les politiques effectives du tenant                                                     |
| <https://learn.microsoft.com/en-us/power-platform/admin/advanced-connector-policies>     | contrôles avancés de connecteurs                    | dépend du tenant et de sa gouvernance                                                            |

Décision rédactionnelle : développement, test, production, solutions,
variables, références de connexion, version et déploiement reproductible sont
des preuves d'exploitation. Données, identités, secrets et connexions ont un
plan séparé.

### 6.6 Hors-ligne, accessibilité, export et support

| Source primaire                                                                              | Fait P1                                                   | Qualification obligatoire                      |
| -------------------------------------------------------------------------------------------- | --------------------------------------------------------- | ---------------------------------------------- |
| <https://learn.microsoft.com/fr-fr/power-apps/mobile/mobile-offline-works-overview>          | offline-first intégré avec Dataverse et Power Apps Mobile | profils, synchronisation et appareils à tester |
| <https://learn.microsoft.com/ga-ie/power-apps/mobile/limitations-canvas-apps>                | limites mobiles connues                                   | ne pas promettre un offline général            |
| <https://learn.microsoft.com/fr-fr/power-apps/maker/canvas-apps/accessible-apps>             | recommandations d'accessibilité                           | tests réels encore nécessaires                 |
| <https://learn.microsoft.com/fr-fr/power-apps/maker/canvas-apps/accessibility-checker>       | vérificateur d'aide                                       | ne prouve ni WCAG ni RGAA                      |
| <https://learn.microsoft.com/fr-fr/power-apps/maker/canvas-apps/accessible-apps-limitations> | limites d'accessibilité publiées                          | confronter aux aides techniques visées         |
| <https://learn.microsoft.com/fr-fr/power-apps/maker/canvas-apps/export-import-app>           | export/import et dépendances                              | export seul ne prouve pas une reprise complète |
| <https://learn.microsoft.com/en-us/power-platform/admin/support-overview>                    | support de plateforme                                     | ne remplace pas support applicatif et métier   |

Inférence signalée dans l'article : quitter le runtime Power Platform peut
exiger de reconstruire l'interface et la logique, de refaire les intégrations
et de migrer les données. Cette phrase est explicitement introduite par « Par
inférence ».

## 7. Contrat du moteur de décision

Entrée :

- contexte : nouveau/existant, audience, surface, source principale,
  criticité, hors-ligne, marque externe, utilisateurs ;
- douze preuves tri-state : `yes`, `no`, `unknown` ;
- aucune pondération cachée et aucun score.

Sorties :

| Statut interne          | Sens                            | Condition structurante                                                  |
| ----------------------- | ------------------------------- | ----------------------------------------------------------------------- |
| `STOP_MISSING_EVIDENCE` | pas de recommandation           | inconnue critique, saisie invalide ou contrôle fondateur insatisfaisant |
| `KEEP`                  | Power Platform reste défendable | cas difficiles, gouvernance, coût et sortie vérifiés                    |
| `STRENGTHEN`            | corriger avant de reconstruire  | défaut corrigeable sans limite de plateforme reproduite                 |
| `HYBRID`                | isoler la contrainte            | limite reproduite et frontière propre validée                           |
| `DEDICATED_REBUILD`     | préparer un dédié               | limite reproduite et frontière hybride non défendable                   |

Garde-fous :

- `unknown` signifie « aucune preuve fiable / non vérifié » et maintient STOP ;
  `yes` signifie « contrôle daté satisfaisant » ; `no` signifie « contrôle
  réalisé, résultat insatisfaisant » ;
- `currentUsers = null` ou `projectedUsers = null` maintient STOP ; le nombre
  `0` explicite est valide ; un nombre négatif ou non fini est un échec
  bloquant ;
- un `no` sur l'observation du périmètre ou l'inventaire des licences/flux
  maintient STOP au lieu de fabriquer un maintien ou une reconstruction ;
- `recommendation = null` et `defensibleOptions = []` pendant STOP ;
- pour tout statut non STOP, l'option correspondante doit appartenir à
  `defensibleOptions` : actuel pour `KEEP` existant, Power Platform cadré pour
  `KEEP` nouveau, renforcé/cadré pour `STRENGTHEN`, hybride pour `HYBRID` et
  dédié pour `DEDICATED_REBUILD` ; un garde défensif revient à STOP si cet
  invariant échoue ;
- contradictions rattachées aux options qu'elles fragilisent ;
- prochaine preuve précise au lieu d'un verdict vague ;
- une audience publique associée à une surface canevas ou pilotée par modèle ne
  peut jamais produire `KEEP` : le moteur demande de tester Power Pages, puis
  de comparer cette surface à l'hybride et au dédié ;
- une audience externe non validée, un offline requis en échec ou une limite de
  plateforme ne mène à l'hybride que si la frontière est explicitement
  validée ;
- la reconstruction n'est jamais déclenchée par le seul départ d'un maker.

## 8. Contrat du TCO

Options : Power Apps actuel, Power Apps renforcé, hybride et application
dédiée.

Formule :

```text
TCO(N) = somme des coûts ponctuels + somme des coûts mensuels × 12 × N
N ∈ {1, 3, 5}
```

Familles ponctuelles : conception/configuration/construction, migration et
coexistence, formation/changement, sortie/réversibilité.

Familles mensuelles : plateforme/hébergement, administration/maintenance,
support/continuité métier, capacité/connecteurs/supervision/autres.

Sémantique :

- `known` + montant `0` : zéro explicite accepté ;
- `unknown` + `null` : total de l'option à `null` ;
- `not-applicable` : zéro justifié ;
- identifiants de poste dupliqués : erreur, calcul arrêté pour éviter un double
  compte ;
- une erreur de saisie a priorité sur le compteur d'inconnues : l'interface
  affiche le nombre d'erreurs et chaque message, jamais « 0 inconnue(s) » pour
  un calcul arrêté par erreur ;
- prix Premium public de 17,30 € présent comme aide datée et éditable, mais
  connaissance initiale `unknown` ;
- PAYG public conservé en USD et jamais converti ; seul un montant mensuel
  contractuel réel en EUR déverrouille le total.

## 9. Contrat du workbench

- composant client, calcul pur local ;
- aucun `<form>`, envoi, `fetch`, WebSocket, stockage local, session, IndexedDB
  ou télémétrie ;
- aucun téléchargement XLS, XLSX, CSV ou autre fichier ;
- contrôles natifs avec labels reliés, hauteur minimale de 44 px, focus visible,
  clavier numérique mobile et champs désactivés lisibles en sombre ;
- diagnostic contextuel : un nouveau projet affiche « Retenir/Cadrer Power
  Platform », jamais « Conserver Power Apps » ;
- résultats TCO complets en cartes sans défilement horizontal jusqu'au
  breakpoint `xl`, avec option, ponctuel, mensuel, 1/3/5 ans, état, inconnues et
  erreurs ;
- tableau visible uniquement à partir de `xl`, en largeur pleine fixe avec
  cellules repliables ; aucune largeur minimale, aucun `overflow-x-auto`, aucun
  `tabIndex` ou rôle de région artificiel ; la table et sa légende natives
  portent la sémantique ;
- un unique `role="status"` avec annonce polie ;
- copie uniquement après clic et message d'échec honnête si le presse-papiers
  refuse ;
- impression uniquement après clic sur `window.print()` ;
- workbench exclu du temps de lecture par
  `data-read-time-exclude="true"` ;
- dossier copiable reprenant contexte, preuves, statut, inconnues,
  contradictions, TCO et limites.

## 10. Scénarios pédagogiques

Tous portent le libellé visible `Scénario fictif composite` :

1. formulaire interne pour vingt salariés : `KEEP` possible ; gouvernance
   absente : `STRENGTHEN` ;
2. terrain à réseau intermittent : test offline Dataverse/Power Apps Mobile,
   puis `HYBRID` ou `DEDICATED_REBUILD` selon la frontière ;
3. outil critique pour 250 utilisateurs : STOP sans coût, capacité, support et
   restauration ;
4. portail client à identité externe et marque forte : comparaison invités,
   Power Pages, hybride et dédié ;
5. maker parti : reprise et gouvernance avant toute reconstruction.

Aucun budget, délai, ROI ou résultat n'est présenté comme cas client ou norme
de marché.

## 11. Matrice de couverture transversale P1

| Prisme                | Couverture P1                                                                                                | Preuve                               |
| --------------------- | ------------------------------------------------------------------------------------------------------------ | ------------------------------------ |
| Lecteur humain        | réponse directe, deux chemins, tableaux, exemples, action lundi                                              | rendu serveur testé                  |
| Décideur              | cinq sorties, contradictions, prochaine preuve, TCO                                                          | moteur + workbench                   |
| Expert Power Platform | surfaces, délégation, DLP, ALM, rôles, API, offline, export                                                  | registre Microsoft                   |
| Finance               | quatre TCO comparables, prix datés, zéro/inconnu distincts                                                   | moteur TCO                           |
| Exploitation          | propriétaires, support, environnements, restauration, incident                                               | tests 4 et 5 + migration             |
| Migration             | inventaire, baseline, nettoyage, tranche verticale, répétabilité, coexistence, recette, rollback, extinction | section `audit`                      |
| SEO                   | question naturelle, intention dédiée, canonical, Article + BreadcrumbList                                    | métadonnées/tests                    |
| Conversion            | CTA compatible avec maintien Power Apps                                                                      | hero et sidebar                      |
| Accessibilité         | labels, 44 px, focus, status, cartes complètes jusqu'à `xl`, table `xl` repliable sans scroll, dark disabled | workbench/test                       |
| Vie privée            | calcul local, aucun stockage/réseau/téléchargement                                                           | test source                          |
| Données structurées   | Article et BreadcrumbList uniquement                                                                         | test de types et interdits           |
| Visuel                | trois ratios SVG dédiés + OG                                                                                 | fichiers et test d'accessibilité SVG |

## 12. Données structurées et indexation

Implémentation locale :

- entrée `GuideEntry` définie dans la page, non ajoutée à `src/lib/guides.ts` ;
- `editorialStatus: "ready-for-human-review"` ;
- robots `noindex,nofollow` via `buildGuideMetadata` ;
- canonical préparée :
  `https://hagnere-code.ai/guides/power-apps-ou-application-sur-mesure` ;
- deux types JSON-LD uniquement : `Article` et `BreadcrumbList` ;
- champs interdits absents du snapshot structuré : balisage de FAQ, tutoriel,
  offre, avis, note agrégée, logiciel/produit et comptage de mots ;
- dates Article synchronisées avec l'entrée locale ;
- trois images éditoriales déclarées dans Article.

La redirection historique vers `/services/outils-internes-sur-mesure` reste
volontairement active pendant P1. Le guide n'apparaît ni dans le hub, ni le
sitemap, ni `llms.txt`. Retirer la redirection et intégrer l'entrée centrale
avant P4 serait une violation du gel.

## 13. Journal de validation P1

### Tests ciblés

Commande :

```text
node_modules/.bin/vitest run --maxWorkers=4 \
  src/app/guides/power-apps-ou-application-sur-mesure/content-quality.test.ts \
  src/app/guides/power-apps-ou-application-sur-mesure/power-apps-decision-model.test.ts \
  src/app/guides/power-apps-ou-application-sur-mesure/power-apps-decision-workbench.test.tsx
```

Résultat après correction G1 : **3 fichiers, 42 tests, 42 réussites**.

Couverture fonctionnelle notable :

- STOP initial et aucune recommandation ;
- nombres d'utilisateurs absents bloquants, zéro explicite accepté et valeurs
  négatives/non finies rejetées ;
- distinction vérifiable entre preuve inconnue, contrôle satisfaisant et
  contrôle insatisfaisant ;
- périmètre ou inventaire licences/flux insatisfaisant maintenu en STOP ;
- sorties KEEP, STRENGTHEN, HYBRID et DEDICATED_REBUILD ;
- invariant recommandation-option testé pour chaque preuve `no` dans son
  contexte applicable ;
- nouveau projet sans libellé « Conserver Power Apps » et audience publique
  canevas/model-driven orientée vers Power Pages, hybride ou dédié ;
- contradictions données, licences, audience, offline, accessibilité, DLP, ALM,
  propriété, sortie et frontière ;
- zéro explicite, inconnue `null`, double compte bloqué ;
- coûts ponctuels comptés une fois et coûts mensuels sur 12/36/60 mois ;
- Premium daté et PAYG jamais converti ;
- copie succès/échec, impression après action seulement ;
- labels, contrôles natifs, 44 px, cartes TCO exhaustives jusqu'à `xl`, table
  fixe repliable sans scroll et unique live region ;
- erreurs TCO visibles sans faux compteur « 0 inconnue(s) » ;
- absence de réseau, stockage et téléchargement ;
- lecture réelle mesurée à **20 minutes** hors workbench ;
- métadonnées privées, canonical, dates et types structurés ;
- ancres, cinq sorties, cinq scénarios, faits techniques, remédiation, migration
  et visuels.

### TypeScript

Commande : `node_modules/.bin/tsc --noEmit`
Résultat : **succès, zéro diagnostic**.

### ESLint ciblé

Commande : ESLint sur les sept fichiers TypeScript/TSX dédiés.
Premier passage : un import de type inutilisé, corrigé.
Résultat final : **succès, zéro erreur et zéro avertissement**.

### Format

Commande : Prettier 3.9.6 en lecture sur les sept fichiers TypeScript/TSX, le
P0 et le présent dossier.
Résultat final : **tous les fichiers correspondent au format Prettier**.

### Rendu serveur

Le test de contenu appelle `renderToStaticMarkup(Page())` et vérifie le H1, la
réponse directe et le texte de l'article. Le workbench client possède aussi un
rendu serveur initial STOP. Ce contrôle ne remplace pas l'inspection d'un vrai
navigateur de la chaîne postérieure.

### Build isolé

Deux exécutions ont séparé le code du contexte du worktree :

1. `next build` avec Turbopack s'est arrêté avant compilation, car Turbopack
   refuse un lien `node_modules` pointant hors de la racine du projet ;
2. `next build --webpack` a **compilé tout le projet avec succès en 12,7 s**,
   puis le type-check généré par Next s'est arrêté sur un fichier existant hors
   périmètre :
   `src/app/guides/remplacer-microsoft-access-application-web/page.tsx`, dont
   l'export historique `accessGuide` n'est pas un champ de page Next valide
   pour la version de runtime installée.

Le présent fichier exportait initialement son entrée locale et ses données
structurées ; ces exports auxiliaires ont été retirés après ce contrôle. Après
suppression des artefacts `.next`, `tsc --noEmit` et les 42 tests repassent au
vert. Le build complet reste donc **non vert pour une cause baseline hors
périmètre**, sans autoriser P1 à modifier le guide Access partagé.

### Runtime de dépendances du worktree

Le worktree isolé ne contenait pas ses dépendances. Un lien symbolique temporaire
vers le `node_modules` déjà installé du checkout principal a été utilisé pour
les validations. Il est hors Git, ne modifie ni `package.json` ni lockfile, et
doit être retiré avant remise à l'orchestrateur.

## 14. Fichiers du snapshot P1

Le manifest P1 doit couvrir exactement les douze fichiers suivants, sans se
contenir lui-même :

1. `docs/research/power-apps-ou-application-sur-mesure-p0.md`
2. `docs/research/power-apps-ou-application-sur-mesure.md`
3. `src/app/guides/power-apps-ou-application-sur-mesure/page.tsx`
4. `src/app/guides/power-apps-ou-application-sur-mesure/opengraph-image.tsx`
5. `src/app/guides/power-apps-ou-application-sur-mesure/content-quality.test.ts`
6. `src/app/guides/power-apps-ou-application-sur-mesure/power-apps-decision-model.ts`
7. `src/app/guides/power-apps-ou-application-sur-mesure/power-apps-decision-model.test.ts`
8. `src/app/guides/power-apps-ou-application-sur-mesure/power-apps-decision-workbench.tsx`
9. `src/app/guides/power-apps-ou-application-sur-mesure/power-apps-decision-workbench.test.tsx`
10. `public/guides/power-apps-ou-application-sur-mesure/article-power-apps-16x9.svg`
11. `public/guides/power-apps-ou-application-sur-mesure/article-power-apps-4x3.svg`
12. `public/guides/power-apps-ou-application-sur-mesure/article-power-apps-1x1.svg`

Les anciens manifests P2, P3 et P4 sont supprimés. Ils ne pourront être recréés
que par les agents indépendants correspondants.

## 15. Limites, inconnues et passage de relais

- aucune passe P2/P3/P4 n'a été réalisée ou simulée ;
- aucun registre partagé, verrou, guide voisin, maillage entrant, configuration,
  sitemap, `llms.txt`, dépendance ou fichier central n'a été modifié ;
- aucun `git add`, commit, push, déploiement, publication ou demande
  d'indexation ;
- la route publique continue de rediriger pendant le travail isolé ;
- les prix et licences devront être revérifiés à chaque passe qui les modifie et
  avant publication ;
- l'absence d'accès au tenant et au contrat du lecteur interdit toute
  recommandation individuelle ;
- les cinq scénarios sont pédagogiques et fictifs ;
- le contrôle navigateur responsive, accessibilité approfondie, impression et
  preuve publique appartient aux portes ultérieures ;
- P2 doit contre-vérifier les affirmations, enrichir si nécessaire et produire
  son propre manifest à partir du hash P1 validé par G1.

Décision de l'agent P1 : **PASSE_1_CORRIGEE_V2_TERMINEE — nouveau contrôle G1
requis avant toute passe 2.**

## 16. Ouverture et chaîne de confiance P2

Agent indépendant : `/root/powerapps_pass2`.

Avant toute modification P2 :

1. lecture intégrale de `docs/instructions-guide-de-qualite.md`, du P0, du
   présent dossier P1, de la page, du moteur, du workbench, des trois tests, de
   l'OG et des trois SVG ;
2. lecture intégrale du document Word
   `/Users/quentinhagnere/Downloads/Prompt #2 Enrichissement et vérification.docx`
   avec extraction `textutil`, puis contre-comptage OOXML : **798 paragraphes
   et 23 tableaux** ;
3. vérification du manifest P1 : **12 entrées sur 12 conformes** ;
4. empreinte externe du manifest P1 contrôlée avant édition :
   `a04e61ad58a825f9fab69be28052b8507e4cd65c0cc07730451cbf15441db394` ;
5. absence effective de manifest P2/P3/P4 au départ ;
6. aucun fichier central, guide voisin, registre ou verrou acquis par P2.

Le prompt P2 a été appliqué comme une passe de contradiction : cartographie des
faits, retour aux sources officielles, calcul indépendant, recherche des angles
oubliés, puis intégration chirurgicale. Les règles projet neutralisent ses
consignes incompatibles éventuelles : pas de FAQPage/HowTo par défaut, pas de
score marketing, pas de publication par l'agent de rédaction et aucune
affirmation personnalisée sans accès au tenant ou au contrat.

## 17. Registre exhaustif de vérification P2

Date de consultation indépendante : **3 août 2026**. « Source » désigne la page
officielle réellement rouverte ; un document Microsoft ne prouve jamais la
configuration du tenant du lecteur.

### 17.1 Tarifs, licences et audience

| Affirmation auditée                                                                                                                                                                                                                        | Statut P2 | Date       | Source officielle                                                                                                                                               | Périmètre                                     | Exception ou inconnue                                                                                            | Action P2                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| Premium est affiché à 17,30 € HT/utilisateur/mois avec paiement annuel                                                                                                                                                                     | VERIFIEE  | 2026-08-03 | <https://www.microsoft.com/fr-fr/power-platform/products/power-apps/pricing>                                                                                    | prix marketing France                         | prix réel, taxes, devise et contrat peuvent différer                                                             | date conservée, contrat exigé                                                                    |
| Premium est affiché à 10,40 € HT/utilisateur/mois avec un minimum de 2 000 postes/licences                                                                                                                                                 | A_NUANCER | 2026-08-03 | même page tarifaire                                                                                                                                             | offre de volume France                        | P1 disait « à partir de 2 000 nouvelles licences », formulation plus étroite que la page France                  | texte et tests corrigés                                                                          |
| Le plan Developer gratuit sert à créer et tester, pas à exécuter une production                                                                                                                                                            | VERIFIEE  | 2026-08-03 | même page tarifaire, FAQ officielle                                                                                                                             | environnement de développement                | droits de production à confirmer par utilisateur                                                                 | qualification maintenue                                                                          |
| L'extension de capacité base Dataverse est affichée à 34,70 € HT/Go/mois, annuel                                                                                                                                                           | VERIFIEE  | 2026-08-03 | même page tarifaire                                                                                                                                             | capacité base additionnelle                   | ne couvre ni fichier, journal, droits initiaux ni prix contractuel                                               | repère daté uniquement                                                                           |
| L'ancien abonnement Power Apps per app est en fin de commercialisation depuis janvier 2026                                                                                                                                                 | VERIFIEE  | 2026-08-03 | <https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/microsoft/bade/documents/products-and-services/en-us/bizapps/Power-Platform-Licensing-Guide.pdf> | journal des changements, guide juillet 2026   | les droits historiques d'un contrat existant nécessitent lecture contractuelle                                   | ancien repère à 5 USD exclu du budget actuel                                                     |
| Certains droits Microsoft 365 sont limités et ne rendent pas tout projet Power Apps gratuit                                                                                                                                                | VERIFIEE  | 2026-08-03 | même guide de licences                                                                                                                                          | droits inclus selon produit/scénario          | plan, connecteurs, Dataverse, flux et audience restent à contrôler                                               | raccourci « gratuit avec M365 » interdit                                                         |
| Une connexion mutualisée, une couche intermédiaire ou une automatisation ne réduit pas automatiquement les licences requises ; les utilisateurs et appareils qui accèdent directement ou indirectement doivent être correctement licenciés | VERIFIEE  | 2026-08-03 | <https://go.microsoft.com/fwlink/?LinkId=2085130>, guide de licences Power Platform juillet 2026, p. 25                                                         | règle de multiplexing publiée                 | la règle ne détermine ni la référence commerciale ni le modèle applicable au scénario exact ; le contrat prévaut | question visible dans le TCO, comptage des accès réels et validation Microsoft/partenaire exigés |
| Le compteur PAYG public est 10 USD/utilisateur actif unique/application/mois                                                                                                                                                               | VERIFIEE  | 2026-08-03 | <https://learn.microsoft.com/fr-fr/power-platform/admin/pay-as-you-go-meters>                                                                                   | compteur Power Apps PAYG                      | contrat Azure, exemption de certains droits et devise réels varient                                              | aucune conversion automatique ; facture EUR requise dans le TCO                                  |
| Des ouvertures répétées de la même application dans le mois ne recomptent pas l'utilisateur                                                                                                                                                | VERIFIEE  | 2026-08-03 | même page PAYG                                                                                                                                                  | même utilisateur, même application, même mois | autres applications et règles de licence distinctes                                                              | formulation conservée                                                                            |
| Power Pages dispose d'un modèle externe authentifié/anonyme distinct                                                                                                                                                                       | VERIFIEE  | 2026-08-03 | <https://www.microsoft.com/fr-fr/power-platform/products/power-pages/pricing>                                                                                   | sites externes Power Pages                    | prix, capacité, site et mois à confirmer ; chiffres inutiles au verdict principal                                | frontière conservée sans prix dans le corps                                                      |
| Un invité canevas exige identité Entra B2B, droits Power Apps et accès aux sources                                                                                                                                                         | VERIFIEE  | 2026-08-03 | <https://learn.microsoft.com/fr-fr/power-apps/maker/canvas-apps/share-app-guests>                                                                               | partage d'application canevas                 | tenant source/cible et source de données déterminent les droits effectifs                                        | test réel maintenu                                                                               |
| Le prix contractuel et la licence exacte du lecteur                                                                                                                                                                                        | INCONNUE  | 2026-08-03 | contrat/facture/tenant non fournis                                                                                                                              | organisation du lecteur                       | aucune source publique ne peut les établir                                                                       | STOP et champs `unknown` maintenus                                                               |

### 17.2 Données, requêtes, rôles et API

| Affirmation auditée                                                                                                           | Statut P2 | Date       | Source officielle                                                                                                                                                            | Périmètre                           | Exception ou inconnue                                                                              | Action P2                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| Dataverse apporte tables, relations, métadonnées, logique, sécurité et API                                                    | VERIFIEE  | 2026-08-03 | <https://learn.microsoft.com/fr-fr/power-apps/maker/data-platform/data-platform-intro>                                                                                       | capacités documentées Dataverse     | ne prouve pas la qualité du modèle, les licences ou la performance du projet                       | texte conservé et qualifié                                                            |
| SharePoint peut stocker jusqu'à 30 millions d'éléments mais applique un seuil de vue/requête autour de 5 000                  | A_NUANCER | 2026-08-03 | <https://support.microsoft.com/fr-fr/office/seuil-d-affichage-de-liste-pour-les-biblioth%C3%A8ques-et-les-grandes-listes-e2ea4d5d-ec23-4171-95c4-c7f5b5dbfd8a>               | grandes listes/bibliothèques        | le seuil effectif dépend de l'opération et de la configuration ; ce n'est pas une capacité à 5 000 | ancien lien remplacé par le canonical actuel ; distinction stockage/requête conservée |
| Une opération canevas non délégable traite 500 lignes par défaut, configurable jusqu'à 2 000, avec risque de résultat partiel | VERIFIEE  | 2026-08-03 | <https://learn.microsoft.com/fr-fr/power-apps/maker/canvas-apps/delegation-overview>                                                                                         | opérations/formules non délégables  | support dépend de la source, colonne, opérateur et formule                                         | test compare identité et nombre des résultats                                         |
| Les limites de requêtes liées aux licences ne sont pas les limites de protection de service Dataverse                         | VERIFIEE  | 2026-08-03 | <https://learn.microsoft.com/fr-fr/power-platform/admin/api-request-limits-allocations> et <https://learn.microsoft.com/fr-fr/power-apps/developer/data-platform/api-limits> | deux mécanismes Microsoft distincts | connecteurs et environnements ont aussi leurs limites                                              | aucun chiffre de débit transformé en promesse métier                                  |
| Chaque connecteur a opérations, authentification et limites propres                                                           | VERIFIEE  | 2026-08-03 | <https://learn.microsoft.com/fr-fr/connectors/>                                                                                                                              | catalogue des connecteurs           | le catalogue ne prouve ni le plan ni la politique du tenant                                        | inventaire par connecteur maintenu                                                    |
| Les privilèges de plusieurs rôles Dataverse sont cumulatifs                                                                   | VERIFIEE  | 2026-08-03 | <https://learn.microsoft.com/fr-fr/power-platform/admin/security-roles-privileges>                                                                                           | rôles attribués à un utilisateur    | équipes, unités, partage et accès direct peuvent compléter l'accès effectif                        | source générale remplacée par la page qui énonce explicitement le cumul               |
| La région d'un environnement détermine son emplacement mais pas celui de toute source connectée                               | A_NUANCER | 2026-08-03 | <https://learn.microsoft.com/fr-fr/power-platform/admin/environments-overview>                                                                                               | ressources de l'environnement       | connecteurs, systèmes tiers et transferts nécessitent leur propre cartographie                     | question de région ajoutée au test tenant                                             |

### 17.3 Gouvernance, ALM, politiques et support

| Affirmation auditée                                                                                                                 | Statut P2                     | Date       | Source officielle                                                                        | Périmètre                                 | Exception ou inconnue                                                                  | Action P2                                                            |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- | ---------- | ---------------------------------------------------------------------------------------- | ----------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| Des environnements séparent applications, flux, rôles, sécurité et audiences ; le défaut ne convient pas à une charge de production | VERIFIEE                      | 2026-08-03 | <https://learn.microsoft.com/fr-fr/power-platform/admin/environments-overview>           | stratégie d'environnements                | architecture exacte et licences à établir                                              | dev/test/prod et environnement séparé exigés pour le test            |
| Les solutions, le contrôle de source et dev/test/prod structurent l'ALM                                                             | VERIFIEE                      | 2026-08-03 | <https://learn.microsoft.com/en-us/power-platform/alm/basics-alm>                        | ALM Power Platform                        | discipline, variables, connexions et données restent à concevoir                       | formulation conservée                                                |
| Un pipeline transporte solution/configuration, pas les données métier                                                               | VERIFIEE                      | 2026-08-03 | <https://learn.microsoft.com/fr-fr/power-platform/alm/pipelines>                         | pipelines Power Platform                  | connexions, secrets, identités et données suivent d'autres procédures                  | frontière de restauration maintenue                                  |
| Les fichiers de solution peuvent être versionnés mais ne deviennent pas du React/Next.js portable                                   | VERIFIEE par fait + INFERENCE | 2026-08-03 | <https://learn.microsoft.com/fr-fr/power-platform/alm/use-source-control-solution-files> | extraction/versionnage Power Platform     | la nécessité de reconstruire hors runtime est une inférence explicitement annoncée     | mot « Par inférence » conservé                                       |
| Les politiques classiques peuvent bloquer, suspendre, mettre en quarantaine et désactiver des connexions                            | VERIFIEE                      | 2026-08-03 | <https://learn.microsoft.com/en-us/power-platform/admin/wp-data-loss-prevention>         | politiques de données classiques          | délai de propagation et règles effectives varient                                      | contrôle tenant conservé                                             |
| ACP utilise une allowlist stricte pour connecteurs certifiés ; le mode mixte retient la règle la plus restrictive                   | A_NUANCER                     | 2026-08-03 | <https://learn.microsoft.com/en-us/power-platform/admin/advanced-connector-policies>     | fonctionnalité documentée en juillet 2026 | custom/HTTP non couverts ; déploiement design-time progressif ; état du tenant inconnu | paragraphe et FAQ enrichis avec périmètre et prudence de déploiement |
| Le support Microsoft couvre notamment le break-fix selon plan, pas les règles métier ni la maintenance de l'application             | VERIFIEE                      | 2026-08-03 | <https://learn.microsoft.com/en-us/power-platform/admin/support-overview>                | support plateforme                        | canal d'achat, plan, sévérité et responsabilité client varient                         | séparation support plateforme/métier maintenue                       |

### 17.4 Hors-ligne, accessibilité, export et protection des données

| Affirmation auditée                                                                                                                            | Statut P2 | Date       | Source officielle                                                                                                                                                          | Périmètre                                | Exception ou inconnue                                                                                      | Action P2                                                                   |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | ---------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| L'offline-first intégré utilise Dataverse, Power Apps Mobile, profil local et synchronisation                                                  | VERIFIEE  | 2026-08-03 | <https://learn.microsoft.com/fr-fr/power-apps/mobile/mobile-offline-works-overview>                                                                                        | mobile offline-first                     | profils, filtres, conflits, appareils et données locales à tester                                          | formulation maintenue                                                       |
| Pour une canevas autonome offline-first, les connecteurs non-Dataverse/SharePoint et flux Power Automate ne sont pas pris en charge hors ligne | A_NUANCER | 2026-08-03 | <https://learn.microsoft.com/en-us/power-apps/mobile/limitations-canvas-apps>                                                                                              | limites actuelles canvas mobile offline  | autres limites : relations, volumes, types, synchronisation ; pas d'extrapolation au navigateur            | fait décisif ajouté au corps, à la FAQ et aux sources                       |
| « Power Apps fonctionne hors ligne » sans surface ni source                                                                                    | A_RETIRER | 2026-08-03 | mêmes pages offline                                                                                                                                                        | slogan générique                         | masque les exclusions et le stockage local                                                                 | remplacé par conditions et protocole de test                                |
| Power Apps publie des recommandations d'accessibilité et un vérificateur                                                                       | VERIFIEE  | 2026-08-03 | <https://learn.microsoft.com/fr-fr/power-apps/maker/canvas-apps/accessible-apps> et <https://learn.microsoft.com/fr-fr/power-apps/maker/canvas-apps/accessibility-checker> | aide à la conception                     | ne certifie ni WCAG ni RGAA                                                                                | tests clavier/zoom/lecteur d'écran maintenus                                |
| Des limites d'accessibilité existent pour dialogues, tableaux, contrôles composites et défilement                                              | VERIFIEE  | 2026-08-03 | <https://learn.microsoft.com/fr-fr/power-apps/maker/canvas-apps/accessible-apps-limitations>                                                                               | applications canevas                     | parcours et technologies d'assistance réels restent décisifs                                               | source visible conservée                                                    |
| Un package/export ne restaure pas automatiquement toutes les dépendances                                                                       | VERIFIEE  | 2026-08-03 | <https://learn.microsoft.com/fr-fr/power-apps/maker/canvas-apps/export-import-app>                                                                                         | export/import canvas et solutions        | connexions et connecteurs custom exigent des actions distinctes                                            | restauration en environnement séparé maintenue                              |
| Le choix Power Apps/sur-mesure certifie la conformité RGPD                                                                                     | A_RETIRER | 2026-08-03 | <https://www.cnil.fr/fr/securite-encadrer-les-developpements-informatiques>                                                                                                | protection des données dès la conception | finalité, minimisation, conservation, destinataires, sous-traitants, transferts et risque sont contextuels | frontière RGPD/CNIL ajoutée ; validation DPO/conseil et AIPD conditionnelle |
| La conformité, les politiques et obligations exactes du lecteur                                                                                | INCONNUE  | 2026-08-03 | aucune pièce projet fournie                                                                                                                                                | organisation et traitement réels         | impossible à déduire de la plateforme                                                                      | disclaimer et STOP maintenus                                                |

### 17.5 SEO, métadonnées, exemples et données structurées

| Élément audité                                                      | Statut P2 | Date       | Source ou preuve                                                                                                                                                    | Périmètre                                          | Exception ou inconnue                                                          | Action P2                                      |
| ------------------------------------------------------------------- | --------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- | ------------------------------------------------------------------------------ | ---------------------------------------------- |
| Titre et description répondent à la requête naturelle               | VERIFIEE  | 2026-08-03 | métadonnées locales et test                                                                                                                                         | intention « Power Apps ou application sur mesure » | performance SERP inconnue avant publication                                    | aucune surpromesse ajoutée                     |
| Canonical correspond au slug final                                  | VERIFIEE  | 2026-08-03 | rendu serveur/test                                                                                                                                                  | URL cible Hagnéré Code                             | route encore redirigée dans le checkout partagé                                | canonical conservé, publication hors P2        |
| La page locale reste `noindex,nofollow` et hors découverte centrale | VERIFIEE  | 2026-08-03 | métadonnées, guides, redirect et test                                                                                                                               | phase isolée                                       | n'établit pas l'état public après intégration                                  | confidentialité locale conservée               |
| Article est un type supporté et BreadcrumbList décrit la hiérarchie | VERIFIEE  | 2026-08-03 | <https://developers.google.com/search/docs/appearance/structured-data/article> et <https://developers.google.com/search/docs/appearance/structured-data/breadcrumb> | Google Search, données visibles                    | aucun résultat enrichi garanti ; validation publique après déploiement requise | types Article + BreadcrumbList uniquement      |
| Ajouter FAQPage/HowTo améliorerait automatiquement le SEO           | A_RETIRER | 2026-08-03 | règles projet et contenu visible                                                                                                                                    | guide éditorial                                    | balisage supplémentaire non nécessaire et potentiellement incohérent           | interdiction testée ; FAQ visible non balisée  |
| Dates Article, OG et métadonnées sont synchronisées                 | VERIFIEE  | 2026-08-03 | rendu serveur/test                                                                                                                                                  | snapshot local                                     | date publique à revérifier après intégration                                   | `dateModified` P2 actualisée                   |
| Les cinq cas sont des clients réels                                 | A_RETIRER | 2026-08-03 | libellés et test                                                                                                                                                    | exemples pédagogiques                              | aucun témoignage ou budget marché n'est fourni                                 | chaque cas reste « Scénario fictif composite » |
| Le CTA impose une reconstruction                                    | A_RETIRER | 2026-08-03 | CTA, disclaimer et corps                                                                                                                                            | conversion                                         | le premier échange peut conclure conserver/renforcer                           | neutralité commerciale conservée               |

## 18. Recalcul indépendant du TCO et tests adversariaux

La formule a été recalculée sans reprendre le résultat affiché :

```text
ponctuel = 1 000 €
licences mensuelles = 10 × 17,30 € = 173 €
autres coûts mensuels = 27 €
mensuel total = 200 €
1 an = 1 000 + 200 × 12 = 3 400 €
3 ans = 1 000 + 200 × 36 = 8 200 €
5 ans = 1 000 + 200 × 60 = 13 000 €
```

| Cas contradictoire                                     | Résultat exigé                            | Résultat P2                                    |
| ------------------------------------------------------ | ----------------------------------------- | ---------------------------------------------- |
| montant inconnu                                        | total `null`, jamais zéro                 | conforme                                       |
| zéro connu explicite                                   | total calculable                          | conforme                                       |
| coût négatif                                           | erreur visible et total `null`            | conforme                                       |
| `NaN` ou `Infinity` en entrée                          | erreur et total `null`                    | conforme                                       |
| valeur supérieure à `Number.MAX_SAFE_INTEGER`          | erreur de plage fiable                    | correctif P2 ajouté                            |
| produit utilisateurs × prix fini mais trop grand       | aucun `Infinity` ou total trompeur        | correctif P2 ajouté                            |
| somme de deux lignes finies dépassant la plage fiable  | calcul arrêté                             | correctif P2 ajouté                            |
| horizon 5 ans dépassant la plage fiable                | les trois horizons restent indisponibles  | correctif P2 ajouté                            |
| identifiant de poste dupliqué                          | arrêt pour éviter le double compte        | conforme                                       |
| PAYG public en USD sans montant contractuel EUR        | total bloqué, aucune conversion           | conforme                                       |
| PAYG contractuel saisi à 89 €                          | licence mensuelle 89 €                    | conforme                                       |
| quantité de licences Premium fractionnaire ou non sûre | STOP                                      | NO_GO G2 reproduit, puis correctif P2-G2 dédié |
| quantité Premium ou prix Premium marqué N/A            | erreur visible et total `null`            | correctif G2-2 vérifié                         |
| montant PAYG ou forfait sélectionné marqué N/A         | erreur visible et total `null`            | correctif G2-2 vérifié                         |
| mode global de licence N/A                             | zéro valide si les autres postes sont N/A | comportement conservé et vérifié               |
| lignes de coût ponctuel/mensuel N/A                    | zéro valide pour ces postes facultatifs   | comportement conservé et vérifié               |

Faille P2 corrigée : les entrées étaient individuellement finies mais une
multiplication ou une somme pouvait dépasser la représentation numérique et
produire `Infinity`. Le moteur contrôle désormais les entrées, les agrégats, le
total mensuel et chaque horizon. Toute sortie non fiable devient une erreur
visible et tous les totaux concernés restent `null`.

Le premier snapshot P2 restait toutefois incomplet : la quantité
`license.users` réutilisait le validateur monétaire, qui accepte légitimement
les décimales. G2 a reproduit **1,5 utilisateur × 17,30 € = 25,95 €** avec un
TCO marqué complet. Le snapshot a été invalidé. La correction P2-G2 sépare
désormais quantité entière et montant monétaire : licences Premium = entier sûr
positif ou nul ; prix et coûts = décimaux non négatifs autorisés.

Le snapshot corrigé G2 a ensuite révélé une seconde ambiguïté : « non
applicable » restait traduit en zéro même pour un opérande que le mode choisi
rend obligatoire. Premium ne peut pas calculer sans quantité et prix connus ;
PAYG et forfait contractuel ne peuvent pas calculer sans montant contractuel
connu. En revanche, le mode global « Non applicable » et les lignes de coûts
facultatives doivent conserver leur zéro explicite valide.

Le guide précise aussi la valorisation du temps interne : méthode explicite,
absence de double compte et maintien en inconnu si la valorisation n'est pas
défendable.

## 19. Questions oubliées recherchées contradictoirement

| Question qu'un lecteur peut légitimement poser                                                                    | Couverture avant P2            | Décision P2                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------- | ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| « Le tarif de volume exige-t-il 2 000 nouvelles licences ou 2 000 postes ? »                                      | ambiguë                        | formulation France corrigée en minimum de 2 000 postes/licences ; contrat toujours requis                                                 |
| « Une Power App SharePoint fonctionne-t-elle offline-first ? »                                                    | trop générale                  | exclusion non-Dataverse/SharePoint et flux ajoutée                                                                                        |
| « Que reste-t-il sur un appareil perdu ? »                                                                        | absent                         | effacement, reprise, accès résiduel et responsable ajoutés au protocole                                                                   |
| « ACP remplace-t-il toutes les politiques DLP ? »                                                                 | source sans explication        | certifiés, mode mixte et custom/HTTP explicités                                                                                           |
| « Une région d'environnement couvre-t-elle les systèmes connectés ? »                                             | absent                         | cartographie de toute la chaîne ajoutée                                                                                                   |
| « Power Apps rend-il le projet conforme au RGPD ? »                                                               | disclaimer générique           | finalité, minimisation, conservation, acteurs et AIPD conditionnelle ajoutés                                                              |
| « Le temps salarié vaut-il zéro ? »                                                                               | famille TCO présente           | méthode de valorisation et interdiction du double compte ajoutées                                                                         |
| « Une connexion mutualisée, une API ou un compte de service permet-il de ne licencier que le compte technique ? » | absent, donc NO_GO transversal | réponse négative non automatique, cartographie des accès directs/indirects, limite contractuelle et validation du scénario exact ajoutées |
| « Une quantité de licences Premium peut-elle être 1,5 ou non sûre ? »                                             | défaut découvert par G2        | validateur entier sûr dédié et champ quantité dédié                                                                                       |
| « Des montants finis peuvent-ils faire déborder le calcul ? »                                                     | non testé                      | garde-fous sur produits, sommes et horizons ajoutés                                                                                       |
| « Une politique peut-elle casser l'existant après création ? »                                                    | couverte                       | DLP/ACP distinguées et test tenant conservé                                                                                               |
| « Puis-je restaurer sans maker, connexions ni données ? »                                                         | couverte                       | test en environnement séparé conservé                                                                                                     |
| « Le support Microsoft reprend-il mon métier ? »                                                                  | couverte                       | frontière break-fix/support métier conservée                                                                                              |
| « Le guide pousse-t-il vers une vente sur mesure ? »                                                              | couverte                       | CTA compatible avec KEEP et STRENGTHEN conservé                                                                                           |
| « Les scénarios sont-ils de vrais clients ? »                                                                     | couverte                       | cinq libellés fictifs et absence de claims marché conservés                                                                               |

## 20. Audit du workbench et de ses promesses

| Promesse                                      | Preuve P2                                                                                            | État                                                                   |
| --------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| fonctionnement local                          | aucun `fetch`, XHR, WebSocket, beacon ou soumission de formulaire                                    | VERIFIEE                                                               |
| aucune persistance                            | absence de `localStorage`, `sessionStorage`, `indexedDB`                                             | VERIFIEE                                                               |
| aucun téléchargement                          | absence d'attribut `download`, XLS/XLSX/CSV ; seules copie presse-papiers et impression après action | VERIFIEE                                                               |
| erreurs visibles                              | bloc d'erreurs dans chaque carte et table ; test du négatif et du dépassement numérique              | VERIFIEE                                                               |
| quantité Premium entière                      | validateur dédié ; libellé quantité, `inputMode=numeric`, `step=1` ; fraction visible en erreur      | VERIFIEE après correction G2                                           |
| opérandes de licence requis                   | N/A filtré des quantités/prix Premium et montants PAYG/forfait ; erreur modèle si état injecté       | VERIFIEE après correction G2-2                                         |
| N/A facultatif conservé                       | option présente pour mode global et lignes ponctuelles/mensuelles                                    | VERIFIEE après correction G2-2                                         |
| inconnu différent de zéro                     | état tri-state et totaux `null` testés                                                               | VERIFIEE                                                               |
| quatre résultats complets sur mobile/tablette | cartes jusqu'au breakpoint `xl`                                                                      | VERIFIEE par source/test, navigateur réel réservé aux portes suivantes |
| table desktop non scrollable                  | `xl:block`, `w-full table-fixed`, aucune largeur minimale ni `overflow-x-auto`                       | VERIFIEE                                                               |
| accessibilité de base                         | labels natifs, fieldsets/legends, cibles 44 px, focus visible, une seule région `role=status`        | VERIFIEE par source/test ; audit assistif réel encore requis           |
| copie honnête                                 | dossier texte contient inconnues, échecs, contradictions, TCO et disclaimer                          | VERIFIEE                                                               |
| recommandation cohérente                      | option recommandée présente parmi les options défendables ; public canvas/model-driven jamais KEEP   | VERIFIEE                                                               |

## 21. Modifications chirurgicales P2

- correction du libellé de l'offre de volume France ;
- remplacement de l'ancien lien SharePoint par le canonical actuel ;
- remplacement de la source générale Dataverse par la page qui prouve
  explicitement le cumul des rôles ;
- ajout du périmètre ACP 2026, de ses limites et de la prudence de déploiement ;
- ajout des exclusions offline canevas décisives et du risque d'appareil perdu ;
- ajout d'une frontière RGPD sourcée CNIL sans promesse de conformité ;
- ajout de la cartographie de région de bout en bout ;
- ajout d'une méthode pour le temps interne dans le TCO ;
- ajout, après NO_GO transversal, de la règle de multiplexing de la page 25 du
  guide de licences juillet 2026, de sa limite contractuelle et d'une question
  visible dans la section coût ;
- durcissement numérique du moteur et des nombres d'utilisateurs ;
- séparation G2 entre quantité Premium entière et montants monétaires décimaux ;
- remplacement du faux libellé « Montant en euros » de la quantité par un champ
  explicite à pas entier ;
- séparation G2-2 entre opérandes requis par le mode de licence et lignes de
  coûts facultatives ;
- retrait de l'option N/A uniquement des champs de licence requis ;
- ajout de tests adversariaux de débordement et d'affichage ;
- actualisation de `dateModified`, de la date des sources et du temps de lecture.

Les cinq statuts, l'architecture générale, les visuels, la neutralité du CTA et
les fichiers centraux n'ont pas été modifiés.

## 22. Validation P2

### Tests ciblés

Commande :

```text
node_modules/.bin/vitest run --maxWorkers=4 \
  src/app/guides/power-apps-ou-application-sur-mesure/content-quality.test.ts \
  src/app/guides/power-apps-ou-application-sur-mesure/power-apps-decision-model.test.ts \
  src/app/guides/power-apps-ou-application-sur-mesure/power-apps-decision-workbench.test.tsx
```

Résultat pré-G2 : **3 fichiers, 47 tests, 47 réussites**, ensuite invalidé car
aucun test ne couvrait la quantité Premium fractionnaire. Résultat corrigé G2 :
**3 fichiers, 49 tests, 49 réussites**, ensuite invalidé par le second NO_GO sur
les opérandes requis marqués N/A. Résultat corrigé G2-2 : **3 fichiers, 51
tests, 51 réussites**. Le temps de lecture mesuré reste **22 minutes** hors
workbench.

### TypeScript, lint, format et SVG

- `node_modules/.bin/tsc --noEmit` : succès, zéro diagnostic ;
- ESLint ciblé sur les sept fichiers TypeScript/TSX : succès, zéro erreur et
  zéro avertissement ;
- Prettier 3.9.6 sur P0, dossier et sept fichiers TypeScript/TSX : tous les
  fichiers correspondent ;
- Prettier ne possède pas de parseur SVG dans cette invocation ; les trois SVG
  passent `xmllint --noout` et leurs dimensions/titres/descriptions restent
  couvertes par le test de contenu.

### Liens officiels visibles

Extraction de toutes les URL `https` de la page, puis requête avec suivi des
redirections : **24 URL répondent 200**. Les deux pages tarifaires
`microsoft.com` répondent **403 au client curl automatisé**, mais ont été
ouvertes et lues dans le navigateur officiel le 3 août 2026. Ce 403 n'est pas
présenté comme un lien cassé ni comme une preuve de publication.

### Build diagnostique

Commande : `node_modules/.bin/next build --webpack`.

Résultat : **compilation réussie en 12,4 s**, puis échec au contrôle TypeScript
Next sur le fichier baseline hors périmètre
`src/app/guides/remplacer-microsoft-access-application-web/page.tsx` : l'export
`accessGuide` n'est pas un champ valide d'une page Next. Le même diagnostic
existait en P1. P2 n'a pas modifié le guide Access partagé et ne transforme pas
une compilation réussie en build global vert.

### Périmètre et résidus

- seuls le dossier, la page, le moteur, les tests et le workbench propres au
  slug ont été modifiés ;
- P0, OG et trois SVG sont inchangés par rapport au snapshot P1 ;
- aucun registre, verrou, guide voisin, fichier central, configuration,
  dépendance ou lockfile n'a été modifié par P2 ;
- le lien temporaire `node_modules` a été retiré ;
- un cache `.vite` local apparu pendant la reprise G2 a été déplacé de façon
  récupérable dans
  `/Users/quentinhagnere/.Trash/Hagnere-Code-wt-power-apps-node_modules-residue-G2-20260803-0130` ;
- le répertoire `.next` généré a été déplacé de façon récupérable dans
  `/Users/quentinhagnere/.Trash/Hagnere-Code-wt-power-apps-next-P2-20260803-0118` ;
- aucun `git add`, commit, push, déploiement, publication ou indexation.

### Snapshot P2 attendu

Le manifest P2 est créé après le gel de ce dossier. Il doit contenir exactement
les douze fichiers de la section 24, ne pas se contenir lui-même, ne pas inclure
le manifest P1, puis réussir un contrôle **12/12**. Son SHA externe est rapporté
à l'orchestrateur, hors du snapshot, afin d'éviter toute dépendance circulaire.

## 23. Limites P2

- aucun accès au tenant, aux contrats, factures, politiques effectives, données
  ou appareils du lecteur ; ces éléments restent `INCONNUE` et peuvent changer
  la décision ;
- deux pages tarifaires Microsoft sont lisibles dans le navigateur officiel,
  mais répondent `403` au client `curl` automatisé ; les 24 autres liens visibles
  répondent `200` après redirection ;
- les chiffres tarifaires restent volatils et devront être rouverts avant mise
  en ligne ;
- le guide de licences établit la règle générale de multiplexing, mais ne permet
  pas de déduire seul la référence commerciale, le modèle de licence ou les
  droits contractuels applicables à une architecture particulière ; le scénario
  exact doit être confirmé à partir du contrat avec l'équipe Microsoft ou un
  partenaire certifié Microsoft ;
- aucune inspection responsive dans un navigateur réel, aucune technologie
  d'assistance, aucune impression physique et aucun Rich Results Test public ne
  sont revendiqués en P2 ;
- la route publique, l'indexation et le déploiement ne sont pas dans le périmètre
  de cette passe ;
- P2 ne lance ni P3 ni P4 et n'autorise aucune intégration.

## 24. Fichiers du snapshot P2

1. `docs/research/power-apps-ou-application-sur-mesure-p0.md`
2. `docs/research/power-apps-ou-application-sur-mesure.md`
3. `src/app/guides/power-apps-ou-application-sur-mesure/page.tsx`
4. `src/app/guides/power-apps-ou-application-sur-mesure/opengraph-image.tsx`
5. `src/app/guides/power-apps-ou-application-sur-mesure/content-quality.test.ts`
6. `src/app/guides/power-apps-ou-application-sur-mesure/power-apps-decision-model.ts`
7. `src/app/guides/power-apps-ou-application-sur-mesure/power-apps-decision-model.test.ts`
8. `src/app/guides/power-apps-ou-application-sur-mesure/power-apps-decision-workbench.tsx`
9. `src/app/guides/power-apps-ou-application-sur-mesure/power-apps-decision-workbench.test.tsx`
10. `public/guides/power-apps-ou-application-sur-mesure/article-power-apps-16x9.svg`
11. `public/guides/power-apps-ou-application-sur-mesure/article-power-apps-4x3.svg`
12. `public/guides/power-apps-ou-application-sur-mesure/article-power-apps-1x1.svg`

Décision de l'agent P2 : **PASSE_2_CORRIGEE_G2_2_TERMINEE — nouveau manifest P2
à figer ; P3 interdite sans validation explicite de l'orchestrateur.**

## 25. Journal du NO_GO G2 et correction P2

### Reproduction indépendante de l'orchestrateur

Entrée :

```text
mode = premium-eur
utilisateurs licenciés connus = 1,5
prix connu = 17,30 €
autres postes = non applicables
```

Résultat fautif avant correction : `complete:true`, licences mensuelles à
25,95 € et TCO complets. Dans l'interface, le même champ était annoncé comme
« Montant en euros », avec `inputMode=decimal` et `step=0.01`.

### Cause racine

Le type tri-state était partagé à raison entre plusieurs valeurs numériques,
mais `calculateMonthlyLicense` appliquait à la quantité de licences le
validateur des montants. L'éditeur réutilisait de la même manière le composant
monétaire. Le contrôle des utilisateurs actuels/projetés du diagnostic ne
couvrait pas `license.users` du TCO.

### Correction attendue et preuves

- `validateRequiredIntegerQuantity` impose un entier sûr supérieur ou égal à
  zéro pour la quantité Premium ;
- `validateNumericValue` continue d'accepter les décimales monétaires valides ;
- `KnowledgeQuantity` rend « Quantité entière d'utilisateurs licenciés »,
  `inputMode=numeric`, `step=1` ;
- `KnowledgeAmount` conserve « Montant en euros », `inputMode=decimal`,
  `step=0.01` ;
- le test modèle couvre 1,5, une valeur non sûre, zéro et un prix décimal ;
- le test de rendu contrôle le libellé, les attributs et l'erreur visible, sans
  total 25,95 €.

Résultat après correction : **49/49 tests**, TypeScript et ESLint sans
diagnostic. Le nouveau manifest 12/12 est généré uniquement après gel de ce
dossier ; son SHA externe reste rapporté hors snapshot.

### Second NO_GO G2 : N/A sur un opérande requis

Reproduction orchestrateur : en mode `premium-eur`, une quantité ou un prix
avec `{ knowledge: "not-applicable", amount: null }`, tous les autres postes N/A,
produisait `complete:true`, une licence mensuelle à zéro et trois TCO à zéro. La
même frontière existait pour le montant contractuel des modes `payg-usd` et
`contract-monthly-eur`.

Cause : `validateNumericValue` et le validateur de quantité traitaient N/A comme
un zéro légitime sans connaître le caractère requis de l'opérande imposé par le
mode. L'interface exposait donc également « Non applicable » dans tous les
sélecteurs tri-state.

Correction G2-2 :

- `validateRequiredIntegerQuantity` exige une quantité Premium connue et valide ;
- `validateRequiredNumericValue` exige le prix Premium ou le montant contractuel
  PAYG/forfait connu et valide ;
- un état `unknown` reste une inconnue bloquante ; un état `not-applicable`
  injecté devient une erreur visible ;
- `allowNotApplicable={false}` retire N/A uniquement des quatre contrôles requis ;
- le mode de licence global conserve « Non applicable » ;
- chaque poste ponctuel ou mensuel conserve N/A comme zéro facultatif explicite ;
- la matrice modèle et le rendu des options passent avant le nouveau snapshot.

Résultat final G2-2 : **51/51 tests**. TypeScript, ESLint ciblé, Prettier et les
trois validations XML réussissent sans diagnostic. Les quatre cas d'opérande
requis N/A produisent une erreur et des totaux `null` ; le mode global N/A et
les coûts facultatifs N/A restent calculables à zéro. Le manifeste externe est
créé seulement après ce gel documentaire.

## 26. Ouverture et chaîne de confiance P3

La passe 3 a été exécutée par l'agent distinct `/root/powerapps_pass3`, sans
réécrire le moteur de décision et sans reprendre les responsabilités de
recherche ou de vérification factuelle de P2.

Entrées contrôlées avant toute modification :

- lecture intégrale de
  `/Users/quentinhagnere/Downloads/Prompt #3 - Polish Rédactionnel.docx` par
  extraction `textutil`, soit **970 lignes, 9 163 mots et 57 201 caractères** ;
- contre-comptage OOXML du document Word : **970 paragraphes, 50 tableaux, 189
  lignes, 414 cellules et 1 070 nœuds texte** ;
- lecture intégrale du P0, du dossier P2, de la page, du moteur, du workbench,
  des trois tests, de l'Open Graph et des trois SVG ;
- validation externe du manifeste P2 : **12 entrées sur 12** et SHA-256
  `1e40a5b61952ea38bb2c4966ee4038955f95486a852b4b466cc0eb7145b0204b` ;
- confirmation de l'absence de manifeste P3 utilisable avant le travail.

Le prompt P3 a été appliqué sous la gouvernance supérieure du projet : clarté,
rythme, réponse directe, transitions et réduction du jargon, sans invention de
preuve, amplification commerciale, changement de recommandation ni ajout de
donnée non vérifiée.

## 27. Diagnostic rédactionnel P3

L'audit a été conduit sur la page complète et non sur des paragraphes isolés.
Les principaux frottements étaient les suivants :

| Prisme             | Frottement observé                                                                                                         | Traitement P3                                                                                 |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| Réponse immédiate  | certaines réponses de FAQ démarraient par le contexte                                                                      | réponse explicite dès la première phrase, puis nuance et condition                            |
| Jargon             | `TCO`, tenant, maker, runtime, DLP, ACP, ALM, PAYG, B2B ou rollback pouvaient précéder leur définition                     | développement ou explication au premier emploi utile                                          |
| Progression        | plusieurs tableaux et formules étaient exacts mais laissés sans lecture opérationnelle immédiate                           | ajout d'une interprétation concrète et d'une transition vers l'étape suivante                 |
| Rythme             | quelques paragraphes cumulaient preuve, risque, remédiation et décision                                                    | découpage en unités plus respirables sans perte de condition                                  |
| Cohérence lexicale | le workbench conservait des libellés anglais ou ambigus                                                                    | « atelier de décision local » et « coûts totaux (TCO) »                                       |
| Métadonnées        | la description pouvait mieux expliciter l'aide à la décision ; le temps de lecture était devenu inférieur au contenu servi | description resserrée à 153 caractères et mesure ramenée à la réalité servie, soit 24 minutes |
| Humanité           | quelques formulations sonnaient comme une procédure interne                                                                | remplacement par des formulations orientées lecteur, exemple ou action vérifiable             |

## 28. Modifications rédactionnelles P3

La passe a apporté les changements suivants :

- définition du coût total de possession dès le héros avant sa première
  utilisation abrégée en `TCO` ;
- réponses FAQ rendues directes, notamment sur Microsoft 365, l'accès externe,
  le hors-ligne, l'accessibilité et la conformité ;
- développement des sigles ou termes spécialisés au premier emploi : B2B,
  DLP, ACP, WCAG, RGAA, ALM, RGPD, DPO, AIPD, PAYG, HT, ROI, CNIL et API ;
- explication en français courant de `tenant`, `maker`, `runtime`, `rollback`,
  `low-code`, hybride et zone sans réseau ;
- ajout d'une lecture concrète après les tableaux, formules et étapes de test,
  afin que le lecteur sache quoi conclure et quelle preuve réunir ensuite ;
- ajout de ponts entre les grandes sections pour préserver un fil de décision
  continu ;
- découpage des paragraphes les plus denses, en particulier le quatrième test,
  le scénario 4 et sa remédiation ;
- remplacement de « Workbench de décision » par « Atelier de décision local »
  et clarification du titre de comparaison des quatre TCO ;
- enrichissement du libellé du guide lié sur le retour sur investissement ;
- retrait de la formulation `go/no-go` au profit d'une décision compréhensible ;
- passage de `readTimeMin` de 22 à **24**, justifié par **4 846 mots** réellement
  servis dans l'article, hors workbench exclu du calcul.

Frontières préservées : aucun montant, aucune licence, aucune source, aucun
seuil, aucune branche du moteur, aucun statut de recommandation, aucune règle
de calcul, aucun visuel, aucun CTA, aucun schéma JSON-LD, aucune date de preuve,
aucun canonical et aucune directive d'indexation n'ont été changés en P3.

## 29. Relecture servie et questions anticipées

La route locale a été servie avec Next.js sur
`http://127.0.0.1:3033/guides/power-apps-ou-application-sur-mesure`, puis relue
comme un contenu destiné au lecteur. Le contrôle final donne :

- HTTP **200** ;
- **731 932 octets** de HTML servi ;
- canonical exact
  `https://hagnere-code.ai/guides/power-apps-ou-application-sur-mesure` ;
- robots exacts `noindex, nofollow` ;
- exactement **deux** blocs JSON-LD ;
- **4 846 mots**, soit **24 minutes** à 200 mots par minute, après exclusion du
  workbench marquée dans le HTML ;
- aucune occurrence de la liste P3 de clichés anti-IA testée dans le HTML
  servi.

La relecture transversale a traité les ambiguïtés suivantes :

| Question possible du lecteur                          | Réponse ou garde-fou désormais présent                                                             |
| ----------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| « Que signifie TCO et que dois-je y mettre ? »        | définition dès le héros, formule lisible, quatre variantes et lecture après calcul                 |
| « Microsoft 365 suffit-il forcément ? »               | réponse « Non, pas pour tous les projets », puis vérifications de droits, connecteurs et audience  |
| « Qui sont le maker, le runtime et le tenant ? »      | rôle du créateur, contexte d'exécution et instance organisationnelle distinguée des environnements |
| « Que recouvrent DLP et ACP ? »                       | noms développés, finalité et limites précisées sans promesse de sécurité automatique               |
| « Le choix technique garantit-il le RGPD ? »          | réponse négative explicite, puis orientation vers DPO/AIPD lorsque le contexte l'exige             |
| « Que faire après un tableau ou un test ? »           | phrase d'interprétation, preuve attendue et transition vers l'étape suivante                       |
| « Puis-je conclure malgré une inconnue ? »            | inconnue maintenue comme bloquante ; aucune transformation silencieuse en zéro                     |
| « Le guide recommande-t-il toujours le sur-mesure ? » | non : maintien, renforcement, hybride et reconstruction restent conditionnels aux preuves          |

Cette relecture est une preuve de contenu servi et de structure HTML, pas une
preuve de déploiement public, d'indexation, de conformité contractuelle ou
d'audit d'accessibilité avec technologie d'assistance. La revue responsive et
visuelle finale reste du ressort des portes ultérieures.

## 30. Validation P3

### Tests ciblés et mesure

- Vitest ciblé sur contenu, moteur et workbench : **3 fichiers, 53 tests, 53
  réussites** ;
- mesure officielle avec
  `GUIDE_BASE_URL=http://127.0.0.1:3033 npm run measure:guide-readtime -- power-apps-ou-application-sur-mesure` :
  **4 846 mots, 24 minutes** ;
- le premier appel sans `GUIDE_BASE_URL` a correctement échoué sur
  `localhost:3000`, où aucun serveur n'était lancé ; il ne constitue ni un échec
  de contenu ni une preuve positive et a été rejoué sur la route réellement
  servie en 3033.

### Contrôles statiques et format

- `node_modules/.bin/tsc --noEmit` : succès, zéro diagnostic ;
- ESLint ciblé sur les sept fichiers TypeScript/TSX du guide : succès, zéro
  diagnostic ;
- Prettier 3.9.6 sur P0, dossier et sept fichiers TypeScript/TSX : tous les
  fichiers correspondent ;
- `xmllint --noout` : **3 SVG sur 3** valides ;
- `git diff --check` : succès, aucun défaut d'espace ou marqueur de conflit ;
- serveur local arrêté, lien temporaire `node_modules` retiré et `.next` déplacé
  de façon récupérable dans
  `/Users/quentinhagnere/.Trash/Hagnere-Code-wt-power-apps-next-P3-20260803-0218` ;
- aucun cache, journal ou runtime temporaire ne reste dans le worktree au gel
  du dossier.

### Périmètre P3

Fichiers édités par P3 :

1. `docs/research/power-apps-ou-application-sur-mesure.md` ;
2. `src/app/guides/power-apps-ou-application-sur-mesure/page.tsx` ;
3. `src/app/guides/power-apps-ou-application-sur-mesure/content-quality.test.ts` ;
4. `src/app/guides/power-apps-ou-application-sur-mesure/power-apps-decision-workbench.tsx` ;
5. `src/app/guides/power-apps-ou-application-sur-mesure/power-apps-decision-workbench.test.tsx`.

Le moteur pur, son test, l'Open Graph, P0 et les trois SVG sont relus mais
inchangés par P3. Aucun registre, verrou, fichier central, guide voisin,
dépendance, lockfile, commit, push, déploiement, publication ou indexation ne
fait partie de cette passe.

## 31. Snapshot P3 et passage de relais

Le manifeste P3 doit contenir exactement les douze fichiers suivants :

1. `docs/research/power-apps-ou-application-sur-mesure-p0.md`
2. `docs/research/power-apps-ou-application-sur-mesure.md`
3. `src/app/guides/power-apps-ou-application-sur-mesure/page.tsx`
4. `src/app/guides/power-apps-ou-application-sur-mesure/opengraph-image.tsx`
5. `src/app/guides/power-apps-ou-application-sur-mesure/content-quality.test.ts`
6. `src/app/guides/power-apps-ou-application-sur-mesure/power-apps-decision-model.ts`
7. `src/app/guides/power-apps-ou-application-sur-mesure/power-apps-decision-model.test.ts`
8. `src/app/guides/power-apps-ou-application-sur-mesure/power-apps-decision-workbench.tsx`
9. `src/app/guides/power-apps-ou-application-sur-mesure/power-apps-decision-workbench.test.tsx`
10. `public/guides/power-apps-ou-application-sur-mesure/article-power-apps-16x9.svg`
11. `public/guides/power-apps-ou-application-sur-mesure/article-power-apps-4x3.svg`
12. `public/guides/power-apps-ou-application-sur-mesure/article-power-apps-1x1.svg`

Le manifeste ne se contient pas lui-même et n'inclut aucun manifeste de passe
antérieure. Son SHA-256 externe est rapporté à l'orchestrateur après contrôle
12/12. La passe 4 reste **interdite** tant que l'orchestrateur n'a pas contrôlé
ce nouveau snapshot, validé explicitement la correction G3 et autorisé P4.

Décision de l'agent P3 : **PASSE_3_CORRIGEE_G3_TERMINEE — nouveau snapshot P3 à
figer ; aucune autorisation de P4, d'intégration ou de publication.**

## 32. Journal du NO_GO G3 et correction P3

Le premier contrôle G3 de l'orchestrateur a prononcé un **NO_GO ciblé** sur
trois écarts rédactionnels. Le manifeste P3 de SHA externe
`6eb6b2a88327b33156733badfb7ab529d065e2128df5ddaab539d29752b48335`
a été invalidé puis supprimé avant la correction ; il ne doit plus servir de
preuve.

### Écarts reproduits

1. le tenant était assimilé à « l'environnement Microsoft de votre
   organisation », puis à un « environnement Microsoft (tenant) » dans la FAQ ;
2. l'amorce exacte « Concrètement, » apparaissait sept fois et installait une
   cadence mécanique malgré le polish P3 ;
3. le critère « Limite durable, TCO dédié supérieur en valeur » pouvait être lu
   comme un coût plus élevé plutôt que comme une preuve favorable au dédié.

### Correctifs et garde-fous

- le tenant est désormais défini comme l'instance organisationnelle Microsoft
  qui regroupe notamment identités, licences, politiques et environnements
  Power Platform ; la page précise qu'il ne se confond pas avec l'un de ces
  environnements ;
- la FAQ reprend cette définition dans la frontière de responsabilité du
  support, sans appeler le tenant un environnement ;
- les sept amorces identiques ont été supprimées ou variées, sans ajouter de
  fait ni changer la conclusion des paragraphes ; le HTML rendu en contient
  désormais **zéro** ;
- le tableau des scénarios exige maintenant une limite durable et des bénéfices
  documentés justifiant le coût total ou le surcoût du dédié, sans promesse de
  retour sur investissement ;
- deux tests de contenu interdisent les anciennes définitions trompeuses,
  imposent la distinction tenant/environnement, bornent l'amorce répétée à zéro
  dans la page rendue et figent le nouveau critère du tableau.

### Revalidation après correction

- route locale : HTTP **200**, **731 932 octets**, canonical exact, robots
  `noindex, nofollow` et deux JSON-LD ;
- contrôles rendus : définition du tenant présente, distinction avec les
  environnements présente, nouveau critère présent et zéro occurrence de
  « Concrètement, » ;
- mesure : **4 846 mots, 24 minutes** ; `readTimeMin` reste donc **24** ;
- Vitest : **3 fichiers, 53 tests, 53 réussites** avant la validation statique
  finale ;
- aucune modification du moteur, des montants, des sources, des politiques de
  décision, des visuels, du manifeste P2 ou des fichiers centraux.

Après ces contrôles, le serveur local a été arrêté, le lien temporaire
`node_modules` retiré et le nouveau `.next` déplacé de façon récupérable dans
`/Users/quentinhagnere/.Trash/Hagnere-Code-wt-power-apps-next-P3-G3-20260803-0228`.
Aucun cache, journal ou runtime temporaire ne reste dans le worktree. Le nouveau
manifeste P3 est créé seulement après ce gel ; sa nouvelle empreinte externe
remplace entièrement celle invalidée ci-dessus.

## 33. Ouverture P4 et diagnostic anti-IA avant correction

La passe 4 est exécutée par l'agent distinct `/root/powerapps_pass4`, après
validation G3 explicite de l'orchestrateur. Avant toute modification :

- le manifeste P3 a été contrôlé à **12 entrées sur 12** ; son SHA-256 externe
  est
  `3f40a2d8de6c2c8fa946ceceeab4cc3545aa2a9d29804d23f2b3ddabba788e19` ;
- la version réellement installée du skill Documents, `26.802.11031`, a été
  lue intégralement avec son protocole `tasks/read_review.md`. Le chemin
  `26.801.11242` transmis au départ n'existait plus localement ;
- `/Users/quentinhagnere/Downloads/Prompt 4 - Antipasse IA.docx` a été lu
  jusqu'à EOF : extraction `textutil` de **381 lignes, 2 457 mots et 18 205
  octets** ; contre-comptage OOXML de **381 paragraphes, 0 table, 0 ligne, 0
  cellule et 304 noeuds texte** ;
- le DOCX a été rendu avec le runtime Python documentaire fourni par Codex :
  **9 pages PNG**, toutes inspectées à leur définition d'origine ;
- les douze fichiers du snapshot P3 et les instructions du dépôt ont été lus
  intégralement ; le moteur pur et ses règles de calcul ont été gelés.

### Cartographie et relectures sans écriture

| Section       | Lignes P3 | Relecteur anti-IA                                      | Droit d'édition |
| ------------- | --------: | ------------------------------------------------------ | --------------- |
| `reponse`     |   510–606 | `/root/powerapps_pass4/p4_review_reponse`              | aucun           |
| `chemins`     |   607–756 | même relecteur, vague 2                                | aucun           |
| `cinq-tests`  |   757–996 | même relecteur, vague 2                                | aucun           |
| `cout`        |  997–1090 | même relecteur, vague 2                                | aucun           |
| `scenarios`   | 1091–1242 | `/root/powerapps_p0_microsoft`, réactivé en lecteur P4 | aucun           |
| `remediation` | 1243–1352 | même relecteur                                         | aucun           |
| `audit`       | 1353–1480 | même relecteur                                         | aucun           |
| `lundi`       | 1481–1552 | même relecteur                                         | aucun           |
| `sources`     | 1553–1641 | même relecteur                                         | aucun           |

Les rapports ont été consolidés par l'agent P4, seul autorisé à appliquer des
corrections. Ils convergent sur quatre défauts sans remettre en cause le fond :

1. l'état interne `STOP` est répété comme un libellé public au lieu de dire
   naturellement que la décision doit être suspendue ;
2. quelques notations ou mots d'atelier (`null`, `signal de STOP`, `critère
d'arrêt`, `test de sortie`) exposent l'implémentation plutôt que l'action du
   lecteur ;
3. plusieurs listes et définitions suivent un rythme trop parallèle ;
4. certaines transitions donnent au test, au chiffre ou à l'outil le rôle de
   décider à la place de l'équipe.

### Preuve servie initiale

La route P3 a été servie avant correction sur
`http://127.0.0.1:3035/guides/power-apps-ou-application-sur-mesure` :

- HTTP **200**, **731 932 octets** ;
- canonical exact et robots `noindex, nofollow` ;
- JSON-LD limité à `Article` et `BreadcrumbList` ;
- H1, neuf H2 éditoriaux, FAQ et CTA conformes à la structure attendue ;
- zéro `Concrètement,` et zéro cliché de la liste littérale du Prompt 4 ;
- **43 occurrences visibles de `STOP`** dans le HTML initial, principalement
  parce que l'option tri-state est répétée dans chaque contrôle ;
- zéro `À SOURCER`, `PASS`, `NO_GO`, `gate`, `passe 1–4`, hash ou identifiant
  de cas/modèle visible ;
- les occurrences d'`audit` sont métier : sécurité, droits, solutions ou
  limite professionnelle, jamais un état de production.

La correction P4 doit donc naturaliser le vocabulaire visible sans modifier
les statuts internes du moteur, les conditions d'arrêt, les prix, les calculs,
les sources, les cinq options ou les frontières de recommandation.

## 34. Corrections P4 appliquées

La correction a porté sur la voix éditoriale et les libellés rendus au lecteur.
Le moteur pur `power-apps-decision-model.ts`, ses statuts internes, ses seuils,
ses calculs, ses invariants et son test n'ont pas été modifiés.

### Vocabulaire public et décision suspendue

- `STOP` devient « décision en attente » ou « décision suspendue » dans la page,
  l'atelier et le dossier copiable ;
- l'inconnue n'est jamais transformée en zéro : elle est présentée comme une
  preuve manquante qui suspend la conclusion ;
- la fonction d'affichage traduit le statut interne sans altérer le résultat du
  moteur ; le dossier copié expose une « Orientation » lisible et non un code
  d'implémentation ;
- un test de rendu interdit désormais, sans bannir le verbe français « se
  passe », `STOP`, `À SOURCER`, `PASS`, `NO_GO`, `gate`, `passe 1–4`, `hash`,
  `certificat` et les identifiants de cas ou de modèle dans le texte lecteur ;
- `audit` reste autorisé uniquement dans son sens technique, de droits, de
  solution ou de prestation professionnelle.

### Rythme, précision et pédagogie

- la réponse directe énonce d'abord les conditions dans lesquelles Power Apps
  reste défendable, puis le seuil à franchir avant une reconstruction ;
- la définition du tenant est conservée : instance organisationnelle Microsoft
  regroupant identités, licences, politiques et environnements, et non un
  environnement particulier ;
- les deux chemins de décision, les cinq tests et le calcul de coût ont été
  réécrits pour attribuer la décision à l'équipe et non au tableau ou à l'outil ;
- l'inférence sur la sortie de Power Platform est explicitement présentée comme
  une déduction tirée des limites documentées de l'export, jamais comme une règle
  Microsoft garantissant le même effort pour tous les projets ;
- les dix étapes de migration ont été regroupées en sept phases asymétriques,
  sans perdre l'inventaire, la recette métier, la restauration indépendante, le
  transfert reproductible, les tests utilisateurs, la coexistence, le retour à
  l'ancien outil et l'extinction ;
- les dix actions de l'atelier du lundi ont été regroupées en six actions avec
  acteurs, comptes de test, contrôles, responsable, date et critère de décision ;
- les conclusions auto-validantes ont été remplacées par des réserves concrètes
  et par la possibilité explicite de conserver Power Apps.

### Atelier, FAQ et illustrations

- l'atelier conserve ses quatre TCO à un, trois et cinq ans, le zéro explicite,
  les inconnues bloquantes, les erreurs de saisie, la copie locale et
  l'impression sans stockage ni requête réseau ;
- la FAQ reprend la portée exacte de l'inférence de sortie ;
- l'image Open Graph utilise les cinq issues publiques naturalisées ;
- les trois SVG utilisent « suspendre » et du français lecteur. Ils ont été
  rendus en PNG et inspectés aux trois ratios. Un débordement détecté sur la
  carte « Dédié » du 4:3 après traduction de `rollback` a été corrigé en
  « Retour testé », puis revérifié visuellement.

## 35. Validation finale P4

### Page réellement servie

La route locale finale a été contrôlée sur
`http://127.0.0.1:3035/guides/power-apps-ou-application-sur-mesure` :

- HTTP **200**, **731 400 octets** ;
- canonical exact
  `https://hagnere-code.ai/guides/power-apps-ou-application-sur-mesure` ;
- robots `noindex, nofollow` ;
- H1 exact et neuf H2 éditoriaux présents ;
- JSON-LD limité à **Article** et **BreadcrumbList** ;
- **0** `STOP`, `À SOURCER`, `PASS`, `NO_GO`, `gate`, `passe 1–4`, `hash`,
  `certificat`, identifiant de cas ou identifiant de modèle dans le texte rendu ;
- **0** amorce `Concrètement,` ;
- mesure officielle : **5 024 mots, 25 minutes**, cohérente avec
  `readTimeMin: 25`.

Le contrôle initial comptait 43 `STOP` visibles ; le contrôle final en compte
zéro, sans suppression d'une condition d'arrêt du moteur.

### Tests et contrôles statiques

- Vitest ciblé : **3 fichiers, 54 tests, 54 réussites** ;
- TypeScript `tsc --noEmit` : succès, zéro diagnostic ;
- ESLint ciblé sur les sept fichiers TypeScript/TSX : succès, zéro diagnostic ;
- Prettier sur les cinq fichiers TypeScript/TSX touchés : conforme ;
- `xmllint --noout` : **3 SVG sur 3** valides ;
- `git diff --check` : succès, aucun défaut d'espace ou marqueur de conflit.

Le build Next avec webpack a franchi la compilation optimisée en **12,4 s**.
Il n'est toutefois pas vert : le contrôle de type Next échoue ensuite dans le
guide voisin
`src/app/guides/remplacer-microsoft-access-application-web/page.tsx`, car
`accessGuide` n'est pas un champ d'export valide pour une page Next. Ce fichier
est hors du slug et hors du périmètre d'édition P4 ; il n'a pas été modifié.
Cette preuve sépare donc explicitement compilation réussie et build de
production non abouti.

### Détecteur anti-IA indépendant

Après toutes les corrections éditoriales, le relecteur distinct
`/root/powerapps_pass4/p4_review_reponse`, sans droit d'écriture, a relu le
corps complet :

- verdict global : **HUMAN**, détection IA éditoriale **NON** ;
- authenticité : **18,8/20**, au-dessus du seuil de 18 ;
- sept H2 classés `HUMAN` ; `scenarios` et `remediation` classés `MIXTE` sans
  dérive IA dominante ;
- trois tics résiduels au maximum : répétition honnête du libellé fictif,
  cadence abrégée dans un scénario et triptyque de lecture des résultats ;
- vocabulaire interne public : zéro occurrence sur toute la liste interdite ;
- transitions, asymétries, exemples, définitions et réserves factuelles jugés
  cohérents avec une voix de praticien.

Ces tics ne changent ni le verdict ni le seuil d'acceptation. Le libellé répété
« scénario fictif composite » est conservé parce qu'il empêche précisément de
faire passer un exemple pédagogique pour un cas client.

## 36. Périmètre, nettoyage et passage de relais

Fichiers édités par P4, hors manifeste de preuve :

1. `docs/research/power-apps-ou-application-sur-mesure.md` ;
2. `src/app/guides/power-apps-ou-application-sur-mesure/page.tsx` ;
3. `src/app/guides/power-apps-ou-application-sur-mesure/opengraph-image.tsx` ;
4. `src/app/guides/power-apps-ou-application-sur-mesure/content-quality.test.ts` ;
5. `src/app/guides/power-apps-ou-application-sur-mesure/power-apps-decision-workbench.tsx` ;
6. `src/app/guides/power-apps-ou-application-sur-mesure/power-apps-decision-workbench.test.tsx` ;
7. `public/guides/power-apps-ou-application-sur-mesure/article-power-apps-16x9.svg` ;
8. `public/guides/power-apps-ou-application-sur-mesure/article-power-apps-4x3.svg` ;
9. `public/guides/power-apps-ou-application-sur-mesure/article-power-apps-1x1.svg`.

Le serveur local a été arrêté proprement. Le lien temporaire `node_modules` a
été retiré après vérification de sa cible. Les artefacts ont été déplacés de
façon récupérable vers :

- `/Users/quentinhagnere/.Trash/Hagnere-Code-wt-power-apps-next-P4-20260803-0303` ;
- `/Users/quentinhagnere/.Trash/powerapps-p4-docx-render-20260803-0303` ;
- `/Users/quentinhagnere/.Trash/powerapps-svg-preview-20260803-0303` ;
- `/Users/quentinhagnere/.Trash/powerapps-render-audit-20260803-0303.py`.

Aucun cache, journal, dépendance ou runtime temporaire ne reste dans le
worktree. Aucun registre, verrou, guide voisin, fichier central, lockfile,
commit, push, déploiement, publication ou indexation n'a été touché.

Le snapshot P4 doit contenir exactement les mêmes douze chemins que P3 : P0,
le dossier, les sept fichiers TypeScript/TSX du slug et les trois SVG. Il ne se
contient pas lui-même et n'inclut aucun manifeste antérieur. Sa somme externe
est transmise à l'orchestrateur après contrôle **12/12**.

Décision de l'agent P4 : **PASSE_4_TERMINEE — snapshot P4 à figer ; aucune
autorisation d'intégration, de déploiement, de publication ou d'indexation.**

## 37. NO_GO G4 ciblé et invalidation du premier snapshot P4

L'orchestrateur a refusé le premier snapshot P4 après sa propre relecture. Le
manifeste de somme externe
`13be19f8817c7d550fe7bf79090991d163880edfcd9689387a3f9a9437dbc222` a été
invalidé puis supprimé **avant toute correction G4** ; il ne doit plus servir de
preuve.

Le refus est borné à trois résidus dans la section `scenarios` :

1. une maxime symétrique opposait une Power App gouvernée à une application
   critique sans exploitation ;
2. les surfaces d'accès externes étaient comparées par la métaphore des « trois
   habillages du même produit » ;
3. la formule « le dédié gagne en crédibilité — après TCO » constituait encore
   un tic rédactionnel moyen explicitement repéré par le détecteur final.

Les chiffres, sources, scénarios, vérifications, seuils, statuts internes,
calculs et autres sections restent gelés. La correction G4 doit remplacer
uniquement ces trois formulations, adapter les assertions ciblées si nécessaire,
rejouer l'ensemble des preuves P4 et obtenir un nouveau détecteur global d'au
moins 18/20 sans tic moyen avant de recréer le manifeste.

### Corrections G4 appliquées

- le scénario des 250 utilisateurs explique désormais directement que le
  volume n'invalide pas Power Apps par principe. Il conserve le coût
  contractuel, les droits de requêtes, les limites des connecteurs, la charge
  utile, la suppléance, la restauration et la responsabilité d'exploitation ;
- le partage canevas avec invités B2B, Power Pages et l'application dédiée sont
  distingués par leurs parcours et leur modèle d'identité, sans métaphore ;
- la décision portail conserve Power Pages dans la comparaison lorsqu'il couvre
  le parcours, envisage un module dédié lorsqu'un seul écart de marque ou
  d'identité subsiste et ne justifie une reconstruction complète qu'en cas
  d'écarts persistants et de coût total soutenable ;
- le test de contenu impose les trois nouvelles formulations et interdit
  explicitement le retour des trois résidus refusés.

### Revalidation G4 après correction

Les preuves suivantes remplacent, pour l'état courant, les chiffres de rendu et
le premier détecteur consignés à la section 35 :

- route locale : HTTP **200**, **731 780 octets**, canonical exact, robots
  `noindex, nofollow`, H1 exact et JSON-LD limité à `Article` et
  `BreadcrumbList` ;
- texte rendu : zéro marqueur interne interdit et zéro `Concrètement,` ;
- mesure officielle : **5 046 mots, 25 minutes** ; `readTimeMin: 25` reste
  exact ;
- Vitest ciblé : **3 fichiers, 54 tests, 54 réussites** ;
- TypeScript, ESLint ciblé, `xmllint` sur les trois SVG et
  `git diff --check` : succès sans diagnostic ;
- les trois formulations refusées sont absentes de la source et protégées par
  les assertions de contenu.

Le relecteur indépendant a ensuite relu les neuf H2 complets, sans droit
d'écriture :

- verdict global : **HUMAN**, détection IA **NON** ;
- authenticité : **19,1/20** ;
- huit H2 `HUMAN`, un H2 `MIXTE`, zéro H2 `IA` ;
- seulement deux tics faibles : le marquage honnête des scénarios fictifs et la
  classification utile des trois résultats ;
- **zéro tic moyen et zéro tic fort**, conformément à la condition G4 ;
- aucun vocabulaire de production public et aucune des trois formulations
  invalidées.

Le serveur G4 a été arrêté proprement, le lien temporaire `node_modules` retiré
après vérification de sa cible et `.next` déplacé de façon récupérable vers
`/Users/quentinhagnere/.Trash/Hagnere-Code-wt-power-apps-next-P4-G4-20260803-0310`.
Aucun artefact temporaire ne reste dans le worktree.

Décision de l'agent P4 après G4 : **PASSE_4_CORRIGEE_G4_TERMINEE — nouveau
snapshot P4 à figer ; aucune autorisation de Q, d'intégration, de déploiement,
de publication ou d'indexation.**

## 38. NO_GO qualité transversal et réouverture P2

Le contrôle qualité transversal de l'orchestrateur a rouvert la vérification
factuelle sur une question matérielle absente du candidat : l'effet du
**multiplexing** sur les licences Power Platform lorsqu'un accès à l'application
ou aux données passe par une connexion mutualisée, une couche intermédiaire ou
une automatisation.

Avant toute correction de fond, les preuves devenues obsolètes ont été
invalidées puis supprimées :

- manifeste P2, SHA-256 externe
  `1e40a5b61952ea38bb2c4966ee4038955f95486a852b4b466cc0eb7145b0204b` ;
- manifeste P3, SHA-256 externe
  `3f40a2d8de6c2c8fa946ceceeab4cc3545aa2a9d29804d23f2b3ddabba788e19` ;
- manifeste P4, SHA-256 externe
  `5dd0b4e1947ae84716705af406d83e75c0d05b5a6262591bc5fd503681b63721`.

Le manifeste P1 reste intact. La reprise P2 doit rouvrir la source Microsoft
primaire, circonscrire précisément sa portée, ajouter une réponse visible et un
test sémantique, puis produire un nouveau snapshot P2. Les preuves P3 et P4 ne
pourront être recréées qu'après validation explicite du nouveau G2.

### 38.1 Source primaire rouverte

- document : **Power Platform Licensing Guide | July 2026** ;
- URL officielle stable :
  <https://go.microsoft.com/fwlink/?LinkId=2085130> ;
- point probant : page 25, section `Multiplexing` ; le document inclut dans ce
  terme le regroupement de connexions, le réacheminement ou accès indirect et
  les processus automatisés utilisés pour réduire les personnes ou appareils
  qui accèdent directement au produit ; ces mécanismes ne réduisent pas le
  nombre de licences requis, et la personne ou l'appareil qui saisit,
  interroge, consulte ou accède autrement à Power Apps, Power Automate ou Power
  Pages, directement ou indirectement, doit être correctement licencié ;
- limite documentaire : page 3, le guide indique qu'il ne remplace pas les
  documents juridiques qui régissent les droits d'utilisation et renvoie les
  exigences d'un produit ou scénario exact à l'équipe Microsoft ou à un
  partenaire certifié Microsoft.

La formulation visible ne transforme donc pas la règle générale en tarif, en
référence commerciale ou en obligation universelle de licence individuelle
pour toute automatisation.

### 38.2 Preuve, limite et décision éditoriale

| Élément  | Conclusion de la reprise P2                                                                                                                                                   |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Preuve   | le nombre de couches, une connexion partagée ou un compte technique ne fait pas disparaître l'accès direct ou indirect décrit page 25                                         |
| Limite   | la page 25 ne choisit pas la référence commerciale ni le modèle applicable ; le guide ne remplace pas le contrat                                                              |
| Décision | ajouter une question lecteur dans la section TCO, demander de cartographier personnes et appareils qui accèdent réellement au service, puis faire confirmer le scénario exact |
| Prudence | ne pas écrire que toute automatisation impose toujours la même licence par utilisateur et ne pas budgéter uniquement le compte de service                                     |

### 38.3 Matrice de couverture de la correction

| Prisme         | Couverture ajoutée                                                                                                                              | Preuve attendue                            |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| Lecteur humain | H3 formulé comme la question « Une connexion mutualisée réduit-elle le nombre de licences ? » et réponse immédiate « Non, pas automatiquement » | rendu serveur et assertion textuelle       |
| Finance        | interdiction de budgéter seulement le compte de service ou la connexion partagée                                                                | paragraphe placé avant l'atelier TCO       |
| Architecture   | distinction entre accès direct, accès indirect, couche intermédiaire et processus automatisé                                                    | source primaire p. 25 et texte visible     |
| Contrat        | absence de choix automatique de référence commerciale ; contrat, équipe Microsoft ou partenaire certifié requis                                 | limite visible et source p. 3              |
| Traçabilité    | lien officiel stable, mois du guide et page probante visibles                                                                                   | entrée `legalSources` et tableau de portée |
| Régression     | présence des garde-fous et absence des raccourcis « toujours », « toute automatisation » et « compte de service suffit »                        | test sémantique ciblé                      |
| FAQ            | aucune duplication ajoutée : la question est matérielle dans la section coût, et la FAQ reste gelée pour la reprise P3                          | diff borné et inventaire FAQ inchangé      |

### 38.4 Journal de la reprise P2

1. les manifestes P2, P3 et P4 antérieurs ont été supprimés avant la première
   modification de fond ;
2. le manifeste P1 et son contenu n'ont pas été modifiés par cette reprise ;
3. la source primaire a été rouverte et la formulation a été bornée à ce qu'elle
   prouve ;
4. la page ajoute la question dans la section coût, met à jour la source visible
   et conserve la frontière contractuelle ;
5. le test de contenu ajoute une régression sémantique dédiée ;
6. P3 et P4 restent invalides et interdites tant que le nouveau snapshot P2 n'a
   pas reçu la validation G2 de l'orchestrateur.

## 39. Validation de la reprise P2 après NO_GO transversal

### Régression sémantique et tests ciblés

La première exécution a produit **54 réussites et 1 échec** : l'assertion
interdisait littéralement les mots « toute automatisation impose la même licence
par utilisateur », alors que le nouveau paragraphe les employait précisément
dans une négation destinée à interdire cette généralisation. Le contenu n'a pas
été assoupli ; le test a été corrigé pour exiger la négation complète et refuser
une affirmation universelle positive.

Résultat final : **3 fichiers, 55 tests, 55 réussites**. Le test dédié exige :

- la question et la réponse immédiate ;
- les accès directs ou indirects correctement licenciés ;
- l'absence d'économie automatique liée aux couches intermédiaires ;
- l'interdiction de budgéter seulement le compte de service ;
- la limite contractuelle, l'équipe Microsoft ou le partenaire certifié ;
- le lien officiel stable et la page 25 ;
- l'absence de raccourcis universels positifs.

Le contrôle du temps de lecture, exécuté sur l'article rendu hors atelier local,
confirme **26 minutes** selon la règle du projet à 200 mots par minute.

### Batterie technique

- `tsc --noEmit` : succès, zéro diagnostic ;
- ESLint ciblé sur les sept fichiers TypeScript/TSX du slug : succès, zéro
  diagnostic ;
- Prettier 3.9.6 en lecture sur P0, dossier et sept fichiers TypeScript/TSX :
  tous les fichiers correspondent ;
- `xmllint --noout` sur les trois SVG : succès ;
- `git diff --check` : succès.

### Sources et résidus

Les **26 URL HTTPS** visibles dans la page répondent **200** à une requête HEAD
avec suivi des redirections. Le lien stable du guide de licences redirige vers
le PDF Microsoft officiel de juillet 2026 et répond lui aussi 200.

Le lien temporaire `node_modules` a été vérifié puis retiré. Aucun `.next` ni
`.vite` ne reste dans le worktree. Le rendu intégral du Prompt 2 a été déplacé
de façon récupérable vers
`/Users/quentinhagnere/.Trash/prompt2-render-powerapps-P2-reprise-20260803-0407`.
Aucun fichier central, registre, verrou, guide voisin, lockfile, commit, push,
déploiement, publication ou indexation n'a été touché.

Le nouveau manifeste P2 doit être créé en dernier sur les douze chemins de la
section 24, contrôlé **12/12**, puis sa somme externe doit être transmise à
l'orchestrateur. Les manifestes P3 et P4 ne doivent pas être recréés dans cette
passe.

## 40. Reprise P3 après NO_GO qualité transversal

Cette reprise remplace entièrement les anciennes preuves P3 et P4, devenues
obsolètes après la correction P2 sur le multiplexing puis le contre-audit du
rendu servi. Elle est conduite par `/root/powerapps_p3_reprise`, distinct de
l'agent P2. Aucun fait, tarif, calcul, invariant décisionnel, exemple,
multiplexing ou conclusion de fond validé en P2 n'a été modifié.

### 40.1 Lecture exhaustive du Prompt 3

Le document
`/Users/quentinhagnere/Downloads/Prompt #3 - Polish Rédactionnel.docx` a été lu
jusqu'à la fin avec le runtime documentaire installé en version 26.802, la
version 26.801 demandée historiquement n'étant pas présente sur cette machine.
La méthode a combiné :

1. rendu Word en PDF A4 de **33 pages** avec le renderer documentaire du
   workspace ;
2. création de planches de contact puis inspection visuelle en définition
   originale de chacune des pages 1 à 33 ;
3. extraction texte du PDF rendu : **1 311 lignes, 9 177 mots et 65 536
   octets**, lus séquentiellement jusqu'à EOF ;
4. application des règles utiles au polish : continuité logique, langage
   naturel, titres complets, densité maîtrisée, preuve avant affirmation et
   absence de cadence artificielle.

Le document Word n'a pas été modifié. Les instructions contraires à la
gouvernance locale, aux faits P2 ou au statut privé du guide n'ont pas été
appliquées.

### 40.2 Défauts du rendu reproduits puis corrigés

| Défaut du contre-audit                                        | Cause reproduite                                                                   | Correctif borné                                                                                                                 | Preuve de fermeture                                                                                                     |
| ------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| H1 orphelin à 320 px et divergence de libellé                 | titre visible « comment décider ? » distinct du titre SEO et groupe final cassable | titre, H1 et `Article.headline` alignés sur « comment choisir ? » ; espace insécable à l'intérieur du groupe final              | H1 exact, quatrième ligne entière « : comment choisir ? » à 320 px, groupe final sur un seul rectangle et zéro overflow |
| FAQ « Décider sans mythe Power Apps. voulez savoir. »         | `titleEnd` absent, donc valeur partagée par défaut réinjectée                      | titre complet explicite « Décider entre Power Apps et le sur-mesure. »                                                          | texte DOM et rendu exacts aux dix largeurs                                                                              |
| sources coupées à 640 px                                      | passage en ligne horizontale dès `sm`                                              | sources empilées jusqu'à `md`                                                                                                   | 26 entrées, overflow interne et viewport égaux à zéro de 320 à 1 600 px                                                 |
| CTA fixe sur le footer                                        | seules les zones `#faq` et `#contact` étaient concurrentes                         | tous les éléments `footer` sont aussi observés                                                                                  | CTA visible et focusable après le héros, puis `aria-hidden`, hors focus et hors vue au footer                           |
| région TCO mal nommée                                         | `aria-label` sans rôle compatible                                                  | ajout de `role="region"`                                                                                                        | DOM, test de rendu et axe                                                                                               |
| impression incomplète                                         | quatre éditeurs TCO et le dossier restaient fermés                                 | ouverture des seuls `details` marqués à `beforeprint`, restauration exacte à `afterprint`, avec CSS d'impression borné en repli | PDF v2, test événementiel et contrôle après PDF                                                                         |
| titre du contact concaténé pour les technologies d'assistance | espace absent avant le saut de ligne JSX                                           | espace sémantique explicite                                                                                                     | `textContent` exact « Parlons de votre projet. 30 minutes, c'est tout. »                                                |
| sous-titre OG mécanique                                       | « 4 TCO · remédiation »                                                            | « 4 coûts comparés · correction ciblée »                                                                                        | PNG dynamique HTTP 200, 1 200 × 630 inspecté                                                                            |
| date de modification obsolète                                 | snapshot antérieur aux corrections                                                 | `dateModified` réel `2026-08-03T04:59:00+02:00`                                                                                 | metadata Open Graph et JSON-LD `Article` synchronisés ; `datePublished` inchangée                                       |

### 40.3 Tests automatisés de la correction

Les régressions ajoutées couvrent notamment :

- égalité du titre metadata, du H1 rendu et de `Article.headline` ;
- titre FAQ complet et absence de l'ancienne concaténation ;
- breakpoint `md` des sources ;
- masquage réel du CTA et retrait de ses deux liens du focus lorsque le footer
  entre dans le viewport ;
- rôle et nom accessibles de la région TCO ;
- quatre éditeurs et un dossier ciblés pour l'impression, ouverture au
  `beforeprint` puis restauration au `afterprint` ;
- espace sémantique du titre de contact ;
- formulation OG exacte et absence de l'ancien raccourci.

Résultats successifs : **57/57** sur le premier lot ciblé, **82/82** sur la
batterie guide et composants partagés, puis **36/36** après le correctif
d'impression. Le replay final de la suite du dépôt donne **638/640**. Les deux
échecs restants sont les portes centrales attendues avant intégration :

1. le slug est encore un brouillon local explicite, non enregistré dans le
   catalogue public ;
2. la redirection historique est encore active et le scanner détecte les liens
   internes du propre guide.

Ils ne sont ni masqués ni corrigés en P3 : registre public et redirection
relèvent de l'intégration après P4 et contre-audit.

TypeScript avec `tsc --noEmit`, ESLint ciblé et Prettier 3.9.6 sur les onze
fichiers TypeScript/TSX du lot terminent sans diagnostic. La compilation
production webpack réussit en **13,2 s**, puis le build global s'arrête sur un
guide voisin inchangé : `remplacer-microsoft-access-application-web/page.tsx`
exporte `accessGuide`, champ refusé par le contrat Next.js Page. La compilation
verte et l'échec de validation globale sont consignés séparément ; aucun guide
voisin n'a été corrigé dans cette passe.

### 40.4 Contrôle du rendu hydraté

La route a été servie en Next.js 16.2.10 avec webpack sur
`http://localhost:3198`. Une première ouverture par l'origine `127.0.0.1` a
été refusée pour les ressources de développement par la protection
`allowedDevOrigins` de Next.js : le HTML était visible mais les composants
clients n'étaient pas hydratés. Aucun défaut produit n'a été déduit de ce faux
signal. La même route ouverte sur l'origine exacte `localhost` a ensuite fourni
les clés React et les interactions attendues, sans erreur console.

Les largeurs **320, 360, 390, 430, 640, 768, 1 024, 1 280, 1 440 et 1 600 px**
ont toutes été contrôlées avec une hauteur de 900 px :

- `documentElement.scrollWidth === innerWidth` à chaque largeur ;
- H1 et groupe final contenus dans le viewport, groupe final sur un seul
  rectangle ; le H1 occupe 4 lignes à 320 px, 2 à 640 px et 3 à 1 024 px où la
  colonne latérale réduit volontairement sa largeur ;
- héros, sommaire, quatre tableaux, atelier TCO, FAQ, contact et footer
  présents et contenus ;
- 26 sources sans débordement interne ni coupure ;
- CTA mobile visible et focusable après le héros de 320 à 768 px, puis masqué,
  non cliquable et `tabindex=-1` au footer ; à partir de 1 024 px, il est
  masqué par le breakpoint `lg` ;
- reflow 320 px, agrandissement de texte à **200 %** dans 640 px et paysage
  640 × 360 sans overflow.

Les captures inspectées sont conservées hors worktree dans
`/tmp/powerapps-p3-browser.aufMmC/`, notamment le héros 320 px, les sources
640 px, le footer 390 px et le héros clair 1 440 px.

### 40.5 Accessibilité, clavier, thèmes et impression

- axe-core : **0 violation** à 390 et 1 440 px ;
- lien d'évitement : premier focus clavier, contour solide 2 px, activation
  vers `#main-content` ;
- filtres FAQ : `End` active le troisième, `Home` revient au premier, avec
  `aria-selected=true` et roving `tabindex=0` ;
- accordéon FAQ : `Space` ouvre la deuxième question, synchronise
  `aria-expanded`, `aria-controls`, visibilité de la réponse et contour 2 px ;
- thèmes : après hydratation, mode clair (`color-scheme: light`, fond blanc,
  H1 sombre) et mode sombre (`color-scheme: dark`, fond `rgb(11, 11, 13)`, H1
  blanc) contrôlés après délai ;
- restauration après impression : les quatre éditeurs TCO et le dossier,
  fermés avant le PDF, sont de nouveau fermés après `afterprint`.

Le premier PDF, 45 pages, a correctement exposé les douze FAQ et masqué le CTA,
mais a prouvé que la seule règle `display` ne suffisait pas à ouvrir les
`details` natifs de Chromium. Après correction comportementale, le PDF v2
`/tmp/powerapps-p3-browser.aufMmC/powerapps-p3-v2.pdf` contient **52 pages** :

- « Licence ou plateforme » quatre fois, pages 19 à 22 ;
- les quatre options TCO et leurs champs ;
- le « DOSSIER DE DÉCISION » page 25 ;
- les douze questions et les douze réponses FAQ, pages 45 à 48 ;
- zéro occurrence du CTA « Cadrer mon cas ».

Les pages TCO 19, dossier 25 et FAQ 45 ont été rasterisées puis inspectées en
définition originale. Le CTA fixe n'apparaît pas dans le PDF.

### 40.6 Temps de lecture, image sociale et frontière de publication

La mesure a utilisé sans copie ni modification la version finale amont créée
pour le guide 28 :
`/Users/quentinhagnere/Developpement/Hagnere-Code-wt-mvp-saas-quoi-inclure/scripts/measure-guide-readtime.mjs`.
Cette méthode isole l'article sous `#main-content`, retire les éléments
`data-read-time-exclude="true"` et réellement invisibles comme `sr-only`,
décodant ensuite les entités avant un calcul à 200 mots par minute. Résultat
servi : **5 173 mots, 26 minutes** ; `readTimeMin: 26` est exact.

L'image Open Graph locale répond HTTP 200 en `image/png`, mesure exactement
**1 200 × 630 px** et affiche sans coupe le sous-titre naturel. Elle a été
inspectée dans `/tmp/powerapps-p3-browser.aufMmC/powerapps-og.png`.

Le guide reste `ready-for-human-review`, hors découverte et en
`noindex, nofollow`. Cette passe n'enregistre pas le guide, ne retire pas sa
redirection, ne déploie pas, ne publie pas et ne demande pas d'indexation.

Après toutes les preuves rendues, la session navigateur et le serveur ont été
fermés. Le cache `.next` a été déplacé de façon récupérable vers
`/Users/quentinhagnere/.Trash/Hagnere-Code-wt-power-apps-next-P3-G3-20260803-0532`
et le lien temporaire `node_modules`, après vérification exacte de sa cible, a
été retiré. Aucun `.next`, `node_modules` ou `.vite` ne reste dans le worktree ;
les PDF et captures demeurent dans `/tmp` pour le contrôle G3 de
l'orchestrateur.

### 40.7 Snapshot P3 de reprise

Le nouveau manifeste P3 doit être créé en dernier avec exactement **18
chemins** : les douze fichiers du snapshot P2, puis les six fichiers partagés
réellement nécessaires au correctif et à sa régression :

1. `src/components/guides/guide-premium-layout.tsx` ;
2. `src/components/guides/guide-premium-layout-accessibility.test.ts` ;
3. `src/components/guides/guide-premium-mobile-cta.tsx` ;
4. `src/components/guides/guide-premium-mobile-cta.test.tsx` ;
5. `src/components/design-shared/SiteFooter.tsx` ;
6. `src/components/design-shared/accessibility-contract.test.tsx`.

Le manifeste ne se contient pas lui-même et n'inclut ni manifeste antérieur,
ni cache, PDF, capture, dépendance ou fichier central. P4 reste absente et
interdite jusqu'au contrôle G3 explicite de l'orchestrateur.

Décision de l'agent P3 : **PASSE_3_CORRIGEE_PRETE_G3 — snapshot P3 à figer ;
aucune autorisation de P4, d'intégration, de déploiement, de publication ou
d'indexation.**

## 41. Reprise P4 anti-IA et contrôle du rendu final

Cette reprise a été conduite par `/root/powerapps_p4_reprise`, distinct de
l'agent P3. À l'entrée de la passe, le manifeste P3 a été contrôlé **18/18**
avant toute modification ; sa somme externe était
`94ee94b0a8a44eb0ec633bc56ee7d3930cd20946bd34ae1368a7a1d96bfef9bc`.
Le manifeste P4 était absent. Les fichiers de manifeste P1, P2 et P3 n'ont pas
été réécrits pendant cette passe.

### 41.1 Lecture exhaustive des instructions P4

Le document
`/Users/quentinhagnere/Downloads/Prompt 4 - Antipasse IA.docx` a été ouvert
avec le runtime documentaire installé en version 26.802.11031. La lecture a
combiné :

1. un rendu Word vers PDF A4 de **9 pages** dans
   `/private/tmp/powerapps-p4-docx.i7F0cn/` ;
2. la rasterisation puis l'inspection visuelle en définition originale des
   neuf pages ;
3. une extraction du PDF rendu de **396 lignes, 2 468 mots et 18 122 octets**,
   lue jusqu'à EOF ;
4. la lecture intégrale des **649 lignes** de
   `docs/instructions-guide-de-qualite.md` dans le worktree de référence
   `Hagnere-Code-wt-guide-reset` ;
5. l'application au contexte Hagnéré Code des quinze motifs anti-IA, sans
   reprendre les exemples fiscaux ni les consignes incompatibles avec le
   composant FAQ et les données structurées du projet.

Le document Word et les instructions centrales n'ont pas été modifiés.

### 41.2 Reformulations appliquées

Les faits, tarifs, calculs, sources, limites contractuelles, modèle de décision,
invariants de multiplexing, H1, titre de FAQ, date de publication et statut
éditorial ont été gelés. Huit corrections bornées ont été appliquées :

| Zone                       | Défaut détecté                                                                    | Correction finale                                                                                                                                                                      |
| -------------------------- | --------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Description SEO et carte   | promesse abstraite « sans biais, preuves en main » et tournure « sans condamner » | description centrée sur les limites vérifiées, les TCO et la sortie ; carte centrée sur la méthode, les quatre TCO et la migration réversible                                          |
| Fin du héros               | jugement « la seule réponse honnête »                                             | instruction directe : si une preuve critique manque, laisser la décision en attente                                                                                                    |
| Test 4                     | double mécanique de type « trois sujets »                                         | phrase directe sur les éléments à examiner dans le tenant, puis distinction naturelle des règles                                                                                       |
| Multiplexing               | cadence contractuelle trop empilée                                                | question puis réponse lisible, tout en conservant la page 25, les accès directs et indirects, la couche intermédiaire, le compte de service insuffisant et la validation contractuelle |
| Troisième scénario terrain | répétition de branches « Si… »                                                    | ordre des phrases varié sans changer les conditions ni la conclusion                                                                                                                   |
| Remédiation                | symétrie binaire et métadiscours                                                  | rythme cassé, critères et arrêt de décision inchangés                                                                                                                                  |
| Titre de l'atelier         | nominalisation « Produire un diagnostic de preuves »                              | « Réunir les preuves et comparer quatre coûts totaux de possession (TCO) »                                                                                                             |
| Dossier public             | jetons techniques `unknown`, `existing`, `internal`, etc. révélés dans le PDF     | table de libellés française exhaustive et typée pour projet, audience, surface, données et criticité ; modèle interne inchangé                                                         |

Le dernier correctif ne transforme que les cinq lignes publiques du dossier.
Les valeurs par défaut deviennent « à vérifier » ; un dossier renseigné expose
par exemple « Power App existante », « salariés internes », « application
canevas », « Dataverse » et « importante ». Les statuts, calculs, inconnues,
contradictions et décisions continuent d'être produits par le modèle P3 sans
modification. Des tests couvrent les valeurs par défaut et l'ensemble renseigné
afin d'interdire la réapparition des jetons internes.

`dateModified` a été avancée à `2026-08-03T06:19:02+02:00` après ce correctif
visible. `datePublished` reste exactement
`2026-07-23T21:31:02+02:00`.

### 41.3 Détection anti-IA finale

Les neuf H2 éditoriaux sont classés **HUMAIN** ; aucune section n'est classée
MIXTE ou IA. La note sévère finale est **19,4/20** et le guide passerait un
contrôle de détection crédible. Le texte rendu contient zéro occurrence des
marqueurs internes `STOP`, `À SOURCER`, `NO_GO`, `GO_RELEASE`, `PASS 1` à
`PASS 4` et `PASSE 1` à `PASSE 4`. Les sept formulations remplacées sont elles
aussi absentes du rendu.

Deux répétitions faibles mais légitimes restent documentées :

- « Scénario fictif composite » apparaît cinq fois pour ne pas faire passer les
  cas pédagogiques pour des témoignages réels ;
- les états du diagnostic et des champs TCO répètent volontairement le même
  vocabulaire, car ils constituent un contrat fonctionnel et non un procédé
  narratif.

Ces répétitions n'ont pas été maquillées au détriment de la provenance ou de la
compréhension du calcul.

### 41.4 Batterie automatisée du snapshot final

La batterie guide et composants partagés termine avec **6 fichiers de test et
81 tests réussis sur 81**. Elle couvre le contenu, le modèle, le dossier public,
le calcul TCO, l'impression, le layout, le CTA mobile et le footer.

- `tsc --noEmit` : succès, zéro diagnostic ;
- ESLint sur les treize fichiers TypeScript/TSX du snapshot : succès ;
- Prettier 3.9.6 sur tous les chemins non-SVG du manifeste P3 : succès ;
- `xmllint --noout` sur les trois SVG : succès ;
- `git diff --check` : succès ;
- 26 URL HTTPS visibles : **26/26 en HTTP 200 par requête GET** avec suivi des
  redirections et agent utilisateur navigateur. Deux pages de tarifs Microsoft
  refusaient auparavant la méthode HEAD avec un 403 ; ce refus de méthode n'a
  pas été confondu avec une URL cassée.

La suite globale reflète encore les deux portes d'intégration attendues : **88
fichiers de test réussis sur 90 et 640 tests réussis sur 642**. `check:seo`
donne **31 fichiers sur 33 et 175 tests sur 177**. Les deux échecs sont les
mêmes dans les deux commandes :

1. `guides.test.ts` voit le slug comme brouillon local explicite non enregistré ;
2. `legacy-guide-redirects.test.ts` voit les liens du guide alors que sa
   redirection historique est encore active.

Ils doivent être fermés pendant l'intégration partagée, pas dans P4. Le build
direct `NEXT_PUBLIC_ENV=production npx next build --webpack` compile le bundle
optimisé avec succès en **18,7 s**, puis le contrôle TypeScript global s'arrête
sur le guide voisin inchangé
`remplacer-microsoft-access-application-web/page.tsx` : l'export
`accessGuide` n'est pas admis par le contrat Next.js Page. Aucun guide voisin
n'a été retouché.

### 41.5 Métadonnées et données structurées servies

Le HTML hydraté final expose :

- title, H1 et `Article.headline` identiques : « Power Apps ou application sur
  mesure : comment choisir ? » ;
- description SEO finale, canonical
  `https://hagnere-code.ai/guides/power-apps-ou-application-sur-mesure` et
  `robots` à `noindex, nofollow` ;
- exactement deux graphes JSON-LD : `Article` et `BreadcrumbList` ;
- aucune donnée structurée `FAQPage` ou `HowTo` ajoutée ;
- `datePublished` inchangée et `dateModified` synchronisée avec la correction
  publique.

Le temps de lecture a été recalculé sur le rendu final avec le script amont
`measure-guide-readtime.mjs`, sans l'atelier exclu du comptage : **5 176 mots,
26 minutes**. `readTimeMin: 26` reste donc exact.

L'image Open Graph finale
`/private/tmp/powerapps-p4-browser.1Uufay/powerapps-og-v2.png` répond HTTP 200,
est un PNG de **1 200 × 630 px** et a été inspectée en définition originale :
titre, sous-titre et cinq issues sont visibles sans coupe.

### 41.6 Contrôle navigateur, accessibilité et reflow

La route finale a été servie en Next.js 16.2.10 avec webpack sur
`http://localhost:3199`. Les largeurs **320, 360, 390, 430, 640, 768, 1 024,
1 280, 1 440 et 1 600 px** ont toutes été contrôlées :

- largeur du document égale à celle du viewport, sans débordement horizontal ;
- H1 exact et entièrement contenu ; son groupe final reste sur un seul
  rectangle ;
- 26 sources contenues et titre FAQ exact « Décider entre Power Apps et le
  sur-mesure. » ;
- CTA mobile visible, focusable et avec cibles de 48 px après le héros de 320 à
  768 px, puis réellement masqué, `aria-hidden` et hors tabulation au footer ;
  il est masqué par le breakpoint à partir de 1 024 px ;
- agrandissement du texte à 200 % dans un viewport de 640 px, paysage 640 × 360
  et préférence `prefers-reduced-motion` contrôlés sans overflow.

Le thème clair et le thème sombre ont été inspectés. Axe-core retourne **zéro
violation** à 390 px et 1 440 px, avec respectivement 52 et 55 contrôles
réussis ; le contraste resté « incomplete » chez axe a donc été complété par
une inspection visuelle des deux thèmes plutôt que présenté comme un succès
automatique.

Au clavier, le lien d'évitement est le premier focus, porte un contour 2 px et
rejoint `#main-content`. Dans la FAQ, `End` sélectionne le troisième onglet,
`Home` revient au premier et `Space` ouvre la deuxième question avec
`aria-expanded`, `aria-controls`, panneau visible et contour de focus
synchronisés.

### 41.7 PDF final et dossier public

Le premier PDF P4 a rempli son rôle de contre-preuve : la page 25 affichait les
valeurs internes `unknown`. Après le mapping public typé, le PDF final
`/private/tmp/powerapps-p4-browser.1Uufay/powerapps-p4-v2.pdf` a été régénéré
sur le snapshot exact. Il contient **52 pages** au format Letter :

- « Licence ou plateforme » quatre fois, pages 19 à 22 ;
- le dossier de décision page 25, avec les cinq contextes publics à « à
  vérifier » et zéro jeton interne brut ;
- les douze questions et les douze réponses FAQ, toutes comparées au DOM rendu,
  à partir de la page 45 ;
- zéro occurrence du CTA fixe « Cadrer mon cas ».

Les pages 19, 25 et 45 ont été rasterisées puis inspectées en définition
originale dans `/private/tmp/powerapps-p4-browser.1Uufay/`. Après impression,
les quatre éditeurs TCO et le dossier sont revenus à leur état fermé initial.

### 41.8 Frontières et snapshot P4

P4 n'a modifié aucun fichier partagé, modèle de décision, registre, verrou,
redirection, catalogue, guide voisin, lockfile ou configuration de publication.
Elle n'a exécuté aucune opération Git, intégration, déploiement, publication ou
demande d'indexation. Le guide reste `ready-for-human-review`, local,
indécouvrable et en `noindex, nofollow` jusqu'aux portes suivantes.

Les deux sessions navigateur et le serveur local ont été fermés. Le cache de
build `.next`, créé par la vérification de production, a été déplacé de façon
récupérable vers
`/Users/quentinhagnere/.Trash/Hagnere-Code-wt-power-apps-next-P4-reprise-20260803-0628`.
Le lien temporaire `node_modules` a été retiré après contrôle exact de sa cible.
Aucun `.next`, `node_modules` ou `.vite` ne reste dans le worktree ; le PDF et
les captures restent dans `/private/tmp` pour le contrôle G4.

Le manifeste P4 doit être créé en dernier avec exactement les **18 chemins** du
manifeste P3. Il ne se contient pas lui-même et n'inclut ni PDF, capture,
dépendance, cache ou manifeste antérieur. Après sa création, il doit être
contrôlé 18/18 et sa somme externe doit être transmise à l'orchestrateur.

Décision de l'agent P4 : **PASSE_4_CORRIGEE_PRETE_G4 — snapshot P4 à figer ;
aucune autorisation de contre-audit Q, d'intégration, de déploiement, de
publication ou d'indexation.**

## 42. Reprise P4-v2 après le NO_GO Q2 sur le H1

Le contre-audit Q2 du snapshot P4, dont le manifeste portait la somme externe
`03a850b0afad64fae2d2c79fa09208b9a832783b2c080646dae6afa29cc51c51`,
a isolé un seul défaut P1 : le composant partagé insérait une espace normale
entre le titre principal terminé par « mesure » et l'emphase qui commençait par
le deux-points. À plusieurs largeurs, le navigateur pouvait donc laisser `:`
seul au début de la ligne suivante.

### 42.1 Correctif strictement local

La correction reste dans la page du guide :

- `heroTitle` devient `Power Apps ou application sur mesure\u00a0:` ;
- `heroTitleEm` devient `comment\u00a0choisir\u00a0?` ;
- l'espace insécable française rattache le deux-points à « mesure » ;
- l'espace normale déjà produite par `GuidePremiumLayout` reste le point de
  césure possible avant l'emphase ;
- le test de contenu exige cette répartition et interdit l'ancienne emphase
  commençant par `:`.

Le texte visible, après normalisation des espaces typographiques, le title SEO
et `Article.headline` restent exactement « Power Apps ou application sur
mesure : comment choisir ? ». `datePublished`, la FAQ, les données structurées,
les faits, sources, calculs, modèles, CTA, images et composants partagés sont
inchangés. La nouvelle correction publique est tracée par
`dateModified: 2026-08-03T07:10:53+02:00`.

### 42.2 Preuve géométrique aux dix largeurs

Le rendu hydraté a été contrôlé sur `http://localhost:3199` à **320, 360, 390,
430, 640, 768, 1 024, 1 280, 1 440 et 1 600 px**, avec une hauteur de 900 px.
Pour chaque largeur, un `Range` caractère par caractère a comparé la position du
deux-points à celle du dernier caractère non blanc qui le précède.

Résultat aux dix largeurs :

- deux-points et « mesure » sur la même ligne : **10/10** ;
- groupe « comment choisir ? » sur un seul rectangle : **10/10** ;
- H1 entièrement contenu : **10/10** ;
- `documentElement.scrollWidth === innerWidth` : **10/10**.

À 320, 360 et 390 px, les deux dernières lignes sont « sur mesure : » puis
« comment choisir ? ». À 430 px, la dernière ligne complète devient « mesure :
comment choisir ? ». À 640 et 768 px, « sur mesure : comment choisir ? » tient
sur la deuxième ligne. De 1 024 à 1 600 px, « application sur mesure : » puis
« comment choisir ? » forment deux lignes équilibrées. Le deux-points n'est
orphelin dans aucun de ces cas.

Les captures claires 320 et 1 440 px et la capture sombre 1 440 px sont
conservées dans `/private/tmp/powerapps-p4-v2-browser.qvhvKe/`. Elles ont été
inspectées en définition originale. Le thème sombre conserve un fond
`rgb(11, 11, 13)`, un H1 blanc, zéro overflow et la même ligne du deux-points.
Avec la racine portée à **200 %** dans un viewport de 640 px, le H1 reste
contenu, le groupe final reste unique et le deux-points reste attaché à
« mesure », sans overflow.

### 42.3 Non-régression CTA, FAQ et PDF

À 390 px, après le héros, le CTA mobile est visible avec `aria-hidden=false`,
ses deux liens sont dans la tabulation et leurs cibles mesurent 48 px. Sur le
footer, il revient à `aria-hidden=true`, ses liens passent à `tabindex=-1` et le
bloc sort du viewport.

La FAQ conserve son titre exact, ses **12 questions** et son interaction : la
deuxième question s'ouvre avec `aria-expanded=true`, un panneau relié et une
réponse visible.

Le PDF final de reprise
`/private/tmp/powerapps-p4-v2-browser.qvhvKe/powerapps-p4-v2-h1.pdf` compte
toujours **52 pages** : quatre ateliers « Licence ou plateforme », un dossier
de décision, les douze questions et douze réponses FAQ, et zéro CTA « Cadrer
mon cas ». La première page a été rasterisée puis inspectée ; le H1 y garde le
deux-points avec « mesure ». Le title HTML et `Article.headline` servis restent
byte pour byte identiques au titre attendu, et `dateModified` est synchronisée.

### 42.4 Contrôles techniques et frontières

- batterie ciblée : **6 fichiers, 81 tests, 81 réussites** ;
- `tsc --noEmit` : succès après retrait du cache `.next` qui conservait le type
  généré du guide voisin déjà documenté ;
- ESLint sur les treize fichiers TypeScript/TSX du snapshot : succès ;
- Prettier 3.9.6 sur les chemins non-SVG du snapshot : succès ;
- `git diff --check` : succès.

Le serveur et la session navigateur ont été fermés. `.next` a été déplacé de
façon récupérable vers
`/Users/quentinhagnere/.Trash/Hagnere-Code-wt-power-apps-next-P4-v2-20260803-0719`.
Le lien temporaire `node_modules` a été retiré après validation exacte de sa
cible. Aucun `.next`, `node_modules` ou `.vite` ne reste dans le worktree.

La reprise ne modifie que `page.tsx`, son test de contenu et ce dossier de
preuve. Elle n'a touché aucun fichier partagé, modèle, workbench, registre,
verrou, catalogue, redirection ou guide voisin, et n'a exécuté aucune opération
Git, intégration, déploiement, publication ou indexation.

Le nouveau manifeste `power-apps-ou-application-sur-mesure-p4-v2.sha256` doit
être créé en dernier avec exactement les **18 chemins** de P4, puis contrôlé
18/18. Le manifeste P4 original reste la preuve immuable du snapshot rejeté par
Q2.

Décision de l'agent P4-v2 : **PASSE_4_V2_PRETE_G4 — snapshot corrigé à figer ;
aucune autorisation de contre-audit Q, d'intégration, de déploiement, de
publication ou d'indexation.**

## 43. Reprise P3-v2 après le NO_GO Q3 sur le CTA secondaire

Le contre-audit Q3 du snapshot P4-v2 de SHA externe commençant par
`2c055796` et finissant par `62bca4` a prononcé un **NO_GO unique P1** sur la
cohérence UX, accessibilité et conversion du CTA mobile secondaire. La page
fournissait `secondaryLabel: "Voir le service"` avec une URL de service, tandis
que le composant partagé présentait systématiquement cette valeur comme un
appel avec icône Phone et nom accessible « Appeler Voir le service ».

### 43.1 Correctif strictement local

La reprise P3-v2 modifie uniquement la configuration propre à cette page :

- `secondaryLabel: "03 74 47 20 18"` ;
- `secondaryHref: "tel:+33374472018"` ;
- `dateModified: "2026-08-03T07:45:24+02:00"`.

Le CTA héros conserve « Voir le service outils internes » vers
`/services/outils-internes-sur-mesure`. Le CTA primaire de contexte conserve
« Étudier mon outil interne » vers `/demarrer-un-projet`, et la barre mobile
conserve « Cadrer mon cas » vers cette même page projet. Aucun composant
partagé, H1, fait, calcul, source, modèle, workbench, FAQ, image, schéma ou asset
n'a été modifié.

Le test de contenu exige désormais la paire téléphone exacte dans la
configuration et le HTML rendu. Il interdit à la fois
`secondaryLabel: "Voir le service"` et `aria-label="Appeler Voir le service"`,
tout en exigeant `aria-label="Appeler 03 74 47 20 18"`.

### 43.2 Contrôle navigateur hydraté

La route HTTP 200 déjà servie sur
`http://localhost:3199/guides/power-apps-ou-application-sur-mesure` a été
contrôlée avec une session agent-browser dédiée, sans arrêter le serveur de
l'orchestrateur.

À **320 et 390 px** :

- `documentElement.scrollWidth === innerWidth` ;
- la barre mobile contient `href="tel:+33374472018"`, le nom accessible
  « Appeler 03 74 47 20 18 », une icône `lucide-phone` et une cible 48 × 48 px ;
- le CTA principal reste « Cadrer mon cas » vers `/demarrer-un-projet` ;
- après le héros, les deux actions sont visibles et dans l'ordre de tabulation ;
- sur le footer, la barre repasse à `aria-hidden=true`, ses deux liens à
  `tabindex=-1` et son bord supérieur sort du viewport ;
- aucune occurrence DOM de « Appeler Voir le service » ;
- le H1 reste contenu, le groupe « comment choisir ? » reste sur un seul
  rectangle et le deux-points partage la ligne de « mesure ».

À **1 440 px**, le CTA de contexte visible affiche « 03 74 47 20 18 », pointe
vers le même `tel:`, contient l'icône Phone et accompagne le CTA primaire
« Étudier mon outil interne » inchangé. Le CTA héros « Voir le service outils
internes » reste visible vers la page service. La barre mobile est masquée par
le breakpoint desktop. Le document ne contient toujours aucune occurrence de
« Appeler Voir le service » et ne déborde pas horizontalement.

### 43.3 Contrôles et frontières P3-v2

- batterie ciblée : **7 fichiers, 84 tests, 84 réussites** ;
- `tsc --noEmit` : succès ;
- ESLint sur `page.tsx` et son test : succès ;
- Prettier 3.9.6 et `git diff --check` : succès après alignement mécanique du
  nouveau test ;
- metadata Open Graph et JSON-LD `Article` reprennent la nouvelle
  `dateModified`, sans changement de `datePublished`.

Le serveur de l'orchestrateur et son lien `node_modules` restent volontairement
actifs et intacts. Cette reprise n'exécute aucune opération Git, registre,
verrou, intégration, commit, push, déploiement, publication ou indexation.

Le nouveau manifeste
`power-apps-ou-application-sur-mesure-p3-v2.sha256` doit être créé en dernier
avec exactement les **18 chemins** du snapshot P3 précédent, puis contrôlé
18/18. Les manifestes P1, P2, P3, P4 et P4-v2 ne sont pas réécrits par cette
reprise ; P4-v2 demeure le snapshot rejeté par Q3.

Décision de l'agent P3-v2 : **PASSE_3_V2_PRETE_G3 — snapshot corrigé à figer ;
aucune autorisation de P4-v3, de contre-audit Q, d'intégration, de déploiement,
de publication ou d'indexation.**

## 44. Passe P4-v3 après le GO G3-v2

L'entrée de cette passe est le manifeste
`power-apps-ou-application-sur-mesure-p3-v2.sha256`, vérifié **18/18** avant
toute modification. Sa somme externe est
`6efe2a6fc038d197127012984a8f76b019eb5d73fa67e289a59e1a7dbe58643b`.
Le téléphone corrigé par P3-v2, le H1 avec son deux-points insécable et les
parcours service et projet ont d'abord été gelés.

### 44.1 Audit humain et correctif typographique borné

La relecture anti-IA du texte confirme les neuf H2 éditoriaux en état HUMAIN,
avec une note maintenue à **19,4/20**. Le rendu ne contient aucun marqueur
interne `STOP`, `À SOURCER`, `NO_GO`, `GO_RELEASE`, `PASS 1` à `PASS 4` ou
`PASSE 1` à `PASSE 4`. Les anciennes formulations mécaniques déjà retirées ne
réapparaissent pas.

Un défaut P4 visible a toutefois été reproduit à 1 440 px : dans le CTA de
contexte, le point d'interrogation du titre « Vous hésitez entre renforcer Power
Apps et reconstruire ? » occupait seul une troisième ligne. La capture probante
est conservée dans
`/private/tmp/powerapps-p4-v3-browser.RSmBv5/context-light-1440.png`.

Le correctif reste strictement local à la page :

- le titre utilise désormais `reconstruire\u00a0?` ;
- le test de contenu exige ce groupe insécable et refuse l'ancienne version ;
- `dateModified` est avancée honnêtement à
  `2026-08-03T07:58:56+02:00`.

Après correction, le titre se répartit à 1 440 px sur « Vous hésitez entre
renforcer », « Power Apps et », puis « reconstruire ? ». Le mot et sa
ponctuation partagent le même rectangle. La capture finale
`context-light-1440-v2.png` montre cette fermeture. Aucun fait, calcul, tarif,
source, modèle, workbench, FAQ, image, schéma, H1, téléphone ou composant partagé
n'a été modifié.

### 44.2 Cohérence du téléphone et des parcours

Le CTA de contexte final expose :

- texte et nom accessible « 03 74 47 20 18 » ;
- `href="tel:+33374472018"` ;
- icône `lucide-phone` décorative avec `aria-hidden="true"` ;
- cible pleine largeur de 42 px de haut, donc supérieure au minimum WCAG 2.5.8
  de 24 px ;
- focus clavier visible avec un contour solide de 2 px ;
- action primaire « Étudier mon outil interne » toujours dirigée vers
  `/demarrer-un-projet`.

Le CTA héros « Voir le service outils internes » conserve
`/services/outils-internes-sur-mesure`. La barre mobile conserve « Cadrer mon
cas » vers `/demarrer-un-projet` et son téléphone nommé « Appeler 03 74 47 20
18 ». Le DOM et le rendu contiennent zéro occurrence de « Appeler Voir le
service ».

### 44.3 Contrôle navigateur clair et sombre

La route hydratée HTTP 200 a été contrôlée sur le serveur existant 3199, sans le
redémarrer, à **320, 390 et 1 440 px**, en thème clair puis sombre.

Aux six combinaisons largeur/thème :

- `documentElement.scrollWidth === innerWidth` ;
- H1 contenu, deux-points sur la ligne de « mesure » et groupe « comment choisir
  ? » sur un seul rectangle ;
- carte CTA contenue dans le viewport ;
- point d'interrogation du titre de contexte attaché à « reconstruire » ;
- téléphone, icône et destination `tel:` exacts ;
- aucune occurrence ou étiquette accessible « Appeler Voir le service ».

En sombre, le fond reste `rgb(11, 11, 13)` et le H1 blanc. Les captures finales
claires et sombres 320, 390 et 1 440 px sont conservées dans
`/private/tmp/powerapps-p4-v3-browser.RSmBv5/`. Elles ont été inspectées en
définition originale.

Au footer, à 320 et 390 px, la barre mobile passe à `aria-hidden=true`, ses deux
liens à `tabindex=-1` et le bloc sort du viewport. À 1 440 px, elle est en
`display:none` et reste hors tabulation.

### 44.4 PDF, FAQ, image sociale et schémas

Le PDF de non-régression
`/private/tmp/powerapps-p4-v3-browser.RSmBv5/powerapps-p4-v3.pdf` compte toujours
**52 pages** : quatre ateliers « Licence ou plateforme », un dossier de
décision, les douze questions et les douze réponses FAQ, et zéro CTA mobile
« Cadrer mon cas ». La retouche du CTA de contexte, exclu de l'impression, ne
déplace donc pas le document.

Dans le navigateur, la FAQ conserve son titre exact et ses douze questions ; la
deuxième réponse s'ouvre au clavier avec `Space`, `aria-expanded=true`, panneau
visible et contour de focus 2 px. L'image Open Graph, dont le fichier source est
inchangé, répond HTTP 200 en `image/png` et mesure toujours **1 200 × 630 px**.

Le HTML servi émet uniquement `Article` et `BreadcrumbList`. Le title, le H1
normalisé et `Article.headline` restent « Power Apps ou application sur mesure :
comment choisir ? ». `datePublished` reste
`2026-07-23T21:31:02+02:00` et `dateModified` est synchronisée avec la correction
P4-v3. Aucun `FAQPage` ou `HowTo` n'est ajouté.

### 44.5 Contrôles techniques et frontières

- batterie ciblée conventionnelle : **7 fichiers, 84 tests, 84 réussites** ;
- `tsc --noEmit` : succès ;
- ESLint ciblé : succès ;
- Prettier 3.9.6 : succès ;
- `xmllint --noout` sur les trois SVG : succès ;
- `git diff --check` : succès.

Le serveur 3199 et le lien temporaire `node_modules` ont été laissés actifs et
intacts conformément à la coordination racine. Seule la session navigateur P4
a été fermée. Cette passe ne touche aucun registre, verrou, catalogue,
redirection ou guide voisin, et n'exécute aucune opération Git, intégration,
commit, push, déploiement, publication ou indexation.

Le manifeste
`power-apps-ou-application-sur-mesure-p4-v3.sha256` doit être créé en dernier
avec exactement les **18 chemins** du manifeste P3-v2, puis contrôlé 18/18. Il
ne contient ni manifeste antérieur, PDF, capture, cache ou dépendance.

Décision de l'agent P4-v3 : **PASSE_4_V3_PRETE_G4 — snapshot final P4 à figer ;
aucune autorisation de contre-audit Q, d'intégration, de déploiement, de
publication ou d'indexation.**
