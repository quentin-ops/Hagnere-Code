# Audit approfondi — `migrer-wordpress-vers-nextjs`

Date : 24 juillet 2026

Auditeur concurrentiel : contrôle éditorial, factuel, conversion et SEO

Snapshot du guide : `src/app/guides/migrer-wordpress-vers-nextjs/page.tsx` (1 010 lignes, 4 796 mots), `opengraph-image.tsx`, registre `src/lib/guides.ts` ; hashes relevés le 24/07/2026 : page `f608cda7…5b73c`, image `eafa4da8…d672`, registre `8663e6e8…cb09`.

## 1. Verdict exécutif

```text
Lecteur exact : dirigeant de TPE/PME ou indépendant qui possède un WordPress
                lent, fragile, coûteux à maintenir ou devenu limitant ; il ne
                veut pas choisir une technologie, mais éviter une mauvaise
                dépense et protéger ses demandes entrantes.
Question réelle : « Est-ce que je dois réparer WordPress, le garder comme CMS,
                  ou financer une reconstruction en Next.js ? Que vais-je
                  perdre, combien cela coûte réellement et comment éviter une
                  baisse de trafic ou une interruption commerciale ? »
Décision attendue : comparer conserver, réparer, headless et migration complète
                   sur le même périmètre, puis demander un inventaire chiffré.
Réponse actuelle en une phrase : le guide déconseille la migration réflexe,
  distingue trois architectures, donne des fourchettes Hagnéré, traite les
  extensions, WooCommerce, le SEO, le TCO et le contrat ; il reste toutefois
  trop peu opératoire sur la preuve de départ, la bascule et le retour arrière.
Défaut qui coûte le plus de valeur : le lecteur sait quoi regarder, mais ne peut
  pas encore exécuter un go/no-go documenté avec seuils, propriétaires, RPO/RTO,
  matrice de redirections et trois budgets à périmètre identique.
Niveau actuel : B
Priorité : haute
Statut : audité ; aucune réécriture du guide effectuée dans cet audit
```

### Score avant correction

| Axe         | Note /10 | Preuve localisable | Manque décisif |
| ----------- | -------: | ------------------ | -------------- |
| Intention   | 9 | Intro et encadré « quatre questions », lignes 227–251 | Le résultat métier doit être encore plus concret (leads, ventes, temps d’édition). |
| Décision    | 8 | Comparatif des options, lignes 311–344 et 834–885 | Pas de matrice pondérée ni de seuil go/no-go. |
| Pédagogie   | 8 | Définitions de migration, headless, Git et TCO | Le runbook de bascule n’est pas expliqué à un non-technicien. |
| Profondeur  | 8 | 10 sections, extensions, WooCommerce, contrat | Export, delta de contenu, cache, preview et rollback restent de niveau inventaire. |
| Preuve      | 8 | Google, WordPress, CNIL, Légifrance, lignes 346–359 et 941–1005 | Les mesures d’un site réel et les dates de vérification manquent. |
| Comparaison | 7 | Trois architectures et cinq cas où garder WP | Périmètres et coûts internes non alignés ; headless, refonte WP et Next complet ne sont pas chiffrés à fonctions égales. |
| Originalité | 8 | Position anti-migration réflexe et grille publique annoncée | Aucun cas documenté, même anonymisé, ne matérialise un arbitrage. |
| Style       | 8 | Ton prudent, phrases compréhensibles, objections loyales | Quelques paragraphes restent descriptifs au lieu de faire décider. |
| Conversion  | 7 | CTA final et grille 6 900 / 14 900 / 22 000 €+, lignes 785–797 et 936–939 | Preuve de résultat et livrable concret de l’audit à demander plus visibles. |
| SEO/produit | 8 | Canonical, JSON-LD Article/Breadcrumb, FAQ, OG file-based | Head/rendu, robots staging, sitemap et indexation n’ont pas été testés dans ce snapshot. |

Total : **79/100**

Le score est volontairement inférieur à celui d’un guide « technique complet » : la
longueur et les dix sections ne compensent pas l’absence d’un protocole de décision
reproductible. Le document est publiable comme orientation, pas encore comme
référence exhaustive de migration à risque.

## 2. Ce que le guide dit réellement

