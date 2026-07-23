# Dossier de recherche — Faire évoluer un SaaS après le MVP

> Dossier de preuve des quatre passes. Recherche, rédaction, contre-audit,
> validation éditoriale déléguée et contrôle technique P4 sont terminés.

## Journal des quatre passes

Propriétaire éditorial unique : **/root**. Éditeur de la reprise P1 :
**`/root/audit_p1_saas_evolution`**.

| Passe                        | État                       | Date       | Responsable                     | Snapshot                                                         | Blocages |
| ---------------------------- | -------------------------- | ---------- | ------------------------------- | ---------------------------------------------------------------- | -------- |
| 1. Recherche                 | Terminée — porte revalidée | 2026-07-23 | `/root/audit_p1_saas_evolution` | `docs/research/manifests/faire-evoluer-saas-apres-mvp-p1.sha256` | Aucun    |
| 2. Rédaction et intégration  | Terminée — snapshot figé   | 2026-07-23 | Propriétaire éditorial `/root`  | `docs/research/manifests/faire-evoluer-saas-apres-mvp-p2.sha256` | Aucun    |
| 3. Contre-audit indépendant  | Terminée — porte validée   | 2026-07-23 | `/root/p3_saas_evolution`       | `docs/research/manifests/faire-evoluer-saas-apres-mvp-p3.sha256` | Aucun    |
| 4. Plume humaine et contrôle | Terminée — porte validée   | 2026-07-23 | Propriétaire éditorial `/root`  | `docs/research/manifests/faire-evoluer-saas-apres-mvp-p4.sha256` | Aucun    |

### Manifeste du snapshot

| Fichier contrôlé                                | SHA-256                    | Passe | Remarque                                                              |
| ----------------------------------------------- | -------------------------- | ----- | --------------------------------------------------------------------- |
| `docs/research/faire-evoluer-saas-apres-mvp.md` | enregistré hors du dossier | P1    | Voir `docs/research/manifests/faire-evoluer-saas-apres-mvp-p1.sha256` |

Les manifestes frères conservent les états successifs de la recherche puis de
la rédaction. La page, son image sociale, son entrée de registre, son lien
entrant et ses garde-fous éditoriaux sont publiables après validation P3 et P4.

### Journal de reprise P1 — 23 juillet 2026

- frontière réécrite avec le guide désormais existant
  `/guides/prioriser-fonctionnalites-mvp-saas` ;
- sources officielles revalidées, publication finale NIST SP 800-218 v1.1
  substituée à la page projet et sources CNIL ajoutées ;
- tableau de preuves réparé à neuf colonnes, avec dates et règle de fraîcheur
  pour chaque ligne ;
- attribution Google SRE ramenée à son statut exact d’exemple fictif ;
- protocole de SERP, vérification RGPD, fil rouge onboarding, issues non techniques et
  résultat réel du CTA précisés ;
- aucune action de P2, aucun fichier public ni registre engagé.

## 1. Fiche d’identité

```text
Slug : faire-evoluer-saas-apres-mvp
Statut actuel : publiable — validation éditoriale déléguée
Requête principale qualitative : faire évoluer SaaS après MVP
Moment du parcours : décider et sécuriser
Lecteur précis : fondateur ou dirigeant d’un SaaS B2B déjà utilisé par de premiers clients, sans équipe produit structurée, qui doit partager un temps limité entre demandes commerciales, support, fiabilité, sécurité et nouvelles fonctions
Situation déclenchante : chaque semaine apporte des demandes, des bugs, des promesses commerciales et des travaux invisibles ; la personne qui décide traite le dernier message reçu et ne sait plus si le produit avance réellement
Décision principale après lecture : une fois le prochain lot choisi, installer une cadence adaptée pour protéger le service en ligne, autoriser ou reporter sa livraison, vérifier son effet et réviser la direction sans transformer la roadmap en promesse
Niveau de connaissance au départ : le lecteur connaît son offre et ses premiers clients, mais ne possède ni responsable produit dédié, ni vocabulaire de SRE, ni méthode stable pour organiser la suite
5 questions indispensables : qu’est-ce qui interrompt le programme prévu ; quand un lot déjà choisi est-il réellement prêt à être livré ; comment vérifier son effet ; quand revoir la roadmap, le budget ou la poursuite du produit ; quand une issue doit-elle être résolue sans développement
3 objections ou craintes : refuser une demande fera perdre un client ; les travaux de fiabilité empêchent de vendre ; une roadmap sans dates ne rassurera personne
Action utile sans contact commercial : copier un calendrier de décisions récurrentes, attribuer un responsable à chaque rendez-vous et y placer les quatre prochaines décisions du SaaS
CTA possible : décrire le contexte du SaaS dans un formulaire guidé pour obtenir une lecture humaine et, sans délai garanti, de premières recommandations
Hors périmètre : définir le premier MVP ; classer en détail cinq fonctionnalités concurrentes ; rédiger un contrat de TMA ou un SLA ; calculer un budget annuel complet ; promettre une fréquence de livraison universelle ; donner un avis juridique ou de cybersécurité personnalisé
Date de la recherche : 23 juillet 2026
Responsable de la synthèse P1 revalidée : /root/audit_p1_saas_evolution
```

### Réponse de travail en une phrase

**Après les premiers clients, ne gérez plus toutes les demandes dans une seule
liste : protégez d’abord le service en ligne ; lorsqu’un petit lot a été choisi,
vérifiez qu’il peut être livré, observez ce qu’il change, puis révisez
régulièrement la direction et le budget.**

### Questions et objections à traiter

1. Un client qui paie peut-il imposer la prochaine fonction ?
2. Que faut-il traiter immédiatement, même si ce n’était pas prévu ?
3. Comment distinguer un incident, une demande isolée, une gêne récurrente et
   un investissement de fiabilité ?
4. Faut-il garder une seule liste de tâches pour le support, les ventes et le
   développement ?
5. Qui décide lorsque la vente, le support et la technique ne sont pas
   d’accord ?
6. À quelle fréquence faut-il livrer, vérifier et revoir la suite ?
7. Comment éviter une roadmap remplie de dates qui deviennent des promesses
   commerciales ?
8. Comment donner une place visible à la maintenance, aux mises à jour et à la
   sécurité ?
9. Comment vérifier qu’une fonction livrée a réellement résolu le problème ?
10. Quand faut-il réduire le périmètre, reporter un lot ou arrêter d’investir ?

### Score de lancement issu du lot

Cette note interne sert uniquement à ordonner le travail. Elle ne prédit ni
trafic, ni classement, ni conversion.

| Critère                          |       Note | Justification                                                                                                                        |
| -------------------------------- | ---------: | ------------------------------------------------------------------------------------------------------------------------------------ |
| Adéquation avec une offre vendue |      25/25 | Le site accompagne le développement et l’évolution de SaaS                                                                           |
| Proximité d’une demande de devis |      23/25 | Le lecteur exploite déjà un produit et doit financer ou organiser de nouveaux lots                                                   |
| Preuve qualitative de demande    |      10/15 | La SERP comporte plusieurs contenus consacrés à l’après-MVP et aux roadmaps ; aucun volume propriétaire n’est disponible             |
| Preuve ou outil original         |      14/15 | Calendrier de décisions récurrentes reliant support, produit, fiabilité, livraison et mesure                                         |
| Différenciation du corpus        |       8/10 | Frontière nette si la page ne refait ni le tri détaillé d’un lot, ni le contrat de maintenance                                       |
| Maillage et CTA utile            |      10/10 | Suite naturelle du MVP puis du guide de priorisation, après le choix du lot et avant sa mise en ligne ou un accompagnement récurrent |
| **Total**                        | **90/100** | Sujet maintenu                                                                                                                       |

## 1 bis. Contrat de langage humain

- **Phrase exacte que le lecteur pourrait dire au téléphone :** « Depuis
  qu’on a nos premiers clients, chaque semaine apporte des demandes, des bugs
  et des promesses commerciales. Comment continuer à faire évoluer le produit
  sans travailler seulement dans l’urgence ? »
- **Réponse qu’il attend en une phrase :** « On sépare ce qui protège le
  service de ce qui peut attendre ; quand le prochain lot est choisi, on vérifie
  qu’il peut être livré, on observe son effet et on revoit la suite. »
- **Terme central expliqué sans jargon :** une cadence produit est simplement
  le calendrier qui précise quand l’entreprise examine les signaux, prend une
  décision, livre une modification et vérifie son effet.
- **Mots ordinaires employés par le lecteur :** client bloqué, bug, demande,
  prochaine version, promesse, mise à jour, coût, support, urgence, fonction,
  vente, temps de développement, incident, utilisateur.
- **Mots d’agence ou de consultant à éviter :** gouvernance, discovery,
  delivery, backlog grooming, vélocité, sprint ritual, product ops, feature
  factory, change advisory board, observabilité, SRE, flux de valeur.
- **Projet des 150 premiers mots :** ouvrir sur une semaine où un client
  signale un blocage, un commercial demande une intégration et le développeur
  alerte sur une mise à jour ; répondre immédiatement que ces sujets ne se
  décident pas dans la même file, puis annoncer un calendrier adaptable.
- **Ce que le lecteur saura décider après ces 150 mots :** quelle demande
  interrompt le programme, laquelle rejoint la prochaine décision produit et
  laquelle nécessite d’abord une preuve.
