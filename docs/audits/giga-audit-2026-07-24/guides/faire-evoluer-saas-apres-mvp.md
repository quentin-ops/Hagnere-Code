# Audit approfondi — `faire-evoluer-saas-apres-mvp`

Date : 24 juillet 2026

Auditeur concurrentiel : Codex, lot benchmark France et international

Snapshot du guide : `src/app/guides/faire-evoluer-saas-apres-mvp/page.tsx`, SHA-256 `abe9bfb2a7027033748e1c65e6e9cd8ee087f417255b9c197bbcfa276bfec5a7`

Périmètre : audit éditorial et décisionnel uniquement. Aucune modification de la page publique n’a été réalisée dans ce lot.

## 1. Verdict exécutif

```text
Lecteur exact : fondateur ou dirigeant d'un SaaS B2B déjà utilisé par de premiers clients, avec peu de capacité et sans organisation produit stabilisée.
Question réelle : que dois-je faire après le MVP entre incidents, demandes clients, ventes, sécurité et nouvelles fonctions, et combien de capacité puis-je réellement investir ?
Décision attendue : protéger le service, réserver explicitement la capacité invisible, livrer un petit lot mesurable, vérifier son effet et réviser la poursuite du produit sur des données économiques.
Réponse actuelle en une phrase : séparez quatre types de décisions, écrivez une règle d'interruption, livrez de petits lots soutenables, vérifiez leurs effets et revoyez régulièrement direction et budget.
Défaut qui coûte le plus de valeur : le guide est méthodologiquement profond, mais presque entièrement non chiffré ; il n'aide pas à répartir la capacité, tester la valeur d'une demande client ou décider de réduire, acheter, tarifer ou arrêter.
Niveau actuel : B
Priorité : haute
Statut : audité / à réécrire
```

Le guide est déjà très supérieur à la majorité des articles « après le MVP ». Il ne propose ni calendrier arbitraire de 30/60/90 jours, ni ratio magique de dette technique, ni liste de fonctionnalités. Il sépare l’incident, le signal, le lot et la santé du produit ; il prévoit le retour arrière, la mesure avant/après, les réponses sans code et même l’arrêt. Les limites des sources sont explicites.

Son défaut n’est donc pas une absence de méthode. C’est une absence d’économie :

- aucune journée de capacité n’est répartie ;
- aucun lot ne vient concurrencer support, sécurité, tests et réserve ;
- aucune demande d’un gros client n’est examinée en valeur attendue ;
- aucun avant/après n’est calculé sur une cohorte ;
- aucun MRR, coût d’exploitation, concentration client ou seuil d’arrêt n’est montré ;
- le lecteur ne voit pas quand acheter une brique, augmenter le prix, réduire le périmètre ou cesser d’investir.

La position professionnelle à publier :

> Après un MVP, nous ne consacrerions jamais toute la capacité aux fonctionnalités visibles. Le service, la sécurité, les mises en ligne, la mesure et une réserve doivent être financés avant le prochain lot. Une demande client ne gagne ni parce que le client paie beaucoup, ni parce qu’elle revient trois fois : elle gagne si le problème est prouvé, si le lot tient dans la capacité soutenable et si sa valeur attendue reste supérieure à son coût complet.

### Score avant correction

| Axe         | Note /10 | Preuve localisable                                                                 | Manque décisif                                                                               |
| ----------- | -------: | ---------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| Intention   |        9 | Ouverture avec client bloqué, export commercial et avis de sécurité                | Le choix financier n’est pas encore explicite                                                |
| Décision    |        8 | Quatre flux, règles d’interruption, mise en ligne, mesure et calendrier            | Aucun budget de capacité ni seuil économique                                                 |
| Pédagogie   |        9 | Situations vécues, modèles à copier, mots simples et limites claires               | Pas de calcul exécuté pour rendre la méthode tangible                                        |
| Profondeur  |        8 | Support, sécurité, livraison, mesure, roadmap, non-code et arrêt                   | Pricing, concentration, build/buy, coût complet et runway sont trop courts                   |
| Preuve      |        9 | GOV.UK, DORA, NIST, Google SRE et CNIL sont primaires et bien bornés               | Aucun cas propriétaire, donnée France SaaS ou benchmark économique robuste                   |
| Comparaison |        5 | Plusieurs sorties non techniques sont nommées                                      | Aucun périmètre financier commun entre construire, acheter, maintenir, réduire ou arrêter    |
| Originalité |        8 | Quatre décisions séparées et calendrier de décisions plutôt que roadmap décorative | Pas de calculateur de capacité ou d’expérience chiffrée distinctive                          |
| Style       |        8 | Ton humain, prudent et professionnel                                               | Densité élevée ; une anomalie visuelle « 01 / 6 vérifications » nuit à la finition           |
| Conversion  |        7 | CTA honnête et non agressif                                                        | Le prospect n’arrive pas avec capacité, coût complet ou seuil de décision                    |
| SEO/produit |        6 | Couverture sémantique, FAQ, maillage et sources fortes                             | Intentions « budget après MVP », « que faire après MVP » et outil téléchargeable sous-servis |

