# Giga-audit — « Wix ou WordPress : que choisir en 2026 ? »

**Date de l’audit :** 24 juillet 2026  
**Mode :** audit éditorial, factuel, concurrentiel et SEO — lecture seule  
**Route auditée :** `/guides/wix-ou-wordpress`  
**Fichier inspecté :** `src/app/guides/wix-ou-wordpress/page.tsx`  
**Empreinte SHA-256 du fichier au contrôle :** `da6900de557b085e7e7f748167dd6b4f7b157a7624768b4d7001eb25336d1d01`  
**Date publiée dans le registre :** 17 juillet 2026  
**Date modifiée dans le registre :** 21 juillet 2026  
**Dossier de recherche dédié trouvé :** non (`docs/research/wix-ou-wordpress.md` absent).  
**Build, navigateur réel et déploiement :** non exécutés dans cet audit ; aucune conclusion de production n’est donc revendiquée.

> **Périmètre.** Ce document est un rapport de contrôle, pas une réécriture de la page. Aucun fichier de page, registre, manifeste ou configuration n’a été modifié. Les montants proposés comme exemples ci-dessous sont des hypothèses de travail : ils ne sont ni un devis, ni une moyenne de marché, ni une promesse commerciale.

## 1. Verdict exécutif

Le guide est déjà **humain, lisible et honnête**. Il ne récite pas « Wix facile / WordPress puissant » sans conséquence : il explique la maintenance, le temps du dirigeant, les exports, le domaine, les responsabilités et le risque de migration. L’ouverture fait reconnaître une situation réelle (« changer une photo sans appeler un développeur »), le tableau de décision est immédiatement exploitable et le CTA n’impose pas une plateforme. C’est une base nettement supérieure aux comparatifs affiliés qui proclament un gagnant universel.

Il ne peut toutefois pas encore être qualifié de guide de référence. La promesse « comparer les coûts complets » n’est pas tenue par un calcul à périmètre égal : aucun TCO (coût total de possession) 12/36/60 mois ne chiffre simultanément création, abonnement, domaine, email, extensions, temps interne, maintenance, contenus, analytics, conformité, évolution et sortie. La page dit de calculer sur trois ans mais laisse le lecteur construire lui-même le modèle. Elle oppose parfois Wix à **WordPress.org** puis glisse vers WordPress.com dans une phrase ; cette distinction doit devenir un tableau explicite, car une entreprise qui cherche ce mot-clé ne sait souvent pas quel des trois produits elle compare.

La partie SEO est prudente sur le principe, mais la preuve est fragile : une source secondaire et ancienne est utilisée pour la déclaration de Google, tandis que Google recommande lui-même de ne pas déduire un classement d’un seul signal de vitesse. La donnée Web Almanac 2025 (74 % Wix contre 45 % WordPress dans son échantillon) est intéressante, mais elle doit préciser le périmètre, le type de mesure et l’absence de causalité. Les exports Wix sont bien documentés, mais les coûts, délais et redirections d’une reconstruction ne le sont pas. Enfin, RGPD, cookies, formulaires, sous-traitants et accessibilité sont évoqués en une phrase alors qu’ils déterminent concrètement la recette d’un site d’entreprise.

**Score actuel : 79/100 — NO-GO au standard renforcé tant qu’un P1 subsiste ; très bonne page d’orientation, pas encore décisionnaire chiffrée.**

- **P0 bloquant : 0** — aucune erreur factuelle critique démontrée dans le périmètre lu. Les anomalies vues dans une sortie de commande précédente (balises dupliquées) ne sont pas présentes dans le fichier brut contrôlé ; le build reste néanmoins à exécuter.
- **P1 avant version étalon : 12** — chiffrage, périmètre, distinctions produit, preuves SEO, obligations et QA manquent d’éléments actionnables.
- **P2 pour dépasser 90 : 9** — sensibilités, alternatives, ressource téléchargeable et expérience de lecture peuvent encore augmenter la valeur.

