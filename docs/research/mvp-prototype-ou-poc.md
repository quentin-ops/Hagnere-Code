# Dossier de recherche — Prototype, POC ou MVP : que construire d'abord ?

> Ce dossier prépare un guide destiné à un dirigeant ou à un indépendant qui
> reçoit des propositions de « prototype », de « POC » ou de « MVP » sans
> savoir laquelle répond à son risque réel. Le guide ne choisira pas un sigle à
> sa place : il reliera chaque inconnue à l'objet le plus simple capable de
> produire une réponse utilisable.

Statut actuel : **P4 terminée localement — publication retenue jusqu'au gel
commun du lot**.

## Journal des quatre passes

Propriétaire éditorial unique : **agent racine Codex**.

| Passe                        | État                     | Date       | Responsable                       | Snapshot                                   | Blocages |
| ---------------------------- | ------------------------ | ---------- | --------------------------------- | ------------------------------------------ | -------- |
| 1. Recherche                 | Terminée — porte validée | 2026-07-22 | Agent de recherche P1 et synthèse | `manifests/mvp-prototype-ou-poc-p1.sha256` | Aucun    |
| 2. Rédaction et intégration  | Terminée — porte validée | 2026-07-22 | Agent P2 dédié, éditeur unique    | `manifests/mvp-prototype-ou-poc-p2.sha256` | Aucun    |
| 3. Contre-audit indépendant  | Terminée — porte validée | 2026-07-22 | Relecteur P3 indépendant          | `manifests/mvp-prototype-ou-poc-p3.sha256` | Aucun    |
| 4. Plume humaine et contrôle | Terminée — porte validée | 2026-07-22 | Agent racine Codex                | `manifests/mvp-prototype-ou-poc-p4.sha256` | Aucun    |

### Manifeste du snapshot

Le manifeste P1 contient uniquement le SHA-256 du présent dossier. Le hash
n'est pas recopié ici afin de ne pas créer une référence circulaire.

## 1. Fiche d'identité

| Champ                            | Décision documentaire                                                                                                                                                                                                                                                  |
| -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Slug                             | `mvp-prototype-ou-poc`                                                                                                                                                                                                                                                 |
| Titre SEO de travail             | Prototype, POC ou MVP : lequel choisir ?                                                                                                                                                                                                                               |
| H1 de travail                    | Prototype, POC ou MVP : que faut-il construire d'abord ?                                                                                                                                                                                                               |
| Requête principale qualitative   | mvp prototype ou poc                                                                                                                                                                                                                                                   |
| Variantes utiles                 | différence POC prototype MVP ; prototype ou MVP ; à quoi sert un POC ; faut-il un prototype avant un MVP ; POC informatique ; pilote ou MVP                                                                                                                            |
| Moment du parcours               | Décider quoi commander avant d'engager le budget de développement suivant                                                                                                                                                                                              |
| Lecteur précis                   | Dirigeant de TPE/PME, indépendant ou porteur d'un logiciel qui connaît le problème métier, mais ne maîtrise ni le vocabulaire produit ni les différences de responsabilité entre démonstration et service utilisé pour de vrai                                         |
| Situation déclenchante           | Plusieurs prestataires proposent des objets différents sous les mêmes mots, ou l'équipe veut commencer à développer sans avoir écrit la question qui pourrait encore arrêter le projet                                                                                 |
| Phrase qu'il dirait au téléphone | « On me parle d'un prototype, d'un POC et d'un MVP. Je ne veux pas payer trois fois la même chose ni lancer un vrai produit trop tôt. Qu'est-ce que je dois faire construire pour répondre au doute qui bloque la décision ? »                                         |
| Décision principale              | Choisir — ou refuser — le prochain objet à construire à partir d'une seule inconnue décisive, puis écrire la preuve attendue et la décision que cette preuve autorisera                                                                                                |
| Niveau de connaissance initial   | Le lecteur sait expliquer son activité et le résultat attendu, mais peut croire qu'un prototype est forcément du code, qu'un POC garantit le projet ou qu'un MVP est seulement une petite liste de fonctions                                                           |
| Action autonome                  | Remplir une fiche d'expérience avant tout devis : question unique, testeurs, réel ou simulé, preuve attendue, critère de réussite ou d'arrêt, actifs récupérés, limite de temps/budget et décision suivante                                                            |
| CTA possible                     | « Choisir le prochain test utile » vers `/demarrer-un-projet`, après la fiche autonome ; le premier échange doit pouvoir recommander une démonstration plus légère, un essai technique, un pilote, un MVP, un outil existant ou un report                              |
| Bon fit Hagnéré Code             | Projet logiciel ou SaaS dont le problème et le responsable métier sont identifiés, mais dont une inconnue de parcours, de faisabilité, d'exploitation ou d'usage empêche encore de chiffrer honnêtement la suite                                                       |
| Mauvais fit                      | Recherche d'un financement garanti, idée sans personne accessible pour tester, audit juridique ou scientifique spécialisé, besoin déjà correctement couvert par un logiciel existant, ou demande d'un produit complet déguisé sous le mot « POC »                      |
| Hors périmètre                   | Validation complète de l'idée et du marché, liste des fonctions d'un MVP SaaS, fourchettes de prix ou délais moyens, choix no-code/sur-mesure, architecture détaillée, cahier des charges complet, levée de fonds, conseil juridique, fiscal ou financier personnalisé |
| Date et mode de recherche        | 22 juillet 2026 ; SERP francophone qualitative et lecture des pages originales ; sources primaires Eric Ries, GOV.UK Service Manual, EURAXESS/Commission européenne, CNIL et Légifrance ; aucun volume Keyword Planner ou Search Console attribuable disponible        |
| Responsable de la synthèse       | Agent de recherche P1, sous contrôle de l'agent racine                                                                                                                                                                                                                 |

### La décision en une phrase

**Ne demandez pas d'abord « prototype, POC ou MVP ? ». Demandez quelle
inconnue peut encore faire arrêter ou modifier le projet, puis commandez
l'objet le moins lourd qui permettra à la bonne personne de trancher cette
question.**

### Questions indispensables

1. Quelle différence concrète faire entre un prototype, un POC, un pilote et
   un MVP sans supposer l'existence d'un lexique universel que les pages
   observées ne partagent pas ?
2. Quel objet choisir si le doute porte sur la compréhension du parcours par
   les utilisateurs ?
3. Quel objet choisir si une intégration, un algorithme, un matériel, un volume
   ou une contrainte technique peut rendre la solution impossible ?
4. Quand faut-il tester le travail quotidien avec de vraies personnes plutôt
   que montrer une démonstration ?
5. Quand un MVP devient-il nécessaire, et qu'ajoute-t-il en responsabilités par
   rapport à un prototype ou à un POC ?
6. Faut-il obligatoirement passer par les quatre formats, dans un ordre fixe ?
7. Que doit contenir un devis pour que le test aboutisse à une décision plutôt
   qu'à une démonstration flatteuse ?
8. Quels fichiers, accès et documents l'entreprise récupère-t-elle à la fin,
   et quels droits d'usage ou de cession le contrat documente-t-il, y compris
   si le test échoue ?
9. Quand faut-il acheter un outil existant, faire le test manuellement,
   reporter ou ne rien construire ?

### Objections et craintes

- « Un POC jetable, c'est de l'argent perdu. »
- « Si nous ne construisons pas déjà le MVP, nous allons payer deux fois. »
- « Une maquette ne prouve rien parce qu'elle ne fonctionne pas vraiment. »
- « Le prestataire dit que son prototype pourra devenir le produit final. »
- « Puisque j'ai payé le test, je suppose que je possède tout ce qui a été
  produit. »
- « Si le test réussit, cela veut dire que le marché est validé. »
- « Nous devons montrer quelque chose de complet à un investisseur ou à un
  grand client. »

### Score de lancement issu du lot

Cette note priorise le sujet. Elle ne prédit ni trafic, ni position Google, ni
conversion.

| Critère                          |       Note | Justification                                                                                                                                |
| -------------------------------- | ---------: | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Adéquation avec une offre vendue |      25/25 | Le choix précède directement un cadrage de SaaS, d'application métier ou d'outil interne                                                     |
| Proximité d'une demande de devis |      24/25 | Le lecteur compare déjà des façons de démarrer et peut devoir acheter une première mission courte                                            |
| Preuve qualitative de demande    |      12/15 | La SERP francophone contient des comparatifs récents et des questions récurrentes, mais aucun volume propriétaire n'est disponible           |
| Preuve ou outil original         |      15/15 | La fiche d'expérience transforme un mot commercial en question, preuve, limite et décision acceptables                                       |
| Différenciation                  |       8/10 | Le sujet est déjà couvert par plusieurs définitions ; l'originalité vient de la fiche avant devis et de l'absence de chronologie obligatoire |
| Maillage et CTA utile            |       7/10 | Maillage naturel vers validation, premier MVP, budget et prestataire ; le CTA reste utile seulement si la fiche ne suffit pas                |
| **Total**                        | **91/100** | Sujet prioritaire ; la faiblesse principale reste l'absence de données de demande propres au site                                            |

