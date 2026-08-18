# Giga-audit — « Prix d’un site e-commerce en 2026 »

**Date de l’audit :** 24 juillet 2026  
**Mode :** audit éditorial, factuel, concurrentiel et SEO — lecture seule  
**Route auditée :** `/guides/prix-site-e-commerce`  
**Fichier inspecté :** `src/app/guides/prix-site-e-commerce/page.tsx`  
**Empreinte du fichier au contrôle :** `bec98af49e2873a39d11659f8b7cac28e92f82bf10673973fde329fa2a2927f6`  
**Date publiée dans le registre :** 16 juillet 2026  
**Date modifiée dans le registre :** 21 juillet 2026  
**Dossier de recherche dédié trouvé :** non (`docs/research/prix-site-e-commerce.md` absent).

> **Périmètre.** Aucun fichier de page, registre, manifeste ou configuration n’a été modifié. Les montants proposés ci-dessous sont des hypothèses d’audit à faire valider en passe P1 puis à réécrire en « exemple illustratif » dans l’article ; ils ne sont ni un devis ni une moyenne de marché.

## 1. Verdict exécutif

Le guide est **nettement au-dessus d’un article SEO générique** : il parle au commerçant, sépare création, fonctionnement, paiement, acquisition, catalogue, logistique et migration, utilise quatre situations concrètes, donne une formule de marge par commande et cite des pages officielles. L’introduction répond déjà à la question « combien prévoir ? » et prévient correctement qu’un site moins cher à fabriquer peut coûter plus cher à exploiter.

Il ne mérite toutefois pas encore un statut de référence « meilleur du meilleur ». Le défaut central est mesurable : le guide demande une comparaison sur trois ans mais ne fournit pas encore de **TCO (coût total de possession) 12/36/60 mois**, à périmètre identique, entre **DIY, SaaS, agence sur solution existante et sur-mesure**. Les frais de paiement sont listés, mais le lecteur ne peut pas encore calculer une facture comparable selon son panier, son volume de commandes et son mix de moyens de paiement. La partie rentabilité nomme les bons postes sans dérouler un calcul chiffré complet.

La section « obligations » est trop prudente et trop condensée pour une décision de mise en ligne. Elle doit distinguer ce qui est obligatoire pour toute vente à distance, ce qui dépend du B2C/B2B, du produit et de la taille de l’entreprise, et ce qui doit être validé par un juriste. La référence à l’ordonnance n° 2026-2 est réelle, mais le texte officiel est intitulé « commercialisation à distance de services financiers » : l’article doit expliquer que la nouvelle fonctionnalité de rétractation en ligne résulte de la modification de l’article L. 221-21 et vérifier sa portée générale avec la fiche Service-Public, au lieu de laisser une note juridique isolée en fin de page.

**Score actuel : 82/100 — NO-GO au standard renforcé tant que les P1 restent
ouverts ; page d'orientation déjà exploitable, pas encore version étalon.**

- **P0 bloquant : 0** — aucune erreur factuelle critique démontrée dans le périmètre inspecté.
- **P1 avant version de référence : 12** — décisions, TCO, preuves et obligations encore insuffisamment actionnables.
- **P2 à traiter pour dépasser 90 : 9** — enrichissements de sensibilité, UX, comparaison et instrumentation.

## 2. Ce que le lecteur comprend déjà bien

### Forces de pédagogie

- Les 150 premiers mots s’adressent à une personne qui veut « vendre en ligne » et non à un développeur. Ils donnent une fourchette, puis expliquent pourquoi le devis ne suffit pas.
- Les quatre scénarios sont reconnaissables : créatrice avec 35 produits, commerçant avec 300 références et stock magasin, distributeur B2B avec tarifs par client, entreprise avec marketplace ou parcours très spécifique.
- Les mots techniques utiles sont traduits : thème, prestataire de paiement, headless, catalogue, migration.
- Le lecteur est invité à demander qui fournit, corrige, importe, teste et maintient. C’est une excellente protection contre le devis « installation Shopify » sans responsabilité.
- Le calcul « chiffre d’affaires payé × taux + montant fixe par commande » est simple et juste comme première approximation. Le rappel sur le poids du fixe pour les petits paniers est particulièrement utile.
- Le parcours d’une commande jusqu’au remboursement et l’échantillon de dix produits sont des conseils opérationnels que la plupart des comparatifs oublient.

