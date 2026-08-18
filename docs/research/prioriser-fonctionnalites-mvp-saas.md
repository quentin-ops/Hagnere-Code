# Dossier de recherche — SaaS : prioriser les fonctionnalités après le MVP

> Le cycle du 23 juillet est conservé comme historique. Il a été rouvert le 24
> juillet après un audit individuel à 66/100 et une nouvelle recherche
> internationale. La page publique, l’image sociale, le registre et la
> ressource téléchargeable ont changé ; les anciens snapshots P2, P3 et P4 ne
> prouvent donc plus l’état courant. La nouvelle contre-relecture indépendante
> et le gel P4 restent à fermer.

## Journal des quatre passes

Propriétaire éditorial unique : **/root**.

| Passe                        | État                           | Date       | Responsable                    | Snapshot                                                 | Blocages                               |
| ---------------------------- | ------------------------------ | ---------- | ------------------------------ | -------------------------------------------------------- | -------------------------------------- |
| 1. Recherche                 | Terminée — porte validée       | 2026-07-23 | `/root/research_saas_batch2`   | `manifests/prioriser-fonctionnalites-mvp-saas-p1.sha256` | Aucun                                  |
| 2. Rédaction et intégration  | Historique — snapshot remplacé | 2026-07-23 | Propriétaire éditorial `/root` | `manifests/prioriser-fonctionnalites-mvp-saas-p2.sha256` | Réécriture du 24 juillet hors snapshot |
| 3. Contre-audit indépendant  | Historique — snapshot remplacé | 2026-07-23 | Deux relecteurs indépendants   | `manifests/prioriser-fonctionnalites-mvp-saas-p3.sha256` | Nouveau P3 à réaliser                  |
| 4. Plume humaine et contrôle | Historique — gel invalidé      | 2026-07-23 | Propriétaire éditorial `/root` | `manifests/prioriser-fonctionnalites-mvp-saas-p4.sha256` | Nouveau P4 à produire                  |

### Manifeste du snapshot

| Fichier contrôlé                                      | SHA-256                    | Passe | Remarque                                                                    |
| ----------------------------------------------------- | -------------------------- | ----- | --------------------------------------------------------------------------- |
| `docs/research/prioriser-fonctionnalites-mvp-saas.md` | enregistré hors du dossier | P1    | Voir `docs/research/manifests/prioriser-fonctionnalites-mvp-saas-p1.sha256` |

Le manifeste frère P1 contient le hash du présent dossier tel qu’il existait à
la fermeture de la recherche. À ce stade historique, aucune page, image
sociale, entrée de registre ou page de maillage n’existait encore. La P2 a
ensuite ajouté la page publique, son image sociale, son entrée de registre, un
lien entrant et les tests associés ; son état est décrit dans le rapport P2.

## 1. Fiche d’identité

```text
Slug : prioriser-fonctionnalites-mvp-saas
Statut actuel : publiable — validation éditoriale déléguée
Requête principale qualitative : prioriser fonctionnalités MVP SaaS
Moment du parcours : décider
Lecteur précis : fondateur ou dirigeant d’un SaaS B2B qui possède déjà une première version utilisable et doit choisir le prochain petit lot parmi des demandes clients, des corrections et des idées internes
Situation déclenchante : plusieurs clients ou prospects demandent des fonctions différentes ; l’équipe ne peut pas tout construire et le dirigeant craint de perdre une vente en disant « pas maintenant »
Décision principale après lecture : choisir le prochain lot à construire, le test à mener avant de construire et les demandes à reporter avec une raison vérifiable
Niveau de connaissance au départ : le lecteur connaît ses clients et son produit, mais ne maîtrise ni RICE, ni MoSCoW, ni le vocabulaire de gestion de produit
5 questions indispensables : quel problème se cache derrière la demande ; quelle preuve montre qu’il existe ; quel résultat de l’entreprise changerait ; quelles dépendances ou obligations passent avant le score ; quel événement fera réexaminer la demande
3 objections ou craintes : le plus gros client partira si on refuse ; un score rendrait enfin la décision objective ; toute demande peut devenir urgente lorsqu’une vente est en jeu
Action utile sans contact commercial : remplir la fiche de tri du prochain lot pour cinq demandes, puis choisir construire, tester, corriger d’abord ou reporter
CTA possible : faire examiner cinq demandes et repartir avec un prochain lot, un test préalable et une liste explicitement reportée
Hors périmètre : choisir le socle opérationnel du premier MVP ; définir une cadence produit permanente ; promettre une date à un client ; tarifer le SaaS ; produire une roadmap annuelle ; conseil juridique ou de sécurité personnalisé
Date de la recherche : 23 juillet 2026
Responsable de la synthèse : /root/research_saas_batch2
```

### Réponse de travail en une phrase

**Ne classez pas directement les solutions demandées. Reformulez d’abord le
problème observé, la personne concernée, la preuve disponible et le changement
attendu ; traitez séparément les obligations, incidents et dépendances, puis
choisissez le plus petit lot qui permet d’obtenir un résultat ou d’apprendre
quelque chose de décisif.**

### Questions et objections à traiter

1. Faut-il construire ce que demande le client qui paie le plus ?
2. Trois clients qui demandent la même fonction suffisent-ils à la rendre
   prioritaire ?
3. Comment comparer une correction, une intégration, une nouvelle fonction et
   un travail invisible de fiabilité ?
4. Une méthode RICE ou MoSCoW donne-t-elle une réponse objective ?
5. Que faire lorsque la portée ou l’effet attendu ne peuvent pas encore être
   mesurés ?
6. Comment tenir compte d’une dépendance, d’un engagement contractuel ou d’un
   risque de sécurité sans fausser le classement ?
7. Faut-il livrer plusieurs petites demandes ou une seule amélioration plus
   importante ?
8. Comment dire « pas maintenant » sans promettre une date que l’équipe ne
   maîtrise pas ?
9. Quand rouvrir une demande refusée ?
10. Qui doit prendre la décision finale ?

### Score de lancement issu du lot

Cette note interne sert uniquement à ordonner le travail. Elle ne prédit ni
trafic, ni classement, ni conversion.

| Critère                          |       Note | Justification                                                                                                                                |
| -------------------------------- | ---------: | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Adéquation avec une offre vendue |      25/25 | Le site vend le cadrage, le développement et l’évolution de SaaS                                                                             |
| Proximité d’une demande de devis |      23/25 | Le lecteur possède un produit et envisage un nouveau lot de développement                                                                    |
| Preuve qualitative de demande    |      12/15 | La SERP française montre des contenus dédiés aux roadmaps, demandes et méthodes de priorisation ; aucun volume propriétaire n’est disponible |
| Preuve ou outil original         |      15/15 | Fiche sans score magique : problème, preuve, résultat, contrainte, dépendance, effort et prochaine décision                                  |
| Différenciation du corpus        |       9/10 | Frontière nette avec le socle du MVP et avec la cadence durable après le MVP                                                                 |
| Maillage et CTA utile            |      10/10 | Suite naturelle du guide MVP, avant le cahier des charges d’un lot ou l’accompagnement SaaS                                                  |
| **Total**                        | **94/100** | Sujet maintenu                                                                                                                               |

## 1 bis. Contrat de langage humain

- **Phrase exacte que le lecteur pourrait dire au téléphone :** « J’ai dix
  demandes différentes et chaque commercial me dit que la sienne est urgente.
  Qu’est-ce qu’on développe vraiment maintenant ? »
