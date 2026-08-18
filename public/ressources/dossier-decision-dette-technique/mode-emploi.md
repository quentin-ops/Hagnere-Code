# Dossier de décision — dette technique

Version 1.0 — modèle du 24 juillet 2026

Ce dossier aide une direction à comparer des options. Il ne mesure pas
automatiquement la qualité du code, ne remplace pas un audit et ne garantit
aucune économie. Les données d’Atelier Nova sont entièrement fictives.

## Ce que contient le dossier

- `registre-evenements.csv` : dix lignes vierges pour relever les changements,
  incidents, contournements et factures sans les compter deux fois ;
- `exemple-atelier-nova.csv` : calcul source de la capacité, de la trésorerie,
  du risque et de l’opportunité ;
- `comparatif-options.csv` : hypothèses et résultats des cinq options à 12, 36
  et 60 mois ;
- `decision-record.md` : modèle de décision, dictionnaire de données et exemple
  fictif rempli.

Le calculateur du guide permet de modifier les hypothèses et d’exporter un CSV.
L’opportunité commerciale reste volontairement hors de cet export et hors du
classement : elle doit être discutée séparément.

Les CSV sont encodés en UTF-8, utilisent le point-virgule comme séparateur et
la virgule comme séparateur décimal dans les résultats détaillés. Ce format est
adapté à un tableur configuré en français. Si votre outil attend des virgules
entre les colonnes ou un point décimal, choisissez explicitement ces paramètres
à l’import au lieu de laisser le tableur deviner.

## Parcours conseillé

1. Dupliquez `registre-evenements.csv`.
2. Commencez par cinq à dix événements récents.
3. Donnez un identifiant unique à chaque heure, facture, incident ou
   contournement.
4. Séparez les quatre catégories ci-dessous.
5. Élargissez l’échantillon si les événements ne sont pas comparables.
6. Remplissez `comparatif-options.csv` avec le même périmètre pour toutes les
   solutions.
7. Testez 12, 36 et 60 mois, successivement en trésorerie seule, avec capacité,
   puis avec risque attendu.
8. Consignez le verdict, sa lecture et ses inconnues dans `decision-record.md`.

## Les quatre catégories

1. **Trésorerie attribuable** : factures et dépenses qui disparaîtraient
   réellement.
2. **Capacité interne valorisée** : temps déjà payé qui pourrait être
   réaffecté ; ce n’est pas une économie bancaire automatique.
3. **Risque attendu** : probabilité annuelle × impact d’un incident futur
   distinct.
4. **Opportunité** : marge × causalité × part non récupérée ; elle reste hors du
   total principal.

Le **coût annuel observé** est la somme de la trésorerie attribuable et de la
capacité interne valorisée, uniquement si leurs événements sont distincts.

La **charge totale comparable** d’une option ajoute, sur un même horizon :

```text
projet et transition
+ coûts récurrents
+ trésorerie résiduelle
+ capacité résiduelle si cette lecture est choisie
+ risque attendu si cette lecture est choisie
```

Ce total n’est donc pas toujours une sortie de banque.

## Test rapide de sensibilité

Le test rapide du guide change une seule donnée : le coût annuel observé. Il
conserve la même part de trésorerie et de capacité que le scénario en cours,
puis les met à l’échelle proportionnellement. Les coûts de projet, les coûts
récurrents, les deux taux de réduction, l’impact de l’incident et les
probabilités restent fixes.

Cette convention permet de rejouer 12 000 €, 34 048 €, 80 000 € ou 300 000 €,
mais elle ne prédit pas qu’une entreprise réelle gardera la même structure de
coût.

## Règles anti-double comptage

- une heure interne et une facture externe ne peuvent couvrir le même travail ;
- une durée calendaire n’est pas un nombre d’heures travaillées ;
- le travail utile de la fonctionnalité n’est pas une friction ;
- un salaire déjà payé n’est pas une économie de trésorerie automatique ;
- l’impact d’un incident exclut les heures et factures déjà comptées ;
- un coût inconnu reste « inconnu », jamais zéro ;
- le chiffre d’affaires brut n’est pas une marge perdue ;
- une même réduction ne doit pas être appliquée par réflexe à la trésorerie et
  à la capacité : les deux taux doivent être confirmés séparément.

## Dictionnaire des principales colonnes

| Colonne                             | Unité           | Sens                                                                            |
| ----------------------------------- | --------------- | ------------------------------------------------------------------------------- |
| `capacite_annuelle_reference_eur`   | €/an            | temps interne valorisé                                                          |
| `tresorerie_annuelle_reference_eur` | €/an            | dépenses attribuables                                                           |
| `impact_incident_distinct_eur`      | € par incident  | impact hors coûts déjà comptés                                                  |
| `projet_transition_eur`             | € une fois      | projet, migration, coexistence, recette, formation et retrait                   |
| `recurrent_annuel_eur`              | €/an            | maintenance, licences ou exploitation propres à l’option                        |
| `reduction_tresorerie_pct`          | %               | part de trésorerie attribuable réellement supprimée                             |
| `reduction_capacite_pct`            | %               | part de capacité interne réellement libérée                                     |
| `probabilite_incident_pct`          | %/an            | probabilité de l’incident distinct dans l’option                                |
| `cout_annuel_observe_eur`           | €/an            | trésorerie attribuable + capacité interne valorisée, sans risque ni opportunité |
| `charge_comparable_*_mois_eur`      | € sur l’horizon | total selon la lecture indiquée                                                 |

Dans `registre-evenements.csv`, utilisez les types `changement`, `incident`,
`contournement` ou `facture`, et les niveaux de confiance `observé`,
`reconstitué` ou `hypothèse`.

## Avant de conclure

Demandez qui possède les hypothèses, ce que le pilote doit démontrer, comment
revenir en arrière, quels coûts restent inconnus et à quelle date la décision
sera revue. Si le gagnant change entre les trois lectures, archivez les trois
résultats : l’hypothèse décisive fait partie de la décision.