### Forces de décision et de conversion

- La page ne pousse pas mécaniquement le sur-mesure : elle recommande plateforme, hybride ou spécifique selon les règles métier et les contournements.
- Le CTA promet un résultat concret : séparer budget de départ, fonctionnement et postes commerciaux avant le devis.
- Les liens vers Shopify/WooCommerce, la maintenance, le cahier des charges et l’e-commerce sur mesure forment un parcours commercial cohérent, sans promettre une rentabilité.
- Le texte rappelle qu’un lecteur peut conclure qu’une boutique est inutile (site vitrine), ce qui renforce la crédibilité.

## 3. Limites constatées sur la page

1. **Promesse TCO non tenue.** La FAQ demande une comparaison sur trois ans et le texte dit « comparez sur trois ans », mais aucune table 12/36/60 ne met les quatre modes d’achat sur le même périmètre.
2. **Périmètre non gelé.** Les exemples changent le catalogue, le métier, les intégrations et les volumes. Cela explique les fourchettes mais ne permet pas de décider entre options.
3. **DIY absent comme option explicite.** La page oppose surtout Shopify, WooCommerce, PrestaShop et spécifique. Le dirigeant qui configure lui-même un SaaS, ou qui paie seulement une aide au démarrage, doit être ajouté au comparatif.
4. **Comparaison fonctionnelle incomplète.** Il manque une matrice égale sur catalogue/variantes, stock, commandes, B2B, abonnements, retrait magasin, transporteurs, paiement, multi-pays, export des données, SLA, sécurité, sauvegardes et sortie.
5. **Paiement trop statique.** « Environ » et les taux datés sont utiles, mais le tableau ne donne pas la carte standard/premium, le pays d’émission, le change, les remboursements, les litiges, le paiement récurrent, la TVA ou le volume négocié. Le chiffre PayPal doit être relu sur la grille correspondant au compte et au moyen de paiement.
6. **Rentabilité non calculée.** Le panier de 62 € est cité mais aucune ligne ne montre le résultat après marge produit, paiement, préparation, livraison, retour et acquisition. Le lecteur ne sait pas quel CAC maximal il peut accepter.
7. **Acquisition sans enveloppe.** SEO, Ads, email, partenariats et marketplaces sont cités sans scénario chiffré de lancement, de montée en charge ou de coût par commande.
8. **Logistique sans reversibilité.** Il manque les frais de préparation, emballage, assurance, surcharges carburant, zones, livraison gratuite, colis non remis, retours, remboursements et temps humain.
9. **Obligations trop comprimées.** Mentions légales, CGV, droit de rétractation, formulaire, fonctionnalité de rétractation en ligne, livraison, garanties, médiation, cookies, RGPD, accessibilité et facturation électronique ne sont pas séparés par déclencheur et responsable.
10. **Passage juridique à sécuriser.** L’ordonnance n° 2026-2 du 5 janvier 2026 est officiellement relative aux services financiers, tout en modifiant L. 221-21 pour les contrats à distance. Il faut relier le texte à Légifrance et à Service-Public, préciser la date du 19 juin 2026 et ne pas transformer cette explication en conseil juridique.
11. **Preuve commerciale insuffisante.** Les fourchettes de création et de maintenance sont explicitement éditoriales, ce qui est honnête, mais elles ne sont reliées à aucun livrable, nombre d’heures, rôle ou historique vérifiable. La page doit distinguer « repère interne » et tarifs effectivement proposés par Hagnéré Code.
12. **Qualité de mise en production non vérifiée dans cet audit.** Le code contient Article et Breadcrumb JSON-LD, canonical et métadonnées ; aucun build, navigateur réel, écran 320–1600 px, validation de tableau mobile, test de lien ou contrôle de sitemap n’a été exécuté ici.

## 4. Benchmark de couverture — France et international

