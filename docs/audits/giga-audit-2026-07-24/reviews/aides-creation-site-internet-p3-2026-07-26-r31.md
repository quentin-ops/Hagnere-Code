# Audits froids R30 et contrat structurel R31 — `aides-creation-site-internet`

Date de consolidation : **27 juillet 2026**

## Verdict probatoire

**R30 reçoit deux NO-GO. R31 est VALIDÉ LOCALEMENT ET GELÉ, sans score et sans
GO. P4 reste fermée.**

Les deux audits froids R30 ont travaillé en lecture seule sur le même gel de
**89 fichiers** :

`docs/research/manifests/aides-creation-site-internet-p3-2026-07-26-r29.sha256`

Le manifeste est resté intact à **89/89 au début et à la fin** des deux audits.
Son SHA-256 est
`eef43a31c83f32c5a96bd1581cb536e60350b37bffaa02d0c959d24dd704016c`.

| Axe froid                                 | Note   | Sévérités                | Verdict      |
| ----------------------------------------- | ------ | ------------------------ | ------------ |
| Faits, droit, finance et moteur           | 74/100 | P0 : 0 ; P1 : 5 ; P2 : 2 | **NO-GO P4** |
| Expérience, pédagogie, sorties et reprise | 79/100 | P0 : 0 ; P1 : 5 ; P2 : 2 | **NO-GO P4** |

Les notes et sévérités décrivent exclusivement R30. Elles ne sont pas
transférées à R31.

Les deux auditeurs ont reconfirmé les chiffres et les sources primaires de fond
déjà documentés dans R30, notamment les règlements de minimis `2023/2831`,
`2023/2832`, `1408/2013` et `717/2014`, le décret n° 2025-1361 et la circulaire
officielle déjà citée. Aucun nouvel écart n’a été relevé sur les plafonds, les
fenêtres, les règles de cumul ou les autres chiffres métier représentés.

Toutes les reproductions exactes qui avaient ouvert R30 depuis les audits R29
sont fermées. Les audits R30 ont toutefois révélé des formulations voisines
appartenant à des classes sémantiques encore insuffisamment fermées. Des tests
verts sur les anciennes reproductions ne suffisent donc pas à valider R30.

## Registre dédupliqué R30 → R31

L’union des deux rapports compte, après déduplication, **5 P1 sémantiques et
3 P2**.

| Identifiant | Sévérité | Classe ouverte dans R30                                                                                                                                    | Contrat structurel R31                                                                                                                                                                                                                                                                       |
| ----------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| R31-P1-01   | P1       | Mandat SIEG : interdiction, opposition, renonciation, négation discontinue ou coordonnée encore susceptible de laisser un statut favorable.                | Exiger une affirmation explicite du mandat effectivement confié. Toute négation ou opposition explicite contredit le statut favorable ; toute formulation non vide mais sans polarité affirmative certaine reste incomplète.                                                                 |
| R31-P1-02   | P1       | Distinction des services : négations coordonnées, tournures métalinguistiques ou verbes d’opposition encore susceptibles d’être lus comme une distinction. | Exiger une affirmation explicite que les deux services identifiés sont distincts. Une contradiction explicite invalide ; une comparaison ou description sans conclusion affirmative reste incomplète.                                                                                        |
| R31-P1-03   | P1       | Compensation : des exceptions positives introduites autrement que par les marqueurs déjà couverts peuvent être absorbées par une absence générale.         | Examiner toute exception non vide avant l’absence générale. Une compensation positive dans l’exception prime et contredit le statut d’absence ; une exception dont la polarité reste ambiguë suspend la conclusion.                                                                          |
| R31-P1-04   | P1       | Restructuration : `rachat`, `achat de titres` ou proposition verbale positive dans une exception peuvent rester masqués par `aucune acquisition`.          | Examiner toute exception non vide et toute opération positive avant l’absence générale. Une opération réalisée prime ; une exception ambiguë maintient le dossier incomplet.                                                                                                                 |
| R31-P1-05   | P1       | Territorialité : exclusion, cessation, absence d’effet ou simple description peuvent encore étayer un statut `droit de l’Union applicable`.                | Exiger une affirmation territoriale explicitement favorable. Une exclusion explicite invalide ; une description, une incertitude ou une clause sans affirmation d’applicabilité reste incomplète.                                                                                            |
| R31-P2-01   | P2       | Références, URLs et e-mails manifestement factices ou techniquement non sûrs peuvent encore paraître identifiables.                                        | Séparer strictement l’identifiabilité de la polarité ; refuser témoins de test, suites nulles, domaines réservés ou locaux, HTTP, ports explicites, identifiants d’URL, adresses privées et formes équivalentes. Une forme structurellement plausible reste déclarative et non authentifiée. |
| R31-P2-02   | P2       | Une page laissée visible et active au passage de minuit, sans événement navigateur, peut conserver l’ancienne signature et ses sorties.                    | Programmer un réveil au prochain minuit local et conserver les événements comme secours. Chaque accès à une sortie doit aussi vérifier synchroniquement la date et la signature courantes avant TXT, impression ou partage.                                                                  |
| R31-P2-03   | P2       | Doubles négations et restrictions en `pas que` peuvent être classées comme négatives ou comme preuves positives sans distinction suffisante.               | Une double négation ne devient jamais, seule, une preuve affirmative. Les restrictions `pas que` doivent rester distinctes d’une négation du fait principal ; elles ne sont favorables que si la clause contient une affirmation explicite du fait requis.                                   |

