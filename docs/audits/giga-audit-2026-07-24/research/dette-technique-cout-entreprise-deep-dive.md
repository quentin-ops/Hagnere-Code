# Deep dive concurrentiel et factuel — `dette-technique-cout-entreprise`

Date de recherche et de vérification : 24 juillet 2026  
Périmètre : recherche P1 renforcée, préparation de réécriture et protocole de
contre-audit.  
Page publique examinée, mais non modifiée :
`src/app/guides/dette-technique-cout-entreprise/page.tsx`.  
Public : dirigeant, direction métier ou indépendant non technique dont une
application utile devient lente, risquée ou coûteuse à faire évoluer.

## 1. Verdict exécutif

La page actuelle a une bonne thèse : un logiciel ancien n'est pas
automatiquement un mauvais logiciel et une équipe ne doit pas obtenir un budget
de réécriture avec la seule expression « dette technique ». Le carnet des cinq
changements récents est un bon point de départ. Le guide protège déjà le lecteur
contre deux erreurs commerciales fréquentes : le diagnostic par l'âge et la
réécriture présentée comme conclusion avant l'audit.

Il lui manque cependant le cœur économique promis par son titre :

1. aucun calcul annuel complet ne sépare capacité interne, sorties de
   trésorerie, exposition au risque et manque à gagner ;
2. les options sont décrites, mais pas comparées avec les mêmes fonctions, le
   même volume, le même horizon et les mêmes postes de coût ;
3. le lecteur ne connaît pas la valeur qui ferait basculer la décision ;
4. les cinq changements et les trois mesures suivantes ressemblent à une règle
   statistique alors qu'il s'agit seulement d'un échantillon de départ ;
5. aucune ressource autonome ne lui permet de refaire le raisonnement avec ses
   propres factures, temps et incidents.

La future version doit donc répondre en langage simple dès l'ouverture :

> Ne réécrivez pas une application parce qu'elle est ancienne, parce qu'un outil
> lui attribue une mauvaise note ou parce que chaque évolution énerve l'équipe.
> Mesurez d'abord le coût des retards, incidents et contournements sans compter
> deux fois les mêmes heures. Comparez ensuite, sur un même horizon, l'attente
> surveillée, une stabilisation ciblée, une rénovation progressive, un logiciel
> standard et une réécriture. Dans de nombreux cas, ne pas réécrire est la
> meilleure décision. Dans d'autres, une fin de support, une impossibilité de
> sécuriser les données ou un modèle métier devenu incompatible rend l'attente
> plus dangereuse que le chantier.

### Position professionnelle à assumer

Nous déconseillons d'autoriser une réécriture tant que trois preuves ne sont pas
réunies :

- une charge annuelle attribuable est mesurée ou encadrée par une fourchette ;
- les options moins irréversibles ont été chiffrées puis rejetées pour une
  raison vérifiable ;
- migration, coexistence, recette, retour arrière et retrait de l'ancien
  système ont un responsable et un coût.

Cette position ne signifie pas « ne jamais réécrire ». Elle signifie que le
prestataire qui pourrait vendre le chantier doit aussi être capable de
recommander une stabilisation limitée, un remplacement standard ou même
l'attente lorsqu'ils créent plus de valeur.

## 2. Question du lecteur et contrat de réponse

### Situation exacte

Une modification annoncée en deux jours en prend quinze. Une autre déclenche une
régression. Deux salariés contournent chaque semaine un export fragile. Le
prestataire parle de « dette technique » et propose soit un audit, soit une
refonte. Le dirigeant veut savoir :

- ce que cette situation coûte réellement ;
- quelle part est une dépense et quelle part est seulement une capacité
  immobilisée ;
- s'il vaut mieux attendre, réparer une zone, moderniser progressivement,
  acheter un produit standard ou reconstruire ;
- comment éviter qu'un chiffre spectaculaire serve à justifier une conclusion
  déjà choisie.

### Résultat que le guide doit produire

À la fin, le lecteur doit disposer de cinq résultats, pas seulement d'une
définition :

1. un coût annuel observé, décomposé et sans double comptage ;
2. une exposition au risque présentée à part ;
3. un manque à gagner éventuel avec probabilité et récupération explicites ;
4. un comparatif à 12, 24, 36 ou 60 mois sur un périmètre identique ;
5. une valeur de bascule : le niveau de friction ou de réduction nécessaire
   pour que l'investissement devienne préférable à l'attente.

### Mauvais usages à annoncer

Le guide ne permet pas :

- de valoriser comptablement une « dette » ;
- d'estimer une application sans accès aux équipes, incidents, factures et
  changements ;
- de transformer une note d'analyse statique en coût métier ;
- de garantir une économie, un délai, un ROI ou un classement Google ;
- de remplacer un audit de cybersécurité, un conseil juridique ou une
  estimation contractuelle.

## 3. Méthode de benchmark

### Requêtes et langues

Recherche menée le 24 juillet 2026, sans présenter l'ordre des résultats comme
un classement stable :

- français : `dette technique coût entreprise`, `calcul dette technique`,
  `modernisation logiciel ou réécriture`, `ROI refonte application` ;
- anglais États-Unis : `technical debt business cost`, `technical debt
calculator`, `legacy modernization ROI`, `refactor versus rewrite` ;
- anglais Royaume-Uni : `track technical debt`, `legacy technology cost`,
  `stabilise refactor rewrite software` ;
- allemand : `technische Schulden Kosten Unternehmen`, `Software
Modernisierung oder Neuentwicklung`, `Legacy Software stabilisieren
ablösen`.

### Hiérarchie des preuves

1. Les définitions, obligations de sécurité, méthodes de mesure et constats
   publics reposent d'abord sur des sources officielles ou de recherche :
   SEI/Carnegie Mellon, DORA, GAO, GOV.UK/GDS, HM Treasury, CNIL, BSI et
   IT-Planungsrat.
2. Les pages d'agences et cabinets servent à comprendre la concurrence
   éditoriale, les angles, les outils et les promesses commerciales. Leurs
   ratios ne deviennent pas des faits par répétition.
3. Les montants construits plus bas sont des scénarios fictifs, hors taxes et
   entièrement recalculables. Ils ne sont ni des tarifs de marché ni un cas
   client Hagnéré Code.

## 4. Benchmark des réponses concurrentes

