# Dossier de recherche — Connecter un ERP, un CRM et un logiciel métier

> Les quatre passes sont terminées localement. Ce document verrouille la
> décision éditoriale, les preuves, les limites et les contrôles de rédaction.
> Il ne vaut ni validation par un dirigeant réel, ni audit technique d'un
> système réel, ni autorisation de publication avant le gel commun du lot.

Le déroulement et les portes de sortie sont définis dans
[`docs/workflow-maitre-guides-4-passes.md`](../workflow-maitre-guides-4-passes.md).

## Journal des quatre passes

Propriétaire éditorial unique : Hagnéré Code

| Passe                        | État                     | Date            | Responsable                      | Snapshot                                                              | Blocages             |
| ---------------------------- | ------------------------ | --------------- | -------------------------------- | --------------------------------------------------------------------- | -------------------- |
| 1. Recherche                 | Terminée — porte validée | 22 juillet 2026 | Agent P1, synthèse Hagnéré Code  | `docs/research/manifests/connecter-erp-crm-logiciel-metier-p1.sha256` | Aucun                |
| 2. Rédaction et intégration  | Terminée — porte validée | 22 juillet 2026 | Agent P2 dédié                   | `docs/research/manifests/connecter-erp-crm-logiciel-metier-p2.sha256` | Aucun pour ouvrir P3 |
| 3. Contre-audit indépendant  | Terminée — porte validée | 22 juillet 2026 | Agent P3 distinct, lecture seule | `docs/research/manifests/connecter-erp-crm-logiciel-metier-p3.sha256` | Aucun pour ouvrir P4 |
| 4. Plume humaine et contrôle | Terminée — porte validée | 22 juillet 2026 | Agent racine                     | `docs/research/manifests/connecter-erp-crm-logiciel-metier-p4.sha256` | Gel commun du lot    |

États autorisés : `À faire`, `En cours`, `Bloquée`, `À reprendre` et
`Terminée — porte validée`. Toute modification d'un fichier après génération
du manifeste de sa passe invalide ce snapshot jusqu'à une nouvelle revue du
diff et un nouveau hash.

### Manifeste du snapshot

| Fichier contrôlé                                     | SHA-256                             | Passe    | Remarque                                                                        |
| ---------------------------------------------------- | ----------------------------------- | -------- | ------------------------------------------------------------------------------- |
| `docs/research/connecter-erp-crm-logiciel-metier.md` | Voir les manifestes frères P1/P2/P3 | P1/P2/P3 | Le dossier ne contient pas son propre hash afin d'éviter une référence instable |

## 1. Fiche d'identité

```text
Slug : connecter-erp-crm-logiciel-metier
Statut actuel : brouillon P2 intégré, prêt pour contre-audit indépendant, non publiable
Requête principale : connecter ERP CRM logiciel métier
Moment du parcours : sécuriser une décision d'intégration avant le chiffrage ou le développement
Lecteur précis : dirigeant de TPE/PME, responsable d'exploitation ou indépendant non technique qui utilise déjà plusieurs logiciels
Situation déclenchante : une affaire gagnée, une commande ou une intervention doit être recopiée entre le CRM, l'ERP et un outil métier ; les doublons et les écarts commencent à coûter du temps ou à fragiliser le suivi
Décision principale après lecture : définir, pour chaque objet partagé, le logiciel qui a le droit de l'écrire, le sens de circulation, les preuves de réception et la reprise sur erreur avant de choisir le connecteur
Niveau de connaissance au départ : sait nommer ses logiciels et ses opérations, mais ne maîtrise pas les API, webhooks, files ou mécanismes de reprise
5 questions indispensables :
1. Quel logiciel fait référence pour le client, la commande, la facture ou l'intervention ?
2. Une information doit-elle circuler dans un seul sens ou dans les deux ?
3. Comment reconnaître la même donnée et la même transmission sans créer de doublon ?
4. Qui voit, corrige et rejoue une transmission refusée ou restée en attente ?
5. Quelles preuves permettent d'accepter la connexion avant la production ?
3 objections ou craintes :
1. « On veut seulement que tout se mette à jour tout seul. »
2. « Notre éditeur dit que le connecteur est bidirectionnel et en temps réel. »
3. « Si une API existe, le projet devrait être simple. »
Action utile sans contact commercial : remplir un contrat de circulation pour un seul objet et faire apparaître les décisions manquantes
CTA possible : faire auditer un premier flux réel et obtenir une carte source-destination-erreur avant tout devis de développement
Hors périmètre : choisir l'ERP ou le CRM, calculer le ROI global de l'automatisation, écrire un cahier des charges complet, conduire une migration, promettre un prix ou un délai, enseigner l'architecture logicielle
Date de la recherche : 22 juillet 2026
Responsable de la synthèse : Hagnéré Code
```

### Décision unique du guide

Le guide ne doit pas répondre à la question vague « comment connecter tous mes
logiciels ? ». Il doit permettre au lecteur d'écrire une décision contrôlable :

> Pour chaque objet ou champ partagé, quel logiciel peut l'écrire, dans quel
> sens l'information circule, comment une transmission répétée ou tardive est
> reconnue, et qui traite un conflit ou une panne ?

Le choix d'une API, d'un connecteur du marché ou d'un développement sur mesure
vient **après** cette décision. Une liste de technologies sans ce contrat
serait hors intention.

### Réponse courte à conserver

Un ERP ne doit pas devenir la « source de vérité » globale par convention. Le
CRM peut rester la référence pour une opportunité commerciale, l'ERP pour une
commande ou une facture, et l'application métier pour une intervention. Il
faut désigner la référence **objet par objet, voire champ par champ**, faire
circuler l'information dans un seul sens par défaut et n'autoriser deux sens
que si les droits d'écriture et la règle de conflit sont écrits.

Cette réponse est une **recommandation éditoriale Hagnéré Code**, fondée sur les
risques documentés de doublon, de nouvelle livraison, d'ordre incertain et de
conflit. Elle ne doit pas être présentée comme une norme universelle.

### Score de lancement P1

| Critère avant rédaction   |   Note / 10 | Justification                                                                                    |
| ------------------------- | ----------: | ------------------------------------------------------------------------------------------------ |
| Proximité avec l'offre    |          10 | Le sujet conduit directement à un audit ou au développement d'un outil interne connecté          |
| Problème vécu             |           9 | Ressaisie, écarts de statut, doublons et erreurs invisibles sont immédiatement compréhensibles   |
| Décision autonome         |          10 | Le contrat de circulation peut être rempli sans acheter une prestation                           |
| Différenciation SERP      |           9 | L'angle porte sur la gouvernance d'un flux et sa reprise, pas sur un catalogue d'API             |
| Preuves disponibles       |           9 | Sources officielles actuelles sur direction, déclenchement, reprise, journalisation et tests     |
| Risque de cannibalisation |           8 | Plusieurs guides voisins existent, mais leurs décisions sont distinctes et explicitement bornées |
| Potentiel de conversion   |           9 | Les cases non résolues rendent visible le besoin d'un audit ciblé sans forcer le contact         |
| Total                     | **64 / 70** | Seuil de lancement dépassé ; aucun volume de recherche ou taux de conversion n'est supposé       |

## 1 bis. Contrat de langage humain

- **Phrase exacte que le lecteur pourrait dire au téléphone :** « Mon CRM, mon
  ERP et notre logiciel d'intervention ne se parlent pas bien : les équipes
  ressaisissent tout et je ne sais plus quelle donnée est la bonne. »
- **Réponse qu'il attend en une phrase :** « Décidez d'abord qui peut modifier
  chaque information, puis exigez une preuve visible pour chaque envoi, chaque
  rejet et chaque reprise. »
- **Terme central expliqué sans jargon :** une connexion entre logiciels est
  un ensemble de règles qui choisit les informations à transmettre, leur sens
  et le comportement à adopter quand la destination ne répond pas.
- **Mots ordinaires employés par le lecteur :** client, devis, commande,
  facture, dossier, intervention, statut, doublon, erreur, ressaisie, attente,
  correction, logiciel qui fait foi.
- **Mots d'agence ou de consultant à éviter :** orchestration, bus, middleware,
  MDM, mapping bidirectionnel, source of truth, event sourcing, résilience,
  idempotence, dead-letter queue, observabilité distribuée.
- **Projet des 150 premiers mots :** ci-dessous.
- **Ce que le lecteur saura décider après ces 150 mots :** commencer par un
  objet précis, nommer le logiciel qui l'écrit et refuser une synchronisation
  à deux sens sans règle de conflit.
- **H2 relus isolément :** oui en P2 ; ils décrivent une action ou une décision
  du lecteur sans dépendre du paragraphe précédent. Une relecture orale reste
  obligatoire en P4.
- **Comparaison comprise à 390 px sans colonne masquée :** les huit champs à
  copier sont intégrés en cartes et le composant des tableaux prévoit un rendu
  mobile ; le contrôle dans un vrai navigateur reste réservé à P4.
- **FAQ dont la première phrase répond :** oui sur la page P2 pour les sept
  questions ; P3 doit encore contredire leur exactitude et leurs limites.
- **CTA formulé comme résultat pour le prospect :** « Obtenir la carte du flux
  à fiabiliser ».

### Projet des 150 premiers mots

> Votre commercial gagne une affaire dans le CRM, le logiciel qui suit les
> prospects. L'ERP, qui gère les commandes et la facturation, doit créer le
> client. L'application métier doit ensuite ouvrir l'intervention. Si chacun
> peut modifier l'adresse ou le statut, la connexion ne supprime pas le
> désordre : elle le fait circuler plus vite.
>
> La première question n'est donc pas « quel connecteur acheter ? ». Pour
> chaque objet — client, commande, facture, intervention — écrivez quel
> logiciel peut le créer et le corriger, où l'information doit aller et ce qui
> arrive si la destination ne répond pas. Commencez par un seul sens. N'en
> autorisez deux que si vous savez quelle version gagne et qui traite le
> conflit.
>
> Vous apprendrez à écrire ce contrat, à distinguer les trois numéros utiles,
> puis à tester doublon, panne et reprise. Vous pourrez décider de connecter,
> limiter l'échange ou garder une étape manuelle.

