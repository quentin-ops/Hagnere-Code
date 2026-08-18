# Audit approfondi — `react-native-ou-flutter`

Date : 24 juillet 2026

Auditeur concurrentiel : audit P3 en lecture seule ; documentation primaire officielle React Native/Meta, Flutter/Google, Apple et Android ; repères éditoriaux France/US/UK/AU/DACH examinés uniquement pour trouver des angles de couverture, jamais comme preuve technique.

Snapshot du guide :

- Source : `src/app/guides/react-native-ou-flutter/page.tsx` (723 lignes, 3 410 mots source).
- Registre : `src/lib/guides.ts:1450-1464`.
- Open Graph : `src/app/guides/react-native-ou-flutter/opengraph-image.tsx` (1200 × 630).
- SHA-256 : `page.tsx` `3c9b8193f75398215bcb86c5e8f90baf182969adad3c5aab27c14a8cc2fdec1c` ; `opengraph-image.tsx` `f73bec62d8800cec2219f6f333f02937cef96398d47daa9291474e231184f17b` ; `guides.ts` `8663e6e84352121ec854393e049492a1c2b72f242166141e5d31e0911b43cb09`.
- Aucun `docs/research/react-native-ou-flutter.md` trouvé dans le dépôt. Cela ne prouve pas que l'auteur n'a pas cherché ; cela prouve seulement que le dossier de recherche, dates et décisions n'est pas livrable/rejouable.

## 1. Verdict exécutif

```text
Lecteur exact : dirigeant de PME, responsable produit ou indépendant qui doit faire développer une application iPhone/Android et reçoit deux recommandations techniques différentes.
Question réelle : « Quelle solution me donne le meilleur compromis entre livraison, équipe disponible, fonctions natives, coût complet, qualité, maintenance et possibilité de changer de prestataire ? »
Décision attendue : choisir React Native, Flutter, natif, Kotlin Multiplatform, web installable ou aucune application, avec un scénario testable et un périmètre budgétaire explicite.
Réponse actuelle en une phrase : React Native est logique avec une équipe React, Flutter avec une équipe Flutter ou une interface très personnalisée, mais les fonctions risquées, la reprise et la maintenance doivent décider.
Défaut qui coûte le plus de valeur : le guide donne une bonne méthode humaine, mais il compare encore des étiquettes et non un coût total et un risque de livraison égaux ; il ne signale pas les changements 2026 qui changent directement la décision (React Native 0.86 actif et New Architecture obligatoire depuis 0.82, Flutter 3.44.7, exigences Xcode 26/iOS 26 et Android 16/API 36).
Niveau actuel : C
Priorité : haute
Statut : audité, à réécrire, non contre-audité après correction
P1–P4 : P1 recherche/cadrage = NON PASS (pas de dossier rejouable et version/cycle non figés) ; P2 rédaction/audit de fond = NON PASS (comparaison et calculs insuffisants) ; P3 contre-audit = PASS pour ce rapport, pas pour la page corrigée ; P4 humanisation/UX/QA = PASS technique de base, NON PASS éditorial après correction car aucune correction n'a été effectuée ici.
Publication/indexation : non prouvées. Le local expose `noindex, nofollow`; aucune preuve de production, sitemap traité ou classement Google n'est fournie.
Verdict de publication : NO-GO tant que les P1 ne sont pas corrigés et contre-audités.
```

### Score avant correction

| Axe | Note /10 | Preuve localisable | Manque décisif |
| --- | ---: | --- | --- |
| Intention | 9 | Lead et second paragraphe, `page.tsx:242-257` | Très bon ciblage du dirigeant ; il manque une question d'acceptation finale et un exemple de décision complète. |
| Décision | 7 | Tableau de situations, `page.tsx:300-347` | Pas de score pondéré, seuil de NO-GO, ni scénario « coût/délai/risque » comparable. |
| Pédagogie | 8 | Explication simple du multiplateforme et des risques, `page.tsx:356-417` | L'architecture, le plugin natif et le cycle de versions restent invisibles au non-technicien. |
| Profondeur | 5 | 10 sections, mais peu de mesures, `page.tsx:423-573` | Aucun TCO 12/36/60 mois, taille d'équipe, coût de CI, migration, taille d'app, test/accessibilité ou matrice de modules. |
| Preuve | 5 | Sources en pied de page, `page.tsx:660-713` | Une source presse non primaire pour Flutter, une source tarif commerciale non auditée, absence de versions/cycles et de liens RN/Flutter fondamentaux. |
| Comparaison | 6 | Tableau qualitatif et alternatives, `page.tsx:300-347`, `579-611` | Les critères ne sont pas à périmètre égal ; « Flutter très visuel » et « React naturel » restent des tendances non mesurées. |
| Originalité | 7 | Cas hors-ligne et checklist de questions, `page.tsx:470-486`, `615-651` | Pas d'outil de décision, de contrôle inverse ou de calcul de coût de sortie. |
| Style | 8 | Ton direct, biais déclaré, peu de jargon | La réponse de la FAQ est parfois plus affirmative que le corps et les sections performance/pérennité restent abstraites. |
| Conversion | 7 | CTA et liens vers cahier des charges/prix, `page.tsx:652-659` | Le CTA ne promet ni livrable de comparaison ni prototype de risque ; le prospect ne sait pas ce qu'il obtient après contact. |
| SEO/produit | 7 | H1 unique, 12 H2, FAQ, Article + BreadcrumbList, canonique | 2 471 mots visibles, 108 liens incluant navigation ; manque de maillage vers architecture native/CI/accessibilité et de preuves actualisées. |

Total : **69/100**.

Priorités : **P0 = 0, P1 = 13, P2 = 5**. Aucun P0 de sécurité ou d'intégrité de page n'a été trouvé. Les 13 P1 empêchent toutefois de présenter cette page comme une comparaison 2026 de référence ; selon la règle du chantier, le verdict est NO-GO.

## 2. Ce que le guide dit réellement

Le guide commence bien. Il parle de deux prestataires, refuse le gagnant universel, déclare le biais de Hagnéré (« activité majoritairement React ») et recentre sur équipe, fonctions difficiles, maintenance et reprise. C'est une excellente base humaine.

La progression est la suivante : choix intuitif selon l'équipe, explication du multiplateforme, équipe, budget, prototype des fonctions risquées, performance, pérennité, maintenance, alternatives, questions à poser. Le lecteur sort avec une liste de questions et un lien vers un cahier des charges.

Les points qui aident réellement :

- « ne choisissez pas à partir d'une démonstration fluide » met le risque métier avant la mode ;
- l'exemple du technicien hors ligne, avec dix interventions et vingt photos, transforme un débat abstrait en test observable ;
- la reprise par une seconde équipe et la propriété des comptes Apple/Google/dépôt sont bien mises en avant ;
- le guide ne prétend pas que 100 % du code est partagé et borne le cas Shopify à son propre projet ;
- la possibilité de choisir natif, Kotlin Multiplatform, PWA ou aucune application évite la vente forcée d'une app.

