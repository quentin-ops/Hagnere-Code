# Audit approfondi — `pourquoi-mon-site-ne-convertit-pas`

Date : 24 juillet 2026

Auditeur concurrentiel : audit statique, sources rouverts et benchmark web
international ; aucune modification du guide

Snapshot :

- `src/app/guides/pourquoi-mon-site-ne-convertit-pas/page.tsx` —
  `132deb048ffac7e9ff55d02dda670381cf3f9d616073a5d3bcef0a0b892f119b`
- `src/app/guides/pourquoi-mon-site-ne-convertit-pas/opengraph-image.tsx` —
  `7f664e1630102a0ee1ff7b06def18ec70e82ce661b58482de0b33f89cec566e1`
- `src/lib/guides.ts` —
  `8663e6e84352121ec854393e049492a1c2b72f242166141e5d31e0911b43cb09`
- `docs/research/pourquoi-mon-site-ne-convertit-pas.md` —
  `493fbf9a68cd773d82d4fa9ae836ee46811ec67fdfd95c69549bb0f0fd53de02`

## 1. Verdict exécutif

```text
Lecteur exact : dirigeant de TPE/PME, indépendant ou responsable commercial qui
  voit des visites mais trop peu d'appels, devis, rendez-vous ou ventes.
Question réelle : « Est-ce vraiment mon site qui bloque, à quelle étape, et que
  puis-je corriger avec mon budget avant de payer une refonte ? »
Décision attendue : distinguer mesure, trafic, offre, confiance, formulaire et
  suivi commercial, puis choisir une action proportionnée ou ne rien refaire.
Réponse actuelle en une phrase : remonter le parcours dans l'ordre, compter les
  contacts réels, vérifier la qualité des visiteurs et corriger la première cause
  prouvée avant de refaire le site.
Défaut qui coûte le plus de valeur : le guide explique très bien l'arbre, mais
  retire le fil rouge chiffré préparé dans le dossier de recherche ; le lecteur
  ne peut donc ni calculer le coût du statu quo, ni comparer un correctif de 0 €,
  1 900 € ou une refonte à une valeur commerciale mesurée.
Niveau actuel : B
Priorité : haute
Statut : audité, à réécrire puis contre-auditer
```

### Score avant correction

| Axe | Note /10 | Preuve localisable | Manque décisif |
| --- | ---: | --- | --- |
| Intention | 9 | Hero et introduction, lignes 161–162 et 218–242 | Le titre vise « ne convertit pas », tandis que le besoin réel mêle leads, ventes et e-commerce. |
| Décision | 8 | Arbre de diagnostic, lignes 483–521 et méthode 732–762 | Pas de seuils ni de calcul pour choisir entre suivi, page, mesure ou refonte. |
| Pédagogie | 8 | Définition, tableaux et questions humaines, lignes 226–372 | Les concepts sont clairs, mais sans cas chiffré filé le dirigeant doit faire lui-même les calculs. |
| Profondeur | 7 | Mesure, trafic, confiance, suivi commercial, lignes 374–685 | Funnel qualifié, cohortes, A/B test, coût du statu quo et protocole de correction restent minces. |
| Preuve | 7 | Google, CNIL, HBR, FEVAD, France Num, lignes 775–856 | Sources primaires peu nombreuses dans le corps et absence de méthode pour les chiffres de décision. |
| Comparaison | 6 | Tableau de correctifs, lignes 688–729 | Aucun périmètre égal, horizon, TCO, scénario de budget ou comparaison « garder/refaire ». |
| Originalité | 9 | Refus explicite de la refonte automatique, lignes 235–242 et 662–685 | Angle très différenciant, mais le cas annoncé dans la recherche a disparu de la page. |
| Style | 8 | Ton direct, vocabulaire expliqué et CTA tardif | Quelques recommandations génériques (« travailler le SEO », « simplifier ») sans preuve d'arrêt. |
| Conversion | 7 | CTA de diagnostic, lignes 764–773 | Le livrable, le périmètre, le prix et la preuve du diagnostic ne sont pas décrits ; conflit d'intérêt seulement implicite. |
| SEO/produit | 7 | Canonical, Article, Breadcrumb, FAQ visible, lignes 17–105 et 215–216 | Le fichier `opengraph-image.tsx` est une metadata file-based Next.js, mais le head et le rendu réel restent non vérifiés ; temps de lecture et indexation non prouvés. |

Total : **76/100**

Registre : **0 P0, 7 P1, 10 P2**. Aucun P0 (promesse dangereuse ou blocage
immédiat) n'est prouvé sur le snapshot. Les P1 empêchent une décision économique
ou un diagnostic reproductible ; les P2 concernent la couverture, la confiance,
la fraîcheur et la QA produit.

