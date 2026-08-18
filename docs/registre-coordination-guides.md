# Registre de coordination des guides

Version : 30 juillet 2026  
Statut : source de vérité opérationnelle pour réserver un guide  
Catalogue éditorial : [`docs/roadmap-guides-seo.md`](roadmap-guides-seo.md)

Ce registre empêche deux orchestrateurs ou deux groupes d’agents de produire
le même guide dans le même worktree. La roadmap reste la source de vérité du
sujet, de la priorité, de la valeur attendue et de la sortie commerciale. Le
présent fichier est la source de vérité du **propriétaire** et de l’**état de
production**.

## Règle absolue

Avant toute recherche, rédaction ou modification :

1. vérifier la ligne du slug dans ce fichier ;
2. vérifier l’absence d’un verrou `.guide-locks/<slug>.lock` ;
3. créer ce verrou de manière atomique avec `mkdir` ;
4. acquérir le mutex `.guide-locks/registry.lock` ;
5. remplacer immédiatement `LIBRE` par `RESERVE`, avec un propriétaire unique
   et un horodatage ISO 8601 ;
6. relire la ligne, puis libérer le mutex ;
7. seulement ensuite commencer le travail.

Un statut différent de `LIBRE`, un propriétaire renseigné ou un verrou
existant signifie **NE PAS TOUCHER**. L’absence d’activité visible dans Git ne
rend jamais le guide libre.

La réservation est acquise uniquement par l’agent dont la commande atomique
`mkdir ".guide-locks/<slug>.lock"` réussit. Si deux agents lisent `LIBRE` au
même instant, un seul `mkdir` peut réussir. L’autre s’arrête et choisit un
autre slug.

## États autorisés

| Statut                 | Signification                                           | Action d’un autre agent                                  |
| ---------------------- | ------------------------------------------------------- | -------------------------------------------------------- |
| `LIBRE`                | Aucun travail réservé                                   | Peut tenter la réservation atomique                      |
| `RESERVE`              | Sujet affecté, travail pas encore commencé              | Ne pas toucher                                           |
| `P1_EN_COURS`          | Création et recherche initiales                         | Ne pas toucher                                           |
| `P1_A_REPRENDRE`       | Gate G1 refusé, correction par le même agent P1         | Ne pas toucher                                           |
| `P1_VALIDEE`           | G1 validé, attente de P2                                | Ne pas toucher                                           |
| `P2_EN_COURS`          | Enrichissement et vérification contradictoire           | Ne pas toucher                                           |
| `P2_A_REPRENDRE`       | Gate G2 refusé, correction par le même agent P2         | Ne pas toucher                                           |
| `P2_VALIDEE`           | G2 validé, attente de P3                                | Ne pas toucher                                           |
| `P3_EN_COURS`          | Polish rédactionnel                                     | Ne pas toucher                                           |
| `P3_A_REPRENDRE`       | Gate G3 refusé, correction par le même agent P3         | Ne pas toucher                                           |
| `P3_VALIDEE`           | G3 validé, attente de P4                                | Ne pas toucher                                           |
| `P4_EN_COURS`          | Antipasse IA et contrôle humain final                   | Ne pas toucher                                           |
| `P4_A_REPRENDRE`       | Gate G4 refusé, correction par le même agent P4         | Ne pas toucher                                           |
| `CONTROLE_TRANSVERSAL` | Contre-audit final sur le snapshot gelé                 | Ne pas toucher                                           |
| `QUALITE_A_REPRENDRE`  | Corrections exigées après contre-audit                  | Ne pas toucher                                           |
| `PRET_A_INTEGRER`      | Quatre passes validées, intégration partagée en attente | Ne pas toucher                                           |
| `INTEGRATION_EN_COURS` | Fichiers partagés, tests, commit ou publication         | Ne modifier aucun fichier partagé                        |
| `PUBLIE`               | URL publique vérifiée                                   | Ne pas réécrire sans nouvelle réservation de maintenance |
| `BLOQUE`               | Entrée utilisateur ou preuve indispensable manquante    | Ne pas toucher                                           |
| `ABANDONNE`            | Réservation explicitement rendue après nettoyage        | L’orchestrateur doit remettre `LIBRE` avant reprise      |

