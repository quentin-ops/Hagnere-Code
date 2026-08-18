# Giga-audit — « WooCommerce ou Shopify : que choisir ? »

Date : **24 juillet 2026**

Mode : audit en lecture seule du guide, de ses preuves, de ses calculs, de sa
couverture concurrentielle et de son rendu public. Aucun contenu de production
n'a été corrigé pendant cette passe.

```text
Route                         /guides/woocommerce-ou-shopify
Page                          src/app/guides/woocommerce-ou-shopify/page.tsx
Empreinte SHA-256             01cd0b4461f4c6b01b4f387f0461a8da6b50122504a0da8507dea1b4b783a236
Image sociale                 src/app/guides/woocommerce-ou-shopify/opengraph-image.tsx
Empreinte image SHA-256       c72073e111f86a211053674827c63f94a47dfa1fb09845159e30322c1dca4af8
Registre                      src/lib/guides.ts
Empreinte registre SHA-256    8663e6e84352121ec854393e049492a1c2b72f242166141e5d31e0911b43cb09
Publication déclarée          17 juillet 2026
Modification déclarée         21 juillet 2026
Lecture annoncée              12 minutes
Dossier P1 propre au slug     absent
Statut                        audité ; corrections non appliquées
```

> **Limite de portée.** Les prix, taux de paiement et fonctions des plateformes
> varient selon le pays, la devise, le forfait, le moyen de paiement, la carte,
> le volume, la facturation et la date. Les calculs proposés dans ce rapport
> sont des exemples reproductibles à recalculer et documenter en P1. Ils ne sont
> ni des tarifs Hagnéré Code, ni des moyennes du marché, ni des promesses de
> rentabilité. Les pages concurrentes servent à comparer la couverture
> éditoriale ; seuls les éditeurs et organismes officiels servent à établir les
> faits actuels.

## 1. Verdict exécutif

```text
Lecteur exact       dirigeant, commerçant ou indépendant qui doit choisir la
                    plateforme de sa boutique sans devenir technicien
Question réelle     qui entretiendra la boutique, quel coût complet supportera
                    l'entreprise et que pourra-t-elle récupérer en partant ?
Décision attendue   conserver WooCommerce, choisir Shopify, améliorer
                    l'existant, tester le module du logiciel de caisse,
                    comparer une plateforme spécialisée ou lancer un cadrage
Réponse actuelle    Shopify est souvent plus simple quand personne ne veut
                    exploiter WordPress ; WooCommerce mérite d'être conservé
                    quand le site et sa maintenance constituent déjà un actif
Défaut principal    le guide demande un calcul sur trois ans sans montrer un
                    seul TCO à périmètre égal sur 12, 36 et 60 mois
Niveau actuel       B
Priorité            haute
P0                  0
P1                  11
P2                  9
Score               78/100
Verdict             NO-GO au seuil renforcé de 90/100
```

La page s'adresse déjà correctement à une personne qui vend, et non à un
développeur. L'ouverture pose la bonne question : **qui va s'occuper de la
boutique chaque semaine ?** Elle ne présente ni Shopify ni WooCommerce comme un
vainqueur universel. Elle recommande Shopify pour un lancement standard sans
ressource technique, WooCommerce pour un WordPress actif et bien maintenu, le
module du logiciel de caisse pour certains commerces physiques et une solution
spécialisée ou sur mesure lorsque la règle métier crée réellement la
différence.

Cette opinion est claire, honnête et utile. La page explique aussi que le cœur
WooCommerce gratuit ne rend pas une boutique gratuite, que Shopify n'enlève ni
les applications ni le travail de catalogue, qu'une migration reconstruit le
thème et les automatisations, et que la performance dépend de
l'implémentation. Le CTA accepte explicitement qu'aucun développement sur
mesure ne soit nécessaire. Ces choix éditoriaux doivent être conservés.

Le guide ne transforme cependant pas encore cette orientation en décision
économique. Il cite des forfaits Shopify, trois grilles de paiement et une
formule, mais ne l'applique à aucun chiffre d'affaires, nombre de commandes ou
panier. Il ne donne aucun coût WooCommerce, aucune dépense d'application, aucun
temps interne valorisé et aucun total 12/36/60. Les taux Shopify Payments,
Stripe et PayPlug portent en outre sur des offres, cartes et conditions
différentes : les juxtaposer sans scénario commun ne permet pas de conclure.

Le titre promet un choix. Le guide actuel livre un très bon **premier
diagnostic**, pas encore une comparaison de référence capable de défendre
chaque euro, chaque risque et chaque condition de bascule.

## 2. Scorecard avant correction

