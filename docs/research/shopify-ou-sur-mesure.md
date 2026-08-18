# Dossier de recherche reconstitué — Shopify ou e-commerce sur mesure

> Ce dossier synthétise la page courante et le giga-audit du 24 juillet 2026.
> Il ne transforme ni les tarifs affichés, ni le benchmark concurrentiel, ni
> les hypothèses de calcul de l’audit en faits nouvellement vérifiés.

**Statut réel : brouillon à reprendre — comparatif de référence non validé.**

## Journal des quatre passes

| Passe                        | État        | Date       | Blocage                                                         |
| ---------------------------- | ----------- | ---------- | --------------------------------------------------------------- |
| 1. Recherche                 | À reprendre | 2026-07-25 | Tarifs, architecture, droit, marché et concurrence non rouverts |
| 2. Rédaction et intégration  | À reprendre | 2026-07-25 | Douze P1 et neuf P2 hérités restent ouverts                     |
| 3. Contre-audit indépendant  | Bloquée     | 2026-07-25 | Aucun TCO ni snapshot corrigé à recalculer                      |
| 4. Plume humaine et contrôle | Bloquée     | 2026-07-25 | Test lecteur, ressource et QA finale absents                    |

Propriétaire éditorial : **à nommer**.

## Snapshot et provenance

| Élément                                                             | Empreinte ou date                                                  | Limite                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `src/app/guides/shopify-ou-sur-mesure/page.tsx`                     | `413a1f1c1e34627d1b9444cfea85a0417fa1cc7c20d9e3f2512e4af9f364bf25` | Correspond au snapshot audité ; tarif et production non revérifiés |
| `docs/audits/giga-audit-2026-07-24/guides/shopify-ou-sur-mesure.md` | 24 juillet 2026                                                    | Benchmark et défauts hérités ; concurrence non rouverte            |
| `docs/charte-qualite-guides.md`                                     | `5ee616faa4959dc8ad2b0eb19a5b19ffbf53299b62665700093c5c176b0b8491` | Référentiel éditorial applicable                                   |
| `docs/workflow-maitre-guides-4-passes.md`                           | `a3a8c8f1be5d5d60b096f251f22b27ae5526adb708c334c4d6f0b7b4270c60c4` | États et portes applicables ; aucun manifeste créé                 |

## 1. Lecteur, phrase et décision

| Champ           | Cadrage                                                                                                                                      |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Lecteur         | Commerçant ou dirigeant dont la boutique standard commence à subir des règles métier, connexions ou ressaisies coûteuses                     |
| Déclencheur     | Shopify paraît simple mais contraignant ; une solution sur mesure paraît libre mais chère et risquée                                         |
| Phrase réelle   | « Faut-il continuer à adapter Shopify ou financer une autre architecture parce que nos règles métier et nos ressaisies coûtent trop cher ? » |
| Intention       | Décider si le problème vient réellement de la plateforme, de l’organisation ou d’un périmètre mal défini                                     |
| Promesse        | Comparer le même commerce sur la durée et identifier la variable qui justifie ou non une autre architecture                                  |
| Décision        | Améliorer Shopify, rester en Shopify natif, choisir WooCommerce/PrestaShop/Shopware, passer en headless, développer sur mesure ou reporter   |
| Action autonome | Lister les cinq opérations qui coûtent le plus de temps ou d’erreurs et les chiffrer avant de parler technologie                             |
| Hors périmètre  | Rentabilité garantie, disponibilité absolue, prix universel, conseil juridique ou choix imposé par le chiffre d’affaires seul                |

## 2. Couverture observée

La page actuelle :

- affirme honnêtement que Shopify est souvent le meilleur point de départ pour
  un commerce standard ;
- explique le prix de la simplicité et le coût de la personnalisation ;
- couvre Shopify Plus, headless, migration, exports, mots de passe, SEO,
  maintenance et propriété ;
- rappelle que le chiffre d’affaires seul ne décide pas de l’architecture ;
- aborde une lecture à trois ans, même si le calcul symétrique manque ;
- déclare des repères sur mesure comme estimations éditoriales et non comme
  médianes de marché ;
- propose d’examiner facture, applications et problèmes récurrents, avec la
  possibilité de recommander une amélioration de l’existant.

Le contenu donne une opinion utile, mais il ne compare pas encore des solutions
qui produisent le même résultat opérationnel.

