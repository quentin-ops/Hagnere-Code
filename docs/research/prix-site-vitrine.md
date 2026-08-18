# Dossier de recherche reconstitué — Prix d’un site vitrine

> Ce document transforme l’audit existant en brief de reprise vérifiable. Les
> observations concurrentielles et les sources non visibles dans la page sont
> héritées de l’audit du 24 juillet 2026 ; elles n’ont pas été rouvertes ici.

**Statut réel : brouillon à reprendre — aucune porte validée.**

## Journal des quatre passes

| Passe                        | État        | Date       | Motif                                                                                |
| ---------------------------- | ----------- | ---------- | ------------------------------------------------------------------------------------ |
| 1. Recherche                 | À reprendre | 2026-07-25 | Dossier reconstitué, mais benchmark 2026, prix fournisseurs et preuves non revalidés |
| 2. Rédaction et intégration  | À reprendre | 2026-07-25 | Le brouillon existe ; onze P1 et huit P2 hérités restent ouverts                     |
| 3. Contre-audit indépendant  | Bloquée     | 2026-07-25 | L’audit porte sur la version non corrigée                                            |
| 4. Plume humaine et contrôle | Bloquée     | 2026-07-25 | Aucun test lecteur réel ni QA finale après correction                                |

Propriétaire éditorial : **à nommer**.

## Snapshot et provenance

| Élément                                                         | Empreinte ou date                                                  | Statut de la preuve                                        |
| --------------------------------------------------------------- | ------------------------------------------------------------------ | ---------------------------------------------------------- |
| `src/app/guides/prix-site-vitrine/page.tsx`                     | `ea6d3f4a094bafb08888307ed3fd1da60ef8a91dedfc902f5196822d783846df` | Correspond au snapshot audité ; rendu public non revérifié |
| `docs/audits/giga-audit-2026-07-24/guides/prix-site-vitrine.md` | 24 juillet 2026                                                    | Audit hérité ; concurrence non rouverte                    |
| `docs/charte-qualite-guides.md`                                 | `5ee616faa4959dc8ad2b0eb19a5b19ffbf53299b62665700093c5c176b0b8491` | Règles de valeur, de preuve et de langage applicables      |
| `docs/workflow-maitre-guides-4-passes.md`                       | `a3a8c8f1be5d5d60b096f251f22b27ae5526adb708c334c4d6f0b7b4270c60c4` | États et portes applicables ; aucun manifeste créé         |

## 1. Cible, phrase réelle et décision

| Champ                    | Cadrage                                                                                                                            |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| Lecteur                  | Artisan, indépendant ou dirigeant de TPE-PME qui veut un site crédible et des demandes qualifiées                                  |
| Déclencheur              | Il compare une solution faite seul, un freelance et une agence, mais les devis n’incluent pas les mêmes travaux                    |
| Phrase réelle de travail | « Combien dois-je prévoir pour un site crédible qui m’apporte des demandes, et que recouvrent vraiment deux devis au même prix ? » |
| Intention                | Comprendre le budget de création et de vie du site, à résultat comparable                                                          |
| Promesse                 | Expliquer ce qui fait varier le prix, comment comparer les lignes et quand une solution simple suffit                              |
| Décision                 | Choisir autonomie, freelance, agence standard ou conception dédiée ; fixer le périmètre et le coût total                           |
| Action autonome          | Écrire pages, contenus, formulaires, responsabilités, autonomie, maintenance et critères d’acceptation                             |
| Hors périmètre           | Promesse de trafic ou de clients, tarif officiel, audit juridique ou devis ferme                                                   |

## 2. Couverture observée

La page :

- répond avec des fourchettes distinctes pour réalisation autonome, freelance,
  agence standard et conception plus complète ;
- précise que ces montants sont des scénarios de préparation et non des
  moyennes de marché ;
- explique que le rôle du site, les contenus, la recette, les outils et les
  coûts récurrents changent le budget ;
