# Dossier de recherche — `pourquoi-mon-site-est-lent`

> **Statut au 25 juillet 2026 : reconstitution documentaire, recherche à
> reprendre.** La page et l'audit du 24 juillet 2026 ont été rapprochés avec la
> charte et le workflow. Les benchmarks France/États-Unis/Royaume-Uni/Australie
> et les cinq scénarios sont **hérités de l'audit, non rejoués ni recalculés
> dans cette passe**. Aucun défaut, test de performance, rendu, build,
> déploiement ou résultat métier n'est validé par ce fichier.

## Journal des quatre passes

Propriétaire éditorial unique : **à nommer avant reprise**.

| Passe                        | État        | Date       | Base examinée                     | Blocage réel                                                 |
| ---------------------------- | ----------- | ---------- | --------------------------------- | ------------------------------------------------------------ |
| 1. Recherche                 | À reprendre | 2026-07-25 | Page + audit hérité du 24 juillet | Sources, concurrents, mesures et scénarios non rejoués       |
| 2. Rédaction et intégration  | À reprendre | 2026-07-25 | Page existante                    | Diagnostic, coût métier et seuils de décision à reconstruire |
| 3. Contre-audit indépendant  | Bloquée     | 2026-07-25 | Audit du brouillon seulement      | Aucun snapshot corrigé ni mesure réelle à vérifier           |
| 4. Plume humaine et contrôle | Bloquée     | 2026-07-25 | Non exécutée                      | P3 non validée, test lecteur et QA finale absents            |

Les états suivent
[`workflow-maitre-guides-4-passes.md`](../workflow-maitre-guides-4-passes.md).
Ils ne ferment aucun incident de l'audit.

## 1. Périmètre et cible dirigeant

| Élément     | Observation                                                                                                      |
| ----------- | ---------------------------------------------------------------------------------------------------------------- |
| Page relue  | `src/app/guides/pourquoi-mon-site-est-lent/page.tsx`                                                             |
| Empreinte   | `8a62f43b6692…`, identique au snapshot audité                                                                    |
| Audit       | `docs/audits/giga-audit-2026-07-24/guides/pourquoi-mon-site-est-lent.md`                                         |
| Référentiel | charte de qualité + workflow maître en quatre passes                                                             |
| Lecteur     | dirigeant dont le site, tunnel ou outil interne semble lent sur mobile, à certaines heures ou pendant une action |
| Décision    | isoler page/parcours/cause, puis ne rien faire, réparer, renforcer ou reconstruire                               |

**Phrase réelle à tester, non verbatim :** « Mon site est lent et on me parle
de PageSpeed. Qu'est-ce qui ralentit vraiment mes clients, combien cela me
coûte et est-ce qu'il faut corriger ou tout refaire ? »

**Réponse attendue :** ne refaites rien sur un score unique. Choisissez une
page ou une tâche importante, mesurez terrain et laboratoire dans un protocole
stable, prouvez la cause, puis comparez réparation et reconstruction sur le
même horizon.

**Promesse décisionnelle :** fournir un diagnostic reproductible, une valeur
métier prudente, un TCO et un procès-verbal de réception.

**Promesses interdites :** une seconde = X % de ventes, score vert = meilleur
classement, 100/100 garanti, framework ou plugin déclaré cause sans mesure,
gain d'un cas international transposé à une PME.

## 2. Couverture observée

La page :

1. commence par les pages qui portent le résultat, pas l'accueil par réflexe ;
2. distingue données terrain et laboratoire ;
3. traduit LCP, INP et CLS ;
4. recommande plusieurs tests ;
5. propose un tableau symptôme → cause → contrôle ;
6. priorise les premières corrections ;
7. compare optimisation et refonte ;
8. présente quatre niveaux de budget/intervention ;
9. encadre le prestataire et refuse la promesse 100/100.

### Forces à conserver

- Le diagnostic précède la refonte.
- La page parle à un dirigeant et traduit les métriques.
- Elle teste le parcours utile plutôt qu'un score de page d'accueil.
- Elle sépare terrain et laboratoire.
- Le CTA peut conclure à une correction ciblée.
- Elle ne garantit ni SEO ni conversion.

### Promesse non délivrée

- « Ce que la lenteur peut vous coûter » ne contient aucun calcul.
- « Deux ou trois tests » est insuffisant pour une réception robuste selon la
  source Lighthouse relevée dans l'audit.
- Réseau, DNS/TLS, serveur, base, services tiers, CPU, erreurs, charge et
  surveillance sont incomplets.
- Aucun TCO ne compare laisser, réparer et reconstruire.
- Deux sources seulement soutiennent la page courante.
- Aucun budget de performance, monitoring, alerte ou responsable après
  livraison.
