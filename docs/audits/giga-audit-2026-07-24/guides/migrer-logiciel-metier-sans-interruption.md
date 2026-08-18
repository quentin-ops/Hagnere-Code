# Audit approfondi — `migrer-logiciel-metier-sans-interruption`

Date : 24 juillet 2026

Auditeur concurrentiel : audit P3 en lecture seule. Les sources officielles et les documentations primaires servent à vérifier les risques de continuité, sécurité, données et déploiement. Elles ne prouvent ni une durée, ni un tarif, ni une garantie « sans interruption » pour une PME donnée.

Snapshot du guide :

- Source : `src/app/guides/migrer-logiciel-metier-sans-interruption/page.tsx` (951 lignes, 3 919 mots visibles en rendu local).
- Registre : `src/lib/guides.ts:622-637`.
- Open Graph : `src/app/guides/migrer-logiciel-metier-sans-interruption/opengraph-image.tsx`.
- SHA-256 : `page.tsx` `b38dd44dec0bfd3402b385c54fd2200b0b0e341f75ad07545cf5297eaaac3a20` ; `opengraph-image.tsx` `bffdd1e9f0f2567ab4af327d0f2abf379adc59ccefda965abf4f552fe5270091` ; `guides.ts` `8663e6e84352121ec854393e049492a1c2b72f242166141e5d31e0911b43cb09`.
- Registre : publication et modification `2026-07-22`, lecture annoncée `16` minutes, rubrique « Préparer son projet ».
- Aucun dossier de recherche rejouable `docs/research/migrer-logiciel-metier-sans-interruption.md` n’a été trouvé. Cela ne prouve pas l’absence d’un travail préparatoire ; cela empêche de reproduire ses recherches, hypothèses et exclusions.

## 1. Verdict exécutif

```text
Lecteur exact : dirigeant de PME qui veut remplacer un ERP, CRM, logiciel de planning, outil de stock, logiciel d’intervention ou outil de facturation sans perdre une journée de travail.
Question réelle : « Comment savoir ce qui dépend encore de l’ancien outil, reprendre les bonnes données, faire travailler les équipes, conserver une marche arrière et décider objectivement de continuer ? »
Décision attendue : stabiliser l’existant et reporter, migrer progressivement, basculer en une fois, maintenir temporairement les deux systèmes, ou réécrire seulement un périmètre maîtrisé.
Réponse actuelle en une phrase : partir des trois opérations indispensables, préparer les données et les rôles, répéter la bascule, décider à une heure fixée puis revenir si une condition critique échoue.
Défaut qui coûte le plus de valeur : le guide explique très bien la discipline d’une bascule, mais pas encore l’ingénierie qui rend une migration progressive sûre : inventaire de dépendances, mapping/nettoyage, CDC ou batch, idempotence, réconciliation, stratégie strangler/blue-green/canary, SLA, hypercare et TCO.
Niveau actuel : B+
Priorité : haute
Statut : audité, non réécrit, non contre-audité après correction
P1–P4 : P1 recherche/cadrage = NON PASS (corpus et benchmark non rejouables) ; P2 fond/calculs = NON PASS (données, coexistence, rollback, coûts et support incomplets) ; P3 contre-audit = PASS pour ce rapport seulement ; P4 plume/UX/QA = PASS pour la base humaine et le rendu local, NON PASS pour un guide de référence tant que les décisions critiques restent qualitatives.
Publication/indexation : non prouvées. En local, la page est `noindex, nofollow`; production, sitemap, Search Console et conversions ne sont pas vérifiés.
Verdict : NO-GO éditorial pour une promesse de migration complète. GO possible après correction des P1 et contre-audit indépendant.
```

### Score avant correction

| Axe         | Note /10 | Preuve                                                                           | Manque décisif                                                                                                                                |
| ----------- | -------: | -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Intention   |        9 | Accroche et « trois opérations qui ne peuvent pas attendre », `page.tsx:220-344` | Très bon ciblage dirigeant ; pas de réponse immédiate selon volume, dépendances ou criticité.                                                 |
| Décision    |        8 | Trois méthodes et critères de retour, `page.tsx:346-452`, `650-722`              | Ne compare pas quatre stratégies à périmètre égal : stabiliser, progressive, big bang, report/réécriture ciblée.                              |
| Pédagogie   |        9 | Chronologie J-30/J-7/J0/J+7, tables et exemple fictif                            | RPO/RTO, CDC, idempotence, blue-green, canary, strangler et hypercare ne sont pas expliqués au dirigeant.                                     |
| Profondeur  |        7 | Sauvegarde/restauration, rôles, opérations, retour, archive                      | Mapping champ à champ, nettoyage, graphe de dépendances, double run, réconciliation, SLA, support et coût complet manquent.                   |
| Preuve      |        8 | ANSSI et CNIL, `page.tsx:309-340`, `457-638`, `864-930`                          | Sources primaires solides mais pas de preuve d’un test réel ; certaines recommandations sont résumées sans version de contrôle reproductible. |
| Comparaison |        6 | Une bascule, lots, parallèle                                                     | Les stratégies modernes et les conditions de choix ne sont pas mises au même périmètre.                                                       |
| Originalité |        8 | Exemple 12 480 clients/420 ouverts/6 heures et décision de report                | Pas de contrat de données, runbook copiable, matrice de rapprochement ni TCO 12/36/60.                                                        |
| Style       |        9 | Ton humain, refus de promettre zéro incident, « revenir » normalisé              | La répétition de « contrôlez » gagnerait à être convertie en preuves et seuils chiffrés.                                                      |
| Conversion  |        8 | CTA prudent, accepte report ou réduction                                         | Aucun livrable explicite après le formulaire : inventaire, scorecard, plan de répétition ou estimation TCO.                                   |
| SEO/produit |        8 | H1, FAQ, tables, maillage, Article + BreadcrumbList                              | Champ lexical à élargir : mapping, ETL/ELT, CDC, batch, idempotence, rapprochement, blue-green, canary, hypercare, SLA, réversibilité.        |

Total : **80/100**.

Priorités : **P0 = 0, P1 = 12, P2 = 6**. Aucun P0 n’a été observé dans le contenu. Les P1 sont bloquantes parce qu’un dirigeant peut confondre une copie réussie avec une migration sûre, alors que les écarts apparaissent dans les écritures concurrentes, les intégrations, les droits et le retour après la bascule.

