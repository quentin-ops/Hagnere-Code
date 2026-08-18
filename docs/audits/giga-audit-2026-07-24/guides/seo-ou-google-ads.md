# Audit approfondi — `seo-ou-google-ads`

Date : 24 juillet 2026

Auditeur concurrentiel : agent indépendant, lecture seule

Snapshot du guide :

```text
Page : src/app/guides/seo-ou-google-ads/page.tsx
Registre : src/lib/guides.ts:912-924
Image sociale : src/app/guides/seo-ou-google-ads/opengraph-image.tsx
Recherche : docs/research/seo-ou-google-ads.md
Date visible des sources : 21/07/2026 ; dateModified du registre : 21/07/2026
SHA-256 page.tsx : f90627cd3aa2c9bddd9af2e6b7e07e0f76af7bc1a847a2a7a1c9decd17eb3ccf
SHA-256 opengraph-image.tsx : 60bbdeca61fa15ccf69cffc11be91bc61cb84367f5ca57c63068abdc48bafe4d
SHA-256 guides.ts : 8663e6e84352121ec854393e049492a1c2b72f242166141e5d31e0911b43cb09
SHA-256 recherche : ead323f100817f8d22e4ebf4ae00594cf1641d60f47dca54814adaf7a38f7477
```

## 1. Verdict exécutif

```text
Lecteur exact : dirigeant de TPE/PME, commerçant, artisan ou indépendant français non technicien, avec un budget limité et une décision d'acquisition à prendre.
Question réelle : dois-je acheter de la visibilité maintenant, construire des pages qui travaillent dans le temps, faire les deux, ou corriger mon offre et mon site avant tout ?
Décision attendue : prioriser Google Ads, prioriser le SEO, séquencer les deux ou reporter l'acquisition jusqu'à ce que l'offre, la page, la mesure et le suivi commercial soient prêts.
Réponse actuelle en une phrase : Ads peut tester plus vite une offre recherchée ; le SEO peut construire une visibilité durable ; aucun ne garantit une vente et le choix dépend du délai, de l'économie de l'offre et de la capacité à traiter les demandes.
Défaut qui coûte le plus de valeur : le guide promet un « budget complet comparé » et trois scénarios, mais n'offre aucun comparatif numérique à périmètre et horizon égaux ; le dirigeant ne peut donc pas savoir quand l'écart de coût ou de marge fait basculer la décision.
Niveau actuel : C (réécriture substantielle nécessaire, socle pédagogique réutilisable)
Priorité : haute
Statut : audité — à réécrire
P0 : 0 ; P1 : 5 ; P2 : 8
```

### Score avant correction

| Axe | Note /10 | Preuve localisable | Manque décisif |
| --- | ---: | --- | --- |
| Intention | 9 | Ouverture `page.tsx:347-378`, choix rapides `:168-201` | Le verdict de non-investissement est annoncé mais pas relié à un seuil économique. |
| Décision | 7 | Quatre choix `:965-993` et six prérequis `:733-794` | Aucun nombre ne permet de choisir Ads contre SEO à horizon égal ; « selon votre situation » reste largement déclaratif. |
| Pédagogie | 9 | Définitions concrètes `:406-454`, langage humain et cartes mobiles | L'explication est claire, mais la formule de coût apparaît trop tard et n'est pas appliquée à un cas. |
| Profondeur | 6 | Coûts génériques `:796-870`, calendrier `:909-958` | Pas de coûts réels par scénario, pas de sensibilité marge/délai/volume, pas de local SEO/Google Business Profile, incrémentalité ou coût du statu quo. |
| Preuve | 8 | Google et CNIL liés près des affirmations `:416-437`, `:770-794`, `:1031-1151` | Les ressources concurrentes et benchmarks ne sont pas dans le guide ; certains faits produit méritent une revalidation au 24/07. |
| Comparaison | 5 | Deux listes de coûts `:804-828`, formule `:841-849` | Scopes et horizons ne sont pas égalisés ; Ads inclut média, SEO inclut production mais aucune cadence, profondeur ou charge commune. |
| Originalité | 7 | Quatre choix, test de l'offre et règle d'arrêt `:950-958` | La majorité des résultats concurrents dit déjà « Ads rapide / SEO durable / les deux » ; l'artefact chiffré différenciant manque. |
| Style | 8 | Ton direct et honnête, exemples explicitement fictifs `:458-465`, `:692-715` | « Budget complet comparé » et « plan simple » surpromettent une démonstration absente. |
| Conversion | 8 | CTA après la décision, mauvais fit admis `:1005-1029` | Hagnéré vend les deux prestations mais le conflit d'intérêt n'est pas déclaré dans ce comparatif. |
| SEO/produit | 7 | Article + Breadcrumb, metadata/OG source et maillage | Readtime non vérifié, rendu navigateur non observé dans cet audit ; le dossier de recherche contient des affirmations de production non reconduites par une preuve actuelle. |

Total : **74/100**

La porte de sortie de la charte exige 90/100, aucun axe sous 8 et les axes
Intention, Décision, Pédagogie, Profondeur, Preuve et Comparaison à 9 ou 10. Le
guide est compréhensible, mais n'est pas encore un comparatif professionnel
permettant d'engager un budget.

## 2. Ce que le guide dit réellement

