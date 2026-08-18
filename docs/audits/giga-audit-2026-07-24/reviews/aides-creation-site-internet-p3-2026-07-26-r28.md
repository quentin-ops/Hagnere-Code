# Audits froids R27 et contrat correctif R28 — `aides-creation-site-internet`

Date de consolidation : **26 juillet 2026**

## Verdict probatoire

**R27 : double NO-GO P4. R28 : validé localement et figé, mais encore sans
score, sans GO et sans ouverture de P4.**

Les deux audits froids R27 ont travaillé en lecture seule sur le même gel de
**86 fichiers** :

`docs/research/manifests/aides-creation-site-internet-p3-2026-07-26-r26.sha256`

| Axe froid                                 | Note   | Sévérités                | Verdict      |
| ----------------------------------------- | ------ | ------------------------ | ------------ |
| Faits, droit, finance et moteur           | 74/100 | P0 : 0 ; P1 : 4 ; P2 : 1 | **NO-GO P4** |
| Expérience, pédagogie, sorties et reprise | 87/100 | P0 : 0 ; P1 : 3 ; P2 : 2 | **NO-GO P4** |

Ces notes décrivent exclusivement R27. Elles ne sont pas transférées à R28.
L’union dédupliquée ouvre **6 P1 et 2 P2**.

## Registre dédupliqué R27 → R28

| Identifiant | Sévérité | Défaut observé dans R27                                     | Contrat de fermeture R28                                                                                                                                               |
| ----------- | -------- | ----------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| R28-P1-01   | P1       | Analyse et exports conservés après mutation du dossier      | Lier le résultat à une signature de tous les faits, preuves, réponses et états ; toute mutation verrouille TXT et impression jusqu’à une nouvelle analyse.             |
| R28-P1-02   | P1       | Négation du mandat SIEG encore contournable                 | Reconnaître les négations grammaticales bornées autour du fait de confier le service, sans jamais convertir le texte libre en preuve favorable.                        |
| R28-P1-03   | P1       | Négation de la distinction des services encore contournable | Reconnaître les négations grammaticales bornées autour de la distinction des services et suspendre toute contradiction avec le statut structuré.                       |
| R28-P1-04   | P1       | Date de vérification du profil postérieure à l’analyse      | Injecter une date d’analyse explicite dans le moteur et refuser toute vérification future par rapport à cette ancre.                                                   |
| R28-P1-05   | P1       | Territorialité datée seulement dans un texte non structuré  | Exiger une date structurée propre à la preuve territoriale, non postérieure à sa vérification ni à l’analyse.                                                          |
| R28-P1-06   | P1       | Échéance exacte insuffisamment traçable                     | Exiger une référence officielle identifiable et sa date de vérification avant de traiter une date limite comme exacte.                                                 |
| R28-P2-01   | P2       | Territorialité avancée trop exposée dans le parcours normal | Garder la règle métier visible, mais placer les contrôles territoriaux avancés dans une divulgation contextuelle fermée hors cas concerné.                             |
| R28-P2-02   | P2       | Aucun suivi structuré après dépôt                           | Conserver un état neutre par défaut et, si un dépôt est déclaré, exiger date, accusé identifiable et confirmation que le dossier déposé correspond au dossier préparé. |

## Fermetures intégrées

### Temporalité et péremption

Le moteur `site-aid-decision-r28-2026-07-26` reçoit désormais un contexte
d’évaluation explicite avec `analysisDate`. Une date d’analyse invalide échoue
fermée. La date de vérification du profil, la date de preuve territoriale et les
autres bornes comparables ne peuvent pas être postérieures à cette ancre.

L’interface conserve une signature du dossier effectivement analysé. Toute
modification d’un fait, d’une preuve, de la candidature, du prédiagnostic ou du
suivi de dépôt rend le résultat périmé. Le verdict partagé, le TXT et
l’impression restent verrouillés jusqu’à une nouvelle analyse du dossier
courant.

### SIEG

Les deux gardes grammaticales sont séparées :

- le mandat applicable et le fait que le service ait été confié ;
- la distinction juridique réelle entre les deux services comparés.

Elles traitent les négations bornées avec pronoms, auxiliaires, participes et
adverbes intercalés. Le statut structuré continue de porter la conclusion ; le
texte obligatoire reste déclaratif, non authentifié et ne sert qu’à détecter
une contradiction ou une ambiguïté.