Ce qui donne une illusion de complétude :

- le tableau des situations ne donne pas les conditions qui feraient passer d'une option à l'autre ;
- « le baromètre SILKHOM publie la même grille » ne permet pas de chiffrer un projet, et n'est pas une source primaire technique ;
- la section performance dit que la qualité dépend du code sans définir de seuil, appareil, mode de build, métrique ou test ;
- la maintenance cite Apple/Google mais ne relie pas ces dates à la version réellement supportée par React Native/Flutter ni à un pipeline CI ;
- la pérennité évoque des licenciements Flutter à partir de TechCrunch 2024, sans mise à jour de gouvernance/cycle ni preuve que cela change le risque d'un projet en 2026 ;
- « une grande partie peut être commune » et « rarement 100 % » sont vrais mais ne disent pas quelle partie du projet est réellement commune : UI, domaine, API, tests, intégration native, CI, publication ou documentation.

## 3. Benchmark France et international

Requêtes et pays : consultation le 24 juillet 2026 des sites officiels React Native/Meta, Flutter/Google, Apple Developer et Android Developers ; lecture de résultats éditoriaux FR/US/UK/AU/DACH sur les comparatifs pour identifier les questions manquantes. Aucun tarif, taux de partage ou promesse technique d'un concurrent n'est retenu sans source primaire.