- Les 150 premiers mots sont bien écrits : ils reformulent le dilemme « améliorer son site et publier » contre « payer pour afficher des annonces », puis annoncent quatre issues (`page.tsx:347-378`). C'est la partie la plus réussie de la page.
- Le composant `QuickAnswer` est immédiatement lisible : Google Ads d'abord, SEO d'abord, les deux, attendre (`:168-201`). Il apporte une orientation, mais aucune fourchette de coût, de délai ou de seuil de rentabilité.
- La progression couvre la différence, l'objectif, Ads, SEO, la combinaison, les prérequis, les coûts, trois situations, 90 jours et la décision finale (`:380-400`). Elle est cohérente et humaine, mais elle ressemble encore à une grille de conseil plutôt qu'à une démonstration.
- Les cartes expliquent correctement le mécanisme : le SEO investit dans le site et les contenus ; Ads paie la diffusion pendant la campagne (`:402-454`). « Tester plus vite » est une déduction stratégique, correctement formulée comme possibilité, pas un fait Google.
- Les six prérequis sont pertinents : offre, demande, page, chiffres, mesure et suivi (`:741-768`). Ils sont néanmoins une checklist qualitative : le lecteur ne sait pas quel seuil rend un point « prêt ».
- La section des coûts liste les bons postes, mais ne remplit aucun montant (`:796-828`). La formule est correcte comme structure (`:841-849`) mais n'est jamais recalculée avec une marge, une conversion, un cycle de vente ou un coût interne.
- Les « trois scénarios » sont trois personnages qualitatifs — artisan, cabinet de conseil, nouveau SaaS — et non trois scénarios chiffrés simple/central/exigeant (`:872-907`). Le seul chiffre décisionnel est un exemple d'arrêt à 2 000 € sur huit semaines pour trois demandes (`:950-958`), sans sensibilité ni justification.
- Le plan 90 jours distingue les actions, mais ne dit pas combien d'heures, de pages, de campagnes, de budget média, de contenu ou de prospects sont nécessaires (`:917-948`). Un dirigeant peut le suivre, pas auditer sa rentabilité.
- La page vend à la fois du référencement naturel et de la gestion Google Ads (`:1005-1016`) mais ne dit pas explicitement qu'Hagnéré Code est partie intéressée dans le comparatif. La phrase « vous pouvez ne lancer aucune prestation » est saine, mais ne remplace pas la transparence sur le conflit.
- Le registre et les keypoints annoncent « Budget complet comparé » (`src/lib/guides.ts:915-923`, `page.tsx:302-306`) : ce que la page propose est une liste de coûts, pas un budget comparé.

### Divergence du dossier de recherche

`docs/research/seo-ou-google-ads.md` affirme une version « publiable », un score
interne 20/20, une batterie de navigateur jusqu'à 1 600 px, un build et une
URL de production contrôlés le 21 juillet. Ce dossier contient aussi la mention
que la passe 4 était bloquée et que le manifeste devait être actualisé. Dans le
présent audit, aucune preuve de ces contrôles n'a été réutilisée : le serveur de
mesure renvoie 404 et aucun navigateur n'a été piloté. Le rapport doit donc être
traité comme un historique éditorial, pas comme une preuve actuelle de
publication, de rendu ou d'indexation.

## 3. Benchmark France et international

Requêtes observées le 24 juillet 2026, sans données de volume :

```text
FR : SEO ou Google Ads choisir entreprise France comparaison coût délai 2026
US : SEO vs PPC which should small business invest first 2026
UK : SEO vs PPC UK small business where to invest 2026
Australie : SEO vs Google Ads Australia small business comparison 2026
```

Les concurrents servent à cartographier la couverture, non à prouver un taux,
un coût ou un délai universel. Les faits de produit restent rattachés aux
documentations Google et, pour la France, à la CNIL.

