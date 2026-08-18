# Relevé de décision — dette technique

Version du modèle : 1.0 — 24 juillet 2026

## Identification

Date du calcul :

Date de la décision :

Propriétaire métier :

Propriétaire technique :

Application et version :

Périmètre fonctionnel commun :

Horizon retenu : 12 / 36 / 60 mois

Lecture retenue :

- [ ] trésorerie seule ;
- [ ] trésorerie + capacité interne ;
- [ ] trésorerie + capacité interne + risque attendu.

## Sous-totaux de départ

| Montant                       | Valeur | Unité      | Source | Confiance                         |
| ----------------------------- | -----: | ---------- | ------ | --------------------------------- |
| Trésorerie attribuable        |        | €/an       |        | observé / reconstitué / hypothèse |
| Capacité interne valorisée    |        | €/an       |        | observé / reconstitué / hypothèse |
| Coût annuel observé           |        | €/an       | calcul |                                   |
| Impact de l’incident distinct |        | €/incident |        |                                   |
| Risque attendu dans l’attente |        | €/an       | calcul |                                   |
| Opportunité hors classement   |        | €          |        |                                   |

## Résultats comparables

| Option                             | Charge totale comparable | Écart avec le minimum | Coûts inconnus ? | Seuil de bascule |
| ---------------------------------- | -----------------------: | --------------------: | ---------------- | ---------------: |
| Attendre sous surveillance         |                          |                       | oui / non        |       sans objet |
| Stabiliser une zone                |                          |                       | oui / non        |                  |
| Rénover progressivement            |                          |                       | oui / non        |                  |
| Remplacer par un logiciel standard |                          |                       | oui / non        |                  |
| Réécrire l’application             |                          |                       | oui / non        |                  |

Option au coût renseigné le plus faible :

Option finalement retenue :

Pourquoi l’option retenue diffère-t-elle éventuellement du minimum :

## Hypothèses qui peuvent changer la décision

| Hypothèse                   | Valeur | Unité      | Source | Confiance | Valeur qui ferait changer le choix |
| --------------------------- | -----: | ---------- | ------ | --------- | ---------------------------------: |
| Coût annuel observé         |        | €/an       |        |           |                                    |
| Réduction de trésorerie     |        | %          |        |           |                                    |
| Réduction de capacité       |        | %          |        |           |                                    |
| Coût de transition          |        | € une fois |        |           |                                    |
| Coût récurrent              |        | €/an       |        |           |                                    |
| Probabilité de l’incident   |        | %/an       |        |           |                                    |
| Impact de l’incident        |        | €/incident |        |           |                                    |
| Opportunité hors classement |        | €          |        |           |                                    |

## Inclusions, exclusions et inconnues

Inclus dans toutes les options :

Exclu de toutes les options :

Migration incluse :

Double fonctionnement inclus :

Recette et formation incluses :

Retour arrière inclus :

Retrait de l’ancien système inclus :

Coûts encore inconnus :

Une inconnue a-t-elle été remplacée par zéro ? oui / non

Si oui, la comparaison n’est pas validée.

## Pilote et arrêt

Ce que le pilote doit démontrer :

Échantillon et période :

Critère de poursuite :

Critère de correction :

Critère d’arrêt :

Plan de retour arrière :

Réconciliation des données : comment vérifier que l’ancien et le nouveau
système donnent les mêmes résultats avant le retrait ?

## Révision

Date de révision :

Événement qui rouvre la décision :

Résultat réellement observé depuis la décision :

---

## Exemple fictif rempli — Atelier Nova

Cet exemple montre comment archiver le résultat du guide ; il ne constitue ni
un prix de marché ni une recommandation.

- date du calcul : 24 juillet 2026 ;
- horizon : 36 mois ;
- lecture : trésorerie + capacité + risque attendu ;
- trésorerie attribuable : 8 400 €/an ;
- capacité interne valorisée : 25 648 €/an ;
- coût annuel observé : 34 048 €/an ;
- impact incident distinct : 40 000 € ;
- opportunité : 3 200 €, hors classement.

| Option                             | Charge totale comparable | Écart avec le minimum | Coûts inconnus ? | Seuil de bascule |
| ---------------------------------- | -----------------------: | --------------------: | ---------------- | ---------------: |
| Attendre sous surveillance         |             126 144,00 € |           20 164,80 € | non              |       sans objet |
| Stabiliser une zone                |             105 979,20 € |                0,00 € | non              |   19 111,11 €/an |
| Rénover progressivement            |             120 586,00 € |           14 606,80 € | non              |   31 577,78 €/an |
| Remplacer par un logiciel standard |             190 750,40 € |           84 771,20 € | non              |   67 179,49 €/an |
| Réécrire l’application             |             197 821,60 € |           91 842,40 € | non              |   62 156,86 €/an |

Décision provisoire de l’exemple : stabiliser une zone, puis réexaminer après
plusieurs changements comparables. Cette décision change si la durée de vie,
la structure de la friction, la sécurité, le support ou les coûts de migration
ne correspondent plus aux hypothèses.

## Formules de contrôle

```text
coût annuel observé = trésorerie attribuable + capacité interne valorisée
risque attendu annuel = probabilité annuelle × impact distinct

charge comparable =
  projet et transition
  + récurrent sur l’horizon
  + trésorerie résiduelle
  + capacité résiduelle si la lecture l’inclut
  + risque attendu si la lecture l’inclut
```

Le seuil de bascule n’a pas la même unité dans toutes les lectures : en
trésorerie seule, il s’agit de trésorerie attribuable annuelle ; dans les deux
autres lectures, il s’agit du coût annuel observé, avec la même ventilation
trésorerie/capacité que le scénario.