| Ressource                                                                                                                                                                               | Pays                       | Ce qu'elle fait mieux que la page actuelle                                                                                                                                            | Limite ou risque                                                                                                                                                                           | Gain à produire sans copier                                                                                        |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| [Eleven Labs — Dette technique](https://eleven-labs.com/dette-technique/)                                                                                                               | France                     | Ton de praticien, nombreux symptômes, rôle du produit et intégration du refactoring au travail courant ; article mis à jour le 26 janvier 2026                                        | Très orienté équipe technique ; plusieurs prescriptions de cadence ne sont pas démontrées comme universelles ; aucun TCO comparable                                                        | Garder l'énergie et les cas concrets, mais conduire le dirigeant jusqu'à une décision chiffrée                     |
| [OCTO — Du passé ne pas faire table rase](https://blog.octo.com/la-fin-de-la-dette-technique-du-passe-ne-pas-faire-table-rase)                                                          | France                     | Opinion forte contre la métaphore vague et la table rase ; relie la difficulté technique aux conflits de pratiques et d'organisation                                                  | Article de 2019, réflexion experte plutôt que méthode économique ; la mise en pause préconisée n'est pas toujours praticable                                                               | Montrer que certaines frictions viennent du produit, des décisions et de l'organisation, puis chiffrer les options |
| [Transicio — Dette technique IT](https://www.transicio.com/publications/dette-technique-it-guide/)                                                                                      | France                     | Très large couverture COMEX : code, infrastructure, données, compétences, documentation, gouvernance et pitch                                                                         | Empile des pourcentages, seuils de couverture, délais et ratios de maintenance présentés comme repères généraux ; mélange parfois dette, obsolescence et maturité                          | Être plus crédible avec moins de ratios, mais des calculs reproductibles et des limites visibles                   |
| [Deloitte France / CAST — Dette technique en M&A](https://www.deloitte.com/content/dam/assets-zone2/fr/fr/docs/services/financial-advisory/2025/deloitte_dette-technique-m-and-a.pdf)   | France                     | Relie qualité logicielle, risque cyber, transaction et feuille de route ; traitement visuel de niveau direction                                                                       | Contexte M&A et promotion d'outils CAST ; les ratios de grands corpus et budgets IT ne sont pas transposables à une PME                                                                    | Expliquer pourquoi un score technique éclaire un risque sans connaître seul le coût métier                         |
| [Thoughtworks — The real cost of tech debt](https://www.thoughtworks.com/en-us/insights/podcasts/pragmatism-in-practice/The-real-cost-of-tech-debt-for-your-business-and-how-to-fix-it) | États-Unis / international | Traduit la dette en effets d'entreprise, insiste sur la visibilité, la baseline et la tendance ; rappelle que déplacer un système dans le cloud ne le rend pas magiquement moins cher | Format podcast long, peu de calculs exécutables et pas de comparaison homogène des options                                                                                                 | Reprendre le passage du vocabulaire technique au résultat métier, puis fournir les feuilles de calcul              |
| [TechnicalDebtCost — Legacy code refactoring cost](https://technicaldebtcost.com/legacy-code-refactoring-cost)                                                                          | États-Unis                 | Intention SEO très directe, fourchettes visibles, formule heures × taux et tables de dimensionnement                                                                                  | Les fourchettes par module dépendent fortement de conventions de lignes de code, de taux américains et d'une chaîne de sources hétérogène ; le site est aussi un concurrent de calculateur | Gagner sur la traçabilité des entrées réelles de l'entreprise, pas sur une fourchette plus spectaculaire           |
| [Dune Technology — Tech debt reduction](https://www.dunetech.co.uk/reduce-your-tech-debt)                                                                                               | Royaume-Uni                | Page de conversion simple, promesse de modernisation incrémentale sans interruption                                                                                                   | Bénéfices génériques, aucune hypothèse, aucun calcul, preuve ou contre-cas ; affirme que la vélocité sera maintenue                                                                        | Faire de la continuité une variable à chiffrer, pas une promesse absolue                                           |
| [Square Root Solutions — Software project rescue](https://square-root.co.uk/software-project-rescue/)                                                                                   | Royaume-Uni                | Donne des fourchettes d'audit, stabilisation et sauvetage ; répond explicitement à refactor/rebuild                                                                                   | Fourchettes commerciales non accompagnées d'un échantillon ou d'une méthode ; critères de réécriture trop larges                                                                           | Remplacer les fourchettes de marché par un coût d'équilibre propre au lecteur                                      |
| [TenMedia — Software-Modernisierung](https://www.tenmedia.de/de/kompetenzen/application-management/software-modernisierung)                                                             | Allemagne                  | Distingue modernisation et nouvelle construction ; dit clairement qu'un ancien logiciel stable, sûr et utile ne crée pas d'urgence                                                    | Position commerciale en faveur de la modernisation ; les économies et signaux ne sont pas quantifiés                                                                                       | Conserver le contre-cas « vieux mais rationnel », puis tester son coût sur plusieurs horizons                      |
| [TripleConsult — IT-Modernisierung](https://www.tripleconsult.de/services/it-modernisierung)                                                                                            | Allemagne                  | Parcours lisible analyse → stratégie → transformation ; options stabiliser, développer ou remplacer                                                                                   | Peu de contenu de décision et cas client trop peu détaillé pour recalculer un résultat                                                                                                     | Publier un cas fictif complet, avec données, formule et verdict inverse possible                                   |

### Saturation et espace éditorial disponible

Le marché est saturé sur :

- la métaphore des intérêts ;
- la typologie intentionnelle/involontaire ;
- les listes de code ancien, documentation manquante, dépendances obsolètes et
  tests insuffisants ;
- le conseil « mettez la dette dans le backlog » ;
- les pourcentages de budget ou de capacité dont le périmètre est rarement
  identique.

Le gain d'information encore disponible est beaucoup plus utile pour un
dirigeant :

- distinguer l'argent qui sort réellement de la capacité interne valorisée ;
- éviter que la même heure soit comptée dans le retard, l'incident et le manque
  à gagner ;
- présenter l'attente comme une vraie option de comparaison ;
- calculer une valeur de bascule, pas seulement un ROI central ;
- faire gagner des options différentes selon l'horizon et le niveau de
  friction ;
- inclure migration, double fonctionnement, recette, formation, maintenance et
  retrait de l'ancien système ;
- publier les hypothèses sous une forme téléchargeable et modifiable.

## 5. Sources primaires et portée exacte

| Fait ou principe utilisable                                                                                                                                                       | Source primaire                                                                                                                                                                                     | Date ou fraîcheur                                                                        | Ce que la source permet de dire                                                                                                                                                                 | Ce qu'elle ne permet pas de dire                                                                                |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| Une dette apparaît lorsqu'une approche avantageuse à court terme augmente la complexité et le coût à long terme ; il faut identifier des éléments concrets et leurs conséquences  | [Software Engineering Institute — Identify Technical Debt Items](https://www.sei.cmu.edu/library/managing-technical-debt-identify-technical-debt-items/)                                            | 22 septembre 2022                                                                        | Une fiche de dette doit relier une zone du système, une cause et une conséquence ; un inventaire rend la discussion métier-technique possible                                                   | Le SEI ne fournit aucun coût moyen, quota de budget ou seuil de réécriture                                      |
| Défauts, demandes, documentation courante et dette ne sont pas automatiquement la même chose                                                                                      | [SEI — Technical Debt Item Classification Guidance](https://www.sei.cmu.edu/documents/1468/2016_021_102_453522.pdf)                                                                                 | 2016, consulté le 24 juillet 2026                                                        | On doit filtrer les éléments avant de les qualifier de dette                                                                                                                                    | Un arbre de classification ne valorise pas l'impact métier                                                      |
| La performance de livraison se suit avec cinq mesures de débit et d'instabilité                                                                                                   | [DORA — Software delivery performance metrics](https://dora.dev/guides/dora-metrics/)                                                                                                               | mise à jour du 5 janvier 2026                                                            | Baseline et tendance peuvent couvrir délai de changement, fréquence, récupération, échec et reprises de déploiement                                                                             | Les métriques DORA ne mesurent pas le « montant » de dette et ne prouvent pas seules une causalité              |
| Un plan de prévention du legacy nomme propriétaires, risque, financement et actifs                                                                                                | [GOV.UK — Prevent technical debt and legacy](https://www.gov.uk/guidance/prevent-technical-debt-and-legacy)                                                                                         | 23 février 2024, mise à jour du 23 octobre 2024                                          | Gouvernance, budget et responsabilité font partie de la décision                                                                                                                                | Cadre du gouvernement britannique, pas obligation générale d'une PME française                                  |
| Un registre peut rester léger ; impact et effort sont subjectifs ; une dette à risque élevé peut être tolérée si le retrait est proche                                            | [GDS Way — How to track technical debt](https://gds-way.digital.cabinet-office.gov.uk/standards/technical-debt.html)                                                                                | relu le 24 octobre 2025 ; revue annoncée pour avril 2026 non visible au jour du contrôle | Une dette enregistrée n'est pas une priorité automatique ; l'impact doit être revu lorsque l'usage change                                                                                       | Les couleurs haut/moyen/bas ne constituent pas une mesure monétaire objective                                   |
| Un plan de modernisation doit décrire jalons, travail et sort de l'ancien système                                                                                                 | [GAO-25-107795 — Critical legacy systems](https://www.gao.gov/products/gao-25-107795)                                                                                                               | 17 juillet 2025 ; état de recommandation actualisé en février 2026                       | La disposition du legacy et les jalons sont des postes obligatoires d'un comparatif sérieux                                                                                                     | Les coûts de systèmes fédéraux américains ne se transposent pas à une PME                                       |
| Des économies prévues peuvent rester non réalisées ; migration et fonctions retirées changent le résultat                                                                         | [GAO-26-107737 — Technology Modernization Fund](https://www.gao.gov/products/gao-26-107737)                                                                                                         | 23 juillet 2026                                                                          | Prévision et résultat doivent être séparés ; sur six projets terminés attendant des économies, deux étaient dans la cible de 10 % et quatre ne l'étaient pas ou n'étaient pas en voie de l'être | Ce petit sous-ensemble fédéral ne fournit ni taux de réussite général ni ROI moyen privé                        |
| Une estimation fiable documente périmètre, hypothèses, structure des coûts, données, sensibilité, risques et mise à jour par les coûts réels                                      | [GAO — Cost Estimating and Assessment Guide](https://www.gao.gov/products/gao-20-195g)                                                                                                              | 12 mars 2020                                                                             | Le comparatif doit être traçable et testable, y compris pour un logiciel                                                                                                                        | La méthode ne remplace pas les devis, données internes ou responsabilités                                       |
| L'option « continuer comme aujourd'hui » doit servir de référence ; coûts passés irrécupérables, sensibilité et valeurs de bascule doivent être explicites                        | [HM Treasury — Green Book 2026](https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2026)                                       | février 2026                                                                             | Bon cadre méthodologique pour comparer plusieurs options sans laisser une préférence décider du résultat                                                                                        | Le taux d'actualisation public britannique et ses ajustements ne doivent pas être copiés dans une PME française |
| Les mises à jour critiques doivent être appliquées sans délai après test ; traiter des données personnelles sur un serveur obsolète sans prévoir son remplacement est déconseillé | [CNIL — Sécuriser les serveurs](https://www.cnil.fr/fr/securite-securiser-les-serveurs)                                                                                                             | 14 mars 2024                                                                             | Une obsolescence de sécurité peut rendre l'attente non raisonnable, même si la friction annuelle paraît faible                                                                                  | Toute dette technique n'est pas une violation du RGPD et tout système ancien n'est pas non conforme             |
| Un catalogue public allemand demande une liste de dettes et un plan de réduction lorsque l'effort reste acceptable                                                                | [IT-Planungsrat — Kriterienkatalog für Produkte](https://www.it-planungsrat.de/fileadmin/beschluesse/2023/Beschluss2023_25_AL_Anlage_2_Kriterienkatalog_f%C3%BCr_Produkte_des_IT-Planungsrates.pdf) | 20 novembre 2023                                                                         | Le couple « liste + plan + corridor d'effort » est un bon modèle de gouvernance                                                                                                                 | Critère de produits publics allemands, pas norme universelle ni formule de coût                                 |
| Documentation, développement, tests, gestion des vulnérabilités et retrait appartiennent au cycle de vie du produit                                                               | [BSI — TR-03185 Secure Software Lifecycle](https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Publikationen/TechnischeRichtlinien/TR03185/BSI-TR-03185.pdf?__blob=publicationFile&v=3)             | consulté le 24 juillet 2026                                                              | Une modernisation qui oublie documentation, sécurité ou retrait déplace la dette au lieu de la réduire                                                                                          | Référentiel de sécurité allemand ; il ne chiffre pas la rentabilité d'une modernisation                         |

### Conséquences éditoriales

- Le SEI fonde la définition et la fiche d'élément, pas un taux de dette.
- DORA sert à mesurer un avant/après de livraison, jamais à convertir
  directement un indicateur en euros.
- Le GAO et le Green Book fondent la comparaison d'options, la traçabilité,
  l'analyse de sensibilité et la séparation prévu/réalisé.
- La CNIL fournit un contre-cas important : une exigence de sécurité peut
  supprimer l'option « attendre », sans pour autant imposer automatiquement une
  réécriture complète.
- Les cadres britanniques et allemands inspirent la gouvernance ; leur portée
  publique et nationale doit toujours être visible.

## 6. Matrice de gain d'information

| Question du dirigeant                      | Réponse concurrente dominante                         | Couverture actuelle                | Information nouvelle à produire                                                                          | Preuve attendue                                              |
| ------------------------------------------ | ----------------------------------------------------- | ---------------------------------- | -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| Est-ce vraiment une dette ?                | Typologie ou note d'outil                             | Bonne distinction âge/bug/dette    | Quatre contre-exemples : bug isolé, logiciel vieux mais stable, choix court terme assumé, fin de support | Fiche SEI + conséquence observée                             |
| Combien cela coûte-t-il par an ?           | Pourcentage de budget ou capacité de l'équipe         | Formule sans exécution             | Décomposition cash/capacité/risque/opportunité et registre anti-doublon                                  | Journaux, tickets, factures, planning, paie chargée ou devis |
| Dois-je tout refaire ?                     | « Cela dépend », souvent suivi d'une offre de refonte | Six options qualitatives           | Cinq options au même périmètre et sur 36 mois                                                            | Tableau de coûts et hypothèses remplaçables                  |
| Et si ne rien faire gagnait ?              | Rarement assumé                                       | Tolérance mentionnée               | Scénario faible où attendre est effectivement premier                                                    | TCO de référence + date de réexamen                          |
| À quel moment la décision bascule-t-elle ? | ROI central                                           | Absent                             | Valeur de bascule de la friction, de l'horizon et du taux de réduction                                   | Formule algébrique + sensibilité                             |
| Combien vaut une vente retardée ?          | Chiffre d'affaires brut présenté comme perte          | Prudence présente, sans exemple    | Marge contributive × causalité × non-récupération                                                        | Données commerciales et trois probabilités                   |
| La sécurité change-t-elle le calcul ?      | Peur ou risque générique                              | Bref                               | Cas où un support terminé ou des données impossibles à protéger éliminent l'attente                      | CNIL, dépendances, avis éditeur, audit                       |
| Comment prouver l'amélioration ?           | Vélocité ou nombre de bugs                            | Trois changements suivants         | Baseline, cohorte comparable, mesures métier et DORA, causes concurrentes                                | Fenêtre avant/après et définitions stables                   |
| Comment traiter plusieurs applications ?   | Matrice risque/effort                                 | Absent                             | Exposition annuelle, dépendance métier et coût d'action                                                  | Portefeuille avec propriétaire et événement de révision      |
| Que puis-je faire sans agence ?            | Checklist ou formulaire de contact                    | Carnet intégré mais non exportable | Kit autonome remplissable et calculateur transparent                                                     | Téléchargement réel, exemple rempli, export                  |

## 7. Modèle annuel sans double comptage

### 7.1 Quatre lignes qui ne doivent pas être confondues

| Ligne                      | Définition                                                                 | Exemple                                                                 | Nature                           |
| -------------------------- | -------------------------------------------------------------------------- | ----------------------------------------------------------------------- | -------------------------------- |
| Dépense de trésorerie      | Paiement qui disparaît réellement si l'action réussit                      | prestation d'urgence, licence abandonnée, heures supplémentaires payées | Économie de caisse potentielle   |
| Capacité interne valorisée | Temps salarié libérable, mais salaire qui ne disparaît pas automatiquement | compréhension, reprise, correction, ressaisie                           | Capacité, pas économie de caisse |
| Exposition au risque       | Probabilité d'un événement futur × impact distinct                         | interruption, avoirs clients, pénalité contractuelle                    | Valeur attendue incertaine       |
| Opportunité commerciale    | Marge future potentielle, corrigée de la causalité et de la récupération   | lancement retardé, ventes non récupérées                                | Scénario, pas perte comptable    |

Un total économique peut additionner ces lignes uniquement si les événements,
personnes et impacts sont distincts. Le guide doit toujours afficher les quatre
sous-totaux avant un éventuel total de décision.

### 7.2 Registre des événements

Chaque ligne du registre doit porter un identifiant unique :

| Champ                | Règle                                                                        |
| -------------------- | ---------------------------------------------------------------------------- |
| Événement            | Une évolution, un incident ou un contournement identifiable                  |
| Période              | Début et fin ; pas de durée globale reconstituée sans source                 |
| Résultat utile       | Travail qui aurait été nécessaire même avec un système sain                  |
| Temps supplémentaire | Compréhension, reprise ou correction attribuable                             |
| Personnes et rôle    | Pour éviter de multiplier une durée calendaire par toute l'équipe            |
| Source               | Ticket, commit, journal, facture, agenda ou entretien recoupé                |
| Catégorie comptée    | Livraison, incident, contournement, cash ou risque ; une heure n'en a qu'une |
| Confiance            | Observé, reconstitué ou hypothèse                                            |
| Identifiant lié      | Permet d'exclure une facture ou un impact déjà inclus ailleurs               |

### 7.3 Formule centrale

```text
Charge annuelle observée
= somme(heures supplémentaires de livraison uniques × coût horaire du rôle)
+ somme(heures de réponse à incident uniques × coût horaire du rôle)
+ somme(heures de contournement uniques × coût horaire du rôle)
+ prestations et achats externes attribuables
+ surcoûts d'exploitation incrémentaux
```

Ne pas inclure :

- le temps utile de la fonctionnalité ;
- une semaine calendaire entière lorsqu'une personne n'a travaillé que deux
  heures ;
- une heure d'incident déjà comptée dans la reprise de livraison ;
- un coût moyen de salarié et une facture de prestation couvrant le même
  travail ;
- le chiffre d'affaires brut d'une fonctionnalité retardée ;
- les coûts historiques déjà irrécupérables dans la décision à venir.

### 7.4 Scénario fictif annuel, entièrement recalculé

**Entreprise fictive : Atelier Nova.** Son application interne organise les
commandes et interventions. Toutes les valeurs sont illustratives, hors taxes,
et ne proviennent d'aucun client.

Hypothèses :

- 18 changements par an ;
- 9 heures supplémentaires distinctes par changement, au-delà du travail utile ;
- coût complet illustratif de l'équipe technique : 68 €/h ;
- 6 incidents par an, 7 heures distinctes de réponse par incident, à 68 €/h ;
- 4 personnes en exploitation contournent le système 2 h par semaine pendant
  46 semaines, à 32 €/h ;
- 4 800 € de prestations d'urgence facturées, hors heures internes ci-dessus ;
- 3 600 € par an de licences et d'infrastructure réellement incrémentales.

Calcul :

```text
Friction de livraison = 18 × 9 h × 68 €/h = 11 016 €
Réponse à incident = 6 × 7 h × 68 €/h = 2 856 €
Contournements = 4 × 2 h × 46 × 32 €/h = 11 776 €
Prestations d'urgence = 4 800 €
Surcoûts d'exploitation = 3 600 €

Capacité interne valorisée = 11 016 + 2 856 + 11 776 = 25 648 €
Dépenses de trésorerie attribuables = 4 800 + 3 600 = 8 400 €
Charge économique observée = 25 648 + 8 400 = 34 048 €/an
```

Contrôle inverse :

- l'entreprise ne promet pas 34 048 € d'économie de caisse ; seuls 8 400 €
  peuvent disparaître directement dans cet exemple ;
- les 25 648 € deviennent utiles seulement si le temps est réellement réalloué
  à des tâches identifiées ;
- aucune vente retardée ni panne future n'est encore incluse ;
- les heures d'incident sont retirées des neuf heures supplémentaires si un
  même ticket apparaît dans les deux journaux.

### 7.5 Manque à gagner, séparé

Une fonctionnalité commerciale est retardée de huit semaines. L'équipe
commerciale estime quatre opportunités qualifiées par semaine et 500 € de marge
contributive par vente. Elle estime que le retard explique 40 % des non-ventes
et que la moitié ne sera pas récupérée plus tard.

```text
Valeur brute potentielle = 8 × 4 × 500 € = 16 000 €
Valeur causalement attribuable = 16 000 × 40 % = 6 400 €
Valeur attendue non récupérée = 6 400 × 50 % = 3 200 €
```

| Part causalement attribuable | Non-récupération | Valeur attendue |
| ---------------------------: | ---------------: | --------------: |
|                         20 % |             50 % |         1 600 € |
|                         40 % |             50 % |         3 200 € |
|                         70 % |             50 % |         5 600 € |

Cette ligne reste hors de la charge observée de 34 048 €. Avant de l'ajouter à
une décision, il faut chercher les ventes récupérées, les autres causes du
retard, la capacité commerciale réelle et la marge — jamais le seul chiffre
d'affaires.

### 7.6 Exposition à un incident futur

Atelier Nova étudie un incident matériel unique. Hypothèses fictives :

- probabilité annuelle en l'état : 20 % ;
- impact financier distinct : 40 000 € ;
- l'impact exclut les heures de réponse, factures et ventes déjà comptées.

```text
Exposition annuelle attendue = 20 % × 40 000 € = 8 000 €
```

Ce montant n'est ni une provision comptable ni une certitude. Il sert à tester
la décision avec et sans risque. Si le verdict change uniquement grâce à une
probabilité fragile, le dirigeant doit le voir.

## 8. Comparaison des cinq options sur un même horizon

### 8.1 Règles de comparabilité

Le comparatif ci-dessous garde constants :

- les parcours commande, planification, intervention et facturation ;
- les volumes et exigences de sécurité ;
- la charge annuelle observée de 34 048 € ;
- un horizon de 36 mois ;
- les coûts communs d'exploitation, qui sont exclus car ils ne départagent pas
  les options.

Chaque option inclut ce qui lui est propre : investissement, migration,
coexistence, temps métier, licences, maintenance supplémentaire, sortie,
friction résiduelle et exposition résiduelle. Les valeurs sont fictives et
destinées à tester la méthode.

### 8.2 Hypothèses par option

| Option                 |                                                                      Investissement et transition |               Coût propre récurrent | Réduction de friction supposée | Probabilité annuelle de l'incident distinct |
| ---------------------- | ------------------------------------------------------------------------------------------------: | ----------------------------------: | -----------------------------: | ------------------------------------------: |
| Attendre et surveiller |                                                                                               0 € |                                 0 € |                            0 % |                                        20 % |
| Stabilisation ciblée   |                             24 000 € de travaux + 3 000 € de transition + 1 800 € de temps métier |                          3 000 €/an |                           45 % |                                        10 % |
| Rénovation progressive |                 58 000 € de travaux + 12 000 € de coexistence/migration + 4 050 € de temps métier |                          5 000 €/an |                           75 % |                                         5 % |
| Réécriture             | 120 000 € de construction + 25 000 € de migration/double fonctionnement + 9 900 € de temps métier |                          8 000 €/an |                           85 % |                                         3 % |
| Remplacement standard  |                 45 000 € d'intégration et migration + 7 200 € de temps métier + 8 000 € de sortie | 30 000 €/an de licences et services |                           65 % |                                         4 % |

La réduction et les probabilités ne sont pas des moyennes de marché. Elles
devront provenir d'un pilote, d'un devis explicite ou d'une fourchette
contradictoire.

### 8.3 Résultat 36 mois

```text
Coût de décision sur l'horizon
= investissement et transition
+ coûts propres récurrents
+ charge observée résiduelle
+ exposition au risque résiduelle
```

| Option                    | Investissement + transition | Récurrent propre sur 36 mois | Friction résiduelle sur 36 mois | Risque résiduel sur 36 mois | Coût de décision illustratif |
| ------------------------- | --------------------------: | ---------------------------: | ------------------------------: | --------------------------: | ---------------------------: |
| Attendre                  |                         0 € |                          0 € |                       102 144 € |                    24 000 € |                    126 144 € |
| **Stabiliser**            |                    28 800 € |                      9 000 € |                        56 179 € |                    12 000 € |                **105 979 €** |
| Rénover progressivement   |                    74 050 € |                     15 000 € |                        25 536 € |                     6 000 € |                    120 586 € |
| Réécrire                  |                   154 900 € |                     24 000 € |                        15 322 € |                     3 600 € |                    197 822 € |
| Remplacer par un standard |                    60 200 € |                     90 000 € |                        35 750 € |                     4 800 € |                    190 750 € |

Verdict de ce scénario : la stabilisation ciblée gagne, avec 20 165 € de coût de
décision en moins que l'attente sur trois ans. Ce n'est pas une économie
garantie. Une partie du gain est de la capacité interne et 12 000 € du calcul
proviennent d'une différence de risque attendue.

### 8.4 Sensibilité à la friction annuelle

Toutes les hypothèses précédentes restent identiques ; seule la charge annuelle
observée change.

| Friction annuelle |     Attendre |    Stabiliser |       Rénover |      Réécrire | Remplacer | Option la moins coûteuse |
| ----------------: | -----------: | ------------: | ------------: | ------------: | --------: | ------------------------ |
|          12 000 € | **60 000 €** |      69 600 € |     104 050 € |     187 900 € | 167 600 € | Attendre                 |
|          24 000 € |     96 000 € |  **89 400 €** |     113 050 € |     193 300 € | 180 200 € | Stabiliser               |
|          34 048 € |    126 144 € | **105 979 €** |     120 586 € |     197 822 € | 190 750 € | Stabiliser               |
|          50 000 € |    174 000 € | **132 300 €** |     132 550 € |     205 000 € | 207 500 € | Stabiliser, de peu       |
|          80 000 € |    264 000 € |     181 800 € | **155 050 €** |     218 500 € | 239 000 € | Rénover                  |
|         300 000 € |    924 000 € |     544 800 € |     320 050 € | **317 500 €** | 470 000 € | Réécrire                 |

La ligne à 300 000 € n'est pas une prévision réaliste pour Atelier Nova. Elle
sert à prouver qu'un modèle honnête doit laisser la réécriture gagner lorsque la
friction devient suffisamment forte. Dans la vraie décision, les réductions,
risques et capacités changeraient aussi ; il faudrait les réestimer.

### 8.5 Sensibilité à l'horizon

Avec la charge annuelle centrale de 34 048 € :

| Horizon |     Attendre |    Stabiliser |       Rénover |  Réécrire | Remplacer | Option la moins coûteuse |
| ------: | -----------: | ------------: | ------------: | --------: | --------: | ------------------------ |
| 12 mois | **42 048 €** |      54 526 € |      89 562 € | 169 207 € | 103 717 € | Attendre                 |
| 24 mois |     84 096 € |  **80 253 €** |     105 074 € | 183 514 € | 147 234 € | Stabiliser               |
| 36 mois |    126 144 € | **105 979 €** |     120 586 € | 197 822 € | 190 750 € | Stabiliser               |
| 60 mois |    210 240 € |     157 432 € | **151 610 €** | 226 436 € | 277 784 € | Rénover                  |

Un logiciel retiré dans douze mois peut donc rationnellement rester en place,
alors que la rénovation gagne si le même périmètre doit vivre cinq ans. Le
guide doit demander la durée de vie métier avant de parler de technologie.

### 8.6 Valeurs de bascule

Contre l'attente, sur 36 mois :

| Option                 | Friction annuelle minimale si le risque différentiel est inclus | Friction minimale si le risque est entièrement exclu |
| ---------------------- | --------------------------------------------------------------: | ---------------------------------------------------: |
| Stabilisation          |                                                        19 111 € |                                             28 000 € |
| Rénovation progressive |                                                        31 578 € |                                             39 578 € |
| Réécriture             |                                                        62 157 € |                                             70 157 € |
| Remplacement standard  |                                                        67 179 € |                                             77 026 € |

Exemple pour la stabilisation :

```text
Coût fixe et récurrent propre sur 36 mois = 28 800 + 3 × 3 000 = 37 800 €
Réduction de risque attendue = 3 × (8 000 - 4 000) = 12 000 €
Charge nette à récupérer = 37 800 - 12 000 = 25 800 €
Valeur de bascule = 25 800 / (3 × 45 %) = 19 111 €/an

Sans valoriser le risque :
37 800 / (3 × 45 %) = 28 000 €/an
```

Sensibilité au taux réel de réduction de la stabilisation :

| Réduction de friction | Bascule avec risque | Bascule sans risque |
| --------------------: | ------------------: | ------------------: |
|                  25 % |         34 400 €/an |         50 400 €/an |
|                  45 % |         19 111 €/an |         28 000 €/an |
|                  65 % |         13 231 €/an |         19 385 €/an |

Cette table est plus utile qu'un ROI unique : elle dit ce que le pilote devra
réellement démontrer.

## 9. Quand ne pas réécrire gagne

L'attente surveillée ou la stabilisation limitée est rationnelle lorsque :

- l'application change peu et le restera ;
- son retrait est daté et proche ;
- le fournisseur et les composants restent maintenus ;
- les données peuvent être protégées et restaurées ;
- le contournement est borné, connu et moins coûteux que la transition ;
- le comportement métier est stable et la reconstruction créerait plus de
  risque de recette que de valeur ;
- l'organisation n'a pas la disponibilité nécessaire pour migrer, former et
  faire fonctionner deux systèmes.

Dans ce cas, la décision doit tout de même nommer :

- un propriétaire métier ;
- un propriétaire technique ;
- la date de réexamen ;
- l'événement qui rouvre le dossier : fin de support, incident, changement de
  volume, départ d'une personne clé ou dépassement de la valeur de bascule ;
- le mode dégradé et le plan de retrait.

### Cas opposés où attendre n'est plus acceptable

- un composant nécessaire n'est plus maintenu et aucune mesure compensatoire
  crédible ne protège les données ;
- une mise à jour critique ne peut pas être appliquée ;
- la restauration n'a jamais été testée sur un processus essentiel ;
- l'application empêche une obligation légale ou contractuelle datée ;
- le fournisseur, la technologie ou les accès créent un point de défaillance
  sans solution ;
- le modèle métier a changé au point que chaque nouvelle fonction reproduit une
  structure devenue fausse ;
- le coût de coexistence d'une rénovation dépasse un remplacement réellement
  comparable.

Même ici, « agir » ne signifie pas nécessairement « tout réécrire ». Isoler,
mettre à jour, retirer une fonction, remplacer un composant ou acheter un
standard peuvent gagner.

## 10. Comparaison qualitative complémentaire

| Critère                        | Attendre                             | Stabiliser                        | Rénover progressivement           | Réécrire                               | Remplacer par un standard                         |
| ------------------------------ | ------------------------------------ | --------------------------------- | --------------------------------- | -------------------------------------- | ------------------------------------------------- |
| Irréversibilité                | Faible                               | Faible                            | Moyenne                           | Forte                                  | Forte dépendance fournisseur                      |
| Valeur livrée tôt              | Aucune amélioration                  | Forte sur une zone ciblée         | Forte si lots autonomes           | Faible avant première bascule          | Variable selon paramétrage                        |
| Conservation des règles métier | Totale mais parfois implicite        | Forte                             | Forte si tests de caractérisation | Risque de perte à reconstruire         | Écarts au standard à arbitrer                     |
| Coexistence                    | Aucune                               | Courte                            | Souvent longue                    | Longue ou big bang risqué              | Migration et double fonctionnement                |
| Charge métier                  | Faible au départ                     | Recette ciblée                    | Recettes successives              | Très forte                             | Paramétrage, reprise, formation                   |
| Risque sécurité                | Inchangé sauf mesures compensatoires | Réduit sur la zone                | Réduit par étapes                 | Nouveau risque de réalisation          | Dépend du produit et du contrat                   |
| Meilleur cas                   | Retrait proche, faible changement    | Friction localisée                | Système utile et découpable       | Impasse structurelle et horizon long   | Besoin largement standard                         |
| Contre-cas                     | Fin de support ou exposition forte   | Cause diffuse ou produit condamné | Coexistence trop chère            | Règles métier inconnues, horizon court | Différenciation métier forte ou sortie impossible |

## 11. Mesurer l'avant/après sans fabriquer une victoire

### Baseline minimale

Mesurer au moins une période représentative ou un ensemble de changements
comparables :

- délai de l'accord métier à la mise en production ;
- temps utile et temps supplémentaire, séparés ;
- taux de déploiements nécessitant une intervention ;
- temps de récupération d'un déploiement défaillant ;
- déploiements non planifiés liés à un incident ;
- heures de contournement métier ;
- factures externes et surcoûts d'exploitation ;
- résultat métier du parcours concerné.

Les cinq métriques DORA sont utiles pour la livraison, mais le guide doit
traduire chaque terme et ajouter les mesures propres à l'entreprise. Une baisse
du délai n'est pas une victoire si elle augmente les régressions, les
contournements ou la charge métier.

### Limites de l'échantillon

« Cinq changements » est une méthode de démarrage, pas une norme. Il faut
élargir l'échantillon si :

- les cinq événements concernent le même module ;
- l'activité est saisonnière ;
- une urgence exceptionnelle domine le total ;
- les tailles de changement sont incomparables ;
- les données historiques sont trop reconstituées.

De même, trois changements après action donnent un signal précoce, pas une
preuve définitive. La future page doit dire « commencez par » au lieu de
« suffisent » ou « prouvent ».

### Protocole de validation

1. Geler les définitions avant le pilote.
2. Choisir une zone et un résultat métier précis.
3. Conserver les données brutes et les exclusions.
4. Comparer des changements de taille et de nature proches.
5. Noter les causes concurrentes : nouvelle équipe, nouveau volume, incident
   externe ou changement de priorité.
6. Décider à l'avance ce qui conduira à continuer, corriger ou arrêter.
7. Mettre à jour l'estimation avec les coûts réellement observés.

## 12. Ressource autonome recommandée

### Nom

**Dossier de décision — Combien votre application vous coûte-t-elle vraiment ?**

Le kit ne dépend pas d'un fichier `.xlsx`. Il peut fonctionner avec des formats
simples, durables et vérifiables :

1. `mode-emploi.md` — 15 minutes de lecture, définitions cash/capacité/risque,
   exemples et anti-doublons ;
2. `registre-evenements.csv` — une ligne par changement, incident,
   contournement ou facture, avec identifiant unique ;
3. `exemple-atelier-nova.csv` — données fictives remplies qui reproduisent
   exactement les 34 048 € ;
4. `comparatif-options.md` — grille des cinq options, périmètre, horizon,
   inclusions, exclusions et questions aux prestataires ;
5. un calculateur web accessible sur la page — résultats recalculés côté
   navigateur, sans compte, avec export CSV et Markdown ;
6. `decision-record.md` — décision, hypothèses, valeur de bascule, propriétaire,
   date et événement de révision.

### Parcours de 90 minutes

- 20 min : sélectionner cinq à dix événements et éliminer les doublons ;
- 20 min : séparer charge utile, capacité et trésorerie ;
- 15 min : écrire le risque et l'opportunité séparément ;
- 20 min : saisir deux ou trois options sur le même horizon ;
- 10 min : faire varier la friction, la réduction et l'horizon ;
- 5 min : consigner une décision provisoire et la date de révision.

### Contrôles du calculateur

- aucun coût inconnu n'est converti en zéro ;
- unités visibles : heures, euros par heure, euros par mois, pourcentage et
  mois ;
- erreurs négatives ou pourcentages supérieurs à 100 % bloqués ;
- possibilité d'exclure entièrement risque et opportunité ;
- sous-totaux cash, capacité, risque et opportunité toujours visibles ;
- avertissement lorsque la même référence d'événement apparaît deux fois ;
- export contenant hypothèses, date, inclusions et exclusions ;
- exemples clairement marqués « fictifs » ;
- aucun résultat ne recommande automatiquement un service Hagnéré Code.

## 13. Plan de réécriture distinctif

| Ordre | Section                           | Question résolue                                                            | Preuve ou outil                                                        | Décision produite                         |
| ----: | --------------------------------- | --------------------------------------------------------------------------- | ---------------------------------------------------------------------- | ----------------------------------------- |
|     1 | Verdict humain                    | Faut-il réécrire parce que tout devient lent ?                              | Cas « deux jours deviennent trois semaines » + position conditionnelle | Mesurer avant de signer un grand chantier |
|     2 | Quatre situations différentes     | Bug, âge, dette ou obsolescence de sécurité ?                               | Mini-cas opposés + SEI/CNIL                                            | Qualifier le problème                     |
|     3 | Ce que coûte réellement une année | Où part l'argent ou le temps ?                                              | Scénario Atelier Nova à 34 048 €                                       | Distinguer cash et capacité               |
|     4 | La règle anti-double comptage     | Pourquoi les chiffres gonflent-ils ?                                        | Registre d'identifiants et exemple d'exclusion                         | Produire un total défendable              |
|     5 | Vente retardée et risque          | Peut-on compter le manque à gagner ?                                        | Marge × causalité × non-récupération ; probabilité × impact            | Encadrer sans mélanger                    |
|     6 | Cinq options, même horizon        | Quelle option gagne à 36 mois ?                                             | Tableau complet                                                        | Stabiliser dans le scénario central       |
|     7 | Valeurs de bascule                | Quel résultat faut-il vraiment obtenir ?                                    | Seuil 19 111 € avec risque / 28 000 € sans risque                      | Autoriser ou rejeter un pilote            |
|     8 | Quand attendre gagne              | Est-il professionnel de ne rien refaire ?                                   | Scénario faible et retrait proche                                      | Tolérer sous conditions                   |
|     9 | Quand l'urgence change la réponse | Support, données, sécurité ou conformité rendent-ils l'attente impossible ? | CNIL, dépendances, plan compensatoire                                  | Contenir puis décider                     |
|    10 | Plan de transition                | Comment éviter de recréer de la dette ?                                     | Jalons, coexistence, migration, rollback, disposition GAO              | Exiger un devis complet                   |
|    11 | Avant/après                       | Comment savoir si les travaux paient ?                                      | DORA + mesures métier + cohorte                                        | Continuer, corriger ou arrêter            |
|    12 | Kit et CTA                        | Que peut faire le lecteur maintenant ?                                      | Kit réel + calculateur                                                 | Arriver avec un dossier exploitable       |

### Forme éditoriale

- ouverture de 120 à 150 mots, phrases courtes, aucun acronyme non traduit ;
- calcul annuel visible avant la longue définition académique ;
- un tableau de comparaison principal, puis des encadrés plus courts ;
- chaque formule suivie d'une traduction en français courant ;
- opinion dans des paragraphes incarnés, pas dans une succession de slogans ;
- deux respirations narratives : Atelier Nova avant et après le calcul ;
- les sources au plus près des faits, puis une bibliographie finale ;
- répétitions de « mesurer avant de choisir » supprimées une fois la méthode
  démontrée.

### Liens internes naturels à prévoir

- reprendre un logiciel métier existant ;
- audit technique avant reprise ;
- coût de maintenance d'une application métier ;
- TMA ou régie ;
- choisir un prestataire d'application métier ;
- cahier des charges d'une application ou d'un SaaS.

Chaque lien doit résoudre l'étape suivante, pas seulement distribuer du maillage.

## 14. Affirmations interdites

La réécriture et le contre-audit doivent bloquer les formulations suivantes :

1. « La dette technique représente X % du budget IT » sans population,
   méthode, date et périmètre directement vérifiables.
2. « Une application de plus de X ans doit être réécrite. »
3. « Une couverture de tests de X % est saine » sans criticité, type de test et
   risque métier.
4. « Un outil a calculé 80 000 € de dette » sans hypothèses métier.
5. « Les salariés ont gagné 25 648 € » lorsque leur rémunération ne change pas.
6. « Huit semaines de retard ont coûté 16 000 € » sans causalité, marge et
   récupération.
7. « Le risque cyber coûte 8 000 € par an » sans rappeler qu'il s'agit d'une
   valeur attendue construite sur des hypothèses.
8. « Cinq changements suffisent » ou « trois changements prouvent ».
9. « Les métriques DORA mesurent la dette technique. »
10. « La modernisation progressive est toujours plus sûre. »
11. « Une réécriture supprime la dette technique. »
12. « Migrer dans le cloud réduit automatiquement les coûts. »
13. « L'IA remboursera la dette » ou « l'IA impose une réécriture ».
14. « La fin de support impose de tout reconstruire » ; elle impose une réponse
    au risque, pas une architecture précise.
15. « Le logiciel standard est moins cher » sans licences, intégration,
    formation, dépendance et sortie.
16. « Le ROI est garanti » ou « l'option est rentable » lorsque des hypothèses
    de capacité, risque ou opportunité dominent le résultat.
17. « Nous serons numéro 1 sur Google » : la qualité et la couverture peuvent
    améliorer l'utilité et la compétitivité, jamais garantir une position.

## 15. Critères GO avant gel éditorial

### Pédagogie et décision

- [ ] Le dirigeant comprend dans les 150 premiers mots que l'âge et la note
      d'outil ne suffisent pas.
- [ ] Les termes dette, bug, maintenance, obsolescence, risque et opportunité
      sont distingués par des exemples.
- [ ] Le calcul à 34 048 € est reproductible depuis les données brutes.
- [ ] Cash, capacité, risque et opportunité ont chacun leur sous-total.
- [ ] L'attente, la stabilisation, la rénovation, la réécriture et le
      remplacement ont le même périmètre et le même horizon.
- [ ] Au moins un scénario fait gagner l'attente et un autre la réécriture.
- [ ] La valeur de bascule avec et sans risque est visible.
- [ ] La position professionnelle contient aussi le cas où l'opinion inverse
      gagne.

### Preuves et fraîcheur

- [ ] SEI, DORA, GAO, GOV.UK/GDS, Green Book, CNIL et au moins une source
      officielle allemande sont rouvertes au moment de la rédaction.
- [ ] Toute source publique étrangère est accompagnée de sa limite de portée.
- [ ] Aucun chiffre d'agence ou de cabinet n'est transformé en norme.
- [ ] Les six projets GAO sont présentés comme un petit sous-ensemble de projets
      achevés attendant des économies, pas comme un taux général.
- [ ] Les cinq métriques DORA portent leurs noms à jour de janvier 2026.
- [ ] La page GDS est signalée comme potentiellement en attente de revue.

### Calculs

- [ ] Un second relecteur repart des hypothèses, sans copier les résultats.
- [ ] Les unités sont testées : €/h, h/semaine, €/mois, année et horizon.
- [ ] Les arrondis n'interviennent qu'à l'affichage.
- [ ] Les coûts communs sont exclus ou identiques dans toutes les options.
- [ ] Les coûts passés irrécupérables n'influencent pas le choix futur.
- [ ] Le manque à gagner utilise la marge contributive, pas le chiffre
      d'affaires.
- [ ] Chaque événement a un identifiant et une seule catégorie d'heures.
- [ ] La comparaison est refaite sans risque et sans opportunité.
- [ ] Les valeurs de bascule sont recalculées algébriquement et par test.

### Produit et conversion

- [ ] Le kit existe réellement, se télécharge et contient un exemple rempli.
- [ ] Le calculateur fonctionne sans compte et sans envoyer les données.
- [ ] Les exports reprennent hypothèses, date, inclusions et exclusions.
- [ ] Le CTA propose une analyse des preuves, pas une réécriture prédéterminée.
- [ ] Bon fit : application encore utile, changements documentables, décision
      d'investissement à prendre.
- [ ] Mauvais fit : incident de sécurité en cours, recherche d'une estimation
      sans accès, décision de réécrire déjà irrévocable.

### Rendu et SEO

- [ ] Une seule balise H1 et des H2 qui répondent à des questions humaines.
- [ ] Tables utilisables à 320, 390, 768, 1 024 et 1 440 px sans lecture
      horizontale impossible.
- [ ] Formules lisibles en thème clair et sombre.
- [ ] Données structurées limitées à ce que la page montre réellement.
- [ ] Canonical, date de mise à jour, image sociale et statut d'indexation sont
      cohérents avec l'état publié.
- [ ] Aucun score qualité final n'est attribué avant le contre-audit et le test
      du rendu réel.

## 16. Recalcul indépendant effectué pour ce dossier

Les opérations ont été refaites le 24 juillet 2026 à partir des hypothèses,
avant arrondi :

```text
18 × 9 × 68 = 11 016
6 × 7 × 68 = 2 856
4 × 2 × 46 × 32 = 11 776
11 016 + 2 856 + 11 776 = 25 648
4 800 + 3 600 = 8 400
25 648 + 8 400 = 34 048

8 × 4 × 500 = 16 000
16 000 × 40 % × 50 % = 3 200

20 % × 40 000 = 8 000
```

Contrôle du comparatif central :

```text
Attendre = 3 × 34 048 + 3 × 8 000 = 126 144

Stabiliser
= 24 000 + 3 000 + 1 800
+ 3 × 3 000
+ 3 × 34 048 × (1 - 45 %)
+ 3 × 4 000
= 105 979,20

Rénover
= 58 000 + 12 000 + 4 050
+ 3 × 5 000
+ 3 × 34 048 × (1 - 75 %)
+ 3 × 2 000
= 120 586

Réécrire
= 120 000 + 25 000 + 9 900
+ 3 × 8 000
+ 3 × 34 048 × (1 - 85 %)
+ 3 × 1 200
= 197 821,60

Remplacer
= 45 000 + 7 200 + 8 000
+ 3 × 30 000
+ 3 × 34 048 × (1 - 65 %)
+ 3 × 1 600
= 190 750,40
```

Les valeurs affichées dans les tableaux sont arrondies à l'euro. La future
implémentation devra tester les valeurs non arrondies.

## 17. Contrôles du dossier

- 22 URL externes uniques contrôlées le 24 juillet 2026 ;
- 19 ont répondu HTTP 200 au contrôle automatisé ;
- les trois pages GAO ont refusé le client automatisé avec HTTP 403, puis ont
  été ouvertes et relues dans le navigateur : dates, périmètres, résultats et
  limites ont été vérifiés sur les pages officielles ;
- calcul annuel, manque à gagner, cinq TCO et deux valeurs de bascule validés
  par assertions Node indépendantes ;
- Prettier ciblé conforme ;
- `git diff --check` ciblé conforme ;
- aucune page publique, aucun registre de guides et aucun manifeste de
  publication modifiés dans ce lot ;
- aucun commit, push ou déploiement effectué.

## 18. Conclusion de recherche

La page actuelle ne doit pas être allongée avec une nouvelle taxonomie
technique. Elle doit devenir un dossier de décision économique lisible par un
dirigeant :

- partir d'événements observables ;
- ne compter chaque heure qu'une fois ;
- séparer ce qui sort de la banque de ce qui libère de la capacité ;
- garder risque et manque à gagner visibles, probabilisés et désactivables ;
- comparer cinq options sur un même horizon ;
- montrer la valeur qui ferait changer d'avis ;
- assumer qu'attendre, stabiliser, rénover ou réécrire peuvent chacun gagner ;
- fournir un kit qui permet au lecteur de refaire le calcul avant de contacter
  une agence.

Cette méthode constitue le véritable avantage éditorial. Elle est plus
professionnelle qu'un ratio spectaculaire, plus utile qu'une liste de
symptômes et plus crédible commercialement qu'un guide dont toutes les routes
mènent à une refonte.
