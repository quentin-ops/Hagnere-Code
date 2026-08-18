# Reprise P3 R22 → R23 — `aides-creation-site-internet`

Date de consolidation : 26 juillet 2026  
Responsable : orchestrateur `/root`

## Statut exécutif

**R22 : double NO-GO P4. R23 : candidat validé localement, en attente de gel,
sans note ni GO.**

Le snapshot R22 a été gelé par le manifeste
`docs/research/manifests/aides-creation-site-internet-p3-2026-07-26-r21.sha256`.
Il contient **72 fichiers** et porte le SHA-256
`2c436d330340c5bc1b9964f2fefa9b6c0d1b0d37ee0b38fe25adbe4cdaa9b1e8`.
Les deux audits froids ont contrôlé **72/72 fichiers au début et à la fin**,
sans écriture.

| Axe froid R22                               |   Note | Sévérités                | Verdict      |
| ------------------------------------------- | -----: | ------------------------ | ------------ |
| Faits, droit, finance et moteur décisionnel | 75/100 | P0 : 0 ; P1 : 4 ; P2 : 2 | **NO-GO P4** |
| Expérience, pédagogie et accessibilité      | 80/100 | P0 : 0 ; P1 : 3 ; P2 : 3 | **NO-GO P4** |

Ces notes appartiennent à R22. Elles ne sont ni une note de R23, ni une preuve
de correction.

## Ce que les audits ont confirmé

- Les montants, plafonds, exemples financiers, dates juridiques d’octroi et
  principales sources françaises sont cohérents.
- Les dates du registre français sont correctement bornées : 1er janvier 2026
  pour général, SIEG et pêche-aquaculture ; 1er janvier 2027 pour agriculture.
- Transmission des données, publication et disponibilité publique sont
  distinctes ; l’outil ne calcule pas les jours fériés et n’authentifie pas le
  registre.
- Le contenu dépasse les guides concurrents ordinaires sur la trésorerie TTC,
  la TVA, l’ordre des actes, la qualification du devis, le coût d’attente, le
  cumul, les obligations après attribution et les objections.
- Les **1 046 tests** R22 ciblés réussissaient, mais ne couvraient pas les
  contre-exemples qui ont provoqué le NO-GO.

## Défauts R22 reproduits

### Factuel, juridique et financier

1. **R23-F-P1-01 — interdiction SIEG amputée par trois ans.** Le moteur
   réutilisait la fenêtre du plafond pour l’article 5(2) du règlement
   `2023/2832`. Une compensation identique située un jour au-delà de trois ans
   pouvait laisser sortir `notified-usable`.
2. **R23-F-P1-02 — paraphrase du même SIEG.** Deux descriptions
   sémantiquement équivalentes mais lexicalement éloignées contournaient le
   rapprochement.
3. **R23-F-P1-03 — contradictions littérales fragiles.** « Deuxième
   compensation versée » pouvait coexister avec un statut négatif, tandis que
   « aucune fusion, mais une acquisition » et un acte écrit précédé d’une
   préparation orale produisaient des faux positifs.
4. **R23-F-P1-04 — pays mal définissable.** « État membre » ne précisait pas
   celui de l’autorité d’octroi. Le siège du bénéficiaire pouvait donc être
   saisi et modifier registre, regroupement ou plafond pêche.
5. **R23-F-P2-01 — vingt jours trop largement attribués au décret.** Les
   articles 6 européens et la portée propre des articles 2-3 du décret devaient
   être distingués.
6. **R23-F-P2-02 — référence publique ambiguë.** L’interface pouvait laisser
   croire que l’identifiant unique interne non publié était requis.

### Expérience, pédagogie et accessibilité

1. **R23-UX-P1-01 — erreur locale invisible.** Le résumé disparaissait après
   navigation et les messages au champ restaient uniquement `sr-only`.
2. **R23-UX-P1-02 — revue incomplète.** Quatre cartes partielles et des codes
   internes ne permettaient pas de vérifier les hypothèses d’un dossier de
   cinquante-quatre champs ou davantage.
3. **R23-UX-P1-03 — méga-étape.** Vingt-sept contrôles restaient réunis dans
   une même étape ; la règle de minimis et son exemple normal arrivaient après
   le dossier.
4. **R23-UX-P2-01 — prédiagnostic agrégé.** Implantation, activité, statut,
   taille, dépenses, calendrier, obligations et cumul étaient comprimés dans
   cinq réponses indivisibles.
5. **R23-UX-P2-02 — acronymes précoces.** ESB et SIEG précédaient leur
   développement.
6. **R23-UX-P2-03 — recherche difficile à maintenir.** La matrice active était
   enfouie dans un historique de plus de 1 800 lignes.

