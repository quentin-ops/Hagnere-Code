# Dossier de travail — calculer le ROI d'une application métier

## Journal des quatre passes — reprise du giga-audit

Propriétaire éditorial unique : orchestrateur du giga-audit Hagnéré Code.

| Passe                        | État                      | Date            | Responsable                    | Snapshot                                                                 | Blocages                     |
| ---------------------------- | ------------------------- | --------------- | ------------------------------ | ------------------------------------------------------------------------ | ---------------------------- |
| 1. Recherche                 | Terminée — porte validée  | 25 juillet 2026 | orchestrateur du giga-audit    | `manifests/calculer-roi-application-metier-p1-2026-07-25-r1.sha256`      | aucun                        |
| 2. Rédaction et intégration  | Terminée — r4 gelée               | 25 juillet 2026 | orchestrateur, éditeur unique  | `manifests/calculer-roi-application-metier-p2-2026-07-25-r4.sha256`      | aucun                        |
| 3. Contre-audit indépendant  | r1/r2 NO-GO ; r3 GO ; r4 à revoir | 25 juillet 2026 | autre relecteur, lecture seule | r3 : `manifests/calculer-roi-application-metier-p2-2026-07-25-r3.sha256` | relecture indépendante de r4 |
| 4. Plume humaine et contrôle | Bloquée                           |                 | orchestrateur                  |                                                                          | P3 r4 non validée            |

Le statut « publiable » et la note 20/20 consignés plus bas décrivent le
contrôle antérieur au giga-audit. Ils sont conservés comme historique, mais
ils ne valident plus le snapshot courant. L'audit renforcé du 24 juillet 2026
a fixé le score de départ à **83/100**, avec **0 P0, 8 P1 et 6 P2**. La
présente reprise ferme la P1 et propose un troisième snapshot P2 après deux
refus indépendants successifs. Elle ne déclare ni la P3, ni la P4, ni la
publication, ni la production.

## 1. Fiche d'identité

```text
Slug : calculer-roi-application-metier
Statut actuel : P2 r4 gelée — revalidation indépendante P3 à exécuter
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
Date de la recherche : 20 juillet 2026, reprise internationale le 25 juillet 2026
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

### Archive des calculs antérieurs — non applicable au snapshot courant

> Tout le bloc ci-dessous, jusqu'à la section 6, photographie le modèle
> antérieur au giga-audit. Il conserve les hypothèses et contradictions qui ont
> déclenché la reprise, mais ne doit plus servir à la page, à la comparaison ou
> à une validation. Le modèle courant et ses calculs reproductibles commencent
> en sections 13 et 14.

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

> **Archive antérieure au giga-audit.** Cette table conserve l'ancien calcul
> sans montée d'adoption et sans ventilation fiable du temps interne des
> options simples. Elle ne doit plus servir à rédiger, comparer ou valider la
> page. Le modèle courant commence en section 13 et ses résultats recalculés
> figurent en section 14.

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

### Scorecard historique après les corrections du 20 juillet 2026 — obsolète

Cette grille utilisait l'ancien barème sur 20 et précède le giga-audit
renforcé. Elle explique pourquoi la page avait été ouverte à la publication,
mais elle ne doit plus être lue comme la note actuelle ni comme une porte P4
valide. Le score courant de départ est **83/100** dans
`docs/audits/giga-audit-2026-07-24/guides/calculer-roi-application-metier.md`.

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

Score historique interne : **20/20** après levée des deux réserves modérées du
ré-audit de l'époque. Le commanditaire avait explicitement délégué et autorisé
l'arbitrage de publication ; aucun test lecteur réel n'était revendiqué. Ce
score est désormais supersédé par le giga-audit à 83/100.

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

### Passe pédagogique du 21 juillet 2026

- Le titre et le corps montrent désormais le contre-calcul naïf complet :
  113 740,80 € de bénéfices fictifs, puis
  (113 740,80 − 54 800) / 54 800 × 100 = 107,56 %.
- Ce résultat est présenté comme environ 108 %, puis comparé au scénario
  central corrigé d’environ 16 % ; les autres scénarios et options sont
  également arrondis dans les tableaux.
- Les quatre chapitres de contrôle final ont été regroupés en une seule
  progression : tester les hypothèses, faire valider, mesurer, puis décider.
- Le rendu compte 5 609 mots, 8 H2 et 7 tableaux, contre 6 348 mots, 11 H2 et
  11 tableaux avant cette passe. Le registre affiche 28 minutes à 200
  mots/minute.

### Vérifications

- [x] faits, citations et fraîcheur revérifiés ;
- [x] calculs refaits ;
- [x] cas fictif identifié, aucun cas réel inventé ;
- [x] aucune ressource téléchargeable promise ;
- [x] metadata, JSON-LD, registre, maillage et ancres cohérents ;
- [x] TypeScript, ESLint, batterie SEO, build et postbuild du snapshot
      d'intégration passés après corrections ; résultats courants à lire dans
      `PRE-LAUNCH-CHECKLIST.md` ;
- [x] rendu observé aux dix largeurs requises ;
- [x] ré-audit indépendant passé après corrections ;
- [x] contrôles techniques et build repassés après les deux dernières corrections ;
- [x] porte éditoriale levée ; l'URL publique et l'indexation effective restent
      deux états distincts à vérifier après déploiement.

---

## 10. Reprise P1 du giga-audit — 25 juillet 2026

### Décision de recherche

La page répond déjà mieux que la plupart des contenus commerciaux à deux
risques : elle ne transforme pas tout le temps libéré en économie de salaire et
elle laisse le sur-mesure perdre. Le gain d'information mondial encore absent
est ailleurs :

1. appliquer une montée progressive de l'adoption au lieu d'un bénéfice stable
   dès le premier mois d'usage ;
2. calculer réellement les sensibilités et les valeurs de bascule ;
3. montrer la charge économique du statu quo sans la faire passer pour une
   économie automatiquement récupérable ;
4. permettre au lecteur de comparer une option standard et un projet envisagé
   avec ses propres données ;
5. rendre les hypothèses exportables sans formulaire, email ou envoi de
   données.

La P2 doit donc ajouter un calculateur local, deux options comparables, un
export CSV, des résultats séparant valeur de capacité et économie de caisse,
et un tableau de sensibilité. Elle ne doit pas ajouter une fourchette de prix
de marché, un rendement moyen ni une promesse de rentabilité.

### Phrase réelle et réponse attendue

```text
Phrase du dirigeant :
« Le devis annonce beaucoup d'heures gagnées, mais est-ce que cet argent
existera vraiment et à partir de quand ? »

