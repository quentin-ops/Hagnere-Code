# Audit approfondi — `tma-ou-regie`

Date : 24 juillet 2026

Auditeur concurrentiel : Codex, lot benchmark France et international

Snapshot du guide : `src/app/guides/tma-ou-regie/page.tsx`, SHA-256 `ad92092d91797b84c085eae57838a2646f98307990afcfc30206ff97fe8a5528`

Périmètre : audit éditorial et décisionnel uniquement. Aucune modification de la page publique n’a été réalisée dans ce lot.

## 1. Verdict exécutif

```text
Lecteur exact : dirigeant ou responsable métier qui reçoit des bugs et des évolutions sur une application et doit choisir comment acheter la maintenance.
Question réelle : dois-je payer un forfait, des jours réellement consommés, une capacité réservée ou un mélange, et quel modèle coûtera réellement le moins cher sans abandonner la continuité ?
Décision attendue : séparer le service attendu de son mode de prix, comparer les options sur le même historique et intégrer le temps de gouvernance, l'indisponibilité, les accès et la sortie.
Réponse actuelle en une phrase : TMA et régie ne sont pas des options opposées ; il faut d'abord nommer continuité, diagnostic et livraison, puis choisir capacité, temps, lot ou hybride.
Défaut qui coûte le plus de valeur : le guide corrige parfaitement le faux choix lexical, mais ne chiffre aucun modèle sur douze mois et n'intègre pas le coût du pilotage interne ou d'une panne.
Niveau actuel : B
Priorité : haute
Statut : audité / à réécrire
```

La clarification centrale est excellente : la TMA décrit un service confié à un tiers, tandis que la régie désigne couramment une façon d’acheter du temps. Cette distinction évite un grand nombre de mauvais appels d’offres. Le tri des demandes, les contrôles communs, les règles d’accès et la comparaison sur l’historique sont également robustes.

Mais un dirigeant ne vient pas seulement chercher le bon vocabulaire. Il veut savoir :

- ce que coûterait le même flux en temps passé, capacité réservée, hybride ou service managé ;
- à partir de combien de jours ou d’heures de gouvernance le verdict change ;
- ce que vaut une couverture renforcée lorsque l’application tombe ;
- quand ne rien contractualiser, internaliser, remplacer ou arrêter l’application ;
- ce qui doit être plafonné, accepté, reporté ou rendu réversible.

La position professionnelle à publier :

> Pour un flux mêlant petites corrections prévisibles et évolutions irrégulières, notre point de départ serait souvent hybride : une petite capacité pour la continuité, puis des lots bornés pour les changements importants. Mais ce n’est pas une règle commerciale. Avec peu de demandes et un responsable interne disponible, le temps passé peut coûter moins cher ; avec une application critique et une vraie couverture, un dispositif managé peut réduire davantage le risque.

### Score avant correction

| Axe         | Note /10 | Preuve localisable                                          | Manque décisif                                                                                      |
| ----------- | -------: | ----------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| Intention   |        9 | L’ouverture part des offres réellement reçues               | Le coût total de la décision n’est pas annoncé                                                      |
| Décision    |        8 | Quatre modèles et tri de trois mois                         | Aucun seuil de bascule chiffré                                                                      |
| Pédagogie   |        9 | Service acheté et mode de prix sont séparés simplement      | Le vocabulaire n’aboutit pas à une facture annuelle comparée                                        |
| Profondeur  |        7 | Flux, responsabilités, accès, preuve, acceptation et sortie | Internalisation, absence de contrat, remplacement, disponibilité et gouvernance économique manquent |
| Preuve      |        8 | Légifrance, Cigref–Syntec et CNIL correctement bornés       | Référence historique de 2004 et absence de benchmark contractuel international actuel               |
| Comparaison |        5 | Capacité, temps, lot et hybride sont décrits                | Aucun horizon, volume, coût interne, plafond ou sensibilité communs                                 |
| Originalité |        8 | Le faux duel TMA/régie est déconstruit de façon utile       | Pas de calculateur TCO ni de frontière économique                                                   |
| Style       |        8 | Ton clair, concret, sans jargon inutile                     | Quelques précautions remplacent un avis professionnel tranché                                       |
| Conversion  |        8 | CTA centré sur le cadrage du flux                           | Aucun diagnostic financier à emporter en rendez-vous                                                |
| SEO/produit |        6 | Intention, FAQ, maillage et données structurées solides     | Sujet économique central et actif téléchargeable absents                                            |

