# Reprise P3 R14 → R15 — `aides-creation-site-internet`

Date de consolidation : 26 juillet 2026  
Périmètre : guide, moteur local, interface, tests, recherche et benchmark  
Statut : **candidat R15 sans note ni GO ; P4 non lancé**

## 1. Point de départ gelé

Le manifeste
`docs/research/manifests/aides-creation-site-internet-p3-2026-07-26-r13.sha256`
contient **52 fichiers**. Il a été vérifié **52/52 au début et à la fin** du
contre-audit R14 ; son SHA-256 est
`c3bc0f0b4a0dac6230e55c6cb6e3fc5ac9f7ac40a39bcc62b6b9c11c1f4ce5b4`.

Le contrôle froid factuel, juridique et financier a rendu :

```text
82/100 — NO-GO P4
P0 : 0
P1 : 2
P2 : 2
```

Un second axe n’a pas été lancé après ce verdict : les deux P1 suffisaient déjà
à arrêter P4. Aucun second score n’est reconstitué ou inventé.

## 2. Défauts R14 et contrats R15

| Priorité | Défaut reproduit                                                                                                                             | Fermeture intégrée au candidat R15                                                                                                                                                                                                                                                                                                                                                                                                                 | Preuve locale                                                                                                                                                                          |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| P1       | Des graphies visuellement voisines avec alpha grec, A cyrillique ou i sans point pouvaient échapper au rapprochement de l’entreprise unique. | Table bornée de confusables Latin/grec/cyrillique, détection des scripts mixtes et clé de proximité séparée. Aucune graphie n’est fusionnée ou sommée automatiquement. Un nom cohérent non latin et la clé exacte sont préservés. Le moteur expose explicitement que ce contrôle n’est ni UTS #39 complet ni une authentification.                                                                                                                 | Matrices `Groupe Atlas`/homoglyphes, scripts mixtes, dotless i, alphabets cohérents, séparateurs et recopie exacte. Un groupe ne produit `300 001 €` qu’après identité exacte commune. |
| P1       | L’export TXT laissait survivre des caractères capables de fabriquer visuellement une ligne ou un faux verdict.                               | Échappement caractère par caractère des contrôles C0/C1, séparateurs `U+2028/U+2029`, bidi, formats, invisibles, espaces Unicode structurels et surrogates isolés. Les espaces ASCII internes et les mots légitimes `Infinity`, `NaN`, `undefined` restent intacts.                                                                                                                                                                                | Matrice exhaustive incluant VT, FF, NEL, ESC, BOM, bidi et demi-surrogates ; une seule vraie ligne `Verdict :` subsiste.                                                               |
| P2       | `example.com`, `example.net`, `example.org`, `home.arpa` et leurs sous-domaines restaient acceptés comme domaines publics non vérifiés.      | Refus des suffixes spéciaux/réservés pertinents et de leurs sous-domaines. `example.gouv.fr` reste admis comme espace institutionnel syntaxiquement plausible ; un vrai domaine public inconnu reste `public-unverified`.                                                                                                                                                                                                                          | Tests exacts, sous-domaines et faux voisins, sans authentification du domaine ni du contenu.                                                                                           |
| P2       | Le parcours éditorial s’arrêtait au paiement et ne faisait pas consigner les obligations susceptibles de lui survivre.                       | `scheduleAndAmendmentEvidence` reste réservé au calendrier et aux avenants. Un champ obligatoire distinct `postAwardObligationsEvidence` couvre rapports, livrables, indicateurs, visibilité, conservation des pièces, contrôles, maintien éventuel, changements à notifier et conséquences d’un manquement, dont réduction ou restitution. La page, l’exemple, l’aide locale et le TXT enseignent qu’aucune règle ni durée ne doit être inventée. | Champ, routage d’erreur, exemple Bretagne, rubrique TXT, FAQ, chronologie publique et test qualité dédiés.                                                                             |

## 3. Benchmark mondial complémentaire

La conclusion de « saturation » précédente était trop indulgente : elle
s’arrêtait au paiement. Quatre sources officielles ont été utilisées pour
construire une grille de questions post-attribution :

