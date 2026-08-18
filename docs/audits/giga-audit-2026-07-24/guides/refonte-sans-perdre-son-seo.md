# Audit approfondi — `refonte-sans-perdre-son-seo`

Date : 24 juillet 2026  
Auditeur : audit éditorial, migration SEO, produit et QA en lecture seule  
Snapshot : `src/app/guides/refonte-sans-perdre-son-seo/page.tsx`, SHA-256 `d27eb4a2f3d73779e37945b7662283fa040e10557cf2cff6bee0c948afa9bfe5` ; image sociale SHA-256 `0c2f5d061f2c973e13e3acfb235bb3153300ea46fb199fb20f6cc058fd6780b0` ; entrée du registre publiée le 18 juillet 2026 et modifiée le 21 juillet 2026.

## 1. Verdict exécutif

```text
Lecteur exact : dirigeant de TPE/PME, responsable marketing ou propriétaire d'un site qui veut changer son design, son CMS, ses URLs ou son domaine sans casser les pages qui produisent déjà des visites, des prospects ou des ventes.
Question réelle : « Comment savoir ce qui rapporte aujourd'hui, le protéger pendant la refonte et réagir rapidement si le trafic ou les conversions baissent ? »
Décision attendue : choisir un périmètre de refonte, obtenir un plan de migration traçable et autoriser la mise en ligne uniquement lorsque les contrôles et le retour arrière sont prêts.
Réponse actuelle en une phrase : le guide couvre correctement inventaire, redirections 301, staging, lancement et suivi, mais il promet surtout une méthode de précaution ; il ne fournit pas encore un protocole mesurable avec seuils, responsabilités, indicateurs de conversion, logs, hreflang, données structurées et go/no-go.
Défaut qui coûte le plus de valeur : l'expression « sans perdre son SEO » reste trop absolue dans le titre et la promesse ; même une migration bien exécutée peut connaître des fluctuations. Le lecteur doit comprendre ce qui est contrôlable, ce qui est seulement surveillable et quand suspendre ou annuler la bascule.
Niveau actuel : B (pédagogique et prudent, mais incomplet comme plan de migration professionnel).
Priorité : haute.
Statut : audité ; aucune page, aucun registre ni fichier Git modifié.
```

### Score avant correction

| Axe | Note /10 | Preuve localisable | Manque décisif |
| --- | ---: | --- | --- |
| Intention | 9 | introduction centrée sur pages qui apportent appels, devis et ventes | titre « sans perdre » à nuancer par risque et indicateurs |
| Décision | 7 | cinq règles, étapes et clauses de devis | pas de matrice go/no-go ni seuil de décision |
| Pédagogie | 8 | inventaire, 301, noindex, staging et suivi expliqués sans jargon | mapping, canonicals, hreflang et logs restent peu illustrés |
| Profondeur | 7 | URLs, contenu, robots, sitemap, Search Console, retours | Analytics/conversions, JS, données structurées, CDN/DNS, sécurité et rollback incomplets |
| Preuve | 8 | plusieurs liens officiels Google et web.dev | certains chiffres de cas éditeur et affirmations doivent être bornés |
| Comparaison | 7 | changement d'URL, plateforme, domaine et technologie | pas de scénario 100 pages/10 000 pages, boutique ou multilingue |
| Originalité | 8 | séparation des changements, plan page par page, surveillance 1/7/30/90 | pas de feuille de migration ni score de risque propriétaire |
| Style | 8 | ton humain, exemples d'URL, limites sur les garanties | certains raccourcis peuvent faire croire que 301 = transfert assuré |
| Conversion | 7 | CTA promettant inventaire et plan de redirection | livrable, délai, prérequis et limites de l'audit non explicités |
| SEO/produit | 8 | Article/Breadcrumb/FAQ JSON-LD, image sociale, maillage interne | `readTimeMin`, rendu OG, liens et responsive non testés ici |

Total : **77/100**.

La base est plus robuste que beaucoup de guides de migration : elle dit de ne pas tout changer en même temps et recommande une destination pertinente pour chaque ancienne URL. Elle n'est pas encore une procédure de production. En crise, un dirigeant a besoin d'un tableau avec l'URL, le statut HTTP, la canonical, le propriétaire, la conversion, le test et l'action ; le guide lui dit de faire l'inventaire, mais ne lui donne pas encore ce tableau.

## 2. Ce que le guide dit réellement

### Progression observée

Le guide démarre avec une réponse humaine et juste : une refonte n'entraîne pas automatiquement une perte de visibilité ; le risque vient surtout des pages supprimées, des adresses modifiées sans renvoi, des contenus oubliés ou du blocage de l'exploration.

La progression est ensuite :

1. classer le risque selon design, URLs, plateforme ou domaine ;
2. inventorier les pages et données qui comptent ;
3. mapper chaque ancienne adresse vers une nouvelle destination ;
4. protéger le site de test et retirer le `noindex` avant publication ;
5. tester le lancement, le sitemap, les formulaires et la mesure ;
6. surveiller lendemain, semaine, mois et trois mois ;
7. diagnostiquer une chute de trafic ;
8. distinguer changement de domaine et changement de technologie ;
9. demander les livrables dans le devis ;
10. résumer la méthode en cinq verbes : inventorier, décider, préparer, contrôler, surveiller.

