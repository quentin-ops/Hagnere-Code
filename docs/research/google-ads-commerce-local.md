# Dossier de travail — Google Ads pour un commerce local

> Dossier ouvert en passe 1 puis complété jusqu'à la validation P4. Il conserve
> la recherche historique et documente la rédaction, les contre-audits et les
> contrôles terminés le 24 juillet 2026. Il ne promet ni visites en magasin ni
> chiffre d'affaires.

Le workflow de référence est
[`docs/workflow-maitre-guides-4-passes.md`](../workflow-maitre-guides-4-passes.md).

## Journal des quatre passes

Propriétaire éditorial unique : équipe éditoriale Hagnéré Code, orchestration
du lot du 23 juillet 2026.

| Passe                        | État                     | Date             | Responsable                                   | Snapshot | Blocages |
| ---------------------------- | ------------------------ | ---------------- | --------------------------------------------- | -------- | -------- |
| 1. Recherche                 | Terminée — porte validée | 23 juillet 2026  | Agent recherche                               | Manifeste P1 | Aucun |
| 2. Rédaction et intégration  | Terminée — porte validée | 24 juillet 2026  | équipe éditoriale Hagnéré Code                | Manifeste P2 | Aucun |
| 3. Contre-audit indépendant  | Terminée — porte validée | 24 juillet 2026  | final_audit_marketing, anti_ia_final, seo_tech_final | Manifeste P3 | Aucun P0/P1 restant |
| 4. Plume humaine et contrôle | Terminée — porte validée | 24 juillet 2026  | orchestration éditoriale                      | Manifeste P4 | Aucun blocage éditorial |

### Manifeste du snapshot

| Fichier contrôlé | Passe | Remarque |
| ---------------- | ----- | -------- |
| `docs/research/manifests/google-ads-commerce-local-p1.sha256` | P1 | Manifeste existant ; historique de recherche conservé. |
| `docs/research/manifests/google-ads-commerce-local-p2.sha256` | P2 | Manifeste existant de rédaction et d'intégration. |
| `docs/research/manifests/google-ads-commerce-local-p3.sha256` | P3 | Manifeste existant après contre-audit et corrections. |
| `docs/research/manifests/google-ads-commerce-local-p4.sha256` | P4 | Manifeste final créé après les contrôles P4 ; son empreinte est intégrée au snapshot commun du lot. |

## 1. Fiche d'identité

```text
Slug : google-ads-commerce-local
Statut actuel : publiable — validation éditoriale déléguée
Requête principale, encore hypothétique avant recherche : google ads commerce local
Moment du parcours : explorer puis décider
Lecteur précis : gérant d'un magasin, restaurant, cabinet, atelier ou activité de proximité qui veut davantage d'appels, de réservations ou de clients sur place
Situation déclenchante : l'écran Google Ads affiche des clics ou des demandes d'itinéraire, tandis que le dirigeant regarde sa caisse, ses réservations et ses appels sans savoir ce que la publicité a réellement produit
Décision principale après lecture : lancer ou différer un test local autour d'un seul résultat observable, avec une zone, des informations d'établissement et une méthode de rapprochement réalistes
Niveau de connaissance au départ : connaît Google et sa fiche d'établissement, mais confond souvent clic, itinéraire, visite et vente
5 questions indispensables : quel résultat local viser ? quelle donnée est observée ou modélisée ? quelles informations d'établissement faut-il fiabiliser ? Search ou Performance Max est-il pertinent ? comment rapprocher publicité et activité réelle ?
3 objections ou craintes : « je vais payer des clics hors de ma zone » ; « les itinéraires ne prouvent pas une visite » ; « je n'ai pas de suivi sophistiqué en caisse »
Action utile sans contact commercial : remplir une fiche d'établissement publicitaire avec un objectif, une preuve, un responsable et une date de rapprochement
CTA possible : préparer un test local mesurable, vers /demarrer-un-projet
Hors périmètre : garantie de fréquentation, rayon universel, benchmark CPC/ROAS, tutoriel complet de Business Profile, campagne e-commerce nationale, conseil sur la conformité propre à chaque profession
Date de la recherche : 23 juillet 2026
Responsable de la synthèse : agent recherche du lot batch 4
```

