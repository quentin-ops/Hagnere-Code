# Audit humain et éditorial de 6 guides — 19 juillet 2026

## Résumé exécutif

Les six guides audités partaient d'une base solide : réponses rapides,
lexiques, tableaux, exemples, sources, FAQ, maillage et CTA contextualisés.
Leur principal défaut n'était **pas un manque de longueur**. Il se situait
entre l'information et la décision : certains passages expliquaient très
bien un sujet sans toujours permettre au dirigeant de choisir, de renoncer,
de répartir les responsabilités ou d'exiger une preuve observable.

Les corrections ont donc porté sur cinq axes :

1. distinguer les faits, les exemples fictifs, les estimations et l'offre
   Hagnéré Code ;
2. rendre les options comparables sur le coût total, le risque, la
   trésorerie, l'adoption et la réversibilité ;
3. nommer les cas où il ne faut pas acheter de sur-mesure ;
4. transformer les conseils en décisions, livrables, responsables et
   critères d'acceptation ;
5. rendre les CTA spécifiques à la tâche que le lecteur cherche à
   accomplir.

La première grille qualitative passe en moyenne de **8,3/10 à 9,3/10**.
Après corrections et contre-audit indépendant avec la scorecard de la
charte, les six pages obtiennent chacune **19/20** : aucun axe à zéro, et
les axes bloquants `Intention`, `Décision`, `Pédagogie` et `Preuve` à 2/2.
Ces scores mesurent la préparation éditoriale et produit, pas la probabilité
de classement Google. Ils ne remplacent ni Search Console, ni les liens
entrants, ni l'autorité de marque, ni une mesure réelle des conversions.

---

## 1. Périmètre

L'échantillon couvre six intentions et métiers différents :

| Guide | Thème | Décision principale du lecteur |
|---|---|---|
| `combien-coute-un-saas` | lancement de produit SaaS | définir la bonne étape et le budget complet |
| `prix-logiciel-sur-mesure` | outil interne / application métier | acheter, automatiser, rester sur Excel ou développer |
| `shopify-ou-sur-mesure` | e-commerce | rester sur Shopify, passer à Plus ou construire |
| `react-native-ou-flutter` | application mobile | choisir une technologie soutenable par l'équipe |
| `refonte-sans-perdre-son-seo` | migration et risque SEO | autoriser, reporter et contrôler une bascule |
| `cahier-des-charges-application-mobile` | cadrage de projet | produire un document qui rende les devis comparables |

L'audit a examiné pour chaque page :

- ouverture, promesse, lexique et sommaire ;
- progression pédagogique et charge cognitive ;
- profondeur des comparaisons et des conséquences métier ;
- exemples, calculs, tableaux et provenance annoncée ;
- objections, mauvais fits et alternatives plus simples ;
- sources et qualification des affirmations ;
- CTA intermédiaire, conclusion et prochaine action ;
- metadata, données structurées, FAQ et maillage ;
- cohérence avec la cible dirigeant/indépendant non technique.

Limite assumée : il s'agit d'un audit éditorial approfondi, accompagné de
contre-vérifications ciblées. Ce n'est pas une nouvelle vérification
exhaustive de chaque tarif, benchmark, règle de store ou affirmation
juridique présente dans les six textes.

---

## 2. Ce qui fonctionnait déjà

### Pédagogie

- La plupart des termes techniques sont définis ou traduits.
- Les analogies, tableaux et exemples réduisent bien l'abstraction.
- Les réponses courtes et tableaux d'ouverture servent le lecteur pressé.
- Les FAQ couvrent de vraies questions de décision.

### Profondeur

- Les guides de prix abordent déjà exploitation, maintenance et TCO.
- Shopify traite le coût de sortie, rare dans les comparatifs.
- La refonte SEO suit un calendrier avant / jour J / après.
- Le cahier des charges mobile propose un exemple rempli.
- React Native / Flutter déclare le biais React de l'agence.

### Conversion

- Les CTA arrivent après une démonstration, pas dès l'ouverture.
- Ils expliquent le délai de réponse et l'absence d'engagement.
- Plusieurs guides recommandent déjà une plateforme ou un freelance quand
  cette option est plus rationnelle.

### Socle SEO et produit

- Titres, H1, canonical, byline, date, OG et données structurées existent.
- Les FAQ sont visibles dans le DOM ; le schéma `FAQPage` retiré par Google a
  depuis été supprimé du JSON-LD.
- Les guides possèdent des liens contextuels vers services et contenus
  frères.

