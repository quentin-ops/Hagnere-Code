# Contre-audit P3 — logiciel de gestion de stock sur mesure

## Identité du snapshot contrôlé

- **Route :** `/guides/logiciel-gestion-stock-sur-mesure`
- **Date :** 24 juillet 2026
- **Nature :** contre-audit indépendant après réécriture
- **Guide :** `src/app/guides/logiciel-gestion-stock-sur-mesure/page.tsx`
- **Registre :** `src/lib/guides.ts`
- **Ressource :** `public/ressources/grille-test-logiciel-stock-15-evenements.csv`
- **Audit initial relu :**
  `docs/audits/giga-audit-2026-07-24/guides/logiciel-gestion-stock-sur-mesure.md`

| Fichier       | SHA-256 du snapshot final                                          |
| ------------- | ------------------------------------------------------------------ |
| Guide         | `6bc26f1a8451f3740ba57d967cecf2be32b568ed082553314f4da15b00e2bb9e` |
| Registre      | `2820266f43915a811f9b12620d4932de070b622cc5e1629a14efb162c156cef3` |
| Grille CSV    | `39bcb1c658b0583230a7f778b8968009c975534b3f0d7ae8cf041671c7951f42` |
| Audit initial | `c775385d6a12b0862882a3f60a1babf5a304a7ca09c55174d3bc8870136e8660` |

## Verdict exécutif

**VERDICT : VALIDABLE — 95/100.**

Le guide est devenu un dossier de décision réellement utile à un dirigeant. Il
ne part plus du logiciel à vendre, mais d’un écart de stock à expliquer. Il
permet ensuite de :

1. distinguer six nombres de stock ;
2. fermer une égalité par lieu et par statut ;
3. chiffrer le coût des anomalies sans inventer des ventes perdues ;
4. choisir entre correction du travail, ERP, outil de stock, WMS, hybride et
   spécifique ;
5. imposer quinze événements communs à deux fournisseurs ;
6. comparer trois coûts complets sur 36 mois ;
7. tester la sensibilité économique ;
8. définir un point de commande simple avant de réclamer une prévision ;
9. préparer une migration pilote et une sortie ;
10. séparer stock opérationnel, inventaire comptable et traçabilité
    sectorielle.

La position commerciale est nette et loyale : Hagnéré Code déclare son intérêt
dans le développement sur mesure, recommande le standard pour la mécanique
commune et accepte qu’un diagnostic conclue à ne rien développer.

Aucun P0 ni P1 ne reste ouvert dans le snapshot final. Deux P1 ont été détectés
pendant le contre-audit, corrigés par le chantier principal, puis revérifiés :

- le récit annonçait 40 unités vendables alors que sa propre règle retirait
  aussi 10 unités en transit et conduisait à 30 ;
- la phrase sur le scan demandait improprement de prouver que « la casse est
  vendable ».

Le texte final publie bien 30 unités et explique que les unités cassées doivent
être isolées et rendues non vendables.

## Score officiel — 10 axes

| Axe           |   Note /10 | Justification                                                                                                                   |
| ------------- | ---------: | ------------------------------------------------------------------------------------------------------------------------------- |
| Intention     |         10 | Le conflit 42 / 38 / 41 place immédiatement le lecteur dans une situation vécue                                                 |
| Décision      |         10 | Chaque voie possède une condition d’entrée, un motif de refus et une prochaine action                                           |
| Pédagogie     |         10 | Définitions, chronologie, contrôle inverse, formules, exemples et limites sont compréhensibles par un dirigeant                 |
| Profondeur    |         10 | Processus, droits, états, scans, hors-ligne, ERP/WMS, TCO, réapprovisionnement, migration, sortie et obligations sont couverts  |
| Preuve        |          9 | Sources primaires actuelles et calculs reproductibles ; aucun banc d’essai propriétaire sur des comptes éditeur                 |
| Comparaison   |          9 | Même jeu d’événements et même horizon économique ; comparaison des produits encore documentaire, ce qui est déclaré             |
| Originalité   |         10 | Égalité de stock, grille de quinze événements et doctrine « mécanique commune / règle distinctive » sont mémorables             |
| Style         |          9 | Plume humaine et ferme ; la densité de 20 minutes demande une lecture engagée                                                   |
| Conversion    |         10 | Valeur gratuite, biais déclaré, livrable concret et CTA pouvant conclure contre le développement                                |
| SEO / produit |          8 | Intention, entités, données structurées, ressource et maillage solides ; finition CSV et preuve de production restent à traiter |
| **Total**     | **95/100** | **Aucun axe sous 8/10 et aucun P0/P1 restant**                                                                                  |

