# Audits froids R28 et contrat correctif R29 — `aides-creation-site-internet`

Date de consolidation : **26 juillet 2026**

## Verdict probatoire

**R28 : double NO-GO P4. R29 : validé localement et figé, mais encore sans
score, sans GO et sans ouverture de P4.**

Les deux audits froids R28 ont travaillé en lecture seule sur le même gel de
**87 fichiers** :

`docs/research/manifests/aides-creation-site-internet-p3-2026-07-26-r27.sha256`

Le manifeste est resté intact à **87/87 au début et à la fin** des deux audits ;
son SHA-256 est
`59a698efcd4229782911196edc575d12481b8b6a87c1c7e263d43d4900901572`.

| Axe froid                                 | Note   | Sévérités                | Verdict      |
| ----------------------------------------- | ------ | ------------------------ | ------------ |
| Faits, droit, finance et moteur           | 78/100 | P0 : 0 ; P1 : 3 ; P2 : 2 | **NO-GO P4** |
| Expérience, pédagogie, sorties et reprise | 90/100 | P0 : 0 ; P1 : 1 ; P2 : 3 | **NO-GO P4** |

Ces notes décrivent exclusivement R28. Elles ne sont pas transférées à R29.
L’union dédupliquée ouvre **3 P1 et 4 P2**.

## Registre dédupliqué R28 → R29

| Identifiant | Sévérité | Défaut observé dans R28                                        | Contrat de fermeture R29                                                                                                                        |
| ----------- | -------- | -------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| R29-P1-01   | P1       | Mandat SIEG négatif avec adverbe intercalaire accepté          | Étendre la grammaire bornée à `pourtant`, `toujours`, `absolument`, `à ce stade` et proches, sur l’aide courante et le registre.                |
| R29-P1-02   | P1       | Non-distinction SIEG avec adverbe intercalaire acceptée        | Appliquer la même fenêtre grammaticale à la distinction juridique, sans casser `pas seulement` ni créer de fait favorable depuis le texte.      |
| R29-P1-03   | P1       | Une chaîne comme `x` vaut référence officielle d’échéance      | Accepter seulement une URL précise, un identifiant formel ou un document/réponse suffisamment qualifié ; rappeler l’absence d’authentification. |
| R29-P2-01   | P2       | Un accusé `xxxxxx` est exporté comme identifiable              | Exiger une URL précise, un identifiant formel, un numéro qualifié, un courriel qualifié ou une trace datée suffisamment descriptive.            |
| R29-P2-02   | P2       | Une borne de saisie reste au jour de l’ancienne analyse        | Séparer la date civile éditable de l’instant analysé et la rafraîchir au focus, `pageshow` ou retour visible.                                   |
| R29-P2-03   | P2       | Une normalisation après import reste annoncée comme alignée    | Calculer la normalisation avant l’application, marquer le brouillon non exporté et l’annoncer seulement si une valeur change réellement.        |
| R29-P2-04   | P2       | Date de la circulaire présentée sans distinguer ses deux dates | Indiquer qu’elle est signée le 3 mars 2026 et datée du 4 mars 2026 dans son en-tête.                                                            |

## Fermetures intégrées

### Polarité SIEG

Le moteur `site-aid-decision-r29-2026-07-26` utilise une fenêtre grammaticale
commune et bornée pour le mandat et la distinction des services. Les phrases
suivantes sont désormais contradictoires avec un statut structuré favorable :

- « La décision écrite n° DEC-2026-42 ne lui confie pourtant pas le service
  SIEG. »
- « Les services X et Y ne sont pourtant pas juridiquement distincts. »

Les variantes avec `toujours`, `absolument`, `à ce stade`, casse, espaces et
apostrophes sont couvertes. Les restrictions `pas seulement` et `pas
uniquement` restent distinctes d’une négation du fait principal. Le texte libre
reste non authentifié et ne fabrique aucun statut favorable.

### Références d’échéance et de dépôt

L’application `site-aid-application-r29-2026-07-26` ne considère plus une
chaîne non vide comme identifiable.

