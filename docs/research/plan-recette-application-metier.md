# Dossier de recherche — Plan de recette d’une application métier

> Slug cible : `plan-recette-application-metier`
> Passage : P4 — antipasse IA
> Date de gel du corpus : 30 juillet 2026
> Statut éditorial visé : `ready-for-human-review`
> Publication : **non autorisée dans ce passage**

## 0. Règle de travail et état de la route

La route n’existait pas au début de la passe. Avant toute création, quatre
états ont été comparés :

1. checkout actif : aucun fichier du slug ;
2. `origin/main` : aucun fichier du slug ;
3. historique Git toutes branches : aucun commit portant ce chemin ;
4. URL publique :
   `https://hagnere-code.ai/guides/plan-recette-application-metier` répondait
   HTTP 404 le 30 juillet 2026.

La décision est donc une **création neuve**, sans restauration possible.

La thèse éditoriale retenue est :

> Une recette utile ne demande pas « est-ce que cela marche ? ». Elle relie un
> besoin métier à un état de départ, des données représentatives, une action,
> un résultat attendu observable, un résultat obtenu et une preuve. La décision
> finale reste humaine et contractuelle ; un taux de réussite ne doit pas
> masquer les cas critiques non exécutés ni les anomalies ouvertes.

L’artefact propre au guide est appelé **chaîne de preuve de recette**. Il ne
constitue ni une norme, ni un procès-verbal juridique universel, ni un audit du
logiciel réel.

## A. Identité

```text
Slug : plan-recette-application-metier
Requête principale : plan recette application métier
Variantes : cahier de recette logiciel ; plan de tests recette ; cas de recette application ; test d’acceptation utilisateur
Moment du parcours : avant une livraison, une mise à disposition ou une décision d’acceptation
Lecteur précis : dirigeant, responsable métier, product owner ou chef de projet d’une PME qui doit organiser la recette d’un logiciel sans être testeur professionnel
Situation déclenchante : le prestataire annonce que la version est prête, mais personne ne sait exactement quoi vérifier ni ce qui autorise la décision
Décision principale après lecture : ouvrir la campagne, réécrire les cas, corriger avant décision, examiner le risque résiduel ou soumettre un dossier complet au décideur
Niveau de connaissance au départ : métier maîtrisé ; vocabulaire de test variable
Action utile sans contact commercial : relire un cas et une campagne dans l’outil local
CTA possible : faire cadrer le périmètre, les preuves et les responsabilités
Hors périmètre : conseil juridique, audit de sécurité, audit d’accessibilité, certification ISO/ISTQB, garantie d’absence de défaut, modèle de PV applicable à tout contrat
Date de la recherche : 30 juillet 2026
Responsable de la synthèse : passe P1 du second orchestrateur
```

### Empreinte éditoriale retenue

- réponse directe dans les 150 premiers mots ;
- neuf sections, organisées comme une campagne et non comme une checklist
  décorative ;
- vocabulaire de dirigeant : version, besoin, parcours, résultat, preuve,
  anomalie, décision ;
- un cas entièrement fictif de facturation d’une intervention ;
- un outil local sans champ libre, sans score moyen et sans envoi de données ;
- une sortie à sept verdicts conservateurs ;
- six maillons du cas et deux garde-fous de campagne non compensables ;
- trois visuels éditoriaux représentant la chaîne besoin → cas → preuve →
  décision ;
- une frontière explicite entre recette métier, tests techniques, sécurité,
  accessibilité et conséquences contractuelles.

## B. Contrat de réponse

### Réponse courte

Un plan de recette se rédige avant la livraison. Chaque cas doit identifier :

1. le besoin ou la règle métier vérifiée ;
2. la version et l’environnement testés ;
3. l’acteur, ses droits et l’état de départ ;
4. les données nécessaires, y compris les limites et erreurs prévues ;
5. les actions exactes ;
6. le résultat attendu observable ;
7. le résultat obtenu et sa preuve ;
8. la personne qui exécute et la personne qui décide.

Les cas critiques passent d’abord. Les statuts « bloqué », « non exécuté » et
« preuve absente » restent distincts d’un succès. Une anomalie reçoit une
gravité liée à son impact ; sa priorité de correction est décidée séparément.
La décision finale documente ce qui a été testé, les limites et le risque
résiduel.

### Phrase réelle du lecteur

« Le prestataire dit que l’application est prête : qu’est-ce que je dois faire
tester avant de signer ou de la mettre entre les mains de l’équipe ? »

### Cinq questions indispensables

1. Quelle version exacte et quel environnement sont soumis à la recette ?
2. Quels besoins, parcours et risques doivent être prouvés ?
3. Avec quels rôles, états de départ et jeux de données les cas seront-ils
   rejoués ?
4. Quel résultat observable et quelle pièce établissent le verdict de chaque
   cas ?
5. Qui peut ouvrir la campagne, classer une anomalie et prononcer la décision
   finale ?

### Objections à traiter

- « Nous cliquerons dans toutes les pages. »
- « L’équipe technique a déjà testé, donc la recette est inutile. »
- « Un cas qui bloque à cause de l’environnement peut être ignoré. »
- « 95 % de tests réussis suffit forcément. »
- « Une capture d’écran suffit toujours comme preuve. »
- « Une anomalie mineure n’a jamais d’effet sur l’acceptation. »
- « Une anomalie différée ou une réserve peut disparaître des compteurs
  d’anomalies ouvertes. »
- « Si les cas critiques passent, le décideur et les critères de sortie peuvent
  être nommés après. »
- « La recette vaut automatiquement acceptation juridique. »

### Cas de refus, report ou validation professionnelle

- version ou périmètre non identifiés : ne pas ouvrir la campagne ;
- copie de données personnelles de production dans un environnement de
  développement ou de test : arrêter ; préparer des données fictives ou
  anonymisées et solliciter les responsables compétents si une vérification
  exceptionnelle paraît indispensable ;
- cas critique non exécuté ou résultat attendu subjectif : ne pas conclure ;
- anomalie bloquante ouverte : corriger ou appliquer la décision prévue avant de
  soumettre l’acceptation ;
- sécurité, accessibilité ou performance à enjeu : critères et compétences
  spécialisés nécessaires ;
- désaccord sur les effets de la recette, les réserves, le paiement ou la
  réception : relire les documents signés et demander un conseil juridique ;
- outil local au vert : seulement un **candidat à la décision**, jamais une
  acceptation automatique.

## C. Corpus interne et cannibalisation

| Page interne                                       | Intention                                                                       | Frontière du nouveau guide                                                                                                 | Lien retenu                                                                               |
| -------------------------------------------------- | ------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `/guides/reprendre-logiciel-metier-existant`       | savoir si une nouvelle équipe peut déployer, restaurer et maintenir un existant | la recette suppose que la solution à tester et son responsable sont connus ; elle prouve des besoins métier avant décision | lien contextuel si la capacité de reprise reste inconnue                                  |
| `/guides/migrer-logiciel-metier-sans-interruption` | préparer la source d’écriture, la fenêtre et le retour d’une bascule            | le présent guide porte sur les cas, données, résultats et anomalies ; il ne calcule pas une fenêtre de migration           | lien après la décision de recette, pour une mise en production avec changement de système |
| `/guides/automatiser-processus-metier`             | choisir un premier processus et un pilote                                       | le présent guide intervient quand un produit ou une version existe déjà                                                    | pas de duplication du calcul d’automatisation                                             |
| `/services/outils-internes-sur-mesure`             | présenter l’offre de conception d’outils                                        | le guide doit rester autonome et utile sans contact                                                                        | CTA seulement après la réponse                                                            |
| `/demarrer-un-projet`                              | qualifier une demande                                                           | recueillir le contexte commercial, pas exécuter une recette                                                                | destination du CTA                                                                        |

