# Dossier de travail — calculer le ROI d'une application métier

## 1. Fiche d'identité

```text
Slug : calculer-roi-application-metier
Statut actuel : publiable — validation éditoriale déléguée le 20 juillet 2026
Requête principale : calculer ROI application métier
Moment du parcours : décider
Lecteur précis : dirigeant ou responsable opérationnel de TPE/PME française qui doit décider s'il faut financer un outil interne
Situation déclenchante : un devis, une idée d'automatisation ou un logiciel standard est sur la table, mais les gains ne sont pas démontrés
Décision principale après lecture : investir, tester une solution plus simple ou reporter à partir d'un dossier économique reproductible
Niveau de connaissance au départ : maîtrise du processus métier, sans pratique nécessaire de la finance d'investissement ni du développement
5 questions indispensables : quelles données mesurer ; quels coûts inclure ; quels gains deviennent des euros ; comment comparer ; quand contrôler
3 objections ou craintes : le calcul dépend d'hypothèses ; le prestataire avantage le sur-mesure ; le temps gagné ne produira pas d'économie
Action utile sans contact commercial : remplir une fiche en cinq blocs et recalculer trois scénarios
CTA possible : faire relire le périmètre, les hypothèses et les inconnues avant un devis
Hors périmètre : conseil comptable ou financier personnalisé, fiscalité, aides, VAN/TRI détaillés, prix moyen d'un logiciel, choix de technologie
Date de la recherche : 20 juillet 2026
Responsable de la synthèse : Codex pour Hagnéré Code
```

La décision principale : **refuser un projet dont la rentabilité dépend de
temps non réaffecté, d'un coût incomplet ou d'un scénario unique.**

## 2. Cannibalisation

| Page existante                         | Intention de cette page                 | Différence du nouveau guide                                                                     | Lien ou arbitrage nécessaire                                                                  |
| -------------------------------------- | --------------------------------------- | ----------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `automatiser-processus-metier`         | choisir le premier flux à automatiser   | construire le dossier économique complet puis le contrôler après lancement                      | lien réciproque depuis sa section ROI ; ne pas reprendre son exemple 345 h / 44,2 € / 36 mois |
| `prix-logiciel-sur-mesure`             | estimer le budget d'un logiciel         | confronter un coût donné aux bénéfices attribuables, sans publier de fourchette de prix         | lien pour construire le poste investissement                                                  |
| `transformer-excel-en-application`     | décider quand et comment sortir d'Excel | méthode valable pour Excel, papier, logiciel standard ou existant ; pas de migration de données | lien si Excel est le symptôme initial                                                         |
| `erp-ou-logiciel-sur-mesure`           | choisir une famille de solution         | normaliser économiquement les options présélectionnées                                          | ne pas refaire le comparatif fonctionnel                                                      |
| `/services/outils-internes-sur-mesure` | présenter l'offre transactionnelle      | le guide peut conclure qu'il ne faut pas acheter de sur-mesure                                  | CTA seulement si règles, données et bénéfices sont établis                                    |

**Porte de sortie :** cette URL répond à la décision « cet investissement se
rembourse-t-il avec des gains réellement obtenables ? », que les pages de prix,
de choix et d'automatisation ne traitent qu'en sous-partie.

## 3. Demande et vocabulaire du lecteur

### Observation effectuée le 20 juillet 2026

Recherches observées : « calculer ROI application métier », « ROI logiciel
entreprise calcul coût temps », « rentabilité logiciel sur mesure ROI PME ».
La SERP mélange pages de prix, argumentaires d'agences, comparatifs
Excel/sur-mesure et méthodes de business case. Aucun volume n'en est déduit.

Questions récurrentes :

- Combien d'heures faut-il compter ?
- Le temps gagné est-il une économie ?
- Faut-il inclure maintenance, formation et migration ?
- Sur combien d'années calculer ?
- Comment calculer le délai de retour ?
- Que faire si le résultat change selon les hypothèses ?
- Un logiciel standard ne serait-il pas plus rentable ?

Champ lexical utile : coût actuel, charge observée, coût total de possession,
bénéfice attribuable, capacité réaffectée, dépense évitée, scénario prudent,
gain net, retour sur investissement, délai de retour, adoption, inconnue,
pilote, critère d'arrêt et mesure après lancement.