Le benchmark sert à détecter les angles manquants, pas à recopier les chiffres d’entreprises étrangères. Les monnaies, taxes, droit de la consommation, transport et coûts de main-d’œuvre ne sont pas transposables tels quels.

| Marché / ressource consultée | Ce qu’elle fait mieux ou différemment | Ce que Hagnéré doit en tirer |
|---|---|---|
| **France — Service-Public Entreprendre, vérifié 19 juin 2026** | Détaille paiement, délai de rétractation de 14 jours, exceptions, fonctionnalité de rétractation en ligne, accusé de réception et sanctions. | Transformer la section obligations en checklist par type de vente et relier chaque point à une source officielle. |
| **France — France Num, accessibilité e-commerce** | Explicite le périmètre des grands groupes et des PME de plus de 10 salariés dépassant 2 M€ CA ou bilan pour les services B2C. | Donner le déclencheur, l’échéance et la limite de portée, plutôt que « certains services sont concernés ». |
| **France — FEVAD, bilan 2025** | Apporte une mesure macro du marché (196,4 Md€ dépensés en ligne en 2025). | Conserver la donnée, mais l’opposer à une marge par commande : taille du marché ≠ rentabilité du projet. |
| **US — WooCommerce, tarification officielle** | Affiche plateforme gratuite, hébergement indicatif 25–350 $/mois, extensions 29–299 $/an et exemples TCO de marchands avec paiement séparé. | Ajouter les coûts par nature, un TCO et la différence entre coût de solution et coût variable de paiement. Les chiffres US restent des exemples non transposables. |
| **UK — Cambria Digital, guide du 16 juin 2026** | Donne un découpage Shopify/WooCommerce/custom, catalogue, inclusions, TCO trois ans et signaux de devis incomplet. | Ajouter une vraie table 3 ans et une liste de red flags ; conserver les devis en euros et les tarifs français séparément. |
| **UK — North Labs, guide 2026** | Montre l’effet des frais de transaction sur 200 000 £ de CA et oppose coût de maintenance WooCommerce au coût de plateforme. | Faire le même calcul avec le panier et le volume du lecteur, en distinguant frais de plateforme et frais du PSP. |
| **Australie — Blu Mint Digital, mis à jour 15 juillet 2026** | Table Shopify/WooCommerce/custom avec build, abonnement, paiement, ownership et total première année. | Ajouter ownership/lock-in, un total première année et l’hypothèse derrière chaque ligne. |
| **Australie — Pryce Digital, 30 mai 2026** | Distingue DIY, reskin freelance, studio, Shopify Plus et headless ; chiffre les coûts « que personne ne cite » et le seuil de pertinence du Plus. | Nommer clairement DIY, reskin, agence, Plus et sur-mesure ; ne pas appeler « custom » un simple thème adapté. |
| **DACH — PHM Connect, mis à jour 2026** | Compare Shopify, WooCommerce, Shopware et JTL avec licence, setup, complexité, audience et heures à 99 €/h. | Ajouter Shopware/JTL comme options à examiner pour B2B, stock et multicanal ; expliciter heures/rôles au lieu de seules fourchettes. |

**Gain d’information à viser :** les concurrents donnent généralement une fourchette ou une comparaison de plateformes ; aucun des extraits étudiés ne fournit simultanément, pour un commerce français, le même panier/catalogue/volume, un TCO 12/36/60, les frais de paiement à la commande, la marge après retours/CAC, le déclencheur juridique et une checklist de sortie. C’est l’angle différenciant à construire.

## 5. Comparaison à périmètre égal à ajouter

La prochaine version doit figer un cas principal avant de comparer. Exemple illustratif à annoncer comme tel : **250 produits, 500 commandes/mois, panier moyen 62 €, une devise et un pays, deux transporteurs, carte EEE + PayPal, deux applications (avis et email), un administrateur et un responsable commercial, import d’un catalogue existant, support en heures ouvrées, horizon 12/36/60 mois**. Les coûts de stock, produit et expédition sont affichés à part mais utilisent exactement les mêmes hypothèses.

