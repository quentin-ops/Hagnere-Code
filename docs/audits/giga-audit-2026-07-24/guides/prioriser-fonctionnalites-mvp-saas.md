# Audit approfondi — `prioriser-fonctionnalites-mvp-saas`

Date : 24 juillet 2026

Auditeur concurrentiel : Codex — cellule `corpus_inventory`

Snapshot du guide : `912f2022f125cc7e3c9ef6a69d420107ec038a35a4c8223d10c665e1e321bade`

Périmètre : audit éditorial, décisionnel, concurrentiel et factuel. Aucune
réécriture de la page publique n’a été effectuée dans ce dossier.

## 1. Verdict exécutif

```text
Lecteur exact : fondateur de SaaS B2B, dirigeant ou responsable produit disposant d'un produit déjà utilisable et d'un prochain lot trop petit pour toutes les demandes.
Question réelle : que faut-il corriger, tester, acheter, développer ou reporter maintenant, et comment défendre ce choix face aux clients, au commerce et à l'équipe ?
Décision attendue : composer un lot réalisable, relié à un objectif et à des preuves, puis documenter les exclusions et leur condition de réexamen.
Réponse actuelle en une phrase : séparez pannes, obligations, contrats et dépendances, puis qualifiez chaque demande avec huit lignes et choisissez construire, tester, corriger ou reporter.
Défaut qui coûte le plus de valeur : le guide explique RICE sans calculer un seul classement complet, sans sensibilité et sans allouer une capacité réelle.
Niveau actuel : D
Priorité : haute
Statut : audité / à réécrire
```

Le guide a une très bonne intuition : **une demande de fonctionnalité n’est pas
encore un problème prouvé**, et un score ne doit jamais faire perdre une panne,
une obligation applicable ou une dépendance. Cette doctrine est responsable et
plus utile qu’un classement mécanique.

Mais la page reste à mi-chemin entre une méthode de qualification et une vraie
méthode d’arbitrage. Elle nomme cinq demandes fictives sans leur attribuer de
portée, d’impact, de confiance, d’effort, de coût du retard ou de coût
d’exploitation. Le lecteur ne voit ni classement avant/après correction des
hypothèses, ni capacité disponible, ni compromis final. Les concurrents les
plus complets comparent jusqu’à neuf cadres ; le guide Hagnéré Code peut faire
mieux en refusant le catalogue et en montrant **le même backlog résolu de cinq
façons**, avec les limites de chaque outil.

### Score avant correction

| Axe | Note /10 | Preuve localisable | Manque décisif |
| --- | ---: | --- | --- |
| Intention | 8 | Le hero et l’ouverture parlent directement des demandes contradictoires et d’un budget limité (`page.tsx:291-296`, `364-380`). | La réponse ne dit pas encore quel filtre utiliser dans quel ordre. |
| Décision | 7 | Quatre issues claires sont introduites : construire, tester, corriger, reporter (`page.tsx:395-419`). | « Acheter/réutiliser » n’apparaît comme option qu’en fin de guide (`page.tsx:852-883`) et aucune capacité n’est allouée. |
| Pédagogie | 8 | Fiche en huit lignes, demande complète et procès-verbal rendent la démarche lisible (`page.tsx:127-160`, `239-269`, `768-803`). | Pas de tableau chiffré que le lecteur puisse refaire ni d’exemple où le score se trompe. |
| Profondeur | 5 | Pannes, obligations, contrats, dépendances, tests et RICE sont couverts. | Stratégie produit, segmentation, coût du retard, coût d’exploitation, dette, accessibilité, sécurité, achat/réutilisation et capacité du lot restent dispersés ou superficiels. |
| Preuve | 6 | GOV.UK, Home Office, Intercom, Strategyzer et NIST sont cités (`page.tsx:939-1003`). | Les sources ne sont pas transformées en protocole appliqué ; aucune donnée de backlog ou résultat mesuré n’est visible. |
| Comparaison | 4 | RICE et MoSCoW sont nommés (`page.tsx:660-711`). | Pas de comparaison RICE/MoSCoW/WSJF/Kano/story mapping sur les mêmes demandes. |
| Originalité | 8 | La séparation « construire / tester / corriger / reporter » et la fiche de huit lignes sont mémorables. | Il manque un outil propriétaire téléchargeable et un cas chiffré qui rende la méthode identifiable. |
| Style | 8 | Ton humain, prudent et professionnel ; le guide ne transforme pas une intuition en certitude. | Quelques sections restent longues et conceptuelles faute d’un cas économique qui relance l’attention. |
| Conversion | 6 | CTA honnête demandant jusqu’à cinq demandes et autorisant standard/report (`page.tsx:903-937`). | Le livrable, le temps de décision, l’utilisation du budget et le cas où Hagnéré Code conseille de ne rien construire ne sont pas matérialisés. |
| SEO/produit | 6 | Métadonnées, FAQ, données structurées, liens vers MVP et roadmap sont présents. | Les recherches « RICE exemple calcul », « RICE vs MoSCoW vs WSJF », « coût du retard », « priorisation backlog SaaS » et « demande du plus gros client » restent insuffisamment satisfaites. |