## 2. Ce que le guide fait très bien

La première phrase traite la vraie peur : l’activité ne peut pas attendre. Le guide ne vend pas une « migration sans aucun incident » ; il propose une fenêtre acceptable, un fonctionnement temporaire et une décision de retour. C’est une posture professionnelle crédible.

La progression est cohérente :

1. définir ce qui doit fonctionner lundi matin ;
2. choisir une bascule unique, des lots ou une période parallèle ;
3. décider quelles données sont actives, archivées ou abandonnées ;
4. nommer les rôles et tester une sauvegarde restaurée ;
5. répéter la copie, les dernières modifications, les contrôles et le travail des utilisateurs ;
6. suivre une feuille horaire et une décision unique le jour J ;
7. revenir si une opération, un droit, un total ou une durée critique échoue ;
8. rapprocher les saisies temporaires après le changement ;
9. fermer, archiver ou garder l’ancien outil en lecture seule.

Le texte réussit plusieurs choses que les guides de migration oublient souvent :

- il demande de partir des opérations, pas du nombre d’écrans ;
- il distingue une sauvegarde réussie d’une restauration réellement essayée ;
- il demande des comptes et responsabilités nominatifs ;
- il distingue une préférence d’interface d’un incident bloquant ;
- il autorise explicitement le report ;
- il conserve une voie temporaire pour les urgences ;
- il ne prétend pas que le parallèle est automatiquement plus sûr ;
- il traite la fermeture de l’ancien logiciel comme une décision, pas comme une formalité.

L’exemple fictif est utile : 12 480 clients, 8 640 interventions terminées, 420 ouvertes, 30 factures et 10 utilisateurs ; une fenêtre de 6 h, une copie de 3 h 20, des contrôles de 1 h 10 et une marge de 1 h 30. L’entreprise reporte parce que certaines interventions ouvertes sont rattachées au mauvais client. Le lecteur comprend enfin ce qu’est un go/no-go.

## 3. Ce qui donne une illusion de complétude

Le guide sait dire quoi vérifier, mais pas toujours comment le vérifier ni comment le rendre réconciliable. Les questions suivantes restent ouvertes :

- quel est l’inventaire complet des applications, interfaces, exports, jobs, comptes, secrets, appareils, contrats, flux bancaires, imprimantes et fournisseurs qui dépendent de l’ancien outil ?
- quel champ source devient quel champ cible, avec quelle transformation, valeur par défaut, règle de doublon et approbation métier ?
- quelles données sont invalides, obsolètes, en doublon, orphelines, incomplètes ou soumises à une rétention différente ?
- qui écrit pendant la coexistence, et comment le second système reçoit-il les nouvelles écritures : batch planifié, CDC, journal d’événements, API ou ressaisie contrôlée ?
- comment garantit-on qu’un retry ne crée pas deux commandes, deux factures ou deux paiements ?
- comment rapproche-t-on les totaux, les sommes financières, les statuts, les pièces et les relations, au-delà de dix dossiers connus ?
- quand employer une bascule big bang, une migration progressive par domaine, un déploiement blue-green ou un canary ; quand la stratégie strangler est-elle dangereuse car le domaine partage une base ?
- quel RPO, quel RTO, quel MTD et quel SLA l’activité accepte-t-elle pour chaque opération, et pas seulement pour l’application ?
- comment le support, la formation, la communication et l’hypercare sont-ils staffingés après le jour J ?
- quel coût total à 12/36/60 mois, en incluant la double exploitation, la migration, les licences, les archives, la sortie, les contrôles, la formation et le coût d’une journée d’arrêt ?

Le guide contient trois méthodes, mais la demande de décision doit comparer à périmètre égal :

1. stabiliser l’existant et reporter ;
2. migrer progressivement par domaine ou population ;
3. basculer en une fois (big bang) ;
4. réécrire ou replatformer un périmètre ciblé, avec coexistence contrôlée.

La « période parallèle » est une modalité de coexistence, pas une stratégie de transformation complète. La page devrait distinguer les deux, sinon le lecteur choisit « parallèle » sans comprendre les coûts de double saisie et de réconciliation.

## 4. Benchmark France et international

Vérification au 24 juillet 2026. Les sources commerciales ne servent pas de preuve de gain. Les architectures « strangler », « blue-green » et « canary » sont des patterns techniques : elles ne sont pertinentes que si les données et les écritures peuvent être séparées.