Pour l’échéance, la forme doit permettre une vérification humaine ultérieure :
URL avec localisation précise, identifiant formel mêlant lettres et chiffres,
ou réponse/document assez qualifié par son type, son auteur, sa date, son objet
ou sa référence. `x`, `portail officiel`, `document officiel` et `à confirmer`
sont refusés.

Pour le dépôt, sont admis les URL précises, identifiants formels, numéros de
dossier qualifiés, courriels identifiables ou traces datées assez descriptives.
`xxxxxx`, `accusé`, `référence de dépôt` et les valeurs génériques sont refusés.

Ces contrôles portent sur la forme et la traçabilité déclarée. Ils
n’authentifient ni la source, ni l’accusé, ni leur rattachement au dossier.

### Reprise, changement de jour et import

La date civile éditable est séparée de la date locale capturée pour l’analyse.
Elle est rafraîchie lors du retour de focus, de `pageshow` et lorsque l’onglet
redevient visible. Une analyse du 26 reste ancrée au 26 ; le 27 peut toutefois
être saisi avant la nouvelle analyse, laquelle capture ensuite son propre
instant.

La normalisation du registre central est calculée avant d’appliquer un brouillon
importé. Lorsqu’elle remplace par exemple `registered` par `not-applicable` et
vide une référence hors périmètre, l’interface annonce la correction et marque
le brouillon comme modifié/non exporté. Un import déjà normalisé ne crée ni
boucle ni faux état sale.

Le brouillon courant est `site-aid-draft-r29-2026-07-26`. R28 est migré
explicitement sans perte de ses faits ni de son suivi ; les références sont
revérifiées sous le contrat R29 et le brouillon doit être réexporté.

### Date de la circulaire française

La page visible distingue désormais les deux mentions du document officiel :
**date de signature 3 mars 2026** et **en-tête « Paris, le 4 mars 2026 »**.
Cette précision ne modifie ni le plafond pêche, ni les dates d’entrée en vigueur
du registre, ni la règle moteur.

## Validation locale R29 observée

| Contrôle                                           | Résultat                                                                                                                            |
| -------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Six suites métier, interface, brouillon et qualité | **1 312/1 312 — PASS**                                                                                                              |
| Catalogue, langue, sitemap et indexation           | **62/62 — PASS**                                                                                                                    |
| TypeScript                                         | **PASS**                                                                                                                            |
| ESLint ciblé                                       | **PASS**                                                                                                                            |
| Prettier ciblé                                     | **PASS**                                                                                                                            |
| `git diff --check`                                 | **PASS**                                                                                                                            |
| `check:seo` global                                 | **491/492** ; seul échec hors périmètre : empreinte historique de `src/lib/guides.ts` pour `prioriser-fonctionnalites-mvp-saas`     |
| Build Next.js direct                               | **PASS — 159 pages statiques**                                                                                                      |
| Artefact local servi                               | **9 925 mots visibles, 50 minutes**                                                                                                 |
| Vérificateur d’artefact                            | Aucun écart sur ce guide ; deux échecs globaux hors périmètre sur `crm-sur-mesure-ou-hubspot` et `seo-local-pme`                    |
| Gel commun R29                                     | **Produit dans `docs/research/manifests/aides-creation-site-internet-p3-2026-07-26-r28.sha256` sur le corpus final de 88 fichiers** |
| Deux nouveaux audits froids R29                    | **Non réalisés — aucune note, aucun GO, aucune ouverture de P4**                                                                    |

## Limites du présent rapport

Cette consolidation prouve les comportements couverts et la compilation locale.
Elle ne vaut ni audit froid R29, ni note, ni GO P4, ni BAT navigateur, ni
commit, ni publication, ni déploiement, ni traitement réel du sitemap, ni
indexation réelle, ni classement Google.

Le prochain état probatoire exige, dans cet ordre :

1. faire contrôler le même gel R29 par deux auditeurs indépendants en lecture
   seule ;
2. obtenir au moins 92/100 sur chaque axe, sans P0 ni P1 ;
3. ouvrir seulement alors le BAT P4 en navigateur réel.
