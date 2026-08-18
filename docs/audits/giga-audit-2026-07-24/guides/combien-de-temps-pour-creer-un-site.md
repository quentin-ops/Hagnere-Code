# Audit approfondi — `combien-de-temps-pour-creer-un-site`

Date : 24 juillet 2026  
Auditeur : audit éditorial, benchmark international, planning produit et contrôle technique en lecture seule  
Snapshot : `src/app/guides/combien-de-temps-pour-creer-un-site/page.tsx` (hash `7f0390185f8a9af9c8f98f935091d44a992a68b02de78d6d9fac2e2dd4fc5308`), entrée du registre datée du 21 juillet 2026.

## 1. Verdict exécutif

```text
Lecteur exact : dirigeant de TPE/PME, indépendant ou responsable de lancement qui a une date réelle (ouverture, salon, campagne, recrutement, saison) et doit savoir si un prestataire pourra livrer un site utilisable à temps.
Question réelle : « À quelle date le site sera-t-il réellement exploitable, qu'est-ce qui peut bloquer le projet, et quelles décisions dois-je prendre maintenant ? »
Décision attendue : fixer une date de lancement défendable, choisir un périmètre de V1 et obtenir un planning contractuel avec responsabilités, marges, recette et plan de mise en ligne.
Réponse actuelle en une phrase : le guide donne des fourchettes utiles (1–3 semaines pour une page, 4–8 semaines pour une vitrine, 2–4 mois pour une boutique), explique les validations et les dépendances, mais ne permet pas encore de calculer un chemin critique ni de distinguer le temps de travail du délai calendaire.
Défaut qui coûte le plus de valeur : les fourchettes sont annoncées avant un calendrier daté et sans charge client/prestataire ; le lecteur risque de retenir « 4 à 8 semaines » alors que ses contenus, traductions, fournisseur de paiement, DNS ou arbitrages peuvent ajouter plusieurs semaines.
Niveau actuel : B (bonne base humaine et prudente, insuffisante comme outil de décision et de sécurisation d'une échéance).
Priorité : haute.
Statut : audité ; aucun guide source, registre ou fichier de production modifié.
```

### Score avant correction

| Axe | Note /10 | Preuve localisable | Manque décisif |
| --- | ---: | --- | --- |
| Intention | 8 | Hero sur ouverture, salon, saison ; réponse immédiate par type de site | absence de diagnostic de date et de criticité dès le début |
| Décision | 7 | tableaux de délais, rétroplanning, liste de clauses | pas de date calculée à partir d'une échéance réelle |
| Pédagogie | 8 | distinction démarrage/test/mise en ligne, phases et validations | temps de travail et temps d'attente non séparés |
| Profondeur | 7 | contenus, dépendances, e-commerce, refonte, multilingue | chemin critique, recette, conformité, DNS et marge non chiffrés |
| Preuve | 6 | une source Google pour l'exploration ; estimations annoncées Hagnéré | aucune méthode d'observation pour les fourchettes, peu de sources primaires |
| Comparaison | 6 | page unique, vitrine, refonte, boutique, outil métier | pas de comparaison équivalente entre équipe interne, freelance, agence, plateforme |
| Originalité | 7 | idée juste « une validation n'est pas un silence », V1 découpée | pas de calculateur de planning ni matrice de responsabilités |
| Style | 8 | ton concret, exemples fictifs explicitement signalés | certaines phrases restent génériques (« plusieurs semaines », « à chiffrer ») |
| Conversion | 7 | CTA pour décrire objectif et échéance | livrable du diagnostic, délai de réponse et critères de qualification flous |
| SEO/produit | 7 | FAQ, Article/Breadcrumb JSON-LD, maillage interne | read time, image sociale et couverture sémantique à vérifier ; aucune ressource planning |

Total : **71/100**.

Le guide n'est pas mauvais : il protège déjà le lecteur contre le discours « site en quinze jours » et rappelle que les contenus et validations sont du travail. Il s'arrête cependant juste avant le point où un dirigeant doit prendre une décision : « Mon événement est le 15 octobre, mon imprimeur a besoin de l'URL le 1er septembre, qui doit livrer quoi et quelle marge me reste-t-il ? »

## 2. Ce que le guide dit réellement

### Promesse et progression observées

L'introduction donne deux repères : 4–8 semaines pour un site vitrine professionnel et 2–4 mois pour une boutique, sous hypothèses de contenus disponibles, périmètre décidé et validations rapides. Elle précise correctement qu'il ne s'agit ni d'une moyenne officielle ni d'une promesse universelle.

Le lecteur traverse ensuite :

1. un tableau de fourchettes par projet ;
2. la distinction entre démarrage, version de test, mise en ligne et fin des vérifications ;
3. un planning phase par phase ;
4. une liste de préparation côté client ;
5. les règles de validation ;
6. les leviers d'accélération ;
7. les dépendances qui rallongent une refonte, une boutique, une connexion métier ou un site multilingue ;
8. l'après-mise en ligne et l'indexation Google ;
9. un rétroplanning qualitatif ;
10. les éléments que le devis doit préciser.

La progression est lisible et adaptée à un non-technicien. Le problème est l'absence de calendrier « qui fait quoi, à quelle date, avec quelle dépendance ». Les phases sont listées mais non ordonnancées avec une marge. Une agence peut mener contenu, design et développement en parallèle ; l'article ne montre pas quelles tâches peuvent se chevaucher ni lesquelles bloquent tout le monde.

