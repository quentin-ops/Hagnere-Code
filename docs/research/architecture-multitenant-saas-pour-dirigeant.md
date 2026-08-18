# Dossier de recherche — architecture multitenant SaaS pour dirigeant

Date de travail : **6 août 2026**  
Slug : `architecture-multitenant-saas-pour-dirigeant`  
Roadmap : **#34 · SaaS et MVP · priorité P3**  
Responsable P1 : **`multitenant_p1`**  
Responsable P2 : **`multitenant_p2`**, distinct de P1  
Statut : **brouillon privé — passe 2 terminée, soumis à G2**

Ce dossier distingue les faits publiables, les limites des documentations, les
choix éditoriaux et les inconnues du projet réel. Une documentation officielle
décrit des mécanismes et des compromis ; elle ne certifie aucune architecture
particulière.

## Journal des quatre passes

| Passe                             | État                       | Date        | Responsable           | Snapshot                                        | Blocages         |
| --------------------------------- | -------------------------- | ----------- | --------------------- | ----------------------------------------------- | ---------------- |
| 1. Création complète              | Validée par G1             | 6 août 2026 | `multitenant_p1`      | manifeste P1 externe vérifié                    | aucun            |
| 2. Enrichissement et vérification | Terminée — porte G2        | 6 août 2026 | `multitenant_p2`      | manifeste P2 externe à reporter après contrôles | G2 orchestrateur |
| 3. Polish rédactionnel            | Bloquée                    | —           | agent distinct requis | —                                               | P2 non validée   |
| 4. Antipasse IA et contrôle final | Bloquée                    | —           | agent distinct requis | —                                               | P3 non validée   |

Gel d’entrée attendu et contrôlé :
`d398f38c7e602158b29a94489f302c8f96c5f7d0b358b0cacc3496472b51a76a`.

Le gel, le manifeste P1 lui-même et tout fichier partagé restent hors du
manifeste P1. Aucun commit, push, déploiement, publication ou indexation n’est
réalisé en passe 1.

Porte reçue avant toute modification P2 : **`GO_PASSE_2`** ; intention,
sources, calculs, structure et technique déclarés verts, sans correctif G1.
Le manifeste P1 a été rejoué avant modification : **7 artefacts sur 7 `OK`**.
Son SHA-256 externe est
`72c96fe9de42605eec56746181129570b88ec36dc431540f69fa394b08d4da19`.

## 1. Fiche d’identité

```text
Requête principale : architecture multitenant SaaS pour dirigeant
Moment du parcours : comprendre puis décider
Lecteur précis : dirigeant ou responsable produit d’un SaaS B2B qui doit transformer une demande d’isolation en décision finançable et vérifiable
Situation déclenchante : un prospect, un acheteur, un responsable sécurité ou l’équipe technique demande « vos clients partagent-ils la même base ? »
Décision principale après lecture : définir ce qui doit être isolé, pourquoi, comment le tester et quel travail d’exploitation l’entreprise accepte
Niveau de connaissance : comprend son offre et ses clients, mais ne distingue pas forcément identité, autorisation, base, stockage, cache, file, logs et déploiement
Action utile sans contact : remplir une fiche couche → contrainte → preuve → famille d’isolation → travail d’exploitation
CTA possible : faire relire cette fiche et le protocole A/B sur /demarrer-un-projet
Hors périmètre : audit de sécurité, conseil juridique, certification RGPD, tutoriel SQL, choix d’un fournisseur cloud, devis ou prix moyen
```

### Contrat de réponse

Un SaaS multitenant sert plusieurs organisations avec une expérience produit et
une exploitation communes ; cela ne signifie pas que chaque composant est
partagé. La base par client n’est ni toujours plus sûre, ni toujours moins
chère : elle déplace certains risques et ajoute une flotte à déployer, migrer,
sauvegarder, superviser et restaurer. La décision du dirigeant consiste à
nommer, couche par couche, ce qui doit être séparé, la raison, le test et le
travail récurrent accepté. Une architecture hybride ou une décision différée
peuvent être les réponses loyales.

Questions indispensables :

1. Qu’est-ce qu’un tenant, et pourquoi n’est-ce pas un simple utilisateur ?
2. Où une donnée ou une action peut-elle franchir la frontière d’une autre organisation ?
3. Quelles familles de partage et de séparation existent sans palmarès universel ?
4. Qu’est-ce que chaque famille change pour l’onboarding, les offres, les incidents, les migrations et le support ?
5. Comment tester deux organisations fictives au-delà d’une simple connexion ?
6. Quelles inconnues empêchent encore de choisir ?

Questions secondaires : rôle de RLS, voisin bruyant, restauration d’un seul
tenant, région, offre dédiée, métriques par tenant, changement de modèle.

Bonnes réponses possibles :

- partager avec des contrôles explicites et une voie de sortie ;
- isoler une couche précise ;
- fournir des ressources ou un déploiement dédiés à certains comptes ;
- combiner plusieurs modèles ;
- financer une expérience d’architecture avant de décider ;
- reporter si la contrainte, le contrat ou la charge restent inconnus.

## 1 bis. Contrat de langage humain

- Phrase que le lecteur pourrait dire : « Un grand compte me demande si ses données sont séparées. Est-ce qu’il faut une base pour chaque client ? »
- Réponse attendue : « Pas automatiquement : il faut décider couche par couche ce qui doit être séparé et comment vous le prouverez. »
- Terme central : un **tenant** est l’organisation cliente telle que le produit et l’exploitation doivent la reconnaître ; plusieurs personnes peuvent appartenir au même tenant et une personne peut parfois appartenir à plusieurs tenants.
- Mots ordinaires : client, organisation, accès, données, fichiers, incident, sauvegarde, restauration, offre dédiée, travail récurrent.
- Termes à traduire au premier emploi : tenant, multitenant, RLS, pool, silo, namespace, plan de contrôle, plan de données, voisin bruyant.
- Mots de consultant à éviter : architecture cible optimale, maturité, gouvernance, trajectoire d’excellence, robuste, best-in-class.
- Projet des 150 premiers mots : répondre aux trois questions du gel, puis annoncer cinq familles et un test A/B.
- H2 compréhensibles isolément : **oui, à contrôler par G1**.
- Comparaison à 390 px : composant `GuideTable`, transformé en cartes sous `md` ; **à contrôler dans le BAT ultérieur**.
- FAQ : première phrase répond ; douze objections résiduelles imposées par le gel.
- CTA : « Faire relire mes choix d’isolation », destination `/demarrer-un-projet`, un seul CTA éditorial tardif, sans téléphone ni délai.

### Test sujet, action, résultat

