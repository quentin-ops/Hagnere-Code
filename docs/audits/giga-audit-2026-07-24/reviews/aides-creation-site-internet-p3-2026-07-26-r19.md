# Reprise P3 R19 → R20 — `aides-creation-site-internet`

Date de consolidation : 26 juillet 2026  
Périmètre : guide public, moteur local, interface, tests, recherche et benchmark  
Statut : **candidat R20 sans note ni GO ; P4 non lancée**

## 1. Double verdict du gel R19

Le manifeste
`docs/research/manifests/aides-creation-site-internet-p3-2026-07-26-r18.sha256`
contient **62 fichiers**. Son SHA-256 est
`57611eb7b770766ead13e02b9a6be8e4bb32a66edcc0943e18093455dff8898c`.
Les deux axes froids ont vérifié ce même gel **62/62 au début et à la fin**,
sans aucune écriture.

Les verdicts indépendants sont :

| Axe froid                              | Note                          | Décision |
| -------------------------------------- | ----------------------------- | -------- |
| Factuel, juridique et financier        | **78/100** — P0 0, P1 1, P2 2 | NO-GO P4 |
| Expérience, pédagogie et accessibilité | **96/100** — P0 0, P1 0, P2 0 | GO P4    |

Le P1 factuel bloque la porte P4 globale. Ces notes appartiennent au gel R19 ;
elles ne sont ni reportées ni extrapolées au candidat R20.

## 2. Registre fermé dans le candidat R20

| Clé         | Défaut reproduit sur le gel R19                                                                                                                                                                                                                                | Fermeture intégrée au candidat R20                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Preuve locale                                                                                                                                                                                                                                                                                                                                                                                        |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| R20-F-P1-01 | Le texte libre post-attribution devait encore porter seul la conclusion. Des formulations ordinaires telles que « Durées incertaines », « Aucune confirmation reçue » ou « Sous réserve de confirmation » pouvaient échapper à la grammaire et être acceptées. | Un 54e champ tri-état, `postAwardEvidenceVerified`, est séparé du texte. `unknown` et `no` maintiennent le dossier incomplet ; `yes` signifie seulement que l’utilisateur déclare avoir vérifié la décision, la convention ou la réponse écrite applicable. Le moteur rappelle qu’il ne lit ni n’authentifie la pièce, son applicabilité ou ses obligations.                                                                                                                                         | Matrices `unknown`, `no`, `yes` et valeur invalide ; texte affirmatif avec statut inconnu toujours incomplet ; texte absent avec `yes` toujours incomplet ; statut et texte exportés séparément ; contrôle accessible du groupe, des identifiants et du routage des erreurs.                                                                                                                         |
| R20-F-P2-01 | La grammaire produisait aussi des faux positifs : une phrase historique explicitement résolue, telle que « La mention “à confirmer” est levée », pouvait rester bloquée uniquement à cause de ses mots.                                                        | Toute inférence lexicale a été supprimée de `postAwardObligationsEvidence`. Le texte reste une trace déclarative et neutralisée dans le TXT ; seul le statut structuré commande le précontrôle, sous réserve qu’un texte substantiel soit présent. Une négation, une affirmation, un historique résolu ou une chaîne adversariale ne promeut ni ne dégrade le statut.                                                                                                                                | Les formulations de faux négatif du contre-audit restent incomplètes sous `unknown`; les trois formulations historiques résolues sont recevables sous `yes`; les statuts `OUI`, `NON`, `À CONFIRMER` et invalide → `ND` sont prouvés dans le rapport sans interprétation du texte.                                                                                                                   |
| R20-F-P2-02 | Le règlement SIEG 2023/2832, son plafond de 750 000 € sur trois ans, ses règles de cumul et ses limites n’étaient pas modélisés.                                                                                                                               | Le classificateur reconnaît seulement les formes exactes numérotées, CELEX et ELI officielles du règlement 2023/2832 et rejette les citations enrichies, doublons, doubles identifiants, HTTP, sous-domaines trompeurs, paramètres et dates invalides. Le moteur contrôle 750 000 € sur toute période de trois ans, autorise le cumul avec les autres régimes sous leurs plafonds propres et présente 1 050 000 € comme un simple repère arithmétique, sans plafond juridique autonome ou universel. | Frontières à 750 000 € + 300 000 € et à 1 050 001 € ; limitation même lorsque montant, date, État membre ou entreprise unique manquent ; interdiction de toute compensation relative au même SIEG ; règles de mêmes coûts ; exception bornée d’entreprise unique laissée à confirmer. Le guide public explique ces règles et donne un exemple 620 000 € + 220 000 € sans conclure à l’applicabilité. |

