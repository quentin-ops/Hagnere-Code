# Giga-audit — `prix-referencement-naturel`

**Audit exécuté le 24 juillet 2026 — lecture seule**  
**Périmètre :** guide public, registre, image Open Graph, maillage, service SEO,
tarifs, guides voisins, prix et modèles de facturation en France, aux
États-Unis, au Royaume-Uni et en Australie, sources primaires Google et droit
français, pédagogie dirigeant, calculs, TCO, conversion et SEO observable.  
**Aucun guide, code, registre, fichier partagé ou élément Git n’a été modifié.**

## 1. Verdict exécutif

### Décision

Le guide est **substantiel et honnête dans son intention**, mais il ne peut pas
encore être la référence éditoriale sur le prix du SEO. Il explique bien qu’un
prix ne vaut que par le travail acheté, refuse les garanties de position et
montre un calcul de rentabilité. En revanche, son titre promet un « prix 2026 »
alors que les fourchettes mélangent des catalogues commerciaux non reliés à
chaque ligne, des tarifs de prestataires qui ne couvrent pas le même périmètre,
des outils en dollars et des hypothèses illustratives. Le dirigeant ne dispose
pas encore d’un budget comparable à périmètre égal, d’un coût complet incluant
son temps interne, ni d’un test de sensibilité suffisamment explicite.

**Score indépendant avant correction : 77/100.** La charte exige 90/100 et
aucun axe clé sous 8/10. Il n’y a pas de P0 constaté, mais les P1 ci-dessous
doivent être corrigés avant de présenter la page comme le guide de référence.

### Forces à conserver

- Les 150 premiers mots s’adressent à un dirigeant et donnent immédiatement des
  repères de budget, sans promettre une position (`page.tsx:223-240`).
- Le texte distingue correctement prix affiché, livrable, temps et résultat ;
  la division budget/TJM est reproductible (`page.tsx:465-500`).
- Le guide déclare l’exemple de Nathalie fictif et ne le présente pas comme un
  client (`page.tsx:347-362`).
- Le calcul illustratif de rentabilité expose volume, CTR, conversion, taux de
  transformation, marge et budget au lieu de recopier un ROI d’agence
  (`page.tsx:937-985`).
- La page refuse la position garantie et les liens achetés destinés à manipuler
  le classement, en cohérence avec la documentation Google.
- L’angle « que finance réellement le forfait ? » est meilleur qu’un simple
  tableau de prix et reste cohérent avec l’offre SEO qui promet des livrables
  vérifiables, pas une position.

### Trois gains prioritaires

1. **Rendre les chiffres auditables.** Chaque fourchette doit préciser source,
   date, pays, type de prestataire, périmètre, HT/TTC, engagement et ce qui est
   exclu ; sinon elle doit devenir une estimation éditoriale, pas un « prix
   observé ».
2. **Comparer trois budgets à périmètre égal.** Un cas simple, central et
   exigeant doit additionner audit, technique, contenu, liens, outils, temps du
   client, mesure, maintenance et coût d’arrêt. Les fourchettes seules ne
   permettent pas de choisir entre audit, sprint, forfait mensuel, interne,
   Google Ads ou report.
3. **Ajouter une décision de sortie.** Le lecteur doit savoir quoi acheter le
   premier mois, quel signal observer à J30/J90, quand réduire ou arrêter, et
   comment éviter le coût irrécupérable d’un engagement long.

## 2. Snapshot reproductible

| Élément | Observation au 24/07/2026 |
|---|---|
| Route | `/guides/prix-referencement-naturel` |
| Source | `src/app/guides/prix-referencement-naturel/page.tsx` |
| Taille source | 1 212 lignes, 6 032 mots source |
| SHA-256 page | `d984788f90e869c4d146a39cbe4de7ab4640f0e1d736015ac26ec3c98f64b912` |
| Open Graph | `src/app/guides/prix-referencement-naturel/opengraph-image.tsx`, SHA-256 `42b14cb838b73b9618a726d4b12999aa0d95137631a6fe80dc9b30ee3196905b` |
| Registre | `src/lib/guides.ts`, entrée publiée le 18/07/2026, modifiée le 21/07/2026, lecture annoncée 23 min |
| Dossier de recherche | Aucun fichier `docs/research/prix-referencement-naturel.md` trouvé au moment de l’audit |
| Routes voisines vérifiées | audit SEO, SEO ou Google Ads, prix gestion Google Ads, choisir son agence web, refonte sans perdre son SEO, service SEO, tarifs |
| Données structurées | `Article` + `BreadcrumbList`; FAQ visible via `GuideLayout`, sans `FAQPage` ajouté dans la page |
| Robots | Le registre est observable, mais aucun en-tête HTTP de production n’a été vérifié |