## Contrat correctif R23

### Moteur et droit

- séparer le plafond SIEG triennal de l’interdiction de toute autre
  compensation concernant le même service ;
- ajouter pour chaque ligne SIEG antérieure comparable une relation structurée
  au service courant et une preuve de distinction ;
- ne jamais déduire « distinct » d’une différence lexicale ;
- corriger les trois phrases adversariales sans faire du texte libre une source
  de statut ;
- définir partout l’État membre comme celui de l’autorité d’octroi ;
- borner les sources du délai de vingt jours et demander seulement une preuve
  publique ou une attestation identifiable.

### Parcours et pédagogie

- remplacer les quatre étapes de saisie par des micro-étapes métier ;
- afficher l’erreur exacte sous chaque contrôle, son état visuel, le nombre
  d’erreurs de l’étape et le retour vers la revue ;
- produire une vraie page « Vérifier vos réponses » en français humain, avec
  toutes les données décisionnelles et des actions de modification ciblées ;
- présenter la règle de minimis et un exemple normal avant la branche avancée ;
- développer équivalent-subvention brut et service d’intérêt économique
  général avant leurs acronymes ;
- désagréger le prédiagnostic et ses prochaines actions ;
- isoler la preuve courante dans
  `docs/research/aides-creation-site-internet-matrice-sources-courantes-2026-07-26.md`.

## Benchmark mondial retenu

