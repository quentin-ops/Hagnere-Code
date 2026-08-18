# Reprise P3 R16 → R17 — `aides-creation-site-internet`

Date de consolidation : 26 juillet 2026  
Périmètre : guide, moteur local, interface, tests, recherche et benchmark  
Statut : **candidat R17 sans note ni GO ; P4 non lancé**

## 1. Double verdict du gel R16

Le manifeste
`docs/research/manifests/aides-creation-site-internet-p3-2026-07-26-r15.sha256`
contient **56 fichiers**. Son SHA-256 est
`b84fd7efa36e5b34f79dc572c9c32ac6ca52bdff3c9fe4d82bdcd1d0aba20835`.
Les deux contre-auditeurs ont vérifié ce même gel **56/56 au début et à la
fin**, sans aucune écriture.

Les verdicts indépendants sont :

| Axe froid                              | Note                          | Décision |
| -------------------------------------- | ----------------------------- | -------- |
| Factuel, juridique et financier        | **84/100** — P0 0, P1 1, P2 2 | NO-GO P4 |
| Expérience, pédagogie et accessibilité | **90/100** — P0 0, P1 0, P2 3 | NO-GO P4 |

Ces notes appartiennent au gel R16. Elles ne sont ni reportées ni extrapolées
au candidat R17.

## 2. Registre fermé dans le candidat R17

| Clé          | Défaut reproduit sur le gel R16                                                                                                               | Fermeture intégrée au candidat R17                                                                                                                                                                                                                                                                                             | Preuve locale                                                                                                                                                                                         |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| R17-F-P1-01  | Le marqueur post-attribution « à confirmer » pouvait être coupé par des caractères Unicode invisibles et laisser passer un dossier incomplet. | Une normalisation sémantique strictement ciblée retire les caractères de contrôle non textuels, de format, les demi-surrogates, les séparateurs Unicode et les caractères ignorables par défaut. Les retours ligne et tabulations utiles restent des séparateurs. Le texte brut n’est pas réécrit avant son export neutralisé. | 144 insertions dans « à confirmer », plus caractères C0, C1, bidi, sélecteurs de variation, séparateurs, demi-surrogates, valeur purement invisible, négatif « confirmés », preuve multiligne et TXT. |
| R17-F-P2-01  | La page parlait d’une seule « date d’analyse » alors que le moteur emploie deux ancres.                                                       | La page présente une convention de précontrôle explicite : le groupe de l’aide courante est ancré à sa date juridique d’octroi ; les autres groupes enregistrés le sont à la date de vérification du dossier. L’autorité confirme la période et l’applicabilité au cas réel.                                                   | Contrat éditorial, page source et HTML construit vérifient les deux ancres et leur limite juridique.                                                                                                  |
| R17-F-P2-02  | Une barre verticale littérale cassait une ligne du tableau Markdown du rapport R16.                                                           | Le caractère est décrit en toutes lettres dans la cellule ; la ligne conserve quatre cellules et les séparateurs système restent lisibles.                                                                                                                                                                                     | Contrôle du nombre exact de séparateurs Markdown dans la ligne concernée.                                                                                                                             |
| R17-UX-P2-01 | Les confirmations de chargement et de réinitialisation pouvaient rester ouvertes en même temps.                                               | Un état exclusif unique autorise seulement « exemple », « réinitialisation » ou aucune confirmation. Le passage dans les deux directions ferme l’ancien groupe, place le focus sur l’action sûre, ne modifie pas le brouillon et conserve Échap avec retour au bon déclencheur.                                                | Parcours bidirectionnel dédié, contrôles de groupe nommé, focus, Échap, absence de mutation et trois scénarios axe-core complets.                                                                     |
| R17-UX-P2-02 | Le guide exposait des noms artificiels et du vocabulaire de test dans une explication destinée au dirigeant.                                  | Le bloc explique désormais que le TXT reprend les noms, libellés et espaces sans les réécrire, neutralise les caractères structurels et n’authentifie aucune preuve. Les noms artificiels et le jargon de régression sont absents du contenu public.                                                                           | Contrat d’absence dans le texte visible, formulation naturelle exigée et vérification de l’HTML construit.                                                                                            |
| R17-UX-P2-03 | Une aide Unicode de 101 mots était répétée sous l’aide courante et chaque ligne du registre.                                                  | Une aide partagée de 61 mots est affichée une seule fois. Elle explique NFC, identité exacte, absence de fusion automatique, alerte interscripts et conduite à tenir selon qu’il s’agit de la même entreprise ou d’entités distinctes. Tous les champs concernés la référencent.                                               | Deux lignes dynamiques, identifiant unique, références accessibles résolues, absence des anciennes aides répétées et axe-core complet.                                                                |

## 3. Bornes techniques et juridiques conservées

- La normalisation R17 concerne uniquement l’analyse sémantique du champ
  post-attribution. Elle ne réécrit pas les autres champs et ne prétend pas
  authentifier une preuve.
