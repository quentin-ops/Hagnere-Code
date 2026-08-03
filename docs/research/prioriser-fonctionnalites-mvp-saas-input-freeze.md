# Gel d’entrée P1 — prioriser-fonctionnalites-mvp-saas

Date du gel : 2026-08-03

Orchestrateur : `SECONDARY_ORCHESTRATOR_019fb1e0`

Worktree :
`/Users/quentinhagnere/Developpement/Hagnere-Code-wt-prioriser-fonctionnalites-mvp-saas`

Branche : `codex/prioriser-fonctionnalites-mvp-saas`

Base : `70a1acc2f85c63ae7f2d349ba9ba52efe1089abe`

## 1. Règle de création

P1 repart d’un état éditorial vierge. Le dossier historique
`docs/research/prioriser-fonctionnalites-mvp-saas.md`, ses anciens manifestes
et les versions Git de l’ancienne route servent uniquement à inventorier des
risques, des frontières, des candidats de sources et des affirmations à
revalider. Ils ne constituent ni un texte à conserver, ni un plan imposé, ni
une preuve actuelle.

Le premier commit qui a introduit l’ancienne route est
`e41e72e1f44865d71d44d8cbfa36cf25d583caae`, daté du
`2026-07-23T14:17:43+02:00`. Cette date Git ne prouve pas à elle seule l’heure
du premier déploiement public. La future intégration devra réconcilier
`datePublished` avec une preuve de déploiement ou, à défaut, conserver une date
historique honnêtement bornée.

État historique au gel :

- dossier :
  `d29f40739f2e03bd67e1ca227d29072354f10328dd94f2cc669f7228158b81d1` ;
- manifeste P1 historique :
  `a367f10b9f696268445c48e0cb70a614656421f0ad7df6ce6b9495f1ff1c7eeb` ;
- manifeste P2 historique :
  `302a3e8ff54f2216b6feb0cb4fe73a3474a9c760104ec868b60f5dbdace4066e` ;
- manifeste P3 historique :
  `3d54d720e5e6acfacd40cf21e985d3b628559a322a536b1db3ec624ca15bb801` ;
- manifeste P4 historique :
  `a083c96b0bcdedb7de58ddb6807b6f7db9139cef046df0d9df2883837760f15c` ;
- dernière page historique :
  `912f2022f125cc7e3c9ef6a69d420107ec038a35a4c8223d10c665e1e321bade` ;
- ancienne image Open Graph source :
  `b3be16004b60cb4d00d9df8a31d6029d7b2f611af7ad3dc64872c9f677079962`.

Les anciennes routes ne sont plus présentes dans la base courante et le
manifeste P4 historique ne se vérifie donc plus intégralement. P1 remplace le
manifeste `-p1.sha256` par la preuve exacte de sa nouvelle passe ; il laisse les
manifestes P2, P3 et P4 historiques intacts. Chaque passe suivante remplacera
uniquement son propre manifeste après avoir contrôlé le précédent snapshot.

P1 ne modifie aucun fichier partagé, aucun autre guide, aucun registre, aucun
verrou et aucun fichier Git. P1 ne lance ni serveur, ni build, ni commit, ni
push.

## 2. Lecteur et décision

Lecteur principal : fondatrice, fondateur, dirigeante, dirigeant ou responsable
produit d’un SaaS B2B déjà utilisé, qui reçoit des demandes contradictoires de
clients, de prospects, du support, de la vente et de l’équipe technique.

Question : « J’ai dix demandes différentes et chaque personne me dit que la
sienne est urgente. Qu’est-ce qu’on développe vraiment maintenant ? »

Décision finale attendue :

- transformer chaque solution demandée en problème, personne, situation et
  preuve observables ;
- sortir du classement général les incidents, obligations applicables,
  engagements contractuels et prérequis techniques qui demandent leur propre
  responsable et leur propre décision ;
- choisir entre construire un petit lot, tester d’abord, corriger ou instruire
  un sujet critique, acheter ou intégrer un outil existant, et reporter avec un
  événement de réexamen ;
