# Audit approfondi — `sla-maintenance-applicative`

Date : 24 juillet 2026

Auditeur concurrentiel : Codex, lot benchmark international

Snapshot du guide : `src/app/guides/sla-maintenance-applicative/page.tsx`, SHA-256 `34f25e110c6df4d83f86724c69f4b8bcf72b2df895aedfc22e945b9b5f120b37`

Périmètre : audit éditorial et décisionnel uniquement. Aucune modification de la page publique n’a été réalisée dans ce lot.

## 1. Verdict exécutif

```text
Lecteur exact : dirigeant qui doit négocier ou vérifier les engagements de maintenance d’une application métier.
Question réelle : que promet réellement un SLA, quel niveau de service acheter et comment éviter de payer un délai rapide qui ne rétablit ni le travail ni les données ?
Décision attendue : choisir des engagements mesurables, proportionnés au dommage métier et techniquement démontrables.
Réponse actuelle en une phrase : une réponse sous quatre heures n’est pas un rétablissement ; il faut distinguer les étapes, les horaires, les parcours métier, le RTO, le RPO et les dépendances.
Défaut qui coûte le plus de valeur : le guide décrit très bien l’anatomie d’un SLA, mais ne calcule ni minutes d’indisponibilité, ni coût d’incident, ni prix d’équilibre d’une couverture renforcée.
Niveau actuel : B
Priorité : haute
Statut : audité / à réécrire
```

Le guide est l’un des plus solides du corpus audité. Il commence par le piège exact que rencontre un dirigeant : confondre réponse et reprise du travail. La chronologie fictive, les sept moments d’une panne, le chronomètre contractuel et la traduction métier de RTO/RPO sont pédagogiques. Le refus d’un seuil universel est également juste.

Il lui manque pourtant ce qui transforme une explication en décision d’achat :

- traduire 99 %, 99,9 % et 99,99 % en minutes ;
- chiffrer un incident sans additionner deux fois chiffre d’affaires et marge ;
- convertir un RPO en opérations à ressaisir ;
- comparer, à périmètre égal, heures ouvrées, plage étendue et 24/7 ;
- montrer qu’un crédit de service ne rembourse généralement pas le dommage ;
- ajouter communication, fin de support, correctifs, exercices et gouvernance.

La position à écrire sans détour :

> N’achetez pas un « 24/7 » ou un « 99,9 % » pour toute l’application. Achetez une capacité prouvée sur les parcours qui arrêtent réellement l’entreprise, pendant les heures où ils comptent. Un SLA non testé est une intention contractuelle ; un crédit de service n’est pas un plan de continuité.

### Score avant correction

| Axe | Note /10 | Preuve localisable | Manque décisif |
| --- | ---: | --- | --- |
| Intention | 9 | L’ouverture distingue immédiatement réponse et rétablissement | Le coût de la décision n’est pas annoncé |
| Décision | 8 | Trois niveaux de service et test sur trois incidents | Aucun coût d’équilibre entre niveaux |
| Pédagogie | 9 | Chronologie, sept moments, parcours métier, RTO/RPO | Aucun calcul exécuté à partir de la chronologie |
| Profondeur | 8 | Horaires, dépendances, disponibilité, restauration et recours évoqués | Communication, patching, gouvernance, erreur budgétaire et obligations sectorielles restent courts |
| Preuve | 7 | Google SRE, NIST et Google Maps sont des sources primaires pertinentes | Pas de source française actuelle, de test réel, de cas public ou de preuve propriétaire |
| Comparaison | 6 | Trois situations de couverture sont comparées qualitativement | Aucun horizon commun, devis, coût interne ou exposition résiduelle |
| Originalité | 8 | Sept horloges et preuve métier plutôt que statut HTTP | Pas de simulateur ni d’analyse chiffrée distinctive |
| Style | 9 | Ton humain, ferme, accessible et professionnel | Quelques phrases de prudence remplacent encore le verdict |
| Conversion | 8 | CTA fondé sur un incident concret et techniquement crédible | Pas de diagnostic chiffré immédiatement utile |
| SEO/produit | 8 | Intention, FAQ, maillage, entités SRE/NIST et données structurées | Couverture France/UK/Allemagne, calculs et actif propriétaire à renforcer |

Total : **80/100**

## 2. Ce que le guide dit réellement