- [Commission européenne — gérer un projet sous convention de
  subvention](https://commission.europa.eu/funding-and-tenders/managing-your-project/managing-your-project-under-grant-agreement_fr) :
  rapports, livrables, communication, avenants, conservation, contrôles et
  audits ;
- [Enterprise Singapore — Productivity Solutions
  Grant](https://www.enterprisesg.gov.sg/financial-support/productivity-solutions-grant) :
  lettre d’offre, périmètre approuvé, déploiement, paiement, rapport d’usage et
  pièces de réclamation ;
- [business.gov.au — Regional Australia Intergovernmental Shared Inquiry
  Program](https://business.gov.au/grants-and-programs/regional-australia-intergovernmental-shared-inquiry-program) :
  jalons, KPI, rapports, retards, visites, audit et récupération ;
- [convention publique PASS Commerce et Artisanat — Saint-Brieuc Armor
  Agglomération](https://data.megalis.bretagne.bzh/OpenData/200069409/Autres/2024/754393/1027aab7c671e17d7b4f7c9637551beb639acd024eaaf37ce4ec35fa65776406.pdf) :
  exemple français particulier de visibilité, information sur les changements,
  maintien, contrôle et reversement.

Consultation : 26/07/2026. Les sources étrangères ne fournissent que la méthode.
Aucun délai, taux, régime, contrôle ou risque de restitution étranger n’est
transposé à une entreprise française. Seul l’acte applicable au dossier peut
créer l’obligation.

## 4. Validation consolidée du candidat R15

Contrôles exécutés depuis la racine du dépôt :

| Contrôle                                      | Résultat                                                                                                                                 |
| --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Suite ciblée sur sept fichiers                | **521/521 tests réussis**                                                                                                                |
| Moteur R15 seul, sans cache                   | **389/389 tests réussis**                                                                                                                |
| TypeScript `--noEmit`                         | conforme                                                                                                                                 |
| ESLint ciblé                                  | conforme                                                                                                                                 |
| Prettier ciblé                                | conforme                                                                                                                                 |
| Audit axe-core inclus dans la suite interface | aucune violation `definition-list` dans les états testés                                                                                 |
| Corpus SEO complet                            | **491/492** ; seul échec : gel P4 historique de `prioriser-fonctionnalites-mvp-saas` sur `src/lib/guides.ts`, hors périmètre de ce guide |
| Construction Next.js directe                  | conforme ; **159/159 pages statiques** générées                                                                                          |

La page construite contient :

- titre : `Aides pour créer un site internet en 2026 · Hagnéré Code` ;
- canonical :
  `https://hagnere-code.ai/guides/aides-creation-site-internet` ;
- robots : `noindex, nofollow` ;
- URL Open Graph cohérente avec le canonical ;
- deux blocs JSON-LD ;
- le champ et la FAQ post-attribution dans le HTML final.

Empreintes centrales du candidat :

```text
src/lib/site-aid-decision.ts
1391edf91cdcb5d4e08dbbabfa8ddce0accfad1f071d79da2d2a8746aa706d8e

src/lib/site-aid-decision.test.ts
9ec8684c1c73afafc0b8c4d0b7c689576ad04eb5b54c12eb74e125f491549e64

src/components/guides/SiteAidDecisionDossier.tsx
59c5d25beed53ceac02a3e290814f4328e10e265f563438ea8b326e8679728bc

src/app/guides/aides-creation-site-internet/page.tsx
2e515b900d0409120cdfe3721bed73c3dda1756636fca8641a09edd0eb380adc
```

## 5. Porte suivante

Les contrôles intégrés prouvent seulement le comportement qu’ils testent. Le
candidat R15 ne reçoit dans ce rapport **aucune note ni aucun GO**.

La suite autorisée est :

1. créer un nouveau manifeste commun immuable ;
2. faire lire ce même gel par deux contre-auditeurs indépendants, l’un
   factuel/juridique/financier et l’autre expérience/pédagogie/accessibilité ;
3. rouvrir une boucle corrective si un P0, un P1 ou un P2 réellement bloquant
   est reproduit ;
4. lancer P4 en navigateur réel uniquement après un double GO.

Ni déploiement, ni disponibilité en production, ni traitement du sitemap, ni
indexation Google, ni classement ne sont prouvés ou revendiqués ici.
