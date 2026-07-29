# Roadmap de 100 nouveaux guides orientés conversion

> Dernière révision : 29 juillet 2026. Cette roadmap est la file canonique des
> **100 sujets à reconstruire** après la remise à zéro du corpus public. Un
> sujet n’est compté comme publié qu’après ses quatre passes, les quatre gates
> de l’orchestrateur et la vérification de sa page en production. Le premier
> sujet reconstruit et autorisé à publication est
> `automatiser-processus-metier` ; les 99 autres restent dans l’ordre
> ci-dessous. Ce portefeuille éditorial n'est pas une promesse que le volume
> constitue en lui-même un facteur de classement.

Avant toute rédaction, suivre l’
[ordre de lecture unique du workflow maître](workflow-maitre-guides-4-passes.md).
La roadmap choisit les sujets ; elle ne redéfinit ni le processus, ni ses
statuts, ni ses portes.

## 1. Décision stratégique

Le corpus repart guide par guide. Les anciennes routes restent protégées par
des redirections permanentes, tandis que la mesure Search Console et la
production avancent en parallèle.

La logique est la suivante :

1. davantage de pages utiles et distinctes créent davantage de portes
   d'entrée possibles vers le site ;
2. une couverture cohérente des problèmes réellement traités par Hagnéré Code
   renforce la lisibilité de l'offre pour les lecteurs comme pour les moteurs ;
3. le maillage contextuel aide Google à découvrir les pages et à comprendre
   leurs relations, tout en faisant avancer le lecteur vers sa décision ;
4. chaque guide doit cependant posséder une intention, une réponse et une
   sortie commerciale propres. Deux variantes de mots-clés donnant la même
   réponse doivent être fusionnées.

Nuance importante : Google ne documente pas le nombre de pages vues, le temps
passé ou le taux de navigation interne Analytics comme des facteurs directs de
classement. Une bonne navigation reste essentielle pour la satisfaction, la
découverte, la conversion et les effets indirects qu'elle peut produire. Elle
ne doit pas être présentée comme une formule algorithmique certaine.

Références de cadrage :