## 2. Ce que le guide dit réellement

L'ouverture est humaine et saine : elle décrit le dirigeant qui reçoit des
visites sans appels et veut changer le design ou acheter plus de publicité ; elle
impose ensuite de localiser l'arrêt avant la solution (lignes 218–242). Le guide
définit une conversion comme une action utile, pas comme un clic, et distingue
artisan, cabinet et commerce en ligne (lignes 226–371).

La progression est un arbre d'élimination : mesure, volume, moyenne, trafic,
page, confiance, après-formulaire, problème commercial, décision de refonte et
correctif (TOC, lignes 244–309). Cette séquence bat les pages qui listent dix
causes sans ordre. Le passage sur les appels, e-mails et contacts réellement
traités est particulièrement pertinent pour une PME (lignes 404–443).

Le guide dit aussi honnêtement qu'une refonte n'est pas forcément utile et
mentionne les obligations sur les avis et les assurances artisanales avec des
liens Légifrance (lignes 587–608). Le CTA promet un examen du parcours « y
compris si une refonte n'est pas nécessaire » (lignes 764–773), ce qui protège
partiellement le lecteur contre le conflit vendeur/prestataire.

Ce qui paraît complet mais n'aide pas encore assez à décider :

- la formule `actions utiles / visites × 100` ne contient ni qualification,
  signature, marge ni coût d'acquisition (lignes 353–372) ;
- le tableau de diagnostic répond par oui/non, sans seuil, fenêtre d'observation,
  instrument, propriétaire et preuve de clôture (lignes 486–521) ;
- le cas fictif de la recherche (610 sessions, 7 formulaires, 11 appels,
  3 e-mails, 21 contacts, 14 900 € de refonte, correctifs à 0/350/1 900 €) a
  été retiré de la page. À la place, le lecteur ne voit qu'un exemple qualitatif
  de mesure (lignes 437–443) ;
- l'A/B testing est déclaré peu concluant à petit volume mais aucune taille
  d'échantillon, formule ou méthode de test n'est donnée ;
- le traitement post-formulaire est juste à inspecter, sans tableau délai → taux
  de qualification → devis → signature ;
- le guide cite l'e-commerce dans la définition mais ne propose pas de branche
  checkout, panier ou paiement ;
- aucune phrase ne dit exactement quel rapport, tableau ou fichier le CTA remet
  et à quel moment.

## 3. Benchmark France et international

Requêtes et pays : `pourquoi mon site ne convertit pas`, `taux de conversion site
web PME`, `website not converting small business`, `conversion rate optimisation
UK SME`, `Australia website conversion guide`. Le relevé concurrentiel français
du dossier de recherche date du 19/07/2026 ; les pages UK/US/Australie ci-dessous
ont été rouvertes le 24/07/2026. Les concurrents ne sont pas utilisés comme
preuve d'un taux, d'un tarif ou d'une loi.

