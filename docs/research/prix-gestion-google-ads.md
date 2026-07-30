# Dossier de recherche — prix-gestion-google-ads

> État au 31 juillet 2026 — **P1 à P4, G4 et contrôle transversal terminés**
> Statut de la page : candidat local `GO_PUBLICATION` à 94/100, indexable dans
> le build de production validé, mais encore non committé et non publié.
> Ce dossier remplace le contenu antérieur pour repartir d’un contrat de réponse
> vérifiable. Les quatre passes, les gates orchestrateur et le contrôle
> transversal sont documentés ci-dessous ; aucune publication n’est déduite de
> leur exécution locale.

## A — Identité, intention et frontière du guide

### A1. Identité éditoriale

| Champ                    | Valeur P1                                                                                                         |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| Slug                     | `prix-gestion-google-ads`                                                                                         |
| Requête centrale         | prix gestion Google Ads                                                                                           |
| Intention                | comprendre un devis, reconstituer le coût complet et choisir un mode d’accompagnement                             |
| Public                   | dirigeante ou dirigeant de PME française, non spécialiste de Google Ads                                           |
| Titre SEO                | Prix gestion Google Ads : comparer 4 modèles en 2026                                                              |
| H1                       | Combien coûte vraiment la gestion de Google Ads ?                                                                 |
| Catégorie canonique      | Google Ads & acquisition                                                                                          |
| Temps de lecture déclaré | 22 minutes                                                                                                        |
| Niveau de risque         | moyen à élevé : décisions budgétaires, fiscalité de facture, interprétation de performance et propriété du compte |
| État d’indexation P1     | fermé par `editorialStatus: "ready-for-human-review"`                                                             |

### A2. Décision que le lecteur doit pouvoir prendre

À la fin du guide, le lecteur doit pouvoir :

1. distinguer le budget média des honoraires et des autres coûts ;
2. normaliser forfait, pourcentage, hybride et temps passé avec des hypothèses
   identiques ;
3. lire séparément le HT externe, le TTC décaissé, la TVA récupérable supposée
   et le coût économique connu ;
4. comparer 3, 6 et 12 mois ;
5. ne pas confondre CPC, CPA, CPL qualifié et CAC complet ;
6. contrôler le périmètre, les accès, la propriété et la sortie ;
7. choisir entre gestion interne, audit, indépendant, agence ou report ;
8. reconnaître les cas où l’offre publique Hagnéré Code est disproportionnée ou
   incompatible.

### A3. Réponse courte obligatoire

La réponse ne doit pas inventer une moyenne nationale. Elle part d’un constat
vérifiable : des pages vendeurs affichent des montants mensuels très différents,
mais leurs périmètres ne sont pas comparables. Le bon objet de comparaison est :

```text
coût complet à horizon identique
= média hors surcoût
+ coût réglementaire applicable
+ gestion
+ lancement
+ mesure
+ page, créations et outils
+ TVA non récupérable
+ temps interne valorisé
```

Le décaissement TTC reste une lecture séparée, car une TVA récupérable peut être
décaissée avant sa récupération.

### A4. Ce que le guide ne promet pas

- aucun prix moyen du marché français ;
- aucune représentativité statistique des pages tarifaires consultées ;
- aucune prévision de clics, prospects, clients ou chiffre d’affaires ;
- aucun retour sur investissement garanti ;
- aucun avis fiscal, comptable, contractuel ou juridique individualisé ;
- aucune recommandation universelle de rémunération ;
- aucune qualification commerciale inventée au bénéfice de Hagnéré Code.

### A5. Contrat de langage

- Définir un terme avant de l’abréger.
- Écrire « média » pour la dépense de diffusion, « gestion » pour les
  honoraires et « coût complet connu » pour leur combinaison documentée.
- Ne jamais utiliser « conversion » comme synonyme automatique de prospect ou
  de client.
- Écrire les hypothèses à côté des nombres.
- Utiliser « cas fictif », « compatibilité arithmétique » et « seuil » plutôt
  que « résultat attendu » ou « rentabilité assurée ».
- Dire « page vendeur publique » ou « prix propre du vendeur », jamais
  « marché » lorsque la méthode ne le permet pas.
- Distinguer « vérifié localement », « publié » et « indexable ».

## B — Contrat de réponse et architecture

### B1. Questions prioritaires

| Priorité | Question du lecteur                    | Réponse attendue                                                                           |
| -------: | -------------------------------------- | ------------------------------------------------------------------------------------------ |
|        1 | Combien coûte une gestion Google Ads ? | Prix publics hétérogènes, non comparables ; calcul complet obligatoire                     |
|        2 | Le média est-il inclus ?               | Pas implicitement ; deux lignes distinctes et compte facturé à contrôler                   |
|        3 | Quel modèle est le moins cher ?        | Cela dépend de l’assiette, du taux, du minimum, du plafond, de la charge et de la durée    |
|        4 | Quels coûts sont oubliés ?             | Lancement, mesure, page, créations, outils, fiscalité de trésorerie et temps interne       |
|        5 | Comment comparer des devis ?           | Même objectif, mêmes coûts communs, rémunération isolée, mêmes horizons                    |
|        6 | Quel indicateur suivre ?               | CPC, CPA, CPL et CAC répondent à quatre questions différentes                              |
|        7 | Qui doit posséder le compte ?          | L’annonceur conserve un accès administrateur direct et contrôle les actifs                 |
|        8 | Quand ne pas déléguer ?                | Base de mesure cassée, traitement commercial absent, trésorerie ou perte maximale inconnue |

### B2. Plan P1

1. réponse prix immédiate sans fausse moyenne ;
2. coût complet en sept familles ;
3. quatre modèles de rémunération ;
4. horizons 3, 6 et 12 mois ;
5. calculateur local ;
6. séparation CPC / CPA / CPL / CAC et scénario défavorable ;
7. périmètre vérifiable du devis ;
8. propriété du compte et réversibilité ;
9. décision proportionnée et mauvais cas d’usage Hagnéré Code.

### B3. Empreinte éditoriale propre

Le guide conserve le système visuel premium commun mais utilise une progression
spécifique au sujet :

- bandeau « normaliser avant de classer » en quatre contrôles ;
- tableaux de lignes de coût et de responsabilités ;
- calculateur de devis sur trois horizons ;
- cas de temps interne caché ;
- test de résistance à trois événements ;
- contrôle de sortie illustré ;
- CTA fondé sur un périmètre comparable, pas sur une promesse de résultat.

### B4. Conventions de publication P1

- entrée registre en brouillon ;
- route dédiée et métadonnées centralisées ;
- données structurées produites uniquement par
  `buildGuideStructuredData` : `Article` et `BreadcrumbList` ;
- FAQ visible rendue par le layout, sans balisage FAQ ajouté par la page ;
- image sociale produite en code, 1200 × 630 ;
- trois images Article visibles aux ratios 16:9, 4:3 et 1:1 ;
- aucun artefact à télécharger ;
- CTA principaux vers `/services/publicite-en-ligne` et
  `/demarrer-un-projet`.

## C — Inventaire interne, concurrence éditoriale et cannibalisation

### C1. Corpus interne consulté

| Élément                                      | Usage P1                                                   | Limite                                                            |
| -------------------------------------------- | ---------------------------------------------------------- | ----------------------------------------------------------------- |
| `docs/workflow-maitre-guides-4-passes.md`    | ordre des passes et interdiction de sauter un contrôle     | P1 n’autorise aucune conclusion P2 à P4                           |
| `docs/charte-qualite-guides.md`              | contrat reader-first, preuve, calcul et outil              | une conformité locale ne vaut pas publication                     |
| `docs/instructions-guide-de-qualite.md`      | portes SEO, rendu, images et données structurées           | le contrôle transversal reste à venir                             |
| `docs/regle-or-vigilance-seo-publication.md` | statut brouillon/noindex et registre                       | date réelle à réconcilier lors d’une éventuelle publication       |
| guide `valider-idee-saas-avant-developper`   | architecture visuelle premium et conventions de composants | aucun contenu éditorial repris                                    |
| service `publicite-en-ligne`                 | offre et prix propres Hagnéré Code                         | ne pas présenter comme marché ou preuve d’efficacité              |
| ancien dossier du même slug                  | inventaire adversarial seulement                           | contenu remplacé ; aucune affirmation héritée sans reverification |

### C2. Frontières avec les guides voisins

| Guide voisin                        | Question qu’il doit garder                           | Frontière du présent guide                             |
| ----------------------------------- | ---------------------------------------------------- | ------------------------------------------------------ |
| `budget-google-ads-pme`             | quel budget média une PME peut risquer et tester     | ici : coût de gestion et comparaison de devis          |
| `calculer-cout-par-lead-google-ads` | comment calculer et interpréter un coût par prospect | ici : CPL n’est qu’une ligne parmi quatre indicateurs  |
| `choisir-agence-google-ads`         | méthode de sélection d’une agence                    | ici : normalisation financière et contractuelle        |
| `audit-google-ads-que-verifier`     | contrôles techniques d’un compte                     | ici : prix, inclusions, accès et sortie                |
| `suivi-conversions-google-ads`      | implémentation et qualité de la mesure               | ici : coût de cette mesure et rôle dans la comparaison |
| `budget-google-ads-pme`             | perte maximale et dimensionnement d’un test          | ici : assiette commune et horizons de devis            |

### C3. Règles anti-cannibalisation appliquées

- Le titre et le H1 portent explicitement sur le prix de la **gestion**, pas sur
  le budget média optimal.
- Le calculateur compare des structures d’honoraires ; il ne recommande aucun
  budget publicitaire.
- La mesure et le CPL sont expliqués seulement pour éviter une décision de prix
  faussée.
- L’audit technique complet n’est pas reproduit.
- Le choix d’agence est ramené au périmètre et à la réversibilité, sans catalogue
  général de critères commerciaux.

## D — Recherche externe actuelle

Date de vérification des pages : **30 juillet 2026**.

### D1. Sources primaires Google, légales et CNIL

