# Audit approfondi — `logiciel-gestion-stock-sur-mesure`

Date : 24 juillet 2026

Auditeur concurrentiel : Codex — cellule `corpus_inventory`

Snapshot du guide : `8c216526aee28409e52f9e269c84e62bf5c6bfd75d8f8c6c134a6133772365cd`

Périmètre : audit éditorial, décisionnel, concurrentiel et factuel. Aucune
réécriture de la page publique n’a été effectuée dans ce dossier.

## 1. Verdict exécutif

```text
Lecteur exact : dirigeant de PME, responsable logistique ou responsable des opérations dont les chiffres de stock divergent entre l'entrepôt, l'ERP, le site ou des fichiers.
Question réelle : faut-il corriger le processus, reconfigurer l'existant, acheter un logiciel de stock/WMS, ajouter une interface ou développer du sur-mesure ?
Décision attendue : choisir une première action et une architecture de solution sans financer prématurément un nouveau logiciel.
Réponse actuelle en une phrase : rejouez dix mouvements sur une référence, identifiez la source de vérité, puis choisissez parmi six réponses allant de la clarification au développement ciblé.
Défaut qui coûte le plus de valeur : aucune comparaison économique à périmètre et horizon constants entre correction, standard, hybride et sur-mesure.
Niveau actuel : D
Priorité : haute
Statut : audité / à réécrire
```

Le guide est plus juste que de nombreuses pages commerciales françaises : il
ne prétend pas qu’un logiciel sur mesure fait disparaître les écarts et il
commence par le mouvement métier. C’est sa force centrale.

Mais il ne permet pas encore à un dirigeant de répondre à la question
budgétaire : « combien mon problème me coûte-t-il, combien coûterait chaque
voie sur trois ans et à partir de quelle valeur propre à mon activité le
sur-mesure devient-il rationnel ? » Les six options sont décrites, pas
comparées. Aucun logiciel nommé n’est éprouvé sur le même scénario. Les coûts
de licence, intégration, reprise, formation, maintenance et sortie restent
absents. Le titre promet donc une décision de logiciel ; le corps produit
surtout un excellent diagnostic d’écart.

### Score avant correction

| Axe | Note /10 | Preuve localisable | Manque décisif |
| --- | ---: | --- | --- |
| Intention | 8 | L’ouverture part de trois quantités contradictoires et recommande une enquête avant un tableau de bord (`page.tsx:398-414`). | Le lecteur venu arbitrer standard/sur-mesure ne reçoit pas de réponse économique dans les 150 premiers mots. |
| Décision | 7 | Six réponses et des motifs de refus sont proposées (`page.tsx:269-318`, `572-622`). | Aucun arbre ne fait basculer explicitement vers une option selon criticité, couverture standard, coût total et capacité interne. |
| Pédagogie | 8 | Les six sens de « stock », la chronologie et les huit champs sont compréhensibles (`page.tsx:136-267`, `420-557`). | La chronologie ne se termine pas par un bilan chiffré par lieu et statut ; le lecteur ne peut pas refaire le contrôle inverse. |
| Profondeur | 5 | Mouvements, source de vérité, lots, hors ligne et migration pilote sont abordés. | Réapprovisionnement, stock de sécurité, inventaires tournants, valorisation, rôles, droits, intégrations, mesures de qualité et exploitation restent peu ou pas traités. |
| Preuve | 5 | Microsoft, Odoo et GS1 sont cités (`page.tsx:502-518`, `655-718`). | Aucun protocole comparatif, devis, prix officiel daté, export, démonstration produit ou résultat de test n’est visible. |
| Comparaison | 4 | Six options sont juxtaposées avec bon et mauvais fit (`page.tsx:572-615`). | Pas de même périmètre, même horizon, même volume d’utilisateurs ni TCO ; aucun standard nommé n’est comparé. |
| Originalité | 8 | « Rejouer dix mouvements avant de développer » est une méthode mémorable et défendable. | Elle n’est pas matérialisée par une feuille téléchargeable ni reliée à un calcul de décision. |
| Style | 8 | Ton humain, prudent, professionnel ; pas de promesse commerciale excessive. | Quelques formulations restent abstraites et le guide manque de phrases-opinion mémorables sur ce qu’il ne faut jamais reconstruire. |
| Conversion | 6 | CTA honnête demandant une référence et dix mouvements (`page.tsx:671-681`). | Le dirigeant ne sait ni quel livrable il recevra, ni quelle décision économique ressortira, ni quand Hagnéré Code déconseillera un développement. |
| SEO/produit | 6 | Métadonnées, FAQ, données structurées et maillage sont présents. | Le champ sémantique « WMS vs ERP vs logiciel de stock », coûts, TCO, inventaire tournant, multi-site, lots, réapprovisionnement et choix par profil est trop faible pour dominer les comparatifs. |