| Axe | Note | Preuve actuelle | Manque décisif |
| --- | ---: | --- | --- |
| Intention et promesse | 9/10 | dilemme et lecteur visibles dès l'ouverture | la promesse de choix ne débouche pas sur une décision chiffrée |
| Décision | 8/10 | verdict par cinq profils et troisième option | aucun seuil économique ni test éliminatoire |
| Pédagogie | 9/10 | responsabilités traduites en travail quotidien | les frais de paiement restent trop abstraits |
| Profondeur | 7/10 | exploitation, SEO, sécurité, migration et POS abordés | opérations, conformité, international, abonnements et intégrations restent superficiels |
| Preuves | 7/10 | éditeurs officiels et dates pour les prix ; réserves explicites | aucun dossier P1, capture locale ou journal de calcul |
| Comparaison | 7/10 | Shopify/WooCommerce et alternatives évoquées | aucun périmètre égal ; PrestaShop, Shopware et moteur du logiciel métier non instruits |
| Chiffrage | 5/10 | forfaits, taux et formule présents | zéro exemple appliqué et zéro TCO 12/36/60 |
| Risques et sortie | 8/10 | migration, redirections, sauvegardes et domaine signalés | pas de test d'export, double exploitation, rollback, SLA ou RPO/RTO |
| Conversion honnête | 9/10 | CTA proportionné et possibilité de ne rien reconstruire | livrable, délai et limite de l'examen non explicités |
| SEO/UX technique | 9/10 | route publique, canonical, index/follow, schemas et responsive contrôlés | pas de BAT clavier ni preuve d'identité entre le snapshot local et le déploiement |
| **Total** | **78/100** | **somme recalculée** | **sous 90 et onze P1 ouverts** |

## 3. Ce que le guide apporte déjà au dirigeant

### Une opinion professionnelle, sans faux duel

Le texte assume trois positions qui inspirent davantage confiance qu'un
catalogue de fonctionnalités :

1. Shopify est souvent le choix rationnel lorsqu'aucune personne ne veut
   administrer l'hébergement, les mises à jour et les sauvegardes.
2. Un WordPress qui attire déjà des visiteurs et dispose d'une maintenance
   sérieuse est un actif ; le remplacer sans raison peut détruire de la valeur.
3. Une troisième option peut être meilleure : module du logiciel de caisse,
   plateforme sectorielle, place de marché pour tester la demande ou
   développement adapté à une règle métier prouvée.

Le guide évite donc le biais commercial « plus ambitieux égale plus de
sur-mesure ». La phrase selon laquelle le sur-mesure n'est pas une récompense
pour une entreprise ambitieuse est particulièrement juste.

### Les responsabilités sont mieux expliquées que les technologies

La différence centrale est correctement formulée :

- Shopify fournit et exploite l'environnement central ;
- WooCommerce ajoute une boutique à WordPress, tandis que l'entreprise choisit
  et assume son hébergement, son thème, ses extensions et sa maintenance.

Cette explication est utile à un chef d'entreprise parce qu'elle traduit
« SaaS » et « open source » en personnes, actions et responsabilités.

### La page protège contre plusieurs erreurs d'achat

- Elle ne confond pas logiciel WooCommerce gratuit et boutique sans coût.
- Elle rappelle qu'une plateforme prête ne produit ni le catalogue ni les
  contenus.
- Elle demande de tester cinq opérations réelles : produit, prix, commande,
  retour et stock.
- Elle ne déduit pas la performance d'une part de marché ou d'une technologie.
- Elle signale que les produits, clients et commandes ne suffisent pas à
  migrer un thème, des applications et des automatisations.
- Elle recommande de conserver les exports, le domaine et la liste des
  applications.

### La conversion reste loyale

Le CTA demande le catalogue, les canaux, l'équipe et les outils existants. Il
propose une comparaison, non une refonte automatique, et précise qu'une option
sans développement sur mesure peut être recommandée. Cette loyauté commerciale
est un actif éditorial à préserver lors de la réécriture.

## 4. Faits actuels contrôlés et niveau de confiance

