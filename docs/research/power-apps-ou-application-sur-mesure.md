# Dossier de recherche — Power Apps ou application sur mesure

> Les quatre passes sont terminées. Les faits ont été contre-audités, la plume
> a été relue à froid et le rendu de production a été contrôlé. La publication
> repose sur la délégation explicite du commanditaire, sans test par un lecteur
> humain réel.

## Journal des quatre passes

Propriétaire éditorial unique : `/root/p2_batch3_apps`

| Passe                        | État                               | Date            | Responsable                 | Snapshot                                                                 | Blocages |
| ---------------------------- | ---------------------------------- | --------------- | --------------------------- | ------------------------------------------------------------------------ | -------- |
| 1. Recherche                 | Terminée — porte validée           | 23 juillet 2026 | `/root/p2_batch3_apps`      | `docs/research/manifests/power-apps-ou-application-sur-mesure-p1.sha256` | Aucun    |
| 2. Rédaction et intégration  | Terminée — prête pour contre-audit | 23 juillet 2026 | `/root/p2_batch3_apps`      | `docs/research/manifests/power-apps-ou-application-sur-mesure-p2.sha256` | Aucun    |
| 3. Contre-audit indépendant  | Terminée — porte validée           | 23 juillet 2026 | `/root/p2_batch3_marketing` | `docs/research/manifests/power-apps-ou-application-sur-mesure-p3.sha256` | Aucun    |
| 4. Plume humaine et contrôle | Terminée — porte validée           | 23 juillet 2026 | `/root`                     | `docs/research/manifests/power-apps-ou-application-sur-mesure-p4.sha256` | Aucun    |

## 1. Fiche d’identité

```text
Slug : power-apps-ou-application-sur-mesure
Statut actuel : publiable — validation éditoriale déléguée
Requête principale : Power Apps ou application sur mesure
Moment du parcours : décider si une application Power Apps existante peut devenir un outil durable
Lecteur précis : dirigeant de PME déjà équipé de Microsoft 365, avec une première application interne créée par un salarié ou un prestataire
Situation déclenchante : l’application fonctionne pour quelques personnes, mais l’arrivée d’un connecteur, de données plus nombreuses, d’utilisateurs externes ou d’une seconde équipe fait apparaître des licences et des limites inattendues
Décision principale après lecture : conserver et organiser Power Apps, le compléter par du code, ou préparer une application dédiée selon les utilisateurs, les données, les connexions, les règles et la capacité de sortie
Niveau de connaissance au départ : sait que Power Apps permet de construire avec peu de code, mais ne maîtrise ni la désignation Premium, ni la délégation des requêtes, ni les environnements et solutions
5 questions indispensables : qui utilisera l’outil ? quelles licences faut-il réellement ? la recherche couvre-t-elle toutes les données ? quels connecteurs et politiques s’appliquent ? comment récupérer et faire évoluer la solution ?
3 objections ou craintes : « Power Apps est inclus dans Microsoft 365 » ; « cela fonctionne sur 200 lignes, donc cela tiendra en production » ; « exporter la solution signifie que nous pourrons la transformer directement en application web »
Action utile sans contact commercial : faire passer l’application dans cinq tests — utilisateur, données, connecteurs, exploitation et sortie — avec une preuve observable pour chacun
CTA possible : demander une lecture des cinq tests et des options de continuité
Hors périmètre : audit de licences contractuel, comparatif exhaustif des plans Microsoft, tutoriel Power Fx, conseil de sécurité ou RGPD personnalisé, promesse de délai ou de prix de développement
Date de la recherche : 23 juillet 2026
Responsable de la synthèse : /root/p2_batch3_apps
```

## 1 bis. Contrat de langage humain

- Phrase exacte que le lecteur pourrait dire : « Notre application Power Apps
  marche pour douze personnes. Est-ce qu’on peut continuer avec, ou est-ce
  qu’on repousse seulement le moment de refaire un vrai logiciel ? »
