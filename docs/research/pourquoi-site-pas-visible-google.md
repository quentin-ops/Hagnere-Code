# Dossier de travail — Pourquoi mon site n'apparaît pas sur Google ?

> Dossier documentaire de passe 1 uniquement. Il ne valide ni une page
> publique, ni une publication, ni une position dans Google. Les faits sur
> Google proviennent exclusivement de Google Search Central et de l'aide
> Search Console, consultées le 21 juillet 2026.

Le déroulement et les portes de sortie sont définis dans
[`docs/workflow-maitre-guides-4-passes.md`](../workflow-maitre-guides-4-passes.md).

## Journal des quatre passes

Propriétaire éditorial : **Codex, agent racine du lot du 21 juillet 2026**. La
recherche documentaire a été préparée par un agent distinct puis contre-auditée
en lecture seule avant son gel.

| Passe                        | État                     | Date       | Responsable                         | Snapshot                                     | Blocages |
| ---------------------------- | ------------------------ | ---------- | ----------------------------------- | -------------------------------------------- | -------- |
| 1. Recherche                 | Terminée — porte validée | 2026-07-21 | Codex + contre-auditeur indépendant | `pourquoi-site-pas-visible-google-p1.sha256` | Aucun    |
| 2. Rédaction et intégration  | Terminée — porte validée | 2026-07-21 | Codex                               | `pourquoi-site-pas-visible-google-p2.sha256` | Aucun    |
| 3. Contre-audit indépendant  | Terminée — porte validée | 2026-07-21 | trois relecteurs indépendants       | `pourquoi-site-pas-visible-google-p3.sha256` | Aucun    |
| 4. Plume humaine et contrôle | Terminée — porte validée | 2026-07-21 | Codex                               | `pourquoi-site-pas-visible-google-p4.sha256` | Aucun    |

### Manifeste du snapshot

Les manifestes P1 à P4 figent successivement le dossier documentaire, la page
intégrée, les corrections validées par les contre-audits indépendants, puis le
rendu final contrôlé dans un navigateur réel.

| Fichier contrôlé                                    | SHA-256                 | Passe | Remarque                                           |
| --------------------------------------------------- | ----------------------- | ----- | -------------------------------------------------- |
| `docs/research/pourquoi-site-pas-visible-google.md` | voir manifestes P1 à P4 | P1-P4 | dossier et rapports gelés                          |
| page, outil, tests, registre, image et maillage     | voir manifestes P2 à P4 | P2-P4 | intégration, contre-audit et rendu final contrôlés |

## 1. Fiche d'identité

```text
Slug : pourquoi-site-pas-visible-google
Statut actuel : P4 terminée — porte validée ; publication différée au gel global du lot
Requête principale : pourquoi mon site n'apparaît pas sur Google
Moment du parcours : comprendre puis décider quoi contrôler ou corriger
Lecteur précis : dirigeant de TPE/PME ou indépendant ayant payé un site et ne le retrouvant pas sur une recherche importante
Situation déclenchante : site ou page récemment publié, refonte, disparition apparente, absence sur le nom de l'entreprise ou sur une recherche métier
Décision principale après lecture : identifier la première étape non prouvée entre découverte, exploration, indexation, impressions, clics et demandes, puis agir seulement sur cette étape
Niveau de connaissance au départ : sait que Google et Search Console existent, mais confond souvent mise en ligne, indexation, position et trafic
5 questions indispensables : de quelle URL parle-t-on ; pour quelle recherche ; Google connaît-il et explore-t-il la page ; l'a-t-il indexée ; la montre-t-il et les personnes cliquent-elles
3 objections ou craintes : le site aurait été pénalisé ; il faudrait tout refaire ; attendre ou demander l'indexation suffirait
Action utile sans contact commercial : remplir une fiche URL-requête et noter le prochain contrôle, son responsable et sa date
CTA possible : faire identifier la première étape réellement bloquée sur les pages importantes
Hors périmètre : Google Business Profile et Maps, Google Ads, audit SEO complet, baisse historique de positions, tutoriel technique exhaustif et garantie de classement
Date de la recherche : 2026-07-21
Responsable de la synthèse : Codex ; validation P1 et propriété éditoriale par l'orchestrateur
```

La décision unique tient en une phrase : **avant d'acheter une refonte, des
contenus ou des liens, le dirigeant doit prouver sur une URL et une recherche
précises l'endroit où la visibilité s'arrête.**

### Bon fit et mauvais fit

| Situation                                                                                           | Orientation                                                          |
| --------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| Plusieurs pages importantes sont inconnues, bloquées ou incohérentes                                | bon fit pour un audit ciblé                                          |
| Une refonte ou un changement d'URL précède le problème                                              | bon fit pour un audit de migration et un contrôle des redirections   |
| Search Console signale une action manuelle, un problème de sécurité ou des erreurs serveur étendues | intervention prioritaire et spécialisée                              |
| Une page vient d'être publiée et aucun blocage n'est observé                                        | recontrôler à une date définie avant d'acheter une prestation        |
| Une seule directive `noindex` involontaire est identifiée et le prestataire peut la retirer         | correction ponctuelle, pas audit complet par défaut                  |
| La page reçoit déjà des clics mais aucune demande                                                   | relais vers le diagnostic de conversion, pas diagnostic d'indexation |

## 1 bis. Contrat de langage humain

- **Phrase exacte que le lecteur pourrait dire au téléphone :** « Mon site est
  bien en ligne, mais quand je tape mon activité et ma ville, je ne le vois
  nulle part. Est-ce que Google ne le connaît pas ? »
- **Réponse qu'il attend en une phrase :** « Prenez une page et une recherche
  précises : Search Console permet de voir si Google connaît, ouvre et indexe
  la page, puis s'il la montre et si elle reçoit des clics. »
- **Terme central expliqué sans jargon :** être indexé signifie que Google a
  retenu une version de la page dans son index ; cela ne garantit pas qu'il la
  montrera pour la recherche du dirigeant.
- **Mots ordinaires employés par le lecteur :** site, page, recherche, nom de
  l'entreprise, métier, ville, apparaître, visite, appel, formulaire, demande.
- **Mots d'agence ou de consultant à éviter dans l'ouverture :** SERP, crawl
  budget, autorité de domaine, E-E-A-T, jus de lien, optimisation on-page,
  pénalité algorithmique, couverture.
- **Projet des 150 premiers mots :** BatiClair 73, entreprise fictive, vient de
  mettre son site en ligne. Sa gérante trouve un annuaire et deux concurrents
  lorsqu'elle saisit son activité, mais pas sa page. La réponse courte distingue
  immédiatement une page inconnue, impossible à ouvrir, non indexée, indexée
  mais peu affichée, affichée sans clic ou visitée sans demande. Elle lui demande
  d'écrire une URL et une recherche avant toute correction.
- **Ce que le lecteur saura décider après ces 150 mots :** quel couple
  URL-requête contrôler et pourquoi une recherche manuelle ou `site:` ne suffit
  pas à conclure.
- **H2 relus isolément :** à contrôler en P2.
- **Comparaison comprise à 390 px sans colonne masquée :** à contrôler en P4 ;
  l'artefact doit devenir une suite de cartes sur mobile.