Total : **66/100**

## 2. Ce que le guide dit réellement

- Il répond dès l’ouverture qu’il faut partir de la personne bloquée, des faits
  et du résultat attendu, puis isoler pannes, obligations, contrats et
  dépendances.
- Il précise utilement que le SaaS existe déjà : ce n’est pas un guide de
  définition du premier MVP, mais de choix du lot suivant.
- La fiche en huit lignes couvre demande reçue, contexte, problème, preuves,
  résultat, dépendances, travail total et décision.
- Les cinq demandes fictives aboutissent à des décisions différentes :
  correction de double facture, validation groupée, test manuel de rapport,
  étude d’intégration, report de personnalisation.
- Le guide explique correctement la formule RICE, les unités communes et le
  fait que le score ne doit pas commander seul.
- Une demande est remplie jusqu’au bout et le document de décision final est
  copiable.
- Ce qui paraît complet mais n’aide pas assez à décider : les cinq demandes
  sont « triées » qualitativement, sans score, coût, capacité, horizon,
  objectif commun ou analyse de sensibilité. Le lecteur comprend comment
  réfléchir, pas encore comment trancher quand trois demandes restent
  défendables.

## 3. Benchmark France et international

Requêtes, pays, langues et date :

- France, français, 24 juillet 2026 : `prioriser fonctionnalités MVP SaaS`,
  `RICE MoSCoW exemple chiffré`, `framework priorisation backlog produit`,
  `roadmap produit objectifs fonctionnalités`.
- États-Unis, anglais, 24 juillet 2026 : `RICE prioritization original`,
  `RICE vs WSJF Kano feature prioritization`, `SaaS MVP backlog opportunity
  scoring`.
- Royaume-Uni, anglais, 24 juillet 2026 : `user needs prioritise features
  evidence GOV.UK`, `product decision evidence Home Office`.
- Australie, anglais, 24 juillet 2026 : `digital service prioritisation user
  needs MVP requirements`, `do not reinvent the wheel digital service`.
- Espagne, espagnol, 24 juillet 2026 : `matriz MoSCoW priorizar
  funcionalidades`.

Saturation : les recherches ont fait apparaître les mêmes familles de réponse :
MoSCoW, RICE, ICE, valeur/effort, Kano, WSJF/coût du retard, story mapping,
opportunity scoring et objectifs de roadmap. Après l’ajout des sources
gouvernementales britanniques et australiennes, les nouveaux résultats
répétaient des définitions et des listes de cadres sans nouvelle preuve. La
saturation est atteinte sur les **types de méthodes**, pas sur leur efficacité
comparée. Pour dépasser la concurrence, il faut désormais publier un backlog
fictif ou anonymisé, ses hypothèses, les classements divergents et la décision
humaine finale.

