# Dossier de recherche — `prix-refonte-site-internet`

> **Statut au 25 juillet 2026 : reconstitution documentaire, P1 à reprendre.**
> La page, son audit du 24 juillet 2026, la charte et le workflow ont été
> rapprochés. Les concurrents et scénarios France/international sont
> **hérités de l'audit et non revérifiés**. Aucun prix, calcul, source
> additionnelle, rendu, déploiement, indexation ou défaut n'est validé/fermé
> par ce dossier.

## Journal des quatre passes

Propriétaire éditorial unique : **à nommer avant reprise**.

| Passe                        | État        | Date       | Base examinée                     | Blocage réel                                              |
| ---------------------------- | ----------- | ---------- | --------------------------------- | --------------------------------------------------------- |
| 1. Recherche                 | À reprendre | 2026-07-25 | Page + audit hérité du 24 juillet | Concurrence, prix, baseline et scénarios non rejoués      |
| 2. Rédaction et intégration  | À reprendre | 2026-07-25 | Page existante                    | Trajectoires, TCO, migration SEO et retour à reconstruire |
| 3. Contre-audit indépendant  | Bloquée     | 2026-07-25 | Audit du brouillon seulement      | Aucun snapshot corrigé à recalculer                       |
| 4. Plume humaine et contrôle | Bloquée     | 2026-07-25 | Non exécutée                      | P3 non validée, test lecteur et QA finale absents         |

Les états suivent
[`workflow-maitre-guides-4-passes.md`](../workflow-maitre-guides-4-passes.md).
Ils ne ferment aucun incident de l'audit.

## 1. Périmètre et cible dirigeant

| Élément     | Observation                                                                                      |
| ----------- | ------------------------------------------------------------------------------------------------ |
| Page relue  | `src/app/guides/prix-refonte-site-internet/page.tsx`                                             |
| Empreinte   | `ba15d3c09951…`, identique au snapshot audité                                                    |
| Audit       | `docs/audits/giga-audit-2026-07-24/guides/prix-refonte-site-internet.md`                         |
| Référentiel | charte de qualité + workflow maître en quatre passes                                             |
| Lecteur     | dirigeant, commerçant ou indépendant avec un site daté, lent, difficile ou limitant              |
| Décision    | correction ciblée, refonte partielle, migration, reconstruction complète, conservation ou report |

**Phrase réelle à tester, non verbatim :** « Mon site paraît vieux et devient
difficile à faire évoluer. Est-ce que je dois corriger quelques points ou tout
refaire, combien cela coûte vraiment et comment éviter de perdre mes pages,
mes formulaires et mes demandes pendant la bascule ? »

**Réponse attendue :** l'âge du design ne suffit pas. Mesurez les problèmes,
protégez les pages et parcours qui apportent de la valeur, puis comparez
correction, refonte et reconstruction sur le même périmètre et 12/36/60 mois.

**Promesse décisionnelle :** choisir le niveau d'intervention, obtenir un
budget complet, une recette et un plan de bascule/retour arrière.

**Promesses interdites :** « sans perte SEO », « sans coupure » sans
conditions, prix de marché sans scope, hausse de conversion garantie,
redirection globale vers l'accueil.

## 2. Couverture observée

La page :

1. distingue optimisation ciblée, refonte partielle, complète et conservation ;
2. explique que l'âge seul n'impose pas une refonte ;
3. présente des fourchettes Hagnéré par type de projet ;
4. demande formulaires, tâches d'administration, pages utiles, incidents et
   objectifs à trois ans ;
5. détaille les postes d'un devis ;
6. traite inventaire d'URLs, correspondance 1:1, 301, tests et surveillance ;
7. décrit préproduction, sauvegarde, fenêtre, indisponibilité et plan de retour ;
8. liste les coûts année 1, récurrents et conditionnels ;
9. compare des prestataires sur propriété et reprise ;
10. conclut par un CTA et un kit cahier des charges.

### Forces à conserver

- Le guide accepte qu'une correction gagne contre une refonte.
- La situation du dirigeant est claire dès l'ouverture.
- Le SEO de migration est traité sans garantie.
- Les pages à trafic/demandes sont identifiées comme actifs.
- Le calendrier inclut préproduction et retour.
- Les droits, comptes et reprise sont évoqués.

### Promesse non délivrée

- « coût sur trois ans » reste une liste sans total.
- Aucun TCO 12/36/60 ni sensibilité.
- Baseline conversion/SEO/performance sans seuil.
- Migration technique, refonte éditoriale et reconstruction applicative
  insuffisamment séparées.