- **Réponse dans les 150 premiers mots :** excellente. Une réponse rapide n’implique pas le rétablissement.
- **Progression :** sept moments, parcours métier, règles du chronomètre, RTO/RPO, disponibilité, dépendances, niveaux de service, test sur trois incidents.
- **Exemple :** panne de facturation de 09:10 à 16:00 avec accusé, prise en charge, contournement, rétablissement et contrôle des données.
- **Calculs présents :** aucun, alors que la chronologie et le taux de disponibilité s’y prêtent directement.
- **Comparaison présente :** heures ouvrées, plage étendue, continuité renforcée ; pas de coût total ni d’impact résiduel.
- **Sources :** Google SRE, glossaire NIST et SLA Google Maps. Très bonnes, mais exclusivement nord-américaines et insuffisantes sur sauvegarde, sécurité, support et contrat français.
- **Bon fit :** application métier en production avec support, dépendances et besoin de continuité.
- **Mauvais fit à mieux signaler :** incident cyber en cours, contrat d’infrastructure pure, logiciel sans reprise initiale, secteur soumis à des obligations spécifiques non analysées.
- **CTA :** bon, car il part d’une panne réelle et ne vend pas un pourcentage.
- **Élément faussement complet :** le tableau des trois niveaux donne le sentiment d’un choix, mais le lecteur ne sait pas combien paie chaque niveau ni quel dommage il évite.

## 3. Benchmark France et international

Requêtes, pays, langues et date :

- France, français : « SLA maintenance applicative temps prise en charge rétablissement », « TMA RTO RPO disponibilité contrat » ;
- États-Unis, anglais : « SLO SLA error budget RTO RPO service credit » ;
- Royaume-Uni, anglais : « software maintenance support incident communication code of practice » ;
- Allemagne, allemand et anglais : « BSI backup RTO RPO business continuity SLA » ;
- Union européenne : continuité et résilience des seules entités dans le champ des textes sectoriels ;
- recherche effectuée le 24 juillet 2026.

### Saturation

La concurrence est saturée sur les définitions de SLA, KPI, priorité P1/P2/P3, temps de réponse et disponibilité. Les pages les plus faibles recopient un tableau de délais présenté comme « standard ». Les pages de fournisseurs cloud détaillent très bien les exclusions et crédits, mais leur architecture contractuelle n’est pas un niveau à copier dans une TMA de PME.

Le gain d’information restant réside dans :

- plusieurs horloges calculées sur le même incident ;
- la disponibilité traduite en minutes et contextualisée par la plage ;
- une analyse d’impact métier sans double comptage ;
- RPO traduit en opérations, temps de ressaisie et contrôle ;
- une comparaison économique des couvertures ;
- communication, fin de support, correctifs et exercices ;
- l’explication des textes sectoriels sans les généraliser.