Total : **65/100**

## 2. Ce que le guide dit réellement

- La réponse apparaît dès l’ouverture : ne pas acheter un nouvel écran avant
  d’avoir retrouvé le premier mouvement absent, tardif, doublé ou mal localisé.
- La progression est logique : définir les nombres, suivre un incident,
  reconstruire dix mouvements, examiner six réponses, puis migrer sur un
  pilote.
- L’exemple fictif utilise 50 unités reçues, 8 réservées, 10 en transfert,
  2 cassées et 1 retour. Il rend le problème concret, mais ne clôt pas
  explicitement l’égalité entre stock disponible, réservé, endommagé, en
  transit et en quarantaine.
- Les six options couvrent bien : clarification, reconfiguration, parcours
  intermédiaire, standard/WMS, application ciblée et attente avec journal.
- Les sources actuelles prouvent que des produits savent compter, ajuster et
  suivre des lots. Elles ne prouvent ni qu’un produit convient au lecteur ni
  qu’un développement est rentable.
- Le CTA est cohérent avec le diagnostic et laisse la possibilité d’un
  standard ou d’une absence de développement.
- Ce qui paraît complet sans aider assez à décider : les six grandes cartes
  d’option. Elles ne contiennent ni coût, délai, risque de reprise, coût
  interne, coût de sortie, fonctions communes ni démonstration sur un même
  cas.

## 3. Benchmark France et international

Requêtes, pays, langues et date :

- France, français, 24 juillet 2026 : `logiciel gestion stock sur mesure`,
  `comparatif logiciel gestion stock PME 2026`, `WMS ou ERP gestion stock`,
  `mise en place WMS business case`.
- États-Unis, anglais, 24 juillet 2026 : `custom inventory management software
  build vs buy`, `build vs buy WMS total cost ownership`.
- Royaume-Uni, anglais, 24 juillet 2026 : `inventory ERP buyer guide 2026`,
  `custom vs off the shelf software three year cost`.
- Australie, anglais, 24 juillet 2026 : `government inventory management
  tracking system reorder point stocktake`.
- Sources primaires vérifiées séparément : Légifrance, Microsoft, Odoo, GS1 et
  Australian Government.

Saturation : après les familles « comparatif de produits », « build vs buy »,
« mise en place WMS », « obligations/inventaire » et « méthode opérationnelle »,
les résultats ajoutaient surtout des listes d’outils, des prix non vérifiés et
des affirmations commerciales. Aucun nouveau type majeur de réponse n’est
apparu après l’ajout du TCO, du choix par profil, de la traçabilité, du
réapprovisionnement et du pilote. Cette saturation est éditoriale, pas une
preuve d’exhaustivité de Google. La prochaine information utile ne viendra pas
d’un onzième article : elle viendra de devis réels anonymisés, d’une
démonstration sur un jeu de mouvements commun et d’entretiens avec des
responsables de stock.

