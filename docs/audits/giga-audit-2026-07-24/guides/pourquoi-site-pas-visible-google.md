# Audit approfondi — `pourquoi-site-pas-visible-google`

Date : 24 juillet 2026  
Auditeur : audit éditorial, SEO technique, mesure et conversion, en lecture seule  
Snapshot : `src/app/guides/pourquoi-site-pas-visible-google/page.tsx` et entrée du registre inspectés le 24 juillet 2026 ; registre observé avec `datePublished: 2026-07-22`, `dateModified: 2026-07-22`, `readTimeMin: 14`.

## 1. Verdict exécutif

```text
Lecteur exact : dirigeant de TPE/PME, indépendant ou responsable commercial qui entend « mon site n'est pas sur Google » et doit savoir si le problème est technique, local, éditorial, lié à la demande ou simplement une impression de recherche trompeuse.
Question réelle : « Google connaît-il cette URL, peut-il la lire, l'a-t-il indexée, la montre-t-il pour la bonne recherche et cette visibilité produit-elle une action commerciale ? »
Décision attendue : identifier la première preuve manquante, corriger l'obstacle proportionné, mesurer la suite et ne pas acheter une refonte ou des liens sans diagnostic.
Réponse actuelle en une phrase : le guide impose une paire URL–recherche, sépare découverte/exploration/indexation/impressions/clics/demandes, propose un outil local et rappelle les limites de site: et du sitemap ; il doit encore devenir un arbre de triage complet, avec logs, migration, nouveau domaine, JavaScript, local/Business Profile, action manuelle/sécurité, seuils, scénarios de valeur et portes stop-go.
Défaut qui coûte le plus de valeur : le lecteur est bien protégé contre les fausses certitudes, mais ne sait pas encore distinguer rapidement « site inconnu », « page non indexée », « page indexée mais hors intention », « résultat local absent » et « formulaire cassé » avec les mêmes preuves et une date de décision.
Niveau actuel : B+.
Priorité : très haute, car ce guide est un point d'entrée naturel vers l'audit SEO, la refonte, le SEO local et les projets de correction technique.
Statut : audit terminé ; aucun guide source, registre ou fichier Git modifié.
```

### Score avant correction

| Axe | Note /10 | Preuve localisable | Manque décisif |
| --- | ---: | --- | --- |
| Intention | 9 | lead humain, paire page/recherche, marque contre métier | les cinq sens de « visible » ne sont pas résumés dans un arbre unique |
| Décision | 8 | première preuve manquante, corriger/mesurer/attendre/audit | seuils, responsables, stop-go et rollback restent implicites |
| Pédagogie | 9 | six étapes, cartes, encadrés, outil gratuit | crawl, rendu, indexation, ranking et local demandent encore des exemples concrets |
| Profondeur | 7 | Search Console, `site:`, sitemap, attribution | logs, DNS/HTTP, robots/noindex/canonical, migration, JS, spam, Business Profile et concurrence incomplets |
| Preuve | 9 | nombreuses sources Google officielles et limites honnêtes | Bing, logs et preuves d'environnement ne sont pas intégrés au protocole |
| Comparaison | 7 | marque/métier et quatre fiches fictives | nouveau domaine, migration, local, mobile, moteur secondaire et types de SERP absents |
| Chiffrage | 7 | CTR fictifs 25,9 % et 1,9 % | aucune perte de marge, valeur de lead, délai de publication ou coût d'escalade |
| Style | 9 | ton rassurant, accessible, anti-panique | il faut une réponse courte en tête pour le dirigeant pressé |
| Conversion | 8 | CTA avec preuves avant devis, aucune refonte imposée | livrable, périmètre, délai et critères d'escalade non détaillés |
| SEO/produit | 8 | metadata, OG, Article/Breadcrumb, FAQ, maillage, outil local | JSON-LD/robots/canonical publics et rendu responsive non vérifiés ; ressource exportable absente |

Total : **81/100**.

La page est déjà meilleure que la plupart des réponses « tapez site: puis attendez ». Elle dit correctement que l'indexation n'est pas une garantie d'apparition et qu'une demande observée n'est pas automatiquement attribuable à un clic. Pour prétendre au niveau de référence, elle doit toutefois faire la jonction entre le diagnostic technique et la décision d'entreprise : combien de pages, quelle zone de chiffre d'affaires, quel risque de migration, quelle action dans l'heure, quelle preuve dans une semaine et quand arrêter de modifier.

## 2. Ce que le guide fait déjà bien

### Progression observée