---

## 3. Manques transversaux détectés

### 3.1 La complétude était confondue avec un moule

Dans l'échantillon, chaque guide possède 13 ou 14 H2, 12 ou 13 questions
de FAQ, un lexique, un CTA médian et une section finale en cinq étapes.
Cette régularité facilite la production, mais elle peut donner une voix
industrielle et ajouter des sections parce que le format les attend.

Correction : la nouvelle charte supprime les quotas de mots, H2 et FAQ.
Elle impose à la place une décision, une preuve, une alternative, une
prochaine action et une scorecard de sortie.

### 3.2 Des scénarios pédagogiques ressemblaient à des preuves clients

Granita, Batilog, Élodie, Fleurs d'Aix et Transports Bréban pouvaient être
lus comme des entreprises ou clients réels. Plusieurs devis étaient
présentés comme « réels » ou « acceptés » sans artefact vérifiable dans le
repository.

Correction : tous sont désormais étiquetés comme fictifs ou illustratifs.
Les calculs restent utiles, mais ne servent plus de faux signal de preuve.

### 3.3 Les guides ne nommaient pas assez le non-achat

Le lecteur pouvait comprendre les options sans toujours disposer d'une
règle claire pour ne pas développer, rester sur une plateforme, faire une
simple automatisation ou reporter le projet faute de responsable interne.

Correction : ajout de mauvais fits explicites, d'alternatives plus simples
et de conditions mesurables avant d'engager du sur-mesure.

### 3.4 Le coût ne suffisait pas à rendre les options comparables

Les meilleurs tableaux couvraient déjà le prix, mais moins
systématiquement la trésorerie, l'option d'abandon, le changement d'équipe,
l'adoption, les responsabilités, les critères d'acceptation et les coûts
communs aux deux options.

Correction : ajout de matrices décisionnelles adaptées à chaque thème.

### 3.5 Des formulations dépassaient parfois la preuve disponible

Exemples : causalité entre assistants IA et remise finale, propriété
« totale » du code malgré les licences tierces, rôle RGPD unique, gain
automatique de référencement ou de conversion, projet PME présenté comme
sans risque, infrastructure « presque gratuite ».

Correction : périmètres resserrés, hypothèses annoncées, différence entre
estimation interne et benchmark, liens vers des sources officielles pour
les points sensibles.

### 3.6 Le champ lexical était riche en technique, moins en conduite du projet

Coût, stack et fonctionnalités étaient très présents. Les mots qui aident
un dirigeant à piloter — responsable, preuve, adoption, exclusion,
validation, réversibilité, option d'abandon, charge interne — l'étaient de
façon plus irrégulière.

Correction : ces familles de vocabulaire deviennent obligatoires dans la
carte lexicale de la charte lorsqu'elles sont pertinentes.

### 3.7 La conversion n'était pas mesurable par cet audit seul

Un texte peut être prêt à convertir sans que l'on sache s'il convertit.
La présence d'un CTA, même bien écrit, ne fournit aucune preuve de clic,
de démarrage ou d'envoi du formulaire.

Correction éditoriale : boutons adaptés à l'intention de chaque guide.
Correction produit restant à planifier : suivre au minimum clic CTA,
démarrage du parcours et envoi, segmentés par URL d'origine.

---

## 4. Résultats guide par guide

Les notes ci-dessous sont les moyennes de quatre axes : pédagogie,
profondeur décisionnelle, crédibilité/preuves et conversion sobre. Elles
ne sont ni une note Google ni une prévision de chiffre d'affaires.

| Guide | Avant | Après | Correction qui change le plus la décision |
|---|---:|---:|---|
| Coût d'un SaaS | 7,9 | 9,2 | choix explicite entre outil existant, POC, no-code, MVP, agence ou équipe interne |
| Prix logiciel sur mesure | 8,1 | 9,3 | adoption, comparabilité des devis, cas où le sur-mesure est déconseillé |
| Shopify ou sur-mesure | 8,4 | 9,3 | trésorerie, incertitude et option d'abandon ajoutées au TCO |
| React Native ou Flutter | 8,1 | 9,3 | hors-ligne, matériel, maintenance et changement d'équipe deviennent des critères testables |
| Refonte sans perdre son SEO | 8,7 | 9,5 | décision feu vert/rouge, responsabilités et preuves de bascule |
| Cahier des charges mobile | 8,6 | 9,5 | matrice client/prestataire, critères d'acceptation et dossier prêt à consulter |