**Justification de l’URL distincte :** aucune page existante ne répond à la
question « comment transformer un besoin en preuve d’acceptation puis décider
avec les cas non exécutés et les anomalies visibles ? ».

### Liens refusés

- guides Google Ads ou SEO sans rapport avec la décision ;
- pages de prix qui détourneraient l’intention vers le budget ;
- téléchargement XLS, XLSX ou CSV ;
- faux lien vers une certification ou un audit non réalisé.

## D. Analyse externe

### D1. Demande et vocabulaire observés

Observation qualitative du 30 juillet 2026, sans prétention de volume :

- plan recette application métier ;
- cahier de recette logiciel exemple ;
- plan de test recette informatique ;
- cas de test résultat attendu résultat obtenu ;
- modèle fiche anomalie gravité priorité ;
- test d’acceptation utilisateur ;
- critères d’entrée et de sortie recette ;
- procès-verbal de recette avec réserves.

Le mot « recette » génère aussi de nombreux résultats culinaires. Le titre, le
H1, la description et les premières phrases doivent donc qualifier
immédiatement « application métier », « logiciel » et « test d’acceptation ».

### D2. Carte concurrentielle

Les pages ci-dessous servent uniquement à observer la réponse proposée. Elles
ne soutiennent aucun fait normatif du guide.

| Résultat observé                             | Réponse proposée                                                            | Bon point                                  | Manque décisionnel                                                                                                                | Conflit d’intérêt                |
| -------------------------------------------- | --------------------------------------------------------------------------- | ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| Contrôle Excel — modèle de cahier de recette | tableur, tests détaillés, statistiques et décision                          | matérialise les colonnes et la clôture     | téléchargement au centre, promesse « conforme RGPD » non démontrée dans l’extrait, score susceptible de masquer les cas critiques | vend ou distribue un modèle      |
| Test-recette.fr — organisation d’une recette | organisation, planning, qualification des anomalies                         | rappelle que la recette doit être préparée | peu de garde-fous sur l’état « non exécuté » et la preuve de décision                                                             | site spécialisé                  |
| Smartsheet — modèles de rapports d’anomalies | fiche avec environnement, reproduction, attendu/obtenu, gravité et priorité | champs de défaut utiles                    | traite surtout le suivi d’anomalie, pas le passage du besoin au verdict d’acceptation                                             | vend un outil                    |
| Formations et extraits de cours              | plan, scénarios, rôles, journal d’anomalies                                 | vocabulaire structuré                      | réponse parfois scolaire, ancienne ou sans outil autonome pour un dirigeant                                                       | vend une formation ou un ouvrage |
| Pages génériques de recette finale           | scénarios bout en bout puis cas spécifiques                                 | donne un ordre pragmatique                 | règles d’acceptation et sources rarement distinguées du conseil                                                                   | contenu d’acquisition            |

### D3. Angle mort commun et valeur originale

L’angle mort est la **chaîne de preuve**. Les modèles listent des colonnes ou
calculent un taux, mais expliquent rarement :

- comment reconnaître un résultat attendu réellement observable ;
- pourquoi un cas « bloqué » n’est ni réussi ni échoué ;
- comment choisir des données représentatives sans copier machinalement la
  production ;
- pourquoi la gravité et la priorité sont deux informations différentes ;
- pourquoi tous les cas critiques doivent être visibles indépendamment du taux
  global ;
- comment formuler une décision candidate sans promettre un effet juridique.

Le guide apporte un relecteur local qui refuse de compenser un manque de preuve
par les autres réponses.

## E. Corpus primaire retenu

Les dates de publication et de consultation sont distinguées.

