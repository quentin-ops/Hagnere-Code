# Audit approfondi — `combien-coute-une-application-mobile`

Date : 24 juillet 2026

Auditeur concurrentiel : contre-audit P3 lecture seule (contexte froid)

Snapshot du guide : page, image sociale et registre contrôlés le 24 juillet 2026.
Le guide n'a pas été modifié pendant cet audit.

## 1. Verdict exécutif

```text
Lecteur exact : dirigeant de PME, responsable métier ou porteur de produit qui
cherche une enveloppe avant de demander des devis pour une application iOS,
Android, multiplateforme ou métier.
Question réelle : « Est-ce qu'une application téléchargable est vraiment le
bon investissement, et combien dois-je réserver au lancement puis chaque année ? »
Décision attendue : choisir entre site/PWA, no-code, application
multiplateforme, natif ou report ; définir un périmètre de première version et
un budget total plutôt qu'un prix de développement isolé.
Réponse actuelle en une phrase : le guide donne des fourchettes Hagnéré de
20 000–50 000 € pour une première version et 35 000–80 000 € pour une
application métier, puis décrit les postes, la publication et la maintenance.
Défaut qui coûte le plus de valeur : aucune comparaison à périmètre égal ni
TCO chiffré sur 12/36/60 mois ; le lecteur repart avec des repères mais ne peut
pas tester son seuil de rentabilité ni comparer un devis.
Niveau actuel : C
Priorité : haute
Statut : audité — à réécrire, contre-audit et QA restant
```

### Score avant correction

| Axe         | Note /10 | Preuve localisable | Manque décisif |
| ----------- | -------: | ------------------ | -------------- |
| Intention   | 9 | H1, hero et lead répondent au budget et posent la question « faut-il une app ? » (`page.tsx:160-232`) | Le choix d'un budget ne devient pas une décision calculée. |
| Décision    | 7 | Alternatives PWA/web, multiplateforme, natif et report (`page.tsx:320-468`) | Pas de seuil, de verdict par profil ni de contrôle inverse. |
| Pédagogie   | 8 | Tables, exemple fictif signalé et devis décomposé (`page.tsx:275-498`) | API, PWA, hors-ligne, TCO et maintenance restent partiellement non traduits. |
| Profondeur  | 7 | Dix sections couvrant conception, stores, récurrence, délai et contrat | Pas de scénario métier complet avec utilisateurs, volume, coût et résultat. |
| Preuve      | 6 | Apple, Google et CNIL liés ; fourchettes annoncées comme estimations Hagnéré | Pas de méthode source pour les montants internes ; lien CNIL actuellement mort. |
| Comparaison | 6 | Comparaisons qualitatives de solutions et de plateformes | Aucun périmètre égal PWA/no-code/cross-platform/natif, aucun coût de sortie. |
| Originalité | 7 | Position honnête « ne pas créer d'application » et exemple technicien | Pas d'actif réutilisable ni de calcul propriétaire visible. |
| Style       | 8 | Ton dirigeant, réserves explicites, CTA après la valeur | Quelques formulations restent génériques (« une application continue de coûter »). |
| Conversion  | 8 | CTA cohérent et mauvais fit évoqué (`GuideInlineCTA`) | Le clic n'offre ni calcul autonome ni livrable avant le contact. |
| SEO/produit | 8 | H1 unique, canonical, Article + BreadcrumbList, OG 1200×630, maillage | `dateModified` au 21 juillet et une source 404 affaiblissent la confiance ; indexation production non prouvée. |

Total : **74/100** (somme vérifiée : 9 + 7 + 8 + 7 + 6 + 6 + 7 + 8 + 8 + 8 = 74)

**Gravités : P0 : 0 ; P1 : 10 ; P2 : 3.**

**Verdict : NO-GO comme guide de référence au seuil de 90/100.** La base est
humaine et utile pour un premier cadrage, mais le lecteur ne peut pas encore
relier le prix annoncé à son propre volume d'usage, à son coût total ou à un
critère d'arrêt. Aucune porte P1–P4 n'est considérée franchie sur ce snapshot :
ce rapport est le livrable de la passe P3, pas une validation de la réécriture.

## 2. Ce que le guide dit réellement

### Ouverture et promesse

Les 150 premiers mots donnent une réponse exploitable : 20 000–50 000 € pour
une première version utilisable, 35 000–80 000 € pour une application métier
plus connectée, et l'avertissement qu'une app peut être la mauvaise solution.
Le montant est correctement qualifié d'« estimation Hagnéré, pas une moyenne du
marché ». C'est une bonne protection contre la fausse précision.

En revanche, « estimation Hagnéré » n'est pas encore une méthode. Le lecteur
ne sait pas combien de jours, quel niveau de TJM, quel nombre d'utilisateurs,
quel niveau de design, quelles plateformes, quel backend, quelle QA ni quel
support permettent d'obtenir ces fourchettes. Deux dirigeants peuvent donc
interpréter le même repère avec des périmètres incompatibles.

### Progression

La progression est logique :

