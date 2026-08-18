# Audits froids R24 et contrat correctif R25 — `aides-creation-site-internet`

Date : 26 juillet 2026  
Responsable de consolidation : orchestrateur `/root`

## Verdict exécutif

**R24 : double NO-GO P4. R25 : corrigé, validé localement et gelé pour deux
nouveaux audits froids, sans note ni GO.**

Les deux auditeurs ont travaillé en lecture seule sur le même gel :

- manifeste :
  `docs/research/manifests/aides-creation-site-internet-p3-2026-07-26-r23.sha256` ;
- corpus : **78 fichiers** ;
- intégrité au début et à la fin des deux audits : **78/78** ;
- SHA-256 du manifeste :
  `ce9b10c484ac8035cae56a3893b6770d016173a98a488718be6f98a6c5c4bf08`.

| Axe froid R24                               |   Note | Sévérités                | Verdict      |
| ------------------------------------------- | -----: | ------------------------ | ------------ |
| Faits, droit, finance et moteur décisionnel | 84/100 | P0 : 0 ; P1 : 3 ; P2 : 1 | **NO-GO P4** |
| Expérience, pédagogie et accessibilité      | 84/100 | P0 : 0 ; P1 : 2 ; P2 : 2 | **NO-GO P4** |

Aucun BAT navigateur n’a été lancé : les P1 ferment cette porte.

## Écarts factuels du gel R24 — historiques

### P1 — dépassement exact de minimis encore seulement averti

Le moteur sait calculer un dépassement des plafonds général, SIEG, agricole ou
pêche, mais peut encore conserver un résultat favorable lorsque toutes les
autres données sont complètes. Une nouvelle aide qui fait dépasser le plafond
ne bénéficie pourtant pas du règlement déclaré.

Contrat R25 :

- un dépassement exact impliquant l’aide courante bloque toute conclusion
  favorable sous cette base ;
- le résultat n’invente jamais un autre fondement juridique ;
- un simple repère combiné explicitement dépourvu de plafond autonome reste un
  avertissement ;
- les seuils et leurs frontières sont couverts pour les quatre régimes.