## 1 bis. Contrat de langage humain

**Réponse attendue en une phrase :** un prototype sert surtout à voir et faire
essayer un parcours, un POC à vérifier une difficulté précise, un pilote à
observer le travail réel dans un cadre limité, et un MVP à utiliser une
première version cohérente pour apprendre auprès de vrais utilisateurs ; si
votre doute n'exige aucun de ces objets, ne les commandez pas.

**Définitions de travail, à annoncer comme telles :**

- un **prototype** est une représentation destinée à explorer ou faire essayer
  une idée ; il peut être dessiné, cliquable ou codé, sans être exploitable en
  production ;
- un **POC**, pour « proof of concept » ou preuve de faisabilité, isole une
  difficulté pour vérifier si elle peut fonctionner dans les conditions
  définies ;
- un **pilote** décrit un déploiement limité dans une situation réelle et
  contrôlée afin d'observer le travail, l'accompagnement et les incidents ;
- un **MVP**, pour « minimum viable product », décrit le test le plus léger qui
  permet d'apprendre auprès de vrais utilisateurs ; il peut encore comporter
  des étapes manuelles ou prendre la forme d'une première version utilisable.

Pilote et MVP peuvent se recouvrir : le premier terme décrit les conditions
limitées du déploiement, le second ce qui est construit pour apprendre. Une
même première version peut donc être un MVP testé sous forme de pilote.

Ces définitions organisent le guide. Elles ne prétendent pas imposer un standard
terminologique universel. Les sources observées se recouvrent ou se
contredisent sur le prototype et le POC ; le devis doit donc écrire l'objectif
et la preuve au lieu de s'appuyer sur le seul nom.

**Mots ordinaires à privilégier :** question qui bloque, montrer un parcours,
faire essayer, vérifier si cela marche, vraie donnée ou donnée fictive, personne
qui teste, résultat observé, seuil d'arrêt, version utilisable, travail manuel,
ce qui sera récupéré, prochaine décision.

**Mots à traduire ou éviter à l'ouverture :** discovery, product-market fit,
desirability, feasibility, viability, UX, spike, alpha, beta, go/no-go,
timebox, backlog, scope, hypothesis-driven, learning vehicle, livrable,
réversibilité, preuve marché.

### Projet des 150 premiers mots

> Vous devez montrer votre idée à de futurs utilisateurs, vérifier qu'une
> connexion avec un logiciel existant est possible ou mettre une première
> version entre les mains d'un client. On vous propose un prototype, un POC ou
> un MVP, mais ces mots ne désignent pas toujours la même chose d'un devis à
> l'autre.
>
> Ne choisissez pas d'abord le nom. Écrivez la question qui pourrait encore
> faire arrêter ou modifier le projet. Si vous voulez savoir si une personne
> comprend le parcours, faites un prototype : une représentation qu'elle peut
> essayer. Si une difficulté technique peut bloquer tout le projet, faites un
> POC, c'est-à-dire un essai limité à cette difficulté. Si vous devez observer
> un usage réel, un pilote encadré peut être nécessaire. Si vous devez apprendre
> auprès de vrais utilisateurs avec le test le plus léger possible, choisissez
> un MVP, qui peut lui-même être déployé sous forme de pilote. Ce guide vous aide
> à choisir l'objet le plus simple,
> la preuve à exiger et la décision à prendre quand le test se termine — y
> compris ne rien développer maintenant.

**Ce que le lecteur saura décider après ces 150 mots :** il choisira la
prochaine mission à partir de la question à trancher et non du terme le plus
impressionnant ; il saura aussi qu'un test peut conclure à l'arrêt ou au report.

### Test de l'ouverture

- [x] la situation vécue précède toute méthode de l'agence ;
- [x] prototype, POC et MVP sont traduits dans la phrase où ils deviennent
      utiles ;
- [x] la réponse principale est déjà donnée ;
- [x] aucun mur de lexique ne retarde la décision ;
- [x] aucune chronologie obligatoire n'est présentée comme un fait ;
- [x] la possibilité de ne rien construire est visible ;
- [x] le texte reste propre au sujet après le test de substitution.

### Test sujet, action, résultat préparé pour P4

| Formulation abstraite à bannir        | Qui agit ?                            | Action concrète                                                                     | Résultat attendu                                                         | Formulation humaine prévue                                                                                     |
| ------------------------------------- | ------------------------------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------- |
| Lever l'incertitude principale        | Le dirigeant et le responsable métier | Écrivent la question qui pourrait arrêter ou modifier le projet                     | Le prestataire sait ce qu'il doit démontrer                              | « Écrivez la question qui vous ferait renoncer au budget suivant si la réponse était mauvaise. »               |
| Cadrer le périmètre du POC            | L'entreprise et le prestataire        | Choisissent une entrée, un cas difficile, une sortie et ce qui restera simulé       | Le test ne se transforme pas en produit incomplet                        | « Nommez le cas exact à essayer, ce qui sera réel et ce qui sera simulé. »                                     |
| Définir les critères de succès        | Le décideur métier                    | Écrit l'observation ou le nombre qui autorise la suite et celui qui impose l'arrêt  | Le résultat ne peut pas être réinterprété après coup                     | « Décidez avant le test quel résultat fera poursuivre, corriger ou arrêter. »                                  |
| Assurer la réversibilité du prototype | Le prestataire                        | Rend les fichiers, notes, résultats, accès et limites dans des formats exploitables | L'entreprise conserve l'apprentissage même si le code est jeté           | « Écrivez ce que vous récupérez à la fin, même si le test échoue. »                                            |
| Organiser un go/no-go                 | Le dirigeant                          | Compare le résultat au critère écrit et choisit la prochaine dépense                | Le test se termine par une décision et non par une nouvelle présentation | « À la date prévue, choisissez : poursuivre, refaire un essai ciblé, acheter autrement, reporter ou arrêter. » |

## 2. Frontières et anti-cannibalisation

| Page existante ou prévue                   | Intention détenue                                                                                | Différence du nouveau guide                                                                                                                             | Lien ou arbitrage nécessaire                                                                   |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `valider-idee-saas-avant-developper`       | Vérifier le problème, l'acheteur, l'accès au marché et l'engagement avant de financer le produit | Le nouveau guide commence lorsqu'une inconnue concrète exige peut-être un objet à tester ; il ne reprend ni les entretiens ni le plan de quatorze jours | Lien en amont si le problème ou l'acheteur restent hypothétiques                               |
| `mvp-saas-quoi-inclure`                    | Définir ce qui doit fonctionner pour servir un premier client                                    | Ici, aucune liste de fonctions, de comptes, de support ou de sécurité ; le sujet est le choix du type d'expérience avant ce périmètre                   | Lien vers le guide MVP seulement quand une version réellement utilisable devient nécessaire    |
| `reprendre-mvp-vibe-code`                  | Vérifier si un produit déjà généré peut être repris                                              | Le nouveau guide intervient avant la construction ; il ne diagnostique ni dépôt, ni base, ni hébergement existant                                       | Lien si un prototype ou MVP a déjà été construit et doit être repris                           |
| `combien-coute-un-saas`                    | Préparer le budget complet du prototype à l'exploitation                                         | Aucun prix ou délai moyen ici ; la fiche demande seulement une limite écrite propre au test                                                             | Lien après le choix de l'objet, pour financer la suite à périmètre comparable                  |
| `cahier-des-charges-saas`                  | Décrire la vie complète d'une entreprise cliente pour comparer des devis                         | La fiche des 10 questions avant le devis tient sur une page et ne remplace pas le cahier des charges du produit                                         | Lien lorsque la décision devient « construire un MVP exploitable »                             |
| `choisir-prestataire-application-metier`   | Comparer plusieurs équipes, preuves, prix et contrats                                            | Le guide ne choisit pas l'équipe ; il définit ce que la mission courte doit rendre                                                                      | Lien pour mettre ensuite les prestataires en concurrence sur une question identique            |
| `agence-saas-ou-freelance`                 | Choisir une organisation de réalisation et de continuité                                         | Ici, l'équipe n'est pas encore le sujet : prototype, POC, pilote ou MVP dépendent d'abord de la question à trancher                                     | Lien une fois l'objet et les responsabilités connus                                            |
| `/services/saas-applications-metier`       | Présenter une offre transactionnelle de développement                                            | Le guide doit pouvoir recommander un outil existant, un test sans code, un report ou un arrêt                                                           | CTA tardif seulement si une incertitude justifie une mission de conception ou de développement |
| futur `prioriser-fonctionnalites-mvp-saas` | Choisir entre des fonctions métier concurrentes                                                  | Aucun classement de backlog ici ; un MVP n'est qu'une sortie possible du choix d'expérience                                                             | Ne pas introduire une matrice valeur/effort                                                    |
| futur `combien-de-temps-developper-saas`   | Construire un calendrier du prototype à la production                                            | Aucun délai générique par format ; la mission a une limite décidée pour sa question                                                                     | Lien éventuel seulement après la décision de développer                                        |

