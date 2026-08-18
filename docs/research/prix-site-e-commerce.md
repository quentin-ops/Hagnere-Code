# Dossier de recherche reconstitué — Prix d’un site e-commerce

> Ce dossier reconstitue le cadrage P1 à partir de la page actuellement
> présente et du giga-audit du 24 juillet 2026. Il ne vaut ni nouvelle étude de
> concurrence, ni validation des prix, ni fermeture des défauts hérités.

**Statut réel : brouillon à reprendre — aucune porte validée.**

## Journal des quatre passes

Propriétaire éditorial unique : **à nommer avant reprise**.

| Passe                        | État        | Date       | Base examinée                          | Blocage réel                                                                     |
| ---------------------------- | ----------- | ---------- | -------------------------------------- | -------------------------------------------------------------------------------- |
| 1. Recherche                 | À reprendre | 2026-07-25 | Page + audit hérité du 24 juillet 2026 | Sources, prix, obligations et concurrence non rouverts dans cette reconstruction |
| 2. Rédaction et intégration  | À reprendre | 2026-07-25 | Brouillon public existant              | Douze P1 et neuf P2 hérités restent à traiter                                    |
| 3. Contre-audit indépendant  | Bloquée     | 2026-07-25 | Audit du brouillon seulement           | Aucune version corrigée à recalculer et contre-auditer                           |
| 4. Plume humaine et contrôle | Bloquée     | 2026-07-25 | Non exécutée                           | P3 non validée ; test lecteur et QA finale absents                               |

Les états ci-dessus suivent
[`workflow-maitre-guides-4-passes.md`](../workflow-maitre-guides-4-passes.md).
Le mot « P1 » désigne ailleurs une priorité de défaut ; il ne doit pas être
confondu avec la passe 1.

## Snapshot et provenance

| Élément                                                            | Empreinte ou date                                                  | Ce que cela prouve                                               | Limite                                                           |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `src/app/guides/prix-site-e-commerce/page.tsx`                     | `bec98af49e2873a39d11659f8b7cac28e92f82bf10673973fde329fa2a2927f6` | La page relue le 25 juillet correspond au snapshot audité        | Ne prouve ni le rendu public ni l’exactitude actuelle des tarifs |
| `docs/audits/giga-audit-2026-07-24/guides/prix-site-e-commerce.md` | audit daté du 24 juillet 2026                                      | Les défauts et le benchmark ci-dessous sont hérités de cet audit | Les pages concurrentes n’ont pas été rouvertes le 25 juillet     |
| `docs/charte-qualite-guides.md`                                    | `5ee616faa4959dc8ad2b0eb19a5b19ffbf53299b62665700093c5c176b0b8491` | Référentiel people-first relu                                    | Aucune conformité automatique du guide                           |
| `docs/workflow-maitre-guides-4-passes.md`                          | `a3a8c8f1be5d5d60b096f251f22b27ae5526adb708c334c4d6f0b7b4270c60c4` | États et portes applicables                                      | Aucun manifeste P1 à P4 n’est créé ici                           |

## 1. Cible, phrase réelle et décision

| Champ                                 | Cadrage                                                                                                                                                                     |
| ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Lecteur précis                        | Commerçant, dirigeant de TPE-PME ou porteur d’un commerce qui prépare une première boutique, une refonte ou une migration                                                   |
| Situation déclenchante                | Il reçoit des montants très différents et découvre que paiement, catalogue, acquisition et logistique ne sont pas toujours inclus                                           |
| Phrase qu’il pourrait réellement dire | « Combien faut-il vraiment prévoir pour lancer une boutique qui peut vendre sans découvrir après coup les coûts de paiement, de contenu, de logistique et d’acquisition ? » |
| Intention                             | Comprendre le budget complet, comparer quatre formes de réalisation et décider si le projet doit être lancé, simplifié ou reporté                                           |
| Promesse honnête                      | Montrer les postes qui font varier le coût et une méthode de calcul ; ne pas annoncer un prix universel ni une rentabilité garantie                                         |
| Décision après lecture                | Choisir entre configuration autonome, plateforme accompagnée, agence sur moteur existant et sur-mesure, puis fixer un budget à périmètre égal                               |
| Action autonome                       | Rassembler catalogue, volumes, panier, pays, paiements, flux, logistique, contenu, acquisition, responsabilités et horizon avant de demander des devis                      |
| Hors périmètre                        | Devis ferme, conseil juridique personnalisé, prévision de ventes certaine, classement universel des plateformes                                                             |