- vérifier les dépendances, le travail complet, la capacité disponible et la
  preuve de fin avant d’annoncer le prochain lot ;
- refuser un classement lorsque les demandes n’emploient pas la même période,
  les mêmes unités ou des données suffisamment renseignées.

Réponse directe obligatoire dans les 150 premiers mots : un score ne choisit
pas à la place du dirigeant. Une demande incomplète devient d’abord un test ;
un incident, une obligation ou une dépendance critique suit une voie séparée ;
le prochain lot candidat est le plus petit ensemble cohérent dont le problème,
la preuve, le résultat vérifiable, les dépendances et l’effort sont assez
explicites pour une revue humaine. Cette réponse ne commence pas par « cela
dépend ».

## 3. Frontières éditoriales

| Sujet voisin                         | Propriétaire                                                                                           | Ce guide peut faire                                                                                        | Ce guide ne doit pas refaire                                         |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `mvp-saas-quoi-inclure`              | socle opérationnel du premier test : comptes, accès, données, vente, support, administration et mesure | vérifier que ce socle n’est pas noyé dans un score de demandes métier et renvoyer vers son contrat de test | redéfinir les sept familles ou recalculer leur charge manuelle       |
| `valider-idee-saas-avant-developper` | preuve initiale du problème, de l’acheteur et de l’accès au marché                                     | renvoyer vers la validation si personne n’utilise encore le produit                                        | refaire les entretiens et le test de vente initial                   |
| `cahier-des-charges-saas`            | périmètre complet, responsabilités et critères d’un produit multi-client                               | envoyer le lot choisi vers un cadrage plus détaillé                                                        | refaire les neuf blocs du cahier des charges                         |
| `combien-de-temps-developper-saas`   | calendrier par travaux, dépendances, capacité et inconnues                                             | transmettre un lot déjà choisi avec son effort et ses dépendances                                          | produire une date, une durée moyenne ou un réseau de calendrier      |
| `securite-application-metier`        | exigences, risques et preuves de sécurité proportionnés                                                | signaler qu’un sujet de sécurité sort du classement général et exige une revue qualifiée                   | prononcer la conformité ou classer automatiquement une vulnérabilité |
| futur `mvp-prototype-ou-poc`         | choisir le format d’expérience qui lève une incertitude                                                | produire la sortie « tester avant de construire » et un protocole borné                                    | comparer en détail prototype, POC, MVP et pilote                     |
| futur `faire-evoluer-saas-apres-mvp` | organiser la cadence, l’interruption, la livraison et la revue après choix du lot                      | fournir le lot, son test, son responsable et les sujets reportés                                           | installer une gouvernance permanente ou une roadmap annuelle         |

P1 ne crée aucun lien vers une route future, legacy ou absente du registre
central. Les destinations internes sont limitées aux routes réelles de la base
du worktree.

## 4. Interdictions

- aucun score « objectif », magique ou propriétaire ;
- aucun classement automatique de sujets non comparables ;
- aucun seuil universel de clients, votes, revenu, rétention ou effort ;
- aucune demande du plus gros client automatiquement première ou
  automatiquement ignorée ;
- aucun incident, risque de sécurité, obligation ou engagement contractuel
  réduit à une note « valeur » ;
- aucune interprétation juridique, contractuelle ou de sécurité personnalisée ;
- aucune fonction promise à une date non décidée, estimée et engagée ;
- aucune portée, valeur, confiance, capacité ou durée vide convertie en zéro ;
- aucun prix, budget, ROI, TCO, SLA, gain de chiffre d’affaires ou probabilité
  de rétention inventé ;
- aucun témoignage, client réel, mission Hagnéré Code, citation ou donnée
  interne inventés ;
- aucune présentation de RICE ou MoSCoW comme arbitre universel ;
- aucune formule RICE appliquée à des périodes, populations ou unités d’effort
  différentes ;
- aucun envoi réseau, cookie, stockage local ou stockage des saisies ;
- aucun téléchargement XLS, XLSX, CSV ou tableur ;
- aucune donnée structurée `FAQPage`, `HowTo`, `Product`, `Offer`, `Review`,
  `AggregateRating` ou `wordCount` ;