**Limites de vérification :** aucun navigateur, build, rendu à 320–1 600 px,
serveur de production, Search Console, sitemap, header HTTP ou test de lecteur
réel n’a été exécuté dans cet audit. Je ne déclare donc ni indexation, ni
performance, ni utilisabilité mobile en production.

## 3. Ce que le guide promet réellement

Le lecteur reçoit :

1. trois repères initiaux : audit PME 800–3 000 €, local 800–1 500 €/mois,
   national 2 500–5 000 €/mois ;
2. un tableau de tarifs (audits, accompagnement, articles, liens et TJM) ;
3. quatre modes de facturation et une conversion forfait/TJM ;
4. une liste technique, contenu, popularité et pilotage ;
5. des prix d’outils, puis des fourchettes de liens entrants ;
6. les risques de promesse de position, clauses, droits et loi Sapin ;
7. sept actions gratuites et un temps annoncé de 15–20 heures ;
8. une formule ROI et un exemple fictif ;
9. des situations où il faut préférer Ads, prospection, report ou un audit
   ponctuel ;
10. un CTA vers Hagnéré Code.

La progression répond à « combien coûte le SEO ? ». Elle répond moins bien à
« quel périmètre dois-je financer pour mon entreprise ? », « combien de temps
mon équipe doit-elle fournir ? », « que dois-je mesurer à 30/90 jours ? » et
« quel est le coût du statu quo si je ne signe pas ? ».

## 4. Benchmark France et international

Requêtes consultées le 24/07/2026 : prix référencement naturel 2026, tarif
audit SEO, SEO pricing 2026 agency monthly retainer US/UK/Australia. Les pages
commerciales servent à comparer la couverture et les biais, jamais à prouver
une moyenne de marché.

