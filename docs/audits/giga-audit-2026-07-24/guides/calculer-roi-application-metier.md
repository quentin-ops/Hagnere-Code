# Giga-audit — `calculer-roi-application-metier`

**Audit exécuté le 24 juillet 2026 — lecture seule**  
**Périmètre :** contenu, exactitude des calculs, preuves, pédagogie dirigeant, comparaison, opinion professionnelle, conversion, SEO observable et risques techniques du guide tel qu’il existe dans le dépôt au moment de l’audit.  
**Aucune modification du guide, du code, du registre ou de Git n’a été effectuée.**

## 1. Verdict exécutif

### Décision

**Ne pas considérer le guide comme la meilleure réponse Google dans son état actuel.** Il est nettement au-dessus d’un article commercial générique : l’introduction parle au dirigeant, la distinction entre temps libéré et économie réelle est saine, le TCO est explicite, le cas fictif est reproductible, quatre options sont comparées et l’auteur révèle son intérêt commercial. Il ne mérite toutefois pas encore un feu vert « numéro 1 » selon la charte : l’analyse de sensibilité est annoncée mais non calculée, l’adoption est supposée pleine dès la mise en service, le coût du statu quo et la hausse des licences sont insuffisamment modélisés, et aucun outil téléchargeable ou calculateur ne transforme la lecture en décision vérifiable.

**Score avant correction : 83/100.**  
**Seuil de publication exigeant : 90/100, aucun axe clé sous 8/10.**  
Le guide peut rester accessible et utile, mais les défauts P1 ci-dessous doivent être corrigés avant de le présenter comme une page de référence ou de renforcer fortement son maillage.

> **Contrôle orchestrateur — rectifications du 24/07/2026 :** le total de la scorecard a été recalculé à **83/100** (et harmonisé dans le rapport) ; l’URL Canada de la liste finale des sources a été remplacée par l’URL officielle complète.

### Ce qui fonctionne déjà

- L’ouverture met un dirigeant dans une situation reconnaissable : devis élevé, promesse de centaines d’heures, question « faut-il investir ? » (`page.tsx:214-248`).
- Le guide refuse la conversion abusive d’une minute gagnée en économie de salaire et distingue gain net, ROI et délai de retour (`page.tsx:335-350`).
- Le coût complet inclut acquisition, mise en œuvre, exploitation, évolution et sortie (`page.tsx:524-578`).
- Le cas de l’atelier de maintenance est explicitement fictif, toutes les opérations sont montrées et la recommandation laisse le sur-mesure perdre (`page.tsx:620-862`).
- Les coûts sont comparés sur le même calendrier, le statu quo est présent, et le conflit d’intérêts est reconnu (`page.tsx:795-861`).
- La mesure après lancement, les propriétaires de chiffres et les critères feu vert/pilote/report sont déjà présents (`page.tsx:930-1091`).

### Les trois corrections qui apporteraient le plus de valeur

1. **Calculer et afficher la sensibilité** : délai de trois et six mois, coût +20 %, horizon de deux ans, montée en adoption, point de bascule du pourcentage d’heures réutilisées et comparaison des options. La page demande au lecteur de tester ces hypothèses mais ne lui donne pas les résultats.
2. **Ajouter un support de décision réutilisable** : calculateur ou tableur téléchargeable avec TCO du statu quo, licences par utilisateur et hausse annuelle, coût d’intégration, coût de sortie, ROI simple, payback, VAN facultative et scénarios nommés. Les concurrents français, britanniques, canadiens et australiens occupent déjà ce terrain.
3. **Modéliser le bénéfice progressivement** : adoption, exceptions, formation, migration et charge résiduelle au lieu de compter un régime stable dès le début du mois 5. Le guide doit montrer le cas où un projet à +16 % devient presque nul avec six mois de montée en charge.

## 2. Snapshot reproductible

### Fichiers observés

| Élément | Observation au 24/07/2026 |
|---|---|
| Route | `/guides/calculer-roi-application-metier` |
| Source principale | `src/app/guides/calculer-roi-application-metier/page.tsx` |
| Taille source | 1 174 lignes, 5 928 mots |
| SHA-256 page | `57455e1436ca8967a7f524c19f1df47759367c7a5fbaae4d58d58b45cd26db8a` |
| Open Graph | `src/app/guides/calculer-roi-application-metier/opengraph-image.tsx`, SHA-256 `9fae1638d5f49be317354339e20511b90deac1c782db957350629969753024df` |
| Registre | `src/lib/guides.ts`, SHA-256 `8663e6e84352121ec854393e049492a1c2b72f242166141e5d31e0911b43cb09` |
| Registre éditorial | publication `2026-07-20`, modification `2026-07-21`, lecture annoncée 23 min, section « Budget & prix » |
| Robots | `guideRobots()` rend `index,follow` uniquement si l’environnement est explicitement `production` et si le guide n’est pas en revue. Cet audit ne prouve pas le HTML ni les en-têtes de production. |
| Commandes | `shasum -a 256 ...`, `wc -l -w ...`, tests `test -f` des six liens internes liés |
| Routes liées | Les six fichiers de route vérifiés existent dans le dépôt : automatiser processus, prix logiciel, ERP/standard, cahier des charges application, maintenance application, outils internes. |