### Ce qui paraît complet sans encore l'être

- « 4 à 8 semaines » mélange délai de production et délai d'attente des validations ; un projet avec 40 heures de travail peut s'étaler sur 10 semaines.
- « Boutique en ligne : 2 à 4 mois » ne sépare pas catalogue, import, paiement, livraison, taxes, emails transactionnels, tests de commande et éventuelle connexion ERP.
- « Site connecté à un outil métier : à chiffrer après étude » est honnête, mais trop peu actionnable : le lecteur ne sait pas quelles questions poser pour obtenir cette étude.
- La marge apparaît comme un mot (« aléas techniques ») mais aucun pourcentage, jalon ou réserve n'est calculé.
- Les critères de recette ne sont pas définis : quels navigateurs, quelles tailles d'écran, quel formulaire, quelle commande test, quel seuil de performance, quelles mentions et quel consentement ?
- La mise en ligne évoque domaine, suivi et redirections, sans séquence DNS, TTL, fenêtre de bascule, retour arrière ni responsable des accès.
- Les obligations de conformité (mentions légales, cookies/traceurs, données de formulaires, droits sur les photos, accessibilité) sont dispersées ou absentes du planning.
- Le fictif « cabinet ouvre dans six semaines » montre bien la V1, mais ne comporte ni semaine de démarrage, ni livrables par partie, ni marge de sécurité.
- Le CTA invite à décrire le projet, mais n'annonce pas clairement ce que le prospect recevra, sous quel délai, ni ce qui n'est pas inclus.

## 3. Benchmark France et international

Recherche effectuée le 24 juillet 2026 sur des pages publiées en français, anglais et allemand. Les pages d'agences ou d'éditeurs sont des sources primaires uniquement pour leur propre méthode ou promesse ; elles ne constituent pas une moyenne de marché. Les sources officielles sont utilisées pour les obligations et les opérations (Google, CNIL, Cloudflare, Adobe).