## Corpus adversarial exact des deux rapports

Les formulations ci-dessous sont reproduites telles qu’elles apparaissent dans
les deux rapports froids. Les points de suspension appartiennent à leur notation
et représentent le segment variable injecté par le scénario, notamment
l’identité des deux services ou la suite d’une URL.

### R31-P1-01 — mandat SIEG

Rapport factuel :

- `elle ne lui confie réellement et juridiquement pas le service SIEG`
- `elle ne saurait confier le service SIEG`
- `elle ne lui confie en rien le service SIEG`
- `elle s’oppose à confier le service SIEG`
- `elle interdit de confier le service SIEG`
- `elle renonce à confier le service SIEG`
- `elle ne lui confie ni le service SIEG ni la mission de service public`

Rapport UX :

- `interdit expressément de confier`
- `s’oppose catégoriquement à confier`
- `renonce définitivement à confier`
- `interdit toute délégation`

Critère reproductible R31 : aucune de ces formulations ne peut étayer un mandat
favorable. Le moteur doit conclure à une contradiction explicite lorsqu’un
statut affirmatif leur est opposé. Une pièce identifiable qui ne contient ni
l’une de ces contradictions ni une affirmation explicite du service
effectivement confié doit rester incomplète, jamais favorable par sa seule
forme.

### R31-P1-02 — distinction des services

Rapport factuel :

- `ne sont ni distincts ni séparés`
- `ne sont en rien distincts`
- `il est faux que ... soient distincts`
- `s’oppose à reconnaître ... comme distincts`

Rapport UX :

- `interdit de considérer ... comme distincts`
- `s’oppose à qualifier ... de distincts`

Critère reproductible R31 : ces variantes contredisent une relation structurée
déclarant les services distincts. Une pièce qui identifie les deux services
mais se borne à les analyser, les comparer ou décrire leurs périmètres reste
incomplète si elle n’affirme pas explicitement leur distinction.

### R31-P1-03 — compensation du même service

Rapport factuel :

- `aucune autre compensation du même service, sauf cette dernière de 200 000 €`
- `... mise à part une compensation annuelle de 200 000 €`
- `... sauf un versement compensatoire de 200 000 €`

Rapport UX :

- `à part une compensation annuelle de 200 000 €`
- `exception faite d’une compensation annuelle versée par la Région`

Critère reproductible R31 : les segments positifs non vides après `sauf`,
`mise à part`, `à part` ou `exception faite` priment sur l’absence générale.
Ils contredisent un statut `aucune autre compensation`. Si le segment
d’exception existe mais ne permet pas d’établir sa polarité, la conclusion doit
rester incomplète.

### R31-P1-04 — restructuration

Rapport factuel :

- `Aucune acquisition, sauf le rachat de la société B le 03/02/2026`
- `Aucune acquisition, sauf nous avons acquis la société B le 03/02/2026`
- `Aucune acquisition, sauf l’achat de 100 % des titres de la société B le 03/02/2026`

Rapport UX :

- `aucune fusion ni acquisition, à part le rachat effectif de la société B`
- `aucune acquisition, exception faite d’une fusion réalisée le 03/02/2026`

Critère reproductible R31 : `rachat`, `avons acquis`, `achat de 100 % des
titres` et `fusion réalisée` sont des opérations positives. Leur présence dans
une exception non vide prime sur la déclaration générale d’absence. Une
exception non vide mais indécidable suspend le dossier.

### R31-P1-05 — territorialité

Rapport factuel :

- `le droit de l’Union ne saurait s’appliquer au territoire Bretagne`
- `ne s’applique en rien`
- `l’autorité exclut l’application`

Rapport UX :

- `territoire Bretagne échappe au droit de l’Union`
- `le droit ... cesse de s’appliquer`
- `est sans effet`
- `analyse du champ territorial ...`