| Ressource et URL directe | Pays | Réponse utile | Preuve, outil ou exemple | Limite | Apport à adapter au guide |
| --- | --- | --- | --- | --- | --- |
| [React Native versions](https://reactnative.dev/versions) et [versioning policy](https://reactnative.dev/docs/releases/versioning-policy) | International / Meta | Le projet suit un train de versions ; 0.86.x est actif, 0.85.x actif, 0.84 en fin de cycle au 24/07/2026 ; les minor versions peuvent contenir des breaking changes. | Calendrier officiel, dates de branche/sortie/support ; politique de dépréciation. | Le statut change ; il faut dater toute publication. | Ajouter un encadré « version contrôlée aujourd'hui » et un budget d'upgrade, au lieu de présenter React Native comme stable sans cycle. |
| [React Native 0.86](https://reactnative.dev/blog/2026/06/11/react-native-0.86) | Meta | 0.86 est latest stable, sans breaking changes utilisateur, avec corrections edge-to-edge Android 15+, DevTools et accessibilité. | Release datée du 11/06/2026 ; 0.83.x devient unsupported ; 0.86 supporte la New Architecture. | Les détails d'un projet et d'Expo peuvent diverger. | Corriger l'absence de version ; demander la version et le canal Expo/CLI dans chaque devis. |
| [React Native 0.82 — New Architecture only](https://reactnative.dev/blog/2025/10/08/react-native-0.82) et [New Architecture](https://reactnative.dev/blog/2024/10/23/the-new-architecture-is-here) | Meta | Depuis 0.82, React Native fonctionne entièrement avec la New Architecture ; la Legacy n'est plus une stratégie de long terme. | Release officielle et description de Fabric, TurboModules, JSI, suppression du bridge. | Compatibilité des bibliothèques natives à vérifier projet par projet. | Ajouter une matrice « module critique compatible New Architecture ? » ; supprimer toute comparaison RN qui suppose l'ancien bridge. |
| [React Native testing](https://reactnative.dev/docs/testing-overview), [accessibility](https://reactnative.dev/docs/accessibility), [performance](https://reactnative.dev/docs/0.83/performance) | Meta | Test unit/component/E2E, VoiceOver/TalkBack et métriques de frames sont des responsabilités distinctes. | La documentation précise que les tests JS ne donnent pas 100 % de confiance et recommande E2E pour flux vitaux. | Les outils tiers (Detox, Appium, Maestro) ont leurs propres cycles. | Faire apparaître tests, appareil réel, accessibilité et release build dans le devis comparable. |
| [Flutter release notes](https://docs.flutter.dev/release/release-notes) | Google / Flutter | La documentation actuelle reflète Flutter 3.44.7 ; les notes stables listent 3.44, 3.41, 3.38, etc. | Page mise à jour le 10/07/2026 ; release notes et migrations officielles. | Le patch exact dépend du canal et de l'installation. | Ajouter Flutter 3.44.7 comme snapshot et un protocole d'upgrade vers les prochaines versions. |
| [Flutter 3.44.0 notes](https://docs.flutter.dev/release/release-notes/release-notes-3.44.0), [breaking changes](https://docs.flutter.dev/release/breaking-changes) | Google / Flutter | Les releases incluent des changements Android/iOS, accessibilité et tooling ; la migration n'est pas abstraite. | Notes officielles, index des breaking changes. | Les notes 3.44.0 ne remplacent pas le changelog patch. | Comparer les coûts de migration et de tests, pas le seul langage Dart. |
| [Flutter platform integration](https://docs.flutter.dev/platform-integration), [plugins](https://docs.flutter.dev/packages-and-plugins/developing-packages) | Google / Flutter | Un plugin peut avoir des implémentations Kotlin/Java, Swift/Objective-C, C++ ou Dart/FFI ; les platform channels sont asynchrones et nécessitent du code natif. | Documentation officielle des plugins fédérés et channels ; FFI recommandé pour certains usages depuis Flutter 3.38. | Un plugin communautaire reste à qualifier par version, licence, mainteneur et couverture de test. | Ajouter une matrice de modules natifs et ne plus présenter Flutter comme « un seul code » quand l'intégration est native. |
| [Flutter performance](https://docs.flutter.dev/perf/rendering-performance), [profiling](https://docs.flutter.dev/perf/ui-performance) et [tests](https://docs.flutter.dev/testing/overview) | Google / Flutter | Mesurer en profile/release sur appareil réel ; les tests unit/widget/integration ont des niveaux de confiance et de coût différents. | DevTools, frame budget, integration_test, Firebase Test Lab et CI documentés. | Pas de chiffre universel de fluidité ou de coût. | Traduire ces outils en critères contractuels : appareil, mode, scénario, seuil, action en cas d'échec. |
| [Flutter accessibility](https://docs.flutter.dev/ui/accessibility/assistive-technologies) | Google / Flutter | Semantics, VoiceOver, TalkBack, textes agrandis, contraste et cibles tactiles doivent être testés. | Pages officielles et recommandations 44/48 px/pt et contrastes WCAG. | Un rendu accessible sur une plateforme ne garantit pas l'autre. | Ajouter une acceptance accessibility commune aux deux options. |
| [Apple upcoming requirements](https://developer.apple.com/news/upcoming-requirements/) | Apple | Depuis le 28/04/2026, les apps soumises doivent être construites avec Xcode 26 et SDK iOS/iPadOS/tvOS/visionOS/watchOS 26. | Page officielle, date et exigence de soumission. | Le compte, les entitlements et les bibliothèques tierces peuvent ajouter des contraintes. | Relier l'exigence au choix de version, aux runners macOS et à la responsabilité de mise à jour. |
| [Google Play target API requirement](https://developer.android.com/google/play/requirements/target-sdk) | Google / Android | À partir du 31/08/2026, nouvelles apps et mises à jour doivent cibler Android 16/API 36 ; extension possible jusqu'au 01/11/2026. | Page officielle mise à jour le 15/07/2026 ; distingue apps nouvelles/existantes. | Les apps privées et autres form factors ont des exceptions. | Ajouter cette échéance dans le plan de maintenance et dans les tests de permissions/edge-to-edge. |
| [Apple Developer membership](https://developer.apple.com/support/compare-memberships/) et [Google Play registration](https://support.google.com/googleplay/android-developer/answer/6112435?hl=en) | Apple/Google | Apple Developer Program 99 USD/an ; compte Play 25 USD une fois, hors éventuelles commissions de transactions. | Pages officielles ; coûts de comptes seulement. | Ne couvre ni CI, appareils, services cloud, analytics, support ou commissions selon le modèle. | Ajouter les coûts périphériques et distinguer distribution interne/Store/public. |
| Comparatifs éditoriaux FR/US/UK/AU/DACH (recherches de couverture) | Plusieurs | Les meilleurs articles structurent généralement par équipe, performance, coût, native modules, cas d'usage et migration. | Utiles pour repérer les questions et le vocabulaire de recherche. | Comparatifs non homogènes, souvent affiliés ou datés ; pas de preuve technique. | Ne retenir que les angles manquants ; ne pas copier de classement, tarif ou pourcentage de code commun. |

Saturation : la collecte de nouveaux « React Native vs Flutter » génériques n'ajoute plus de valeur après les sources ci-dessus. L'avantage éditorial doit venir d'une décision comparable : même périmètre, même appareil, même fonction risquée, même niveau de tests, même fenêtre de versions, puis coût total et sortie documentés. Aucun benchmark de recrutement ou de TJM international sérieux et égal-scope n'a été trouvé dans les sources primaires ; il ne faut pas en inventer un.

## 4. Matrice de gain d'information

| Question décisive | Meilleure réponse officielle | Apport international | Couverture actuelle | Manque | Réponse supérieure à produire |
| --- | --- | --- | --- | --- | --- |
| Quelle version choisit-on en 2026 ? | RN 0.86.x est actif/latest ; Flutter docs reflètent 3.44.7, chaque patch/canal doit être figé. | Les cycles étrangers ne changent pas les versions françaises. | Absente. | Impossible de savoir quelle compatibilité le devis promet. | Carte d'identité du projet : version, canal, Expo/CLI, Dart/Flutter, Node/Xcode/Gradle, date de contrôle. |
| React Native est-il encore sur l'ancien bridge ? | Non : New Architecture only depuis 0.82 ; Legacy est gelée puis supprimée progressivement. | Aucun benchmark concurrent ne remplace cette source Meta. | Absente. | Le lecteur peut croire que la compatibilité des bibliothèques est identique à 2024. | Test de chaque module critique, Codegen/TurboModule/Fabric et plan de remplacement. |
| Flutter est-il « un seul code » ? | Le code Dart peut être partagé, mais les plugins et platform channels contiennent Kotlin/Java/Swift/Obj-C/C++/FFI. | Les comparatifs étrangers distinguent UI partagée et intégration. | Partielle (`page.tsx:356-383`). | Aucun inventaire des lignes natives et de leur maintenance. | Tableau UI/domaine/API/tests/bridge/native/CI par plateforme. |
| Quelle équipe peut reprendre le projet ? | La technologie ne suffit pas ; comptes, dépôt, documentation et tests doivent être livrés. | Les guides de recrutement parlent de communautés, pas de preuve de reprise. | Bonne intention, peu de livrables. | Pas de bus factor, matrice compétences, délai de remplacement. | Exiger une personne de secours, un runbook et un exercice de reprise. |
| Quel coût comparer ? | Pas de tarif officiel ; il faut comparer mêmes jours, mêmes fonctions, mêmes tests, maintenance et publication. | Les tarifs d'articles FR/US/UK/AU/DACH ne sont pas comparables. | SILKHOM et phrases générales. | Aucun TCO 12/36/60. | Modèle déclarant toutes hypothèses, séparant build, run, store, CI, support et évolution. |
| Quelle performance ? | RN et Flutter demandent profile/release, appareil réel, métrique et scénario ; 16,67 ms ≈ 60 fps est un repère, pas une promesse. | Les benchmarks sans protocole sont inutiles. | Très abstraite (`page.tsx:490-510`). | Aucun seuil d'acceptation, startup, scroll, mémoire, batterie ou taille. | Test de dossier hors-ligne, scroll volumineux, startup, mémoire, upload photo et reprise réseau. |
| Quelle accessibilité ? | VoiceOver/TalkBack, Semantics/accessibility props, contraste, taille de texte et cibles doivent être testés. | Les standards WCAG/plateformes donnent les mêmes principes, pas un résultat automatique. | Absente. | Risque légal, qualité et conversion non évalué. | Acceptance matrix a11y commune, avec appareils et tests manuels. |
| Les modules natifs bloquent-ils le choix ? | RN Turbo Native Modules/Codegen ou Flutter plugins/channels/FFI sont possibles ; couverture et maintenance sont à vérifier. | Les comparatifs mentionnent souvent caméra/Bluetooth sans version/licence. | Exemples génériques seulement. | Pas de preuve sur BLE, MDM, paiement, background, fichiers, caméra, imprimante. | Prototype du module le plus risqué et décision à seuil. |
| Le produit passera-t-il les stores ? | Apple Xcode 26/iOS 26 depuis 28/04/2026 ; Play Android 16/API 36 dès 31/08/2026. | Les règles de store varient par pays et forme de distribution. | Dates présentes, mais isolées dans maintenance. | Pas de matrice outil–SDK–plugin–CI. | Plan de release et responsabilités incluant compte, signatures, entitlements, target API et extension de délai. |
| Que coûte une migration/sortie ? | La logique métier/API peut se conserver ; UI, tests visuels, plugins et intégration sont partiellement reconstruits. | Les cas publics sont trop spécifiques pour donner un taux. | Une phrase FAQ (`page.tsx:156-163`). | Pas d'inventaire ni coût de sortie. | Architecture en couches, contrat des données, export, tests de parité, scénario de migration. |
| Quel risque de pérennité ? | RN a un cycle officiel et des versions supportées ; Flutter publie des stable releases et migrations. | Les licenciements/annonces d'entreprises ne prédisent pas seuls l'avenir. | TechCrunch 2024 + blog Google. | Source non primaire et non reliée aux actions de maintenance. | Remplacer la spéculation par indicateurs observables : cycle, support, breaking changes, modules, recrutement et sortie. |

## 5. Faits et fraîcheur

| Affirmation du guide | Verdict | Source primaire actuelle | Périmètre/date | Correction |
| --- | --- | --- | --- | --- |
| « React Native est créé par Meta, Flutter par Google » | Confirmé | [React Native](https://reactnative.dev/) et [Flutter](https://flutter.dev/) | Identité des projets, vérifiée 24/07/2026. | Conserver ; éviter d'en déduire une garantie de support à dix ans. |
| « React Native utilise JavaScript et React ; Flutter utilise Dart et son moteur » | Confirmé, simplifié | [React fundamentals](https://reactnative.dev/docs/intro-react), [Flutter architecture](https://docs.flutter.dev/resources/architectural-overview) | Définition pédagogique. | Conserver, puis relier au coût de recrutement et aux modules natifs plutôt qu'au seul langage. |
| « Le code partagé n'est jamais 100 % » | Vrai comme prudence, non mesurable universellement | [RN architecture](https://reactnative.dev/architecture/landing-page), [Flutter platform integration](https://docs.flutter.dev/platform-integration) | Dépend du domaine, UI, tests, plugins et plateformes. | Remplacer la phrase générale par une décomposition des couches et un scénario. |
| « Shopify a publié 86 % de code commun » | Confirmé comme cas Shopify, non transposable | [Shopify Engineering](https://shopify.engineering/five-years-of-react-native-at-shopify) | Projet Shopify ; le chiffre ne garantit ni un autre produit ni un coût proportionnel. | Conserver uniquement dans un encadré « étude de cas, pas hypothèse de devis ». |
| « SILKHOM donne 330–720 €/jour à Paris et la même grille RN/Flutter/natif » | Source secondaire/commerciale, non corroborée ici | [Baromètre SILKHOM 2025](https://www.silkhom.com/barometre-des-tjm-informatique-electronique-digital/) | Repère de marché, pas documentation technique ni devis à périmètre constant. | Présenter comme exemple de source commerciale datée, sans en déduire le coût total ni une économie RN/Flutter. |
| « Flutter offre un contrôle très poussé du rendu visuel » | Plausible mais non décisionnelle | [Flutter rendering](https://docs.flutter.dev/perf/rendering-performance) et architecture | Le rendu dépend de l'implémentation, pas seulement du framework. | Donner le cas où une interface custom est réellement testée et indiquer le coût d'un design system natif. |
| « RN reçoit les contributions de Microsoft, Shopify, Amazon ; Flutter est porté principalement par Google » | À nuancer | Pages gouvernance/repositories officielles à dater ; [React Foundation announcement via RN 0.86](https://reactnative.dev/blog/2026/06/11/react-native-0.86) | RN a rejoint la React Foundation en 2026 ; Flutter docs/Google restent l'autorité principale. | Ne pas comparer la pérennité à partir d'une phrase de contributeurs ; citer la gouvernance/cycle et les signaux mesurables. |
| « Les licenciements Flutter/Dart de 2024 ont alimenté des interrogations » | Événement possible mais preuve non conforme au standard | Le guide cite [TechCrunch](https://techcrunch.com/2024/05/01/google-lays-off-staff-from-flutter-dart-python-weeks-before-its-developer-conference/) ; ce n'est pas une source primaire. | Une actualité de 2024 ne décrit pas le support 2026. | Retirer, ou remplacer par une phrase sur le cycle officiel et les breaking changes ; ne pas utiliser la presse comme preuve technique. |
| « Google a réaffirmé son investissement » | Confirmé mais contextualisé | [Google Developers Blog — Flutter production era](https://developers.googleblog.com/en/celebrating-flutters-production-era/) | Déclaration de 2024, pas garantie future. | Garder seulement si l'on oppose clairement déclaration et indicateurs de cycle/support. |
| « Apple demande Xcode 26/SDK iOS 26 depuis le 28 avril 2026 » | Confirmé | [Apple Upcoming Requirements](https://developer.apple.com/news/upcoming-requirements/) | Soumissions App Store Connect ; page actuelle. | Conserver et ajouter impact sur runners CI, plugins et versions de projet. |
| « Google Play annonce Android 16/API 36 à partir du 31 août 2026 » | Confirmé, à préciser | [Android Developers target API](https://developer.android.com/google/play/requirements/target-sdk) | Nouvelles apps/mises à jour ; extension possible au 1er novembre 2026 ; exceptions. | Conserver avec date de publication de la page, distinction apps existantes et target/compile SDK. |
| « Les apps publiées nécessitent maintenance versions/store » | Confirmé | [RN versions](https://reactnative.dev/versions), [Flutter releases](https://docs.flutter.dev/release/release-notes), Apple/Android ci-dessus | Cycle logiciel et exigences store. | Ajouter cadence, fenêtre de support et budget de migration. |
| « Une app sans mise à jour plusieurs années peut nécessiter plusieurs étapes » | Raisonnable, mais non chiffré | Release/migration docs RN/Flutter ; Android/Apple requirements | Risque dépendant de version/plugins/native code. | Transformer en checklist de migration, pas en généralité. |
| « RN et Flutter peuvent faire formulaires, photos, notifications, hors ligne » | Possible, non garantie | [RN Native Modules](https://reactnative.dev/docs/turbo-native-modules-introduction), [Flutter channels](https://docs.flutter.dev/platform-integration/platform-channels) | Chaque fonction appelle APIs/modules et tests propres. | Ajouter niveau de risque par fonction et prototype avant engagement. |
| « Kotlin Multiplatform partage surtout la logique métier » | Correct comme orientation, non sourcé dans la page | Documentation officielle Kotlin Multiplatform à ajouter si l'alternative reste. | Version/capacités évoluent. | Ajouter une source primaire ou réduire la description à une piste à étudier. |

### Contradictions

- Le guide veut décider avec la maintenance, mais ne donne ni version, ni cadence, ni durée de support. Au 24/07/2026, RN 0.86.x est actif et 0.83.x unsupported ; Flutter docs reflètent 3.44.7. L'absence de snapshot rend toute recommandation obsolète dès publication.
- Le guide dit « technologie secondaire » alors que l'architecture RN (New Architecture only), le moteur/rendu Flutter, les plugins natifs et le canal de versions changent directement les jours de migration, la compatibilité et le coût.
- Il avertit que le code partagé n'est pas 100 %, mais ne compte pas les couches : UI, domaine, API, tests, native modules, CI, store et documentation.
- Il réclame des performances testées mais ne donne aucun protocole ; « 60 fps » apparaît implicitement dans les généralités du framework, sans release/profile, appareil, scénario ou seuil contractuel.
- La source TechCrunch est utilisée pour un angle de pérennité alors que la demande du chantier impose des sources techniques primaires et que l'événement 2024 n'est plus le meilleur signal en 2026.

### Faits à retirer plutôt qu'à affaiblir

- Retirer le paragraphe sur les licenciements Flutter basé sur TechCrunch, ou le reléguer à une note historique clairement non décisionnelle.
- Retirer le chiffre SILKHOM de la comparaison principale ; il ne doit pas donner l'impression d'un TCO RN/Flutter égal.
- Retirer les expressions « très poussé »/« naturel » si elles ne sont pas suivies d'un cas, d'un test et d'une conséquence chiffrable.
- Ne pas transformer le taux Shopify de 86 % en hypothèse de code commun dans un devis.
- Ne pas écrire « maintenance nécessaire » comme un pourcentage universel : la maintenance doit être liée aux versions, modules, incidents, stores et évolutions.

## 6. Scénarios et calculs à construire

Il n'existe pas de tarif officiel RN ou Flutter. Les calculs suivants sont volontairement des modèles de décision, pas des benchmarks de marché. Ils utilisent un périmètre identique et des hypothèses affichées pour empêcher un comparatif trompeur.

### Périmètre commun de calcul

Application métier interne, iOS + Android, 12 écrans, authentification, API existante, liste paginée de 10 000 dossiers, formulaire hors ligne sur 1 parcours, capture photo, notifications, analytics, publication publique, tests unitaires/component + 8 parcours E2E, documentation, CI, comptes d'entreprise, support de deux versions majeures de chaque OS. Aucun design extrêmement animé, Bluetooth, paiement natif ou vidéo temps réel.

Hypothèses pédagogiques : 80 jours-homme de build pour une équipe qui connaît réellement son framework ; 12 jours de cadrage/prototype ; 10 jours CI/tests/release ; 8 jours de documentation/transfert ; 20 jours de réserve spécifique au premier module natif/hors ligne ; maintenance annuelle modélisée à 20 % des jours de build pour les mises à jour et incidents, plus 10 jours d'évolutions. **Ces jours ne sont pas des prix observés : ils doivent être remplacés par un devis et un test technique.**

| Variable | Simple | Central | Exigeant | Source ou hypothèse |
| --- | ---: | ---: | ---: | --- |
| Cadrage/prototype | 8 j | 12 j | 20 j | Hypothèse de planification, non benchmark. |
| Build commun et interfaces | 60 j | 80 j | 120 j | Même périmètre pour RN et Flutter. |
| Native/offline/tests/release | 20 j | 30 j | 55 j | Dépend des modules et appareils ; à mesurer. |
| Total première livraison | 88 j | 122 j | 195 j | Somme des postes précédents et documentation/transfert intégrés. |
| Maintenance technique/an | 16 j | 24 j | 39 j | 20 % du build, hypothèse de scénario. |
| Évolution métier/an | 8 j | 10 j | 18 j | Hypothèse distincte de la maintenance corrective. |
| Apple Developer | 99 USD/an | 99 USD/an | 99 USD/an | Tarif officiel Apple, hors conversion locale. |
| Google Play | 25 USD une fois | 25 USD une fois | 25 USD une fois | Inscription officielle, hors commissions de transactions. |

```text
TCO 12 mois = jours de première livraison × TJM contractuel
             + jours de maintenance + jours d'évolution × TJM contractuel
             + CI/cloud/monitoring/support
             + comptes stores, appareils de test et frais de publication
             + commissions de paiement si le produit vend du numérique.

TCO 36 mois = première livraison + (maintenance + évolution) × 3
              + upgrades majeurs prévus + support + services récurrents.

TCO 60 mois = première livraison + (maintenance + évolution) × 5
              + deux migrations de versions majeures hypothétiques à recalculer
              + coût de sortie éventuelle / changement de prestataire.
```

### Exemple chiffré sans faux benchmark

Pour illustrer uniquement la méthode, supposons un TJM contractuel identique de 600 € HT pour les deux équipes. Ce montant n'est pas présenté comme un prix de marché ; il permet de comparer les mêmes jours.

| Horizon | RN hypothèse centrale | Flutter hypothèse centrale | Ce que le calcul prouve / ne prouve pas |
| --- | ---: | ---: | --- |
| Première livraison | 122 × 600 = 73 200 € HT | 122 × 600 = 73 200 € HT | À périmètre/jours égaux, le framework ne crée aucune économie magique. |
| 12 mois | (122 + 24 + 10) × 600 = 93 600 € HT + services | même formule = 93 600 € HT + services | Le vrai débat porte sur les jours et les risques, pas le nom du framework. |
| 36 mois | (122 + 3×34) × 600 = 134 400 € HT + services | idem | Un TCO égal est un scénario, pas une mesure réelle. |
| 60 mois | (122 + 5×34) × 600 = 175 200 € HT + services | idem | Ajouter les migrations et la sortie si les versions/plugins le nécessitent. |

**Scénario de bascule — module natif imprévu :** si une technologie ajoute 15 jours de bridge/plugin/test et l'autre 5 jours, l'écart est 10 × 600 = 6 000 € HT sur le build. Cet écart est une hypothèse de sensibilité, pas un résultat RN/Flutter généralisable. Il montre pourquoi un prototype du lecteur code-barres, BLE, MDM ou hors ligne vaut mieux qu'un vote de communauté.

**Scénario de délai :** si chaque semaine de retard coûte hypothétiquement 1 500 € de marge contributive ou de travail manuel, six semaines valent 9 000 €. Une solution un peu plus chère sur le devis peut être rationnelle si elle réduit le délai et le risque, mais ce calcul exige une marge documentée par l'entreprise.

**Scénario de sortie :** si une seconde équipe doit reprendre en mois 36, le budget de reprise doit inclure lecture du code, environnement, comptes stores, documentation, tests de non-régression, mise à niveau des plugins et un mois de stabilisation. Aucun pourcentage honnête ne peut être donné sans dépôt et inventaire réels ; le guide doit afficher la variable comme inconnue plutôt que l'inventer.

Horizon : 12 mois pour lancer, 36 mois pour subir un premier cycle de mises à niveau, 60 mois pour mesurer la dette, les équipes et la sortie.

Inclus : même fonctionnalité métier, même API, mêmes appareils cibles, tests, CI, stores, documentation et transferts.

Exclus : TJM réel, cloud/analytics précis, commissions de stores, marketing, support utilisateur, conformité sectorielle et évolution des besoins.

Résultat : il est impossible de conclure « Flutter moins cher » ou « React Native moins cher » par le framework seul. La variable de décision est le nombre de jours réellement nécessaires dans les fonctions difficiles, la qualité du pipeline, la disponibilité d'une seconde équipe et le coût d'upgrade.

Analyse de sensibilité : faire varier les jours native/offline (5/15/30), le TJM (devis réel), la maintenance (10/20/35 %), le délai et la fréquence d'upgrade ; séparément pour chaque framework, sans conserver le même nombre de jours par principe.

Variable qui fait basculer la décision : compatibilité du module critique avec la version retenue, puis compétence réelle de l'équipe et délai de livraison.

Contrôle inverse : si le choix est encore le même après avoir remplacé le framework par natif et web installable dans le scénario, le problème est probablement le produit et non la technologie. Si le budget sans maintenance à 36 mois n'est pas soutenable, le projet n'est pas prêt à être lancé.

## 7. Comparaison et position professionnelle

```text
Options réellement comparables :
  - React Native 0.86.x / New Architecture ;
  - Flutter 3.44.7 stable (version exacte à figer) ;
  - natif Swift + Kotlin si le module critique est central ;
  - Kotlin Multiplatform si une équipe Kotlin et un partage de domaine existent ;
  - web installable si les fonctions téléphone/offline ne sont pas indispensables ;
  - pas d'app si un outil interne ou un site mobile couvre le besoin.

Périmètre et horizon communs : même cahier des charges, mêmes 12 écrans, même API, même offline/photo/notifications, mêmes appareils, mêmes tests et 12/36/60 mois.

Option la moins chère : celle qui nécessite le moins de jours de risque et d'entretien pour ce produit, pas celle dont le langage est supposé populaire.

Option la moins risquée : le framework déjà maîtrisé par l'équipe qui assurera les upgrades et possède le module critique, à condition d'avoir une seconde capacité de reprise.

Option qui demande le moins de temps interne : une équipe qui livre un prototype mesuré, le pipeline et la documentation ; l'absence de compétence interne rend la propriété des comptes et la reprise encore plus importantes.

Position Hagnéré Code pour le cas fréquent : React Native est un candidat sérieux pour une entreprise déjà équipée en React, mais il doit être proposé en 0.86/New Architecture avec test des modules natifs. Flutter est à mettre au même niveau si l'équipe qui signe maîtrise réellement Dart/Flutter et si son avantage visuel réduit un risque mesuré. Le choix ne doit pas être conclu avant le prototype.

Faits qui la fondent : RN et Flutter ont des cycles officiels, des chemins natifs, des outils de test/performance/accessibilité ; les stores imposent des SDK/outils communs ; aucun chiffre de code partagé ou TJM ne suffit à décider.

Cas où l'option opposée gagne : Flutter si l'interface custom et l'équipe Flutter réduisent les jours prouvés ; RN si l'équipe React, les composants existants et les bibliothèques New Architecture couvrent le risque ; natif si le produit est essentiellement une intégration OS/hardware ; web si l'appareil n'apporte aucune valeur.

Signal de révision : module non compatible, version unsupported, plugin sans mainteneur/tests, build CI trop lent, crash/accessibility non résolu, coût de mise à niveau supérieur à la valeur, ou absence de personne de reprise.

Ce que nous déconseillons même si nous pourrions le vendre : choisir React Native parce que Hagnéré l'utilise, choisir Flutter parce qu'il « dessine tout », promettre un pourcentage de code commun, ou chiffrer la maintenance comme un pourcentage universel sans liste de tâches.
```

## 8. Objections et cas limites

| Objection loyale | Réponse prouvée | Ce qui reste incertain | Conséquence |
| --- | --- | --- | --- |
| « Je veux sortir sur les stores avant la fin de l'été 2026. » | Apple exige Xcode 26/SDK 26 depuis le 28/04/2026 ; Google Play exige API 36 dès le 31/08/2026 pour nouvelles apps/mises à jour. | Plugins, runner CI, compte et review peuvent bloquer. | Figer versions/outils et faire une build de soumission avant la fin du développement. |
| « J'ai déjà une équipe React. » | RN réutilise React/JavaScript ; cela peut réduire l'apprentissage, pas garantir la compétence native/mobile. | Expérience publication, permissions, CI, New Architecture. | Demander une référence et un prototype ; vérifier la capacité de support après départ du prestataire. |
| « Flutter est plus performant. » | Flutter documente profile/release et performance ; RN documente JS/UI frames et tests sur release. Aucun classement universel n'est prouvé. | Appareil, liste, animations, réseau, moteur et code. | Refuser l'adjectif sans scénario/mesure ; comparer le prototype. |
| « Je ne veux aucun code natif. » | Les deux solutions prévoient plugins/modules/platform channels ; camera, BLE, MDM, notifications et paiement peuvent nécessiter du natif. | Fonction précise et plugin retenu. | Inventorier les interfaces natives avant signature. |
| « Je veux partager 90 % du code. » | Shopify a publié 86 % dans son propre projet RN ; ce n'est pas un taux générique. | Découpage UI/domaine/tests/native. | Faire chiffrer les couches et les deux plateformes, pas un pourcentage marketing. |
| « On pourra changer de framework plus tard. » | API, données et domaine peuvent être séparés ; UI, plugins, tests visuels et intégration doivent souvent être reconstruits. | Architecture réelle et qualité de documentation. | Prévoir export, contrats API, tests de parité, comptes et budget de sortie dès le départ. |
| « Une PWA sera moins chère quoi qu'il arrive. » | Elle peut suffire à un outil de formulaire/listes ; accès au téléphone, offline, notifications et stores ont des limites. | Browser support et exigence offline. | Tester web installable dans le même scénario, ne pas la vendre comme sous-produit. |
| « Les deux frameworks ont une maintenance de 20 % par an. » | Aucun taux officiel universel ; la maintenance dépend versions, plugins, incidents, stores et évolutions. | Factures, criticité et SLA. | Chiffrer une liste de tâches et un budget de capacité, pas un pourcentage isolé. |
| « Les licenciements Flutter prouvent que Google abandonne Flutter. » | La presse 2024 n'est pas preuve primaire ; les releases/cycles officiels 2026 sont un meilleur signal présent. | Horizon de dix ans impossible à garantir. | Remplacer la peur par suivi cycle/support/modules/sortie. |
| « Je peux donner les comptes stores au prestataire. » | Apple/Google et le dépôt doivent rester sous l'entreprise pour assurer propriété et reprise. | Organisation, D-U-N-S, rôles et secrets. | Créer les comptes au nom de l'entreprise et documenter les droits. |
| « L'accessibilité sera automatique avec les composants standards. » | RN et Flutter ont APIs/semantics, mais les deux docs demandent tests VoiceOver/TalkBack, texte, contraste et cibles. | Composants custom et appareil. | Ajouter tests manuels et E2E à la recette ; ne pas promettre conformité sans audit. |
| « Notre app est interne, donc les stores ne comptent pas. » | Distribution privée/MDM a d'autres comptes, signatures et règles ; Android mentionne des exceptions pour apps privées, Apple Business/Enterprise a ses conditions. | Mode de distribution exact. | Décider public, TestFlight, MDM, Play privé ou APK géré avant le devis. |

## 9. Plan de réécriture

| Ordre | Section proposée | Question résolue | Preuve, scénario ou outil | Décision produite | À conserver / créer / couper |
| ---: | --- | --- | --- | --- | --- |
| 1 | Verdict 60 secondes | Quel choix pour mon entreprise ? | Tableau équipe/fonction/risque ; NO-GO si module non testé. | Candidat principal et option de repli. | Conserver l'ouverture ; créer une règle d'arrêt. |
| 2 | Carte 2026 des versions | De quoi parle-t-on exactement ? | RN 0.86.x actif/New Architecture ; Flutter 3.44.7 ; date de contrôle ; Expo/CLI. | Versions à inscrire au devis. | Créer ; aucune version actuelle n'est dans la page. |
| 3 | Les couches réellement partagées | Où est l'économie ? | UI, domaine, API, tests, modules, CI, store, docs. | Jours communs et spécifiques. | Créer ; remplacer le seul « pas 100 % ». |
| 4 | Test de la fonction qui peut tuer le projet | Quel risque dois-je prototyper ? | Offline/photo/BLE/MDM/paiement/notifications selon cas ; appareil réel ; critères. | Framework validé, architecture ou natif. | Conserver l'exemple technicien ; formaliser protocole. |
| 5 | Native modules et plugins | Qui maintient le code OS ? | RN TurboModule/Codegen ; Flutter plugin/channel/FFI ; version/licence/mainteneur. | Effort natif prévu ou solution alternative. | Créer ; manque critique actuel. |
| 6 | Performance et accessibilité mesurées | L'app sera-t-elle utilisable ? | Release/profile, startup, frame time, mémoire, batterie, TalkBack/VoiceOver, contraste/texte. | Recette avec seuils. | Créer ; couper les adjectifs sans mesure. |
| 7 | TCO 12/36/60 | Quel est le coût réel ? | Table de jours, TCO et services ; hypothèses visibles ; comptes stores. | Budget et capacité de maintenance. | Créer ; ne plus appuyer la décision sur SILKHOM seul. |
| 8 | Cycle, CI/CD et stores | Qui publie quand ? | RN versions, Flutter release notes, Xcode 26, Android API36, secrets, runners, rollback. | Plan de release et responsabilité. | Créer ; enrichir section maintenance. |
| 9 | Reprise, migration et sortie | Puis-je changer d'équipe/framework ? | Runbook, dépôt, comptes, export, tests, API/domain, exercice de reprise. | Risque de lock-in acceptable ou non. | Créer ; approfondir FAQ migration. |
| 10 | Alternatives et décision | L'app est-elle nécessaire ? | Natif/KMP/PWA/aucune, même scénario et coût de délai. | Décision produit, pas préférence de framework. | Conserver alternatives, les faire calculer. |
| 11 | CTA à livrable | Que se passe-t-il après contact ? | Livrable annoncé : scorecard, prototype de risque, tableau TCO et questions. | Demande qualifiée. | Conserver CTA ; préciser le résultat concret. |

### Contrat des 150 premiers mots

« Vous avez un projet d'application iPhone et Android, et l'un des prestataires parle de React Native tandis que l'autre recommande Flutter. La question utile n'est pas “quel framework est le meilleur ?”, mais “quelle solution livrera nos fonctions sans nous enfermer dans une équipe ou une maintenance que nous ne pourrons pas payer ?”. En 2026, les deux solutions sont professionnelles. React Native 0.86 est dans son cycle stable et fonctionne avec la New Architecture ; la documentation Flutter reflète la branche stable 3.44.7. Ces numéros ne suffisent pourtant pas à choisir. Il faut vérifier qui pourra reprendre le projet, quels modules natifs sont nécessaires, comment l'app se comporte hors ligne, ce que coûtent les tests et les mises à niveau, et quelles exigences Apple/Google s'appliquent à la date de mise en ligne. Nous allons comparer un même périmètre, calculer le coût à 12, 36 et 60 mois et tester le scénario qui peut faire échouer votre projet. Le verdict peut être React Native, Flutter, natif, web ou aucune application : il doit être prouvé par votre usage. »

### Éléments à supprimer

- le paragraphe TechCrunch sur les licenciements Flutter s'il reste une pièce de la recommandation ; il est non primaire et daté ; 
- le chiffre SILKHOM dans le verdict, les tableaux de décision et tout calcul de coût ;
- les adjectifs de performance/rendu sans scénario ;
- toute suggestion implicite que le framework fournit le pourcentage d'économie ou de code partagé ;
- les répétitions de « la maintenance est nécessaire » sans tâches, versions et responsables.

### Éléments à conserver

- le biais React déclaré ;
- l'ouverture centrée sur équipe, fonction difficile, maintenance et reprise ;
- l'exemple hors ligne/photo ;
- la checklist de questions, la propriété des comptes et les alternatives ;
- la prudence sur Shopify 86 % si elle est clairement étiquetée étude de cas non transposable ;
- les exigences Apple/Google après liaison aux versions et à la CI.

## 10. Contre-audit après correction

Aucune correction n'a été appliquée à la source dans ce rapport. Ce tableau décrit la contre-vérification obligatoire de l'agent qui réécrira la page.

| Problème | Priorité | Correction à appliquer | Revalidation indépendante |
| --- | --- | --- | --- |
| Version/cycle absent (RN 0.86, Flutter 3.44.7) | P1-01 | Ajouter carte versionnée et date de contrôle ; lier cycles officiels. | Ouvrir versions RN/Flutter, vérifier active/latest/support et aligner métadonnées. |
| New Architecture RN non traitée | P1-02 | Décrire RN 0.82+ New Architecture only, TurboModules/Fabric/Codegen et compatibilité des bibliothèques. | Tester module critique sur RN 0.86 et vérifier la source Meta. |
| Source TechCrunch utilisée comme preuve de pérennité | P1-03 | Retirer ou transformer en note historique ; baser décision sur cycles/support/migration. | Relire sans presse et vérifier que la conclusion ne dépend plus de l'événement. |
| Native modules/plugins absents de la comparaison | P1-04 | Matrice RN TurboModule vs Flutter plugin/channel/FFI, version/licence/mainteneur. | Inventorier caméra, BLE, MDM, paiement, notifications, fichiers, background, scanner. |
| TCO 12/36/60 absent | P1-05 | Ajouter périmètre commun, jours par couche, stores, CI, maintenance, upgrades, sortie. | Refaire le calcul avec devis réel ; vérifier qu'aucun TJM fictif n'est présenté comme marché. |
| SILKHOM présenté comme repère suffisant | P1-06 | Reléguer à source secondaire ou retirer ; ne pas déduire une économie framework. | Vérifier la note méthodologique et marquer toute hypothèse comme telle. |
| Performance non mesurée | P1-07 | Ajouter release/profile, appareils, startup/frame/mémoire/batterie, scénario et seuil. | Run de test sur appareils réels ; conserver résultats et version. |
| Accessibilité absente | P1-08 | Ajouter VoiceOver/TalkBack, texte grand, contraste, cibles, Semantics/accessibility, E2E. | Test manuel + automatisé sur iOS/Android ; inclure les composants custom. |
| CI/CD et tests de release absents | P1-09 | Détailler Jest/RTL/Detox ou équivalents, Flutter unit/widget/integration, runners macOS/Linux, secrets, rollback. | Pipeline vert sur version retenue et build de soumission. |
| Store requirements isolées | P1-10 | Relier Xcode26/iOS26 et API36 au target/compile SDK, plugins, signatures et calendrier. | Rouvrir Apple/Android et vérifier une build TestFlight/Play interne. |
| Maintenance sans modèle | P1-11 | Remplacer le « budget annuel » par tâches, SLA, cadence, versions, incidents, évolutions et coût de capacité. | Contre-calcul 12/36/60 avec contrat de maintenance réel. |
| Migration/sortie trop générique | P1-12 | Ajouter architecture API/domain, export données, comptes, tests, runbook, exercice de reprise et coût. | Une équipe tierce doit lancer le projet et produire une build sans le prestataire initial. |
| Recrutement et taille d'équipe non évalués | P1-13 | Score compétences React/Dart, natif, CI, produit, bus factor, délai de remplacement ; ne pas inventer de chiffres d'emploi. | Vérifier références réelles et disponibilité, par écrit, dans deux devis comparables. |
| Phrase « 86 % Shopify » mal réutilisée | P2-01 | Encadré étude de cas et décomposition des couches. | Relecture pour vérifier qu'aucune économie ou taux universel n'est déduit. |
| Alternatives KMP/PWA insuffisamment sourcées | P2-02 | Ajouter docs Kotlin officielles ou réduire les affirmations ; préciser limites de distribution. | Refaire la matrice produit avec même périmètre. |
| CTA sans livrable concret | P2-03 | Promettre une scorecard/prototype/TCO, pas une technologie favorite. | Test utilisateur : le prospect sait quelle information il recevra. |
| Glossaire et comparaison pour dirigeant insuffisants | P2-04 | Définir framework, bridge, New Architecture, plugin, native module, CI/CD, TCO en marge ou encadré. | Lecture par personne non technique, relever toute phrase ambiguë. |
| Sources sans date par affirmation | P2-05 | Ajouter date de consultation/mise à jour et version dans chaque encadré ; ne pas seulement écrire « juillet 2026 ». | Vérifier tous les liens et la cohérence `dateModified`/OG/pied de page. |

### Score après correction projeté (non acquis)

| Axe | Note /10 projetée | Preuve à créer | Manque résiduel |
| --- | ---: | --- | --- |
| Intention | 10 | Contrat d'ouverture et verdict contextualisé | Le besoin du client doit encore être confirmé. |
| Décision | 10 | Scorecard, seuils, alternatives et contrôle inverse | Un prototype réel reste nécessaire. |
| Pédagogie | 10 | Glossaire, couches partagées et exemples métier | Les lecteurs ont des niveaux techniques différents. |
| Profondeur | 10 | TCO 12/36/60, modules, CI, a11y, perf, migration | Les jours réels ne peuvent venir que des tests/devis. |
| Preuve | 10 | Sources Meta/Google/Apple/Android datées et primaires | Les versions continueront à évoluer. |
| Comparaison | 10 | Même périmètre et scénarios symétriques | Aucune technologie n'est optimale pour tous les cas. |
| Originalité | 9 | Outil de décision et protocole de prototype | La valeur dépend de son adoption par les prospects. |
| Style | 9 | Prose humaine, opinion bornée, suppressions des adjectifs | Relecture indépendante encore nécessaire. |
| Conversion | 9 | CTA avec livrable tangible | Ne pas utiliser le scoring comme promesse commerciale absolue. |
| SEO/produit | 9 | Entités/version/cycle/FAQ/maillage technique et ressource | Indexation et performances production à vérifier séparément. |

Total projeté : **96/100**, objectif conditionnel, non acquis dans l'état actuel.

## 11. Preuves techniques et visuelles

```text
Manifeste : aucun manifeste de recherche, registre ou fichier source modifié ; aucun dossier research ajouté.
Calculs refaits : modèle pédagogique 88/122/195 jours ; 20 % maintenance et 10 jours évolution sont des hypothèses déclarées ; exemple TJM 600 € identique aux deux options ; TCO central 12 mois 93 600 € HT hors services, 36 mois 134 400 €, 60 mois 175 200 € ; sensibilité module +10 jours = 6 000 € au TJM illustratif ; aucun chiffre présenté comme benchmark officiel.
Sources rouvertes : RN versions/versioning policy/0.82/0.86/New Architecture/testing/accessibility/performance/native modules ; Flutter release notes 3.44.7/3.44 breaking changes/platform integration/plugins/performance/testing/accessibility ; Apple upcoming requirements ; Android target API ; comptes Apple/Google.
Liens vérifiés : les 6 URLs citées dans le guide renvoient HTTP 200 en curl (SILKHOM, Shopify, TechCrunch, Google Developers, Apple, Google Play). Les liens techniques ajoutés au rapport ont été ouverts dans les sources officielles ; aucune conclusion de tarif concurrent n'en est déduite.
Rendu local : 2 471 mots visibles, H1=1, H2=12, H3=3, JSON-LD=2, canonique `https://hagnere-code.ai/guides/react-native-ou-flutter`, robots local `noindex, nofollow`.
Responsive : widths 320/390/768/1024/1280/1440/1600 testées par viewport ; scrollWidth == innerWidth et bodyScrollWidth == innerWidth après stabilisation ; tables sans débordement ; H1 unique. Une première lecture instantanée a signalé un scrollWidth transitoire sur un caption sr-only à 1280, puis la revalidation stabilisée a donné 1280/1280 ; ne pas classer comme bug sans reproduction.
Console : aucun error/warn/warning dans le navigateur local.
Image sociale : `opengraph-image.tsx`, 1200 × 630, alt cohérent ; badge « Comparatif 2026 » devra être aligné avec la date de ré-audit au prochain changement.
Statut maximal prouvé : contenu source audité, sources actuelles rouvertes, responsive et console locales vérifiées ; aucun correctif, build mobile ou benchmark exécuté.
Réserve publication/indexation : production, déploiement, sitemap traité, Search Console, positions et conversion non vérifiés ; le local est noindex/nofollow.
```

Conclusion opérationnelle : cette page est une bonne base de vulgarisation et de conversion, mais pas encore une référence de choix technique. Elle doit passer de « React Native si React / Flutter si interface dessinée » à une décision instrumentée par versions, architecture, modules natifs, tests, accessibilité, CI, stores, TCO 12/36/60 et sortie. Tant que les 13 P1 ne sont pas corrigés avec des sources primaires et un contre-audit indépendant, il faut la laisser en NO-GO éditorial plutôt que publier une comparaison 2026 qui pourrait engager un dirigeant sur une hypothèse non démontrée.