## 2. Ce que le lecteur comprend déjà bien

### Pédagogie et plume

- Les premières lignes parlent à un dirigeant qui veut préserver son temps, pas à un intégrateur. La question « lequel choisir sans regretter dans deux ans ? » est une bonne reformulation de l’intention.
- Le verdict est conditionnel et compréhensible : Wix si l’on veut un site simple sans technique ; WordPress.org si l’on accepte hébergement et maintenance contre plus de liberté ; rester en place si l’outil actuel fonctionne.
- Les termes « hébergement », « extension », « export » et « maintenance » sont reliés à une conséquence concrète. Le test avec une vraie page, une actualité, une photo et un formulaire est excellent.
- Le texte sait dire « ne migrez pas pour changer d’outil ». Cette opinion professionnelle, fondée sur le coût et le risque, augmente la confiance.

### Décision et conversion

- Le tableau par profils (indépendant, TPE éditoriale, entreprise qui publie, petite boutique, site WordPress existant) permet au lecteur de se situer sans lire toute la page.
- Les neuf contrôles avant signature sont une vraie aide de rendez-vous : domaine, export, sauvegardes, responsable et coût de sortie sont rarement demandés assez tôt.
- Les liens vers le prix d’un site vitrine, la maintenance, WooCommerce/Shopify et le sur-mesure forment un parcours commercial cohérent.
- Le CTA demande le rôle du site, le budget et la personne qui le mettra à jour, puis accepte l’hypothèse de rester sur l’outil actuel. C’est une conversion honnête, plus crédible qu’un « demandez un devis Wix ».

## 3. Manques précis observés

1. **TCO non calculé.** La page demande une comparaison sur trois ans mais ne chiffre aucun scénario 12/36/60 mois. « Abonnement + temps + maintenance » reste une consigne, pas une décision.
2. **Périmètre non gelé.** Un site de dix pages, un blog de 200 articles et une boutique WooCommerce ne supportent pas le même arbitrage. Il faut un cas principal identique avant les verdicts.
3. **WordPress.com insuffisamment séparé.** La phrase de distinction est correcte, mais il manque une colonne WordPress.com/managed WordPress avec abonnement, support, plugins et portabilité. Beaucoup de SERP utilisent « WordPress » pour parler de WordPress.com.
4. **Agences et DIY absents du tableau central.** Le lecteur choisit aussi entre construire seul sur Wix, être accompagné, acheter un WordPress géré ou faire développer. La plateforme seule ne détermine ni délai ni qualité.
5. **Coûts du site incomplets.** Email professionnel, consentement cookies, analytics, anti-spam, formulaires/CRM, photos, rédaction, traduction, redirections, sauvegarde hors hébergeur et temps de recette doivent être séparés des frais de plateforme.
6. **Migration qualitative.** Les exports sont cités mais aucun exemple ne donne le nombre de jours, les redirections 301, la conservation des positions, la reconstruction du design, la double exploitation ou le coût d’un incident.
7. **SEO trop binaire.** « WordPress davantage de liberté » est vrai mais ne dit pas quelles tâches créent une valeur : architecture, recherche de demande, modèles de pages, maillage, données structurées, Search Console et mesure de leads. Il manque un exemple montrant qu’un site Wix bien écrit peut battre un WordPress faible.
8. **Source SEO secondaire.** Ahrefs et Search Engine Journal sont utiles pour le contexte, mais une affirmation actuelle attribuée à Google doit renvoyer à Google Search Central ou être explicitement étiquetée « déclaration rapportée, historique ».
9. **Performance sans test du projet.** Web Almanac donne une observation agrégée, pas une prédiction. Il manque un protocole mobile reproductible sur une page Wix et une page WordPress de périmètre comparable.
10. **RGPD et accessibilité trop vagues.** La plateforme ne répond pas à la question de responsable/sous-traitant, cookies non nécessaires, conservation des prospects, formulaires, sous-traitants et tests clavier/contraste. La portée juridique dépend aussi de l’activité et de la taille.
11. **Acquisition et conversion absentes.** Un site d’entreprise est choisi pour des appels, demandes de devis, rendez-vous ou ventes. Il faut comparer formulaires, CRM, mesure du consentement, vitesse de traitement et coût d’un lead perdu.
12. **QA technique non prouvée.** Les métadonnées Article/Breadcrumb, canonical et FAQ sont visibles dans le code, mais aucun lint/typecheck/build, test de liens, validation JSON-LD, rendu 320–1600 px ou route publiée n’a été exécuté dans cet audit.

