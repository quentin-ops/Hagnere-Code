# Dossier de recherche et d'intégration — React Native ou Flutter en 2026

> Recherche internationale reprise et vérifiée le 25 juillet 2026. Ce dossier
> documente désormais les portes P1 et P2 ; il ne choisit pas un framework à
> la place du lecteur et ne vaut ni devis, ni audit juridique, ni preuve de
> performance d'une future application.

**Statut réel : P1 et P2 R2 terminées — portes validées. Le contre-audit P3 R1
du snapshot P2 R1 s'est conclu par un NO-GO à 90/100 ; un nouveau contre-audit
P3 reste requis. P4 et publication non déclarées.**

## Journal des quatre passes

Propriétaire éditorial unique : orchestrateur Hagnéré Code.  
Responsable de la synthèse P1 : agent de recherche du giga-audit.

| Passe | État | Date | Snapshot | Blocage suivant |
| --- | --- | --- | --- | --- |
| 1. Recherche | Terminée — porte validée | 25 juillet 2026 | `manifests/react-native-ou-flutter-p1-2026-07-25-r2.sha256` | aucun dans le périmètre P1 |
| 2. Rédaction et intégration | Terminée — correctif R2 gelé | 25 juillet 2026 | `manifests/react-native-ou-flutter-p2-2026-07-25-r2.sha256` | aucun dans le périmètre P2 R2 |
| 3. Contre-audit indépendant | R1 terminée — NO-GO à 90/100 ; relance requise | 25 juillet 2026 | `react-native-ou-flutter-p3-2026-07-25-r1.md` | contre-audit froid du snapshot P2 R2 non réalisé |
| 4. Plume humaine et contrôle | Bloquée | — | — | P3 non validée ; tests lecteur, navigateur et appareils absents |

Le giga-audit du 24 juillet attribuait **69/100**, avec **13 P1 et 5 P2**, à
l'ancien snapshot de page. Le contre-audit froid P1 R2 a ensuite retenu
**68/100**, avec **1 P0, 14 P1 et 5 P2**. Ces notes sont des diagnostics
historiques : P2 a remplacé le snapshot audité, mais aucune nouvelle note ne
sera revendiquée avant le contre-audit indépendant P3. Le P3 R1 a ensuite noté
le snapshot P2 R1 **90/100**, avec **0 P0, 2 P1 et 3 P2**. P2 R2 corrige ces
cinq incidents sans transformer leur intégration en validation P3.

## 1. Fiche d'identité

```text
Slug : react-native-ou-flutter
Requête principale : React Native ou Flutter
Variantes : React Native vs Flutter 2026 ; Flutter ou React Native pour application mobile ;
            application native ou multiplateforme ; alternative React Native Flutter
Moment du parcours : décider avant architecture, devis ou prototype
Lecteur précis : dirigeant, responsable produit ou DSI de PME qui doit livrer sur iPhone et Android
Situation déclenchante : deux équipes recommandent des technologies différentes sans comparer les mêmes risques
Niveau initial : connaît le métier et les utilisateurs, pas nécessairement les frameworks mobiles
Horizon de décision : livraison puis coût complet à 12, 36 et 60 mois
Décisions possibles : aucune application ; web/PWA ; React Native ; Flutter ;
                     Kotlin Multiplatform ; natif iOS et Android
Date de recherche : 25 juillet 2026
```

### Phrase réelle du lecteur

> « Quelle solution livrera le parcours mobile dont nous avons réellement
> besoin, sur les appareils de nos utilisateurs, sans nous enfermer dans une
> équipe, des modules ou une maintenance que nous ne pourrons pas reprendre ? »

### Décision unique

**Choisir la plus petite architecture qui passe les fonctions éliminatoires sur
appareils réels, peut être publiée et maintenue par l'équipe réellement
disponible, puis reste reprenable dans le coût accepté à 12, 36 et 60 mois.**

Ce n'est donc pas une élection mondiale entre React Native et Flutter. Un
framework ne gagne que pour un produit, une équipe, des appareils, un horizon
et des seuils écrits.

### Promesse au lecteur

À l'issue du guide, le lecteur doit pouvoir :

1. décider s'il a besoin d'une application installée ;
2. éliminer une option qui échoue sur une fonction critique ;
3. demander deux propositions réellement comparables ;
4. calculer le TCO sans transformer une inconnue en zéro ;
5. exiger une preuve de performance, d'accessibilité, de publication et de
   reprise avant le contrat principal.

### Questions indispensables

- Le service doit-il être installé ou un parcours web suffit-il ?
- Quels appareils, versions d'OS et modes de distribution sont réellement
  utilisés ?
- Quelle fonction peut tuer le projet : hors-ligne, synchronisation, caméra,
  Bluetooth, MDM, paiement, notification, géolocalisation, tâche de fond,
  fichier ou périphérique ?
- Quelle donnée ne doit jamais être perdue, dupliquée ou écrasée au retour du
  réseau ?
- Quels parcours doivent être complets avec VoiceOver et TalkBack ?
- Quel temps de démarrage, quelle fluidité, quelle mémoire et quelle énergie
  sont acceptables sur l'appareil plancher ?
- Quelles bibliothèques ou quels SDK tiers portent les risques natifs, de
  licence, de sécurité et de vie privée ?
- Qui sait écrire ou diagnostiquer du Swift/Objective-C et du Kotlin/Java si
  l'abstraction ne suffit plus ?
- Qui détient le dépôt, les certificats, les clés, les comptes stores et les
  secrets de CI ?
- Quel budget couvre les mises à niveau d'OS, du framework, des plugins et les
  incidents, sans le confondre avec les nouvelles fonctions ?
- Une équipe tierce peut-elle produire une build signée sans l'équipe
  d'origine ?
- Quel résultat ferait choisir le natif, une PWA, KMP ou aucun développement ?

### Action utile sans contact commercial

Remplir la fiche « preuve avant framework » des sections 13 à 21 : parcours
critique, matrice d'appareils, modules, seuils, TCO, propriétaire des comptes et
exercice de reprise.

### Hors périmètre

- garantie de classement Google ou promesse de « numéro 1 » ;
- conseil juridique individualisé sur RGPD, accessibilité ou règles des stores ;
- tarif moyen d'une application ou disponibilité supposée du marché de
  l'emploi ;
- jeu 3D, moteur temps réel ou application embarquée sans étude dédiée ;
- part universelle de code commun, gain universel de délai ou de coût ;
- prédiction de la pérennité d'un projet open source à cinq ou dix ans ;
- recommandation technologique avant le prototype du risque.

## 2. Snapshot et provenance

| Élément lu | Empreinte ou date | Usage et limite |
| --- | --- | --- |
| `src/app/guides/react-native-ou-flutter/page.tsx` | `3c9b8193f75398215bcb86c5e8f90baf182969adad3c5aab27c14a8cc2fdec1c` | base éditoriale uniquement ; page non modifiée, état public non revérifié |
| `src/app/guides/react-native-ou-flutter/opengraph-image.tsx` | `f73bec62d8800cec2219f6f333f02937cef96398d47daa9291474e231184f17b` | visuel existant lu pour le snapshot ; aucun contrôle de rendu P1 |
| entrée du guide dans `src/lib/guides.ts` | `8bbc597f2221e73d9cc28310fd74b65c29f0da5815523e6a2f399dfeaaa8f287` | métadonnées actuelles lues ; hash du registre complet, fichier non modifié |
| audit individuel du 24 juillet | `5804f1e3cdcc600f9b68517cd6a3b388e1b7e219449c013eb2210968a0f1a561` | défauts de départ ; pas une contre-validation |
| charte people-first | `5ee616faa4959dc8ad2b0eb19a5b19ffbf53299b62665700093c5c176b0b8491` | contrat de qualité |
| workflow quatre passes | `a3a8c8f1be5d5d60b096f251f22b27ae5526adb708c334c4d6f0b7b4270c60c4` | portes P1 à P4 |
| modèle de recherche | `108bacd5508bb75b21f47e161e212b6f7f30d2a5905f3496d57b14ff960ce007` | structure du dossier |
| registre maître des 101 guides | `62f282253bbc0ffaa1a3000108640b77edefee422c006d0f04710ac2f61bc254` | priorité et cohérence de corpus |
| documentation et benchmark web | consultés le 25 juillet 2026 | pages évolutives ; calendrier de fraîcheur en section 24 |

La recherche en ligne a privilégié les documentations des éditeurs, les
plateformes Apple/Android, les standards W3C/OWASP/NIST, la CNIL et les textes
officiels. Les pages d'agences étrangères servent uniquement à cartographier
les angles et la saturation ; leurs chiffres ne deviennent pas des faits.

## 3. Position originale et frontière éditoriale

### Ce que la page actuelle fait déjà bien

- elle refuse un vainqueur universel ;
- elle déclare le biais React Native de Hagnéré Code ;
- elle met l'équipe, la fonction risquée, la maintenance et la reprise avant
  la mode ;
- elle utilise un technicien hors ligne et vingt photos comme situation
  concrète ;
- elle ouvre la décision au natif, à Kotlin Multiplatform, au web et à aucune
  application.

### Ce que la nouvelle version doit apporter

Le marché compare surtout des attributs de frameworks. Le guide doit comparer
une **chaîne de preuves** :

```text
besoin d'une app
→ parcours critique et données
→ fonction native éliminatoire
→ prototype identique sur appareils planchers
→ accessibilité et performance mesurées
→ build et diffusion réelles
→ équipe et mises à niveau
→ TCO 12/36/60
→ reprise par une autre équipe
```

L'artefact signature sera le **dossier de preuve avant framework**, et non un
tableau décoratif « avantages/inconvénients ».

### Empreinte à ne pas copier dans le corpus

| Guide voisin | Empreinte dominante | Différence obligatoire ici |
| --- | --- | --- |
| `power-apps-ou-application-sur-mesure` | cinq tests puis choix de famille | commencer par une expérience de risque sur deux appareils, pas par cinq tests |
| `no-code-ou-sur-mesure` | comparaison large et TCO de solutions | rester sur la livraison mobile et les couches natives |
| `nextjs-ou-wordpress` | deux recommandations prestataires dès l'ouverture | ne recommander aucun stack avant les preuves |
| `combien-coute-une-application-mobile` | budget et postes de coût | utiliser le coût pour départager des options déjà capables, pas répondre au prix d'une app |
| `cahier-des-charges-application-mobile` | contenu d'un document de consultation | fournir les critères techniques à injecter dans ce document sans le réécrire |

## 4. Cannibalisation et liens

| Page | Intention propre | Frontière de ce guide | Lien utile |
| --- | --- | --- | --- |
| `combien-coute-une-application-mobile` | estimer un budget mobile | comparer l'architecture d'un même produit et son coût de maintenance/sortie | vers le chiffrage après la shortlist |
| `cahier-des-charges-application-mobile` | préparer une consultation | décider quelles preuves et clauses exiger | vers la formalisation après le prototype |
| `application-gestion-interventions-terrain` | concevoir un cas métier hors-ligne | utiliser le terrain comme stress test, sans refaire le guide métier | exemple contextuel |
| `power-apps-ou-application-sur-mesure` | choisir low-code ou spécifique | comparer les modes de construction mobile quand le spécifique est déjà envisagé | seulement si Power Apps est candidat |
| `no-code-ou-sur-mesure` | arbitrage général de fabrication | traiter ici les contraintes OS, stores, appareils et natif | lien vers décision amont |
| service application mobile | vendre une prestation | le guide peut conclure Flutter, natif, PWA ou aucune app | CTA après preuve, jamais avant |

**Porte anti-cannibalisation :** cette page répond à « comment prouver
l'architecture mobile la moins risquée ? », pas à « combien coûte une app ? »
ni à « que mettre dans un cahier des charges ? ».

## 5. Demande, vocabulaire et incompréhensions

### Requêtes observées

- France : `React Native ou Flutter comparatif 2026`, `Flutter natif React
  Native coût maintenance` ;
- anglais/États-Unis : `React Native vs Flutter 2026 total cost ownership
  accessibility native modules` ;
- Royaume-Uni : `React Native vs Flutter UK cost maintenance accessibility
  offline` ;
- Allemagne : `React Native oder Flutter Vergleich Kosten Wartung
  Barrierefreiheit 2026`.

Observation qualitative du 25 juillet 2026, sans déduction de volume ni
d'intention statistique.

### Vocabulaire lecteur à traduire au fil du texte

| Terme | Traduction utile |
| --- | --- |
| framework | socle logiciel qui fournit une manière commune de construire l'app |
| natif | code ou interface directement lié à iOS ou Android ; pas synonyme automatique de rapide |
| module natif / plugin | couche qui relie l'app à une fonction propre au téléphone ou à un SDK |
| New Architecture | architecture React Native désormais obligatoire sur les versions actuelles |
| platform channel | mécanisme Flutter pour appeler du code iOS/Android |
| CI/CD | chaîne qui reconstruit, teste, signe et prépare les versions à diffuser |
| build | paquet exécutable précis, produit à partir d'un commit et d'une configuration |
| PWA | service web installable dont les capacités dépendent du navigateur et de l'OS |
| TCO | coût complet : construire, exploiter, mettre à niveau, publier, reprendre et sortir |
| réversibilité | capacité documentée d'une autre équipe à reprendre sans dépendance cachée |

### Confusions à corriger

- « une base de code » ne signifie pas zéro code iOS/Android ;
- connaître React web ne prouve pas la maîtrise des stores et du natif ;
- une démo fluide sur simulateur ne prouve ni l'appareil plancher, ni la
  batterie, ni la production ;
- les API d'accessibilité d'un framework ne rendent pas l'application
  accessible par défaut ;
- l'acceptation d'un store n'est pas un audit de sécurité, d'accessibilité ou
  de qualité métier ;
