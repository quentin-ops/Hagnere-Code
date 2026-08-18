# Dossier de recherche reconstitué — WooCommerce ou Shopify

> Ce dossier reprend les constats de la page et du giga-audit du
> 24 juillet 2026. L’état « FERMÉE » utilisé dans l’audit pour la porte P1
> signifiait que la porte était bloquée, pas validée. L’état conforme au
> workflow est donc ici **À reprendre**.

**Statut réel : brouillon à reprendre — aucune porte validée.**

## Journal des quatre passes

| Passe                        | État        | Date       | Blocage                                                                 |
| ---------------------------- | ----------- | ---------- | ----------------------------------------------------------------------- |
| 1. Recherche                 | À reprendre | 2026-07-25 | Dossier seulement reconstitué ; tarifs, droit et benchmark non rouverts |
| 2. Rédaction et intégration  | À reprendre | 2026-07-25 | Onze P1 et neuf P2 hérités restent ouverts                              |
| 3. Contre-audit indépendant  | Bloquée     | 2026-07-25 | Aucun calcul ni snapshot corrigé à revalider                            |
| 4. Plume humaine et contrôle | Bloquée     | 2026-07-25 | Test commerçant et QA finale absents                                    |

Propriétaire éditorial : **à nommer**.

## Snapshot et provenance

| Élément                                                              | Empreinte ou date                                                  | Portée                                                             |
| -------------------------------------------------------------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `src/app/guides/woocommerce-ou-shopify/page.tsx`                     | `01cd0b4461f4c6b01b4f387f0461a8da6b50122504a0da8507dea1b4b783a236` | Même snapshot que l’audit ; route publique actuelle non revérifiée |
| `docs/audits/giga-audit-2026-07-24/guides/woocommerce-ou-shopify.md` | 24 juillet 2026                                                    | Défauts, benchmark et contrôles historiques hérités                |
| `docs/charte-qualite-guides.md`                                      | `5ee616faa4959dc8ad2b0eb19a5b19ffbf53299b62665700093c5c176b0b8491` | Règles de valeur et de preuve                                      |
| `docs/workflow-maitre-guides-4-passes.md`                            | `a3a8c8f1be5d5d60b096f251f22b27ae5526adb708c334c4d6f0b7b4270c60c4` | États officiels ; aucun manifeste créé                             |

L’audit indique un contrôle historique de la route publique, de l’index/follow
et de plusieurs largeurs. Ce contrôle ne prouve ni l’identité cryptographique
du build actuel, ni Search Console, ni la production du 25 juillet. Il n’est
pas revendiqué comme vérification courante.

## 1. Lecteur, phrase et décision

| Champ           | Cadrage                                                                                                                                                |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Lecteur         | Commerçant ou dirigeant qui doit choisir une boutique administrable sans devenir technicien                                                            |
| Déclencheur     | WooCommerce semble libre et « gratuit » ; Shopify semble simple mais facturé et plus fermé                                                             |
| Phrase réelle   | « Qui va s’occuper de la boutique chaque semaine, combien coûtera-t-elle vraiment et que pourrai-je récupérer si je pars ? »                           |
| Intention       | Choisir une répartition de responsabilités et un coût complet, pas une marque                                                                          |
| Promesse        | Comparer le même commerce, ses opérations, ses paiements, sa maintenance et sa sortie                                                                  |
| Décision        | Garder WooCommerce, choisir Shopify, améliorer l’existant, utiliser le module d’un logiciel métier, une plateforme spécialisée ou cadrer du sur-mesure |
| Action autonome | Rassembler douze mois de factures, volumes, moyens de paiement, applications/extensions, temps interne et exports                                      |
| Hors périmètre  | Rentabilité garantie, recommandation juridique, tarif immuable ou classement général des plateformes                                                   |

## 2. Couverture observée

La page :

- donne une opinion claire sans présenter un faux duel ;
- compare surtout les responsabilités et les opérations, plutôt que les
  technologies ;
- rappelle que WooCommerce sans licence principale n’est pas une boutique à
  coût nul ;
- traite catalogue, stock, commandes, paiements, maintenance et retours ;
- évoque migration, exports, domaine et solution tierce ;
- conserve la possibilité de recommander l’amélioration de l’existant ou une
  plateforme standard plutôt qu’un développement ;
- publie une formule de frais annuels, mais pas encore son application complète.