| Affirmation du guide | Verdict au 24/07/2026 | Limite à inscrire |
| --- | --- | --- |
| WooCommerce est une extension open source de WordPress dont le cœur peut être installé gratuitement | confirmée par WooCommerce | l'hébergement, le paiement, les extensions, le thème, le développement et l'exploitation restent payants |
| Shopify inclut l'hébergement de la plateforme | confirmée sur la tarification officielle | applications, domaine, construction, contenu, paiement, acquisition et exploitation ne sont pas « inclus » au sens du coût complet |
| Shopify France affichait 25/66/289 € par mois en annuel et 36/105/384 € en mensuel le 21/07/2026 | cohérente avec le relevé éditorial, mais la page officielle varie selon la géolocalisation observée | archiver capture, devise, pays, taxes, date et mode de facturation ; ne pas dépendre d'une page dynamique non figée |
| POS Pro était affiché à 79 €/mois/emplacement | cohérente avec le relevé France | confirmer pays, taxes et fonctions incluses au jour de publication |
| Shopify Basic affichait 2,1 % + 0,30 € pour une carte standard en ligne et 2 % avec un PSP tiers | cohérente avec le relevé France | l'offre, le type de carte, Shopify Payments, la devise et le forfait doivent apparaître dans chaque calcul |
| Stripe France affiche 1,5 % + 0,25 € pour les cartes standard de l'EEE | confirmée le 24/07/2026 sur la page officielle | cartes premium, britanniques, internationales, change, remboursements et litiges ont d'autres coûts |
| PayPlug Pro affiche 1,1 % + 0,25 € et 30 € HT/mois pour le segment indicatif 100 k€–1 M€ | confirmée le 24/07/2026 | offre sous conditions d'éligibilité ; Starter et autres cartes ont une autre grille ; montants hors taxes |
| les mots de passe clients ne se migrent pas par CSV vers Shopify | confirmé dans le centre d'aide Shopify | les clients doivent recréer leur accès ; les nouveaux comptes peuvent être sans mot de passe |
| une migration reprend certains produits, clients et commandes, pas automatiquement le thème et les automatisations | confirmée dans la documentation Shopify | abonnements, tokens PSP, cadeaux, avis, consentements, remboursements, taxes et comptes demandent un inventaire propre |
| WordPress/WooCommerce demande une organisation de mises à jour, sauvegarde et restauration | cohérente avec les responsabilités officielles WordPress/WooCommerce | le niveau de risque dépend de l'hébergement, du code, des extensions, des accès et du processus réel |

Les rapports Patchstack et Wordfence sont correctement présentés comme des
publications d'acteurs du secteur et non comme une probabilité de panne. Ils ne
doivent pas devenir une preuve que WooCommerce est intrinsèquement dangereux.
De même, les chiffres marketing Shopify sur le coût ou la conversion ne
doivent pas établir le verdict sans méthode, population et conflit d'intérêt.

## 5. Défauts de couverture constatés

### La formule existe, mais aucun lecteur ne peut la vérifier

Le guide publie :

```text
frais annuels = taux × chiffre encaissé
              + fixe × nombre de transactions
              + abonnements
              + frais de plateforme
```

Il ne montre pourtant aucun calcul. Un dirigeant ne voit ni l'effet de son
panier moyen, ni celui des cartes internationales, ni la différence entre un
PSP commun aux deux architectures et une commission propre à Shopify.

### « WooCommerce gratuit » est corrigé en mots, pas en euros

Les postes hébergement, extensions, maintenance et temps interne sont listés.
Aucun n'est chiffré, même sous forme d'hypothèse éditoriale. Le lecteur peut
donc retenir malgré tout que WooCommerce vaut zéro et Shopify 25 € par mois.

### La comparaison ne porte pas sur la même boutique

Aucun cas principal ne fixe :

- le nombre de produits, variantes et langues ;
- les commandes mensuelles, le panier et le GMV ;
- la part des cartes standard, premium et internationales ;
- les règles de TVA, livraison, retours et promotions ;
- les rôles salariés et les points de vente ;
- les intégrations stock, caisse, comptabilité, CRM et transporteurs ;
- l'objectif de disponibilité et le support ;
- le volume de contenu, le trafic et les pics ;
- l'horizon et la procédure de sortie.

Sans ce périmètre, les deux colonnes ne vendent pas le même résultat.

### L'exploitation commerciale est presque hors champ

Le guide parle de catalogue et de retours, mais ne chiffre ni :

- les photos, fiches, traductions et données produits ;
- la préparation, le support client et les remboursements ;
- la ressaisie entre stock, caisse, comptabilité et boutique ;
- les promotions, taxes, factures et rapprochements ;
- le SEO, les flux produits, les Ads et le CRM ;
- la fraude, les litiges et les échecs de paiement ;
- le temps interne et le coût d'une erreur.

Or ces postes peuvent dépasser la différence d'abonnement entre les
plateformes.

### La sortie est décrite sans épreuve

Le conseil « gardez des exports » est bon, mais un export non restauré ne prouve
pas une sortie. La page ne demande pas de tester :

- produits, variantes, médias, clients, commandes et consentements ;
- mots de passe, abonnements, tokens PSP, avoirs et cartes cadeaux ;
- contenus, avis, métadonnées et redirections ;
- historique comptable, taxes et remboursements ;
- domaine, DNS, comptes, contrats d'applications et propriété du thème ;
- période de double exploitation, gel des commandes, rollback et
  rapprochement final.

### Les obligations d'une boutique française restent absentes

Sans devenir un guide juridique, la page doit renvoyer vers des sources
officielles pour :

- information précontractuelle, prix, livraison, rétractation et retours ;
- cookies, mesure d'audience et prospection ;
- traitement des données, sous-traitants et transferts ;
- accessibilité des services de commerce électronique ;
- TVA, facturation, archivage et distinction B2C/B2B ;
- sécurité du paiement et partage des responsabilités.