- distingue jours de production et délai calendaire ;
- aide à lire les postes d’un devis et à prévoir une acceptation du résultat ;
- reconnaît qu’une solution peu coûteuse peut suffire ;
- propose de comparer deux budgets au lieu de pousser automatiquement vers
  l’offre la plus chère.

La page est donc utile pour l’orientation. Elle n’est pas encore une
comparaison financière à périmètre égal.

## 3. Défauts à traiter

### P0

L’audit n’a constaté ni faux témoignage, ni garantie de résultat, ni prix
présenté comme officiel. Cette absence est historique et ne dispense pas de
revérifier chaque chiffre avant la prochaine date « 2026 ».

### P1 hérités

1. Sourcer ou qualifier précisément chaque fourchette : date, périmètre,
   France, HT/TTC, nature de l’observation et incertitude.
2. Comparer autonomie, freelance, agence et dédié sur le même site : pages,
   contenus, responsive, SEO de base, recette, formation et garantie.
3. Calculer le coût total à 12, 36 et 60 mois.
4. Valoriser rédaction, photos, collecte, validation, administration et suivi
   commercial réalisés par le dirigeant.
5. Détailler hébergement, domaine, licences, sauvegardes, maintenance,
   migration et changement de prestataire.
6. Remplacer la réserve générique par des sensibilités liées à des risques
   identifiés.
7. Distinguer Wix/Squarespace, WordPress.com, WordPress auto-hébergé, site
   statique et développement dédié.
8. Proposer une formule de valeur basée sur demandes, transformation et marge,
   sans inventer de performance.
9. Rendre auditable domaine, comptes, sauvegarde, RGPD, cookies, accessibilité
   et réversibilité, ou les exclure explicitement.
10. Déclarer dès l’ouverture que Hagnéré Code vend des sites et peut recommander
    une solution plus simple.
11. Rafraîchir les sources : la page France Num de prix est datée de 2025 ;
    relever les tarifs officiels actuels avant d’afficher « 2026 ».

### P2 hérités

- livrer une grille de comparaison et un calculateur TCO réellement
  téléchargeables ou copiables ;
- rendre visible le benchmark international avec devises, dates et biais ;
- synchroniser la date du registre seulement après réécriture validée ;
- vérifier Article, Breadcrumb et FAQ dans le HTML généré ;
- ajouter artisan local, PME multi-services, multilingue et refonte avec
  migration ;
- tester prix, encadrés, ancres et CTA de 320 à 1600 px ;
- préciser les contrôles accessibilité et conformité applicables ;
- mesurer séparément demande, rendez-vous, signature et marge.

## 4. Preuves réellement présentes et limites