- aucune publication, indexation, déploiement, commit ou push.

## 5. Artefact signature obligatoire

Créer un atelier local et déterministe du prochain lot, accompagné d’un moteur
pur testé. Il ne choisit pas automatiquement la fonction gagnante : il vérifie
si les décisions proposées sont renseignées, comparables, cohérentes avec les
dépendances et compatibles avec la capacité déclarée.

L’outil doit au minimum saisir ou exposer clairement :

1. le nom de la période de décision, sans inventer sa durée ;
2. le résultat produit ou métier visé et la mesure qui permettra de le relire ;
3. la capacité totale disponible pour le lot, en jours-personne, ou son état
   explicitement inconnu ;
4. jusqu’à cinq demandes, chacune avec une identité UI stable ;
5. la phrase brute reçue, la personne concernée et la situation ;
6. le travail bloqué ou le problème observé ;
7. la preuve disponible, sa source, sa période et sa limite ;
8. le résultat attendu, la mesure et le seuil de succès ;
9. la voie de traitement : demande comparable, incident, sécurité,
   droit/conformité à instruire, engagement contractuel, dépendance fondatrice
   ou état inconnu ;
10. le responsable et la prochaine action de toute voie sortie du classement ;
11. les dépendances envers les autres demandes ;
12. l’effort complet en jours-personne, sans valeur par défaut ;
13. le plus petit test, sa mesure et son seuil lorsque la preuve est faible ;
14. la décision humaine proposée : construire, tester, traiter d’abord,
    acheter/intégrer, reporter ou rester à vérifier ;
15. l’événement qui rouvrira toute demande reportée.

Le moteur doit :

- garder toutes les chaînes numériques brutes jusqu’à validation ;
- accepter uniquement des décimales bornées et explicites, avec les mêmes
  bornes dans moteur, interface, texte et tests ;
- refuser vide, négatif, exposant, séparateur ambigu, précision excessive et
  valeur hors borne avant toute conversion arrondie ;
- ne jamais assimiler inconnu, vide et zéro ;
- détecter identifiants dupliqués, dépendances absentes, auto-dépendances et
  cycles ;
- calculer le travail total du lot sélectionné avec ses dépendances nécessaires
  sans les compter deux fois ;
- afficher l’équation, l’unité, la période, les inclusions et les exclusions ;
- laisser la capacité restante inconnue si un effort ou la capacité est
  inconnu ;
- bloquer un lot qui dépasse la capacité connue ;
- sortir les incidents, obligations, sujets de sécurité, engagements et
  prérequis de la comparaison ordinaire sans décider automatiquement de leur
  solution ;
- refuser une demande « construire » si problème, preuve, résultat, mesure,
  seuil, responsable, effort ou dépendance indispensable reste inconnu ;
- orienter une hypothèse faible vers un test renseigné plutôt que vers un gros
  développement ;
- refuser un report sans événement de réexamen ;
- conserver la décision humaine et ses raisons dans un Markdown sélectionnable
  et copiable, sans fichier ni réseau ;
- séparer strictement calcul, garde-fous et revue humaine.

Statuts globaux attendus, sans score composite :

- `STOP_REQUIRED_CONTEXT_UNKNOWN` ;
- `STOP_CRITICAL_ROUTE_UNASSIGNED` ;
- `STOP_DEPENDENCY_OR_CAPACITY_UNKNOWN` ;
- `STOP_SELECTED_LOT_EXCEEDS_CAPACITY` ;
- `TESTS_REQUIRED_BEFORE_BUILD` ;
- `NO_BUILD_CANDIDATE` ;
- `NEXT_LOT_CANDIDATE_FOR_REVIEW`.

Les libellés visibles expliquent chaque statut en français courant. Le moteur
peut exposer plusieurs raisons ; l’ordre des STOP est stable et testé.

## 6. Cas quantitatifs et adversariaux obligatoires

Tous les nombres publics appartiennent à un **exemple illustratif fictif**
nommé avant leur première apparition. Ils ne sont ni une moyenne, ni un cas
client, ni une estimation Hagnéré Code.