La contre-lecture finale donne **19/20 aux six guides**. Le point non maximal
commun est le style : les pages restent longues et reconnaissables comme une
collection structurée. Ce n'est plus un blocage, mais la prochaine vague
devra varier davantage le rythme et le plan au lieu de reproduire un moule.

### 4.1 Coût d'un SaaS

Manques initiaux : exemple présenté comme devis réel, validation réduite au
paiement en ligne, absence d'une décision « ne pas développer », choix du
type d'équipe incomplet, différence 1 300/1 500 € non expliquée, rôle RGPD
trop général et part de la construction dans l'année 1 trop absolue.

Améliorations : exemple illustratif, plusieurs formes de validation
commerciale, tableau des modes de réalisation, lecture des répartitions de
coût, dépendance no-code nuancée, rôles RGPD clarifiés, calcul année 1
réconcilié et résultats observables ajoutés à la méthode.

### 4.2 Prix d'un logiciel sur mesure

Manques initiaux : entreprise fictive non annoncée, « propriété du code »
trop simplifiée, bénéfice IA présenté comme benchmark, risques d'adoption
et disponibilité des utilisateurs sous-traités.

Améliorations : provenance explicite, chaîne de droits et licences tierces,
grille de comparaison des devis, mauvais fits du sur-mesure, responsabilité
interne, risques de reprise de données et sources juridiques directes.

### 4.3 Shopify ou sur-mesure

Manques initiaux : raisonnement surtout centré sur le coût, boutique
existante mieux traitée qu'un nouveau projet, applications propres à
Shopify et coûts communs parfois mélangés, inférences de valeur tirées des
parts de marché, exemple Granita ambigu.

Améliorations : décision par contrainte dominante, bénéfice métier à
démontrer avant le sur-mesure, coûts communs séparés, trésorerie et abandon
intégrés, Shopify maintenu comme choix durable quand les seuils métier ne
bloquent pas, factures qualifiées de reconstituées.

### 4.4 React Native ou Flutter

Manques initiaux : coût ramené surtout au TJM, hors-ligne et matériel trop
abstraits, partage de code Shopify mal interprété, reprise par une autre
équipe confondue avec changement de framework, gouvernance trop
catégorique, Batilog ambigu.

Améliorations : matrice de cycle de vie, protocole de prototype sur le
parcours critique, traitement de la synchronisation hors ligne, postes de
maintenance, deux niveaux de réversibilité, risque de gouvernance nuancé,
exemple déclaré fictif.

### 4.5 Refonte sans perdre son SEO

Manques initiaux : excellente chronologie, mais absence d'un vrai
responsable du feu vert, preuves de bascule insuffisamment structurées,
répartition client/prestataire et signaux contractuels incomplets,
anglicismes inutiles et scénario Élodie ambigu.

Améliorations : scénario nommé avant devis, checklist feu vert/rouge,
matrice responsabilité/livrable/preuve, signaux d'alerte, vocabulaire
français et personnage explicitement fictif.

### 4.6 Cahier des charges d'application mobile

Manques initiaux : modèle riche mais responsabilités encore narratives,
choix du mode de cadrage et du type mobile/PWA/web incomplet, critères de
réception et signaux d'une offre faible dispersés, simulation Fleurs d'Aix
insuffisamment qualifiée.

Améliorations : matrices client/prestataire/validation, modes de rédaction,
comparatif mobile/PWA/SaaS, signaux d'alerte, checklist finale et simulation
explicitement pédagogique.

---

## 5. Changements apportés au standard éditorial

La [charte qualité](charte-qualite-guides.md) a été refondue autour d'une
logique people-first :

- brief lecteur et décision avant le mot-clé ;
- quatre moments du parcours d'achat ;
- pipeline avec portes de sortie ;
- fiche de preuves avec périmètre, confiance et fraîcheur ;
- [registre de preuves du lot](research/audit-six-guides-2026-07-19.md),
  séparant sources officielles, études limitées, simulations et offre ;
- architectures distinctes pour prix, comparatif, méthode, diagnostic et
  conformité ;
- pédagogie, champ lexical métier et lecture à deux vitesses ;
- principe de la solution la moins complexe qui satisfait le besoin ;
- distinction stricte entre fait, estimation, exemple et offre ;
- CTA unique, spécifique à l'intention, répété au maximum deux fois ;
- aucun quota de mots, H2, FAQ ou liens ;
- données structurées exactes, sans `wordCount` approximatif ;
- scorecard de publication sur 20, seuil 17, aucune note à zéro ;
- vérification technique, navigateur et production.

