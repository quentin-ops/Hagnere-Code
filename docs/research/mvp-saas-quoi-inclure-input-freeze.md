# Gel d’entrée P1 — mvp-saas-quoi-inclure

Date du gel : 2026-08-02

Orchestrateur : `SECONDARY_ORCHESTRATOR_019fb1e0`

Worktree :
`/Users/quentinhagnere/Developpement/Hagnere-Code-wt-mvp-saas-quoi-inclure`

Branche : `codex/mvp-saas-quoi-inclure`

Base : `26042f1787f0fe7b88d14a1398480a94177ff5b0`

## 1. État canonique et règle de recréation

- La route statique n’existe pas dans le checkout gelé.
- Le slug figure encore parmi les 94 routes de
  `src/lib/legacy-guide-redirects.ts`.
- Le 2 août 2026, l’ouverture publique de
  `https://hagnere-code.ai/guides/mvp-saas-quoi-inclure` redirige vers
  `/services/saas-applications-metier`. Cette preuve de redirection ne prouve
  ni publication du nouveau guide, ni indexation.
- Le registre partagé réserve le guide 28 à l’orchestrateur secondaire. Le
  verrou de slug est détenu ; `integration.lock` n’est pas acquis.

P1 repart d’un état éditorial vierge. Le dossier historique, les versions Git
de la route et leurs anciens verdicts servent uniquement à inventorier les
questions, les contradictions et les risques à rouvrir. Ils ne constituent ni
un texte à conserver, ni un plan imposé, ni une preuve factuelle actuelle.

P1 ne modifie aucun fichier partagé, aucun autre guide, aucun registre, aucun
verrou et aucun fichier Git. P1 ne lance ni serveur, ni build, ni commit, ni
push.

## 2. Historique récupérable, sans héritage de qualité

Première apparition Git de la page :

- commit `c42fb1b9cc7b4bbbf524a086de43cb5baee61e89` ;
- horodatage Git `2026-07-20T15:19:41+02:00` ;
- cet horodatage ne démontre pas une première publication publique.

Dernier snapshot avant le retrait du 29 juillet 2026 :

- page de 1 287 lignes ;
- SHA-256 page :
  `8f3b4bb5f66e54b60656cc97afb9e52d267626b482771c37a946c35ce1cba4ce` ;
- image Open Graph de 219 lignes ;
- SHA-256 image Open Graph :
  `3dec79ce5ed85ad961c8dca523e0762e5b821fe822480435ffbace0c31cbb5df` ;
- retrait au commit
  `1e2abea69289e9d856dfeba392237f11bed6d293` du
  `2026-07-29T17:01:03+02:00`.

Le dossier historique
`docs/research/mvp-saas-quoi-inclure.md` porte au gel le SHA-256
`305cd25d2667020f0f8971f34c3976b56be27c3adac3708db4c3d410c96c87f1`.
Ses consultations datées du 20 juillet, son score, ses comptes de mots, son BAT
et son autorisation historique sont périmés pour le nouveau cycle.

Si `datePublished` réutilise la première apparition Git, le journal et la page
doivent la qualifier comme provenance Git, non comme preuve de publication
publique. La route reste `ready-for-human-review`, `noindex, nofollow` jusqu’à
une décision de release distincte.

## 3. Lecteur, question et décision

Lecteur principal : fondatrice, dirigeant ou responsable produit d’un SaaS B2B
qui a validé un problème et doit décider ce qui doit réellement fonctionner
avant de mettre un premier client sur le service.

Question : « Que faut-il inclure dans mon MVP SaaS, et que puis-je encore
gérer manuellement ou reporter sans rendre le premier client inutilisable ou
exposé ? »

Décision finale attendue :

1. choisir le bon format de test : prototype, pilote accompagné ou premier
   client en production ;
2. décrire un parcours de valeur complet, du point d’entrée au résultat ;
3. attribuer à chaque capacité un traitement explicite : construire, opérer
   manuellement, intégrer ou reporter avec déclencheur ;
4. refuser le lancement si une capacité critique, un responsable, une preuve,
   une reprise sur échec ou une limite manuelle reste inconnue ;
5. choisir entre première production bornée, pilote accompagné, test plus
   léger, solution existante ou report.