## Vérification des faits et sources officielles

### Microsoft Business Central

La [page tarifaire officielle
Microsoft](https://www.microsoft.com/fr-fr/dynamics-365/products/business-central/pricing)
affiche bien, au jour du contrôle :

- Essentials : 69,30 € HT par utilisateur et par mois ;
- Premium : 95,30 € HT par utilisateur et par mois ;
- Team Members : 6,90 € HT par utilisateur et par mois ;
- paiement annuel ;
- TVA non comprise ;
- avertissement indiquant que le prix réel peut varier selon la monnaie, le
  pays ou la région et qu’il apparaît lors de l’achat.

La page demande par ailleurs de contacter un partenaire pour l’évaluation, le
conseil et la tarification supplémentaire. Le guide a donc raison de présenter
ces montants comme des prix de licence datés, pas comme le coût d’un projet.

La [documentation Microsoft Learn sur les comptages, ajustements et
reclassements](https://learn.microsoft.com/en-us/dynamics365/business-central/inventory-how-count-adjust-reclassify),
mise à jour le 17 juin 2026, confirme :

- le rapprochement entre quantité attendue et quantité physique ;
- la création d’écritures après comptage ;
- la distinction entre ajustement et reclassement ;
- le traitement particulier des emplacements et journaux d’entrepôt ;
- les inventaires tournants et les fréquences attribuées aux articles.

Le guide ne transforme pas ces fonctions de Business Central en norme
universelle. Il les utilise comme preuve que des solutions standards couvrent
déjà ces mécanismes.

### Odoo 19

La [documentation Odoo 19 sur les ajustements
d’inventaire](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/warehouses_storage/inventory_management/count_products.html)
confirme :

- quantité enregistrée, quantité comptée et différence calculée ;
- date planifiée et utilisateur responsable ;
- motif ou référence lors de l’application groupée ;
- historique avant/après et utilisateur ayant appliqué le comptage ;
- création d’un mouvement de stock lors de l’ajustement ;
- possibilité d’annuler l’ajustement par une écriture supplémentaire.

La [documentation Odoo 19 sur la réaffectation de lots et
séries](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/product_management/product_tracking/reassign.html)
avertit bien que l’activation du suivi après l’existence du stock peut produire
des enregistrements incohérents. Elle décrit deux ajustements : ramener à zéro
les quantités non identifiées, puis les recréer avec leurs lots ou séries.

La transposition publiée est honnête : le guide précise que cette procédure est
propre à Odoo et n’en conserve que la question générale de reprise sans perte ni
double comptage.

### GS1

Le [GS1 Global Traceability
Standard](https://www.gs1.org/standards/gs1-global-traceability-standard/current-standard)
est toujours présenté comme le standard courant. Il repose bien sur
« Identify – Capture – Share », reste neutre en matière de secteur et de
technologie, et distingue notamment :

- l’article au niveau classe ;
- le lot ou batch ;
- l’instance sérialisée ;
- les unités logistiques et autres objets traçables.

Le guide n’affirme pas que le niveau le plus fin est obligatoire. Il relie
correctement le choix au besoin métier, à la chaîne et aux règles sectorielles
applicables.

### Légifrance

L’[article R123-177 du Code de
commerce](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000030927443)
est en vigueur depuis le 1er janvier 2016. Il définit l’inventaire comme le
contrôle annuel, à la clôture, de l’existence et de la valeur de tous les
éléments d’actif et de passif. Il demande que les données d’inventaire soient
organisées de manière à justifier le contenu et le mode d’évaluation des postes
du bilan.

Le guide respecte la portée du texte : il n’en déduit ni obligation de WMS, ni
scan obligatoire, ni fréquence universelle d’inventaire tournant.

### Australian Government

Le guide officiel [Manage your
inventory](https://business.gov.au/products-and-services/inventory-management/manage-your-inventory)
définit le point de commande et donne bien l’exemple de 10 chaises vendues par
semaine avec un délai de deux semaines, soit un point de commande de 20.

Le guide Hagnéré Code ajoute ensuite explicitement, sous sa propre
responsabilité pédagogique, un stock de sécurité fictif de huit unités. Il ne
fait pas passer ce supplément pour une donnée du gouvernement australien.

## Recalcul indépendant de tous les montants

### 1. Fermeture de l’égalité

```text
Disponible au dépôt A
= 50 reçues - 8 réservées - 10 en transit - 2 cassées
= 30

Contrôle inverse de la chaîne
= 30 disponibles + 8 réservées + 10 en transit + 2 cassées
  + 1 retour en contrôle
= 51

Origine
= 50 reçues initialement + 1 retour client
= 51
```

**Verdict : juste.**

Le texte signale correctement que l’exclusion du transit est une règle propre
à l’exemple. La règle peut changer ; l’obligation de fermer l’égalité reste.

### 2. Coût des anomalies

| Scénario |                        Recalcul mensuel |            Recalcul annuel | Verdict   |
| -------- | --------------------------------------: | -------------------------: | --------- |
| Simple   |   `6 × 12 / 60 × 28 + 1 × 30 = 63,60 €` |    `63,60 × 12 = 763,20 €` | **Juste** |
| Central  | `18 × 22 / 60 × 32 + 3 × 45 = 346,20 €` | `346,20 × 12 = 4 154,40 €` | **Juste** |
| Exigeant |  `45 × 35 / 60 × 40 + 8 × 70 = 1 610 €` |    `1 610 × 12 = 19 320 €` | **Juste** |

Contrôle du scénario central :

```text
Temps = 18 × 22 / 60 = 6,6 heures
Coût du temps = 6,6 × 32 = 211,20 €
Transport = 3 × 45 = 135 €
Total = 211,20 + 135 = 346,20 € / mois

Part évitable fictive
= 4 154,40 × 60 %
= 2 492,64 € / an
```

**Verdict : juste.**

Le guide évite les doubles comptes : réputation, ventes perdues, litiges,
rappels et arrêts de production ne sont ajoutés que s’ils disposent de leur
propre mesure.

### 3. Coût complet sur 36 mois

#### Standard configuré

```text
Licences = 10 × 45 × 36 = 16 200 €
Mise en œuvre = 12 × 700 = 8 400 €
Temps interne = 80 × 35 = 2 800 €
Support = 250 × 36 = 9 000 €
Sortie = 3 × 700 = 2 100 €
Total = 38 500 €
```

#### Standard et parcours ciblé

```text
Licences = 10 × 45 × 36 = 16 200 €
Construction = 30 × 700 = 21 000 €
Temps interne = 120 × 35 = 4 200 €
Support = 500 × 36 = 18 000 €
Sortie = 6 × 700 = 4 200 €
Total = 63 600 €
```

#### Application spécifique

```text
Construction = 70 × 700 = 49 000 €
Temps interne = 160 × 35 = 5 600 €
Hébergement et maintenance = (180 + 900) × 36 = 38 880 €
Sortie = 12 × 700 = 8 400 €
Total = 101 880 €
```

#### Point mort

```text
Écart spécifique / standard = 101 880 - 38 500 = 63 380 €
Écart annuel sur trois ans = 63 380 / 3 = 21 126,67 €
```

**Verdict : tous les montants sont justes.**

Le guide publie désormais près du tableau les exclusions du scénario :
terminaux, lecteurs, formation, intégrations hors périmètre, taxes, inflation,
coût du financement, aléas et fonctions non communes. Il précise aussi que le
point mort ne contient aucune prime de risque.

### 4. Sensibilité

| Variation                                |                 Recalcul | Résultat publié | Verdict   |
| ---------------------------------------- | -----------------------: | --------------: | --------- |
| Licence standard de 45 à 70 €            |  `38 500 + 25 × 10 × 36` |        47 500 € | **Juste** |
| Support hybride de 500 à 800 €           |      `63 600 + 300 × 36` |        74 400 € | **Juste** |
| Maintenance spécifique de 900 à 1 500 €  |     `101 880 + 600 × 36` |       123 480 € | **Juste** |
| Nouveau point mort spécifique / standard | `(123 480 - 38 500) / 3` |  28 326,67 €/an | **Juste** |

### 5. Point de commande

```text
10 unités / semaine × 2 semaines + 8 de sécurité = 28
10 unités / semaine × 3 semaines + 8 de sécurité = 38
```

**Verdict : juste.**

Le texte énumère ensuite saisonnalité, variabilité, quantités minimales et
fiabilité fournisseur. Il ne présente pas cette formule comme un modèle de
prévision universel.

### 6. Migration

```text
Lignes à contrôler = 12 000 × 7 % = 840
Temps de nettoyage = 840 × 5 min = 4 200 min = 70 h
Nettoyage = 70 × 35 = 2 450 €
Préparation = 5 × 700 = 3 500 €
Double contrôle = 60 × 35 = 2 100 €
Minimum visible = 2 450 + 3 500 + 2 100 = 8 050 €
```

**Verdict : juste.**

Le guide exclut explicitement de ce minimum les terminaux, étiquettes,
indisponibilités, transports, interfaces et reprises d’historique.

## Preuve documentaire et test réel

La frontière est claire dans la page :

- Microsoft, Odoo, GS1, Légifrance et l’Australie sont des preuves
  documentaires ou réglementaires ;
- les prix Microsoft sont une photographie datée, pas un devis ;
- les fonctions documentées prouvent leur existence dans un produit, pas leur
  adéquation au terrain du lecteur ;
- Hagnéré Code déclare ne pas avoir provisionné et éprouvé des comptes
  Business Central, Odoo ou WMS avec la configuration du lecteur ;
- la grille des quinze événements est un protocole à exécuter, pas un résultat
  déjà obtenu ;
- aucun vainqueur produit, taux d’exactitude, gain ou retour sur investissement
  n’est inventé.

Cette transparence justifie 9/10 en preuve et en comparaison. Pour atteindre
10/10, il faudrait exécuter le même jeu de données dans des environnements de
démonstration comparables, conserver captures et exports, puis publier les
versions, réglages et résultats.

## Audit de la grille CSV

### Structure

- 3 772 octets ;
- 16 lignes : un en-tête et quinze événements ;
- 12 colonnes sur chaque ligne ;
- numérotation continue de 1 à 15 ;
- aucun événement dupliqué ;
- quatre colonnes finales laissées vides pour la saisie du lecteur ;
- aucune formule, macro, URL de collecte ou donnée cachée.

### Concordance avec l’article

La grille reprend bien :

1. réception complète ;
2. réception partielle ;
3. réservation ;
4. annulation ;
5. transfert hors réseau ;
6. réception du transfert ;
7. double scan ;
8. casse ;
9. retour en quarantaine ;
10. remise en vente ;
11. inventaire à l’aveugle ;
12. correction motivée ;
13. conversion carton/unité ;
14. lot ou série ;
15. deux ventes simultanées.

Chaque ligne fournit donnée de départ, action, résultat attendu, profil,
contrainte terrain et preuve. Le lecteur peut ensuite renseigner durée,
réussite/détour/échec, temps du détour et action à mener.

### Livraison

- route locale : **200** ;
- type : `text/csv; charset=UTF-8` ;
- lien visible avec attribut `download` ;
- cible tactile : 44 px de haut ;
- aucun formulaire ni e-mail exigé.

Le fichier est réellement utile. Sa seule finition P2 est typographique : il
est volontairement en ASCII, sans accents ni BOM UTF-8. Cela évite les
problèmes d’encodage, mais une version UTF-8 avec accents et BOM offrirait un
rendu plus professionnel dans les versions anciennes d’Excel.

## Pédagogie, style et conversion

### Points forts

- Le problème concret précède le jargon.
- ERP et WMS sont expliqués à la première utilisation.
- L’avis professionnel apparaît avant le sommaire.
- Le biais commercial de Hagnéré Code est déclaré.
- Le report et la correction sans logiciel restent des décisions légitimes.
- Les exemples fictifs sont signalés à proximité.
- Les hypothèses économiques sont remplaçables par les chiffres du lecteur.
- Les objections implicites sont traitées : abonnement visible, maintenance
  cachée, scan magique, temps réel, sur-mesure prétendument inévitable.
- La position opposée peut gagner si une règle stable, critique et chiffrée
  échoue dans deux standards.
- Le CTA décrit le premier livrable et autorise la conclusion « conservez
  l’outil ».

### Passe anti-IA

Aucun motif bloquant n’a été relevé :

- pas d’introduction abstraite ;
- pas de fausse étude de cas ;
- pas de promesse de résultat ;
- pas de seuil de marché inventé ;
- pas de catalogue de fonctions sans décision ;
- pas de neutralité artificielle en conclusion ;
- pas de structure répétitive visible à chaque section ;
- pas d’acronyme inexpliqué restant dans le snapshot final.

Les formulations « 3 coûts complets comparés », « Coût complet sur 36 mois » et
« lancer, lancer sous conditions ou arrêter » ont remplacé les libellés plus
internes « TCO » et « GO / STOP ».

## SEO et maillage

### Signaux rendus

- `<title>` : `Logiciel de gestion de stock : standard ou sur mesure ?` ;
- H1 unique : `Faut-il créer un logiciel de gestion de stock sur mesure ?` ;
- meta description spécifique de 128 caractères ;
- canonical :
  `https://hagnere-code.ai/guides/logiciel-gestion-stock-sur-mesure` ;
- JSON-LD `Article` valide ;
- JSON-LD `BreadcrumbList` valide avec trois niveaux ;
- dates publiées : 23 juillet 2026 / 24 juillet 2026 ;
- huit FAQ visibles sans balisage `FAQPage` abusif ;
- 3 955 mots visibles ;
- temps de lecture mesuré et affiché : 20 minutes.

### Champ sémantique

Le texte couvre naturellement logiciel de stock, ERP, WMS, stock physique,
théorique, réservé, disponible, transit, quarantaine, inventaire, ajustement,
réception, transfert, casse, retour, scan, lot, série, emplacement, hors-ligne,
réapprovisionnement, point de commande, inventaire tournant, migration,
maintenance, hébergement, intégration, export et coût complet.

### Maillage

Les trois liens associés sont valides et répondent 200 :

- ERP ou logiciel sur mesure ;
- suivi de production en PME ;
- connexion ERP, CRM et logiciel métier.

Deux de ces guides sont également rappelés dans la conclusion. Le guide reçoit
un lien éditorial depuis `erp-ou-logiciel-sur-mesure` et reste présent dans le
hub automatisé.

La prévisualisation locale renvoie `noindex, nofollow`, ce qui est attendu hors
production. Cela ne prouve ni l’indexabilité du déploiement final, ni
l’indexation par Google. Ces deux états devront être contrôlés séparément.

## Responsive réel et thème

Le snapshot final a été rechargé puis contrôlé dans Chrome aux cinq largeurs,
en clair et en sombre.

|  Largeur | Clair    | Sombre   | Scroll horizontal | H1            | Téléchargement |
| -------: | -------- | -------- | ----------------- | ------------- | -------------- |
|   320 px | **PASS** | **PASS** | aucun             | 24 px / 32 px | visible, 44 px |
|   390 px | **PASS** | **PASS** | aucun             | 24 px / 32 px | visible, 44 px |
|   768 px | **PASS** | **PASS** | aucun             | 36 px / 40 px | visible, 44 px |
| 1 024 px | **PASS** | **PASS** | aucun             | 36 px / 40 px | visible, 44 px |
| 1 440 px | **PASS** | **PASS** | aucun             | 36 px / 40 px | visible, 44 px |

Les tableaux deviennent des cartes sur mobile. Le comparatif à 36 mois reste
lisible à 320 px. Le seul élément dépassant visuellement de 23 px sur petit
écran est une boule lumineuse décorative, absolue et floutée ; elle ne crée
aucune largeur de document supplémentaire. La console finale ne contient ni
erreur ni avertissement.

## Tests et gates

### Gates propres au guide

- mesure : **3 955 mots / 20 minutes** ;
- 55 tests ciblés sur trois fichiers : **PASS** ;
- ESLint ciblé : **PASS** ;
- Prettier sur les fichiers pris en charge : **PASS** ;
- TypeScript `npx tsc --noEmit` : **PASS** ;
- page locale : **200** ;
- ressource CSV locale : **200** ;
- trois routes de maillage : **200**.

### Gate globale

`npm test` a produit **469 réussites sur 470 tests** lors du contrôle.
`check:seo` a produit **227 réussites sur 228 tests** après le snapshot final.

Le seul échec est extérieur au guide stock : un ancien manifeste P4 du guide
`prioriser-fonctionnalites-mvp-saas` attend une autre empreinte de fichier. Il
ne révèle aucun défaut du contenu, du registre ou du CSV audités ici, mais il
interdit de présenter le dépôt entier comme intégralement vert avant
régénération des manifestes communs.

## P0, P1 et P2

### P0 — aucun

Aucune erreur juridique majeure, donnée inventée, ressource absente, calcul
faux, perte de données ou tromperie commerciale n’a été trouvée.

### P1 — aucun restant

Les deux P1 apparus pendant le contre-audit ont été corrigés et revérifiés :

1. cohérence de l’exemple de casse et du disponible à 30 ;
2. reformulation du rôle du scan et des unités cassées.

### P2 — finitions et exploitation

1. Ajouter accents et BOM UTF-8 au CSV si la compatibilité avec les anciennes
   versions d’Excel est privilégiée.
2. Une future feuille de coût remplissable pourrait compléter la grille des
   quinze événements ; le calcul publié reste déjà reproductible sans elle.
3. Recontrôler périodiquement les prix Microsoft et conserver la date visible.
4. Régénérer les manifestes P1–P4 seulement après stabilisation de tous les
   fichiers partagés.
5. Relancer la suite globale et le build sur le snapshot commun final.
6. Vérifier ensuite le canonical, les robots et les réponses 200 en production,
   puis distinguer présence dans le sitemap, traitement Search Console et
   indexation Google réelle.

## Gate finale

| Contrôle                                   | Verdict                                    |
| ------------------------------------------ | ------------------------------------------ |
| Réponse dirigeant dans l’ouverture         | **PASS**                                   |
| Opinion professionnelle conditionnelle     | **PASS**                                   |
| Fermeture de l’égalité de stock            | **PASS**                                   |
| Coûts d’anomalies                          | **PASS**                                   |
| Coûts complets sur 36 mois                 | **PASS**                                   |
| Sensibilité et point mort                  | **PASS**                                   |
| Point de commande                          | **PASS**                                   |
| Budget de migration                        | **PASS**                                   |
| Sources Microsoft actuelles                | **PASS**                                   |
| Sources Odoo 19 actuelles                  | **PASS**                                   |
| GS1, Légifrance et Australie               | **PASS**                                   |
| Documentation distincte du test réel       | **PASS**                                   |
| Grille CSV exacte et utile                 | **PASS**                                   |
| Pédagogie et passe anti-IA                 | **PASS**                                   |
| Conversion loyale                          | **PASS**                                   |
| SEO et données structurées                 | **PASS**                                   |
| Responsive clair/sombre 320–1 440 px       | **PASS**                                   |
| Console                                    | **PASS**                                   |
| Tests ciblés, ESLint, TypeScript, Prettier | **PASS**                                   |
| Manifestes et suite globale du dépôt       | **À FINALISER hors contenu stock**         |
| Production et indexation Google            | **NON PROUVÉES par ce contre-audit local** |

**Décision finale : le guide stock est validable à 95/100. Aucune réécriture de
fond supplémentaire n’est nécessaire. Les opérations restantes relèvent de la
finition du CSV, de la preuve P4 commune et de la vérification de production,
pas d’un défaut éditorial ou factuel du guide.**
