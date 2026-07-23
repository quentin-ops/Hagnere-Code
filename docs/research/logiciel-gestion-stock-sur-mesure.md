# Dossier de recherche — logiciel de gestion de stock sur mesure

> Les quatre passes sont terminées. Le trajet de stock, les limites et les
> choix possibles ont été contre-audités puis contrôlés dans le rendu de
> production. La publication est déléguée, sans test par un lecteur humain réel.

## Journal des quatre passes

Propriétaire éditorial unique : `/root`

| Passe                        | État                               | Date            | Responsable                 | Snapshot                                                              | Blocages |
| ---------------------------- | ---------------------------------- | --------------- | --------------------------- | --------------------------------------------------------------------- | -------- |
| 1. Recherche                 | Terminée — porte validée           | 23 juillet 2026 | `/root`                     | `docs/research/manifests/logiciel-gestion-stock-sur-mesure-p1.sha256` | Aucun    |
| 2. Rédaction et intégration  | Terminée — prête pour contre-audit | 23 juillet 2026 | `/root/p2_batch3_apps`      | `docs/research/manifests/logiciel-gestion-stock-sur-mesure-p2.sha256` | Aucun    |
| 3. Contre-audit indépendant  | Terminée — porte validée           | 23 juillet 2026 | `/root/p2_batch3_marketing` | `docs/research/manifests/logiciel-gestion-stock-sur-mesure-p3.sha256` | Aucun    |
| 4. Plume humaine et contrôle | Terminée — porte validée           | 23 juillet 2026 | `/root`                     | `docs/research/manifests/logiciel-gestion-stock-sur-mesure-p4.sha256` | Aucun    |

## 1. Fiche d'identité

```text
Slug : logiciel-gestion-stock-sur-mesure
Statut actuel : publiable — validation éditoriale déléguée
Requête principale : logiciel gestion stock sur mesure
Moment du parcours : comprendre l'origine des écarts puis choisir la réponse
Lecteur précis : dirigeant de PME qui vend, fabrique ou distribue des produits et dont les équipes ne font plus confiance au stock affiché
Situation déclenchante : le site vend une unité disponible, l'ERP en annonce quarante-deux et l'entrepôt n'en retrouve que trente-huit
Décision principale après lecture : corriger d'abord les mouvements ou responsabilités défaillants, puis choisir entre mieux configurer l'outil actuel, ajouter un module, adopter un standard ou développer une application ciblée
Niveau de connaissance au départ : connaît les inventaires et les références, mais ne distingue pas toujours quantité théorique, disponible, réservée, physique et en transit
5 questions indispensables : quel chiffre est faux ? à quel événement l'écart apparaît-il ? faut-il suivre emplacement, lot ou série ? qui peut corriger ? quel système doit faire foi ?
3 objections ou craintes : « Il nous faut un tableau de bord en temps réel » ; « Le nouveau logiciel corrigera les habitudes » ; « Le sur-mesure coûte forcément plus cher que les erreurs »
Action utile sans contact commercial : prendre une référence qui diverge et reconstituer ses dix derniers mouvements avec heure, lieu, quantité, auteur et document
CTA possible : transformer le diagnostic des écarts en cahier de décision
Hors périmètre : conseil comptable de valorisation, obligations sectorielles exhaustives, choix d'un WMS pour un grand entrepôt, comparatif tarifaire de logiciels
Date de la recherche : 23 juillet 2026
Responsable de la synthèse : /root
```

## 2. Contrat de langage humain

- Phrase réelle : « Mon ERP dit 42, mon chef d'entrepôt en compte 38 et le site
  continue de vendre. Est-ce que j'ai besoin d'un logiciel sur mesure ? »
- Réponse attendue : peut-être, mais seulement après avoir trouvé à quel
  mouvement l'écart naît ; automatiser un processus flou accélère aussi les
  erreurs.
- Définition simple : le stock n'est pas un nombre isolé. Il change à chaque
  réception, réservation, déplacement, consommation, retour, casse,
  expédition et correction.
- Mots ordinaires : réception, emplacement, palette, réservé, disponible,
  inventaire, écart, casse, retour, lot, numéro de série, commande, préparation.