Le guide protège déjà contre plusieurs erreurs d’achat. Il ne montre pas encore
combien coûte la même boutique dans les deux options.

## 3. Défauts hérités

### P0

Aucun P0 n’a été démontré sur le snapshot. Un taux France faux ou une procédure
de migration entraînant une perte non signalée ouvrirait un P0.

### P1

1. Compléter ce dossier avec phrase, périmètre, sources primaires, benchmark,
   captures de prix et journal de calcul.
2. Figer catalogue, commandes, panier, pays, cartes, logistique, point de vente,
   connexions, support, disponibilité, contenu, migration et horizon.
3. Calculer construction, abonnement/hébergement, applications/extensions,
   paiement, support, maintenance, temps interne et sortie à 12/36/60 mois.
4. Séparer frais de paiement communs, commissions Shopify, cartes, change,
   remboursements, litiges et fonctions incluses.
5. Archiver pays, devise, HT/TTC, mensuel/annuel, plan, date et capture des
   tarifs France.
6. Donner un panier WooCommerce réaliste : hébergement, licences, sauvegardes,
   sécurité, monitoring, maintenance et temps humain.
7. Chiffrer contenu, commandes, retours, support, rapprochement, ressaisies,
   acquisition et erreurs au même volume.
8. Éprouver les migrations dans les deux sens : mots de passe, abonnements,
   paiement, avis, avoirs, données, SEO, double exploitation et arrêt.
9. Comparer monitoring, sauvegarde, restauration, incident, astreinte, perte de
   données tolérée, délai de reprise et remplaçant.
10. Ajouter consommation, données/cookies, accessibilité, TVA/facturation et
    sécurité avec sources officielles et limite de conseil général.
11. Faire recalculer les totaux et revalider plans, taux, liens, exports et
    comparables par un agent indépendant.

### P2

- traiter PrestaShop, Shopware, plateforme sectorielle ou module métier lorsque
  leurs critères d’entrée sont réunis ;
- afficher l’effet du volume encaissé, panier, cartes, applications et temps
  humain sur le verdict ;
- couvrir langues, devises, taxes, douanes, moyens locaux et retours
  transfrontaliers ;
- chiffrer un pilote de dix fiches, photos, catégories, recherche et filtres ;
- fournir une feuille séparant coûts communs, plateforme, humains et sortie ;
- traduire GMV, PSP, TCO, POS, SLA, RPO et RTO au premier emploi ;
- borner CTA, pièces nécessaires, délai indicatif et absence de garantie ;
- tester commande fictive, erreurs, clavier, focus, tableaux et mobile ;
- suivre tarifs, liens, Search Console, engagement et conversions sans
  promettre de classement.

## 4. Preuves réellement présentes

