# Dossier de recherche — `migrer-wordpress-vers-nextjs`

> **Statut au 25 juillet 2026 : reconstitution documentaire, P1 à reprendre.**
> Le benchmark France/international et les scénarios sont hérités de l'audit
> du 24 juillet 2026 ; ils n'ont pas été rejoués ni revérifiés ici. Ce dossier
> ne valide aucune migration, aucune source volatile, aucun calcul, aucune
> route publique et aucune porte P1–P4. Aucun défaut n'est fermé.

## Journal des quatre passes

Propriétaire éditorial unique : **à nommer avant reprise**.

| Passe                        | État        | Date       | Base examinée                     | Blocage réel                                           |
| ---------------------------- | ----------- | ---------- | --------------------------------- | ------------------------------------------------------ |
| 1. Recherche                 | À reprendre | 2026-07-25 | Page + audit hérité du 24 juillet | Sources, architectures, coûts et scénarios non rejoués |
| 2. Rédaction et intégration  | À reprendre | 2026-07-25 | Page existante                    | Baseline, TCO, migration et retour à reconstruire      |
| 3. Contre-audit indépendant  | Bloquée     | 2026-07-25 | Audit du brouillon seulement      | Aucun snapshot corrigé à recalculer                    |
| 4. Plume humaine et contrôle | Bloquée     | 2026-07-25 | Non exécutée                      | P3 non validée, test lecteur et QA finale absents      |

Les états suivent
[`workflow-maitre-guides-4-passes.md`](../workflow-maitre-guides-4-passes.md).
Ils ne ferment aucun incident de l'audit.

## 1. Périmètre et contrat avec le dirigeant

| Élément     | Observation                                                                                              |
| ----------- | -------------------------------------------------------------------------------------------------------- |
| Page relue  | `src/app/guides/migrer-wordpress-vers-nextjs/page.tsx`                                                   |
| Empreinte   | `f608cda71a8d…`, identique au snapshot audité                                                            |
| Audit       | `docs/audits/giga-audit-2026-07-24/guides/migrer-wordpress-vers-nextjs.md`                               |
| Référentiel | charte de qualité + workflow maître en quatre passes                                                     |
| Lecteur     | dirigeant de TPE/PME ou indépendant avec un WordPress lent, fragile, coûteux ou limitant                 |
| Décision    | conserver, réparer, refondre WordPress, passer en headless, migrer vers un CMS + Next.js ou reconstruire |

**Phrase réelle à tester, non verbatim d'une enquête :** « Mon WordPress me
fait perdre du temps et devient fragile. Est-ce que je dois le réparer, le
garder pour publier ou le remplacer par Next.js sans perdre mes pages, mes
demandes et mon référencement ? »

**Réponse attendue :** ne migrez pas parce que le site est vieux ou parce
qu'un score est moyen. Migrez seulement si une limite mesurée de coût, de
sécurité, d'édition ou d'évolution reste structurelle après comparaison avec
une réparation.

**Promesse décisionnelle :** obtenir un go/no-go documenté, un inventaire de
ce qui migre, un budget comparable et un plan de bascule/retour arrière.

**Promesses interdites :** zéro perte SEO, vitesse multipliée, absence de
maintenance, sécurité automatique, « sans coupure » sans fenêtre/RPO/RTO,
budget de marché sans périmètre.

## 2. Couverture observée dans la page

La page :

1. refuse la migration réflexe ;
2. propose de mesurer vitesse, sécurité, évolutivité et coût actuel ;
3. distingue contenu dans le code, CMS headless et changement complet de CMS ;
4. inventorie extensions, constructeurs, formulaires, médias, SEO et
   WooCommerce ;
5. traite export WordPress, API, redirections, Search Console et surveillance ;
6. décrit un calendrier avant/pendant/après ;
7. donne des scénarios Hagnéré de 4 000–9 000 €, 9 000–20 000 € et
   20 000–50 000 €+ ;
8. présente une formule de TCO sur trois ans ;
9. indique cinq cas où garder WordPress ;
10. termine par contrat, accès, droits et CTA.

### Forces à conserver

- Le besoin métier précède le framework.
- La page admet qu'une réparation ou un meilleur hébergement peut gagner.
- WordPress peut rester l'outil éditorial.
- WooCommerce n'est pas réduit à une simple exportation de pages.
- Le risque SEO est traité sans garantie.
- Les fourchettes sont annoncées comme scénarios Hagnéré, pas moyenne de
  marché.

### Promesse non délivrée

- La baseline ne contient pas de seuil de décision.
- Aucun cas TCO n'est calculé de bout en bout avec le temps interne.
- L'export de contenus reste descriptif pour Elementor/Divi, CPT, médias,
  taxonomies et shortcodes.
- La bascule ne précise pas TTL, gel de contenu, données delta, RPO/RTO,
  déclencheur de retour et responsable.