- Intégrations, données et erreurs ne disposent pas d'une matrice de recette.
- Bascule sans RPO/RTO, données delta, trigger de rollback ni responsable.
- CTA sans livrable/délai/preuve.
- Deux sources Google seulement dans la page.

## 3. Demande, concurrence et angle supérieur

L'audit rapporte des recherches France, États-Unis, Royaume-Uni, Australie et
DACH sur prix refonte, redesign, migration SEO et relaunch checklist. Les
concurrents répètent stratégie → design → développement → redirections →
lancement.

Ce benchmark est **hérité et non rouvert**. Les fourchettes commerciales et
promesses de gains ne sont pas des faits.

Angle supérieur :

- baseline chiffrée avant chantier ;
- quatre options à fonctions égales ;
- matrice URL → trafic → lead/vente → action ;
- matrice fonction/donnée/intégration/test/responsable ;
- coût contenu, migration, recette, incident et sortie ;
- TCO 12/36/60 avec sensibilité ;
- runbook de bascule, delta et rollback ;
- suivi J0/J7/J30/J90 ;
- cas où une correction suffit.

| Question                            | Couverture actuelle | Preuve supérieure                                      |
| ----------------------------------- | ------------------- | ------------------------------------------------------ |
| Faut-il refaire ?                   | bonne intention     | baseline et seuils conversion/SEO/performance/sécurité |
| Quel niveau ?                       | tableau             | coût, délai, risque et fonctions communes              |
| Quelles pages protéger ?            | pages prioritaires  | valeur, saisonnalité, URLs et action                   |
| Peut-on basculer ?                  | principe            | RPO/RTO, delta, trigger, responsable et test           |
| Les intégrations reviennent-elles ? | citées              | API, comptes, données, erreurs et recette              |
| Quel coût total ?                   | insuffisant         | trois scénarios 12/36/60                               |
| Que reçoit le lecteur ?             | CTA URL + problèmes | matrice de décision et estimation bornée               |

## 4. Preuves et sources réellement présentes

| Source dans la page  | Usage                                      | Limite                                  |
| -------------------- | ------------------------------------------ | --------------------------------------- |
| Google Site Moves    | mapping, redirections, tests, surveillance | portée selon changement d'URL et taille |
| Google 301 redirects | redirections permanentes                   | ne remplace pas la matrice complète     |

Les sources Google Page Experience, W3C WCAG, CNIL et Légifrance utilisées
par l'audit ne sont **pas dans la page**. Elles restent à rouvrir et à
qualifier. Aucun cas réel, crawl, matrice d'URL, test d'intégration ou PV de
recette n'est présent.

## 5. Chiffres, hypothèses et calculs

### Fourchettes dans la page

- relooking : 500–3 000 € ;
- vitrine : 1 500–8 000 € ;
- PME : 3 000–15 000 € ;
- e-commerce : 5 000–40 000 € ;
- plateforme : 15 000–80 000 €+ ;
- migration SEO : 1 500–10 000 €.

Ces montants sont des scénarios Hagnéré, pas des prix de marché. Pages,
gabarits, contenus, données, intégrations, migration, recette, support, TVA et
exclusions doivent être explicites.

### Scénarios de l'audit, non intégrés

L'audit propose correction ciblée, refonte partielle et reconstruction avec
chantier initial de 1 800 €, 7 500 € et 18 000 €, puis contenus, SEO,
hébergement, maintenance, évolutions, réserve et sortie.

Ces hypothèses ne sont pas des offres. Les totaux 12/36/60 ne sont pas fournis
dans la page et doivent être recalculés.

```text
TCO 12/36/60 = chantier + temps interne + migration SEO
             + récurrents hébergement/licences/maintenance/évolutions
             + recette/incidents + sortie
```

Sensibilité ±30 % : contenus, URLs difficiles, intégrations, maintenance,
évolutions, incidents et sortie. Contrôle inverse : si la correction atteint
les seuils, la reconstruction doit être reportée.

## 6. Comparaison et position professionnelle

Options :

1. corriger l'existant ;
2. refondre design/UX sans changer de base ;
3. migrer de CMS/hébergement ;
4. reconstruire complètement ;
5. conserver/report.

Même périmètre : pages, contenus, formulaires, langues, analytics, intégrations,
support, disponibilité, sauvegarde, SEO, recette, formation et sortie.

Position :

- ne jamais refaire pour l'âge seul ;
- corriger quand les problèmes sont localisés et la base saine ;
- refondre partiellement quand le parcours/design limite sans exiger une
  nouvelle architecture ;
- reconstruire quand dette, intégrations ou évolution rendent la correction
  durablement plus coûteuse ;