| Source visible                                                                                                                                                                | Ce qu’elle soutient                                       | Limite                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| [France Num — combien payer pour un site web](https://www.francenum.gouv.fr/guides-et-conseils/developpement-commercial/site-web/combien-payer-pour-un-site-web-ou-un-site-e) | Deux estimations professionnelles relayées par France Num | Mise à jour 2025 ; échantillon et périmètres insuffisants pour une grille de marché 2026 |
| [Baromètre France Num 2025](https://www.francenum.gouv.fr/guides-et-conseils/strategie-numerique/comprendre-le-numerique/barometre-france-num-2025-le)                        | Part des TPE-PME interrogées disposant d’un site          | Ne détermine ni coût, ni qualité, ni retour sur investissement                           |

L’audit cite aussi des tarifs officiels WordPress.com et plusieurs pages
françaises, américaines, britanniques, australiennes et DACH. Ce corpus est
**hérité de l’audit**, **non rouvert** et ne doit pas devenir une preuve sans
date, passage utile, conversion de devise et adaptation au périmètre français.
La demande SEO quantitative est **non recherchée** dans cette reconstruction.

## 5. Chiffres et hypothèses

### Chiffres visibles dans la page

- autonome : `0–1 000 €` ;
- freelance : `800–3 000 €` ;
- agence standard : `2 000–6 000 €` ;
- conception plus complète : `6 000–15 000 €`, puis `15 000–30 000 €` ;
- domaine et hébergement présentés comme postes récurrents ;
- France Num est cité pour des estimations de `500–2 000 €` pour une page
  unique et `900–5 000 €` pour un site basique.

Les fourchettes Hagnéré sont annoncées comme hypothèses éditoriales. Il manque
encore le dénominateur commun qui permette au lecteur de comparer.

### Cas commun à construire

Le cas proposé par l’audit — **non validé et non intégré** — est un site B2B de
cinq pages, une langue, douze contenus de départ, un formulaire, mesure
d’audience, SEO de base, responsive et deux cycles de correction. Avant
publication, il faut confirmer que ce cas représente bien une décision
fréquente et ajouter au moins un artisan local et une PME plus exigeante.

Formule de valeur, à présenter comme scénario :

```text
valeur mensuelle estimée
= demandes qualifiées attribuables
× taux de transformation constaté ou hypothétique
× marge contributive moyenne
```

Chaque variable doit être étiquetée « observée », « fournie par le lecteur » ou
« hypothèse ». Aucun taux générique ne sera publié.

## 6. Comparaison à rendre décisionnelle

| Dimension          | Page actuelle                   | Correction attendue                                                  |
| ------------------ | ------------------------------- | -------------------------------------------------------------------- |
| Résultat acheté    | Plusieurs niveaux de prestation | Un périmètre identique et des critères de recette                    |
| Coût immédiat      | Fourchettes de création         | Acompte, contenus, licences et temps interne                         |
| Coût dans le temps | Postes récurrents listés        | TCO 12/36/60 et coût de sortie                                       |
| Autonomie          | Évoquée                         | Tâches mensuelles, formation, droits et remplacement                 |
| Valeur             | Rôle commercial du site         | Formule avec données du dirigeant et sensibilités                    |
| Réversibilité      | Présente partiellement          | Domaine, comptes, contenu, sauvegarde, export et redirections testés |

## 7. Pédagogie humaine et anti-IA

### Forces

- ouverture concrète sur le montant d’un devis ;
- vocabulaire généralement compréhensible ;
- explication des exclusions et du travail invisible ;
- position commerciale plutôt honnête et possibilité de choisir moins cher.

### Risques

- accumulation de fourchettes sans cas continu ;
- catégories qui semblent précises alors que leurs périmètres diffèrent ;
- conflit commercial déclaré trop tard ;
- conclusion qui doit transformer le tableau en décision, pas répéter ses
  colonnes.

La prochaine version suivra un dirigeant fictif mais clairement étiqueté, du
brief au coût à trois ans. Elle expliquera chaque sigle au premier usage,
variera prose, calcul et checklist, et soumettra les 150 premiers mots ainsi
que cinq phrases abstraites à un lecteur non technique. Ce test est
**non réalisé**.

## 8. Conversion

Le CTA peut proposer :

> « Comparer mes deux devis sur le même périmètre et repérer ce qui manque
> avant de signer. »

Le résultat annoncé doit être borné : une grille remplie, les exclusions, le
coût sur la durée, les risques de sortie et les questions à poser. Aucun audit
gratuit illimité, devis instantané ou résultat commercial ne doit être promis.
La page doit aussi donner l’action sans contact : remplir la même grille avec
les prestataires.

## 9. Reprise et revalidation

1. Refaire la recherche prix et concurrence, dater chaque page et expliquer la
   saturation du corpus.
2. Fixer trois scénarios et un périmètre égal.
3. Produire les TCO 12/36/60, la formule de valeur et les sensibilités.
4. Réécrire avec conflit commercial initial, cas continu, conformité et
   sortie.
5. Faire recalculer et revérifier par un agent indépendant.
6. Tester un lecteur réel, les largeurs 320–1600 px, les liens, le HTML
   structuré, le build et la route publique.

**Critère de sortie :** sources actuelles localisables, calculs refaits,
comparaison symétrique, zéro P0/P1 ouvert, P2 justifiés, compréhension réelle
consignée et snapshot corrigé validé. Aucun de ces défauts n’est fermé par ce
dossier.
