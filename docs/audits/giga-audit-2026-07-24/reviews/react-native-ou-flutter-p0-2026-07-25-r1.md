# Audit froid initial — `react-native-ou-flutter`

Date : 25 juillet 2026  
Auditeur : contre-audit indépendant, lecture seule  
Périmètre : page, registre, image sociale, dossier de recherche P1, manifeste,
tests structurels et sources actuelles utiles à la décision.  
Hors périmètre : réécriture, prototype d'application, benchmark de performance
sur appareil, publication, déploiement, Search Console et promesse de
classement.

## 1. Snapshot audité

| Élément | SHA-256 au moment de l'audit | Constat |
| --- | --- | --- |
| `src/app/guides/react-native-ou-flutter/page.tsx` | `3c9b8193f75398215bcb86c5e8f90baf182969adad3c5aab27c14a8cc2fdec1c` | page inchangée depuis l'audit du 24 juillet |
| `src/app/guides/react-native-ou-flutter/opengraph-image.tsx` | `f73bec62d8800cec2219f6f333f02937cef96398d47daa9291474e231184f17b` | image dédiée 1 200 × 630 |
| `src/lib/guides.ts` | `74542cf4bfc1d00fb21587bc87bcb00ba991da4f249701a8ec2f5d26fe827659` | entrée du guide inchangée, mais fichier partagé modifié ailleurs |
| `docs/research/react-native-ou-flutter.md` | `4a43bd469e52194d72ca5f9842df55d183e8870dc6cc8e2f583090a51f1726ef` | dossier P1 mondial présent et substantiel |
| manifeste P1 R1 | `34ec4e0e44800b398dedb3c1d583f11e2712cf2d279509537fd0c568fd5b5197` | le hash du registre qu'il contient n'est plus le hash courant |

Le manifeste P1 contient `8bbc597f...` pour `src/lib/guides.ts`, contre
`74542cf4...` au moment de ce rapport. La page, l'image et la recherche
correspondent encore au manifeste. Le décalage du registre vient du caractère
partagé du fichier ; il impose de relire l'entrée et de refaire le manifeste
avant P2, pas de déclarer toute la recherche invalide.

Le dossier P1 dit explicitement :

- P1 terminée ;
- P2 à faire ;
- P3 et P4 bloquées ;
- la page n'est pas corrigée et sa note de départ ne doit pas être augmentée.

## 2. Verdict exécutif

```text
Lecteur : dirigeant, responsable produit ou responsable numérique non spécialiste
qui reçoit deux recommandations techniques différentes pour une application
iPhone et Android.

Décision attendue : choisir React Native, Flutter, natif, Kotlin Multiplatform,
web/PWA ou aucune nouvelle application après comparaison d'un même besoin, d'une
même fonction risquée, d'un même niveau de preuve et d'un même horizon de coût.

Réponse actuelle : commencer par l'équipe disponible, la fonction difficile, la
maintenance et la reprise ; React Native est logique avec une vraie capacité
React/mobile, Flutter avec une vraie équipe Flutter ou une interface spécifique.

Force principale : ouverture claire, biais React déclaré, absence de vainqueur
universel et excellent exemple du technicien hors ligne.

Défaut principal : le texte promet de décider à partir du coût, des fonctions et
de la reprise, mais ne fournit ni comparaison à périmètre égal, ni versions
actuelles, ni modules, ni TCO, ni protocole de mesure et contient un fait
tarifaire inexactement résumé.

Note : 68/100.
Incidents ouverts : P0 = 1 ; P1 = 14 ; P2 = 5.
Verdict : NO-GO éditorial.
Statut maximal prouvé : recherche P1 prête pour rédaction ; page actuelle non
prête pour contre-audit, revue humaine ou publication premium.
```

Ce guide est une bonne vulgarisation courte. Il n'est pas encore une ressource
de décision premium capable de dépasser les meilleures ressources
internationales. Le dossier P1 fournit toutefois une matière mondiale de bon
niveau pour effectuer la réécriture sans repartir de zéro.

## 3. Score actuel avant correction

