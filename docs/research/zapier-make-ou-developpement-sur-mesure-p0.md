# Gel P0 — Zapier, Make ou développement sur mesure

Date du gel : 6 août 2026  
Slug réservé : `zapier-make-ou-developpement-sur-mesure`  
Roadmap : guide n° 8  
Orchestrateur : `PRIMARY_ORCHESTRATOR`  
Branche : `codex/zapier-make-ou-developpement-sur-mesure`  
Worktree :
`/Users/quentinhagnere/Developpement/Hagnere-Code-wt-zapier-make-ou-developpement-sur-mesure`  
Base exacte : `36a8bdaf43139ce0413264461b55f3d866e07f67`, commit poussé du
guide n° 7  
État : P0 validé, entrée obligatoire de la passe 1

> Ce gel n'est pas une passe rédactionnelle, un comparatif sponsorisé, un
> verdict en faveur du code ni une autorisation de publication. Il fixe la
> question, les sorties honnêtes, les preuves à rechercher, les inconnues et
> les fichiers autorisés. Un chiffre inconnu reste inconnu : aucune passe ne
> peut le transformer en zéro, en seuil universel ou en recommandation
> automatique.

## 1. Assainissement de l'ancien état

Au moment du gel, aucune route source n'existe dans
`src/app/guides/zapier-make-ou-developpement-sur-mesure/`. La route publique
répond `308` vers `/services/outils-internes-sur-mesure`. Cette redirection
reste active pendant P1 à P4.

Un dossier de recherche daté des 23 et 24 juillet 2026 et quatre manifestes
historiques existaient encore dans Git. Ils sont retirés du nouveau worktree
avant P1 et restent récupérables dans l'historique, mais sont interdits comme
texte, plan, preuve, score ou verdict. Leur chaîne n'est plus rejouable :

- le manifeste P1 ne correspond plus au dossier qu'il annonce ;
- les manifestes P2 à P4 référencent une page et une image sociale absentes ;
- les empreintes de fichiers partagés appartiennent à un ancien état du site ;
- le statut historique « publiable » ne prouve ni la qualité actuelle, ni un
  déploiement, ni une URL publique indexable.

L'archive peut seulement fournir une liste de sujets à vérifier de nouveau.
Aucune phrase, aucun exemple, aucun chiffre, aucune source réputée ouverte et
aucune structure ne doit être repris par inertie.

## 2. Question unique et réponse à défendre

Le guide aide une direction de PME, une personne responsable des opérations ou
une équipe technique à décider comment exécuter **un flux déjà identifié** qui
relie plusieurs logiciels :

1. conserver et mieux configurer l'automatisation actuelle ;
2. changer de plateforme entre Zapier et Make lorsque le même flux testé le
   justifie réellement ;
3. garder l'orchestration visible dans la plateforme et développer seulement
   une règle ou une connexion circonscrite ;
4. développer et exploiter une connexion dédiée ;
5. simplifier, repasser temporairement en traitement humain ou arrêter le flux.

Réponse courte de travail :

> Zapier ou Make reste souvent le meilleur choix quand le flux est lisible,
> récupérable et correctement surveillé. Le code devient une option lorsque
> les règles, la criticité, le volume, la reprise ou les contraintes de données
> dépassent ce que la plateforme couvre au coût complet accepté — à condition
> de financer aussi l'exploitation du code. Entre les deux, une architecture
> hybride peut isoler la seule difficulté réelle. Sans journaux, test de panne,
> responsable et coûts comparables, la décision honnête est de mesurer ou de
> suspendre, pas de migrer.

Le guide ne doit jamais conclure « Make est moins cher », « Zapier est plus
simple » ou « le code est plus robuste » sans périmètre identique et preuve
datée.

## 3. Intention, lecteur et résultat après lecture

- Requête principale : `Zapier Make ou développement sur mesure`.
- Variantes utiles seulement si elles servent la décision : `Make ou Zapier`,
  `remplacer Zapier`, `alternative Make entreprise`, `automatisation sur
mesure`, `connexion API sur mesure`, `coût Zapier Make`, `erreurs Make
Zapier`.
- H1 de travail : `Zapier, Make ou développement sur mesure : que choisir pour
un flux devenu critique ?`
- Lecteurs : dirigeant ou dirigeante de PME, responsable des opérations,
  responsable métier, DSI, responsable automatisation ou prestataire chargé
  de reprendre un flux.