- Le suivi SEO ne comporte pas de matrice d'acceptation.
- Les cinq architectures/options ne sont pas comparées à fonctions et support
  égaux.
- Le CTA ne dit pas si le lecteur reçoit un inventaire, une URL map, un
  budget écrit ou un simple échange.

## 3. Demande, concurrence et angle supérieur

L'audit rapporte des recherches France, États-Unis, Royaume-Uni et Australie
sur migration WordPress → Next.js, coût, SEO, headless et checklists. Les
concurrents répètent audit → contenus → build → redirections → suivi, avec des
promesses parfois non démontrées.

Ce benchmark est **hérité et non rouvert**. La future P1 devra dater les
requêtes, distinguer pages commerciales et documentations primaires, puis
arrêter la recherche lorsque plus aucune page n'apporte de décision, preuve,
objection ou méthode nouvelle.

Angle supérieur proposé :

- baseline métier + technique avec seuils ;
- matrice fonction/contenu → migration → test → responsable ;
- parcours réel de publication, preview, webhook, cache et panne de build ;
- TCO 12/36/60 et temps éditorial ;
- runbook de bascule/rollback ;
- recette SEO et fonctionnelle ;
- cas clair où garder ou réparer WordPress gagne.

## 4. Preuves et sources réellement présentes

| Source dans la page      | Ce qu'elle peut soutenir                              | Limite                                                           |
| ------------------------ | ----------------------------------------------------- | ---------------------------------------------------------------- |
| WordPress Manage Plugins | mises à jour et précautions                           | ne mesure pas le risque du site                                  |
| WordPress Tools Export   | objets exportés par WXR                               | ne reconstruit pas le rendu, les intégrations ou médias externes |
| WordPress REST API       | accès structuré aux contenus/données exposées         | ne garantit pas une migration complète                           |
| Google Page Experience   | expérience de page                                    | pas garantie de classement                                       |
| Google Site Moves        | mapping, redirections, Search Console et fluctuations | portée différente si URLs inchangées                             |
| CNIL cookies/traceurs    | consentement et traceurs                              | dépend des outils et données réels                               |
| Légifrance CPI L131-3    | cadre de cession des droits                           | application contractuelle à qualifier                            |

Les sources Next.js self-hosting/production et les benchmarks internationaux
mentionnés dans l'audit ne sont pas dans la page. Ils sont à rouvrir avant
usage. Aucune capture de crawl, mesure avant/après ou cas client autorisé n'est
présent.

## 5. Chiffres, hypothèses et calculs

### Dans la page

- 4 000–9 000 € : vitrine, scénario Hagnéré.
- 9 000–20 000 € : site à contenu, scénario Hagnéré.
- 20 000–50 000 €+ : boutique, scénario Hagnéré.
- TCO sur trois ans : formule/listes présentes, aucun cas complet.
- surveillance 30–60 jours : enveloppe indicative, pas délai universel de
  réindexation.

Ces fourchettes ne prouvent pas un prix de marché et doivent être accompagnées
de pages, gabarits, fonctions, langues, intégrations, tests, support, TVA et
exclusions.

### Hypothèses proposées par l'audit, non validées

L'audit propose trois cas sur 36 mois :

| Poste                     |  Simple |  Central | Exigeant |
| ------------------------- | ------: | -------: | -------: |
| conservation/réparation   | 3 600 € | 14 400 € | 54 000 € |
| migration                 | 6 900 € | 14 900 € | 35 000 € |
| hébergement/services      | 1 080 € |  2 700 € | 10 800 € |
| temps additionnel         |    10 h |     50 h |    240 h |
| réserve incidents/retours |   690 € |  1 490 € |  7 000 € |

Ces nombres sont des hypothèses pédagogiques de l'audit, pas des tarifs à
publier. Ils ne forment pas encore trois totaux complets et doivent subir une
sensibilité ±30 % et un contrôle inverse.

Formule cible :

```text
TCO = chantier + hébergement/services + maintenance
    + temps interne + réserve d'incident + coût de sortie
```

Une hausse de conversion ne doit pas être comptée sans mesure attribuable. Si
le bénéfice repose seulement sur un score Lighthouse, la migration n'est pas
économiquement démontrée.

## 6. Comparaison et position professionnelle

Options à égaliser :

1. garder WordPress et corriger hébergement/extensions ;
2. refondre WordPress sans changer de CMS ;
3. WordPress headless + Next.js ;
4. nouveau CMS + Next.js ;
5. contenu versionné dans le code pour petite vitrine.

Périmètre commun : mêmes pages, contenus, formulaires, analytics, langues,
intégrations, workflow éditorial, sécurité, sauvegarde, support, SEO et sortie.

Position à assumer :

- A ou B gagne souvent pour un site récent/simple ou une équipe éditoriale qui
  travaille bien ;
