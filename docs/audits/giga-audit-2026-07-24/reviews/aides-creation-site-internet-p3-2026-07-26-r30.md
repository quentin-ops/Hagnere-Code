# Audits froids R29 et contrat correctif R30 — `aides-creation-site-internet`

Date de consolidation : **26 juillet 2026**

## Verdict probatoire

**R29 reçoit deux NO-GO P4. R30 corrige leur union, mais ne reçoit par
transfert ni note, ni GO, ni ouverture de P4.**

Les deux audits froids R29 ont travaillé en lecture seule sur le même gel de
**88 fichiers** :

`docs/research/manifests/aides-creation-site-internet-p3-2026-07-26-r28.sha256`

Le manifeste est resté intact à **88/88 au début et à la fin** des deux audits.
Son SHA-256 est
`f6ff2d1c100bb6c0f26daddbf06f08dd21cd63f5cea5c5856270d15c47c399ad`.

| Axe froid                                 | Note   | Sévérités                | Verdict      |
| ----------------------------------------- | ------ | ------------------------ | ------------ |
| Faits, droit, finance et moteur           | 72/100 | P0 : 0 ; P1 : 5 ; P2 : 2 | **NO-GO P4** |
| Expérience, pédagogie, sorties et reprise | 87/100 | P0 : 0 ; P1 : 2 ; P2 : 1 | **NO-GO P4** |

L’auditeur factuel a rejoué **1 251 tests** et l’auditeur expérience
**1 312 tests**, tous réussis. Ces tests prouvaient le contrat R29 déjà couvert ;
les scénarios adversariaux ci-dessous ont néanmoins révélé de nouvelles classes
de contournement. Les notes décrivent exclusivement R29.

## Registre dédupliqué R29 → R30

L’union des deux audits compte **6 P1 et 2 P2** après déduplication.

| Identifiant | Sévérité | Défaut observé dans R29                                                                                                                                                 | Contrat de fermeture R30                                                                                                                                                                                                                    |
| ----------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| R30-P1-01   | P1       | Une négation avec un adverbe non énuméré ou un verbe de refus peut laisser un mandat SIEG favorable.                                                                    | Détecter localement toute négation, absence d’objet ou formulation `refuse/rejette/exclut de confier`, sans liste finie d’adverbes ; préserver seulement les restrictions explicites `pas/plus seulement`, `uniquement` ou `exclusivement`. |
| R30-P1-02   | P1       | Une non-distinction avec un adverbe voisin peut être absorbée par le mot `distinct`, et une pièce qui compare seulement deux services peut étayer `services distincts`. | Appliquer la garde locale générique aux prédicats `distinct/différent/séparé` et exiger une polarité textuelle réellement `distinct` en plus de la structure documentaire.                                                                  |
| R30-P1-03   | P1       | `Aucune compensation`, suivie de `sauf/hormis` une compensation positive, reste comprise comme une absence.                                                             | Donner priorité à toute exception positive ; faire hériter à sa portée le `même service` explicitement établi dans le préfixe.                                                                                                              |
| R30-P1-04   | P1       | `Aucune acquisition`, suivie d’une acquisition, fusion, scission ou d’un rachat excepté, reste comprise comme une absence de restructuration.                           | Donner priorité à l’opération positive dans la portée de `sauf`, `hormis`, `excepté` ou `à l’exception de`, y compris `rachat effectif`.                                                                                                    |
| R30-P1-05   | P1       | Une preuve disant que le droit de l’Union ne s’applique pas peut étayer le statut structuré `applicable`.                                                               | Ajouter une polarité territoriale : contradiction explicite invalide ; incertitude explicite maintient le dossier incomplet.                                                                                                                |
| R30-P1-06   | P1       | Une décision écrite numérotée peut être réaffirmée par sa seule structure alors qu’elle `refuse de confier` le SIEG.                                                    | Faire primer la polarité contradictoire sur toute branche positive liée au type de document ou à son identifiant.                                                                                                                           |
| R30-P2-01   | P2       | Des références comme `test-0000`, `exemple_1234`, `x/000000` ou une URL locale passent comme identifiables.                                                             | Refuser les racines de démonstration même suffixées, les hôtes locaux, privés et réservés à la documentation ; conserver les formes publiques plausibles sans prétendre les authentifier.                                                   |
| R30-P2-02   | P2       | Le changement de jour rafraîchit les bornes de saisie mais laisse l’ancienne analyse partageable et exportable.                                                         | Inclure la date civile éditable dans la signature du dossier ; le changement de jour périme l’analyse et verrouille TXT et impression sans déplacer son ancien instant.                                                                     |

## Fermetures intégrées

### Polarité SIEG locale et fermée par défaut

Le moteur `site-aid-decision-r30-2026-07-26` ne dépend plus d’une liste finie
d’adverbes. Il tokenise chaque clause, observe un voisinage borné autour du
prédicat et s’arrête aux coordinations fortes afin de ne pas propager une
négation à une proposition positive voisine.

Les scénarios suivants sont désormais contradictoires avec un statut favorable,
sur l’aide courante comme sur le registre :

- `ne lui confie vraiment pas le service SIEG` ;
- `ne lui confie évidemment pas le service SIEG` ;
- `ne lui confie en aucune manière le service SIEG` ;
- `refuse de confier`, `rejette le fait d’attribuer` ou `exclut de charger`
  l’entreprise du service ;
- `ne sont vraiment pas juridiquement distincts` ;
- `ne sont en aucune manière différents` ;
- `refuse de reconnaître les deux services comme séparés`.

Une référence formelle de décision ne peut plus réaffirmer une clause refusant
le mandat. Les restrictions `ne confie pas seulement` et `ne sont pas seulement
distincts` restent affirmatives, car elles ne nient pas le fait principal.