## 4. Benchmark de couverture : France, États-Unis, Royaume-Uni, Australie, DACH

Les concurrents sont utilisés pour repérer des angles et des formats, pas pour reprendre leurs prix. Les monnaies, TVA, conditions promotionnelles, lois et coûts de main-d’œuvre ne sont pas transposables tels quels.

| Marché / ressource | Ce qui est mieux couvert | Gain à apporter à Hagnéré Code |
|---|---|---|
| **France — WebTensor, 12 mars 2026** | Compare Wix, WordPress et agence sur prix d’entrée, prix sur trois ans, SEO, maintenance, propriété et facilité. | Reprendre l’idée du triptyque, mais remplacer les moyennes non sourcées par un scénario égal, des hypothèses et une responsabilité par poste. |
| **France — SK-web, publié 11 mars, mis à jour 8 avril 2026** | Ajoute Squarespace, Jimdo, Webflow, Framer et le site sur mesure ; traite lock-in, évolutivité et propriété des données. | Ajouter une section « ni Wix ni WordPress » réellement comparative, sans transformer la page en catalogue. |
| **États-Unis — Forbes Advisor, consulté le 24 juillet 2026** | Distingue valeur, plan gratuit inutilisable pour une activité sérieuse et cas d’usage petite entreprise. | Ajouter la question « que signifie professionnel ? » : domaine, marque, analytics, email et suppression des publicités, plutôt qu’un simple prix d’entrée. |
| **États-Unis / international — TechRadar, 11 août 2025** | Compare Wix à WordPress.com avec les niveaux de support, plugins, stockage et commerce ; explique que l’éditeur n’est pas l’auto-hébergé. | Créer la colonne WordPress.com et dater toute grille. Ne pas utiliser les prix US comme prix France. |
| **Royaume-Uni — AI Business Kit, 4 mai 2026** | Parle au dirigeant, annonce ses liens affiliés, donne une décision par profil et traite le coût de migration. | Déclarer les intérêts éventuels des sources, montrer le coût de sortie et conserver le ton non affilié de la page. |
| **Royaume-Uni — Social Nerd, 8 mai, mis à jour 28 juin 2026** | Compare Wix Studio et WordPress pour PME selon maintenance, équipe, complexité éditoriale et support post-lancement. | Distinguer Wix classique/Wix Studio et faire du responsable de maintenance un critère de premier rang. |
| **Australie — 4iT, 14 juillet 2026** | Donne une synthèse très claire : contrôle/portabilité contre commodité, et relie la décision à la croissance. | Garder cette formulation humaine, mais l’appuyer par une matrice de fonctions et un TCO au périmètre français. |
| **Australie — Duelling Pixels, mis à jour mars 2026** | Assume son biais d’agence WordPress et fournit un résumé « 60 secondes », avec propriété, SEO et migration. | Faire apparaître clairement les biais d’une source de benchmark et offrir une conclusion qui peut recommander Wix. |
| **DACH — Arifi Media, 18 juillet 2026** | Donne un vrai coût sur trois ans, valorise le temps interne et nomme les cas où les deux solutions sont mauvaises. | C’est le manque principal de la page : ajouter TCO et la phrase « parfois aucune des deux ». |
| **DACH — HubSpot Allemagne, consulté le 24 juillet 2026** | Compare SaaS/open source, hébergement, sécurité, maintenance et estimation de coûts annuels. | Séparer logiciel, hébergement, plugins, maintenance et support ; ne pas résumer WordPress à « gratuit ». |

