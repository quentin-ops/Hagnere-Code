# Audit approfondi — `pourquoi-mon-site-est-lent`

Date : 24 juillet 2026

Auditeur concurrentiel : Codex, lot benchmark international

Snapshot du guide : `src/app/guides/pourquoi-mon-site-est-lent/page.tsx`, SHA-256 `8a62f43b6692d42e5cca02918c9d50de24a672512e262f54d6fa32ce7417a5d2`

Périmètre : audit éditorial et décisionnel uniquement. Aucune modification de la page publique, du registre des guides, des manifestes ou de la documentation partagée n’a été réalisée dans ce lot.

## 1. Verdict exécutif

```text
Lecteur exact : dirigeant dont le site, le tunnel ou l'outil interne semble lent sur mobile, à certaines heures ou pendant une action importante.
Question réelle : que faut-il mesurer, que faut-il corriger en premier et faut-il réparer ou refaire ?
Décision attendue : isoler une page, un parcours et une cause, puis comparer réparation et refonte sur un même horizon.
Réponse actuelle en une phrase : testez les pages qui portent le résultat, lisez terrain et laboratoire, puis exigez une amélioration vérifiable sans fonction cassée.
Défaut qui coûte le plus de valeur : le chapitre « ce que la lenteur peut vous coûter » ne calcule aucun coût, et la comparaison réparation/refonte n'a aucun TCO.
Niveau actuel : B
Priorité : haute
Statut : audité / enrichissement substantiel nécessaire
```

Le guide est clair, prudent et humain. Il explique correctement les Core Web Vitals, distingue terrain et laboratoire, recommande de tester la page de vente plutôt que l’accueil par réflexe et refuse la promesse « 100/100 PageSpeed ». Son tableau symptôme → cause → contrôle est utile à un dirigeant.

Mais il reste nettement en dessous de la profondeur attendue pour devenir la meilleure réponse :

1. le coût commercial et le temps salarié ne sont jamais chiffrés ;
2. le protocole « deux ou trois tests » est moins robuste que la recommandation officielle de cinq passages et d’une médiane ;
3. l’analyse s’arrête avant le réseau, le DNS/TLS, le délai serveur, la base de données, les services tiers, la charge, les erreurs et la surveillance réelle ;
4. aucune comparaison économique à 24 ou 36 mois ne montre quand réparer, reconstruire ou ne rien faire ;
5. deux sources seulement soutiennent toute la page, alors que les affirmations sur variabilité, CrUX, charge, SEO et impact métier demandent des preuves distinctes.

La position professionnelle à assumer est la suivante :

> Nous ne vendons pas un score PageSpeed. Nous cherchons une page lente pour de vraies personnes, un parcours métier affecté et une cause mesurable. Si la base est maintenue et que le goulot est isolé, réparer gagne presque toujours avant une refonte. Nous recommandons une reconstruction lorsque les lenteurs sont systémiques, que chaque correction crée des régressions ou que l’entreprise doit de toute façon repenser le parcours.

### Score avant correction

| Axe         | Note /10 | Preuve localisable                                                    | Manque décisif                                                                                       |
| ----------- | -------: | --------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| Intention   |        9 | Ouverture sur le dirigeant et les pages qui rapportent                | Le symptôme « lent » pourrait être segmenté dès les 150 premiers mots                                |
| Décision    |        8 | Tester, comprendre, prioriser, optimiser ou refaire                   | Aucun seuil économique ni protocole de décision reproductible                                        |
| Pédagogie   |        9 | LCP, INP, CLS, terrain et laboratoire traduits sans jargon            | TTFB, waterfall, cache, charge et surveillance restent absents                                       |
| Profondeur  |        7 | Cinq symptômes, priorités, budget et réception                        | Backend, réseau, tiers, capacité, erreurs, RUM, budgets de performance et régression insuffisants    |
| Preuve      |        6 | web.dev et PageSpeed Insights                                         | Sources trop peu nombreuses et pas de preuve économique propre au guide                              |
| Comparaison |        7 | Optimiser/refaire et niveaux d’intervention                           | Pas de TCO, coût de l’inaction, sensibilité, cohorte ou contrôle avant/après                         |
| Originalité |        7 | Bonne lecture dirigeant et refus du score isolé                       | Diagnostic proche de nombreuses listes concurrentes                                                  |
| Style       |        9 | Direct, accessible, sans dramatisation ni promesse de classement      | Quelques passages restent génériques faute de cas chiffré                                            |
| Conversion  |        8 | CTA après diagnostic, possibilité honnête de réparer                  | Le lecteur n’arrive pas avec une estimation de valeur ou un cahier de mesure                         |
| SEO/produit |        8 | Intention, FAQ, maillage, données structurées et mots Core Web Vitals | Faible profondeur sémantique sur RUM, TTFB, waterfall, performance budget, charge, SLO et monitoring |