| Ressource et URL directe | Pays | Réponse utile | Preuve, outil ou exemple | Limite | Apport à vérifier ou adapter |
| --- | --- | --- | --- | --- | --- |
| [KLS-Concept — comparatif de 9 logiciels de stock](https://kls-concept.com/comparatif/logiciels-gestion-stock-pme-2026/) | France | Donne immédiatement un choix par profil et compare prix d’entrée, mobile/scan, WMS/lots, comptabilité et support. | Tableau synthétique et transparence sur le fait que l’éditeur compare son propre produit. | Source concurrente ; prix secondaires et couverture fonctionnelle à vérifier chez chaque éditeur. | Reprendre la lisibilité « profil → option », mais avec sources officielles et scénario commun. |
| [France Supply Chain — fiche de mise en place d’un WMS](https://francesupplychain.org/wp-content/uploads/2023/06/fsc-fiche-mise-en-place-wms-a4-20220503.pdf) | France | Demande business case, cahier des charges précis, stratégie de données, formation et proximité avec le standard. | Parcours de projet, facteurs de succès et pièges d’implémentation. | Fiche 2022 très courte ; son seuil de 500 à 1 000 emplacements n’est pas accompagné d’une méthodologie et ne doit pas devenir une règle universelle. | Ajouter tous les coûts annexes et expliquer pourquoi « rester proche du standard » est le point de départ. |
| [Légifrance — section du Code de commerce contenant l’article R123-177](https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000005634379/LEGISCTA000006191083/2026-06-29) | France | Rappelle le contrôle annuel de l’existence et de la valeur des éléments d’actif et de passif à la clôture. | Texte primaire en vigueur ; données d’inventaire à organiser et conserver. | Ne prescrit aucun logiciel ni inventaire tournant. | Ajouter une frontière claire entre outil opérationnel et obligations comptables. |
| [Spot My Web — logiciel de stock sur mesure](https://spotmyweb.fr/developpement-web-app-logiciel-metier/logiciel-gestion-stock-sur-mesure) | France | Parle directement des douleurs PME et des fonctions attendues. | Positionnement commercial très lisible. | Affiche notamment « −80 % erreurs d’inventaire » sans protocole visible sur la page ; ne pas reprendre. | Montrer que Hagnéré Code refuse les gains non sourcés et calcule le cas du lecteur. |
| [MosierData — custom inventory software, build vs buy](https://mosierdata.com/blog/custom-inventory-management-software) | États-Unis | Verdict simple : acheter si l’opération est standard, construire si l’écart est structurel. | Cadre build/buy et questions de propriété. | Agence de développement ; coûts et délais proposés sont commerciaux et non transposables. | Assumer un verdict standard-first, puis définir les preuves d’un écart structurel. |
| [Logiwa — build vs buy WMS](https://www.logiwa.com/blog/build-vs-buy-wms-software) | États-Unis | Compare vitesse, coût, intégration et adaptation. | Arguments concrets sur le coût en temps et expertise du sur-mesure. | Éditeur WMS, donc intérêt direct à la conclusion. | Conserver les catégories, pas les conclusions ni chiffres sans preuve primaire. |
| [ERP Research — ERP for Inventory Management](https://www.erpresearch.com/en-gb/erp-for-inventory-management) | Royaume-Uni | Couvre 34+ vendeurs, multi-entrepôts, lots, inventaire tournant, valorisation, réapprovisionnement, ERP vs outil autonome et prix. | Très bonne largeur sémantique et décision par secteur. | Source secondaire ; plusieurs prix et statistiques n’ont pas leur protocole sur la page. | Élargir le guide aux fonctions qui changent réellement le choix et sourcer les prix chez les éditeurs. |
| [ORBN Digital — custom vs off-the-shelf](https://www.orbn.co.uk/guides/custom-software-vs-off-the-shelf) | Royaume-Uni | Compare achat, construction et hybride sur huit critères et trois ans. | Scorecard interactive et phrase claire : acheter le générique, construire le différenciateur. | Comparatif généraliste publié par une agence ; le score n’est pas spécifique au stock. | Produire un TCO stock à 36 mois, sans prétendre à un seuil universel. |
| [Australian Government — Manage your inventory](https://business.gov.au/products-and-services/inventory-management/manage-your-inventory) | Australie | Explique système périodique/perpétuel, ventes/retours, point de commande, inventaires et revue des écarts. | Exemple officiel : 10 chaises par semaine et 2 semaines de délai donnent un point de commande de 20 avant stock de sécurité. | Guide de gestion, pas comparatif logiciel. | Ajouter la pédagogie du réapprovisionnement et montrer que le logiciel applique une règle avant de « prévoir ». |
| [Microsoft — tarifs Business Central](https://www.microsoft.com/fr-fr/dynamics-365/products/business-central/pricing) | International / France | Donne un prix officiel de licence datable : 69,30 € HT/utilisateur/mois pour Essentials et 95,30 € pour Premium au jour de l’audit. | Source primaire officielle et tableau de fonctionnalités. | Prix volatil, annuel, hors TVA, conseil, mise en œuvre, extensions, migration et support. | Montrer pourquoi un prix de licence ne suffit jamais au TCO. |
| [Odoo 19 — ajustements d’inventaire](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/warehouses_storage/inventory_management/count_products.html) | International / Belgique | Distingue quantité enregistrée, comptée, différence, date et personne ; garde un historique. | Documentation primaire de la version 19. | Décrit Odoo, pas une norme universelle. | Mettre à jour les liens de version 18 et construire une démonstration identique dans plusieurs produits. |
| [GS1 — Global Traceability Standard](https://www.gs1.org/standards/gs1-global-traceability-standard/current-standard) | International | Cadre « identifier, capturer, partager », événements critiques et données clés, niveaux article/lot/série. | Standard primaire sectoriellement neutre. | Version 2 ratifiée en 2017 ; ne remplace pas les règles sectorielles ou réglementaires. | Relier le niveau de traçabilité au risque et au besoin, pas à une mode technologique. |

## 4. Matrice de gain d’information

| Question décisive | Meilleure réponse française | Apport international | Couverture actuelle | Manque | Réponse supérieure à produire |
| --- | --- | --- | --- | --- | --- |
| L’écart vient-il du logiciel ou du travail réel ? | France Supply Chain insiste sur les processus, les données et les utilisateurs clés. | L’Australie distingue enregistrement des ventes/retours, comptage et revue des écarts. | Très bonne avec les dix mouvements. | Pas de bilan final ni mesure de fréquence/coût. | Une feuille de rapprochement qui se ferme par une égalité et chiffre le coût des anomalies. |
| Quel nombre fait foi ? | Peu de concurrents l’expliquent clairement. | GS1 distingue objets, événements et données clés. | Bonne distinction de six états. | Absence de propriétaire de donnée, règle de correction et statut par lieu. | Matrice « donnée → système responsable → événement d’entrée → correcteur → preuve ». |
| ERP, outil autonome, WMS, hybride ou sur-mesure ? | KLS compare des catégories et France Supply Chain favorise le standard proche. | ERP Research distingue outil autonome, ERP et WMS ; les pages build/buy ajoutent l’hybride. | Six options sans produit ni scénario commun. | Pas de critères pondérés ni démonstration. | Un arbre par complexité : comptage simple, multi-canal, multi-site, lots/séries, préparation, production et règle distinctive. |
| Combien coûte chaque voie ? | Quasiment absent des résultats responsables. | ORBN et plusieurs pages US utilisent 3 à 5 ans et parlent de TCO. | Absent. | Licence, configuration, intégration, matériel, formation, temps interne, support, maintenance, sortie. | Un exemple 36 mois reproductible, puis un tableur vide que le lecteur remplit avec ses devis. |
| À quel moment le sur-mesure gagne-t-il ? | Les agences invoquent souvent « vos règles uniques ». | Les meilleurs résultats disent « build the differentiator ». | Formulation juste mais qualitative (`page.tsx:617-622`). | Valeur annuelle de la règle distinctive et coût différentiel. | Calculer le point mort du cas, sans publier de seuil de marché. |
| Quelles fonctions doivent réellement être testées ? | KLS liste mobile, scan, lots et support. | ERP Research ajoute valorisation, inventaire tournant, demande, multi-entrepôts et industrie. | Casse, retour, transfert, hors ligne et correction. | Réapprovisionnement, unités, nomenclatures, droits, verrouillage, audit, export, API, reprise et charge. | Un jeu d’essai commun de 15 événements et une grille réussite/contournement/échec. |
| Comment migrer sans arrêter l’activité ? | France Supply Chain cite cible, interfaces, migration, tests et formation. | Les guides internationaux favorisent le déploiement progressif. | Bon pilote sur une référence. | Critères GO/STOP, volumes, double écriture, réconciliation et durée de conservation. | Un plan pilote avec responsable, fenêtre, rollback, égalité de contrôle et validation métier. |
| Quelles obligations ne faut-il pas confondre avec les fonctions ? | Légifrance encadre l’inventaire annuel. | GS1 fournit un cadre volontaire ; les obligations sectorielles varient. | Limite juridique honnête en fin de guide. | L’inventaire comptable français n’est pas cité ; secteurs réglementés non orientés. | Encadré « logiciel opérationnel, inventaire comptable, traçabilité sectorielle : trois sujets différents ». |

## 5. Faits et fraîcheur

| Affirmation du guide | Verdict | Source primaire actuelle | Périmètre et date | Correction |
| --- | --- | --- | --- | --- |
| Un inventaire peut remettre le théorique au niveau du comptage, mais ne dit pas pourquoi l’écart est apparu. | Confirmé et bien formulé. | [Microsoft Learn — Adjust inventory](https://learn.microsoft.com/en-us/training/modules/adjust-inventory/) et [Odoo 19 — Inventory adjustments](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/warehouses_storage/inventory_management/count_products.html) | Fonctions de produits, pages consultées le 24 juillet 2026. | Conserver en précisant que l’explication vient de l’historique des mouvements et des preuves associées, pas du seul ajustement. |
| La correction doit laisser une trace. | Confirmé comme exigence professionnelle, pas comme règle technique universelle. | Odoo 19 conserve l’historique avant/après ; Microsoft lie écritures d’articles, valeur et grand livre. | Produits précis, pas norme générale. | Présenter comme critère Hagnéré Code et démontrer le journal attendu. |
| Passer un stock existant aux lots ou séries peut créer des incohérences. | Confirmé pour Odoo. | [Odoo 19 — Reassign lot/serial numbers](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/product_management/product_tracking/reassign.html) | Version 19 consultée le 24 juillet 2026. | Le guide pointe encore la version 18 (`page.tsx:659`) : passer à 19 ou à un lien « latest » contrôlé. |
| GS1 distingue article, lot et série selon le besoin. | Confirmé. | [GS1 Global Traceability Standard](https://www.gs1.org/standards/gs1-global-traceability-standard/current-standard) | Standard GTS 2, ratifié en août 2017 et toujours présenté comme standard courant au jour de l’audit. | Ajouter la date de ratification et ne pas suggérer qu’un niveau est obligatoire sans règle sectorielle. |
| L’entreprise doit contrôler annuellement l’existence et la valeur des actifs et passifs. | Manquant du guide, à ajouter avec prudence. | [Légifrance — section contenant l’article R123-177](https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000005634379/LEGISCTA000006191083/2026-06-29) | Droit français, version en vigueur consultée le 24 juillet 2026. | Créer un encadré séparé ; ne pas en déduire qu’un WMS ou un inventaire tournant est juridiquement imposé. |
| « Temps réel » suffit à rendre le stock exact. | Faux, et le guide le réfute correctement (`page.tsx:451-456`). | Les documentations produit n’enregistrent que les événements effectivement capturés. | Principe logique, pas métrique universelle. | Conserver la réfutation et l’illustrer par un mouvement absent. |
| Un prix catalogue permet de comparer les solutions. | Faux ; le guide n’en publie pas, mais n’explique pas le piège. | [Microsoft Business Central pricing](https://www.microsoft.com/fr-fr/dynamics-365/products/business-central/pricing) | Snapshot au 24 juillet 2026 ; prix hors mise en œuvre et services. | Ajouter prix officiel daté + colonnes d’implémentation, intégration, formation, support et sortie. |
| Il existe un ROI ou un taux d’exactitude universel. | Le guide dit justement que non (`page.tsx:722-726`). | Aucun standard primaire ne fournit un seuil universel applicable à toute PME. | Tous secteurs. | Conserver ; remplacer tout futur pourcentage commercial par un calcul à hypothèses visibles. |

### Contradictions

- Le titre promet un « logiciel de gestion de stock sur mesure », tandis que la
  meilleure partie du guide démontre souvent qu’il ne faut pas développer.
  Cette tension est productive, mais le verdict standard-first doit être
  assumé dès l’ouverture.
- « Comparez six réponses » (`page.tsx:572`) est trop fort : la page les
  décrit selon leur fit, mais ne compare ni coût, ni délai, ni risque sur une
  base commune.
- Le scénario de 50 unités ne ferme pas explicitement les quantités par lieu et
  statut. Le lecteur peut croire que le transfert de 10 a été oublié dans les
  40 unités vendables.

### Faits à retirer plutôt qu’à affaiblir

- Aucun fait actuellement publié ne doit être supprimé en bloc.
- En revanche, ne jamais ajouter le « −80 % d’erreurs » trouvé chez un
  concurrent, les budgets génériques d’agences ou le seuil « 500 à 1 000
  emplacements » comme règle de décision. Sans protocole et contexte, ces
  chiffres apporteraient une fausse précision.

## 6. Scénarios et calculs à construire

Tous les chiffres suivants sont **des hypothèses pédagogiques fictives**. Ils
ne sont ni un devis Hagnéré Code, ni une moyenne de marché, ni un résultat
client. Leur intérêt est de rendre la méthode refaisable avec les chiffres du
lecteur.

### 6.1 Fermer le bilan des mouvements existants

Choix explicite du scénario : le transfert parti n’est pas vendable avant
réception ; les 2 unités cassées et le retour en contrôle ne sont pas vendables.

```text
Disponible au dépôt A = 50 reçues - 8 réservées - 10 parties en transfert - 2 cassées
Disponible au dépôt A = 30

Contrôle inverse :
30 disponibles + 8 réservées + 2 cassées + 10 en transit + 1 retour en contrôle
= 51 unités physiquement présentes dans la chaîne
= 50 unités reçues initialement + 1 retour client
```

La page doit signaler que d’autres entreprises peuvent autoriser la promesse
d’un stock en transit. Ce n’est pas le calcul qui est universel : c’est
l’obligation de publier la règle et de fermer l’égalité.

### 6.2 Chiffrer le coût mensuel des anomalies

| Variable | Simple | Central | Exigeant | Source ou hypothèse |
| --- | ---: | ---: | ---: | --- |
| Anomalies traitées par mois | 6 | 18 | 45 | Hypothèse à remplacer par le journal réel |
| Minutes par anomalie | 12 | 22 | 35 | Chronométrage à effectuer |
| Coût chargé de l’heure | 28 € | 32 € | 40 € | Hypothèse interne, pas tarif de marché |
| Réexpéditions urgentes/mois | 1 | 3 | 8 | Historique transport |
| Coût par réexpédition | 30 € | 45 € | 70 € | Factures transport |
| Coût mensuel calculé | 63,60 € | 346,20 € | 1 610 € | Formule ci-dessous |
| Coût annuel calculé | 763,20 € | 4 154,40 € | 19 320 € | Mensuel × 12 |

```text
Formule : anomalies × minutes / 60 × coût horaire + réexpéditions × coût unitaire
Horizon : 12 mois
Inclus : temps directement observé et surcoût de réexpédition
Exclus : ventes perdues, réputation, immobilisation du stock, erreurs comptables et litiges, pour éviter de les inventer ou les compter deux fois
Résultat central : 18 × 22 / 60 × 32 + 3 × 45 = 346,20 €/mois, soit 4 154,40 €/an
Analyse de sensibilité : si seulement 60 % de ce coût est évitable par la solution, le gain annuel attribuable est 2 492,64 €
Variable qui fait basculer la décision : part réellement évitable, puis fréquence des anomalies
Contrôle inverse : 346,20 - 135 de transport = 211,20 €, soit 6,6 heures × 32 €
```

### 6.3 Comparer un TCO sur 36 mois

Hypothèse commune : 10 utilisateurs, même périmètre fonctionnel de base, même
jeu de données, pas de nouveau module de production ou de comptabilité.

| Poste sur 36 mois | Standard configuré | Standard + parcours ciblé | Application spécifique |
| --- | ---: | ---: | ---: |
| Licences | 10 × 45 € × 36 = 16 200 € | 16 200 € | 0 € dans l’exemple |
| Mise en œuvre / construction | 12 j × 700 € = 8 400 € | 30 j × 700 € = 21 000 € | 70 j × 700 € = 49 000 € |
| Temps interne | 80 h × 35 € = 2 800 € | 120 h × 35 € = 4 200 € | 160 h × 35 € = 5 600 € |
| Support, maintenance, hébergement | 250 € × 36 = 9 000 € | 500 € × 36 = 18 000 € | (180 € + 900 €) × 36 = 38 880 € |
| Export / sortie | 3 j × 700 € = 2 100 € | 6 j × 700 € = 4 200 € | 12 j × 700 € = 8 400 € |
| **Total illustratif** | **38 500 €** | **63 600 €** | **101 880 €** |

```text
Formule : coûts initiaux + récurrents sur 36 mois + temps interne + sortie
Horizon : 36 mois
Inclus : postes visibles ci-dessus
Exclus : matériel de scan, taxes, inflation, coût du capital, fonctions non communes et aléas contractuels
Résultat : dans ce scénario fictif, le standard coûte 63 380 € de moins que le spécifique
Analyse de sensibilité : le spécifique doit créer ou protéger plus de 21 126,67 € par an pendant trois ans pour seulement égaler cet écart, avant prime de risque
Variable qui fait basculer la décision : valeur annuelle de la règle réellement distinctive, puis coût de maintenance
Contrôle inverse : 101 880 - 38 500 = 63 380 ; 63 380 / 3 = 21 126,67 €/an
```

Le guide doit immédiatement préciser que les 45 €/mois et 700 €/jour sont
choisis pour expliquer le calcul. Ils seront remplacés par les licences, devis,
salaires chargés et conditions de sortie du lecteur.

### 6.4 Montrer qu’une fonction simple précède parfois le sur-mesure

À partir de l’exemple officiel australien :

```text
Demande moyenne = 10 unités/semaine
Délai fournisseur = 2 semaines
Stock de sécurité choisi par l'entreprise = 8 unités
Point de commande = 10 × 2 + 8 = 28 unités

Sensibilité :
si le délai passe à 3 semaines, le point devient 10 × 3 + 8 = 38 unités
```

Ce calcul ne prouve pas qu’une prévision automatique est inutile. Il montre
qu’un logiciel ne peut pas compenser une demande, un délai ou un stock de
sécurité non définis.

## 7. Comparaison et position professionnelle

```text
Options réellement comparables : clarification du processus ; reconfiguration ; logiciel autonome/ERP/WMS standard ; standard + interface/parcours ciblé ; application spécifique.
Périmètre et horizon communs : mêmes 10 utilisateurs, mêmes mouvements critiques, mêmes exigences de lots/multi-site, 36 mois, temps interne et sortie inclus.
Option la moins chère : la correction du processus si elle résout la cause ; sinon, dans l'exemple construit, le standard configuré.
Option la moins risquée : le standard démontré sur les mauvais cas, avec export, restauration et pilote ; pas le standard choisi sur une brochure.
Option qui demande le moins de temps interne : généralement le standard bien accompagné, à confirmer par les devis et la reprise.
Position Hagnéré Code pour le cas fréquent : ne reconstruisez pas le cœur d'un stock fiable. Gardez ou achetez un système de référence standard et développez seulement le geste terrain, la règle ou l'intégration que le pilote prouve réellement distinctive.
Faits qui la fondent : les produits standards couvrent déjà comptage, lots, emplacements et journaux ; France Supply Chain conseille de rester au plus près du standard et de corriger les anomalies à la source ; le TCO spécifique porte maintenance et sortie.
Cas où l'option opposée gagne : règle métier réellement différenciante, contrainte hors ligne ou matérielle, intégration critique, volumétrie ou obligation sectorielle non couverte, valeur démontrée supérieure au surcoût sur le même horizon.
Signal de révision : deux produits standards testés échouent sur le même cas critique sans contournement soutenable, et la valeur annuelle de cet écart est mesurée.
Ce que nous déconseillons même si nous pourrions le vendre : refaire un mini-ERP complet parce que trois écrans affichent des nombres différents.
```

Opinion à assumer dans la future page :

> Notre position est simple : **achetez la mécanique commune, développez
> seulement l’avantage ou la contrainte que vous pouvez nommer, tester et
> chiffrer**. Un écart de stock inexpliqué n’est pas encore un cahier des
> charges.

## 8. Objections et cas limites

| Objection loyale | Réponse prouvée | Ce qui reste incertain | Conséquence |
| --- | --- | --- | --- |
| « Notre processus est unique, donc il nous faut du sur-mesure. » | Des produits standards couvrent lots, séries, multi-emplacements, inventaires et ajustements. | Le produit couvre-t-il les mauvais cas réels sans contournement ? | Faire deux démonstrations scénarisées avant de conclure. |
| « Le standard coûte cher tous les mois. » | Le prix récurrent est visible et doit être compté. | Le spécifique coûtera-t-il moins après maintenance, hébergement, disponibilité et sortie ? | Comparer 36 mois, pas licence mensuelle contre devis initial. |
| « Un scan supprimera les erreurs. » | Le scan identifie un objet ; la page explique justement qu’il ne confirme pas tout le geste (`page.tsx:560-569`). | Ergonomie, réseau, unité, droit de correction et formation. | Tester le geste complet sur le terrain. |
| « Nous devons avoir du temps réel. » | Un événement absent reste absent même avec une mise à jour instantanée. | Quel délai d’actualisation est réellement utile à chaque décision ? | Définir une exigence mesurable par événement, pas un slogan. |
| « Nous ne pouvons pas attendre pour tout documenter. » | Dix mouvements sur une référence sont un échantillon borné. | Cet échantillon représente-t-il les cas les plus coûteux ? | Choisir la référence à risque maximal, puis élargir seulement si nécessaire. |
| « Le WMS est réservé aux grands entrepôts. » | Les outils et périmètres varient fortement. | Aucun seuil d’emplacements universel n’est démontré. | Choisir selon les fonctions et la valeur, pas un seuil repris d’une fiche. |
| « Le logiciel doit aussi prévoir les achats. » | Un point de commande simple dépend déjà de la demande, du délai et du stock de sécurité. | Variabilité, saisonnalité, fiabilité fournisseur, promotions. | Séparer règle explicite, prévision et décision d’achat. |
| « Notre secteur exige une traçabilité totale. » | GS1 distingue article, lot et série ; les obligations sont sectorielles. | Texte applicable, produit, risque, territoire et chaîne concernés. | Faire valider le périmètre réglementaire avant de figer l’architecture. |

## 9. Plan de réécriture

| Ordre | Section proposée | Question résolue | Preuve, scénario ou outil | Décision produite | À conserver / créer / couper |
| ---: | --- | --- | --- | --- | --- |
| 1 | Le verdict en 90 secondes | Standard ou sur-mesure ? | Position standard-first + 4 signaux de bascule | Première orientation | Créer ; garder l’exemple 42/38/41 en second paragraphe |
| 2 | Fermer l’égalité avant d’acheter | Où naît l’écart ? | Bilan 30 + 8 + 2 + 10 + 1 = 51 | Processus, paramétrage ou donnée | Conserver la chronologie, ajouter le contrôle inverse |
| 3 | Les nombres derrière « stock » | Que compare-t-on ? | Six états + lieu + propriétaire + règle de disponibilité | Glossaire commun | Conserver, enrichir source de vérité/correcteur |
| 4 | Combien les écarts vous coûtent | Le problème justifie-t-il un projet ? | Calcul simple/central/exigeant | Budget maximal rationnel | Créer |
| 5 | Quel type d’outil pour quel profil | Outil autonome, ERP, WMS, hybride ? | Matrice secteur/flux/sites/lots/préparation/production | Liste courte | Créer ; réduire les six cartes redondantes |
| 6 | Testez trois solutions sur le même cas | Les promesses fonctionnent-elles ? | Jeu de 15 événements, export, droits, hors ligne, reprise | Élimination documentée | Créer |
| 7 | Comparez le coût sur 36 mois | Quelle voie coûte réellement le moins ? | TCO licences + intégration + interne + maintenance + sortie | Standard/hybride/spécifique | Créer |
| 8 | Notre position sur le sur-mesure | Quand construire ? | Écart fonctionnel × valeur annuelle, cas opposé et signal de révision | GO / pilote / STOP | Créer et assumer |
| 9 | Migrer une référence sans bloquer | Comment réduire le risque ? | Pilote, égalité, mauvais cas, GO/STOP, rollback | Plan de bascule | Conserver et approfondir |
| 10 | Obligations, lots et comptabilité | Qu’est-ce qui relève du logiciel ou du spécialiste ? | Légifrance, GS1, Odoo 19 | Périmètre à valider | Créer |
| 11 | Kit de décision téléchargeable | Comment refaire l’analyse ? | Journal 10 mouvements + TCO + grille démo | Dossier fournisseur | Créer |
| 12 | Audit Hagnéré Code | Quel premier livrable acheter ? | Livrable : causes, options, TCO, recommandation et exclusions | Conversion honnête | Réécrire le CTA sans promesse de développement |

### Contrat des 150 premiers mots

Proposition de fond, à réécrire avec la voix finale :

> Votre ERP indique 42 unités, l’entrepôt en compte 38 et votre site en promet
> 41. Faut-il changer de logiciel ? **Pas encore.** Dans la plupart des cas, la
> première dépense utile consiste à retrouver le mouvement qui a créé l’écart :
> une réception non confirmée, un transfert resté en attente, une casse, un
> retour ou une double saisie. Ensuite seulement, comparez quatre voies :
> corriger le travail, reconfigurer l’outil, adopter un logiciel standard ou
> développer le morceau réellement spécifique. Notre avis professionnel est
> clair : ne reconstruisez pas les fonctions courantes d’un ERP ou d’un WMS si
> un standard sait les exécuter sur vos cas réels. Le sur-mesure devient
> rationnel lorsqu’un écart fonctionnel stable, important et mesuré vaut plus
> que son coût supplémentaire sur plusieurs années. Ce guide vous donne le
> contrôle à refaire, un comparatif à 36 mois et les tests à imposer avant de
> signer.

Ces 150 mots doivent fournir : problème concret, réponse immédiate, options,
opinion Hagnéré Code, horizon économique et promesse du guide.

### Éléments à supprimer

- La formulation « comparez six réponses » tant qu’aucun périmètre constant
  n’est présenté.
- Les grands aplats de cartes s’ils répètent seulement « bon fit / refusez si »
  sans coût ni preuve.
- Les liens Odoo 18 devenus moins actuels que la documentation 19.
- Tout futur taux de gain, délai ou budget non accompagné d’une origine,
  d’hypothèses et d’un contrôle inverse.

### Éléments à conserver

- L’ouverture 42/38/41.
- La distinction physique, théorique, réservé, disponible, en attente et non
  vendable.
- Le journal des dix mouvements et ses huit champs.
- La phrase « le code-barres identifie ; le geste confirme ».
- La recherche du système qui fait foi.
- Le pilote sur une référence, les mauvais cas et le retour arrière.
- Le CTA qui autorise réglage, standard ou absence de développement.

## 10. Contre-audit après correction

La page publique n’a pas été modifiée pendant cet audit. Le tableau ci-dessous
devient la liste de contrôle obligatoire de la réécriture.

| Problème | Priorité | Correction appliquée | Revalidation indépendante |
| --- | --- | --- | --- |
| Pas de TCO à horizon constant | P1 | En attente | Refaire tous les totaux à partir des hypothèses publiées |
| Pas de démonstration de produits sur un scénario commun | P1 | En attente | Vérifier captures, versions, exports et résultats |
| Exemple de mouvements non fermé par une égalité | P1 | En attente | Rejouer le contrôle inverse |
| Lien Odoo 18 | P1 | En attente | Ouvrir la documentation 19 au jour de publication |
| Absence d’inventaire comptable français | P2 | En attente | Relire Légifrance et faire vérifier la portée éditoriale |
| Réapprovisionnement et inventaires tournants peu couverts | P2 | En attente | Vérifier que les exemples n’impliquent aucun seuil universel |
| CTA sans livrable économique explicite | P2 | En attente | Contrôler le bon et le mauvais fit commercial |

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

Objectif de réécriture : au moins **90/100**, aucun axe sous **8/10**, seulement
après contre-audit indépendant, réouverture des sources et test visuel réel.

## 11. Preuves techniques et visuelles

```text
Manifeste : aucun manifeste de réécriture créé ; audit seulement
Calculs refaits : oui, avec Node.js ; coûts d'anomalies, TCO 36 mois, point mort et point de commande
Sources rouvertes : oui, France, États-Unis, Royaume-Uni, Australie et sources primaires internationales
Liens vérifiés : les URL majeures de cet audit ont été ouvertes le 24 juillet 2026 ; Odoo 18 a une version 19 plus actuelle
Commandes : shasum -a 256 ; lecture nl/sed ; recalcul Node.js
Rendu 320 / 390 / 768 / 1024 / 1440 : non exécuté, aucune page publique modifiée
Image sociale : non contrôlée dans ce sous-audit éditorial
Statut maximal prouvé : audité et plan de réécriture documenté
Réserve publication / indexation : aucune correction publique n'est réalisée ni validée ; ne pas présenter ce dossier comme une publication ou une amélioration indexée
```
