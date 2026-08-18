# Audit approfondi — `cahier-des-charges-saas`

Date : 24 juillet 2026

Auditeur concurrentiel : Codex, lot France et international

Contre-auditeur éditorial : agent Codex distinct de l’éditeur, lecture simulée
comme un dirigeant non technique ; aucun test avec une personne réelle n’est
revendiqué.

Snapshot du guide : `src/app/guides/cahier-des-charges-saas/page.tsx`, SHA-256 `b577065d8226bcbcbff8e58102f999b03955029d6d94c8ff49b1593a5cc06da0`

Périmètre : audit éditorial, factuel, décisionnel, SEO et conversion en lecture seule de la page publique. Aucune page, entrée de registre, ressource, donnée structurée, règle de gouvernance ou manifeste n’a été modifié dans ce lot.

> **Contre-audit humain indépendant ajouté le 24 juillet 2026.** La lecture
> froide menée comme un dirigeant non technique ramène la note à **79/100,
> soit 16/20**. Ce verdict remplace les anciennes mentions « publiable » ou
> `19/20` pour le snapshot `b577065…`. La page est solide à lire, mais elle ne
> franchit plus la charte renforcée : le lecteur ne repart ni avec un dossier
> réutilisable, ni avec une comparaison chiffrée des réponses, ni avec un
> protocole complet de décision après signature. Le détail contradictoire,
> les remplacements de phrases et les critères GO figurent au §12.

## 1. Verdict exécutif

```text
Lecteur exact : fondateur, dirigeant de PME ou indépendant qui a validé un besoin SaaS et veut obtenir des devis réellement comparables.
Question réelle : que faut-il décider, écrire et faire tester avant de confier la première version à un prestataire ?
Décision attendue : arrêter, poursuivre un cadrage court ou consulter ; puis choisir une réponse à périmètre, exploitation et horizon identiques.
Réponse actuelle en une phrase : décrivez la vie complète d’une entreprise cliente, de l’achat à l’export, avec exclusions, erreurs, preuves et responsables.
Défaut qui coûte le plus de valeur : le guide spécifie très bien un parcours fictif, mais ne permet pas encore de télécharger le dossier, de chiffrer l’effort, de comparer le coût total des réponses ni de gouverner les changements après signature.
Niveau actuel : B — 79/100, soit 16/20
Priorité : haute
Statut : NO-GO sous la charte renforcée / retour P2, puis nouvelles P3 et P4
```

Le guide est nettement supérieur aux modèles français qui se limitent à une liste de rubriques. DossierClair suit un même client, garde ses exclusions, traverse paiement, droits, action centrale, incident, sauvegarde et sortie, puis transforme chaque choix en preuve de recette. Le texte traduit les termes techniques et attribue les responsabilités. Les réserves juridiques, fiscales, RGPD, accessibilité et sécurité sont sérieuses.

Quatre manques empêchent néanmoins de soutenir que le lecteur n’aura plus besoin d’une autre ressource :

1. **l’exemple n’est pas un livrable autonome** : le titre promet un « exemple complet », mais le lecteur ne peut ni copier un document cohérent, ni télécharger une version remplie, une trame vierge, une matrice de recette ou une grille de réponse des prestataires ;
2. **le coût de la décision reste absent** : aucun temps de préparation, aucun budget de recette, aucun coût total d’exploitation et aucun scénario de découverte tardive ne sont calculés ;
3. **le produit n’a pas de mesure de succès** : DossierClair décrit ce qui fonctionne, mais pas la valeur de départ, l’indicateur métier, la cible, la fréquence de revue et la personne qui décide de poursuivre ;
4. **le document paraît figé après consultation** : les inconnues, hypothèses, changements de périmètre, décisions, impacts et versions de référence ne sont pas gouvernés.

La position professionnelle à assumer est la suivante :

> Un dirigeant ne doit pas rédiger l’architecture du SaaS. Il doit rendre explicites l’acheteur, le parcours vendu, les données, les erreurs, l’exploitation, la sortie et les preuves d’acceptation. Pour une première version simple, un dossier court et rempli vaut mieux qu’un document de cinquante pages. En revanche, nous déconseillons un forfait ferme tant qu’une inconnue peut déplacer fortement le prix, le délai, la conformité ou le coût récurrent : cette inconnue mérite un test ou une étude préalable.

### Score avant correction

| Axe         | Note /10 | Preuve localisable                                                                 | Manque décisif                                                                                       |
| ----------- | -------: | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| Intention   |        9 | Ouverture sur des devis divergents et vie complète d’une entreprise cliente        | Le choix « consulter, tester une inconnue ou attendre » devrait apparaître dès l’ouverture           |
| Décision    |        8 | Exclusions, décisions, preuves et responsables répétés sur tout le parcours        | Pas de décision économique, de dossier prêt à envoyer ni de grille finale de sélection               |
| Pédagogie   |        8 | Exemple fictif constant et plusieurs termes techniques traduits                    | ASVS, WCAG, RGAA, Data Act et réserves juridiques forment deux passages trop denses                  |
| Profondeur  |        7 | Achat, comptes, cœur produit, échecs, exploitation, données, accessibilité, sortie | Aucun temps de préparation, TCO, mesure de succès, changement gouverné ou analyse de sensibilité     |
| Preuve      |        9 | Stripe, CNIL, OWASP, W3C, RGAA, Légifrance et Commission européenne                | Les sources prouvent les exigences, pas les hypothèses économiques ni leur priorité                  |
| Comparaison |        6 | Même parcours et mêmes questions demandés aux prestataires                         | Aucune réponse fictive normalisée, aucun TCO commun, aucune pondération ni cas où chaque offre gagne |
| Originalité |        9 | DossierClair est suivi de bout en bout avec des erreurs et tests concrets          | L’absence de modèle téléchargeable empêche l’exemple de devenir un actif difficile à remplacer       |
| Style       |        8 | Ton humain, ferme, prudent et cohérent                                             | La répétition du bloc décision/exclusion/preuve/responsable et les réserves ralentissent le récit    |
| Conversion  |        7 | CTA de relecture promettant aussi de recommander un retour au cadrage ou au MVP    | Ni outil autonome, ni livrable exact annoncé après le clic, ni mauvais fit assez opérationnel        |
| SEO/produit |        8 | Intention forte, maillage riche, FAQ visible, canonical, Article et BreadcrumbList | Promesse « exemple complet » non matérialisée en ressource ; couverture faible du TCO/changement     |

Total : **79/100**, soit **15,8/20 arrondi à 16/20**.

Le guide est utile, mais **non publiable selon la charte renforcée** : il reste
sous 90/100, quatre axes sont sous 8 et les axes obligatoires Décision,
Pédagogie, Profondeur et Comparaison n’atteignent pas 9. Aucun défaut P0
factuel évident n’a été détecté dans cette lecture éditoriale ; les P1
ci-dessous suffisent néanmoins à fermer la porte.

État technique distinct : l’entrée `guides.ts:797-810` ne porte actuellement
aucun `editorialStatus`. Elle entre donc dans `PUBLISHED_GUIDES` et peut recevoir
`index, follow` en production. Ce contre-audit en lecture seule n’a pas changé
ce statut ; il documente que l’état éditorial renforcé et l’état technique
actuel ne sont plus alignés.

## 2. Ce que le guide dit réellement

- **Réponse dans les 150 premiers mots :** oui. Un cahier des charges SaaS raconte la vie complète d’une entreprise cliente et ne choisit pas seul la technologie.
- **Moment du parcours :** sécuriser la consultation après validation de l’idée et du premier résultat.
- **Progression :** bon moment, SaaS fictif, achat, comptes et droits, parcours central, erreurs, exploitation, données et accessibilité, sortie, comparaison des réponses.
- **Verdict actuel :** rendez chaque décision, exclusion, erreur, preuve et responsabilité visible ; refusez les adjectifs invérifiables.
- **Exemple suivi :** DossierClair, Atelier Nord, Studio Rivage, Claire et Léa sont clairement désignés comme fictifs.
- **Données de dimensionnement :** 3 puis 30 entreprises envisagées, 5 utilisateurs par entreprise, 2 000 dossiers actifs et 20 000 archivés.
- **Choix d’exploitation :** support par courriel, sauvegarde quotidienne, conservation de 30 jours, restauration trimestrielle, perte maximale illustrée de 24 heures et reprise en moins de 8 heures ouvrées.
- **Calcul économique :** aucun.
- **Comparaison :** les prestataires doivent répondre au même parcours et rendre leurs hypothèses visibles, mais aucun exemple de trois réponses n’est comparé.
- **Bon fit :** idée validée, premier parcours choisi, fondateur prêt à décider l’offre, les exclusions, les données, l’exploitation et la sortie.
- **Mauvais fit :** acheteur, problème ou première version encore inconnus ; application interne à une seule organisation.
- **Action autonome :** reprendre les décisions et tests dans son propre document.
- **CTA :** relecture du parcours, des exclusions et des décisions, avec possibilité de recommander un retour à la validation.
- **Élément qui paraît complet sans suffire à décider :** les nombreuses exigences ne permettent pas encore de comparer le prix initial, les services tiers, l’exploitation, le temps du commanditaire, les changements et la sortie sur un horizon commun.

## 3. Benchmark France et international

Requêtes, pays, langues et date :

- France : « cahier des charges SaaS », « modèle cahier des charges SaaS », « exemple cahier des charges logiciel » ;
- États-Unis : « SaaS product requirements document template », « software PRD success metrics » ;
- Royaume-Uni : « digital service user stories acceptance criteria », « discovery before building service » ;
- Canada : « Digital Standards design with users iterate » ;
- Australie : « Digital Service Standard measurable adaptable service » ;
- Allemagne : « Lastenheft Software Vorlage », « C5 SaaS requirements data segregation exit » ;
- Union européenne : changement de fournisseur de services de traitement de données au titre du Data Act ;
- recherche effectuée le 24 juillet 2026. Les résultats décrivent un paysage éditorial et non un classement stable.

