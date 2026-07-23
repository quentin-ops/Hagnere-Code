# Dossier de recherche — coût de la dette technique pour l'entreprise

> Les quatre passes sont terminées. La définition, les limites de calcul et le
> rendu ont été contre-audités puis contrôlés sous délégation éditoriale, sans
> test par un lecteur humain réel.

## Journal des quatre passes

Propriétaire éditorial unique : `/root`

| Passe                        | État                     | Date            | Responsable                   | Snapshot                                                            | Blocages |
| ---------------------------- | ------------------------ | --------------- | ----------------------------- | ------------------------------------------------------------------- | -------- |
| 1. Recherche                 | Terminée — porte validée | 23 juillet 2026 | `/root`                       | `docs/research/manifests/dette-technique-cout-entreprise-p1.sha256` | Aucun    |
| 2. Rédaction et intégration  | Terminée — porte validée | 23 juillet 2026 | `/root/p1p2_batch3_decisions` | `docs/research/manifests/dette-technique-cout-entreprise-p2.sha256` | Aucun    |
| 3. Contre-audit indépendant  | Terminée — porte validée | 23 juillet 2026 | `/root/p2_batch3_marketing`   | `docs/research/manifests/dette-technique-cout-entreprise-p3.sha256` | Aucun    |
| 4. Plume humaine et contrôle | Terminée — porte validée | 23 juillet 2026 | `/root`                       | `docs/research/manifests/dette-technique-cout-entreprise-p4.sha256` | Aucun    |

## 1. Fiche d'identité

```text
Slug : dette-technique-cout-entreprise
Statut actuel : publiable — validation éditoriale déléguée
Requête principale : coût dette technique entreprise
Moment du parcours : comprendre des délais et incidents devenus récurrents puis décider où investir
Lecteur précis : dirigeant ou responsable produit dont le logiciel fonctionne encore, mais dont chaque évolution prend davantage de temps et crée de nouvelles régressions
Situation déclenchante : une modification annoncée en deux jours prend trois semaines, mobilise plusieurs personnes et casse un autre parcours ; l'équipe propose soit de continuer, soit de tout réécrire
Décision principale après lecture : rendre visibles les conséquences métier, identifier les éléments techniques réellement responsables, puis choisir entre tolérer, contenir, stabiliser, moderniser progressivement ou reconstruire
Niveau de connaissance au départ : entend « dette technique » dans les réunions, sans savoir si cela désigne du vieux code, un défaut, une architecture, des tests manquants ou une demande de budget
5 questions indispensables : quel coût est observable ? quelles parties le causent ? que se passe-t-il si on ne fait rien ? peut-on réduire le risque sans tout refaire ? comment vérifier que le travail améliore réellement la situation ?
3 objections ou craintes : « Les développeurs veulent juste refaire proprement » ; « Si ça marche, ce n'est pas prioritaire » ; « Une réécriture repartira forcément sur de bonnes bases »
Action utile sans contact commercial : choisir cinq évolutions ou incidents récents et comparer estimation initiale, temps d'attente, reprise, régression, intervention manuelle et opportunité perdue
CTA possible : traduire les symptômes en plan de stabilisation vérifiable
Hors périmètre : audit de code à distance, chiffrage d'une reconstruction sans accès, promesse de productivité, conseil comptable
Date de la recherche : 23 juillet 2026
Responsable de la synthèse : /root
```

## 2. Contrat de langage humain

- Phrase réelle : « Chaque petite évolution devient un chantier. Est-ce qu'on
  paie une dette technique ou est-ce qu'on nous pousse à tout refaire ? »
- Réponse attendue : la dette technique existe lorsqu'une décision de
  conception ou de construction rend les changements futurs plus coûteux ;
  elle doit être reliée à des conséquences observables avant de demander un
  budget.
- Définition simple : c'est une partie du logiciel qui a peut-être permis
  d'aller vite hier, mais qui fait perdre du temps, augmente le risque ou bloque
  une évolution aujourd'hui.