| Source visible                                                                                                                  | Usage                             | Limite                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- | ------------------------------------------------------------------------------------ |
| [Web Almanac 2025 — e-commerce](https://almanac.httparchive.org/en/2025/ecommerce)                                              | Contexte d’usage des plateformes  | Échantillon web ; ne mesure pas le coût ni le meilleur choix                         |
| [Patchstack — sécurité WordPress 2026](https://patchstack.com/whitepaper/state-of-wordpress-security-in-2026/)                  | Risques de l’écosystème WordPress | Source d’un acteur sécurité ; périmètre à expliquer                                  |
| [Wordfence — rapport sécurité 2024](https://www.wordfence.com/blog/2025/04/2024-annual-wordpress-security-report-by-wordfence/) | Contexte vulnérabilités           | Données historiques et source commerciale                                            |
| [Shopify — migration depuis WooCommerce](https://help.shopify.com/en/manual/migrating-to-shopify/migrating-from-woocommerce)    | Étapes vers Shopify               | Documentation éditeur ; ne couvre pas nécessairement toute donnée ni le sens inverse |
| [Shopify France — tarifs](https://www.shopify.com/fr/tarifs)                                                                    | Plans et frais annoncés           | Page dynamique à archiver avec pays, devise, taxe et période                         |
| [WooCommerce — Subscriptions](https://woocommerce.com/products/woocommerce-subscriptions/)                                      | Exemple d’extension payante       | Un produit ne représente pas le panier réel d’extensions                             |
| [Stripe France — tarifs](https://stripe.com/fr/pricing)                                                                         | Exemple de frais de paiement      | Mix de cartes et services à revalider                                                |
| [PayPlug — tarifs](https://www.payplug.com/fr/tarifs)                                                                           | Exemple de paiement français      | Offre et conditions variables                                                        |

L’audit ajoute les documentations WooCommerce, des checklists Shopify, la CNIL,
Service-Public, DGCCRF et un benchmark France/États-Unis/Royaume-Uni/Australie/
DACH. Ces éléments sont **hérités de l’audit** et **non rouverts**.

## 5. Chiffres et hypothèses

### Dans la page

- Shopify Basic, Grow et Advanced : `25 €`, `66 €`, `289 €` par mois en
  annuel, et `36 €`, `105 €`, `384 €` en mensuel au relevé indiqué ;
- POS Pro : `79 €` par mois et par emplacement ;
- exemple Shopify Payments : `2,1 % + 0,30 €` ;
- exemple Stripe : `1,5 % + 0,25 €` ;
- exemple PayPlug : `1,1 % + 0,25 €` avec abonnement indiqué.

Ces montants doivent être **rouverts et archivés**. Ils ne sont pas directement
comparables sans mêmes cartes, volumes et services.

### Hypothèses héritées

L’audit propose un cas central de `300 SKU`, `500 commandes/mois`, panier
`62 €`, volume annuel `372 000 €`, un point de vente et deux transporteurs. Il
calcule des frais et TCO illustratifs. Ce cas est **non représentatif par
défaut**, **non intégré** et **non validé**.

Formule à conserver et appliquer :

```text
frais annuels de paiement
= taux × chiffre encaissé
+ montant fixe × transactions
+ abonnements
+ éventuels frais propres à la plateforme
```

Le contrôle doit aussi couvrir cartes internationales, remboursements,
litiges, change, fraude, délai de versement et fonctions incluses.

## 6. Comparaison à périmètre égal

| Dimension     | Shopify                        | WooCommerce géré                                | Preuve à produire                          |
| ------------- | ------------------------------ | ----------------------------------------------- | ------------------------------------------ |
| Construction  | Non comparable aujourd’hui     | Non comparable aujourd’hui                      | Même catalogue, design, données et recette |
| Paiement      | Taux visibles mais hétérogènes | PSP choisi séparément                           | Calcul sur le même mix de cartes           |
| Exploitation  | Plateforme plus intégrée       | Responsabilités distribuées                     | Temps réel par opération                   |
| Maintenance   | Infrastructure en partie gérée | Hébergement, extensions et sécurité à organiser | Incident et restauration testés            |
| Sortie        | Exports partiels               | Accès plus direct mais migration à réaliser     | Export restauré dans une cible             |
| Coût 12/36/60 | Absent                         | Absent                                          | Calcul indépendant et sensibilités         |

## 7. Pédagogie humaine et anti-IA

### Forces

- jugement professionnel sans caricature ;
- entrée par « qui s’en occupe ? » ;
- troisième voie et droit de ne pas migrer ;
- coûts invisibles nommés.

### Corrections

- suivre une commande, un retour, une mise à jour produit et un incident dans
  les deux solutions ;
- traduire les sigles une fois, puis revenir aux mots du commerçant ;
- montrer les additions ligne par ligne et leur effet sur la décision ;
- éviter une série de tableaux identiques ;
- faire tester le scénario et le CTA par un commerçant non technique.

Ce test humain est **non réalisé**.

## 8. Conversion

CTA proposé :

> « Comparer ma boutique sur douze mois à partir de mes factures, commandes,
> applications, extensions et temps interne. »

Le résultat annoncé doit être une feuille de coût, les risques de continuité,
une preuve de sortie à préparer et une recommandation bornée. Hagnéré Code doit
pouvoir recommander de garder WooCommerce, choisir Shopify ou ne pas lancer de
sur-mesure.

## 9. Reprise et revalidation

1. Rouvrir tarifs, droit, exports et benchmark.
2. Figer trois commerces à périmètre égal.
3. Calculer paiement, opérations, incidents et TCO 12/36/60.
4. Tester une migration dans chaque sens et une restauration.
5. Réécrire puis faire contre-auditer par un agent différent.
6. Faire le test lecteur, la commande fictive, l’accessibilité, le responsive,
   les liens, le build, les données structurées et la route publique.

**Porte de sortie :** zéro P0/P1, P2 traités ou justifiés, sources datées,
calculs refaits, migrations éprouvées et snapshot corrigé contre-audité. Aucun
défaut n’est fermé ici.
