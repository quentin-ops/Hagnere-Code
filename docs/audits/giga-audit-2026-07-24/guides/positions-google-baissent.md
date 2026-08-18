# Audit approfondi — `positions-google-baissent`

Date : 24 juillet 2026  
Auditeur : audit éditorial, SEO, mesure et diagnostic en lecture seule  
Snapshot : `src/app/guides/positions-google-baissent/page.tsx` inspecté le 24 juillet 2026 ; registre observé avec `datePublished: 2026-07-22`, `dateModified: 2026-07-22`, `readTimeMin: 13`.

## 1. Verdict exécutif

```text
Lecteur exact : dirigeant de TPE/PME, responsable marketing ou indépendant qui voit une courbe Google baisser et doit savoir s'il faut corriger le site, attendre, demander un audit ou protéger l'activité commerciale.
Question réelle : « La baisse est-elle réelle, où se situe-t-elle, quelle cause peut être prouvée et quelle action limite le risque de perdre encore du trafic ou des demandes ? »
Décision attendue : reproduire le constat, segmenter les pages et requêtes, écarter mesure/saison/incident, puis réparer, améliorer, observer ou auditer avec une date de relecture.
Réponse actuelle en une phrase : le guide sépare très bien impressions, clics, CTR et position moyenne, exige des périodes comparables, propose une chronologie, une fiche d'incident et un exemple chiffré ; il doit encore mieux distinguer pertes de positions, impressions, clics et conversions, traiter SERP/local/e-commerce/liens/rendu/spam, et fournir un stop-go 0–24 h/J+7/J+30/J+90.
Défaut qui coûte le plus de valeur : la prudence contre la causalité inventée est excellente, mais l'action prioritaire reste qualitative ; un dirigeant ne sait pas encore à quel niveau de perte, de valeur ou de risque il doit escalader plutôt que simplement attendre.
Niveau actuel : B+.
Priorité : haute.
Statut : audité ; aucun guide source, registre ou fichier Git modifié.
```

### Score avant correction

| Axe | Note /10 | Preuve localisable | Manque décisif |
| --- | ---: | --- | --- |
| Intention | 9 | hero et lead anti-panique, focalisés sur données comparables | distinction conversion/position à afficher plus tôt |
| Décision | 9 | 30 min, 24 h, 7 jours, réparer/améliorer/observer/audit | J+30/J+90, seuils et rollback manquants |
| Pédagogie | 9 | quatre chiffres, agrégation, exemple 24 000→18 000 | SERP/features, local et commerce peu illustrés |
| Profondeur | 8 | saison, anomalies, action manuelle, sécurité, migration, core update | liens, concurrence, JS, canonical/robots et CRM incomplets |
| Preuve | 9 | nombreux liens Google officiels, limites détaillées | Bing et sources internationales absents |
| Comparaison | 7 | pages/pays/appareils, marque/IA avec prudence | marque/non-marque, SERP, local/e-commerce et cohortes stables |
| Originalité | 9 | fiche incident et décomposition additive du calcul | score effort/valeur et seuils d'escalade absents |
| Style | 9 | ton humain, aucun diagnostic automatique de core update | longueur et densité pour un incident urgent |
| Conversion | 8 | CTA action limitée, pas de garantie | livrable, délai, seuil d'intervention peu explicites |
| SEO/produit | 8 | OG explicite, Article/Breadcrumb/FAQ, maillage | `readTimeMin`, rendu, liens et responsive non testés |

Total : **85/100**.

La page est déjà saine parce qu'elle interdit de réécrire au hasard et refuse d'appeler une mise à jour Google « la cause ». Pour dépasser les guides concurrents, elle doit devenir un protocole de triage : incident technique bloquant, migration, action manuelle/sécurité, baisse de demande, SERP/concurrence, contenu/intention, mesure ou conversion.

## 2. Ce que le guide dit réellement

### Progression observée

Le guide demande de confirmer la baisse avec la propriété Search Console, deux périodes comparables et les mêmes filtres. Il distingue ensuite :