- Mots ordinaires : retard, correctif, panne, régression, dépendance, mise à
  jour, personne indispensable, reprise manuelle, test, délai.
- Jargon à traduire : refactoring, legacy, coupling, code smell, migration,
  rewrite, observability, build, deployment pipeline.
- Ouverture : partir de la petite évolution devenue trois semaines de travail,
  puis refuser les deux raccourcis « tout va bien » et « il faut tout
  réécrire ».

## 3. Cannibalisation

| Page existante                                | Intention                                          | Différence                                                    | Maillage prévu                                                 |
| --------------------------------------------- | -------------------------------------------------- | ------------------------------------------------------------- | -------------------------------------------------------------- |
| `/guides/reprendre-logiciel-metier-existant`  | Préparer la reprise d'un logiciel et de ses accès  | Mesurer pourquoi le coût de changement augmente               | Lier vers la reprise lorsque l'équipe ou le prestataire change |
| `/guides/cout-maintenance-application-metier` | Comprendre ce qui compose le budget de maintenance | Décider quel travail réduit les coûts et risques récurrents   | Éviter de refaire les fourchettes de prix                      |
| `/guides/faire-evoluer-saas-apres-mvp`        | Organiser la cadence des évolutions                | Traiter les obstacles structurels qui ralentissent chaque lot | Lier si le calendrier se dégrade malgré une bonne priorisation |
| `/guides/tma-ou-regie`                        | Choisir un modèle de collaboration                 | Choisir le contenu du travail de stabilisation                | Ne pas recommander un mode contractuel ici                     |

**Verdict :** guide distinct. Il doit parler en effets sur l'entreprise avant de
parler en composants techniques.

## 4. Fondements vérifiés

