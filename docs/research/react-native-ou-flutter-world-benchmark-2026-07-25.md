# Benchmark mondial — React Native, Flutter, natif ou PWA

> Dossier de recherche éditoriale et de décision, vérifié le 25 juillet 2026.
> Il prépare la reprise du guide `react-native-ou-flutter` sans modifier sa
> page, son code, son statut de publication ou son indexation.

## 0. Verdict de recherche

Le meilleur guide mondial sur ce sujet ne doit pas élire un framework. Il doit
permettre à un dirigeant de **faire éliminer les options incapables de passer
son risque principal**, puis de comparer les survivantes sur un périmètre, une
équipe et un coût complet identiques.

La réponse premium tient en une phrase :

> React Native, Flutter, le natif et une PWA peuvent tous être rationnels ; le
> bon choix est la plus petite architecture qui passe les fonctions
> éliminatoires sur les appareils réels, peut être publiée et maintenue par
> l’équipe réellement disponible, puis reste reprenable dans le budget accepté
> à 12, 36 et 60 mois.

Le guide actuel n’atteint pas encore ce niveau. Son snapshot reste identique à
celui de l’audit du 24 juillet :

| Élément | État vérifié le 25/07/2026 |
| --- | --- |
| Page | `src/app/guides/react-native-ou-flutter/page.tsx` |
| Empreinte SHA-256 | `3c9b8193f75398215bcb86c5e8f90baf182969adad3c5aab27c14a8cc2fdec1c` |
| Taille source | 723 lignes, 3 410 mots source |
| Note de départ | 69/100 dans l’audit existant ; elle n’est pas réévaluée ici |
| Recherche P1 existante | approfondie dans `docs/research/react-native-ou-flutter.md` |
| Page enrichie | non |
| Contre-audit après enrichissement | non applicable à ce stade |
| Publication, déploiement, sitemap, indexation | non vérifiés et non revendiqués |

Cette recherche mondiale complète le dossier P1 existant par un contrat plus
court et directement exploitable par le rédacteur : faits datés, benchmark
éditorial international, protocole comparatif, registre d’écarts, plan premium
et critères de réussite falsifiables.

## 1. Règles de preuve

Chaque proposition du futur guide doit être classée dans une des trois
catégories suivantes.

| Marque | Nature | Exemple acceptable | Ce qui est interdit |
| --- | --- | --- | --- |
| **Fait** | information directement soutenue par une source primaire, dans son périmètre et à une date donnée | « React Native 0.86 est la stable la plus récente le 25/07/2026 » | étendre le fait à une prédiction de coût ou de pérennité |
| **Inférence** | conséquence raisonnée de plusieurs faits, explicitement annoncée | « une fenêtre de support courte justifie de budgéter les upgrades » | présenter l’inférence comme une politique officielle |
| **Hypothèse** | valeur ou scénario inventé pour calculer et tester une décision | « TJM fictif de 650 € pour rejouer le modèle » | présenter cette valeur comme un prix de marché |

### Hiérarchie des sources

1. documentation et politiques officielles React Native, Expo, Flutter/Dart,
   Apple, Android, WebKit et W3C ;
2. retours d’exploitation publiés par l’entreprise qui a réellement mené le
   projet, avec son contexte ;
3. études dont le protocole, les appareils, le code, les versions et les
   métriques sont accessibles ;
4. articles d’agences et comparatifs internationaux, utilisés **uniquement**
   pour cartographier les angles éditoriaux et les confusions du marché.

Un comparatif commercial ne devient jamais une preuve de performance, de
recrutement ou de coût. Un cas Shopify ou Google ne devient jamais une promesse
pour une PME.

### Politique de fraîcheur

Les éléments suivants doivent être revérifiés le jour de la rédaction finale,
puis avant chaque nouvelle date de mise à jour visible :

- versions actives et futures de React Native ;
- version Expo et correspondance React Native/Node/Xcode/SDK ;
- branche stable, patch documenté et plateformes supportées par Flutter ;
- exigences Xcode et SDK Apple ;
- niveau d’API cible Google Play ;
- statut, version, licence et compatibilité de chaque module ou plugin critique.

## 2. Ce que le marché mondial publie déjà

### 2.1 Échantillon anglophone