Total : **77/100**

## 2. Ce que le guide dit réellement

- **Réponse dans les 150 premiers mots :** très bonne. Trois sujets de nature différente ne doivent pas être jetés dans une même liste ; protéger le service précède le lot.
- **Progression :** semaine réelle, quatre décisions, interruption, signaux, petit lot, six contrôles de mise en ligne, mesure, roadmap, exemple d’onboarding, calendrier, réponses sans code, besoin d’aide.
- **Verdict :** cadence adaptable avec responsable, preuve et prochaine date pour chaque décision.
- **Exemple :** friction d’onboarding observée par trois utilisateurs ; le guide se garde d’inventer une fréquence ou un succès. C’est juste, mais l’avant/après reste non numérique.
- **Calculs présents :** aucun calcul de capacité, de coût, de valeur attendue, de cohorte ou de poursuite financière.
- **Comparaisons présentes :** développer, configurer, documenter, former, traiter manuellement, acheter, maintenir, reporter, retirer ou arrêter. Elles sont citées sans TCO.
- **Sources :** GOV.UK, DORA, NIST SSDF 1.1, Google SRE et CNIL, revalidées le 23 juillet 2026.
- **Bon fit :** SaaS B2B après premiers usages, équipe capable de déployer et soutenir, dirigeant qui veut une cadence explicite.
- **Mauvais fit :** incident ou compromission en cours, absence d’usage réel, produit sans personne capable de soutenir, outil standard plus rationnel, valeur inférieure au coût.
- **CTA :** particulièrement honnête : lecture humaine, aucune promesse de lot, calendrier ou développement.
- **Élément faussement complet :** la revue financière est mentionnée puis renvoyée vers un autre guide. Or une décision périodique sur la poursuite du produit exige ici au moins quatre chiffres.

## 3. Benchmark France et international

Requêtes, pays, langues et date :

- France, français : « faire évoluer SaaS après MVP », « budget SaaS après MVP », « prioriser après premiers clients », « roadmap SaaS après lancement » ;
- États-Unis et international, anglais : « what happens after SaaS MVP », « MVP to production roadmap », « first 90 days after MVP », « SaaS post MVP budget » ;
- Royaume-Uni, Canada et Australie : exploitation continue d’un service numérique public ;
- recherche et réouverture des sources le 24 juillet 2026.

### Saturation

La SERP sature sur cinq conseils : parler aux utilisateurs, ne pas développer toutes les demandes, corriger les bugs, livrer petit et construire une roadmap. Les pages internationales ajoutent souvent un programme de 30, 60 ou 90 jours, des quotas d’entretiens ou des seuils sans démontrer qu’ils s’appliquent.

Les guides publics britanniques, canadiens et australiens convergent sur une idée plus solide : l’équipe ne disparaît pas après le lancement ; support, sécurité, recherche, mesure et amélioration restent financés. DORA ajoute petits lots et mesures de livraison ; NIST la sécurité intégrée ; Google SRE un exemple de règle d’interruption.

Le guide actuel couvre déjà mieux cette mécanique que la plupart des concurrents. Le gain d’information restant est distinct :

- un budget de capacité en jours ;
- une valeur attendue conditionnelle pour une demande client ;
- une cohorte avant/après avec variation absolue et relative ;
- un point économique produit incluant contribution, coût de fonctionnement et concentration ;
- les seuils qui font préférer acheter, réduire, augmenter le prix ou arrêter.

Au-delà de ces familles, les nouvelles pages répètent les mêmes listes ou inventent des cadences. La recherche est donc saturée pour la typologie, pas pour les calculs.