| Option | Ce qui est réellement acheté | Ce qui doit être chiffré dans le même scénario | Question de décision |
|---|---|---|---|
| **DIY SaaS** | Le dirigeant configure un thème et les produits ; aide ponctuelle seulement | abonnement, apps, thème, temps interne, incidents, sauvegardes/export, conformité, limites du support | Le temps du dirigeant vaut-il moins que l’aide externe ? |
| **SaaS accompagné** | Shopify ou équivalent, configuré par un prestataire | setup, migration, abonnement, apps, paiement, support, montée en charge et sortie | La vitesse et l’exploitation simplifiée justifient-elles l’abonnement ? |
| **Agence sur Woo/Presta/Shopware** | Solution existante sous hébergement et maintenance | design, import, hébergement, licences, mises à jour, sécurité, SLA, conflits d’extensions, réversibilité | Le contrôle et l’absence de redevance de plateforme compensent-ils l’entretien ? |
| **Sur-mesure / headless** | Front, moteur et intégrations conçus pour le besoin | discovery, UX, code, cloud, monitoring, sécurité, tests, maintenance, dépendance aux personnes, plan de sortie | La règle métier ou le volume produit crée-t-il une valeur mesurable que le standard ne permet pas ? |

### TCO illustratif (hors produit, expédition, publicité et frais de paiement)

Hypothèses à expliciter : valeurs rondes, incluant temps interne valorisé à 40 €/h, support en heures ouvrées, applications et maintenance selon la solution. Ce tableau n’est **pas** une promesse de tarif.

| Option | 12 mois | 36 mois | 60 mois | Ce qui peut faire varier le total |
|---|---:|---:|---:|---|
| DIY SaaS | 6 800 € | 17 300 € | 27 900 € | temps du dirigeant, apps, incidents, migration future |
| SaaS accompagné | 11 800 € | 23 300 € | 34 800 € | niveau de setup, support, abonnements et app stack |
| Agence sur solution existante | 20 900 € | 38 600 € | 56 400 € | hébergement, licences, retainer, évolutions, sécurité |
| Sur-mesure / headless | 58 200 € | 94 700 € | 131 200 € | intégrations, cloud, SLA, évolutions et concentration du risque |

Les quatre lignes ne doivent être comparées que si elles assurent les mêmes fonctions, le même volume, la même responsabilité de conformité et un plan d’export des données. Si une option ne peut pas offrir le même support ou la même fonction sans contournement, cette différence doit être visible, pas cachée dans une fourchette.

### Frais de paiement : rendre le calcul reproductible

Pour **500 commandes × 62 € = 31 000 € de volume mensuel**, une grille Stripe affichée le 24 juillet 2026 à **1,5 % + 0,25 €** pour une carte EEE standard donne : `31 000 × 1,5 % + 500 × 0,25 = 590 €/mois`, soit **7 080 €/an**, avant remboursements, litiges, change et moyens de paiement alternatifs. Une carte EEE premium à 1,9 % ferait 714 €/mois dans cette hypothèse : **1 488 € d’écart annuel**. Le taux, la carte, le pays, la devise et le contrat doivent être affichés à côté du calcul.

| Sensibilité | Volume mensuel | Frais Stripe illustratifs à 1,5 % + 0,25 € | Taux effectif |
|---|---:|---:|---:|
| Petit panier | 100 × 20 € = 2 000 € | 55 €/mois | 2,75 % |
| Cas principal | 500 × 62 € = 31 000 € | 590 €/mois | 1,90 % |
| Gros volume | 2 000 × 150 € = 300 000 € | 5 000 €/mois | 1,67 % |

Le guide doit expliquer séparément : carte EEE standard/premium, carte britannique/internationale, conversion de devise, PayPal, BNPL, remboursements, litiges, frais de plateforme en cas de PSP tiers et éventuelles remises de volume. Ne jamais transformer un tarif observé en promesse valable pour tous les marchands.

### Rentabilité par commande : dérouler les lignes

Exemple illustratif à panier 62 € : marge brute produit 30 % (18,60 €), paiement 1,18 €, préparation/emballage 3,50 €, livraison subventionnée 4 €, retours moyens 3 €, acquisition 12 €. Contribution avant coûts fixes : **−5,08 €**. Dans ce cas, augmenter le trafic ou le budget technique ne résout pas le problème ; il faut améliorer marge, panier, livraison, retour ou CAC. Un second scénario avec CAC nul ne doit pas être présenté comme durable : il mesure seulement le seuil hors acquisition.