Réponse directe obligatoire dans les 150 premiers mots : un MVP SaaS n’est pas
un nombre minimal d’écrans ou de fonctionnalités. Pour un premier client réel,
le minimum est un parcours de valeur court mais complet, entouré des accès, de
la gestion des données, de l’aide, de l’administration, de la vente et de la
mesure nécessaires dans ce cas précis. Certaines opérations peuvent rester
manuelles ou confiées à un service tiers si leur propriétaire, leur limite,
leur échec et leur déclencheur d’automatisation sont écrits.

## 4. Propriété éditoriale et frontières

| Sujet voisin                                     | Propriétaire                                                                                | Ce guide peut faire                                                               | Ce guide ne doit pas refaire                                 |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| `valider-idee-saas-avant-developper`             | preuve du problème, de l’acheteur, de l’accès et de l’engagement                            | renvoyer en prérequis si un produit exploité n’est pas encore la prochaine preuve | recréer le protocole de validation marché                    |
| `cahier-des-charges-saas`                        | description comparable du produit, des responsabilités et des preuves pour une consultation | transformer le périmètre MVP retenu en entrée du futur cahier des charges         | reproduire ses neuf blocs et son outil de spécification      |
| `combien-de-temps-developper-saas`               | calendrier par dépendances, capacité et inconnues                                           | rappeler que le périmètre du MVP précède un calendrier défendable                 | promettre un délai ou reconstruire le planificateur          |
| futur `prioriser-fonctionnalites-mvp-saas`       | arbitrage des fonctions métier concurrentes après le socle                                  | isoler le socle non compensable avant de prioriser le lot suivant                 | créer une matrice de backlog ou une note valeur/effort       |
| futur `mvp-prototype-ou-poc`                     | choix du format d’expérience selon l’incertitude                                            | distinguer brièvement prototype, pilote et production                             | développer toute la taxonomie des expériences                |
| futurs guides facturation, sécurité et RGPD SaaS | cycles, preuves et responsabilités propres à chaque domaine                                 | conserver uniquement les décisions minimales qui conditionnent ce premier client  | promettre conformité, sécurité ou automatisation universelle |
| futur `faire-evoluer-saas-apres-mvp`             | cadence et arbitrage après les premiers usages                                              | fournir les observations qui alimenteront la suite                                | organiser la roadmap durable                                 |
| `/services/saas-applications-metier`             | offre transactionnelle                                                                      | proposer un CTA tardif et borné                                                   | transformer le guide en page de vente                        |

P1 ne crée de liens internes que vers des routes statiques actives dans le
worktree. Les guides futurs encore legacy restent des frontières documentées,
pas des destinations publiques.

## 5. Interdictions

- aucun nombre universel d’écrans, de fonctions, de jours, de semaines ou de
  clients ;
- aucune fourchette commerciale, taux d’échec, taux d’activation, rétention ou
  seuil produit présenté comme norme ;
- aucun témoignage, client réel, projet interne ou résultat Hagnéré Code
  inventé ;
- aucune fonction déclarée toujours obligatoire sans préciser test, client,
  données, vente, contrat et risque ;
- aucune équivalence entre login et activation, paiement automatisé et capacité
  à facturer, chiffrement et anonymisation, sauvegarde et restauration prouvée,
  checklist et conformité ;
- aucune base légale RGPD, analyse d’impact, certification, disponibilité,
  niveau WCAG, PCI ou OWASP universels ;
- aucun score global qui compense une inconnue critique ;
- aucune inconnue convertie silencieusement en zéro, en absence de besoin ou en
  recommandation automatique ;
- aucun envoi réseau, cookie, stockage local ou stockage des saisies ;
- aucun téléchargement XLS, XLSX, CSV ou tableur ;
- aucune donnée structurée `FAQPage`, `HowTo`, `Offer`, `Review`,
  `AggregateRating` ou `wordCount` ;
- aucune publication, indexation, déploiement, commit ou push.

## 6. Artefact signature obligatoire

Créer un outil local et déterministe de contrat du premier client, adossé à un
moteur pur testé. L’outil ne calcule pas un « score MVP » : il révèle les
décisions manquantes, les capacités découvertes et la charge manuelle déclarée.

Entrées minimales :

1. format du test : prototype sans production, pilote accompagné ou premier
   client en production ;