| Ressource et URL directe                                                                                                                                            | Pays                       | Réponse utile                                                                                         | Preuve, outil ou exemple                              | Limite                                                                   | Apport à vérifier ou adapter                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| [GOV.UK — Running your service in a sustainable way](https://www.gov.uk/service-manual/agile-delivery/running-your-service-in-a-sustainable-way)                    | Royaume-Uni                | Planifier et financer support, maintenance, recherche et amélioration après lancement                 | Manuel officiel mis à jour le 22 mai 2026             | Services publics britanniques, pas modèle SaaS privé                     | Renforcer le budget de capacité continue                                                   |
| [GOV.UK — How the live phase works](https://www.gov.uk/service-manual/agile-delivery/how-the-live-phase-works)                                                      | Royaume-Uni                | Support, itération, tests, sécurité, disponibilité et retrait si besoin ou coût ne se justifient plus | Source publique                                       | Organisation de service public                                           | Conserver la porte « réduire ou arrêter », puis la chiffrer                                |
| [GOV.UK — Developing a roadmap](https://www.gov.uk/service-manual/agile-delivery/developing-a-roadmap)                                                              | Royaume-Uni                | Intentions, problèmes, résultats, incertitude et ce qui ne sera pas fait                              | Méthode claire                                        | Pas un plan financier                                                    | Conserver roadmap comme direction, pas promesse                                            |
| [GOV.UK — Measuring the success of your service](https://www.gov.uk/service-manual/measuring-success/measuring-the-success-of-your-service)                         | Royaume-Uni                | Croiser performance, recherche, support et données financières                                        | Source officielle                                     | Indicateurs de services publics                                          | Ajouter cohorte et coût complet sans prétendre prouver la causalité                        |
| [DORA — Working in small batches](https://dora.dev/capabilities/working-in-small-batches/)                                                                          | États-Unis / international | Lots indépendants, testables et feedback plus rapide                                                  | Ressource DORA mise à jour le 8 décembre 2025         | Recommandations contextuelles, pas taille universelle                    | Conserver petits lots et ajouter limite de capacité                                        |
| [DORA — DORA metrics](https://dora.dev/guides/dora-metrics/)                                                                                                        | États-Unis / international | Cinq mesures actuelles de livraison et stabilité, utilisées pour s’améliorer                          | Guide mis à jour le 5 janvier 2026                    | Ne mesure ni valeur produit ni rentabilité ; éviter classement d’équipes | Actualiser à cinq métriques si elles sont énumérées et garder un petit sous-ensemble utile |
| [NIST — SSDF 1.1](https://csrc.nist.gov/pubs/sp/800/218/final)                                                                                                      | États-Unis                 | Intégrer les pratiques de développement sécurisé au cycle                                             | Publication officielle finale                         | Référentiel américain, non obligation universelle                        | Conserver comme cadre, pas attestation                                                     |
| [Google SRE — Example Error Budget Policy](https://sre.google/workbook/error-budget-policy/)                                                                        | États-Unis / international | Exemple de politique qui peut interrompre les changements                                             | Mécanisme concret et explicitement fictif             | Seuils et dates non transposables                                        | Conserver la mise en garde actuelle                                                        |
| [CNIL — AIPD](https://www.cnil.fr/fr/ce-quil-faut-savoir-sur-lanalyse-dimpact-relative-la-protection-des-donnees-aipd)                                              | France                     | Qualifier les traitements susceptibles d’engendrer un risque élevé                                    | Source publique française                             | Nécessite analyse du traitement ; pas check automatique                  | Maintenir l’aiguillage juridique et DPO                                                    |
| [Australian Government — Live stage](https://www.digital.gov.au/policy/digital-experience/toolkit/service-design-and-delivery-process/live-stage-improving-service) | Australie                  | Recherche et mesure continues, disponibilité, sécurité et maintien de l’équipe                        | Référentiel gouvernemental international              | Service public, pas SaaS commercial                                      | Confirme qu’après lancement la capacité ne devient pas 100 % features                      |
| [Government of Canada — Digital Standards](https://www.canada.ca/en/government/system/digital-government/government-canada-digital-standards.html)                  | Canada                     | Commencer petit, itérer, protéger sécurité/vie privée et responsabiliser l’équipe                     | Standard public mis à jour le 25 mai 2026             | Principes généraux                                                       | Benchmark international, sans imposer d’organisation                                       |
| [Easyweb — Budget pour faire évoluer un MVP SaaS](https://www.easyweb-agency.fr/blog/quel-budget-prevoir-pour-faire-evoluer-un-mvp-saas-apres-son-lancement)        | France                     | Met explicitement le budget et les catégories d’évolution dans l’intention                            | Concurrent français aligné sur la question économique | Agence commerciale ; montants et généralités non probants                | Faire mieux avec hypothèses, formules et sensibilités                                      |
| [Vexly — Évolution SaaS](https://www.vexly.fr/agence-evolution-saas-createurs)                                                                                      | France                     | Activation, conversion, rétention et revenu dans le discours                                          | Benchmark commercial orienté résultats                | Offre prestataire, méthode et preuves limitées                           | Traduire ces mots en un exemple calculable                                                 |
| [Coderacle — First 90 days after MVP launch](https://www.coderacle.com/blog-details/first-90-days-after-mvp-launch)                                                 | International              | Programme post-MVP très prescriptif                                                                   | Exemple clair de format concurrent                    | Seuils et délais généralisés sans base suffisante                        | Nous différencier en refusant les quotas universels                                        |
| [RadialLeaf — SaaS MVP to production roadmap](https://www.radialleaf.com/resources/blog/saas-mvp-to-production-roadmap)                                             | États-Unis                 | Authentification, facturation, onboarding, observabilité, support et release                          | Couverture technique large                            | Vendeur ; davantage pré-production que cadence après usages              | Vérifier que notre guide garde la frontière après premiers clients                         |

## 4. Matrice de gain d’information

| Question décisive                        | Meilleure réponse française               | Apport international                                      | Couverture actuelle                           | Manque                                    | Réponse supérieure à produire                                                             |
| ---------------------------------------- | ----------------------------------------- | --------------------------------------------------------- | --------------------------------------------- | ----------------------------------------- | ----------------------------------------------------------------------------------------- |
| Que faire juste après le MVP ?           | Les agences proposent roadmap et budget   | GOV.UK/Australie maintiennent une équipe de service       | Excellente mécanique                          | Capacité non répartie                     | Budget de 20/40/80 jours avec reste productif                                             |
| Un client peut-il imposer une fonction ? | Réponses commerciales qualitatives        | Produit/roadmap centré résultat                           | Bonne prudence                                | Valeur attendue et concentration absentes | Calcul probabilité de churn × contribution protégée                                       |
| Combien consacrer à la maintenance ?     | Pourcentages souvent affirmés sans preuve | Sources publiques disent financer durablement, sans quota | Refus correct de ratio universel              | Aucun exemple de budget                   | Montrer un budget explicite sans le présenter comme norme                                 |
| Comment vérifier l’effet ?               | Activation/rétention citées               | GOV.UK croise quantitatif, qualitatif et finance          | Très bonne méthode                            | Aucun calcul avant/après                  | Cohorte 40 % → 50 %, tickets 30 % → 20 %                                                  |
| Quelle fréquence de livraison ?          | Calendriers 30/60/90 jours                | DORA : petits lots, feedback, contexte                    | Bonne réponse sans seuil                      | Capacité et risque non reliés à la taille | Un lot de 24 jours face à 16 jours disponibles                                            |
| Continuer à développer ?                 | Peu de pages posent honnêtement l’arrêt   | GOV.UK accepte retrait si besoin/coût non justifié        | Présent mais bref                             | MRR, contribution et coût fixe absents    | Point économique mensuel et options prix/réduction/achat/arrêt                            |
| Construire ou acheter ?                  | Agences favorisent souvent construire     | Standards publics restent neutres sur la solution         | Option citée                                  | Pas de TCO                                | Comparer coût initial, mensuel, migration, sortie et différenciation                      |
| Quels indicateurs techniques ?           | Listes de KPI                             | DORA a cinq métriques actuelles                           | DORA bien borné                               | Aucun exemple minimal                     | Choisir 2–3 mesures liées au risque, jamais score d’équipe                                |
| Où s’arrête ce guide ?                   | Frontières rarement explicites            | —                                                         | Bonne frontière avec le guide de priorisation | Risque de doublon économique              | Ici : budget périodique et poursuite ; ailleurs : classement détaillé des fonctionnalités |

## 5. Faits et fraîcheur

| Affirmation du guide                                                            | Verdict                                                             | Source primaire actuelle                                                                                                                                                                                                                                             | Périmètre et date                                | Correction                                                               |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ | ------------------------------------------------------------------------ |
| Le travail continue après la mise en ligne                                      | Confirmé                                                            | [GOV.UK sustainable service](https://www.gov.uk/service-manual/agile-delivery/running-your-service-in-a-sustainable-way), [Australie](https://www.digital.gov.au/policy/digital-experience/toolkit/service-design-and-delivery-process/live-stage-improving-service) | Services numériques publics, sources actuelles   | Conserver et traduire en capacité financée                               |
| Les petits lots réduisent le délai de feedback et facilitent l’ajustement       | Confirmé comme pratique contextuelle                                | [DORA small batches](https://dora.dev/capabilities/working-in-small-batches/)                                                                                                                                                                                        | Mis à jour le 8 décembre 2025                    | Conserver sans taille universelle                                        |
| DORA fournit quatre métriques                                                   | Périmé si ce chiffre était ajouté ; la page actuelle ne le fait pas | [DORA metrics](https://dora.dev/guides/dora-metrics/)                                                                                                                                                                                                                | Cinq métriques dans la version du 5 janvier 2026 | Si elles sont détaillées lors de la réécriture, en compter cinq et dater |
| Les métriques DORA prouvent la valeur d’une fonction                            | Faux ; le guide ne l’affirme pas                                    | [DORA metrics](https://dora.dev/guides/dora-metrics/)                                                                                                                                                                                                                | Livraison et stabilité, pas valeur produit       | Maintenir séparation livraison / résultat                                |
| La roadmap doit exprimer direction et résultats, sans devenir une promesse fixe | Confirmé comme bonne pratique                                       | [GOV.UK roadmap](https://www.gov.uk/service-manual/agile-delivery/developing-a-roadmap)                                                                                                                                                                              | Services publics, à adapter                      | Conserver                                                                |
| L’exemple Google SRE fournit un seuil applicable                                | Faux ; le guide l’exclut explicitement                              | [Google SRE](https://sre.google/workbook/error-budget-policy/)                                                                                                                                                                                                       | Politique fictive « Example Game Service »       | Conserver l’avertissement                                                |
| NIST SSDF 1.1 est une obligation générale pour un SaaS français                 | Faux ; le guide le borne correctement                               | [NIST SSDF 1.1](https://csrc.nist.gov/pubs/sp/800/218/final)                                                                                                                                                                                                         | Référentiel américain                            | Conserver comme cadre de pratiques                                       |
| Toute modification de données impose une AIPD                                   | Faux                                                                | [CNIL AIPD](https://www.cnil.fr/fr/ce-quil-faut-savoir-sur-lanalyse-dimpact-relative-la-protection-des-donnees-aipd)                                                                                                                                                 | AIPD notamment si risque élevé selon critères    | Maintenir « à qualifier » et aiguillage compétent                        |
| Trois retours utilisateurs prouvent une fréquence                               | Faux ; le guide le refuse                                           | [GOV.UK measurement](https://www.gov.uk/service-manual/measuring-success/measuring-the-success-of-your-service)                                                                                                                                                      | Combiner plusieurs preuves                       | Conserver le cas fictif et ajouter nombres bruts/cohorte                 |
| Une hausse après livraison prouve la causalité                                  | Faux ; le guide le refuse                                           | [GOV.UK measurement](https://www.gov.uk/service-manual/measuring-success/measuring-the-success-of-your-service)                                                                                                                                                      | Observation de service                           | Conserver les facteurs extérieurs                                        |

### Contradictions

- Aucune contradiction de fond majeure n’a été trouvée.
- La revue de direction doit poser la question financière, mais le guide la renvoie presque entièrement vers un autre article. La poursuite du SaaS ne peut pourtant être décidée sans un minimum économique local.
- Le guide dit qu’un petit lot doit être soutenable, sans montrer combien de jours sont encore disponibles après support, sécurité, tests et réserve.
- Il propose une mesure avant/après rigoureuse, mais aucun exemple chiffré ne montre points de pourcentage, variation relative, volume et causalité incertaine.
- Défaut de finition dans les points clés : la carte intitulée « 6 vérifications avant mise en ligne » porte le numéro visuel `01` (`page.tsx`, lignes 442–444). Ce n’est pas une erreur de fond, mais cela nuit à la confiance dans une page consacrée au contrôle.

### Faits à retirer plutôt qu’à affaiblir

- Ne pas ajouter un ratio universel « 20 % de dette technique ».
- Ne pas imposer une cadence hebdomadaire, bimensuelle ou un plan 30/60/90 jours sans contexte.
- Ne pas utiliser les métriques DORA comme objectif de productivité ou classement des personnes.
- Ne pas conclure qu’une demande prévient un churn avec certitude.
- Ne pas additionner MRR et marge comme deux bénéfices.
- Ne pas faire d’un exemple de trois utilisateurs une preuve statistique.

## 6. Scénarios et calculs à construire

Tous les chiffres sont **illustratifs**. Ils montrent les décisions que le guide doit permettre ; ils ne prescrivent ni budget, ni tarif, ni cadence.

### Scénario 1 — Réserver la capacité avant le prochain lot

| Variable mensuelle               |  Simple |  Central | Exigeant | Source ou hypothèse              |
| -------------------------------- | ------: | -------: | -------: | -------------------------------- |
| Capacité totale                  |    20 j |     40 j |     80 j | Disponibilité réelle de l’équipe |
| Support et incidents             |     4 j |      8 j |     18 j | Historique                       |
| Sécurité et maintenance          |     3 j |      6 j |     16 j | Registre de risques/dépendances  |
| Tests, livraison et mesure       |     2 j |      4 j |      8 j | Définition de terminé            |
| Réserve explicite                |     3 j |      6 j |     12 j | Hypothèse de planification       |
| **Capacité pour lots planifiés** | **8 j** | **16 j** | **26 j** | Total moins les quatre postes    |

```text
Formule : capacité produit planifiable = capacité totale - support - maintenance/sécurité - livraison/mesure - réserve.
Horizon : mois ou cycle réel de l'équipe, revu sur 3 à 6 périodes.
Inclus : toute personne nécessaire pour concevoir, développer, tester, mettre en ligne et observer.
Exclus : disponibilité théorique des personnes non mobilisables.
Résultat central : 16 jours restent pour le produit.
Analyse de sensibilité : un incident supplémentaire de 6 jours ramène le produit à 10 jours.
Variable qui fait basculer la décision : support/incidents et taille réelle du lot.
Contrôle inverse : vérifier les jours effectivement consommés, pas seulement alloués.
```

Un lot estimé à 24 jours ne tient pas dans les 16 jours centraux. Trois décisions honnêtes :

- réduire la première hypothèse à 16 jours au maximum ;
- reporter ;
- acheter 8 jours supplémentaires. À **750 €/jour illustratifs**, le surcoût est `8 × 750 = 6 000 €`.

Il ne faut pas récupérer silencieusement ces huit jours sur la sécurité, les tests ou la réserve.

### Scénario 2 — Une demande du plus gros client

SaaS fictif :

- MRR total : **18 000 €** ;
- plus gros client : **3 000 € de MRR**, soit **16,7 %** ;
- contribution après coûts variables : **80 %** ;
- export demandé : `12 j × 750 € = 9 000 €` ;
- support supplémentaire : `200 € × 12 = 2 400 €` la première année ;
- coût total première année : **11 400 €** ;
- probabilité estimée que la fonction évite réellement le churn : **40 %**.

```text
Contribution protégée attendue = 3 000 × 80 % × 12 × 40 %
                               = 11 520 €
Valeur nette attendue = 11 520 - 11 400
                      = 120 €
Probabilité d'équilibre = 11 400 / (3 000 × 80 % × 12)
                        = 39,58 %
```

À 40 %, la décision n’a que **120 €** d’avance : elle est trop fragile pour devenir une promesse sur le seul avis du commercial. Il faut examiner adoption probable, réutilisation, stratégie, risque, alternatives et coût récurrent.

Cas opposé : la même fonction répond à des comptes totalisant 7 500 € de MRR, avec seulement 30 % de probabilité.

```text
Valeur attendue = 7 500 × 80 % × 12 × 30 % = 21 600 €
Valeur nette = 21 600 - 11 400 = 10 200 €
```

Le lot devient beaucoup plus défendable, sans être automatiquement prioritaire. Ce calcul est une aide sous incertitude, pas une preuve causale.

### Scénario 3 — Mesurer une amélioration d’onboarding

| Mesure                             | Avant | Après | Variation absolue | Variation relative |
| ---------------------------------- | ----: | ----: | ----------------: | -----------------: |
| Comptes éligibles                  |   100 |   120 |               +20 |              +20 % |
| Comptes terminant la configuration |    40 |    60 |               +20 |    +50 % en volume |
| Taux d’activation                  |  40 % |  50 % |    **+10 points** |          **+25 %** |
| Tickets onboarding                 |    30 |    24 |                -6 |    -20 % en volume |
| Taux de tickets                    |  30 % |  20 % |    **-10 points** |        **-33,3 %** |

La population après est plus grande. Dire seulement « 24 tickets contre 30 » sous-estime donc l’amélioration ; dire « la fonction a causé -33 % » la surestime si acquisition, formation ou clientèle ont changé. Le guide doit montrer les deux erreurs.

### Scénario 4 — Revue économique mensuelle

Hypothèses fictives :

- MRR : 18 000 € ;
- contribution après coûts variables : `18 000 × 80 % = 14 400 €` ;
- coûts fixes de fonctionnement, support et équipe avant nouveau développement : **16 000 €** ;
- solde avant nouveau lot : **–1 600 €/mois**.

Ce solde ne signifie pas automatiquement « arrêter » : croissance, trésorerie, stratégie et engagements comptent. Il interdit en revanche de présenter le développement suivant comme gratuit. La revue doit choisir explicitement entre :

- financer une hypothèse avec horizon et seuil d’arrêt ;
- augmenter le prix ou réduire le coût de service ;
- réduire le périmètre ;
- acheter une brique standard ;
- maintenir sans ajouter ;
- organiser le retrait.

## 7. Comparaison et position professionnelle

```text
Options réellement comparables : construire ; configurer ; documenter/former ; traiter manuellement ; acheter/intégrer ; maintenir sans ajouter ; réduire ; retirer ou arrêter.
Périmètre et horizon communs : 12 mois, mêmes utilisateurs, capacité complète, coût initial et récurrent, support, sécurité, migration, risque et sortie.
Option la moins chère : souvent documenter, configurer ou traiter manuellement pour un problème rare ; cela change avec le volume.
Option la moins risquée : petit lot réversible et mesurable quand la valeur est incertaine ; retrait planifié lorsque le service n'est plus soutenable.
Option qui demande le moins de temps interne : achat d'une brique mature peut réduire le build, mais ajoute sélection, intégration, dépendance et sortie.
Position Hagnéré Code pour le cas fréquent : protéger la capacité de service, limiter le lot à la capacité restante, écrire l'effet attendu et vérifier une cohorte avant de financer la suite.
Faits qui la fondent : budget de capacité, valeur attendue, concentration, coût complet, cohorte et risque de livraison.
Cas où l'option opposée gagne : opportunité stratégique documentée, contrainte légale qualifiée, incident critique, différenciation centrale ou fenêtre commerciale dont le coût d'attente dépasse le surcoût.
Signal de révision : support dépasse l'allocation, plus gros client dépasse le seuil de concentration choisi, lot ne tient plus, résultat absent, coût fixe dépasse la contribution, sécurité ou contrat change.
Ce que nous déconseillons même si nous pourrions le vendre : roadmap de fonctionnalités datées sans capacité, lot financé en supprimant les tests, fonction sur parole d'un seul prospect et développement quand acheter ou arrêter est plus rationnel.
```

Frontière éditoriale : le guide `prioriser-fonctionnalites-mvp-saas` doit continuer à comparer finement plusieurs fonctionnalités. Le présent guide doit montrer le **budget périodique du produit et la décision de poursuite**, puis recevoir un lot déjà choisi. Cette séparation évite deux articles jumeaux.

## 8. Objections et cas limites

| Objection loyale                                            | Réponse prouvée                                                              | Ce qui reste incertain                                   | Conséquence                                                               |
| ----------------------------------------------------------- | ---------------------------------------------------------------------------- | -------------------------------------------------------- | ------------------------------------------------------------------------- |
| « Mon plus gros client partira sans cette fonction »        | La valeur attendue peut être calculée avec contribution et probabilité       | La probabilité est souvent subjective                    | Demander engagement, alternative et réutilisation ; tester la sensibilité |
| « Réserver du temps à la maintenance ralentit les ventes »  | Les sources internationales maintiennent support et sécurité après lancement | Le bon volume dépend du produit                          | Rendre l’allocation visible et la revoir sur historique                   |
| « Il faut livrer chaque semaine »                           | DORA défend les petits lots, pas une fréquence universelle                   | Capacité et risque varient                               | Mesurer délai de feedback, pas imiter une cadence                         |
| « Trois clients demandent la même chose »                   | C’est un signal, pas une fréquence de marché                                 | Taille et représentativité inconnues                     | Conserver nombres bruts et contexte                                       |
| « Le taux d’activation a augmenté, donc le lot fonctionne » | Avant/après est utile mais causalité non prouvée                             | Mix d’acquisition et facteurs extérieurs                 | Cohorte comparable, qualitatif et limite explicite                        |
| « Acheter nous rend dépendants »                            | Vrai, mais construire crée aussi maintenance et personne clé                 | TCO et qualité de chaque solution                        | Comparer migration, sortie, données et différenciation                    |
| « Nous sommes trop petits pour les métriques DORA »         | Une instrumentation excessive peut coûter plus qu’elle n’apporte             | Le minimum dépend du risque                              | Choisir quelques signaux liés à la décision                               |
| « La sécurité doit toujours interrompre tout »              | Il faut qualifier composant, exposition, gravité et mesures                  | Une compromission active change immédiatement la réponse | Procédure spécialisée et personne compétente                              |
| « Un mois déficitaire oblige à arrêter »                    | Non ; trajectoire et trésorerie comptent                                     | La poursuite reste un choix de direction                 | Écrire l’hypothèse, le budget et le seuil d’arrêt                         |
| « Une roadmap sans date ne se vend pas »                    | Une date peut être donnée lorsqu’elle est réellement assumée                 | Certains clients exigent un engagement contractuel       | Distinguer direction, prochaine décision et engagement                    |

## 9. Plan de réécriture

| Ordre | Section proposée                    | Question résolue                               | Preuve, scénario ou outil           | Décision produite                       | À conserver / créer / couper |
| ----: | ----------------------------------- | ---------------------------------------------- | ----------------------------------- | --------------------------------------- | ---------------------------- |
|     1 | Verdict en 150 mots                 | Où va la capacité après le MVP ?               | Position « service avant features » | Refuser la liste unique                 | Renforcer                    |
|     2 | Trois demandes dans la même semaine | Qu’est-ce qui interrompt quoi ?                | Scène actuelle                      | Séparer les sujets                      | Conserver                    |
|     3 | Quatre décisions                    | Qui décide de quoi ?                           | Cartes actuelles                    | Attribuer responsables                  | Conserver                    |
|     4 | Budget de 40 jours                  | Que reste-t-il pour le produit ?               | Scénarios 20/40/80 jours            | Fixer la capacité planifiable           | Créer                        |
|     5 | Règle d’interruption                | Quand arrêter le lot ?                         | Modèle actuel + Google SRE borné    | Protéger le service                     | Conserver                    |
|     6 | Fiche de signal                     | Que prouve une demande ?                       | Modèle actuel                       | Apprendre sans promettre                | Conserver                    |
|     7 | Demande du gros client              | La valeur justifie-t-elle le coût ?            | 11 520 € contre 11 400 €            | Tester la robustesse                    | Créer                        |
|     8 | Petit lot soutenable                | Le lot tient-il dans 16 jours ?                | Cas 24 jours / surcoût 6 000 €      | Réduire, acheter ou reporter            | Renforcer                    |
|     9 | Six contrôles de mise en ligne      | Peut-on livrer ?                               | Tests, détection, support, retour   | Autoriser ou reporter                   | Conserver ; corriger `01`    |
|    10 | Cohorte avant/après                 | Qu’a changé le lot ?                           | 40 % → 50 %, tickets 30 % → 20 %    | Poursuivre, corriger ou retirer         | Créer                        |
|    11 | Roadmap et promesses                | Que communiquer ?                              | GOV.UK roadmap                      | Direction sans fausse date              | Conserver                    |
|    12 | Revue économique                    | Peut-on financer la suite ?                    | –1 600 €/mois + sensibilité         | Construire, tarifer, réduire ou arrêter | Créer                        |
|    13 | Construire, acheter ou ne pas coder | Quelle solution complète gagne ?               | TCO sur 12 mois                     | Choisir la nature de la réponse         | Renforcer                    |
|    14 | Calendrier téléchargeable           | Quelles sont les quatre prochaines décisions ? | Outil actuel enrichi capacité/coût  | Mettre en œuvre                         | Conserver et enrichir        |
|    15 | Position et CTA                     | Dans quel cas nous appeler ?                   | Données minimales du diagnostic     | Arriver avec faits et budget            | Renforcer                    |

### Contrat des 150 premiers mots

- Partir de la semaine actuelle : client bloqué, commercial pressant et alerte de sécurité.
- Dire notre avis : aucun nouveau lot avant d’avoir financé le service, la sécurité, la livraison, la mesure et une réserve.
- Annoncer un exemple de 40 jours, une demande de gros client, une cohorte avant/après et une revue économique.
- Préciser qu’il n’existe ni ratio de maintenance, ni cadence universelle.
- Donner le résultat : quatre prochaines décisions avec responsable, capacité, preuve, coût et date de réexamen.

### Éléments à supprimer

- Aucun grand bloc de fond.
- Réduire quelques répétitions de « pas de cadence universelle » après l’avoir démontré.
- Ne pas importer dans ce guide toute la matrice de priorisation des fonctionnalités.
- Ne pas ajouter des indicateurs SaaS en catalogue sans décision associée.

### Éléments à conserver

- La scène d’ouverture.
- Les quatre flux de décision.
- La règle d’interruption.
- La fiche de signal.
- Le refus d’une demande transformée automatiquement en fonctionnalité.
- Les petits lots sans taille universelle.
- Les six vérifications de mise en ligne.
- Le contrôle données personnelles et la réserve juridique.
- La fiche avant/attendu/après/décision.
- La roadmap comme direction.
- Le cas fictif d’onboarding.
- Les cinq cartes de calendrier.
- Les réponses sans code.
- La possibilité de réduire ou arrêter.
- Le CTA honnête.

## 10. Contre-audit après correction

La page n’a pas été modifiée dans ce lot. Aucun score après correction n’est attribué.

| Problème                                    | Priorité | Correction appliquée      | Revalidation indépendante                                    |
| ------------------------------------------- | -------- | ------------------------- | ------------------------------------------------------------ |
| Capacité entièrement non chiffrée           | P0       | Non appliquée dans ce lot | Refaire trois allocations et scénario incident               |
| Aucune valeur attendue d’une demande client | P0       | Non appliquée dans ce lot | Refaire coût, contribution, probabilité et seuil             |
| Avant/après non calculé                     | P0       | Non appliquée dans ce lot | Contrôler dénominateurs, points et variations relatives      |
| Revue financière trop externalisée          | P1       | Non appliquée dans ce lot | Vérifier contribution, coûts, trésorerie et portes de sortie |
| Construire/acheter/arrêter non comparés     | P1       | Non appliquée dans ce lot | Même horizon, TCO, risque et sortie                          |
| Carte clé « 01 / 6 vérifications »          | P2       | Non appliquée dans ce lot | Contrôle visuel après correction                             |

### Score après correction

| Axe         | Note /10 | Preuve localisable      | Manque résiduel  |
| ----------- | -------: | ----------------------- | ---------------- |
| Intention   |      N/A | Réécriture non réalisée | À contre-auditer |
| Décision    |      N/A | Réécriture non réalisée | À contre-auditer |
| Pédagogie   |      N/A | Réécriture non réalisée | À contre-auditer |
| Profondeur  |      N/A | Réécriture non réalisée | À contre-auditer |
| Preuve      |      N/A | Réécriture non réalisée | À contre-auditer |
| Comparaison |      N/A | Réécriture non réalisée | À contre-auditer |
| Originalité |      N/A | Réécriture non réalisée | À contre-auditer |
| Style       |      N/A | Réécriture non réalisée | À contre-auditer |
| Conversion  |      N/A | Réécriture non réalisée | À contre-auditer |
| SEO/produit |      N/A | Réécriture non réalisée | À contre-auditer |

Total : **non attribué**

Critère d’acceptation futur : **au moins 90/100, aucun axe sous 8/10**, calculs refaits indépendamment, frontière éditoriale avec le guide de priorisation vérifiée, sources primaires rouvertes et rendu mobile réellement contrôlé.

## 11. Preuves techniques et visuelles

```text
Manifeste : page et dossier de recherche relus ; snapshot SHA-256 consigné en tête.
Calculs refaits : oui, via un script Node indépendant le 24 juillet 2026.
Sources rouvertes : GOV.UK, DORA, NIST, Google SRE, CNIL, gouvernements australien et canadien, puis benchmarks français et internationaux.
Liens vérifiés : ouverture web effectuée le 24 juillet 2026 ; métriques, standards et règles de confidentialité doivent être redatés lors de la réécriture.
Commandes : shasum -a 256 ; rg ; calculs Node de capacité, valeur attendue, probabilité d'équilibre, cohorte et contribution.
Rendu 320 / 390 / 768 / 1024 / 1440 : non exécuté, car aucune page publique n'a été modifiée.
Image sociale : non auditée dans ce lot éditorial.
Statut maximal prouvé : audit éditorial complet et plan de réécriture, pas correction publique, conseil financier, juridique ou cybersécurité.
Réserve publication / indexation : aucune preuve de déploiement ou d'indexation n'est produite par cet audit.
```
