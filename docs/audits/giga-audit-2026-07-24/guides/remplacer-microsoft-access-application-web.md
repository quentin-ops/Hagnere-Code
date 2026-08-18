# Audit approfondi — `remplacer-microsoft-access-application-web`

Date : 24 juillet 2026

Auditeur concurrentiel : Codex — cellule `corpus_inventory`

Snapshot du guide :
`3a91cb75634b5ec8dbb690387a6855f6c1742f19255f6a03bac48ad0456b797a`

Périmètre : audit éditorial, décisionnel, concurrentiel et factuel. Aucune
page publique, aucun fichier partagé, aucun registre et aucun manifest n'a été
modifié.

## 1. Verdict exécutif

```text
Lecteur exact : dirigeant dont une activité importante dépend d'une ou plusieurs bases Access devenues difficiles à partager, maintenir ou comprendre.
Question réelle : faut-il sécuriser Access, déplacer les données, choisir une plateforme standard ou financer une application web spécifique sans perdre les règles qui font fonctionner l'entreprise ?
Décision attendue : choisir la trajectoire minimale qui résout le blocage prouvé, puis migrer un parcours avec restauration et retour arrière.
Réponse actuelle en une phrase : Access n'est pas « mort » ; inventoriez tables, requêtes, formulaires, états, macros et code, puis choisissez entre sécurisation, hybride, plateforme standard et application web.
Défaut qui coûte le plus de valeur : la page explique admirablement quoi inventorier mais ne chiffre ni le coût du statu quo, ni le nettoyage, ni le fonctionnement parallèle, ni quatre TCO sur le même horizon.
Niveau actuel : A-
Priorité : haute
Statut : audité — enrichissement P1 nécessaire avant contre-audit
```

Le guide a une vraie qualité rare : il refuse la migration réflexe. Il précise
les dates de support au lieu d'annoncer la « mort d'Access », distingue
données, requêtes, écrans, états, automatisations et code, et propose quatre
trajectoires dont deux conservent tout ou partie d'Access. Le dossier de sortie,
le parcours pilote, la sauvegarde, la restauration et le retour arrière donnent
un cadre beaucoup plus sérieux que les pages commerciales qui promettent une
conversion automatique.

Le trou reste économique et décisionnel. Le lecteur ne sait pas combien lui
coûte l'outil actuel, ce qu'un nettoyage de données peut représenter, ce que
Power Apps implique par utilisateur à la date de lecture ni pourquoi une
application web à 172 700 € sur trois ans pourrait malgré tout gagner. La
réécriture doit accepter qu'une stabilisation à 28 100 € gagne tant que le
besoin navigateur, multi-site, rôles, intégrations ou continuité ne justifie
pas davantage.

### Score avant correction

| Axe | Note /10 | Preuve localisable | Manque décisif |
| --- | ---: | --- | --- |
| Intention | 9 | L'ouverture part d'une base vitale comprise par une seule personne et promet un dossier de sortie (`page.tsx:313-401`). | Le résultat économique et l'horizon de comparaison ne sont pas annoncés. |
| Décision | 9 | Quatre trajectoires, un hybride, un pilote et un verdict final conditionnel sont proposés (`642-721`, `725-786`, `854-883`). | Aucun seuil permet de faire gagner l'une plutôt qu'une autre. |
| Pédagogie | 9 | Les six parties d'Access et la différence entre transférer données et reconstruire comportements sont très claires (`525-638`). | Il manque un exemple continu chiffré de bout en bout. |
| Profondeur | 8 | Dépendances, requêtes, SSMA, SQL, Dataverse, pilote, sécurité, devis et sortie sont couverts. | Nettoyage, volumes, performance mesurée, licences, gestion des identités et décommissionnement restent trop courts. |
| Preuve | 9 | Les documentations Microsoft, CNIL et ANSSI sont utilisées avec prudence et limites (`417-492`, `525-721`). | Les prix Power Apps actuels, la capacité Dataverse et les sources de décommissionnement ne sont pas appliqués au choix. |
| Comparaison | 5 | Les quatre trajectoires sont conceptuellement alignées. | Aucun montant, TCO, seuil, sensibilité ou cas où chacune gagne. |
| Originalité | 9 | Le dossier de sortie Access et l'approche « travail réel avant objets » apportent une forte valeur propre. | L'actif n'intègre pas inventaire quantifié, coût de preuve et matrice de choix. |
| Style | 9 | Ton humain, non alarmiste, explicatif et professionnel. | Quelques longues transitions pourraient être remplacées par le parcours d'une entreprise fictive. |
| Conversion | 8 | Le CTA demande fichiers, utilisateurs et trois tâches et laisse Access gagner (`888-901`). | Le livrable de l'audit et le mauvais fit commercial ne sont pas explicites. |
| SEO/produit | 7 | FAQ, dates, SSMA, SQL, Dataverse et options couvrent bien la requête principale. | Les intentions « prix migration Access », « Access vs Power Apps », « coût nettoyage », « combien d'utilisateurs » et « plan de décommissionnement » manquent. |