Ces obligations ne désignent pas automatiquement une plateforme, mais elles
modifient le périmètre, le coût et la recette.

## 6. Benchmark de couverture — France et international

| Zone / ressource | Ce que la couverture concurrente ajoute | Ce que Hagnéré doit faire mieux |
| --- | --- | --- |
| France — Shopify officiel | fonctions, plans, paiements, POS et comparaison favorable à Shopify | utiliser les données de plan, mais déclarer le conflit d'intérêt et ne pas reprendre les gains TCO sans méthode |
| France — WooCommerce officiel | coûts de l'hébergement, extensions et liberté de choix | documenter un panier réel d'extensions et l'exploitation au lieu d'écrire seulement « gratuit, mais » |
| France — Seriousweb, Nexus Synergy, Blog du Modérateur | parts d'usage, tableaux de fonctionnalités, SEO et écosystème français | éviter le concours de popularité ; relier la décision à cinq opérations et à la marge |
| États-Unis — Build Grow Scale | TCO sur trois ans et coûts qui se cumulent | produire un calcul français vérifiable, pas une fourchette commerciale importée |
| États-Unis — Sprout Sage | scénarios à plusieurs niveaux de GMV, coûts variables et points de rupture | montrer à quelle variable le verdict change, avec réserve sur les estimations tierces |
| Royaume-Uni — StoreBuilt | ownership, app-stack, coût, conversion et migration | ajouter la preuve de sortie et distinguer contrôle juridique, contrôle opérationnel et possession technique |
| Royaume-Uni — FallingBrick/Cambria | exemples de frais tiers à un chiffre d'affaires donné et coûts de migration | recalculer en euros avec cartes et forfait France ; ne pas reprendre leurs fourchettes comme vérité |
| Australie — HornTech | tableau de coût à 12 mois avec hébergement, thème, apps et paiement | prolonger en 36/60 mois et isoler coûts communs, spécifiques et temps humain |
| Australie — Forbes Advisor AU | coût, facilité, support et personnalisation dans une même lecture | ajouter exploitation réelle, sortie et sensibilité plutôt qu'une simple note par fonctionnalité |
| DACH — Shopify Deutschland | argumentaire TCO avec pourcentages d'économies | analyser la méthode et le biais vendeur ; ne pas présenter 36 % comme universel |
| DACH — comparatifs Woo/Shopify | DSGVO, hébergement, plugins, multilingue et opérations locales | adapter au droit et aux flux français ; ajouter PrestaShop/Shopware lorsque le cas l'exige |

### Gain d'information à viser

Le contenu différenciant n'est pas « Shopify est simple » ou « WooCommerce est
flexible » : toute la concurrence le dit. Le guide peut devenir supérieur en
répondant à cette question vérifiable :

> Pour la même boutique française, avec le même catalogue, les mêmes ventes, les
> mêmes cartes, le même stock, le même support et la même sortie, combien chaque
> option coûte-t-elle et quelle variable fait changer la décision ?

## 7. Cas égal à construire en P1

Cas central illustratif :

```text
Catalogue                    300 SKU, dont 50 variantes
Commandes                    500 par mois
Panier moyen                 62 €
Volume encaissé              31 000 €/mois ; 372 000 €/an
Pays/devise                  France, EUR
Paiement                     cartes EEE standard dans le calcul de base
Canaux                       boutique en ligne + un point de vente
Logistique                   deux transporteurs, retours et retrait boutique
Intégrations                 stock/comptabilité + CRM
Contenu                      300 fiches, photos et 20 catégories
Support                      jours ouvrés
Disponibilité                objectif 99,9 %, à définir et mesurer
Sortie                       exports testés, redirections et responsable nommé
Horizons                     12, 36 et 60 mois
```

Ce cas ne prétend pas représenter toutes les boutiques. Il donne un dénominateur
commun. Ajouter au moins deux sensibilités :

- 100 commandes × 35 € pour une petite boutique ;
- 2 000 commandes × 95 € avec cartes et pays multiples.

## 8. Calculs que le guide doit montrer

### Paiement : appliquer enfin la formule

Avec 500 commandes/mois et 31 000 € encaissés :

```text
Shopify Payments illustratif
31 000 × 2,1 % + 500 × 0,30
= 651 + 150
= 801 €/mois
= 9 612 €/an

Stripe illustratif sur cartes EEE standard
31 000 × 1,5 % + 500 × 0,25
= 465 + 125
= 590 €/mois
= 7 080 €/an

Écart arithmétique du scénario
9 612 - 7 080
= 2 532 €/an
```

Ce calcul n'établit pas que WooCommerce est moins cher : il compare deux offres
de paiement différentes sur une seule catégorie de cartes. La réécriture doit
ajouter mix de cartes, acceptation, fraude, remboursements, litiges, change,
délai de versement et fonctions incluses.

