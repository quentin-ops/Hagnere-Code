# Addendum de recherche R1 — `sla-maintenance-applicative`

Date d’arrêté : 28 juillet 2026  
Périmètre : recherche, modèle de décision et preuves attendues  
Statut : **R1 clos — GO_LOCAL_DRAFT ; le R0 NO_GO reste l’état historique de départ**

## 1. Contradiction R0 et règle de gouvernance

Le dossier du 23 juillet 2026 présente quatre portes comme validées, une
scorecard à `19/20`, puis un statut « publiable ». L’audit froid du 24 juillet
attribue au même guide `80/100`, le classe en « audité / à réécrire » et
identifie des manques décisionnels matériels :

- aucune conversion du taux de disponibilité en temps ;
- aucune chronologie calculée de bout en bout ;
- aucun coût d’incident reproductible ;
- aucun RPO traduit en opérations et en temps de ressaisie ;
- aucune comparaison de couvertures sur un horizon commun ;
- sources françaises, européennes et internationales trop courtes ;
- restauration, communication, correctifs et fin de support non prouvés.

Le verdict gouvernant du point de départ est donc `NO_GO`. Le `19/20` reste un
artefact historique, pas une preuve de profondeur, de déploiement ou
d’indexation. La réalisation R1 a depuis fermé les portes locales documentées
dans la section 9 ; elle ne vaut toujours ni commit, ni push, ni déploiement,
ni publication, ni indexation.

## 2. Position défendue

Il n’existe pas de SLA universel. Un `99,9 %`, un « P1 sous quatre heures » ou
un `24/7` isolé ne permet pas de décider. Le niveau doit être construit à
partir :

1. du parcours métier réellement interrompu ;
2. de la plage pendant laquelle il compte ;
3. de la méthode de mesure et de ses exclusions ;
4. de l’impact temporel, humain, économique et sur les données ;
5. du mode dégradé et des dépendances ;
6. d’une restauration et d’une escalade réellement exercées ;
7. du coût annuel comparable des options ;
8. du droit applicable et, le cas échéant, du périmètre sectoriel.

La conclusion professionnelle est conditionnelle : acheter une capacité
prouvée sur les parcours critiques, pas un pourcentage prestigieux. Le moteur
compare ; il ne recommande ni une offre ni une clause à la place de la
direction, du métier, de la technique et du conseil juridique.

## 3. Benchmark officiel international

| Zone | Références | Gain d’information | Frontière |
| --- | --- | --- | --- |
| France | `ANSSI-BACKUP-2025`, `LEGIFRANCE-1103`, `LEGIFRANCE-1217` | RTO/RPO reliés au besoin, restauration, force du contrat et pluralité possible des conséquences de l’inexécution | Pas de clause type ni d’indemnisation automatique |
| États-Unis / international | `GOOGLE-SRE-SLO`, `GOOGLE-MAPS-SLA`, `NIST-RTO`, `NIST-RPO` | SLI utilisateur, SLO itératif, anatomie détaillée d’un SLA public, définitions RTO/RPO | Contextes SRE, cloud et fédéral américain ; aucun seuil à copier |
| Royaume-Uni | `UK-SOFTWARE-CODE-2026`, `NCSC-APC` | Correctifs, support, fin de support, communication et claims vérifiables | Code volontaire cyber, pas droit français ni maintenance fonctionnelle complète |
| Allemagne | `BSI-BACKUP` | Concept de sauvegarde, responsabilités et tests de restauration | Édition anglaise 2022 qualifiée ; ne pas la présenter comme édition allemande courante |
| Union européenne | `DORA-ART11-12` | Continuité TIC, réponse, reprise, sauvegarde et restauration dans un cadre réglementé | Finance uniquement après qualification du champ et des exemptions |
| International ISO | `ISO-27031-2025`, `ISO-20000-1`, `ISO-22301` | Préparation TIC, management des services et continuité d’activité | Normes volontaires ; pages publiques partielles ; aucune conformité implicite |
| Australie | `ASD-ESSENTIAL-EIGHT` | Correctifs, sauvegardes et maturité cyber graduée | Référentiel australien de cybersécurité, pas SLA ni obligation française |

