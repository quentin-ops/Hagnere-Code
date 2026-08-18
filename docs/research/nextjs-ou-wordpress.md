# Dossier de recherche — `nextjs-ou-wordpress`

> **Statut au 25 juillet 2026 : reconstitution documentaire, P1 à reprendre.**
> Les observations concurrentielles et scénarios viennent de l'audit du
> 24 juillet 2026. Ils ne sont pas une recherche rejouée. La présence de ce
> fichier ne valide ni les sources, ni le tableau économique, ni les portes
> P1–P4. Aucun défaut n'est fermé.

## Journal des quatre passes

Propriétaire éditorial unique : **à nommer avant reprise**.

| Passe                        | État        | Date       | Base examinée                     | Blocage réel                                               |
| ---------------------------- | ----------- | ---------- | --------------------------------- | ---------------------------------------------------------- |
| 1. Recherche                 | À reprendre | 2026-07-25 | Page + audit hérité du 24 juillet | Comparatif, sources, exploitation et scénarios non rejoués |
| 2. Rédaction et intégration  | À reprendre | 2026-07-25 | Page existante                    | Cas commun, TCO et réversibilité à reconstruire            |
| 3. Contre-audit indépendant  | Bloquée     | 2026-07-25 | Audit du brouillon seulement      | Aucun snapshot corrigé à recalculer                        |
| 4. Plume humaine et contrôle | Bloquée     | 2026-07-25 | Non exécutée                      | P3 non validée, test lecteur et QA finale absents          |

Les états suivent
[`workflow-maitre-guides-4-passes.md`](../workflow-maitre-guides-4-passes.md).
Ils ne ferment aucun incident de l'audit.

## 1. Périmètre et lecteur réel

| Élément     | Observation                                                                                                               |
| ----------- | ------------------------------------------------------------------------------------------------------------------------- |
| Page relue  | `src/app/guides/nextjs-ou-wordpress/page.tsx`                                                                             |
| Empreinte   | `adc94c89d118…`, identique au snapshot audité                                                                             |
| Audit       | `docs/audits/giga-audit-2026-07-24/guides/nextjs-ou-wordpress.md`                                                         |
| Référentiel | charte de qualité et workflow maître en quatre passes                                                                     |
| Lecteur     | dirigeant de TPE/PME ou indépendant qui crée/refait un site et doit choisir une base                                      |
| Décision    | WordPress, WordPress headless + Next.js, Next.js + CMS, plateforme spécialisée, autre CMS/framework, réparation ou report |

**Phrase réelle à tester, non verbatim :** « Mon agence me propose Next.js
alors que WordPress me permet de publier seul. Qu'est-ce qui sera réellement
moins cher, plus simple à maintenir et moins risqué dans trois à cinq ans ? »

**Réponse attendue :** WordPress est un CMS ; Next.js est une base de
développement. Le bon choix dépend de la personne qui publie, des fonctions,
des intégrations, du coût d'exploitation et de la sortie, pas d'un classement
abstrait des technologies.

**Promesse décisionnelle :** comparer les mêmes pages, fonctions, tâches
éditoriales, responsabilités et niveaux de support à 12, 36 et 60 mois.

**Promesses interdites :** Next.js toujours plus rapide/sûr/SEO, WordPress
toujours moins cher/autonome, headless comme compromis sans surcoût, popularité
comme preuve de pertinence.

## 2. Couverture réellement observée

La page :

1. explique clairement CMS versus framework ;
2. commence par autonomie éditoriale, fonctions, budget et maintenance ;
3. compare publication fréquente, petit budget, site existant, acquisition,
   espace client, e-commerce et headless ;
4. traite performance, SEO, sécurité, gouvernance, comptes, code et sortie ;
5. rappelle que les deux solutions demandent maintenance et responsabilité ;
6. pose les bonnes questions sur le workflow éditorial ;
7. présente le headless et un cas Bejamas/Backlinko ;
8. propose six questions de décision et un CTA.

### Forces à conserver

- Le comparatif refuse le duel simpliste.
- WordPress reste recommandé quand il convient.
- Next.js n'est pas présenté comme un CMS livré.
- L'autonomie de publication est un coût métier.
- Domaine, comptes, licences, contenus, code et documentation sont abordés.
- Une plateforme hébergée peut être meilleure que les deux.

### Promesse non délivrée

- Le tableau « coût sur trois ans » contient des `___ €`.
- Aucun total 12/36/60 n'est calculé.
- Le temps éditorial n'est pas chronométré ni valorisé.
- Maintenance, disponibilité, incidents, RPO/RTO et sortie restent généraux.
- WordPress, Next.js, headless et plateformes ne sont pas comparés au même
  service.
- Performance/SEO n'ont pas de seuil d'acceptation.
- Le headless n'a pas de scénario de preview, webhook, cache, build et secours.
- Le CTA ne définit ni livrable, ni délai, ni preuve de l'avis.