Source primaire :
[règlement (UE) 2023/2831, article 3](https://eur-lex.europa.eu/eli/reg/2023/2831/oj/fra).

### P1 — `recordid` public trop permissif

Le contrat R24 accepte des pseudo-identifiants alphanumériques courts. Une
chaîne inventée peut donc satisfaire la forme attendue.

Contrat R25 :

- le `recordid` autonome ou extrait d’une URL reconnue respecte le format réel
  du portail : quarante caractères hexadécimaux ;
- mot arbitraire, identifiant tronqué, faux paramètre, pseudo-identifiant
  éditorial et URL générique sont refusés ;
- l’attestation structurée de l’autorité reste une branche distincte ;
- le résultat distingue explicitement forme reconnue et existence non
  authentifiée : l’outil local ne consulte pas le registre.

Source officielle :
[registre public des aides de minimis](https://data.economie.gouv.fr/explore/assets/aides_minimis/).

### P1 — preuve SIEG contournable par une page officielle générique

Une URL officielle reconnue suffit encore, à elle seule, comme preuve de
relation entre services. Une page d’accueil sans rapport avec le dossier peut
donc contourner le contrôle.

Contrat R25 :

- exiger un acte, mandat, convention, décision, attestation ou réponse
  identifiable ;
- conserver autorité, référence, date et service concerné ;
- refuser les pages d’accueil et liens officiels sans relation probante ;
- ne jamais déduire l’identité ou la distinction de deux services à partir de
  leurs seuls libellés.

Source primaire :
[règlement (UE) 2023/2832, article 5, paragraphe 2](https://eur-lex.europa.eu/eli/reg/2023/2832/oj/fra).

## Écarts de parcours du gel R24 — historiques

### P1 — rupture entre prédiagnostic et dossier

Les quatorze réponses du prédiagnostic disparaissent au rechargement et ne sont
pas transférées au dossier. Le lecteur recommence donc son travail et peut
introduire des contradictions.

Contrat R25 :

- action explicite de transfert vers le dossier ;
- conservation des quatorze statuts dans l’état local, la revue et le JSON
  commun ;
- aucun statut déclaratif n’est transformé en fait juridique ou montant ;
- les réponses « non » restent des bloqueurs visibles ;
- le focus est déplacé vers le titre du dossier après transfert ;
- les brouillons R23 et R24 migrent sans fait inventé.

Référence :
[W3C, technique G221](https://www.w3.org/WAI/WCAG22/Techniques/general/G221).

### P1 — faux état de candidature prête

Deux contradictions peuvent encore laisser la préparation sans anomalie :

- une pièce « non applicable » ne possède pas la justification pourtant
  annoncée ;
- une clôture passée ou une pièce prévue après cette clôture n’est pas comparée
  à la date de vérification.

Contrat R25 :

- justification obligatoire pour chaque pièce non applicable, conservée dans
  tous les exports ;
- avant notification, clôture passée et échéance documentaire postérieure à la
  clôture bloquent l’état prêt ;
- les aides déjà notifiées ou versées conservent leur chronologie historique ;
- heure et fuseau sont conservés lorsque le règlement les précise.

Références :
[business.gov.au — grant readiness](https://business.gov.au/grants-and-programs/check-if-youre-ready-to-apply-for-a-grant),
[Commission européenne — procédure d’attribution](https://commission.europa.eu/funding-tenders/how-apply/award-procedure-and-contract-signature_en).

## Contrats P2 implémentés dans R25, à auditer

1. Ajouter une matrice répétable « critère publié → réponse du projet → preuve
   → responsable → limite de mots », ainsi que les livrables, résultats,
   calendrier et justification budgétaire. L’outil vérifie la complétude, pas
   la qualité substantielle de la réponse.
2. Prévenir nativement une fermeture ou un rechargement lorsque le brouillon a
   changé depuis le dernier export ou import, puis rendre l’état « modifications
   non exportées » et l’action JSON accessibles pendant le parcours.

## Porte suivante

R25 ferme localement ce registre, réussit les validations ciblées et globales
décrites ci-dessous, puis est figé dans un nouveau manifeste. Deux nouveaux
auditeurs indépendants doivent relire exactement ce gel. La P4 réelle ne sera
lancée qu’après deux GO avec une note d’au moins 92/100, aucun P0, aucun P1 et
aucune contradiction matérielle.

Ce rapport ne prouve ni commit, ni publication, ni déploiement, ni route servie
en production, ni sitemap traité, ni indexation, ni classement Google.

## Implémentation R25 observée

### Faits, droit et moteur

- Le moteur porte `site-aid-decision-r25-2026-07-26`.
- Un dépassement du plafond impliquant l’aide courante produit `excluded`.
  Chaque frontière est testée au plafond exact, qui reste dans la borne, puis
  un centime au-dessus : 300 000 €, 750 000 €, 50 000 € et 40 000 € selon le
  régime. Le repère arithmétique SIEG + autres régimes à 1,05 M€ reste un
  avertissement non juridique.
- Pour la pêche hors France, la tranche 30 000–40 000 € reste suspendue tant
  que la branche nationale n’est pas documentée ; au-delà de 40 000 €, le
  résultat est exclu.
- Le `recordid` autonome ou extrait d’une route officielle bornée respecte
  exactement quarante caractères hexadécimaux. Une forme reconnue n’authentifie
  ni l’existence du record, ni son rattachement à l’aide.
- L’attestation de l’autorité reste distincte et déclarative. Une relation SIEG
  exige type de pièce, autorité, référence structurée, date valide et identité
  des deux services ; une URL officielle générique est refusée.

### Parcours, candidature et reprise

- Le contrat `site-aid-prediagnosis-r25-2026-07-26` définit quatorze contrôles
  canoniques versionnés. Une action explicite les transfère localement vers le
  dossier, puis place le focus sur son titre. Aucun stockage réseau ou
  persistant n’est introduit.
- Statut, libellé canonique, preuve attendue et preuve déclarée apparaissent
  dans le dossier, la revue, le JSON, le TXT et l’impression. Un « non » bloque
  et un « à confirmer » suspend. Un statut « documenté » sans preuve est
  normalisé à « à confirmer » à la construction et refusé à l’import strict.
- Le brouillon R25 migre strictement R23 et R24 vers quatorze réponses
  « à confirmer » ; ordre, identifiants, libellés et preuves sont validés sans
  fait inventé.
- La date limite conserve heure et fuseau IANA. Avant notification, une clôture
  passée ou une échéance documentaire postérieure bloque la préparation ; une
  aide déjà notifiée ou reçue conserve son historique.
- Une pièce « non applicable » exige seulement son nom et sa justification.
  Les aides sur sélection ajoutent jusqu’à vingt-cinq lignes
  « critère → réponse → preuve → responsable → limite éventuelle », ainsi que
  livrables, résultats, calendrier et justification budgétaire. Une aide de
  droit n’hérite pas artificiellement de cette matrice.
- Un brouillon modifié depuis le dernier export ou import est annoncé à chaque
  étape avec l’action JSON et déclenche `beforeunload` avant perte potentielle.

## Validation locale avant gel

| Contrôle                                               | Résultat                                                                                                                                             |
| ------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Moteur décisionnel                                     | **988/988 tests**                                                                                                                                    |
| Interface, brouillon, prédiagnostic et qualité         | **154/154 tests**                                                                                                                                    |
| Total ciblé                                            | **1 142/1 142 tests**                                                                                                                                |
| Catalogue, langue humaine, sitemap et indexation       | **62/62 tests**                                                                                                                                      |
| Catalogue et qualité après temps de lecture            | **52/52 tests**                                                                                                                                      |
| TypeScript, ESLint ciblé, Prettier et contrôle du diff | **réussis**                                                                                                                                          |
| Build Next.js direct                                   | **réussi**, 159 pages statiques générées                                                                                                             |
| Artefact du guide                                      | titre, description, canonique, H1, dix sections, neuf étapes, transfert, un panneau, un `aria-current="step"`, **8 974 mots visibles et 45 minutes** |
| Vérificateur SEO global                                | guide R25 réussi ; deux écarts de temps de lecture hors périmètre sur `crm-sur-mesure-ou-hubspot` et `seo-local-pme`                                 |
| Prébuild global                                        | **491/492 tests** ; seul l’ancien hash de `src/lib/guides.ts` attendu par `prioriser-fonctionnalites-mvp-saas` échoue, hors périmètre R25            |

## Gel soumis aux nouveaux audits

Le corpus R25 est figé dans
`docs/research/manifests/aides-creation-site-internet-p3-2026-07-26-r24.sha256`.
Il couvre **82 fichiers** : les 78 chemins du gel R24, le manifeste R24, ce
rapport et les deux nouveaux fichiers du contrat de prédiagnostic.

Les deux auditeurs doivent vérifier les **82/82 empreintes au début et à la
fin**, rester en lecture seule et produire chacun une note indépendante. Le GO
P4 exige, sur les deux axes, au moins 92/100, aucun P0, aucun P1 et aucune
contradiction matérielle.

À ce stade, R25 ne reçoit **aucune note ni aucun GO**. Aucun navigateur réel n’a
encore été utilisé pour cette version.