**Différenciation visée :** les concurrents fournissent soit un verdict affilié, soit une fourchette. Le guide peut devenir supérieur en donnant, pour la même entreprise française, un coût complet, un test de tâche, une matrice fonctionnelle, un plan de sortie, un niveau de preuve et une recommandation révisable à 12/36/60 mois.

## 5. Scénario égal à introduire avant tout chiffrage

Publier un encadré « exemple illustratif » et garder les coûts éditoriaux, commerciaux et techniques séparés. Cas proposé : **site de services de 10 pages, 30 articles par an, 1 formulaire relié à une boîte partagée, 2 administrateurs, 1 langue, 1 pays, nom de domaine et 3 boîtes email, analytics avec consentement, 500 visites/jour, pas d’e-commerce, objectif de 20 demandes qualifiées par mois, horizon 12/36/60 mois**.

| Poste à comparer | Wix | WordPress.org auto-hébergé | WordPress.com/managed WP | Pourquoi il doit être visible |
|---|---|---|---|---|
| Création et migration initiale | forfait + intégration | design + intégration + configuration | forfait + configuration | Le logiciel ne représente pas la production du site. |
| Abonnement/hébergement | inclus, tarif local à vérifier | séparé | inclus selon plan | La comparaison doit utiliser le même pays, la même TVA et la même durée. |
| Domaine/email | renouvellement + email souvent séparé | registrar + email | selon plan/fournisseur | Un site sans email professionnel n’est pas un cas professionnel complet. |
| Plugins/apps | apps Wix | plugins gratuits/payant | plugins selon plan | La fonction requise, pas le nombre de plugins, doit être comparée. |
| Maintenance/sécurité | plateforme, comptes et contenu à gérer | mises à jour, sauvegardes, sécurité | niveau de gestion contractuel | « Géré » doit dire par qui, quand et avec quel SLA. |
| Contenus/SEO/analytics | même lot de pages et articles | même lot | même lot | Sinon WordPress paraît meilleur seulement parce qu’il reçoit plus de travail. |
| Temps de l’équipe | heures d’édition et d’incident | idem + opérations | idem | Le temps du dirigeant est un coût, pas une économie invisible. |
| Sortie | exports + reconstruction | fichiers/base + licences | export et limites du plan | Le coût de départ change la décision à cinq ans. |

### TCO illustratif à calculer (valeurs d’exemple, pas des tarifs)

Pour éviter une fausse précision, proposer des **fourchettes avec hypothèses**, puis un exemple chiffré reproductible. À titre de structure de calcul, le lecteur peut tester :

- **Wix accompagné :** 2 500 € de création, 1 200 €/an de plateforme/email/apps, 2 400 €/an de contenus et petites évolutions, 600 €/an de support, 1 000 € de réserve de sortie. Soit environ **6 700 € à 12 mois, 15 700 € à 36 mois et 24 900 € à 60 mois**.
- **WordPress géré :** 4 000 € de création, 900 €/an d’hébergement/licences/email, 2 400 €/an de maintenance, 2 400 €/an de contenus et évolutions, 1 500 € de réserve de migration. Soit environ **11 200 € à 12 mois, 22 600 € à 36 mois et 34 000 € à 60 mois**.
- **DIY Wix :** 1 200 €/an de plateforme/apps et 8 h/mois de temps dirigeant valorisé à 45 €/h (4 320 €/an), plus 600 € de lancement. Soit environ **6 120 € à 12 mois, 16 560 € à 36 mois et 27 120 € à 60 mois**, avant incident ou aide ponctuelle.