- Moment : le processus à automatiser est déjà connu ; un flux existe ou peut
  être dessiné, mais sa consommation, ses erreurs, sa reprise et son coût
  complet ne sont pas encore réconciliés.
- Décision finale : une des cinq sorties, avec les preuves disponibles, les
  inconnues et les conditions qui feraient changer d'avis.
- Action autonome : instrumenter un flux non sensible pendant trente jours,
  reconstituer sa facture et exécuter les tests de panne en sandbox ou sur une
  copie sûre.
- CTA loyal : faire examiner un flux avant de le reconstruire, vers
  `/demarrer-un-projet`, après la méthode autonome.

Hors périmètre : choisir le premier processus à automatiser, tutoriel pas à
pas Zapier ou Make, catalogue d'intégrations, palmarès général des plateformes,
benchmark permanent des tarifs, conseil juridique individualisé, promesse de
disponibilité, devis ou seuil universel de rentabilité.

## 4. Frontières et cannibalisation

Le guide n° 8 ne refait pas :

- `automatiser-processus-metier` : choisir un processus et arbitrer
  automatisation, simplification ou maintien humain ;
- `calculer-roi-application-metier` : modèle économique complet d'une
  application métier ;
- `back-office-sur-mesure-pme` : contrat d'écran et poste de travail interne ;
- les futurs guides CRM/ERP : sélection d'un système ou de sa source de vérité ;
- les futurs guides sécurité, RGPD, reprise ou intégration : traitement
  exhaustif de ces disciplines.

Sa propriété éditoriale exclusive est le **contrat d'exploitation d'un flux** :

`déclencheur → branches → actions → preuve → erreur → reprise → responsable`.

Trois différences minimales avec les autres contenus :

1. la même automatisation réelle est mesurée avant toute comparaison d'outils ;
2. les échecs, doublons, succès partiels et reprises comptent autant que les
   exécutions réussies ;
3. abonnement, consommation, temps humain, exploitation et sortie sont
   comparés sur le même horizon, sans additionner des catégories qui se
   recouvrent.

## 5. Définitions à rendre compréhensibles avant usage

Le texte visible traduit immédiatement :

- déclencheur : événement qui lance le flux ;
- action : opération réalisée dans un logiciel connecté ;
- tâche ou crédit : unité commerciale propre au fournisseur, dont le comptage
  dépend du produit, du plan et de l'étape ;
- API : porte documentée par laquelle deux logiciels échangent ;
- webhook : message envoyé à l'arrivée d'un événement ;
- erreur 429 : réponse signalant trop de requêtes dans le contexte concerné ;
- nouvelle tentative : nouvel essai après un échec ;
- idempotence : moyen d'éviter qu'une même demande utile crée deux fois son
  effet métier ;
- file : attente ordonnée avant traitement ;
- journal : trace suffisamment contextualisée pour comprendre et réparer ;
- mode dégradé : fonctionnement limité mais explicite pendant un incident ;
- réversibilité : capacité pratique à récupérer scénarios, configuration,
  données, documentation, secrets et responsabilités nécessaires à la suite.

Ces définitions n'affirment ni fonctionnalité disponible sur tous les plans, ni
garantie d'absence de doublon.

## 6. Artefact signature : l'observatoire d'un flux sur trente jours

La page fournit un outil local, compréhensible sans contact commercial. Il doit
séparer et afficher au minimum :

1. événements reçus ;
2. exécutions par branche ;
3. actions ou unités réellement comptées ;
4. succès complets ;
5. échecs visibles ;
6. succès partiels ;
7. reprises automatiques et manuelles ;
8. doublons ou effets à annuler ;
9. heures humaines d'observation, correction et réconciliation ;
10. abonnement et dépassements attribuables au flux ;
11. coûts externes distincts ;
12. propriétaire, remplaçant et délai maximal acceptable.

Le calculateur ne collecte ni n'envoie les valeurs. Il doit permettre un état
`INCONNU`, refuser les nombres invalides et ne produire aucun verdict si une
entrée critique manque.

Les comparaisons à 12 et 36 mois séparent :