**Limite importante :** aucun navigateur, aucun rendu mobile/desktop, aucun déploiement et aucun test de Search Console n’ont été exécutés dans cet audit. Il ne faut donc pas déclarer une QA visuelle, une indexation Google, un canonical servi ou un score Core Web Vitals comme vérifiés.

## 3. Ce que le guide dit réellement

Le guide suit ce raisonnement :

1. Partir d’un problème opérationnel mesuré plutôt que du devis.
2. Définir le ROI simple comme `gain net / coût total de possession`.
3. Mesurer volumes, temps, erreurs, décaissements, délais et adoption du processus actuel.
4. Ne monétiser que les heures effectivement réaffectées, les dépenses réellement évitées, la marge attribuable ou une perte attendue documentée.
5. Inclure cadrage, développement, temps interne, migration, formation, hébergement, surveillance, maintenance et sortie.
6. Comparer statu quo, simplification, standard configuré et sur-mesure sur 48 mois.
7. Faire varier quelques hypothèses, mesurer après 1/3/6 mois et choisir feu vert, pilote, solution simple ou report.

C’est une architecture éditoriale cohérente pour un dirigeant non technique. La faiblesse n’est pas une absence de méthode ; c’est le manque de calculs supplémentaires qui permettent de savoir **quelle hypothèse décide réellement du résultat**.

## 4. Audit concurrentiel et saturation de la SERP

### Méthode

Le 24/07/2026, j’ai recherché des réponses françaises sur « calculer ROI application métier / logiciel sur mesure », puis des ressources en anglais aux États-Unis/Canada, au Royaume-Uni et en Australie. Les pages commerciales servent à mesurer la couverture attendue, pas à valider leurs promesses. Les règles, définitions et méthodes sont recoupées avec des sources publiques officielles.

### France