Suppositions à ne pas publier comme des données : fréquence de la requête,
budget moyen, taux moyen de temps récupérable et délai de retour « normal ».

## 4. Carte concurrentielle

| Page                                                                  | Réponse et angle                                 | Preuves/artefacts               | Bon point                    | Manque décisionnel                                                                              | Conflit d'intérêt éventuel |
| --------------------------------------------------------------------- | ------------------------------------------------ | ------------------------------- | ---------------------------- | ----------------------------------------------------------------------------------------------- | -------------------------- |
| PeakLab, « Application métier PME : calculer le ROI réel vs Excel »   | passage d'Excel à une application sur 24–36 mois | exemple et postes de transition | reconnaît le statu quo       | statistique d'ouverture non reliée à une source primaire visible ; temps vite converti en euros | vend du développement      |
| Sparkana, « Application métier sur mesure : pourquoi c'est rentable » | rentabilité du sur-mesure                        | exemple court                   | langage simple               | conclusion favorable au sur-mesure, sans stress test ni contrôle après lancement                | vend du développement      |
| Eurastech, « Logiciel sur mesure Maroc : prix et méthode 2026 »       | prix et ROI sur trois ans                        | grilles en MAD                  | distingue SaaS et spécifique | autre pays ; coût de sortie et capacité monétisée peu centraux                                  | vend du développement      |
| NothingElse, « SaaS du marché ou logiciel sur mesure »                | point d'équilibre SaaS/sur-mesure                | matrice et calculateur          | compare deux options         | traite le coût relatif, moins la preuve des bénéfices métier                                    | vend du développement      |
| La Boîte Tech, « Calculer le ROI d'un logiciel sur mesure »           | business case financier                          | formule et exemple              | inclut maintenance           | exemple difficile à transposer ; fiscalité volatile                                             | vend du développement      |
| Novane, « Évaluer le coût et le ROI d'un logiciel métier »            | méthode générale                                 | listes de coûts et gains        | couvre plusieurs gains       | sépare peu capacité, économie de caisse et bénéfice incertain                                   | vend du développement      |

**Angle mort commun :** peu de résultats expliquent comment invalider le
projet, marquer les inconnues, comparer « simplifier sans développer » et
réconcilier le prévisionnel avec les mesures de M1, M3 et M6.

**Valeur originale :** dossier de décision en cinq blocs, exemple fictif
reproductible, trois scénarios, quatre options sur le même horizon et protocole
de contrôle après mise en service.

## 5. Fiche de preuves

| Affirmation utilisable                                                                                                                   | Source primaire, URL et passage utile                                                                                                                                                                                                | Nature                                    | Périmètre                                                                    | Date/consultation                                 | Confiance                                                                        | Conséquence lecteur                                                                  | Fraîcheur                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------- | ---------------------------------------------------------------------------- | ------------------------------------------------- | -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | ------------------------------------------------ |
| Les objectifs et résultats d'une transformation numérique doivent être définis et suivis ; certains effets restent difficiles à chiffrer | France Num, « Comment mesurer les effets de la transformation numérique d'entreprise », lignes 93–120, https://www.francenum.gouv.fr/guides-et-conseils/strategie-numerique/comprendre-le-numerique/comment-mesurer-les-effets-de-la | synthèse méthodologique publique          | transformation numérique des entreprises                                     | mise à jour 21/04/2026, consultée 20/07/2026      | élevée pour la nécessité de mesurer ; moyenne pour les facteurs d'études tierces | fixer un indicateur avant le projet et ne pas forcer les effets qualitatifs en euros | revalider si évolution substantielle             |
| En 2025, le coût horaire est estimé à 44,2 € dans les services marchands et 44,7 € dans l'ensemble marchand                              | Insee, « Coût horaire du travail selon l'activité », https://www.insee.fr/fr/statistiques/2381340                                                                                                                                    | donnée publique primaire issue d'Eurostat | France, secteurs B à N, entreprises de 10 salariés ou plus, apprentis inclus | paru 02/07/2026, consulté 20/07/2026              | élevée dans ce champ                                                             | ce repère ne remplace pas le coût chargé réel d'une TPE ou d'un poste                | nouvelle édition annuelle                        |
| Temps, réduction des coûts, recettes et ROI font partie des préoccupations observées chez les dirigeants de TPE/PME                      | France Num / DGE, étude BCG-EY, https://www.francenum.gouv.fr/guides-et-conseils/strategie-numerique/comprendre-le-numerique/besoins-des-tpe-pme-et-pratiques                                                                        | étude commandée par la DGE                | 30 entretiens puis plus de 1 000 TPE/PME françaises, collecte 2019–2020      | page mise à jour 16/02/2024, consultée 20/07/2026 | moyenne, méthode décrite mais étude ancienne                                     | partir du besoin métier et non d'une technologie                                     | ne pas republier un taux sans période et segment |
| Un projet numérique doit partir d'objectifs, de données et d'une observation du travail                                                  | DGE, guide « Améliorer la performance grâce aux technologies numériques », https://www.francenum.gouv.fr/guides-et-conseils/pilotage-de-lentreprise/numerisation-des-processus/ameliorer-la-performance-de                           | recommandation publique                   | guide PME fondé sur 300 entreprises françaises de 10 à 1 000 collaborateurs  | consulté 20/07/2026                               | moyenne à élevée comme méthode, pas comme estimation de gains                    | mesurer un cycle complet avant le business case                                      | relecture annuelle                               |
| La participation des salariés permet de comparer futurs flux, organisation et effets attendus                                            | Anact, « Table de simulation numérique », https://www.anact.fr/table-de-simulation-numerique                                                                                                                                         | ressource publique                        | transformation numérique impliquant les salariés                             | consultée 20/07/2026                              | élevée pour la méthode                                                           | intégrer adoption, formation et nouvelles tâches au coût                             | revalider si ressource déplacée                  |