### Territorialité

Une qualification territoriale positive exige maintenant quatre éléments
distincts : statut structuré, pièce ou source identifiable, date de vérification
du profil et date structurée propre à la preuve territoriale. Cette dernière
doit être au format ISO, ne pas dépasser la date de vérification et ne pas être
future par rapport à l’analyse.

Les contrôles avancés restent disponibles, mais sont repliés par défaut pour un
lecteur non concerné. Ils s’ouvrent lorsqu’une donnée territoriale existe ou que
le régime concerné est sélectionné.

### Échéance et après-dépôt

Une échéance exacte ou un guichet permanent exige une référence officielle
identifiable et une date de vérification non future. Le fuseau officiel du
guichet reste nécessaire pour comparer le jour local d’une échéance exacte.

Le brouillon `site-aid-draft-r28-2026-07-26` migre explicitement R27 et conserve
un suivi postérieur au dépôt :

- statut du dépôt ;
- date du dépôt ;
- référence de l’accusé ou du reçu ;
- concordance entre le dossier préparé et le dossier réellement déposé.

Le statut initial reste `unknown`. Aucun dépôt, aucune date et aucun accusé ne
sont inventés. Si l’utilisateur déclare un dépôt, les trois preuves
complémentaires deviennent bloquantes pour la synthèse ; une date future ou
postérieure à l’échéance exacte est refusée.

## Validation locale R28 observée

| Contrôle                                           | Résultat                                                                                                                            |
| -------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Six suites métier, interface, brouillon et qualité | **1 291/1 291 — PASS**                                                                                                              |
| Catalogue, langue, sitemap et indexation           | **62/62 — PASS**                                                                                                                    |
| TypeScript                                         | **PASS**                                                                                                                            |
| ESLint ciblé                                       | **PASS**                                                                                                                            |
| Prettier ciblé                                     | **PASS**                                                                                                                            |
| `git diff --check`                                 | **PASS**                                                                                                                            |
| `check:seo` global                                 | **491/492** ; seul échec hors périmètre : empreinte historique de `src/lib/guides.ts` pour `prioriser-fonctionnalites-mvp-saas`     |
| Build Next.js direct                               | **PASS — 159 pages statiques**                                                                                                      |
| Artefact local servi                               | **9 833 mots visibles, 49 minutes**                                                                                                 |
| Vérificateur d’artefact                            | Aucun écart sur ce guide ; deux échecs globaux hors périmètre sur `crm-sur-mesure-ou-hubspot` et `seo-local-pme`                    |
| Gel commun R28                                     | **Produit dans `docs/research/manifests/aides-creation-site-internet-p3-2026-07-26-r27.sha256` sur le corpus final de 87 fichiers** |
| Deux nouveaux audits froids R28                    | **Non réalisés — aucune note, aucun GO, aucune ouverture de P4**                                                                    |

## Limites du présent rapport

Cette consolidation prouve les comportements couverts et la compilation locale.
Elle ne vaut ni audit froid R28, ni note, ni GO P4, ni BAT navigateur, ni
commit, ni publication, ni déploiement, ni traitement réel du sitemap, ni
indexation réelle, ni classement Google.

Le prochain état probatoire exige, dans cet ordre :

1. faire contrôler ce même gel par deux auditeurs indépendants en lecture seule ;
2. obtenir au moins 92/100 sur chaque axe, sans P0 ni P1 ;
3. ouvrir seulement alors le BAT P4 en navigateur réel.

## Transition ultérieure vers R29

Après ce gel, les deux audits froids R28 ont rendu **78/100 — NO-GO P4** sur
l’axe factuel (`P0 : 0 ; P1 : 3 ; P2 : 2`) et
**90/100 — NO-GO P4** sur l’axe expérience
(`P0 : 0 ; P1 : 1 ; P2 : 3`). Le manifeste est resté intact à 87/87 au début
et à la fin ; SHA-256 :
`59a698efcd4229782911196edc575d12481b8b6a87c1c7e263d43d4900901572`.

Leur union dédupliquée de **3 P1 et 4 P2**, les corrections R29 et le nouvel
état probatoire sont consignés dans
[`aides-creation-site-internet-p3-2026-07-26-r29.md`](aides-creation-site-internet-p3-2026-07-26-r29.md).

Le présent fichier reste la preuve historique du candidat R28 avant ses audits ;
il ne décrit plus l’état vivant du guide.