Le guide commence par une situation que le dirigeant reconnaît : son site est en ligne, mais il ne le retrouve pas lorsqu'il cherche son activité et sa ville. Il impose ensuite une discipline utile : choisir une URL complète et une requête exacte, séparer la marque de la recherche métier, puis suivre six preuves dans l'ordre :

1. découverte : Google connaît-il l'adresse ;  
2. exploration : Google a-t-il pu ouvrir la page ;  
3. indexation : quelle version a été retenue ;  
4. impressions : la page est-elle proposée pour cette recherche ;  
5. clics : le résultat est-il choisi ;  
6. demandes : les clics sont-ils reliés à un formulaire, un appel ou un rendez-vous.

L'outil `SearchVisibilityDiagnostic` est cohérent avec cette promesse : il collecte date, période, URL, requête, type de requête, pays/appareil, responsable et date de recontrôle ; il distingue « aucune donnée visible » de zéro ; il explique qu'il ne se connecte pas à Search Console et n'envoie rien. C'est une très bonne barrière contre le partage de mots de passe et les diagnostics inventés.

Le faux cas BatiClair 73 est également utile : une marque peut être visible alors qu'une page métier n'est pas indexée, qu'une autre reçoit des impressions sans clic et qu'une quatrième est inconnue. Les calculs 29/112 = 25,9 % et 1/54 = 1,9 % sont refaits et explicitement fictifs.

### Ce qui est exact et doit être conservé

- `site:` est un indice et ne constitue pas l'inventaire complet de l'index ; le renvoi vers la documentation Google est approprié.
- Un sitemap facilite la découverte mais ne garantit ni exploration ni indexation.
- « URL sur Google » signifie qu'elle peut apparaître, pas qu'elle sera servie pour la requête du lecteur.
- Search Console et le CRM ne comptent pas la même chose ; les demandes doivent être attribuées avant de calculer un taux.
- Une demande de nouvelle exploration n'est ni une publication forcée ni une garantie de délai.
- L'action manuelle ou la sécurité doivent être traitées avant d'optimiser un titre.
- Le guide ne promet ni position, ni trafic, ni client : cette retenue est commercialement saine.

## 3. Où la promesse « invisible » se mélange encore

| Phrase du dirigeant | Réalité possible | Preuve première | Action qui ne doit pas être lancée trop tôt |
| --- | --- | --- | --- |
| « Le site n'existe pas sur Google » | la marque est visible, la page métier est en page 5 | Search Console par URL/requête + observation SERP datée | demander une refonte complète |
| « La page n'est pas indexée » | Google a choisi une autre canonique ou la page est un doublon | Inspection d'URL : indexation, canonique déclarée/choisie, raisons d'exclusion | publier dix articles |
| « Google ne peut pas trouver le site » | DNS, TLS, code 5xx, WAF ou robots bloquent le robot | disponibilité, logs Googlebot, inspection active, robots.txt | modifier le contenu |
| « Je suis absent dans ma ville » | le résultat organique existe, mais le pack local ou la fiche Business Profile n'est pas visible | requête locale documentée, catégorie/zone/fiche, Search Console localisée | acheter des liens nationaux |
| « Je n'ai aucune impression » | la requête n'est pas demandée, est trop précise ou le filtre masque les lignes anonymisées | période, pays, appareil, requête et Trends ; ne pas transformer l'absence en zéro | conclure à une pénalité |
| « Le site est indexé mais invisible » | page indexée mais mauvaise intention, résultat riche dominant, faible position ou requête différente | impressions, position moyenne, SERP réelle et page choisie | réindexer la même page chaque jour |
| « Le site reçoit des clics mais aucun client » | formulaire, téléphone, consentement, attribution ou traitement commercial défaillant | test de parcours, Analytics/CRM/call tracking | accuser Google ou le contenu |

Cette matrice devrait apparaître avant le premier outil. Elle répond à la confusion initiale en trente secondes, puis le détail peut expliquer pourquoi chaque preuve est nécessaire.

## 4. Benchmark France et international

Recherche effectuée le 24 juillet 2026. Les sources Google et Bing servent de référence pour les faits ; les ressources commerciales étrangères servent de benchmark de couverture, pas de preuve de causalité ni de promesse de classement.