Décompte de contrôle : 149 mots avec la segmentation par espaces. P2 devra
recompter le rendu final et ne pas ajouter de préambule avant cette situation.

### Définitions autorisées au fil de la lecture

| Terme                | Formulation humaine à employer                                                                            | Limite à rappeler                                                                         |
| -------------------- | --------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| ERP                  | logiciel de gestion qui peut regrouper commandes, achats, stock, facturation ou comptabilité              | son périmètre réel varie selon l'entreprise et le produit                                 |
| CRM                  | logiciel qui suit prospects, clients, opportunités et échanges commerciaux                                | il ne fait pas automatiquement foi pour la commande ou la facture                         |
| Logiciel métier      | outil interne adapté au travail propre de l'entreprise : dossiers, production, interventions ou contrôles | il peut être source pour certains objets et simple lecteur pour d'autres                  |
| Système de référence | logiciel où une information est créée ou corrigée en premier                                              | le désigner par objet ou champ, jamais globalement sans preuve                            |
| API                  | porte documentée qu'un logiciel utilise pour lire, envoyer ou confirmer une information                   | l'existence de la porte ne définit ni les règles métier ni la reprise                     |
| Webhook              | notification envoyée lorsqu'un événement se produit                                                       | la notification peut être répétée ou arriver dans un ordre différent selon le fournisseur |
| File d'attente       | zone où les transmissions patientent avant traitement                                                     | elle doit avoir un suivi, une limite et une issue pour les erreurs définitives            |
| Rejeu sans doublon   | renvoyer la même opération sans créer un second client, une seconde commande ou une seconde facture       | le résultat doit être prouvé avec un identifiant stable et un test                        |
| Liste des rejets     | vue des transmissions que le système n'a pas pu traiter automatiquement                                   | un propriétaire doit corriger puis relancer ou clôturer chaque rejet                      |

### Test sujet, action, résultat

Ces phrases sont des risques de formulation à interdire en P2, pas des
citations d'un brouillon public.

| Phrase initiale                              | Qui agit ?                                  | Action concrète                                                                          | Résultat pour le lecteur                                                | Phrase réécrite                                                                                               |
| -------------------------------------------- | ------------------------------------------- | ---------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| « Définir la gouvernance de la donnée. »     | le dirigeant et les responsables des outils | nomment le logiciel autorisé à créer et corriger chaque champ                            | une adresse ou un statut n'a plus deux versions concurrentes            | « Pour chaque champ partagé, nommez le logiciel où l'équipe doit le corriger. »                               |
| « Assurer la résilience du flux. »           | le système et le responsable d'exploitation | gardent un envoi en attente, signalent le rejet et permettent le rejeu                   | une panne ne devient pas une perte silencieuse                          | « Si la destination ne répond pas, gardez l'envoi, alertez une personne et permettez-lui de le relancer. »    |
| « Implémenter l'idempotence. »               | le connecteur                               | reconnaît une opération déjà traitée grâce à son identifiant                             | un nouvel essai ne crée pas de doublon                                  | « Renvoyer la même transmission ne doit pas créer une seconde commande. »                                     |
| « Mettre en place l'observabilité. »         | le responsable du flux                      | suit les transmissions acceptées, refusées et en attente                                 | il sait où agir avant qu'un utilisateur ne découvre l'erreur            | « Affichez chaque jour ce qui a été reçu, refusé ou laissé en attente. »                                      |
| « Choisir une architecture événementielle. » | l'équipe projet                             | compare le délai utile, le volume, les fonctions réelles des logiciels et la maintenance | elle choisit le mécanisme le plus simple qui tient la contrainte métier | « Choisissez un envoi immédiat ou planifié selon le délai réellement acceptable, pas selon l'effet de mode. » |

### Test de l'ouverture

- [x] la situation vécue apparaît avant la méthode de l'agence ;
- [x] ERP et CRM sont définis au premier usage ; API n'apparaît qu'après sa
      définition ;
- [x] aucun lexique de masse ne retarde la réponse ;
- [x] aucune métaphore ne devient un système à apprendre ;
- [x] la réponse reste honnête sans accumuler les réserves avant l'explication.

## 2. Cannibalisation

| Page existante ou planifiée                 | Intention de cette page                                                    | Différence du nouveau guide                                                                                                             | Lien ou arbitrage nécessaire                                                                                             |
| ------------------------------------------- | -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `automatiser-saisie-donnees-entreprise`     | décider quelle saisie supprimer et où corriger l'information               | le nouveau guide suppose que l'automatisation interlogicielle est justifiée et définit le contrat d'échange, les doublons et la reprise | lien entrant depuis la fin du guide sur la saisie ; lien sortant si le lecteur n'a pas encore choisi l'information utile |
| `automatiser-processus-metier`              | choisir le premier processus à automatiser selon gain, risque et stabilité | le nouveau guide ne classe pas les processus ; il sécurise un flux déjà choisi                                                          | une seule ancre contextuelle, sans reprendre la matrice de priorisation                                                  |
| `erp-ou-logiciel-sur-mesure`                | choisir une architecture standard, configurable, hybride ou sur mesure     | le nouveau guide ne choisit pas le produit ; il précise comment plusieurs produits doivent échanger                                     | lien entrant depuis la section interopérabilité ; lien sortant si le choix d'outils n'est pas tranché                    |
| `cahier-des-charges-application-metier`     | préparer les besoins complets d'une application et sa recette              | le contrat de circulation est un sous-artefact autonome limité à une donnée et à ses erreurs                                            | lien entrant depuis « intégrations » ; lien sortant pour formaliser l'ensemble du projet                                 |
| `application-gestion-interventions-terrain` | organiser le parcours d'une intervention, ses rôles et ses cas terrain     | le nouveau guide ne traite ni planning, ni hors-ligne, ni signature ; il suit seulement la circulation des objets                       | exemple possible « affaire → commande → intervention », sans dupliquer le guide terrain                                  |
| `migrer-logiciel-metier-sans-interruption`  | préparer bascule, retour arrière et continuité lors d'un remplacement      | le nouveau guide ne raconte pas J-30/J-7/J0 ; il traite le fonctionnement permanent après connexion                                     | lien sortant seulement si le lecteur remplace un outil au lieu de le connecter                                           |
| `/services/outils-internes-sur-mesure`      | présenter l'offre de conception d'outils internes                          | le guide donne une méthode autonome et des critères de non-investissement                                                               | CTA tardif vers un audit de flux, pas une répétition commerciale de la page service                                      |

**Justification d'une URL distincte :** aucune page voisine ne permet au
dirigeant de décider, pour un objet partagé, qui peut l'écrire, comment éviter
un doublon et comment corriger puis rejouer une transmission refusée.

### Frontières obligatoires pour P2

- Ne pas refaire un cours général sur l'automatisation.
- Ne pas comparer dix ERP, CRM, iPaaS ou connecteurs.
- Ne pas choisir standard contre sur mesure.
- Ne pas écrire la chronologie d'une migration.
- Ne pas promettre de supprimer toutes les ressaisies.
- Ne pas détailler l'implémentation d'un bus de messages.
- Ne pas présenter l'ERP comme propriétaire universel de la donnée.

## 3. Demande et vocabulaire du lecteur

### Observation qualitative

Mode d'observation : résultats web français consultés le 22 juillet 2026 pour
les requêtes ci-dessous. Cette lecture sert à comprendre les formulations et
les réponses déjà proposées. Elle ne fournit ni volume de recherche, ni
difficulté SEO, ni position future.

Requêtes observées :

- `connecter ERP CRM logiciel métier` ;
- `synchroniser CRM ERP éviter doublons` ;
- `intégration ERP CRM source de vérité données` ;
- `connecter logiciels entreprise API erreurs reprise` ;
- `synchronisation bidirectionnelle CRM ERP conflits`.

### Questions réellement visibles ou reformulées à partir des résultats

- Peut-on connecter un logiciel sur mesure à un ERP ou un CRM existant ?
- Quelle différence entre API, webhook et export de fichier ?
- La synchronisation doit-elle être immédiate ou planifiée ?
- Comment éviter de créer deux fois le même client ?
- Que se passe-t-il quand l'API ne répond pas ?
- Quel logiciel est la source de la donnée ?
- Une synchronisation bidirectionnelle garde-t-elle toujours les données à jour ?
- Comment voir et rejouer les erreurs ?

### Formulations à privilégier

| Intention du lecteur     | Formulation éditoriale naturelle                                              | Formulation à éviter                         |
| ------------------------ | ----------------------------------------------------------------------------- | -------------------------------------------- |
| trouver la bonne version | « Dans quel logiciel l'équipe doit-elle corriger l'adresse ? »                | « Quel MDM fait autorité ? »                 |
| éviter un doublon        | « Comment reconnaître une commande déjà reçue ? »                             | « Quelle stratégie d'idempotency ? »         |
| suivre une panne         | « Qui voit qu'un dossier n'est jamais arrivé ? »                              | « Quelle stack d'observabilité ? »           |
| reprendre une erreur     | « Peut-on corriger puis renvoyer sans tout recommencer ? »                    | « Quel mécanisme de dead-letter et retry ? » |
| choisir le délai         | « Combien de minutes ou d'heures peut-on attendre sans bloquer le travail ? » | « Faut-il une architecture event-driven ? »  |
| limiter le flux          | « Quelles informations sont réellement nécessaires dans l'autre outil ? »     | « Comment synchroniser le modèle complet ? » |

### Hypothèses non mesurées

- Le guide suppose que des dirigeants recherchent ce sujet après avoir constaté
  des ressaisies ou incohérences ; aucune donnée propriétaire ne mesure ce
  déclencheur.
- La requête principale est un choix éditorial issu de l'intention et de la
  roadmap ; ce dossier ne contient pas de volume issu de Search Console ou
  d'un outil SEO.
- Aucun pourcentage de projets en échec, de temps économisé ou de budget
  d'intégration ne sera publié sans corpus daté et méthode reproductible.
- Les mots « temps réel », « zéro erreur » et « données toujours à jour » sont
  des promesses concurrentes observées, pas des bénéfices acquis.

## 4. Carte concurrentielle

