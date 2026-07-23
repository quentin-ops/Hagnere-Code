# Dossier de recherche — calculer le coût par lead Google Ads

> Les quatre passes sont terminées. Aucun benchmark de marché n'est utilisé.
> Les formules, les dénominateurs et le rendu ont été contre-audités puis
> contrôlés sous délégation éditoriale, sans test par un lecteur humain réel.

## Journal des quatre passes

Propriétaire éditorial unique : `/root`

| Passe                        | État                               | Date            | Responsable                 | Snapshot                                                              | Blocages |
| ---------------------------- | ---------------------------------- | --------------- | --------------------------- | --------------------------------------------------------------------- | -------- |
| 1. Recherche                 | Terminée — porte validée           | 23 juillet 2026 | `/root/audit_service_gaps`  | `docs/research/manifests/calculer-cout-par-lead-google-ads-p1.sha256` | Aucun    |
| 2. Rédaction et intégration  | Terminée — prête pour contre-audit | 23 juillet 2026 | `/root/p2_batch3_marketing` | `docs/research/manifests/calculer-cout-par-lead-google-ads-p2.sha256` | Aucun    |
| 3. Contre-audit indépendant  | Terminée — porte validée           | 23 juillet 2026 | `/root/p2_batch3_apps`      | `docs/research/manifests/calculer-cout-par-lead-google-ads-p3.sha256` | Aucun    |
| 4. Plume humaine et contrôle | Terminée — porte validée           | 23 juillet 2026 | `/root`                     | `docs/research/manifests/calculer-cout-par-lead-google-ads-p4.sha256` | Aucun    |

## 1. Fiche d'identité

```text
Slug : calculer-cout-par-lead-google-ads
Statut actuel : publiable — validation éditoriale déléguée
Requête principale : coût par lead Google Ads
Moment du parcours : réconcilier la dépense publicitaire avec les demandes, les leads qualifiés et les ventes avant de changer le budget
Lecteur précis : dirigeant d'une entreprise de services qui voit un coût par conversion dans Google Ads sans savoir combien coûte un prospect réellement exploitable
Situation déclenchante : Google affiche 35 euros par conversion ; sur quarante formulaires, huit correspondent à l'offre et deux ont signé
Décision principale après lecture : augmenter, maintenir, réduire ou suspendre le budget après avoir calculé sur la même cohorte le CPL brut, le coût par lead qualifié, le coût d'acquisition observé et le CPL maximal prudent
Niveau de connaissance au départ : connaît dépense, formulaires et chiffre d'affaires, mais mélange conversion publicitaire, demande unique, qualification et client
5 questions indispensables : quelle action compte comme conversion ? les demandes sont-elles dédupliquées ? lesquelles sont qualifiées ? le cycle de vente est-il terminé ? quelle marge prudente une vente apporte-t-elle ?
3 objections ou craintes : « Google dit 35 euros, donc c'est rentable » ; « Le CPA cible est notre seuil » ; « Si deux ventes sont signées, on peut doubler immédiatement »
Action utile sans contact commercial : fermer une cohorte, attribuer un identifiant unique à chaque demande, renseigner qualifié/vendu/perdu et rapprocher tous les coûts
CTA possible : faire vérifier la chaîne clic, demande, qualification et vente
Hors périmètre : benchmark sectoriel de CPL, attribution causale parfaite, audit juridique du consentement, calcul de LTV sans données de rétention
Date de la recherche : 23 juillet 2026
Responsable de la synthèse : /root/audit_service_gaps
```

## 2. Contrat de langage humain

- Phrase réelle : « Google m'annonce 35 euros par conversion, mais presque tous
  les formulaires sont mauvais. Combien me coûte vraiment un prospect utile ? »
- Réponse attendue : divisez les mêmes coûts successivement par les demandes
  uniques, les demandes qualifiées puis les nouveaux clients ; comparez ensuite
  ce coût à une marge prudente, sans prendre l'interface Google pour votre
  comptabilité.
- Définition simple : le coût par lead brut est la dépense divisée par les
  demandes uniques attribuables. Un lead qualifié correspond en plus aux
  critères écrits de l'entreprise. Un client a effectivement signé selon la
  règle annoncée.
- Mots ordinaires : clic, formulaire, appel, doublon, bon contact, devis,
  signé, marge, dépense, agence, campagne, période.
