# Gel d’entrée P1 — combien-de-temps-developper-saas

Date du gel : 2026-08-01

Orchestrateur : `SECONDARY_ORCHESTRATOR_019fb1e0`

Worktree :
`/Users/quentinhagnere/Developpement/Hagnere-Code-wt-combien-de-temps-developper-saas`

Branche : `codex/combien-de-temps-developper-saas`

Base : `343436a8542b599c6ddf64c7bde837fd245b00ee`

## 1. Règle de création

P1 repart d’un état éditorial vierge. Le dossier historique
`docs/research/combien-de-temps-developper-saas.md`, ses anciens manifestes et
les versions Git de la route servent uniquement à inventorier les risques,
frontières et affirmations à revalider. Ils ne constituent ni un texte à
conserver, ni un plan imposé, ni une preuve actuelle.

P1 ne modifie aucun fichier partagé, aucun autre guide, aucun registre, aucun
verrou et aucun fichier Git. P1 ne lance ni serveur, ni build, ni commit, ni
push.

## 2. Lecteur et décision

Lecteur principal : dirigeant, responsable produit ou porteur d’un SaaS B2B
qui reçoit deux calendriers incompatibles ou doit décider ce qui peut réellement
être prêt avant une échéance.

Question : « Combien de temps faut-il pour développer mon SaaS, et que dois-je
changer si la date ne tient pas ? »

Décision finale attendue :

- comparer uniquement des calendriers qui visent la même ligne d’arrivée ;
- rendre visibles travaux, attentes, responsables, dépendances et capacité ;
- tester d’abord une inconnue qui peut déplacer tout le plan ;
- choisir entre réduire, simplifier, piloter, déplacer la date, acheter une
  solution existante ou reporter ;
- refuser une date lorsque les données nécessaires au calcul restent inconnues.

Réponse directe obligatoire dans les 150 premiers mots : il n’existe pas de
durée universelle défendable pour un SaaS. Une date candidate vient de la plus
longue suite de travaux qui s’attendent, sous des hypothèses explicites de
capacité et de réponse. Cette réponse ne doit pas commencer par « cela dépend ».

## 3. Frontières éditoriales

| Sujet voisin | Propriétaire | Ce guide peut faire | Ce guide ne doit pas refaire |
| --- | --- | --- | --- |
| `valider-idee-saas-avant-developper` | preuve du problème, de l’acheteur et de l’engagement | renvoyer vers la validation si la ligne d’arrivée n’est pas justifiée | valider le marché |
| `cahier-des-charges-saas` | même produit, mêmes décisions et mêmes preuves | utiliser son périmètre figé comme entrée du calendrier | réécrire les neuf blocs du cahier des charges |
| `plan-recette-application-metier` | cas, preuves, anomalies et décision de réception | intégrer le temps nécessaire à préparer, jouer et corriger la recette | enseigner tout le plan de recette |
| `securite-application-metier` | exigences et preuves de sécurité proportionnées | montrer que sécurité et restauration traversent le calendrier | produire un audit de sécurité |
| futurs guides MVP / POC / coût / prestataire | contenu, format, budget ou sélection | distinguer brièvement prototype, preuve, pilote et service ouvert | donner un budget, une durée moyenne par format ou choisir un prestataire |

Aucun lien ne pointe vers une route encore legacy ou absente du registre
central. Les destinations internes P1 sont limitées aux routes statiques
existantes dans le worktree.

## 4. Interdictions

- aucune moyenne de marché, promesse, garantie ou « délai standard » ;
- aucune fourchette commerciale présentée comme vérité générale ;
- aucun témoignage, client réel, projet Hagnéré Code ou donnée interne
  inventés ;
- aucune probabilité `P50`, `P80`, Monte-Carlo ou précision statistique
  simulée ;
- aucun pourcentage de marge arbitraire ;
- aucun prix, TJM, budget, ROI, TCO ou SLA ;
- aucune date réelle calculée sans convention explicite sur jours ouvrés,
  congés, jours fériés et disponibilité ;
- aucune affirmation selon laquelle ajouter des personnes, l’IA, le no-code ou
  des sprints réduit automatiquement la durée ;
- aucune sécurité, accessibilité, protection des données, restauration,
  exploitation ou support reportés mécaniquement à la fin ;
- aucune donnée structurée `FAQPage`, `HowTo`, `Offer`, `Review`,
  `AggregateRating` ou `wordCount` ;
- aucun envoi réseau, cookie, stockage local ou stockage de saisies ;
- aucun téléchargement XLS, XLSX, CSV ou tableur ;
- aucune publication, indexation, déploiement, commit ou push.

## 5. Artefact signature obligatoire

Créer un planificateur local et déterministe, accompagné d’un moteur pur testé.
Le lecteur doit pouvoir modifier un petit réseau de travaux fictifs puis
comprendre pourquoi certaines durées s’additionnent et d’autres avancent en
parallèle.

L’outil doit au minimum saisir ou exposer clairement :

1. la ligne d’arrivée ;
2. le résultat de chaque travail ;
3. son responsable ou sa capacité dédiée ;
4. les travaux dont il dépend ;
5. trois durées en jours ouvrés : favorable, centrale et prudente ;
6. l’inconnue qui justifie l’écart entre ces durées ;
7. une réserve explicite en jours, séparée des durées et jamais présentée comme
   une probabilité ;
8. le nombre maximal de jours ouvrés disponible pour le raisonnement inverse.

Le moteur doit :

- calculer la date de fin relative de chaque travail par parcours de
  dépendances ;
- retenir la suite déterminante au lieu d’additionner tous les travaux ;
- détecter une dépendance inconnue, un cycle, une durée absente ou négative et
  prononcer STOP ;