- Réponse attendue : Power Apps peut rester le bon choix si les personnes qui
  l’utilisent, les données, les connexions et l’administration restent dans un
  cadre maîtrisé. Le sur-mesure devient crédible lorsqu’une contrainte métier
  importante ne tient plus dans ce cadre, pas simplement parce que
  l’application grossit.
- Terme central expliqué sans jargon : Power Apps est la plateforme Microsoft
  qui permet d’assembler des écrans, des règles et des connexions à des données
  avec moins de code qu’une application développée de zéro.
- Mots ordinaires : utilisateurs, écrans, données, droits, connexion, licence,
  environnement de test, panne, modification, export, départ du prestataire.
- Mots à traduire : connecteur Premium, Dataverse, délégation, Power Fx, DLP,
  ALM, solution gérée ou non gérée, throttling, tenant.
- Projet des 150 premiers mots : partir d’une application qui fonctionne
  aujourd’hui, donner la réponse conditionnelle et annoncer les cinq tests
  concrets avant toute discussion de technologie.
- Ce que le lecteur saura décider : continuer, corriger, construire une partie
  spécifique, migrer ou attendre.
- Comparaison mobile prévue : cartes autonomes, jamais une ligne dont la
  conclusion se trouve dans une colonne hors écran.
- FAQ prévue : réponses courtes sur Microsoft 365, Premium, volume, export et
  approche hybride.
- CTA : un seul, vers `/demarrer-un-projet`, après l’audit autonome.

## 2. Cannibalisation

| Page existante                                       | Intention                                           | Différence du nouveau guide                                                                                   | Maillage ou arbitrage                                              |
| ---------------------------------------------------- | --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| `/guides/no-code-ou-sur-mesure`                      | Choisir une famille de solution avant de construire | Décider du devenir d’une solution Microsoft déjà utilisée, avec ses licences, données et conditions de sortie | Le guide général peut renvoyer ici pour le cas Power Apps          |
| `/guides/remplacer-microsoft-access-application-web` | Sortir d’une base Access devenue critique           | Évaluer une application Power Apps existante ou pressentie                                                    | Lier si Power Apps fait partie des quatre trajectoires envisagées  |
| `/guides/transformer-excel-en-application`           | Remplacer un fichier partagé devenu fragile         | Tester la plateforme choisie une fois les données sorties d’Excel                                             | Ne pas répéter le diagnostic du tableur                            |
| `/guides/prix-logiciel-sur-mesure`                   | Estimer un budget de développement                  | Comparer les postes de coût et les contraintes sans donner une fourchette de projet                           | Lier seulement pour approfondir le budget d’une application dédiée |

**Justification d’une URL distincte :** ce guide répond à « faut-il continuer
avec Power Apps dans notre contexte Microsoft ? », alors que le guide no-code
traite un choix de famille avant ou sans outil précis.

## 3. Demande et vocabulaire observés

La recherche du 23 juillet 2026 a porté sur les pages Microsoft de tarification,
de désignation des licences, de délégation des requêtes, de politiques de
données et d’export des solutions. Les questions récurrentes que ces pages
obligent à traiter sont :

- Power Apps est-il inclus avec Microsoft 365 dans le cas exact de
  l’application ?
- un connecteur ou un flux rend-il l’usage Premium, même si l’écran semble
  Standard ?
- la recherche renvoie-t-elle tous les enregistrements ou seulement les
  premières lignes traitées localement ?
- qui administre les environnements, les connexions et les règles de partage
  des données ?
- une solution peut-elle être exportée, versionnée, importée et testée ailleurs ?
- que récupère réellement l’entreprise si elle quitte Power Platform ?

Aucun volume de recherche ni difficulté SEO n’est revendiqué. Les résultats
observés sont majoritairement des pages Microsoft et des contenus de
prestataires Power Platform. Le guide doit donc traduire la documentation en
questions de direction, sans devenir un tutoriel ou un plaidoyer commercial
pour l’une des deux options.