**Justification d'une URL distincte :** aucune page actuelle ne part de la
question d'achat « quel objet dois-je commander pour répondre au doute qui
conditionne la prochaine dépense, et qu'est-ce que je dois récupérer même si
le test échoue ? ».

### Frontière de réponse à conserver pendant P2

- ne pas répéter le protocole d'entretiens, la validation du prix ou l'accès au
  marché ;
- ne pas reprendre les sept indispensables du MVP SaaS ;
- ne donner aucune fourchette de prix ou de délai par format ;
- ne pas choisir no-code, IA, freelance ou agence à la place du lecteur ;
- ne pas transformer la fiche d'expérience en cahier des charges complet ;
- ne pas prétendre qu'un POC, un prototype et un MVP forment toujours trois
  étapes successives ;
- ne pas traiter un prototype codé comme un début de production par défaut ;
- accepter qu'un MVP soit déployé sous forme de pilote, à condition d'expliquer
  séparément la version, le cadre limité, l'aide et ce qui reste manuel.

## 3. Demande et vocabulaire du lecteur

### Observation qualitative du 22 juillet 2026

Requêtes et formulations observées dans les résultats francophones :

- « différence POC prototype MVP » ;
- « POC, prototype et MVP : quelles différences ? » ;
- « prototype vs MVP » ;
- « quand utiliser le POC, le prototype et le MVP ? » ;
- « quelle est la différence entre un POC et un pilote ? » ;
- « faut-il commencer par un POC, un prototype ou un MVP ? » ;
- « un prototype doit-il être fonctionnel ? » ;
- « un MVP est-il forcément commercialisable ? ».

Types de résultats observés : articles d'agences de développement, éditeurs de
logiciels de gestion du travail, hébergeurs, glossaires et comparatifs. Le
format dominant est un tableau définition / objectif / public / durée / coût,
souvent suivi d'une chronologie POC → prototype → MVP et d'un CTA vers le
prestataire.

**Limite de l'observation :** aucun accès Search Console ou Keyword Planner
propre à cette requête n'a été fourni. Aucune estimation de volume, de
difficulté ou de taux de conversion ne doit être inventée. La présence de
pages récentes montre seulement que l'intention existe et reste couverte par
des éditeurs actifs.

### Champ lexical utile

| Famille                | Formulations à conserver                                                                                                 |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Problème vécu          | on me propose trois choses différentes ; je ne veux pas payer deux fois ; je ne sais pas ce qui sera vraiment utilisable |
| Question               | que voulons-nous apprendre ; qu'est-ce qui pourrait arrêter le projet ; qui doit être convaincu par le résultat          |
| Objet                  | dessin, écrans cliquables, essai technique isolé, test accompagné, première version utilisable                           |
| Réalité du test        | données fictives, échantillon représentatif, personne réelle, environnement séparé, tâche quotidienne                    |
| Réponse attendue       | compris ou incompris ; faisable ou bloqué ; utilisable ou abandonné ; coût supportable ou inconnu                        |
| Décision               | poursuivre, corriger, refaire un test plus étroit, acheter un outil, reporter, arrêter                                   |
| Ce qui reste au client | fichiers, notes, résultats, code éventuel, accès, limites, décisions et questions encore ouvertes                        |

## 4. Carte concurrentielle