- Jargon à traduire : CPL, CPA, CAC, cohorte, attribution, conversion primaire,
  offline conversion, enhanced conversions, target CPA.
- Ouverture : montrer immédiatement que 35 euros, 175 euros et 700 euros
  décrivent le même mois avec trois dénominateurs différents.

## 3. Cannibalisation

| Page existante                                 | Intention                                      | Différence                                              | Maillage                                              |
| ---------------------------------------------- | ---------------------------------------------- | ------------------------------------------------------- | ----------------------------------------------------- |
| `/guides/budget-google-ads-pme`                | Fixer une enveloppe et un test                 | Calculer ce que le budget a réellement acheté           | Le budget renverra ici après la première cohorte      |
| `/guides/suivi-conversions-google-ads`         | Réconcilier les événements entre outils        | Poser les formules économiques et une règle de décision | Lier si les identifiants ou événements manquent       |
| `/guides/leads-google-ads-non-qualifies`       | Diagnostiquer la mauvaise qualité des demandes | Mesurer son coût                                        | Ne pas refaire le diagnostic des requêtes et messages |
| `/guides/pourquoi-google-ads-ne-convertit-pas` | Trouver pourquoi aucune vente n'arrive         | Calculer quand demandes et quelques ventes existent     | Lier si le dénominateur client reste nul              |

**Verdict :** guide distinct et proche d'une décision budgétaire. Il doit
montrer les calculs ligne par ligne.

## 4. Sources officielles

