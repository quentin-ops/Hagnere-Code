# Reprise P3 R18 → R19 — `aides-creation-site-internet`

Date de consolidation : 26 juillet 2026  
Périmètre : guide, moteur local, interface, tests, recherche et benchmark  
Statut : **candidat R19 sans note ni GO ; P4 non lancée**

## 1. Double verdict du gel R18

Le manifeste
`docs/research/manifests/aides-creation-site-internet-p3-2026-07-26-r17.sha256`
contient **60 fichiers**. Son SHA-256 est
`e4dc150d950d0866e34c99ee76047865880ed03b87b369803ddbbc91c6c83e30`.
Les deux axes froids ont vérifié ce même gel **60/60 au début et à la fin**,
sans aucune écriture.

Les verdicts indépendants sont :

| Axe froid                              | Note                          | Décision |
| -------------------------------------- | ----------------------------- | -------- |
| Factuel, juridique et financier        | **82/100** — P0 0, P1 1, P2 1 | NO-GO P4 |
| Expérience, pédagogie et accessibilité | **84/100** — P0 0, P1 1, P2 1 | NO-GO P4 |

Les deux P1 bloquent la porte P4. Ces notes appartiennent au gel R18 ; elles ne
sont ni reportées ni extrapolées au candidat R19.

## 2. Registre fermé dans le candidat R19

| Clé          | Défaut reproduit sur le gel R18                                                                                                                                 | Fermeture intégrée au candidat R19                                                                                                                                                                                                             | Preuve locale                                                                                                                                                                                                     |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| R19-F-P1-01  | Des formulations naturelles telles que « obligations non confirmées », « statut non-confirmé » ou « confirmation non reçue » restaient acceptées comme preuve.  | La grammaire post-attribution reste bornée, mais couvre désormais masculin, féminin, singulier, pluriel, confirmation non reçue et tirets Unicode. Aucun compactage global n’est introduit et la saisie brute reste conservée pour le rapport. | Six formulations reproduites deviennent incomplètes ; **27/27 tirets Unicode de catégorie Pd** sont testés ; les **192/192 cas Zs** et les formulations affirmatives documentées restent couverts.                |
| R19-F-P2-01  | Le rapport R17→R18 affirmait que le contrôle portait sur vingt lignes de tableaux Markdown, alors que l’inventaire reproductible en contient vingt et une.      | Le rapport historique emploie désormais « vingt et une ». Le contrat documentaire conserve le comptage des cellules de chacune des 21 lignes et interdit qu’une barre verticale libre fabrique une colonne supplémentaire.                     | L’ancienne affirmation est absente ; l’inventaire et la structure des **21 lignes** restent contrôlés.                                                                                                            |
| R19-UX-P1-01 | TXT et impression pouvaient rendre une rubrique de décision avant le premier clic sur « Analyser », alors que l’écran annonçait qu’aucun verdict n’était rendu. | Le rapport n’est construit et son bloc imprimable n’est rendu qu’après une analyse explicite. Les deux actions sont désactivées avant ce clic, reliées à une explication accessible et aussi protégées dans leurs fonctions d’action.          | Test avant/après analyse : aucune URL de téléchargement, aucun appel d’impression et aucun rapport imprimable avant analyse ; TXT et impression deviennent disponibles ensuite et restent cohérents avec l’écran. |
| R19-UX-P2-01 | L’explication des durées arrivait après le formulaire de 53 champs et aucun parcours court ne matérialisait le prédiagnostic annoncé.                           | Une étape visible placée avant le formulaire propose cinq vérifications rapides, trois règles de sortie et la prochaine action. Elle précise qu’elle n’est ni une décision juridique, ni une preuve d’éligibilité, ni le dossier complet.      | Ordre de source et d’HTML construit : prédiagnostic avant dossier. Les 5 à 10 minutes restent réservées à cette étape ; les 53 champs et leurs pièces restent annoncés à 20 à 40 minutes, parfois davantage.      |

## 3. Validation consolidée du candidat R19