- **Réponse qu’il attend en une phrase :** « On transforme chaque demande en
  problème prouvé, on sort les obligations et les incidents du concours, puis
  on choisit le plus petit lot qui change un résultat important ou permet de
  trancher la suite. »
- **Terme central expliqué sans jargon :** prioriser signifie choisir ce qui
  sera construit maintenant, ce qui doit être testé avant et ce qui attendra.
- **Mots ordinaires employés par le lecteur :** demande client, grosse vente,
  bug, fonction, intégration, temps de développement, urgence, contrat,
  utilisateur bloqué, argent perdu, prochaine version.
- **Mots d’agence ou de consultant à éviter :** backlog, scoring, reach,
  discovery, delivery, gouvernance produit, vélocité, capacité, arbitrage,
  quick win, epic, user story, table stakes.
- **Projet des 150 premiers mots :** ouvrir sur dix demandes concurrentes,
  expliquer qu’une demande décrit souvent une solution et non le problème,
  donner le verdict conditionnel, puis annoncer une fiche de tri utilisable le
  jour même.
- **Ce que le lecteur saura décider après ces 150 mots :** quelle information
  manque avant de classer une demande et quelles demandes doivent être traitées
  hors du classement normal.
- **H2 relus isolément :** oui au stade du plan.
- **Comparaison comprise à 390 px sans colonne masquée :** à produire sous
  forme de cartes empilées sur mobile ; aucune réponse décisive dans une
  colonne hors écran.
- **FAQ dont la première phrase répond :** oui, exigence transmise à P2.
- **CTA formulé comme résultat pour le prospect :** « Choisir le prochain lot
  de mon SaaS ».

### Test sujet, action, résultat

Formulations abstraites à interdire ou à réécrire pendant P2 :

| Phrase initiale               | Qui agit ?                    | Action concrète                                                   | Résultat pour le lecteur                               | Phrase réécrite                                                                                                     |
| ----------------------------- | ----------------------------- | ----------------------------------------------------------------- | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------- |
| Prioriser par la valeur       | Le dirigeant et l’équipe      | Nomment le résultat qui doit changer et la preuve actuelle        | Deux demandes deviennent comparables                   | « Pour chaque demande, écrivez ce qui changera pour le client ou l’entreprise et ce qui vous permet de le croire. » |
| Aligner les parties prenantes | Le dirigeant                  | Réunit vente, support et développement sur les mêmes cinq fiches  | Chacun discute des mêmes faits                         | « Faites relire les cinq fiches par la vente, le support et le développement avant de décider. »                    |
| Gérer les dépendances         | L’équipe                      | Écrit ce qui doit exister avant qu’une fonction puisse être utile | L’ordre technique ne reste pas caché                   | « Notez ce qui doit être construit, décidé ou fourni avant chaque demande. »                                        |
| Augmenter la confiance        | Le responsable de la décision | Cherche une mesure, un entretien ou un essai ciblé                | Une intuition faible devient un test ou reste reportée | « Si la preuve est faible, choisissez d’abord le test qui pourrait confirmer ou abandonner la demande. »            |
| Protéger la roadmap           | Le dirigeant                  | Sépare intention, option étudiée et engagement daté               | Le client ne prend pas une piste pour une promesse     | « Dites ce qui est étudié sans annoncer une date tant que le lot n’est pas décidé et chiffré. »                     |

### Test de l’ouverture

- [x] la situation vécue apparaîtra avant la méthode de l’agence ;
- [x] MVP sera développé comme « première version volontairement limitée » si
      le sigle reste dans le visible ;
- [x] aucun lexique de masse ne retardera la réponse ;
- [x] aucune métaphore ne deviendra un système à apprendre ;
- [x] la réponse restera honnête sans commencer par une suite de réserves.

## 2. Cannibalisation

| Page existante ou prévue                     | Intention de cette page                                                   | Différence du nouveau guide                                                                                       | Lien ou arbitrage nécessaire                                                                                 |
| -------------------------------------------- | ------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| `/guides/mvp-saas-quoi-inclure`              | Définir le socle nécessaire pour mettre un premier client en production   | Le nouveau guide commence une fois ce socle fixé et compare des fonctions métier concurrentes pour le lot suivant | Lien entrant depuis la décision de lot ; ne pas refaire comptes, droits, sauvegardes, support et facturation |
| `/guides/mvp-prototype-ou-poc`               | Choisir le bon type de test pour lever une incertitude                    | Ici, le test n’est qu’une sortie possible lorsqu’une demande manque de preuve                                     | Lien contextuel lorsqu’un essai est préférable au développement                                              |
| `/guides/valider-idee-saas-avant-developper` | Vérifier le problème, l’acheteur et l’accès au marché avant de construire | Le produit existe déjà et fournit des usages, tickets ou conversations observables                                | Renvoyer vers la validation si aucune personne n’utilise encore le produit                                   |
| `/guides/cahier-des-charges-saas`            | Décrire la vie complète du SaaS pour obtenir des devis comparables        | Le nouveau guide choisit le prochain lot avant d’en détailler les tests et responsabilités                        | Lien après sélection du lot                                                                                  |
| `/guides/combien-de-temps-developper-saas`   | Construire un calendrier par travaux, attentes et responsables            | La priorité est décidée avant le calendrier ; aucun délai moyen ne sera donné                                     | Ne pas refaire le calcul de date                                                                             |
| `/guides/agence-saas-ou-freelance`           | Choisir l’organisation capable de construire et exploiter le SaaS         | Le nouveau guide choisit le travail, pas le statut du prestataire                                                 | Lien seulement si l’équipe reste à choisir                                                                   |
| `/guides/faire-evoluer-saas-apres-mvp`       | Organiser dans la durée demandes, support, dette et versions              | Le présent guide décrit une séance de décision pour un seul prochain lot                                          | Ne pas installer une cadence trimestrielle ou une politique permanente                                       |
| `/services/saas-applications-metier`         | Présenter l’offre transactionnelle de développement SaaS                  | Le guide peut conclure à un test, un outil existant, un report ou un lot réalisé par une autre équipe             | CTA après la fiche autonome, avec conflit d’intérêt visible                                                  |

**Justification d’une URL distincte :** aucune page du corpus n’aide encore le
dirigeant à transformer plusieurs demandes concurrentes en un seul prochain
lot en séparant problème, preuve, résultat, contrainte et dépendance.

**Risque résiduel :** faible si P2 ne redéfinit ni le socle d’un premier MVP,
ni le cycle durable de gestion du produit. La page doit rester centrée sur la
décision « que met-on dans la prochaine version ? ».

## 3. Demande et vocabulaire du lecteur

### Observation datée

SERP qualitative observée le **23 juillet 2026** avec des requêtes françaises :

- « prioriser fonctionnalités MVP SaaS » ;
- « comment prioriser fonctionnalités produit SaaS demandes clients » ;
- « priorisation roadmap produit SaaS MVP fonctionnalités » ;
- « feature prioritization SaaS customer requests evidence RICE MoSCoW ».

L’observation a été réalisée sur un moteur généraliste. Elle ne constitue ni
une mesure de volume, ni une mesure de difficulté, ni une extraction de Search
Console ou de Keyword Planner. La localisation exacte de chaque résultat
n’étant pas garantie, aucune position n’est consignée.

### Questions et formulations réellement rencontrées

