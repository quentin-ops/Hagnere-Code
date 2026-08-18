# Sécurité d'un SaaS B2B — benchmark mondial des axes manquants

**Version :** r1  
**Date de consultation des sources :** 25 juillet 2026  
**Périmètre :** réversibilité du SaaS, sécurité du produit, architecture de
preuve, lecture des assurances formelles et chaîne d'approvisionnement
logicielle.  
**Destination :** dossier de recherche du guide
`/guides/securite-saas-b2b`.  
**Statut :** recherche éditoriale, pas avis juridique, certification, audit ou
preuve concernant un produit particulier.

## 1. Méthode et niveau de confiance

Cette note privilégie les textes officiels et les organismes qui portent les
référentiels :

- EUR-Lex et Commission européenne pour le Data Act ;
- CISA et NIST pour les pratiques américaines ;
- gouvernement britannique et NCSC pour la sécurité du logiciel et
  l'assurance ;
- AICPA & CIMA pour SOC 2 ;
- ISO pour le statut et le périmètre public des normes ;
- Cloud Security Alliance pour CCM, CAIQ et STAR.

Les formulations ci-dessous séparent :

1. les obligations juridiques en vigueur ;
2. les référentiels et codes volontaires ;
3. les méthodes d'assurance ;
4. les propositions de réforme non adoptées ;
5. les limites que le guide doit rendre visibles.

La date de consultation est importante. Le statut du Digital Omnibus, la
publication de la deuxième édition d'ISO/IEC 27017 et les règles d'application
à certains contrats historiques peuvent évoluer.

## 2. Synthèse décisionnelle

| Axe | Écart à combler dans le guide | Priorité éditoriale | Décision que le lecteur doit pouvoir prendre |
| --- | --- | --- | --- |
| Data Act et réversibilité | La sortie est évoquée, mais ni ses obligations, ni ses délais, ni son test réel ne sont expliqués | Majeure | Vérifier le contrat, préparer un plan de sortie et exécuter un export-import représentatif |
| Sécurité du produit | La sécurité et la conformité sont distinguées, mais pas assez la sécurité de l'organisation et celle du logiciel livré | Majeure | Refuser qu'un badge d'entreprise remplace les preuves sur le produit, son build et son cycle de vie |
| Claims–Argument–Evidence | Les pièces sont qualifiées, mais le raisonnement reliant une affirmation à ses preuves n'est pas formalisé | Significative | Transformer une promesse en affirmation testable, sous-affirmations, tests et risque résiduel |
| SOC 2, ISO et STAR | Les démarches sont comparées, sans mode d'emploi assez profond pour lire le rapport ou le certificat | Majeure | Vérifier opinion, périmètre, période, exceptions, contrôles client et sous-traitants |
| Chaîne logicielle et SBOM | Les dépendances sont présentes, mais la provenance, les sous-tiers, l'obsolescence et les limites du SBOM restent sous-traitées | Majeure | Évaluer un composant et son écosystème, pas seulement collecter un inventaire |

## 3. Data Act : passer d'une clause de sortie à une réversibilité démontrée

### 3.1 Portée vérifiée