| ID  | Source primaire                                                                                                                           | Passage utile paraphrasé                                                                                                                                                                                                                    | Usage et limite                                                                                                          | Date                                                                          |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------- |
| S1  | [ISTQB — Certified Tester Foundation Level, syllabus v4.0.1](https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf) | l’acceptation valide les besoins métier et la préparation au déploiement ; elle devrait idéalement impliquer les utilisateurs visés ; analyse, conception et exécution relient objet, données, attendu et obtenu                            | socle pédagogique de test ; ce syllabus n’est ni la loi ni la preuve qu’un projet est certifié                           | version du 15/09/2024, consultée le 30/07/2026                                |
| S2  | [ISO/IEC/IEEE 29119-2:2021](https://www.iso.org/standard/79428.html)                                                                      | l’abstract public décrit des processus génériques pour gouverner, gérer et mettre en œuvre les tests, quel que soit le cycle de développement                                                                                               | seule la présentation publique a été consultée ; le texte complet est payant                                             | édition 2, 10/2021, consultée le 30/07/2026                                   |
| S3  | [ISO/IEC/IEEE 29119-3:2021](https://www.iso.org/standard/79429.html)                                                                      | l’abstract public annonce des modèles de documentation de test applicables aux organisations et projets, en sortie des processus de la partie 2                                                                                             | ne pas attribuer à la norme des champs détaillés non visibles dans l’abstract                                            | édition 2, 10/2021, consultée le 30/07/2026                                   |
| S4  | [ISO/IEC 25010:2023](https://www.iso.org/standard/78176.html)                                                                             | le modèle de qualité produit comprend neuf caractéristiques et peut aider à identifier objectifs de test et critères d’acceptation                                                                                                          | référence pour élargir le questionnement au-delà des fonctions ; ne pas reproduire le contenu payant                     | édition 2, 11/2023, consultée le 30/07/2026                                   |
| S5  | [CNIL — Tester vos applications](https://www.cnil.fr/fr/tester-vos-applications)                                                          | définir conjointement les métriques avant le développement ; ne pas utiliser les données personnelles de production pendant le développement et le test ; construire un jeu fictif représentatif et anonymiser les configurations importées | recommandations orientées données personnelles et développement ; la fiche ne fournit pas de dérogation prête à l’emploi | page du 27/01/2020, consultée le 30/07/2026                                   |
| S6  | [CNIL — Encadrer les développements informatiques](https://www.cnil.fr/fr/securite-encadrer-les-developpements-informatiques)             | tests unitaires, d’intégration, fonctionnels et de sécurité avant mise à disposition ou mise à jour ; environnements distincts ; données fictives ou anonymisées ; non-régression ou revue avant mise en production d’une mise à jour       | cadre de sécurité et protection des données ; les données personnelles réelles sont exclues autant que possible          | page du 14/03/2024, consultée le 30/07/2026                                   |
| S7  | [W3C WAI — Evaluating Web Accessibility](https://www.w3.org/WAI/test-evaluate/)                                                           | évaluer tôt et pendant le développement ; aucun outil ne suffit seul à établir la conformité ; une évaluation humaine compétente reste nécessaire                                                                                           | utilisé pour empêcher qu’une recette fonctionnelle ou un scan automatique soit présenté comme audit d’accessibilité      | consulté le 30/07/2026                                                        |
| S8  | [W3C WAI — Template for Accessibility Evaluation Reports](https://www.w3.org/WAI/test-evaluate/report-template/)                          | le rapport identifie notamment périmètre, évaluateurs, processus, résultats, actions, références et annexes                                                                                                                                 | exemple spécialisé de traçabilité ; ce n’est pas le modèle générique du guide                                            | contenu substantiel 2002, liens mis à jour en 04/2024, consulté le 30/07/2026 |
| S9  | [OWASP — Application Security Verification Standard](https://owasp.org/www-project-application-security-verification-standard/)           | l’ASVS fournit une base de vérification des contrôles techniques de sécurité des applications web et recommande de versionner les références                                                                                                | catalogue spécialisé facultatif ; ne transforme pas un responsable métier en auditeur sécurité                           | version stable 5.0.0 annoncée le 30/05/2025, consultée le 30/07/2026          |

## F. Registre des affirmations

| ID  | Affirmation prévue                                                                                                                                                                                                   | Source                             | Portée                  | Réserve à afficher                                                                                              |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- | ----------------------- | --------------------------------------------------------------------------------------------------------------- |
| F1  | la recette vise à valider les besoins métier et la préparation au déploiement                                                                                                                                        | S1                                 | acceptation logicielle  | ne prouve pas l’absence de défaut                                                                               |
| F2  | les utilisateurs visés devraient idéalement participer à la recette                                                                                                                                                  | S1                                 | recommandation          | rôles adaptés au contexte                                                                                       |
| F3  | le plan précise objectifs, périmètre, rôles, risques, approche, critères d’entrée/sortie, données, environnement et calendrier                                                                                       | S1                                 | contenu typique         | pas un formulaire obligatoire universel                                                                         |
| F4  | les critères d’entrée sont des préconditions et les critères de sortie décrivent ce qui doit être atteint                                                                                                            | S1                                 | vocabulaire de test     | à adapter au niveau de test                                                                                     |
| F5  | l’exécution compare le résultat obtenu au résultat attendu et consigne le résultat                                                                                                                                   | S1                                 | activité de test        | la preuve utile dépend du cas                                                                                   |
| F6  | la traçabilité relie besoins, risques, cas, résultats et anomalies                                                                                                                                                   | S1                                 | pilotage et impact      | ne se réduit pas à un identifiant décoratif                                                                     |
| F7  | les cas peuvent être priorisés par risque, couverture ou priorité du besoin                                                                                                                                          | S1                                 | ordre d’exécution       | dépendances et ressources peuvent modifier l’ordre                                                              |
| F8  | une fiche d’anomalie utile distingue attendu, obtenu, contexte, reproduction, preuve, gravité, priorité et statut                                                                                                    | S1                                 | contenu typique         | gravité et priorité ne sont pas interchangeables                                                                |
| F9  | finir faute de temps n’équivaut pas à satisfaire les critères de sortie ; le risque restant doit être examiné et accepté par les parties prenantes                                                                   | S1                                 | décision de test        | ne pas convertir en règle contractuelle française                                                               |
| F10 | ISO 29119-3 propose des modèles de documentation de test                                                                                                                                                             | S3                                 | abstract public         | aucun champ détaillé attribué à la norme                                                                        |
| F11 | ISO 25010 peut aider à identifier des objectifs et critères de qualité au-delà des seules fonctions                                                                                                                  | S4                                 | modèle de qualité       | critères à sélectionner selon le produit réel                                                                   |
| F12 | pour les données personnelles, la CNIL demande de ne pas copier la production en développement/test et de travailler sur un environnement distinct avec des données fictives ou anonymisées                          | S5, S6                             | développement et test   | une vérification exceptionnelle se qualifie avec les responsables compétents ; le guide ne crée pas d’exemption |
| F13 | un test fonctionnel ne remplace pas les tests techniques, de sécurité, de non-régression ou l’évaluation d’accessibilité                                                                                             | S1, S6, S7                         | frontière de la recette | compétences spécialisées selon les enjeux                                                                       |
| F14 | aucun outil automatique ne suffit à établir à lui seul la conformité d’accessibilité                                                                                                                                 | S7                                 | accessibilité web       | ne pas généraliser à toutes les qualités                                                                        |
| F15 | ASVS 5.0.0 peut servir de base versionnée pour des exigences de sécurité web                                                                                                                                         | S9                                 | sécurité web            | exemple, pas obligation générale                                                                                |
| F16 | le verdict de l’outil Hagnéré est une méthode éditoriale conservatrice                                                                                                                                               | création interne                   | aide à la décision      | pas norme, certification ou acceptation juridique                                                               |
| F17 | les critères de sortie peuvent inclure couverture, défauts non résolus, cas échoués ou exécution des tests prévus ; faute de temps ou de budget, les parties prenantes doivent encore examiner et accepter le risque | S1                                 | fin d’activité de test  | ne pas transformer cette possibilité en clause contractuelle universelle                                        |
| F18 | un rapport de fin conserve les écarts au plan, obstacles, risques non atténués et défauts non corrigés                                                                                                               | S1                                 | rapport de test         | le format dépend du public et du projet                                                                         |
| F19 | une anomalie dite « mineure » mais à fort impact métier, réglementaire ou utilisateur doit voir sa gravité réexaminée ; une vraie gravité mineure peut néanmoins recevoir une priorité élevée                        | S1 + déduction éditoriale          | classification          | gravité et priorité gardent deux justifications distinctes                                                      |
| F20 | un échec non encore classé comme anomalie et une réserve ou dérogation en attente doivent rester visibles dans le relevé                                                                                             | déduction éditoriale fondée sur S1 | anti-faux-vert          | ne pas compter deux fois le même écart dans un score                                                            |
| F21 | un dossier candidat exige des critères de sortie, les contrôles spécialisés nécessaires, un décideur nommé et les documents réels applicables                                                                        | recommandation                     | aide à la décision      | l’outil ne détermine ni la portée ni l’effet du contrat                                                         |

### Contradictions et données à ne pas publier

- aucun nombre universel de cas de test ;
- aucun seuil universel de réussite ;
- aucun délai type de recette ;
- aucune promesse que « zéro anomalie » signifie « logiciel correct » ;
- aucune formule « 95 % = accepté » ;
- aucune règle universelle bloquant automatiquement toute anomalie majeure ou
  autorisant toute anomalie mineure ;
- aucune gravité conservée comme « mineure » lorsque l’impact métier observé
  impose de la requalifier ;
- aucune affirmation qu’une capture d’écran est toujours la meilleure preuve ;
- aucune copie de données personnelles de production présentée comme normale ou
  couverte par une exception implicite ;
- aucun dossier candidat si le décideur, les critères de sortie ou les
  validations spécialisées nécessaires restent inconnus ;
- aucun échec, défaut différé, réserve ou dérogation en attente effacé parce
  qu’il n’entre pas dans le compteur des anomalies « ouvertes » ;
- aucun effet juridique automatique prêté au guide ;
- aucune conformité RGPD, WCAG, ISO, OWASP ou ISTQB revendiquée ;
- aucune donnée d’un vrai client ;
- aucun prix ou durée inventé.

## G. Méthode éditoriale : la chaîne de preuve de recette

### G1. Six maillons du cas et deux garde-fous de campagne

| Point                        | Question de relecture                                                                              | Exemple de preuve                                                 |
| ---------------------------- | -------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| Besoin traçable              | quelle règle, quel parcours ou quel risque ce cas vérifie-t-il ?                                   | identifiant et formulation métier                                 |
| Version et environnement     | quelle version, configuration, dépendance et environnement ont été testés ?                        | identifiant de livraison, services et environnement               |
| Acteur et état de départ     | qui agit, avec quels droits et depuis quelle situation ?                                           | rôle, préconditions, données déjà présentes                       |
| Données représentatives      | quelles valeurs normales, limites, interdites ou absentes sont nécessaires ?                       | jeu fictif versionné et règle de construction                     |
| Action et attendu observable | quelles étapes et quel résultat constatable permettent de conclure ?                               | valeur enregistrée, état, message ou délai mesuré                 |
| Exécution et preuve          | qui a exécuté, quand, quel résultat a été obtenu et où est la pièce ?                              | journal, capture contextualisée, export contrôlé ou trace adaptée |
| Périmètre et sortie          | inclusions, exclusions, critères de sortie et contrôles spécialisés sont-ils écrits et attribués ? | plan, risques, critères et responsables                           |
| Décideur et procédure réelle | qui peut décider et quels contrat, devis ou procédure s’appliquent réellement ?                    | autorité nommée et documents identifiés                           |

Chaque point reçoit un état :

- `unknown` : non renseigné ;
- `partial` : présent mais insuffisant pour rejouer et conclure ;
- `ready` : explicite et vérifiable ;
- `blocked` : impossible à préparer ou exécuter dans l’état.

Un point plus favorable ne compense jamais un point manquant.

### G2. Données de campagne demandées par l’outil

- nombre de cas critiques prévus : entier strictement positif ;
- nombre de cas critiques réussis : entier compris entre zéro et le total ;
- cas échoués, même avant classement en anomalie : entier positif ou nul ;
- anomalies bloquantes ouvertes : entier positif ou nul ;
- anomalies majeures ouvertes : entier positif ou nul ;
- anomalies mineures ouvertes : entier positif ou nul ;
- réserves, dérogations ou anomalies différées à décider : entier positif ou
  nul ;
- cas bloqués : entier positif ou nul ;
- cas non exécutés : entier positif ou nul ;
- cas sans preuve exploitable : entier positif ou nul.

L’outil n’utilise pas de pourcentage, ne collecte aucun texte métier et ne
stocke ni n’envoie les réponses.

### G3. Précédence des verdicts

1. au moins un point `blocked` → `STOP_PREPARATION` ;
2. sinon au moins un `unknown` → `REWRITE_CASE` ;
3. sinon au moins un `partial` → `COMPLETE_CASE` ;
4. sinon donnée numérique absente, invalide ou incohérente →
   `MEASURE_CAMPAIGN` ;
5. sinon anomalie bloquante ouverte ou cas critique non réussi →
   `FIX_BEFORE_DECISION` ;
6. sinon cas échoué, anomalie majeure ou mineure ouverte, réserve ou dérogation
   à décider, cas bloqué/non exécuté ou preuve absente →
   `REVIEW_RESIDUAL_RISK` ;
7. sinon → `CANDIDATE_FOR_ACCEPTANCE`.

Le dernier verdict signifie uniquement que le dossier peut être soumis au
décideur nommé. Il n’accepte rien automatiquement.

Cette précédence organise la lecture de l’outil, pas la réponse à un incident.
Une alerte de sécurité, juridique ou d’intégrité déjà connue suit immédiatement
son circuit d’escalade, même si un point précédent reste `unknown` ou `partial`.

### G4. Cas entièrement fictif

PME fictive : société de maintenance de pompes, application fictive « Atelier
Nord ». Parcours critique :

1. un technicien clôt une intervention ;
2. le responsable valide les pièces et le temps ;
3. l’application calcule un montant ;
4. une facture brouillon est créée une seule fois ;
5. le statut de l’intervention devient « prête à facturer » ;
6. les droits empêchent le technicien de modifier le tarif après validation.

Données fictives choisies :

- déplacement : 40,00 € ;
- deux heures à 70,00 € ;
- une pièce à 25,00 € ;
- total hors taxes attendu : 205,00 € ;
- cas limite associé : aucune pièce ;
- cas négatif associé : technicien sans droit de modification du tarif.

Le montant est un calcul illustratif :

```text
40,00 + (2 × 70,00) + 25,00 = 205,00 €
```

Il ne représente ni un tarif Hagnéré Code ni un vrai dossier client.

### G5. Gravité, priorité et statut

- **gravité** : degré d’impact observé sur le métier, les personnes, les
  exigences ou le système ;
- **priorité** : ordre dans lequel l’équipe décide de traiter ;
- **statut** : position de l’anomalie dans son cycle de traitement.

Exemple fictif : une faute d’orthographe visible sur toutes les factures peut
avoir une gravité mineure mais une priorité élevée avant une démonstration. À
l’inverse, une anomalie majeure sur un parcours non encore ouvert peut recevoir
une priorité de correction planifiée, sans réduire sa gravité.

Contre-cas P2 : si l’écart qualifié « mineur » affecte en réalité un montant,
une obligation, l’accessibilité, la sécurité ou un grand nombre
d’utilisateurs, sa gravité doit être réexaminée. Une priorité élevée ne
répare pas une gravité sous-évaluée ; les deux décisions restent séparées.

## H. Plan annoté

1. **Réponse courte** — donner la chaîne complète et retirer le faux confort du
   taux de réussite.
2. **Ouvrir la campagne** — version, périmètre, responsables, critères d’entrée
   et de sortie.
3. **Écrire un cas rejouable** — besoin, préconditions, actions, attendu et
   preuve.
4. **Construire les données et les rôles** — normal, limite, interdit, absent ;
   données fictives et droits.
5. **Couvrir sans tout tester** — parcours critiques, règles, erreurs,
   interfaces, qualités pertinentes ; priorisation par risque.
6. **Utiliser l’outil** — relire les six maillons, les deux garde-fous et la
   campagne sans données confidentielles.
7. **Suivre les anomalies** — attendu/obtenu, reproduction, preuve, gravité,
   priorité, statut, retest et non-régression.
8. **Cas fictif complet** — de la règle métier à la décision, calcul vérifiable.
9. **Décider et conserver la preuve** — refus/correction, risque résiduel,
   candidat à la décision ; limites contractuelles et prochaines étapes.

## I. Ressource, conversion et frontière commerciale

### Ressource autonome

- modèle de cas visible directement dans le guide ;
- outil interactif local ;
- relevé final copiable sous forme de texte dans la page ;
- aucun téléchargement tableur ;
- aucun formulaire ou mur d’email ;
- aucune donnée confidentielle demandée.

### CTA

**Faire cadrer mon plan de recette**

Entrées attendues :

- périmètre fonctionnel ;
- version prévue ;
- parcours critiques ;
- rôles disponibles ;
- environnements et interfaces ;
- critères contractuels déjà écrits ;
- inconnues explicitement conservées.

La promesse porte sur un cadrage, pas sur une garantie de conformité ou
d’acceptation.

## J. Contrat de l’outil et stratégie de test

### Fonctions pures

- `createEmptyAcceptanceGates()`
- `createEmptyCampaignFacts()`
- `assessAcceptanceReadiness(gates, facts)`

### Garanties

- priorité conservatrice des verdicts ;
- toute valeur runtime inconnue devient `unknown` ou donnée manquante ;
- huit points non compensables avant toute issue candidate ;
- compteurs entiers seulement ;
- total critique strictement positif ;
- réussite critique jamais supérieure au total ;
- cas échoués et réserves en attente visibles même avant ou hors classement
  d’une anomalie ouverte ;
- aucun calcul de pourcentage ;
- aucun accès réseau, stockage local ou champ libre ;
- aucune décision automatique d’acceptation.

### Tests prévus

- 65 536 combinaisons des huit points ;
- distribution indépendante des verdicts de maillons ;
- chaque valeur numérique invalide sur chaque champ ;
- valeurs extrêmes sûres et valeurs runtime non finies, enveloppées, symboliques
  ou hors précision ;
- chaque champ numérique omis ;
- incohérence `réussis > prévus` ;
- frontières `réussis = prévus` et `réussis = prévus - 1` ;
- précédence d’un blocage de préparation sur toute campagne verte ;
- précédence d’un cas critique manquant sur les anomalies résiduelles ;
- chaque compteur résiduel testé séparément ;
- sept verdicts testés dans leur ordre de précédence documenté ;
- résultat vert explicitement « candidat » et décidé humainement.

## K. Spécification des visuels

Trois compositions SVG rendues aussi en WebP :

| Ratio |  Dimensions | Usage                    | Contenu                                                          |
| ----- | ----------: | ------------------------ | ---------------------------------------------------------------- |
| 16:9  |  1600 × 900 | article et partage large | chaîne besoin → cas → preuve → décision, avec embranchement STOP |
| 4:3   |  1200 × 900 | carte et article         | même système resserré, texte lisible sans recadrage              |
| 1:1   | 1000 × 1000 | carte carrée             | chaîne verticale et quatre statuts                               |

Contraintes :

- texte français ;
- couleurs distinctes et contraste suffisant ;
- aucun faux écran client ;
- aucun logo tiers ;
- aucune donnée confidentielle ;
- alt text fourni par la page ;
- WebP générés à partir des SVG sources.

## L. Handoff des fichiers partagés — ne pas appliquer en P1

L’orchestrateur pourra intégrer après les quatre passes :

```ts
{
  slug: "plan-recette-application-metier",
  title: "Plan de recette d’une application métier : méthode",
  cardTitle: "Plan de recette d’une application métier",
  metaDescription:
    "Écrivez des cas de recette rejouables, préparez les données, classez les anomalies et décidez sans masquer les tests critiques non exécutés.",
  cardDescription:
    "Une chaîne de preuve, un cas fictif et un outil local pour passer du besoin métier à une décision documentée.",
  heroTitle:
    "Plan de recette d’une application métier : prouver avant d’accepter",
  section: "Outils internes et automatisation",
  datePublished: null,
  dateModified: null,
  readTimeMin: 18,
  articleImagePaths: [
    "/guides/plan-recette-application-metier/recette-preuve-16x9.webp",
    "/guides/plan-recette-application-metier/recette-preuve-4x3.webp",
    "/guides/plan-recette-application-metier/recette-preuve-1x1.webp",
  ],
  editorialStatus: "ready-for-human-review",
}
```

`datePublished` et `dateModified` restent volontairement `null` dans ce
handoff : l’orchestrateur doit utiliser l’instant réel de l’intégration, jamais
une heure inventée par la passe.

Maillage proposé après validation :

- guide 19 → seulement si le logiciel doit d’abord devenir reprenable ;
- guide 20 → seulement lorsque la recette alimente une bascule ;
- hub → carte noindex tant que le verdict final manque ;
- sitemap et `llms.txt` → dérivés du registre central, jamais édités ici.

## M. Journal des quatre passes

| Passe | Agent attendu               | Snapshot d’entrée | Sortie                                            | Porte |
| ----- | --------------------------- | ----------------- | ------------------------------------------------- | ----- |
| P1    | création complète           | route absente     | recherche, page, outil, tests, visuels, manifeste | G1    |
| P2    | vérification contradictoire | manifeste P1      | faits, contrepoints, tests limites, corrections   | G2    |
| P3    | polish rédactionnel         | manifeste P2      | naturel, rythme, transitions, compréhension       | G3    |
| P4    | antipasse IA                | manifeste P3      | audit des motifs, contrôles et verdict            | G4    |

Toute correction après verdict invalide le verdict et impose un nouveau
contrôle.

## N. Rapport P1 — création complète

### Corpus inventorié

- route, recherche et actifs absents du checkout, de `origin/main` et de
  l’historique ;
- URL publique 404 ;
- guides 19, 20 et automatisation utilisés pour fixer les frontières, pas pour
  réutiliser leur architecture ;
- service « outils internes » conservé comme sortie commerciale secondaire ;
- résultats de recherche français classés en modèles, organisation, fiches
  d’anomalie et formations ;
- neuf sources primaires retenues avec limites.

### Créations du snapshot P1

- `docs/research/plan-recette-application-metier.md`
- `src/app/guides/plan-recette-application-metier/page.tsx`
- `src/app/guides/plan-recette-application-metier/opengraph-image.tsx`
- `src/app/guides/plan-recette-application-metier/acceptance-readiness.ts`
- `src/app/guides/plan-recette-application-metier/acceptance-readiness-tool.tsx`
- `src/app/guides/plan-recette-application-metier/acceptance-readiness.test.ts`
- `src/app/guides/plan-recette-application-metier/content-quality.test.ts`
- trois SVG et trois WebP dédiés ;
- manifeste P1 exact.

### Validations P1

| Contrôle                                 | Résultat                                                                                 |
| ---------------------------------------- | ---------------------------------------------------------------------------------------- |
| Tests du moteur et garde-fous éditoriaux | 2 fichiers, 48 tests réussis                                                             |
| Combinaisons des six maillons            | 4 096 recalculées ; distribution vérifiée                                                |
| Lint ciblé du slug                       | réussi sans avertissement                                                                |
| TypeScript du dépôt                      | `npx tsc --noEmit --pretty false` réussi                                                 |
| SVG                                      | trois fichiers valides avec `xmllint --noout`                                            |
| WebP                                     | 1600 × 900, 1200 × 900 et 1000 × 1000 vérifiés                                           |
| Inspection visuelle                      | trois ratios relus ; textes, flèches, contraste et absence de recadrage gênant contrôlés |

### P0 / P1 à la sortie

- P0 intrinsèque au snapshot : aucun ;
- P1 intrinsèque au snapshot : aucun ;
- dépendance d’intégration attendue : le build de la route exigera l’entrée du
  slug dans `src/lib/guides.ts`, fichier partagé réservé à l’orchestrateur ;
- contrôles volontairement réservés aux portes suivantes : vérification
  contradictoire, polish distinct, antipasse IA, navigateur puis contrôle
  transversal ;
- frontière conservée : les conséquences contractuelles se vérifient sur les
  documents réels et ne sont jamais déduites du guide.

### Statut

`PASSE_1_TERMINEE`

## O. Rapport P2 — vérification contradictoire

### Agent, entrée et périmètre

- agent : `/root/recette_p2_counteraudit` ;
- entrée : manifeste
  `docs/research/manifests/plan-recette-application-metier-p1.sha256`
  vérifié avant modification, 13 fichiers sur 13 ;
- fichiers propres relus : recherche, page, moteur, outil, tests, OG, trois SVG
  et trois WebP ;
- fichiers propres modifiés : recherche, page, moteur, outil et deux fichiers de
  tests ;
- fichiers partagés, registre, verrous et Git : non modifiés ;
- guides 19 et 20 relus par intention : la reprise prouve qu’une autre équipe
  peut opérer l’existant ; la migration organise la bascule ; le présent guide
  prouve les besoins avant la décision. Aucun chevauchement de décision
  découvert.

### Sources primaires rouvertes le 30 juillet 2026

- ISTQB CTFL v4.0.1 : acceptation, activités de test, traçabilité, contenu d’un
  plan, critères d’entrée et de sortie, priorisation, rapports de fin et
  anomalies ;
- ISO/IEC/IEEE 29119-2:2021 et 29119-3:2021 : statut publié, portée des
  processus et modèles documentaires limitée aux abstracts publics ;
- ISO/IEC 25010:2023 : neuf caractéristiques et usages possibles pour les
  objectifs de test, la mesure et les critères d’acceptation ;
- CNIL, fiches du 27 janvier 2020 et du 14 mars 2024 : environnements séparés,
  données personnelles de production à ne pas utiliser en développement/test,
  jeux fictifs ou anonymisés, tests de sécurité et non-régression ;
- W3C WAI : aucun outil seul ne détermine la conformité d’accessibilité ;
  évaluation humaine compétente nécessaire ;
- OWASP ASVS : version stable 5.0.0, publiée le 30 mai 2025, base de contrôles
  techniques de sécurité web à référencer avec son numéro de version.

Les 21 affirmations du registre ont été contrôlées ou requalifiées. Aucun
contenu payant ISO n’a été attribué à tort aux abstracts publics.

### Failles contradictoires et corrections décisives

1. **Critères et autorité absents de l’outil.** Le snapshot P1 pouvait produire
   `CANDIDATE_FOR_ACCEPTANCE` sans critères de sortie, contrôles spécialisés,
   décideur ni procédure contractuelle réelle. Deux garde-fous non compensables
   ont été ajoutés.
2. **Échec non classé invisible.** Un cas échoué pouvait disparaître si aucune
   anomalie n’avait encore été créée. Le compteur `failedCases` conduit
   désormais à `REVIEW_RESIDUAL_RISK`.
3. **Défaut différé ou réserve invisible.** Les seuls compteurs d’anomalies
   « ouvertes » ne couvraient pas une dérogation, une réserve ou une anomalie
   différée en attente. `pendingReservations` conserve cette information.
4. **Portée CNIL trop permissive.** « Pas par défaut » a été remplacé par la
   frontière exacte pour les données personnelles de production en
   développement/test. Une vérification exceptionnelle n’est jamais présentée
   comme une dérogation créée par le guide.
5. **Gravité sous-évaluée.** Une anomalie étiquetée « mineure » mais à fort
   impact doit être reclassée avant de discuter sa priorité. Une vraie gravité
   mineure peut encore recevoir une priorité élevée ; les deux justifications
   restent séparées.
6. **Incident spécialisé masqué par l’ordre de l’outil.** Les sept verdicts
   conservent leur ordre de préparation, mais une alerte de sécurité, juridique
   ou d’intégrité connue doit suivre immédiatement son circuit d’escalade.
7. **Faux vert par compensation.** Les huit points restent non compensables ;
   échec, cas bloqué, non exécuté, preuve absente et réserve restent visibles
   même lorsque tous les cas critiques déclarés sont réussis.

### Calculs, valeurs runtime et précédence

- calcul fictif reproduit :
  `40,00 + (2 × 70,00) + 25,00 = 205,00 € HT` ;
- `4^8 = 65 536` combinaisons des huit points recalculées ;
- distribution indépendante :
  `58 975 STOP_PREPARATION`, `6 305 REWRITE_CASE`,
  `255 COMPLETE_CASE`, `1 CANDIDATE_FOR_ACCEPTANCE` ;
- les sept verdicts ont chacun un scénario et leur précédence est testée ;
- vides, chaînes, booléens, tableaux, objets, fonctions, symboles, nombres
  enveloppés, décimales, négatifs, non-finis, hors précision et
  `Number.MAX_VALUE` sont refusés ;
- `Number.MAX_SAFE_INTEGER` reste accepté sans débordement : différence zéro ou
  un conservée exactement ;
- le premier contrôle TypeScript a refusé un littéral `BigInt` dans le test,
  incompatible avec la cible du dépôt ; cette valeur de test a été retirée,
  les autres classes runtime ont été conservées, puis TypeScript a été rejoué
  avec succès.

### Validations P2

| Contrôle                     | Résultat                                                    |
| ---------------------------- | ----------------------------------------------------------- |
| Tests ciblés                 | 2 fichiers, 52 tests réussis                                |
| Combinaisons des huit points | 65 536 recalculées ; distribution vérifiée                  |
| Sept verdicts                | ordre complet exercé                                        |
| ESLint ciblé                 | réussi sans avertissement                                   |
| TypeScript du dépôt          | `npx tsc --noEmit --pretty false` réussi après correction   |
| Prettier                     | tous les fichiers P2 conformes                              |
| Calcul fictif                | 205,00 € HT reproduit                                       |
| SVG / WebP                   | non modifiés ; empreintes P1 conservées                     |
| Manifeste P2                 | 13 fichiers, manifeste lui-même exclu, contrôle à la sortie |

### Risques résiduels

- l’outil repose sur des déclarations : un zéro mensonger ou un périmètre
  incomplet ne peut pas être détecté automatiquement ;
- la nécessité exceptionnelle de données personnelles réelles, la portée du
  contrat et les contrôles sécurité, accessibilité ou performance restent à
  qualifier sur le projet réel par les personnes compétentes ;
- la passe P3 doit préserver les limites ajoutées sans transformer les huit
  points en vocabulaire de certification ;
- le rendu navigateur et l’intégration partagée restent hors de cette passe.

### P0 / P1 à la sortie

- P0 : aucun ;
- P1 : aucun après correction ;
- P2 résiduel : aucun défaut décisionnel identifié dans le périmètre propre au
  slug ;
- manifeste :
  `docs/research/manifests/plan-recette-application-metier-p2.sha256`.

### Statut

`PASSE_2_TERMINEE`

## P. Gate G2 — contrôle orchestrateur

GATE_P2
Décision : GO_PASSE_3
Affirmations : 21 affirmations vérifiées ou qualifiées ; aucune affirmation financière, juridique, sécurité ou données laissée certaine sans borne.
Sources : corpus primaire rouvert et cohérent ; ISTQB, abstracts ISO publics, CNIL, W3C WAI et OWASP versionné.
Calculs : exemple fictif 40 + (2 × 70) + 25 = 205,00 € HT reproduit.
Cas limites : 52/52 tests ; 65 536 combinaisons des huit points ; sept verdicts, valeurs runtime invalides et entiers sûrs extrêmes couverts.
Comparaison : décision distincte des guides 19 (relève/reprise) et 20 (bascule/migration).
Contre-cas : critères de sortie/contrôles spécialisés, autorité/procédure réelle, cas échoués, réserves et gravité sous-évaluée désormais bloquants ou visibles.
Risques : outil déclaratif ; portée contractuelle, données personnelles exceptionnelles et contrôles spécialisés restent à qualifier sur le projet réel.
P0 : 0
P1 : 0
Corrections exigées : aucune avant P3.
SHA-256 validé : manifeste P2 13/13 ; e60d1d3bdf5032bdcd4b5d38e337e695826ee86df8d3bb38fa0d2157cfa2ab4f.

## Q. Rapport P3 — polish rédactionnel

### Agent, entrée et périmètre

- agent : `/root/recette_p3_polish` ;
- entrée : manifeste
  `docs/research/manifests/plan-recette-application-metier-p2.sha256`
  vérifié avant modification, 13 fichiers sur 13 ;
- prompt maître et dossier de recherche P1/P2 relus en entier ;
- fichiers propres modifiés : page, texte visible de l’outil et présent dossier
  de recherche ;
- moteur, ordre des sept verdicts, tests, OG, SVG et WebP : relus ou contrôlés,
  mais non modifiés ;
- fichiers partagés, registre, verrous, Git, serveur et build : non touchés.

### Problèmes de lisibilité corrigés

1. Les réponses de FAQ sur les données de production et les cas bloqués donnent
   désormais la réponse dès la première phrase.
2. Le rôle de chaque équipe est formulé avec des actions observables, sans
   demander au lecteur de comprendre le terme « observabilité ».
3. L’ouverture de campagne commence par la version réellement testée, au lieu
   d’une formulation abstraite sur un « objet stable ».
4. Les titres sur l’ouverture, l’outil et la décision nomment directement
   l’action attendue ; les métaphores de version qui « flotte » ou de « trous »
   à cacher ont été retirées.
5. La couverture par le risque part des conséquences métier possibles, sans
   détour par le vocabulaire académique d’un objet « trivial ».
6. L’ordre prudent de l’outil est expliqué comme une suite de problèmes à
   traiter, sans exposer le lecteur au terme technique de « précédence ».
7. Le paragraphe CNIL a été scindé : la règle sur les environnements et les
   données reste distincte de la qualification d’un traitement exceptionnel.
8. La section des anomalies demande maintenant d’identifier la fonction et les
   résultats constatés, plutôt qu’un « objet » et des raccourcis de ticket.

### Faits, calculs et nuances protégés

- aucun fait, source, prix, délai, seuil ou promesse ajouté ;
- calcul fictif inchangé :
  `40,00 + (2 × 70,00) + 25,00 = 205,00 € HT` ;
- distinction entre réussi, échoué, bloqué et non exécuté conservée ;
- gravité, priorité et statut restent séparés ; une gravité « mineure » à fort
  impact doit toujours être réexaminée ;
- les six maillons du cas et les deux garde-fous de campagne restent
  non compensables ;
- cas échoués, réserves, cas bloqués, non exécutés ou sans preuve restent
  visibles ;
- frontière CNIL, sécurité, accessibilité, contrôles spécialisés et décision
  contractuelle humaine conservée ;
- aucun résultat de l’outil ne vaut certification, garantie ou acceptation
  automatique ;
- aucun téléchargement XLS, XLSX ou CSV.

### Validations P3

| Contrôle                     | Résultat                                                                  |
| ---------------------------- | ------------------------------------------------------------------------- |
| Tests ciblés                 | 2 fichiers, 52 tests réussis                                              |
| Combinaisons des huit points | 65 536 recalculées par la suite existante                                 |
| ESLint ciblé                 | réussi sans avertissement                                                 |
| TypeScript du dépôt          | `npx tsc --noEmit --pretty false` réussi                                  |
| Prettier                     | recherche et tous les fichiers TypeScript/TSX propres au slug conformes   |
| SVG                          | trois fichiers XML valides, non modifiés                                  |
| WebP                         | 1600 × 900, 1200 × 900 et 1000 × 1000 confirmés, fichiers non modifiés    |
| Calcul fictif                | 205,00 € HT conservé dans la prose, le tableau et la formule              |
| Manifeste P3                 | `docs/research/manifests/plan-recette-application-metier-p3.sha256` prévu |

Un premier passage du test éditorial a signalé que le retour à la ligne du
code séparait la phrase garantissant l’absence d’envoi et d’enregistrement. La
phrase a été regroupée sans assouplir le test ; le contrôle final est vert.

### P0 / P1 et statut

- P0 : aucun ;
- P1 : aucun ;
- risque résiduel : l’outil reste déclaratif et le rendu navigateur appartient
  aux gates d’intégration ;
- statut : `PASSE_3_TERMINEE`.

## R. Gate G3 — contrôle orchestrateur

GATE_P3
Décision : GO_PASSE_4
Lecture pressée : héros et réponse initiale donnent immédiatement la chaîne besoin → cas rejouable → preuve → décision ; les neuf étapes portent chacune une action.
Lecture méfiante : aucun taux universel, aucun vert automatique ; échecs, réserves, limites CNIL, contrôles spécialisés et portée contractuelle restent visibles.
Lecture mobile : titres autonomes, paragraphes resserrés et tableaux à trois colonnes maximum dans le composant responsive ; BAT final encore requis.
Clarté des chiffres : 8 points, 7 verdicts et exemple fictif 205,00 € HT sont définis et bornés ; aucun chiffre de marché.
Fluidité : jargon de test traduit, transitions causales, FAQ répondant dès la première phrase.
Cohérence héros/corps/FAQ/CTA : même décision de préparation des preuves ; CTA de cadrage sans promesse d’acceptation.
Nuances préservées : moteur, ordre des sept verdicts, gravité/priorité, CNIL, sécurité, accessibilité et contrat inchangés.
P0 : 0
P1 : 0
Corrections exigées : aucune avant P4.
SHA-256 validé : manifeste P3 13/13 ; 7e22855e0960140e88a7c607e93235703343558ec4f8ffc3646c96f84cfb8832.

## S. Rapport P4 — antipasse IA

### Agent, entrée et périmètre

- agent : `/root/recette_p4_antiai` ;
- entrée : manifeste
  `docs/research/manifests/plan-recette-application-metier-p3.sha256`
  vérifié avant toute modification, 13 fichiers sur 13 ;
- section P4 du prompt maître, contenu public du guide et structures des guides
  voisins 19 et 20 relus ;
- fichiers modifiés : page publique et présent dossier de recherche ;
- moteur, ordre des sept verdicts, tests, outil, OG, SVG et WebP relus, mais non
  modifiés ;
- fichiers partagés, registre, verrous, Git, serveur, build et BAT : non
  touchés.

### Motifs repérés et corrections

1. Un faux contraste dans le premier H2 opposait la preuve à une « page à une
   coche ». Le titre nomme désormais directement la preuve exploitable.
2. Les expressions « score magique », « verdict vert », « faux verts et faux
   rouges » et « collection de coches » donnaient au propos une dramatisation
   inutile. Elles ont été remplacées par la personne autorisée, l’état observé
   et les éléments du relevé.
3. Le mémo sur le premier livrable transformait le désaccord en formule. La
   version corrigée expose la cause : deux attendus différents conduisent à
   tester deux règles différentes.
4. L’introduction du cas rejouable suivait une symétrie négative. Elle indique
   maintenant les informations qui manquent à « vérifier la facturation ».
5. Une parenthèse entre tirets mêlait réserve et cas sans preuve. Les deux états
   sont désormais formulés sur la même ligne logique, sans incise.
6. La présentation de l’outil utilisait une formulation administrative — « ce
   dernier état ne prononce aucune acceptation ». La phrase rend la décision à
   la personne autorisée, sans toucher à la priorité des verdicts.
7. La conclusion répétait trois constructions en « si », puis le mémo
   « Dernière consigne » déjà utilisé dans le guide voisin 20. Les liens suivent
   maintenant la chronologie relève → recette → bascule ; le mémo final nomme
   directement l’information à conserver.
8. Le libellé binaire des guides voisins a été remplacé par une indication de
   lecture. Le corps reste organisé selon les neuf actes propres à une campagne
   de recette.

### Passages conservés et raison

- les questions courtes, statuts et libellés parallèles de l’outil restent
  stables : ils servent au balayage et à la comparaison des huit points, pas à
  produire un effet littéraire ;
- les tableaux conservent trois colonnes au maximum parce que chacune porte une
  fonction distincte : donnée, question et conséquence ;
- les groupes de trois termes dans les SVG résument les champs de chaque
  maillon ; ils ne sont pas des triptyques décoratifs ;
- « Bloqué décrit le test, pas le comportement fonctionnel » est conservé :
  l’opposition empêche une confusion de statut précise ;
- les impératifs restent présents lorsqu’ils attribuent une action observable
  au lecteur.

### Faits, exemples et frontières inchangés

- Atelier Nord reste annoncé comme société et cas entièrement fictifs avant le
  premier montant ;
- calcul fictif inchangé :
  `40,00 + (2 × 70,00) + 25,00 = 205,00 € HT` ;
- sources, dates, versions et périmètres ISTQB, ISO, CNIL, W3C et OWASP
  inchangés ;
- limites CNIL, sécurité, accessibilité et portée contractuelle conservées ;
- gravité, priorité, cas échoués, réserves, critères de sortie et autorité de
  décision restent séparés ;
- six maillons, deux garde-fous, sept verdicts et leur ordre conservés ;
- aucun superlatif, témoignage, prix, délai, SLA ou seuil universel ajouté ;
- aucun téléchargement XLS, XLSX ou CSV.

### Contradictions finales, validations et statut

- contradiction finale : aucune ;
- P0 : 0 ;
- P1 : 0 ;
- tests ciblés : 2 fichiers, 52 tests réussis, dont les 65 536 combinaisons des
  huit points ;
- ESLint ciblé : réussi sans avertissement ;
- TypeScript du dépôt : `npx tsc --noEmit --pretty false` réussi ;
- Prettier : recherche et six fichiers TypeScript/TSX propres au slug
  conformes ;
- SVG : trois fichiers XML valides ;
- WebP : 1600 × 900, 1200 × 900 et 1000 × 1000 confirmés ;
- manifeste P4 :
  `docs/research/manifests/plan-recette-application-metier-p4.sha256`, 13
  fichiers, à vérifier après gel du présent rapport ;
- statut : `PASSE_4_TERMINEE`.

## T. Gate G4 — contrôle orchestrateur

GATE_P4
Décision : GO_CONTROLE_QUALITE
Agents distincts : P1 `/root/recette_p1_research`, P2
`/root/recette_p2_counteraudit`, P3 `/root/recette_p3_polish`, P4
`/root/recette_p4_antiai`.
Faits inchangés : moteur identique au manifeste P3 ; sources, dates, calcul
fictif de 205,00 € HT, frontières CNIL, sécurité, accessibilité et contrat
préservés.
Motifs antipasse : faux contrastes, métaphores de couleur et de coche,
formulations administratives, conclusion répétitive et calque d’un guide voisin
corrigés.
Valeur lecteur : la chaîne besoin → cas rejouable → preuve → décision reste
visible et chaque section conduit à une observation ou une action.
Exemples : Atelier Nord reste annoncé comme entièrement fictif avant tout
montant ; aucun témoignage ou résultat réel suggéré.
Cohérence : héros, corps, outil, FAQ, conclusion et CTA préparent la même
décision humaine sans promettre l’acceptation.
P0 : 0
P1 : 0
Risques résiduels : outil déclaratif ; build, rendu navigateur, métadonnées et
maillage partagé à contrôler sur le snapshot d’intégration.
SHA-256 validé : manifeste P4 13/13 ;
`1d8730901069d3d7da8a36abcac764cde024a3bd4dfee85006d497d102c5196f`.

## U. Intégration propre et BAT

### Snapshot

- orchestrateur : `/root` ;
- branche : `codex/plan-recette-application-metier` ;
- worktree :
  `/Users/quentinhagnere/Developpement/Hagnere-Code-wt-recette-refonte` ;
- base exacte :
  `69178dcecba71067aabbdff67b7a2f62695c4585`, commit poussé du guide 20 ;
- horodatage d’intégration : `2026-07-30T16:30:59+02:00` ;
- état public : non déployé, non publié et non indexé.

### Intégration partagée

- entrée ajoutée à `src/lib/guides.ts` avec statut
  `ready-for-human-review` ;
- titre, description, H1, catégorie « Préparer son projet », trois images
  Article et temps de lecture reliés à la source de vérité ;
- lecture mesurée sur le HTML servi : 3 251 mots visibles, 16 minutes à
  200 mots par minute ;
- icône du hub ajoutée, mais le guide reste absent du hub, du sitemap et de
  `llms.txt` tant qu’il porte le statut de revue ;
- deux liens entrants ajoutés depuis le guide de migration et la page service
  des outils internes ;
- aucune redirection retirée : le slug n’était pas présent dans l’inventaire
  historique. Aucune redirection inconnue n’a été inventée ;
- canonical `.ai`, `Article` et `BreadcrumbList` seulement ; aucun `FAQPage`,
  `HowTo`, `Review` ou `AggregateRating` ;
- aucun lien XLS, XLSX ou CSV.

### Correction technique issue du BAT

À 390 pixels, les sélecteurs, compteurs et le bouton de remise à zéro
mesuraient 42 pixels de haut. Leur padding vertical a été porté à `py-3` :
les 19 contrôles de l’article mesurent désormais au minimum 46 pixels. Un test
éditorial empêche le retour aux classes `py-2` ou `py-2.5`.

Cette correction d’intégration ne modifie ni le moteur ni les faits. Les
manifestes P1 à P4 restent des preuves historiques de leurs passages ; le
manifeste d’intégration couvre le snapshot courant après cette correction et
le présent journal.

### Batterie froide

| Contrôle                               | Résultat                                                              |
| -------------------------------------- | --------------------------------------------------------------------- |
| `npm ci`                               | 758 paquets installés                                                 |
| Tests ciblés avant BAT                 | 4 fichiers, 64 tests réussis                                          |
| Tests propres après correction tactile | 2 fichiers, 53 tests réussis                                          |
| ESLint des fichiers modifiés           | réussi                                                                |
| TypeScript                             | `npx tsc --noEmit` réussi                                             |
| SEO normal                             | 33 fichiers, 174 contrôles réussis                                    |
| SEO avec `NODE_ENV=production`         | 33 fichiers, 174 contrôles réussis                                    |
| Suite globale finale                   | 79 fichiers, 559 tests réussis                                        |
| Build final                            | 63 pages générées                                                     |
| Postbuild                              | 44 pages, 44 URL sitemap, 27 liens `llms.txt`, 76 blocs JSON-LD       |
| Lecture                                | 3 251 mots, 16 minutes                                                |
| Audit de production                    | 10 vulnérabilités hautes globales, correction forcée cassante refusée |

L’audit concerne `sharp` sous Next/Miniflare et `brace-expansion` dans la chaîne
OpenNext/minify. Il propose des changements de version cassants sans rapport
avec le guide. Aucun `npm audit fix --force` n’a été lancé.

### BAT navigateur de production locale

Route testée :
`http://127.0.0.1:3111/guides/plan-recette-application-metier`.

- largeurs exactes 320, 360, 390, 430, 640, 768, 1024, 1280, 1440 et
  1600 pixels : `scrollWidth <= innerWidth`, un H1, un `main#main-content`,
  aucune image cassée ;
- héros lu visuellement à 320 et 1440 pixels ; navigation, badges, chiffres,
  auteur et CTA sans collision ;
- petit écran paysage 844 × 390 : navigation et héros utilisables, aucun
  débordement ;
- thèmes clair et sombre contrôlés visuellement ;
- reflow contraint à 320 pixels, équivalent au viewport CSS d’un zoom 200 %
  sur 640 pixels : aucun débordement ;
- police augmentée de 25 % sur les éléments textuels : aucun débordement ;
- tableaux rendus comme cartes nommées sur mobile ; sept tableaux présents ;
- outil : état vide, STOP, partiel, compteurs absents, compteurs incohérents,
  correction obligatoire, risque résiduel, dossier candidat et remise à zéro
  contrôlés ;
- le dossier candidat rappelle qu’il ne garantit pas l’absence de défaut et
  n’accepte pas automatiquement le logiciel ;
- FAQ : clic, flèche droite, `Home` et `End` contrôlés ; région de réponse
  correctement annoncée ;
- focus clavier : contour solide de 2 pixels observé ;
- impression émulée : fond blanc, texte sombre, un H1, un `main`, aucun
  débordement ;
- OG servi en PNG 1200 × 630, chargé et inspecté visuellement ;
- 46 réponses réseau, aucun statut d’erreur et aucun chargement échoué ;
- aucune erreur ni alerte console.

### Métadonnées et performance locale

- HTTP 200 ;
- HTML brut : 512 880 octets ; téléchargement compressé : 68 799 octets ;
- 2 332 nœuds DOM ;
- 45 ressources, 560 981 octets encodés ;
- 15 scripts réseau, 254 444 octets encodés ;
- une image éditoriale chargée dans la page, 24 012 octets encodés ;
- FCP de laboratoire : 180 ms ;
- LCP de laboratoire : 180 ms ;
- CLS de laboratoire : 0 ;
- l’interaction de thème instrumentée n’a produit aucun événement supérieur ou
  égal au seuil de 16 ms ; aucune valeur INP chiffrée n’est inventée ;
- ces mesures proviennent du serveur local et ne sont pas des données de
  terrain.

### Risques restant ouverts avant toute publication

- réconcilier `datePublished` avec la date réelle de première mise en ligne ;
- traiter les vulnérabilités globales dans un chantier de dépendances séparé ;
- refaire les preuves HTTP, hub, sitemap, `llms.txt` et indexation après un
  éventuel déploiement ;
- conserver le verrou du slug tant que la publication n’est pas vérifiée.
