# Dossier de recherche — Google Ads ou Meta Ads

> Les quatre passes sont terminées. La comparaison des deux canaux, ses limites
> et le rendu ont été contre-audités puis contrôlés sous délégation éditoriale,
> sans test par un lecteur humain réel.

## Journal des quatre passes

Propriétaire éditorial unique : `/root/p1p2_batch3_decisions`

| Passe                        | État                     | Date            | Responsable                   | Snapshot                                                   | Blocages |
| ---------------------------- | ------------------------ | --------------- | ----------------------------- | ---------------------------------------------------------- | -------- |
| 1. Recherche                 | Terminée — porte validée | 23 juillet 2026 | `/root/p1p2_batch3_decisions` | `docs/research/manifests/google-ads-ou-meta-ads-p1.sha256` | Aucun    |
| 2. Rédaction et intégration  | Terminée — porte validée | 23 juillet 2026 | `/root/p1p2_batch3_decisions` | `docs/research/manifests/google-ads-ou-meta-ads-p2.sha256` | Aucun    |
| 3. Contre-audit indépendant  | Terminée — porte validée | 23 juillet 2026 | `/root/p2_batch3_apps`        | `docs/research/manifests/google-ads-ou-meta-ads-p3.sha256` | Aucun    |
| 4. Plume humaine et contrôle | Terminée — porte validée | 23 juillet 2026 | `/root`                       | `docs/research/manifests/google-ads-ou-meta-ads-p4.sha256` | Aucun    |

## 1. Fiche d’identité

```text
Slug : google-ads-ou-meta-ads
Statut actuel : publiable — validation éditoriale déléguée
Requête principale : Google Ads ou Meta Ads
Moment du parcours : choisir où tester un budget publicitaire sans comparer seulement les clics
Lecteur précis : dirigeant de TPE ou PME qui vend un service, un produit ou une prise de rendez-vous et hésite entre Google, Facebook et Instagram
Situation déclenchante : Google paraît cher au clic, Meta apporte beaucoup de visites moins chères, mais l’entreprise ne sait pas quelles ventes attribuer à chaque campagne
Décision principale après lecture : choisir Google, Meta, une séquence des deux ou aucun investissement selon la façon dont le client découvre l’offre, la comprend et l’achète
Niveau de connaissance au départ : connaît les plateformes, mais confond audience, intention, clic, demande et vente
5 questions indispensables : le client cherche-t-il déjà cette solution ? faut-il la montrer pour qu’il la désire ? dispose-t-on de visuels et preuves ? la vente est-elle mesurable jusqu’au chiffre d’affaires ? le budget permet-il un test interprétable ?
3 objections ou craintes : « Google coûte trop cher » ; « Meta apporte des clics moins chers » ; « Il faut être partout »
Action utile sans contact commercial : classer dix ventes récentes selon le premier déclencheur, la recherche effectuée, la preuve décisive et le délai de décision
CTA possible : faire relire un test publicitaire limité et mesurable
Hors périmètre : benchmark universel de CPC ou de coût par lead, audit d’un compte absent, conseil juridique personnalisé sur les données, promesse de ventes
Date de la recherche : 23 juillet 2026
Responsable de la synthèse : /root/p1p2_batch3_decisions
```

## 2. Contrat de langage humain

- Phrase réelle : « Google me semble cher, Meta me promet plus de clics :
  où dois-je mettre mes 3 000 € ? »
- Réponse attendue : Google Search est souvent plus direct quand des personnes
  cherchent déjà le service ; Meta est souvent plus adapté quand il faut
  d’abord montrer, expliquer ou rappeler l’offre. Le coût du clic ne tranche
  pas : il faut comparer les ventes et la marge sur une même période.
- Définition simple : Google Search affiche une annonce à côté d’une recherche
  formulée ; Meta diffuse une publicité dans Facebook ou Instagram à des
  personnes qui n’étaient pas nécessairement en train de chercher.
- Mots ordinaires : recherche, besoin, photo, vidéo, demande, rendez-vous,
  vente, marge, budget, client connu, relance.
- Termes à traduire : intention, audience, attribution, retargeting,
  conversion, pixel, Conversions API, lead, créative, enchère.
- Ouverture retenue : le dirigeant voit un clic Google à 8 € et un clic Meta à
  1 €, mais ignore lequel a produit une vente rentable. La réponse arrive avant
  la présentation des plateformes.

## 3. Cannibalisation