## 4. Formules et fixtures reproductibles

Toutes les valeurs ci-dessous sont fictives. Une inconnue reste `null` ou
`INCOMPLET` ; elle n’est jamais remplacée par zéro.

### 4.1 Disponibilité — `AVAIL-F01`

Pour une mesure temporelle :

```text
minutes couvertes = jours de la fenêtre × heures couvertes par jour × 60
arrêt admis = minutes couvertes × (100 - cible %) / 100
```

Fixture centrale :

```text
fenêtre = 30 jours
couverture = 24 h/jour
cible = 99,9 %
minutes couvertes = 43 200
arrêt admis = 43,2 min = 2 592 s
```

Contrôles :

| Cible | Arrêt admis sur 30 jours 24/7 |
| ---: | ---: |
| 99 % | 432 min |
| 99,5 % | 216 min |
| 99,9 % | 43,2 min |
| 99,95 % | 21,6 min |
| 99,99 % | 4,32 min |

Cette formule ne doit pas être mélangée avec un SLA mesuré par requêtes. Le
SLA Google Maps illustre une autre unité : requêtes valides et requêtes en
échec. Avant calcul, il faut donc fixer fenêtre, unité, dénominateur, panne
partielle, maintenance, exclusions, source et propriétaire de la mesure.

### 4.2 Sept horloges — `TIMELINE-F01`

```text
délai d’une étape = instant de l’étape - instant observé
```

Les instants portent obligatoirement un décalage UTC explicite. La fixture
utilise `+02:00` :

| Étape | Instant | Délai depuis 09:10 |
| --- | --- | ---: |
| Incident observé | 09:10 | 0 min |
| Accusé | 09:18 | 8 min |
| Intervention qualifiée | 10:05 | 55 min |
| Contournement | 11:40 | 150 min |
| Rétablissement | 14:20 | 310 min |
| Données vérifiées | 16:00 | 410 min |
| Clôture | 18:00 | 530 min |

Une heure sans fuseau, une étape antérieure à la précédente ou un événement
manquant rend la chronologie `INCOMPLET`. Les pauses contractuelles et le
chevauchement avec la plage de couverture nécessitent une règle distincte :
ils ne sont pas déduits silencieusement de cette chronologie factuelle.

### 4.3 Coût d’incident — `COST-F01`

```text
capacité interne =
  durée × personnes affectées × coût horaire chargé × part productive

marge contributive perdue =
  durée × marge contributive perdue par heure

coût brut =
  capacité interne + rattrapage distinct + marge contributive perdue
  + coûts externes de reprise

exposition nette illustrative = coût brut - crédit de service
couverture du crédit = crédit / coût brut
```

Fixture :

| Composant | Calcul | Résultat |
| --- | --- | ---: |
| Capacité interne | `4,2 h × 12 × 35 € × 100 %` | 1 764 € |
| Rattrapage distinct | hypothèse non incluse ailleurs | 420 € |
| Marge contributive perdue | `4,2 h × 114,2857 €` | 480 € |
| Reprise externe | hypothèse | 900 € |
| **Coût brut** | somme | **3 564 €** |
| Crédit séparé | hypothèse contractuelle | 200 € |
| **Exposition nette** | `3 564 - 200` | **3 364 €** |
| Couverture du crédit | `200 / 3 564` | **5,61 %** |

Le chiffre d’affaires n’est pas ajouté à la marge perdue. Les composantes
doivent rester mutuellement exclusives : si une estimation de marge ou de
production incorpore déjà un coût humain, ce coût n’est pas additionné une
seconde fois. Réputation, pénalités de clients, assurance et recours
juridiques restent séparés tant qu’ils ne sont pas documentés.

### 4.4 RPO — `RPO-F01`