- Jargon à traduire : WMS, SKU, allocation, ATP, picking, cycle count, SSCC,
  stock ledger, event sourcing.
- Ouverture : mettre immédiatement le lecteur devant les trois chiffres
  incompatibles, puis répondre qu'il faut localiser la première divergence
  avant de choisir un écran ou une technologie.

## 3. Cannibalisation

| Page existante                              | Intention                                     | Différence                                                             | Maillage prévu                                                    |
| ------------------------------------------- | --------------------------------------------- | ---------------------------------------------------------------------- | ----------------------------------------------------------------- |
| `/guides/erp-ou-logiciel-sur-mesure`        | Choisir un système global de gestion          | Suivre la fiabilité d'un stock et ses mouvements                       | L'ERP renverra ici pour le cas précis des quantités               |
| `/guides/application-suivi-production-pme`  | Savoir où en est un ordre de fabrication      | Savoir où se trouvent les produits et pourquoi les quantités divergent | Lier lorsque consommation de matière et production se rencontrent |
| `/guides/connecter-erp-crm-logiciel-metier` | Relier des systèmes qui échangent des données | Désigner l'autorité sur le stock et contrôler les événements           | Ne pas reproduire toute la méthode d'intégration                  |
| `/guides/transformer-excel-en-application`  | Remplacer un fichier devenu fragile           | Traiter les règles et mouvements propres au stock                      | Lier si le tableur est encore la source réelle                    |

**Verdict :** URL distincte justifiée. Le mot « sur mesure » ne doit pas
prédéterminer la recommandation.

## 4. Carte du problème

Le guide distinguera au minimum :

- **physique** : ce qui est réellement présent à un emplacement ;
- **théorique** : ce que le registre a calculé à partir des mouvements ;
- **réservé** : ce qui est promis à une commande ou un besoin ;
- **disponible** : ce qui peut encore être promis selon la règle de l'entreprise ;
- **en transit ou en attente** : ce qui a quitté un état sans être confirmé dans
  le suivant ;
- **non vendable** : casse, quarantaine, contrôle qualité, date dépassée ou
  autre statut propre au métier.

Ces catégories sont des questions de modélisation, pas une norme universelle.
Chaque entreprise devra expliciter ses propres états.

## 5. Fiche de preuves

