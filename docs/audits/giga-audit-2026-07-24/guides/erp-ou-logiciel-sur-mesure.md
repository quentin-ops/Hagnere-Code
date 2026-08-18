# Giga-audit indépendant — ERP ou logiciel sur mesure

**Date de l’audit : 24 juillet 2026**  
**Périmètre :** audit éditorial, décisionnel, preuves, comparaison, conversion et SEO de la page `/guides/erp-ou-logiciel-sur-mesure`.  
**Règle de lecture :** cette note est un diagnostic indépendant. Elle ne vaut ni validation de mise en production, ni preuve d’indexation, ni test de performance.

## 1. Verdict exécutif

Le guide est nettement plus utile que la majorité des pages « ERP vs sur mesure » : il refuse le faux duel, reconnaît l’intérêt commercial de Hagnéré Code, propose quatre architectures, demande de tester trois tâches réelles et donne un exemple de TCO chiffré. Le lecteur dirigeant peut déjà comprendre la logique de décision.

Il n’est toutefois pas encore au niveau « meilleur résultat Google » pour une décision d’achat engageante. Le coût est présenté sur quatre ans alors que le guide doit permettre une décision à 12, 36 et 60 mois. Surtout, les quatre options ne sont pas démontrées équivalentes fonctionnellement : « même besoin » ne précise ni le volume de dossiers, ni les intégrations, ni le niveau de service, ni les rôles, ni les critères d’acceptation. Le statu quo (continuer avec les outils actuels) est cité comme possibilité mais n’a pas de TCO propre. Enfin, le benchmark international n’est pas visible dans la page et les fonctions/licences de solutions existantes ne sont pas confrontées à un référentiel daté.

**Score indépendant : 80/100.**  
**P0 : 0 · P1 : 11 · P2 : 8.**  
Décision : **réécriture recommandée avant de présenter la page comme référence définitive**. Le fond est publiable comme guide de cadrage, mais pas encore comme comparatif complet permettant de signer un projet avec un niveau de preuve homogène.

## 2. Snapshot vérifiable

| Élément | Observation au 24/07/2026 | Preuve locale |
|---|---|---|
| Page auditée | Composant React de 1 073 lignes, environ 4 698 mots source | `src/app/guides/erp-ou-logiciel-sur-mesure/page.tsx` |
| Empreinte page | `2f1ee6067b4f2d98a9c9225e14c86bef7d9f3ee34d0fb2bfb9d2487464b234f5` | SHA-256 calculé pendant l’audit |
| OG | Image dédiée, texte « ERP, logiciel standard, module spécifique ou sur mesure : comment choisir » | `src/app/guides/erp-ou-logiciel-sur-mesure/opengraph-image.tsx` |
| Empreinte OG | `f6d22431a29c62d1c5946265e8db8c7e96a6119c67e4bebd1b073bd751709200` | SHA-256 calculé pendant l’audit |
| Registre | Titre, canonical, Article et BreadcrumbList gérés par l’application ; date publiée 20/07/2026, modifiée 21/07/2026, lecture 17 min | `src/lib/guides.ts` |
| Dossier de recherche | Quatre passes présentes, 307 lignes / 5 023 mots, mais auto-évaluation par l’auteur et non preuve indépendante | `docs/research/erp-ou-logiciel-sur-mesure.md` |
| État partagé | `src/lib/guides.ts` était déjà modifié par un autre travail ; modification laissée intacte | `git status --short` |
| QA non exécutée | Aucun navigateur, build, Lighthouse, test formulaire, test d’indexation ou vérification production exécuté dans cet audit | Limite méthodologique |

## 3. Ce que le lecteur reçoit déjà

### Forces constatées

- L’ouverture part d’un problème reconnaissable : CRM, stocks, Excel et ressaisies, puis donne une réponse courte : choisir la solution la plus simple qui couvre les tâches importantes, s’intègre et reste maintenable.
- Le texte distingue ERP, logiciel métier, sur-mesure et SaaS ; il évite donc l’erreur fréquente consistant à comparer un mode d’hébergement avec un niveau de personnalisation.
- Les quatre voies sont lisibles : standard/vertical, ERP configuré, ERP avec module spécifique, application entièrement sur mesure.
- La page demande une démonstration sur trois situations identiques (urgence, remplacement d’un technicien, correction après clôture), avec données et profils identiques. C’est une excellente base de preuve.
- Le conflit d’intérêts est déclaré explicitement et le guide accepte la possibilité qu’un logiciel existant soit meilleur. Cela augmente la confiance.
- Le TCO fictif est arithmétiquement cohérent : les totaux affichés (74 204 €, 121 305 €, 178 224 €, 228 407 €) retombent sur les composantes annoncées. Le calcul de ROI de l’exemple mixte (61 776 € de gain net, 34,7 %, seuil vers le 23e mois) est cohérent avec les hypothèses données.
- Les données, la réversibilité, les droits, les sauvegardes, le code et la documentation sont évoqués ; beaucoup de pages concurrentes les oublient.

