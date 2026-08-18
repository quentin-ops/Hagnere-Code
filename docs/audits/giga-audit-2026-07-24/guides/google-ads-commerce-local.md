# Giga-audit — Google Ads pour un commerce local

**Date de l’audit :** 24 juillet 2026  
**Périmètre :** page `google-ads-commerce-local`, registre, dossier de recherche, conversion et QA déclarée.  
**Question dirigeant auditée :** « Les annonces m’apportent-elles réellement des appels, des visites, des réservations ou des ventes dans mon établissement, et puis-je le vérifier avant d’augmenter le budget ? »  
**Score actuel : 76/100**  
**Sévérité :** P0 = 0 · P1 = 16 · P2 = 10  
**Verdict :** très bonne page d’orientation : elle distingue clic, itinéraire, appel, visite modélisée et vente, demande une fiche exacte, une zone réaliste et une mesure simple. Elle n’est pas encore exhaustive pour un commerçant qui veut investir : les scénarios chiffrés, le seuil CPL/CAC/ROAS, le budget et le délai d’apprentissage, Merchant Center/inventaire local, les requêtes négatives, la saisonnalité/concurrence, l’offline conversion et le consentement, la marge et les faux leads restent trop peu développés. Le score final « 19/20 » du dossier de recherche ne doit pas être repris comme score externe : cet audit indépendant relève des P1.

## 1. Empreinte et statut de preuve

| Élément | Constat vérifié |
|---|---|
| Page | `src/app/guides/google-ads-commerce-local/page.tsx` |
| SHA-256 page | `7db216494bedad0c880eddb21cd3e40f4efb4cd414b5e30829a1c0656d37b252` |
| Image OG | `src/app/guides/google-ads-commerce-local/opengraph-image.tsx` |
| SHA-256 OG | `fb2b63040bb584b9c0774586e49e1198941c77dab0d26f2d15252479f4f1fb79` |
| Registre | titre, description, canonical, dates `2026-07-24`, lecture annoncée 9 min |
| Structured data visible | helpers `buildGuideMetadata` et `buildGuideStructuredData` ; aucun test Rich Results effectué |
| Recherche | quatre passes déclarées terminées, sources Google consultées le 23/07/2026 |
| Artefact | fiche de suivi copiable ; pas de téléchargement réel |
| Build, liens, responsive, Business Profile réel, Merchant Center, consentement, production/indexation | non vérifiés dans cette mission |

Les passes éditoriales P1–P4 du dossier ne doivent pas être confondues avec P0/P1/P2 dans ce rapport. « P1 » signifie ici une correction importante avant de présenter la page comme référence décisionnelle.

## 2. Forces à préserver

- L’ouverture à la fermeture du magasin est très humaine : 120 itinéraires et 34 actions « Appeler » ne deviennent pas 154 clients.
- Les cinq résultats (appel, réservation, itinéraire, visite modélisée, vente observée) indiquent ce qu’ils prouvent et ce qu’ils ne prouvent pas.
- Le texte ne promet ni fréquentation, ni ROAS, ni coût par visite ; il rappelle l’éligibilité des visites en magasin.
- La checklist adresse/zone, horaires, téléphone, page et capacité est directement actionnable.
- Le ciblage « Présence ou intérêt » est présenté avec sa limite ; le rayon n’est pas vendu comme universel.
- Search et Performance Max viennent après l’objectif, ce qui évite un choix purement technique.
- La fiche de suivi impose un résultat principal, une nature observée/modélisée, un responsable et une date de décision.
- Le scénario fictif refuse d’additionner 8 réservations et 10 ventes avant déduplication.
- Le CTA est tardif, différable et demande un cadrage sans données personnelles.

## 3. P1 — corrections nécessaires

### P1-01 — Ajouter des scénarios chiffrés de budget, funnel et délai

La page reste presque entièrement qualitative. Un dirigeant a besoin de voir au moins un cas de petit commerce, un cas de service sur rendez-vous et un commerce avec stock. Pour le même périmètre, montrer impressions → clics → appels/réservations → visites → ventes → marge.

**Exemple illustratif fictif à intégrer :** 2 000 € média, 500 clics, 60 appels ou formulaires, 30 demandes uniques, 15 rendez-vous/réservations, 10 visites observées, 6 ventes, 80 € de marge contributive par vente, 500 € de gestion/création/mesure. Coût complet = `2 500 €`; CPL brut = `2 000 / 30 = 66,67 €`; CAC observé = `2 500 / 6 = 416,67 €`; marge = `6 × 80 = 480 €`; résultat incrémental illustratif = `480 − 2 500 = −2 020 €`. Le scénario montre qu’un volume d’actions locales ne garantit pas la rentabilité.