| Affirmation utilisable                                                                                                                                                                                         | Source primaire                                                                                                                                   | Périmètre                                             | Conséquence lecteur                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| Le Software Engineering Institute définit la dette technique comme une approche de conception ou de construction avantageuse à court terme qui crée un contexte où le même travail coûtera plus cher plus tard | [SEI — Managing Technical Debt in Complex Software Systems](https://www.sei.cmu.edu/library/managing-technical-debt-in-complex-software-systems/) | Définition de recherche en génie logiciel             | Ne pas appeler « dette » chaque défaut ou toute ancienneté                                         |
| Le SEI indique qu'une dette reconnue et gérée peut parfois accélérer l'exploration, tandis qu'une accumulation non gérée augmente les coûts de développement et de maintien                                    | [SEI — Managing Technical Debt in Complex Software Systems](https://www.sei.cmu.edu/library/managing-technical-debt-in-complex-software-systems/) | Synthèse de recherche, pas calcul financier universel | Une dette peut être intentionnelle ; le problème est l'absence de visibilité et de décision        |
| Les conséquences possibles incluent coût, délai, qualité et difficulté à poursuivre l'exploitation ; les causes et symptômes doivent être reliés à des éléments concrets du système                            | [SEI — The Future of Managing Technical Debt](https://www.sei.cmu.edu/blog/the-future-of-managing-technical-debt/)                                | Modèle conceptuel du SEI                              | Construire un registre par élément, symptôme et conséquence, pas une note globale opaque           |
| Le SEI décrit la dette au-delà du seul « mauvais code » et inclut notamment architecture, scripts de construction, tests automatisés, documentation et défauts connus                                          | [SEI — The Future of Managing Technical Debt](https://www.sei.cmu.edu/blog/the-future-of-managing-technical-debt/)                                | Périmètre de recherche en systèmes logiciels          | Vérifier données, déploiement, tests et dépendances avant d'accuser une seule base de code         |
| Une approche de gestion consiste à rendre la dette visible, à en déterminer le type et à l'intégrer à la planification                                                                                         | [SEI — Managing Technical Debt in Complex Software Systems](https://www.sei.cmu.edu/library/managing-technical-debt-in-complex-software-systems/) | Méthode générale                                      | Chaque élément doit concurrencer les autres travaux avec une conséquence et une action vérifiables |

### Ce que les sources ne permettent pas d'affirmer

- aucun ratio universel entre dette technique et chiffre d'affaires ;
- aucun pourcentage « sain » du budget réservé au remboursement ;
- aucune relation automatique entre âge du logiciel et dette ;
- aucune obligation de réécrire après un nombre d'années ;
- aucune promesse qu'un audit statique mesure tout le coût métier ;
- aucune garantie qu'une nouvelle technologie supprime les erreurs d'analyse ou
  de gouvernance.

## 5. Traduction en coûts compréhensibles

Le guide proposera des mesures observables sans prétendre faire une
comptabilité certifiée :

1. **temps d'attente** : jours avant de pouvoir commencer une évolution ;
2. **temps de reprise** : recherche, contournement et remise en état avant le
   changement utile ;
3. **régressions** : travail supplémentaire causé ailleurs ;
4. **interventions manuelles** : opérations répétées pour compenser le système ;
5. **risque d'exploitation** : incident, dépendance à une personne ou composant
   non maintenu ;
6. **opportunité reportée** : vente, automatisation ou exigence contractuelle
   impossible à traiter.

Le lecteur pourra additionner des temps réellement observés, mais le guide
n'inventera pas un prix horaire ni une valeur de vente. Les hypothèses devront
être écrites.

## 6. Réponses possibles

| Réponse                    | Quand elle est rationnelle                                                                      | Condition                                       | Erreur à éviter                                  |
| -------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------- | ------------------------------------------------ |
| Tolérer consciemment       | Le composant change peu et le risque est faible                                                 | Date de réexamen et limites connues             | Oublier la dette jusqu'à l'incident              |
| Contenir                   | Une zone dangereuse peut être isolée derrière une interface ou un processus                     | Mesure avant/après                              | Ajouter une couche qui cache sans réduire        |
| Stabiliser                 | Incidents, tests absents ou déploiements fragiles empêchent tout changement sûr                 | Priorité aux parcours critiques                 | Mélanger stabilisation et nouvelles fonctions    |
| Moderniser progressivement | Le logiciel apporte encore de la valeur et des frontières peuvent être déplacées petit à petit  | Étapes réversibles et coexistence maîtrisée     | Migration sans sortie ni retour arrière          |
| Reconstruire une partie    | Une zone est impossible à faire évoluer et son remplacement peut être borné                     | Comportements attendus et données de référence  | Réécrire tout le produit par commodité           |
| Reconstruire l'ensemble    | Les risques, technologies, données et coûts de coexistence rendent les autres voies non viables | Comparaison documentée, migration et continuité | Confondre nouveau code et nouveau produit réussi |

## 7. Exemple pédagogique prévu

**Exemple illustratif fictif :** « Arpège Services » utilise une application de
planification et facturation depuis neuf ans. Ajouter un nouveau statut devait
prendre deux jours. L'équipe a dû comprendre un calcul non documenté, corriger
trois exports et intervenir manuellement après une régression.

Le guide fera remplir cinq lignes :

| Changement ou incident | Résultat attendu                  | Temps utile | Temps de reprise | Régression ou travail manuel | Élément suspect |
| ---------------------- | --------------------------------- | ----------: | ---------------: | ---------------------------- | --------------- |
| Nouveau statut         | Distinguer les dossiers à valider |   À relever |        À relever | À relever                    | À confirmer     |

L'exemple ne décidera pas immédiatement d'une réécriture. Il conduira à isoler
le calcul, ajouter des tests sur les factures et mesurer les trois prochains
changements avant de comparer une modernisation ciblée.

## 8. Plan annoté

| Section                                         | Question                            | Format                            | Décision                                   |
| ----------------------------------------------- | ----------------------------------- | --------------------------------- | ------------------------------------------ |
| La petite évolution qui prend trois semaines    | Où est le problème vécu ?           | Scène d'ouverture                 | Chercher les coûts cachés                  |
| La dette technique n'est ni l'âge ni chaque bug | De quoi parle-t-on ?                | Définition et contre-exemples     | Refuser l'étiquette vague                  |
| Mesurez cinq changements récents                | Comment objectiver ?                | Journal copiable                  | Produire une base de discussion            |
| Reliez chaque symptôme à un élément concret     | Où agir ?                           | Chaîne symptôme-cause-conséquence | Éviter le budget global sans cible         |
| Calculez un coût prudent                        | Comment parler à la direction ?     | Formule avec hypothèses           | Distinguer fait, estimation et opportunité |
| Choisissez parmi six réponses                   | Faut-il tout refaire ?              | Comparaison                       | Garder la réponse proportionnée            |
| Stabiliser avant de moderniser                  | Quel ordre réduit le risque ?       | Séquence                          | Rendre le changement possible              |
| Prouvez l'amélioration                          | Comment savoir si le travail paie ? | Avant/après                       | Mesurer délai, incident et intervention    |
| Audit autonome sur cinq lignes                  | Que faire aujourd'hui ?             | Fiche                             | Décider du prochain diagnostic             |
| Bon fit, mauvais fit et FAQ                     | Quand demander de l'aide ?          | Encadrés                          | Conversion honnête                         |

## 9. Action autonome et conversion

La ressource sera intégrée : un registre copiable de cinq évolutions ou
incidents, avec estimation, attente, reprise, régression, intervention manuelle,
conséquence métier, élément suspect et prochaine preuve.

Bon fit : entreprise capable de fournir des événements récents, des accès et
des interlocuteurs métier et technique.

Mauvais fit : demande de justifier une réécriture déjà décidée, estimation sans
accès au logiciel ou promesse de réduction chiffrée avant diagnostic.

CTA : « Objectiver les coûts de mon application » vers `/demarrer-un-projet`.
La destination annonce un échange, pas un audit complet gratuit.

## 10. Rapport P1

```text
PASSE 1 TERMINÉE
Slug : dette-technique-cout-entreprise
Lecteur et phrase réelle : dirigeant — « Chaque petite évolution devient un chantier ; faut-il tout refaire ? »
Décision : rendre les conséquences visibles puis tolérer, contenir, stabiliser, moderniser ou reconstruire
Angle et forme dominante : cinq changements récents traduits en temps, risque et opportunité
Pages proches et différence : maintenance explique le budget ; reprise explique le changement de prestataire ; ce guide choisit le travail structurel
Sources décisives : publications du Software Engineering Institute
Incertitudes exclues : ratio financier universel, quota de budget, âge limite et bénéfice garanti d'une réécriture
Action autonome et CTA possible : remplir le registre ; objectiver les coûts avec les équipes
Plan : scène, définition, journal, éléments, coût prudent, réponses, ordre, preuve, audit, fits, FAQ
Snapshot : docs/research/manifests/dette-technique-cout-entreprise-p1.sha256
```

## 11. Revue de porte P1

- [x] définition du SEI vérifiée et traduite ;
- [x] lecteur, situation et décision définis ;
- [x] âge, défaut et dette distingués ;
- [x] conséquences métier prévues avant les détails techniques ;
- [x] réécriture présentée comme une option exceptionnelle ;
- [x] calcul limité à des hypothèses visibles ;
- [x] exemple fictif annoncé ;
- [x] action autonome et option de tolérer présentes ;
- [x] aucune promesse de gain ;
- [x] P3 et P4 terminées ; publication déléguée et contrôlée.

## 12. Rapport P2

```text
PASSE 2 TERMINÉE
Fichiers créés ou modifiés : page publique, image Open Graph et rapport P2 du dossier de recherche
Ouverture et réponse : une évolution de deux jours devenue trois semaines conduit à mesurer cinq changements avant toute réécriture
Forme propre au sujet : carnet des cinq changements, fiche d’élément précis, coût prudent et six réponses proportionnées
Exemples ou calculs : Arpège Services, exemple illustratif fictif ; séparation du temps utile, de la reprise, des régressions et des opportunités non prouvées
Sources visibles : Software Engineering Institute près de la définition et de la méthode d’inventaire
Action autonome, bon fit et mauvais fit : remplir le journal ; mauvais fit pour justifier une réécriture déjà décidée ou promettre un gain sans accès
CTA et destination : « Décrire les symptômes » vers /demarrer-un-projet, sans téléphone
Contrôles rapides : Prettier, ESLint ciblé, TypeScript et git diff --check
Snapshot : docs/research/manifests/dette-technique-cout-entreprise-p2.sha256
```

### Revue de porte P2

- [x] guide complet, sans placeholder ;
- [x] âge, bug et dette technique distingués ;
- [x] cinq changements récents transformés en mesures observables ;
- [x] aucun ratio de budget ni gain inventé ;
- [x] exemple fictif annoncé ;
- [x] tolérance, contention, stabilisation, modernisation et reconstruction comparées ;
- [x] Article et BreadcrumbList uniquement ;
- [x] un CTA éditorial, destination réelle et `showPhone={false}` ;
- [x] image sociale dédiée en 1 200 × 630 ;
- [x] statut de publication aligné sur la délégation explicite ;
- [x] P3 indépendante requise avant P4.

## 13. Rapport P3 — contre-audit indépendant

```text
PASSE 3 TERMINÉE
Relecteur indépendant : /root/p2_batch3_marketing
Affirmations et sources revérifiées : définition et cadre de gestion de la dette technique du SEI, conséquences métier et limites d’une mesure monétaire
Calculs refaits : formule symbolique et exemple Arpège fictif, sans ratio de budget, ROI ni économie annoncée
P0 trouvés / corrigés : 0 / 0
P1 trouvés / corrigés : 0 / 0
Suggestions rejetées et pourquoi : aucune réécriture automatique ni seuil de dette acceptable ajouté
Corrections pédagogiques et commerciales : âge, bug et dette distingués ; cinq changements observables conduisent à six réponses, dont tolérer ou contenir
Revalidation du relecteur : P0/P1/P2 = 0/0/0
Contrôles intermédiaires : Prettier, ESLint, TypeScript, batch complet, garde-fous humains, liens, CTA, schémas et OG conformes
Snapshot : docs/research/manifests/dette-technique-cout-entreprise-p3.sha256
```

## 14. Rapport P4 — plume, rendu et gel

```text
PASSE 4 TERMINÉE
Passages humanisés : l’évolution de deux jours devenue trois semaines ouvre sur cinq changements mesurables et non sur une demande abstraite de « rembourser la dette »
Coupe ou resserrement : « tout rembourser » remplacé par « tout réécrire » ; conséquences métier, causes techniques et six réponses sont mieux séparées
Retour P3 effectué : oui — définition SEI, formule symbolique, exemple fictif et absence de ROI universel ont été revérifiés ; relecture finale P0/P1/P2 = 0/0/0
Scorecard justifiée : 19/20 — Intention 2, Décision 2, Pédagogie 2, Profondeur 2, Preuve 2, Comparaison 2, Originalité 2, Style 1, Conversion 2, SEO/produit 2
Validation humaine réelle : non
Test réalisé par une personne réelle : non
Autorisation éditoriale : délégation explicite du commanditaire
Décision de publication : autorisée explicitement par le commanditaire
Commandes et résultats : check:seo 215/215 ; ESLint 32 fichiers ; TypeScript conforme ; npm test 440/440 ; build et postbuild de production conformes ; diff-check conforme
Largeurs et états contrôlés : 320, 390, 768, 1 024 et 1 440 px ; clair et sombre ; registre, cartes, calcul, CTA, FAQ et footer sans débordement
Route, OG et console : route 200, H1 unique, canonical et robots conformes ; OG 200 en PNG 1 200 × 630 ; aucun overlay ni erreur navigateur
Snapshot final : docs/research/manifests/dette-technique-cout-entreprise-p4.sha256
Statut maximal : Publiable
Verdict : publiable en index/follow ; aucune réécriture, économie ou productivité ne sont promises
```