- ne jamais supposer que deux travaux confiés à la même capacité peuvent
  avancer en parallèle sans ordre explicite ;
- montrer les hypothèses qui changent la suite déterminante ;
- séparer calcul et décision humaine ;
- produire un texte ou Markdown sélectionnable et copiable, sans téléchargement
  de fichier.

Statuts attendus, sans score :

- `STOP_REQUIRED_INPUTS_UNKNOWN` ;
- `STOP_INVALID_DEPENDENCY_NETWORK` ;
- `CLARIFY_CAPACITY_BEFORE_CALENDAR` ;
- `CALENDAR_CANDIDATE_FOR_REVIEW`.

## 6. Cas quantitatifs obligatoires

Tous les nombres publics appartiennent à un exemple entièrement fictif et sont
signalés avant leur première apparition. Ils ne sont ni une moyenne, ni un cas
client, ni une estimation Hagnéré Code.

Le moteur et le guide démontrent au moins :

1. scénario favorable ;
2. scénario central ;
3. scénario prudent ;
4. stress combiné : une attente externe et une validation interne se
   dégradent ensemble ;
5. raisonnement inverse : le nombre de jours disponible est inférieur au
   résultat prudent, donc l’outil calcule l’écart à traiter sans inventer une
   réduction possible ;
6. deux travaux réellement parallèles ne sont pas additionnés ;
7. deux travaux utilisant la même capacité sans ordre explicite imposent une
   clarification ;
8. un cycle de dépendances prononce STOP ;
9. une inconnue de durée ou de responsable reste inconnue et prononce STOP.

Chaque scénario affiche ses équations ou étapes de calcul. Les tests unitaires
rejouent les valeurs, les jointures, le changement éventuel de suite
déterminante, le stress combiné et le raisonnement inverse.

## 7. Recherche primaire à rouvrir

P1 vérifie la fraîcheur, la version, le statut et la portée de chaque source au
jour de sa recherche. Les candidats obligatoires sont :

- GAO, `Schedule Assessment Guide`, pour la logique des dépendances, de la
  suite critique et du risque de calendrier ; qualifier toute transposition à
  un petit SaaS ;
- GOV.UK Service Manual, pour la distinction entre exploration, versions
  testées et service exploité, sans importer de durée générique ;
- Scrum Guide officiel, pour borner ce qu’un sprint dit et ne dit pas sur la
  durée totale d’un produit ;
- NIST Secure Software Development Framework, version finale courante, pour
  intégrer les pratiques de développement sécurisé au travail plutôt que les
  repousser à une phase finale ;
- guide CNIL de la sécurité des données personnelles, version courante, pour
  les tests, environnements, données et accès lorsqu’ils s’appliquent ;
- une documentation fournisseur primaire uniquement si l’exemple contient une
  dépendance externe précise ; elle reste illustrative et conditionnelle.

P1 recherche aussi au moins une contradiction sérieuse sur :

- capacité de personnes partagée entre travaux ;
- accès ou validation détenu par un tiers ;
- effet réel d’une automatisation, du no-code ou de l’IA ;
- différence entre prototype montrable, pilote limité et service exploitable ;
- marge ajoutée deux fois à des durées déjà prudentes.

Les pages commerciales concurrentes peuvent documenter les formulations de la
demande et les promesses à contredire. Elles ne prouvent aucun délai.

## 8. Forme publique

- architecture premium identique aux guides reconstruits récents ;
- ouverture directe et compréhensible par une personne non technique ;
- dix sections au maximum hors sources, FAQ et CTA ;
- un exemple fictif de bout en bout ;
- un contre-cas où une solution existante, un test manuel ou un report est
  préférable ;
- action autonome complète avant le CTA ;
- CTA tardif et borné vers `/demarrer-un-projet` ou le service SaaS existant ;
- FAQ visible, sans balisage `FAQPage` ;
- `Article` et `BreadcrumbList` uniquement ;
- trois visuels éditoriaux dédiés en SVG et WebP : 16:9, 4:3 et 1:1 ;
- les visuels représentent décisions, dépendances et STOP, jamais une
  chronologie universelle ou une promesse de livraison ;
- thème clair/sombre, mobile, clavier, lecteur d’écran et impression doivent
  rester possibles ;
- aucune feuille de calcul téléchargeable.

## 9. Fichiers P1 autorisés

- `docs/research/combien-de-temps-developper-saas.md` ;
- `docs/research/manifests/combien-de-temps-developper-saas-p1.sha256` ;
- `src/app/guides/combien-de-temps-developper-saas/**` ;
- `public/guides/combien-de-temps-developper-saas/**`.

Le présent gel peut être lu et inclus dans le manifeste, mais P1 ne le modifie
pas.

Les anciens manifestes P2, P3 et P4 restent des preuves historiques et ne sont
pas modifiés en P1.

## 10. Porte G1

G1 refuse P1 si l’un des points suivants manque :

- corpus et sources primaires réellement ouverts ;
- registre d’affirmations avec formulation publique, source, date, portée et
  limite ;
- page complète, moteur pur, outil local et tests ;
- cinq scénarios quantitatifs et cas STOP ;
- explication de la capacité partagée ;
- trois visuels SVG/WebP dédiés ;
- mauvais fits, alternatives et report ;
- journal P1 complet ;
- manifeste exact hors manifestes ;
- zéro P0 ou P1 local connu ;
- ESLint, TypeScript, Prettier, XML, tests ciblés et `git diff --check` verts.

Un `PRET_POUR_G1` ne prouve ni intégration, ni build, ni route servie, ni
publication.
