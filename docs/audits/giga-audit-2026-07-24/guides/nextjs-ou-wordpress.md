# Audit approfondi — `nextjs-ou-wordpress`

Date : 24 juillet 2026

Auditeur concurrentiel : contrôle éditorial, décision dirigeant, TCO, SEO, UX et
gouvernance

Snapshot du guide : `src/app/guides/nextjs-ou-wordpress/page.tsx` (956 lignes,
4 333 mots), `opengraph-image.tsx`, registre `src/lib/guides.ts` ; hashes relevés
le 24/07/2026 : page `adc94c89…338d4`, image `45b392ad…8f13`, registre
`8663e6e8…cb09`.

## 1. Verdict exécutif

```text
Lecteur exact : dirigeant de TPE/PME ou indépendant qui doit choisir une base
                technique pour créer ou refaire un site, avec une équipe qui
                publie ou non et un budget de maintenance limité.
Question réelle : « Dois-je garder/réparer WordPress, demander du Next.js,
                  conserver WordPress en headless, choisir un autre CMS ou
                  utiliser une plateforme ? Quelle option me coûte le moins
                  cher et me met le moins en danger pendant trois à cinq ans ? »
Décision attendue : choisir WordPress, WordPress headless + Next.js, Next.js
                   avec CMS, une plateforme spécialisée, ou reporter la migration.
Réponse actuelle en une phrase : le guide explique correctement que WordPress
  est un CMS et Next.js un framework, privilégie l’usage éditorial, nuance SEO,
  vitesse et sécurité, traite le headless, la reprise et un tableau de coût sur
  trois ans ; il laisse toutefois le tableau de TCO vide et ne chiffre ni le
  temps éditorial, ni la disponibilité, ni les 12/36/60 mois.
Défaut qui coûte le plus de valeur : le lecteur comprend les différences, mais
  ne peut pas remplir les « ___ € » ni convertir son rythme de publication,
  ses plugins, ses incidents et son besoin de reprise en choix financier.
Niveau actuel : B-
Priorité : haute
Statut : audité ; aucune réécriture du guide effectuée dans cet audit
```

### Score avant correction

| Axe         | Note /10 | Preuve localisable | Manque décisif |
| ----------- | -------: | ------------------ | -------------- |
| Intention   | 9 | Verdict initial et InfoBox lignes 237–271 | Le coût du risque et du temps du dirigeant ne sont pas quantifiés. |
| Décision    | 8 | Tableau par situation lignes 292–335, six questions lignes 811–841 | Pas de seuils pondérés ni de scénario « réparer avant migrer ». |
| Pédagogie   | 9 | CMS/framework expliqués sans jargon lignes 347–399 | Headless et cache pourraient être illustrés par une journée de travail réelle. |
| Profondeur  | 8 | Performance, SEO, sécurité, sortie, contenu, headless | TCO, disponibilité, SLA, données et exploitation restent génériques. |
| Preuve      | 7 | WordPress/Next/Google et études sectorielles | Sources secondaires et cas commercial sans métriques ; peu de sources primaires. |
| Comparaison | 7 | Tableaux WordPress/Next et architecture headless | Autre CMS/plateforme pas comparé avec même périmètre et même horizon. |
| Originalité | 8 | Transparence sur le biais Hagnéré et refus du duel technologique | Aucun cas filé avec heures d’édition et décision inversée par les chiffres. |
| Style       | 8 | Ton honnête, dirigeant, anti-hype | Quelques listes remplacent encore la position professionnelle concrète. |
| Conversion  | 7 | CTA avec tags « WordPress peut être recommandé » | Livrable, délai et preuve de l’avis ne sont pas définis. |
| SEO/produit | 8 | Canonical, Article/Breadcrumb, FAQ, liens et image file-based | Head, rendu, mobile, données structurées et mesure non testés dans ce snapshot. |

Total : **79/100**

Le guide est plus mûr pédagogiquement que la moyenne des comparatifs « X contre Y ».
Il ne mérite toutefois pas encore le statut de référence décisionnelle : sa pièce
la plus attendue, le coût sur trois ans, est un formulaire vide.

## 2. Ce que le guide dit réellement

- L’introduction répond à la bonne question : WordPress facilite la publication ;
  Next.js est pertinent pour une expérience sur mesure, des intégrations ou une
  application ; aucun n’est automatiquement meilleur pour Google, la vitesse ou
  la sécurité (lignes 237–271).
- Le tableau initial couvre publication fréquente, petit budget, WordPress existant,
  acquisition, espace client, e-commerce et publication headless. Il donne une
  première orientation utile, mais pas de score ni de coût.
