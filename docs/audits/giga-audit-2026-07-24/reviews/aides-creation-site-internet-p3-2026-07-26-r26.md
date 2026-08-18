# Audits froids R25 et R26, contrat correctif R27 — `aides-creation-site-internet`

Date : 26 juillet 2026  
Responsable de consolidation : orchestrateur `/root`

## Verdict exécutif

**R25 : double NO-GO P4 historique. R26 : gelé puis doublement contre-audité,
76/100 factuel et 83/100 UX — deux NO-GO P4. R27 : porte pré-gel corrigée et
rejouée indépendamment, validation locale consolidée confirmée et gel de 86
fichiers produit, sans note, sans GO et P4 non ouverte.**

Les deux auditeurs ont travaillé en lecture seule sur le même gel :

- manifeste :
  `docs/research/manifests/aides-creation-site-internet-p3-2026-07-26-r24.sha256` ;
- corpus : **82 fichiers** ;
- intégrité au début et à la fin des deux audits : **82/82** ;
- SHA-256 du manifeste :
  `1215a603609d4256035000dd166c85a12f5902d9a036631a4d5bb169d61f7469`.

| Axe froid R25                               |   Note | Sévérités                | Verdict      |
| ------------------------------------------- | -----: | ------------------------ | ------------ |
| Faits, droit, finance et moteur décisionnel | 82/100 | P0 : 0 ; P1 : 3 ; P2 : 3 | **NO-GO P4** |
| Expérience, pédagogie et accessibilité      | 84/100 | P0 : 0 ; P1 : 1 ; P2 : 5 | **NO-GO P4** |

Aucun BAT navigateur n’a été lancé : les P1 ferment cette porte.

Le gel R26 ultérieur repose sur :

- manifeste :
  `docs/research/manifests/aides-creation-site-internet-p3-2026-07-26-r25.sha256` ;
- corpus : **84 fichiers** ;
- intégrité au début et à la fin des deux audits : **84/84** ;
- SHA-256 du manifeste :
  `7952d793b929d68f7e6e2e089fc5aba1ddd818781785f2d40b02a4ded98b37a7`.

| Axe froid R26                               |   Note | Sévérités                | Verdict      |
| ------------------------------------------- | -----: | ------------------------ | ------------ |
| Faits, droit, finance et moteur décisionnel | 76/100 | P0 : 0 ; P1 : 4 ; P2 : 1 | **NO-GO P4** |
| Expérience, pédagogie et accessibilité      | 83/100 | P0 : 0 ; P1 : 2 ; P2 : 3 | **NO-GO P4** |

Leur union dédupliquée est de **6 P1 et 4 P2**. Le rapport R27 conserve les
scénarios adversariaux et les critères de fermeture correspondants.

## P1 factuels à fermer dans R26

### P1 — la fenêtre pêche peut produire un faux rejet

Le règlement `717/2014` retient l’exercice fiscal courant de l’entreprise et
les deux précédents. Le moteur R25 applique une fenêtre calendaire glissante de
trois ans, puis utilise ce total prudent pour produire `excluded`.

Scénario adverse confirmé : aide française de 20 000 € au 26 juillet 2026 et
aide de 25 000 € au 1er août 2023, avec exercices calendaires. Les exercices
2024–2026 retiennent 20 000 € ; le moteur R25 retient 45 000 € et écarte à
tort la piste.

Contrat R26 :

- versionner le début de l’exercice fiscal contenant l’ancre du contrôle ;
- vérifier que ce début contient bien l’ancre ;
- calculer l’exercice courant et les deux précédents ;
- sans période exacte, ne jamais produire une exclusion qui dépend de la
  tranche incertaine ;
- propager cette distinction aux contrôles pêche, inter-régimes et
  agriculture-pêche.

Source primaire :
[règlement (UE) 717/2014 consolidé, article 3](https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX%3A02014R0717-20231025).

### P1 — une preuve SIEG contradictoire peut encore devenir favorable

Une pièce structurée peut identifier l’autorité, la référence, la date et les
deux services tout en affirmant qu’ils sont le même SIEG. Avec un statut
`NON`, R25 ne contrôle que la forme et peut encore produire
`notified-usable`.

Contrat R26 :