| Ressource et URL directe | Pays | Réponse utile | Preuve, outil ou exemple | Limite | Apport à vérifier ou adapter |
| --- | --- | --- | --- | --- | --- |
| [AXOPEN — Tierce maintenance applicative, 2026](https://www.axopen.com/blog/2026/03/tierce-maintenance-applicative-comment-ca-marche/) | France | Organisation actuelle d’une TMA et niveaux de service | Bon benchmark commercial français | Contenu d’agence, pas norme ni preuve de seuil | Cartographier les attentes de la SERP sans copier les délais |
| [AdevWeb — TMA Drupal 2026](https://www.adevweb.com/ressources/tma-drupal) | France | Forfait/régie, audit, RTO/RPO et exploitation | Cas spécialisé et récent | Biais Drupal et commercial | Ajouter l’écart entre cadre général et contexte technologique |
| [ANSSI — Sauvegarde des systèmes d’information](https://messervices.cyber.gouv.fr/guides/sauvegarde-des-systemes-dinformation) | France | PDMA/RPO, DMIA/RTO, stratégie et restauration | Guide officiel ; version 1.1 du 27 novembre 2025 disponible depuis la page | Ce n’est pas un modèle de SLA ni un conseil juridique | Renforcer restauration testée, isolation et responsabilités |
| [Légifrance — Code civil, article 1103](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000032040777/) | France | Force obligatoire du contrat | Source juridique primaire en vigueur | Ne dit pas comment rédiger un SLA | Justifie la précision, avec revue par un juriste |
| [Légifrance — Code civil, article 1217](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000036829854/) | France | Conséquences possibles d’une inexécution | Source juridique primaire en vigueur | Application au cas dépend du contrat et des faits | Ne pas réduire tous les recours à un crédit de service |
| [Google SRE — Implementing SLOs](https://sre.google/workbook/implementing-slos/) | États-Unis / international | SLI centrés utilisateur, SLO et error budget | Méthode, exemples et gouvernance | SRE n’est pas un contrat de TMA prêt à signer | Ajouter une politique de décision quand le budget est consommé |
| [NIST SP 800-34 Rev. 1](https://www.nist.gov/publications/contingency-planning-guide-federal-information-systems) | États-Unis | Définit RTO, RPO et temps maximal tolérable | Source primaire ; page mise à jour en 2025 | Publication de 2010 pour systèmes fédéraux | Conserver les définitions, compléter par ANSSI actuelle |
| [Google Maps Platform SLA](https://cloud.google.com/maps-platform/terms/sla) | États-Unis / international | Service couvert, calcul, exclusions, demande et crédits | Exemple contractuel public | Conditions cloud propres à Google | Analyser l’anatomie, jamais copier le taux |
| [AWS — What is an SLA?](https://aws.amazon.com/what-is/service-level-agreement/) | États-Unis / international | Distingue service credits, pénalités et extensions | Source fournisseur claire | Contenu pédagogique commercial | Montrer que les remèdes contractuels ne valent pas indemnisation automatique |
| [UK Software Security Code of Practice](https://www.gov.uk/government/publications/software-security-code-of-practice/software-security-code-of-practice) | Royaume-Uni | Maintenance, correctifs, support, fin de support et communication d’incident | Code volontaire officiel mis à jour le 15 janvier 2026 | Volontaire et centré sécurité logicielle | Ajouter support publié, notification et communication |
| [NCSC — Assurance principles and claims](https://www.ncsc.gov.uk/guidance/software-security-code-of-practice-assurance-principles-claims) | Royaume-Uni | Éléments de preuve : plan d’incident, dates de fin de support, update policy | Référentiel public vérifiable | Ne couvre pas toute la maintenance fonctionnelle | Transformer les promesses en preuves demandables |
| [BSI — IT-Grundschutz Compendium, Backup Concept](https://www.bsi.bund.de/SharedDocs/Downloads/EN/BSI/Grundschutz/International/bsi_it_gs_comp_2022.pdf?__blob=publicationFile&v=2) | Allemagne | Sauvegardes, restauration, RPO et coordination avec les responsables de processus | Source publique allemande | Version anglaise distincte de l’édition allemande courante | Apport international : tester la restauration et l’aligner au processus |
| [ENISA — Incident Management Plan](https://tools.enisa.europa.eu/topics/risk-management/current-risk/bcm-resilience/bc-plan/incident-management-plan) | Union européenne | Rôles, critères d’activation, communication, journal et retour à la normale | Checklist publique | Ressource générale, non spécifique à la TMA | Ajouter gouvernance et communication, pas seulement le chronomètre |
| [DORA — Règlement (UE) 2022/2554, articles 11 et 12](https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32022R2554) | Union européenne | Continuité, analyse d’impact, tests, communication, sauvegarde et restauration | Texte primaire pour entités financières dans son champ | Ne s’applique pas à toute PME ni à tout prestataire | Créer un encadré de périmètre, jamais une obligation générique |

## 4. Matrice de gain d’information

| Question décisive | Meilleure réponse française | Apport international | Couverture actuelle | Manque | Réponse supérieure à produire |
| --- | --- | --- | --- | --- | --- |
| Réponse ou rétablissement ? | Définitions variables selon agences | NCSC et SRE demandent actions et preuves | Excellente | Chronologie non calculée | Calculer chaque horloge et proposer les formulations contractuelles |
| Que signifie 99,9 % ? | Tableaux génériques | SLA cloud détaillent fenêtre, exclusions et échecs | Bonne critique | Aucune conversion en minutes | Tableau 30 jours + cas « panne au mauvais moment » |
| Quel RTO/RPO choisir ? | Seuils souvent copiés | NIST, ANSSI et BSI partent de l’impact et des processus | Bonne explication | Pas d’impact chiffré ni de ressaisie | Coût incident + opérations perdues + modes dégradés |
| Quel niveau de couverture acheter ? | Packs P1/P2/P3 | SRE : objectifs approuvés et itérés | Trois niveaux qualitatifs | Pas de coût d’équilibre | Comparaison 12 mois avec premium et exposition évitée |
| Un crédit compense-t-il la panne ? | Souvent traité comme sanction suffisante | AWS et SLA publics montrent des crédits contractuels limités | FAQ prudente | Aucun ordre de grandeur | Comparer crédit illustratif et dommage sans conseil juridique |
| Comment prouver la capacité ? | Promesse de délai | ANSSI/BSI : tests de restauration ; NCSC : claims et preuves | Tests évoqués | Pas de protocole, fréquence ou compte rendu | Exercice trimestriel/annuel adapté, preuve et actions |
| Que faut-il communiquer ? | Faiblement traité | UK 2026 et ENISA détaillent information et rôles | Presque absent | Statut, cadence, interlocuteurs, post-mortem | Matrice de communication par gravité |
| Quelles règles sectorielles ? | DORA/NIS2 parfois généralisés abusivement | EUR-Lex donne un périmètre précis | Limite juridique générale | Aucun aiguillage | Encadré « à vérifier selon secteur », sans fausse conformité |

## 5. Faits et fraîcheur

| Affirmation du guide | Verdict | Source primaire actuelle | Périmètre et date | Correction |
| --- | --- | --- | --- | --- |
| Une réponse ne signifie pas un rétablissement | Confirmé par la nécessité de définir chaque engagement | [Google Maps SLA](https://cloud.google.com/maps-platform/terms/sla), [UK Code 2026](https://www.gov.uk/government/publications/software-security-code-of-practice/software-security-code-of-practice) | Contrats et maintenance avec périmètres distincts | Conserver et calculer chaque horloge de l’exemple |
| Il faut mesurer un service rendu à l’utilisateur | Confirmé | [Google SRE](https://sre.google/workbook/implementing-slos/) | Fiabilité de services numériques | Conserver et relier à trois parcours métier |
| Le RTO porte sur le temps de reprise, le RPO sur le point de données récupérable | Confirmé | [NIST](https://www.nist.gov/publications/contingency-planning-guide-federal-information-systems) et [ANSSI](https://messervices.cyber.gouv.fr/guides/sauvegarde-des-systemes-dinformation) | NIST + guide ANSSI v1.1 de 2025 | Ajouter PDMA/DMIA français sans multiplier les sigles |
| Une sauvegarde suffit à garantir le RPO | Faux si ajouté ; le guide l’évite déjà | [ANSSI](https://messervices.cyber.gouv.fr/guides/sauvegarde-des-systemes-dinformation) et [BSI](https://www.bsi.bund.de/SharedDocs/Downloads/EN/BSI/Grundschutz/International/bsi_it_gs_comp_2022.pdf?__blob=publicationFile&v=2) | Sauvegarde et restauration | Insister sur restauration, cohérence et temps de ressaisie |
| Des objectifs courts coûtent généralement plus cher | Plausible, conditionnel | Aucun tarif universel ; moyens supplémentaires décrits par les guides de continuité | Dépend de l’architecture et du contrat | Conserver « peuvent exiger » et démontrer par devis comparés |
| Aucun pourcentage universel ne convient | Confirmé | [Google SRE](https://sre.google/workbook/implementing-slos/) | Objectifs issus des besoins et mesures | Ajouter minutes et fenêtre pour rendre le refus utile |
| Un crédit de service ne rembourse pas automatiquement les pertes | Confirmé et à encadrer juridiquement | [AWS](https://aws.amazon.com/what-is/service-level-agreement/) et [Légifrance art. 1217](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000036829854/) | Mécanismes contractuels ; application au cas à faire valider | Ajouter exemple chiffré, sans conclure au droit à indemnisation |
| Le prestataire ne peut pas toujours promettre le délai d’un tiers | Confirmé opérationnellement | Les SLA cloud ont leurs propres périmètres/exclusions ; [NCSC](https://www.ncsc.gov.uk/guidance/software-security-code-of-practice-assurance-principles-claims) demande de préciser support/maintenance | Chaîne de fournisseurs | Ajouter matrice de dépendances et obligations de coordination |
| DORA impose ces pratiques à toutes les entreprises | Faux si ajouté | [EUR-Lex](https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32022R2554) | Entités financières dans le champ | N’en faire qu’un aiguillage sectoriel |

### Contradictions

- Aucune contradiction majeure n’a été trouvée dans la version auditée.
- La page affirme correctement qu’aucun taux n’est universel, mais ne fournit pas le calcul élémentaire qui permet au lecteur de comprendre l’ordre de grandeur. La prudence devient ici une lacune pédagogique.
- La chronologie montre un rétablissement à 14:20 et des données vérifiées à 16:00, mais le texte ne calcule pas les cinq délais. Le meilleur exemple du guide est sous-exploité.

### Faits à retirer plutôt qu’à affaiblir

- Aucun fait actuel n’est à retirer.
- Ne pas publier de tableau « P1 = 1 h, P2 = 4 h » présenté comme standard de marché.
- Ne pas recopier un taux Google/AWS dans un contrat de TMA.
- Ne pas écrire que DORA ou NIS2 s’applique à toute entreprise.
- Ne pas promettre qu’une pénalité ou un crédit compensera le dommage sans analyse juridique.

## 6. Scénarios et calculs à construire

Tous les chiffres sont **illustratifs et non contractuels**. Les délais recommandés doivent venir de l’analyse d’impact, des capacités testées et du contrat.

### Scénario 1 — Calculer les cinq horloges de la chronologie actuelle

À partir de l’exemple déjà publié :

| Moment | Heure | Délai depuis 09:10 | Lecture |
| --- | ---: | ---: | --- |
| Accusé automatique | 09:18 | 8 min | Le ticket existe |
| Prise en charge humaine | 10:05 | 55 min, soit 47 min après l’accusé | Le diagnostic commence |
| Contournement | 11:40 | 2 h 30 | Une partie des urgences peut passer |
| Rétablissement | 14:20 | 5 h 10 | La facturation repart |
| Données vérifiées | 16:00 | 6 h 50 | La cohérence est contrôlée |

Un contrat annonçant « réponse en huit minutes » peut donc coexister avec cinq heures dix d’arrêt. Ce tableau doit apparaître juste après la chronologie.

### Scénario 2 — Traduire la disponibilité en temps, fenêtre de 30 jours 24/7

```text
Indisponibilité admissible = 30 jours × 24 h × (1 - disponibilité)
```

| Disponibilité | Indisponibilité sur 30 jours |
| ---: | ---: |
| 99 % | 7 h 12 |
| 99,5 % | 3 h 36 |
| 99,9 % | 43 min 12 s |
| 99,95 % | 21 min 36 s |
| 99,99 % | 4 min 19 s |

**Contrôle inverse :** 43 minutes à 03:00 et 43 minutes pendant la clôture mensuelle n’ont pas le même impact. La période, la plage couverte, les maintenances, les pannes partielles et la définition du parcours doivent rester visibles.

### Scénario 3 — Coût prudent d’un incident

Hypothèses :

- 12 utilisateurs bloqués pendant 3,5 h à 42 €/h ;
- 10 h de reprise manuelle à 42 €/h ;
- 15 commandes de 80 € de marge contributive, dont 60 % sont récupérées plus tard ;
- 900 € d’intervention externe.

```text
Temps bloqué = 12 × 3,5 × 42 = 1 764 €
Reprise manuelle = 10 × 42 = 420 €
Marge non récupérée = 15 × 80 × (1 - 60 %) = 480 €
Intervention externe = 900 €
Impact prudent illustratif = 3 564 €
```

Ne pas ajouter le chiffre d’affaires complet aux marges perdues. Réputation, pénalités clients et incidents futurs restent séparés tant qu’ils ne sont pas documentés.

Si le contrat mensuel vaut 2 000 € et prévoit un crédit de 10 %, le crédit est de 200 €, soit **5,6 %** de l’impact illustratif. Cela ne prouve aucun droit supplémentaire ; cela montre seulement que le crédit et la continuité répondent à deux problèmes différents.

### Scénario 4 — Traduire un RPO de 90 minutes en travail

Chaque heure, 40 transactions sont enregistrées. Une restauration ramène le système 90 minutes en arrière. Chaque ressaisie demande quatre minutes.

```text
Transactions à reconstituer = 40 × 1,5 = 60
Temps de ressaisie = 60 × 4 min = 240 min = 4 h
Capacité valorisée à 35 €/h = 140 €
```

| Débit | Transactions à reconstituer | Temps à 4 min/unité | Capacité valorisée |
| ---: | ---: | ---: | ---: |
| 10/h | 15 | 1 h | 35 € |
| 40/h | 60 | 4 h | 140 € |
| 100/h | 150 | 10 h | 350 € |

Le coût monétaire paraît faible, mais l’entreprise doit encore prouver qu’elle dispose d’une source fiable pour reconstruire les opérations et détecter doublons ou incohérences.

### Scénario 5 — Comparer trois couvertures sur 12 mois

Même application, mêmes parcours et même incident de référence. Les montants de prestataire et l’exposition résiduelle sont fictifs.

| Poste annuel | Heures ouvrées | Plage étendue | 24/7 |
| --- | ---: | ---: | ---: |
| Prestataire | 12 000 € | 24 000 € | 48 000 € |
| Temps interne | 120 h × 45 € = 5 400 € | 60 h × 45 € = 2 700 € | 40 h × 45 € = 1 800 € |
| Exposition résiduelle estimée | 14 256 € | 7 128 € | 3 564 € |
| **Total de décision** | **31 656 €** | **33 828 €** | **53 364 €** |

Dans ce scénario central, les heures ouvrées gagnent. La plage étendue coûte 9 300 € de plus avant exposition ; elle devient préférable si elle évite plus de 9 300 € d’impact annuel par rapport aux heures ouvrées. Le 24/7 coûte 23 100 € de plus que la plage étendue avant exposition ; il doit éviter plus de 23 100 € d’impact additionnel pour revenir à égalité.

Les expositions résiduelles ne peuvent pas être inventées dans la version publique : elles doivent venir des incidents, horaires d’activité, modes dégradés et résultats d’un pilote ou exercice.

### Variables de sensibilité obligatoires

| Variable | Simple | Central | Exigeant | Source ou hypothèse |
| --- | ---: | ---: | ---: | --- |
| Utilisateurs bloqués | 3 | 12 | 50 | Journal d’incident |
| Durée de blocage | 30 min | 3,5 h | 12 h | Chronologie réelle |
| Transactions par heure | 10 | 40 | 100 | Logs métier |
| Part récupérée plus tard | 90 % | 60 % | 20 % | Ventes/production |
| Couverture | heures ouvrées | étendue | 24/7 | Horaires métier |

```text
Formule : coût de couverture = contrat + moyens internes + tests/monitoring + exposition résiduelle + sortie.
Horizon : 12 mois, avec historique pluriannuel si les incidents sont rares.
Inclus : mêmes parcours métier et dépendances.
Exclus : réputation non chiffrée et recours juridiques non validés.
Résultat : la couverture la plus prestigieuse ne gagne pas automatiquement.
Analyse de sensibilité : fréquence, horaire, durée, récupération commerciale et coût interne.
Variable qui fait basculer la décision : impact annuel réellement évité par la couverture supplémentaire.
Contrôle inverse : vérifier le scénario où le mode dégradé rend le 24/7 inutile.
```

## 7. Comparaison et position professionnelle

```text
Options réellement comparables : support en heures ouvrées ; couverture alignée à l'exploitation ; astreinte 24/7 ; continuité interne ou mode dégradé ; amélioration d'architecture plutôt qu'engagement plus strict.
Périmètre et horizon communs : mêmes parcours, volumes, dépendances, mesure, restauration, communication et 12 mois.
Option la moins chère : souvent heures ouvrées lorsque l'activité est contournable et concentrée sur cette plage.
Option la moins risquée : celle dont la capacité a été testée ; un 24/7 non exercé peut être plus risqué qu'un mode dégradé maîtrisé.
Option qui demande le moins de temps interne : dépend des accès, escalades, données de test, astreinte client et reprise manuelle.
Position Hagnéré Code pour le cas fréquent : définir trois parcours métier, calculer l'incident de référence, tester restauration et contournement, puis acheter la couverture qui évite plus d'impact que son premium.
Faits qui la fondent : chronologie, disponibilité en minutes, analyse d'impact, RTO/RPO, dépendances, preuves de restauration et devis.
Cas où l'option opposée gagne : service continu, dommage rapide et élevé, absence de mode dégradé, obligations sectorielles ou clientèle internationale, à condition que l'architecture et l'équipe prouvent le niveau.
Signal de révision : incident hors plage, objectif manqué, restauration échouée, changement de volume, dépendance critique, évolution réglementaire ou fin de support.
Ce que nous déconseillons même si nous pourrions le vendre : 99,9 % isolé, réponse automatique assimilée à prise en charge, RTO/RPO copiés, 24/7 sans équipe ni exercice, crédit présenté comme assurance.
```

Un engagement sévère ne rend pas automatiquement l’application résiliente. Si le délai demandé est inférieur à ce que l’architecture, les accès et la restauration permettent, il faut financer les moyens ou relâcher l’objectif avant de signer.

## 8. Objections et cas limites

| Objection loyale | Réponse prouvée | Ce qui reste incertain | Conséquence |
| --- | --- | --- | --- |
| « Le prestataire promet déjà une réponse en quatre heures » | Réponse, prise en charge, contournement et rétablissement sont différents | Le contrat doit définir l’action exacte | Réécrire les horloges et leurs preuves |
| « 99,9 % est un standard » | Les sources SRE demandent un objectif adapté ; un SLA cloud a un périmètre propre | Le besoin peut effectivement conduire à 99,9 % | Calculer minutes, fenêtre, exclusions et coût |
| « Nous avons des sauvegardes » | ANSSI/BSI exigent une stratégie de restauration et des tests | La sauvegarde peut être incomplète ou trop lente | Exiger un exercice avec contrôle métier |
| « Le mode manuel suffit » | Il peut rendre une couverture renforcée inutile | Capacité, durée et qualité du mode manuel doivent être testées | Chronométrer une journée dégradée |
| « Le fournisseur cloud est responsable » | Chaque dépendance a son contrat et ses exclusions | Coordination et recours dépendent des accords | Matrice compte/ticket/preuve/contournement |
| « Le crédit de service nous protège » | Il peut être très inférieur au dommage | Les autres recours sont juridiques et factuels | Ne pas remplacer BCP, assurance ou conseil juridique |
| « DORA/NIS2 impose 24/7 » | Les textes ont un périmètre et n’imposent pas ce raccourci universel | L’entité peut être dans le champ d’obligations spécifiques | Faire qualifier le périmètre par les conseils compétents |
| « Nous n’avons presque jamais de panne » | L’historique faible réduit la confiance statistique | Un risque rare peut être critique | Utiliser scénarios, exercices et fourchettes |
| « Le 24/7 transfère tout au prestataire » | Le client conserve souvent décisions, accès, validation métier et communication | Les responsabilités varient | Écrire l’astreinte client et les délais de coopération |
| « Un post-mortem est trop technique » | NCSC/ENISA valorisent information, incident plan et apprentissage | Le niveau de détail doit être adapté | Produire une synthèse dirigeant avec actions, propriétaire et échéance |

## 9. Plan de réécriture

| Ordre | Section proposée | Question résolue | Preuve, scénario ou outil | Décision produite | À conserver / créer / couper |
| ---: | --- | --- | --- | --- | --- |
| 1 | Verdict en 150 mots | Que faut-il acheter ? | Position conditionnelle | Refuser le taux isolé | Renforcer l’ouverture actuelle |
| 2 | Une panne, cinq horloges | Que promet « réponse » ? | Chronologie calculée | Définir les engagements | Conserver et calculer |
| 3 | Trois parcours métier | Que doit-on maintenir ? | SLI centré utilisateur | Délimiter le service | Conserver |
| 4 | Règles du chronomètre | Quand commence et s’arrête le délai ? | Tableau actuel + exemples vendredi/jour férié | Éliminer les ambiguïtés | Conserver |
| 5 | 99 % en minutes | Que vaut le taux ? | Tableau 30 jours et période critique | Choisir fenêtre et mesure | Créer |
| 6 | Coût d’un incident | Quel dommage éviter ? | Cas à 3 564 € | Établir l’impact | Créer |
| 7 | RTO/RPO en opérations | Combien de temps et de données ? | Cas 90 min/60 transactions | Fixer un objectif justifié | Renforcer |
| 8 | Trois couvertures sur 12 mois | Le premium est-il rentable ? | Coût d’équilibre 9 300 €/23 100 € | Choisir heures ouvrées, étendu ou 24/7 | Créer |
| 9 | Dépendances et fin de support | Qui peut promettre quoi ? | NCSC 2026 + matrice | Répartir responsabilités | Renforcer |
| 10 | Exercices et preuves | Le niveau est-il faisable ? | ANSSI/BSI, protocole de restauration | Signer ou corriger les moyens | Créer |
| 11 | Communication et recours | Que se passe-t-il pendant/après ? | ENISA, UK Code, Légifrance | Écrire cadence, rapport et revue juridique | Créer |
| 12 | Périmètres sectoriels | Une règle spécifique s’applique-t-elle ? | DORA comme exemple borné | Orienter vers expertise | Créer court |
| 13 | Position Hagnéré Code | Quel conseil mémorable ? | Cas fréquent/cas inverse | Donner un verdict | Créer |
| 14 | CTA-calculateur | Que faire aujourd’hui ? | Incident + simulateur + exercice | Arriver avec des données | Transformer |

### Contrat des 150 premiers mots

- Partir du contrat « réponse sous quatre heures » et dire ce qu’il ne garantit pas.
- Donner la position : ne pas acheter un pourcentage ; protéger les parcours et heures qui comptent.
- Annoncer les livrables : chronologie, minutes d’indisponibilité, coût d’incident, RPO en opérations et comparaison 12 mois.
- Préciser qu’aucun seuil universel n’est fourni.
- Dire qu’une rédaction juridique et les obligations sectorielles doivent être validées séparément.

### Éléments à supprimer

- Aucun bloc de fond n’est à supprimer.
- Réduire la répétition de « aucun seuil universel » après l’avoir démontrée par les calculs.
- Ne pas ajouter un catalogue de priorités P1/P2/P3 non contextualisées.

### Éléments à conserver

- L’introduction réponse ≠ rétablissement.
- La chronologie de la panne.
- Les sept moments.
- Le parcours métier plutôt que le statut technique.
- Les règles du chronomètre.
- RTO/RPO expliqués simplement.
- La critique du pourcentage isolé.
- La matrice de dépendances.
- Les trois niveaux conditionnels.
- Le test sur trois incidents.
- Le CTA fondé sur un incident concret.

## 10. Contre-audit après correction

La page n’a pas été modifiée dans ce lot. Aucun score après correction n’est attribué.

| Problème | Priorité | Correction appliquée | Revalidation indépendante |
| --- | --- | --- | --- |
| Chronologie non calculée | P0 | Non appliquée dans ce lot | Refaire tous les écarts horaires |
| Aucune comparaison économique | P0 | Non appliquée dans ce lot | Même périmètre, 12 mois et sensibilités |
| Disponibilité non traduite | P1 | Non appliquée dans ce lot | Vérifier minutes, fenêtre et arrondis |
| Sources France/Europe absentes | P1 | Non appliquée dans ce lot | Rouvrir ANSSI, Légifrance, NCSC, BSI, ENISA et EUR-Lex |
| Exercices et communication trop courts | P1 | Non appliquée dans ce lot | Relecture exploitation + direction |
| Position encore implicite | P2 | Non appliquée dans ce lot | Test de compréhension par un dirigeant |

### Score après correction

| Axe | Note /10 | Preuve localisable | Manque résiduel |
| --- | ---: | --- | --- |
| Intention | N/A | Réécriture non réalisée | À contre-auditer |
| Décision | N/A | Réécriture non réalisée | À contre-auditer |
| Pédagogie | N/A | Réécriture non réalisée | À contre-auditer |
| Profondeur | N/A | Réécriture non réalisée | À contre-auditer |
| Preuve | N/A | Réécriture non réalisée | À contre-auditer |
| Comparaison | N/A | Réécriture non réalisée | À contre-auditer |
| Originalité | N/A | Réécriture non réalisée | À contre-auditer |
| Style | N/A | Réécriture non réalisée | À contre-auditer |
| Conversion | N/A | Réécriture non réalisée | À contre-auditer |
| SEO/produit | N/A | Réécriture non réalisée | À contre-auditer |

Total : **non attribué**

Critère d’acceptation futur : **au moins 90/100, aucun axe sous 8/10**, calculs indépendamment refaits, au moins un exercice documenté ou un protocole publiable, sources primaires rouvertes et contrôle réel du rendu.

## 11. Preuves techniques et visuelles

```text
Manifeste : page et recherche existante relues ; snapshot SHA-256 consigné en tête.
Calculs refaits : oui, via un script Node indépendant le 24 juillet 2026.
Sources rouvertes : Google SRE, NIST, Google Maps, AWS, ANSSI, Légifrance, UK Code/NCSC, BSI, ENISA et EUR-Lex.
Liens vérifiés : ouverture web effectuée le 24 juillet 2026 ; les conditions contractuelles doivent être redatées.
Commandes : shasum -a 256 ; calculs Node des délais, disponibilités, impacts, RPO et TCO.
Rendu 320 / 390 / 768 / 1024 / 1440 : non exécuté, car aucune page publique n'a été modifiée.
Image sociale : non auditée dans ce lot éditorial.
Statut maximal prouvé : audit éditorial complet et plan de réécriture, pas correction publique ni avis juridique.
Réserve publication / indexation : aucune preuve de déploiement ou d'indexation n'est produite par cet audit.
```