| Axe | Note /10 | Preuve localisable | Manque qui limite la note |
| --- | ---: | --- | --- |
| Intention | 9 | ouverture `page.tsx:239-255` | la décision finale et ses conditions d'arrêt ne sont pas annoncées |
| Décision | 7 | tableau de situations `300-343`, questions `607-638` | aucun éliminatoire, score justifié ou dossier final de décision |
| Pédagogie | 8 | français courant, exemple hors ligne `462-485` | architecture actuelle, modules, pipeline et sortie restent invisibles |
| Profondeur | 5 | fonctions, équipe et maintenance abordées | aucun TCO 12/36/60, accessibilité, CI/CD, sécurité, licence, appareils ou coût de sortie |
| Preuve | 4 | six liens en bibliographie `658-709` | fait SILKHOM inexact, citation Shopify non démonstrative, sources décisives éloignées et documentation actuelle des frameworks absente |
| Comparaison | 6 | tableau initial et alternatives `310-343`, `571-605` | options non comparées sur le même périmètre, les mêmes versions et les mêmes seuils |
| Originalité | 7 | technicien hors ligne et test de risque | aucun artefact utilisable, calculateur, grille remplissable ou exercice de reprise |
| Style | 8 | ton direct, prudent, biais déclaré | quelques raccourcis stéréotypés sur le visuel Flutter et le patrimoine React |
| Conversion | 7 | un CTA après la démonstration `640-655` | livrable après contact et mauvais ajustement non explicités |
| SEO/produit | 7 | title, meta, H1, canonical, OG, Article et Breadcrumb cohérents | page éligible à l'indexation malgré les portes non franchies ; aucune QA dédiée au guide |

Total recalculé : **68/100**.

Conditions bloquantes de la charte :

- `Preuve`, `Profondeur` et `Comparaison` sont sous le minimum de publication ;
- les six axes obligatoires ne sont pas tous à 9 ou 10 ;
- un P0 factuel reste ouvert ;
- P2, P3 et P4 ne sont pas terminées ;
- aucune validation humaine réelle n'est documentée.

## 4. Ce qui mérite d'être conservé

1. Les 150 premiers mots parlent au bon lecteur et déclarent le biais React de
   l'agence.
2. La page refuse explicitement le « meilleur framework » universel.
3. Elle place l'équipe qui maintiendra et reprendra le projet avant la mode.
4. Le scénario « dix interventions, vingt photos, reconnexion sans perte ni
   doublon » est concret et mémorisable.
5. Elle rappelle que les comptes Apple, Google et le dépôt doivent appartenir à
   l'entreprise.
6. Elle conserve natif, Kotlin Multiplatform, web et aucune application dans le
   champ de décision.
7. Le CTA est unique et arrive après la démonstration.
8. Le registre fournit un titre, une description et un temps de lecture
   cohérents avec la page actuelle.

Ces éléments sont une base, pas une preuve de profondeur. La P2 doit les
conserver tout en remplaçant le comparatif d'attributs par un protocole de
décision.

## 5. Vérifications indépendantes des faits actuels

Sources rouvertes le 25 juillet 2026 :