## 3. Demande, concurrence et gain d'information

L'audit rapporte des recherches en France, États-Unis, Royaume-Uni, Australie
et DACH. La réponse concurrente saturée est « WordPress pour le contenu,
Next.js pour la performance et le sur-mesure ».

Ce benchmark est **hérité de l'audit, non revérifié**. Les affirmations
étrangères comme « sous une seconde », « SEO excellent » ou « headless coûte
30–50 % de plus » ne sont pas des faits réutilisables.

Le gain d'information à rechercher :

- minutes réelles pour publier, prévisualiser et corriger ;
- coût du propriétaire technique et des incidents ;
- TCO à fonctions égales ;
- décision réparer avant migrer ;
- plan de panne headless ;
- export/rebuild réellement testé ;
- branche « ni WordPress ni Next.js » ;
- critères de réussite SEO/performance, jamais score isolé.

| Question                             | Couverture       | Preuve supérieure                                            |
| ------------------------------------ | ---------------- | ------------------------------------------------------------ |
| Qui publie ?                         | bonne            | chronométrage par tâche et coût interne                      |
| Le site actuel doit-il être réparé ? | partielle        | baseline plugins/cache/hébergement/formulaires/incidents     |
| Quelle solution est plus rapide ?    | méthode générale | même site, même contenu, appareil/réseau, p75 et avant/après |
| Quel coût total ?                    | tableau vide     | trois cas 12/36/60 et sensibilité                            |
| Le headless vaut-il le coût ?        | orientation      | architecture, responsabilités, panne et TCO                  |
| Puis-je partir ?                     | actifs listés    | export, build ailleurs, accès et délai constatés             |

## 4. Preuves et sources réellement présentes

| Source dans la page                     | Usage                         | Limite                                                  |
| --------------------------------------- | ----------------------------- | ------------------------------------------------------- |
| WordPress Manage Plugins / Tools Export | maintenance et export         | ne prouve pas la reprise complète                       |
| Next.js self-hosting                    | auto-hébergement              | dépend de l'architecture, du cache et de l'exploitation |
| Google JavaScript SEO basics            | rendu/indexabilité JS         | pas garantie de classement                              |
| W3Techs WordPress                       | popularité                    | popularité non décisive pour un projet                  |
| State of JS 2025                        | perception/usage d'écosystème | enquête déclarative, pas TCO                            |
| Search Engine Journal, SEO et CWV       | contexte secondaire           | remplacer/compléter par sources primaires               |
| HTTP Archive Web Almanac                | agrégats web                  | ne prédit pas le projet individuel                      |
| Bejamas/Backlinko                       | cas commercial                | métriques et périmètre insuffisamment exposés           |
| Linux Foundation/Fair                   | contexte d'écosystème         | ne décide ni maintenance ni budget                      |

Les sources Google Page Experience/Site Moves, Next.js deployment, CNIL, W3C
et Légifrance relevées par l'audit ne sont pas toutes présentes dans la page.
Elles restent à rouvrir et localiser près des affirmations.

## 5. Chiffres, hypothèses et calculs

### État de la page

- Le guide annonce un coût comparé sur trois ans.
- Les cellules restent vides (`___ €`) : aucun TCO actuel.
- Les statistiques de popularité ou d'agrégats ne doivent pas devenir une
  recommandation.
- Le cas commercial headless ne constitue pas une preuve transposable.

### Scénarios proposés dans l'audit, non intégrés

L'audit propose, selon trois niveaux, des constructions initiales allant de
2 500 € WordPress / 6 900 € Next à 12 000 € headless / 24 000 € Next métier,
plus outils éditoriaux, hébergement, plugins, maintenance, temps éditorial,
incidents et sortie.

Ces montants sont explicitement illustratifs. Ils n'ont pas été transformés
en totaux 12/36/60 dans la page et ne sont pas validés.

Formule à mettre à l'épreuve :

```text
TCO(H) = construction
       + H × (outil éditorial + hébergement + plugins/services + maintenance)
       + temps éditorial et incidents valorisés
       + réserve et coût de sortie
```

Sensibilités : ±30 % sur licences, temps éditorial, maintenance, incidents,
fréquence d'articles ; ajout d'une langue et d'une intégration. La variable de
bascule doit être le coût annuel du workflow ou une fonction spécifique, pas
la préférence du développeur.

## 6. Comparaison et position

Options à égaliser :

1. réparer WordPress ;
2. WordPress classique ;
3. WordPress headless + Next.js ;
4. Next.js + CMS ;
5. plateforme spécialisée ou autre CMS/framework ;
6. report.

Même périmètre : contenu, pages, formulaires, langues, analytics/consentement,
publication/preview, sauvegarde, sécurité, support, disponibilité, sortie et
horizon.