Pour une ligne déclarée `NON — services distincts`, la pièce doit maintenant
réunir les éléments formels déjà exigés **et** conclure textuellement à la
distinction. Une attestation qui identifie les deux services et décrit seulement
leur relation reste incomplète ; elle ne produit aucun fait favorable.

### Exceptions positives

Les marqueurs `sauf`, `hormis`, `excepté` et `à l’exception de` sont examinés
avant de conclure à une absence. Les reproductions exactes suivantes sont
bloquées :

- `aucune autre compensation du même service, sauf une compensation de
200 000 €` ;
- `aucune autre compensation du même service, hormis la compensation annuelle
existante` ;
- `aucune fusion, acquisition ou scission, sauf une acquisition réalisée le
03/02/2026` ;
- `aucune fusion ni acquisition, hormis le rachat effectif de la société B`.

Cette prudence reflète l’article 5, paragraphe 2, du règlement SIEG : une autre
compensation relative au même service bloque le cumul, indépendamment de sa
qualification d’aide d’État.

### Territorialité UE

Une preuve identifiable qui indique que le droit de l’Union `ne s’applique pas`,
qu’il est `non applicable` ou que le territoire est `hors du champ` contredit
désormais le statut favorable et rend le dossier invalide. Une preuve disant que
l’applicabilité est indéterminée ou qu’elle ne permet pas de conclure maintient
le dossier incomplet. Le moteur n’authentifie toujours ni l’autorité, ni la
pièce, ni la qualification territoriale.

### Références et passage au jour suivant

L’application `site-aid-application-r30-2026-07-26` refuse désormais :

- les racines de remplissage `x`, `test`, `exemple`, `démo`, `sample`,
  `dummy`, `placeholder`, etc., même suivies de chiffres ou de séparateurs ;
- `localhost`, les boucles locales, réseaux privés et hôtes internes ;
- les réseaux et domaines réservés à la documentation, par exemple
  `192.0.2.0/24`, `203.0.113.0/24`, `example.com`, `.test` ou `.invalid`.

Ce filtre exclut des témoins manifestement factices. Il ne transforme jamais
une URL publique plausible, un identifiant structuré ou une réponse d’autorité
qualifiée en preuve authentifiée.

La date civile éditable appartient maintenant à la signature analysée. Après
minuit, `focus`, `pageshow` ou le retour visible actualisent les bornes ; si la
date change, l’état devient périmé et les sorties partageables sont vidées ou
verrouillées. La date et l’instant de l’analyse historique restent inchangés
jusqu’à une nouvelle analyse.

Le brouillon demeure `site-aid-draft-r29-2026-07-26` : R30 ne modifie pas son
schéma de données. Il n’existe donc aucune migration artificielle de brouillon.

## Sources juridiques de contrôle

- [Règlement (UE) 2023/2832](https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX%3A32023R2832) :
  mandat écrit ou électronique et interdiction de cumul avec une autre
  compensation relative au même SIEG ;
- [Règlement (UE) 2023/2831](https://eur-lex.europa.eu/eli/reg/2023/2831/oj?locale=fr) :
  règles générales de minimis et restructurations ;
- [Décret n° 2025-1361](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000053177293) :
  registre national applicable aux régimes général, SIEG et pêche à compter du
  1er janvier 2026 ;
- [Circulaire officielle](https://agriculture.gouv.fr/telecharger/153667) :
  `Date de signature 3 mars 2026` et en-tête `Paris, le 4 mars 2026`.

## Validation locale R30

| Contrôle                                           | Résultat                                                                                                                              |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Moteur seul                                        | **1 160/1 160 — PASS**                                                                                                                |
| Interface dossier seule                            | **106/106 — PASS**                                                                                                                    |
| Six suites métier, interface, brouillon et qualité | **1 354/1 354 — PASS**                                                                                                                |
| Catalogue, langue, sitemap et indexation           | **62/62 — PASS**                                                                                                                      |
| TypeScript                                         | **PASS**                                                                                                                              |
| ESLint ciblé                                       | **PASS** ; seule note informative Babel sur le composant supérieur à 500 Kio                                                          |
| Prettier ciblé                                     | **PASS**                                                                                                                              |
| `git diff --check`                                 | **PASS**                                                                                                                              |
| `check:seo` global                                 | **491/492** ; seul échec hors périmètre : ancienne empreinte de `src/lib/guides.ts` attendue par `prioriser-fonctionnalites-mvp-saas` |
| Build Next.js direct                               | **PASS — 159 pages statiques**                                                                                                        |
| Artefact local servi                               | **10 095 mots visibles, 50 minutes**                                                                                                  |
| Vérificateur d’artefact                            | Aucun écart sur ce guide ; deux temps de lecture hors périmètre restent rouges sur `crm-sur-mesure-ou-hubspot` et `seo-local-pme`     |
| Gel commun R30                                     | **`docs/research/manifests/aides-creation-site-internet-p3-2026-07-26-r29.sha256` — 89 fichiers**                                     |

R30 est **VALIDÉ LOCALEMENT ET FIGÉ**. Cette validation ne lui transfère aucune
note et n’ouvre pas P4.

## Porte suivante

P4 reste fermée. Le prochain état probatoire exige, dans cet ordre :

1. faire contrôler le même gel R30 par deux auditeurs indépendants en lecture
   seule ;
2. obtenir au moins 92/100 sur chaque axe, sans P0 ni P1 ;
3. ouvrir seulement alors le BAT P4 en navigateur réel.

Aucun classement Google, commit, publication, déploiement, route de production,
sitemap réellement traité ou indexation réelle n’est revendiqué.