- prioriser les fonctionnalités et piloter une roadmap ;
- trier le MVP et les éléments « agréables mais non indispensables » ;
- traiter les demandes de fonctionnalités ;
- choisir entre RICE, MoSCoW et valeur contre effort ;
- décider quoi créer en premier ;
- ne pas laisser la demande la plus récente ou la personne la plus insistante
  dicter la feuille de route ;
- relier la demande au problème, au contexte, au nombre de personnes touchées
  et à l’objectif de l’entreprise ;
- dire non ou « plus tard » aux clients sans fermer la discussion.

### Recherche principale et variantes utiles

Requête principale qualitative : **prioriser fonctionnalités MVP SaaS**.

Variantes naturelles : choisir prochaine fonctionnalité SaaS, demandes clients
SaaS, prioriser roadmap produit, ordre des fonctionnalités, méthode RICE,
méthode MoSCoW, valeur contre effort, prochaine version SaaS, demandes support
et ventes, dépendances produit, décider quoi développer.

### Ce qui reste une supposition

- aucun volume mensuel ni niveau de concurrence n’a été mesuré ;
- aucune donnée Search Console propre à Hagnéré Code n’a été consultée ;
- la phrase téléphonique est une reconstruction éditoriale fondée sur les
  questions de SERP, pas la citation d’un client ;
- aucune fréquence universelle de réunion ni aucun seuil de nombre de clients
  ne sera publié sans mesure propre au produit.

## 4. Carte concurrentielle

