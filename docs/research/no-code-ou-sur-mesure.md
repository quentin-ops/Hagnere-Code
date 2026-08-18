# Dossier de recherche — `no-code-ou-sur-mesure`

> **Statut au 25 juillet 2026 : reconstitution documentaire, P1 à reprendre.**
> Ce fichier rapproche le guide courant et son audit du 24 juillet 2026. Le
> benchmark France/États-Unis/Royaume-Uni/Australie est **hérité de l'audit et
> non rejoué**. Les prix des plateformes, leurs limites, les licences, les
> calculs, les exports et les contrôles techniques ne sont pas revérifiés ici.
> La création du dossier ne ferme aucun défaut.

## Journal des quatre passes

Propriétaire éditorial unique : **à nommer avant reprise**.

| Passe                        | État        | Date       | Base examinée                     | Blocage réel                                                   |
| ---------------------------- | ----------- | ---------- | --------------------------------- | -------------------------------------------------------------- |
| 1. Recherche                 | À reprendre | 2026-07-25 | Page + audit hérité du 24 juillet | Licences, limites, exports, concurrence et calculs non rejoués |
| 2. Rédaction et intégration  | À reprendre | 2026-07-25 | Page existante                    | Cas commun, TCO et seuils de bascule à reconstruire            |
| 3. Contre-audit indépendant  | Bloquée     | 2026-07-25 | Audit du brouillon seulement      | Aucun snapshot corrigé à recalculer ni tester                  |
| 4. Plume humaine et contrôle | Bloquée     | 2026-07-25 | Non exécutée                      | P3 non validée, test lecteur et QA finale absents              |

Les états suivent
[`workflow-maitre-guides-4-passes.md`](../workflow-maitre-guides-4-passes.md).
Ils ne ferment aucun incident de l'audit.

## 1. Périmètre et cible dirigeant

| Élément     | Observation                                                                                                       |
| ----------- | ----------------------------------------------------------------------------------------------------------------- |
| Page relue  | `src/app/guides/no-code-ou-sur-mesure/page.tsx`                                                                   |
| Empreinte   | `d965ce6976d9…`, identique au snapshot audité                                                                     |
| Audit       | `docs/audits/giga-audit-2026-07-24/guides/no-code-ou-sur-mesure.md`                                               |
| Référentiel | charte de qualité + workflow maître en quatre passes                                                              |
| Lecteur     | dirigeant de TPE/PME, indépendant ou porteur de SaaS qui veut remplacer un tableur, automatiser ou créer un outil |
| Décision    | garder l'existant, acheter un logiciel, configurer, tester en no-code, hybrider, développer ou reporter           |

**Phrase réelle à tester, non verbatim d'une interview :** « Je peux payer un
abonnement no-code ou financer un outil sur mesure. Qu'est-ce qui me coûtera
réellement le moins cher avec les utilisateurs, mon temps, la maintenance et
le jour où je voudrai partir ? »

**Réponse attendue :** commencer par la solution la plus simple qui couvre le
besoin, mais comparer d'abord les mêmes fonctions, volumes, droits, données,
support et sortie. Un abonnement complet ne se compare pas à un devis initial
incomplet.

**Promesse décisionnelle :** choisir une option à tester avec un périmètre,
un TCO, un pilote, des limites, un propriétaire et une sortie acceptables.

**Promesses interdites :** pourcentage universel d'économie, seuil magique
d'utilisateurs, « le no-code est seulement un prototype », « le sur-mesure
vous appartient automatiquement », « hébergé en Europe = conforme ».

## 2. Couverture observée dans la page

La page actuelle :

1. part du tableur, de l'automatisation et du besoin d'outil ;
2. inclut explicitement ne rien construire et acheter un logiciel existant ;
3. distingue plateforme no-code, base, automatisation, site et sur-mesure ;
4. cite des prix/limites officiels de Bubble, Webflow, Airtable, Make et n8n ;
5. documente des changements/retraits de fonctions Webflow ;
6. présente trois scénarios sur cinq ans ;
7. détaille données, règles, droits, fichiers et comptes à récupérer ;
8. aborde cession, données personnelles, accessibilité et licences ;
9. propose migration progressive et verdicts par profil ;
10. déclare l'intérêt commercial de Hagnéré Code.

### Forces à préserver

- Le statu quo est une option réelle.
- Le no-code n'est ni gratuit ni condamné.
- Le sur-mesure garde maintenance, dette et dépendance.
- Les prix sont annoncés comme datés et volatils.
- Les catégories de produits ne sont pas totalement confondues.
- La sortie dépasse le simple CSV.
- Le conflit d'intérêt est explicite.
- Le CTA peut recommander de ne pas construire.

### Promesse non délivrée

- Le titre promet une comparaison sur cinq ans, mais les scénarios mélangent
  dollars et euros.
- Les fonctions, plans, droits et volumes ne sont pas identiques.
- Les montants 15 000/25 000 € de développement excluent exploitation,
  maintenance, support, sécurité et sortie.