- coût de plateforme : abonnement attribué + dépassements + options ;
- coût humain : temps réellement observé × coût horaire choisi ;
- coût du code : cadrage + réalisation + tests + hébergement + surveillance +
  maintenance + mises à jour des API + support + sortie ;
- coût d'incident : saisi depuis un incident documenté ou une hypothèse
  explicitement nommée, jamais depuis une moyenne inventée.

Le résultat montre les sous-totaux et les inconnues. Il interdit :

- de comparer l'abonnement complet d'un outil au seul prix initial du code ;
- de compter deux fois le temps déjà inclus dans un contrat ;
- de traiter une capacité réaffectée comme une économie de trésorerie ;
- de compenser une absence de reprise par un coût mensuel plus bas ;
- de recommander une solution sur une différence de coût située dans la marge
  d'incertitude choisie.

## 7. Protocole de panne non compensable

En environnement de test, sur une copie ou avec des données anonymisées, le
guide fait éprouver au moins ces sept événements :

1. donnée obligatoire absente ou invalide ;
2. limite de débit ou réponse `429` ;
3. logiciel tiers temporairement indisponible ;
4. même webhook reçu deux fois ;
5. première action réussie puis action suivante échouée ;
6. secret, jeton ou autorisation expiré ;
7. reprise manuelle après un effet déjà produit chez le tiers.

Pour chaque test, le lecteur consigne : signal reçu, élément resté en attente,
effet déjà produit, possibilité de reprise, risque de doublon, personne alertée,
preuve de retour à la normale et action de compensation éventuelle.

Une démonstration de coût ne peut pas masquer l'échec d'un test indispensable.
Si le flux ne peut pas être testé sans risque, cette impossibilité devient une
raison de cadrer ou de suspendre, jamais une case verte implicite.

## 8. Questions qui doivent modifier la décision

P1 construit une matrice localisable couvrant au moins :

- quelle donnée ou action fait foi dans chaque logiciel ;
- combien de branches et de règles sont réellement exécutées ;
- comment chaque fournisseur compte l'unité sur ce flux précis ;
- quelles limites proviennent de Zapier/Make et lesquelles des applications
  connectées ;
- qui détecte l'échec, dans quel délai et avec quel contexte ;
- ce qui est relançable sans reproduire un effet ;
- ce qui nécessite annulation, compensation ou validation humaine ;
- ce qui se passe lors d'un pic de volume ;
- quelles données personnelles ou sensibles transitent ;
- qui est responsable de traitement, sous-traitant ou simple fournisseur dans
  la situation réelle ;
- quelles traces sont nécessaires et combien de temps les conserver ;
- qui possède les comptes, connexions, secrets, documentation et alertes ;
- comment un collègue ou un nouveau prestataire reprend le flux ;
- coût complet à horizon comparable et postes encore inconnus ;
- cas où une fonction existante, une simplification ou le maintien humain est
  préférable ;
- raison réelle de changer de plateforme plutôt que de réparer la conception ;
- capacité interne à exploiter du code après sa livraison.

Chaque perspective dirigeant, métier, opérations, finance, IT/sécurité,
données/RGPD, achats/juridique, adoption, maintenance, incident/reprise,
réversibilité et statu quo reçoit `APPLICABLE` avec question et localisation,
ou `NON_APPLICABLE_JUSTIFIE` avec justification précise.

## 9. Corpus primaire à rouvrir en P1 puis indépendamment en P2

Chaque URL est une file de vérification, pas une affirmation déjà validée. P1
et P2 consignent date d'ouverture, portée, conditions de plan et limite.

### 9.1 Zapier

- tarifs officiels : <https://zapier.com/pricing> ;
- mesure de l'usage des tâches :
  <https://help.zapier.com/hc/en-us/articles/8496196837261-How-is-task-usage-measured-in-Zapier> ;
- limites des automatisations :
  <https://help.zapier.com/hc/en-us/articles/8496181445261-Zap-limits> ;
- diagnostic des erreurs :
  <https://help.zapier.com/hc/en-us/articles/8496037690637-How-to-troubleshoot-errors-in-Zap-workflows> ;
- sécurité, confidentialité, DPA, sous-traitants, localisation et éventuels
  engagements de service : pages officielles actuelles à retrouver depuis le
  site fournisseur, sans extrapoler une offre à toutes les autres.

### 9.2 Make