Position professionnelle :

- WordPress ou une plateforme gagne souvent pour une vitrine éditoriale simple
  avec équipe non technique ;
- Next.js devient rationnel pour parcours sur mesure, intégration métier ou
  application ;
- headless doit prouver que ses bénéfices compensent deux systèmes ;
- réparer est une option de premier rang ;
- aucune solution n'est « sans maintenance ».

Contre-cas : une petite vitrine dont les contenus changent souvent peut coûter
plus cher en Next.js si chaque publication dépend d'un développeur.

## 7. Défauts ouverts hérités

### P0

Aucun P0 explicite dans l'audit. Cette absence ne valide ni sécurité, ni
conformité, ni disponibilité.

### P1 — huit défauts

| ID    | Défaut hérité                                            |
| ----- | -------------------------------------------------------- |
| P1-01 | tableau TCO trois ans vide et absence de 12/60 mois      |
| P1-02 | temps éditorial non chiffré                              |
| P1-03 | maintenance, incidents et disponibilité sans SLA/RTO/RPO |
| P1-04 | comparaison directe de produits non équivalents          |
| P1-05 | performance/SEO sans seuil d'acceptation                 |
| P1-06 | headless sans coût opérationnel ni plan de panne         |
| P1-07 | autre CMS/plateforme seulement mentionné                 |
| P1-08 | CTA sans livrable, délai et preuve                       |

### P2 — dix défauts

| ID    | Défaut hérité                                         |
| ----- | ----------------------------------------------------- |
| P2-01 | sources SEO/performance trop secondaires              |
| P2-02 | RGPD, cookies et accessibilité absents du budget      |
| P2-03 | image OG non inspectée dans le head/rendu             |
| P2-04 | `readTimeMin: 14` non recalculé                       |
| P2-05 | cas Bejamas sans métrique détaillée                   |
| P2-06 | export/reprise jamais testés                          |
| P2-07 | multilingue/hreflang et data residency absents        |
| P2-08 | mesure de conversion et consentement trop généraux    |
| P2-09 | dépendances et services tiers non inventoriés         |
| P2-10 | checklist de lancement et suivi J0/J7/J30/J90 absente |

## 8. Signaux humains, anti-IA et conversion

### À préserver

- explication CMS/framework ;
- transparence sur le biais Next.js de Hagnéré Code ;
- WordPress recommandé quand il gagne ;
- gouvernance et sortie ;
- alternative plateforme.

### À corriger

- listes de critères sans cas filé ;
- tableau vide qui simule une décision financière ;
- termes headless, cache, p75, RPO/RTO sans traduction immédiate ;
- accumulation de sources secondaires ;
- répétition de structures identiques entre chapitres.

La plume finale doit suivre une dirigeante et son équipe pendant une semaine :
publication, prévisualisation, formulaire, incident, mise à jour et changement
de prestataire. Les technologies viennent ensuite expliquer les écarts.

### Conversion

Le CTA doit annoncer une matrice ou un avis écrit : périmètre commun,
TCO simplifié, risques, recommandation, alternative et possibilité de ne pas
migrer. Délai, prix, données nécessaires et limites doivent être observables.
Ce livrable n'est pas prouvé dans la page actuelle.

## 9. État exact des quatre passes

| Passe                      | État                                       | Motif                                                                     |
| -------------------------- | ------------------------------------------ | ------------------------------------------------------------------------- |
| P1 — recherche/cadrage     | **présente mais incomplète / à reprendre** | sources et défauts historiques, scénarios et matrice non produits/validés |
| P2 — rédaction/intégration | **existante, non validée**                 | huit P1 ouverts                                                           |
| P3 — contre-audit          | **rapport présent, porte non validée**     | aucun snapshot corrigé à recalculer                                       |
| P4 — plume/QA              | **rejetée, non validée**                   | score audit 79/100, aucun BAT complet du futur snapshot                   |

Publication, sitemap, indexation, classement et conversion : **non prouvés
dans ce dossier**.

## 10. Prochaine correction et critères de revalidation

1. Rejouer recherche, sources primaires et concurrence.
2. Chronométrer les tâches éditoriales et relever la baseline WordPress.
3. Égaliser six options et calculer 12/36/60 avec sensibilité.
4. Décrire/exécuter le scénario headless de bout en bout, panne comprise.
5. Tester export/rebuild, SEO/performance et sortie.
6. Définir le livrable CTA.
7. P3 indépendante : faits, calculs, contre-cas et décisions.
8. P4 : lecteur dirigeant, mobile/tableaux, clavier, thèmes, liens, OG,
   données structurées, build et route.

La page ne peut sortir que si le tableau financier est réellement rempli,
chaque option achète le même résultat, le workflow éditorial est chiffré,
l'alternative « ni l'un ni l'autre » est loyale et aucun P1 ne reste ouvert.