Le [règlement (UE) 2023/2854, dit Data
Act](https://eur-lex.europa.eu/eli/reg/2023/2854) est applicable depuis le
12 septembre 2025. Son chapitre VI porte sur le changement de fournisseur de
services de traitement de données.

La définition est plus large qu'un hébergement d'infrastructure. La
[présentation officielle de la Commission, chapitre
VI](https://digital-strategy.ec.europa.eu/en/factpages/data-act-explained)
inclut les services logiciels et explique que les fournisseurs de PaaS et de
SaaS doivent notamment proposer des interfaces ouvertes et, au minimum, un
export dans un format structuré, couramment utilisé et lisible par machine
lorsque les conditions du texte sont réunies.

Formulation publiable :

> Un SaaS commercialisé dans le périmètre du Data Act peut relever des règles
> européennes de changement de fournisseur. La réversibilité ne se résume
> donc plus à promettre un fichier CSV : le contrat, les données exportables,
> les formats, l'assistance, la continuité, la sécurité de la transition, la
> récupération et l'effacement doivent être examinés ensemble.

Réserve indispensable :

> L'application exacte dépend du service, du contrat, des parties et des
> exceptions prévues par le règlement. Cette présentation générale ne remplace
> pas la qualification juridique d'un cas réel.

### 3.2 Obligations à traduire en questions ordinaires

#### Article 23 — retirer les obstacles

Le fournisseur doit prendre les mesures prévues par le chapitre pour permettre
au client :

- de changer vers un autre fournisseur couvrant le même type de service ;
- de revenir vers une infrastructure sur site lorsque cette option est
  pertinente ;
- d'utiliser plusieurs fournisseurs en parallèle lorsque le texte le prévoit ;
- de porter ses données exportables et actifs numériques ;
- de ne pas être retenu par des obstacles précontractuels, commerciaux,
  techniques, contractuels ou organisationnels.

Question publiable :

> Qu'est-ce qui empêcherait réellement le client de partir : format fermé,
> API absente, volume, dépendance fonctionnelle, délai, coût, licence, secret,
> identité, configuration ou manque d'assistance ?

#### Article 25 — rendre la sortie contractuelle et opérable

Le contrat écrit doit notamment couvrir :

- une transition normale qui ne dépasse pas 30 jours calendaires après le
  préavis ;
- une assistance raisonnable ;
- la continuité des fonctions ou services pendant la transition ;
- l'information sur les risques connus de rupture ;
- un niveau de sécurité élevé pendant le transfert et la période de
  récupération ;
- une aide à la stratégie de sortie ;
- un préavis maximal de deux mois pour initier la transition ;
- la liste exhaustive des catégories de données et actifs numériques
  portables ;
- les catégories exclues en raison du fonctionnement interne du fournisseur
  lorsque leur divulgation risquerait de violer ses secrets d'affaires ;
- une période de récupération d'au moins 30 jours calendaires ;
- l'effacement complet des données exportables et actifs numériques concernés
  à l'issue de la période applicable, après réussite de la transition ;
- les éventuels frais de changement autorisés par l'article 29.

Lorsque les 30 jours sont techniquement impossibles, le fournisseur doit
informer le client dans les 14 jours ouvrables suivant la demande, justifier
l'impossibilité et proposer une période alternative qui ne dépasse pas sept
mois. Le texte prévoit également un droit du client à prolonger une fois la
période de transition.

Formulation publiable :

> Le délai de 30 jours est un maximum normal de transition prévu par le texte,
> pas la promesse que toute migration SaaS sera terminée en 30 jours. Une
> impossibilité technique doit être signalée et justifiée, avec une période
> alternative encadrée.

#### Articles 26 et 27 — informer et coopérer

Le fournisseur doit communiquer :

- les procédures de changement et de portage ;
- les méthodes et formats disponibles ;
- les restrictions et limites techniques connues ;
- un registre en ligne actualisé des structures et formats de données ainsi
  que des standards ou spécifications pertinents.

Les parties, y compris le fournisseur de destination, doivent coopérer de bonne
foi afin de rendre la transition effective, transférer les données à temps et
maintenir la continuité.

Conséquence éditoriale :

> Un fournisseur ne contrôle pas seul toute la migration. Le dossier de sortie
> doit attribuer les tâches au fournisseur source, au fournisseur de
> destination et au client.

#### Article 29 — frais transitoires

À la date de consultation :

- jusqu'au 12 janvier 2027, le règlement autorise des frais de changement
  réduits ;
- ces frais ne peuvent pas dépasser les coûts supportés par le fournisseur et
  directement liés à la transition concernée ;
- à partir du 12 janvier 2027, le fournisseur ne peut plus imposer de frais de
  changement pour le processus couvert par l'article 29 ;
- le fournisseur doit distinguer clairement frais normaux de service,
  pénalités de résiliation anticipée et frais réduits de changement.

Formulation publiable :

> Au 25 juillet 2026, dire que toute sortie doit déjà être gratuite serait
> inexact. Des frais réduits directement liés au changement restent possibles
> jusqu'au 12 janvier 2027. À partir de cette date, les frais de changement
> visés par l'article 29 disparaissent ; cela ne transforme pas automatiquement
> tous les autres frais contractuels en coûts interdits.

#### Articles 30 et 31 — technique, secrets et régimes particuliers

Pour les services autres que l'infrastructure seule, l'article 30 prévoit
notamment :

- des interfaces ouvertes mises à disposition gratuitement, dans une mesure
  égale, aux clients et fournisseurs de destination concernés ;
- à défaut de standards ou spécifications publiés applicables, l'export sur
  demande des données exportables dans un format structuré, couramment utilisé
  et lisible par machine.

Le fournisseur n'est pas tenu :

- de développer une nouvelle technologie ou un nouveau service ;
- de divulguer ou transférer des actifs protégés par la propriété
  intellectuelle ou constituant un secret d'affaires ;
- de compromettre la sécurité ou l'intégrité du service.

L'article 31 prévoit des régimes particuliers, notamment pour :

- certains services dont la majorité des caractéristiques principales a été
  construite sur mesure pour un seul client et qui ne sont pas proposés à
  grande échelle au catalogue ;
- les versions non destinées à la production, fournies temporairement pour
  test et évaluation.

### 3.3 Exercice de sortie recommandé

Le guide peut proposer un exercice sans inventer de moyenne de marché :

1. inventorier les données d'entrée, de sortie et métadonnées générées par
   l'usage ;
2. distinguer ce qui est exportable, ce qui est exclu et pourquoi ;
3. relever formats, schémas, API, volumes, pièces jointes, historiques,
   identités, droits, configurations et journaux ;
4. exporter un jeu représentatif ;
5. contrôler le nombre d'objets, les relations, les encodages, les dates, les
   droits et les erreurs ;
6. importer dans un environnement de destination ;
7. mesurer durée totale, indisponibilité, erreurs, pertes, reprises manuelles
   et coût ;
8. vérifier la continuité et la sécurité pendant le transfert ;
9. documenter la période de récupération ;
10. obtenir et conserver la preuve d'effacement lorsque le processus est
    terminé.

Mesures proposées :

- taux d'objets exportés ;
- taux d'objets réimportés sans perte ;
- nombre de relations orphelines ;
- volume non portable et justification ;
- durée d'export, d'import et de validation métier ;
- indisponibilité ;
- heures internes et externes ;
- incidents ou erreurs de sécurité ;
- date et preuve de suppression.

Ces résultats ne constituent pas un « score de conformité ». Une seule donnée
critique non récupérable peut suffire à bloquer la décision.

### 3.4 Points à ne pas affirmer

- « Le Data Act impose une migration instantanée. »
- « Toutes les données et tout le code du fournisseur doivent être remis. »
- « Toute sortie SaaS est gratuite depuis septembre 2025. »
- « Le délai de 30 jours ne souffre aucune exception technique. »
- « Tous les SaaS du monde sont automatiquement soumis au Data Act. »
- « Le droit à la réversibilité du Data Act est identique au droit à la
  portabilité du RGPD. »
- « Un export CSV, sans test d'import ni contrôle de complétude, prouve la
  réversibilité. »
- « Les dispositions s'appliquent de la même manière à tout contrat antérieur
  au 12 septembre 2025. »

### 3.5 Incertitude juridique à conserver

L'article 50 fixe l'application générale du règlement au 12 septembre 2025,
mais sa transition contractuelle explicite vise le chapitre IV, pas le chapitre
VI. Une affirmation catégorique sur chaque contrat historique serait donc
imprudente sans analyse juridique.

En outre, le [Digital Omnibus, proposition COM(2025)
837](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=celex%3A52025PC0837)
propose des aménagements, notamment pour certains contrats antérieurs et
certains fournisseurs de taille limitée. La
[procédure 2025/0360(COD)](https://eur-lex.europa.eu/search.html?DTS_SUBDOM=LEGAL_PROCEDURE&LP_CC_3_CODED=132060&SUBDOM_INIT=ALL_ALL&lang=en&type=advanced)
était toujours indiquée comme en cours le 25 juillet 2026. Il ne faut donc pas
présenter la proposition comme du droit adopté.

## 4. Sécurité du produit : ne pas confondre le fournisseur et le logiciel livré

### 4.1 Distinction CISA directement utile à l'acheteur

Le [Secure by Demand Guide de la CISA et du FBI, août
2024](https://www.cisa.gov/sites/default/files/2024-08/SecureByDemandGuide_080624_508c.pdf)
distingue, page 1 :

- la sécurité de l'entreprise, qui protège l'infrastructure et les opérations
  propres de l'éditeur ;
- la sécurité du produit, qui couvre les actions prises pour rendre le logiciel
  livré résistant aux attaquants.

Le document recommande d'intégrer la sécurité du produit :

- avant l'achat, dans les questions posées aux candidats ;
- pendant l'achat, dans les exigences contractuelles pertinentes ;
- après l'achat, dans le suivi continu des résultats de sécurité.

Il structure la démarche autour de trois principes :

1. le fabricant assume les résultats de sécurité pour ses clients ;
2. il pratique la transparence et la responsabilité ;
3. sa direction et son organisation soutiennent ces objectifs.

Formulation publiable :

> Un éditeur peut protéger correctement son réseau interne tout en livrant un
> produit insuffisamment sécurisé. Inversement, un contrôle technique du produit
> ne prouve pas toute la gouvernance de l'entreprise. L'acheteur doit examiner
> les deux plans sans les confondre.

### 4.2 Code britannique : une base produit volontaire et adaptée au SaaS B2B

Le [Software Security Code of Practice du gouvernement
britannique](https://www.gov.uk/government/publications/software-security-code-of-practice/software-security-code-of-practice),
mis à jour le 15 janvier 2026 :

- est volontaire ;
- vise les organisations qui développent ou vendent des logiciels à des
  entreprises ;
- mentionne explicitement les fournisseurs SaaS ;
- comprend 14 principes répartis en quatre thèmes ;
- demande la désignation d'un responsable exécutif, le Senior Responsible
  Owner.

Les quatre thèmes sont :

1. **conception et développement sûrs** : cadre de développement, composition
   du logiciel, tests du logiciel et de ses mises à jour, sécurité dès la
   conception et par défaut ;
2. **sécurité de l'environnement de build** : accès protégé, changements
   contrôlés et journalisés ;
3. **déploiement et maintenance sûrs** : distribution, politique de
   divulgation, détection et traitement des vulnérabilités, signalement,
   correctifs et notifications ;
4. **communication client** : niveau de support, préavis de fin de support d'au
   moins un an et communication des incidents notables.

Le
[document NCSC d'Assurance Principles and Claims](https://www.ncsc.gov.uk/guidance/software-security-code-of-practice-assurance-principles-claims)
donne des exemples de preuves et précise le contenu de ces principes. Il
confirme notamment :

- l'identification et la documentation des composants tiers ;
- la vérification de leur intégrité ;
- leur test initial et lors des mises à jour ;
- un plan de test répétable ;
- le threat modelling ;
- la protection et la journalisation de l'environnement de build ;
- une politique de divulgation publique ;
- la gestion proactive des vulnérabilités ;
- la publication des dates de fin de support.

### 4.3 Questions produit à ajouter au guide

| Question | Preuve utile | Limite à rendre visible |
| --- | --- | --- |
| Quel cadre de développement sécurisé est réellement utilisé ? | Référentiel, règles de contribution, formation, échantillon de contrôles | Un document non appliqué ne prouve rien |
| Quels composants tiers entrent dans le produit ? | Inventaire versionné, SBOM, propriétaire, criticité | Un inventaire ne démontre pas leur innocuité |
| Comment l'environnement de build est-il protégé ? | Accès, MFA, journaux, signatures, séparation, revue | Le contrôle du dépôt ne suffit pas si le build peut être altéré |
| Comment les mises à jour sont-elles testées et distribuées ? | Plan, résultats, provenance, signature, rollback | Un mécanisme automatique peut propager une erreur |
| Comment signaler une vulnérabilité ? | Politique publique, canal confidentiel, rôles, délais internes | Une adresse générique sans processus n'est pas une VDP effective |
| Comment l'éditeur traite-t-il une classe entière de défauts ? | Analyse de cause, recherche de variantes, correctifs et contre-tests | Corriger un seul cas ne prévient pas la récidive |
| Quels journaux le client reçoit-il par défaut ? | Événements, rétention, export, horodatage et coût | Un journal inaccessible au client n'aide pas son enquête |
| Quand finit le support ? | Politique, versions supportées, préavis et migration | Une promesse sans date ni version n'est pas exploitable |
| Qui répond du résultat ? | Responsable exécutif et responsables opérationnels | Un titre seul ne prouve pas les moyens ni le suivi |

### 4.4 Points à ne pas affirmer

- « ISO 27001 prouve que chaque fonction du produit est sûre. »
- « Le code britannique est une certification. »
- « Une adhésion au pledge CISA est un audit indépendant. »
- « Un SBOM prouve la sécurité du logiciel. »
- « MFA, SSO ou logs existent nécessairement dans l'offre de base. »
- « Une politique de vulnérabilité prouve que les signalements sont traités. »
- « Le produit est secure by design » sans critères, version, résultats et
  limites.

### 4.5 Limite de source

Le PDF CISA a été vérifié par téléchargement direct le 25 juillet 2026. Son
aperçu textuel automatisé a renvoyé une erreur 403 pendant la consultation.
L'URL officielle reste accessible comme téléchargement ; si elle cesse de
l'être, il faudra remplacer la référence par la page CISA qui héberge le
document ou une version officielle archivée.

## 5. Claims–Argument–Evidence : construire un raisonnement, pas une pile de pièces

### 5.1 Méthode NCSC

Le [NCSC Principles Based
Assurance](https://www.ncsc.gov.uk/information/principles-based-assurance),
publié et revu le 17 avril 2023, adapte au risque cyber une méthode
Claims–Argument–Evidence :

- une **affirmation** est une propriété vraie ou fausse d'un objet déterminé ;
- un **argument** relie ce qui est connu ou supposé à l'affirmation et la
  décompose en sous-affirmations plus faciles à examiner ;
- une **preuve** est un élément qui soutient ou réfute l'affirmation à travers
  cet argument.

Le niveau d'indépendance dépend du risque :

- une auto-évaluation peut suffire lorsque l'impact est limité ;
- un produit critique ou une équipe qui ne possède pas les compétences
  nécessaires peut justifier une évaluation indépendante.

Le [NCSC Software Security Code — Assurance Principles and
Claims](https://www.ncsc.gov.uk/guidance/software-security-code-of-practice-assurance-principles-claims),
version 1.0 du 7 mai 2025, applique cette logique :

- chaque principe est décomposé en affirmations ;
- les preuves peuvent venir de documents, d'entretiens, de plans et résultats
  de tests ;
- une affirmation insuffisamment démontrée doit conduire à une action de
  correction ou à une preuve supplémentaire ;
- les arbres d'affirmations rendent visibles les conséquences d'un manque de
  preuve.

### 5.2 Registre de preuve proposé

Chaque affirmation devrait comporter :

1. **affirmation testable** ;
2. **produit, version, environnement et région** concernés ;
3. **risque ou scénario redouté** ;
4. **argument et sous-affirmations** ;
5. **hypothèses** ;
6. **méthode de test ou d'observation** ;
7. **preuve, date et résultat** ;
8. **preuve contradictoire ou exception** ;
9. **niveau d'indépendance** ;
10. **risque résiduel** ;
11. **propriétaire et accepteur du risque** ;
12. **expiration ou événement invalidant** ;
13. **action et critère de clôture** ;
14. **extrait partageable avec l'acheteur**.

Formulation publiable :

> Une pièce n'est utile que si elle soutient ou réfute une affirmation
> précise. « Nous avons un pentest » est une information ; « le test indépendant
> du 12 juin a tenté les scénarios A à F sur la version X et n'a pas trouvé de
> franchissement entre clients, sauf l'exception Y encore ouverte » est une
> preuve décisionnelle, dans les limites décrites.

### 5.3 Exemple : isolement entre entreprises clientes

**Affirmation principale**

> Un utilisateur ou processus du client A ne peut ni lire ni modifier les
> données du client B sur le périmètre vendu.

**Sous-affirmations**

- l'interface applique l'autorisation côté serveur ;
- l'API refuse un identifiant appartenant à un autre client ;
- la recherche ne mélange pas les index ;
- les exports et tâches asynchrones conservent le contexte du client ;
- les pièces jointes et URL signées restent cloisonnées ;
- le cache ne réutilise pas une réponse entre clients ;
- le support et les administrateurs utilisent des accès nominatifs,
  journalisés et limités ;
- les sauvegardes, restaurations et environnements de test ne mélangent pas les
  périmètres.

**Preuves possibles**

- tests négatifs automatisés ;
- scénario manuel indépendant ;
- journaux de refus ;
- revue de règles d'autorisation ;
- résultat d'export ;
- preuve de contre-test après correction.

**Règle de décision**

Une moyenne de réussite ne doit pas masquer une fuite. Un seul franchissement
inter-client critique peut suspendre la signature ou la mise en production.

### 5.4 Points à ne pas affirmer

- « CAE certifie le produit. »
- « Une preuve indépendante est toujours obligatoire. »
- « Une auto-évaluation suffit quel que soit l'impact. »
- « L'absence de preuve démontre automatiquement l'absence du contrôle. »
- « Un document prouve le fonctionnement du contrôle. »
- « Une preuve reste valide après un changement de version, de flux,
  d'architecture ou de sous-traitant. »

## 6. Lire SOC 2, ISO et CSA STAR sans croire le logo

### 6.1 SOC 2 : la question n'est pas seulement Type 1 ou Type 2

La [publication officielle AICPA & CIMA sur SOC
2](https://www.aicpa-cima.com/cpe-learning/publication/soc-2-reporting-on-an-examination-of-controls-at-a-service-organization-relevant-to-security-availability-processing-integrity-confidentiality-or-privacy)
porte sur l'examen des contrôles d'une organisation de services pertinents pour
la sécurité, la disponibilité, l'intégrité du traitement, la confidentialité
ou la vie privée.

L'[AICPA rappelle](https://www.aicpa-cima.com/professional-insights/video/maintaining-high-standards-for-soc-engagements)
qu'un Type 1 observe la conception des contrôles à une date donnée, tandis que
le Type 2 ajoute leur efficacité opérationnelle sur une période.

La page publique du
[SOC 2 Report Walkthrough](https://www.aicpa-cima.com/cpe-learning/webcast/soc-2-report-walkthrough)
identifie les éléments qu'un lecteur doit maîtriser :

- sections du rapport ;
- type d'opinion ;
- contrôles complémentaires attendus de l'entité cliente, ou CUECs ;
- contrôles complémentaires attendus des sous-organisations de services, ou
  CSOCs ;
- traitement des sous-organisations par méthode inclusive ou carve-out ;
- exceptions ;
- bridge letters ;
- distinction avec SOC 3.

### 6.2 Ordre de lecture acheteur d'un SOC 2

1. **Cabinet et opinion** : qui a réalisé l'examen et quelle conclusion
   exprime-t-il ?
2. **Entité et système** : quel fournisseur, quel service et quelles limites ?
3. **Critères couverts** : sécurité seule ou autres critères également ?
4. **Type et période** : date du Type 1 ou période du Type 2 ?
5. **Tests et exceptions** : quels contrôles ont été testés, avec quels
   résultats et déviations ?
6. **CUECs** : que doit faire le client pour que le dispositif fonctionne ?
7. **Sous-organisations** : lesquelles sont incluses, exclues par carve-out ou
   dépendantes de CSOCs ?
8. **Actualité** : combien de temps sépare la fin de période de la décision ?
9. **Bridge letter** : que déclare la direction depuis la période et quels
   changements significatifs sont intervenus ?
10. **Périmètre vendu** : le produit, la région, l'environnement et les options
    utilisés par l'acheteur sont-ils réellement couverts ?

Formulation publiable :

> Un SOC 2 Type 2 apporte une assurance sur les contrôles décrits et testés
> pendant la période du rapport. Il ne couvre pas automatiquement toutes les
> fonctions, tous les sous-traitants, toutes les régions ni les changements
> intervenus après cette période.

Un bridge letter ne remplace pas un nouvel examen indépendant. Il peut aider à
documenter la période postérieure, mais doit être lu avec les changements
effectifs et les autres preuves disponibles.

### 6.3 ISO : quel texte répond à quelle question ?

| Référence officielle au 25 juillet 2026 | Question principale | Ce qu'il faut vérifier | Ce qu'elle ne prouve pas seule |
| --- | --- | --- | --- |
| [ISO/IEC 27001:2022](https://www.iso.org/standard/27001) | Le système de management de la sécurité répond-il aux exigences de la norme ? | Entité, certificat, organisme, périmètre, sites, exclusions, dates et déclaration d'applicabilité pertinente | La sécurité exhaustive de chaque fonction du SaaS |
| [ISO/IEC 27017:2015](https://www.iso.org/standard/43757.html) | Quels contrôles et responsabilités sont propres aux services cloud ? | Rôle fournisseur/client, modèle cloud, édition réellement utilisée | Une certification universelle du produit ou le respect automatique du RGPD |
| [ISO/IEC 27018:2025](https://www.iso.org/standard/27018) | Comment protéger les PII dans un cloud public lorsque le fournisseur agit comme processor ? | Rôle réel, service, périmètre, contrôles et articulation avec 27001/27002 | Une certification RGPD générale |
| [ISO/IEC 27701:2025](https://www.iso.org/standard/27701) | Le management de la vie privée d'un controller ou processor répond-il au PIMS ? | Rôle, périmètre, données, obligations et certificat applicable | La conformité juridique automatique de chaque traitement |

Statut à surveiller :

- l'[ISO/IEC 27017 édition 2](https://www.iso.org/standard/82878.html) était
  encore au stade **Under publication [60.00]** le 25 juillet 2026 ;
- elle est annoncée pour remplacer ISO/IEC 27017:2015 ;
- le guide ne doit pas la présenter comme une norme déjà publiée tant que la
  fiche ISO n'est pas passée au stade publié.

Formulation publiable :

> ISO/IEC 27001 porte sur un système de management dans un périmètre certifié.
> Les textes 27017, 27018 et 27701 répondent à des questions cloud ou vie privée
> plus précises, mais leur simple mention ne prouve ni leur inclusion dans le
> certificat, ni l'application de chaque contrôle au SaaS vendu.

### 6.4 CSA : CAIQ et STAR ne sont pas un seul niveau d'assurance

La [Cloud Controls Matrix et le CAIQ
4.1](https://cloudsecurityalliance.org/artifacts/cloud-controls-matrix-v4-1),
publiés le 27 janvier 2026, comprennent 207 contrôles répartis dans 17 domaines.
Le questionnaire structure la transparence et les réponses cloud.

Le [programme STAR](https://cloudsecurityalliance.org/star/) distingue :

- **Level 1** : auto-évaluation à partir du CAIQ ; les auto-évaluations sont
  mises à jour annuellement selon la CSA ;
- **Level 2** : audit tiers ;
- **STAR Attestation** : articulation SOC 2 + CCM, listing expirant après un an
  s'il n'est pas mis à jour ;
- **STAR Certification** : ISO/IEC 27001 + CCM, certificat suivant le cycle
  ISO/IEC 27001 et expirant après trois ans s'il n'est pas mis à jour.

La CSA présente le Level 1 comme adapté à la transparence et aux contextes de
faible risque, et le Level 2 comme pertinent pour une assurance tiers dans des
contextes de risque moyen à élevé. Cette indication ne remplace pas l'analyse
de criticité du client.

Formulation publiable :

> Un CAIQ ou un STAR Level 1 documente les contrôles déclarés par le
> fournisseur ; ce n'est pas un audit indépendant. STAR Level 2 ajoute une
> attestation ou certification tierce, mais l'acheteur doit toujours lire le
> service, le périmètre, les dates et les exceptions.

### 6.5 Comparaison à périmètre égal

Avant toute comparaison, figer :

- même entité juridique ;
- même produit et même version ;
- mêmes fonctions et options ;
- mêmes environnements ;
- mêmes régions et lieux ;
- mêmes catégories de données ;
- mêmes sous-traitants critiques ;
- même criticité ;
- même exigence acheteur ;
- même horizon temporel.

Pour chaque démarche, documenter :

- la question à laquelle elle répond ;
- la durée d'observation ;
- le niveau d'indépendance ;
- le périmètre et les exclusions ;
- les exceptions visibles ;
- les contrôles dus par le client ;
- les sous-organisations couvertes ;
- l'expiration ;
- le délai et la charge interne ;
- le coût total sur 36 mois ;
- la réutilisabilité commerciale ;
- ce qu'elle ne démontre pas.

Options à comparer :

1. dossier ciblé de preuves ;
2. auto-évaluation CAE ou APC ;
3. CAIQ / STAR Level 1 ;
4. test d'intrusion ciblé avec contre-test ;
5. programme continu interne ou managé ;
6. ISO/IEC 27001, avec textes cloud ou vie privée pertinents ;
7. SOC 2 Type 1 ;
8. SOC 2 Type 2 ;
9. STAR Level 2 ;
10. assurance sectorielle lorsque réellement requise ;
11. report ou refus de la vente.

### 6.6 Points à ne pas affirmer

- « SOC 2 est une certification de sécurité du produit. »
- « Type 1 prouve le fonctionnement des contrôles dans le temps. »
- « Une bridge letter est un audit. »
- « Les sous-traitants sont couverts sans lire inclusive ou carve-out. »
- « ISO 27001 certifie toutes les fonctions, régions et filiales du groupe. »
- « ISO 27018 ou 27701 équivaut à une certification RGPD. »
- « ISO/IEC 27017:2026 est déjà publiée. »
- « CAIQ ou STAR Level 1 est un audit indépendant. »
- « STAR Level 2 supprime le besoin de lire son périmètre. »
- « Deux badges différents sont comparables sans aligner entité, service,
  période et exclusions. »

### 6.7 Limites d'accès aux sources

- les fiches ISO, leur statut, leur résumé et leur historique sont publics ; le
  texte complet des normes est payant ;
- le guide détaillé SOC 2 et le cours AICPA sont payants ; leurs pages publiques
  ont permis de vérifier le périmètre, les notions de lecture et les sujets
  annoncés ;
- la page principale de publication AICPA a répondu de façon intermittente
  pendant la consultation. Les pages AICPA relatives au Type 1 et au
  walkthrough sont restées accessibles.

Le guide doit résumer les distinctions utiles sans reproduire ni prétendre
remplacer les normes ou guides payants.

## 7. Chaîne d'approvisionnement et SBOM : l'inventaire n'est que le début

### 7.1 NIST SP 1326 : due diligence fournisseur et produit

Le [NIST SP 1326, final du 8 juillet
2026](https://csrc.nist.gov/pubs/sp/1326/final), porte sur la due diligence des
fournisseurs ICT. Il structure la recherche en cinq familles :

1. propriété, contrôle ou influence étrangère ;
2. provenance ;
3. résilience ;
4. pratiques cyber fondamentales ;
5. niveaux de la chaîne d'approvisionnement.

Le document recommande de rechercher et recouper les informations pertinentes
sur le fournisseur et le produit. Son périmètre américain et certaines listes
gouvernementales ne doivent pas être transposés mécaniquement à une PME
française ; son modèle de questionnement reste utile internationalement.

### 7.2 Ce que le SP 1326 dit du SBOM

La page 12 du PDF officiel indique qu'un SBOM :

- est un relevé formel des composants et relations de chaîne utilisés pour
  construire le logiciel ;
- ne signifie pas automatiquement que le logiciel est sécurisé ;
- permet une analyse de risque plus adaptée grâce à la connaissance des
  sous-composants ;
- gagne à être lisible par machine dans un format standard.

Le NIST propose ensuite d'analyser :

- les contributeurs et la possibilité de vérifier les modifications ;
- les composants qui dépendent d'une seule personne ou d'un petit groupe ;
- la criticité des dépendances ;
- la fréquence de maintenance et de mise à jour ;
- la fin de vie et l'âge des composants ;
- les composants connus et inconnus ;
- les CVE non corrigées, exploitées ou historiquement compromises.

La page 13 ajoute la question de la concentration :

> Plusieurs fournisseurs directs dépendent-ils en réalité du même
> sous-fournisseur ?

Formulation publiable :

> Demander un SBOM sans analyser l'obsolescence, les vulnérabilités, la
> maintenance, les propriétaires et les dépendances communes transforme une
> preuve potentielle en simple inventaire.

### 7.3 NIST : profondeur d'assurance proportionnée

Le [NIST SP
1305](https://csrc.nist.gov/pubs/sp/1305/final), final du 21 octobre 2024,
explique comment le CSF 2.0 aide une organisation à :

- exploiter la catégorie de gouvernance de la chaîne d'approvisionnement ;
- définir et communiquer des exigences fournisseurs ;
- agir comme acheteur et fournisseur informé.

La page NIST
[Enhanced Vendor Risk Assessments](https://www.nist.gov/itl/executive-order-14028-improving-nations-cybersecurity/software-supply-chain-security-guidance-21),
mise à jour le 1er novembre 2024, propose une montée en assurance :

- recherche externe et auto-attestation périodique ;
- vérification des signatures et empreintes des logiciels et mises à jour ;
- attestation tierce selon le risque ;
- exigences répercutées aux sous-fournisseurs ;
- fiche de sécurité du logiciel et informations sur les outils de build ;
- artefacts de bas niveau lorsque le risque le justifie ;
- déploiements automatisés, tests avant production, rollback et déploiements
  progressifs ;
- identifiants juste-à-temps dans les systèmes de build.

Ces mesures sont des recommandations de due diligence, pas une obligation
universelle pour tout SaaS B2B.

### 7.4 CISA : provenance et responsabilité produit

Le [Secure by Demand Guide](https://www.cisa.gov/sites/default/files/2024-08/SecureByDemandGuide_080624_508c.pdf),
page 3, recommande notamment :

- le maintien et le partage de données de provenance des dépendances tierces ;
- un SBOM en format standard et lisible par machine ;
- l'identification des composants open source et tiers ;
- un processus de gouvernance des composants open source.

Le document suggère également d'examiner :

- la politique de divulgation des vulnérabilités ;
- la qualité et la rapidité des enregistrements CVE ;
- les journaux mis à disposition du client ;
- les progrès publics pris au titre d'engagements volontaires.

### 7.5 Registre chaîne d'approvisionnement proposé

Pour chaque dépendance critique :

| Champ | Question |
| --- | --- |
| Service | Quelle fonction du SaaS dépend de ce composant ou fournisseur ? |
| Données | Quelles données et métadonnées reçoit-il ? |
| Provenance | D'où viennent le composant, ses mises à jour et son build ? |
| Version | Quelle version est en production ? |
| Support | Qui maintient, jusqu'à quand et à quelle fréquence ? |
| Vulnérabilités | Quelles alertes, exploitations connues et corrections ? |
| Sous-tiers | Quels fournisseurs indirects sont déterminants ? |
| Concentration | Plusieurs services critiques dépendent-ils du même acteur ? |
| Intégrité | Comment l'origine et l'intégrité sont-elles vérifiées ? |
| Changement | Quel préavis et quel processus de revue ? |
| Substitution | Quelle alternative et quel temps de remplacement ? |
| Preuve | Quelle pièce, quelle date, quel résultat et quelle expiration ? |

### 7.6 Points à ne pas affirmer

- « La présence d'un SBOM prouve que le logiciel est sûr. »
- « Tous les composants listés sont effectivement utilisés en production. »
- « Une absence de CVE prouve l'absence de vulnérabilité. »
- « Une dépendance très populaire est nécessairement mieux maintenue. »
- « Deux fournisseurs directs apportent de la diversité s'ils reposent sur le
  même sous-tier critique. »
- « Une auto-attestation est équivalente à un examen indépendant. »
- « Les recommandations fédérales américaines sont des obligations pour tout
  éditeur européen. »
- « Toute la chaîne peut être connue avec certitude à partir de sources
  publiques. »

## 8. Modèle transversal de preuve à intégrer au guide

Pour éviter cinq listes indépendantes, le guide peut utiliser un même modèle :

| Élément | Contenu attendu |
| --- | --- |
| Décision | Signer, signer sous conditions, corriger, renégocier ou reporter |
| Affirmation | Propriété précise du produit ou du processus |
| Scénario | Événement ou attaque que l'on cherche à prévenir |
| Périmètre | Entité, produit, version, région, environnement et options |
| Argument | Sous-affirmations nécessaires |
| Test | Méthode, données, observateur et critères de réussite |
| Résultat | Réussite, échec, exception et limite |
| Indépendance | Déclaration, document, trace, test ou examen tiers |
| Actualité | Date, période, expiration et événement invalidant |
| Responsabilité | Propriétaire, décideur et contrôles restant au client |
| Risque résiduel | Gravité, exposition et acceptation |
| Action | Correctif, contre-test, budget, date et critère de clôture |

Ce modèle s'applique :

- au test de sortie Data Act ;
- aux affirmations de sécurité produit ;
- aux preuves CAE ;
- à la lecture SOC 2, ISO et STAR ;
- aux dépendances et sous-tiers.

## 9. Scénarios chiffrables sans inventer de statistiques

### 9.1 Dette de preuve

```text
Charge annuelle =
  nombre de pièces × temps moyen de revue et mise à jour
  + heures de contre-test
  + heures de traitement des exceptions
  + heures de revue client résiduelle
```

Suivre séparément :

- nombre de pièces expirées ;
- jours d'exception au-delà de l'échéance ;
- mois non couverts entre la fin d'un rapport et la décision ;
- changements intervenus depuis la preuve.

### 9.2 Réversibilité

```text
Coût de l'exercice =
  heures fournisseur source
  + heures client
  + heures fournisseur destination
  + coûts techniques
  + coût de l'indisponibilité observée
```

Ne pas confondre ce coût interne avec les « switching charges » juridiquement
encadrés par l'article 29.

### 9.3 Couverture d'isolement

```text
Cas à exécuter =
  interfaces
  × actions
  × paires de clients
  × rôles
  × états du cycle de vie
```

Le taux de réussite aide à suivre la campagne, mais ne transforme pas un échec
critique en résultat acceptable.

### 9.4 Concentration fournisseur

Mesurer :

- nombre de fournisseurs directs critiques ;
- nombre de sous-tiers communs ;
- nombre de points de défaillance uniques ;
- délai de substitution estimé puis testé ;
- services et données touchés par chaque point unique.

## 10. Ordre d'intégration éditorial recommandé

1. **Data Act et exercice de sortie** : écart le plus actuel et le plus
   directement actionnable.
2. **Sécurité du produit contre sécurité de l'organisation** : évite la
   principale fausse équivalence commerciale.
3. **Mode de lecture SOC 2 / ISO / STAR** : rend le comparatif existant
   réellement utilisable.
4. **Claims–Argument–Evidence** : donne au guide une architecture de preuve
   différenciante.
5. **SBOM, provenance et sous-tiers** : approfondit le contrôle continu et les
   dépendances.
6. **Scénarios chiffrables** : transforme les sections en outils de décision
   sans inventer de benchmark.

## 11. Registre des sources primaires

Toutes les sources ont été consultées le **25 juillet 2026**.

| Source | Date ou version affichée | Périmètre utilisé | Accès et réserve |
| --- | --- | --- | --- |
| [EUR-Lex — règlement (UE) 2023/2854](https://eur-lex.europa.eu/eli/reg/2023/2854) | Applicable depuis le 12 septembre 2025 | Chapitre VI, articles 23 à 31 ; article 50 | Texte officiel accessible |
| [Commission — Data Act explained](https://digital-strategy.ec.europa.eu/en/factpages/data-act-explained) | Page officielle consultée en 2026 | Inclusion des services logiciels, contrats, formats et interfaces | Présentation pédagogique ; le règlement reste la source juridique |
| [Commission — FAQ Data Act](https://digital-strategy.ec.europa.eu/en/library/commission-publishes-frequently-asked-questions-about-data-act) | Version 1.4 du 22 janvier 2026 annoncée sur la page | Appui d'interprétation | Page temporairement limitée par des réponses 429 pendant une partie de la consultation |
| [EUR-Lex — COM(2025) 837](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=celex%3A52025PC0837) | 19 novembre 2025 | Proposition Digital Omnibus | Proposition, non droit adopté ; procédure encore en cours |
| [CISA/FBI — Secure by Demand Guide](https://www.cisa.gov/sites/default/files/2024-08/SecureByDemandGuide_080624_508c.pdf) | Août 2024 | Sécurité produit, achat, logs, SBOM, provenance, VDP | PDF vérifié par téléchargement direct ; aperçu automatisé 403 |
| [GOV.UK — Software Security Code of Practice](https://www.gov.uk/government/publications/software-security-code-of-practice/software-security-code-of-practice) | Mis à jour le 15 janvier 2026 | 14 principes, SaaS B2B, SRO, caractère volontaire | Accessible ; schéma de certification annoncé mais non encore présenté comme disponible |
| [NCSC — Principles Based Assurance](https://www.ncsc.gov.uk/information/principles-based-assurance) | Publié et revu le 17 avril 2023 | Claims–Argument–Evidence et niveau d'indépendance | Accessible |
| [NCSC — Software Security Code APCs](https://www.ncsc.gov.uk/guidance/software-security-code-of-practice-assurance-principles-claims) | Version 1.0, 7 mai 2025 | Claims, preuves, remédiations, build, cycle de vie | Accessible |
| [AICPA — SOC 2 publication](https://www.aicpa-cima.com/cpe-learning/publication/soc-2-reporting-on-an-examination-of-controls-at-a-service-organization-relevant-to-security-availability-processing-integrity-confidentiality-or-privacy) | Publication 2022 | Objet du rapport SOC 2 | Page publique intermittente ; guide complet payant |
| [AICPA — Maintaining high standards for SOC engagements](https://www.aicpa-cima.com/professional-insights/video/maintaining-high-standards-for-soc-engagements) | 6 décembre 2023 | Type 1 à une date, Type 2 et contexte d'examen | Accessible |
| [AICPA — SOC 2 Report Walkthrough](https://www.aicpa-cima.com/cpe-learning/webcast/soc-2-report-walkthrough) | Offre affichée en 2026 | CUECs, CSOCs, opinion, inclusive/carve-out, exceptions, bridge letters | Sommaire public ; cours complet payant |
| [ISO — ISO/IEC 27001:2022](https://www.iso.org/standard/27001) | Édition 3, octobre 2022 | Exigences d'un SMSI | Résumé/statut publics ; norme complète payante |
| [ISO — ISO/IEC 27017:2015](https://www.iso.org/standard/43757.html) | Édition 1, décembre 2015 | Contrôles cloud fournisseur/client | Publiée mais annoncée à remplacer |
| [ISO — ISO/IEC 27017 édition 2](https://www.iso.org/standard/82878.html) | Édition 2, juillet 2026 | Future révision cloud | Encore « Under publication [60.00] » au jour de consultation |
| [ISO — ISO/IEC 27018:2025](https://www.iso.org/standard/27018) | Édition 3, août 2025 | PII dans le cloud public agissant comme processor | Résumé/statut publics ; norme complète payante |
| [ISO — ISO/IEC 27701:2025](https://www.iso.org/standard/27701) | Édition 2, octobre 2025 | PIMS pour controller et processor | Résumé/statut publics ; norme complète payante |
| [CSA — CCM et CAIQ 4.1](https://cloudsecurityalliance.org/artifacts/cloud-controls-matrix-v4-1) | 27 janvier 2026 | 207 contrôles, 17 domaines | Accessible |
| [CSA — STAR](https://cloudsecurityalliance.org/star/) | Page active en 2026 | Levels 1 et 2, attestation, certification, cycles | Accessible |
| [NIST — SP 1326](https://csrc.nist.gov/pubs/sp/1326/final) | Final du 8 juillet 2026 | Due diligence, provenance, résilience, SBOM, sous-tiers | Page et PDF officiels accessibles |
| [NIST — SP 1305](https://csrc.nist.gov/pubs/sp/1305/final) | Final du 21 octobre 2024 | C-SCRM avec le CSF 2.0 | Accessible |
| [NIST — Enhanced Vendor Risk Assessments](https://www.nist.gov/itl/executive-order-14028-improving-nations-cybersecurity/software-supply-chain-security-guidance-21) | Mis à jour le 1er novembre 2024 | Assurance graduée, flow-down, build, signatures | Accessible ; contexte initial fédéral américain |

## 12. Derniers garde-fous avant publication

- Recontrôler le statut de la procédure Digital Omnibus.
- Recontrôler le statut de publication d'ISO/IEC 27017 édition 2.
- Ne pas appliquer le Data Act à un contrat historique sans réserve.
- Ne pas transformer un code volontaire CISA ou britannique en label.
- Ne pas présenter CAE comme une certification.
- Ne pas appeler SOC 2 une certification du produit.
- Ne pas assimiler STAR Level 1 à un audit.
- Ne pas promettre la conformité RGPD à partir d'une norme ISO.
- Ne pas transformer le SBOM en score de sécurité.
- Dater toutes les preuves, préciser le produit et rendre les exceptions
  visibles.
- Faire valider les formulations juridiques par le conseil compétent lorsqu'un
  contrat réel, un secteur réglementé ou une sanction potentielle est en jeu.