Les états `P1_VALIDEE`, `P2_VALIDEE` et `P3_VALIDEE` ne sont pas des
publications. `PUBLIE` signifie que l’URL de production a été ouverte et
contrôlée ; cela ne signifie pas `INDEXE`.

## Protocole de réservation atomique

Depuis la racine exacte du worktree :

```bash
mkdir -p .guide-locks
mkdir ".guide-locks/<slug>.lock"
mkdir ".guide-locks/registry.lock"
```

- Si la deuxième commande réussit, mettre la ligne à jour immédiatement.
- Si elle échoue, ne rien modifier : le guide appartient déjà à quelqu’un.
- Si le mutex du registre est occupé, attendre qu’il soit libéré sans toucher
  au fichier ; ne jamais supprimer le mutex détenu par un autre agent.
- Après l’édition, relire la ligne puis exécuter
  `rmdir ".guide-locks/registry.lock"`.
- Ne jamais supprimer le verrou d’un autre agent.
- Un verrou apparemment ancien n’est retiré que par l’orchestrateur principal,
  après vérification de l’état des agents, du registre et du diff.

Le verrou reste présent pendant les quatre passes et le contrôle transversal.
Il est retiré seulement après passage à `PUBLIE`, ou après abandon explicite et
retour contrôlé à `LIBRE`.

## Verrou d’intégration des fichiers partagés

Les guides peuvent avancer en parallèle sur leurs fichiers propres. En
revanche, les fichiers partagés et Git sont sérialisés.

Avant de modifier notamment `src/lib/guides.ts`,
`src/components/guides/GuidesHubPage.tsx`,
`src/lib/legacy-guide-redirects.ts`, leurs tests, le maillage d’un autre guide,
le sitemap, `llms.txt`, une configuration ou une dépendance, l’orchestrateur
principal doit acquérir :

```bash
mkdir ".guide-locks/integration.lock"
```

Tant que ce verrou existe :

- aucun autre agent ne modifie un fichier partagé ;
- aucun autre agent ne lance une mise en forme globale ;
- aucun autre agent n’utilise `git add`, `git commit`, `git pull`, `git rebase`,
  `git merge` ou `git push` ;
- aucun autre agent ne publie.

Dans ce worktree, **l’orchestrateur principal est le seul intégrateur, le seul
committeur et le seul publieur**. Les autres orchestrateurs s’arrêtent au
statut `PRET_A_INTEGRER`, avec un handoff précis.

## Mise à jour obligatoire du registre

Mettre la ligne à jour :

- immédiatement après réservation ;
- au début et à la fin de chaque passe ;
- après chaque décision `GO` ou `NO_GO` de l’orchestrateur ;
- au début du contrôle transversal ;
- au handoff `PRET_A_INTEGRER` ;
- après vérification publique, en `PUBLIE`.

Le champ `Mis à jour` utilise `YYYY-MM-DDTHH:MM:SS+02:00`. Le champ `Preuve /
note` reste court : agent de passe, gate, manifeste ou URL publique.

## File des 100 guides

