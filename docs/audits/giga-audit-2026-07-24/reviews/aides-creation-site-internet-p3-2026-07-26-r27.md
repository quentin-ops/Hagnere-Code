# Audits froids R26 et contrat correctif R27 — `aides-creation-site-internet`

Date : 26 juillet 2026  
Responsable de consolidation : orchestrateur `/root`

## Verdict exécutif

**R26 : double NO-GO P4. R27 : porte pré-gel arrêtée, corrigée puis rejouée
indépendamment ; validation locale consolidée confirmée et gel de 86 fichiers
produit, sans note, sans GO et P4 non ouverte.**

Les deux audits R26 ont travaillé en lecture seule sur le même gel :

- manifeste :
  `docs/research/manifests/aides-creation-site-internet-p3-2026-07-26-r25.sha256` ;
- corpus : **84 fichiers** ;
- intégrité au début et à la fin des deux audits : **84/84** ;
- SHA-256 du manifeste :
  `7952d793b929d68f7e6e2e089fc5aba1ddd818781785f2d40b02a4ded98b37a7`.

| Axe froid R26                               |   Note | Sévérités                | Verdict      |
| ------------------------------------------- | -----: | ------------------------ | ------------ |
| Faits, droit, finance et moteur décisionnel | 76/100 | P0 : 0 ; P1 : 4 ; P2 : 1 | **NO-GO P4** |
| Expérience, pédagogie et accessibilité      | 83/100 | P0 : 0 ; P1 : 2 ; P2 : 3 | **NO-GO P4** |

Leur union dédupliquée comprend **6 P1 et 4 P2**. Aucun score R26 ne devient le
score de R27 et aucune correction locale ne vaut GO.

## Registre dédupliqué R26 → R27

| ID        | Sévérité | Défaut R26                                            | Risque principal                                         |
| --------- | -------- | ----------------------------------------------------- | -------------------------------------------------------- |
| R27-P1-01 | P1       | Priorité du verdict inversée                          | `invalid` ou `excluded` masqué par « incomplet »         |
| R27-P1-02 | P1       | Quatorze liens de correction non actionnables         | Retour vers un résumé, pas vers le contrôle éditable     |
| R27-P1-03 | P1       | Période pêche dérivée par années calendaires          | Fausse exclusion ou faux favorable                       |
| R27-P1-04 | P1       | Négations SIEG absorbées comme affirmations           | Mandat ou distinction artificiellement favorables        |
| R27-P1-05 | P1       | Plafond pêche français de 40 000 € appliqué trop tôt  | Faux favorable avant le 1er janvier 2026                 |
| R27-P1-06 | P1       | Date limite sans heure liée au fuseau du navigateur   | Mauvais jour local du guichet                            |
| R27-P2-01 | P2       | Territorialité UE déduite sans qualification formelle | Droit de l’Union supposé depuis un libellé ou « France » |
| R27-P2-02 | P2       | Rapport périmé après modification post-transfert      | TXT ou impression fondé sur un ancien prédiagnostic      |
| R27-P2-03 | P2       | Limite de mots décorative                             | Réponse hors limite encore présentée comme prête         |
| R27-P2-04 | P2       | Date de vérification future admise                    | Preuve datée après l’analyse                             |

## P1 — critères de fermeture et scénarios adversariaux

### R27-P1-01 — préserver la priorité du moteur

R26 pouvait remplacer un verdict moteur `invalid` ou `excluded` par
l’incomplétude composite de candidature ou de prédiagnostic jusque dans le
titre, la couleur, la région d’annonce, le TXT et l’impression.

Fermeture R27 :

- `invalid` reste prioritaire, avec ses motifs, quelle que soit
  l’incomplétude composite ;
- `excluded` vient ensuite et conserve la raison juridique ou financière
  établie ;
- l’incomplétude composite ne suspend que les codes moteur non négatifs ;
- titre, style, résumé, région d’annonce, revue, TXT et impression racontent le
  même état effectif.