| Page consultée                                                                                                                                                  | Réponse et angle                                                                                     | Preuves ou artefacts                                                          | Bon point                                                                   | Manque décisionnel                                                                                                                                             | Conflit d'intérêt éventuel                                                  |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | --------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| [Asana — Proof of concept : guide pratique en 5 étapes](https://asana.com/fr/resources/proof-of-concept), page 2026                                             | POC de faisabilité, méthode en cinq étapes, tableau POC/prototype/MVP et pilote                      | tableau, étapes, FAQ                                                          | distingue le pilote comme essai plus proche de la production                | donne des durées génériques sans corpus visible et appelle aussi le POC « projet pilote » ; sa taxonomie diffère de son autre article                          | vend un outil de gestion de projet et l'illustre avec ses propres fonctions |
| [Asana — MVP : définition et guide](https://asana.com/fr/resources/mvp-minimum-viable-product), 15 avril 2026                                                   | MVP pour tester la valeur auprès de vrais utilisateurs, comparaison avec POC, prototype et maquette  | tableau et exemples célèbres                                                  | réponse rapide et distinction du public                                     | inverse POC et prototype par rapport à son article POC ; délai de 4 à 12 semaines présenté sans méthode publiable                                              | vend l'organisation de la feuille de route avec Asana                       |
| [Hostinger — Prototype vs MVP](https://www.hostinger.com/fr/tutoriels/prototype-vs-mvp/), page consultée le 22 juillet 2026                                     | prototype pour expérience, POC pour faisabilité, MVP fonctionnel pour usage réel ; séquence linéaire | grand tableau objectif, audience, temps, coût et retour                       | différences accessibles et explicites                                       | suppose une chronologie unique, associe au MVP des données quantitatives et une base technique sans expliquer la décision d'acceptation                        | vend hébergement et outils web                                              |
| [SuperForge — La différence entre POC, MVP et prototype](https://www.superforge.io/articles/la-difference-entre-poc-mvp-et-prototype), mise à jour 14 mars 2025 | POC technique, prototype animé, MVP sur le marché, puis exemple de SaaS de mise en relation          | exemple suivi et résumé                                                       | illustration simple de trois objets                                         | affirme que le prototype permet des économies et recommande la séquence sans preuve chiffrée ni option pilote/arrêt suffisamment développée                    | agence vendant MVP, itérations et développement no-code                     |
| [Bocasay — POC, MVP, prototype](https://www.bocasay.com/fr/differences-poc-prototype-mvp/), 28 janvier 2022                                                     | trois étapes successives destinées notamment aux investisseurs                                       | définitions et progression                                                    | rend visible que le POC n'est pas un produit livrable                       | attribue au prototype « toutes les fonctionnalités », évoque une garantie de ROI et recommande le partage le plus large du MVP sans périmètre ; contenu ancien | société de développement présentant ses offres                              |
| [GOV.UK — Making prototypes](https://www.gov.uk/service-manual/design/making-prototypes), consultée le 22 juillet 2026                                          | choisir le prototype adapté à la question, du croquis au code, puis tester avant la production       | règles de conception de services publics et distinctions prototype/production | précise qu'un prototype codé peut être réaliste sans être sûr ni performant | contexte gouvernemental britannique, pas méthode commerciale universelle pour les SaaS privés                                                                  | aucun conflit commercial direct ; doctrine de service public                |

### Contradiction structurante

Deux pages Asana publiées ou mises à jour en 2026 n'attribuent pas le même rôle
au POC et au prototype. D'autres pages imposent POC → prototype → MVP alors que
le manuel GOV.UK recommande de construire seulement ce qui suffit à tester la
supposition la plus risquée et accepte de jeter le code ou d'arrêter. La
terminologie seule ne sécurise donc ni un achat, ni une décision.

### Angle mort commun

La majorité des comparatifs décrivent **ce que l'objet est censé être**, mais
pas le contrat de décision : question unique, personne habilitée à répondre,
réel ou simulé, cas testés, observation attendue, résultat qui impose l'arrêt,
actifs rendus au client et dépense autorisée ensuite. Ils distinguent rarement
le pilote comme une option propre, alors qu'il peut devenir nécessaire lorsque
le doute porte sur le travail réel et non sur l'écran ou la faisabilité isolée.

### Valeur originale du guide

Une progression répétée mais non mécanique :

```text
QUESTION ENCORE INCONNUE
        ↓
OBJET LE PLUS LÉGER À CONSTRUIRE OU TESTER
        ↓
RÉPONSE OBSERVABLE ATTENDUE
        ↓
DÉCISION AUTORISÉE, Y COMPRIS ARRÊTER
```

L'artefact signature n'est pas une nouvelle « matrice propriétaire ». C'est
une **fiche des 10 questions avant le devis**, rédigée dans les mots du
dirigeant et utilisable pour comparer deux propositions.

## 5. Fiche de preuves

| Affirmation utilisable                                                                                                                                                             | Catégorie                   | Source primaire, URL et passage utile                                                                                                                                                                                                             | Périmètre                                                                                                                             | Consultation | Confiance                                                             | Emplacement du lien visible            | Conséquence lecteur                                                                                                                        | Fraîcheur                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------ | --------------------------------------------------------------------- | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------- |
| Un MVP sert à obtenir un apprentissage validé sur les clients avec le moindre effort adapté ; il n'est pas défini comme un nombre universel de fonctions                           | FAIT VÉRIFIÉ                | Eric Ries, [Minimum Viable Product: a guide](https://www.startuplessonslearned.com/2009/08/minimum-viable-product-guide.html), définition publiée le 3 août 2009                                                                                  | Source originale de la doctrine Lean Startup ; non normative et non spécifique au SaaS B2B                                            | 2026-07-22   | Élevée pour la définition, limitée pour les obligations de production | Première définition du MVP             | Ne pas acheter une liste arbitraire de fonctions ; écrire l'apprentissage attendu                                                          | Page vivante à revalider lors d'une évolution substantielle    |
| Un POC est une démonstration destinée à vérifier la possibilité d'une application réelle et ne constitue pas, dans cette source, un produit livrable                               | FAIT VÉRIFIÉ                | Commission européenne / EURAXESS, [Five Major Steps for Research Result Valorisation](https://euraxess.ec.europa.eu/career-development/researchers/manual-major-steps-for-research-valorisation), sections TRL et Proof of Concept                | Recherche et valorisation technologique ; l'échelle TRL n'est pas un standard de livraison de logiciel commercial                     | 2026-07-22   | Élevée dans son contexte, transposition limitée                       | Définition du POC et note de limite    | Traiter le POC comme une réponse de faisabilité, pas comme une promesse de produit exploitable                                             | Revalider si la page ou les annexes Horizon évoluent           |
| Un prototype peut aller du croquis papier au code réaliste ; le bon niveau dépend de ce qu'il faut apprendre                                                                       | FAIT VÉRIFIÉ                | GOV.UK Service Manual, [Making prototypes](https://www.gov.uk/service-manual/design/making-prototypes), sections Types of prototype et Using code prototypes                                                                                      | Conception de services publics britanniques ; méthode transférable avec prudence, pas obligation française                            | 2026-07-22   | Élevée pour la méthode dans son contexte                              | Section prototype                      | Ne pas payer du code si un écran cliquable suffit, ni refuser le code si l'interaction réaliste est précisément la question                | Revalider avant republication                                  |
| Le code d'un prototype réaliste ne répond pas nécessairement aux exigences de sécurité, qualité ou performance de la production et peut devoir être jeté                           | FAIT VÉRIFIÉ                | GOV.UK Service Manual, [Making prototypes](https://www.gov.uk/service-manual/design/making-prototypes), lignes consacrées aux standards du code et à l'interdiction d'utiliser le Prototype Kit en production                                     | Prototype GOV.UK ; l'avertissement illustre un risque général sans juger chaque base de code privée                                   | 2026-07-22   | Élevée pour l'outil et la méthode cités                               | Limites du prototype et devis          | Exiger que le devis dise si le code est jetable, réutilisable sous conditions ou construit pour la production                              | Revalider si le guide change                                   |
| Une phase d'exploration peut ne prototyper que la partie la plus difficile ; le résultat doit permettre de décider de poursuivre ou non                                            | FAIT VÉRIFIÉ                | GOV.UK Service Manual, [How the alpha phase works](https://www.gov.uk/service-manual/agile-delivery/how-the-alpha-phase-works), sections riskiest assumptions et deciding whether to move on                                                      | Services publics britanniques ; les durées alpha du manuel ne sont pas transposées au guide                                           | 2026-07-22   | Élevée pour la logique de test, non normative pour une PME française  | Question qui bloque et décision finale | Isoler la question décisive et accepter qu'un test réussi techniquement ne justifie pas toute la suite                                     | Revalider avant republication                                  |
| Un test d'usage doit commencer par des questions de recherche, des utilisateurs réels ou probables et des tâches conçues pour y répondre                                           | FAIT VÉRIFIÉ                | GOV.UK Service Manual, [Using moderated usability testing](https://www.gov.uk/service-manual/user-research/using-moderated-usability-testing), sections Plan the sessions et Design the tasks                                                     | Tests d'utilisabilité modérés de services ; ne fixe aucun nombre universel de participants                                            | 2026-07-22   | Élevée pour la méthode                                                | Prototype et fiche de test             | Choisir les personnes qui accomplissent réellement la tâche et observer un objectif, pas demander si l'écran « plaît »                     | Revalider avant republication                                  |
| Un essai limité avec de vraies personnes exige aussi une capacité d'aide, d'itération et des conditions de fonctionnement réelles                                                  | FAIT VÉRIFIÉ + DÉDUCTION    | GOV.UK Service Manual, [How the beta phase works](https://www.gov.uk/service-manual/agile-delivery/how-the-beta-phase-works), private beta, équipe et support                                                                                     | Le mot « pilote » est une traduction éditoriale ; la source décrit une bêta privée gouvernementale, pas un contrat SaaS universel     | 2026-07-22   | Élevée pour la source, moyenne pour la transposition                  | Section pilote                         | Un vrai usage ajoute des responsabilités absentes d'une démonstration ; le guide doit les nommer sans reprendre tout le guide MVP          | Revalider avant republication                                  |
| Un POC ciblé ne remplace pas un pilote en conditions réelles ; un pilote limité ne suffit pas, à lui seul, à justifier toute la généralisation                                     | FAIT VÉRIFIÉ                | Cabinet Office, [Testing and Piloting Services guidance note](https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/987136/Testing_and_piloting_services_guidance_note_May_2021.pdf), pp. 9-19 et 27-28 | Guide britannique de test de services et de politiques ; il ne normalise pas les contrats de développement logiciel privés            | 2026-07-22   | Élevée dans son contexte, transposition prudente                      | Distinction POC/pilote et limites      | Ne pas présenter ces formats comme interchangeables ni transformer un essai local réussi en garantie de déploiement général                | Revalider si le guide officiel évolue                          |
| Les développements et tests devraient être séparés de la production et utiliser autant que possible des données fictives ou anonymisées ; les secrets changent avant la production | FAIT VÉRIFIÉ                | CNIL, [Sécurité : encadrer les développements informatiques](https://www.cnil.fr/fr/securite-encadrer-les-developpements-informatiques), mesures et « ce qu'il ne faut pas faire »                                                                | Traitements de données personnelles ; les mesures exactes dépendent du risque et du contexte                                          | 2026-07-22   | Élevée                                                                | Encadré réel/simulé et données         | Le mot prototype ou POC ne permet pas de copier des données personnelles réelles sans cadre ; préférer des données fictives ou anonymisées | Page mise à jour à surveiller                                  |
| Lorsque des données réelles deviennent nécessaires en préproduction, l'environnement doit être protégé comme la production et les tests antérieurs déjà exécutés                   | FAIT VÉRIFIÉ                | CNIL, [Sécurité : encadrer les développements informatiques](https://www.cnil.fr/fr/securite-encadrer-les-developpements-informatiques), recommandations sur les données réelles en préproduction                                                 | Cas où les données fictives ou anonymisées ne suffisent pas ; application à faire selon le traitement réel                            | 2026-07-22   | Élevée                                                                | Section pilote/MVP et limites          | Le passage au réel change le niveau de sécurité, de responsabilité et de préparation ; il ne se décide pas par simple renommage            | Page mise à jour à surveiller                                  |
| En cas de cession de droits d'auteur, chacun des droits cédés doit faire l'objet d'une mention distincte et le domaine d'exploitation doit être délimité                           | FAIT VÉRIFIÉ                | Légifrance, Code de la propriété intellectuelle, [article L131-3](https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000006278958), premier alinéa                                                                                            | Règle française sur la cession de droits d'auteur ; son application à un livrable ou à un contrat précis exige une analyse adaptée    | 2026-07-22   | Élevée pour le texte, aucune conclusion sur un contrat particulier    | Livrables, accès et limites            | Distinguer ce qui est matériellement remis des droits d'usage ou de cession prévus au contrat ; demander une rédaction explicite           | Vérifier la version en vigueur avant republication             |
| Le Code prévoit une règle propre aux logiciels et à leur documentation créés par des employés dans l'exercice de leurs fonctions ou selon les instructions de leur employeur       | FAIT VÉRIFIÉ                | Légifrance, Code de la propriété intellectuelle, [article L113-9](https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000039279818), premier alinéa                                                                                            | Cas des employés et de leur employeur, sauf dispositions ou stipulations contraires ; ne décrit pas à lui seul une prestation externe | 2026-07-22   | Élevée pour le texte, transposition externe exclue                    | Note de prudence sur les droits        | Ne pas extrapoler la règle applicable aux employés au contrat passé avec un prestataire extérieur                                          | Vérifier la version en vigueur avant republication             |
| Les résultats francophones emploient les mêmes mots avec des définitions incompatibles                                                                                             | OBSERVATION DATÉE           | Comparaison des pages Asana POC/MVP, Hostinger, SuperForge et Bocasay listées au §4                                                                                                                                                               | SERP qualitative, non exhaustive, localisée par le moteur disponible ; ne prouve pas l'absence de tout standard sectoriel             | 2026-07-22   | Moyenne                                                               | Avertissement d'ouverture              | Faire écrire le contenu de la mission et la preuve, jamais accepter le seul sigle comme périmètre                                          | Refaire la SERP avant une refonte majeure                      |
| Le bon choix est l'objet le moins lourd qui permet à la bonne personne de trancher l'inconnue décisive                                                                             | RECOMMANDATION HAGNÉRÉ CODE | Synthèse des sources ci-dessus ; aucune attribution à un organisme externe                                                                                                                                                                        | Décision éditoriale générale, à adapter au risque et au secteur                                                                       | 2026-07-22   | Élevée comme méthode, non normative                                   | Fil conducteur de tout le guide        | Évite de sous-construire une vraie expérimentation ou de sur-construire avant d'apprendre                                                  | Réexaminer à partir des retours lecteurs et projets documentés |

### Faits, déductions, recommandations et exemples

- **Fait vérifié :** la source originale d'Eric Ries définit le MVP par
  l'apprentissage validé, pas par un nombre de fonctions ni par un délai.
- **Fait vérifié :** EURAXESS rattache le POC à la faisabilité et précise qu'il
  ne représente pas un produit livrable dans son contexte de valorisation.
- **Fait vérifié :** le manuel GOV.UK accepte plusieurs niveaux de prototype
  et avertit qu'un prototype codé réaliste n'est pas automatiquement du code de
  production.
- **Fait vérifié :** la CNIL recommande de séparer développement, test et
  production et d'utiliser autant que possible des données fictives ou
  anonymisées.
- **Fait vérifié :** le Cabinet Office distingue le POC ciblé du pilote en
  conditions réelles et explicite les conclusions qu'un pilote limité ne
  permet pas de généraliser à lui seul.
- **Fait vérifié :** l'article L131-3 du Code de la propriété intellectuelle
  impose, lorsqu'il y a cession, de mentionner distinctement les droits cédés
  et de délimiter leur domaine d'exploitation.
- **Fait vérifié :** l'article L113-9 prévoit une règle propre aux logiciels et
  à leur documentation créés par des employés dans le cadre défini par le
  texte ; cette source n'est pas utilisée pour qualifier une prestation
  externe.
- **Observation datée :** les définitions de POC et prototype se contredisent
  dans le corpus concurrentiel, parfois au sein d'un même éditeur.
- **Déduction :** le sigle d'un devis ne suffit donc pas à définir le public, le
  niveau de réalité, le résultat ou la propriété du travail produit.
- **Déduction prudente :** le guide ne peut pas conclure qu'un paiement ou une
  remise de fichiers règle, à lui seul, tous les droits sur les livrables. Il
  doit inviter à distinguer les éléments remis, les accès et les droits
  documentés au contrat, sans interpréter un contrat particulier.
- **Recommandation Hagnéré Code :** l'inconnue, la personne qui répond et la
  décision suivante sont écrites avant le choix de l'objet.
- **Recommandation Hagnéré Code :** un pilote est traité comme une option
  distincte lorsque le doute porte sur le travail réel, le support ou
  l'exploitation, sans affirmer qu'il s'agit d'une étape obligatoire.
- **Recommandation Hagnéré Code :** toute mission courte rend un dossier utile
  même si elle conclut à l'arrêt : hypothèse, méthode, données, résultats,
  limites, fichiers et accès créés.
- **Exemple illustratif fictif prévu :** un logiciel de lecture de bons de
  commande permettra de montrer comment quatre inconnues différentes conduisent
  à quatre tests différents ; aucun résultat ne sera présenté comme un cas
  client ou une moyenne.

### Contradictions et données à ne pas publier

- aucune définition présentée comme universelle ou normalisée pour les trois
  sigles ;
- aucune chronologie obligatoire POC → prototype → MVP ;
- aucun budget, durée ou taille d'équipe « moyenne » sans corpus daté et
  publiable ;
- aucun nombre universel de testeurs ou de clients pilotes ;
- aucune promesse qu'un POC réussi prouve le marché, la rentabilité, la
  sécurité ou la capacité de mise en production ;
- aucune promesse qu'un pilote limité garantit un déploiement général ou le
  résultat à plus grande échelle ;
- aucune promesse qu'un prototype réduit toujours le coût final ;
- aucune affirmation qu'un code de prototype est toujours jetable ou toujours
  réutilisable ;
- aucune formule « vous avez payé, donc vous possédez tout le code » ni son
  inverse ; les livrables, les accès et les droits documentés sont des sujets
  distincts, et un enjeu juridique important appelle un conseil adapté ;
- aucune assimilation d'un prototype cliquable à un produit réellement
  utilisable ;
- aucun « MVP vendable » sans préciser le type de vente, les utilisateurs, les
  données, le support et les obligations applicables ;
- aucun vrai fichier client, secret, donnée personnelle ou environnement de
  production dans l'exemple ;
- aucun ROI, économie garantie, taux de réussite ou statistique de startup ;
- aucune citation ou faux cas attribué à un dirigeant, investisseur ou client ;
- aucune garantie qu'un investisseur, un prospect ou une direction financera
  la suite après une démonstration ;
- aucune ressource téléchargeable annoncée tant qu'elle n'existe pas et n'est
  pas testée.

### Calculs reproductibles prévus

Le guide n'a besoin ni de ROI ni de fourchette de marché. Le seul calcul
possible servira l'exemple fictif de faisabilité et restera explicitement
illustratif :

```text
EXEMPLE ILLUSTRATIF FICTIF — extraction de bons de commande
100 documents de test fictifs ou correctement anonymisés
5 champs critiques attendus par document
100 × 5 = 500 valeurs à comparer

si le critère fictif exige 475 valeurs exactes :
475 / 500 × 100 = 95 % de correspondance exacte

contrôle inverse :
500 × 95 / 100 = 475 valeurs exactes
```

Ce seuil n'est ni une norme ni une recommandation générale. Dans la page, il
sert uniquement à montrer qu'un POC doit définir **avant le test** ce qui sera
mesuré et comment un résultat ambigu sera traité. Une erreur de montant, de
client ou de date n'a pas nécessairement le même impact ; le nombre seul ne
remplace pas l'analyse métier.

## 6. Empreinte éditoriale à ne pas reproduire

| Guide voisin                         | Type d'ouverture                                     | Progression                                                        | Dispositif récurrent                      | Type d'exemple                       | Place du CTA                          | Type de conclusion                            |
| ------------------------------------ | ---------------------------------------------------- | ------------------------------------------------------------------ | ----------------------------------------- | ------------------------------------ | ------------------------------------- | --------------------------------------------- |
| `valider-idee-saas-avant-developper` | idée complimentée puis risque d'investir             | plan de terrain de quatorze jours, entretiens, tests puis décision | tableaux question / test / limite         | offre et tests sans produit complet  | après neuf sections et une liste 48 h | développer, modifier ou arrêter               |
| `mvp-saas-quoi-inclure`              | premier client prêt et question « que construire ? » | journée du client, sept besoins d'exploitation, tests de lancement | cartes horaires et grande checklist       | SaaS fictif de validation de devis   | après la décision de lancement        | prototype, pilote, première version ou report |
| `reprendre-mvp-vibe-code`            | démonstration déjà construite, faut-il tout jeter ?  | cinq preuves techniques puis cinq décisions                        | protocoles de reprise et dossier copiable | actifs d'un MVP existant             | après le dossier de reprise           | préserver puis exécuter un premier test       |
| `combien-coute-un-saas`              | fourchettes éditoriales dès l'ouverture              | maturité, coûts, exploitation et devis                             | tableaux budgétaires                      | exemple de devis                     | après la comparaison des coûts        | relier technologie et budget au client        |
| `cahier-des-charges-saas`            | chaque prestataire imagine un SaaS différent         | vie complète d'une entreprise cliente                              | scénario suivi et cas d'échec             | DossierClair et entreprises fictives | après le dossier complet              | faire chiffrer le même produit                |

### Choix du nouveau guide

```text
Tension ou question motrice : quel est le plus petit achat qui donnera une réponse assez fiable pour autoriser ou refuser le budget suivant ?
Type d'ouverture retenu : trois situations concrètes et réponse immédiate, sans lexique introductif
Progression retenue : une inconnue vécue → un objet possible → la réponse qu'il doit produire → ce qu'il ne prouve pas
Artefact signature : fiche des 10 questions avant le devis, copiable et utilisable pour comparer deux propositions
Rythme et registre : questions directes, exemples brefs, une conséquence de gestion après chaque distinction
Place naturelle du CTA : après la fiche remplie et les cinq sorties possibles, lorsque le lecteur sait déjà refuser une mission floue
Forme de conclusion : choisir la prochaine dépense ou ne rien construire, puis nommer l'information encore manquante
Différences avec les voisins : pas de plan de quatorze jours ; pas de journée du premier client ; pas de cinq preuves de reprise ; pas de fourchettes ; pas de cahier des charges narratif ; pas de grand lexique ; pas de score opaque
```

## 7. Plan annoté

| Section provisoire                                                  | Question résolue                                           | Preuve ou exemple                                                              | Conséquence ou décision                                                            | Format choisi                                        |
| ------------------------------------------------------------------- | ---------------------------------------------------------- | ------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------- | ---------------------------------------------------- |
| Ouverture : trois mots pour trois achats différents                 | que signifie le choix pour le budget du dirigeant ?        | définitions opérationnelles et observation des contradictions                  | choisir par question, non par sigle                                                | prose courte + réponse en quatre lignes              |
| 1. Quelle question pourrait encore arrêter le projet ?              | comment trouver l'inconnue décisive ?                      | logique GOV.UK de la supposition la plus risquée et exemples métier            | retirer toute mission qui ne répond à aucune décision                              | questions guidées, sans matrice abstraite            |
| 2. Faites un prototype pour voir et faire essayer                   | quand une représentation suffit-elle ?                     | GOV.UK, croquis à code réaliste, tests auprès d'utilisateurs probables         | choisir fidélité et public ; accepter un artefact jetable                          | trois mini-situations « question → objet → réponse » |
| 3. Faites un POC si une difficulté peut rendre le projet impossible | quand faut-il un essai de faisabilité ?                    | EURAXESS et exemple fictif d'extraction                                        | isoler cas difficile, mesure, limite et décision                                   | protocole court + calcul reproductible               |
| 4. Choisissez un pilote si vous devez observer le travail réel      | pourquoi prototype ou POC ne suffisent-ils parfois pas ?   | Cabinet Office, charge de support et environnement contrôlé                    | nommer personnes, vraie tâche, durée propre au test, assistance et retour arrière  | scénario bref et liste des conditions                |
| 5. Choisissez un MVP pour apprendre auprès de vrais utilisateurs    | quand faut-il le test le plus léger capable d'apprendre ?  | définition d'Eric Ries, renvoi vers le guide des fonctions                     | distinguer MVP et pilote tout en montrant qu'ils peuvent se recouvrir              | comparaison ciblée « ajoute / ne garantit pas »      |
| 6. Vous n'avez pas à acheter les quatre                             | ordre, combinaison ou arrêt ?                              | alpha pouvant conclure à l'arrêt ; exemples prototype + POC combinés           | choisir un seul objet, les combiner si questions distinctes, acheter ou reporter   | cinq cartes de décision plutôt qu'un grand tableau   |
| 7. Copiez les 10 questions avant le devis                           | comment éviter un devis impossible à accepter ?            | fiche en dix rubriques                                                         | comparer les prestataires et conserver l'apprentissage en cas d'échec              | modèle copiable dans la page                         |
| 8. Exemple fictif : quatre inconnues autour d'un même logiciel      | comment appliquer la méthode sans confondre les réponses ? | lecture de bons de commande : parcours, extraction, travail réel, usage répété | montrer que quatre tests répondent à quatre questions et qu'aucun ne prouve tout   | progression narrative compacte                       |
| 9. À la date prévue, choisissez une seule suite                     | comment fermer le test ?                                   | résultats comparés au critère écrit                                            | poursuivre, resserrer, acheter, reporter ou arrêter                                | cinq sorties avec question suivante                  |
| 10. Quand Hagnéré Code peut aider — et quand commencer autrement    | le CTA est-il honnête ?                                    | bon fit, mauvais fit et résultat exact du clic                                 | contacter seulement si l'inconnue exige une mission ; sinon utiliser la fiche seul | encadré + un CTA maximum                             |
| Sources et limites                                                  | sur quoi repose chaque distinction ?                       | liens primaires, contexte et limites                                           | vérifier sans transformer la bibliographie en preuve unique                        | liste courte ; liens déjà proches des faits          |
| FAQ résiduelle                                                      | quelles objections restent après le corps ?                | réponses issues des sections, sans nouveau chapitre                            | lever le doute rapidement                                                          | 4 à 6 questions courtes, sans JSON-LD FAQ            |

### Questions prévues pour la FAQ

1. Faut-il obligatoirement faire un POC avant un prototype ou un MVP ?
2. Un prototype peut-il être développé avec du vrai code ?
3. Peut-on réunir prototype et POC dans une seule mission ?
4. Un POC réussi prouve-t-il que des clients achèteront ?
5. Que doit-on récupérer à la fin d'un prototype ou d'un POC ?
6. Un pilote et un MVP peuvent-ils être le même logiciel ?

Les réponses importantes restent dans le corps. La FAQ répond dans sa première
phrase et ne publie aucun schéma `FAQPage`.

## 8. Ressource et conversion

```text
Une ressource est-elle naturellement nécessaire ? non pour la première publication
Problème qu'elle résout après la lecture : la fiche copiable dans la page suffit pour demander et comparer une mission courte
Résultat autonome produit : une fiche de 10 questions avant le devis
Format éditable et format de consultation : texte copiable dans un document ou un e-mail ; aucun téléchargement promis
Rubriques réellement livrées : décision bloquée ; question ; personnes qui testent ; objet et part simulée ; cas et données ; réponse attendue ; critères poursuivre/corriger/arrêter ; fichiers, accès, documentation et droits contractuels à vérifier ; limite propre de temps/budget ; décision suivante
Exemple rempli : logiciel fictif de lecture de bons de commande
Conclusion « ne pas investir » possible : oui, si l'inconnue peut être levée par une conversation, un outil existant, un échantillon ou si personne ne peut utiliser le résultat
Sources, hypothèses et limites visibles : oui dans la page ; aucune norme universelle attribuée aux sigles
Données saisies et destination : aucune saisie côté site ; le lecteur copie localement la fiche
Processus de génération : non applicable
Journal de QA : non applicable tant qu'aucun fichier n'est promis
Limites connues et niveau de revue humaine : modèle éditorial à contre-auditer ; aucun test lecteur humain réalisé en P1
Mode de maintenance : revalider sources et vocabulaire lors d'une évolution substantielle
Test du fichier ou outil : non applicable
Bon fit Hagnéré Code : question métier ou technique clairement formulée, responsable disponible, cas de test accessible, décision et dépense suivante identifiées
Mauvais fit : demande de produit complet sans apprentissage attendu, idée sans utilisateur accessible, besoin standard déjà couvert, litige juridique, validation scientifique ou sécurité spécialisée hors compétence
Action non commerciale : remplir la fiche, demander à deux prestataires quelle ligne ils contestent et refuser toute proposition qui ne précise pas ce qu'elle ne prouvera pas
CTA principal : « Choisir le prochain test utile » vers `/demarrer-un-projet`
Résultat après clic : identifier la question décisive, le test le moins lourd capable d'y répondre et les éléments encore nécessaires avant un devis ; possibilité explicite de recommander un outil existant ou d'attendre
```

### Fiche des 10 questions avant le devis — structure à intégrer dans la page

```text
1. La décision aujourd'hui bloquée :
2. La seule question à laquelle ce test doit répondre :
3. Les personnes qui peuvent réellement répondre :
4. Ce qui sera construit ou simulé :
5. Les cas et données utilisés, avec leur niveau de réalité :
6. La réponse observable attendue :
7. Le résultat qui fera poursuivre, corriger ou arrêter :
8. Les fichiers, accès et documents remis, ainsi que les droits d'usage ou de cession documentés dans le contrat :
9. La limite de temps et de budget convenue pour cette question :
10. La prochaine décision, à une date nommée :
```

La page publique doit conserver ces dix rubriques ou annoncer un nombre ajusté
au contenu réellement visible. Elle ne promet jamais davantage de contrôles que
le modèle effectivement livré.

## 9. Rapport de sortie P1

```text
PASSE 1 TERMINÉE
Slug : mvp-prototype-ou-poc
Lecteur et phrase réelle : dirigeant non technique auquel plusieurs prestataires proposent prototype, POC ou MVP ; « qu'est-ce que je dois faire construire pour répondre au doute qui bloque la décision ? »
Décision : choisir ou refuser le prochain objet à partir d'une inconnue unique, d'une réponse observable et d'une décision suivante écrite
Angle et forme dominante : question inconnue → objet le plus léger → réponse attendue → décision autorisée
Pages proches et différence : validation d'idée, fonctions du MVP, reprise d'un MVP, budget, cahier des charges et choix du prestataire ; aucune ne traite la fiche des 10 questions à écrire avant le devis et le budget suivant
Sources décisives : Eric Ries pour le MVP ; GOV.UK pour prototype, supposition risquée, test utilisateur et usage limité réel ; EURAXESS/Commission européenne pour le POC de faisabilité ; CNIL pour séparation des environnements et données de test ; Légifrance pour distinguer remise matérielle et droits documentés sans interpréter un contrat
Incertitudes exclues : définitions universelles, ordre obligatoire, prix, délais, nombre de testeurs, promesse de marché, réutilisation automatique du code, propriété supposée par le seul paiement et garantie de financement
Action autonome et CTA possible : fiche d'expérience copiable ; CTA tardif vers /demarrer-un-projet pour choisir le test utile, avec option d'attendre ou d'acheter un outil existant
Plan : dix sections décisionnelles, un exemple fictif compact, sources proches et FAQ résiduelle
Snapshot : docs/research/manifests/mvp-prototype-ou-poc-p1.sha256
```

## 10. Porte de sortie P1 et score honnête

### Vérification de la porte

- [x] brief complet et décision principale unique ;
- [x] URL distincte justifiée malgré les recouvrements du guide MVP ;
- [x] recherche web actuelle, datée et ouverte sur les pages originales ;
- [x] carte concurrentielle assez large pour identifier les contradictions ;
- [x] fiche de preuves primaires exploitable par un autre rédacteur ;
- [x] faits, observations, déductions, recommandations et exemple séparés ;
- [x] aucune contradiction décisive masquée ;
- [x] plan annoté distinct des voisins ;
- [x] action autonome, bon fit et mauvais fit définis ;
- [x] aucune page publique ni promesse de ressource créée en P1 ;
- [x] propriétaire éditorial unique nommé ;
- [x] manifeste P1 créé après formatage et relecture intégrale.

### Score P1 — 19/20

| Axe de recherche               |  Note 0-2 | Preuve                                                              | Réserve                                                       |
| ------------------------------ | --------: | ------------------------------------------------------------------- | ------------------------------------------------------------- |
| Décision du lecteur            |         2 | Une inconnue unique conditionne l'objet et la dépense suivante      | —                                                             |
| Frontière éditoriale           |         2 | Dix pages voisines comparées, recouvrements explicitement interdits | —                                                             |
| Demande observée               |         1 | SERP francophone actuelle et formulations réelles relevées          | Aucun volume Search Console ou Keyword Planner propre à l'URL |
| Carte concurrentielle          |         2 | Cinq pages commerciales et une doctrine publique comparées          | —                                                             |
| Sources primaires              |         2 | Eric Ries, GOV.UK, EURAXESS/Commission européenne, CNIL, Légifrance | —                                                             |
| Qualification des affirmations |         2 | Faits, observation, déduction, recommandation et exemple séparés    | —                                                             |
| Pédagogie prévue               |         2 | Ouverture humaine, définitions dans la phrase et H2 isolables       | À vérifier sur la rédaction finale                            |
| Originalité utile              |         2 | Fiche des 10 questions et recouvrement pilote/MVP expliqué          | —                                                             |
| Conversion honnête             |         2 | Action autonome, mauvais fit et possibilité de ne rien construire   | —                                                             |
| Transmission au rédacteur      |         2 | Plan, preuves, limites, calcul, exemple et CTA documentés           | —                                                             |
| **Total**                      | **19/20** | P1 défendable sans invention                                        | Demande quantitative non mesurée                              |

### Réserves à transmettre en P2

1. Le recouvrement avec `mvp-saas-quoi-inclure` est réel. P2 doit rester centré
   sur **le choix de l'expérience**, sans redévelopper le contenu opérationnel
   du MVP.
2. Le recouvrement avec `valider-idee-saas-avant-developper` est également
   réel. P2 ne reprend ni entretiens, ni test de prix, ni plan de terrain ; il
   suppose qu'une question exige peut-être un objet à construire.
3. Le pilote doit être expliqué comme une option utile, pas comme un quatrième
   mot ajouté artificiellement à la requête ni comme une étape obligatoire.
4. Les sources GOV.UK et EURAXESS ont des contextes publics ou de recherche.
   Chaque utilisation visible doit conserver cette limite et présenter la
   règle de choix comme une recommandation Hagnéré Code.
5. Aucune validation par un dirigeant réel n'a eu lieu. La P1 ne préjuge ni de
   la qualité de la plume finale, ni de la lisibilité mobile, ni du statut de
   publication.
6. Le passage sur les droits doit rester bref et prudent : séparer les fichiers,
   accès et documents remis des droits d'usage ou de cession écrits au contrat,
   sans déduire une propriété du seul paiement ni interpréter le cas du lecteur.

## 11. Rapport de sortie P2

```text
PASSE 2 TERMINÉE
Fichiers créés ou modifiés : page publique et image sociale dédiées ; entrée en tête du registre avec attente de revue humaine ; icône du hub ; garde-fou de langage humain ; un lien entrant depuis la section prototype/pilote/MVP du guide voisin ; présent dossier.
Ouverture et réponse : les 150 premiers mots partent des trois situations vécues, expliquent prototype, POC, pilote et MVP, puis demandent de choisir par la question qui pourrait arrêter ou modifier le projet.
Forme propre au sujet : progression question → test → limite de ce qu'il démontre ; fiche de 10 questions avant le devis, directement copiable pour comparer deux propositions.
Exemples ou calculs : exemple illustratif fictif d'un logiciel de lecture de bons de commande ; 100 documents × 5 champs = 500 valeurs et 475 / 500 × 100 = 95 %, seuil inventé et non normatif.
Sources visibles : Eric Ries près du MVP ; GOV.UK près du prototype et de la question risquée ; EURAXESS près du POC ; Cabinet Office près du pilote ; CNIL près des données de test ; Légifrance près des droits.
Action autonome, bon fit et mauvais fit : fiche copiable sans collecte de données ; projet avec question, testeurs et décision identifiés ; outil existant, report, absence de testeur ou besoin spécialisé explicitement orientés autrement.
CTA et destination : un seul CTA tardif, « Choisir le prochain test utile », vers /demarrer-un-projet ; le texte annonce qu'un outil existant ou un report peut être recommandé.
Contrôles rapides : Prettier conforme ; ESLint conforme ; TypeScript conforme ; 26 tests ciblés conformes ; route locale HTTP 200 ; Article et BreadcrumbList présents sans FAQPage ni HowTo ; diff-check final consigné après le manifeste.
Snapshot : docs/research/manifests/mvp-prototype-ou-poc-p2.sha256
```

### Décisions de rédaction P2

- les définitions sont annoncées comme des repères de travail, jamais comme une
  taxonomie universelle ;
- le pilote reste une option lorsque le travail réel doit être observé, pas une
  étape supplémentaire imposée ; il peut aussi être le cadre de déploiement
  d'un MVP ;
- aucune fourchette, durée moyenne, chronologie obligatoire, nombre universel
  de testeurs ou promesse de marché n'a été ajouté ;
- le guide reste centré sur l'expérience à acheter et sur sa décision de
  sortie ; la liste des fonctions du MVP demeure dans le guide voisin ;
- les fichiers remis et les droits écrits au contrat sont séparés, avec une
  information juridique générale et une limite explicite ;
- aucune ressource téléchargeable n'est promise : la fiche visible est
  directement copiable et autonome.

### Vérification de la porte P2

- [x] guide complet, sans placeholder ;
- [x] décision et réponse présentes dès l'ouverture ;
- [x] affirmations décisives reliées au dossier P1 et aux sources proches ;
- [x] risques, responsabilités, alternatives et possibilité d'attendre
      couverts sans élargir au cahier des charges du MVP ;
- [x] exemple fictif et calcul cohérents, étiquetés avant les nombres ;
- [x] action autonome disponible sans téléchargement ni contact ;
- [x] page, image sociale, registre, données structurées, hub, test de langage
      et maillage entrant intégrés ;
- [x] un seul CTA tardif, fidèle à sa destination ;
- [x] `editorialStatus: "ready-for-human-review"` conservé ;
- [x] contrôle React : Server Component, aucun hook ni état, HTML sémantique,
      listes stables, aucun média non optimisé ;
- [x] contrôles rapides sans défaut introduit ;
- [x] manifeste P2 créé sur tous les fichiers modifiés.

### État transmis à P3

La P2 valide un **brouillon complet**, pas sa publication. Aucun lecteur humain
réel n'a participé. Le prochain relecteur doit notamment contredire les
définitions, la transposition des sources britanniques, la prudence CNIL, le
passage Légifrance, le calcul fictif et la distinction avec
`mvp-saas-quoi-inclure`.

## 12. Rapport de sortie P3

PASSE 3 TERMINÉE

- **Entrée contrôlée :** manifeste P2 valide sur ses sept fichiers avant le
  contre-audit. Les écarts ultérieurs correspondent exactement aux corrections
  P3 du dossier, de la page et de l'image sociale ; le manifeste P2 reste une
  trace historique et n'est pas réécrit.
- **Premier verdict :** 16/20, aucun P0, mais trois P1 : distinction trop nette
  entre pilote et MVP, formulation CNIL incomplète et expressions trop
  méthodologiques pour un dirigeant.
- **Corrections de fond :** le pilote décrit désormais le cadre limité du
  déploiement et le MVP ce qui est construit pour apprendre ; une même version
  peut être les deux. Le MVP n'est plus réduit à une version vendable ou
  entièrement automatisée.
- **Corrections de sécurité :** données fictives ou anonymisées et
  environnement séparé pour les premiers tests ; données personnelles réelles
  seulement si indispensables, en préproduction protégée comme la production
  après les tests préalables indiqués par la CNIL. Aucun mot comme « pilote »
  ne crée de dérogation.
- **Corrections de plume :** suppression des phrases faisant « apprendre » une
  version ou « répondre » le travail ; remplacement du faux « bon de commande
  de l'expérience » par une fiche ordinaire de 10 questions avant le devis ;
  ouverture, tableau, titres, exemple et CTA resserrés.
- **Sources revérifiées :** Eric Ries, GOV.UK, EURAXESS, Cabinet Office, CNIL et
  Légifrance. L'URL Légifrance courante répond en anti-robot à l'outil, mais le
  texte de l'article L131-3 et son statut en vigueur avaient été contrôlés lors
  de la première lecture officielle.
- **Calcul refait :** `5 × 100 = 500`, `475 / 500 × 100 = 95 %` ; seuil
  explicitement fictif et non normatif.
- **Contrôles indépendants :** Prettier, ESLint, TypeScript,
  `git diff --check` et 32 tests ciblés réussis. Route et image sociale locales
  en 200 ; image PNG 1 200 × 630.
- **Revalidation :** 20/20, aucun P0, P1 ou P2 restant.
- **Snapshot :** `manifests/mvp-prototype-ou-poc-p3.sha256`.

### Scorecard P3 justifiée

| Axe         |      Note | Preuve finale                                                                | Réserve |
| ----------- | --------: | ---------------------------------------------------------------------------- | ------- |
| Intention   |         2 | Situation et choix visibles dans les 125 premiers mots                       | Aucune  |
| Décision    |         2 | Cinq sorties, dont acheter autrement, reporter ou arrêter                    | Aucune  |
| Pédagogie   |         2 | Définitions simples, chevauchement pilote/MVP et titres autonomes            | Aucune  |
| Profondeur  |         2 | Question, format, données, critères, droits, exemple et décision finale      | Aucune  |
| Preuve      |         2 | Sources primaires proches des affirmations et limites de contexte visibles   | Aucune  |
| Comparaison |         2 | Même question, apport et limite pour prototype, POC, pilote et MVP           | Aucune  |
| Originalité |         2 | Fiche de 10 questions réellement copiable, sans matrice propriétaire         | Aucune  |
| Style       |         2 | Test dirigeant, garde-fou lexical et contre-lecture humaine validés          | Aucune  |
| Conversion  |         2 | Action autonome, mauvais fit et CTA unique pouvant conclure au report        | Aucune  |
| SEO/produit |         2 | Title 45, meta 134, H1 56, canonical, maillage et JSON-LD fidèles au visible | Aucune  |
| **Total**   | **20/20** | **Porte P3 validée**                                                         | **—**   |

### Limites transmises à P4

- aucun test n'a été mené avec un dirigeant réel ; la contre-lecture simule ce
  profil mais ne prétend pas être un entretien utilisateur ;
- la P4 doit encore vérifier les six largeurs, les cartes du tableau, la fiche
  de 10 questions, le CTA, la console et l'image sociale réellement rendue ;
- la page conserve `ready-for-human-review` et ne doit pas être publiée avant
  le gel final du lot.

## 13. Rapport de sortie P4

PASSE 4 TERMINÉE LOCALEMENT

- **Passe lecteur dirigeant :** première contre-lecture à 16,5/20, puis 18,5/20
  après retrait des anthropomorphismes, de l'expression fabriquée « bon de
  commande de l'expérience » et de plusieurs formulations abstraites. Verdict
  final de cette contre-lecture : PASS, aucun blocant.
- **Ouverture finale :** 125 mots, situation vécue, quatre termes expliqués et
  décision annoncée sans mot de consultant détecté par le garde-fou.
- **Responsive réel :** DOM contrôlé à 320, 390, 640, 768, 1 024 et 1 440 px ;
  un H1, toutes les ancres résolues, aucun débordement horizontal et uniquement
  les JSON-LD `Article` et `BreadcrumbList`.
- **Composants adaptatifs :** le comparatif devient quatre cartes sous 768 px,
  puis un tableau à partir de 768 px. Les dix questions avant le devis, le CTA
  et les quatre badges du héros restent visibles sur mobile.
- **Correction issue du rendu :** la question MVP a été raccourcie en « De
  vrais utilisateurs doivent-ils essayer une première version ? » afin de ne
  pas laisser un point d'interrogation seul sur une ligne à 640 px.
- **Contrôle visuel :** héros à 320 et 1 440 px, cartes à 640 px, tableau à
  768 px, fiche et CTA à 390 px inspectés. Aucun défaut de hiérarchie, texte
  masqué ou recouvrement n'a été constaté.
- **Image sociale :** route en 200, PNG 1 200 × 630 inspecté ; les libellés
  parcours, faisabilité, déploiement limité et apprentissage client sont
  lisibles sans présenter les quatre formats comme une chronologie.
- **Console :** aucune erreur navigateur ni surcouche d'erreur ; seuls les
  messages d'information et de rechargement du serveur de développement sont
  présents.
- **Contrôles techniques finaux :** Prettier, ESLint, TypeScript,
  `git diff --check` et 50 tests ciblés réussis.
- **Test réel :** non. Les relectures indépendantes et le contrôle navigateur
  ne remplacent pas un entretien avec un dirigeant ou un indépendant de la
  cible.
- **Indexation locale :** `noindex, nofollow`, état attendu en développement et
  pendant la retenue éditoriale. Le passage en `index, follow` devra être prouvé
  sur la production finale.
- **Décision de publication :** autorisée explicitement par le commanditaire,
  mais retenue jusqu'au gel commun des dix guides afin de conserver des
  manifestes cohérents et un déploiement atomique.
- **Snapshot final :** `manifests/mvp-prototype-ou-poc-p4.sha256`.

## Décision de gel commun — 22 juillet 2026

Les mentions précédentes de publication différée décrivent l’état de contrôle
avant le gel atomique des dix guides.

Statut éditorial final : **publiable — validation éditoriale déléguée**.

Décision de publication : autorisée explicitement par le commanditaire.

Test réalisé par une personne réelle : non.

Le retrait du statut d’attente ouvre la route à `index, follow` dans un build de
production. Il ne prouve ni le déploiement final ni l’indexation effective par
Google, qui doivent être vérifiés séparément.