Total : **76/100**

## 2. Ce que le guide dit réellement

- **Réponse dans les 150 premiers mots :** très bonne. TMA, forfait et régie ne sont pas trois produits exclusifs ; il faut séparer le service et sa facturation.
- **Progression :** définitions, trois besoins, historique, quatre modèles, exemple de reclassement, contrôles communs, comparaison, décision de signer ou attendre, accompagnement.
- **Verdict :** capacité pour le récurrent, temps piloté pour l’incertain, lot borné pour le livrable vérifiable, combinaison lorsque le flux est mixte.
- **Exemples :** quatre demandes concrètes sont classées. C’est pédagogique, mais aucun exemple n’est facturé sur un an.
- **Calculs présents :** aucun prix, coût interne, plafond, jour non consommé, seuil de bascule ou coût d’incident.
- **Comparaisons présentes :** les modèles sont distingués qualitativement sur fréquence, clarté et acceptation. Ils ne sont pas ramenés au même historique.
- **Sources :** article 38 du CCAG-TIC, charte Cigref–Syntec de 2004 et recommandations CNIL sur maintenance et sous-traitance.
- **Bon fit :** application déjà en service, demandes récurrentes, propriétaire métier identifié et historique exploitable.
- **Mauvais fit à renforcer :** application en fin de vie, absence totale de documentation, incident cyber actif, besoin assimilable à un projet de refonte, flux trop faible pour une capacité réservée.
- **CTA :** honnête et bien aligné avec le cadrage.
- **Élément faussement complet :** le lecteur peut classer ses demandes, mais ne sait toujours pas quelle offre gagne financièrement avec ses volumes.

## 3. Benchmark France et international

Requêtes, pays, langues et date :

- France, français : « TMA ou régie », « maintenance applicative forfait régie tickets », « contrat maintenance application capacité jours » ;
- Royaume-Uni, anglais : « time and materials managed service fixed price contract software maintenance » ;
- Canada, anglais et français : « fixed time rate ceiling professional services contract » ;
- États-Unis, anglais : « staff augmentation vs managed services vs project based support » ;
- recherche et réouverture des sources le 24 juillet 2026.

### Saturation

Les résultats français saturent rapidement : forfait pour le prévisible, régie pour le variable, tickets pour les petites demandes, comité de pilotage et réversibilité. Les comparatifs internationaux ajoutent généralement « qui pilote ? », « paie-t-on un résultat ou des moyens ? » et « staff augmentation ou managed service ? ».

Les guides officiels britanniques et canadiens apportent davantage : prix ferme, prix unitaire, temps et moyens, volume, coût cible, plafond de dépense, jalons et contrôle. Ils concernent des marchés publics et ne doivent pas être copiés dans un contrat privé de PME, mais ils révèlent ce qui manque à la concurrence commerciale.

La saturation est atteinte lorsque les nouvelles pages répètent les mêmes matrices sans fournir de chiffres vérifiables. Le gain décisif reste :

- un même historique de 90 jours sur douze mois ;
- le coût du temps interne de priorisation et d’acceptation ;
- un plafond et une règle d’arrêt ;
- le dommage d’indisponibilité ;
- les options « sans contrat », interne, remplacement ou retrait.