| Ressource et URL directe | Pays | Réponse utile | Preuve, outil ou exemple | Limite | Apport à vérifier ou adapter |
| --- | --- | --- | --- | --- | --- |
| [SaaS Path — trier MVP et nice-to-have](https://saas-path.com/blog/articles/roadmap-mvp-saas/) | France | Combine MoSCoW et RICE dans un format court pour fondateur. | Introduction simple et catégories familières. | Article bref ; peu de preuves et de sensibilité chiffrée. | Faire plus pédagogique tout en montrant un calcul complet. |
| [Poyesis — 9 frameworks de priorisation SaaS](https://poyesis.fr/blogs/guide-priorisation-features-saas/) | France | Compare neuf méthodes selon maturité, temps, données et nombre de participants. | Large couverture et tableau de choix. | Plusieurs exemples et affirmations ne sont pas reliés à une source primaire visible ; largeur au détriment de l’application. | Ne pas copier le catalogue : appliquer quatre cadres au même backlog. |
| [Eleven Labs — construire une roadmap produit](https://eleven-labs.com/blog/construire-roadmap-produit/) | France | Replace les fonctions dans vision, objectifs, métriques et arbitrages. | Angle stratégique et mise à jour 2026. | Page d’agence ; le délai annoncé pour une roadmap n’est pas universel. | Ajouter un « filtre objectif/segment » avant tout score. |
| [Atlassian — six frameworks de priorisation](https://www.atlassian.com/fr/agile/product-management/prioritization-framework) | International, version française | Couvre RICE, Kano, MoSCoW, valeur/effort, opportunity scoring et coût du retard. | Très bonne couverture sémantique. | Éditeur d’un outil de product discovery ; cadre commercial. | Utiliser pour cartographier les méthodes, vérifier les définitions à la source. |
| [Intercom — RICE original](https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/) | États-Unis | Définit portée, impact, confiance, effort et formule ; recommande une même période et des mesures réelles. | Exemples chiffrés complets et avertissement : le score n’est pas une règle absolue. | Méthode conçue dans un contexte Intercom ; échelles et seuils ne sont pas universels. | Appliquer la formule sans la transformer en vérité mathématique. |
| [Productboard — frameworks modélisables](https://support.productboard.com/hc/en-us/articles/7400189831955-Model-common-prioritization-frameworks-in-Productboard) | États-Unis | Met côte à côte RICE, WSJF, ICE et valeur/effort. | Formules visibles ; rappelle coûts opérationnels, formation, infrastructure et compétences. | Documentation d’un outil ; ne prouve pas qu’un cadre améliore les résultats. | Ajouter coût d’exploitation et coût du retard au-delà du seul effort de build. |
| [Productboard — priorization frameworks](https://www.productboard.com/glossary/product-prioritization-frameworks/) | États-Unis | Explique Kano, RICE, ICE et scoring pondéré. | Montre que Kano mesure la perception de valeur, pas l’effort. | Source secondaire et commerciale. | Utiliser Kano comme question différente, pas concurrent direct de RICE. |
| [Agile Business Consortium — MoSCoW Prioritisation](https://www.agilebusiness.org/dsdm-project-framework/moscow-prioritisation.html) | Royaume-Uni | Documente la méthode DSDM : Must, Should, Could et Won’t Have this time dans un horizon explicite. | Source de l’organisme qui maintient DSDM ; distingue les catégories et leur rôle dans une livraison bornée. | Les recommandations de répartition de capacité appartiennent au cadre DSDM et ne constituent pas des seuils universels pour tout SaaS. | Citer la source primaire, rendre l’horizon visible et refuser tout pourcentage présenté comme vérité générale. |
| [GOV.UK — learning about users and their needs](https://www.gov.uk/service-manual/user-research/start-by-learning-user-needs) | Royaume-Uni | Demande de rechercher les personnes, leur travail actuel, leurs problèmes et de traiter les opinions comme hypothèses. | Source publique ; besoin formulé comme problème, recherche continue et traçabilité vers les user stories. | Guide de service public, dernière mise à jour éditoriale 2017. | Conserver la doctrine problème avant solution et l’adapter au SaaS B2B. |
| [Home Office — Design from evidence](https://engineering.homeoffice.gov.uk/principles/design-from-evidence/) | Royaume-Uni | Relie besoins, exigences non fonctionnelles, décisions documentées et tests. | Source publique, version datée du 9 août 2023. | Pas un framework de classement de backlog. | Créer une colonne « preuve de l’exigence » et une condition d’acceptation. |
| [Australian Digital Health Agency — priorisation des exigences](https://www.digitalhealth.gov.au/healthcare-providers/initiatives-and-programs/digital-health-standards/digital-health-standards-guidelines/get-started/8-requirements/prioritisation-of-requirements) | Australie | Cadre la participation, le MVP testable, les attentes et le devenir des éléments moins prioritaires. | Source publique mise à jour le 22 septembre 2025. | Contexte santé numérique ; ce n’est pas une norme générale de SaaS. | Ajouter une règle de réexamen et rappeler qu’un report n’est pas une suppression. |
| [Digital.gov.au — Know your user](https://www.digital.gov.au/policy/digital-experience/digital-service-standard/criterion-2) | Australie | Demande recherche qualitative et quantitative, observation, segmentation et mesure continue. | Source publique actuelle et très opérationnelle. | Destinée aux services publics australiens. | Renforcer la distinction portée mesurée / importance pour un segment. |
| [Digital.gov.au — Don’t reinvent the wheel](https://www.digital.gov.au/policy/digital-experience/digital-service-standard/criteron-6) | Australie | Pose explicitement la question des alternatives à une construction neuve et de la réutilisation de plateformes/patterns. | Source publique actuelle. | Périmètre gouvernemental. | Faire de « acheter/réutiliser/connecter » une décision de premier rang. |
| [Thiga España — Matriz MoSCoW](https://www.media.thiga.co/es/glosario/matriz-moscow-descarga) | Espagne | Explique Must/Should/Could/Won’t, révision continue, communication et risque. | Bon angle pédagogique en espagnol. | Conseil produit ; certaines formulations rendent MoSCoW plus déterministe qu’il ne l’est. | Ajouter le contexte et la capacité, pas seulement les étiquettes. |
| [NIST — publications SSDF](https://csrc.nist.gov/Projects/ssdf/publications) | États-Unis | Distingue le SSDF 1.1 final et la version 1.2 encore en projet. | Source primaire mise à jour le 13 avril 2026. | Sécurité du développement, pas priorisation produit générale. | Sortir la sécurité du score commercial et dater précisément la version citée. |

## 4. Matrice de gain d’information

| Question décisive | Meilleure réponse française | Apport international | Couverture actuelle | Manque | Réponse supérieure à produire |
| --- | --- | --- | --- | --- | --- |
| Quel objectif le prochain lot doit-il faire progresser ? | Eleven Labs replace la roadmap dans vision, objectifs et métriques. | Digital.gov.au part de l’intention et des résultats mesurés. | Le « résultat attendu » existe dans la fiche. | Pas de filtre stratégique avant le classement. | Écrire un objectif, un segment et une métrique ; écarter les candidats sans lien explicite. |
| Qu’est-ce qui ne doit jamais perdre contre une feature ? | Peu de pages françaises le séparent clairement. | Home Office et NIST rendent exigences de sécurité et preuves traçables. | Très bonne section pannes, obligations, contrats, dépendances (`page.tsx:162-186`). | Accessibilité, confidentialité, fiabilité et dette critique ne sont pas structurées. | Un sas « non négociables » avant tout score, avec source et responsable. |
| Comment passer d’une demande à un problème ? | Les guides français restent souvent centrés frameworks. | GOV.UK traite les suggestions comme hypothèses et part du travail utilisateur. | Excellente fiche en huit lignes. | Pas d’exemple contradictoire entre ce que l’utilisateur demande et ce qui résout le problème. | Un entretien + observation + métrique montrant une demande reformulée. |
| RICE fonctionne-t-il réellement ici ? | SaaS Path et Poyesis le décrivent. | Intercom donne formule, période, données et limites. | Définition correcte, zéro calcul. | Tableau, unités, classement, sensibilité, données manquantes. | Calculer quatre demandes sur un trimestre puis corriger une mauvaise mesure de portée. |
| Quand choisir MoSCoW, WSJF, Kano ou story mapping ? | Poyesis et Atlassian couvrent les cadres. | Productboard explique les questions distinctes de RICE, WSJF et Kano. | MoSCoW seulement en encadré. | Le guide laisse croire que les méthodes répondent à la même question. | Tableau « question → méthode » et application au même backlog. |
| Comment intégrer le plus gros client sans devenir son logiciel interne ? | Peu de réponses françaises nuancées. | Les cadres internationaux séparent portée, stratégie, revenu, coût et table stakes. | FAQ utile (`page.tsx:104-109`). | Pas de calcul de marge à risque, réutilisation segment, coût durable et engagement contractuel. | Cas chiffré avec décision « produit commun / option payante / service / refus ». |
| Faut-il construire, acheter, connecter ou tester ? | Les pages SaaS privilégient souvent construire/report. | Digital.gov.au impose de rechercher les alternatives et la réutilisation. | Acheter/connecter apparaît tard. | Pas de comparaison de coût ni de vendor fit. | Faire de « réutiliser/acheter » une cinquième issue dès le début. |
| Comment faire tenir la décision dans la capacité réelle ? | Rarement montré. | WSJF relie coût du retard et taille ; les roadmaps internationales travaillent par horizon. | Le budget est évoqué, jamais alloué. | Jours disponibles, dépendances, marge d’incertitude, capacité support. | Construire un lot de 30 jours-personnes et montrer ce qui reste dehors. |
| Comment réviser sans transformer la roadmap en promesse ? | Les bons guides parlent de roadmap adaptable. | Australian Digital Health rappelle que le bas de pile n’est pas abandonné. | Excellent document « événement qui rouvrira ». | Pas de date de revue, propriétaire d’hypothèse ni changement de score. | Journal de décision versionné avec signal, date, auteur et nouvelle preuve. |

## 5. Faits et fraîcheur

| Affirmation du guide | Verdict | Source primaire actuelle | Périmètre et date | Correction |
| --- | --- | --- | --- | --- |
| RICE = portée × impact × confiance ÷ effort. | Confirmé. | [Intercom — RICE original](https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/) | Article original publié en 2018, consulté le 24 juillet 2026. | Conserver et ajouter un calcul complet ; préciser que l’échelle d’impact appartient à la méthode Intercom. |
| La portée doit utiliser la même période et de vraies mesures si possible. | Confirmé. | Intercom, sections Reach et calcul. | Exemples par trimestre et événements/mois. | Conserver ; ajouter une erreur de mesure puis sa correction. |
| RICE n’est pas une règle absolue ; dépendances et fonctions indispensables peuvent modifier l’ordre. | Confirmé mot pour mot dans l’esprit, sans citer longuement. | Intercom, section « How to use RICE effectively ». | Méthode d’origine. | Conserver et matérialiser l’écart entre classement et décision finale. |
| Une opinion ou suggestion sans preuve utilisateur doit être traitée comme une hypothèse. | Confirmé. | [GOV.UK Service Manual](https://www.gov.uk/service-manual/user-research/start-by-learning-user-needs) | Guide public, dernière mise à jour 23 mars 2017. | Conserver ; signaler l’ancienneté éditoriale mais la stabilité du principe. |
| Un MVP est une première version limitée, assez utilisable pour apprendre. | Nuancé. | [Australian Digital Health Agency](https://www.digitalhealth.gov.au/healthcare-providers/initiatives-and-programs/digital-health-standards/digital-health-standards-guidelines/get-started/8-requirements/prioritisation-of-requirements) parle d’exigences essentielles permettant au système de fonctionner et d’être testé. | Contexte santé numérique, mise à jour 22 septembre 2025. | Présenter comme définition de travail Hagnéré Code, pas comme définition universelle ou norme. |
| Les exigences de sécurité peuvent être ramenées à un lien générique NIST. | Insuffisant et à dater. | [NIST SSDF publications](https://csrc.nist.gov/Projects/ssdf/publications) | Au 24 juillet 2026 : v1.1 finale (2022), v1.2 projet (17 décembre 2025). | Citer SP 800-218 v1.1 comme version finale ; ne pas présenter le projet 1.2 comme adopté. |
| Un test manuel peut précéder un tableau de bord. | Confirmé comme méthode expérimentale, pas comme garantie. | [Strategyzer — Test Card](https://www.strategyzer.com/library/validate-your-ideas-with-the-test-card) | Outil commercial de méthode. | Ajouter le coût du test, ce qui ferait arrêter et la décision prise après trois essais. |
| MoSCoW rend les exclusions visibles dans un horizon donné, mais ne chiffre à lui seul ni le travail ni le résultat métier. | Confirmé comme limite raisonnable. | [Agile Business Consortium — MoSCoW Prioritisation](https://www.agilebusiness.org/dsdm-project-framework/moscow-prioritisation.html), source primaire DSDM ; [Australian Digital Health Agency](https://www.digitalhealth.gov.au/healthcare-providers/initiatives-and-programs/digital-health-standards/digital-health-standards-guidelines/get-started/8-requirements/prioritisation-of-requirements) pour un exemple public d’application. | Méthode de catégorisation dans un délai ou incrément défini. | Ne pas attribuer à MoSCoW un pouvoir économique qu’il n’a pas et ne pas universaliser les recommandations de capacité propres à DSDM. |

### Contradictions

- Le guide affirme qu’un score n’aide que si les demandes sont comparables,
  puis ne montre aucun score, aucune unité et aucune comparaison. La prudence
  est correcte, l’apprentissage reste théorique.
- Il annonce quatre décisions en ouverture — construire, tester, corriger,
  reporter — alors que « acheter ou connecter » devient une option seulement
  à la section 8. Réutiliser doit faire partie du filtre initial.
- La personnalisation de couleur est reportée faute de besoin, mais le guide ne
  montre pas le cas où une fonction apparemment cosmétique devient une
  exigence de marque blanche contractualisée et change de catégorie.
- La sécurité est citée via la page projet du NIST sans préciser que la
  révision 1.2 est encore un projet en juillet 2026.

### Faits à retirer plutôt qu’à affaiblir

- Aucun fait actuel ne doit être supprimé.
- Ne pas ajouter « RICE est objectif », « telle méthode convient à partir de X
  utilisateurs » ou un pourcentage de réussite des MVP sans étude primaire
  applicable.
- Ne pas reprendre comme fait le cas Swile cité par un concurrent français sans
  publication primaire décrivant la méthode et le résultat.

## 6. Scénarios et calculs à construire

Tous les chiffres sont **fictifs et pédagogiques**. Ils n’indiquent ni un prix
Hagnéré Code, ni une moyenne de marché, ni un résultat client.

### 6.1 Calculer RICE sur une même période

Horizon commun : un trimestre. Unité de portée : comptes réellement concernés
pendant ce trimestre. Effort : personnes-mois de toute l’équipe.

| Candidat fictif | Portée | Impact | Confiance | Effort | Score RICE |
| --- | ---: | ---: | ---: | ---: | ---: |
| Validation groupée | 40 | 2 | 0,8 | 2 | **32** |
| Tableau de bord | 120 | 1 | 0,5 | 4 | **15** |
| Intégration partenaire | 8 | 3 | 0,5 | 3 | **4** |
| Personnalisation de couleur — mesure initiale douteuse | 60 | 0,5 | 0,8 | 1 | **24** |

```text
Formule : portée × impact × confiance / effort
Horizon : un trimestre pour toutes les lignes
Inclus : comptes concernés, effet selon l'échelle déclarée, confiance et travail de toute l'équipe
Exclus : panne, obligation, engagement contractuel déjà signé et dépendance indispensable, traités avant le score
Résultat initial : validation groupée 32 ; couleur 24 ; tableau de bord 15 ; intégration 4
Analyse de sensibilité : les 60 de « couleur » sont en réalité les visiteurs de la page de réglages, pas les comptes ayant le problème. Avec 6 comptes concernés, le score devient 6 × 0,5 × 0,8 / 1 = 2,4
Variable qui fait basculer la décision : qualité de la mesure de portée, puis confiance
Contrôle inverse : 32 × 2 personnes-mois / (2 × 0,8) = 40 comptes
```

Gain pédagogique : un nombre disponible dans l’analytics n’est pas
automatiquement la bonne portée. Le futur guide doit montrer le classement
avant et après correction.

### 6.2 Montrer le classement qui bascule avec la confiance

```text
Validation groupée, confiance 0,8 : 40 × 2 × 0,8 / 2 = 32
Validation groupée, confiance 0,4 : 40 × 2 × 0,4 / 2 = 16
Tableau de bord : 120 × 1 × 0,5 / 4 = 15
```

Une baisse plausible de confiance rapproche 16 et 15. La conclusion n’est pas
de trancher au dixième : elle est d’acheter une information peu coûteuse sur la
validation groupée ou le tableau de bord avant d’engager le lot.

### 6.3 Évaluer une fonction de gain de temps

Hypothèse : 30 validations par semaine, 46 semaines par an, coût chargé de
35 €/h. Construction : 10 jours à 700 €, 10 heures internes à 35 € et
100 €/mois de maintenance la première année.

| Variable | Simple | Central | Exigeant | Source ou hypothèse |
| --- | ---: | ---: | ---: | --- |
| Minutes évitées par validation | 2 | 4 | 8 | Chronométrage avant/après |
| Heures économisées/an | 46 | 92 | 184 | 30 × minutes / 60 × 46 |
| Valeur du temps/an | 1 610 € | 3 220 € | 6 440 € | Heures × 35 € |
| Coût de première année | 8 550 € | 8 550 € | 8 550 € | Hypothèse commune |
| Retour simple | 5,31 ans | 2,66 ans | 1,33 an | Coût / valeur annuelle |

```text
Formule : fréquence × minutes évitées / 60 × semaines × coût horaire
Horizon : 12 mois, puis point mort simple
Inclus : temps directement économisé, construction, temps interne, maintenance année 1
Exclus : réduction des erreurs, valeur client, adoption, actualisation et coût du capital
Résultat central : 30 × 4 / 60 × 46 × 35 = 3 220 €/an ; coût 8 550 € ; point mort simple 2,66 ans
Analyse de sensibilité : doubler le temps évité de 4 à 8 minutes divise le point mort par deux
Variable qui fait basculer la décision : minutes réellement évitées et taux d'usage
Contrôle inverse : 3 220 / 35 = 92 heures ; 92 × 60 / (30 × 46) = 4 minutes
```

Ce calcul ne suffit pas si la validation groupée réduit aussi une erreur grave
ou débloque un engagement. Ces effets doivent être ajoutés séparément et
prouvés.

### 6.4 Tester un rapport avant de construire un tableau de bord

```text
Trois rapports manuels : 3 × 6 h × 40 €/h = 720 €
Tableau de bord : 18 j × 700 € + 20 h internes × 35 € = 13 300 €
Part du test : 720 / 13 300 = 5,4 %
```

Condition décidée avant le test : si les trois rapports ne déclenchent aucune
décision identifiable chez les responsables ciblés, ne pas construire le
tableau de bord. S’ils déclenchent une décision mais demandent toujours six
heures de préparation, recalculer le coût sur 12 ou 24 mois.

### 6.5 Composer un lot de capacité finie

Hypothèse : 30 jours-personnes réellement disponibles sur le prochain horizon.

```text
Correction de double facture : 8 jours
Validation groupée : 10 jours
Trois tests de rapport : 3 jours
Marge d'incertitude et mise en production : 9 jours
Total : 30 jours
```

Le tableau de bord estimé à 18 jours et l’intégration à clarifier ne « perdent »
pas parce qu’ils sont inutiles. Ils restent dehors parce que la capacité est
épuisée et que le rapport manuel ou l’étude d’accès doit produire de nouvelles
preuves.

## 7. Comparaison et position professionnelle

```text
Options réellement comparables : corriger ; réutiliser/acheter/connecter ; tester sans construire ; développer ; reporter avec signal de réexamen.
Périmètre et horizon communs : même objectif de trimestre, même segment, mêmes comptes touchés, même unité d'effort, capacité de 30 jours-personnes.
Option la moins chère : le report n'est pas une solution équivalente ; pour apprendre, le test manuel de 720 € est moins coûteux que le tableau fictif à 13 300 €.
Option la moins risquée : traiter d'abord panne/obligation/dépendance, puis réutiliser une capacité existante ou faire un petit test falsifiable.
Option qui demande le moins de temps interne : dépend de l'intégration et de l'exploitation ; l'achat n'est pas automatiquement gratuit en temps.
Position Hagnéré Code pour le cas fréquent : filtre stratégique et non négociables d'abord ; preuve du problème ensuite ; réutilisation avant construction ; RICE seulement entre candidats comparables ; capacité et marge d'incertitude pour fermer le lot.
Faits qui la fondent : GOV.UK part du besoin réel ; Intercom impose période et unités communes et refuse la règle absolue ; l'Australie demande de tester, mesurer et rechercher les alternatives existantes.
Cas où l'option opposée gagne : RICE peut commander directement lorsque tous les candidats servent le même objectif, utilisent une portée mesurée identiquement, ont des efforts fiables et ne cachent aucun impératif.
Signal de révision : nouvelle preuve utilisateur, changement contractuel, effort réestimé, incident, mesure d'usage ou objectif de trimestre modifié.
Ce que nous déconseillons même si nous pourrions le vendre : transformer une demande insistante en fonctionnalité sur mesure avant d'avoir observé le travail, examiné une solution existante et écrit le résultat attendu.
```

Opinion à assumer dans la future page :

> **Un score ne décide pas. Il oblige l’équipe à montrer ses hypothèses.** Si
> une ligne RICE ne supporte pas une baisse de confiance ou la correction de sa
> portée, financez l’apprentissage avant la fonctionnalité.

## 8. Objections et cas limites

| Objection loyale | Réponse prouvée | Ce qui reste incertain | Conséquence |
| --- | --- | --- | --- |
| « Mon plus gros client menace de partir. » | Le revenu et l’engagement signé sont des faits à examiner hors simple vote. | Marge réellement à risque, probabilité, utilité pour le segment et coût durable. | Comparer fonction produit, option payante, service manuel et refus ; ne pas cacher la stratégie derrière RICE. |
| « Tout est Must Have. » | MoSCoW exige justement une exclusion visible. | Qui décide et quel test rendrait l’élément non indispensable ? | Définir la conséquence concrète de l’absence et fermer la capacité. |
| « Nous n’avons pas assez de données pour RICE. » | La confiance sert à exposer l’incertitude. | Une faible confiance généralisée rend le classement instable. | Utiliser test, entretien, analytics ou spike technique avant le lot. |
| « La sécurité ne crée pas de revenu. » | NIST traite la sécurité comme pratique de cycle de développement, pas comme feature marketing. | Risque et niveau de contrôle adaptés au produit. | Sortir les exigences confirmées du concours de popularité ; les dimensionner et les tracer. |
| « Les utilisateurs demandent tous un dashboard. » | GOV.UK demande de comprendre ce qu’ils essaient de faire et d’observer les usages. | Décision réellement prise grâce au rapport. | Produire trois rapports manuels avant l’automatisation. |
| « Acheter un module est toujours plus rapide. » | Digital.gov.au demande de considérer la réutilisation, pas de la présumer parfaite. | Intégration, données, droits, abonnement, sortie et support. | Comparer acheter/connecter/développer sur le même résultat. |
| « Le commercial a déjà promis la date. » | Un engagement signé et une phrase commerciale ne sont pas équivalents. | Portée contractuelle et capacité technique. | Relire l’engagement, réestimer, négocier ; ne pas truquer le score. |
| « Une seule demande ne peut pas être prioritaire. » | La portée n’est qu’un facteur ; impact, contrat, risque et segment comptent. | Représentativité et stratégie. | Documenter pourquoi une demande unique peut gagner sans inventer une majorité. |
| « Nous devons rattraper un concurrent. » | Une fonction concurrente n’est pas une preuve de besoin chez nos utilisateurs. | Caractère attendu, différenciant ou indifférent — question de type Kano. | Tester la perception et le motif de perte avant de copier. |
| « Le fondateur doit garder le dernier mot. » | Une décision a besoin d’un responsable ; elle gagne à rendre les preuves visibles. | Gouvernance propre à l’entreprise. | Le décideur peut déroger au classement, mais doit écrire pourquoi et quand revoir. |

## 9. Plan de réécriture

| Ordre | Section proposée | Question résolue | Preuve, scénario ou outil | Décision produite | À conserver / créer / couper |
| ---: | --- | --- | --- | --- | --- |
| 1 | Le verdict en une minute | Dans quel ordre décider ? | 5 portes : impératif, objectif, preuve, réutilisation, capacité | Processus de tri | Créer ; raccourcir l’ouverture |
| 2 | Sortez les non-négociables du score | Qu’est-ce qui doit passer avant ? | Panne, obligation, contrat, dépendance, sécurité/accessibilité critique | Liste protégée | Conserver et étendre |
| 3 | Choisissez un objectif et un segment | Pourquoi ce lot existe-t-il ? | Formule objectif + métrique + cible + horizon | Filtre stratégique | Créer |
| 4 | Transformez la demande en problème | Que savons-nous vraiment ? | Fiche en huit lignes + contre-exemple | Candidat qualifié | Conserver |
| 5 | Réutiliser, tester, construire ou reporter | Quelles issues sont ouvertes ? | Digital.gov.au + mini-arbre | Décision de forme | Créer ; intégrer achat dès le début |
| 6 | RICE calculé, puis corrigé | Quel ordre si les candidats sont comparables ? | Tableau 32/24/15/4 puis correction 2,4 | Classement provisoire | Créer |
| 7 | La méthode adaptée à la question | RICE, MoSCoW, WSJF, Kano ou story map ? | Même backlog comparé | Choix du cadre | Créer |
| 8 | Le coût et le temps récupéré | La feature se rembourse-t-elle ? | 1 610/3 220/6 440 € et coût 8 550 € | Cas économique | Créer |
| 9 | Construisez le lot de 30 jours | Qu’est-ce qui tient vraiment ? | Allocation 8 + 10 + 3 + 9 | Lot fermé | Créer |
| 10 | Le plus gros client et les cas limites | Quand déroger ? | Marge, contrat, segment, maintenance | Décision loyale | Créer |
| 11 | Écrivez le procès-verbal et le signal de retour | Comment éviter les promesses floues ? | Modèle existant versionné | Décision gouvernable | Conserver et enrichir |
| 12 | Kit téléchargeable | Comment appliquer demain ? | Tableur avec filtres, score, sensibilité, capacité et journal | Autonomie du lecteur | Créer |
| 13 | Revue Hagnéré Code | Qu’achète le prospect ? | Livrable : cinq demandes, hypothèses, capacité, recommandation et exclusions | Conversion honnête | Réécrire le CTA |

### Contrat des 150 premiers mots

Proposition de fond, à retravailler avec la voix finale :

> Vos clients réclament dix fonctionnalités, votre équipe peut en livrer deux
> et chacune semble « urgente ». Comment choisir sans céder au plus insistant ?
> Commencez par sortir du classement ce qui relève d’une panne, d’une
> obligation confirmée, d’un engagement signé ou d’une dépendance. Pour le
> reste, ne notez pas encore les solutions : écrivez qui est bloqué, dans
> quelle situation et quel résultat doit changer. Notre position est tranchée :
> **RICE n’est pas un pilote automatique.** C’est un moyen de rendre vos
> hypothèses visibles lorsque les demandes utilisent la même période et les
> mêmes unités. Avant de développer, vérifiez aussi si vous pouvez réutiliser
> un outil, tester le besoin manuellement ou reporter avec une condition de
> réexamen. Ce guide applique plusieurs méthodes au même backlog fictif,
> recalcule les scores quand une donnée est mauvaise et compose enfin un lot de
> 30 jours-personnes que l’équipe peut réellement assumer.

Ces mots doivent donner : situation, ordre de décision, opinion, limite de RICE
et promesse chiffrée du guide.

### Éléments à supprimer

- Toute longue définition d’un framework qui n’est pas immédiatement appliquée
  au cas commun.
- La présentation de quatre issues qui oublie acheter/réutiliser.
- Les répétitions « le score n’est pas automatique » sans exemple où il change
  ou échoue.
- Toute échelle ou seuil présenté comme universel.
- Le lien NIST non versionné si le texte parle d’une version finale.

### Éléments à conserver

- La fiche de huit lignes.
- Le traitement séparé des pannes, obligations, contrats et dépendances.
- La double facture et le rapport manuel.
- Les cinq demandes fictives et leur transparence.
- La formule RICE avec période et unités communes.
- Le procès-verbal de décision et l’événement de réexamen.
- La possibilité d’acheter, attendre ou ne pas développer.
- Le CTA sans garantie de date ni de vente.

## 10. Contre-audit après correction

La page publique n’a pas été modifiée pendant cet audit.

| Problème | Priorité | Correction appliquée | Revalidation indépendante |
| --- | --- | --- | --- |
| RICE sans exemple chiffré | P1 | En attente | Refaire chaque score et son contrôle inverse |
| Pas de sensibilité | P1 | En attente | Modifier portée et confiance, vérifier le classement |
| Pas de capacité finie | P1 | En attente | Recalculer le lot à 30 jours-personnes |
| Achat/réutilisation relégué en fin de page | P1 | En attente | Contrôler l’arbre des cinq décisions |
| Stratégie/segment insuffisants | P1 | En attente | Chaque candidat doit pointer vers le même objectif ou sortir du score |
| NIST SSDF non versionné | P1 | En attente | Confirmer v1.1 finale et v1.2 projet au jour de publication |
| Frameworks non comparés | P2 | En attente | Appliquer au même backlog, éviter le catalogue |
| CTA sans livrable tangible | P2 | En attente | Contrôler bon fit, mauvais fit et résultat de la revue |

### Score après correction

| Axe | Note /10 | Preuve localisable | Manque résiduel |
| --- | ---: | --- | --- |
| Intention | — | Non recalculé | Réécriture non effectuée |
| Décision | — | Non recalculé | Réécriture non effectuée |
| Pédagogie | — | Non recalculé | Réécriture non effectuée |
| Profondeur | — | Non recalculé | Réécriture non effectuée |
| Preuve | — | Non recalculé | Réécriture non effectuée |
| Comparaison | — | Non recalculé | Réécriture non effectuée |
| Originalité | — | Non recalculé | Réécriture non effectuée |
| Style | — | Non recalculé | Réécriture non effectuée |
| Conversion | — | Non recalculé | Réécriture non effectuée |
| SEO/produit | — | Non recalculé | Réécriture non effectuée |

Total : **non calculé**

Objectif de réécriture : au moins **90/100**, aucun axe sous **8/10**, après
contre-audit indépendant, sources rouvertes et calculs refaits.

## 11. Preuves techniques et visuelles

```text
Manifeste : aucun manifeste de réécriture créé ; audit seulement
Calculs refaits : oui, avec Node.js ; RICE, sensibilité, gain de temps, coût de test, coût de build et capacité
Sources rouvertes : oui, France, États-Unis, Royaume-Uni, Australie, Espagne et sources primaires
Liens vérifiés : les URL majeures de cet audit ont été ouvertes le 24 juillet 2026
Commandes : shasum -a 256 ; lecture nl/sed ; recalcul Node.js
Rendu 320 / 390 / 768 / 1024 / 1440 : non exécuté, aucune page publique modifiée
Image sociale : non contrôlée dans ce sous-audit éditorial
Statut maximal prouvé : audité et plan de réécriture documenté
Réserve publication / indexation : aucune correction publique n'est réalisée ni validée ; ne pas présenter ce dossier comme une publication ou une amélioration indexée
```