Le moteur, la page et les tests démontrent au minimum :

1. cinq demandes fictives qui aboutissent à des voies différentes : traiter un
   incident, tester une hypothèse, construire un petit lot, acheter ou intégrer
   un service, et reporter avec déclencheur ;
2. une capacité connue de 10 jours-personne, un élément choisi de 6 jours et sa
   dépendance nécessaire de 3 jours : total 9, reste 1 ;
3. la même sélection avec un effort total de 11 jours : STOP et dépassement de
   1 jour, sans réduction automatique ;
4. une dépendance partagée par deux demandes, comptée une seule fois ;
5. une dépendance inconnue, absente ou cyclique : aucun total exploitable ;
6. une capacité inconnue avec des efforts connus : sous-total visible mais
   reste inexploitable ;
7. un effort inconnu parmi les éléments sélectionnés : total global inconnu,
   jamais zéro ;
8. une preuve faible avec test, mesure et seuil complets : sortie « tester
   d’abord » ;
9. une preuve faible sans seuil : STOP, pas « tester » automatique ;
10. un incident ou sujet de sécurité sans responsable :
    `STOP_CRITICAL_ROUTE_UNASSIGNED` ;
11. un report sans événement de réexamen : STOP ;
12. zéro, valeur négative, décimale trop précise, exposant, valeur extrême et
    identifiants dupliqués ;
13. ajout, suppression et modification d’une demande sans perte de focus ni
    réutilisation d’identité UI ;
14. succès puis refus du presse-papiers avec repli complet ;
15. réinitialisation complète sans donnée persistée.

La page peut expliquer la formule RICE comme option secondaire, à proximité de
sa source primaire :

```text
RICE = portée sur une même période × effet estimé par personne × confiance
       ÷ effort total dans une même unité
```

Si un exemple RICE est publié, il doit nommer l’échelle d’effet choisie,
convertir le pourcentage de confiance en fraction, montrer l’équation et
expliquer pourquoi le résultat reste indicatif. RICE ne doit ni alimenter le
statut principal de l’outil ni classer les voies critiques.

## 7. Recherche primaire à rouvrir

P1 vérifie sur le web la fraîcheur, la version, le statut, l’auteur, le conflit
d’intérêt et la portée de chaque source au jour de sa recherche. Les candidats
obligatoires sont :

- GOV.UK Service Manual, « Learning about users and their needs », pour les
  besoins fondés sur des preuves, centrés sur le problème plutôt que la
  solution, en qualifiant la transposition d’un service public à un SaaS B2B ;
- Sean McBride / Intercom, article original de RICE, pour les quatre facteurs,
  les unités, l’usage de mesures réelles, l’effort de toute l’équipe et les
  décisions légitimes hors score ;
- Strategyzer / Alex Osterwalder, Test Card, pour expliciter hypothèse, test,
  mesure et seuil ;
- NIST SSDF, version finale courante, pour l’approche fondée sur le risque, les
  ressources et les dépendances, sans le transformer en norme française
  générale ;
- Home Office Engineering, « Design from evidence », pour la traçabilité entre
  besoin, preuve, exigence fonctionnelle ou non fonctionnelle et test ;
- DORA, « Working in small batches », version courante, pour relier petit lot,
  feedback et correction de trajectoire, sans importer un délai universel ;
- une source publique française compétente seulement si une affirmation de
  sécurité ou de protection des données exige une portée française ;
- toute source fournisseur uniquement pour une intégration précise et
  illustrative, jamais pour prouver une priorité générale.

État observé avant P1, à revalider par l’agent : GOV.UK affiche une dernière
mise à jour au 23 mars 2017 ; l’article Intercom est daté du 5 janvier 2018 ;
Strategyzer du 5 mars 2015 ; Home Office du 9 août 2023 ; DORA du 8 décembre
2025 ; la page projet NIST SSDF indique une mise à jour au 13 avril 2026.

P1 recherche aussi au moins une contradiction sérieuse sur :