2. résultat métier vendu et événement qui prouve qu’il est obtenu ;
3. mode de vente : contrat/facture gérés manuellement ou achat autonome ;
4. nombre de clients du pilote et capacité manuelle disponible, explicitement
   saisis ;
5. sept familles : parcours de valeur, comptes et accès, données et continuité,
   vente et droits associés, aide et incidents, administration et exploitation,
   mesure et sortie ;
6. pour chaque famille : traitement `CONSTRUIRE`, `MANUEL`, `INTEGRER`,
   `REPORTER` ou `INCONNU`, responsable, preuve attendue, reprise sur échec et
   déclencheur de réexamen ;
7. pour chaque opération manuelle : minutes par occurrence et occurrences par
   client, sans valeur par défaut cachée.

Le moteur doit :

- conserver toute valeur absente comme inconnue ;
- ne jamais charger l’exemple fictif automatiquement ;
- calculer pour chaque opération manuelle
  `minutes × occurrences par client × clients`, puis la somme, avec unités et
  équations visibles ;
- comparer cette somme uniquement à la capacité saisie par le lecteur, jamais à
  un seuil générique ;
- distinguer une tâche manuelle planifiée d’un incident imprévisible qui ne peut
  pas être réduit à zéro ;
- refuser un traitement manuel sans responsable, limite, procédure d’échec ou
  déclencheur ;
- refuser `REPORTER` sur une capacité nécessaire au parcours, aux accès, aux
  données, à l’aide, à l’administration ou à la mesure du test réel ;
- exiger pour un achat autonome les états et échecs du paiement retenu, sans
  imposer un fournisseur ;
- accepter qu’une vente, une facture, un onboarding ou une importation restent
  manuels quand leur propriétaire et leur capacité sont prouvés ;
- séparer verdict déterministe et décision humaine ;
- produire un contrat texte ou Markdown sélectionnable et copiable, sans
  téléchargement.

Statuts attendus, sans score :

- `STOP_REQUIRED_DECISIONS_UNKNOWN` ;
- `STOP_CRITICAL_CAPABILITY_DEFERRED` ;
- `STOP_MANUAL_OPERATION_UNBOUNDED` ;
- `STOP_MANUAL_CAPACITY_EXCEEDED` ;
- `TEST_FORMAT_NOT_PRODUCTION` ;
- `PILOT_CANDIDATE_FOR_REVIEW` ;
- `FIRST_CLIENT_CANDIDATE_FOR_REVIEW`.

Les libellés publics traduisent ces codes en français courant. Un statut
« candidat » ne constitue ni une autorisation juridique, ni une homologation
de sécurité, ni une mise en production.

## 7. Exemple quantitatif et contre-cas obligatoires

Créer un SaaS B2B entièrement fictif, signalé avant le premier nombre. Son
premier parcours relie au moins trois rôles distincts : acheteur ou
administrateur, utilisateur métier et opérateur du service.

Le cas doit démontrer :

1. une liste initiale de demandes réduite à un seul résultat vendu, sans faire
   du nombre initial un benchmark ;
2. au moins trois opérations manuelles avec leurs équations en minutes ;
3. une capacité saisie supérieure à la charge déclarée, donnant un candidat au
   pilote ;
4. la même charge avec davantage de clients ou d’occurrences, dépassant la
   capacité saisie sans proposer automatiquement une automatisation ;
5. une capacité critique reportée, donnant STOP même si la charge totale est
   faible ;
6. un responsable ou une durée inconnu, conservé comme inconnu ;
7. un achat autonome dont l’échec de paiement n’est pas traité, donnant STOP ;
8. un prototype ou un test manuel qui répond à l’incertitude sans autoriser de
   production ;
9. un produit existant, un pilote accompagné ou un report préférable à un
   développement sur mesure.

Les tests rejouent les équations, les bornes, les inconnues, les traitements
conditionnels, les statuts et l’ordre de priorité des STOP. Les nombres publics
sont des hypothèses de l’exemple, jamais des moyennes de marché.

## 8. Sources primaires à rouvrir

P1 vérifie au jour de sa recherche l’URL, le statut, la version, la date, la
portée et la limite de chaque source retenue. Candidats obligatoires :

- Eric Ries ou la source méthodologique primaire accessible sur le MVP, pour
  l’apprentissage et l’hypothèse, sans en déduire une checklist technique ;
