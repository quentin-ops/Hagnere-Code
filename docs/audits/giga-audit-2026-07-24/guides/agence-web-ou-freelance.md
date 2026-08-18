# Audit approfondi — `agence-web-ou-freelance`

Date : **24 juillet 2026**

Auditeur : orchestrateur du giga-audit, contrôle indépendant du snapshot
courant.

Périmètre : page, registre, image sociale, documentation disponible,
baromètres cités, sources officielles fiscales, juridiques et techniques,
concurrence française, américaine, britannique et australienne, pédagogie pour
dirigeant, comparaison à périmètre égal, coût total, conversion et portes
techniques observables.

Limite : ce rapport ne recommande aucun prestataire particulier, ne fixe aucun
prix de marché et ne constitue ni un conseil juridique/fiscal, ni une preuve de
build, de déploiement, d'indexation ou de classement.

## 1. Verdict exécutif

```text
Lecteur exact : dirigeant, commerçant ou indépendant qui a reçu un devis
                d'agence et un devis de freelance pour son site ou son outil.
Question réelle : qui couvrira le résultat attendu au meilleur coût complet,
                  avec des personnes compétentes, un calendrier crédible et une
                  reprise possible ?
Décision attendue : choisir une équipe nommée, demander des corrections aux
                    offres, préférer une solution plus simple ou reporter.
Réponse actuelle : le statut ne garantit rien ; comparer les personnes, le
                   travail inclus, la disponibilité, les accès et la sortie.
Défaut qui coûte le plus de valeur : la page montre que 9 360 € et 14 500 € ne
                  sont pas comparables, mais ne termine jamais l'égalisation et
                  laisse vide le TCO sur trois ans pourtant promis au lecteur.
Niveau actuel : B — très bonne pédagogie humaine, décision économique encore
                incomplète.
Priorité : haute.
Statut : audité — à compléter avant nouvelle P3/P4.
P0 : 0 ; P1 : 7 ; P2 : 9.
Score : 82/100.
```

Le guide possède une thèse forte et juste : **choisir une organisation sur son
travail réel, pas sur l'étiquette agence/freelance**. L'ouverture est l'une des
plus humaines du corpus. Le conflit d'intérêt est déclaré, les solutions
intermédiaires sont reconnues, la continuité n'est pas dramatisée et le CTA
accepte qu'un freelance ou une solution plus simple soit le meilleur choix.

La page s'arrête toutefois juste avant l'arbitrage promis. Le dirigeant sait
qu'il doit comparer à périmètre égal, mais n'obtient ni l'offre freelance
complétée avec design/rédaction/pilotage, ni l'offre agence décomposée, ni un
TCO chiffré, ni la variable qui renverse le verdict. Les baromètres renseignent
le TJM des indépendants, pas le prix d'un résultat équivalent livré par deux
organisations. L'asymétrie peut donc ancrer la décision sur le tarif d'une seule
catégorie.

### Score avant correction

| Axe | Note /10 | Preuve localisable | Manque décisif |
| --- | ---: | --- | --- |
| Intention | 9 | Deux devis et impossibilité de comparer `page.tsx:220-239` | Le livrable de comparaison final n'est pas annoncé. |
| Décision | 8 | Profils, alternatives et méthode `:293-337`, `:678-703`, `:791-856` | Aucun score, seuil éliminatoire ou TCO ne produit le choix. |
| Pédagogie | 9 | Définitions, personnes nommées, questions et exemple fictif | L'exemple montre l'écart de périmètre mais ne le résout pas. |
| Profondeur | 8 | Prix, capacité, continuité, sous-traitance, droits, clauses, sortie | Sécurité, données, accessibilité, exploitation et coût d'une défaillance restent peu opérationnels. |
| Preuve | 8 | Silkhom, TJMètre, Service Public, Légifrance et Google | Baromètres déclaratifs/commerciaux ; aucune preuve d'agence équivalente ni dossier P1. |
| Comparaison | 6 | Fiche commune et TCO vide `:436-478`, `:764-789` | Prix, personnes, fonctions, horizon et niveau de service jamais égalisés. |
| Originalité | 9 | Refus du faux duel, continuité par les actifs, voies intermédiaires | Il manque un exercice observable sur deux offres réellement normalisées. |
| Style | 9 | Ton direct, prudent, sans attaque de statut | Quelques listes se répètent sans faire progresser le cas fictif. |
| Conversion | 9 | Biais déclaré `:372-377`, CTA autorisant le mauvais fit `:878-888` | Service de relecture non borné par livrable, délai ou prix. |
| SEO/produit | 7 | Metadata, Article, BreadcrumbList, FAQ, OG, maillage et ressource | Aucun dossier P1/manifeste, aucune QA ou preuve publique du snapshot. |
| **Total** | **82/100** | **Somme contrôlée** | **Sous 90 ; comparaison à 6 et sept P1 ouverts.** |

## 2. Snapshot reproductible