La règle commerciale la plus importante a changé : le sur-mesure n'est
plus le verdict éditorial par défaut. Il doit gagner sur des critères
observables ; sinon le guide recommande la plateforme, l'abonnement,
l'automatisation ou le report.

---

## 6. Ce que cela change — et ne change pas — pour Google

Les corrections renforcent les qualités que Google demande aux créateurs
de s'auto-évaluer : contenu original, complet, fiable, utile à une audience
réelle, expertise démontrée, lecteur capable d'atteindre son objectif sans
nouvelle recherche. Elles réduisent aussi les signes de contenu produit à
partir d'un moule pour les moteurs.

Elles ne garantissent pas une première place. Google précise :

- ne pas avoir de nombre de mots préféré ;
- privilégier un contenu people-first ;
- ne garantir ni indexation ni première position ;
- ne pas avoir de nombre magique de liens ;
- ne plus montrer régulièrement les résultats enrichis FAQ aux sites hors
  santé et gouvernement ;
- considérer la page experience comme un ensemble, pas comme un score
  Lighthouse isolé.

Références :

- [Creating helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) ;
- [SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide) ;
- [Link best practices](https://developers.google.com/search/docs/crawling-indexing/links-crawlable) ;
- [Google Search updates — retrait de FAQ](https://developers.google.com/search/updates) ;
- [Understanding page experience](https://developers.google.com/search/docs/appearance/page-experience).

---

## 7. Priorités restantes

1. **Auditer les autres guides pour les faux signaux de provenance.**
   Rechercher « devis réel », « cas réel », entreprises et résultats
   chiffrés ; exiger un artefact ou étiqueter l'illustration.
2. **Compléter les fiches de preuves avant chaque mise à jour.** Le registre
   du lot qualifie les sources et les simulations, mais plusieurs fourchettes
   reposent encore sur un recoupement sans dataset ni méthodologie publiable.
   Elles doivent rester des ordres de grandeur, jamais des médianes.
3. **Transformer les promesses de modèle en ressources.** Un modèle
   copiable existe dans le guide mobile ; une version DOCX/PDF testée serait
   une meilleure micro-conversion.
4. **Mesurer le parcours de conversion.** Par guide : clic CTA, démarrage,
   abandon et envoi du formulaire, sans confondre lecture et intention.
5. **Utiliser Search Console après indexation.** Les requêtes et pages
   réellement visibles doivent décider des enrichissements suivants ; une
   demande d'indexation n'est pas une preuve de visibilité.
6. **Renforcer les preuves de première main.** À terme, publier un devis
   authentique anonymisé, une méthodologie de prix ou un retour de projet
   autorisé apportera plus qu'une nouvelle section générique.

---

## 8. Décision de publication

Les six guides sont **validés éditorialement et techniquement en local**.
Vérifications passées le 19 juillet 2026 :

- `git diff --check` ;
- ESLint ciblé sur les six pages et le registre ;
- `npx tsc --noEmit` ;
- Vitest : 3 fichiers et 28 tests réussis ;
- build Next.js : 77 pages générées, six routes présentes ;
- navigateur réel sur les six URLs à 320, 360, 390, 430, 640, 767/769
  (encadrement du point 768 imposé par l'échelle du contrôleur), 1 024,
  1 280, 1 440 et 1 600 px ;
- aucun débordement racine ni élément de contenu rogné ; tableaux dans un
  conteneur horizontal, CTA et FAQ présents ;
- canonical, `dateModified`, Article et BreadcrumbList cohérents, absence de
  `FAQPage` obsolète et de `wordCount` approximatif ;
- aucune erreur runtime dans la console ; uniquement des avertissements de
  rechargement Fast Refresh provoqués par les modifications en direct.

Les FAQ utilisent les éléments natifs `<details>/<summary>` et leur ouverture
au clic a été vérifiée. L'émulation de touches du contrôleur n'a pas produit
d'événement dans cette session ; un passage manuel Tab/Entrée reste donc un
contrôle prudent à répéter sur l'URL de production.

Le lot n'a pas été déployé dans le cadre de cet audit. La publication réelle
reste conditionnée au déploiement demandé, puis au contrôle des URLs de
production et de leur indexation.

Le lot améliore fortement la capacité des pages à instruire et à convertir
le bon lecteur. Il ne résout volontairement pas l'autorité du domaine, la
notoriété locale, les liens entrants ni la preuve statistique de conversion.