| Référence                                                                                                                                                                                                                                                                                                                                | Exigence reprise dans R23                                                                   | Limite                                                   |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| [W3C — formulaires multipages](https://www.w3.org/WAI/tutorials/forms/multi-page/) et [USWDS — progression](https://designsystem.digital.gov/patterns/complete-a-complex-form/progress-easily/)                                                                                                                                          | Micro-étapes, étape courante, précédent/suivant et reprise explicite.                       | Aucun composant étranger ne vaut conformité automatique. |
| [W3C — notifications](https://www.w3.org/WAI/tutorials/forms/notifications/), [GOV.UK — validation](https://design-system.service.gov.uk/patterns/validation/) et [NHS — error summary](https://service-manual.nhs.uk/design-system/components/error-summary)                                                                            | Résumé global, même erreur visible près du champ, focus et état invalide.                   | La P4 en navigateur réel reste nécessaire.               |
| [GOV.UK — Check answers](https://design-system.service.gov.uk/patterns/check-answers/)                                                                                                                                                                                                                                                   | Revue lisible, exhaustive sur les déterminants et actions « Modifier ».                     | Le dossier local ne soumet rien à une administration.    |
| [Canada — Business Benefits Finder](https://innovation.ised-isde.canada.ca/s/?language=en_CA), [France Num](https://www.francenum.gouv.fr/aides-financieres/trouver-une-aide-financiere), [GOV.UK](https://www.gov.uk/business-finance-support?types_of_support%5B%5D=grant) et [Australie](https://business.gov.au/grants-and-programs) | Critères territoriaux, profil, secteur, dépenses et soutien séparés avant personnalisation. | R23 ne recherche ni n’attribue un programme réel.        |

## Sources primaires du correctif factuel

- [règlement général (UE) 2023/2831](https://eur-lex.europa.eu/eli/reg/2023/2831/oj/fra) ;
- [règlement SIEG (UE) 2023/2832](https://eur-lex.europa.eu/eli/reg/2023/2832/oj/fra), notamment considérant 9, article 3 et article 5, paragraphe 2 ;
- [règlement agricole consolidé](https://eur-lex.europa.eu/eli/reg/2013/1408/2024-12-16/fra) ;
- [règlement pêche consolidé](https://eur-lex.europa.eu/eli/reg/2014/717/2023-10-25/fra) ;
- [décret n° 2025-1361](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000053177293) ;
- [circulaire du Premier ministre](https://agriculture.gouv.fr/telecharger/153667), signée le 3 mars 2026 et datée du 4 mars dans son en-tête ;
- [registre public français](https://data.economie.gouv.fr/explore/assets/aides_minimis/).

## Préflight officiel et corrections complémentaires

Un contrôle documentaire en lecture seule, distinct des deux futurs audits
froids, a relevé **0 P0, 2 P1 et 2 P2**. Les quatre écarts ont été corrigés
avant le gel :

- l’interdiction de toute autre compensation du même SIEG est explicitement
  indépendante de la fenêtre de trois ans du plafond ;
- le taux ARCE de 60 % est borné aux droits ouverts après une fin de contrat à
  compter du 1er juillet 2023, hors intermittents des annexes 8 et 10, avec la
  déduction de 3 % et une confirmation France Travail pour les situations
  antérieures ou particulières ;
- l’exception CléA est rétablie dans la règle CPF de 1 500 € applicable au
  Répertoire spécifique ;
- la matrice distingue désormais les obligations européennes de registre et de
  délai des règlements général, SIEG et agricole de la condition propre au
  règlement pêche et de la transmission française organisée par le décret.

Ce préflight ne donne ni score R23 ni GO P4.

## Implémentation R23 observée

- Le moteur porte `site-aid-decision-r23-2026-07-26`. L’inventaire de
  l’article 5(2) est séparé du plafond triennal ; chaque ligne SIEG comparable
  déclare sa relation au service courant et sa preuve.
- Les contradictions littérales ciblées sont couvertes sans transformer le
  texte libre en décision juridique. Le pays est défini comme celui de
  l’autorité d’octroi. Le registre accepte une URL publique, un `recordid`
  public ou une attestation identifiable, jamais le seul identifiant interne
  non publié.
- Le dossier comporte sept micro-étapes métier puis une revue exhaustive. Un
  seul panneau est monté ; les erreurs sont visibles près du contrôle, comptées
  par étape et reliées à la revue.
- Le prédiagnostic sépare quatorze critères. Le brouillon strictement versionné
  `site-aid-draft-r23-2026-07-26` conserve les huit étapes et les nouveaux
  champs SIEG.
- La règle de minimis et l’exemple normal précèdent toute interface
  interactive. Les acronymes sont développés avant leur emploi avancé.
- Le registre éditorial annonce désormais **40 minutes** pour **7 958 mots
  visibles** mesurés dans l’artefact, à 200 mots par minute.

## Validation locale avant gel

| Contrôle                                                     | Résultat                                                                                                                                      |
| ------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Moteur, dossier, brouillon, prédiagnostic et contrat qualité | **1 075/1 075 tests**                                                                                                                         |
| Catalogue, langue humaine, sitemap et indexation             | **62/62 tests**                                                                                                                               |
| TypeScript                                                   | **réussi**                                                                                                                                    |
| ESLint ciblé                                                 | **réussi**                                                                                                                                    |
| Prettier et contrôle des espaces                             | **réussis**                                                                                                                                   |
| Build Next.js                                                | **réussi**, 159 pages statiques générées                                                                                                      |
| Route construite du guide                                    | titre, description, canonique et H1 présents ; règle et exemple avant le prédiagnostic ; un seul panneau SSR et un seul `aria-current="step"` |
| Artefact SEO du guide                                        | **réussi** à 7 958 mots et 40 minutes                                                                                                         |

Le vérificateur global d’artefacts conserve deux alertes de temps de lecture
hors périmètre R23 : `crm-sur-mesure-ou-hubspot` et `seo-local-pme`. Elles ne
sont ni masquées ni corrigées dans ce lot.

### Empreintes centrales avant manifeste

| Fichier                                                                              | SHA-256                                                            |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `src/app/guides/aides-creation-site-internet/page.tsx`                               | `cb0eefbc5c98953db16dd5d3f461d61b3a5452fc2b76bca0bcf7c47af0576f7e` |
| `src/components/guides/SiteAidDecisionDossier.tsx`                                   | `fa33057a0896d01b1f0ef753c3b617661699475cd4f634f678a7314a4a2f86a3` |
| `src/components/guides/SiteAidPreDiagnosis.tsx`                                      | `2653a4f13d2ff1c8f56d7c43b0b24c9ffc1884dc0faad0edea0cf46f7f66b06b` |
| `src/lib/site-aid-decision.ts`                                                       | `8fe03dfd09f12ea156c93105c001ce5aaa6b9585112e1c82202efcb234e5c51d` |
| `src/lib/site-aid-draft.ts`                                                          | `4cf6897c55504f24270a33dd381531c771d10515db028cf4a361383f213f63bb` |
| `src/lib/guides.ts`                                                                  | `e46baadb0de4fdeba2f3c4c727cff056ef8d5f31ab08e3af5c4027eece7cb7af` |
| `docs/research/aides-creation-site-internet-matrice-sources-courantes-2026-07-26.md` | `ac03e4c9b6d3d25eeb1232a8740688e288c0daabfc58ca78293a277575430e0c` |

## Porte suivante

Les fichiers R23 et leurs preuves doivent maintenant être figés dans un nouveau
manifeste. R23 reste **CANDIDAT, sans note ni GO** jusqu’à deux nouveaux audits
froids indépendants et favorables sur exactement ce gel. La P4 réelle ne sera
alors autorisée que si les deux axes donnent leur GO.

Ce rapport ne prouve ni commit, ni publication, ni déploiement, ni route servie
en production, ni sitemap traité, ni indexation, ni classement Google.
