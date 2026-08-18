# Modèle de dossier de travail d'un guide

> Copier ce fichier vers `docs/research/<slug>.md`, puis remplir chaque
> section. Ce dossier est le journal de décision du guide ; il ne sert pas à
> accumuler du texte brut ni des transcripts d'agents.

Le déroulement et les portes de sortie sont définis dans
[`docs/workflow-maitre-guides-4-passes.md`](../workflow-maitre-guides-4-passes.md).

## Journal des quatre passes

Propriétaire éditorial unique :

| Passe                        | État    | Date | Responsable | Snapshot | Blocages       |
| ---------------------------- | ------- | ---- | ----------- | -------- | -------------- |
| 1. Recherche                 | À faire |      |             |          |                |
| 2. Rédaction et intégration  | Bloquée |      |             |          | P1 non validée |
| 3. Contre-audit indépendant  | Bloquée |      |             |          | P2 non validée |
| 4. Plume humaine et contrôle | Bloquée |      |             |          | P3 non validée |

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

Requêtes, pays, langues et date :

Critère de saturation : expliquer pourquoi les nouvelles pages n'apportent
plus de type de réponse, de méthode, d'objection, de preuve ou d'outil.

Plancher de recherche applicable selon la charte :

Corpus réellement examiné et justification :

| Page et pays | Réponse et angle | Preuves/artefacts | Bon point | Manque décisionnel | Conflit d'intérêt éventuel |
| ------------ | ---------------- | ----------------- | --------- | ------------------ | -------------------------- |
|              |                  |                   |           |                    |                            |

**Angle mort commun :**

**Valeur originale que le guide apportera :**

### Matrice de gain d'information

| Question décisive du lecteur | Meilleure réponse française | Apport international | Réponse actuelle du guide | Manque réel | Amélioration vérifiable prévue |
| ---------------------------- | --------------------------- | -------------------- | ------------------------- | ----------- | ------------------------------ |
|                              |                             |                      |                           |             |                                |

Un plan ne passe pas P1 si son seul apport est « plus long », « plus complet »,
« plus clair » ou « mieux optimisé ». Une donnée étrangère doit être
requalifiée pour la France avant de soutenir une affirmation.

## 5. Fiche de preuves, scénarios et position

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

### Scénarios décisionnels

Pour un guide de prix, ROI, budget, délai ou comparaison, préparer trois
scénarios cohérents. Pour un autre sujet, adapter les colonnes à des situations
contrastées ou justifier pourquoi un chiffre serait artificiel.

| Variable | Cas simple | Cas central | Cas exigeant | Source ou nature de l'hypothèse |
| -------- | ---------: | ----------: | -----------: | ------------------------------- |
|          |            |             |              |                                 |

```text
Formule :
Coûts inclus :
Coûts exclus :
Horizon :
Résultats :
Variable qui change le verdict :
Analyse de sensibilité :
Contrôle inverse :
```

### Position professionnelle Hagnéré Code

```text
Recommandation pour le cas le plus fréquent :
Faits vérifiés qui la fondent :
Raisonnement ou déduction :
Cas où l'option opposée est meilleure :
Signal qui impose de réexaminer la décision :
Ce que nous déconseillons même si nous pourrions le vendre :
Date ou événement de prochaine vérification :
```

### Échec, après-décision et conflit d'intérêts

```text
Situation où la recommandation échoue :
Signal précoce qui devait alerter :
Mesure de départ :
Indicateur métier après décision :
Fréquence et responsable de la revue :
Critère d'arrêt, de correction ou de retour arrière :
Intérêt commercial de Hagnéré Code dans le sujet :
Conflits d'intérêts des études ou concurrents utilisés :
```

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
Actif signature difficile à remplacer :
Bon fit Hagnéré Code :
Mauvais fit :
Action non commerciale :
CTA principal et résultat après clic :
```

## 9. Rapports de sortie des quatre passes

### Rapport P1 — Recherche

```text
PASSE 1 TERMINÉE
Slug :
Lecteur et phrase réelle :
Décision :
Angle et forme dominante :
Pages proches et différence :
Sources décisives :
Incertitudes exclues :
Action autonome et CTA possible :
Plan :
Snapshot :
```

### Rapport P2 — Rédaction et intégration

```text
PASSE 2 TERMINÉE
Fichiers créés ou modifiés :
Ouverture et réponse :
Forme propre au sujet :
Exemples ou calculs :
Sources visibles :
Action autonome, bon fit et mauvais fit :
CTA et destination :
Contrôles rapides :
Snapshot :
```

### Rapport P3 — Contre-audit indépendant

```text
PASSE 3 TERMINÉE
Relecteur indépendant :
Affirmations et sources revérifiées :
Calculs refaits :
P0 trouvés / corrigés :
P1 trouvés / corrigés :
Suggestions rejetées et pourquoi :
Corrections pédagogiques et commerciales :
Revalidation du relecteur :
Contrôles intermédiaires :
Snapshot :
```

### Rapport P4 — Plume humaine et contrôle final

```text
PASSE 4 TERMINÉE
Passages humanisés :
Coupe ou resserrement :
Retour P3 effectué :
Diff sémantique après la plume et revalidation éventuelle :
Scorecard justifiée :
Validation humaine réelle : oui/non
Autorisation éditoriale :
Commandes et résultats :
Largeurs et états contrôlés :
Route, image sociale et console :
Snapshot final :
Statut maximal :
Verdict :
```

## 10. Revue finale

### Scorecard justifiée

| Axe         | Note 0-10 | Preuve localisable dans la page | Manque résiduel | Correction éventuelle |
| ----------- | --------: | ------------------------------- | --------------- | --------------------- |
| Intention   |           |                                 |                 |                       |
| Décision    |           |                                 |                 |                       |
| Pédagogie   |           |                                 |                 |                       |
| Profondeur  |           |                                 |                 |                       |
| Preuve      |           |                                 |                 |                       |
| Comparaison |           |                                 |                 |                       |
| Originalité |           |                                 |                 |                       |
| Style       |           |                                 |                 |                       |
| Conversion  |           |                                 |                 |                       |
| SEO/produit |           |                                 |                 |                       |

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
- [ ] benchmark français et international daté, avec saturation expliquée ;
- [ ] matrice de gain d'information remplie et apport effectivement visible ;
- [ ] calculs refaits indépendamment ;
- [ ] scénarios soumis à une analyse de sensibilité ;
- [ ] position Hagnéré Code, contre-cas et signal de révision explicites ;
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
