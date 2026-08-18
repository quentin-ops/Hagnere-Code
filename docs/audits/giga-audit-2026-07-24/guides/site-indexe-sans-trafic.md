# Audit approfondi — `site-indexe-sans-trafic`

Date : 24 juillet 2026  
Auditeur : audit éditorial, SEO, mesure et décision en lecture seule  
Snapshot : `src/app/guides/site-indexe-sans-trafic/page.tsx`, SHA-256 `8ad3603ccce85a5ccf1ad29689e319d23eb84b696f35f2df7068dfbb98b4d67e` ; image sociale SHA-256 `b453604be0627321a2927562300ab6149055214e9c6972c96051d239972cf474` ; dossier de recherche SHA-256 `fd127e69af9714351086292faabf0a9597dcdca971e6f902041b9c2cfd3eb1b4` ; registre SHA-256 `8663e6e84352121ec854393e049492a1c2b72f242166141e5d31e0911b43cb09`. Registre observé avec `datePublished: 2026-07-24`, `dateModified: 2026-07-24`, `readTimeMin: 15`.

## 1. Verdict exécutif

```text
Lecteur exact : dirigeant de TPE/PME qui voit des pages « indexées » dans un rapport mais ne reçoit ni visites qualifiées ni demandes et craint de payer une réécriture générale inutile.
Question réelle : « Le problème vient-il de l'indexation, de la demande, du sujet, de la position, du titre, du rendu, de la concurrence ou de mon parcours commercial ? »
Décision attendue : mesurer une URL sur une période cohérente, classer le blocage et décider de conserver, améliorer, fusionner, retirer ou attendre avec une date de revue.
Réponse actuelle en une phrase : le guide distingue remarquablement indexation, impression, position, clic et demande, fournit un registre page-requête et quatre décisions ; il ne couvre pas encore assez les branches local/e-commerce, marque/non-marque, saisonnalité, concurrence, liens externes, logs/Analytics, rendu JavaScript, cannibalisation et seuils chiffrés.
Défaut qui coûte le plus de valeur : le lecteur comprend pourquoi « indexé » ne signifie pas « rentable », mais doit encore faire lui-même le diagnostic technique et commercial pour savoir si l'effort doit porter sur la demande, l'intention, le CTR, la page, les liens, la mesure ou l'offre.
Niveau actuel : B+ (très bonne pédagogie de base, insuffisante comme arbre de décision SEO/commerce complet).
Priorité : haute.
Statut : audité ; aucun guide source, registre ou fichier Git modifié.
```

### Score avant correction

| Axe | Note /10 | Preuve localisable | Manque décisif |
| --- | ---: | --- | --- |
| Intention | 9 | ouverture qui sépare indexation/impression/clic/demande | local, commerce et marque non branchés assez tôt |
| Décision | 9 | conserver/améliorer/fusionner/retirer + statut attendre | seuils, coût/effort et arbre technique manquants |
| Pédagogie | 10 | cinq cartes de signaux, exemples fictifs, registre à copier | quelques métriques non illustrées par calcul |
| Profondeur | 8 | canonique, requêtes, CTR, cannibalisation, utile content | logs, JS, liens externes, concurrence, local, e-commerce, saison |
| Preuve | 9 | Search Console/Google officiels et limites explicites | Bing, Analytics et standards complémentaires absents |
| Comparaison | 7 | quatre décisions éditoriales | pas de comparaison marque/non-marque, local/commerce, page/service |
| Originalité | 9 | registre page-requête et refus de la réécriture générale | pas de score de priorité ni calcul de coût d'opportunité |
| Style | 9 | plume humaine, pas de promesse, refus du mot-clé magique | page longue pour une recherche parfois urgente |
| Conversion | 8 | CTA d'examen par URL, arrêt possible, pas de vente forcée | livrable, durée et seuil d'intervention non précisés |
| SEO/produit | 8 | metadata helper, Article/Breadcrumb/FAQ, maillage | rendu JS, lien externe, OG, responsive et données réelles non testés |

Total : **86/100**.

La page est déjà une excellente réponse au faux diagnostic « indexé = trafic ». Pour devenir une référence, elle doit montrer la bifurcation complète : **indexation → impressions → position/intention → clic/CTR → chargement/mesure → conversion**, puis intégrer le contexte de demande (saison, zone, marque, concurrence, local, catalogue) et le coût de chaque action.

## 2. Ce que le guide dit réellement

### Progression observée