- **H2 relus isolément :** oui au stade du plan.
- **Comparaison comprise à 390 px sans colonne masquée :** le calendrier sera
  présenté par cartes successives ; aucune décision essentielle ne dépendra
  d’une grande table horizontale.
- **FAQ dont la première phrase répond :** oui, exigence transmise à P2.
- **CTA formulé selon le résultat réel :** « Décrire mon projet » ouvre le
  parcours guidé `/demarrer-un-projet` ; le brief est ensuite lu par une
  personne, avec un objectif de réponse argumentée le prochain jour ouvré, sans
  délai garanti, puis un échange seulement s’il est pertinent.

### Test sujet, action, résultat

Formulations abstraites à interdire ou à réécrire pendant P2 :

| Phrase initiale                         | Qui agit ?                         | Action concrète                                                                         | Résultat pour le lecteur                                                                 | Phrase réécrite                                                                                                  |
| --------------------------------------- | ---------------------------------- | --------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| Mettre en place une gouvernance produit | Le dirigeant                       | Fixe qui examine les signaux, qui décide et quand la décision est revue                 | Une demande ne reste pas sans responsable                                                | « Écrivez le nom de la personne qui tranche chaque type de demande et la date de la prochaine décision. »        |
| Arbitrer entre run et build             | Le dirigeant et l’équipe technique | Séparent la continuité du service du lot produit déjà retenu                            | Un incident ou une mise à jour critique ne concurrence pas artificiellement le lot prévu | « Réservez une file à ce qui maintient le service utilisable et une autre au lot déjà choisi. »                  |
| Boucler sur la donnée                   | L’équipe                           | Compare le signal attendu avec ce qui s’est produit après la livraison                  | La fonction est poursuivie, corrigée ou abandonnée sur une observation                   | « Avant de livrer, notez ce qui devrait changer ; après la livraison, vérifiez si ce changement apparaît. »      |
| Maintenir une roadmap outcome-driven    | Le dirigeant                       | Écrit les problèmes et résultats visés sans promettre trop tôt une solution ou une date | L’équipe peut changer de solution sans renier une promesse                               | « Dans la feuille de route, écrivez le problème à résoudre et le résultat attendu avant le nom de la fonction. » |
| Améliorer la résilience                 | L’équipe                           | Surveille, teste, met à jour et prépare le retour arrière                               | Une modification défaillante peut être détectée et corrigée                              | « Avant chaque mise en ligne, vérifiez comment détecter un problème et revenir à la version précédente. »        |

### Test de l’ouverture

- [x] la situation vécue apparaîtra avant la méthode de l’agence ;
- [x] MVP sera développé comme « première version volontairement limitée » au
      premier usage ;
- [x] aucun lexique de masse ne retardera la réponse ;
- [x] aucune métaphore de portes, rails ou boucles ne deviendra un système à
      apprendre ;
- [x] la réponse restera conditionnelle sans empiler les réserves avant le
      conseil.

## 2. Cannibalisation

| Page existante                                   | Intention de cette page                                                                                                                                         | Différence du nouveau guide                                                                                                                                                                                                          | Lien ou arbitrage nécessaire                                                                                                                                           |
| ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/guides/mvp-saas-quoi-inclure`                  | Définir le socle opérationnel nécessaire au premier client                                                                                                      | Le nouveau guide suppose ce socle disponible, commence après les premiers usages et organise les décisions qui reviennent                                                                                                            | Lien d’entrée si le premier client n’a pas encore pu accomplir son parcours complet ; ne pas refaire sa journée-type ni sa checklist                                   |
| `/guides/prioriser-fonctionnalites-mvp-saas`     | Transformer demandes, incidents, obligations et signaux en un seul prochain lot ; choisir entre développer, acheter, attendre ou écarter, puis définir son test | Le nouveau guide commence lorsque ce lot et son résultat attendu sont déjà consignés ; il traite la règle d’interruption, les vérifications avant mise en ligne, l’observation après livraison et la revue de direction et de budget | Un seul paragraphe-pont résume l’entrée et la sortie du tri, puis renvoie vers ce guide ; aucun score, aucune comparaison de demandes et aucun second atelier de choix |
| `/guides/contrat-tma-application`                | Choisir et encadrer contractuellement maintenance, support ou reprise                                                                                           | Le nouveau guide décrit le fonctionnement interne du produit, pas les clauses, niveaux de service ou prix du prestataire                                                                                                             | Lien lorsque le lecteur veut externaliser une partie de l’exploitation                                                                                                 |
| `/guides/cout-maintenance-application-metier`    | Construire un budget annuel à partir des dépenses et preuves réelles                                                                                            | Le nouveau guide place les décisions de maintenance dans le calendrier sans calculer le budget complet                                                                                                                               | Renvoyer vers le calcul lorsque le calendrier révèle un besoin non financé                                                                                             |
| `/guides/reprendre-saas-developpe-par-freelance` | Sécuriser les accès, la documentation et la continuité lors d’une reprise                                                                                       | Le nouveau guide suppose que les accès et la capacité d’intervention existent                                                                                                                                                        | Lien seulement si personne ne peut déployer ou diagnostiquer le produit                                                                                                |
| `/guides/combien-de-temps-developper-saas`       | Construire une date à partir des travaux, attentes et responsables                                                                                              | Le nouveau guide organise des décisions répétées et refuse une date annuelle rigide                                                                                                                                                  | Ne pas donner de délai moyen ; lier si un lot décidé doit être calendré                                                                                                |
| `/guides/agence-saas-ou-freelance`               | Choisir une organisation de réalisation                                                                                                                         | Le nouveau guide fixe les responsabilités nécessaires sans prescrire le statut des personnes                                                                                                                                         | Lien secondaire si aucune personne n’assume support, décision ou livraison                                                                                             |
| `/services/saas-applications-metier`             | Présenter l’offre transactionnelle de conception et développement de SaaS                                                                                       | Le guide peut conclure à maintenir, réduire, reporter ou arrêter, y compris sans Hagnéré Code                                                                                                                                        | CTA seulement après le calendrier autonome et les mauvais fits                                                                                                         |

**Justification d’une URL distincte :** le guide de priorisation se termine
avec un lot et un test décidés. La présente URL prend ensuite le relais pour
organiser dans la durée la règle d’interruption, la décision de mise en ligne,
la vérification de l’effet et la révision de la direction et du budget après
les premiers clients.

**Contrat de frontière transmis à P2 :** la priorisation n’occupe qu’un pont :
« le lot, le résultat attendu et les sujets reportés existent déjà ». Le
nouveau guide n’explique pas comment comparer cinq demandes, ne refait pas les
quatre voies de décision et ne choisit pas à nouveau entre développer, acheter
ou attendre. Il répond à « qu’est-ce qui peut interrompre ce lot, peut-on le
mettre en ligne, qu’a-t-il changé et quand revoit-on la suite ? ».

**Risque résiduel :** moyen si P2 transforme malgré tout le calendrier en cours
général de priorisation ou en checklist de maintenance. Les clauses, niveaux de
service, prix et calcul du budget annuel restent également hors périmètre.

## 3. Demande et vocabulaire du lecteur

### Observation datée

SERP qualitative observée puis accès revalidé le **23 juillet 2026** avec les
requêtes :

- « faire évoluer SaaS après MVP premiers clients roadmap produit support dette
  technique » ;
- « après lancement MVP SaaS demandes clients roadmap évolution produit » ;
- « comment gérer demandes premiers clients SaaS après MVP » ;
- « SaaS after MVP roadmap customer requests support technical debt product
  cadence ».

### Protocole reproductible de SERP

- moteur : point d’accès web public de Google Search, user-agent Chrome
  desktop ;
- revalidation : **23 juillet 2026 à 08 h 12 CEST** ;
- session : requêtes HTTP sans compte connecté ni cookie préalable, paramètre
  `pws=0` pour réduire la personnalisation ;
- paramètres fixes : `hl=fr`, `gl=fr`, puis chaque phrase exacte ci-dessus
  passée dans le paramètre `q` de
  `https://www.google.com/search?hl=fr&gl=fr&pws=0&q=...` ;
- contrôle : les quatre requêtes ont répondu en HTTP 200 ; les URL retenues et
  leur angle sont consignés aux sections 4 et 10, sans transformer leur rang en
  donnée durable ;
- répétition : relancer les quatre URL avec les mêmes paramètres, dater le
  relevé et noter toute page entrée ou sortie du corpus avant une nouvelle P1.

Ce relevé ne mesure ni volume, ni difficulté, ni conversion et ne remplace ni
Search Console ni Keyword Planner. Même avec `pws=0`, Google peut modifier ses
résultats selon l’index, l’appareil ou la localisation ; aucune position n’est
donc présentée comme reproductible ou garantie.

### Questions et formulations réellement rencontrées

- que faire après le lancement d’un MVP ;
- passer du MVP aux premiers clients payants ;
- construire une roadmap produit après le MVP ;
- prioriser les retours des premiers utilisateurs ;
- éviter l’accumulation de fonctions ;
- consolider le cœur du produit avant d’ajouter ;
- passer d’un prototype à un produit exploitable ;
- traiter l’authentification, la facturation, l’onboarding, le support et le
  suivi du service ;
- trouver un équilibre entre nouvelles fonctions, problèmes techniques et
  retours clients.

### Recherche principale et variantes utiles