La fixture centrale définit **une seule fois** le débit de `40 opérations/h`.
Les vues, tableaux et exports doivent référencer `RPO-F01` au lieu de recopier
une deuxième constante `40`.

```text
opérations à risque = opérations/h × RPO en heures
temps de ressaisie = opérations à risque × minutes/opération / 60
coût de ressaisie = temps de ressaisie × coût horaire chargé
```

Avec `RPO = 1,5 h`, `4 min/opération` et `35 €/h` :

```text
opérations à risque = débit de RPO-F01 × 1,5 = 60
temps de ressaisie = 60 × 4 / 60 = 4 h
coût de ressaisie = 4 × 35 = 140 €
```

Une source de reconstruction, une détection des doublons et un contrôle de
cohérence sont requis. Une sauvegarde déclarée sans restauration testée ne
valide pas `restoration-test`.

### 4.5 Comparaison des couvertures — `COVERAGE-F01`

```text
coût contracté annuel =
  coût ponctuel + 12 × mensualité + coût annuel des exercices

coût interne annuel =
  12 × heures internes mensuelles × coût horaire

exposition résiduelle annuelle =
  incidents résiduels/an × coût résiduel/incident

total annuel =
  coût contracté + coût interne + exposition résiduelle
```

| Option fictive | Contracté | Interne | Résiduel | Total annuel |
| --- | ---: | ---: | ---: | ---: |
| Heures ouvrées | 21 400 € | 2 256 € | 8 000 € | **31 656 €** |
| Plage étendue | 26 300 € | 1 692 € | 5 836 € | **33 828 €** |
| Continuité renforcée | 50 400 € | 1 128 € | 1 836 € | **53 364 €** |

La fixture centrale classe les heures ouvrées en premier, mais ce n’est pas
une recommandation. Les expositions résiduelles exigent une source et une
date. Les options ne deviennent comparables qu’avec les mêmes parcours,
dépendances, horizon, exercices et grandeurs économiques.

Contrôle inverse :

- la plage étendue ajoute `4 336 €` de coûts contractés et internes par
  rapport aux heures ouvrées ; elle doit éviter davantage d’impact
  additionnel pour atteindre l’équilibre ;
- la continuité renforcée ajoute `23 536 €` de coûts contractés et internes
  par rapport à la plage étendue ;
- un mode dégradé testé peut faire gagner l’option moins couvrante ;
- une activité continue, sans contournement et à dommage rapide, peut faire
  gagner l’option renforcée.

## 5. Architecture de décision

Le moteur ne produit pas de score compensatoire. Un bon prix ne peut pas
compenser une restauration échouée.

| État | Condition | Conséquence |
| --- | --- | --- |
| `STOP` | Incident ou compromission active, autorité absente, ou preuve en échec | Traiter l’urgence, le mandat ou le défaut avant toute comparaison |
| `INCOMPLET` | Exemple fictif, donnée requise inconnue, calcul invalide ou moins de deux options complètes | Aucun classement décisionnel ni export final |
| `COMPARABLE` | Données réelles complètes, mais au moins une preuve seulement déclarée ou inconnue | Comparaison de travail permise, décision finale bloquée |
| `DECISION_HUMAINE` | Données réelles et huit preuves vérifiées | Export de la note permis ; arbitrage toujours humain |

Les huit preuves canoniques sont :

| ID moteur | Question fermée par la preuve |
| --- | --- |
| `service-scope` | Quel service et quel parcours fonctionnent réellement ? |
| `coverage-window` | Quand le chronomètre s’applique-t-il ? |
| `measurement` | Qui mesure quoi, avec quel dénominateur et quelles exclusions ? |
| `incident-clock` | À quel moment chaque étape a-t-elle réellement eu lieu ? |
| `restoration-test` | La reprise et les données ont-elles été restaurées et contrôlées ? |
| `dependencies` | Les tiers et accès permettent-ils l’objectif de bout en bout ? |
| `communications` | Qui informe, décide et suit les actions ? |
| `exit-eol` | Que se passe-t-il pour les correctifs, la fin de support, la sortie et les recours ? |