Total : **82/100**

## 2. Ce que le guide dit réellement

- Access n'est pas globalement abandonné : les versions et leur cycle doivent
  être identifiés avant de décider.
- Quatre premiers verdicts sont possibles : conserver, stabiliser, déplacer
  les données ou reconstruire.
- L'inventaire commence par le travail réel puis descend vers tables, requêtes,
  formulaires, états, macros et modules.
- Le volet de dépendances aide mais ne révèle pas tout.
- Migrer les tables n'emporte pas automatiquement requêtes, formulaires, états,
  macros, VBA, règles implicites et usages humains.
- SSMA aide à convertir des objets de base de données vers SQL Server, avec
  limites et corrections.
- Access peut rester provisoirement en interface avec des tables SQL liées.
- Dataverse peut recevoir des données Access, mais l'interface doit être
  reconstruite séparément et les types/licences vérifiés.
- Un parcours pilote doit inclure sauvegarde, copie, critères d'acceptation,
  fonctionnement parallèle, restauration et retour arrière.
- Les devis doivent être reliés au dossier de sortie, pas seulement au nombre
  de tables.

Ce qui semble complet mais ne produit pas encore un arbitrage : aucun nombre
d'objets ou d'enregistrements n'est valorisé ; les utilisateurs « pratiques »
et les maxima Microsoft ne sont pas distingués par mesure ; aucune licence
actuelle n'est intégrée ; le coût de fonctionnement parallèle est absent ;
aucun TCO à horizon constant ne permet de laisser Access gagner.

## 3. Benchmark France et international

Requêtes, pays, langues et date :

- France, français, 24 juillet 2026 : `remplacer Access application web`,
  `migrer Access SQL Server Power Apps`, `prix migration Access`,
  `Access fin de support 2021 2024`.
- États-Unis, anglais, 24 juillet 2026 : `replace Microsoft Access web app`,
  `Access migration SQL Server cost`, `SSMA Access limitations`,
  `Power Apps Access migration`.
- Royaume-Uni, anglais, 24 juillet 2026 : `Microsoft Access to web app`,
  `manage legacy technology migration`.
- Allemagne, allemand/anglais, 24 juillet 2026 : `Access ablösen Webanwendung`,
  `Access SQL Migration schrittweise`.
- Australie, anglais, 24 juillet 2026 : `legacy database migration data
  remediation`, `decommission system records data migration`.

Saturation : les prestataires étrangers suivent presque tous le même récit :
Access serait fragile, ancien, limité et une application web réglerait
collaboration, accès et croissance. Plusieurs ajoutent des budgets, gains ou
retours très rapides sans périmètre ni source primaire. La documentation
Microsoft est plus nuancée : limites de conception, base scindée, outils de
migration et voie hybride. Les guides publics australiens ajoutent deux angles
largement absents du marché commercial : remédiation des données et
décommissionnement traçable. Le gain d'information à produire est donc :
**quatre trajectoires sur un même TCO de 36 mois, un inventaire quantifié et le
coût explicite de la preuve de migration**.