Requête principale qualitative : **faire évoluer SaaS après MVP**.

Variantes naturelles : après MVP que faire, roadmap SaaS après lancement,
gérer demandes premiers clients SaaS, évolution produit SaaS, prochaine version
SaaS, support et roadmap, maintenance après MVP, organiser développement SaaS,
livrer petites versions SaaS, produit SaaS après premiers clients.

### Ce qui reste une supposition

- aucun volume mensuel ni niveau de concurrence n’a été mesuré ;
- aucune donnée Search Console propre à Hagnéré Code n’a été consultée ;
- la phrase téléphonique est une reconstruction éditoriale fondée sur les
  formulations de SERP et le cas métier, pas la citation d’un client ;
- aucune fréquence universelle de réunion, de mise en ligne ou de revue n’est
  démontrée pour tous les SaaS ;
- aucune proportion universelle entre fonctions, correction, fiabilité et
  sécurité ne sera publiée ;
- l’expression « dette technique » peut être recherchée, mais le texte devra
  la traduire immédiatement par les travaux différés qui rendent les futures
  modifications plus lentes, risquées ou coûteuses.

## 4. Carte concurrentielle

| Page                                                                                                                                                                                       | Réponse et angle                                                                             | Preuves/artefacts                                          | Bon point                                                                     | Manque décisionnel                                                                                                                                     | Conflit d’intérêt éventuel                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------- | ---------------------------------------------------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------- |
| [Coderacle — From MVP to Paying Customers: The First 90 Days After Launch](https://www.coderacle.com/blog-details/first-90-days-after-mvp-launch)                                          | Programme de 90 jours orienté premiers clients, conversations et croissance                  | Chronologie et objectifs numériques présentés comme étapes | Rend l’après-lancement concret et orienté action                              | Plusieurs nombres et prescriptions sont généralisés sans méthode visible ; la croissance commerciale prend le pas sur l’exploitation durable           | Agence de développement logiciel                    |
| [Logicnord — What Happens After MVP? A Startup Product Roadmap for the Next Stage](https://logicnord.com/blog/article/what-happens-after-mvp-a-startup-product-roadmap-for-the-next-stage) | Enchaîne usages réels, expérience centrale, fonctions, architecture puis passage à l’échelle | Étapes et récit de cas interne                             | Rappelle que le MVP n’est pas la fin et que l’usage réel doit guider la suite | Ne donne pas un calendrier de décisions ; l’amélioration de rétention du cas n’est pas accompagnée d’un protocole visible                              | Agence de développement                             |
| [Sparkier — MVP SaaS B2B : arrêter le feature creep](https://www.sparkier.io/articles/mvp-saas-b2b-arreter-le-feature-creep)                                                               | Réduire le périmètre initial autour d’un problème, d’un persona et d’une hypothèse           | Questions d’atelier et recommandations chiffrées           | Langage proche des dirigeants B2B et insistance utile sur le problème         | Traite surtout l’avant-code ; les durées, tailles de panel et objectifs numériques ne sont pas justifiés par une source primaire dans la page observée | Vend un atelier de cadrage                          |
| [Shipd — Planning Your Product Roadmap After MVP](https://shipd.pro/blog/product-roadmap-after-mvp)                                                                                        | Organiser après le MVP demandes, améliorations techniques et idées                           | Étapes de roadmap                                          | Intention très proche et reconnaissance de plusieurs types de travaux         | Reste centré sur la construction de roadmap et fournit peu d’aide pour décider quand le support ou la fiabilité interrompent le plan                   | Éditeur ou prestataire produit lié au développement |
| [RadialLeaf — SaaS MVP to Production Roadmap](https://www.radialleaf.com/resources/blog/saas-mvp-to-production-roadmap)                                                                    | Renforcer un MVP pour la production : accès, facturation, onboarding, support et suivi       | Checklist de préparation à la production                   | Rend visibles des travaux que le client ne voit pas directement               | Recouvre surtout le socle du premier client déjà traité par `mvp-saas-quoi-inclure`, pas la cadence durable après les premiers usages                  | Société de développement ou conseil logiciel        |

### Angle mort commun

La SERP décrit souvent une progression linéaire — MVP, premiers clients,
croissance, passage à l’échelle — ou une feuille de route de fonctions. Elle
explique peu comment une petite entreprise prend chaque semaine ou à chaque
lot plusieurs décisions de nature différente : restaurer le service,
enregistrer un signal, recevoir le lot choisi par ailleurs, sécuriser sa
livraison et vérifier son effet.

### Valeur originale que le guide apportera

Un **calendrier adaptable de décisions après le premier client**, composé de
rendez-vous dont la fréquence est choisie par l’entreprise :

1. traiter immédiatement les incidents selon leur effet réel ;
2. réunir régulièrement support, usage, ventes et contraintes techniques ;
3. reprendre du guide de priorisation le lot choisi, le résultat visé, le test
   et les sujets reportés, sans les arbitrer une seconde fois ;
4. vérifier avant mise en ligne tests, surveillance et retour arrière ;
5. observer après livraison si le problème recule ;
6. revoir périodiquement la direction, le budget et les travaux reportés ;
7. décider explicitement de poursuivre, corriger, configurer, documenter,
   former, réduire, reporter ou arrêter.

Une issue peut aussi être close sans nouveau code : clarification d’un
processus, réglage de configuration, documentation, formation, traitement
manuel temporaire ou adoption d’un composant ou outil standard. Le registre
doit conserver cette issue non technique au même titre qu’une livraison.

Le guide suivra une **friction fictive d’onboarding** de son observation à la
décision suivante, seulement pour faire comprendre l’enchaînement. Il
n’attribuera aucun résultat positif au lot sans observation fictive explicitée
et ne présentera aucune durée comme la bonne cadence pour tous les produits.

## 5. Fiche de preuves

| Affirmation utilisable                                                                                                                                                                                                         | Source primaire, URL et passage utile                                                                                                                                                                                                                                                                                     | Nature                                                                 | Périmètre                                                                                                                       | Date/consultation                                                                                           | Confiance                                                            | Emplacement du lien visible                                                         | Conséquence lecteur                                                                                                                  | Fraîcheur                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Exploiter durablement un service demande de continuer la recherche, de traiter les problèmes techniques, de comprendre les usages, d’améliorer coût et facilité d’usage, d’ajouter certaines fonctions et d’assurer le support | [GOV.UK, « Managing and improving your service through its lifecycle »](https://www.gov.uk/service-manual/agile-delivery/running-your-service-in-a-sustainable-way), sections sur l’amélioration continue et l’exploitation                                                                                               | Manuel officiel de services publics britanniques                       | Services publics britanniques ; principe de gestion, non règle pour un SaaS privé français                                      | publié le 26/11/2018 ; titre seul mis à jour le 22/05/2026 ; consulté le 23/07/2026                         | Élevée dans son contexte                                             | Au début de la séparation des types de décisions                                    | Le lecteur ne réduit pas l’après-MVP à une liste de nouvelles fonctions                                                              | Revalider avant le 23/07/2027 ou dès qu’une mise à jour GOV.UK postérieure au 22/05/2026 modifie le fond                                 |
| L’entreprise ne peut pas tout faire ; elle choisit ses priorités selon la santé du service, les facteurs externes et son caractère critique, en s’appuyant notamment sur mesures, tickets, retours et analyses d’usage         | [GOV.UK, même page](https://www.gov.uk/service-manual/agile-delivery/running-your-service-in-a-sustainable-way), section « Deciding where to focus » et indicateurs de santé                                                                                                                                              | Manuel officiel                                                        | Services publics ; les critères doivent être adaptés au SaaS                                                                    | publié le 26/11/2018 ; titre seul mis à jour le 22/05/2026 ; consulté le 23/07/2026                         | Élevée comme cadre                                                   | Dans le rendez-vous de revue des signaux                                            | La demande la plus récente ne devient pas automatiquement la priorité                                                                | Revalider avant le 23/07/2027 ou dès qu’une mise à jour GOV.UK postérieure au 22/05/2026 modifie le fond                                 |
| La phase en service associe support durable et amélioration continue ; recherche utilisateur, tests, accessibilité, assurance qualité, mesures, surveillance et sécurité continuent après le lancement                         | [GOV.UK, « How the live phase works »](https://www.gov.uk/service-manual/agile-delivery/how-the-live-phase-works), sections sur l’équipe, les mesures et la technologie                                                                                                                                                   | Manuel officiel                                                        | Services publics britanniques ; transposition méthodologique                                                                    | publié le 04/08/2016 ; mis à jour le 08/05/2019 ; consulté le 23/07/2026                                    | Élevée dans son contexte                                             | Dans la section « ce qui continue après la première mise en ligne »                 | Le calendrier conserve des décisions de support et de qualité en plus de la roadmap                                                  | Source ancienne : revalider avant le 23/07/2027 et à toute mise à jour affichée ; ne pas en faire une référence juridique française      |
| Une roadmap explique ce qui est fait et non fait, exprime une valeur ou un résultat plutôt qu’une liste de fonctions, reste itérative et n’est pas le backlog                                                                  | [GOV.UK, « Developing a roadmap »](https://www.gov.uk/service-manual/agile-delivery/developing-a-roadmap), sections sur le but, le contenu et la mise à jour d’une roadmap                                                                                                                                                | Manuel officiel                                                        | Services publics britanniques ; méthode non obligatoire pour un SaaS                                                            | publié le 16/11/2017 ; aucune mise à jour affichée ; consulté le 23/07/2026                                 | Élevée comme définition opérationnelle                               | Près du modèle de roadmap sans fausse promesse                                      | Le dirigeant peut communiquer une direction sans transformer chaque idée en engagement daté                                          | Source ancienne : revalider avant le 23/07/2027 et dès qu’une date de mise à jour apparaît                                               |
| Une roadmap doit avoir une personne responsable de son entretien et une fréquence de mise à jour explicite                                                                                                                     | [GOV.UK, même page](https://www.gov.uk/service-manual/agile-delivery/developing-a-roadmap), principe 11 sur le « who » et le « how »                                                                                                                                                                                      | Manuel officiel                                                        | Le rythme d’une organisation donnée ne sera pas généralisé                                                                      | publié le 16/11/2017 ; aucune mise à jour affichée ; consulté le 23/07/2026                                 | Élevée pour la responsabilité, moyenne pour toute cadence transposée | Dans la fiche de responsabilités                                                    | Chaque décision récurrente reçoit un propriétaire et une date de revue choisie                                                       | Source ancienne : revalider avant le 23/07/2027 et dès qu’une date de mise à jour apparaît                                               |
| Les indicateurs seuls ne suffisent pas : il faut les combiner avec recherche utilisateur, retours, données de support et informations financières pertinentes                                                                  | [GOV.UK, « Measuring the success of your service »](https://www.gov.uk/service-manual/measuring-success/measuring-the-success-of-your-service), sections sur les sources de données                                                                                                                                       | Manuel officiel                                                        | Services publics britanniques ; choix des mesures à adapter au modèle SaaS                                                      | publié le 06/08/2018 ; aucune mise à jour affichée ; consulté le 23/07/2026                                 | Élevée comme principe                                                | Dans la revue après livraison                                                       | Une baisse de tickets peut compléter une mesure d’usage ; un clic seul ne prouve pas la valeur commerciale                           | Source ancienne : revalider avant le 23/07/2027 et dès qu’une date de mise à jour apparaît                                               |
| La fréquence de mise en ligne doit tenir compte de la capacité de l’équipe à soutenir le service ; de petites modifications fréquentes accélèrent le retour d’information et facilitent le diagnostic ou le retour arrière     | [GOV.UK, « Deploying software regularly »](https://www.gov.uk/service-manual/technology/deploying-software-regularly), sections sur le cycle de déploiement et les petites modifications                                                                                                                                  | Guide technologique officiel                                           | Conçu pour des services publics ; le « must » du standard n’est pas une obligation générale pour un SaaS français               | publié le 04/08/2016 ; mis à jour le 23/10/2024 ; consulté le 23/07/2026                                    | Élevée dans son contexte                                             | Dans les vérifications du lot déjà choisi avant sa mise en ligne                    | Le calendrier s’adapte à la capacité réelle de test et de support au lieu d’imposer une livraison quotidienne                        | Revalider avant le 23/07/2027 ou dès une mise à jour GOV.UK postérieure au 23/10/2024                                                    |
| Travailler en petits lots permet de tester plus vite, de corriger la direction plus tôt et est associé dans les recherches DORA à de meilleures performances de livraison et d’organisation                                    | [DORA, « Working in small batches »](https://dora.dev/capabilities/working-in-small-batches/), introduction et caractéristiques d’un petit lot                                                                                                                                                                            | Synthèse de recherche DORA                                             | Développement logiciel ; ne fixe pas une taille universelle pour chaque SaaS                                                    | mis à jour le 08/12/2025 ; consulté le 23/07/2026                                                           | Élevée pour le principe général                                      | Dans le pont depuis le guide de priorisation et les contrôles avant mise en ligne   | Le lot déjà choisi reste assez petit pour être vérifié et repris                                                                     | Revalider avant le 23/07/2027 ou dès une mise à jour DORA postérieure au 08/12/2025                                                      |
| Les métriques DORA sont un outil d’amélioration, pas un concours ; une mesure très précise peut coûter plus qu’elle n’apporte au début, et les petits changements facilitent compréhension et reprise                          | [DORA, « DORA’s software delivery performance metrics »](https://dora.dev/guides/dora-metrics/), conseils d’adoption et d’interprétation                                                                                                                                                                                  | Guide officiel DORA                                                    | Mesure de livraison logicielle ; ne mesure pas à elle seule la valeur client                                                    | mis à jour le 05/01/2026 ; consulté le 23/07/2026                                                           | Élevée pour l’usage des métriques DORA                               | Dans l’encadré « ne construisez pas un tableau de bord avant d’avoir une décision » | Commencer par quelques preuves déjà disponibles plutôt que financer une instrumentation exhaustive                                   | Revalider avant le 23/07/2027 ou dès une mise à jour DORA postérieure au 05/01/2026                                                      |
| Les pratiques de développement sécurisé doivent être intégrées au cycle de développement afin de réduire les vulnérabilités et leurs causes                                                                                    | [NIST SP 800-218 final, « Secure Software Development Framework, version 1.1 »](https://csrc.nist.gov/pubs/sp/800/218/final), résumé et publication finale                                                                                                                                                                | Référentiel officiel américain final                                   | Recommandations de sécurité ; non obligation générale française, exigences réelles à confirmer selon le produit et les contrats | publié le 03/02/2022 ; version 1.1 finale consultée le 23/07/2026                                           | Élevée pour le référentiel                                           | Dans la file « maintenir le service sûr et exploitable »                            | Une vulnérabilité ou une dépendance à risque ne doit pas attendre seulement parce qu’une fonction se vend mieux                      | Revalider dès que NIST publie une version postérieure à 1.1 et, à défaut, avant le 23/07/2027                                            |
| Un budget d’erreur peut illustrer une règle qui suspend les changements ordinaires lorsque la fiabilité n’est plus tenue                                                                                                       | [Google SRE Workbook, « Example Error Budget Policy »](https://sre.google/workbook/error-budget-policy/), politique de l’« Example Game Service » fictif                                                                                                                                                                  | Annexe illustrative, pas politique d’exploitation attribuable à Google | Exemple fictif ; aucun seuil, pourcentage, rythme ou niveau de service n’est transposable tel quel                              | daté du 19/02/2018 ; approuvé le 20/02/2018 ; date de réexamen fixée au 01/02/2019 ; consulté le 23/07/2026 | Élevée sur le mécanisme illustré, nulle pour copier ses seuils       | Dans un encadré facultatif sur la règle d’interruption du programme                 | Le dirigeant écrit sa propre condition observable pour suspendre temporairement les fonctions et restaurer la fiabilité              | Date de réexamen dépassée depuis le 01/02/2019 : n’utiliser que comme illustration et revalider avant chaque publication                 |
| Un service en ligne n’est jamais simplement « fini » : l’équipe doit pouvoir l’exploiter et l’améliorer, même sans équipe permanente à plein temps                                                                             | [GOV.UK, « Iterate and improve frequently »](https://www.gov.uk/service-manual/service-standard/point-8-iterate-and-improve-frequently), critères applicables à la phase live                                                                                                                                             | Standard officiel de services publics                                  | Exigence du standard britannique, non obligation SaaS française                                                                 | publié le 08/05/2019 ; liens seuls mis à jour le 30/05/2022 ; consulté le 23/07/2026                        | Élevée dans son contexte                                             | Dans la conclusion sur le responsable minimal de la suite                           | Un produit sans personne capable de suivre, décider et intervenir n’est pas prêt pour une cadence ambitieuse                         | Revalider avant le 23/07/2027 ou dès une mise à jour de fond postérieure au 08/05/2019                                                   |
| La protection des données et la sécurité doivent être intégrées dès la conception ; il faut notamment examiner les flux, minimiser les données, informer les personnes, préparer leurs droits et maîtriser les bibliothèques   | [CNIL, « Guide RGPD du développeur »](https://www.cnil.fr/fr/guide-rgpd-du-developpeur), préparation, architecture, minimisation, information, droits et bibliothèques ; [annonce officielle de la version 2](https://www.cnil.fr/fr/la-cnil-publie-une-nouvelle-version-de-son-guide-rgpd-pour-lequipe-de-developpement) | Guide de l’autorité française de protection des données                | Première approche générale ; ne remplace ni registre, qualification des rôles ni conseil adapté au traitement                   | page du guide sans date affichée ; version 2 annoncée le 13/12/2021 ; consultée le 23/07/2026               | Élevée comme liste de questions, pas comme audit de conformité       | Dans la vérification RGPD avant livraison                                           | Une évolution qui change des données personnelles n’est pas mise en ligne avant attribution d’un responsable et examen de ses effets | Revalider avant P2, avant publication, lors de toute nouvelle version CNIL et au plus tard le 23/07/2027                                 |
| Les développements et mises à jour doivent intégrer sécurité et protection des données tôt, tester avant production et éviter autant que possible les données personnelles réelles en développement                            | [CNIL, « Sécurité : Encadrer les développements informatiques »](https://www.cnil.fr/fr/securite-encadrer-les-developpements-informatiques), précautions élémentaires et erreurs à éviter                                                                                                                                 | Fiche officielle CNIL                                                  | Précautions générales ; mesures à adapter aux risques, données et responsabilités du SaaS                                       | daté du 14/03/2024 ; consulté le 23/07/2026                                                                 | Élevée comme socle de vérification                                   | Dans la carte « prêt à livrer »                                                     | Un lot est reporté s’il ne peut être testé sans exposer inutilement des données ou s’il introduit une collecte non maîtrisée         | Revalider avant P2, avant publication, dès une modification CNIL postérieure au 14/03/2024 et au plus tard le 23/07/2027                 |
| Une AIPD est obligatoire lorsque le traitement envisagé est susceptible d’engendrer un risque élevé pour les droits et libertés ; elle se mène en amont et se met à jour pendant le cycle de vie                               | [CNIL, « Ce qu’il faut savoir sur l’analyse d’impact relative à la protection des données »](https://www.cnil.fr/fr/ce-quil-faut-savoir-sur-lanalyse-dimpact-relative-la-protection-des-donnees-aipd), obligation, critères et moment de réalisation                                                                      | Fiche officielle CNIL sur l’article 35 du RGPD                         | Ne signifie pas qu’une AIPD est requise pour toute évolution ; qualification juridique et cas du traitement à confirmer         | daté du 18/10/2017 ; consulté le 23/07/2026                                                                 | Élevée sur le déclencheur général, à confirmer sur chaque cas        | Dans la vérification RGPD et les limites juridiques                                 | Si le changement peut créer un risque élevé, le responsable compétent tranche et mène l’AIPD avant mise en œuvre                     | Source juridique ancienne : revalider avant P2, avant publication, à toute évolution réglementaire ou CNIL et au plus tard le 23/07/2027 |

### Vérification RGPD et CNIL à transmettre à P2

Cette vérification n’est ni une attestation de conformité ni un conseil juridique.
Elle s’applique seulement si le lot ajoute ou modifie un traitement de données
personnelles, un flux, une finalité, un destinataire, un sous-traitant, un
transfert, une durée de conservation, un droit d’accès ou un réglage de
confidentialité.

Avant la mise en ligne, le responsable nommé doit alors consigner :

1. les données concernées, la finalité et la base juridique à confirmer ;
2. ce qui peut être supprimé ou rendu facultatif par minimisation ;
3. les accès, destinataires, sous-traitants et transferts éventuels ;
4. la durée de conservation, l’effacement et les moyens d’exercice des droits ;
5. l’information à modifier pour les personnes concernées ;
6. les tests, journaux, protections par défaut et procédure de retour arrière ;
7. la réponse à la question « le traitement est-il susceptible d’engendrer un
   risque élevé pour les droits et libertés ? ».

Si la réponse au dernier point peut être oui, la décision sort du simple
calendrier produit : la personne compétente qualifie le cas et, lorsque le
déclencheur légal est rempli, l’AIPD est menée avant la mise en œuvre. Le guide
ne dira ni qu’une AIPD est systématique, ni qu’elle est inutile sans analyse.

### Contradictions et données à ne pas publier

- Ne pas reprendre la chronologie universelle de **90 jours**, les objectifs de
  **10 clients**, les montants en livres sterling ou l’interdiction des canaux
  publicitaires avancés par Coderacle. La page observée ne fournit pas de
  méthode permettant de généraliser ces prescriptions.
- Ne pas reprendre la fourchette de **3 à 12 mois** observée chez Logicnord ni
  présenter l’amélioration de rétention de son cas comme une preuve applicable
  à un autre SaaS : le protocole n’est pas visible.
- Ne pas reprendre les durées d’atelier, tailles de panel ou objectifs
  numériques de Sparkier comme seuils établis.
- Ne pas imposer une réunion hebdomadaire, une livraison quotidienne, un sprint
  de deux semaines ou une revue trimestrielle. Le rythme dépend du nombre
  d’utilisateurs, du risque, des engagements, de l’équipe et de sa capacité de
  support.
- Ne pas recommander une répartition universelle du type « 60 % fonctions,
  20 % bugs, 20 % dette ».
- Ne pas copier les pourcentages d’indisponibilité ou seuils du budget d’erreur
  du Google SRE Workbook. La source est une annexe illustrative consacrée à un
  service fictif et sa date de réexamen est dépassée ; ce n’est ni une norme ni
  une politique d’exploitation attribuable à Google.
- Ne pas écrire que davantage de livraisons provoque automatiquement davantage
  de chiffre d’affaires ou de rétention.
- Ne pas confondre succès d’une mise en ligne et succès du changement pour le
  client : il faut annoncer l’effet recherché puis l’observer.
- Ne pas promettre qu’une roadmap publique rassure toujours les clients.
- Ne pas appeler « urgent » toute demande liée à une vente ; l’interruption du
  programme doit reposer sur un effet, un engagement ou un risque explicite.
- Ne pas transformer l’expérience éditoriale Hagnéré Code en historique de
  missions ou en résultats clients non documentés.
- Ne pas présenter la vérification CNIL comme une conformité acquise, ni décréter
  qu’une AIPD est ou n’est pas nécessaire sans qualifier le traitement.

### Calculs reproductibles

Le guide ne nécessite ni ROI, ni devis, ni prévision de croissance. L’exemple
de calendrier sera **fictif et illustratif** ; il montrera des décisions sans
produire une estimation de délai.

Pour chaque modification, la fiche peut conserver ce contrôle simple :

```text
Avant : signal observé + période + population ou contexte
Attendu : changement observable + même période ou fenêtre annoncée
Après : résultat observé + limites
Décision : poursuivre / corriger / retirer / mesurer plus longtemps
```

Si P2 montre une mesure, elle doit :

- conserver la même définition avant et après ;
- indiquer la période et la population concernées ;
- distinguer zéro donnée, donnée indisponible et absence de changement ;
- ne pas attribuer au lot un effet commercial que d’autres événements peuvent
  expliquer ;
- signaler qu’un petit nombre de clients rend les pourcentages très instables.

Nature du résultat : **aide à la décision après livraison**, pas preuve causale
ni promesse de rentabilité.

## 6. Empreinte éditoriale à ne pas reproduire

| Guide                                 | Type d’ouverture                                    | Progression                                                   | Dispositif récurrent                                  | Type d’exemple                           | Place du CTA                   | Type de conclusion                          |
| ------------------------------------- | --------------------------------------------------- | ------------------------------------------------------------- | ----------------------------------------------------- | ---------------------------------------- | ------------------------------ | ------------------------------------------- |
| `mvp-saas-quoi-inclure`               | Premier client prêt à utiliser le produit           | Journée complète puis couches du service                      | Trois moments de la journée et checklist de lancement | SaaS fictif lors de son premier parcours | Après tests et bon/mauvais fit | Choisir la version la plus simple           |
| `prioriser-fonctionnalites-mvp-saas`  | Dix demandes concurrentes dans une réunion          | Message brut, problème, preuve, quatre voies de décision      | Fiches du tri d’un prochain lot                       | Cinq demandes comparées                  | Après la décision autonome     | Écrire lot, test et reports                 |
| `contrat-tma-application`             | Application en panne et responsabilités incertaines | Diagnostic, périmètre, niveaux de service, prix et clauses    | Cartes contractuelles et questions au prestataire     | Situations de support et reprise         | Après choix du contrat         | Choisir TMA, support, reprise ou autre mode |
| `cout-maintenance-application-metier` | Dépenses invisibles après mise en ligne             | Inventaire des postes, preuves, formule annuelle et scénarios | Feuille de calcul budgétaire                          | Cas chiffré fictif                       | Après calcul et mauvais fit    | Budgéter, confirmer ou reporter             |
| `combien-de-temps-developper-saas`    | Deux délais incompatibles                           | Ligne d’arrivée, dépendances, calcul et scénarios             | Calendriers et fiche de douze champs                  | Exemple fictif chiffré de bout en bout   | Après règle de recalcul        | Réduire, tester, déplacer ou reporter       |

### Choix du nouveau guide

```text
Tension ou question motrice : les premiers clients apportent enfin des preuves, mais ils créent simultanément des urgences, des demandes et des obligations que le dirigeant traite dans le désordre
Type d’ouverture retenu et pourquoi : une seule semaine concrète avec un client bloqué, une promesse commerciale et une mise à jour technique ; le lecteur reconnaît son quotidien avant toute méthode
Progression retenue et pourquoi : de la file unique qui entretient l’urgence vers un calendrier distinct du tri détaillé — protéger, recevoir le lot choisi, autoriser ou reporter sa mise en ligne, vérifier, réviser
Artefact signature : calendrier de décisions récurrentes après le premier client, copiable et complété par un registre « signal, responsable, prochaine décision »
Rythme/registre de voix : scènes courtes, questions de dirigeant, exemples concrets ; aucune cérémonie de product management imposée
Place naturelle du CTA : après le calendrier rempli, l’exemple fictif et les situations où il vaut mieux ne pas lancer un nouveau lot
Forme de conclusion : inscrire les quatre prochaines décisions et leurs responsables, avec possibilité explicite de réduire, reporter ou arrêter
Au moins trois différences avec les guides voisins : pas de journée du premier utilisateur ; pas de comparaison détaillée de fonctions ; pas de contrat ou SLA ; pas de budget annuel calculé ; pas de délai moyen ; pas de feuille de route annuelle prédictive
```

## 7. Plan annoté

| Section provisoire                                              | Question résolue                                             | Preuve ou exemple                                                                                                                                        | Conséquence/décision                                                                                                                                                                  | Format choisi                                                       |
| --------------------------------------------------------------- | ------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| Vos premiers clients ont changé la nature du travail            | Pourquoi tout paraît-il urgent après le MVP ?                | Scène d’une semaine : blocage client, intégration demandée, mise à jour de dépendance                                                                    | Admettre que ces sujets ne se traitent pas dans la même liste                                                                                                                         | Ouverture narrative courte puis verdict                             |
| Commencez par quatre files, pas par une grande roadmap          | Comment séparer les sujets sans les arbitrer tous ensemble ? | Service interrompu ; problèmes récurrents ; lot produit déjà choisi ; fiabilité, sécurité et maintenance                                                 | Attribuer chaque signal à une file et un responsable                                                                                                                                  | Quatre cartes empilables                                            |
| Ce qui interrompt le programme doit être écrit avant l’incident | Quand une demande passe-t-elle devant le lot prévu ?         | Principe de politique d’interruption, avec l’« Example Game Service » du Google SRE Workbook présenté comme fiction illustrative                         | Écrire des conditions propres : effet client, engagement, sécurité, impossibilité d’exploiter                                                                                         | Encadré « votre règle d’interruption »                              |
| Enregistrer les signaux sans refaire la priorisation            | Que faut-il conserver entre deux choix de lot ?              | Tickets, usages, conversations et données financières pertinentes, avec les limites de mesure selon GOV.UK                                               | Garder problème, personne touchée, fréquence, effet, preuve et responsable ; renvoyer au guide voisin lorsque plusieurs demandes doivent être comparées                               | Fiche de registre copiable                                          |
| Pont unique : recevoir le lot déjà choisi                       | Quelles informations entrent dans la cadence d’évolution ?   | Sortie de `/guides/prioriser-fonctionnalites-mvp-saas` et principe DORA des petits lots                                                                  | Reprendre sans nouveau score le résultat visé, le test, le responsable et les sujets reportés                                                                                         | Encadré court + lien, sans atelier de choix                         |
| Décider si le lot peut être mis en ligne                        | Que faut-il vérifier avant de modifier le service ?          | Tests, surveillance, procédure de retour, capacité de support, NIST SSDF et vérification CNIL si les données personnelles changent                       | Reporter ou réduire si l’équipe ne peut ni détecter ni corriger un problème, ou si un effet RGPD reste sans responsable                                                               | Carte « prêt à livrer » + vérification RGPD conditionnelle          |
| Vérifier l’effet, pas seulement la livraison                    | Comment savoir si la modification a aidé ?                   | Modèle avant, attendu, après ; mesures et recherche combinées                                                                                            | Poursuivre, corriger, retirer ou observer plus longtemps                                                                                                                              | Mini-registre avant/après                                           |
| Revoir la direction et le budget                                | Comment éviter une roadmap devenue promesse ?                | Roadmap GOV.UK : intention et résultat, pas backlog ; responsable et fréquence explicites                                                                | Conserver, abandonner ou reformuler les prochaines intentions ; financer les travaux indispensables                                                                                   | Modèle de revue périodique                                          |
| Un fil rouge d’onboarding pour comprendre l’ordre des décisions | À quoi ressemble ce fonctionnement dans une petite équipe ?  | Friction d’onboarding suivie de l’observation à la revue d’effet ; incident, export prospect et dépendance de sécurité seulement comme contrepoints      | Montrer le même problème, son propriétaire, le lot déjà choisi, les contrôles avant mise en ligne, l’observation après livraison et la décision suivante sans inventer d’amélioration | Frise d’étapes explicitement illustrative, sans cadence universelle |
| Copiez votre calendrier de décisions                            | Comment agir aujourd’hui sans outil supplémentaire ?         | Tableau : décision, déclencheur, responsable, participants utiles, preuve, prochaine date                                                                | Remplir les quatre prochaines décisions ; adapter la fréquence au risque et à l’équipe                                                                                                | Bloc copiable, cartes mobiles                                       |
| Fermer aussi les issues sans développement                      | Le code est-il toujours la bonne réponse ?                   | Processus clarifié, configuration, documentation, formation, service manuel temporaire, composant ou outil standard                                      | Résoudre et documenter l’issue sans créer artificiellement un lot logiciel                                                                                                            | Carte « issue non technique » + exemples                            |
| Quand il ne faut pas lancer un nouveau lot                      | Le développement est-il toujours la bonne suite ?            | Absence d’utilisateurs, incident actif, outil standard suffisant, coût d’exploitation injustifié, personne sans capacité de décision                     | Valider, restaurer, configurer, documenter, former, acheter, maintenir, réduire ou arrêter avant de développer                                                                        | Bon fit / mauvais fit                                               |
| Décrire le contexte du SaaS                                     | Que produit réellement le CTA ?                              | Route actuelle `/demarrer-un-projet` : formulaire guidé de 2 à 3 minutes, lecture humaine, objectif de réponse le prochain jour ouvré sans délai garanti | Transmettre un brief pour recevoir de premières recommandations ; un créneau d’échange n’est proposé que s’il est pertinent, sans promesse de développement                           | CTA transactionnel sobre et exact                                   |
| Questions fréquentes                                            | Réponses rapides aux objections                              | Première phrase répond oui/non/condition ; renvois vers sections                                                                                         | Lever les derniers freins sans répéter le guide                                                                                                                                       | FAQ                                                                 |
| Sources et limites                                              | D’où viennent les principes et jusqu’où s’appliquent-ils ?   | Liens officiels datés, concurrents non utilisés comme preuve d’efficacité                                                                                | Distinguer référentiel, exemple, hypothèse et adaptation au SaaS                                                                                                                      | Liste commentée courte                                              |

### Détails de l’exemple fictif à transmettre à P2

Le cas sert uniquement à faire comprendre l’ordre. Il ne doit contenir ni nom
de client réel, ni résultat revendiqué par Hagnéré Code.

```text
Produit fictif : SaaS B2B qui centralise des demandes d’intervention

Fil rouge — friction d’onboarding :
1. Observer : trois utilisateurs décrivent la même incompréhension lors de la première configuration ; conserver leurs contextes et la définition exacte du blocage, sans convertir trois cas en pourcentage.
2. Attribuer : nommer la personne qui rassemble tickets, observations d’usage et retours ; noter ce qui manque.
3. Recevoir le lot : le guide de priorisation a déjà produit un résultat visé, un petit lot, un test et les sujets reportés ; ne pas les choisir une seconde fois ici.
4. Préparer : écrire avant livraison le signal, la population ou le contexte et la fenêtre d’observation qui seront repris après ; accepter qu’une clarification de texte, une configuration ou une courte documentation puisse résoudre l’issue sans nouveau code.
5. Vérifier avant la mise en ligne : contrôler tests, surveillance, support et retour arrière ; si le changement touche des données personnelles, effectuer la vérification CNIL adaptée et nommer le responsable avant mise en ligne.
6. Vérifier : reprendre la même définition, la même population ou le même contexte et la fenêtre annoncée ; consigner le résultat réellement observé et ses limites, même s’il n’y a pas de changement ou pas assez de données.
7. Décider : poursuivre, corriger, retirer, documenter, former ou observer plus longtemps ; mettre ensuite à jour la direction, le budget et les travaux reportés sans inventer un effet positif.

Contrepoints qui ne deviennent pas de nouveaux fils rouges :
- un client ne peut plus créer une demande après une modification récente : appliquer la règle d’interruption, restaurer le parcours et vérifier les demandes affectées ;
- une dépendance d’authentification fait l’objet d’un avis de sécurité : qualifier le risque et traiter la mise à jour selon ce risque ;
- un prospect exige un export avant de signer : ne rien promettre sur ce seul message et renvoyer l’éventuelle comparaison de demandes au guide de priorisation.
```

Ne pas chiffrer artificiellement le nombre de jours, les revenus, le taux de
conversion ou l’effet du lot. Le nombre de trois utilisateurs appartient au cas
fictif et sert seulement à montrer plusieurs descriptions concordantes ; il ne
constitue ni seuil de décision ni preuve de fréquence.

### FAQ préparée

1. **À quelle fréquence faut-il faire évoluer un SaaS ?** Il n’existe pas de
   fréquence valable pour tous les SaaS ; choisissez un rythme que l’équipe
   peut tester, mettre en ligne et soutenir, puis rendez explicites les dates
   de décision.
2. **Faut-il accepter toutes les demandes des premiers clients ?** Non ; une
   demande est un signal à comprendre, sauf lorsqu’un engagement, un incident
   ou un risque vérifié impose une action.
3. **Comment dire non à une fonction demandée par un client ?** Reformulez le
   problème compris, dites ce que vous vérifiez et annoncez la prochaine
   décision, sans inventer une date de livraison.
4. **Faut-il publier une roadmap avec des dates ?** Pas nécessairement ; une
   roadmap peut communiquer les problèmes et résultats visés, tandis qu’une
   date n’est annoncée que lorsque le lot, les dépendances et la capacité sont
   suffisamment connus.
5. **Quelle place réserver à la maintenance et à la sécurité ?** Une place
   explicite, décidée selon l’état du service, les risques, les obligations et
   la capacité de l’équipe, pas un pourcentage universel.
6. **Comment savoir si une nouvelle fonction fonctionne ?** Écrivez avant la
   livraison ce qui devrait changer, sur quelle population et pendant quelle
   période, puis combinez la mesure avec les retours et le support.
7. **Quand faut-il arrêter de faire évoluer le SaaS ?** Lorsque le problème
   n’est plus confirmé, que l’exploitation coûte durablement plus que la
   valeur attendue ou que personne ne peut soutenir le service, réduire ou
   arrêter peut être plus responsable qu’ajouter un lot.

## 8. Ressource et conversion

```text
Une ressource est-elle naturellement nécessaire ? non, pas de fichier téléchargeable distinct
Problème qu’elle résout après la lecture : le lecteur a besoin d’un calendrier immédiatement copiable, pas d’un PDF qui répète l’article
Résultat autonome produit : quatre prochaines décisions inscrites avec déclencheur, responsable, preuve attendue, contrôles avant mise en ligne et date de revue
Format éditable et format de consultation : bloc Markdown/texte copiable dans l’article et cartes HTML accessibles sur mobile
Rubriques, champs ou matrices réellement livrés : type de décision ; signal ou déclencheur ; effet observé ; responsable ; personnes à consulter ; preuve manquante ; résultat attendu ; condition d’interruption ; contrôles avant mise en ligne ; effet éventuel sur les données personnelles ; prochaine date ; décision technique ou non technique et motif
Exemple rempli : fil rouge fictif d’onboarding du SaaS de demandes d’intervention, clairement signalé comme illustration
Conclusion « ne pas investir » possible : oui — valider le besoin, restaurer le service, configurer, documenter, former, traiter manuellement, adopter un outil standard, maintenir sans ajouter, réduire ou arrêter
Sources, hypothèses et limites visibles : sources officielles près des affirmations ; aucune cadence ni répartition universelle ; exemple fictif ; vérification CNIL qui ne vaut ni audit de conformité ni conseil juridique
Données saisies et destination de ces données : aucune collecte ; le lecteur copie le modèle dans son propre outil
Processus de génération reproductible : non applicable, pas de fichier généré
Journal de QA (formats, pages, visuel, accessibilité, liens, compatibilité) : P4 a contrôlé les cartes à 390 px, la copie du modèle, les liens et l’absence d’information décisive hors écran
Limites connues et niveau de revue humaine : le calendrier ne remplace ni l’analyse d’incident, ni l’avis de sécurité, ni la qualification RGPD, ni un engagement contractuel ; validation éditoriale humaine requise
Mode de maintenance : appliquer les échéances exactes de la colonne « Fraîcheur » ; revalider avant P2 et publication les sources CNIL, et dès une nouvelle version NIST SSDF
Test du fichier ou outil : copier-coller le modèle dans un éditeur de texte et vérifier qu’il reste compréhensible sans mise en page
Bon fit Hagnéré Code : SaaS existant avec premiers utilisateurs, plusieurs demandes concurrentes, une équipe capable d’intervenir et un dirigeant qui veut organiser les prochains lots
Mauvais fit : aucun usage réel ; incident ou compromission en cours ; produit remplaçable par un outil standard ; aucune personne capable de décider ou de tester ; besoin uniquement marketing ; exploitation dont la valeur ne justifie plus le coût
Action non commerciale : remplir le calendrier et nommer les responsables avant d’acheter un développement
CTA principal et résultat après clic : « Décrire mon projet » vers `/demarrer-un-projet` ; le prospect remplit un parcours guidé annoncé en 2 à 3 minutes, son brief est lu par une personne et Hagnéré Code vise une réponse argumentée le prochain jour ouvré, sans délai garanti ; les premières recommandations peuvent être suivies d’un créneau d’échange seulement s’il est pertinent, sans promesse de lot ni de développement
```

### Modèle copiable à intégrer dans la page

```text
DÉCISION À PRENDRE
Type : protéger le service / enregistrer / recevoir le lot choisi / autoriser ou reporter la livraison / vérifier / réviser
Signal ou déclencheur :
Personne ou activité touchée :
Effet observé :
Preuve disponible :
Ce qui manque encore :
Responsable de la décision :
Personnes à consulter :
Résultat attendu :
Condition qui interrompt le programme normal :
Effet sur des données personnelles : non / oui / à qualifier
Responsable de la vérification RGPD si nécessaire :
Prochaine date de décision :
Décision prise : développer / configurer / documenter / former / traiter manuellement / acheter / maintenir / reporter / retirer / arrêter
Motif en une phrase :
Date de réexamen ou événement qui rouvrira le sujet :
```

## 9. Rapports de sortie des quatre passes

### Rapport P1 — Recherche

```text
PASSE 1 TERMINÉE — REVALIDÉE APRÈS CONTRE-AUDIT
Slug : faire-evoluer-saas-apres-mvp
Lecteur et phrase réelle : fondateur ou dirigeant d’un SaaS B2B avec ses premiers clients ; « Depuis qu’on a nos premiers clients, chaque semaine apporte des demandes, des bugs et des promesses commerciales. Comment continuer à faire évoluer le produit sans travailler seulement dans l’urgence ? »
Décision : une fois le lot choisi dans le guide voisin, installer une cadence adaptée qui protège le service, enregistre les signaux, autorise ou reporte la livraison, vérifie son effet et révise direction et budget
Angle et forme dominante : calendrier de décisions récurrentes après le premier client, complété par un registre copiable et un fil rouge fictif d’onboarding purement illustratif
Pages proches et différence : `mvp-saas-quoi-inclure` définit le premier socle ; `prioriser-fonctionnalites-mvp-saas` compare les demandes et produit un seul prochain lot avec son test ; les guides TMA et coût de maintenance encadrent contrat et budget ; ce guide commence avec ce lot déjà choisi et organise interruption, contrôles avant mise en ligne, vérification et revue
Sources décisives : GOV.UK sur exploitation durable, phase live, roadmap, mesure et déploiements ; DORA sur petits lots et mesure ; publication finale NIST SP 800-218 v1.1 sur sécurité intégrée ; CNIL sur protection des données dès la conception et AIPD conditionnelle ; Google SRE uniquement comme exemple fictif de règle d’interruption
Incertitudes exclues : cadence universelle, programme de 90 jours, seuil de clients, délais, répartition fixe du temps, seuils du cas Google SRE, conformité RGPD acquise, AIPD automatique, croissance ou rétention promises, chiffres de cas concurrents non auditables
Action autonome et CTA possible : copier le calendrier, inscrire quatre décisions et leurs responsables ; CTA réel « Décrire mon projet » vers `/demarrer-un-projet`, formulaire de 2 à 3 minutes puis lecture humaine et objectif de réponse le prochain jour ouvré sans délai garanti
Plan : scène vécue ; quatre files ; règle d’interruption ; registre des signaux ; pont depuis le lot déjà choisi ; six contrôles avant mise en ligne et vérification RGPD conditionnelle ; fil rouge onboarding ; vérification ; issues non techniques ; revue de direction et budget ; calendrier copiable ; bon/mauvais fit ; CTA réel ; FAQ ; sources
Snapshot : `docs/research/manifests/faire-evoluer-saas-apres-mvp-p1.sha256`
```

### Rapport P2 — Rédaction et intégration

```text
PASSE 2 TERMINÉE — PRÊTE POUR CONTRE-AUDIT INDÉPENDANT
Fichiers créés ou modifiés : dossier de recherche ; page publique ; image sociale ; registre des guides ; lien entrant depuis `prioriser-fonctionnalites-mvp-saas` ; garde-fous éditoriaux automatisés
Ouverture et réponse : scène directe d’un client bloqué, d’un prospect qui exige une fonction et d’une dépendance à examiner ; réponse immédiate en langage dirigeant : séparer les décisions après le lot déjà choisi
Forme propre au sujet : quatre flux de décision, règle d’interruption, six contrôles avant mise en ligne, parcours fictif en sept étapes et cinq cartes servant à inscrire les quatre prochaines décisions réelles
Exemples ou calculs : SaaS B2B fictif de demandes d’intervention avec trois utilisateurs, explicitement présenté sans seuil ni fréquence extrapolée ; absence volontaire de cadence, pourcentage ou résultat universels
Sources visibles : GOV.UK, DORA, publication finale NIST SP 800-218 v1.1, Google SRE attribué comme exemple fictif, CNIL sur développement, sécurité et AIPD conditionnelle
Action autonome, bon fit et mauvais fit : registre complet copiable ; calendrier utilisable sans contact ; alternatives sans code ; cas où développer, maintenir, réduire, acheter ou arrêter sont distingués
CTA et destination : « Décrire mon projet » vers `/demarrer-un-projet` ; formulaire annoncé en deux à trois minutes, lecture humaine, réponse argumentée sans délai garanti, aucun lot ni échange promis
Contrôles rapides : test éditorial dédié vert (30/30 au 23 juillet 2026) ; assertions sur frontière avec la priorisation, quatre flux, six contrôles avant mise en ligne, vérification RGPD conditionnelle, scénario fictif, calendrier, CTA, absence de formulation interdite et image sociale
Snapshot : `docs/research/manifests/faire-evoluer-saas-apres-mvp-p2.sha256`
```

### Rapport P3 — Contre-audit indépendant

```text
PASSE 3 TERMINÉE — VALIDÉE APRÈS REPRISE
Relecteur indépendant : `/root/p3_saas_evolution`
Snapshot audité : `docs/research/manifests/faire-evoluer-saas-apres-mvp-p2.sha256`
Verdict initial : P0 = 0 ; P1 = 0 ; quatre groupes P2 non bloquants
Corrections appliquées : état documentaire rendu exact ; résultat du test porté à 30/30 ; formulation du lot choisi simplifiée ; métaphore de la porte remplacée par six vérifications avant mise en ligne et par une vérification RGPD conditionnelle
Revalidation finale : P0 = 0 ; P1 = 0 ; P2 = 0
Affirmations et sources revérifiées : 14 sources officielles ou primaires ; absence de cadence universelle ; exemple Google SRE explicitement fictif ; NIST présenté comme référentiel américain ; AIPD conditionnelle
Pédagogie et conversion : quatre décisions distinctes, calendrier copiable, exemple fictif complet, choix explicites entre poursuivre, corriger, reporter, retirer ou arrêter
Contrôles : manifeste P2 exact 6/6 au moment du contre-audit ; test éditorial 30/30 ; ESLint, TypeScript, Prettier et diff-check conformes
État : porte P3 validée ; P4 autorisée
```

### Rapport P4 — Plume humaine et contrôle final

```text
PASSE 4 TERMINÉE
Passages humanisés : bug client, demande commerciale et mise à jour de sécurité séparés dès l'ouverture ; quatre décisions nommées en langage courant ; six vérifications avant mise en ligne sans métaphore artificielle
Coupe ou resserrement : cadence universelle, pourcentage fixe et promesse de roadmap supprimés ; résultat du formulaire décrit sans lot automatique
Retour P3 effectué : oui ; reprise des quatre groupes P2 puis revalidation finale à P0 = 0, P1 = 0 et P2 = 0
Diff sémantique après la plume et revalidation éventuelle : aucune promesse ajoutée ; sources, limites et décisions conservées
Lecture et artefact : 4 490 mots comptés dans l'artefact final, soit 22 minutes avec la convention de 200 mots par minute
Scorecard justifiée : 20/20 ; détail dans la table ci-dessous
Validation humaine réelle : non
Test réalisé par une personne réelle : non
Autorisation éditoriale : Décision de publication : autorisée explicitement par le commanditaire
Commandes et résultats : check:seo, ESLint, TypeScript, batterie Vitest, build Next.js, postbuild et git diff --check conformes au gel final du lot
Largeurs et états contrôlés : 320, 390, 767, 1 024 et 1 440 px ; aucun débordement ; thèmes clair et sombre
Route, image sociale et console : index,follow ; canonical exact ; un H1 ; Article et BreadcrumbList ; image sociale 1 200 × 630 inspectée
Snapshot final : docs/research/manifests/faire-evoluer-saas-apres-mvp-p4.sha256
Statut maximal : publiable — validation éditoriale déléguée
Verdict : porte P4 validée
```

### Scorecard P4

| Axe         | Note 0-2 | Preuve dans la page                                                                                   | Correction éventuelle |
| ----------- | -------: | ----------------------------------------------------------------------------------------------------- | --------------------- |
| Intention   |        2 | Le guide commence après le premier MVP et après le choix du prochain lot                              | Aucune                |
| Décision    |        2 | Protéger, enregistrer, recevoir, livrer ou reporter, vérifier et réviser sont distingués              | Aucune                |
| Pédagogie   |        2 | Un SaaS fictif d'interventions traverse support, onboarding, livraison et observation                 | Aucune                |
| Profondeur  |        2 | Fiabilité, sécurité, données personnelles, effets, budget et arrêt sont couverts                      | Aucune                |
| Preuve      |        2 | GOV.UK, DORA, NIST, CNIL et Google SRE sont attribués avec leurs limites                              | Aucune                |
| Comparaison |        2 | Développer, configurer, documenter, former, acheter, maintenir, reporter ou arrêter restent possibles | Aucune                |
| Originalité |        2 | Un calendrier de décisions remplace la roadmap générique et la liste unique                           | Aucune                |
| Style       |        2 | Situations vécues, termes techniques traduits et absence de métaphore structurante                    | Aucune                |
| Conversion  |        2 | CTA tardif et honnête ; aucune promesse de lot, rendez-vous ou développement                          | Aucune                |
| SEO/produit |        2 | Intention distincte, metadata, maillage, OG, index/follow et cinq largeurs contrôlés                  | Aucune                |

Total final : **20/20**.

### Test lecteur non technique

```text
Test réalisé par une personne réelle : non
Profil du lecteur : non testé
Ce qu'il a compris comme réponse : non revendiqué
Décision qu'il prendrait : non revendiquée
Endroit où il a commencé à survoler : non mesuré
Passage crédible ou trop commercial : non mesuré
Termes ou passages bloquants : non mesurés
Corrections appliquées : contre-audit indépendant, contrôles visuels réels et délégation explicite du commanditaire ; aucun faux test lecteur n'est inventé
```

## 10. Sources consultées

### Revalidation du corpus

Le 23 juillet 2026, les **14 URL primaires ou officielles** ci-dessous et les
**9 pages concurrentes** conservées ont toutes répondu en HTTP 200. Ce contrôle
d’accès ne suffit pas à valider une affirmation : les passages utiles, dates,
périmètres et déclencheurs de revalidation sont donc consignés dans la fiche de
preuves. Les pages concurrentes restent des observations de SERP et ne servent
pas de preuve d’efficacité.

### Sources primaires ou officielles retenues

- https://www.gov.uk/service-manual/agile-delivery/running-your-service-in-a-sustainable-way
- https://www.gov.uk/service-manual/agile-delivery/how-the-live-phase-works
- https://www.gov.uk/service-manual/agile-delivery/developing-a-roadmap
- https://www.gov.uk/service-manual/measuring-success/measuring-the-success-of-your-service
- https://www.gov.uk/service-manual/technology/deploying-software-regularly
- https://www.gov.uk/service-manual/service-standard/point-8-iterate-and-improve-frequently
- https://dora.dev/capabilities/working-in-small-batches/
- https://dora.dev/guides/dora-metrics/
- https://csrc.nist.gov/pubs/sp/800/218/final
- https://sre.google/workbook/error-budget-policy/
- https://www.cnil.fr/fr/guide-rgpd-du-developpeur
- https://www.cnil.fr/fr/la-cnil-publie-une-nouvelle-version-de-son-guide-rgpd-pour-lequipe-de-developpement
- https://www.cnil.fr/fr/securite-encadrer-les-developpements-informatiques
- https://www.cnil.fr/fr/ce-quil-faut-savoir-sur-lanalyse-dimpact-relative-la-protection-des-donnees-aipd

### Pages de SERP et concurrents observés

- https://www.coderacle.com/blog-details/first-90-days-after-mvp-launch
- https://logicnord.com/blog/article/what-happens-after-mvp-a-startup-product-roadmap-for-the-next-stage
- https://www.sparkier.io/articles/mvp-saas-b2b-arreter-le-feature-creep
- https://shipd.pro/blog/product-roadmap-after-mvp
- https://www.radialleaf.com/resources/blog/saas-mvp-to-production-roadmap
- https://blog.hanadkubat.com/blog/how-to-build-a-saas-mvp-product-roadmap-that-ships
- https://procedo.dev/blog/mvp-product-roadmap-saas/
- https://pixelperinches.com/blog-scaling-after-mvp.html
- https://nuvra.tech/blog/web-development/build-product-roadmap-after-mvp/

### Pages internes inspectées pour la frontière éditoriale

- `/guides/mvp-saas-quoi-inclure`
- `/guides/prioriser-fonctionnalites-mvp-saas`
- `/guides/contrat-tma-application`
- `/guides/cout-maintenance-application-metier`
- `/guides/reprendre-saas-developpe-par-freelance`
- `/guides/agence-saas-ou-freelance`
- `/guides/combien-de-temps-developper-saas`
- `/services/saas-applications-metier`

## 11. Porte de sortie historique P1

- [x] lecteur, situation et décision formulés en langage dirigeant ;
- [x] requête et variantes observées qualitativement, sans faux volume ;
- [x] protocole de SERP daté et reproductible, sans rang prétendu stable ;
- [x] pages concurrentes comparées avec leurs conflits d’intérêt ;
- [x] sources officielles revalidées et reliées aux affirmations utilisables ;
- [x] tableau de preuves complet à neuf colonnes, fraîcheur renseignée ligne par
      ligne ;
- [x] publication finale NIST SP 800-218 v1.1 utilisée ;
- [x] exemple Google SRE attribué à son service fictif, sans seuil transposé ;
- [x] vérification RGPD/CNIL conditionnelle et limite juridique explicites ;
- [x] nombres et généralisations non justifiés explicitement exclus ;
- [x] frontière avec le guide de priorisation existant documentée jusqu’à ses
      entrées et sorties ;
- [x] fil rouge onboarding complet, du signal à la décision après observation ;
- [x] issues sans développement et décisions non techniques visibles ;
- [x] résultat réel de `/demarrer-un-projet` vérifié dans le parcours actuel ;
- [x] plan, artefact signature, action autonome et mauvais fit préparés ;
- [x] aucune ressource téléchargeable promise sans nécessité ;
- [x] au gel P1, aucun fichier de page, registre, roadmap ou manifeste P2–P4 n'était créé ;
- [x] au gel P1, P2, P3 et P4 étaient laissées bloquées.

**P1 : Terminée — porte revalidée.**
