# Deep dive international — « Cahier des charges SaaS »

> **Statut :** dossier de recherche et de réécriture, non public  
> **Date de contrôle :** 24 juillet 2026  
> **Guide audité :** `/guides/cahier-des-charges-saas`  
> **Cible :** dirigeant, fondateur ou responsable métier non technique qui doit décider s’il faut construire un SaaS, cadrer une première version et comparer des prestataires  
> **Intention principale :** comprendre quoi mettre dans un cahier des charges SaaS réellement exploitable  
> **Intentions secondaires :** obtenir un modèle, éviter les oublis coûteux, préparer un appel d’offres, comparer des devis, organiser la recette et la réversibilité  
> **Périmètre de cette passe :** recherche France, Union européenne, Royaume-Uni, États-Unis, Canada et Australie ; analyse de concurrents éditoriaux francophones et anglophones ; conception d’un cas chiffré, d’un actif autonome et d’une architecture de réécriture  
> **Empreinte du guide lu :** `b577065d8226bcbcbff8e58102f999b03955029d6d94c8ff49b1593a5cc06da0`  
> **Empreinte de l’audit précédent lu :** `9b0b2ca04128b380227b9015d2d56065cdad3d88cb7fc2e7f8cfcdf23a1e59a1`

## 1. Verdict exécutif

Le guide actuel est **solide, prudent et nettement supérieur à un simple modèle de cahier des charges**. Son cas filé DossierClair rend plusieurs décisions concrètes : parcours, rôles, paiements, restauration, données, sortie et comparaison des réponses. L’audit précédent lui attribue 87/100 ; cette note reste cohérente.

Il n’est toutefois pas encore la meilleure réponse possible pour un dirigeant qui s’apprête à engager plusieurs dizaines de milliers d’euros. Quatre manques limitent sa valeur décisionnelle :

1. **Le choix qui précède le cahier des charges n’est pas assez explicite.** Le lecteur doit d’abord décider entre acheter un logiciel existant, tester le service manuellement, assembler des outils ou faire construire. Un bon cahier des charges peut formaliser une mauvaise décision.
2. **Le modèle économique de la décision reste trop peu chiffré.** Les devis ne sont pas comparables sans périmètre commun, coûts récurrents, exploitation, migration, dépendances et coûts de sortie.
3. **La preuve de réussite après livraison est insuffisante.** Le guide doit relier objectifs métier, métriques, critères d’acceptation, observation à 30/90 jours et décisions de correction ou d’arrêt.
4. **Le lecteur ne repart pas encore avec un outil autonome assez complet.** Il faut un cahier de décision réellement copiable ou téléchargeable, prérempli par un exemple, et utilisable sans rendez-vous commercial.

### Verdict de publication visé

La réécriture doit devenir :

- un **outil de décision avant d’être un document de commande** ;
- un guide lisible par un dirigeant, avec le jargon défini au moment où il devient utile ;
- un exemple continu, cohérent et chiffré ;
- une comparaison à périmètre égal, où une inconnue n’est jamais remplacée par zéro ;
- un modèle utilisable sans donner son adresse e-mail ;
- une prise de position professionnelle claire, avec ses limites et ses contre-cas ;
- une porte d’entrée vers les guides spécialisés, sans tenter de les dupliquer.

Il est impossible de promettre une première place Google à partir du seul contenu. En revanche, cette architecture peut produire la réponse la plus utile parmi les résultats sur l’intention « cahier des charges SaaS » : elle répond à la décision, au modèle, à l’exemple, au budget, à la sélection et à l’après-livraison.

## 2. La promesse éditoriale à faire au lecteur

### Proposition de promesse en langage humain

> Vous avez une idée de logiciel en ligne et vous devez expliquer clairement ce qu’il faut construire, obtenir des devis comparables et éviter les oublis qui apparaissent une fois le développement commencé. Ce guide vous aide d’abord à vérifier que le sur-mesure est la bonne décision. Vous construirez ensuite, pas à pas, un cahier des charges utilisable par un prestataire : utilisateurs, parcours, droits, données, paiements, sécurité, exploitation, budget, recette et sortie. Un exemple chiffré montre enfin comment arbitrer trois offres sans choisir artificiellement la moins chère.

### Ce que le lecteur doit savoir faire à la fin

Le lecteur doit pouvoir :

1. dire en une page quel problème métier le SaaS résout, pour qui et comment la réussite sera mesurée ;
2. défendre un choix **construire / acheter / assembler / tester manuellement / abandonner** ;
3. distinguer un rôle, un parcours, une règle métier et un critère d’acceptation ;
4. lister les cas normaux et les échecs importants sans écrire un roman technique ;
5. demander des engagements vérifiables sur la sécurité, la disponibilité, la sauvegarde et la réversibilité ;
6. comparer plusieurs propositions sur une même période et un même périmètre ;
7. préparer une recette, une mise en service, une phase d’observation et un plan de sortie ;
8. identifier ce qui exige un avis juridique, comptable, sécurité ou accessibilité spécialisé.

### Ce que le guide ne doit pas promettre

- qu’un cahier des charges « complet » élimine tous les changements ;
- qu’un forfait est toujours préférable ;
- qu’une pile technique donnée convient à tous les SaaS ;
- qu’un nombre universel d’utilisateurs simultanés suffit à décrire la performance ;
- que le paiement d’un développement transfère automatiquement tous les droits ;
- que tout SaaS entre dans le même périmètre réglementaire ;
- que des pourcentages non sourcés permettent de prédire les économies ;
- qu’un bon document remplace la disponibilité d’un décideur métier pendant le projet.

## 3. Diagnostic détaillé du guide actuel

### 3.1. Ce qu’il faut impérativement conserver

| Élément actuel                                                             | Pourquoi il crée de la valeur                                                                           | Consigne de réécriture                                                                           |
| -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| Le cas DossierClair                                                        | Il transforme des exigences abstraites en décisions observables                                         | Le conserver comme fil rouge, mais verrouiller toutes les hypothèses et les chiffres             |
| La distinction entre besoins, parcours et critères de recette              | Elle empêche le catalogue de fonctions                                                                  | Ajouter le lien explicite avec les objectifs et les métriques métier                             |
| Les rôles et droits                                                        | Ils exposent les risques de cloisonnement et d’administration                                           | Ajouter le cycle de vie des droits, les validations et les tests négatifs                        |
| Les états de paiement et les notifications techniques de Stripe — webhooks | Ils montrent que « intégrer Stripe » ne décrit pas un comportement                                      | Conserver un exemple court et renvoyer le détail au guide facturation                            |
| Les exigences d’exploitation                                               | Sauvegarde, restauration, journaux techniques et incidents sont souvent absents des modèles concurrents | Relier chaque exigence à un propriétaire, une preuve et un scénario de test                      |
| La réversibilité                                                           | Elle protège le client et le fondateur contre l’enfermement                                             | Séparer sortie d’un client du SaaS et sortie du fondateur de son prestataire                     |
| La grille de comparaison des réponses                                      | Elle évite la décision au seul prix                                                                     | Ajouter le coût renseigné sur 24 mois, les inconnues, les exclusions et la sensibilité des poids |
| Les précautions juridiques et réglementaires                               | Elles limitent les fausses certitudes                                                                   | Indiquer clairement quand l’avis d’un spécialiste est nécessaire                                 |

### 3.2. Ce qu’il faut approfondir

| Manque                          | Effet actuel pour le dirigeant                                           | Correction attendue                                                                                                                                                               |
| ------------------------------- | ------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Arbre construire/acheter/tester | Il peut mieux rédiger une décision qui reste mauvaise                    | Faire de cette décision le premier arbitrage                                                                                                                                      |
| Situation de départ mesurée     | Le gain reste déclaratif                                                 | Donner une mesure de référence sur quatre semaines dans le cas DossierClair                                                                                                       |
| Métriques après lancement       | La livraison technique peut être confondue avec la réussite              | Définir des mesures à 30 et 90 jours, un propriétaire et une action si elles dérivent                                                                                             |
| Coûts à périmètre égal          | Le lecteur voit un score, mais pas tout le coût de possession            | Comparer les coûts renseignés et afficher les postes inconnus séparément                                                                                                          |
| Gouvernance des changements     | Le cahier des charges paraît figé ou informel                            | Ajouter version, journal des décisions, hypothèses, changement et impact                                                                                                          |
| Responsabilités                 | Certaines exigences existent sans propriétaire                           | Ajouter une matrice simple « décide / réalise / valide / exploite »                                                                                                               |
| Migration et reprise            | L’arrivée des données paraît secondaire                                  | Ajouter inventaire, nettoyage, mapping, test, bascule et retour arrière                                                                                                           |
| Tests négatifs                  | La recette peut valider seulement le « chemin heureux »                  | Tester refus, doublons, délais, perte de réseau, droits et indisponibilité tierce                                                                                                 |
| Actif autonome — piste initiale | Le lecteur doit encore reconstruire son document                         | Hypothèse étudiée : fournir un classeur et une version imprimable. Cette piste a ensuite été abandonnée au profit du document Markdown effectivement construit, exporté et testé. |
| Limites du forfait              | Un document très détaillé peut encourager un faux sentiment de certitude | Expliquer quand forfait, régie plafonnée ou phase de découverte sont cohérents                                                                                                    |

### 3.3. Ce qu’il faut raccourcir ou regrouper

- Ne pas répéter une exigence dans le texte, le tableau et l’encadré si la répétition n’ajoute ni preuve ni décision.
- Ne pas développer ici un mini-guide complet sur Stripe, le RGPD, la cybersécurité ou la validation d’idée : résumer la décision et renvoyer vers le guide spécialisé.
- Éviter les longues séries de « demandez au prestataire ». Transformer plutôt chaque demande en triplet **résultat attendu / preuve / responsable**.
- Remplacer les formulations générales comme « prévoir la performance » par un exemple vérifiable : volume, action, percentile ou délai, environnement de test et résultat attendu.
- Réserver les mots `SLO`, `RPO`, `RTO`, `idempotence` ou `multitenant` aux endroits où ils évitent une ambiguïté, puis les traduire immédiatement.

## 4. Méthode de recherche

### 4.1. Marchés et familles de sources étudiés

- **France et Union européenne :** CNIL, Légifrance, textes européens, ministère de l’Économie, référentiel RGAA.
- **International :** Royaume-Uni, États-Unis, Canada et Australie pour les standards de conception de services et de pilotage.
- **Ingénierie logicielle :** ISO, NIST, OWASP, W3C, IETF, Microsoft Azure, AWS, Google SRE et Stripe.
- **Concurrence éditoriale :** agences, éditeurs d’outils et modèles de document produit ou d’exigences logicielles en français et en anglais.

### 4.2. Questions de recherche

La recherche n’a pas porté seulement sur « les rubriques d’un cahier des charges ». Elle a vérifié :

- à quel moment il faut renoncer à construire ;
- comment relier un besoin à une preuve de réussite ;
- comment écrire des critères d’acceptation observables ;
- comment cadrer tenants, utilisateurs, rôles et droits ;
- comment traiter les échecs d’intégration et de paiement ;
- quelles exigences de qualité peuvent être mesurées ;
- comment traduire la sécurité et le RGPD en responsabilités ;
- comment décrire l’exploitation, la restauration et les objectifs de service ;
- comment comparer des coûts à périmètre égal ;
- comment préparer migration, recette, mise en service, réversibilité et changement ;
- ce que les concurrents donnent au lecteur et ce qu’ils laissent encore à décider.

### 4.3. Règle de preuve

Une source commerciale peut révéler une attente de lecteur ou un angle de présentation. Elle ne sert pas de preuve juridique, réglementaire ou statistique. Les obligations et bonnes pratiques structurantes sont appuyées prioritairement par des textes officiels, des standards ou une documentation technique de première main.