| Source officielle ou primaire                                                                                                                                                                                               | Zone                                         | Réponse utile                                                                                                                                         | Limite                                                                                             | Ajout à faire                                                                                                  |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| [ANSSI — Sécuriser une migration numérique](https://messervices.cyber.gouv.fr/documents-guides/anssi_essentiels_migration_1.0.pdf)                                                                                          | France, version 1.0 janvier 2026             | Inventaire, implication des métiers, préparation, procédures testées et retrait raisonné de l’ancien système.                                         | Guide cyber, pas contrat de transformation métier.                                                 | Ajouter inventaire des dépendances, exceptions, propriétaires, journal des changements et critères de retrait. |
| [ANSSI — sauvegarde des SI](https://messervices.cyber.gouv.fr/documents-guides/anssi_fondamentaux_sauvegarde_systemes_dinformation_v1.1.pdf)                                                                                | France, version 1.1, 27/11/2025              | Déterminer perte de données admissible et durée d’interruption selon l’activité ; restauration dans le bon ordre.                                     | RPO/RTO ne sont pas universels ; les valeurs doivent venir du métier.                              | Faire écrire RPO/RTO/MTD par opération, puis les tester avec dépendances.                                      |
| [CNIL — sauvegarder](https://www.cnil.fr/fr/securite-sauvegarder)                                                                                                                                                           | France, 14/03/2024                           | Copies fréquentes, tests de restauration, séparation géographique et copie hors ligne.                                                                | Recommandation sécurité, non plan de migration complet.                                            | Ajouter test de restauration avant, pendant et après la bascule.                                               |
| [CNIL — continuité et reprise](https://www.cnil.fr/fr/securite-prevoir-la-continuite-et-la-reprise-dactivite)                                                                                                               | France                                       | Responsables, alertes, mode dégradé et exercices.                                                                                                     | Les procédures restent à adapter aux données et au métier.                                         | Ajouter organisation d’incident, canal unique, communication et exercice de retour.                            |
| [CNIL — maintenance et destruction des données](https://www.cnil.fr/fr/securite-encadrer-la-maintenance-et-la-destruction-des-donnees)                                                                                      | France                                       | Encadrer les accès des prestataires, journaliser, supprimer les copies et formaliser la fin de contrat.                                               | Ne définit pas les règles de mapping ou de cutover.                                                | Ajouter clauses d’accès, export, destruction attestée, sous-traitants et comptes temporaires.                  |
| [NIST SP 800-34 Rev.1 — contingency planning](https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final)                                                                                                                           | États-Unis                                   | BIA, alternatives manuelles, récupération, RTO/RPO et plans de contingence.                                                                           | Publication ancienne (2010), à utiliser comme cadre et non comme état de l’art unique.             | Expliquer RTO/RPO/MTD avec un exemple PME et leurs limites.                                                    |
| [CISA — ransomware guide](https://www.cisa.gov/stopransomware/ransomware-guide)                                                                                                                                             | États-Unis                                   | Sauvegardes hors ligne chiffrées, restauration priorisée, tests réguliers et leçons apprises.                                                         | Conçu pour incident ransomware, pas migration planifiée.                                           | Séparer scénario migration d’un incident de sécurité et prévoir un arrêt si compromission suspectée.           |
| [AWS Prescriptive Guidance — strangler fig](https://docs.aws.amazon.com/prescriptive-guidance/latest/cloud-design-patterns/strangler-fig.html)                                                                              | États-Unis, documentation primaire d’éditeur | Migration incrémentale de fonctions avec risque et disruption réduits ; le big bang augmente le risque.                                               | Pattern orienté monolithe/microservices ; base et écritures partagées peuvent le rendre dangereux. | Ajouter « où le pattern ne s’applique pas » et exiger source de vérité/CDC/réconciliation.                     |
| [GOV.UK — deploying software regularly](https://www.gov.uk/service-manual/technology/deploying-software-regularly)                                                                                                          | Royaume-Uni                                  | Petits changements, environnements multiples, déploiements audités, smoke tests, rollback plus simple et zero-downtime quand possible.                | Service public et déploiement logiciel, pas migration de données financière.                       | Ajouter environnements, artifact versionné, smoke tests, journal et plan roll-forward/rollback.                |
| [GOV.UK — beta et transition vers live](https://www.gov.uk/service-manual/agile-delivery/how-the-beta-phase-works)                                                                                                          | Royaume-Uni                                  | Garder le legacy pendant le beta, tester avec de vrais utilisateurs, préparer support et transition.                                                  | Standard de service public britannique.                                                            | Ajouter pilote limité, support, formation et mesure avant généralisation.                                      |
| [Home Office — deployment strategy](https://engineering.homeoffice.gov.uk/patterns/selecting-a-deployment-strategy/)                                                                                                        | Royaume-Uni                                  | Définit canary, blue/green, rolling et leurs conditions ; le canary peut être problématique quand les données sont partagées.                         | Guidance technique, pas règle d’entreprise.                                                        | Comparer les patterns sur dépendances, écriture, rollback et observabilité.                                    |
| [NCSC UK — lift and shift](https://www.ncsc.gov.uk/collection/cloud/using-cloud-services-securely/how-to-lift-and-shift-successfully)                                                                                       | Royaume-Uni                                  | Inventorier avant migration, identifier EOL/vulnérabilités, simplifier les permissions et traiter les dépendances.                                    | Orienté cloud ; une migration ERP peut avoir d’autres contraintes.                                 | Ajouter inventaire de dépendances, fin de vie et permissions.                                                  |
| [NCSC UK — decommissioning assets](https://www.ncsc.gov.uk/guidance/decommissioning-assets)                                                                                                                                 | Royaume-Uni                                  | Les données de rollback incluent configuration, règles réseau et schémas ; tester le rollback avant retrait.                                          | Concerne actifs, pas toute la conduite du changement.                                              | Ajouter configuration, secrets, réseau, contacts et notification dans le runbook de sortie.                    |
| [ASD/ACSC — system management](https://www.cyber.gov.au/business-government/asds-cyber-security-frameworks/ism/cyber-security-guidelines/guidelines-for-system-management)                                                  | Australie, contrôles actualisés              | Restauration coordonnée des données, applications et paramètres à un point commun ; dépendances à identifier.                                         | Référentiel de sécurité, pas calendrier de migration.                                              | Ajouter restauration point-in-time et test des dépendances.                                                    |
| [BSI — secure use of cloud services](https://www.bsi.bund.de/EN/Themen/Unternehmen-und-Organisationen/Informationen-und-Empfehlungen/Empfehlungen-nach-Angriffszielen/Cloud-Computing/Sichere-Nutzung/sichere-nutzung.html) | Allemagne/DACH                               | Migration cloud, disponibilité, autorisations, administration, processus, formation, tests fonctionnels et de sécurité, puis fin de contrat.          | Orienté cloud ; ne remplace pas un cahier de mapping.                                              | Ajouter transfert, modèle d’administration, formation, critères et réversibilité.                              |
| [BSI IT-Grundschutz Compendium — secure migration/outsourcing](https://www.bsi.bund.de/SharedDocs/Downloads/EN/BSI/Grundschutz/International/bsi-it-gs-comp-2019.pdf?__blob=publicationFile&v=1)                            | Allemagne/DACH                               | Ne pas utiliser la production non protégée comme donnée de test, prévoir équipe de sécurité, fallback, responsabilités, exercices et fin de relation. | Version anglaise du compendium, pas une obligation française.                                      | Ajouter données de test protégées, comité sécurité et exercice conjoint.                                       |

Saturation : ces sources couvrent déjà continuité, inventaire, déploiement progressif, rollback, support, cloud et sécurité. Ajouter des articles de consultants apporterait surtout des recettes non comparables. Le déficit du guide est opérationnel : montrer les flux, les comptes, les écritures et les rapprochements avec des chiffres déclarés.

## 5. Matrice de gain d’information

| Décision                                | Couverture actuelle                                                        | Risque                                                                                  | Réponse supérieure à produire                                                                                      |
| --------------------------------------- | -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Quelle opération doit rester possible ? | Trois opérations et quatre questions.                                      | Une migration réussit techniquement mais bloque une exception commerciale ou comptable. | Matrice opérationnelle avec criticité, volume, délai admissible, mode dégradé, propriétaire et test d’acceptation. |
| Que dépend-il de l’ancien système ?     | Dépendances évoquées par les liens entre opérations.                       | API, exports, jobs, imprimantes, comptes ou fournisseurs oubliés.                       | Inventaire application–donnée–interface–personne–contrat–infrastructure, avec date de fin de vie.                  |
| Quelles données bougent ?               | Actives/archives/abandonnées, dix dossiers connus.                         | Doublons, invalides, orphelines, encodage, unités, statuts et pièces non repris.        | Profilage, règles de nettoyage, mapping source→cible, exceptions et approbation métier.                            |
| Qui écrit pendant la transition ?       | Arrêt des saisies et document temporaire ; parallèle avec source désignée. | Double écriture, divergence, perte et conflit.                                          | Modèle write-owner par domaine, batch ou CDC, idempotency key, journal et réconciliation.                          |
| Quelle stratégie technique ?            | Bascule unique, lots, parallèle.                                           | Canary ou blue-green sans données compatibles ; strangler sur base partagée.            | Arbre de choix : stabiliser, progressive/strangler, big bang, replatform ciblé, report.                            |
| Quelle perte est acceptable ?           | Perte maximale et durée admissible mentionnées.                            | Valeurs non chiffrées, confusion RPO/RTO/MTD/SLA.                                       | RPO/RTO/MTD par opération avec exemples et preuves de restauration.                                                |
| Comment tester ?                        | Répétition complète et utilisateurs.                                       | Tests fonctionnels sans performance, sécurité, droits, intégrations ou reprise.         | Matrice unitaires, intégration, migration, rapprochement, performance, sécurité, UAT et DR.                        |
| Quand couper ?                          | Feuille horaire et décision unique.                                        | Fenêtre consommée avant contrôle ou rollback irréalisable.                              | Cutover runbook minuté, checkpoints, go/no-go, observabilité, communication et gel des changements.                |
| Comment revenir ?                       | Ancien outil, sauvegarde et saisies temporaires.                           | Nouvelles écritures non rejouables ; transformation irréversible.                       | Rollback par domaine/version, replay CDC/batch, fenêtre de retour, état impossible et plan roll-forward.           |
| Qui aide après ?                        | Première semaine, signalement et contrat TMA lié.                          | Support insuffisant, fatigue, problèmes non triés, nouveau projet ajouté trop vite.     | Hypercare staffingé, canal unique, criticité, SLA de réponse, métriques et sortie progressive.                     |
| Combien cela coûte ?                    | Aucun TCO ni coût d’arrêt.                                                 | Le double run et la sortie dépassent le budget.                                         | TCO 12/36/60, coût interruption, migration, licences, archive, formation, support et réversibilité.                |

## 6. Faits, fraîcheur et nuances

| Affirmation                                                         | Verdict                             | Source                                                                                                               | Correction                                                                                             |
| ------------------------------------------------------------------- | ----------------------------------- | -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| RPO/RTO viennent des besoins métier                                 | Correct.                            | ANSSI sauvegarde, NIST SP 800-34.                                                                                    | Nommer aussi MTD et SLA, puis demander une valeur par opération.                                       |
| Une sauvegarde réussie n’est pas une restauration prouvée           | Correct.                            | CNIL sauvegarde, ANSSI, ASD/ACSC.                                                                                    | Conserver ; exiger une restauration point-in-time avec dépendances.                                    |
| Les changements importants sont à faire avant ou après la migration | Prudence raisonnable, source ANSSI. | ANSSI migration.                                                                                                     | Préciser que les exceptions urgentes doivent être journalisées, testées et approuvées.                 |
| La période parallèle peut créer deux versions                       | Correct.                            | Raisonnement de cohérence ; confirmé par les enjeux de coexistence.                                                  | Ajouter write-owner, CDC/batch, idempotence et fin datée.                                              |
| Garder l’ancien logiciel en lecture seule protège l’historique      | Conditionnel.                       | CNIL/ANSSI/NCSC sur conservation, sécurité, décommissionnement.                                                      | Vérifier licences, accès, chiffrement, sauvegarde, responsabilité et destruction des copies.           |
| Blue-green/canary réduisent toujours le risque                      | Faux en général.                    | Home Office : data sharing peut rendre canary problématique ; AWS : strangler réduit mais ne supprime pas le risque. | Expliquer que ces patterns portent d’abord sur le trafic/version, pas automatiquement sur les données. |
| Un import correct prouve la migration                               | Faux.                               | BSI cloud : tests fonctionnels et sécurité, processus et formation.                                                  | Conserver la phrase pédagogique et ajouter mapping, rapprochement et UAT.                              |
| Les données de test peuvent venir de la production                  | À encadrer.                         | BSI recommande de ne pas utiliser la production non protégée comme test.                                             | Pseudonymiser, minimiser, contrôler l’accès, détruire les copies et documenter.                        |
| La conservation dépend du besoin et des obligations                 | Correct.                            | CNIL sécurité/maintenance et destruction.                                                                            | Ajouter propriétaire, durée, archive consultable, purge et preuve de suppression.                      |

### Fragilités précises

1. Le guide annonce « 3 façons de migrer » dans les points clés, alors que la décision réelle nécessite de distinguer stratégie de transformation (stabiliser, progressive, big bang, replatform ciblé) et mécanisme de coexistence (parallèle, batch, CDC, manuel).
2. Les « dix dossiers connus » et « 30 factures » sont utiles pour un premier contrôle, mais aucune couverture de population, somme de contrôle, tolérance ou échantillonnage n’est donnée.
3. « Appliquer les dernières modifications » est une instruction trop vague : sans horodatage de watermark, CDC, batch répétable ou journal des changements, la copie des écritures de dernière minute n’est pas reproductible.
4. Le texte prévoit un retour, mais ne dit pas quoi faire des écritures acceptées dans le nouveau logiciel avant le rollback. Une restauration de la base ancienne peut écraser des commandes, paiements ou dossiers créés entre-temps.
5. Les droits sont testés par rôle, mais le guide ne traite ni privilèges temporaires de migration, ni comptes de service, ni rotation de secrets, ni recertification après retrait de l’ancien outil.
6. Les premières semaines sont bien évoquées, mais sans équipe hypercare, niveau de criticité, délai de réponse, tableau de bord ni critère de sortie.
7. L’ANSSI et la CNIL apportent une bonne base française ; le guide n’a pas encore de corpus international rejouable sur migration progressive, cloud, canary, décommissionnement et restauration.

## 7. Scénario commun et calculs à construire

### Hypothèses déclarées

Exemple entièrement fictif : PME de services avec 40 utilisateurs, 2 400 clients, 8 000 dossiers historiques, 300 dossiers ouverts, 220 factures mensuelles, 5 intégrations (comptabilité, banque, email, planning, portail), fenêtre de 6 heures, coût interne chargé de 55 €/h. Ces nombres ne sont ni un client ni une moyenne de marché.

```text
Valeur des écritures récentes à préserver :
300 dossiers ouverts + 220 factures mensuelles + 5 flux externes.

Coût d’une journée de 40 personnes indisponibles :
40 × 7 h × 55 € = 15 400 € de capacité interne,
hors chiffre d’affaires, pénalités ou clients perdus.
```

Le même jeu doit traverser quatre stratégies à périmètre égal :

- stabiliser l’ancien système pendant 4 semaines et corriger les causes ;
- migrer progressivement le domaine « dossiers ouverts » puis la facturation ;
- basculer tout le périmètre en une fois ;
- replatformer un module ciblé autour de l’ancien, avec coexistence explicite.

Pour chaque stratégie, tester : 2 400 clients, 300 dossiers ouverts, 220 factures, 5 intégrations, pièces jointes, droits de 10 rôles, 50 modifications dans la dernière heure, 20 doublons, 10 erreurs de mapping, une panne d’API, un accès retiré, une restauration et un rollback.

### Watermark, batch/CDC, idempotence et réconciliation

Le guide doit fournir un exemple, sans imposer une technologie :

```text
1. Arrêter ou marquer les écritures à 14:00:00 UTC.
2. Exporter les lignes dont updated_at > watermark précédent.
3. Donner à chaque événement une clé stable (source, type, identifiant, version).
4. Transformer et charger en mode rejouable.
5. Accuser chaque ligne : accepté, rejeté, à revoir.
6. Rejouer le même lot : le résultat ne doit pas créer un doublon.
7. Rapprocher comptes, montants, statuts, liens et pièces par domaine.
8. Publier la liste des écarts et la décision de correction.
```

Un CDC peut réduire la fenêtre, mais il ajoute un journal, une rétention, un ordre, des événements supprimés et une gestion de conflit. Un batch peut être plus simple à auditer, mais il doit être ré-exécutable, mesuré et idempotent. Le bon conseil dirigeant est de choisir le mécanisme que l’équipe saura surveiller et restaurer, pas le plus moderne sur le papier.

### RPO, RTO, MTD et SLA

| Opération                           | Hypothèse fictive | RPO cible |    RTO cible | MTD/SLA à décider              | Test obligatoire                           |
| ----------------------------------- | ----------------- | --------: | -----------: | ------------------------------ | ------------------------------------------ |
| Création d’une intervention urgente | 40/jour           |    15 min |       30 min | Appel ou formulaire de secours | Reprise après panne avec écriture récente. |
| Préparation d’une commande          | 80/jour           |       1 h |          2 h | Pas d’expédition erronée       | Vérification stock/client et mode dégradé. |
| Émission d’une facture              | 220/mois          |       4 h | 1 jour ouvré | Pas de double facture          | Rapprochement montant/statut et replay.    |
| Consultation historique             | 8 000 dossiers    |      24 h |       1 jour | Archive consultable            | Restauration et droits lecture seule.      |

Ces valeurs sont des hypothèses de discussion. RPO est la perte de données acceptable ; RTO, le délai de rétablissement ; MTD, la durée maximale tolérable ; SLA, l’engagement contractualisé si un fournisseur est impliqué. Le guide doit interdire de transformer une hypothèse en garantie.

### TCO à 12/36/60 mois

Hypothèses illustratives : 650 €/jour interne, 40 utilisateurs, 2 environnements, 5 intégrations, 8 000 dossiers à profiler, 300 dossiers ouverts à vérifier. Les montants ne sont pas des devis.

| Stratégie                  | Cadrage/mapping | Nettoyage/validation | Intégration/tests | Formation/support initial | Licences/infra/an | TCO 12 mois | TCO 36 mois | TCO 60 mois |
| -------------------------- | --------------: | -------------------: | ----------------: | ------------------------: | ----------------: | ----------: | ----------: | ----------: |
| Stabiliser et reporter     |             8 j |                  6 j |               3 j |                       4 j |           4 000 € |    17 650 € |    25 650 € |    33 650 € |
| Progressive                |            20 j |                 15 j |              25 j |                      12 j |          12 000 € |    58 800 € |    82 800 € |   106 800 € |
| Big bang                   |            25 j |                 20 j |              35 j |                      15 j |          14 000 € |    75 750 € |   103 750 € |   131 750 € |
| Replatform ciblé/strangler |            35 j |                 18 j |              45 j |                      16 j |          18 000 € |    92 100 € |   128 100 € |   164 100 € |

Formule illustrative :

```text
TCO 12 = cadrage + inventaire + mapping + nettoyage + intégration
          + tests + formation + double run + licences/infra
          + archive + support + migration + sécurité.

TCO 36 = TCO 12 + 2 années de licences/infra/support
          + mises à niveau + corrections de données + exercices de reprise.

TCO 60 = TCO 12 + 4 années de récurrence + renouvellements
          + coût d’export, migration de sortie et fermeture de l’ancien.

Gain net = coût d’interruption évité + reprises supprimées + capacité réellement
           réaffectée − TCO incrémental − coût de transition.
```

Le tableau exclut volontairement TVA, pénalités, perte commerciale, licences historiques, coûts de déplacement, conseil juridique, sécurité spécialisée et coût d’une erreur de facture. Ces exclusions doivent être visibles. Une migration progressive n’est pas « moins chère » par nature : elle peut coûter plus de double run, mais réduire le risque d’une journée d’arrêt. Le big bang peut réduire la coexistence, mais exige une fenêtre, une répétition et un rollback beaucoup plus robustes.

## 8. Comparaison professionnelle à périmètre égal

| Option                       | Elle gagne lorsque                                                                           | Elle perd lorsque                                                                                     | Preuve à exiger                                                                                      |
| ---------------------------- | -------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| Stabiliser et reporter       | Le nouveau périmètre est instable, le coût d’erreur est élevé ou l’inventaire est incomplet. | Le legacy est en fin de support ou produit déjà des erreurs critiques.                                | Plan de stabilisation, date de re-décision, mesure des incidents et risque de fin de vie.            |
| Progressive                  | Les domaines peuvent être séparés et une source de vérité par domaine est possible.          | Les écritures et statuts sont profondément couplés ou les équipes ne peuvent pas gérer deux parcours. | Graphe de dépendances, propriétaire d’écriture, CDC/batch, réconciliation et rollback par domaine.   |
| Big bang                     | Le périmètre est cohérent, la fenêtre est suffisante et la répétition complète est stable.   | Il existe beaucoup d’intégrations, données sales, opérations 24/7 ou transformation irréversible.     | Runbook minuté, RPO/RTO, sauvegarde restaurée, smoke/UAT, décision et retour testés.                 |
| Replatform ciblé / strangler | Un domaine stable peut être extrait derrière une interface et l’ancien reste exploitable.    | Base partagée, transactions transverses, doublons de vérité ou équipe sans observabilité.             | Cartographie domaine, routage, source de vérité, événement idempotent, replay et décommissionnement. |

Position professionnelle : ne pas choisir le pattern avant l’inventaire. Commencer par stabiliser ce qui est critique ; choisir une progressive si un domaine est isolable ; réserver le big bang à un périmètre réellement cohérent ; employer strangler/blue-green/canary uniquement si l’équipe peut traiter les données concurrentes et revenir sans écraser les écritures. Une recommandation honnête peut conclure « ne migrez pas maintenant ».

### Ce que nous déconseillons même si nous pourrions le vendre

- réécrire tous les écrans avant de connaître les trois opérations indispensables ;
- appeler « parallèle » une double saisie sans source de vérité ;
- choisir canary ou blue-green alors que les deux versions écrivent la même base sans contrat ;
- fermer l’ancien outil juste après un import réussi ;
- réutiliser des données de production non protégées dans les tests ;
- promettre un ROI avec le seul temps de copie ;
- laisser le prestataire conserver des exports, comptes ou copies après la fin sans preuve de suppression.

## 9. Objections et cas limites

| Objection                                                   | Réponse actuelle                                | Angle manquant                                                                              | Correction                                                                  |
| ----------------------------------------------------------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| « Nous ne pouvons pas arrêter une seule heure. »            | Fenêtre, mode temporaire et retour.             | Débit d’écriture, CDC, file d’attente et SLA.                                               | Comparer migration progressive, batch/CDC et coût du zéro-downtime.         |
| « Nous avons une base ancienne mais aucune documentation. » | Inventaire évoqué.                              | Découverte, dépendances cachées, observabilité et gel des changements.                      | Prévoir un sprint d’inventaire et un seuil de connaissance avant migration. |
| « Les données sont sales. »                                 | Dix dossiers connus et décisions actif/archive. | Profilage, dédoublonnage, unités, encodage, exceptions et validation métier.                | Ajouter rapport de qualité et règle « impossible à migrer ».                |
| « Nous devons garder les deux logiciels trois mois. »       | Parallèle avec date de fin.                     | Coût, write-owner, synchronisation, conflits et fin de double run.                          | Ajouter budget et conditions de sortie.                                     |
| « Notre éditeur promet une migration automatique. »         | Répéter et contrôler.                           | Contrat de mapping, preuve de restauration, export et responsabilité de l’écart.            | Demander jeu d’essai, rapport de rejets et clause de réversibilité.         |
| « Un rollback détruirait les nouvelles commandes. »         | Récupérer les saisies temporaires.              | Replay par clé, journal des writes, point de décision et opérations irréversibles.          | Exiger rollback testé et plan roll-forward si retour impossible.            |
| « Nous voulons un canary. »                                 | Non traité.                                     | Groupe pilote, routage, données partagées, critères et décision.                            | Ajouter matrice canary/blue-green/rolling et limite data.                   |
| « Nous avons des données personnelles. »                    | CNIL et copies protégées.                       | Droits, minimisation, sous-traitants, DPA, accès temporaires, suppression et preuve.        | Ajouter registre migration et responsabilités.                              |
| « Les équipes sont déjà saturées. »                         | Quatre rôles nommés.                            | Disponibilité réelle, formation, support et hypercare.                                      | Chiffrer jours, relais, astreinte et arrêt des changements non critiques.   |
| « L’ancien logiciel est en fin de support. »                | Fermeture après contrôles.                      | Risque de rester, mitigation, isolement, contrat fournisseur et urgence.                    | Ajouter décision risque/temps et avis sécurité.                             |
| « Une sauvegarde existe dans le cloud. »                    | Restaurer une copie.                            | Compte de sauvegarde, immutabilité, clé, localisation, dépendances et coût de restauration. | Ajouter exercice de reprise point-in-time.                                  |
| « Nous avons réussi la répétition, donc c’est terminé. »    | Répétitions jusqu’à procédure reproductible.    | Changement de version, données fraîches, performance et incidents réels.                    | Rejouer après chaque modification importante et en hypercare.               |

## 10. Plan de réécriture

| Ordre | Section                 | Question du dirigeant                                       | Preuve à créer                                                                            | Décision                 |
| ----: | ----------------------- | ----------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ------------------------ |
|     1 | Réponse exécutive       | Est-ce une migration, une stabilisation ou une réécriture ? | Arbre de choix et limites.                                                                | Périmètre.               |
|     2 | Baseline et inventaire  | Que dépend encore de l’ancien logiciel ?                    | Catalogue applications/données/interfaces/comptes/contrats/infra.                         | Risque connu.            |
|     3 | Données                 | Que reprend-on et avec quelle qualité ?                     | Profilage, mapping, nettoyage, exceptions, validation.                                    | Jeu de données approuvé. |
|     4 | Stratégies              | Quand stabiliser, progresser, basculer ou strangler ?       | Quatre options même périmètre, critères et coûts.                                         | Stratégie.               |
|     5 | Coexistence             | Qui écrit où ?                                              | Contrat write-owner, batch/CDC, idempotence, réconciliation, conflit.                     | Source de vérité.        |
|     6 | Continuité              | Combien de perte et d’arrêt accepte-t-on ?                  | RPO/RTO/MTD/SLA par opération, mode dégradé et restauration.                              | Fenêtre.                 |
|     7 | Tests                   | Quand l’essai est-il réussi ?                               | Matrice data/fonction/intégration/performance/sécurité/UAT/DR.                            | Go/no-go.                |
|     8 | Cutover/rollback        | Comment revenir sans perdre les nouvelles écritures ?       | Runbook minuté, checkpoints, replay, rollback ou roll-forward.                            | Décision unique.         |
|     9 | Communication/hypercare | Qui aide l’équipe après ?                                   | Messages, formation, canal, criticité, SLA de support, tableau de bord, sortie hypercare. | Adoption et stabilité.   |
|    10 | TCO et exit             | Combien coûte la migration et la sortie ?                   | TCO 12/36/60, archive, licences, double run, export, suppression, réversibilité.          | Budget et contrat.       |
|    11 | CTA                     | Que recevrai-je ?                                           | Scorecard, inventaire initial et runbook de répétition.                                   | Conversion qualifiée.    |

### Ouverture proposée

« Lundi matin, vos équipes doivent continuer à préparer une commande, planifier une intervention et émettre une facture. Le nouveau logiciel est installé, mais l’ancien contient encore les clients, les dossiers ouverts, les règles d’accès et les connexions à la comptabilité. Un import réussi ne prouve pas que vous pourrez travailler : il ne dit pas qui écrit pendant la transition, ce qui arrive à une modification de dernière minute, ni comment revenir sans écraser une facture créée entre-temps. Dans ce guide, nous allons d’abord mesurer les opérations et les dépendances, puis comparer quatre stratégies : stabiliser et reporter, migrer progressivement, basculer en une fois ou extraire un périmètre ciblé. Nous établirons un mapping, nettoierons les données, choisirons un batch ou une synchronisation contrôlée, répéterons le cutover et écrirons un vrai go/no-go. Vous verrez aussi quoi demander au prestataire, comment protéger les copies de test, comment organiser la semaine d’hypercare et quel coût total comparer à 12, 36 et 60 mois. Le meilleur choix peut être de ne pas migrer maintenant. »

À conserver : la phrase anti-promesse zéro incident, les trois opérations de lundi, les rôles, la sauvegarde restaurée, la feuille horaire, la décision de report et la fermeture progressive de l’ancien système.

À reformuler : « trois façons » en « stratégies et mécanismes », « appliquer les dernières modifications » en procédure watermark/CDC/batch, « dix dossiers » en échantillon complété par totaux et sommes, « revenir » en rollback ou roll-forward testable, et « première semaine » en hypercare mesuré.

## 11. Contre-audit après correction

Aucun correctif n’a été appliqué à la source. Le contre-audit doit vérifier les preuves et non la seule présence des mots-clés.

| ID    | Priorité | Correction obligatoire                                                                                                         | Test indépendant                                                                                  |
| ----- | -------- | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------- |
| P1-01 | P1       | Ajouter baseline chiffrée et inventaire des opérations, volumes, dépendances, contrats, comptes et interfaces.                 | Un tiers peut dessiner le graphe et repérer les composants sans propriétaire.                     |
| P1-02 | P1       | Ajouter profilage, mapping champ à champ, nettoyage, doublons, valeurs invalides, exceptions et validation métier.             | Le même jeu de données produit un rapport de rejets et une décision traçable.                     |
| P1-03 | P1       | Définir source de vérité et propriétaire d’écriture pour chaque domaine.                                                       | Deux modifications concurrentes sont résolues sans choix silencieux.                              |
| P1-04 | P1       | Décrire batch/CDC, watermark, idempotency key, replay, suppression et réconciliation.                                          | Rejouer le lot ne crée pas de doublon et les totaux financiers concordent.                        |
| P1-05 | P1       | Comparer stabiliser, progressive, big bang et replatform/strangler ciblé ; situer blue-green/canary.                           | La recommandation change si les domaines sont couplés, si le RTO est nul ou si le legacy est EOL. |
| P1-06 | P1       | Définir RPO/RTO/MTD/SLA par opération, mode dégradé et restauration point-in-time.                                             | Un exercice prouve durée, perte et ordre de reprise avec dépendances.                             |
| P1-07 | P1       | Ajouter tests unitaires de migration, intégration, data quality, UAT, performance, sécurité, droits et DR.                     | Chaque test possède owner, résultat, seuil et preuve de correction.                               |
| P1-08 | P1       | Détailler cutover minuté, gel, checkpoints, observabilité, go/no-go, rollback, replay et roll-forward.                         | Une écriture nouvelle après l’arrêt est récupérée dans les deux décisions possibles.              |
| P1-09 | P1       | Ajouter sécurité/RGPD : minimisation, accès temporaires, DPA, droits, journalisation, copies de test, purge et sous-traitants. | Les copies, comptes et exports sont inventoriés puis supprimés avec preuve.                       |
| P1-10 | P1       | Ajouter communication, formation, canal de support, hypercare, criticité, SLA de réponse et critères de sortie.                | Les utilisateurs savent où signaler un incident et l’équipe sait quand l’hypercare finit.         |
| P1-11 | P1       | Ajouter TCO 12/36/60 et coût de l’arrêt, double run, licences, archive, support, migration et exit.                            | Un tiers recalcule le tableau et voit toutes les exclusions.                                      |
| P1-12 | P1       | Créer dossier de recherche daté FR/US/UK/AU/DACH et versionner les sources.                                                    | Un second auditeur retrouve les liens, dates, limites et décisions.                               |
| P2-01 | P2       | Ajouter glossaire RPO/RTO/MTD/SLA, CDC, batch, idempotence, reconciliation, canary, blue-green, strangler, hypercare.          | Un dirigeant non technique comprend chaque terme dans une phrase.                                 |
| P2-02 | P2       | Ajouter runbook, matrice mapping, registre écarts et scorecard go/no-go copiables.                                             | Un responsable peut les remplir sans données nominatives réelles.                                 |
| P2-03 | P2       | Donner au CTA un livrable vérifiable : inventaire initial, questions de dépendance et protocole de répétition.                 | Le livrable est réellement produit et ne devient pas un devis automatique.                        |
| P2-04 | P2       | Dater les sources et distinguer recommandation, obligation et hypothèse.                                                       | Aucune formulation ne transforme ANSSI/CNIL/NIST en certification du projet.                      |
| P2-05 | P2       | Élargir le champ lexical et le maillage vers ETL, ERP/CRM, archive, réconciliation, TMA, SLA, sortie.                          | Lecture sémantique naturelle, sans bourrage.                                                      |
| P2-06 | P2       | Ajouter QA responsive 320–1600, états chargement/erreur et console.                                                            | Tables, timeline et CTA restent utilisables après modification.                                   |

### Score projeté, non acquis

| Axe         | Avant | Après correction visée | Preuve attendue                                               |
| ----------- | ----: | ---------------------: | ------------------------------------------------------------- |
| Intention   |     9 |                     10 | Arbre de décision et réponse « reporter ».                    |
| Décision    |     8 |                     10 | Quatre stratégies, TCO et go/no-go.                           |
| Pédagogie   |     9 |                     10 | Glossaire, schémas de données et scénario réconciliable.      |
| Profondeur  |     7 |                     10 | Mapping, CDC/batch, dépendances, sécurité, hypercare et exit. |
| Preuve      |     8 |                     10 | Sources datées et tests documentés.                           |
| Comparaison |     6 |                     10 | Même périmètre, mêmes tests, mêmes horizons.                  |
| Originalité |     8 |                      9 | Runbook et registre de réconciliation copiable.               |
| Style       |     9 |                      9 | Humanité conservée, jargon expliqué.                          |
| Conversion  |     8 |                      9 | CTA à livrable concret.                                       |
| SEO/produit |     8 |                     10 | Champ lexical migration métier complet.                       |

Total projeté : **97/100**, objectif conditionnel et non acquis.

## 12. Preuves techniques et visuelles

```text
Manifeste : aucun guide source, registre, composant, package ou configuration modifié ; seul ce rapport est créé.
Calculs contrôlés : exemple 40×7×55=15 400 € de capacité théorique pour une journée ; TCO illustratif recalculé avec taux 650 €/jour, 40 utilisateurs, 2 400 clients, 8 000 dossiers, 300 ouverts et 5 intégrations.
Rendu local : 3 919 mots visibles ; H1=1, H2=12, H3=2, JSON-LD=2, 110 liens, canonical `https://hagnere-code.ai/guides/migrer-logiciel-metier-sans-interruption`, CTA présent, robots local `noindex, nofollow`.
Tables : 3 tables visibles, largeur client/scroll 768/768 à 1200 px ; aucun débordement observé à cette largeur.
Liens vérifiés par curl : les URL ANSSI, CNIL et le guide de migration renvoient HTTP 200 ; l’accès n’est pas une preuve que le contenu restera inchangé, d’où la nécessité de dater/versionner les sources.
Responsive : largeur 1200 px contrôlée ; les cibles 320–1600, les états chargement/erreur et la console doivent être revalidés après réécriture.
Image sociale : composant Open Graph présent ; dimension déclarée et composition à inspecter visuellement lors de la prochaine passe.
Statut maximal prouvé : lecture source, benchmark officiel, calculs déclarés, métadonnées et rendu local de base ; pas de migration réelle, mapping, replay CDC, restauration métier, test de rollback, hypercare ou TCO réel.
```

Conclusion opérationnelle : ce guide est déjà humain, prudent et utile pour arrêter une migration précipitée. Il n’est pas encore une méthode de migration de logiciel métier complète : il décrit le moment de la bascule mieux qu’il ne décrit les données, les dépendances et les écritures qui rendent ce moment sûr. Pour devenir une référence, il doit transformer ses bonnes intentions en inventaire, mapping, mécanisme de coexistence, réconciliation, rollback testable, support hypercare, TCO et stratégie de sortie. Tant que ces P1 ne sont pas démontrées, il doit rester NO-GO éditorial malgré sa bonne plume.

## 13. Clôture locale après correction — 24 juillet 2026

La section précédente constitue le diagnostic historique du snapshot
`b38dd44…` à 80/100. Elle n’est pas réécrite rétroactivement. Tous ses P1 ont
ensuite été traités dans une nouvelle page, un dossier de recherche rouvert, un
kit de 27 fichiers et des contrôles spécifiques.

État du snapshot corrigé :

- page :
  `53828440d73cfe6bd480f427325c86d896978cdca02e00dfeb821803c398ef56` ;
- P3 indépendante : **PASS 99/100, P0/P1/P2 = 0** ;
- P4 humaine simulée : **GO éditorial local 97/100, P0/P1/P2 = 0** ;
- 6 199 mots visibles, 31 minutes annoncées ;
- cas Nova, neuf TCO, seuils de renversement et chronologie recalculés ;
- 27 fichiers utiles, ZIP identique, trois fichiers de démarrage ;
- métadonnée et image sociale sans promesse de continuité absolue ;
- CTA autonome et placé après la fermeture de l’ancien logiciel.

Les preuves sont détaillées dans les rapports
[`P3 factuel`](../reviews/migrer-logiciel-metier-sans-interruption-p3-facts.md)
et
[`P4 plume`](../reviews/migrer-logiciel-metier-sans-interruption-p4-human.md).

Le **NO-GO historique est fermé pour le contenu local**. Il reste interdit de
déclarer le guide publié, indexé ou validé en P4 de production tant que le BAT
navigateur réel, le test dirigeant externe, le manifeste final et les
vérifications publiques ne sont pas produits.