- L’export TXT neutralise les caractères structurels ou invisibles tout en
  laissant le lecteur comparer la saisie avec la pièce d’origine. Une sortie
  fidèle n’est ni une validation ni une signature.
- La barrière conservatrice entre graphies latines, grecques et cyrilliques
  reste un signal de prudence. Elle ne fusionne aucune identité et ne prétend
  pas implémenter intégralement Unicode UTS #39.
- Le calcul temporel reste une convention locale de précontrôle. L’autorité
  attributrice ou le conseil compétent doit confirmer le régime, la période,
  l’entreprise unique, le cumul et l’applicabilité au cas réel.
- Aucun montant déclaré, domaine public ou document saisi n’est authentifié par
  l’outil.

## 4. Validation consolidée du candidat R17

| Contrôle                                  | Résultat                                                                                                                                 |
| ----------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Suite ciblée sur sept fichiers            | **708/708 tests réussis**                                                                                                                |
| Moteur R17 seul, sans cache               | **567/567 tests réussis**                                                                                                                |
| Interface seule, axe-core complet inclus  | **51/51 tests réussis**                                                                                                                  |
| Contrat documentaire et pédagogique       | **28/28 tests réussis**                                                                                                                  |
| TypeScript sans émission                  | conforme                                                                                                                                 |
| ESLint ciblé                              | conforme                                                                                                                                 |
| Prettier ciblé                            | conforme                                                                                                                                 |
| Vérification des espaces et marqueurs Git | conforme                                                                                                                                 |
| Corpus SEO complet                        | **491/492** ; seul échec : gel P4 historique de `prioriser-fonctionnalites-mvp-saas` sur `src/lib/guides.ts`, hors périmètre de ce guide |
| Construction Next.js directe              | conforme ; **159/159 pages statiques** générées                                                                                          |

La page construite contient :

- le titre `Aides pour créer un site internet en 2026 · Hagnéré Code` ;
- le canonical
  `https://hagnere-code.ai/guides/aides-creation-site-internet` ;
- `noindex, nofollow` ;
- une URL Open Graph identique au canonical ;
- deux blocs JSON-LD ;
- la version moteur R17 et le champ post-attribution ;
- les deux ancres temporelles ;
- une seule aide Unicode partagée ;
- la formulation naturelle de l’export, sans les trois noms artificiels
  signalés par le contre-audit.

Empreintes centrales du candidat :

```text
docs/research/aides-creation-site-internet.md
60686f7876cf33342a8943547f0174efe5dab03049a2029ee965a3268f487cad

docs/research/aides-creation-site-internet-world-benchmark-2026-07-26-r1.md
ffadae6f8f159db68dff9d9b54f94c9aa639235e01dd9e9e84b7e688ea18c18a

docs/audits/giga-audit-2026-07-24/guides/aides-creation-site-internet.md
74b3d3264b969f4a742e6b2e1a18095af8a98f548f366af5c5740e39ab7c71e8

docs/audits/giga-audit-2026-07-24/reviews/aides-creation-site-internet-p3-2026-07-26-r15.md
9e00bcff6f81942d65fee49cc74bc8977a311d315c357c1074f1baa86ead0d0d

src/app/guides/aides-creation-site-internet/page.tsx
1ae7ff3a4a484edf01e1aa1c135a74824d5b1f0d50f029e18cfaa9332ebd2394

src/components/guides/SiteAidDecisionDossier.tsx
020db3299aba05e76f649ad22fa318e966d0ce6ef90dd9ac2f537d547561eb5b

src/components/guides/SiteAidDecisionDossier.test.tsx
8192632b2a6388898f85cd4f1177a308ae79f9be3ab3d96a62535e2a3d31e326

src/lib/site-aid-decision.ts
05cb0e5b9723d401dea8430a12ab7464348379c097efbd4fb1b2ad5d30bb2eda

src/lib/site-aid-decision.test.ts
ed3bc2c6e9befb89881bdbc1fc409a45be26fbc0f579d1a3aab1f97aed71ce69

src/lib/site-aid-guide-quality.test.ts
894eab773be5e67a81c066eb6702395d22dc53c0644f823384d4269e21b30400
```

## 5. Porte suivante

Les contrôles intégrés prouvent seulement les comportements couverts. Le
candidat R17 reçoit dans ce rapport **aucune note et aucun GO**.

La suite autorisée est :

1. créer un nouveau manifeste commun immuable ;
2. faire relire ce même gel par deux axes froids indépendants ;
3. rouvrir une boucle corrective si un P0, un P1 ou un P2 bloquant est
   reproduit ;
4. lancer P4 en navigateur réel et en impression uniquement après un double
   GO.

Ni déploiement, ni disponibilité en production, ni traitement du sitemap, ni
indexation Google, ni classement ne sont prouvés ou revendiqués ici.