| Page                                                                                                                             | Réponse et angle                                                                       | Preuves/artefacts                                                                                   | Bon point                                                                        | Manque décisionnel                                                                                                                                                     | Conflit d’intérêt éventuel                 |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| [Aetherio — Product roadmap SaaS](https://aetherio.tech/articles/product-roadmap-saas-gestion-priorites-fonctionnalites)         | Roadmap, collecte, RICE, MoSCoW, valeur/effort, Kano, outils et communication          | Listes et définitions ; deux pourcentages présentés comme expérience interne sans protocole visible | Couvre l’ensemble du vocabulaire recherché                                       | Accumule les méthodes sans montrer une décision complète à partir de demandes imparfaites ; plusieurs affirmations chiffrées ne sont pas étayées dans la page observée | Vend le cadrage et le développement SaaS   |
| [SaaS Path — Roadmap MVP SaaS](https://saas-path.com/blog/articles/roadmap-mvp-saas/)                                            | Résultat de SERP centré sur MoSCoW et RICE pour séparer MVP et « nice-to-have »        | Article inaccessible lors de l’ouverture ; seuls titre, extrait et date ont été observés            | Réponse exactement formulée dans les mots de la requête                          | Impossible de contrôler les preuves et les limites ; reste centré sur les fonctions du MVP initial                                                                     | Site spécialisé dans l’accompagnement SaaS |
| [Atlassian — Demande de fonctionnalité](https://www.atlassian.com/fr/agile/product-management/feature-request)                   | Définir la demande, décrire problème, contexte et cas d’usage, puis la gérer           | Modèle de demande et exemple                                                                        | Fait remonter le problème et le contexte avant le développement                  | La page suggère aussi une solution et évoque le nombre de demandes, sans construire un arbitrage complet entre obligation, preuve, dépendance et effet attendu         | Vend Jira Product Discovery                |
| [Contentsquare — Priorisation de roadmap](https://contentsquare.com/fr-fr/guides/roadmap-produit/priorisation/)                  | Objectifs, usages, données, cadres de score et partage de roadmap                      | Guide long, questions de décision et liens vers les fonctions du produit                            | Montre que bugs, architecture, objectifs et fonctions se disputent le même temps | Vocabulaire de responsable produit dense ; ne donne pas une fiche courte adaptée à un dirigeant sans équipe produit                                                    | Vend l’analyse d’expérience et ses outils  |
| [Productboard — Comprendre ce dont les utilisateurs ont besoin](https://www.productboard.com/understand-what-users-really-need/) | Centraliser les retours, les relier aux besoins et faire remonter les meilleures idées | Démonstration de fonctions du logiciel                                                              | Distingue demandes collectées et besoins auxquels elles se rattachent            | Le logiciel organise l’information mais ne remplace pas la décision ; l’angle peut faire croire qu’un outil résout le manque de preuve                                 | Vend Productboard                          |

### Angle mort commun

La SERP présente surtout des catalogues de méthodes ou d’outils. Elle explique
moins bien comment un dirigeant traite une demande incomplète, retire du
classement les obligations et incidents, choisit un test lorsque la preuve est
faible, puis consigne honnêtement pourquoi les autres demandes attendent.

### Valeur originale que le guide apportera

Un **tri du prochain lot** sans score opaque :

1. noter la phrase reçue ;
2. retrouver le travail bloqué et la personne touchée ;
3. consigner la preuve, pas seulement le nombre de votes ;
4. nommer le résultat attendu et le moyen de le vérifier ;
5. sortir les incidents, obligations et dépendances du concours normal ;
6. estimer tout le travail, y compris conception et tests ;
7. décider construire, tester, corriger d’abord ou reporter ;
8. écrire l’événement qui rouvrira la demande.

## 5. Fiche de preuves

| Affirmation utilisable                                                                                                                                                                                 | Source primaire, URL et passage utile                                                                                                                                                                                                                                                                         | Nature                                                                                  | Périmètre                                                                               | Date/consultation                                                 | Confiance                                                      | Emplacement du lien visible                                                         | Conséquence lecteur                                                                                                                              | Fraîcheur                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | ----------------------------------------------------------------- | -------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------- |
| Une demande doit rester reliée au besoin réel et être fondée sur des observations plutôt que sur une opinion interne                                                                                   | [GOV.UK, « Learning about users and their needs »](https://www.gov.uk/service-manual/user-research/start-by-learning-user-needs), sections « How to research » et « Validating user needs » : retours non issus des utilisateurs traités comme hypothèses ; besoin formulé comme problème plutôt que solution | Guide officiel de conception de services publics britanniques                           | Méthode de recherche utilisateur ; transposition à un SaaS privé, non norme française   | page publiée en 2016, mise à jour 2017, consultée le 23/07/2026   | Élevée dans son contexte                                       | Près de la fiche qui transforme une fonction demandée en problème observé           | Ne pas classer « ajouter un export Excel » avant de savoir quel travail échoue sans cet export                                                   | Revalider si le manuel change             |
| Les besoins doivent continuer d’être étudiés dans les phases alpha, bêta et en service ; les idées et nouvelles fonctions se testent avec des utilisateurs probables                                   | [GOV.UK, même page](https://www.gov.uk/service-manual/user-research/start-by-learning-user-needs), lignes consacrées aux phases alpha, beta et live                                                                                                                                                           | Guide officiel                                                                          | Services publics ; principe méthodologique, pas obligation SaaS                         | consultée le 23/07/2026                                           | Élevée comme pratique                                          | Près de la sortie « tester avant de construire »                                    | Une demande peu prouvée peut devenir un essai ciblé au lieu d’un lot complet                                                                     | Revalider si le manuel change             |
| RICE compare portée, effet attendu, confiance et effort ; l’article demande d’utiliser des mesures réelles lorsque possible et d’inclure le temps de toute l’équipe                                    | [Intercom, Sean McBride, « RICE: Simple prioritization for product managers »](https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/), sections Reach, Confidence et Effort                                                                                                          | Présentation de la méthode développée chez Intercom, dans un article signé Sean McBride | Méthode interne devenue largement reprise ; échelles et unités ne sont pas universelles | publiée le 05/01/2018, consultée le 23/07/2026                    | Élevée pour définir RICE, moyenne pour l’appliquer à tout SaaS | Dans une section courte « quand un score aide et quand il invente de la précision » | Un score n’est calculé que si la période, la portée, l’effet et l’effort reposent sur des données comparables                                    | Revalider si la page ou la méthode change |
| L’article Intercom précise que le score n’est pas une règle absolue et que dépendances ou fonctions indispensables à certains clients peuvent justifier un ordre différent                             | [Intercom, même article](https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/), section « How to use RICE scores effectively »                                                                                                                                                      | Source primaire méthodologique                                                          | Conseils Intercom ; non norme                                                           | consultée le 23/07/2026                                           | Élevée                                                         | Immédiatement après toute présentation du score                                     | La décision finale doit afficher les exceptions au lieu de maquiller les valeurs pour obtenir le classement désiré                               | Revalider si la page change               |
| Un test utile écrit ce qui doit être vrai, comment le vérifier, ce qui sera mesuré et le seuil de succès                                                                                               | [Strategyzer, Alex Osterwalder, « Validate your ideas with The Test Card »](https://www.strategyzer.com/library/validate-your-ideas-with-the-test-card), liste des quatre éléments du Test Card                                                                                                               | Source primaire de l’outil par son auteur                                               | Test d’hypothèses commerciales ; pas une garantie de marché                             | publiée le 05/03/2015, consultée le 23/07/2026                    | Élevée pour la structure du test                               | Près de la sortie « preuve insuffisante : écrire le test »                          | Une fonction incertaine doit produire une mesure et un seuil avant d’absorber tout un lot                                                        | Revalider si l’outil change               |
| Les décisions de conception doivent conserver une preuve à jour et transparente ; les besoins fonctionnels et non fonctionnels peuvent venir de l’usage, du droit, de la sécurité ou de la performance | [Home Office Engineering, « Design from evidence »](https://engineering.homeoffice.gov.uk/principles/design-from-evidence/), rationale et applications                                                                                                                                                        | Principe officiel d’ingénierie publique britannique                                     | Ingénierie de services publics ; non obligation pour un SaaS français                   | mis à jour le 09/08/2023, consulté le 23/07/2026                  | Élevée dans son contexte                                       | Dans la section qui sépare fonctions, exigences et incidents                        | Les exigences de sécurité ou de conformité documentées ne doivent pas perdre contre une idée visible seulement parce qu’elles plaisent moins     | Revalider si le standard change           |
| Le NIST SSDF propose d’aligner et de prioriser les pratiques de développement sécurisé avec besoins métier, tolérance au risque et ressources ; il signale aussi des dépendances entre pratiques       | [NIST CSRC, SP 800-218 final](https://csrc.nist.gov/pubs/sp/800/218/final), version 1.1 ; [liste officielle des publications SSDF](https://csrc.nist.gov/Projects/ssdf/publications) pour le statut des versions                                                                                              | Référentiel officiel américain                                                          | Développement logiciel sécurisé ; recommandations, non obligation française générale    | version 1.1 finale et version 1.2 projet revalidées le 24/07/2026 | Élevée pour le référentiel                                     | Dans l’encadré « ce qui ne passe pas dans le même score »                           | Une correction de vulnérabilité est décidée selon le risque et les obligations du produit, pas comparée mécaniquement à une fonction commerciale | Revalider à chaque version SSDF           |
| Les demandes bien décrites commencent par le problème, le contexte et le cas d’usage ; l’outil ne décide pas à la place de l’équipe                                                                    | [Atlassian, « Demande de fonctionnalité »](https://www.atlassian.com/fr/agile/product-management/feature-request), sections « Identifiez le problème » et « Fournir un contexte et des cas d’utilisation »                                                                                                    | Documentation éditoriale officielle d’un éditeur                                        | Conseil de gestion produit lié à une offre commerciale                                  | consultée le 23/07/2026                                           | Moyenne : source intéressée mais directement vérifiable        | Dans le modèle de fiche de demande, comme appui secondaire                          | Le lecteur conserve la phrase du client mais reformule le problème avant toute solution                                                          | Revalider si la page change               |

### Contradictions et données à ne pas publier

- Ne pas écrire que RICE, MoSCoW ou un autre cadre est « objectif ». Les entrées
  restent des mesures, des estimations ou des jugements. RICE lui-même
  matérialise la confiance et autorise des décisions hors score.
- Ne pas reprendre les pourcentages observés sur Aetherio : aucune méthode
  publiable ne soutient dans la page les affirmations « 80 % » et « 70 % ».
- Ne pas publier un seuil universel de clients, de votes, de chiffre d’affaires
  récurrent ou de temps de développement.
- Ne pas écrire que la demande du plus gros client doit toujours passer en
  premier ni, à l’inverse, qu’elle doit être ignorée.
- Ne pas présenter le nombre de votes comme une preuve suffisante : il renseigne
  la portée dans une population donnée, pas l’effet attendu ni la cause du
  problème.
- Ne pas faire d’une exigence contractuelle ou de sécurité une simple case
  « valeur » dans un concours avec des idées commerciales.
- Ne pas promettre qu’une roadmap publique augmente l’adoption ou la confiance
  sans étude primaire applicable au contexte.
- Ne pas transformer l’expérience éditoriale Hagnéré Code en historique de
  missions ou en résultat client.

### Calculs reproductibles

Le guide ne doit pas inventer un score propriétaire. Si RICE est montré comme
option secondaire, reprendre exactement :

```text
RICE = portée sur une période × effet par personne × confiance / effort total
```

- La portée garde la même unité et la même période pour toutes les demandes.
- L’effet utilise une échelle annoncée ; il reste une estimation, pas une
  mesure scientifique.
- La confiance qualifie les éléments disponibles et entre dans la formule sous
  forme de fraction : par exemple, 80 % devient 0,8.
- L’effort inclut produit, conception, développement et autres métiers
  nécessaires, dans la même unité pour toutes les demandes.
- Un résultat RICE sert à ouvrir une discussion, jamais à classer une
  obligation, un incident critique ou une dépendance cachée.
- Aucun exemple numérique n’est nécessaire si le rédacteur ne peut pas fournir
  des données fictives cohérentes et refaire le calcul.

Nature du résultat : **classement indicatif de demandes comparables**, jamais
ROI, gain net, devis ou prévision commerciale.

## 6. Empreinte éditoriale à ne pas reproduire

| Guide                                | Type d’ouverture                          | Progression                                      | Dispositif récurrent                                | Type d’exemple                         | Place du CTA                     | Type de conclusion                                 |
| ------------------------------------ | ----------------------------------------- | ------------------------------------------------ | --------------------------------------------------- | -------------------------------------- | -------------------------------- | -------------------------------------------------- |
| `mvp-saas-quoi-inclure`              | Premier client prêt à utiliser le produit | Journée complète puis couches du service         | Trois moments de la journée, checklist de lancement | SaaS fictif avec premier parcours      | Après tests et bon/mauvais fit   | Choisir la version la plus simple                  |
| `mvp-prototype-ou-poc`               | Dilemme entre quatre formats de test      | Un chapitre par format, puis même cas appliqué   | Cartes de décision et comparatif                    | Un même logiciel fictif décliné        | Après la décision de fin de test | Poursuivre, retester, acheter, reporter ou arrêter |
| `valider-idee-saas-avant-developper` | Idée appréciée mais non prouvée           | Plan de terrain sur quatorze jours               | Entretiens, test manuel et décision                 | Exemple ponctuel d’une cible B2B       | Après action des 48 heures       | Développer, modifier ou arrêter                    |
| `combien-de-temps-developper-saas`   | Deux délais incompatibles                 | Ligne d’arrivée, dépendances, calcul, scénarios  | Trois calendriers et fiche de douze champs          | Exemple fictif chiffré de bout en bout | Après règle de recalcul          | Réduire, tester, piloter, déplacer ou reporter     |
| `agence-saas-ou-freelance`           | Deux organisations proposées              | Phases, responsabilités, personnes, coût, actifs | Cartes par phase et forme d’équipe                  | Deux situations à faire raconter       | Avant le brief final             | Choisir l’organisation puis envoyer le même brief  |

### Choix du nouveau guide

```text
Tension ou question motrice : dix demandes paraissent urgentes, mais une seule petite version peut être financée maintenant
Type d’ouverture retenu et pourquoi : scène de réunion concrète où vente, support et dirigeant apportent chacun une demande ; elle rend le conflit compréhensible sans introduire une méthode
Progression retenue et pourquoi : du message brut au problème, puis quatre voies de décision — construire, tester, corriger d’abord, reporter
Artefact signature : cinq fiches empilées du « tri du prochain lot », suivies d’un procès-verbal d’une page qui consigne le choix et les conditions de réexamen
Rythme/registre de voix : questions brèves, verbes d’action et comparaison de demandes ; aucun cours de product management
Place naturelle du CTA : après que le lecteur a rempli la fiche et pris une première décision
Forme de conclusion : le prochain lot, le test et les reports sont écrits ; la conclusion ne fabrique pas de roadmap annuelle
Au moins trois différences avec les guides voisins : pas de journée du premier client ; pas de chronologie en jours ; pas de comparatif prototype/POC/MVP ; pas de calendrier chiffré ; pas de choix agence/freelance
```

## 7. Plan annoté

| Section provisoire                                         | Question résolue                                                | Preuve ou exemple                                                                                             | Conséquence/décision                                                                 | Format choisi                           |
| ---------------------------------------------------------- | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | --------------------------------------- |
| Vous avez dix demandes et un seul prochain lot             | Que faut-il décider maintenant ?                                | Situation de vente, support et usage ; réponse courte                                                         | Le lecteur comprend que l’objet est un lot, pas une roadmap définitive               | Ouverture narrative courte              |
| Une demande de fonction cache souvent un travail bloqué    | Comment rendre deux demandes comparables ?                      | GOV.UK et Atlassian : problème, contexte, besoin et preuve                                                    | Reformuler « je veux X » en « telle personne n’arrive pas à Y dans telle situation » | Deux exemples avant/après               |
| Sortez d’abord les incidents, obligations et dépendances   | Qu’est-ce qui ne doit pas perdre dans un score général ?        | Home Office et NIST ; limites explicites                                                                      | Traiter le risque et l’engagement dans leur propre file de décision                  | Quatre cartes mobile-first              |
| Remplissez la fiche du prochain lot                        | Quelles informations écrire pour chaque demande ?               | Problème, personne, preuve, résultat, mesure, dépendance, effort et événement de réexamen                     | Une demande incomplète part en recherche plutôt qu’en développement                  | Modèle copiable de huit champs          |
| Une preuve faible appelle un test, pas une grosse fonction | Que faire lorsqu’on croit à l’effet sans pouvoir le démontrer ? | Strategyzer Test Card                                                                                         | Écrire hypothèse, test, mesure et seuil ; accepter l’abandon                         | Procédure en quatre étapes              |
| Utilisez un score seulement avec des données comparables   | RICE aide-t-il vraiment ?                                       | Article primaire Intercom, formule et limites                                                                 | Calculer seulement si unités et périodes sont communes ; documenter les exceptions   | Petit encadré et un contre-exemple      |
| Comparez cinq demandes du même SaaS fictif                 | Comment la méthode change-t-elle une vraie décision ?           | Exemple illustratif fictif : demande d’un gros prospect, gêne récurrente, intégration, erreur et idée interne | Choisir un lot cohérent, un test et trois reports                                    | Cartes empilées, pas tableau horizontal |
| Écrivez ce qui entre, ce qui attend et pourquoi            | Comment fermer la réunion sans promesse floue ?                 | Procès-verbal du lot : décision, responsable, preuve de fin, exclus, réexamen                                 | Le dirigeant peut expliquer « pas maintenant » sans annoncer une date                | Modèle à copier                         |
| Commencez autrement si le produit n’a pas encore d’usage   | Quand ce guide est-il le mauvais outil ?                        | Frontières avec validation, MVP et incident                                                                   | Renvoyer vers outil existant, recherche, sécurité ou report                          | Bon fit / mauvais fit                   |
| Faire examiner le prochain lot                             | Que produit le clic ?                                           | CTA réel `/demarrer-un-projet`                                                                                | Le prospect apporte cinq fiches et vise une décision, sans garantie de développement | Un CTA unique                           |
| Sources et limites                                         | Que soutiennent réellement les sources ?                        | Liens primaires datés                                                                                         | Maintenir la distinction méthode, recommandation et contexte                         | Liste commentée                         |

### FAQ résiduelle possible

La FAQ n’est pas obligatoire. Si elle est retenue en P2, limiter aux questions
qui ne justifient pas un chapitre :

1. Faut-il toujours écouter le plus gros client ? — Non ; sa demande compte,
   mais il faut vérifier le problème, le contrat, l’effet sur la cible choisie
   et le coût de spécialisation.
2. Combien de demandes suffisent pour construire ? — Aucun nombre universel ne
   suffit ; le contexte, la population touchée et l’effet attendu changent la
   décision.
3. RICE ou MoSCoW : lequel choisir ? — Aucun ne remplace les preuves ; RICE
   aide avec des données comparables, une classification simple aide surtout à
   rendre les exclusions visibles.
4. Peut-on promettre une fonction « plus tard » ? — On peut dire qu’elle sera
   réexaminée à un événement précis ; une date ne doit être promise qu’après
   décision, estimation et engagement réel.

## 8. Ressource et conversion

```text
Une ressource est-elle naturellement nécessaire ? non pour P1
Problème qu’elle résout après la lecture : le lecteur doit trier ses demandes, mais une fiche copiable directement dans la page suffit
Résultat autonome produit : cinq demandes transformées en problèmes comparables, puis un prochain lot, un test et des reports
Format éditable et format de consultation : bloc HTML copiable dans un document ou tableur ; aucune promesse de fichier
Rubriques, champs ou matrices réellement livrés : phrase reçue ; personne et situation ; problème observé ; preuve ; résultat attendu ; contrainte ou dépendance ; effort complet ; décision et événement de réexamen
Exemple rempli : oui, exemple illustratif fictif à construire en P2
Conclusion « ne pas investir » possible : oui, si aucun usage ne prouve la demande, si un outil existant suffit ou si l’obligation réelle est ailleurs
Sources, hypothèses et limites visibles : oui dans le guide
Données saisies et destination de ces données : aucune saisie serveur ; copie locale par le lecteur
Processus de génération reproductible : sans objet, aucun fichier généré
Journal de QA : sans objet tant qu’aucune ressource n’est créée
Limites connues et niveau de revue humaine : modèle éditorial, pas une garantie de revenu, de rétention ou de réussite produit
Mode de maintenance : revalider les sources méthodologiques et la cohérence des liens à chaque modification substantielle
Test du fichier ou outil : aucun outil annoncé
Bon fit Hagnéré Code : SaaS B2B déjà utilisé, plusieurs demandes réelles, responsable produit disponible, besoin de cadrer puis réaliser un lot cohérent
Mauvais fit : idée sans utilisateur, produit standard suffisant, incident de sécurité urgent, absence de décideur, volonté d’accepter chaque développement spécifique pour signer une vente
Action non commerciale : remplir les cinq fiches et écrire construire / tester / corriger d’abord / reporter
CTA principal et résultat après clic : « Choisir le prochain lot de mon SaaS » vers /demarrer-un-projet ; le formulaire recueille le projet pour préparer un échange, sans promesse de réponse immédiate ni de résultat garanti
```

### Bon fit et mauvais fit à rendre visibles

**Bon fit Hagnéré Code :** la première version fonctionne, des utilisateurs ou
prospects identifiables ont formulé des problèmes, les données utiles peuvent
être observées, une personne côté client peut décider et l’entreprise veut
construire un lot testable puis exploitable.

**Mauvais fit :** aucune personne n’utilise encore le produit ; le besoin est
déjà correctement couvert par un outil du marché ; le problème relève d’un
incident à contenir immédiatement ; le dirigeant cherche à promettre toutes les
demandes sans choisir ; ou l’entreprise n’a personne pour tester et accepter
les changements. Dans ces cas, valider, acheter, corriger ou reporter peut être
plus rationnel qu’un nouveau lot.

## 9. Rapports de sortie des quatre passes

### Rapport P1 — Recherche

```text
PASSE 1 TERMINÉE
Slug : prioriser-fonctionnalites-mvp-saas
Lecteur et phrase réelle : dirigeant d’un SaaS B2B ; « J’ai dix demandes différentes et chaque commercial me dit que la sienne est urgente. Qu’est-ce qu’on développe vraiment maintenant ? »
Décision : choisir le prochain lot, le test préalable et les demandes reportées avec un événement de réexamen
Angle et forme dominante : cinq demandes passent successivement de la phrase client à une décision construire / tester / corriger d’abord / reporter ; cartes mobile-first et procès-verbal copiable
Pages proches et différence : mvp-saas-quoi-inclure fixe le socle du premier client ; faire-evoluer-saas-apres-mvp organisera la cadence durable ; ce guide tranche un seul prochain lot
Sources décisives : GOV.UK sur les besoins fondés sur des preuves ; Intercom, source primaire de RICE et de ses limites ; Strategyzer Test Card ; Home Office Design from evidence ; NIST SSDF
Incertitudes exclues : volumes, seuils universels de clients, score objectif, effet garanti d’une roadmap publique, pourcentages non sourcés de concurrents
Action autonome et CTA possible : remplir cinq fiches puis « Choisir le prochain lot de mon SaaS » vers /demarrer-un-projet
Plan : ouverture concrète ; reformulation ; contraintes hors score ; fiche ; test ; usage limité d’un score ; exemple fictif ; décision et fit ; sources
Snapshot : docs/research/manifests/prioriser-fonctionnalites-mvp-saas-p1.sha256
```

### Rapport P2 — Rédaction et intégration

```text
PASSE 2 TERMINÉE
Fichiers créés ou modifiés : page publique et image sociale dédiées ; entrée du registre en attente de revue humaine ; lien entrant depuis le guide MVP SaaS ; garde-fou de date du corpus ; présent dossier
Ouverture et réponse : dix demandes concurrentes, réponse immédiate « ne classez pas les solutions avant le problème », puis quatre sorties construire / tester / corriger d’abord / reporter en moins de 150 mots
Forme propre au sujet : fiche de huit lignes, cinq demandes fictives traitées sous forme de cartes mobile-first et décision finale copiable ; aucun tableau dont la réponse serait masquée sur téléphone
Exemples ou calculs : exemple illustratif fictif explicitement séparé de tout client ; formule RICE donnée sans score inventé ni fausse objectivité
Sources visibles : GOV.UK près de la reformulation du besoin ; Home Office et NIST près des travaux hors score ; Strategyzer près du test ; source primaire Intercom près de RICE
Action autonome, bon fit et mauvais fit : cinq fiches à remplir localement ; développement, outil standard, test, correction et report restent possibles
CTA et destination : un seul CTA tardif « Faire examiner mes demandes » vers /demarrer-un-projet ; résultat annoncé sans délai ni résultat garanti
Contrôles rapides : Prettier, ESLint, TypeScript, 32 tests guides/langage humain et git diff --check conformes
Snapshot : docs/research/manifests/prioriser-fonctionnalites-mvp-saas-p2.sha256
```

### Rapport P3 — Contre-audit indépendant

Le premier contre-audit a été mené indépendamment par deux relecteurs le
23 juillet 2026. Tous deux ont refusé la porte P3, sans P0, principalement pour
quatre raisons : intention trop proche du guide sur le premier MVP, attribution
imprécise de RICE, exemple fictif insuffisamment démonstratif et dossier P2
resté partiellement à l’état P1.

La P2 a été reprise : title, H1, breadcrumb et OG nomment désormais la prochaine
version après le MVP ; l’attribution et les unités de RICE sont explicites ; une
demande fictive remplit les huit champs ; les quatre sorties restent cohérentes
jusqu’au procès-verbal final ; le bon et le mauvais contexte sont repérables.

Deux relecteurs indépendants ont ensuite contrôlé le nouvel état sans modifier
les fichiers. Leurs verdicts convergent : **P0 = 0, P1 = 0, P2 = 0**. Ils ont
vérifié les six hashes du manifeste P2, les sources et la formule RICE, la
frontière avec le guide du premier MVP, l’exemple complet, la cohérence des
quatre sorties, les métadonnées et les tests dédiés. La route locale répond en
200 et l’OG est un PNG 1200 × 630. Le rendu réel reste volontairement réservé à
P4.

### Rapport P4 — Plume humaine et contrôle final

```text
PASSE 4 TERMINÉE
Passages humanisés : intention recentrée sur la prochaine version après le MVP ; attribution RICE rendue exacte ; exemple de double facture rendu conditionnel et vérifiable ; bon et mauvais contexte isolés par des intertitres
Coupe ou resserrement : promesse « cinq demandes entièrement comparées » remplacée par un premier tri puis une demande complète ; formulation « mieux notées » supprimée ; lecture annoncée fixée à 14 minutes selon les 2 847 mots comptés dans l'artefact final
Retour P3 effectué : oui ; deux relecteurs indépendants ont revalidé le nouvel état à 0 P0, 0 P1 et 0 P2
Scorecard justifiée : 20/20 ; détail dans la table ci-dessous
Validation humaine réelle : non
Autorisation éditoriale : Décision de publication : autorisée explicitement par le commanditaire, qui a délégué le jugement final au contre-audit indépendant et aux contrôles locaux
Commandes et résultats : check:seo, ESLint, TypeScript, batterie Vitest, build Next.js, postbuild et git diff --check conformes au gel final du lot
Largeurs et états contrôlés : build de production à 320, 390, 768, 1 024 et 1 440 px ; clair et sombre ; aucun débordement, chevauchement ou contenu coupé
Route, OG et console : route build 200 ; index,follow ; canonical exact ; H1 unique ; Article et BreadcrumbList parsables ; FAQ présente ; sitemap et llms.txt présents ; console sans erreur ; OG 200, PNG 1 200 × 630 relue visuellement
Snapshot final : docs/research/manifests/prioriser-fonctionnalites-mvp-saas-p4.sha256
Statut maximal : publiable — validation éditoriale déléguée
Verdict : porte P4 validée
```

## 10. Revue finale

La page a franchi P3 et P4. La publication repose sur la délégation explicite du
commanditaire, deux relectures indépendantes et les contrôles locaux ; aucun
test avec un lecteur humain externe n’est inventé.

### Scorecard justifiée

| Axe         | Note 0-2 | Preuve dans la page                                                                                        | Correction éventuelle |
| ----------- | -------: | ---------------------------------------------------------------------------------------------------------- | --------------------- |
| Intention   |        2 | L’ouverture part de dix demandes et d’une seule prochaine version ; le premier MVP est explicitement exclu | Aucune                |
| Décision    |        2 | Quatre sorties stables, un procès-verbal rempli et des événements précis de réexamen                       | Aucune                |
| Pédagogie   |        2 | Fiche de huit lignes, une demande entièrement remplie et vocabulaire expliqué avant RICE                   | Aucune                |
| Profondeur  |        2 | Incidents, obligations, dépendances, effort complet, tests, achat et report sont couverts                  | Aucune                |
| Preuve      |        2 | Cinq sources visibles, attribution et limites explicites, exemple déclaré fictif                           | Aucune                |
| Comparaison |        2 | Construire, tester, corriger et reporter sont appliqués aux mêmes demandes et reliés à des faits           | Aucune                |
| Originalité |        2 | Le guide suit cinq phrases clients jusqu’à un procès-verbal propre à la prochaine version d’un SaaS        | Aucune                |
| Style       |        2 | Phrases adressées au dirigeant, titres autonomes, absence de score magique ou de survente                  | Aucune                |
| Conversion  |        2 | Bon et mauvais contexte visibles ; CTA unique, tardif, avec possibilité d’outil standard ou de report      | Aucune                |
| SEO/produit |        2 | Intention distincte, maillage entrant, metadata, index/follow, cinq largeurs et OG contrôlés               | Aucune                |

### Test lecteur non technique

```text
Test réalisé par une personne réelle : non
Profil du lecteur : non testé
Ce qu’il a compris comme réponse : non revendiqué
Décision qu’il prendrait : non revendiquée
Endroit où il a commencé à survoler : non mesuré
Passage crédible ou trop commercial : non mesuré
Termes ou passages bloquants : non mesurés
Questions encore sans réponse : aucune validation par un lecteur externe n’est revendiquée
Corrections appliquées : publication fondée sur la délégation explicite, deux contre-audits indépendants et la P4 complète
```

### Contre-audit indépendant

```text
Auteur du contre-audit : /root/final_lot_audit et /root/research_marketing_tma_site_batch2
Indépendant de la rédaction : oui ; aucune modification de leur part
Réserves sur les sources et calculs : attribution RICE et unités corrigées
Réserves sur la clarté et le plan : frontière avec le MVP initial et exemple corrigés
Réserves sur la conversion : bon et mauvais contexte rendus repérables
Corrections ou justification : appliquées puis revalidées
Statut maximal réellement atteint : Contre-audité — P3 validée
```

### Porte de sortie P4

- [x] article entier relu après les corrections ;
- [x] automatismes retirés sans perte factuelle ;
- [x] retours P3 corrigés puis revalidés ;
- [x] statut de publication autorisé par délégation explicite ;
- [x] batterie complète verte, postbuild compris ;
- [x] build de production, HTML, OG et console contrôlés ;
- [x] rendu visible contrôlé aux cinq largeurs obligatoires ;
- [x] score 20/20, sans note à 0 et avec les quatre axes obligatoires à 2 ;
- [x] absence de faux test lecteur consignée ;
- [x] registre sans `editorialStatus` et route `index,follow`.

### Vérifications historiques à la fermeture de P1

- [x] brief complet et décision unique ;
- [x] URL distincte justifiée ;
- [x] SERP qualitative actuelle et datée ;
- [x] sources primaires ou officielles ouvertes et synthétisées ;
- [x] faits, méthodes et recommandations séparés ;
- [x] contradictions et affirmations non publiables consignées ;
- [x] plan annoté distinct des voisins ;
- [x] action autonome, bon fit et mauvais fit définis ;
- [x] aucune ressource inexistante promise ;
- [x] propriétaire éditorial `/root` nommé ;
- [x] P2, P3 et P4 étaient maintenues bloquées à la fermeture de P1 ;
- [x] rapport P1 rempli ;
- [x] manifeste P1 prévu dans le fichier frère.

## URLs consultées en P1

### SERP et pages concurrentes

- https://aetherio.tech/articles/product-roadmap-saas-gestion-priorites-fonctionnalites
- https://saas-path.com/blog/articles/roadmap-mvp-saas/
- https://www.atlassian.com/fr/agile/product-management/feature-request
- https://contentsquare.com/fr-fr/guides/roadmap-produit/priorisation/
- https://www.productboard.com/understand-what-users-really-need/
- https://support.productboard.com/hc/en-us/articles/360058147693-What-is-Productboard

### Sources primaires, officielles ou méthodologiques

- https://www.gov.uk/service-manual/user-research/start-by-learning-user-needs
- https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/
- https://www.strategyzer.com/library/validate-your-ideas-with-the-test-card
- https://engineering.homeoffice.gov.uk/principles/design-from-evidence/
- https://csrc.nist.gov/projects/ssdf

## 11. Nouveau cycle — giga-audit du 24 juillet 2026

### 11.1 Diagnostic qui a rouvert la page

L’audit
`docs/audits/giga-audit-2026-07-24/guides/prioriser-fonctionnalites-mvp-saas.md`
a noté la version précédente **66/100**. La doctrine était saine — une demande
n’est pas un problème prouvé et les non-négociables ne doivent pas perdre un
score — mais le guide ne faisait aucun classement complet, aucune sensibilité
et aucune allocation de capacité. Il décrivait RICE sans le calculer.

Le benchmark a couvert la France, les États-Unis, le Royaume-Uni, l’Australie
et l’Espagne. Les sources primaires ou maintenues rouvertes pour la version
courante sont :

- Intercom pour la définition originale de RICE, ses unités et sa limite
  explicite : le score n’est pas une règle absolue ;
- Agile Business Consortium pour MoSCoW dans un horizon de livraison défini ;
- Scaled Agile Framework pour la définition de WSJF comme coût relatif du
  retard divisé par la taille relative du travail ;
- GOV.UK et Home Office pour le problème utilisateur, la preuve et la
  traçabilité des exigences ;
- Australian Digital Service Standard pour la réutilisation avant
  reconstruction ;
- Australian Digital Health Agency pour le MVP testable, l’accord des parties
  et le devenir des éléments moins prioritaires ;
- NIST : SSDF 1.1 finale et SSDF 1.2 encore au statut de projet au 24 juillet 2026.

Les méthodes sont présentées comme des cadres de décision, jamais comme une
preuve scientifique d’efficacité ni comme une norme générale applicable à tout
SaaS français.

### 11.2 Réécriture intégrée

La version courante ajoute :

- cinq issues de premier rang : corriger, réutiliser ou acheter, tester,
  construire, reporter ;
- un sas séparé pour panne, obligation applicable, engagement signé,
  dépendance, sécurité, confidentialité et accès critique ;
- un filtre objectif + segment + résultat + horizon avant toute note ;
- quatre scores RICE sur un même trimestre, avec portée en comptes, échelle
  d’impact explicitée et effort total en jours-personnes de huit heures ;
- la correction d’une portée de 60 visites à 6 comptes réellement concernés,
  faisant tomber un score de 4,80 à 0,48 ;
- une sensibilité de confiance : la validation groupée passe de 5,69 à 2,84
  lorsque la confiance passe de 0,8 à 0,4, sous le tableau de bord à 2,93 ;
- la même liste de demandes examinée avec RICE, MoSCoW, WSJF, Kano et une carte
  du parcours, en expliquant la question propre à chaque méthode ;
- une application WSJF reproductible : la validation groupée obtient 2,63 et
  l’intégration liée à une date de bascule 3,63, avec points et hypothèses
  explicitement fictifs ;
- la qualification Kano présentée comme une hypothèse à vérifier auprès
  d’utilisateurs, et non comme un résultat déjà mesuré ;
- trois scénarios de temps récupéré : 1 610 €, 3 220 € et 6 440 € bruts par an,
  puis 410 €, 2 020 € et 5 240 € nets d’une maintenance fictive de 1 200 € par
  an, contre un investissement initial fictif de 7 350 € ;
- un test manuel de rapport à 720 €, soit 5,4 % d’un tableau de bord fictif à
  13 300 € ;
- un lot fermé à 30 jours-personnes : 8 jours de correction, 12 de validation
  groupée — arrondi prudent des 11,25 jours estimés —, 3 de tests de rapport et
  7 d’incertitude/mise en production ;
- une analyse du plus gros client séparant chiffre d’affaires, coûts directs,
  contribution et part de renouvellement réellement attribuable à la demande ;
- une grille CSV de 18 colonnes, cinq exemples et cinq lignes vierges, sans
  collecte d’adresse :
  `public/ressources/kit-priorisation-fonctionnalites-saas.csv`.

Tous les nombres sont signalés comme **fictifs et pédagogiques**. Ils ne sont ni
un tarif Hagnéré Code, ni une moyenne de marché, ni un résultat client.

### 11.3 Calculs refaits

```text
Échelle d’impact illustrative Intercom :
3 massif ; 2 élevé ; 1 moyen ; 0,5 faible ; 0,25 minimal

Effort validation groupée
= 10 jours externes + (10 h internes ÷ 8 h)
= 11,25 jours-personnes

Effort tableau de bord
= 18 jours externes + (20 h internes ÷ 8 h)
= 20,5 jours-personnes

RICE validation groupée = 40 × 2 × 0,8 ÷ 11,25 = 5,69
RICE tableau de bord = 120 × 1 × 0,5 ÷ 20,5 = 2,93
RICE intégration = 8 × 3 × 0,5 ÷ 12 = 1
RICE couleurs initial = 60 × 0,5 × 0,8 ÷ 5 = 4,8
RICE couleurs corrigé = 6 × 0,5 × 0,8 ÷ 5 = 0,48
RICE validation avec confiance 0,4 = 40 × 2 × 0,4 ÷ 11,25 = 2,84

WSJF validation groupée = (13 + 5 + 3) ÷ 8 = 2,63
WSJF intégration avant date de bascule = (8 + 13 + 8) ÷ 8 = 3,63

Valeur centrale du temps
= 30 validations × 4 min ÷ 60 × 46 semaines × 35 €/h
= 3 220 €/an

Investissement initial
= 10 jours × 700 € + 10 h × 35 €
= 7 350 €

Maintenance récurrente fictive = 12 × 100 € = 1 200 €/an
Coût année 1 = 7 350 € + 1 200 € = 8 550 €

Gain net central = 3 220 € - 1 200 € = 2 020 €/an
Point mort simple central = 7 350 € ÷ 2 020 € = 3,64 ans

Gain net prudent = 1 610 € - 1 200 € = 410 €/an
Point mort simple prudent = 7 350 € ÷ 410 € = 17,93 ans

Gain net exigeant = 6 440 € - 1 200 € = 5 240 €/an
Point mort simple exigeant = 7 350 € ÷ 5 240 € = 1,40 an

Test rapport = 3 × 6 h × 40 € = 720 €
Tableau de bord = 18 jours × 700 € + 20 h × 35 € = 13 300 €
Part du test = 720 ÷ 13 300 = 5,4 %

Capacité = 8 + 12 + 3 + 7 = 30 jours ; reste = 0

Contribution fictive = 36 000 € - 10 000 € = 26 000 €
Part à risque à 20 % / 50 % / 70 % = 5 200 € / 13 000 € / 18 200 €
```

Trente-six contrôles arithmétiques automatisés ont été exécutés sans écart.
Le contrôle inverse du scénario central retrouve quatre minutes par validation.

### 11.4 Contrôles passés et validation P4

État après le nouveau contre-audit indépendant P3 :

- 4 970 mots visibles, soit 25 minutes à 200 mots/minute ;
- CSV : 11 lignes, 18 colonnes constantes, HTTP 200, type `text/csv;
charset=UTF-8`, hash local identique au contenu servi
  (`645ea43efd317e1322383ecc329d126b19b8b0b4dfd8aea7ab3e448cca5aeed3`) ;
- 55/55 tests éditoriaux ciblés ;
- TypeScript, ESLint ciblé, Prettier et `git diff --check` conformes ;
- métadonnées et JSON-LD migrés vers les constructeurs partagés ;
- image sociale alignée sur cinq issues, quatre scores et 30 jours ;
- P3 indépendant : 98/100, aucun P0, P1 ou P2 restant, verdict GO ;
- rendu réel clair/sombre contrôlé à 320, 390, 768, 1 024 et 1 440 px ;
- route, téléchargement, image sociale 1 200 × 630 et console contrôlés ;
- rapport :
  `docs/audits/giga-audit-2026-07-24/reviews/prioriser-fonctionnalites-mvp-saas-p3.md`.

État après la revalidation indépendante P4 :

- page publique réauditée sur l’empreinte
  `75480cee0a08737de28b3b7096cb2e3c2df8a7f63af49fc4f71dc9c084f430ff` ;
- score de plume : 18/20 ;
- P0 restant : 0 ; P1 restant : 0 ;
- ouverture sans jargon préalable, titres 6 et 7 orientés décision et passage
  commercial réécrit en langue de dirigeant ;
- mobile réel revérifié à 320 et 390 px : document sans débordement, tableaux
  transformés en cartes et CTA lisible ;
- deux P2 facultatifs demeurent : quelques réserves de sources au rythme
  académique et une section 7 très dense, conservée car elle porte le comparatif
  complet demandé ;
- rapport :
  `docs/audits/giga-audit-2026-07-24/reviews/prioriser-fonctionnalites-mvp-saas-p4.md`.

La page obtient donc le **GO P4 éditorial et mobile**. Ce verdict ne vaut ni
gel du lot global, ni build de production, ni publication, ni indexation.

L’ancien manifeste P4 échoue volontairement parce que la page et le registre
partagé ont changé. Il ne doit être régénéré qu’au gel global, après les
réécritures successives, pas utilisé pour donner une apparence prématurée de
validation.