Critère reproductible R31 : les six premières formulations contredisent un
statut affirmant l’applicabilité du droit de l’Union. La simple description
`analyse du champ territorial ...` ne porte aucune polarité affirmative et doit
laisser la preuve incomplète. Une autorité, un numéro ou une date identifiables
ne changent jamais cette polarité.

### R31-P2-01 — références, URLs et e-mails

Rapport factuel :

- `Réf : test-0000`
- `Référence : (test-0000)`
- `preuve test-0000`
- `http://aides.region.fr/dispositif/42`
- `https://aides.region.fr:8443/...`
- `https://user:pass@aides.region.fr:8443/...`
- `https://192.0.0.1/a`
- `https://[::ffff:192.168.1.1]/a`

Rapport UX :

- `Réponse écrite de la Région : test-0000`
- `Référence officielle du financeur : TEST-0000-A`
- `AAP-0000`
- `test@example.com`
- `service.invalid`
- `intranet.local`
- `Numéro de dépôt : 00000000`
- `Référence du portail : DUMMY-42`

Critère reproductible R31 : aucune de ces formes ne suffit comme témoin
identifiable. Le contrôle structurel doit rejeter les racines de test malgré un
habillage institutionnel, les identifiants composés uniquement de zéros, les
domaines réservés ou locaux, les URLs non chiffrées, tout port explicite, les
identifiants intégrés dans l’URL et les adresses privées ou réservées, y compris
les IPv4 privées encapsulées en IPv6.

Inversement, accepter une référence, une URL HTTPS publique ou un e-mail
structurellement plausibles signifie seulement que le témoin est identifiable.
Le moteur ne consulte pas la ressource, ne vérifie pas l’expéditeur et
n’authentifie ni la pièce ni le fait allégué. L’identifiabilité ne doit jamais
promouvoir une polarité positive.

### R31-P2-02 — passage de minuit sans événement

Rapport factuel :

- `page visible/active sans focus/pageshow/visibilitychange conserve ancienne signature et sorties`

Critère reproductible R31 : un minuteur doit viser le prochain changement de
date civile locale même si aucun événement n’est émis. Les gestionnaires
`focus`, `pageshow` et `visibilitychange` restent des gardes complémentaires.
Avant toute production ou ouverture de TXT, impression ou partage, une garde
synchrone doit recalculer la date et la signature attendues. En cas d’écart,
l’analyse devient périmée et la sortie reste verrouillée ; l’ancien instant
d’analyse n’est pas déplacé.

### R31-P2-03 — doubles négations et restrictions

Rapport UX :

- `ne refuse pas de confier`
- `ne confie pas que le service, elle confie aussi son suivi`
- `les services ne sont pas que distincts`

Critère reproductible R31 :

- `ne refuse pas de confier` ne constitue pas, seul, l’affirmation que le
  service a effectivement été confié ; sans affirmation positive distincte, le
  dossier reste incomplet ;
- `ne confie pas que le service, elle confie aussi son suivi` est une
  restriction et contient une affirmation explicite du fait de confier ; elle
  ne doit pas être transformée en négation du mandat ;
- `les services ne sont pas que distincts` est une restriction, pas une
  négation de leur distinction ; elle ne devient utilisable que dans une pièce
  qui identifie les deux services et satisfait toutes les autres exigences
  structurelles.

## Architecture de fermeture R31

### 1. Polarité explicite et fermeture par défaut

Chaque contrôle sensible doit produire séparément :

1. l’identifiabilité structurelle du témoin ;
2. sa polarité explicite : affirmative, contradictoire ou indéterminée ;
3. la cohérence entre cette polarité et le statut structuré.

Une structure documentaire, une autorité, une date, un numéro ou une URL ne
créent aucun fait favorable. Une contradiction explicite invalide le couple
statut/preuve. Une preuve non vide, identifiable mais sans affirmation
favorable certaine reste incomplète. Le texte libre ne modifie jamais le statut
structuré.

### 2. Exceptions non vides

Les segments introduits par `sauf`, `hormis`, `excepté`, `à l’exception de`,
`mise à part`, `à part`, `exception faite de` et leurs variantes fléchies
doivent être isolés avant de conclure sur la proposition générale :

- un fait positif dans leur portée prime sur l’absence générale ;
- une portée non vide mais ambiguë empêche toute conclusion favorable ;
- une portée vide ou grammaticalement rompue ne doit pas être complétée par
  inférence.

Cette règle s’applique au minimum aux compensations et restructurations sans
transformer le moteur en interprète juridique général.

### 3. Témoins stricts, mais jamais authentifiés

Le contrat R31 doit distinguer :

- les références formelles non factices ;
- les URLs HTTPS publiques sans identifiant intégré ni port explicite ;
- les adresses électroniques syntaxiquement plausibles hors domaines
  réservés, locaux ou manifestement factices ;