- Dans les 150 premiers mots, il répond déjà correctement : ne pas migrer pour un
  simple âge du site ou un score moyen ; comparer réparation, hébergement et
  migration ; mesurer vitesse, sécurité, évolution et coût d’outil.
- La progression suit une logique de dirigeant : nécessité, raisons, trois
  architectures, fonctions qui cassent, WooCommerce, SEO, calendrier, budget/TCO,
  cas où conserver WordPress, puis contrat et CTA.
- Les calculs présents sont des fourchettes Hagnéré (4 000–9 000 € vitrine,
  9 000–20 000 € site à contenu, 20 000–50 000 €+ boutique) et une formule de
  TCO sur trois ans. Ils sont honnêtement présentés comme scénarios, pas comme
  moyennes de marché (lignes 286–301 et 730–832).
- Les comparaisons utiles sont l’architecture headless, le nouvel outil éditorial,
  le contenu dans le code, la conservation de WordPress et trois options pour
  WooCommerce. La comparaison n’est pas encore « même contenu + mêmes fonctions +
  même niveau de support » dans un tableau unique.
- Le guide cite les sources primaires et affiche « consultées en juillet 2026 ».
  Il ne donne pas une date par affirmation, ni la méthode de mesure d’un site
  avant/après, ni une capture de crawl.
- Le bon fit est une contrainte mesurée de vitesse, sécurité, maintenance ou
  évolutivité ; le mauvais fit est un WordPress récent, rapide, bien maintenu,
  une équipe éditoriale exigeante ou une boutique très imbriquée.
- Le CTA demande l’URL, les difficultés et le mode de publication. Il ne précise
  pas explicitement le livrable de première étape (inventaire, matrice d’URL,
  estimation écrite, ou simple échange), ce qui réduit la conversion qualifiée.

Ce qui paraît complet mais n’aide pas encore assez à décider : la liste des
extensions à remplacer, les cinq étapes temporelles et les fourchettes de budget.
Sans seuils d’acceptation (zéro formulaire critique perdu, 100 % des URLs
prioritaires testées, temps éditorial inférieur à X minutes, RTO défini), le lecteur
ne sait pas quand signer, reporter ou arrêter.

## 3. Benchmark France et international

Requêtes, pays, langues et date : recherches en français et en anglais sur
« WordPress to Next.js migration », prix, SEO, checklist et headless ; France,
États-Unis, Royaume-Uni, Australie ; 24/07/2026. Les pages commerciales servent à
repérer les angles et non à prouver leurs chiffres.