Le guide commence par un cas fictif de 200 pages indexées avec peu de clics et aucune demande identifiable. Il sépare cinq signaux : indexation, impression, position moyenne, clic et demande. Il explique ensuite :

1. inspecter l'URL canonique choisie par Google ;
2. distinguer absence d'impressions et absence de demande ;
3. lire les requêtes pertinentes, de marque, hors sujet ou ambiguës ;
4. traiter les impressions sans clics par le titre, extrait, promesse et confiance ;
5. repérer deux pages qui répondent au même besoin ;
6. classer un exemple fictif de 45 pages en quatre groupes ;
7. construire un registre page-requête ;
8. décider conserver, améliorer, fusionner ou retirer ;
9. considérer « attendre » comme statut temporaire avec date de revue.

La progression est claire et protège le lecteur des actions impulsives. Elle ne demande pas encore d'exporter les logs serveur, de comparer Google/Bing, de relier les sessions Analytics aux conversions, ni de distinguer une page de service locale d'une page informationnelle nationale.

### Ce qui paraît complet sans encore l'être

- Le guide traite « zéro impression » comme une question de demande, mais ne montre pas comment vérifier cette demande avec saisonnalité, Google Trends/Keyword Planner, données commerciales ou recherche locale — sans transformer un outil de volume en vérité de marché.
- « Position moyenne » est correctement relativisée, mais aucune tranche de position (1–3, 4–10, 11–20, >20) n'est utilisée pour choisir une action.
- « Impressions pertinentes sans clic » appelle un meilleur titre et extrait, mais ne distingue pas SERP locale, produits, extraits enrichis, annonces, People Also Ask, marque et requêtes non-marque.
- Les requêtes de marque sont séparées, mais aucun ratio marque/non-marque ni scénario de notoriété ne permet de voir si le site ne capte que des visiteurs déjà convaincus.
- La cannibalisation est bien introduite par la phrase de rôle, mais il manque un protocole : même requête, même intention, même URL canonique, liens internes, performance relative et décision de consolidation.
- Les liens internes sont cités comme action raisonnable, mais les backlinks, mentions locales, citations, liens partenaires et autorité externe ne sont pas diagnostiqués.
- Le guide ne traite pas une page locale : fiche établissement, zone desservie, adresse, téléphone, avis, horaires, cohérence NAP et intention « près de moi ».
- Il ne traite pas une page e-commerce : impressions produit/catégorie, disponibilité, prix, données structurées, flux Merchant Center, filtres, facettes et conversion de panier.
- Le rendu JavaScript est absent. Une page peut être indexée mais ne pas exposer le contenu, les liens ou les données structurées attendus dans le HTML rendu.
- Analytics et logs sont presque absents : une page peut avoir des clics sans session mesurée, une conversion sans attribution organique ou un événement cassé.
- La concurrence est réduite à « environnement des résultats » ; le dirigeant n'a pas de méthode pour comparer couverture, preuve, offre, liens, format et différenciation.
- Les décisions n'ont pas d'effort, coût, impact attendu ni horizon. Le risque est de consacrer 20 heures à une page sans demande alors qu'une page service à CTR faible pourrait produire un résultat plus rapide.
- L'attente est correctement datée, mais aucun seuil de sortie n'est donné ; « période cohérente » reste abstrait pour une saison courte ou une faible volumétrie.

## 3. Benchmark France et international

Recherche effectuée le 24 juillet 2026. Les sources officielles Google/Bing/Analytics sont prioritaires. Les guides de marché ou fournisseurs peuvent illustrer une méthode, mais ne sont jamais pris comme benchmark universel de CTR, position ou trafic.