| Ressource et URL directe | Marché | Ce qu’elle apporte | Limite ou conflit | Adaptation utile |
|---|---|---|---|---|
| [SeoMix — prix d’un audit SEO](https://www.seomix.fr/combien-coute-un-audit-seo/) | France | Distingue audit complet, simplifié, technique, contenu, refonte et perte de position ; donne temps d’analyse et tarifs propres à SeoMix (mise à jour 15/11/2024). | Prix d’un seul prestataire, ancien pour une page 2026, CTA commercial. | Reprendre la logique « type de site × taille × profondeur × livrable », pas les montants comme moyenne. |
| [Deux.io — tarifs agences SEO 2026](https://deux.io/tarifs-agences-seo/) | France | Cinq facteurs de variation, modèles agence/freelance/interne, audit, contenu, netlinking, TJM et ROI. | « Plusieurs dizaines de mandats » non auditable ; vendeur de SEO. | Ajouter une grille périmètre/effort/risque et un coût interne. |
| [SEO.fr — coût d’une prestation](https://www.seo.fr/informations/combien-coute-prestation-seo) | France | Montre la dispersion horaire, mensuelle et les achats complémentaires. | Page d’agence, aucune base statistique publiée. | Mettre en garde contre les achats hors forfait et le périmètre glissant. |
| [Axtracom — tarifs 2026](https://www.axtracom.com/prix-referencement-naturel) | France | Prix catalogue local/régional/national (221/321/580 €/mois), préavis et audit au démarrage. | Prix propriétaire et promesses commerciales ; témoignages non utilisables comme preuve. | Garder le cas catalogue comme exemple de comparaison, avec lien et date visibles. |
| [Google — Avez-vous besoin d’un référenceur ?](https://developers.google.com/search/docs/fundamentals/do-i-need-seo?hl=fr) | Source primaire mondiale | Liste les tâches possibles, recommande audit en lecture seule et avertit qu’aucun prestataire ne peut garantir la première position (page mise à jour 09/06/2026). | Ne donne aucun tarif ; ne remplace pas un devis. | Fonder les critères de choix, de contrôle et de non-garantie. |
| [Digital Applied — SEO pricing 2026](https://www.digitalapplied.com/blog/seo-pricing-2026-what-seo-services-cost) | États-Unis | Scénarios local/mid-market/enterprise, heures annoncées, audit, migration, taux horaires et coût d’outils. | Plusieurs statistiques et « économies IA » auto-déclarées ; périmètre US. | Comparer les unités (heures, livrables, pays) sans importer les taux en euros. |
| [Whito — UK Marketing Prices Study 2026](https://whito.co.uk/research/uk-marketing-prices-study/) | Royaume-Uni | Échantillon annoncé de 128 prix issus de 47 prestataires en juin 2026 ; médiane d’entrée SEO £447. | Méthode propriétaire, prix publiés et non contrats signés ; SEO seul traité dans une étude liée. | Illustrer la différence entre médiane de catalogues et coût réellement acheté. |
| [StudioHawk — SEO Pricing Australia 2026](https://studiohawk.com.au/blog/seo-pricing/) | Australie | Tiers $500–1 000, $1 500–3 000 et $5 000+, tarifs horaires et projets ; explique ce que chaque tier inclut. | Prix d’un vendeur australien, devise et marché différents, date 09/12/2025. | Conserver le principe « prix = périmètre + effort + concurrence », pas les seuils. |
| [Semrush — tarifs officiels](https://www.semrush.com/kb/1547-seo-toolkit-pricing-limits) | International | Pro $139,95, Guru $249,95, Business $499,95/mois ; limites de sites, mots-clés, crawl et utilisateurs. | Outil propriétaire, prix en dollars et hors TVA/change ; n’est pas le coût d’une prestation. | Séparer outil mutualisé, licence dédiée et travail humain. |
| [Screaming Frog — FAQ tarifaire](https://www.screamingfrog.co.uk/seo-spider/faq/) | Royaume-Uni | Licence annuelle £199 / €245 / $279 et version gratuite jusqu’à 500 URL. | Coût logiciel seulement, pas un audit. | Corriger la ligne outil avec date, devise et usage. |

**Saturation :** la SERP répète les mêmes fourchettes et le même conseil
« cela dépend ». La valeur supplémentaire ne sera pas un nouveau chiffre, mais
un comparateur à périmètre identique, la séparation des coûts certains et
variables, un budget de temps interne, une sensibilité et une porte d’arrêt.

## 5. Matrice de gain d’information

| Question décisive | Réponse concurrente | Couverture actuelle | Manque | Réponse supérieure à produire |
|---|---|---|---|---|
| Quel budget pour mon cas réel ? | Fourchettes locales/nationales, souvent auto-déclarées | Trois repères, sans fiche de périmètre | Le lecteur ne sait pas se situer | Questionnaire taille/type/site/pays/intentions + trois scénarios calculables |
| Que finance 800 €, 1 500 € ou 5 000 € ? | Tiers avec livrables chez plusieurs pages US/Australie | Familles de travail, pas de quantité/owner/critère d’acceptation | Prix non comparable | Tableau « livré / non livré / temps client / preuve » à budget égal |
| Audit ou forfait mensuel ? | SeoMix distingue types d’audit et temps | Audit + mensuel juxtaposés | Pas de règle de décision | Audit d’abord si inconnues critiques ; forfait seulement après baseline et plan |
| Combien coûte mon équipe ? | Rarement chiffré | 15–20 h gratuites annoncées sans borne | Coût d’opportunité invisible | `heures internes × coût horaire chargé` et sensibilité 10/25/40 h |
| SEO ou Ads/report ? | Pages concurrentes opposent long terme/rapidité | Une table finale le mentionne | Pas de comparaison TCO/horizon | Comparer 90 jours, 12 mois, actif conservé, vitesse, risque et sortie |
| Quand arrêter ? | Peu de critères ; engagements longs fréquents | Date de décision évoquée mais aucun seuil | Coût irrécupérable et biais de continuation | J30/J90 : preuve minimale, coût restant, seuil de pause et propriétaire |
| Les outils sont-ils inclus ? | Prix Semrush/Screaming Frog parfois séparés | Tableau de prix, sans licences par client | Change, TVA, mutualisation et propriété | Coût outil séparé, propriétaire du compte, export et fin de mission |
| Une promesse est-elle licite/sûre ? | Google avertit des garanties et schémas de liens | Bonne section, mais quelques assertions juridiques non sourcées | Portée France et cas Ads/SEO confondus | Sources directes, qualification « information générale », relecture juridique |
| Quel ROI attendre ? | Formules et moyennes souvent commerciales | Une formule + un seul scénario | Pas de sensibilité/attribution/statu quo | Cas simple/central/exigeant, bénéfice incrémental, coût du statu quo, contrôle inverse |

## 6. Faits, fraîcheur et calculs

### Faits solides ou à conserver

- Google explique que le SEO aide les moteurs et les utilisateurs, qu’aucune
  première position n’est garantie et que les changements peuvent demander de
  quelques heures à plusieurs mois. Source primaire : [SEO Starter
  Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide),
  consulté le 24/07/2026.
- Google demande de se méfier des garanties, des audits qui réclament un accès
  en écriture et des outils prétendument « approuvés » ; la page française a
  été mise à jour le 09/06/2026 : [Avez-vous besoin d’un
  référenceur](https://developers.google.com/search/docs/fundamentals/do-i-need-seo?hl=fr).
- Google considère les liens achetés pour manipuler le classement comme des
  liens toxiques ; les liens publicitaires/sponsorisés doivent être qualifiés
  `nofollow` ou `sponsored` : [règles anti-spam](https://developers.google.com/search/docs/essentials/spam-policies?hl=fr),
  consultées le 24/07/2026.
- Search Console distingue clics, impressions, CTR et position ; Google précise
  que ses clics ne correspondent pas exactement aux sessions Analytics : [Search
  Console performance](https://developers.google.com/search/blog/2022/10/performance-data-deep-dive)
  et [Search Console + Analytics](https://developers.google.com/search/docs/monitor-debug/google-analytics-search-console).
- Keyword Planner fournit des historiques arrondis et des prévisions dépendantes
  de l’enchère, du budget, de la saisonnalité et du ciblage ; ce n’est donc pas
  une mesure du trafic SEO garanti : [aide officielle Keyword
  Planner](https://support.google.com/google-ads/answer/3022575?hl=en).

### Défauts de fraîcheur ou de portée

1. Les tarifs « relevés le 18 juillet 2026 » ne sont pas accompagnés des URLs
   des prestataires dans la section Sources (`page.tsx:374-382`, `587-625`,
   `645-655`). Le lecteur ne peut pas auditer 221/321/580 €, les prix de liens,
   les TJM ou les formules d’outils. **P1.**
2. La page affiche des « fourchettes observées », mais mélange prix catalogue
   d’un vendeur et agrégations de plusieurs pages, sans taille d’échantillon,
   médiane, devise, TVA ou périmètre commun. **P1.**
3. « Keyword Planner, la seule source primaire sur vos volumes »
   (`page.tsx:610-613`) est trop absolu : Google le présente comme historique
   arrondi et prévisionnel, pas comme vérité exhaustive des requêtes. **P1.**
4. Le chiffre « un million de personnes / 150 M€ » est issu d’une campagne
   gouvernementale ancienne (2018) et ne mesure pas les pratiques SEO en 2026.
   La page DGCCRF actuelle (21/11/2022) rapporte 41 sites contrôlés, dont 25
   non conformes, sans reprendre cette estimation. Il faut dater et recadrer ce
   chiffre ou le retirer (`page.tsx:771-779`). **P1.**
5. La phrase « ce qui est notre cas, et celui de la plupart des agences
   complètes » à propos de l’achat publicitaire et de la loi Sapin n’est pas une
   donnée vérifiée (`page.tsx:867-880`). Elle mélange l’offre Hagnéré observable
   et une généralisation non sourcée. **P1.**
6. Le guide cite une étude Pew dans la FAQ comme observation de mars 2025, mais
   l’URL indique une publication du 22/07/2025 et la page ne précise pas la
   fenêtre exacte de collecte, l’échantillon ni la portée française. **P2** :
   expliciter le périmètre US et ne pas transformer une corrélation en effet
   budgétaire.
7. « 15 à 20 heures » pour les sept actions gratuites (`page.tsx:883-927`) ne
   peut être vérifié sans nombre de pages/villes : la dernière action est
   exprimée « par page ». **P1** : donner trois volumes ou supprimer le total.

### Calculs refaits

Les conversions du FormulaBox sont arithmétiquement correctes avec un TJM de
900 € et une journée de huit heures : `budget ÷ 900 × 8`. Les valeurs arrondies
221 → 1,96 h, 349 → 3,10 h, 580 → 5,16 h, 1 500 → 13,33 h, 2 500 → 22,22 h et
5 000 → 44,44 h sont cohérentes.

L’exemple Nathalie est également correct sous ses hypothèses :

```text
480 recherches × 6 % CTR = 28,8 visites/mois
28,8 × 2,5 % demandes × 1/3 signatures = 0,24 client/mois
0,24 × 4 200 € marge × 12 = 12 096 € / an
1 400 € × 12 = 16 800 € / an
12 096 − 16 800 = −4 704 € avant temps interne, outils et coût du statu quo
```

Le calcul est une **illustration fictive**, mais il ne montre qu’un cas
déficitaire. Il ne teste ni l’incertitude du CTR, ni la marge, ni le délai de
montée, ni l’attribution, ni une valeur résiduelle des actifs. Il doit être
étendu en trois scénarios et avec le coût du temps de Nathalie.

## 7. Scénarios chiffrés à produire

Les montants ci-dessous sont un modèle de calcul, pas des prix Hagnéré et pas
des moyennes de marché. La page doit demander au lecteur de remplacer chaque
cellule par son devis et ses données.

| Variable sur 12 mois | Simple | Central | Exigeant | Nature |
|---|---:|---:|---:|---|
| Audit initial HT | 800 € | 2 000 € | 6 000 € | Hypothèses éditoriales bornées par pages concurrentes |
| Forfait mensuel HT | 800 € | 1 500 € | 4 000 € | Scénarios, pas recommandation universelle |
| Coût outil dédié | 0 € | 1 200 € | 6 000 € | À remplacer par licence, devise, TVA, mutualisation |
| Temps dirigeant/équipe | 12 h | 30 h | 60 h | Hypothèse ; valoriser avec coût chargé interne |
| Coût horaire interne | 50 € | 75 € | 100 € | À mesurer, jamais présenter comme salaire réel |
| Contenu/production hors forfait | 0 € | 3 000 € | 12 000 € | À vérifier dans le devis |
| TCO avant coût d’arrêt | `800 + 12×800 = 10 400 €` | `2 000 + 12×1 500 + 1 200 + 30×75 + 3 000 = 24 450 €` | `6 000 + 12×4 000 + 6 000 + 60×100 + 12 000 = 78 000 €` | Calcul reproductible |

Ces scénarios ne disent pas quel budget acheter. Ils montrent que 1 500 €/mois
ne signifie pas 18 000 € « tout compris » si l’audit, les outils, la production
et le temps interne sont séparés. La sensibilité minimale doit varier :

- forfait mensuel ±25 % ;
- temps interne 10 / 30 / 60 h ;
- production incluse ou non ;
- horizon 6 / 12 / 18 mois ;
- marge par client et taux de transformation ;
- CTR prudent 2 %, central 4 %, haut 6 % — hypothèses, pas benchmarks ;
- perte évitée si aucune action n’est engagée.

Formules à ajouter dans le guide :

```text
TCO = audit + (forfait × mois) + outils + production hors forfait
      + (heures internes × coût horaire chargé) + migration/maintenance

Clients incrémentaux = impressions × CTR × taux de demande × taux de vente
Marge incrémentale = clients incrémentaux × marge unitaire
ROI prudent = (marge incrémentale − TCO) / TCO × 100
Coût du statu quo = marge perdue estimée + risque technique + coût d’opportunité
Point d’arrêt = date où la preuve minimale manque ou où le coût restant
                dépasse l’option Ads, interne, sprint ou report documentée
```

Le calcul doit distinguer marge réellement attribuable, chiffre d’affaires,
trafic et valeur média théorique. Search Console compte des clics ; Analytics
mesure le comportement ; aucun des deux ne prouve seul une vente.

## 8. Comparaison et position professionnelle

### Options à comparer à périmètre égal

| Option | Meilleur cas | Limite | Décision recommandée |
|---|---|---|---|
| Audit ponctuel | Beaucoup d’inconnues, site en stagnation ou refonte imminente | Ne crée rien sans capacité d’exécution | Premier achat si le dirigeant doit choisir qui corrige |
| Sprint de corrections | Blocage technique précis, équipe interne disponible | Peut laisser contenu et mesure sans pilote | Bon premier pas si les priorités sont déjà prouvées |
| Forfait mensuel | Offre validée, mesure installée, capacité de produire pendant 6–12 mois | Risque de payer une capacité inutilisée ou des livrables vagues | À signer après baseline, périmètre et clause de sortie |
| Exécution interne | Compétence et temps disponibles | Coût salarial, arbitrage et dépendance à une personne | Rentable si le besoin est simple et récurrent |
| Google Ads | Besoin de tester vite une demande ou saison courte | Le clic cesse quand le budget cesse ; coût média séparé | À comparer sur 90 jours avec marge et coût par demande |
| Report/aucun achat | Trésorerie faible, demande non prouvée ou site non convertissant | Coût du statu quo et apprentissage retardé | Valable si le calcul prudent est négatif, avec date de réexamen |

### Opinion professionnelle tranchée

**Pour une PME, je déconseille de signer directement douze mois de SEO sur la
seule base d’une fourchette mensuelle.** Le premier euro doit acheter une
réponse vérifiable à une question : quelle demande commerciale existe, quelles
pages peuvent la servir, quels blocages empêchent leur visibilité et qui peut
les corriger ? Un audit court ou un sprint borné est souvent plus prudent qu’un
forfait bon marché mais opaque.

**Je déconseille aussi d’appeler « rentable » un SEO qui ne relie pas les
requêtes aux demandes et à la marge.** Les positions et les clics sont des
signaux de pilotage, pas le résultat économique. Un forfait plus cher peut être
le meilleur choix si son périmètre réduit le temps interne et produit des actifs
réutilisables ; il peut aussi être le pire si le site ne convertit pas.

### Contre-cas loyaux

- Un artisan local avec une fiche correctement renseignée et peu de concurrence
  peut commencer seul avant de financer un forfait.
- Un e-commerce volumineux ou une migration peut justifier un audit supérieur à
  3 000 € ; comparer au nombre d’URL et au risque de perte, pas au prix d’un site
  vitrine.
- Une activité B2B de niche à faible volume peut avoir un SEO rentable avec peu
  de visites si une affaire signée a une forte marge ; le volume seul serait un
  mauvais critère.
- Un lancement urgent ou une saison courte peut privilégier Ads, puis utiliser
  les requêtes et conversions observées pour décider du SEO.
- Une équipe interne déjà rémunérée ne rend pas le SEO gratuit : le temps pris à
  la vente, au métier ou au support reste un coût d’opportunité.

## 9. Audit de pédagogie et conversion

### Ce qui fonctionne

Le début est humain, les mots SEO/TJM/CTR sont expliqués lorsqu’ils deviennent
utiles, les exemples sont annoncés fictifs, et la conclusion accepte le report.
Le CTA demande zone, site, objectifs et devis, ce qui prolonge correctement la
question du lecteur (`page.tsx:1101-1104`).

### Ce qui reste trop abstrait ou commercial

- « Prix observé » sonne comme une statistique alors que la méthode est absente.
- Le tableau des liens donne des montants précis sans audience, pays, type de
  publication, `sponsored`, durée, rédaction et intermédiaire.
- La répartition 20/50/20/10 est honnêtement qualifiée de convention, mais sa
  présence visuelle peut être retenue comme une norme.
- Le coût interne et la responsabilité de produire/valider des contenus restent
  implicites.
- Le lecteur ne voit pas le livrable exact à 800 €, 1 500 € ou 5 000 € sur un
  même site et un même horizon.
- La référence à une fraude administrative ancienne détourne de la décision
  budgétaire et peut donner l’impression que le SEO ordinaire est associé à une
  fraude.

### Réécriture d’ouverture recommandée

> Vous avez reçu trois devis SEO qui vont de quelques centaines à plusieurs
> milliers d’euros par mois et vous ne savez pas s’ils parlent du même travail ?
> La réponse courte est non : un forfait peut acheter un audit, des corrections,
> des pages, des liens, du pilotage — ou seulement un rapport mensuel. Dans ce
> guide, vous allez comparer trois budgets à périmètre égal, ajouter le temps de
> votre équipe, calculer un scénario prudent et décider s’il faut commencer par
> un audit, un sprint, un forfait, Google Ads ou ne rien signer encore.

Cette ouverture répond au vrai doute avant les chiffres et annonce une décision.

## 10. Défauts par sévérité

### P0 — aucun constaté

Je n’ai pas trouvé de faux client, faux résultat Hagnéré, prix présenté comme
tarif Hagnéré, promesse de première position ou faux `Offer` dans le guide. Les
exemples sont marqués fictifs et les limites sont visibles. Une future
présentation des fourchettes comme statistiques officielles, ou une garantie de
ROI, deviendrait un P0.

### P1 — corriger avant publication de référence

| ID | Défaut | Preuve localisable | Risque | Correction exacte |
|---|---|---|---|---|
| P1-01 | Sources de prix non localisées | `page.tsx:249-295`, `587-625`, `645-655`, sources `1106-1207` | Le lecteur ne peut pas vérifier les montants | Lier chaque famille de prix à l’URL, date, pays, devise, HT/TTC, périmètre et nature catalogue/étude ; supprimer tout montant non traçable. |
| P1-02 | Périmètres incomparables | `page.tsx:233-240`, `364-382` | Local, national, audit et article sont lus comme une même unité | Définir site, pages, marché, langues, livrables, mois, engagement et exclusions avant chaque fourchette. |
| P1-03 | « Prix 2026 » sans échantillon/méthode | `page.tsx:374-382` | Une collecte de pages de vendeurs ressemble à une moyenne de marché | Employer « prix catalogues consultés », donner N et date, ou retirer l’agrégation. |
| P1-04 | Keyword Planner présenté comme seule source primaire | `page.tsx:609-613` | Le lecteur surestime un historique arrondi et confond SEO/Ads | Dire ce que mesure Keyword Planner, mentionner Search Console/Trends et demander une validation par données propres. |
| P1-05 | Coût interne non intégré | `page.tsx:883-927`, `937-985` | ROI et comparaison sous-estiment le temps dirigeant | Ajouter heures, coût chargé, validation, interviews, publication et révisions dans le TCO. |
| P1-06 | Total 15–20 h non reproductible | `page.tsx:883-888` et dernière ligne « par page » | Impossible de savoir si le DIY est réaliste | Donner simple/central/exigeant selon nombre de pages et villes, ou supprimer le total. |
| P1-07 | Aucun TCO égalisé ni coût du statu quo | Sections `roi` et `pas-le-bon-investissement` | Le dirigeant ne compare pas SEO, Ads, interne, sprint et report | Ajouter tableau 6/12/18 mois avec outils, production, temps interne, maintenance et perte évitée. |
| P1-08 | Pas de sensibilité ni porte d’arrêt | `page.tsx:979-985` | Le scénario unique peut ancrer une décision négative ou positive | Ajouter trois scénarios, variables ±25 %, J30/J90, seuil de pause et propriétaire de la revue. |
| P1-09 | Prix de liens et TJM exacts sans preuve par ligne | `page.tsx:517-524`, `645-655` | Précision apparente, risque de prix périmé ou de devise cachée | Lier les pages de vendeurs et qualifier chaque ligne ; sinon remplacer par critères de devis. |
| P1-10 | Loi Sapin et généralisation Hagnéré non étayées | `page.tsx:867-880` | Confusion entre achat média et SEO naturel ; assertion d’entreprise non vérifiée | Séparer SEA et SEO, citer le texte primaire, retirer « notre cas/la plupart » ou le prouver. |
| P1-11 | Statistique DGCCRF ancienne et hors sujet | `page.tsx:771-779` | Chiffre 2018/2022 lu comme alerte de prix SEO 2026 | Remplacer par le contrôle DGCCRF daté et pertinent, ou retirer le paragraphe. |
| P1-12 | Aucun document de décision téléchargeable | CTA `page.tsx:1101-1104` | Le lecteur ne peut pas comparer deux devis sans outil | Ajouter un comparateur vierge testé : prix, livrables, heures, outils, actifs, preuves, sortie. |

### P2 — améliorer ensuite

| ID | Amélioration | Action |
|---|---|---|
| P2-01 | Lecture annoncée possiblement basse ou haute | Mesurer le texte rendu, pas le TS, et ajuster `readTimeMin`. |
| P2-02 | Dossier de recherche absent | Créer `docs/research/prix-referencement-naturel.md` selon le modèle avant toute réécriture. |
| P2-03 | FAQ Pew trop compacte | Donner date, pays, fenêtre de collecte et limite d’extrapolation. |
| P2-04 | Lexique | Définir coût d’acquisition, TCO, attribution, CTR, RPO de mesure et coût d’opportunité sans surcharge. |
| P2-05 | Mobile | Transformer les tableaux larges en cartes/listes et effectuer une lecture réelle à 390 px. |
| P2-06 | Dates du registre | Mettre `dateModified` à jour seulement après une correction éditoriale effectivement livrée. |
| P2-07 | Données structurées | Vérifier que les dates, titre, image OG et FAQ visible restent les mêmes après correction. |

## 11. Scorecard indépendante avant correction

| Axe | Note /10 | Justification |
|---|---:|---|
| Intention | 9 | Question « quel budget SEO ? » claire dès l’ouverture. |
| Décision | 7 | Plusieurs options et avertissements, mais aucun TCO/arrêt à périmètre égal. |
| Pédagogie | 8 | Voix dirigeant, définitions dans le flux, exemples ; quelques tableaux ancrent des chiffres fragiles. |
| Profondeur | 8 | Technique, contenu, liens, outils, contrat, délai et ROI ; temps interne et scénarios manquent. |
| Preuve | 6 | Google et outils officiels bien référencés, mais prix et statistiques commerciales peu traçables. |
| Comparaison | 7 | Local/national et SEO/Ads évoqués, sans périmètre/horizon commun. |
| Originalité | 8 | Conversion budget/TJM et refus des garanties utiles ; comparateur reproductible absent. |
| Style | 8 | Globalement humain et nuancé ; l’alerte DGCCRF détourne le sujet. |
| Conversion | 8 | CTA honnête et bon fit implicite ; aucune ressource autonome. |
| SEO / produit | 8 | Metadata, Article, BreadcrumbList, FAQ visible, OG et maillage solides ; QA de production non prouvée. |
| **Total** | **77/100** | **Sous le seuil de 90 ; P1 à corriger.** |

## 12. Plan de correction localisable

### Passe 1 — recherche et preuve

1. Créer le dossier de recherche et consigner toutes les URLs de prix avec date,
   pays, devise, nature et périmètre.
2. Remplacer les absences par des formulations prudentes ; dater l’ancienne
   statistique DGCCRF ou la retirer.
3. Vérifier Google, Keyword Planner, Search Console, liens `sponsored`, CPI et
   loi Sapin avec les sources primaires directes.
4. Refaire une SERP France + US + UK + Australie et documenter les angles morts.

### Passe 2 — réécriture

1. Réécrire l’ouverture autour de trois devis incomparables et d’une décision.
2. Remplacer les fourchettes isolées par une matrice simple/centrale/exigeante.
3. Ajouter TCO, coût interne, outils, production hors forfait, coût du statu quo,
   sensibilité 6/12/18 mois et critères J30/J90.
4. Fournir un comparateur téléchargeable réel, versionné et testé, ou retirer la
   promesse.
5. Séparer clairement SEO naturel, SEA et loi Sapin.

### Passe 3 — contre-audit

1. Recalculer chaque division, total, taux, devise et arrondi avec une seconde
   méthode ; vérifier que « simple/central/exigeant » ne se chevauchent pas.
2. Vérifier chaque prix contre sa page source et noter les modifications de
   tarif ; aucune page commerciale ne devient une moyenne sans méthode.
3. Tester six décisions : audit, sprint, forfait, interne, Ads et report ; le
   verdict doit changer lorsque la marge, le temps interne ou l’horizon change.
4. Vérifier que le CTA, les droits, les actifs et l’outil de mesure sont
   cohérents avec l’offre SEO Hagnéré.

### Passe 4 — plume et QA publication

1. Faire relire l’ouverture et un tableau par un dirigeant non technique qui n’a
   pas écrit le texte ; ne jamais présenter cette relecture comme une étude.
2. Build, lint, TypeScript, tests de liens, métadonnées et JSON-LD.
3. Inspection navigateur réelle à 320, 390, 768, 1024, 1 280 et 1 600 px, avec
   les tableaux, la formule, la FAQ et le CTA.
4. Vérification déployée séparée : HTML, canonical, robots, sitemap, OG, dates,
   liens et Search Console. Rien de cette liste n’est prouvé par le présent
   audit.

## 13. Conditions de sortie

Le guide peut passer en revue humaine lorsque :

- chaque prix visible possède source directe, date, pays, devise, HT/TTC,
  périmètre et nature catalogue/étude ;
- les budgets simple/central/exigeant sont calculables et incluent le temps
  interne, les outils, la production hors forfait et le coût du statu quo ;
- la formule ROI distingue marge, trafic, attribution et hypothèses ;
- une variation de ±25 % du forfait, du temps, du CTR et de l’horizon peut
  réellement changer le verdict ;
- J30/J90, propriétaire de la mesure, seuil de pause et option de report sont
  explicitement écrits ;
- la statistique DGCCRF et la loi Sapin sont datées, contextualisées et ne
  généralisent pas l’activité Hagnéré sans preuve ;
- un comparateur téléchargeable existe réellement et produit une décision sans
  formulaire obligatoire ;
- les liens, dates, JSON-LD, OG, tableaux mobiles et CTA ont été contrôlés dans
  un vrai navigateur ;
- le score recalculé atteint au moins 90/100, sans axe clé sous 8/10 ;
- la production, la publication, le sitemap, l’exploration et l’indexation sont
  rapportées séparément, chacune avec une preuve datée.

## Sources consultées — accès au 24/07/2026

### Sources primaires et droit

- [Google SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Google — Avez-vous besoin d’un référenceur ?](https://developers.google.com/search/docs/fundamentals/do-i-need-seo?hl=fr), mise à jour 09/06/2026
- [Google — Règles anti-spam](https://developers.google.com/search/docs/essentials/spam-policies?hl=fr)
- [Google — Search Console performance](https://developers.google.com/search/blog/2022/10/performance-data-deep-dive)
- [Google — Search Console et Analytics](https://developers.google.com/search/docs/monitor-debug/google-analytics-search-console)
- [Google Ads — Keyword Planner](https://support.google.com/google-ads/answer/7337243?hl=en)
- [Google Ads — prévisions Keyword Planner](https://support.google.com/google-ads/answer/3022575?hl=en)
- [DGCCRF — faux sites d’aide administrative](https://www.economie.gouv.fr/dgccrf/laction-de-la-dgccrf/les-enquetes/sites-internet-daide-aux-demarches-administratives), écrit 21/11/2022
- [Légifrance — article L121-2 du code de la consommation](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000044563114)
- [Légifrance — article L131-3 du CPI](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958)
- [Chorus Pro — mandat d’achat d’espace](https://portail.chorus-pro.gouv.fr/aife_documentation?id=kb_article_view&sysparm_article=KB0011522)

### Outils et études internationales

- [Semrush — SEO Toolkit pricing](https://www.semrush.com/kb/1547-seo-toolkit-pricing-limits)
- [Screaming Frog — FAQ et prix](https://www.screamingfrog.co.uk/seo-spider/faq/)
- [Pew Research Center — AI summaries and clicks](https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/), 22/07/2025
- [Whito — UK Marketing Prices Study 2026](https://whito.co.uk/research/uk-marketing-prices-study/), prix collectés juin 2026
- [Digital Applied — US SEO Pricing 2026](https://www.digitalapplied.com/blog/seo-pricing-2026-what-seo-services-cost), 06/04/2026
- [StudioHawk — Australia SEO Pricing](https://studiohawk.com.au/blog/seo-pricing/), 09/12/2025
- [SeoMix — audit SEO et tarifs](https://www.seomix.fr/combien-coute-un-audit-seo/), mise à jour 15/11/2024
- [Deux.io — tarifs agences SEO 2026](https://deux.io/tarifs-agences-seo/)
- [SEO.fr — coût d’une prestation SEO](https://www.seo.fr/informations/combien-coute-prestation-seo)
- [Axtracom — tarifs référencement naturel 2026](https://www.axtracom.com/prix-referencement-naturel)