| Ressource et URL directe | Pays | Réponse utile | Preuve, outil ou exemple | Limite | Apport à vérifier ou adapter |
| ------------------------ | ---- | ------------- | ------------------------ | ------ | ---------------------------- |
| [Go To Agency — Migration WordPress vers Next.js](https://go-to-agency.com/migration-wordpress-nextjs) | France | Parcours par niveaux (vitrine, business, enterprise), formations, support et i18n | Offre structurée et promesse de migration | « ×10 », « garantie sans perte SEO » et statistiques affichées sans méthode primaire | Ajouter une grille de périmètre et refuser toute garantie SEO ; expliciter le support, l’i18n et le volume de pages. |
| [NextJs Agency — WordPress to Next.js Migration](https://www.nextjsdev.agency/services/wordpress-to-nextjs-migration) | États-Unis | Audit, contenu, build, migration, SEO, lancement et deux semaines de support | Processus en six étapes ; fourchette 7 000–25 000 $+ | « 2–5x » et gains SEO non démontrés ; pas de scénario de rollback détaillé | Reprendre la chaîne en six étapes avec critères d’acceptation et distinguer amélioration technique d’effet business. |
| [MigrateLab — complete guide](https://migratelab.com/resources/wordpress-to-nextjs-complete-guide) | États-Unis / anglophone | Architecture, performance, CMS, migration et compromis | Guide phase par phase avec distinction PME/entreprise | Extrait visible peu chiffré ; crédibilité d’entreprises citées non suffisante pour un cas PME | Ajouter une fiche « preuve de départ » et une estimation de temps interne. |
| [AETHUS — guide pour PME britanniques](https://aethus.co.uk/posts/migrating-from-wordpress-to-next-js-a-step-by-step-guide-for-uk-smes) | Royaume-Uni | Inventaire CPT, intégrations, CWV, TTFB, 404, canonicals, plan de redirections | Checklist orientée propriétaire de site, objectifs mesurables | Pas de modèle de budget ni de calcul de coût d’opportunité | Transformer ces métriques en tableau avant/après avec responsable et seuil d’alerte. |
| [John Kavanagh — checklist content, preview and SEO](https://johnkavanagh.co.uk/articles/wordpress-to-nextjs-migration-checklist/) | Royaume-Uni | Médias, taxonomies, champs, shortcodes, preview, habitudes éditoriales | Checklist centrée sur les comportements oubliés | Pas de prix ni de décision financière ; page commerciale connexe | Ajouter une matrice « fonctionnalité → remplacement → test → propriétaire ». |
| [Stack2 — Next.js sur infrastructure australienne](https://stack2.au/nextjs) | Australie | Headless WP + Next.js, hébergement, résidence des données, SSL et opérations | Cas d’usage, localisation et séparation CMS/front | Page d’hébergement, pas guide indépendant ; affirmations fournisseur | Ajouter un encadré sur hébergement, transferts, sous-traitants et data residency sans présenter l’Australie comme règle RGPD. |

Saturation : les concurrents répètent tous audit → contenu → build → redirections →
surveillance et promettent vitesse/SEO. L’information supplémentaire qui apporte
encore un vrai gain n’est donc pas une septième liste d’étapes : c’est un cas chiffré
reproductible, une grille de décision à poids, un protocole de bascule/retour arrière,
et une preuve de l’expérience éditoriale. Les promesses « garantie », « ×10 » ou
« rankings improved » doivent rester des claims concurrents, jamais des faits repris.

## 4. Matrice de gain d’information

| Question décisive | Meilleure réponse française | Apport international | Couverture actuelle | Manque | Réponse supérieure à produire |
| ----------------- | --------------------------- | -------------------- | ------------------- | ------ | ----------------------------- |
| Le problème vient-il de WordPress ou d’un hébergement/plug-in ? | Le guide demande de mesurer et de chiffrer une réparation | AETHUS impose CWV, TTFB, 404 et inventaire | Partielle | Pas de feuille de mesures ni seuil de bascule | Tableau d’entrée : LCP/INP/CLS, formulaires, incidents, temps éditorial, licences, seuils. |
| Que migre-t-on exactement ? | Extensions, constructeurs, médias, SEO, WooCommerce sont cités | Kavanagh insiste sur taxonomies, shortcodes, preview et habitudes | Bonne mais dispersée | Pas de matrice par élément ni test d’acceptation | Inventaire « conserver / reconstruire / supprimer / test / responsable ». |
| Quel montage éditorial choisir ? | Trois architectures et test de l’éditeur | MigrateLab et Stack2 détaillent CMS/headless et hosting | Bonne | Preview, webhook, cache, panne de build et sortie fournisseur manquent | Parcours d’une publication réelle, délais de prévisualisation et plan de secours. |
| Combien cela coûte réellement ? | Fourchettes et formule de TCO | SEOParity propose audit de 490 $ à 50 000 $+ selon périmètre | Moyenne | Aucun scénario complet avec heures internes, licences et risque | Trois cas identiques sur 36 mois, sensibilité au volume de pages et support. |
| Comment protéger le trafic ? | URLs, 301, Search Console, surveillance 30–60 jours | Google recommande mapping, redirections, étapes et fluctuations | Bonne base | Pas de crawl/acceptance matrix, staging noindex, hreflang/schema, logs | Checklist de lancement avec seuils : 0 noindex public, 100 % URLs prioritaires, 0 formulaire critique perdu. |
| Quand ne pas migrer ? | Cinq cas explicites | Les concurrents vendent plus souvent la migration | Très bonne | Manque un calcul du coût d’opportunité du changement éditorial | Comparer temps interne mensuel et valeur d’une publication retardée. |
| Que reçoit le client en sortie ? | Contrat, accès, code, données, rollback | Les pages UK incluent support et formation | Partielle | Livrables datés et procédure de réversibilité non listés | Annexe de contrat : exports, accès, runbook, tests et fenêtre de support. |

## 5. Faits et fraîcheur

| Affirmation du guide | Verdict | Source primaire actuelle | Périmètre et date | Correction |
| -------------------- | ------- | ------------------------ | ----------------- | ---------- |
| L’export WordPress couvre posts, pages, CPT, commentaires, champs, catégories, tags, taxonomies et utilisateurs | confirmé, avec réserve sur la restitution visuelle | [WordPress Tools Export](https://wordpress.org/documentation/article/tools-export-screen/) | Documentation officielle, mise à jour 08/06/2024, consultée 24/07/2026 | Dire explicitement que l’export WXR ne reconstruit ni le rendu Elementor/Divi, ni les intégrations, ni les médias externes sans contrôle. |
| Une migration Next.js peut améliorer vitesse et liberté mais n’élimine ni maintenance ni failles | confirmé et correctement nuancé | [Next.js production checklist](https://nextjs.org/docs/app/guides/production-checklist) | Documentation officielle, mise à jour 27/02/2026 | Conserver la nuance ; ajouter que le cache, les erreurs et la sécurité restent à opérer. |
| En multi-instance, le cache/revalidation Next.js nécessite une stratégie partagée | confirmé, absent du guide | [Next.js self-hosting](https://nextjs.org/docs/app/guides/self-hosting) et [déploiement plateformes](https://nextjs.org/docs/app/guides/deploying-to-platforms) | Documentation officielle, mise à jour 2026 | Ajouter un encadré opérationnel si l’architecture n’est pas un simple site statique. |
| Google recommande mapping, redirections permanentes, Search Console, étapes et surveillance ; des fluctuations sont possibles | confirmé | [Google Search Central — site moves](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes) | Documentation officielle, mise à jour récente, consultée 24/07/2026 | Le guide est juste ; traduire les recommandations en seuils vérifiables et distinguer changement d’URL d’infrastructure sans changement d’URL. |
| Les Core Web Vitals ou la page experience garantissent un meilleur classement | le guide ne le prétend pas ; vigilance nécessaire | [Google Page Experience](https://developers.google.com/search/docs/appearance/page-experience) | Documentation officielle, mise à jour 10/12/2025 | Conserver « peut contribuer » et interdire toute promesse de position ou de trafic. |
| Les fourchettes 4 000–9 000 €, 9 000–20 000 €, 20 000–50 000 €+ représentent le marché | invérifiable comme moyenne ; correctement marqué scénario Hagnéré | aucune source primaire de marché fournie | Scénarios internes, juillet 2026 | Ajouter les hypothèses (pages, gabarits, heures, fonctions, support) et un contrôle par devis comparable. |
| L’article L131-3 encadre la cession des droits | à vérifier juridiquement au cas par cas ; orientation correcte | [Légifrance, art. L131-3 CPI](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958) | Texte officiel ; validation juridique non effectuée | Maintenir l’avertissement et recommander une validation professionnelle, sans transformer l’article en conseil juridique. |

### Contradictions

- Le guide dit à juste titre que garder les URLs réduit un risque ; cela ne doit pas
  devenir « migration sans risque ». Le contrôle doit aussi porter sur le HTML rendu,
  canonicals, robots, données structurées, médias, liens, formulaires et mesures.
- « 30 à 60 jours » est une enveloppe de surveillance, pas une durée suffisante dans
  tous les cas : Google indique que le recrawl et la réindexation varient selon la
  taille et le serveur. Présenter cette période comme un minimum adaptable.
- « Deux environnements » en headless n’est pas automatiquement moins sûr ou plus
  cher : le coût dépend du cache, du preview, des builds, du support et du niveau de
  disponibilité. Le guide doit éviter la généralisation.

### Faits à retirer plutôt qu'à affaiblir

- Toute promesse de « zéro perte SEO », « ×10 plus rapide » ou d’absence de baisse de
  trafic, même si elle apparaît dans une page concurrente.
- Tout bénéfice financier présenté sans inclure licences, temps de publication,
  maintenance, services tiers et coût d’une interruption.
- Toute implication que Next.js supprime les mises à jour, les vulnérabilités ou la
  nécessité d’un responsable technique.

## 6. Scénarios et calculs à construire

Le guide contient une formule générale, mais aucun cas calculé de bout en bout. Il
faut ajouter des exemples explicitement illustratifs, avec mêmes fonctions, mêmes
36 mois et temps interne valorisé. Les montants ci-dessous sont des hypothèses de
travail, pas des prix affichés comme vérité de marché.

| Variable | Simple | Central | Exigeant | Source ou hypothèse |
| -------- | -----: | ------: | -------: | ------------------- |
| Périmètre | 20 pages, 1 formulaire, 1 personne éditrice | 180 articles, 4 gabarits, 3 éditeurs, analytics/CRM | 1 500 pages, CPT, 3 langues, WooCommerce et ERP | Hypothèses à remplacer par inventaire. |
| Scénario conservation/réparation sur 36 mois | 3 600 € | 14 400 € | 54 000 € | 100/400/1 500 € mensuels tout compris, à vérifier par factures. |
| Migration et mise en ligne | 6 900 € | 14 900 € | 35 000 € | Repères de grille Hagnéré et scénario complexe ; devis non engagé. |
| Hébergement + services sur 36 mois | 1 080 € | 2 700 € | 10 800 € | 30/75/300 € mensuels illustratifs ; confirmer offre et volume. |
| Temps éditorial/formation additionnel | 10 h | 50 h | 240 h | Valoriser au coût horaire interne choisi par l’entreprise. |
| Réserve incidents/retours | 690 € | 1 490 € | 7 000 € | 10–20 % de la migration, hypothèse prudente à présenter comme telle. |

```text
TCO 36 MOIS = chantier + hébergement/services + maintenance + temps interne
              + réserve d’incidents + coûts de sortie éventuels
Économie nette = TCO conservation - TCO migration
Seuil de rentabilité (mois) = surcoût initial / économie mensuelle récurrente
Horizon : 36 mois ; fonctions et niveau de support identiques.
Inclus : audit, migration, contenus, redirections, tests, formation, exploitation.
Exclus : chiffre d’affaires futur non démontré, TVA, licence d’un CMS non choisi,
         coût d’un arrêt réel, refonte éditoriale non prévue.
Résultat : ne pas conclure avant d’avoir rempli les variables réelles.
Analyse de sensibilité : ±30 % sur pages difficiles, heures éditoriales, support,
                         incidents et coût de publication.
Variable qui fait basculer la décision : volume de gabarits/exception et temps
                                  mensuel de maintenance, pas le framework seul.
Contrôle inverse : si l’amélioration de conversion n’est pas mesurée, la décision
                   doit rester justifiée par risque, coût ou capacité métier.
```

Exemple pédagogique à intégrer : une vitrine de 20 pages qui coûte 1 200 €/an en
maintenance et ne publie que quatre fois par an n’a pas intérêt à migrer pour gagner
un score Lighthouse. À l’inverse, un site éditorial qui perd 20 heures de production
par mois à cause du système actuel doit valoriser ces 240 heures annuelles et tester
le futur éditeur avant de comparer les frameworks.

## 7. Comparaison et position professionnelle

```text
Options réellement comparables :
  A. garder WordPress + corriger hébergement/extensions ;
  B. refondre WordPress sans changer de CMS ;
  C. WordPress headless + Next.js ;
  D. nouveau CMS + Next.js ;
  E. contenu versionné dans le code pour petite vitrine.
Périmètre et horizon communs : mêmes pages, formulaires, analytics, langues,
  niveau de support, plan SEO et 36 mois de coût total.
Option la moins chère : généralement A pour site récent/simple ; à prouver par factures.
Option la moins risquée : A ou B lorsque les URLs, l’éditeur et les intégrations
  fonctionnent déjà ; C/D ajoutent une migration et deux chaînes à opérer.
Option qui demande le moins de temps interne : celle dont l’éditeur a été testé par
  l’équipe ; ce n’est pas automatiquement WordPress ni un CMS headless.
Position Hagnéré Code pour le cas fréquent : diagnostiquer et chiffrer la réparation
  avant de vendre une migration ; proposer Next.js si un problème mesuré persiste et
  si le client accepte un processus de build, de QA et de maintenance explicite.
Faits qui la fondent : recommandations Google sur les migrations, documentation
  WordPress sur l’export, documentation Next.js sur cache/déploiement, et TCO rempli.
Cas où l’option opposée gagne : publication quotidienne, WooCommerce critique,
  budget sans inventaire/rollback, ou WordPress déjà rapide et maîtrisé.
Signal de révision : 404, formulaires perdus, indexation en baisse, temps d’édition
  supérieur au baseline, cache incohérent ou support plus coûteux que prévu.
Ce que nous déconseillons même si nous pourrions le vendre : migration déclenchée par
  un score isolé, garantie de classement, forfait sans URL map, ou bascule sans retour.
```

## 8. Objections et cas limites

| Objection loyale | Réponse prouvée | Ce qui reste incertain | Conséquence |
| ---------------- | --------------- | ---------------------- | ----------- |
| « Mon WordPress est lent : Next.js réglera tout. » | Next.js offre des possibilités de rendu/cache ; Google dit que CWV n’est pas une garantie de classement. | La cause peut être images, hébergement, scripts ou conversion. | Mesurer page par page et chiffrer une réparation avant migration. |
| « Je dois garder Elementor pour publier. » | Le guide explique que les gabarits ne se transfèrent pas automatiquement. | Le futur CMS, le preview et le temps d’apprentissage sont inconnus. | Test d’un article et d’une landing page par chaque rôle éditorial. |
| « Je ne peux pas perdre une commande. » | WooCommerce est séparé et les paiements/comptes/stocks exigent un audit. | RPO/RTO, delta de commandes et intégrations ERP ne sont pas définis. | Fenêtre de gel, double contrôle et rollback obligatoire avant DNS. |
| « Une agence me promet zéro perte SEO. » | Google prévoit des fluctuations pendant recrawl/réindexation. | Amplitude et durée dépendent du site. | Refuser la garantie ; exiger URL map, tests et support post-lancement. |
| « Le prix le plus bas est 3 500 €. » | Le périmètre fait varier gabarits, contenu, intégrations et contrôle. | Le devis peut exclure SEO, QA, formation ou rollback. | Comparer quatre lignes et livrables identiques, pas le chiffre seul. |
| « Je veux changer d’agence dans un an. » | Le contrat doit prévoir code, données, comptes, documentation et sortie. | Portabilité réelle des services tiers et CMS. | Tester un export/import et inscrire le coût de sortie. |
| « Mon site cible plusieurs pays. » | Les langues sont citées comme décision explicite. | Hreflang, domaines, consentement et données hors UE ne sont pas détaillés. | Ajouter une matrice pays/langue/URL/canonical/hreflang/hébergement. |

## 9. Plan de réécriture

| Ordre | Section proposée | Question résolue | Preuve, scénario ou outil | Décision produite | À conserver / créer / couper |
| ----: | ---------------- | ---------------- | ------------------------- | ----------------- | ---------------------------- |
| 1 | « En 5 minutes : réparer, garder, headless ou migrer ? » | Suis-je concerné ? | Arbre de décision avec vitesse, sécurité, publication, commerce, budget | Go / diagnostic / non | Conserver l’intro ; créer l’arbre. |
| 2 | Baseline avant toute dépense | Que mesurer ? | Tableau URL, CWV, formulaires, leads, licences, incidents, temps éditorial | Problème mesuré ou non | Créer feuille d’inventaire ; couper les adjectifs généraux. |
| 3 | Les cinq architectures en périmètre égal | Que compare mon devis ? | Tableau fonctions, équipe, coûts 36 mois, sortie | Option gagnante pour le cas | Étendre les trois architectures ; ajouter refonte WP et Woo séparé. |
| 4 | Ce qui migre vraiment | Qu’est-ce qui casse ? | Matrice CPT, médias, shortcodes, SEO, auth, formulaires, webhooks, preview | Chaque ligne a un responsable/test | Conserver les exemples Elementor/Divi ; créer une checklist. |
| 5 | Budget simple/central/exigeant | Combien prévoir ? | Trois TCO chiffrés, heures internes, sensibilité ±30 % | Budget à demander | Conserver les scénarios Hagnéré, les rendre auditables. |
| 6 | Runbook de bascule | Comment éviter l’incident ? | TTL, gel, sauvegarde, delta, DNS sans mail, smoke tests, rollback trigger | Feu vert ou retour | Créer une chronologie minute par minute et RPO/RTO. |
| 7 | SEO et indexation après lancement | Que surveiller ? | Crawler, status, canonical, robots, sitemap, schema, GSC, logs, 30/60/90 jours | Maintien / correction / rollback | Garder les liens Google ; ajouter seuils et propriétaires. |
| 8 | Édition et continuité | Mon équipe pourra-t-elle travailler ? | Test réel publication/preview/rollback, formation, plan B | CMS validé par l’utilisateur | Conserver l’InfoBox ; créer test d’acceptation. |
| 9 | Contrat et livrables de sortie | Suis-je prisonnier ? | Annexe accès, exports, documentation, licences, support | Signature sûre ou non | Conserver la section juridique prudente ; ajouter livrables datés. |
| 10 | CTA | Quelle prochaine action ? | « Audit de décision : inventaire URL + fonctions + budget indicatif » | Contact qualifié | Remplacer la demande vague par un livrable et un délai annoncés. |

### Contrat des 150 premiers mots

Dire au lecteur : « Vous n’avez pas besoin de choisir Next.js parce que votre
WordPress est ancien. Vous devez d’abord savoir ce qui vous coûte aujourd’hui :
contacts perdus, maintenance, temps de publication, licences ou risque de panne.
Ce guide compare cinq voies sur le même périmètre et trois ans : corriger WordPress,
le refondre, le garder comme CMS avec Next.js, changer de CMS ou reconstruire. Vous
verrez quoi exporter, quelles fonctions ne se transfèrent pas, comment protéger vos
URLs et quels contrôles exiger avant de toucher au DNS. Les montants sont des
scénarios, pas une promesse de devis. À la fin, vous saurez demander un inventaire,
un plan de redirections, un rollback et un budget comparable — ou décider de ne pas
migrer. »

### Éléments à supprimer

- Toute formulation pouvant être lue comme un gain SEO automatique ou une économie
  certaine sans mesure.
- Les fourchettes qui ne disent pas le nombre de gabarits, d’intégrations, d’heures
  internes et de contrôles inclus.
- Les mentions de « 30 à 60 jours » présentées comme clôture universelle.

### Éléments à conserver

- Le refus clair de la migration réflexe et le rappel que WordPress peut être le
  meilleur choix.
- Les trois architectures, WooCommerce à part, le rôle des constructeurs de pages,
  le TCO sur trois ans et les droits de sortie.
- Les sources officielles Google, WordPress, CNIL et Légifrance, avec leur portée.

## 10. Contre-audit après correction

Les corrections ci-dessous sont **à faire** : elles n’ont pas été appliquées dans
cet audit. Le statut ne doit donc pas être présenté comme une réécriture terminée.

| Problème | Priorité | Correction appliquée | Revalidation indépendante |
| -------- | -------- | -------------------- | ------------------------- |
| P1-01 — baseline métier et technique sans seuils | P1 | Non appliquée | Relever les métriques sur un site fictif et vérifier que le lecteur obtient un go/no-go. |
| P1-02 — TCO sans trois cas complets ni heures internes | P1 | Non appliquée | Refaire les calculs avec ±30 % et contrôle inverse. |
| P1-03 — migration de contenu trop descriptive | P1 | Non appliquée | Tester une page simple, une page Elementor, un média et un CPT avec résultat attendu. |
| P1-04 — bascule/rollback non opératoire | P1 | Non appliquée | Relecture par un responsable technique ; vérifier TTL, gel, sauvegarde, RPO/RTO et déclencheur. |
| P1-05 — SEO post-lancement sans matrice d’acceptation | P1 | Non appliquée | Crawl staging/public, status, canonical, robots, sitemap, schema, GSC et logs. |
| P1-06 — comparaison non alignée sur fonctions et horizon | P1 | Non appliquée | Comparer A/B/C/D/E sur 36 mois et même niveau de support. |
| P1-07 — CTA sans livrable explicite ni preuve de résultat | P1 | Non appliquée | Vérifier qu’un dirigeant comprend ce qu’il reçoit, sous quel délai et sans garantie indue. |
| P2-01 — cache, preview, webhook et multi-instance | P2 | Non appliquée | Vérifier les recommandations Next.js self-hosting/deployment selon l’hébergement choisi. |
| P2-02 — international/hreflang seulement mentionné | P2 | Non appliquée | Ajouter une matrice pays/langue/canonical et une réserve RGPD. |
| P2-03 — sécurité, sauvegarde et données WooCommerce trop haut niveau | P2 | Non appliquée | Relecture par scénario commerce ; tester commandes, comptes, stocks et reprise. |
| P2-04 — accessibilité et conformité de la nouvelle interface absentes | P2 | Non appliquée | Contrôle clavier, contrastes, formulaires, erreurs et obligations applicables. |
| P2-05 — dates des sources non localisées par affirmation | P2 | Non appliquée | Reouvrir chaque source et inscrire date/portée. |
| P2-06 — readTimeMin 17 non recalculé dans ce snapshot | P2 | Non appliquée | Lancer la mesure de lecture sur le rendu final. |
| P2-07 — cas réel ou preuve interne absent | P2 | Non appliquée | Ajouter uniquement un cas documenté ; sinon conserver « exemple illustratif ». |
| P2-08 — image OG file-based non inspectée dans le head/rendu | P2 | Non appliquée | Vérifier HTML, dimensions, cache et partage social en navigateur. |
| P2-09 — ressource téléchargeable absente | P2 | Non appliquée | Créer une checklist URL/fonctions/rollback réellement utilisable, si maintenue. |
| P2-10 — protocole de suivi 90 jours et propriétaires non détaillé | P2 | Non appliquée | Ajouter tableau J0/J7/J30/J60/J90, responsable et seuil d’escalade. |

### État des portes P1–P4

```text
P1 recherche et cadrage : PRÉSENTE MAIS INCOMPLÈTE — les sources et défauts
                          sont identifiés, mais les scénarios, seuils et
                          preuves de départ ne ferment pas la porte.
P2 rédaction/intégration: EXISTANTE MAIS NON VALIDÉE — aucune correction du
                          guide n’est incluse dans ce rapport.
P3 contre-audit indépendant: RAPPORT PRÉSENT, PORTE NON VALIDÉE — sept P1
                             restent ouverts ; le snapshot corrigé devra être
                             revu par un autre agent.
P4 plume humaine et QA : REJETÉE / NON VALIDÉE — score inférieur à 90 et
                         aucun build, rendu navigateur, test head, crawl ou
                         contrôle responsive sur le snapshot corrigé.
Publication/indexation : NON PROUVÉES — aucun déploiement, traitement de
                         sitemap, Search Console, indexation ou conversion
                         n’est démontré par cet audit.
```

### Score après correction

Non calculable : le guide n’a pas été réécrit dans cette passe. **Objectif après
correction : 92/100 minimum**, avec au moins 9/10 en intention, pédagogie, preuve,
comparaison et décision, et aucun P1 ouvert.

## 11. Preuves techniques et visuelles

```text
Manifeste : src/lib/guides.ts — slug, dates et readTimeMin 17 vérifiés.
Calculs refaits : formule TCO relue ; aucune donnée d’entreprise réelle disponible,
                 donc scénarios proposés explicitement illustratifs.
Sources rouvertes : WordPress Export ; WordPress plugins ; Google site move ;
                    Google page experience ; Next.js production, self-hosting,
                    deployment platforms ; CNIL ; Légifrance.
Liens vérifiés : URLs de sources officielles présentes dans le fichier ; liens
                 internes non testés par navigateur dans ce rapport.
Commandes : wc -l -w ; shasum -a 256 ; git diff --check sur les audits concernés.
Rendu 320 / 390 / 768 / 1024 / 1440 : non exécuté.
Image sociale : opengraph-image.tsx existe ; head et partage social non inspectés.
Statut maximal prouvé : audit éditorial/factuel local et benchmark concurrentiel.
Réserve publication / indexation : aucune conclusion de build, déploiement,
                                    indexation ou conversion ne peut être tirée.
```

### Décision de chantier

Le guide constitue une bonne base humaine et prudente, mais ne doit pas encore être
présenté comme « le guide complet » de migration. La prochaine passe doit d’abord
produire l’inventaire, les scénarios TCO et le runbook de bascule ; ensuite seulement
une réécriture, puis un contre-audit et une QA de route pourront fermer les portes P1,
P2, P3 et P4. Aucun correctif du guide source n’a été effectué ici.