| Élément | Empreinte ou observation au 24/07/2026 |
| --- | --- |
| Page | `src/app/guides/agence-web-ou-freelance/page.tsx` — 965 lignes, 4 144 mots source |
| SHA-256 page | `2b390a740c439d7423131a3e3eca4c4ca29e639178f0b8652342248755c21ccc` |
| Image sociale | `src/app/guides/agence-web-ou-freelance/opengraph-image.tsx` — 101 lignes |
| SHA-256 image | `a8679a8b1442ca5039250769e3e6ede29681430d47a2fff82bfe7e5b8300dc7c` |
| Registre | `src/lib/guides.ts`, SHA-256 `8663e6e84352121ec854393e049492a1c2b72f242166141e5d31e0911b43cb09` |
| Entrée registre | publié le 18/07/2026, modifié le 21/07/2026, lecture annoncée 13 min |
| Dossier de recherche | aucun `docs/research/agence-web-ou-freelance.md` trouvé |
| Manifestes P2/P3/P4 | aucun manifeste propre à ce slug trouvé |

Le comptage de mots porte sur le TSX, pas sur le texte visible. Il inclut FAQ,
données structurées, tableaux et syntaxe. Les treize minutes du registre ne
sont donc pas validées par ce chiffre. Le rapport fige le code source observé,
pas le HTML ni le comportement de la production.

## 3. Ce que le guide dit réellement

Le parcours actuel suit une bonne logique :

1. partir de deux devis qui ne couvrent pas le même travail ;
2. choisir les personnes et responsabilités plutôt que la marque ;
3. comprendre ce qu'un TJM mesure et ne mesure pas ;
4. remettre les deux offres sur la même base ;
5. vérifier calendrier et capacité ;
6. organiser la continuité par les actifs transmis ;
7. rendre la sous-traitance visible ;
8. sécuriser code, comptes, données et droits ;
9. écarter les offres opaques ;
10. examiner collectif, studio et amélioration ciblée ;
11. transformer les promesses en engagements ;
12. calculer le coût complet ;
13. choisir par profil ;
14. comparer en cinq étapes.

### Forces à conserver

- L'ouverture utilise des nombres concrets sans en faire des prix de marché.
- La différence agence/freelance est définie en deux phrases ordinaires.
- Le statut n'est jamais assimilé à la qualité, au délai ou à la continuité.
- Le tableau accepte qu'un freelance expérimenté prenne un projet de
  20 000 € et qu'un petit projet demande plusieurs métiers.
- Quatre questions obligent à nommer les personnes, les rôles, le décideur et
  le mainteneur.
- Le biais Hagnéré Code est déclaré avant l'analyse des prix.
- Les trois baromètres sont présentés comme des repères hétérogènes, pas comme
  un tarif obligatoire.
- L'exemple `18 × 520 = 9 360 €` est correctement calculé et clairement fictif.
- Micro-entreprise et franchise de TVA ne sont pas confondues.
- La continuité repose sur comptes, code, données et documentation plutôt que
  sur l'idée simpliste « une agence ne disparaît jamais ».
- La sous-traitance n'est pas condamnée ; elle doit être annoncée et contrôlée.
- Les droits, licences tierces, nom de domaine et hébergement sont séparés.
- Les alternatives collectif, studio senior, freelance avec partenaires,
  solution standard et amélioration ciblée sont présentes.
- Les engagements de performance sont bornés par page, appareil, période et
  mesure ; aucune garantie SEO n'est promise.
- Le CTA affirme que la relecture peut conclure en faveur d'un freelance ou
  d'une solution plus simple.

### Ce qui paraît complet mais ne l'est pas

- Le cas fictif chiffre seulement le développement indépendant. Le coût du
  design, des huit textes, du pilotage, des tests et des trois mois de
  corrections n'est jamais ajouté à l'offre freelance.
- Le forfait agence de 14 500 € n'est pas ventilé en temps ou livrables ; il est
  donc impossible de tester la différence de 5 140 €.
- La section « coût sur trois ans » ne contient que des points de suspension.
  Elle ne délivre pas la promesse de la carte du guide.
- Le temps du dirigeant est mentionné sans méthode : coût chargé, coût
  d'opportunité et temps non récupérable ne sont pas équivalents.
- Les baromètres portent sur des freelances IT ou des déclarations de TJM, pas
  spécifiquement sur la fabrication complète de sites TPE/PME. Ils ne prouvent
  ni le nombre de jours, ni un forfait agence, ni la qualité.
- Aucune proposition d'agence n'est benchmarkée avec une méthode symétrique.
  Ajouter une « moyenne agence » serait une mauvaise correction ; il faut
  décomposer un cas à travail égal.
- Les références à appeler ne sont pas accompagnées de questions vérifiables
  ni d'autorisation de consulter le site livré, les actifs transmis et le
  service après lancement.
- Le test de reprise demande ce que recevrait une autre équipe, mais ne fait ni
  build, ni restauration, ni export, ni changement de compte.