Si le même Stripe est utilisé avec Shopify Basic et qu'une commission
plateforme de 2 % s'applique au relevé France :

```text
commission Shopify supplémentaire
31 000 × 2 % = 620 €/mois = 7 440 €/an

Stripe + commission Shopify
7 080 + 7 440 = 14 520 €/an
```

Cette ligne est un bon exemple de variable qui peut renverser la décision. Elle
doit être reliée au forfait exact et revalidée au jour de publication.

### TCO 12/36/60 : exemple de méthode, pas tarif de marché

Hypothèses éditoriales rondes à remplacer par devis, factures ou enquête
documentée :

| Poste | Shopify natif | WooCommerce géré |
| --- | ---: | ---: |
| construction, migration et recette initiales | 12 000 € | 16 000 € |
| thème initial | 350 € | inclus dans l'hypothèse de construction |
| forfait/hébergement annuel | 300 € | 1 200 € |
| applications/extensions annuelles | 1 800 € | 1 200 € |
| maintenance et support annuels | 3 600 € | 6 000 € |
| paiement du cas central | 9 612 €/an | 7 080 €/an |

Résultat strictement arithmétique :

| Option | 12 mois | 36 mois | 60 mois |
| --- | ---: | ---: | ---: |
| Shopify, hors sortie | 27 662 € | 58 286 € | 88 910 € |
| WooCommerce géré, hors sortie | 31 480 € | 62 440 € | 93 400 € |

Vérification :

```text
Shopify annuel récurrent = 300 + 1 800 + 3 600 + 9 612 = 15 312 €
12 mois = 12 000 + 350 + 15 312 = 27 662 €
36 mois = 12 350 + 3 × 15 312 = 58 286 €
60 mois = 12 350 + 5 × 15 312 = 88 910 €

Woo annuel récurrent = 1 200 + 1 200 + 6 000 + 7 080 = 15 480 €
12 mois = 16 000 + 15 480 = 31 480 €
36 mois = 16 000 + 3 × 15 480 = 62 440 €
60 mois = 16 000 + 5 × 15 480 = 93 400 €
```

Cet exemple montre pourquoi le verdict n'est pas contenu dans le seul
abonnement : un autre coût de construction, 30 heures mensuelles de ressaisie,
un plan Shopify différent, des cartes internationales, huit applications ou
une panne longue déplacent immédiatement le résultat.

### Temps interne et marge

Ajouter une formule lisible :

```text
coût mensuel du temps interne
= heures catalogue + commandes + incidents + rapprochement
× coût complet horaire
```

Exemple illustratif :

```text
12 h/mois évitées × 45 €/h = 540 €/mois = 6 480 €/an
```

Une plateforme 2 500 € plus chère en paiement peut rester rationnelle si elle
économise réellement 6 480 € de travail. Cette économie doit être mesurée sur
des opérations, non déclarée par l'éditeur.

## 9. Sensibilités et points de bascule

| Variable | Bas | Central | Haut | Question de décision |
| --- | ---: | ---: | ---: | --- |
| commandes/mois | 100 | 500 | 2 000 | quel poids prend le fixe par transaction ? |
| panier moyen | 35 € | 62 € | 150 € | quelle part de marge absorbe le pourcentage ? |
| apps/extensions payantes | 3 | 8 | 15 | à partir de quand l'empilement devient-il une architecture ? |
| cartes internationales | 0 % | 10 % | 40 % | quels taux, change et acceptation s'appliquent ? |
| temps interne | 4 h | 16 h | 50 h/mois | quelle simplicité est réellement achetée ? |
| retours | 2 % | 8 % | 20 % | les opérations de retour sont-elles maîtrisées ? |
| points de vente | 0 | 1 | 5 | POS, stock, droits et matériel changent-ils le plan ? |
| indisponibilité tolérée | 8 h | 2 h | 15 min | quel support, monitoring et budget faut-il financer ? |

Le seuil de bascule doit rester conditionnel :

```text
coût annuel évité par le changement
> amortissement de migration
  + double exploitation
  + risque de perte SEO
  + formation
  + réserve d'incident
```

## 10. Migration, sécurité et réversibilité à éprouver

### Matrice de migration

| Objet | Export seul suffit ? | Test exigé |
| --- | --- | --- |
| produits, variantes, médias | non | échantillon puis rapprochement complet |
| clients | non | champs, consentements, doublons et comptes |
| mots de passe | non | parcours de recréation ou comptes sans mot de passe |
| commandes et remboursements | non | total, taxes, statut, historique et comptabilité |
| abonnements et tokens PSP | rarement | migration progressive ou renouvellement contrôlé |
| avis, cartes cadeaux, fidélité | rarement | solde, propriétaire, validité et information client |
| SEO | non | inventaire URL, redirections, sitemap, crawl et suivi |
| thème et applications | non | reconstruction, recette et suppression des abonnements |
| données analytiques | non | continuité consentement, tags, événements et attribution |