1. impressions, clics, CTR et position moyenne ;
2. pages/requêtes/pays/appareils touchés et pages stables ;
3. ligne du temps des publications, titres, URLs, noindex, migrations, pannes et événements Google ;
4. causes liées au site, à la demande ou aux résultats ;
5. exemple fictif avec calcul des variations ;
6. fiche d'incident SEO ;
7. actions réparer, améliorer, observer ou demander un audit.

Le parcours est lisible pour un dirigeant et techniquement prudent. Il reste toutefois centré sur Google Search Console et le contenu. Les symptômes commerciaux (leads, appels, ventes), la mesure Analytics/CRM, la SERP réelle, les liens, le rendu JavaScript, les features locales/produits et la concurrence doivent rejoindre le même diagnostic.

### Ce qui paraît complet sans encore l'être

- « Position moyenne » est correctement relativisée, mais une baisse de position sans baisse d'impressions peut être neutre ou positive selon la requête ; le guide ne montre pas cette matrice.
- Une baisse d'impressions peut venir d'une demande saisonnière, d'un changement de SERP, d'une perte de couverture ou d'une requête de marque moins recherchée ; les branches ne sont pas visualisées.
- Le CTR dépend du type de SERP : annonces, local pack, produits, images, vidéos, featured snippets, People Also Ask et marque. Le guide reste au niveau titre/extrait.
- L'Analytics/CRM n'est presque pas traité : le site peut perdre des conversions avec positions stables, ou afficher une baisse de conversion parce que le tag, le consentement, l'appel ou le formulaire est cassé.
- Les actions manuelles et problèmes de sécurité sont bien cités, mais le guide ne définit pas un STOP immédiat, une préservation des preuves, une personne à notifier ou un retour arrière.
- Le noindex est mentionné ; canonical, robots.txt, codes HTTP, sitemap, rendu JS et liens internes devraient être une checklist unique.
- La migration est reliée à un guide voisin, mais les critères d'incident (chute simultanée d'anciennes URL, 301, sitemap et canonical) ne sont pas décrits.
- Les liens externes, la concurrence et la qualité des preuves sur la SERP ne font pas l'objet d'un contrôle séparé.
- Les mises à jour principales sont bien bornées, mais la timeline s'arrête à 7 jours ; une entreprise a besoin d'une revue J+30/J+90 pour décider de la suite.
- L'exemple chiffre des métriques Search Console mais aucune conversion ni valeur de marge ; le décideur ne peut pas hiérarchiser une page à 10 000 impressions et une page à 20 clics qualifiés.
- « Audit ciblé » n'indique pas son livrable, son délai ni les données nécessaires ; le CTA peut générer des demandes peu qualifiées.

## 3. Benchmark France et international

Recherche effectuée le 24 juillet 2026. Les sources Google/Bing restent prioritaires pour les faits de reporting, d'indexation, d'actions manuelles et de mises à jour. Les pages commerciales locales illustrent les axes traités dans différents marchés, pas une moyenne de performance.