Ces lignes ne doivent jamais être présentées comme « les vrais prix Wix/WordPress ». Elles servent à montrer la méthode : même périmètre, mêmes contenus, même valeur de l’heure, même responsabilité, même réserve de sortie. La page doit permettre de remplacer chaque hypothèse par le devis réel et recalculer les trois horizons. Un encadré de sensibilité doit faire varier l’heure du dirigeant (30/45/80 €), le volume d’articles, le nombre de contributeurs et le niveau de maintenance.

## 6. Conversion et cas métier à ajouter

Le lecteur n’achète pas un CMS ; il veut des appels, des devis, des rendez-vous ou une boutique exploitable. Ajouter quatre mini-scénarios clairement signalés comme illustratifs :

1. **Artisan local :** 6 pages, formulaire et téléphone, 2 changements/mois, pas de blog. Wix gagne souvent si le dirigeant veut tout faire seul ; le WordPress géré n’a de sens que si le contenu ou l’intégration progresse.
2. **Cabinet qui publie :** 10 pages, 30 articles/an, newsletter, suivi des conversions. WordPress peut justifier sa maintenance si l’équipe exploite réellement l’architecture et le maillage ; sinon un Wix bien édité reste suffisant.
3. **Entreprise avec outil métier :** formulaires qualifiés, CRM, espace client, synchronisation. Le critère devient API, droits, sécurité, reprise des données et SLA ; ni Wix ni WordPress ne doit être choisi par habitude.
4. **Boutique standard :** catalogue, paiement, livraison, retours et consentement. Wix e-commerce et WooCommerce doivent être comparés à Shopify avec volume de commandes, application, stock et export ; le guide actuel renvoie correctement à un comparatif dédié mais ne chiffre pas le seuil.

Pour chaque scénario, donner : objectif, volume, fonction indispensable, coût de mise en place, coût récurrent, responsable, risque d’échec et prochain test. Ajouter une phrase de décision après chaque tableau (« si le site doit générer 20 demandes, mesurez d’abord le coût par demande ; le CMS est secondaire »).

## 7. SEO, performance, RGPD et accessibilité : correctif factuel

### SEO et performance

- Remplacer ou reléguer la déclaration issue de Search Engine Journal par une source Google Search Central datée. Google indique que les Core Web Vitals participent aux systèmes de classement, mais qu’un bon score ne garantit pas une première place ; la qualité et la pertinence restent nécessaires.
- Conserver Web Almanac comme observation secondaire en écrivant précisément « échantillon mobile Web Almanac 2025 » et en affichant la taille/catégorie de l’échantillon si la source le permet. Ne pas transformer 74 %/45 % en supériorité causale de Wix.
- Ajouter un protocole : même page, même poids d’images, même pays de test, trois mesures mobile, LCP/INP/CLS, résultat et date. L’absence de test doit rester visible.
- Expliquer qu’un WordPress dispose de plus de leviers, mais que chaque levier coûte du travail ; un site Wix avec une offre, des pages utiles et des leads suivis peut battre un WordPress mal rédigé. C’est l’opinion professionnelle la plus utile au lecteur.

### RGPD, données et accessibilité

Ajouter une checklist non juridique et datée : qui est responsable du traitement ; quels formulaires/traceurs sont utilisés ; où vont les données ; combien de temps elles sont conservées ; quels sous-traitants ont accès ; comment un collaborateur est retiré ; comment exporter et supprimer une demande ; qui possède le compte du domaine et de l’analytics. Relier la section aux ressources CNIL et France Num et indiquer qu’une validation spécialisée peut être nécessaire.

Tester sur la page livrée : clavier seul, focus visible, intitulés de champs, message d’erreur, contraste, zoom, navigation mobile et absence de contenu essentiel dans une animation. Ne pas promettre la conformité RGAA parce qu’un thème ou une plateforme est réputé accessible.

## 8. P0/P1/P2 numérotés