### Saturation

La saturation a été atteinte lorsque les nouvelles pages ont cessé d’ajouter un type de réponse. Les modèles français, américains et allemands convergent sur objectifs, utilisateurs, fonctionnalités, contraintes, budget, calendrier et hors périmètre. Les standards publics anglophones ajoutent recherche utilisateur, itération, mesure, exploitation et arrêt possible. Les références de sécurité et européennes ajoutent séparation, preuve, portabilité et sortie.

Les gains encore disponibles ne consistent donc pas à ajouter des rubriques techniques. Ils sont :

- un kit éditable réellement rempli et testé ;
- une chaîne `hypothèse → décision → preuve → coût → responsable → date de révision` ;
- un TCO sur 24 mois et un coût du changement tardif ;
- une grille de comparaison des réponses et non seulement une demande commune ;
- une mesure de succès après lancement ;
- un registre de versions, décisions et changements ;
- un cas où Hagnéré Code recommande de reporter ou de simplifier le projet.

| Ressource et URL directe                                                                                                                                                                                   | Pays                            | Réponse utile                                                                              | Preuve, outil ou exemple                              | Limite                                                                         | Apport à vérifier ou adapter                                                   |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- | ------------------------------------------------------------------------------------------ | ----------------------------------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| [Digital Unicorn — modèle de cahier des charges SaaS](https://digitalunicorn.fr/modele-de-cahier-des-charges-saas/)                                                                                        | France / agence                 | Structure SaaS et modèle téléchargeable                                                    | Actif éditable orienté acquisition                    | Source commerciale ; profondeur et accès au modèle à contrôler                 | Dépasser la simple trame par un exemple rempli, des tests et le TCO            |
| [Yield Studio — modèle de cahier des charges logiciel](https://www.yieldstudio.fr/blog/modele-de-cahier-des-charges-pour-la-creation-dun-logiciel)                                                         | France / studio produit         | Modèle Google Docs, objectifs et fonctions                                                 | Format immédiatement copiable                         | Non spécifique au cycle commercial et opérationnel d’un SaaS                   | Rendre le kit SaaS autonome sans perdre la pédagogie métier                    |
| [Atlassian — Product Requirements Document](https://www.atlassian.com/software/confluence/templates/product-requirements)                                                                                  | États-Unis / éditeur            | Objectifs, métriques, hypothèses, options, questions ouvertes et hors périmètre            | Template et suivi des décisions                       | Sert aussi la vente de Confluence ; peu de facturation, exploitation et sortie | Ajouter métrique, hypothèse, date de décision et source unique de vérité       |
| [U.S. Digital Services Playbook](https://playbook.usds.gov/)                                                                                                                                               | États-Unis / public             | Comprendre le besoin, livrer par étapes, choisir les bons achats, prévoir l’exploitation   | Checklists de décision et de contrat                  | Services publics complexes, non transposables tels quels à une TPE             | Ajouter indicateurs, responsable produit, livraison incrémentale et transition |
| [GOV.UK — écrire des user stories](https://www.gov.uk/service-manual/agile-delivery/writing-user-stories)                                                                                                  | Royaume-Uni / public            | Relier acteur, besoin, but et critères d’acceptation                                       | Exemple « it’s done when… » et liens vers les preuves | Une user story ne remplace ni contrat ni vision de bout en bout                | Conserver la recette métier et tracer chaque test vers le besoin               |
| [GOV.UK — discovery phase](https://www.gov.uk/service-manual/agile-delivery/how-the-discovery-phase-works)                                                                                                 | Royaume-Uni / public            | Comprendre coût actuel, contraintes, solutions alternatives et mesure avant de construire  | Critères pour poursuivre ou arrêter                   | Durée publique typique trop lourde pour nombre de petits SaaS                  | Créer un test léger qui détermine si un cadrage ou une étude est nécessaire    |
| [Canada — Digital Standards Playbook](https://www.canada.ca/en/government/system/digital-government/government-canada-digital-standards.html)                                                              | Canada / public                 | Concevoir avec les utilisateurs, itérer, ouvrir, sécuriser et inclure                      | Standards vivants mis à jour en 2026                  | Cadre gouvernemental                                                           | Ajouter recherche minimale, date de revue et amélioration après lancement      |
| [Australian Digital Service Standard](https://www.digital.gov.au/policy/digital-experience/digital-service-standard)                                                                                       | Australie / public              | Service convivial, inclusif, adaptable et mesurable sur son cycle de vie                   | Standard et checklist                                 | Périmètre gouvernemental                                                       | Ajouter mesure, maintenabilité et adaptation comme résultats attendus          |
| [IT-Dock — Lastenheft 2026](https://it-dock.de/blog/allgemein/lastenheft-erstellen/)                                                                                                                       | Allemagne / agence              | Sépare ce que demande le client de la réponse de réalisation ; priorités MUST/SHOULD/COULD | Modèle Word et exemple                                | Les affirmations contractuelles exigent un conseil adapté                      | Distinguer demande du commanditaire et réponse opposable du prestataire        |
| [BSI — C5:2026](https://www.bsi.bund.de/EN/Themen/Unternehmen-und-Organisationen/Informationen-und-Empfehlungen/Empfehlungen-nach-Angriffszielen/Cloud-Computing/Kriterienkatalog-C5/C5_2025/C5_2025.html) | Allemagne / officiel            | Critères actuels de sécurité pour services cloud, séparation des données et preuves        | Catalogue C5 révisé en 2025-2026                      | Trop vaste pour une première version ; ne vaut pas certification du produit    | Utiliser quelques questions de preuve proportionnées, jamais « conforme C5 »   |
| [OWASP ASVS 5.0.0](https://owasp.org/www-project-application-security-verification-standard/)                                                                                                              | International / standard ouvert | Exigences de sécurité vérifiables utilisables dans les achats                              | Version stable 5.0.0 et identifiants de contrôles     | Le périmètre doit être choisi et réellement testé                              | Conserver l’annexe référencée et publier un exemple de sélection               |
| [EUR-Lex — Data Act](https://eur-lex.europa.eu/EN/legal-content/summary/rules-on-fair-access-to-and-use-of-data-data-act.html)                                                                             | Union européenne / officiel     | Cadre de changement entre fournisseurs de services de traitement de données                | Texte applicable depuis le 12 septembre 2025          | La portée exacte dépend du service, du contrat et des exceptions               | Garder la réserve juridique et transformer la sortie en test pratique          |

## 4. Matrice de gain d’information

| Question décisive                                 | Meilleure réponse française                  | Apport international                                          | Couverture actuelle | Manque                                                     | Réponse supérieure à produire                                                   |
| ------------------------------------------------- | -------------------------------------------- | ------------------------------------------------------------- | ------------------- | ---------------------------------------------------------- | ------------------------------------------------------------------------------- |
| Ai-je besoin d’un cahier des charges maintenant ? | Valider l’idée et lister les fonctions       | Discovery : coût actuel, alternative et droit d’arrêter       | Bonne               | Aucun seuil d’étude ou de report                           | Arbre : arrêter, tester une hypothèse, cadrer court ou consulter                |
| Que doit décider le dirigeant ?                   | Objectifs, cible, fonctions, budget et délai | Métrique, hypothèses, options et responsable produit          | Très bonne          | Mesure de succès et registre de décisions                  | Une page exécutive avec décision, raison, propriétaire, preuve et date de revue |
| Comment décrire un SaaS plutôt qu’un site ?       | Comptes, abonnement et fonctions             | Service complet, exploitation, sécurité, itération et sortie  | Excellente          | Usage, observabilité et changement                         | Carte de cycle reliant événement, donnée, accès, facture, alerte et preuve      |
| Comment empêcher la fuite entre clients ?         | Demander la séparation                       | Contrôles par requête, preuves cloud et tests d’isolement     | Très bonne          | Test de masse et journaux de preuve                        | Jeu de tests négatifs, volumes, traces et procédure d’incident                  |
| Comment cadrer la facturation ?                   | Prestataire de paiement et abonnements       | Quote-to-cash, états, droits et rapprochement                 | Bonne               | Comptabilité, mesure des exceptions et coût d’exploitation | Matrice contrat/facture/paiement/accès + propriétaire de chaque vérité          |
| Combien le dossier mobilise-t-il ?                | Rarement chiffré                             | Coût du problème et capacité de l’équipe                      | Absente             | Heures, rôles et créneaux                                  | Exemple de 21 heures et formulaire permettant de remplacer les valeurs          |
| Comment comparer les offres ?                     | Envoyer le même document                     | Normaliser coût, preuve, exploitation, transition et métrique | Partielle           | TCO et score pondéré                                       | Trois réponses fictives comparées à 24 mois avec hypothèses identiques          |
| Que faire d’une inconnue coûteuse ?               | L’ajouter comme question                     | Discovery, test risqué d’abord et décision d’arrêt            | Partielle           | Seuil économique                                           | Calcul du coût attendu et règle d’étude préalable                               |
| Comment accepter le produit ?                     | Recette fonctionnelle                        | Besoin traçable, preuve, test et retest                       | Très bonne          | Charge et budget de recette                                | Plan dimensionné, responsable, temps, anomalie bloquante et clôture             |
| Comment faire évoluer le document ?               | Modifier le fichier                          | Source unique, questions ouvertes et itération                | Faible              | Version, impact, approbation                               | Registre de changement avec nouvelle référence de coût/délai                    |
| Comment savoir si le SaaS réussit ?               | Usage ou chiffre d’affaires générique        | Métriques définies avant construction et revue continue       | Faible              | Baseline, cible, source et responsable                     | Tableau 30/90 jours : activation, parcours achevé, support, paiement, décision  |
| Que récupère le client et le fondateur ?          | Export et propriété                          | Portabilité, transition et preuve d’import                    | Très bonne          | Démonstration autonome                                     | Export de test, dictionnaire, import témoin, dépôt cloné et restauration        |

## 5. Faits et fraîcheur

Sources primaires rouvertes ou retrouvées le 24 juillet 2026.

| Affirmation du guide                                                                                      | Verdict                                                           | Source primaire actuelle                                                                                                                                                 | Périmètre et date                                                | Correction                                                                                        |
| --------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| Stripe expose plusieurs états d’abonnement et recommande de traiter les événements associés               | confirmé, mais volatil                                            | [Stripe — subscription webhooks](https://docs.stripe.com/billing/subscriptions/webhooks)                                                                                 | Documentation produit consultée le 24/07/2026                    | Ajouter « documentation consultée le… » et ne pas faire de ces états une règle métier universelle |
| La page de retour du navigateur ne doit pas ouvrir seule les droits                                       | confirmé                                                          | [Stripe — subscriptions/webhooks](https://docs.stripe.com/billing/subscriptions/webhooks)                                                                                | Intégration Stripe ; principe à adapter au prestataire choisi    | Conserver le test de répétition et ajouter signature, journal et reprise après erreur             |
| La CNIL recommande comptes individuels et droits adaptés                                                  | confirmé                                                          | [CNIL — gérer les utilisateurs](https://www.cnil.fr/fr/gerer-les-utilisateurs)                                                                                           | Sécurité des données personnelles                                | Conserver ; ajouter revue des habilitations et preuve de révocation                               |
| Les sauvegardes et restaurations doivent être testées                                                     | confirmé                                                          | [CNIL — sauvegarder](https://www.cnil.fr/fr/securite-sauvegarder) et [continuité/reprise](https://www.cnil.fr/fr/securite-prevoir-la-continuite-et-la-reprise-dactivite) | Recommandations CNIL, guide actualisé en 2026 disponible         | Remplacer la simple fréquence fictive par une décision fondée sur l’impact métier                 |
| ASVS 5.0.0 est la version stable                                                                          | confirmé au 24/07/2026                                            | [OWASP ASVS](https://owasp.org/www-project-application-security-verification-standard/)                                                                                  | Version 5.0.0 publiée le 30/05/2025                              | Conserver la version explicite ; revalider au prochain remaniement                                |
| WCAG 2.2 fournit des critères testables                                                                   | confirmé                                                          | [W3C — WCAG 2.2](https://www.w3.org/TR/WCAG22/)                                                                                                                          | Recommandation W3C                                               | Conserver la distinction entre critères sélectionnés et conformité globale                        |
| Le champ légal du RGAA doit être vérifié séparément                                                       | confirmé et prudent                                               | [RGAA — champ d’application](https://accessibilite.numerique.gouv.fr/obligations/champ-application/)                                                                     | France ; situation du commanditaire à qualifier                  | Aucun élargissement juridique automatique                                                         |
| Le paiement du développement ne transfère pas seul tous les droits                                        | confirmé dans son principe, conseil juridique requis              | [Code de la propriété intellectuelle, L131-3](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958)                                                      | Cession de droits ; clauses et créations à qualifier             | Conserver la réserve et éviter de promettre une propriété absolue                                 |
| Le Data Act s’applique depuis le 12 septembre 2025 et traite le changement de services de traitement      | confirmé, portée à qualifier                                      | [EUR-Lex — règlement 2023/2854](https://eur-lex.europa.eu/eli/reg/2023/2854/oj/eng)                                                                                      | Union européenne ; catégories, exceptions et contrats à vérifier | Le guide a raison de ne pas transformer l’exemple en règle universelle                            |
| 30 jours de lecture seule, 30 jours de sauvegarde, 24 h de perte et 8 h de reprise seraient des standards | faux si généralisé, mais la page les qualifie comme choix fictifs | Aucun standard universel                                                                                                                                                 | Exemple DossierClair uniquement                                  | Maintenir l’étiquette à chaque réemploi autonome, y compris tableaux et ressource                 |

### Contradictions et tensions

- Le titre et la metadata annoncent un « exemple complet » ; la page contient bien un cas complet à lire, mais aucun document complet à copier ou télécharger. Pour la requête « modèle », cette différence est décisive.
- La fiche exige un « prix de réalisation et coût mensuel ou annuel » sans montrer comment additionner construction, services tiers, support, exploitation, temps client, évolution et sortie.
- Le guide recommande une annexe ASVS référencée, mais n’en donne pas d’exemple minimal. La prudence est correcte ; la promesse pratique reste inachevée.
- Le SaaS est décrit comme un service continu, mais aucune mesure post-lancement ne relie l’usage réel aux décisions produit.
- Les dimensions de 30 entreprises, 150 utilisateurs et 22 000 dossiers sont visibles, mais elles ne deviennent ni scénarios de performance, ni test de capacité, ni coût.

### Faits à retirer plutôt qu’à affaiblir

- Toute fourchette de prix de développement sans corpus, périmètre et méthode.
- Toute promesse qu’un cahier des charges évite les dépassements, litiges ou retards.
- Toute formulation « conforme ASVS », « conforme RGAA », « conforme RGPD » ou « sécurisé » sans périmètre et contrôle.
- Tout taux de disponibilité, délai de support, reprise, rétention ou relance présenté comme pratique universelle.
- Tout transfert silencieux d’une exigence C5, GOV.UK, Canada ou Australie vers une obligation française privée.

## 6. Scénarios et calculs à construire

Tous les chiffres ci-dessous sont des **exemples illustratifs fictifs**, hors taxes, remplaçables et non issus d’un devis ou d’un client. Les taux horaires valorisent du temps ; ils ne sont ni des salaires ni des prix de marché.

### Scénario 1 — Le cahier des charges mobilise aussi l’entreprise

| Contribution                                        |    Temps | Valeur de l’heure | Capacité valorisée |
| --------------------------------------------------- | -------: | ----------------: | -----------------: |
| Fondateur : offre, exclusions, décision             |      8 h |              75 € |              600 € |
| Opérations : parcours, erreurs, support             |      6 h |              45 € |              270 € |
| Finance/administration : facture et rapprochement   |      3 h |              60 € |              180 € |
| Recette métier : préparation des données et preuves |      4 h |              50 € |              200 € |
| **Total**                                           | **21 h** |                 — |        **1 250 €** |

```text
Formule : somme(heures par rôle × valeur interne de l’heure).
Horizon : préparation avant consultation.
Inclus : décisions, entretiens, consolidation et premier plan de recette.
Exclus : étude juridique, audit sécurité, design, développement et TVA.
Résultat : 21 h et 1 250 € de capacité valorisée dans cet exemple.
Analyse de sensibilité : remplacer chaque temps et valeur ; ne pas confondre capacité et décaissement.
Variable qui fait basculer : disponibilité du décideur et nombre d’inconnues.
Contrôle inverse : si une seule personne connaît déjà toutes les réponses et que le produit est très simple, le temps peut être nettement inférieur.
```

### Scénario 2 — Trois réponses comparées sur 24 mois

Périmètre fictif commun : même parcours DossierClair, mêmes volumes, paiement, droits, sauvegarde, support, maintenance et remise de sortie.

| Poste                         | Offre A « prix d’appel » | Offre B « intégrée » | Offre C « par étapes » |
| ----------------------------- | -----------------------: | -------------------: | ---------------------: |
| Étude préalable               |                      0 € |                  0 € |                8 000 € |
| Construction                  |                 45 000 € |             62 000 € |               52 000 € |
| Options nécessaires           |                 12 000 € |                  0 € |                4 000 € |
| Services/exploitation 24 mois |                 36 000 € |             30 000 € |               33 600 € |
| Maintenance/support 24 mois   |                 18 000 € |             12 000 € |               14 000 € |
| Temps client valorisé         |                  4 200 € |              2 700 € |                3 300 € |
| Sortie testée                 |                  8 000 € |              5 000 € |                6 000 € |
| **TCO 24 mois**               |            **123 200 €** |        **111 700 €** |          **120 900 €** |

L’offre B demande 5 000 € de plus que le couple construction + options de l’offre A au départ, mais son TCO illustratif est inférieur de 11 500 €. Cela ne prouve ni sa qualité ni sa supériorité générale. Cela prouve que le prix de construction seul ne suffit pas.

### Scénario 3 — Une inconnue mérite-t-elle une étude préalable ?

Hypothèse fictive : une connexion unique d’entreprise pourrait devenir obligatoire.

```text
Étude ciblée = 3 jours × 900 € = 2 700 €
Découverte tardive = 12 jours × 900 € + 4 000 € de reprise = 14 800 €
Probabilité d’équilibre = 2 700 / 14 800 = 18,24 %
```

Si l’équipe estime que l’exigence a plus de 18,24 % de chances de devenir obligatoire, l’étude est défendable dans ce scénario. Cette probabilité est une hypothèse de décision, pas une mesure scientifique.

### Scénario 4 — La recette doit avoir un créneau et un coût

Hypothèses :

- 30 scénarios, 12 minutes pour le premier passage ;
- 8 anomalies, 10 minutes par retest ;
- 2 heures pour synthèse et décision ;
- temps valorisé à 55 €/h.

```text
Premier passage = 30 × 12 / 60 = 6 h
Retests = 8 × 10 / 60 = 1 h 20
Total = 6 + 1,3333 + 2 = 9 h 20
Capacité valorisée = 9,3333 × 55 = 513,33 €
```

Le calcul n’impose pas trente tests à tous les projets. Il montre pourquoi la recette n’est pas gratuite et pourquoi ses scénarios critiques doivent être choisis avant la signature.

### Scénario 5 — Départager trois réponses sans ouvrir d’abord les prix

Pondération fictive décidée avant lecture :

- résultat métier : 30 % ;
- cycle client complet : 20 % ;
- exploitation et sécurité : 15 % ;
- TCO 24 mois : 15 % ;
- preuves de livraison : 10 % ;
- sortie : 10 %.

| Critère /10           |     Poids |  Offre A |  Offre B |  Offre C |
| --------------------- | --------: | -------: | -------: | -------: |
| Résultat métier       |      30 % |        8 |        9 |        8 |
| Cycle complet         |      20 % |        7 |        9 |        8 |
| Exploitation/sécurité |      15 % |        6 |        8 |        8 |
| TCO                   |      15 % |        9 |        7 |        8 |
| Preuves               |      10 % |        5 |        9 |        7 |
| Sortie                |      10 % |        4 |        8 |        7 |
| **Score pondéré**     | **100 %** | **6,95** | **8,45** | **7,80** |

Le score de B est `9 × 0,30 + 9 × 0,20 + 8 × 0,15 + 7 × 0,15 + 9 × 0,10 + 8 × 0,10 = 8,45`. Toute note doit renvoyer à une preuve, et la pondération doit changer si la sécurité, la date ou la sortie dominent réellement.

### Variables de sensibilité

| Variable                    |         Simple |           Central |                           Exigeant | Source ou hypothèse                 |
| --------------------------- | -------------: | ----------------: | ---------------------------------: | ----------------------------------- |
| Entreprises clientes        |              3 |                30 |                                300 | Prévision commerciale, non garantie |
| Utilisateurs par entreprise |              2 |                 5 |                               100+ | Contrats et profils réels           |
| Parcours critiques          |              1 |                 3 |                                  8 | Produit vendu et support            |
| Intégrations                |              0 |                 2 |                                 6+ | Systèmes tiers et documentation     |
| Restauration                | journée ouvrée |       8 h ouvrées |                    quelques heures | Impact métier et devis              |
| Support                     | courriel ouvré | engagement défini |                          astreinte | Contrat et organisation             |
| Horizon TCO                 |        12 mois |           24 mois |                            36 mois | Stratégie et durée de vie           |
| Sortie                      |  export simple |     import témoin | migration et double fonctionnement | Plan de transition                  |

```text
Formule : TCO = étude + construction + options + services tiers + exploitation + maintenance + temps client + changements + sortie.
Horizon : 24 mois dans l’exemple central.
Inclus : même parcours, mêmes volumes, mêmes responsabilités et même sortie.
Exclus : chiffre d’affaires non prouvé, fiscalité, coût du capital, incident exceptionnel et remise commerciale.
Variable qui fait basculer : services récurrents, support, options nécessaires, temps client et sortie.
Contrôle inverse : calculer le cas où un prototype manuel ou un outil existant satisfait le besoin et où construire maintenant perd.
```

## 7. Comparaison et position professionnelle

```text
Options réellement comparables : arrêter ; tester manuellement ; configurer un outil existant ; cadrage SaaS court ; étude ciblée ; construction par étapes ; forfait plus formel si le risque l’exige.
Périmètre et horizon communs : même acheteur, parcours, volumes, utilisateurs, données, paiement, exploitation, support, maintenance et sortie sur 24 mois.
Option la moins chère : un dossier court préparé en interne lorsque l’idée, le parcours et les risques sont déjà compris.
Option la moins risquée : une étude ciblée lorsque sécurité, facturation, données, intégration ou performance peuvent déplacer fortement le projet.
Option qui demande le moins de temps interne : une mission accompagnée avec entretiens et arbitrages, à condition qu’un décideur reste disponible.
Position Hagnéré Code pour le cas fréquent : le dirigeant décide le résultat et les règles métier ; le prestataire justifie la solution et ses coûts.
Faits qui la fondent : les modèles internationaux convergent sur besoin, hypothèses, métriques, itération, preuve et sortie ; le guide couvre déjà le cycle mais pas l’économie.
Cas où l’option opposée gagne : SaaS très simple, outil standard suffisant, fondateur encore sans acheteur, ou projet réglementé qui exige spécialistes et dossier formel.
Signal de révision : premier grand compte, SSO, nouvelle donnée sensible, nouveau pays, nouvelle offre, incident, volume multiplié, coût tiers modifié ou export échoué.
Ce que nous déconseillons même si nous pourrions le vendre : un cahier des charges exhaustif copié, une architecture imposée sans preuve, un forfait sur inconnues ou une conformité globale auto-déclarée.
```

Le guide gagnera en confiance s’il montre explicitement un cas où Hagnéré Code recommande un tableur, une procédure manuelle, un outil standard ou un test commercial au lieu d’un développement.

## 8. Objections et cas limites

| Objection loyale                                            | Réponse prouvée                                                                     | Ce qui reste incertain                                 | Conséquence                                                         |
| ----------------------------------------------------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------ | ------------------------------------------------------------------- |
| « Je ne connais pas la technique »                          | Le guide demande des résultats, erreurs et preuves, pas un langage de programmation | Contraintes que seul un spécialiste peut identifier    | Faire répondre le prestataire avec hypothèses et alternatives       |
| « Mon SaaS est simple »                                     | Un dossier court peut suffire                                                       | Paiement, support et sortie peuvent rester cachés      | Utiliser uniquement les modules applicables, sans ajouter du volume |
| « Nous verrons l’exploitation après le lancement »          | Sauvegarde, support et incident font partie du service vendu                        | Niveau de service nécessaire                           | Chiffrer un minimum opérationnel avant le devis                     |
| « Stripe gère tout »                                        | Le fournisseur gère des états ; le produit traduit ces états en droits et actions   | Contrat, facture, comptabilité et exceptions réels     | Nommer la source de vérité et le responsable de chaque état         |
| « Un bouton CSV assure la réversibilité »                   | Un export sans dictionnaire ni test d’import reste insuffisant                      | Système cible et qualité des données                   | Réaliser un import témoin avant acceptation                         |
| « ASVS rendra le SaaS sécurisé »                            | ASVS fournit des exigences testables                                                | Sélection, menace, architecture et qualité du contrôle | Définir contrôles, périmètre, méthode et preuve                     |
| « Je veux un prix ferme immédiatement »                     | Un prix peut être ferme sur des hypothèses explicites                               | Inconnues à fort impact                                | Isoler une étude ou une option au lieu de les cacher                |
| « Les besoins changeront, donc le document ne sert à rien » | Une référence commune permet d’évaluer le changement                                | Mode contractuel et cadence                            | Versionner décision, impact, approbation et nouvelle base           |
| « La sortie dans trois ans est abstraite »                  | Le Data Act et le risque opérationnel rendent le sujet concret                      | Portée juridique exacte                                | Tester maintenant ce qui est exporté et documenté                   |
| « Trente tests sont excessifs »                             | Le nombre dépend des parcours critiques                                             | Risque et coût de l’erreur                             | Garder un noyau bloquant et justifier les exclusions                |

## 9. Plan de réécriture

| Ordre | Section proposée                       | Question résolue                     | Preuve, scénario ou outil                     | Décision produite              | À conserver / créer / couper |
| ----: | -------------------------------------- | ------------------------------------ | --------------------------------------------- | ------------------------------ | ---------------------------- |
|     1 | Verdict en 150 mots                    | Dois-je cadrer, tester ou arrêter ?  | Arbre selon validation et inconnues           | Prochaine étape                | Renforcer                    |
|     2 | Le kit complet                         | Que vais-je réellement produire ?    | Trame, exemple, recette, TCO, changements     | Télécharger ou copier          | Créer                        |
|     3 | DossierClair en une page               | Quel produit, pour qui et pourquoi ? | Acheteur, problème, résultat, baseline, cible | Valider le cas                 | Reserrer l’existant          |
|     4 | Ce qui est hors périmètre              | Qu’est-ce qui ne sera pas chiffré ?  | Exclusions actuelles et date de révision      | Première version               | Conserver                    |
|     5 | Temps et coût de préparation           | Qui doit contribuer ?                | Scénario 1                                    | Réserver la capacité           | Créer                        |
|     6 | Vie du client                          | Quels événements traverser ?         | Carte achat → usage → incident → sortie       | Compléter le cycle             | Conserver                    |
|     7 | Entreprises, comptes et données        | Comment isoler et révoquer ?         | Tests négatifs et volumes                     | Accepter ou approfondir        | Renforcer                    |
|     8 | Abonnement, facture, paiement, accès   | Quelles vérités peuvent diverger ?   | Matrice et guide facturation                  | Écrire les règles              | Renforcer                    |
|     9 | Parcours vendu et mesure               | Quelle valeur vérifier ?             | Baseline, activation, tâche achevée           | Poursuivre ou corriger         | Créer                        |
|    10 | Exploitation, sécurité et restauration | Le service peut-il durer ?           | CNIL, ASVS, BSI adapté, exercice              | Choisir le niveau              | Conserver et hiérarchiser    |
|    11 | Données, accessibilité et contrat      | Quand faut-il un spécialiste ?       | Sources primaires et limites                  | Escalader si nécessaire        | Regrouper les réserves       |
|    12 | Sortie du client et du commanditaire   | Que récupère chacun ?                | Export/import, dépôt/restauration             | Accepter la dépendance         | Conserver                    |
|    13 | Inconnues et changements               | Que se passe-t-il après signature ?  | Scénario 3 et registre                        | Étudier, accepter, décaler     | Créer                        |
|    14 | Comparer sur 24 mois                   | Quelle offre choisir ?               | Scénarios 2 et 5                              | Sélection prouvée              | Créer                        |
|    15 | Recette dimensionnée                   | Qui teste, combien de temps ?        | Scénario 4                                    | Planifier l’acceptation        | Enrichir                     |
|    16 | Revue 30/90 jours et CTA               | Le produit mérite-t-il la suite ?    | Mesures et signal de révision                 | Maintenir, corriger ou arrêter | Créer                        |

### Contrat des 150 premiers mots

- Nommer le lecteur : fondateur qui a validé un problème et doit faire chiffrer le même produit.
- Répondre : décrivez le client de l’achat à la sortie ; n’imposez pas la technique.
- Donner la condition inverse : si l’acheteur ou le premier résultat reste incertain, ne consultez pas encore.
- Promettre : exemple rempli, trame éditable, recette, TCO et grille de comparaison.
- Annoncer la limite : les montants et délais sont illustratifs ; droit, fiscalité et sécurité exigent une vérification adaptée.

### Éléments à supprimer ou réduire

- Réduire les répétitions de la réserve « exemple propre à DossierClair » en gardant l’étiquette sur chaque bloc autonome.
- Regrouper les réserves juridiques dans une carte « quand faire intervenir un spécialiste », sans les effacer.
- Ne pas ajouter de nouvelle liste de fonctionnalités génériques.
- Ne pas transformer BSI C5 ou ASVS en badge de conformité.

### Éléments à conserver

- Le même SaaS fictif et les mêmes personnes jusqu’à la fin.
- Les exclusions nettes.
- Les quatre cases décision/exclusion/preuve/responsable.
- Les tests d’isolement, de répétition, de révocation, de restauration et de sortie.
- Le refus d’imposer Stripe ou une architecture.
- La double sortie : abonné et commanditaire.
- Le CTA contradictoire avec l’intérêt de vendre du développement.

## 10. Contre-audit et portes de correction

### P0 — bloquants avant de revendiquer une réponse de référence

- [ ] Revalider Stripe, CNIL, OWASP, WCAG, RGAA, Légifrance et Data Act au jour de la réécriture.
- [ ] Construire et tester le kit promis : trame vierge, exemple DossierClair, matrice de recette, TCO, comparaison et registre de changements.
- [ ] Étiqueter tous les chiffres comme exemples illustratifs et rendre les hypothèses modifiables.
- [ ] Faire recalculer indépendamment les cinq scénarios.
- [ ] Ajouter un coût total à horizon commun et une option « ne pas construire ».
- [ ] Ne laisser aucune revendication de conformité globale.

### P1 — nécessaires pour viser au moins 90/100

- [ ] Ajouter baseline, cible, source, fréquence et responsable de la mesure.
- [ ] Ajouter le temps et les rôles côté commanditaire.
- [ ] Ajouter le seuil d’étude préalable pour une inconnue risquée.
- [ ] Normaliser les réponses des prestataires, pas seulement la demande.
- [ ] Ajouter version, hypothèse, demande de changement, impact et approbation.
- [ ] Comparer trois offres sur 24 mois et expliquer le cas où chacune gagne.
- [ ] Dimensionner la recette et sa clôture.
- [ ] Déclarer la position Hagnéré Code, son cas inverse et son signal de révision.

### P2 — différenciation et finition

- [ ] Ajouter un export CSV/XLSX de la matrice sans captation d’e-mail.
- [ ] Montrer un exemple de sélection ASVS minimale sans l’appeler audit.
- [ ] Ajouter une courte démonstration du kit rempli.
- [ ] Faire remplir le kit à un fondateur non technique et mesurer temps, incompréhensions et champs abandonnés.
- [ ] Contrôler le kit dans LibreOffice/Excel/Word selon formats retenus.
- [ ] Tester la page à 320, 390, 768, 1 024 et 1 440 px, thèmes clair/sombre.

### Score après correction

Non attribué. Un score futur ne peut être simulé avant réécriture, ressource réellement ouverte, calcul indépendant, test lecteur et contrôle navigateur.

## 11. Preuves techniques et visuelles

```text
Manifeste : non modifié et non revalidé dans cet audit éditorial.
Calculs refaits : 21 h/1 250 €, trois TCO 24 mois, seuil 18,24 %, recette 9 h 20/513,33 € et scores 6,95/8,45/7,80 vérifiés avec Node.js.
Sources rouvertes : OWASP ASVS, CNIL sauvegarde, GOV.UK, Canada, Australie, France et réforme européenne ; BSI C5:2026 retrouvé comme source actuelle.
Liens vérifiés : URLs directes retrouvées le 24/07/2026 ; refaire un contrôle HTTP après intégration.
Commandes : shasum -a 256 ; assertions Node.js ; inspection source localisée.
Rendu 320 / 390 / 768 / 1024 / 1440 : non réalisé, car aucune page publique n’a été modifiée.
Image sociale : présence source constatée ; rendu non contrôlé dans ce lot.
Statut maximal prouvé : audité en lecture seule, faits et calculs contre-vérifiés.
Réserve publication / indexation : aucune publication, aucun déploiement et aucune indexation Google prouvés par cet audit.
```

### Verdict final de l’audit

DossierClair est une excellente colonne vertébrale pédagogique. La page ne doit pas devenir une encyclopédie technique. Pour passer d’un bon guide à la réponse la plus utile de la requête, elle doit maintenant transformer son exemple en outil utilisable, chiffrer l’effort et le coût total, gouverner les inconnues et montrer comment décider après réception de trois réponses.

## 12. Contre-audit indépendant comme dirigeant non technique

### 12.1 Périmètre et verdict

Cette seconde lecture a été menée sans modifier la page publique, le registre,
les tests, le dossier de recherche, un manifeste ou une ressource. Elle porte
sur le snapshot `b577065…` et tient compte :

- de la charte qualité renforcée et du workflow maître lus intégralement ;
- du modèle de dossier de recherche ;
- des 3 198 mots visibles, des dix H2, des huit FAQ, du CTA éditorial et de la
  carte commerciale latérale ;
- de l’entrée du registre, de l’image sociale et des garde-fous de tests ;
- du dossier de recherche historique et de l’audit concurrentiel précédent ;
- des frontières avec les guides SaaS voisins actuellement déclarés.

Le guide répond bien à « que faut-il prévoir dans un cahier des charges SaaS ? ».
Il ne répond pas encore assez à « quel document vais-je produire, combien de
temps cela va-t-il me prendre, comment comparer trois réponses et quelle
décision dois-je prendre ? ».

```text
P0 : 0 défaut factuel ou juridique manifeste identifié dans cette lecture éditoriale
P1 : 6 familles bloquantes
P2 : 9 familles d’amélioration
Score : 79/100
Équivalent : 15,8/20, arrondi à 16/20
Verdict : NO-GO
Retour requis : P2 pour réécriture et actif autonome, puis nouvelles P3 et P4
```

L’absence de P0 ne vaut pas revalidation web des sources au 24 juillet 2026.
Stripe, CNIL, OWASP, W3C, RGAA, Légifrance et le Data Act devront être rouverts
si la réécriture modifie leur portée ou leur formulation.

### 12.2 Ce qu’un dirigeant comprend réellement

#### Dans les 150 premiers mots

Les deux premiers paragraphes du corps contiennent 121 mots. Ils réussissent
trois tâches :

1. le lecteur reconnaît la situation : plusieurs prestataires imaginent des
   produits différents (`page.tsx:292-297`) ;
2. « SaaS » est expliqué en français courant (`page.tsx:299-301`) ;
3. la réponse de fond est donnée : raconter la vie complète d’une entreprise
   cliente plutôt que dessiner tous les écrans (`page.tsx:301-306`).

Il manque toutefois une décision explicite dans ces 121 mots. Le lecteur ne
sait pas encore s’il doit consulter maintenant, tester une inconnue ou arrêter
la rédaction. Il ne sait pas non plus quel résultat concret il aura en fin de
lecture. Le hero promet « quoi décider » (`page.tsx:224-225`), mais le corps ne
nomme ni dossier éditable, ni comparaison de devis, ni temps à réserver.

**Verdict ouverture :** bonne base humaine, mais contrat des 150 mots incomplet
au regard du §6.1 de la charte.

#### Après lecture complète

Le lecteur sait :

- distinguer SaaS et application interne ;
- décrire achat, comptes, droits, action centrale, impayé, restauration et
  sortie ;
- demander une décision, une exclusion, une preuve et un responsable ;
- refuser les adjectifs « sécurisé, scalable et intuitif » sans test ;
- reconnaître qu’une architecture ou un fournisseur de paiement ne doit pas
  être imposé sans raison.

Il ne sait pas encore :

- combien d’heures il doit réserver avec son équipe ;
- quelles rubriques copier dans un document prêt à envoyer ;
- comment traiter une inconnue susceptible de déplacer le devis ;
- comment normaliser puis comparer trois réponses ;
- comment additionner création, options, exploitation, temps interne,
  maintenance et sortie ;
- quelle offre gagne selon le coût, le risque ou la vitesse ;
- quelle mesure décider avant le développement et revoir après 30 ou 90 jours ;
- comment versionner un changement après signature.

### 12.3 P0, P1 et P2

#### P0 — aucun constaté dans ce périmètre

Aucune fausse obligation évidente ni revendication globale de conformité n’a
été repérée. Le guide n’invente ni client réel, ni résultat obtenu, ni prix de
marché. Les personnes, entreprises, volumes et délais sont explicitement fictifs
(`page.tsx:365-369`, `424-426`, `643-646`). Les réserves juridiques sont
visibles (`page.tsx:803-819`, `897-906`, `916-922`).

La promesse « exemple complet » est à ce stade un **P1 produit**, pas un P0 :
la page fournit bien un exemple narratif complet, mais le registre ne promet
pas explicitement un téléchargement. Elle deviendrait trompeuse si la
réécriture annonçait un kit absent ou non testé.

#### P1 — bloquants

| ID   | Constat et preuve exacte                                                                                                                                                                                                             | Pourquoi cela bloque                                                                                                                                    | Correction requise                                                                                                                                                                                    |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| P1-1 | Le title annonce « exemple complet » et la meta « exemple rempli » (`guides.ts:797-803`), mais aucun document cohérent, vierge ou rempli n’est copiable ou téléchargeable.                                                           | Le dirigeant doit reconstruire seul un cahier des charges à partir de 3 198 mots. La requête promet un livrable, pas seulement une lecture.             | Livrer et tester un kit éditable : trame courte, DossierClair rempli, matrice de tests, comparateur 24 mois, registre des inconnues et changements. À défaut, remplacer « complet » par « commenté ». |
| P1-2 | La fiche exige un prix initial et un coût mensuel ou annuel (`page.tsx:463-464`), mais la page ne contient aucun tableau économique ni aucune formule. L’inventaire confirme `T/C 0/0` et `Form. 0`.                                 | Le guide rend les produits fonctionnellement comparables sans rendre les investissements comparables. Les coûts inconnus risquent de devenir des zéros. | Montrer trois réponses fictives sur 24 mois avec mêmes inclusions, postes « à confirmer », temps client et sortie ; ajouter l’analyse de sensibilité.                                                 |
| P1-3 | La section finale demande aux prestataires de rendre leurs hypothèses visibles (`page.tsx:925-997`), mais ne montre ni réponse normalisée, ni pondération, ni cas où A, B ou C gagne.                                                | Le lecteur sait poser les questions, pas choisir après réception des devis.                                                                             | Ajouter une grille à preuves : prix initial, TCO, charge client, exploitation, sortie, inconnues ; expliquer le verdict selon trois priorités différentes.                                            |
| P1-4 | Aucun indicateur de départ, cible d’usage, responsable de mesure, revue à 30/90 jours ou critère d’arrêt n’apparaît. Aucun registre de décision ou de changement n’existe après signature.                                           | Un cahier des charges figé ne permet pas de savoir si le produit livré crée la valeur attendue ni si un changement justifie un nouveau coût.            | Ajouter baseline, cible, source, fréquence, responsable, décision ; ajouter version, hypothèse, demande de changement, impact, approbation et nouvelle référence de coût/délai.                       |
| P1-5 | La page contient des prises de position dispersées (`page.tsx:414-417`, `929-948`, `1009-1013`), mais aucune position Hagnéré Code complète, aucun conflit d’intérêt et aucun contre-cas chiffré.                                    | Le lecteur ne sait pas clairement quand un dossier court suffit, quand payer une étude, quand utiliser un outil existant ou quand ne pas développer.    | Écrire une position attribuée, les faits qui la fondent, deux cas inverses, le signal de révision et ce que l’agence déconseille même si elle pourrait le vendre.                                     |
| P1-6 | Les passages ASVS (`page.tsx:759-780`) et WCAG/RGAA (`page.tsx:822-845`) concentrent sigles, précautions et qualifications dans de longs paragraphes. « Recette » apparaît sans traduction immédiate (`page.tsx:594`, `615`, `951`). | Un dirigeant peut survoler précisément au moment où la responsabilité et le test deviennent décisifs. La preuve juridique prend le dessus sur l’action. | Traduire d’abord l’action en une phrase, définir « recette » comme les tests avant acceptation et paiement, puis isoler la source et la limite dans un encadré court.                                 |

#### P2 — améliorations réelles

| ID   | Constat                                                                                                                                                                                                                                                                                              | Correction proposée                                                                                                                                                                                                                  |
| ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| P2-1 | Le hero promet une visite de l’exemple, pas le résultat final du lecteur.                                                                                                                                                                                                                            | Promettre un dossier prêt à envoyer, une liste d’inconnues et une grille de comparaison, seulement après création réelle de ces éléments.                                                                                            |
| P2-2 | Le titre « Claire paie : quand son entreprise existe-t-elle vraiment ? » (`page.tsx:469-471`) emploie une image ambiguë : l’entreprise juridique existe déjà.                                                                                                                                        | Parler de l’ouverture de l’accès : « Écrivez ce qui ouvre, bloque et rétablit l’accès ».                                                                                                                                             |
| P2-3 | Les quatre cases Décision / Exclusion / Preuve / Responsable reviennent avec la même cadence et donnent une légère empreinte de gabarit.                                                                                                                                                             | Les conserver comme fiche réutilisable une seule fois, puis varier avec chronologie annotée, devis comparés et journal de décision.                                                                                                  |
| P2-4 | Huit FAQ reprennent en partie comptes, Stripe, export, contrat, support et application métier déjà traités.                                                                                                                                                                                          | Garder uniquement les questions résiduelles et renvoyer les réponses structurantes dans le corps ou le kit.                                                                                                                          |
| P2-5 | `cardDescription` accorde « responsabilités oubliés » au masculin (`guides.ts:802-803`).                                                                                                                                                                                                             | Écrire « responsabilités oubliées ».                                                                                                                                                                                                 |
| P2-6 | La page lie les guides facturation et sécurité seulement dans les liens associés, et ne lie pas le guide RGPD SaaS dans son passage données.                                                                                                                                                         | Ajouter des liens contextuels au moment exact où le lecteur doit approfondir, puis raccourcir les développements qui appartiennent aux pages spécialisées.                                                                           |
| P2-7 | Les grilles `sm:grid-cols-2/3` devraient se replier correctement, mais les dix sections, cartes répétées et huit FAQ créent un long tunnel sur téléphone. Aucun contrôle navigateur nouveau n’a été mené pour ce snapshot dans ce contre-audit.                                                      | Placer une synthèse de décision avant le récit, agréger les détails dans le kit et contrôler 320, 390, 768, 1 024 et 1 440 px en clair/sombre.                                                                                       |
| P2-8 | Les tests génériques vérifient forme, jargon interdit, nombre de CTA et longueur des métadonnées ; aucun test ne prouve le livrable, les calculs ou la comparaison propres à ce guide.                                                                                                               | Ajouter des tests dédiés sur fichiers livrés, totaux, inconnues non nulles, liens profonds, promesses et état mobile via navigateur.                                                                                                 |
| P2-9 | La page conserve la carte commerciale latérale par défaut (`guide-layout.tsx:89`, `266-270`), ajoute un CTA éditorial et laisse le bouton téléphone actif par défaut dans ce CTA (`guide-content-blocks.tsx:258-265`, `308-315`). Sur mobile, la carte latérale descend sous l’article avant la FAQ. | Choisir une seule sortie éditoriale principale. Pour ce guide long et autonome, tester `showSidebarCta={false}` et `showPhone={false}` afin que la relecture du cahier des charges reste le seul prolongement commercial contextuel. |

### 12.4 Qualité de plume et empreinte IA

#### Ce qui sonne humain

- Le problème initial est concret : trois devis peuvent cacher trois produits
  différents.
- Claire et Léa ont des rôles stables ; Studio Rivage sert un test précis,
  jamais une anecdote promotionnelle.
- Les erreurs sont ordinaires : invitation expirée, paiement refusé, compte
  révoqué, restauration ou export.
- Le texte sait dire non : pas d’essai gratuit, pas de plusieurs offres, pas
  de conformité globale et pas d’architecture imposée.
- La conclusion peut renvoyer à la validation ou au MVP au lieu de pousser
  mécaniquement au développement.

#### Ce qui paraît encore fabriqué

- La progression en dix sections numérotées, chacune accompagnée d’un bloc,
  d’une réserve puis d’un nouveau bloc, crée une régularité perceptible.
- Les quatre étiquettes identiques rendent la méthode mémorisable, mais leur
  répétition fait passer la forme avant la question du lecteur.
- Les noms fictifs sont utilisés seize fois ; le récit reste cohérent, mais
  finit par donner l’impression d’un cas d’école plus que d’un document de
  travail.
- Les réserves « propre à cet exemple », « pas une norme » et « à vérifier »
  sont justes, mais fragmentées. Elles peuvent être regroupées sans perdre la
  prudence.
- La page traverse successivement paiement, sécurité, RGPD, accessibilité,
  propriété intellectuelle et Data Act. Cette exhaustivité donne de la
  crédibilité, mais elle dilue la question centrale : que doit décider le
  dirigeant avant d’envoyer son dossier ?

**Règle de réécriture :** ne pas rallonger le guide en ajoutant cinq nouvelles
sections aux dix existantes. Transformer une partie de la prose en artefacts
réutilisables et faire de la page la démonstration commentée de ces artefacts.

### 12.5 Corrections proposées phrase par phrase

Ces formulations sont des propositions éditoriales, pas des modifications déjà
appliquées. Toute promesse de kit ou de livrable est conditionnée à sa création
et à son test réels.

| Emplacement                         | Formulation actuelle ou fonction                                                                         | Remplacement proposé                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ----------------------------------- | -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Hero, `page.tsx:224-225`            | « Suivez un SaaS fictif… Vous verrez quoi décider… »                                                     | « Vous voulez envoyer le même dossier à plusieurs prestataires et comparer leurs réponses sans écrire l’architecture vous-même ? Partez d’un exemple rempli, repérez les décisions encore ouvertes et préparez les tests qui permettront d’accepter la livraison. »                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Ouverture, `page.tsx:292-306`       | Situation juste, mais aucune décision « consulter / tester / attendre » ni résultat final.               | « Vous avez validé le problème et choisi ce que votre premier client doit réussir. Pourtant, au moment de demander un devis, chaque prestataire imagine encore un produit différent : l’un ouvre les comptes manuellement, l’autre automatise l’inscription, un troisième oublie l’impayé, le support ou le départ du client. Un bon cahier des charges SaaS ne décrit pas tous les écrans. Il suit une entreprise cliente de l’achat à la récupération de ses données et précise, à chaque étape, la règle, l’erreur possible, le test et la personne responsable. Si l’acheteur ou le premier résultat reste incertain, ne demandez pas encore de forfait. Sinon, ce guide vous aide à produire le même dossier pour tous, réserver le temps de votre équipe et comparer les réponses sur un coût commun. » |
| H2, `page.tsx:327-329`              | « Vérifiez que le cahier des charges arrive au bon moment »                                              | « Avant d’écrire : devez-vous consulter, tester une inconnue ou attendre ? »                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Alerte, `page.tsx:353-359`          | « Le cahier des charges ne remplace pas une décision »                                                   | « N’envoyez pas encore de demande de devis si vous ne connaissez pas l’acheteur, la tâche qu’il paie ou la première version. Testez ce point d’abord. Une page supplémentaire ne rendra pas les offres comparables. »                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| H2, `page.tsx:362-364`              | « DossierClair accueille son premier client demain »                                                     | « Voici le dossier de départ que tous les prestataires doivent recevoir »                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Exclusions, `page.tsx:413-417`      | « Les exclusions ne sont pas une faiblesse… »                                                            | « Notre recommandation est de retirer une fonction tant que personne ne peut expliquer pourquoi le premier client en a besoin. Une exclusion écrite protège mieux le budget qu’une longue liste “au cas où”. Réintégrez-la seulement avec son usage, son test, son coût et la personne qui la décide. »                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Fiche, `page.tsx:420-426`           | « La fiche remise à tous les prestataires »                                                              | « Copiez ces hypothèses dans la première page du dossier. Un prestataire peut les contester et chiffrer une variante ; il ne peut pas les remplacer en silence. »                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| H2, `page.tsx:469-471`              | « Claire paie : quand son entreprise existe-t-elle vraiment ? »                                          | « Écrivez ce qui ouvre, bloque et rétablit l’accès après un paiement »                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Stripe, `page.tsx:479-490`          | Source et états avant conséquence.                                                                       | « Le navigateur peut afficher “paiement réussi” alors que l’application n’a pas encore reçu une confirmation exploitable. Décidez donc quelle confirmation ouvre l’accès, ce qui se passe si elle arrive deux fois et qui traite une erreur. La documentation Stripe illustre ces états ; elle ne vous oblige ni à choisir Stripe ni à reprendre ses règles commerciales. »                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| H2, `page.tsx:553-555`              | « Claire invite Léa sans ouvrir la porte aux autres clients »                                            | « Vérifiez qu’un salarié ne peut jamais voir les données d’une autre entreprise cliente »                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Phrase, `page.tsx:590-594`          | « “Nous avons des rôles” n’est pas un critère de recette. »                                              | « “Nous avons prévu des rôles” ne suffit pas. Avant d’accepter et de payer cette fonction, retirez l’accès de Léa pendant qu’elle est connectée et vérifiez ce qu’elle peut encore ouvrir. »                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Encadré, `page.tsx:614-631`         | « Recette du parcours vendu »                                                                            | « Les cinq tests à réussir avant d’accepter le parcours principal »                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| H2, `page.tsx:679-681`              | « Le SaaS doit encore fonctionner le lundi suivant »                                                     | « Prévoyez qui aide les clients, restaure les données et décide pendant un incident »                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ASVS, `page.tsx:759-780`            | Un paragraphe de plus de vingt lignes mêle version, annexe, contrôle, prestataire, audit et maintenance. | « N’écrivez pas seulement “le SaaS sera sécurisé”. Choisissez les risques à traiter — comptes, sessions, droits, secrets et traces — puis demandez pour chacun un contrôle, une preuve et une personne responsable. OWASP ASVS 5.0.0 peut fournir des exigences numérotées, mais citer le référentiel ne vaut ni audit ni certification. Si vous ne savez pas choisir les contrôles proportionnés, faites mener cette étude avant de comparer des forfaits. »                                                                                                                                                                                                                                                                                                                                                 |
| H2, `page.tsx:783`                  | « Écrivez les choix de données et d’accessibilité »                                                      | « Décidez quelles données sont utiles et comment chacun pourra utiliser le service »                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| WCAG/RGAA, `page.tsx:822-845`       | Le test pratique est suivi d’une réserve juridique longue.                                               | « Pour le parcours principal, testez au minimum le clavier, le focus visible, les intitulés, les erreurs et les messages d’état. WCAG 2.2 fournit des critères vérifiables pour préparer ces tests. Cette sélection ne permet pas d’annoncer une conformité AA ou RGAA : le périmètre légal et l’ensemble des critères applicables doivent être contrôlés séparément. »                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| H2, `page.tsx:925-927`              | « Demandez au prestataire de rendre ses hypothèses visibles »                                            | « Comparez les devis sur les mêmes fonctions, les mêmes coûts et les mêmes responsabilités »                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Méthode de test, `page.tsx:950-956` | « La recette se déroule… étant donné / lorsque / alors… »                                                | « Avant de payer la livraison, rejouez les scénarios dans un espace de test avec de faux comptes et de faux dossiers préparés à l’avance. Pour chaque test, écrivez la situation de départ, l’action de la personne, le résultat attendu et la preuve à conserver. »                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Conclusion, `page.tsx:1008-1021`    | Refus des adjectifs et renvois, sans position professionnelle complète.                                  | « Notre position : pour un premier SaaS simple, un dossier court, rempli et testé vaut mieux qu’un document de cinquante pages. En revanche, ne signez pas un forfait ferme si une connexion importante, une donnée sensible, une règle de facturation ou un niveau de disponibilité peut encore déplacer fortement le prix. Testez cette inconnue, chiffrez-la séparément ou reportez le développement. Si un outil existant couvre le parcours essentiel, comparez-le au sur-mesure avant d’investir. »                                                                                                                                                                                                                                                                                                     |
| CTA, `page.tsx:1023-1032`           | « Vérifier que trois prestataires chiffreront le même SaaS » ; résultat après clic encore abstrait.      | Titre : « Repérer ce qui empêche encore de comparer vos devis ». Description à valider commercialement : « Transmettez votre parcours, vos exclusions et les réponses déjà reçues. La relecture doit vous rendre une liste des décisions manquantes, des coûts encore incomparables et des tests à ajouter. Si l’idée ou le premier parcours n’est pas assez validé, la recommandation peut être de ne pas consulter tout de suite. »                                                                                                                                                                                                                                                                                                                                                                         |
| Registre, `guides.ts:798`           | « exemple complet » sans actif autonome.                                                                 | Si le kit existe et passe ses tests : conserver. Sinon : « Cahier des charges SaaS : exemple commenté · Hagnéré Code ».                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Registre, `guides.ts:802-803`       | « responsabilités oubliés »                                                                              | « …décisions, exclusions, tests et responsabilités oubliées. »                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

### 12.6 Architecture de réécriture non reconnaissable

Le guide ne doit pas devenir une version plus longue du plan actuel. Une
architecture plus naturelle consiste à faire vivre **un dossier de consultation
et les trois réponses qu’il produit**, plutôt qu’à dérouler dix chapitres
techniques.

#### Ouverture — trois devis, trois produits

- Situation en 150 mots.
- Réponse : le dirigeant décrit le résultat, les erreurs, les responsabilités
  et les tests ; le prestataire justifie la technique.
- Mini-arbre : `attendre`, `tester une inconnue`, `préparer le dossier`,
  `consulter`.

#### Acte 1 — le dossier d’une page avant le long document

- Acheteur, problème payé, parcours principal, exclusions, volumes, données,
  date, budget encore inconnu.
- DossierClair rempli dans la page.
- Boutons vers trame vierge et exemple rempli réellement éditables.
- Estimation fictive du temps de préparation : fondateur, opérations, finance
  et tests, avec possibilité de remplacer les heures.

#### Acte 2 — une frise de la vie du client

Une seule frise ou série de cartes :

```text
achète → reçoit l’accès → invite → réalise la tâche → rencontre une erreur
→ demande de l’aide → paie à nouveau → résilie → récupère ses données
```

Les ancres historiques `achat`, `comptes`, `action`, `echecs`,
`exploitation`, `donnees` et `sortie` sont préservées dans cette frise pour ne
pas casser les liens publiés. Chaque étape tient en quatre lignes :
`règle`, `erreur`, `test`, `responsable`. Les détails de facturation, sécurité
et RGPD renvoient aux guides spécialisés.

#### Acte 3 — les trois réponses reviennent

- Offre A : prix d’appel, options et exploitation séparées.
- Offre B : plus chère au départ, davantage inclus.
- Offre C : étude puis construction par étapes.
- Comparaison sur 24 mois, mêmes volumes et même sortie.
- Inconnues marquées « à confirmer », jamais `0 €`.
- Trois verdicts : si la trésorerie, le risque ou la vitesse domine.

#### Acte 4 — une inconnue qui mérite peut-être une étude

Reprendre le scénario illustratif :

```text
étude ciblée = 3 jours × 900 € = 2 700 €
découverte tardive = 12 jours × 900 € + 4 000 € = 14 800 €
seuil illustratif = 2 700 / 14 800 = 18,24 %
```

Expliquer que le seuil ne mesure pas une probabilité réelle : il indique à
partir de quelle conviction l’étude devient rationnelle dans cet exemple.

#### Acte 5 — la journée d’acceptation

- Trente scénarios fictifs, temps de premier passage, retests, synthèse et
  capacité valorisée.
- Liste courte des anomalies qui bloquent la mise en ligne.
- Matrice éditable `situation / action / résultat / preuve / responsable /
état`.
- Définition de la « recette » à la première phrase, puis usage possible du
  terme.

#### Acte 6 — ce qui change après signature

- registre des hypothèses et questions ouvertes ;
- demande de changement, impact sur coût/délai/risque, décision et version ;
- mesure initiale, activation ou tâche achevée, incidents, support et impayés ;
- revue à 30 et 90 jours ;
- critères `continuer`, `corriger`, `simplifier` ou `arrêter`.

#### Sortie — position professionnelle et choix suivant

- dossier court si les décisions sont connues ;
- étude ciblée si une inconnue coûteuse subsiste ;
- outil existant ou procédure manuelle si elle couvre le besoin ;
- pas de devis si l’acheteur et le premier résultat ne sont pas validés ;
- CTA de relecture avec livrable exact et mauvais fit visible.

Cette progression conserve les faits et le cas DossierClair, mais retire
l’empreinte « dix chapitres techniques + même bloc de quatre cases + CTA ».
Elle fait alterner dilemme, document rempli, frise, comparaison, calcul,
tests et décision.

### 12.7 Comparaison, chiffres et opinion à rendre visibles

Les cinq scénarios préparés dans cet audit sont utiles, mais la page ne doit
pas tous transformer en longs chapitres. Le minimum publiable est :

1. **temps côté entreprise** : 21 h et 1 250 € de capacité valorisée dans
   l’exemple, avec hypothèses modifiables ;
2. **trois TCO sur 24 mois** : 123 200 €, 111 700 € et 120 900 € dans
   l’exemple fictif, postes identiques et inconnues visibles ;
3. **analyse d’une inconnue** : étude de 2 700 €, découverte tardive de
   14 800 €, seuil illustratif de 18,24 % ;
4. **charge des tests** : 9 h 20 et 513,33 € de capacité valorisée dans
   l’exemple ;
5. **score pondéré** : 6,95, 8,45 et 7,80, chaque note reliée à une preuve.

Ces nombres ne deviennent pas des prix Hagnéré Code ni des pratiques de
marché. Ils restent des exemples illustratifs fictifs, hors taxes, avec
formule, inclus, exclus, horizon et variable de sensibilité. La meilleure
réécriture permet au lecteur de remplacer les valeurs dans un fichier autonome.

La position professionnelle doit être lisible sans parcourir les sources :

> Un dirigeant décide ce qui doit arriver au client, ce qui est exclu, ce qui
> peut échouer et comment la livraison sera vérifiée. Il ne doit pas inventer
> l’architecture. Un dossier court et rempli suffit lorsque le parcours et les
> risques sont connus. Une étude ciblée est préférable lorsqu’une inconnue peut
> déplacer fortement le prix, le délai, la conformité ou le coût récurrent.
> Nous déconseillons le sur-mesure si un outil existant couvre durablement le
> parcours essentiel.

Le contre-cas doit suivre immédiatement : un projet réglementé, une intégration
incertaine, un grand compte exigeant une connexion d’entreprise ou une donnée
sensible peut nécessiter davantage de spécialistes et un document plus formel.

### 12.8 SEO, maillage et cannibalisation

#### Intention détenue

L’URL doit rester propriétaire de :

```text
Transformer un SaaS déjà validé en dossier de consultation testable afin que
plusieurs prestataires décrivent et chiffrent le même produit.
```

Cette intention est distincte des pages voisines :

| Page voisine                             | Intention à lui laisser                                   | Ce guide conserve                                                                               |
| ---------------------------------------- | --------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `valider-idee-saas-avant-developper`     | vérifier problème, acheteur, prix et test manuel          | commencer après validation et aiguiller vers l’arrêt si elle manque                             |
| `mvp-saas-quoi-inclure`                  | choisir ce qui entre dans la première version             | transformer ce choix en règles, erreurs, responsabilités et tests                               |
| `facturation-abonnements-saas`           | détailler contrat, facture, paiement, accès et exceptions | inscrire uniquement les interfaces et tests nécessaires dans le dossier                         |
| `securite-saas-b2b`                      | construire et produire les preuves sécurité               | demander les exigences, responsables et preuves adaptées au devis                               |
| `rgpd-saas-b2b`                          | qualifier rôles, données, contrat et sous-traitants       | inscrire les décisions fonctionnelles et signaler quand consulter un spécialiste                |
| `combien-coute-un-saas`                  | fournir les estimations de marché et le budget d’un SaaS  | comparer trois réponses fictives à même périmètre, sans créer une nouvelle fourchette de marché |
| `choisir-prestataire-application-metier` | choisir un prestataire pour une application interne       | comparer ici les réponses spécifiques à un SaaS vendu à plusieurs entreprises                   |
| `cahier-des-charges-application-metier`  | processus interne d’une organisation                      | comptes clients séparés, abonnement, exploitation et sortie d’un abonné                         |

#### Corrections SEO/produit

- Conserver l’URL, le canonical et le H1 : l’intention est distincte.
- Conserver « exemple complet » seulement si le kit complet existe, est
  téléchargeable sans e-mail et passe ses tests.
- Ajouter « modèle » dans le title ou la meta uniquement si un modèle éditable
  réel est livré ; ne pas capter cette requête avec une promesse sémantique.
- Réduire les développements spécialisés et ajouter les liens contextuels au
  moment du besoin, pas seulement dans `relatedLinks`.
- Préserver les ancres historiques pendant la nouvelle architecture.
- Recalculer le temps de lecture sur le rendu final ; ne pas reporter
  automatiquement les 16 minutes actuelles.
- Mettre à jour `dateModified` seulement après publication réelle de la
  réécriture substantielle.
- Vérifier le texte de l’image sociale : « exemple SaaS rempli » ne doit rester
  que si la page et le kit tiennent cette promesse.

### 12.9 Ce que les tests actuels prouvent et ne prouvent pas

Les tests génériques apportent des garde-fous utiles :

- `guides.test.ts:25-137` vérifie unicité, dates, indexation, routes et images ;
- `guides.test.ts:140-177` protège contre les faux clients ;
- `guide-human-language.test.ts:1289-1304` exige un lead adressé au lecteur,
  inférieur à 150 mots et sans une liste limitée de jargon ;
- `guide-human-language.test.ts:1319-1337` protège les titres contre cette même
  liste ;
- `guide-human-language.test.ts:1339-1376` empêche seulement une ouverture ou un
  plan textuellement identique ;
- `guide-human-language.test.ts:1397-1423` limite le CTA et contrôle sa position ;
- `guide-human-language.test.ts:1426-1457` contrôle la longueur des métadonnées ;
- `guide-human-language.test.ts:1471-1484` limite les `GuideTable` à trois
  colonnes.

Ils ne démontrent pas :

- que la réponse des 150 mots contient bien une décision ;
- qu’un dirigeant comprend ASVS, WCAG, RGAA ou « recette » ;
- que le fichier promis existe et s’ouvre ;
- que les trois offres utilisent le même horizon et les mêmes postes ;
- que les calculs sont justes ;
- que les coûts inconnus restent inconnus au lieu de devenir zéro ;
- que le CTA rend le résultat annoncé ;
- que la comparaison est lisible à 390 px ;
- que le guide ne cannibalise pas ses pages spécialisées.

La réécriture doit donc ajouter des assertions propres au guide et ne pas
utiliser une suite générique verte comme preuve de qualité éditoriale.

### 12.10 Critères GO

Le guide ne reçoit un verdict GO que si toutes les cases suivantes sont
fermées sur le même snapshot :

#### Contenu et décision

- [ ] les 150 premiers mots disent quand consulter, tester une inconnue ou
      attendre ;
- [ ] le dirigeant sait quel document produire, qui doit contribuer et combien
      de temps réserver dans l’exemple ;
- [ ] un bon fit, deux mauvais fits et l’option « outil existant / ne pas
      développer » sont visibles ;
- [ ] la position Hagnéré Code, son conflit d’intérêt, ses preuves, ses
      contre-cas et son signal de révision sont explicites ;
- [ ] aucune section ne répète le guide facturation, sécurité, RGPD, budget ou
      choix de prestataire au-delà de ce qui doit figurer dans le cahier des
      charges ;
- [ ] les sigles sont expliqués après l’action concrète, jamais avant.

#### Actif autonome

- [ ] trame vierge éditable ;
- [ ] exemple DossierClair entièrement rempli ;
- [ ] matrice de tests et retests ;
- [ ] comparaison de trois réponses sur 24 mois ;
- [ ] registre des inconnues, décisions et changements ;
- [ ] tableau de mesure à 30 et 90 jours ;
- [ ] mode d’emploi, version, sources, limites et exemple de sortie ;
- [ ] téléchargement sans captation obligatoire d’e-mail ;
- [ ] ouverture, formules, impression et compatibilité bureautique réellement
      testées.

#### Chiffres et comparaison

- [ ] au moins trois scénarios cohérents, avec formule, horizon, inclus, exclus
      et sensibilité ;
- [ ] chaque montant est clairement fictif ou relié à une source datée ;
- [ ] aucune inconnue n’est remplacée par zéro ;
- [ ] les cinq calculs sont refaits indépendamment ;
- [ ] la grille explique pourquoi chaque offre peut gagner selon une priorité
      différente ;
- [ ] la page montre un cas où l’étude, l’outil existant ou l’attente gagne
      contre le développement.

#### Conversion, SEO et technique

- [ ] le CTA annonce un livrable réellement fourni après le clic et un mauvais
      fit vérifiable ;
- [ ] la pression commerciale reste proportionnée : une seule sortie
      contextuelle, sans répétition automatique de la carte latérale et du
      téléphone ;
- [ ] la grammaire du registre est corrigée ;
- [ ] title, meta, H1, carte et image sociale ne promettent rien d’absent ;
- [ ] liens contextuels vers facturation, sécurité, RGPD, coût et MVP ;
- [ ] ancres historiques préservées ;
- [ ] score final au moins 90/100, aucun axe sous 8 et axes Intention,
      Décision, Pédagogie, Profondeur, Preuve et Comparaison à 9 ou 10 ;
- [ ] zéro P0 et zéro P1 après contre-audit indépendant ;
- [ ] tests dédiés, SEO, ESLint, TypeScript, suite complète et build verts ;
- [ ] rendu contrôlé à 320, 390, 768, 1 024 et 1 440 px, clair et sombre,
      sans colonne décisive cachée ni débordement ;
- [ ] fichier, page, CTA, liens, FAQ et image sociale contrôlés dans un vrai
      navigateur ;
- [ ] statut déclaré sans confondre « techniquement prêt », « publié » et
      « indexé ».

### Verdict du contre-audit humain

Le guide actuel mérite d’être conservé comme matière première : DossierClair,
les exclusions, les tests d’isolement, de paiement, de restauration et de
sortie sont solides. Il ne faut ni le jeter ni le gonfler.

La réécriture doit changer son **produit final**. Aujourd’hui, le lecteur lit un
excellent exemple. Après correction, il doit repartir avec un dossier qu’il
peut remplir, un temps qu’il peut réserver, trois réponses qu’il peut comparer
et une règle claire pour signer, étudier une inconnue, simplifier ou ne pas
développer. Tant que ces quatre résultats ne sont pas réels et testés, le
verdict reste **NO-GO — 79/100, 16/20**.