### P1-02 — Calculer CPL, CPQL, CAC, ROAS et marge

Le guide dit de raisonner sur la marge, mais n’écrit aucune formule. Ajouter : `CPL = coût / demandes uniques`, `CPQL = coût / appels ou réservations qualifiés`, `CAC = coût complet / ventes attribuables`, `ROAS = revenu attribué / média` et `marge d’acquisition = marge incrémentale − coût complet`. Distinguer revenu, marge brute, marge contributive, remise, panier moyen, retours et capacité. Un ROAS supérieur à 1 n’est pas nécessairement profitable.

### P1-03 — Définir le seuil maximum et le facteur de prudence

Ajouter : `CPL maximal = marge contributive par vente × taux qualification × taux vente × facteur prudence`. Retirer les coûts variables d’accueil, de livraison, de réservation ou de traitement. Le facteur de prudence et les taux doivent être des hypothèses datées, pas des normes universelles. Si le magasin est saturé, le seuil économique devient aussi un seuil de capacité : ne pas acheter davantage de demandes non traitables.

### P1-04 — Budget de test, paliers et lag

« Lancer un test limité » n’indique pas combien de jours, quel volume, ni quand lire. Ajouter un plan : budget initial, coût maximal autorisé, durée minimale correspondant au cycle de réservation/achat, date de maturité, paliers d’augmentation et conditions d’arrêt. Ne pas promettre deux semaines ou un nombre universel de conversions ; faire saisir l’historique du commerce et le délai de vente.

### P1-05 — Inclure saisonnalité, météo, jours, promotions et concurrence

Une fermeture exceptionnelle, un samedi, une météo ou une promotion peuvent déplacer les visites sans effet publicitaire. Ajouter un journal de contexte : jours ouverts, heures, stock, vacances, météo, promotions, concurrence locale, événements et travaux. Comparer périodes comparables et ne jamais appeler une semaine soldes un test normal.

### P1-06 — Merchant Center et inventaire local

Pour un commerce de produits, la page ne parle ni flux produit, ni Merchant Center, ni disponibilité locale, ni prix, ni mises à jour d’inventaire. Ajouter une branche conditionnelle : produits vendus en ligne ou magasin, identifiants SKU, stock par établissement, prix et horaires, fréquence de mise à jour, rupture et politique de retour. Si l’inventaire n’est pas fiable, ne pas payer pour annoncer un produit indisponible.

### P1-07 — Distinguer Search, Maps, Local et Performance Max actuels

La page mentionne Search et Performance Max, mais ne donne pas de matrice sur les surfaces. Ajouter ce que l’entreprise contrôle, les actifs nécessaires, l’objectif, la visibilité des requêtes, les données locales et les limites de chaque format. Ne pas réenseigner l’ancien produit « Campagnes locales » comme produit universel ; les noms et disponibilités changent.

### P1-08 — Requêtes négatives, zones exclues et concurrence

La zone seule ne protège pas le budget. Ajouter une routine de termes de recherche : exclusions hors offre, demandes d’emploi, gratuit, réparation non servie, zones non couvertes, produits non stockés, concurrents si stratégie pertinente. Vérifier les doublons avec campagnes de marque et requêtes organiques ; conserver un journal des exclusions et ne pas supprimer une demande rentable sans preuve.

### P1-09 — Tracking consentement, offline conversions et CRM

Les actions locales sont expliquées, mais le guide ne dit pas comment relier appel, réservation et vente. Ajouter identifiant, GCLID/GBRAID/WBRAID quand disponible, CMP/Consent Mode, transaction ou réservation, statut CRM, import offline, déduplication navigateur + serveur, date de conversion et valeur. Les données hachées ou importées restent soumises aux règles applicables ; la page n’est pas un avis juridique.

### P1-10 — Appels, directions, visites et faux leads

Un clic « Appeler » n’est pas un appel reçu. Ajouter appel connecté, durée minimale justifiée, appel manqué, spam, agence/standard, réservation honorée, itinéraire sans arrivée, visite modélisée et vente associée. Un lead local peut être doublé par formulaire, téléphone et passage ; conserver le brut, le dédoublonné, le qualifié et l’issue.

### P1-11 — Comparer observé, modélisé et incrémental

La page distingue observé/modélisé, mais pas attribué/incrémental. Ajouter une phrase : Google peut attribuer un signal à la campagne sans prouver que la campagne a créé la vente. Prévoir un groupe témoin, une zone comparable ou une comparaison avant/après prudente seulement si le commerce peut le faire ; sinon afficher une estimation et ses limites.

### P1-12 — Comparaison SEO local / Google Ads / Meta