- Le tableau d'engagements n'inclut pas sécurité, données personnelles,
  accessibilité, sauvegarde, incident et dépendances alors que ces sujets
  peuvent être éliminatoires.
- L'utilisation de l'IA figure dans la FAQ sans source, protocole de
  confidentialité, revue ou traçabilité dans le corps.
- Le CTA « nous vous aidons » ne dit pas si le lecteur reçoit un tableau, sous
  quel délai, à quel prix et jusqu'où va l'examen contractuel.

## 4. Benchmark France et international

Requêtes observées le 24 juillet 2026 :

```text
FR : agence web ou freelance choisir devis coût projet entreprise
US : web development agency vs freelancer cost TCO business
UK : agency vs freelance web developer continuity contract
AU : web agency vs freelancer website project cost business
```

Les pages concurrentes servent à mesurer la couverture et la présentation. Les
fourchettes étrangères, témoignages et affirmations d'agence ne sont pas des
faits transposables à une PME française.

| Ressource et URL directe | Marché | Réponse ou outil utile | Limite | Adaptation supérieure |
| --- | --- | --- | --- | --- |
| [Spread — agence ou freelance](https://spread-communication.com/blog/agence-web-ou-freelance/) | France | Décision par coût, fiabilité et suivi | Source commerciale, critères génériques et prétention « sans biais » difficile à soutenir | Conserver la déclaration de biais actuelle et publier les preuves attendues. |
| [Silkhom — TJM 2025](https://www.silkhom.com/barometre-des-tjm-informatique-electronique-digital/) | France, recrutement | Plus de 20 000 profils 2019–2025, métiers et zones | Base d'un recruteur, profils IT, moyennes et période longue | Utiliser comme contexte de TJM uniquement, jamais comme prix de site. |
| [TJMètre 2026](https://tjmetre.fr/barometre) | France, baromètre | Médiane, quartiles, spécialités, villes et tailles d'échantillon | Déclaratif et agrégation de sources ; le volume global n'est pas celui de chaque spécialité | Afficher médiane, échantillon exact et portée ; ne pas déduire un budget projet. |
| [CT Solutions — agency vs freelancer](https://www.ctsolutions.dev/blog/web-development-agency-vs-freelancer) | États-Unis | Ajoute maintenance, corrections et coût de l'échec au prix initial | Fourchettes commerciales US sans méthode publique suffisante | Reprendre les postes du TCO, pas les dollars. |
| [Horsfall IT — agency vs freelance](https://www.horsfall-it.co.uk/agency-vs-freelance-web-developer) | Royaume-Uni | Compare sites et systèmes, continuité et trade-offs | Source commerciale et contexte contractuel britannique | Ajouter criticité et preuve de relève, sans supposer qu'une équipe garantit la continuité. |
| [Bedrock Team — freelance vs agency](https://bedrockteam.com/compare/freelance-developer-vs-agency-uk) | Royaume-Uni | Met la responsabilité, le calendrier et la criticité au centre | Montants £15k–£100k et « sweet spot » promotionnel non transposables | Conserver l'angle criticité ; remplacer le seuil monétaire par des exigences. |
| [Spark Interact — agency vs freelancer](https://www.sparkinteract.com.au/web/agency-vs-freelance-web-designers/) | Australie | Tableau portée, budget, relation, spécialités et support | Généralise parfois « solo » et « équipe » | Comparer les personnes nommées et la capacité réservée, comme le fait déjà Hagnéré. |
| [Studio Slate — freelancer, agency ou DIY](https://studioslate.com.au/blog/freelancer-vs-agency-vs-diy) | Australie | Ajoute DIY, plateforme et repères de coût | Benchmarks AUD et Clutch/SoloHourly non vérifiables comme prix français | Conserver l'option standard/faire moins ; ne pas importer les fourchettes. |
| [Website Cost Calculator AU](https://websitecostcalculator.au/2025/04/17/right-website-development-partner-in-australia/) | Australie | Calculateur de base pour comparer un projet | Outil commercial dont les hypothèses déterminent le résultat | Produire une grille locale transparente, pas un score opaque. |

### Saturation

Les pages françaises et internationales répètent les mêmes oppositions :
freelance moins cher/direct/flexible ; agence plus large/structurée/continue.
Ces adjectifs n'aident plus à choisir. Le gain d'information disponible est :

1. nommer les personnes réellement affectées ;
2. figer un résultat et des preuves identiques ;
3. égaliser tous les postes du devis ;
4. mesurer le temps client et la capacité hebdomadaire ;
5. calculer 12/36/60 mois ;
6. tester la reprise plutôt que promettre la continuité ;
7. publier le conflit d'intérêt et les cas où l'agence perd.

## 5. Matrice de gain d'information

| Question décisive | Réponse courante | Apport international | Couverture actuelle | Manque | Réponse supérieure à produire |
| --- | --- | --- | --- | --- | --- |
| Qui travaillera ? | « un freelance » ou « notre équipe » | Noms, spécialistes, relation | Quatre bonnes questions | Temps réservé et remplaçant non prouvés | Matrice nom/rôle/jours/semaine/remplaçant/preuve. |
| Que couvre le prix ? | Forfait ou TJM | Coûts cachés et révisions | Fiche par étape | Exemple non égalisé | Deux offres normalisées, inconnues visibles et devis amendés. |
| Quel est le coût total ? | Prix initial | Maintenance et coût de l'échec | Tableau vide 3 ans | Aucun calcul ni sensibilité | TCO 12/36/60, avec/sans sortie et temps interne. |
| Qui livre le plus vite ? | Agence = équipe | Capacité et délais | Quatre jalons | Aucun chemin critique ou disponibilité réservée | Planning avec dépendances, jours/semaine et scénario de retard. |
| La continuité est-elle réelle ? | Agence = relais, freelance = risque | Contrat et support | Actifs et contact de reprise | Aucun test de reprise | Build, export, restauration et intervention d'un tiers. |
| Comment comparer la qualité ? | Portfolio et références | Appels et avis | Deux références à appeler | Questions et preuves absentes | Vérifier objectif, périmètre, livrables, délai, accès, support et limites. |
| Quand une petite équipe gagne-t-elle ? | Projet simple | Relation directe | Profils présents | Aucun cas à périmètre égal | Cas simple, pluridisciplinaire et critique, avec raison du choix. |
| Que faire si les devis restent incomparables ? | Demander un autre devis | Atelier/cadrage | Atelier court présent | Livrable et prix non bornés | Mini-cahier des charges réutilisable et exclusions communes. |

## 6. Faits et fraîcheur

| Affirmation du guide | Verdict au 24/07/2026 | Source | Correction ou périmètre |
| --- | --- | --- | --- |
| Silkhom analyse plus de 20 000 freelances en France de 2019 à 2025 | Confirmée | [Silkhom](https://www.silkhom.com/barometre-des-tjm-informatique-electronique-digital/) | Base de recrutement, moyennes, métiers IT et trois zones ; pas une étude de devis web TPE. |
| TJMètre affiche 530 €/jour médian pour développeur et full-stack | Confirmée au relevé | [TJMètre](https://tjmetre.fr/barometre) | Développeur : 52 % de 4 515 réponses sur 12 mois ; full-stack : 229 réponses. La page globale mentionne aussi 21 623 observations agrégées : préciser le dénominateur utilisé. |
| Blog du Modérateur relaie Morgan Philips 2025 | Confirmée comme source secondaire | [BDM](https://www.blogdumoderateur.com/freelances-taux-journaliers-moyens-it-france-2025/) | Méthode basée sur missions, entretiens 2024 et base interne ; ne prouve pas un tarif 2026. |
| Régime micro et franchise de TVA sont distincts | Confirmée | [Service Public](https://entreprendre.service-public.gouv.fr/vosdroits/F23267), [economie.gouv.fr](https://www.economie.gouv.fr/entreprises/gerer-sa-fiscalite-et-ses-impots/autres-impots-et-taxes/tva-quels-sont-les-differents-regimes-dimposition) | La page évite de publier des seuils volatils ; conserver et revalider au jour de signature. |
| L'article L131-3 impose une délimitation des droits cédés | Direction correcte | [Légifrance L131-3](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958) | La situation dépend des auteurs, éléments antérieurs et licences ; avis juridique si enjeu important. |
| L'article 3 de la loi de 1975 appartient au cadre de la sous-traitance | Confirmée mais portée à expliciter | [Légifrance](https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000006467140) | Acceptation du sous-traitant et agrément des conditions de paiement dans le champ de la loi ; ne pas le résumer à une obligation générale de transparence technique. |
| Core Web Vitals mesure des aspects du chargement, sans garantir la qualité ou le classement | Confirmée | [Google Search Central](https://developers.google.com/search/docs/appearance/core-web-vitals) | L'INP, le LCP et le CLS ne remplacent ni recette fonctionnelle, ni conversion, ni sécurité. |

### Contradictions et limites

- Le registre promet « coût sur trois ans », mais le tableau ne contient aucun
  montant.
- L'introduction utilise 9 000/15 000 €, puis le cas 9 360/14 500 € ; ce sont
  deux accroches proches mais distinctes. Le lecteur peut croire qu'il s'agit
  du même cas.
- La page conseille de remettre les prix sur la même base, mais ne montre pas
  le résultat après égalisation.
- Le comparatif de prix s'appuie sur trois sources freelance et aucune donnée
  symétrique d'agence. Le remède n'est pas une moyenne agence : c'est un cas à
  livrables identiques.
- Le titre du H2 5 annonce délai, continuité et partenaires, tandis que les H3
  6 et 7 prolongent la numérotation sous ce H2. La hiérarchie visuelle peut
  faire croire à des chapitres autonomes sans H2.
- La FAQ aborde l'IA, mais la page et les sources finales ne documentent ni
  étude ni protocole.
- Aucun dossier P1 ne consigne les requêtes, extraits, contradictions, faits à
  surveiller, saturation et plan avant rédaction.

### Faits à retirer plutôt qu'à affaiblir

- Toute moyenne d'agence ou de freelance utilisée comme prix juste d'un site.
- Toute phrase « freelance moins cher » ou « agence plus sûre » sans périmètre.
- Tout gain de temps attribué à l'IA sans mesure sur le projet complet.
- Toute promesse de remplacement sans personne, disponibilité et accès testés.
- Toute comparaison HT/TTC qui ignore la récupération effective de TVA du
  client.
- Toute garantie SEO, performance, sécurité ou disponibilité fondée sur le
  statut du prestataire.

## 7. Scénarios et calculs à construire

### 7.1 Périmètre commun

Conserver le cas fictif, mais figer le même résultat :

```text
Site vitrine B2B de 8 pages
positionnement et arborescence validés
design original des gabarits
rédaction de 8 pages
CMS et formulaire relié au CRM
analytics, consentement et Search Console
recette mobile/desktop, performance et accessibilité convenues
mise en ligne avec retour arrière
3 mois de corrections
maintenance, comptes, code, données et sortie chiffrés
```

Les deux candidats doivent remplir la même feuille :

| Poste | Freelance principal + partenaires | Agence | Preuve |
| --- | ---: | ---: | --- |
| Cadrage | jours × taux ou forfait | jours × taux ou forfait | livrable et responsable |
| Design | inclus / partenaire / client | inclus / sous-traité / client | gabarits et retours |
| Rédaction | 8 pages ou exclusion | 8 pages ou exclusion | nombre, longueur, validation |
| Développement | fonctions et exclusions | fonctions et exclusions | recette commune |
| Pilotage | temps prestataire + client | temps prestataire + client | calendrier et décisions |
| Tests/mise en ligne | appareils, cas, retour | mêmes appareils/cas/retour | procès-verbal |
| Après lancement | garantie, support, maintenance | mêmes définitions | SLA et prix hors forfait |
| Sortie | comptes, export, code, droits | mêmes actifs | test de reprise |

Une case `non démontré` ne vaut jamais zéro euro ni « inclus ».

### 7.2 Exemple d'égalisation pédagogique

Les valeurs suivantes sont des **hypothèses d'enseignement**, pas des tarifs
Hagnéré Code ni des moyennes :

```text
OPTION F — freelance principal et partenaires
Développement : 18 j × 520 €                         9 360 €
Design :         5 j × 500 €                         2 500 €
Rédaction :      4 j × 450 €                         1 800 €
Coordination côté client : 20 h × 45 €                 900 €
Création comparable avant récurrences                14 560 €

OPTION A — agence
Forfait cadrage, design, 8 textes, développement,
pilotage, tests et trois mois de corrections         14 500 €
Coordination côté client : 10 h × 45 €                  450 €
Création comparable avant récurrences                14 950 €
```

L'agence n'est plus « 5 140 € plus chère » ; l'écart pédagogique devient
390 € lorsque les fonctions et le temps client hypothétiques sont égalisés.
Cette conclusion dépend entièrement des hypothèses. Elle sert à montrer
pourquoi le TJM seul ne décide rien.

### 7.3 TCO à 36 mois

Ajouter des hypothèses identiques ou explicitement différentes :

| Poste fictif | Option F | Option A | Nature |
| --- | ---: | ---: | --- |
| Création comparable | 14 560 € | 14 950 € | calcul ci-dessus |
| Hébergement/outils, 3 ans | 1 800 € | 1 800 € | 600 €/an, hypothèse commune |
| Maintenance après période incluse | 4 320 € | 7 920 € | 120 €/mois ×36 vs 240 €/mois ×33, hypothèses |
| Temps client récurrent | 1 620 € | 810 € | 1 h/mois vs 0,5 h/mois ×45 € |
| Reprise/sortie | 1 500 € | 1 500 € | hypothèse commune à tester |
| **TCO 36 mois** | **23 800 €** | **26 980 €** | aucune conclusion universelle |

Contrôle :

```text
Option F = 14 560 + 1 800 + 4 320 + 1 620 + 1 500 = 23 800 €
Option A = 14 950 + 1 800 + 7 920 +   810 + 1 500 = 26 980 €
```

Dans ce cas fictif, l'option F gagne de 3 180 €. Si le freelance nécessite
seulement deux jours de reprise non prévus à 520 €, l'écart tombe à 2 140 €.
Si l'agence inclut la maintenance ou si elle évite 71 heures de coordination à
45 €, l'écart disparaît. Le guide doit montrer **la variable de bascule**, pas
déclarer un gagnant général.

### 7.4 Sensibilité et cas limites

Tester au minimum :

| Variable | Bas | Central | Haut |
| --- | ---: | ---: | ---: |
| Jours freelance | 15 | 18 | 24 |
| Design/rédaction externes | 0 € car fournis par le client | 4 300 € | 7 000 € |
| Temps client | 10 h | 20 h | 50 h |
| Maintenance mensuelle | 0 € | 120/240 € | 400 € |
| Retard | 0 semaine | 2 semaines | 8 semaines |
| Reprise | 0 € | 1 500 € | 5 000 € |

Le retard ne reçoit une valeur monétaire que si l'entreprise sait mesurer ce
que la date empêche réellement : campagne, ventes, contrat ou temps. Ne jamais
inventer un manque à gagner.

### 7.5 Portes éliminatoires

Avant la note globale, éliminer ou corriger une offre si :

- aucune personne responsable n'est nommée ;
- le périmètre et les exclusions restent impossibles à comparer ;
- domaine, hébergement ou paiement restent exclusivement sur un compte tiers ;
- la chaîne de droits ou de données sensibles est inconnue ;
- aucun plan de recette, de mise en ligne ou de retour arrière n'existe ;
- la maintenance obligatoire n'a ni contenu ni prix ;
- aucun actif de sortie n'est défini.

## 8. Comparaison et position professionnelle

```text
Options réellement comparables : freelance seul ; freelance principal avec
  partenaires ; collectif/studio ; agence ; amélioration ciblée ; solution
  standard ; report.
Périmètre commun : même résultat, pages, contenus, fonctions, tests, délai,
  support, actifs remis, horizon et temps client.
Option la moins chère : souvent celle qui mobilise le moins de métiers inutiles,
  mais seulement après avoir valorisé les exclusions et le temps interne.
Option la moins risquée : celle qui passe les portes éliminatoires avec des
  personnes disponibles et des actifs reprenables ; le statut ne suffit pas.
Option la plus directe : un freelance senior peut gagner pour un projet clair
  dominé par une compétence.
Option la plus coordonnée : une agence ou un collectif peut gagner lorsque
  design, contenus, développement et mise en ligne doivent réellement avancer
  ensemble.
Position Hagnéré Code : choisir les personnes et les preuves ; payer une équipe
  seulement si plusieurs compétences ou une relève créent une valeur réelle.
Faits qui fondent la position : TJM hétérogènes, périmètres de devis différents,
  sous-traitance possible dans les deux modèles et continuité dépendante des
  actifs transmis.
Signal de révision : périmètre, personnes, disponibilité, délai, maintenance,
  données, licences ou conditions de sortie changent.
Ce que nous déconseillons même si nous pourrions le vendre : une agence
  surdimensionnée pour une correction ciblée, ou un forfait global dont
  personne ne peut expliquer les livrables.
```

La déclaration d'intérêt actuelle doit rester. La position professionnelle peut
être plus tranchée : pour un site simple et bien cadré, un excellent freelance
est souvent le choix rationnel ; pour un résultat pluridisciplinaire ou un outil
critique, une équipe courte avec responsabilité et relève prouvées est souvent
préférable. « Agence » n'est jamais la preuve.

## 9. Objections et cas limites

| Objection loyale | Réponse défendable | Incertitude | Conséquence |
| --- | --- | --- | --- |
| « Le freelance coûte 520 €/jour, l'agence 14 500 €. » | Un taux et un forfait ne se comparent pas directement. | Jours, design, textes, pilotage, tests et support. | Égaliser chaque ligne avant de conclure. |
| « Une agence assure toujours la continuité. » | Elle peut disposer de plusieurs personnes. | Personnes affectées, documentation et capacité de relève. | Nommer le remplaçant et tester les actifs. |
| « Un freelance disparaît plus facilement. » | Une personne seule concentre un risque. | Ancienneté, partenaires, contrats, comptes et sauvegardes. | Traiter le risque par preuves, pas par méfiance générale. |
| « Le TJM médian prouve que 520 € est juste. » | Il situe un profil dans un échantillon. | Compétence, région, période, contexte et jours du projet. | Ne pas l'utiliser comme validation du budget total. |
| « L'agence est chère à cause de ses locaux. » | Une structure supporte des coûts et organise des métiers. | Valeur réellement reçue par le client. | Refuser de payer une capacité non mobilisée ; payer les livrables utiles. |
| « L'IA divise forcément les jours. » | Elle peut accélérer certaines tâches. | Cadrage, design, échanges, tests, sécurité et maintenance. | Demander la méthode et mesurer le résultat, sans quota automatique. |
| « Je fournis les textes gratuitement. » | La facture externe baisse. | Temps du dirigeant et coût d'un retard. | Afficher heures et calendrier, même si la ligne de trésorerie est nulle. |
| « Je ne veux aucune maintenance. » | Un site peut rester sobre. | Correctifs, dépendances, hébergement, incidents et changements métier. | Définir au moins responsabilités et intervention à la demande. |

## 10. Défauts par sévérité

### P0 — aucun constaté

Les exemples sont explicitement fictifs, le calcul `18 × 520` est juste, aucun
baromètre n'est présenté comme un tarif obligatoire et aucun statut n'est
déclaré supérieur. Les réserves fiscales et juridiques sont visibles. Aucun
calcul trompeur décisif, faux témoignage ou garantie de résultat n'est prouvé
sur le snapshot.

### P1 — à fermer avant nouvelle validation de référence

| ID | Défaut | Risque lecteur | Correction exigée |
| --- | --- | --- | --- |
| P1-01 | Offres 9 360/14 500 jamais égalisées | Le prix freelance paraît inférieur alors que design, textes et pilotage manquent | Compléter les deux offres sur le même cas et afficher inconnues/preuves. |
| P1-02 | TCO trois ans promis mais laissé vide | Le lecteur ne peut pas comparer maintenance, temps, outils et sortie | Publier TCO 12/36/60 avec hypothèses, contrôles et deux vues de sortie. |
| P1-03 | Baromètres de prix asymétriques et hors périmètre projet | Le TJM freelance devient ancre de comparaison sans équivalent de valeur | Limiter leur rôle au contexte et baser la décision sur la décomposition commune. |
| P1-04 | Qualité, références, capacité et continuité non notées par preuve | Des affirmations commerciales peuvent valoir autant qu'un test | Ajouter matrice nom/rôle/temps/preuve, appel de référence et test de reprise. |
| P1-05 | Engagements incomplets pour un projet professionnel | Sécurité, données, accessibilité, sauvegarde ou incident peuvent rester sans responsable | Ajouter critères éliminatoires et tests proportionnés au projet. |
| P1-06 | Service de relecture des devis non défini | Le CTA peut promettre une aide dont le livrable, délai, portée et prix sont inconnus | Montrer un extrait de grille et borner ce qui est remis, quand et sous quelles conditions. |
| P1-07 | Dossier P1 et chaîne P1–P4 absents | Les sources, scénarios, contradictions et validation ne sont pas reproductibles | Créer P1, intégrer P2, faire P3 indépendante puis P4 humaine/QA sur manifeste complet. |

### P2 — améliorations utiles après les P1

| ID | Amélioration |
| --- | --- |
| P2-01 | Unifier l'accroche 9 000/15 000 et le cas 9 360/14 500, ou expliquer qu'il s'agit de deux situations distinctes. |
| P2-02 | Donner le dénominateur exact de chaque chiffre TJM et distinguer déclarations, imports et placements. |
| P2-03 | Ajouter une section IA : données envoyées, droits, secrets, revue, tests et mesure du temps réellement évité. |
| P2-04 | Préciser la portée de la loi de 1975 au lieu de laisser penser qu'elle régit toute sous-traitance numérique de la même façon. |
| P2-05 | Corriger la hiérarchie H2/H3 des parties 5–7 et 11–12 afin que la table des matières corresponde au document. |
| P2-06 | Fournir une grille spécifique agence/freelance ; le cahier des charges général ne suffit pas à noter personnes, capacité et relève. |
| P2-07 | Ajouter deux contre-cas : site très simple et application critique, sans seuil monétaire arbitraire. |
| P2-08 | Recalculer le temps de lecture visible et aligner hero, registre et carte après correction. |
| P2-09 | Tester liens, FAQ, tableaux, JSON-LD, image sociale, clavier et responsive 320–1600, puis prouver séparément build et production. |

## 11. Plan de réécriture localisable

| Ordre | Zone | Travail | Décision produite |
| ---: | --- | --- | --- |
| 1 | `page.tsx:220-239` | Unifier le cas, annoncer la feuille normalisée et la réponse conditionnelle | Comprendre le livrable final. |
| 2 | `:293-377` | Ajouter matrice personnes/rôles/capacité/remplaçant/preuve | Comparer les équipes réelles. |
| 3 | `:379-434` | Conserver les baromètres en contexte, afficher leur méthode et leurs limites | Éviter l'ancrage sur un TJM médian. |
| 4 | `:436-478` | Terminer l'égalisation 9 360/14 500 avec design, textes, pilotage et temps client | Comparer la même création. |
| 5 | `:502-572` | Ajouter chemin critique, capacité réservée et test de reprise | Vérifier délai et continuité. |
| 6 | `:574-638` | Borner droit/sous-traitance et relier chaque actif à une preuve | Sécuriser la passation. |
| 7 | `:640-703` | Transformer signaux et voies intermédiaires en portes éliminatoires et scénarios | Écarter ou corriger une offre. |
| 8 | `:705-789` | Étendre engagements, corriger hiérarchie et publier TCO 12/36/60/sensibilité | Choisir économiquement. |
| 9 | `:791-856` | Remplacer « souvent logique » par résultats du cas et de la grille | Produire un verdict défendable. |
| 10 | `:858-888` | Montrer le livrable de relecture, délai, portée et prix/conditions | Convertir sans promesse floue. |
| 11 | dossier, registre, manifestes | Reprendre les quatre passes et actualiser les dates seulement après validation | Rendre le statut défendable. |

### Contrat des 150 premiers mots

Conserver les deux devis et « vous ne pouvez pas encore les comparer ». Ajouter :

> Dans ce guide, nous allons compléter les deux offres sur le même site :
> cadrage, design, huit textes, développement, tests, mise en ligne, trois ans
> d'entretien et sortie. Vous verrez qu'un TJM inférieur ne donne pas forcément
> le budget le plus bas, et qu'une agence n'achète une vraie sécurité que si les
> personnes, le remplaçant et les actifs remis sont nommés. La bonne conclusion
> pourra être un freelance, un collectif, une agence, une amélioration ciblée
> ou aucun nouveau site.

### À conserver

- la scène des deux devis et le refus de l'étiquette ;
- les cinq profils ;
- les quatre questions sur les personnes ;
- la déclaration d'intérêt commercial ;
- les baromètres bornés ;
- la nuance TVA/micro ;
- la continuité par les actifs ;
- les voies intermédiaires ;
- les engagements mesurables ;
- la méthode en cinq étapes et le CTA acceptant le mauvais fit.

### À ne pas ajouter

- une moyenne de prix agence ;
- un classement « agence vs freelance » sans cas ;
- un simulateur qui donne un gagnant automatique ;
- des statistiques de défaillance invérifiables ;
- une liste de vingt métiers ou baromètres ;
- une ressource qui recopierait le guide sans produire une décision.

## 12. État des portes P1–P4

| Porte | État au 24/07/2026 | Motif |
| --- | --- | --- |
| P1 — recherche | **REJETÉE / absente** | Aucun dossier propre au slug ; le présent audit ne remplace pas le dossier P1 de production. |
| P2 — rédaction | **existante, à corriger** | Page humaine et riche, mais sept P1 empêchent une version de référence. |
| P3 — contre-audit | **REJETÉE / non validée** | Ce rapport prescrit les corrections ; aucune réécriture corrigée n'existe à contre-valider. |
| P4 — humanisation et QA | **REJETÉE / non validée** | Score 82, comparaison à 6, aucune QA/render/build/manifeste du snapshot final. |

Après correction, un autre agent doit recalculer les scénarios et rouvrir les
sources. L'auteur P2 ne peut pas valider sa P3. La P4 cible au moins 90/100,
aucun axe sous 8 et les axes critiques à 9 ou 10. Un rapport présent n'est
jamais une validation automatique.

## 13. Contre-audit exigé après correction

| Contrôle | Revalidation indépendante |
| --- | --- |
| Périmètre | Vérifier même pages, contenus, fonctions, tests, délai, maintenance et sortie. |
| Calculs | Refaire 9 360 €, 14 560 €, 14 950 €, TCO 23 800/26 980 et toutes les sensibilités. |
| Baromètres | Rouvrir Silkhom/TJMètre/Morgan Philips, relever date, population, spécialité, unité et biais. |
| Capacité | Obtenir noms, jours/semaine, dépendances et remplaçant ; comparer au calendrier. |
| Références | Appeler avec autorisation et contrôler périmètre, livrables, délai, accès, support et contre-cas. |
| Reprise | Faire intervenir un tiers sur une copie : build, export, restauration et documentation. |
| Droit/fiscalité | Rouvrir Service Public, economie.gouv.fr et Légifrance ; supprimer toute généralisation. |
| Conversion | Vérifier que le livrable de relecture existe réellement et que l'option agence peut perdre. |
| Produit | Formatter, lint, tests, build, HTML/JSON-LD, liens, OG, clavier et 320–1600 px. |
| Public | Vérifier séparément URL, robots, sitemap et éventuelle indexation ; ne rien inférer du local. |

## 14. Preuves techniques et visuelles

```text
Calculs actuels refaits :
- 18 × 520 € = 9 360 € ;
- 14 500 − 9 360 = 5 140 €.
Calculs proposés refaits :
- option F création comparable = 9 360 + 2 500 + 1 800 + 900
  = 14 560 € ;
- option A création comparable = 14 500 + 450 = 14 950 € ;
- TCO F = 14 560 + 1 800 + 4 320 + 1 620 + 1 500
  = 23 800 € ;
- TCO A = 14 950 + 1 800 + 7 920 + 810 + 1 500
  = 26 980 € ;
- écart = 3 180 €.
Sources rouvertes :
- Silkhom, TJMètre, BDM/Morgan Philips ;
- Service Public micro, economie.gouv.fr TVA ;
- Légifrance L131-3 et loi de 1975 ;
- Google Search Central Core Web Vitals.
Benchmark :
- France, États-Unis, Royaume-Uni et Australie consultés le 24/07/2026.
Recherche et manifestes :
- absents pour ce slug.
Tests actuels :
- non rejoués dans ce rapport documentaire.
Rendu 320 / 390 / 768 / 1024 / 1440 / 1600 :
- non exécuté ; obligatoire après correction.
Image sociale :
- source et hash contrôlés ; PNG final non rendu ni inspecté.
Statut maximal prouvé :
- audit éditorial, économique, concurrentiel, factuel et documentaire du
  snapshot listé.
Réserve :
- aucune preuve actuelle de build, déploiement, indexation, classement ou
  conversion de production.
```
