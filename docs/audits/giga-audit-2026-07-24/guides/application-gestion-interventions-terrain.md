# Audit approfondi — `application-gestion-interventions-terrain`

Date : 24 juillet 2026

Auditeur concurrentiel : Codex — cellule `corpus_inventory`

Snapshot du guide : `22233c8b1d127922a249722acdfc8adcfe9047df3ff4ef43e70e1ba7db0b1fc8`

Périmètre : audit éditorial, décisionnel, concurrentiel et factuel. La page
publique, le registre, les composants et les manifests n'ont pas été modifiés.

## 1. Verdict exécutif

```text
Lecteur exact : dirigeant d'une PME de maintenance, dépannage, installation ou service terrain, avec un bureau et plusieurs techniciens mobiles.
Question réelle : faut-il mieux organiser l'existant, acheter un logiciel de gestion d'interventions, le connecter à la facturation ou développer une application adaptée ?
Décision attendue : choisir le plus petit niveau de solution qui traite les cas critiques sans créer un second système coûteux.
Réponse actuelle en une phrase : suivez une intervention de bout en bout, testez cinq situations difficiles, puis choisissez organisation, logiciel standard, connexion ou développement ciblé.
Défaut qui coûte le plus de valeur : aucune comparaison économique reproductible ne permet de savoir quand un contournement justifie réellement le coût d'une connexion ou d'un développement.
Niveau actuel : B
Priorité : haute
Statut : audité — réécriture P2 nécessaire avant nouveau contre-audit
```

Le guide est déjà très supérieur aux pages qui empilent planning, GPS, photos,
signature et facturation. Il parle le langage du dirigeant, montre le passage
de main entre bureau et terrain et propose cinq tests utiles. Son défaut est
plus exigeant : il apprend à **examiner** une solution, mais pas encore à
**financer** le bon niveau de solution. Un lecteur peut reconnaître son
problème sans pouvoir défendre un choix à 30 000 €, 60 000 € ou davantage sur
trois ans.

### Score avant correction

| Axe | Note /10 | Preuve localisable | Manque décisif |
| --- | ---: | --- | --- |
| Intention | 8 | L'ouverture décrit planning changeant, appels, bon d'intervention et ressaisie (`page.tsx:326-349`). | La réponse n'annonce ni coût du statu quo ni règle économique de bascule. |
| Décision | 8 | Quatre réponses sont distinguées, de l'organisation au sur-mesure (`page.tsx:517-553`). | Le lecteur ne peut pas encore arbitrer deux options qui passent toutes deux les tests métier. |
| Pédagogie | 9 | Le parcours bureau/terrain/résultat et les cinq tests rendent le sujet observable (`page.tsx:368-515`). | Le mode hors connexion reste présenté comme un test binaire, sans file d'attente, échec ni conflit de données. |
| Profondeur | 7 | Rôles, pilote, permissions, mobile perdu, facturation et sortie de devis sont traités. | Reprise de données, maintenance, support, disponibilité, synchronisation, coût d'équipement et mesure après déploiement restent incomplets. |
| Preuve | 7 | CNIL, DesignGouv et MesServicesCyber sont cités au plus près des affirmations (`page.tsx:558-671`). | Aucun éditeur, prix officiel, architecture hors ligne ou résultat de test n'étaye la comparaison des solutions. |
| Comparaison | 5 | Les quatre familles de réponse sont décrites honnêtement (`page.tsx:517-553`). | Aucun scénario commun, coût total, produit daté, charge interne ou coût de sortie. |
| Originalité | 9 | Le parcours complet et les cinq « stress tests » sont mémorables et directement réutilisables. | Il manque une feuille de résultat chiffrée qui transforme les essais en décision signable. |
| Style | 9 | Français concret, pas de jargon FSM, phrases centrées sur les personnes et les gestes. | Quelques précautions longues peuvent être resserrées après ajout des preuves économiques. |
| Conversion | 8 | Le CTA autorise explicitement logiciel standard, connexion ou absence de développement (`page.tsx:702-712`). | Le livrable de l'échange et le mauvais fit économique ne sont pas assez tangibles. |
| SEO/produit | 8 | Metadata, données structurées, FAQ, sommaire et maillage couvrent l'intention. | Les sous-intentions « prix logiciel intervention », « comparatif », « coût par technicien », « application hors ligne » et « ROI » restent peu satisfaites. |

Total : **78/100**

## 2. Ce que le guide dit réellement

- Dans les 150 premiers mots, le lecteur reconnaît ses appels, feuilles,
  messages et ressaisies. Le terme central est expliqué sans sigle.
