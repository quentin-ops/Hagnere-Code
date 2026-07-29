# Modèle de dossier de travail d'un guide

> Copier ce fichier vers `docs/research/<slug>.md`, puis remplir chaque
> section. Ce dossier est le journal de décision du guide ; il ne sert pas à
> accumuler du texte brut ni des transcripts d'agents.

Le déroulement et les portes de sortie sont définis dans
[`docs/workflow-maitre-guides-4-passes.md`](../workflow-maitre-guides-4-passes.md).

## Journal des quatre passes

Propriétaire éditorial unique :

| Passe                                  | État    | Date | Responsable | Snapshot | Blocages       |
| -------------------------------------- | ------- | ---- | ----------- | -------- | -------------- |
| 1. Création complète                   | À faire |      |             |          |                |
| 2. Enrichissement et vérification      | Bloquée |      |             |          | P1 non validée |
| 3. Polish rédactionnel                 | Bloquée |      |             |          | P2 non validée |
| 4. Antipasse IA et contrôle final      | Bloquée |      |             |          | P3 non validée |

États autorisés : `À faire`, `En cours`, `Bloquée`, `À reprendre` et
`Terminée — porte validée`. Une modification d'un fichier du snapshot après le
manifeste consigné invalide les portes concernées jusqu'à la revue du diff.

### Manifeste du snapshot

| Fichier contrôlé | SHA-256 | Passe | Remarque |
| ---------------- | ------- | ----- | -------- |
|                  |         |       |          |

Ne pas inscrire ici le hash de ce dossier après modification : cela créerait
une référence impossible à stabiliser. Après chaque porte, enregistrer ce hash
dans `docs/research/manifests/<slug>-p<1|2|3|4>.sha256` comme prévu par le
workflow.

## 1. Fiche d'identité

```text
Slug :
Statut actuel : Brouillon
Requête principale, encore hypothétique avant recherche :
Moment du parcours : comprendre / explorer / décider / sécuriser
Lecteur précis :
Situation déclenchante :
Décision principale après lecture :
Niveau de connaissance au départ :
5 questions indispensables :
3 objections ou craintes :
Action utile sans contact commercial :
CTA possible :
Hors périmètre :
Date de la recherche :
Responsable de la synthèse :
```

## 1 bis. Contrat de langage humain

Cette section est rédigée avant le plan. Elle est relue après la rédaction.

- Phrase exacte que le lecteur pourrait dire au téléphone :
- Réponse qu'il attend en une phrase :
- Terme central expliqué sans jargon :
- Mots ordinaires employés par le lecteur :
- Mots d'agence ou de consultant à éviter :
- Projet des 150 premiers mots :
- Ce que le lecteur saura décider après ces 150 mots :
- H2 relus isolément : oui / non
- Comparaison comprise à 390 px sans colonne masquée : oui / non
- FAQ dont la première phrase répond : oui / non
- CTA formulé comme résultat pour le prospect :

### Test sujet, action, résultat

Recopier les cinq phrases les plus abstraites du brouillon. Pour chacune,
nommer qui agit, ce qu'il fait et ce qui change. Si l'un des trois éléments
manque, réécrire la phrase.

| Phrase initiale | Qui agit ? | Action concrète | Résultat pour le lecteur | Phrase réécrite |
| --------------- | ---------- | --------------- | ------------------------ | --------------- |
|                 |            |                 |                          |                 |

### Test de l'ouverture

- [ ] la situation vécue apparaît avant la méthode de l'agence ;
- [ ] SEO, SLA, TCO, MVP ou tout autre sigle est défini au premier usage ;
- [ ] aucun lexique de masse ne retarde la réponse ;
- [ ] aucune métaphore ne devient un système à apprendre ;
- [ ] la réponse reste honnête sans accumuler les réserves avant l'explication.

## 2. Cannibalisation

| Page existante | Intention de cette page | Différence du nouveau guide | Lien ou arbitrage nécessaire |
| -------------- | ----------------------- | --------------------------- | ---------------------------- |
|                |                         |                             |                              |

**Justification d'une URL distincte :** expliquer en une phrase pourquoi ce
guide répond à une décision que les pages existantes ne traitent pas déjà.