- tarifs officiels : <https://www.make.com/en/pricing> ;
- consommation des crédits : <https://help.make.com/how-features-use-credits> ;
- exécutions incomplètes : <https://help.make.com/incomplete-executions> et
  <https://help.make.com/manage-incomplete-executions> ;
- erreurs de limite de débit :
  <https://help.make.com/fix-rate-limit-errors> ;
- sécurité, confidentialité, DPA, sous-traitants, localisation et éventuels
  engagements de service : pages officielles actuelles à retrouver et borner
  au plan, à la région et au contrat concernés.

### 9.3 Normes, données et ingénierie

- RGPD officiel, notamment articles 5, 25, 28 et 32 :
  <https://eur-lex.europa.eu/eli/reg/2016/679/oj?locale=fr> ;
- CNIL, sécurité des API :
  <https://www.cnil.fr/fr/securite-api-interfaces-de-programmation-applicative> ;
- CNIL, qualification et encadrement d'un sous-traitant : pages officielles à
  rouvrir selon la formulation réellement publiée ;
- CNIL, habilitations, journalisation, sauvegarde et continuité : pages
  officielles pertinentes, avec leur portée exacte ;
- HTTP Semantics, RFC 9110, pour la portée technique des méthodes idempotentes :
  <https://www.rfc-editor.org/rfc/rfc9110> ;
- RFC 6585 pour le statut `429` :
  <https://www.rfc-editor.org/rfc/rfc6585> ;
- OWASP Logging Cheat Sheet et REST Security Cheat Sheet comme recommandations
  d'ingénierie, jamais comme obligations légales françaises.

Les tarifs, quotas, unités, fonctions, pages contractuelles, sous-traitants,
localisations et disponibilités sont volatils. Toute mention qui survivrait à
P2 doit porter son périmètre et sa date ; sinon elle est retirée ou transformée
en consigne de vérification.

## 10. Registre minimal des affirmations

P1 crée un registre ligne par ligne avec identifiant stable, type, source,
périmètre, date et statut. Les familles suivantes restent bornées :

| Famille                               | Traitement obligatoire                                             |
| ------------------------------------- | ------------------------------------------------------------------ |
| Comptage des tâches Zapier            | Source officielle actuelle, plan et exceptions                     |
| Comptage des crédits Make             | Source officielle actuelle, module et exceptions                   |
| Erreurs, historique et reprise        | Fonction réellement documentée, activation et plan                 |
| Limite `429`                          | Cause tierce ou plateforme distinguée ; aucune garantie de reprise |
| Relance et doublon                    | Risque explicite ; test d'effet métier et compensation             |
| Abonnement et dépassement             | Valeurs saisies par le lecteur ou prix daté et borné               |
| Développement dédié                   | Coût d'exploitation complet, aucune robustesse automatique         |
| Plateforme plus simple ou moins chère | Interdit sans même flux et même horizon                            |
| Sécurité et conformité                | Mesures et responsabilités qualifiées, aucune conformité promise   |
| DPA, sous-traitants et localisation   | Contrat, offre, date et entité exacts                              |
| SLA ou disponibilité                  | Contrat exact uniquement ; aucune généralisation marketing         |
| ROI ou recommandation                 | Suspendu si entrées ou portes non compensables manquent            |
| Cas Hagnéré Code                      | Fictif ou preuve publique vérifiée ; jamais témoignage inventé     |

Types autorisés : `FAIT`, `CALCUL`, `SCENARIO`, `DEDUCTION`,
`RECOMMANDATION`, `INCONNU`. Statuts autorisés : `VERIFIE`, `A_NUANCER`,
`A_RETIRER`, `INCONNU`.

## 11. Cas contrastés obligatoires

Sans fabriquer de client, P1 met en scène des cas entièrement fictifs et les
annonce avant tout fait ou chiffre :

1. flux simple, faible criticité, erreur visible et reprise facile : conserver
   et documenter la plateforme ;
2. plateforme adaptée mais une règle de calcul complexe : option hybride ;
3. flux critique, volume ou séquencement exigeant, exploitation réellement
   financée : connexion dédiée à étudier ;
4. processus instable ou peu utile : simplifier, maintenir humainement ou
   arrêter ;
5. changement Zapier ↔ Make justifié par le test du même flux, et contre-cas où
   changer ne répare ni les données ni la responsabilité.