- [PeakLab — Prix d’un logiciel sur mesure en 2026](https://peaklab.fr/blog/prix-logiciel-sur-mesure-en-2026-combien-prevoir), publié le 26/05/2026. La page combine fourchettes, TCO sur cinq ans, comparaison licences/sur-mesure, exemple à 25 utilisateurs, point de bascule par effectif et calcul de temps perdu. Elle comporte un calculateur de cahier des charges et un appel commercial. Les fourchettes et « seuils » sont des affirmations commerciales non indépendamment établies : elles doivent être analysées comme couverture, jamais recopiées comme statistiques de marché.
- [La Boîte Tech — Calculer le ROI d’un logiciel sur mesure](https://laboitetech.fr/blog/calculer-roi-logiciel-sur-mesure/), publié le 17/03/2026. Elle ajoute un business case pour DAF/COMEX, un exemple à cinq ans, des coûts cachés, des indicateurs post-déploiement et des dispositifs fiscaux. Certaines données (hausse SaaS, turnover, coûts de non-qualité, CIR/CII) reposent sur des sources secondaires ou des affirmations à vérifier ; ne pas reprendre leurs taux sans qualification juridique et comptable.
- [Cabinet Digital — Simulateur ROI logiciel](https://www.cabinetdigital.fr/outils/simulateur-roi-logiciel/). Le format « outil immédiat » répond mieux à l’intention calculatoire que le guide actuel, même sans preuve indépendante de ses hypothèses.
- [Simon Janvier — Coût d’un logiciel métier sur mesure](https://www.simonjanvier.com/ressources/articles/cout-logiciel-metier-sur-mesure/). La page compare trois profils sur trois ans et une grille de critères. Elle montre l’attente d’un lecteur qui veut un arbitrage par contexte, pas une seule formule.

**Saturation française :** les concurrents couvrent déjà définition du ROI, TCO, exemple numérique, coût caché, aides, comparaison SaaS/sur-mesure, KPI et CTA. Le guide Hagnéré est plus prudent sur la monétisation du temps et plus honnête sur le conflit d’intérêts, mais il est moins actionnable tant qu’il ne fournit pas un calculateur, un fichier modèle et des points de bascule calculés.

### Royaume-Uni

- [Atreon — ROI calculator for bespoke software](https://www.atreon.co.uk/roi-calculator/). Le formulaire demande effectifs administratifs, salaire chargé, coûts de licences, intégration, coût de construction, maintenance, pourcentage de temps gagné et effectifs redéployés. Il affiche économie sur cinq ans, payback et courbe cumulative.
- [Govtech — Business case calculator](https://www.govtech.co.uk/business-case-calculator). Le lecteur reçoit un business case écrit, des KPI et une montée progressive de l’auto-service sur cinq ans. La page distingue économies de capacité et valeur créée par la réaffectation des ressources.
- [DFMA — ROI calculator guide](https://www.dfma.com/dfma-roi-calculator-guide.asp). Le raisonnement par leviers de valeur et scénario conservateur montre qu’un résultat doit être expliqué par ses facteurs, pas seulement résumé par un pourcentage.
- [KPMG UK — Transformation demands a business case](https://assets.kpmg.com/content/dam/kpmgsites/uk/pdf/2024/10/transformation-demands-business-case.pdf.coredownload.inline.pdf). Ressource de cadrage business case à utiliser pour la structure des décisions, pas comme preuve de rendement d’un projet particulier.

### États-Unis / ressources anglophones

- [Spark Business Works / HubSpot — Making the Business Case for Your Custom App](https://f.hubspotusercontent20.net/hubfs/4039473/Blog/Making%20the%20Business%20Case%20for%20Your%20Custom%20App%20-%20ROI%20Estimating%20Tool.pdf). La fiche invite à examiner économies directes, licences remplacées, erreurs, turnover, logique métier capturée, revenus supplémentaires, expérience client et conformité, tout en reconnaissant que certains bénéfices restent difficilement monétisables.
- [GAO-20-195G Cost Estimating and Assessment Guide](https://www.gao.gov/pdf/product/705312), guide public américain. Il exige une estimation documentée, l’analyse de sensibilité, l’analyse de risque/incertitude, le croisement par méthode alternative et la mise à jour avec les coûts réels. Il avertit qu’une variation arbitraire de ±20 % sans base traçable n’est pas une bonne analyse de sensibilité.
- [National Safety Council — ROI cost calculator white paper](https://www.nsc.org/getmedia/b29b6411-8c4e-4cba-bbf1-935c1bb93322/roi-cost-calculator-white-paper.pdf). Ressource méthodologique orientée hypothèses et coûts complets ; à utiliser comme inspiration de présentation, non comme benchmark de projet logiciel.

### Canada et Australie

- [Canada — Policy on Cost-Benefit Analysis](https://www.canada.ca/en/government/system/laws/developing-improving-federal-regulations/requirements-developing-managing-reviewing-regulations/policy-cost-benefit-analysis.html). La politique impose une comparaison au scénario de référence, la monétisation/actualisation lorsqu’elle est pertinente, l’analyse de sensibilité, la transparence des hypothèses et l’explication des limites.
- [Canada — Policy on the Management of Projects, section business case](https://www.tbs-sct.canada.ca/pol/doc-eng.aspx?id=27807&section=html). Elle demande des options comparables, le statu quo et les coûts de cycle de vie. La page était partiellement refusée à l’ouverture automatisée ; son URL et les éléments trouvés dans la recherche doivent être revérifiés avant citation éditoriale.
- [Australia DTA — Benefits Management Policy guidance](https://www.digital.gov.au/policy/benefits-management-policy/guidance). Elle définit un bénéfice comme une amélioration mesurable et observable issue du changement, demande une base, une cible, un propriétaire permanent, des dépendances, les désavantages et une gestion explicite du biais d’optimisme.
- [Australia AGA — Benefits management guides and tools](https://architecture.digital.gov.au/design/benefits-management-guides-and-tools). La page propose un profil de bénéfice, une trame de réalisation et des modèles téléchargeables ; elle illustre la valeur d’un artefact concret absent du guide actuel.
- [Clever Ops — Automation ROI Calculator Australia](https://cleverops.com.au/tools/automation-roi-calculator), mis à jour le 31/05/2026. Le calculateur demande personnes, heures hebdomadaires, coût chargé, pourcentage de temps gagné, coût de construction et coût récurrent ; il produit économies annuelles, net première année, payback et ROI. Les repères de 60–90 % et de 3–6 mois sont des affirmations commerciales, à ne pas présenter comme lois générales.

### Benchmark officiel transversal

- [UK Green Book 2026](https://www.gov.uk/government/publications/the-green-book-2026). Le cadre recommande d’examiner les options, les coûts, bénéfices et risques, de corriger le biais d’optimisme, d’effectuer une analyse de sensibilité et de calculer des « switching values » : la valeur à laquelle l’option préférée cesse d’être la meilleure.
- [UK Digital and Data Benefits framework](https://www.gov.uk/government/publications/digital-and-data-benefits-framework/digital-and-data-benefits-framework), publié le 07/04/2026. Il insiste sur la non-double-comptabilisation, la base de référence, l’adoption, les scénarios meilleur/base/pire et la quantification séparée de productivité, expérience, erreurs, support et coût de service.

## 5. Matrice de gain d’information

| Axe que le lecteur cherche | Couverture actuelle | Ce que les meilleures pages ajoutent | Gain d’information | Priorité | Correction exacte |
|---|---|---|---|---|---|
| Savoir si le projet rembourse son coût | Formule et cas 48 mois présents | Calculateur et résultat immédiat | Très élevé | P1 | Ajouter une feuille téléchargeable ou un module sans dépendance : entrées, résultats ROI/payback, hypothèses visibles, export du dossier. |
| TCO de l’option actuelle | TCO du sur-mesure détaillé, statu quo à 0 € incrémental | Licences par utilisateur, modules, hausses, intégrations et contournements projetés | Très élevé | P1 | Ajouter une colonne « statu quo » et une escalade de prix paramétrable ; séparer coût déjà subi et coût évitable. |
| Temps libéré réellement utilisable | Excellente explication qualitative et taux 35/60/80 % | Effectifs redéployés, capacité, adoption par étape | Élevé | P1 | Introduire une courbe d’adoption mensuelle et une variable « heures utilisables » distincte des heures supprimées. |
| Sensibilité / switching value | Cinq tests proposés, aucun résultat recalculé | Tornado, seuil de bascule, valeur présente, analyse une variable à la fois | Très élevé | P1 | Publier un tableau numérique : délai +3/+6 mois, coût +20 %, horizon 24 mois, taux d’heures, taux de décaissement, seuil ROI=0 et seuil où le standard dépasse le sur-mesure. |
| Comparaison des options | Quatre options au même horizon, bonne opinion | Profils par effectif, coût licence 3–5 ans, critères d’adéquation | Élevé | P1 | Ajouter un mini-guide « quand standard/simplification/sur-mesure » et le calcul du point de bascule par utilisateur/volume, sans généraliser les fourchettes commerciales. |
| Risque, adoption et dépendances | Migration, formation, suivi et objections mentionnés | Profil de bénéfice, propriétaire, dépendances et désavantages explicites | Élevé | P1 | Relier chaque bénéfice à un owner, une preuve, une dépendance et un seuil d’arrêt ; ajouter le coût d’une adoption incomplète. |
| Finance : ROI simple vs VAN | Limite explicitement indiquée, pas de mini-exemple | Actualisation et calendrier de flux | Moyen à élevé | P2 | Ajouter un encadré optionnel avec taux, flux datés et VAN ; ne pas faire de VAN une condition pour un premier tri. |
| Preuves de marché | Insee, France Num, Anact ; cas fictif honnête | Les concurrents ajoutent cas clients et chiffres, souvent non auditables | Moyen | P2 | Garder le fictif ; proposer un protocole pour remplacer progressivement par cas autorisés et documentés, jamais par témoignage inventé. |
| Conversion | CTA unique, sobre et honnête | Calculateur + consultation contextualisée | Élevé | P1 | CTA vers le résultat du calculateur (« recevoir mon dossier ») puis contact ; conserver un seul chemin principal et ne pas promettre un ROI. |
| SEO sémantique | ROI, TCO, payback, statu quo, maintenance, réversibilité | « business case », coût du logiciel actuel, licence par utilisateur, VAN, switching value, adoption | Moyen | P2 | Ajouter les termes dans des explications utiles, pas en liste de mots-clés ; lier les guides prix, maintenance, Excel et cahier des charges. |

## 6. Exactitude factuelle et fraîcheur

### Points validés

- L’[Insee](https://www.insee.fr/fr/statistiques/2381340) affiche, pour 2025, 44,2 € dans les services marchands et 44,7 € dans l’ensemble marchand ; publication observée le 02/07/2026, entreprises de 10 salariés ou plus, secteurs B à N, apprentis inclus. Le guide précise correctement que ce repère ne remplace pas le coût chargé propre à l’entreprise (`page.tsx:410-428`).
- [France Num](https://www.francenum.gouv.fr/guides-et-conseils/strategie-numerique/comprendre-le-numerique/comment-mesurer-les-effets-de-la) rappelle que les effets peuvent relever de l’efficacité opérationnelle, de l’engagement, de la productivité et de nouvelles valeurs ; le guide l’utilise pour demander objectifs et indicateurs, sans lui faire dire un rendement chiffré.
- Le guide indique que son atelier et ses prix sont fictifs et ne sont ni un devis ni une moyenne de marché. C’est la bonne discipline de preuve.

### Points à encadrer

- La page affiche « Recherche effectuée le 20 juillet 2026 » alors que l’audit est du 24 juillet. Ce n’est pas une erreur pour les données Insee déjà sorties, mais une future révision doit mettre `dateModified` et la date de recherche en cohérence.
- [Anact](https://www.anact.fr/table-de-simulation-numerique) a renvoyé un blocage anti-bot (ERR-BOT-403) pendant l’ouverture. La mention « propose une table » doit être revalidée manuellement avant de la présenter comme ressource disponible. **P1 si le lien est conservé comme preuve principale ; P2 si la phrase devient simplement une piste à vérifier.**
- Les fourchettes, taux de maintenance et délais vus chez les concurrents ne sont pas des références officielles. Ne pas enrichir la page avec « 10–40 k€ », « 10–25 % » ou « 18–36 mois » sans source primaire, échantillon, périmètre et date.
- Les aides fiscales ne sont pas développées dans le guide, ce qui évite une erreur juridique ; si elles sont ajoutées, renvoyer vers les pages officielles et demander validation comptable.

## 7. Recalcul indépendant du cas fictif

### Base

| Poste | Opération | Résultat |
|---|---:|---:|
| Comptes rendus | `80 × 8 min × 48 / 60` | 512 h/an |
| Consolidation | `3 h × 48` | 144 h/an |
| Corrections | `14 × 24 min × 12 / 60` | 67,2 h/an |
| Charge totale | `512 + 144 + 67,2` | 723,2 h/an |
| Capacité théorique | `723,2 × 36 €` | 26 035,20 €/an |
| Décaissements évitables documentés | donnée fictive | 2 400 €/an |

Le calcul naïf est juste : `(26 035,20 + 2 400) × 4 = 113 740,80 €`, puis `(113 740,80 − 54 800) / 54 800 × 100 = 107,56 %`.

### TCO sur mesure

`4 000 + 26 000 + 3 600 + 2 400 + 6 600 + 11 000 + 1 200 = 54 800 €`.

La somme est exacte. Le service démarre au mois 5 ; 44 mois de bénéfices sont donc comptés dans un horizon mois 0–48.

### Scénarios recalculés

| Scénario | Heures réutilisées | Décaissements évités | Bénéfice annuel | Bénéfices mois 5–48 | Gain net | ROI simple |
|---|---:|---:|---:|---:|---:|---:|
| Prudent | 35 % | 40 % | 10 072,32 € | 36 931,84 € | −17 868,16 € | −32,61 % |
| Central | 60 % | 70 % | 17 301,12 € | 63 437,44 € | 8 637,44 € | 15,76 % |
| Haut | 80 % | 90 % | 22 988,16 € | 84 356,48 € | 29 556,48 € | 53,93 % |

Les arrondis éditoriaux « environ −33 %, 16 %, 54 % » sont corrects. Le texte est exact lorsqu’il donne 63 437,44 € et 15,76 %.

### Payback

Le bénéfice mensuel central est `17 301,12 / 12 = 1 441,76 €`. Après 400 € mensuels d’exploitation et `1 200 / 44 = 27,27 €` de provision de sortie, le flux économique stable est `1 014,49 €`. `36 000 / 1 014,49 = 35,48 mois` après mise en service, soit environ 39,5 mois depuis la décision : le « 36 mois / environ 40 mois » est cohérent comme raccourci économique, mais **pas comme délai de trésorerie**, ce que le guide précise correctement.

### Comparaison des options : correction des arrondis

| Option | Calcul bénéfices | Bénéfices | Coût | Gain net | ROI |
|---|---:|---:|---:|---:|---:|
| Simplifier | `(26 035,20×25 % + 2 400×40 %)×47/12` | 29 252,80 € | 8 000 € | 21 252,80 € | 265,66 % |
| Standard | `(26 035,20×50 % + 2 400×60 %)×46/12` | 55 419,20 € | 32 000 € | 23 419,20 € | 73,19 % |
| Sur mesure central | `(26 035,20×60 % + 2 400×70 %)×44/12` | 63 437,44 € | 54 800 € | 8 637,44 € | 15,76 % |

Le tableau de la page annonce « environ 29 300 / 21 300 / 266 % », ce qui est acceptable. L’audit corrige seulement la valeur exacte : **29 252,80 €**, pas 29 300 € si l’on affiche deux décimales.

## 8. Sensibilité que le guide doit réellement montrer

Les chiffres ci-dessous utilisent strictement les hypothèses centrales de la page et isolent une variation à la fois. Ils rendent le conseil actionnable.

### Retard et montée en charge

| Cas | Mois de bénéfices pleins | Bénéfices | Gain net | ROI |
|---|---:|---:|---:|---:|
| Central actuel | 44 | 63 437,44 € | 8 637,44 € | 15,76 % |
| Mise en service / adoption décalée de 3 mois | 41 | 59 111,16 € | 4 311,16 € | 7,87 % |
| Mise en service / adoption décalée de 6 mois | 38 | 54 786,88 € | −13,12 € | −0,02 % |
| Montée linéaire sur 6 mois, sans autre retard | équivalent 41 | 59 111,16 € | 4 311,16 € | 7,87 % |
| Montée linéaire sur 12 mois, sans autre retard | équivalent 38 | 54 786,88 € | −13,12 € | −0,02 % |

**Opinion professionnelle :** un projet qui n’a plus de marge après six mois de montée en charge ne doit pas être signé sur le seul scénario central. Il doit passer par un pilote avec mesure d’adoption ou être redimensionné.

### Coût complet et horizon

| Test | Bénéfices | Coût | Gain net | ROI |
|---|---:|---:|---:|---:|
| Coût +20 % | 63 437,44 € | 65 760 € | −2 322,56 € | −3,53 % |
| Horizon 24 mois, mise en service mois 5 | 28 835,20 € | 54 800 € | −25 964,80 € | −47,38 % |
| Bénéfice de vente fragile retiré | à recalculer avec une ligne documentée | inchangé | non déterminable sans la ligne | ne pas inventer |

### Valeurs de bascule

- **Seuil de temps réutilisé avec 70 % des décaissements évités :** `[(54 800×12/44) − (2 400×70 %)] / 26 035,20 = 50,96 %`. En dessous d’environ **51 %**, le sur-mesure central devient négatif sur 48 mois.
- **Seuil de décaissements évités avec 60 % du temps réutilisé :** le temps seul produit `26 035,20×60 % = 15 621,12 €/an`, déjà légèrement au-dessus du bénéfice annuel nécessaire `54 800×12/44 = 14 945,45 €/an`. Le taux de décaissements évités peut donc être nul et le cas reste à peine positif ; ce résultat dépend entièrement de la valeur économique accordée au temps réaffecté.
- **Prudent à 35 % de temps :** même avec 100 % des 2 400 € évités, le bénéfice annuel ne suffit pas à rembourser 54 800 € sur 44 mois. Le scénario prudent est structurellement négatif, pas seulement « un peu pessimiste ».

Ces valeurs de bascule sont précisément le type de « switching value » recommandé par le [Green Book 2026](https://www.gov.uk/government/publications/the-green-book-2026) et d’analyse à variable isolée décrit par le [GAO-20-195G](https://www.gao.gov/pdf/product/705312). La page actuelle les demande mais ne les calcule pas : c’est un défaut P1.

## 9. Audit de pédagogie et de rédaction

### Forces

- Le lexique est traduit ou contextualisé : ROI, TCO, coût chargé, délai de retour, statu quo, réversibilité.
- Les phrases parlent des décisions d’un dirigeant (« investir », « reporter », « trésorerie », « qui décide ») et non d’une architecture technique.
- Les objections principales sont traitées : réduction d’effectifs, aides, actualisation, horizon, risque, double comptage et conflit d’intérêt.
- La progression « situation → mesure → gains → coûts → cas → comparaison → décision → suivi » est mémorisable.

### Manques qui réduisent la valeur humaine

1. **Le lecteur ne sait pas assez tôt quel ordre de grandeur lui ferait arrêter le projet.** Ajouter après l’introduction un encadré « Si votre bénéfice crédible annuel ne couvre pas environ `coût complet / horizon utile`, ne demandez pas encore un devis de sur-mesure » — avec l’avertissement que ce n’est qu’un filtre, pas une règle universelle.
2. **Les scénarios sont présentés comme résultats, mais pas comme expérience de décision.** Ajouter une phrase sous chaque ligne : « Ce scénario ne passe pas : mesurez avant de financer », « Celui-ci passe à peine : pilote », « Celui-ci offre une réserve ». Cela aide un non-spécialiste à agir.
3. **Le vocabulaire “capacité théorique” peut rester abstrait.** Dans le cas fictif, convertir 723,2 h en exemples humains : dossiers supplémentaires, délais raccourcis ou personnes qui cessent une ressaisie — sans prétendre qu’une heure libérée équivaut à une embauche évitée.
4. **La différence entre gain économique et trésorerie est juste mais tardive.** La faire apparaître dans le premier encadré, car un dirigeant peut financer un projet positif économiquement mais impossible à payer pendant les quatre mois de construction.
5. **Le guide dit “testez +20 %” mais ne dit pas pourquoi +20 %.** Soit donner une base observée de devis/risque, soit présenter +20 % comme illustration arbitraire et ajouter un test propre à l’historique de l’entreprise. Le GAO déconseille les pourcentages subjectifs non traçables.

## 10. Opinion professionnelle tranchée à expliciter

Le guide doit assumer les conclusions suivantes, avec leurs conditions :

- **Pour un besoin standard, acheter ou simplifier doit être le choix par défaut.** Développer sur mesure ne devient rationnel que si une fonction critique manque réellement, si le processus est suffisamment stable, si les données et les utilisateurs sont disponibles et si le coût de l’écart au standard est mesuré.
- **Un ROI positif n’est pas un feu vert.** Si le résultat repose sur une réaffectation du temps non décidée, une adoption à 100 %, une vente future non prouvée ou une aide fiscale non confirmée, il ne doit produire qu’un pilote.
- **Un projet qui ne tient qu’à 60 % de temps réutilisé est fragile.** Dans le cas fictif, le moindre retard de six mois annule pratiquement la valeur ; la décision doit donc privilégier la réduction du périmètre, la preuve d’adoption et la réversibilité.
- **Le gain net compte davantage que le pourcentage de ROI pour arbitrer un budget.** La page le dit déjà ; le calculateur devra afficher les deux côte à côte et jamais classer les options sur le ROI seul.

## 11. Conversion, offre et intention de recherche

### État actuel

Le CTA unique est honnête : il demande de décrire le travail, les coûts et les solutions et ne promet pas un ROI (`page.tsx:985-995`). C’est préférable à une promesse commerciale chiffrée. Les liens internes vérifiés existent.

### Ce qui manque

- Une sortie immédiatement utile : modèle de tableur, fiche de décision une page ou calculateur.
- Une segmentation du prochain pas : « je veux mesurer », « je compare standard/sur-mesure », « j’ai déjà un devis », « je dois reprendre un outil ».
- Un résultat qui explique quand **ne pas** contacter Hagnéré Code. Cette phrase existe en partie (`page.tsx:1074-1081`) et doit être remontée près du CTA pour rendre la recommandation crédible.
- Un champ de prise de contact prérempli par le résultat (option, horizon, seuil, hypothèse fragile), plutôt qu’un formulaire qui recommence l’interrogatoire.

### Correction de conversion recommandée

Construire une ressource libre « Dossier ROI d’une application métier » :

1. onglet `Situation actuelle` ;
2. onglet `Options` ;
3. onglet `Scénarios` ;
4. onglet `Sensibilité` ;
5. onglet `Suivi 1-3-6 mois` ;
6. une page PDF de synthèse pour décision.

Le CTA doit proposer le téléchargement puis, seulement si le lecteur le souhaite, « faire relire mon dossier ». Les hypothèses, formules et limites doivent rester visibles dans le fichier.

## 12. SEO et technique observable

### Positif

- H1, title, meta description, canonical et Open Graph dédiés sont déclarés.
- `Article` et `BreadcrumbList` JSON-LD sont présents, avec auteur, dates, langue et image.
- Le mot-clé principal et ses variantes naturelles apparaissent dans H1, intro, titres, formules, FAQ et liens.
- Les tables ont une version mobile en cartes via `GuideTable`; les routes internes testées existent.
- La FAQ est rendue dans le DOM par `<details>/<summary>` via `GuideFAQSection`, sans prétendre à une FAQPage non observée.

### Points à surveiller / P2 sauf preuve contraire

- Aucun test de build, HTML rendu, canonical servi, robots HTTP, sitemap, image OG ou mobile n’a été réalisé ici. Le rapport ne transforme pas le code source en preuve de production.
- La date du registre (`2026-07-21`) ne reflète pas l’audit et les recherches du 24/07. Après correction, mettre à jour `dateModified` seulement avec un changement réel du guide.
- La page annonce 23 minutes pour 5 928 mots : ordre de grandeur plausible, à confirmer par le calcul de lecture réel du composant, pas par la seule donnée du registre.
- La page ne contient pas de calculateur interactif. Ce n’est pas une pénalité algorithmique automatique, mais c’est une faiblesse forte d’intention « calculer » et de conversion face aux pages qui affichent directement un résultat.
- Ajouter une FAQPage JSON-LD n’est pas prioritaire : les résultats enrichis FAQ sont restreints et la valeur principale doit rester le contenu visible. Ne pas fabriquer de structured data pour compenser un manque de substance.

## 13. Défauts classés par sévérité

### P0 — aucun constaté

Je n’ai trouvé ni chiffre interne présenté comme preuve externe, ni témoignage inventé, ni erreur arithmétique bloquante, ni conseil fiscal affirmé sans réserve. Si une nouvelle version ajoute des fourchettes de prix, des aides ou des rendements, elle devra être ré-auditée avant publication.

### P1 — à corriger avant de revendiquer une page de référence

| ID | Défaut | Preuve observable | Risque lecteur | Correction exacte |
|---|---|---|---|---|
| P1-01 | Sensibilité non calculée | `page.tsx:876-919` demande des tests mais ne montre que les résultats centraux/prudent/haut | Le dirigeant ne voit pas la variable qui fera changer la décision | Ajouter le tableau de sensibilité de ce rapport, avec valeurs de bascule et méthode une variable à la fois. |
| P1-02 | Adoption pleine dès le mois 5 | `page.tsx:641-664`, formule `44 mois` au régime stable | ROI trop optimiste si formation, exceptions ou usage réel montent progressivement | Ajouter ramp 6/12 mois et taux d’adoption observable ; compter le bénéfice au prorata. |
| P1-03 | Statu quo sous-modélisé | `page.tsx:795-824` le met à 0 € de coût nouveau | Le lecteur peut croire que la comparaison porte sur « projet vs gratuit » | Ajouter coûts actuels, licences, contournements et inflation ; conserver séparé le coût historique non évitable. |
| P1-04 | Aucun outil de calcul | Aucun composant calculateur ni fichier téléchargeable dans la page | L’intention « calculer » s’arrête à la lecture ; conversion et réutilisation faibles | Créer le tableur/fiche de décision, l’expliquer dans la page et tester ses formules contre le cas fictif. |
| P1-05 | Point de bascule sur le sur-mesure non explicite | `page.tsx:855-861` reste qualitatif | Le dirigeant ne sait pas quand le standard cesse d’être meilleur | Calculer seuil de temps, volume, utilisateurs, licences ou coût de contournement, en gardant les hypothèses propres au cas. |
| P1-06 | Source Anact non vérifiable depuis l’audit | URL bloquée ERR-BOT-403 | Lien présenté comme ressource disponible mais non confirmé | Revalider manuellement ou écrire « ressource à vérifier » et ajouter une source alternative accessible. |
| P1-07 | Taux d’incertitude non relié à l’historique | +20 % demandé sans fondement explicite | Le scénario paraît précis mais le choix du facteur est arbitraire | Demander l’écart historique des devis, des délais et des incidents ; afficher le facteur retenu et sa provenance. |
| P1-08 | Priorité de décision peu visible | Les seuils et le cash-flow sont dispersés | Lecture longue avant de comprendre « que faire lundi » | Ajouter un résumé après l’introduction : décision, seuil, mesure à obtenir et prochaine action. |

### P2 — améliorations utiles après les P1

| ID | Amélioration | Action |
|---|---|---|
| P2-01 | VAN / actualisation seulement mentionnées | Ajouter un encadré facultatif avec flux datés et avertissement finance. |
| P2-02 | Trésorerie vs économie séparées tardivement | Ajouter un mini-calendrier des décaissements mois 0–5 dans le cas. |
| P2-03 | Bénéfices qualitatifs peu structurés | Ajouter tableau `mesurable / proxy / non monétisable / owner`. |
| P2-04 | SEO lexical | Introduire « business case », « coût du statu quo », « coût par utilisateur », « seuil de bascule » dans des phrases pédagogiques. |
| P2-05 | Cas réel | Chercher un cas autorisé et documenté ; ne jamais remplacer le cas fictif par une promesse client non vérifiable. |
| P2-06 | QA technique | Après modification, exécuter build/lint puis inspection réelle 320–1600 px, liens, JSON-LD, OG, robots et canonical en production. |

## 14. Scorecard après audit (avant correction)

| Axe | Note /10 | Commentaire |
|---|---:|---|
| Intention de recherche | 9 | Répond à une vraie décision et définit le problème dès l’ouverture. |
| Décision dirigeant | 8 | Conclusions utiles, mais seuils trop dispersés et sensibilité non chiffrée. |
| Pédagogie | 9 | Progression claire, exemples et distinctions saines. |
| Profondeur | 8 | TCO et cas solides ; manque ramp d’adoption, statu quo complet et VAN optionnelle. |
| Preuve | 8 | Insee/France Num et transparence fictive ; Anact inaccessible, peu de preuves externes comparables. |
| Comparaison | 9 | Quatre options au même horizon et conflit d’intérêts explicite ; point de bascule manquant. |
| Calculs | 9 | Recalculs exacts, arrondis honnêtes ; sensibilité annoncée non exécutée. |
| Opinion professionnelle | 8 | Le sur-mesure peut perdre ; les conditions de feu vert peuvent être plus tranchées. |
| Conversion | 7 | CTA honnête mais pas de ressource/calculateur ni segmentation du prochain pas. |
| SEO / produit | 8 | Métadonnées, JSON-LD, maillage et FAQ visibles ; production et indexation non vérifiées. |
| **Total** | **83/100** | **Sous le seuil de 90 ; P1 à corriger.** |

## 15. Plan de réécriture recommandé, dans l’ordre

### Passe 1 — preuve et modèle

1. Revalider les liens France Num, Insee et Anact ; remplacer le lien Anact si nécessaire.
2. Ajouter au modèle les postes du statu quo : licences, modules, hausses, intégrations, contournements, sortie.
3. Ajouter les variables d’adoption, de délai, de coût, de taux d’heures réutilisées et de décaissements évités.
4. Calculer les seuils de bascule et vérifier toutes les options avec la même convention.

### Passe 2 — rédaction dirigeant

1. Mettre en tête le verdict conditionnel et la différence économie/trésorerie.
2. Convertir chaque scénario en action : feu vert, pilote, simplification ou report.
3. Ajouter un exemple de montée en charge avec une phrase humaine (« six mois de formation effacent presque toute la marge du cas central »).
4. Garder les limites et le conflit d’intérêts visibles.

### Passe 3 — contre-audit

1. Une personne indépendante refait tous les calculs depuis les entrées.
2. Elle tente de faire gagner le sur-mesure en modifiant une seule hypothèse à la fois, puis documente le point de bascule.
3. Elle cherche double comptage, coûts omis, horizon incohérent, adoption supposée et confusion ROI/payback/caisse.
4. Elle vérifie les sources directement à la date de mise en ligne.

### Passe 4 — produit, conversion et QA

1. Construire le tableur/fiche libre et vérifier qu’il reproduit le cas à 0,01 € près.
2. Ajouter un CTA vers le support puis vers la relecture humaine, sans promesse de rentabilité.
3. Build/lint, rendu réel mobile/desktop, vérification des liens et structured data.
4. Vérifier en production robots, canonical, sitemap, image OG et absence de noindex hors preview.

## 16. Critère de sortie de l’audit

Le guide pourra être marqué « prêt pour revue humaine » seulement si :

- la sensibilité numérique et les switching values sont visibles ;
- le scénario central inclut une adoption progressive ;
- le statu quo possède son TCO comparable ;
- le support de calcul reproduit les formules et expose les hypothèses ;
- chaque bénéfice a une mesure, un propriétaire et une dépendance ;
- les sources sont accessibles, datées et proportionnées à la phrase soutenue ;
- le score atteint au moins 90/100, avec Intention, Décision, Pédagogie, Profondeur, Preuve et Comparaison à 9/10 ou plus ;
- une QA navigateur réelle et une vérification de production sont réalisées et consignées séparément.

## Sources consultées — accès au 24/07/2026

### Officielles / méthodologiques

- [Insee — Coût horaire du travail selon l’activité](https://www.insee.fr/fr/statistiques/2381340), données 2008–2025, paru le 02/07/2026.
- [France Num — Mesurer les effets de la transformation numérique](https://www.francenum.gouv.fr/guides-et-conseils/strategie-numerique/comprendre-le-numerique/comment-mesurer-les-effets-de-la), page consultée le 24/07/2026, contenu notamment fondé sur une référence BCG 2020.
- [ANACT — Table de simulation numérique](https://www.anact.fr/table-de-simulation-numerique), ouverture automatisée bloquée par ERR-BOT-403 le 24/07/2026.
- [UK Green Book 2026](https://www.gov.uk/government/publications/the-green-book-2026), mise à jour 05/02/2026.
- [UK Digital and Data Benefits framework](https://www.gov.uk/government/publications/digital-and-data-benefits-framework), publié le 07/04/2026.
- [US GAO-20-195G Cost Estimating and Assessment Guide](https://www.gao.gov/pdf/product/705312), guide public, notamment chapitres 3, 11, 12 et 15.
- [Canada — Policy on Cost-Benefit Analysis](https://www.canada.ca/en/government/system/laws/developing-improving-federal-regulations/requirements-developing-managing-reviewing-regulations/policy-cost-benefit-analysis.html), politique consultée le 24/07/2026.
- [Australia DTA — Benefits Management Policy guidance](https://www.digital.gov.au/policy/benefits-management-policy/guidance), contenu courant consulté le 24/07/2026.

### Couverture concurrentielle (à ne pas traiter comme preuve de marché)

- [PeakLab](https://peaklab.fr/blog/prix-logiciel-sur-mesure-en-2026-combien-prevoir)
- [La Boîte Tech](https://laboitetech.fr/blog/calculer-roi-logiciel-sur-mesure/)
- [Cabinet Digital](https://www.cabinetdigital.fr/outils/simulateur-roi-logiciel/)
- [Atreon UK](https://www.atreon.co.uk/roi-calculator/)
- [Govtech UK](https://www.govtech.co.uk/business-case-calculator)
- [Spark Business Works / HubSpot PDF](https://f.hubspotusercontent20.net/hubfs/4039473/Blog/Making%20the%20Business%20Case%20for%20Your%20Custom%20App%20-%20ROI%20Estimating%20Tool.pdf)
- [Shredy Canada](https://www.shredy.ca/tools/roi-calculator)
- [Clever Ops Australia](https://cleverops.com.au/tools/automation-roi-calculator)