| Ressource et URL directe                                                                                                                                                                 | Pays          | Réponse utile                                                                                              | Preuve, outil ou exemple                                                      | Limite                                                                                  | Apport à vérifier ou adapter                                                   |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | ---------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| [Légifrance — CCAG-TIC, article 38](https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000043310752)                                                                                 | France        | Distingue maintenance préventive, corrective, évolutive et adaptative dans son cadre                       | Texte primaire de commande publique                                           | Ne s’applique que si le marché le rend contractuel ; ne fixe pas le meilleur prix privé | Conserver comme vocabulaire borné, pas comme norme universelle                 |
| [Cigref–Syntec — Charte infogérance et TMA](https://www.cigref.fr/cigref_publications/RapportsContainer/Parus2004/2004_-_Charte_CIGREF_Syntec_informatique_-_infogerance_et_TMA_web.pdf) | France        | Historique de la relation et de la prise en charge par un tiers                                            | Repère professionnel                                                          | Publication de 2004, technologie et pratiques contractuelles anciennes                  | Garder comme histoire du terme seulement                                       |
| [CNIL — Encadrer la maintenance et la fin de vie](https://www.cnil.fr/fr/securite-encadrer-la-maintenance-et-la-fin-de-vie-des-materiels-et-logiciels)                                   | France        | Journaliser, limiter dans le temps les accès et les fermer après intervention                              | Recommandations publiques du 14 mars 2024                                     | Ne définit pas un modèle de prix                                                        | Renforcer contrôle des accès dans tous les modèles                             |
| [CNIL — Gérer la sous-traitance](https://www.cnil.fr/fr/securite-gerer-la-sous-traitance)                                                                                                | France        | Objet, durée, finalité, sécurité, authentification, incident, retour/destruction et audit                  | Référentiel public                                                            | Le rôle RGPD dépend du traitement et du contrat                                         | Ajouter une porte « données personnelles » et conseil spécialisé si nécessaire |
| [UK Government — Model Services Contract Guidance](https://assets.publishing.service.gov.uk/media/64c8fb825c2e6f000de8d880/Model_Services_Contract_v2.1_-_Guidance__E_W_.pdf)            | Royaume-Uni   | Temps et moyens lorsque le périmètre est incertain, jalons, prix ferme, volume, coût cible et prix maximal | Guide officiel ; document affichant une version mise à jour en septembre 2025 | Commande publique britannique, document long et non transposable tel quel               | Adapter plafond, jalons, audit et allocation du risque                         |
| [CanadaBuys — Supply Manual, chapitre 4 archivé](https://canadabuys.canada.ca/en/supply-manual/chapter-4)                                                                                | Canada        | Taux ferme lorsque l’effort ne peut être estimé, avec contrôles et plafond ou limite de dépenses           | Source publique de passation                                                  | Chapitre archivé et contexte fédéral canadien                                           | Retenir la logique de plafond et de preuve, pas le modèle juridique            |
| [HubSpot France — Tierce maintenance applicative](https://blog.hubspot.fr/service/tierce-maintenance-applicative)                                                                        | France        | Vue large des modèles forfait, régie et tickets                                                            | Benchmark éditorial français visible                                          | Source commerciale ; certaines affirmations contractuelles sont trop générales          | Identifier les attentes de la SERP et corriger les généralisations             |
| [Isatech — Support et TMA](https://www.isatech.fr/support-et-tma/)                                                                                                                       | France        | Régie forfaitisée, forfait, tickets et gouvernance                                                         | Offre concrète d’un prestataire                                               | Périmètre et intérêt commercial propres                                                 | Comparer la lisibilité commerciale, pas inférer un prix de marché              |
| [ETC Soft — Maintenance applicative](https://etcsoft.fr/maintenance-applicative/)                                                                                                        | France        | Forfait/régie et transition/réversibilité                                                                  | Benchmark de vendeur                                                          | Matrice binaire et non chiffrée                                                         | Rendre notre éventail d’options plus complet                                   |
| [Second Talent — Staff augmentation vs managed services vs project based](https://www.secondtalent.com/it-staffing/staff-augmentation-vs-managed-services-vs-project-based/)             | États-Unis    | Qui manage, qui porte le résultat et comment la facturation varie                                          | Comparatif international utile                                                | Fournisseur de staffing ; catégories et conclusions simplifiées                         | Ajouter explicitement le coût de management côté client                        |
| [AALogics — Outsource development contracts](https://www.aalogics.com/comparison-of-outsource-development-contracts)                                                                     | International | Matrice temps, équipe, managed service et projet                                                           | Autre formulation des options                                                 | Agence, affirmations non normatives                                                     | Vérifier la saturation ; ne pas reprendre ses tarifs ou absolus                |

## 4. Matrice de gain d’information

| Question décisive                     | Meilleure réponse française                                   | Apport international                                  | Couverture actuelle | Manque                                                | Réponse supérieure à produire                                      |
| ------------------------------------- | ------------------------------------------------------------- | ----------------------------------------------------- | ------------------- | ----------------------------------------------------- | ------------------------------------------------------------------ |
| TMA et régie s’opposent-elles ?       | Les sources françaises les rapprochent souvent sans précision | Les comparatifs distinguent service, prix et contrôle | Excellente          | Rien de majeur                                        | Conserver la distinction comme thèse centrale                      |
| Que paie-t-on réellement ?            | Forfait, jour, ticket, capacité                               | Prix ferme, volume, coût cible, maximum               | Bonne typologie     | Conditions de consommation et plafond peu économiques | Une fiche standard : unité, inclus, exclu, plafond, preuve, sortie |
| Quel modèle coûte le moins ?          | Réponse généralement « cela dépend »                          | Guides officiels imposent contrôle et horizon         | Absent              | Aucun TCO commun                                      | Comparaison de 90 jours annualisés + temps interne                 |
| Qui pilote ?                          | Comité ou responsable évoqué                                  | Staff augmentation explicite le management client     | Bon sur les rôles   | Temps interne non valorisé                            | Convertir heures de tri, briefing et recette en coût               |
| Que vaut la disponibilité ?           | Souvent vendue avec le forfait                                | Managed service distingue couverture et moyens        | Peu traité ici      | Coût de panne et heures couvertes                     | Trois scénarios d’indisponibilité                                  |
| Quand ne pas signer ?                 | Rare dans les pages commerciales                              | Build/buy/retire élargit la décision                  | Attendre est évoqué | Interne, remplacement et retrait absents              | Arbre contrat / interne / refonte / retrait                        |
| Comment éviter le compteur ouvert ?   | Tickets et devis                                              | Plafond, jalon, limite de dépenses                    | Contrôles présents  | Aucun seuil numérique                                 | Budget plafond, alerte 70/90 %, arrêt et autorisation              |
| Comment sécuriser données et sortie ? | CNIL et réversibilité                                         | Audit et responsabilités contractuelles               | Bon                 | Cas de données personnelles à qualifier               | Checklist séparée, revue juridique si nécessaire                   |

## 5. Faits et fraîcheur

| Affirmation du guide                                                            | Verdict                                 | Source primaire actuelle                                                                                                                                                                                        | Périmètre et date                                           | Correction                                                                  |
| ------------------------------------------------------------------------------- | --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- | --------------------------------------------------------------------------- |
| La TMA peut inclure maintenance corrective, préventive, évolutive ou adaptative | Confirmé dans un cadre défini           | [CCAG-TIC, art. 38](https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000043310752)                                                                                                                        | Commande publique française lorsque le CCAG est contractuel | Présenter comme taxonomie utile, pas définition obligatoire de tout contrat |
| La TMA impose nécessairement un forfait                                         | Faux ; le guide le corrige              | Aucune source primaire n’impose ce mode ; les guides publics distinguent plusieurs prix                                                                                                                         | Le contrat fait foi selon son périmètre                     | Conserver le refus catégorique                                              |
| La régie signifie l’absence de tout engagement                                  | Faux ; le guide le corrige              | [UK Guidance](https://assets.publishing.service.gov.uk/media/64c8fb825c2e6f000de8d880/Model_Services_Contract_v2.1_-_Guidance__E_W_.pdf), [CanadaBuys](https://canadabuys.canada.ca/en/supply-manual/chapter-4) | Modèles publics internationaux, principes à adapter         | Montrer plafond, reporting, jalons et acceptation possibles                 |
| Un accès de maintenance permanent et très large est pratique                    | Déconseillé                             | [CNIL maintenance](https://www.cnil.fr/fr/securite-encadrer-la-maintenance-et-la-fin-de-vie-des-materiels-et-logiciels)                                                                                         | Sécurité de la maintenance, 2024                            | Conserver accès nominatif, limité, journalisé et fermé                      |
| Un contrat avec sous-traitant doit préciser sécurité et responsabilités         | Confirmé selon les rôles et traitements | [CNIL sous-traitance](https://www.cnil.fr/fr/securite-gerer-la-sous-traitance)                                                                                                                                  | Données personnelles                                        | Ajouter l’aiguillage vers DPO/juriste, sans avis individualisé              |
| Une capacité réservée garantit une couverture de service                        | Faux si ajouté                          | Couverture, horaires et engagements doivent être écrits séparément                                                                                                                                              | Contrat propre                                              | Distinguer jours disponibles, délai de prise en charge et rétablissement    |
| Le forfait est toujours moins cher pour un flux stable                          | Invérifiable                            | Aucun tarif universel                                                                                                                                                                                           | Dépend du risque, volume, inclusions et gouvernance         | Remplacer par calcul sur historique                                         |
| La régie transfère tout le risque au client                                     | À nuancer                               | Les contrôles, plafonds et jalons modifient l’allocation du risque                                                                                                                                              | Contrat et organisation                                     | Décrire les risques précis, pas un absolu                                   |

### Contradictions

- Aucune contradiction majeure n’a été trouvée dans la version auditée.
- Le guide demande de comparer les offres sur le même historique, mais ne montre jamais ce comparatif. L’instruction la plus décisive n’est pas démontrée.
- Il affirme à juste titre que les mêmes contrôles doivent exister dans chaque modèle. Sans coût du contrôle interne, les options restent pourtant artificiellement équivalentes.
- La frontière entre capacité réservée et couverture de service doit rester explicite : acheter huit jours par mois ne signifie ni disponibilité immédiate, ni astreinte, ni délai de rétablissement.

### Faits à retirer plutôt qu’à affaiblir

- Ne pas publier de tarif journalier présenté comme « marché » sans source, date, profil, localisation et périmètre.
- Ne pas écrire qu’un forfait transfère automatiquement le risque ou qu’une régie n’engage que le client.
- Ne pas utiliser la charte Cigref–Syntec de 2004 comme preuve d’une pratique actuelle.
- Ne pas copier un contrat de marché public britannique ou canadien dans une relation privée française.
- Ne pas promettre conformité RGPD ou sécurité par la seule présence d’une clause.

## 6. Scénarios et calculs à construire

Tous les prix et volumes ci-dessous sont **fictifs**. Ils servent à montrer une méthode de comparaison, pas un tarif Hagnéré Code ni un benchmark de marché. Les offres réelles doivent être comparées avec les mêmes inclusions, horaires, compétences et règles de report.

### Scénario 1 — Même flux, quatre modes, douze mois

Historique central annualisé :

- 48 jours de travaux récurrents ;
- 18 jours de diagnostic irrégulier ;
- 24 jours d’évolutions bornées ;
- soit **90 jours** au total ;
- temps interne chargé : **60 €/h**.

| Option annuelle   |                            Prestataire |                 Pilotage interne | Total illustratif | Lecture                                                              |
| ----------------- | -------------------------------------: | -------------------------------: | ----------------: | -------------------------------------------------------------------- |
| Temps passé       |                90 j × 800 € = 72 000 € |  5 h/sem. × 52 × 60 € = 15 600 € |      **87 600 €** | Prix externe faible, pilotage client élevé                           |
| Capacité 8 j/mois |                12 × 6 000 € = 72 000 € |   3 h/sem. × 52 × 60 € = 9 360 € |      **81 360 €** | 96 jours achetés, 6 jours non utilisés si aucun report               |
| Hybride           | 12 × 3 200 € + 42 j × 850 € = 74 100 € |   2 h/sem. × 52 × 60 € = 6 240 € |      **80 340 €** | 48 jours récurrents + 42 jours variables                             |
| Service managé    |                12 × 7 000 € = 84 000 € | 1,5 h/sem. × 52 × 60 € = 4 680 € |      **88 680 €** | N’a de sens que si couverture et résultat sont réellement supérieurs |

```text
Formule : TCO = prestataire + temps interne + onboarding + outils + exposition résiduelle + sortie.
Horizon : 12 mois, à partir d'au moins 3 mois de demandes classées.
Inclus : même application, 90 jours, gouvernance valorisée.
Exclus : TVA, infrastructure, astreinte, reprise initiale, incident et réversibilité faute d'offres réelles.
Résultat : l'hybride gagne de 1 020 € seulement sur la capacité ; l'écart est trop faible pour conclure sans sensibilité.
Analyse de sensibilité : jours variables, temps interne, report des jours, seniorité et couverture.
Variable qui fait basculer la décision : volume variable et coût de gouvernance.
Contrôle inverse : refaire le calcul avec zéro jour perdu en capacité et deux heures de pilotage seulement en temps passé.
```

Seuil hybride contre capacité :

```text
Jours variables d'équilibre = (81 360 - 38 400 - 6 240) / 850
                            = 43,2 jours
```

Le cas central contient 42 jours variables : l’hybride n’est donc pas un vainqueur robuste. Une variation de deux jours ou du report contractuel renverse le verdict.

Seuil de gouvernance du temps passé contre l’hybride :

```text
Heures par semaine = (80 340 - 72 000) / (52 × 60)
                   = 2,67 h/semaine
```

Si le client pilote correctement en moins de 2 h 40 par semaine, le temps passé devient moins cher dans ce scénario.

### Scénario 2 — Valoriser une heure d’indisponibilité

| Variable                               |    Simple |     Central |     Exigeant | Source ou hypothèse                      |
| -------------------------------------- | --------: | ----------: | -----------: | ---------------------------------------- |
| Personnes bloquées                     |         5 |          15 |           50 | Analyse d’impact                         |
| Coût chargé horaire                    |      35 € |        45 € |         55 € | Données de l’entreprise                  |
| Durée                                  |       2 h |         4 h |          8 h | Historique ou exercice                   |
| Part du temps réellement perdue        |      50 % |        60 % |         70 % | Mode dégradé                             |
| Contribution commerciale non récupérée |       0 € |     2 000 € |     20 000 € | Marge, pas chiffre d’affaires brut       |
| Impact illustratif                     | **175 €** | **3 620 €** | **35 400 €** | Temps perdu + contribution non récupérée |

```text
Impact central = 15 × 45 € × 4 h × 60 % + 2 000 € = 3 620 €
```

Une couverture premium de 12 000 € par an ne se justifie pas dans le cas simple. Elle peut devenir rationnelle dans le cas exigeant si elle réduit réellement fréquence ou durée, ce qu’un test et un historique doivent prouver.

### Scénario 3 — Comparer toutes les portes

Le calculateur doit forcer sept lignes, y compris celles qu’une agence vend moins facilement :

1. pas de contrat, intervention au besoin ;
2. compétence interne ou recrutement ;
3. temps passé plafonné ;
4. capacité réservée ;
5. lot au prix borné ;
6. hybride ou service managé ;
7. remplacement ou retrait de l’application.

Pour chaque ligne : coût annuel, délai d’accès à la compétence, temps interne, couverture, risque de sous-consommation, preuve de résultat, coût de sortie et exposition résiduelle.

## 7. Comparaison et position professionnelle

```text
Options réellement comparables : intervention au besoin ; interne ; temps passé plafonné ; capacité réservée ; lot borné ; hybride ; service managé ; remplacement ou retrait.
Périmètre et horizon communs : même application, mêmes 90 jours de charge, compétences, horaires, outillage, reprise, gouvernance, risques et 12 mois.
Option la moins chère : dans le scénario central, l'hybride à 80 340 €, mais l'avantage de 1 020 € sur la capacité n'est pas robuste.
Option la moins risquée : service réellement couvert et testé pour une application critique ; lot borné pour une évolution acceptée ; cela dépend du risque considéré.
Option qui demande le moins de temps interne : service managé dans l'hypothèse, sans supprimer validation métier et responsabilités client.
Position Hagnéré Code pour le cas fréquent : petite capacité pour continuité prévisible, lots bornés pour évolutions significatives, plafond pour l'incertain, après observation du flux.
Faits qui la fondent : charge classée, coût de gouvernance, règles d'accès, acceptation et seuils calculés.
Cas où l'option opposée gagne : faible charge et product owner fort pour le temps passé ; demande très régulière avec report pour la capacité ; criticité forte et couverture prouvée pour le managé.
Signal de révision : plus de 15 % de capacité perdue, dépassements répétés, incidents hors couverture, plus de 3 h de pilotage hebdomadaire, fin de support ou coût annuel approchant une refonte.
Ce que nous déconseillons même si nous pourrions le vendre : abonnement mensuel sans historique, jours sans règle de report, régie sans plafond, forfait sans acceptation et couverture confondue avec capacité.
```

## 8. Objections et cas limites

| Objection loyale                                           | Réponse prouvée                                                             | Ce qui reste incertain                                             | Conséquence                                          |
| ---------------------------------------------------------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------ | ---------------------------------------------------- |
| « Le forfait me protège de tout dépassement »              | Seulement si le périmètre, les hypothèses et changements sont bornés        | Les exclusions et demandes hors périmètre peuvent déplacer le coût | Lire mécanisme de changement et acceptation          |
| « La régie est forcément un chèque en blanc »              | Plafond, jalons, reporting et autorisation peuvent l’encadrer               | La qualité du pilotage reste déterminante                          | Fixer alertes 70/90 % et arrêt                       |
| « Huit jours par mois garantissent une réponse immédiate » | Capacité et couverture sont deux objets différents                          | Planning et astreinte dépendent du contrat                         | Écrire heures, priorité et délai séparément          |
| « Nous n’avons pas assez d’historique »                    | L’incertitude rend un gros abonnement difficile à justifier                 | Une application critique peut exiger une couverture dès le départ  | Audit court, enveloppe plafonnée et revue rapprochée |
| « Notre développeur interne suffit »                       | L’interne peut être le meilleur choix                                       | Congés, spécialités, documentation et continuité sont à tester     | Comparer coût chargé et risque de personne clé       |
| « Le service managé transfère toute la responsabilité »    | Le client conserve priorités, accès, données et validation selon le contrat | Responsabilités exactes propres au cas                             | Matrice RACI et revue juridique                      |
| « L’application est trop ancienne pour être estimée »      | Cela justifie diagnostic et plafond, pas dépense illimitée                  | La reprise peut révéler une refonte                                | Porte de sortie après audit                          |
| « Le moins cher est de ne rien signer »                    | Vrai pour un flux faible et contournable                                    | Un incident rare peut être très coûteux                            | Chiffrer l’exposition et tester le mode dégradé      |
| « Les données sont chez le prestataire »                   | La CNIL demande encadrement et sécurité selon les rôles                     | Le régime exact dépend du traitement                               | DPO/juriste et clauses adaptées                      |

## 9. Plan de réécriture

| Ordre | Section proposée                  | Question résolue                          | Preuve, scénario ou outil                 | Décision produite               | À conserver / créer / couper |
| ----: | --------------------------------- | ----------------------------------------- | ----------------------------------------- | ------------------------------- | ---------------------------- |
|     1 | Verdict en 150 mots               | Forfait ou jours ?                        | Position conditionnelle et calcul annoncé | Refuser le faux duel            | Conserver et renforcer       |
|     2 | Deux questions différentes        | Qu’achète-t-on et comment paie-t-on ?     | TMA vs prix                               | Reclasser l’offre               | Conserver                    |
|     3 | Continuité, diagnostic, livraison | Quel service est nécessaire ?             | Trois besoins actuels                     | Délimiter le contrat            | Conserver                    |
|     4 | Sept options, dont ne rien signer | Quelles alternatives existent ?           | Arbre complet                             | Élargir la décision             | Créer                        |
|     5 | Votre historique de trois mois    | Quel flux doit être acheté ?              | Grille actuelle                           | Quantifier jours et variabilité | Conserver                    |
|     6 | Même flux sur douze mois          | Quel modèle coûte le moins ?              | TCO à 80 340–88 680 €                     | Comparer les devis              | Créer                        |
|     7 | Seuils de bascule                 | Quand le verdict change-t-il ?            | 43,2 jours et 2,67 h/sem.                 | Tester la robustesse            | Créer                        |
|     8 | Coût d’une panne                  | Quelle couverture vaut son prix ?         | 175 / 3 620 / 35 400 €                    | Acheter ou refuser le premium   | Créer                        |
|     9 | Quatre demandes reclassées        | Comment traiter les cas concrets ?        | Exemple actuel                            | Affecter capacité, temps ou lot | Conserver                    |
|    10 | Contrôles communs                 | Comment éviter compteur et faux forfait ? | Plafond, acceptation, report, reporting   | Négocier                        | Renforcer                    |
|    11 | Accès, données et sortie          | Comment protéger l’entreprise ?           | CNIL et réversibilité                     | Faire qualifier le contrat      | Conserver et approfondir     |
|    12 | Position Hagnéré Code             | Que recommandons-nous vraiment ?          | Cas fréquent et cas inverse               | Choisir conditionnellement      | Créer                        |
|    13 | Calculateur et CTA                | Qu’apporter au rendez-vous ?              | CSV/TCO + historique                      | Demander un devis comparable    | Transformer                  |

### Contrat des 150 premiers mots

- Partir de la question du dirigeant : « forfait mensuel ou jours consommés ? ».
- Répondre immédiatement que TMA et régie ne sont pas des opposés.
- Donner notre préférence conditionnelle : hybride pour un flux mixte, temps passé si faible charge et bon pilotage, managé si criticité et couverture prouvées.
- Annoncer le comparatif sur douze mois, le coût d’une panne et les seuils qui renversent le verdict.
- Ne pas introduire CCAG, RACI, SLA ou RGPD avant les mots ordinaires « bugs, jours, facture, délai, responsable ».

### Éléments à supprimer

- Aucun bloc majeur.
- Réduire les répétitions du faux duel une fois la distinction comprise.
- Ne pas ajouter une grille tarifaire présentée comme vérité de marché.
- Ne pas laisser le lecteur croire que « jours réservés » signifie « support couvert ».

### Éléments à conserver

- La distinction service / mode de facturation.
- Continuité, diagnostic et livraison.
- Le tri sur trois mois.
- Les quatre modèles actuels.
- Les quatre demandes fictives.
- Les huit champs d’une demande.
- Les contrôles communs.
- Les règles CNIL sur les accès.
- L’acceptation et la sortie.
- Le CTA de cadrage.

## 10. Contre-audit après correction

La page n’a pas été modifiée dans ce lot. Aucun score après correction n’est attribué.

| Problème                                         | Priorité | Correction appliquée      | Revalidation indépendante                          |
| ------------------------------------------------ | -------- | ------------------------- | -------------------------------------------------- |
| Aucune comparaison TCO                           | P0       | Non appliquée dans ce lot | Refaire les quatre totaux et inclusions            |
| Coût de gouvernance absent                       | P0       | Non appliquée dans ce lot | Contrôler temps chargé et seuil 2,67 h             |
| Couverture non reliée au dommage                 | P0       | Non appliquée dans ce lot | Refaire trois scénarios et éviter double comptage  |
| Alternatives interne/attente/retrait incomplètes | P1       | Non appliquée dans ce lot | Vérifier arbre sur cas réel                        |
| Sources internationales contractuelles absentes  | P1       | Non appliquée dans ce lot | Rouvrir UK/Canada et maintenir le périmètre public |
| Position professionnelle trop implicite          | P2       | Non appliquée dans ce lot | Test dirigeant + scénario opposé                   |

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

Critère d’acceptation futur : **au moins 90/100, aucun axe sous 8/10**, TCO et seuils refaits indépendamment, devis comparés à périmètre égal, sources primaires rouvertes et rendu mobile réellement contrôlé.

## 11. Preuves techniques et visuelles

```text
Manifeste : page et dossier de recherche relus ; snapshot SHA-256 consigné en tête.
Calculs refaits : oui, via un script Node indépendant le 24 juillet 2026.
Sources rouvertes : Légifrance CCAG-TIC, Cigref–Syntec, CNIL, UK Model Services Contract Guidance, CanadaBuys et benchmarks français/internationaux.
Liens vérifiés : ouverture web effectuée le 24 juillet 2026 ; cadres publics et droit français doivent être redatés et qualifiés lors de la réécriture.
Commandes : shasum -a 256 ; rg ; calculs Node des TCO, seuils et impacts d'indisponibilité.
Rendu 320 / 390 / 768 / 1024 / 1440 : non exécuté, car aucune page publique n'a été modifiée.
Image sociale : non auditée dans ce lot éditorial.
Statut maximal prouvé : audit éditorial complet et plan de réécriture, pas correction publique, devis ni avis juridique.
Réserve publication / indexation : aucune preuve de déploiement ou d'indexation n'est produite par cet audit.
```