## 6. Obligations, sécurité et exploitation : correctif attendu

Créer une checklist datée et portée par un responsable :

1. identité du vendeur, mentions légales, CGV et prix total ;
2. caractéristiques produit, disponibilité et délai de livraison ;
3. paiement et confirmation sur support durable ;
4. rétractation de 14 jours, exceptions, formulaire, remboursements et retours ;
5. fonctionnalité gratuite, accessible et permanente de rétractation en ligne pour les contrats concernés depuis le 19 juin 2026 ;
6. garanties légales, médiation et contact client ;
7. RGPD, cookies/traceurs, conservation et sous-traitants ;
8. accessibilité selon taille, activité et clientèle ;
9. sécurité, sauvegardes, gestion des rôles, fraude et litiges ;
10. facturation, TVA, facturation électronique et exports comptables ;
11. produits réglementés, REP, sécurité et obligations propres au catalogue ;
12. plan d’incident : commande bloquée, double paiement, rupture de stock, remboursement et panne transporteur.

L’article doit faire vérifier chaque point par le professionnel compétent. Le prestataire technique peut implémenter et tester une interface ; il ne valide pas seul la légalité des CGV, la fiscalité ou la conformité produit.

## 7. Pédagogie, lexique et plume

La plume est maintenant claire, sobre et orientée décision. Pour passer de « très bon » à « mémorable » :

- remplacer les grands nombres isolés par « ce que cela change pour votre caisse » ;
- présenter chaque acronyme à sa première occurrence : **TCO**, **CAC**, **PSP** ;
- donner une réponse courte après chaque tableau : « si votre panier est petit, le fixe pèse ; si votre stock est partagé, l’intégration devient prioritaire » ;
- remplacer « quatre commerces » dans le sommaire par des profils que le lecteur peut reconnaître ; la page ne doit pas faire croire qu’il existe seulement quatre architectures ;
- ajouter une mini-checklist « avant de demander trois devis » téléchargeable ou imprimable, avec colonnes *hypothèse / preuve / responsable / coût / date de révision* ;
- conserver les opinions tranchées mais conditionnelles : « pour 35 produits et une équipe non technique, le SaaS est souvent le meilleur premier test ; pour un stock partagé ou un tarif B2B, l’intégration compte plus que le thème ».

## 8. P0/P1/P2 numérotés

### P0 — bloquant

Aucun P0 démontré à la date de l’audit. Cette porte resterait fermée si une nouvelle vérification démontrait qu’un tarif, une obligation ou un calcul affiché est faux pour le périmètre annoncé.

### P1 — avant de considérer le guide comme version étalon

- **P1-ECOM-01 — TCO 12/36/60.** Ajouter le tableau à périmètre égal DIY/SaaS/agence/sur-mesure, avec hypothèses et postes inclus/exclus.
- **P1-ECOM-02 — brief de scénario.** Figer produits, variantes, commandes, panier, pays, devises, transporteurs, intégrations, rôles, SLA et horizon avant toute comparaison.
- **P1-ECOM-03 — matrice fonctionnelle.** Comparer catalogue, stock, B2B, abonnements, multicanal, paiement, export, sécurité, sauvegardes, ownership, migration et lock-in.
- **P1-ECOM-04 — DIY réel.** Ajouter la configuration autonome et valoriser le temps du dirigeant ; préciser quand l’économie apparente devient une charge.
- **P1-ECOM-05 — calcul paiement.** Remplacer les « environ » non contextualisés par une méthode et des exemples panier/volume/mix ; vérifier toutes les grilles officielles le jour de publication.
- **P1-ECOM-06 — seuil de rentabilité.** Dérouler un exemple complet avec marge, paiement, préparation, livraison, retours, CAC et coûts fixes ; montrer un résultat positif et un résultat négatif.
- **P1-ECOM-07 — acquisition chiffrée.** Ajouter trois scénarios trafic existant, SEO progressif et Ads avec budget, conversion, CAC plafond et période d’apprentissage.
- **P1-ECOM-08 — logistique.** Ajouter préparation, emballage, zones, surcharges, retours, remboursement, casse, livraison gratuite et temps salarié.
- **P1-ECOM-09 — obligations datées.** Refaire la section avec Service-Public, DGCCRF, France Num et Légifrance ; distinguer B2C/B2B, produit/service, seuils et responsabilités.
- **P1-ECOM-10 — ordonnance 2026-2.** Lier explicitement `JORFTEXT000053298845`, le décret `JORFTEXT000053298978` et la fiche Service-Public ; faire relire la portée juridique.
- **P1-ECOM-11 — preuves et provenance.** Créer le dossier de recherche absent, avec dates, extraits, portée, confiance, calculs et matrice de gain d’information.
- **P1-ECOM-12 — réversibilité.** Ajouter export produits/clients/commandes, domaine, redirections, sauvegardes, accès, propriété du code et procédure de sortie dans le devis.