Chaque cas indique contexte, entrées connues, inconnues, incident, personne
responsable, calcul éventuel, décision provisoire et condition inverse.

## 12. Fichiers autorisés pendant P1 à P4

Les agents de passe peuvent créer ou modifier uniquement :

- `docs/research/zapier-make-ou-developpement-sur-mesure.md` ;
- `docs/research/manifests/zapier-make-ou-developpement-sur-mesure-p1.sha256` ;
- `docs/research/manifests/zapier-make-ou-developpement-sur-mesure-p2.sha256` ;
- `docs/research/manifests/zapier-make-ou-developpement-sur-mesure-p3.sha256` ;
- `docs/research/manifests/zapier-make-ou-developpement-sur-mesure-p4.sha256` ;
- `src/app/guides/zapier-make-ou-developpement-sur-mesure/**` ;
- `public/guides/zapier-make-ou-developpement-sur-mesure/**`.

Le présent P0 est lu mais ne doit plus être modifié par les agents de passe.
Le registre, `src/lib/guides.ts`, le hub, les redirections, le maillage entrant,
les composants partagés et les tests transversaux appartiennent à
l'orchestrateur d'intégration.

## 13. Livrables minimaux de P1

P1 doit produire une création neuve et cohérente comprenant :

- dossier de recherche complet dans l'ordre du protocole ;
- réponse visible dans le héros et les 150 premiers mots ;
- page premium utilisant les composants partagés actuels ;
- métadonnées privées dérivées d'une donnée locale unique, sans date inventée ;
- `Article` et `BreadcrumbList` seulement, sans `FAQPage` ;
- outil local d'observation et de comparaison, avec tests des inconnues et
  valeurs invalides ;
- protocole des sept pannes, cinq sorties et cas contrastés ;
- au moins trois illustrations SVG utiles en 16:9, 4:3 et 1:1 ;
- OG 1200 × 630 cohérente ;
- sources primaires visibles et limites proches ;
- FAQ résiduelle et CTA unique loyal ;
- tests propres au slug couvrant fond, calcul, rendu, accessibilité de base,
  metadata et schémas ;
- manifeste P1 ne contenant que P0, dossier, médias, page et fichiers propres.

La route reste brouillon local explicite, `noindex,nofollow`, absente du hub,
du sitemap et de `llms.txt` jusqu'à l'intégration finale.

## 14. Gates de l'orchestrateur

Avant `GO_PASSE_2`, l'orchestrateur :

- rejoue le manifeste P1 ;
- lit l'intégralité du dossier, du H1, de l'ouverture, des H2, des sorties et de
  la FAQ ;
- ouvre un échantillon de sources et toutes les affirmations à impact élevé ;
- reproduit les calculs et les cas invalides ;
- contrôle que les sept pannes ne sont pas compensées par un score ;
- vérifie trois SVG, la route en navigateur, le calculateur, le clavier de base,
  les thèmes et l'absence de débordement ;
- exécute tests ciblés, TypeScript, ESLint, Prettier, XML, diff et build ;
- confirme qu'aucun fichier partagé n'a changé.

P2 revalide indépendamment sources, tarifs, unités, fonctions, droit, calculs,
angles contradictoires et scénarios dégradés. P3 améliore uniquement la plume,
la clarté et le rythme sans affaiblir P2. P4 recherche les marqueurs IA, les
promesses, contradictions, duplications, défauts SEO, données structurées et
ruptures visuelles. Chaque passe est réalisée par un agent distinct et reçoit
un gate racine explicite avant la suivante.

Après P4, un cinquième agent indépendant audite le snapshot exact. Aucun
commit, push, déploiement, publication ou indexation n'est permis avec un P0 ou
P1 ouvert, un score inférieur à 90/100, un axe critique insuffisant ou une
preuve technique manquante.

## 15. STOP opérationnels

- aucune date `datePublished` ou `dateModified` avant un événement réel ;
- aucune suppression de redirection avant intégration sous mutex ;
- aucune entrée au registre canonique, au hub ou au maillage pendant les passes ;
- aucune comparaison tarifaire non datée ;
- aucune donnée Hagnéré Code volatile non revérifiée ;
- aucune revendication de publication, découverte, indexation ou classement à
  partir d'un build local ou d'un push de branche.