| Ressource | Angle utile observé | Limite éditoriale | Leçon à retenir sans copier |
| --- | --- | --- | --- |
| [React Native — documentation officielle](https://reactnative.dev/) | architecture, versions, tests, performance, accessibilité | explique le produit, pas la décision d’une entreprise inconnue | transformer chaque capacité en preuve à exiger |
| [Flutter — documentation officielle](https://docs.flutter.dev/) | rendu, plateformes, tests, intégration native, migrations | explique Flutter, pas son TCO face aux autres options | dater les versions et faire tester les plugins |
| [Shopify Engineering — Five years of React Native](https://shopify.engineering/five-years-of-react-native-at-shopify) | exploitation à grande échelle, rôle du natif, upgrades, dépendances | organisation et investissements Shopify non transposables | conserver les conditions de succès et les difficultés, pas les résultats comme promesse |
| [Google Classroom — migration Flutter](https://flutter.dev/showcase/google-classroom) | évaluation préalable de latence, jank, mémoire, taille, accessibilité et recrutement | cas produit par l’écosystème Flutter et contexte Google | reprendre la méthode d’évaluation multi-critères, pas les pourcentages |
| [Foresight Mobile — comparaison 2026](https://foresightmobile.com/blog/flutter-vs-react-native-2026) | équipe, produit, évolution depuis 2024, biais déclaré | opinion d’agence et préférence Flutter | déclarer le biais Hagnéré et montrer les contre-cas |
| [Shipnative — comparaison 2026](https://www.shipnative.app/resources/research/react-native-vs-flutter-2026) | équipe TypeScript, web, UI, recrutement | vendeur d’un produit React Native ; assertions de marché | remplacer le « vivier » abstrait par deux capacités de reprise nommées |
| [Web On Dev — comparaison 2026](https://www.webondev.com/guides/react-native-vs-flutter/) | architecture, équipe, OTA, maintenance | généralités et conclusions non rejouables | demander versions, politique de mise à jour et solution de repli |

Saturation anglophone : les définitions, « pros and cons », tableaux de
performance et conseils « React si équipe web, Flutter si pixel perfect » sont
surabondants. La valeur non saturée se trouve dans le **dossier de preuve** :
modules, appareils, hors-ligne, accessibilité, stores, TCO et exercice de
reprise.

### 2.2 Marché germanophone

| Ressource | Angle local observé | Limite | Opportunité éditoriale |
| --- | --- | --- | --- |
| [Next Levels — Flutter vs React Native 2026](https://next-levels.de/blog/flutter-vs-react-native-2026-der-ultimative-vergleich-fur-entwickler-ctos-und-entscheider) | profondeur technique, sécurité, maintenance, hiring, matrice CTO | longueur et nombreux benchmarks difficiles à transposer | faire plus court mais plus falsifiable |
| [WAO — comparaison mobile 2026](https://www.wao.army/en/blog/mobile-app-entwicklung-flutter-react-native) | perspective de CTO allemand, coûts, performance et équipe | salaires, délais et taux de succès non rejouables | calculer sur devis et prototype, pas sur une moyenne DACH |
| [Frachtwerk — natif, RN et Flutter](https://frachtwerk.de/mobile-app-development-flutter-vs-react-native-vs-native/) | troisième option native, plugins, dépendances, migration | qualificatifs et temps relatifs non démontrés | comparer les couches natives et le coût de sortie |

Le marché germanophone met davantage la maintenance et la structure d’équipe en
avant. Il reste toutefois souvent prisonnier de nombres de salaires, de
pourcentages de coût et de jugements de performance sans protocole égal.

### 2.3 Marché lusophone et brésilien

| Ressource | Angle local observé | Limite | Opportunité éditoriale |
| --- | --- | --- | --- |
| [Bradata — app mobile au Brésil](https://www.bradata.com.br/blog/guia-desenvolvimento-app-mobile-brasil) | commence par « faut-il une app ? », inclut architecture, stores et maintenance | pourcentages de coût et recommandations majoritaires non sourcés | conserver la décision app/web, retirer les taux universels |
| [Código Bilionário — RN ou Flutter](https://codigobilionario.com/desenvolvimento-mobile-react-native-flutter/) | langage simple, comparaison directe | affirmations « 80 % des cas » et « moitié du coût » non défendables | expliquer sans fabriquer de probabilités |
| [Grupo Soma — retour Flutter brésilien](https://flutter.dev/showcase/grupo-soma) | POC, design system, marque blanche, mesure après lancement | cas promotionnel Flutter et contexte e-commerce particulier | utiliser le POC et le système de composants comme méthode, pas ses résultats comme benchmark |

Le marché brésilien rappelle utilement que le recrutement et les coûts sont
locaux. Il montre aussi le danger inverse : transformer une impression de vivier
ou quelques projets d’agence en vérité statistique.

### 2.4 Carte de saturation

Échelle qualitative interne, fondée sur l’échantillon ci-dessus. Ce n’est ni une
mesure de SERP ni une estimation de classement.

| Angle | Saturation | Valeur supplémentaire encore possible |
| --- | ---: | --- |
| définitions RN/Flutter | 5/5 | conséquence sur un projet réel |
| tableau avantages/inconvénients | 5/5 | critères éliminatoires et preuve requise |
| « qui est le plus rapide ? » | 5/5 | même parcours, même appareil, même build, distributions comparables |
| UI native contre UI dessinée | 5/5 | coût de recette, adaptations OS et accessibilité |
| équipe React contre équipe Dart | 4/5 | personnes disponibles, remplaçants et compétence mobile native |
| coût initial | 4/5 | TCO 12/36/60 avec inconnues conservées |
| natif comme alternative | 3/5 | test symétrique au même périmètre |
| PWA comme alternative | 2/5 | matrice de capacités par navigateur et appareil |
| versions et fenêtre de support | 1/5 | snapshot daté et calendrier d’upgrade |
| VoiceOver/TalkBack | 1/5 | parcours métier complet, pas simple présence d’API |
| synchronisation hors-ligne | 1/5 | conflits, pertes, doublons et reprise réseau |
| exercice de reprise | 0/5 | build signée par une seconde équipe |
| critère pour ne rien développer | 0/5 | baseline du processus et coût du statu quo |

## 3. État technique vérifié au 25 juillet 2026

### 3.1 React Native et Expo

| Proposition publiable | Type | Source primaire | Borne et conséquence |
| --- | --- | --- | --- |
| React Native `0.86.x` est la dernière stable ; `0.86` et `0.85` sont actives, `0.84` est en fin de cycle et `0.87` est future avec une sortie prévue le 10/08/2026 | Fait daté | [Versions React Native](https://reactnative.dev/versions) | statut volatil ; revérifier avant publication |
| React Native suit un schéma `0.x.y` où une version mineure peut porter des changements incompatibles | Fait de politique | [Versioning policy](https://reactnative.dev/docs/releases/versioning-policy) | ne pas supposer une LTS ou un upgrade gratuit |
| Depuis React Native `0.82`, la New Architecture est la seule architecture ; le drapeau de désactivation est ignoré | Fait | [React Native 0.82](https://reactnative.dev/blog/2025/10/08/react-native-0.82) | tout module critique doit être testé dans l’architecture actuelle |
| Un module natif peut demander une spécification, Codegen et du code propre à Android/iOS | Fait technique | [Turbo Native Modules](https://reactnative.dev/docs/turbo-native-modules-introduction) | « une base de code » ne signifie pas zéro Kotlin/Swift |
| React Native recommande un framework tel qu’Expo pour une nouvelle application, tout en maintenant le chemin sans framework | Fait de recommandation | [Use a framework](https://reactnative.dev/blog/2024/06/25/use-a-framework-to-build-react-native-apps), [sans framework](https://reactnative.dev/docs/getting-started-without-a-framework) | un devis doit préciser Expo/CNG/EAS ou bare |
| La documentation Expo courante associe SDK `57` à RN `0.86`, React `19.2.3`, Node `22.13.x`, `targetSdkVersion 36`, iOS `16.4+` et Xcode `26.4+` | Fait daté | [Expo SDK reference](https://docs.expo.dev/versions/latest/) | alignement utile, non preuve de compatibilité d’un module particulier |
| Continuous Native Generation peut régénérer les projets iOS/Android, mais les changements natifs doivent être modélisés par modules/config plugins ; CNG reste optionnel | Fait | [Expo CNG](https://docs.expo.dev/workflow/continuous-native-generation/) | documenter les plugins et démontrer un build local reproductible |
| Les tests de composants RN s’exécutent côté JavaScript et ne voient pas les défauts du code iOS/Android ; les parcours vitaux ont besoin de tests sur app réelle | Fait | [React Native testing](https://reactnative.dev/docs/testing-overview) | la couverture Jest n’est pas une recette mobile |
| La performance doit être contrôlée sur un build release, pas en mode développement | Fait | [React Native performance](https://reactnative.dev/docs/performance) | tout benchmark debug ou hot reload est à rejeter |
| RN fournit des API d’accessibilité, mais iOS et Android diffèrent et doivent être testés avec VoiceOver/TalkBack | Fait | [React Native accessibility](https://reactnative.dev/docs/accessibility) | aucune accessibilité automatique |

### 3.2 Flutter et Dart

| Proposition publiable | Type | Source primaire | Borne et conséquence |
| --- | --- | --- | --- |
| La dernière branche stable listée est Flutter `3.44.0` et la documentation consultée reflète le patch `3.44.7` | Fait daté | [Flutter release notes](https://docs.flutter.dev/release/release-notes) | pinner la version exacte du SDK et de Dart |
| Les migrations Flutter existent, mais les anciennes pages de migration peuvent devenir inexactes avec le temps | Fait | [Breaking changes](https://docs.flutter.dev/release/breaking-changes) | lire les migrations de chaque version traversée |
| La politique de compatibilité protège le framework selon son registre de tests, sans engagement général pour les autres dépendances | Fait de politique | [Compatibility policy](https://docs.flutter.dev/release/compatibility-policy) | les plugins restent un audit séparé |
| Flutter appelle du code spécifique via platform channels/Pigeon et les implémentations peuvent être en Kotlin/Java ou Swift/Objective-C | Fait technique | [Platform-specific code](https://docs.flutter.dev/platform-integration/platform-channels) | Flutter ne supprime pas la compétence native |
| `integration_test` ne pilote pas à lui seul les dialogues de permission, notifications ou vues natives | Fait | [Flutter testing](https://docs.flutter.dev/testing/overview) | compléter la recette pour les parcours natifs |
| Le profilage doit se faire sur appareil physique en mode profile proche de release ; debug et simulateur ne décrivent pas le comportement final | Fait | [Flutter performance profiling](https://docs.flutter.dev/perf/ui-performance) | comparer sur le même appareil plancher |
| La checklist Flutter demande notamment VoiceOver, TalkBack, contraste, cibles tactiles, erreurs et fort agrandissement | Fait méthodologique | [Flutter accessibility](https://docs.flutter.dev/ui/accessibility) | vérifier chaque parcours, pas seulement les widgets |
| Pour Flutter `3.44.7`, la page officielle distingue plateformes supportées, testées en CI et non supportées | Fait daté | [Supported platforms](https://docs.flutter.dev/reference/supported-platforms) | inscrire le parc OS cible et ne pas confondre « supporté » avec « testé sur notre app » |

### 3.3 Stores, OS et exploitation

| Proposition publiable | Type | Source primaire | Borne et conséquence |
| --- | --- | --- | --- |
| Depuis le 28/04/2026, une soumission iOS/iPadOS doit être construite avec le SDK 26 ou ultérieur ; Apple présente Xcode 26 comme outil courant | Fait daté | [Apple — Submitting](https://developer.apple.com/app-store/submitting/) | responsabilité de mise à niveau à inscrire au contrat |
| Apple demande les informations de vie privée des partenaires tiers et permet de déclarer le support VoiceOver, Voice Control, Larger Text, etc. sur la fiche Store | Fait | [Apple — Submitting](https://developer.apple.com/app-store/submitting/), [privacy manifest](https://developer.apple.com/documentation/bundleresources/adding-a-privacy-manifest-to-your-app-or-third-party-sdk) | inventorier tous les SDK ; ne pas traiter accessibilité et vie privée après coup |
| À compter du 31/08/2026, les nouvelles apps et mises à jour Google Play doivent cibler Android 16/API 36, avec exceptions selon forme de distribution | Fait daté | [Google Play target API](https://developer.android.com/google/play/requirements/target-sdk) | échéance proche ; faire une build de soumission tôt |
| Android distingue cold, warm et hot start et Android Vitals publie des seuils d’alerte ; ces seuils ne remplacent pas le SLA propre au produit | Fait + borne | [Android startup](https://developer.android.com/topic/performance/vitals/launch-time) | mesurer une distribution, pas un lancement isolé |
| Apple XCTest/Instruments et Android Macrobenchmark peuvent collecter des métriques sur appareil | Fait | [Apple testing and performance](https://developer.apple.com/documentation/technologyoverviews/testing-and-performance), [Android Macrobenchmark](https://developer.android.com/topic/performance/benchmarking/macrobenchmark-overview) | les outils natifs restent utiles quel que soit le framework |

### 3.4 PWA et décision « pas d’app »

| Proposition publiable | Type | Source primaire ou référence | Borne et conséquence |
| --- | --- | --- | --- |
| Une PWA peut mettre en cache des ressources et fournir une expérience hors-ligne via un service worker | Fait de plateforme web | [Service workers](https://web.dev/learn/pwa/service-workers) | cela ne prouve pas la synchronisation métier ni l’absence de perte |
| Les capacités web diffèrent par navigateur et plateforme ; la détection de fonctionnalités et les fallbacks sont nécessaires | Fait | [PWA capabilities](https://web.dev/learn/pwa/capabilities) | tester chaque API critique sur le parc réel |
| Sur iOS/iPadOS 26, un site ajouté à l’écran d’accueil peut s’ouvrir comme web app sans critère d’installabilité imposé par Safari | Fait daté | [WebKit — Safari 26 web apps](https://webkit.org/blog/17333/webkit-features-in-safari-26-0/) | installation plus simple, mais aucune parité native automatique |
| Web Push existe pour les web apps ajoutées à l’écran d’accueil sur iOS/iPadOS | Fait borné | [WebKit — Web Push](https://webkit.org/blog/13878/web-push-for-web-apps-on-ios-and-ipados/) | tester permission, installation et réception sur les versions cibles |
| Le manifeste définit des métadonnées et préférences d’affichage ; il ne garantit pas à lui seul les capacités de l’app | Fait de standard | [W3C Web App Manifest](https://www.w3.org/TR/appmanifest/) | ne pas appeler « PWA » un simple raccourci sans preuve de fonctionnement |

**Inférence éditoriale :** une PWA doit rester dans la comparaison tant que les
fonctions éliminatoires sont accessibles et que les différences de
navigateur/OS sont acceptables. Si aucune valeur ne dépend de l’installation,
des stores, du matériel ou du travail de fond, un web mobile peut être la
solution la plus petite.

## 4. Ce que les retours d’exploitation prouvent — et ne prouvent pas

### Shopify et React Native

Le retour Shopify de janvier 2025 est primaire pour l’organisation Shopify. Il
rapporte des gains et performances dans ses propres applications, mais précise
aussi :

- les spécialistes iOS/Android restent essentiels ;
- le code natif est utilisé là où il est le meilleur outil ;
- viser 100 % React Native est décrit comme un mauvais objectif ;
- les mises à niveau RN ne sont pas transparentes ;
- les bibliothèques tierces augmentent l’effort d’upgrade et la surface de
  supply chain ;
- les résultats reposent sur prototypes, fondations partagées, instrumentation
  et équipes nombreuses.

**Conclusion autorisée :** RN peut réussir à très grande échelle avec expertise
native, budget d’upgrade et gouvernance des dépendances.

**Conclusion interdite :** RN garantit les mêmes gains, temps de chargement ou
partage de code à une PME.

### Google Classroom et Flutter

Le cas Google Classroom explique que l’équipe a évalué Flutter sur plusieurs
dimensions avant migration : latence, jank, mémoire, taille binaire,
accessibilité et recrutement. Les résultats publiés appartiennent à son
application, son architecture et ses équipes.

**Conclusion autorisée :** une décision Flutter sérieuse peut être précédée
d’un protocole multi-critères et d’une migration par étapes.

**Conclusion interdite :** Flutter garantit les mêmes gains de vitesse, de
taille ou de productivité.

### Leçon commune

Les deux meilleurs retours ne démontrent pas un gagnant. Ils démontrent la même
discipline :

```text
prototype
→ métriques propres au produit
→ expertise native
→ migration maîtrisée
→ fondations et tests
→ mesure en production
→ budget d’upgrade
```

## 5. Comparaison à périmètre égal

Le futur guide doit comparer au moins six issues, sans forcer un duel :

1. React Native avec Expo/CNG/EAS précisés ;
2. React Native sans framework si une contrainte le justifie ;
3. Flutter ;
4. natif iOS + Android ;
5. PWA ou web mobile installable ;
6. aucun nouveau produit mobile.

### Matrice de décision

Les cellules décrivent ce qu’il faut **prouver**, pas une note universelle.

| Critère | React Native | Flutter | Natif iOS + Android | PWA | Pas d’app |
| --- | --- | --- | --- | --- | --- |
| Compétences | React/TS **et** mobile natif/build-release ; Expo si retenu | Dart/Flutter **et** mobile natif/build-release | Swift/iOS et Kotlin/Android, ou équipes séparées coordonnées | web, service worker, compatibilité navigateurs, mobile UX | propriétaire du processus existant |
| UI | comportement réel sur chaque OS et design system testés | widgets, adaptations et design system testés | conventions OS et parité fonctionnelle | responsive, clavier, navigateur, installation | qualité du canal existant |
| Fonction native critique | module compatible New Architecture, version/licence/plan B | plugin/channel compatible, version/licence/plan B | API OS disponible, droits, appareils | API web disponible sur chaque navigateur cible | fonction contournée ou inutile |
| Hors-ligne | stockage, queue, conflits et reprise réseau testés | mêmes preuves | mêmes preuves | mêmes preuves avec limites navigateur/stockage | coût des coupures actuelles connu |
| Accessibilité | VoiceOver/TalkBack, texte, focus et composants custom | mêmes parcours et sémantique | API natives et parcours par plateforme | WCAG + technologies d’assistance navigateur/OS | accessibilité du canal existant |
| Performance | release build, appareils planchers, p50/p95 et budget | profile/release, mêmes appareils/scénarios | mêmes métriques | Core Web Vitals + tâches métier/appareil | délai du processus actuel |
| Tests | JS + intégration/E2E + natif | unit/widget/integration + natif | tests propres à chaque OS + contrat métier commun | web cross-browser + installation/offline | contrôle qualité du processus |
| Publication | version RN/Expo, Xcode/SDK/Gradle, signatures, comptes | Flutter/Dart/plugins, mêmes stores | deux chaînes natives | web direct ; store éventuel = périmètre séparé | aucune soumission |
| Maintenance | RN, React, Expo éventuel, npm, modules, OS, stores | Flutter, Dart, plugins, OS, stores | deux SDK, dépendances, parité | navigateurs, service worker, backend | incidents, ressaisies, dépendance humaine |
| Sortie | dépôt, code natif, CNG/bare, comptes et build tierce | dépôt, plugins/channels, comptes et build tierce | deux dépôts ou monorepo, contrats communs | standards, données, service worker, hébergement | documentation du processus |

### Ordre de décision

```text
1. L’app installée apporte-t-elle une valeur impossible ou fragile sur le web ?
2. Une option échoue-t-elle sur la fonction native ou hors-ligne éliminatoire ?
3. Une option échoue-t-elle sur accessibilité, performance ou publication ?
4. L’équipe et son remplaçant peuvent-ils la maintenir ?
5. Seulement ensuite : quel TCO et quel délai départagent les survivantes ?
```

Un critère éliminatoire ne doit jamais être compensé par une note moyenne. Une
app qui perd des données hors ligne ne devient pas acceptable parce qu’elle est
moins chère.

## 6. Équipe, recrutement et risque humain

### Ce qu’aucune source mondiale ne permet d’affirmer honnêtement

- qu’un développeur RN ou Flutter est « facile à recruter » partout ;
- qu’un salaire ou TJM étranger prédit le coût français du projet ;
- qu’un développeur React web sait publier et diagnostiquer une app mobile ;
- qu’un développeur Dart sait écrire le code Swift/Kotlin requis par un plugin ;
- qu’un nombre d’offres d’emploi garantit une personne disponible au moment de
  la reprise.

### La preuve à demander

| Capacité | Responsable principal | Remplaçant | Preuve | Délai de remplacement | Verdict |
| --- | --- | --- | --- | --- | --- |
| architecture produit | à nommer | à nommer | décision documentée et revue | à renseigner | pass/fail |
| RN/React/TypeScript | à nommer | à nommer | app livrée sur version actuelle | à renseigner | pass/fail |
| Flutter/Dart | à nommer | à nommer | app livrée sur version actuelle | à renseigner | pass/fail |
| iOS/Swift/Xcode/signature | à nommer | à nommer | build TestFlight reproductible | à renseigner | pass/fail |
| Android/Kotlin/Gradle/signature | à nommer | à nommer | build Play interne reproductible | à renseigner | pass/fail |
| modules/plugins critiques | à nommer | à nommer | POC et plan B | à renseigner | pass/fail |
| tests et accessibilité | à nommer | à nommer | matrice + résultats | à renseigner | pass/fail |
| CI, comptes et secrets | à nommer | à nommer | runbook + restauration | à renseigner | pass/fail |

**Règle premium :** si le choix change lorsqu’une seule personne part, le risque
n’est pas technologique mais organisationnel. Il doit être chiffré et accepté.

## 7. Prototype mondialement défendable

### 7.1 Principe

Le prototype ne doit pas construire la partie la plus séduisante. Il doit
construire la partie capable de tuer le projet.

Exemples :

- capture de 20 photos hors ligne puis reprise réseau ;
- scan Bluetooth ou code-barres avec permissions réelles ;
- tâche de fond prolongée ;
- synchronisation avec conflit entre deux appareils ;
- paiement, MDM, NFC, fichier, signature ou périphérique métier ;
- liste volumineuse et édition avec fort agrandissement ;
- notification ouvrant exactement le bon dossier ;
- migration d’un écran dans une app native existante.

### 7.2 Périmètre identique

Pour chaque candidat :

- même API et mêmes données ;
- même parcours et même règle de conflit ;
- mêmes appareils physiques et versions d’OS ;
- même configuration réseau, dont mode avion et réseau dégradé ;
- build release pour RN/natif, profile puis release pour Flutter ;
- mêmes scénarios VoiceOver et TalkBack ;
- même nombre d’itérations ;
- versions, commit, dépendances et configuration archivés ;
- résultats bruts conservés, échecs inclus.

### 7.3 Mesures

| Dimension | Mesure minimale | Seuil | Interprétation |
| --- | --- | --- | --- |
| exactitude métier | dossiers créés, perdus, dupliqués, corrompus | zéro perte/duplication non résolue | éliminatoire |
| cold start | p50, p95 sur appareil plancher | à fixer par le produit | comparer une distribution |
| parcours critique | durée p50/p95 + taux de réussite | à fixer par l’usage | inclure temps humain |
| fluidité | jank/hitches ou frame time sur le scénario | à fixer, même outil si possible | ne pas réduire à « 60 fps » |
| mémoire | pic et niveau stabilisé | budget par appareil | surveiller régression |
| énergie | protocole OS identique et durée définie | budget à définir | utile pour tâche terrain |
| taille installée | binaire et données après usage | budget produit | contexte, pas score absolu |
| accessibilité | tâche terminée avec VoiceOver/TalkBack, grand texte, clavier si requis | 100 % des parcours critiques | éliminatoire |
| build/release | build signée depuis CI, temps et taux d’échec | reproductible | éliminatoire |
| reprise | seconde personne reconstruit et publie une version interne | sans auteur initial | éliminatoire |

### 7.4 Benchmarks à refuser

- une démo en debug contre une build release ;
- un simulateur contre un téléphone physique ;
- deux applications différentes ;
- une moyenne FPS sans appareil, scénario ni distribution ;
- un seul lancement ;
- un package « hello world » utilisé pour prédire une app métier ;
- un pourcentage de code partagé sans décomposer UI, domaine, tests, modules,
  CI et publication ;
- un nombre d’étoiles GitHub ou d’offres d’emploi utilisé comme TCO ;
- un benchmark ancien exécuté sur l’ancienne architecture RN ;
- une conclusion issue d’un appareil haut de gamme seulement.

## 8. Hors-ligne : la vraie question n’est pas le framework

Les documentations [Android offline-first](https://developer.android.com/topic/architecture/data-layer/offline-first)
et [Flutter offline-first](https://docs.flutter.dev/app-architecture/design-patterns/offline-first)
montrent que la décision se joue dans la couche de données : source locale,
source réseau, file d’attente, synchronisation, reprise et conflits.

Le futur guide doit demander :

1. quelles lectures sont possibles sans réseau ;
2. quelles écritures peuvent attendre ;
3. quelle donnée est la source de vérité ;
4. comment sont identifiées les opérations rejouées ;
5. comment un conflit est détecté et arbitré ;
6. ce que voit l’utilisateur en attente, échec ou conflit ;
7. combien de temps et de données peuvent rester hors ligne ;
8. comment la queue survit à un crash, un redémarrage et une mise à jour ;
9. comment sont protégées les données locales ;
10. quel test démontre zéro perte et zéro duplication.

**Inférence :** RN, Flutter, natif et PWA peuvent tous implémenter une partie de
ce modèle. La différence de risque vient des bibliothèques, des capacités OS,
du travail de fond, du stockage et de l’expertise réelle — pas du mot
« cross-platform ».

## 9. Accessibilité : accepter un parcours, pas une API

La présence de `accessibilityLabel`, `Semantics`, UIKit ou Jetpack Compose
n’est pas un résultat utilisateur.

La recette commune doit inclure :

- navigation complète avec VoiceOver sur iPhone physique ;
- navigation complète avec TalkBack sur Android physique ;
- ordre de focus, titres, libellés, rôles, valeurs, erreurs et annonces ;
- taille de texte et affichage agrandis sans perte d’action ;
- contraste et information qui ne dépend pas uniquement de la couleur ;
- cibles tactiles adaptées à chaque plateforme ;
- clavier matériel et commande externe si le public l’exige ;
- réduction des animations ;
- composant custom, carte, graphique, scanner, signature et dialogue de
  permission ;
- tâche métier accomplie, temps et blocages consignés ;
- cohérence avec les déclarations d’accessibilité de la fiche App Store.

**Critère de sortie :** une option qui n’offre aucun moyen crédible de corriger
un blocage d’accessibilité sur un parcours critique est éliminée, même si la
majorité de ses écrans passe.

## 10. Coût complet et scénarios chiffrés

### 10.1 Formule

```text
TCO(horizon)
= cadrage et prototype
+ construction commune
+ travaux propres à iOS et Android
+ modules/plugins et licences
+ tests, accessibilité et appareils
+ CI, comptes, stores et services
+ maintenance technique
+ évolutions métier
+ upgrades OS/framework/dépendances
+ support et incidents
+ reprise ou sortie
```

Une valeur inconnue reste `inconnue`. Elle ne devient jamais zéro.

### 10.2 Exemple fictif et rejouable

Les chiffres ci-dessous sont **entièrement fictifs**. Ils ne représentent ni
React Native, ni Flutter, ni un prix de marché. Les candidats `A` et `B` peuvent
être remplacés par n’importe quelles deux propositions ayant passé les mêmes
tests.

Hypothèses :

- TJM pédagogique : `650 € HT/jour` ;
- services récurrents : `8 400 € HT/an` ;
- appareils, comptes et installation initiale : `3 000 € HT` ;
- évolutions métier : incluses en jours, volontairement identiques si le
  produit est identique ;
- horizon 36 mois : une mise à niveau majeure ajoutée ;
- horizon 60 mois : upgrades cumulés et exercice de sortie inclus.

| Variable fictive | Candidat A | Candidat B |
| --- | ---: | ---: |
| première livraison | 120 j | 112 j |
| maintenance technique annuelle | 24 j | 30 j |
| évolution métier annuelle | 18 j | 18 j |
| upgrades cumulés à 36 mois | 15 j | 8 j |
| upgrades cumulés à 60 mois | 30 j | 16 j |
| sortie/reprise au mois 60 | 25 j | 38 j |

Calculs :

```text
A 12 mois = (120 + 24 + 18) × 650 + 8 400 + 3 000
           = 116 700 € HT

B 12 mois = (112 + 30 + 18) × 650 + 8 400 + 3 000
           = 115 400 € HT

A 36 mois = (120 + 3 × (24 + 18) + 15) × 650
            + 3 × 8 400 + 3 000
           = 197 850 € HT

B 36 mois = (112 + 3 × (30 + 18) + 8) × 650
            + 3 × 8 400 + 3 000
           = 199 800 € HT

A 60 mois avec sortie = (120 + 5 × (24 + 18) + 30 + 25) × 650
                        + 5 × 8 400 + 3 000
                      = 295 250 € HT

B 60 mois avec sortie = (112 + 5 × (30 + 18) + 16 + 38) × 650
                        + 5 × 8 400 + 3 000
                      = 308 900 € HT
```

Ce scénario prouve seulement que :

- le candidat le moins cher au lancement peut ne plus l’être à 36 mois ;
- l’entretien et la sortie peuvent dépasser un petit écart initial ;
- le résultat dépend des jours réellement mesurés et contractés.

### 10.3 Sensibilité au module critique

Si un plugin non compatible ajoute fictivement `20 jours` de code natif, tests
et stabilisation :

```text
20 × 650 = 13 000 € HT
```

Cet écart suffit à renverser l’exemple. Le prototype du module critique produit
donc plus d’information qu’un classement mondial de frameworks.

## 11. Maintenance, migration et critères de sortie

### 11.1 Maintenance à séparer

| Poste | Exemples | Ne pas confondre avec |
| --- | --- | --- |
| corrective | crash, perte, faille, échec de build | nouvelle fonctionnalité |
| préventive | upgrades RN/Expo/Flutter/Dart, SDK OS, plugins | support utilisateur |
| adaptative | target API, Xcode, permissions, politique store | refonte produit |
| exploitation | monitoring, logs, certificats, secrets, services | développement initial |
| évolution | nouvel écran, nouvelle règle métier | dette de mise à niveau |
| sortie | documentation, transfert, migration, double run | maintenance courante |

Le contrat doit préciser tâches incluses, capacité, priorité, SLA éventuel,
versions couvertes, responsabilités et traitement des jours non consommés.

### 11.2 Architecture de sortie

Le choix est plus réversible si les éléments suivants sont séparés et testés :

- contrats API et modèle de données ;
- règles métier hors interface ;
- exports et migrations de données ;
- identité, paiements et notifications ;
- design tokens et parcours documentés ;
- tests d’acceptation indépendants du framework ;
- modules natifs isolés derrière des contrats ;
- comptes stores, certificats et secrets détenus par l’entreprise ;
- build et procédure de publication ;
- observabilité et historique d’incidents.

### 11.3 Quand envisager une migration

Une migration ne doit pas commencer parce qu’un framework est « plus moderne ».
Elle devient une hypothèse à tester si :

- une fonction stratégique ne peut plus évoluer ;
- les upgrades et incidents consomment une part insoutenable de la capacité ;
- un module critique est abandonné sans remplaçant ;
- la version reste non supportée malgré plusieurs cycles ;
- la qualité mesurée ne passe pas les seuils ;
- aucune équipe de reprise crédible n’existe ;
- la stratégie produit change de plateformes ;
- le coût d’un maintien documenté dépasse celui d’une migration progressive.

Le scénario doit comparer :

```text
maintenir + corriger + mettre à niveau
contre
migrer progressivement + double run + parité + extinction
contre
réécrire + bascule + risque de régression
contre
arrêter ou revenir au web
```

Aucun pourcentage de code « réutilisable » ne doit être annoncé sans inventaire
par couche.

## 12. Registre d’écarts du guide actuel

Le statut `ouvert` signifie que la page actuelle ne contient pas encore la
preuve, même si le dossier P1 existant l’a déjà recherchée.

| ID | Priorité | Écart page actuel | Risque lecteur | Correction attendue | Preuve de fermeture |
| --- | --- | --- | --- | --- | --- |
| RNF-01 | P1 | aucune carte versionnée RN/Expo/Flutter | comparer des architectures obsolètes | snapshot daté, version/canal/outils | sources officielles rouvertes le jour de rédaction |
| RNF-02 | P1 | New Architecture RN absente | sélectionner un module hérité incompatible | expliquer 0.82+ et tester les modules | matrice de compatibilité sur version retenue |
| RNF-03 | P1 | Expo, CNG, EAS et bare non distingués | devis RN incomparables | préciser ce qui est inclus et le plan de sortie | build local + CI, services et coûts listés |
| RNF-04 | P1 | platform channels/plugins Flutter peu visibles | croire à zéro code natif | décomposer Dart/Kotlin/Swift/plugins | inventaire et POC du module critique |
| RNF-05 | P1 | tableau non égal-scope | faux vainqueur | comparer six options au même périmètre | contrat de comparaison signé |
| RNF-06 | P1 | aucune matrice de fonctions natives | blocage tardif BLE/MDM/paiement/background | fonction, version, licence, mainteneur, plan B | test sur appareils réels |
| RNF-07 | P1 | hors-ligne évoqué sans modèle de données | pertes, doublons, conflits | queue, source de vérité, reprise et arbitrage | test avion/crash/conflit à zéro perte |
| RNF-08 | P1 | performance sans protocole | décision par adjectif ou démo | release/profile, appareils, p50/p95, seuils | résultats bruts reproductibles |
| RNF-09 | P1 | accessibilité absente du choix | parcours inutilisable | VoiceOver/TalkBack/grand texte/composants custom | tâche critique terminée sur les deux OS |
| RNF-10 | P1 | stratégie de tests insuffisante | couverture JS/widget trompeuse | pyramide + E2E + natif + tests de store | pipeline et recette verte |
| RNF-11 | P1 | exigences stores isolées et bientôt datées | build refusée ou retard | Xcode/SDK/API cible, comptes, signatures | build TestFlight/Play interne |
| RNF-12 | P1 | aucun TCO 12/36/60 | achat au prix initial seulement | formule, hypothèses et sensibilité | recalcul avec deux devis comparables |
| RNF-13 | P1 | recrutement traité par langage | dépendance à une personne | capacités principales/de secours et délai | noms, disponibilité et exercice de reprise |
| RNF-14 | P1 | maintenance non décomposée | inconnue transformée en forfait magique | correctif/préventif/store/support/évolution | capacité annuelle et responsabilités |
| RNF-15 | P1 | migration en une réponse FAQ | sous-estimer double run et parité | couches, données, tests, extinction | scénario chiffré et critères de bascule |
| RNF-16 | P1 | PWA trop générique | payer une app inutile ou choisir un web incapable | matrice de capacités par navigateur/appareil | POC web sur la fonction critique |
| RNF-17 | P2 | Shopify `86 %` visible | taux réutilisé comme promesse | supprimer du verdict ou contextualiser par couches | aucune déduction de coût/code universelle |
| RNF-18 | P1 | SILKHOM nourrit la FAQ de coût | TJM assimilé au TCO | retirer du verdict, utiliser devis réels | formule indépendante du baromètre |
| RNF-19 | P1 | article TechCrunch 2024 dans la pérennité | peur d’abandon basée sur presse ancienne | baser sur cycles, migrations et plan de sortie | conclusion stable sans cette source |
| RNF-20 | P2 | pas d’outil final remplissable | lecture sans décision | dossier de preuve avant framework | un dirigeant peut produire shortlist et questions |
| RNF-21 | P2 | CTA sans livrable précis | conversion avant preuve | annoncer scorecard, POC de risque et TCO | CTA situé après l’outil |
| RNF-22 | P1 | absence de règle de fraîcheur visible | article « 2026 » rapidement faux | encadré version/date/volatilité | dateModified et contenu cohérents |

Tous les `RNF-01` à `RNF-16`, `RNF-18`, `RNF-19` et `RNF-22` doivent être
fermés avant de demander un contre-audit de fond. Les P2 améliorent le produit
éditorial mais ne compensent aucun P1.

## 13. Plan premium recommandé

L’ordre suit la décision d’un dirigeant. Il ne suit pas l’histoire des
frameworks.

| Ordre | Section | Question du lecteur | Preuve ou outil | Décision produite |
| ---: | --- | --- | --- | --- |
| 1 | Réponse en 60 secondes | qui gagne dans mon cas ? | six options + trois règles de NO-GO | shortlist, jamais vainqueur universel |
| 2 | Ai-je besoin d’une app ? | web/PWA suffit-il ? | fonctions téléphone, stores, offline, distribution | app, PWA, web ou statu quo |
| 3 | Carte datée 2026 | quelles versions compare-t-on ? | RN/Expo/Flutter/Xcode/API cible | versions à inscrire au devis |
| 4 | Ce qui est réellement partagé | où sont les gains et doublons ? | UI, domaine, API, tests, natif, CI, stores | jours communs/spécifiques |
| 5 | Équipe et reprise | qui construit puis maintient ? | matrice principal/remplaçant/preuve | risque humain acceptable ou non |
| 6 | Fonction qui peut tuer le projet | que faut-il prototyper ? | inventaire modules/plugins/capacités PWA | POC et seuils |
| 7 | Hors-ligne et données | que se passe-t-il sans réseau ? | queue, conflits, crash, reprise | architecture de synchronisation |
| 8 | Performance de production | est-ce fluide sur le parc plancher ? | protocole release/profile et p50/p95 | pass/fail par seuil |
| 9 | Accessibilité | tous les utilisateurs finissent-ils la tâche ? | VoiceOver/TalkBack/grand texte | pass/fail et corrections |
| 10 | Tests et publication | peut-on livrer sans surprise ? | pipeline, build signée, TestFlight/Play interne | plan de release |
| 11 | TCO 12/36/60 | que paie-t-on vraiment ? | calculateur à hypothèses visibles | comparaison économique |
| 12 | Maintenance | qui paie les cycles futurs ? | calendrier versions/OS/plugins et capacité | budget annuel |
| 13 | Migration et sortie | comment changer d’équipe ou de stack ? | couches, exports, double run, build tierce | coût et critères de sortie |
| 14 | Quatre scénarios complets | comment appliquer la méthode ? | décisions fictives calculées | transfert pédagogique |
| 15 | Dossier à envoyer aux prestataires | quelles preuves demander ? | checklist remplissable | appels d’offres comparables |
| 16 | Conclusion et CTA | quelle prochaine action ? | prototype de risque et scorecard | action utile, sans pression |

### Scénarios éditoriaux à écrire

1. **Équipe React, app métier terrain** : RN/Expo candidat, mais offline/photo,
   compétence native et reprise doivent passer.
2. **Équipe Flutter confirmée, design system très spécifique** : Flutter
   candidat, mais plugins, accessibilité et adaptations OS doivent passer.
3. **Produit centré sur Bluetooth/tâche de fond/intégration OS** : natif ou
   composition native/multiplateforme à départager par POC.
4. **Portail de formulaires sans fonction OS critique** : PWA/web candidat,
   testé sur installation, offline et notifications ; l’absence d’app reste
   possible.

Chaque scénario doit afficher :

- faits ;
- hypothèses ;
- inconnues ;
- option éliminée et pourquoi ;
- calcul ;
- critère qui ferait changer la décision.

### Artefact signature

Le guide doit fournir un **dossier de preuve avant framework**, copiable ou
imprimable, composé de :

1. carte du produit et du parc ;
2. fonction éliminatoire ;
3. matrice modules/plugins/capacités web ;
4. protocole appareils ;
5. recette offline ;
6. recette accessibilité ;
7. métriques performance ;
8. matrice d’équipe et remplaçants ;
9. versions/outils/stores ;
10. TCO 12/36/60 ;
11. comptes, droits et secrets ;
12. exercice de reprise ;
13. critères de sortie ;
14. verdict et inconnues restantes.

## 14. Checklist falsifiable avant contre-audit

### Porte recherche

- [ ] La page RN Versions a été rouverte le jour de la rédaction.
- [ ] La branche Flutter et le patch documenté ont été revérifiés.
- [ ] La version Expo, RN, Node, Xcode et target API sont cohérentes.
- [ ] Les exigences Apple et Google Play sont datées.
- [ ] Chaque plugin/module cité a une version, une licence et un signal de
      maintenance.
- [ ] Les comparatifs commerciaux ne soutiennent aucun fait technique ou prix.
- [ ] Faits, inférences et hypothèses sont distingués.

### Porte décision

- [ ] La page peut conclure RN, Flutter, natif, PWA ou aucune app.
- [ ] Les options sont comparées au même périmètre.
- [ ] Les critères éliminatoires précèdent le prix.
- [ ] Aucune moyenne ne compense une perte de données, une impossibilité de
      publication ou un blocage d’accessibilité.
- [ ] Le lecteur sait quelle preuve demander et quel résultat fait changer le
      verdict.

### Porte profondeur

- [ ] RN New Architecture et Expo/bare sont expliqués simplement.
- [ ] Flutter plugins/platform channels sont expliqués simplement.
- [ ] Le guide décompose les couches réellement communes et spécifiques.
- [ ] Le hors-ligne couvre files, conflits, crash et reprise.
- [ ] La performance utilise release/profile, appareils et distributions.
- [ ] L’accessibilité couvre un parcours complet sur VoiceOver et TalkBack.
- [ ] Les limites des tests JS/widget et le besoin de tests natifs sont visibles.
- [ ] Les stores, signatures, comptes et SDK sont intégrés au calendrier.
- [ ] Le TCO 12/36/60 conserve toutes les inconnues.
- [ ] La maintenance est séparée des évolutions.
- [ ] La migration inclut parité, double run et sortie.
- [ ] L’équipe de secours est testée, pas supposée.

### Porte honnêteté

- [ ] Aucun « RN est moins cher », « Flutter est plus rapide » ou pourcentage de
      partage n’apparaît sans protocole propre au projet.
- [ ] Le biais React de Hagnéré Code est déclaré près de la recommandation.
- [ ] Au moins un cas loyal où Flutter gagne est développé.
- [ ] Au moins un cas loyal où le natif gagne est développé.
- [ ] Au moins un cas loyal où une PWA ou aucune app gagne est développé.
- [ ] Shopify et Google Classroom sont présentés comme cas bornés.
- [ ] SILKHOM et TechCrunch ne déterminent plus le verdict.
- [ ] Aucune promesse de classement Google n’est formulée.

### Porte lecteur et UX

- [ ] Une personne non technique peut expliquer « module natif », « build »,
      « New Architecture », « platform channel », « TCO » et « reprise » après
      lecture.
- [ ] Les tableaux mobiles restent lisibles sans comparer six colonnes
      microscopiques.
- [ ] Les exemples ont des nombres recalculables et explicitement fictifs.
- [ ] Le dossier de preuve est copiable, imprimable et réinitialisable.
- [ ] Le CTA vient après une action autonome utile.
- [ ] FAQ visible et données structurées racontent la même chose.
- [ ] Le temps de lecture correspond au volume visible.
- [ ] Le rendu, l’impression, le clavier, le thème et les largeurs mobiles sont
      contrôlés en navigateur réel.

### Porte publication

- [ ] Un contre-auditeur indépendant n’a trouvé aucun P0/P1/P2 ouvert.
- [ ] Les calculs ont été refaits indépendamment.
- [ ] Les liens primaires ont été rouverts.
- [ ] Les dates, métadonnées, OG et contenu sont cohérents.
- [ ] Tests, build, déploiement, route de production, sitemap et indexation sont
      rapportés comme états séparés.

## 15. Questions que le guide premium doit réellement résoudre

1. React Native ou Flutter est-il le vrai choix, ou une PWA suffit-elle ?
2. Que signifient RN 0.86, Expo SDK 57 et Flutter 3.44 aujourd’hui ?
3. Une équipe React web est-elle déjà une équipe React Native ?
4. Expo est-il obligatoire et quels services sont payants ou remplaçables ?
5. Où reste du Swift/Kotlin dans RN et Flutter ?
6. Comment vérifier un plugin caméra, BLE, MDM, paiement ou notification ?
7. Qui gagne pour une interface très spécifique sans benchmark simpliste ?
8. Comment tester performance, taille, mémoire et batterie honnêtement ?
9. Comment prouver le hors-ligne sans perdre ni dupliquer de données ?
10. Comment tester VoiceOver et TalkBack sur un parcours complet ?
11. Quel plan de tests couvre vraiment les deux OS ?
12. Que changent Xcode 26, iOS SDK 26 et Android API 36 ?
13. Comment comparer deux devis au même périmètre ?
14. Quel TCO à 12, 36 et 60 mois ?
15. Qui réalise les upgrades et avec quelle capacité annuelle ?
16. Qui détient les comptes, certificats, secrets et code ?
17. Une seconde équipe peut-elle produire une build signée ?
18. Que peut-on conserver lors d’une migration ?
19. Quand le natif devient-il rationnel ?
20. Quel résultat doit arrêter le projet ?

## 16. Ledger de sources directes

Toutes les pages ci-dessous ont été consultées ou rouvertes le 25 juillet 2026.
Leur présence ne dispense pas de la revalidation prévue en section 1.

### React Native et Expo

- [React Native versions](https://reactnative.dev/versions)
- [React Native versioning policy](https://reactnative.dev/docs/releases/versioning-policy)
- [React Native 0.82 — New Architecture only](https://reactnative.dev/blog/2025/10/08/react-native-0.82)
- [React Native 0.86](https://reactnative.dev/blog/2026/06/11/react-native-0.86)
- [Use a framework to build React Native apps](https://reactnative.dev/blog/2024/06/25/use-a-framework-to-build-react-native-apps)
- [Get started without a framework](https://reactnative.dev/docs/getting-started-without-a-framework)
- [Turbo Native Modules](https://reactnative.dev/docs/turbo-native-modules-introduction)
- [React Native testing](https://reactnative.dev/docs/testing-overview)
- [React Native performance](https://reactnative.dev/docs/performance)
- [React Native accessibility](https://reactnative.dev/docs/accessibility)
- [Expo SDK reference](https://docs.expo.dev/versions/latest/)
- [Expo Continuous Native Generation](https://docs.expo.dev/workflow/continuous-native-generation/)
- [Expo custom native code](https://docs.expo.dev/workflow/customizing/)
- [Expo Updates](https://docs.expo.dev/versions/latest/sdk/updates/)

### Flutter et Dart

- [Flutter release notes](https://docs.flutter.dev/release/release-notes)
- [Flutter 3.44 release notes](https://docs.flutter.dev/release/release-notes/release-notes-3.44.0)
- [Flutter breaking changes](https://docs.flutter.dev/release/breaking-changes)
- [Flutter compatibility policy](https://docs.flutter.dev/release/compatibility-policy)
- [Flutter supported platforms](https://docs.flutter.dev/reference/supported-platforms)
- [Flutter platform-specific code](https://docs.flutter.dev/platform-integration/platform-channels)
- [Flutter testing](https://docs.flutter.dev/testing/overview)
- [Flutter performance profiling](https://docs.flutter.dev/perf/ui-performance)
- [Flutter accessibility](https://docs.flutter.dev/ui/accessibility)
- [Flutter accessibility testing](https://docs.flutter.dev/ui/accessibility/accessibility-testing)
- [Flutter offline-first](https://docs.flutter.dev/app-architecture/design-patterns/offline-first)

### Apple et Android

- [Apple — Submitting to the App Store](https://developer.apple.com/app-store/submitting/)
- [Apple privacy manifests](https://developer.apple.com/documentation/bundleresources/adding-a-privacy-manifest-to-your-app-or-third-party-sdk)
- [Apple testing and performance](https://developer.apple.com/documentation/technologyoverviews/testing-and-performance)
- [Apple XCTest performance tests](https://developer.apple.com/documentation/xctest/performance-tests)
- [Google Play target API requirement](https://developer.android.com/google/play/requirements/target-sdk)
- [Android app startup](https://developer.android.com/topic/performance/vitals/launch-time)
- [Android Macrobenchmark](https://developer.android.com/topic/performance/benchmarking/macrobenchmark-overview)
- [Android offline-first](https://developer.android.com/topic/architecture/data-layer/offline-first)

### Web/PWA et retours d’exploitation

- [W3C Web App Manifest](https://www.w3.org/TR/appmanifest/)
- [web.dev PWA capabilities](https://web.dev/learn/pwa/capabilities)
- [web.dev service workers](https://web.dev/learn/pwa/service-workers)
- [WebKit — Web Push on iOS/iPadOS](https://webkit.org/blog/13878/web-push-for-web-apps-on-ios-and-ipados/)
- [WebKit — web apps in Safari 26](https://webkit.org/blog/17333/webkit-features-in-safari-26-0/)
- [Shopify Engineering — Five years of React Native](https://shopify.engineering/five-years-of-react-native-at-shopify)
- [Google Classroom with Flutter](https://flutter.dev/showcase/google-classroom)
- [Grupo Soma with Flutter](https://flutter.dev/showcase/grupo-soma)

## 17. Porte de remise

Ce dossier peut être remis au rédacteur si et seulement si les limites restent
visibles :

- il ne remplace pas un prototype mobile ;
- il ne transforme aucun cas public en promesse ;
- il ne fournit aucun tarif de marché ;
- il ne choisit aucun framework sans contexte ;
- il ne modifie pas la page ;
- il ne prouve ni publication, ni indexation, ni classement.

**Statut de ce livrable : benchmark mondial de recherche terminé ; intégration
éditoriale, contre-audit, QA navigateur, publication et indexation à faire
séparément.**