| Ressource et URL directe | Zone | Réponse utile | Preuve ou méthode | Limite | Apport à adapter |
| --- | --- | --- | --- | --- | --- |
| [Shopify — website timeline](https://www.shopify.com/blog/build-website-timeline/) | international / US | annonce de 1 semaine à 5 mois selon complexité, avec 7 phases et QA finale | détaille CMS/hébergement, IA, wireframes, développement 4–10 semaines, lancement 3–5 jours | éditeur de plateforme, pas une étude statistique | reprendre la séparation phases/QA, éviter la fourchette brute |
| [Adobe Commerce — guide de démarrage](https://business.adobe.com/content/dam/dx/us/en/resources/sdk/getting-started-with-adobe-commerce/getting-started-with-adobe-commerce-sw.pdf) | US / enterprise | implémentation pouvant aller jusqu'à 40 semaines, phases qui se chevauchent | roadmap et dépendances d'un produit commercial | contexte enterprise, non transposable à une vitrine | montrer que « e-commerce » recouvre plusieurs classes de projet |
| [Resourcifi — timeline by type](https://www.resourcifi.com/insights/website-development-timeline/) | US | repères annoncés : 1–4 semaines brochure, 4–8 semaines PME, 8–16 semaines e-commerce, 3–12 mois app | explicite que les phases peuvent se dérouler en parallèle | source commerciale, date et équipe propres | introduire parallèle vs somme des phases |
| [Web development timeline USA](https://websitedevelopment-services.us/web-development-timeline-usa/) | États-Unis | marketing 2–6 semaines, CMS 6–12, e-commerce 8–16, SaaS 3–9+ mois | décomposition discovery/design/dev/QA | auto-déclaration d'une agence | couvrir l'app SaaS, absent du guide |
| [Webdigita — e-commerce UK](https://webdigita.co.uk/blog/how-long-ecommerce-development-take-realistic-uk/) | Royaume-Uni | Shopify/WooCommerce cadré 8–10 semaines ; intégrations/B2B 4–8 mois | identifie ERP, données produit et validations comme goulots | expérience d'un prestataire, non universelle | demander l'intégration avant de promettre une date |
| [Alactic — timeline](https://alactic.net/blog/how-long-does-a-website-take-to-build) | UK/international | marketing 3–6 semaines, e-commerce 6–12, app/SaaS 8–20 | séquence par semaine et +2–4 semaines si contenu/brand absents | source agence | ajouter impact quantifié des contenus manquants |
| [WP Creative Australia](https://wpcreative.com.au/wordpress-maintenance-cost/) | Australie | page de maintenance, utile pour distinguer lancement et exploitation | montre que la mise en production n'arrête pas les tâches | ne donne pas un planning de création détaillé | relier lancement à maintenance et transfert |
| [ACT Websites — contrat de maintenance](https://actwebsites.com.au/wp-content/uploads/2025/02/WordPress-Maintenance-Service-Agreement-Version-0001-1.pdf) | Australie | contrat avec frais d'installation et accès nécessaires | matérialise le setup, les accès et les obligations client | maintenance, pas construction | ajouter audit/setup comme jalon distinct |
| [WordPress-Wartung.at — packages](https://www.wordpress-wartung.at/wartungspakete/) | Autriche / DACH | détaille limites de plugins, backup et fréquence | montre que les exclusions techniques doivent être écrites | maintenance, pas création | appliquer la même précision aux dépendances de lancement |
| [Bord Bia — Website Project Fundamentals](https://www.bordbia.ie/globalassets/bordbia2020/industry/think-digital/guidebooks/website-project-fundamentals---considerations-for-developing-and-improving-guidebook.pdf) | Irlande / PME européennes | guide public de projet avec phases, tests et rôle du client | document institutionnel sur fondamentaux de projet | 2022, autre marché | intégrer la charge de contenu, validation et tests |
| [Google — site moves](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes) | officiel international | préparer, mapper les anciennes URL, tester, rediriger et surveiller ; une migration moyenne peut prendre quelques semaines à être retraitée | recommandations primaires et étapes | ne donne pas la durée de production du site | ajouter une voie migration/DNS au chemin critique |
| [Google — recrawl](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl) | officiel international | demande d'exploration non garantie, délai variable | source déjà liée dans le guide | exploration ≠ indexation ≠ classement | conserver la nuance et la mettre dans « après » |
| [CNIL — cookies et traceurs](https://cnil.fr/fr/cookies-et-autres-traceurs/regles/cookies/comment-mettre-mon-site-web-en-conformite) | France, officiel | consentement préalable sauf exemption, retrait possible | source réglementaire/opérationnelle | dépend du traceur et du traitement | prévoir un jalon conformité avant recette |
| [Cloudflare — TTL DNS](https://developers.cloudflare.com/dns/manage-dns-records/reference/ttl/) | international, documentation opérateur | le TTL influence le délai de prise en compte des changements DNS | documentation primaire | comportement dépend des caches et du fournisseur | planifier TTL, accès et fenêtre de bascule, sans promettre un délai fixe |

### Saturation et enseignements

Les contenus concurrents convergent vers des fourchettes proches ; ajouter une nouvelle liste de chiffres n'apporterait presque rien. Les angles qui ajoutent réellement de l'information sont :

1. distinguer les heures de production du délai calendaire ;
2. afficher les tâches parallèles et le chemin critique ;
3. chiffrer l'effet d'un contenu ou d'une validation en retard ;
4. inclure app/SaaS et intégrations, pas seulement vitrine et boutique ;
5. ajouter recette, conformité, migration et bascule DNS ;
6. donner un rétroplanning daté avec marge, responsable et condition de sortie.

## 4. Matrice de gain d'information

| Question décisive | Meilleure réponse française | Apport international | Couverture actuelle | Manque | Réponse supérieure à produire |
| --- | --- | --- | --- | --- | --- |
| Quand mon site sera-t-il utilisable ? | une fourchette selon type | Shopify/Resourcifi distinguent phases et complexité | partielle | pas de date de départ ni de marge | calendrier daté à rebours depuis l'événement |
| Pourquoi deux devis annoncent-ils des délais différents ? | périmètre, retours et contenus | les guides US séparent les phases parallèles | faible | temps de travail vs attente | diagramme charge/calendrier |
| Qui peut bloquer la date ? | décideur, contenus, accès mentionnés | UK identifie ERP et produit comme goulots | partielle | responsabilités RACI et dépendances externes | matrice client/prestataire/tiers |
| Combien de temps pour une boutique réelle ? | 2–4 mois | UK/US distinguent catalogue, paiement, intégration et B2B | partielle | volume SKU et cas de commande | trois scénarios e-commerce |
| Combien pour un outil métier/SaaS ? | « à chiffrer » | sources US donnent plusieurs mois | faible | lots, discovery, sécurité et recette | MVP en lots avec jalons, pas de fausse moyenne |
| Que faut-il tester avant de publier ? | tests mobiles, formulaires, paiement, redirections cités | Shopify détaille QA et test de commande | partielle | critères d'acceptation | checklist de recette signable |
| Quelle marge garder ? | « aléas » | concurrents évoquent buffer sans le formaliser | faible | aucune réserve calculée | 15–25 % selon inconnues, hypothèse explicitée |
| Le jour de mise en ligne est-il la fin ? | non, surveillance et indexation suivent | Google distingue migration, recrawl et fluctuations | bonne mais courte | runbook 0–30 jours | plan de stabilisation post-lancement |
| Une refonte peut-elle détruire le SEO ? | redirections mentionnées | Google exige mapping, 301, sitemap et suivi | partielle | inventaire et critères de réussite | voie migration distincte |
| Que fait-on si DNS ne bascule pas ? | domaine cité | Cloudflare explique TTL et caches | faible | plan de retour arrière | fenêtre, TTL, accès et fallback |

## 5. Faits et fraîcheur

| Affirmation du guide | Verdict | Source primaire actuelle | Périmètre et date | Correction |
| --- | --- | --- | --- | --- |
| 4–8 semaines pour une vitrine de quelques pages | estimation Hagnéré, pas fait de marché | aucune statistique officielle ; les pages concurrentes donnent des repères commerciaux divergents | hypothèses indiquées dans le guide | conserver seulement comme scénario, ajouter charge et conditions |
| 2–4 mois pour une boutique | estimation plausible mais trop large | Shopify décrit développement et QA ; Adobe montre que l'e-commerce enterprise peut aller beaucoup plus loin | catalogue, paiement et livraison validés | segmenter standard, intégrée et B2B |
| Une page peut être lancée en 1–3 semaines | estimation de projet | Shopify évoque des sites simples d'une semaine à plusieurs mois | contenu/identité déjà prêts | préciser « production + validation », pas seulement construction |
| Google peut explorer en quelques jours à quelques semaines | confirmé et déjà sourcé | [Google recrawl](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl) | nouvelle ou modifiée, sans garantie | conserver, distinguer exploration, indexation et classement |
| Une demande d'exploration ne garantit pas l'indexation | confirmé | même source Google | général | conserver mot pour mot en substance |
| Une migration SEO demande mapping, 301, tests, sitemap et suivi | confirmé | [Google site moves](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes) | URLs modifiées ou migration | ajouter au planning refonte |
| Le TTL DNS influence la prise en compte des changements | confirmé | [Cloudflare TTL](https://developers.cloudflare.com/dns/manage-dns-records/reference/ttl/) | DNS et caches ; délai réel variable | ajouter comme dépendance, pas comme durée universelle |
| Les traceurs soumis à consentement doivent être acceptés avant dépôt/lecture | confirmé en principe | [CNIL cookies](https://cnil.fr/fr/cookies-et-autres-traceurs/regles/cookies/comment-mettre-mon-site-web-en-conformite) | selon traceur et exemption | ajouter un contrôle conformité avant mise en ligne |
| « Mise en ligne » ne signifie pas « visible sur Google » | confirmé | Google recrawl et Search Central | général | conserver et clarifier le plan post-lancement |
| Une validation silencieuse doit suspendre ou valider | clause contractuelle, pas règle universelle | contrat à négocier ; aucune source légale générale fournie | dépend du contrat | remplacer par « faire écrire la règle » |
| Une agence peut annoncer un délai différent sans se tromper | raisonnable mais non démontré | dépend du périmètre, équipe et hypothèses | général | reformuler en « peut être cohérent si le périmètre diffère » |

### Contradictions ou risques de lecture

- Le guide dit qu'il ne donne pas une moyenne, puis met les fourchettes en évidence dans les points clés ; un lecteur pressé peut les prendre pour un engagement.
- « Développement » est une étape unique alors que contenu, design, développement, intégration et recette peuvent se chevaucher. La somme mentale des étapes n'est donc pas le délai réel.
- L'article conseille une marge mais ne montre pas où elle se place ni qui la possède. Un client peut croire que toute semaine non consommée est disponible pour des demandes supplémentaires.
- La phrase sur une boutique « 2 à 4 mois » ne distingue pas une boutique standard prête à vendre d'une migration catalogue/ERP ou d'un B2B.
- L'indexation après lancement est bien nuancée ; il faut éviter de la présenter comme le seul délai post-publication. Stabilisation, tracking et corrections ont aussi un calendrier.

### Faits à retirer plutôt qu'à affaiblir

- toute fourchette présentée sans « inclus / exclu / conditions de départ » ;
- toute date qui inclut implicitement la rédaction, la traduction, la photographie ou la validation sans les chiffrer ;
- toute promesse de visibilité Google au jour de mise en ligne ;
- toute durée d'app métier donnée avant discovery des rôles, données, intégrations et exigences de sécurité.

## 6. Scénarios, calendriers et calculs à construire

Les calendriers suivants sont des modèles de planification, non des moyennes de marché. Ils rendent explicites le chemin critique, les responsabilités et une marge de sécurité. Les dates sont volontairement datées pour que le lecteur voie comment les déplacer.

### Formule de calendrier

```text
Durée calendaire = date de recette acceptée - date de démarrage effectif
                 = chemin critique (tâches dépendantes)
                   + attentes de validation / tiers
                   + marge de sécurité.

Durée de travail prestataire ≠ durée calendaire.
Une tâche peut demander 2 jours de travail et bloquer 10 jours si elle attend
un contenu, un accès ou une décision.
```

### Scénario A — vitrine professionnelle, lancement le 15 octobre 2026

Hypothèses : 7 pages, formulaire simple, une langue, pas de migration complexe ; textes et photos fournis avant le démarrage ; un décideur répond sous 2 jours ouvrés ; le site doit être testable le 2 octobre et stable avant communication.

| Période | Travail | Responsable | Dépendance / sortie |
| --- | --- | --- | --- |
| 24–28 août | cadrage, arborescence, accès, critères de réussite | partagé, décideur tranche | brief signé, accès vérifiés |
| 24 août–4 septembre | collecte/rédaction des contenus et preuves | client, aide possible du prestataire | textes, photos et droits validés |
| 31 août–11 septembre | wireframes et direction visuelle | prestataire, client valide | maquette d'accueil + modèle intérieur |
| 14–25 septembre | intégration et responsive | prestataire | version de test complète |
| 28 septembre–2 octobre | recette : formulaires, mobile, liens, SEO technique, mentions, consentement | partagé | liste de corrections priorisée |
| 5–7 octobre | corrections et validation finale | prestataire + décideur | PV de recette / go-no-go |
| 8 octobre | bascule domaine, tracking, sauvegarde, monitoring | prestataire + titulaire domaine | site public, retour arrière prêt |
| 9–14 octobre | stabilisation et marge | prestataire | aucun bloqueur ouvert |
| 15 octobre | lancement commercial | client | communication avec URL déjà testée |

Travail indicatif : 8–12 jours prestataire, 3–5 jours client étalés. Délai calendaire : 7–8 semaines. La marge de 5 jours protège la date ; elle n'est pas une banque d'évolutions.

### Scénario B — boutique standard, ouverture le 1er décembre 2026

Hypothèses : Shopify ou WooCommerce, 80 produits, paiement standard, deux modes de livraison, emails transactionnels, import propre, une langue, pas d'ERP sur mesure.

| Période | Travail critique | Responsable | Sortie de jalon |
| --- | --- | --- | --- |
| 31 août–11 septembre | cadrage catalogue, règles prix/livraison, comptes et conformité | partagé | matrice de règles signée |
| 7–25 septembre | préparation produit (photos, SKU, prix, stock, descriptions) | client | fichier d'import contrôlé |
| 14–25 septembre | UX, thème et parcours d'achat | prestataire + client | maquettes et panier validés |
| 28 septembre–23 octobre | développement, import, moyens de paiement et emails | prestataire + tiers paiement | environnement de test complet |
| 26 octobre–6 novembre | commandes test, remboursements, livraison, taxes, emails, mobile | partagé | procès-verbal de recette |
| 9–13 novembre | corrections bloquantes et audit sécurité/consentement | prestataire | aucun bloqueur P0/P1 |
| 16–20 novembre | formation, contenu final, sauvegarde/export, runbook | partagé | équipe autonome et sortie documentée |
| 23 novembre | préproduction figée | prestataire | go/no-go |
| 24–27 novembre | marge / bascule / surveillance renforcée | prestataire + client | retour arrière possible |
| 1er décembre | ouverture | client | commandes surveillées |

Travail indicatif : 25–40 jours prestataire et 8–15 jours client/tiers ; délai calendaire 12–14 semaines. Si les produits ne sont pas prêts le 25 septembre, le chemin critique se décale, même si le développement est terminé.

### Scénario C — application métier ou SaaS MVP, première version le 1er février 2027

Hypothèses : authentification, trois rôles, 5 écrans métier, API d'un outil existant, journalisation, données personnelles, pas de facturation complexe. Il ne s'agit pas d'une promesse d'application complète.

| Période | Lot / décision | Responsable | Porte de sortie |
| --- | --- | --- | --- |
| 7–18 septembre | discovery, processus, rôles, données, intégrations, risques | partagé + référent métier | backlog priorisé et critères d'acceptation |
| 21 septembre–2 octobre | architecture, sécurité, modèle de données, prototype | prestataire + référent technique | architecture approuvée |
| 5–23 octobre | lot 1 : comptes, rôles, parcours principal | prestataire | démonstration métier |
| 26 octobre–13 novembre | lot 2 : intégration/API, erreurs, exports | prestataire + fournisseur tiers | données de test cohérentes |
| 16–27 novembre | lot 3 : recherche, notifications, administration | prestataire | feature-complete MVP |
| 30 novembre–11 décembre | tests fonctionnels, sécurité, permissions, sauvegarde/restauration | partagé | anomalies classées et RPO/RTO définis |
| 14–18 décembre | pilote avec utilisateurs réels limités | client | retours consolidés |
| 4–15 janvier | corrections du pilote, documentation et formation | prestataire + client | recette signée |
| 18–22 janvier | préproduction, migration, plan de retour arrière | prestataire | go/no-go |
| 25–29 janvier | marge et surveillance | partagé | support de lancement prêt |
| 1er février | ouverture progressive | client + prestataire | suivi quotidien initial |

Travail indicatif : 55–90 jours prestataire et 15–25 jours métier/tiers ; calendrier 20–21 semaines avec vacances et dépendances intégrées. Toute demande ajoutant un rôle, une règle de calcul ou une intégration après le backlog approuvé doit produire une nouvelle estimation.

### Sensibilité de calendrier

| Événement | Vitrine | Boutique | Application | Effet à expliquer |
| --- | ---: | ---: | ---: | --- |
| contenus livrés 1 semaine en retard | +1 semaine si chemin critique | +1–2 semaines | +1–3 semaines | le développement peut attendre ou nécessiter une reprise |
| validation client en 5 jours au lieu de 2 | +3 jours ouvrés par jalon | +1–2 semaines cumulées | +1–3 semaines cumulées | l'attente se répète à chaque porte |
| fournisseur paiement/API en retard de 10 jours | +0 à +10 jours selon plan B | +1–2 semaines | +2–4 semaines | dépendance externe non contrôlée |
| 20 % de marge supprimée | date plus fragile | lancement proche du pic | pilote sacrifié | le gain est apparent, le risque augmente |
| 30 % de périmètre ajouté après validation | +1–2 semaines | +2–4 semaines | +4–8 semaines | changement de scope, pas simple « petite retouche » |

### Marge recommandée comme hypothèse, pas comme loi

Pour une vitrine connue et préparée, une marge de 15 % du calendrier peut suffire. Pour une boutique avec tiers ou migration, 20–30 % est plus prudent. Pour une application métier, la marge doit être discutée lot par lot et ne remplace pas un pilote. Ces pourcentages sont des outils de planification, pas des statistiques de marché ; le devis doit exposer l'hypothèse.

## 7. Comparaison et position professionnelle

```text
Options réellement comparables : page rapide, vitrine sur mesure, boutique standard, boutique intégrée, MVP applicatif ; même définition de « livré », même niveau de recette et même responsabilité client.
Le plus court : une V1 limitée, contenus prêts, décisionnaire unique, composants réutilisés et aucune dépendance externe critique.
Le plus défendable : un calendrier un peu plus long avec jalons de validation, marge, recette signée et plan de bascule.
Le moins risqué pour une date commerciale : une V1 utile publiée avant l'événement, puis une V2 planifiée ; jamais un lancement complet non testé.
Position Hagnéré Code : annoncer une fenêtre conditionnelle, jamais un chiffre nu ; distinguer temps de production, attentes et marge ; écrire le chemin critique dans le devis ; transformer chaque dépendance client ou tierce en jalon avec propriétaire.
Cas où l'option opposée gagne : une page de campagne sur un outil maîtrisé si l'objectif est de tester une offre, pas de remplacer un système métier ; un site standard peut être livré plus vite qu'un projet custom mieux conçu.
Signal de révision : contenus non reçus, décideur indisponible, API non documentée, paiement non validé, changement de domaine, multilingue, données sensibles ou événement fixe sans marge.
Ce que nous déconseillons même si nous pourrions le vendre : promettre « une semaine » pour un site dont le client n'a pas encore les textes, ou compter la recette et les redirections comme des détails de dernière minute.
```

### Matrice de responsabilité à ajouter

| Livrable | Client | Prestataire | Tiers | Condition de sortie |
| --- | --- | --- | --- | --- |
| brief, objectifs et pages | valide | anime et formalise | — | périmètre signé |
| textes, photos, droits | fournit | conseille/intègre | traducteur éventuel | contenu versionné et autorisé |
| maquettes | valide en une liste | conçoit | — | validation datée |
| domaine/DNS/hébergement | donne accès et titulaire | configure ou accompagne | registrar/hébergeur | accès testés et retour arrière |
| paiement / email / API | fournit contrat et interlocuteur | intègre et teste | garantit sandbox et support | cas de test passants |
| mentions, cookies, données | décide et fait valider si nécessaire | implémente techniquement | CMP/outil | contenu et consentement vérifiés |
| recette | teste les cas métier et accepte | corrige selon périmètre | corrige son service | PV signé, aucun bloqueur |
| mise en ligne | autorise et communique | bascule et surveille | support de disponibilité | monitoring et plan de retour |

## 8. Objections et cas limites

| Objection loyale | Réponse prouvée | Incertitude | Conséquence |
| --- | --- | --- | --- |
| « Le développeur travaille vite, donc le site sera vite livré. » | production et calendrier sont différents ; une validation peut bloquer plusieurs jours | charge réelle et disponibilité | demander le chemin critique, pas seulement les heures |
| « Nous fournirons les textes plus tard. » | le contenu influence arborescence, design, SEO et recette | volume et qualité des textes | faire du contenu un jalon, ou accepter une V1 provisoire |
| « Nous avons une date fixe, il faut tout mettre. » | une V1 testée réduit le risque d'un lancement cassé | importance des fonctions | prioriser must-have / should-have / V2 |
| « Les redirections seront faites après. » | Google recommande mapping, redirections, tests et sitemap pendant une migration | taille du site et historique | bloquer la recette SEO si mapping absent |
| « Le DNS prend toujours quelques minutes. » | TTL et caches influencent la propagation, sans délai universel | fournisseur et caches locaux | préparer TTL, accès, fenêtre et fallback |
| « Google indexera le site le jour du lancement. » | Google ne garantit ni délai d'exploration ni indexation | popularité, crawl et contenu | planifier le suivi post-lancement |
| « Une semaine de marge est du temps perdu. » | elle absorbe les dépendances et protège la communication | risque propre au projet | afficher la marge comme assurance, pas comme travaux cachés |
| « Un SaaS est un site avec plus de pages. » | rôles, données, sécurité, API et recette changent la nature du projet | exigences métier | discovery obligatoire et livraison par lots |
| « Le client peut valider quand il veut. » | la validation est une dépendance du chemin critique | organisation interne | nommer un décideur et une règle de suspension |
| « Nous ferons les mentions et cookies après. » | certains traitements exigent consentement et information avant mise à disposition | traceurs et données utilisés | jalon conformité avant go-live |

## 9. Plan de réécriture

| Ordre | Section proposée | Question résolue | Preuve / outil | Décision produite | Conserver / créer / couper |
| ---: | --- | --- | --- | --- | --- |
| 1 | « Votre date est-elle réellement tenable ? » | quelle échéance et quel résultat ? | exemple ouverture/salon, définition de « utile » | date cible et V1 | conserver ton humain, créer diagnostic |
| 2 | « Le chiffre court ne suffit pas » | que recouvrent 1–3 semaines, 4–8, 2–4 mois ? | fourchettes + inclus/exclus | ordre de grandeur prudent | conserver mais dégonfler la promesse |
| 3 | « Temps de travail vs délai calendaire » | pourquoi 40 h peuvent s'étaler sur 8 semaines | formule et diagramme | comprendre l'attente | créer schéma critique/parallèle |
| 4 | « Trois calendriers datés » | comment planifier vitrine, boutique, app | scénarios avec propriétaires et portes | choisir le scénario proche | créer tableaux semaine par semaine |
| 5 | « Qui peut bloquer le projet ? » | quels éléments me reviennent ? | matrice RACI/client/prestataire/tiers | préparer les accès et contenus | créer check-list |
| 6 | « La recette avant la mise en ligne » | comment savoir que c'est prêt ? | tests fonctionnels, mobile, accessibilité, données, consentement | go/no-go | créer critères d'acceptation |
| 7 | « Refonte, DNS et migration » | comment protéger trafic et adresse ? | Google site moves, 301, sitemap, TTL | séquencer la bascule | approfondir et sourcer |
| 8 | « Ce qui accélère vraiment » | que peut-on enlever sans risque ? | V1/V2, composants, contenus prêts | arbitrer | conserver tableau, chiffrer l'effet |
| 9 | « Les 30 jours après » | que reste-t-il après le jour J ? | plan de monitoring, corrections, indexation | acheter la continuité | étendre la section actuelle |
| 10 | « Le planning à mettre au devis » | que dois-je faire écrire ? | modèle de jalon, marge, changement de scope | signer en connaissance de cause | créer ressource téléchargeable |
| 11 | CTA diagnostic | quelle prochaine action ? | livrable : fenêtre, chemin critique, prérequis | prise de contact qualifiée | préciser délai et limites |

### Contrat des 150 premiers mots

> Vous avez une date qui ne peut pas bouger : ouverture, salon, campagne publicitaire ou lancement d'une nouvelle activité. La vraie question n'est pas seulement « combien de semaines pour coder le site ? », mais « à quelle date sera-t-il utilisable, testé et assez stable pour accueillir mes clients ? ». Une vitrine de sept pages, une boutique avec 80 produits et une application métier ne suivent pas le même calendrier. Dans cet article, nous séparons le temps de travail du délai calendaire, identifions le chemin critique et attribuons chaque tâche au client, au prestataire ou à un fournisseur externe. Vous verrez trois calendriers datés, ce qu'il faut fournir avant de commencer, les tests à ne pas sacrifier et la marge à garder pour une migration ou une mise en ligne DNS. Les fourchettes sont des modèles de planification, pas une moyenne de marché ni une promesse sans conditions. À la fin, vous pourrez remonter depuis votre date cible et demander un planning réellement défendable.

### Éléments à supprimer ou déplacer

- ne pas afficher « 4–8 semaines » et « 2–4 mois » comme des réponses indépendantes du périmètre ;
- remplacer « à chiffrer après étude » par les questions et livrables de l'étude ;
- déplacer l'indexation Google dans un parcours « post-lancement » qui inclut aussi stabilisation, suivi et corrections ;
- éviter « plusieurs semaines » ou « aléas techniques » sans exemple de dépendance et de marge ;
- ne pas laisser croire qu'une validation tacite peut être imposée : le contrat doit prévoir la règle.

### Éléments à conserver

- la réponse humaine autour d'une ouverture ou d'un salon ;
- les distinctions démarrage/test/mise en ligne/fin de vérifications ;
- l'idée que cinq pages testées valent mieux que vingt pages inachevées ;
- la liste des prérequis client, le décideur unique et les retours regroupés ;
- les dépendances refonte, e-commerce, API et multilingue ;
- l'avertissement Google sur exploration et indexation ;
- le rétroplanning et la liste des clauses à mettre au devis.

## 10. Contre-audit après correction

Ce tableau décrit les portes à fermer par la future réécriture. Aucun correctif n'a été appliqué dans cette passe.

| ID | Problème | Priorité | Correction attendue | Revalidation indépendante |
| --- | --- | --- | --- | --- |
| P0-01 | Aucun danger immédiat ou affirmation légalement critique repérée | P0 | aucune | relecture factuelle et juridique avant publication |
| P1-01 | Fourchettes sans chemin critique ni délai de départ | P1 | ajouter date de démarrage effectif, tâches dépendantes et marge | recalculer trois calendriers datés |
| P1-02 | Temps de travail et temps d'attente confondus | P1 | formule, tâches parallèles, responsabilités | vérification par un chef de projet non technique |
| P1-03 | App métier/SaaS seulement « à chiffrer » | P1 | scénario MVP par lots avec discovery, sécurité, pilote et recette | vérifier que la durée reste conditionnelle |
| P1-04 | E-commerce insuffisamment segmenté | P1 | standard, intégrée, B2B/migration avec volumes et cas de commande | test de lecture pour un commerçant |
| P1-05 | Contenus, traductions et validations sans coût calendrier | P1 | jalons, propriétaire, délai de réponse et effet d'un retard | simuler +1 semaine sur chaque jalon |
| P1-06 | Recette, conformité et accessibilité non définies comme portes | P1 | critères d'acceptation et go/no-go | checklist 320–1440 px, clavier, formulaire, paiement, consentement |
| P1-07 | Migration, DNS, retour arrière et post-lancement trop généraux | P1 | mapping URL, 301, sitemap, TTL, fenêtre et monitoring | test sur environnement de préproduction |
| P1-08 | Marge non chiffrée et ambiguë | P1 | 15/20–30 % comme hypothèses selon inconnues, jamais comme loi | recalcul indépendant sans marge puis avec marge |
| P1-09 | CTA sans livrable ni délai de diagnostic | P1 | préciser restitution, délai, exclusions et qualification | test utilisateur : sait-il la prochaine action ? |
| P2-01 | Benchmark international non présent dans la page | P2 | encadré FR/US/UK/AU/DACH et méthode de lecture | rouvrir les pages au moment de la réécriture |
| P2-02 | Sources officielles limitées à Google recrawl | P2 | ajouter Google migration, CNIL, Cloudflare et références techniques pertinentes | vérifier portée et date |
| P2-03 | `readTimeMin: 10` à recalculer après enrichissement | P2 | recalculer au texte final | comparer registre et rendu |
| P2-04 | Image sociale non contrôlée visuellement | P2 | vérifier `opengraph-image` dans partage réel | capture OG et mobile |
| P2-05 | FAQ sans question sur chemin critique, recette et responsabilité | P2 | ajouter FAQ orientée décision | test de non-redondance et données structurées |
| P2-06 | Pas de ressource planning à télécharger | P2 | rétroplanning, RACI et check-list recette | téléchargement, lisibilité et CTA |
| P2-07 | Pas d'indicateur post-lancement concret | P2 | plan J+1/J+7/J+30 : erreurs, formulaires, commandes, indexation | vérifier instrumentation |
| P2-08 | Droits photos, mentions, consentement et accessibilité non reliés au calendrier | P2 | jalon conformité et responsabilité client/prestataire | revue CNIL/WCAG et droits |
| P2-09 | Pas de règle détaillée de changement de scope | P2 | fiche impact : effort, date, coût, acceptation | exercice avec ajout de fonctionnalité |
| P2-10 | Maillage existant bon mais aucune comparaison vers application métier/TMA | P2 | liens contextuels vers services et guides concernés | test de parcours et ancres |

### Portes explicites

```text
P1 — PRÉSENTE MAIS INCOMPLÈTE : NO-GO éditorial tant que P1-01 à P1-09 ne sont pas corrigés.
P2 — À CORRIGER : les sources, metadata, FAQ, ressource planning, conformité et QA visuelle doivent être vérifiées avant publication renforcée.
P3 — REJETÉE / NON VALIDÉE : aucun rendu responsive, test de recette, bascule DNS ou partage social n'est prouvé par ce rapport.
P4 — REJETÉE / NON VALIDÉE : aucun classement Google, délai d'indexation, trafic ou taux de conversion ne peut être déclaré.
```

### Score cible après correction

| Axe | Cible /10 | Condition de passage |
| --- | ---: | --- |
| Intention | 9 | question de date et événement dès les premiers mots |
| Décision | 9 | calendrier daté, V1/V2, chemin critique et go/no-go |
| Pédagogie | 9 | temps de travail/attente expliqué par exemples |
| Profondeur | 9 | contenu, responsabilités, recette, conformité, migration et app |
| Preuve | 9 | sources officielles et limites des benchmarks commerciaux |
| Comparaison | 9 | trois types de projet sur périmètre et sorties définis |
| Originalité | 9 | modèles datés, sensibilité et RACI téléchargeable |
| Style | 9 | langage dirigeant, phrases concrètes, pas de jargon gratuit |
| Conversion | 9 | diagnostic avec livrable, délai et prérequis explicites |
| SEO/produit | 9 | FAQ utile, maillage, JSON-LD et ressource répondant à l'intention |

Total cible : **90/100**. Cette cible mesure la qualité du guide ; elle ne constitue pas une promesse de positionnement.

## 11. Preuves techniques et visuelles

```text
Manifeste : src/app/guides/combien-de-temps-pour-creer-un-site/page.tsx ; entrée src/lib/guides.ts ; aucun autre fichier modifié.
Constats source : 10 sections H2, 6 tableaux principaux, 7 FAQ, Article JSON-LD et Breadcrumb JSON-LD ; source Google recrawl présente ; CTA présent ; liens internes vers prix, maintenance, cahier des charges, méthode et démarrer un projet.
Hashes : page 7f0390185f8a9af9c8f98f935091d44a992a68b02de78d6d9fac2e2dd4fc5308 ; registre 8663e6e84352121ec854393e049492a1c2b72f242166141e5d31e0911b43cb09.
Calculs refaits : calendriers illustratifs et sensibilités de retard présentés section 6 ; aucune moyenne de marché inventée.
Sources rouvertes : Google recrawl/site moves/301 ; CNIL cookies ; Cloudflare TTL ; Shopify timeline ; Adobe Commerce ; repères US/UK/AU/DACH explicitement bornés comme sources commerciales.
Liens vérifiés : URL Google source du guide et liens de benchmark enregistrés le 24/07/2026 ; les pages commerciales doivent être rouvertes avant toute reprise de chiffre.
Commandes : inspection lecture seule par sed/rg/sha256sum ; aucune modification de source ou de registre.
Rendu 320 / 390 / 768 / 1024 / 1440 : non exécuté dans cette passe ; QA navigateur et vérification de la longueur des tableaux restent P3.
Image sociale : metadata utilise une image Open Graph générée par convention de route et une image Twitter ; rendu réel non vérifié, P2-04 ouvert.
Statut maximal prouvé : audit local et benchmark documenté.
Réserve publication / indexation : aucun commit, push, déploiement, test DNS ou preuve d'indexation réalisés.
```

## Conclusion opérationnelle

Le guide possède la bonne intention éditoriale : parler à une personne qui a une échéance, refuser la promesse universelle et rappeler que le contenu et les validations font partie du projet. Pour devenir une réponse de référence, il doit passer de « voici des fourchettes et des conseils » à « voici votre calendrier défendable ».

La priorité est donc de produire trois calendriers datés, de séparer heures de travail et délai calendaire, puis d'ajouter une RACI, des critères de recette et un chemin migration/DNS. Les fourchettes existantes peuvent rester, mais seulement comme hypothèses encadrées. Sans ces ajouts, la page risque d'attirer un lecteur qui cherche une date, puis de le laisser avec un chiffre trop général pour signer ou planifier sereinement.