| Page existante                              | Intention                                                   | Différence nécessaire                                            | Maillage prévu                                                            |
| ------------------------------------------- | ----------------------------------------------------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `/guides/seo-ou-google-ads`                 | Choisir entre publicité sur Google et référencement naturel | Comparer deux plateformes payantes et deux moments de découverte | Renvoyer au guide SEO si le lecteur hésite avec un investissement durable |
| `/guides/google-search-ou-performance-max`  | Choisir un type de campagne Google                          | Choisir d’abord entre l’écosystème Google et Meta                | Renvoyer au comparatif Google une fois la plateforme choisie              |
| `/guides/budget-google-ads-pme`             | Préparer une enveloppe Google Ads                           | Décider où le budget doit être testé                             | Ne reprendre aucun seuil budgétaire                                       |
| `/guides/calculer-cout-par-lead-google-ads` | Calculer la qualité économique des demandes Google          | Comparer deux canaux sur le même résultat final                  | Utiliser la même discipline de mesure, sans refaire toutes les formules   |
| `/services/publicite-en-ligne`              | Présenter l’accompagnement publicitaire                     | Permettre une décision autonome avant contact                    | CTA unique après la grille de décision                                    |

**Verdict :** intention propre. La page ne doit pas devenir un comparatif de
fonctionnalités ni affirmer que toute demande est « captée » ou « créée » par
une seule plateforme.

## 4. Demande observée et angle mort des résultats

Les résultats consultés le 23 juillet 2026 opposent souvent le ciblage par
mot-clé de Google aux audiences de Meta, puis désignent un gagnant par secteur.
Les angles morts récurrents sont :

- le même clic n’a pas le même rôle dans un parcours d’achat ;
- les campagnes Meta peuvent viser notoriété, trafic, prospects ou ventes :
  « Meta » n’est pas une seule mission ;
- Google ne se limite pas à Search, mais le guide doit volontairement comparer
  Search à Meta pour garder une décision intelligible ;
- une visite, un formulaire, un prospect qualifié et une vente sont souvent
  additionnés comme s’ils valaient la même chose ;
- la création des visuels, les pages d’arrivée et le suivi commercial sont
  rarement comptés dans la comparaison ;
- la possibilité de reporter l’investissement est rarement présentée.

## 5. Fiche de preuves