| Ressource et URL directe | Marché | Ce qu'elle apporte | Preuve/format | Limite | Ce que Hagnéré doit reprendre ou réfuter |
| --- | --- | --- | --- | --- | --- |
| [3h36 Agency — SEO ou Google Ads pour une PME locale](https://www.3h36agency.fr/ressources/seo-ou-google-ads-pme-locale) | France | Urgence, marge, zone de chalandise et capacité commerciale ; publié le 22/07/2026 | Résumé décisionnel et critères concrets dès l'ouverture | Agence qui vend les deux ; pas de modèle de coût égalisé | Ajouter la marge et la capacité de rappel au début, puis dépasser ce cadre par des chiffres. |
| [Htag Digital — SEO ou Google Ads](https://htag-digital.fr/seo-ou-google-ads-que-choisir-pour-developper-votre-business/) | France | Explique les deux leviers et leur complémentarité | Définitions et avantages/inconvénients | Recommandation de vendre l'accompagnement ; peu de calculs | Conserver la clarté, refuser le « faites les deux » sans budget ni rôle. |
| [Techtrust — Google Ads ou SEO](https://www.tech-trust.fr/en/blog/google-ads-vs-seo-quel-levier-choisir) | France | Affiche des budgets et une recommandation de combinaison | Fourchettes CPC/budgets et TL;DR | Chiffres commerciaux non étayés comme moyenne française | Ne pas reprendre les 1–5 €/clic ni 500–2 000 €/mois sans méthode et date. |
| [Alt'Ad — le vrai arbitrage](https://www.alt-ad.fr/actualite/google-ads-ou-seo) | France | Introduit l'incrémentalité, les coûts sur trois ans et les objections | Matrice, scénarios et discussion des limites | Revendique des résultats de comptes propres ; conflit d'intérêt | Ajouter incrémentalité et horizon long, mais marquer tout cas propriétaire. |
| [Google Business — SEO vs PPC](https://business.google.com/us/resources/articles/seo-vs-ppc/) | États-Unis | Dit explicitement : PPC pour court terme, SEO pour long terme, les deux possible | Source liée à Google, mais commerciale | Page Google Business ancienne (2023), pas un conseil financier | Utiliser comme convergence, jamais comme preuve de rentabilité. |
| [Search Engine Journal — SEO vs PPC](https://www.searchenginejournal.com/seo-vs-ppc/234681/) | États-Unis | Compare vitesse, contrôle budgétaire et limites | Article de référence mis à jour en 2026 | Média, pas source primaire ; résultats très généraux | Ajouter contrôle du budget, mais vérifier chaque fait chez Google. |
| [Brambla — PPC vs SEO UK](https://www.brambla.co.uk/blog/ppc-vs-seo-uk-small-business/) | Royaume-Uni | Fait entrer budget, calendrier et allocation dans une décision PME | Guide 2026, comparaison structurée | Agence intéressée ; chiffres non universels | Ajouter un horizon commun 6/12 mois, sans convertir les livres en euros. |
| [Expertsure — SEO vs PPC UK](https://www.expertsure.com/uk/digital-marketing/seo-vs-ppc-small-business/) | Royaume-Uni | Met en regard retour mesurable en 1–4 semaines et SEO 6–12 mois | Tableau ROI/timeline et choix de budget | Fourchettes commerciales, aucun contrôle de marge | Ajouter les horizons comme hypothèses, jamais comme promesse. |
| [Creative Ground Australia — SEO vs Google Ads](https://creativeground.com.au/seo-vs-google-ads/) | Australie | Montre coûts de retainer, média et distinction « stop Ads/SEO » | Guide 2026 avec exemples et coût total | Devises, CPC et marché australiens non transposables | Reprendre le coût d'arrêt et le budget média séparé ; requalifier le contexte. |
| [ACCC — Digital advertising services inquiry](https://www.accc.gov.au/system/files/Digital%20advertising%20services%20inquiry%20-%20final%20report.pdf) | Australie | Décrit le marché publicitaire et la position de Google côté annonceurs | Rapport d'autorité publique | Ne répond pas au choix SEO/Ads d'une TPE | Utiliser pour la prudence sur le marché publicitaire, pas pour un ROI. |
| [Google Search Central — guide SEO](https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=fr) | Source primaire | Google dit que SEO aide à comprendre/trouver le contenu, sans garantir indexation/classement ; les effets vont de quelques heures à plusieurs mois | Documentation officielle, lignes 375–387 consultées le 24/07 | Ne chiffre aucun investissement ni vente | Conserver les délais comme plage non garantie et éviter « SEO gratuit ». |
| [Google Ads — coûts et budgets](https://support.google.com/google-ads/answer/6319?hl=fr) et [budget moyen](https://support.google.com/google-ads/answer/10486536?hl=fr) | Source primaire | Budget quotidien moyen, absence de minimum universel et limites 2×/30,4× selon campagne | Documentation officielle ; pages support instables à la réouverture | Ne décrit pas les honoraires ni la rentabilité | Relier l'exemple média aux règles Google, avec exceptions. |

### Saturation

La SERP française et les marchés anglophones convergent sur une réponse déjà
très saturée : Ads peut donner une possibilité de visibilité plus vite, le SEO
demande un horizon plus long, les deux peuvent être séquencés et le choix doit
tenir compte de l'urgence. Les nouvelles pages ajoutent trois apports :

1. la marge et la capacité commerciale avant le canal ;
2. un horizon 6/12/24 mois plutôt qu'une opposition « immédiat/durable » ;
3. l'incrémentalité, le coût du statu quo et la baisse éventuelle de dépendance à Ads.

Elles ajoutent rarement une preuve neutre de CPC, CPL ou ROI. La différence
gagnante ne sera donc pas un énième verdict « faites les deux », mais un cas
français chiffré, égalisé, recalculable et honnête sur le point où chaque option
perd. Les devises, TVA, salaires, concurrence et marchés étrangers rendent les
budgets non transposables sans requalification.

## 4. Matrice de gain d'information

| Question décisive | Meilleure réponse française | Apport international | Couverture actuelle | Manque | Réponse supérieure à produire |
| --- | --- | --- | --- | --- | --- |
| Le lecteur doit-il choisir immédiatement ? | 3h36 demande urgence, marge, zone et capacité commerciale | Brambla/Expertsure ajoutent horizon et allocation | QuickAnswer `:168-201` | Pas de seuil ni de formule | Orienter en 4 lignes, puis calculer la décision sur le même cas. |
| Quel délai peut-on honnêtement annoncer ? | Guide français et Google refusent une garantie | UK/Australie proposent plages 1–4 semaines vs 3–12 mois | Phrases prudentes `:482-487`, `:644-658` | Aucun jalon mesurable par canal | Donner jalons (publication, indexation, apprentissage, prospects, ventes) et un critère d'arrêt. |
| Quel coût comparer ? | Les concurrents listent forfaits et média | Creative Ground sépare retainers, média et arrêt | Deux listes qualitatives `:804-828` | Pas de 6/12 mois, outils, temps, ventes ou fiscalité | TCO égalisé Ads/SEO + statu quo sur 6 et 12 mois. |
| Quand Ads gagne-t-il ? | Offre claire, demande existante, urgence | Les pages US/UK insistent sur test/contrôle | Conditions `:519-527` | Pas de CPL maximal ou de marge | Calculer `CPL maximal = marge par client × taux de signature − coûts non média/lead`. |
| Quand SEO gagne-t-il ? | Questions récurrentes, expertise, délai | UK/Australie parlent d'effet cumulatif, sans preuve neutre | Conditions `:608-625` | Pas de valeur du stock de pages ni d'entretien | Chiffrer production, maintenance, horizon et valeur prudente des leads. |
| Les deux sont-ils toujours meilleurs ? | Plusieurs pages répondent « complémentaires » | Google Business dit les deux possibles | Exemple SaaS `:692-730` | Rôle et budget distincts mais pas chiffres | Montrer un budget mixte où chaque canal a une mission et un seuil. |
| Faut-il attendre ? | Guide nomme offre/page/suivi défaillants | US/UK parlent de readiness, pas de coût du report | `:546-557`, `:981-984` | Coût du statu quo jamais calculé | Ajouter manque à gagner hypothétique et valeur d'un test de préparation. |
| Comment mesurer sans se tromper ? | Conversion et consentement sont distingués | SEJ insiste sur KPI distincts | `:770-794` | Attribution/incrémentalité/brand/local non traitées | Distinguer conversion plateforme, prospect qualifié, vente incrémentale et marge. |
| Pourquoi croire une recommandation Hagnéré ? | Les guides voisins vendent souvent les deux | Les pages étrangères ont le même conflit | CTA `:1005-1029` | Conflit d'intérêt non explicite | Encadré « nous vendons les deux ; voici le cas où nous déconseillons les deux ». |

## 5. Faits et fraîcheur

| Affirmation du guide | Verdict | Source primaire actuelle | Périmètre et date | Correction |
| --- | --- | --- | --- | --- |
| Le SEO aide les moteurs à comprendre le contenu et les internautes à décider d'y accéder | confirmé | [Google Search Central — SEO](https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=fr) | Documentation officielle, consultée le 24/07/2026, lignes 375–380 | Conserver ; ne jamais ajouter une garantie de position. |
| Certaines modifications SEO prennent des heures, d'autres plusieurs mois | confirmé avec prudence | Même guide Google | Délai variable, lignes 385–387 | Dire « certaines modifications » et donner un jalon de revue, pas « résultat en 3–6 mois ». |
| Google Ads doit examiner l'annonce puis l'annonce participe à une enchère | confirmé sous revalidation | [Examen](https://support.google.com/google-ads/answer/1722120?hl=fr) et [classement](https://support.google.com/google-ads/answer/1752122?hl=fr) | Documentation Google Ads ; pages support partiellement 429 à la réouverture | Garder « possibilité de visibilité », pas « affichage immédiat ». |
| Le rapport des termes de recherche n'est pas exhaustif pour les requêtes à faible activité | confirmé dans le dossier, à rouvrir | [Rapport des termes](https://support.google.com/google-ads/answer/2472708?hl=fr) | Fonctionnalité Google et limites de confidentialité ; revalidation nécessaire | Conserver « une partie » plutôt que « les mots de vos prospects ». |
| Google n'impose pas de dépense minimale universelle | confirmé sous réserve du type de campagne | [Google Ads — coûts](https://support.google.com/google-ads/answer/6319?hl=fr) | Page support actuelle mais instable à l'ouverture | Ajouter « la plateforme » et distinguer budget test conseillé de règle Google. |
| 2× par jour et 30,4× par mois pour de nombreuses campagnes | confirmé avec exceptions | [Budget moyen](https://support.google.com/google-ads/answer/10486536?hl=fr) | Règle de dépenses Google, pas tous les formats | Conserver « pour de nombreuses campagnes » et relier à la trésorerie. |
| Une conversion Ads est une action choisie par l'annonceur, pas nécessairement une vente | confirmé | [Suivre les conversions](https://support.google.com/google-ads/answer/1722054?hl=fr) | Mesure de compte, non résultat commercial | Ajouter distinction conversion / qualifié / vente dans la formule. |
| Les traceurs publicitaires nécessitent en principe un consentement préalable en France | confirmé à portée limitée | [CNIL — cookies et traceurs](https://www.cnil.fr/fr/cookies-et-autres-traceurs/que-dit-la-loi) | Finalité, exemption et paramétrage peuvent changer l'analyse ; consulté le 20/07 dans le dossier | Conserver « en principe », rappeler qu'un spécialiste peut valider le dispositif. |
| Payer Ads n'améliore pas directement le classement naturel | confirmé par la documentation liée | [Google Ads — résultats naturels et sponsorisés](https://support.google.com/google-ads/answer/3097241?hl=fr) | Distinction Ads/organique, page support à rouvrir | Conserver ; présenter les apprentissages Ads→SEO comme déduction, pas signal direct. |
| Le SEO continue à « travailler » après publication | à nuancer | Aucune source Google ne garantit la persistance ; Google dit effets variables et mises à jour | Une page peut perdre visibilité, devenir obsolète ou être dépassée | Remplacer par « peut rester utile si entretenue et pertinente ». |
| Google Ads « teste la demande » | déduction, correctement marquée en prose mais trop centrale | Google documente requêtes, annonces et conversions, pas la validation indépendante du marché | Offre, page, prix et suivi confondent le test | Écrire « teste un parcours d'acquisition exposé à une demande observée », puis proposer entretiens/prospection comme test complémentaire. |
| Trois scénarios et « budget complet comparé » | non démontré | `page.tsx:302-306`, `:872-907` | Trois situations sans montant ni scope commun ; formule jamais appliquée | Remplacer keypoint et ajouter trois budgets reproductibles. |
| Le guide était contrôlé en production, mobile 390 px et 43 URL | historique non prouvé dans l'état actuel | `docs/research/seo-ou-google-ads.md`, section 10 | Aucun navigateur/requêtage production exécuté par cet audit ; mesure locale 404 | Retirer ces phrases du dossier comme preuve actuelle ou joindre un artefact daté et vérifiable. |

### Contradictions

- Le keypoint « Budget complet comparé » promet une comparaison que la page ne
  chiffre pas.
- Le dossier de recherche présente 20/20, une batterie navigateur et une
  publication contrôlée, mais sa propre table de passes indique P4 bloquée et
  les preuves ne sont pas réexécutées le 24/07.
- Le guide dit que ses trois scénarios sont fictifs, mais ils ne sont pas des
  scénarios budgétaires : « artisan », « cabinet » et « SaaS » sont des profils,
  pas des hypothèses calculables.
- La recommandation « les deux » est proposée sous condition, mais aucun
  exemple ne montre le budget total et le seuil auquel le partage devient
  inférieur à une séquence Ads puis SEO.

### Faits à retirer plutôt qu'à affaiblir

- Toute promesse de budget complet tant qu'il n'y a pas de chiffres et
  d'inclusions/exclusions égalisées.
- Tout délai universel (« immédiat », « 3–6 mois », « 6–12 mois ») sans signal
  de jalon, date, marché et condition.
- Toute moyenne CPC/CPL/ROI française reprise d'une agence sans méthode neutre.
- Toute assertion de production, de rendu ou de publication issue seulement du
  dossier de recherche historique.

## 6. Scénarios et calculs à construire

### 6.1 Même entreprise, même horizon, trois niveaux

La page doit conserver ses profils qualitatifs comme cas d'usage, mais ajouter
un cas de comparaison : service local à marge contributive de 1 500 € par
client, un marché géographique, une page d'offre, un cycle commercial inférieur
à 90 jours. Les montants ci-dessous sont des **hypothèses de réécriture**, pas
des prix Hagnéré ni des recommandations universelles.

Hypothèse de temps interne : 50 €/h, à remplacer par le coût chargé ou le coût
d'opportunité réel. Horizon principal : 6 mois ; une colonne 12 mois doit être
ajoutée dans le guide final.

| Variable sur le même périmètre | Simple | Central | Exigeant | Source ou hypothèse |
| --- | ---: | ---: | ---: | --- |
| Google Ads — média / mois | 500 € | 1 000 € | 2 000 € | Hypothèse illustrative ; aucun minimum Google universel. |
| Google Ads — gestion / mois | 250 € | 450 € | 900 € | Hypothèse de charge ; livrables à écrire. |
| Google Ads — lancement, mesure, page | 1 400 € | 1 500 € | 3 000 € | Hypothèse ; inclure/exclure tracking, landing et créations. |
| Google Ads — temps interne / mois | 3 h | 5 h | 8 h | Validation et traitement des prospects, 50 €/h. |
| **Ads — coût renseigné à 6 mois** | **6 800 €** | **11 700 €** | **22 800 €** | `setup + 6 × (média + gestion + heures × 50)` ; hors fiscalité non précisée. |
| SEO — production/gestion / mois | 600 € | 1 500 € | 3 000 € | Hypothèse ; préciser pages, technique, liens, mises à jour. |
| SEO — audit/technique initiale | 1 400 € | 3 000 € | 6 000 € | Hypothèse ; ne pas appeler ces montants « prix du marché ». |
| SEO — temps interne / mois | 4 h | 8 h | 16 h | Validation d'expertise, retours, intégration, 50 €/h. |
| **SEO — coût renseigné à 6 mois** | **6 200 €** | **14 400 €** | **28 800 €** | `setup + 6 × (production + heures × 50)` ; hors outils et mise à jour future. |
| **Statu quo — dépense externe** | **0 €** | **0 €** | **0 €** | Ne pas confondre zéro facture et zéro coût commercial. |

Contrôle des totaux : Ads simple `1 400 + 6 × (500 + 250 + 150) = 6 800` ;
central `1 500 + 6 × (1 000 + 450 + 250) = 11 700` ; exigeant
`3 000 + 6 × (2 000 + 900 + 400) = 22 800`. SEO simple
`1 400 + 6 × (600 + 200) = 6 200`. SEO central
`3 000 + 6 × (1 500 + 400) = 14 400` ; exigeant
`6 000 + 6 × (3 000 + 800) = 28 800`. Cette correction de contrôle est
intentionnelle : aucun total ne doit être publié sans relecture inverse.

```text
Formule : TCO(h) = coûts initiaux + h × (média éventuel + prestation + outils + heures internes valorisées)
Horizon : 6 et 12 mois, même activité, même zone, même objectif de demande
Inclus : ce qui est écrit dans chaque ligne ; le périmètre doit préciser pages, campagnes, créations, appels, CRM, reporting et maintenance
Exclus : TVA/fiscalité selon statut, coût du produit, marge, retours, stock, prospection non attribuable et coûts d'opportunité non mesurés
Résultat : coût renseigné, jamais coût total garanti
Analyse de sensibilité : faire varier marge/client (750 / 1 500 / 3 000 €), taux de signature (10 / 20 / 30 %), délai de vente et volume de demandes
Variable qui fait basculer la décision : marge attendue par client × taux de signature, puis capacité à produire/suivre les demandes
Contrôle inverse : recalculer chaque colonne initial + mois × récurrent avant arrondi
```

### 6.2 Seuil de rentabilité et statu quo

Proposition d'exemple illustratif fictif, à rendre visible :

```text
Marge contributive par client : 1 500 €
Taux prospect qualifié → client : 20 %
Valeur de marge attendue par prospect qualifié : 1 500 × 20 % = 300 €
Coûts hors média du mois : 1 200 € ; objectif : 12 prospects qualifiés
Part des coûts hors média par prospect : 1 200 / 12 = 100 €
CPL média maximal à l'équilibre : 300 − 100 = 200 €
Pour 12 prospects : budget média maximal = 12 × 200 = 2 400 €
Contrôle inverse : 12 × 300 = 3 600 € de marge attendue ; 2 400 + 1 200 = 3 600 €
```

Faire varier 10 %, 20 % et 30 % de signature : la valeur de marge par prospect
devient 150 €, 300 € et 450 € ; le CPL média maximal devient respectivement
50 €, 200 € et 350 € si les 100 € hors média restent constants. Cela montre
pourquoi une « petite campagne » n'est pas une décision de canal sans données
commerciales.

Pour le statu quo, ne publier une perte que si une base existe. Sinon montrer la
formule et l'inconnue : `marge manquée estimée = demandes qualifiées non traitées
× taux de signature × marge par client`. Le guide doit dire que ce n'est pas une
preuve d'incrémentalité : une demande peut arriver par un autre canal.

## 7. Comparaison et position professionnelle

```text
Options réellement comparables : Ads seul ; SEO seul ; séquence Ads puis SEO ; les deux avec rôles distincts ; aucune dépense et préparation de l'offre/site.
Périmètre et horizon communs : une offre, une zone, une page, un objectif de prospects qualifiés, 6 puis 12 mois ; inclure production externe, média, gestion, outils, temps interne, suivi commercial et maintenance.
Option la moins chère : dépend des hypothèses ; dans le scénario central ci-dessus, Ads est moins cher à 6 mois, mais ce n'est pas un verdict de rentabilité.
Option la moins risquée : séquence courte et plafonnée si la demande est incertaine ; SEO seul limite le budget média mais immobilise du temps avant preuve ; aucune option ne supprime le risque d'offre.
Option qui demande le moins de temps interne : prestation complète explicite, mais l'entreprise doit toujours valider l'offre et traiter les prospects.
Position Hagnéré Code pour le cas fréquent : si l'offre est claire et des recherches commerciales existent, un test Ads plafonné peut apprendre plus tôt ; en parallèle, corriger la page et produire une première réponse SEO si les mêmes objections reviennent. Si marge, offre ou suivi restent inconnus, commencer par les mesurer.
Faits qui la fondent : Google distingue visibilité payante et organique, documente des délais variables pour le SEO, et ne garantit ni indexation ni vente ; une conversion Ads est une action configurée, pas un client.
Cas où l'option opposée gagne : SEO d'abord si demande récurrente, expertise et runway ; Ads d'abord si saison, zone et offre prêts ; les deux si chaque budget a un rôle et une personne ; attendre si personne ne rappelle ou si le prix/offre est encore testé.
Signal de révision : après 6–8 semaines Ads sur des requêtes sélectionnées, ou après un nombre défini de pages publiées et de semaines d'indexation ; revoir sur prospects qualifiés, clients et marge, pas sur clics seuls.
Ce que nous déconseillons même si nous pourrions le vendre : vendre les deux par défaut, garantir une première page, traiter un budget Ads comme un plafond journalier certain, ou publier des contenus sans responsable de mise à jour et de réponse aux demandes.
```

Hagnéré Code vend les deux types d'accompagnement. Le guide doit l'écrire
avant le CTA et ajouter le mauvais fit commercial : l'entreprise qui ne sait
pas encore quelle marge elle réalise, qui n'a personne pour rappeler ou dont
la page ne décrit pas l'offre ne devrait pas acheter simultanément deux
prestations.

## 8. Objections et cas limites

| Objection loyale | Réponse prouvée | Ce qui reste incertain | Conséquence |
| --- | --- | --- | --- |
| « Je dois avoir des clients le mois prochain. » | Aucun canal ne garantit une vente ; Ads peut seulement donner une possibilité de visibilité après examen/enchère. | Demande, offre et vente réelle. | Fixer un plafond de perte et activer aussi les canaux déjà maîtrisés. |
| « Le SEO est gratuit après publication. » | La page a coûté stratégie, technique, rédaction, expertise, intégration et maintenance ; la visibilité peut perdre de la pertinence. | Valeur durable de chaque page. | Valoriser TCO et mises à jour, jamais seulement coût par clic. |
| « Je n'ai que 500 € par mois, je fais les deux. » | Diviser un petit budget peut empêcher tout test sérieux ; le guide le dit qualitativement. | CPC, marge, charge et volume réel. | Calculer un seul objectif, une seule séquence et le risque maximal. |
| « Je veux un chiffre de ROI. » | Les docs Google ne prouvent pas la rentabilité ; conversion plateforme et vente sont distinctes. | Attribution et incrémentalité. | Montrer une fourchette basse/centrale/haute et un contrôle inverse. |
| « Je paie Ads, donc Google favorisera mon SEO. » | Google sépare résultats sponsorisés et naturels ; les apprentissages peuvent être indirects. | Effet commercial de ces apprentissages. | Ne jamais compter Ads comme signal de classement. |
| « Mon agence m'annonce 3 à 6 mois de SEO. » | Google dit que les changements peuvent prendre de quelques heures à plusieurs mois et ne garantit rien. | Niveau de concurrence, état du site, contenu et autorité. | Demander jalons livrés et critère de revue, pas une position promise. |
| « Je peux mesurer avec un formulaire Google Ads. » | Une conversion est l'action choisie ; elle ne signifie pas prospect qualifié ou client et le consentement peut limiter les données. | Taux de qualification et de signature. | Relier CRM, appels, ventes et marge avec un niveau d'incertitude explicite. |
| « L'agence me conseille les deux. » | Les deux peuvent avoir des rôles distincts, mais le budget et la capacité d'exécution sont communs. | Conflit d'intérêt et charge réelle du fournisseur. | Exiger un périmètre séparé et demander quand il conseille d'attendre. |

## 9. Plan de réécriture

| Ordre | Section proposée | Question résolue | Preuve, scénario ou outil | Décision produite | À conserver / créer / couper |
| ---: | --- | --- | --- | --- | --- |
| 1 | Ouverture : « vous comparez deux façons de financer la même demande » | Quel choix le dirigeant doit-il faire ? | Situation, réponse courte, quatre issues | Choisir le prochain test ou attendre | Conserver les 150 premiers mots ; ajouter marge/délai et supprimer la promesse vague de budget complet. |
| 2 | Carte de décision en quatre portes | Ads, SEO, séquence ou report ? | Offre, demande, délai, capacité commerciale | Orientation provisoire | Conserver QuickAnswer ; ajouter un seuil/raison mesurable par carte. |
| 3 | Ce que chaque canal achète | Pourquoi la facture n'est pas comparable ? | Définitions Google, bénéfices et limites | Comprendre avant de calculer | Conserver cartes ; ajouter local SEO/GBP, création, maintenance et fin de campagne. |
| 4 | Le même cas sur 6/12 mois | Combien coûte chaque option ? | TCO Ads/SEO/statu quo, simple/central/exigeant | Enveloppe supportable | Créer tableaux ou cartes mobiles avec inclus/exclus, heures, outils et fiscalité. |
| 5 | Le seuil de marge | Quel coût par prospect/client est acceptable ? | CPL maximal et contrôle inverse | Lancer, plafonner ou abandonner | Créer formule numérique ; ne plus renvoyer à un autre guide. |
| 6 | Ce que l'on peut apprendre et ce que l'on ne peut pas conclure | Comment éviter de surinterpréter Ads/SEO ? | Termes de recherche partiels, conversion, CRM, incrémentalité | Mesurer un apprentissage réel | Conserver les liens Google ; ajouter distinction plateforme/vente. |
| 7 | Les deux et la séquence | Quand combiner sans diluer ? | Budget mixte avec rôles différents | Séquencer ou partager | Conserver SaaS fictif ; ajouter coûts et critères d'arrêt. |
| 8 | Plan 90 jours | Qui fait quoi et quand revoit-on ? | Jalon par canal, responsable, KPI et sortie | Poursuivre/réduire/arrêter | Conserver calendrier ; chiffrer effort et décisions, pas de promesse de résultat. |
| 9 | Position Hagnéré + mauvais fit | Puis-je faire confiance à l'avis ? | Conflit explicite et cas où ne rien vendre | Demander un cadrage ou repartir seul | Créer encadré d'intérêt ; conserver CTA sobre et délai non garanti. |
| 10 | Sources et limites | Qu'est-ce qui est fait et prouvé ? | Sources primaires proches, date et portée | Réviser quand les docs changent | Conserver section, retirer historique de production non prouvé. |

### Contrat des 150 premiers mots

Proposition à valider puis réécrire avec une plume naturelle :

> Vous hésitez entre deux dépenses très différentes : payer Google pour tester
> une annonce maintenant, ou investir dans votre site et vos contenus pour être
> trouvé dans les résultats naturels. Le bon choix ne dépend pas d'un slogan
> « court terme contre long terme ». Il dépend de votre offre, de la marge d'une
> vente, du délai dont vous disposez et de la personne qui rappellera les
> prospects. Dans ce guide, vous verrez quand commencer par Google Ads, quand
> commencer par le SEO, quand donner un rôle aux deux et quand ne rien acheter
> encore. Nous comparerons aussi le coût complet sur le même horizon — publicité,
> prestation, pages, outils et temps interne — puis nous calculerons le coût par
> prospect que votre marge peut supporter. Les montants marqués « exemple
> illustratif fictif » sont des hypothèses, jamais une promesse de résultat.

### Éléments à supprimer

- « Budget complet comparé » tant qu'aucune comparaison numérique n'est visible ;
- les trois profils présentés comme « scénarios » sans budgets ni hypothèses ;
- le chiffre de 2 000 € / 8 semaines / 3 demandes s'il reste sans marge, volume et justification — ou le conserver seulement comme exemple fictif clairement borné ;
- toute recommandation « faites les deux » qui n'indique ni rôle, ni budget, ni personne responsable ;
- les déclarations de production/QA issues du dossier de recherche sans artefact daté et contrôlable.

### Éléments à conserver

- l'ouverture humaine et la carte des quatre décisions ;
- les définitions Ads/SEO sans jargon propriétaire ;
- le refus des garanties de position, de vente et de délai ;
- les six prérequis offre/demande/page/chiffres/mesure/suivi ;
- la distinction conversion/vente, consentement et rapport de termes partiel ;
- le CTA avec possibilité explicite de ne lancer aucune prestation.

## 10. Contre-audit après correction

| Problème | Priorité | Correction appliquée | Revalidation indépendante |
| --- | --- | --- | --- |
| P1-01 — aucun comparatif numérique à scope/horizon égal | P1 | Aucune : guide non modifié dans cet audit | Refaire TCO 6/12 mois et vérifier chaque inclusion/exclusion sur mobile. |
| P1-02 — trois profils qualitatifs, pas trois scénarios chiffrés | P1 | Aucune | Recalculer simple/central/exigeant et contrôle inverse. |
| P1-03 — « budget complet comparé » surpromet | P1 | Aucune | Vérifier hero, keypoint, metadata et corps après renommage. |
| P1-04 — seuil CPL/marge absent | P1 | Aucune | Rejouer 10/20/30 % de signature, marge et coûts non média. |
| P1-05 — conflit d'intérêt non déclaré dans le comparatif | P1 | Aucune | Lire l'encadré avant CTA et vérifier mauvais fit réel. |
| P2-01 — coût SEO/Ads sans outils, maintenance, TVA ou charge de vente | P2 | Aucune | Compléter le TCO et éviter double comptage. |
| P2-02 — coût du statu quo et incrémentalité non chiffrés | P2 | Aucune | Ajouter formule « à estimer », sans publier un manque à gagner comme fait. |
| P2-03 — jalons 90 jours trop génériques | P2 | Aucune | Ajouter responsable, effort, KPI et critère d'arrêt par canal. |
| P2-04 — local SEO/Google Business Profile, marque et SERP mixte absents | P2 | Aucune | Ajouter seulement si le cas cible le justifie et sourcer les fonctions. |
| P2-05 — international absent du guide publié | P2 | Aucune | Ajouter un encadré de contexte, jamais des budgets étrangers convertis. |
| P2-06 — dates de sources et docs Google Support à revalider | P2 | Aucune | Rouvrir avant tout changement de `dateModified`; retirer les liens 429 non confirmés si nécessaire. |
| P2-07 — dossier de recherche affirme P4/production sans preuve actuelle | P2 | Aucune | Joindre un artefact daté ou réécrire le statut historique. |
| P2-08 — route, HTML, OG et responsive non contrôlés dans cet audit | P2 | Aucune | QA navigateur aux largeurs requises, états FAQ/ancres/console. |

### Score après correction

Non applicable : aucune réécriture du guide n'a été appliquée dans ce rapport.
La cible après correction est **93/100 ou plus**, aucun axe sous 8 et les six
axes obligatoires à 9 ou 10. Ce nombre est une cible de revalidation, pas un
score obtenu.

## 11. Preuves techniques et visuelles

```text
Manifeste : hashes ci-dessus ; worktree déjà modifié sur de nombreux guides/docs par d'autres travaux ; ce rapport n'a modifié ni page, ni registre, ni code.
Calculs refaits : contrôle des formules proposées ; le total SEO simple doit être 6 200 € et non 6 500 €, correction explicitement signalée pour empêcher une fausse précision.
Sources rouvertes : Google Search Central SEO (lignes 375–387), Google Helpful Content, résultats Google Ads budget/produit ; CNIL et SERP FR/US/UK/Australie consultées le 24/07/2026. Plusieurs pages Google Support ont été instables/429 à l'ouverture directe et doivent être revalidées.
Liens vérifiés : URLs directes du guide inspectées au niveau source ; benchmark concurrentiel consigné ci-dessus.
Commandes : `npm run check:seo` = 35 fichiers, 229 tests passés ; `npm run measure:guide-readtime -- seo-ou-google-ads` = HTTP 404, aucun serveur local actif sur le port attendu.
Rendu 320 / 390 / 768 / 1024 / 1440 : non exécuté dans cet audit ; aucune affirmation de QA visuelle.
Image sociale : opengraph-image.tsx inspecté ; rendu PNG non généré/inspecté.
Statut maximal prouvé : audit éditorial/concurrentiel et tests SEO globaux verts dans l'état partagé ; pas de preuve de production ou d'indexation.
Réserve publication / indexation : réécrire et contre-auditer, puis lancer serveur/build et contrôle navigateur réel avant toute nouvelle date de modification ou publication. Un 200, un sitemap ou une demande d'indexation ne prouvent ni classement ni conversion.
```