## 3. Demande et vocabulaire du lecteur

- questions réellement observées ;
- formulations employées par des dirigeants ou indépendants ;
- recherche principale et variantes utiles ;
- ce qui relève d'une supposition et non d'une donnée mesurée ;
- date et mode d'observation.

## 4. Carte concurrentielle

| Page | Réponse et angle | Preuves/artefacts | Bon point | Manque décisionnel | Conflit d'intérêt éventuel |
| ---- | ---------------- | ----------------- | --------- | ------------------ | -------------------------- |
|      |                  |                   |           |                    |                            |

**Angle mort commun :**

**Valeur originale que le guide apportera :**

## 5. Fiche de preuves

| Affirmation utilisable | Source primaire, URL et passage utile | Nature | Périmètre | Date/consultation | Confiance | Emplacement du lien visible | Conséquence lecteur | Fraîcheur |
| ---------------------- | ------------------------------------- | ------ | --------- | ----------------- | --------- | --------------------------- | ------------------- | --------- |
|                        |                                       |        |           |                   |           |                             |                     |           |

Un prix, un taux, une obligation ou un cas décisif doit être relié à sa source
au niveau de l'affirmation visible. Une liste de liens en fin de page ne suffit
pas. Sans corpus daté et méthode publiable, une fourchette est nommée
« estimation éditoriale Hagnéré Code » et ses hypothèses sont données. Un cas
extrême n'est conservé que s'il représente réellement le problème traité ; il
ne sert jamais à inquiéter artificiellement le lecteur.

### Contradictions et données à ne pas publier

-

### Calculs reproductibles

Pour chaque calcul : formule, unités, hypothèses, résultat, contrôle inverse et
arrondis.

- Nature du résultat : estimation initiale / coût total / gain net / ROI / délai de retour
- Horizon et périodicité :
- Postes inclus une seule fois :
- Postes exclus ou inconnus, explicitement « à confirmer » :
- Si ROI : `(bénéfices cumulés attribuables - TCO) / TCO × 100`
- Si temps valorisé : hypothèse de réaffectation ou coût réellement évité :

## 6. Empreinte éditoriale à ne pas reproduire

Observer les trois à cinq guides les plus proches :

| Guide | Type d'ouverture | Progression | Dispositif récurrent | Type d'exemple | Place du CTA | Type de conclusion |
| ----- | ---------------- | ----------- | -------------------- | -------------- | ------------ | ------------------ |
|       |                  |             |                      |                |              |                    |

Choix du nouveau guide :

```text
Tension ou question motrice :
Type d'ouverture retenu et pourquoi :
Progression retenue et pourquoi :
Artefact signature :
Rythme/registre de voix :
Place naturelle du CTA :
Forme de conclusion :
Au moins trois différences avec les guides voisins :
```

## 7. Plan annoté

| Section provisoire | Question résolue | Preuve ou exemple | Conséquence/décision | Format choisi |
| ------------------ | ---------------- | ----------------- | -------------------- | ------------- |
|                    |                  |                   |                      |               |

Retirer toute section qui n'apporte ni réponse, ni preuve, ni décision.

## 8. Ressource et conversion

```text
Une ressource est-elle naturellement nécessaire ? oui / non
Problème qu'elle résout après la lecture :
Résultat autonome produit :
Format éditable et format de consultation :
Rubriques, champs ou matrices réellement livrés :
Exemple rempli :
Conclusion « ne pas investir » possible :
Sources, hypothèses et limites visibles :
Données saisies et destination de ces données :
Processus de génération reproductible :
Journal de QA (formats, pages, visuel, accessibilité, liens, compatibilité) :
Limites connues et niveau de revue humaine :
Mode de maintenance :
Test du fichier ou outil :
Bon fit Hagnéré Code :
Mauvais fit :
Action non commerciale :
CTA principal et résultat après clic :
```

## 9. Rapports de sortie des quatre passes

### Rapport P1 — Création complète

```text
PASSE_1_TERMINEE
Slug :
Fichiers créés ou réécrits :
Contrat de réponse :
Sources primaires :
Plan et sections :
Calculs et exemples :
Contre-cas :
CTA et destination :
Contrôles :
Risques résiduels :
Manifeste P1 :
```