| Affirmation utilisable                                                                                                                                                            | Catégorie    | Source primaire et passage                                                                                                 | Périmètre                                                    | Consultation    | Limite                                                     | Conséquence lecteur                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ | --------------- | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| Les campagnes Search permettent d’atteindre des personnes pendant qu’elles recherchent sur Google les produits ou services proposés                                               | Fait vérifié | [Google Ads — Choisir le bon type de campagne](https://support.google.com/google-ads/answer/2567043?hl=fr), section Search | Google Ads Search                                            | 23 juillet 2026 | Une annonce n’est pas garantie d’être affichée ni cliquée  | Google est cohérent quand le besoin est déjà formulé                                        |
| Le ciblage et les mots-clés déterminent les recherches auxquelles une annonce peut correspondre, avec d’autres facteurs comme la zone et les enchères                             | Fait vérifié | [Google Ads — Annonces et résultats de recherche](https://support.google.com/google-ads/answer/1722020?hl=fr)              | Recherche Google                                             | 23 juillet 2026 | La correspondance n’est pas une preuve d’intention d’achat | Contrôler les termes et qualifier les demandes                                              |
| Meta demande de choisir un objectif et son système recherche les personnes susceptibles d’effectuer l’action liée à cet objectif                                                  | Fait vérifié | [Meta for Business — Objectifs publicitaires](https://www.facebook.com/business/ads/ad-objectives)                         | Facebook, Instagram et Messenger, selon placements éligibles | 23 juillet 2026 | Description de l’éditeur, pas garantie de résultat         | Un objectif « trafic » ne doit pas être jugé comme une campagne « prospects » ou « ventes » |
| L’objectif notoriété de Meta vise notamment portée, impressions et vues vidéo                                                                                                     | Fait vérifié | [Meta for Business — Objectif notoriété](https://www.facebook.com/business/ads/ad-objectives/awareness)                    | Campagnes Meta éligibles                                     | 23 juillet 2026 | Ne prouve pas une vente supplémentaire                     | Utile pour montrer une offre, insuffisant pour juger sa rentabilité                         |
| Meta indique que l’objectif trafic est conçu pour envoyer des personnes vers une destination ; si le but est un prospect ou une vente, il faut envisager l’objectif correspondant | Fait vérifié | [Meta for Business — Objectif trafic](https://www.facebook.com/business/ads/ad-objectives/traffic)                         | Campagnes Meta                                               | 23 juillet 2026 | La plateforme décrit ses produits                          | Ne pas comparer un clic Meta optimisé au trafic à une vente Google                          |
| Google permet d’importer des étapes hors ligne comme un prospect qualifié ou une vente conclue                                                                                    | Fait vérifié | [Google Ads — Questions sur les conversions hors ligne](https://support.google.com/google-ads/answer/10029210?hl=fr)       | Comptes et configurations éligibles                          | 23 juillet 2026 | Mise en œuvre et règles de données à valider               | Renvoyer la qualité commerciale au compte quand la vente se conclut hors du site            |
| La Conversions API de Meta peut relier au système publicitaire des événements du site, de l’application, du magasin ou du CRM                                                     | Fait vérifié | [Meta Business Help — Conversions API](https://www.facebook.com/business/help/AboutConversionsAPI)                         | Outils Meta, selon configuration                             | 23 juillet 2026 | Ne résout ni le consentement ni l’attribution parfaite     | Comparer les deux canaux jusqu’à une étape métier commune                                   |

### Déductions éditoriales à ne pas attribuer aux plateformes

- « Google capte une demande et Meta crée la demande » est un raccourci utile,
  pas une loi : Google possède aussi des formats amont et Meta peut générer des
  demandes directes.
- Une offre visuelle ou nouvelle peut être plus simple à expliquer sur Meta,
  mais seule une expérience mesurée dans le contexte de l’entreprise peut le
  confirmer.
- Un clic moins cher n’est pas un meilleur investissement si moins de ventes
  rentables suivent.
- Une attribution technique reste une estimation du parcours, surtout lorsque
  plusieurs appareils, personnes ou échanges hors ligne interviennent.

### Informations volontairement exclues

- aucun CPC, coût par prospect ou taux de conversion moyen ;
- aucun secteur déclaré gagnant automatiquement sur une plateforme ;
- aucun budget minimal universel ;
- aucune promesse de baisse du coût par l’algorithme ;
- aucune règle juridique détaillée sur consentement ou transferts de données ;
- aucune affirmation de ventes additionnelles sans test incrémental.

## 6. Comparaison à conditions égales

Le guide comparera les deux options sur le même résultat final :

1. coût média dépensé sur une période ;
2. coût de production des annonces et pages ;
3. demandes réellement reçues ;
4. demandes correspondant au client visé ;
5. rendez-vous, devis ou paniers selon le métier ;
6. ventes encaissées et marge prudente ;
7. temps de traitement commercial ;
8. apprentissage réutilisable après le test.

Le verdict ne portera jamais uniquement sur le coût par clic.

## 7. Exemple pédagogique prévu

**Exemple illustratif fictif :** « Atelier Noroît » vend un accompagnement B2B
qui exige un rendez-vous. Un mois, l’entreprise dépense 1 500 € sur Google
Search et 1 500 € sur Meta. Google produit moins de clics, Meta davantage. Le
guide ne choisit pas à ce stade : il fait renseigner pour chaque canal les
demandes correspondant à la cible, les rendez-vous tenus, les propositions
envoyées, les ventes et le temps passé.

La décision peut être :

- continuer Google si les recherches sont précises et les ventes rentables ;
- continuer Meta si la démonstration visuelle apporte des demandes qualifiées ;
- utiliser Meta pour expliquer puis Google ou le site pour conclure ;
- suspendre les deux si la page, la mesure ou le suivi commercial empêche
  d’apprendre.

Les montants sont des hypothèses pédagogiques, pas un benchmark.

## 8. Empreinte éditoriale

```text
Tension motrice : un clic Meta moins cher semble meilleur, mais le dirigeant paie des ventes, pas des clics.
Type d’ouverture : relevé de tableau de bord incomplet.
Architecture générale : partir du moment de découverte, comparer les missions, puis suivre une vente à rebours.
Traitement de l’exemple : une entreprise fictive, mêmes budgets, décision suspendue jusqu’aux ventes.
Rythme dominant : questions courtes, cartes de choix et fiche de test.
Action utile : classer dix ventes et préparer un tableau identique pour les deux canaux.
Moment du CTA : après le protocole de test et l’option de reporter.
Mécanismes non repris : arbre « portes », verdict par secteur, benchmark de CPC, matrice opaque et plan standard en dix étapes.
```

## 9. Plan annoté

| Section                                                | Question résolue                                     | Preuve ou exemple                           | Conséquence                             | Format         |
| ------------------------------------------------------ | ---------------------------------------------------- | ------------------------------------------- | --------------------------------------- | -------------- |
| Le clic le moins cher ne répond pas à la question      | Pourquoi les tableaux de bord trompent-ils ?         | Situation fictive                           | Revenir à la vente et à la marge        | Ouverture      |
| Google répond à une recherche ; Meta interrompt un fil | Quelle différence simple ?                           | Docs officielles Google et Meta             | Identifier le moment de découverte      | Deux scènes    |
| Quatre situations et quatre réponses                   | Que choisir maintenant ?                             | Conditions observables                      | Google, Meta, séquence ou attente       | Cartes         |
| Vérifiez comment vos clients achètent                  | Existe-t-il déjà une demande formulée ?              | Dix ventes récentes                         | Choisir sur le réel                     | Exercice       |
| Comparez le même résultat                              | Quels chiffres sont comparables ?                    | Entonnoir commun                            | Refuser le CPC seul                     | Liste ordonnée |
| Ce que chaque canal exige de l’entreprise              | Quels coûts et travaux cachés ?                      | Création, page, suivi, CRM                  | Préparer les moyens                     | Comparaison    |
| Un test limité qui peut échouer utilement              | Comment apprendre sans disperser le budget ?         | Hypothèse, durée, résultat, règle d’arrêt   | Ne tester qu’une question               | Fiche          |
| Exemple Atelier Noroît                                 | Comment décider avec des résultats contradictoires ? | Exemple fictif                              | Choisir ou combiner sans surinterpréter | Chronologie    |
| Quand ne lancer aucune campagne                        | Quel est le mauvais moment ?                         | Offre floue, marge inconnue, mesure absente | Corriger avant de payer                 | Encadré        |
| Sources, bon fit et FAQ                                | Quand demander un regard extérieur ?                 | Limites explicites                          | Conversion honnête                      | Sortie         |

## 10. Action autonome et conversion

Action autonome : compléter pour dix ventes récentes :

```text
Vente :
Comment le client a découvert l’offre :
Ce qu’il cherchait ou regardait :
Preuve qui l’a convaincu :
Nombre d’échanges avant achat :
Délai entre découverte et vente :
Peut-on relier la vente à une campagne : oui / partiellement / non
```

Bon fit : entreprise qui connaît sa marge, sait qualifier une demande, possède
une offre explicable et accepte un test limité.

Mauvais fit : besoin de trésorerie garantie, absence de page correcte,
impossibilité de suivre les ventes ou volonté de choisir sur le coût du clic.

CTA : « Choisir un premier test publicitaire » vers `/demarrer-un-projet`.
Le clic ouvre un formulaire de projet ; il ne promet ni audit gratuit ni vente.

## 11. Rapport P1

```text
PASSE 1 TERMINÉE
Slug : google-ads-ou-meta-ads
Lecteur et phrase réelle : dirigeant — « Google me semble cher, Meta me promet plus de clics : où mettre mon budget ? »
Décision : Google Search, Meta, une séquence ou aucun canal pour l’instant
Angle et forme dominante : remonter du clic à la vente et au moment de découverte
Pages proches et différence : SEO/Ads compare naturel et payant ; Search/PMax compare deux campagnes Google ; ce guide compare deux écosystèmes payants
Sources décisives : documentations officielles Google Ads et Meta for Business
Incertitudes exclues : benchmarks, gagnant par secteur, attribution parfaite et vente garantie
Action autonome et CTA possible : classer dix ventes ; faire relire un test limité
Plan : clic trompeur, scènes, situations, ventes, résultat commun, travail requis, test, exemple, report, sources et FAQ
Snapshot : docs/research/manifests/google-ads-ou-meta-ads-p1.sha256
```

## 12. Revue de porte P1

- [x] lecteur, situation et décision unique définis ;
- [x] Google Search distingué de l’ensemble de Google Ads ;
- [x] objectifs Meta distingués ;
- [x] comparaison prévue jusqu’à une étape commerciale commune ;
- [x] option séquentielle et option de ne pas investir présentes ;
- [x] aucun benchmark ni gagnant universel ;
- [x] sources officielles consultées le 23 juillet 2026 ;
- [x] exemple fictif annoncé ;
- [x] action autonome, bon fit et mauvais fit définis ;
- [x] P3 et P4 terminées ; publication déléguée et contrôlée.

## 13. Rapport P2

```text
PASSE 2 TERMINÉE
Fichiers créés ou modifiés : dossier de recherche, page publique et image Open Graph dédiée
Ouverture et réponse : Google Search pour une recherche déjà formulée, Meta quand l’offre doit d’abord se montrer, combinaison ou report selon le parcours réel
Forme propre au sujet : deux scènes de découverte, quatre cartes de décision, puis comparaison d’une vente à une vente
Exemples ou calculs : Atelier Noroît, exemple illustratif fictif avec budgets hypothétiques identiques ; formules de coût par demande et par vente
Sources visibles : documentations officielles Google Ads et Meta proches des affirmations sur Search, objectifs, trafic et mesure hors ligne
Action autonome, bon fit et mauvais fit : classer dix ventes récentes ; mauvais fit si offre, marge, page ou suivi ne permettent pas d’apprendre
CTA et destination : « Décrire mon test » vers /demarrer-un-projet, sans téléphone ni promesse de vente
Contrôles rapides : Prettier, ESLint ciblé, TypeScript et git diff --check
Snapshot : docs/research/manifests/google-ads-ou-meta-ads-p2.sha256
```

### Revue de porte P2

- [x] guide complet, sans placeholder ;
- [x] réponse et possibilité de reporter visibles dès l’ouverture ;
- [x] Google Search distingué de l’ensemble des formats Google ;
- [x] aucun benchmark, taux ou gagnant sectoriel inventé ;
- [x] exemple fictif annoncé avant les montants ;
- [x] comparaison mobile sous forme de cartes ou tableaux à rendu mobile ;
- [x] Article et BreadcrumbList uniquement ;
- [x] un CTA éditorial, destination réelle et `showPhone={false}` ;
- [x] image sociale dédiée en 1 200 × 630 ;
- [x] statut de publication aligné sur la délégation explicite ;
- [x] P3 indépendante requise avant P4.

## 14. Rapport P3 — contre-audit indépendant

```text
PASSE 3 TERMINÉE
Relecteur indépendant : /root/p2_batch3_apps
Affirmations et sources revérifiées : rôle de Google Search, objectifs Meta, objectif trafic, conversions hors ligne et Conversions API
Calculs refaits : exemple fictif à budgets média égaux, formules de coût par demande qualifiée, coût par vente et marge après acquisition
P0 trouvés / corrigés : 0 / 0
P1 trouvés / corrigés : 0 / 0
Suggestions rejetées et pourquoi : aucun gagnant sectoriel, clic moyen, attribution parfaite ou budget universel ajouté
Corrections pédagogiques et commerciales : « demande déjà exprimée » rendue explicite, Google Search distingué des autres formats et option de ne lancer aucune campagne maintenue
Revalidation du relecteur : P0/P1/P2 = 0/0/0 sur le contenu courant
Contrôles intermédiaires : Prettier, ESLint, TypeScript, tests ciblés, liens officiels, CTA, schémas et OG conformes
Snapshot : docs/research/manifests/google-ads-ou-meta-ads-p3.sha256
```

## 15. Rapport P4 — plume, rendu et gel

```text
PASSE 4 TERMINÉE
Passages humanisés : deux scènes de découverte rendent le choix immédiatement concret, puis chaque canal est ramené à la même vente plutôt qu’au clic le moins cher
Coupe ou resserrement : formulations défensives et répétitions de critères retirées ; l’option séquentielle et l’absence de campagne restent visibles
Retour P3 effectué : oui — rôles de Google Search et Meta, objectifs, conversions hors ligne et limites d’attribution ont été revérifiés ; relecture finale P0/P1/P2 = 0/0/0
Scorecard justifiée : 20/20 — Intention 2, Décision 2, Pédagogie 2, Profondeur 2, Preuve 2, Comparaison 2, Originalité 2, Style 2, Conversion 2, SEO/produit 2
Validation humaine réelle : non
Test réalisé par une personne réelle : non
Autorisation éditoriale : délégation explicite du commanditaire
Décision de publication : autorisée explicitement par le commanditaire
Commandes et résultats : check:seo 215/215 ; ESLint 32 fichiers ; TypeScript conforme ; npm test 440/440 ; build et postbuild de production conformes ; diff-check conforme
Largeurs et états contrôlés : 320, 390, 768, 1 024 et 1 440 px ; clair et sombre ; scènes, cartes, tableau, CTA, FAQ et footer sans débordement
Route, OG et console : route 200, H1 unique, canonical et robots conformes ; OG 200 en PNG 1 200 × 630 ; aucun overlay ni erreur navigateur
Snapshot final : docs/research/manifests/google-ads-ou-meta-ads-p4.sha256
Statut maximal : Publiable
Verdict : publiable en index/follow ; aucun canal gagnant, coût ou vente ne sont garantis
```