Total : **78/100**

La page ne doit pas être allongée par une encyclopédie technique. Elle doit gagner en preuves, en calculs et en méthode de décision.

## 2. Ce que le guide dit réellement

- **Réponse dans les 150 premiers mots :** oui. Il faut diagnostiquer avant de refaire.
- **Progression :** coût potentiel, premier test, Core Web Vitals, causes, priorités, optimisation/refonte, budget et encadrement du prestataire.
- **Verdict :** réparer si la base reste saine et la cause isolée ; envisager une refonte si la base est obsolète ou les régressions se multiplient.
- **Exemples présents :** vitrine, e-commerce, rendez-vous, outil interne et cabinet fictif.
- **Calcul présent :** aucun. Le titre « ce que la lenteur peut vous coûter » reste entièrement qualitatif.
- **Comparaison présente :** terrain/laboratoire, optimiser/refaire, quatre niveaux d’intervention.
- **Sources :** web.dev Web Vitals et documentation PageSpeed Insights.
- **Action autonome :** tester trois pages sur mobile et ordinateur, conserver les résultats et relier un symptôme à une cause.
- **CTA :** cohérent et sans refonte imposée.
- **Élément faussement complet :** un test PageSpeed et un tableau de causes ne constituent pas un diagnostic de charge, de serveur, de base de données ou d’incident intermittent.

Le futur guide doit rester lisible par un dirigeant tout en donnant à son prestataire un protocole impossible à contourner.

## 3. Benchmark France et international

Requêtes, marchés et date :

- France : « pourquoi mon site est lent », « site lent causes corrections », « Core Web Vitals 2026 » ;
- États-Unis : « web performance business impact », « Lighthouse variability five runs » ;
- Royaume-Uni : « service performance testing », « frontend performance budget » ;
- Australie : « Core Web Vitals guide 2026 », « Digital Performance Standard » ;
- recherche effectuée le 24 juillet 2026 ; aucune position observée n’est présentée comme stable.

### Saturation

Le marché est saturé de listes « images lourdes, trop de plugins, hébergement lent, cache absent, scripts inutiles ». Le guide actuel couvre déjà cette intention et évite plusieurs raccourcis.

Le gain d’information se situe dans :

- un protocole répétable avec médiane de cinq tests ;
- une lecture par gabarit et parcours, pas seulement par URL ;
- un exemple de waterfall et de temps serveur ;
- la charge et la capacité aux pics ;
- la surveillance des vrais utilisateurs et les alertes ;
- le coût du temps perdu et une analyse de cohorte prudente ;
- le TCO réparation/refonte/inaction ;
- un budget de performance vérifié à chaque livraison ;
- la distinction ferme entre corrélation, expérimentation et causalité.