- Le temps de construction/admin no-code, la formation et les contournements
  ne sont pas valorisés.
- Les scénarios A/B ne sont pas reproductibles à partir des plans officiels.
- Aucun seuil de sensibilité n'indique quand le choix bascule.
- Aucun pilote n'a critères go/no-go.
- Aucun export/réimport réel n'est documenté.

## 3. Demande, concurrence et gain d'information

L'audit rapporte des requêtes France, États-Unis, Royaume-Uni et Australie.
Il observe une saturation de tableaux « vitesse/prix/flexibilité/scalabilité »
et de promesses de réduction de coût.

Ce benchmark est **historique, non rouvert ici**. Les seuils d'agences
étrangères ne doivent pas être importés en France. La future P1 doit comparer
les pages commerciales, guides publics, licences et sources primaires, puis
documenter leur biais.

Le gain d'information à produire :

1. cas fonctionnel canonique avant les prix ;
2. architectures complètes, pas catalogue d'outils ;
3. TCO 12/36/60 en convention commune ;
4. sensibilité utilisateurs/usages/prix/maintenance ;
5. test de sortie puis réimport ;
6. pilote avec erreurs, charge, droits et adoption ;
7. capacité humaine à maintenir ;
8. cas où acheter ou ne rien faire gagne.

| Question                      | Couverture actuelle    | Preuve supérieure                                       |
| ----------------------------- | ---------------------- | ------------------------------------------------------- |
| Que compare-t-on ?            | cinq familles          | trois architectures complètes sur le même cas           |
| Quel coût ?                   | trois scénarios        | TCO complet, devise datée, temps, sortie et incertitude |
| Quand le prix bascule ?       | refus du seuil magique | point d'égalité et variables de sensibilité             |
| La plateforme convient-elle ? | limites officielles    | protocole normal/erreur/charge/adoption                 |
| Puis-je sortir ?              | bonnes questions       | export, réimport et contrôle chronométrés               |
| Qui maintient ?               | continuité évoquée     | propriétaire, suppléant, temps mensuel et support       |

## 4. Preuves et sources réellement présentes

| Source dans la page                     | Usage                            | Limite                                                      |
| --------------------------------------- | -------------------------------- | ----------------------------------------------------------- |
| Bubble pricing                          | prix/charge de la plateforme     | plan, workload et options volatils                          |
| Webflow pricing + update May 2026       | prix et changements de plans     | couches site/workspace à distinguer                         |
| Webflow deprecating Logic/User Accounts | dépendance à la feuille de route | exemple fournisseur, pas fréquence universelle              |
| Airtable pricing + API rate limits      | sièges/portails/limites          | packs et droits ne se multiplient pas toujours linéairement |
| Make pricing                            | automatisations                  | coût selon opérations et scénario réel                      |
| n8n pricing + Sustainable Use License   | hébergé/licence                  | usage autorisé et exploitation à qualifier                  |
| Légifrance CPI L131-3                   | cession de droits                | chaîne de droits et tiers à examiner                        |

Les sources CNIL, DGCCRF/EUR-Lex et accessibilité relevées dans l'audit ne
sont pas présentes dans la page. Elles restent à rechercher et à appliquer
au cas réel. Aucun test d'export ou de réimport n'est présent.

## 5. Chiffres, hypothèses et calculs

### Calculs présents

- Scénario A : `12 × 45 × 12 = 6 480 $/an`, soit `32 400 $` sur cinq ans.
- Scénario B : `6 480 + (100 × 9 × 12) = 17 280 $/an`, soit `86 400 $`,
  arrondi dans la page à environ `86 500 $`.
- Scénario C : `2 × 60 = 120 $`.
- Développement sur mesure : 15 000 € et 25 000 € dans des exemples.

L'arithmétique est cohérente avec les hypothèses, selon l'audit. Le modèle
économique ne l'est pas encore : plans non identifiés, droits non homogènes,
devises différentes, fonctions inégales et coûts récurrents sur-mesure hors
tableau.

### Formule à construire

```text
TCO(H) = conception/configuration/développement
       + abonnements, crédits et indexation
       + intégrations, hébergement et services
       + temps interne de construction et d'administration
       + formation, support, sécurité et incidents
       + maintenance et évolutions
       + export, réimport ou reconstruction de sortie
```

Sensibilité obligatoire : utilisateurs internes, invités/externes, volume
d'actions, hausse de prix, temps du propriétaire, maintenance, incident et
sortie. Le taux de change, la date et le traitement TVA doivent être visibles
si les devises sont rapprochées.

## 6. Comparaison et position professionnelle

Options à comparer sur le même cas :

1. conserver le tableur/processus ;
2. acheter un logiciel existant ;
3. assembler/configurer du no-code ;
4. hybride no-code + code ;
5. sur-mesure ;
6. report.

Le cas commun doit fixer utilisateurs, rôles, données, règles, volumes,
intégrations, disponibilité, sécurité, support, export et évolution. Le prix
n'arrive qu'après un test fonctionnel pass/fail.

Position professionnelle :