| Formulation abstraite évitée         | Qui agit ?                         | Action concrète                                    | Résultat attendu           | Formulation publique retenue                                                                   |
| ------------------------------------ | ---------------------------------- | -------------------------------------------------- | -------------------------- | ---------------------------------------------------------------------------------------------- |
| « Définir la gouvernance du tenant » | équipe produit                     | écrit qui crée, suspend et ferme une organisation  | cycle de vie testable      | « Écrivez qui crée, suspend et ferme une organisation. »                                       |
| « Assurer l’isolation »              | équipe technique et exploitation   | exécute les scénarios A/B sur chaque couche        | écarts visibles            | « Faites échouer les accès croisés prévus, puis conservez le résultat. »                       |
| « Arbitrer le modèle »               | dirigeant et responsable technique | relient contrainte, test et travail récurrent      | option finançable          | « Choisissez seulement après avoir nommé le test et le travail d’exploitation. »               |
| « Maîtriser le rayon d’impact »      | exploitation                       | provoque un échec limité et observe qui est touché | périmètre d’incident connu | « Vérifiez quels clients sont touchés quand une file, une base ou un déploiement tombe. »      |
| « Prévoir la réversibilité »         | équipe produit et exploitation     | déplace ou restaure un tenant sur une copie        | sortie praticable          | « Rejouez le déplacement ou la restauration d’une organisation sur un environnement de test. » |

## 2. Corpus interne et cannibalisation

| Page voisine                              | Intention de cette page                                     | Différence du guide #34                                                       | Lien ou arbitrage                                                 |
| ----------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| `/services/saas-applications-metier`      | choisir une agence de développement SaaS                    | le guide explique une décision d’isolation avant devis                        | CTA unique vers le formulaire projet, sans recopier prix ou offre |
| `/guides/cahier-des-charges-saas`         | écrire les exigences globales du SaaS                       | #34 approfondit seulement la frontière entre organisations                    | renvoi contextuel au cahier des charges                           |
| `/guides/mvp-saas-quoi-inclure`           | fixer le socle avant le premier client                      | #34 traite ce qui est partagé ou dédié par couche                             | renvoi vers le socle MVP                                          |
| `/guides/droits-acces-application-metier` | décider qui peut voir et modifier quoi dans un outil métier | #34 ajoute la frontière entre organisations, les ressources et l’exploitation | renvoi pour approfondir la matrice de droits                      |
| `/guides/bubble-ou-saas-sur-mesure`       | comparer Bubble et une base de code dédiée                  | #34 ne compare aucun fournisseur ni mode de construction                      | lien seulement si le lecteur hésite sur la plateforme             |
| `/guides/lovable-bolt-v0-ou-agence-saas`  | distinguer prototype généré et produit exploitable          | #34 part d’un produit déjà multi-organisation et de ses frontières            | pas de répétition du protocole de reprise                         |
| `facturation-abonnements-saas`            | futur guide sur plans, factures et impayés                  | #34 mentionne seulement qu’une offre dédiée doit financer son exploitation    | `RENVOI_EXPLICITE`, route non liée tant qu’elle n’existe pas      |
| `securite-saas-b2b`                       | futur guide sur le socle de sécurité vendable               | #34 ne vaut ni audit, ni socle complet de sécurité                            | `RENVOI_EXPLICITE`, route non liée tant qu’elle n’existe pas      |
| `rgpd-saas-b2b`                           | futur guide sur rôles et preuves de protection des données  | #34 ne déduit aucune conformité d’un modèle d’isolation                       | `RENVOI_EXPLICITE`, route non liée tant qu’elle n’existe pas      |
| `heberger-saas-france-ou-europe`          | futur choix d’implantation                                  | #34 garde région et résidence comme contraintes à qualifier                   | `RENVOI_EXPLICITE`, route non liée tant qu’elle n’existe pas      |

**Justification d’une URL distincte :** aucune page actuelle ne relie les
couches d’un SaaS, cinq familles d’isolation, leurs conséquences commerciales
et un test A/B couvrant aussi cache, files, exports et restauration.

## 3. Demande et vocabulaire observés

Mode d’observation le 6 août 2026 : requêtes web documentaires et pages
officielles AWS, Microsoft Azure, PostgreSQL et OWASP. Aucun volume de recherche
ni donnée Search Console propre à ce slug n’est disponible dans cette passe ;
aucun volume n’est inventé.

Questions visibles ou induites directement par ces documentations :

- faut-il partager ou dédier l’infrastructure ?
- l’isolation doit-elle être identique sur le calcul, la base et le stockage ?
- comment rattacher une requête et un utilisateur à la bonne organisation ?
- comment éviter qu’un identifiant d’objet donne accès à l’objet d’un autre client ?
- comment isoler un client très chargé sans dupliquer tout le produit ?
- comment déplacer un tenant vers une autre région ou un autre déploiement ?
- comment superviser et attribuer les coûts par tenant ?
- comment tester le modèle d’isolation après chaque déploiement ?

Vocabulaire retenu : « organisation cliente », « couche », « partage »,
« ressources dédiées », « travail d’exploitation », « test d’accès croisé »,
« restauration d’une organisation ». Les expressions AWS `pool`, `silo` et
`bridge` ne sont utilisées qu’après leur traduction.

## 4. Corpus externe primaire rouvert

Toutes les URL ci-dessous ont été ouvertes le **6 août 2026**.