1. fourchettes par type de projet ;
2. test de nécessité de l'app ;
3. fonctions qui changent le prix ;
4. choix natif/multiplateforme/web ;
5. lecture d'un devis ;
6. comptes Apple et Google ;
7. coûts après lancement ;
8. délai ;
9. valeur économique ;
10. contrat et propriété.

Cette séquence est plus lisible qu'un catalogue de technologies. Elle reste
cependant descriptive : le seul exemple chiffré complet est une répartition de
38 000 € qui ne montre ni bénéficiaire, ni coût annuel, ni retour attendu.

### Exemples et comparaisons présents

- exemple fictif de technicien : photo, formulaires hors ligne,
  synchronisation et connexion au logiciel interne ;
- décomposition fictive de 38 000 € : besoin 3 000, design 4 000,
  application 14 000, serveur/admin 8 000, paiement/notifications 4 000,
  tests/publication/transfert 5 000 ;
- tableau de solutions selon la fréquence et les fonctions du téléphone ;
- tableau de postes récurrents sans montant ;
- tableau de valeur à mesurer selon le type d'app.

La somme de l'exemple est correcte :

```text
3 000 + 4 000 + 14 000 + 8 000 + 4 000 + 5 000 = 38 000 €
```

Ce contrôle arithmétique ne valide pas les montants unitaires : ils sont
illustratifs et ne sont reliés à aucun effort, taux, périmètre ou source.

### Ce qui paraît complet mais n'aide pas assez à décider

- « Maintenance », « hébergement », « support » et « services externes » sont
  nommés mais jamais totalisés.
- Le choix natif/multiplateforme est expliqué, sans comparer une même application
  avec un coût initial et un coût de sortie communs.
- Le contrat liste les droits et les comptes, sans checklist d'acceptation
  testable, de migration, de sauvegarde restaurée ou de réversibilité.
- La rentabilité demande de mesurer le temps économisé mais ne montre aucun
  calcul de payback, de valeur récupérable ou d'hypothèse qui ferait renoncer.
- Les frais Apple/Google sont visibles, mais les règles de compte, de test et de
  commission qui peuvent retarder ou modifier le projet ne sont pas précisées.

## 3. Benchmark France et international

Requêtes observées le 24 juillet 2026 : `combien coûte une application mobile
2026`, `mobile app development cost 2026`, `mobile app development cost UK
2025/2026`, `cost to build mobile app Australia 2026`, `App Entwicklung Kosten
2026`. Les pages commerciales ci-dessous servent à cartographier les réponses,
les objections et les formats. Elles ne servent pas de preuve d'un prix français
ou d'une règle de store.