Le lien SEO local est utile, mais la décision n’est pas comparée. Ajouter un encadré à périmètre égal : Ads = achat immédiat d’intention, SEO local = actif plus lent et fiche/site/avis, Meta = découverte et retargeting avec autre attribution. Comparer marge, délai, contrôle géographique, capacité de création et coût de production ; ne pas opposer un CPL immédiat à un coût SEO non amorti.

### P1-13 — Intégrer frais réels et capacité d’accueil

Le coût complet de la fiche contient média, gestion, création et remise, mais pas explicitement agence, landing, Merchant Center, téléphone, CRM, temps d’accueil, stock, livraison, annulation et formation. Ajouter coûts fixes/variables et une capacité de réponse : délai de rappel, places disponibles, personnel, stock et horaires réellement tenus.

### P1-14 — TCO 12/36/60 et sortie

Ajouter un tableau à même périmètre :

| Option fictive | Setup | Run annuel | TCO 12 mois | TCO 36 mois | TCO 60 mois |
|---|---:|---:|---:|---:|---:|
| Test interne Search + fiche existante | 1 500 € | 12 000 € | 13 500 € | 37 500 € | 61 500 € |
| Agence Search/PMax + mesure appels/CRM | 5 000 € | 24 000 € | 29 000 € | 77 000 € | 125 000 € |
| Catalogue local + stock + suivi magasin | 12 000 € | 36 000 € | 48 000 € | 120 000 € | 192 000 € |

Valeurs purement fictives ; formule `TCO(n) = setup + n × run annuel`, hors TVA et coûts communs. Ajouter sensibilité du budget média, de la marge, du nombre de magasins et du temps d’accueil. Prévoir sortie : export des campagnes, propriété du Business Profile/Merchant Center, comptes et tags, historique, suppression des accès agence et reprise manuelle.

### P1-15 — Stop/go par établissement

La page décide établissement par établissement mais sans portes chiffrées. Ajouter : stop technique si fiche/horaires/consentement/tracking faux ; go pilote si résultat principal, zone, capacité et rapprochement sont prêts ; go palier si marge et qualité restent sous le seuil ; stop économique si CAC mature dépasse la marge ; stop stock si l’inventaire ou les appels ne peuvent être tenus.

### P1-16 — Artefact et QA technique

La fiche de suivi est copiable, pas téléchargeable. Ne promettre aucun fichier tant qu’il n’existe pas. Si un modèle est créé, inclure établissement, zone, format, inventaire, résultat, source observée/modélisée, coûts, marge, saisonnalité, rejets et date de décision. Build, liens, JSON-LD, viewport 320–1600 px, accessibilité, route, sitemap et rendu réel restent à vérifier avant claim de publication/indexation.

## 4. P2 — améliorations secondaires

1. Ajouter un schéma `requête → annonce → clic → appel/réservation → visite → vente → marge`.
2. Ajouter un glossaire Business Profile, Merchant Center, composant Lieu, Local, PMax, offline conversion et incrémentalité.
3. Ajouter un cas magasin et un cas zone desservie avec décisions différentes.
4. Ajouter une FAQ sur stock, prix, refus d’annonce, rayons, horaires exceptionnels et appel manqué.
5. Montrer une table de sensibilité marge × taux de vente × budget.
6. Ajouter une cadence de revue hebdomadaire et une revue mensuelle des termes de recherche.
7. Ajouter un journal de promotions, météo, travaux, jours fermés et concurrence.
8. Ajouter l’option « ne pas diffuser » si le stock, le personnel ou la page sont insuffisants.
9. Vérifier la copie des tableaux et cartes sur mobile et à l’impression.
10. Relier la page à la maintenance et au suivi de conversions sans répéter le CTA.

## 5. Benchmark international de couverture

Les pages commerciales ci-dessous servent au benchmark éditorial, pas à valider leurs chiffres.