## 3. Défauts hérités

### P0

Aucun P0 n’a été démontré au 24 juillet. Une commission, un plan, une limite
d’export ou une donnée de performance fausse pour la France et la date annoncée
ouvrirait un P0.

### P1

1. Figer un scénario égal : catalogue, variantes, commandes, panier, pays,
   paiement, stock, connexions, support, disponibilité et horizon.
2. Comparer Shopify natif, plateforme open source gérée, headless et
   sur-mesure dans la même matrice.
3. Calculer TCO 12/36/60 : mise en place, applications, abonnement,
   développement, contenu, opérations, cloud, support, maintenance et sortie.
4. Séparer paiement, transport, retours et acquisition communs des commissions
   ou limites propres à Shopify.
5. Archiver pays, devise, taxe, mensualité/annualité, date et preuve des tarifs,
   y compris Shopify Plus et frais tiers.
6. Modéliser trois, huit et quinze applications : coûts, doublons, permissions,
   données, dépendances et remplacement.
7. Chiffrer catalogue, stock, préparation, service client, retours et temps
   interne sur le même volume.
8. Traiter SEO, publicité, CRM, contenu, conversion et budget de lancement
   séparément du TCO technique.
9. Décrire la sortie : données non exportables, mots de passe, redirections,
   double exploitation et responsable de validation.
10. Comparer monitoring, sauvegarde, restauration, incident, niveau de service,
    perte de données tolérée et personne de reprise.
11. Ajouter les obligations B2C/B2B, cookies, données, rétractation,
    accessibilité, TVA et facturation selon le périmètre.
12. Compléter ce dossier par une vraie recherche datée, une méthode de
    benchmark, des passages de preuve et une matrice de gain d’information.

### P2

- calculer un seuil de bascule avec sensibilités ;
- tester paiement, rupture, synchronisation et restauration ;
- actualiser ou retirer l’étude de performance 2023 ;
- traiter des plateformes spécialisées seulement lorsque le cas l’exige ;
- chiffrer un pilote de dix fiches produit ;
- contrôler clavier, focus, recherche, panier, paiement et retour sur mobile ;
- traduire GMV, PSP, TCO, SLA, RPO, RTO et headless ;
- livrer un calculateur séparant coûts communs, spécifiques et sortie ;
- vérifier build, JSON-LD, liens, canonical, sitemap et production.

## 4. Preuves réellement présentes