| Sujet | Source primaire ou source du chiffre | Résultat utile au contre-audit |
| --- | --- | --- |
| version React Native | [Versions React Native](https://reactnative.dev/versions) | `0.86.x` est active et stable ; `0.85.x` active ; `0.84.x` en fin de cycle ; `0.87.x` future |
| architecture React Native | [React Native 0.82](https://reactnative.dev/blog/2025/10/08/react-native-0.82) | depuis 0.82, la New Architecture est la seule architecture activable |
| modules React Native | [Turbo Native Modules](https://reactnative.dev/docs/turbo-native-modules-introduction) | une spécification, Codegen et des implémentations de plateforme peuvent être nécessaires |
| version Flutter | [Flutter release notes](https://docs.flutter.dev/release/release-notes) | la documentation reflète Flutter `3.44.7` à la date de contrôle |
| plugins Flutter | [Flutter packages et plugins](https://docs.flutter.dev/packages-and-plugins/developing-packages) | les plugins peuvent comporter du Kotlin/Java, Swift/Objective-C, C/C++ ou FFI ; « un seul code » n'élimine pas le natif |
| performance Flutter | [Flutter performance profiling](https://docs.flutter.dev/perf/ui-performance) | la mesure pertinente se fait sur appareil physique, en mode profile/release, notamment sur l'appareil plancher |
| exigence Apple | [Apple Upcoming Requirements](https://developer.apple.com/news/upcoming-requirements/) | depuis le 28 avril 2026, App Store Connect exige Xcode 26 ou plus récent avec SDK 26 |
| exigence Google Play | [Target API Google Play](https://developer.android.com/google/play/requirements/target-sdk) | dès le 31 août 2026, les nouvelles apps et mises à jour ordinaires doivent cibler Android 16/API 36, sous exceptions publiées |
| Kotlin Multiplatform | [stabilité des plateformes KMP](https://kotlinlang.org/docs/multiplatform/supported-platforms.html) | le cœur KMP et Compose Multiplatform sont stables sur iOS ; KMP peut partager la logique seule ou aussi l'interface |
| tarif SILKHOM | [Baromètre TJM 2025](https://www.silkhom.com/wp-content/uploads/2025/05/Barometre_TJM_2025_SILKHOM_FREELANCE.pdf) | le baromètre regroupe React Native, Flutter et Ionic dans une ligne « Crossplatform » ; les grilles natives Android/iOS sont séparées et ne sont pas toutes identiques |
| retour Shopify | [Five years of React Native at Shopify](https://shopify.engineering/five-years-of-react-native-at-shopify) | le retour confirme notamment la nécessité d'expertise native, d'upgrades et de gestion des dépendances ; la page liée ne localise pas le chiffre `86 %` employé dans le guide |

Les affirmations Apple et Google Play de la page sont encore correctes dans
leur périmètre général. Elles restent trop isolées : elles doivent être reliées
à la version du framework, aux plugins, aux runners, à la signature, à la build
de soumission et au responsable de maintenance.

## 6. Registre des écarts ouverts

| ID | Gravité | Fichier et preuve | Conséquence pour le lecteur | Correction attendue | Revalidation |
| --- | --- | --- | --- | --- | --- |
| P0-01 | P0 | `page.tsx:121-124`, `423-428`, `658-669` affirme que SILKHOM publie « la même grille » pour React Native, Flutter et le natif | le lecteur peut croire que la source a comparé séparément les trois technologies et prouve l'égalité de leurs tarifs | dire exactement que le baromètre regroupe React Native, Flutter et Ionic dans une catégorie cross-platform ; ne pas l'utiliser pour conclure à l'égalité avec le natif ; conserver seulement les valeurs réellement supportées et leur périmètre | relire le PDF, contrôler catégorie, région, ancienneté, min/max, puis rechercher chaque reprise du chiffre dans corps et FAQ |
| P1-01 | P1 | aucune version React Native/Flutter dans le corps ; `page.tsx:512-533` parle de pérennité sans cycle | le dirigeant compare des noms, pas les versions que le devis devra maintenir en 2026 | dater RN `0.86.x`, Flutter `3.44.7`, Expo/CLI/canal et politique d'upgrade ; expliquer que les statuts évoluent | rouvrir les pages officielles juste avant P2 et publication ; vérifier version, canal et support |
| P1-02 | P1 | `page.tsx:356-380` ignore la New Architecture imposée depuis RN 0.82 | une bibliothèque ou une reprise supposée compatible peut bloquer la livraison | expliquer en français simple Fabric/TurboModules/Codegen uniquement au moment utile et exiger une preuve de compatibilité du module critique | build du module sur la version retenue, sur iOS et Android |
| P1-03 | P1 | comparaison qualitative `300-343`, sans périmètre commun complet | deux devis peuvent paraître comparables tout en couvrant des écrans, tests, services et responsabilités différents | fixer même parcours, appareils, données, offline, notifications, API, accessibilité, distribution, documentation, maintenance et sortie | relire deux propositions ligne à ligne et conserver toute inconnue en `ND` |
| P1-04 | P1 | fonctions difficiles citées `462-475`, mais aucun inventaire de modules/plugins/SDK | le coût natif, la licence, la maintenance ou l'absence de plan B peuvent apparaître après signature | matrice caméra/BLE/MDM/paiement/background/fichiers/notifications : version, licence, mainteneur, plateformes, données, code natif, solution de repli | prototype de la fonction éliminatoire et build propre sur appareils réels |
| P1-05 | P1 | budget limité à un TJM et à des postes `421-459` | impossible de comparer le coût complet ou de voir quand un avantage initial s'inverse | intégrer TCO reproductible à 12/36/60 mois, maintenance technique séparée des évolutions, CI/stores/services/temps interne/sortie visibles, avec sensibilité | refaire chaque total et modifier jours, taux, horizon et principale inconnue |
| P1-06 | P1 | performance `487-510` sans build, appareil, répétitions, métriques ni seuil ; accessibilité seulement citée comme poste de coût `434-436` | aucun contrat ne permet de recevoir ou de refuser l'application | protocole commun : appareil plancher, release/profile, démarrage, p50/p95, fluidité, mémoire, batterie, offline, VoiceOver, TalkBack, texte agrandi et cibles tactiles | mesures conservées et parcours complet rejoué sur iOS et Android |
| P1-07 | P1 | maintenance `536-568` cite les stores mais pas pipeline, tests, secrets, bêta ou retour arrière | une technologie peut être « choisie » sans qu'une build signée et publiable existe | détailler CI/CD, runners, certificats, secrets, tests unitaires/intégration/E2E, TestFlight/Play interne ou MDM, télémétrie et stratégie de correction | une autre personne produit les builds et rejoue une publication interne |
| P1-08 | P1 | `540-568` demande un budget annuel sans modèle de support/versioning | le montant peut mélanger incident, sécurité, upgrade et nouvelle fonction | capacité annuelle par tâche, versions supportées, délais d'intervention, plafonds, responsabilités et événement de revalidation | rapprocher d'un contrat réel et d'un exercice d'upgrade N-1 |
| P1-09 | P1 | aucune analyse visible des permissions, SDK tiers, données, licences ou chaîne de dépendances | le framework peut passer alors qu'un SDK crée un risque de vie privée, de sécurité ou d'exploitation | ajouter registre des données/permissions/SDK, propriétaire, politique de mise à jour, licence, télémétrie et plan de retrait ; borner tout conseil juridique | inventaire de build, revue des manifests et vérification par responsable sécurité/vie privée compétent |
| P1-10 | P1 | équipe/reprise `383-419`, `529-533`, FAQ `151-158` reste générique | « nous savons React » peut masquer l'absence d'iOS/Android, de secours et de procédure de build | vérifier personnes nommées, compétences web/mobile/natives/release, bus factor, comptes, runbook, export et exercice de reprise par une équipe tierce | clone propre, accès minimaux et build signée sans le prestataire initial |
| P1-11 | P1 | alternatives `571-605` ; KMP décrit surtout comme partage de logique | le lecteur ne compare pas loyalement KMP avec Compose partagé, PWA, natif mono-plateforme ou statu quo | réécrire six options avec les mêmes fonctions et preuves ; présenter KMP comme choix de frontière : logique seule ou logique + UI ; inclure « ne rien développer » et le coût du statu quo | même scénario sur chaque option ; élimination uniquement sur incapacité prouvée |
| P1-12 | P1 | sources seulement en pied de page `658-709` ; Shopify `86 %` à `375-380` n'est pas localisable dans la page liée ; TechCrunch 2024 porte la pérennité `521-526` | les faits qui changent la décision sont difficiles à auditer et un signal ancien peut prendre trop de poids | rapprocher chaque source décisive de la phrase ; retirer ou relier correctement `86 %` en le bornant à Shopify Mobile ; remplacer la peur liée aux licenciements par cycle, support, migration et sortie | contrôle URL par URL, date, portée et conséquence ; lecture du texte sans la presse pour vérifier que le verdict ne change pas |
| P1-13 | P1 | aucun dossier de décision ou outil autonome dans la page ; seulement six questions `607-638` | le lecteur comprend les principes mais ne peut pas normaliser ses devis, calculer ou consigner une décision partageable | intégrer l'artefact « preuve avant framework » : éliminatoires, appareils, modules, TCO, inconnues, résultats et décision ; conclusion possible « aucune app » | remplir l'outil avec au moins deux scénarios opposés et vérifier qu'il ne recommande pas toujours l'agence |
| P1-14 | P1 | le dossier `docs/research/react-native-ou-flutter.md:18-25` dit P2 à faire et P3/P4 bloquées, tandis que l'entrée `guides.ts:1452-1465` n'a pas `editorialStatus` ; le rendu de production local renvoie `index, follow` | l'état public implicite contredit la porte éditoriale réellement documentée | pendant la reprise, aligner le registre avec le statut réel ; ne retirer la porte qu'après P2, P3, P4, score, autorisation et QA | vérifier `PUBLISHED_GUIDES`, robots du build gelé, hub, sitemap et `llms.txt` sur le même snapshot |
| P2-01 | P2 | CTA `640-643` dit « nous pourrons vous répondre » sans livrable ni mauvais ajustement | le prospect ne sait pas ce qu'il recevra ni quand l'agence lui déconseillera le projet | annoncer scorecard/prototype/TCO ou recommandation de ne pas développer ; définir bon et mauvais fit | test de compréhension du résultat après clic |
| P2-02 | P2 | les quatre `keyPoints` ont une `description` vide, `190-214` | le résumé visuel répète des slogans sans apporter de décision | ajouter une conséquence courte ou réduire le nombre de cartes | contrôle visuel et lecture des cartes seules |
| P2-03 | P2 | OG affiche « Comparatif 2026 » alors que `dateModified` reste au 21 juillet et que la page n'intègre pas le snapshot technique du 25 juillet | le millésime peut donner une impression de fraîcheur supérieure au contenu | conserver le millésime seulement après intégration et vérification ; aligner OG, visible et date réelle après publication | rendre l'OG et comparer texte, année et date au guide gelé |
| P2-04 | P2 | FAQ de dix questions reprend plusieurs décisions déjà présentes et reproduit les faits SILKHOM/Shopify | chaque correction doit être faite deux fois et peut diverger | garder seulement les questions résiduelles ; réconcilier toutes les affirmations conservées avec le corps | recherche automatique et relecture corps/FAQ |
| P2-05 | P2 | manifeste P1 : hash `guides.ts` différent du fichier actuel | un prochain agent pourrait rédiger depuis un snapshot partiellement périmé | relire l'entrée exacte puis produire un nouveau manifeste de départ P2 sans écraser R1 | `shasum -a 256 -c` ou contrôle équivalent sur tous les fichiers listés |

**Réconciliation des compteurs :** le tableau contient exactement 1 identifiant
P0, 14 identifiants P1 et 5 identifiants P2. Les causes « architecture React
Native » et « comparaison à périmètre égal » restent séparées, car elles
appellent des corrections et des preuves différentes.

## 7. Ordre de correction recommandé

1. Retirer ou corriger immédiatement l'équivalence tarifaire SILKHOM.
2. Aligner le statut éditorial du registre avec la reprise en cours.
3. Intégrer le snapshot actuel : RN 0.86/New Architecture, Flutter 3.44.7,
   KMP/Compose, exigences stores.
4. Fixer un périmètre commun et les éliminatoires avant toute note.
5. Construire l'inventaire des modules et le prototype du risque.
6. Ajouter appareils, performance, accessibilité, tests, CI/CD et diffusion.
7. Ajouter TCO 12/36/60, support, équipe, reprise et sortie.
8. Comparer loyalement six options, y compris aucune application.
9. Transformer la checklist en dossier de décision autonome.
10. Replacer les sources au plus près, réécrire CTA/FAQ, puis lancer le
    contre-audit indépendant P3 sur un nouveau manifeste.

## 8. Contrôles techniques effectués

```text
Route locale du build disponible :
  http://localhost:3011/guides/react-native-ou-flutter
  HTTP 200
  title cohérent
  canonical absolu cohérent
  robots : index, follow
  H1 : 1
  H2 : 12
  FAQ visible : oui
  image OG : HTTP 200, image/png

Temps de lecture :
  GUIDE_BASE_URL=http://localhost:3011 npm run measure:guide-readtime -- react-native-ou-flutter
  2 130 mots visibles
  11 min calculées
  registre : 11 min
  résultat : cohérent

Tests ciblés :
  npx vitest run --maxWorkers=1 \
    src/lib/guides.test.ts \
    src/lib/structured-data.test.ts \
    src/app/sitemap.test.ts \
    src/app/robots.test.ts
  4 fichiers passés
  33 tests passés
```

Ces contrôles prouvent un socle technique local propre. Ils ne prouvent ni la
qualité premium, ni la validation humaine, ni l'état de la production publique,
ni l'indexation.

## 9. GO / NO-GO

| Porte | Verdict | Motif |
| --- | --- | --- |
| matière de recherche P1 vers P2 | **GO sous réserve du nouveau manifeste** | dossier mondial riche, sources primaires, contradictions et calculs présents |
| page actuelle vers P3 | **NO-GO** | P2 non intégrée, 1 P0 et 14 P1 |
| page actuelle vers P4 | **NO-GO** | P3 non réalisée |
| « prêt pour revue humaine » | **NO-GO** | score 68/100 et blocages ouverts |
| publication premium / numéro 1 potentiel | **NO-GO** | profondeur, preuve et décision insuffisantes ; aucun classement ne peut être garanti |

Conclusion : **la page doit être réécrite, pas simplement allongée**. Sa
promesse et son ton sont bons. La prochaine version doit faire passer le
lecteur d'un tableau « React si React, Flutter si Flutter » à une décision
rejouable : besoin d'app, éliminatoires, appareil réel, modules, accessibilité,
build distribuée, TCO et reprise.