## 1 bis. Contrat de langage humain

- Phrase exacte que le lecteur pourrait dire au téléphone : « Je veux faire
  venir plus de clients dans mon magasin. Google Ads peut-il mesurer autre
  chose que des clics ? »
- Réponse qu'il attend en une phrase : oui, Google peut rapporter des appels,
  réservations, demandes d'itinéraire et, pour certains comptes éligibles, des
  visites ou ventes en magasin ; mais ces signaux n'ont pas tous la même force
  et certains sont des estimations modélisées.
- Terme central expliqué sans jargon : un résultat **observé** est enregistré
  directement, comme une réservation ; un résultat **modélisé** est une
  estimation calculée à partir de données disponibles, pas la liste certaine
  de chaque visite.
- Mots ordinaires employés par le lecteur : magasin, cabinet, zone, horaires,
  appel, réservation, itinéraire, passage, ticket, vente, client régulier.
- Mots d'agence ou de consultant à éviter : drive-to-store, omnicanal,
  hyperlocal, ROPO, incrémentalité, store visit uplift, ROAS garanti.
- Projet des 150 premiers mots : ouvrir au moment de la fermeture : Google
  affiche 120 demandes d'itinéraire, mais le gérant ne peut pas compter 120
  ventes de plus. Donner immédiatement la différence entre signal, visite et
  vente, puis faire choisir un résultat local.
- Ce que le lecteur saura décider après ces 150 mots : s'il peut lancer un test
  mesurable maintenant ou s'il doit d'abord corriger ses horaires, sa fiche,
  sa page, son accueil téléphonique ou son suivi en caisse.
- H2 relus isolément : à valider en P2.
- Comparaison comprise à 390 px sans colonne masquée : à valider en P4 ;
  afficher « mesure / ce qu'elle prouve / ce qu'elle ne prouve pas » sous forme
  de cartes empilées.
- FAQ dont la première phrase répond : à valider en P2.
- CTA formulé comme résultat pour le prospect : « Préparer un test local relié
  aux appels, réservations ou ventes observables ».

### Test sujet, action, résultat

| Phrase initiale à surveiller | Qui agit ? | Action concrète | Résultat pour le lecteur | Formulation attendue |
| ---------------------------- | ---------- | --------------- | ------------------------ | -------------------- |
| « Activer une stratégie drive-to-store » | Le gérant | Il choisit un résultat et relie ses données d'établissement | Il sait ce que la campagne cherche à produire | « Choisissez d'abord entre appel, réservation, itinéraire ou vente observable. » |
| « Optimiser la présence locale » | Le gérant | Il vérifie adresse, horaires, téléphone et page | Le client reçoit une information exacte | « Corrigez vos horaires et votre numéro avant de payer leur affichage. » |
| « Mesurer l'impact omnicanal » | L'équipe | Elle rapproche les signaux Google du registre local | Elle distingue estimation et vente enregistrée | « Comparez chaque semaine les appels et réservations publicitaires aux résultats réellement notés. » |
| « Définir une zone pertinente » | Le dirigeant | Il utilise les zones réellement servies et les rapports disponibles | Il réduit les dépenses manifestement hors marché | « Partez des lieux d'où viennent vos clients, puis corrigez avec les données de campagne. » |
| « Améliorer la conversion locale » | La personne d'accueil | Elle répond, réserve et note l'issue | Un appel publicitaire peut devenir un résultat suivi | « Notez si l'appel a abouti à un rendez-vous, pas seulement s'il a sonné. » |

### Test de l'ouverture

- [x] la situation vécue apparaît avant la méthode de l'agence ;
- [x] les termes prévus sont définis au premier usage ;
- [x] aucun lexique de masse ne retarde la réponse ;
- [x] aucune métaphore ne devient un système à apprendre ;
- [x] la réponse reste honnête sans empiler les réserves.

## 2. Cannibalisation