### Responsabilités d'exploitation

Comparer à service égal :

| Fonction | Shopify | WooCommerce |
| --- | --- | --- |
| plateforme centrale | opérée par Shopify | hébergeur + mainteneur à organiser |
| catalogue et règles métier | entreprise/intégrateur | entreprise/intégrateur |
| applications/extensions | entreprise + éditeurs tiers | entreprise + éditeurs tiers |
| accès et départs salariés | entreprise | entreprise |
| sauvegarde exploitable | préciser périmètre et export | sauvegarde + restauration testée |
| surveillance métier | à construire | à construire |
| incident paiement/stock | procédure commune à définir | procédure commune à définir |
| RPO/RTO/SLA | définir ce qui est contractuel et ce qui ne l'est pas | acheter, documenter et tester |

Une boutique peut être « en ligne » tout en étant incapable d'encaisser, de
calculer la livraison ou de synchroniser le stock. La disponibilité métier doit
donc inclure une commande test, pas seulement une réponse HTTP.

## 11. P0/P1/P2 numérotés

### P0 — critique

Aucun P0 démontré dans le snapshot audité. Un P0 serait ouvert si la
revalidation établissait qu'un prix ou taux daté est faux pour la France, ou si
une méthode de migration annoncée entraînait une perte de données non signalée.

### P1 — bloquant avant version étalon

- **P1-WCS-01 — dossier de recherche.** Créer le P1 propre au slug avec
  question, lecteur, périmètre, sources primaires, benchmark international,
  captures de prix et journal de calcul.
- **P1-WCS-02 — périmètre égal.** Figer catalogue, commandes, panier, pays,
  cartes, logistique, POS, intégrations, support, disponibilité, contenu,
  migration et horizon.
- **P1-WCS-03 — TCO 12/36/60.** Calculer construction, abonnement/hébergement,
  apps/extensions, paiement, support, maintenance, temps interne, migration et
  sortie pour les deux options.
- **P1-WCS-04 — paiements comparables.** Séparer frais PSP communs, commissions
  Shopify propres, cartes, change, remboursements, litiges et fonctions
  incluses ; ajouter au moins un calcul vérifiable.
- **P1-WCS-05 — preuve des tarifs France.** Archiver pays, devise, HT/TTC,
  mensuel/annuel, plan, date et capture, car la page dynamique varie selon la
  géolocalisation.
- **P1-WCS-06 — coût WooCommerce.** Donner un panier d'hébergement, licences,
  sauvegardes, sécurité, monitoring, maintenance et temps humain, avec
  hypothèses et fourchette d'incertitude.
- **P1-WCS-07 — coût opérationnel.** Chiffrer contenus, catalogue, commandes,
  retours, support, rapprochement, ressaisies, acquisition et erreurs au même
  volume.
- **P1-WCS-08 — migration dans les deux sens.** Couvrir mots de passe,
  abonnements, tokens PSP, avis, avoirs, données, SEO, double run, rollback,
  formation, rapprochement et arrêt des abonnements.
- **P1-WCS-09 — exploitation égale.** Comparer monitoring, sauvegarde,
  restauration, incident, astreinte, RPO/RTO, SLA et personne de reprise.
- **P1-WCS-10 — conformité e-commerce.** Ajouter des renvois officiels sur
  consommation, RGPD/cookies, accessibilité, TVA/facturation et sécurité, avec
  limite de conseil général.
- **P1-WCS-11 — contre-audit.** Faire recalculer chaque total et revalider
  plans, taux, liens, exports et comparables par un agent qui n'a pas rédigé la
  correction.

### P2 — important pour dépasser 90

- **P2-WCS-01 — alternatives françaises.** Ajouter PrestaShop, Shopware,
  plateforme sectorielle et module du logiciel métier lorsque leurs critères
  d'entrée sont réunis, sans élargir artificiellement le titre.
- **P2-WCS-02 — seuil de bascule.** Afficher l'effet du GMV, du panier, des
  cartes, des apps et du temps humain sur le verdict.
- **P2-WCS-03 — commerce international.** Ajouter langues, devises, taxes,
  douanes, moyens locaux et retours transfrontaliers.
- **P2-WCS-04 — contenu et merchandising.** Chiffrer un pilote de dix fiches,
  photos, catégories, recherche, filtres et traduction avant extrapolation.
- **P2-WCS-05 — ressource autonome.** Fournir une feuille de calcul qui sépare
  coûts communs, coûts plateforme, coûts humains et sortie.
- **P2-WCS-06 — lexique utile.** Expliquer GMV, PSP, TCO, POS, SLA, RPO et RTO
  au premier emploi, puis revenir aux mots du dirigeant.