| Source visible                                                                                                                                        | Usage                    | Limite                                                                |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ | --------------------------------------------------------------------- |
| [Shopify France — tarifs](https://www.shopify.com/fr/tarifs)                                                                                          | Plans et repères de prix | Page dynamique ; devise, taxe, périodicité et date à archiver         |
| [Shopify — fonctions B2B](https://help.shopify.com/en/manual/b2b/getting-started/plan-features)                                                       | Périmètre B2B            | Documentation éditeur ; plan et disponibilité à revalider             |
| [Shopify — export clients](https://help.shopify.com/en/manual/customers/import-export-customers)                                                      | Réversibilité partielle  | Un export clients ne couvre pas mots de passe, commandes, apps ni SEO |
| [Shopify — limite de variantes](https://changelog.shopify.com/posts/we-ve-increased-the-product-variant-limit-to-2048)                                | Évolution produit        | Changelog ponctuel ; fonctionnement réel et limites connexes à tester |
| [Shopify Performance — Liquid vs headless](https://performance.shopify.com/blogs/blog/liquid-vs-headless-a-look-at-real-user-web-performance)         | Contexte performance     | Source de l’éditeur, datée de 2023 ; aucune causalité universelle     |
| [Shopify Plus — pricing](https://www.shopify.com/plus/pricing)                                                                                        | Point d’entrée Plus      | Offre commerciale évolutive à vérifier                                |
| [FEVAD — bilan 2025](https://www.fevad.com/bilan-du-e-commerce-en-france-les-francais-ont-depense-pres-de-200-milliards-deuros-sur-internet-en-2025/) | Contexte marché          | Ne prouve ni besoin sur mesure ni rentabilité individuelle            |
| [Ecommerce Nation — baromètre CMS](https://www.ecommerce-nation.fr/barometre-cms-ecommerce-shopify-creations-prestashop-chiffre-affaires/)            | Contexte d’écosystème    | Méthode et biais à expliciter ; pas une preuve de supériorité         |

L’audit ajoute Stripe, WooCommerce, Service-Public, France Num, CNIL et un
benchmark France/international. Ces sources sont **héritées de l’audit** et
**non rouvertes**. Les concurrents étudiés par l’audit ne sont pas cités ici
comme preuves factuelles.

## 5. Chiffres et hypothèses

### Dans la page

- Shopify Basic, Grow et Advanced sont présentés à `25 €`, `66 €` et `289 €`
  par mois en facturation annuelle ;
- Shopify Plus est annoncé à partir de `2 100 €` par mois ;
- des frais de paiement et de transaction sont évoqués ;
- le sur-mesure est situé à `15 000–40 000 €` pour certaines connexions et
  `40 000–120 000 €` pour une plateforme plus complète.

Les montants sur mesure sont explicitement des **repères éditoriaux**. Tous les
tarifs Shopify sont **à rouvrir** avant republication.

### Hypothèses héritées de l’audit

L’audit propose un cas de `300 SKU`, `500 commandes par mois`, panier de
`62 €`, connexions et horizons 12/36/60. Il contient aussi des TCO
illustratifs. Ces données sont **non intégrées**, **non représentatives par
défaut** et **non validées**.

Le calcul final doit isoler :

```text
coûts communs au commerce
+ coûts propres à la plateforme
+ temps humain et erreurs
+ construction et évolutions
+ risque, maintenance et support
+ migration et sortie
= coût total du scénario
```

## 6. Comparaison à construire

| Question                  | Shopify natif                       | Plateforme gérée     | Headless          | Sur-mesure                          |
| ------------------------- | ----------------------------------- | -------------------- | ----------------- | ----------------------------------- |
| Même catalogue et volumes | Non figé aujourd’hui                | Non figé             | Non figé          | Non figé                            |
| Paiement comparable       | À recalculer                        | À recalculer         | À recalculer      | À recalculer                        |
| Opérations hebdomadaires  | Partiellement décrites              | À documenter         | À documenter      | À documenter                        |
| Maintenance et incident   | Responsabilité plateforme partielle | Répartition à écrire | Plusieurs couches | Responsabilité complète à écrire    |
| Sortie testée             | Exports partiels évoqués            | À éprouver           | À éprouver        | Code, données et comptes à éprouver |
| TCO 12/36/60              | Absent                              | Absent               | Absent            | Absent                              |

Cette matrice constate les manques ; elle n’émet pas encore de verdict.

## 7. Pédagogie humaine et anti-IA

### Forces

- opinion professionnelle explicite ;
- phrase utile : le chiffre d’affaires ne décide pas seul ;
- situations métier et coûts de ressaisie ;
- droit de conserver ou améliorer Shopify.

### Travail de plume

- ouvrir sur les opérations qui font perdre du temps, pas sur l’architecture ;
- définir « headless » comme la séparation de la vitrine et du moteur de
  commerce, uniquement lorsque cette notion aide la décision ;
- ne pas faire de chaque section un nouveau tableau ;
- accompagner chaque chiffre d’une conséquence et d’un contre-cas ;
- faire lire l’ouverture, le calcul et le verdict par un commerçant non
  technique. Test **non réalisé**.

## 8. Conversion

CTA proposé :

> « Examiner ma facture Shopify, mes applications et mes trois opérations les
> plus coûteuses pour savoir s’il faut améliorer, migrer ou ne rien changer. »

Le résultat doit préciser les postes observés, l’architecture recommandée, les
hypothèses, les exclusions et la première expérience à mener. Hagnéré Code vend
du sur-mesure : le conflit doit être déclaré tôt et le guide doit pouvoir
recommander Shopify, une plateforme existante ou un report.

## 9. Reprise et critères de sortie

1. Rafraîchir tarifs, droit, fonctionnalités et benchmark.
2. Fixer trois cas égaux et calculer coûts communs, spécifiques et humains.
3. Tester applications, paiements, opérations, incident et sortie.
4. Réécrire avec verdicts conditionnels et ressource autonome.
5. Faire recalculer et contre-auditer par un agent distinct.
6. Réaliser test lecteur, accessibilité, mobile, build, liens, données
   structurées et vérification de la route publique.

**Sortie :** zéro P0/P1, P2 traités ou motivés, preuves datées, TCO
reproductible, sortie éprouvée et snapshot corrigé contre-audité. Aucun défaut
n’est fermé par ce document.