| Ressource et URL directe | Pays | Réponse utile | Preuve, outil ou exemple | Limite / conflit | Apport supérieur à produire |
| --- | --- | --- | --- | --- | --- |
| [Lysible — optimisation du taux pour PME](https://www.lysible.com/blog/optimisation-taux-conversion-pme) | France | Méthode data, seuil d'A/B test et lecture GA4 | Benchmarks e-commerce, Baymard, étapes GA4 | Outil SaaS de centralisation vendu par l'auteur ; faible B2B/offline | Garder la règle « faible volume = qualitatif », ajouter appels, CRM et marge. |
| [La Refonte — améliorer le taux en 2026](https://www.la-refonte.fr/blog/ameliorer-taux-de-conversion-site-web) | France | Tableau par secteur et outils gratuits | Benchmarks chiffrés, Clarity/Hotjar/PageSpeed | Méthodologie et sources des taux non fournies ; vendeur de refonte | Montrer pourquoi un benchmark sans dénominateur ne décide pas et chiffrer le coût du correctif. |
| [Lugh Web — site qui coûte et ne rapporte pas](https://lugh-web.fr/blog/web_mobile/votre-site-web-vous-coute-cher-mais-ne-rapporte-rien-voici-pourquoi-et-comment-y-remedier) | France | Angle perte invisible, suivi CRM, sécurité et budget | Évoque le délai de rappel, 2 000–15 000 € et ROI | Chiffres non sourcés ; l'auteur vend sites, logiciels et audit | Reprendre le coût du statu quo sans reprendre le ROI invérifiable. |
| [Updoze — 13 raisons](https://updoze.com/13-raisons-pour-lesquelles-votre-site-ne-convertit-pas-et-ne-genere-pas-de-ventes/) | France | Inclut prix, délais et trafic hors cible | Liste large, tableau de causes | Pas de hiérarchie, chiffres non sourcés, cible thérapeutes | Conserver prix/offre comme causes hors-site dans un arbre ordonné. |
| [Transformation Junction — CRO UK](https://www.transformationjunction.com/blog/conversion-rate-optimisation-uk-websites/) | Royaume-Uni | Guide de 27 minutes, macro/micro conversions, segmentation device/source et 90 jours | Exemple 46 demandes/2 000 visiteurs = 2,3 %, matrice de mesures, discussion des petits volumes | 2,9 %/5,31 % et tarifs sont propres à une agence, non preuve France ; CTA et outils affiliés/partenaires | Ajouter macro/micro, 90 jours et segmentation, sans importer ses benchmarks non transposables. |
| [Horsfall-IT — obtenir plus de demandes](https://www.horsfall-it.co.uk/get-more-enquiries-from-your-website) | Royaume-Uni | Conseils très lisibles : offre, preuve, CTA, formulaire, mobile, vitesse | Exemple d'accroche, formulaire minimal, attentes de réponse | Guide court, pas de mesure ni coût ; vendeur de sites/IT | Transformer ses conseils de surface en tests et critères d'arrêt. |
| [Unbounce — methodology Conversion Benchmark](https://unbounce.com/conversion-benchmark-report/methodology/) | États-Unis/monde | Benchmark avec méthode explicite plutôt qu'un chiffre folklorique | 464 M visiteurs, 57 M conversions, 41 000 pages, période 23/07/2023–23/07/2024 ; pages <50 visiteurs et sans conversion exclues | Données de clients Unbounce, landing pages, biais produit et pas PME française | Citer la méthode pour apprendre à lire un benchmark, pas pour donner un taux aux sites vitrines. |
| [Baymard — checkout UX 2025](https://baymard.com/blog/current-state-of-checkout-ux) | États-Unis/Europe | Branche e-commerce détaillée, erreurs, guest checkout et champs | 41 000 scores, 334 sites US/Europe, 63–64 % UX médiocre ou pire | Benchmark commercial et grands e-commerces ; hors service B2B | Ajouter un encadré « si vous vendez en ligne », sans généraliser au lead. |
| [Website Builder Australia — CRO 30 jours](https://websitebuilderaustralia.com.au/conversion-rate-optimisation-australian-websites/) | Australie | Plan 30 jours, petites entreprises, A/B et métriques | Guide annoncé service + e-commerce ; page non rouverte (timeout) | URL non vérifiée dans cette session ; source commerciale | Noter comme piste à rouvrir, ne jamais déclarer son contenu vérifié. |

**Saturation.** La SERP sait déjà dire « clarifier l'offre, ajouter des preuves,
réduire le formulaire et accélérer le mobile ». Une nouvelle liste de bonnes
pratiques n'ajouterait rien. Le gain de Hagnéré Code doit être une preuve de
diagnostic : entonnoir chiffré visite → contact → qualifié → devis → signé,
contacts hors ligne, fenêtre de conversion, coût du statu quo, ordre des tests et
décision explicite « ne pas refaire ».

## 4. Matrice de gain d'information

| Question décisive | Meilleure réponse française | Apport international | Couverture actuelle | Manque | Réponse supérieure à produire |
| --- | --- | --- | --- | --- | --- |
| Le taux affiché est-il fiable ? | Le guide dit qu'appels, e-mails et consentement manquent. | Google distingue événements clés, conversions et événements offline. | Bonne alerte, pas de protocole de rapprochement. | Le lecteur ne sait pas quelle feuille de contrôle remplir. | Plan de marquage + registre des appels + test d'un formulaire + rapprochement CRM. |
| Où le funnel casse-t-il ? | Arbre qualitatif en six questions. | UK : macro/micro, device, source, 90 jours. | Ordre clair mais aucune valeur par étape. | Pas de seuil de décision. | Funnel chiffré avec intervalle, fenêtre et propriétaire. |
| Le site ou l'offre est-il responsable ? | Le guide autorise offre, prix et suivi commercial. | Les concurrents vendent presque toujours une refonte/audit. | Bonne neutralité, cas non chiffré. | Pas de test « offre inchangée, page inchangée ». | Matrice cause observée → expérience minimale → décision garder/refaire. |
| Faut-il faire un A/B test ? | « Petits volumes peu concluants ». | Lysible/UK l'expliquent ; Unbounce décrit exclusions et population. | Aucun calcul d'effectif. | Risque que le lecteur teste quand même. | Trois volumes et durée, avec formule à deux proportions et alternative qualitative. |
| Combien coûte l'inaction ? | Aucun montant dans la page. | Lugh évoque des budgets sans preuve. | Le principe est absent. | Impossible d'arbitrer 0 €, correction ciblée ou refonte. | Trois scénarios de leads/marge et perte mensuelle, hypothèses visibles. |
| Qu'est-ce qu'une bonne conversion ? | Appel sérieux, devis, réservation ou vente. | UK distingue macro et micro. | La définition est claire mais mélange modèles. | Pas de branche par type d'activité. | Trois parcours : lead local, B2B long, e-commerce. |
| Que faire après un formulaire ? | Tester réception et rappel. | HBR donne une étude historique de délai ; UK insiste sur réponse. | Pas de statut ni délai mesuré. | Le taux de contact ne devient pas revenu. | Registre contact → qualifié → devis → signé, avec SLA interne et relances. |

## 5. Faits et fraîcheur

| Affirmation du guide | Verdict | Source primaire actuelle | Périmètre et date | Correction |
| --- | --- | --- | --- | --- |
| Une conversion est une action utile et doit être définie avant la mesure (lignes 226–372). | Confirmé comme méthode. | [Google Analytics — conversion/key event](https://support.google.com/analytics/answer/9356034?hl=fr) | Documentation produit, consultée le 24/07/2026 ; le terme et l'interface évoluent. | Ajouter macro-conversion, micro-signal et événement offline. |
| Google ne modélise certaines données qu'avec des conditions d'éligibilité (lignes 374–393). | Confirmé, mais les seuils précis ne sont pas publiés sur cette page. | [Google — behavioral modeling for consent mode](https://support.google.com/analytics/answer/11161109) | Documentation Google, à revalider à chaque publication. | Dire « selon les conditions Google » et donner le lien ; ne pas prétendre que toute PME est toujours exclue sans vérifier son compte. |
| La CNIL impose des conditions à la mesure d'audience (lignes 386–393 et 792–800). | Confirmé dans son périmètre. | [CNIL — outils de mesure d'audience](https://www.cnil.fr/fr/cookies-solutions-pour-les-outils-de-mesure-daudience) | Autorité française ; la conformité dépend de l'outil et de la configuration. | Conserver l'avertissement et distinguer mesure, consentement et traitement commercial. |
| Un rappel rapide améliore la qualification (lignes 622–627). | Repère historique, non garantie actuelle. | [HBR — The Short Life of Online Sales Leads](https://hbr.org/2011/03/the-short-life-of-online-sales-leads) | Audit de 2 241 entreprises et échantillon US, 2011 ; co-auteur fondateur d'InsideSales. | Mentionner âge, pays, biais et mesurer le propre délai de l'entreprise. |
| FEVAD donne un contexte du e-commerce, pas un taux PME universel (lignes 464–480). | Confirmé. | [FEVAD — chiffres clés 2026](https://www.fevad.com/chiffres-cles-ecommerce-2026/) | Données du commerce en ligne français, pas sites vitrines B2B. | Conserver la limite et ajouter Unbounce/Baymard comme benchmarks distincts, non transposables. |
| L'article L111-7-2 concerne les avis en ligne (lignes 598–601). | Confirmé sur Légifrance. | [Légifrance L111-7-2](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000049571119) | Texte en vigueur consulté le 24/07/2026. | Conserver, mais ajouter « si l'activité collecte/modère/diffuse des avis ». |
| L'article L132-1 du code de l'artisanat concerne l'assurance sur devis/factures (lignes 601–604). | Confirmé sur Légifrance. | [Légifrance L132-1](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000047362294/) | Texte en vigueur depuis le 01/07/2023 ; ne transforme pas le site en devis. | Conserver la distinction déjà donnée et éviter toute généralisation. |
| Les recommandations « simplifier, clarifier, mobile » augmentent les conversions (lignes 545–585). | Méthode plausible, causalité non démontrée dans la page. | [W3C WCAG 2.2](https://www.w3.org/TR/WCAG22/) pour l'accessibilité ; tests propres nécessaires pour l'effet commercial. | WCAG est un référentiel testable, pas une promesse de vente. | Ajouter un test avant/après et abandonner les verbes causaux non prouvés. |
| `readTimeMin: 12` (registre `src/lib/guides.ts:1123`). | À revalider sur HTML rendu. | Mesure locale, non prouvée : commande de readtime à exécuter avec serveur. | Source actuelle : 860 lignes TSX et 3 689 mots source, non équivalents aux mots visibles. | Recalculer et harmoniser hero, carte et métadonnées. |

### Contradictions et risques

- Le dossier de recherche annonce un fil rouge chiffré et un refus d'un devis de
  refonte, mais la page le remplace par un exemple explicitement fictif et sans
  chiffres. Cette prudence est honnête, mais elle détruit la preuve de valeur la
  plus différenciante.
- Le dossier de recherche déconseille la phrase « le taux affiché est faux » et
  demande de montrer les deux biais ; la page dit plus prudemment qu'un outil
  voit seulement les événements paramétrés. Il faut garder cette formulation
  prudente et ne pas réintroduire un faux universel.
- Les chiffres et tarifs du dossier de recherche (610, 7, 11, 3, 21, 14 900,
  350, 1 900) ne doivent pas être publiés comme un client réel sans preuve,
  consentement et statut clairement fictif.

### Faits à retirer plutôt qu'à affaiblir

- « 20 à 50 % de sessions perdues », « 55–60 % d'opt-in français » et toute
  statistique nationale Didomi non confirmée par sa source primaire.
- « Un rappel sous cinq minutes multiplie par 100 » : la source HBR est ancienne
  et les versions spectaculaires viennent d'un vendeur de logiciel.
- Tout benchmark sectoriel au dixième près dont le dénominateur, le pays, la
  période et la population ne sont pas publiés.
- Toute promesse de gain (« +30 % », « doublement ») sans test et sans
  échantillon comparable.

## 6. Scénarios et calculs à construire

Le guide doit montrer le coût du statu quo sans fabriquer un ROI. Les valeurs
ci-dessous sont **hypothétiques** : elles illustrent la formule et doivent être
remplacées par les données du lecteur.

| Variable | Simple | Central | Exigeant | Source ou hypothèse |
| --- | ---: | ---: | ---: | --- |
| Visites observées/mois | 300 | 1 000 | 4 000 | Hypothèse de trois profils, pas benchmark. |
| Contacts qualifiés/mois | 3 | 15 | 60 | Mesure CRM/formulaire/appels rapprochés. |
| Taux contact observé | 1,0 % | 1,5 % | 1,5 % | `contacts / visites × 100`. |
| Taux contact → client | 25 % | 30 % | 35 % | Hypothèse à vérifier sur 90 jours. |
| Marge contributive/client | 1 000 € | 2 500 € | 4 000 € | Hypothèse métier, pas chiffre Hagnéré. |
| Marge mensuelle non captée si rien ne change | 750 € | 11 250 € | 84 000 € | `contacts × taux de signature × marge`. |
| Correctif ciblé supposé | 350 € | 1 900 € | 8 000 € | Enveloppes pédagogiques, non tarifs de marché. |
| Refonte supposée | 6 900 € | 14 900 € | 30 000 € | Hypothèses d'arbitrage ; devis réel nécessaire. |

```text
Contacts qualifiés = contacts bruts - hors cible - doublons - demandes non traitables
Clients signés = contacts qualifiés × taux de signature observé
Marge mensuelle attendue = clients signés × marge contributive moyenne
Valeur incrémentale d'un correctif = clients additionnels × marge - coût du correctif
Seuil de rentabilité en mois = coût / marge mensuelle additionnelle
Horizon : 90 jours pour un premier diagnostic, puis 6 à 12 mois si le cycle de vente est long.
Inclus : appels, e-mails et CRM lorsque leur provenance est documentée.
Exclus : chiffre d'affaires promis, attribution parfaite, saisonnalité ignorée,
  coûts d'adoption et coûts d'opportunité tant qu'ils ne sont pas mesurés.
Sensibilité : faire varier de ±25 % visites qualifiées, qualification, signature et marge.
Variable qui fait basculer la décision : marge par client et taux de signature,
  pas le seul taux de formulaire.
Contrôle inverse : si doubler les contacts ne change pas la marge ou sature
  l'équipe commerciale, acheter plus de trafic ou refaire le site n'est pas le premier levier.
```

Exemple de lecture du scénario central : 15 contacts × 30 % × 2 500 € =
11 250 € de marge contributive mensuelle **si les hypothèses sont vraies**. Une
correction à 1 900 € serait intéressante si elle produit au moins un client
additionnel dans l'horizon retenu ; une refonte à 14 900 € ne doit pas être
commandée parce que son taux de clic progresse, mais parce qu'un problème
identifié justifie son coût et que la marge est réellement disponible.

## 7. Comparaison et position professionnelle

```text
Options comparables : ne rien changer après mesure ; corriger le suivi ; réécrire
  une page ; corriger un formulaire ; travailler le trafic ; acheter de la pub ;
  refaire partiellement ou complètement le site.
Périmètre commun : mêmes pages, même trafic, même définition de contact, même
  fenêtre de vente et même suivi CRM sur 90 jours (ou cycle complet).
Option la moins chère : mesure manuelle, correction de libellé, numéro dédié et
  protocole de rappel ; seulement si la cause observée est bien celle-là.
Option la moins risquée : instrumenter et corriger une seule étape avant une
  refonte ; un changement complet détruit le point de comparaison.
Option qui demande le moins de temps interne : un audit externe peut accélérer,
  mais l'entreprise doit fournir ses appels, marges, refus et délais de réponse.
Position Hagnéré Code : ne jamais vendre une refonte sur le seul taux affiché ;
  commencer par mesurer, qualifier et corriger le maillon le moins cher.
Faits qui la fondent : la page distingue déjà trafic, offre, confiance et suivi ;
  Google recommande des événements de génération et qualification de lead ; les
  benchmarks concurrents excluent souvent les petits volumes.
Cas où l'option opposée gagne : refonte si le site ne peut pas être maintenu,
  est inutilisable sur mobile, ne représente plus l'offre ou bloque une mesure
  fiable ; publicité si l'offre convertit déjà sur un trafic qualifié.
Signal de révision : 90 jours de données rapprochées, saison passée, changement
  de prix/offre, délai de rappel stabilisé ou nouvelle source de trafic.
Ce que nous déconseillons même si nous pourrions le vendre : refonte sans mesure,
  A/B test sur huit leads mensuels, achat de trafic avant correction d'une offre
  incompréhensible et promesse de conversion garantie.
```

## 8. Objections et cas limites

| Objection loyale | Réponse prouvée | Ce qui reste incertain | Conséquence |
| --- | --- | --- | --- |
| « Je n'ai que 300 visites par mois, je ne peux rien savoir. » | On peut compter appels, demandes, qualité et délais sans A/B test (lignes 404–461). | Attribution d'une visite anonyme. | Faire un registre manuel et un entretien qualitatif, pas conclure sur 1,2 %. |
| « Mon taux est 3 %, donc mon site est bon. » | Le dénominateur, les contacts hors ligne et la qualité changent le sens (lignes 367–401). | Données réellement absentes. | Rapprocher contact qualifié, signature et marge. |
| « Mon agence dit qu'il faut refaire. » | La page indique quand une refonte est prématurée et propose le correctif le plus petit (lignes 662–729). | État technique réel du site. | Demander cause observée, preuve et scénario sans refonte. |
| « Les appels ne sont pas traçables. » | Numéro dédié ou question au standard permettent un premier rapprochement (lignes 404–443). | Réponses de mémoire, attribution imparfaite. | Déclarer l'incertitude et ne pas présenter le taux comme exact. |
| « Je dois raccourcir mon formulaire. » | Oui si abandon mesuré ; non si la qualification est déjà insuffisante (FAQ, lignes 125–128). | Élasticité réelle des champs. | Tester une version minimale sur une fenêtre suffisante. |
| « L'A/B test est la méthode professionnelle. » | Les petits volumes rendent les tests peu concluants (lignes 445–461). | Puissance exacte selon base et effet. | Ajouter calcul à deux proportions et préférer test qualitatif si nécessaire. |
| « Je fais de l'e-commerce. » | La définition cite la commande payée (lignes 357–361). | Checkout, panier, paiement et retours non traités. | Ajouter une branche Baymard ou lier vers un guide e-commerce distinct. |
| « Les cookies ont fait s'effondrer mes statistiques. » | Consentement et outils peuvent rendre une partie des événements invisible (lignes 374–393). | Mesure exacte du refus et configuration. | Auditer les événements, la CMP et les sources offline, sans pourcentage inventé. |
| « J'ai besoin de résultats en deux semaines. » | Le guide exige de couvrir le cycle de vente et la saisonnalité (lignes 445–461). | Vente B2B ou artisanale parfois longue. | Faire une correction rapide, mais attendre la fenêtre adaptée pour conclure. |
| « Je veux mettre 2 000 € quelque part. » | Le guide demande le plus petit correctif capable de résoudre la cause (lignes 688–729). | Rendement du correctif avant mesure. | Allouer d'abord à mesure/qualité/offre, puis réévaluer. |
| « Vous vendez des refontes, pourquoi vous croire ? » | Le CTA promet de pouvoir conclure qu'une refonte n'est pas nécessaire (lignes 764–773). | Absence de cas indépendant publié. | Montrer un livrable standard, un mauvais fit et une preuve anonymisée. |

## 9. Plan de réécriture

| Ordre | Section proposée | Question résolue | Preuve, scénario ou outil | Décision produite | À conserver / créer / couper |
| ---: | --- | --- | --- | --- | --- |
| 1 | Réponse en 30 secondes | « Est-ce forcément le site ? » | Verdict + quatre causes + limite de mesure | Lire le diagnostic | Conserver l'ouverture ; raccourcir l'annonce. |
| 2 | Le funnel en quatre niveaux | « Visite, contact, qualifié, signé : lequel manque ? » | Formule, tableau et exemple 300/1 000/4 000 visites | Choisir l'indicateur | Créer ; compléter la formule actuelle. |
| 3 | Refaire le cas filé avec statut transparent | « À quoi ressemble un diagnostic réel ? » | Cas fictif explicitement chiffré ou cas client autorisé | Chiffrer l'arbitrage | Créer, ne jamais inventer un client. |
| 4 | Mesure et consentement | « Mes chiffres sont-ils fiables ? » | GA4 key events, appels, e-mails, CRM, CMP | Instrumenter ou corriger | Conserver l'alerte ; créer checklist. |
| 5 | Volume et test | « Puis-je conclure ? » | Deux-proportions, base 1/2/3 %, puissance 80 %, alternative qualitative | Tester ou observer | Créer ; supprimer toute recommandation vague d'A/B test. |
| 6 | Diagnostic par étape | « Où le visiteur disparaît-il ? » | Tableau avec métrique, seuil, preuve, responsable, prochaine action | Prioriser un seul maillon | Conserver l'arbre ; rendre chaque ligne mesurable. |
| 7 | Offre, confiance et contexte français | « Est-ce la page ou le risque perçu ? » | Cas artisan, cabinet, B2B ; mentions et preuves vérifiables | Réécrire ou clarifier | Conserver références juridiques ; ajouter exemples de preuve. |
| 8 | Après formulaire | « Pourquoi des contacts ne deviennent-ils pas des clients ? » | Statuts, délai, relance, taux de signature et marge | Corriger le process | Créer une mini-fiche CRM. |
| 9 | Coût de l'inaction et correctifs | « Que vaut mon budget ? » | Scénarios simple/central/exigeant, sensibilité | 0 €, 350 €, 1 900 € ou refonte | Créer ; présenter les montants comme hypothèses. |
| 10 | Refonte ou non | « Quand signer ? » | 7 critères d'arrêt, comparaison 90 jours/12 mois | Signer ou reporter | Conserver le refus de refonte et ajouter preuve. |
| 11 | CTA honnête | « Que vais-je obtenir ? » | Exemple de rapport, limites, bon/mauvais fit, absence de garantie | Demander une revue | Conserver CTA, préciser livrable et conflit. |

### Contrat des 150 premiers mots

Dire directement : « Si votre site reçoit des visites mais peu de demandes,
vous ne savez pas encore si le problème est la mesure, le trafic, l'offre, la
page ou le suivi. Dans ce guide, vous allez remplir un entonnoir visite →
contact → client, compter les appels et tester la cause la moins chère avant de
signer une refonte. » Donner un mini-exemple numérique, puis annoncer que les
chiffres de conversion de marché ne sont pas des objectifs universels.

### Éléments à supprimer

- Toute généralité qui ressemble à un benchmark sans population, période et
  dénominateur.
- « Une refonte devient plus crédible » sans seuil, preuve technique ou coût du
  maintien ; la phrase doit rester une hypothèse à vérifier.
- La mention HBR sans date, pays et conflit d'intérêt ; la page doit éviter de
  laisser entendre une causalité actuelle.
- Les formulations « travailler le SEO », « simplifier » et « renforcer » sans
  métrique, test ou propriétaire.

### Éléments à conserver

- L'ordre mesure → trafic → page → confiance → suivi → décision.
- L'interdiction de refaire avant d'avoir prouvé la cause.
- Les appels et e-mails hors analytics, la nuance sur le consentement et les
  références Légifrance.
- Le CTA qui accepte la conclusion « refonte non nécessaire ».

## 10. Contre-audit après correction

Aucune correction n'a été appliquée dans cette mission. La contre-validation est
donc non réalisée ; les lignes suivantes sont un registre d'actions à valider
après réécriture.

### État des portes de publication

```text
P1 — historique/qualité éditoriale : PRÉSENTE MAIS INCOMPLÈTE. Le guide existe,
  son angle et ses sources de base sont présents, mais les sept P1 ci-dessus
  empêchent encore une décision économique et une preuve de diagnostic complète.
P2 — corrections éditoriales et QA : À CORRIGER. Les dix actions sont localisées
  et doivent être revalidées par calculs, relecture humaine et rendu.
P3 — publication technique : REJETÉE / NON VALIDÉE. Aucun build complet, rendu
  navigateur, contrôle des balises ou test de route n'a été exécuté dans cette passe.
P4 — production/indexation : REJETÉE / NON VALIDÉE. Aucune preuve de déploiement,
  sitemap distant, indexation Google ou conversion observée.
```

| Problème | Priorité | Correction appliquée | Revalidation indépendante |
| --- | --- | --- | --- |
| P1-01 — Funnel sans qualification, signature, marge ou CAC | P1 | Aucune | Refaire trois scénarios et vérifier les ratios. |
| P1-02 — Aucun coût du statu quo ni scénario de budget | P1 | Aucune | Recalculer hypothèses, seuil et sensibilité. |
| P1-03 — Diagnostic qualitatif sans métrique/threshold/propriétaire | P1 | Aucune | Faire relire par un dirigeant et exécuter sur un cas anonymisé. |
| P1-04 — Aucun calcul d'effectif A/B | P1 | Aucune | Vérifier formule à deux proportions et alternative qualitative. |
| P1-05 — Mesure offline/GA4 insuffisamment opérationnelle | P1 | Aucune | Tester formulaire, appel, e-mail, CRM et CMP. |
| P1-06 — Angles décisionnels internationaux encore insuffisamment intégrés | P1 | Aucune | Adapter les apports UK/US/Australie et qualifier leurs biais ; la nationalité seule n'est pas un défaut. |
| P1-07 — CTA sans livrable, prix ni preuve | P1 | Aucune | Contrôler formulaire, réponse et rapport réellement remis. |
| P2-01 — Metadata OG file-based non inspectée en head/rendu | P2 | Aucune | Inspecter les balises sociales et rendre l'image ; Next.js les ajoute automatiquement selon sa convention. |
| P2-02 — Cas filé chiffré retiré | P2 | Aucune | Vérifier statut fictif/consentement et recalculs. |
| P2-03 — Branche e-commerce seulement mentionnée | P2 | Aucune | Ajouter branche checkout ou lien éditorial équivalent. |
| P2-04 — Mobile/device/source sans tableau de mesure | P2 | Aucune | Rendu et segmentation réelle sur 90 jours. |
| P2-05 — Consentement sans protocole pratique | P2 | Aucune | Contrôler CMP, événements et mesure alternative. |
| P2-06 — Sources et dates peu visibles dans les sections | P2 | Aucune | Ajouter attribution locale et date de consultation. |
| P2-07 — HBR ancien sans fiche méthodologique visible | P2 | Aucune | Contre-lecture méthodologique et retrait si besoin. |
| P2-08 — `readTimeMin` non recalculé | P2 | Aucune | Rendu HTML et alignement registre/hero. |
| P2-09 — Aucun cas indépendant ou preuve de méthode | P2 | Aucune | Ajouter preuve anonymisée vérifiable, jamais témoignage inventé. |
| P2-10 — Pas de checklist post-correction | P2 | Aucune | Ajouter critères d'arrêt et date de revue. |

### Score après correction

Non calculable : cette mission n'a modifié aucun guide, registre ou composant.
Cible de sortie : **92/100 minimum**, avec Intention, Décision, Pédagogie,
Profondeur, Preuve et Comparaison à 9/10 ou plus. Cette cible devra être vérifiée
par une contre-lecture humaine, un rendu navigateur et des calculs indépendants.

## 11. Preuves techniques et visuelles

```text
Manifeste : le guide est déclaré dans src/lib/guides.ts:1112–1123, avec
  dateModified 2026-07-21 et readTimeMin 12. La page définit canonical, Article
  et Breadcrumb dans page.tsx:17–105.
Calculs refaits : SHA-256 des quatre fichiers ; page 860 lignes, OG 99 lignes,
  recherche 295 lignes ; 3 689 mots source TSX, non assimilables aux mots visibles.
  Les scénarios chiffrés proposés dans cet audit sont hypothétiques.
Sources rouvertes : Google Analytics key events et behavioral modeling, CNIL,
  Légifrance L111-7-2/L132-1, Unbounce methodology, Baymard checkout 2025,
  Transformation Junction UK, Horsfall-IT UK. La page locale ne cite pas encore
  Unbounce, Baymard ou les guides UK/Australie.
Liens vérifiés : URLs benchmark rouvertes par recherche web ; l'URL australienne
  a expiré en timeout et reste non vérifiée. Les liens du HTML local n'ont pas
  tous été testés par curl.
Commandes : npm run check:seo → 35 fichiers, 229 tests, tous passés (1,89 s).
  npm run measure:guide-readtime -- pourquoi-mon-site-ne-convertit-pas n'a pas
  été relancé ici faute de serveur local ; aucun temps réel n'est revendiqué.
Rendu 320 / 390 / 768 / 1024 / 1440 : non exécuté. Image sociale déclarée dans
  opengraph-image.tsx:4–6 et prise en charge automatiquement par la convention
  metadata file-based de Next.js 2026, mais non inspectée dans le head ou en PNG
  réel dans cette passe.
Statut maximal prouvé : audit statique + tests SEO du dépôt + sources web
  rouverts. Pas de preuve de build complet, route HTTP, production, sitemap,
  indexation, conversion ou lecture humaine indépendante.
Réserve publication / indexation : corriger les P1, rendre le funnel et le
  calcul économique reproductibles, exécuter build/QA navigateur et vérifier les
  balises sociales. `index,follow` ne prouve pas l'indexation Google.
```