| Marché / source | Axe plus développé | Ce que notre guide doit couvrir | Limite |
|---|---|---|---|
| France — [JVWEB, Local Inventory Ads](https://www.jvweb.fr/post/google-local-inventory-ads-comment-ca-marche) | disponibilité produit locale et catalogue | ajouter Merchant Center, SKU, stock et rupture | agence, périmètre retail étroit |
| France — [Iambeezy, Google Ads commerçants 2026](https://blog.iambeezy.app/fr/google-ads-commercants-locaux-france-2026-budget-parametrage-roi/) | budget et paramétrage pratique | conserver la pédagogie sans reprendre des benchmarks universels | chiffres commerciaux non vérifiés |
| États-Unis — [Google Ads local ads](https://support.google.com/google-ads/answer/3246303) | objectifs, surfaces et conditions de produit | traduire la documentation en choix par résultat et preuve | fournisseur de la plateforme |
| Royaume-Uni — [Google Business Profile guidance](https://support.google.com/business/answer/3038177) | exactitude et gestion de la fiche d’établissement | ajouter propriétaire, horaires, téléphone et processus de mise à jour | documentation produit, pas calcul de marge |
| Australie — [Google Ads location targeting](https://support.google.com/google-ads/answer/1722038) | présence/intérêt et limites géographiques | confronter rayon, zone servie, déplacements et zones exclues | règle plateforme, disponibilité variable |
| DACH — [Motainment B2B Search budgets](https://motainment.de/blog/realistic-ad-budgets-for-b2b-search) | qualification, budget et attentes B2B | reprendre la distinction signal/lead qualifié, en version commerce local | données auto-déclarées et non comparables |

**Conclusion benchmark :** l’angle « signal vs vente observée » est déjà plus honnête que la plupart des pages de budget. L’écart à combler est le retail réel : inventaire, appels, horaires, promotion, marge, saison, faux leads et décision par établissement.

## 6. Sources primaires à revalider

- [Google Ads — annonces locales et objectifs](https://support.google.com/google-ads/answer/3246303?hl=fr), [composants Lieu](https://support.google.com/google-ads/answer/2404182?hl=fr), [actions locales](https://support.google.com/google-ads/answer/9013908?hl=fr-419) et [visites en magasin](https://support.google.com/google-ads/answer/6100636?hl=fr) : objectifs, surfaces et modélisation.
- [Google Ads — ciblage géographique](https://support.google.com/google-ads/answer/1722038?hl=fr) : présence/intérêt, exclusions et limites.
- [Google Ads — composants](https://support.google.com/google-ads/answer/7331111?hl=fr) et [règles composants Lieu](https://support.google.com/adspolicy/answer/144649?hl=fr) : diffusion et conformité produit.
- [Google Business Profile — gérer la fiche](https://support.google.com/business/answer/3038177) : exactitude, horaires et établissement.
- [Google Merchant Center — inventaire local](https://support.google.com/merchants/answer/3057972) : produits, flux et disponibilité selon éligibilité.
- [Google Ads — conversions appels](https://support.google.com/google-ads/answer/6100664) et [conversions avancées prospects](https://support.google.com/google-ads/answer/15713840) : mesure et import offline.
- [GA4 — attribution](https://support.google.com/analytics/answer/10597962) : modèle et fenêtre de lookback.
- [CNIL — cookies et traceurs](https://www.cnil.fr/fr/les-cookies-et-autres-traceurs) et [RGPD, article 5](https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre2) : consentement et minimisation.

Revalider les URLs, l’éligibilité, les noms de formats et les obligations avant publication. Aucune moyenne de CPC, rayon, ROAS, conversion de visite ou budget n’est un fait universel.

## 7. Scorecard et conditions de sortie

| Axe | Note | Justification |
|---|---:|---|
| Plume et intention locale | 9/10 | scène de caisse, langage dirigeant |
| Distinction des preuves | 9/10 | observé/modélisé et cinq signaux |
| Établissement et zone | 9/10 | checklist et ciblage prudent |
| Formats Google actuels | 6/10 | Search/PMax évoqués, Local/Maps/stock peu détaillés |
| Chiffres et économie | 4/10 | aucun CPL/CAC/ROAS/TCO chiffré |
| Tracking/offline/consentement | 5/10 | sources indirectes, procédure absente |
| Retail/opérations | 5/10 | inventaire, appels, saison et capacité incomplets |
| Comparaison SEO/Meta | 4/10 | lien SEO, pas de matrice |
| Conversion/artefact | 8/10 | CTA sobre, fiche copiable |
| SEO/QA prouvée | 7/10 | helpers SEO visibles, contrôles non exécutés |
| **Total** | **76/100** | très bon cadrage, 16 P1 avant guide exhaustif |

Déclarer la page prête à être présentée comme référence seulement lorsque :

1. le funnel et les scénarios budget/CPL/CAC/ROAS/marge sont calculables ;
2. Merchant Center/inventaire, formats, zones, requêtes négatives et saisonnalité sont traités ;
3. appels, réservations, visites modélisées, ventes, consentement et offline conversions sont raccordés ;
4. le TCO 12/36/60, les seuils stop/go, la capacité et le plan de sortie sont écrits ;
5. les sources et disponibilités Google sont revalidées ;
6. l’artefact est réellement livré ou annoncé seulement comme bloc copiable ;
7. build, liens, JSON-LD, responsive, accessibilité, route, sitemap et état d’indexation sont vérifiés séparément.

**État après cet audit :** rapport produit uniquement. Aucun guide, recherche, registre, build, commit, push ou déploiement n’a été modifié.