| ID   | Source                                                                                                               | Fait utilisable                                                                                                                                                              | Frontière                                                                                                                      |
| ---- | -------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| G-01 | [Budgets quotidiens](https://support.google.com/google-ads/answer/10486536?hl=fr)                                    | pour la plupart des campagnes, limite quotidienne jusqu’à 2 × le budget quotidien moyen et limite mensuelle généralement 30,4 ×                                              | exceptions et types de campagnes à vérifier                                                                                    |
| G-02 | [Budget total](https://support.google.com/google-ads/answer/10486938?hl=fr)                                          | budget total distinct sur une période fixée                                                                                                                                  | ne pas appliquer les règles du budget quotidien sans vérifier                                                                  |
| G-03 | [Coûts réglementaires](https://support.google.com/google-ads/answer/9750227?hl=fr)                                   | coût actuellement indiqué de 2 % pour les annonces diffusées en France                                                                                                       | vérifier date, zone et facture ; ne pas doubler                                                                                |
| G-04 | [TVA et facturation](https://support.google.com/google-ads/answer/2375370?hl=fr)                                     | traitement décrit selon l’entité Google qui sert le compte, notamment Google France SARL ou Google Ireland                                                                   | situation propre à vérifier ; aucune conclusion fiscale universelle                                                            |
| G-05 | [Associer un compte existant](https://support.google.com/google-ads/answer/7456530?hl=fr)                            | association sans perte d’historique ; le compte administrateur ne devient pas propriétaire par défaut d’un compte existant                                                   | contrôler les rôles réellement attribués                                                                                       |
| G-06 | [Propriété du compte](https://support.google.com/google-ads/answer/7456532?hl=fr)                                    | règles de propriété, dissociation et propriété lors de la création depuis un compte administrateur                                                                           | la propriété peut être transitive ; vérifier chaque niveau                                                                     |
| G-07 | [Actions de conversion](https://support.google.com/google-ads/answer/11461796?hl=fr)                                 | distinction principales/secondaires et usage dans les objectifs/enchères                                                                                                     | une action Google n’est pas automatiquement un prospect ou un client                                                           |
| G-08 | [Historique des modifications](https://support.google.com/google-ads/answer/2454137?hl=fr)                           | historique sur les deux dernières années                                                                                                                                     | ne prouve pas la pertinence des modifications                                                                                  |
| G-09 | [Facturation consolidée en France](https://support.google.com/google-ads/answer/2375371?hl=fr)                       | Google indique l’indisponibilité de la facturation consolidée pour les agences médias achetant au nom d’annonceurs en France et renvoie à la loi Sapin                       | ne tranche pas seul un montage comptable ou juridique particulier                                                              |
| J-01 | [Loi n° 93-122 du 29 janvier 1993, article 20](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000031011011) | achat d’espace par un intermédiaire dans le cadre d’un mandat écrit ; rémunérations détaillées ; avantages portés sur facture ; facture du vendeur communiquée à l’annonceur | texte légal, règle produit Google et montage contractuel restent trois niveaux distincts ; conseil professionnel si nécessaire |
| P-01 | [CNIL, FAQ cookies et traceurs, 29 avril 2026](https://www.cnil.fr/fr/cookies-et-autres-traceurs/regles/cookies/FAQ) | des traceurs de mesure publicitaire nécessitent généralement le consentement ; le refus doit être aussi facile que l’acceptation                                             | certaines exemptions de mesure d’audience existent sous conditions ; ne pas conclure à une conformité automatique              |

### D2. Échantillon de pages tarifaires publiques

Méthode : pages vendeurs accessibles publiquement, consultées à une date unique.
Cet échantillon sert uniquement à démontrer l’hétérogénéité et les risques de
périmètre. Il n’est ni aléatoire, ni exhaustif, ni pondéré ; il ne peut pas
produire une moyenne de marché.

| Vendeur                                                                     | Prix visible au 30/07/2026                                           | Éléments de périmètre visibles                                                                    | Usage dans le guide                                                                           |
| --------------------------------------------------------------------------- | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| [MS Web](https://www.ms-web.fr/creation-et-gestion-de-campagne-google-ads/) | création 149 € HT ; gestion à partir de 90 € HT/mois                 | optimisation annoncée deux fois par mois et rapport mensuel                                       | montrer une entrée de gamme publiée, sans généraliser                                         |
| [AdWorks](https://www.ad-works.fr/tarifs)                                   | lancement à partir de 750 € HT ; gestion à partir de 450 € HT/mois   | offre propre, page indiquant une absence d’engagement de durée                                    | montrer la séparation lancement/récurrent                                                     |
| [DP Medias](https://www.dpmedias.com/google-ads)                            | audit 500 € HT, création 250 € HT, gestion à partir de 450 € HT/mois | la page distingue aussi un audit gratuit « dans un format synthétique » d’un audit complet payant | montrer trois lignes distinctes et l’ambiguïté d’un même nom pour des profondeurs différentes |
| [Hagnéré Code](https://hagnere-code.ai/services/publicite-en-ligne)         | audit 1 500 € HT ; forfaits 1 800 €, 3 500 € et 4 500 € HT/mois      | seuils de budgets média et périmètres croissants ; honoraires fixes                               | transparence sur l’offre propre et détection du mauvais cas d’usage                           |

Une autre page publique consultée présentait deux montants mensuels divergents
dans des zones différentes. Elle n’a pas été utilisée dans le corps du guide :
ce conflit confirme l’obligation d’obtenir un devis écrit et daté, mais ne
permet pas de retenir un prix fiable.

### D3. Conclusions de recherche autorisées

1. Les pages publiques montrent une forte hétérogénéité de prix propres.
2. Les périmètres publiés diffèrent ; aucun classement direct n’est défendable.
3. Le lancement doit être isolé du récurrent.
4. Une assiette variable doit être définie contractuellement.
5. Le coût réglementaire France est une ligne séparée si la base média ne
   l’inclut pas.
6. TVA décaissée et TVA récupérable ne doivent pas être confondues.
7. Les accès et l’historique sont des actifs économiques du dispositif.
8. Un indicateur Google n’est pas un CAC complet sans données commerciales.
9. Deux offres ne sont comparables qu’après correction de leurs omissions de
   périmètre, de leur charge interne et de leurs coûts de sortie propres.
10. Le mot « audit » ne permet pas de comparer un diagnostic synthétique à un
    audit payant sans examiner livrables et profondeur.
11. La mesure publicitaire et l’achat d’espace ont des frontières juridiques
    propres qui ne se déduisent ni d’un devis commercial ni d’une règle
    d’interface Google.

### D4. Conclusions interdites

- « le marché facture X » ;
- « la plupart des agences facturent au pourcentage » ;
- « une agence coûte normalement entre X et Y » ;
- « un budget de X produit Y prospects » ;
- « le forfait est toujours mieux aligné » ;
- « un CPA inférieur à X est bon » ;
- « la TVA sera récupérée » ;
- « l’annonceur est toujours propriétaire » sans contrôle des rôles.

## E — Matrice d’information utile

### E1. Couverture par section

| Axe lecteur                         | Section | Preuve ou outil                               |
| ----------------------------------- | ------- | --------------------------------------------- |
| réponse directe au prix             | 01      | échantillon daté et limites de méthode        |
| média vs gestion                    | 01–02   | décomposition en sept familles                |
| coût réglementaire                  | 02      | source Google G-03 + champ séparé             |
| TVA et trésorerie                   | 02–05   | source G-04 + trois lectures du calculateur   |
| quatre rémunérations                | 03      | formules et clauses                           |
| horizons                            | 04–05   | résultats 3, 6 et 12 mois                     |
| budget quotidien                    | 04      | sources G-01/G-02                             |
| reproductibilité                    | 03–06   | entrées, formules, cas central et défavorable |
| CPC / CPA / CPL / CAC               | 06      | dénominateurs explicites + G-07               |
| périmètre de gestion                | 07      | matrice responsabilité/livrable               |
| historique                          | 07      | G-08                                          |
| consentement et mesure publicitaire | 07      | P-01 + responsabilités à écrire               |
| propriété, facturation et sortie    | 08      | G-05/G-06/G-09/J-01 + checklist               |
| mauvais cas d’usage                 | 09      | critères explicites, offre propre datée       |

### E2. Objections humaines anticipées

| Objection                                               | Réponse intégrée                                             |
| ------------------------------------------------------- | ------------------------------------------------------------ |
| « Je veux seulement un nombre »                         | nombre public immédiat puis explication de non-comparabilité |
| « Je récupère la TVA, donc elle ne compte pas »         | décaissement séparé du coût économique                       |
| « Le prestataire à 15 % est forcément plus cher »       | assiette, minimum, plafond et horizon recalculés             |
| « Mon CPA Google est bon »                              | l’action peut ne pas être un prospect qualifié ni un client  |
| « L’agence possède le compte parce qu’elle l’a créé »   | contrôle des rôles et des règles Google                      |
| « Beaucoup de changements = beaucoup de travail utile » | journal de décision et historique, pas volume artificiel     |
| « Hagnéré Code conviendra forcément »                   | seuil public, honoraires fixes et cas de refus explicités    |

### E3. Critères d’acceptation humaine P1

- La réponse arrive avant tout développement méthodologique.
- Le lecteur peut refaire chaque calcul avec une calculatrice.
- Les prix concurrents ne sont jamais utilisés comme statistique.
- Les hypothèses fiscales sont visibles et modifiables.
- Le média de base est explicitement hors surcoût pour éviter le double
  comptage.
- La base commune ne contient que les coûts réellement identiques ; les
  omissions, le temps interne et la sortie se normalisent offre par offre.
- Le cas défavorable est plus visible qu’une promesse commerciale.
- L’annonceur conserve un chemin de sortie.
- Le CTA indique aussi les cas de mauvais alignement.

## F — Registre des affirmations

| ID   | Affirmation P1                                                                                              | Source         | Portée / formulation                                                     | Emplacement        |
| ---- | ----------------------------------------------------------------------------------------------------------- | -------------- | ------------------------------------------------------------------------ | ------------------ |
| C-01 | les prix publics observés vont d’une gestion à partir de 90 € HT/mois jusqu’à plusieurs milliers d’euros    | pages D2       | échantillon daté, pas marché                                             | section 01         |
| C-02 | coût France actuellement indiqué à 2 %                                                                      | G-03           | annonces diffusées en France, date à vérifier                            | sections 02 et FAQ |
| C-03 | limite quotidienne pouvant atteindre 2 × et mensuelle 30,4 × pour la plupart des campagnes                  | G-01           | exceptions explicites                                                    | section 04 et FAQ  |
| C-04 | budget total de campagne distinct                                                                           | G-02           | période et règles propres                                                | section 04         |
| C-05 | facturation TVA différente selon l’entité Google                                                            | G-04           | renvoi au comptable, aucun avis fiscal                                   | section 02         |
| C-06 | association d’un compte existant sans perte d’historique                                                    | G-05           | rôle réel à contrôler                                                    | section 08         |
| C-07 | compte administrateur non propriétaire par défaut lors de l’association d’un compte existant                | G-05           | ne couvre pas les comptes créés depuis le manager                        | section 08         |
| C-08 | propriété possible lors de la création depuis un compte administrateur                                      | G-06           | contrôle de la hiérarchie requis                                         | section 08         |
| C-09 | actions principales et secondaires ont des usages distincts                                                 | G-07           | configuration et exceptions à vérifier                                   | section 06         |
| C-10 | historique des modifications sur deux ans                                                                   | G-08           | ne prouve pas la qualité                                                 | section 07         |
| C-11 | offre Hagnéré actuelle : audit 1 500 €, forfaits 1 800 / 3 500 / 4 500 €                                    | page Hagnéré   | prix propres, susceptibles d’évoluer                                     | sections 01 et 09  |
| C-12 | Starter Hagnéré publié à partir de 8 000 € de média mensuel                                                 | page Hagnéré   | critère de mauvais cas d’usage, pas seuil universel                      | section 09         |
| C-13 | résultats du cas central                                                                                    | calcul G       | scénario fictif reproductible                                            | sections 03–06     |
| C-14 | scénario défavorable à -19 350 € de couverture                                                              | calcul G       | hypothèses explicites, aucune prévision                                  | section 06         |
| C-15 | facturation consolidée indisponible pour les agences médias visées par l’aide Google en France              | G-09           | rôles de facturé, payeur et destinataire à écrire ; aucun avis universel | section 08         |
| C-16 | achat d’espace via intermédiaire encadré par un mandat écrit et des obligations de transparence             | J-01           | citation du droit positif sans déduire un montage universel              | section 08         |
| C-17 | traceurs de mesure publicitaire généralement soumis au consentement et refus aussi facile que l’acceptation | P-01           | exemptions éventuelles à vérifier ; aucune conformité automatique        | section 07         |
| C-18 | DP Medias distingue audit payant complet et audit gratuit synthétique                                       | page DP Medias | comparaison de profondeur, pas jugement de qualité                       | section 01         |

### F1. Affirmations commerciales volontairement absentes

- nombre de clients gérés ;
- montant de média historiquement piloté ;
- délai moyen d’obtention de résultats ;
- taux d’amélioration des conversions ;
- certification ou partenariat non vérifié ;
- score d’avis ou note de satisfaction ;
- disponibilité ou délai de réponse non contractualisé.

## G — Calculs, scénarios et tests

### G1. Entrées du cas central

#### Base commune mensuelle

| Entrée                         |     Valeur |
| ------------------------------ | ---------: |
| Média hors coût réglementaire  | 5 000 € HT |
| Part diffusée en France        |      100 % |
| Coût réglementaire saisi       |        2 % |
| Coût réglementaire calculé     |   100 € HT |
| Autres coûts externes mensuels |   250 € HT |
| Coût interne horaire           |     50 €/h |

#### Base commune initiale

| Entrée                    |     Valeur |
| ------------------------- | ---------: |
| Mesure, page et créations | 2 000 € HT |

#### Volumes mensuels fictifs

| Entrée                                 |  Valeur |
| -------------------------------------- | ------: |
| Clics                                  |   1 000 |
| Actions principales                    |      50 |
| Prospects qualifiés                    |      20 |
| Nouveaux clients attribués             |       4 |
| Marge contributive par client attribué | 2 500 € |
| Fenêtre fixe de marge par client       | 12 mois |

#### Modèles

| Modèle      |                Lancement |                              Récurrent |
| ----------- | -----------------------: | -------------------------------------: |
| Forfait     |                 750 € HT |                          900 € HT/mois |
| Pourcentage |                 900 € HT |        15 % de 5 000 € = 750 € HT/mois |
| Hybride     |                 800 € HT | 500 € + 8 % de 5 000 € = 900 € HT/mois |
| Temps passé | 8 h × 100 €/h = 800 € HT |       10 h × 100 €/h = 1 000 € HT/mois |

Dans le cas central, les ajustements de périmètre et les trois sommes de sortie
à 3, 6 et 12 mois sont nuls pour les quatre offres. Le temps interne propre à
chacune est fixé à 8 heures au lancement puis 3 heures par mois. Les modèles au
pourcentage et hybride utilisent ici chacun une assiette de 5 000 €, sans
minimum ni plafond ; ces champs restent indépendants dans le moteur. `0`
signifie « aucun plafond ».

Hypothèse de trésorerie du cas : TVA uniforme 20 %, récupération saisie 100 %.
Cette hypothèse simplifie le scénario et ne décrit pas nécessairement les
factures réelles.

### G2. Formules du moteur

Pour un horizon `m` :

```text
surcoût_mensuel
= média_mensuel × part_France × taux_surcoût

gestion_variable
= borner(
    assiette_propre_au_devis × taux
    [+ socle si hybride],
    minimum,
    plafond si plafond > 0
  )

externe_HT
= autres_externes_initiaux
+ lancement_du_modèle
+ mise_à_niveau_initiale_du_périmètre
+ sommes_dues_à_la_sortie_pour_m
+ m × (
     média_mensuel
     + surcoût_mensuel
     + autres_externes_mensuels
     + gestion_mensuelle_du_modèle
     + mise_à_niveau_mensuelle_du_périmètre
   )

TVA_décaissée
= externe_HT × taux_TVA

TVA_récupérable
= TVA_décaissée × taux_de_récupération

temps_interne
= (heures_initiales_de_l_offre
   + m × heures_mensuelles_de_l_offre)
  × coût_horaire

coût_économique_connu
= externe_HT + TVA_décaissée − TVA_récupérable + temps_interne
```

### G3. Résultats vérifiables

| Modèle      | 3 mois HT externe | 3 mois TTC | 3 mois coût connu | 6 mois coût connu | 12 mois coût connu |
| ----------- | ----------------: | ---------: | ----------------: | ----------------: | -----------------: |
| Forfait     |          21 500 € |   25 800 € |          22 350 € |          41 550 € |           79 950 € |
| Pourcentage |          21 200 € |   25 440 € |          22 050 € |          40 800 € |           78 300 € |
| Hybride     |          21 550 € |   25 860 € |          22 400 € |          41 600 € |           80 000 € |
| Temps passé |          21 850 € |   26 220 € |          22 700 € |          42 200 € |           81 200 € |

Contrôle manuel du forfait à trois mois :

```text
surcoût mensuel = 5 000 × 100 % × 2 % = 100
externe HT = 2 000 + 750 + 3 × (5 000 + 100 + 250 + 900)
            = 21 500
TVA = 21 500 × 20 % = 4 300
TTC = 25 800
temps interne = (8 + 3 × 3) × 50 = 850
coût connu = 21 500 + 4 300 − 4 300 + 850 = 22 350
```

### G4. Indicateurs du cas central

Sur trois mois, média et surcoût chargé = `3 × 5 100 = 15 300 € HT`.

```text
CPC média chargé = 15 300 ÷ 3 000 = 5,10 € HT
CPA média chargé = 15 300 ÷ 150 = 102 € HT
CPL qualifié média chargé = 15 300 ÷ 60 = 255 € HT
CAC complet connu = 22 350 ÷ 12 = 1 862,50 €

marge complète des cohortes sur une fenêtre fixe de 12 mois
= 12 × 2 500 = 30 000 €
couverture de cohorte = 30 000 − 22 350 = 7 650 €

seuil de coût complet par prospect qualifié
= 30 000 ÷ 60 = 500 €

coût complet connu par prospect qualifié
= 22 350 ÷ 60 = 372,50 €

écart au seuil = 500 − 372,50 = 127,50 €
```

Le mot « couverture de cohorte » est retenu : la marge complète de chaque
client acquis est rapprochée des coûts, même si elle se réalise après l’horizon
de 3, 6 ou 12 mois. Ce n’est ni un retour sur investissement complet, ni une
prévision de trésorerie, et le calcul ne couvre pas les coûts non saisis. Les
volumes sont des moyennes mensuelles constantes dès le premier mois ; aucune
montée en charge ni saisonnalité n’est modélisée.

### G5. Scénario défavorable

Modification :

- un nouveau client mensuel au lieu de quatre ;
- marge contributive de 1 000 € sur la même fenêtre fixe de douze mois au lieu
  de 2 500 € ;
- tous les coûts inchangés.

Résultat à trois mois sur le forfait :

```text
marge contributive = 3 × 1 000 = 3 000 €
couverture = 3 000 − 22 350 = −19 350 €
CAC complet connu = 22 350 ÷ 3 = 7 450 €
seuil par prospect qualifié = 3 000 ÷ 60 = 50 €
coût connu par prospect qualifié = 372,50 €
écart au seuil = 50 − 372,50 = −322,50 €
```

### G6. Contrats de test du moteur

Les tests unitaires doivent vérifier :

1. quatre modèles et trois horizons ;
2. scénario forfaitaire exact à trois mois ;
3. séparation CPC / CPA / CPL / CAC ;
4. seuil et couverture reproductibles ;
5. assiettes contractuelles du pourcentage et de l’hybride distinctes entre
   elles et du média ;
6. TTC distinct du coût économique si TVA récupérable ;
7. TVA non récupérable intégrée au coût ;
8. dénominateur nul rendu indisponible, jamais infini affiché ;
9. état `unavailable` distinct d’un seuil négatif ;
10. minimum et plafond contractuels, avec `0 = aucun plafond` ;
11. ajustements de périmètre et temps interne propres à chaque offre ;
12. acceptation d’un taux d’honoraires supérieur à 100 %, qui n’est pas une
    part intrinsèquement bornée ;
13. rejet des nombres négatifs, infinis, parts intrinsèques supérieures à
    100 % et valeurs finies extrêmes ;
14. fenêtre de marge comprise entre 1 et 120 mois ;
15. visibilité du scénario défavorable ;
16. cas central P1 inchangé lorsque les nouveaux ajustements valent zéro ;
17. trois coûts de sortie propres à chaque offre, associés respectivement aux
    horizons 3, 6 et 12 mois, sans contamination d’un autre horizon ou modèle.

Le test de rendu doit également vérifier :

- les quatre modèles ;
- les trois horizons ;
- l’absence de formulaire envoyé ;
- l’information bornée « calculateur : aucun envoi » ;
- la limite fiscale ;
- la phrase de non-prédiction ;
- une légende de tableau accessible ;
- des labels explicitement associés ;
- une lecture mobile complète en cartes ;
- une région de tableau focusable au grand écran ;
- l’absence d’annonce `aria-live` générique et répétitive.

## H — Journal des quatre passes et état de contrôle

### H0. Gel de la mission

| Élément                               | Valeur                                                            |
| ------------------------------------- | ----------------------------------------------------------------- |
| Worktree                              | `/Users/quentinhagnere/Developpement/Hagnere-Code-wt-guide-reset` |
| Branche observée au départ            | `codex/three-guide-quality-loop`                                  |
| Commit de base                        | `760dda103000d564f103cf1d6ac21609c46e1c0b`                        |
| Slug réservé                          | `prix-gestion-google-ads`                                         |
| Passe autorisée                       | P1 uniquement                                                     |
| Commit / push autorisé pour cet agent | non                                                               |

### H1. P1 — Création

Agent : `/root/g2_p1_creation`.

#### Fichiers produits ou modifiés

- `src/app/guides/prix-gestion-google-ads/page.tsx`
- `src/app/guides/prix-gestion-google-ads/opengraph-image.tsx`
- `src/components/guides/GoogleAdsQuoteComparator.tsx`
- `src/components/guides/GoogleAdsQuoteComparator.test.tsx`
- `src/lib/google-ads-quote-comparison.ts`
- `src/lib/google-ads-quote-comparison.test.ts`
- entrée brouillon dans `src/lib/guides.ts`
- attente du registre dans `src/lib/guides.test.ts`
- icône réservée dans `src/components/guides/GuidesHubPage.tsx` ; le guide
  demeure absent car le hub lit `PUBLISHED_GUIDES`
- retrait du seul slug reconstruit dans
  `src/lib/legacy-guide-redirects.ts` et ajustement précis de son test
- trois images dans `public/guides/prix-gestion-google-ads/`
- présent dossier
- manifeste `docs/research/manifests/prix-gestion-google-ads-p1.sha256`

#### Visuels ImageGen

Le skill ImageGen a été utilisé avec trois appels distincts. Les originaux sont
conservés dans :

`/Users/quentinhagnere/.codex/generated_images/019fb174-8eeb-7580-9466-51b9481c6308/`

| Article | Original                            | Sortie WebP                              | Contrôle                                             |
| ------- | ----------------------------------- | ---------------------------------------- | ---------------------------------------------------- |
| 16:9    | `call_Ivm0L06hFNR35PYDnTcod0Fw.png` | `article-prix-ads-16x9.webp`, 1600 × 900 | quatre colonnes abstraites, aucun texte ni logo      |
| 4:3     | `call_DmfZGsAfMq6vLL6bO2GcV9c9.png` | `article-prix-ads-4x3.webp`, 1200 × 900  | quatre chemins et coût commun, aucun texte ni logo   |
| 1:1     | `call_jWGNrwFT1Oslu4QDcl3si74U.png` | `article-prix-ads-1x1.webp`, 1200 × 1200 | actifs, temps et seuil adverse, aucun logo ni marque |

Intentions des prompts :

1. décideur comparant quatre offres sur une table commune ;
2. flux séparant média, gestion, lancement, mesure, création et temps ;
3. registre central, actifs, calcul et risque de dépassement.

Palette : bleu nuit, indigo, papier ivoire, vert discret et accent ambre.
Les trois sorties ont été inspectées après conversion : cadrage, lisibilité,
absence de texte généré et cohérence éditoriale jugés acceptables pour P1.

#### Corrections de contrôle intégrées pendant P1

- Le champ média a été renommé « budget média mensuel hors coût
  réglementaire » : le moteur ajoute ensuite le surcoût France, ce qui évite
  d’interpréter la base comme une facture déjà chargée.
- La TVA uniforme est qualifiée comme hypothèse commune simplificatrice ; le
  guide demande un contrôle facture par facture.
- La catégorie a été alignée sur `Google Ads & acquisition`.
- L’échantillon tarifaire est présenté comme daté, non statistique et à
  périmètres non comparables.
- La facturation France a été rendue opérationnelle : annonceur facturé, payeur,
  justificatifs et factures prestataires sont séparés sans déduire un montage
  juridique universel.
- La zone dynamique massive du calculateur a été remplacée par une annonce
  courte ; chaque champ invalide affiche désormais une explication liée et une
  bordure perceptible.
- Les quatre barres décoratives de l’image sociale ont la même longueur afin de
  ne pas simuler un classement chiffré.

#### Validation P1 exécutée

| Contrôle                               | Commande ou méthode                                                                                   | Résultat final                                                                            |
| -------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| moteur, interface, registre et schémas | `npx vitest run --maxWorkers=2 …`                                                                     | 4 fichiers, 23 tests, 23 réussites                                                        |
| suite globale                          | `npm test`                                                                                            | 75 fichiers, 430 tests, 430 réussites                                                     |
| SEO environnement courant              | `npm run check:seo`                                                                                   | 33 fichiers, 172 tests, 172 réussites                                                     |
| SEO production                         | `NODE_ENV=production NEXT_PUBLIC_ENV=production npm run check:seo`                                    | 33 fichiers, 172 tests, 172 réussites                                                     |
| TypeScript                             | `npx tsc --noEmit`                                                                                    | aucune erreur                                                                             |
| lint global                            | `npm run lint`                                                                                        | aucune erreur                                                                             |
| build de production                    | `NODE_OPTIONS=--max-old-space-size=8192 NEXT_PUBLIC_ENV=production NODE_ENV=production npm run build` | compilation, prérendu, TypeScript et postbuild réussis                                    |
| artefacts SEO                          | `scripts/verify-search-indexing-artifact.mjs` via postbuild                                           | 44 URL sitemap, 27 liens llms, 44 pages, 3 temps de lecture et 76 blocs JSON-LD contrôlés |
| HTML servi                             | `next start -p 3102`, requête locale et script de mesure                                              | HTTP 200 ; 4 398 mots visibles ; 22 minutes                                               |
| indexation du brouillon                | inspection du HTML, du sitemap et du hub servis                                                       | `noindex`; canonical propre ; absent du sitemap et du hub                                 |
| données structurées                    | inspection du HTML servi                                                                              | un `Article`, un `BreadcrumbList`, aucun `FAQPage`                                        |
| contenu essentiel                      | inspection du HTML servi                                                                              | H1, FAQ visible, confidentialité locale, deux CTA et images présents                      |
| images                                 | `identify`, poids et inspection visuelle                                                              | 1600 × 900, 1200 × 900, 1200 × 1200 ; 76 à 92 Kio                                         |
| garde-fous lexicaux                    | recherche ciblée dans les fichiers P1                                                                 | aucun artefact téléchargeable, schéma interdit ou faux cas client                         |

Le premier build a correctement bloqué un temps de lecture déclaré à
24 minutes pour 4 398 mots visibles, estimés à 22 minutes. Le registre a été
corrigé à 22, puis le build complet et le postbuild ont été relancés avec
succès.

Le contrôle visuel dans le navigateur intégré a été tenté selon le skill dédié,
mais le backend `iab` n’était pas disponible dans cette session. Le diagnostic
autorisait uniquement un Chrome utilisateur et le skill interdisait de changer
de backend comme contournement. Aucun BAT navigateur n’est donc revendiqué en
P1 ; le contrôle HTML servi et l’inspection séparée des trois images sont les
preuves disponibles.

**État agent P1 : prêt pour revue de l’orchestrateur.** Cela n’est ni une
validation orchestrateur, ni une autorisation de lancer P2.

#### G1 — Validation orchestrateur du 30 juillet 2026

Verdict : **GO_PASSE_2**.

- P0 : 0 ;
- P1 : 0 ;
- P2 transmis aux passes suivantes : titre SEO à naturaliser sans perdre
  l’intention, annonce dynamique du calculateur à rendre réellement utile ou à
  retirer, et contrôle final du sommaire horizontal après redimensionnement.

Contrôles indépendants rejoués par l’orchestrateur sur le manifeste P1 :

- manifeste P1 : 15/15 fichiers vérifiés avant l’ajout du présent verdict ;
- suite globale : 430/430 ;
- SEO courant : 172/172 ;
- SEO avec `NEXT_PUBLIC_ENV=production` : 172/172 ;
- ESLint : réussi ;
- TypeScript avec `npx tsc --noEmit` : réussi ;
- `git diff --check` : réussi ;
- build production : 61 routes, postbuild réussi avec 44 URL de sitemap,
  27 liens `llms.txt`, 44 pages, 3 temps de lecture et 76 blocs JSON-LD ;
- rendu réel : H1 unique, clair/sombre, petit paysage et dix largeurs de
  320 à 1 600 px sans débordement du document ;
- trois visuels Article ouverts et contrôlés ;
- calculs centraux et défavorables refaits manuellement ;
- prix vendeurs et prix Hagnéré cités recontrôlés sur les pages publiques
  datées.

Ce GO autorise uniquement la passe contradictoire P2. Il ne vaut ni
publication, ni indexation, ni validation P3/P4 ou transversale.

### H2. P2 — Enrichissement et vérification

Agent distinct : `/root/g1_p4_antipasse`, réaffecté explicitement par
l’orchestrateur à la passe 2 de ce seul guide.

#### H2.1. Entrées et méthode

- reprise du dossier P1 et du verdict `GO_PASSE_2` avant toute correction ;
- lecture complète du moteur, de ses tests, du composant, de sa page, de
  l’image sociale et des affirmations de la page service ;
- lecture du prompt n° 2 « Enrichissement et vérification » : le loader de
  dépendances documentaires est resté bloqué, puis a été abandonné ; le DOCX a
  été extrait en lecture seule avec `textutil` (798 lignes). Les consignes
  compatibles ont été appliquées : chirurgie plutôt que réécriture, sources
  actuelles, contradictions, recalcul, pédagogie, anti-hallucination et rapport
  de modifications. Les quotas, promesses de classement, schémas interdits et
  artifices SEO contraires à la gouvernance du dépôt ont été écartés ;
- contre-vérification des aides Google, de Légifrance, de la CNIL et des pages
  vendeurs au 30 juillet 2026 ;
- recalcul indépendant des cas central et défavorable, puis ajout de contrats
  de test adversariaux.

Le manifeste P1 avait été vérifié 15/15 par l’orchestrateur avant son verdict
G1. Il est normalement invalidé par la présente passe et par les intégrations
partagées intervenues depuis. Il demeure une preuve historique du gel P1 ; le
manifeste P2 fige le nouveau candidat sans réécrire cette histoire.

#### H2.2. Contradictions trouvées et corrections

| Gravité avant correction | Contradiction                                                                           | Correction P2                                                                                                            |
| ------------------------ | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| P1                       | un dénominateur nul produisait le badge « Seuil non couvert »                           | état ternaire `covered` / `not-covered` / `unavailable`, avec libellé et test dédiés                                     |
| P1                       | des entrées finies extrêmes pouvaient produire `Infinity` tout en gardant `valid: true` | bornes raisonnables, garde récursive des résultats dérivés et tests d’entrée extrême et de division non finie            |
| P1                       | une même assiette alimentait pourcentage et hybride                                     | deux assiettes contractuelles indépendantes                                                                              |
| P1                       | le texte demandait minimum et plafond sans les calculer                                 | minimum et plafond effectifs pour les deux modèles variables ; `0 = aucun plafond` ; plage inversée rejetée              |
| P1                       | des coûts de mesure, page ou création supposés communs pouvaient inverser le classement | base strictement commune et ajustements externes initiaux/mensuels par offre                                             |
| P1                       | le temps interne était artificiellement identique                                       | heures initiales et mensuelles propres à chaque offre, avec coût horaire commun                                          |
| P1                       | l’arrêt à un horizon ignorait préavis et frais                                          | somme de sortie HT propre à chaque offre incluse dans chacun des horizons                                                |
| P1                       | la marge par client paraissait se réaliser dans l’horizon lu                            | fenêtre fixe de cohorte de 1 à 120 mois, indépendante de l’horizon, et frontière explicite avec la trésorerie            |
| P1                       | les volumes étaient multipliés par 3/6/12 sans annoncer l’absence de rampe              | hypothèse de moyenne mensuelle constante, sans montée en charge ni saisonnalité, et renvoi à un scénario mois par mois   |
| P1                       | CPC/CPA/CPL incluaient le surcoût France sans le signaler                               | vocabulaire « média chargé » dans l’outil, le tableau, les exemples et l’explication de l’écart possible avec Google Ads |
| P1                       | les labels et aides vivaient dans un unique `<label>`                                   | `label[for]`, `input[id]`, aide et erreur externes reliées par `aria-describedby`                                        |
| P1                       | l’annonce `aria-live` générique ne portait aucune information nouvelle                  | suppression                                                                                                              |
| P1                       | les résultats décisifs restaient hors écran sur mobile                                  | cartes complètes par modèle et par horizon sous `xl`, tableau compact focusable au grand écran                           |
| P1                       | environ quarante champs formaient un mur de formulaire                                  | divulgation progressive par offre, premier forfait ouvert et ajustements secondaires à zéro par défaut                   |
| P1                       | H1 visible et `Article.headline` divergeaient                                           | H1 aligné exactement sur `guide.heroTitle`                                                                               |
| P1                       | le bénéfice CTA promettait un rattachement automatique des actifs                       | formulation bornée : propriété, accès et actifs inventoriés au devis                                                     |
| P1                       | « audit » mélangeait chez DP Medias un audit payant et un format gratuit synthétique    | distinction explicite par profondeur et livrables                                                                        |
| P1                       | la loi Sapin et le consentement des traceurs restaient indirects                        | article 20 Légifrance et FAQ CNIL ajoutés, avec frontières entre droit, règle Google et conseil individualisé            |

Le cas central conserve exactement ses résultats P1 lorsque les nouveaux
ajustements valent zéro. Le taux d’honoraires variable n’est plus arbitrairement
borné à 100 % : une part France ou récupérable reste bornée à 100 %, tandis
qu’un taux contractuel peut dépasser 100 % d’une petite assiette dans la limite
technique documentée de l’outil.

#### H2.3. Fichiers P2

- `docs/research/prix-gestion-google-ads.md`
- `src/app/guides/prix-gestion-google-ads/page.tsx`
- `src/app/guides/prix-gestion-google-ads/content-quality.test.ts`
- `src/components/guides/GoogleAdsQuoteComparator.tsx`
- `src/components/guides/GoogleAdsQuoteComparator.test.tsx`
- `src/lib/google-ads-quote-comparison.ts`
- `src/lib/google-ads-quote-comparison.test.ts`
- manifeste `docs/research/manifests/prix-gestion-google-ads-p2.sha256`

L’image sociale et les trois WebP P1 sont inchangés, mais sont inclus dans le
manifeste P2 afin de figer la totalité du candidat guide autorisé. Aucun fichier
partagé, registre, redirection, hub, configuration Git ou artefact de build n’a
été modifié par cet agent.

#### H2.4. Contrôles P2

| Contrôle                                  | Résultat                                                             |
| ----------------------------------------- | -------------------------------------------------------------------- |
| moteur + rendu + contrat éditorial ciblés | 3 fichiers, 27 tests, 27 réussites                                   |
| TypeScript                                | `npx tsc --noEmit`, réussi                                           |
| ESLint ciblé sur 7 fichiers TS/TSX        | réussi                                                               |
| Prettier ciblé sur les 7 fichiers édités  | réussi                                                               |
| `git diff --check` ciblé                  | réussi                                                               |
| calcul central                            | résultats P1 inchangés                                               |
| scénario défavorable                      | couverture de cohorte −19 350 €, statut non couvert                  |
| dénominateur nul                          | statut non calculable, jamais non couvert                            |
| extrêmes                                  | entrée `Number.MAX_VALUE` et résultat unitaire non fini rejetés      |
| sources                                   | Google, Légifrance, CNIL et pages vendeurs recontrôlés au 30/07/2026 |
| schémas et téléchargements interdits      | absents du périmètre public P2                                       |

Le build global, la publication, l’indexation, le commit, le push et le BAT
navigateur final étaient hors périmètre de cet agent et ne sont pas revendiqués.
Le sommaire a été raccourci et le calculateur dispose d’une lecture mobile
complète ; leur contrôle visuel réel reste le travail du gate orchestrateur.

#### H2.5. Résidu transmis à l’orchestrateur

- P0 : 0 ;
- P1 : 0 ;
- P2 : 1 — le titre SEO du registre partagé reste
  `Prix gestion Google Ads : comparer 4 modèles en 2026`. Sa naturalisation
  doit être réconciliée sous verrou d’intégration, sans override local ni
  modification hors périmètre. Proposition non contraignante pour P3 :
  `Prix de gestion Google Ads : comparez 4 modèles en 2026`.

#### H2.6. Reprise après contrôle G2 provisoire

Le contrôle orchestrateur a confirmé le fond P2 — manifeste 11/11, 27 tests,
ESLint, TypeScript, sources et calculs — mais a demandé une reprise pour un
défaut de formatage sur sept fichiers. Prettier a été appliqué uniquement à ces
sept fichiers autorisés. Deux assertions qui lisaient littéralement les retours
à la ligne du code source ont alors été rendues stables au formatage par
normalisation des espaces ; le contenu public et le comportement du
calculateur n’ont pas été modifiés par cette reprise.

Les 27 tests, ESLint ciblé, TypeScript, Prettier ciblé et
`git diff --check` ciblé ont ensuite été relancés avec succès. Le manifeste P2
a été régénéré après ces ultimes changements et revérifié 11/11.

**État agent P2 : `READY_FOR_ORCHESTRATOR_G2_RECHECK`.** Ce statut demande un
nouveau contrôle indépendant de l’orchestrateur. Il n’autorise ni P3, ni
publication.

#### G2 — Validation orchestrateur du 30 juillet 2026

Verdict : **GO_PASSE_3**.

- P0 : 0 ;
- P1 : 0 ;
- P2 transmis à P3 : naturaliser le titre SEO partagé sans perdre l’intention
  de recherche.

L’orchestrateur a relu le guide jusqu’à sa décision finale, contrôlé les
frontières entre coût média, honoraires, coût réglementaire, TVA, coût interne,
marge de cohorte et trésorerie, puis vérifié que les exemples restent
explicitement fictifs et reproductibles. Les limites juridiques, fiscales,
contractuelles et relatives au consentement ne sont pas transformées en conseil
individualisé. Le calculateur compare bien quatre offres sur une base commune
et autorise des ajustements propres à chaque devis sans changer les résultats
du cas central lorsque ces ajustements valent zéro.

Contrôles indépendants rejoués sur le candidat P2 immobile :

- manifeste P2 : 11/11 fichiers vérifiés ;
- moteur, composant et contrat éditorial : 27/27 tests ;
- ESLint ciblé : réussi ;
- TypeScript avec `npx tsc --noEmit` : réussi ;
- Prettier ciblé : réussi ;
- `git diff --check` ciblé : réussi ;
- absence de modification des fichiers partagés par l’agent P2 confirmée ;
- aucun téléchargement tableur, schéma FAQ ou promesse de performance ajouté.

Le premier gel P2 annoncé après la reprise de formatage était prématuré :
l’orchestrateur a constaté sept empreintes invalides et a maintenu le NO GO.
L’agent P2 a ensuite régénéré le manifeste en toute dernière écriture ; le
second contrôle a confirmé les 11 empreintes. Ce GO autorise uniquement le
polish rédactionnel P3 par un agent distinct. Il ne vaut ni validation P4, ni
BAT, ni publication, ni indexation.

### H3. P3 — Polish rédactionnel

**Autorisation annulée avant toute édition.** Deux audits P3 en lecture seule
ont été lancés sur le candidat G2. Le contrôle « chiffres et CTR » a découvert
un défaut de modèle hérité de P2 : chaque offre ne dispose que d’un seul coût de
sortie, ensuite ajouté sans distinction aux comparaisons à 3, 6 et 12 mois.
Pourtant, un préavis, un engagement ou des frais de rupture peuvent produire
trois montants différents selon la date d’arrêt.

L’orchestrateur a relu directement le moteur et confirmé que
`exitCostAtHorizonHT` était ajouté dans la boucle des trois horizons. Il a donc
interrompu P3 avant la moindre modification. Le manifeste G2 vérifiait bien
11/11 fichiers au moment de cette décision ; il devient une preuve historique
du défaut, pas un candidat autorisé pour P3.

Verdict : **RETOUR_PASSE_2**.

La reprise P2 doit :

- remplacer le coût de sortie unique par un montant distinct à 3, 6 et 12 mois
  pour chaque offre ;
- prouver par les tests qu’un coût saisi à un horizon n’affecte pas les deux
  autres ;
- adapter les champs, les résultats et l’explication sans modifier les autres
  calculs validés ;
- borner la statistique de confidentialité au calculateur, et non à tous les
  scripts éventuels de la page ;
- intégrer dans son rapport les autres ambiguïtés chiffrées signalées par
  l’audit P3, sans entreprendre le polish rédactionnel.

Un nouveau manifeste P2 et un nouveau verdict G2 sont obligatoires avant de
relancer P3 avec un agent distinct.

### H2R. Reprise P2 après `RETOUR_PASSE_2`

Agent : `/root/g1_p4_antipasse`, réaffecté par l’orchestrateur à la correction
du candidat P2. Le manifeste G2 qui vérifiait 11/11 avant l’inscription du
retour reste une preuve historique ; il n’est pas présenté comme le gel de
cette reprise.

#### H2R.1. Correction du modèle

Le champ unique `exitCostAtHorizonHT` a été supprimé des entrées et des
résultats. Chaque offre possède désormais trois entrées explicites :

- somme due si l’offre est arrêtée à 3 mois ;
- somme due si l’offre est arrêtée à 6 mois ;
- somme due si l’offre est arrêtée à 12 mois.

Dans la boucle du moteur, le résultat de l’horizon `m` lit uniquement la somme
de sortie associée à `m`. Le résultat de chaque horizon expose ce montant sous
`exitCostHT`, à côté du décaissement externe, de la TVA, du coût interne et du
coût connu. Les douze valeurs initiales restent à zéro : le cas central ne
change donc pas.

Le composant n’affiche pas douze champs sans hiérarchie. Chaque offre conserve
sa divulgation progressive et contient une matrice accessible « arrêt à 3 / 6 /
12 mois » avec :

- un `fieldset` et une légende propres à l’offre ;
- un label explicitement associé à chaque champ ;
- une aide commune expliquant préavis, engagement restant et frais ;
- une erreur liée au champ pour une valeur non finie, négative ou hors limite ;
- le coût de sortie correspondant dans chaque carte mobile et chaque colonne
  du tableau de résultats.

#### H2R.2. Ambiguïtés chiffrées corrigées

- la statistique de confidentialité est bornée au calculateur :
  `Saisies du calculateur / Non transmises` ;
- les statistiques affichent `3 · 6 · 12 mois` et
  `Moyenne de marché / Non utilisée` ;
- la fourchette publique observée commence à 90 € HT/mois et va jusqu’à
  plusieurs milliers d’euros, sans extrapolation à « quelques dizaines » ;
- les trois prix DP Medias cités et la gestion à 450 €/mois portent la mention
  HT ; l’échantillon reste explicitement non représentatif ;
- le lancement est décrit comme un coût ponctuel inclus une fois dans chaque
  comparaison, sans notion d’amortissement ;
- le coût interne est écrit `50 €/h`, tous les honoraires fictifs sont
  explicitement HT, le tableau porte `Gestion mensuelle HT` et le test de
  budget indique `budget média mensuel HT de 5 000 à 10 000 €` ;
- l’exemple de charge interne rend visibles les cinq données du calcul :
  300 € HT/mois, 18 h/mois, 55 €/h, 990 €/mois et une différence de
  690 €/mois ;
- CPC, CPA et CPL média chargé sont affichés HT. Le CAC complet connu ne reçoit
  pas ce suffixe, car il peut inclure TVA non récupérable et temps interne ;
- l’aide de la fenêtre de marge explique qu’une modification de la fenêtre ne
  recalcule pas la marge par client : les deux entrées doivent être adaptées ;
- les deux citations commerciales internes utilisent
  `/services/publicite-en-ligne` sans nouvel onglet ; le seuil Starter de
  8 000 € est cliquable et daté du 30 juillet 2026 ;
- la promesse de durée non mesurée est retirée au profit de
  `Contrôle rapide avant signature` ;
- le CTA mobile décrit son action réelle : `Décrire mon périmètre`.

Aucun schéma `FAQPage` ou `HowTo`, aucun téléchargement et aucune promesse de
performance n’ont été ajoutés. Le polish P3 général, le titre SEO partagé, la
méta-description et les dates de publication restent hors de cette reprise.

#### H2R.3. Recalculs et contrats adversariaux

Le cas central a été refait séparément du moteur avec les formules de la section
G. Les coûts connus restent strictement :

| Modèle      |   3 mois |   6 mois |  12 mois |
| ----------- | -------: | -------: | -------: |
| Forfait     | 22 350 € | 41 550 € | 79 950 € |
| Pourcentage | 22 050 € | 40 800 € | 78 300 € |
| Hybride     | 22 400 € | 41 600 € | 80 000 € |
| Temps passé | 22 700 € | 42 200 € | 81 200 € |

Le scénario défavorable conserve une couverture de cohorte de −19 350 € à
trois mois. Les recalculs d’isolation donnent :

- sortie forfait de 450 € à 3 mois : écarts `+450 / 0 / 0` ;
- sortie pourcentage de 800 € à 6 mois : écarts `0 / +800 / 0` ;
- sortie hybride de 720 € à 12 mois : écarts `0 / 0 / +720`.

Les tests vérifient en plus que ces écarts ne contaminent aucun autre modèle et
que les valeurs négatives, infinies ou supérieures à la limite monétaire sont
rejetées.

#### H2R.4. Fichiers et contrôles

Fichiers édités :

- `docs/research/prix-gestion-google-ads.md` ;
- `src/app/guides/prix-gestion-google-ads/page.tsx` ;
- `src/app/guides/prix-gestion-google-ads/content-quality.test.ts` ;
- `src/components/guides/GoogleAdsQuoteComparator.tsx` ;
- `src/components/guides/GoogleAdsQuoteComparator.test.tsx` ;
- `src/lib/google-ads-quote-comparison.ts` ;
- `src/lib/google-ads-quote-comparison.test.ts`.

L’image sociale et les trois WebP sont inchangés. Ils sont néanmoins inclus
dans le manifeste de reprise afin de geler le candidat public complet.

| Contrôle                                       | Résultat                           |
| ---------------------------------------------- | ---------------------------------- |
| moteur, composant et contrat éditorial ciblés  | 3 fichiers, 33 tests, 33 réussites |
| isolation 3 / 6 / 12 mois et entre offres      | réussie                            |
| recalcul central et défavorable indépendant    | identique aux valeurs documentées  |
| TypeScript avec `npx tsc --noEmit`             | réussi                             |
| ESLint ciblé                                   | réussi                             |
| Prettier ciblé                                 | réussi                             |
| `git diff --check` ciblé                       | réussi                             |
| manifeste `prix-gestion-google-ads-p2-reprise` | 11/11                              |

Le build global, le BAT navigateur, Git, le push, P3 et la publication restent
hors périmètre et ne sont pas revendiqués.

**État agent de reprise P2 :
`READY_FOR_ORCHESTRATOR_G2_REPRISE`.** L’orchestrateur doit refaire G2 avant
toute relance de P3.

#### G2R — Nouvelle validation orchestrateur du 30 juillet 2026

Verdict : **GO_PASSE_3_APRES_REPRISE**.

- P0 : 0 ;
- P1 : 0 ;
- P2 transmis à P3 : simplification du vocabulaire de résultat, aération du
  passage juridique, naturel des CTA et choix final du title/meta.

L’orchestrateur a vérifié le manifeste de reprise 11/11, relu les nouvelles
entrées, la matrice accessible, la boucle du moteur et les résultats mobiles et
desktop. L’ancien champ unique n’existe plus dans le candidat. Chaque horizon
lit sa propre valeur `fees.exitCostsHT[months]` et l’expose sous `exitCostHT`.

Les calculs centraux ont été refaits sans appeler le moteur :

- forfait à 3 mois : 2 750 € de coûts externes initiaux + 3 × 6 250 €
  mensuels + 850 € de temps interne = 22 350 € ;
- pourcentage à 3 mois : 2 900 € initiaux + 3 × 6 100 € mensuels + 850 €
  internes = 22 050 € ;
- hybride à 3 mois : 2 800 € initiaux + 3 × 6 250 € mensuels + 850 €
  internes = 22 400 € ;
- temps passé à 3 mois : 2 800 € initiaux + 3 × 6 350 € mensuels + 850 €
  internes = 22 700 €.

Les horizons 6 et 12 mois concordent avec le tableau documenté. Les contrats
adversariaux prouvent les écarts `+450 / 0 / 0`, `0 / +800 / 0` et
`0 / 0 / +720`, y compris l’isolation entre offres. Les entrées négatives,
infinies et hors borne sont rejetées.

Rejeu indépendant du gate :

- manifeste P2 reprise : 11/11 ;
- moteur, composant et contenu : 33/33 tests ;
- ESLint ciblé : réussi ;
- TypeScript avec `npx tsc --noEmit` : réussi ;
- Prettier ciblé : réussi ;
- `git diff --check` ciblé : réussi ;
- limites de confidentialité, unités HT, prix vendeurs et absence de schémas
  abusifs relus dans la page et les contrats éditoriaux.

La date de publication reste volontairement hors de P2 : elle doit devenir
l’instant réel de première mise en production sous verrou d’intégration. Ce GO
autorise une nouvelle P3 depuis ce candidat corrigé. Il ne vaut ni P4, ni BAT,
ni publication ou indexation.

### H3R. P3 — Polish rédactionnel relancé après G2R

Agent distinct : `/root/g1_transversal_counteraudit`, réaffecté par
l’orchestrateur à la passe 3. Le manifeste d’entrée
`prix-gestion-google-ads-g2-reprise.sha256` a été vérifié avant toute édition :
11 fichiers sur 11 concordaient.

Le document `Prompt #3 - Polish Rédactionnel.docx` a été lu intégralement en
lecture seule. Ses six contrôles ont été adaptés au contexte Hagnéré Code :

- **A — accroche et promesse** : réponse directe, H1 conservé, hero moins
  énumératif et séparation immédiate entre média et honoraires ;
- **B — corps et rythme** : paragraphes denses scindés, transitions
  explicites, vocabulaire de calcul traduit en mots courants ;
- **C — title et meta** : variantes évaluées pour le taux de clic, consignées
  ci-dessous sans modifier le registre partagé ;
- **D — contexte et maillage** : liens limités aux services réellement
  disponibles et aux sources déjà vérifiées, sans lien vers un autre brouillon
  de guide ;
- **E — éléments d’aide** : tableaux conservés lorsqu’ils répondent à des
  décisions différentes, introduction du calculateur ramenée à trois gestes et
  FAQ rendue plus directe ;
- **F — contrôle final** : préservation des frontières factuelles, financières,
  juridiques et fiscales, puis validation automatisée ciblée.

Les quotas patrimoniaux du prompt n’ont pas été importés mécaniquement :
`FAQPage`, `HowTo`, téléchargements et répétitions artificielles de marque
restent interdits par la gouvernance de ce corpus.

#### H3R.1. Corrections rédactionnelles appliquées

**Accroche et lecture initiale**

- le hero oppose désormais la mensualité au coût complet en une séquence
  courte : quatre modèles, même durée, séparation média/honoraires, puis coûts
  oubliés ;
- le bandeau de méthode dit « rendre les offres comparables » plutôt que
  « normaliser » ;
- la statistique visible parle de « durées comparées » plutôt que
  d’« horizons » ;
- la réponse FAQ sur le prix commence par la limite utile — aucun montant
  fiable sans périmètre — avant de donner l’échantillon public borné.

**Prix publics et modèles**

- le passage sur les vendeurs a été réorganisé en trois mouvements : exemples
  MS Web et AdWorks, exemple DP Medias, puis limite de l’échantillon ;
- les quatre rémunérations sont introduites par la question « que payez-vous
  vraiment ? » et non par une taxonomie abstraite ;
- le cas fictif distingue désormais les trois modèles forfaitaire,
  proportionnel et hybride du modèle au temps passé, sans changer une hypothèse
  ni un montant.

**Durée, calculateur et cas chiffré**

- les occurrences visibles d’« horizon » ont été remplacées par « durée »,
  « date de comparaison » ou « date d’arrêt » ; les identifiants internes du
  code restent inchangés ;
- l’introduction du calculateur suit trois gestes : recopier la base commune,
  compléter chaque offre, puis comparer les trois dates ;
- « cohorte », « fenêtre fixe », « coût normalisé » et « seuil non calculable »
  ont disparu de l’interface au profit de « période retenue pour la marge par
  client », « coût comparable » et « couverture non calculable » ;
- le texte précise toujours que la marge complète par client peut être encaissée
  après la date comparée et qu’elle ne constitue pas un échéancier de
  trésorerie ;
- l’analyse du cas central a été divisée entre hypothèses, indicateurs média et
  coût d’acquisition complet, sans altérer les résultats ;
- le scénario défavorable se termine par trois décisions concrètes : seuil
  d’arrêt, durée du test et donnée qui déclenche la suite.

**Facturation, loi Sapin et réversibilité**

- la section 08 sépare maintenant l’entité facturée, le payeur et le
  destinataire des justificatifs ;
- la règle de facturation de Google est présentée comme une règle produit, pas
  comme une conclusion comptable ou contractuelle ;
- l’article 20 conserve les quatre points vérifiés : mandat écrit,
  rémunération détaillée, rabais ou avantages visibles et facture du vendeur
  communiquée à l’annonceur, y compris lorsqu’il ne paie pas directement ;
- un mémo distingue explicitement trois niveaux : produit Google, loi et
  organisation propre de l’annonceur ;
- la synthèse renvoie vers un avis adapté en cas d’achat, d’avance ou de
  refacturation du média et rappelle que le guide ne fournit pas de conseil
  juridique ou fiscal individualisé ;
- la clause de sortie est formulée comme une exigence documentaire, avec délai,
  date d’effet, sommes dues, actifs, accès, rapports et passation.

**Décision et CTA**

- le choix final conserve les cinq situations — gestion interne, audit, agence
  ou indépendant, réparation préalable, report — et la frontière commerciale
  explicite d’Hagnéré Code ;
- le CTA final demande les lignes du devis plutôt qu’un simple budget et mène
  directement au service publicitaire ou au cadrage de projet ;
- les formulations impératives répétitives ont été variées lorsque cela
  améliorait le rythme, sans affaiblir les contrôles demandés au lecteur.

#### H3R.2. Proposition title et meta

Le registre partagé n’a pas été modifié par l’agent P3. La proposition à
appliquer sous verrou d’intégration est :

- **title, 58 caractères** :
  `Prix de la gestion Google Ads en 2026 : 4 modèles comparés` ;
- **meta, 154 caractères** :
  `Comparez quatre modèles de rémunération Google Ads et calculez le coût complet à 3, 6 et 12 mois : média, honoraires, TVA, frais annexes et temps interne.`

La meta décrit bien quatre **modèles de rémunération**, et non quatre canaux ou
une promesse de retour sur investissement. Elle annonce les trois dates et les
composants du coût complet réellement traités.

#### H3R.3. Scoring avant/après

Chaque axe est noté sur 20. Le score global après passe est de
**182/200, soit 91/100** ; aucun axe n’est inférieur à 17/20.

| Axe                                | Avant | Après | Preuve principale                                     |
| ---------------------------------- | ----: | ----: | ----------------------------------------------------- |
| Accroche et promesse               |    18 |    19 | hero plus court, coût complet immédiatement posé      |
| Corps et profondeur utile          |    16 |    18 | modèles, cas et droit scindés sans perte de substance |
| FAQ                                |    18 |    19 | réponses directes et limites placées en tête          |
| Transitions et progression         |    17 |    18 | prix → coût → modèles → durée → calcul → décision     |
| Lisibilité et naturel              |    14 |    18 | jargon retiré, phrases et paragraphes aérés           |
| Potentiel CTR du title proposé     |    16 |    18 | année, intention prix et quatre modèles               |
| Potentiel CTR de la meta proposée  |    16 |    18 | coût complet et trois durées, sans promesse de ROI    |
| Contextualisation                  |    17 |    18 | exemples fictifs et sources publiques toujours bornés |
| Maillage interne                   |    17 |    17 | deux services cohérents, aucun lien vers un brouillon |
| Cohérence juridique et commerciale |    18 |    19 | trois niveaux distincts et frontière de conseil       |

Total avant : **167/200, soit 83,5/100**. Total après :
**182/200, soit 91/100**.

Verdict éditorial de P3 :

- P0 : 0 ;
- P1 : 0 ;
- nouveau P1 découvert pendant la passe : aucun ;
- P2 éditorial bloquant dans les fichiers du guide : aucun ;
- P2 d’intégration transmis : appliquer le title et la meta sous verrou partagé,
  puis contrôler le rendu réel, les données structurées et le maillage pendant
  P4 et la revue transversale.

#### H3R.4. Invariants chiffrés et techniques

Ni le moteur ni ses tests n’ont été modifiés en P3. Leurs empreintes restent
strictement celles du candidat G2R :

- moteur : `13b8c4f4345e9ab5fdc83489fedd350dc26bd455fcd8cd3bbe1dc6fc93e8b15a` ;
- tests moteur :
  `8d58cf43a0e3ce0a6e7ea817514626e2df91b65f677b1e01295a9918e4809437`.

L’image sociale et les trois WebP sont également inchangés. Les 12 champs de
sortie distincts restent présents et chaque montant ne touche que sa date et
son offre. Les résultats centraux restent :

| Modèle      |   3 mois |   6 mois |  12 mois |
| ----------- | -------: | -------: | -------: |
| Forfait     | 22 350 € | 41 550 € | 79 950 € |
| Pourcentage | 22 050 € | 40 800 € | 78 300 € |
| Hybride     | 22 400 € | 41 600 € | 80 000 € |
| Temps passé | 22 700 € | 42 200 € | 81 200 € |

Le scénario défavorable reste à −19 350 €. Les contrats d’isolation restent
`+450 / 0 / 0`, `0 / +800 / 0` et `0 / 0 / +720`. Les différences de
multiensemble numérique liées au polish se limitent aux répétitions
éditoriales de 3, 6, 12 et 20 dans les nouveaux libellés et sous-titres ; aucun
montant, taux, champ, résultat ou formule de décision n’a changé.

#### H3R.5. Fichiers et contrôles de sortie

Fichiers édités en P3 :

- `docs/research/prix-gestion-google-ads.md` ;
- `src/app/guides/prix-gestion-google-ads/page.tsx` ;
- `src/app/guides/prix-gestion-google-ads/content-quality.test.ts` ;
- `src/components/guides/GoogleAdsQuoteComparator.tsx` ;
- `src/components/guides/GoogleAdsQuoteComparator.test.tsx`.

Fichiers volontairement inchangés :

- `src/lib/google-ads-quote-comparison.ts` ;
- `src/lib/google-ads-quote-comparison.test.ts` ;
- `src/app/guides/prix-gestion-google-ads/opengraph-image.tsx` ;
- les trois WebP du guide ;
- le registre et tous les autres fichiers partagés.

| Contrôle                                                         | Résultat              |
| ---------------------------------------------------------------- | --------------------- |
| manifeste d’entrée G2R                                           | 11/11                 |
| moteur, composant et contrat éditorial ciblés                    | 33/33 tests           |
| ESLint ciblé sur les sept fichiers code du candidat              | réussi                |
| TypeScript avec `npx tsc --noEmit`                               | réussi                |
| Prettier ciblé                                                   | réussi                |
| contrôle des espaces et fins de ligne ciblé                      | réussi                |
| moteur, tests moteur, image sociale et trois WebP comparés à G2R | strictement inchangés |

Le build global, le BAT navigateur, P4, la revue transversale, le commit, le
push, la publication et l’indexation restent hors de cette passe et ne sont pas
revendiqués.

**État historique agent P3 : `READY_FOR_ORCHESTRATOR_G3`, invalidé par la
reprise H3R.6 ci-dessous.**

#### H3R.6. Reprise ciblée demandée au contrôle G3

Le premier manifeste P3 a été vérifié 11/11 avant cette reprise, puis déclaré
invalide pour la suite du workflow. Aucun défaut de fond, de calcul ou de
structure juridique n’a été découvert. Cinq formulations ont néanmoins été
reprises avant un nouveau gel :

- la statistique affiche désormais `Saisies du calculateur / Non transmises` et
  le bandeau `Calcul local · saisies non transmises` ; le pied du calculateur
  conserve l’explication complète sur l’absence de compte, d’envoi et de
  conservation ;
- le hero parle de `TVA à décaisser` et le sous-titre de
  `TVA décaissée`, tout en conservant la distinction entre décaissement,
  récupération et coût final selon le fournisseur et la situation ;
- le libellé de formule devient
  `marge contributive par client sur la période retenue`, sans toucher à
  l’opération ni aux variables du moteur ;
- la meta proposée est ramenée à 154 caractères et nomme désormais
  explicitement média, honoraires, TVA, frais annexes et temps interne ;
- le bouton final `Décrire mon projet` décrit exactement l’ouverture du
  formulaire de cadrage, sans promettre une comparaison avant qualification.

Le scoring reste **182/200, soit 91/100** : ces corrections renforcent la
lisibilité et l’honnêteté du CTA, sans modifier les axes de fond.

| Contrôle de reprise ciblée                                   | Résultat              |
| ------------------------------------------------------------ | --------------------- |
| composant, moteur et contrat éditorial                       | 33/33 tests           |
| ESLint ciblé                                                 | réussi                |
| TypeScript avec `npx tsc --noEmit`                           | réussi                |
| Prettier ciblé                                               | réussi                |
| meta proposée comptée par points de code                     | 154 caractères        |
| moteur, tests moteur, image sociale et trois WebP contre G2R | strictement inchangés |
| nouveau manifeste `prix-gestion-google-ads-p3.sha256`        | 11/11                 |

Aucun nombre, champ, résultat ou formule n’a changé hors du seul libellé
visible de la période de marge. Aucun fichier partagé, aucune action Git et
aucune passe 4 n’ont été engagés.

**État agent P3 après reprise :
`READY_FOR_ORCHESTRATOR_G3_RECHECK`.** Toute nouvelle correction invalide ce
gel et exige un nouveau manifeste.

#### G3 — Validation orchestrateur du 30 juillet 2026

Verdict : **GO_PASSE_4**.

- P0 : 0 ;
- P1 : 0 ;
- P2 transmis à P4 et à l’intégration : espaces typographiques du H1/headline,
  application du title/meta sous verrou partagé et contrôle réel du rendu.

L’orchestrateur a d’abord refusé le candidat P3 initial pour quatre formulations
encore trop internes ou abstraites : `envoi / Aucun`, `TVA de trésorerie`,
`fenêtre fixe` dans la formule et une meta exactement au plafond de
160 caractères. Le bouton final promettait aussi une comparaison avant
qualification. Le même agent P3 a corrigé ces points, rejoué ses contrôles et
régénéré le manifeste en dernière écriture.

Le contrôle G3 a ensuite confirmé :

- manifeste P3 : 11/11 fichiers ;
- moteur, composant et contrat éditorial : 33/33 tests ;
- ESLint ciblé : réussi ;
- TypeScript avec `npx tsc --noEmit` : réussi ;
- Prettier ciblé : réussi ;
- `git diff --check` ciblé : réussi ;
- moteur, tests moteur, image sociale et trois WebP strictement identiques au
  snapshot G2R ;
- douze coûts de sortie, montants, taux, cas central, cas défavorable et
  formules de décision inchangés ;
- réponse au prix dans les 150 premiers mots, calculateur introduit en trois
  gestes et résultats compréhensibles sans vocabulaire de cohorte ;
- passage Google/loi Sapin/organisation contractuelle scindé sans perte des
  quatre obligations vérifiées ;
- title proposé à 58 caractères et meta proposée à 154 caractères, sans
  promesse de performance ;
- aucun lien vers un brouillon, aucun schéma abusif et aucune répétition
  artificielle de marque.

La relecture de l’orchestrateur retient le score P3 de **91/100**, chaque axe
étant au moins à 17/20. Ce GO autorise uniquement la passe anti-IA P4 par un
agent distinct. Il ne vaut ni validation transversale, ni BAT, ni publication
ou indexation.

### H4. P4 — Antipasse IA

Agent distinct : `/root/g2_p4_antipasse`.

État d’entrée : le manifeste
`docs/research/manifests/prix-gestion-google-ads-g3.sha256` a été vérifié avant
toute modification. Les onze fichiers concordaient avec le snapshot G3.

Le document `Prompt 4 - Antipasse IA.docx` a été lu intégralement en lecture
seule. Ses quinze motifs ont été appliqués comme une revue de plume, et non
comme une tentative de tromper un détecteur. L’adaptation à Hagnéré Code
écarte donc le ton « café-CGP », le slang, les anecdotes inventées et les
quotas de reformulations. Les listes réellement procédurales, les distinctions
juridiques et les libellés répétitifs nécessaires à l’accessibilité d’un
formulaire ne sont pas cassés artificiellement.

#### H4.1. Cartographie contrôlée

Treize zones ont été relues séparément, puis dans le fil complet de la page :

| Zone                     | Emplacement du snapshot P4                                  | Question de contrôle                                                              | Verdict après correction                                               |
| ------------------------ | ----------------------------------------------------------- | --------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| Hero et réponse initiale | `page.tsx`, hero puis H2 01 à partir de la ligne 423        | prix, média, honoraires et décision sont-ils compris sans cadre à mémoriser ?     | humain, réponse directe conservée                                      |
| H2 01 — réponse prix     | `page.tsx`, lignes 423–519                                  | la limite de l’échantillon découle-t-elle clairement de sa méthode ?              | une formulation administrative corrigée                                |
| H2 02 — coût complet     | `page.tsx`, lignes 520–655                                  | les sept lignes et la TVA mènent-elles à une action concrète ?                    | une métaphore de trésorerie corrigée                                   |
| H2 03 — modèles          | `page.tsx`, lignes 656–756                                  | les quatre rémunérations restent-elles comparables sans survente ?                | aucun tic bloquant                                                     |
| H2 04 — durées           | `page.tsx`, lignes 757–872                                  | les trois dates et le cas fictif ont-ils une cause et une conséquence visibles ?  | humain ; test de résistance conservé                                   |
| H2 05 — calculateur      | `page.tsx`, lignes 873–945, puis composant interactif       | l’ordre de saisie et les hypothèses se lisent-ils sans jargon abstrait ?          | deux passages de corps et six microcopies corrigés                     |
| H2 06 — indicateurs      | `page.tsx`, lignes 946–1070                                 | CPC, CPA, CPL, CAC et scénario défavorable restent-ils distincts ?                | une métaphore vide retirée                                             |
| H2 07 — périmètre        | `page.tsx`, lignes 1071–1179                                | les responsabilités et preuves remplacent-elles les mots commerciaux ?            | humain, aucune correction forcée                                       |
| H2 08 — propriété        | `page.tsx`, lignes 1180–1370                                | produit Google, loi et organisation sont-ils reliés sans conclusion universelle ? | une transition administrative corrigée                                 |
| H2 09 — décision         | `page.tsx`, lignes 1371–fin                                 | le lecteur voit-il les alternatives, le mauvais fit et la prochaine action ?      | trois formulations abstraites corrigées                                |
| Calculateur              | `GoogleAdsQuoteComparator.tsx`, sections 1 à 4 et résultats | les hypothèses, champs, erreurs, sorties et badges parlent-ils comme le lecteur ? | cinq microcopies corrigées, calcul gelé                                |
| FAQ visible              | `page.tsx`, lignes 91–174                                   | chaque réponse commence-t-elle par la réponse et garde-t-elle ses limites ?       | 12 réponses jugées humaines, aucune modification                       |
| CTA                      | hero, sidebar, mobile, FAQ et CTA final                     | le clic et le mauvais fit sont-ils explicites, sans promesse de résultat ?        | CTA final et libellés G3 conservés ; une phrase de transition corrigée |

Le hero, les neuf H2, les douze réponses de FAQ et tous les CTA ont donc été
lus, même lorsqu’aucun changement n’était justifié.

#### H4.2. Quatorze tics réels et corrections exactes

Les quatorze passages suivants relevaient tous d’un défaut rédactionnel P2.
Aucun ne constituait un P0 ou un P1 de fond.

1. **H2 01 — motifs 11 et 15, formulation administrative et causalité trop
   implicite**

   - Avant : « Ces pages décrivent leur propre offre. Elles ne constituent pas
     une enquête représentative et ne permettent pas de classer les vendeurs
     sans remettre leur périmètre sur une base commune. »
   - Après : « Ces pages décrivent seulement leur propre offre. Avec un
     échantillon aussi limité, impossible d’en déduire un classement : il faut
     d’abord comparer le même périmètre. »
   - Raison : la taille et la nature de l’échantillon produisent maintenant
     explicitement la limite du classement.

2. **H2 02 — motif 5, image fabriquée**

   - Avant : « Ne transformez pas “TVA récupérable” en “trésorerie inutile”. »
   - Après : « Une TVA récupérable peut peser sur votre trésorerie. »
   - Raison : la conséquence de trésorerie remplace une opposition imagée qui
     demandait au lecteur de l’interpréter.

3. **H2 05 — motif 2, annonce de triplette inutile**

   - Avant : « Trois gestes suffisent pour comparer les devis sans chercher un
     “meilleur modèle” abstrait : »
   - Après : « La comparaison suit un ordre simple. Commencez par ce que les
     devis ont réellement en commun, puis complétez chaque offre avant de lire
     les résultats : »
   - Raison : la phrase annonce la logique de la procédure plutôt que son
     nombre. La liste ordonnée reste justifiée, car les étapes dépendent les
     unes des autres.

4. **H2 05 — motifs 9, 10 et 15, rythme régulier et verbes abstraits**

   - Avant : « Les clics, actions, prospects et clients sont prolongés comme
     une moyenne mensuelle constante dès le premier mois. Cette simplification
     ne représente ni une montée en charge ni la saisonnalité : pour un
     lancement, complétez-la par un scénario mois par mois. »
   - Après : « Le calcul suppose que le nombre mensuel de clics, d’actions, de
     prospects et de clients reste constant dès le départ. Il ne simule ni
     montée en charge ni saisonnalité. Pour un lancement, ajoutez donc un
     scénario mois par mois. »
   - Raison : le sujet qui agit est nommé, la phrase technique est coupée et la
     conséquence pratique suit immédiatement l’hypothèse.

5. **H2 06 — motifs 5 et 14, métaphore et dramatisation sans information**

   - Avant : « Le modèle ne devient pas “mauvais” par magie : ce sont les
     hypothèses commerciales qui ne couvrent plus le dispositif. »
   - Après : « Le résultat ne condamne pas le modèle : avec ces hypothèses
     commerciales, la marge ne couvre plus le dispositif. »
   - Raison : le texte nomme la cause financière au lieu de mettre en scène un
     modèle qui changerait « par magie ».

6. **H2 08 — motifs 11 et 15, conclusion administrative**

   - Avant : « Ces trois niveaux distincts ne permettent pas de déduire un
     montage universel. Faites valider le vôtre si un intermédiaire achète,
     avance ou refacture le média. »
   - Après : « Aucun de ces trois niveaux ne suffit à définir votre montage. Si
     un intermédiaire achète, avance ou refacture le média, faites valider
     l’organisation retenue. »
   - Raison : la limite juridique est formulée directement et la condition
     précède l’action.

7. **H2 09 — motifs 3, 10 et 11, vocabulaire de consultant et série trop
   symétrique**

   - Avant : « Le prestataire le plus complet n’est pas toujours proportionné.
     Le libre-service, une assistance ponctuelle, un indépendant, une agence ou
     le report répondent à des situations différentes. Commencez par la
     capacité à mesurer et traiter les demandes, puis choisissez le niveau
     d’accompagnement. »
   - Après : « L’offre la plus complète n’est pas forcément la bonne. Vous
     pouvez piloter en interne, demander une aide ponctuelle, confier le compte
     à un indépendant ou à une agence — ou reporter le projet. Avant de
     choisir, vérifiez que vous savez mesurer les demandes reçues et que votre
     équipe peut les traiter. »
   - Raison : des actions observables remplacent « proportionné », « capacité »
     et « niveau d’accompagnement ».

8. **H2 09 — motifs 10 et 11, passif commercial**

   - Avant : « Ces limites doivent être comprises avant l’échange commercial. »
   - Après : « Mieux vaut le savoir avant de nous contacter. »
   - Raison : le lecteur et l’action sont nommés sans ajouter de pression
     commerciale.

9. **H2 09 — motifs 10 et 14, titre de sortie vague**

   - Avant : « Le bon prochain document tient sur une page. »
   - Après : « Préparez une fiche d’une page pour comparer les offres. »
   - Raison : le titre indique le document à produire et son usage, sans
     adjectif auto-validant.

10. **Calculateur, offre au forfait — motif 10, pronom ambigu**

    - Avant : « Saisissez le prix, puis les coûts nécessaires pour rendre son
      périmètre comparable aux autres offres. »
    - Après : « Saisissez le prix de l’offre, puis ajoutez ce qui manque pour
      comparer le même périmètre. »
    - Raison : l’objet du pronom disparaît et l’action attendue devient
      immédiate.

11. **Calculateur, offre au pourcentage — motifs 10 et 11, formulation
    abstraite**

    - Avant : « Le taux, son assiette, le minimum et le plafond appartiennent à
      cette offre. »
    - Après : « Recopiez le taux, son assiette, le minimum et le plafond prévus
      dans cette offre. »
    - Raison : la phrase devient une instruction vérifiable dans le devis.

12. **Calculateur, offre hybride — motifs 10 et 11, voix administrative**

    - Avant : « Le socle et la part variable sont bornés par les conditions
      propres à ce devis. »
    - Après : « Recopiez le socle et la part variable du devis, avec son
      minimum et son plafond éventuels. »
    - Raison : la borne abstraite devient les deux champs concrets à contrôler.

13. **Calculateur, hypothèses commerciales — motifs 9, 10 et 15**

    - Avant : « Le calcul prolonge des moyennes mensuelles constantes dès le
      premier mois : il ne modélise ni montée en charge, ni saisonnalité. Pour
      un lancement, faites en plus un scénario mois par mois. »
    - Après : « Le calcul reprend le même nombre de clics, d’actions, de
      prospects et de clients chaque mois, dès le départ. Il ne simule ni
      montée en charge ni saisonnalité. Pour un lancement, ajoutez un scénario
      mois par mois. »
    - Raison : le lecteur voit les quatre volumes réellement répétés et la
      limite conduit directement au scénario complémentaire.

14. **Calculateur, badge de couverture — motifs 9 et 10, définition
    mécanique**

    - Avant : « Le badge compare la marge saisie aux coûts connus du scénario.
      Les coûts sont couverts si l’écart par prospect qualifié est positif ou
      nul. Il indique “Couverture non calculable” si un volume nécessaire
      manque. »
    - Après : « Le badge répond à une question : la marge saisie couvre-t-elle
      les coûts connus du scénario ? La réponse est positive lorsque l’écart
      par prospect qualifié est supérieur ou égal à zéro. Si un volume
      indispensable manque, le calcul affiche “Couverture non calculable”. »
    - Raison : la question précède la règle de décision, sans changer le seuil
      mathématique.

#### H4.3. Structures conservées volontairement

- Les quatre contrôles numérotés de lecture d’un devis restent en place : leur
  ordre évite de comparer la rémunération avant l’objectif et la base commune.
- La liste ordonnée du calculateur reste une procédure réelle, pas une
  triplette rhétorique : base commune, conditions propres, lecture des trois
  dates.
- Les trois événements du test de résistance restent trois entrées chiffrables
  distinctes : hausse du média, baisse des ventes et arrêt contractuel.
- Le mémo « Trois niveaux à ne pas confondre » reste nécessaire pour séparer
  une règle produit Google, une règle légale et l’organisation de l’annonceur.
  Les trois éléments n’ont ni le même auteur ni la même portée.
- Les listes de contrôle de facturation et de sortie gardent une forme
  parallèle afin que le lecteur puisse les cocher. Casser leur syntaxe
  dégraderait l’usage.
- Les labels des douze coûts de sortie répètent « arrêt à 3, 6 ou 12 mois »
  pour rendre chaque champ compréhensible isolément par son label accessible.
- Les tableaux conservent des colonnes et des libellés réguliers : cette
  symétrie sert la comparaison, elle n’est pas transposée à la prose.
- Le hero, les FAQ et les CTA ne contenaient ni auto-félicitation, ni
  superlatif non prouvé, ni promesse de performance. Ils n’ont pas été réécrits
  pour fabriquer un diff.

#### H4.4. Gel du fond et des calculs

La passe ne modifie aucun nombre, taux, unité, source, lien, formule,
interprétation juridique ou structure de données. Les douze coûts de sortie
restent présents pour les quatre offres et les trois dates. Le moteur continue
de lire uniquement `fees.exitCostsHT[months]`, puis expose `exitCostHT` dans le
résultat correspondant.

Les résultats du cas central restent :

| Modèle      |   3 mois |   6 mois |  12 mois |
| ----------- | -------: | -------: | -------: |
| Forfait     | 22 350 € | 41 550 € | 79 950 € |
| Pourcentage | 22 050 € | 40 800 € | 78 300 € |
| Hybride     | 22 400 € | 41 600 € | 80 000 € |
| Temps passé | 22 700 € | 42 200 € | 81 200 € |

Le scénario défavorable reste à −19 350 €. Les contrats d’isolation restent
`+450 / 0 / 0`, `0 / +800 / 0` et `0 / 0 / +720`.

Comparaison explicite au manifeste G3 :

- moteur : hash inchangé ;
- tests moteur : hash inchangé ;
- image Open Graph : hash inchangé ;
- trois WebP Article : hashes inchangés ;
- page, test de contenu, composant, test de composant et présent dossier :
  seuls fichiers du manifeste G3 dont le hash change pendant P4.

#### H4.5. Détecteur final sévère

| Zone        | Verdict | Motif résiduel éventuel                                     |
| ----------- | ------- | ----------------------------------------------------------- |
| Hero        | humain  | énumération courte des postes, nécessaire à la réponse prix |
| H2 01       | humain  | aucun                                                       |
| H2 02       | humain  | tableau régulier, fonction de comparaison                   |
| H2 03       | humain  | tableau régulier, fonction de comparaison                   |
| H2 04       | humain  | liste de test conservée pour l’action                       |
| H2 05       | humain  | procédure numérotée conservée car séquentielle              |
| Calculateur | humain  | répétitions de labels conservées pour l’accessibilité       |
| H2 06       | humain  | aucun                                                       |
| H2 07       | humain  | checklist volontaire                                        |
| H2 08       | humain  | trois niveaux juridiques volontairement distincts           |
| H2 09       | humain  | aucun                                                       |
| FAQ         | humain  | réponses volontairement courtes et directes                 |
| CTA         | humain  | vocabulaire commercial borné au résultat du clic            |

Verdict : **OUI**, le texte tient une relecture anti-IA crédible sans
familiarité fabriquée. Note d’authenticité avant P4 : **17,4/20**. Note après
P4 : **18,8/20**. Les trois résidus assumés sont les listes procédurales
numérotées, la symétrie des tableaux et la répétition des labels accessibles ;
ils servent l’usage et ne signalent pas une voix artificielle.

#### H4.6. Fichiers et contrôles de sortie

Fichiers modifiés par P4 :

- `src/app/guides/prix-gestion-google-ads/page.tsx` ;
- `src/app/guides/prix-gestion-google-ads/content-quality.test.ts` ;
- `src/components/guides/GoogleAdsQuoteComparator.tsx` ;
- `src/components/guides/GoogleAdsQuoteComparator.test.tsx` ;
- `docs/research/prix-gestion-google-ads.md`.

Manifeste de sortie, créé en dernière écriture :

- `docs/research/manifests/prix-gestion-google-ads-p4.sha256`.

Contrôles exécutés sur le candidat final avant création du manifeste :

| Contrôle                                               | Résultat                                                                               |
| ------------------------------------------------------ | -------------------------------------------------------------------------------------- |
| manifeste d’entrée G3                                  | 11/11                                                                                  |
| premier test ciblé après reformulation                 | 32/33 ; une assertion de copie G3 attendait encore « trois niveaux distincts »         |
| correction du test de contenu, sans correction du fond | assertion alignée sur « Aucun de ces trois niveaux ne suffit à définir votre montage » |
| moteur, composant et contrat éditorial, rejeu final    | 33/33                                                                                  |
| ESLint ciblé sur les sept fichiers code du candidat    | réussi                                                                                 |
| TypeScript avec `npx tsc --noEmit`                     | réussi                                                                                 |
| Prettier ciblé sur les quatre fichiers code touchés    | réussi                                                                                 |
| `git diff --check`                                     | recherche suivie et quatre fichiers code non suivis contrôlés, réussi                  |
| périmètre P4 contre le manifeste G3                    | seuls page, tests de copie, composant et dossier de recherche ont changé               |
| comparaison des fichiers gelés au manifeste G3         | moteur, test moteur, OG et trois WebP inchangés                                        |
| douze coûts de sortie et lecture par date              | 12 champs uniques ; `exitCostsHT[months]` inchangé                                     |

Gravité finale :

- P0 : 0 ;
- P1 : 0 ;
- P2 rédactionnel bloquant : 0 ;
- P2 résiduel assumé : structures régulières uniquement lorsqu’elles servent
  une procédure, une comparaison ou un label accessible.

Le build, le BAT navigateur, l’intégration du title/meta, Git, le push, la
publication, l’indexation et le contrôle transversal restent hors du périmètre
de cette passe.

**État agent P4 : `READY_FOR_ORCHESTRATOR_G4`.** Toute nouvelle correction
invalide le manifeste P4 et exige un nouveau contrôle.

#### H4.7. Gate orchestrateur G4 — `GO_CONTROLE_TRANSVERSAL`

Validation indépendante de l’orchestrateur le
`2026-07-31T00:02:59+02:00`.

Le manifeste P4 a été rejoué intégralement : **11/11 fichiers conformes**. La
comparaison avec G3 confirme que seuls la page, les deux tests de copie, la
microcopie du composant et le présent dossier ont changé. Le moteur, son test,
l’image Open Graph et les trois WebP restent identiques au snapshot G3.

L’orchestrateur a relu les quatorze avant/après, les treize zones, les douze
réponses de FAQ et les formulations finales dans leur contexte. Les corrections
retirent bien les abstractions et métaphores visées sans introduire de
familiarité fabriquée, de superlatif, de promesse de performance ou de
conclusion commerciale forcée. Les répétitions restantes servent une procédure,
un tableau comparatif ou un label accessible. La note de **18,8/20** est
acceptée.

Contrôles rejoués par l’orchestrateur sur le snapshot P4 :

- 33/33 tests ciblés ;
- ESLint ciblé réussi ;
- TypeScript `--noEmit` réussi ;
- Prettier 3.9.6 ciblé réussi ;
- `git diff --check` réussi ;
- aucun `FAQPage`, `HowTo`, `Review`, `AggregateRating` ou `wordCount` dans le
  candidat ;
- douze coûts de sortie toujours isolés par offre et par horizon.

Le premier rejeu a invoqué par erreur `pnpm` dans ce dépôt npm. Il s’est arrêté
avant les tests sur sa politique de scripts ; le fichier `pnpm-lock.yaml`
temporaire a été supprimé et `node_modules` restauré par `npm ci`, sans
modification de `package.json` ou `package-lock.json`. Les contrôles ci-dessus
ont ensuite été rejoués avec l’environnement npm restauré.

Verdict orchestrateur : **`GO_CONTROLE_TRANSVERSAL`**. Ce GO autorise uniquement
le contrôle transversal indépendant, l’intégration propre et la BAT. Il ne vaut
ni publication, ni déploiement, ni indexation.

### H5. Contrôle transversal post-guide

#### H5.1. Intégration propre et BAT du brouillon

Après G4, l’orchestrateur a isolé le guide dans le worktree propre
`Hagnere-Code-wt-google-ads-final`, sur la branche
`codex/google-ads-guide-final`, créée depuis `origin/main` au commit
`760dda103000d564f103cf1d6ac21609c46e1c0b`. Aucun guide concurrent ni fichier
partagé étranger à ce lot n’a été importé.

Le manifeste G4 a été rejoué après la copie : **11/11 fichiers conformes**. Les
changements d’intégration sont bornés au guide, à son inscription dans le
catalogue, à son icône de hub, à la suppression de son ancienne redirection et
à un lien entrant depuis le service Publicité en ligne.

Paramètres éditoriaux intégrés :

- title : `Prix de la gestion Google Ads en 2026 : 4 modèles comparés`
  (**58 caractères**) ;
- meta description : `Comparez quatre modèles de rémunération Google Ads et
calculez le coût complet à 3, 6 et 12 mois : média, honoraires, TVA, frais
annexes et temps interne.` (**154 caractères**) ;
- un seul H1 : `Combien coûte vraiment la gestion de Google Ads ?` ;
- temps de lecture : **32 minutes**, calculé sur **6 482 mots visibles** ;
- trois images Article aux ratios 16:9, 4:3 et 1:1 ;
- données structurées limitées à `Article` et `BreadcrumbList` ;
- aucune donnée `FAQPage`, `HowTo`, `Review`, `AggregateRating` ou
  `wordCount`.

Le premier build d’intégration a fait remonter deux défauts réels, corrigés
avant BAT :

1. le slug existait encore dans la table des anciennes redirections alors
   qu’une route statique et un lien interne le rendaient de nouveau
   publiable ; l’entrée a été retirée et le contrat de test ramené à
   **98 redirections historiques** ;
2. le temps de lecture déclaré était de 22 minutes alors que le contrôle
   post-build mesurait environ 32 minutes ; le catalogue a été corrigé à 32.

Le build du brouillon après ces corrections a réussi :

- **173/173 tests SEO** ;
- compilation Next.js et TypeScript réussie ;
- génération statique de **61 pages** ;
- sitemap de **44 URL**, `llms.txt` de **27 liens**, **44 pages** contrôlées,
  **3 temps de lecture** et **76 blocs JSON-LD**.

Le BAT a été effectué dans le navigateur intégré sur le serveur de production
local, avec `NEXT_PUBLIC_ENV=production`, avant ouverture de l’indexation :

| Contrôle                                 | Résultat                                                                     |
| ---------------------------------------- | ---------------------------------------------------------------------------- |
| desktop 1 440 px                         | aucun débordement horizontal ; hero, contenu, CTA et tableaux lisibles       |
| mobile 320 px                            | aucun débordement ; hero, CTA, FAQ et résultats du calculateur lisibles      |
| paysage 844 × 390                        | aucun débordement                                                            |
| reflow 720 px, équivalent bureau à 200 % | aucun texte visible tronqué                                                  |
| thèmes sombre et clair                   | contraste et hiérarchie visuelle cohérents                                   |
| image éditoriale différée                | chargée, dimensions naturelles non nulles                                    |
| FAQ                                      | onglets, flèche droite, accordéon, clic et activation Espace fonctionnels    |
| lien d’évitement                         | cible `main#main-content` et y place le focus                                |
| ancre directe `#calculateur`             | cible atteinte sur une nouvelle navigation                                   |
| formulaire                               | 58 champs numériques, tous étiquetés ; 12 coûts de sortie uniques            |
| coût de sortie fixe à 3 mois             | `+450 €` uniquement sur forfait/3 mois ; autres horizons et offres inchangés |
| valeur négative                          | `aria-invalid=true` et message borné visible                                 |
| maillage service → guide                 | un lien, libellé explicite, navigation réussie                               |
| brouillon dans le hub                    | absent tant que `ready-for-human-review` est actif                           |
| console                                  | aucune erreur ni alerte observée pendant les parcours                        |

Deux défauts de rendu décelés pendant le BAT ont été corrigés puis rejoués :

1. trois valeurs du hero étaient ellipsées à 1 440 px ; elles ont été
   raccourcies sans changer leur sens (`3 · 6 · 12`, `Aucune`, `Aucun`) ;
2. les suffixes superposés `€ HT` masquaient la valeur des coûts de sortie dans
   la grille desktop ; l’unité a été déplacée dans le label accessible
   `Arrêt à N mois (€ HT)`, et les zéros sont désormais visibles.

Après ces corrections, le test d’isolation `+450 €`, le maillage entrant, le
reflow et l’absence de troncature du hero ont été rejoués dans le navigateur.

#### H5.2. Ouverture locale du candidat à la publication

Le `2026-07-31T00:24:23+02:00`, après BAT du brouillon :

- `datePublished` et `dateModified` ont été fixés à cet instant de gel ;
- `editorialStatus: "ready-for-human-review"` a été retiré ;
- le guide a été ajouté au contrat `PUBLISHED_GUIDES`.

Cette transition ouvre le hub, le sitemap, `llms.txt` et la directive
d’indexation **uniquement dans le prochain build local de production**. Elle ne
vaut encore ni commit, ni push, ni déploiement, ni preuve publique. Toute
correction ultérieure invalide le futur verdict transversal et exige son rejeu.

#### H5.3. Build et BAT du candidat publiable gelé

Contrôles exécutés après la transition vers `PUBLISHED_GUIDES` :

| Contrôle                | Résultat                                                                                                |
| ----------------------- | ------------------------------------------------------------------------------------------------------- |
| suite Vitest complète   | **76 fichiers et 451 tests réussis**                                                                    |
| ESLint complet          | réussi                                                                                                  |
| TypeScript `--noEmit`   | réussi                                                                                                  |
| Prettier ciblé          | réussi                                                                                                  |
| suite SEO du prebuild   | **33 fichiers et 173 tests réussis**                                                                    |
| build Next.js 16.2.12   | compilation, TypeScript et **61 pages** réussis                                                         |
| artefact SEO post-build | **45 URL** sitemap, **28 liens** `llms.txt`, **45 pages**, **3 temps de lecture**, **78 blocs JSON-LD** |

Le serveur de production local a ensuite confirmé :

- route guide accessible sans redirection ;
- robots `index, follow` ;
- canonical
  `https://hagnere-code.ai/guides/prix-gestion-google-ads` ;
- title de 58 caractères et meta description de 154 caractères ;
- un seul H1, identique au `headline` de l’Article ;
- `datePublished` et `dateModified` égaux au timestamp de gel ;
- JSON-LD limité à `Article` et `BreadcrumbList` ;
- trois images Article et `mainEntityOfPage` cohérents ;
- aucune largeur de page excédentaire à 1 440 px ;
- une seule carte du guide dans le hub, aux côtés des deux guides déjà
  publiés ;
- une occurrence dans le sitemap et une dans `llms.txt` ;
- image Open Graph en HTTP 200 ;
- un lien entrant depuis le service Publicité en ligne.

#### H5.4. Audit de dépendances — passif du socle, non introduit

`npm audit --omit=dev` remonte **10 alertes high, 0 critical** dans l’arbre
existant. Le lot du guide ne modifie ni `package.json`, ni
`package-lock.json`, ni aucune dépendance.

Les deux familles sont :

- `next@16.2.12` → `sharp@0.34.5`, concerné par
  `GHSA-f88m-g3jw-g9cj` ;
- `@opennextjs/cloudflare@1.20.1` et sa chaîne
  OpenNext/Wrangler/Miniflare/Glob.

La version stable la plus récente de Next au moment du contrôle est toujours
`16.2.12` et déclare `sharp: ^0.34.5` en dépendance optionnelle. L’avis Sharp
vise le traitement d’entrées image non fiables ; ce site n’autorise aucun
domaine distant dans `next.config.ts` et les images du guide sont des fichiers
WebP locaux versionnés. La dépendance directe de développement
`sharp@0.35.3` est corrigée, mais elle ne remplace pas automatiquement la copie
imbriquée de Next.

Une mise à jour ou un `override` global toucherait tout le socle et ne peut pas
être maquillé en correction éditoriale. Ce risque préexistant est donc déclaré
au contre-audit transversal, avec ouverture d’un lot de maintenance séparé
requise dès qu’une combinaison officiellement supportée de Next, Sharp et
OpenNext permet de le fermer. Aucun `npm audit fix` n’a été lancé.

#### H5.5. Contre-audit transversal indépendant

Le contre-audit final, réalisé en lecture seule par un agent distinct des quatre
passes, conclut :

- verdict : **`GO_PUBLICATION`** ;
- score global : **94/100** ;
- P0 : **0** ;
- P1 : **0** ;
- chaque axe : **au moins 80/100**.

| Axe                       |   Note |
| ------------------------- | -----: |
| Intention et SEO          | 96/100 |
| Valeur lecteur            | 96/100 |
| Faits et temporalité      | 94/100 |
| Calculateur               | 98/100 |
| Juridique et commercial   | 95/100 |
| Anti-IA                   | 94/100 |
| UX et accessibilité       | 88/100 |
| Données structurées       | 98/100 |
| Intégration et régression | 94/100 |
| Sécurité et gouvernance   | 84/100 |

L’auditeur a notamment rejoué les **451 tests**, ESLint, TypeScript,
`git diff --check`, la vérification de l’artefact SEO de production, les calculs
du cas central et du scénario défavorable, les trois tests d’isolation des
sorties, l’inventaire DOM des 58 champs, les sources instables, les routes
publiables et `npm audit --omit=dev`.

Deux P2 restent acceptés et tracés :

1. la preuve BAT ne comprend pas un relevé final des dix largeurs ni un rapport
   Core Web Vitals de laboratoire ; les contrôles réels 320, 720/reflow,
   844 × 390 et 1 440 px n’ont toutefois révélé aucun défaut ;
2. les dix alertes high de dépendances sont un passif préexistant du socle,
   sans dépendance ni nouvelle frontière de confiance ajoutée par ce guide.

La troisième réserve P2 de l’auditeur concernait l’en-tête périmé du présent
dossier. Cet en-tête a été corrigé sans toucher au code, aux contenus publics,
aux données, aux calculs, aux métadonnées ou aux assets. Un recontrôle borné de
ce seul changement documentaire a confirmé **`GO_PUBLICATION`**, la note de
**94/100**, P0 à 0, P1 à 0 et la fermeture de cette réserve.

### H6. Vérité de livraison après contrôle transversal final

- passes P1, P2 reprise, P3 et P4 terminées et validées par leurs gates ;
- G4 : `GO_CONTROLE_TRANSVERSAL` ;
- intégration propre, build final et BAT du candidat publiable terminés ;
- candidat local marqué publiable le `2026-07-31T00:24:23+02:00` ;
- 451/451 tests, lint, TypeScript et build de production réussis ;
- passif de 10 alertes high du socle déclaré, aucune dépendance modifiée ;
- contre-audit indépendant : `GO_PUBLICATION`, 94/100, P0 0, P1 0 ;
- recontrôle borné après correction documentaire :
  `GO_PUBLICATION_CONFIRMED` ;
- aucun commit, aucun push et aucune publication publique à ce stade ;
- manifeste final, intégration Git et preuve publique encore requis.