| Ressource et URL directe | Zone | Réponse utile | Preuve / méthode | Limite | Apport à adapter |
| --- | --- | --- | --- | --- | --- |
| [Google Search Console — performance](https://support.google.com/webmasters/answer/7576553?hl=fr) | international | clics, impressions, CTR, position, dimensions et périodes | aide officielle Search Console | règles de rapport spécifiques | garder comme instrument central |
| [Google — définitions performance](https://support.google.com/webmasters/answer/7042828?hl=fr) | international | définitions et limites des clics/impressions/positions | documentation primaire | pas de seuil de succès | ajouter les tranches et filtres |
| [Google — inspection URL](https://support.google.com/webmasters/answer/9012289?hl=fr) | international | statut, canonical choisie, test en direct | outil officiel | une URL à la fois | intégrer le test rendu |
| [Google — comment fonctionne la recherche](https://developers.google.com/search/docs/fundamentals/how-search-works?hl=fr) | international | crawl, indexation, diffusion distincts | documentation officielle | ne donne pas demande/CTR | conserver la chaîne de signaux |
| [Google — contenu utile](https://developers.google.com/search/docs/fundamentals/creating-helpful-content?hl=fr) | international | personne d'abord, expérience, réponse au besoin | source officielle | qualitatif | renforcer intention et preuve |
| [Google — JavaScript SEO](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics) | international | crawl, rendu, indexation ; SSR/prérendu utile et contenu rendu visible | documentation officielle | ne remplace pas test réel | ajouter branche JS |
| [Google — structured data](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data) | international | données structurées et éligibilité aux résultats enrichis | source officielle | résultat enrichi non garanti | tester schema produit/local/article |
| [Google Analytics — sources et dimensions](https://support.google.com/analytics/answer/11080067?hl=en) | international | source/medium, attribution et scopes ; modèles influencent le crédit | documentation officielle | Analytics n'est pas Search Console | relier clic/session/key event avec prudence |
| [Google Analytics — campagnes](https://support.google.com/analytics/answer/11242841?hl=en) | international | UTM, auto-tagging, attribution et cross-domain | source officielle | configuration propre au compte | détecter faux « zéro conversion » |
| [Bing Webmaster Guidelines](https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a) | international | qualité, URLs canoniques, sitemaps, liens crawlables, indexation | documentation officielle Bing | algorithme différent | ajouter Bing au diagnostic |
| [Bing support — URL absente](https://www.bing.com/webmasters/help/webmaster-support-24ab5ebf) | international | raisons possibles : robots, doublon, qualité, nouvelle URL | support officiel | pas seuil universel | créer branche Google/Bing |
| [Bing Sitemaps](https://www.bing.com/webmasters/help/sitemaps-3b5cf6ed) | international | sitemaps soumis, traités, erreurs et URLs découvertes | outil officiel | visibilité non garantie | vérifier URLs canoniques |
| [Google Business Profile](https://support.google.com/business/answer/3038177?hl=fr) | local/international | fiche établissement et informations locales | aide officielle | profil et site sont distincts | ajouter local/zone |
| [Google Merchant Center — structured data/products](https://support.google.com/merchants/answer/7331110?hl=en) | e-commerce/international | données produit, flux et visibilité shopping | aide officielle | disponibilité/compte propres au marchand | ajouter catalogue et flux |
| [Bing Webmaster Tools — Site Explorer](https://www.bing.com/webmasters/help/site-explorer-c680da37) | international | canonical, redirects, crawl issues et URLs découvertes | outil officiel | données Bing | compléter les logs |
| [Search Engine Journal — indexed no traffic](https://www.searchenginejournal.com/seo/indexed-but-no-traffic/) | US | typologie intention/CTR/contenu | guide commercial | non primaire, pas preuve de seuil | benchmark de couverture seulement |
| [Ahrefs — indexed but no traffic](https://ahrefs.com/blog/indexed-but-no-traffic/) | US/international | demande, qualité, liens et concurrence | outil commercial | chiffres et conseils propres au fournisseur | vérifier les axes oubliés |
| [Semrush — pages indexed no traffic](https://www.semrush.com/blog/indexed-but-not-getting-traffic/) | US/international | diagnostic par impressions, requêtes et contenu | outil commercial | non institutionnel | comparer la checklist, pas les chiffres |
| [SISTRIX — indexiert aber kein Traffic](https://www.sistrix.de/frag-sistrix/warum-hat-meine-seite-trotz-indexierung-keinen-traffic/) | DACH | indexation, demand, ranking et CTR | source produit allemande | méthodologie propriétaire | ajouter angle DACH sans reprendre moyenne |
| [The SEO Works — indexed no traffic](https://www.seoworks.com/seo-glossary/indexed-but-no-traffic/) | UK | intention, concurrence, liens et snippets | agence UK | non primaire | benchmark de couverture UK |
| [Safari Digital — indexed no traffic](https://www.safaridigital.com.au/blog/indexed-but-no-traffic/) | Australie | qualité, mots-clés et pertinence | agence AU | non institutionnel | benchmark AU, pas moyenne |

### Saturation et enseignements

Les pages concurrentes répètent « contenu, mots-clés, liens, CTR ». Le guide Hagnéré Code les dépasse déjà sur la distinction des signaux et les quatre décisions. Les axes encore différenciants sont : mesure de conversion, local/e-commerce, Google/Bing, JS rendu, marque/non-marque, saisonnalité et arbitrage coût/effort.

## 4. Arbre de décision à produire

```text
URL inspectée ?
├─ Non indexée → guide d'indexation, pas ce guide.
└─ Indexée
   ├─ Impressions = 0 ?
   │  ├─ Période/filtres insuffisants → prolonger et dater la revue.
   │  ├─ Demande saisonnière ou locale → comparer même saison/zone.
   │  ├─ Canonique/URL/rendu/robots incohérents → corriger technique.
   │  ├─ Sujet sans demande publique mais utile → conserver sans budget SEO.
   │  └─ Sujet commercial avec demande → reformuler intention, liens, preuve, autorité.
   └─ Impressions > 0
      ├─ Requêtes hors sujet → clarifier rôle, contenu, maillage ou fusionner.
      ├─ Requêtes pertinentes, position >20 → contenu/intention/preuves/liens/concurrence.
      ├─ Position 4–20, CTR faible → titre/extrait/SERP/local/produit/schema.
      ├─ Clics, sessions ou key events absents → vérifier JS, consentement, Analytics/CRM.
      ├─ Clics sans conversion → offre, preuve, vitesse, formulaire, prix, confiance.
      └─ Deux pages mêmes requêtes/intention → cannibalisation : différencier ou fusionner.
```

## 5. Faits et fraîcheur

| Affirmation du guide | Verdict | Source primaire actuelle | Périmètre et date | Correction |
| --- | --- | --- | --- | --- |
| Indexation ne garantit ni impression, position ni clic | confirmé | Google Search fonctionnement/performance | recherche organique | conserver en ouverture |
| `site:` n'est pas exhaustif | confirmé | Google opérateurs | indice public | conserver |
| Position moyenne n'est pas un rang fixe | confirmé | Google définitions performance | filtres, appareil, requête, pays | conserver et ajouter tranches |
| Une impression ne prouve pas une lecture | confirmé par définition de métrique | Google Search Console | résultat affiché selon règles | conserver |
| Un clic ne prouve pas un prospect | raisonnement correct | Search Console vs Analytics/CRM | attribution non automatique | ajouter mesure de session/key event |
| Requêtes Search Console peuvent être masquées | confirmé en général | rapports Search Console | confidentialité et seuils de données | conserver, documenter limite |
| Contenu utile pensé pour les personnes | confirmé comme recommandation | Google helpful content | qualité qualitative | conserver sans promettre classement |
| Google rend JavaScript mais pas tous les robots | confirmé | Google JavaScript SEO | crawl/rendu/indexation | ajouter branche JS |
| Analytics attribue selon scopes/modèles | confirmé | Google Analytics traffic-source dimensions | attribution dépend configuration | ajouter prudence conversion |
| Bing peut exclure doublons, robots ou mauvaise qualité | confirmé | Bing webmaster support/guidelines | Bing | ajouter validation Bing |
| Un sujet sans demande peut rester utile hors SEO | jugement professionnel | pas une règle Google | documentation/client | conserver et expliquer coût |
| Fusionner peut nécessiter redirection | confirmé en pratique SEO | Google redirects/site moves | URL supprimée avec successeur pertinent | ajouter code 301/410 et logs |

### Contradictions ou risques de lecture

- Le guide dit qu'une page indexée peut produire zéro impression ; cela peut être vrai selon période et rapport, mais l'utilisateur doit vérifier la période, la dimension et les données récentes avant de conclure.
- « CTR faible » est présenté comme question de titre/extrait ; il peut aussi refléter une SERP dominée par annonces, local pack, produit, marque ou intention mal ciblée.
- « Recherche de marque » est séparée, mais sans ratio marque/non-marque, une entreprise peut croire que son SEO fonctionne alors qu'elle capte seulement les personnes qui la connaissent déjà.
- « Ajouter un lien pertinent » ne crée pas automatiquement de demande ni d'autorité externe ; les liens internes et externes ont des rôles différents.
- « Attendre » peut devenir une excuse permanente ; il faut définir volume minimum, période comparable et date de décision.

### Faits à retirer plutôt qu'à affaiblir

- tout CTR « normal » universel ;
- tout seuil de position présenté comme garantie commerciale ;
- toute attribution directe d'une demande au SEO sans rapprochement Analytics/CRM ;
- toute conclusion « page mauvaise » avec zéro impression sans analyse de demande, saison, zone et canonique.

## 6. Scénarios chiffrés, seuils et priorisation

Les chiffres suivants sont des exemples de méthode, pas des benchmarks ni des garanties. Ils donnent au dirigeant une manière de choisir l'effort.

### Scénario A — page de service B2B

Hypothèses : 1 000 impressions/mois, CTR 0,8 %, 8 clics, taux de conversion mesuré 5 %, marge par prospect 400 €.

| Étape | Calcul | Résultat |
| --- | --- | ---: |
| clics actuels | 1 000 × 0,8 % | 8 |
| prospects suivis | 8 × 5 % | 0,4 |
| valeur attendue | 0,4 × 400 € | 160 €/mois |
| CTR après amélioration hypothétique | 2 % | 20 clics |
| prospects après | 20 × 5 % | 1 |
| valeur après | 1 × 400 € | 400 €/mois |

Une amélioration de snippet n'a de valeur que si impressions pertinentes, page, tracking et taux de conversion restent comparables. Le modèle ne dit pas que 2 % est « normal » ; il calcule une sensibilité.

### Scénario B — e-commerce produit/catégorie

Hypothèses : 20 000 impressions/mois, position moyenne 8, CTR 1,2 %, conversion 1,5 %, marge moyenne 45 €.

| Étape | Calcul | Résultat |
| --- | --- | ---: |
| clics | 20 000 × 1,2 % | 240 |
| commandes | 240 × 1,5 % | 3,6 |
| marge | 3,6 × 45 € | 162 €/mois |
| après CTR à 2 % (sensibilité) | 20 000 × 2 % × 1,5 % × 45 € | 270 €/mois |

Avant de réécrire le titre, vérifier stock/prix, flux Merchant Center, données produit, disponibilité, filtres, mobile, panier, paiement et attribution. Une hausse de clics qui ne convertit pas n'est pas une réussite.

### Scénario C — page locale

Hypothèses : 600 impressions locales/mois, 4 % de clics, 10 % d'actions mesurées (appel/clic itinéraire/formulaire), marge par client 250 €.

| Étape | Calcul | Résultat |
| --- | --- | ---: |
| visites/actions initiales | 600 × 4 % × 10 % | 2,4 clients potentiels |
| valeur attendue | 2,4 × 250 € | 600 €/mois |
| diagnostic prioritaire | profil, catégorie, zone, téléphone, avis, page locale et suivi | avant contenu générique |

Pour le local, la page web seule n'est pas l'ensemble du signal. Vérifier fiche établissement, cohérence des coordonnées, zone desservie, avis, horaires, mobile et appels réellement décrochés.

### Seuils de décision illustratifs

| Observation sur période comparable | Action initiale | Effort maximal avant revue |
| --- | --- | --- |
| 0 impression, sujet non recherché et rôle non commercial | conserver/documenter ou retirer | 0–1 h de contrôle, pas de réécriture |
| 0 impression, sujet commercial mais canonique/rendu douteux | corriger technique | 1–3 jours, revue après collecte |
| impressions pertinentes, position >20 | travailler intention, preuve, liens et concurrence | 1 sprint ciblé, revue 6–12 semaines selon volume |
| position 4–10, CTR très inférieur au baseline de la page | tester titre/snippet/SERP | 1–2 variantes contrôlées, pas de refonte complète |
| clics présents, sessions/CRM absents | réparer mesure/consentement/tracking | priorité immédiate avant SEO |
| clics et sessions présents, conversions faibles | auditer offre, preuve, vitesse, formulaire, prix | sprint conversion distinct |
| deux pages mêmes intention/requêtes | différencier ou fusionner | mapping, contenu repris, 301/monitoring |

« Très inférieur » doit être défini par comparaison cohérente (même page, même type de requête, même période ou groupe comparable), pas par un chiffre universel.

### Score de priorité propriétaire

```text
Priorité = (valeur métier 1–5 × demande démontrée 1–5 × gain plausible 1–5)
            ÷ (effort 1–5 × risque de changement 1–5).
```

Le score n'est pas une vérité SEO. Il sert à ordonner une liste : page service à forte marge et CTR faible avant fiche interne sans demande publique ; page locale avec appels traçables avant article expérimental ; conversion cassée avant réécriture.

## 7. Comparaison et position professionnelle

```text
Option la moins chère : conserver et documenter une page utile sans demande SEO, ou corriger un filtre/mesure évident.
Option la plus rentable à tester : réparer une conversion ou un rendu cassé avant d'écrire davantage.
Option la plus risquée : réécrire ou supprimer toutes les pages indexées parce que le total de clics est faible.
Position Hagnéré Code : partir du signal bloqué, de la valeur métier et de la preuve disponible ; choisir une action bornée, un indicateur attendu et une date de revue.
Ce que nous déconseillons même si nous pourrions le vendre : produire des pages ou synonymes en série sans demande, promettre un CTR, attribuer toute demande au SEO, ou supprimer une URL sans liens/traffic/conversion/canonical/destination vérifiés.
```

## 8. Objections et cas limites

| Objection loyale | Réponse prouvée | Incertitude | Conséquence |
| --- | --- | --- | --- |
| « 200 pages indexées devraient apporter du trafic. » | indexation ouvre une possibilité, pas une demande | sujet et marché | classer URL par rôle et signal |
| « Zéro impression = Google me pénalise. » | période, filtres, demande, canonique ou rendu peuvent expliquer | cause réelle | inspection et Search Console avant action |
| « Je vais ajouter tous les mots-clés. » | Google recommande utile/people-first, pas empilement | intention et qualité | réécrire autour de la décision |
| « Le CTR est bas, changeons le title. » | SERP, marque, local, annonces et intention influencent le clic | contexte réel | observer page/requête/SERP avant test |
| « La position 8 est mauvaise partout. » | position moyenne dépend des filtres et requêtes | visibilité locale/device | lire tranches et segments |
| « Les clics sont là, mais aucun lead : le SEO est inutile. » | tracking, formulaire, offre et vente peuvent casser | attribution et qualité lead | vérifier Analytics/CRM et parcours |
| « Une seule page doit couvrir toute la ville et tous les services. » | local et intention peuvent demander des pages distinctes | demande et duplication | architecture par zone/service avec valeur réelle |
| « Une fiche produit indexée sans commande est un échec. » | stock, prix, flux, confiance, panier et marge comptent | economics | auditer commerce, pas seulement SEO |
| « Les backlinks sont vieux, donc il faut tout réécrire. » | autorité externe et contenu sont des leviers différents | qualité des liens | audit liens séparé |
| « J'attends trois mois et je verrai. » | attente n'est utile qu'avec signal et date de revue | volume et saison | statut temporaire, revue datée |

## 9. Plan de réécriture

| Ordre | Section proposée | Question résolue | Preuve / outil | Décision produite | Conserver / créer / couper |
| ---: | --- | --- | --- | --- | --- |
| 1 | « Indexé ne veut pas dire visible, cliqué ou rentable » | quel niveau est bloqué ? | chaîne des cinq signaux | branche initiale | conserver, raccourcir |
| 2 | « Le diagnostic en 20 minutes » | quelles données exporter ? | URL Inspection, GSC, Analytics, logs, Bing | cause probable | créer arbre |
| 3 | « Demande, saison, marque et local » | le marché cherche-t-il cela ? | période comparable, marque/non-marque, zone | attendre/recentrer | créer scénarios |
| 4 | « Position et concurrence » | pourquoi la page n'est-elle pas choisie ? | tranche position, SERP, preuves, liens | contenu/autorité/CTR | créer grille |
| 5 | « Clics sans sessions ou conversions » | la mesure est-elle cassée ? | GA4, consentement, CRM, UTM, logs | réparer tracking/UX | créer parcours |
| 6 | « JavaScript, canonical, schema » | Google voit-il la bonne page ? | HTML rendu, URL Inspection, Rich Results | corriger technique | ajouter branche |
| 7 | « Local et e-commerce » | quelle spécificité métier ? | GBP, avis, NAP, produits, flux, panier | audit spécialisé | créer tableaux |
| 8 | « Cannibalisation et liens » | faut-il différencier ou fusionner ? | requêtes, pages, liens internes/externes | architecture | conserver exemple, enrichir |
| 9 | « Effort, coût et seuil » | où investir d'abord ? | score priorité, TCO temps/valeur | sprint borné | créer calcul |
| 10 | « Quatre décisions et revue » | que faire à la date fixée ? | conserver/améliorer/fusionner/retirer | action documentée | conserver, ajouter seuils |
| 11 | CTA | que livrera l'accompagnement ? | 10 URL classées, hypothèses et date | prise de contact qualifiée | préciser livrable |

### Contrat des 150 premiers mots

> Votre page est indexée, mais vous ne voyez presque aucun clic ni demande. Cela ne signifie pas encore que le contenu est mauvais. Il faut d'abord savoir où la chaîne se bloque : Google connaît-il la bonne URL ? La page reçoit-elle des impressions ? Sur quelles recherches et dans quelle zone ? Quelle est sa position et son taux de clics par rapport à elle-même ? Les clics arrivent-ils dans Analytics et le CRM, ou le suivi est-il cassé ? Dans ce guide, nous séparons indexation, impression, position, intention, CTR, clic, session et conversion. Nous ajoutons les cas qui piègent les dirigeants : marque contre non-marque, saisonnalité, concurrence, page locale, catalogue e-commerce, JavaScript, canonique, cannibalisation et liens. Vous trouverez un arbre Search Console/logs/Analytics, des calculs illustratifs et des seuils de travail pour choisir entre conserver, améliorer, fusionner, retirer ou attendre avec une date de revue. Aucun CTR, trafic ou position ne peut être promis à l'avance.

### Éléments à supprimer ou déplacer

- déplacer les cinq signaux en schéma de chaîne avant les longs paragraphes ;
- remplacer « période cohérente » par exemples saisonniers et faible volumétrie ;
- ajouter les données locales/e-commerce dans les observations plutôt qu'en note finale ;
- ne pas traiter CTR sans SERP, marque/non-marque et type de résultat ;
- ajouter « réparer la mesure avant d'interpréter le SEO » près de la section clics ;
- faire du registre un outil avec statut, effort, valeur et date de revue.

### Éléments à conserver

- distinction indexation/impression/position/clic/demande ;
- inspection de l'URL canonique et limites de `site:` ;
- avertissement sur requêtes masquées et position moyenne ;
- contenu utile centré sur le lecteur ;
- exemple fictif des 45 pages et calcul de contrôle ;
- quatre décisions, attente temporaire et arrêt possible ;
- CTA qui accepte de ne pas investir.

## 10. Contre-audit après correction

Ce tableau décrit les corrections à fermer ; aucune correction n'a été appliquée dans cette mission.

| ID | Problème | Priorité | Correction attendue | Revalidation indépendante |
| --- | --- | --- | --- | --- |
| P0-01 | Aucun risque critique ou promesse trompeuse repéré | P0 | aucune | relecture SEO/mesure |
| P1-01 | Arbre complet indexation→impression→position/intention→CTR→conversion absent | P1 | schéma et branches Search Console/logs/Analytics | test avec cas réel anonymisé |
| P1-02 | Saisonnalité, marque/non-marque et concurrence absentes | P1 | segments, périodes comparables, SERP et ratios | recalcul des conclusions |
| P1-03 | Local et e-commerce non traités | P1 | GBP/NAP/avis/appels ; produits/flux/panier/marge | scénarios locaux/commerce |
| P1-04 | Rendu JS, canonical, schema et links techniques insuffisants | P1 | HTML rendu, URL Inspection, Rich Results, liens crawlables | test sans JS + rendu |
| P1-05 | Analytics/logs/CRM et attribution non opérationnels | P1 | sessions, key events, UTM, consentement, logs | parcours clic→conversion |
| P1-06 | Liens externes et autorité absents | P1 | backlinks, citations, partenaires, qualité et risque | inventaire liens |
| P1-07 | CTR/position sans tranches ni seuils | P1 | positions 1–3/4–10/11–20/>20, baseline et sensibilité | recalcul indépendant |
| P1-08 | Effort/coût/valeur non comparés | P1 | score priorité + scénarios chiffrés | contrôle inverse |
| P1-09 | Attente sans seuil de sortie | P1 | date, volume minimal, signal attendu, action | revue à échéance |
| P1-10 | CTA sans livrable/délai/périmètre | P1 | 10 URL classées, hypothèses et recommandations | test utilisateur |
| P2-01 | Benchmark FR/US/UK/AU/DACH et Bing absent de la page | P2 | sources officielles et limites commerciales | rouvrir sources avant réécriture |
| P2-02 | `readTimeMin: 15` à recalculer après ajouts | P2 | recalcul registre/texte | contrôle final |
| P2-03 | JSON-LD/metadata/OG helper non vérifiés en ligne | P2 | canonical, Article, Breadcrumb, FAQ, OG | navigateur/crawler réel |
| P2-04 | Responsive des cartes et registre non vérifié | P2 | QA 320–1440 | captures mobiles |
| P2-05 | Ressource téléchargeable absente | P2 | registre page-requête + matrice décision | téléchargement et usage |
| P2-06 | Accessibilité, consentement et mobile peu intégrés | P2 | check UX, formulaire et analytics | audit réel |
| P2-07 | Maillage interne présent mais priorisation métier faible | P2 | liens par décision, service, local/e-commerce | test parcours |
| P2-08 | Données Bing/IndexNow non branchées | P2 | inspection Bing conditionnelle | validation compte |
| P2-09 | Cannibalisation sans règles de données | P2 | même intention/requête/rôle/canonical | comparaison des pages |
| P2-10 | Aucun contrôle de fraîcheur des dates et sources | P2 | source/date dans registre | revalidation mensuelle/avant publication |

### Portes explicites

```text
P1 — PRÉSENTE MAIS INCOMPLÈTE : NO-GO tant que P1-01 à P1-10 ne sont pas ajoutés et recalculés.
P2 — À CORRIGER : benchmark, ressource, QA, local/e-commerce, Bing et intégration mesure restent requis.
P3 — REJETÉE / NON VALIDÉE : aucun compte Search Console/Analytics/Bing, crawl, rendu JS, log, CTR réel ou responsive n'est prouvé ici.
P4 — REJETÉE / NON VALIDÉE : aucun trafic, position, CTR, conversion ou classement futur ne peut être garanti.
```

### Score cible après correction

| Axe | Cible /10 | Condition de passage |
| --- | ---: | --- |
| Intention | 10 | diagnostic déclenché par le signal réellement bloqué |
| Décision | 10 | arbre, seuils, coût/effort et date de revue |
| Pédagogie | 10 | métriques séparées et cas dirigeant |
| Profondeur | 10 | local, e-commerce, JS, liens, saison, concurrence, mesure |
| Preuve | 10 | Google/Bing/Analytics et limites clairement citées |
| Comparaison | 9 | marque/non-marque, intention, type de page, zone et commerce |
| Originalité | 10 | registre, score priorité, scénarios chiffrés |
| Style | 10 | humain, anti-réécriture automatique, sans promesse |
| Conversion | 9 | livrable SEO/mesure et possibilité d'arrêt |
| SEO/produit | 9 | FAQ, JSON-LD, maillage, ressource et QA réelle |

Total cible : **97/100**. Cette cible mesure la qualité du diagnostic, pas une promesse de trafic.

## 11. Preuves techniques et visuelles

```text
Manifeste : src/app/guides/site-indexe-sans-trafic/page.tsx ; helper src/lib/guide-page-seo ; entrée src/lib/guides.ts.
Constats source : metadata/JSON-LD via helper, 6 FAQ, 10 sections TOC, cinq cartes de signaux, deux tableaux de décision, registre page-requête, exemple fictif 45 pages, CTA et maillage interne.
Registre : datePublished/dateModified 2026-07-24, readTimeMin 15 ; aucun registre modifié.
Calculs refaits : exemple 45 pages (20+12+8+5), scénarios CTR/conversion locaux et e-commerce illustratifs ; aucun taux de clic « normal » inventé.
Sources rouvertes : Google Search Console performance/definitions/inspection/helpful content/JS/structured data ; Google Analytics attribution/campaigns ; Bing Guidelines/support/sitemaps/Site Explorer ; sources commerciales FR/US/UK/AU/DACH bornées.
Liens vérifiés : URLs directes enregistrées le 24/07/2026 ; interfaces et rapports doivent être revérifiés avant reprise éditoriale.
Commandes : inspection lecture seule par sed/rg ; aucun compte, crawl, export Search Console, Analytics, Bing ou build utilisé.
Rendu 320 / 390 / 768 / 1024 / 1440 : non exécuté ; cartes de signaux, registre et CTA restent P3/P2.
Metadata/JSON-LD : présence via helper observée, rendu public/OG/canonical non testé.
Statut maximal prouvé : audit local et benchmark documenté.
Réserve publication : aucune donnée client, compte, campagne, log, commit, push ou déploiement manipulé.
```

## Conclusion opérationnelle

Le guide a déjà le bon message : l'indexation n'est pas un résultat commercial et une réécriture générale est souvent la mauvaise première action. Pour devenir la meilleure réponse, il doit compléter sa chaîne par le contexte que vit réellement une entreprise : demande saisonnière, marque contre non-marque, zone locale, catalogue, concurrence, liens, rendu JavaScript, mesure Analytics/CRM et coût d'opportunité.

La position professionnelle est simple : **réparer la mesure avant d'interpréter, réparer le technique avant de réécrire, puis investir page par page selon valeur et demande**. Conserver, améliorer, fusionner, retirer ou attendre sont de bonnes décisions seulement lorsqu'elles sont reliées à une observation, un effort, un signal attendu et une date de revue.