- Le verdict actuel est conditionnel et professionnel : tester le parcours
  avant de développer ; garder le standard s'il passe les cas importants.
- Cinq étapes relient demande, planning, dossier terrain, compte rendu et suite
  administrative.
- Quatre rôles sont distingués afin de ne pas donner tous les droits à tout le
  monde.
- Les cinq tests couvrent urgence, absence de réseau, travail inachevé, seconde
  visite et téléphone perdu.
- Le guide traite correctement la minimisation des permissions, les risques de
  suivi des salariés et le stockage mobile.
- L'option la moins vendeuse pour Hagnéré Code est visible : organiser, acheter
  un outil ou connecter l'existant.
- Ce qui paraît complet mais n'aide pas encore à décider : aucun produit n'est
  appliqué au même parcours, aucun coût n'est calculé, le pilote n'a pas de
  mesure de départ, et « le hors ligne fonctionne » ne décrit ni les données
  conservées, ni les écritures en attente, ni les conflits.

## 3. Benchmark France et international

Requêtes, pays, langues et date :

- France, français, 24 juillet 2026 : `application gestion interventions
  terrain`, `logiciel intervention technicien prix`, `logiciel intervention
  hors ligne`, `Praxedo Synchroteam Kizeo comparaison`.
- États-Unis, anglais, 24 juillet 2026 : `field service management pricing`,
  `offline-first mobile data conflict resolution`, `field service technician
  mobile app`.
- Royaume-Uni, anglais, 24 juillet 2026 : `field service software buyer guide`,
  `job management software pricing UK`, `internal service user testing`.
- Australie, anglais, 24 juillet 2026 : `field service software small business
  pricing`, `job management software per job pricing`.

Saturation : après les éditeurs français, deux suites internationales, un
éditeur britannique, un acteur australien et les sources officielles sur
l'usage mobile, les nouveaux résultats répétaient six familles : planifier,
équiper le technicien, travailler hors ligne, produire le rapport, facturer et
mesurer. La collecte a cessé lorsque les nouvelles pages n'ajoutaient plus de
type de solution mais seulement une autre marque ou une promesse de
productivité non indépendante. Le manque différenciant n'est donc pas une
nouvelle liste de fonctions : c'est un **protocole commun avec coût total,
échec de synchronisation et verdict de pilote**.

