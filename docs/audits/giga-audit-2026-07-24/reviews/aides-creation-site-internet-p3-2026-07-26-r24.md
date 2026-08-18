# Candidat P3 R24 avant gel — `aides-creation-site-internet`

Date de consolidation : 26 juillet 2026  
Responsable : orchestrateur `/root`

## Statut exécutif

**R23 : double NO-GO P4. R24 : validé localement, sans note ni GO, en attente
de gel et de deux audits froids.**

Le gel R23 repose sur
`docs/research/manifests/aides-creation-site-internet-p3-2026-07-26-r22.sha256`.
Ses **75 fichiers** ont été vérifiés **75/75 au début et à la fin** par les deux
auditeurs indépendants ; SHA-256 :
`7fa73ecb41faec25359c3c0ad99585a69345c501f511049731f79a55ce4e1e5d`.

| Axe froid R23                               |   Note | Sévérités                | Verdict      |
| ------------------------------------------- | -----: | ------------------------ | ------------ |
| Faits, droit, finance et moteur décisionnel | 78/100 | P0 : 0 ; P1 : 4 ; P2 : 1 | **NO-GO P4** |
| Expérience, pédagogie et accessibilité      | 87/100 | P0 : 0 ; P1 : 1 ; P2 : 3 | **NO-GO P4** |

Ces notes restent propres au gel R23. R24 n’a aucune note avant ses futurs
audits froids.

## Fermeture candidate des cinq P1

### Article 5 §2 SIEG

- Le moteur compare une compensation du même service entre États membres pour
  l’aide courante et l’historique.
- Cette comparaison ne reprend ni la fenêtre ni la clé géographique du plafond
  triennal.
- `yes` bloque, `unknown` rend le dossier incomplet et `no` exige une preuve
  identifiable.

### Pêche et délai de vingt jours

- Les règlements général, SIEG et agricole conservent leur délai européen.
- Le règlement pêche `717/2014` ne reçoit plus ce délai par erreur.
- En France, le délai de transmission n’est rattaché qu’au décret `2025-1361`
  et aux organismes qu’il vise ; le registre reste la condition du plafond
  pêche de 40 000 €.

### Preuves SIEG

- Le mandat demande une nature d’acte, un objet SIEG identifiable et une
  référence structurée ou une autorité avec date.
- L’inventaire de compensation suit le même principe.
- Texte arbitraire, projet, brouillon ou preuve ambiguë ne produit plus de
  verdict favorable.

### Registre public

- Sont acceptés un `recordid` autonome, l’ancienne route officielle
  `/explore/dataset/aides_minimis/` avec ce `recordid`, la route actuelle
  `/explore/assets/aides_minimis/` avec ce `recordid`, ou une attestation
  structurée de l’autorité.
- Wikipédia, presse, réseau social, URL publique générique et page officielle
  sans identifiant sont refusés.
- L’outil ne suit pas les redirections, ne consulte pas le registre et
  n’authentifie aucune pièce.

### Préparation de candidature

- Le parcours compte **neuf étapes** : Profil, Devis, Critères, Droit,
  Versement, Trésorerie, Historique, Candidature, Vérifier.
- La candidature conserve mode d’attribution, objectifs, critères, canal,
  échéance, temps de préparation, relecteur, validation finale et une checklist
  bornée à cinquante pièces.
- Chaque pièce conserve statut, responsable, format, signature et échéance.
- Revue, JSON, TXT et impression reprennent ces informations. La migration R23
  vers R24 n’invente aucun fait.

## Fermeture candidate des quatre P2

1. Une modification depuis la revue ramène directement à la revue après une
   saisie valide.
2. Les cas restructuration, SIEG, agriculture et pêche sont annoncés au sommaire
   puis repliés ; la règle générale et son exemple restent visibles.
3. Le devis est présenté en cartes sur petit écran et en tableau desktop, sans
   largeur minimale ni défilement horizontal forcé.
4. La page distingue les seuils ACRE micro et hors micro 2026, puis l’absence de
   validation de trimestres de retraite de base avec l’ARCE.

Le premier artefact R24 affichait encore « étape 1 sur 8 » à « étape 7 sur 8 ».
Cette incohérence a été corrigée avant gel. Un contrat négatif interdit désormais
toute ancienne numérotation, et le second artefact affiche neuf étapes.

## Sources et benchmark actifs