- GOV.UK Service Manual, phase alpha et/ou passage au beta, pour distinguer test
  d’hypothèse, service limité et exploitation, en qualifiant la transposition au
  SaaS privé ;
- RGPD consolidé, articles 5, 25 et 32, uniquement lorsque des données
  personnelles sont traitées ;
- CNIL, guide RGPD du développeur et guide de sécurité courant, pour comptes,
  habilitations, environnements, secrets, données de test et mesures
  proportionnées ;
- ANSSI, guide de sauvegarde courant, pour distinguer sauvegarde déclarée et
  restauration testée ;
- OWASP ASVS et Logging Cheat Sheet dans leurs versions courantes, comme
  référentiels de contrôles et non comme certification ;
- W3C WCAG 2.2, pour des critères techniques testables sans conclure seule aux
  obligations juridiques françaises ;
- documentation officielle du prestataire de paiement uniquement si l’exemple
  conserve l’achat autonome ; ses états ne deviennent pas une règle
  universelle de facturation.

P1 ouvre aussi les pages concurrentes uniquement pour documenter le vocabulaire,
les promesses et les contradictions suivantes :

- « un flux et une mesure suffisent » contre « toute la plateforme SaaS dès le
  MVP » ;
- pilote assisté contre libre-service ;
- opération manuelle visible contre automatisation prématurée ;
- fonction métier visible contre exploitation, reprise et support invisibles ;
- première preuve contre produit durable.

Une page commerciale ne prouve ni un seuil, ni une durée, ni une fonction
universelle.

## 9. Forme publique

- architecture premium cohérente avec les guides reconstruits récents ;
- ouverture directe et compréhensible par une personne non technique ;
- dix sections au maximum hors sources, FAQ et CTA ;
- une journée du premier client et un exemple fictif de bout en bout ;
- outil local utilisable au clavier, sans couleur seule et avec annonces
  accessibles ;
- action autonome complète avant le CTA ;
- CTA unique, tardif et borné vers `/demarrer-un-projet` ou le service SaaS ;
- FAQ visible, sans balisage `FAQPage` ;
- `Article` et `BreadcrumbList` uniquement ;
- `GuideAuthorCard` cohérente avec l’auteur balisé, incluant
  `profileUrl: "/equipe#fondateur"` ;
- trois visuels éditoriaux dédiés en SVG et WebP : 16:9, 4:3 et 1:1 ;
- les visuels représentent décisions, capacités, charge manuelle et STOP, jamais
  une liste universelle de fonctions ou une promesse de lancement ;
- thème clair/sombre, mobile, zoom, clavier, lecteur d’écran et impression
  restent possibles ;
- aucune feuille de calcul téléchargeable.

## 10. Fichiers P1 autorisés

- `docs/research/mvp-saas-quoi-inclure.md` ;
- `docs/research/manifests/mvp-saas-quoi-inclure-p1.sha256` ;
- `src/app/guides/mvp-saas-quoi-inclure/**` ;
- `public/guides/mvp-saas-quoi-inclure/**`.

Le présent gel peut être lu et inclus dans le manifeste, mais P1 ne le modifie
pas.

P1 ne modifie pas `src/lib/guides.ts`, les redirects legacy, le hub, le sitemap,
`llms.txt`, les autres guides, les composants partagés ou la configuration.

## 11. Porte G1

G1 refuse P1 si l’un des points suivants manque :

- corpus primaire réellement ouvert et journal daté ;
- registre d’affirmations avec formulation, source, version, portée et limite ;
- page complète, moteur pur, outil local et tests ;
- sept familles et sept statuts exacts sans score global ;
- exemple fictif, équations manuelles, dépassement de capacité et cas STOP ;
- distinction prototype, pilote accompagné et premier client en production ;
- mauvais fits, solution existante, test plus léger et report ;
- trois visuels SVG/WebP dédiés ;
- journal P1 complet et manifeste exact hors manifestes ;
- zéro P0 ou P1 local connu ;
- ESLint, TypeScript, Prettier, XML, tests ciblés et `git diff --check` verts.

Un `GO_PASSE_2` ou `PRET_POUR_G1` ne prouve ni intégration, ni build, ni route
servie, ni publication.