- [contenu utile, fiable et pensé pour les personnes](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) ;
- [bonnes pratiques de maillage et d'ancres internes](https://developers.google.com/search/docs/crawling-indexing/links-crawlable) ;
- [expérience de page et limites des signaux isolés](https://developers.google.com/search/docs/appearance/page-experience) ;
- [règles générales des données structurées](https://developers.google.com/search/docs/appearance/structured-data/sd-policies).

## 2. Répartition commerciale des 100 sujets

| Silo                                    | Nouveaux guides | Pourquoi                                                                                                            |
| --------------------------------------- | --------------: | ------------------------------------------------------------------------------------------------------------------- |
| Applications métiers et outils internes |              24 | Priorité commerciale : besoins d'entreprise concrets, projets à forte valeur et prolongement naturel en maintenance |
| SaaS et MVP                             |              18 | Fondateurs ayant une idée, un prototype ou un produit à reprendre                                                   |
| Référencement naturel                   |              17 | Construire un vrai silo de décision autour de l'offre SEO, aujourd'hui peu couverte                                 |
| Google Ads                              |              15 | Combler le plus gros trou du corpus : aucun guide dédié pour une offre déjà commercialisée                          |
| Maintenance, TMA et reprise             |              13 | Besoins urgents, récurrents et directement reliés aux projets web, SaaS et métiers                                  |
| Sites vitrines pour professionnels      |              13 | Construire un silo de décisions et de situations propres aux professionnels                                          |
| **Total**                               |         **100** | **100 intentions dans la nouvelle file canonique**                                                                  |

Les anciens guides sur les prix des sites, le prix d'un SaaS, le prix d'un
logiciel sur mesure, Excel, CRM, ERP, le no-code, les cahiers des charges, la
refonte SEO et le choix d'une agence restent volontairement hors de cette
liste. Leur ancienne publication ne vaut plus validation : toute future
réécriture devra être réservée et suivre le même protocole à quatre passes.

Le site commercialise aussi l'e-commerce, les applications mobiles, l'audit
technique, la sécurité/RGPD et la production de contenu. Ils ne deviennent pas
des silos principaux dans ces 100 guides parce que le présent arbitrage vise
explicitement les six offres citées par le dirigeant et, en premier lieu, les
leads logiciel/SaaS. Les contraintes de sécurité et d'audit restent intégrées
aux guides concernés. Les autres offres pourront remplacer des sujets P3 si
leur priorité commerciale change ou si les données de demande le justifient.

## 3. Portes de sortie commerciales

Chaque guide utilise une sortie cohérente avec le problème traité :

| Code     | Page commerciale                       | Action principale                                       |
| -------- | -------------------------------------- | ------------------------------------------------------- |
| `OUTILS` | `/services/outils-internes-sur-mesure` | Diagnostic d'un processus ou cadrage d'un outil interne |
| `SAAS`   | `/services/saas-applications-metier`   | Cadrage d'un MVP, reprise ou feuille de route SaaS      |
| `SEO`    | `/services/referencement-google`       | Diagnostic SEO relié au symptôme du guide               |
| `ADS`    | `/services/publicite-en-ligne`         | Audit ou cadrage d'une campagne et de sa mesure         |
| `TMA`    | `/services/maintenance-evolution`      | Audit de reprise, contrat ou plan de stabilisation      |
| `SITE`   | `/services/sites-vitrines`             | Cadrage d'un site ou d'une refonte                      |

Lorsqu’un CTA éditorial est utile, sa destination par défaut est
`/demarrer-un-projet` avec un libellé contextualisé. Son absence est justifiée
dans le dossier de recherche. Le petit formulaire du footer ne couvre pas
toutes ces missions ; il ne doit donc pas être la seule sortie des guides SEO,
Ads, TMA ou automatisation.

## 4. Ordre du premier sprint éditorial

Ces quinze sujets ouvrent rapidement les silos les plus proches d'une demande
de devis, sans attendre la fin de la roadmap :

| Ordre | Guide                                  | Motif                                                                          |
| ----: | -------------------------------------- | ------------------------------------------------------------------------------ |
|     1 | `automatiser-processus-metier`         | Douleur large de dirigeant, pont direct vers les outils internes               |
|     2 | `valider-idee-saas-avant-developper`   | Capte les porteurs de projet avant qu'un mauvais MVP ne consomme le budget     |
|     3 | `prix-gestion-google-ads`              | Intention commerciale forte et silo actuellement vide                          |
|     4 | `calculer-roi-application-metier`      | Transforme un problème de temps en décision d'investissement                   |
|     5 | `reprendre-logiciel-metier-existant`   | Besoin urgent et qualifié, propice à une mission puis à une TMA                |
|     6 | `mvp-saas-quoi-inclure`                | Aide à définir un premier lot achetable                                        |
|     7 | `audit-google-ads-que-verifier`        | Produit une passerelle naturelle vers l'audit Ads                              |
|     8 | `audit-seo-que-contient-il`            | Clarifie le livrable avant achat d'une prestation SEO                          |
|     9 | `seo-ou-google-ads`                    | Arbitrage budgétaire fréquent entre deux offres réelles du site                |
|    10 | `contrat-tma-application`              | Prépare un besoin récurrent de maintenance applicative                         |
|    11 | `template-ou-site-sur-mesure`          | Décision claire pour un prospect de site vitrine                               |
|    12 | `signes-besoin-logiciel-metier`        | Aide l'entreprise à choisir la première réponse utile sans seuil arbitraire    |
|    13 | `reprendre-mvp-vibe-code`              | Sujet actuel, mais traité sous l'angle de la reprise et des preuves techniques |
|    14 | `pourquoi-google-ads-ne-convertit-pas` | Diagnostic directement relié à une dépense active                              |
|    15 | `preparer-contenus-site-vitrine`       | Retire un frein concret avant devis et raccourcit le démarrage du projet       |

## 5. Les 100 guides

Légende : `P1` = bassin prioritaire ; `P2` = deuxième vague ; `P3` = longue
traîne ou sujet nécessitant davantage de preuves. La priorité peut monter ou
descendre après validation Search Console, Keyword Planner et SERP.

### A. Applications métiers et outils internes — 24 guides

|   # | Prio | Slug proposé                                 | Travail accompli pour le lecteur                                             | Format ou preuve différenciante                                     | Sortie                      |
| --: | :--: | -------------------------------------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------- | --------------------------- |
|   1 |  P1  | `automatiser-processus-metier`               | Choisir les processus à automatiser en premier                               | Carte processus, matrice gain/risque et exemple chiffré             | Diagnostic `OUTILS`         |
|   2 |  P1  | `calculer-roi-application-metier`            | Décider si le projet rembourse son coût                                      | Formule TCO/ROI, coût du temps et scénarios pessimiste/central/haut | Cadrage `OUTILS`            |
|   3 |  P1  | `signes-besoin-logiciel-metier`              | Reconnaître le moment où les outils actuels deviennent un risque             | Fiche de trois situations et six réponses possibles                 | Diagnostic `OUTILS`         |
|   4 |  P1  | `remplacer-microsoft-access-application-web` | Sortir d'une base Access devenue critique sans perdre les données            | Inventaire tables, usages, dépendances et plan de migration         | Diagnostic `OUTILS`         |
|   5 |  P1  | `power-apps-ou-application-sur-mesure`       | Arbitrer Microsoft Power Apps et développement dédié                         | TCO, licences, limites et réversibilité                             | Diagnostic `OUTILS`         |
|   6 |  P2  | `airtable-notion-ou-application-metier`      | Savoir jusqu'où pousser Airtable ou Notion                                   | Test de charge organisationnelle et grille de sortie                | Diagnostic `OUTILS`         |
|   7 |  P2  | `back-office-sur-mesure-pme`                 | Comprendre quand un back-office dédié devient rentable                       | Plans d'écrans et cas d'usage par équipe                            | Cadrage `OUTILS`            |
|   8 |  P2  | `zapier-make-ou-developpement-sur-mesure`    | Choisir entre automatisation connectée et code                               | Comparaison volume, erreurs, supervision et coût                    | Diagnostic `OUTILS`         |
|   9 |  P2  | `crm-sur-mesure-ou-hubspot`                  | Comparer HubSpot et un CRM adapté au processus réel                          | Matrice fonctions, licences, intégrations et sortie                 | Cadrage `OUTILS`            |
|  10 |  P3  | `crm-sur-mesure-ou-salesforce`               | Tester si la puissance de Salesforce est nécessaire                          | Scénarios d'organisation et TCO sur quatre ans                      | Cadrage `OUTILS`            |
|  11 |  P2  | `automatiser-saisie-donnees-entreprise`      | Réduire doubles saisies, copier-coller et erreurs                            | Mesure avant/après et protocole de contrôle                         | Diagnostic `OUTILS`         |
|  12 |  P2  | `digitaliser-bons-intervention`              | Remplacer papier, PDF et ressaisies terrain                                  | Workflow complet, mode hors ligne et preuve de signature            | Cadrage `OUTILS`            |
|  13 |  P1  | `application-gestion-interventions-terrain`  | Cadrer planning, tournées, comptes rendus et facturation                     | Carte des rôles et parcours terrain/bureau                          | Cadrage `OUTILS`            |
|  14 |  P3  | `logiciel-planning-sur-mesure`               | Décider si les contraintes de planning justifient un outil                   | Cas de conflits, capacités et règles métier                         | Cadrage `OUTILS`            |
|  15 |  P2  | `application-suivi-production-pme`           | Suivre ordres, étapes, rebuts et alertes                                     | Modèle de données simplifié et indicateurs utiles                   | Cadrage `OUTILS`            |
|  16 |  P3  | `logiciel-gestion-stock-sur-mesure`          | Comparer standard et spécificités de stock réelles                           | Scénarios multi-dépôts, lots et inventaires                         | Diagnostic `OUTILS`         |
|  17 |  P2  | `portail-client-b2b-sur-mesure`              | Cadrer documents, commandes, demandes et suivi client                        | Architecture des droits et parcours client                          | Cadrage `OUTILS`            |
|  18 |  P2  | `connecter-erp-crm-logiciel-metier`          | Préparer une intégration sans multiplier les incohérences                    | Cartographie des flux, source de vérité et reprise sur erreur       | Audit `OUTILS`              |
|  19 |  P1  | `reprendre-logiciel-metier-existant`         | Faire reprendre une application dont l'équipe initiale n'est plus disponible | Checklist code, accès, données, dette et contrat                    | Audit de reprise `TMA`      |
|  20 |  P1  | `migrer-logiciel-metier-sans-interruption`   | Organiser la bascule sans arrêter l'activité                                 | Plan par lots, double exploitation et retour arrière                | Cadrage `OUTILS`            |
|  21 |  P3  | `plan-recette-application-metier`            | Transformer les besoins en preuves d'acceptation                             | Modèle de recette, jeux de données et gravité des anomalies         | Cadrage `OUTILS`            |
|  22 |  P1  | `choisir-prestataire-application-metier`     | Comparer des prestataires au-delà du prix                                    | Grille de notation, questions et preuves à demander                 | Démarrer un projet `OUTILS` |
|  23 |  P3  | `securite-application-metier`                | Fixer un socle de sécurité proportionné                                      | Menaces, sauvegardes, journalisation et responsabilités             | Audit technique             |
|  24 |  P3  | `droits-acces-application-metier`            | Concevoir qui voit et modifie quoi                                           | Matrice rôles/données, moindre privilège et journal d'audit         | Cadrage `OUTILS`            |

### B. SaaS et MVP — 18 guides

|   # | Prio | Slug proposé                                   | Travail accompli pour le lecteur                                                  | Format ou preuve différenciante                                          | Sortie                    |
| --: | :--: | ---------------------------------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------ | ------------------------- |
|  25 |  P1  | `valider-idee-saas-avant-developper`           | Tester le problème, l'acheteur et sa volonté de payer                             | Protocole d'entretiens, expérience de vente et critères d'arrêt          | Cadrage `SAAS`            |
|  26 |  P1  | `cahier-des-charges-saas`                      | Cadrer un produit multi-client, ses rôles et sa facturation                       | Trame SaaS distincte du cahier des charges métier                        | Cadrage `SAAS`            |
|  27 |  P2  | `combien-de-temps-developper-saas`             | Construire un calendrier crédible du prototype à la production                    | Planning par incertitude, dépendances et marges                          | Cadrage `SAAS`            |
|  28 |  P1  | `mvp-saas-quoi-inclure`                        | Définir le socle opérationnel minimal pour mettre un premier client en production | Checklist comptes, accès, facturation, support, administration et mesure | Cadrage `SAAS`            |
|  29 |  P1  | `prioriser-fonctionnalites-mvp-saas`           | Arbitrer les fonctionnalités métier une fois le socle opérationnel fixé           | Matrice risque/valeur/preuve et dépendances                              | Atelier `SAAS`            |
|  30 |  P2  | `agence-saas-ou-freelance`                     | Choisir l'équipe selon risque, budget et continuité                               | Grille par phase et responsabilité                                       | Démarrer un projet `SAAS` |
|  31 |  P1  | `mvp-prototype-ou-poc`                         | Choisir quoi construire pour lever l'incertitude principale                       | Matrice objectif, preuve, public et condition de passage                 | Cadrage `SAAS`            |
|  32 |  P2  | `bubble-ou-saas-sur-mesure`                    | Comparer Bubble et une base de code dédiée                                        | TCO, performances, recrutement et réversibilité                          | Cadrage `SAAS`            |
|  33 |  P1  | `lovable-bolt-v0-ou-agence-saas`               | Distinguer prototype généré et produit exploitable                                | Test reproductible, limites datées et checklist de production            | Audit `SAAS`              |
|  34 |  P3  | `architecture-multitenant-saas-pour-dirigeant` | Comprendre les décisions qui affectent coût et isolation client                   | Schémas simples et conséquences commerciales                             | Cadrage `SAAS`            |
|  35 |  P2  | `facturation-abonnements-saas`                 | Concevoir essais, plans, factures, impayés et changements d'offre                 | Cycle de vie d'un abonnement et cas limites                              | Cadrage `SAAS`            |
|  36 |  P3  | `api-integrations-saas`                        | Prioriser les intégrations sans transformer le MVP en plateforme                  | Contrat d'API, quotas, erreurs et ordre de livraison                     | Cadrage `SAAS`            |
|  37 |  P2  | `securite-saas-b2b`                            | Exiger un socle de sécurité vendable aux entreprises                              | Checklist accès, secrets, sauvegardes, logs et incidents                 | Audit `SAAS`              |
|  38 |  P2  | `rgpd-saas-b2b`                                | Répartir les responsabilités et préparer les preuves                              | Carte des données, sous-traitants et durées                              | Cadrage `SAAS`            |
|  39 |  P3  | `heberger-saas-france-ou-europe`               | Choisir une implantation selon clients, données et contrat                        | Matrice de décision sourcée et limites juridiques explicites             | Cadrage `SAAS`            |
|  40 |  P1  | `reprendre-mvp-vibe-code`                      | Auditer un prototype généré avant de poursuivre                                   | Test build, sécurité, données, licences et dette                         | Audit de reprise `SAAS`   |
|  41 |  P1  | `reprendre-saas-developpe-par-freelance`       | Organiser une reprise sans perdre le produit ni les utilisateurs                  | Inventaire technique et plan des 30 premiers jours                       | Audit de reprise `TMA`    |
|  42 |  P2  | `faire-evoluer-saas-apres-mvp`                 | Passer des premiers clients à une feuille de route soutenable                     | Arbitrage ventes/dette/support et cadence de lots                        | Partenariat `SAAS`        |

### C. Référencement naturel — 17 guides

|   # | Prio | Slug proposé                       | Travail accompli pour le lecteur                                      | Format ou preuve différenciante                              | Sortie                    |
| --: | :--: | ---------------------------------- | --------------------------------------------------------------------- | ------------------------------------------------------------ | ------------------------- |
|  43 |  P1  | `audit-seo-que-contient-il`        | Comprendre ce qu'un audit doit diagnostiquer et livrer                | Exemple de sommaire, preuves et plan d'action                | Audit `SEO`               |
|  44 |  P2  | `combien-de-temps-resultats-seo`   | Fixer des attentes et jalons sans promesse de classement              | Chronologie par situation et indicateurs précurseurs         | Cadrage `SEO`             |
|  45 |  P1  | `seo-ou-google-ads`                | Répartir un budget entre acquisition immédiate et actif durable       | Arbre de décision, cash-flow et horizons                     | Diagnostic `SEO` ou `ADS` |
|  46 |  P2  | `agence-seo-ou-consultant`         | Choisir le format d'accompagnement adapté                             | Grille compétences, continuité et pilotage                   | Démarrer un projet `SEO`  |
|  47 |  P1  | `choisir-agence-seo`               | Vérifier méthode, preuves, reporting et limites                       | Questions, signaux d'alerte et barème                        | Démarrer un projet `SEO`  |
|  48 |  P3  | `contrat-seo-duree-engagement`     | Lire durée, livrables, accès et sortie d'un contrat                   | Clauses commentées sans conseil juridique individualisé      | Cadrage `SEO`             |
|  49 |  P2  | `seo-local-pme`                    | Construire une visibilité locale cohérente                            | Plan site, fiche d'établissement, citations et avis          | Diagnostic `SEO`          |
|  50 |  P2  | `referencement-local-commerce`     | Relier requêtes locales, pages utiles et visites en magasin           | Parcours recherche/appel/itinéraire et mesure                | Diagnostic `SEO`          |
|  51 |  P3  | `seo-site-vitrine`                 | Concevoir l'arborescence SEO d'un petit site professionnel            | Carte intentions/pages et maillage minimal                   | Cadrage `SITE` + `SEO`    |
|  52 |  P2  | `seo-saas-b2b`                     | Construire une acquisition organique alignée sur le cycle de vente    | Carte problèmes/comparaisons/intégrations et mesure pipeline | Cadrage `SEO`             |
|  53 |  P3  | `seo-site-ecommerce`               | Prioriser catégories, fiches, filtres et contenu                      | Matrice impact/effort et risques d'indexation                | Audit `SEO`               |
|  54 |  P3  | `seo-nextjs`                       | Vérifier rendu, métadonnées, canonicals et performances               | Checklist technique testable                                 | Audit `SEO`               |
|  55 |  P3  | `seo-wordpress`                    | Distinguer réglages d'extension et problèmes structurels              | Audit en couches et erreurs fréquentes                       | Audit `SEO`               |
|  56 |  P1  | `pourquoi-site-pas-visible-google` | Diagnostiquer découverte, indexation, pertinence ou autorité          | Arbre de diagnostic fondé sur Search Console                 | Audit `SEO`               |
|  57 |  P2  | `site-indexe-sans-trafic`          | Comprendre pourquoi des pages indexées ne reçoivent pas d'impressions | Grille requête, position, CTR et intention                   | Audit `SEO`               |
|  58 |  P2  | `positions-google-baissent`        | Distinguer saisonnalité, concurrence, technique et contenu            | Protocole d'enquête avant correction                         | Audit `SEO`               |
|  59 |  P3  | `migration-nom-domaine-seo`        | Préparer une migration de domaine sans perdre les signaux             | Inventaire, redirections, mesure et rollback                 | Audit `SEO`               |

### D. Google Ads — 15 guides

|   # | Prio | Slug proposé                            | Travail accompli pour le lecteur                                | Format ou preuve différenciante                                   | Sortie                   |
| --: | :--: | --------------------------------------- | --------------------------------------------------------------- | ----------------------------------------------------------------- | ------------------------ |
|  60 |  P1  | `prix-gestion-google-ads`               | Comprendre honoraires, budget média et coûts annexes            | Trois modèles et socles chiffrés, puis formule de coût complet    | Cadrage `ADS`            |
|  61 |  P1  | `budget-google-ads-pme`                 | Fixer un budget test compatible avec marge et volume            | Calculateur seuil de rentabilité et scénarios                     | Cadrage `ADS`            |
|  62 |  P2  | `combien-de-temps-google-ads-resultats` | Définir ce qui peut être appris semaine après semaine           | Chronologie de lancement et seuils de données                     | Cadrage `ADS`            |
|  63 |  P2  | `gerer-google-ads-soi-meme-ou-agence`   | Arbitrer temps interne, risque et complexité                    | Grille par budget, compétence et enjeu                            | Démarrer un projet `ADS` |
|  64 |  P1  | `leads-google-ads-non-qualifies`        | Comprendre pourquoi la campagne attire des demandes sans valeur | Diagnostic requêtes, zones, promesse, formulaire et qualification | Audit `ADS`              |
|  65 |  P1  | `choisir-agence-google-ads`             | Vérifier propriété du compte, mesure et reporting               | Questions, preuves et signaux d'alerte                            | Démarrer un projet `ADS` |
|  66 |  P1  | `audit-google-ads-que-verifier`         | Contrôler une campagne avant d'augmenter le budget              | Checklist compte, requêtes, annonces, enchères et mesure          | Audit `ADS`              |
|  67 |  P2  | `google-search-ads-ou-performance-max`  | Choisir un type de campagne selon données et contrôle souhaité  | Matrice objectifs, signaux et transparence                        | Cadrage `ADS`            |
|  68 |  P2  | `google-ads-ou-meta-ads`                | Choisir entre demande existante et création de demande          | Comparatif intention, création, attribution et budget             | Cadrage `ADS`            |
|  69 |  P1  | `suivi-conversions-google-ads`          | Définir les conversions qui doivent piloter les enchères        | Plan de marquage, valeurs et tests de preuve                      | Audit `ADS`              |
|  70 |  P2  | `google-ads-saas-b2b`                   | Adapter campagnes et mesure à un cycle de vente long            | Carte mots-clés/landing/CRM et revenu pipeline                    | Cadrage `ADS`            |
|  71 |  P2  | `google-ads-commerce-local`             | Relier annonces, appels, itinéraires et ventes locales          | Plan de campagne et mesure hors ligne                             | Cadrage `ADS`            |
|  72 |  P1  | `pourquoi-google-ads-ne-convertit-pas`  | Isoler trafic, offre, page, mesure ou suivi commercial          | Arbre de diagnostic et ordre des tests                            | Audit `ADS`              |
|  73 |  P1  | `calculer-cout-par-lead-google-ads`     | Relier CPC, conversion, qualification, vente et marge           | Modèle recalculable et cas de leads non qualifiés                 | Cadrage `ADS`            |
|  74 |  P1  | `landing-page-google-ads`               | Concevoir une page cohérente avec requête, annonce et action    | Wireframe commenté, checklist et protocole de test                | Cadrage `ADS` + `SITE`   |

### E. Maintenance, TMA et reprise — 13 guides

|   # | Prio | Slug proposé                                  | Travail accompli pour le lecteur                                  | Format ou preuve différenciante                             | Sortie                 |
| --: | :--: | --------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------- | ---------------------- |
|  75 |  P1  | `contrat-maintenance-site-internet`           | Comprendre périmètre, délais, exclusions et sortie                | Matrice incidents/livrables et clauses à clarifier          | Cadrage `TMA`          |
|  76 |  P1  | `contrat-tma-application`                     | Préparer une maintenance applicative exploitable                  | RACI, files de demandes, niveaux d'urgence et réversibilité | Cadrage `TMA`          |
|  77 |  P1  | `cout-maintenance-application-metier`         | Budgéter correction, prévention, support et évolution             | TCO annuel avec inconnues visibles                          | Cadrage `TMA`          |
|  78 |  P2  | `tma-ou-regie`                                | Choisir entre capacité réservée, tickets et lots                  | Comparatif charge prévisible, urgence et gouvernance        | Cadrage `TMA`          |
|  79 |  P2  | `sla-maintenance-applicative`                 | Fixer disponibilité, prise en charge et rétablissement            | Exemples de niveaux de service et coût associé              | Cadrage `TMA`          |
|  80 |  P3  | `maintenance-preventive-corrective-evolutive` | Répartir le budget entre trois natures de travail                 | Portefeuille type et arbitrages trimestriels                | Cadrage `TMA`          |
|  81 |  P1  | `reprendre-maintenance-site-autre-agence`     | Changer d’équipe en testant la reprise avant le retrait des accès | Bascule service par service, copie isolée et contrôle final | Audit de reprise `TMA` |
|  82 |  P1  | `audit-technique-avant-reprendre-site`        | Mesurer l'état réel avant de signer une maintenance               | Inventaire code, hébergement, données, sécurité et dette    | Audit technique        |
|  83 |  P2  | `site-wordpress-pirate-que-faire`             | Contenir l'incident puis restaurer proprement                     | Chronologie urgence/preuves/nettoyage/durcissement          | Intervention `TMA`     |
|  84 |  P1  | `site-internet-en-panne-que-faire`            | Prioriser diagnostic, communication et retour en service          | Arbre d'incident et informations à transmettre              | Intervention `TMA`     |
|  85 |  P2  | `dette-technique-cout-entreprise`             | Traduire dette et risque en impact business                       | Registre dette, probabilité, impact et arbitrage            | Audit technique        |
|  86 |  P3  | `mise-a-jour-wordpress-risques`               | Organiser sauvegarde, test, mise à jour et rollback               | Procédure reproductible et matrice de criticité             | Maintenance `TMA`      |
|  87 |  P3  | `obsolescence-framework-application-web`      | Décider entre maintien, mise à niveau et réécriture               | Arbre de décision support/sécurité/recrutement              | Audit `TMA`            |

### F. Sites vitrines pour professionnels — 13 guides

|   # | Prio | Slug proposé                              | Travail accompli pour le lecteur                                | Format ou preuve différenciante                            | Sortie            |
| --: | :--: | ----------------------------------------- | --------------------------------------------------------------- | ---------------------------------------------------------- | ----------------- |
|  88 |  P3  | `site-vitrine-est-il-encore-utile`        | Décider du rôle du site face aux plateformes et réseaux sociaux | Matrice acquisition/confiance/dépendance                   | Diagnostic `SITE` |
|  89 |  P1  | `preparer-contenus-site-vitrine`          | Rassembler messages, preuves, visuels et appels à l'action      | Workbook de collecte et exemple rempli                     | Cadrage `SITE`    |
|  90 |  P2  | `prise-rendez-vous-en-ligne-site-vitrine` | Choisir entre formulaire, agenda et réservation avec paiement   | Parcours, synchronisation, rappels, données et cas d'échec | Cadrage `SITE`    |
|  91 |  P2  | `site-one-page-ou-multipage`              | Choisir une structure selon offre, SEO et conversion            | Comparatif avec seuils de bascule                          | Cadrage `SITE`    |
|  92 |  P1  | `template-ou-site-sur-mesure`             | Arbitrer rapidité, différenciation et évolution                 | TCO, limites et cas où le template gagne                   | Cadrage `SITE`    |
|  93 |  P1  | `landing-page-ou-site-vitrine`            | Choisir entre une page de campagne et un site de confiance      | Matrice objectif, acquisition, contenus et évolution       | Cadrage `SITE`    |
|  94 |  P1  | `quand-refaire-site-internet`             | Distinguer correction, optimisation et refonte                  | Score technique/commercial/contenu et arbre de décision    | Diagnostic `SITE` |
|  95 |  P2  | `site-internet-artisan`                   | Cadrer preuves, zones, demandes et réalisations d'un artisan    | Plan de site et checklist photos/avis                      | Cadrage `SITE`    |
|  96 |  P2  | `site-internet-commerce-local`            | Relier vitrine en ligne, fiche locale et visite en magasin      | Parcours mobile et mesure appels/itinéraires               | Cadrage `SITE`    |
|  97 |  P3  | `site-internet-profession-liberale`       | Construire confiance, périmètre et prise de contact             | Matrice contenus/preuves selon contraintes du métier       | Cadrage `SITE`    |
|  98 |  P2  | `site-internet-cabinet-conseil`           | Transformer une expertise complexe en offres compréhensibles    | Architecture problèmes/offres/preuves et cas d'usage       | Cadrage `SITE`    |
|  99 |  P3  | `site-internet-hotel-independant`         | Arbitrer site direct, moteur de réservation et plateformes      | Parcours réservation, contenus et dépendances              | Cadrage `SITE`    |
| 100 |  P2  | `site-internet-entreprise-industrielle`   | Présenter savoir-faire, marchés, qualité et recrutement         | Arborescence B2B, preuves et parcours multi-publics        | Cadrage `SITE`    |

## 6. Système de notation avant lancement

Une place dans la roadmap n'autorise pas automatiquement la production. Avant
chaque sprint, noter chaque candidat sur 100 :

| Critère                                                                        |  Points |
| ------------------------------------------------------------------------------ | ------: |
| Adéquation avec une offre réellement vendue                                    |      25 |
| Proximité d'une demande de devis                                               |      25 |
| Preuve de demande : Search Console, Keyword Planner, questions clients ou SERP |      15 |
| Capacité à fournir une preuve, une expérience ou un outil original             |      15 |
| Différenciation par rapport au corpus publié et aux pages service              |      10 |
| Potentiel de maillage, ressource et CTA utile                                  |      10 |
| **Total**                                                                      | **100** |

Produire d'abord les sujets à 70 points ou plus. Un sujet sous ce seuil est
reprécisé, fusionné ou reporté ; il n'est jamais gonflé artificiellement.
Keyword Planner apporte un signal de demande et d'enchère, pas une mesure de
difficulté SEO. Les observations de SERP et les impressions Search Console
restent nécessaires.

## 7. Règles anti-cannibalisation

1. La page service conserve l'intention transactionnelle
   « agence/prestataire + service ». Le guide répond à une douleur, un budget,
   un arbitrage, un risque, une méthode ou une préparation.
2. Avant rédaction, comparer le nouveau brief aux H1, promesses et plans de
   tous les guides publiés. Si 60 % de la réponse est identique, enrichir la page
   existante plutôt que publier.
3. Une requête principale, une situation de lecteur, une décision et une URL
   primaire. Les synonymes appartiennent à la même page.
4. Les pages sectorielles doivent contenir des processus, contraintes,
   preuves et parcours propres au secteur. Aucun gabarit ville × métier
   simplement paraphrasé.
5. Les sujets juridiques, réglementaires, tarifaires et outils datés sont
   revérifiés à chaque modification substantielle.

## 8. Maillage et conversion obligatoires

Chaque nouveau guide doit :

- être relié depuis son hub, son guide parent ou une page service pertinente ;
- utiliser des ancres descriptives et naturelles ;
- proposer les deux ou trois suites logiques du parcours, pas une liste
  automatique de liens ;
- pointer vers la page service concernée et, si un CTA éditorial est utile,
  vers `/demarrer-un-projet` avec un libellé correspondant au problème ;
- recevoir en retour au moins un lien contextuel d'une page déjà publiée ;
- conserver Article et Breadcrumb structurés quand ils correspondent au
  contenu visible. Une FAQ n'est ajoutée que si elle aide vraiment le lecteur ;
  elle reste visible sans schéma `FAQPage`, conformément à la règle actuelle du
  projet.

## 9. Cadence d'exécution

La roadmap avance par lots successifs en suivant le workflow maître. La taille
du lot organise le calendrier ; elle ne permet pas d’abréger les quatre passes
propres à chaque guide :

1. les recherches et dossiers de preuves des sujets du lot peuvent avancer en
   parallèle ;
2. chaque rédaction et intégration se fait ensuite successivement dans le
   worktree partagé, avec une forme propre au sujet ;
3. chaque guide reçoit son contre-audit indépendant et ses corrections avant
   le suivant ;
4. la passe de plume humaine, les tests et la QA navigateur ferment le guide
   avant que la rédaction suivante commence ;
5. le lot est publié uniquement quand tous les statuts individuels sont
   démontrables, puis les URLs et conversions sont mesurées sans bloquer le
   sprint suivant.

Les indicateurs sont suivis en parallèle : URLs découvertes/indexées,
impressions non-marque, requêtes, CTR, clics vers les pages service, démarrages
de formulaire et demandes qualifiées. Une position moyenne isolée ou un temps
passé ne suffit pas à juger un guide.

## 10. État après la remise à zéro

Le corpus précédent ne constitue plus une référence de qualité ni un état
publié à prolonger. Les routes historiques sont traitées comme des routes
héritées à rediriger ; elles ne comptent plus dans la file éditoriale.

`automatiser-processus-metier` est le premier guide reconstruit. Il a suivi les
quatre passes successives et les quatre gates documentées dans son dossier de
recherche. Il est autorisé à rejoindre le hub, le sitemap et `llms.txt` dans un
artefact de production indexable. Cette autorisation ne prouve ni déploiement,
ni exploration, ni indexation effective, ni classement.

Les 99 sujets suivants conservent le statut `NON_LANCE`. Aucun ancien contenu,
ancien score ou ancien contrôle ne leur est transféré.