- [règlement SIEG (UE) 2023/2832](https://eur-lex.europa.eu/eli/reg/2023/2832/oj/fra) ;
- [règlement pêche consolidé](https://eur-lex.europa.eu/eli/reg/2014/717/2023-10-25/fra) ;
- [décret n° 2025-1361](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000053177293) ;
- [registre public français](https://data.economie.gouv.fr/explore/assets/aides_minimis/) ;
- [Service Public — ACRE](https://entreprendre.service-public.gouv.fr/vosdroits/F11677) ;
- [Service Public — ARCE](https://www.service-public.gouv.fr/particuliers/vosdroits/F15252) ;
- [business.gov.au — Grant readiness](https://business.gov.au/grants-and-programs/check-if-youre-ready-to-apply-for-a-grant) ;
- [France Num — préparer une demande](https://www.francenum.gouv.fr/aides-financieres/guides-et-conseils-financiers/comment-obtenir-une-subvention-pour-la-numerisation) ;
- [GOV.UK — Check answers](https://design-system.service.gov.uk/patterns/check-answers/) ;
- [W3C — formulaires multipages](https://www.w3.org/WAI/tutorials/forms/multi-page/).

## Validation locale

| Contrôle                                                     | Résultat                                                                                                                                                        |
| ------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Moteur, dossier, brouillon, prédiagnostic et contrat qualité | **1 107/1 107 tests**                                                                                                                                           |
| Catalogue, langue humaine, sitemap et indexation             | **62/62 tests**                                                                                                                                                 |
| TypeScript                                                   | **réussi**                                                                                                                                                      |
| ESLint ciblé                                                 | **réussi**                                                                                                                                                      |
| Prettier et contrôle des espaces                             | **réussis**                                                                                                                                                     |
| Build Next.js direct                                         | **réussi**, 159 pages statiques générées                                                                                                                        |
| Route construite du guide                                    | titre, description, canonique, H1, dix sections, neuf étapes, un seul panneau et un seul `aria-current="step"`                                                  |
| Ordre construit                                              | règle générale → exemple normal → prédiagnostic → dossier                                                                                                       |
| Artefact SEO du guide                                        | **réussi**, 8 430 mots visibles et 42 minutes                                                                                                                   |
| Vérificateur SEO global                                      | guide R24 réussi ; deux alertes hors périmètre sur `crm-sur-mesure-ou-hubspot` et `seo-local-pme`                                                               |
| Prébuild global                                              | **491/492 tests** ; seule la preuve historique de `prioriser-fonctionnalites-mvp-saas` attend une ancienne empreinte de `src/lib/guides.ts`, hors périmètre R24 |

## Empreintes centrales avant manifeste

| Fichier                                                                              | SHA-256                                                            |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `src/app/guides/aides-creation-site-internet/page.tsx`                               | `8c7f8f2ccd420905e89d785694aec4bc09c4be9a57b600bfc40caddb55a48365` |
| `src/components/guides/SiteAidDecisionDossier.tsx`                                   | `c6c240797d09358d8afb945f0b9d7b41457491cfca2ce23bd396d88de2046e9d` |
| `src/components/guides/SiteAidPreDiagnosis.tsx`                                      | `2653a4f13d2ff1c8f56d7c43b0b24c9ffc1884dc0faad0edea0cf46f7f66b06b` |
| `src/lib/site-aid-decision.ts`                                                       | `3c3a7d18c38ae22472197a0c43a5e4020aef83e36bc331058a7538032ae22898` |
| `src/lib/site-aid-draft.ts`                                                          | `f2830c59e1e40b846cecdea3008631ad05368396336353c229e2300ec0a66bc2` |
| `src/lib/guides.ts`                                                                  | `47c0bdc1ba29386d8fb77498dbbcaf3f69f389bad70dced25947189dbdce565c` |
| `src/lib/site-aid-guide-quality.test.ts`                                             | `acc4564c3a13fb2682fac3aa59487c10d835ffb9d8faa87f2f63b324aa00f863` |
| `docs/research/aides-creation-site-internet-matrice-sources-courantes-2026-07-26.md` | `d22485a12ceee38d597e3e73c04cb90482aa6e8375e20648dd6d99b039828e76` |
| `docs/research/aides-creation-site-internet-world-benchmark-2026-07-26-r1.md`        | `6d03b20169d78b1b150c354baee6f0686847a5c5f926f1cda904b803d01402eb` |
| `docs/research/aides-creation-site-internet.md`                                      | `6004ddf2dcea34b02d3688db0839ad60e6d45a687afe4c2a9b8dfe4101643c43` |

## Porte suivante

R24 doit être figé dans un nouveau manifeste, puis confié en lecture seule à
deux nouveaux auditeurs indépendants sur exactement ce gel. R24 reste
**CANDIDAT, sans note ni GO** jusqu’à leurs verdicts. La P4 réelle ne devient
autorisée qu’après deux GO.

Ce rapport ne prouve ni commit, ni publication, ni déploiement, ni route servie
en production, ni sitemap traité, ni indexation, ni classement Google.