| Page existante | Intention de cette page | Différence du nouveau guide | Lien ou arbitrage nécessaire |
| -------------- | ----------------------- | --------------------------- | ---------------------------- |
| `/guides/seo-local-pme` | Être trouvé localement sans acheter chaque clic, via site, fiche et réputation | Le nouveau guide décide d'acheter une visibilité locale et de mesurer un résultat hors ligne | Lier comme alternative/complément durable, sans réexpliquer tout le SEO local |
| `/guides/google-search-ads-ou-performance-max` | Choisir entre deux types de campagne | Le nouveau guide choisit d'abord le résultat magasin et la preuve disponible | Lier après le cadrage, pas transformer l'article en comparatif d'interface |
| `/guides/budget-google-ads-pme` | Construire un budget publicitaire soutenable | Le nouveau guide traite spécifiquement appels, réservations, itinéraires, visites et ventes locales | Lier pour le budget après définition du résultat |
| `/guides/google-ads-ou-meta-ads` | Choisir un canal selon demande et découverte | Le nouveau guide ne compare pas les plateformes ; il sécurise un test Google de proximité | Lien seulement si la demande n'est pas exprimée sur Google |
| `/guides/suivi-conversions-google-ads` | Installer une mesure générique du résultat métier | Le nouveau guide distingue les signaux locaux observés et modélisés | Lier pour l'implémentation détaillée |

**Justification d'une URL distincte :** le dirigeant d'un établissement doit
trancher une décision spécifique — payer pour un résultat de proximité dont la
preuve se trouve souvent hors du site — qu'aucune page existante ne traite de
bout en bout.

## 3. Demande et vocabulaire du lecteur

Questions observées le 23 juillet 2026 dans la SERP française et les pages
officielles :

- comment faire de la publicité Google pour un commerce local ?
- peut-on apparaître dans Google Maps ?
- comment cibler les clients autour d'un magasin ?
- faut-il une fiche Google Business Profile ?
- une demande d'itinéraire est-elle une visite ?
- comment mesurer les appels, réservations, visites et ventes en magasin ?
- Search ou Performance Max pour un établissement local ?

Recherche principale : `google ads commerce local`. Variantes :
`publicité google magasin`, `google ads commerce de proximité`, `google ads
maps`, `mesurer visites magasin google ads`, `campagne google ads restaurant`
et `google ads cabinet local`.

Limite : aucune donnée de volume propriétaire n'est disponible dans ce dossier.
La terminologie et les questions viennent d'une observation manuelle datée,
pas d'une estimation de trafic. Le mot « campagne locale » doit être manié avec
prudence : certaines pages concurrentes décrivent encore un ancien produit,
alors que la documentation Google actuelle présente la diffusion locale au
travers notamment de Search et Performance Max.

## 4. Carte concurrentielle