| Affirmation utilisable                                                                                                                                                        | Source primaire                                                                                                | Limite                                                                                         | Conséquence lecteur                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| Google définit le CPA moyen comme le coût total des conversions divisé par le nombre total de conversions                                                                     | [Google Ads — About average CPA](https://support.google.com/google-ads/answer/6396841)                         | La conversion dépend du paramétrage et n'est pas automatiquement un lead qualifié ou un client | Inspecter l'action et son dénominateur avant de reprendre le chiffre                      |
| La colonne coût par conversion utilise le coût et les conversions incluses ; la colonne Conversions peut inclure des actions principales et des conversions modélisées        | [Google Ads — Conversion tracking columns](https://support.google.com/google-ads/answer/6270625)               | Les colonnes et modèles ne remplacent pas le CRM                                               | Documenter les actions incluses et ne pas comparer deux périodes configurées différemment |
| Les actions principales alimentent généralement la colonne Conversions et les enchères, tandis que les secondaires servent plutôt à l'observation dans Toutes les conversions | [Google Ads — Primary and secondary conversion actions](https://support.google.com/google-ads/answer/11461796) | Une action principale reste un choix de configuration                                          | Ne pas appeler « vente » une action rendue primaire                                       |
| Google recommande d'importer des statuts tels que lead qualifié ou lead converti et fait évoluer les imports vers Data Manager                                                | [Google Ads — Set up enhanced conversions for leads](https://support.google.com/google-ads/answer/14274408)    | Disponibilité et rapprochement ne sont pas complets ; vérifier la documentation actuelle       | Faire remonter la qualification et la vente lorsque le cadre de données le permet         |
| Les conversions avancées pour prospects rapprochent des données first-party hachées et des identifiants publicitaires avec des événements du CRM                              | [Google Ads — About enhanced conversions for leads](https://support.google.com/google-ads/answer/15713840)     | Haché ne signifie pas anonyme ; consentement et politiques restent applicables                 | Ne pas importer de données sans gouvernance ni information appropriée                     |
| Dans l'EEE, l'utilisation des balises et SDK Google pour certaines mesures demande de respecter la politique de consentement et de transmettre les signaux requis             | [Google Ads — EU user consent policy updates](https://support.google.com/google-ads/answer/13695607)           | Ne constitue pas un avis juridique sur un cas précis                                           | Faire vérifier le paramétrage plutôt que promettre une attribution complète               |
| Le CPA cible est un objectif moyen ; les résultats individuels varient et un objectif trop bas peut réduire le volume                                                         | [Google Ads — Target CPA bidding](https://support.google.com/google-ads/answer/6268632)                        | Le CPA cible n'est pas le CPL maximal rentable de l'entreprise                                 | Calculer le seuil économique hors de la plateforme                                        |

## 5. Formules reproductibles

```text
CPL brut = dépenses média / demandes uniques attribuables

Coût par lead qualifié =
coût complet de la campagne / leads qualifiés

CAC observé =
coût complet de la campagne / nouveaux clients attribuables

Taux de qualification =
leads qualifiés / demandes uniques

Taux de vente =
nouveaux clients / leads qualifiés

Contrôle :
CAC = coût complet par demande
/ (taux de qualification × taux de vente)
```

Le contrôle n'est valable que pour la même cohorte, avec des coûts homogènes et
des dénominateurs non nuls.

```text
Coût d'acquisition maximal par demande =
marge contributive prudente par nouveau client
× taux de qualification
× taux de vente

CPL média maximal après frais fixes =
(marge contributive prudente × ventes attendues
 - coûts fixes d'acquisition)
/ demandes attendues
```

La marge contributive doit être définie par l'entreprise avec la personne
compétente. Pour un revenu récurrent, ne pas utiliser une valeur vie client
sans données de durée, rétention et coûts de service suffisamment fiables.

Si un dénominateur vaut zéro, afficher « données insuffisantes à ce stade »,
jamais un résultat artificiel de zéro euro ou une conclusion de rentabilité.

## 6. Coûts à montrer séparément

- dépense média Google Ads ;
- gestion de campagne ou agence ;
- création ou adaptation de la page ;
- mesure, appels et raccordement CRM ;
- temps commercial, seulement s'il est réellement suivi et pertinent pour la
  décision.

Le total est utile, mais le détail permet de savoir si le coût changera en
augmentant le budget. Un coût initial de mesure ne se comporte pas comme chaque
euro média supplémentaire.

## 7. Exemple pédagogique prévu

**Exemple illustratif fictif :**

- dépenses média : 1 400 € ;
- coûts fixes attribués à la cohorte : 600 € ;
- quarante demandes uniques ;
- huit leads qualifiés ;
- deux nouveaux clients ;
- marge contributive prudente par client : 2 000 €.

Résultats :

- CPL média brut : `1 400 / 40 = 35 €` ;
- coût complet par demande : `2 000 / 40 = 50 €` ;
- coût complet par lead qualifié : `2 000 / 8 = 250 €` ;
- CAC observé : `2 000 / 2 = 1 000 €` ;
- taux de qualification : `8 / 40 = 20 %` ;
- taux de vente des qualifiés : `2 / 8 = 25 %` ;
- coût d'acquisition maximal par demande :
  `2 000 × 20 % × 25 % = 100 €` ;
- CPL média maximal après frais fixes :
  `(2 000 × 2 - 600) / 40 = 85 €`.

Ce cas ne prouve pas qu'il faut doubler le budget. Le volume supplémentaire
peut modifier requêtes, qualification, concurrence, coûts et capacité
commerciale. Le guide fera donc calculer un scénario prudent et vérifier la
cohorte suivante.

## 8. Règle de décision prévue

| Situation                                                                      | Décision possible                            | Vérification avant                            |
| ------------------------------------------------------------------------------ | -------------------------------------------- | --------------------------------------------- |
| Chaîne incomplète ou cycle de vente ouvert                                     | Attendre et réparer la donnée                | Déduplication, statuts, délai de vente        |
| CPL observé sous le seuil prudent, qualification stable et capacité disponible | Augmenter par étape                          | Ne pas extrapoler mécaniquement               |
| Coût proche du seuil avec données encore faibles                               | Maintenir le test                            | Annoncer l'incertitude                        |
| Bons clics mais mauvaise qualification                                         | Réduire ou corriger requêtes, offre et page  | Lire les demandes réelles                     |
| CAC supérieur à la marge prudente sur cohorte mature                           | Suspendre ou refondre avant de dépenser plus | Vérifier coûts, ventes tardives et exclusions |

## 9. Plan annoté

| Section                                              | Question                                 | Format                                    | Décision                         |
| ---------------------------------------------------- | ---------------------------------------- | ----------------------------------------- | -------------------------------- |
| Google dit 35 €, l'entreprise paie peut-être 1 000 € | Pourquoi les chiffres divergent-ils ?    | Scène                                     | Nommer le dénominateur           |
| Séparez quatre populations                           | Qu'est-ce qu'une conversion ?            | Conversions, demandes, qualifiés, clients | Arrêter les assimilations        |
| Fermez une cohorte                                   | Quelles lignes comparer ?                | Dates et délai de vente                   | Attendre si nécessaire           |
| Rassemblez les coûts sans les masquer                | Quel numérateur ?                        | Liste séparée                             | Distinguer fixe et variable      |
| Calculez six métriques                               | Comment reproduire ?                     | Formules                                  | Vérifier l'arithmétique          |
| Calculez un CPL maximal prudent                      | Combien pouvez-vous financer ?           | Marge et deux taux                        | Ne pas reprendre le CPA cible    |
| Rejouez l'exemple fictif                             | Comment lire le résultat ?               | Tableau source                            | Comprendre 35, 250 et 1 000 €    |
| Augmenter, maintenir, réduire ou suspendre           | Que décider ?                            | Cinq situations                           | Choisir avec incertitude visible |
| Réparer la chaîne                                    | Comment améliorer la prochaine cohorte ? | Ads, page, CRM, vente                     | Rendre les statuts exploitables  |
| Bon fit, mauvais fit et FAQ                          | Quand demander de l'aide ?               | Encadrés                                  | Conversion honnête               |

## 10. Action autonome et conversion

Action : exporter une cohorte fermée, attribuer un identifiant unique aux
demandes, marquer qualifié/vendu/perdu, ajouter média et frais fixes, documenter
délai et exclusions, conserver une source non modifiée puis appliquer les
formules.

Bon fit : génération de prospects, identifiants et statuts CRM, marge par vente
raisonnablement connue et cycle observable.

Mauvais fit : doublons non maîtrisés, cycle non terminé, périodes mélangées,
très petit dénominateur, attribution multi-canal impossible ou valeur vie
inconnue alors qu'elle décide de l'économie.

CTA : « Faire vérifier ma chaîne clic → demande → vente » vers
`/demarrer-un-projet`.

## 11. Rapport P1

```text
PASSE 1 TERMINÉE
Slug : calculer-cout-par-lead-google-ads
Lecteur et phrase réelle : dirigeant — « Google dit 35 euros, mais combien coûte un prospect utile ? »
Décision : augmenter, maintenir, réduire ou suspendre après une cohorte et un seuil prudent
Angle et forme dominante : quatre dénominateurs et six calculs reproductibles
Pages proches et différence : budget fixe l'enveloppe, suivi réconcilie les outils, qualification diagnostique les demandes ; ce guide calcule l'économie
Sources décisives : documentation officielle Google Ads sur colonnes, actions, imports et enchères
Incertitudes exclues : benchmark marché, cohorte minimale, attribution parfaite, valeur vie sans données et CPA cible assimilé au seuil
Action autonome et CTA possible : fermer une cohorte ; faire vérifier la chaîne de données
Plan : scène, populations, cohorte, coûts, métriques, seuil, exemple, décisions, réparation, fits, FAQ
Snapshot : docs/research/manifests/calculer-cout-par-lead-google-ads-p1.sha256
```

## 12. Revue de porte P1

- [x] lecteur, situation et décision définis ;
- [x] conversion, demande, lead qualifié et client distingués ;
- [x] formules reproductibles et zéros traités ;
- [x] coût média séparé du coût complet ;
- [x] sources Google officielles actuelles ;
- [x] exemple fictif annoncé et arithmétique vérifiée ;
- [x] consentement et limites d'attribution signalés ;
- [x] option d'attendre ou suspendre conservée ;
- [x] aucun benchmark de marché ;
- [x] P2, P3 et P4 terminées ; publication déléguée et contrôlée.

## 13. Rapport P2 — rédaction et intégration

```text
PASSE 2 TERMINÉE — PRÊTE POUR CONTRE-AUDIT INDÉPENDANT
Éditeur unique : /root/p2_batch3_marketing
Ouverture : 35 euros par conversion, 250 euros par lead qualifié et 1 000 euros par client décrivent immédiatement la même cohorte
Forme propre : quatre populations, coûts séparés, six calculs reproductibles, seuil prudent et cinq décisions possibles
Arithmétique : média 1 400 euros ; coût complet 2 000 euros ; 40 demandes ; 8 qualifiées ; 2 ventes ; résultats 35, 50, 250 et 1 000 euros ; taux 20 % et 25 %
Cas zéro : « données insuffisantes à ce stade », sans coût nul ni division trompeuse
Exemple : toutes les données sont annoncées comme fictives et ne deviennent jamais un benchmark
Action autonome : cohorte fermée, identifiants, statuts, coûts, exclusions et source non modifiée
Bon et mauvais fit : CRM et cycle observables d'un côté ; doublons, cycle ouvert, petit dénominateur ou valeur vie inconnue de l'autre
Sources visibles : documentation Google Ads sur colonnes, actions, imports, consentement et enchères, avec limites explicites
Conversion : un seul CTA tardif vers /demarrer-un-projet ; téléphone et CTA de barre latérale désactivés
SEO technique : métadonnées du registre en statut ready-for-human-review ; canonical, Article et BreadcrumbList ; image sociale dédiée 1 200 × 630
Contrôles P2 : formatage ciblé, ESLint ciblé et TypeScript conformes selon le rapport de l'éditeur
État : index/follow autorisé après validation P3, P4 et délégation explicite
Snapshot : docs/research/manifests/calculer-cout-par-lead-google-ads-p2.sha256
```

## 14. Rapport P3 — contre-audit indépendant

```text
PASSE 3 TERMINÉE
Relecteur indépendant : /root/p2_batch3_apps
Affirmations et sources revérifiées : colonnes Google Ads, actions de conversion, imports hors ligne, consentement, CPA moyen et CPA cible
Calculs refaits : coût complet 50 €, CPL média 35 €, coût par qualifié 250 €, CAC 1 000 €, plafond complet 100 € et plafond média après frais fixes 85 €
P0 trouvés / corrigés : 2 / 2 — le plafond média de 85 € était mal nommé « complet » et la formule documentaire du CAC oubliait les frais fixes
P1 trouvés / corrigés : 0 / 0
Suggestions rejetées et pourquoi : aucun benchmark de CPL, CAC ou taux de conversion ajouté
Corrections pédagogiques et commerciales : coûts total et média séparés, registre ramené à trois colonnes, cas zéro maintenus comme données insuffisantes et option de suspendre conservée
Revalidation du relecteur : P0/P1/P2 = 0/0/0 sur le contenu courant
Contrôles intermédiaires : Prettier, ESLint, TypeScript, tests arithmétiques et garde-fous humains conformes
Snapshot : docs/research/manifests/calculer-cout-par-lead-google-ads-p3.sha256
```

## 15. Rapport P4 — plume, rendu et gel

```text
PASSE 4 TERMINÉE
Passages humanisés : le 35 € affiché par Google ouvre désormais sur trois questions simples — demande, qualification, vente — avant les formules
Coupe ou resserrement : registre réduit aux colonnes utiles et blocs de conversion répétitifs supprimés ; coûts média et complets restent nommés sans ambiguïté
Retour P3 effectué : oui — CPL, coût par qualifié, CAC, plafond complet de 100 € et plafond média de 85 € ont été recalculés ; relecture finale P0/P1/P2 = 0/0/0
Scorecard justifiée : 19/20 — Intention 2, Décision 2, Pédagogie 2, Profondeur 2, Preuve 2, Comparaison 2, Originalité 2, Style 1, Conversion 2, SEO/produit 2
Validation humaine réelle : non
Test réalisé par une personne réelle : non
Autorisation éditoriale : délégation explicite du commanditaire
Décision de publication : autorisée explicitement par le commanditaire
Commandes et résultats : check:seo 215/215 ; ESLint 32 fichiers ; TypeScript conforme ; npm test 440/440 ; build et postbuild de production conformes ; diff-check conforme
Largeurs et états contrôlés : 320, 390, 768, 1 024 et 1 440 px ; clair et sombre ; formules, tableaux, cartes, CTA, FAQ et footer sans débordement
Route, OG et console : route 200, H1 unique, canonical et robots conformes ; OG 200 en PNG 1 200 × 630 ; aucun overlay ni erreur navigateur
Snapshot final : docs/research/manifests/calculer-cout-par-lead-google-ads-p4.sha256
Statut maximal : Publiable
Verdict : publiable en index/follow ; aucun benchmark, rendement ou volume futur n’est garanti
```