- le no-code gagne pour un processus stable, un pilote et une capacité interne
  assumée ;
- le logiciel du marché gagne quand la différenciation n'a pas de valeur ;
- le sur-mesure devient rationnel quand règles, intégrations, contrôle,
  volumes ou coût des contournements dépassent le TCO ;
- l'hybride peut réduire le risque ;
- si le problème n'est pas défini, ne rien construire gagne.

Contre-cas : un outil no-code bien gouverné peut durer des années ; un
sur-mesure mal documenté peut être plus captif qu'une plateforme.

## 7. Défauts ouverts hérités

### P0

L'audit constate **0 P0**. Les hypothèses sont signalées, mais cela ne valide
ni conformité, ni propriété, ni comparaison.

### P1 — sept défauts

| ID    | Défaut hérité                                                                           |
| ----- | --------------------------------------------------------------------------------------- |
| P1-01 | TCO cinq ans non comparable, devises et récurrences hétérogènes                         |
| P1-02 | scénarios A/B non reproductibles : stack, plan, fonctions et prix invités               |
| P1-03 | périmètre fonctionnel non égal                                                          |
| P1-04 | aucune sensibilité ni seuil de bascule                                                  |
| P1-05 | pas de protocole pilote/go-no-go                                                        |
| P1-06 | dossier P1 et chaîne P1–P4 absents pour le slug                                         |
| P1-07 | preuves primaires incomplètes pour sortie, RGPD, hébergement, accessibilité et licences |

La création de ce fichier ne ferme pas P1-06 : la recherche et les tests
doivent être rejoués avec propriétaire, journal et contre-audit.

### P2 — neuf défauts

| ID    | Défaut hérité                                                                |
| ----- | ---------------------------------------------------------------------------- |
| P2-01 | ajouter le coût du statu quo                                                 |
| P2-02 | isoler construction/admin no-code, formation, propriétaire et suppléant      |
| P2-03 | distinguer produit, base, automatisation, site et logiciel du marché         |
| P2-04 | ajouter sécurité opérationnelle, restauration, incidents, SLA et dépendances |
| P2-05 | traiter l'IA comme assistance, pas catégorie supprimant la responsabilité    |
| P2-06 | fournir une grille locale téléchargeable et réellement utile                 |
| P2-07 | recalculer lecture et aligner hero/registre/carte                            |
| P2-08 | tester liens, ancres, FAQ, tableaux, JSON-LD et OG                           |
| P2-09 | QA navigateur et preuves distinctes build/production/indexation              |

## 8. Signaux humains, anti-IA et conversion

### À préserver

- tableur et tâche réelle dès l'ouverture ;
- option de ne rien construire ;
- limites historiques concrètes ;
- sortie expliquée par éléments récupérables ;
- conflit commercial déclaré.

### À corriger

- tableaux de catégories sans architecture complète ;
- précision chiffrée trompeuse parce que le plan n'est pas identifiable ;
- longue accumulation de plateformes ;
- droit/RGPD présentés en alertes plutôt qu'en actions ;
- absence d'un pilote vécu par une équipe.

La narration finale doit suivre un processus réel : saisie, validation, erreur,
pic d'usage, changement de règle, départ d'un administrateur et export.

### Conversion

Le CTA doit pouvoir remettre une grille de capacités, TCO, sensibilité, pilote
et sortie, utilisable sans formulaire obligatoire. Un diagnostic commercial
ne vient qu'après l'action autonome et peut conclure à un logiciel existant ou
au report. Ce livrable reste à produire et tester.

## 9. État exact des quatre passes

| Passe                | État                             | Motif                                                                            |
| -------------------- | -------------------------------- | -------------------------------------------------------------------------------- |
| P1 — recherche       | **rejetée/absente, à reprendre** | aucun dossier validé ni test ; le présent fichier est une reconstitution         |
| P2 — rédaction       | **existante, à corriger**        | page riche mais sept P1 ouverts                                                  |
| P3 — contre-audit    | **rejetée/non prouvée**          | le giga-audit définit les corrections et ne valide pas son propre futur snapshot |
| P4 — humanisation/QA | **rejetée/non prouvée**          | score audit 82/100, comparaison 6/10, aucun BAT complet du futur snapshot        |

Build, production, robots, sitemap, indexation et conversion : **non prouvés**.

## 10. Prochaine correction et revalidation

1. Rejouer concurrence, sources et prix/plans.
2. Figer un cas fonctionnel et trois architectures complètes.
3. Tester fonctions, erreurs, charge, rôles et adoption.
4. Refaire TCO 12/36/60, change, TVA et sensibilité.
5. Exécuter export/réimport et documenter la perte.
6. Ajouter propriétaire, suppléant, sécurité et support.
7. Produire la grille autonome du CTA.
8. Faire P3 indépendante, puis P4 humaine/technique.

Critères : égalité fonctionnelle vérifiée avant le prix, plans et dates
traçables, calculs refaits, pilote et sortie exécutés, cas où chaque option
gagne, aucun P1 ouvert, livrable réel et QA finale rattachée au snapshot.