### P0 — bloquant

Aucun P0 démontré pendant la lecture. Une erreur de compilation, un lien mort vers une documentation Wix d’export, un calcul présenté comme un tarif actuel mais faux pour la France, ou une promesse de classement SEO non étayée ferait immédiatement passer la porte P0 en fermée.

### P1 — avant la version étalon

- **P1-WIX-01 — TCO 12/36/60.** Ajouter un modèle égal Wix/WordPress.org/WordPress.com ou WordPress géré, avec création, récurrence, temps, contenu, conformité, support et sortie.
- **P1-WIX-02 — périmètre principal.** Figer pages, articles, formulaires, rôles, trafic, pays, langue, email, analytics, objectif de leads et horizon.
- **P1-WIX-03 — distinction produit.** Séparer visuellement Wix, WordPress.org auto-hébergé, WordPress.com et WordPress géré ; ne plus laisser « WordPress » recouvrir quatre offres.
- **P1-WIX-04 — hypothèses tarifaires datées.** Relever le pays, la devise, la TVA, la durée et le renouvellement sur la page officielle Wix ; faire de même pour les coûts WordPress choisis. Aucun prix secondaire sans date et URL.
- **P1-WIX-05 — migration calculée.** Chiffrer export, reconstruction, redirections, recette, double hébergement, perte de contenu, congélation de publication et plan de retour.
- **P1-WIX-06 — fonctionnalités égales.** Ajouter matrice formulaires/CRM, blog, multilingue, rôles, sauvegardes, analytics, cookies, e-commerce, intégrations, API, SLA, propriété et sortie.
- **P1-WIX-07 — SEO primaire.** Refaire les affirmations avec Google Search Central et Wix/WordPress officiels ; qualifier Ahrefs/SEJ comme contexte historique et ne jamais promettre une position.
- **P1-WIX-08 — performance testable.** Documenter échantillon Web Almanac et protocole d’essai mobile ; ne pas tirer de causalité plateforme à partir d’une moyenne.
- **P1-WIX-09 — RGPD/accessibilité.** Ajouter déclencheurs, responsables, tests et sources CNIL/France Num ; distinguer information générale et validation juridique.
- **P1-WIX-10 — acquisition.** Ajouter au moins un calcul de demande qualifiée : objectif, conversion, coût de l’outil, temps de réponse, consentement et mesure.
- **P1-WIX-11 — dossier de recherche.** Créer le dossier absent avec requêtes, SERP France/international, sources, dates, extraits, portée, niveau de confiance et matrice de gain d’information.
- **P1-WIX-12 — QA avant publication.** Exécuter diff-check, lint/typecheck/build, liens, JSON-LD Article/Breadcrumb/FAQ, canonical, sitemap, rendu réel 320–1600 px et route déployée ; enregistrer les preuves et leurs dates.

### P2 — amélioration importante

- **P2-WIX-01 — modèle de calcul téléchargeable.** Fournir un tableur ou PDF « Wix/WordPress : coût complet et plan de sortie » avec champs éditables, hypothèses et exemples.
- **P2-WIX-02 — sensibilité.** Faire varier valeur de l’heure, nombre d’articles, administrateurs, apps, trafic, incidents et coût d’un prestataire.
- **P2-WIX-03 — alternatives.** Résumer Squarespace, Webflow, Framer, Shopify et site sur mesure selon trois déclencheurs, sans ajouter une liste de marques sans décision.
- **P2-WIX-04 — scores d’accessibilité.** Ajouter une petite grille de test humain, pas seulement un score automatique.
- **P2-WIX-05 — ownership contractuel.** Donner une checklist de propriété du domaine, comptes, contenus, photos, licences, code, analytics et sauvegardes.
- **P2-WIX-06 — cinq ans.** Montrer le cas où un abonnement stable est préférable à une migration et celui où l’absence de portabilité devient coûteuse.
- **P2-WIX-07 — exemples chiffrés de conversion.** Comparer 20 demandes/mois, coût par demande et temps de réponse ; séparer effet de la plateforme et effet de l’offre.
- **P2-WIX-08 — FAQ anti-duplication.** Ajouter WordPress.com, site existant, e-commerce, multilingue et « quand ne choisir aucun des deux » sans répéter les sections.
- **P2-WIX-09 — UX des tableaux.** Contrôler les tableaux au vrai viewport mobile, proposer cartes ou phrases si le défilement horizontal masque la décision.