- polarité bornée de la relation : même, distincte ou ambiguë ;
- `NON` avec une preuve affirmant le même service : donnée invalide ;
- preuve ambiguë ou sans distinction affirmative : dossier incomplet ;
- seule une distinction affirmative structurée peut lever le contrôle, sans
  jamais authentifier la pièce ou qualifier elle-même le droit.

Source primaire :
[règlement (UE) 2023/2832, article 5, paragraphe 2](https://eur-lex.europa.eu/eli/reg/2023/2832/oj/fra).

### P1 — l’heure de clôture n’est pas comparée le jour même

R25 conserve l’heure et le fuseau, mais compare seulement les dates. Une
analyse réalisée après 09:00 le jour d’une clôture à 09:00 `Europe/Paris` peut
donc annoncer qu’aucun champ n’est incomplet.

Contrat R26 :

- versionner l’instant absolu de vérification ;
- convertir la date, l’heure et le fuseau IANA de clôture en instant
  comparable ;
- tester avant, exactement à l’heure et après ;
- suspendre une heure locale inexistante ou ambiguë lors d’un changement
  d’heure, plutôt que d’inventer son sens ;
- conserver l’instant évalué dans la revue et les exports.

## P1 expérience à fermer dans R26

### P1 — le prédiagnostic peut contredire un verdict favorable

Les réponses transférées créent bien des anomalies déclaratives, mais le titre,
le style, l’annonce et le TXT utilisent encore directement le résultat du
moteur. Le résumé « Corrections requises » ne rend pas ces anomalies. Un
`NON — BLOQUEUR DÉCLARATIF` peut ainsi coexister avec un verdict favorable.

Contrat R26 :

- construire un état effectif combinant moteur, candidature et
  prédiagnostic ;
- un transfert contenant `no` ou `confirm` rend le dossier incomplet, sans
  transformer un `no` déclaratif en exclusion juridique ;
- rendre chaque anomalie dans le résumé focalisable ;
- utiliser le même état dans le titre, le style, l’annonce, le TXT et
  l’impression ;
- quatorze réponses documentées ne bloquent pas ;
- l’absence de transfert reste facultative et neutre ;
- les migrations R23/R24 restent non transférées et n’inventent aucun fait.

## P2 factuels retenus dans R26

1. **Précontrôle prospectif avant notification.** Conserver l’aide budgétée à
   0 €, mais rapprocher séparément son montant ou ESB prospectif documenté des
   aides historiques. Un dépassement potentiel avant octroi doit être signalé
   ou suspendu ; aucun montant absent n’est inventé.
2. **Aide de saisie SIEG transfrontalière.** Supprimer la consigne qui limite à
   tort le rapprochement au même État membre. L’article 5, paragraphe 2, porte
   sur le même service, tandis que les plafonds restent calculés par État
   membre.
3. **URL `recordid` contaminée.** Refuser toute URL qui combine un localisateur
   valide avec un second paramètre dont le nom ou la valeur porte
   `recordid`, même vide, faux ou mal formé.

## P2 expérience retenus dans R26

1. **Position de reprise.** Une navigation après export modifie
   `activeStepId` ; elle doit rendre le brouillon non exporté, réactiver
   `beforeunload` et être conservée au prochain JSON.
2. **Matrice compétitive conditionnelle.** Les critères sont initialement
   vides et visibles uniquement pour une sélection. Une aide de droit affiche
   « Sans objet — aide de droit » dans la revue et les exports ; les valeurs
   masquées sont préservées si le mode change.
3. **Pièce non applicable.** Responsable, format, signature et échéance sont
   masqués ou désactivés et rendus « Sans objet » dans la revue et les exports.
   Les valeurs masquées restent récupérables si le statut change.
4. **Statut de clôture.** Représenter séparément `date exacte`,
   `guichet permanent` et `date non publiée`. Le permanent exige une référence
   officielle et sa date de vérification ; la date non publiée reste une
   inconnue bloquante.
5. **Prédiagnostic non transféré.** Avertir avant fermeture dès la première
   modification et jusqu’au transfert réussi, annoncer une seule fois l’état
   non transféré, puis corriger la phrase cassée du résumé.

## Porte R25 → R26 — historique

Cette porte a été exécutée : R26 a fermé l’union R25, réussi ses validations,
été figé dans un manifeste de 84 fichiers puis relu par deux auditeurs. Les deux
NO-GO R26 ci-dessus ont maintenu P4 fermée et ouvert le contrat R27.

Ce rapport ne prouve ni commit, ni publication, ni déploiement, ni route servie
en production, ni sitemap traité, ni indexation, ni classement Google.

## Implémentation R26 observée — snapshot historique

### Droit, calculs et traçabilité

- Le moteur porte `site-aid-decision-r26-2026-07-26`.
- La pêche utilise le début déclaré de l’exercice fiscal qui contient l’ancre
  et les deux exercices précédents. Sans borne exacte, le moteur calcule un
  sous-total assuré et une tranche incertaine ; cette dernière ne déclenche
  jamais seule une exclusion, y compris dans les cumuls inter-régimes.
- La preuve de relation SIEG possède une polarité bornée. Un statut `NON`
  accompagné d’une pièce affirmant « même service » est invalide ; une
  conclusion mixte ou sans distinction affirmative reste incomplète.
- Toute URL officielle qui porte un second paramètre dont le nom ou la valeur
  contient `recordid` est refusée comme ambiguë.
- Avant notification, une subvention peut être simulée avec son montant brut
  théorique non acquis. Un prêt, une garantie ou un autre instrument peut
  utiliser un montant brut ou ESB prospectif accompagné d’une preuve
  déclarative ; sans cette paire, aucun ESB n’est inventé. Dans tous les cas,
  le budget reste à 0 €, le scénario ne vaut pas octroi et un dépassement
  potentiel suspend sans produire une exclusion juridique.

### Expérience, candidature et reprise

- Le brouillon porte `site-aid-draft-r26-2026-07-26`. Les migrations R23, R24
  et R25 restent strictes, n’inventent aucun prédiagnostic et initialisent les
  nouveaux champs à vide.
- Le résultat visible combine moteur, préparation de candidature et
  prédiagnostic. Une candidature ou une réponse transférée incomplète rend le
  titre, le style, le résumé, l’annonce, le TXT et l’impression globalement
  incomplets ; le résultat du moteur reste affiché comme intermédiaire.
- `activeStepId` fait partie du brouillon exporté. Une navigation postérieure à
  l’export rend à nouveau le JSON non aligné et réactive l’avertissement
  `beforeunload`.
- La candidature distingue date exacte, guichet permanent et date non publiée.
  Une date exacte peut être comparée à l’instant absolu capturé lors de
  l’analyse ; le fuseau IANA est conservé, et une heure locale ambiguë ou
  inexistante suspend le dossier.
- Une aide de droit ignore entièrement les critères compétitifs masqués, les
  rend « Sans objet — aide de droit » dans la revue et les exports, puis
  restaure leurs valeurs si le mode repasse à la sélection.
- Une pièce non applicable exige seulement son nom et sa justification. Ses
  responsable, format, signature et échéance sont masqués et exportés « Sans
  objet », sans détruire les valeurs récupérables.
- Le prédiagnostic avertit avant fermeture dès sa première modification et
  jusqu’au transfert réussi. Le dossier conserve les quatorze réponses ; `non`
  et `à confirmer` suspendent sans devenir des exclusions juridiques.

## Validation locale R26 avant gel

| Contrôle                                               | Résultat                                                                                                                                                        |
| ------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Moteur décisionnel                                     | **1 027/1 027 tests**                                                                                                                                           |
| Dossier, brouillon, prédiagnostic et contrat éditorial | **165/165 tests**                                                                                                                                               |
| Total ciblé                                            | **1 192/1 192 tests**                                                                                                                                           |
| Catalogue, langue humaine, sitemap et indexation       | **62/62 tests**                                                                                                                                                 |
| Catalogue et contrat qualité                           | **52/52 tests**                                                                                                                                                 |
| TypeScript, ESLint ciblé, Prettier et contrôle du diff | **réussis**                                                                                                                                                     |
| Build Next.js direct                                   | **réussi**, 159 pages statiques générées                                                                                                                        |
| Artefact du guide                                      | titre, description, canonique, H1, dix sections numérotées, FAQ, neuf étapes, un panneau monté, un `aria-current="step"`, **9 372 mots visibles et 47 minutes** |
| Vérificateur SEO global                                | guide R26 réussi ; deux écarts de temps de lecture hors périmètre sur `crm-sur-mesure-ou-hubspot` et `seo-local-pme`                                            |
| Prébuild global                                        | **491/492 tests** ; seul le hash historique de `src/lib/guides.ts` attendu par `prioriser-fonctionnalites-mvp-saas` échoue, hors périmètre R26                  |

Le build direct prouve l’intégration locale et la génération statique de la
route. Il ne prouve ni service en production, ni déploiement, ni indexation.

## Gel commun R26

R26 est figé dans
`docs/research/manifests/aides-creation-site-internet-p3-2026-07-26-r25.sha256`.
Le manifeste couvre **84 fichiers** et porte le SHA-256
`7952d793b929d68f7e6e2e089fc5aba1ddd818781785f2d40b02a4ded98b37a7`.
Les deux auditeurs l’ont vérifié **84/84 au début et à la fin**. Le contrôle
factuel a rendu **76/100 — NO-GO P4**
(`P0 : 0 ; P1 : 4 ; P2 : 1`) et le contrôle expérience
**83/100 — NO-GO P4** (`P0 : 0 ; P1 : 2 ; P2 : 3`).

## Contrat correctif R27

Le détail courant se trouve dans
[`aides-creation-site-internet-p3-2026-07-26-r27.md`](aides-creation-site-internet-p3-2026-07-26-r27.md).
Il conserve les **6 P1 et 4 P2 dédupliqués**, leurs scénarios adversariaux et les
critères de fermeture : priorité `invalid`/`excluded`, fraîcheur du transfert,
quartet pêche exact, seuil français 30 000/40 000 €, négations SIEG, fuseau
officiel même sans heure, territorialité structurée, quatorze liens éditables,
comptage réel des mots et date de vérification non future.

R27 porte `site-aid-decision-r27-2026-07-26`,
`site-aid-application-r27-2026-07-26` et
`site-aid-draft-r27-2026-07-26`. La migration R26 conserve sa borne fiscale
pêche courante et sa paire prospective, initialise les nouvelles bornes et la
qualification territoriale sans fait favorable, et ne restaure aucun verdict.

Les références étrangères restent des méthodes de progression, de reprise et
de vérification seulement. Aucun programme, montant, critère ou droit étranger
n’est transposé ; les règles pêche, SIEG et territoriales viennent du corpus
français et européen applicable.

La porte pré-gel R27 a été arrêtée par deux contournements SIEG : une négation
avec pronom, auxiliaire et participe pouvait laisser favorable un mandat
structuré `OUI`, tandis qu’un adverbe intercalé pouvait laisser favorable une
relation structurée `NON`. Les expressions régulières bornées ont été corrigées,
dix variantes adversariales ajoutées et le moteur passe **1 073/1 073**.

Le rejeu indépendant passe **24/24 moteur et 2/2 rapport/TXT**. La validation
consolidée R27 est confirmée :

- cinq suites fonctionnelles : **1 209/1 209** ;
- contrat qualité : **43/43** ;
- total ciblé des six suites : **1 252/1 252** ;
- catalogue, langue, sitemap et indexation : **62/62** ;
- catalogue + qualité : **53/53** ;
- TypeScript, ESLint ciblé, Prettier et `git diff --check` : verts ;
- build Next.js direct : **réussi, 159 pages statiques** ;
- artefact local servi : **9 736 mots visibles, 49 minutes** ;
- vérificateur d’artefact : aucun écart sur ce guide, mais rouge global à cause
  des temps de lecture hors périmètre de `crm-sur-mesure-ou-hubspot` et
  `seo-local-pme` ;
- `check:seo` : **491/492** ; seul échec hors périmètre, l’ancien hash de
  `src/lib/guides.ts` attendu par `editorial-governance` pour
  `prioriser-fonctionnalites-mvp-saas`.

R27 est **VALIDÉ LOCALEMENT ET GELÉ** dans
`docs/research/manifests/aides-creation-site-internet-p3-2026-07-26-r26.sha256`,
qui couvre **86 fichiers**. Il reste sans note ni GO ; P4 n’est pas ouverte. Ce
rapport
ne revendique ni commit, ni publication, ni déploiement, ni route de production,
ni sitemap réellement traité, ni indexation réelle, ni classement Google.