| Ressource et URL directe | Zone | Réponse utile | Preuve / méthode | Limite | Apport à adapter |
| --- | --- | --- | --- | --- | --- |
| [Google — déboguer une baisse de trafic](https://developers.google.com/search/docs/monitor-debug/debugging-search-traffic-drops?hl=fr) | international | comparer Search Console, saison, pages, requêtes et causes avant correction | documentation primaire | ne donne pas de seuil universel | conserver comme socle |
| [Google — mises à jour principales](https://developers.google.com/search/docs/appearance/core-updates?hl=fr) | international | attendre fin de déploiement, analyser pages et ne pas garantir un effet | source officielle | mise à jour ne prouve pas causalité | timeline 0–24/J+7/J+30 |
| [Google — anomalies Search Console](https://support.google.com/webmasters/answer/6211453?hl=fr) | international | distinguer anomalie de données et baisse site | source officielle | une anomalie n'explique pas toutes les chutes | thermomètre avant diagnostic |
| [Google — Search Console Performance](https://support.google.com/webmasters/answer/7576553?hl=fr) | international | clics, impressions, CTR, position, dimensions | aide primaire | rapport et agrégation propres | garder filtres figés |
| [Google — agrégation](https://support.google.com/webmasters/answer/17011364?hl=fr) | international | différences page/propriété et position moyenne | documentation officielle | difficile à lire pour débutant | ajouter avertissement de calcul |
| [Google — actions manuelles](https://support.google.com/webmasters/answer/9044175?hl=fr) | international | rapport explicite, réaction prioritaire | source officielle | action manuelle seulement | branche STOP |
| [Google — problèmes de sécurité](https://support.google.com/webmasters/answer/9044101?hl=fr) | international | piratage/malware/tromperie à traiter avant contenu | source officielle | nécessite réponse spécialisée | préserver preuves et escalader |
| [Google — JavaScript SEO](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics) | international | crawl/rendu/indexation, SSR/prérendu utile | documentation officielle | pas test de l'app réelle | checklist rendu |
| [Google — Trends](https://developers.google.com/search/docs/monitor-debug/trends-start?hl=fr) | international | intérêt relatif, saison et comparaison | source officielle | pas volume exact ni causalité | branche demande |
| [Google Search Status](https://status.search.google.com/) | international | événements généraux à dater | tableau officiel | silence ne disculpe pas le site | chronologie, pas diagnostic |
| [Bing Webmaster Guidelines](https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a) | international | qualité, canonicals, sitemaps, liens crawlables | documentation primaire Bing | moteur différent | comparer Google/Bing |
| [Bing support](https://www.bing.com/webmasters/help/webmaster-support-24ab5ebf) | international | raisons URL absente, robots, doublon, qualité | support officiel | pas seuil universel | incident multi-moteur |
| [Google Analytics — sources](https://support.google.com/analytics/answer/11080067?hl=en) | international | source/medium, attribution, scopes et modèles | documentation officielle | dépend de configuration | distinguer trafic et conversion |
| [Google Analytics — campagnes](https://support.google.com/analytics/answer/11242841?hl=en) | international | UTM, auto-tagging, attribution et referrals | documentation officielle | erreurs de tracking possibles | audit mesure |
| [Search Engine Journal — traffic drop](https://www.searchenginejournal.com/seo/google-ranking-drops/) | US | causes techniques, contenu, liens et update | guide commercial | non primaire | benchmark de couverture seulement |
| [Ahrefs — ranking drop](https://ahrefs.com/blog/google-rankings-drop/) | US/international | segmenter pages/requêtes, concurrence, liens, update | outil commercial | pas preuve Google | axes à comparer |
| [Semrush — ranking drop](https://www.semrush.com/blog/google-rankings-drop/) | US/international | audit technique, contenu, concurrence et liens | fournisseur d'outil | méthode propriétaire | couvrir les angles oubliés |
| [The SEO Works — rankings drop](https://www.seoworks.com/seo-glossary/ranking-drop/) | Royaume-Uni | diagnostic contenu, technique, manuel | agence UK | non institutionnel | benchmark UK |
| [SISTRIX — Sichtbarkeit Verlust](https://www.sistrix.de/frag-sistrix/warum-verliert-meine-domain-sichtbarkeit/) | DACH | visibilité, saison, update, concurrence | source produit allemande | métriques propriétaires | angle DACH |
| [Safari Digital — rankings drop](https://www.safaridigital.com.au/blog/google-ranking-drop/) | Australie | technique, contenu, liens, update et mesure | agence AU | non primaire | angle AU |

### Saturation et enseignements

Les guides commerciaux répètent les mêmes causes. L'avantage du guide actuel est sa prudence et son exemple de calcul. Pour prendre l'avance, il faut apporter une **matrice symptômes → preuves → action → retour arrière**, avec les conversions et la valeur métier, ainsi qu'une timeline après 7 jours.

## 4. Matrice symptômes → preuves → action

| Symptôme | Preuves à croiser | Hypothèses à écarter | Action stop/go |
| --- | --- | --- | --- |
| position moyenne baisse, impressions stables | pages/requêtes, tranches, SERP, pays/device | changement de mix, personnalisation, moyenne | observer ou améliorer page ciblée ; pas refonte |
| impressions baissent, position stable | Trends, saison, demande, couverture, indexation | saison/produit/marché plus calme | vérifier demande et indexation avant contenu |
| impressions et positions baissent sur mêmes pages | canonical, noindex, robots, 5xx, migration, rendu | anomalie Search Console | correction technique prioritaire |
| clics baissent plus que impressions | CTR, title/snippet, features SERP, marque | changement de SERP/annonces | test snippet/UX, sans garantie |
| clics stables, conversions baissent | GA4, consentement, CRM, formulaire, téléphone, offre | attribution et saison commerciale | réparer parcours avant SEO |
| une seule famille/zone baisse | template, service, local, catégorie, concurrence | incident global | audit ciblé par modèle |
| plusieurs moteurs baissent | logs, serveur, contenu, disponibilité | particularité Google | vérifier site/technique avant update |
| Google baisse, Bing stable | requêtes/quality/update/feature Google | mesure ou saison | analyser SERP et page, pas conclure pénalité |
| action manuelle/sécurité signalée | rapports officiels, preuves, logs | simple fluctuation | STOP contenu, escalade spécialisée |
| baisse après migration | anciennes URL, 301, canonical, sitemap, robots | update concomitante | rollback/repair migration |

## 5. Faits et fraîcheur

| Affirmation du guide | Verdict | Source primaire actuelle | Périmètre et date | Correction |
| --- | --- | --- | --- | --- |
| Une mise à jour Google ne prouve pas la cause | confirmé | Google core updates/debug drops | contexte temporel | conserver et ajouter preuve contradictoire |
| Position moyenne n'est pas un rang individuel | confirmé | Google definitions/aggregation | Search Console | conserver |
| Impressions et clics doivent être lus ensemble | confirmé comme méthode | Google performance/debug | rapport organique | conserver |
| Une action manuelle peut toucher une partie ou tout le site | confirmé | Google Manual Actions | Search Console | STOP immédiat |
| Problème sécurité peut concerner piratage/malware/tromperie | confirmé | Google Security Issues | Search Console | STOP/escalade |
| Trends est relatif et anonymisé/catégorisé | confirmé | Google Trends guide | intérêt, pas volume exact | conserver |
| Search Console masque certaines requêtes | confirmé | documentation dimensions/queries | confidentialité et lignes | conserver |
| données récentes peuvent être préliminaires | confirmé | Search Console | date d'extraction | conserver |
| une réécriture massive peut masquer la cause | jugement professionnel raisonnable | méthode d'investigation | avant/après | conserver avec exemple |
| amélioration après update peut n'avoir aucun effet notable | confirmé comme prudence Google | core updates | résultat non garanti | conserver |
| Google Search Status décrit événements généraux | confirmé | status dashboard | incident global | dire non causal |

### Contradictions ou risques de lecture

- La page promet de regarder les « positions » alors qu'une entreprise peut surtout perdre des impressions ou conversions ; le H1 doit mentionner la baisse de visibilité utile, pas uniquement le rang.
- Le délai « 7 jours après update » est utile mais peut être lu comme garantie d'attendre sept jours. Une action manuelle, sécurité, noindex ou panne ne doit pas attendre.
- Le calcul 24 000→18 000 est correct, mais la décomposition 96+96 ne prouve pas la causalité ; l'encadré le dit, mais ce point doit être encore plus visible.
- Une recherche manuelle 3–5 requêtes est utile pour comprendre la SERP, pas pour mesurer une position moyenne ou décider seule.
- Marque/hors marque et IA sont cités comme fonctions récentes ; la page doit dater leur disponibilité et éviter de promettre les mêmes filtres pour chaque propriété.

### Faits à retirer plutôt qu'à affaiblir

- toute attribution d'une baisse à une core update sans pages, dates et contrôle contradictoire ;
- tout seuil de perte « acceptable » universel ;
- toute promesse de récupération après une correction ;
- toute conclusion de pénalité sans rapport Action manuelle/Sécurité ou preuve technique.

## 6. Scénarios, seuils et calculs

Les montants et seuils sont des outils de cadrage, pas des benchmarks ni des promesses.

### Scénario A — page service B2B

Hypothèses : 10 000 impressions/mois, CTR 3 %, 300 clics, taux de conversion 4 %, 300 € de marge par prospect.

| Mesure | Avant | Après hypothétique | Lecture |
| --- | ---: | ---: | --- |
| impressions | 10 000 | 8 000 | −20 % |
| CTR | 3 % | 2 % | −1 point |
| clics | 300 | 160 | −140 / −46,7 % |
| leads | 12 | 6,4 | environ −5,6 |
| marge attendue | 3 600 € | 1 920 € | −1 680 € |

Avant d'investir, vérifier si les impressions baissent par demande/saison, si les positions changent, si le CTR baisse à cause de la SERP et si le suivi de leads fonctionne. L'ordre des effets n'est pas une preuve de cause.

### Scénario B — page locale

Hypothèses : 2 000 impressions locales/mois, 5 % de CTR, 10 % d'actions (appel/itinéraire/formulaire), 200 € de marge.

| Mesure | Avant | Après hypothétique | Action |
| --- | ---: | ---: | --- |
| impressions locales | 2 000 | 1 400 | vérifier zone, fiche, saison |
| clics | 100 | 70 | vérifier pack local et téléphone |
| actions | 10 | 7 | vérifier appels décrochés et tracking |
| marge | 2 000 € | 1 400 € | prioriser local/mesure avant article national |

### Scénario C — e-commerce

Hypothèses : 50 000 impressions, CTR 1,5 %, conversion 1,2 %, marge moyenne 40 €.

| Mesure | Avant | Après | Contrôle |
| --- | ---: | ---: | --- |
| clics | 750 | 500 | SERP produit, prix, stock, titre |
| commandes | 9 | 6 | panier/paiement/flux/analytics |
| marge | 360 € | 240 € | Merchant Center et disponibilité |

Une page produit peut perdre des clics parce que le produit est indisponible, le prix moins compétitif ou le flux cassé, pas parce que le texte est trop court.

### Timeline de décision

| Fenêtre | Contrôle | Stop/Go |
| --- | --- | --- |
| 0–24 h | figer périodes/filtres, anomalies, actions manuelles/sécurité, disponibilité, noindex/canonical/robots, migration et tracking | STOP modification massive si rapport urgent ou rupture technique |
| J+7 | pages/requêtes touchées, pages stables, segments marque/non-marque, pays/device, SERP et Trends | GO correction ciblée si cause observable ; sinon observation bornée |
| J+30 | impressions, positions, CTR, sessions, leads/ventes, logs, indexation et concurrents | décider maintien, nouveau sprint ou audit spécialisé |
| J+90 | tendance saisonnière, récupération, coûts, conversion et dette | consolider, fusionner, migrer ou arrêter l'effort |

Après une core update, conserver la règle Google : attendre la fin du déploiement et au moins une semaine avant une comparaison causale, sauf incident technique, sécurité ou action manuelle qui exige une réaction immédiate.

### Priorité et rollback

```text
Priorité = valeur commerciale (1–5) × étendue de la baisse (1–5)
            × preuve technique de cause (1–5) ÷ effort/risque (1–5).
```

Toute modification doit avoir : hypothèse, pages ciblées, métrique attendue, date de revue, responsable et moyen de revenir à la version précédente. Si le changement touche titre, contenu, navigation et canonical simultanément, il devient difficile de savoir ce qui a aidé.

## 7. Position professionnelle

```text
Option la plus sûre : réparer une action manuelle, sécurité, noindex, canonical, robots, migration ou tracking confirmé avant tout contenu.
Option la plus rentable à tester : page à forte valeur et CTR/intentions clairement faibles, avec une modification limitée et réversible.
Option la moins utile : réécrire tout le site parce qu'une position moyenne a baissé.
Position Hagnéré Code : vendre une investigation bornée, pas un retour de rang ; relier chaque action à des pages, des requêtes, une valeur et un signal attendu.
Ce que nous déconseillons même si nous pourrions le vendre : annoncer « pénalité », imputer une core update, acheter des liens ou promettre une récupération sans preuve.
```

## 8. Objections et cas limites

| Objection loyale | Réponse prouvée | Incertitude | Conséquence |
| --- | --- | --- | --- |
| « Ma position a perdu trois places, tout est grave. » | le trafic et la valeur peuvent être stables ou variables | requête et SERP | regarder impressions/clics/conversions |
| « Le trafic baisse, donc mes positions baissent. » | demande, saison, SERP ou mesure peuvent expliquer | cause | comparer les quatre chiffres |
| « Google a lancé une update, c'est certain. » | date est un indice, pas preuve | pages et timing | attendre/diagnostiquer sans causalité |
| « J'ai zéro lead, le SEO est coupable. » | tracking, formulaire et vente peuvent casser | attribution | tester Analytics/CRM et parcours |
| « Je change tous les titles maintenant. » | modification massive masque la cause | pages touchées | tester quelques pages, rollback |
| « Les liens ne comptent plus. » | autorité externe et contenu sont distincts | qualité des liens | inventaire et risque séparés |
| « Le local marche comme le national. » | zone, fiche établissement, appels et avis changent l'intention | marché local | branche locale dédiée |
| « Mes produits sont indexés, donc ils devraient vendre. » | stock, prix, flux, paiement et confiance comptent | économie | audit e-commerce |
| « Une action manuelle est juste une baisse algorithmique. » | le rapport dédié change le niveau d'urgence | rapport réel | STOP et escalade |

## 9. Plan de réécriture

| Ordre | Section proposée | Question résolue | Preuve / outil | Décision produite | Conserver / créer / couper |
| ---: | --- | --- | --- | --- | --- |
| 1 | « Quelle courbe baisse ? » | position, impressions, clics ou conversions ? | chaîne métriques | priorité | conserver lead, créer schéma |
| 2 | « 0–24 h » | y a-t-il incident ou action urgente ? | anomalies, noindex, sécurité, manuel, migration | STOP/GO | créer timeline |
| 3 | « Où et pour qui ? » | pages, requêtes, pays/device, marque/non-marque | segments Search Console/Analytics | localiser | ajouter ratios |
| 4 | « Quelle SERP ? » | titre, CTR, features, concurrence | recherche datée et captures | tester snippet/contenu | créer grille |
| 5 | « Technique » | canonical, robots, JS, codes, liens, schema | inspection/crawl/logs | réparer | ajouter checklist |
| 6 | « Demande et concurrence » | saison, Trends, marché et offre | période comparable, CRM | attendre/recentrer | enrichir |
| 7 | « Local/e-commerce » | appels, fiche, produits, flux, panier | GBP/Merchant/Analytics | sprint spécialisé | créer encadrés |
| 8 | « Calculer l'impact » | combien de valeur perdue ? | clics×conversion×marge | prioriser | conserver exemple, ajouter marge |
| 9 | « J+7/J+30/J+90 » | quand décider ? | indicateurs et rollback | consolider/arrêter | étendre timeline |
| 10 | CTA | que recevra l'audit ? | fiche, exports, recommandations | demande qualifiée | préciser livrable |

### Contrat des 150 premiers mots

> Vous voyez une position moyenne baisser et vous craignez que Google ait « puni » votre site. Avant de changer vos pages, séparez quatre choses : les impressions, les clics, le taux de clics et la conversion réelle. Une baisse d'impressions peut venir de la demande ou de la saison ; une baisse de CTR peut venir de la page de résultats ; une baisse de leads peut venir d'un formulaire ou d'un suivi cassé ; une baisse simultanée de plusieurs familles peut révéler un noindex, une canonical, une migration, une panne, une action manuelle ou un problème de sécurité. Dans ce guide, vous trouverez une chronologie 0–24 heures, J+7, J+30 et J+90, un diagnostic Google/Bing, des branches local et e-commerce, des scénarios chiffrés et une règle de rollback. Une mise à jour Google est une date à vérifier, pas une cause automatique. Aucune position, récupération de trafic ou conversion ne peut être promise.

### Éléments à supprimer ou déplacer

- déplacer la fiche courte et les rapports urgents avant les développements théoriques ;
- regrouper noindex/canonical/robots/rendu/migration en arbre technique ;
- ajouter Analytics/CRM et SERP à côté des quatre métriques Search Console ;
- ne pas traiter la core update dans un encadré qui pourrait retarder un problème manuel ou de sécurité ;
- transformer les trois délais actuels en timeline 0–24/J+7/J+30/J+90.

### Éléments à conserver

- prudence « ne changez rien à grande échelle » ;
- périodes et filtres comparables ;
- définition des quatre chiffres et agrégation ;
- anomalies, actions manuelles, sécurité et core updates ;
- exemple 24 000→18 000 et avertissement sur causalité ;
- fiche d'incident, pages stables et rollback ;
- CTA sans garantie de position.

## 10. Contre-audit après correction

Ce tableau décrit les corrections attendues ; aucune n'a été appliquée dans cette mission.

| ID | Problème | Priorité | Correction attendue | Revalidation indépendante |
| --- | --- | --- | --- | --- |
| P0-01 | Aucun risque critique ou promesse abusive repéré | P0 | aucune | relecture Search Central et mesure |
| P1-01 | Chaîne position/impression/clic/conversion non schématisée | P1 | arbre et métriques séparées | test avec cas réel |
| P1-02 | Timeline 0–24/J+7/J+30/J+90 incomplète | P1 | indicateurs, seuils, responsables, rollback | simulation de baisse |
| P1-03 | Incident technique/migration/noindex/canonical/robots/JS non regroupés | P1 | checklist technique prioritaire | inspection/crawl/rendu |
| P1-04 | SERP/features/concurrence/liens externes absents | P1 | capture/benchmark et inventaire backlinks | revue par requête |
| P1-05 | Marque/non-marque, local et e-commerce incomplets | P1 | ratios, GBP, appels, produits, flux, panier | scénarios spécialisés |
| P1-06 | Analytics/CRM/conversions/consentement absents | P1 | sessions, key events, UTM, attribution et vérification | test de parcours |
| P1-07 | Seuils et priorisation valeur/effort absents | P1 | score, sensibilité et coût de marge | recalcul indépendant |
| P1-08 | Stop-go et rollback insuffisamment écrits | P1 | actions immédiates, modification bornée, retour arrière | exercice J+7 |
| P1-09 | Causalité core update encore difficile à lire | P1 | contrôle contradictoire et condition d'attente | relecture anti-causalité |
| P1-10 | CTA sans livrable/durée/données requises | P1 | audit borné, fiche, exports, rapport et date | test conversion |
| P2-01 | Benchmark FR/US/UK/AU/DACH/Bing absent | P2 | sources officielles et limites commerciales | rouvrir sources |
| P2-02 | `readTimeMin: 13` à recalculer après enrichissement | P2 | recalcul registre/texte | contrôle final |
| P2-03 | Metadata/JSON-LD/OG helper non validés publiquement | P2 | canonical, Article, Breadcrumb, FAQ, OG | navigateur/crawler |
| P2-04 | Responsive de fiche/tableaux non vérifié | P2 | QA 320–1440 | captures réelles |
| P2-05 | Ressource téléchargeable absente | P2 | fiche incident + arbre métriques | téléchargement |
| P2-06 | Logs serveur et données Bing non intégrés | P2 | sources et fenêtres de rétention | revue technique |
| P2-07 | Accessibilité, mobile et conversion UX faibles | P2 | test formulaire/CTA/lecture mobile | audit UX |
| P2-08 | Formats SERP local/produit/vidéo peu détaillés | P2 | exemples et schema | revue par type |
| P2-09 | Mise à jour des sources et dates non automatisée | P2 | registre date/source | contrôle de fraîcheur |
| P2-10 | Maillage vers guide maintenance/refonte peu priorisé | P2 | ancres par cause | test parcours |

### Portes explicites

```text
P1 — PRÉSENTE MAIS INCOMPLÈTE : NO-GO tant que P1-01 à P1-10 ne sont pas fermés et testés.
P2 — À CORRIGER : benchmark, ressource, QA, Bing, logs, local/e-commerce et mesure restent requis.
P3 — REJETÉE / NON VALIDÉE : aucun compte Search Console/Analytics/Bing, log, crawl, rendu, SERP ou conversion réelle n'est prouvé ici.
P4 — REJETÉE / NON VALIDÉE : aucune récupération de position, trafic, conversion ou attribution à une update ne peut être déclarée.
```

### Score cible après correction

| Axe | Cible /10 | Condition de passage |
| --- | ---: | --- |
| Intention | 10 | lecteur sait quoi mesurer et protéger dans l'heure |
| Décision | 10 | timeline, stop-go, valeur et rollback |
| Pédagogie | 10 | métriques et causes séparées avec exemples |
| Profondeur | 10 | technique, contenu, SERP, concurrence, local, commerce, mesure |
| Preuve | 10 | Google/Bing/Analytics officiels et causalité bornée |
| Comparaison | 9 | segments, moteurs, types de page et contexte |
| Originalité | 10 | fiche, calcul, priorisation et horizon 90 jours |
| Style | 10 | humain, précis, non anxiogène |
| Conversion | 9 | audit ciblé avec livrable et limites |
| SEO/produit | 9 | FAQ, schema, metadata, maillage, ressource et QA |

Total cible : **97/100**. Cette cible évalue la qualité de l'investigation, pas un résultat Google.

## 11. Preuves techniques et visuelles

```text
Manifeste : src/app/guides/positions-google-baissent/page.tsx ; entrée src/lib/guides.ts.
Constats source : metadata OG explicite, Twitter image, robots guideRobots, Article/Breadcrumb JSON-LD, 5 FAQ, 9 sections TOC, tables quatre chiffres/calculs, fiche d'incident, CTA et maillage interne.
Registre : datePublished/dateModified 2026-07-22, readTimeMin 13 ; aucun registre modifié.
Calculs refaits : 24 000→18 000 impressions, 480→288 clics, CTR 2→1,6 %, position 5,8→8,4 ; scénarios marge locaux/B2B/e-commerce illustratifs.
Sources rouvertes : Google performance/aggregation/debug drops/core updates/anomalies/manual actions/security/Trends/JS ; Bing Guidelines/support ; Analytics sources/campaigns ; benchmark FR/US/UK/AU/DACH borné.
Liens vérifiés : URLs directes enregistrées le 24/07/2026 ; tableaux de bord et aides Google doivent être revérifiés avant réécriture.
Commandes : inspection lecture seule par sed/rg ; aucun compte Search Console/Analytics/Bing, log, crawl, build ou déploiement utilisé.
Rendu 320 / 390 / 768 / 1024 / 1440 : non exécuté ; fiche, tableaux et CTA restent P3/P2.
Metadata/JSON-LD : présence statique observée ; canonical publique, OG, FAQ et Article non validés en ligne.
Statut maximal prouvé : audit local et benchmark documenté.
Réserve publication : aucun clic, impression, position, conversion, compte, campagne, commit, push ou déploiement manipulé.
```

## Conclusion opérationnelle

Le guide possède déjà la bonne discipline : ne pas confondre une courbe avec une cause, comparer les mêmes filtres, vérifier les rapports urgents et ne pas réécrire tout le site. Pour devenir une référence, il doit faire passer la conversion et le contexte métier au même niveau que Search Console : SERP, saison, marque, concurrence, local, e-commerce, liens, rendu, Analytics et CRM.

La recommandation est nette : **réparer d'abord les obstacles prouvés, mesurer ensuite, améliorer une page à la fois, et attendre seulement avec un signal et une date**. Une mise à jour Google peut expliquer le calendrier de l'enquête ; elle ne doit jamais servir de diagnostic automatique ni de promesse de récupération.