- La définition CMS/framework est claire. Le lecteur apprend que Next.js ne fournit
  pas automatiquement l’administration et que WordPress ne doit pas être réduit à
  « dynamique/lent ».
- Performance : le guide demande trois pages, un téléphone réel, une mesure avant/
  après et un protocole contractuel. Il évite la promesse « Next.js toujours rapide ».
- SEO : il demande URLs, redirections, titres, sitemap, données structurées, suivi
  des formulaires et indexation. La direction est bonne mais repose encore sur des
  sources secondaires pour plusieurs affirmations.
- Sécurité : WordPress (cœur, thème, extensions, serveur) et Next.js (framework,
  bibliothèques, services, secrets, hébergement) sont correctement présentés comme
  nécessitant des mises à jour, sauvegardes et responsables.
- Gouvernance : domaine, hébergement, code, contenus, licences et documentation
  doivent être transférables. C’est un excellent angle rarement traité.
- Coût : la section 3 ans liste conception, hébergement, plugins, outil d’édition,
  sécurité, assistance, temps interne et sortie, mais affiche uniquement `___ €`.
- Édition : le rythme de publication et la réalité des tâches sont bien posés. Il
  manque des mesures simples : minutes par article, délai de preview, nombre d’allers-
  retours, coût d’une demande urgente.
- Headless : le bon compromis est expliqué, avec la réserve de deux systèmes et un
  cas Bejamas/Backlinko. Il manque un scénario d’exploitation (webhook, cache,
  preview, panne de build, accès de secours).
- CTA : il demande deux propositions et promet un avis adapté. Le lecteur ne sait
  pas s’il recevra une matrice, une estimation, un appel ou un audit écrit, ni sous
  quel délai.

## 3. Benchmark France et international

Requêtes, pays, langues et date : recherches en français et en anglais sur « Next.js
ou WordPress », « WordPress vs Next.js business », « headless », SEO, coût et
maintenance ; France, États-Unis, Royaume-Uni, Australie, Allemagne/Autriche/Suisse ;
24/07/2026. Les pages commerciales repèrent les angles, elles ne certifient ni leurs
prix ni leurs performances.