## 2. Couverture réellement observée dans la page

La page apporte déjà un socle utile :

- elle ouvre sur quatre situations reconnaissables : petite boutique,
  catalogue plus fourni, vente B2B et plateforme spécifique ;
- elle sépare création, fonctionnement, paiement, acquisition, catalogue,
  logistique et migration ;
- elle qualifie ses fourchettes comme des scénarios éditoriaux Hagnéré Code,
  et non comme des moyennes de marché ou un devis ;
- elle montre que le coût fixe par commande pèse davantage sur les petits
  paniers et propose une formule de frais de paiement ;
- elle demande de tester le parcours de la commande au remboursement ;
- elle peut conclure qu’un site vitrine, une plateforme standard ou un report
  est plus raisonnable qu’un développement complexe ;
- le CTA invite à préparer un budget complet et renvoie vers le kit de cahier
  des charges.

Cette couverture est **observée dans le fichier source**. La compréhension par
un lecteur réel, l’affichage mobile et la disponibilité publique n’ont pas été
revérifiés dans ce dossier.

## 3. Manques à corriger

### P0

Aucun P0 n’est démontré par l’audit hérité. Cela ne ferme pas la priorité :
un tarif, une obligation ou un calcul erroné au moment de la reprise ouvrirait
immédiatement un P0.

### P1 hérités de l’audit

1. **TCO 12/36/60 mois** : comparer autonome, SaaS, agence et sur-mesure avec
   les mêmes postes inclus et exclus.
2. **Scénario commun** : figer produits, variantes, commandes, panier, pays,
   devises, transporteurs, connexions, rôles, niveau de service et horizon.
3. **Matrice fonctionnelle** : catalogue, stock, B2B, abonnements, multicanal,
   paiement, exports, sécurité, sauvegardes, propriété, migration et dépendance.
4. **Autonomie réelle** : compter la configuration et valoriser le temps du
   dirigeant au lieu de présenter seulement les factures externes.
5. **Paiement reproductible** : contextualiser taux et fixe par panier, volume
   et mix de cartes, puis rouvrir chaque grille officielle.
6. **Rentabilité par commande** : dérouler marge, paiement, préparation,
   livraison, retours, coût d’acquisition et coûts fixes, avec un cas positif et
   un cas négatif.
7. **Acquisition** : chiffrer trafic existant, SEO progressif et publicité
   avec budget, conversion hypothétique, CAC plafond et période d’apprentissage.
8. **Logistique** : inclure préparation, emballage, zones, surcharges, retours,
   remboursements, casse, livraison offerte et temps salarié.
9. **Obligations datées** : distinguer B2C/B2B, produit/service, seuils et
   responsabilités avec sources officielles françaises.
10. **Ordonnance 2026-2** : vérifier sa portée, relier le texte, le décret et la
    fiche Service-Public, puis obtenir une relecture compétente.
11. **Preuves et provenance** : compléter ce dossier par une vraie recherche
    datée, des extraits, niveaux de confiance et captures lorsque nécessaires.
12. **Réversibilité** : couvrir produits, clients, commandes, domaine,
    redirections, sauvegardes, accès, code et procédure de sortie.

### P2 hérités de l’audit

- échéancier de trésorerie avant la première commande ;
- sensibilités sur panier, commandes, retours, conversion, acquisition et
  applications ;