Réponse en une phrase :
Le projet ne mérite un feu vert que si son coût complet reste couvert après
une montée d'adoption, un retard crédible et une baisse des heures réellement
réutilisées ; sinon il faut tester, simplifier ou reporter.

Décision :
Comparer une option simple ou standard au projet envisagé sur le même
calendrier, puis choisir feu vert, pilote ou report selon la marge au point de
bascule.
```

### Questions supplémentaires découvertes

- Quel est le coût économique du travail actuel, même si ce n'est pas une
  nouvelle dépense ?
- Quelle part des heures supprimées sera réellement réutilisée ?
- Combien de mois faut-il pour atteindre le régime stable ?
- À quel pourcentage d'heures réutilisées le ROI tombe-t-il à zéro ?
- Quel coût initial maximal le projet peut-il supporter ?
- À quel niveau de bénéfice le sur-mesure devient-il meilleur que le standard ?
- Le résultat reste-t-il positif à 24 mois, avec trois ou six mois de retard ?
- Quelle hypothèse vient d'une mesure et laquelle reste à confirmer ?
- Qui possède chaque bénéfice après la fin du projet ?
- Quelles conséquences négatives ou tâches déplacées faut-il suivre ?

## 11. Benchmark mondial consolidé

Requêtes examinées le 25 juillet 2026 en français, anglais et allemand :
`calcul ROI application métier`, `custom software ROI calculator`,
`digital project benefits adoption sensitivity`, `IT
Wirtschaftlichkeitsbetrachtung WiBe Nutzen Kosten`.

### France

Les résultats français représentatifs couvrent déjà la formule ROI, le TCO, un
exemple chiffré, des coûts cachés et parfois un simulateur. Leur faiblesse
récurrente est de monétiser rapidement le temps, d'utiliser un seul scénario
favorable ou d'aboutir mécaniquement au développement vendu par l'auteur. Les
pages commerciales restent utiles pour mesurer la couverture de l'intention,
pas pour établir des taux, prix ou délais.

Sources publiques françaises conservées :

- [France Num — mesurer les effets de la transformation numérique](https://www.francenum.gouv.fr/guides-et-conseils/strategie-numerique/comprendre-le-numerique/comment-mesurer-les-effets-de-la),
  pour la base, les objectifs et le suivi des effets ;
- [Insee — coût horaire du travail selon l'activité](https://www.insee.fr/fr/statistiques/2381340),
  comme repère de périmètre, jamais comme coût propre de l'entreprise ;
- la page Anact historiquement citée a été inaccessible pendant le
  contre-audit. Elle ne sera plus une preuve décisive de la P2 ; la page peut
  la conserver seulement comme ressource complémentaire explicitement
  bornée, ou la retirer.

### Royaume-Uni

- [HM Treasury — Green Book 2026](https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2026) :
  options comparables, biais d'optimisme, risque, sensibilité et valeur de
  bascule. Le cadre est public et plus large qu'une PME ; il sert à la méthode,
  jamais à importer un pourcentage générique.
- [UK Government — Digital and Data Benefits Framework 2026](https://www.gov.uk/government/publications/digital-and-data-benefits-framework/digital-and-data-benefits-framework) :
  base de référence, adoption, coûts de service, non-double-comptage,
  scénarios, productivité et économies séparées.

Apport retenu : une estimation ne devient défendable qu'en montrant l'effet
d'une hypothèse à la fois, puis un scénario où plusieurs déceptions se
combinent.

### États-Unis

- [US GAO — Cost Estimating and Assessment Guide, GAO-20-195G](https://www.gao.gov/assets/gao-20-195g.pdf) :
  identifier les facteurs, documenter leurs bornes, recalculer une variable à
  la fois, consigner les résultats, puis mettre l'estimation à jour avec les
  coûts réels.

Apport retenu : le `+20 %` arbitraire n'est pas une preuve. Le calculateur peut
proposer une valeur d'exemple, mais demande au lecteur de la remplacer par
l'écart constaté sur ses devis, délais ou projets comparables.

### Australie

- [Australian Digital Transformation Agency — Benefits Management Guidance](https://www.digital.gov.au/policy/benefits-management-policy/guidance) :
  bénéfice mesurable ou observable, base et cible, conséquences négatives,
  dépendances, responsable permanent et suivi au-delà du projet ;
- [Australian DTA — Benefits Management Standard](https://www.digital.gov.au/policy/benefits-management-policy/standard) :
  source de mesure, méthode, date de réalisation, niveau de confiance,
  tolérance, hypothèses et dépendances.

Apport retenu : le prestataire livre l'outil, mais le métier reste responsable
de la réalisation du bénéfice. Le calcul doit donc afficher séparément
l'adoption et les économies de caisse.

### Allemagne

- [Bundesministerium der Finanzen — Arbeitsanleitung
  Wirtschaftlichkeitsuntersuchungen, version 2026](https://www.verwaltungsvorschriften-im-internet.de/bsvwvbund_13012026_IIA3H100500150006005DOKCOO7005100213785493.htm) :
  comparaison économique, analyse coûts-bénéfices et possibilité de combiner
  des résultats monétaires avec une appréciation non monétaire ;
- [WiBe-Kalkulator — manuel officiel](https://download.gsb.bund.de/BundesCIO/WiBe_Kalkulator/v1-3-0/WiBe-Kalkulator_v1-3-0_Benutzerhandbuch.pdf) :
  cadre public allemand pour l'économie des mesures informatiques, incluant
  valeur monétaire et valeur élargie.

Apport retenu : un bénéfice stratégique ou qualitatif peut peser dans la
décision sans être artificiellement converti en euros ni ajouté au ROI.

### Canada

- [Government of Canada — Policy on Cost-Benefit Analysis](https://www.canada.ca/en/government/system/laws/developing-improving-federal-regulations/requirements-developing-managing-reviewing-regulations/policy-cost-benefit-analysis.html) :
  scénario de référence, transparence des hypothèses, limites et sensibilité.

### Critère de saturation

Après la ressource allemande, les nouvelles pages consultées ont répété les
mêmes familles : base, options, coût de cycle de vie, adoption, bénéfices et
conséquences négatives, responsable, sensibilité, valeur de bascule,
actualisation facultative et suivi réel. Aucun nouveau type de décision
indispensable n'est apparu. La collecte s'arrête donc sur ces six marchés ; la
P2 doit maintenant matérialiser ces angles au lieu d'accumuler des URL.

## 12. Matrice de gain d'information validée pour la P2

| Question décisive                        | Meilleure réponse française       | Apport international                  | Page actuelle                                   | Manque réel                                  | Amélioration vérifiable P2                                                                   |
| ---------------------------------------- | --------------------------------- | ------------------------------------- | ----------------------------------------------- | -------------------------------------------- | -------------------------------------------------------------------------------------------- |
| Le statu quo est-il gratuit ?            | coût actuel évoqué                | base et scénario de référence         | 0 € de coût nouveau, avec une réserve textuelle | charge économique invisible dans le résultat | afficher la valeur du travail et des décaissements actuels séparément des gains récupérables |
| Le bénéfice arrive-t-il immédiatement ?  | rarement modélisé                 | adoption et dépendances explicites    | régime stable dès le mois 5                     | surestimation du début                       | montée linéaire paramétrable et mois équivalents de bénéfice                                 |
| Quelle hypothèse fait tomber le projet ? | questions qualitatives            | sensibilité et switching values       | aucun résultat numérique                        | fragilité invisible                          | retard +3/+6 mois, horizon 24 mois, coût stressé et taux de réutilisation de rupture         |
| Une option standard fait-elle mieux ?    | comparaisons souvent asymétriques | options au même calendrier            | table fixe                                      | données non modifiables                      | deux options éditables, calculées avec la même base et le même horizon                       |
| Le temps libéré est-il de la caisse ?    | prudence déjà forte               | bénéfices par catégorie               | explication dans la prose                       | résultats encore agrégés                     | cartes séparées capacité réutilisée, dépenses évitées, coût et valeur nette                  |
| Que faire des inconnues ?                | souvent zéro implicite            | confiance, tolérance et dépendances   | réserve générale                                | sortie peut sembler définitive               | case « coûts à confirmer » qui interdit de classer l'option comme gagnante                   |
| Le lecteur peut-il agir sans contact ?   | simulateurs concurrents           | profils et outils exportables         | fiche à recopier                                | pas d'outil                                  | calcul local et export CSV des hypothèses/résultats                                          |
| Que mesurer après lancement ?            | KPI génériques                    | benefit owner, base, cible, tolérance | M1/M3/M6 présents                               | propriété peu liée au calcul                 | rappeler propriétaire, adoption, coût réel et décision dans l'export                         |

## 13. Modèle économique retenu pour le calculateur

### Base commune

```text
Valeur annuelle de la charge actuelle
  = heures annuelles observées × coût horaire propre à l'entreprise