| Affirmation utilisable                                                                                                                                                   | Source primaire                                                                                                                                                              | Nature et périmètre                                                        | Conséquence lecteur                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| Un inventaire physique sert à comparer les quantités enregistrées aux quantités réellement comptées ; les corrections doivent être enregistrées comme des ajustements    | [Microsoft Learn — Count, adjust, and reclassify inventory](https://learn.microsoft.com/en-us/dynamics365/business-central/inventory-how-count-adjust-reclassify)            | Documentation Business Central, utilisée comme exemple de journal de stock | Une correction ne doit pas effacer silencieusement l'historique de l'écart                    |
| Microsoft documente aussi des comptages cycliques pour compter certains articles plus souvent que d'autres                                                               | [Microsoft Learn — Count, adjust, and reclassify inventory](https://learn.microsoft.com/en-us/dynamics365/business-central/inventory-how-count-adjust-reclassify)            | Fonction d'un produit, pas obligation générale                             | Adapter la fréquence au risque et à la valeur plutôt que compter tout de la même façon        |
| Dans Odoo, un ajustement conserve notamment quantité enregistrée, quantité comptée, différence, date et utilisateur, avec un historique avant/après                      | [Odoo — Inventory adjustments](https://www.odoo.com/documentation/18.0/applications/inventory_and_mrp/inventory/warehouses_storage/inventory_management/count_products.html) | Exemple de fonctionnement d'un logiciel standard                           | Exiger une trace de qui a corrigé quoi, même dans une solution sur mesure                     |
| Ajouter le suivi par lot ou série après l'existence d'un stock demande une reprise cohérente ; Odoo avertit des incohérences possibles et passe par des ajustements      | [Odoo — Reassign lot/serial numbers](https://www.odoo.com/documentation/18.0/applications/inventory_and_mrp/inventory/product_management/product_tracking/reassign.html)     | Limite d'un produit, illustrant un risque de migration                     | Ne pas activer la traçabilité en production sans plan de reprise                              |
| Les standards GS1 associent la traçabilité à l'identification des articles, lots ou séries et des unités logistiques ; leur pertinence dépend de la chaîne et du secteur | [GS1 — Global Traceability Standard](https://www.gs1.org/docs/traceability/Global_Traceability_Standard.pdf)                                                                 | Standard de traçabilité, pas exigence pour toute PME                       | Décider si lot, série ou SSCC répond à un besoin réel ou réglementaire avant de le construire |

### Limites et contradictions

- une quantité « en temps réel » reste fausse si l'événement physique n'est pas
  saisi ou si deux systèmes modifient la même information ;
- le code-barres identifie ; il ne prouve pas à lui seul que le bon mouvement a
  été effectué ;
- lots, séries, dates et unités logistiques ne sont pas nécessaires pour chaque
  activité ;
- un inventaire corrige un état, mais ne révèle pas automatiquement la cause ;
- aucun taux d'exactitude ou retour sur investissement universel ne sera
  publié ;
- la valorisation comptable et les obligations sectorielles devront être
  confirmées par les spécialistes compétents.

## 6. Comparaison prévue

| Réponse possible                              | Quand elle suffit                                                                                 | Ce qu'elle ne corrige pas                    | Avant d'investir                                |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------- | -------------------------------------------- | ----------------------------------------------- |
| Clarifier le processus et les responsabilités | Les écarts naissent d'une étape non définie ou non réalisée                                       | L'outil trop lent ou inaccessible au terrain | Rejouer dix mouvements                          |
| Reconfigurer l'ERP ou le logiciel actuel      | Les fonctions existent mais sont mal paramétrées                                                  | Les doubles saisies entre systèmes           | Tester avec une référence et un emplacement     |
| Ajouter un module intermédiaire               | Le cœur de gestion reste valable mais le terrain a besoin d'un parcours simple                    | Une source de vérité non choisie             | Écrire les événements échangés et les erreurs   |
| Adopter un logiciel standard de stock ou WMS  | Les flux ressemblent aux pratiques couvertes par le produit                                       | Les règles métier réellement distinctives    | Faire une démonstration sur les mauvais cas     |
| Développer une application ciblée             | Le processus différenciant, les interfaces ou contraintes terrain ne sont pas correctement servis | Un processus encore instable                 | Livrer un périmètre pilote et un retour arrière |
| Ne rien développer maintenant                 | L'entreprise ne sait pas encore où naissent les écarts                                            | Les pertes déjà urgentes                     | Mettre en place un journal manuel daté          |

## 7. Exemple pédagogique prévu

**Exemple illustratif fictif :** « Atelier Orbe » reçoit cinquante pompes,
réserve huit unités pour deux commandes, en déplace dix vers un second dépôt,
en trouve deux endommagées et reçoit un retour client. Le guide suivra une
seule référence et montrera comment un mouvement non confirmé crée trois
chiffres différents.

L'exemple doit rester chiffré et reproductible, sans affirmer qu'il provient
d'un client. Il conduira le lecteur à identifier :

- le système qui crée le mouvement ;
- le moment où il devient officiel ;
- la personne autorisée à corriger ;
- la preuve conservée ;
- la conséquence sur la vente ;
- le contrôle qui aurait détecté l'écart.

## 8. Plan annoté

| Section                                                  | Question                                         | Format                                            | Décision                                         |
| -------------------------------------------------------- | ------------------------------------------------ | ------------------------------------------------- | ------------------------------------------------ |
| Votre stock affiche trois vérités                        | Pourquoi personne ne fait confiance au chiffre ? | Scène d'ouverture                                 | Chercher la première divergence                  |
| Un stock change à chaque événement                       | Qu'est-ce qui doit être enregistré ?             | Frise des mouvements                              | Nommer événements et confirmations               |
| Commencez par une référence qui pose problème            | Comment diagnostiquer sans grand projet ?        | Exercice en dix lignes                            | Produire une preuve exploitable                  |
| Choisissez le chiffre qui autorise une vente             | Quel système doit faire foi ?                    | Questions direction/terrain                       | Désigner l'autorité et la règle de disponibilité |
| Lot, série, emplacement : seulement si le métier l'exige | Quel niveau de détail choisir ?                  | Cas d'usage                                       | Éviter la complexité décorative                  |
| Une correction doit laisser une trace                    | Comment traiter l'inventaire et l'écart ?        | Avant/après                                       | Corriger sans effacer la cause                   |
| Comparez six réponses, dont ne rien développer           | Quelle solution choisir ?                        | Cartes plutôt que grand tableau mobile            | Investir au bon niveau                           |
| Testez les mauvais cas avant la démonstration idéale     | Comment évaluer un logiciel ?                    | Scénarios de casse, retour, hors-ligne et doublon | Refuser une démonstration superficielle          |
| Plan de reprise sans bloquer les expéditions             | Comment migrer ?                                 | Pilote, double contrôle, retour arrière           | Sécuriser le changement                          |
| Bon fit, mauvais fit et questions fréquentes             | Quand demander de l'aide ?                       | Encadrés et FAQ                                   | Conversion honnête                               |

## 9. Action autonome et conversion

Artefact dans la page : tableau copiable des dix derniers mouvements d'une
référence, avec date, quantité avant, événement, quantité après, emplacement,
auteur, document, système et anomalie. Aucun téléchargement ni adresse e-mail
n'est requis.

Bon fit : PME avec écarts documentés, plusieurs rôles ou systèmes, et volonté
de désigner une source de vérité.

Mauvais fit : demande d'un écran « temps réel » sans discipline de saisie,
consultation de valorisation comptable ou obligation sectorielle à certifier.

CTA : « Transformer mes écarts de stock en plan d'action » vers
`/demarrer-un-projet`, après l'exercice autonome.

## 10. Rapport P1

```text
PASSE 1 TERMINÉE
Slug : logiciel-gestion-stock-sur-mesure
Lecteur et phrase réelle : dirigeant de PME — « L'ERP dit 42, l'entrepôt 38 et le site continue de vendre. »
Décision : trouver le mouvement fautif puis clarifier, configurer, intégrer, acheter, développer ou attendre
Angle et forme dominante : suivre une unité et son journal de mouvements
Pages proches et différence : le guide ERP choisit un système global ; celui-ci traite la fiabilité du stock
Sources décisives : documentation Microsoft et Odoo pour les mécanismes ; GS1 pour la traçabilité lorsqu'elle s'applique
Incertitudes exclues : taux d'exactitude, ROI, obligation universelle de lot/série, valorisation et conformité sectorielle
Action autonome et CTA possible : rejouer dix mouvements ; transformer les écarts en plan d'action
Plan : scène, événements, exercice, autorité, détail utile, correction, comparaison, mauvais cas, migration, fits, FAQ
Snapshot : docs/research/manifests/logiciel-gestion-stock-sur-mesure-p1.sha256
```

## 11. Revue de porte P1

- [x] scène, lecteur et décision définis ;
- [x] quantité physique, théorique, réservée et disponible distinguées ;
- [x] le sur-mesure reste une option, pas le verdict ;
- [x] sources primaires ou documentations éditeur clairement qualifiées ;
- [x] lots et séries limités aux besoins qui les justifient ;
- [x] exemple fictif annoncé avant utilisation ;
- [x] option de ne pas développer présente ;
- [x] action autonome exploitable ;
- [x] aucune performance ou conformité inventée ;
- [x] P2, P3 et P4 terminées ; publication déléguée et contrôlée.

## 12. Rapport P2

```text
PASSE 2 TERMINÉE
Fichiers créés ou modifiés : page.tsx et opengraph-image.tsx du slug ; dossier P1 complété par ce rapport
Ouverture et réponse : trouver le premier mouvement faux avant de choisir un logiciel
Forme propre au sujet : incident fictif suivi sur une frise, journal autonome de dix mouvements, puis six réponses comparées
Exemple ou calcul : Atelier Orbe est annoncé comme exemple illustratif fictif ; réception, réservation, transfert non confirmé, casse et retour restent cohérents
Sources visibles : Microsoft Business Central pour comptages et ajustements, Odoo pour historique et reprise lot/série, GS1 pour la traçabilité lorsqu’elle s’applique
Action autonome, bon fit et mauvais fit : rejouer dix mouvements ; le sur-mesure est réservé aux règles, connexions ou contraintes terrain réellement distinctives
CTA et destination : un seul GuideInlineCTA, « Présenter mes écarts », vers /demarrer-un-projet, téléphone masqué
Contrôles rapides : Prettier ciblé, ESLint ciblé, TypeScript et git diff --check conformes selon le rapport de l'éditeur
Snapshot : docs/research/manifests/logiciel-gestion-stock-sur-mesure-p2.sha256
```

L’entrée `src/lib/guides.ts`, le maillage entrant et le garde-fou éditorial
commun sont ajoutés au snapshot P2 par l’éditeur central. Cette porte ne vaut
ni P3, ni P4, ni autorisation de publication.

## 13. Rapport P3 — contre-audit indépendant

```text
PASSE 3 TERMINÉE
Relecteur indépendant : /root/p2_batch3_marketing
Affirmations et sources revérifiées : distinctions entre stock physique, calculé, réservé, disponible et attendu ; ajustements, lots, séries et traçabilité
Calculs refaits : chronologie fictive des mouvements et cohérence des trois valeurs 42, 38 et 41
P0 trouvés / corrigés : 0 / 0
P1 trouvés / corrigés : 2 / 2 — troisième valeur absente de l’ouverture et snapshot P2 devenu historique
Suggestions rejetées et pourquoi : aucun seuil de volume ni ROI universel ajouté ; ils dépendraient des flux, erreurs et contraintes réelles
Corrections pédagogiques et commerciales : ouverture rendue explicitement fictive, dénégation client renforcée et six chemins maintenus, dont régler l’existant ou ne rien développer
Revalidation du relecteur : P0/P1/P2 = 0/0/0 sur le contenu courant
Contrôles intermédiaires : Prettier, ESLint, TypeScript, tests ciblés, liens et contrat de scénario fictif conformes
Snapshot : docs/research/manifests/logiciel-gestion-stock-sur-mesure-p3.sha256
```

## 14. Rapport P4 — plume, rendu et gel

```text
PASSE 4 TERMINÉE
Passages humanisés : l’écart 42/38/41 ouvre désormais le guide, puis chaque choix repart du premier mouvement faux au lieu de vendre un écran
Coupe ou resserrement : explications de stock théorique, physique, réservé et disponible rapprochées de la scène ; comparaisons redondantes retirées
Retour P3 effectué : oui — chronologie fictive, quantités, lots, séries et portée de la traçabilité ont été revérifiés ; relecture finale P0/P1/P2 = 0/0/0
Scorecard justifiée : 19/20 — Intention 2, Décision 2, Pédagogie 2, Profondeur 2, Preuve 2, Comparaison 2, Originalité 2, Style 1, Conversion 2, SEO/produit 2
Validation humaine réelle : non
Test réalisé par une personne réelle : non
Autorisation éditoriale : délégation explicite du commanditaire
Décision de publication : autorisée explicitement par le commanditaire
Commandes et résultats : check:seo 215/215 ; ESLint 32 fichiers ; TypeScript conforme ; npm test 440/440 ; build et postbuild de production conformes ; diff-check conforme
Largeurs et états contrôlés : 320, 390, 768, 1 024 et 1 440 px ; clair et sombre ; frise, cartes, tableaux, CTA, FAQ et footer sans débordement
Route, OG et console : route 200, H1 unique, canonical et robots conformes ; OG 200 en PNG 1 200 × 630 ; aucun overlay ni erreur navigateur
Snapshot final : docs/research/manifests/logiciel-gestion-stock-sur-mesure-p4.sha256
Statut maximal : Publiable
Verdict : publiable en index/follow ; cela ne prouve ni crawl, ni indexation Google, ni position
```
