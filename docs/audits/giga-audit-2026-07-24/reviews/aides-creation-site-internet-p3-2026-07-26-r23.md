# Contre-audits froids R23 et contrat R24 — `aides-creation-site-internet`

Date de consolidation : 26 juillet 2026  
Responsable : orchestrateur `/root`

## Statut exécutif

**R23 : double NO-GO P4. R24 : correction en cours, sans note ni GO.**

Le candidat R23 a été figé dans
`docs/research/manifests/aides-creation-site-internet-p3-2026-07-26-r22.sha256`.
Ce manifeste contient **75 fichiers** et porte le SHA-256
`7fa73ecb41faec25359c3c0ad99585a69345c501f511049731f79a55ce4e1e5d`.
Chacun des deux auditeurs indépendants a contrôlé **75/75 fichiers au début et
à la fin**, sans écriture et sans dérive du corpus.

| Axe froid R23                               |   Note | Sévérités                | Verdict      |
| ------------------------------------------- | -----: | ------------------------ | ------------ |
| Faits, droit, finance et moteur décisionnel | 78/100 | P0 : 0 ; P1 : 4 ; P2 : 1 | **NO-GO P4** |
| Expérience, pédagogie et accessibilité      | 87/100 | P0 : 0 ; P1 : 1 ; P2 : 3 | **NO-GO P4** |

Ces notes appartiennent uniquement au gel R23. Elles ne constituent ni une note
de R24, ni une preuve de correction.

## Forces confirmées

- La réponse initiale, la distinction entre instruments, les exemples
  financiers, la TVA, la trésorerie, l’ordre des actes, le coût d’attente et les
  inconnues sont pédagogiques et actionnables.
- Les montants ACRE micro, ARCE, CPF, PASS Bretagne et les plafonds général,
  SIEG, agricole et pêche sont correctement sourcés.
- La page distingue correctement le délai européen des régimes général, SIEG
  et agricole de la condition propre au règlement pêche et du décret français.
- Le parcours en huit étapes R23, ses erreurs locales, sa revue, le brouillon
  JSON et les exports sont statiquement cohérents.
- Le benchmark international est utilisé pour la méthode sans transposer un
  programme ou un droit étranger.

## Blocages P1 reproduits

### R24-F-P1-01 — même SIEG dans deux États membres

Le moteur limitait la comparaison de l’article 5, paragraphe 2, du règlement
`2023/2832` au même État membre. Une aide courante française et une compensation
belge déclarées pour la même entreprise et le même service pouvaient produire
`notified-usable`.

Contrat R24 :

- séparer la portée transfrontalière de l’interdiction du même service du calcul
  triennal du plafond ;
- bloquer une relation `yes` et laisser `unknown` incomplet même lorsque les
  États membres diffèrent ;
- tester ces deux cas pour l’aide courante et l’historique.