- la polarité factuelle portée par le texte.

Franchir ce filtre prouve seulement que le témoin peut être identifié et
contre-vérifié humainement. Cela ne prouve ni son existence réelle, ni son
contenu, ni l’autorité de son émetteur, ni l’applicabilité juridique alléguée.

### 4. Jour local et sorties

La fermeture temporelle repose sur deux niveaux complémentaires :

1. un minuteur reprogrammé pour le prochain minuit local, avec
   `focus`, `pageshow` et `visibilitychange` comme voies de rattrapage ;
2. une garde synchrone dans chaque commande de sortie, comparant la date locale,
   la signature courante et la signature analysée avant toute génération,
   impression ou partage.

Un changement de jour doit périmer l’analyse et fermer les sorties même si
React n’a reçu aucun événement. L’instant historique de l’analyse demeure
inchangé jusqu’à une nouvelle analyse explicite.

## Implémentation et validation locale R31

Le candidat applique le contrat sans modifier le schéma du brouillon :

- moteur : `site-aid-decision-r31-2026-07-27` ;
- application : `site-aid-application-r31-2026-07-27` ;
- brouillon inchangé : `site-aid-draft-r29-2026-07-26`.

La polarité et l’identifiabilité sont désormais contrôlées séparément. Le
mandat, la distinction et la territorialité favorables exigent une affirmation
explicite. Une absence de compensation ou de restructuration exige une
conclusion négative explicite. Les formulations indirectes non résolues, les
pièces seulement descriptives et les exceptions non qualifiées restent
incomplètes. Le filtre lexical demeure borné et ne remplace ni lecture
juridique, ni vérification de l’autorité, ni authentification.

Les deux validateurs de témoins partagent les mêmes gardes : racines factices
dans tout jeton, suites entièrement nulles, domaines locaux, privés ou réservés
même sans schéma ou arobase, URL HTTPS sans identifiants ni port explicite et
refus des adresses non publiques. Une forme acceptée reste seulement
structurellement plausible.

Le changement de date civile est surveillé par un réveil programmé au prochain
minuit, complété par `focus`, `pageshow` et `visibilitychange`. TXT et
impression revérifient synchroniquement la date et la signature avant toute
sortie. Le brouillon JSON reste exportable séparément, car il ne contient aucun
verdict.

| Contrôle                                           | Résultat                                                                                                                                |
| -------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| Moteur seul                                        | **1 209/1 209 — PASS**                                                                                                                  |
| Interface dossier seule                            | **108/108 — PASS**                                                                                                                      |
| Six suites métier, interface, brouillon et qualité | **1 405/1 405 — PASS**                                                                                                                  |
| Catalogue, langue, sitemap et indexation           | **62/62 — PASS**                                                                                                                        |
| TypeScript                                         | **PASS**                                                                                                                                |
| ESLint ciblé                                       | **PASS** ; seule note informative Babel sur le composant supérieur à 500 Kio                                                            |
| Prettier ciblé                                     | **PASS**                                                                                                                                |
| `git diff --check`                                 | **PASS**                                                                                                                                |
| `check:seo` global                                 | **491/492** ; seul échec hors périmètre : empreinte historique de `src/lib/guides.ts` attendue par `prioriser-fonctionnalites-mvp-saas` |
| Build Next.js direct                               | **PASS — 159 pages statiques**                                                                                                          |
| Artefact local servi                               | **10 285 mots visibles, 51 minutes**                                                                                                    |
| Vérificateur d’artefact                            | Aucun écart sur ce guide ; deux temps de lecture hors périmètre restent rouges sur `crm-sur-mesure-ou-hubspot` et `seo-local-pme`       |
| Gel commun R31                                     | **`docs/research/manifests/aides-creation-site-internet-p3-2026-07-26-r30.sha256` — 90 fichiers**                                       |

La validation locale ne transfère aucune note à R31 et n’ouvre pas P4.

## État de sortie

Ce rapport consigne le contrat reproductible et le gel local du candidat :

- **R31 VALIDÉ LOCALEMENT ET GELÉ** ;
- **aucun score R31** ;
- **aucun GO R31** ;
- **P4 fermée** ;
- **deux nouveaux audits froids R31 non encore réalisés** ;
- aucun commit, publication, déploiement, route de production, traitement de
  sitemap, indexation ou classement Google revendiqué.

Le contrat, ses reproductions positives et négatives et les validations locales
bornées sont désormais réalisés. La porte suivante exige deux audits froids
indépendants du même gel, chacun à au moins 92/100 et sans P0 ni P1. Aucun
score, GO ou état ultérieur n’est acquis par ce document.