### Contradictions et données à ne pas publier

- Ne pas reprendre « 30 % de productivité perdue avec Excel » aperçu chez un
  concurrent : aucune source primaire suffisamment précise n'a été retrouvée.
- Ne publier ni délai de retour moyen ni taux de réussite moyen pour une
  application métier.
- France Num cite 80 % de réussite d'une étude BCG sous six conditions ; ce
  taux ne prédit pas le résultat d'un projet de PME et n'est pas utilisé.
- Les prix et aides fiscales de pages concurrentes sont hors intention,
  volatils ou propres à un autre pays : ils sont exclus.
- Le repère Insee n'est pas injecté dans l'exemple : l'entreprise fictive
  possède son propre coût chargé de 36 € par heure.

### Calculs reproductibles

Tous les montants appartiennent à un **exemple illustratif fictif**.

#### Base annuelle

- 80 comptes rendus/semaine × 8 minutes × 48 semaines = 512 h ;
- consolidation : 3 h/semaine × 48 = 144 h ;
- corrections : 14/mois × 24 minutes × 12 = 67,2 h ;
- charge totale observée = 723,2 h/an ;
- coût chargé fictif = 36 €/h ;
- capacité théorique = 723,2 × 36 = 26 035,20 €/an ;
- décaissements liés aux erreurs dans le cas fictif = 2 400 €/an ;
- la capacité ne devient un bénéfice que selon la part réellement réaffectée.

#### Contre-calcul d'ouverture

- lecture naïve : `(26 035,20 + 2 400) × 4 = 113 740,80 €` de bénéfices ;
- avec le coût corrigé de 54 800 € :
  `(113 740,80 - 54 800) / 54 800 × 100 = 107,56 %` ;
- cette lecture est volontairement invalide : elle compte 48 mois de bénéfices
  malgré quatre mois de préparation et valorise 100 % du temps et des
  décaissements ;
- lecture centrale corrigée : 44 mois de bénéfices, 60 % de capacité réaffectée,
  70 % de décaissements évités, soit un ROI simple cumulé de 15,76 %.

#### TCO fictif de l'option sur mesure, de la décision au mois 48

Origine commune : décision au début du mois 0, quatre mois de préparation,
mise en service au début du mois 5, puis 44 mois d'exploitation jusqu'à la fin
du mois 48.

- cadrage : 4 000 € HT ;
- conception, développement et intégration : 26 000 € HT ;
- temps interne : 100 h × 36 € = 3 600 € ;
- migration et formation : 2 400 € HT ;
- hébergement et surveillance : 150 € × 44 = 6 600 € HT ;
- maintenance : 250 € × 44 = 11 000 € HT ;
- sortie : 1 200 € HT ;
- TCO = 54 800 € entre le mois 0 et le mois 48. Fiscalité, inflation et besoin non découvert :
  à confirmer. L'exemple suppose une TVA récupérable et raisonne hors taxes.