| Ressource et URL directe | Marché | Réponse utile | Preuve ou outil | Limite et biais | Apport à adapter |
| --- | --- | --- | --- | --- | --- |
| [Microsoft — cycle de vie Access 2021](https://learn.microsoft.com/en-us/lifecycle/products/access-2021) | International | Donne la date de fin de support de la version nommée. | Source produit primaire ; 13 octobre 2026. | Ne décrit pas Access fourni par Microsoft 365. | Identifier version, canal et licence avant toute urgence. |
| [Microsoft — cycle de vie Access 2024](https://learn.microsoft.com/en-us/lifecycle/products/access-2024) | International | Donne le retrait prévu le 9 octobre 2029. | Source produit primaire. | Date d'une version, pas disparition du produit. | Conserver la nuance actuelle. |
| [Microsoft — Access specifications](https://support.microsoft.com/en-us/access/access-specifications) | International | Documente 2 Go et jusqu'à 255 utilisateurs simultanés parmi les spécifications. | Documentation primaire. | Maxima de conception, pas seuils de confort ni promesse de performance. | Mesurer fichier, réseau, requêtes et concurrence au lieu de publier un seuil magique. |
| [Microsoft — split an Access database](https://support.microsoft.com/en-us/access/split-an-access-database) | International | Sépare données et interface locale ; peut améliorer performance et réduire le risque de corruption. | Procédure primaire. | Ne résout ni accès navigateur, ni dette VBA, ni continuité humaine. | Ajouter une trajectoire de stabilisation mesurée. |
| [Microsoft — object dependencies](https://support.microsoft.com/en-us/access/use-the-object-dependencies-pane-to-see-how-objects-relate) | International | Aide à voir certaines relations entre objets. | Outil natif documenté. | Ne trouve pas toutes les dépendances, notamment externes ou dynamiques. | Croiser avec journal d'usage, code, fichiers et entretiens. |
| [Microsoft — SSMA conversion](https://learn.microsoft.com/en-us/sql/ssma/access/converting-access-database-objects-accesstosql?view=sql-server-ver17) | International | Convertit les objets de schéma compatibles et produit des évaluations. | Documentation primaire SQL Server. | Ne transforme pas automatiquement l'interface et toute la logique métier. | Montrer rapport de conversion, corrections et exclusions. |
| [Microsoft — Access to SQL Server migration](https://learn.microsoft.com/en-us/sql/sql-server/migrate/guides/access-to-sql-server?view=sql-server-ver17) | International | Structure découverte, évaluation, conversion, migration et validation. | Guide primaire. | Cible SQL Server, pas toutes les architectures. | Enrichir le pilote avec métriques avant/après et validation de données. |
| [Microsoft — linked Access applications](https://learn.microsoft.com/en-us/sql/ssma/access/linking-access-applications-to-sql-server-azure-sql-db-accesstosql?view=sql-server-ver17) | International | Documente la voie interface Access + tables SQL liées. | Documentation primaire. | Compatibilité et performance doivent être testées. | Faire gagner l'hybride quand le goulot est la donnée partagée. |
| [Microsoft — migrate Access to Dataverse](https://learn.microsoft.com/fr-fr/power-apps/maker/data-platform/migrate-access-to-dataverse) | International | Transfère les données, signale types non pris en charge et reconstruction de l'application. | Documentation Power Apps primaire. | Ne transforme pas l'interface Access en application complète. | Séparer migration de données, application et licences. |
| [Microsoft — Power Apps pricing France](https://www.microsoft.com/fr-fr/power-platform/products/power-apps/pricing?msockid=2718ee43446d6b693971f8fc45586ae1) | France/International | Affiche prix par utilisateur et capacité au jour de l'audit. | Au 24 juillet 2026 : Premium 17,30 € HT/utilisateur/mois avec engagement annuel ; capacité indiquée 250 Mo base et 2 Go fichiers par licence. | Prix, taxes, conditions et offres évoluent ; autres composants possibles. | Dater chaque simulation et refaire le devis officiel avant décision. |
| [Microsoft — Power Apps license designation](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/license-designation) | International | Les connecteurs premium, personnalisés et passerelles peuvent imposer des droits premium. | Documentation licence primaire. | Désignation de l'application et droits complets restent contextuels. | Inventaire connecteurs et utilisateurs avant TCO. |
| [GOV.UK — managing legacy technology](https://www.gov.uk/guidance/managing-legacy-technology) | Royaume-Uni | Demande registre des actifs, compétences, besoins et amélioration continue. | Guide public. | Services publics britanniques. | Ajouter propriétaire, compétence de secours et risque de continuité. |
| [NSW Government — decommissioning systems](https://www.nsw.gov.au/nsw-government/recordkeeping/secure-and-store/decommissioning-systems-guidance) | Australie | Traite données, métadonnées, documentation, conservation et suppression. | Guide mis à jour le 4 février 2025. | Obligations australiennes, pas droit français. | Créer un plan de fermeture distinct de la seule migration. |
| [National Archives of Australia — data migration](https://www.naa.gov.au/information-management/build-data-interoperability/interoperability-development-phases/implementation/data-migration) | Australie | Insiste sur remédiation, migrations par étapes, tests précoces, traçabilité et sommes de contrôle. | Guide public. | Contexte archivistique et public. | Ajouter profilage, règles de nettoyage et rapprochement chiffré. |
| [Access Partner](https://access-partner.de/) | Allemagne | Propose réparation, stabilisation, SQL et web de façon progressive. | Exemple de position commerciale plus équilibrée. | Prestataire intéressé ; aucune preuve économique indépendante. | Benchmark de parcours, pas source de chiffres. |
| [Gislén — migrate Access to web application](https://www.gislen.com/migrate-microsoft-access-to-web-application/) | Royaume-Uni/international | Défend une migration par étapes et la reprise explicite de la logique. | Article du 31 janvier 2026. | Prestataire ; l'IA est présentée comme accélérateur potentiel. | Conserver « pas de big bang », vérifier chaque gain. |
| [RPDI — replace Access with web app](https://rpdi.us/blog/replace-microsoft-access-database-with-web-app/) | États-Unis | Illustre les arguments commerciaux du marché. | Article du 23 mars 2026. | Budgets, ROI, « zéro crash » et « utilisateurs illimités » insuffisamment étayés. | Ne reprendre aucun chiffre ni absolu ; les réfuter méthodiquement. |
| [TensorSoft — Access to web app](https://tensorsoftai.co.uk/insights/microsoft-access-to-web-app) | Royaume-Uni | Ajoute angle IA, calendrier et coût. | Article de juillet 2026. | Promesses et retours rapides intéressés et non démontrés. | Benchmark concurrentiel uniquement. |

## 4. Matrice de gain d'information

| Question décisive | Réponse française/internationale dominante | Apport primaire | Couverture actuelle | Manque | Réponse supérieure à produire |
| --- | --- | --- | --- | --- | --- |
| Access est-il « mort » ? | Les prestataires répondent souvent oui par raccourci. | Microsoft distingue les versions et Microsoft 365. | Excellente. | La date de vérification doit rester près de l'affirmation. | Conserver, dater et fournir le chemin de vérification de version. |
| Quand faut-il garder Access ? | Rarement assumé par les vendeurs de migration. | Microsoft documente base scindée et SQL lié. | Très bonne. | Aucun seuil de coût/risque et aucune checklist d'adéquation. | Faire gagner stabilisation si local, supporté, mesuré et restaurable. |
| Combien d'utilisateurs sont « trop » ? | Le marché publie des nombres arbitraires. | Microsoft donne des maxima, pas une expérience garantie. | Prudente mais incomplète. | Aucun protocole de charge ou de réseau. | Mesurer concurrence, latence, verrouillages, taille et temps de tâche. |
| Que migre SSMA ? | Les concurrents parlent de conversion globale. | Microsoft limite la conversion aux objets compatibles et signale les erreurs. | Bonne. | Pas d'exemple de rapport et d'effort de correction. | Afficher objets automatiques, à corriger, à réécrire et à supprimer. |
| Que coûte la qualité des données ? | Quasiment absent des guides. | L'Australie exige remédiation et traçabilité. | Faible. | Zéro profilage ou coût. | Échantillonner anomalies, définir règles et chiffrer avant devis ferme. |
| SQL lié suffit-il ? | Souvent présenté comme étape technique. | Microsoft documente la voie et ses limites. | Bonne. | Pas de TCO ni de critère navigateur. | Faire gagner l'hybride quand la donnée partagée est le seul blocage. |
| Power Apps est-il l'issue naturelle ? | Marketing et intégrateurs le suggèrent. | Microsoft documente migration des données, licences et connecteurs. | Bonne prudence. | Aucun prix par utilisateur ni capacité datée. | TCO 36 mois, connecteurs, capacité, identité et sortie. |
| Une application web est-elle forcément meilleure ? | Le marché commercial dit collaboration, croissance et accès partout. | Aucun standard ne garantit la qualité d'une application web. | Le guide refuse l'automatisme. | Aucun cas économique où elle perd clairement. | Publier quatre TCO et laisser le web perdre sans exigence navigateur. |
| Comment migrer sans arrêter l'activité ? | Les meilleurs articles recommandent les étapes. | Microsoft et archives australiennes ajoutent validation et traçabilité. | Très bonne. | Coût du double travail non calculé. | Chiffrer le fonctionnement parallèle et son seuil de risque évité. |
| Quand Access peut-il être éteint ? | Peu traité. | NSW traite conservation, métadonnées, suppression et documentation. | Faible. | Pas de critères de décommissionnement. | Conditions : rapprochement, conservation, accès archive, suppression et propriétaire. |

## 5. Faits et fraîcheur

| Affirmation du guide | Verdict | Source primaire actuelle | Périmètre et date | Correction |
| --- | --- | --- | --- | --- |
| Access 2021 arrive en fin de support le 13 octobre 2026. | Confirmé pour ce produit nommé. | [Microsoft Lifecycle — Access 2021](https://learn.microsoft.com/en-us/lifecycle/products/access-2021) | Rouverte le 24 juillet 2026. | Conserver et distinguer Microsoft 365. |
| Access 2024 est annoncé jusqu'au 9 octobre 2029. | Confirmé pour cette version. | [Microsoft Lifecycle — Access 2024](https://learn.microsoft.com/en-us/lifecycle/products/access-2024) | Rouverte le 24 juillet 2026. | Conserver, dater et revalider avant publication. |
| Access a une limite de 2 Go et 255 utilisateurs simultanés. | Confirmé comme spécifications maximales. | [Microsoft — Access specifications](https://support.microsoft.com/en-us/access/access-specifications) | Produit Access actuel. | Ne jamais transformer 255 en seuil pratique ; mesurer le cas. |
| Scinder la base peut améliorer performance et fiabilité. | Microsoft l'indique avec prudence. | [Microsoft — split database](https://support.microsoft.com/en-us/access/split-an-access-database) | Architecture locale Access. | Écrire « peut », sauvegarder et tester. |
| Le volet de dépendances détecte toutes les relations. | Faux. | [Microsoft — object dependencies](https://support.microsoft.com/en-us/access/use-the-object-dependencies-pane-to-see-how-objects-relate) | Limitations documentées. | Conserver l'avertissement actuel. |
| SSMA convertit automatiquement toute l'application en web. | Faux. | [Microsoft — SSMA](https://learn.microsoft.com/en-us/sql/ssma/access/converting-access-database-objects-accesstosql?view=sql-server-ver17) | Schéma/données vers SQL ; interface et logique à traiter. | Montrer le rapport d'évaluation. |
| Access peut utiliser des tables SQL Server ou Azure SQL liées. | Confirmé. | [Microsoft — linked applications](https://learn.microsoft.com/en-us/sql/ssma/access/linking-access-applications-to-sql-server-azure-sql-db-accesstosql?view=sql-server-ver17) | Compatibilité et performance à tester. | Conserver comme trajectoire, pas solution universelle. |
| Migrer Access vers Dataverse recrée l'interface. | Faux. | [Microsoft — Dataverse](https://learn.microsoft.com/fr-fr/power-apps/maker/data-platform/migrate-access-to-dataverse) | Migration des données ; application séparée. | Le guide est juste ; ajouter exemple et prix daté. |
| Power Apps Premium coûte 17,30 € HT/utilisateur/mois. | Confirmé au jour précis de l'audit, non durable. | [Microsoft — tarifs Power Apps](https://www.microsoft.com/fr-fr/power-platform/products/power-apps/pricing?msockid=2718ee43446d6b693971f8fc45586ae1) | France, engagement annuel, 24 juillet 2026 ; taxes/conditions à vérifier. | Dater dans le scénario et refaire le devis au moment du choix. |
| Une application web élimine les incidents et accepte un nombre illimité d'utilisateurs. | Faux comme absolu. | Architecture, tests et capacité du produit livré. | Aucune source primaire ne le garantit. | Retirer toute promesse concurrente de ce type. |

### Contradictions et tensions à expliciter

- Les maxima techniques d'Access sont vrais mais ne disent pas si le réseau,
  une requête ou l'organisation bloque à 8, 20 ou 100 utilisateurs.
- Déplacer les tables vers SQL réduit certains risques sans supprimer la
  dépendance à l'interface Access et à ses compétences.
- Power Apps peut accélérer certains écrans tout en créant licences,
  connecteurs, gouvernance et dépendance de plateforme.
- Une application web peut satisfaire accès navigateur et intégrations, mais
  son coût et sa maintenance dépassent largement une stabilisation dans le cas
  courant.
- Un fonctionnement parallèle augmente temporairement le travail ; il n'est
  rationnel que si la preuve ou le risque évité dépasse son coût.

### Faits à retirer plutôt qu'à affaiblir

- « Access est mort », « Access est limité à X utilisateurs pratiques » ou
  « Access corrompt forcément les données ».
- Tout taux de conversion automatique des objets ou toute durée universelle.
- Tout ROI immédiat, suppression totale d'incidents ou utilisateurs illimités.
- Tout prix de migration sans inventaire, règles, données, tests et horizon.
- Toute présentation de l'IA comme convertisseur garanti de VBA vers une
  application maintenable.

## 6. Scénarios et calculs à construire

Tous les chiffres sont des **hypothèses fictives illustratives**, ni tarifs
Hagnéré Code ni moyennes. Le lecteur doit remplacer volumes, heures, coûts,
licences et anomalies par ses mesures.

### 6.1 Valoriser le fonctionnement actuel sans inventer des « économies »

| Cas | Interruptions utilisateurs | Gardien de la base | Valeur annuelle du temps |
| --- | ---: | ---: | ---: |
| Simple | 6 × 0,5 h/mois × 12 × 38 € = 1 368 € | 3 h/mois × 12 × 55 € = 1 980 € | **3 348 €** |
| Central | 12 × 1,5 h/mois × 12 × 38 € = 8 208 € | 8 h/mois × 12 × 55 € = 5 280 € | **13 488 €** |
| Exigeant | 25 × 3 h/mois × 12 × 42 € = 37 800 € | 20 h/mois × 12 × 60 € = 14 400 € | **52 200 €** |

```text
Formule : utilisateurs × heures d'interruption × 12 × coût + heures du gardien × 12 × coût
Horizon : 12 mois
Inclus : temps mesuré attribuable à l'outil et administration directe
Exclus : ventes perdues, erreurs non observées et promesse que la migration supprimera tout
Résultat : le statu quo va de 3 348 € à 52 200 € selon le cas ; aucun seuil universel
Analyse de sensibilité : diviser les interruptions par deux divise seulement leur composante, pas le gardien
Variable de bascule : temps réellement chronométré et part évitable par chaque trajectoire
Contrôle inverse : cas central = 8 208 + 5 280 = 13 488 €
```

### 6.2 Estimer le nettoyage des données par profilage

Hypothèse pédagogique : chaque anomalie demande en moyenne trois minutes si
elle doit être revue manuellement, à 45 €/h. Une vraie migration doit d'abord
automatiser les règles répétables.

| Cas | Lignes × taux d'anomalie | Heures | Coût manuel indicatif |
| --- | ---: | ---: | ---: |
| Simple | 50 000 × 0,3 % = 150 | 7,5 h | **337,50 €** |
| Central | 250 000 × 1,8 % = 4 500 | 225 h | **10 125 €** |
| Exigeant | 800 000 × 5 % = 40 000 | 2 000 h | **90 000 €** |

```text
Formule : lignes × taux d'anomalie × minutes /60 × coût horaire
Horizon : préparation de migration
Inclus : anomalies définies, détectées et réellement revues
Exclus : règle automatique, doublon accepté, arbitrage métier complexe et temps de développement du contrôle
Résultat : le cas exigeant interdit une correction manuelle naïve ; il faut segmenter et automatiser
Analyse de sensibilité : une minute au lieu de trois divise le coût manuel par trois
Variable de bascule : échantillon représentatif, gravité et règle de remédiation
Contrôle inverse : cas central = 250 000 × 0,018 × 3 /60 = 225 h ; 225 × 45 = 10 125 €
```

### 6.3 Comparer quatre trajectoires sur 36 mois

Même hypothèse : 15 utilisateurs, mêmes fonctions indispensables et même
exigence de documentation. Une option incapable de satisfaire l'accès
navigateur est éliminée si cet accès est une exigence, même si elle est moins
chère.

| Poste | Stabiliser Access | Access + SQL | Power Apps | Application web |
| --- | ---: | ---: | ---: | ---: |
| Projet initial | 6 000 € | 22 000 € | 34 000 € | 95 000 € |
| Infrastructure/licences par an | 0 € incrémental* | 2 400 € | 15 × 17,30 × 12 = 3 114 €** | 3 600 € |
| Support par an | 4 000 € | 6 000 € | 7 000 € | 18 000 € |
| Temps interne par an | 60 h × 45 € | 48 h × 45 € | 36 h × 45 € | 40 h × 45 € |
| Sortie/documentation | 2 000 € | 3 500 € | 5 000 € | 7 500 € |
| **TCO 36 mois** | **28 100 €** | **57 180 €** | **74 202 €** | **172 700 €** |

\* Hypothèse : licences et postes Access déjà payés ; à remplacer si faux.  
\** Prix public Power Apps Premium observé en France le 24 juillet 2026,
hors autres licences, capacité, taxes et variations.

```text
Formule : initial + 3 × (licences/infrastructure + support + temps interne) + sortie
Horizon : 36 mois
Inclus : même fonction, exploitation, temps interne et sortie
Exclus : nettoyage exceptionnel, financement, TVA et gain métier
Résultat : stabiliser gagne économiquement tant que ses limites ne violent pas une exigence réelle
Analyse de sensibilité : web vs Power Apps = 98 498 € ; cet écart doit acheter une fonction, un risque évité ou une valeur prouvée
Variable de bascule : navigateur, rôles, intégrations, règles, capacité, sortie et continuité
Contrôle inverse : Power Apps = 34 000 + 3 × (3 114 + 7 000 + 1 620) + 5 000 = 74 202 €
```

### 6.4 Chiffrer le coût d'un fonctionnement parallèle

| Poste | Calcul | Coût |
| --- | ---: | ---: |
| Double saisie | 5 personnes × 12 opérations/jour × 4 min × 20 jours = 80 h | 80 h × 42 € = 3 360 € |
| Répétition de migration et tests externes | 80 h × 95 € | 7 600 € |
| Préparation/validation interne | 36 h × 45 € | 1 620 € |
| **Coût de preuve** |  | **12 580 €** |

```text
Formule : double travail + répétition externe + validation interne
Horizon : un cycle pilote de 20 jours
Inclus : opérations nommées et mêmes critères d'acceptation
Exclus : fonctionnement parallèle indéfini et garantie d'absence d'incident
Résultat : avec une exposition estimée à 75 000 €, le pilote doit réduire le risque de plus de 16,77 points
Analyse de sensibilité : seuil = 12 580 / 75 000 = 16,773 %
Variable de bascule : valeur de l'arrêt, de la restauration ou d'une erreur de données évitée
Contrôle inverse : 3 360 + 7 600 + 1 620 = 12 580 €
```

## 7. Comparaison et position professionnelle

```text
Options réellement comparables : conserver ; stabiliser/scinder ; SQL lié ; plateforme standard ; Power Apps/Dataverse ; application web ; reporter.
Périmètre et horizon communs : mêmes tâches indispensables, utilisateurs, données, tests, exploitation, temps interne et sortie sur 36 mois.
Option la moins chère : stabiliser Access dans le scénario, si l'usage local, le support, la restauration et la continuité satisfont le besoin.
Option la moins risquée : le parcours pilote réversible ; la technologie seule ne décide pas du risque.
Option qui demande le moins de temps interne : aucune par principe ; règles, données, validation et conduite du changement restent internes.
Position Hagnéré Code pour le cas fréquent : stabiliser d'abord si le problème est local et maîtrisable ; déplacer les données si le partage est le goulot ; choisir un produit standard s'il couvre le parcours ; développer du web seulement si navigateur, rôles, intégrations ou règles prouvent l'écart.
Faits qui la fondent : Microsoft documente stabilisation, SQL lié et limites de migration ; les sources publiques ajoutent remédiation et décommissionnement.
Cas où l'option opposée gagne : l'application web gagne malgré son TCO si l'accès multi-site, les intégrations, la continuité et les parcours ne peuvent être satisfaits autrement à risque acceptable.
Signal de révision : version non supportée, restauration échouée, personne clé indisponible, performance mesurée insuffisante, nouvelle intégration ou coût récurrent révisé.
Ce que nous déconseillons même si nous pourrions le vendre : reconstruire tous les écrans et règles parce qu'Access est ancien ou parce qu'une conversion automatique est promise.
```

Conflit d'intérêts : Hagnéré Code vend des applications web et leur
maintenance. Le guide doit donc documenter les cas où Access et l'hybride
gagnent, puis réserver le sur-mesure aux exigences non satisfaites et valorisées.

## 8. Objections et cas limites

| Objection loyale | Réponse prouvée | Incertitude restante | Conséquence |
| --- | --- | --- | --- |
| « Access fonctionne depuis quinze ans, ne touchons à rien. » | L'âge ne prouve ni inadéquation ni sécurité. | Support, restauration, compétences et dépendances. | Inventorier et restaurer une copie avant de décider. |
| « Access est mort, il faut migrer avant octobre. » | Les dates concernent des versions nommées ; 2024 va jusqu'en 2029 selon Microsoft. | Version/canal réellement installé. | Identifier le produit exact et son cycle. |
| « Nous sommes seulement dix utilisateurs. » | Le nombre seul n'explique pas concurrence, réseau ou requêtes. | Profil réel de charge. | Mesurer tâches, verrouillages, latence et taille. |
| « SQL Server réglera tous les problèmes. » | Il peut améliorer la couche données sans remplacer interface, VBA ou organisation. | Requêtes, réseau et compétences. | Piloter les opérations les plus lourdes et la restauration. |
| « Power Apps est Microsoft, donc la migration sera automatique. » | Microsoft distingue migration des données et création de l'application. | Connecteurs, types, capacité et licences. | Prototyper un parcours et recalculer le TCO. |
| « Le web coûte cher mais supprimera tout le support. » | Toute application demande exploitation, sécurité et évolution. | Niveau de support réel. | Inclure 36 mois et sortie au lieu du seul projet initial. |
| « Nettoyons toutes les données à la main. » | Le scénario volumineux produit 2 000 heures fictives. | Taux et gravité réels. | Profiler, automatiser et accepter explicitement certaines exceptions. |
| « Le fonctionnement parallèle est du gaspillage. » | Il achète une preuve seulement si le risque évité dépasse 12 580 € dans le scénario. | Exposition et baisse de risque. | Calculer le seuil et limiter la durée. |
| « Nous devons garder chaque donnée historique dans le nouvel outil. » | Conservation et usage opérationnel sont des questions distinctes. | Obligations françaises applicables. | Définir archive, accès, métadonnées, durée et suppression avec spécialiste. |
| « L'IA peut convertir le VBA en quelques jours. » | Une génération de code ne prouve ni équivalence fonctionnelle ni maintenabilité. | Qualité du code et cas de test. | Comparer sorties sur scénarios d'acceptation et revue humaine. |

## 9. Plan de réécriture

| Ordre | Section proposée | Question résolue | Preuve, scénario ou outil | Décision produite | Action |
| ---: | --- | --- | --- | --- | --- |
| 1 | Access n'est pas mort : quatre voies | Quel est le verdict immédiat ? | Contrat des 150 mots | Garder, hybrider, standardiser, web | Conserver/réécrire |
| 2 | Mesurez le coût actuel | Le statu quo mérite-t-il une action ? | Scénario 6.1 | Surveiller ou intervenir | Créer |
| 3 | Montrez le travail réel | À quoi sert l'outil ? | Parcours continu | Périmètre vital | Conserver |
| 4 | Quantifiez le dossier de sortie | Que contient vraiment Access ? | Objets, lignes, volumes, usages, propriétaires | Inventaire | Enrichir |
| 5 | Profilez les données | Quel nettoyage est nécessaire ? | Scénario 6.2 | Automatiser, corriger, archiver | Créer |
| 6 | Expliquez ce que les outils migrent | Qu'est-ce qui reste à reconstruire ? | Microsoft/SSMA/Dataverse | Effort réaliste | Conserver + exemple |
| 7 | Comparez quatre TCO | Quelle voie coûte quoi ? | Scénario 6.3 | Choix économique | Créer |
| 8 | Faites gagner chaque option dans son cas | Quand la technologie est-elle adaptée ? | Matrice exigences/trajectoires | Verdict conditionnel | Créer |
| 9 | Pilotez un parcours et son retour | Comment prouver sans arrêter ? | Scénario 6.4 | Continuer/arrêter | Enrichir |
| 10 | Décommissionnez proprement | Quand fermer Access ? | NSW/NAA adapté | Archive, suppression, propriétaire | Créer |
| 11 | Comparez les devis | Les offres reprennent-elles le même travail ? | Dossier de sortie + TCO | Prestataire/périmètre | Conserver |
| 12 | Position Hagnéré Code et CTA | Quand demander un audit ? | Livrable et mauvais fit | Contact ou autonomie | Préciser |

### Contrat des 150 premiers mots

- Conserver la situation de l'entreprise dépendante d'une base comprise par une
  seule personne.
- Répondre immédiatement : **ne remplacez pas Access parce qu'il est ancien ;
  remplacez seulement la partie qui échoue à une exigence mesurée**.
- Annoncer coût annuel du statu quo, dossier de sortie quantifié, quatre TCO
  sur 36 mois et pilote avec retour arrière.
- Dire qu'Access ou l'hybride peut gagner et qu'une migration des données ne
  recrée pas l'application.

### Éléments à supprimer

- Toute répétition qualitative des quatre trajectoires sans chiffre ou preuve.
- Tout seuil pratique d'utilisateurs dérivé des 255 utilisateurs maximum.
- Toute source concurrente utilisée pour un budget, un ROI ou une promesse.
- Toute expression « migration automatique » sans objet, rapport et exclusion.

### Éléments à conserver

- La réponse non alarmiste sur les versions.
- Le travail réel avant l'inventaire technique.
- Les six parties de l'application.
- Le dossier de sortie Access.
- Les limites du volet de dépendances.
- Les quatre trajectoires et l'hybride.
- Le pilote, la sauvegarde, la restauration et le retour arrière.
- La comparaison des devis par preuve.

## 10. Contre-audit après correction

La page publique reste inchangée.

| Problème | Priorité | Correction appliquée | Revalidation indépendante |
| --- | --- | --- | --- |
| Aucun TCO constant 36 mois | P1 | En attente | Recalculer quatre voies, prix/licences datés |
| Coût du statu quo absent | P1 | En attente | Chronométrer et distinguer part évitable |
| Nettoyage non quantifié | P1 | En attente | Échantillon, règle, volume et rapprochement |
| Fonctionnement parallèle non chiffré | P1 | En attente | Recalculer seuil de risque évité |
| Power Apps sans prix/licences appliqués | P1 | En attente | Devis officiel et inventaire connecteurs |
| Décommissionnement trop court | P1 | En attente | Données, archive, métadonnées, suppression |
| Performance Access sans protocole | P2 | En attente | Mesures réelles, pas seuil universel |
| CTA sans livrable précis | P2 | En attente | Nommer dossier, profilage, TCO et recommandation |
| Tableaux futurs sur mobile | P2 | En attente | Rendu réel à 390 px |
| Fait faux critique au snapshot | P0 | Aucun ; dates à surveiller | Rouvrir Microsoft avant publication |

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

Objectif : **92/100 minimum**, aucun axe sous 8, comparaison et profondeur à
9 ou 10 après contre-audit indépendant et rendu mobile.

## 11. Preuves techniques et visuelles

```text
Manifeste : aucun manifeste créé ; audit uniquement
Lecture intégrale : 901 lignes, 3 773 mots, snapshot SHA-256 figé
Calculs refaits : oui — statu quo, nettoyage, quatre TCO et fonctionnement parallèle
Sources rouvertes : oui — Microsoft, Royaume-Uni, Australie, Allemagne et benchmarks États-Unis
Sources commerciales : ouvertes uniquement pour saturation et biais ; aucun ROI ou budget repris
Fraîcheur : prix Power Apps daté du 24 juillet 2026 ; cycles Access 2021/2024 revalidés
Liens : URLs directes documentées ; nouveau contrôle requis avant réécriture publique
Rendu 320 / 390 / 768 / 1024 / 1440 : non exécuté, aucune page modifiée
Statut maximal prouvé : audité ; plan de réécriture documenté
Réserve publication / indexation : aucune correction publique n'est effectuée ; cet audit ne prouve ni nouvelle indexation ni classement
```