### Rapport P2 — Enrichissement et vérification

```text
PASSE_2_TERMINEE
Affirmations revérifiées :
Affirmations corrigées ou retirées :
Sources contradictoires :
Calculs refaits indépendamment :
Risques, sécurité, données et réversibilité :
Enrichissements qui changent la décision :
Contrôles :
Risques résiduels :
Manifeste P2 :
```

### Rapport P3 — Polish rédactionnel

```text
PASSE_3_TERMINEE
Problèmes de lisibilité corrigés :
Jargon retiré ou défini :
Transitions restructurées :
Chiffres clarifiés :
Répétitions retirées :
Nuances P2 préservées :
Contrôles :
Risques résiduels :
Manifeste P3 :
```

### Rapport P4 — Antipasse IA et contrôle final

```text
PASSE_4_TERMINEE
Motifs artificiels détectés :
Corrections appliquées :
Passages volontairement conservés :
Faits et calculs inchangés ou revérifiés :
Scorecard proposée :
Contrôles :
Risques résiduels :
Manifeste P4 :
```

## 10. Revue finale

### Scorecard justifiée

| Axe         | Note 0-2 | Preuve dans la page | Correction éventuelle |
| ----------- | -------: | ------------------- | --------------------- |
| Intention   |          |                     |                       |
| Décision    |          |                     |                       |
| Pédagogie   |          |                     |                       |
| Profondeur  |          |                     |                       |
| Preuve      |          |                     |                       |
| Comparaison |          |                     |                       |
| Originalité |          |                     |                       |
| Style       |          |                     |                       |
| Conversion  |          |                     |                       |
| SEO/produit |          |                     |                       |

### Test lecteur non technique

```text
Test réalisé par une personne réelle : oui / non
Profil du lecteur :
Ce qu'il a compris comme réponse :
Décision qu'il prendrait :
Endroit où il a commencé à survoler :
Passage crédible ou trop commercial :
Termes ou passages bloquants :
Questions encore sans réponse :
Corrections appliquées :
```

### Contre-audit indépendant

```text
Auteur du contre-audit :
Indépendant de la rédaction : oui / non
Réserves sur les sources et calculs :
Réserves sur la clarté et le plan :
Réserves sur la conversion :
Corrections ou justification :
Statut maximal réellement atteint :
```

### Vérifications

- [ ] les 150 premiers mots passent le contrat de langage humain ;
- [ ] chaque H2 est compréhensible hors contexte ;
- [ ] cinq phrases abstraites ont passé le test sujet, action, résultat ;
- [ ] aucun mur de lexique ne précède la réponse ;
- [ ] tableaux ou cartes testés à 390 px sans réponse masquée ;
- [ ] FAQ courtes et CTA formulé comme bénéfice concret ;
- [ ] faits, citations et fraîcheur revérifiés ;
- [ ] calculs refaits indépendamment ;
- [ ] cas réels autorisés et cas fictifs étiquetés ;
- [ ] chaque prix, taux ou obligation décisive est relié à sa source près de
      l'affirmation, ou nommé estimation avec hypothèses ;
- [ ] aucun incident extrême sans contexte ne dramatise artificiellement la
      décision ;
- [ ] aucune note d'auteur, mention d'ancienne version ou trace d'audit n'est
      visible dans l'article ;
- [ ] l'ouverture, la progression et la conclusion diffèrent réellement des
      guides voisins lorsque le sujet le permet ;
- [ ] CTA et ressource réellement disponibles s’ils sont prévus ; sinon,
      décision « non pertinent » justifiée ;
- [ ] metadata, données structurées, registre, maillage et ancres cohérents ;
- [ ] TypeScript, ESLint, tests et build requis passés ;
- [ ] rendu observé à 320, 390, 768, 1024 et 1440 px, puis aux ruptures
      touchées ; 360, 430, 640, 1280 et 1600 px ajoutés si un composant partagé
      ou la mise en page a changé ;
- [ ] aucune publication ou indexation déclarée sans preuve.