## 4. Carte concurrentielle synthétique

| Type de page              | Réponse habituelle                                 | Bon point                            | Manque pour décider                                                   |
| ------------------------- | -------------------------------------------------- | ------------------------------------ | --------------------------------------------------------------------- |
| Tarification Microsoft    | Présente les plans et droits actuels               | Source primaire pour le prix affiché | N’additionne pas migration, administration, stockage, tests et sortie |
| Documentation Power Apps  | Décrit une fonction ou une limite précise          | Périmètre technique vérifiable       | Ne tranche pas le choix économique de la PME                          |
| Partenaire Power Platform | Met en avant la rapidité et l’écosystème Microsoft | Exemples de scénarios d’usage        | Conflit d’intérêt et comparaison souvent inégale avec le sur-mesure   |
| Agence de développement   | Met en avant la liberté du code dédié              | Explique la maîtrise du produit      | Minimise parfois la vitesse et l’intégration Microsoft de Power Apps  |

**Angle mort commun :** opposer « rapide et peu cher » à « puissant et cher »
sans faire rejouer la même application, les mêmes utilisateurs, les mêmes
données et le même plan de sortie.

**Valeur originale prévue :** cinq tests avec un verdict observable, puis un
calcul de licences limité aux montants Microsoft effectivement publiés.

## 5. Fiche de preuves