| Ressource et URL directe                                                                                                                  | Marché                      | Réponse utile                                                                     | Preuve, outil ou exemple                                        | Limite                                                              | Apport à adapter                                                                      |
| ----------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| [WebGenius — huit causes d’un site lent](https://www.agence-webgenius.fr/nos-conseils-dev-web-strasbourg/pourquoi-site-web-lent-corriger) | France / agence             | Liste accessible des causes et corrections                                        | Structure symptôme/correctif                                    | Promesses et chiffres commerciaux à vérifier                        | Dépasser la liste avec un ordre de preuve et un coût complet                          |
| [Application Mobile Normandie — Core Web Vitals 2026](https://appmobilenormandie.fr/blog/core-web-vitals-site-web-lent-solutions-2026)    | France / agence             | Terrain/laboratoire, huit causes et cas annoncés avant/après                      | Cas régionaux et outils complémentaires                         | Résultats clients non indépendants                                  | Produire un cas illustratif recalculable et demander les données brutes               |
| [Google — Comprendre l’expérience de page](https://developers.google.com/search/docs/appearance/page-experience)                          | États-Unis / éditeur        | Dit explicitement qu’un bon score ne garantit pas une première place              | Documentation mise à jour en décembre 2025                      | Google décrit son système sans mesurer le ROI d’une PME             | Renforcer le refus du « 100 pour le SEO »                                             |
| [Chrome — Méthodes et outils CrUX](https://developer.chrome.com/docs/crux/methodology/tools)                                              | États-Unis / éditeur        | Explique fenêtre glissante de 28 jours, données URL/origine et limites des outils | Tableau comparatif des sources CrUX                             | Les visiteurs éligibles ne représentent pas tous les utilisateurs   | Ajouter période, niveau URL/origine, appareil et absence éventuelle de données        |
| [Chrome Lighthouse — Variabilité](https://github.com/GoogleChrome/lighthouse/blob/main/docs/variability.md)                               | États-Unis / éditeur        | Cinq passages et médiane deux fois plus stables qu’un seul                        | Sources de variance et commande reproductible                   | Document technique difficile pour un dirigeant                      | Transformer en protocole simple : cinq passages, même contexte, médiane et dispersion |
| [web.dev — Cas T-Mobile](https://web.dev/case-studies/t-mobile-case-study)                                                                | États-Unis / cas entreprise | Relie RUM, problèmes utilisateurs et métriques commerciales                       | Réduction de problèmes et amélioration visit-to-order annoncées | Cas unique, acteurs impliqués dans la publication, non transposable | Utiliser comme preuve de méthode, jamais comme promesse de gain                       |
| [GOV.UK — Tester la performance du service](https://www.gov.uk/service-manual/technology/test-your-services-performance/)                 | Royaume-Uni / public        | Capacité, trafic normal, pics, charge et point de rupture                         | Protocole de montée en charge et résultat à consigner           | Conçu pour services publics plus critiques qu’un site vitrine       | Ajouter un module « le site ralentit aux heures de pointe »                           |
| [GOV.UK — Tester le frontend](https://www.gov.uk/service-manual/technology/how-to-test-frontend-performance)                              | Royaume-Uni / public        | Budget de performance et boucle mesurer → corriger → quantifier                   | Workflow et outils                                              | Documentation ancienne mais principes toujours utiles               | Ajouter un budget de poids, scripts et métriques par gabarit                          |
| [Australian Digital Performance Standard](https://www.digital.gov.au/policy/digital-experience/digital-performance-standard)              | Australie / public          | Cadre de surveillance, disponibilité, réussite, besoins et analyse                | Cinq critères applicables au cycle de vie                       | Standard gouvernemental                                             | Ajouter propriétaire, tableau de bord, disponibilité et décision de suivi             |
| [The SEO Company Australia — Core Web Vitals 2026](https://theseocompany.com.au/learn/core-web-vitals/)                                   | Australie / agence          | Refuse la chasse au 100 et priorise données terrain/gabarits à valeur             | Guide pilier de 40 minutes et checklist                         | Expérience agence non auditée publiquement                          | Adopter l’opinion tranchée sur la page importante, en gardant les réserves de preuve  |

### Lecture concurrentielle

Les guides les plus visibles gagnent souvent en persuasion avec des chiffres spectaculaires, mais perdent en rigueur en les généralisant. Hagnéré Code doit prendre la voie inverse : moins de statistiques universelles, davantage de calculs remplaçables, de données avant/après et de conditions où l’optimisation ne mérite pas l’investissement.

## 4. Matrice de gain d’information

| Question décisive                         | Réponse française dominante                 | Apport international                                                 | Couverture actuelle | Manque                                                    | Réponse supérieure à produire                                                         |
| ----------------------------------------- | ------------------------------------------- | -------------------------------------------------------------------- | ------------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| Mon site est-il vraiment lent ?           | Lancez PageSpeed une fois                   | CrUX, cinq tests, médiane, dispersion et appareil                    | Partielle           | Protocole reproductible et page/gabarit                   | Terrain sur 28 jours + cinq laboratoires + observation réelle du parcours             |
| Quelle page faut-il corriger ?            | L’accueil                                   | Gabarit, transaction et parcours utilisateur                         | Bonne               | Volume et valeur par parcours                             | Prioriser volume × gêne × valeur × certitude de cause                                 |
| Que signifient LCP, INP et CLS ?          | Définitions et seuils                       | Percentile, terrain/lab, distribution et sous-parties du LCP         | Bonne               | Sous-parties et limites d’interprétation                  | Garder la traduction, ajouter un exemple de cause par métrique                        |
| Pourquoi la page est-elle lente ?         | Images, plugins, hébergement                | Waterfall, CPU, tiers, DNS/TLS, serveur, base, cache et réseau       | Partielle           | Diagnostic de bout en bout                                | Frise requête → serveur → ressources → calcul → interaction                           |
| Pourquoi seulement aux heures de pointe ? | Hébergement trop faible                     | Plan de capacité, charge progressive, seuil de rupture et alertes    | Faible              | Protocole de charge                                       | Trafic normal, pic attendu, test préproduction, seuil et mode dégradé                 |
| Quel est le coût pour l’entreprise ?      | Taux de rebond ou ventes perdues génériques | RUM + données métier + cohorte/expérience                            | Faible              | Aucun calcul                                              | Temps salarié, abandon observé, marge et réserve de causalité                         |
| Faut-il réparer ou refaire ?              | Si le site est « vieux », refaire           | TCO, dette, régression, durée de vie et résultat hors vitesse        | Partielle           | Horizon commun et coût d’inaction                         | Trois options à 36 mois avec hypothèses et cas où ne rien faire gagne                 |
| Comment empêcher le retour du problème ?  | Installer un plugin de cache                | Performance budget, CI, RUM, monitoring, alertes et propriétaire     | Faible              | Gouvernance après livraison                               | Budget par gabarit, contrôle à chaque livraison et alerte sur le parcours             |
| Est-ce bon pour le SEO ?                  | « Plus rapide = mieux classé »              | CWV utilisés mais contenu et expérience globale restent déterminants | Bonne prudence      | Source Search Central plus directe                        | Dire : utile pour l’utilisateur et contributif au SEO, jamais garantie de position    |
| Comment accepter le travail ?             | Montrer un score vert                       | Avant/après, mêmes conditions, fonctions, percentiles et charge      | Bonne base          | Valeurs initiales, tolérances, médiane et période terrain | PV comprenant URL, appareil, 5 runs, médiane, CrUX, fonction et absence de régression |

## 5. Faits, fraîcheur et contradictions

Sources primaires revérifiées le 24 juillet 2026.

| Affirmation du guide                                                                 | Verdict              | Source primaire actuelle                                                                                                                                                                        | Périmètre et fraîcheur                                            | Correction ou enrichissement                                                             |
| ------------------------------------------------------------------------------------ | -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| LCP ≤ 2,5 s, INP ≤ 200 ms et CLS ≤ 0,1 au 75e percentile sont les seuils recommandés | Confirmé             | [web.dev — Web Vitals](https://web.dev/articles/vitals) et [mesure terrain](https://web.dev/articles/vitals-field-measurement-best-practices)                                                   | Seuils d’expérience utilisateur, pas objectifs commerciaux        | Conserver ; expliquer que chaque métrique doit passer séparément                         |
| Les données PageSpeed terrain portent sur une fenêtre glissante de 28 jours          | Confirmé             | [Chrome — CrUX tools](https://developer.chrome.com/docs/crux/methodology/tools)                                                                                                                 | Données de visiteurs Chrome éligibles, agrégées, URL ou origine   | Ajouter niveau affiché, dates exactes et appareil                                        |
| L’absence de données réelles n’est pas une erreur                                    | Confirmé avec limite | [Chrome — CrUX tools](https://developer.chrome.com/docs/crux/methodology/tools)                                                                                                                 | Une page ou origine peut être absente ou insuffisamment couverte  | Conserver et préciser qu’un test de laboratoire ne remplace pas le terrain               |
| Un résultat de laboratoire peut varier                                               | Confirmé             | [Lighthouse — Variability](https://github.com/GoogleChrome/lighthouse/blob/main/docs/variability.md) et [scoring](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring) | Variations de page, réseau, serveur, matériel et navigateur       | Passer de « deux ou trois » à cinq tests et médiane, ou justifier un protocole différent |
| Un bon score ne garantit ni classement ni ventes                                     | Confirmé             | [Google Search Central — Page experience](https://developers.google.com/search/docs/appearance/page-experience)                                                                                 | CWV participent aux systèmes, mais pertinence et contenu dominent | Ajouter cette source directement dans la page                                            |
| Une lenteur de pointe exige capacité et test de charge                               | Confirmé             | [GOV.UK — service performance](https://www.gov.uk/service-manual/technology/test-your-services-performance/)                                                                                    | Nécessaire surtout pour parcours ou outils à charge variable      | Ajouter trafic normal, pic, montée progressive, point de rupture et décision de risque   |

### Contradictions ou tensions

- Aucune valeur Core Web Vitals incorrecte n’a été trouvée.
- « Répétez deux ou trois fois » est prudent, mais la documentation Lighthouse indique qu’une médiane de cinq passages est deux fois plus stable qu’un passage. Le guide doit adopter cinq passages pour une réception sérieuse.
- Le guide affirme qu’une lenteur peut coûter des clients ou du temps sans montrer comment mesurer ce coût ; le titre promet plus que la section ne livre.
- « Délai de réponse et traces de l’hébergement » est juste mais trop vague : le dirigeant doit savoir quelles preuves demander.
- Le guide sépare lenteur et conversion, mais doit aussi montrer qu’une corrélation de taux de conversion ne prouve pas la causalité de la vitesse.

### Faits à retirer plutôt qu’à ajouter

- Ne pas reprendre « une seconde coûte X % de conversions » comme règle universelle.
- Ne pas garantir un meilleur classement après passage au vert.
- Ne pas utiliser le score Lighthouse global comme critère contractuel unique.
- Ne pas dire qu’une extension, un hébergeur ou un framework est la cause sans mesure.
- Ne pas présenter le cas T-Mobile ou un cas d’agence comme gain attendu pour une PME française.

## 6. Cinq scénarios et calculs à construire

Tous les montants et comportements sont **illustratifs, hors taxes et non issus d’un client**. Ils montrent une méthode ; les données du site doivent les remplacer.

### Scénario 1 — Pourquoi cinq tests changent le diagnostic

Cinq mesures LCP réalisées dans les mêmes conditions :

```text
2,5 s ; 2,8 s ; 2,9 s ; 3,2 s ; 4,1 s
Médiane = 2,9 s
Étendue = 4,1 - 2,5 = 1,6 s
```

Choisir seulement le meilleur passage permettrait d’annoncer 2,5 s ; choisir le pire, 4,1 s. La médiane de 2,9 s décrit mieux le cas central, mais la dispersion de 1,6 s signale aussi un comportement instable à enquêter. Le protocole doit fixer URL, appareil, connexion, cache, version et heure.

### Scénario 2 — Temps perdu dans un outil interne

Hypothèses :

- 30 personnes ;
- 40 actions répétées par jour ;
- 1,2 seconde d’attente évitable par action ;
- 220 jours par an ;
- temps valorisé à 45 €/h.

```text
Heures d'attente = 30 × 40 × 1,2 / 3 600 × 220 = 88 h/an
Capacité valorisée = 88 × 45 = 3 960 €/an
```

Il ne s’agit pas de 3 960 € d’économie de trésorerie. La valeur n’existe que si le temps est réellement réaffecté, si l’usage reste stable et si les mesures avant/après montrent que l’attente a disparu.

### Scénario 3 — Une différence de conversion n’est pas encore une causalité

Observation illustrative mensuelle :

- groupe de pages rapides : 18 000 visites mobiles, 2,4 % de demandes, soit 432 ;
- groupe de pages lentes : 12 000 visites mobiles, 1,8 % de demandes, soit 216 ;
- hypothèse de clôture : 20 % ;
- marge par vente : 800 €.

```text
Demandes lentes si elles atteignaient 2,4 % = 12 000 × 2,4 % = 288
Écart observé = 288 - 216 = 72 demandes
Ventes théoriques = 72 × 20 % = 14,4
Contribution maximale associée = 14,4 × 800 = 11 520 €/mois
```

**Contrôle inverse obligatoire :** les pages, sources de trafic, offres et visiteurs peuvent être différents. Les 11 520 € sont une borne de valeur à investiguer, pas une perte causée par la vitesse. Il faut comparer le même parcours avant/après ou mener une expérience contrôlée.

### Scénario 4 — TCO à 36 mois : laisser, réparer ou reconstruire

Périmètre commun : même parcours, exploitation, hébergement, maintenance et temps interne. Aucun gain de vente n’est compté.

| Poste économique 36 mois       | Laisser en l’état | Réparer l’existant |  Reconstruire |
| ------------------------------ | ----------------: | -----------------: | ------------: |
| Diagnostic / découverte        |               0 € |            3 000 € |       6 000 € |
| Correction / construction      |               0 € |           14 000 € |      48 000 € |
| Migration / contenus           |               0 € |                0 € |      14 000 € |
| Hébergement                    |           5 400 € |            6 480 € |      10 800 € |
| Monitoring                     |               0 € |            4 320 € |        inclus |
| Maintenance                    |          18 000 € |           12 000 € |      24 000 € |
| Attente interne valorisée      |          11 880 € |                0 € |           0 € |
| Incidents internes valorisés   |           5 400 € |                0 € |           0 € |
| Temps client de transformation |               0 € |            1 000 € |       4 000 € |
| **TCO économique 36 mois**     |      **40 680 €** |       **40 800 €** | **106 800 €** |

Dans ce cas, réparer coûte presque autant que laisser en l’état avant même d’attribuer une vente supplémentaire : l’écart n’est que de 120 €. La reconstruction ne gagne que si elle apporte aussi une durée de vie, un parcours ou une fonction dont la valeur couvre les 66 000 € supplémentaires par rapport à la réparation.

### Scénario 5 — Délai de retour selon la valeur réellement prouvée

Investissement diagnostic + correction : 17 000 €.

Valeur mensuelle :

- capacité interne : `3 960 / 12 = 330 €` ;
- marge par vente additionnelle prouvée : 700 €.

| Ventes additionnelles prouvées / mois | Valeur mensuelle | Retour simple |
| ------------------------------------: | ---------------: | ------------: |
|                                     0 |            330 € |     51,5 mois |
|                                     1 |          1 030 € |     16,5 mois |
|                                     2 |          1 730 € |      9,8 mois |
|                                     4 |          3 130 € |      5,4 mois |

Le mot important est « prouvées ». Une amélioration de LCP n’autorise pas à compter des ventes. Le guide doit demander la mesure avant/après, une période suffisante et les autres changements intervenus.

### Variables de sensibilité obligatoires

| Variable           | Cas simple                 | Cas central              | Cas exigeant                      | Source attendue                |
| ------------------ | -------------------------- | ------------------------ | --------------------------------- | ------------------------------ |
| Mesure laboratoire | un diagnostic exploratoire | cinq passages et médiane | CI + plusieurs appareils/régions  | Rapports horodatés             |
| Terrain            | aucune donnée              | CrUX 28 jours            | RUM propre segmenté               | CrUX / outil autorisé          |
| Parcours           | page vitrine               | formulaire ou panier     | outil critique et heure de pointe | Analytics et métier            |
| Charge             | trafic stable              | pic connu                | montée jusqu’au point de rupture  | Logs et test préproduction     |
| Valeur             | expérience qualitative     | temps salarié            | contribution mesurée              | Paie analytique / CRM / compta |
| Horizon            | 12 mois                    | 36 mois                  | 60 mois                           | Durée de vie attendue          |

```text
Formule : TCO = diagnostic + travaux + migration + hébergement + monitoring + maintenance + temps interne + transition.
Horizon : 36 mois dans l'exemple central.
Inclus : même parcours et même niveau de service.
Exclus : ventes non prouvées, taxes, incident exceptionnel et bénéfice SEO spéculatif.
Variable qui fait basculer : valeur prouvée, fréquence d'incident, durée de vie et coût de régression.
Contrôle inverse : calculer le cas où la gêne est faible et aucune intervention ne se rembourse.
```

## 7. Comparaison et position professionnelle

```text
Options réellement comparables : ne rien changer et surveiller ; correction ciblée ; optimisation approfondie ; reconstruction.
Périmètre commun : pages, appareils, trafic, fonctions, mesures terrain/laboratoire, support, maintenance et durée de vie.
Horizon commun : 36 mois par défaut, avec sensibilité à 12 et 60 mois.
Option la moins chère dans le cas fréquent : correction ciblée lorsqu'une cause dominante est démontrée et la base maintenue.
Option la moins risquée si la valeur est faible : ne pas intervenir, mais conserver une baseline et un signal de révision.
Option qui protège une activité critique : optimisation accompagnée de RUM, charge, alertes, rollback et propriétaire.
Position Hagnéré Code : traiter la vitesse comme une qualité de service et un coût métier, pas comme un concours de score.
Cas où la refonte gagne : socle non maintenu, parcours à repenser, dette systémique, régressions répétées ou durée de vie insuffisante.
Signal de révision : nouvelle campagne, nouvelle extension, changement d'hébergement, croissance de trafic, incident, échec CWV terrain ou taux métier dégradé.
Ce que nous déconseillons même si nous pourrions le vendre : refonte sur un seul score, garantie 100/100, ou plugin ajouté sans mesure de la cause.
```

Le guide doit montrer au moins un cas où aucune intervention immédiate n’est rentable. Cette honnêteté rendra la recommandation de réparation ou de refonte beaucoup plus crédible.

## 8. Objections et cas limites

| Objection loyale                                        | Réponse prouvée                                                                                  | Incertitude restante                       | Conséquence                                                         |
| ------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | ------------------------------------------ | ------------------------------------------------------------------- |
| « Le site est rapide chez moi »                         | Un poste récent et une bonne fibre ne représentent pas les visiteurs                             | Appareils, réseau et région réels          | Lire terrain et tester un appareil représentatif                    |
| « PageSpeed change à chaque test »                      | Lighthouse documente plusieurs sources de variance                                               | Page, serveur et tiers concernés           | Cinq passages, médiane, dispersion et mêmes conditions              |
| « Je n’ai pas de données réelles »                      | CrUX peut manquer sur une page peu couverte                                                      | Expérience réelle inconnue                 | Laboratoire pour diagnostiquer, RUM autorisé si l’enjeu le justifie |
| « Le score est vert, donc tout va bien »                | Un score global peut masquer une transaction lente, une erreur ou une pointe                     | Parcours métier                            | Tester la tâche complète et les percentiles                         |
| « Les Core Web Vitals vont me faire monter sur Google » | Google dit qu’ils participent à l’expérience de page sans garantir une position                  | Concurrence, contenu et autres signaux     | Justifier d’abord par l’utilisateur et le métier                    |
| « Une image lourde explique forcément le problème »     | Elle peut affecter le LCP, mais serveur, CSS, ordre de chargement et tiers peuvent dominer       | Waterfall et sous-parties du LCP           | Isoler la ressource et mesurer avant/après                          |
| « Un CDN règlera tout »                                 | Il peut réduire certaines latences et servir des fichiers, pas corriger CPU, base, code ou tiers | Architecture réelle                        | Chiffrer ce que le CDN change et ce qu’il ne change pas             |
| « Il faut refaire WordPress »                           | Un socle maintenu peut souvent être optimisé                                                     | Thème, extensions, données et exploitation | Comparer correction et reconstruction à 36 mois                     |
| « La lenteur n’est visible qu’en campagne »             | Un pic peut révéler un défaut de capacité                                                        | Trafic et requêtes de pointe               | Test de charge en préproduction, seuil et alerte                    |
| « La vitesse a amélioré le taux de conversion »         | Une corrélation avant/après peut être influencée par l’offre, le trafic ou la saison             | Causalité                                  | Journaliser les changements et contrôler le même parcours           |

## 9. Plan de réécriture

| Ordre | Section proposée               | Question résolue                        | Preuve, scénario ou outil                              | Décision produite                  | Action éditoriale           |
| ----: | ------------------------------ | --------------------------------------- | ------------------------------------------------------ | ---------------------------------- | --------------------------- |
|     1 | Verdict en 150 mots            | Réparer, mesurer ou refaire ?           | Position Hagnéré Code conditionnelle                   | Choisir le premier parcours        | Renforcer                   |
|     2 | Décrire la lenteur vécue       | Quand et où est-ce lent ?               | Chargement, clic, déplacement, pointe, erreur          | Qualifier le symptôme              | Créer                       |
|     3 | Protocole cinq tests           | Le résultat est-il fiable ?             | Scénario 1 et CrUX                                     | Établir la baseline                | Remplacer « deux ou trois » |
|     4 | Lire les trois Core Web Vitals | Que vit la personne ?                   | Seuils et 75e percentile                               | Identifier la métrique             | Conserver                   |
|     5 | Frise de bout en bout          | Où le temps est-il dépensé ?            | DNS/TLS, serveur, base, fichiers, tiers, CPU           | Localiser la cause                 | Créer                       |
|     6 | Waterfall et trois preuves     | Quelle correction est justifiée ?       | Ressource, opération, trace                            | Refuser le correctif au hasard     | Enrichir                    |
|     7 | Pic de charge                  | Pourquoi seulement à certaines heures ? | GOV.UK, trafic normal, pic, seuil et mode dégradé      | Tester la capacité                 | Créer                       |
|     8 | Coût métier                    | Quel problème mérite un budget ?        | Scénarios 2 et 3                                       | Estimer sans inventer la causalité | Créer                       |
|     9 | TCO 36 mois                    | Réparer ou reconstruire ?               | Scénario 4                                             | Comparer à horizon égal            | Créer                       |
|    10 | Retour et sensibilité          | Combien de valeur faut-il prouver ?     | Scénario 5                                             | Investir, surveiller ou arrêter    | Créer                       |
|    11 | Empêcher la régression         | Comment conserver le résultat ?         | Budget, CI, RUM, alertes, propriétaire                 | Contractualiser le suivi           | Créer                       |
|    12 | Réception et CTA               | Quel livrable demander ?                | URL, appareil, cinq runs, terrain, fonctions et charge | Arriver avec un dossier vérifiable | Renforcer                   |

### Contrat des 150 premiers mots

- Nommer la situation : site lent sur mobile, au paiement, au formulaire ou aux heures de pointe.
- Répondre : ne refaites rien sur un score ; isolez une page, une tâche et une cause.
- Promettre : cinq tests, une médiane, un coût métier, un TCO et un plan de réception.
- Poser la limite : la vitesse peut contribuer à la conversion et au SEO, elle ne garantit ni l’un ni l’autre.
- Donner la première action : noter page, appareil, moment, symptôme et résultat attendu.

### À conserver

- Le focus sur les pages qui portent le résultat.
- La traduction simple de LCP, INP et CLS.
- La distinction terrain/laboratoire.
- Le tableau symptôme/cause/contrôle.
- Le refus de la refonte et du 100/100 automatiques.

### À réduire ou déplacer

- Regrouper les tableaux de niveaux d’intervention après le TCO.
- Éviter de répéter « mesurer avant/après » une fois le protocole formalisé.
- Déplacer le détail des outils techniques dans un encadré pour ne pas perdre le dirigeant.

## 10. Contre-audit et portes de correction

### P0 — bloquants avant de revendiquer une supériorité éditoriale

- [ ] Ajouter une source primaire distincte pour CrUX, variabilité, SEO et charge.
- [ ] Remplacer le protocole approximatif par cinq passages et médiane pour toute réception sérieuse.
- [ ] Ajouter un TCO à horizon égal avec hypothèses et exclusions.
- [ ] Étiqueter toute valeur métier comme hypothèse ou observation, jamais comme causalité.
- [ ] Faire recalculer les cinq scénarios par un second relecteur.

### P1 — nécessaires pour viser 90/100

- [ ] Ajouter la frise réseau → serveur → base → ressources → CPU → interaction.
- [ ] Ajouter waterfall, TTFB, services tiers, erreurs et capacité.
- [ ] Chiffrer temps interne et valeur commerciale avec contrôle inverse.
- [ ] Ajouter RUM, monitoring, alertes et budget de performance.
- [ ] Donner le cas où ne rien faire est la meilleure décision.
- [ ] Ajouter l’opinion Hagnéré Code, son cas inverse et son signal de révision.
- [ ] Construire un PV de réception reproductible.

### P2 — différenciation et finition

- [ ] Créer une fiche téléchargeable « cinq tests + coût métier + TCO ».
- [ ] Ajouter un exemple visuel de waterfall annotée avec données fictives.
- [ ] Ajouter un mini-calculateur de temps salarié et de retour simple.
- [ ] Faire tester la page par un dirigeant et observer s’il comprend terrain/laboratoire et corrélation/causalité.
- [ ] Vérifier les tableaux à 320, 390, 768, 1 024 et 1 440 px.

### Score après correction

Non attribué. Aucun score futur ne doit être simulé avant réécriture, recalcul indépendant, contrôle des sources, test navigateur et observation d’un lecteur réel.

## 11. Preuve technique et visuelle à exiger après réécriture

```text
Page publique modifiée dans ce lot : non.
Hash avant et après audit attendu : identique.
Sources revérifiées : web.dev, Chrome CrUX, Lighthouse, Google Search Central, GOV.UK et Australian Digital Performance Standard.
Calculs indépendants : médiane, temps interne, cohorte, TCO 36 mois et retour simple recalculés avec Node.js.
Liens : contrôle HTTP à rejouer après intégration ; une réponse anti-bot ne prouve pas un lien invalide.
SEO technique : canonical, robots, Article, BreadcrumbList, FAQ visible/JSON-LD, sitemap et maillage à recontrôler après modification.
Rendu : 320, 390, 768, 1 024 et 1 440 px, clair/sombre, tableaux, frise, CTA, FAQ et sources.
Performance de la page guide : cinq passages cohérents et inspection réelle, sans annoncer un score unique comme vérité.
Accessibilité : titres, liens explicites, tableaux, focus, contraste et alternatives à la waterfall.
Validation lecteur humain réel : absente à ce stade.
Indexation Google : non prouvée par cet audit.
```

### Verdict final de l’audit

Le guide a déjà la bonne voix et la bonne prudence. Il lui manque ce que les meilleurs contenus étrangers commencent à apporter sans toujours bien le contrôler : un protocole reproductible, une mesure continue et un lien économique. Hagnéré Code peut les dépasser en publiant cinq calculs remplaçables, un TCO honnête et une position ferme : réparer une cause prouvée, reconstruire un système défaillant, et ne jamais vendre une note verte comme résultat d’entreprise.