Scénarios de fermeture :

1. activité prouvée non admissible et candidature incomplète :
   `excluded`, motif et style d’exclusion conservés partout ;
2. valeur structurée invalide et prédiagnostic incomplet :
   `invalid`, jamais remplacé par « incomplet ».

### R27-P1-02 — cibler les quatorze contrôles éditables

R26 renvoyait les anomalies transférées vers le résumé, pas vers les contrôles
de correction.

Fermeture R27 :

- quatorze liens et quatorze cibles uniques ;
- réponse `NON` : radio
  `site-aid-prediagnosis-{id}-no` ;
- réponse `À CONFIRMER` : champ
  `site-aid-prediagnosis-{id}-evidence` ;
- le clic ouvre l’étape utile et place réellement le focus sur un
  `input` ou un `textarea`.

Scénario : « dépenses » à `NON` et treize réponses à confirmer produisent
quatorze cibles distinctes et toutes éditables.

### R27-P1-03 — représenter les trois exercices pêche réels

R26 ne recevait que le début de l’exercice courant et dérivait les exercices
antérieurs par années calendaires. Cette dérivation est fausse pour les
exercices courts, longs ou irréguliers.

Fermeture R27 :

- déclarer ensemble les trois débuts réels et la fin inclusive de l’exercice
  courant ;
- imposer
  `secondPreviousStart < previousStart < currentStart <= ancre <= currentEnd` ;
- accepter l’ancre exactement au début ou à la fin de l’exercice courant ;
- ne dériver aucune borne par anniversaire ;
- quartet absent ou partiel : verdict incomplet, toutes les aides historiques
  pêche restent dans la tranche possible incertaine ;
- seul le sous-total assuré peut fonder une exclusion ; la tranche incertaine ne
  produit jamais un faux favorable ;
- propager la même période aux contrôles pêche individuel, inter-régimes et
  agriculture-pêche.

Scénarios de fermeture :

- exercice court : `2025-07-01 < 2026-01-01 < 2026-07-01`, fin
  `2026-12-31` ; une aide du `2025-06-30` reste hors fenêtre ;
- exercice long : `2022-01-01 < 2024-01-01 < 2026-01-01`, fin
  `2027-12-31` ; une aide du `2022-06-01` reste dans la fenêtre ;
- date ISO invalide, doublon, désordre, début futur ou fin avant l’ancre :
  donnée invalide ciblée ;
- quartet entièrement absent avec petit total : incomplet, aucune borne
  extrapolée.