### Ce qui empêche encore le « top résultat »

Le guide explique une bonne méthode, mais ne permet pas encore de reproduire la comparaison sans inventer des hypothèses. Il manque un scénario fonctionnel canonique, une matrice de capacité à périmètre égal, les coûts sur les trois horizons demandés, un cas statu quo et une sensibilité lisible. Une décision de plusieurs dizaines de milliers d’euros ne doit pas dépendre de la phrase « les quatre options couvrent ici le même besoin » sans définition testable de ce besoin.

## 4. Benchmark de couverture (France, États-Unis, Royaume-Uni, Australie/DACH)

Le benchmark porte sur la couverture éditoriale observée, pas sur une approbation de la qualité commerciale des concurrents. Les pages d’éditeurs servent uniquement à vérifier des fonctions, des plans et des conditions affichées ; elles ne constituent pas une vérité neutre sur le meilleur choix.

| Marché / type | Page consultée (URL directe) | Ce qu’elle couvre mieux ou différemment | Ce que Hagnéré Code doit en tirer |
|---|---|---|---|
| France, institutionnel | [France Num — Pourquoi et comment mettre en place un ERP pour les TPE](https://www.francenum.gouv.fr/guides-et-conseils/pilotage-de-lentreprise/logiciels-de-gestion-de-lentreprise/pourquoi-et-comment), mis à jour 13/04/2026 | Fonctions ERP, risque de captivité éditeur, choix libre/propriétaire et conduite de projet | Ajouter une vraie ligne « captivité / sortie » au tableau de coût et distinguer source institutionnelle d’avis Hagnéré. |
| France, institutionnel | [France Num — Logiciels de gestion de l’entreprise](https://www.francenum.gouv.fr/guides-et-conseils/pilotage-de-lentreprise/logiciels-de-gestion-de-lentreprise), mis à jour 23/01/2026 | Vue d’ensemble TPE/PME, arbitrage solution unique vs outils spécialisés | Ajouter un arbre de décision selon taille, métier, mobilité et criticité ; mieux couvrir le scénario best-of-breed + intégration. |
| France, officiel données | [CNIL — Faire un choix éclairé de son architecture](https://www.cnil.fr/fr/faire-un-choix-eclaire-de-son-architecture), 27/01/2020 | Parcours des données, localisation, sécurité, portabilité en format structuré | Transformer les rappels RGPD en critères d’acceptation et en test d’export/restauration ; préciser que la conformité est contextuelle. |
| France, concurrent | [Aktislab — ERP sur mesure ou SaaS](https://www.aktislab.fr/articles/erp-sur-mesure-ou-saas-comment-choisir), consulté 24/07/2026 | Angle « vitesse de déploiement contre différenciation » | Conserver l’angle, mais le prouver par délai, charge interne et risque de retard, pas par adjectifs. |
| France, concurrent | [Cap Numerik — ERP sur mesure vs standard](https://cap-numerik.fr/blog/erp-sur-mesure-vs-standard-guide-choix-pme), consulté 24/07/2026 | Approche PME plus directement commerciale | Ajouter des exemples de dirigeants et une recommandation tranchée par profil, sans masquer les contre-cas. |
| États-Unis, éditeur | [Microsoft Dynamics 365 Business Central pricing](https://www.microsoft.com/en-us/dynamics-365/products/business-central/pricing), page consultée 24/07/2026 | Plans Essentials à 80 $/utilisateur/mois, Premium à 110 $, Team Members à 8 $ ; fonctions affichées (finance, achats, stock, supply chain, production) et add-ons | Montrer dans la méthode qu’un prix utilisateur ne comprend ni configuration, intégration, migration ni conduite du changement ; convertir toute devise/date et rappeler « prix informatifs, pays variant ». |
| États-Unis / global, éditeur | [Odoo Pricing](https://www.odoo.com/pricing), page consultée 24/07/2026 (page affichant notamment Standard 24,90 $ et Custom 49 $/utilisateur/mois en facturation annuelle, conditions susceptibles de varier) | Distingue One App Free, Standard et Custom ; explicite que Odoo.sh n’est pas inclus dans certaines offres | Ajouter une checklist licences : utilisateurs internes/externes, apps, hosting, API, Studio, multi-société, support et hausse de prix. Ne jamais reprendre ces montants comme tarifs français. |
| Royaume-Uni, concurrent | [Timeline Digital — Bespoke vs off-the-shelf software, UK guide 2026](https://timelinedigi.com/blog/bespoke-vs-off-the-shelf-software-uk), publié 2026 | Met en scène délai, contrôle, coût d’un ERP et critères de choix pour un dirigeant | Ajouter un paragraphe « délai avant valeur » et une comparaison adoption/retard, avec hypothèses explicites. |
| Royaume-Uni, comparateur | [ERP Research — ERP for small business](https://www.erpresearch.com/en-gb/erp-for-small-business-smb-sme), mis à jour 2026 | Grille de sélection multi-éditeurs, fonctions, prix, fit et conseil supposé vendor-agnostic | S’inspirer d’un scoring reproductible, mais publier les pondérations et la source de chaque note. |
| Australie, concurrent | [ERP Search Australia — ERP selection checklist](https://erpsearch.com.au/guides/erp-selection-checklist-smb/), consulté 24/07/2026 | Checklist business fit, sécurité, données, intégrations, partenaires, TCO et score décisionnel | Ajouter un score par critère avec seuil éliminatoire et une colonne « preuve fournie / non fournie ». |
| Australie, concurrent | [eSoftware Solutions — Build vs buy software Australia 2026](https://www.esoftwaresolutions.com.au/blog/build-vs-buy-software-australia-2026), publié 2026 | Structure build/buy et conséquences stratégiques pour un dirigeant | Intégrer le coût d’opportunité, la gouvernance de produit et la responsabilité de maintenance. |
| DACH, comparateur | [ERP-Software.org — Independent ERP comparison](https://erp-software.org/en/), consulté 24/07/2026 | Filtre par taille, secteur, fonctions, déploiement et positionnement annoncé indépendant | Ajouter secteur, nombre de sites, localisation, fiscalité et contraintes d’export à la matrice d’équivalence. |

**Lecture du benchmark :** les concurrents internationaux gagnent souvent par l’exemple sectoriel, le tableau de sélection, le délai et le prix d’entrée. Ils sont rarement plus rigoureux sur les coûts de sortie. L’avantage éditorial de cette page est donc réel, mais il doit être rendu calculable et non seulement narratif.

## 5. Audit de l’intention et de la pédagogie

### Intention principale

La requête « ERP ou logiciel sur mesure » mélange quatre intentions : comprendre les termes, choisir une architecture, estimer le budget et trouver un interlocuteur. Le guide traite les quatre, mais l’introduction devrait annoncer plus franchement le livrable : « à la fin, vous aurez un tableau de décision à remplir et un test de trois situations à faire en démonstration ».

### Pédagogie à renforcer

1. **Commencer par un cas de dirigeant.** Donner un exemple simple : 20 personnes, 600 interventions par mois, 3 outils, 8 heures de ressaisie hebdomadaire. Puis montrer comment chaque option traite ce cas.
2. **Définir les catégories sans recouvrement.** « Standard », « vertical », « ERP configuré » et « module spécifique » se chevauchent aujourd’hui. Dire si le vertical est un sous-ensemble du standard et si la configuration exclut tout code.
3. **Remplacer les pourcentages vagues par des seuils.** Exemple : au moins 3 workflows critiques, 2 rôles, 1 export, 1 reprise d’erreur et 1 intégration testés avant de retenir une option.
4. **Faire un tableau “ce que le lecteur voit”.** Pour chaque option : délai avant premier usage, charge interne, responsabilité après mise en service, dépendance fournisseur, facilité de sortie et cas d’échec.
5. **Expliquer les coûts invisibles.** La page les nomme mais ne les chiffre pas : nettoyage de données, pilotage, support de proximité, changements de périmètre, tests de régression, formation des nouveaux arrivants, coût d’une interruption, API et stockage.
6. **Nommer les contre-cas.** Un ERP est un mauvais choix si l’adoption impose des contournements ; le sur-mesure est un mauvais choix si le processus n’est pas stabilisé ou si personne ne possède le produit ; le statu quo est un mauvais choix quand une erreur coûte plus que l’abonnement.
7. **Clarifier la frontière juridique.** Les exigences de conservation, facturation, santé, paie ou traçabilité dépendent du secteur. Ajouter « à valider avec l’expert compétent » plutôt que laisser entendre qu’une checklist générique suffit.

## 6. Audit de la preuve et de la comparaison

### Ce qui est démontré

- Les calculs de l’exemple fictif sont vérifiables et les montants sont explicitement présentés comme fictifs.
- La méthode de test des trois situations est transférable à un appel d’offres.
- Les risques de réversibilité, droits, API et sauvegardes sont nommés.

### Ce qui n’est pas encore démontré

- Aucune capacité réelle d’Odoo, Business Central, ERPNext ou d’un ERP vertical n’est testée sur le scénario ; les pages éditeurs restent hors du guide.
- Le « même besoin » n’est pas défini par un volume, des rôles, des SLA, des intégrations, des règles métier et un résultat mesurable.
- La comparaison n’inclut pas de score pass/fail par option ; un lecteur ne peut pas vérifier que les quatre TCO achètent effectivement la même valeur.
- Le statu quo n’a pas de coût de travail, erreur, risque, maintenance et sortie. L’absence de facture n’est pas un coût nul.
- Le guide cite la CNIL pour les principes, mais ne rattache pas chaque exigence à un contrôle de recette ou à une clause contractuelle.

### Matrice d’équivalence obligatoire à ajouter

Le futur tableau doit figer un seul scénario, par exemple : 20 utilisateurs (5 administratifs, 12 techniciens, 3 managers), 600 interventions/mois, 3 000 clients, 2 sites, 1 CRM, 1 outil comptable, 1 application mobile, 2 000 pièces jointes/mois, conservation et export définis, disponibilité cible et délai de support définis.

| Axe | Mesure à figer | Preuve acceptable |
|---|---|---|
| Processus | 3 workflows critiques, 1 exception, 1 correction | Démonstration enregistrée et résultat attendu |
| Utilisateurs | rôles, simultanéité, croissance à 36/60 mois | Matrice de droits et test multi-profils |
| Données | volumes, pièces jointes, historique, identifiants | Import d’échantillon, contrôle des liens |
| Intégrations | sens, fréquence, erreurs, reprise | Test API et scénario d’échec |
| Exploitation | sauvegarde, restauration, RPO/RTO, support | Compte rendu de restauration et SLA |
| Adoption | temps de formation, réussite sans aide | Test par futurs utilisateurs |
| Sortie | format, délai, coût, code, accès | Export complet de répétition |
| Économie | licences, hébergement, build, TMA, interne, sortie | Devis détaillé et hypothèses écrites |

## 7. TCO : contrôle arithmétique et extension nécessaire

### Contrôle de l’exemple existant

Les quatre TCO sur quatre ans sont cohérents avec les hypothèses du guide :

| Option fictive | Mise en place | Récurrences A1–A4 | Sortie | TCO affiché |
|---|---:|---:|---:|---:|
| Standard | 18 000 € | 50 204 € | 6 000 € | **74 204 €** |
| ERP configuré | 38 000 € | 75 305 € | 8 000 € | **121 305 €** |
| ERP + module | 70 000 € | 96 224 € | 12 000 € | **178 224 €** |
| Sur mesure | 112 000 € | 100 407 € | 16 000 € | **228 407 €** |

Ces nombres ne sont ni des prix de marché ni une offre. Le guide doit le rappeler à proximité de chaque tableau, pas seulement dans le paragraphe d’introduction.

### Horizons que la page doit publier

En reprenant strictement les hypothèses actuelles (récurrence indexée de 3 %, sortie payée à l’horizon), on obtient la conversion illustrative suivante. Elle ne remplace pas un devis réel ; elle montre pourquoi une seule durée de quatre ans est insuffisante.

| Option | 12 mois | 36 mois | 60 mois |
|---|---:|---:|---:|
| Standard | 36 000 € | 61 091 € | 75 710 € |
| ERP configuré | 56 000 € | 101 636 € | 141 564 € |
| ERP + module | 105 000 € | 153 091 € | 204 111 € |
| Sur mesure | 160 000 € | 202 182 € | 255 419 € |

**Convention à afficher :** TCO = mise en place + récurrences échues + coût de sortie à l’horizon. Afficher aussi une seconde vue « sans sortie » pour éviter de faire croire qu’un changement est obligatoire à 12 mois. Le statu quo doit figurer avec ses coûts de temps, erreurs, outils existants, risque et remplacement différé.

### Sensibilité minimale

Ajouter quatre curseurs ou scénarios : 10/20/50 utilisateurs, indexation 0/3/8 %, migration +20 %, adoption retardée de 0/6/12 mois, maintenance/support +25 %, et sortie ±50 %. Le lecteur doit voir quelle hypothèse renverse le verdict. Un ROI unique sans sensibilité est une illustration, pas une décision.

## 8. Position professionnelle et contre-cas

**Position recommandée :** pour une PME dont les processus sont courants et urgents, commencer par un ERP ou un logiciel vertical, avec un test de données et une clause de sortie. Si une seule activité différenciante résiste, conserver le socle et développer uniquement le module nécessaire. Réserver le tout-sur-mesure à un processus stable qui procure un avantage mesurable et dont l’entreprise accepte d’être propriétaire (budget de maintenance, sécurité, documentation, pilotage produit).

**Contre-cas assumés :**

- Pas d’achat immédiat si le processus change chaque semaine ou si personne ne peut arbitrer les données.
- Pas de standard « moins cher » s’il crée 8 heures de ressaisie par semaine, trois exports manuels et une erreur de facturation par mois.
- Pas de sur-mesure si l’ERP couvre les trois workflows critiques, si la différenciation est seulement esthétique ou si le coût de sortie ne peut pas être financé.
- Pas de solution mixte sans propriétaire de chaque donnée, budget de supervision des interfaces et scénario de panne.

Cette position est compatible avec l’intérêt commercial déclaré de Hagnéré Code parce qu’elle rend le sur-mesure conditionnel et testable.

## 9. Conversion et parcours de décision

Le CTA vers les guides voisins est pertinent, mais la page gagnerait à proposer un livrable concret : **« Télécharger la grille de comparaison ERP / configuré / module / sur mesure / statu quo »**. La grille devrait contenir le scénario, les 8 axes, le TCO 12/36/60, les preuves attendues et une ligne de décision. Le formulaire peut demander uniquement activité, effectif, outils actuels et contrainte principale ; ne pas promettre un audit gratuit non borné.

CTA recommandé après le tableau : « Vous hésitez entre un ERP et un module métier ? Envoyez vos trois workflows et vos outils actuels. Nous vous répondons d’abord sur ce qui peut rester standard, puis sur la partie qui mérite éventuellement du sur-mesure. »

## 10. P0/P1/P2 explicites

### P0 — 0

Aucun faux témoignage, aucune garantie de résultat, aucun prix présenté comme moyenne de marché et aucun claim technique critique non borné n’a été repéré.

### P1 — 11

1. **P1-01 — TCO sur mauvais horizons** : remplacer le seul « 4 ans » par 12/36/60 mois et séparer avec/sans coût de sortie (`page.tsx:195`, `557-612`).
2. **P1-02 — Périmètre fonctionnel non prouvé égal** : publier fonctions, volumes, rôles, intégrations et critères de recette communs (`page.tsx:571-613`).
3. **P1-03 — Statu quo absent du tableau économique** : chiffrer temps, erreurs, outils actuels, risque et remplacement différé.
4. **P1-04 — Temps interne non auditable** : isoler heures de nettoyage, ateliers, tests, formation et pilotage ; elles sont mentionnées mais non ventilées dans les quatre montants (`page.tsx:569-579`, `633-652`).
5. **P1-05 — Récurrence trop agrégée** : détailler licence, hébergement, support, sécurité, maintenance évolutive, intégrations et stockage par option.
6. **P1-06 — Pas de sensibilité** : indexation, utilisateurs, retard d’adoption, migration et support doivent montrer les conditions de renversement.
7. **P1-07 — Catégories qui se recouvrent** : définir standard/vertical/configuré/module et préciser si un ERP SaaS peut être standard ou personnalisé (`page.tsx:330-397`).
8. **P1-08 — Intégrations non tarifées** : faire apparaître API, connecteurs, supervision, reprise après erreur et changement de version (`page.tsx:405-414`).
9. **P1-09 — Capacité éditeur non vérifiée** : ajouter une fiche « ce que la démo et les docs prouvent / ce qu’elles ne prouvent pas » ; ne pas confondre brochure et résultat.
10. **P1-10 — SLA et exploitation incomplets** : ajouter disponibilité, RPO/RTO, délai d’incident, astreinte, procédure de restauration et responsabilité de sécurité.
11. **P1-11 — Critères d’arrêt insuffisamment mesurés** : transformer « réussi / acceptable / non démontré / impossible » en seuils éliminatoires et score pondéré (`page.tsx:549-555`).

### P2 — 8

1. **P2-01 — Fraîcheur registre** : mettre à jour la date de registre après la réécriture et dater les prix/conditions externes (`src/lib/guides.ts`, entrée du guide).
2. **P2-02 — Clauses contractuelles** : ajouter les clauses d’onboarding, hausse tarifaire, renouvellement, changement d’API et sortie à la checklist contractuelle.
3. **P2-03 — Frontière réglementaire** : distinguer clairement conformité RGPD, sécurité, localisation et certification sectorielle ; renvoyer à un spécialiste pour santé, paie, finance ou conservation réglementée.
4. **P2-04 — Scénarios de taille** : ajouter un cas de petite structure (5 utilisateurs) et un cas multi-sites (50 utilisateurs) pour éviter l’exemple unique de 20 utilisateurs.
5. **P2-05 — Délai avant valeur** : ajouter délai « premier bénéfice » et coût d’opportunité si le projet est retardé de 3, 6 ou 12 mois.
6. **P2-06 — Ressource téléchargeable** : fournir la grille de décision annoncée, versionnée et réutilisable en rendez-vous.
7. **P2-07 — Open source** : ajouter un encadré sur licence, hébergement, compétence interne, mises à jour et responsabilité ; open source ne signifie pas gratuité.
8. **P2-08 — QA de publication** : effectuer QA navigateur 320–1600 px, build, liens, données structurées, accessibilité tableau et vérification production avant de déclarer l’édition finalisée.

### État des portes

- **P1 : dossier historique présent mais incomplet au regard du benchmark.** Le dossier de recherche existe et couvre quatre passes, mais ne ferme pas les P1-01 à P1-11.
- **P2 : contenu courant à corriger.** Les améliorations sont localisées et ne doivent pas être interprétées comme des corrections déjà livrées.
- **P3 : REJETÉE / non validée sur ce snapshot.** Aucune validation de réécriture, de build ou de contrôle de contenu courant n’est accordée par cet audit.
- **P4 : REJETÉE / non validée tant que le score reste inférieur à 90 et que la QA n’est pas exécutée.** Aucun claim de publication de référence, d’indexation ou de production ne doit être déduit de ce rapport.

## 11. Scorecard indépendante

| Axe | Note | Motif |
|---|---:|---|
| Intention de recherche | 9/10 | Les quatre intentions sont couvertes, livrable final encore peu explicite. |
| Décision dirigeant | 8/10 | Verdicts utiles, mais absence de statu quo chiffré et de seuils. |
| Pédagogie | 8/10 | Vocabulaire expliqué et cas concrets ; catégories à clarifier. |
| Profondeur | 8/10 | Données, adoption, sécurité, sortie et TCO ; sensibilité et exploitation manquent. |
| Preuves | 7/10 | Méthode de démo excellente, capacité réelle et équivalence non démontrées. |
| Comparaison | 7/10 | Quatre options comparées, mais pas à périmètre mesurable égal ni sur 12/36/60. |
| Originalité | 9/10 | Déclaration d’intérêt, test d’erreur et réversibilité sont différenciants. |
| Qualité rédactionnelle | 8/10 | Ton professionnel et humain ; quelques passages peuvent être plus directs et moins abstraits. |
| Conversion | 8/10 | Parcours interne solide, CTA de grille et qualification légère à ajouter. |
| SEO / produit | 8/10 | Intentions, liens, Article et BreadcrumbList présents ; fraîcheur, ressource et QA restent à verrouiller. |
| **Total** | **80/100** | Aucun axe critique sous 7 ; seuil de publication de référence non atteint. |

## 12. Plan de réécriture en quatre passes

### Passe 1 — preuve et cadrage

Figer le scénario canonique, dater les conditions des éditeurs, vérifier France Num/CNIL/ANSSI, établir la matrice de capacités et séparer faits, hypothèses, calculs et opinion Hagnéré.

### Passe 2 — écriture dirigeant

Réécrire l’ouverture autour d’une situation chiffrée, annoncer le verdict conditionnel, donner un tableau standard/configuré/module/sur mesure/statu quo et intercaler un exemple à 5, 20 et 50 utilisateurs.

### Passe 3 — contre-audit

Recalculer TCO 12/36/60, sans et avec sortie, tester les scénarios de sensibilité, chercher les coûts oubliés, vérifier les liens, les dates, les catégories et chaque formulation réglementaire.

### Passe 4 — anti-texte automatique et QA

Supprimer les transitions génériques, varier les rythmes, remplacer les abstractions par des situations et des chiffres, puis exécuter build, rendu navigateur 320–1600 px, contrôle des tableaux, accessibilité, JSON-LD, liens et URL de production. Ne déclarer comme vérifié que ce qui a effectivement été exécuté.

## 13. Conditions de sortie « référence »

Le guide pourra être reclassé comme référence interne lorsque :

- le scénario égal et la matrice de preuve sont publiés ;
- les cinq voies, dont le statu quo, ont un TCO 12/36/60 avec hypothèses et sensibilité ;
- chaque chiffre externe est daté, localisé et présenté comme tarif éditeur, jamais comme vérité neutre ;
- les contre-cas, responsabilités d’exploitation, SLA, réversibilité et clauses de sortie sont testables ;
- la grille de décision est téléchargeable et le CTA reste limité à une qualification utile ;
- la QA locale et de production est réellement exécutée et documentée séparément de cet audit.

## Sources consultées le 24/07/2026

- France Num, ERP TPE : https://www.francenum.gouv.fr/guides-et-conseils/pilotage-de-lentreprise/logiciels-de-gestion-de-lentreprise/pourquoi-et-comment (mis à jour 13/04/2026).
- France Num, logiciels de gestion : https://www.francenum.gouv.fr/guides-et-conseils/pilotage-de-lentreprise/logiciels-de-gestion-de-lentreprise (mis à jour 23/01/2026).
- CNIL, architecture : https://www.cnil.fr/fr/faire-un-choix-eclaire-de-son-architecture (27/01/2020, consulté 24/07/2026).
- CNIL, sous-traitance : https://www.cnil.fr/fr/securite-gerer-la-sous-traitance (consulté 24/07/2026).
- CNIL, sauvegarde : https://www.cnil.fr/fr/securite-sauvegarder (consulté 24/07/2026).
- Microsoft Dynamics 365 Business Central pricing : https://www.microsoft.com/en-us/dynamics-365/products/business-central/pricing (consulté 24/07/2026).
- Odoo Pricing : https://www.odoo.com/pricing (consulté 24/07/2026 ; conditions et prix à revalider au moment de publication).
- Aktislab : https://www.aktislab.fr/articles/erp-sur-mesure-ou-saas-comment-choisir (consulté 24/07/2026).
- Cap Numerik : https://cap-numerik.fr/blog/erp-sur-mesure-vs-standard-guide-choix-pme (consulté 24/07/2026).
- Cegid : https://www.cegid.com/fr/blog/erp-sur-mesure/ (consulté 24/07/2026).
- Novane : https://novane.io/article/logiciel-metier-surmesure-ou-erp-standard-comment-choisir-pour-une-pme (consulté 24/07/2026).
- Timeline Digital UK : https://timelinedigi.com/blog/bespoke-vs-off-the-shelf-software-uk (publié 2026, consulté 24/07/2026).
- ERP Research UK : https://www.erpresearch.com/en-gb/erp-for-small-business-smb-sme (consulté 24/07/2026).
- ERP Search Australia : https://erpsearch.com.au/guides/erp-selection-checklist-smb/ (consulté 24/07/2026).
- eSoftware Solutions Australia : https://www.esoftwaresolutions.com.au/blog/build-vs-buy-software-australia-2026 (publié 2026, consulté 24/07/2026).
- ERP-Software.org DACH : https://erp-software.org/en/ (consulté 24/07/2026).