| Page | Réponse et angle | Preuves/artefacts | Bon point | Manque décisionnel | Conflit d'intérêt éventuel |
| ---- | ---------------- | ----------------- | --------- | ------------------ | -------------------------- |
| [Google Ads — À propos des annonces locales](https://support.google.com/google-ads/answer/3246303?hl=fr) | Formats, objectifs et prérequis officiels | Documentation produit | Source actuelle et précise | N'explique pas à un dirigeant comment choisir une preuve métier honnête | Éditeur du produit |
| [Resoneo — Campagnes Locales](https://www.resoneo.com/campagnes-locales-google-ads-digital-au-service-des-magasins/) | Ancien format de campagnes locales | Exemples marketing | Montre l'enjeu magasin | Risque d'obsolescence du format et peu de distinction entre signal et vente | Agence |
| [JVWEB — Local Inventory Ads](https://www.jvweb.fr/post/google-local-inventory-ads-comment-ca-marche) | Disponibilité produit locale | Explication d'un format retail | Pertinent pour le stock en magasin | Sujet plus étroit et orienté catalogue ; pas adapté à tous les commerces/services | Agence |
| [Iambeezy — Google Ads commerçants 2026](https://blog.iambeezy.app/fr/google-ads-commercants-locaux-france-2026-budget-parametrage-roi/) | Budget, paramétrage et performance | Benchmarks annoncés | Répond aux questions pratiques | Les chiffres universels ne sont pas transposables sans méthode/corpus vérifiable | Éditeur/prestataire |

**Angle mort commun :** les résultats de recherche mélangent formats actuels,
anciens noms de campagnes, clics d'itinéraire, visites estimées et ventes
réelles. Ils donnent rarement au commerçant une méthode sobre pour dire ce que
chaque donnée prouve.

**Valeur originale que le guide apportera :** partir de la caisse, des
réservations et des appels, remonter vers Google, rendre visible la différence
entre observé et modélisé, puis permettre une conclusion « ne lancez pas
encore ».

## 5. Fiche de preuves

| Affirmation utilisable | Source primaire, URL et passage utile | Nature | Périmètre | Date/consultation | Confiance | Emplacement du lien visible | Conséquence lecteur | Fraîcheur |
| ---------------------- | ------------------------------------- | ------ | --------- | ----------------- | --------- | --------------------------- | ------------------- | --------- |
| Les annonces locales peuvent soutenir des objectifs de visites/ventes en magasin, prospects/appels, réservations ou trafic de site | [Google Ads, À propos des annonces locales](https://support.google.com/google-ads/answer/3246303?hl=fr), objectifs présentés | Fait produit officiel | Établissements physiques ou zones desservies, selon configuration/éligibilité | 2026-07-23 | Élevée | Ouverture de la section « choisissez un résultat » | Le commerce doit choisir un résultat avant le format | Très volatile |
| La documentation actuelle associe la diffusion locale notamment à Performance Max et Search et décrit plusieurs surfaces Google/Maps, avec disponibilité variable | Même source officielle | Fait produit officiel | Formats, pays, surfaces et comptes compatibles | 2026-07-23 | Élevée | Note sur les formats actuels | Ne pas enseigner l'ancien produit « Campagnes locales » comme voie universelle | Très volatile |
| Les composants Lieu peuvent afficher adresse, carte, distance ou horaires et s'appuient sur les données d'établissement associées | [Google Ads, À propos des composants Lieu](https://support.google.com/google-ads/answer/2404182?hl=fr) | Fait produit officiel | Comptes et établissements associés | 2026-07-23 | Élevée | Checklist avant lancement | Une adresse ou des horaires faux deviennent une publicité payante fausse | Volatile |
| Certains comptes éligibles peuvent disposer de rapports sur les visites en magasin | Même source et [Google Ads, À propos des visites en magasin](https://support.google.com/google-ads/answer/6100636?hl=fr) | Fait produit officiel | Éligibilité et données suffisantes ; non disponible pour tous | 2026-07-23 | Élevée | Comparaison des preuves | Le lecteur ne doit pas construire son plan en supposant cet indicateur disponible | Très volatile |
| Les visites en magasin rapportées sont des estimations modélisées à partir de données actuelles et historiques, pas un registre nominatif exhaustif | [Google Ads, À propos des visites en magasin](https://support.google.com/google-ads/answer/6100636?hl=fr), fonctionnement de la modélisation | Fait produit officiel | Comptes éligibles | 2026-07-23 | Élevée | Encadré observé/modélisé | Ne pas confondre une estimation de visites avec les tickets de caisse | Très volatile |
| Les actions locales peuvent inclure notamment appels et itinéraires | [Google Ads, À propos des actions locales](https://support.google.com/google-ads/answer/9013908?hl=fr-419) | Fait produit officiel | Interactions/rapports compatibles | 2026-07-23 | Élevée | Carte « ce que mesure l'itinéraire » | Ces actions sont utiles mais ne prouvent pas à elles seules une vente | Volatile |
| Les composants publicitaires ont des conditions de diffusion et ne s'affichent pas systématiquement | [Google Ads, À propos des composants](https://support.google.com/google-ads/answer/7331111?hl=fr) | Limite produit officielle | Enchère, qualité, contexte et format | 2026-07-23 | Élevée | Limites avant lancement | Ne pas promettre que l'adresse ou le bouton apparaîtra à chaque impression | Volatile |
| Les composants Lieu doivent respecter les règles Google Ads | [Google Ads Policy, Exigences relatives aux composants Lieu](https://support.google.com/adspolicy/answer/144649?hl=fr) | Règle produit officielle | Établissements et contenus concernés | 2026-07-23 | Élevée | Checklist d'éligibilité | Vérifier les restrictions propres à l'activité avant campagne | Volatile/réglementaire |

### Contradictions et données à ne pas publier

- Ne pas utiliser les anciens articles sur les « campagnes Locales » comme
  preuve de l'offre Google actuelle ; relire les pages produit à chaque passe.
- Ne jamais écrire qu'une demande d'itinéraire est une visite ou qu'une visite
  modélisée est une vente.
- Ne publier aucun rayon idéal, CPC, budget, taux de visite, panier, ROAS ou
  délai d'apprentissage universel.
- Ne pas affirmer que Performance Max est toujours préférable pour un magasin
  ou que Search donne toujours plus de contrôle : la décision dépend du
  résultat, des données, de l'offre et du compte.
- Ne pas promettre l'accès aux visites/ventes en magasin ; elles dépendent de
  critères d'éligibilité et de données suffisantes.
- Ne pas conseiller de suivre individuellement des personnes ni d'enfreindre
  leurs choix de consentement. Les exigences sectorielles et de confidentialité
  doivent être vérifiées au cas par cas.

### Calculs reproductibles

Exemple fictif destiné à empêcher une surinterprétation :

```text
Rapport Google sur la période :
- demandes d'itinéraire : 120
- appels issus des annonces : 34

Registre interne observable :
- appels ayant abouti à une réservation : 11
- réservations honorées et rapprochées : 8
- ventes avec un identifiant/coupon propre au test : 10

Conclusion certaine :
120 demandes d'itinéraire ne prouvent pas 120 visites.
Le commerce dispose de 18 résultats observés distincts seulement si les
8 réservations honorées et les 10 ventes identifiées ne se recouvrent pas.
Si elles se recouvrent, il faut dédupliquer avant tout calcul.
```

- Nature du résultat : comptage observé et limite d'attribution, pas ROI.
- Horizon et périodicité : période du test et délai de retour compatible avec
  le commerce, indiqué dans l'exemple final.
- Postes inclus une seule fois : résultats dédupliqués.
- Postes exclus ou inconnus : passages non enregistrés, clients déjà acquis,
  ventes influencées par plusieurs canaux, retours/annulations, marge et coût
  complet.
- Si un calcul économique est ajouté en P2 : `(marge attribuable prudente -
  coût complet) / coût complet × 100`, avec média, gestion, création et remise
  éventuelle ; ne jamais utiliser le chiffre d'affaires brut à la place de la
  marge.

## 6. Empreinte éditoriale à ne pas reproduire

| Guide | Type d'ouverture | Progression | Dispositif récurrent | Type d'exemple | Place du CTA | Type de conclusion |
| ----- | ---------------- | ----------- | -------------------- | -------------- | ------------ | ------------------ |
| `seo-local-pme` | Besoin d'être trouvé | Fiche, site, avis, contenu | Checklist locale | Entreprise de proximité | Fin | Travail durable |
| `google-search-ads-ou-performance-max` | Duel de formats | Critères comparatifs | Tableau | Scénarios de campagne | Après comparaison | Choix conditionnel |
| `budget-google-ads-pme` | Question budgétaire | Économie puis test | Calcul de budget | PME fictive | Tardif | Budget soutenable |
| `google-ads-ou-meta-ads` | Choix de canal | Intention/découverte | Comparatif | Cas marketing | Fin | Canal selon demande |
| `suivi-conversions-google-ads` | Décalage Ads/métier | Chaîne de mesure | Registre | Plusieurs secteurs | Tardif | Réconcilier |

Choix du nouveau guide :

```text
Tension ou question motrice : à la fermeture, le tableau Ads annonce des itinéraires mais la caisse ne raconte pas la même histoire
Type d'ouverture retenu et pourquoi : scène à la caisse, car elle place le résultat métier avant le canal
Progression retenue et pourquoi : partir d'un résultat local, classer sa preuve, fiabiliser l'établissement, puis seulement choisir un test
Artefact signature : fiche d'établissement publicitaire copiable
Rythme/registre de voix : concret, local, sans vocabulaire de plateforme inutile
Place naturelle du CTA : après le verdict de mesurabilité
Forme de conclusion : « lancez un seul objectif » ou « corrigez d'abord le point cassé »
Au moins trois différences avec les guides voisins : ouverture caisse/fermeture ; axe observé-modélisé ; aucun comparatif central Search/PMax ; artefact par établissement ; conclusion binaire avant réglage
```

## 7. Plan annoté

| Section provisoire | Question résolue | Preuve ou exemple | Conséquence/décision | Format choisi |
| ------------------ | ---------------- | ----------------- | -------------------- | ------------- |
| Un itinéraire n'est pas encore un client en caisse | Que prouve le tableau Ads ? | Scène 120 itinéraires ; définition observé/modélisé | Choisir une preuve plutôt qu'un chiffre flatteur | Ouverture narrative |
| Choisissez le résultat local avant la campagne | Appel, réservation, itinéraire, visite ou vente ? | Documentation Google sur objectifs locaux | Retenir un résultat principal et un secondaire | Cartes empilées |
| Écrivez ce que chaque mesure prouve — et ne prouve pas | Peut-on comparer les signaux ? | Actions locales et visites modélisées | Ne pas attribuer une vente à un signal intermédiaire | Matrice mobile |
| Vérifiez l'établissement que vous allez payer pour afficher | Quelles bases corriger ? | Composants Lieu : adresse, horaires, distance | Différer si données ou accueil sont faux | Checklist terrain |
| Délimitez une zone à partir de vos vrais clients | Quel ciblage local choisir ? | Données internes et rapport ; aucun rayon universel | Construire puis corriger une hypothèse locale | Méthode en 4 étapes |
| Search ou Performance Max vient seulement maintenant | Quel format tester ? | Guide interne dédié + documentation officielle actuelle | Choisir selon contrôle, données et objectif | Deux scénarios, lien |
| Rapprochez les signaux chaque semaine sans outil complexe | Comment apprendre ? | Fiche copiable et déduplication | Continuer/corriger/couper | Artefact inline |
| Trois raisons de ne pas lancer cette semaine | Quand différer ? | Horaires faux, appels perdus, aucune preuve de vente | Réparer l'exploitation avant d'acheter | Encadré |
| Votre décision établissement par établissement | Quelle action demain ? | Fiche remplie | Lancer un résultat ou différer | Conclusion opérationnelle |
| Questions restantes | Que faire des cas particuliers ? | Sources + liens internes | Réponses résiduelles | FAQ |

FAQ prévue :

1. **Une demande d'itinéraire prouve-t-elle une visite ?** Non : elle prouve
   une action d'itinéraire, pas l'arrivée ni l'achat.
2. **Les visites en magasin sont-elles disponibles pour tous les comptes ?**
   Non : Google applique des critères d'éligibilité et utilise une modélisation.
3. **Faut-il une fiche d'établissement ?** Les composants Lieu s'appuient sur
   des informations d'établissement associées ; vérifiez la source, la
   propriété et l'exactitude avant de lancer.
4. **Faut-il choisir Search ou Performance Max ?** Cela dépend du résultat, des
   données et du contrôle nécessaire ; le guide dédié fera la comparaison.
5. **Une entreprise qui intervient chez ses clients peut-elle utiliser ces
   annonces ?** La documentation officielle inclut les activités avec zone
   desservie, sous réserve des formats, données et règles applicables.

## 8. Ressource et conversion

```text
Une ressource est-elle naturellement nécessaire ? Non en téléchargement à ce stade ; oui comme fiche copiable dans l'article
Problème qu'elle résout après la lecture : empêcher de lancer une campagne sans résultat local ni preuve associée
Résultat autonome produit : un plan de test par établissement
Format éditable et format de consultation : tableau HTML/Markdown copiable ; aucun téléchargement annoncé
Rubriques, champs ou matrices réellement livrés : établissement, horaires vérifiés, zone hypothétique, résultat principal, résultat secondaire, source observée/modélisée, responsable, cadence de rapprochement, coût complet, décision
Exemple rempli : commerce fictif, sans benchmark
Conclusion « ne pas investir » possible : oui, explicitement
Sources, hypothèses et limites visibles : oui, près de chaque notion produit
Données saisies et destination de ces données : aucune collecte par le site ; copie locale par le lecteur
Processus de génération reproductible : modèle statique et règles de remplissage visibles
Journal de QA (formats, pages, visuel, accessibilité, liens, compatibilité) : produit en P4 ; synthèse en section 12
Limites connues et niveau de revue humaine : ne mesure ni causalité parfaite ni clients non identifiés
Mode de maintenance : pages Google revues en P3/P4 ; contrôle trimestriel après publication
Test du fichier ou outil : copie et lecture mobile contrôlées en P4
Bon fit Hagnéré Code : établissement fiable, résultat observable, personne responsable et demande locale exprimée
Mauvais fit : horaires/adresse faux, appels non traités, aucune capacité disponible, vente certaine exigée à court terme
Action non commerciale : remplir la fiche et corriger la première donnée d'établissement fausse
CTA principal et résultat après clic : « Préparer un test local relié à un résultat observable » vers /demarrer-un-projet ; le clic mène au formulaire de cadrage
```

Maillage prévu : `/services/publicite-en-ligne`,
`/guides/google-search-ads-ou-performance-max`,
`/guides/suivi-conversions-google-ads`, `/guides/budget-google-ads-pme` et
`/guides/seo-local-pme`.

## 9. Rapports de sortie des quatre passes

### Rapport P1 — Recherche

```text
PASSE 1 TERMINÉE
Slug : google-ads-commerce-local
Lecteur et phrase réelle : gérant d'établissement ; « Google Ads peut-il mesurer autre chose que des clics ? »
Décision : lancer un test autour d'un résultat observable ou différer pour réparer les données/l'exploitation
Angle et forme dominante : partir de la caisse et distinguer observé de modélisé
Pages proches et différence : SEO local, choix de campagne, budget et suivi générique ne traitent pas ensemble la preuve du résultat hors ligne
Sources décisives : documentation Google sur annonces locales, composants Lieu, actions locales et visites en magasin
Incertitudes exclues : rayon, CPC, ROAS, fréquentation, éligibilité et format universels
Action autonome et CTA possible : fiche d'établissement copiable ; CTA de cadrage vers /demarrer-un-projet
Plan : résultat, force de preuve, établissement, zone, format, rapprochement, verdict
Snapshot : dossier P1 achevé ; hash/manifeste à consigner par l'orchestrateur après consolidation
```

### Rapport P2 — Rédaction et intégration

```text
P2 TERMINÉE LE 24 JUILLET 2026.
Article rédigé et intégré ; rapport détaillé et snapshot en section 12.
```

### Rapport P3 — Contre-audit indépendant

```text
P3 TERMINÉE LE 24 JUILLET 2026.
Contre-audits final_audit_marketing, anti_ia_final et seo_tech_final consignés en section 12.
```

### Rapport P4 — Plume humaine et contrôle final

```text
P4 TERMINÉE LE 24 JUILLET 2026.
Contrôles de rendu, tests, build et validation éditoriale consignés en section 12.
```

## 10. Historique P1 — revue préparatoire du 23 juillet 2026

> Cette scorecard et les cases ci-dessous photographient l’état avant rédaction.
> Elles ne décrivent plus le statut courant, établi en section 12.

### Scorecard préparatoire conservée

| Axe         | Note 0-2 | Preuve dans la page | Correction éventuelle |
| ----------- | -------: | ------------------- | --------------------- |
| Intention   | — | État P1 : texte à rédiger | Conserver l'intention commerce local payant |
| Décision    | — | État P1 : texte à rédiger | Verdict lancer/différer explicite |
| Pédagogie   | — | État P1 : texte à rédiger | Tester observé/modélisé avec un gérant |
| Profondeur  | — | État P1 : texte à rédiger | Relier signal, exploitation et économie |
| Preuve      | — | État P1 : texte à rédiger | Revérifier les pages produit |
| Comparaison | — | État P1 : texte à rédiger | Comparer la force des preuves sans tableau illisible |
| Originalité | — | État P1 : texte à rédiger | Garder la scène de caisse |
| Style       | — | État P1 : texte à rédiger | Éliminer le jargon publicitaire |
| Conversion  | — | État P1 : texte à rédiger | Un CTA tardif et concret |
| SEO/produit | — | État P1 : texte à rédiger | Vérifier maillage, metadata et rendu |

### Test lecteur non technique

```text
État historique P1 — test par une personne réelle : non
Profil du lecteur : gérant de commerce ou cabinet sans expertise Ads
Ce qu'il a compris comme réponse : à renseigner
Décision qu'il prendrait : à renseigner
Endroit où il a commencé à survoler : à renseigner
Passage crédible ou trop commercial : à renseigner
Termes ou passages bloquants : à renseigner
Questions encore sans réponse : à renseigner
Corrections appliquées : à renseigner en P4
```

### Contre-audit indépendant

```text
État historique P1 — auteur du contre-audit : non désigné à cette date
Indépendant de la rédaction : à garantir
Réserves sur les sources et calculs : à établir
Réserves sur la clarté et le plan : à établir
Réserves sur la conversion : à établir
Corrections ou justification : à renseigner
État au 23 juillet 2026 : P1 — recherche validée
```

### Vérifications historiques P1

- [ ] les 150 premiers mots passent le contrat de langage humain en P2 ;
- [ ] chaque H2 est compréhensible hors contexte en P2 ;
- [ ] cinq phrases abstraites sont testées sur le texte réel ;
- [x] aucun mur de lexique n'est prévu avant la réponse ;
- [ ] cartes testées à 390 px sans réponse masquée ;
- [ ] FAQ et CTA contrôlés sur la page ;
- [x] faits et fraîcheur vérifiés en P1 le 23 juillet 2026 ;
- [x] exemple fictif ne transforme aucun signal en vente ;
- [x] aucun taux, prix ou résultat de marché non sourcé n'est retenu ;
- [x] aucun cas réel identifiable ni incident dramatique n'est prévu ;
- [ ] aucune trace d'audit visible dans l'article ;
- [x] empreinte prévue distincte des guides voisins ;
- [x] aucune ressource téléchargeable inexistante n'est promise ;
- [ ] metadata, données structurées, registre, maillage et ancres cohérents ;
- [ ] TypeScript, ESLint, tests et build requis passés ;
- [ ] rendu observé aux largeurs prescrites ;
- [x] aucune publication ou indexation n'est déclarée en P1.

## 12. Validation finale P2, P3 et P4 — 24 juillet 2026

### Rapport P2 — Rédaction et intégration

- Article complet intégré sur `/guides/google-ads-commerce-local`, avec
  ouverture destinée au dirigeant, distinction des signaux locaux, sources
  Google actuelles, exemple fictif signalé, limites, FAQ, maillage et CTA
  unique.
- Métadonnées, données structurées `Article` et `BreadcrumbList`, image sociale
  dédiée et inscription au registre des guides contrôlées.
- Snapshot : `docs/research/manifests/google-ads-commerce-local-p2.sha256`.

### Rapport P3 — Contre-audits et corrections

- `final_audit_marketing` : contre-audit indépendant des sources, des signaux
  locaux, des calculs, de l'attribution et de la pédagogie dirigeant.
- `anti_ia_final` : passe de plume humaine, suppression des formulations
  mécaniques et vérification de la réponse dans l'ouverture.
- `seo_tech_final` : contrôle indépendant de l'intégration SEO et technique.
- La confusion entre clic sur « Appeler » et appel réellement reçu a été
  corrigée et le journal téléphonique est désormais la vérification. Aucun P0
  ni P1 ne reste.
- Snapshot :
  `docs/research/manifests/google-ads-commerce-local-p3.sha256`.

### Rapport P4 — Contrôle final du lot

- 55 tests ciblés, `check:seo` 228, suite générale 453, TypeScript, ESLint et
  `diff-check` : validés.
- Build : 159 pages générées.
- Audit d'artefact : 143 URLs, 126 liens, 143 pages, 101 temps de lecture et
  274 blocs JSON-LD contrôlés.
- Navigateur réel : 10 routes × 5 largeurs = 50 contrôles, thèmes clair et
  sombre compris.
- Images sociales : 10/10 au format 1200 × 630.
- Snapshot P4 :
  `docs/research/manifests/google-ads-commerce-local-p4.sha256`.

### Verdict

**Score final : 19/20.** Le fond, la pédagogie, les sources, la distinction des
signaux, la conversion et l'intégration sont validés. Un point reste
volontairement retiré car aucun lecteur humain réel indépendant n'a participé
au test final.

Statut actuel : publiable — validation éditoriale déléguée

Décision de publication : autorisée explicitement par le commanditaire

Test réalisé par une personne réelle : non

Réserve SEO : la page est techniquement indexable ; indexable ne signifie pas
indexée par Google, et aucune indexation effective ni position n'est promise.