| Ressource et URL directe | Zone | Ce qu'elle couvre | Limite | Ce que le guide doit reprendre |
| --- | --- | --- | --- | --- |
| [Google — premiers pas avec Search Console](https://developers.google.com/search/docs/monitor-debug/search-console-start?hl=fr) | international | propriété, indexation, sitemap, performances, actions manuelles, sécurité, inspection, migration | documentation, pas diagnostic d'un site particulier | arbre des rapports à ouvrir et ordre de lecture |
| [Google — inspection d'URL](https://support.google.com/webmasters/answer/9012289?hl=fr) | international | état connu dans l'index, test de l'URL active, exploration, canonique et demande de recrawl | résultat daté, sans garantie d'apparition | champs exacts à recopier et différence index/live |
| [Google — rapport d'indexation](https://support.google.com/webmasters/answer/7440203?hl=fr) | international | pages indexées/exclues et motifs comme robots, noindex, doublon | regroupement au niveau propriété | branche site entier vs URL isolée |
| [Google — robots.txt](https://developers.google.com/search/docs/crawling-indexing/robots/intro?hl=fr) | international | rôle du fichier et portée du blocage d'exploration | robots.txt n'est pas une instruction d'indexation complète | distinguer crawl bloqué et noindex |
| [Google — bases du SEO JavaScript](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics?hl=fr) | international | rendu, liens, contenu généré et limites de JavaScript | nécessite un test de rendu | inclure HTML rendu et mobile |
| [Google — sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview?hl=fr) | international | découverte et envoi surveillable | aucune garantie d'inclusion | ne jamais présenter le sitemap comme solution magique |
| [Google — opérateur `site:`](https://developers.google.com/search/docs/monitor-debug/search-operators/all-search-site?hl=fr) | international | usage de l'opérateur et limites | échantillon non exhaustif | conserver « indice, pas verdict » |
| [Google — site absent des résultats](https://support.google.com/webmasters/answer/7474347?hl=en) | international, version anglaise | distingue site manquant, page non affichée, site récent et problèmes d'indexation | aide généraliste | ajouter les questions de langue et de statut du domaine |
| [Google — résultats locaux](https://support.google.com/business/answer/7091?hl=fr) | international | présence locale, fiche et signaux de pertinence/distance/notoriété | Business Profile n'explique pas tout le SEO organique | branche locale bornée et lien vers le guide local |
| [Google — Search Status Dashboard](https://status.search.google.com/) | international | incidents et mises à jour documentés | un incident global ne prouve pas la cause d'une URL | contrôle avant d'accuser le site |
| [Bing Webmaster Guidelines](https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a) | international | qualité, exploration, indexation, liens et abus selon le moteur | règles Bing distinctes de Google | contrôle miroir sans transposer les seuils |
| [Bing — sitemaps](https://www.bing.com/webmasters/help/sitemaps-3b5cf6ed) | international | soumission et découverte côté Bing | outil secondaire pour la cible française | distinguer absence Google et absence multi-moteur |
| [SISTRIX — Google-indexering controleren](https://www.sistrix.de/frag-sistrix/technisches-seo/crawling/google-indexierung-pruefen) | DACH | combine indexabilité, qualité et visibilité, avec une lecture de domaine | outil propriétaire et allemand | ajouter la différence indexé/visible et la comparaison concurrentielle |
| [SISTRIX — faible visibilité de domaine](https://www.sistrix.de/support/sichtbarkeitsindex/die-sichtbarkeit-meiner-domain-ist-sehr-gering-was-sind-die-ursachen/) | DACH | visibilité relative aux concurrents et mots-clés suivis | indice propriétaire, pas trafic Search Console | expliquer qu'un indice tiers est un thermomètre, pas une vérité commerciale |
| [Search Engine Journal — page missing from Google](https://www.searchenginejournal.com/seo/google-ranking-drops/) | États-Unis | vérifications indexation, contenu, concurrence et outils | média et conseils généraux, page davantage orientée baisse | reprendre la branche « indexé mais pas visible » sans l'appeler pénalité |
| [Ahrefs — rankings and SERP discrepancies](https://help.ahrefs.com/en/articles/1032342-why-don-t-the-ranking-positions-in-site-explorer-match-those-i-see-in-google) | États-Unis/international | localisation, fréquence de crawl et différence outil/SERP | données commerciales estimées | avertir qu'une position d'outil tiers n'est pas une preuve d'absence |
| [Semrush — indexation et visibilité](https://www.semrush.com/blog/google-index/) | États-Unis/international | indexation, contrôle technique et visibilité concurrentielle | méthode propriétaire et liens commerciaux | ajouter la notion de contrôle à plusieurs niveaux |
| [The SEO Works — site not appearing](https://www.seoworks.com/seo-glossary/ranking-drop/) | Royaume-Uni | vocabulaire et causes techniques/contenu | agence, pas source primaire | traduire le jargon en décisions de dirigeant |
| [Safari Digital — Google ranking/indexing issues](https://www.safaridigital.com.au/blog/google-ranking-drop/) | Australie | technique, contenu, liens et diagnostic par symptômes | agence et page orientée baisse | tester liens, concurrence et changements récents sans causalité automatique |

### Écart de couverture constaté

Le guide actuel rivalise avec les meilleurs guides généralistes sur la prudence et l'explication du chemin URL–demande. Il est moins complet sur les sujets que les guides internationaux mettent en avant : distinction indexation/visibilité, comparaison avec les concurrents, mesure par moteur, logs, rendu JavaScript, domaine neuf, migration, local et action manuelle. Le benchmark ne justifie pas de copier une checklist de 100 alertes ; il justifie de rendre chaque branche falsifiable et orientée décision.

## 5. Arbre de diagnostic attendu

Le lecteur doit pouvoir suivre cet arbre sans connaître le SEO. Les seuils chiffrés ci-dessous sont des garde-fous de méthode Hagnéré Code, jamais des règles publiées par Google.

```text
1. Le domaine répond-il en HTTPS depuis un réseau externe ?
   NON → incident DNS/TLS/5xx/WAF/hébergement : STOP contenu, restaurer et conserver les logs.
   OUI → 2.

2. Une URL précise est-elle connue par Inspection d'URL ?
   INCONNUE → vérifier liens internes, sitemap, statut de page, domaine neuf et robots ; recontrôler à date fixée.
   CONNUE → 3.

3. La dernière exploration et le test en direct réussissent-ils ?
   NON → HTTP, redirection, timeout, robots, ressource bloquée ou rendu : réparer puis re-tester.
   OUI → 4.

4. La page est-elle indexée sous la bonne canonique ?
   NON → noindex, doublon, canonical choisie, erreur de migration ou contenu pauvre : corriger la cause exacte.
   OUI → 5.

5. Des impressions existent-elles pour la requête et le segment comparables ?
   NON → demande inexistante/rare, filtre anonymisé, mauvaise recherche, localité ou page hors intention : vérifier Trends/SERP et élargir le segment.
   OUI → 6.

6. La page est-elle dans un résultat pertinent et à une position exploitable ?
   NON → intention, concurrence, SERP features, contenu et liens : comparer 3–5 résultats et améliorer la page concernée.
   OUI → 7.

7. Les clics et demandes sont-ils mesurés et attribués ?
   NON → test formulaire/téléphone/consentement/CRM avant diagnostic SEO.
   OUI → mesurer la valeur, prioriser et décider le prochain sprint.
```

### Les rapports et preuves à ouvrir

| Ordre | Source | Ce qu'il faut recopier | Ce que cela prouve | Ce que cela ne prouve pas |
| ---: | --- | --- | --- | --- |
| 0 | navigateur externe | URL, code HTTP, TLS, redirections, mobile/desktop | disponibilité observée à l'instant | disponibilité de toutes les zones et de Googlebot |
| 1 | URL Inspection | statut, découverte, dernière exploration, indexation, canonique déclarée et choisie, test live | état connu d'une URL | classement pour une requête |
| 2 | Indexing report | motifs d'exclusion, volume, tendance, exemples | motif regroupé par propriété | cause de chaque URL sans échantillon |
| 3 | robots/noindex/canonical | réponse robots, meta/X-Robots-Tag, balise canonical, source et HTML rendu | directives et version servie | décision finale de Google isolément |
| 4 | sitemap | URL, `lastmod`, statut d'envoi et erreurs | liste déclarée et signaux de découverte | inclusion ou priorité garantie |
| 5 | logs serveur/CDN/WAF | user-agent, IP validée, timestamp UTC, statut, octets, temps, URL | passage ou blocage observé du robot | ce que Google fera demain |
| 6 | Search performance | page, requête, pays, appareil, période, impressions, clics, CTR, position | exposition et choix visibles | conversions ou chiffre d'affaires |
| 7 | SERP datée | pays, ville si local, appareil, requête exacte, type de résultat, concurrents | contexte de la page de résultats | position universelle |
| 8 | Analytics/CRM/call tracking | session, événement, consentement, source, dossier, marge | parcours commercial attribuable si identifiants cohérents | causalité si les tags ou appels sont incomplets |

### Vérifications techniques qui manquent dans le guide

- HTTP : 200, 3xx, 4xx, 5xx, boucle de redirection, certificat et résolution DNS.
- Exploration : `robots.txt`, règles host/sitemap, WAF/CDN, disponibilité intermittente, limite de débit et erreurs Googlebot réellement observées dans les logs.
- Indexation : `noindex` dans HTML ou `X-Robots-Tag`, canonical contradictoire, doublon, langue, soft 404, contenu rendu absent et page de destination après redirection.
- Rendu : HTML initial et DOM après JavaScript, liens `<a>` crawlables, contenu chargé après interaction, erreur console, version mobile-first et ressources CSS/JS accessibles.
- Migration : inventaire anciennes/nouvelles URL, 301 une à une, canonicals, liens internes, sitemap nouveau, changement de domaine Search Console et contrôle des anciennes URL.
- Nouveau domaine : date de mise en ligne, propriété vérifiée, pages réellement publiées, lien externe/interne, sitemap et délai de recontrôle ; aucune durée universelle ne doit être promise.

## 6. Les causes métier à ne pas appeler « indexation »

### Requête sans impression

Une requête saisie par le propriétaire peut être trop rare, régionale, nouvelle, ambiguë ou filtrée par l'anonymisation Search Console. Elle ne prouve pas que la page n'est jamais visible. Vérifier une famille de requêtes, la période et Google Trends, puis distinguer « aucune ligne visible » de zéro impression.

### Page indexée mais mauvaise intention

Une page peut être indexée pour sa marque, une formulation voisine ou une question informative, sans répondre à « logiciel métier Besançon ». Le remède est parfois une page service plus claire, parfois une meilleure architecture, pas une demande d'indexation répétée.

### Local et Business Profile

Le pack local, Maps et la fiche d'établissement ne sont pas interchangeables avec un résultat organique. Le guide répond à la question dans la FAQ mais renvoie trop tard à un autre sujet. Il faut une branche minimale : zone réellement desservie, nom/adresse/téléphone cohérents, catégorie, horaires, preuve d'activité, pages locales utiles et mesure des appels/directions. Ne jamais promettre une place dans le pack ; la distance et le contexte de recherche changent le résultat.

### Nouveau domaine et migration

Un domaine neuf n'a pas le même historique de découverte qu'une page ajoutée sur un domaine établi. Une migration peut supprimer la visibilité d'un dossier entier par une seule règle globale, une canonical ou une redirection mal mappée. Le guide doit demander la date de changement et comparer au moins une URL ancienne, une nouvelle URL, la page d'accueil et le sitemap avant toute réécriture.

### Action manuelle, sécurité et spam

Une action manuelle ou un avertissement de sécurité est un STOP de publication et de croissance : conserver la preuve, notifier le responsable technique, isoler le problème, corriger, demander un réexamen selon l'outil concerné et documenter le retour. Une chute observée autour d'une mise à jour n'est pas une preuve de pénalité et ne doit pas être décrite ainsi.

## 7. Scénarios chiffrés et seuils de décision

Les montants sont entièrement illustratifs. Ils montrent comment un dirigeant peut prioriser ; ils ne constituent ni benchmark de CTR, ni délai Google, ni prévision commerciale.

### Scénario A — nouvelle page service B2B

Hypothèses : 1 200 impressions sur 28 jours, CTR 2,5 %, donc 30 clics ; 10 % de clics deviennent des demandes attribuées, soit 3 leads ; marge contributive moyenne par vente 1 500 € et taux de transformation lead→vente 25 %.

```text
Valeur attendue = 30 × 10 % × 25 % × 1 500 € = 1 125 € de marge espérée.
```

Si la page est indexée mais tombe à 600 impressions et 1,5 % de CTR : 9 clics, 0,9 lead et 337,50 € de marge espérée. La perte illustrative est de 787,50 € sur 28 jours. Si l'inspection montre un `noindex` posé par erreur, la correction technique passe devant une refonte éditoriale. Si la page est indexée, reçoit 600 impressions et répond mal à l'intention, le sprint doit porter sur cette page et sa SERP, pas sur tout le domaine.

### Scénario B — commerce local

Hypothèses : 2 000 impressions organiques non brand sur 28 jours, CTR 3 %, 60 clics ; 8 % de clics mènent à un appel correctement attribué, soit 4,8 appels ; 30 % deviennent un rendez-vous ; marge moyenne 350 €.

```text
Valeur attendue = 60 × 8 % × 30 % × 350 € = 504 € de marge espérée.
```

Si les impressions restent à 2 000 mais la fiche locale disparaît et les appels ne sont plus mesurés, une baisse de valeur peut être réelle sans changement organique visible. Avant d'améliorer le titre, tester le numéro, les horaires, le profil local et l'attribution des appels. Si les impressions organiques chutent à 1 400 et le CTR à 2 %, la valeur illustrative tombe à 235,20 € ; le différentiel justifie une analyse locale et SERP, pas une promesse de retour.

### Scénario C — migration de domaine

Hypothèses : 80 URL utiles, 20 pages commerciales, 10 000 impressions et 400 clics sur 28 jours avant migration. Après migration : 40 URL inspectées, 12 pages commerciales indexées, 5 500 impressions et 165 clics.

```text
Impressions : -45 % ; clics : -58,75 % ; pages commerciales indexées : -40 %.
```

Ces chiffres ne prouvent pas que la migration est l'unique cause, mais la concordance temporelle et la concentration sur les anciennes URL donnent une hypothèse forte. Stop-go : pas de nouveau changement d'URL tant que l'inventaire 301, canonical, sitemap, liens internes et anciennes propriétés n'est pas comparé ; corriger une famille, tester, puis étendre.

### Seuils de méthode, non règles Google

| Signal | Niveau de méthode | Décision |
| --- | --- | --- |
| site indisponible, `noindex` global, sécurité/action manuelle, perte simultanée de pages critiques | critique | STOP contenu/publicité ; responsable technique et preuve dans l'heure |
| >20 % des pages commerciales avec même motif d'exclusion, ou >30 % de clics perdus après changement vérifiable | élevé | audit ciblé sous 24 h, correction bornée et rollback prêt |
| une à trois pages, baisse de CTR/position sans obstacle technique | ciblé | comparer SERP/intention/concurrence, une modification à la fois |
| page neuve, aucune preuve de blocage, faible demande | observation | recontrôle daté ; ne pas répéter la demande d'indexation quotidiennement |
| données contradictoires entre Search Console, Analytics et CRM | mesure | réparer instrumentation et attribution avant décision SEO |

## 8. Timeline et portes stop-go

| Horizon | Contrôles | Sortie attendue | Porte |
| --- | --- | --- | --- |
| 0–30 min | disponibilité externe, URL exacte, propriété, action manuelle/sécurité, inspection, robots/noindex, migration récente | première preuve manquante, gravité et propriétaire | STOP si indisponibilité, sécurité, action manuelle ou directive globale |
| 0–24 h | export page/requête, indexation, canonicals, sitemap, logs sur 24–72 h, rendu mobile, SERP locale/non-brand | incident documenté, hypothèse et correction réversible | GO seulement si preuve et test de réception sont nommés |
| J+7 | re-test URL live, statut indexation, impressions/clics, pages saines de contrôle, erreurs serveur, appels/formulaires | correction confirmée ou hypothèse invalidée | si aucun changement et aucune preuve de blocage, ne pas multiplier les demandes ; élargir le diagnostic |
| J+30 | tendance par familles de pages, marque/non-brand, pays/appareil, local/organique, conversion et marge | maintien, sprint éditorial/technique, audit spécialisé ou abandon | arrêter une action si elle ne touche pas le symptôme mesuré |
| J+90 | récupération durable, saison, concurrents, dette de migration, coût et valeur commerciale | réarchitecture, consolidation, maintenance ou décision d'arrêt | aucun résultat ne doit être attribué à Google sans contrôle contradictoire |

### Règle de rollback

Toute correction à risque (canonical, robots, templates, redirections, chargement JS, données structurées ou changement de domaine) doit avoir : sauvegarde/commit identifié, liste d'URL touchées, test avant/après, responsable, fenêtre de surveillance et moyen de retour arrière. Une correction qui dégrade les pages saines est annulée avant d'être étendue.

### Priorisation

```text
Priorité = valeur commerciale (1–5) × étendue du symptôme (1–5) × force de la preuve (1–5) ÷ effort/risque (1–5).
```

Le score sert à ordonner les travaux. Il ne transforme pas une hypothèse en causalité et ne remplace pas un test. Une URL service à forte marge avec un `noindex` confirmé peut passer avant vingt articles à faible valeur ; une page sans demande et sans preuve de blocage ne doit pas recevoir un chantier d'urgence.

## 9. Contrat de réécriture proposé

La prochaine version devrait garder le ton actuel mais suivre cette structure courte :

1. réponse directe en 120–150 mots : cinq sens de « visible » et ce qu'il faut faire dans l'heure ;  
2. arbre URL → crawl → index → impression → clic → demande ;  
3. fiche d'identité de la recherche (URL, requête, pays, appareil, marque/non-brand, local) ;  
4. inspection d'URL et rapport d'indexation avec champs recopiables ;  
5. checklist HTTP, DNS, robots, noindex, canonical, sitemap, rendu JS et logs ;  
6. branches nouveau domaine, migration, local/Business Profile, action manuelle/sécurité ;  
7. branche indexé mais hors intention, SERP et concurrence ;  
8. scénarios B2B, local et migration avec marge et conversion ;  
9. timeline 0–24 h/J+7/J+30/J+90, seuils et rollback ;  
10. fiche téléchargeable, livrable d'audit, limites et CTA.

### Proposition d'introduction humaine

> Vous cherchez le nom de votre activité et vous ne voyez pas votre site. Avant de publier dix articles ou de refaire toutes vos pages, il faut savoir ce que « ne pas apparaître » veut dire. Google connaît peut-être votre domaine mais pas cette URL ; il a peut-être indexé la page mais pas pour la recherche que vous tapez ; votre fiche locale peut être absente alors que la page organique existe ; ou les clics arrivent sans être reliés aux demandes. Dans ce guide, vous allez suivre une URL et une recherche précises, ouvrir les bons rapports, vérifier les blocages techniques, puis choisir entre corriger, mesurer, attendre ou demander un audit. Une place dans Google, un délai d'indexation et un client ne peuvent pas être promis honnêtement.

Cette introduction conserve la prudence du texte actuel tout en nommant les situations dans lesquelles le dirigeant se reconnaît. Elle doit précéder la terminologie « découverte », « exploration » et « canonique ».

## 10. Contre-audit après correction

Ce tableau décrit les corrections attendues ; aucune n'a été appliquée dans cette mission.

| ID | Problème | Priorité | Correction attendue | Revalidation indépendante |
| --- | --- | --- | --- | --- |
| P0-01 | Aucun risque critique ou promesse de classement repéré | P0 | aucune | relecture Google et juridique avant publication |
| P1-01 | « Invisible » n'est pas résumé en cinq états décisionnels | P1 | matrice en tête : inconnu/crawl/index/impression/ranking/conversion | test avec six questions utilisateur |
| P1-02 | Arbre technique HTTP/DNS/TLS/WAF/robots/noindex/canonical trop dispersé | P1 | checklist et ordre de preuve | simulation d'incident global et URL isolée |
| P1-03 | URL Inspection : champs à copier, index/live et canonicals pas assez opérationnels | P1 | fiche de copie avec exemple et interprétation | contrôle sur URL connue, doublon et non-indexée |
| P1-04 | Logs serveur/CDN et Googlebot non traités | P1 | méthode minimale timestamp/statut/URL/user-agent validé | échantillon 24–72 h et rapprochement GSC |
| P1-05 | Rendu JavaScript, liens et mobile-first absents | P1 | HTML initial/DOM rendu/ressources/erreurs et test mobile | inspection du rendu réel |
| P1-06 | Nouveau domaine et migration non scénarisés | P1 | inventaire, 301, sitemap, canonical, propriétés et rollback | exercice sur dix anciennes URL |
| P1-07 | Local/Business Profile seulement exclu dans une FAQ | P1 | branche minimale locale, appels, zone et limite Maps/organique | test de requête localisée |
| P1-08 | Action manuelle, sécurité, spam et mise à jour sans stop-go explicite | P1 | STOP, conservation des preuves, responsable, réexamen | test de décision urgente |
| P1-09 | Requête sans impression et page indexée hors intention peu séparées | P1 | branche demande/SERP/concurrence/position | trois recherches brand/non-brand/local |
| P1-10 | Conversion et valeur commerciale non chiffrées | P1 | scénarios leads/appels/ventes/marge et attribution | recalcul indépendant |
| P1-11 | Seuils, timeline et rollback non visibles | P1 | 0–24 h/J+7/J+30/J+90 et portes | simulation avec responsable et date |
| P1-12 | CTA sans livrable, données nécessaires ni délai borné | P1 | fiche d'audit, périmètre, réception et limites | test de conversion avec dirigeant |
| P2-01 | Benchmark Google/Bing et international non visible dans le guide | P2 | sources et distinction primaire/outil tiers | contrôle des liens |
| P2-02 | Ressource téléchargeable absente | P2 | fiche URL–requête + arbre de preuve | téléchargement/print |
| P2-03 | `readTimeMin: 14` à recalculer après enrichissement | P2 | recalcul registry et texte | lecture mobile chronométrée |
| P2-04 | Metadata, Article, Breadcrumb, FAQ et OG non validés publiquement | P2 | crawler et navigateur en production | inspection source/JSON-LD |
| P2-05 | Tableaux et outil local non audités à 320–1440 px | P2 | QA responsive, clavier, impression et erreurs | captures réelles |
| P2-06 | Analytics, consentement, téléphone et CRM trop peu détaillés | P2 | test de parcours attribuable | lead de test de bout en bout |
| P2-07 | Hreflang, langues, sous-domaines et domaine international non évoqués | P2 | encadré pour activité multirégionale | contrôle d'une URL localisée |
| P2-08 | SERP features, AI/local/product et concurrents peu expliqués | P2 | captures et limites par type de résultat | revue 3–5 SERP |
| P2-09 | Maillage vers maintenance, refonte et SEO local à hiérarchiser | P2 | ancres par cause et étape | test de parcours interne |
| P2-10 | Fraîcheur des sources et date du diagnostic non automatisées | P2 | date consultée, propriétaire, revalidation | contrôle trimestriel |

### Portes explicites

```text
P1 — PRÉSENTE MAIS INCOMPLÈTE : NO-GO tant que P1-01 à P1-12 ne sont pas fermés et testés.
P2 — À CORRIGER : ressource, preuve multi-moteur, local, rendu, conversion et QA restent requis.
P3 — REJETÉE / NON VALIDÉE : aucun compte Search Console/Bing/Analytics, log, crawl, rendu, SERP, fiche Business Profile ou CRM réel n'est prouvé dans cet audit.
P4 — REJETÉE / NON VALIDÉE : aucune indexation, position, trafic, conversion, récupération ou attribution à une cause n'est déclarée.
```

### Score cible après correction

| Axe | Cible /10 | Condition de passage |
| --- | ---: | --- |
| Intention | 10 | le dirigeant identifie son état en moins d'une minute |
| Décision | 10 | seuils, responsables, stop-go, rollback et horizons |
| Pédagogie | 10 | chaque terme est relié à une preuve et à un exemple |
| Profondeur | 10 | technique, rendu, migration, local, contenu, liens, mesure |
| Preuve | 10 | Google/Bing/Analytics et logs avec limites explicites |
| Comparaison | 9 | marque/non-brand, pays, appareil, moteur, SERP, concurrents |
| Chiffrage | 9 | trafic, leads, ventes, marge et effort illustratifs |
| Style | 10 | humain, clair, court au début, détaillé ensuite |
| Conversion | 9 | audit borné avec livrable et données demandées |
| SEO/produit | 9 | schema, metadata, ressource, maillage et QA réelle |

Total cible : **96/100**. Cette cible mesure la qualité du guide et du diagnostic, pas une garantie de présence dans Google.

## 11. Preuves techniques et visuelles

```text
Manifeste : src/app/guides/pourquoi-site-pas-visible-google/page.tsx ; entrée src/lib/guides.ts.
Constats source : metadata OG/Twitter explicites, canonical helper, Article/Breadcrumb JSON-LD, 4 FAQ, 8 entrées TOC, outil SearchVisibilityDiagnostic, six preuves, quatre fiches fictives, tables, CTA et maillage.
Composant vérifié : SearchVisibilityDiagnostic conserve les champs en état client, ne contacte pas Search Console, copie via le presse-papiers et réinitialise l'état ; aucune persistance serveur observée.
Registre : datePublished/dateModified 2026-07-22, readTimeMin 14 ; aucun registre modifié.
Sources rouvertes : Search Console, URL Inspection, indexation, robots, JavaScript, sitemaps, site:, SEO Starter Guide, Business Profile, dashboard Google ; Bing Guidelines/sitemap ; benchmarks US/UK/AU/DACH.
Liens vérifiés : URLs directes enregistrées le 24/07/2026 ; les aides Google/Bing et la disponibilité du tableau de bord doivent être rouvertes avant réécriture.
Calculs refaits : 29/112 = 25,9 %, 1/54 = 1,9 % dans l'exemple existant ; scénarios B2B/local/migration illustratifs ajoutés au rapport.
Commandes : inspection lecture seule par sed/rg ; aucun compte Search Console/Analytics/Bing, log, crawl, build ou déploiement utilisé.
Rendu 320 / 390 / 768 / 1024 / 1440 : non exécuté ; outil, tables, CTA et impression restent P2/P3.
Metadata/JSON-LD : présence statique observée ; canonical publique, Article, Breadcrumb, FAQ et OG non validés en ligne.
Statut maximal prouvé : audit local, analyse du composant et benchmark documenté.
Réserve publication : aucune visibilité, indexation, position, conversion, attribution ou correction réelle ne peut être déclarée.
```

## Conclusion opérationnelle

Ce guide possède une excellente intuition éditoriale : commencer par une page et une requête, parler comme un humain, protéger les accès et chercher la première preuve manquante. La faiblesse n'est pas un manque de bonnes intentions ; c'est l'absence d'un arbre de crise complet qui relie l'état technique, la demande, la SERP locale, le rendement commercial et la décision de projet.

La réécriture prioritaire doit donc garder le texte actuel mais lui ajouter un résumé décisionnel, une checklist technique, les branches nouveau domaine/migration/local/JavaScript/sécurité, des preuves de logs, des scénarios de marge et une timeline avec rollback. La règle professionnelle reste nette : **corriger ce qui est prouvé, mesurer ce qui est ambigu, attendre avec une date et ne jamais appeler une absence personnelle dans Google une pénalité sans preuve**.