- le nombre de votes ou de demandes comme preuve suffisante ;
- la pondération automatique par revenu d’un compte ;
- la fausse objectivité d’un score dont l’effet ou la confiance sont estimés ;
- la différence entre petite livraison testable et lot artificiellement
  découpé mais libéré en bloc ;
- la dette, la sécurité et les obligations noyées dans valeur contre effort ;
- la spécialisation durable créée pour un seul client ;
- l’achat ou l’intégration d’un service existant comme alternative au code ;
- le coût complet de conception, développement, test, déploiement, support et
  maintenance.

Les pages commerciales concurrentes documentent les formulations de la demande
et les promesses à contredire. Elles ne prouvent ni objectivité, ni résultat,
ni seuil. Les résultats SERP qui proposent import ou export CSV ne justifient
aucune ressource tableur sur Hagnéré Code.

## 8. Forme publique

- architecture premium identique aux guides reconstruits récents ;
- ouverture directe et compréhensible par une personne non technique ;
- réponse principale dans les 150 premiers mots ;
- dix sections au maximum hors sources, FAQ et CTA ;
- cinq demandes fictives suivies jusqu’à leur décision, sans faux client ;
- un contre-cas où l’outil du marché, le test, la correction ou le report gagne ;
- formule et équations montrées près de leur interprétation ;
- action autonome complète avant le CTA ;
- CTA tardif, unique et borné vers `/demarrer-un-projet`, sans second téléphone
  dans le bloc de stratégie ;
- FAQ visible, sans balisage `FAQPage` ;
- `Article` et `BreadcrumbList` uniquement ;
- trois visuels éditoriaux dédiés en SVG et WebP : 16:9, 4:3 et 1:1 ;
- visuel 16:9 : demande brute, preuves et voies de décision sans progression
  automatique vers « développer » ;
- visuel 4:3 : lot, dépendances et capacité, avec données fictives ;
- visuel 1:1 : construire, tester, traiter, acheter/intégrer ou reporter autour
  d’une revue humaine, sans podium ni score commun ;
- OG 1200 × 630 via le composant canonique ;
- thèmes clair/sombre, mobile, clavier, lecteur d’écran et impression ;
- aucune feuille de calcul téléchargeable.

## 9. Fichiers P1 autorisés

- `docs/research/prioriser-fonctionnalites-mvp-saas.md` ;
- `docs/research/manifests/prioriser-fonctionnalites-mvp-saas-p1.sha256` ;
- `src/app/guides/prioriser-fonctionnalites-mvp-saas/**` ;
- `public/guides/prioriser-fonctionnalites-mvp-saas/**`.

Le présent gel est lu intégralement et inclus dans le manifeste P1, mais P1 ne
le modifie pas.

Les anciens manifestes P2, P3 et P4 restent des preuves historiques et ne sont
pas modifiés en P1.

## 10. Porte G1

G1 refuse P1 si l’un des points suivants manque :

- prompt maître, charte, instructions, règle d’or, roadmap, freeze et DOCX P1
  lus intégralement ;
- dossier reconstruit avant la page, avec registre d’affirmations et journal ;
- corpus interne, route historique et risques de cannibalisation inventoriés ;
- sources primaires réellement ouvertes et datées ;
- formulation publique, source, portée, limite et conséquence pour chaque
  affirmation sensible ;
- page complète, moteur pur, outil local et tests ;
- quatre voies critiques séparées de la comparaison ordinaire ;
- cas 9/10/1, dépassement, inconnues, dépendances et cycles rejoués ;
- exemple fictif clairement annoncé et calculs reconstructibles ;
- identités UI stables et copie Markdown avec repli ;
- trois visuels SVG/WebP dédiés, inspectés à leur taille native ;
- alternatives, mauvais fits, achat/intégration, test et report ;
- CTA tardif après l’action autonome ;
- journal P1 complet ;
- manifeste exact hors manifestes, avec le freeze ;
- zéro P0 ou P1 local connu ;
- Vitest ciblé, ESLint, TypeScript, Prettier, XML, WebP et
  `git diff --check` verts.

Un `PRET_POUR_G1` ne prouve ni intégration, build, route servie, BAT complet,
commit, push, déploiement, publication ou indexation.