Formule annuelle :

`bénéfice = 26 035,20 € × part de capacité réellement réaffectée + 2 400 € × part de décaissements réellement évités`

| Scénario | Capacité réaffectée | Décaissements évités | Bénéfice annuel | Bénéfices mois 5–48 |     Gain net | ROI simple cumulé |
| -------- | ------------------: | -------------------: | --------------: | ------------------: | -----------: | ----------------: |
| prudent  |                35 % |                 40 % |     10 072,32 € |         36 931,84 € | −17 868,16 € |          −32,61 % |
| central  |                60 % |                 70 % |     17 301,12 € |         63 437,44 € |   8 637,44 € |           15,76 % |
| haut     |                80 % |                 90 % |     22 988,16 € |         84 289,92 € |  29 489,92 € |           53,81 % |

Chaque bénéfice cumulé vaut `bénéfice annuel / 12 × 44`. Contrôle central :
`(63 437,44 - 54 800) / 54 800 × 100 = 15,76 %`. Ce ROI est cumulé sur
48 mois calendaires, non annualisé et non actualisé.

#### Délai de retour économique central

- investissement avant mise en service = 36 000 € ;
- bénéfice mensuel = 17 301,12 / 12 = 1 441,76 € ;
- exploitation mensuelle = 150 + 250 = 400 € ;
- provision de sortie = 1 200 / 44 = 27,27 € ;
- gain mensuel économique stable = 1 014,49 € ;
- raccourci après mise en service = 36 000 / 1 014,49 = 35,49 mois ;
- avec quatre mois fictifs de préparation, retour économique depuis la décision
  = 39,49 mois. Le point exact reste le mois où les flux nets économiques
  cumulés franchissent zéro.

Ce n'est pas un délai de trésorerie : la capacité réaffectée n'est pas une
entrée de caisse et le temps interne n'est pas toujours un paiement additionnel.
Un délai de trésorerie exige un échéancier distinct limité aux encaissements et
décaissements réels.

#### Comparaison fictive de la décision au mois 48

Les coûts sont additionnels par rapport au statu quo. Le coût courant du
processus reste dans la base ; « 0 € » ne signifie pas que le statu quo est
gratuit.

| Option                       | Service | Hypothèse de bénéfice                      | Décomposition du coût additionnel                             |   Bénéfices |    Gain net | ROI cumulé |
| ---------------------------- | ------: | ------------------------------------------ | ------------------------------------------------------------- | ----------: | ----------: | ---------: |
| statu quo                    |       — | charge actuelle conservée                  | 0 € nouveau dans ce comparatif                                |         0 € |         0 € |        n/a |
| simplifier l'existant        |  mois 2 | 25 % de capacité et 40 % des décaissements | 4 000 € initiaux + 75 € × 47 + 475 € de sortie = 8 000 €      | 29 252,80 € | 21 252,80 € |   265,66 % |
| logiciel standard configuré  |  mois 3 | 50 % de capacité et 60 % des décaissements | 16 000 € initiaux + 325 € × 46 + 1 050 € de sortie = 32 000 € | 55 420,80 € | 23 420,80 € |    73,19 % |
| sur mesure, scénario central |  mois 5 | 60 % de capacité et 70 % des décaissements | 36 000 € initiaux + 400 € × 44 + 1 200 € de sortie = 54 800 € | 63 437,44 € |  8 637,44 € |    15,76 % |

Le ROI le plus élevé n'est pas forcément le gain net le plus élevé, et le
sur-mesure ne gagne pas dans ce cas. Les réductions sont des hypothèses à
remplacer par un pilote ou des preuves.

## 6. Empreinte éditoriale à ne pas reproduire