| Source officielle                                                                                                                                  | Portée utile                                                                                                   | Limite conservée                                                                                 |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| [AWS SaaS Lens — The isolation mindset](https://docs.aws.amazon.com/wellarchitected/latest/saas-lens/isolation-mindset.html)                       | authentification et autorisation ne suffisent pas seules ; isolation logique possible sur ressources partagées | doctrine AWS, pas preuve d’une implémentation                                                    |
| [AWS SaaS Lens — Silo, Pool, and Bridge Models](https://docs.aws.amazon.com/wellarchitected/latest/saas-lens/silo-pool-and-bridge-models.html)     | définitions de ressources dédiées, partagées et modèle mixte                                                   | trois catégories conceptuelles, pas classement                                                   |
| [AWS SaaS Lens — Targeted isolation](https://docs.aws.amazon.com/wellarchitected/latest/saas-lens/targeted-isolation.html)                         | isolation granulaire par service et ressource                                                                  | exemple microservices ; transposition à justifier                                                |
| [AWS SaaS Lens — Pool isolation](https://docs.aws.amazon.com/wellarchitected/latest/saas-lens/pool-isolation.html)                                 | efficacité opérationnelle possible, voisin bruyant, attribution de coûts, rayon d’impact                       | aucun ratio de coût ni probabilité d’incident                                                    |
| [AWS SaaS Lens — Tenant-Aware Operations](https://docs.aws.amazon.com/wellarchitected/latest/saas-lens/tenant-aware-operations.html)               | santé et activité observables par tenant                                                                       | ne prescrit pas les données à journaliser dans chaque produit                                    |
| [Azure — Tenancy models](https://learn.microsoft.com/en-us/azure/architecture/guide/multitenant/considerations/tenancy-models)                     | isolation comme spectre ; modèles partagés, dédiés, verticaux et horizontaux                                   | mise à jour visible le 27 juin 2025 ; exemples Azure, coûts seulement relatifs                    |
| [Azure — Storage and data](https://learn.microsoft.com/en-us/azure/architecture/guide/multitenant/approaches/storage-data)                         | stockage partagé, ressources dédiées, sharding, RLS, sauvegarde/restauration, migration                        | mise à jour visible le 11 août 2025 ; les garanties dépendent du service réel                     |
| [Azure — Compute](https://learn.microsoft.com/en-us/azure/architecture/guide/multitenant/approaches/compute)                                       | calcul partagé/dédié, cache, voisin bruyant, état transitoire                                                  | version visible mise à jour le 23 juin 2026 ; exemple de préfixe de cache, pas mécanisme complet |
| [Azure — Deployment and configuration](https://learn.microsoft.com/en-us/azure/architecture/guide/multitenant/approaches/deployment-configuration) | automatisation, capacité maximale, stamps et test du modèle                                                    | mise à jour visible le 12 août 2025 ; aucun seuil universel de nombre de tenants                  |
| [Azure — Identity](https://learn.microsoft.com/en-us/azure/architecture/guide/multitenant/approaches/identity)                                     | contexte tenant, personne multi-tenant, rôle et autorisation ressource                                         | un claim de tenant reste une entrée à valider, pas une garantie                                  |
| [Azure — Multitenancy checklist](https://learn.microsoft.com/en-us/azure/architecture/guide/multitenant/checklist)                                 | relie modèle, offre, croissance, coût, sécurité, opérations et tests                                           | point de départ, pas audit exhaustif                                                             |
| [Azure — Tenant integration and data access](https://learn.microsoft.com/en-us/azure/architecture/guide/multitenant/approaches/integration)        | exports/imports, accès délégué, intégrations dédiées et limitation du rayon d’impact                           | exemples Azure ; chaque flux doit être requalifié                                                |
| [Azure — Messaging](https://learn.microsoft.com/en-us/azure/architecture/guide/multitenant/approaches/messaging)                                   | messagerie partagée, dédiée ou hybride, identités, workers, quotas et voisin bruyant                           | mise à jour visible le 6 janvier 2026 ; ne prescrit pas le contenu universel d’un message         |
| [Azure — Control planes](https://learn.microsoft.com/en-us/azure/architecture/guide/multitenant/considerations/control-planes)                     | responsabilités de cycle de vie, routage, configuration, télémétrie et consommation                           | mise à jour visible le 1er juillet 2025 ; processus manuels possibles pour un petit parc          |
| [PostgreSQL 18 — Row Security Policies](https://www.postgresql.org/docs/18/ddl-rowsecurity.html)                                                   | portée, rôles qui contournent RLS, opérations, intégrité et concurrence hors politique                         | version 18 figée ; mécanisme de base de données, pas garantie SaaS autonome                       |
| [PostgreSQL 18 — CREATE POLICY](https://www.postgresql.org/docs/18/sql-createpolicy.html)                                                          | refus par défaut sans politique applicable et composition permissive/restrictive                              | version 18 figée ; ne prouve ni le rôle réel ni les autres couches                               |
| [OWASP API1:2023 — Broken Object Level Authorization](https://owasp.org/API-Security/editions/2023/en/0xa1-broken-object-level-authorization/)     | contrôle objet sur chaque fonction utilisant un identifiant client ; tests                                     | catégorie de risque API, pas audit ni fréquence propre au produit                                |
| [OWASP — Multi-Tenant Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Multi_Tenant_Security_Cheat_Sheet.html)                 | contexte tenant, cache, stockage de fichiers, cycle de vie et journalisation                                   | cite le risque de queue injection, mais pas de règle explicite pour jobs/workers                  |

La version AWS SaaS Lens consultée porte la date du **4 avril 2023**. Dates
visibles contrôlées une par une pour les autres pages Azure du corpus :
**Identity, 23 mai 2026** ; **Compute, 23 juin 2026** ; **Messaging, 6 janvier
2026** ; **Integration, 17 octobre 2025** ; **Storage and data, 11 août 2025** ;
**Deployment and configuration, 12 août 2025** ; **Control planes, 1er juillet
2025** ; **Tenancy models, 27 juin 2025** ; **Checklist, 9 mai 2025**. La page
OWASP BOLA est versionnée par son édition **2023** ; les deux pages OWASP
n’affichent pas de date de mise à jour dans leur contenu. PostgreSQL affichait
la version **18** comme version courante supportée le jour de la consultation ;
les URL publiées sont néanmoins figées sur `/docs/18/`. La fraîcheur d’une
page ne rend pas ses exemples universels : elle impose de garder la date de
consultation et de rouvrir les sources au moment d’un choix réel.

### Angle mort commun du corpus officiel

Les sources expliquent très bien les mécanismes. Elles livrent moins souvent
une fiche que le dirigeant peut utiliser pour relier une contrainte commerciale,
une couche, un test, une famille d’isolation et le travail d’exploitation
récurrent. Le guide apporte ce pont, sans convertir la doctrine cloud en
prescription universelle.

## 5. Inventaire contradictoire P2 avant correction

L’inventaire ci-dessous a été dressé avant toute édition P2. Il couvre les
affirmations vérifiables visibles, y compris les nombres, les légendes, les
sources, les réponses de FAQ et les contrats techniques. Une répétition d’un
même fait renvoie au même identifiant ; elle n’est pas comptée comme un fait
supplémentaire.

| ID inventaire | Emplacement public                     | Affirmations à contrôler                                                                                                                | Référence / contrôle                                           | Résultat avant correction                                                                 |
| ------------- | -------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| I01           | métadonnées, H1 et OG                  | titre, promesse, description courte, images locales, absence de date éditoriale                                                          | constantes, rendu et contrat privé                             | cohérent                                                                                  |
| I02           | hero                                   | multitenant ne signifie pas tout partagé ; base dédiée ni automatiquement plus sûre ni moins chère ; décision par couche                 | F01, F02, F09, F12, F29                                       | cohérent et nuancé                                                                        |
| I03           | badges et statistiques                | dix couches, cinq familles, deux organisations fictives, neuf scénarios, aucun prix universel                                            | comptage source, rendu, tableaux et SVG                        | nombres exacts ; temps par section à recalculer                                            |
| I04           | §01 réponse directe                   | quatre sorties possibles ; authentification/autorisation d’entrée insuffisantes seules                                                   | F02, F04, F08, F31, F36                                       | cohérent                                                                                  |
| I05           | §02 couches                           | dix frontières ; contexte tenant perdu par tâches/cache/export/support ; UUID et claim insuffisants                                      | F03 à F06, F22 à F26, contrôle du SVG                         | F23 était surattribué à OWASP ; SVG non aligné sur les dix libellés visibles               |
| I06           | §03 familles                          | cinq familles non classées ; pool/silo/bridge ; dédié limité à la couche ; hybride                                                       | F07, F08, F11, F12, F28 à F30                                 | ordre du SVG différent du tableau ; nuance des services partagés dans un silo à ajouter    |
| I07           | §04 conséquences                     | coûts seulement relatifs ; voisin bruyant ; flotte, onboarding, mises à jour, incidents, support, restauration et sortie                | F09 à F15, F26, F32, F34                                      | cohérent ; aucun montant ou multiplicateur                                                 |
| I08           | §05 chemin de décision               | contrainte → preuve → option → travail ; panier de coûts sans double compte automatique                                                  | recommandations éditoriales, F31 à F36                        | cohérent, valeurs projet laissées inconnues                                                |
| I09           | §06 protocole                         | deux organisations `.example`, neuf résultats indépendants, aucun score ni certification                                                | F05, F22 à F27, F33, contrôle interne                         | cohérent ; F23 à requalifier et ressourcer                                                  |
| I10           | §07 RLS                               | accès normaux, refus par défaut, rôles de contournement, opérations/intégrité, OR/AND, sauvegarde                                        | F16 à F21, PostgreSQL 18                                      | lien `/current/` incohérent ; FORCE, politique permissive et course concurrente manquants  |
| I11           | §08 exploitation                     | responsabilités du plan de contrôle, plan de données, routage, télémétrie, cycle de vie                                                  | F12, F13, F26, Azure control planes                           | source absente et composant logiciel présenté trop absolument                              |
| I12           | §09 contrat                           | une promesse doit nommer frontière, rôles, région, test et exceptions ; aucune conformité déduite                                       | F15, F28 à F36                                                | cohérent ; questions et limites visibles                                                    |
| I13           | §10 action                            | créneau de 60 minutes pour une première fiche, explicitement distinct d’une estimation complète                                         | durée éditoriale volontaire, non donnée de marché             | nuance présente ; formulation à rendre encore moins assimilable à un délai projet          |
| I14           | FAQ définition                        | tenant B2B distinct de l’utilisateur ; une personne peut appartenir à plusieurs tenants                                                  | F01, F03                                                      | cohérent                                                                                  |
| I15           | FAQ bases partagée/dédiée             | ni obligation de base par client ni fuite automatique ; autres couches à tester                                                         | F02, F16, F22 à F30                                           | cohérent                                                                                  |
| I16           | FAQ RLS                               | RLS ne couvre ni tous les rôles/opérations ni les autres couches                                                                         | F16 à F21                                                     | réponse correcte mais à enrichir par les exceptions P2                                     |
| I17           | FAQ UUID                              | identifiant imprévisible sans autorisation objet insuffisant                                                                             | F05, F06                                                      | cohérent                                                                                  |
| I18           | FAQ voisin bruyant                    | charge disproportionnée d’une ressource partagée ; mesure, quotas ou isolation à tester                                                  | F10, F11                                                      | cohérent, aucune fréquence inventée                                                        |
| I19           | FAQ offre dédiée                      | exploitation généralement plus individualisée ; coût réel dépend du produit                                                             | F12, F32, F35                                                 | cohérent, aucun prix                                                                      |
| I20           | FAQ restauration                      | restauration sélective dépend du moteur, format, dépendances et outils ; démonstration sur copie                                         | F15, F20, F34                                                 | cohérent                                                                                  |
| I21           | FAQ niveaux d’isolation               | niveaux différents selon couches et offres, à condition de rester exploitables et testables                                              | F02, F08, F28                                                 | cohérent                                                                                  |
| I22           | FAQ protocole et inconnues            | aucune certification ; report légitime si volume, région, contrat ou charge inconnus                                                     | F33, F35, F36                                                 | cohérent                                                                                  |
| I23           | bloc de sources                       | chaque intitulé, portée, version/date et limite correspond à la page liée                                                                | ouverture primaire URL par URL                                | date Azure Deployment fausse ; portée OWASP jobs fausse ; trois sources P2 à ajouter       |
| I24           | SVG dix couches                       | exactement dix couches et correspondance avec la liste HTML                                                                             | comparaison texte/SVG                                        | dix cartes, mais libellés et regroupements non alignés                                      |
| I25           | SVG cinq familles                     | exactement cinq options, même ordre et même sémantique que la matrice                                                                    | comparaison texte/SVG                                        | cinq cartes, ordre 04/05 et libellé hybride non alignés                                     |
| I26           | SVG protocole                         | deux organisations, neuf scénarios, statuts non compensables et traces                                                                   | comptage SVG/HTML                                             | cohérent                                                                                  |
| I27           | schémas structurés                    | `Article` et `BreadcrumbList` seulement ; aucune date, FAQPage, note, avis ou nombre de mots inventé                                     | inspection objet JSON-LD et rendu                             | cohérent                                                                                  |
| I28           | liens internes                        | quatre routes voisines seulement, toutes présentes dans `GUIDES` ; futurs slugs non liés                                                 | registre local importé dans le test                           | quatre sur quatre enregistrées                                                            |
| I29           | contrat privé                         | `noindex,nofollow`, route absente de `GUIDES` et `PUBLISHED_GUIDES`, aucun statut de publication                                         | métadonnées, source et registre local                         | cohérent                                                                                  |
| I30           | manifeste historique                  | gel immuable ; manifeste P1 immuable et rejoué avant édition ; sept artefacts                                                            | SHA-256 externe et `shasum -c`                                | 7/7 `OK` avant P2                                                                         |

Défauts matériels P2 issus de cet inventaire : **6 groupes factuels ou de
traçabilité** — date Azure, portée OWASP/jobs, version et nuances PostgreSQL,
plan de contrôle trop obligatoire, limite du silo, et cohérence de la source
messagerie — plus **2 incohérences visuelles** dans les SVG, sans modifier les
comptes annoncés.

## 5 bis. Registre des affirmations P2

Statuts exigés : `VERIFIED`, `A_NUANCER`, `A_RETIRER`, `INCONNUE`.

| ID  | Statut    | Type           | Affirmation contrôlée                                                                                                                                                                                                                                | Source primaire                               | Conséquence rédactionnelle                                                 |
| --- | --------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- | -------------------------------------------------------------------------- |
| F01 | VERIFIED  | FAIT           | Un tenant B2B correspond généralement à une organisation et se distingue d’un utilisateur.                                                                                                                                                           | Azure overview / tenancy models               | définir le tenant avant de parler de base                                  |
| F02 | VERIFIED  | FAIT           | L’isolation forme un spectre et peut différer selon les composants.                                                                                                                                                                                  | Azure tenancy models ; AWS targeted isolation | comparaison par couche, pas choix binaire                                  |
| F03 | VERIFIED  | FAIT           | Une personne peut appartenir à plusieurs tenants ; le contexte actif doit être suivi.                                                                                                                                                                | Azure identity                                | tester le changement d’organisation                                        |
| F04 | VERIFIED  | FAIT           | Authentification et autorisation d’entrée ne constituent pas seules l’isolation.                                                                                                                                                                     | AWS isolation mindset                         | séparer connexion et accès objet                                           |
| F05 | VERIFIED  | FAIT           | Chaque fonction utilisant un identifiant client pour accéder à un objet doit vérifier l’autorisation sur cet objet.                                                                                                                                  | OWASP API1:2023                               | tests lecture, écriture et export avec ID adverse                          |
| F06 | VERIFIED  | FAIT           | Un identifiant aléatoire ne remplace pas le contrôle d’autorisation.                                                                                                                                                                                 | OWASP API1:2023                               | ne jamais promettre qu’un UUID protège la donnée                           |
| F07 | VERIFIED  | FAIT           | AWS distingue ressources dédiées, partagées et modèle mixte.                                                                                                                                                                                         | AWS silo/pool/bridge                          | traduire en cinq familles plus granulaires                                 |
| F08 | VERIFIED  | FAIT           | Une isolation ciblée peut dédier une couche ou un service sans dédier tout le SaaS.                                                                                                                                                                  | AWS targeted isolation                        | option hybride explicite                                                   |
| F09 | VERIFIED  | FAIT           | Une infrastructure partagée peut réduire le coût direct de ressources et simplifier certaines opérations.                                                                                                                                            | Azure compute/storage ; AWS pool              | écrire « peut », sans montant ni garantie de marge                         |
| F10 | VERIFIED  | FAIT           | Le partage augmente l’exposition au voisin bruyant et élargit potentiellement le rayon d’impact.                                                                                                                                                     | Azure tenancy/compute ; AWS pool              | demander quotas, test de charge et périmètre d’incident                    |
| F11 | VERIFIED  | FAIT           | Des ressources dédiées réduisent certains effets de voisin bruyant dans la couche dédiée.                                                                                                                                                            | Azure compute                                 | limiter la conclusion à la couche dédiée                                   |
| F12 | VERIFIED  | FAIT           | Une flotte dédiée ajoute du déploiement, des mises à jour, de la supervision et de l’automatisation.                                                                                                                                                 | Azure deployment ; AWS silo                   | intégrer le travail humain, pas seulement la facture cloud                 |
| F13 | VERIFIED  | FAIT           | L’automatisation des déploiements devient plus importante lorsque le nombre de tenants ou ressources augmente.                                                                                                                                       | Azure deployment                              | demander pipeline et inventaire de versions                                |
| F14 | VERIFIED  | FAIT           | Les options de données incluent partage, ressources par tenant et répartition sur plusieurs groupes ou déploiements.                                                                                                                                 | Azure storage/data                            | ne pas réduire l’architecture à « une base ou plusieurs »                  |
| F15 | VERIFIED  | FAIT           | Des exigences différentes de sauvegarde, restauration ou localisation peuvent modifier le modèle de données.                                                                                                                                         | Azure storage/data                            | faire qualifier ces exigences avant le choix                               |
| F16 | VERIFIED  | FAIT           | RLS peut filtrer les lignes visibles ou modifiables pour les accès normaux.                                                                                                                                                                          | PostgreSQL 18 RLS                             | présenter RLS comme un contrôle de la base                                 |
| F17 | VERIFIED  | FAIT           | Avec RLS activée sans politique, PostgreSQL applique un refus par défaut aux accès normaux.                                                                                                                                                          | PostgreSQL 18 RLS                             | expliquer sans en faire une garantie globale                               |
| F18 | VERIFIED  | FAIT           | Superutilisateurs et rôles `BYPASSRLS` contournent toujours RLS ; les propriétaires la contournent normalement, mais `FORCE ROW LEVEL SECURITY` peut soumettre le propriétaire aux politiques.                                                                                                                       | PostgreSQL 18 RLS                             | tester rôle réel, propriétaire, FORCE et chemins d’administration          |
| F19 | VERIFIED  | FAIT           | `TRUNCATE` et `REFERENCES` ne relèvent pas de RLS ; les contraintes d’intégrité, notamment `UNIQUE`, clé primaire et clé étrangère, contournent les politiques pour préserver l’intégrité et peuvent révéler indirectement l’existence d’une valeur. | PostgreSQL 18 RLS                             | ne pas appeler RLS « barrière complète » et tester les erreurs observables |
| F20 | VERIFIED  | FAIT           | Le paramètre `row_security=off` ne contourne pas RLS : il fait échouer une requête qui serait filtrée, usage recommandé pour détecter un dump incomplet.                                                                                             | PostgreSQL 18 RLS                             | tester la commande, le rôle, l’échec attendu puis une restauration         |
| F21 | VERIFIED  | FAIT           | Plusieurs politiques permissives se combinent par `OR` et les restrictives par `AND` ; au moins une permissive doit accorder l’accès avant que les restrictives puissent le réduire.                                                                                                                                | PostgreSQL 18 CREATE POLICY                   | relire la composition effective, pas seulement chaque politique isolée     |
| F22 | VERIFIED  | FAIT           | Un cache ou état partagé peut exposer le mauvais tenant ; Azure et OWASP recommandent d’inclure le contexte tenant dans les clés et de le revérifier à la lecture.                                                                                   | Azure compute ; OWASP Multi-Tenant Security   | tester deux requêtes successives A/B et l’invalidation                     |
| F23 | A_NUANCER | DEDUCTION      | Pour qu’une tâche asynchrone agisse dans la bonne organisation, le message et le worker doivent conserver un contexte tenant validé ; une file partagée n’apporte pas seule cette preuve.                                                                                                                            | OWASP propagation générale ; Azure messaging | présenter comme exigence de conception à tester, pas citation littérale    |
| F24 | VERIFIED  | FAIT           | Le stockage de fichiers doit isoler chemins ou conteneurs et vérifier l’appartenance lors de chaque accès ; connaître une URL ou une clé ne doit pas suffire.                                                                                        | OWASP Multi-Tenant Security ; OWASP API1:2023 | tester lecture et écriture croisées avec un fichier synthétique            |
| F25 | VERIFIED  | FAIT           | Les exports constituent un flux distinct avec ses propres identités, formats et permissions.                                                                                                                                                         | Azure integration                             | inclure export dans le protocole A/B                                       |
| F26 | VERIFIED  | FAIT           | Les opérations doivent relier santé et consommation au tenant pour diagnostiquer.                                                                                                                                                                    | AWS tenant-aware operations ; Azure checklist | journaux et métriques tenant-aware sans données sensibles inutiles         |
| F27 | VERIFIED  | FAIT           | Microsoft recommande de tester continuellement le modèle d’isolation.                                                                                                                                                                                | Azure checklist/deployment                    | conserver test, version, attendu et observé                                |
| F28 | VERIFIED  | FAIT           | Il n’existe pas un modèle unique adapté à tous les scénarios.                                                                                                                                                                                        | Azure storage/data ; AWS tenant isolation     | aucun classement ni option par défaut universelle                          |
| F29 | A_NUANCER | DEDUCTION      | Une base dédiée isole la base, mais ne prouve rien sur fichiers, caches, files, logs, exports, identités ou support.                                                                                                                                 | déduction à partir des couches Azure/AWS      | formulation conditionnelle et liste des couches                            |
| F30 | A_NUANCER | DEDUCTION      | Un schéma ou namespace séparé facilite certains inventaires, sans constituer toujours une barrière de sécurité dure.                                                                                                                                 | continuum Azure ; dépend du moteur            | ne pas attribuer de garantie générique au namespace                        |
| F31 | A_NUANCER | RECOMMANDATION | Commencer partagé avec une voie de sortie peut être raisonnable si contraintes et tests sont connus.                                                                                                                                                 | synthèse éditoriale                           | présenter comme option sous conditions, jamais défaut                      |
| F32 | A_NUANCER | RECOMMANDATION | Une offre dédiée peut financer des exigences plus coûteuses à exploiter.                                                                                                                                                                             | Azure tenancy models                          | aucun prix ni promesse de marge ; vérifier le contrat réel                 |
| F33 | A_NUANCER | RECOMMANDATION | Le protocole A/B réduit le risque d’erreur observable mais ne certifie ni sécurité ni conformité.                                                                                                                                                    | OWASP/Azure tests                             | avertissement visible près du protocole                                    |
| F34 | A_NUANCER | DEDUCTION      | Restaurer un seul tenant est souvent plus simple avec une ressource dédiée, mais dépend des outils, sauvegardes et objectifs.                                                                                                                        | Azure storage/data ; PostgreSQL backup        | exiger une démonstration, pas une promesse                                 |
| F35 | INCONNUE  | INCONNU        | Coût réel de chaque famille pour le produit du lecteur.                                                                                                                                                                                              | aucune donnée de projet                       | ne publier aucun montant ou moyenne                                        |
| F36 | INCONNUE  | INCONNU        | Exigences contractuelles, régions, volumes, objectifs de reprise et clients qui imposeront un dédié.                                                                                                                                                 | aucune donnée de projet                       | fiche d’inconnues et décision différée                                     |
| F37 | VERIFIED  | FAIT           | Dans le modèle silo AWS, des ressources peuvent être dédiées tandis que l’identité, l’onboarding et des opérations restent partagés ; « déploiement dédié » ne signifie donc pas nécessairement « tout dédié ».                                                                                                      | AWS silo/pool/bridge                          | nommer les composants encore communs                                       |
| F38 | VERIFIED  | FAIT           | Une politique RLS qui consulte d’autres lignes ou tables peut créer une course concurrente et laisser fuiter de l’information si la conception et les verrous sont inadéquats.                                                                                                                                       | PostgreSQL 18 RLS                             | ajouter un scénario concurrent et confier les remèdes à une revue technique |
| F39 | VERIFIED  | FAIT           | Les responsabilités de plan de contrôle couvrent notamment ressources, configuration, cycle de vie, télémétrie et consommation ; Azure admet qu’un petit parc puisse les assurer par procédures manuelles documentées sans construire un composant complet.                                                           | Azure control planes                          | exiger les responsabilités et traces, pas un logiciel universel            |
| F40 | VERIFIED  | FAIT           | Une messagerie multitenant peut être partagée, dédiée, shardée ou hybride ; identités, capacité, quotas, supervision, workers et exploitation changent selon le modèle.                                                                                                                                               | Azure messaging                               | tester la file comme couche autonome                                       |
| F41 | VERIFIED  | FAIT           | Avec RLS activée mais aucune politique applicable au rôle et à la commande, PostgreSQL applique un refus par défaut.                                                                                                                                                                                                | PostgreSQL 18 CREATE POLICY                   | conserver la condition « applicable » et tester le rôle/commande           |

Décompte P2 : **32 `VERIFIED`, 7 `A_NUANCER`, 0 `A_RETIRER`, 2 `INCONNUE`**.

### Contradictions et formulations retirées avant rédaction

- « une base par client est plus sûre » : retiré ; la portée dépend des autres couches et de l’exploitation ;
- « tout partager coûte moins cher » : retiré ; seules certaines ressources directes peuvent être moins coûteuses ;
- « RLS empêche les fuites » : retiré ; exceptions, rôles et couches hors base existent ;
- « un sous-domaine ou un claim de tenant isole le client » : retiré ; ce sont des entrées de contexte à valider ;
- « un déploiement dédié est conforme » : retiré ; aucune conformité ne se déduit de l’architecture ;
- « le test A/B prouve la sécurité » : retiré ; il ne ferme qu’un ensemble de scénarios observés.

### Corrections contradictoires P2

1. **Date Azure réattribuée :** la page `deployment-configuration` affiche le
   12 août 2025, pas le 30 avril 2026. Cette dernière date appartient à une
   autre page et a été supprimée du dossier et du test.
2. **Portée OWASP réduite :** la cheat sheet multitenant couvre explicitement
   contexte, cache, fichiers, cycle de vie, logs et le risque de `queue
   injection`, mais pas une règle détaillée pour jobs/workers. F23 devient une
   déduction `A_NUANCER`, recoupée avec Azure Messaging.
3. **PostgreSQL versionné :** `/docs/current/` est remplacé par `/docs/18/`
   puisque le libellé public affirme PostgreSQL 18 ; `CREATE POLICY` est ajouté
   pour « aucune politique applicable » et la composition complète.
4. **RLS complétée :** `FORCE ROW LEVEL SECURITY`, la nécessité d’au moins une
   permissive et les courses possibles des politiques qui consultent d’autres
   données sont désormais visibles.
5. **Plan de contrôle désabsolutisé :** les responsabilités restent à couvrir,
   mais un petit parc peut commencer par procédures documentées et scripts sans
   composant logiciel complet.
6. **Silo borné :** un déploiement plus dédié peut conserver identité,
   onboarding ou opérations partagés ; le dédié reste défini couche par couche.
7. **Deux SVG réalignés :** mêmes dix couches et même ordre des cinq familles
   que le HTML, sans modifier les comptes annoncés.

### Calculs et scénarios

Aucun prix, délai, taux, disponibilité ou économie de marché n’est calculé.
Le scénario A/B est **entièrement fictif** et utilise deux organisations, des
comptes `.example`, des objets et fichiers synthétiques. Son unité est un
résultat de test, pas un euro :

```text
résultat d’un scénario = attendu écrit + observation + trace + version
statut du scénario = FERMÉ | ÉCHEC | NON EXÉCUTÉ | INCONNU
décision = suspendre si un scénario critique est ÉCHEC, NON EXÉCUTÉ ou INCONNU
```

Le nombre de scénarios ne constitue pas un score de sécurité. Les tests sont
non compensables : réussir la lecture n’efface pas un export croisé ou une
restauration non démontrée.

## 6. Empreinte éditoriale à ne pas reproduire

| Guide observé                     | Ouverture                | Progression           | Dispositif         | Exemple                     | CTA / conclusion          |
| --------------------------------- | ------------------------ | --------------------- | ------------------ | --------------------------- | ------------------------- |
| `cahier-des-charges-saas`         | document à comparer      | exigences puis trame  | outil de cadrage   | SaaS fictif suivi           | faire relire le cadrage   |
| `mvp-saas-quoi-inclure`           | preuve du premier client | format puis socle     | contrat local      | Accordia                    | figer le périmètre        |
| `droits-acces-application-metier` | qui voit quoi            | matrice de droits     | test de refus      | Atelier Atlas               | commencer par un objet    |
| `bubble-ou-saas-sur-mesure`       | choix d’outil            | comparaison et TCO    | calcul             | plusieurs situations        | réunion de sortie         |
| `lovable-bolt-v0-ou-agence-saas`  | qui construit            | produits puis reprise | huit vérifications | deux organisations fictives | prochaine étape seulement |

Choix du guide #34 :

```text
Tension motrice : la question « même base ? » masque neuf autres frontières.
Ouverture : trois réponses immédiates au dirigeant, sans méthode préalable.
Progression : décision par couches → cinq familles → conséquences business → protocole A/B → fiche à remplir.
Artefact signature : carte des couches + matrice des cinq familles + protocole A/B multi-couches.
Rythme : phrases courtes, cartes, une matrice, un protocole opérationnel ; aucun calculateur.
CTA : après la décision finale, un seul CTA de relecture.
Conclusion : choisir une expérience ou reporter, pas désigner un gagnant.
Différences : aucune comparaison de fournisseurs ; aucun TCO chiffré ; protocole centré sur la frontière inter-organisations ; restauration et support traités comme couches ; inconnues remises au lecteur.
```

## 7. Plan annoté

| Section          | Question résolue                                       | Preuve ou exemple                      | Décision rendue possible                   | Format                                              |
| ---------------- | ------------------------------------------------------ | -------------------------------------- | ------------------------------------------ | --------------------------------------------------- |
| 01. Réponse      | faut-il tout partager ou tout dédier ?                 | AWS/Azure                              | choisir la question à instruire            | quatre sorties                                      |
| 02. Couches      | où une frontière peut-elle céder ?                     | carte interne + sources                | inventorier les couches pertinentes        | SVG + cartes                                        |
| 03. Familles     | quelles options existent ?                             | AWS/Azure + cinq familles gelées       | retenir des candidats sans classement      | matrice en cartes mobile                            |
| 04. Business     | qu’est-ce qui change pour l’entreprise ?               | conséquences recoupées                 | relier architecture, offre et exploitation | grille                                              |
| 05. Décision     | comment filtrer les options ?                          | contrainte → preuve → option → travail | remplir une fiche                          | chemin explicite                                    |
| 06. A/B          | comment tester la frontière ?                          | OWASP, Azure, PostgreSQL               | financer une expérience ciblée             | protocole fictif                                    |
| 07. RLS          | RLS suffit-elle ?                                      | PostgreSQL 18                          | exiger plusieurs contrôles                 | encadré technique traduit                           |
| 08. Exploitation | que faudra-t-il faire chaque semaine et à l’incident ? | AWS/Azure                              | accepter ou refuser la charge              | checklist                                           |
| 09. Contrat      | que demander sans promesse ?                           | inconnues et preuves                   | formuler exigences et mauvais fit          | questions                                           |
| 10. Action       | que faire maintenant ?                                 | fiche copiable                         | partager une décision ou reporter          | plan de 60 minutes, durée volontaire non estimative |

## 8. Matrice de couverture G1

| Angle ou sous-intention | Question réelle                            | Réponse et localisation prévue | Limite / contre-cas              | Action                               | Statut           |
| ----------------------- | ------------------------------------------ | ------------------------------ | -------------------------------- | ------------------------------------ | ---------------- |
| Définition du tenant    | est-ce un utilisateur ?                    | hero + §01                     | personne multi-tenant possible   | écrire la définition métier          | COUVERT          |
| Tout partager ?         | multitenant veut-il dire partagé partout ? | hero + §01                     | partage par couche               | choisir couche par couche            | COUVERT          |
| Base par client         | est-ce forcément plus sûr ou moins cher ?  | hero + §03/04                  | autres couches + flotte          | demander preuves et charge           | COUVERT          |
| Couches                 | où l’isolement peut-il céder ?             | §02 + SVG                      | aucune liste exhaustive          | compléter l’inventaire               | COUVERT          |
| Cinq familles           | quelles options ?                          | §03                            | aucun palmarès                   | retenir 2 options à tester           | COUVERT          |
| Coût                    | combien cela coûte ?                       | §04/05                         | données projet absentes          | chiffrer infra + opérations + sortie | COUVERT          |
| Offre dédiée            | peut-on vendre un dédié ?                  | §04/09                         | contrat et marge inconnus        | qualifier la demande                 | COUVERT          |
| Voisin bruyant          | un client peut-il gêner les autres ?       | §04/06                         | dépend de chaque ressource       | tester charge et quotas              | COUVERT          |
| Autorisation objet      | connexion suffisante ?                     | §02/06                         | OWASP : non                      | manipuler les identifiants A/B       | COUVERT          |
| RLS                     | suffit-elle ?                              | §07                            | exceptions et couches hors base  | tester rôles, sauvegarde, objets     | COUVERT          |
| Cache, recherche, files | la base suffit-elle ?                      | §02/06                         | contexte peut se perdre          | scénarios A/B dédiés                 | COUVERT          |
| Export                  | l’export suit-il les mêmes droits ?        | §06                            | flux/identité distincts          | comparer marqueurs A/B               | COUVERT          |
| Sauvegarde/restauration | peut-on restaurer un seul client ?         | §06/08                         | dépend des outils                | test sur copie                       | COUVERT          |
| Logs/support/admin      | qui peut voir quoi ?                       | §02/06/08                      | données sensibles à minimiser    | test support et traces               | COUVERT          |
| Région/RGPD             | le modèle prouve-t-il la conformité ?      | §09 + avertissement            | non ; guide juridique séparé     | qualifier contrat et textes          | RENVOI_EXPLICITE |
| Sécurité globale        | le protocole certifie-t-il le SaaS ?       | §06 + avertissement            | non                              | audit séparé si enjeu                | RENVOI_EXPLICITE |
| Fournisseur cloud       | AWS ou Azure ?                             | hors sujet visible             | corpus multi-cloud conceptuel    | choisir plus tard selon projet       | ECARTE_JUSTIFIE  |
| Prix de marché          | quel coût moyen ?                          | inconnu visible                | aucun corpus projet              | demander un chiffrage propre         | ECARTE_JUSTIFIE  |
| Implémentation SQL      | quelle politique écrire ?                  | rôle de RLS seulement          | tutoriel et audit hors sujet     | confier à l’équipe technique         | ECARTE_JUSTIFIE  |
| Publication/date        | quand publier ?                            | dossier uniquement             | intégration et BAT public futurs | STOP avant preuve publique           | RENVOI_EXPLICITE |

Aucune ligne matérielle n’est `BLOQUANT` pour une P1 privée. Les inconnues de
coût et de contrat sont une sortie du guide, pas des zéros silencieux.

### Perspectives obligatoires

| Perspective                 | Statut     | Question reportée dans la page                                                                     |
| --------------------------- | ---------- | -------------------------------------------------------------------------------------------------- |
| Dirigeant                   | APPLICABLE | quel travail récurrent et quelle offre accepter ?                                                  |
| Métier utilisateur          | APPLICABLE | que se passe-t-il lors d’un changement d’organisation active ?                                     |
| Opérations                  | APPLICABLE | comment déployer, superviser, migrer et restaurer ?                                                |
| Finance                     | APPLICABLE | quels coûts directs, humains et de sortie chiffrer sans double compte ?                            |
| IT / sécurité               | APPLICABLE | quels contrôles et tests empêchent un accès croisé observable ?                                    |
| Données / RGPD              | APPLICABLE | quelles données, régions et sous-traitants doivent être qualifiés, sans conclure à la conformité ? |
| Achats / juridique          | APPLICABLE | quelle exigence contractuelle est réellement demandée et mesurable ?                               |
| Adoption                    | APPLICABLE | une personne multi-tenant comprend-elle le contexte actif ?                                        |
| Maintenance                 | APPLICABLE | comment migrer les schémas ou versions sur la flotte ?                                             |
| Incident / reprise          | APPLICABLE | quel est le rayon d’impact et comment restaurer une organisation ?                                 |
| Réversibilité               | APPLICABLE | peut-on déplacer un tenant ou sortir ses données et fichiers ?                                     |
| Solution simple / statu quo | APPLICABLE | peut-on reporter ou tester sans figer l’architecture ?                                             |

## 9. Protocole fictif A/B

**Exemple entièrement fictif, non exécuté :** Organisation A « Atelier Aube »
et organisation B « Bureau Boréal ». Comptes
`lea@atelier-aube.example` et `yanis@bureau-boreal.example`. Objets `A-ALPHA`
et `B-BRAVO`, fichiers et marqueurs synthétiques. Aucune donnée client réelle.

Préparation commune :

1. noter version du code, configuration, rôles d’exécution et modèle de données ;
2. créer les deux organisations, deux comptes et au moins un objet par couche ;
3. écrire l’attendu avant l’essai ;
4. conserver entrée, observation, trace, heure et responsable ;
5. ne jamais utiliser un succès d’une couche pour compenser l’échec d’une autre.

| Scénario      | Action adverse                                                    | Attendu minimal                                                           | Trace                                             |
| ------------- | ----------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------- |
| Lecture       | A remplace l’identifiant de son objet par `B-BRAVO` via UI et API | aucun objet B rendu ; refus cohérent sans révéler de contenu B            | requête, réponse expurgée, test automatisé        |
| Écriture      | A tente de modifier B et de créer un objet portant le tenant B    | modification/création refusée                                             | état avant/après et événement d’audit             |
| Export        | A demande un export après avoir inséré des marqueurs distincts    | aucun marqueur B dans le fichier A                                        | fichier synthétique, paramètres et compte utilisé |
| Tâche de fond | une tâche A est mise en file puis rejouée et retardée             | contexte A conservé ; aucun objet B traité ; nouvelle tentative maîtrisée | message expurgé, résultat et compteur d’exécution |
| Fichier       | A tente l’URL ou la clé du fichier B                              | téléchargement et écriture refusés                                        | URL expurgée, politique et réponse                |
| Cache         | A puis B appellent la même route et le même identifiant local     | aucune réponse ou invalidation d’A servie à B                             | clés expurgées, ordre des appels, réponses        |
| Logs/support  | un support filtre sur A et ouvre une action d’administration      | événements B absents du filtre A ; action attribuée et limitée            | requête de support, rôle, événement d’audit       |
| Sauvegarde    | une sauvegarde est produite sur le rôle prévu                     | aucune ligne attendue omise silencieusement                               | commande, rôle, volume synthétique et contrôle    |
| Restauration  | A est restauré sur une copie à un instant choisi                  | objets A cohérents ; B inchangé ; limites documentées                     | environnement, instant, inventaire A/B            |

Le protocole ne prouve pas l’absence de toute vulnérabilité. Il révèle des
erreurs dans les chemins exercés et doit être complété selon les technologies,
les menaces, les contrats et l’analyse de risque du produit.

## 10. Ressource et conversion

```text
Ressource téléchargeable : non.
Justification : la fiche et le protocole sont copiables depuis le HTML ; aucun fichier ne ferait mieux en P1.
Résultat autonome : relier chaque contrainte à une couche, une preuve, une option et un travail d’exploitation.
Bon fit Hagnéré Code : SaaS B2B dont plusieurs organisations, offres ou exigences imposent une décision d’architecture testable.
Mauvais fit : demande de certification, audit juridique, garantie de sécurité, simple site sans organisations ou besoin encore non défini.
Action non commerciale : remplir la fiche et exécuter le protocole avec données fictives.
CTA unique : « Faire relire mes choix d’isolation » vers /demarrer-un-projet.
Résultat après clic : formulaire projet ; aucune réservation, aucun délai, aucune garantie.
```

## 11. Inconnues et fraîcheur

À apporter à un atelier technique :

- définition contractuelle du tenant : groupe, filiale, espace ou contrat ;
- nombre initial et croissance plausible des tenants, sans projection marketing ;
- volumes, pointes, traitements longs et client susceptible de devenir voisin bruyant ;
- données, fichiers, index, caches, files et services réellement utilisés ;
- régions, clés, sauvegardes et objectifs de restauration demandés par chaque compte ;
- offre standard, premium ou dédiée et coût d’exploitation acceptable ;
- rôles de support et d’administration, accès d’urgence et traces ;
- capacité de déplacer un tenant entre ressources ou déploiements ;
- responsabilités de test, déploiement, incident et sortie ;
- exigences juridiques ou contractuelles à faire qualifier séparément.

Événements de revalidation : nouvelle version majeure de PostgreSQL ; évolution
des pages AWS SaaS Lens ou Azure Architecture Center ; changement de moteur de
données, fournisseur d’identité, stockage, région, contrat, modèle tarifaire ou
architecture du produit. Les sources doivent être rouvertes avant publication
réelle.

## 12. Rapport P1

```text
PASSE_1_TERMINEE
Slug : architecture-multitenant-saas-pour-dirigeant
Contrat de réponse : choisir ce qui doit être isolé, pourquoi, comment le tester et quel travail d’exploitation accepter
Sources primaires : AWS SaaS Lens, Azure Architecture Center, PostgreSQL 18, OWASP API Security 2023 et Multi-Tenant Security Cheat Sheet
Plan : dix sections, cinq familles, conséquences business, protocole A/B, RLS, exploitation, contrat et action
Calculs : aucun prix ou gain ; statuts non compensables du protocole A/B
Exemple : Atelier Aube / Bureau Boréal, entièrement fictif et non exécuté
Contre-cas : partage, dédié, hybride, simplification, report
CTA : un CTA tardif vers /demarrer-un-projet, sans téléphone ni délai
Publication : aucune ; page privée noindex,nofollow sans datePublished/dateModified
Revue humaine : aucune personne extérieure disponible en P1
Risques résiduels : coût, contrat, région, volumes et technologies du projet réel inconnus ; BAT et contrôle transversal ultérieurs
```

Le manifeste P1 est généré après stabilisation de la page, de l’OG, du test et
des trois SVG, puis rejoué avant remise à l’orchestrateur.