- C ou D est rationnel lorsque la limite est structurelle et prouvée ;
- E ne convient qu'à un contenu peu fréquent et une responsabilité technique
  acceptée ;
- headless n'est pas un compromis gratuit : il ajoute CMS, preview, cache,
  build et double chaîne d'exploitation.

Contre-cas : un site de 20 pages qui coûte 1 200 €/an et publie quatre fois
par an n'a pas besoin de migrer pour gagner un score. Un site éditorial qui
perd 20 h/mois doit valoriser ces heures et tester le futur éditeur.

## 7. Défauts ouverts hérités

### P0

Aucun P0 explicite n'est relevé par l'audit. Cela ne valide ni sécurité, ni
continuité, ni droit.

### P1 — sept défauts

| ID    | Défaut hérité                                     |
| ----- | ------------------------------------------------- |
| P1-01 | baseline métier et technique sans seuils          |
| P1-02 | TCO sans trois cas complets ni heures internes    |
| P1-03 | migration de contenu trop descriptive             |
| P1-04 | bascule et rollback non opératoires               |
| P1-05 | SEO post-lancement sans matrice d'acceptation     |
| P1-06 | comparaison non alignée sur fonctions et horizon  |
| P1-07 | CTA sans livrable explicite ni preuve de résultat |

### P2 — dix défauts

| ID    | Défaut hérité                                                 |
| ----- | ------------------------------------------------------------- |
| P2-01 | cache, preview, webhook et multi-instance insuffisants        |
| P2-02 | international/hreflang seulement mentionné                    |
| P2-03 | sécurité, sauvegarde et données WooCommerce trop haut niveau  |
| P2-04 | accessibilité et conformité de la nouvelle interface absentes |
| P2-05 | dates des sources non localisées par affirmation              |
| P2-06 | `readTimeMin: 17` non recalculé                               |
| P2-07 | cas réel ou preuve interne absent                             |
| P2-08 | image OG non inspectée dans le head/rendu                     |
| P2-09 | ressource URL/fonctions/rollback absente                      |
| P2-10 | suivi J0/J7/J30/J60/J90 et responsables non détaillés         |

## 8. Signaux humains, anti-IA et conversion

### À préserver

- refus du changement technologique par mode ;
- cas où WordPress reste préférable ;
- définitions simples ;
- intérêt pour l'équipe qui publie ;
- réserves sur SEO et performance.

### À corriger

- longues listes de choses à migrer sans scène de travail réelle ;
- « headless », RPO, RTO, TTL, webhook ou cache doivent être traduits
  immédiatement en conséquence dirigeant ;
- fourchettes placées avant le périmètre ;
- répétition des checklists sans seuil de décision ;
- absence d'un cas complet du diagnostic à J90.

### Conversion

Le CTA peut proposer un livrable borné : inventaire des fonctions/URLs,
baseline, quatre options, TCO indicatif, risques de bascule et décision de ne
pas migrer possible. Délai, prix, données requises et limites doivent être
écrits. Ce livrable n'est pas actuellement démontré.

## 9. État exact des quatre passes

| Passe                      | État                                       | Motif                                                                                |
| -------------------------- | ------------------------------------------ | ------------------------------------------------------------------------------------ |
| P1 — recherche/cadrage     | **présente mais incomplète / à reprendre** | sources et défauts identifiés dans l'audit, scénarios, seuils et preuves non validés |
| P2 — rédaction/intégration | **existante, non validée**                 | aucune correction et sept P1 ouverts                                                 |
| P3 — contre-audit          | **rapport présent, porte non validée**     | le snapshot corrigé n'existe pas et devra être revu par un autre agent               |
| P4 — plume/QA              | **rejetée, non validée**                   | score audit 79/100 et aucun BAT complet du futur snapshot                            |

Publication, sitemap, Search Console, indexation et conversion : **non prouvés
par ce dossier**.

## 10. Prochaine correction et critères de revalidation

1. Rejouer demande et concurrence ; rouvrir WordPress, Next.js, Google, CNIL
   et les pages commerciales retenues.
2. Mesurer une baseline et définir les seuils go/no-go.
3. Tester contenus simples/Elementor/CPT/médias et le workflow éditorial.
4. Calculer cinq options sur 12/36/60 mois, avec temps interne et sensibilité.
5. Écrire puis tester runbook de bascule, rollback et matrice SEO.
6. Produire le livrable CTA réel.
7. Faire recalculer et contre-auditer par un autre agent.
8. Exécuter P4 : lecteur dirigeant, mobile, clavier, thèmes, tableaux, liens,
   OG, JSON-LD, build, route et production séparée.

Sortie possible seulement si chaque fonction et URL prioritaire a un
propriétaire et un test, les options sont comparables, les calculs sont
reproductibles, aucun P1 ne reste ouvert et le guide peut honnêtement conclure
« gardez ou réparez WordPress ».