Toutes les sources du présent dossier ont été consultées ou recontrôlées le **24 juillet 2026**. Une date de mise à jour propre à la source est précisée lorsqu’elle est déterminante.

## 5. Analyse de la concurrence éditoriale

### 5.1. Concurrents francophones

| Source                                                                                                                                   | Ce qu’elle fait bien                                                                               | Limite ou conflit d’intérêt                                                                                                                             | Occasion de faire mieux                                                                                                                                                         |
| ---------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Digital Unicorn — modèle de cahier des charges SaaS](https://digitalunicorn.fr/modele-de-cahier-des-charges-saas/)                      | Structure spécifique au SaaS, exemples, erreurs fréquentes, modèle et exigences non fonctionnelles | Contenu d’agence orienté captation ; certaines économies ou proportions de changements sont affirmées sans preuve robuste ; appels commerciaux nombreux | Ne publier aucun pourcentage générique non sourcé ; fournir le modèle complet sans barrière ; ajouter go/no-go, coût à périmètre égal, métriques, exploitation et double sortie |
| [Yield Studio — cahier des charges logiciel](https://www.yieldstudio.fr/blog/modele-de-cahier-des-charges-pour-la-creation-dun-logiciel) | Point de départ métier concret, document modifiable, effort pour rendre le cadrage accessible      | Périmètre logiciel large, moins précis sur la vie d’un SaaS, sa facturation, ses espaces clients isolés et sa sortie                                    | Montrer la différence entre un logiciel livré et un service en ligne exploité dans la durée                                                                                     |
| [Nocode Factory — cahier des charges logiciel](https://www.nocodefactory.fr/blog/cahier-des-charges-logiciel)                            | Langage adapté aux PME, rôles, méthode, acceptation                                                | Peu de profondeur sur isolation des clients, paiements, opérations, coût de possession et réversibilité                                                 | Donner un cas SaaS complet, y compris incidents, migration, coûts inconnus et arrêt                                                                                             |
| [ARDN tech — cahier des charges SaaS sur mesure](https://ardn.tech/fr-fr/blog/saas/cahier-des-charges-saas-sur-mesure-exemple)           | Angle SaaS et réversibilité, exemple de structure                                                  | Source commerciale ; les affirmations générales doivent être vérifiées avant reprise                                                                    | Garder l’orientation SaaS, mais rattacher toute règle sensible à une preuve primaire                                                                                            |
| [Coutsite — modèle de cahier des charges](https://www.coutsite.fr/modele-cahier-des-charges)                                             | Parcours de génération simple et attente forte de modèle                                           | Très orienté site ; certaines formulations réglementaires sont imprécises, notamment l’expression « RGPD v4 »                                           | Employer les intitulés juridiques exacts et distinguer réglementation, standard, recommandation et choix contractuel                                                            |

### 5.2. Concurrents et modèles anglophones

| Source                                                                                                                    | Apport utile                                                        | Limite                                                                                                    | Gain éditorial possible                                                                    |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| [Atlassian — product requirements template](https://www.atlassian.com/software/confluence/templates/product-requirements) | Objectifs, hypothèses, questions ouvertes et fonctionnalités        | Modèle lié à un produit vendeur ; faible couverture exploitation, données, sortie et comparaison d’offres | Ajouter un registre d’inconnues et le relier au coût, au test et à la décision             |
| [Smartsheet — PRD templates](https://www.smartsheet.com/content/free-product-requirements-document-template)              | Formats modifiables, exigences fonctionnelles et non fonctionnelles | Générique et plus documentaire que décisionnel                                                            | Préremplir un cas complet, pas seulement fournir des colonnes vides                        |
| [Asana — software requirements document](https://asana.com/resources/software-requirement-document-template)              | Séparation exigences métier, utilisateurs et techniques             | Contenu commercial et générique                                                                           | Organiser les exigences par risque et par preuve                                           |
| [MakeMyPRD — SaaS PRD template](https://www.makemyprd.com/templates/prd-template-for-saas)                                | Exemple SaaS récent, logique produit et abonnement                  | Produit de génération de PRD ; profondeur variable sur exploitation et réversibilité                      | Ne pas automatiser une fausse précision ; rendre visibles les hypothèses et les désaccords |

### 5.3. Ce que la SERP couvre déjà largement

- listes de rubriques ;
- différence entre cahier des charges fonctionnel et technique ;
- personas et fonctionnalités ;
- conseils généraux sur budget et délais ;
- modèles Word, Google Docs ou formulaires ;
- appels à contacter une agence.

### 5.4. Le véritable gain d’information disponible

Le guide Hagnéré Code doit réunir ce qui est encore rarement traité ensemble :

1. un arbre **ne pas construire / tester / acheter / assembler / construire** ;
2. un exemple SaaS rempli de bout en bout, avec cas d’échec et non seulement le parcours idéal ;
3. une comparaison financière à périmètre commun, avec inconnues et exclusions visibles ;
4. un registre des hypothèses et des changements ;
5. des critères d’acceptation rattachés aux risques ;
6. une mesure de la réussite à 30 et 90 jours ;
7. une double réversibilité : client final et commanditaire vis-à-vis du prestataire ;
8. un actif autonome modifiable, sans formulaire commercial — finalement livré
   en Markdown plutôt qu'en classeur ;
9. des prises de position assumées, mais bornées par les preuves ;
10. une navigation claire vers les guides spécialisés, afin que le présent guide reste le document maître de cadrage.

## 6. Positions professionnelles à assumer

Ces opinions peuvent être formulées clairement dans le guide. Elles ne doivent pas être présentées comme des lois universelles.

### Position 1 — Un bon cahier des charges ne commence pas par les fonctionnalités

Il commence par une décision : quel problème mérite d’être résolu, pour quel utilisateur, avec quelle preuve de résultat, et pourquoi le sur-mesure est préférable aux alternatives. Une liste de fonctions peut être très précise tout en finançant le mauvais produit.

### Position 2 — L’exhaustivité n’est pas le bon objectif

Le meilleur document n’est pas le plus long. C’est celui qui réduit les ambiguïtés qui changent le prix, le délai, la sécurité ou l’issue métier. Trois pages de décisions vérifiables valent mieux que soixante pages de formulations génériques.

### Position 3 — Une inconnue ne vaut jamais zéro

Dans un devis, une migration « à préciser », une volumétrie inconnue ou une exploitation exclue n’est pas gratuite. Elle doit rester visible dans une colonne d’incertitude, faire l’objet d’une étude ou être couverte par une hypothèse contractuelle.

### Position 4 — Le prix fixe n’est pas une preuve de maîtrise

Un forfait peut convenir à un périmètre stable, testable et suffisamment compris. Sur un produit encore incertain, il peut déplacer le risque vers des exclusions, des avenants ou une marge de sécurité opaque. Une courte découverte rémunérée ou une phase plafonnée peut être plus honnête.

### Position 5 — Un score ne décide pas à la place du dirigeant

Une grille pondérée discipline la comparaison ; elle ne transforme pas des informations faibles en vérité. Les poids doivent être choisis avant de voir les prix et chaque note doit être justifiée par un livrable, une démonstration, une clause ou une référence.

### Position 6 — La livraison n’est pas la réussite

Un SaaS peut être mis en production, fonctionner techniquement et rester un échec si les utilisateurs contournent le parcours, si le support explose ou si le temps métier ne diminue pas. La décision doit donc prévoir l’observation après lancement.

### Position 7 — La sortie se conçoit avant l’entrée

Le format d’export, la documentation, les accès, les délais, la restitution des secrets, la coopération de transition et les coûts de sortie doivent être abordés avant la signature. La réversibilité n’est pas une menace contre le prestataire ; c’est une condition de relation saine.

### Position 8 — La sécurité ne se résume pas à « conforme OWASP »

Une référence à OWASP sans périmètre, version, niveau, tests ni preuves reste ambiguë. Il faut sélectionner des exigences adaptées au risque, conserver leurs identifiants versionnés et préciser comment elles seront vérifiées.

## 7. Architecture de décision complète

Chaque axe ci-dessous doit apparaître dans le guide public ou dans son actif autonome. Pour éviter un catalogue illisible, chaque rubrique doit répondre à quatre questions :

1. **Quelle décision le dirigeant doit-il prendre ?**
2. **Quelle preuve ou quel test rend cette décision vérifiable ?**
3. **Qui en est responsable ?**
4. **Dans quel cas faut-il faire intervenir un spécialiste ?**

### 7.1. Étape zéro : construire, acheter, assembler, tester ou arrêter

#### Arbre de décision proposé

```text
Le problème est-il observé et mesuré ?
├─ Non → observer le travail réel et tester le service manuellement
└─ Oui
   ├─ Un logiciel existant couvre-t-il le besoin critique sans contournement majeur ?
   │  ├─ Oui → comparer achat, paramétrage, intégration et coût de sortie
   │  └─ Non
   ├─ L'avantage recherché vient-il réellement du logiciel ?
   │  ├─ Non → corriger d'abord offre, processus, données ou organisation
   │  └─ Oui
   ├─ L'hypothèse la plus risquée peut-elle être testée sans produit complet ?
   │  ├─ Oui → prototype, concierge, no-code ou intégration limitée
   │  └─ Non → découverte ciblée
   └─ Les preuves justifient-elles un investissement réversible ?
      ├─ Non → arrêter ou reformuler
      └─ Oui → rédiger le cahier de décision et consulter
```

#### Preuves minimales

- observation de situations réelles, et pas seulement déclarations d’intention ;
- alternative existante étudiée avec ses limites ;
- hypothèse la plus risquée identifiée ;
- décision et motif consignés ;
- montant ou temps maximal autorisé pour apprendre avant de poursuivre.

#### Contre-cas

Un fondateur qui n’a encore aucun utilisateur ne doit pas forcément financer un cahier des charges de cinquante pages. Un service manuel, un prototype ou un assemblage d’outils peut produire une preuve plus utile. À l’inverse, une migration réglementée, un traitement de données sensibles ou un marché formel peut exiger une documentation et des validations beaucoup plus poussées que ce guide généraliste.

### 7.2. La page de décision du dirigeant

La première page du cahier des charges doit rester compréhensible sans vocabulaire technique.

| Champ                  | Question à résoudre                                        | Exemple DossierClair                                                                               |
| ---------------------- | ---------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| Décision demandée      | Que doit autoriser la direction ?                          | Financer un pilote pour trois entreprises, puis décider du passage à 30                            |
| Problème observé       | Quel coût, délai ou risque existe aujourd’hui ?            | 24 dossiers par mois, 52 min de travail actif médian par dossier, 5 retours pour pièces manquantes |
| Utilisateurs           | Qui agit, qui décide, qui subit une erreur ?               | Gestionnaire, administrateur d’entreprise, client invité, support                                  |
| Résultat attendu       | Quel changement mesurable justifie le projet ?             | Réduire le temps actif médian et les retours incomplets sans mélange de données                    |
| Non-objectifs          | Qu’est-ce qui ne sera pas construit maintenant ?           | Application mobile native, pièces jointes, personnalisation illimitée                              |
| Hypothèses             | Qu’est-ce qui n’est pas encore prouvé ?                    | Les clients accepteront le parcours d’invitation ; le paiement par carte suffit au pilote          |
| Contraintes            | Qu’est-ce qui ne peut pas être négocié ?                   | Cloisonnement des entreprises, export, restauration testée, calendrier du pilote                   |
| Budget de décision     | Combien peut-on dépenser avant le prochain go/no-go ?      | À chiffrer par le commanditaire ; ne pas le présenter comme un prix de marché                      |
| Propriétaire           | Qui arbitre sous 48 h lorsqu’une question bloque ?         | Claire, fondatrice                                                                                 |
| Mesure après lancement | Quand saura-t-on que la première version aide réellement ? | Revue à 30 jours et décision à 90 jours                                                            |

### 7.3. Découverte et préparation

La phase de découverte ne doit pas servir à retarder le projet. Elle doit réduire une incertitude nommée.

À documenter :

- personnes observées et situations de travail ;
- données disponibles et qualité réelle ;
- logiciels, feuilles de calcul et échanges actuels ;
- contraintes contractuelles ou réglementaires ;
- alternatives testées ;
- hypothèses à fort impact ;
- expériences courtes prévues ;
- décision attendue à la fin.

Le [GOV.UK Service Manual](https://www.gov.uk/service-manual/agile-delivery/how-the-discovery-phase-works) recommande de comprendre le problème, les utilisateurs et les contraintes avant de construire, et accepte qu’une découverte conduise à arrêter. Sa durée indicative de quatre à huit semaines concerne les services publics britanniques : **elle ne doit pas être copiée comme durée universelle pour une PME française**.

### 7.4. Utilisateurs, organisations, tenants et rôles

Un « client » peut désigner l’entreprise abonnée, l’administrateur, un utilisateur ou le payeur. Le cahier des charges doit lever cette ambiguïté.

Questions :

- Qu’est-ce qu’un tenant, c’est-à-dire un espace client isolé ?
- Une personne peut-elle appartenir à plusieurs entreprises ?
- Qui invite, suspend et supprime un utilisateur ?
- Quels rôles existent et quelles actions sont interdites à chacun ?
- Les droits dépendent-ils d’un rôle, d’une ressource, d’un établissement ou d’un contrat ?
- Qui valide un changement de rôle sensible ?
- Que se passe-t-il au départ d’un salarié ?
- Comment les comptes support accèdent-ils à un tenant, pendant combien de temps et avec quelle trace ?
- Un payeur peut-il voir des données métier ? Un gestionnaire peut-il modifier l’abonnement ?

#### Exemple de test négatif

> Étant connecté comme gestionnaire d’Atelier Nord, lorsque je modifie dans l’adresse une référence appartenant à Studio Rivage, l’application refuse l’accès sans révéler l’existence ou le contenu de la ressource ; l’événement est enregistré avec le tenant, l’utilisateur, l’action et le résultat.

Le contrôle des droits doit inclure la création, la modification, la revue périodique et le retrait. La [CNIL](https://www.cnil.fr/fr/securite-gerer-les-habilitations) recommande une logique de moindre privilège, une validation des droits et leur suppression lorsque la personne change de fonction ou quitte l’organisation.

### 7.5. Parcours et règles métier

Chaque parcours critique doit contenir :

- déclencheur ;
- acteur ;
- résultat attendu ;
- étapes utiles ;
- règles métier ;
- données lues ou modifiées ;
- erreurs et reprises ;
- notifications ;
- preuve de réussite ;
- critère d’acceptation.

#### Format de user story, sans en faire une religion

> En tant que **[acteur]**, je veux **[capacité]** afin de **[résultat utile]**.

Le format aide à expliciter l’utilisateur et son but. Il ne remplace ni les règles métier ni les exceptions. Le [GOV.UK Service Manual](https://www.gov.uk/service-manual/agile-delivery/writing-user-stories) conseille de décrire des résultats et de compléter les stories par des critères d’acceptation observables.

#### Cas d’échec à traiter en priorité

- invitation expirée ou déjà utilisée ;
- double clic ou requête rejouée ;
- paiement confirmé tardivement ;
- événement reçu deux fois ou dans un ordre inattendu ;
- indisponibilité d’un service tiers ;
- import partiellement valide ;
- modification concurrente ;
- droit retiré pendant une session ;
- notification non délivrée ;
- restauration demandée après une suppression ;
- annulation pendant un traitement asynchrone.

### 7.6. Données

Pour chaque objet métier important :

- propriétaire fonctionnel ;
- identifiant ;
- champs obligatoires et facultatifs ;
- provenance ;
- règles de validation ;
- niveau de sensibilité ;
- durée utile ;
- tenant ou périmètre de rattachement ;
- droits de lecture, modification, export et suppression ;
- historique requis ;
- format d’import et d’export ;
- qualité et doublons ;
- comportement lors d’une migration.

Le cahier des charges doit distinguer :

- **conservation métier** ;
- **obligation légale éventuelle** ;
- **sauvegarde technique** ;
- **journal de sécurité** ;
- **suppression ou anonymisation**.

Ces durées ne doivent pas être inventées par le prestataire. La [CNIL](https://www.cnil.fr/fr/guide-de-la-securite-des-donnees-personnelles) traite la minimisation, la conservation, les habilitations, les journaux, les sauvegardes et les incidents comme un ensemble de sécurité et de gouvernance.

### 7.7. Intégrations et interfaces de programmation — API

« Se connecter à Stripe » ou « prévoir une API » n’est pas une exigence suffisante.

Pour chaque intégration :

- système et propriétaire ;
- sens des flux ;
- données échangées ;
- événement déclencheur ;
- authentification et secrets ;
- délais et quotas ;
- comportement en cas de doublon ;
- ordre des événements ;
- nouvelle tentative et temporisation ;
- statut visible par l’utilisateur ;
- rapprochement ;
- alerte et reprise manuelle ;
- environnement de test ;
- dépendance contractuelle ;
- version et politique de changement.

La documentation [Stripe Webhooks](https://docs.stripe.com/webhooks?lang=node) précise notamment que l’ordre des événements n’est pas garanti, qu’un événement peut être reçu plusieurs fois et que la signature doit être vérifiée. La conception doit donc prévoir idempotence, traitement asynchrone et rapprochement, pas seulement une URL de webhook.

Une description [OpenAPI](https://spec.openapis.org/oas/latest.html) peut constituer une pièce contractuelle ou une preuve de compatibilité pour une API HTTP. Elle ne décrit toutefois pas, à elle seule, les règles métier, les droits, les niveaux de service ni la gestion de version.

### 7.8. Exigences non fonctionnelles

Une exigence de qualité doit être observable dans un contexte donné.

| Domaine        | Formulation trop vague       | Formulation exploitable                                                                                                                                                            |
| -------------- | ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Performance    | « Le SaaS doit être rapide » | Sur le jeu de test convenu et pour 50 sessions actives, 95 % des consultations de dossier répondent en moins de X secondes ; seuil et environnement à confirmer avant consultation |
| Disponibilité  | « Haute disponibilité »      | Objectif mensuel de niveau de service — ou SLO —, fenêtres exclues, mesure, source de vérité, alerte et action lorsque la marge d’erreur prévue est consommée                      |
| Reprise        | « Sauvegardes quotidiennes » | Perte de données maximale tolérée, délai de reprise, fréquence, isolation des copies et test de restauration                                                                       |
| Accessibilité  | « Accessible »               | Référentiel et niveau applicables, périmètre des écrans, méthode de test et traitement des défauts                                                                                 |
| Maintenabilité | « Code propre »              | Documentation d’installation, tests convenus, revue, déploiement reproductible et temps de reprise par une équipe tierce                                                           |
| Compatibilité  | « Tous navigateurs »         | Liste et versions prises en charge, appareils et politique de fin de support                                                                                                       |
| Capacité       | « Évolutif »                 | Hypothèse par tenant, volumétrie annuelle, pics, taille des données et seuil d’alerte                                                                                              |

La norme [ISO/IEC 25010:2023](https://www.iso.org/standard/78176.html) propose neuf caractéristiques de qualité pour spécifier et évaluer un produit. Elle peut servir de pense-bête ; le guide ne doit pas imposer de remplir mécaniquement neuf chapitres si certains ne changent aucune décision.

### 7.9. Sécurité et vie privée

Le cahier des charges doit répartir les responsabilités, pas affirmer une « conformité garantie ».

À préciser :

- catégories de données et risques ;
- rôles de responsable de traitement, sous-traitant et éventuels sous-traitants ultérieurs ;
- base, information, droits et durées à valider par le responsable juridique ;
- authentification, récupération de compte et authentification renforcée ;
- habilitations et revue ;
- séparation des environnements ;
- gestion des secrets ;
- journalisation et accès aux journaux ;
- vulnérabilités, dépendances et correctifs ;
- sauvegarde, restauration et continuité ;
- incidents, alerte, coopération et preuves ;
- localisation, transferts et sous-traitants ;
- suppression, export et fin de contrat ;
- tests et niveau d’assurance.

L’[OWASP ASVS 5.0.0](https://owasp.org/www-project-application-security-verification-standard/) peut fournir des exigences testables et versionnées. Il ne constitue ni une certification automatique ni un niveau universel. Les exigences retenues doivent être adaptées au risque et citées avec leur version.

Le [NIST Secure Software Development Framework 1.1](https://csrc.nist.gov/pubs/sp/800/218/final) structure les pratiques de développement sécurisé. Au 24 juillet 2026, la version 1.1 reste la publication finale ; la [version 1.2 est encore présentée comme projet de révision](https://csrc.nist.gov/Projects/ssdf/publications). Le guide ne doit pas les confondre.

Les rôles RGPD sont fonctionnels : le développeur n’est pas automatiquement sous-traitant pour tous les traitements. Les [lignes directrices 07/2020 de l’EDPB](https://www.edpb.europa.eu/documents/guideline/guidelines-072020-on-the-concepts-of-controller-and-processor-in-the-gdpr_en) et le [RGPD](https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng) doivent guider l’analyse, avec validation spécialisée lorsque le projet traite des données sensibles, réalise une surveillance ou présente un risque élevé.

### 7.10. Accessibilité

Le guide doit distinguer trois choses :

1. le bénéfice produit d’une interface utilisable par le plus grand nombre ;
2. le référentiel technique de test ;
3. les obligations juridiques applicables au service et à l’entreprise.

Les [WCAG 2.2](https://www.w3.org/TR/WCAG22/) sont une recommandation W3C avec des critères testables. Le [RGAA 4.1.2](https://accessibilite.numerique.gouv.fr/) est le référentiel français à citer lorsque son périmètre s’applique. La [directive européenne sur l’accessibilité](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=legissum%3A4403933) s’applique depuis le 28 juin 2025 à des catégories déterminées de produits et services ; elle ne rend pas automatiquement tout SaaS identique juridiquement. Le périmètre et les exemptions, notamment pour certaines microentreprises de services, doivent être vérifiés par un spécialiste.

### 7.11. Abonnements et facturation

Le présent guide doit cadrer les décisions, puis renvoyer au guide spécialisé `facturation-abonnements-saas`.

Décisions minimales :

- offre, périodicité et devise ;
- période d’essai ;
- prorata en cas de changement ;
- date d’effet d’une résiliation ;
- état de l’accès lorsque le paiement échoue ;
- relances et délai de grâce ;
- remboursement ou avoir ;
- facture et identité du vendeur ;
- gestion de la TVA selon le modèle et les territoires ;
- rapprochement entre paiement, facture, abonnement et droit d’accès ;
- traitement des événements en retard, dupliqués ou absents ;
- portabilité des données avant fermeture.

La documentation [Stripe sur les abonnements](https://docs.stripe.com/billing/subscriptions/webhooks) montre que les statuts de paiement, de facture et d’abonnement évoluent de façon asynchrone. Le cahier des charges doit décrire les états métier attendus, même si Stripe n’est finalement pas choisi.

Pour les entreprises françaises, le calendrier de facturation électronique doit être intégré à la veille et au choix d’architecture lorsque le périmètre le requiert. Selon le [ministère de l’Économie](https://www.economie.gouv.fr/tout-savoir-sur-la-facturation-electronique-pour-les-entreprises), toutes les entreprises doivent pouvoir recevoir des factures électroniques à compter du 1er septembre 2026 ; l’émission devient obligatoire à cette date pour les grandes entreprises et les entreprises de taille intermédiaire (ETI), puis le 1er septembre 2027 pour les petites et moyennes entreprises (PME) et les microentreprises. Ce calendrier ne dispense pas d’une analyse comptable et fiscale propre au SaaS.

### 7.12. Exploitation, assistance et objectifs de service

Le SaaS n’est pas terminé lors de sa mise en production.

À cadrer :

- heures et canal de support ;
- catégories de sévérité ;
- délai de prise en compte et objectif de rétablissement ;
- astreinte éventuelle ;
- surveillance technique et métier ;
- personnes alertées ;
- responsable de chaque alerte ;
- maintenance planifiée ;
- sauvegarde et restauration ;
- gestion des incidents ;
- déploiements et retour arrière ;
- capacité et coûts par tenant ;
- dépendances externes ;
- revue mensuelle ;
- remise de documentation.

Le [Google SRE Book](https://sre.google/sre-book/service-level-objectives/) distingue indicateur de niveau de service, objectif et engagement contractuel. Le guide peut traduire simplement :

- **indicateur :** ce qui est mesuré ;
- **objectif :** la cible interne ;
- **engagement :** ce qui est promis et ce qui se passe s’il n’est pas tenu.

La conception multitenant doit anticiper isolation, « voisin bruyant », coût par tenant, onboarding, cycle de vie et niveaux de service. La [checklist Microsoft Azure](https://learn.microsoft.com/en-us/azure/architecture/guide/multitenant/checklist) en fournit une vue structurée, mais elle ne dicte pas un fournisseur cloud.

### 7.13. Sauvegarde, continuité et reprise

« Sauvegardé chaque jour » ne prouve pas que l’activité peut redémarrer.

Le document doit préciser :

- **RPO**, traduit en perte de données maximale tolérable ;
- **RTO**, traduit en temps maximal pour rétablir le service ;
- copies, fréquence, isolation et chiffrement ;
- responsabilité de la surveillance ;
- test de restauration ;
- données, secrets et configurations inclus ;
- communication et mode dégradé ;
- preuve et fréquence du test.

La [CNIL](https://cnil.fr/fr/securite-sauvegarder) recommande des sauvegardes régulières, protégées et testées. L’[AWS Well-Architected Framework](https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/plan-for-disaster-recovery-dr.html) relie RPO et RTO aux besoins métier et insiste sur l’exercice du plan. Il s’agit de principes d’ingénierie, pas d’une obligation de choisir AWS.

### 7.14. Migration et mise en service

Le cahier des charges doit traiter la reprise comme un mini-projet.

1. inventaire des sources et propriétaires ;
2. qualité, doublons et données obsolètes ;
3. mapping vers le nouveau modèle ;
4. règles de transformation ;
5. jeu d’essai ;
6. rapprochement par nombres de lignes, totaux, échantillons ou sommes de contrôle ;
7. répétition de la migration ;
8. gel ou synchronisation ;
9. critères de bascule ;
10. critères de retour arrière ;
11. responsabilité de la correction ;
12. période de conservation de la source ;
13. validation métier ;
14. surveillance renforcée après bascule.

La [méthode de migration Microsoft](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/migrate/plan-migration) recommande d’identifier dépendances, séquence, critères de réussite, plan de retour et validation des parties prenantes. Ces principes sont transposables ; les délais proposés dans une documentation cloud ne doivent pas devenir des normes universelles.

### 7.15. Recette et critères d’acceptation

Un critère d’acceptation doit dire ce qui est observé, avec quelles données et quel résultat attendu.

#### Exemple de critère insuffisant

> L’administrateur peut exporter ses données.

#### Exemple exploitable

> Depuis l’espace Atelier Nord, un administrateur demande un export complet. Le fichier contient les dossiers, utilisateurs, statuts, dates et identifiants documentés, au format CSV UTF-8 et JSON pour les relations convenues. Aucune donnée de Studio Rivage n’est présente. Le nombre de dossiers correspond au compteur de l’interface. Une erreur d’export est visible, réessayable et journalisée.

Le plan de recette doit couvrir :

- chemins critiques ;
- refus et erreurs ;
- droits ;
- données limites ;
- imports et exports ;
- intégrations indisponibles ;
- paiement ;
- accessibilité ;
- performance ;
- sauvegarde et restauration ;
- sécurité ciblée ;
- migration ;
- retours arrière ;
- anomalies bloquantes, majeures et mineures ;
- propriétaire de l’acceptation.

### 7.16. Budget, planning et coût

Le budget doit séparer :

- découverte et cadrage ;
- conception ;
- développement ;
- qualité et sécurité ;
- données et migration ;
- licences et infrastructure ;
- mise en service ;
- maintenance et assistance ;
- exploitation ;
- évolutions prévues ;
- réversibilité et transition ;
- temps interne du commanditaire ;
- inconnues et provisions.

Une estimation sans hypothèses de volume, de qualité, d’intégration et de migration n’est pas comparable. Le guide doit employer l’expression **« coûts renseignés sur 24 mois »** tant que tous les postes d’un coût total de possession ne sont pas définis.

### 7.17. Responsabilités

Une matrice légère suffit :

| Décision ou livrable | Décide                    | Réalise                                                              | Valide                        | Exploite          |
| -------------------- | ------------------------- | -------------------------------------------------------------------- | ----------------------------- | ----------------- |
| Objectifs métier     | Commanditaire             | Produit/métier                                                       | Direction                     | Direction         |
| Règles métier        | Responsable métier        | Produit                                                              | Utilisateurs clés             | Métier            |
| Architecture         | Prestataire technique     | Équipe technique                                                     | Responsable technique convenu | Exploitant        |
| Rôles RGPD           | Responsable de traitement | Juridique/délégué à la protection des données (DPO) avec les équipes | Direction compétente          | Parties désignées |
| Critères de recette  | Commanditaire             | Produit + prestataire                                                | Utilisateur habilité          | Support/produit   |
| Mise en production   | Propriétaire de service   | Équipe technique                                                     | Métier + technique            | Exploitant        |
| Incident majeur      | Propriétaire de service   | Exploitant                                                           | Direction selon sévérité      | Exploitant        |
| Sortie               | Commanditaire             | Prestataire + repreneur                                              | Métier + technique            | Repreneur         |

Ne pas transformer cette matrice en vérité universelle. Les noms réels et les délégations doivent apparaître.

### 7.18. Version, hypothèses et changements

Le cahier des charges doit être vivant sans devenir instable.

Champs minimaux :

- numéro de version ;
- date ;
- décision modifiée ;
- motif ;
- hypothèse concernée ;
- impact sur valeur, coût, délai, sécurité, données et exploitation ;
- options examinées ;
- décideur ;
- date d’effet ;
- éléments rendus obsolètes.

Le document doit aussi comporter un **registre d’inconnues** :

| Inconnue                          | Impact possible     | Comment la réduire              | Responsable  | Échéance                      | Décision si non résolue                  |
| --------------------------------- | ------------------- | ------------------------------- | ------------ | ----------------------------- | ---------------------------------------- |
| Volume réel d’exports             | Performance et coût | Mesurer les fichiers actuels    | Léa          | Avant devis final             | Chiffrer une tranche et une limite       |
| Qualité des données               | Migration           | Profilage d’un échantillon      | Atelier Nord | Avant lot migration           | Séparer nettoyage et import              |
| Acceptation du paiement par carte | Conversion          | Test manuel sur clients pilotes | Claire       | Avant facturation automatisée | Conserver facturation manuelle au pilote |

### 7.19. Réversibilité à deux niveaux

#### Sortie du client final

- export lisible et documenté ;
- pièces et relations ;
- délai de disponibilité ;
- fermeture et suppression ;
- statut des factures ;
- assistance éventuelle ;
- preuve de suppression ;
- coût connu.

#### Sortie du fondateur ou commanditaire vis-à-vis du prestataire

- dépôt et historique du code ;
- droits et licences ;
- documentation d’installation ;
- environnements et automatisations ;
- accès cloud, domaine, paiement et supervision ;
- inventaire des secrets sans les mettre dans le document ;
- données, schémas et procédure d’export ;
- dépendances et licences ;
- dossiers d’architecture et d’exploitation ;
- coopération et durée de transition ;
- coûts et déclencheurs.

L’article [L. 131-3 du Code de la propriété intellectuelle](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958) impose notamment que chacun des droits cédés soit mentionné distinctement et que son domaine d’exploitation soit délimité. Le guide doit recommander une validation juridique et bannir la formule simpliste « j’ai payé, donc tout m’appartient ».

Le [Data Act européen](https://digital-strategy.ec.europa.eu/en/factpages/data-act-explained), applicable depuis le 12 septembre 2025, contient des dispositions sur le changement de fournisseur de services de traitement de données. Selon le périmètre du service, il faut examiner les obligations d’information, de coopération, d’interface et d’export. La suppression des frais de changement est prévue à partir du 12 janvier 2027 après la période transitoire ; le contrat et le périmètre doivent être vérifiés, sans affirmer que chaque coût de transition disparaît automatiquement.

## 8. Cas fictif cohérent à utiliser : DossierClair

> **Important :** tous les noms, volumes, prix, temps, notes et résultats de cette section sont fictifs. Ils illustrent une méthode, pas un prix de marché ni une prévision commerciale.

### 8.1. Contexte

Claire veut proposer DossierClair, un SaaS B2B qui aide des petites entreprises à collecter et suivre des informations structurées auprès de leurs clients. Léa est gestionnaire chez Atelier Nord. Studio Rivage participe également au pilote. Chaque entreprise doit rester strictement isolée.

Hypothèses de cadrage :

- 3 entreprises pilotes ;
- objectif de 30 entreprises au terme de la première année si le pilote est concluant ;
- jusqu’à 5 utilisateurs internes par entreprise ;
- environ 2 000 dossiers actifs et 20 000 archivés à terme ;
- pas de dépôt de pièces jointes en V1 ;
- application web responsive, sans application mobile native ;
- paiement par carte possible, mais facturation manuelle conservée pendant le pilote si l’hypothèse n’est pas validée ;
- trois rôles initiaux : administrateur d’entreprise, gestionnaire, lecteur ;
- accès support temporaire, justifié, approuvé et journalisé.

### 8.2. Référence métier mesurée

Sur quatre semaines avant le pilote, Atelier Nord observe :

- 24 dossiers traités ;
- 52 minutes de travail actif médian par dossier ;
- 5 dossiers sur 24 renvoyés pour information manquante, soit 20,8 % ;
- 2 heures par semaine consacrées à consolider statuts et relances ;
- aucune mesure fiable du temps d’attente client, qui reste donc une inconnue.

Ces chiffres ne prouvent ni la demande marché ni le revenu futur. Ils donnent une base pour mesurer l’utilité opérationnelle.

### 8.3. Objectifs de pilote

À 90 jours :

- au moins 20 dossiers par mois passent par le parcours complet ;
- le temps actif médian est inférieur ou égal à 35 minutes ;
- au plus 2 dossiers sur 24 sont renvoyés pour information manquante ;
- aucun test ne révèle d’accès entre Atelier Nord et Studio Rivage ;
- les échecs de paiement, d’invitation et d’intégration sont visibles et reprenables ;
- la consolidation hebdomadaire descend sous 45 minutes ;
- l’équipe sait exporter les données et restaurer le scénario convenu.

Ces cibles sont des hypothèses de décision. Elles devront être acceptées ou modifiées par le commanditaire, pas imposées par le rédacteur.

### 8.4. Règle d’arrêt ou de correction

À 90 jours, Claire ne finance pas automatiquement le déploiement à 30 entreprises si :

- moins de 10 dossiers réels ont traversé le parcours complet ;
- plus de 50 % des dossiers nécessitent encore une reprise manuelle hors outil ;
- l’isolement des clients n’est pas démontré ;
- les utilisateurs pilotes n’acceptent pas le parcours d’invitation ;
- le gain observé vient seulement d’un renfort humain temporaire.

La décision peut être : poursuivre, corriger une hypothèse, réduire le périmètre, revenir à un service manuel ou arrêter.

### 8.5. Exemples de parcours

#### Parcours nominal

1. Léa crée un dossier pour Atelier Nord.
2. Elle choisit un modèle autorisé.
3. DossierClair génère une invitation à durée limitée.
4. Le client renseigne les informations.
5. Les validations signalent les éléments manquants.
6. Léa vérifie et clôture.
7. L’événement alimente la mesure du temps actif et du taux de retour.

#### Parcours d’échec

1. Le client utilise deux fois le même lien.
2. La deuxième tentative ne crée pas de doublon.
3. Un message clair propose de reprendre le dossier existant.
4. Le journal conserve le résultat sans stocker d’information inutile.
5. Léa voit le statut et peut renvoyer une invitation si sa politique l’autorise.

#### Test d’isolement

Un gestionnaire d’Atelier Nord modifie une URL ou un identifiant afin de viser un dossier Studio Rivage. L’accès est refusé, aucune donnée métier ni existence de ressource n’est révélée, et l’événement est exploitable par le support sécurité.

## 9. Calculs et comparatifs

### 9.1. Coût de préparation interne

Hypothèses fictives :

| Contribution                   |    Temps | Valeur de capacité interne |     Montant |
| ------------------------------ | -------: | -------------------------: | ----------: |
| Claire, décision et arbitrages |      8 h |                     75 €/h |       600 € |
| Léa, observation métier        |      6 h |                     45 €/h |       270 € |
| Référent conformité            |      3 h |                     60 €/h |       180 € |
| Utilisateurs pilotes           |      4 h |                     50 €/h |       200 € |
| **Total**                      | **21 h** |                            | **1 250 €** |

Ce total mesure une capacité interne mobilisée ; il ne s’agit ni d’une facture ni nécessairement d’une sortie de trésorerie.

### 9.2. Trois propositions sur 24 mois

Tous les montants sont fictifs, hors taxes et limités aux postes renseignés.

| Poste                            |                            Offre A |       Offre B |       Offre C |
| -------------------------------- | ---------------------------------: | ------------: | ------------: |
| Découverte                       | Non séparée du lot de construction |       Incluse |       8 000 € |
| Conception et construction       |                           45 000 € |      62 000 € |      52 000 € |
| Migration initiale               |                           12 000 € |       Incluse |       4 000 € |
| Maintenance et assistance        |                           36 000 € |      30 000 € |      33 600 € |
| Infrastructure estimée           |                           18 000 € |      12 000 € |      14 000 € |
| Licences tierces renseignées     |                            4 200 € |       2 700 € |       3 300 € |
| Sortie et transition chiffrées   |                            8 000 € |       5 000 € |       6 000 € |
| **Coûts renseignés sur 24 mois** |                      **123 200 €** | **111 700 €** | **120 900 €** |

#### Pourquoi ne pas écrire automatiquement « TCO »

Le tableau ne devient un coût total de possession que si le périmètre est défini et que les postes significatifs sont inclus ou explicitement exclus. Restent par exemple à confirmer :

- temps interne ;
- TVA non récupérable éventuelle ;
- dépassement de volume ;
- audit de sécurité ;
- assistance hors horaires ;
- nettoyage des données ;
- évolution réglementaire ;
- coût d’un incident ;
- coût d’opportunité ;
- indexation des tarifs ;
- changement de fournisseur tiers.

L’offre B est la moins chère sur les coûts renseignés. Elle ne devient pas automatiquement la meilleure.

### 9.3. Grille pondérée

Poids choisis **avant d’examiner les prix** :

| Critère                      |     Poids |        A |        B |        C |
| ---------------------------- | --------: | -------: | -------: | -------: |
| Résultat métier              |      30 % |        8 |        9 |        8 |
| Cycle complet couvert        |      20 % |        7 |        9 |        8 |
| Exploitation et sécurité     |      15 % |        6 |        8 |        8 |
| Coûts renseignés sur 24 mois |      15 % |        9 |        7 |        8 |
| Preuves apportées            |      10 % |        5 |        9 |        7 |
| Réversibilité                |      10 % |        4 |        8 |        7 |
| **Score pondéré sur 10**     | **100 %** | **6,95** | **8,45** | **7,80** |

Chaque note doit être liée à une preuve : atelier, démonstration, exemple de livrable, engagement, référence vérifiable ou clause. Sans preuve, la grille devient une impression maquillée en nombre.

#### Test de sensibilité conseillé

Dans la piste de classeur étudiée au départ, les poids auraient dû rester
modifiables. Cette piste n'a pas été retenue dans le livrable final : le
comparateur Markdown livré ne calcule volontairement aucun score pondéré. Si
une équipe reprend cette grille dans son propre tableur et que l'offre gagnante
change lorsque le poids « exploitation » passe de 15 % à 20 %, le comité doit
discuter cette sensibilité au lieu de cacher le choix derrière une décimale.

### 9.4. Faut-il payer une étude ciblée ?

Hypothèses fictives :

- étude ciblée : `3 jours × 900 € = 2 700 €` ;
- reprise tardive évitable si l’hypothèse est fausse : `9 jours × 900 € + 4 000 € de migration = 12 100 €`.

Si l’étude éliminait entièrement le risque, son seuil de rentabilité serait :

`2 700 / 12 100 = 22,3 %`

Mais une étude n’élimine presque jamais tout le risque. La formule plus honnête est :

`(probabilité avant − probabilité après) × perte évitable > coût de l’étude`

#### Sensibilité

| Probabilité avant | Probabilité après | Réduction de risque | Perte attendue évitée | Solde après étude |
| ----------------: | ----------------: | ------------------: | --------------------: | ----------------: |
|              30 % |              15 % |           15 points |               1 815 € |            −885 € |
|              40 % |              10 % |           30 points |               3 630 € |            +930 € |
|              70 % |              20 % |           50 points |               6 050 € |          +3 350 € |

La décision ne dépend pas seulement de l’espérance financière : une reprise peut aussi compromettre une échéance ou une obligation. À l’inverse, les probabilités restent des estimations et ne doivent pas être présentées comme mesurées si elles ne le sont pas.

### 9.5. Capacité consacrée à la recette

Hypothèses fictives :

- 30 tests initiaux de 12 minutes : `6 h` ;
- 8 retests de 10 minutes : `1 h 20` ;
- préparation et synthèse : `2 h` ;
- total : `9 h 20`, soit `9,333... h` ;
- valeur de capacité : `55 €/h`.

Montant de capacité interne :

`9,333... × 55 = 513,33 €`

Arrondir à **environ 513 €**, sans laisser croire qu’une recette complète de tout SaaS coûte ce montant. Le volume doit être calculé à partir des risques et du périmètre réels.

### 9.6. Comparaison avec un pilote manuel

Un pilote manuel n’est pas une quatrième offre équivalente aux trois constructions. Il produit une preuve différente.

Exemple fictif :

- 8 h par mois pendant 6 mois à 55 €/h : `2 640 €` de capacité ;
- outils et formulaires : `600 €` ;
- total renseigné : `3 240 €`.

Ce scénario ne livre pas un SaaS industrialisé. Il peut être préférable si le risque principal concerne encore la demande, le processus ou l’acceptation du parcours. Le mettre dans un tableau séparé évite de comparer des résultats incompatibles.

## 10. Les critères d’acceptation qui font réellement varier le risque

Le guide public ne doit pas contenir une bibliothèque infinie. Il doit montrer un exemple représentatif par famille et fournir la bibliothèque dans l’actif autonome.

| Risque                 | Critère d’acceptation exemple                                                                 | Preuve                                                   |
| ---------------------- | --------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| Mélange de clients     | Un utilisateur Atelier Nord ne lit, ne modifie ni ne devine une ressource Studio Rivage       | Tests positifs et négatifs automatisés + test de recette |
| Doublon de paiement    | Deux réceptions du même événement n’accordent qu’un droit et ne créent qu’une écriture métier | Journal de test et rapprochement                         |
| Événement hors ordre   | Le droit final correspond à l’état de référence après réception désordonnée                   | Scénario d’intégration rejoué                            |
| Export incomplet       | Export documenté, comptages rapprochés, relations conservées et données d’un seul tenant      | Échantillon + nombres de lignes + contrôle métier        |
| Restauration illusoire | Un environnement isolé est restauré à partir d’une sauvegarde selon le scénario convenu       | Procès-verbal de restauration                            |
| Droit persistant       | Le départ d’un utilisateur retire les accès et invalide les sessions selon la politique       | Test de cycle de vie                                     |
| Alerte inutile         | Chaque alerte de sévérité haute a un propriétaire et une action                               | Exercice d’incident                                      |
| Import partiel         | Les lignes invalides sont identifiées sans dupliquer les lignes valides lors d’une reprise    | Fichier de test et rapport                               |
| Accessibilité          | Les parcours clés sont testés selon le référentiel et le périmètre retenus                    | Rapport et liste d’écarts                                |
| Retour arrière         | Une mise en production échouée peut être annulée sans incohérence définie                     | Exercice contrôlé                                        |

## 11. Actif autonome — piste de classeur abandonnée

> **Décision de livraison du 24 juillet 2026.** La proposition de classeur
> Excel décrite ci-dessous était une piste de recherche, pas une promesse
> publique. Elle a été abandonnée au profit de la trame, de l'exemple rempli et
> du comparatif réellement livrés en fichiers Markdown. Le format `.md` est un
> document texte ouvrable dans un éditeur et copiable dans Word, Google Docs ou
> Notion. Le choix évite de revendiquer un `.xlsx` ou un PDF non construit et
> non contrôlé. La liste d'onglets est conservée comme trace du raisonnement,
> pas comme backlog encore ouvert.

### 11.1. Format initialement envisagé, non retenu

Proposer sans barrière d’e-mail :

- un classeur `.xlsx` pour calculs, filtres et responsables ;
- une version `.pdf` imprimable ;
- éventuellement des exports `.csv` des tableaux de comparaison et de recette ;
- un exemple DossierClair entièrement rempli ;
- une copie vierge ;
- un mode d’emploi d’une page.

Ces fichiers n'ont pas été construits et le guide ne les promet pas. Le
livrable retenu est le document Markdown généré localement dans le navigateur,
avec un exemple rempli et un comparatif exportable.

### 11.2. Onglets de la piste de classeur, conservés comme historique

1. **Mode d’emploi**
   - ordre conseillé ;
   - définitions ;
   - avertissements ;
   - légende des preuves ;
   - version.
2. **Décision go/no-go**
   - problème observé ;
   - alternatives ;
   - hypothèse risquée ;
   - expérience ;
   - budget d’apprentissage ;
   - décision et date.
3. **Résumé dirigeant**
   - objectif ;
   - utilisateurs ;
   - résultat ;
   - non-objectifs ;
   - contraintes ;
   - propriétaire ;
   - métriques.
4. **Rôles et droits**
   - tenant ;
   - rôle ;
   - ressource ;
   - lire/créer/modifier/supprimer/exporter ;
   - validation ;
   - retrait ;
   - preuve de test.
5. **Parcours**
   - déclencheur ;
   - acteur ;
   - scénario ;
   - règle ;
   - erreur ;
   - reprise ;
   - donnée ;
   - critère ;
   - priorité.
6. **Données**
   - objet ;
   - propriétaire ;
   - source ;
   - sensibilité ;
   - validation ;
   - conservation ;
   - accès ;
   - export ;
   - migration.
7. **Intégrations**
   - système ;
   - flux ;
   - événement ;
   - authentification ;
   - doublon ;
   - ordre ;
   - délai ;
   - reprise ;
   - alerte ;
   - coût ;
   - propriétaire.
8. **Qualité et exploitation**
   - caractéristique ;
   - contexte ;
   - indicateur ;
   - cible ;
   - test ;
   - fréquence ;
   - propriétaire ;
   - engagement.
9. **Sécurité et RGPD**
   - risque ;
   - exigence ;
   - source/version ;
   - responsabilité ;
   - preuve ;
   - spécialiste requis ;
   - statut.
10. **Facturation**
    - événement métier ;
    - état de facture ;
    - état de paiement ;
    - état d’abonnement ;
    - droit d’accès ;
    - erreur/reprise ;
    - preuve.
11. **Migration**
    - source ;
    - volume ;
    - qualité ;
    - mapping ;
    - transformation ;
    - contrôle ;
    - bascule ;
    - retour ;
    - valideur.
12. **Recette**
    - identifiant ;
    - risque ;
    - précondition ;
    - données ;
    - action ;
    - résultat ;
    - preuve ;
    - sévérité ;
    - responsable ;
    - statut.
13. **Budget 24 mois**
    - postes communs ;
    - offres ;
    - inclus/exclus ;
    - unité ;
    - hypothèse ;
    - indexation ;
    - inconnu ;
    - coût renseigné.
14. **Comparaison des offres**
    - critère ;
    - poids ;
    - preuve ;
    - note ;
    - commentaire ;
    - score automatique ;
    - sensibilité.
15. **Hypothèses et décisions**
    - hypothèse ;
    - impact ;
    - test ;
    - responsable ;
    - échéance ;
    - résultat ;
    - décision.
16. **Changements**
    - version ;
    - changement ;
    - motif ;
    - impact ;
    - options ;
    - décideur ;
    - date.
17. **Sortie**
    - actif ;
    - format ;
    - propriétaire ;
    - accès ;
    - délai ;
    - coût ;
    - test ;
    - restitution/suppression.
18. **Mesure 30/90 jours**
    - métrique ;
    - référence ;
    - cible ;
    - source ;
    - fréquence ;
    - responsable ;
    - résultat ;
    - action.

### 11.3. Contrôles qui auraient été requis pour cette piste

- sommes automatiques sans cellules masquées déterminantes ;
- alerte lorsque les poids ne totalisent pas 100 % ;
- distinction entre `0`, `inclus`, `exclu`, `inconnu` et `à confirmer` ;
- aucune cellule vide transformée en coût nul ;
- listes de choix limitées, mais modifiables ;
- absence de macros ;
- exemples identifiés comme fictifs ;
- unités visibles ;
- formule de score documentée ;
- test de sensibilité ;
- impression lisible ;
- compatibilité avec Excel et, si possible, import dans un tableur courant ;
- contrôle visuel des versions PDF et XLSX.

## 12. Mesure après lancement

Le guide doit ajouter une petite boucle de décision :

### À 30 jours

- les utilisateurs arrivent-ils à terminer les parcours critiques ?
- quelles étapes nécessitent encore une intervention hors outil ?
- quelles erreurs et demandes de support reviennent ?
- les droits et journaux donnent-ils les preuves attendues ?
- les métriques sont-elles correctement collectées ?

### À 90 jours

- le problème mesuré au départ s’est-il amélioré ?
- le coût d’exploitation est-il conforme à l’hypothèse ?
- quels utilisateurs ou tenants n’adoptent pas le service ?
- les exceptions révèlent-elles un mauvais processus ou une fonction manquante ?
- faut-il poursuivre, corriger, réduire ou arrêter ?

### Métriques possibles, à choisir selon le cas

- taux de parcours terminé ;
- temps actif métier ;
- taux de retour ou de reprise ;
- délai jusqu’à première valeur ;
- activation par tenant ;
- nombre d’incidents et temps de rétablissement ;
- volume de support par tenant ;
- coût d’infrastructure par tenant ;
- taux d’échec de paiement récupéré ;
- proportion de traitements manuels ;
- réussite des restaurations ;
- export réalisé sans assistance.

Le guide ne doit pas imposer un tableau de bord universel. Selon le [GOV.UK Service Manual](https://www.gov.uk/service-manual/measuring-success), les mesures doivent être reliées au résultat du service. Le [Google SRE Book](https://sre.google/sre-book/service-level-objectives/) conseille de choisir un petit nombre d’indicateurs importants pour l’utilisateur plutôt que de transformer chaque mesure disponible en objectif.

## 13. Quand appeler un spécialiste

Le guide doit indiquer clairement les seuils d’escalade.

| Situation                                                                                 | Spécialiste à mobiliser                                                                                                      |
| ----------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Données de santé, biométriques, infractions, surveillance ou risque élevé                 | DPO/juriste et sécurité ; analyser notamment la nécessité d’une analyse d’impact relative à la protection des données (AIPD) |
| Vente multi-pays, TVA complexe, marketplace, avoirs ou facturation pour compte de tiers   | Expert-comptable/fiscaliste                                                                                                  |
| Cession de droits, licences tierces, open source, marque ou sous-traitance en chaîne      | Avocat en propriété intellectuelle/contrats                                                                                  |
| Authentification sensible, données critiques, menace élevée ou exigences client formelles | Responsable sécurité, audit ou test indépendant                                                                              |
| Service concerné par une obligation d’accessibilité                                       | Expert accessibilité et conseil juridique sur le périmètre                                                                   |
| Migration volumineuse ou système historique mal documenté                                 | Spécialiste données/migration                                                                                                |
| Engagement de disponibilité ou pénalités significatives                                   | Architecte/exploitant + conseil contractuel                                                                                  |
| Secteur régulé                                                                            | Conseil métier et réglementaire propre au secteur                                                                            |

## 14. Contre-cas et objections loyales

### « Un cahier des charges bloque l’agilité »

Un document qui prétend figer chaque écran avant tout apprentissage peut effectivement nuire. Le remède n’est pas l’absence de décisions : il faut fixer objectifs, contraintes, risques, critères et responsabilités, tout en versionnant les hypothèses et les changements.

### « Mon prestataire est compétent, je peux lui faire confiance »

La confiance n’empêche pas les ambiguïtés. Un document partagé protège les deux parties : il permet au prestataire de chiffrer honnêtement et au commanditaire d’arbitrer rapidement.

### « Je veux seulement un prix »

Un prix sans périmètre comparable n’aide pas à décider. Deux offres peuvent employer le même mot « maintenance » et couvrir des réalités opposées. La consultation doit rendre visibles les inclusions, exclusions et inconnues.

### « Je n’ai pas le temps de préparer tout cela »

Le guide doit proposer une version courte : page dirigeant, cinq parcours, rôles, risques, données, critères et coûts. Les sections approfondies sont ensuite activées selon le risque. La préparation interne fictive de 21 heures sert à montrer l’ordre de grandeur de l’effort dans le cas DossierClair, pas à établir une norme.

### « Je peux demander à l’IA de générer le cahier des charges »

L’IA peut reformuler, détecter des incohérences et proposer des scénarios. Elle ne connaît pas le processus réel, ne possède pas les arbitrages du dirigeant et peut inventer obligations, chiffres ou certitudes. Toute sortie doit être reliée à une observation, un propriétaire et une validation.

### « Plus le document est précis, plus le devis sera sûr »

La précision aide seulement si elle porte sur des faits et décisions. Une précision inventée — volumes, durée de conservation, compatibilité ou taux d’usage — crée une fausse certitude. Les inconnues doivent rester visibles.

## 15. Positionnement Hagnéré Code

Le guide doit montrer la méthode de travail sans transformer chaque section en argument commercial.

### Ce que l’expertise peut légitimement démontrer

- traduire un problème métier en décisions vérifiables ;
- challenger la nécessité de construire ;
- concevoir un périmètre pilotable ;
- rendre comparables architecture, exploitation et coût ;
- traiter les échecs, la réversibilité et l’après-livraison ;
- dire ce qui reste inconnu ;
- orienter vers un spécialiste lorsque le sujet dépasse le développement.

### Ce qu’il ne faut pas vendre

- une estimation instantanée présentée comme fiable ;
- une conformité juridique ou sécurité automatique ;
- une promesse de délai sans découverte du contexte ;
- un transfert de droits non qualifié ;
- un engagement de classement Google ;
- un forfait artificiellement précis sur un produit non validé.

### CTA recommandé

> Vous avez déjà une idée, un document ou plusieurs devis ? Envoyez le périmètre que vous avez, même imparfait. Hagnéré Code peut vous aider à identifier les décisions manquantes, isoler les inconnues qui changent le prix et préparer une consultation comparable. Si le sur-mesure n’est pas la bonne première étape, le diagnostic doit aussi pouvoir le conclure.

Le CTA doit apparaître après que le lecteur a obtenu une action autonome, pas avant.

## 16. Anti-cannibalisation et maillage

Le guide `cahier-des-charges-saas` reste la page maîtresse pour **structurer le document et la décision de consultation**. Les pages suivantes approfondissent un sous-problème.

| Besoin du lecteur                    | Guide cible existant                             | Ce qui reste ici                                        | Ce qui part vers le guide spécialisé                  |
| ------------------------------------ | ------------------------------------------------ | ------------------------------------------------------- | ----------------------------------------------------- |
| Vérifier si l’idée mérite un produit | `/guides/valider-idee-saas-avant-developper`     | Arbre go/no-go et hypothèse critique                    | Recherche de demande, expériences de validation       |
| Définir la première version          | `/guides/mvp-saas-quoi-inclure`                  | Non-objectifs et périmètre du cahier                    | Méthode détaillée de périmètre MVP                    |
| Arbitrer les fonctions               | `/guides/prioriser-fonctionnalites-mvp-saas`     | Lien entre risque, priorité et critère                  | Méthodes de priorisation                              |
| Estimer l’investissement             | `/guides/combien-coute-un-saas`                  | Coûts renseignés et comparaison d’offres                | Fourchettes, facteurs de prix et scénarios détaillés  |
| Décrire les abonnements              | `/guides/facturation-abonnements-saas`           | États et exigences minimales                            | Paiement, factures, prorata et récupération détaillés |
| Cadrer la cybersécurité              | `/guides/securite-saas-b2b`                      | Risques, responsabilités et preuves attendues           | Mesures et architecture de sécurité approfondies      |
| Cadrer le RGPD                       | `/guides/rgpd-saas-b2b`                          | Catégories, rôles, durées et escalade                   | Analyse RGPD détaillée                                |
| Organiser la maintenance             | `/guides/contrat-tma-application`                | Exploitation, support et responsabilités attendues      | Construction et négociation du contrat de TMA         |
| Cadrer une application interne       | `/guides/cahier-des-charges-application-metier`  | Différences SaaS : tenants, abonnement, service continu | Cas d’un outil métier interne                         |
| Choisir un prestataire               | `/guides/choisir-prestataire-application-metier` | Grille liée au cahier des charges                       | Due diligence et sélection plus large                 |

Ne pas créer de lien vers `/guides/architecture-multitenant-saas` tant que cette page n’existe pas.

## 17. Champ lexical à couvrir naturellement

Les termes doivent servir une décision et être définis à leur première utilisation.

### Décision et produit

problème métier, hypothèse, résultat, utilisateur, commanditaire, sponsor, responsable produit, périmètre, non-objectif, pilote, MVP, preuve, go/no-go, arbitrage, dépendance, contrainte.

### Exigences

besoin, règle métier, user story, cas d’usage, parcours, exception, critère d’acceptation, exigence fonctionnelle, exigence non fonctionnelle, priorité, traçabilité, version.

### SaaS

tenant, espace client, organisation, utilisateur, rôle, habilitation, abonnement, essai, prorata, échéance, facture, paiement, résiliation, export, isolation, onboarding.

### Données et intégrations

objet métier, source, qualité, mapping, import, export, API, webhook, événement, idempotence, doublon, rapprochement, quota, temporisation, reprise.

### Exploitation

disponibilité, indicateur, objectif de service, engagement, surveillance, alerte, incident, sauvegarde, restauration, perte maximale de données, temps de reprise, mode dégradé, retour arrière.

### Contrat et économie

devis, forfait, régie, coûts renseignés, coût total de possession, inclusion, exclusion, hypothèse, inconnu, réversibilité, transition, cession, licence, maintenance, assistance.

Éviter d’accumuler ces termes dans des phrases artificielles. L’objectif n’est pas la densité lexicale, mais la couverture sémantique obtenue par des décisions réellement expliquées.

## 18. Plan de réécriture public recommandé

La structure doit paraître naturelle, pas issue d’un gabarit mécanique.

1. **Vous cherchez un cahier des charges ; commencez par la décision qu’il doit sécuriser**
   - promesse humaine ;
   - ce que le document permet ;
   - mini-verdict.
2. **Avant d’écrire : faut-il vraiment construire ce SaaS ?**
   - cinq options ;
   - arbre go/no-go ;
   - contre-cas.
3. **La page que votre direction et vos prestataires doivent comprendre**
   - résumé dirigeant DossierClair ;
   - objectifs, non-objectifs, preuve, propriétaire.
4. **Décrivez le travail réel, pas un catalogue d’écrans**
   - acteurs ;
   - parcours ;
   - règles ;
   - échecs.
5. **Empêchez les ambiguïtés qui coûtent cher**
   - tenants ;
   - rôles ;
   - données ;
   - intégrations ;
   - facturation.
6. **Dites ce que “fonctionner” veut dire**
   - performance ;
   - disponibilité ;
   - sauvegarde ;
   - accessibilité ;
   - sécurité ;
   - exemples testables.
7. **Préparez le jour de la mise en service et le jour de la sortie**
   - migration ;
   - recette ;
   - exploitation ;
   - double réversibilité.
8. **Comparez trois offres sans vous laisser tromper par le total**
   - tableau 24 mois ;
   - inconnues ;
   - grille pondérée ;
   - sensibilité.
9. **Décidez ce qui peut changer et qui tranche**
   - responsabilités ;
   - versions ;
   - hypothèses ;
   - changements.
10. **Mesurez ce qui s’est vraiment amélioré après 30 et 90 jours**
    - baseline ;
    - métriques ;
    - règle d’arrêt.
11. **Copiez le modèle complet**
    - aperçu de l’actif ;
    - téléchargement libre ;
    - mode court et mode complet.
12. **Faites relire les points qui engagent l’entreprise**
    - escalades ;
    - CTA discret et utile.

### Variations de rythme

- commencer par une situation vécue ;
- alterner paragraphes courts, tableaux de décision, exemples et objections ;
- limiter les listes qui n’apportent qu’une nomenclature ;
- placer les définitions dans la phrase, pas dans un glossaire détaché ;
- utiliser DossierClair pour montrer les conséquences d’un choix ;
- conclure chaque grande section par une action concrète ;
- ne pas répéter la même structure « problème / solution / conseil » à chaque chapitre.

## 19. Brief de réécriture prêt à exécuter

### 19.1. Ouverture

- Interpeller le dirigeant sur trois besoins : expliquer, comparer, éviter les coûts tardifs.
- Définir le cahier des charges comme un document de décision et de preuve.
- Annoncer immédiatement le modèle et l’exemple.
- Donner le verdict : vérifier le sur-mesure avant de détailler les fonctions.

### 19.2. Cas filé

- Conserver DossierClair du début à la fin.
- Utiliser exactement les hypothèses du présent dossier, sauf modification explicitement recalculée.
- Marquer chaque chiffre fictif.
- Ne pas inventer de résultat réel ou de client Hagnéré Code.

### 19.3. Pédagogie

- Une idée principale par paragraphe.
- Un terme technique seulement lorsqu’il résout une ambiguïté.
- Une définition concrète et un exemple au premier usage.
- Une opinion, puis sa justification et sa limite.
- Une objection loyale lorsqu’un choix n’est pas universel.

### 19.4. Preuves

- Sources primaires pour loi, standard, calendrier et comportement de produit.
- Version et date lorsque le référentiel évolue.
- Source commerciale uniquement pour analyser l’attente éditoriale.
- Aucun pourcentage de gain sans étude applicable.
- Aucune fourchette de prix présentée comme marché sans recherche dédiée.

### 19.5. Conversion

- Donner d’abord l’actif autonome.
- CTA orienté revue de document ou comparaison d’offres.
- Autoriser le diagnostic à conclure « ne construisez pas encore ».
- Ne pas interrompre chaque section par un bouton commercial.

### 19.6. Contrôle anti-IA

- supprimer les introductions génériques ;
- supprimer les répétitions de synonymes ;
- vérifier qu’aucune section ne pourrait s’appliquer sans modification à n’importe quel sujet ;
- remplacer les superlatifs par une preuve ;
- traquer les symétries trop parfaites ;
- lire à voix haute les trois premières phrases de chaque section ;
- vérifier que le lecteur sait quoi faire après chaque chapitre ;
- tester les tableaux sur mobile et éviter les colonnes inutiles ;
- contrôler que le cas reste cohérent ;
- revalider tous les liens et toutes les dates volatiles avant publication.

## 20. Matrice des exigences de réécriture

### P0 — indispensables avant publication

- [ ] Ouvrir sur la décision du dirigeant et non sur la définition d’un document.
- [ ] Ajouter l’arbre construire/acheter/assembler/tester/arrêter.
- [ ] Ajouter la référence métier DossierClair et les objectifs à 90 jours.
- [ ] Employer `coûts renseignés sur 24 mois` tant que le TCO n’est pas complet.
- [ ] Afficher les inconnues et exclusions des trois offres.
- [ ] Corriger le calcul de risque avec réduction de probabilité, pas probabilité brute seulement.
- [ ] Ajouter version, hypothèses, changements et responsabilités.
- [ ] Ajouter migration, retour arrière et test négatif.
- [ ] Séparer sortie client et sortie prestataire.
- [ ] Fournir l’actif autonome construit et vérifié, ou retirer toute promesse de téléchargement.
- [ ] Conserver uniquement des liens vers des guides existants.
- [ ] Vérifier dates, versions et portée juridique.
- [ ] Réaliser une lecture humaine complète après intégration.

### P1 — très forte valeur

- [ ] Ajouter un test de sensibilité de la grille.
- [ ] Relier chaque exigence importante à une preuve et un propriétaire.
- [ ] Ajouter la boucle 30/90 jours.
- [ ] Illustrer un événement Stripe dupliqué ou hors ordre.
- [ ] Ajouter les seuils d’escalade vers un spécialiste.
- [ ] Montrer le pilote manuel comme alternative non équivalente.
- [ ] Rendre le tableau des exigences lisible sur mobile.
- [ ] Ajouter des ancres de navigation vers les grandes décisions.

### P2 — enrichissements possibles

- [ ] Version imprimable courte en deux pages.
- [ ] Exemple d’e-mail d’envoi aux prestataires.
- [ ] Exemple de journal de questions/réponses pendant la consultation.
- [ ] Exemple d’ordre du jour pour soutenance de 60 minutes.
- [ ] Données structurées adaptées au guide et au téléchargement, uniquement si visibles et exactes.

## 21. Registre de preuves primaires et techniques

| Source                                                                                                                                                     | Type                         | Ce qu’elle permet d’étayer                                            | Limite ou vigilance                                                | Contrôle   |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | --------------------------------------------------------------------- | ------------------------------------------------------------------ | ---------- |
| [GOV.UK — How the discovery phase works](https://www.gov.uk/service-manual/agile-delivery/how-the-discovery-phase-works)                                   | Gouvernement UK              | Comprendre problème, utilisateurs, contraintes ; accepter l’arrêt     | Durée gouvernementale non transposable telle quelle                | 24/07/2026 |
| [GOV.UK — Writing user stories](https://www.gov.uk/service-manual/agile-delivery/writing-user-stories)                                                     | Gouvernement UK              | Acteur, besoin, résultat, critères d’acceptation                      | Une story ne couvre pas toutes les règles                          | 24/07/2026 |
| [GOV.UK — Service Standard](https://www.gov.uk/service-manual/service-standard)                                                                            | Gouvernement UK              | Problème entier, équipe, itération, sécurité, métriques, fiabilité    | Standard de service public                                         | 24/07/2026 |
| [GOV.UK — Measuring success](https://www.gov.uk/service-manual/measuring-success)                                                                          | Gouvernement UK              | Relier mesures et résultats                                           | Adapter les métriques au SaaS B2B                                  | 24/07/2026 |
| [U.S. Digital Services Playbook](https://playbook.usds.gov/)                                                                                               | Gouvernement US              | Utilisateurs, contrats, responsable, tests, données, transition       | Contexte achat public américain                                    | 24/07/2026 |
| [Canada Digital Standards](https://www.canada.ca/en/government/system/digital-government/government-canada-digital-standards.html)                         | Gouvernement Canada          | Co-conception, itération, ouverture, sécurité, accessibilité, données | Contexte services publics                                          | 24/07/2026 |
| [Australia Digital Service Standard](https://www.digital.gov.au/policy/digital-experience/digital-service-standard)                                        | Gouvernement Australie       | Intention, utilisateurs, inclusion, connexion, confiance, suivi       | Contexte services publics                                          | 24/07/2026 |
| [ISO/IEC 25010:2023](https://www.iso.org/standard/78176.html)                                                                                              | Norme                        | Modèle de qualité produit, neuf caractéristiques                      | Texte complet payant ; ne pas inventer son contenu détaillé        | 24/07/2026 |
| [ISO/IEC/IEEE 29148:2018](https://www.iso.org/standard/72089.html)                                                                                         | Norme                        | Ingénierie et contenu des exigences                                   | Confirmée en 2024 mais annoncée en révision ; texte complet payant | 24/07/2026 |
| [OpenAPI Specification 3.2.0](https://spec.openapis.org/oas/latest.html)                                                                                   | Standard ouvert              | Contrat de description d’API HTTP                                     | Ne couvre pas toutes les règles ni les SLO                         | 24/07/2026 |
| [RFC 9457 — Problem Details for HTTP APIs](https://datatracker.ietf.org/doc/html/rfc9457)                                                                  | IETF                         | Format d’erreur interopérable                                         | Choix d’implémentation, pas besoin universel                       | 24/07/2026 |
| [NIST SSDF 1.1](https://csrc.nist.gov/pubs/sp/800/218/final)                                                                                               | Gouvernement US              | Pratiques de développement sécurisé                                   | 1.2 encore en projet au contrôle                                   | 24/07/2026 |
| [NIST — SSDF publications](https://csrc.nist.gov/Projects/ssdf/publications)                                                                               | Gouvernement US              | Statut des versions 1.1/1.2                                           | Revalider avant publication                                        | 24/07/2026 |
| [OWASP ASVS](https://owasp.org/www-project-application-security-verification-standard/)                                                                    | Fondation technique          | Exigences de sécurité vérifiables, version 5.0.0                      | Pas une certification automatique                                  | 24/07/2026 |
| [CNIL — Guide de la sécurité](https://www.cnil.fr/fr/guide-de-la-securite-des-donnees-personnelles)                                                        | Autorité française           | Sécurité du cycle de vie, données, droits, incidents, sauvegarde      | Adapter au risque du traitement                                    | 24/07/2026 |
| [CNIL — Gérer la sous-traitance](https://www.cnil.fr/fr/securite-gerer-la-sous-traitance)                                                                  | Autorité française           | Garanties, contrat article 28, contrôle                               | Ne remplace pas l’analyse des rôles                                | 24/07/2026 |
| [CNIL — Gérer les habilitations](https://www.cnil.fr/fr/securite-gerer-les-habilitations)                                                                  | Autorité française           | Moindre privilège, validation, revue, retrait                         | Traduire en tests de cycle de vie                                  | 24/07/2026 |
| [CNIL — Sauvegarder](https://cnil.fr/fr/securite-sauvegarder)                                                                                              | Autorité française           | Sauvegardes protégées et restauration testée                          | RPO/RTO à décider selon le métier                                  | 24/07/2026 |
| [RGPD — règlement 2016/679](https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng)                                                                             | Droit UE                     | Articles 25, 28, 32 et obligations applicables                        | Analyse juridique du traitement nécessaire                         | 24/07/2026 |
| [EDPB — Guidelines 07/2020](https://www.edpb.europa.eu/documents/guideline/guidelines-072020-on-the-concepts-of-controller-and-processor-in-the-gdpr_en)   | Autorité UE                  | Rôles responsable/sous-traitant, version finale du 07/07/2021         | Rôles déterminés par les faits                                     | 24/07/2026 |
| [WCAG 2.2](https://www.w3.org/TR/WCAG22/)                                                                                                                  | Standard W3C                 | Critères d’accessibilité testables                                    | Obligation juridique à analyser séparément                         | 24/07/2026 |
| [RGAA 4.1.2](https://accessibilite.numerique.gouv.fr/)                                                                                                     | Référentiel français         | Méthode et critères français                                          | Vérifier entité et service concernés                               | 24/07/2026 |
| [European Accessibility Act — synthèse](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=legissum%3A4403933)                                            | Droit UE                     | Catégories et application depuis 28/06/2025                           | Tous les SaaS ne sont pas couverts de la même manière              | 24/07/2026 |
| [CPI, art. L. 131-3](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958)                                                                 | Droit français               | Droits cédés distincts et domaine délimité                            | Faire rédiger/relire la clause                                     | 24/07/2026 |
| [Commission européenne — Data Act explained](https://digital-strategy.ec.europa.eu/en/factpages/data-act-explained)                                        | Commission UE                | Application, changement de fournisseur, données                       | Vérifier le champ et les exceptions                                | 24/07/2026 |
| [Data Act — règlement 2023/2854](https://eur-lex.europa.eu/eli/reg/2023/2854/oj/eng)                                                                       | Droit UE                     | Texte opposable et calendrier                                         | Lecture juridique nécessaire                                       | 24/07/2026 |
| [Ministère de l’Économie — facturation électronique](https://www.economie.gouv.fr/tout-savoir-sur-la-facturation-electronique-pour-les-entreprises)        | Gouvernement français        | Calendrier 2026/2027 et fonctionnement général                        | Veille fiscale et cas particulier à maintenir                      | 24/07/2026 |
| [AIFE — facturation électronique B2B](https://aife.economie.gouv.fr/nos-applications/facturation-electronique-b2b/)                                        | Administration française     | Cadre opérationnel français                                           | Ne remplace pas le conseil fiscal                                  | 24/07/2026 |
| [Azure — multitenancy checklist](https://learn.microsoft.com/en-us/azure/architecture/guide/multitenant/checklist)                                         | Documentation d’architecture | Isolation, SLO, coût par tenant, cycle de vie, tests                  | Documentation éditeur, indépendante du choix cloud dans le guide   | 24/07/2026 |
| [Azure — tenancy models](https://learn.microsoft.com/en-us/azure/architecture/guide/multitenant/considerations/tenancy-models)                             | Documentation d’architecture | Choix d’isolation et compromis                                        | Ne pas imposer Azure                                               | 24/07/2026 |
| [Azure — deployment/configuration multitenant](https://learn.microsoft.com/en-us/azure/architecture/guide/multitenant/approaches/deployment-configuration) | Documentation d’architecture | Onboarding, déploiement, isolation et échelle                         | Adapter aux volumes réels                                          | 24/07/2026 |
| [AWS SaaS Lens — operate](https://docs.aws.amazon.com/wellarchitected/latest/saas-lens/operate.html)                                                       | Documentation d’architecture | Suivi par tenant, onboarding, opérations                              | Ne pas imposer AWS                                                 | 24/07/2026 |
| [AWS SaaS Lens — design principles](https://docs.aws.amazon.com/wellarchitected/latest/saas-lens/general-design-principles.html)                           | Documentation d’architecture | Principes de conception SaaS                                          | Adapter au contexte                                                | 24/07/2026 |
| [Google SRE — Service Level Objectives](https://sre.google/sre-book/service-level-objectives/)                                                             | Référence d’ingénierie       | SLI/SLO/SLA et métriques utiles                                       | Ne pas sur-industrialiser un petit pilote                          | 24/07/2026 |
| [AWS — Disaster recovery](https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/plan-for-disaster-recovery-dr.html)                        | Documentation d’architecture | RPO/RTO, plan et exercices                                            | Principes, pas prescription fournisseur                            | 24/07/2026 |
| [AWS — Operate](https://docs.aws.amazon.com/wellarchitected/latest/operational-excellence-pillar/operate.html)                                             | Documentation d’architecture | Baselines, alertes, propriétaires, résultats métier                   | Adapter la profondeur                                              | 24/07/2026 |
| [Azure — Retry Storm antipattern](https://learn.microsoft.com/en-us/azure/architecture/antipatterns/retry-storm/)                                          | Documentation d’architecture | Risque de nouvelles tentatives incontrôlées                           | Exemple technique à vulgariser                                     | 24/07/2026 |
| [Azure — Asynchronous Request-Reply](https://learn.microsoft.com/en-us/azure/architecture/patterns/asynchronous-request-reply)                             | Documentation d’architecture | Statuts asynchrones, idempotence, annulation                          | Un pattern parmi plusieurs                                         | 24/07/2026 |
| [Azure — Transient fault handling](https://learn.microsoft.com/en-us/azure/architecture/best-practices/transient-faults)                                   | Documentation d’architecture | Temporisation et budget de nouvelles tentatives                       | Ne pas transformer en architecture imposée                         | 24/07/2026 |
| [Stripe — Webhooks](https://docs.stripe.com/webhooks?lang=node)                                                                                            | Documentation produit        | Signature, doublons, ordre non garanti, traitement asynchrone         | Exemple Stripe, principes à généraliser prudemment                 | 24/07/2026 |
| [Stripe — Subscription webhooks](https://docs.stripe.com/billing/subscriptions/webhooks)                                                                   | Documentation produit        | États asynchrones de facturation et abonnement                        | Règles fiscales à traiter ailleurs                                 | 24/07/2026 |
| [Stripe — Subscription lifecycle](https://docs.stripe.com/billing/subscriptions/overview?locale=en-GB)                                                     | Documentation produit        | Distinction facture, paiement, abonnement                             | Dépend de la configuration                                         | 24/07/2026 |
| [Azure — Plan a migration](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/migrate/plan-migration)                                        | Documentation d’architecture | Dépendances, séquence, retour, critères                               | Méthode cloud à adapter                                            | 24/07/2026 |
| [Azure — Execute a migration](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/migrate/execute-migration)                                  | Documentation d’architecture | Rapprochement, validation et surveillance                             | Délais indicatifs non universels                                   | 24/07/2026 |

## 22. Sources secondaires de concurrence

Ces sources servent exclusivement à comprendre l’offre éditoriale et les attentes de format. Elles ne prouvent aucune obligation ni performance.

- [Digital Unicorn — modèle de cahier des charges SaaS](https://digitalunicorn.fr/modele-de-cahier-des-charges-saas/)
- [Yield Studio — modèle de cahier des charges logiciel](https://www.yieldstudio.fr/blog/modele-de-cahier-des-charges-pour-la-creation-dun-logiciel)
- [Nocode Factory — cahier des charges logiciel](https://www.nocodefactory.fr/blog/cahier-des-charges-logiciel)
- [ARDN tech — cahier des charges SaaS sur mesure](https://ardn.tech/fr-fr/blog/saas/cahier-des-charges-saas-sur-mesure-exemple)
- [Coutsite — modèle de cahier des charges](https://www.coutsite.fr/modele-cahier-des-charges)
- [Atlassian — product requirements template](https://www.atlassian.com/software/confluence/templates/product-requirements)
- [Smartsheet — product requirements templates](https://www.smartsheet.com/content/free-product-requirements-document-template)
- [Asana — software requirement document template](https://asana.com/resources/software-requirement-document-template)
- [MakeMyPRD — SaaS PRD template](https://www.makemyprd.com/templates/prd-template-for-saas)

## 23. Vérifications calculatoires

Résultats attendus pour le contrôle automatisé :

```text
Préparation interne : 8×75 + 6×45 + 3×60 + 4×50 = 1 250
Offre A : 45 000 + 12 000 + 36 000 + 18 000 + 4 200 + 8 000 = 123 200
Offre B : 62 000 + 30 000 + 12 000 + 2 700 + 5 000 = 111 700
Offre C : 8 000 + 52 000 + 4 000 + 33 600 + 14 000 + 3 300 + 6 000 = 120 900
Score A : 6,95
Score B : 8,45
Score C : 7,80
Perte évitable : 9×900 + 4 000 = 12 100
Seuil théorique si élimination totale : 2 700 / 12 100 = 22,314... %
Réduction 15 points : 0,15×12 100 = 1 815 ; solde = −885
Réduction 30 points : 0,30×12 100 = 3 630 ; solde = +930
Réduction 50 points : 0,50×12 100 = 6 050 ; solde = +3 350
Recette : (30×12 + 8×10) / 60 + 2 = 9,333... h
Capacité recette : 9,333...×55 = 513,333...
Pilote manuel : 8×6×55 + 600 = 3 240
Taux de retour initial : 5 / 24 = 20,833... %
```

### Contrôle des liens

- 53 URL uniques extraites du présent dossier ;
- 49 ont répondu directement avec un statut HTTP `2xx` lors du contrôle automatisé du 24 juillet 2026 ;
- les pages du gouvernement du Canada et du gouvernement australien ont provoqué une erreur de transport HTTP/2 dans `curl`, mais ont été ouvertes et lues dans le navigateur de recherche ;
- les pages du ministère français de l’Économie et de Légifrance ont refusé la requête automatisée avec un statut `403`, puis ont été ouvertes et lues dans le navigateur de recherche ;
- aucun lien cassé n’a été observé ;
- un nouveau contrôle reste obligatoire le jour de la réécriture et avant publication, notamment pour les calendriers, versions et pages commerciales.

## 24. Verdict final de recherche

### Qualité du guide actuel

**Verdict :** bon socle, réécriture premium justifiée.

### Angle gagnant

Faire du cahier des charges un **cahier de décision SaaS** :

- décider avant de construire ;
- écrire ce qui change le résultat, le coût ou le risque ;
- vérifier par des preuves ;
- comparer à périmètre égal ;
- gouverner les changements ;
- mesurer après la livraison ;
- préparer la sortie.

### Différenciation défendable

La combinaison suivante est plus utile que les modèles concurrents observés :

- cas rempli et chiffré ;
- erreurs et tests négatifs ;
- économie de décision avec sensibilité ;
- tenants, facturation, opérations et réversibilité ;
- actif autonome complet ;
- opinions professionnelles nuancées ;
- sources primaires datées ;
- contre-cas où le conseil est de ne pas construire.

### Condition de validation finale

Le guide ne pourra être déclaré « excellent » qu’après :

1. réécriture complète ;
2. contrôle factuel et juridique ciblé ;
3. vérification de tous les calculs ;
4. création et test réel de l’actif autonome ;
5. lecture anti-IA à voix haute ;
6. contrôle du rendu mobile et desktop ;
7. contrôle des liens, métadonnées, données structurées et maillage ;
8. vérification publiée, distincte de l’indexation Google.

Le contenu seul ne garantit pas la première position. Il peut toutefois devenir la meilleure réponse éditoriale disponible si cette exécution est menée sans réduire les décisions à une liste de rubriques.