## 9. Portes P1–P4

- **P1 — recherche/cadrage : fermée.** Les sources existent dans ce rapport, mais le dossier de recherche dédié, la SERP documentée et le scénario égal manquent.
- **P2 — rédaction/intégration : à faire.** TCO, distinctions produit, migration chiffrée, matrice de fonctions, SEO primaire, RGPD/accessibilité et conversion restent à intégrer.
- **P3 — contre-audit indépendant : non validée.** Ce rapport est le premier contrôle et n’a pas vérifié un snapshot corrigé.
- **P4 — plume humaine + QA : partiellement prometteuse, non prouvée.** La plume est lisible et le lecteur est bien ciblé, mais aucune lecture par un dirigeant externe, aucun anti-IA documenté, aucun rendu responsive, build ou contrôle de route n’a été exécuté ici.

## 10. Scorecard

| Axe | Note | Justification |
|---|---:|---|
| Intention et promesse | 9/10 | La question du regret, du temps et de la sortie est claire dès le début. |
| Pédagogie humaine | 9/10 | Exemples reconnaissables, vocabulaire expliqué, verdicts conditionnels. |
| Profondeur | 8/10 | Maintenance, SEO, export et sécurité présents ; TCO, intégrations et conversion trop courts. |
| Preuves | 7/10 | Sources visibles et bonnes références officielles Wix ; dossier absent et plusieurs affirmations SEO secondaires. |
| Comparaison | 7/10 | Wix/WordPress bien opposés ; WordPress.com, managed WP, alternatives et agence manquent au tableau. |
| Chiffrage | 6/10 | La méthode est annoncée, mais aucun calcul égal 12/36/60 n’est fourni. |
| Risques/obligations | 7/10 | Lock-in, sécurité et domaine traités ; RGPD, accessibilité et migration opérationnelle à détailler. |
| Originalité | 9/10 | Le test de tâche, la question de la sortie et le conseil de ne pas migrer sont très utiles. |
| Conversion honnête | 9/10 | CTA concret et possibilité de rester sur l’existant ; pas de plateforme imposée. |
| SEO/UX technique | 8/10 | Metadata/Article/Breadcrumb visibles dans le code ; build, liens, mobile et production non vérifiés. |
| **Total** | **79/100** | Solide comparatif d’orientation ; pas encore la décision chiffrée et prouvée promise. |

## 11. Conditions de sortie

Le guide pourra être marqué « version étalon » lorsque P1-WIX-01 à P1-WIX-12 seront traités, que les montants seront recalculés par un second agent, que la distinction WordPress.org/WordPress.com sera relue, que les affirmations SEO seront ramenées aux sources primaires, et que P4 prouvera la lecture humaine, l’accessibilité de base, le responsive, le build, les données structurées, les liens et la route réellement publiée. Tant que ces portes ne sont pas franchies, il est honnête de le qualifier de **très bon guide d’orientation à renforcer**, pas de promettre la première place Google.

## 12. Sources vérifiées le 24 juillet 2026

### Sources officielles et primaires