| Affirmation utilisable                                                                                                                                                                                                                                    | Source primaire, passage utile                                                                                                                                                                                  | Nature et périmètre                                                                                     | Consultation | Confiance                                    | Emplacement visible                             | Conséquence lecteur                                                                                                    | Fraîcheur                                        |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------ | -------------------------------------------- | ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| La page française affiche Power Apps Premium à 17,30 € HT par utilisateur et par mois, avec paiement annuel ; elle affiche aussi 250 Mo de base Dataverse et 2 Go de fichiers par utilisateur attribué                                                    | [Microsoft — Tarification Power Apps](https://www.microsoft.com/fr-fr/power-platform/products/power-apps/pricing), blocs « Power Apps Premium »                                                                 | Tarif public France ; conditions, taxes et disponibilité à vérifier au devis                            | 23/07/2026   | Élevée pour le prix affiché ce jour          | Section « Commencez par compter les personnes » | Le coût récurrent dépend d’abord des utilisateurs licenciés et des droits réellement nécessaires                       | Revalider avant publication et tout calcul futur |
| Une application utilisant au moins un connecteur Premium, un connecteur personnalisé ou une passerelle locale reçoit une désignation Premium ; un flux lié peut toutefois créer un besoin Premium qui n’apparaît pas dans la désignation de l’application | [Microsoft Learn — How to check license designation for an app](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/license-designation), tableau et « Known issues »                                | Documentation de licence Power Apps ; la page renvoie au guide de licences pour le contrat complet      | 23/07/2026   | Élevée, avec limite explicitement documentée | Test n° 3, près de l’affirmation                | Inventorier l’application et les flux ; ne pas conclure depuis le seul badge de l’écran                                |
| Une formule non délégable traite par défaut les 500 premiers enregistrements, limite réglable jusqu’à 2 000, avec risque de résultat incomplet au-delà                                                                                                    | [Microsoft Learn — Query limitations: Delegation and query limits](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/delegation-overview), sections « In this article » et « Nondelegable limits » | Applications canvas et sources de données concernées                                                    | 23/07/2026   | Élevée                                       | Test n° 2                                       | Une recherche qui marche sur une petite base doit être testée avec le volume et les requêtes de production             |
| Une application canvas ne fonctionne hors connexion que dans Power Apps Mobile, pas dans un navigateur ; Dataverse propose un mode offline-first, tandis que les autres sources reposent notamment sur LoadData et SaveData avec des limites propres      | [Microsoft Learn — Develop offline-capable canvas apps](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/offline-apps), introduction, notes et limites                                            | Applications canvas mobiles ; conflits et reconnexion à tester sur les appareils réels                  | 23/07/2026   | Élevée                                       | Après les cinq tests                            | Tester mode avion, modifications concurrentes, synchronisation et reprise avant de promettre un usage terrain          |
| Le Power Apps Developer Plan est gratuit pour construire et tester dans un environnement de développement, mais un plan payant adapté reste nécessaire pour la production                                                                                 | [Microsoft Learn — Power Apps Developer Plan](https://learn.microsoft.com/en-us/power-platform/developer/plan), FAQ sur les usages de production                                                                | Environnement de développement et de test ; droits de production à vérifier séparément                  | 23/07/2026   | Élevée                                       | Avant le calcul de coût                         | Ne pas présenter un environnement gratuit de développement comme une licence d’exploitation                            |
| Le partage à un utilisateur externe repose sur Microsoft Entra B2B ; l’invité doit disposer des droits Power Apps adaptés et accéder aussi aux sources de données sous-jacentes                                                                           | [Microsoft Learn — Share a canvas app with guest users](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/share-app-guests), prérequis et FAQ                                                      | Utilisateurs invités ; droits exacts selon application, connecteurs, tenant et source                   | 23/07/2026   | Élevée                                       | Test n° 1                                       | Inventorier identité, licence et droits sur chaque source ; comparer Power Pages pour un public externe large          |
| Les politiques de données classent ou bloquent les connecteurs et peuvent empêcher certaines combinaisons de données dans une application ou un flux                                                                                                      | [Microsoft Learn — Manage data policies](https://learn.microsoft.com/en-us/power-platform/admin/prevent-data-loss), processus et groupes de connecteurs                                                         | Administration Power Platform ; la politique exacte dépend du tenant                                    | 23/07/2026   | Élevée                                       | Test n° 3                                       | Le choix ne dépend pas seulement du créateur de l’application : l’administrateur Microsoft doit valider les connexions |
| Microsoft permet d’exporter les solutions non gérées et recommande un contrôle de source et l’automatisation des exports pour une gestion saine du cycle de vie                                                                                           | [Microsoft Learn — Export solutions](https://learn.microsoft.com/en-in/power-apps/maker/data-platform/export-solutions), introduction et procédure                                                              | Solutions Power Platform ; une exportation n’est pas une conversion automatique vers un autre framework | 23/07/2026   | Élevée                                       | Test n° 5                                       | Exiger une solution exportable, une procédure d’import et une preuve de restauration avant de parler de sortie         |
| Les requêtes Power Platform sont soumises à des limites par licence et d’autres limites de protection propres aux services et connecteurs                                                                                                                 | [Microsoft Learn — Requests limits and allocations](https://learn.microsoft.com/en-us/power-platform/admin/api-request-limits-allocations), définition et tableaux                                              | Power Apps, Power Automate, Dataverse et autres services Power Platform                                 | 23/07/2026   | Élevée, valeurs volatiles                    | Sources et limites, sans figer un seuil inutile | Tester les usages réels et consulter le rapport de consommation avant une montée en charge                             |

### Contradictions et données à ne pas publier

- « inclus dans Microsoft 365 » ne signifie pas que chaque connecteur, flux,
  environnement ou usage en production est couvert ;
- le badge Standard de l’application ne détecte pas nécessairement un
  connecteur Premium utilisé dans un flux lié ;
- une application exportée de Power Platform n’est pas du code web directement
  réutilisable dans une application sur mesure ;
- le Developer Plan gratuit ne couvre pas un usage de production ;
- un navigateur mobile ne rend pas une application canvas utilisable hors
  connexion ;
- inviter un partenaire ne lui donne pas automatiquement la licence ni les
  droits sur les sources de données ;
- 500 ou 2 000 lignes n’est pas une limite générale de taille de Dataverse :
  c’est la limite locale documentée pour une requête non délégable ;
- aucune comparaison de délai de développement ne sera publiée sans projet et
  protocole communs ;
- aucun chiffre de productivité ou retour sur investissement tiré d’une étude
  commandée par Microsoft ne sera utilisé comme résultat probable ;
- aucun prix du développement dédié ne sera inventé dans ce comparatif.

### Calcul reproductible prévu

**Exemple illustratif fictif, prix Microsoft observé le 23 juillet 2026 :**

```text
40 utilisateurs × 17,30 € HT × 36 mois = 24 912 € HT
```

Ce montant est uniquement le coût de quarante licences Premium au tarif public
affiché et avec paiement annuel. Il n’est pas un coût total. Paramétrage,
reprise des données, administration, formation, connecteurs ou automatisations
supplémentaires, capacité additionnelle, support et sortie restent « à
confirmer ». Le coût d’une application dédiée est lui aussi « à confirmer ».

## 6. Empreinte éditoriale à ne pas reproduire

| Guide voisin                                 | Ouverture                      | Progression                         | Dispositif                      | Conclusion           |
| -------------------------------------------- | ------------------------------ | ----------------------------------- | ------------------------------- | -------------------- |
| `no-code-ou-sur-mesure`                      | Comparaison générale           | Familles de solutions               | Tableau d’arbitrage             | Choix par besoin     |
| `remplacer-microsoft-access-application-web` | Dépendance à une base critique | Inventaire puis quatre trajectoires | Exemple de migration            | Plan de sortie       |
| `transformer-excel-en-application`           | Fichier devenu fragile         | Signes puis options                 | Comparaison tableur/application | Préparer les données |
| `application-suivi-production-pme`           | Ordre de fabrication fictif    | Chronologie d’événements            | Journée suivie                  | Piloter un essai     |

Choix propre au guide :

```text
Tension : une application qui fonctionne aujourd’hui peut-elle devenir un outil durable ?
Ouverture : réponse conditionnelle directe, sans histoire de panne
Progression : cinq tests de décision, puis comparaison des chemins
Artefact signature : fiche « preuve à obtenir » pour chaque test
Rythme : questions courtes, preuves Microsoft, conséquences de direction
Place du CTA : après le test de sortie et le plan autonome
Conclusion : choisir l’option la moins complexe qui passe les cinq tests
Différences : pas de frise de migration, pas de journée suivie, pas de grand tableau de technologies ; le coût n’arrive qu’après l’inventaire des utilisateurs et connecteurs
```

## 7. Plan annoté

| Section provisoire                                         | Question résolue                                    | Preuve ou exemple                              | Conséquence                               | Format              |
| ---------------------------------------------------------- | --------------------------------------------------- | ---------------------------------------------- | ----------------------------------------- | ------------------- |
| Power Apps peut rester le bon choix                        | Faut-il déjà envisager une réécriture ?             | Réponse conditionnelle                         | Ne pas payer un développement par réflexe | Lead                |
| 1. Qui utilise réellement l’application ?                  | Quel est le premier facteur de licence et d’usage ? | Liste de rôles                                 | Compter les personnes et les contextes    | Carte-test          |
| 2. Les recherches portent-elles sur toutes les données ?   | Le prototype donne-t-il des réponses complètes ?    | Limite de délégation Microsoft                 | Tester au volume réel                     | Carte-test          |
| 3. Quelles connexions changent la licence ou la sécurité ? | Le tenant autorise-t-il les flux ?                  | Désignation Premium et politiques de données   | Inventorier application et flux           | Carte-test          |
| 4. Qui maintient et remet en service ?                     | L’application dépend-elle d’une personne ?          | Questions d’exploitation                       | Nommer propriétaires et procédure         | Carte-test          |
| 5. Que récupérez-vous si vous changez de solution ?        | Existe-t-il une sortie testée ?                     | Export de solutions                            | Tester export et import                   | Carte-test          |
| Le calcul de licences vient après les cinq tests           | Quel coût récurrent comparer ?                      | 40 × 17,30 × 36                                | Distinguer licences et coût total         | Calcul fictif       |
| Quatre chemins restent possibles                           | Que choisir ?                                       | Statu quo organisé, Power Apps, hybride, dédié | Décider sans faux duel                    | Cartes comparatives |
| Faites les cinq tests sur une fonction qui compte          | Que faire sans prestataire ?                        | Fiche copiable                                 | Obtenir des preuves cette semaine         | Checklist           |
| Bon fit, mauvais fit et FAQ                                | Quand demander de l’aide ?                          | Critères visibles                              | Conversion honnête                        | Encadrés + FAQ      |

## 8. Ressource et conversion

```text
Ressource nécessaire : non, la fiche reste dans la page
Résultat autonome : cinq preuves datées sur une fonction métier importante
Rubriques : utilisateur, requête et volume, connecteurs et flux, responsable d’exploitation, export/import
Conclusion ne pas investir : oui, si les cinq tests passent et si le coût reste acceptable
Bon fit Hagnéré Code : contrainte métier documentée, données et responsabilités identifiées, choix encore ouvert
Mauvais fit : recherche d’un audit contractuel de licences Microsoft ou volonté de réécrire sans tester l’existant
Action non commerciale : exécuter les cinq tests avec l’administrateur Microsoft et un utilisateur
CTA : « Comparer mes options sur des preuves » vers `/demarrer-un-projet`
```

## 9. Rapport P1

```text
PASSE 1 TERMINÉE
Slug : power-apps-ou-application-sur-mesure
Lecteur et phrase réelle : dirigeant de PME — « Notre Power Apps marche pour douze personnes ; peut-il tenir demain ? »
Décision : conserver, organiser, compléter, reconstruire ou attendre selon cinq tests
Angle et forme dominante : cinq preuves à obtenir sur une fonction métier
Pages proches et différence : le guide no-code choisit une famille ; celui-ci audite un choix Microsoft déjà concret
Sources décisives : tarification, désignation de licence, délégation, politiques de données et export Microsoft
Incertitudes exclues : coût du développement, gain de productivité, licence contractuelle exacte sans inventaire, conversion automatique de la solution exportée
Action autonome et CTA possible : exécuter cinq tests ; comparer les options sur leurs preuves
Plan : réponse, cinq tests, calcul limité, quatre chemins, audit autonome, fits et FAQ
Snapshot : docs/research/manifests/power-apps-ou-application-sur-mesure-p1.sha256
```

## 10. Revue de porte P1

- [x] lecteur, situation et décision unique définis ;
- [x] intention distincte des guides voisins ;
- [x] sources Microsoft officielles et actuelles consultées ;
- [x] prix daté, HT, périodicité et limite du calcul visibles ;
- [x] connecteurs de l’application et des flux distingués ;
- [x] limite de délégation expliquée sans la généraliser ;
- [x] export Power Platform distingué d’une conversion de code ;
- [x] exemple fictif annoncé avant le calcul ;
- [x] options hybride, maintien et absence d’investissement présentes ;
- [x] action autonome définie ;
- [x] P2, P3 et P4 terminées ; publication déléguée et contrôlée.

## 11. Rapport P2

```text
PASSE 2 TERMINÉE
Fichiers créés ou modifiés : dossier P1, manifeste P1, page.tsx et opengraph-image.tsx du slug
Ouverture et réponse : Power Apps reste rationnel lorsque utilisateurs, données, connexions, exploitation et sortie passent cinq tests ; l’application dédiée n’est pas le verdict par défaut
Forme propre au sujet : cinq cartes-test avec action et preuve, puis quatre chemins possibles
Exemple ou calcul : exemple fictif de 40 licences Premium sur 36 mois, limité au prix Microsoft affiché le 23/07/2026 et explicitement distinct d’un coût total
Sources visibles : tarification, désignation de licence, délégation, politiques de données et export Microsoft au plus près des affirmations
Action autonome, bon fit et mauvais fit : réunion à quatre rôles et cinq preuves ; maintien, hybride, sur-mesure et absence d’investissement restent possibles
CTA et destination : un seul GuideInlineCTA, « Présenter mes cinq tests », vers /demarrer-un-projet, téléphone masqué
Contrôles rapides : Prettier ciblé, ESLint ciblé, TypeScript et git diff --check conformes selon le rapport de l'éditeur
Snapshot : docs/research/manifests/power-apps-ou-application-sur-mesure-p2.sha256
```

L’entrée `src/lib/guides.ts`, le maillage entrant et le garde-fou éditorial
commun sont ajoutés au snapshot P2 par l’éditeur central. Cette porte ne vaut
ni P3, ni P4, ni autorisation de publication.

## 12. Rapport P3 — contre-audit indépendant

```text
PASSE 3 TERMINÉE
Relecteur indépendant : /root/p2_batch3_marketing
Affirmations et sources revérifiées : tarification datée, délégation, licences et connecteurs, mode hors connexion, Developer Plan, invités Entra B2B, export et limites de sortie
Calculs refaits : 40 × 17,30 € × 36 mois = 24 912 € HT, limité aux licences Premium du scénario fictif
P0 trouvés / corrigés : 0 / 0
P1 trouvés / corrigés : 4 / 4 — hors connexion absent, Developer Plan absent, droits des invités trop vagues et snapshot P2 devenu historique
Suggestions rejetées et pourquoi : aucun prix global du sur-mesure ni verdict universel ajouté, faute de besoin et de périmètre comparables
Corrections pédagogiques et commerciales : test réel en mode avion, droits de chaque source, distinction Power Pages et rappel qu’un environnement de développement gratuit n’est pas une production
Revalidation du relecteur : P0/P1/P2 = 0/0/0 sur le contenu courant
Contrôles intermédiaires : Prettier, ESLint, TypeScript, tests ciblés, liens officiels et données structurées conformes
Snapshot : docs/research/manifests/power-apps-ou-application-sur-mesure-p3.sha256
```

## 13. Rapport P4 — plume, rendu et gel

```text
PASSE 4 TERMINÉE
Passages humanisés : ouverture recentrée sur l’outil déjà utilisé, questions traduites en cinq preuves de direction et CTA réécrit autour des résultats du diagnostic
Coupe ou resserrement : répétitions entre licences, exploitation et sortie retirées ; les quatre chemins restent distincts sans duel artificiel
Retour P3 effectué : oui — mode hors connexion, Developer Plan, invités, connecteurs, délégation et export ont été revérifiés ; relecture finale P0/P1/P2 = 0/0/0
Scorecard justifiée : 19/20 — Intention 2, Décision 2, Pédagogie 2, Profondeur 2, Preuve 2, Comparaison 2, Originalité 1, Style 2, Conversion 2, SEO/produit 2
Validation humaine réelle : non
Test réalisé par une personne réelle : non
Autorisation éditoriale : délégation explicite du commanditaire
Décision de publication : autorisée explicitement par le commanditaire
Commandes et résultats : check:seo 215/215 ; ESLint 32 fichiers ; TypeScript conforme ; npm test 440/440 ; build et postbuild de production conformes ; diff-check conforme
Largeurs et états contrôlés : 320, 390, 768, 1 024 et 1 440 px ; clair et sombre ; contenu, sommaire, cartes, CTA, FAQ et footer sans débordement
Route, OG et console : route 200, H1 unique, canonical et robots conformes ; OG 200 en PNG 1 200 × 630 ; aucun overlay ni erreur navigateur
Snapshot final : docs/research/manifests/power-apps-ou-application-sur-mesure-p4.sha256
Statut maximal : Publiable
Verdict : publiable en index/follow ; cela ne prouve ni crawl, ni indexation Google, ni position
```