|   # | Slug                                           | Statut        | Propriétaire                             | Mis à jour                  | Preuve / note                         |
| --: | ---------------------------------------------- | ------------- | ---------------------------------------- | --------------------------- | ------------------------------------- |
|   1 | `automatiser-processus-metier`                 | `PUBLIE`      | `PRIMARY_ORCHESTRATOR`                   | `2026-07-30T08:17:00+02:00` | Production HTTP 200 vérifiée          |
|   2 | `calculer-roi-application-metier`              | `PUBLIE`      | `PRIMARY_ORCHESTRATOR`                   | `2026-07-31T06:33:00+02:00` | Main `f1e996b` ; CI et Vercel `dpl_8fHtNwZUBUfv9cmexXGr28eqZhYq` READY ; https://hagnere-code.ai/guides/calculer-roi-application-metier vérifiée 200 sans redirection |
|   3 | `signes-besoin-logiciel-metier`                | `PUBLIE`       | `PRIMARY_ORCHESTRATOR`                   | `2026-08-01T12:44:59+02:00` | Main `bc25126` ; Vercel `dpl_H1a7sjvkWcAdHhMw2gHQ4HE9cLNF` READY ; `https://hagnere-code.ai/guides/signes-besoin-logiciel-metier` vérifiée 200 sans redirection |
|   4 | `remplacer-microsoft-access-application-web`   | `PUBLIE` | `PRIMARY_ORCHESTRATOR`          | `2026-08-02T22:38:01+02:00` | Main `cd6f6b6` ; Vercel `dpl_HKcj6fJoU3aQ5UiU4m7y6Q3GAWqT` READY ; https://hagnere-code.ai/guides/remplacer-microsoft-access-application-web vérifiée 200 sans redirection, index/follow, canonical, Article+Breadcrumb, sitemap/llms/OG/hub/maillage et BAT public mobile+desktop verts ; non revendiqué INDEXE |
|   5 | `power-apps-ou-application-sur-mesure`         | `PUBLIE`               | `PRIMARY_ORCHESTRATOR`           | `2026-08-03T09:21:44+02:00` | PR #18 fusionnée sur `main` (`577a9ff`), déploiement production `dpl_5ydZkNNzLZPmCEfjMRnGgPYA4Ak6` READY et alias sans erreur ; URL publique directe 200, canonical/robots index-follow/Article+Breadcrumb exacts, hub+sitemap+llms présents, BAT 320/390/640/1 440 sans overflow, PDF 52 p. FAQ 12/12, OG 1 200×630, aucun runtime error/5xx |
|   6 | `airtable-notion-ou-application-metier`        | `PUBLIE` | `PRIMARY_ORCHESTRATOR`                   | `2026-08-05T22:15:46+02:00` | Branche `codex/airtable-notion-ou-application-metier` poussée au SHA `b01fdf2e804896a8178fbade7d995353446aae58`, PR #19 fusionnée sur `main` au SHA `ffab025f5385ae4bb0289f54baf5cd1a55594a26`, quality gate GitHub succès et déploiement Vercel production `dpl_64zDa9mZ5dGow4FQoGcMFSrSjtko` READY. Q éditorial 95/100 puis `GO_RELEASE_LOCAL_V2` 96/100, P0/P1=0 ; manifeste intégration 28/28 SHA `5ed882a447a89600546a25171475a3b038f396ec03f62d8bbd268da97aa19a1b`. URL publique directe 200, index/follow, canonique, Article+Breadcrumb, OG, hub/sitemap/llms/maillage, trois médias, BAT public 320–1 600 px, clavier et console verts. P2 dépendances partagé borné à 3 modérées + 1 haute ; publiée et découvrable, non revendiquée indexée. |
|   7 | `back-office-sur-mesure-pme`                   | `POUSSE` | `PRIMARY_ORCHESTRATOR`                   | `2026-08-06T15:13:42+02:00` | Branche privée `codex/back-office-sur-mesure-pme`, commit local/upstream/distant exact `36a8bdaf43139ce0413264461b55f3d866e07f67`. Q2 éditorial `GO_QUALITE_GUIDE` 95/100 puis contre-audit indépendant `/root/back_office_release` `GO_RELEASE_PRIVEE` 95/100, charte 19/20, P0/P1=0. Manifeste d’intégration 25/25, SHA externe `3487bf0f69e4bbd13ebdcf69399405e98e9d21f5f362e945ffeb198633cc725e`. Preuves finales : 1 356/1 356 tests, SEO 195/195, TypeScript/ESLint/Prettier/XML/diff verts, build Next 81/81 et postbuild 50 URL/33 liens LLM/88 JSON-LD, BAT 10 largeurs 320–1600 clair/sombre sans overflow, axe 0, calcul 840 min et cas invalides, PDF A4 41 pages. P2 : 1 high + 3 moderate transitifs, dates/faits volatils à revalider avant production ; P3 : preuve clavier native limitée par l’outil, compensée par Q2/tests. Push ≠ fusion, déploiement, publication, découverte ou indexation ; aucune URL publique revendiquée. |
|   8 | `zapier-make-ou-developpement-sur-mesure`      | `P1_EN_COURS` | `PRIMARY_ORCHESTRATOR` | `2026-08-06T15:19:36+02:00` | Worktree propre créé sur le SHA poussé exact #7 `36a8bdaf43139ce0413264461b55f3d866e07f67`. Ancien dossier et manifestes non rejouables retirés ; route publique encore en 308 vers `/services/outils-internes-sur-mesure`. Gel P0 neuf SHA `219d0c0623e1b686159820b8aeda87253af6ab35aa489bead47f1fe96d18c286` : cinq sorties, observatoire 30 jours, sept pannes non compensables, sources volatiles à rouvrir et périmètre slug-only. P1 distincte à lancer ; aucun fichier partagé avant intégration. |
|   9 | `crm-sur-mesure-ou-hubspot`                    | `LIBRE`       | —                                        | —                           | —                                     |
|  10 | `crm-sur-mesure-ou-salesforce`                 | `LIBRE`       | —                                        | —                           | —                                     |
|  11 | `automatiser-saisie-donnees-entreprise`        | `LIBRE`       | —                                        | —                           | —                                     |
|  12 | `digitaliser-bons-intervention`                | `LIBRE`       | —                                        | —                           | —                                     |
|  13 | `application-gestion-interventions-terrain`    | `LIBRE`       | —                                        | —                           | —                                     |
|  14 | `logiciel-planning-sur-mesure`                 | `LIBRE`       | —                                        | —                           | —                                     |
|  15 | `application-suivi-production-pme`             | `LIBRE`       | —                                        | —                           | —                                     |
|  16 | `logiciel-gestion-stock-sur-mesure`            | `LIBRE`       | —                                        | —                           | —                                     |
|  17 | `portail-client-b2b-sur-mesure`                | `LIBRE`       | —                                        | —                           | —                                     |
|  18 | `connecter-erp-crm-logiciel-metier`            | `LIBRE`       | —                                        | —                           | —                                     |
|  19 | `reprendre-logiciel-metier-existant`           | `POUSSE`      | `SECONDARY_ORCHESTRATOR_019fb1e0`        | `2026-07-30T13:08:07+02:00` | commit `7379d657372fffcdecc84450a1e70b96a18a0825` · branche `codex/reprise-logiciel-metier-integration` · Q final GO 98/100 · P0/P1/P2/P3 0 |
|  20 | `migrer-logiciel-metier-sans-interruption`     | `POUSSE`      | `SECONDARY_ORCHESTRATOR_019fb1e0`        | `2026-07-30T15:25:10+02:00` | commit `69178dcecba71067aabbdff67b7a2f62695c4585` · branche `codex/migrer-logiciel-metier-refonte` · Q final GO 94/100 · P0/P1 0 · non déployé |
|  21 | `plan-recette-application-metier`              | `POUSSE`               | `SECONDARY_ORCHESTRATOR_019fb1e0`        | `2026-07-30T17:03:21+02:00` | branche codex/plan-recette-application-metier · SHA 4b9603bbcd7d · Q 94/100 · non déployé |
|  22 | `choisir-prestataire-application-metier`       | `POUSSE`               | `SECONDARY_ORCHESTRATOR_019fb1e0` | `2026-07-30T19:12:19+02:00` | branche codex/choisir-prestataire-application-metier · SHA 3e3503b8742b · Q 96/100 · P0/P1 0 · non déployé |
|  23 | `securite-application-metier`                  | `POUSSE`               | `SECONDARY_ORCHESTRATOR_019fb1e0` | `2026-07-30T22:27:19+02:00` | branche codex/securite-application-metier · SHA 4d386da4f3e5 · Q final 96/100 · scorecard 20/20 · P0/P1/P2/P3 0 · non déployé |
|  24 | `droits-acces-application-metier`              | `POUSSE`      | `SECONDARY_ORCHESTRATOR_019fb1e0`        | `2026-07-31T01:54:34+02:00` | branche `codex/droits-acces-application-metier` · SHA `203dda78e66d` · Q guide 97/100 · Q intégration 100/100 · scorecard 20/20 · P0/P1/P2/P3 0 · non déployé |
|  25 | `valider-idee-saas-avant-developper`           | `PUBLIE`      | `PRIMARY_ORCHESTRATOR`                   | `2026-07-30T08:17:00+02:00` | Production HTTP 200 vérifiée          |
|  26 | `cahier-des-charges-saas`                      | `POUSSE`               | `SECONDARY_ORCHESTRATOR_019fb1e0`        | `2026-08-01T13:34:31+02:00` | Q intégration GO 95/100 ; commit 343436a8542b ; branche codex/cahier-des-charges-saas poussée ; non déployé |
|  27 | `combien-de-temps-developper-saas`             | `POUSSE`       | `SECONDARY_ORCHESTRATOR_019fb1e0`        | `2026-08-02T23:26:08+02:00` | Branche `codex/combien-de-temps-developper-saas` poussée au commit `26042f1787f0fe7b88d14a1398480a94177ff5b0` ; GO_RELEASE indépendant 95/100, P0/P1=0, 775/775 tests, build 68 pages et BAT 320-1600 px/PDF verts ; non déployé, non publié, non indexé |
|  28 | `mvp-saas-quoi-inclure`                        | `POUSSE`       | `SECONDARY_ORCHESTRATOR_019fb1e0`        | `2026-08-03T04:55:57+02:00` | Branche `codex/mvp-saas-quoi-inclure` poussée au commit `70a1acc2f85c63ae7f2d349ba9ba52efe1089abe` ; GO_RELEASE_LOCAL indépendant 97/100, P0/P1=0, 846/846 tests, build 69 pages et BAT 320-1600 px/PDF verts ; 7 alertes hautes transitives à requalifier avant déploiement public ; non déployé, non publié, non indexé |
|  29 | `prioriser-fonctionnalites-mvp-saas`           | `POUSSE`       | `SECONDARY_ORCHESTRATOR_019fb1e0`        | `2026-08-03T11:29:34+02:00` | Branche `codex/prioriser-fonctionnalites-mvp-saas` poussée au commit `3069ca828eae40fceacb100f4a43feca8a2e0699` ; Q3 final GO 96/100, P0/P1=0, 1 158/1 158 tests, build 75 pages, BAT 320-1600 px/200 %/axe/PDF A4 27 pages verts ; manifeste d’intégration 31/31 `e6459684f455211e389206482ee717e27e4311ac8318b74b8f4410a5b9e47e60` ; non déployé, non publié, non indexé |
|  30 | `agence-saas-ou-freelance`                     | `POUSSE` | `SECONDARY_ORCHESTRATOR_019fb1e0`        | `2026-08-04T15:29:19+02:00` | Branche `codex/agence-saas-ou-freelance` poussée au commit `d4a7fb58b44e46314156e60cd580c45a4224021d` ; Q3 intégration GO 94/100, scorecard 19/20, P0/P1=0 ; 1 175/1 175 tests, lint, build 76/76, BAT 320-1 920 px/reflow 200 %/axe/clavier/PDF verts ; manifeste 21/21 `72860c8f7336922bd29e9fa7b7fc3507638e1b0a6e58e650b7bab6de63359fc8` ; deux P2 partagés bornés (print global et noms AX contact) ; `datePublished` reste un STOP avant publication ; non déployé, non publié, non indexé. |
|  31 | `mvp-prototype-ou-poc`                         | `POUSSE` | `SECONDARY_ORCHESTRATOR_019fb1e0` | `2026-08-05T11:28:59+02:00` | Branche `codex/mvp-prototype-ou-poc` poussée au SHA distant vérifié `41c7672061598e5a4659c14d12e4a4fbe9132b08`. Manifeste 21/21 `3677693fa071b5c24b932aca133504feaa99ef1140f16ddeb8a4f50a459095a6`, fermeture exacte 22 fichiers, 1 191/1 191 tests, SEO 189/189, TypeScript/ESLint/Prettier/XML/build 77/77 verts. BAT Chrome 151 vert à 320/360/390/430/640/768/1 024/1 280/1 440/1 600 px, axe clair/sombre 0 violation, médias/console/réseau et clavier natif verts. Q indépendant `GO_RELEASE` 95/100, P0/P1=0. P2 bornés : `datePublished` historique STOP avant publication réelle, impression globale, ellipsis global. Slug lock conservé ; non déployé, non publié, non indexé. |
|  32 | `bubble-ou-saas-sur-mesure`                    | `POUSSE`          | `SECONDARY_ORCHESTRATOR_019fb1e0` | `2026-08-05T23:27:33+02:00` | Branche `codex/bubble-ou-saas-sur-mesure` poussée au SHA distant exact `5f305b0cc6566c093b86a7234b64c0b5291eaeb4`. Contre-audit release indépendant `GO_QUALITE_GUIDE` 95/100, charte 20/20, P0/P1=0, manifeste d’intégration SHA `d718ccc5cf012c5c66d1ecfdd587351d5c75ed7edca795c153fb953d3fc44ed0`, replay 21/21. Preuves : ciblés 67/67, suite 121 fichiers et 1266/1266, TypeScript/ESLint/Prettier/XML/diff verts, build production 79/79, postbuild 50 URL sitemap/33 liens llms/50 pages/21 temps/88 JSON-LD, BAT 320–1600 clair-sombre + 768 exact/zoom/paysage/réseau/console/axe, contraste CTA sombre 8,82:1, PDF A4 balisé 29 pages sans navigation/contact/CTA/footer. Résiduel P2 dépendances : 1 high et 3 moderate transitives, 0 critical. État strictement privé `ready-for-human-review`, sans dates éditoriales ; aucun déploiement, publication, découverte ou indexation revendiqué. STOP publication : vraie paire `datePublished`/`dateModified`, décision explicite sur le P2 dépendance et preuves publiques distinctes. |
|  33 | `lovable-bolt-v0-ou-agence-saas`               | `POUSSE`                | `SECONDARY_ORCHESTRATOR_019fb1e0` | `2026-08-06T12:37:08+02:00` | Branche distante `codex/lovable-bolt-v0-ou-agence-saas` résolue exactement sur `3622dbc35e141c2598d7ac5fbcbb3a26ea8e29e8` ; baseline empilée `5f305b0cc6566c093b86a7234b64c0b5291eaeb4`. Q éditorial 95/100 puis contre-audit final `GO_RELEASE_PRIVEE` 94/100, charte 19/20, P0/P1=0. Manifeste d’intégration 25/25 SHA `92f8fb85df2d1308643a2784301177189714d4802ec8233ad36e056d7fc23c67` ; Vitest 1292/1292, SEO 194/194, TypeScript/ESLint/build production verts, BAT responsive 320–1600 + axe/console/réseau/impression 28 pages verts. Correctifs partagés `SiteFooter` et promesse CTA « 24 h » inclus et testés. P2 fournisseur restant : 1 high + 3 moderate transitifs via `undici@7.28.0`, à réévaluer avant production ; P3 fraîcheur Lovable à rouvrir avant publication. État maximal strict `POUSSE` : aucune PR fusionnée, aucun déploiement, aucune publication ni indexation ; `datePublished` réelle et BAT public restent obligatoires avant `PUBLIE`. |
|  34 | `architecture-multitenant-saas-pour-dirigeant` | `P2_EN_COURS` | `SECONDARY_ORCHESTRATOR_019fb1e0`        | `2026-08-06T15:15:52+02:00` | GATE_P1 orchestrateur `GO_PASSE_2` sur manifeste P1 externe exact `72c96fe9de42605eec56746181129570b88ec36dc431540f69fa394b08d4da19`, replay 7/7. Gel P0 inchangé SHA `d398f38c7e602158b29a94489f302c8f96c5f7d0b358b0cacc3496472b51a76a` ; 15 sources primaires, 36 faits tracés, 9 scénarios A/B non compensables, 14/14 tests, TypeScript/ESLint/Prettier/XML verts et trois SVG relus aux proportions natives. Passe P2 distincte en cours, strictement limitée aux fichiers propres du slug ; aucune mutation partagée ni Git central avant G4/Q et fenêtre explicite. |
|  35 | `facturation-abonnements-saas`                 | `LIBRE`       | —                                        | —                           | —                                     |
|  36 | `api-integrations-saas`                        | `LIBRE`       | —                                        | —                           | —                                     |
|  37 | `securite-saas-b2b`                            | `LIBRE`       | —                                        | —                           | —                                     |
|  38 | `rgpd-saas-b2b`                                | `LIBRE`       | —                                        | —                           | —                                     |
|  39 | `heberger-saas-france-ou-europe`               | `LIBRE`       | —                                        | —                           | —                                     |
|  40 | `reprendre-mvp-vibe-code`                      | `LIBRE`       | —                                        | —                           | —                                     |
|  41 | `reprendre-saas-developpe-par-freelance`       | `LIBRE`       | —                                        | —                           | —                                     |
|  42 | `faire-evoluer-saas-apres-mvp`                 | `LIBRE`       | —                                        | —                           | —                                     |
|  43 | `audit-seo-que-contient-il`                    | `LIBRE`       | —                                        | —                           | —                                     |
|  44 | `combien-de-temps-resultats-seo`               | `LIBRE`       | —                                        | —                           | —                                     |
|  45 | `seo-ou-google-ads`                            | `LIBRE`       | —                                        | —                           | —                                     |
|  46 | `agence-seo-ou-consultant`                     | `LIBRE`       | —                                        | —                           | —                                     |
|  47 | `choisir-agence-seo`                           | `LIBRE`       | —                                        | —                           | —                                     |
|  48 | `contrat-seo-duree-engagement`                 | `LIBRE`       | —                                        | —                           | —                                     |
|  49 | `seo-local-pme`                                | `LIBRE`       | —                                        | —                           | —                                     |
|  50 | `referencement-local-commerce`                 | `LIBRE`       | —                                        | —                           | —                                     |
|  51 | `seo-site-vitrine`                             | `LIBRE`       | —                                        | —                           | —                                     |
|  52 | `seo-saas-b2b`                                 | `LIBRE`       | —                                        | —                           | —                                     |
|  53 | `seo-site-ecommerce`                           | `LIBRE`       | —                                        | —                           | —                                     |
|  54 | `seo-nextjs`                                   | `LIBRE`       | —                                        | —                           | —                                     |
|  55 | `seo-wordpress`                                | `LIBRE`       | —                                        | —                           | —                                     |
|  56 | `pourquoi-site-pas-visible-google`             | `LIBRE`       | —                                        | —                           | —                                     |
|  57 | `site-indexe-sans-trafic`                      | `LIBRE`       | —                                        | —                           | —                                     |
|  58 | `positions-google-baissent`                    | `LIBRE`       | —                                        | —                           | —                                     |
|  59 | `migration-nom-domaine-seo`                    | `LIBRE`       | —                                        | —                           | —                                     |
|  60 | `prix-gestion-google-ads`                      | `PUBLIE`      | `PRIMARY_ORCHESTRATOR`                   | `2026-07-31T00:53:42+02:00` | Main `6ceeec6` ; Vercel success ; https://hagnere-code.ai/guides/prix-gestion-google-ads vérifiée 200 sans redirection |
|  61 | `budget-google-ads-pme`                        | `LIBRE`       | —                                        | —                           | —                                     |
|  62 | `combien-de-temps-google-ads-resultats`        | `LIBRE`       | —                                        | —                           | —                                     |
|  63 | `gerer-google-ads-soi-meme-ou-agence`          | `LIBRE`       | —                                        | —                           | —                                     |
|  64 | `leads-google-ads-non-qualifies`               | `LIBRE`       | —                                        | —                           | —                                     |
|  65 | `choisir-agence-google-ads`                    | `LIBRE`       | —                                        | —                           | —                                     |
|  66 | `audit-google-ads-que-verifier`                | `LIBRE`       | —                                        | —                           | —                                     |
|  67 | `google-search-ads-ou-performance-max`         | `LIBRE`       | —                                        | —                           | —                                     |
|  68 | `google-ads-ou-meta-ads`                       | `LIBRE`       | —                                        | —                           | —                                     |
|  69 | `suivi-conversions-google-ads`                 | `LIBRE`       | —                                        | —                           | —                                     |
|  70 | `google-ads-saas-b2b`                          | `LIBRE`       | —                                        | —                           | —                                     |
|  71 | `google-ads-commerce-local`                    | `LIBRE`       | —                                        | —                           | —                                     |
|  72 | `pourquoi-google-ads-ne-convertit-pas`         | `LIBRE`       | —                                        | —                           | —                                     |
|  73 | `calculer-cout-par-lead-google-ads`            | `LIBRE`       | —                                        | —                           | —                                     |
|  74 | `landing-page-google-ads`                      | `LIBRE`       | —                                        | —                           | —                                     |
|  75 | `contrat-maintenance-site-internet`            | `LIBRE`       | —                                        | —                           | —                                     |
|  76 | `contrat-tma-application`                      | `LIBRE`       | —                                        | —                           | —                                     |
|  77 | `cout-maintenance-application-metier`          | `LIBRE`       | —                                        | —                           | —                                     |
|  78 | `tma-ou-regie`                                 | `LIBRE`       | —                                        | —                           | —                                     |
|  79 | `sla-maintenance-applicative`                  | `LIBRE`       | —                                        | —                           | —                                     |
|  80 | `maintenance-preventive-corrective-evolutive`  | `LIBRE`       | —                                        | —                           | —                                     |
|  81 | `reprendre-maintenance-site-autre-agence`      | `LIBRE`       | —                                        | —                           | —                                     |
|  82 | `audit-technique-avant-reprendre-site`         | `LIBRE`       | —                                        | —                           | —                                     |
|  83 | `site-wordpress-pirate-que-faire`              | `LIBRE`       | —                                        | —                           | —                                     |
|  84 | `site-internet-en-panne-que-faire`             | `LIBRE`       | —                                        | —                           | —                                     |
|  85 | `dette-technique-cout-entreprise`              | `LIBRE`       | —                                        | —                           | —                                     |
|  86 | `mise-a-jour-wordpress-risques`                | `LIBRE`       | —                                        | —                           | —                                     |
|  87 | `obsolescence-framework-application-web`       | `LIBRE`       | —                                        | —                           | —                                     |
|  88 | `site-vitrine-est-il-encore-utile`             | `LIBRE`       | —                                        | —                           | —                                     |
|  89 | `preparer-contenus-site-vitrine`               | `LIBRE`       | —                                        | —                           | —                                     |
|  90 | `prise-rendez-vous-en-ligne-site-vitrine`      | `LIBRE`       | —                                        | —                           | —                                     |
|  91 | `site-one-page-ou-multipage`                   | `LIBRE`       | —                                        | —                           | —                                     |
|  92 | `template-ou-site-sur-mesure`                  | `LIBRE`       | —                                        | —                           | —                                     |
|  93 | `landing-page-ou-site-vitrine`                 | `LIBRE`       | —                                        | —                           | —                                     |
|  94 | `quand-refaire-site-internet`                  | `LIBRE`       | —                                        | —                           | —                                     |
|  95 | `site-internet-artisan`                        | `LIBRE`       | —                                        | —                           | —                                     |
|  96 | `site-internet-commerce-local`                 | `LIBRE`       | —                                        | —                           | —                                     |
|  97 | `site-internet-profession-liberale`            | `LIBRE`       | —                                        | —                           | —                                     |
|  98 | `site-internet-cabinet-conseil`                | `LIBRE`       | —                                        | —                           | —                                     |
|  99 | `site-internet-hotel-independant`              | `LIBRE`       | —                                        | —                           | —                                     |
| 100 | `site-internet-entreprise-industrielle`        | `LIBRE`       | —                                        | —                           | —                                     |

## Handoff obligatoire au statut `PRET_A_INTEGRER`

L’orchestrateur secondaire fournit :

```text
HANDOFF_GUIDE
Slug :
Statut registre :
Propriétaire :
Agents distincts P1 / P2 / P3 / P4 :
Gates G1 / G2 / G3 / G4 :
Contre-auditeur transversal :
Décision transversale :
Score final :
P0 :
P1 :
Fichiers propres au slug :
Fichiers partagés à modifier par l’intégrateur :
Manifestes :
Tests exécutés :
Tests restant à exécuter après intégration :
Sources ou faits volatils à revérifier :
Risques résiduels :
Commit :
Push :
Déploiement :
URL publique :
Indexation :
```

Les quatre derniers états restent vides ou `NON_EFFECTUE` : l’orchestrateur
secondaire ne committe, ne pousse et ne publie pas.