| Contrôle                                             | Résultat                                                                                                                                 |
| ---------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Suite ciblée sur sept fichiers                       | **955/955 tests réussis**                                                                                                                |
| Moteur R19 seul, sans cache                          | **809/809 tests réussis**                                                                                                                |
| Interface, porte d’export et axe-core                | **52/52 tests réussis**                                                                                                                  |
| Contrat documentaire et pédagogique                  | **32/32 tests réussis**                                                                                                                  |
| TypeScript sans émission                             | conforme                                                                                                                                 |
| ESLint ciblé                                         | conforme                                                                                                                                 |
| Prettier moteur et tests, version 3.6.2              | conforme                                                                                                                                 |
| Prettier page, interface et documents, version 3.9.6 | conforme                                                                                                                                 |
| Vérification des espaces et marqueurs Git            | conforme                                                                                                                                 |
| Corpus SEO complet                                   | **491/492** ; seul échec : gel P4 historique de `prioriser-fonctionnalites-mvp-saas` sur `src/lib/guides.ts`, hors périmètre de ce guide |
| Construction Next.js directe                         | conforme ; **159/159 pages statiques** générées                                                                                          |

La distinction de version Prettier évite une réécriture mécanique étendue des
types historiques du moteur. Elle n’affecte ni le comportement ni les tests.

La page construite contient :

- le titre `Aides pour créer un site internet en 2026 · Hagnéré Code` ;
- le canonical
  `https://hagnere-code.ai/guides/aides-creation-site-internet` ;
- `noindex, nofollow` ;
- une URL Open Graph identique au canonical ;
- deux blocs JSON-LD ;
- le prédiagnostic avant le formulaire, ses cinq vérifications, ses trois
  sorties et ses limites ;
- les durées distinctes de 5 à 10 minutes et de 20 à 40 minutes ou davantage ;
- les deux actions d’export désactivées et décrites avant analyse ;
- aucun bloc `.site-aid-print-report` dans l’HTML initial ;
- aucune occurrence de l’expression éditoriale artificielle « cinq portes ».

L’absence de la version du moteur dans l’HTML initial est intentionnelle : cette
version appartient au rapport de décision, lequel ne doit plus exister avant une
analyse explicite. Les tests moteur prouvent séparément la version
`site-aid-decision-r19-2026-07-26` et sa présence dans le TXT généré après
analyse.

Empreintes centrales du candidat :

```text
docs/research/aides-creation-site-internet.md
2bc7e410d0638b6d5376d2f484e2da3b03407e357ba917938b3f68ec779d06bc

docs/research/aides-creation-site-internet-world-benchmark-2026-07-26-r1.md
2b3511f2e8e19aec9f58bde63384cda398748f8dd7a29e13a2ee8a49371b5dfc

docs/audits/giga-audit-2026-07-24/guides/aides-creation-site-internet.md
ce96d435f262d4fa6decc3262f1accdf1972dcc8321af874fd24f9cd63d6cc0a

src/app/guides/aides-creation-site-internet/page.tsx
befabbe73bfcd708b94decbbb39468393fe6498b9eec0cf3c287dc1837d8ccf1

src/components/guides/SiteAidDecisionDossier.tsx
31dd9c957443d7b37473a7e50a9c0622ca005b880b8a26525c0ac66b312386dc

src/components/guides/SiteAidDecisionDossier.test.tsx
b71827ff755053c90ab34cdf88fe612f6cb14f90ecc9af958ebda4bc97398c18

src/lib/site-aid-decision.ts
106d33e3b11d95df9b9de776d4557349c7344de9bf4d2169fc6b617e00f89b4b

src/lib/site-aid-decision.test.ts
0a7d214be74d1c61deed96058bc2321114706a63f3e1d23de323ef2f264f2c0a

src/lib/site-aid-guide-quality.test.ts
a2ad146fe4c6d8a598e2958495150a71b2f605028b8ebe4df2ddb2f807eb6283
```

## 4. Porte suivante

Les contrôles intégrés prouvent seulement les comportements couverts. Le
candidat R19 reçoit dans ce rapport **aucune note et aucun GO**.

La suite autorisée est :

1. créer un nouveau manifeste commun immuable ;
2. faire relire ce même gel par deux axes froids indépendants ;
3. rouvrir une boucle corrective si un P0, un P1 ou un P2 bloquant est
   reproduit ;
4. lancer P4 en navigateur réel et en impression uniquement après un double
   GO.

Ni déploiement, ni disponibilité en production, ni traitement du sitemap, ni
indexation Google, ni classement ne sont prouvés ou revendiqués ici.