- Wix, *Pricing Information / Premium Plans*, consulté le 24 juillet 2026 : https://www.wix.com/plans — la page précise que prix/devise varient selon la localisation et que le prix final est celui de la commande.
- Wix Support, *Exporting or embedding your Wix site elsewhere* : https://support.wix.com/en/article/exporting-or-embedding-your-wix-site-elsewhere
- Wix Support, *Request: exporting blog posts to other platforms* : https://support.wix.com/en/article/wix-blog-request-exporting-blog-posts-to-other-platforms
- Wix Support, exports produits, contacts et commandes : https://support.wix.com/en/article/wix-stores-exporting-your-product-list ; https://support.wix.com/en/article/wix-contacts-exporting-your-contacts ; https://support.wix.com/en/article/exporting-orders-3126323
- Wix Support, transfert du domaine : https://support.wix.com/en/article/transferring-your-wix-domain-away-from-wix-2477749
- WordPress.org, téléchargement et prérequis : https://wordpress.org/download/ — le logiciel est présenté comme gratuit/open source mais l’installation auto-hébergée suppose un domaine et un hébergement.
- WordPress.org, différence WordPress.org/WordPress.com : https://wordpress.org/documentation/article/difference-between-wordpress-org-and-wordpress-com/
- WordPress Developer Handbook, sécurité et mises à jour : https://developer.wordpress.org/advanced-administration/security/hardening/
- Google Search Central, expérience de page : https://developers.google.com/search/docs/appearance/page-experience — un bon rapport Core Web Vitals ne garantit pas le haut des résultats.
- Google Search Central, Core Web Vitals : https://developers.google.com/search/docs/appearance/core-web-vitals?hl=fr — dernière mise à jour indiquée : 18 décembre 2025.
- Google Search Central, contenu utile et people-first : https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- CNIL, qualification des rôles RGPD : https://www.cnil.fr/fr/rgpd-comment-bien-identifier-son-role
- France Num, cahier des charges de site internet (20 mars, mis à jour 23 mars 2026) : https://www.francenum.gouv.fr/guides-et-conseils/developpement-commercial/site-web/batir-le-cahier-des-charges-du-site-internet

### Données et benchmark technique à qualifier

- HTTP Archive, *Web Almanac 2025 — CMS* : https://almanac.httparchive.org/en/2025/cms — observation agrégée, à contextualiser par taille et méthode d’échantillonnage.
- Patchstack, *State of WordPress Security 2026* : https://patchstack.com/whitepaper/state-of-wordpress-security-in-2026/ — source d’un prestataire de sécurité ; son corpus et son biais doivent rester explicites.

### Benchmark concurrentiel — couverture, pas preuve tarifaire française

- WebTensor (France), 12 mars 2026 : https://webtensor.fr/blog/wix-vs-wordpress-vs-agence-artisan
- SK-web (France), publié 11 mars et mis à jour 8 avril 2026 : https://sk-web.fr/article/wix-wordpress-site-sur-mesure-comparatif-2026
- Forbes Advisor, *Wix vs. WordPress Comparison*, consulté le 24 juillet 2026 : https://www.forbes.com/advisor/business/software/wix-vs-wordpress/
- TechRadar, *Wix vs WordPress for small business*, 11 août 2025 : https://www.techradar.com/pro/website-building/wix-vs-wordpress-which-website-builder-is-better-for-small-business
- AI Business Kit (UK), 4 mai 2026 et divulgation d’affiliation : https://aibusinesskit.co.uk/wix-vs-wordpress-for-uk-small-businesses-2026/
- Social Nerd (UK), 8 mai, mis à jour 28 juin 2026 : https://www.socialnerd.co.uk/insights/wix-studio-vs-wordpress-for-smes
- 4iT (Australie), 14 juillet 2026 : https://4it.com.au/web-design/wordpress-vs-wix/
- Duelling Pixels (Australie), mis à jour mars 2026 : https://duellingpixels.com/wordpress-vs-wix/
- Arifi Media (DACH), 18 juillet 2026 : https://www.arifimedia.de/insights/wix-oder-wordpress-vergleich
- HubSpot Allemagne, comparatif Wix/WordPress : https://www.hubspot.de/comparisons/wix-vs-wordpress