Le détail des pièces acceptables et leurs `sourceIds` est canonique dans
`src/lib/sla-maintenance-required-proofs.json`.

## 6. Matrice claims → sources → limites

| Claim utilisable | Sources officielles | Ce qu’elles soutiennent | Limite à conserver |
| --- | --- | --- | --- |
| Un SLO utile part de l’expérience utilisateur et sert une décision | `GOOGLE-SRE-SLO` | SLI utilisateur, objectifs approuvés, error budget et itération | SRE n’est pas un contrat de TMA |
| Un SLA exploitable définit plus qu’un taux | `GOOGLE-MAPS-SLA` | Service, mesure, échec, exclusions, demande et crédit | Architecture propre à Google Maps |
| Réponse, reprise et données sont des moments distincts | `NIST-RTO`, `NIST-RPO`, `ANSSI-BACKUP-2025` | Temps de reprise, point de données et traduction française de continuité | Aucun délai universel |
| Une sauvegarde déclarée ne prouve pas la restauration | `ANSSI-BACKUP-2025`, `BSI-BACKUP`, `ASD-ESSENTIAL-EIGHT` | Stratégie, fréquence, responsabilités, restauration et tests | Référentiels cyber, pas résultat d’un exercice réel |
| La continuité TIC doit s’aligner sur la continuité métier | `ISO-27031-2025`, `ISO-22301` | Préparation TIC, analyse d’impact, exercices et amélioration | Normes volontaires ; textes complets non reproduits |
| La maintenance doit être gérée, mesurée et améliorée | `ISO-20000-1` | Système de management des services | Ne fournit ni tarifs ni délais prêts à signer |
| Correctifs, support et fin de support doivent être explicites | `UK-SOFTWARE-CODE-2026`, `NCSC-APC`, `ASD-ESSENTIAL-EIGHT` | Politiques, claims, preuves, préavis et communication | Référentiels étrangers et principalement cyber |
| Un crédit de service ne doit pas être présenté comme réparation universelle | `GOOGLE-MAPS-SLA`, `LEGIFRANCE-1217` | Exemple de crédit borné et éventail légal abstrait des conséquences d’inexécution | Le droit concret dépend du contrat, du dommage et de la preuve |
| Les engagements contractuels doivent être précisément écrits | `LEGIFRANCE-1103` | Force obligatoire du contrat légalement formé | Aucune validation d’une clause particulière |
| DORA exige continuité et sauvegarde pour son champ | `DORA-ART11-12` | Politique de continuité TIC, réponse, reprise, sauvegarde et restauration | Secteur financier uniquement après qualification |

## 7. Matrice des quinze sources gelées