| Ressource et URL directe | Pays | Réponse utile | Preuve, outil ou exemple | Limite | Apport à vérifier ou adapter |
| --- | --- | --- | --- | --- | --- |
| [La Fabrique du Net — comparatif gestion d'interventions](https://www.lafabriquedunet.fr/logiciels/gestion/gestion-interventions) | France | Cartographie le marché et les profils d'outils. | Tableau de marques, fonctions et modes tarifaires. | Comparateur commercial ; les fourchettes ne sont pas une preuve primaire. | Montrer pourquoi une liste ne suffit pas et vérifier les prix chez chaque éditeur. |
| [Praxedo — tour produit](https://www.praxedo.fr/tour-produit/) | France | Couvre planification, application mobile, mode hors réseau et rapports. | Parcours terrain détaillé. | Source éditeur ; les gains annoncés ne sont pas une preuve indépendante. | Utiliser ses fonctions comme cas de test, pas comme résultat garanti. |
| [Synchroteam — tarifs](https://www.synchroteam.fr/tarif.php) | France | Rend visibles les licences Standard/Premium et le coût par utilisateur. | Au 24 juillet 2026 : prix affichés de 39/49 € et 64/79 € selon facturation, avec première licence administrateur et certains services annoncés inclus. | Prix et inclusions peuvent changer ; adéquation métier non prouvée. | Ajouter un exemple officiel français et dater chaque montant. |
| [Kizeo Forms — tarifs](https://www.kizeo-forms.com/fr/tarifs/) | France | Montre qu'un formulaire mobile hors ligne peut être une solution plus étroite qu'un FSM complet. | Plans affichés à 15/22 € et 25/37 € HT par utilisateur/mois selon facturation, essai annoncé. | Outil de formulaires, pas moteur complet de planning. | Créer une cinquième option : numériser seulement la collecte terrain. |
| [Microsoft Dynamics 365 Field Service — tarifs France](https://www.microsoft.com/fr-fr/dynamics-365/products/field-service/pricing) | États-Unis, page France | Illustre une suite complète et ses compléments. | 91 € HT/utilisateur/mois annuel affiché ; optimisation de planification à 26 € HT/ressource/mois. | Implémentation, autres licences et intégrations non incluses dans le prix de base. | Expliquer qu'un prix de licence n'est jamais un TCO. |
| [Salesforce Field Service — tarifs France](https://www.salesforce.com/fr/service/field-service-management/pricing/) | États-Unis, page France | Sépare rôles dispatcher, technicien et prestataire. | Prix affichés par rôle, accès hors ligne et prérequis Service Cloud signalé. | Offre complexe et susceptible d'évolution ; coûts de déploiement non affichés. | Vérifier rôles, prérequis et addition des licences avant comparaison. |
| [Android Developers — offline-first](https://developer.android.com/topic/architecture/data-layer/offline-first) | États-Unis | Explique sources locale/réseau, écritures en file, synchronisation et conflits. | Documentation primaire avec stratégies d'écriture et résolution de conflits. | Exemple d'architecture Android, pas spécification universelle d'un produit. | Remplacer le test « marche sans réseau » par un protocole lecture/écriture/reconnexion/conflit. |
| [GOV.UK — services for government users](https://www.gov.uk/service-manual/design/services-for-government-users) | Royaume-Uni | Demande de tester avec les personnes qui font réellement la tâche et avec des données réalistes. | Source publique sur services internes, achat ou construction. | Contexte public britannique. | Renforcer le pilote avec profils différents, tâches et erreurs mesurées. |
| [GOV.UK — user research in beta](https://www.gov.uk/service-manual/user-research/user-research-in-beta) | Royaume-Uni | Traite le service de bout en bout, y compris étapes hors ligne et support. | Méthodes de tests, analytics et tickets de support. | Pas un guide d'achat de FSM. | Mesurer l'adoption et le parcours complet, pas seulement l'écran mobile. |
| [BigChange — pricing](https://www.bigchange.com/pricing) | Royaume-Uni | Montre un ensemble CRM, planning, mobile, suivi, devis et facture. | Fonctions incluses et options présentées. | Prix sur demande et promesse de ROI issue du vendeur. | Classer toute promesse de gain comme allégation à vérifier dans un pilote. |
| [ServiceM8 Australia — tarifs](https://www.servicem8.com/au/pricing) | Australie | Illustre une tarification au volume de missions avec utilisateurs illimités sur les offres payantes. | 0, 29, 79, 149 et 349 AUD/mois affichés, plafonds de missions/SMS, différences iOS/Android expliquées. | Prix australiens TTC et produit orienté petites entreprises ; non transposable tel quel à la France. | Ajouter volume de missions, appareils et fonctions réellement disponibles au test. |
| [CNIL — permissions des applications mobiles](https://www.cnil.fr/fr/permissions-applications-mobiles-recommandations-de-la-cnil-pour-respecter-la-vie-privee) | France | Impose de raisonner par finalité et permission la moins intrusive. | Source réglementaire nationale. | Ne remplace pas l'analyse juridique du traitement réel. | Conserver la doctrine actuelle et rapprocher chaque donnée de son responsable. |

## 4. Matrice de gain d'information

| Question décisive | Meilleure réponse française | Apport international | Couverture actuelle | Manque | Réponse supérieure à produire |
| --- | --- | --- | --- | --- | --- |
| Quel problème faut-il résoudre avant de parler logiciel ? | Le guide Hagnéré Code est déjà meilleur que les pages éditeurs grâce au parcours complet. | GOV.UK traite le service interne de bout en bout. | Très forte. | Aucun volume ni coût actuel n'est mesuré. | Ajouter une fiche de référence : interventions, appels, ressaisies, délai de facture, erreurs et coût brut. |
| Un formulaire mobile suffit-il ? | Kizeo montre une option étroite, les FSM couvrent davantage. | ServiceM8 distingue fonctions essentielles et modules. | Absente des quatre choix. | Le lecteur peut suracheter un FSM alors qu'il lui manque seulement la collecte terrain. | Ajouter « formulaire mobile connecté » entre organisation et FSM complet. |
| Quel logiciel standard mérite un pilote ? | Praxedo, Synchroteam et Kizeo montrent des périmètres différents. | Microsoft, Salesforce et ServiceM8 montrent des modèles de licence incompatibles. | Aucun produit nommé. | Pas de comparaison datée de trois profils. | Comparer un formulaire, un FSM PME et une suite intégrée sur le même cas, sans déclarer de gagnant universel. |
| Que signifie réellement « fonctionne hors ligne » ? | Praxedo et Kizeo le revendiquent. | Android décrit lectures, écritures, files, synchronisation et conflits. | Un test de coupure puis reconnexion. | Pas de test concurrent, échec de file, doublon, version ni preuve de transmission. | Publier un protocole en huit actions et le résultat attendu pour chaque donnée critique. |
| Quand la connexion entre outils paie-t-elle son coût ? | Les éditeurs citent des connecteurs. | Les suites internationales montrent que rôle et prérequis modifient le coût. | Recommandation qualitative. | Aucune heure évitée ni coût d'erreur. | Calculer le point mort du connecteur en heures de contournement évitées sur 36 mois. |
| Comment décider après le pilote ? | Peu de vendeurs publient un critère d'arrêt. | GOV.UK demande tâches réelles, utilisateurs variés et données de support. | « corriger, poursuivre, généraliser ou arrêter ». | Pas de mesure de départ, seuil propre à l'entreprise ni propriétaire de décision. | Feuille pilote : taux de dossiers complets, appels, délai de clôture, conflits, adoption et décision datée. |
| Quel est le coût total sur trois ans ? | Synchroteam/Kizeo publient la licence, pas le projet complet. | Microsoft/Salesforce rendent visibles prérequis et rôles ; ServiceM8 facture au volume. | Lien vers un autre guide ROI. | Pas de setup, appareils, reprise, formation, support, connecteur, maintenance et sortie. | Comparer standard, hybride et sur-mesure sur 36 mois avec les mêmes volumes. |
| Comment éviter le suivi disproportionné des salariés ? | CNIL donne le cadre le plus fiable. | Les produits montrent que GPS et suivi sont techniquement disponibles. | Très bonne section. | Le responsable, la durée de conservation et la revue périodique ne sont pas formalisés. | Tableau donnée → finalité → personnes → durée → alternative moins intrusive → validation. |
| Qui garde données, comptes et continuité de service ? | Les pages françaises parlent peu de sortie. | Les suites et applications montrent dépendance à la plateforme, aux appareils et aux rôles. | Le dossier final demande une solution de secours. | Export, restauration, journal d'incident, support et retrait des comptes restent génériques. | Ajouter une recette de sortie et une journée de fonctionnement dégradé avant généralisation. |

## 5. Faits et fraîcheur

| Affirmation du guide | Verdict | Source primaire actuelle | Périmètre et date | Correction |
| --- | --- | --- | --- | --- |
| Une application mobile doit demander la permission la moins intrusive permettant la finalité. | Confirmé. | [CNIL — permissions mobiles](https://www.cnil.fr/fr/permissions-applications-mobiles-recommandations-de-la-cnil-pour-respecter-la-vie-privee) | France, recommandation publiée le 14 janvier 2025, rouverte le 24 juillet 2026. | Conserver et ajouter finalité, durée, destinataire et alternative. |
| Un dispositif de contrôle de l'activité doit être justifié, proportionné et porté à la connaissance des personnes. | Confirmé avec portée à conserver. | [CNIL — contrôle de l'activité des personnes employées](https://www.cnil.fr/fr/controle-de-lactivite-des-personnes-employees) | France, fiche datée du 9 juillet 2026. | Conserver ; ne pas transformer tout statut terrain en dispositif de géolocalisation. |
| Le mode hors connexion peut être validé par une simple coupure puis reconnexion. | Insuffisant. | [Android Developers — offline-first](https://developer.android.com/topic/architecture/data-layer/offline-first) | Architecture mobile, mise à jour consultée le 24 juillet 2026. | Tester séparément lecture, écriture, file, reprise après échec, doublon et conflit. |
| Un téléphone révoqué rendra les données réellement inaccessibles. | Invérifiable sans produit, appareil et test. | [CNIL — sécuriser l'informatique mobile](https://www.cnil.fr/fr/securite-securiser-linformatique-mobile) | Recommandations générales françaises. | Garder la formulation actuelle comme résultat à vérifier, jamais comme garantie. |
| Les logiciels de marché ont des coûts comparables par utilisateur. | Faux comme généralisation. | [Synchroteam](https://www.synchroteam.fr/tarif.php), [Kizeo](https://www.kizeo-forms.com/fr/tarifs/), [ServiceM8](https://www.servicem8.com/au/pricing) | Prix, devises, taxes, rôles et unités différents au 24 juillet 2026. | Comparer prix par utilisateur, rôle, mission, prérequis et pays séparément. |
| Une exportation contrôlée peut être plus sûre qu'une facture entièrement automatique au départ. | Recommandation Hagnéré Code raisonnable, pas fait universel. | Aucun texte ne rend ce séquencement obligatoire. | Dépend des contrôles et règles de facturation. | L'attribuer comme position professionnelle et donner le contre-cas où l'automatisation directe est sûre. |
| Un logiciel standard doit être préféré s'il traite les cas importants. | Recommandation conditionnelle défendable. | Prix officiels et disponibilité de solutions standard ; preuve finale à produire par le pilote. | Marché actuel, cas propre à l'entreprise. | Ajouter coût de contournement, charge de configuration et critère de sortie. |

### Contradictions

- Les éditeurs promettent simultanément temps réel et fonctionnement hors ligne.
  Ces deux états ne sont pas contradictoires commercialement, mais ils créent
  une question non traitée : quelle version l'emporte si le bureau et le
  technicien modifient la même donnée ?
- Une fonction de localisation peut améliorer l'affectation tout en créant un
  traitement disproportionné si la finalité réelle ne le justifie pas.
- Un outil standard peut coûter moins cher en licence et davantage en
  contournements. Le prix d'entrée ne tranche donc pas.
- Les promesses de productivité des éditeurs sont des déclarations
  commerciales ; elles peuvent inspirer une métrique de pilote, jamais devenir
  le gain attendu du lecteur.

### Faits à retirer plutôt qu'à affaiblir

- Toute future formule du type « un FSM fait gagner X % » sans protocole,
  population et mesure avant/après.
- Toute équivalence « mode hors ligne = aucune perte de données ».
- Toute comparaison de prix qui convertirait silencieusement AUD ou USD en
  budget français.
- Tout seuil universel de nombre de techniciens à partir duquel le sur-mesure
  deviendrait rentable.

## 6. Scénarios et calculs à construire

Tous les montants ci-dessous sont des **exemples illustratifs fictifs**. Ils ne
sont ni des tarifs Hagnéré Code, ni des résultats clients, ni des seuils
universels. Ils montrent les calculs que la page doit permettre de refaire.

### 6.1 Mesurer le coût brut des appels et ressaisies

| Variable | Simple | Central | Exigeant | Source ou hypothèse |
| --- | ---: | ---: | ---: | --- |
| Techniciens | 6 | 12 | 25 | Hypothèse |
| Interventions par technicien/jour | 3 | 4 | 5 | À mesurer |
| Minutes d'appel et ressaisie/intervention | 5 | 9 | 14 | Chronométrage avant projet |
| Jours travaillés/an | 210 | 220 | 220 | Hypothèse |
| Coût chargé de l'heure | 32 € | 36 € | 40 € | Hypothèse à remplacer |
| Heures brutes/an | 315 h | 1 584 h | 6 416,67 h | Calcul |
| Coût brut/an | 10 080 € | 57 024 € | 256 666,80 € | Calcul |

```text
Formule : techniciens × interventions/jour × minutes perdues ÷ 60 × jours × coût horaire
Horizon : 12 mois
Inclus : appels de rattrapage et ressaisie répétitive mesurés
Exclus : déplacements, erreurs de planning, ventes et temps qui ne peut pas être réaffecté
Résultat central : 57 024 € de charge brute observée, pas 57 024 € d'économie promise
Analyse de sensibilité : si seulement 35 % du temps est évitable et réaffectable, valeur maximale = 19 958,40 €
Variable qui fait basculer la décision : part réellement supprimée après pilote
Contrôle inverse : 57 024 € ÷ 36 €/h = 1 584 h, puis ÷ 220 jours = 7,2 h/jour pour toute l'équipe
```

### 6.2 Comparer le coût total sur 36 mois

Exemple illustratif fictif pour douze utilisateurs, même parcours de base :

| Poste sur 36 mois | Logiciel standard | Standard + connexion | Application adaptée |
| --- | ---: | ---: | ---: |
| Licences | 15 120 € | 15 120 € | 0 € |
| Paramétrage ou construction | 7 000 € | 7 000 € + 16 000 € | 95 000 € |
| Appareils | 3 000 € | 3 000 € | 3 000 € |
| Hébergement | inclus par hypothèse | inclus par hypothèse | 32 400 € |
| Maintenance spécifique | 0 € | 13 500 € | 42 000 € |
| Temps interne | 3 600 € | 5 400 € | 9 900 € |
| Sortie/documentation | 2 500 € | 3 500 € | 5 000 € |
| **TCO 36 mois** | **31 220 €** | **63 520 €** | **187 300 €** |

```text
Formule : coûts initiaux + 36 mois de récurrents + temps interne + sortie
Horizon : 36 mois
Inclus : mêmes douze utilisateurs, appareils, formation interne et sortie
Exclus : TVA, financement, gain commercial et fonctions absentes d'une option
Résultat : le standard gagne si ses contournements restent faibles
Analyse de sensibilité : surcoût hybride = 32 300 € ; à 36 €/h, il est compensé par 897,22 h évitées sur trois ans
Variable qui fait basculer la décision : 897,22 h ÷ 660 jours = 1,36 h de contournement évitée par jour pour toute l'équipe
Contrôle inverse : 63 520 - 31 220 = 32 300 ; 32 300 ÷ 36 = 897,22 h
```

La comparaison doit marquer « non couvert » lorsqu'une option ne traite pas un
cas critique. Un prix faible n'autorise pas à remplacer une fonction absente
par zéro.

### 6.3 Chiffrer les conflits hors connexion

| Variable | Simple | Central | Exigeant | Source ou hypothèse |
| --- | ---: | ---: | ---: | --- |
| Interventions/jour | 40 | 80 | 160 | Hypothèse |
| Part réalisée hors ligne | 5 % | 15 % | 30 % | Test terrain |
| Part avec modification concurrente | 5 % | 12 % | 20 % | Logs/pilote |
| Minutes de rapprochement/conflit | 10 | 20 | 35 | Chronométrage |
| Conflits/jour | 0,10 | 1,44 | 9,60 | Calcul |
| Heures/an sur 220 jours | 3,67 h | 105,60 h | 1 232 h | Calcul |
| Coût à 36 €/h | 132 € | 3 801,60 € | 44 352 € | Calcul |

```text
Formule : interventions × part hors ligne × part concurrente × minutes ÷ 60 × 220
Horizon : 12 mois
Inclus : rapprochement manuel de deux écritures concurrentes
Exclus : coût d'une donnée perdue et incidents sans conflit
Résultat central : 105,6 h/an ; le conflit devient un sujet produit mesurable
Analyse de sensibilité : à 5 % d'usage hors ligne et peu de concurrence, une architecture complexe peut ne pas se justifier
Variable qui fait basculer la décision : fréquence des écritures concurrentes sur la même donnée critique
Contrôle inverse : 1,44 conflit/jour × 20 min = 28,8 min/jour ; × 220 = 105,6 h
```

### 6.4 Distinguer trésorerie avancée et revenu gagné

| Variable | Simple | Central | Exigeant | Source ou hypothèse |
| --- | ---: | ---: | ---: | --- |
| Interventions facturables/semaine | 25 | 60 | 140 | Mesure interne |
| Facture moyenne | 280 € | 450 € | 900 € | Mesure interne |
| Jours de facturation gagnés | 1 | 3 | 6 | Pilote |
| Montant facturé moyen/jour | 1 400 € | 5 400 € | 25 200 € | Calcul |
| Encaissement potentiel avancé | 1 400 € | 16 200 € | 151 200 € | Effet de calendrier |

```text
Formule : interventions/semaine × facture moyenne ÷ 5 × jours gagnés
Horizon : effet ponctuel de décalage de trésorerie
Inclus : factures déjà dues dont l'émission est avancée
Exclus : nouvelle vente, marge, délai de paiement client et impayés
Résultat central : 16 200 € peuvent être facturés trois jours plus tôt ; ce n'est pas 16 200 € de bénéfice
Analyse de sensibilité : si le client paie à date fixe ou si le dossier reste incomplet, l'effet peut être nul
Variable qui fait basculer la décision : réduction réellement observée entre fin d'intervention et facture complète
Contrôle inverse : 60 × 450 ÷ 5 = 5 400 €/jour ; × 3 = 16 200 €
```

## 7. Comparaison et position professionnelle

```text
Options réellement comparables : mieux organiser ; formulaire mobile ; FSM standard ; FSM + connexion ; application adaptée ; reporter.
Périmètre et horizon communs : même équipe, mêmes interventions critiques, 36 mois, appareils, formation, reprise, support, maintenance et sortie.
Option la moins chère : l'organisation ou le formulaire mobile lorsque le planning existant convient.
Option la moins risquée : un pilote standard réversible sur un type d'intervention, avec données fictives puis échantillon contrôlé.
Option qui demande le moins de temps interne : aucune par nature ; un outil prêt peut demander davantage de paramétrage et de conduite du changement qu'annoncé.
Position Hagnéré Code pour le cas fréquent : piloter d'abord un logiciel ou un formulaire existant, connecter uniquement la donnée ressaisie, et ne développer que la règle stable qui résiste.
Faits qui la fondent : marché actuel riche, écarts de prix considérables, coût durable du code spécifique et nécessité de tester l'usage réel.
Cas où l'option opposée gagne : règles critiques propres au métier, conflits hors ligne fréquents, intégrations structurantes ou coût de contournement prouvé supérieur au surcoût du spécifique.
Signal de révision : un cas critique échoue dans deux solutions plausibles et son contournement dépasse le point mort calculé sur 36 mois.
Ce que nous déconseillons même si nous pourrions le vendre : reconstruire planning, comptes rendus et facturation avant d'avoir mesuré une semaine de travail et testé les solutions standard crédibles.
```

Conflit d'intérêts : Hagnéré Code vend des applications sur mesure. Cette
position doit donc être plus exigeante envers le développement spécifique que
ne le serait une page neutre : le standard gagne par défaut tant que l'écart
métier et son coût ne sont pas prouvés.

## 8. Objections et cas limites

| Objection loyale | Réponse prouvée | Ce qui reste incertain | Conséquence |
| --- | --- | --- | --- |
| « Nos techniciens n'utiliseront jamais un nouvel outil. » | GOV.UK recommande des tests avec les personnes qui font réellement la tâche ; le guide prévoit déjà un pilote. | Adoption après plusieurs mois, formation et pression opérationnelle. | Mesurer complétion, appels et double saisie ; arrêter si un second système persiste. |
| « Nous sommes souvent sans réseau, il faut donc du sur-mesure. » | Plusieurs produits annoncent un mode hors ligne ; Android montre que le vrai sujet est l'écriture et le conflit. | Comportement exact de chaque produit sur vos données. | Exécuter le protocole hors ligne avant tout choix d'architecture. |
| « Le GPS nous ferait gagner beaucoup de kilomètres. » | La fonction existe, mais la CNIL impose finalité et proportionnalité. | Gain de tournée, contexte social et alternative moins intrusive. | Séparer optimisation ponctuelle et suivi permanent ; faire valider le traitement réel. |
| « Notre facturation est trop particulière pour un standard. » | Un export contrôlé ou une connexion limitée peut préserver le logiciel comptable existant. | Règles, contrôles et obligations propres à l'entreprise. | Tester d'abord la transmission d'un dossier complet, sans automatiser l'émission finale. |
| « Un abonnement mensuel coûtera toujours plus cher que notre propre logiciel. » | Le TCO spécifique inclut construction, hébergement, maintenance, support et sortie. | Durée réelle, volume et capacité interne. | Comparer sur 36 mois ; ne jamais opposer abonnement et seul prix de build. |
| « Notre processus change encore, mais le logiciel nous forcera à nous organiser. » | Un outil peut matérialiser une règle, pas résoudre une responsabilité indécise. | Vitesse de stabilisation du processus. | Reporter le spécifique et tester une procédure ou un formulaire réversible. |
| « Nous avons une obligation réglementaire très particulière. » | Le guide ne certifie aucune conformité sectorielle. | Texte applicable, preuve attendue et responsabilité. | Faire intervenir le spécialiste compétent avant le choix du produit. |

## 9. Plan de réécriture

| Ordre | Section proposée | Question résolue | Preuve, scénario ou outil | Décision produite | À conserver / créer / couper |
| ---: | --- | --- | --- | --- | --- |
| 1 | Votre problème mérite-t-il un logiciel complet ? | Quel est le verdict court ? | Contrat des 150 mots | Organiser, formulaire, FSM, connexion ou spécifique | Réécrire l'ouverture sans perdre la scène actuelle |
| 2 | Mesurez une semaine avant de comparer | Quel est le coût brut ? | Scénario 6.1 + feuille de relevé | Priorité et base de comparaison | Créer |
| 3 | Suivez une intervention de bout en bout | Où se perd l'information ? | Parcours actuel en cinq étapes | Point de rupture | Conserver, resserrer |
| 4 | Testez cinq cas, dont un vrai conflit hors ligne | L'outil résiste-t-il ? | Protocole Android adapté | Échec éliminatoire ou correction | Enrichir fortement |
| 5 | Comparez cinq niveaux de solution | Sur quoi payer ? | Formulaire, FSM PME, suite, hybride, spécifique | Liste courte | Créer une comparaison datée |
| 6 | Comparez les coûts sur 36 mois | Quelle option est réellement moins chère ? | TCO et point mort | Choix économique | Créer |
| 7 | Faites piloter par trois rôles | Les personnes l'utilisent-elles ? | Mesure avant/après | Généraliser, corriger ou arrêter | Conserver + chiffrer |
| 8 | Limitez données et suivi | Qu'a-t-on le droit et besoin de collecter ? | CNIL + registre de finalité | Permission et responsable | Conserver |
| 9 | Sécurisez facturation, support et sortie | Que se passe-t-il après ? | Trésorerie, export, restauration, comptes | Plan d'exploitation | Enrichir |
| 10 | Verdict Hagnéré Code | Quand chaque option gagne-t-elle ? | Arbre conditionnel | Décision datée et signal de revue | Créer |
| 11 | Préparez le même dossier pour les prestataires | Comment obtenir des offres comparables ? | Fiche autonome | Demande transmissible | Conserver |
| 12 | CTA après l'outil autonome | Quand demander de l'aide ? | Bon/mauvais fit et livrable | Contact ou action autonome | Préciser |

### Contrat des 150 premiers mots

- Ouvrir sur les appels, changements de planning et dossiers incomplets déjà
  très reconnaissables.
- Expliquer immédiatement qu'un outil de gestion d'interventions relie bureau,
  technicien, compte rendu et suite administrative.
- Donner le verdict : **mesurez une semaine, testez un standard sur les cas qui
  cassent aujourd'hui, puis ne financez que l'écart qui résiste**.
- Annoncer le résultat concret : coût du statu quo, protocole hors ligne, TCO
  trois ans et choix entre cinq niveaux.

### Éléments à supprimer

- Toute répétition de « standard si possible, sur-mesure si nécessaire » qui ne
  porte ni preuve ni nouvelle conséquence.
- Les formulations qui réduisent « hors ligne » à une case oui/non.
- Toute future promesse de gain non issue des mesures du lecteur.
- Les détails juridiques qui ne changent pas une décision de donnée ou de rôle.

### Éléments à conserver

- La scène d'ouverture.
- Le parcours bureau / terrain / étape terminée.
- Les cinq situations difficiles.
- L'option d'arrêter le pilote.
- Le refus de la géolocalisation par défaut.
- La transmission contrôlée vers la facturation.
- Le CTA capable de conclure à l'absence de développement.

## 10. Contre-audit après correction

La page publique n'a pas été modifiée pendant cet audit. Les portes ci-dessous
sont celles de la future réécriture.

| Problème | Priorité | Correction appliquée | Revalidation indépendante |
| --- | --- | --- | --- |
| Comparaison sans coûts ni produits datés | P1 | En attente | Rouvrir tarifs et rejouer le même parcours |
| Mode hors ligne traité comme un booléen | P1 | En attente | Exécuter lecture, écriture, file, reconnexion et conflit |
| Aucun coût de départ ni point mort | P1 | En attente | Refaire les quatre scénarios et contrôles inverses |
| Pilote sans mesures de départ ni seuil propre | P1 | En attente | Vérifier métriques, responsable et décision datée |
| Formulaire mobile absent des options | P1 | En attente | Ajouter puis vérifier son bon et mauvais fit |
| Maintenance, support et sortie incomplets | P1 | En attente | Vérifier TCO 36 mois et recette de sortie |
| Données et suivi sans registre synthétique | P2 | En attente | Relire CNIL et faire vérifier le périmètre |
| CTA sans livrable de diagnostic nommé | P2 | En attente | Vérifier résultat exact et mauvais fit |
| Fait faux ou juridiquement dangereux identifié | P0 | Aucun à ce snapshot | Rouvrir toutes les sources après réécriture |

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

Objectif de réécriture : au moins **90/100**, aucun axe sous **8/10**, et
Intention, Décision, Pédagogie, Profondeur, Preuve et Comparaison à **9/10**
minimum après contre-audit indépendant.

## 11. Preuves techniques et visuelles

```text
Manifeste : aucun manifeste créé ; audit seulement
Calculs refaits : oui — temps brut, part récupérable, TCO 36 mois, point mort, conflits hors ligne et avance de facturation
Sources rouvertes : oui — France, États-Unis, Royaume-Uni, Australie ; éditeurs et sources publiques/primaires
Liens vérifiés : URL extraites et syntaxe contrôlée ; sources décisives ouvertes le 24 juillet 2026
Commandes : lecture intégrale page/recherche/modèle ; shasum -a 256 ; recalculs Node.js ; contrôle des tableaux Markdown
Rendu 320 / 390 / 768 / 1024 / 1440 : non exécuté, aucune page publique modifiée
Image sociale : non contrôlée dans cet audit éditorial
Statut maximal prouvé : audité ; plan de réécriture documenté
Réserve publication / indexation : aucune correction n'est publiée ; indexable, indexé et classé restent des états distincts
```