Valeur économique du statu quo sur l'horizon
  = (valeur annuelle de la charge + décaissements annuels observés)
    × horizon / 12
```

Cette valeur rend la situation actuelle visible. Elle n'est pas comptée comme
un gain. Seule la part des heures réellement réutilisée et la part des
décaissements réellement évitée deviennent des bénéfices.

### Adoption progressive

Pour une montée de six mois, le bénéfice vaut successivement `1/6`, `2/6`,
`3/6`, `4/6`, `5/6`, puis `6/6` du régime stable. Les mois suivants restent à
100 %. La P2 expliquera qu'une autre courbe peut être plus juste ; cette courbe
linéaire est une approximation modifiable, pas une loi d'adoption.

### Coût complet d'une option

```text
Coût complet connu
  = coûts externes initiaux
    + heures internes projet × coût horaire
    + coût mensuel × mois en service
    + coût de sortie
```

Si un coût manque, le calcul affiche le total renseigné, mais interdit de
présenter l'option comme la moins chère ou comme un verdict définitif.

### Résultats séparés

- valeur de la capacité réellement réutilisée ;
- décaissements réellement évités ;
- bénéfices économiques cumulés ;
- coût complet connu ;
- valeur économique nette ;
- ROI économique simple cumulé ;
- premier mois où le cumul économique franchit zéro ;
- valeur de la charge actuelle sur la même durée ;
- pourcentage d'heures réutilisées nécessaire pour atteindre zéro ;
- coût initial maximal supportable ;
- pourcentage nécessaire pour battre l'autre option.

La valeur économique nette et le ROI ne sont ni une prévision de trésorerie,
ni une promesse de gain, ni un conseil financier.

## 14. Recalcul du cas fictif avec adoption

Base inchangée : `723,2 h/an`, `36 €/h`, `2 400 €/an` de décaissements,
horizon 48 mois.

### Projet sur mesure, montée d'adoption de six mois

| Élément                           | Calcul                         |    Résultat |
| --------------------------------- | ------------------------------ | ----------: |
| mois en service                   | mois 5 à 48                    |          44 |
| mois équivalents à plein bénéfice | `1/6 + 2/6 + … + 6/6 + 38`     |        41,5 |
| valeur de capacité réutilisée     | `26 035,20 × 60 % / 12 × 41,5` | 54 023,04 € |
| décaissements évités              | `2 400 × 70 % / 12 × 41,5`     |  5 810,00 € |
| bénéfices cumulés                 | somme des deux lignes          | 59 833,04 € |
| coût complet                      | `36 000 + 400 × 44 + 1 200`    | 54 800,00 € |
| valeur économique nette           | bénéfices − coût               |  5 033,04 € |
| ROI économique simple             | `5 033,04 / 54 800 × 100`      |      9,18 % |

L'ancien scénario à 15,76 % supposait le régime stable dès le début du mois 5.
La P2 doit montrer les deux conventions et retenir la montée progressive comme
scénario central prudent.

### Deux options plus simples avec montée d'adoption

| Option fictive              | Montée |   Bénéfices |                                                       Coût complet | Valeur nette |      ROI |
| --------------------------- | -----: | ----------: | -----------------------------------------------------------------: | -----------: | -------: |
| simplifier l'existant       | 2 mois | 28 941,60 € |       2 560 € externes + 40 h × 36 € + 75 € × 47 + 475 € = 8 000 € |  20 941,60 € | 261,77 % |
| logiciel standard configuré | 3 mois | 54 216,00 € |  13 840 € externes + 60 h × 36 € + 325 € × 46 + 1 050 € = 32 000 € |  22 216,00 € |  69,43 % |
| sur mesure                  | 6 mois | 59 833,04 € | 32 400 € externes + 100 h × 36 € + 400 € × 44 + 1 200 € = 54 800 € |   5 033,04 € |   9,18 % |

Le standard devance ici la simplification de seulement **1 274,40 €**, soit
35,4 heures au coût fictif de 36 €/h. Ce classement n'est donc pas robuste à
une migration, une formation ou une reprise de données plus longue. Le
sur-mesure doit réutiliser environ **79,08 %** des heures supprimées, toutes les
autres hypothèses restant identiques, pour atteindre la valeur nette nominale
du standard.

### Sensibilités obligatoires

| Test isolé sur le sur-mesure              | Valeur nette |      ROI |
| ----------------------------------------- | -----------: | -------: |
| central : mois 5, montée 6 mois           |   5 033,04 € |   9,18 % |
| mise en service retardée de 3 mois        |   1 907,76 € |   3,56 % |
| mise en service retardée de 6 mois        |  −1 217,52 € |  −2,32 % |
| horizon réduit à 24 mois                  | −19 969,20 € | −44,18 % |
| coûts initiaux externes et internes +20 % |  −2 166,96 € |  −3,50 % |

Le `+20 %` est une hypothèse pédagogique. Le champ visible demandera de la
remplacer par un écart historique ou documenté. Le projet atteint zéro autour
de **54,41 %** d'heures réellement réutilisées ; son coût initial économique
maximal est d'environ **41 033 €**, soit une marge d'environ 5 033 € par rapport
aux 36 000 € du cas.

## 15. Position Hagnéré Code à rendre visible

```text
Recommandation par défaut :
mesurer un cycle, comparer d'abord une amélioration simple et un outil
standard, puis ne financer le sur-mesure que si sa valeur nette reste meilleure
après adoption, retard et coûts de sortie.