- **FAQ dont la première phrase répond :** à contrôler en P2.
- **CTA formulé comme résultat pour le prospect :** « Identifier la première
  étape réellement bloquée ».

### Test sujet, action, résultat à imposer à P2

| Formulation abstraite à éviter  | Qui agit ?                      | Action concrète                                        | Résultat pour le lecteur                       | Formulation attendue                                                                               |
| ------------------------------- | ------------------------------- | ------------------------------------------------------ | ---------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| « Améliorer la découvrabilité » | propriétaire du site            | relier la page et vérifier le sitemap                  | Google peut trouver son adresse                | « Reliez cette page depuis une page déjà accessible et vérifiez qu'elle figure dans le sitemap. »  |
| « Optimiser l'indexabilité »    | prestataire technique           | retirer le blocage observé                             | Google peut tenter de retenir la page          | « Retirez la directive `noindex` si Search Console la signale sur une page qui doit apparaître. »  |
| « Renforcer la pertinence »     | rédacteur ou responsable métier | répondre à la recherche visée avec des preuves utiles  | la page correspond mieux au besoin du prospect | « Expliquez précisément le service recherché, la zone couverte et les conditions d'intervention. » |
| « Travailler le CTR »           | responsable du contenu          | comparer le titre et l'extrait affichés à la recherche | le résultat devient plus compréhensible        | « Vérifiez que le titre décrit la page que la personne cherche avant de le réécrire. »             |
| « Optimiser la conversion »     | dirigeant et équipe commerciale | compter formulaires, appels et suites données          | les clics peuvent être reliés aux demandes     | « Comptez les demandes et leur traitement avant de conclure que le site ne convertit pas. »        |

### Test de l'ouverture pour P2

- [ ] la situation vécue apparaît avant la méthode de l'agence ;
- [ ] Search Console est défini au premier usage ;
- [ ] aucun glossaire ne retarde la réponse ;
- [ ] aucune métaphore ne devient un système à apprendre ;
- [ ] les réserves n'étouffent pas la réponse courte ;
- [ ] le caractère fictif de BatiClair 73 précède son premier chiffre.

## 2. Cannibalisation

| Page existante ou prévue             | Intention de cette page                                        | Différence du nouveau guide                                                                  | Lien ou arbitrage nécessaire                                           |
| ------------------------------------ | -------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `audit-seo-que-contient-il`          | juger le périmètre, les preuves et le livrable d'un audit      | effectuer ici un autodiagnostic de première ligne sur un symptôme précis                     | lien vers l'audit seulement lorsque plusieurs causes restent possibles |
| `seo-ou-google-ads`                  | choisir où investir un budget d'acquisition                    | comprendre ici pourquoi une visibilité naturelle attendue manque                             | aucun développement budgétaire ; lien éventuel après diagnostic        |
| `pourquoi-mon-site-ne-convertit-pas` | comprendre pourquoi des visites ne deviennent pas des demandes | le nouveau guide s'arrête à la qualification « clics présents, demandes absentes »           | lien direct à l'étape des demandes                                     |
| `refonte-sans-perdre-son-seo`        | protéger les URL et signaux lors d'une migration               | signaler seulement qu'une refonte récente change l'urgence du diagnostic                     | lien contextuel, sans recopier la procédure de migration               |
| `pourquoi-mon-site-est-lent`         | diagnostiquer le chargement et ses effets                      | une erreur de récupération peut être observée, mais la vitesse n'est pas la cause par défaut | ne pas transformer le guide en audit de performance                    |
| `prix-referencement-naturel`         | comparer les budgets d'une prestation SEO                      | aucune grille tarifaire ici                                                                  | lien seulement après justification du besoin d'accompagnement          |
| futur `site-indexe-sans-trafic`      | approfondir une page indexée sans impressions ou trafic        | le présent guide classe le problème et s'arrête après le premier maillon rompu               | ne pas créer le lien avant publication de la future page               |
| futur `positions-google-baissent`    | enquêter sur une visibilité acquise puis perdue                | le présent guide traite l'absence constatée, pas une série historique                        | renvoi futur si une baisse est prouvée                                 |
| `/services/referencement-google`     | présenter l'accompagnement Hagnéré Code                        | le guide doit rester utile sans contact et pouvoir conclure à une correction interne         | CTA unique après l'artefact et les mauvais fits                        |

**Justification d'une URL distincte :** aucune page actuelle ne demande au
dirigeant de partir d'un couple URL-requête et de suivre les preuves de la
découverte jusqu'à la demande commerciale.

## 3. Demande et vocabulaire du lecteur

### Questions et formulations observées

- pourquoi mon site n'apparaît pas sur Google ;
- mon site est en ligne mais introuvable ;
- comment savoir si Google a indexé mon site ;
- pourquoi ma page apparaît avec son URL mais pas sur mon métier ;
- comment faire indexer une nouvelle page ;
- est-ce que Google a pénalisé mon site ;
- combien de temps faut-il attendre ;
- faut-il refaire le site ou demander un audit.

La recherche principale reste une hypothèse éditoriale fondée sur les
formulations visibles, pas sur un volume Keyword Planner ou Search Console
disponible. Aucun volume ni niveau de difficulté n'est publié.

### Observation qualitative datée

Observation web effectuée le **21 juillet 2026** depuis la France sur les trois
formulations « pourquoi mon site n'apparaît pas sur Google », « site pas
visible Google Search Console » et « mon site est indexé mais invisible
Google ». Le panel rendu comprenait notamment :