- alternatives métier conditionnelles comme Shopware, JTL ou BigCommerce ;
- pilote chiffré de dix fiches produit, photos et traductions ;
- recette accessibilité sur recherche, panier, paiement, erreurs et retours ;
- mesure analytics, consentement, recherche interne et panier abandonné ;
- vraie vérification des tableaux de 320 à 1600 px ;
- FAQ décisionnelle sans répétition, dont « quand ne pas créer de boutique » ;
- QA technique, structurée, liens, build, route et production.

## 4. Preuves et sources réellement présentes

| Source visible dans la page                                                                                                                                              | Usage observé                      | Limite à conserver                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------- | ----------------------------------------------------------------------------------- |
| [Shopify France — tarifs](https://www.shopify.com/fr/tarifs)                                                                                                             | Abonnements et contexte plateforme | Page dynamique ; pays, devise, taxes, paiement annuel et date doivent être archivés |
| [Stripe France — tarifs](https://stripe.com/fr/pricing)                                                                                                                  | Exemple de frais de paiement       | Ne représente ni toutes les cartes ni tous les moyens de paiement                   |
| [Mollie — tarifs France](https://www.mollie.com/fr/pricing)                                                                                                              | Comparaison de paiement            | Grille à rouvrir par moyen de paiement                                              |
| [PayPlug — tarifs](https://www.payplug.com/fr/tarifs/)                                                                                                                   | Comparaison de paiement            | Offre et conditions commerciales variables                                          |
| [PayPal — frais professionnels](https://www.paypal.com/fr/business/paypal-business-fees)                                                                                 | Comparaison de paiement            | Complexité de la grille ; ne pas réduire à un seul taux                             |
| [FEVAD — bilan e-commerce 2025](https://www.fevad.com/bilan-du-e-commerce-en-france-les-francais-ont-depense-pres-de-200-milliards-deuros-sur-internet-en-2025/)         | Contexte de marché                 | Ne prouve pas la demande ni la rentabilité du projet du lecteur                     |
| [Service-Public — facturation électronique](https://entreprendre.service-public.gouv.fr/actualites/A15683)                                                               | Calendrier général                 | Applicabilité à qualifier selon entreprise et flux                                  |
| [France Num — accessibilité e-commerce](https://www.francenum.gouv.fr/guides-et-conseils/developpement-commercial/site-e-commerce/accessibilite-des-sites-de-e-commerce) | Introduction à l’accessibilité     | Ne remplace ni audit ni conseil juridique                                           |

L’audit mentionne aussi Service-Public sur le commerce électronique, la
DGCCRF, Légifrance, WooCommerce et plusieurs comparatifs étrangers. Ces
éléments sont **hérités de l’audit** et **non rouverts** dans cette
reconstruction. Aucun volume de recherche ni classement concurrentiel n’a été
mesuré ici.

## 5. Chiffres, hypothèses et calculs

### Ce que la page affiche

- création : `1 500–5 000 €`, `5 000–18 000 €`, `15 000–50 000 €` et
  `45 000–120 000 €+` selon quatre niveaux de projet ;
- migration limitée autour de `5 000 €` et migration plus complexe entre
  `15 000 et 50 000 €` ;
- exemple de panier à `62 €` ;
- taux et montants fixes issus de grilles de paiement visibles.

Ces valeurs sont annoncées dans la page comme **repères éditoriaux**, non comme
tarifs de marché. Leur périmètre, leur fraîcheur et leur reproductibilité
restent à consolider.

### Hypothèses proposées par l’audit, non intégrées et non validées

L’audit propose un cas commun avec catalogue, variantes, commandes, panier,
pays, transporteurs, connexions et horizon 12/36/60 mois. Il propose également
des scénarios de trafic et un calcul complet par commande. Ce sont des
**hypothèses de travail héritées**, pas des données observées ni des résultats
à publier tels quels.

Tout futur calcul doit montrer :

```text
marge contributive par commande
- frais de paiement
- préparation et emballage
- part de livraison financée
- retours, remboursements et casse
- coût d’acquisition attribuable
- quote-part des coûts fixes
= contribution nette estimée
```

Le contrôle indépendant devra refaire chaque multiplication, vérifier les
unités, expliciter la TVA et tester au moins une situation défavorable.

## 6. Comparaison à construire

| Question du dirigeant                  | Réponse actuelle                        | Manque vérifiable                                                       |
| -------------------------------------- | --------------------------------------- | ----------------------------------------------------------------------- |
| Que dois-je acheter ?                  | Quatre familles de projet               | Même boutique et mêmes responsabilités pour les quatre options          |
| Combien cela coûte sur la durée ?      | Création et postes récurrents dispersés | TCO 12/36/60, trésorerie et sortie                                      |
| Quand le sur-mesure devient-il utile ? | Cas de complexité décrits               | Seuils liés aux règles métier, ressaisies, incidents et manque à gagner |
| Ma boutique peut-elle être rentable ?  | Postes et panier illustratif            | Calcul complet, sensibilités et aucune promesse de ventes               |
| Puis-je changer de solution ?          | Migration évoquée                       | Export restauré, redirections testées, accès et double exploitation     |
| Qui fait le travail chaque semaine ?   | Plusieurs tâches listées                | Temps interne, responsables, remplacement et niveau de service          |

## 7. Signaux humains et passe anti-IA

### À conserver

- situations de commerçants reconnaissables plutôt qu’une entrée technique ;
- traduction des coûts en décisions et non en catalogue de fonctionnalités ;
- droit explicite de choisir plus simple ou de ne pas lancer la boutique ;
- prudence sur les fourchettes et absence de promesse de chiffre d’affaires.

### À corriger

- éviter l’enchaînement de tableaux sans verdict immédiat ;
- remplacer « acquisition », « TCO », « SLA », « PSP » ou « lock-in » par une
  explication au premier emploi ;
- faire suivre chaque calcul de « ce que cela change pour votre décision » ;
- varier la progression : récit d’un budget qui se révèle, calcul guidé,
  test de sortie, puis verdict, plutôt qu’une succession uniforme de listes ;
- faire relire les 150 premiers mots et cinq phrases abstraites par une personne
  non technique. Ce test est **non réalisé**.

## 8. Conversion loyale

Le bon CTA ne promet pas un prix immédiat. Il peut proposer :

> « Vérifier le budget complet de ma boutique à partir de mon catalogue, de mes
> volumes et de mes contraintes. »

Le lecteur doit savoir ce qu’il reçoit : un périmètre de comparaison, les
postes manquants, les hypothèses à confirmer et, si pertinent, une
recommandation de solution plus simple. Hagnéré Code vend des développements
et doit déclarer ce conflit d’intérêt avant le comparatif, tout en conservant
la possibilité de recommander une plateforme standard, un site vitrine ou un
report.

## 9. Prochaine correction et critères de revalidation

1. Rouvrir la passe 1 : recherche France et internationale datée, sources
   primaires, obligations, prix officiels et matrice de gain d’information.
2. Figer trois scénarios à périmètre égal et produire les calculs 12/36/60,
   paiement, rentabilité, trésorerie et sensibilités.
3. Réécrire la page en langage dirigeant, intégrer comparaison, logistique,
   acquisition, conformité, sortie et ressource réellement utilisable.
4. Faire contre-auditer par un agent distinct : sources rouvertes, calculs
   refaits, matrices symétriques, P0/P1/P2 numérotés.
5. Après corrections, faire la passe plume, un test lecteur réel et la QA
   320–1600 px, liens, données structurées, build et route publique.

**Porte de sortie :** aucun P0 ni P1 ouvert, chaque P2 accepté ou justifié,
preuves datées près des affirmations, calculs reproductibles, test lecteur
consigné et snapshot corrigé contre-audité. Ce dossier ne ferme actuellement
aucun défaut.