| ID | Organisme, édition et date | Usage retenu | Limite courte |
| --- | --- | --- | --- |
| `GOOGLE-SRE-SLO` | Google SRE, *Site Reliability Workbook*, 2018 | SLI/SLO et décision | Pas de SLA français type |
| `GOOGLE-MAPS-SLA` | Google Cloud, version modifiée le 27 janvier 2025 | Anatomie d’un SLA public | Valeurs non transposables |
| `NIST-RTO` | NIST, définition issue de SP 800-34 Rev. 1, mai 2010 | Objectif de temps de reprise | Contexte fédéral américain |
| `NIST-RPO` | NIST, définition issue de SP 800-34 Rev. 1, mai 2010 | Point de données récupérable | Ne prouve pas la restauration |
| `ANSSI-BACKUP-2025` | ANSSI-BP-100 v1.1, 27 novembre 2025 | Sauvegarde et restauration | Pas clause SLA |
| `LEGIFRANCE-1103` | Code civil, en vigueur depuis le 1er octobre 2016 | Force du contrat | Revue juridique requise |
| `LEGIFRANCE-1217` | Code civil, en vigueur depuis le 1er octobre 2018 | Inexécution et conséquences possibles | Aucun recours automatique |
| `UK-SOFTWARE-CODE-2026` | DSIT, mise à jour du 15 janvier 2026 | Maintenance sécurisée et communication | Code volontaire britannique |
| `NCSC-APC` | NCSC APC v1.0, 7 mai 2025 | Claims et preuves | Socle cyber, auto-évaluation |
| `BSI-BACKUP` | BSI IT-Grundschutz, édition anglaise 2022, CON.3 | Concept et tests de sauvegarde | Édition qualifiée, non courante par défaut |
| `DORA-ART11-12` | Règlement (UE) 2022/2554, JO du 27 décembre 2022 | Continuité TIC et restauration | Finance seulement |
| `ISO-27031-2025` | ISO/IEC 27031:2025, édition 2, mai 2025 | Préparation TIC | Norme volontaire |
| `ISO-20000-1` | ISO/IEC 20000-1:2018, édition 3, confirmée 2023, Amd 1:2024 | Management des services | Aucun délai type |
| `ISO-22301` | ISO 22301:2019, édition 2, Amd 1:2024 | Continuité d’activité | Édition en révision |
| `ASD-ESSENTIAL-EIGHT` | ASD Essential Eight, novembre 2023 | Correctifs, sauvegardes et maturité | Cadre cyber australien |

Les URL directes, usages détaillés et limites sont stockés dans
`src/lib/sla-maintenance-workbook-sources.json`, avec
`accessedOn = 2026-07-28`.

## 8. Avertissements de périmètre

### Juridique

- Les articles 1103 et 1217 ne constituent pas une consultation juridique.
- Le moteur ne conclut ni à la validité d’une clause, ni à une faute, ni à un
  droit à réparation.
- Crédit de service, limitation de responsabilité, assurance, pénalités,
  causalité et preuve doivent rester séparés jusqu’à revue compétente.
- L’urgence cyber et le litige d’autorité précèdent la comparaison d’offres.

### Réglementaire

- DORA est utilisé comme exemple sectoriel borné aux entités financières dans
  son champ, sous réserve des exemptions et textes complémentaires.
- Aucune phrase ne doit transformer DORA, le UK Code, l’Essential Eight, le
  NIST, le BSI ou les normes ISO en obligation générale de `24/7`.
- Une certification ISO ne peut être revendiquée à partir d’un calculateur,
  d’une checklist ou de la lecture de la page publique d’une norme.

### Technique et économique

- La disponibilité temporelle ne se mélange pas à une disponibilité par
  requêtes.
- RTO, RPO, réponse, intervention, contournement, rétablissement, vérification
  des données et clôture ne sont pas des synonymes.
- Une sauvegarde n’est une preuve que lorsqu’une restauration cohérente a été
  exécutée et mesurée.
- Les prix, fréquences d’incident et expositions résiduelles des fixtures ne
  sont ni des moyennes de marché ni des devis.
- Une option moins chère ne gagne qu’après contrôle du scénario inverse, des
  modes dégradés et du dommage aux heures critiques.

## 9. Clôture locale de R1

Les portes prévues ont été exécutées :

1. moteur fail-closed et huit domaines de contrôle intégrés à la page ;
2. classeur de dix-sept feuilles généré puis réimporté ;
3. 6 mutations, 10 cas adversariaux et 28 sabotages de formules exactes
   détectés ;
4. calculs et formulations soumis à une contre-vérification indépendante ;
5. navigateur réel contrôlé de 320 à 1 600 px et téléchargement servi vérifié ;
6. état final limité à `GO_LOCAL_DRAFT`.

Le rapport de BAT correspondant se trouve dans
`docs/research/evidence/sla-maintenance-applicative-r1-bat-2026-07-28.md`.
Cette clôture locale ne prouve ni recalcul Microsoft Excel réel, ni commit, ni
push, ni déploiement, ni publication, ni indexation.