| Ressource et URL directe | Pays | Réponse utile | Preuve, outil ou exemple | Limite / conflit | Apport à vérifier ou adapter |
| ------------------------ | ---- | ------------- | ------------------------ | --------------- | ---------------------------- |
| [Agence App Mobile / Drylead](https://agence-application-mobile.fr/blog/cout-creation-application-mobile-2026-guide-tarifaire-pme) | France | 30–250 k€ annoncés, 50–150 k€ comme « budget moyen », découpage MVP/standard/complexe | Fourchettes par complexité, 15–20 % de maintenance et 20–30 % natif vs cross-platform | Agence qui vend le service ; aucune méthodologie indépendante visible | Conserver le réflexe de chiffrer maintenance et conception, mais produire nos propres scénarios vérifiables. |
| [La Fabrique du Net — tarifs application mobile](https://www.lafabriquedunet.fr/agences/pages/agences-application-mobile/tarifs) | France | Médiane de marché annoncée et lecture des budgets par niveau | Méthodologie de référencement d'agences, comparaison de forfait/régie | Agrégateur commercial ; prix et avis ne sont pas une étude primaire | Ajouter une séparation explicite entre prix observés et estimation Hagnéré. |
| [Bolder Apps — What Founders Actually Pay](https://www.bolderapps.com/blog-posts/mobile-app-development-cost-2026) | États-Unis | 30 k$ MVP simple à 500 k$+ entreprise ; 50–150 k$ production MVP ; 15–30 % de coûts cachés annoncés | Explique compliance, intégrations, maintenance et donne des exemples de coûts par verticale | Agence américaine ; fourchettes orientées vente et non transposables en euros | Ajouter les coûts cachés par mécanisme, sans convertir les montants US en tarifs français. |
| [Seven Solvers — UK pricing guide](https://www.sevensolvers.com/blog/mobile-app-development-cost-uk-20252026-complete-pricing-guide) | Royaume-Uni | £15–35 k£ MVP, £25–60 k£ outil interne, £40–90 k£ app grand public, £120–300 k£ plateforme intégrée | Tableau égalisé par type, délai et plateforme ; explique le coût de fragmentation Android | Agence ; base de prix déclarée, pas un échantillon audité | Reprendre le tableau par type de périmètre et le tampon de publication, sans convertir en euros comme prévision. |
| [Code Heroes — Australia 2026](https://www.codeheroes.com.au/blog/cost-to-build-mobile-app-australia-2026/) | Australie | 20–60 k$AU MVP, 60–150 k$AU produit de croissance, 150 k$AU+ entreprise | Discovery chiffrée, support post-lancement, propriété du code/données et critères d'un devis acceptable | Studio qui vend ses offres ; chiffres propres à un marché et une équipe | Ajouter au guide un contrat de sortie, la propriété et le plan de support comme critères de prix. |
| [IntegrIT Solutions — DACH](https://www.integritsol.de/app-entwicklung-kosten) | Allemagne/DACH | 20–50 k€ pilote, 40–100 k€ business app, 100–250 k€+ plateforme ; 30–50 % de premium natif annoncé | Délai et tampon 20–30 % pour store review et clarification des besoins | Source commerciale, méthodologie non indépendante | Rendre le tampon de publication et de décision visible dans le scénario, pas dans une promesse universelle. |
| [Digital Delight — Schweiz](https://digital-delight.ch/app-entwicklung/) | Suisse alémanique | Prototype dès CHF 8,5 k, MVP cross-platform dès CHF 18 k, natif dès CHF 32 k | Périmètre explicite (écrans, mock data, backend, auth, push, stores), ownership et maintenance | Prix d'appel d'un studio suisse ; CHF et marché non français | Bon modèle de périmètre inclus/exclus et de mauvais fit (« pas d'app si simple site »). |

### Saturation de la recherche

Les nouvelles pages n'ajoutent plus de catégorie de prix après les familles
prototype/PWA/no-code, MVP, outil métier, produit grand public, marketplace et
entreprise. Elles ajoutent en revanche trois éléments que la page actuelle ne
possède pas encore :

1. un périmètre identique pour comparer les options ;
2. un coût total dans le temps, incluant exploitation et sortie ;
3. une méthode de calcul et un contre-cas qui peut conduire à ne rien construire.

La page supérieure doit donc gagner par la reproductibilité et la décision,
pas par une nouvelle liste de fourchettes.

## 4. Matrice de gain d'information

| Question décisive | Meilleure réponse française | Apport international | Couverture actuelle | Manque | Réponse supérieure à produire |
| ----------------- | --------------------------- | -------------------- | ------------------- | ------ | ----------------------------- |
| Quel budget dois-je réserver dès le départ ? | Les pages françaises donnent surtout des fourchettes par complexité. | US/UK/AU détaillent les paliers et les inclusions. | 20–50 k€ / 35–80 k€ sont annoncés, sans effort ni inclusions exhaustives. | Méthode de construction et limites. | Trois scénarios Hagnéré avec heures, rôles, plateformes, tests, publication et exclusions. |
| Une PWA, un no-code ou une app native répond-elle au même besoin ? | Les comparaisons restent souvent technologiques. | UK/DACH décrivent le périmètre partagé et le premium natif. | Tableau qualitatif, pas de coût à périmètre égal. | Comparaison financière et coût de sortie. | Scénario unique : 20 techniciens, 2 plateformes, offline, photos, API, admin, 36 mois. |
| Quel sera le coût après le lancement ? | Maintenance souvent exprimée en pourcentage. | US/AU insistent sur support, compliance, discovery et ownership. | Postes nommés mais sans chiffres. | TCO 12/36/60 et hypothèses de volume. | Tableau central + simple/exigeant, séparant exploitation, support, stores, évolution et sortie. |
| L'app se rembourse-t-elle ? | Les guides conseillent de mesurer sans calculer. | Les meilleures pages proposent calculateur, étapes et critères d'arrêt. | Aucune formule de payback ou contrôle inverse. | Valeur récupérable et sensibilité. | Calcul du gain net, mois de retour, seuil d'heures économisées et cas de report. |
| Les frais de stores sont-ils vraiment 99 $ + 25 $ ? | Les montants sont cités correctement mais brièvement. | Les pages de plateforme détaillent comptes, vérification et commissions. | Lien officiel Apple/Google ; commission seulement décrite. | D-U-N-S, tests compte personnel, nouvelles règles Play 2026. | Encadré daté avec ce qui est fixe, variable, obligatoire ou à confirmer. |
| Qui possède la relation et comment sortir ? | La page demande que les comptes soient au nom de l'entreprise. | AU/DACH montrent ownership, dépôt, support et transfert. | Liste contractuelle courte. | Réversibilité technique et données testée. | Checklist d'acceptation, sauvegarde restaurée, export, accès et scénario de changement de prestataire. |

## 5. Faits et fraîcheur

| Affirmation du guide | Verdict | Source primaire actuelle | Périmètre et date | Correction à prévoir |
| -------------------- | ------- | ------------------------ | ----------------- | -------------------- |
| Apple Developer Program : 99 USD par année, devise locale possible | Confirmé | [Apple — Choosing a Membership](https://developer.apple.com/support/compare-memberships/) | Page officielle consultée le 24 juillet 2026 ; l'inscription d'une organisation demande notamment une entité légale et un D-U-N-S Number. | Conserver 99 USD, ajouter D-U-N-S et préciser que la devise et les exemptions dépendent du compte. |
| Google Play : 25 USD d'inscription unique | Confirmé, mais incomplet | [Google Play — conditions d'accès EEE](https://support.google.com/googleplay/android-developer/answer/14659200?hl=en) et [Android Developer Console — distribution](https://support.google.com/android-developer-console/answer/16640817?hl=en) | La page officielle indique 25 USD pour la distribution complète ; les comptes personnels ont des vérifications et exigences de test distinctes. | Ajouter compte organisation/personnel, vérification et exigence de test avant de promettre une publication. |
| Les commissions Apple/Google dépendent du type de vente, programme, pays et règles | Confirmé, mais trop vague | [Google Play — nouveaux frais de service](https://support.google.com/googleplay/android-developer/answer/16954621?hl=en), [Apple App Review Guidelines](https://developer.apple.com/app-store/review/guidelines/) | Google a annoncé une structure déployée à partir du 30 juin 2026 pour EEE/Royaume-Uni/États-Unis, avec catégories de frais et facturation ; Apple impose ses règles de paiement et de revue. | Dat(er) explicitement la règle, distinguer frais de compte, commissions et paiement externe, puis renvoyer à la page officielle. |
| La CNIL fournit des recommandations pour les apps mobiles | Confirmé | [CNIL — recommandations applications mobiles](https://www.cnil.fr/fr/applications-mobiles-les-recommandations-de-la-cnil) | Page actuelle consultée le 24 juillet 2026 ; recommandations modifiées, sans changement de fond annoncé. | Le lien actuel de la page est erroné dans le guide (voir contradiction ci-dessous). |
| Une première version coûte 20–50 k€ ; une app métier 35–80 k€ | Estimation interne, non vérifiable comme moyenne | Aucune source primaire de marché ; les concurrents servent seulement de couverture | Le guide précise « estimations Hagnéré » mais ne donne ni TJM, ni jours, ni effectif, ni inclusions exhaustives. | Décomposer par effort et périmètre, puis maintenir trois scénarios avec date et propriétaire des hypothèses. |
| Une première version demande 2–4 mois ; une complète 4–8 mois ou davantage | Estimation interne plausible mais non démontrée | Aucun planning de projet ou source primaire | Les délais dépendent des accès, décisions, store review, QA et intégrations. | Donner le calendrier par jalons, dépendances, marge et critère de report. |

### Contradictions et erreurs de lien

1. Le lien visible [CNIL](https://www.cnil.fr/fr/applications-mobiles-la-cnil-publie-ses-recommandations) renvoie HTTP 404 le 24 juillet 2026. La page actuelle est
   `https://www.cnil.fr/fr/applications-mobiles-les-recommandations-de-la-cnil`.
   Le fond cité reste pertinent, mais le lecteur ne peut pas le vérifier depuis
   le guide. **P1-01.**
2. La page date son paragraphe de sources « Au 21 juillet 2026 », tandis que
   l'audit est du 24 juillet et que Google a fait évoluer ses règles de frais et
   de distribution au 30 juin 2026. Ce n'est pas une contradiction arithmétique,
   mais un signal de fraîcheur insuffisant pour une page qui promet 2026.
   **P1-10.**
3. La réponse « comptez 20–50 k€ » se trouve dans le hero, le lead, la FAQ et le
   tableau. La répétition est cohérente, mais le montant n'est jamais relié à un
   volume, une charge ou un résultat ; il peut être lu comme un prix public
   Hagnéré malgré la réserve « estimation ». **P1-02.**

### Faits à retirer plutôt qu'à affaiblir

- Ne pas transformer les fourchettes commerciales françaises, US, UK, AU ou
  DACH en « prix du marché français ».
- Ne pas écrire qu'une base commune économise un pourcentage universel : le
  partage de code ne supprime ni QA par appareil, modules natifs, publication,
  support ni maintenance.
- Ne pas promettre une date de store ; annoncer une fenêtre avec dépendances et
  marge.
- Ne pas présenter un temps économisé comme une économie de trésorerie sans
  expliquer sa réaffectation ou le coût effectivement évité.

## 6. Scénarios et calculs à construire

### 6.1 Variables à expliciter

| Variable | Simple | Central | Exigeant | Source ou hypothèse |
| -------- | -----: | -------: | -------: | ------------------- |
| Utilisateurs métier | 5 | 10 | 20 | Hypothèse illustrative, à remplacer par le brief client |
| Usage par utilisateur | 1 visite/jour | 2 visites/jour | 2 visites/jour | 220 jours travaillés/an, hypothèse explicite |
| Temps évité par usage | 8 min | 8 min | 10 min | Mesurer avant/après ; ne pas confondre temps libre et économie cash |
| Coût chargé valorisé | 35 €/h | 35 €/h | 35 €/h | Hypothèse de calcul, pas un taux légal |
| Coût initial cross-platform | 38 000 € | 38 000 € | 50 000 € | L'exemple actuel donne 38 000 € ; le scénario exigeant ajoute intégrations/QA |
| Exploitation annuelle | 12 000 € | 12 000 € | 18 000 € | Hypothèses comprenant hébergement, monitoring, support et maintenance ; à chiffrer |
| Coût d'erreurs évité/an | 3 000 € | 3 000 € | 8 000 € | Hypothèse à mesurer par incidents, reprises ou réclamations |

### 6.2 TCO à périmètre égal

Périmètre commun : 20 techniciens, 2 plateformes, connexion, comptes et rôles,
prise de photos, formulaires hors ligne, synchronisation et gestion d'un conflit,
10 000 rapports/an, administration, export CSV, sauvegardes, tests sur appareils,
publication, support de niveau 1 et transfert du dépôt. Les montants suivants
sont une **simulation pédagogique**, pas un devis ni un benchmark de marché.

| Option | Initial | Exploitation/an | TCO 12 mois | TCO 36 mois | TCO 60 mois | Risque à vérifier |
| ------ | -------: | ---------------: | ----------: | ----------: | ----------: | ---------------- |
| PWA / web installable | 18 000 € | 7 000 € | 25 000 € | 39 000 € | 53 000 € | accès appareil et hors-ligne limités selon le besoin |
| No-code mobile | 14 000 € | 10 000 € | 24 000 € | 44 000 € | 64 000 € | dépendance plateforme, limites de synchronisation/export |
| Cross-platform | 38 000 € | 12 000 € | 50 000 € | 74 000 € | 98 000 € | modules natifs, parc d'appareils et store review |
| Deux bases natives | 60 000 € | 16 000 € | 76 000 € | 108 000 € | 140 000 € | deux chaînes de livraison et deux évolutions à maintenir |

Formule : `TCO(H) = coût initial + (coût d'exploitation annuel × H)`. Ici les
  frais de paiement variables, la TVA, l'acquisition des utilisateurs, le coût
  interne des décisions, le financement et une éventuelle migration de données
  sont exclus. Ils doivent apparaître dans un devis séparé, jamais être supposés
  nuls.

Le point important n'est pas que la PWA gagne toujours : c'est que le choix
change dès qu'une exigence hors ligne, une permission native ou une contrainte
de distribution devient réellement centrale. Le guide actuel ne permet pas ce
test à périmètre égal. **P1-03 et P1-04.**

### 6.3 Sensibilité économique sur l'exemple du technicien

```text
Gain de temps annuel = utilisateurs × usages/jour × jours/an × minutes évitées / 60
Gain valorisé = gain de temps annuel × coût chargé
Gain total = gain valorisé + coût d'erreurs évité
Gain net annuel = gain total − exploitation annuelle
Payback (années) = coût initial / gain net annuel, uniquement si le gain net est positif
```

| Scénario | Gain temps/an | Gain valorisé | Gain total avec erreurs | Gain net après 12 k€ d'exploitation | Payback indicatif |
| -------- | ------------: | ------------: | ----------------------: | ----------------------------------: | -----------------: |
| Simple : 5 × 1 × 220 × 8 min | 146,7 h | 5 133 € | 8 133 € | **−3 867 €** | aucun |
| Central : 10 × 2 × 220 × 8 min | 586,7 h | 20 533 € | 23 533 € | 11 533 € | 3,3 ans sur 38 k€ |
| Exigeant : 20 × 2 × 220 × 10 min | 1 466,7 h | 51 333 € | 59 333 € | 47 333 € | 0,8 an sur 38 k€ |

Le scénario simple est volontairement un cas de renoncement : l'app peut être
utile mais ne couvre pas son exploitation, même avant le coût de construction.
Le central ne rembourse pas entièrement 74 000 € de TCO sur 36 mois
(23 533 × 3 = 70 599 € de gain brut). Le gain exigeant devient intéressant,
mais suppose réellement 20 techniciens, 2 usages quotidiens, une réaffectation
du temps et des erreurs mesurables. Ces hypothèses doivent être confirmées
avant toute décision. **P1-05 et P1-08.**

### 6.4 Contrôle inverse

Avec 38 000 € de construction et 12 000 € d'exploitation annuelle, le gain
annuel minimal pour couvrir le TCO sur 36 mois est :

```text
(38 000 + 3 × 12 000) / 3 = 24 666,67 € par an
24 666,67 / 35 € = 704,76 heures par an
704,76 / 220 = 3,20 heures d'équipe par jour
À 10 utilisateurs = 19,2 minutes économisées par personne et par jour
```

Ce seuil ne prouve pas que le projet est rentable : il révèle seulement la
mesure à obtenir. Si l'entreprise ne peut pas montrer environ 19 minutes
récupérables par personne et par jour dans ce périmètre, elle doit réduire le
scope, tester une PWA/no-code ou reporter l'application.

## 7. Comparaison et position professionnelle

```text
Options réellement comparables : PWA/web, no-code, cross-platform et deux
bases natives, sur le même processus technicien et le même horizon.
Périmètre et horizon communs : 20 techniciens, offline/photo/API/admin/export,
tests, publication, support et 12/36/60 mois.
Option la moins chère à court terme : no-code dans la simulation, puis PWA si
les fonctions téléphone et le hors-ligne restent légères.
Option la moins risquée à long terme : celle dont l'équipe maîtrise le dépôt,
les comptes, les données, les sauvegardes et les modules ; ce n'est pas une
technologie universelle.
Option qui demande le moins de temps interne : une solution dont le périmètre,
les accès et le support sont contractualisés, quelle que soit la stack.
Position Hagnéré Code pour le cas fréquent : ne pas commencer par une app
publique. Mesurer le processus, tester une PWA ou un pilote ciblé, puis choisir
le cross-platform si l'usage répété et les fonctions du téléphone le justifient.
Faits qui la fondent : le guide lui-même constate que l'usage occasionnel ne
justifie pas toujours une installation ; le TCO et le seuil de valeur sont les
variables décisives.
Cas où l'option opposée gagne : natif si AR, Bluetooth/NFC, performance,
accessibilité spécifique ou capteurs imposent un contrôle OS ; PWA si l'app est
principalement consultation/formulaire ; no-code si le périmètre est stable et
la dépendance de plateforme acceptable.
Signal de révision : mesure réelle d'usage, taux de retour hors ligne, nombre
de conflits, appareils ciblés, intégration non disponible ou gain récupérable
inférieur au seuil inverse.
Ce que nous déconseillons même si nous pourrions le vendre : deux apps natives
complètes avant d'avoir validé la tâche centrale et la rétention ; une app
publique dont le seul objectif est « être présent sur les stores ».
```

## 8. Objections et cas limites

| Objection loyale | Réponse prouvée | Ce qui reste incertain | Conséquence |
| ---------------- | --------------- | ---------------------- | ----------- |
| « Le devis concurrent est deux fois moins cher. » | Le total n'a de sens qu'avec conception, backend, QA, publication, support, propriété et données comparables. | Les lignes et exclusions du devis réel ne sont pas connues. | Demander un tableau de périmètre égal avant de choisir. |
| « Une base commune est forcément 40 % moins chère. » | Les pages commerciales avancent des pourcentages variables ; le partage de code ne supprime pas tests, modules natifs et stores. | Le gain dépend du produit et de l'équipe. | Refuser tout pourcentage universel ; chiffrer le périmètre. |
| « Nous économiserons tout le temps gagné. » | Le temps valorisé doit être réaffectable ou lié à un coût évité ; sinon c'est une capacité libérée, pas une économie de trésorerie. | La direction n'a pas mesuré la réaffectation. | Mesurer le processus avant le build et marquer l'hypothèse. |
| « Les frais de stores ne sont que 124 dollars. » | 99 USD Apple/an et 25 USD Google une fois sont les frais de compte ; les commissions, tests, vérifications et travaux de soumission sont autres. | Le modèle de vente et le compte (organisation/personnel) changent les règles. | Séparer frais fixes, variables et travail de publication. |
| « Nous pouvons mettre le compte au nom du prestataire. » | L'entreprise doit garder propriété, récupération, facturation, dépôt et données. | Le contrat et le processus de transfert ne sont pas fournis. | Créer les comptes avant le build et tester les accès administrateurs. |
| « Une maquette prouvera le marché. » | Une maquette teste la compréhension, pas l'usage, la rétention ou la synchronisation hors ligne. | Le canal de pilote n'est pas défini. | Ajouter un pilote avec indicateur et critère d'arrêt. |
| « Notre app est pour la santé/finance/mineurs. » | CNIL et règles de stores imposent une analyse spécifique ; la page appelle déjà un spécialiste mais trop tardivement. | Données, rôles, hébergeur, consentements et audits ne sont pas chiffrés. | Ajouter conformité, sécurité et revue spécialisée au périmètre initial. |

## 9. Plan de réécriture

| Ordre | Section proposée | Question résolue | Preuve, scénario ou outil | Décision produite | À conserver / créer / couper |
| ----: | ---------------- | ---------------- | ------------------------- | ----------------- | ---------------------------- |
| 1 | « Si vous cherchez un prix, voici le budget et ce qu'il signifie » | Combien réserver et pour quelle app ? | Lead avec 3 paliers internes, inclus/exclus et mention estimation | Le lecteur sait s'il est dans le bon ordre de grandeur | Conserver le ton ; créer méthode et couper la répétition de la fourchette |
| 2 | « Avant de développer : l'installation est-elle justifiée ? » | App, PWA, espace web ou report ? | Arbre comportement fréquence/fonctions/offline | Mauvais fit visible avant le devis | Conserver l'InfoBox technicien ; la rendre actionnable |
| 3 | « Un périmètre unique, quatre façons de le construire » | Quelle option gagne pour mon cas ? | Table PWA/no-code/cross-platform/natif sur même scope | Option court terme, long terme et conditions | Créer comparaison TCO 12/36/60 |
| 4 | « Ce qui fait passer le devis de 20 à 50 k€ » | Quels facteurs paie-t-on vraiment ? | Matrice utilisateurs, rôles, offline, API, paiement, QA et store | Priorités à garder ou reporter | Conserver la table des fonctions ; ajouter unités/effort |
| 5 | « Le budget qui reste après la mise en ligne » | Quel coût annuel ? | Exploitation, support, monitoring, stores, services à l'usage, sortie | Enveloppe 1/3/5 ans | Transformer la table qualitative en TCO |
| 6 | « Un exemple de rentabilité — et le cas où il faut renoncer » | Le projet se rembourse-t-il ? | Technicien simple/central/exigeant + contrôle inverse | Construire, réduire ou reporter | Créer calcul réutilisable |
| 7 | « Stores, comptes et données : les coûts administratifs » | Qui paie et qui possède ? | Apple/Google officiels, D-U-N-S, compte personnel, tests, CNIL, permissions | Préparer les comptes et la conformité | Corriger le lien CNIL et dater les règles |
| 8 | « Comparer deux devis sans se faire piéger » | Comment lire une offre ? | Grille de périmètre, critères d'acceptation et exclusions | Devis comparable ou rejeté | Conserver FormulaBox 38 k€, ajouter checklist |
| 9 | « Planning et porte de sortie » | Quand arrêter ou changer ? | Jalons, accès, bêta, review, migration, export, rollback | Planifier avec marge et sortie | Créer critères d'acceptation/rollback |
| 10 | Conclusion + CTA | Quelle prochaine action ? | Feuille TCO autonome puis qualification Hagnéré | Agir seul ou demander un cadrage | Créer worksheet téléchargeable/copiable ; CTA après résultat |

### Contrat des 150 premiers mots

Les 150 premiers mots doivent conserver une réponse directe, mais ajouter :

- le lecteur (« vous avez une idée pour vos clients ou vos équipes ») ;
- la distinction prototype / produit exploitable / app métier ;
- le fait que 20–50 k€ est une simulation Hagnéré, pas un baromètre ;
- au moins un facteur de bascule (offline, API, paiement, rôles, store) ;
- la promesse d'un calcul 12/36/60 et d'un cas où il vaut mieux ne pas
  développer.

### Éléments à supprimer ou déplacer

- répétitions de la fourchette 20–50 k€ dans hero, lead, FAQ et premier tableau ;
- phrases génériques non suivies d'une conséquence (« une application continue
  de coûter ») ;
- « vérifiez au moment du projet » sans indiquer quoi vérifier et pourquoi ;
- pourcentages de réduction technologique repris sans périmètre égal.

### Éléments à conserver

- l'avertissement qu'une application peut être le mauvais investissement ;
- l'exemple fictif explicitement étiqueté ;
- la décomposition de devis 38 k€ après recalage des hypothèses ;
- la propriété des comptes et des accès ;
- le rappel de consulter un spécialiste pour santé, finance, mineurs et
  géolocalisation ;
- le CTA non agressif, après la réponse.

## 10. Contre-audit après correction

Le fichier source n'a pas été corrigé dans cette passe. Les lignes ci-dessous
sont donc des exigences de revalidation, pas des corrections appliquées.

| Problème | Priorité | Correction à appliquer | Revalidation indépendante |
| -------- | -------- | ----------------------- | ------------------------- |
| P1-01 — lien CNIL 404 | P1 | Remplacer par l'URL CNIL actuelle, puis contrôler HTTP 200 et contenu | Ouvrir le lien et vérifier qu'il décrit bien les recommandations mobiles |
| P1-02 — fourchettes internes non reproductibles | P1 | Ajouter effort, rôles, inclusions, exclusions, devise, HT/TTC et date de l'estimation | Refaire au moins un total depuis les hypothèses et vérifier qu'il ne ressemble pas à une moyenne de marché |
| P1-03 — comparaison non égalisée | P1 | Ajouter le scénario commun PWA/no-code/cross-platform/natif | Vérifier que chaque option couvre exactement utilisateurs, offline, API, admin, QA et sortie |
| P1-04 — TCO absent | P1 | Afficher 12/36/60 mois, exploitation, support, services à l'usage et sortie | Recalculer chaque colonne et contrôler l'absence de double comptage |
| P1-05 — sensibilité/payback absents | P1 | Ajouter simple/central/exigeant et contrôle inverse | Refaire les formules, unités et cas négatif |
| P1-06 — comptes/stores incomplets | P1 | Ajouter D-U-N-S, vérification, tests compte personnel, frais variables et date de règle | Ouvrir Apple/Google et comparer chaque phrase au périmètre du compte |
| P1-07 — coûts cachés non chiffrés | P1 | Budgeter devices, QA, analytics, privacy, store review, support, MDM, migration et sortie | Contrôler que chaque poste a une unité ou est explicitement une inconnue |
| P1-08 — exemple métier sans mesure | P1 | Ajouter utilisateurs, fréquence, minutes, coût chargé, erreurs et réaffectation | Recalculer le gain et demander quelle preuve ferait renoncer |
| P1-09 — benchmark absent de la page | P1 | Utiliser les concurrents pour les angles, pas pour des prix présentés comme faits | Vérifier une source FR et trois marchés étrangers, avec biais déclaré |
| P1-10 — fraîcheur/dateModified | P1 | Réactualiser le paragraphe stores/CNIL et la date seulement après changement substantiel | Refaire les liens et vérifier la date affichée/JSON-LD |
| P2-01 — aucun actif autonome | P2 | Ajouter feuille TCO copiable/téléchargeable ou calculateur réellement testé | Tester le téléchargement, les formules et l'absence de collecte obligatoire |
| P2-02 — tables longues peu scannables | P2 | Ajouter une synthèse décisionnelle avant les tableaux et limiter les cellules | QA 320/390/768 px avec lecture du verdict sans défilement horizontal |
| P2-03 — CTA sans résultat immédiat | P2 | Décrire exactement le livrable du cadrage et laisser le worksheet utilisable sans contact | Suivre le lien et vérifier la promesse de destination |

### Score après correction projeté

| Axe         | Note /10 | Condition pour atteindre la cible | Manque résiduel |
| ----------- | -------: | --------------------------------- | --------------- |
| Intention   | 9 | Réponse et choix visibles immédiatement | Actualiser les hypothèses |
| Décision    | 9 | TCO, seuil inverse et cas de report | Données réelles client à recueillir |
| Pédagogie   | 9 | Glossaire court + scénario avant/après | Relecture humaine dirigeant |
| Profondeur  | 9 | Coûts cachés, stores, sortie et support quantifiés | Cas client vérifiable non disponible |
| Preuve      | 9 | Liens officiels actuels + hypothèses auditables | Les fourchettes internes restent des simulations |
| Comparaison | 9 | Même périmètre 4 options sur 12/36/60 | Revalidation des hypothèses de marché |
| Originalité | 9 | Feuille TCO et contrôle inverse publiés | Mesures agrégées de projets réels à construire |
| Style       | 9 | Phrases courtes, décisions et cas de renoncement | Passe anti-IA indépendante |
| Conversion  | 9 | Worksheet autonome puis CTA conditionnel | Mesurer conversion après publication |
| SEO/produit | 9 | Date et sources réactualisées, QA et indexation séparées | Search Console et production restent à prouver |

Total projeté : **90/100**, sous réserve de la correction réelle, de la
contre-vérification et de la QA P4. Le simple fait d'ajouter des tableaux ne
permet pas d'atteindre ce score.

## 11. Preuves techniques et visuelles

```text
Manifeste :
  page.tsx              f52ca4797a84a1179554240e068f50ad2ae3d0455ac451639bc03581c2e9c5c6
  opengraph-image.tsx   7aaf2e7d5950bbe0650f0ff56652751a6822bd2a355c8cbae66c6d8bb84bd693
  src/lib/guides.ts     8663e6e84352121ec854393e049492a1c2b72f242166141e5d31e0911b43cb09

Calculs refaits :
  3 000 + 4 000 + 14 000 + 8 000 + 4 000 + 5 000 = 38 000 € (exemple actuel)
  TCO simulation : PWA 25/39/53 k€ ; no-code 24/44/64 k€ ;
  cross-platform 50/74/98 k€ ; natif double 76/108/140 k€ pour 12/36/60 mois.
  Sensibilités et contrôle inverse recalculés dans la section 6.

Sources rouvertes :
  Apple membership, Google Play registration/distribution/service fees,
  Apple App Review Guidelines, CNIL recommendations mobiles, benchmark FR/US/
  UK/AU/DACH listés en section 3.

Liens vérifiés :
  200 local page, robots.txt et sitemap.xml ; 200 Apple ; 200 Google ;
  404 CNIL URL actuellement codée ; URL CNIL corrigée identifiée mais non
  appliquée dans le code.

Rendu 320 / 360 / 390 / 430 / 640 / 768 / 1024 / 1280 / 1440 / 1600 :
  contrôlé sur http://localhost:3010/guides/combien-coute-une-application-mobile.
  Aucun débordement document/table/pre détecté, H1 unique et CTA présent.
  Contrôle technique via Chrome/CDP, pas une validation par un dirigeant réel.

Image sociale :
  source OG présente, 1200 × 630 px, texte cohérent avec H1 et slug ;
  rendu binaire de production non vérifié dans ce rapport.

Statut maximal prouvé :
  page locale rendue, noindex/nofollow local, 2 blocs JSON-LD (Article +
  BreadcrumbList), canonical https://hagnere-code.ai/guides/combien-coute-une-application-mobile,
  1 H1, 13 H2, 2 442 mots visibles dans main, logs navigateur error/warn vides,
  ESLint ciblé et git diff --check verts.

Réserve publication / indexation :
  local ≠ production ≠ publié ≠ exploré ≠ indexé. Aucune vérification de
  déploiement, Search Console ou classement n'est incluse ; le registre et les
  manifestes ne doivent pas déclarer P4, publication ou indexation sur ce seul
  audit.
```

## 12. État des portes P1–P4

| Porte | État au 24/07/2026 | Motif |
| --- | --- | --- |
| P1 — recherche et cadrage | **présente mais non validée** | benchmark et sources sont dans le rapport, mais le dossier canonique, le cas commun et les hypothèses reproductibles restent à intégrer |
| P2 — rédaction et intégration | **existante mais non validée** | page source inchangée, lien CNIL cassé et dix P1 ouverts |
| P3 — contre-audit indépendant | **rapport présent, porte non validée** | le présent rapport constate les défauts ; aucun snapshot corrigé n'existe à recontrôler |
| P4 — plume humaine et QA | **rejetée / non validée** | score 74, corrections absentes et aucune lecture dirigeant du snapshot final |
| Publication/indexation | **non prouvées** | contrôle local uniquement ; aucun déploiement, sitemap traité, Search Console ou classement vérifié |

Après P2, un autre agent devra rouvrir les sources, refaire les calculs et
retester les liens. La P4 cible au moins 90/100, aucun axe sous 8 et les axes
critiques à 9 ou 10.