| Page                                                                                                                                                                     | Réponse et angle                                                                    | Preuves ou artefacts                        | Bon point                                                        | Manque décisionnel                                                                                                | Conflit d'intérêt éventuel                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------- | ------------------------------------------- | ---------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| [Spot My Web — connecter un logiciel métier via API](https://spotmyweb.fr/le-blog/api-rest-logiciel-metier-integration)                                                  | présente API REST, webhook et échanges de fichiers                                  | exemples de mécanismes et questions d'audit | relie la technique à un cas concret                              | affirme une part de budget sans méthode visible et ne livre pas un contrat complet de reprise                     | agence qui vend le développement décrit     |
| [Codisys — connecteur API pour logiciel métier](https://codisys.fr/connecteur-api-logiciel-metier.html)                                                                  | part des doubles saisies et décrit API, webhook, export, suivi d'erreurs            | liste de cas et visibilité des statuts      | explique qu'un connecteur ne se réduit pas à déplacer une donnée | reste une page de service ; n'impose pas la référence par objet ni les trois identifiants                         | prestataire du service recommandé           |
| [Stratenet — synchronisation de données](https://www.stratenet.com/glossaire/synchronisation-de-donnees)                                                                 | définit sens unique, double sens, référence par champ et conflits                   | glossaire daté, exemples courts             | vocabulaire très proche de la décision utile                     | explication brève, sans acceptation, compte de rapprochement ni scénario de reprise                               | contenu d'agence, même s'il est pédagogique |
| [ERP Conseil — intégrations ERP](https://erp-conseil.fr/blog/erp-integrations)                                                                                           | guide technique et fonctionnel pour connecter ERP, CRM, WMS ou métier               | mention de file, alertes et reprise         | reconnaît que les erreurs doivent être prévues                   | angle centré ERP et estimation commerciale ; la décision par objet reste secondaire                               | cabinet ERP avec outil d'estimation         |
| [Mekso — connecter CRM, ERP et e-commerce](https://www.mekso.fr/blog/connecter-crm-erp-ecommerce)                                                                        | présente plusieurs modèles d'intégration et la résilience                           | exemples de files, tentatives et alertes    | couvre la panne au-delà de la simple API                         | statistiques et généralités commerciales non justifiées ; peu de protocole d'acceptation lisible par un dirigeant | agence qui vend l'intégration               |
| [Microsoft Learn — déterminer les exigences d'intégration](https://learn.microsoft.com/en-us/power-platform/architecture/key-concepts/integration-patterns/requirements) | part du volume, de la fréquence, du sens, du déclenchement et des capacités réelles | grille officielle d'architecture            | solide pour cadrer avant le choix technique                      | documentation fournisseur, plus technique et liée à son écosystème                                                | éditeur d'une plateforme d'intégration      |

**Angle mort commun :** les pages commencent souvent par l'API, le connecteur
ou le « temps réel ». Peu livrent au dirigeant un contrat copiable qui désigne
la référence par objet, sépare les trois identifiants, prévoit les arrivées
répétées ou tardives et nomme le responsable de chaque rejet.

**Valeur originale que le guide apportera :** faire remplir et éprouver le
« contrat de circulation d'une donnée » sur un exemple fictif comptable :
nombre attendu, accepté, refusé et en attente, puis correction et rejeu sans
création supplémentaire.

## 5. Fiche de preuves

### Sources primaires et affirmations autorisées

| Affirmation utilisable                                                                                                                                                                                    | Source primaire, URL et passage utile                                                                                                                                                                                                  | Nature                               | Périmètre                                                                                                          | Date / consultation                               | Confiance                                                            | Emplacement du lien visible                                 | Conséquence lecteur                                                                                          | Fraîcheur                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------- | -------------------------------------------------------------------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | --------------------------------------- |
| Un ERP peut intégrer plusieurs fonctions de gestion autour d'une base partagée ; si un autre outil est conservé, il faut vérifier la possibilité de communication par API, connecteur ou service          | [France Num — Pourquoi et comment choisir un ERP ?](https://www.francenum.gouv.fr/guides-et-conseils/pilotage-de-lentreprise/logiciels-de-gestion-de-lentreprise/pourquoi-et-comment), définitions et conseil sur l'interopérabilité   | guide public français                | cadrage ERP pour TPE/PME ; ne dit pas que l'ERP doit posséder toute donnée                                         | consulté le 22/07/2026                            | élevée pour la définition, moyenne pour toute généralisation produit | première définition ERP ou encadré « avant de connecter »   | vérifier les capacités réelles des logiciels conservés                                                       | à revoir tous les 12 mois               |
| Une intégration se cadre par volume, fréquence, direction, déclenchement et capacités réelles de chaque système ; le système le plus limité borne la solution                                             | [Microsoft Learn — Determine integration requirements](https://learn.microsoft.com/en-us/power-platform/architecture/key-concepts/integration-patterns/requirements), sections volume/frequency, directionality, capability et trigger | documentation d'architecture éditeur | Power Platform, principes transposables avec attribution ; pas une norme juridique                                 | consulté le 22/07/2026                            | élevée dans ce périmètre                                             | section « cinq décisions avant l'API »                      | demander le délai acceptable et les fonctions réellement disponibles avant de choisir le mécanisme           | à revoir tous les 12 mois               |
| Une API peut aider à gérer, sécuriser et minimiser les accès, mais ses rôles, droits, risques, lectures/écritures et traces doivent être définis                                                          | [CNIL — API : recommandations sur le partage de données](https://www.cnil.fr/fr/api-les-recommandations-de-la-cnil-sur-le-partage-de-donnees), rôles, analyse de risques, droits et traçabilité                                        | recommandation d'autorité            | uniquement lorsque des données personnelles sont partagées ; responsabilités à apprécier au cas par cas            | publié le 24/11/2023, consulté le 22/07/2026      | élevée dans ce périmètre                                             | encadré données personnelles, près des règles d'accès       | ne transmettre que les champs nécessaires et séparer lecture de modification                                 | à revoir tous les 12 mois               |
| Les opérations sur des données personnelles doivent être tracées et les journaux surveillés ; les traces ne doivent pas recopier inutilement les données                                                  | [CNIL — Tracer les opérations](https://www.cnil.fr/fr/securite-tracer-les-operations), actions métier, interventions, anomalies, contenu et supervision des journaux                                                                   | recommandation d'autorité            | sécurité de traitements de données personnelles                                                                    | publié le 14/03/2024, consulté le 22/07/2026      | élevée                                                               | section « garder les erreurs visibles »                     | prévoir un numéro de trace, un accès limité et une surveillance réelle                                       | à revoir tous les 12 mois               |
| Les tests doivent être complets, se dérouler hors production et utiliser des données fictives ou anonymisées autant que possible                                                                          | [CNIL — Encadrer les développements informatiques](https://www.cnil.fr/fr/securite-encadrer-les-developpements-informatiques), lignes sur tests, environnement distinct et données fictives/anonymisées                                | recommandation d'autorité            | développement impliquant des données personnelles ; exception encadrée pour une préproduction avec données réelles | publié le 14/03/2024, consulté le 22/07/2026      | élevée                                                               | section de recette, au niveau de la recommandation          | éprouver panne, doublon et reprise sans utiliser par défaut les dossiers clients réels                       | à revoir tous les 12 mois               |
| Dans le service de files Azure documenté, une livraison « au moins une fois » peut répéter un message ; une expiration d'attente n'exclut pas que l'envoi ait réussi                                      | [Microsoft Learn — Service Bus message loss and duplicates](https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-message-loss-and-duplicates), sections at-least-once, duplicates, `MessageId` et ordre           | documentation produit                | Azure Service Bus ; exemple concret, pas propriété de toutes les API                                               | mise à jour le 29/06/2026, consulté le 22/07/2026 | élevée pour ce produit                                               | encadré « concevoir comme si un envoi pouvait être répété » | conserver un identifiant d'opération et tester un renvoi après réponse perdue                                | à revoir tous les 6 mois                |
| Les erreurs transitoires peuvent être retentées avec une limite ; les erreurs persistantes doivent sortir vers une zone d'échec surveillée ; retenter une écriture non protégée peut dupliquer ses effets | [Microsoft Learn — Handle transient faults](https://learn.microsoft.com/en-us/azure/well-architected/design-guides/handle-transient-faults), retry finite, logging, dead-letter et opérations non idempotentes                         | guide d'architecture éditeur         | Azure Well-Architected ; à traduire en exigences, pas en architecture imposée                                      | consulté le 22/07/2026                            | élevée dans ce périmètre                                             | section panne et reprise                                    | distinguer « attendre puis réessayer » de « corriger puis rejouer » et fixer une issue                       | à revoir tous les 12 mois               |
| Un appel asynchrone répété après une réponse perdue peut être protégé par une clé qui identifie la même opération                                                                                         | [Microsoft Learn — Asynchronous Request-Reply pattern](https://learn.microsoft.com/en-us/azure/architecture/patterns/asynchronous-request-reply), duplicate POST et idempotency key                                                    | patron d'architecture éditeur        | requêtes asynchrones HTTP ; pas une obligation de protocole universelle                                            | consulté le 22/07/2026                            | élevée dans ce périmètre                                             | section sur le numéro de transmission                       | exiger que le même numéro d'opération ne crée pas un second effet métier                                     | à revoir tous les 12 mois               |
| Les identifiants de corrélation permettent de suivre une même opération entre services, tandis que les clés d'idempotence évitent de répéter les effets d'une écriture                                    | [Microsoft Learn — Microservices assessment](https://learn.microsoft.com/en-us/azure/architecture/guide/technology-choices/microservices-assessment), correlation IDs et idempotency keys                                              | guide d'architecture éditeur         | architecture distribuée ; le modèle public des trois numéros est une simplification Hagnéré Code                   | mise à jour le 26/06/2026, consulté le 22/07/2026 | élevée dans ce périmètre                                             | section « trois numéros »                                   | ne pas confondre numéro client/commande, numéro de transmission et numéro de parcours technique              | à revoir tous les 12 mois               |
| Un fournisseur de webhooks réel documente les nouvelles tentatives, les doublons possibles et l'absence de garantie d'ordre                                                                               | [Stripe Docs — Webhooks](https://docs.stripe.com/webhooks), comportement de livraison, ordre, doublons et traitement asynchrone                                                                                                        | documentation produit                | webhooks Stripe uniquement ; illustration d'un contrat fournisseur à lire                                          | consulté le 22/07/2026                            | élevée pour Stripe                                                   | exemple court dans la section notification                  | ne jamais déduire « une notification = un traitement unique et ordonné » sans lire le contrat du fournisseur | à revoir tous les 6 mois                |
| Une API HTTP peut être décrite de façon compréhensible pour les humains et les outils, avec opérations, demandes, réponses et erreurs                                                                     | [OpenAPI Specification 3.2.0](https://spec.openapis.org/oas/latest.html), introduction et définition de description d'API                                                                                                              | standard technique                   | interfaces HTTP décrites en OpenAPI ; ne remplace pas le contrat métier                                            | version du 19/09/2025, consultée le 22/07/2026    | élevée                                                               | checklist fournisseur, lien secondaire                      | demander une documentation actuelle de l'interface, mais écrire séparément les règles métier et la reprise   | à revoir à chaque changement de version |

### Recommandations Hagnéré Code à étiqueter comme telles

Ces recommandations résultent d'une synthèse des risques documentés. P2 ne doit
pas les faire passer pour des obligations légales ou des normes universelles.

1. **Référence par objet ou champ, jamais « ERP maître de tout ».** Une affaire
   peut faire foi dans le CRM, une commande dans l'ERP et une intervention dans
   l'outil métier.
2. **Sens unique par défaut.** Le double sens n'est accepté que pour des champs
   explicitement autorisés, avec une règle de conflit et un responsable.
3. **Trois identifiants distincts.** Un numéro métier identifie le client ou la
   commande ; un numéro d'opération reconnaît le même envoi ; un numéro de trace
   suit le parcours dans les journaux.
4. **Concevoir tout flux critique comme si une transmission pouvait être
   répétée, retardée, partiellement rejetée ou reçue hors ordre**, sauf si le
   contrat du fournisseur démontre autre chose.
5. **Le webhook signale, la file absorbe, l'API transmet ou confirme.** Ces rôles
   peuvent être combinés ou remplacés ; ce ne sont ni trois produits
   obligatoires ni des synonymes.
6. **Une erreur définitive reste visible.** Elle rejoint une liste surveillée,
   avec propriétaire, motif, correction, rejeu et preuve de clôture.
7. **Chaque mise en service rapproche les comptes.** Le total attendu doit être
   égal à la somme des transmissions acceptées, refusées et encore en attente.
8. **L'interface utilisateur n'est pas un plan B automatique.** Si aucune API ou
   export stable n'existe, un import contrôlé ou une étape manuelle peut être
   plus honnête qu'une automatisation fragile de clics.

### Contradictions et données à ne pas publier

- Ne pas reprendre la fourchette « 20 à 35 % du budget » observée chez un
  concurrent : aucune méthode ou assiette vérifiable n'a été trouvée.
- Ne pas publier « 90 % des projets PME suivent les mêmes modèles » ni « une
  PME utilise en moyenne 8 à 12 outils » : ces chiffres commerciaux n'ont pas
  de corpus primaire daté dans ce dossier.
- Ne pas écrire qu'une API REST est toujours le mécanisme « le plus simple et
  le plus fiable » : cela dépend des fonctions, volumes, délais, limites et
  compétences d'exploitation.
- Ne pas promettre une synchronisation invisible, instantanée, sans erreur ou
  « zéro ressaisie ».
- Ne pas dire que tous les webhooks ou toutes les files garantissent une
  livraison au moins une fois : les comportements cités sont propres aux
  produits documentés.
- Ne pas assimiler anonymisation et pseudonymisation. Une donnée réellement
  anonymisée ne doit plus permettre l'identification ; sinon elle reste une
  donnée personnelle à protéger.
- Ne pas transformer les recommandations CNIL en audit RGPD complet ou en
  validation juridique du projet du lecteur.
- Ne pas inventer un prix, un délai, un gain horaire, un taux d'erreur ou un
  volume de recherche.

### Arbitrages factuels à expliquer honnêtement

| Sujet                | Réponse trop simple à refuser               | Réponse exacte du guide                                                                                     |
| -------------------- | ------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| système de référence | « l'ERP est toujours maître »               | la référence dépend de l'objet et peut descendre au champ ; elle est écrite avant l'échange                 |
| double sens          | « c'est plus complet »                      | il augmente le nombre de modifications concurrentes ; l'autoriser seulement avec champs et conflits définis |
| temps réel           | « plus rapide est meilleur »                | choisir le délai maximal que le métier peut accepter et la solution la plus simple qui le respecte          |
| retry                | « on réessaie jusqu'à ce que ça marche »    | limiter les essais automatiques ; rendre les échecs persistants visibles et corrigeables                    |
| accusé de réception  | « pas d'erreur signifie reçu »              | distinguer envoyé, accepté, refusé et en attente ; rapprocher les comptes                                   |
| journal              | « garder toutes les données pour enquêter » | tracer l'opération sans recopier inutilement les données personnelles                                       |
| API                  | « l'API résout l'intégration »              | l'API expose des capacités ; les règles métier, les droits et la reprise restent à décider                  |

### Calculs reproductibles

Le guide ne calcule ni ROI ni budget. Il utilise un **test fictif de
rapprochement** pour rendre la fiabilité vérifiable.

#### Scénario fictif, non issu d'un client

Une entreprise fictive de maintenance traite 30 affaires gagnées. Pour chaque
affaire, le scénario retenu prévoit trois opérations distinctes :

1. le CRM demande à l'ERP de créer ou rattacher le client et la commande ;
2. l'ERP demande au logiciel métier d'ouvrir l'intervention ;
3. le logiciel métier renvoie à l'ERP le statut de fin utile à la suite du
   traitement.

Formule :

```text
opérations attendues = 30 affaires × 3 opérations par affaire = 90 opérations
```

État après un premier passage fictif :

```text
85 acceptées + 3 refusées + 2 en attente = 90 opérations attendues
```

Après correction des trois refus et retour de la destination pour les deux en
attente :

```text
90 opérations distinctes acceptées + 0 refusée + 0 en attente = 90 attendues
```

Le test simule ensuite la perte de cinq accusés de réception. Les cinq mêmes
opérations sont renvoyées avec le **même numéro d'opération** :

```text
90 opérations distinctes avant rejeu
+ 5 transmissions répétées reconnues comme déjà traitées
= 90 opérations distinctes après rejeu, et non 95
```

Contrôle inverse :

```text
90 attendues - 90 distinctes acceptées = 0 opération non expliquée
```

Hypothèses : les trois opérations sont déjà justifiées par le processus ;
chaque opération possède un identifiant stable ; « acceptée » signifie que la
destination a confirmé un résultat métier attendu, pas seulement reçu un
paquet technique.

Exclusions : coût, durée, performance, valeur commerciale, taux d'erreur réel,
volume quotidien réel. P2 doit afficher **Exemple fictif** au-dessus de tous
ces nombres.

## 6. Empreinte éditoriale à ne pas reproduire

| Guide voisin                               | Type d'ouverture                                               | Progression                                          | Dispositif récurrent                  | Type d'exemple            | Place du CTA            | Type de conclusion           |
| ------------------------------------------ | -------------------------------------------------------------- | ---------------------------------------------------- | ------------------------------------- | ------------------------- | ----------------------- | ---------------------------- |
| `automatiser-saisie-donnees-entreprise`    | suit une information ressaisie                                 | repérer, choisir, corriger, automatiser              | fiche de saisie et propriétaire       | dossier ou donnée copiée  | après la méthode        | prochaine saisie à supprimer |
| `automatiser-processus-metier`             | part d'une journée et de tâches répétées                       | classer les processus puis tester un pilote          | matrice gain/risque/stabilité         | processus fictif chiffré  | après la priorisation   | plan d'action court          |
| `erp-ou-logiciel-sur-mesure`               | opposition entre adaptation à l'outil et adaptation de l'outil | comparer standard, configurable, hybride, sur mesure | grille de démonstration et coût total | arbitrage d'architecture  | après la comparaison    | note de décision             |
| `cahier-des-charges-application-metier`    | projet qui semble clair mais reste interprétable               | objectifs, scénarios, données, rôles, recette        | dossier de cadrage complet            | projet métier multi-rôles | après l'artefact        | passage au chiffrage         |
| `migrer-logiciel-metier-sans-interruption` | peur d'arrêter l'activité                                      | J-30, J-7, J0, retour arrière                        | chronologie de bascule                | migration contrôlée       | après le plan de retour | décision de bascule          |

Choix du nouveau guide :

```text
Tension ou question motrice : une connexion peut-elle transmettre une information sans transmettre aussi les incohérences et les pannes ?
Type d'ouverture retenu et pourquoi : chaîne très concrète affaire → commande → intervention ; elle parle immédiatement au dirigeant et montre le risque sans catastrophe artificielle
Progression retenue et pourquoi : objet → autorité → sens → transport → identifiants → erreurs → preuve ; chaque section ferme une décision avant la suivante
Artefact signature : contrat de circulation d'une donnée
Rythme/registre de voix : phrases courtes, verbes concrets, questions du responsable d'entreprise ; une définition juste avant son usage, jamais un glossaire initial
Place naturelle du CTA : après le contrat rempli et le test de reprise ; le lecteur sait alors ce qu'il peut faire seul et ce qui exige un audit réel
Forme de conclusion : décision à trois issues — connecter, limiter l'échange ou conserver une étape manuelle
Au moins trois différences avec les guides voisins :
1. suit une transmission de bout en bout, pas un processus complet ;
2. sépare trois identifiants au lieu de produire une matrice de priorité ;
3. finit par un rapprochement de comptes et un rejeu, pas par un ROI ou une chronologie ;
4. l'artefact est répété une fois par objet, pas un cahier des charges global ;
5. la conclusion autorise explicitement l'absence de connexion.
```

### Garde-fous de plume

- Pas plus d'un terme technique nouveau par paragraphe.
- La traduction humaine précède le terme technique éventuel.
- Chaque H2 doit annoncer une action ou une décision, pas une discipline.
- Les mots « robuste », « fiable », « fluide », « sécurisé » et « évolutif »
  sont interdits s'ils ne sont pas suivis d'une preuve observable.
- Une liste de risques doit toujours déboucher sur le responsable et le test.
- Les métaphores « portes », « ponts », « colonne vertébrale » et « tuyaux » ne
  doivent pas structurer l'article.
- Le scénario fictif reste identique du début à la fin ; aucun changement de
  secteur en cours de guide.
- Aucun CTA avant que le lecteur ait reçu l'artefact et le protocole de test.

## 7. Plan annoté

### Promesse éditoriale

À la fin, un dirigeant non technique peut prendre un objet réel — par exemple
une commande — et produire une fiche qui dit où il naît, qui peut le modifier,
où il doit aller, comment reconnaître une répétition et qui reprend une erreur.
Il peut aussi décider qu'une connexion n'est pas encore raisonnable.

| Section provisoire                                                        | Question résolue                                              | Preuve ou exemple                                                                  | Conséquence / décision                                                  | Format choisi                                   |
| ------------------------------------------------------------------------- | ------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------- |
| Ouverture — Une affaire gagnée peut créer trois versions différentes      | Pourquoi « brancher les logiciels » ne suffit-il pas ?        | chaîne fictive CRM → ERP → intervention                                            | commencer par une donnée et ses responsables, pas par l'API             | scène courte + réponse directe                  |
| 1. Commencez par l'objet qui doit réellement circuler                     | Que veut-on transmettre et pour quel résultat ?               | tableau client, commande, facture, intervention                                    | retenir un seul objet pilote et exclure les champs inutiles             | mini-carte en quatre questions                  |
| 2. Décidez où chaque information doit être corrigée                       | Quel logiciel fait référence ?                                | exemples par objet et par champ ; France Num pour le contexte ERP                  | nommer l'auteur autorisé ; ne pas élire un outil maître de tout         | cartes « objet / champ / qui écrit / qui lit »  |
| 3. Faites circuler dans un seul sens tant que le conflit n'est pas réglé  | Quand le double sens est-il justifié ?                        | exemple adresse commerciale contre statut de facture ; cas de deux modifications   | choisir sens unique ou écrire la règle de conflit et son responsable    | comparaison courte à deux cartes                |
| 4. Ne confondez pas signaler, transmettre et attendre                     | À quoi servent webhook, API et file ?                         | rôle documenté de chaque mécanisme, sans imposer de produit                        | demander le contrat de livraison et le délai utile                      | schéma textuel simple + trois cartes            |
| 5. Donnez trois numéros différents au même parcours                       | Comment reconnaître l'objet, le même essai et sa trace ?      | commande `CMD-1042`, opération `OP-...`, trace `TR-...` fictives                   | exiger trois champs distincts dans le contrat et les journaux           | exemple annoté, sans code                       |
| 6. Écrivez ce qui se passe si l'information arrive deux fois ou trop tard | Comment éviter doublon, ordre incorrect et conflit ?          | documentations Microsoft et Stripe, correctement limitées                          | tester répétition, retard, mise à jour avant création et réponse perdue | scénarios « si / alors / preuve »               |
| 7. Une erreur n'est résolue que lorsqu'une personne peut la reprendre     | Que devient un rejet après les tentatives automatiques ?      | recommandations de journalisation CNIL et guide Microsoft sur erreurs transitoires | nommer propriétaire, alerte, correction, rejeu et clôture               | file d'erreurs traduite en liste d'actions      |
| 8. Remplissez le contrat de circulation d'une donnée                      | Quel livrable remettre à l'équipe ou au prestataire ?         | artefact signature et exemple partiellement rempli                                 | faire apparaître les cases inconnues avant le devis                     | fiche copiable, puis exemple fictif             |
| 9. Prouvez la reprise sans utiliser la production                         | Quels tests faut-il voir réussir ?                            | CNIL sur environnement distinct et données fictives ; calcul 90/85/3/2             | accepter ou refuser la mise en service sur des résultats observables    | checklist de recette + tableau de rapprochement |
| 10. Renoncez à connecter quand personne ne peut exploiter le flux         | Dans quels cas une étape manuelle est-elle plus rationnelle ? | limites des capacités, absence d'auteur ou de reprise                              | choisir connexion, échange limité ou contrôle manuel                    | feu tricolore décisionnel sans score artificiel |
| Conclusion — La connexion est prête quand l'erreur a aussi un chemin      | Quelle décision emporter ?                                    | rappel des quatre réponses du contrat                                              | lancer un objet pilote ou demander un audit ciblé                       | conclusion brève + CTA unique                   |

### Artefact signature — contrat de circulation d'une donnée

Le guide public doit livrer cette fiche dans la page, copiable sans formulaire
ni e-mail. Une ligne est remplie **pour un objet et un trajet précis**, pas pour
« toutes les données de l'entreprise ».

```text
CONTRAT DE CIRCULATION D'UNE DONNÉE

1. Résultat métier attendu
- Objet concerné :
- Action qui déclenche l'échange :
- Résultat visible attendu dans le logiciel destinataire :
- Délai maximal acceptable pour le métier :

2. Référence et droits d'écriture
- Logiciel de référence pour l'objet :
- Champs qui font référence ailleurs, s'il y en a :
- Rôles autorisés à créer :
- Rôles autorisés à corriger :
- Logiciels qui ne font que lire :

3. Circulation
- Source :
- Destination :
- Sens unique : oui / non
- Si double sens, champs concernés :
- Si deux valeurs se contredisent, règle et responsable :
- Champs transmis :
- Champs volontairement exclus :

4. Déclenchement et capacités réelles
- À la demande / à heure fixe / après un événement :
- Volume normal et pointe observée :
- Documentation actuelle de l'interface :
- Limites connues, maintenance et version :

5. Trois identifiants
- Identifiant de l'objet métier :
- Identifiant stable de l'opération ou de la transmission :
- Identifiant de trace du parcours :

6. Acceptation et cas anormaux
- Validation avant envoi :
- Confirmation attendue de la destination :
- Si le même envoi revient :
- Si une mise à jour arrive avant la création :
- Si la destination ne répond pas :
- Nombre maximal d'essais automatiques :
- Mode manuel temporaire :

7. Rejets et reprise
- Où voit-on accepté / refusé / en attente :
- Qui reçoit l'alerte :
- Qui corrige la cause :
- Qui autorise le rejeu :
- Preuve qu'un rejet est clos :
- Rapprochement attendu = accepté + refusé + en attente :

8. Données, accès et tests
- Données personnelles réellement nécessaires :
- Droits de lecture et d'écriture :
- Contenu et durée des traces à confirmer :
- Jeu de données fictif ou anonymisé :
- Tests doublon, retard, panne, rejet partiel, correction et rejeu :
- Propriétaire du contrat et date de prochaine revue :
```

### Exemple fictif partiellement rempli

```text
Objet : ordre d'intervention
Résultat : après validation d'une commande dans l'ERP, une intervention existe dans l'outil métier avec le bon client, le bon site et le bon statut initial
Référence : l'ERP écrit le numéro de commande et le client facturé ; l'outil métier écrit la date et le statut d'intervention
Sens : ERP → outil métier pour la création ; outil métier → ERP uniquement pour le statut de fin prévu
Conflit : aucun des deux outils ne peut corriger les champs dont l'autre fait référence ; une divergence crée une alerte, pas une écriture silencieuse
Identifiant métier : CMD-1042, exemple fictif
Identifiant d'opération : OP-CMD-1042-CREATION-V1, exemple fictif
Identifiant de trace : TR-20260722-00017, exemple fictif
Répétition : la même opération renvoie le résultat déjà obtenu et ne crée pas une seconde intervention
Panne : trois essais automatiques fictifs, puis passage en liste des rejets ; ce nombre est un choix du scénario, pas une recommandation universelle
Propriétaire du rejet : responsable d'exploitation fictif
Preuve : les 90 opérations attendues sont expliquées entre acceptées, refusées et en attente ; après reprise, 90 opérations distinctes sont acceptées
```

### Conditions minimales du double sens

P2 peut présenter le double sens comme possible uniquement si les six réponses
suivantes sont écrites :

1. les champs modifiables dans chaque logiciel ;
2. le moyen de reconnaître le même objet des deux côtés ;
3. la règle si deux personnes modifient le même champ ;
4. le comportement si la seconde modification arrive avant la première ;
5. la manière d'éviter qu'une mise à jour déclenche une boucle ;
6. la personne qui arbitre les conflits non résolus.

« La dernière modification gagne » n'est pas une réponse suffisante sans
horloges cohérentes, effet métier accepté et règle pour les corrections
rétroactives. Le guide doit préférer un champ en lecture seule dans le logiciel
secondaire lorsqu'aucun arbitrage métier clair n'existe.

### Protocole de recette prévu

| Test                        | Action fictive                                       | Résultat observable attendu                                                              | Preuve à conserver                              |
| --------------------------- | ---------------------------------------------------- | ---------------------------------------------------------------------------------------- | ----------------------------------------------- |
| transmission normale        | envoyer une opération nouvelle et valide             | un seul objet correct apparaît, avec confirmation                                        | identifiants métier, opération et trace         |
| même transmission deux fois | renvoyer exactement le même identifiant d'opération  | aucun deuxième objet ni deuxième effet                                                   | compte avant/après et réponse de la destination |
| réponse perdue              | traiter l'opération puis simuler l'absence d'accusé  | le rejeu retrouve le résultat sans le recréer                                            | journal des deux essais et objet unique         |
| arrivée hors ordre          | envoyer une mise à jour avant la création            | mise en attente, refus explicite ou traitement prévu ; jamais une correction silencieuse | statut et motif visible                         |
| destination indisponible    | interrompre la destination de test                   | essais limités, puis attente ou rejet visible                                            | heure, nombre d'essais, alerte et état final    |
| lot partiellement invalide  | rendre trois opérations invalides dans un lot fictif | les réussites et les refus sont distingués                                               | 85 + 3 + 2 = 90 dans le scénario                |
| correction et rejeu         | corriger la cause puis relancer seulement les refus  | les trois deviennent acceptés sans répéter les 85                                        | historique de correction et rapprochement final |
| conflit de double écriture  | modifier un champ autorisé des deux côtés            | règle écrite appliquée ou intervention humaine créée                                     | deux valeurs d'entrée et décision finale        |
| retrait ou annulation       | annuler une commande déjà transmise                  | effet prévu : annuler, archiver ou bloquer, sans suppression improvisée                  | statut des deux systèmes et trace               |
| droit insuffisant           | retirer un droit au compte de test                   | refus explicite, aucune élévation silencieuse                                            | erreur, alerte et absence de modification       |

### Quand ne pas connecter

Le guide doit autoriser une conclusion « ne pas investir maintenant » si au
moins une condition structurante reste vraie :

- personne ne sait quel logiciel fait référence ;
- les règles changent chaque semaine et aucune version n'est assumée ;
- le volume est faible et un import contrôlé reste moins risqué ;
- l'éditeur ne fournit ni interface stable ni export documenté ;
- aucune personne ne peut surveiller et reprendre les rejets ;
- le besoin porte seulement sur une consultation occasionnelle ;
- les droits sur les données et les responsabilités ne sont pas clarifiés ;
- un simple changement d'organisation supprime la double saisie sans connexion.

## 8. Ressource et conversion

```text
Une ressource est-elle naturellement nécessaire ? oui, mais elle doit être livrée directement dans la page en premier lieu
Problème qu'elle résout après la lecture : transformer une discussion vague sur « la synchronisation » en décisions vérifiables par objet
Résultat autonome produit : un contrat de circulation rempli et une liste précise des inconnues à résoudre
Format éditable et format de consultation : bloc copiable dans la page ; un fichier éditable ne sera annoncé que s'il est réellement généré, testé et maintenu
Rubriques, champs ou matrices réellement livrés : résultat, référence, droits, sens, délai, champs, trois identifiants, confirmation, répétition, panne, rejets, propriétaire, rapprochement, données et recette
Exemple rempli : ordre d'intervention fictif lié à une commande ERP
Conclusion « ne pas investir » possible : oui, explicitement si la référence, l'exploitation ou l'interface ne sont pas maîtrisées
Sources, hypothèses et limites visibles : liens primaires au niveau des affirmations ; exemple et nombres étiquetés fictifs
Données saisies et destination de ces données : aucune donnée envoyée à Hagnéré Code dans la version intégrée à la page
Processus de génération reproductible : non applicable au bloc copiable ; tout futur fichier doit être généré depuis une source versionnée
Journal de QA : à compléter en P2/P4 si un téléchargement est créé ; sinon vérifier copie, ordre des champs, clavier, 390 px et impression
Limites connues et niveau de revue humaine : la fiche ne remplace ni audit technique des interfaces, ni analyse juridique, ni recette sur les produits réels
Mode de maintenance : revue des sources tous les 6 à 12 mois et à chaque changement majeur d'éditeur cité
Test du fichier ou outil : non applicable en P1 ; le bloc doit être copié-collé et relu en P4
Bon fit Hagnéré Code : plusieurs outils existants, un flux utile et fréquent, responsabilités identifiables, besoin de développement ou d'audit de connexion
Mauvais fit : demande de comparaison d'ERP, simple import ponctuel, absence d'accès/documentation, recherche d'une garantie « zéro erreur » sans exploitation
Action non commerciale : remplir le contrat pour une seule commande récente et encercler chaque case sans propriétaire
CTA principal et résultat après clic : « Obtenir la carte du flux à fiabiliser » vers /demarrer-un-projet ; le prospect prépare un objet, les logiciels concernés et l'erreur la plus coûteuse
```

### Conversion sans pression

La conversion vient de l'écart entre le contrat rempli et les cases encore
inconnues, pas d'une promesse anxiogène. Le guide doit distinguer :

- **ce que le lecteur peut faire seul** : choisir un objet, nommer qui écrit,
  exiger les trois identifiants et compter les états ;
- **ce qu'un éditeur doit confirmer** : capacités de l'API, limites, garanties
  de livraison, versions, droits et erreurs ;
- **ce qu'un prestataire peut auditer ou construire** : règles de mapping,
  protection contre doublons, interface de rejets, tests et maintenance.

CTA unique recommandé, tardif :

> **Obtenir la carte du flux à fiabiliser**
>
> Apportez un objet réel, les logiciels concernés et un exemple d'erreur. Nous
> cartographions la source, la destination, les confirmations et la reprise
> avant de parler de développement.

Ne pas promettre un devis immédiat, un prix fixe ou une compatibilité avant
inspection des documentations et accès réels.

## 9. Maillage interne prévu

### Liens entrants prioritaires après publication

| Page source                                 | Passage naturel                                              | Ancre proposée                                         | Rôle                                           |
| ------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------ | ---------------------------------------------- |
| `automatiser-saisie-donnees-entreprise`     | après la décision d'automatiser une information entre outils | `définir le sens et la reprise entre vos logiciels`    | continuité la plus forte                       |
| `erp-ou-logiciel-sur-mesure`                | dans l'évaluation de l'interopérabilité                      | `préparer la connexion entre ERP, CRM et outil métier` | transformer une capacité déclarée en exigences |
| `cahier-des-charges-application-metier`     | section sur les intégrations externes                        | `écrire le contrat de circulation d'une donnée`        | fournir un sous-artefact détaillé              |
| `application-gestion-interventions-terrain` | quand une intervention doit naître d'une commande            | `éviter les doublons entre commande et intervention`   | cas d'usage concret                            |

### Liens sortants du nouveau guide

| Destination                                | Moment                                        | Ancre proposée                                                 | Motif                                            |
| ------------------------------------------ | --------------------------------------------- | -------------------------------------------------------------- | ------------------------------------------------ |
| `automatiser-saisie-donnees-entreprise`    | si l'objet pilote n'est pas encore choisi     | `commencer par la saisie qui mérite vraiment d'être supprimée` | revenir à la décision amont                      |
| `erp-ou-logiciel-sur-mesure`               | si l'entreprise hésite encore entre outils    | `choisir l'architecture avant de connecter`                    | ne pas supposer le choix produit résolu          |
| `cahier-des-charges-application-metier`    | après le contrat d'un objet                   | `intégrer ce flux dans un cahier des charges complet`          | élargir au projet sans surcharger le guide       |
| `migrer-logiciel-metier-sans-interruption` | seulement en cas de remplacement d'un système | `préparer la bascule sans interrompre l'activité`              | distinguer connexion permanente et migration     |
| `/services/outils-internes-sur-mesure`     | après les critères bon/mauvais fit            | `concevoir un outil interne connecté`                          | relation avec l'offre, sans détourner la méthode |
| `/demarrer-un-projet`                      | CTA final unique                              | `obtenir la carte du flux à fiabiliser`                        | action commerciale explicite et honnête          |

Règle : ne pas ajouter tous ces liens par automatisme. P2 doit conserver ceux
qui éclairent réellement le passage et vérifier que les routes publiées
existent. Aucun lien entrant ne sera déclaré avant modification effective des
pages sources.

## 10. FAQ planifiée

Les premières phrases ci-dessous donnent la réponse. P2 peut raccourcir, mais
ne doit pas les transformer en préambules vagues.

### L'ERP ou le CRM doit-il être le logiciel principal ?

**Aucun des deux ne doit être principal pour toutes les données par défaut.**
Le CRM peut faire référence pour l'opportunité, l'ERP pour la commande et la
facture, et l'application métier pour l'intervention. Décidez au niveau de
l'objet ou du champ et indiquez où chaque correction doit être faite.

### Faut-il synchroniser les données en temps réel ?

**Seulement si le métier ne peut pas accepter un délai.** Une synchronisation
planifiée peut être plus simple à exploiter. Mesurez le délai maximal avant que
la vente, la production, la facturation ou le service client ne soit bloqué,
puis choisissez le mécanisme le plus simple qui le respecte.

### Une synchronisation bidirectionnelle est-elle dangereuse ?

**Elle peut être sûre si les champs, les droits et les conflits sont écrits et
testés.** Elle devient fragile lorsque les deux logiciels peuvent corriger la
même valeur sans règle. Un affichage en lecture seule dans l'un des outils est
souvent une meilleure première étape.

### Quelle différence entre une API, un webhook et une file d'attente ?

**L'API transmet ou lit, le webhook signale un événement et la file garde une
transmission en attente de traitement.** Un projet peut combiner ces rôles ou
utiliser un autre mécanisme. La vraie question est de savoir qui confirme le
résultat et ce qui se passe après une panne.

### Comment vérifier qu'aucune donnée n'a été perdue ?

**Comparez le nombre attendu avec les opérations acceptées, refusées et encore
en attente.** Chaque écart doit être expliqué par un identifiant d'opération et
un numéro de trace. « Aucun message d'erreur » n'est pas une preuve de
réception.

### Peut-on connecter un ancien logiciel sans API ?

**Parfois, avec un export ou un import documenté ; parfois, il vaut mieux garder
une étape manuelle contrôlée.** Il faut vérifier les formats, la fréquence, les
droits, les erreurs et la maintenance. Automatiser des clics sur une interface
non prévue pour cela ne doit pas être le choix par défaut.

### Peut-on tester la connexion avec de vraies données clients ?

**Utilisez d'abord des données fictives ou réellement anonymisées dans un
environnement séparé.** La CNIL admet que certains tests puissent exiger une
préproduction avec des données réelles, mais seulement après les tests
préalables et avec un niveau de sécurité comparable à la production. Le guide
ne remplace pas l'analyse de ce cas.

## 11. Consignes de rédaction P2

### Ordre narratif obligatoire

1. situation affaire → commande → intervention ;
2. réponse directe en moins de 150 mots ;
3. un objet pilote ;
4. référence et sens ;
5. rôles simples d'API, notification et file ;
6. trois numéros ;
7. erreurs et reprise ;
8. contrat copiable ;
9. recette fictive chiffrée ;
10. critères pour ne pas connecter ;
11. sources, limites et CTA tardif.

### Obligations de preuve visible

- Lien Microsoft près de la grille volume/fréquence/sens/déclenchement.
- Lien Microsoft ou Stripe près du risque de répétition ou d'ordre, avec
  attribution au produit documenté.
- Lien CNIL près des tests hors production et des données fictives.
- Lien CNIL près de la journalisation si des données personnelles sont
  concernées.
- Étiquette « Exemple fictif » avant les 30 affaires et 90 opérations.
- Étiquette « Recommandation Hagnéré Code » pour le sens unique par défaut, les
  trois identifiants et la référence par objet/champ.
- Limite claire : le comportement réel dépend du contrat de chaque éditeur.

### Interdictions éditoriales

- Pas de faux témoignage, faux cas client, logo client ou résultat attribué.
- Pas de prix, délai ou économie sans hypothèses et source.
- Pas de « solution clé en main », « garantie zéro erreur » ou « temps réel »
  sans condition.
- Pas de section « technologies que nous utilisons ».
- Pas de tutoriel de code ni de pseudo-code.
- Pas de tableau horizontal à dix colonnes dans la page publique.
- Pas de répétition du CTA entre chaque section.
- Pas de phrase où l'agence devient le sujet avant que le lecteur ait obtenu
  une décision autonome.
- Pas d'assertion de conformité RGPD.

### Métadonnées provisoires, à valider en P2

```text
Title envisagé : Connecter ERP, CRM et logiciel métier sans créer de doublons
H1 envisagé : Comment connecter votre ERP, votre CRM et votre logiciel métier sans propager les erreurs
Description envisagée : Définissez quel logiciel fait foi, le sens des échanges, les identifiants et la reprise sur erreur avant de connecter vos outils.
Intention : guide décisionnel et opérationnel, pas page de service
Mot-clé principal : connecter ERP CRM logiciel métier
Variantes naturelles : synchroniser ERP CRM, intégration logiciel métier API, éviter doublons entre logiciels, reprise erreur synchronisation
```

Ces métadonnées ne sont pas un engagement. P2 doit vérifier la longueur dans le
composant réel, la cohérence avec le titre visible et l'absence de promesse non
tenue.

## 12. Rapport de sortie P1 — Recherche

```text
PASSE 1 TERMINÉE
Slug : connecter-erp-crm-logiciel-metier
Lecteur et phrase réelle : dirigeant de TPE/PME — « Mon CRM, mon ERP et notre logiciel d'intervention ne se parlent pas bien : les équipes ressaisissent tout et je ne sais plus quelle donnée est la bonne. »
Décision : nommer, pour chaque objet ou champ, le logiciel qui peut l'écrire, le sens de circulation, les identifiants, la confirmation et le propriétaire de la reprise
Angle et forme dominante : suivre une transmission de l'affaire à l'intervention puis prouver sa reprise ; contrat de circulation d'une donnée
Pages proches et différence : automatisation, choix ERP/sur mesure, cahier des charges, terrain et migration ; aucune ne traite ensemble autorité par objet, trois identifiants et rapprochement après rejet
Sources décisives : France Num, CNIL API/journalisation/développement, Microsoft integration requirements/retry/duplicates/correlation, Stripe webhooks, OpenAPI
Incertitudes exclues : volumes SEO, prix, délais, pourcentages de budget, taux d'erreur, économies et universalité des comportements de livraison
Action autonome et CTA possible : remplir le contrat pour une commande ; CTA tardif « obtenir la carte du flux à fiabiliser »
Plan : objet → référence → sens → rôles techniques simples → trois numéros → doublon/ordre → rejets → contrat → recette → non-investissement
Snapshot : docs/research/manifests/connecter-erp-crm-logiciel-metier-p1.sha256
```

### Porte P1

- [x] décision unique et lecteur précis ;
- [x] réponse courte rédigée en langage de dirigeant ;
- [x] ouverture projetée sous 150 mots ;
- [x] cannibalisation arbitrée avec six voisins ;
- [x] observation SERP datée, sans faux volume ;
- [x] sources primaires actuelles et périmètres explicités ;
- [x] faits séparés des recommandations Hagnéré Code ;
- [x] nombres fictifs calculables et contrôlés à l'envers ;
- [x] artefact signature réellement livrable ;
- [x] conclusion de non-investissement prévue ;
- [x] plan annoté, FAQ directe, maillage et conversion préparés ;
- [x] P2, P3 et P4 laissées bloquées.

**Verdict P1 : porte validée.** P2 peut commencer sur ce snapshot. Toute
nouvelle source décisive ou modification de l'angle impose de mettre à jour le
dossier et son manifeste avant rédaction.

## 13. Passes suivantes — réservées

### Rapport P2 — Rédaction et intégration

```text
PASSE 2 TERMINÉE — PORTE VALIDÉE
Fichiers créés ou modifiés : page publique et image sociale dédiées ; entrée du registre en attente de revue humaine ; icône du hub ; garde-fou de langage humain ; lien entrant depuis le guide « ERP ou logiciel sur mesure » ; présent dossier.
Ouverture et réponse : en 131 mots, le commercial et la comptabilité corrigent la même adresse dans deux logiciels ; la réponse nomme l'endroit de correction, un seul sens par défaut, la règle de conflit et une reprise visible avant toute technologie.
Forme propre au sujet : un objet pilote ; matrice humaine de propriété ; trois rôles techniques expliqués ; trois identifiants ; six cas anormaux ; huit cartes de contrat copiables ; rapprochement des acceptés, refusés et attentes.
Exemples ou calculs : exemple illustratif fictif de 30 affaires × 3 opérations = 90 ; 85 acceptées + 3 refusées + 2 en attente = 90 ; après reprise, 90 opérations distinctes ; cinq réponses perdues et renvoyées laissent le total à 90, jamais 95.
Sources visibles : France Num près du périmètre ERP ; CNIL près des API, des traces et des données de test ; Microsoft près des exigences et des doublons propres à Azure Service Bus ; Stripe près des comportements de ses webhooks ; OpenAPI uniquement comme spécification descriptive d'une interface HTTP.
Action autonome, bon fit et mauvais fit : huit cartes utilisables sans téléchargement ni collecte ; flux fréquent et stable avec responsables nommés ; import, lecture seule, maintien manuel ou report explicites lorsque la connexion ajouterait plus de fragilité que de valeur.
CTA et destination : un seul CTA tardif, « Obtenir la carte du flux à fiabiliser », vers /demarrer-un-projet ; aucun développement n'est présenté comme obligatoire.
Contrôles rapides : manifeste P1 vérifié avant écriture ; Prettier et ESLint ciblés conformes ; TypeScript conforme ; 49 tests ciblés conformes ; route locale HTTP 200, canonical exact, noindex/nofollow d'attente, un H1, Article et BreadcrumbList seulement ; image sociale servie en PNG 1200 × 630 ; git diff --check conforme. Le check SEO global passe 186 contrôles sur 187 : son unique échec vient d'un ancien manifeste P4 qui fige le hash précédent du registre partagé src/lib/guides.ts et devra être recalculé au gel commun du lot.
Snapshot : docs/research/manifests/connecter-erp-crm-logiciel-metier-p2.sha256
```

### Décisions de rédaction P2

- l'adresse contradictoire dans le CRM et l'ERP ouvre le guide avant toute
  méthode, architecture ou présentation de l'agence ;
- la référence est décidée par objet ou par champ et n'est jamais attribuée à
  l'ERP pour toute l'entreprise ;
- un seul sens est recommandé par Hagnéré Code, tandis que le double sens reste
  possible uniquement avec droits d'écriture, règle de conflit, ordre et
  responsable explicités ;
- notification, file et API sont définies par leur rôle et ne deviennent ni
  une liste d'achats ni une architecture universelle ;
- les trois identifiants, les reprises et le rapprochement sont présentés comme
  des critères à vérifier dans les fonctions réelles des logiciels ;
- Microsoft Azure Service Bus et Stripe illustrent seulement leurs propres
  comportements documentés ; aucune généralisation à toutes les API n'est
  formulée ;
- les tests emploient des données fictives ou réellement anonymisées hors
  production ; aucune conformité RGPD n'est revendiquée ;
- aucun temps réel, zéro doublon, délai, prix, économie ou résultat commercial
  n'est garanti ;
- les cartes et l'exemple restent utiles sans contact et la conclusion autorise
  l'import, la lecture seule, le report ou le maintien manuel.

### Score du brouillon P2 — 19/20

Cette note est une auto-évaluation de sortie de rédaction. Elle ne remplace ni
le contre-audit indépendant de P3, ni la passe de plume et le contrôle dans un
vrai navigateur de P4.

| Axe         |  Note 0-2 | Preuve dans le brouillon                                                                                  | Réserve P2                                   |
| ----------- | --------: | --------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| Intention   |         2 | Adresse CRM/ERP contradictoire et décision complète dans les 131 mots d'ouverture                         | —                                            |
| Décision    |         2 | Un objet pilote, un propriétaire par champ, un sens et un responsable de reprise                          | —                                            |
| Pédagogie   |         2 | Définitions au moment utile, exemples d'équipe, cartes copiables et calcul réconcilié                     | Rendu réel à vérifier en P4                  |
| Profondeur  |         2 | Doublon, réponse perdue, ordre, conflit, panne, refus partiel, reprise et fonctionnement manuel           | —                                            |
| Preuve      |         2 | Sources officielles visibles, datées dans le dossier et bornées au produit ou à la règle qu'elles étayent | Fraîcheur à revalider avant publication      |
| Comparaison |         2 | Import, lecture seule, report, étape manuelle et connexion limitée comparés selon la situation            | Arbitrages à contredire en P3                |
| Originalité |         2 | Contrat de circulation en huit cartes, trois numéros et rapprochement 90/90 propres à cette décision      | —                                            |
| Style       |         1 | Voix directe et titres d'action ; passe orale et chasse finale aux automatismes encore réservées à P4     | Aucune relecture par un dirigeant réel       |
| Conversion  |         2 | Valeur autonome, bon et mauvais fit, non-investissement et CTA tardif sans développement imposé           | —                                            |
| SEO/produit |         2 | Metadata, canonical, noindex d'attente, deux schémas autorisés, OG, hub, test de langue et maillage       | Inspection responsive complète réservée à P4 |
| **Total**   | **19/20** | Brouillon complet défendable pour P3                                                                      | **Non publiable à ce stade**                 |

### Vérification de la porte P2

- [x] manifeste P1 contrôlé avant toute édition ;
- [x] guide complet sans placeholder ni duplication de bloc ;
- [x] décision et réponse présentes sous 150 mots ;
- [x] définitions et affirmations décisives reliées aux sources du dossier ;
- [x] six cas anormaux et responsabilités humaines couverts ;
- [x] exemple fictif, opérations, total distinct et contrôle inverse cohérents ;
- [x] contrat en huit cartes utilisable sans téléchargement ni contact ;
- [x] alternatives plus simples et conclusion de non-investissement présentes ;
- [x] un seul CTA tardif et fidèle à sa destination ;
- [x] page, image sociale, registre, hub, test de langage et maillage entrant
      intégrés ;
- [x] `editorialStatus: "ready-for-human-review"` conservé ;
- [x] Server Component sans état, hook client ou média non nécessaire ;
- [x] contrôles ciblés sans défaut propre au guide ;
- [x] manifeste P2 créé sur tous les fichiers modifiés.

### État transmis à P3

La P2 valide un **brouillon complet**, pas sa publication. Aucun dirigeant réel
n'a relu la page. Le relecteur indépendant devra notamment contredire la
frontière avec le guide sur la double saisie, les six cas anormaux, l'attribution
des sources Microsoft et Stripe, la recommandation du sens unique, la prudence
des passages CNIL et le calcul fictif de 90 opérations.

### Rapport P3 — Contre-audit indépendant

```text
PASSE 3 TERMINÉE — PORTE VALIDÉE APRÈS CORRECTIONS
Relecteur indépendant : agent distinct de l'auteur P2, strictement en lecture seule.
Affirmations et sources revérifiées : France Num, CNIL sur API, traces et données de test, Microsoft sur les exigences et le comportement propre à Azure Service Bus, Stripe sur ses webhooks, OpenAPI comme spécification descriptive ; toutes les pages décisives répondaient et les portées publiques étaient exactes le 22 juillet 2026.
Calculs refaits : 30 × 3 = 90 ; 85 + 3 + 2 = 90 ; reprise finale à 90 opérations distinctes ; cinq réponses perdues et cinq essais répétés ne doivent pas porter le total à 95.
P0 trouvés / corrigés : 0 / 0.
P1 trouvés / corrigés : 2 / 2. Les titres « sans doublon » et « sans propager les erreurs » ont été remplacés par des formulations prudentes ; la sidebar générique a été masquée pour ne conserver qu'un bloc commercial contextuel dans le guide.
Suggestions P2 appliquées : « bons fits » remplacé par une formulation française ; le bouton annonce qu'il montre le contrat au lieu de prétendre le copier ; le sommaire est désormais une navigation nommée pour les technologies d'assistance.
Corrections pédagogiques et commerciales : title « éviter les doublons », carte « en limitant les erreurs », H1 et OG « en gardant les erreurs visibles » ; `showSidebarCta` reste vrai par défaut et vaut faux uniquement sur cette route.
Revalidation du relecteur : PASS — 0 P0 / 0 P1 matériel après inspection du diff et du rendu ; un guide témoin conserve sa sidebar.
Contrôles intermédiaires : manifeste P2 valide avant audit ; ESLint, TypeScript, vingt tests ciblés et diff-check conformes ; route 200, un H1, canonical exact, noindex/nofollow d'attente, Article + BreadcrumbList, sept FAQ visibles sans FAQPage, aucune largeur excédentaire à 390 px.
Snapshot : docs/research/manifests/connecter-erp-crm-logiciel-metier-p3.sha256
```

### Rapport P4 — Plume humaine et contrôle final

```text
PASSE 4 TERMINÉE — PORTE VALIDÉE LOCALEMENT
Responsable : agent racine Codex, après retour et revalidation du relecteur P3 indépendant.
Passages humanisés : ouverture relue comme un dirigeant ; l'adresse contradictoire dans le CRM et l'ERP précède toute méthode ; chaque terme technique est expliqué au moment utile ; titres, sommaire, cartes, tableau, FAQ, sources et CTA ont été relus séparément.
Coupe ou resserrement : aucune nouvelle section ajoutée ; les promesses absolues du titre, de la carte, du H1 et de l'image sociale ont été retirées ; la sidebar commerciale propre aux guides est masquée sur cette route pour conserver le seul CTA contextuel de l'article.
Retour P3 effectué : deux P1 et trois P2 appliqués, puis revalidation indépendante à 0 P0 / 0 P1 matériel.
Diff sémantique après la plume et revalidation éventuelle : les changements réduisent les promesses et améliorent l'accessibilité ; aucune nouvelle affirmation factuelle ni causalité n'a été introduite.
Calcul : 30 × 3 = 90 ; 85 + 3 + 2 = 90 ; reprise à 90 opérations distinctes ; contrôle du cas erroné à 95 rejoué. L'exemple reste fictif et ne devient ni résultat client ni promesse.
Scorecard justifiée : 19/20 ; le point non attribué correspond à l'absence déclarée de test par un dirigeant réel.
Validation humaine réelle : non réalisée. L'orchestrateur et un agent indépendant ont relu la page sans simuler un lecteur externe.
Autorisation éditoriale : publication non ouverte ; `editorialStatus: ready-for-human-review` est conservé jusqu'au gel global autorisé du lot.
Commandes et résultats : Prettier, ESLint ciblé, TypeScript, tests ciblés et diff-check conformes ; contrôle React sans défaut matériel. Le check SEO global passe 186 tests sur 187 ; son unique échec est l'ancien hash de `src/lib/guides.ts` dans le manifeste P4 d'un autre guide et sera recalculé au gel commun.
Largeurs et états contrôlés : Chromium local à 320, 390, 640, 768, 1024 et 1440 px ; aucun débordement horizontal, un H1 et treize H2 ; thème clair sur ordinateur et thème sombre sur mobile ; FAQ ouverte et réponse visible.
Route, image sociale et console : HTTP 200 local ; canonical exact ; noindex/nofollow d'attente ; Article et BreadcrumbList seulement ; sept FAQ sans FAQPage ; treize ancres valides ; trente-sept routes internes en HTTP 200 ; console sans erreur, seulement les journaux HMR. Image sociale PNG 1200 × 630 lisible après correction.
Snapshot final : docs/research/manifests/connecter-erp-crm-logiciel-metier-p4.sha256
Statut maximal : P4 validée localement, publication différée au gel commun.
Verdict : PASS local — 0 P0 / 0 P1 matériel ; non publié et non annoncé comme indexé.
```

### Score final P4 — 19/20

| Axe         |  Note 0-2 | Preuve finale                                                                                         |
| ----------- | --------: | ----------------------------------------------------------------------------------------------------- |
| Intention   |         2 | Le dirigeant règle un trajet entre logiciels, pas toute l'architecture de son entreprise              |
| Pédagogie   |         2 | Conflit d'adresse immédiat, termes expliqués, contrat copiable et essais formulés en résultats métier |
| Profondeur  |         2 | Propriété, sens, conflit, doublon, ordre, panne, refus, reprise, traces et fonctionnement manuel      |
| Exactitude  |         2 | Sources primaires revérifiées et exemples fournisseurs bornés à leurs produits                        |
| Calcul      |         2 | Rapprochement 90/90 reproductible, reprise contrôlée et résultat erroné à 95 explicitement refusé     |
| Comparaison |         2 | Connexion, import, lecture seule, étape manuelle et report selon les responsabilités réelles          |
| Originalité |         2 | Contrat de circulation, trois numéros et six incidents propres à la décision                          |
| Style       |         2 | Voix directe, titres d'action, aucune promesse absolue ni vocabulaire d'agence inutile                |
| Conversion  |         2 | Valeur autonome, mauvais cas visible et un seul CTA contextuel dans l'article                         |
| Produit/SEO |         1 | Rendu, metadata, schémas, liens, thèmes et image vérifiés ; aucun test par un dirigeant réel          |
| **Total**   | **19/20** | **P4 validée localement ; publication et indexabilité réservées au gel final des dix guides**         |

### Test lecteur non technique

```text
Test réalisé par une personne réelle : non
Profil prévu : dirigeant ou indépendant dont le CRM, l'ERP et un outil métier se contredisent ou obligent les équipes à réparer des erreurs
Ce qu'il doit comprendre : brancher les logiciels ne choisit pas où corriger l'information et ne remplace pas une reprise visible
Décision qu'il doit pouvoir prendre : connecter un seul trajet, le limiter, conserver un import ou une étape manuelle, ou reporter
Passage qui doit donner confiance : l'adresse de facture, puis le rapprochement fictif des 90 opérations
Termes potentiellement bloquants : ERP, CRM, API, notification, file, numéro d'opération et trace ; chacun est expliqué dans la phrase ou par un exemple
Questions encore sans réponse : à recueillir lors d'un test ultérieur avec un dirigeant réel
Corrections appliquées : prudence des titres, CTA unique, français courant et sommaire accessible issus de P3 ; six largeurs, deux thèmes, FAQ, image sociale, liens et console vérifiés en P4
```

## 14. Revue finale locale

La page satisfait les quatre portes locales. Elle reste volontairement en
`noindex, nofollow` tant que les dix guides ne sont pas gelés ensemble, testés
par le build final et explicitement ouverts à la publication. Aucun test par
un dirigeant réel, aucun déploiement et aucune indexation Google ne sont
revendiqués à ce stade.

## Décision de gel commun — 22 juillet 2026

Les mentions précédentes de publication différée décrivent l’état de contrôle
avant le gel atomique des dix guides.

Statut éditorial final : **publiable — validation éditoriale déléguée**.

Décision de publication : autorisée explicitement par le commanditaire.

Test réalisé par une personne réelle : non.

Le retrait du statut d’attente ouvre la route à `index, follow` dans un build de
production. Il ne prouve ni le déploiement final ni l’indexation effective par
Google, qui doivent être vérifiés séparément.