Le bornage factuel repose sur les règlements officiels EUR-Lex
[2023/2832](https://eur-lex.europa.eu/eli/reg/2023/2832/oj) et
[2023/2831](https://eur-lex.europa.eu/eli/reg/2023/2831/oj). Le candidat ne
qualifie ni un service de SIEG, ni un mandat, ni une compensation, ni
l’entreprise unique, ni l’applicabilité d’un règlement au cas réel.

## 3. Audit moteur avant gel

Un audit à froid limité au moteur a initialement trouvé un P1 : la limitation
SIEG n’apparaissait que si toutes les données permettaient de construire une
observation de cumul. Une référence 2023/2832 correctement résolue mais encore
incomplète pouvait donc masquer l’interdiction de compensation du même SIEG et
l’exception d’entreprise unique.

La condition dépend désormais directement de la résolution SIEG courante ou
d’une ligne SIEG du registre. Après correction des P1/P2 reproduits, le re-audit
moteur en lecture seule conclut **98/100, P0 0, P1 0, P2 0, GO pour gel du
moteur**, avec **844/844 tests**. Ce verdict est borné au moteur : il n’attribue
aucune note et aucun GO au candidat R20 complet.

## 4. Validation consolidée du candidat R20

| Contrôle                                     | Résultat                                                                                                                                 |
| -------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Suite ciblée sur sept fichiers               | **995/995 tests réussis**                                                                                                                |
| Moteur R20 seul                              | **844/844 tests réussis**                                                                                                                |
| Interface, porte d’export et axe-core        | **54/54 tests réussis**                                                                                                                  |
| Contrat documentaire, factuel et pédagogique | **35/35 tests réussis**                                                                                                                  |
| Moteur + interface + contrat qualité         | **933/933 tests réussis**                                                                                                                |
| TypeScript sans émission                     | conforme                                                                                                                                 |
| ESLint ciblé                                 | conforme                                                                                                                                 |
| Prettier et vérification des espaces Git     | conformes                                                                                                                                |
| Corpus SEO complet                           | **491/492** ; seul échec : gel P4 historique de `prioriser-fonctionnalites-mvp-saas` sur `src/lib/guides.ts`, hors périmètre de ce guide |
| Construction Next.js directe                 | conforme ; **159/159 pages statiques** générées                                                                                          |

La page construite contient :

- le titre `Aides pour créer un site internet en 2026 · Hagnéré Code` ;
- le canonical
  `https://hagnere-code.ai/guides/aides-creation-site-internet` ;
- `noindex, nofollow` ;
- une URL Open Graph identique au canonical ;
- deux blocs JSON-LD ;
- le prédiagnostic avant le dossier complet et la mention des 54 champs ;
- les durées conditionnelles de 5 à 10 minutes, rarement moins de 20 minutes,
  puis 40 minutes ou davantage si une pièce reste à retrouver ou confirmer ;
- l’explication publique SIEG, ses plafonds propres, le repère non universel,
  la compensation du même service et les limites du moteur ;
- le téléchargement TXT et l’impression désactivés et décrits avant analyse ;
- aucun élément portant la classe `.site-aid-print-report` dans l’HTML initial.

L’absence de la version du moteur dans l’HTML initial est intentionnelle : la
version appartient au rapport de décision, lequel n’est construit qu’après une
analyse explicite. Les tests prouvent séparément
`site-aid-decision-r20-2026-07-26` et sa présence dans le TXT généré.

Empreintes centrales du candidat :

```text
docs/research/aides-creation-site-internet.md
769872d60b1e0ab4b1bb0aeccd85a10c5cf43a6492a909a2cb7791f73124076a

docs/research/aides-creation-site-internet-world-benchmark-2026-07-26-r1.md
a7de4fd6fbecb38735503585baf75420abc8113e3b537186e5d215f5dcbf74e0

docs/audits/giga-audit-2026-07-24/guides/aides-creation-site-internet.md
d439e20e742f9af7a67ccaee03f114e3bd6828fa68be46645f72e8cd4cb47e53

src/app/guides/aides-creation-site-internet/page.tsx
245733db815c32fec3533e0a7014fe84a81f88021d241cb8682d9dab02730e1b

src/components/guides/SiteAidDecisionDossier.tsx
a1cb04b48cbdc1b2399df1d002919e7a25968ff99bae644976d2bb7bcc70a5e1

src/components/guides/SiteAidDecisionDossier.test.tsx
2c7c24951ec36d2478fc073e4107c209509b4dcf67cf78c5337fd688aad6ad7d

src/lib/site-aid-decision.ts
2d776d314acf38dec7ba6692280cbb510fc7e8ce2b62cd5584535267ce24f4a7

src/lib/site-aid-decision.test.ts
0dfe83100c0602e686e7d5eedf80f49eb06475b42e71ed9c5fe0bcafd3f0107f

src/lib/site-aid-guide-quality.test.ts
981129d275f3af16ace1dbdf1a053a24799172feb5d06a8fa7e1f4cdccacbe28
```

## 5. Porte suivante

Les contrôles intégrés et l’audit moteur prouvent seulement les comportements
couverts. Le candidat R20 complet reçoit dans ce rapport **aucune note et aucun
GO**.

La suite autorisée est :

1. créer un nouveau manifeste commun immuable ;
2. faire relire ce même gel par deux axes froids indépendants ;
3. rouvrir une boucle corrective si un P0, un P1 ou un P2 bloquant est
   reproduit ;
4. lancer P4 en navigateur réel et en impression uniquement après un double
   GO.

Ni déploiement, ni disponibilité en production, ni traitement du sitemap, ni
indexation Google, ni classement ne sont prouvés ou revendiqués ici.