| Guide                              | Type d'ouverture        | Progression                                  | Dispositif récurrent          | Exemple/fil rouge         | Place du CTA          | Type de conclusion       |
| ---------------------------------- | ----------------------- | -------------------------------------------- | ----------------------------- | ------------------------- | --------------------- | ------------------------ |
| `automatiser-processus-metier`     | processus avant outil   | observation → matrice → six options → pilote | matrice gain/risque/stabilité | cinq candidats puis 345 h | avant plan sept jours | phrase de décision       |
| `prix-logiciel-sur-mesure`         | fourchettes             | budget → devis → TCO → match                 | grilles tarifaires            | transport fictif          | vers la fin           | payer le juste prix      |
| `transformer-excel-en-application` | garder ou remplacer     | score → quatre solutions → migration         | diagnostic                    | classeur critique         | après plan 30 jours   | clauses et migration     |
| `combien-coute-un-crm`             | trois socles            | scénarios → TCO → contrat                    | socles 36 mois                | plusieurs profils         | fin                   | compléter les inconnues  |
| `erp-ou-logiciel-sur-mesure`       | arbitrage par processus | critères → scénarios → adoption              | comparaison quatre familles   | processus                 | fin                   | décision par contraintes |

```text
Tension motrice : mon tableur annonce un ROI positif, mais cet argent existera-t-il réellement ?
Ouverture : contre-calcul en cinq données, pour répondre avant le vocabulaire
Progression : dossier d'investissement en cinq pièces, test de résistance, puis contrôle après lancement
Artefact signature : fiche de décision + trois scénarios + registre prévision/réalisé après 1, 3 et 6 mois
Rythme/voix : contrôleur de gestion pédagogique, calculs commentés et décisions intermédiaires
Place du CTA : après test de résistance et cas inadaptés, avant le protocole autonome
Conclusion : feu vert, pilote, option plus simple ou report
Différences : ouverture par falsification ; cas 723,2 h sur 48 mois ; sur-mesure perd ; réconciliation prévision/réalisé
```

## 7. Plan annoté

| Section              | Question résolue                 | Preuve ou exemple                               | Conséquence/décision                 | Format               |
| -------------------- | -------------------------------- | ----------------------------------------------- | ------------------------------------ | -------------------- |
| Réponse immédiate    | quelles données suffisent ?      | cinq cases                                      | arrêter si volume ou coût manque     | verdict              |
| Mesurer l'existant   | comment éviter le ressenti ?     | fréquence, temps, correction                    | base annuelle                        | procédure            |
| Nommer les bénéfices | que convertir en euros ?         | caisse/capacité/risque/qualitatif               | monétiser l'attribuable              | tableau              |
| Construire le TCO    | que coûte chaque option ?        | initial, récurrent, sortie                      | même horizon, aucune inconnue à zéro | formule              |
| Cas fictif           | le calcul tient-il ?             | 723,2 h, 54 800 €, trois scénarios              | comprendre ROI et délai              | fil chiffré          |
| Quatre réponses      | le sur-mesure est-il rationnel ? | statu quo, simplification, standard, spécifique | solution la moins complexe           | tableau              |
| Stress test          | quelle hypothèse commande ?      | seuils et dérive                                | pilote/report si fragile             | questions de rupture |
| Gouvernance          | qui valide ?                     | métier, finance, utilisateurs, prestataire      | séparer devis et validation          | responsabilités      |
| CTA                  | quand un cadrage aide ?          | cas adapté/inadapté                             | contacter ou agir seul               | bloc unique          |
| Après lancement      | le ROI devient-il réel ?         | mesures après 1, 3 et 6 mois                    | corriger, arrêter ou étendre         | protocole            |
| FAQ                  | questions résiduelles            | miroir visible                                  | éviter une recherche                 | accordéon            |

## 8. Ressource et conversion

```text
Une ressource est-elle naturellement nécessaire ? non pour cette version
Problème après lecture : le dossier copiable visible suffit ; un tableur séparé exigerait une release et une maintenance dédiées
Résultat autonome : feuille de décision en cinq blocs et tableau de suivi après lancement copiables
Format : contenu HTML copiable ; aucune promesse de fichier
Rubriques livrées : base, bénéfices, TCO, scénarios, décision, suivi
Exemple rempli : atelier de maintenance fictif
Conclusion ne pas investir : oui, scénario prudent négatif et simplification gagnante
Sources, hypothèses, limites : visibles
Données saisies : aucune
Processus de génération : sans objet
Journal de QA : page et calculs
Limites : aucune revue humaine réelle à ce stade
Maintenance : revalider Insee et France Num après modification substantielle
Test du fichier : sans objet
Cas adapté : processus stable, données accessibles, sponsor, bénéfice mesurable, intégration ou spécificité réelle
Cas inadapté : confort non mesuré, règles instables, standard suffisant, aucun propriétaire ou budget d'exploitation
Action non commerciale : remplir le dossier, varier trois hypothèses, fixer les contrôles après 1, 3 et 6 mois
CTA : décrire le processus pour un cadrage ; aucun ROI ni devis promis avant examen
```