- Le guide ne montre pas comment distinguer corrélation et causalité sur la
  conversion.

## 3. Demande, concurrence et gain d'information

L'audit rapporte des recherches France, États-Unis, Royaume-Uni et Australie.
La SERP est saturée de listes : images lourdes, plugins, hébergement, cache et
scripts.

Ce benchmark est **hérité et non revérifié**. Les pages commerciales servent
à repérer les angles, pas à prouver leurs gains.

Angle supérieur à reconstruire :

- cinq passages et médiane, avec dispersion ;
- terrain sur 28 jours quand disponible ;
- lecture par gabarit/parcours ;
- frise réseau → serveur → base → ressources → CPU → interaction ;
- waterfall, TTFB, services tiers, erreurs et charge ;
- RUM, monitoring et alertes ;
- temps salarié, marge et contrôle de causalité ;
- TCO laisser/réparer/reconstruire ;
- budget de performance et réception.

| Question                     | Couverture actuelle     | Preuve supérieure                                             |
| ---------------------------- | ----------------------- | ------------------------------------------------------------- |
| Est-ce vraiment lent ?       | PageSpeed + terrain/lab | période, URL/origine, appareil, 5 runs, médiane et dispersion |
| Quelle page corriger ?       | bonne intuition         | volume × gêne × valeur × certitude                            |
| Pourquoi ?                   | causes front courantes  | diagnostic bout en bout et waterfall                          |
| Pourquoi aux pics ?          | faible                  | trafic normal, montée en charge, rupture et mode dégradé      |
| Combien cela coûte ?         | qualitatif              | temps interne, marge observée et réserve de causalité         |
| Réparer ou refaire ?         | critères généraux       | TCO 36 mois et contrôle inverse                               |
| Comment éviter la récidive ? | faible                  | budget, CI/RUM, alerte et propriétaire                        |

## 4. Preuves et sources réellement présentes

| Source dans la page  | Usage                                     | Limite                                           |
| -------------------- | ----------------------------------------- | ------------------------------------------------ |
| PageSpeed Insights   | test de laboratoire/terrain selon données | résultat variable, absence de données possible   |
| Google PSI API/about | fonctionnement de l'outil                 | ne prouve pas un coût métier                     |
| web.dev Web Vitals   | LCP, INP, CLS et seuils                   | métriques d'expérience, pas objectifs financiers |

Les sources Chrome CrUX, Lighthouse Variability, Google Search Central Page
Experience, GOV.UK et Australian Digital Performance Standard figurent dans
l'audit, **pas dans la page**. Elles doivent être rouvertes, datées et reliées
aux affirmations. Aucun cas client, log, RUM ou test de charge n'est présent.

## 5. Chiffres, hypothèses et calculs

### Dans la page

- LCP ≤ 2,5 s, INP ≤ 200 ms, CLS ≤ 0,1 : seuils web.dev, à expliquer au
  75e percentile.
- Fenêtre terrain de 28 jours : évoquée dans l'écosystème mais à sourcer
  directement dans la page.
- Aucun calcul de coût ou TCO actuel.

### Cinq scénarios proposés par l'audit, non intégrés

1. Cinq LCP `2,5 ; 2,8 ; 2,9 ; 3,2 ; 4,1 s` : médiane 2,9 s, étendue 1,6 s.
2. 30 personnes × 40 actions/jour × 1,2 s × 220 jours = 88 h/an,
   valorisées 3 960 €/an à 45 €/h.
3. Cohorte illustrative : borne de 11 520 €/mois associée à un écart de
   conversion, explicitement **non causal**.
4. TCO 36 mois : laisser 40 680 €, réparer 40 800 €, reconstruire 106 800 €.
5. Investissement 17 000 € : retours simples de 51,5 à 5,4 mois selon 0 à
   4 ventes additionnelles prouvées/mois.

Ces calculs sont des hypothèses pédagogiques de l'audit. Ils ne viennent pas
d'un client, ne sont pas dans la page et doivent être recalculés
indépendamment. La capacité valorisée n'est pas une économie de trésorerie. La
borne de conversion n'est pas une perte causée par la vitesse.

## 6. Comparaison et position professionnelle

Options :

1. ne rien faire et surveiller ;
2. corriger une cause isolée ;
3. renforcer hébergement/backend/tiers ;
4. reconstruire le parcours ou le système.

Même périmètre : même parcours, trafic, fonctionnalités, hébergement/monitoring
comparables, maintenance, temps interne et horizon 36 mois.

Position :

- réparer gagne presque toujours si la base est saine et la cause isolée ;
- reconstruire devient rationnel si les lenteurs sont systémiques, les
  régressions récurrentes ou le parcours doit être repensé ;