Source primaire :
[règlement (UE) 717/2014 consolidé, article 3](https://eur-lex.europa.eu/eli/reg/2014/717/2023-10-25/fra).

### R27-P1-04 — borner la lecture des preuves SIEG

R26 pouvait lire une négation comme un mandat positif ou une distinction
favorable. La première lecture pré-gel R27 a confirmé deux contournements
bloquants et la porte a été immédiatement arrêtée :

- un statut SIEG structuré `OUI` pouvait rester favorable malgré « le mandat
  écrit ne lui a jamais confié le service », car la garde ne couvrait pas la
  séquence `ne` + pronom + auxiliaire + négation + participe ;
- un statut de relation structurée `NON` pouvait rester favorable malgré « les
  services ne sont pas réellement juridiquement distincts », car l’adverbe
  intercalaire échappait à la garde et le mot `distincts` était absorbé
  positivement.

Fermeture R27 :

- `sgeiEntrustmentVerified` et `sgeiRelationToCurrentService` portent seuls la
  conclusion structurée ;
- la pièce textuelle reste obligatoire, identifiable, déclarative et non
  authentifiée ;
- le texte sert uniquement à détecter une contradiction ou une ambiguïté,
  jamais à produire un fait favorable ;
- négation claire contraire au statut : donnée invalide ;
- clause mixte, ambiguë ou non concluante : dossier incomplet ;
- affirmation structurée cohérente : recevable sans authentification.

Matrice adverse minimale :

- mandat : `ne lui confie pas`, `ne confie aucun service`,
  `n’a jamais confié`, `N'A JAMAIS CONFIÉ`, `ne confie plus`,
  `ne lui a jamais confié`, `ne leur a pas attribué`,
  `ne nous ont plus confié`, `ne lui a en aucun cas confié` ;
- relation : `ne sont pas distincts`, `ne sont plus distincts`,
  `n’ont jamais été distincts`, `aucun service distinct`,
  `ne peuvent pas être considérés comme distincts`,
  `ne sont pas réellement juridiquement distincts`,
  `n’ont en réalité jamais été juridiquement distincts`,
  `ne peuvent en aucun cas être considérés comme juridiquement distincts` ;
- apostrophes ASCII et typographiques, casse et espaces variables ;
- contre-tests positifs : `confie le service` et
  `sont juridiquement distincts`.

Les expressions régulières bornées ont été corrigées, dix variantes
adversariales ajoutées et le moteur passe **1 073/1 073**. Le rejeu indépendant
passe **24/24 moteur et 2/2 rapport/TXT**. Cette preuve n’est ni un gel ni un
GO ; la relance consolidée est confirmée à **1 209/1 209** suites fonctionnelles
et **1 252/1 252** pour les six suites avec contrat qualité.

Source primaire :
[règlement (UE) 2023/2832, article 5, paragraphe 2](https://eur-lex.europa.eu/eli/reg/2023/2832/oj/fra).

### R27-P1-05 — dater le plafond pêche français

R26 appliquait 40 000 € à tout groupe français, y compris avant l’entrée en
vigueur de la branche française documentée.

Fermeture R27 :

- ancre française jusqu’au `2025-12-31` inclus : **30 000 €** ;
- ancre française à compter du `2026-01-01` : **40 000 €** seulement lorsque
  la condition applicable du registre central est établie ;
- autres États membres : 30 000 € par défaut, branche haute conditionnelle à
  confirmer ;
- les aides encore comprises dans les trois exercices restent comptées même si
  elles précèdent 2026.

Scénarios de fermeture :

- 31 100 € au `2025-12-31` en France : exclusion ;
- même cumul au `2026-01-01` avec registre documenté : pas d’exclusion ;
- 40 000 € exactement : accepté ; 40 000,01 € : exclusion ;
- Belgique à 31 100 € : branche haute à confirmer ; au-delà de 40 000 € :
  exclusion même sous la branche haute.

Sources primaires :
[règlement (UE) 717/2014 consolidé](https://eur-lex.europa.eu/eli/reg/2014/717/2023-10-25/fra),
[décret n° 2025-1361](https://www.legifrance.gouv.fr/loda/id/JORFTEXT000053177293)
et
[circulaire du Premier ministre](https://agriculture.gouv.fr/telecharger/153667).

### R27-P1-06 — utiliser le jour local officiel même sans heure

R26 permettait l’absence de fuseau officiel lorsque l’heure était vide et
pouvait comparer la date dans le fuseau du navigateur.

Fermeture R27 :

- toute échéance `exact-date` exige un fuseau IANA officiel, même sans heure ;
- le jour local est calculé uniquement dans ce fuseau ;
- l’absence d’heure publiée suspend l’instruction le jour de clôture au lieu
  d’inventer 23:59 ;
- le fuseau du navigateur reste une trace d’analyse, jamais le substitut du
  fuseau du guichet ;
- heure publiée : conversion de l’heure et du fuseau officiels, avec suspension
  des heures locales ambiguës ou inexistantes.

Scénario canonique : clôture Bretagne le `2026-07-26`, analyse à
`2026-07-26T00:30:00Z`, navigateur `America/Los_Angeles`, guichet
`Europe/Paris`, aucune heure publiée. Le résultat est « jour local du guichet,
heure non publiée, instruction suspendue ». Un fuseau officiel vide est une
erreur obligatoire.

## P2 — critères de fermeture et scénarios adversariaux

### R27-P2-01 — qualifier explicitement la territorialité UE

R26 combinait le territoire libre et l’État membre France sans statut
territorial UE formel.

Fermeture R27 :

- statut obligatoire :
  `unknown | eu-law-applicable | external-review-required` ;
- aucune inférence favorable depuis le nom du territoire ou l’État membre de
  l’autorité ;
- preuve identifiable : analyse, avis, attestation ou réponse, autorité ou
  source publique, référence distincte et date valide ;
- preuve et statut restent déclaratifs et non authentifiés ;
- `external-review-required` ne devient jamais favorable.

Scénarios : Nouvelle-Calédonie, Polynésie française, Saint-Barthélemy,
Guadeloupe et graphie libre inconnue ; preuve générique, référence sans date ou
date impossible rejetées ; Bretagne avec statut et preuve formelle conserve une
réserve de non-authentification.

### R27-P2-02 — invalider une analyse devenue périmée

R26 conservait l’analyse du dernier transfert même lorsque le prédiagnostic
avait été modifié ensuite dans son composant d’origine.

Fermeture R27 :

- après un transfert existant, la première modification du prédiagnostic émet
  un état périmé ;
- verdict, rapport d’impression et TXT cessent immédiatement d’être
  partageables ;
- « Analyser » renvoie vers le bouton de retransfert au lieu de recalculer avec
  un ancien snapshot ;
- le brouillon JSON reste marqué non exporté et précise qu’il exclut les
  modifications non retransférées ;
- retransfert puis nouvelle analyse rétablissent un état cohérent.

Scénario de fermeture : quatorze réponses documentées, transfert, résultat
favorable, puis passage de « dépenses » à `NON`. Aucun rapport ne reste
partageable ; l’analyse est bloquée jusqu’au retransfert, après lequel le verdict
composite devient incomplet.

### R27-P2-03 — compter réellement les mots

R26 stockait et affichait `wordLimit` sans compter la réponse.

Fermeture R27 :

- compteur Unicode déterministe visible ;
- association accessible entre compteur, contrôle et erreur ;
- égalité à la limite acceptée, dépassement bloquant ;
- revue, TXT et impression indiquent le compte et la limite ;
- le compteur de la plateforme officielle reste la référence au dépôt.

Scénarios : `L’entreprise` compte pour un mot ; `co-construit` pour deux. Une
limite de cinq accepte cinq mots et rejette six avec le rapport
`6 / limite 5`.

### R27-P2-04 — interdire une vérification future

R26 n’imposait pas que la date de vérification précède ou égale la date locale
de l’analyse.

Fermeture R27 :

- date ISO réelle ;
- `deadlineVerificationDate <= date locale de l’analyse` ;
- date locale dérivée de l’instant absolu et du fuseau navigateur enregistrés ;
- borne maximale visible après analyse.

Scénario : analyse locale le `2026-07-26`, vérification le `2026-07-27` :
erreur ciblée ; vérification le `2026-07-26` : acceptée.

## Contrats transversaux R27

### Versions et migrations

- moteur : `site-aid-decision-r27-2026-07-26` ;
- candidature : `site-aid-application-r27-2026-07-26` ;
- brouillon : `site-aid-draft-r27-2026-07-26` ;
- source et date publique : **26 juillet 2026**.

La migration d’un brouillon R26 est sans perte :

- le début déclaré de l’exercice pêche courant est conservé ;
- la paire prospective montant/preuve est conservée ;
- les deux débuts d’exercice antérieurs, la fin inclusive courante et la
  qualification territoriale UE commencent à vide ou à confirmer ;
- le prédiagnostic et les autres faits R26 restent déclaratifs ;
- aucun verdict, TXT ou rapport d’impression ancien n’est restauré ;
- le brouillon migré doit être réanalysé puis réexporté.

### Cohérence de représentation

Revue visible, titre, style, région d’annonce, rapport d’impression, TXT, JSON et
import racontent le même état. Une donnée déclarative ne devient jamais
authentifiée. L’ordre effectif est :

1. donnée moteur invalide ;
2. exclusion moteur établie ;
3. résultat moteur non négatif éventuellement suspendu par la candidature ou le
   prédiagnostic ;
4. réserves et sous-calculs indépendants conservés.

### Frontière internationale

Les références étrangères servent uniquement à l’ordre des questions, à la
progression multipage, à la reprise, à la vérification des réponses et au
traitement explicite de l’incertitude. Aucun programme, montant, critère,
formulaire ou droit étranger n’est transposé au lecteur français.

Les plafonds pêche, la période en exercices fiscaux, les règles SIEG, le registre
et la qualification territoriale restent exclusivement fondés sur le corpus
français et européen applicable de la matrice courante.

## Validation locale R27 observée et limites

| Contrôle                                                 | État observé                                                                                                                                              |
| -------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Moteur après correction des deux contournements SIEG     | **1 073/1 073**, dix variantes adversariales ajoutées                                                                                                     |
| Cinq suites fonctionnelles                               | **1 209/1 209**                                                                                                                                           |
| Contrat qualité                                          | **43/43**                                                                                                                                                 |
| Total ciblé des six suites                               | **1 252/1 252**                                                                                                                                           |
| Catalogue, langue, sitemap et indexation                 | **62/62**                                                                                                                                                 |
| Catalogue + qualité                                      | **53/53**                                                                                                                                                 |
| TypeScript, ESLint ciblé, Prettier et `git diff --check` | **verts**                                                                                                                                                 |
| Build Next.js direct                                     | **réussi, 159 pages statiques**                                                                                                                           |
| Artefact local servi                                     | **9 736 mots visibles, 49 minutes**                                                                                                                       |
| Vérificateur d’artefact                                  | **aucun écart sur ce guide ; rouge global à cause des temps de lecture hors périmètre de `crm-sur-mesure-ou-hubspot` et `seo-local-pme`**                 |
| `check:seo` global                                       | **491/492 ; seul échec hors périmètre : ancien hash de `src/lib/guides.ts` attendu par `editorial-governance` pour `prioriser-fonctionnalites-mvp-saas`** |
| Gel commun R27                                           | **produit dans `docs/research/manifests/aides-creation-site-internet-p3-2026-07-26-r26.sha256` — 86 fichiers**                                            |
| Deux nouveaux audits froids R27                          | **non réalisés — aucune note, aucun GO, aucune ouverture de P4**                                                                                          |

R27 est **VALIDÉ LOCALEMENT ET GELÉ**. Le prochain état probatoire exige deux
audits froids indépendants sur ce gel exact.

Ce rapport ne prouve ni audit froid R27, ni note, ni GO, ni P4, ni commit, ni
publication, ni déploiement, ni route servie en production, ni sitemap réellement
traité, ni indexation réelle, ni classement Google.

## Transition ultérieure vers R28

Après ce gel, les deux audits froids R27 ont rendu **74/100 — NO-GO P4** sur
l’axe factuel (`P0 : 0 ; P1 : 4 ; P2 : 1`) et
**87/100 — NO-GO P4** sur l’axe expérience
(`P0 : 0 ; P1 : 3 ; P2 : 2`). Leur union dédupliquée de **6 P1 et 2 P2**,
les corrections R28 et le nouvel état probatoire sont consignés dans
[`aides-creation-site-internet-p3-2026-07-26-r28.md`](aides-creation-site-internet-p3-2026-07-26-r28.md).

Le présent fichier reste la preuve historique du candidat R27 avant ses audits ;
il ne décrit plus l’état vivant du guide.