| Ressource et URL directe | Pays | Réponse utile | Preuve, outil ou exemple | Limite | Apport à vérifier ou adapter |
| ------------------------ | ---- | ------------- | ------------------------ | ------ | ---------------------------- |
| [Gautam Khorana — Next.js, Astro ou WordPress](https://gautamkhorana.com/fr/guides/nextjs/) | France | Arbre de décision par intention et mode de maintenance, ajoute Astro | Retour d’expérience opérationnel et choix entre trois familles | Auteur/volumes de déploiement non vérifiés ; pas de TCO détaillé | Ajouter l’alternative « autre framework/CMS » et une décision par mode de panne. |
| [Clickdev — comparatif freelance](https://www.clickdev.fr/blog/nextjs-vs-wordpress-2026) | France | Avis explicite budget, délai, autonomie, sécurité et performance sur 3–5 ans | Position de terrain pour dirigeant | Source commerciale, métriques non publiées | Assumer une position claire et chiffrer le temps éditorial plutôt que rester neutre. |
| [IrenicTech — business comparison](https://www.irenictech.com/blog/nextjs-vs-wordpress) | États-Unis | Workload-based : WordPress contenu, Next produit/app, hybride pour certaines équipes | Décision par travail réel, pas framework | Page commerciale courte ; pas de calcul TCO | Reprendre la logique « qui publie / qui maintient / quel produit ». |
| [Brambla — headless WordPress](https://www.brambla.co.uk/blog/wordpress-vs-nextjs-headless/) | Royaume-Uni | TCO headless, entraînement, développeurs et questions de décision | Annonce 30–50 % de coût supplémentaire headless et trois questions | Pourcentage non méthodé ; claim commercial | Ajouter une sensibilité headless avec hypothèses, jamais reprendre le 30–50 % comme fait. |
| [CoreWebHub — Australia comparison](https://corewebhub.com.au/blog/wordpress-vs-nextjs-australia-2026) | Australie | Tableau vitesse, SEO, sécurité, coût, maintenance | Comparaison courte, verdict par PME | Claims « sous 1 seconde », « SEO excellent », « très sûr » non sourcés | Conserver l’angle pays/PME, remplacer les absolus par mesures et scénarios. |
| [Clever Ops — Australian businesses](https://cleverops.com.au/web-design/nextjs-vs-wordpress) | Australie | Next pour sites performance-critical, WordPress pour équipes contenu | Segmentation par organisation | Méthode et tarifs absents | Renforcer le coût du workflow et la capacité interne. |
| [AEH Web — WordPress vs Next.js](https://www.aehweb.nl/en/wordpress-vs-nextjs) | Europe anglophone | Compare coût court/long terme, SEO et cas e-commerce/SaaS | Position « WordPress moins cher au départ » | Source agence ; long terme non démontré | Ajouter calculs de bascule et réversibilité. |
| [Pixzl — Website Kosten 2026](https://www.pixzl.de/newsroom/was-kostet-eine-website-2026) | Allemagne | Relie coût à taille, design, complexité et fournisseur | Segmentation PME/projet complexe | Ne compare pas directement WordPress/Next | Utiliser pour l’angle DACH prix/maintenance, sans conversion mécanique. |
| [WebArs — Autriche/Allemagne/Suisse](https://webars.at/blog/was-kostet-eine-website-oesterreich) | DACH | Compare pays, devise et coûts mensuels | Questions de devis et coûts récurrents | Source commerciale régionale | Ajouter TVA, langue, hébergement, transfert et support par pays. |

Saturation : la plupart des concurrents répètent « WordPress gagne pour l’édition,
Next.js pour la performance et le sur-mesure ». Le guide Hagnéré fait déjà mieux en
refusant les absolus. L’avantage décisif à construire est un comparatif à scope égal
avec 12/36/60 mois, minutes de publication, coût de maintenance, disponibilité,
sortie et seuils de réussite. Les claims étrangers « SEO excellent », « 1 seconde »
ou « 30–50 % » sont des hypothèses concurrentes à auditer, pas des preuves.

## 4. Matrice de gain d’information

| Question décisive | Meilleure réponse française | Apport international | Couverture actuelle | Manque | Réponse supérieure à produire |
| ----------------- | --------------------------- | -------------------- | ------------------- | ------ | ---------------------------- |
| Qui publie et à quelle fréquence ? | WordPress pour équipe non technique | UK/US relient CMS à organisation | Bonne | Pas de durée/coût de publication | Mesurer minutes/article, preview, erreurs et coût horaire. |
| WordPress actuel doit-il être réparé ? | Le guide invite à comparer refonte/audit | Concurrents parlent de workload, pas du diagnostic | Moyenne | Aucun arbre « cause → réparation → migration » | Ajouter baseline plugins, cache, hébergement, formulaires, CWV, incidents. |
| Next.js est-il vraiment plus rapide ? | Mesurer trois pages réelles | Australie donne des absolus non prouvés | Bonne méthode, aucun résultat | Pas de seuil LCP/INP/CLS ni protocole identique | Exiger appareil/réseau, p75 réel, avant/après et seuils. |
| Quelle option est meilleure pour SEO ? | Pas de bonus automatique, contrôle technique | Certains concurrents promettent SEO supérieur | Bonne prudence | Sources secondaires et pas de matrice crawl/index | Relier Google officiel, HTML rendu, canonicals, schema, sitemap, redirects. |
| Qui paie la maintenance et les incidents ? | Les deux solutions demandent suivi | UK parle coût headless, US parle équipes | Partielle | Pas de SLA, RTO/RPO, heures et disponibilité | Scénarios support annuel et coût d’une indisponibilité. |
| Le headless vaut-il le coût ? | Utile pour médias/multi-supports, lourd pour vitrine | Brambla chiffre un surcoût hypothétique | Bonne orientation | Pas de cache, preview, webhook, double sauvegarde | Ajouter architecture, tâches, coûts et déclencheurs précis. |
| Que se passe-t-il si je change de prestataire ? | Code, comptes, contenus, licences, documentation | Kavanagh/Quantaum en font des checklists | Très bonne base | Aucun test d’export/restore ni coût de sortie | Livrable d’acceptation : export, build ailleurs, accès et délai. |
| Quel est le coût total ? | Table vide sur 3 ans | Concurrents annoncent 30–50 % ou « cheaper long-term » | Insuffisante | Aucun total 12/36/60, temps éditorial, hausse | Trois cas chiffrés et analyse de sensibilité. |
| Faut-il choisir un autre CMS/plateforme ? | Outil hébergé mentionné seulement | TechRadar compare builders et renouvellements | Faible | Pas de place pour Wix/Shopify/Astro/CMS headless | Ajouter une sortie « ni l’un ni l’autre » avec critères. |

## 5. Faits et fraîcheur

| Affirmation du guide | Verdict | Source primaire actuelle | Périmètre et date | Correction |
| -------------------- | ------- | ------------------------ | ----------------- | ---------- |
| WordPress est un CMS et Next.js un framework sans administration éditoriale automatique | confirmé | [WordPress documentation](https://wordpress.org/documentation/) ; [Next.js docs](https://nextjs.org/docs) | Nature des produits, consultées 24/07/2026 | Conserver ; ajouter un exemple de tâche pour le dirigeant. |
| Aucun bonus SEO automatique à WordPress ou Next.js | correctement nuancé, à fonder sur Google plutôt que sur presse secondaire | [Google JavaScript SEO basics](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics) et [page experience](https://developers.google.com/search/docs/appearance/page-experience) | Documentation Google, consultée 24/07/2026 | Remplacer l’appui principal Search Engine Journal/John Mueller par les docs officielles. |
| WordPress recommande mises à jour et sauvegardes avant extensions | confirmé | [WordPress manage plugins](https://wordpress.org/documentation/article/manage-plugins/) | Documentation officielle, consultée 24/07/2026 | Conserver ; ajouter fréquence, responsable, restauration testée et coût. |
| Next.js peut être auto-hébergé et dépend du cache partagé en multi-instance | confirmé, mais sous-traité | [Next.js self-hosting](https://nextjs.org/docs/app/guides/self-hosting) et [deployment platforms](https://nextjs.org/docs/app/guides/deploying-to-platforms) | Documentation officielle 2026 | Ajouter cache, revalidation, secrets, logs et incident selon architecture. |
| Une migration SEO doit inventorier URLs, redirections, sitemap et suivi | confirmé | [Google site moves](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes) | Documentation officielle, consultée 24/07/2026 | Ajouter validation status/canonical/robots/schema et seuil de rollback. |
| WordPress est très répandu selon W3Techs | plausible mais non décisif ; source statistique tierce | [W3Techs](https://w3techs.com/technologies/details/cm-wordpress) | Snapshot susceptible de changer | Garder en contexte ou retirer : popularité ne répond pas au choix d’une PME. |
| Les données Core Web Vitals par CMS prouvent la vitesse de WordPress/Next.js | non démontré par le texte ; source secondaire | [HTTP Archive Web Almanac](https://almanac.httparchive.org/en/2025/performance) et Google CWV | Agrégats, pas prédiction du projet | Ne pas reprendre de moyenne ; exiger mesures du site réel. |
| Headless peut améliorer les performances et coûte 30–50 % de plus | le guide ne donne pas ce chiffre ; benchmark concurrent non prouvé | aucune source primaire universelle | Dépend de CMS, cache, équipe et hébergement | Construire des scénarios illustratifs, jamais une règle. |
| Code, droits, comptes et contenus doivent être récupérables | orientation saine ; portée contractuelle à nuancer | [Légifrance CPI](https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006069414/LEGISCTA000006133323/) | Droit français ; contrat et tiers à analyser | Ajouter licences open source, données, exports et coût de sortie. |
| RGPD, cookies, formulaires et accessibilité ont un coût de conception/QA | angle insuffisant | [CNIL RGPD](https://www.cnil.fr/fr/rgpd-de-quoi-parle-t-on), [W3C WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/) | Sources de référence, validation spécialisée non effectuée | Ajouter une réserve conformité et une ligne de budget sans conseil juridique. |

### Contradictions

- Le guide annonce « un coût comparé sur 3 ans » dans ses points clés et sa section
  centrale, puis laisse chaque cellule à `___ €`. Cette promesse éditoriale doit être
  corrigée en calcul réel ou retirée.
- Il dit que Next.js peut être plus libre, mais ne montre pas le prix organisationnel
  d’une équipe qui ne peut plus publier seule. Le coût doit inclure chaque publication
  ou la licence/CMS qui rend l’équipe autonome.
- Il recommande de mesurer la performance sans donner de seuils d’acceptation. Une
  méthode sans décision associée n’aide pas un dirigeant à signer.
- Il présente le headless comme utile à certains médias/sites très visités, mais ne
  précise pas que la disponibilité et l’équipe d’astreinte peuvent compter davantage
  que le volume de pages.

### Faits à retirer plutôt qu'à affaiblir

- « Next.js plus rapide », « WordPress plus sûr » ou l’inverse sans test du même site,
  du même contenu et du même hébergement.
- Tout chiffre de popularité ou de Core Web Vitals utilisé comme argument de choix
  individuel.
- Tout gain de coût à long terme qui ne compte pas développement initial, outil
  d’édition, maintenance, incident, sortie, temps interne et support.

## 6. Scénarios et calculs à construire

Ces chiffres sont des hypothèses illustratives à intégrer, pas des prix de marché ni
des tarifs Hagnéré. Ils comparent le même site : 12 pages, 4 pages de service, blog,
formulaire, analytics, SEO de base, domaine, sauvegardes, support et une personne qui
publie deux articles par mois.

| Variable | Simple — vitrine stable | Central — acquisition active | Exigeant — headless/métier | Hypothèse à vérifier |
| -------- | ----------------------: | ---------------------------: | -------------------------: | -------------------- |
| Construction initiale | 2 500 € WordPress / 6 900 € Next | 6 000 € WordPress / 12 000 € Next | 12 000 € headless / 24 000 € Next métier | Scénarios pédagogiques, même scope à préciser. |
| Outil éditorial | inclus WP / 0–600 € Next | 0–1 200 €/an | 1 200–4 800 €/an | Selon CMS, utilisateurs et environnement. |
| Hébergement + domaine | 360 €/an WP / 360 € Next | 720 €/an WP / 1 080 € Next | 2 400 €/an headless | Tarifs publics à vérifier par région. |
| Plugins/services | 300 €/an | 900 €/an | 2 400 €/an | Paiement, formulaires, SEO, email, recherche. |
| Maintenance et sécurité | 900 €/an WP / 600 € Next | 2 400 €/an WP / 2 400 € Next | 6 000 €/an | Inclure sauvegardes, correctifs, alertes et tests. |
| Temps éditorial | 24 h/an WP / 36 h/an Next | 48 h/an WP / 72 h/an Next | 120 h/an | Mesurer création, preview, publication et corrections. |
| Temps de gestion/incident | 8 h/an WP / 4 h/an Next | 20 h/an WP / 16 h/an Next | 60 h/an | Hypothèse, à confronter aux incidents réels. |
| Sortie/migration à l’horizon | 1 500 € | 3 000 € | 8 000 € | Export, redirections, replatforming et QA. |

```text
TCO 12 mois = construction + outil éditorial + hébergement + plugins/services
              + maintenance/sécurité + (heures éditoriales + incident) × taux interne
TCO 36 mois = construction + 3 × récurrents + temps interne sur 36 mois
              + réserve d’incident + sortie si le contrat l’impose
TCO 60 mois = construction + 5 × récurrents + temps interne sur 60 mois
              + changement de prestataire ou refonte prévisible

Horizon : 12, 36 et 60 mois ; même contenu, mêmes fonctions et même support.
Inclus : publication, preview, formulaire, mesure, sauvegarde, sécurité et reprise.
Exclus : hausse de chiffre d’affaires supposée, valeur SEO non prouvée, TVA inconnue,
         interruption exceptionnelle non modélisée.
Sensibilité : ±30 % sur licences, heures éditoriales, maintenance, incidents et
              fréquence d’articles ; scénario +1 langue et +1 intégration.
Variable de bascule : coût annuel du workflow et exigence de fonctions spécifiques,
                       pas la préférence du développeur.
Contrôle inverse : si WordPress reste sous les seuils CWV, sécurité, publication et
                   conversion, Next.js doit justifier son surcoût par une fonction
                   ou un risque réellement mesuré.
```

Exemple à raconter : une entreprise qui publie deux fois par mois et ne modifie que
des textes peut accepter 36 heures annuelles de support Next.js, mais pas si chaque
petit changement prend trois jours. Une équipe de trois personnes qui publie chaque
semaine peut préférer WordPress même si le build Next.js obtient de meilleurs scores
techniques : 30 minutes économisées par publication deviennent 26 heures par an,
auxquelles il faut comparer le coût réel de l’éditeur et du support.

## 7. Comparaison et position professionnelle

```text
Options réellement comparables :
  A. WordPress classique réparé et maintenu ;
  B. WordPress refondu avec thème propre ;
  C. WordPress headless + Next.js ;
  D. Next.js + CMS adapté ;
  E. autre CMS/plateforme (Wix, Shopify, Webflow, Astro/CMS) si elle couvre le besoin.
Périmètre commun : 12 pages, blog, formulaire, analytics, SEO de base, mobile,
  accessibilité minimale, sauvegardes, support, formation, comptes et sortie.
Horizon : 12/36/60 mois, avec taux horaire interne et coût d’incident identiques.
Option la moins chère : A lorsque le problème est réparable et l’équipe publie déjà.
Option la moins risquée : A ou B pour une vitrine simple ; C/D augmentent le nombre
  de systèmes et donc les modes de panne.
Option qui demande le moins de temps interne : celle dont les tâches réelles ont été
  testées ; WordPress gagne souvent en éditorial, une plateforme hébergée en démarrage.
Position Hagnéré Code : ne pas vendre Next.js à une entreprise que WordPress sert
  correctement. Le proposer lorsque la différenciation, une intégration métier, un
  parcours critique ou une contrainte mesurée justifie le développement et le suivi.
Faits qui la fondent : documentation Google/WordPress/Next.js, TCO rempli, tâches
  éditoriales chronométrées, baseline de performance, incidents et capacité de reprise.
Cas où l’option opposée gagne : contenu quotidien, budget limité, fonctions standard,
  équipe sans développeur ou migration impossible à tester.
Signal de révision : p75 CWV hors seuil, formulaires perdus, publication trop lente,
  plugin critique non maintenu, cache incohérent, disponibilité non tenue ou coût de
  support supérieur à la valeur de la fonction.
Ce que nous déconseillons même si nous pourrions le vendre : headless pour une petite
  vitrine, Next.js sans CMS malgré une équipe éditoriale, WordPress surchargé pour une
  application, ou devis qui exclut export, sauvegardes et incidents.
```

## 8. Objections et cas limites

| Objection loyale | Réponse prouvée | Ce qui reste incertain | Conséquence |
| ---------------- | --------------- | ---------------------- | ----------- |
| « Next.js est forcément meilleur pour Google. » | Google recommande qualité, exploration, rendu et expérience ; pas un CMS gagnant. | Contenu, liens, HTML et mesures du projet. | Exiger baseline, crawl, canonical, schema et p75 réel. |
| « WordPress est dangereux par nature. » | Le risque dépend du cœur, thème, extensions, hébergement, mises à jour et sauvegardes. | Discipline réelle et historique des incidents. | Chiffrer maintenance et restaurations testées avant migration. |
| « Je veux modifier tout seul. » | WordPress le permet plus directement ; Next.js le permet seulement avec CMS prévu. | Modèles, preview et temps de formation. | Faire réaliser une publication réelle par chaque rôle. |
| « Je garde WordPress mais veux la vitesse de Next.js. » | Headless est possible mais ajoute deux systèmes, cache, preview et sécurité. | Volume, fréquence, équipe et hébergeur. | Comparer gain mesuré contre coût d’exploitation. |
| « Les scores Lighthouse décideront. » | Un score synthétique ne garantit ni leads ni classement. | Données réelles mobile et conversion. | Mesurer pages commerciales et formulaires avant/après. |
| « Le tableau 3 ans est impossible à remplir. » | Les coûts inconnus ne valent pas zéro. | Licences, support, temps, sortie et incident. | Demander offres écrites et expliciter chaque hypothèse. |
| « Je pourrais changer d’agence. » | Les deux stacks sont reprenables avec accès, code, données et documentation. | Licences tierces, CMS propriétaire, secrets et build. | Tester export/build ailleurs avant livraison finale. |
| « Une application arrive bientôt. » | Next.js peut servir de base, mais un site vitrine et une application n’ont pas le même périmètre. | Auth, données, sécurité, disponibilité et support. | Écrire une trajectoire en étapes, pas surdimensionner le site. |
| « Je préfère un autre CMS. » | Une plateforme peut être plus simple si elle couvre publication, paiement et support. | Lock-in, export, intégrations, prix et montée en charge. | Ajouter une branche « ni WordPress ni Next.js ». |

## 9. Plan de réécriture

| Ordre | Section proposée | Question résolue | Preuve, scénario ou outil | Décision produite | À conserver / créer / couper |
| ----: | ---------------- | ---------------- | ------------------------- | ----------------- | ---------------------------- |
| 1 | Verdict en 60 secondes | Quel choix me concerne ? | Arbre WordPress / refonte / headless / Next / autre | Continuer ou sortir | Conserver l’InfoBox, ajouter un cas simple et un cas métier. |
| 2 | Le problème avant la technologie | Dois-je réparer ? | Baseline plugins, cache, CWV, formulaires, incidents | Réparer ou changer | Créer fiche de diagnostic ; couper les absolus. |
| 3 | Comparaison à périmètre égal | Que couvrent les devis ? | Tableau 12 pages/blog/formulaire/SEO/support | Choix comparable | Étendre les tableaux actuels. |
| 4 | Édition au quotidien | Qui paie chaque publication ? | Chronométrage d’article, preview, rôles, formation | CMS validé ou non | Conserver la section contenu ; ajouter chiffres. |
| 5 | Performance et SEO | Quel gain mesuré ? | p75 LCP/INP/CLS, crawl, canonical, schema, GSC | Seuil atteint ou non | Remplacer sources secondaires par Google. |
| 6 | Sécurité/disponibilité | Qui intervient ? | Patch SLA, sauvegarde/restauration, RTO/RPO, monitoring | Risque acceptable | Ajouter coût annuel et incident. |
| 7 | TCO 12/36/60 | Que coûte le choix ? | Trois scénarios et sensibilités ±30 % | Break-even ou report | Remplacer les `___ €`. |
| 8 | Headless/autre CMS | Quand le compromis vaut-il le coût ? | Cache, preview, webhook, licences, sortie | Architecture retenue | Conserver la réserve vitrine simple. |
| 9 | Gouvernance et sortie | Suis-je prisonnier ? | Domaine, code, CMS, exports, build ailleurs | Contrat signable | Ajouter test d’acceptation. |
| 10 | CTA | Quelle prochaine action ? | Matrice de comparaison et estimation de périmètre | Contact qualifié | Préciser livrable, délai et limites. |

### Contrat des 150 premiers mots

Dire au lecteur : « WordPress et Next.js ne sont pas deux modèles de voiture que
vous comparez sur une fiche technique. WordPress est une interface de publication ;
Next.js est une base de développement. La bonne décision dépend de la personne qui
publiera, des fonctions que le site doit réaliser, du coût de la maintenance et de
ce que vous pourrez reprendre si l’agence disparaît. Pour une vitrine simple avec
une équipe non technique, WordPress ou une plateforme peut gagner. Pour un parcours
sur mesure, une intégration métier ou une application, Next.js peut devenir rationnel.
Ce guide vous fait comparer les mêmes pages, le même formulaire, le même niveau de
support et trois horizons — 12, 36 et 60 mois. Vous verrez aussi quand réparer
WordPress, quand éviter le headless et quelles preuves exiger avant de signer. »

### Éléments à supprimer

- Le tableau de TCO rempli de `___ €` : soit le rendre calculable, soit ne pas
  annoncer un coût comparé.
- Les références secondaires utilisées comme preuve principale d’une règle SEO ou
  d’une performance moyenne.
- Les promesses implicites de vitesse, sécurité ou économie associées à la stack.
- Les listes de fonctions sans coût de responsabilité, disponibilité et reprise.

### Éléments à conserver

- La transparence sur le fait que Hagnéré Code développe en Next.js.
- La phrase qui dit quand WordPress est préférable et la reconnaissance du coût
  éditorial de Next.js.
- Les tableaux d’usage, les définitions CMS/framework, les sections sécurité,
  gouvernance, sortie et headless.
- L’avertissement qu’un outil hébergé peut être meilleur que les deux pour un besoin
  simple et peu financé.

## 10. Contre-audit après correction

Les corrections ci-dessous sont **à faire** ; elles n’ont pas été appliquées dans
cet audit.

| Problème | Priorité | Correction appliquée | Revalidation indépendante |
| -------- | -------- | -------------------- | ------------------------- |
| P1-01 — tableau TCO 3 ans vide et absence de 12/60 mois | P1 | Non appliquée | Refaire les calculs et vérifier les totaux sur trois scénarios. |
| P1-02 — temps éditorial non chiffré | P1 | Non appliquée | Chronométrer article, page, preview et correction par rôle. |
| P1-03 — coût de maintenance, incidents et disponibilité sans SLA/RTO/RPO | P1 | Non appliquée | Ajouter coût annuel, seuil d’alerte, responsable et restauration testée. |
| P1-04 — comparaison directe de produits non équivalents | P1 | Non appliquée | Comparer A/B/C/D/E sur même scope, support, devise, TVA et horizon. |
| P1-05 — performance/SEO sans seuil d’acceptation | P1 | Non appliquée | Tester appareil/réseau, p75 CWV, crawl, canonical, schema, sitemap, formulaires. |
| P1-06 — headless sans coût opérationnel ni plan de panne | P1 | Non appliquée | Documenter CMS, webhook, preview, cache, build, secours et double sauvegarde. |
| P1-07 — autre CMS/plateforme seulement mentionné | P1 | Non appliquée | Ajouter branche décisionnelle Wix/Shopify/Webflow/Astro/CMS headless, avec sortie. |
| P1-08 — CTA sans livrable, délai et preuve | P1 | Non appliquée | Vérifier que le contact reçoit une matrice ou un avis défini sans garantie. |
| P2-01 — sources SEO/performance secondaires | P2 | Non appliquée | Remplacer ou compléter par Google, Next.js et WordPress officiels. |
| P2-02 — RGPD, cookies et accessibilité absent du budget | P2 | Non appliquée | Ajouter lignes de cadrage et validation spécialisée. |
| P2-03 — image OG file-based non inspectée en head/rendu | P2 | Non appliquée | Vérifier HTML, dimensions, cache et partage social. |
| P2-04 — `readTimeMin` 14 non recalculé | P2 | Non appliquée | Mesurer texte et rendu final. |
| P2-05 — cas Bejamas sans métrique détaillée | P2 | Non appliquée | Ajouter métriques et périmètre uniquement si la preuve est accessible ; sinon réduire le claim. |
| P2-06 — export/reprise jamais testé | P2 | Non appliquée | Exporter contenus, reconstruire ailleurs et consigner le délai. |
| P2-07 — multilingue/hreflang et data residency absents | P2 | Non appliquée | Ajouter pays, langues, hébergement, transferts et canonical. |
| P2-08 — mesure conversion et consentement trop générale | P2 | Non appliquée | Définir événements formulaire, attribution, consentement et propriétaire. |
| P2-09 — dépendances/services tiers non inventoriés | P2 | Non appliquée | Liste de versions, licences, renouvellements, secrets et fournisseurs. |
| P2-10 — checklist de lancement et suivi 30/90 jours absente | P2 | Non appliquée | Ajouter J0/J7/J30/J90, erreurs, indexation, leads, uptime et escalade. |

### État des portes P1–P4

```text
P1 recherche et cadrage : PRÉSENTE MAIS INCOMPLÈTE — sources et défauts sont
                          identifiés, mais scénarios et matrice restent à produire.
P2 rédaction/intégration: EXISTANTE MAIS NON VALIDÉE — guide source inchangé
                          et huit P1 ouverts.
P3 contre-audit indépendant: RAPPORT PRÉSENT, PORTE NON VALIDÉE — aucun
                             snapshot corrigé à recalculer et recontrôler.
P4 plume humaine et QA : REJETÉE / NON VALIDÉE — score inférieur à 90 et
                         aucun build, rendu navigateur, head, responsive ou crawl final.
Publication/indexation : NON PROUVÉES PAR CE RAPPORT — aucun déploiement,
                         traitement de sitemap, Search Console, indexation ou
                         conversion n'est contrôlé ici.
```

### Score après correction

Non calculable : le guide n’a pas été réécrit dans cette passe. **Objectif : 93/100
minimum**, avec 9/10 en intention, pédagogie, décision, comparaison et preuve, et
aucun P1 ouvert.

## 11. Preuves techniques et visuelles

```text
Manifeste : src/lib/guides.ts — slug, dates, title, metaDescription et readTimeMin 14 vérifiés.
Calculs refaits : le tableau source reste vide ; scénarios TCO 12/36/60 proposés ici,
                 sans modification de la page.
Sources rouvertes : Next.js docs/self-hosting/deployment ; WordPress documentation,
                    plugins et export ; Google JavaScript SEO/page experience/site
                    moves ; CNIL ; W3C WCAG ; Légifrance.
Liens vérifiés : sources du guide repérées ; liens internes et destinations non testés
                 par navigateur dans ce rapport.
Commandes : wc -l -w ; shasum -a 256 ; git diff --check après création du rapport.
Rendu 320 / 390 / 768 / 1024 / 1440 : non exécuté.
Image sociale : opengraph-image.tsx existe ; head, dimensions et partage social non inspectés.
Statut maximal prouvé : audit éditorial/factuel local et benchmark concurrentiel.
Réserve publication / indexation : aucune conclusion de build, déploiement,
                                    indexation, conversion ou position Google possible.
```

### Décision de chantier

Le guide est une base de qualité : il parle à un dirigeant, reconnaît le biais
commercial, recommande WordPress lorsque c’est raisonnable et décrit la reprise.
Pour devenir la meilleure réponse, il doit maintenant remplir sa promesse financière
et opérationnelle : TCO 12/36/60, temps éditorial, maintenance, disponibilité, coût de
sortie, seuils SEO/UX et alternative « ni WordPress ni Next.js ». La réécriture doit
commencer par ces preuves, puis être contre-auditée avant toute publication technique.