### P2 — amélioration importante

- **P2-ECOM-01 — échéancier de trésorerie.** Montrer acompte, solde, abonnements, coûts avant première commande et besoin de fonds de roulement.
- **P2-ECOM-02 — scénarios de sensibilité.** Faire varier panier, commandes, taux de retour, conversion, CAC et prix des apps ; signaler le point de bascule.
- **P2-ECOM-03 — alternatives métier.** Ajouter Shopware/JTL/BigCommerce lorsque B2B, multicanal ou DACH est concerné, sans transformer le guide France en catalogue de logiciels.
- **P2-ECOM-04 — contenu et photo.** Chiffrer un lot pilote de dix fiches puis extrapoler par famille, variantes, photo, traduction et validation réglementaire.
- **P2-ECOM-05 — accessibilité testable.** Ajouter clavier, focus, contraste, formulaire, paiement, erreur et remboursement à la recette, avec périmètre juridique daté.
- **P2-ECOM-06 — conversion.** Relier mesure analytics, consentement, recherche interne, panier abandonné et attribution à une responsabilité et à un coût.
- **P2-ECOM-07 — tableaux mobiles.** Vérifier chaque tableau au vrai viewport 320–1600 px et basculer les phrases en cartes lisibles si le composant déborde.
- **P2-ECOM-08 — FAQ sans duplication.** Faire répondre chaque question à une décision différente ; ajouter coûts cachés, migration, ownership et « quand ne pas créer de boutique ».
- **P2-ECOM-09 — QA technique.** Exécuter `git diff --check`, lint/typecheck/build, liens, JSON-LD, canonical, sitemap, route déployée et navigateur réel avant la sortie.

## 9. Portes de publication P1–P4

- **P1 — recherche/cadrage :** brief de lecteur, SERP France + benchmarks US/UK/AU/DACH, sources officielles datées, matrice de gain d’information, scénario égal et registre des hypothèses. La porte est actuellement **fermée** (dossier de recherche absent).
- **P2 — rédaction/intégration :** TCO, calculs reproductibles, tableaux comparables, obligations contextualisées, exemples illustratifs et CTA utile. **À faire après P1.**
- **P3 — contre-audit indépendant :** ce rapport est présent, mais la porte reste **non validée** : il constate douze P1 et aucun snapshot corrigé n'existe encore à recontrôler.
- **P4 — plume humaine + QA complète :** lecture par un dirigeant non technique, suppression du jargon inutile, contrôle anti-IA, responsive 320–1600, build, route, données structurées, canonical, sitemap et vérification de production. **Non exécuté ici.**

## 10. Scorecard