Source primaire :
[règlement (UE) 2023/2832, article 5 §2](https://eur-lex.europa.eu/eli/reg/2023/2832/oj/fra).

### R24-F-P1-02 — faux délai européen pour la pêche

Le moteur attribuait à l’article 6 du règlement pêche `717/2014` un délai
européen de vingt jours pour enregistrer chaque octroi. Son article 6 §5 traite
en réalité du délai de réponse à une demande écrite de la Commission.

Contrat R24 :

- brancher le message par régime ;
- ne jamais attribuer ce délai européen au règlement pêche ;
- présenter la condition de registre liée au plafond de 40 000 € et, en France,
  le décret `2025-1361` uniquement pour les organismes qu’il vise.

Sources primaires :
[règlement pêche consolidé](https://eur-lex.europa.eu/eli/reg/2014/717/2023-10-25/fra)
et
[décret n° 2025-1361](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000053177293).

### R24-F-P1-03 — texte arbitraire accepté comme preuve SIEG

Les textes `banane 123` et `banane 456` suffisaient respectivement comme preuve
de mandat et preuve d’absence d’autre compensation, puis laissaient sortir
`notified-usable`.

Contrat R24 :

- exiger une preuve identifiable du mandat : nature d’acte, autorité et
  référence structurée ou date ;
- exiger un inventaire identifiable et une réponse d’autorité pour l’absence de
  compensation ;
- refuser les textes arbitraires ou ambigus sans prétendre authentifier la
  pièce.

### R24-F-P1-04 — URL publique quelconque acceptée comme registre

Une URL Wikipédia sans rapport avec l’aide pouvait satisfaire le contrôle de
registre français.

Contrat R24 :

- ne jamais accepter seule une URL générique `public-unverified` ;
- demander un identifiant exploitable du registre reconnu ou une attestation
  identifiable de l’autorité ;
- couvrir Wikipédia, presse, réseau social, URL officielle générique,
  `recordid` public et attestation par des tests adversariaux.

Sources primaires :
[registre public français](https://data.economie.gouv.fr/explore/assets/aides_minimis/)
et
[décret n° 2025-1361](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000053177293).

### R24-UX-P1-01 — « dossier complet » sans préparation de candidature

R23 conservait le calcul décisionnel, juridique et financier, mais ni objectifs
du financeur, ni critères de sélection, ni checklist de pièces, ni canal et
échéance de soumission. Le terme « dossier complet » créait donc une impression
de préparation excessive.

Contrat R24 :

- ajouter une étape exportable « Préparer la candidature » ;
- distinguer droit sous conditions, sélection compétitive et mode indéterminé ;
- conserver objectifs, critères, canal, date limite, temps de préparation et
  relecteur ;
- gérer une checklist de pièces avec statut, responsable, format, signature et
  échéance ;
- reprendre ces données dans la revue, l’impression, le TXT, le JSON et la
  migration des anciens brouillons.

Références de méthode :
[business.gov.au — Grant readiness](https://business.gov.au/grants-and-programs/check-if-youre-ready-to-apply-for-a-grant)
et
[France Num — préparer une subvention numérique](https://www.francenum.gouv.fr/aides-financieres/guides-et-conseils-financiers/comment-obtenir-une-subvention-pour-la-numerisation).

## P2 à corriger dans la même passe

1. **Retour depuis la revue.** Après « Modifier », l’action valide doit ramener
   directement à « Vérifier vos réponses », sauf nouvelle question
   conditionnelle réelle.
2. **Lecture progressive.** Le sommaire doit annoncer les cas avancés ; les
   branches restructuration, SIEG, agriculture et pêche doivent rester
   repliables et contextualisées.
3. **Devis mobile.** La revue doit présenter des cartes lisibles à petit écran
   et conserver le tableau uniquement sur écran adapté ; tout défilement
   horizontal résiduel doit être nommé et focalisable.
4. **ACRE et retraite.** Ajouter les seuils hors micro 2026, puis intégrer
   l’absence de validation de trimestres de retraite de base au choix
   ARCE/maintien ARE.

Références :
[GOV.UK — Check answers](https://design-system.service.gov.uk/patterns/check-answers/),
[Service Public — ACRE](https://entreprendre.service-public.gouv.fr/vosdroits/F11677)
et
[Service Public — ARCE](https://www.service-public.gouv.fr/particuliers/vosdroits/F15252).

## Porte R24

R24 devra repasser :

1. les tests adversariaux du moteur, du dossier, du brouillon, du
   prédiagnostic et du contrat éditorial ;
2. TypeScript, ESLint, Prettier et le contrôle des espaces ;
3. le build complet et l’inspection de l’artefact construit ;
4. un nouveau gel avec manifeste vérifié ;
5. deux nouveaux audits froids indépendants sur ce même gel.

La P4 en navigateur réel reste interdite avant deux nouveaux GO. Ce rapport ne
prouve ni correction R24, ni commit, ni publication, ni déploiement, ni route
servie en production, ni sitemap traité, ni indexation, ni classement Google.