Cas où le sur-mesure gagne :
le standard impose des contournements mesurés, des licences ou opérations
récurrentes élevées, ou ne couvre pas une règle métier réellement
différenciante ; les données et responsables nécessaires sont disponibles.

Signal de révision :
le résultat tombe sous zéro avec trois à six mois de retard, le taux
d'adoption n'est pas mesurable, un coût reste inconnu ou le bénéfice exige une
réaffectation du temps que personne n'a décidée.

Ce que nous déconseillons même si nous pourrions le vendre :
développer pour du confort non mesuré, pour remplacer une fonction déjà payée,
ou pour obtenir un ROI qui n'existe que grâce à une aide ou une vente future
non confirmée.
```

Conflit d'intérêts : Hagnéré Code vend des applications sur mesure. La P2
conserve cette déclaration avant la comparaison et permet réellement à
l'option standard de gagner.

## 16. Plan annoté de la P2

| Section         | Question résolue                       | Preuve ou calcul                        | Conséquence                         | Format                |
| --------------- | -------------------------------------- | --------------------------------------- | ----------------------------------- | --------------------- |
| ouverture       | quelle décision prendre ?              | réponse et trois conditions             | mesurer avant de signer             | prose courte          |
| cinq données    | que faut-il réunir ?                   | base, bénéfices, coûts, adoption, seuil | inconnue visible                    | cartes/listes         |
| statu quo       | que coûte le travail actuel ?          | valeur économique séparée               | ne pas confondre charge et économie | exemple               |
| bénéfices       | quelles heures deviennent une valeur ? | capacité vs caisse                      | aucun double comptage               | tableau court         |
| TCO             | quels coûts compter ?                  | formule et inconnues                    | total connu, pas faux total         | liste                 |
| cas fictif      | que change l'adoption ?                | ancien 15,76 % vs 9,18 %                | marge fragile                       | calcul commenté       |
| comparaison     | quelle option gagne ?                  | trois options même horizon              | standard dans le cas fictif         | cartes                |
| calculateur     | que donnent mes chiffres ?             | moteur pur testé                        | agir sans contact                   | composant local + CSV |
| sensibilité     | quand le choix s'inverse ?             | retard, horizon, coût, taux             | pilote/report                       | cartes                |
| responsabilités | qui réalise le bénéfice ?              | DTA/France Num adaptés                  | owner métier                        | checklist             |
| sortie          | feu vert, pilote, simple ou report     | règles explicites                       | prochaine action                    | verdict + CTA unique  |
| sources         | quelles limites ?                      | sources primaires mondiales             | pas de taux importé                 | liste                 |

Différences conservées avec les guides voisins : calcul falsifiable, adoption
mensuelle, deux options éditables, valeur du statu quo visible, export local,
valeurs de bascule et possibilité explicite de ne pas développer.

## 17. Actif signature et contrat de données

```text
Actif : calculateur comparatif de ROI économique d'une application métier
Résultat autonome : comparaison de deux options, sensibilité, valeurs de
bascule et export CSV
Données : uniquement dans l'état local du navigateur ; aucun envoi serveur
Entrées : base actuelle, horizon, coûts, calendrier, adoption, gains
Sorties : capacité, caisse, TCO, valeur nette, ROI, payback, seuils
Conclusion « ne pas investir » : oui
Inconnues : case explicite par option ; aucun zéro interprété comme une preuve
Export : CSV UTF-8 des hypothèses et résultats
Limites : pas de fiscalité, inflation, financement, VAN, risque probabiliste
ou promesse de gain
Maintenance : tests purs, test d'interface, contre-calcul du cas fictif
```

## 18. Rapport de sortie P1

```text
PASSE 1 TERMINÉE
Slug : calculer-roi-application-metier
Lecteur : dirigeant de TPE/PME qui doute que les heures annoncées deviennent
une valeur réellement utilisable
Décision : comparer une option simple/standard au projet, puis feu vert,
pilote ou report selon la marge aux hypothèses fragiles
Angle : business case falsifiable avec adoption et valeurs de bascule
Marchés : France, Royaume-Uni, États-Unis, Australie, Allemagne, Canada
Saturation : base, options, cycle de vie, adoption, owner, disbenefits,
sensibilité et suivi répétés sans nouvel angle décisionnel
Sources décisives : France Num, Insee, Green Book 2026, UK Digital and Data
Benefits Framework, US GAO-20-195G, Australian DTA, BMF/WiBe
Incertitudes exclues : taux moyen de réussite, délai de retour moyen, prix de
marché, aide fiscale, courbe d'adoption universelle
Action autonome : calcul local et export CSV
CTA : faire relire les hypothèses après le calcul, sans promesse de ROI
Plan : sections 10 à 17 du présent dossier
Porte : validée pour lancer une P2 successive par l'éditeur unique
```

## 19. Rapport de sortie P2 r4

```text
PASSE 2 R4 TERMINÉE
Slug : calculer-roi-application-metier
Snapshot : manifests/calculer-roi-application-metier-p2-2026-07-25-r4.sha256
Statut de la route : ready-for-human-review ; noindex, nofollow
Publication : non demandée et non déclarée
Contre-audit P3 r1 : NO-GO à 82/100 ; P0=0 ; P1=5
Contre-audit P3 r2 : NO-GO ; P0=0 ; P1=1 ; P2=2
Contre-audit P3 r3 : GO à 96/100 ; P0=0 ; P1=0 ; P2=2
Contre-audit P3 r4 : à exécuter en lecture seule sur le snapshot ci-dessus
```

### Améliorations vérifiables apportées au lecteur

- la réponse centrale ne confond plus temps libéré, économie de caisse et
  bénéfice réellement réutilisable ;
- le statu quo, une solution standard et le sur-mesure sont calculés sur la
  même base et le même horizon ;
- la montée d'adoption est mensuelle : le cas central passe de l'ancien
  raccourci à 15,76 % à un ROI économique simple de 9,18 % ;
- les coûts inconnus interdisent tout gagnant et tout seuil décisionnel ;
  l'interface conserve les résultats partiels en les qualifiant explicitement,
  tandis que la synthèse et le CSV neutralisent chaque résultat dérivé de
  l'option incomplète, y compris retour, valeur nette, ROI et sensibilités ;
- les retards de trois et six mois, l'horizon de 24 mois et un stress de coût
  montrent quand le projet devient déficitaire ;
- les valeurs de bascule indiquent le taux de réutilisation nécessaire, le
  coût initial maximal supportable et le seuil pour battre l'option standard ;
- le calculateur fonctionne localement, sans formulaire ni envoi de données,
  et permet de copier une synthèse ou d'exporter un CSV de suivi ;
- la conclusion du cas fictif déconseille explicitement le développement sur
  mesure et signale que l'écart entre simplification et standard n'est pas
  robuste, malgré le conflit d'intérêts de l'éditeur.

### Fichiers et preuves techniques

- page éditoriale :
  `src/app/guides/calculer-roi-application-metier/page.tsx` ;
- moteur de calcul pur et tests :
  `src/lib/application-roi.ts` et `src/lib/application-roi.test.ts` ;
- interface et tests d'interaction :
  `src/components/guides/ApplicationRoiCalculator.tsx` et
  `src/components/guides/ApplicationRoiCalculator.test.tsx` ;
- garde éditoriale :
  `src/lib/application-roi-guide-quality.test.ts` ;
- registre :
  `src/lib/guides.ts`, avec une date de modification au 25 juillet 2026, une
  lecture mesurée à 6 305 mots, soit 32 minutes, et le statut
  `ready-for-human-review`.

Le moteur a été contrôlé sur les résultats centraux, les égalités, les coûts
inconnus, les seuils hors domaine, les projets mis en service après l'horizon,
les retours impossibles avant lancement et les valeurs numériques trop
grandes. La compilation TypeScript, le lint ciblé et les 23 tests ciblés
étaient verts au gel P2 r4.

### Contrôle du rendu local

Une BAT navigateur locale a couvert le haut de page, le calculateur, les
résultats, les seuils, les exports, la réinitialisation, le cas de coût inconnu,
le titre, le canonique, les données structurées et la consigne
`noindex, nofollow`.

Le contrôle mobile a détecté une perte d'information dans le tableau de
sensibilité : la colonne « Lecture » sortait de la zone visible. La P2 a
remplacé ce tableau, sur petit écran et tablette, par des cartes empilées qui
conservent chaque scénario, résultat et interprétation. Les largeurs CSS
effectives 640, 667, 700 et 767 px montrent les cartes, sans débordement
horizontal de page ; à 1 280 px, le tableau tient dans sa zone. Le rendu à 487
px confirme aussi que les aides de cadrage, migration, recette, formation,
exploitation et sortie restent lisibles sous chaque champ.

L'image Open Graph corrigée a été inspectée à partir de son PNG naturel
1 200 × 630 : les trois valeurs ont désormais le même poids visuel, sans barre
faussement proportionnelle. Le cas de coût inconnu a été rejoué dans le
navigateur : aucun gagnant, seuils non calculables, sensibilités provisoires et
statut vocal qualifié. Aucun avertissement ni erreur d'exécution n'a été
observé dans la console ; seuls les messages de développement et de
rafraîchissement local étaient présents.

Cette BAT locale ne vaut ni test par un dirigeant externe, ni publication, ni
preuve de production ou d'indexation. La porte P2 autorise seulement le
contre-audit indépendant P3 du snapshot figé.

### Invalidation du snapshot P2 r1 par le contre-audit P3

Le contre-audit indépendant a classé cinq défauts en P1 :

1. l'image Open Graph utilisait trois longueurs de barres arbitraires, sans
   rapport avec les valeurs du cas fictif ;
2. le résumé et le CSV exportaient encore un seuil chiffré pour comparer les
   options lorsqu'au moins un coût était déclaré inconnu.
3. le comparatif mettait zéro heure interne sur l'option standard et ne
   ventilait pas les temps de cadrage, migration, recette et formation des
   options plus simples.
4. une consigne demandait d'allonger la montée d'adoption alors que les
   scénarios chiffrés décalaient la mise en service en conservant cette montée.
5. les définitions des huit champs de coût, calendrier et bénéfice de chaque
   option étaient réservées aux lecteurs d'écran et invisibles aux dirigeants
   voyants.

Le snapshot r1 est donc **NO-GO et invalidé**. Les barres comparatives ont été
remplacées par trois cartes de même poids visuel. Les exports indiquent
désormais que le seuil inter-options est non classable tant que les coûts
restent incomplets, sans exporter le pourcentage. L'interface qualifie aussi
les sensibilités comme provisoires et retire ses seuils décisionnels lorsque
les coûts du projet sont incomplets. Les trois options intègrent maintenant des
heures internes fictives explicites et une ventilation complète du coût ;
l'écart de 1 274,40 € entre simplification et standard est présenté comme
fragile, pas comme un verdict robuste. La consigne distingue enfin le retard de
mise en service d'une adoption plus lente. Les définitions de cadrage,
migration, recette, formation, exploitation et sortie sont visibles sous
chaque champ.

Les six P2 du contre-audit r1 sont également fermés dans r2 :

- le champ de base parle de décaissements réellement évitables, pas seulement
  d'erreurs ;
- chaque saisie invalide reçoit un message visible au niveau du champ ;
- les cartes de sensibilité restent affichées jusqu'au mode bureau large ;
- la page décrit le calcul hypothétique à 15,76 % sans parler d'une ancienne
  version éditoriale ;
- tout l'ancien bloc de calcul du dossier est marqué comme archive non
  applicable ;
- le CSV enregistre la version du modèle, la date d'export, la source et la
  confiance à compléter pour les hypothèses.

Ces corrections et leurs tests ont constitué le snapshot r2. Son
contre-audit a néanmoins trouvé une fermeture incomplète : quand le coût du
projet était marqué inconnu, la synthèse et le CSV exportaient encore le seuil
d'équilibre propre au projet, son coût initial maximal et toutes les
sensibilités chiffrées. L'interface les neutralisait ou les qualifiait, mais
pas les deux supports exportables. Le test ne cherchait que la fuite du seuil
inter-options et ne protégeait donc pas ces sorties. Le registre annonçait
aussi 31 minutes pour 6 305 mots, soit 32 minutes avec la convention du site,
et les libellés de l'image Open Graph manquaient d'espace avec leur valeur.

Le snapshot r2 est donc lui aussi **NO-GO et invalidé**. La r3 remplace chaque
résultat dépendant d'une option aux coûts incomplets par « non calculable » dans
la synthèse et le CSV, neutralise toutes les sensibilités exportées du projet
incomplet, ajoute les tests de non-fuite, corrige la durée de lecture à 32
minutes et espace explicitement les libellés de l'image Open Graph. Le modèle
exporté porte la version `2026-07-25-r3`.

Ces corrections ont été gelées dans le snapshot r3. Son contre-audit a donné
un **GO P3 à 96/100**, sans P0 ni P1, avec deux P2 de preuve interne : le
présent rapport décrivait trop largement la neutralisation dans l'interface,
et les tests ne verrouillaient pas explicitement le ROI, le mois de retour, le
cas « standard seul incomplet » et le cas « deux options incomplètes ».

La r4 reformule la distinction exacte entre interface, synthèse et CSV, puis
ajoute ces quatre contrôles de non-régression. Le modèle de calcul reste
`2026-07-25-r3` car aucune formule ni sortie applicative n'a changé depuis le
GO r3 ; seule la preuve éditoriale et de test est complétée.

Ces corrections sont gelées dans le snapshot r4. La porte P2 est fermée, mais
P3 reste **à revalider** sur ce snapshot exact avant toute P4.