| Axe | Note | Justification |
|---|---:|---|
| Intention et promesse | 9/10 | Réponse claire dès l’ouverture, profils et budget complet. |
| Pédagogie humaine | 9/10 | Vocabulaire traduit, exemples reconnaissables, prochaines questions utiles. |
| Profondeur | 8/10 | Catalogue, paiement, logistique et migration présents ; rentabilité et TCO trop courts. |
| Preuves | 8/10 | Bon socle officiel ; pas de dossier de recherche ni provenance ligne par ligne. |
| Comparaison | 7/10 | Plateformes bien introduites ; pas de comparaison égale DIY/SaaS/agence/sur-mesure. |
| Chiffrage | 7/10 | Fourchettes et paiement présents ; pas de TCO ni sensibilité complète. |
| Risques et obligations | 7/10 | Bons thèmes, responsabilités et portée juridique à détailler. |
| Originalité | 9/10 | Séparation du budget d’exploitation et test de commande jusqu’au remboursement. |
| Conversion honnête | 9/10 | CTA concret, liens pertinents, pas de promesse de prix ou de plateforme imposée. |
| SEO/UX technique | 9/10 | Metadata/Article/Breadcrumb visibles dans le code ; rendu et production non vérifiés dans cet audit. |
| **Total** | **82/100** | Très bon guide de préparation ; pas encore la fiche de décision complète promise. |

## 11. Conditions de sortie de l’audit

Le guide pourra être marqué « version étalon » lorsque P1-ECOM-01 à P1-ECOM-12 seront traités, que les calculs seront recalculés par un second agent, que la portée de l’ordonnance sera relue sur les sources officielles, et que P4 aura prouvé la lecture humaine, le rendu mobile, le build et la route réellement publiée. Tant que ces éléments ne sont pas produits, il est honnête de le qualifier de **guide solide à renforcer**, pas de promettre la première place Google.

## 12. Sources vérifiées le 24 juillet 2026

### Sources officielles

- Service-Public Entreprendre, *Faire du commerce en ligne : règles à respecter*, vérifié le 19 juin 2026 : https://entreprendre.service-public.gouv.fr/vosdroits/F23455
- Légifrance, ordonnance n° 2026-2 du 5 janvier 2026, articles 2–3 et texte complet : https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000053298845
- Légifrance, décret n° 2026-3 du 5 janvier 2026 : https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000053298978
- France Num, *Accessibilité des sites de e-commerce* : https://www.francenum.gouv.fr/guides-et-conseils/developpement-commercial/site-e-commerce/accessibilite-des-sites-de-e-commerce
- DGCCRF, *E-commerce : les règles entre professionnels et consommateurs* : https://www.economie.gouv.fr/dgccrf/les-fiches-pratiques/e-commerce-les-regles-entre-professionnels-et-consommateurs
- FEVAD, *Bilan du e-commerce en France — 2025* : https://www.fevad.com/bilan-du-e-commerce-en-france-les-francais-ont-depense-pres-de-200-milliards-deuros-sur-internet-en-2025/
- Stripe France, tarification, consultée le 24 juillet 2026 : https://stripe.com/fr/pricing
- Shopify France, tarifs, consultée le 24 juillet 2026 : https://www.shopify.com/fr/tarifs
- WooCommerce, tarification officielle et exemples TCO, consultée le 24 juillet 2026 : https://woocommerce.com/pricing/
- Mollie France, tarification : https://www.mollie.com/fr/pricing
- PayPal France, frais marchands : https://www.paypal.com/fr/business/paypal-business-fees
- Service-Public, calendrier de la facturation électronique cité par la page : https://entreprendre.service-public.gouv.fr/actualites/A15683

### Benchmark concurrentiel — couverture seulement

- Cambria Digital (UK), *How Much Does an Ecommerce Website Cost in the UK?*, 16 juin 2026 : https://cambriadigital.co.uk/blog/ecommerce-website-design-cost-uk/
- North Labs (UK), *How Much Does a Website Cost in the UK in 2026?* (mis à jour avril 2026) : https://www.northlabs.co.uk/blog/how-much-does-a-website-cost-uk
- Blu Mint Digital (Australie), *eCommerce Website Cost Australia*, mis à jour le 15 juillet 2026 : https://blumint.com.au/insights/ecommerce-website-cost-guide
- Pryce Digital (Australie), *Ecommerce Website Cost Australia 2026*, 30 mai 2026 : https://prycedigital.com/blog/how-much-does-an-ecommerce-website-cost-australia-2026
- PHM Connect (Allemagne), *Online-Shop erstellen lassen: Kosten 2026 transparent* : https://phm-connect.de/online-shop-erstellen-lassen-kosten/