- open source ne signifie ni maintenance gratuite, ni support garanti ;
- un pourcentage de code partagé ne prédit pas le coût des 14 % restants ;
- « plus de développeurs » n'est pas une disponibilité contractuelle de deux
  personnes capables de reprendre.

## 6. Benchmark éditorial mondial

Ces pages secondaires ne servent qu'à voir ce que rencontre le lecteur. Aucun
prix, pourcentage, benchmark de performance ou chiffre d'emploi ci-dessous ne
doit être repris sans données primaires et protocole comparable.

| Marché et page observée | Angle dominant | Bon apport éditorial | Limite ou biais | Occasion pour Hagnéré Code |
| --- | --- | --- | --- | --- |
| France — [DYNSEO, « Flutter, natif ou React Native : comparatif 2026 »](https://agence.dynseo.com/flutter-natif-ou-react-native-le-comparatif-complet-2026-agence-dynseo/) | tableau vitesse/coût/performance | inclut le natif | multiplicateurs et jugements non rejouables ; vendeur d'apps | remplacer les adjectifs par des tests |
| États-Unis — [Designli, « Is React Native Right for Your App? »](https://designli.co/blog/is-react-native-right-for-your-app) | vitesse de lancement, équipe React, MVP | pose des questions produit et des contre-cas | avantage commercial React Native ; assertions de délai/coût non démontrées | exiger native skills, stores et reprise en preuve |
| Royaume-Uni — [Softomate, « React Native vs Flutter for UK App Development »](https://www.softomatesolutions.com/blog/react-native-vs-flutter-uk/) | recrutement, coûts, maintenance, conformité | traite le bus factor et la maintenance | volumes d'emplois, budgets et taux annuels non reproductibles | tester deux équipes réelles plutôt qu'un marché abstrait |
| Allemagne — [Thinkdigital, « Flutter vs React Native : Kostenvergleich 2026 »](https://www.thinkdigital.com/blog/flutter-vs-react-native-kmu-kostenvergleich-2026) | TCO PME/DACH et structure d'équipe | déplace le débat vers la durée | généralités régionales et intérêt commercial | calcul 12/36/60 sur le devis et le prototype |
| International — [Netguru, « Flutter vs React Native »](https://www.netguru.com/blog/flutter-vs-react-native) | écosystème, langage, outils, performance | couverture large et récente | tendances de marché et « potentiellement plus rapide » ne décident pas un produit | ajouter seuils, appareils et conditions réseau |
| Canada — [Shopify Engineering, retour à cinq ans](https://shopify.engineering/five-years-of-react-native-at-shopify) | migration et exploitation à grande échelle | reconnaît l'importance du natif, des mises à niveau et des tiers | entreprise, équipe et architecture non transposables ; retour React Native | garder comme contre-cas documenté, jamais comme promesse |

### Saturation qualitative

Échelle interne : `0` angle presque absent dans l'échantillon ; `5` angle très
répété. Ce n'est ni une mesure de SERP ni une probabilité de classement.

| Angle | Saturation | Ce qui manque encore |
| --- | ---: | --- |
| définitions React Native/Flutter et tableau générique | 5/5 | conséquence sur une fonction réelle |
| « quel framework est le plus rapide ? » | 5/5 | même parcours, même appareil, même build, distributions p50/p95 |
| coût initial et vivier de développeurs | 4/5 | offres comparables, capacité signée, bus factor et sortie |
| cohérence visuelle et hot reload | 4/5 | temps total jusqu'à une build de store accessible |
| natif comme troisième option | 3/5 | KMP, PWA et aucun développement au même périmètre |
| versioning, SDK stores et cadence de mise à niveau | 1/5 | dates actuelles et budget annuel par tâche |
| modules critiques et code natif de secours | 1/5 | inventaire version/licence/compatibilité/plan B |
| VoiceOver et TalkBack sur parcours complet | 1/5 | protocole manuel sur iOS et Android |
| TCO 12/36/60 avec inconnues et sortie | 1/5 | formules et sensibilité rejouables |
| reprise par une seconde équipe | 0/5 | build signée et publication sans le prestataire initial |
| preuve qu'aucune application n'est nécessaire | 0/5 | baseline web/processus et coût du statu quo |

### Océans de valeur retenus

1. décision en deux étages : éliminatoires, puis coût ;
2. comparaison de six options, dont ne rien développer ;
3. prototype du risque identique et instrumenté ;
4. accessibilité évaluée comme parcours, pas comme propriété du framework ;
5. calendrier stores relié au budget de mise à niveau ;
6. TCO avec maintenance technique distincte des évolutions métier ;
7. exercice de reprise par une équipe tierce ;
8. registre explicite des inconnues et critères d'arrêt.

## 7. Fiche de preuves primaires et actuelles

Toutes les sources ont été ouvertes le 25 juillet 2026. « Élevée » signifie que
la source fait autorité dans son périmètre, pas qu'elle prouve le choix d'une
technologie pour un projet inconnu.

### React Native et retour d'exploitation

| Affirmation publiable, avec sa borne | Source primaire | Nature / confiance | Conséquence pour la décision | Fraîcheur |
| --- | --- | --- | --- | --- |
| React Native `0.86` est la stable la plus récente ; `0.86` et `0.85` sont actives, `0.84` est en fin de cycle et `0.87` est future au 25/07/2026 | [React Native — Versions](https://reactnative.dev/versions) | calendrier Meta/RN ; élevée à cette date | inscrire version, statut et budget d'upgrade dans le devis | revalider avant P2 et publication |
| React Native reste en schéma `0.x` : changements incompatibles et fonctions peuvent arriver en version mineure ; RC et nightly ne sont pas pour la production | [Versioning Policy](https://reactnative.dev/docs/releases/versioning-policy) | politique officielle ; élevée | ne pas supposer une LTS ; tester les prochaines versions en CI sans les livrer | relecture à chaque cycle |
| Depuis `0.82`, la New Architecture est la seule architecture ; désactiver le flag ne réactive pas l'ancienne | [React Native 0.82 — A New Era](https://reactnative.dev/blog/2025/10/08/react-native-0.82) | annonce officielle ; élevée | chaque module critique doit être vérifié avec l'architecture actuelle | revalider à chaque module |
| Un Turbo Native Module demande une spécification typée, Codegen et du code Android/iOS ; l'abstraction ne supprime pas le natif | [Native Modules — Introduction](https://reactnative.dev/docs/turbo-native-modules-introduction) | documentation technique ; élevée | chiffrer Kotlin/Java et Swift/Objective-C si aucun module maintenu ne suffit | stable comme principe, API à dater |
| React Native recommande un framework tel qu'Expo pour une nouvelle app ; Expo/EAS et une app « bare » ne sont pas le même périmètre de service | [Use a framework to build React Native apps](https://reactnative.dev/blog/2024/06/25/use-a-framework-to-build-react-native-apps) | recommandation officielle ; élevée | un devis « React Native » doit préciser Expo, EAS éventuel, services et plan de sortie | revalider avant cadrage |
| Les tests de composants JS ne couvrent pas le code iOS/Android ; les parcours E2E donnent davantage de confiance mais coûtent davantage | [React Native — Testing](https://reactnative.dev/docs/testing-overview) | documentation officielle ; élevée | tester permission, module, signature et parcours sur app réelle | relecture annuelle |
| La performance doit être mesurée en build release, pas en développement | [React Native — Performance](https://reactnative.dev/docs/performance) | documentation officielle ; élevée | bannir les comparatifs sur hot reload ou build debug | relecture à chaque version |
| React Native expose des API VoiceOver/TalkBack, mais le comportement et certaines propriétés diffèrent par plateforme | [React Native — Accessibility](https://reactnative.dev/docs/accessibility) | documentation officielle ; élevée | recette manuelle séparée iOS/Android ; aucune accessibilité « gratuite » | relecture à chaque version |
| Shopify rapporte que son résultat dépend d'expertise native, de code natif, d'un budget d'upgrade et du suivi des dépendances tierces | [Shopify Engineering — Five years of React Native](https://shopify.engineering/five-years-of-react-native-at-shopify) | retour primaire d'une entreprise ; moyenne hors de son contexte | utiliser comme contre-exemple au « une équipe web suffit », pas comme benchmark | cas publié 13/01/2025 |

### Flutter

| Affirmation publiable, avec sa borne | Source primaire | Nature / confiance | Conséquence pour la décision | Fraîcheur |
| --- | --- | --- | --- | --- |
| La branche stable listée est `3.44.0` et la documentation consultée reflète le patch `3.44.7` | [Flutter — Release notes](https://docs.flutter.dev/release/release-notes) | documentation Google/Flutter ; élevée | inscrire version exacte du SDK et des packages dans le prototype | revalider avant P2 et publication |
| Flutter publie des migrations ; certaines anciennes pages peuvent devenir inexactes | [Breaking changes and migration guides](https://docs.flutter.dev/release/breaking-changes) | documentation officielle ; élevée | réserver une tâche d'upgrade et relire les migrations de chaque version traversée | à chaque mise à niveau |
| La politique de compatibilité couvre les changements du framework, mais n'engage pas en général les autres dépendances | [Flutter compatibility policy](https://docs.flutter.dev/release/compatibility-policy) | politique officielle ; élevée | ne pas promettre des upgrades « sans casse » ; auditer plugins et dépendances séparément | relecture annuelle |
| Une API non fournie peut nécessiter un plugin avec implémentations Kotlin/Java et Swift/Objective-C, ou un channel/Pigeon | [Developing packages and plugins](https://docs.flutter.dev/packages-and-plugins/developing-packages) et [platform channels](https://docs.flutter.dev/platform-integration/platform-channels) | documentation officielle ; élevée | même exigence de compétence native et de plan B que pour RN | à dater au prototype |
| Les tests d'intégration tournent sur appareil/émulateur, mais `integration_test` ne pilote pas les dialogues de permission, notifications ou vues natives | [Flutter — Testing](https://docs.flutter.dev/testing/overview) | documentation officielle ; élevée | prévoir un outil ou un test natif complémentaire pour les parcours critiques | relecture à chaque stack |
| Le profilage doit se faire sur appareil physique en mode profile proche de release ; le debug donne des résultats trompeurs | [Flutter performance profiling](https://docs.flutter.dev/perf/ui-performance) | documentation officielle ; élevée | même appareil et même scénario pour tous les candidats | relecture à chaque version |
| La checklist Flutter exige notamment TalkBack, VoiceOver, contraste, cibles tactiles, erreurs et fort agrandissement | [Flutter — Accessibility](https://docs.flutter.dev/ui/accessibility) | checklist officielle ; élevée comme méthode, non comme certificat | inscrire les parcours et seuils d'accessibilité dans la recette | relecture annuelle |

### Alternatives, plateformes et standards

| Affirmation publiable, avec sa borne | Source primaire | Nature / confiance | Conséquence pour la décision | Fraîcheur |
| --- | --- | --- | --- | --- |
| Kotlin Multiplatform permet de partager une partie de logique, toute la logique, et éventuellement l'UI avec Compose ; garder SwiftUI/UIKit reste possible | [KMP overview](https://kotlinlang.org/docs/multiplatform/kmp-overview.html) | documentation JetBrains ; élevée pour les possibilités, pas pour les gains annoncés | ne plus réduire KMP au seul partage de logique ; décider du périmètre partagé | revalider avant P2 |
| Android/iOS sont stables dans KMP core et Compose Multiplatform mobile selon JetBrains, mais la compatibilité Kotlin/Gradle/AGP/Xcode doit être suivie | [Stability of supported platforms](https://kotlinlang.org/docs/multiplatform/supported-platforms.html) et [compatibility and versions](https://kotlinlang.org/docs/multiplatform/compose-compatibility-and-versioning.html) | statut éditeur ; élevée à cette date | KMP est un candidat réel, pas une note de bas de page ; prototype et budget d'upgrade restent requis | revalider avant publication |
| Une PWA peut fonctionner hors ligne et accéder à plusieurs capacités, mais la disponibilité varie selon navigateur et plateforme ; la détection de capacité est obligatoire | [web.dev — Capabilities](https://web.dev/learn/pwa/capabilities) et [Assets and data](https://web.dev/learn/pwa/assets-and-data) | documentation Google web ; élevée comme principe | tester chaque API sur le parc cible ; ne pas exclure ni valider une PWA par étiquette | données de compatibilité à revalider |
| Un service responsive peut être préférable ; une app devient pertinente notamment pour présence persistante, fonction appareil ou hors-ligne, selon le cas | [GOV.UK Service Manual — Working with mobile technology](https://www.gov.uk/service-manual/technology/working-with-mobile-technology) | méthode institutionnelle, mise à jour ancienne ; moyenne | conserver « pas d'app » comme baseline, sans généraliser la préférence GOV.UK | méthode 2019, capacités à actualiser |
| Depuis le 28/04/2026, les uploads App Store Connect doivent utiliser Xcode 26+ et un SDK 26 | [Apple — Upcoming Requirements](https://developer.apple.com/news/upcoming-requirements/) | exigence plateforme ; élevée | l'outillage iOS est un coût commun aux stacks distribuées sur l'App Store | revalider avant chaque soumission |
| À partir du 31/08/2026, les nouvelles apps et mises à jour Google Play doivent cibler Android 16/API 36 ; les apps existantes ont une règle de disponibilité distincte | [Android — Target API requirement](https://developer.android.com/google/play/requirements/target-sdk) | exigence plateforme ; élevée, exceptions décrites par Google | relier calendrier projet, framework/plugins et target SDK ; ne pas tronquer les exceptions | revalider avant chaque soumission |
| L'Apple Developer Program est affiché à 99 USD par année ; Google indique 25 USD en une fois dans l'EEE | [Apple membership](https://developer.apple.com/support/compare-memberships/) et [Google Play EEE access](https://support.google.com/googleplay/android-developer/answer/14659200) | pages officielles ; élevée à la date, devise/taxe variables | mettre les comptes au nom du client et traiter les frais comme variables actualisables | revalider au devis |
| Apple et Google permettent une diffusion progressive, mais arrêter une version ne retire pas instantanément la build déjà installée | [Apple phased release](https://developer.apple.com/help/app-store-connect/update-your-app/release-a-version-update-in-phases), [Google staged rollout](https://support.google.com/googleplay/android-developer/answer/6346149) et [halt release](https://support.google.com/googleplay/android-developer/answer/16285429) | règles stores ; élevée | prévoir flags, API rétrocompatibles, migrations sûres et correctif avant de parler de rollback | revalider avant plan de release |
| WCAG2ICT explique comment appliquer WCAG 2.2 au logiciel non web mais reste une note informative, non une obligation juridique en elle-même | [W3C — WCAG2ICT](https://www.w3.org/TR/wcag2ict-22/) | guidance W3C ; élevée sur le statut | utiliser comme grille, puis valider la réglementation applicable au service | revalider lors d'un audit légal |
| Les audits mobiles institutionnels testent les versions Android et iOS et associent contrôles WCAG et technologies d'assistance | [GOV.UK — Accessibility monitoring](https://www.gov.uk/guidance/accessibility-monitoring-how-we-test) | méthode publique ; élevée dans son périmètre | ne pas valider l'accessibilité sur un seul OS ou par automatisation seule | mise à jour 30/09/2024 |
| La CNIL couvre applications natives, cross-platform et PWA, et demande d'encadrer permissions et SDK | [CNIL — recommandations applications mobiles](https://www.cnil.fr/fr/recommandations-applications-mobiles) et [intégration des SDK](https://www.cnil.fr/fr/applications-mobiles-comment-integrer-des-sdk-et-respecter-la-vie-privee-des-utilisateurs) | autorité française ; élevée dans son périmètre | ajouter finalité, données, permissions, SDK, destinataires et retrait au registre des modules | revalider avant conseil conformité |
| Un contrôle sécurité mobile peut être structuré par stockage, crypto, authentification, réseau, plateforme, code, résilience et vie privée | [OWASP MASVS](https://mas.owasp.org/MASVS/) ; complément institutionnel [NIST SP 800-163 Rev.1](https://csrc.nist.gov/pubs/sp/800/163/r1/final) | standard ouvert + publication NIST ; élevée comme cadres, pas comme conformité automatique | appliquer selon sensibilité ; comparer le produit, pas seulement le framework | versions à dater au cadrage |

## 8. Contradictions, quarantaines et faits négatifs

### Contradictions décisives

1. Les pages commerciales trouvent tour à tour React Native ou Flutter moins
   cher, plus rapide ou plus facile à maintenir, souvent avec des pourcentages
   incompatibles et sans même périmètre. **Conclusion : aucun taux de marché
   n'entre dans le guide.**
2. La page React Native des versions date la branche `0.86.x` au 9 juin, tandis
   que le billet d'annonce est daté du 11 juin. Le statut stable est clair ;
   une date de sortie au jour près n'apporte rien à la décision et ne doit pas
   être surinterprétée.
3. Flutter documente une politique de compatibilité du framework, mais précise
   ne pas prendre d'engagement général sur les autres dépendances. La phrase
   « Flutter se met à jour sans casse » est interdite.
4. web.dev liste à la fois de puissantes API PWA et des disponibilités
   inégales. « Une PWA ne peut pas faire du mobile » et « une PWA remplace
   toujours l'app » sont deux erreurs symétriques.
5. JetBrains permet désormais de partager logique **et** UI avec KMP/Compose.
   Le cadrage historique « KMP partage surtout la logique » est trop étroit.
6. Shopify explique que ses résultats React Native reposent aussi sur des
   spécialistes natifs, du code natif, des mises à niveau et des fondations
   internes. Son cas invalide la promesse « une équipe React web suffit ».

### Informations à ne pas publier comme preuves

- le licenciement d'équipes Google rapporté par TechCrunch en 2024 : événement
  secondaire, pas preuve d'abandon ou de pérennité de Flutter ;
- un TJM SILKHOM comme différence de coût entre frameworks ;
- une maintenance annuelle de `10 %`, `15 %`, `20 %` ou toute autre fraction
  universelle du build ;
- « natif = performance maximale », « Flutter = 95 % du natif » ou « React
  Native = plus lent » sans le parcours, l'appareil, le build et les mesures ;
- le nombre de dépôts, téléchargements, étoiles, offres d'emploi ou membres de
  communauté comme preuve suffisante de maintenabilité ;
- `86 %` de code Shopify tel que lié dans la page actuelle : le billet
  « Five years » rouvert ne porte pas ce chiffre dans son corps accessible.
  Une source primaire exacte doit être retrouvée, sinon le chiffre disparaît ;
- les `95 %` ou `99 %` d'anciens projets Shopify comme cible contractuelle ;
- « jusqu'à 100 % de code partagé » et « near-native » de la présentation KMP
  comme résultat garanti ;
- des frais de stores figés en euros, taxes et change inclus ;
- l'applicabilité automatique de l'European Accessibility Act à toute app :
  elle dépend du service, de l'opérateur, du droit transposé et des exceptions ;
- le fait qu'une build soit acceptée par Apple ou Google comme preuve de RGPD,
  sécurité, accessibilité ou absence de perte de données.

### Inconnues honnêtes après la recherche

- la disponibilité et le coût de deux équipes comparables ;
- les jours de build, module, mise à niveau et incident pour ce produit ;
- la part de code réellement commune ;
- le meilleur framework pour le scénario du lecteur ;
- les seuils métier de performance et d'autonomie ;
- la réglementation exacte applicable au futur service ;
- le coût d'opportunité du statu quo ;
- la durée de support future de chaque dépendance ;
- le taux de réussite d'une migration.

Ces inconnues ne bloquent pas P1 : elles sont précisément les entrées que P2
doit apprendre au lecteur à obtenir. Elles bloquent tout verdict de technologie
ou de budget.

## 9. Périmètre égal avant toute comparaison

Le guide ne peut comparer des technologies que si elles tentent de livrer le
même résultat. Le fil rouge recommandé est volontairement plus précis que
« une app de douze écrans ».

### Scénario central à spécifier

```text
Produit : outil d'interventions terrain iOS + Android
Utilisateurs : techniciens et superviseurs ; nombre à renseigner
Parcours critique : ouvrir sa tournée, réaliser dix interventions,
                    saisir des valeurs, prendre vingt photos, faire signer,
                    puis synchroniser sans perte ni doublon
Réseau : aucune connexion pendant 24 heures, réseau dégradé, reconnexion
Données : API existante ou à construire ; règles de conflit à écrire
Téléphone : caméra, fichiers, notification push ; autres fonctions à confirmer
Distribution : publique, privée ou MDM à décider
Accessibilité : parcours critique complet VoiceOver et TalkBack
Performance : seuils fixés avant les prototypes sur l'appareil plancher
Qualité : huit flux E2E critiques, observabilité, gestion d'incident
Maintenance : versions OS/framework/plugins, correctifs sécurité, stores
Sortie : données exportables, comptes client, build par une autre équipe
```

Les nombres de ce scénario servent à rendre l'essai reproductible, pas à
affirmer que toutes les applications métier ont dix interventions ou vingt
photos. P2 doit les présenter comme un **cas fictif à remplacer**.

### Livrables identiques à demander aux candidats

- dépôt complet et historique ;
- architecture des données et stratégie hors-ligne/conflits ;
- application iOS et Android signée sur le même périmètre ;
- versions exactes du framework, des toolchains et des dépendances ;
- inventaire des modules/SDK/licences et code propre à chaque OS ;
- suite de tests et rapport du protocole appareils ;
- matrice d'accessibilité et défauts connus ;
- pipeline de build depuis un clone propre ;
- soumission sur TestFlight et piste Google Play de test ;
- comptes, certificats et secrets sous contrôle du client ;
- runbook d'exploitation, mise à niveau et incident ;
- estimation en jours par couche, puis TCO 12/36/60 ;
- exercice de reprise et coût de sortie.

### Conditions d'égalité

Une proposition est non comparable si elle :

- retire l'accessibilité, les tests, l'observabilité ou les stores ;
- suppose le backend existant alors que l'autre le chiffre ;
- appelle « maintenance » des évolutions fonctionnelles chez un candidat mais
  seulement des correctifs chez l'autre ;
- mesure sur simulateur quand l'autre mesure sur appareil ;
- compare Expo/EAS inclus à React Native bare sans services ;
- compare KMP logique partagée à Flutter UI partagée sans distinguer les
  couches ;
- met une inconnue à `0 €` ou `0 jour` ;
- exclut la sortie ou la reprise d'un seul candidat.

## 10. Carte technique actuelle, sans vainqueur

### Versions et conséquences au 25 juillet 2026

| Option | Base actuelle à considérer | Ce que cela impose au cadrage |
| --- | --- | --- |
| React Native | stable `0.86`, New Architecture seule ; framework type Expo recommandé pour une nouvelle app | préciser Expo/bare, version SDK, modules compatibles, code natif, cadence d'upgrade |
| Flutter | branche stable `3.44.0`, documentation `3.44.7` | pinner Flutter/Dart/plugins, lire migrations, prévoir code platform/channel |
| natif iOS/Android | Xcode/SDK et Android target API imposés par plateformes | deux implémentations possibles, conventions et tests par OS, mais architecture métier commune possible |
| Kotlin Multiplatform | KMP et Compose mobile déclarés stables par JetBrains | préciser logique seule, logique + UI partielle ou UI partagée ; pinner Kotlin/Compose/Gradle/AGP/Xcode |
| PWA | standards web et capacités variables par navigateur/OS | définir matrice navigateur/appareil, stratégie offline, installation et distribution |
| aucune app | processus actuel, site responsive, outil standard ou simplification | mesurer la tâche, les erreurs et la valeur mobile avant d'engager le build |

Une ligne « actuelle » n'est pas un engagement de support. Les devis doivent
donner une politique : versions supportées, fréquence de revue, budget
provisionné, responsable et procédure de sortie d'une version obsolète.

### Matrice décisionnelle à périmètre égal

| Critère | React Native | Flutter | Natif iOS + Android | Kotlin Multiplatform | PWA | Aucune app |
| --- | --- | --- | --- | --- | --- | --- |
| unité réellement partagée | JS/TS, composants et logique selon architecture ; dossiers et code natifs subsistent | Dart, widgets et logique selon architecture ; projets/plugins natifs subsistent | backend, contrats, design system et parfois logique ; UI et intégrations par OS | de quelques modules de logique jusqu'à l'UI Compose ; choix explicite | code web commun ; adaptations par navigateur/capacité | aucun nouveau code mobile ; automatisation ou processus existant éventuel |
| accès à une fonction OS | bibliothèque compatible ou Turbo Module/code natif | plugin, FFI ou channel/code natif | API plateforme directe, qui doit quand même être conçue et testée | `expect/actual`, interop ou code plateforme selon fonction | uniquement si API disponible sur chaque navigateur cible | fonction assurée autrement ou abandonnée |
| hors-ligne | stockage, file et résolution de conflit à concevoir ; framework insuffisant | même exigence | même exigence, avec outils propres à chaque OS | logique de sync partageable ou séparée ; UI indépendante de l'intégrité | service worker/IndexedDB possibles, compatibilité et quotas à vérifier | coût et risque du processus actuel à mesurer |
| performance | build release, threads JS/UI et modules à profiler | appareil physique en profile/release, UI/raster/plugins à profiler | mesurer, car direct ne signifie pas automatiquement optimisé | mesurer logique, UI choisie et interop | mesurer navigateur, cache, mémoire, réseau et énergie sur parc cible | temps de tâche humain et erreurs, pas FPS |
| accessibilité | API RN + recette VoiceOver/TalkBack spécifique | sémantique Flutter + recette spécifique | API SwiftUI/UIKit et Android + recette spécifique | UI native ou Compose à tester selon branche | WCAG web + technologies d'assistance des navigateurs cibles | accessibilité du canal conservé reste à vérifier |
| tests | unitaires/composants + intégration/E2E natif ; JS seul insuffisant | unitaires/widgets + intégration ; dialogues natifs nécessitent complément | tests par plateforme + contrats communs | tests common + plateformes + UI choisie | tests web, offline, navigateurs et appareils | mesure terrain et contrôle qualité du processus |
| stores et livraison | Xcode, target API, signatures, politiques ; Expo/EAS éventuel à préciser | mêmes obligations de stores ; pipeline Flutter à préciser | mêmes obligations, pipelines par OS | mêmes obligations si apps distribuées ; toolchains multiples à pinner | distribution web directe si retenue ; packaging/store éventuel est un autre périmètre | aucune soumission, mais le canal existant peut avoir ses propres contraintes |
| équipe minimale crédible | React/TS **et** iOS/Android/build-release, avec relais | Dart/Flutter **et** iOS/Android/build-release, avec relais | compétence iOS et Android, produit, QA/release ; organisation à prouver | Kotlin/KMP, iOS et Android selon partage ; Gradle/Xcode | web, PWA, compatibilité mobile et exploitation | responsable métier du processus et de ses risques |
| maintenance | RN, React, framework éventuel, npm, modules, Xcode, Android, stores | Flutter, Dart, plugins, Xcode, Android, stores | OS, SDK, dépendances et deux surfaces de code | Kotlin, Compose éventuel, Gradle/AGP, Xcode et dépendances | navigateurs, standards, service worker, backend | incidents, ressaisies, outils et dépendance humaine existants |
| principal risque à apprendre | module New Architecture, qualité native, upgrade et tiers | plugin/channel, UI plateforme, upgrade et tiers | capacité de deux plateformes, parité et coût | périmètre partagé, interop iOS et chaîne de versions | fonction manquante ou différente sur un appareil cible | besoin mobile non servi ou coût actuel sous-estimé |
| réversibilité | API/données séparées du framework, native projects, lockfile, runbook | mêmes exigences, widgets/logic métier à découpler | contrats et modèles communs, docs des deux apps | frontière `common`/plateforme explicite, export vers Swift/Kotlin | API et données portables, pas de dépendance navigateur cachée | documentation du processus et données existantes |

Cette table ne donne aucun score par technologie. Elle indique **où obtenir la
preuve**. Une option capable de tout faire sur le papier peut tout de même
perdre sur l'équipe, la publication ou le coût de reprise.

## 11. Quatre scénarios et leurs décisions conditionnelles

### Scénario A — service consultatif, connecté

**Besoin :** consulter un dossier, remplir un formulaire court, joindre
occasionnellement une photo ; pas de tâche de fond critique, pas de store
obligatoire, réseau normalement disponible.

Décision conditionnelle :

- commencer par la preuve qu'un site responsive ou une PWA suffit ;
- aucune app peut gagner si l'installation n'améliore pas une tâche mesurée ;
- si une app reste nécessaire, React Native, Flutter, KMP ou natif ne sont pas
  départagés sans équipe et TCO ;
- refuser l'argument « app plus professionnelle » sans effet utilisateur.

### Scénario B — intervention hors ligne

**Besoin :** dix interventions, vingt photos, signature, 24 heures sans réseau,
reconnexion avec conflits possibles, notification et diffusion contrôlée.

Décision conditionnelle :

- toutes les options conservées doivent prouver stockage, reprise, idempotence,
  pièces jointes, permissions et récupération après arrêt forcé ;
- une PWA reste candidate uniquement si les capacités exactes passent sur les
  navigateurs/appareils imposés ;
- React Native ou Flutter restent candidats si le module et la stratégie de
  données passent ; du code natif n'est pas un échec mais un coût à montrer ;
- KMP peut partager la logique de synchronisation ou davantage, à valider ;
- le natif peut être rationnel si le risque plateforme domine, sans être
  déclaré moins cher ou plus rapide d'avance.

### Scénario C — périphérique ou tâche de fond critique

**Besoin :** Bluetooth LE, MDM, scanner, traitement continu, widget,
géolocalisation ou exécution prolongée, avec contrainte de batterie et SLA.

Décision conditionnelle :

- faire d'abord une tranche verticale de la fonction, pas une maquette UI ;
- conserver le natif comme contrôle, et KMP si une logique partagée apporte une
  frontière propre ;
- conserver React Native/Flutter seulement si le module maintenu ou
  l'implémentation native interne passe les seuils et reste reprenable ;
- éliminer une PWA dès qu'une capacité obligatoire manque sur un appareil
  cible, sans extrapoler à toutes les PWA ;
- si le périphérique impose un seul OS et un parc fermé, comparer aussi une app
  native mono-plateforme : « deux plateformes » n'est plus un périmètre égal.

### Scénario D — patrimoine existant

**Besoin :** équipe React/TypeScript, Android/Kotlin, Flutter ou deux apps
natives déjà en production.

Décision conditionnelle :

- valoriser le patrimoine seulement s'il réduit des jours prouvés et dispose
  d'un relais ;
- une équipe React web sans compétence mobile ne valide pas React Native ;
- une app Android Kotlin existante peut rendre KMP progressif pertinent ;
- une migration complète n'est pas obligatoire : moderniser, partager un
  module ou garder l'existant peut avoir le meilleur TCO ;
- ne jamais réécrire pour obtenir un nom de framework plus moderne sans
  métrique produit ou coût évité.

## 12. Matrice de gain d'information

Ordre recommandé : acheter d'abord l'information qui peut éliminer le plus
d'options au coût le plus faible.

| Rang | Inconnue | Pourquoi elle peut changer la décision | Expérience minimale | Sortie attendue | Arrêt ou redirection |
| ---: | --- | --- | --- | --- | --- |
| 1 | besoin réel d'installation | peut éviter tout projet mobile | cinq entretiens + observation de la tâche + prototype web | tâches, fréquence, réseau, fonctions appareil | si aucune valeur mobile mesurée : responsive/PWA/processus |
| 2 | fonction native la plus risquée | peut éliminer PWA, plugin ou stack | tranche verticale identique sur appareil plancher | résultat, code natif, défauts, jours | si obligatoire et impossible dans budget : natif/autre stack |
| 3 | intégrité hors-ligne | une perte de donnée annule le produit | jeu de conflits, arrêt forcé, reconnexion, reprise | journal des 50 cycles contrôlés | toute perte non expliquée bloque le candidat |
| 4 | accessibilité du parcours | un composant custom peut rendre l'app inutilisable | parcours complet VoiceOver/TalkBack | matrice contrôle/résultat/défaut | blocage si une tâche obligatoire est inaccessible |
| 5 | appareil plancher/performance | l'émulateur cache mémoire, énergie et jank | même build et données, 30 répétitions par condition | p50/p95, jank, mémoire, énergie, erreurs | seuil métier dépassé : optimiser une fois puis requalifier |
| 6 | distribution et politiques | une build non publiable n'a pas de valeur | TestFlight + piste Play ou MDM réel | build traitée, rôles, délais, erreurs | changer pipeline/stack/distribution selon cause |
| 7 | modules et SDK tiers | dette, vie privée ou incompatibilité peut dominer | inventaire + build clean + test permissions | version, licence, mainteneur, données, plan B | module sans propriétaire ni remplacement : code interne ou élimination |
| 8 | équipe et bus factor | le langage choisi peut être indisponible en pratique | deux CV nommés, disponibilités et exercice de diagnostic | capacité signée et relais | aucune seconde personne : coût/risque à corriger |
| 9 | mises à niveau | le coût récurrent peut inverser un avantage initial | upgrade d'un prototype depuis version N-1 + future en CI | jours, erreurs, plugins bloquants | cadence incompatible avec budget : changer dépendances/stack |
| 10 | reprise et sortie | révèle l'enfermement avant le contrat | clone propre et build par équipe tierce | temps, manques, accès, correctifs | build impossible sans fournisseur : livraison refusée |

Les nombres `30` et `50` sont des **minimums internes proposés pour rendre un
prototype rejouable**, pas des standards statistiques ni une preuve de
fiabilité en production. Le protocole doit augmenter l'échantillon si la
variance reste forte.

## 13. Artefact signature — la preuve avant framework

Le lecteur doit pouvoir copier ce registre avant de recevoir un devis.

### Bloc A — besoin et éliminatoires

| Champ | Valeur à remplir |
| --- | --- |
| utilisateur et tâche | |
| fréquence et conséquence d'échec | |
| pourquoi une installation est nécessaire | |
| appareils/OS planchers | |
| distribution publique, privée ou MDM | |
| durée hors-ligne et volume de données | |
| fonction native qui peut tuer le projet | |
| données sensibles et permissions | |
| parcours VoiceOver/TalkBack obligatoires | |
| seuils performance/énergie | |

### Bloc B — preuves par candidat

| Preuve | React Native | Flutter | Natif | KMP | PWA | Pas d'app |
| --- | --- | --- | --- | --- | --- | --- |
| version et architecture exactes | ND | ND | ND | ND | ND | n/a |
| parcours critique réussi | ND | ND | ND | ND | ND | ND |
| hors-ligne/conflits | ND | ND | ND | ND | ND | ND |
| accessibilité iOS/Android | ND | ND | ND | ND | ND | ND |
| p50/p95 appareil plancher | ND | ND | ND | ND | ND | temps humain |
| module/SDK et plan B | ND | ND | intégré/tiers | ND | capacité web | n/a |
| build de distribution | ND | ND | ND | ND | URL/install | n/a |
| équipe + relais | ND | ND | ND | ND | ND | responsable métier |
| upgrade rejoué | ND | ND | ND | ND | navigateurs | outil/processus |
| build par équipe tierce | ND | ND | ND | ND | déploiement | transfert processus |
| TCO 12/36/60 | ND | ND | ND | ND | ND | ND |

`ND` signifie **non déterminé**, jamais zéro. Un candidat n'obtient pas une
mauvaise note parce que la preuve manque : il reste **non qualifié** et ne peut
pas gagner.

### Bloc C — décision

```text
Éliminatoires passées :
Inconnues restantes :
Option la moins complexe encore qualifiée :
Écart de TCO 12/36/60 :
Scénario qui inverse le choix :
Condition de réexamen :
Responsable de la décision :
Date et versions :
```

## 14. Inventaire des fonctions, modules, plugins et SDK

Le nom du framework ne dit pas qui porte la fonction. P2 doit fournir cette
grille avant tout verdict.

| Fonction | Obligatoire ? | OS/appareils | Candidat module/SDK | Version pin | New Arch/Flutter/KMP/PWA compatible ? | Licence | Données/permissions | Signal de maintenance | Test réel | Plan B et jours |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| caméra + vingt photos | oui dans le fil rouge | iOS/Android planchers | à choisir | ND | ND | ND | photos, caméra, fichiers | release/changelog/propriétaire | ND | API native ou autre module |
| stockage hors-ligne | oui | deux OS | à choisir | ND | ND | ND | données métier | migrations/tests | ND | implémentation interne |
| synchronisation fond | à qualifier | deux OS | à choisir | ND | ND | ND | réseau, batterie | politique OS | ND | tâches natives |
| notification push | à qualifier | APNs/FCM | à choisir | ND | ND | ND | identifiant/token | maintenance SDK | ND | intégration directe |
| signature | oui | tactile + AT | à choisir | ND | ND | ND | potentiellement biométrique | export/preuve | ND | composant accessible |
| BLE/MDM/scanner | selon projet | parc exact | à choisir | ND | ND | ND | sensible selon usage | constructeur/SLA | ND | natif ou élimination |
| analytics/crash | oui, minimisé | deux OS | à choisir | ND | ND | ND | télémétrie | DPA/rétention | ND | solution auto-hébergée/autre |
| paiement/identité | selon projet | deux OS/stores | à choisir | ND | ND | ND | finance/identité | conformité/version | ND | redirection web ou natif |

### Signaux acceptables

- version compatible avec le prototype piné ;
- changelog et politique de support lisibles ;
- responsable identifiable et capacité de correctif ;
- licence compatible avec l'usage ;
- tests sur les deux OS et l'architecture actuelle ;
- inventaire des données, destinataires, permissions et rétention ;
- dépendances transitives et alertes de vulnérabilité ;
- temps estimé pour remplacer ou internaliser.

### Signaux insuffisants seuls

- étoiles GitHub, téléchargements hebdomadaires ou ancienneté ;
- mention dans un article comparatif ;
- badge « compatible » non rejoué ;
- build d'exemple sur simulateur ;
- promesse du prestataire sans version, commit et appareil ;
- absence d'issue ouverte ;
- « utilisé par une grande entreprise ».

## 15. Protocole de preuve sur appareils réels

### 15.1 Pré-enregistrement

Avant de lancer une app :

1. figer le même commit fonctionnel, données de test et parcours ;
2. pinner versions RN/Expo éventuel ou Flutter/Dart, plugins, Xcode, SDK,
   Kotlin/Gradle/AGP et OS ;
3. choisir dans les données utilisateurs l'appareil plancher de chaque OS et un
   appareil de référence actuel ; à défaut, déclarer l'hypothèse ;
4. écrire les seuils métier avant de voir les résultats ;
5. préciser ce qui est mesuré par outil, chronométrage ou observation ;
6. définir un seul cycle d'optimisation autorisé avant requalification, pour ne
   pas favoriser le candidat familier.

### 15.2 Builds

- React Native : build `release`, sans logs de développement ;
- Flutter : mode `profile` pour diagnostiquer puis build `release` pour le
  contrôle final ;
- natif/KMP : configuration de distribution comparable ;
- PWA : version production, cache/service worker stabilisé et navigateur exact ;
- tous : paquet, commit, configuration, appareil, température et état batterie
  consignés.

Le mode debug et le hot reload ne sont jamais des mesures client.

### 15.3 Matrice minimale d'appareils et de contextes

| Axe | Niveau 1 | Niveau 2 | Pourquoi |
| --- | --- | --- | --- |
| iOS | appareil physique plancher supporté | appareil physique récent de référence | détecter coût ancien et régression actuelle |
| Android | appareil physique plancher représentatif | appareil récent de référence | fragmentation, mémoire et jank |
| réseau | Wi-Fi stable | réseau contraint et perte intermittente | latence, reprise, doublons |
| hors-ligne | mode avion après préchargement | démarrage entièrement hors-ligne | distinguer cache d'une vraie autonomie |
| stockage | espace normal | espace faible si cas critique | échec photo/base |
| accessibilité | réglages standards | VoiceOver/TalkBack + texte/affichage agrandi | usage réel, pas API présente |
| cycle app | premier lancement | reprise arrière-plan et arrêt forcé | permissions, état et persistance |

Les modèles précis doivent venir de l'analytics existante, du parc d'entreprise
ou d'une enquête. Un téléphone haut de gamme unique ne qualifie pas le produit.

### 15.4 Mesures reproductibles

| Mesure | Méthode | Échantillon POC proposé | Sortie | Seuil |
| --- | --- | ---: | --- | --- |
| démarrage à froid | app arrêtée, même jeu de données | 30/appareil | p50, p95, min/max et erreurs | fixé par le produit |
| prêt à agir | du tap à la première action possible | 30/appareil | p50/p95 | fixé avant test |
| parcours terrain | dix interventions + vingt photos | 30/condition réseau | durée, erreurs, reprises | aucun blocage ; temps cible métier |
| fluidité | scroll/animation du parcours critique | 30 répétitions | distributions de frames/jank | budget lié au taux de rafraîchissement cible |
| mémoire | pic et état stable | même parcours | pic, croissance, arrêt OS | plafond appareil plancher |
| énergie | scénario chronométré identique | au moins 3 séries longues | variation et échauffement | seuil métier/appareil |
| synchronisation | conflits, doublons, reprise après kill | 50 cas scriptés | perdus, doublons, conflits résolus | zéro perte silencieuse |
| upload photos | même poids et formats | 30/condition | p50/p95, retries, données | seuil métier |
| stabilité | pilote de production | un cycle métier complet | crash/ANR, appareils, versions | seuil fixé selon criticité |

`16 ms` ou `60 fps` expliquent un budget de frame, mais ne constituent pas le
seuil universel de toute interaction. Un écran statique, un scanner ou une
animation n'ont pas les mêmes besoins. Les seuils doivent être exprimés en
tâches et appareils.

### 15.5 Outils officiels à privilégier

- iOS : XCTest performance metrics, Instruments et Organizer/MetricKit pour
  lancement, mémoire, CPU, hitches, stockage et énergie ;
- Android : Macrobenchmark pour démarrage et frame timing, Android Vitals pour
  données terrain, crashes, ANR, batterie et démarrage ;
- React Native : profiler les threads pertinents et vérifier en release ;
- Flutter : DevTools en profile puis mesure plateforme/production ;
- web/PWA : outils performance du navigateur et télémétrie réelle par
  navigateur/appareil.

### 15.6 Deux étages de preuve

**Laboratoire :** compare rapidement des implémentations contrôlées.  
**Pilote :** vérifie les appareils, réseaux, volumes et comportements réels.

Le laboratoire ne permet pas d'écrire « performant en production ». Après
pilote, conserver les distributions par appareil et version, pas seulement une
moyenne globale qui masque le parc plancher.

## 16. Accessibilité, sécurité et diffusion : trois preuves communes

Le framework ne porte pas seul ces risques. La comparaison doit demander le
même résultat produit à chaque candidat.

### 16.1 Recette VoiceOver et TalkBack

Le parcours critique complet est exécuté une fois avec VoiceOver sur iOS et une
fois avec TalkBack sur Android, sur appareil physique. La présence d'un libellé
dans le code ou le passage d'un scanner automatique ne suffit pas.

| Contrôle | Preuve attendue | Défaut éliminatoire pour le parcours critique |
| --- | --- | --- |
| ordre de focus | vidéo ou journal pas à pas de l'ordre réel | focus perdu, piégé ou incohérent |
| nom, rôle, état, valeur | annonce capturée pour chaque contrôle | action impossible à comprendre |
| action et retour | changement d'état annoncé sans inspection visuelle | paiement, sauvegarde ou erreur silencieux |
| validation et erreurs | erreur reliée au champ, annoncée et récupérable | donnée rejetée sans cause ni issue |
| contenu dynamique | chargement, synchronisation et succès annoncés | attente indéfinissable |
| texte et affichage agrandis | écrans à l'échelle cible définie par le produit | contenu ou action essentielle tronqués |
| contraste et information | contrôle automatique puis vérification visuelle | information portée par la couleur seule |
| cibles tactiles | mesure et essai sur appareil | action critique impraticable |
| mouvement | réduction respectée quand elle est requise | animation bloquante ou déclenchante |
| clavier, switch ou commande externe | test si le public ou le matériel l'exige | aucun chemin alternatif |

À compléter par :

- tests automatisés de propriétés et régressions, sans leur attribuer une
  couverture qu'ils n'ont pas ;
- inspection manuelle des deux OS ;
- test avec des personnes utilisatrices représentatives lorsque l'enjeu et le
  budget le justifient ;
- preuve des composants natifs, vues embarquées et dialogues système, souvent
  hors du contrôle direct du framework ;
- grille WCAG 2.2/WCAG2ICT comme méthode, puis qualification juridique séparée
  du service, de l'opérateur et du marché.

Le seuil n'est pas « zéro défaut sur toute l'app » écrit après coup. Avant le
prototype, le commanditaire nomme les tâches qui doivent être réalisables sans
vue, avec agrandissement et, si pertinent, sans geste complexe.

### 16.2 Vie privée et sécurité

Le registre suivant est rempli pour **le produit**, puis chaque option décrit
comment elle satisfait les exigences. Le nombre de vulnérabilités du framework
seul ne compare pas deux architectures complètes.

| Domaine | Questions de preuve |
| --- | --- |
| données | quelles données, finalités, bases, durées, destinataires et exports ? |
| permissions | lesquelles sont indispensables, à quel moment et avec quelle issue en cas de refus ? |
| SDK | quelles données chaque SDK collecte-t-il, vers qui, avec quelle version et quel mécanisme de retrait ? |
| stockage local | quelles données hors ligne, quelle protection, quel effacement et quelle sauvegarde ? |
| identité | authentification, renouvellement, révocation, récupération et appareils partagés |
| réseau/API | transport, validation serveur, autorisation objet, reprise et résistance aux rejeux |
| secrets et signature | où vivent clés, certificats et secrets ; qui peut produire une build signée ? |
| dépendances | versions, licences, transitivité, avis de sécurité, délai de correction et remplaçant |
| journalisation | événements utiles, minimisation, accès, rétention et corrélation d'incident |
| mise à jour | compatibilité API/données, migrations, flags et arrêt d'une version vulnérable |
| sortie | export intelligible, effacement, révocation des accès et retrait des SDK/services |

La CNIL fournit le cadre mobile et SDK pour la France ; OWASP MASVS et NIST
structurent la vérification technique selon la sensibilité. Aucun de ces cadres
ne transforme une checklist remplie en certificat de conformité.

### 16.3 Stores, bêta et retour arrière

Le même plan de diffusion est chiffré pour React Native, Flutter, natif et KMP
si ces options passent par les stores :

1. comptes Apple et Google au nom du client, rôles et second administrateur ;
2. certificats, clés, profils, identifiants et secrets documentés ;
3. build reproductible avec les SDK exigés au moment de la soumission ;
4. TestFlight et piste interne/fermée Google avec groupes nommés ;
5. conformité des fiches, données, permissions et déclarations ;
6. diffusion progressive, observabilité et personne habilitée à l'arrêter ;
7. API rétrocompatible, migration locale sûre et fonctions désactivables ;
8. procédure de correctif et communication.

Une diffusion interrompue n'efface pas la mauvaise version déjà installée. Le
« rollback en un clic » est donc interdit comme promesse générique : le produit
doit supporter simultanément d'anciennes et nouvelles builds le temps du
correctif. Les exigences Xcode/SDK Apple et target API Android de la section 7
sont des entrées datées à revalider à chaque release, pas des propriétés de
React Native ou Flutter.

## 17. Exploitation, équipe, support et réversibilité

### 17.1 Chaîne CI/CD démontrable

Une option n'est qualifiée que si, depuis un checkout propre et les accès
documentés, une personne autorisée peut :

1. installer les versions pinées de l'outillage ;
2. reconstruire iOS et Android sans secret local du prestataire ;
3. exécuter lint, tests unitaires, composants, intégration et E2E selon le
   registre de risques ;
4. tester les modules et dialogues plateforme qui échappent aux tests du
   framework ;
5. produire des artefacts signés traçables vers commit et configuration ;
6. publier sur une piste de bêta au nom du client ;
7. retrouver symboles, journaux, crashes et ANR par build ;
8. inventorier licences, dépendances et composants logiciels ;
9. rejouer une restauration ou un correctif sans l'ordinateur de l'auteur.

Un dépôt qui « compile chez le développeur » et un service de build auquel seul
le prestataire accède ne constituent pas cette preuve.

### 17.2 Capacité réelle de l'équipe

Le guide ne publie pas de prétendue abondance mondiale de développeurs. Il fait
tester les personnes effectivement disponibles.

| Capacité | Personne 1 | Personne 2 | Preuve et disponibilité |
| --- | --- | --- | --- |
| produit et modèle de données | ND | ND | réalisation comparable |
| React/TypeScript ou Dart | ND | ND | exercice sur le prototype |
| Kotlin/Android | ND | ND | module, permission ou diagnostic |
| Swift/iOS | ND | ND | module, signature ou diagnostic |
| hors-ligne et conflits | ND | ND | scénario de reprise |
| VoiceOver/TalkBack | ND | ND | recette filmée |
| sécurité/vie privée | ND | ND | registre et remédiation |
| CI, signature et stores | ND | ND | build bêta indépendante |
| mise à niveau | ND | ND | rehearsal documentée |
| reprise/incident | ND | ND | exercice chronométré |

`ND` bloque une exigence obligatoire ; il ne vaut ni zéro euro ni zéro point.
Deux devis de même périmètre et deux entretiens techniques apportent davantage
d'information qu'un volume d'offres d'emploi collecté sans contexte. Le bus
factor et le temps contractuel de mobilisation doivent être explicites.

### 17.3 Support et versioning

Le plan annuel sépare :

- mise à niveau du framework et de son langage ;
- Xcode, SDK iOS, target SDK Android, Gradle/AGP et outils de signature ;
- plugins/modules/SDK tiers ;
- correctifs de sécurité et de confidentialité ;
- changements de stores ;
- compatibilité appareils et OS ;
- dette de tests, observabilité et documentation.

React Native a une cadence et une fenêtre de branches actives courtes au
25/07/2026. Flutter publie des migrations mais sa politique ne garantit pas
toutes les dépendances. KMP ajoute une chaîne Kotlin/Gradle/AGP/Xcode à
surveiller. Le natif et le web évoluent eux aussi. Aucun candidat ne reçoit donc
le coût de maintenance `0` ou le label « LTS » sans engagement exact.

Au moins une fois par an, la CI essaie les prochaines versions compatibles dans
une branche non livrée. Le devis distingue les tâches techniques ci-dessus des
évolutions métier demandées par le client ; appliquer un pourcentage fixe au
coût initial masquerait les deux.

### 17.4 Migration, reprise et sortie

La réversibilité est testée, pas décrite par « technologies standards » :

- dépôt, historique, tickets, comptes stores, certificats et services au nom du
  client ou transférables par un mécanisme écrit ;
- contrats API, schémas, migrations, fixtures et formats d'export versionnés ;
- inventaire des écrans et fonctions qui dépendent d'un plugin, d'un SDK, de
  code natif ou d'un service propriétaire ;
- données exportables dans un format documenté, avec import rejoué ;
- runbook de build, publication, incident, restauration et retrait ;
- nouvelle équipe capable de produire une bêta depuis un poste propre ;
- preuve qu'un module critique peut être remplacé ou internalisé ;
- budget et ordre de migration par tranche, sans exiger une réécriture totale
  d'emblée.

Pour un produit critique, le commanditaire fixe aussi ses objectifs de reprise
et de perte de données. Ils ne doivent pas être inventés par le guide.

Une migration réussie conserve simultanément les contrats de données, les
parcours essentiels, l'accessibilité, les mesures de performance et la
possibilité de revenir au dernier état sain. « Réécrire en Flutter » ou
« réécrire en React Native » n'est jamais la première conclusion automatique.

## 18. TCO 12, 36 et 60 mois : méthode et calcul rejouable

### 18.1 Formule

Pour un horizon `H` exprimé en mois, poser `Y = H / 12`. Chaque terme est
accompagné d'une source, d'une unité et d'une date :

```text
TCO(H) =
  cadrage
  + construction commune
  + adaptation propre à l'option
  + code natif et modules
  + données et API
  + accessibilité
  + tests
  + CI, signature et stores
  + appareils, comptes et services
  + somme sur Y années (maintenance technique
                  + évolutions métier
                  + incidents et sécurité
                  + temps interne)
  + coût estimé de sortie et reprise si elle intervient à l'horizon H
```

Une cellule inconnue reste `ND`. Elle ne devient pas zéro pour permettre un
total. Les postes identiques restent visibles : ils peuvent ne pas modifier
l'écart entre options, mais appartiennent au budget du décideur.

### 18.2 Jeu d'hypothèses fictif

Ce scénario enseigne le calcul ; ce n'est ni un tarif de marché, ni un devis, ni
une prédiction pour React Native ou Flutter. Les candidats sont anonymisés
jusqu'au prototype.

| Hypothèse fictive | Option A | Option B | Justification dans le scénario |
| --- | ---: | ---: | --- |
| taux de calcul de toutes les journées techniques | 650 € | 650 € | convention identique, pas benchmark |
| lot initial commun, toutes disciplines incluses | 110 j | 110 j | cadrage, produit, API, a11y, tests, CI/stores |
| adaptation/modules propres à l'option | 6 j | 16 j | résultat du POC fictif |
| maintenance et upgrades techniques/an | 20 j | 18 j | rehearsal fictive |
| évolutions métier communes/an | 12 j | 12 j | même feuille de route |
| incidents et sécurité/an | 6 j | 6 j | même hypothèse explicite |
| temps interne client/an | 8 j à 500 € | 8 j à 500 € | produit, recette, stores |
| appareils, comptes et mise en place | 3 000 € | 3 000 € | enveloppe datée fictive |
| services/an | 4 800 € | 4 800 € | télémétrie, build et test fictifs |
| sortie si elle intervient à l'horizon | 12 j | 12 j | hypothèse identique aux trois horizons |

Les `110 j` communs ne sont valides que parce que le scénario les détaille et
les fixe. Dans un vrai dossier, chaque sous-poste reste séparé et `ND` tant
qu'une offre ou une mesure ne l'a pas renseigné.

### 18.3 Résultats

| Horizon | Option A | Option B | Écart |
| --- | ---: | ---: | ---: |
| 12 mois | 119 700 € | 124 900 € | A : -5 200 € |
| 36 mois | 186 700 € | 189 300 € | A : -2 600 € |
| 60 mois | 253 700 € | 253 700 € | égalité dans ce scénario |

Calculs auditables :

```text
commun annuel hors maintenance technique =
  12 j × 650 + 6 j × 650 + 8 j × 500 + 4 800
= 20 500 €

A_12 = (110 + 6) × 650 + 3 000
       + 1 × (20 × 650 + 20 500)
       + 12 × 650
= 119 700 €

B_12 = (110 + 16) × 650 + 3 000
       + 1 × (18 × 650 + 20 500)
       + 12 × 650
= 124 900 €

A_36 = (110 + 6) × 650 + 3 000
       + 3 × (20 × 650 + 20 500)
       + 12 × 650
= 186 700 €

B_36 = (110 + 16) × 650 + 3 000
       + 3 × (18 × 650 + 20 500)
       + 12 × 650
= 189 300 €

A_60 = (110 + 6) × 650 + 3 000
       + 5 × (20 × 650 + 20 500)
       + 12 × 650
= 253 700 €

B_60 = (110 + 16) × 650 + 3 000
       + 5 × (18 × 650 + 20 500)
       + 12 × 650
= 253 700 €
```

L'option A économise dix jours au départ ; B économise deux jours par an. Avec
le même taux, l'avantage initial de `6 500 €` est absorbé par `1 300 €` par an,
soit cinq ans. Si les jours, taux, services ou coûts de sortie changent, le
seuil change. Le tableur doit donc exposer au minimum ces sensibilités, jamais
seulement le total central.

### 18.4 Coût du statu quo

Autre illustration fictive, à remplacer par observation :

```text
15 minutes perdues par jour
× 20 personnes
× 220 jours
× 32 €/h chargé
× 70 % réellement réaffectable
= 24 640 €/an de capacité potentiellement récupérable
```

Ce résultat n'est pas `24 640 €` de trésorerie économisée. Il faut préciser ce
que les personnes feront du temps libéré, ajouter erreurs et risques documentés,
puis comparer cette baseline à une amélioration de processus, une PWA et aucune
app nouvelle. Une hypothèse de coût d'opportunité inconnue reste `ND`.

### 18.5 Éliminatoires avant score

Un score pondéré ne compense jamais une perte de données, une fonction native
impossible ou un parcours inaccessible. Après les éliminatoires seulement :

1. le commanditaire répartit `100` points avant les démonstrations ;
2. chaque candidat reçoit `0` à `3` par critère, avec lien vers une preuve ;
3. `score = somme(poids × note / 3)` ;
4. une donnée `ND` sur un critère obligatoire disqualifie temporairement le
   candidat, au lieu de lui attribuer arbitrairement zéro ;
5. le TCO est présenté à côté du score, pas converti mécaniquement en points.

La décision conserve la fiche d'hypothèses, les mesures brutes et les raisons de
rejet. Changer les poids après avoir reconnu le logo préféré invalide la
comparaison.

## 19. Position professionnelle, bons cas et contre-cas

### 19.1 Position retenue

Il n'existe pas de vainqueur universel entre React Native et Flutter, ni même
d'obligation de les départager. La bonne décision est l'option qui :

1. franchit les exigences éliminatoires du produit ;
2. démontre son risque principal sur appareils et conditions représentatifs ;
3. peut être construite, exploitée et reprise par des personnes disponibles ;
4. présente le meilleur compromis explicite à 12, 36 et 60 mois ;
5. reste acceptable quand une hypothèse importante se dégrade.

### 19.2 Quand chaque option mérite de rester en lice

| Option | Signaux favorables à vérifier | Contre-cas ou signal d'arrêt |
| --- | --- | --- |
| React Native, framework et services nommés | équipe React **et mobile** disponible ; modules actuels prouvés ; possibilité de partager une logique réellement commune ; build et reprise maîtrisés | équipe seulement web ; module critique incompatible avec l'architecture actuelle ; code natif ou services Expo/EAS non chiffrés |
| Flutter | équipe Dart/Flutter avec compétences iOS/Android ; besoin d'un système visuel commun ; plugins et migrations testés ; chaîne de reprise disponible | choix motivé seulement par l'interface ou le hot reload ; dialogue système/module non couvert ; Dart, natif ou maintenance sans second responsable |
| natif Swift/Kotlin | fonction profondément liée à chaque OS ; exigences spécifiques et équipes séparées réellement disponibles ; indépendance aux couches cross-platform valorisée | produit simple, équipes doublées non financées, logique dupliquée sans bénéfice mesuré ; « natif est toujours plus rapide » comme seule preuve |
| Kotlin Multiplatform | forte logique partagée testable ; équipe Kotlin et iOS ; choix explicite entre UI native et Compose partagé ; chaîne de versions maîtrisée | périmètre de partage supposé ; manque de compétence Swift/iOS ; compatibilité outil ou librairie critique non prouvée |
| PWA | accès par URL prioritaire ; installation store non décisive ; APIs nécessaires présentes sur les navigateurs/appareils cibles ; mode dégradé acceptable | fonction native, arrière-plan, intégration ou hors-ligne critique non fiable sur le parc réel ; décision fondée sur une liste générique de capacités |
| aucune nouvelle app | service responsive, outil existant ou amélioration de processus satisfait les tâches ; adoption d'une app non démontrée ; coût du statu quo inférieur | présence persistante, fonction appareil ou autonomie hors-ligne apporte un bénéfice mesuré que le service actuel ne peut fournir |

« Rester en lice » n'est pas gagner. Les six lignes passent le même filtre de
preuve ; une option non testée reste `ND`.

### 19.3 Contre-cas à intégrer au guide

- Une équipe React web sans expérience de permissions, stores, Kotlin et Swift
  peut rendre React Native plus risqué qu'une équipe Flutter éprouvée.
- Une interface très dessinée ne suffit pas à rendre Flutter moins coûteux si
  les plugins critiques, le natif et la reprise ne sont pas couverts.
- Deux applications natives peuvent être moins risquées qu'une couche partagée
  si une fonction critique diverge fortement entre iOS et Android.
- KMP peut partager l'UI ou ne partager que certaines couches ; le pourcentage
  doit venir du produit, jamais de l'étiquette.
- Une PWA peut couvrir davantage de fonctions qu'un comparatif ancien ne le
  laisse penser, mais seulement sur le parc et les navigateurs testés.
- Une base de code partagée peut déplacer, et non supprimer, le travail vers les
  modules, tests, adaptations et mises à niveau.
- Une grande entreprise ayant réussi avec une technologie ne fournit ni
  l'équipe, ni l'architecture, ni le budget du lecteur.
- Une app acceptée par un store peut toujours perdre des données, exclure des
  utilisateurs ou exposer un SDK intrusif.
- Une réécriture complète est rarement la seule voie : isoler API, données ou
  parcours puis migrer par tranche peut être préférable.
- Si le service web ou le processus existant passe les tâches critiques, aucune
  app nouvelle peut être le meilleur résultat.

### 19.4 Conflit d'intérêts

Hagnéré Code présente et vend des prestations de développement mobile,
notamment autour de React Native. Cette position peut favoriser la technologie
déjà maîtrisée, le prototype qui ressemble au portefeuille existant et le CTA
qui mène à une prestation.

Mesures éditoriales :

- afficher cette compétence sans en faire une preuve de supériorité ;
- permettre explicitement à la méthode de conclure Flutter, natif, KMP, PWA ou
  absence d'app ;
- remettre au client hypothèses, code du POC, mesures et comptes ;
- faire contre-lire un risque Flutter/KMP/natif par une personne réellement
  compétente dans l'option lorsqu'il décide le projet ;
- solliciter au moins une offre indépendante à périmètre égal ;
- déclarer toute commission, affiliation ou service propriétaire lié à un
  outil ; en son absence, ne pas en inventer.

## 20. Porte de décision, échecs et mesure en production

### 20.1 Registre pass/fail avant le score

| Porte | Preuve minimale | Pass | Échec / arrêt |
| --- | --- | --- | --- |
| besoin d'une app | tâche et bénéfice contre baseline web/processus | amélioration mesurable et adoption plausible | aucune fonction ou valeur propre à l'app |
| fonction native critique | scénario identique sur les deux OS | réussite sur le parc cible | fonction absente, instable ou sans plan B |
| hors-ligne et données | conflits, kill, reprise et sync scriptés | aucune perte silencieuse ; règles explicites | perte, doublon non détecté ou conflit insoluble |
| performance | build production, appareils et distributions | seuils métier pré-enregistrés atteints | échec persistant sur appareil plancher |
| accessibilité | parcours VoiceOver/TalkBack et agrandissement | tâches critiques réalisables | blocage critique sans correction raisonnable |
| modules/SDK | versions, licence, responsable, données et secours | compatible, maintenable, remplaçable | abandon, incompatibilité ou collecte inacceptable |
| sécurité/vie privée | registre et contrôles proportionnés | risques résiduels acceptés par le responsable | donnée ou permission sans justification/maîtrise |
| build et stores | checkout propre vers bêta client | artefact signé et traçable | dépendance à un poste, secret ou compte prestataire |
| équipe | deux relais et compétences natives nécessaires | capacité et délai contractuels | personne unique ou compétence obligatoire `ND` |
| mise à niveau | rehearsal et dépendances actuelles | chemin, charge et tests connus | stack bloquée sur une exigence OS/store |
| TCO | cellules sourcées et sensibilités | enveloppe supportable aux trois horizons | total impossible car poste obligatoire `ND` |
| reprise | équipe tierce vers build et publication bêta | exercice réussi dans le délai fixé | dépôt seul, sans données, accès ni procédure |

### 20.2 Règle d'équité

Un candidat qui échoue peut recevoir **un** cycle d'analyse et d'optimisation
défini à l'avance, avec même temps et même accès aux experts que les autres.
Après ce cycle, l'échec reste visible. Modifier le scénario, l'appareil ou le
seuil uniquement pour sauver une technologie annule la comparaison.

Le POC s'arrête aussi si :

- le commanditaire refuse de nommer la fonction critique ou les données ;
- les deux implémentations ne portent plus le même périmètre ;
- un module ou service ne peut pas être audité ou remplacé ;
- aucun responsable ne peut signer le risque résiduel ;
- le coût d'apprendre dépasse la décision qu'il peut changer.

### 20.3 Pilote et production

Les seuils ci-dessous ne sont pas universels. Chacun reçoit avant le pilote une
valeur, une population, un horizon, une source de données et un responsable :

| Indicateur | Segmentation obligatoire | Décision qu'il éclaire |
| --- | --- | --- |
| tâche critique réussie | OS, appareil, version, connectivité, accessibilité | capacité produit réelle |
| perte, doublon, conflit de données | version, scénario sync, API | sûreté hors-ligne |
| démarrage et prêt à agir p50/p95 | appareil, OS, cold/warm | expérience du parc plancher |
| frames lentes/jank | écran, appareil, taux de rafraîchissement | besoin d'optimisation |
| crash-free et ANR | build, OS, appareil | stabilité, sans moyenne globale trompeuse |
| énergie et données réseau | scénario, durée, appareil | contraintes terrain |
| blocages VoiceOver/TalkBack | parcours, OS, technologie d'assistance | accessibilité réelle |
| tickets et abandons | tâche, rôle, version | coût utilisateur et support |
| délai commit-vers-bêta | type de changement | qualité de la chaîne de livraison |
| délai de correctif | gravité, store, compatibilité API | exploitabilité |
| jours d'upgrade | framework, OS, module | TCO technique |
| reprise par un tiers | étape et dépendance | réversibilité |

Une moyenne non segmentée peut cacher l'appareil le plus fragile. Une métrique
de production ne prouve la causalité du framework : serveur, données, design et
code applicatif restent des variables.

### 20.4 Fiche finale de décision

La décision archivée contient :

- date, décideurs et options réellement comparées ;
- périmètre fonctionnel et parc ;
- éliminatoires, seuils et poids écrits avant les résultats ;
- versions, commits, appareils, builds et mesures brutes ;
- hypothèses TCO et cellules `ND` ;
- raisons de rejet et cycle d'optimisation ;
- risques acceptés, responsables et date de révision ;
- chemin de reprise et condition qui déclencherait une réévaluation.

## 21. Action autonome et prochain pas honnête

### 21.1 Diagnostic que le lecteur peut préparer

Sans choisir encore de technologie, le décideur peut réunir :

1. les trois tâches indispensables, avec utilisateurs et fréquence ;
2. le scénario qui ferait échouer le projet ;
3. fonctions téléphone, arrière-plan, matériel et permissions ;
4. volume local, durée hors-ligne, conflits et règles de synchronisation ;
5. appareils, OS, navigateurs et technologies d'assistance ;
6. systèmes, API, données, SDK et exigences réglementaires ;
7. personnes disponibles, seconde personne de reprise et comptes ;
8. dépenses/services existants et horizon 12/36/60 ;
9. baseline web/processus et coût d'opportunité documenté ;
10. seuils, preuves et motifs d'arrêt.

À l'issue, il ne doit pas obtenir « React Native gagne », mais un registre de ce
qui doit être prouvé et de ce qui reste `ND`.

### 21.2 Bon ajustement pour un accompagnement

- plusieurs options franchissent les premiers éliminatoires ;
- une fonction native, hors-ligne ou réglementaire concentre le risque ;
- deux offres ne couvrent pas le même périmètre ;
- les comptes, modules ou données sont difficiles à reprendre ;
- le TCO change fortement selon une hypothèse à mesurer.

### 21.3 Mauvais ajustement

- le choix de technologie est déjà contractuel et aucune preuve ne peut le
  changer ;
- le besoin, les utilisateurs ou le responsable des données ne sont pas
  disponibles ;
- la demande est seulement d'obtenir une validation commerciale du logo
  préféré ;
- le produit existant n'autorise aucun accès, export ou prototype ;
- aucune personne ne peut accepter les seuils et risques résiduels.

### 21.4 Livrable promis par un CTA conforme

Le CTA P2 peut proposer un **dossier de décision**, pas une recommandation
React Native prédéterminée :

- scorecard des six options et éliminatoires ;
- protocole du prototype à risque, appareils et seuils ;
- hypothèses TCO 12/36/60 et sensibilités ;
- inventaire modules/SDK, données, versions et responsables ;
- exigences de build, stores et reprise ;
- liste des inconnues à fermer avant devis.

Il doit préciser ce qui est gratuit ou payant, la durée, les données à fournir
et la politique de contact avant envoi. Aucun téléchargement générique n'est
présenté comme preuve d'expertise.

## 22. Plan P2 annoté — à rédiger, sans statut d'intégration

La P2 devra réécrire la page autour de la décision et de la preuve. Ce plan ne
signifie pas que le contenu a été intégré.

### Contrat des 150 premiers mots

Répondre immédiatement :

- ni React Native ni Flutter ne gagne pour tous les projets ;
- commencer par vérifier si une app est nécessaire ;
- éliminer sur la fonction critique et les appareils réels ;
- départager ensuite par équipe, exploitation, reprise et TCO ;
- annoncer l'artefact « preuve avant framework » et un exemple chiffré.

Ne pas ouvrir par l'histoire des deux frameworks, le langage ou un tableau de
notes.

### Structure détaillée

| H2 prévu | Question exacte du lecteur | Preuve/source à placer | Décision et format | Traitement de la page actuelle |
| --- | --- | --- | --- | --- |
| 1. Avez-vous besoin d'une application ? | qu'apporte une app qu'un service web ou le processus actuel ne fournit pas ? | GOV.UK avec borne ; baseline et calcul du statu quo | éliminer ou garder app ; mini-arbre + calcul | créer ; remonter « PWA/aucune app » de l'actuel §9 |
| 2. Les six options au même périmètre | que compare-t-on exactement ? | livrables identiques §9 et carte §10 | rendre les offres comparables ; matrice six voies | réécrire l'actuel §1, trop centré sur deux logos |
| 3. Ce que RN, Flutter et KMP impliquent aujourd'hui | où reste le code natif et quelles versions ? | RN Versions/Versioning/New Architecture/framework Expo ; Flutter releases/compat/plugins/channels ; KMP stabilité/compatibilité | savoir quoi dater et chiffrer ; schéma de couches | conserver les définitions utiles de l'actuel §2 ; supprimer `86 %` |
| 4. Trouver la fonction qui peut tuer le projet | hors-ligne, périphérique, arrière-plan ou SDK élimine-t-il une option ? | inventaire modules/SDK §14 ; CNIL pour SDK/permissions | sélectionner le risque ; registre remplissable | approfondir l'actuel §5 et son technicien |
| 5. Prouver avant de choisir | comment comparer sans favoriser l'équipe familière ? | protocole appareils §15 ; Apple/Android tools ; limites tests RN/Flutter | POC pass/fail ; fiche signature en trois étapes | créer à partir du bon InfoBox actuel |
| 6. Performance de production et accessibilité | le parcours fonctionne-t-il pour le parc plancher et avec VoiceOver/TalkBack ? | docs performance/tests/accessibility RN/Flutter ; XCTest/Instruments ; Macrobenchmark/Vitals ; WCAG2ICT/GOV.UK | mesurer distributions et tâches ; matrice de recette | remplacer les adjectifs de l'actuel §6 |
| 7. L'équipe peut-elle réellement livrer et reprendre ? | qui maîtrise web/Dart, Swift/Kotlin, stores, hors-ligne et incident ? | scorecard §17 ; deux offres à périmètre égal | qualifier capacité et bus factor ; tableau noms/preuves | approfondir l'actuel §3 |
| 8. Combien coûte chaque option à 12, 36 et 60 mois ? | quel coût complet et quel seuil de bascule ? | formule et scénario fictif §18 ; offres/mesures du lecteur | éliminatoires puis TCO/sensibilité ; calcul détaillé | remplacer l'actuel §4 et supprimer SILKHOM comme arbitre |
| 9. Comment publier et maintenir sans surprise ? | versions, stores, SDK et correctifs sont-ils budgétés ? | exigences Apple/Android datées ; politiques RN/Flutter/KMP ; phased/staged release | calendrier d'upgrade/release ; checklist | fusionner et renforcer les actuels §7–8 ; retirer TechCrunch |
| 10. Peut-on changer d'équipe ou de technologie ? | une autre équipe peut-elle reconstruire, publier, exporter et migrer ? | exercice clean checkout, contrats données/API et sortie §17 | test de reprise et budget de sortie ; pas-à-pas | approfondir les éléments dispersés actuels |
| 11. Dans quel cas chaque voie gagne-t-elle ? | quels faits feraient choisir RN, Flutter, natif, KMP, PWA ou rien ? | position et contre-cas §19 | clôture conditionnelle ; tableau sans score universel | corriger l'actuel §9, dont la définition KMP est datée |
| 12. Votre dossier de décision | quelles pièces demander avant contrat ? | porte pass/fail §20, fiche finale et action §21 | checklist imprimable + CTA honnête | remplacer l'actuel §10/CTA par un livrable précis |

### Encadrés et actifs à créer

1. **Artefact signature :** fiche « preuve avant framework » remplissable,
   version imprimable comprise.
2. **Tableau interactif ou calcul visible :** TCO 12/36/60 avec `ND` bloquant,
   sources et sensibilités.
3. **Matrice appareil/parcours :** appareils planchers, réseau, hors-ligne,
   VoiceOver/TalkBack, build et commit.
4. **Inventaire modules/SDK :** responsable, version, données, licence,
   compatibilité et plan B.
5. **Exercice de reprise :** équipe tierce, checkout propre, bêta client et
   temps mesuré.

Un actif annoncé doit être réellement présent, accessible au clavier,
compréhensible sans JavaScript si nécessaire, imprimable et testé. À défaut,
rester sur un tableau HTML complet au lieu de promettre un outil.

### Questions FAQ à conserver ou réécrire

- Quelle différence entre React Native, Expo, Flutter et KMP ?
- Une équipe React web suffit-elle pour React Native ?
- Quel choix coûte le moins à 12, 36 et 60 mois ?
- Comment tester une fonction native ou le hors-ligne avant de choisir ?
- Comment vérifier VoiceOver et TalkBack ?
- Faut-il choisir le natif pour la performance ?
- Une PWA peut-elle remplacer l'app ?
- Qui possède les comptes, certificats, code et données ?
- Comment reprendre ou migrer sans réécrire d'un coup ?
- Quelle maintenance prévoir avec les versions et les stores ?

Chaque réponse doit être autonome mais courte, puis pointer vers la section qui
porte la preuve. Les FAQ ne servent pas à répéter le guide sous dix formulations.

### Sources à retirer ou replacer

- supprimer le `86 %` Shopify tant que sa source primaire exacte n'est pas
  retrouvée ;
- supprimer SILKHOM comme preuve de coût relatif entre frameworks ;
- retirer TechCrunch de la décision de pérennité ;
- placer chaque source officielle de la section 7 à côté de l'affirmation
  concernée, avec version ou date ;
- conserver Shopify comme retour d'exploitation borné, pas comme taux ;
- ne pas transformer les pages d'agences du benchmark en preuves factuelles.

## 23. Contrat de plume humaine pour P4

La rédaction P2 doit déjà faciliter une vraie passe humaine :

- partir d'une décision et d'un obstacle concret, pas d'un plan
  « définition-avantages-inconvénients-conclusion » ;
- définir le jargon au premier usage puis revenir aux tâches du lecteur ;
- conserver le technicien, les dix interventions et vingt photos comme fil
  rouge, sans fabriquer un témoignage client ;
- donner après chaque tableau une lecture en langage courant et une action ;
- attribuer les règles datées au bon éditeur et les hypothèses au scénario ;
- montrer calculs, unités et inconnues plutôt que des adjectifs ;
- varier les rythmes : phrase courte pour la décision, détail pour le protocole,
  tableau seulement pour une comparaison répétée ;
- ne pas répéter « cela dépend » : nommer précisément **de quoi** dépend la
  décision et comment l'apprendre ;
- écrire les limites au même niveau de visibilité que les bénéfices ;
- éviter les superlatifs, les taux de code partagé et les citations décoratives ;
- ne pas inventer de « client type », retour d'expérience Hagnéré Code, délai,
  prix ou résultat de prototype ;
- terminer par un prochain pas utile même si le lecteur ne contacte personne.

La P4 devra notamment faire relire le guide par :

1. un décideur non spécialiste, qui doit pouvoir expliquer les éliminatoires ;
2. une personne mobile senior capable de contester le protocole ;
3. une personne utilisant VoiceOver ou TalkBack, ou un spécialiste
   accessibilité, pour le parcours prioritaire ;
4. une personne qui n'a pas intérêt à vendre React Native.

Ces tests ne sont pas exécutés en P1 et ne doivent pas être cochés par avance.

## 24. Fraîcheur, inputs restants et interdictions

### 24.1 Calendrier de revalidation

| Élément | Moment de revalidation | Responsable P2/produit |
| --- | --- | --- |
| versions et statut React Native | avant rédaction, avant publication, puis à chaque cadrage | auteur + référent RN |
| versions Flutter/Dart et migrations | mêmes moments | auteur + référent Flutter |
| compatibilité KMP/Kotlin/Gradle/AGP/Xcode | avant de qualifier KMP | référent KMP/iOS |
| Xcode/SDK Apple et target API Android | avant publication et chaque release | responsable livraison |
| règles, frais et pistes stores | au devis et avant soumission | propriétaire des comptes |
| plugins/modules/SDK | commit du POC, build pilote et upgrade | responsable technique |
| capacités PWA | navigateur, OS et appareil du parc au test | responsable web |
| WCAG/WCAG2ICT et droit applicable | avant publication juridique et audit du service | accessibilité + conseil qualifié |
| CNIL, données, permissions et SDK | cadrage, ajout de SDK et release | responsable traitement/DPO selon organisation |
| mesures performance/stabilité | chaque build significative, segmentée | équipe produit |
| équipe, disponibilité et prix | au projet via offres réelles | acheteur/décideur |
| TCO | devis, fin de POC, annuel et avant migration | décideur + finance/tech |

Une date « 2026 » dans le titre ne dispense pas de cette revalidation. Le guide
doit afficher sa date de vérification sans feindre une actualité permanente.

### 24.2 Inputs qui restent volontairement inconnus

- produit, utilisateurs, criticité et obligations du lecteur ;
- parc et technologies d'assistance réels ;
- APIs, données, volumes et règles de conflit ;
- module ou périphérique critique ;
- personnes et offres disponibles ;
- seuils de performance et d'accessibilité ;
- coûts et jours par poste ;
- services, incidents et fréquence d'évolution ;
- droit précisément applicable ;
- résultat des prototypes et du pilote.

P2 doit fournir les cases et la méthode pour les obtenir. Elle ne doit pas les
remplir avec des moyennes mondiales.

### 24.3 Ce que P1 n'autorise toujours pas à écrire

- « React Native est meilleur », « Flutter est plus performant » ou l'inverse ;
- « X % moins cher », « Y % de code partagé », « Z semaines » sans périmètre et
  mesure ;
- « accessible », « conforme RGPD », « sécurisé » ou « prêt pour les stores »
  sur la foi du framework ;
- « maintenance comprise » sans tâches, versions, délai et plafond ;
- « rollback » sans stratégie pour les builds déjà installées ;
- « réversible » sans exercice de reprise ;
- « numéro 1 sur Google », « meilleur guide du marché » ou garantie de
  classement ;
- « publié », « déployé » ou « indexé » parce que la recherche est terminée.

## 25. Porte P1

### Checklist de recherche

- [x] lecteur, moment, décision unique et hors-périmètre définis ;
- [x] page, audit, charte, workflow, modèle et registre maître datés/empreintés ;
- [x] frontières et cannibalisation avec les guides voisins explicites ;
- [x] benchmark France, États-Unis, Royaume-Uni, Allemagne et international ;
- [x] saturation qualitative séparée de toute mesure de volume ou classement ;
- [x] sources primaires actuelles React Native/Meta et Flutter/Google ;
- [x] Apple, Android/Google Play, KMP, PWA et institutions/standards couverts ;
- [x] contradictions, quarantaines, inconnues et faits à ne pas publier ;
- [x] six options comparées à fonctions et livrables égaux ;
- [x] scénarios connecté, hors-ligne, natif critique et patrimoine existant ;
- [x] matrice de gain d'information et artefact signature ;
- [x] inventaire modules/plugins/SDK avec plan B ;
- [x] protocole appareils réels, builds production, distributions et pilote ;
- [x] recette VoiceOver/TalkBack et sécurité/vie privée ;
- [x] CI/CD, stores, équipe, support/versioning et reprise ;
- [x] formule TCO, calcul 12/36/60, sensibilité et statu quo ;
- [x] position professionnelle, conflit d'intérêts et contre-cas par option ;
- [x] éliminatoires, critères d'arrêt et métriques de production ;
- [x] action autonome, bon/mauvais ajustement et CTA livrable ;
- [x] plan P2 annoté et calendrier de fraîcheur ;
- [x] aucune page ni composant applicatif modifié pendant P1.

### Résultat

**P1 : terminée — porte de recherche validée le 25 juillet 2026.**

Cette validation signifie que la matière et la méthode sont suffisantes pour
commencer une rédaction P2. Elle ne signifie pas que :

- les prototypes, mesures, tests utilisateurs ou calculs d'un vrai produit ont
  été réalisés ;
- la page actuelle a été corrigée ou que sa note de 69/100 a changé ;
- une technologie, un budget ou une conformité a été validé ;
- P2, P3, P4, publication, déploiement ou indexation sont terminés.

**État suivant : P2 à faire. P3 et P4 restent bloquées.**

## 26. Consolidation P1 R2 avant rédaction

La recherche initiale a été confrontée, sans modifier la page, à deux
livrables indépendants :

- un audit froid du snapshot courant, noté **68/100**, avec **1 P0, 14 P1 et
  5 P2** ;
- un benchmark mondial complémentaire fondé sur 51 liens accessibles, dont les
  documentations officielles React Native, Expo, Flutter, Apple, Android,
  WebKit et W3C, ainsi que des angles éditoriaux anglophones, germanophones et
  brésiliens.

Le P0 porte sur la présentation du baromètre SILKHOM : la page affirme une
grille identique entre React Native, Flutter et le natif, alors que la source
regroupe React Native, Flutter et Ionic dans une catégorie cross-platform et
présente séparément les catégories natives. Cette source ne doit plus arbitrer
le coût ni le verdict.

La P2 doit fermer le registre consolidé suivant :

1. comparer six issues à périmètre égal, y compris PWA et aucune nouvelle
   application ;
2. dater React Native, Expo, Flutter, Xcode/SDK Apple et l'API cible Android,
   sans transformer ce snapshot en promesse de stabilité ;
3. expliquer simplement où subsistent modules, plugins et code natif ;
4. faire précéder tout score et tout TCO par des éliminatoires sur la fonction
   critique, les données, l'accessibilité, la publication et la reprise ;
5. fournir un protocole sur appareils réels, en build de production, avec
   VoiceOver et TalkBack ;
6. séparer maintenance technique, évolutions métier, services, temps interne,
   mises à niveau et sortie dans un TCO à 12, 36 et 60 mois ;
7. permettre une build signée et une reprise par une seconde équipe ;
8. livrer un dossier de preuve copiable, imprimable et réinitialisable, sans
   recommandation automatique fondée sur un questionnaire simpliste ;
9. replacer les sources décisives près des affirmations et retirer SILKHOM,
   TechCrunch et le taux Shopify du raisonnement central ;
10. conserver le biais React déclaré et développer loyalement les cas où
    Flutter, le natif, une PWA ou l'absence d'application sont préférables.

Les chiffres de TCO préparés dans les dossiers restent des **hypothèses
fictives et recalculables**, jamais des tarifs de marché. Une donnée manquante
reste `ND` et bloque le total concerné au lieu de devenir zéro.

**Porte P1 R2 : GO vers P2.** Cette conclusion décrit le snapshot antérieur à
la rédaction. La section suivante consigne la réalisation de P2 ; P3, P4,
publication, déploiement et indexation restent non déclarés.

## 27. Rapport P2 R1 — rédaction et intégration

### 27.1 Périmètre livré

La page a été réécrite comme un dossier de décision pour dirigeant ou
responsable produit non spécialiste. La rédaction traite les six issues à
périmètre comparable : React Native (avec Expo ou sans framework), Flutter,
deux applications natives, Kotlin Multiplatform, web/PWA et absence de nouvelle
application. Les deux voies React Native sont distinguées dans le texte et dans
l'inventaire des dépendances, sans les compter comme deux verdicts artificiels.

Les points éliminatoires passent avant le score et le prix : fonction critique,
données hors ligne et conflits, performance sur le parc, accessibilité,
publication, équipe de secours et reprise. Une inconnue reste `ND` et empêche
le total concerné. Le guide déclare aussi le biais d'expérience React de
Hagnéré Code et présente les contre-cas où Flutter, le natif, KMP, une PWA ou
le statu quo sont plus cohérents.

La page intègre notamment :

- les snapshots React Native 0.86, Expo SDK 57 et Flutter 3.44.x, ainsi que les
  exigences Apple et Google Play datées et à revalider ;
- l'inventaire des modules, plugins, SDK et plans B natifs ;
- un modèle simple des données hors ligne, des conflits et de leur recette ;
- un protocole sur appareils réels en build de production, avec médiane
  (`p50`), percentile 95 (`p95`), VoiceOver et TalkBack ;
- les responsabilités relatives aux comptes, certificats, stores, CI, support,
  mise à niveau, reprise et migration ;
- quatre scénarios qui montrent pourquoi il n'existe pas de vainqueur
  universel ;
- un seul prochain pas commercial : demander un cadrage comparatif fondé sur
  le dossier de preuve.

### 27.2 Artefact signature et calculs vérifiables

`MobileFrameworkDecisionDossier` permet de documenter deux options
indépendantes, sans réseau ni envoi de données. Il rend visibles le contexte
commun, les sept portes éliminatoires, leurs preuves, l'inventaire du module
critique, le TCO et la sensibilité. Il peut être copié, imprimé dans une zone
dédiée et réinitialisé après confirmation accessible. Il ne produit ni score,
ni gagnant automatique.

Le scénario fictif A donne **119 700 € à 12 mois**, **186 700 € à 36 mois** et
**253 700 € à 60 mois**. Le scénario fictif B donne respectivement
**124 900 €**, **189 300 €** et **253 700 €**. Ajouter 20 jours de reprise à
650 € par jour augmente le coût de **13 000 €**. Ces montants illustrent la
formule ; ils ne constituent ni des tarifs, ni une estimation du projet du
lecteur.

### 27.3 Fichiers de P2

- `src/app/guides/react-native-ou-flutter/page.tsx`
- `src/app/guides/react-native-ou-flutter/opengraph-image.tsx`
- `src/components/guides/MobileFrameworkDecisionDossier.tsx`
- `src/components/guides/MobileFrameworkDecisionDossier.test.tsx`
- `src/lib/mobile-framework-decision.ts`
- `src/lib/mobile-framework-decision.test.ts`
- `src/lib/react-native-flutter-guide-quality.test.ts`
- `src/lib/guides.ts` pour l'entrée exacte `react-native-ou-flutter`
- `docs/research/react-native-ou-flutter.md`
- `docs/research/manifests/react-native-ou-flutter-p2-2026-07-25-r1.sha256`

### 27.4 Contrôles de porte P2

- snapshot P1 R2 : **7 fichiers sur 7 conformes** à leur empreinte avant
  rédaction ;
- mesure locale de la page : **4 492 mots**, soit **22 minutes** à 200 mots par
  minute, arrondi à l'entier le plus proche ;
- tests dédiés : **3 fichiers, 20 tests réussis** ;
- contrôles structurels pertinents : **8 fichiers, 66 tests réussis** ;
- lint des fichiers TypeScript/TSX touchés : réussi ;
- vérification TypeScript sans émission : réussie ;
- contrôle des espaces et marqueurs de conflit dans le diff : réussi ;
- snapshot P2 R1 : empreintes vérifiées après rédaction.

La suite globale `editorial-governance` conserve deux échecs liés à d'autres
guides déjà modifiés dans l'arbre de travail (`prioriser-les-fonctionnalites-
application-metier` et `securite-application-saas-b2b`). Ils ne sont pas
présentés comme résolus par cette P2, et la suite globale n'est donc pas
déclarée verte.

### 27.5 Registre des écarts et limites restantes

Le P0, les 14 P1 et les 5 P2 du contre-audit froid ont reçu une réponse dans la
page, l'outil ou les tests de P2 : retrait des preuves trompeuses, comparaison à
périmètre égal, fraîcheur des versions, éliminatoires, protocoles, TCO, reprise,
scénarios, limites et action autonome. Cette fermeture est une déclaration
d'intégration, pas une nouvelle note d'audit.

Restent volontairement hors de P2 :

- une contre-note indépendante et la vérification de chaque fermeture en P3 ;
- la relecture par un décideur non spécialiste, un spécialiste mobile, une
  personne compétente en accessibilité et une personne sans intérêt React ;
- les essais du dossier et de l'article dans les navigateurs et largeurs
  cibles ;
- les mesures sur appareils, technologies d'assistance, prototype et build
  signée d'un produit réel ;
- le build complet, la publication, le déploiement et l'indexation.

**P2 : terminée — porte validée le 25 juillet 2026.**

**État suivant : P3 à lancer indépendamment. P3 et P4 restent bloquées tant que
leurs contrôles respectifs ne sont pas réalisés.**

## 28. Reçu correctif P2 R2 après le contre-audit P3 R1

Le contre-audit indépendant
`react-native-ou-flutter-p3-2026-07-25-r1.md` a évalué le snapshot P2 R1 à
**90/100** et maintenu un NO-GO avec **2 P1 et 3 P2**. Il n'a pas été modifié
pendant la correction. P2 R2 ferme exactement ces cinq incidents, sans
réécriture périphérique du guide.

### 28.1 Corrections intégrées

1. **Preuve obligatoire pour une porte.** Un statut `pass` ou `fail` dont la
   preuve est vide ou composée d'espaces est désormais traité comme `ND`. Il ne
   peut ni qualifier, ni éliminer une option. Le verdict de l'interface et le
   rapport utilisent la même règle. Sept `pass` étayés qualifient ; un `fail`
   étayé élimine.
2. **Export TCO auditable.** Le rapport copié et imprimé énumère, avant les
   totaux, les dix hypothèses avec leur libellé, leur unité et `ND` champ par
   champ. Il affiche ensuite les totaux à 12, 36 et 60 mois, puis les trois
   résultats de sensibilité aux mêmes horizons. Un test reconstruit le scénario
   fictif A à partir du seul texte exporté.
3. **Temps de lecture écran.** Le rapport réservé à l'impression porte
   `data-read-time-exclude="true"`. La mesure officielle de la route donne
   **4 179 mots et 21 minutes** à 200 mots par minute, avec arrondi à l'entier
   le plus proche. Le registre et le test qualité sont alignés sur 21 minutes.
4. **Sensibilité invalide.** Une valeur négative, `NaN` ou infinie est
   normalisée en `ND` et ne peut plus réafficher le TCO central comme un
   scénario calculé. L'interface efface la valeur invalide, annonce une erreur
   accessible et n'affiche jamais `+-`. Zéro reste une hypothèse valide.
5. **Échec de copie actionnable.** Le message ne propose plus de sélectionner
   le rapport caché ; il oriente uniquement vers le bouton d'impression.

La version de l'artefact devient
`mobile-framework-decision-r2-2026-07-25`.

### 28.2 Revalidation P2 R2

- tests dédiés du moteur, du composant et du contrat éditorial :
  **3 fichiers, 26 tests réussis** ;
- commande ciblée de contrôle :
  **8 fichiers, 72 tests réussis** ;
- lint des fichiers TypeScript/TSX touchés : réussi ;
- vérification TypeScript sans émission : réussie ;
- contrôle des espaces et marqueurs de conflit dans le diff : réussi ;
- manifeste P2 R1 : conservé sans modification ;
- manifeste P2 R2 : **10 empreintes conformes** après correction.

### 28.3 État de porte

**P2 R2 : terminée — porte corrective validée le 25 juillet 2026.**

Cette validation atteste l'intégration et les contrôles ciblés. Elle ne remplace
pas le nouveau contre-audit indépendant demandé par P3 R1 et ne modifie pas la
note de 90/100 attribuée à l'ancien snapshot. P3 reste à relancer sur le
manifeste P2 R2 ; P4, publication, déploiement et indexation restent bloqués.

## 29. Reçus P3 R2 et P4

### 29.1 Contre-audit froid P3 R2

Un second auditeur indépendant a contrôlé le manifeste P2 R2 et reproduit les
cinq corrections :

- manifeste : **10 empreintes sur 10 conformes** ;
- note : **98/100** ;
- incidents ouverts : **0 P0, 0 P1, 0 P2** ;
- tests ciblés : **72 sur 72 réussis** ;
- verdict : **GO de P3 vers P4**.

Rapport :
`docs/audits/giga-audit-2026-07-24/reviews/react-native-ou-flutter-p3-2026-07-25-r2.md`.

### 29.2 P4 sur le build de production local

L'agent racine a compilé directement le snapshot de production puis contrôlé
la route servie :

- build optimisé : réussi, **159 pages sur 159** générées ;
- Chrome aux largeurs exactes 320, 360, 390, 430, 640, 768, 1 024, 1 280,
  1 440 et 1 600 px : aucun débordement du document, du dossier ou des
  contrôles ;
- thèmes clair et sombre : contrôlés visuellement ;
- console : aucun warning, aucune erreur et aucune erreur de page ;
- clavier : ordre utile et focus visible contrôlés dans le dossier ;
- scénarios réels A/B : indépendance, qualification étayée, élimination
  étayée, six TCO et six sensibilités exacts ;
- presse-papiers : rapport complet de 4 780 caractères, avec deux fois les dix
  hypothèses et aucune valeur indéfinie ;
- échec de copie : repli vers l'impression réellement actionnable ;
- remise à zéro : annulation conservatrice et confirmation destructive
  contrôlées ;
- PDF Chrome : **2 pages A4, aucune page blanche**, article et contrôles
  absents, deux pages rendues et inspectées ;
- image sociale : HTTP 200, PNG **1 200 × 630**, texte lisible et non tronqué ;
- métadonnées : H1 unique, une CTA, `Article` et `BreadcrumbList` uniquement,
  `noindex, nofollow`, route absente du sitemap.

Rapport :
`docs/audits/giga-audit-2026-07-24/reviews/react-native-ou-flutter-p4-2026-07-25-r1.md`.

La vérification SEO globale conserve **143 erreurs préexistantes** sur le
socle, mais aucune n'est attribuée à `react-native-ou-flutter`.

### 29.3 État de porte

**P4 : franchie localement avec 0 P0, 0 P1 et 0 P2 ouverts.**

Une contre-signature finale du manifeste consolidé reste requise avant de
fermer la boucle locale. Même après cette fermeture, la revue humaine,
la publication, le déploiement et l'indexation resteront des états séparés et
non autorisés par ces audits.