## 9. Revue finale

### Scorecard finale après corrections et contre-audit

| Axe         | Note | Preuve                                                            | Correction éventuelle        |
| ----------- | ---: | ----------------------------------------------------------------- | ---------------------------- |
| Intention   |    2 | réponse et dossier centrés sur investir/piloter/reporter          | confirmer après rendu        |
| Décision    |    2 | quatre options, test de résistance, critères de sortie            | contre-audit                 |
| Pédagogie   |    2 | termes définis, cas recalculable                                  | vérifier formules sur mobile |
| Profondeur  |    2 | TCO, attribution, adoption, sortie, suivi                         | aucune connue                |
| Preuve      |    2 | sources publiques ; hypothèses fictives séparées                  | revérifier les portées       |
| Comparaison |    2 | même horizon et même base                                         | rappeler le caractère fictif |
| Originalité |    2 | prévision/réalisé et sur-mesure perdant                           | aucune connue                |
| Style       |    2 | progression de dossier, sans superlatif                           | lecture orale                |
| Conversion  |    2 | cas adapté/inadapté et action autonome                            | pression avec sidebar        |
| SEO/produit |    2 | metadata, données structurées, tests, build et navigateur validés | revalider après modification |

Score final interne : **20/20** après levée des deux réserves modérées du
ré-audit. Le commanditaire a explicitement délégué et autorisé l'arbitrage de
publication ; aucun test lecteur réel n'est revendiqué.

### Test lecteur non technique

```text
Test réalisé par une personne réelle : non
Profil : non disponible
Compréhension, décision, survol, crédibilité et blocages : non testés
Corrections : aucune validation humaine inventée
Décision de publication : autorisée explicitement par le commanditaire sur la base du contre-audit indépendant ; cela ne constitue pas un test lecteur
```

### Contre-audit indépendant

```text
Auteur : agent Codex distinct de l'auteur de la version auditée
Indépendant : oui, lecture sans participer à la rédaction initiale
Résultat initial : 15/20 ; statut brouillon tant que les réserves majeures subsistent
Réserves : horizon incohérent, coûts comparatifs non décomposés, délai économique présenté comme trésorerie, ROI cumulé ambigu, ouverture trop proche d'un guide voisin, graphique OG trompeur, FAQ répétitive, source France Num trop éloignée
Corrections : horizon unique mois 0–48 ; 44 mois d'exploitation du sur-mesure ; TCO à 54 800 € ; scénarios, comparaison et délai recalculés ; coût additionnel explicité ; trésorerie séparée ; ROI qualifié ; contre-calcul en ouverture ; lexique français ; FAQ résiduelle ; lien France Num contextuel ; graphique OG relabellisé
Ré-audit après corrections : 19/20 avant deux corrections modérées ; temps de lecture porté à 23 minutes et définition du ROI reformulée ; verdict final PASS sous réserve du navigateur
Contrôle navigateur parent : dix largeurs CSS réelles de 320 à 1 600 px, aucun débordement de page, tableaux défilables, FAQ interactive, aucune erreur console ; OG 1200 × 630 inspectée visuellement
Statut maximal actuel : publiable après autorisation éditoriale déléguée, sans prétendre à un test lecteur réel
```

### Vérifications

- [x] faits, citations et fraîcheur revérifiés ;
- [x] calculs refaits ;
- [x] cas fictif identifié, aucun cas réel inventé ;
- [x] aucune ressource téléchargeable promise ;
- [x] metadata, JSON-LD, registre, maillage et ancres cohérents ;
- [x] TypeScript, ESLint, 86 tests SEO, build de production de 98 pages et
      postbuild SEO global passés après corrections ;
- [x] rendu observé aux dix largeurs requises ;
- [x] ré-audit indépendant passé après corrections ;
- [x] contrôles techniques et build repassés après les deux dernières corrections ;
- [x] porte éditoriale levée ; l'URL publique et l'indexation effective restent
      deux états distincts à vérifier après déploiement.