- protéger d'abord pages, données, formulaires et commandes.

Contre-cas : un cabinet avec 15 demandes mensuelles, quatre nouvelles pages
par an et un formulaire fiable peut gagner avec une refonte partielle ; il n'a
pas besoin d'un nouveau CMS par principe.

## 7. Défauts ouverts hérités

### P0

Aucun P0 explicite n'est constaté. Cela ne valide ni migration, ni continuité,
ni conformité.

### P1 — huit défauts

| ID    | Défaut hérité                                                    |
| ----- | ---------------------------------------------------------------- |
| P1-01 | coût sur trois ans sans calcul et absence 12/60                  |
| P1-02 | baseline conversion/SEO/performance qualitative sans seuil       |
| P1-03 | migration/reconstruction/intégrations insuffisamment distinguées |
| P1-04 | recette sans critères d'acceptation détaillés                    |
| P1-05 | redirections sans matrice complète                               |
| P1-06 | pertes, disponibilité, RPO/RTO et rollback non chiffrés          |
| P1-07 | intégrations et données sans coût ni plan de reprise             |
| P1-08 | CTA sans livrable, délai ni preuve                               |

### P2 — dix défauts

| ID    | Défaut hérité                                             |
| ----- | --------------------------------------------------------- |
| P2-01 | sources UX/accessibilité/RGPD absentes de la page         |
| P2-02 | `readTimeMin: 11` non recalculé pour 3 510 mots source    |
| P2-03 | image OG non inspectée dans le head                       |
| P2-04 | benchmark international absent de la page                 |
| P2-05 | checklist téléchargeable migration/recette absente        |
| P2-06 | aucun cas réel documenté                                  |
| P2-07 | langues, hreflang, data residency et transferts absents   |
| P2-08 | consentement analytics et mesure conversion trop généraux |
| P2-09 | licences/comptes tiers et coût de sortie incomplets       |
| P2-10 | suivi post-lancement sans J+7/J+30/J+90                   |

## 8. Signaux humains, anti-IA et conversion

### À préserver

- problème du site avant la solution ;
- possibilité de corriger seulement ;
- principes SEO prudents ;
- pages utiles et formulaires protégés ;
- propriété/reprise.

### À corriger

- longues listes de postes sans scénario complet ;
- fourchettes avant périmètre ;
- « sans coupure » ou « recette » sans critères humains ;
- répétition d'étapes de migration ;
- jargon à traduire : RPO = données qu'on accepte au maximum de perdre ;
  RTO = temps visé pour reprendre ; rollback = retour à la version précédente.

La plume finale doit suivre une bascule réelle : dernière commande, gel,
sauvegarde, contrôle formulaire, décision de retour, J+7 et J+30.

### Conversion

Le CTA doit annoncer un livrable : baseline, matrice correction/refonte/
reconstruction, pages à protéger, risques, budget 12/36 mois et exclusions.
Il doit pouvoir recommander de ne pas refaire. Délai, prix et données demandées
restent à définir et à produire.

## 9. État exact des quatre passes

| Passe                      | État                                       | Motif                                                           |
| -------------------------- | ------------------------------------------ | --------------------------------------------------------------- |
| P1 — recherche/cadrage     | **présente mais incomplète / à reprendre** | sources/défauts historiques, baseline et scénarios non produits |
| P2 — rédaction/intégration | **existante, non validée**                 | huit P1 ouverts et page inchangée                               |
| P3 — contre-audit          | **rapport présent, porte non validée**     | aucun snapshot corrigé à recalculer                             |
| P4 — plume/QA              | **rejetée/non validée**                    | score audit 77/100 et aucun BAT complet futur                   |

Build, production, sitemap, indexation, classement et conversion : **non
prouvés**.

## 10. Prochaine correction et revalidation

1. Rejouer benchmark et sources primaires.
2. Mesurer baseline et seuils.
3. Inventorier fonctions, données, intégrations et URLs.
4. Calculer 12/36/60 et sensibilité sur quatre options.
5. Écrire/tester recette, runbook, rollback et J0/J7/J30/J90.
6. Produire checklist et livrable CTA.
7. P3 indépendante : sources, calculs, SEO, continuité et contre-cas.
8. P4 : dirigeant non auteur, mobile, clavier, thèmes, liens, OG, JSON-LD,
   build, route et production séparée.

Sortie possible seulement si la baseline produit une décision, les options
sont comparables, les calculs sont refaits, les parcours critiques ont des
tests et responsables, le CTA est réellement délivrable et aucun P1 ne reste
ouvert.