- un score vert n'est pas un résultat d'entreprise ;
- une amélioration technique ne devient valeur commerciale qu'après mesure
  avant/après et contrôle des autres changements.

Contre-cas : si la page est légèrement au-dessus d'un seuil mais n'affecte
aucun parcours, trafic ou travail significatif, ne rien faire peut être la
meilleure décision.

## 7. Défauts ouverts hérités

### P0 — libellé spécifique de cet audit

Le rapport place cinq éléments sous « P0 — bloquants avant de revendiquer une
supériorité éditoriale ». Ce libellé est reproduit sans le reclasser et sans
prétendre qu'il correspond nécessairement à une erreur dangereuse au sens
général de la charte :

1. sources primaires distinctes pour CrUX, variabilité, SEO et charge ;
2. cinq passages et médiane pour une réception sérieuse ;
3. TCO à horizon égal ;
4. valeurs métier étiquetées hypothèse/observation, jamais causalité ;
5. recalcul des cinq scénarios par un second relecteur.

Ces cinq points restent ouverts.

### P1 — sept défauts

1. ajouter la frise réseau → serveur → base → ressources → CPU → interaction ;
2. ajouter waterfall, TTFB, services tiers, erreurs et capacité ;
3. chiffrer temps interne et valeur commerciale avec contrôle inverse ;
4. ajouter RUM, monitoring, alertes et budget de performance ;
5. donner le cas où ne rien faire gagne ;
6. ajouter l'opinion Hagnéré Code, son contre-cas et signal de révision ;
7. construire un PV de réception reproductible.

### P2 — cinq défauts

1. fiche téléchargeable « cinq tests + coût métier + TCO » ;
2. waterfall annotée avec données clairement fictives ;
3. mini-calculateur temps salarié/retour simple ;
4. test lecteur dirigeant terrain/laboratoire et corrélation/causalité ;
5. QA tableaux à 320, 390, 768, 1 024 et 1 440 px.

## 8. Signaux humains, anti-IA et conversion

### À préserver

- symptôme métier avant technique ;
- refus du score unique ;
- définitions simples ;
- page/parcours important avant accueil ;
- recommandation de réparer avant de vendre une refonte.

### À corriger

- liste de causes trop semblable aux concurrents ;
- métriques sans scène réelle ;
- section coût sans nombre ;
- quatre niveaux d'intervention sans TCO ;
- jargon à traduire : RUM = mesures de vrais utilisateurs, TTFB = attente
  avant la première réponse, waterfall = chronologie des chargements.

La narration doit partir d'un formulaire lent, d'un panier ou d'un outil
interne, montrer cinq mesures, une cause, une correction et une décision. Les
calculs doivent expliquer leur limite à la phrase suivante.

### Conversion

Le CTA peut proposer une fiche de mesure et un diagnostic borné : trois
parcours, cinq tests, cause probable/confirmée, ordre de correction, estimation
de valeur et comparaison réparer/refaire. Il doit pouvoir conclure « ne
changez rien ». Livrable, délai, prix et données nécessaires restent à définir
et à produire.

## 9. État exact des quatre passes

L'audit ne fournit pas un tableau P1–P4 explicite. L'état ci-dessous applique
le workflow aux preuves qu'il déclare ; il ne vaut pas validation :

| Passe             | État documentaire                          | Motif                                                                      |
| ----------------- | ------------------------------------------ | -------------------------------------------------------------------------- |
| P1 — recherche    | **présente mais incomplète / à reprendre** | benchmark historique, sources/page insuffisantes, scénarios non recalculés |
| P2 — rédaction    | **existante, non validée**                 | enrichissement substantiel nécessaire et défauts ouverts                   |
| P3 — contre-audit | **rapport présent, porte non validée**     | le rapport diagnostique la page et ne revalide aucun snapshot corrigé      |
| P4 — plume/QA     | **rejetée/non exécutée**                   | score audit 78/100, lecteur réel et QA finale absents                      |

Indexation, classement et conversion : **non prouvés**.

## 10. Prochaine correction et revalidation

1. Rouvrir toutes les sources primaires et refaire le benchmark.
2. Fixer protocole cinq tests + terrain + parcours.
3. Produire frise, waterfall et test de charge approprié.
4. Recalculer indépendamment les cinq scénarios et leurs contrôles inverses.
5. Construire TCO et budget de performance.
6. Produire la fiche autonome et le livrable CTA.
7. P3 par un autre agent ; P4 avec lecteur dirigeant et QA complète.

Sortie possible seulement si les mesures sont reproductibles, chaque valeur
métier est bornée, réparer/refaire/ne rien faire sont comparés à horizon égal,
les cinq blocages hérités sont fermés avec preuves et aucun résultat SEO ou
commercial n'est déduit d'un score.