- [l'aide officielle Google — Pourquoi ma page ne figure-t-elle pas dans les
  résultats de recherche ?](https://support.google.com/webmasters/answer/7474347?hl=fr) ;
- [Communic'Action — Pourquoi mon site est-il invisible sur
  Google ?](https://communicaction.net/guides/pourquoi-site-invisible-google) ;
- [M la Fraise — Pourquoi mon site n'apparaît pas sur
  Google ?](https://www.mlafraise.fr/blog/pourquoi-mon-site-n-apparait-pas-sur-google) ;
- [Enjin — Pourquoi mon site n'apparaît pas sur
  Google ?](https://www.enjin.fr/pourquoi-mon-site-napparait-pas-sur-google/).

Limites de l'observation :

- il s'agit d'un relevé qualitatif, pas d'un suivi de positions ni d'une mesure
  de volume ;
- l'ordre, la composition et les extraits des résultats peuvent varier selon le
  lieu, l'appareil, la langue, l'historique et la date ;
- ce panel ne prouve donc ni une position stable, ni une SERP
  dépersonnalisée ;
- les pages concurrentes servent à comprendre la réponse existante, jamais à
  établir un fait sur Google ;
- aucune position précise ne sera publiée à partir de cette observation.

## 4. Carte concurrentielle

| Page                  | Réponse et angle                                            | Preuves ou artefacts             | Bon point                                  | Manque décisionnel                                                     | Conflit d'intérêt éventuel                         |
| --------------------- | ----------------------------------------------------------- | -------------------------------- | ------------------------------------------ | ---------------------------------------------------------------------- | -------------------------------------------------- |
| Google Search Console | procédure officielle pour page ou site manquant             | inspection d'URL, rapports       | distingue page absente et page mal classée | dense pour un dirigeant, ne suit pas la chaîne jusqu'aux demandes      | aucun conflit commercial direct identifié          |
| Communic'Action       | liste de causes techniques, éditoriales et concurrentielles | questions fréquentes et conseils | couvre plusieurs familles de blocages      | diagnostic peu séquencé avant les recommandations                      | prestations web et SEO proposées sur le site       |
| M la Fraise           | explication accessible des causes fréquentes                | exemples et actions à vérifier   | formulation adaptée aux non-spécialistes   | ne suit pas systématiquement la chaîne jusqu'aux demandes commerciales | prestations de communication proposées sur le site |
| Enjin                 | distinction découverte, indexation et positionnement        | checklist et tableau             | se rapproche d'un diagnostic en étapes     | ne ferme pas la boucle impressions-clics-demandes                      | accompagnement d'agence proposé en conclusion      |

**Angle mort commun :** la plupart des réponses s'arrêtent à une liste de
causes, utilisent `site:` comme verdict rapide et ne relient pas une URL et une
requête aux impressions, aux clics puis aux demandes.

**Valeur originale que le guide apportera :** un artefact manuel, vérifiable et
réutilisable qui indique le premier maillon non prouvé, ce qu'il ne faut pas
conclure et la prochaine action avec un responsable et une date de recontrôle.

## 5. Fiche de preuves Google officielles

| Affirmation utilisable                                                                                                                                                       | Source primaire, URL et passage utile                                                                                                                                                    | Nature       | Périmètre                                     | Consultation | Confiance | Emplacement du lien visible                 | Conséquence lecteur                                                     | Fraîcheur                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | --------------------------------------------- | ------------ | --------- | ------------------------------------------- | ----------------------------------------------------------------------- | -------------------------------------- |
| Google présente trois étapes : exploration, indexation et diffusion ; la découverte d'URL appartient à l'exploration                                                         | [Google Search Central — Fonctionnement de la recherche](https://developers.google.com/search/docs/fundamentals/how-search-works?hl=fr), sections « trois étapes » et « exploration »    | FAIT VÉRIFIÉ | fonctionnement général de Google Search       | 2026-07-21   | élevée    | introduction de l'artefact                  | séparer les preuves sans attribuer six étapes officielles à Google      | page vivante, revalider                |
| Google ne garantit pas l'exploration, l'indexation ou la diffusion d'une page, même conforme aux exigences essentielles                                                      | même source, avertissement précédant les trois étapes                                                                                                                                    | FAIT VÉRIFIÉ | toutes les pages web                          | 2026-07-21   | élevée    | réponse courte et limites                   | aucune promesse de présence ou de délai                                 | page vivante, revalider                |
| La diffusion dépend de la recherche et peut varier selon la langue, le lieu et l'appareil                                                                                    | même source, section « diffusion des résultats de recherche »                                                                                                                            | FAIT VÉRIFIÉ | résultat pour une requête et un contexte      | 2026-07-21   | élevée    | section URL-requête                         | demander une requête précise plutôt que « suis-je visible ? »           | page vivante                           |
| L'inspection d'URL montre la dernière version connue de Google et permet séparément de tester la version en ligne                                                            | [Aide Search Console — Outil d'inspection d'URL](https://support.google.com/webmasters/answer/9012289?hl=fr), sections « état de l'URL indexée » et « test en ligne »                    | FAIT VÉRIFIÉ | URL appartenant à la propriété Search Console | 2026-07-21   | élevée    | étapes exploration et indexation            | distinguer une correction en ligne de l'état encore enregistré          | page vivante                           |
| « Cette URL est sur Google » signifie qu'elle peut apparaître, sans garantir son affichage effectif                                                                          | [Aide Search Console — Inspecter une seule page](https://support.google.com/webmasters/answer/12482179?hl=fr), démarrage rapide et limites                                               | FAIT VÉRIFIÉ | inspection d'une URL                          | 2026-07-21   | élevée    | étape indexation                            | ne jamais traduire ce verdict par « visible sur toutes les recherches » | page vivante                           |
| Si aucune date de dernière exploration n'est indiquée, Google peut ne pas avoir trouvé la page                                                                               | même source, détail de l'indexation de la page                                                                                                                                           | FAIT VÉRIFIÉ | état observé dans l'inspection                | 2026-07-21   | élevée    | étape découverte                            | vérifier d'abord les moyens de découverte                               | page vivante                           |
| La commande `site:` ne renvoie pas nécessairement toutes les URL indexées et une URL indexée n'est pas garantie d'y apparaître                                               | [Google Search Central — Opérateur `site:`](https://developers.google.com/search/docs/monitor-debug/search-operators/all-search-site?hl=fr), section « limites »                         | FAIT VÉRIFIÉ | recherche `site:`                             | 2026-07-21   | élevée    | premier test et encadré d'alerte            | utiliser `site:` comme indice, pas comme verdict                        | mise à jour indiquée en décembre 2025  |
| Un sitemap aide à découvrir des URL mais ne garantit pas leur exploration ou leur indexation                                                                                 | [Google Search Central — Présentation des sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview?hl=fr), introduction et limites                        | FAIT VÉRIFIÉ | découverte d'URL                              | 2026-07-21   | élevée    | étape découverte                            | ne pas confondre soumission et indexation                               | mise à jour indiquée en décembre 2025  |
| Demander une nouvelle exploration peut prendre de quelques jours à quelques semaines ; l'inclusion n'est pas garantie et répéter la demande n'accélère pas l'exploration     | [Google Search Central — Demander une nouvelle exploration](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl?hl=fr), introduction et outil d'inspection | FAIT VÉRIFIÉ | URL gérée par le demandeur                    | 2026-07-21   | élevée    | action après correction                     | demander une fois, dater le recontrôle, ne pas promettre un délai       | mise à jour indiquée en décembre 2025  |
| Le rapport d'indexation ne contient que les URL connues de Google ; une URL inconnue ne figure pas nécessairement dans les totaux                                            | [Aide Search Console — Google a-t-il trouvé toutes vos pages ?](https://support.google.com/webmasters/answer/10264824?hl=fr), compréhension du rapport                                   | FAIT VÉRIFIÉ | propriété Search Console                      | 2026-07-21   | élevée    | vue site entier                             | inspecter séparément chaque URL importante                              | page vivante                           |
| Une page non indexée n'est pas toujours une erreur ; le rapport fournit notamment erreurs serveur, redirections, blocage robots, `noindex`, doublons et canoniques           | [Aide Search Console — Rapport d'indexation des pages](https://support.google.com/webmasters/answer/7440203?hl=fr), raisons d'indexation                                                 | FAIT VÉRIFIÉ | URL connues de Google                         | 2026-07-21   | élevée    | étapes exploration et indexation            | traiter la raison observée, pas toutes les causes possibles             | page vivante                           |
| `robots.txt` n'est pas le mécanisme recommandé pour empêcher une URL d'être indexée ; Google peut parfois l'indexer à partir d'autres informations sans pouvoir lire la page | même source, FAQ et raison « bloquée par robots.txt »                                                                                                                                    | FAIT VÉRIFIÉ | blocage d'exploration                         | 2026-07-21   | élevée    | encadré robots/noindex                      | ne pas présenter robots et `noindex` comme équivalents                  | page vivante                           |
| Pour une page réellement manquante, Google recommande aussi de vérifier les rapports Actions manuelles et Problèmes de sécurité                                              | [Aide Search Console — Pourquoi ma page ne figure-t-elle pas dans les résultats ?](https://support.google.com/webmasters/answer/7474347?hl=fr), procédure de résolution                  | FAIT VÉRIFIÉ | propriété Search Console et page manquante    | 2026-07-21   | élevée    | section des urgences et bons fits           | ne pas invoquer une « pénalité » générique sans état observable         | page vivante                           |
| Le rapport Performances montre clics, impressions, requêtes et pages et peut être filtré                                                                                     | [Aide Search Console — Rapport Performances](https://support.google.com/webmasters/answer/7576553?hl=fr), présentation et configuration                                                  | FAIT VÉRIFIÉ | résultats Google couverts par Search Console  | 2026-07-21   | élevée    | étapes impressions et clics                 | filtrer une page et une recherche, avec une période visible             | page vivante                           |
| Une impression et un clic suivent des règles propres au type de résultat ; les données sont généralement attribuées à l'URL canonique choisie par Google                     | [Aide Search Console — Impressions, position et clics](https://support.google.com/webmasters/answer/7042828?hl=fr), définitions et attribution                                           | FAIT VÉRIFIÉ | métriques Search Console                      | 2026-07-21   | élevée    | explication des mesures                     | une impression n'est ni une visite certaine ni une demande              | page vivante                           |
| Certaines requêtes sont anonymisées ou absentes des lignes principales ; un filtrage par requête retire les requêtes anonymisées                                             | [Aide Search Console — Dimensions et regroupements](https://support.google.com/webmasters/answer/17011259?hl=fr), limites des requêtes                                                   | FAIT VÉRIFIÉ | tableau du rapport Performances               | 2026-07-21   | élevée    | limite de l'artefact                        | écrire « aucune donnée visible », pas « zéro impression certain »       | page vivante, fonctionnalité évolutive |
| Les données les plus récentes peuvent être préliminaires et changer                                                                                                          | [Aide Search Console — À propos des données du rapport Performances](https://support.google.com/webmasters/answer/17011364?hl=fr), fraîcheur des données                                 | FAIT VÉRIFIÉ | jours les plus récents                        | 2026-07-21   | élevée    | choix de période                            | éviter un verdict sur une journée incomplète                            | page vivante                           |
| Google recommande de ne pas se concentrer excessivement sur la position absolue et de suivre surtout impressions et clics                                                    | [Google Search Central — Déboguer une baisse de trafic](https://developers.google.com/search/docs/monitor-debug/debugging-search-traffic-drops?hl=fr), section position moyenne          | FAIT VÉRIFIÉ | analyse de performance, notamment historique  | 2026-07-21   | élevée    | étape impressions                           | une position moyenne n'est pas un rang universel actuel                 | page vivante                           |
| Google recommande du contenu utile, fiable et destiné d'abord aux personnes et indique ne pas avoir de nombre de mots préféré                                                | [Google Search Central — Contenu utile et people-first](https://developers.google.com/search/docs/fundamentals/creating-helpful-content?hl=fr), auto-évaluation et avertissements        | FAIT VÉRIFIÉ | qualité éditoriale générale                   | 2026-07-21   | élevée    | étape diffusion, seulement après indexation | aucun seuil universel de mots ni recette de classement                  | page vivante                           |

### Déductions et recommandations Hagnéré Code

- **DÉDUCTION :** si une URL est indexée et possède des impressions visibles
  pour la requête, le problème n'est plus l'indexation de cette URL.
- **DÉDUCTION :** si des clics existent mais aucune demande n'est comptée, le
  diagnostic doit sortir de Search Console et contrôler la mesure du site et le
  traitement commercial.
- **RECOMMANDATION HAGNÉRÉ CODE :** séparer la découverte de l'exploration dans
  l'artefact, bien que Google les regroupe, parce que les responsables et les
  corrections ne sont pas les mêmes pour un dirigeant.
- **RECOMMANDATION HAGNÉRÉ CODE :** toute valeur absente est nommée « aucune
  donnée visible » ou « inconnue », jamais zéro.
- **RECOMMANDATION HAGNÉRÉ CODE :** dater chaque contrôle et nommer un
  responsable plutôt que répéter une demande d'indexation.

### Contradictions et données à ne pas publier

- La SERP concurrentielle affirme souvent que zéro résultat `site:` prouve une
  non-indexation ; la documentation officielle dit que l'opérateur n'est pas
  exhaustif.
- Des concurrents promettent une indexation en 24 à 72 heures ; Google donne
  seulement un ordre de grandeur variable de quelques jours à quelques
  semaines et ne garantit pas l'inclusion.
- Des concurrents emploient « forcer l'indexation » ; la documentation parle
  d'une demande d'exploration sans garantie et précise que la répétition
  n'accélère pas le traitement.
- Certains articles présentent le sitemap comme une accélération certaine ;
  Google le décrit comme une aide à la découverte, sans garantie de crawl ni
  d'indexation.
- Aucun volume de recherche, taux moyen, position moyenne de marché, délai SEO,
  nombre de mots ou probabilité de « pénalité » n'a été établi. Ne rien en
  publier.
- L'absence d'une requête dans le tableau Search Console ne prouve pas zéro
  impression en raison de l'anonymisation et de la troncature.

### Formulations bannies

- « Aucun résultat avec `site:` signifie que votre site n'est pas indexé. »
- « Google ne connaît pas votre site puisque vous ne le trouvez pas. »
- « Forcez l'indexation. »
- « Votre page sera indexée sous 24, 48 ou 72 heures. »
- « Soumettre le sitemap indexe toutes les pages. »
- « Cette URL est sur Google, donc elle est visible. »
- « Search Console montre toutes les recherches. »
- « Votre position Google est 12 » sans période, requête, contexte et limite.
- « Google vous a pénalisé » sans élément vérifiable.
- « Le JavaScript est invisible pour Google » comme règle générale.
- « `robots.txt` empêche toujours une URL d'être indexée. »
- « Il faut au moins 500, 800 ou 2 000 mots. »
- « Votre site manque d'autorité » sans preuve ni action définie.
- « Refaire le site réglera le référencement. »
- « Plus de clics signifie plus de clients. »
- « Google préfère les sites qui publient souvent » comme règle générale.
- « Le SEO prend toujours trois ou six mois. »

## 5 bis. Artefact URL-requête

L'artefact est une fiche manuelle intégrée à la page. Il ne demande ni OAuth,
ni accès Search Console, ni adresse e-mail. Le lecteur recopie seulement les
informations qu'il voit dans ses propres outils.

### Entrées

```text
Date du contrôle :
Période observée :
URL complète :
Requête exacte :
Recherche de marque ou recherche métier :
Pays et appareil si pertinents :
Responsable du contrôle :
```

### Chaîne de preuve

| Étape       | Valeur à recopier                                                                                                    | Question humaine                                                              | État autorisé                                                                            | Première action possible                                                                               |
| ----------- | -------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| Découverte  | inspection d'URL : adresse reconnue ou non et rubrique « Découverte » lorsqu'elle est disponible                     | Google connaît-il cette adresse ?                                             | prouvé / non prouvé / inconnu                                                            | si elle n'est pas connue, relier la page depuis une page utile et vérifier sa présence dans le sitemap |
| Exploration | dernière exploration, récupération, code HTTP, exploration autorisée                                                 | Google a-t-il pu ouvrir la page ?                                             | réussie / échouée / inconnue                                                             | corriger uniquement l'erreur, la redirection ou le blocage observé                                     |
| Indexation  | état, `noindex`, canonique déclaré et canonique choisi par Google                                                    | Google a-t-il retenu cette version ?                                          | indexée / non indexée / inconnue                                                         | traiter la raison affichée avant une demande unique                                                    |
| Impressions | nombre ou « aucune donnée visible » sur une période                                                                  | la page est-elle proposée pour cette recherche ?                              | valeur / aucune donnée visible / inconnue                                                | vérifier filtre, période, requête et page associée                                                     |
| Clics       | nombre et CTR calculé sur la même paire                                                                              | les personnes choisissent-elles ce résultat ?                                 | valeur / aucune donnée visible / inconnue                                                | examiner titre, extrait, position et correspondance à la recherche                                     |
| Demandes    | formulaires, appels, rendez-vous ou ventes, avec leur source et leur portée d'attribution lorsqu'elles sont prouvées | les clics de cette paire URL-requête peuvent-ils être reliés à des demandes ? | valeur attribuée / demandes observées mais attribution non prouvée / non suivi / inconnu | fiabiliser d'abord la mesure et l'attribution, puis seulement diagnostiquer la conversion              |

### Règles de décision

1. Une étape antérieure inconnue produit le verdict **diagnostic incomplet**.
2. Une exploration échouée bloque toute conclusion sur la qualité éditoriale.
3. Une page non indexée est traitée selon la raison observée ; la demande
   d'indexation vient seulement après correction ou vérification.
4. Une page indexée avec des impressions visibles n'a pas un problème
   d'indexation pour cette paire URL-requête.
5. Aucune ligne de requête visible ne devient jamais automatiquement « zéro ».
6. Des impressions sans clic conduisent à examiner le résultat présenté, la
   position et l'intention, pas à commander automatiquement une refonte.
7. Des clics visibles sans demande attribuable déplacent d'abord le diagnostic
   vers la mesure et l'attribution. Le site et le suivi commercial ne sont mis
   en cause qu'après avoir vérifié que les demandes pouvaient être reliées au
   même parcours.

### Sortie générée

```text
Première étape non prouvée :
Preuve recopiée :
Ce qu'elle permet de conclure :
Ce qu'elle ne permet pas de conclure :
Action suivante :
Responsable :
Date de recontrôle :
Ce qu'il ne faut pas refaire pour l'instant :
```

### Exigences de produit pour P2/P4

- suite de cartes empilées à 390 px, pas un tableau à six colonnes ;
- libellés et aide compréhensibles sans jargon ;
- états « inconnu » et « aucune donnée visible » impossibles à confondre avec
  zéro ;
- boutons éventuels : « Copier mon diagnostic », « Imprimer » et
  « Réinitialiser » ;
- aucune donnée envoyée au serveur ; si un stockage local est ajouté, il doit
  être annoncé et testable ;
- navigation clavier, focus visible et résultat annoncé aux technologies
  d'assistance ;
- aucune note globale ni verdict automatique présenté comme celui de Google.

## 5 ter. Exemple illustratif fictif — BatiClair 73

> **EXEMPLE ILLUSTRATIF FICTIF.** BatiClair 73 n'est pas présenté comme un
> client. Le domaine `.example`, les pages, les dates et toutes les valeurs
> ci-dessous sont inventés pour expliquer la méthode. Ils ne constituent ni une
> preuve de résultat, ni un benchmark, ni un objectif.

BatiClair 73 est une entreprise fictive de rénovation en Savoie. Sa gérante dit
que « le site n'apparaît pas » après avoir recherché son nom puis « isolation
extérieure Chambéry ». Elle remplit plusieurs lignes parce qu'un site entier ne
possède pas un état unique pour toutes ses pages et toutes les recherches.

| URL et requête fictives                                                       | Preuves fictives recopiées                                                                                                                                            | Calcul                                                                                                                          | Qualification et décision                                                                                                                                                                                    |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `https://baticlair73.example/` + `BatiClair 73`                               | URL indexée ; 112 impressions et 29 clics sur 28 jours ; 2 demandes qualifiées observées séparément, sans attribution prouvée à ces clics                             | CTR = `29 / 112 × 100 = 25,892… %`, soit **25,9 %** ; aucun taux clic-demande n'est calculable sans une attribution commune     | la page apparaît sur la marque ; le CTR décrit seulement ce scénario et ne prouve pas une bonne performance universelle ; les 2 demandes ne peuvent pas être attribuées aux 29 clics avec ces seules données |
| `/isolation-exterieure-chambery` + `isolation extérieure Chambéry`            | exploration réussie en HTTP 200 ; canonique déclaré sur la page elle-même ; Google choisit fictivement la page d'accueil comme canonique ; URL non indexée séparément | aucun CTR : impressions et clics sont **inconnus**, pas zéro                                                                    | contrôler doublon, contenu et canonique avant de parler de position ou de clics                                                                                                                              |
| `/renovation-energetique-savoie` + `entreprise rénovation énergétique Savoie` | URL indexée ; 54 impressions et 1 clic visible sur 28 jours ; aucune demande attribuée                                                                                | CTR = `1 / 54 × 100 = 1,851… %`, soit **1,9 %** ; le taux de demande n'est pas interprétable avec un clic et un suivi incertain | l'indexation n'est plus le premier problème ; examiner le résultat affiché et la correspondance à la recherche, sans conclure sur la conversion                                                              |
| `/aides-renovation-chambery` + `aides rénovation Chambéry`                    | aucune date de dernière exploration et aucune donnée de performance visible                                                                                           | aucun calcul valide                                                                                                             | découverte non prouvée ; vérifier liens et sitemap, puis recontrôler sans promettre d'indexation                                                                                                             |

### Contrôles inverses et limites des calculs

- `112 × 25,9 % = 29,008`, cohérent avec 29 clics après arrondi ;
- `54 × 1,9 % = 1,026`, cohérent avec 1 clic après arrondi ;
- les impressions et clics proviennent fictivement de Search Console, les
  demandes d'un registre commercial séparé ; aucune attribution commune ne
  permet ici de diviser les demandes par les clics ;
- 28 jours est une hypothèse de l'exemple, pas une durée recommandée ;
- aucun test statistique, causalité, gain, coût, délai ou retour sur
  investissement n'est déduit de ces faibles volumes.

### Décision finale du cas

BatiClair 73 ne commande pas une refonte générale sur ces seules données. La
gérante fait d'abord examiner le canonique de la page isolation, vérifie les
liens vers la page aides, compare le résultat de la page rénovation à sa
requête et organise le comptage des appels et formulaires. Cette décision est
une recommandation pédagogique Hagnéré Code, pas une consigne de Google.

## 6. Empreinte éditoriale à ne pas reproduire

| Guide voisin                         | Type d'ouverture                | Progression                                  | Dispositif récurrent                    | Type d'exemple                          | Place du CTA                | Type de conclusion                        |
| ------------------------------------ | ------------------------------- | -------------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------- | ----------------------------------------- |
| `audit-seo-que-contient-il`          | rapport long mais inexploitable | reconstruire le contrat de preuve d'un audit | fiche de réception d'une recommandation | rapport fictif                          | après les niveaux d'audit   | accepter, préciser ou refuser le livrable |
| `seo-ou-google-ads`                  | arbitrage d'un budget limité    | objectifs, choix puis plan de 90 jours       | cartes de décision                      | trois entreprises                       | après la comparaison        | choisir SEO, Ads, les deux ou attendre    |
| `pourquoi-mon-site-ne-convertit-pas` | contacts mal comptés            | éliminer mesure, trafic, page et suivi       | arbre de diagnostic                     | entreprise fictive suivie dans le temps | après les correctifs        | ne pas refaire le site sans preuve        |
| `refonte-sans-perdre-son-seo`        | risque d'une mise en ligne      | avant, lancement et surveillance             | cinq règles et checklist                | scénario de migration                   | après le plan de protection | autoriser ou reporter la refonte          |

Choix du nouveau guide :

```text
Tension ou question motrice : le dirigeant dit que « le site » est invisible alors que chaque URL et chaque recherche peuvent se trouver à une étape différente
Type d'ouverture retenu et pourquoi : recherche concrète de BatiClair 73 ; elle fait apparaître immédiatement l'écart entre site en ligne et page visible pour une requête
Progression retenue et pourquoi : une preuve après l'autre, de l'URL connue jusqu'à la demande commerciale ; chaque étape change le responsable et l'action
Artefact signature : fiche URL-requête avec états prouvé, non prouvé, inconnu et aucune donnée visible
Rythme/registre de voix : questions courtes du dirigeant, réponse, preuve, limite et décision ; pas de catalogue de jargon
Place naturelle du CTA : après que le lecteur a rempli l'artefact et vu les cas où un audit est inutile
Forme de conclusion : première étape bloquée, responsable, action et date de recontrôle
Au moins trois différences avec les guides voisins : ouverture par une recherche et non un rapport, un budget, un compteur ou une migration ; progression séquentielle de preuve plutôt qu'une liste de modules ; plusieurs lignes URL-requête dans un même cas ; conclusion datée sans plan générique de 90 jours ; CTA conditionné à l'impossibilité de fermer le diagnostic seul
```

## 7. Plan annoté

| Section provisoire                                   | Question résolue                                           | Preuve ou exemple                                          | Conséquence ou décision                          | Format choisi             |
| ---------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ------------------------------------------------ | ------------------------- |
| J'ai payé un site : pourquoi personne ne le trouve ? | le site en ligne devrait-il être automatiquement visible ? | ouverture BatiClair 73 et fonctionnement général de Search | ne pas refaire le site avant le diagnostic       | prose courte              |
| De quelle page et de quelle recherche parlons-nous ? | pourquoi « mon site » est-il trop vague ?                  | deux lignes marque/métier de BatiClair                     | choisir une URL et une requête                   | mini-formulaire visible   |
| Où la visibilité s'arrête-t-elle ?                   | quelles étapes faut-il distinguer ?                        | chaîne complète et attribution Google/Hagnéré Code         | commencer à la première preuve manquante         | cartes de parcours        |
| Google connaît-il l'adresse ?                        | la page a-t-elle été découverte ?                          | inspection, liens et sitemap avec leurs limites            | corriger découverte ou dater le recontrôle       | prose + carte artefact    |
| Google peut-il ouvrir la page ?                      | l'exploration réussit-elle ?                               | récupération, HTTP, robots et rendu observés               | corriger l'obstacle technique exact              | carte diagnostic          |
| Google a-t-il retenu cette version ?                 | la page est-elle indexée et canonique ?                    | statut, `noindex`, canonique déclaré et choisi             | traiter la raison avant une demande              | carte + exemple isolation |
| La page est-elle proposée pour cette recherche ?     | existe-t-il des impressions visibles ?                     | rapport Performances filtré page et requête                | passer de l'indexation à la pertinence/diffusion | carte + limite données    |
| Quand elle apparaît, est-elle choisie ?              | les impressions deviennent-elles des clics ?               | définitions Search Console et calcul fictif                | examiner titre, extrait, position et intention   | exemple chiffré           |
| Les visites deviennent-elles des demandes ?          | où s'arrête Search Console ?                               | registre commercial fictif BatiClair                       | mesurer puis relayer vers le guide conversion    | prose + lien interne      |
| Que doit faire BatiClair 73 maintenant ?             | faut-il refondre, corriger ou attendre ?                   | quatre lignes du cas et décisions distinctes               | trois premières actions et dates à renseigner    | récapitulatif sans score  |
| Quand un audit devient-il utile ?                    | quand l'aide externe est-elle proportionnée ?              | bons et mauvais fits                                       | audit ciblé, correction ponctuelle ou attente    | cartes décisionnelles     |
| Sources, limites et questions restantes              | que peut-on honnêtement conclure ?                         | sources officielles proches des faits                      | conserver un verdict sans garantie               | sources + FAQ résiduelle  |

### FAQ résiduelle pressentie

- Combien de temps attendre après une demande d'indexation ?
- Une URL indiquée « sur Google » peut-elle rester introuvable sur mon métier ?
- Pourquoi `site:mondomaine.fr` ne montre-t-il pas toutes mes pages ?
- Faut-il demander l'indexation de toutes les pages une par une ?
- Search Console mesure-t-elle les appels et les formulaires ?

Chaque réponse doit commencer par oui, non ou une limite claire. La FAQ ne doit
pas répéter l'artefact.

## 8. Ressource et conversion

```text
Une ressource est-elle naturellement nécessaire ? oui, sous forme d'outil intégré et imprimable ; pas de téléchargement séparé obligatoire
Problème qu'elle résout après la lecture : transformer « mon site est invisible » en diagnostic transmissible à un prestataire
Résultat autonome produit : première étape non prouvée, preuve, limite, action, responsable et date de recontrôle
Format éditable et format de consultation : formulaire client local dans la page, sortie copiable et impression navigateur
Rubriques, champs ou matrices réellement livrés : identité URL-requête, six étapes, preuves, limites, action et suivi
Exemple rempli : BatiClair 73, explicitement fictif
Conclusion « ne pas investir » possible : oui, lorsqu'une correction ponctuelle ou une période d'observation suffit
Sources, hypothèses et limites visibles : liens Google près des faits, données fictives qualifiées, absence de volume et de garantie
Données saisies et destination de ces données : aucune transmission ; valeurs conservées dans la page, et localement seulement si P2 le justifie et l'annonce
Processus de génération reproductible : logique déterministe documentée dans le composant et tests unitaires des états
Journal de QA : à créer en P2/P4 pour clavier, mobile, impression, copie, reset, absence de réseau et thème
Limites connues et niveau de revue humaine : diagnostic pédagogique, pas accès automatique à Search Console ni avis personnalisé
Mode de maintenance : revalidation des libellés Search Console et des sources lors de toute modification substantielle
Test du fichier ou outil : cas découverte inconnue, exploration échouée, non-indexation, impressions absentes, clics absents, demandes non suivies et parcours complet
Bon fit Hagnéré Code : plusieurs URL, cause transversale, migration récente, données contradictoires ou correction nécessitant plusieurs métiers
Mauvais fit : blocage unique déjà identifié, page trop récente sans anomalie, ou problème limité à la conversion après clic
Action non commerciale : copier le diagnostic et l'envoyer au prestataire actuel
CTA principal et résultat après clic : « Identifier la première étape réellement bloquée » vers `/services/referencement-google`, avec cadrage du périmètre et des preuves à réunir
```

### Maillage prévu

- vers `audit-seo-que-contient-il` lorsque le premier contrôle ne suffit pas ;
- vers `refonte-sans-perdre-son-seo` si le problème suit une migration ;
- vers `pourquoi-mon-site-ne-convertit-pas` lorsque clics mais pas demandes ;
- vers `seo-ou-google-ads` seulement si le lecteur doit ensuite arbitrer son
  acquisition ;
- vers `/services/referencement-google` pour le CTA unique ;
- ne pas créer de lien vers les futurs guides avant leur publication ;
- prévoir au moins un lien entrant contextuel depuis le guide d'audit SEO ou la
  page service lors de P2, sous la responsabilité de l'éditeur unique.

## 8 bis. P0 et P1 à contrôler avant la porte suivante

### P0 — bloquants

- périmètre limité au site dans les résultats naturels, distinct de Google
  Business Profile, Maps et Ads ;
- URL exacte et requête exacte exigées avant toute conclusion ;
- `site:` qualifié d'indice non exhaustif ;
- version indexée et test en ligne de l'inspection distingués ;
- découverte, exploration, indexation et diffusion non confondues ;
- aucune garantie de délai, d'indexation, de position, de trafic ou de vente ;
- requête absente du tableau nommée « aucune donnée visible » ;
- demandes identifiées comme donnée hors Search Console ;
- aucune pénalité affirmée sans preuve ;
- BatiClair 73 et chaque chiffre étiquetés fictifs avant usage ;
- aucune publication de volume, seuil de mots, taux moyen ou durée SEO.

### P1 — manques importants à éviter

- BatiClair 73 doit traverser le guide, pas devenir une annexe ;
- l'artefact doit être utilisable à 390 px sans colonne essentielle masquée ;
- recherche de marque et recherche métier doivent être distinguées ;
- le canonique choisi par Google doit être expliqué simplement ;
- chaque état doit dire ce que l'on sait et ce que l'on ignore ;
- une date de recontrôle remplace « soyez patient » ;
- les liens internes doivent suivre le maillon cassé ;
- le CTA vient après une action autonome complète et accepte l'option moins
  chère ou l'attente ;
- l'observation web du 21 juillet 2026 reste qualitative : aucune position ni
  aucun volume ne doit en être déduit.

## 9. Rapports de sortie des quatre passes

### Rapport P1 — Recherche

```text
PASSE 1 TERMINÉE — PASS APRÈS CORRECTIONS
Slug : pourquoi-site-pas-visible-google
Lecteur et phrase réelle : dirigeant de TPE/PME — « Mon site est en ligne, mais quand je tape mon activité et ma ville, je ne le vois nulle part. »
Décision : identifier sur une URL et une requête précises la première étape non prouvée, puis corriger, attendre ou demander un audit ciblé
Angle et forme dominante : diagnostic séquentiel fondé sur les preuves Search Console, avec artefact manuel URL-requête
Pages proches et différence : audit SEO = réception d'un livrable ; conversion = après les clics ; refonte = migration ; ici = premier maillon cassé
Sources décisives : fonctionnement de Search, inspection d'URL, opérateur site:, sitemaps, demande de recrawl, indexation des pages et rapport Performances
Incertitudes exclues : volumes, positions exactes de SERP, délais garantis, taux moyens, nombre de mots, pénalité supposée et résultat commercial
Action autonome et CTA possible : remplir/copier le diagnostic ; CTA conditionnel vers le service de référencement pour identifier le premier blocage
Plan : situation BatiClair, paire URL-requête, six étapes, quatre lignes fictives, décisions, bons/mauvais fits, sources et FAQ résiduelle
Contre-audit initial : 0 P0, 2 P1 ; preuve de découverte et ratio clic-demande corrigés
Contre-audit différentiel : attribution des demandes ajoutée avant toute conclusion de conversion ; 0 P0, 0 P1
Snapshot : docs/research/manifests/pourquoi-site-pas-visible-google-p1.sha256
```

### Rapport P2 — Rédaction et intégration

```text
PASSE 2 TERMINÉE — PASS AUTEUR
Page : /guides/pourquoi-site-pas-visible-google
Ouverture : le dirigeant part de sa recherche métier réelle et sait immédiatement qu'il va décider entre corriger, mesurer, attendre ou auditer
Architecture : huit sections éditoriales ; paire URL-recherche, six étapes, outil, lecture des preuves, cas fictif, décisions, audit et limites
Artefact : formulaire local en six cartes, avec identité, preuve recopiée, premier point non fermé, limite, action, copie, impression et remise à zéro
Protection méthodologique : sitemap séparé de la preuve de découverte ; demandes observées séparées des demandes attribuées ; aucune absence de ligne convertie en zéro
Exemple : BatiClair 73 annoncé fictif avant les valeurs ; CTR 29/112 = 25,9 % et 1/54 = 1,9 % ; aucun taux clic-demande sans attribution commune
Sources visibles : documentation Google officielle placée près des affirmations sur le fonctionnement de Search, l'inspection d'URL, site:, les sitemaps, les requêtes masquées et le recrawl
Conversion : une action autonome complète avant un unique GuideInlineCTA ; l'attente, la correction interne et l'absence de refonte restent des issues acceptées
Maillage : quatre guides voisins, un lien entrant depuis la page service SEO et une carte future dans la collection Référencement naturel
Profondeur : 2 824 mots visibles dans l'article rendu, huit H2 éditoriaux, huit FAQ et quatorze minutes de lecture arrondies
Contrôles : Prettier, ESLint, TypeScript, git diff --check, 8/8 tests de l'outil, 184/184 tests SEO et build Next.js de 112 routes
Métadonnées locales : canonical de production, noindex/nofollow sous editorialStatus, Article et BreadcrumbList uniquement
Verdict : le contre-audit P3 indépendant peut commencer sur le snapshot P2
Snapshot : docs/research/manifests/pourquoi-site-pas-visible-google-p2.sha256
```

### Rapport P3 — Contre-audit indépendant

```text
PASSE 3 TERMINÉE — PASS APRÈS CORRECTIONS
Relecteurs : audit éditorial complet, audit technique et lecture dirigeant réalisés par trois agents distincts, tous en lecture seule
Verdict initial consolidé : 0 P0 ; blocages sur l'accès à Search Console, l'export anglais, la FAQ répétitive, le dossier obsolète, zéro clic, le jargon et l'impression
Accès : Search Console est défini comme l'outil gratuit de Google ; propriété, autorisation, ajout d'utilisateur et alternative sans partage de mot de passe sont expliqués
Langage : réponse normale du serveur (HTTP 200), taux de clics (CTR), adresse principale (canonique) et instruction noindex sont traduits au premier emploi utile
Outil : zéro clic possède un état distinct qui arrête le diagnostic ; les états français sont partagés entre interface et copie ; les espaces seuls deviennent « non renseignée »
Impression : une règle d'impression masque le reste du guide et ne conserve que la fiche ; aucune saisie n'est transmise ou enregistrée
FAQ : les huit répétitions du snapshot P2 ont été remplacées par quatre questions strictement résiduelles
Sources et conversion : la source Google est adjacente à la non-garantie finale ; la promesse de réponse au jour ouvré suivant a été retirée
Tests : 18 cas ciblés couvrent cinq états négatifs, zéro clic, preuves et identité vides, copie réussie ou refusée, impression et réinitialisation complète
Verdicts finaux indépendants : trois PASS, chacun à 0 P0 et 0 P1
Verdict : la P4 peut commencer sur le snapshot P3
Snapshot : docs/research/manifests/pourquoi-site-pas-visible-google-p3.sha256
```

### Rapport P4 — Plume humaine et contrôle final

```text
PASSE 4 TERMINÉE — PASS

Plume finale : les expressions techniques sont traduites au premier emploi ; les phrases de décision restent reliées à une URL, une recherche, une preuve, un responsable et une date. Aucune promesse de position, de délai Google ou de résultat commercial n'a été ajoutée.
Retour P3 : oui. Toutes les réserves bloquantes sur l'accès à Search Console, le jargon, l'état zéro clic, l'export, l'impression et la FAQ ont été corrigées puis validées par trois contre-audits indépendants à 0 P0 et 0 P1.
Rendu réel : build de production inspecté aux largeurs CSS exactes 320, 390, 768, 1 024 et 1 440 px, sans débordement horizontal. Le premier écran, l'outil long, les résultats, les actions et le CTA final restent lisibles sur mobile et ordinateur.
Interactions : une FAQ a été ouverte par clic ; le premier champ de l'outil reçoit bien le focus. Les six états ont été remplis dans le navigateur, le diagnostic s'arrête correctement à zéro clic, la copie utilise les libellés français et la réinitialisation vide toute la fiche.
Impression : le média print masque le guide, la navigation et les boutons pour ne conserver que la fiche diagnostique.
Données structurées : Article et BreadcrumbList uniquement ; aucun FAQPage, HowTo, faux avis, faux prix ou résultat garanti.
Métadonnées : titre, description, canonique de production et état local noindex, nofollow conformes. L'image sociale répond 200 en PNG, mesure 1 200 × 630 px et pèse 147 740 octets.
Profondeur : 3 165 mots visibles selon le vérificateur d'artefact, huit H2 éditoriaux, quatre FAQ strictement résiduelles et temps de lecture corrigé à 16 minutes.
Technique : 18/18 tests ciblés, ESLint, TypeScript, 184/184 tests SEO, build de production et vérificateur d'artefact validés.
Autorisation : le guide reste sous porte éditoriale jusqu'au gel global des dix guides ; il n'est pas présenté comme publié ou indexé à ce stade.
Snapshot : docs/research/manifests/pourquoi-site-pas-visible-google-p4.sha256
```

## 10. Revue finale

### Scorecard justifiée

Scorecard P4 après contre-audits, contrôle visuel réel et build final.

| Axe         | Note 0-2 | Preuve dans la page                                      | Correction éventuelle |
| ----------- | -------: | -------------------------------------------------------- | --------------------- |
| Intention   |        2 | une URL et une recherche précises                        | aucune                |
| Décision    |        2 | corriger, mesurer, attendre, reporter ou auditer         | aucune                |
| Pédagogie   |        2 | Search Console et chaque terme technique expliqués       | aucune                |
| Profondeur  |        2 | six états, limites, outil et quatre cas BatiClair        | aucune                |
| Preuve      |        2 | sources Google adjacentes et attribution bornée          | aucune                |
| Comparaison |        2 | quatre lignes du même site conduisent à quatre décisions | aucune                |
| Originalité |        2 | diagnostic local copiable et imprimable                  | aucune                |
| Style       |        2 | lecture dirigeant indépendante sans P1 résiduel          | aucune                |
| Conversion  |        2 | action autonome puis CTA unique sans issue imposée       | aucune                |
| SEO/produit |        2 | rendu multi-largeur, image sociale et artefact contrôlés | aucune                |

### Test lecteur non technique

```text
Test réalisé par une personne réelle : non
Profil simulé : dirigeant de PME ayant un site en ligne mais aucun vocabulaire SEO
Ce qu'il doit comprendre : le site n'a pas un état unique ; il faut suivre une page et une recherche jusqu'au premier point non prouvé
Décision possible : corriger, mesurer, attendre, reporter une refonte ou demander un audit ciblé
Endroit à surveiller : l'outil long en six cartes, contrôlé sur téléphone et ordinateur
Passage crédible ou trop commercial : CTA jugé crédible après une action autonome complète
Termes bloquants détectés puis corrigés : Search Console, HTTP 200, CTR, canonique et noindex
Questions encore sans réponse : aucune réserve P0 ou P1 ; les performances Google réelles restent à mesurer après publication
Corrections appliquées : accès, langage, FAQ, zéro clic, copie française, impression, temps de lecture et couverture de tests
```

### Contre-audit indépendant

```text
Auteur du contre-audit P1 : agent guide_architecture
Auteurs du contre-audit P3 : audit_guide3, final_technical_audit et final_editorial_audit
Indépendants de la rédaction : oui ; lecture seule
Réserves P1 : découverte, ratio sans attribution et état des demandes
Réserves P3 : accès, jargon, FAQ, export, zéro clic, impression, tests et dossier obsolète
Corrections : toutes appliquées puis relues différentiellement
Verdicts finaux : trois PASS, 0 P0 et 0 P1
Statut maximal réellement atteint : P4 terminée — porte validée ; publication différée au gel global
```

### Porte de sortie P1

- [x] brief complet et décision unique ;
- [x] URL distincte justifiée ;
- [x] recherche web actuelle et datée, avec limites explicites ;
- [x] fiche de preuves Google officielles exploitable ;
- [x] faits, déductions, recommandations et exemple fictif séparés ;
- [x] contradictions principales visibles ;
- [x] plan annoté distinct des voisins ;
- [x] action autonome, bon fit et mauvais fit définis ;
- [x] dossier suffisant pour qu'un autre rédacteur n'invente pas les faits ;
- [x] observation web réelle datée, sans revendication de position ni de volume ;
- [x] contre-audit documentaire indépendant ;
- [x] snapshot et manifeste P1 consignés ;
- [x] `Passe 1 = Terminée — porte validée`.

Verdict actuel : **PASS P4 — scorecard 20/20, trois contre-audits finaux à
0 P0 et 0 P1, rendu réel et artefact de production validés.**