- **P2-WCS-07 — CTA borné.** Dire ce que l'examen produit, les pièces requises,
  son délai indicatif, ses limites et l'absence de garantie de rentabilité.
- **P2-WCS-08 — QA fonctionnelle.** Tester clavier, focus, tableaux, liens,
  commande fictive, erreurs et mobile, pas seulement le débordement.
- **P2-WCS-09 — suivi après publication.** Journaliser mises à jour de tarifs,
  liens, Search Console, requêtes, engagement et conversions sans confondre ces
  signaux avec une garantie de classement.

## 12. Portes P1–P4

### P1 — recherche et cadrage

Exigences :

- brief dirigeant et décision observable ;
- cas central à périmètre égal ;
- sources officielles horodatées et preuve locale des tarifs ;
- benchmark FR/US/UK/AU/DACH avec matrice de gain d'information ;
- calculs, sensibilités et limites ;
- obligations françaises et plan de sortie.

**État : FERMÉE.** Aucun dossier de recherche dédié au slug n'a été trouvé.
Les sources en bas de page ne remplacent pas le brief, la méthode, les calculs
et la preuve des captures.

### P2 — rédaction et intégration

Exigences :

- réponse humaine conservée ;
- scénario, TCO 12/36/60 et exemples appliqués ;
- coûts communs et spécifiques séparés ;
- migration, exploitation et conformité intégrées ;
- CTA borné et ressource autonome ;
- métadonnées cohérentes avec le contenu réellement prouvé.

**État : À CORRIGER.** Le texte actuel est bon, mais le chiffrage promis et la
comparaison égale ne sont pas livrés.

### P3 — contre-audit indépendant

Exigences :

- second recalcul de tous les totaux ;
- contrôle indépendant des plans, devises, taxes, taux et cartes ;
- recherche d'un scénario qui inverse chaque conclusion ;
- test d'export/migration et des faux comparables ;
- contrôle juridique de portée générale sans conseil personnalisé ;
- vérification des liens et de la date de chaque preuve.

**État : NON VALIDÉE.** Le présent rapport identifie la méthode et les défauts ;
il ne peut pas valider la future correction qu'il aura contribué à définir.

### P4 — humanisation, anti-IA et QA

Exigences :

- lecture par un dirigeant non technique ;
- chaque titre répond à une question réelle ;
- jargon traduit ou supprimé ;
- opinion claire, objections loyales et incertitude visible ;
- aucune répétition mécanique ou section créée pour un quota ;
- responsive, clavier, liens, build, JSON-LD, canonical, route publique et
  cohérence du snapshot ;
- score final au moins 90/100, aucun axe sous 8 et axes critiques au moins 9.

**État : PARTIELLE ET NON VALIDÉE.** La plume actuelle passe bien la lecture
humaine et le contrôle responsive public, mais les P1 empêchent la validation
finale.

## 13. Rendu public et contrôles techniques observés

URL contrôlée :
`https://hagnere-code.ai/guides/woocommerce-ou-shopify`

```text
HTTP                           200
H1                             1
H2                             13
H3                             5
Mots visibles dans main        2 611
Tables                         7
Title                          WooCommerce ou Shopify : que choisir ? · Hagnéré Code
Canonical                      https://hagnere-code.ai/guides/woocommerce-ou-shopify
Robots                         index, follow
JSON-LD                        Article + BreadcrumbList
Largeurs                       320, 360, 390, 430, 768, 1024, 1440, 1600 px
Débordement horizontal stable  aucun sur document/body/main
Logs navigateur                aucun pendant le contrôle
```

Les huit liens externes de la page ont été contrôlés en ligne de commande :
HTTP Archive, Patchstack, Wordfence, Shopify tarifs, WooCommerce Subscriptions
et Stripe ont répondu en 200/202 ; Shopify Help et PayPlug ont répondu en 403
au client automatisé. Ces 403 ne prouvent pas un lien cassé : les contenus ont
été retrouvés par navigation et recherche web. Ils doivent être recontrôlés
dans un navigateur lors de P4.

Ce contrôle prouve ce qui a été observé sur la route publique le 24 juillet
2026. Il ne prouve pas l'identité cryptographique entre le déploiement et le
fichier local, un build de release, le bon fonctionnement d'un checkout, le
traitement du sitemap ou l'indexation Google.

## 14. Ordre de correction recommandé

1. Créer le dossier P1 et geler les preuves France.
2. Choisir le cas égal et inventorier les opérations réelles.
3. Recalculer paiement, temps interne et TCO 12/36/60.
4. Tester les sensibilités qui font changer le verdict.
5. Compléter migration, exploitation et conformité.
6. Réécrire sans perdre l'ouverture et les opinions actuelles.
7. Faire réaliser le P3 par un agent indépendant.
8. Corriger les défauts P3, puis exécuter le P4 humain et technique.
9. Ne marquer la page « validée » qu'après fermeture de tous les P1.