Cette architecture est saine pour un dirigeant. Elle a toutefois deux angles morts : le **baseline** quantifié avant la refonte (clics, impressions, leads, chiffre d'affaires, taux de conversion, performance, crawl) et la **preuve de parité** avant bascule (URL, contenu, liens, données structurées, canonicals, hreflang, tracking et rendu JavaScript).

### Ce qui paraît complet sans encore l'être

- « Inventorier les adresses » ne dit pas quelles sources croiser : sitemap, Search Console, analytics, logs serveur, backlinks, bases produits et CMS. Une URL qui n'apparaît plus dans Google peut rester essentielle pour un partenaire ou une campagne.
- « Chaque ancienne page doit conduire vers son équivalent » est une bonne règle pour les pages utiles, mais certaines URL doivent légitimement retourner 410/404 ou être fusionnées. Il faut documenter la décision, pas forcer une 301 partout.
- Une 301 est un signal de déménagement ; elle ne transfère pas automatiquement pertinence, contenu, conversions ou backlinks si la nouvelle page n'est pas équivalente.
- Le staging protégé par mot de passe et `noindex` est cité, mais il manque l'authentification, l'allowlist, la suppression du `noindex` au bon moment et le contrôle d'absence de liens publics vers l'environnement de test.
- Les canonicals sont mentionnées dans les sources, mais pas dans la checklist visible. Une canonical pointant vers l'ancien domaine ou le staging peut neutraliser une migration correcte.
- Le guide demande de comparer contenus et données structurées, sans expliquer comment tester le HTML rendu lorsque le nouveau site dépend fortement de JavaScript. Google précise que le rendu JavaScript existe mais que le SSR/prérendu reste utile pour les utilisateurs et certains robots.
- Le suivi 1/7/30/90 jours est qualitatif. Aucun indicateur, seuil, segment (brand/non-brand, device, pays, répertoire, conversion) ni propriétaire n'est défini.
- Les formulaires et achats sont cités, mais le plan ne distingue pas une baisse SEO d'une rupture de tracking, d'un consentement mal configuré, d'un événement GA4 en double ou d'un CRM non alimenté.
- Le DNS et le CDN sont quasi absents : TTL, certificats, cache, headers, WAF, redirections au bord du réseau et fenêtre de bascule peuvent changer le résultat sans modifier une ligne de contenu.
- Le multilingue est implicitement couvert par les liens, mais le `hreflang`, les canonicals par langue et les sitemaps alternatifs ne sont pas traités.
- Le changement de domaine est déconseillé en même temps que la refonte, à juste titre, mais aucune séquence de migration progressive ni règle d'acceptation n'est proposée lorsqu'il est obligatoire.
- Le CTA parle d'inventaire et de plan de redirection, sans dire si le livrable inclut un crawl, un baseline analytics, un rapport des conversions, des tests en staging ou le suivi post-lancement.

## 3. Benchmark France et international

Recherche effectuée le 24 juillet 2026 sur des ressources françaises, américaines, britanniques, australiennes et germanophones. Une page d'agence est une source primaire pour sa propre méthode ou son propre cas, jamais une preuve de moyenne de marché. Les recommandations techniques et les obligations sont appuyées par Google, Bing, CNIL et les documentations opérateurs.

| Ressource et URL directe | Zone | Réponse utile | Preuve / méthode | Limite | Apport à adapter |
| --- | --- | --- | --- | --- | --- |
| [Google Search Central — Site moves](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes) | international | préparation, mapping, 301, tests, Search Console, sitemap, suivi ; conserver les redirections au moins un an | documentation officielle détaillée | pas de seuil de trafic ou de conversion | en faire le squelette de la checklist |
| [Google — site move sans changement d'URL](https://developers.google.com/search/docs/crawling-indexing/site-move-no-url-changes) | international | même domaine/URLs ne supprime pas les risques de contenu, rendu et infrastructure | source officielle | changement de page et migration technique restent à analyser | distinguer migration de contenu et migration d'infrastructure |
| [Google — 301/308](https://developers.google.com/search/docs/crawling-indexing/301-redirects) | international | redirection permanente comme signal de canonicalité | documentation officielle | signal ≠ garantie de classement | éviter la formule « transfert de SEO » |
| [Google — JavaScript SEO](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics) | international | Google rend JavaScript, SSR/prérendu utile et tous les robots ne le font pas | documentation officielle | ne donne pas une recette de framework | ajouter HTML rendu et test bot |
| [Google — données structurées en JavaScript](https://developers.google.com/search/docs/appearance/structured-data/generate-structured-data-with-javascript) | international | JSON-LD peut être généré, mais le rendu doit être accessible | documentation officielle | éligibilité aux résultats enrichis séparée | valider le JSON-LD après migration |
| [Bing Webmaster Guidelines](https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a) | international | URLs canoniques, sitemaps à jour, liens crawlables, IndexNow, pas de visibilité garantie | documentation officielle Bing | ne remplace pas Search Console | ajouter Bing Webmaster Tools et IndexNow si pertinent |
| [Bing — Website Migration](https://blogs.bing.com/webmaster/december-2020/Website-Migration-with-Bing) | international | logs critiques, suivi quotidien pendant au moins trois mois, inspection des signaux | billet officiel Bing | publié en 2020, à relire pour détails actuels | introduire logs et monitoring 90 jours |
| [Bing Site Explorer](https://www.bing.com/webmasters/help/site-explorer-c680da37) | international | repère redirects, crawl issues, robots et URLs canoniques | outil officiel | accès à vérifier par le propriétaire | ajouter au plan de contrôle multi-moteur |
| [Google Analytics — Google tag](https://support.google.com/analytics/answer/11994839?hl=en-EN) | international | balise site-wide, événements et destinations à vérifier après migration | documentation officielle | implémentation dépend du CMS/consentement | baseline et tests de conversion obligatoires |
| [Google Analytics — dépannage des tags](https://support.google.com/analytics/answer/9311124?hl=en) | international | absence, mauvaise installation ou données non traitées créent de faux écarts | support officiel | diagnostics liés à GA4 | isoler trafic réel et mesure cassée |
| [CNIL — cookies et traceurs](https://cnil.fr/fr/cookies-et-autres-traceurs/regles/cookies/comment-mettre-mon-site-web-en-conformite) | France | consentement préalable sauf exemption, retrait possible | source institutionnelle | dépend des traceurs et du traitement | placer le contrôle consentement avant go-live |
| [Cloudflare — TTL DNS](https://developers.cloudflare.com/dns/manage-dns-records/reference/ttl/) | international | TTL contrôle le cache et le délai de prise en compte des changements | documentation opérateur primaire | caches locaux et registrar peuvent varier | prévoir fenêtre et retour arrière DNS/CDN |
| [Vercel — migration Personio](https://vercel.com/blog/from-wordpress-monolith-to-vercel-personio-elevates-site-performance) | US / cas éditeur | exemple de migration WordPress vers architecture moderne et gains annoncés | cas publié par le fournisseur | contexte, métriques et causalité propres à Personio | garder comme cas, jamais comme promesse |
| [web.dev — Renault](https://web.dev/case-studies/renault) | France / cas Google | relation annoncée entre performance et conversion dans un contexte donné | cas publié, périmètre indiqué | ne garantit pas le résultat d'un autre site | tester Core Web Vitals et conversions sans extrapoler |
| [ROAR migration resource](https://roardigitalmarketing.co.uk/wp-content/uploads/2025/11/ROAR-SEO-Migration-Resource.pdf) | Royaume-Uni | checklist canonicals, sitemaps, Search Console/Bing et monitoring | ressource d'agence UK | source non institutionnelle | vérifier qu'aucune étape canonique ne manque |
| [Bord Bia Website Project Fundamentals](https://www.bordbia.ie/globalassets/bordbia2020/industry/think-digital/guidebooks/website-project-fundamentals---considerations-for-developing-and-improving-guidebook.pdf) | Europe / PME | gouvernance de projet, contenu, tests et responsabilité client | organisme public irlandais | édition 2022 et non focalisée SEO | renforcer gouvernance, recette et validation |
| [Adobe Commerce — guide d'implémentation](https://business.adobe.com/content/dam/dx/us/en/resources/sdk/getting-started-with-adobe-commerce/getting-started-with-adobe-commerce-sw.pdf) | US / e-commerce | les implémentations complexes nécessitent roadmap, phases et chevauchement | documentation éditeur | contexte enterprise | ajouter scénario catalogue/intégrations |
| [WordPress documentation — export](https://wordpress.org/documentation/article/tools-export-screen/) | international | exporter contenus avant migration | documentation officielle WordPress | export XML ne remplace pas médias/configuration | ajouter sauvegarde, médias, utilisateurs et réglages |

### Saturation et enseignements

Les concurrents répètent presque tous « crawl, mapping, 301, sitemap, monitor ». La différence de qualité ne vient donc pas d'une nouvelle liste de tâches, mais de la preuve : avant/après quantifié, URL par URL, conversion par conversion, et procédure de réaction. Le benchmark apporte cinq gains réels : logs sur 90 jours, mesure de conversions, JavaScript rendu, Bing/IndexNow, et DNS/CDN.

## 4. Matrice de gain d'information

| Question décisive | Meilleure réponse française | Apport international | Couverture actuelle | Manque | Réponse supérieure à produire |
| --- | --- | --- | --- | --- | --- |
| Quelles pages dois-je protéger ? | pages avec visites, requêtes, conversions et liens | Google demande de croiser sitemap, logs, Search Console et analytics | partielle | aucune matrice d'importance | score par URL : trafic, conversion, lien, marge, risque |
| Dois-je conserver l'URL ? | oui si possible, 301 si changement pertinent | Google distingue moves avec/sans changement d'URL | bonne | pas de décision 200/301/410/404 | arbre d'acceptation par URL |
| Une 301 suffit-elle ? | non, destination pertinente nécessaire | Google et Bing traitent redirect/canonical/sitemap séparément | partielle | canonical, chaîne, contenu et tests | fiche de validation de destination |
| Que faire des URLs supprimées ? | évaluer suppression ou maintien | Bing demande sitemap canonique et mise à jour des URLs supprimées | faible | 410/404, backlink et remplacement | règle de décision documentée |
| Le staging est-il sûr ? | mot de passe + noindex, retrait à la mise en ligne | Google JS et Bing soulignent rendu/exploration | partielle | robots, auth, liens, canonical et indexation accidentelle | checklist préproduction |
| Comment savoir si le trafic a baissé ? | comparer avant/après | Google/Bing recommandent Search Console, Site Explorer et logs | faible | baseline, segments et saisonnalité | tableau d'indicateurs 1/7/30/90 |
| La conversion a-t-elle baissé ? | vérifier formulaires, achats et mesure | Google Analytics rappelle qu'un tag absent/cassé fausse les données | faible | événements, consentement, CRM, doublons | test de conversion de bout en bout |
| Le nouveau JavaScript est-il visible ? | comparer rendu et données structurées | Google recommande SSR/prérendu et test du rendu | faible | HTML final, hydration, links, no-JS | test crawler + navigateur |
| Que faire en multilingue ? | non traité explicitement | canonicals/sitemaps/hreflang sont signaux séparés | faible | matrice langue/URL | recette hreflang et alternates |
| Quand revenir en arrière ? | sauvegarde et procédure citées | Google recommande préparer/tester avant move | faible | seuils, propriétaire et durée du rollback | go/no-go et runbook signé |
| Combien de temps surveiller ? | lendemain, semaine, mois, trois mois | Bing blog recommande logs quotidiens au moins trois mois | partielle | indicateurs et seuils | monitoring 1/7/30/90 et décision par niveau |

## 5. Faits et fraîcheur

| Affirmation du guide | Verdict | Source primaire actuelle | Périmètre et date | Correction |
| --- | --- | --- | --- | --- |
| Une refonte ne fait pas automatiquement perdre la visibilité | confirmé mais à nuancer | Google distingue les facteurs de migration et recommande préparation/tests | général | écrire « une bonne préparation réduit le risque, sans garantir la stabilité » |
| Google recommande de garder les redirections au moins un an | confirmé | [Google Site Moves](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes) | migration avec changement d'URL | conserver, ajouter « aussi longtemps que possible » et dépendance au trafic |
| Une 301 est un renvoi permanent et un signal fort | confirmé en principe | [Google redirects](https://developers.google.com/search/docs/crawling-indexing/301-redirects) | HTTP et URL | préciser qu'elle ne garantit ni classement ni conversion |
| Rediriger tout vers l'accueil est une mauvaise pratique | confirmé dans les recommandations de migration | Google déconseille destination non pertinente et redirections en chaîne | URL par URL | conserver et ajouter exemples 200/410 |
| Un changement de domaine doit idéalement être séparé de la refonte | recommandation de réduction de risque, pas obligation | Google conseille de changer une chose à la fois dans ses migrations | projet réel | conserver comme conseil de diagnostic |
| Changement d'adresse Search Console réservé au domaine | confirmé | [outil Google Change of Address](https://support.google.com/webmasters/answer/9370220) | domaine, pas simple redesign | conserver et dater la source |
| Le site moyen peut prendre quelques semaines à être retraité | confirmé comme ordre Google, pas délai contractuel | Google Site Moves | taille/site/serveur variables | ajouter « aucune date garantie » |
| JavaScript est rendu par Google, mais pas par tous les bots | confirmé | [Google JavaScript SEO](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics) | rendu Google et autres robots | ajouter test HTML rendu et no-JS critique |
| Bing exige des URLs canoniques dans les sitemaps | confirmé | [Bing Webmaster Guidelines](https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a) | Bing/Copilot | ajouter au contrôle sitemap |
| Les logs doivent être surveillés quotidiennement au moins trois mois | recommandation du billet Bing, pas loi | [Bing migration blog](https://blogs.bing.com/webmaster/december-2020/Website-Migration-with-Bing) | grandes migrations surtout | présenter comme niveau prudent, pas obligation universelle |
| Consentement préalable pour certains traceurs | confirmé avec exemptions | [CNIL](https://cnil.fr/fr/cookies-et-autres-traceurs/regles/cookies/comment-mettre-mon-site-web-en-conformite) | France, traceur par traceur | ajouter responsable et test du retrait |
| TTL influence le délai DNS | confirmé | [Cloudflare TTL](https://developers.cloudflare.com/dns/manage-dns-records/reference/ttl/) | DNS Cloudflare et caches | ne pas promettre une propagation uniforme |
| Cas Renault : +13 % conversions avec 1 s LCP | cas publié, non général | [web.dev Renault](https://web.dev/case-studies/renault) | contexte Renault | garder seulement avec attribution et avertissement |
| Cas Personio : migration WordPress → Vercel améliorée | cas éditeur à vérifier | [Vercel Personio](https://vercel.com/blog/from-wordpress-monolith-to-vercel-personio-elevates-site-performance) | contexte et métriques du cas | ne pas extrapoler à Hagnéré Code ou au client |

### Contradictions ou risques de lecture

- Le titre et les cinq règles peuvent être compris comme une promesse d'absence de baisse, alors que la note finale reconnaît les fluctuations. Le titre devrait porter « réduire le risque » ou « protéger ses pages utiles ».
- « Chaque ancienne page doit conduire vers son équivalente » est pédagogiquement simple mais techniquement trop absolu : une page obsolète peut être supprimée ou renvoyer vers une ressource réellement pertinente.
- « La technologie seule ne garantit aucun résultat » est juste, mais la section ne donne pas de protocole pour vérifier le HTML rendu, les liens générés en JavaScript ou les données structurées côté serveur.
- Le suivi 1/7/30/90 est utile mais sans métrique. Un dirigeant peut attendre « quelques semaines » pendant qu'un formulaire ou un `noindex` généralisé casse les conversions.
- Le guide recommande de demander le sitemap, sans préciser que Google et Bing attendent des URLs canoniques, indexables et actuelles ; les anciennes URLs redirigées ne doivent pas rester dans le sitemap final.

### Faits à retirer plutôt qu'à affaiblir

- toute promesse implicite de « ne pas perdre » trafic, positions, conversions ou backlinks ;
- toute phrase où une 301 est présentée comme un transfert automatique de valeur ;
- tout chiffre de cas client utilisé comme prévision ;
- tout seuil de baisse universel inventé. Les seuils doivent dépendre de pages, période, saison, conversions et preuve de mesure.

## 6. Scénarios et indicateurs à construire

Les scénarios ne promettent aucun maintien de trafic. Ils définissent un protocole qui rend la migration observable et réversible.

### Scénario A — petite vitrine, mêmes URLs

Hypothèses : 40 URLs, 8 pages générant 80 % des leads, design modernisé, CMS changé mais domaine et URLs conservés, une langue, aucune suppression.

| Étape | Semaine | Responsable | Porte de sortie |
| --- | --- | --- | --- |
| baseline | S-4 | prestataire + client | export Search Console/analytics, crawl, logs 30 jours, objectifs et pages prioritaires |
| parité contenu/SEO | S-3 | prestataire | titres, textes, links, canonicals, schema, robots comparés |
| staging | S-2 | prestataire | auth/noindex, test mobile/desktop, formulaires et tracking |
| recette métier | S-1 | client | 8 pages, formulaire, consentement, accessibilité, conversion passants |
| bascule | J0 | responsable nommé | sauvegarde, DNS/CDN, sitemap, heure et rollback consignés |
| suivi | J+1/J+7/J+30/J+90 | partagé | impressions, clics, leads, erreurs, logs et décisions |

### Scénario B — boutique, changement de structure

Hypothèses : 1 200 URLs produit/catégorie, 150 pages actives, 40 % des URLs changent, paiements et flux Merchant Center, quatre langues.

| Étape | Sortie obligatoire |
| --- | --- |
| inventaire croisé CMS + sitemap + Search Console + analytics + logs + backlinks | fichier exhaustif avec statut, trafic, conversion, marge et propriétaire |
| mapping | 301 1:1 pour pages équivalentes ; 410/404 documentées pour pages sans destination ; règles de paramètres |
| parité e-commerce | produit, prix, stock, panier, paiement, livraison, emails, données structurées et flux testés |
| international | canonical/hreflang/langue/sitemap par marché vérifiés |
| mesure | page view, add-to-cart, checkout, purchase, valeur, CRM et consentement testés sans doublons |
| lancement | fenêtre hors pic, anciennes redirections actives, sitemap nouveau, monitoring logs/erreurs |

### Scénario C — refonte + changement de domaine + Next.js

Hypothèses : 5 000 URLs, changement de domaine obligatoire, nouvelle architecture, contenu réécrit partiellement, campagnes Ads et liens partenaires.

Position prudente : séparer les variables lorsque possible. D'abord stabiliser le nouveau contenu/architecture sur le domaine actuel, puis changer de domaine ; si le calendrier impose une opération unique, augmenter la marge, conserver l'ancien domaine, tester les redirections et préparer une procédure de retour. Google recommande de mapper les URLs, tester, rediriger et surveiller ; Bing recommande en plus l'observation des logs et des signaux de crawl.

### Indicateurs et fenêtres

| Fenêtre | Technique | SEO | Business | Décision |
| --- | --- | --- | --- | --- |
| Avant J0 | codes HTTP, robots, canonicals, sitemap, logs, CWV, rendu | clics/impressions/positions par URL et requête, indexation | leads, achats, valeur, taux de conversion | baseline signée |
| J+1 | 5xx/4xx, loops, noindex, TLS, DNS, CDN, formulaires | anciennes URL et nouvelles URL prioritaires | test lead/achat réel ou contrôlé | rollback si bloqueur général |
| J+7 | crawl budget apparent, JS, canonical, sitemap | pages disparues, requêtes brand/non-brand, device/pays | conversion et qualité des leads | corriger causes probables |
| J+30 | erreurs persistantes, performance, logs bot | réindexation, redirections encore appelées, contenus | marge, ventes, coût acquisition | audit d'écarts |
| J+90 | dette de redirections, disponibilité, dette technique | tendances par répertoire/langue, Bing/Google | valeur cumulée, ROI, demandes | maintenir, corriger ou planifier V2 |

### Sensibilités à afficher

| Variation | Conséquence possible | Réponse professionnelle |
| --- | --- | --- |
| 10 % des URL prioritaires non mappées | pages 404, perte de signaux et liens internes | bloquer la bascule ou corriger avant ouverture |
| canonical de staging sur 5 % des pages | indexation retardée ou mauvais signal | contrôle HTML/crawl avant go-live |
| tracking absent après migration | conversions artificiellement en baisse | tester Tag Assistant/GA4/CRM avant d'interpréter le SEO |
| migration en période de pic | coût d'une anomalie plus élevé | fenêtre basse, équipe disponible, rollback |
| JavaScript non rendu sur parcours critique | contenu/liens invisibles à certains robots ou utilisateurs | SSR/prérendu et test du HTML final |
| 301 en chaîne | latence, crawl et destination finale incertains | redirection directe, test exhaustif |

## 7. Comparaison et position professionnelle

```text
Option la moins risquée : conserver domaine et URLs, refondre par lots, comparer avant/après et lancer avec un rollback prêt.
Option la plus rapide : changer peu de variables, garder les contenus et URLs utiles, limiter la V1 ; ce n'est pas forcément la meilleure refonte.
Option la plus transparente : audit préalable séparé, mapping livré dans un tableur, recette signée et suivi 1/7/30/90 inclus au devis.
Position Hagnéré Code : vendre la réduction mesurable du risque, jamais l'absence de baisse. Une refonte est réussie si le site reste exploitable, les pages importantes sont traçables, les conversions sont mesurées et les écarts sont corrigés avec une responsabilité claire.
Ce que nous déconseillons même si nous pourrions le vendre : supprimer l'ancien site avant validation des 301, changer domaine/CMS/architecture/contenu simultanément sans baseline, ou annoncer une « garantie SEO ».
```

## 8. Objections et cas limites

| Objection loyale | Réponse prouvée | Ce qui reste incertain | Conséquence |
| --- | --- | --- | --- |
| « Les URLs ne changent pas, donc aucun risque. » | le contenu, rendu, canonical, robots, tracking et performance peuvent changer | ampleur du redesign | tester la parité, pas seulement les statuts |
| « Nous redirigerons tout vers l'accueil. » | Google déconseille les destinations non pertinentes | cas d'URL sans équivalent | décider 301 pertinente, 410/404 ou maintien |
| « La 301 transmet tout. » | elle est un signal de déménagement, pas une garantie de pertinence ou de classement | contenu et signaux externes | recréer l'intention et vérifier la destination |
| « Le staging est noindex, donc il est invisible. » | noindex/robots/canonical peuvent être mal copiés ou contournés | authentification et liens | password + noindex + test avant/après |
| « Le trafic a baissé, le SEO est cassé. » | analytics, consentement ou événements peuvent être cassés | qualité de la mesure | vérifier tracking, logs et pages avant conclusion |
| « Google mettra tout à jour en quelques jours. » | Google parle de délais variables, parfois de quelques semaines | crawl et taille du site | ne pas planifier un pic juste après sans marge |
| « Nous ne regardons que Google. » | Bing recommande sitemaps, canonicals, Site Explorer et logs | part de trafic propre au site | inclure Bing si audience pertinente |
| « Le nouveau Next.js est plus rapide, donc le SEO montera. » | performance et rendu sont des facteurs, pas une garantie de trafic | contenu, liens, intention, saison | mesurer les mêmes URLs et conversions |
| « Nous pouvons supprimer les anciennes pages sans analyse. » | certaines pages ont liens, trafic historique ou valeur commerciale invisible | backlinks, CRM, campagnes | inventaire croisé et décision documentée |
| « Une migration progressive est trop longue. » | elle isole les variables et facilite le diagnostic | taille et architecture | comparer coût de délai au coût d'une crise |

## 9. Plan de réécriture

| Ordre | Section proposée | Question résolue | Preuve / outil | Décision produite | Conserver / créer / couper |
| ---: | --- | --- | --- | --- | --- |
| 1 | « Protéger son SEO, pas promettre l'impossible » | que peut-on contrôler ? | encadré risque/garantie | cadrer l'objectif | renommer le titre et garder l'honnêteté |
| 2 | « Baseline avant chantier » | que mesure-t-on aujourd'hui ? | URL, Search Console, analytics, logs, conversions | référence avant/après | créer tableau |
| 3 | « Score de priorité par URL » | quelles pages comptent ? | trafic, conversions, marge, liens, risque | protéger/ fusionner/supprimer | créer grille |
| 4 | « Mapping 1:1 et décisions 200/301/410 » | où va chaque ancienne URL ? | exemples pertinents et cas sans équivalent | valider l'inventaire | conserver exemples, ajouter statuts |
| 5 | « Staging et parité technique » | le nouveau site est-il réellement lisible ? | noindex, robots, canonical, HTML rendu, schema, hreflang | autoriser recette | créer checklist |
| 6 | « Analytics et conversions » | la baisse est-elle réelle ? | événements, CRM, consentement, doublons, Tag Assistant | mesurer correctement | créer parcours test |
| 7 | « Lancement progressif et rollback » | quand dire go/no-go ? | critères, propriétaire, fenêtre, DNS/CDN, sauvegarde | basculer ou attendre | créer runbook |
| 8 | « Monitoring 1/7/30/90 » | comment réagir après ? | seuils et responsables par fenêtre | corriger ou poursuivre | chiffrer indicateurs |
| 9 | « Google, Bing et international » | quels moteurs et langues ? | Google site moves, Bing guidelines, hreflang | publier sitemaps corrects | ajouter source Bing |
| 10 | « Contrat et livrables » | que demander au prestataire ? | audit, mapping, crawl, recette, suivi | comparer les devis | préciser CTA |

### Contrat des 150 premiers mots

> Vous voulez moderniser votre site, mais certaines pages vous apportent déjà des demandes de devis, des appels ou des ventes. La bonne question n'est pas « comment garantir zéro baisse ? » — personne ne peut honnêtement le promettre — mais « comment rendre chaque risque visible, testable et réversible ? ». Avant de toucher au design ou au CMS, il faut mesurer les pages et conversions qui comptent, croiser le sitemap avec Search Console, Analytics et les logs, puis décider URL par URL ce qui reste en 200, ce qui reçoit une 301 et ce qui peut être supprimé. Le nouveau site doit ensuite être comparé sur son contenu, ses liens internes, ses canonicals, son rendu JavaScript, ses données structurées, son hreflang, ses robots et son tracking. Dans ce guide, vous trouverez une feuille de migration, une recette avant mise en ligne, des critères de go/no-go et un suivi à J+1, J+7, J+30 et J+90. Les étapes protègent votre activité ; elles ne garantissent ni position ni trafic.

### Éléments à supprimer ou déplacer

- supprimer toute lecture possible de « sans perdre » comme garantie ;
- remplacer « chaque ancienne page doit conduire » par une décision documentée 200/301/410/404 ;
- déplacer les études de cas Personio/Renault dans un encadré « cas non transposables » ;
- ajouter les canonicals, hreflang, données structurées et tags Analytics au même niveau que robots/sitemap ;
- préciser que les anciennes URLs redirigées sortent du sitemap final, tandis que les URLs canoniques actuelles y restent ;
- lier la surveillance à des seuils et actions, pas à une attente passive de quelques semaines.

### Éléments à conserver

- l'introduction orientée appels, devis et ventes ;
- les cinq règles et le refus des redirections vers l'accueil ;
- la distinction changement d'URL / domaine / technologie ;
- la protection du staging et le retrait du `noindex` ;
- les tests de formulaires, achats, redirections, sitemap et mesure ;
- l'avertissement Google sur exploration et indexation ;
- les clauses de devis et la limite « aucune position, aucun trafic, aucune conversion garantis ».

## 10. Contre-audit après correction

Ce tableau est une cible de réécriture ; aucune correction n'a été appliquée dans cette passe.

| ID | Problème | Priorité | Correction attendue | Revalidation indépendante |
| --- | --- | --- | --- | --- |
| P0-01 | Aucun risque vital ou injonction juridique immédiate repéré | P0 | aucune | relecture factuelle et conformité |
| P1-01 | Titre et promesse peuvent suggérer zéro baisse | P1 | reformuler en réduction/gestion du risque | test auprès d'un dirigeant non SEO |
| P1-02 | Baseline non définie quantitativement | P1 | URL, trafic, conversions, marge, logs, performance, saisonnalité | vérifier export avant/après |
| P1-03 | Inventaire de sources incomplet | P1 | sitemap + GSC + analytics + logs + backlinks + CMS + campagnes | comparer deux inventaires et expliquer les écarts |
| P1-04 | Mapping sans matrice 200/301/410/404/canonical | P1 | modèle URL par URL, destination, propriétaire et preuve | test crawl exhaustif |
| P1-05 | Canonical, hreflang et données structurées insuffisants | P1 | checklist par langue et type de page | valider HTML rendu et Rich Results lorsque applicable |
| P1-06 | JavaScript/rendering non testés | P1 | SSR/prérendu, liens, contenu et schema dans rendu final | inspection sans JS + Google/Bing outils |
| P1-07 | Analytics/conversions/consentement non détaillés | P1 | parcours formulaire/achat/CRM, événements et doublons | Tag Assistant, GA4 temps réel, CRM |
| P1-08 | DNS/CDN/rollback peu opérationnels | P1 | TTL, fenêtre, certificats, cache, sauvegarde, retour, propriétaire | répétition en préproduction |
| P1-09 | Monitoring sans seuils ni actions | P1 | J+1/J+7/J+30/J+90, segments et runbook | simulation d'une chute et d'un noindex |
| P1-10 | Go/no-go et lancement progressif absents | P1 | bloqueurs, défauts acceptés, autorité et date de rollback | procès-verbal signé |
| P1-11 | CTA sans livrable, délai et périmètre | P1 | audit remis, mapping, score et période de suivi | test de conversion de la page |
| P2-01 | Benchmark international non visible dans le guide | P2 | FR/US/UK/AU/DACH + Google/Bing et limites | rouvrir les sources avant réécriture |
| P2-02 | Source Bing et logs 90 jours absentes | P2 | ajouter Bing Guidelines/Migration et usage conditionnel | vérifier la date de la documentation |
| P2-03 | FAQ ne couvre pas canonical, tracking et rollback | P2 | FAQ orientée objections et décisions | vérifier absence de redondance |
| P2-04 | `readTimeMin: 10` à recalculer après enrichissement | P2 | recalculer au texte final | registre vs texte publié |
| P2-05 | Image OG et rendu responsive non vérifiés | P2 | capture 320–1440 et carte sociale | QA navigateur réelle |
| P2-06 | Pas de ressource téléchargeable | P2 | feuille mapping + checklist recette + monitoring | téléchargement et usage testés |
| P2-07 | Cas Renault/Personio à borner plus explicitement | P2 | encadrés contexte, source, non-extrapolation | vérifier métriques et attribution |
| P2-08 | Links internes/externes non crawlés dans cette passe | P2 | test des liens, ancres et destinations | crawl après réécriture |
| P2-09 | Accessibilité et contenu des médias insuffisants | P2 | alt, clavier, contrastes, formulaires et contenu équivalent | audit UX réel |
| P2-10 | Multi-sites, sous-domaines et campagnes non couverts | P2 | matrice domaine/sous-domaine/UTM/CRM | test cross-domain et attribution |

### Portes explicites

```text
P1 — PRÉSENTE MAIS INCOMPLÈTE : NO-GO tant que P1-01 à P1-11 ne sont pas fermés et testés.
P2 — À CORRIGER : benchmark Bing/international, FAQ, ressource, cas, links, responsive et accessibilité restent requis.
P3 — REJETÉE / NON VALIDÉE : aucun crawl de production, rendu mobile, test de bascule DNS, rollback, Search Console ou Bing Webmaster n'est prouvé par ce rapport.
P4 — REJETÉE / NON VALIDÉE : aucune absence de baisse, position, indexation, trafic ou conversion ne peut être déclarée.
```

### Score cible après correction

| Axe | Cible /10 | Condition de passage |
| --- | ---: | --- |
| Intention | 9 | promesse de réduction du risque, sans garantie impossible |
| Décision | 9 | score URL, matrice, go/no-go et rollback |
| Pédagogie | 9 | exemples 200/301/410, canonical, tracking et rendus |
| Profondeur | 9 | Google/Bing, JS, hreflang, logs, DNS/CDN, analytics |
| Preuve | 9 | sources primaires, cas bornés, aucun chiffre extrapolé |
| Comparaison | 9 | même domaine, nouveau domaine, e-commerce et multilingue |
| Originalité | 9 | feuille de migration, seuils et suivi 1/7/30/90 |
| Style | 9 | humain, concret, non anxiogène, limites claires |
| Conversion | 9 | audit avec livrables et délai de restitution |
| SEO/produit | 9 | FAQ, JSON-LD, maillage, ressource et QA réels |

Total cible : **90/100**. Cette note cible la qualité de décision et de preuve ; elle ne promet pas de résultat Google.

## 11. Preuves techniques et visuelles

```text
Manifeste : src/app/guides/refonte-sans-perdre-son-seo/page.tsx ; éventuel opengraph-image.tsx de route ; entrée src/lib/guides.ts.
Constats source : Article JSON-LD, Breadcrumb JSON-LD, 8 FAQ, 10 sections H2, tableaux risque/mapping/suivi, CTA avec tags, liens Google officiels et guides internes.
Registre : datePublished 2026-07-18, dateModified 2026-07-21, readTimeMin 10 ; l'entrée de registre n'a pas été modifiée.
Calculs refaits : aucun chiffre de perte ou de maintien inventé ; indicateurs et scénarios proposés comme hypothèses de contrôle.
Sources rouvertes : Google Site Moves/301/JavaScript/Structured Data/Analytics ; Bing Guidelines/Migration/Site Explorer ; CNIL cookies ; Cloudflare TTL ; WordPress export ; cas Vercel/web.dev bornés.
Liens vérifiés : URLs sources directes enregistrées le 24/07/2026 ; les cas commerciaux et métriques doivent être rouverts avant reprise finale.
Commandes : inspection lecture seule par sed/rg et hash local ; aucun build, crawl de production ou navigateur exécuté dans cette passe.
Rendu 320 / 390 / 768 / 1024 / 1440 : non exécuté ; responsive, tableau large, CTA, FAQ et carte sociale restent une porte P3/P2.
Metadata/JSON-LD : présence statique observée ; validité URL, rendu public, Rich Results et cohérence dates non testés en ligne.
Statut maximal prouvé : audit local et benchmark documenté.
Réserve publication / indexation : aucun commit, push, déploiement, test de migration ou preuve Search Console/Bing n'a été réalisé.
```

## Conclusion opérationnelle

Le guide possède une excellente intuition pédagogique : protéger les pages utiles, ne pas rediriger tout vers l'accueil, cacher le staging et surveiller après la mise en ligne. Sa faiblesse est de rester au niveau de la checklist narrative. Pour devenir la meilleure réponse destinée à un dirigeant, il doit fournir les preuves qui permettent d'autoriser ou de refuser la bascule : baseline avant chantier, inventaire croisé, mapping URL par URL, parité du rendu et des données, mesure des conversions, DNS/CDN, go/no-go, rollback et monitoring 1/7/30/90.

La recommandation professionnelle est donc de conserver le fond mais de changer la promesse : une refonte bien préparée ne garantit pas zéro baisse ; elle rend les causes traçables, les erreurs détectables et la correction rapide. C'est cette honnêteté opérationnelle qui protège réellement le trafic et la confiance du client.