## 15. Sources primaires vérifiées le 24 juillet 2026

### Plateformes et paiements

- Shopify France, plans, fonctions, paiements, frais tiers et POS :
  https://www.shopify.com/fr/tarifs
- Shopify Help, migration depuis WooCommerce :
  https://help.shopify.com/en/manual/migrating-to-shopify/migrating-from-woocommerce
- Shopify Help, liste de contrôle de migration :
  https://help.shopify.com/fr/manual/intro-to-shopify/initial-setup/new-to-shopify-checklists/migrating-to-shopify-checklist
- Shopify Help, import/export clients et mots de passe :
  https://help.shopify.com/fr/manual/customers/import-export-customers
- WooCommerce, tarification et postes de coût :
  https://woocommerce.com/pricing/
- WooCommerce, documentation :
  https://woocommerce.com/documentation/woocommerce/
- WooCommerce Subscriptions :
  https://woocommerce.com/products/woocommerce-subscriptions/
- WooCommerce, migration des abonnés :
  https://woocommerce.com/document/subscriptions/migrating-subscribers-woocommerce-subscriptions/
- Stripe France, tarification :
  https://stripe.com/fr/pricing
- PayPlug France, tarifs Starter, Pro et Enterprise :
  https://www.payplug.com/fr/tarifs

### Performance, sécurité et obligations

- HTTP Archive, Web Almanac 2025, e-commerce :
  https://almanac.httparchive.org/en/2025/ecommerce
- WordPress, mise à jour et gestion des extensions :
  https://wordpress.org/documentation/article/manage-plugins/
- Shopify, sécurité du compte :
  https://help.shopify.com/fr/manual/privacy-and-security/account-security/account-security-best-practices
- CNIL, cookies et autres traceurs :
  https://www.cnil.fr/fr/cookies-et-autres-traceurs
- Service Public Entreprendre, obligations d'un site marchand :
  https://entreprendre.service-public.gouv.fr/vosdroits/F23455
- DGCCRF, directive européenne sur l'accessibilité des produits et services :
  https://www.economie.gouv.fr/dgccrf/les-fiches-pratiques/professionnels-vos-produits-et-services-doivent-etre-conformes-la-directive-accessibilite

### Sources sectorielles, correctement bornées

- Patchstack, *State of WordPress Security 2026* :
  https://patchstack.com/whitepaper/state-of-wordpress-security-in-2026/
- Wordfence, rapport annuel WordPress 2024 :
  https://www.wordfence.com/blog/2025/04/2024-annual-wordpress-security-report-by-wordfence/

Ces deux dernières sources viennent de vendeurs/acteurs de la sécurité. Elles
servent à identifier des familles de risques, pas à calculer la probabilité de
panne d'une boutique précise.

## 16. Benchmark concurrentiel — couverture seulement

- France, Shopify, comparaison officielle :
  https://www.shopify.com/fr/comparaison/shopify-vs-woocommerce
- France, Blog du Modérateur, marché e-commerce français :
  https://www.blogdumoderateur.com/woocommerce-shopify-prestashop-cms-e-commerce-francais/
- France, Seriousweb, comparatif :
  https://www.seriousweb.fr/shopify-vs-woocommerce-comparatif/
- États-Unis, Build Grow Scale, TCO trois ans :
  https://buildgrowscale.com/woocommerce-vs-shopify-total-cost-of-ownership
- États-Unis, Sprout Sage, TCO par GMV :
  https://sproutsagesolutions.com/decide/woocommerce-vs-shopify/
- Royaume-Uni, StoreBuilt, coûts, contrôle et migration :
  https://storebuilt.co.uk/blog/shopify-vs-woocommerce-for-uk-brands/
- Royaume-Uni, FallingBrick, comparaison 2026 :
  https://www.fallingbrick.co.uk/woocommerce-vs-shopify/
- Australie, HornTech, comparaison sur douze mois :
  https://horntech.com.au/blog/shopify-vs-woocommerce-australia-2026/
- Australie, Forbes Advisor AU :
  https://www.forbes.com/advisor/au/business/software/woocommerce-vs-shopify/
- Allemagne, Shopify Deutschland, argumentaire TCO :
  https://www.shopify.com/de/vergleich/shopify-vs-woocommerce

## 17. Condition de sortie

Le guide pourra prétendre au niveau étalon lorsque les onze P1 auront été
fermés, que le dossier de recherche conservera les preuves France dans la bonne
devise, que les TCO 12/36/60 et sensibilités auront été recalculés par une
personne indépendante, que la migration et l'exploitation auront été testées à
service égal, puis que P4 aura validé la plume humaine, les liens, le build, les
schemas, le clavier, le responsive et la route publiée.

Tant que ces portes ne sont pas franchies, le verdict exact reste :
**excellent guide d'orientation humaine ; comparaison économique encore
insuffisante pour devenir la référence du sujet.**
