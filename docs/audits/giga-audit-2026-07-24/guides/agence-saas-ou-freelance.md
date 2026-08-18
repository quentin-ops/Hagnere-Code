# Audit approfondi — `agence-saas-ou-freelance`

Date : 24 juillet 2026

Auditeur concurrentiel : Codex, lot benchmark international

Snapshot du guide : `src/app/guides/agence-saas-ou-freelance/page.tsx`, SHA-256 `26a2008b2eedfd7b9d68db07cb6c346f45cf9c42b31eb175fd00287930943600`

Périmètre : audit éditorial et décisionnel uniquement. Aucune modification de la page publique, du registre des guides, des manifestes ou de la documentation partagée n’a été réalisée dans ce lot.

## 1. Verdict exécutif

```text
Lecteur exact : fondateur ou dirigeant non technique qui compare une agence, un freelance ou une équipe composée pour construire puis exploiter un SaaS.
Question réelle : qui peut prendre en charge la prochaine phase, combien cela coûtera réellement et que se passe-t-il si une personne part ou si le service tombe ?
Décision attendue : choisir l'organisation qui couvre les responsabilités au coût total acceptable, ou reporter si le produit et le responsable côté client ne sont pas prêts.
Réponse actuelle en une phrase : le statut ne décide pas ; il faut nommer décisions, intervenants, relais, preuves et actifs pour la prochaine étape.
Défaut qui coûte le plus de valeur : le guide cartographie les responsabilités sans quantifier le coût du travail déplacé, la continuité, le retard ou la reprise.
Niveau actuel : B
Priorité : haute
Statut : audité / à enrichir substantiellement
```

Le guide évite deux caricatures courantes : l’agence n’est pas forcément une équipe disponible et le freelance n’est pas forcément une personne isolée. Cette honnêteté, la carte des responsabilités, les deux scénarios d’entretien et la distinction code/droits/comptes forment une base remarquable.

Mais le guide demande au dirigeant de « comparer le coût de la même étape » sans lui montrer un seul coût complet. C’est sa contradiction éditoriale majeure. Il ne traite pas non plus assez :

1. le temps de coordination absorbé par l’entreprise ;
2. le coût d’un spécialiste externe non inclus ;
3. la valeur attendue d’un retard ;
4. le risque d’indisponibilité et son seuil économique ;
5. la sécurité du produit comme responsabilité de fabrication, pas comme ligne vague du devis ;
6. le coût de la sortie et de la reprise ;
7. les conditions qui justifient réellement le supplément d’une agence.

La position professionnelle à assumer :

> Pour un premier lot étroit, un excellent freelance avec un client qui décide et un relais organisé peut être supérieur à une agence. Dès que produit, expérience, paiements, données, sécurité, mise en ligne et support doivent avancer ensemble, l’économie au tarif journalier devient trompeuse. L’agence ne gagne toutefois que si ses rôles sont nommés et réellement inclus.

### Score avant correction

| Axe         | Note /10 | Preuve localisable                                                  | Manque décisif                                                                                                                    |
| ----------- | -------: | ------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| Intention   |        9 | Dilemme agence/freelance ancré dans un SaaS exploité                | Les profils fondateur en validation, PME lançant un outil et SaaS déjà en production pourraient être mieux séparés                |
| Décision    |        9 | Freelance, agence, équipe hybride et report                         | Aucun seuil économique ne départage ces voies                                                                                     |
| Pédagogie   |        9 | SaaS défini simplement, responsabilités et scénarios concrets       | Coût complet, risque attendu et propriété intellectuelle peuvent encore être mieux traduits                                       |
| Profondeur  |        7 | Produit, UX, code, tests, mise en ligne, support, actifs et données | Sécurité produit, architecture multi-client, assurance, SLA, sous-traitance, recrutement et gouvernance de version restent courts |
| Preuve      |        7 | DAE, Légifrance, CNIL et GitHub officiels                           | Pas de cadre de développement sécurisé, de source internationale d’achat numérique ni de cas avant/après                          |
| Comparaison |        6 | Même étape et quatre catégories de coût                             | Aucun montant, horizon, sensibilité, coût de continuité ou de sortie                                                              |
| Originalité |        8 | Carte de responsabilités et deux exercices d’incident               | Pas de calculateur, matrice RACI livrable ou test de reprise chronométré                                                          |
| Style       |        9 | Ton humain, nuancé, professionnel et non défensif                   | L’opinion Hagnéré Code est encore trop discrète face aux conséquences économiques                                                 |
| Conversion  |        8 | Action autonome, conflit déclaré et CTA ouvert aux autres options   | Le prospect n’arrive pas avec un budget complet ni un seuil de décision                                                           |
| SEO/produit |        8 | Intention distincte, FAQ, maillage et données structurées           | Couverture internationale, sécurité, TCO et actif téléchargeable insuffisants                                                     |

Total : **80/100**

Le guide est bon et honnête, mais la note de 20/20 de son ancien dossier de recherche ne résiste pas au référentiel renforcé. Pour viser 90/100, comparaison, preuve et profondeur doivent progresser sans transformer la page en catalogue de jargon.

## 2. Ce que le guide dit réellement

- **Réponse dans les 150 premiers mots :** oui. Il n’existe pas de vainqueur général ; la prochaine étape et les responsabilités décident.
- **Progression :** phases du SaaS, six responsabilités, personnes réelles, changement et incident, coût, actifs, quatre verdicts, brief commun.
- **Verdict :** freelance pour un lot limité et bien piloté ; agence lorsque plusieurs métiers doivent être coordonnés ; hybride ou report possibles.
- **Exemples présents :** fonction urgente et incident bloquant, mais sans chiffres, délai ni conséquence économique.
- **Calculs présents :** aucun.
- **Comparaison présente :** quatre colonnes conceptuelles — inclus, payé ailleurs, interne, à confirmer — sans exemple rempli.
- **Sources :** achats publics français, propriété intellectuelle, RGPD et rôles GitHub.
- **Bon fit :** SaaS B2B, responsabilités multiples, données, intégrations et continuité.
- **Mauvais fit :** idée non validée, recherche d’associé, tâche technique isolée ou décision au seul tarif.
- **CTA :** transparent sur ce que demande le formulaire et sur l’absence de préférence automatique.
- **Élément faussement complet :** la liste des responsabilités permet de voir les cases, pas leur charge, leur qualité ni leur coût.

Le guide doit donc rester centré sur l’organisation, mais rendre cette organisation économiquement comparable.

## 3. Benchmark France et international

Requêtes, marchés et date :

- France : « agence SaaS ou freelance », « coût développement SaaS agence freelance », « choisir développeur SaaS » ;
- États-Unis : « SaaS development agency vs freelancer », « app agency freelancer in-house TCO » ;
- Royaume-Uni : « SaaS development cost UK », « choose SaaS development agency » ;
- Australie et Canada : « digital sourcing software supplier », « custom software agency vs freelancer » ;
- recherche effectuée le 24 juillet 2026 ; les résultats observés ne constituent pas un classement Google.

### Saturation

La concurrence est saturée sur les tableaux « coût, vitesse, expertise, flexibilité, fiabilité ». Les comparatifs penchent presque toujours vers le modèle vendu par leur auteur. Les pages tarifaires affichent des écarts immenses sans normaliser le périmètre, le niveau de production ni le temps du client.

Le gain d’information restant :

- même prochaine phase et mêmes critères d’acceptation ;
- temps client valorisé séparément ;
- coût des spécialistes et de la continuité ;
- sécurité et exploitation incluses ou explicitement exclues ;
- coût de retard probabilisé ;
- TCO sur 24 mois ;
- seuil qui justifie le supplément agence ;
- exercice de reprise chronométré ;
- option de validation ou de recrutement interne ;
- opinion professionnelle qui peut recommander un freelance.

| Ressource et URL directe                                                                                                                                                      | Marché                   | Réponse utile                                                                        | Preuve, outil ou exemple                                       | Limite                                                                        | Apport à adapter                                                                                    |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ | ------------------------------------------------------------------------------------ | -------------------------------------------------------------- | ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| [Codeur.com — Développement plateforme SaaS](https://www.codeur.com/developpement-plateforme-saas)                                                                            | France                   | Rend visible l’abondance d’offres et de demandes                                     | Projets, devis et compétences recherchées                      | Place de marché ; budgets déclarés non vérifiés et périmètres hétérogènes     | Montrer pourquoi un nombre d’offres ou un tarif journalier ne normalise pas la mission              |
| [Digital Unicorn — Agence SaaS](https://digitalunicorn.fr/agence-developpement-logiciel-saas-sur-mesure/)                                                                     | France                   | Liste design, développement, cloud, stratégie et accompagnement                      | Fourchette très large et blocs de responsabilités              | Page commerciale, promesses et montants non auditables                        | Transformer les rôles en livrables acceptables, sans reprendre la fourchette                        |
| [Direction des achats de l’État — Guide du sourçage 2025](https://www.economie.gouv.fr/files/files/directions_services/dae/doc/Guide_sourcing.pdf)                            | France / autorité        | Encourage la connaissance du marché avant consultation                               | Méthode officielle de dialogue fournisseur                     | Achat public, non obligatoire pour une PME                                    | Conserver la méthode et ajouter un script d’entretien commun                                        |
| [Bolder Apps — Agency vs Freelancer vs In-House](https://www.bolderapps.com/blog-posts/app-development-agency-vs-freelancer-vs-in-house-team-a-three-way-comparison-for-2026) | États-Unis               | Compare trois organisations et rend le coût visible                                  | Tableau coûts, délais et charges fixes                         | Chiffres commerciaux US, missions non normalisées                             | Ajouter l’interne et construire un TCO français illustratif                                         |
| [VeryCreatives — SaaS Agency vs Freelancer](https://verycreatives.com/blog/saas-development-agency-vs-freelancer)                                                             | International anglophone | Traite le coût caché de coordination et de reprise                                   | Comparaison centrée SaaS                                       | Article d’agence, fourchettes non indépendantes                               | Quantifier le temps client au lieu de seulement le citer                                            |
| [SaaS Development Agency UK — Cost guide](https://saasdevelopmentagency.co.uk/blog/saas-development-cost-uk-pricing-breakdown)                                                | Royaume-Uni              | Décompose MVP, plateforme, exploitation et contingence                               | Fourchettes et postes explicites                               | Données déclaratives d’agence ; écarts très larges                            | Reprendre les postes, jamais les montants comme références françaises                               |
| [GOV.UK — Choosing technology](https://www.gov.uk/service-manual/technology/choosing-technology-an-introduction)                                                              | Royaume-Uni / autorité   | Demande changement possible, maîtrise des données et minimisation du TCO/lock-in     | Principes publics de décision technologique                    | Cadre gouvernemental                                                          | Ajouter TCO, contrôle des données et capacité à changer de fournisseur                              |
| [NIST — Secure Software Development Framework 1.1](https://www.nist.gov/publications/secure-software-development-framework-ssdf-version-11-recommendations-mitigating-risk)   | États-Unis / autorité    | Fournit un vocabulaire commun entre acquéreur et fournisseur                         | Cadre de pratiques de développement sécurisé                   | Cadre haut niveau, pas checklist PME universelle                              | Demander des preuves proportionnées : exigences, provenance, tests, vulnérabilités et environnement |
| [CISA — Secure by Demand Guide](https://www.cisa.gov/sites/default/files/2024-08/SecureByDemandGuide_080624_508c.pdf)                                                         | États-Unis / autorité    | Place la sécurité dans l’achat, pas après la livraison                               | Questions fournisseurs et principe de sécurité par conception  | Vise les acheteurs de logiciels, notamment contextes à risque                 | Ajouter un mini-bloc de questions sécurité au même brief                                            |
| [Digital Transformation Agency — Digital Seller Underperformance Policy](https://www.dta.gov.au/media-releases/live-and-effect-new-digital-seller-underperformance-policy)    | Australie / autorité     | Organise depuis le 6 juillet 2026 la remontée de sous-performances graves confirmées | Politique et registre partagés pour de grands contrats publics | Vise surtout les contrats publics australiens d’au moins 4 M$ ou stratégiques | Distinguer une sous-performance prouvée d’une impression et écrire les critères d’acceptation       |
| [Essential Designs — Agency vs Freelancers](https://www.essentialdesigns.net/news/custom-software-agency-vs-freelancers-toronto)                                              | Canada                   | Compare agence boutique et indépendants avec matrice                                 | Angle régional et coûts déclarés                               | Contenu d’agence ; chiffres canadiens non transposables                       | Conserver l’idée de composition d’équipe, pas les taux                                              |

### Lecture concurrentielle

Les contenus internationaux battent parfois la page actuelle par la quantité de chiffres, mais pas par leur qualité. Hagnéré Code peut produire un avantage plus durable : un cas unique, les mêmes responsabilités, un TCO, les hypothèses et le contrôle inverse où le freelance gagne.

## 4. Matrice de gain d’information

| Question décisive                               | Réponse française dominante                | Apport international                                                                          | Couverture actuelle          | Manque                                                 | Réponse supérieure à produire                                                                   |
| ----------------------------------------------- | ------------------------------------------ | --------------------------------------------------------------------------------------------- | ---------------------------- | ------------------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| Un freelance suffit-il ?                        | Oui pour petit budget, non pour complexité | Les contenus US ajoutent l’interne et le coût caché                                           | Bonne réponse conditionnelle | Aucun seuil de charge ou de risque                     | Lot limité + responsabilités couvertes + coût de relais explicite                               |
| Une agence garantit-elle une équipe ?           | Souvent présumé                            | Les meilleurs comparatifs demandent composition et disponibilité                              | Très bonne                   | Pas de preuve de temps alloué ni de remplacement testé | Noms, quotité, sous-traitance, délai de remplacement et exercice de reprise                     |
| Comment comparer les prix ?                     | Tarif journalier ou fourchette MVP         | UK détaille phases et exploitation                                                            | Méthode qualitative          | Aucun exemple rempli                                   | Même périmètre, TCO 24 mois et temps client séparé                                              |
| Qui paie le pilotage ?                          | Rarement chiffré                           | Les comparatifs étrangers citent le coût de coordination                                      | Partiel                      | Pas d’heures ni de valeur                              | Heures client × coût chargé, sans les appeler économie de trésorerie                            |
| La sécurité est-elle incluse ?                  | « RGPD et sécurité » génériques            | NIST/CISA fournissent pratiques et questions                                                  | Faible                       | Aucun livrable ou acceptation                          | Exigences, modèle de menace proportionné, revue dépendances, correctifs et procédure d’incident |
| Quel est le coût d’un retard ?                  | Promesse de délai                          | Peu de pages probabilisent la valeur                                                          | Absent                       | Opportunité traitée comme certaine ou ignorée          | Marge mensuelle × retard × confiance, séparée de la comptabilité                                |
| Comment valoriser le relais ?                   | « Bus factor » ou documentation            | GOV.UK insiste sur le changement possible ; la DTA formalise les sous-performances confirmées | Bonne intuition              | Aucun risque attendu ni seuil                          | Coût de couverture comparé à probabilité × impact et critères de sous-performance               |
| Que récupère le client ?                        | Code et comptes                            | France apporte droit et RGPD ; UK apporte contrôle des données                                | Bonne                        | Test de reprise et coût de transition                  | Nouvelle équipe remet en ligne une version documentée dans un environnement propre              |
| Quand l’agence justifie-t-elle son supplément ? | « Complexité »                             | Les concurrents donnent des taux mais rarement un seuil                                       | Absent                       | Aucun coût d’équilibre                                 | Ventes, mois de retard ou risque évité nécessaires pour couvrir le premium                      |
| Faut-il reporter ?                              | Rarement assumé par les vendeurs           | Cadres publics commencent par le besoin                                                       | Très bonne                   | Pas de coût du petit test                              | Comparer interviews/prototype/pilote au coût d’une équipe complète                              |

## 5. Faits, fraîcheur et contradictions

Sources primaires revérifiées le 24 juillet 2026.

| Affirmation du guide                                                                                    | Verdict                        | Source primaire actuelle                                                                                                                                                                   | Périmètre                                                         | Correction ou enrichissement                                                 |
| ------------------------------------------------------------------------------------------------------- | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| Le dialogue fournisseur peut préciser le besoin avant consultation                                      | Confirmé                       | [DAE — Guide du sourçage opérationnel 2025](https://www.economie.gouv.fr/files/files/directions_services/dae/doc/Guide_sourcing.pdf)                                                       | Achat public ; transposition méthodologique seulement             | Conserver la limite et proposer le même script à trois candidats             |
| Le paiement ne suffit pas à décrire les droits cédés                                                    | Confirmé                       | [Légifrance — Article L131-3](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958)                                                                                        | Application contractuelle à faire vérifier                        | Conserver et ajouter composants antérieurs, open source et sous-traitants    |
| L’article L113-9 concerne les logiciels créés par des employés dans leurs fonctions                     | Confirmé                       | [Légifrance — Article L113-9](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000039279818)                                                                                        | Ne règle pas automatiquement le freelance ou chaque sous-traitant | Très bonne nuance, à conserver                                               |
| Un sous-traitant de données doit être encadré par un contrat conforme à l’article 28                    | Confirmé                       | [CNIL — Chapitre IV du RGPD](https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre4)                                                                                       | Qualification selon les traitements réels                         | Ajouter autres sous-traitants, restitution/suppression et audit              |
| Garder un compte administrateur d’organisation permet de distribuer les droits                          | Confirmé pour l’exemple GitHub | [GitHub — Rôles de dépôt](https://docs.github.com/fr/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization) | Exemple produit, pas règle juridique                              | Ajouter protection des comptes, MFA, propriétaires multiples et récupération |
| La sécurité doit être intégrée au cycle de développement                                                | Confirmé et absent du guide    | [NIST SSDF 1.1](https://www.nist.gov/publications/secure-software-development-framework-ssdf-version-11-recommendations-mitigating-risk)                                                   | Cadre de haut niveau utilisable aussi dans l’acquisition          | Ajouter des preuves proportionnées, pas une certification inventée           |
| L’acheteur doit demander la sécurité plutôt que la supposer                                             | Confirmé                       | [CISA — Secure by Demand](https://www.cisa.gov/sites/default/files/2024-08/SecureByDemandGuide_080624_508c.pdf)                                                                            | Guide américain, utile comme grille                               | Faire inclure sécurité, vulnérabilités et support dans le brief              |
| Le choix technologique doit minimiser le TCO et le verrouillage tout en gardant le contrôle des données | Confirmé                       | [GOV.UK — Choosing technology](https://www.gov.uk/service-manual/technology/choosing-technology-an-introduction)                                                                           | Service public britannique                                        | Renforcer coût total et réversibilité testée                                 |

### Contradictions ou tensions

- Aucune erreur juridique manifeste n’a été identifiée, mais les passages légaux doivent rester présentés comme information générale.
- La page affirme qu’il faut comparer le coût de la même étape, puis refuse tout chiffre. Cette prudence protège contre les faux prix moyens mais prive le lecteur du mode d’emploi.
- Le guide demande « qui peut reprendre » sans demander à ce relais d’exécuter une reprise limitée. Un nom et une documentation ne prouvent pas l’opérabilité.
- « Une agence devient utile lorsque plusieurs compétences doivent être coordonnées » est juste, mais une agence sans ces personnes nommées ne couvre pas la condition.

### Faits à ne pas ajouter

- Aucun prix moyen de MVP, délai standard, taux journalier national ou ratio de maintenance ne doit être présenté comme universel.
- Ne pas prétendre qu’une agence est plus sûre, qu’un freelance est moins cher ou qu’un effectif garantit la continuité.
- Ne pas promettre que la cession de droits règle la réversibilité technique.
- Ne pas utiliser les fourchettes UK, US ou canadiennes comme preuve de prix en France.
- Ne pas appeler « perte » une marge future probabilisée.

## 6. Scénarios et calculs à construire

Tous les montants sont **illustratifs, hors taxes et non issus d’un client**. Ils normalisent une décision, pas un marché.

### Scénario 1 — L’illusion du tarif journalier

Même première version :

| Poste                             | Freelance principal + spécialistes |                  Agence |
| --------------------------------- | ---------------------------------: | ----------------------: |
| Développement / forfait principal |                           60 000 € |               105 000 € |
| Design                            |                            8 000 € |                  inclus |
| Tests                             |                            8 000 € |                  inclus |
| Revue sécurité                    |                            4 000 € | incluse selon hypothèse |
| Temps client                      |          `180 h × 60 € = 10 800 €` | `60 h × 60 € = 3 600 €` |
| **Coût valorisé**                 |                       **90 800 €** |           **108 600 €** |

Le freelance reste moins cher de 17 800 €. Si une lacune de coordination entraîne 20 jours de reprise à 700 €, 14 000 € s’ajoutent et l’écart tombe à 3 800 €.

**Contrôle inverse :** la reprise n’est pas inévitable. Il faut la garder à zéro dans le scénario bas et la justifier par un périmètre absent dans l’offre réelle.

### Scénario 2 — TCO sur 24 mois, même SaaS

Hypothèses : réalisation pendant la première année, puis douze mois d’exploitation ; hébergement sur 24 mois ; mêmes fonctions, mêmes exigences de test et de sortie.

| Poste                              | Freelance coordonné par le client | Équipe hybride |        Agence |
| ---------------------------------- | --------------------------------: | -------------: | ------------: |
| Construction principale            |                          70 000 € |       80 000 € |     115 000 € |
| Design/QA/sécurité ou spécialistes |                          18 000 € |       30 000 € |        inclus |
| Temps client pendant 40 semaines   |                          14 400 € |        7 200 € |       5 400 € |
| Hébergement 24 mois                |                          14 400 € |       14 400 € |      14 400 € |
| Maintenance 12 mois                |                          21 600 € |       24 000 € |      33 600 € |
| Sortie testée                      |                           8 000 € |        7 000 € |       6 000 € |
| **TCO 24 mois**                    |                     **146 400 €** |  **162 600 €** | **174 400 €** |

Dans ce scénario, le freelance gagne. L’agence coûte 28 000 € de plus ; cette différence doit acheter un résultat réel et non un logo.

#### Coût d’équilibre du supplément agence

Dans le TCO central, le supplément agence est de 28 000 €. La marge mensuelle attendue est de 15 000 €, avec 40 % de confiance.

```text
Valeur attendue mensuelle = 15 000 × 40 % = 6 000 €
Mois de retard à éviter pour couvrir le supplément = 28 000 / 6 000 = 4,67 mois
```

Si l’agence ne peut raisonnablement éviter près de cinq mois de délai attendu, ni fournir une valeur équivalente en qualité, risque ou temps client, le supplément n’est pas justifié par ce scénario.

### Scénario 3 — Valeur attendue d’un retard

Hypothèses :

- marge contributive mensuelle attendue après lancement : 15 000 € ;
- retard comparé : deux mois ;
- confiance que cette marge aurait réellement été obtenue : 40 %.

```text
Valeur attendue à risque = 2 × 15 000 × 40 % = 12 000 €
```

Ce montant n’est pas une perte comptable. Il doit rester séparé du TCO et varier selon préventes, capacité commerciale et saisonnalité.

### Scénario 4 — Quand payer un relais devient rationnel

Une indisponibilité critique durerait dix jours et coûterait 3 000 € par jour. Former un relais, maintenir documentation et accès coûte 12 000 € au départ puis 3 000 €/an pendant trois ans, soit 21 000 €.

| Probabilité annuelle illustrée | Exposition attendue sur 3 ans sans couverture |
| -----------------------------: | --------------------------------------------: |
|                           10 % |             `10 × 3 000 × 10 % × 3 = 9 000 €` |
|                           20 % |                                      18 000 € |
|                           40 % |                                      36 000 € |

```text
Probabilité annuelle d'équilibre
= 21 000 / (10 × 3 000 × 3)
= 23,3 %
```

Le relais n’est pas automatiquement rentable. Il devient plus convaincant si l’impact, la probabilité, les obligations contractuelles ou d’autres incidents justifient le coût.

### Scénario 5 — Coût d’équilibre d’un dossier de reprise

Hypothèses :

- dossier de sortie, test de reprise et corrections : 8 000 € ;
- reprise sans ce dossier : 25 jours à 800 €, soit 20 000 € ;
- probabilité de changer de prestataire sur l’horizon : variable.

```text
Probabilité d'équilibre = 8 000 / 20 000 = 40 %
```

La sortie a aussi une valeur de négociation et de continuité non chiffrée. Le calcul empêche néanmoins de la traiter comme un rituel gratuit.

### Variables de sensibilité obligatoires

| Variable                      |         Bas |     Central |         Haut | Source                        |
| ----------------------------- | ----------: | ----------: | -----------: | ----------------------------- |
| Temps client pendant le build | 3 h/semaine | 8 h/semaine | 15 h/semaine | Agenda et RACI                |
| Coût horaire valorisé         |        35 € |        60 € |        100 € | Coût chargé ou valeur choisie |
| Marge mensuelle future        |         0 € |    15 000 € |     40 000 € | Préventes et plan commercial  |
| Confiance dans cette marge    |        20 % |        40 % |         70 % | Preuves marché                |
| Probabilité d’indisponibilité |        10 % |        20 % |         40 % | Historique et organisation    |
| Horizon                       |     12 mois |     24 mois |      36 mois | Phase financée                |

```text
Formule TCO = construction + spécialistes + temps client + hébergement + maintenance + sécurité + sortie.
Horizon : 24 mois dans le comparatif central.
Inclus : mêmes fonctions, douze mois d'exploitation et sortie testée.
Exclus : valeur future non prouvée, coût du capital, fiscalité et incident exceptionnel.
Variable qui fait basculer : coordination client, vitesse réellement gagnée ou exposition de continuité.
Contrôle inverse : calculer explicitement le cas où un freelance senior couvre tout le lot sans reprise.
```

## 7. Comparaison et position professionnelle

```text
Options comparables : freelance senior ; freelance + spécialistes ; agence nommée ; équipe interne/partielle ; validation préalable.
Périmètre commun : même phase, mêmes parcours, données, paiements, tests, sécurité, mise en ligne, support, maintenance et sortie.
Horizon commun : 24 mois, dont douze mois après lancement.
Option la moins chère dans le scénario : freelance senior coordonné par le client.
Option qui déplace le moins de coordination vers le dirigeant : agence, si PM, QA, sécurité et exploitation sont réellement inclus.
Option la plus adaptable : équipe hybride, si une personne porte l'ensemble et si les contrats s'alignent.
Position Hagnéré Code : préférer un freelance pour un lot isolable et une agence lorsque trois responsabilités ou plus doivent avancer ensemble, mais vérifier les personnes plutôt que le statut.
Cas où l'option opposée gagne : fondateur technique disponible, périmètre très étroit, spécialiste rare, code existant bien documenté ou budget de validation.
Signal de révision : premier client payant, intégration critique, exigence entreprise, incident, absence du principal, dépassement du temps client ou changement de phase.
Ce que nous déconseillons même si nous pourrions le vendre : agence-étiquette sans équipe nommée, sécurité « incluse » sans preuve, forfait tout le SaaS et cession juridique sans reprise technique.
```

L’opinion doit être mémorable mais falsifiable. Le nombre « trois responsabilités » est une heuristique de triage, pas une loi : la page doit le présenter comme signal d’entretien, jamais comme seuil de marché.

## 8. Objections et cas limites

| Objection loyale                                       | Réponse prouvée                                           | Incertitude restante                                                          | Conséquence                                                          |
| ------------------------------------------------------ | --------------------------------------------------------- | ----------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| « Le freelance a déjà tout construit seul »            | Une personne peut couvrir plusieurs rôles                 | Continuité, disponibilité et profondeur de chaque rôle                        | Faire rejouer une version et un incident avec preuves                |
| « L’agence a vingt salariés »                          | L’effectif existe peut-être                               | Qui connaît le produit et qui est réservé au projet ?                         | Nommer intervenants, quotités et relais                              |
| « L’agence sous-traite »                               | La sous-traitance n’est pas un défaut automatique         | Droits, données, sécurité et coordination                                     | Exiger transparence, contrats compatibles et responsabilités         |
| « Mon associé technique pilotera »                     | Cela réduit le besoin de PM externe                       | Son temps et son départ ont une valeur                                        | Chiffrer son temps et prévoir un relais                              |
| « Je veux le moins cher pour valider »                 | Un prototype ou test accompagné peut suffire              | Un faux MVP technique peut créer une dette prématurée                         | Financer une preuve du problème avant une plateforme                 |
| « Le code m’appartient puisque j’ai payé »             | Le contrat peut céder des droits                          | Composants, licences et sous-traitants doivent être examinés                  | Faire relire les clauses sensibles et inventorier les dépendances    |
| « GitHub contient tout »                               | Le dépôt est nécessaire                                   | Secrets, infrastructure, données, services et savoir oral peuvent manquer     | Test de reprise dans un environnement propre                         |
| « La sécurité viendra après le MVP »                   | Toutes les protections n’ont pas le même niveau d’urgence | Authentification, séparation clients et sauvegarde peuvent être structurelles | Classer sécurité minimale bloquante et durcissement ultérieur        |
| « Une agence livrera plus vite »                       | La coordination intégrée peut accélérer                   | Validation client et nombre d’intervenants peuvent aussi ralentir             | Mesurer délai de décision, pas seulement jours de code               |
| « Une maintenance mensuelle garantit la continuité »   | Elle réserve potentiellement une capacité                 | SLA, horaires, connaissances et limites restent contractuels                  | Tester une demande et un incident, puis lire exclusions              |
| « L’IA permet à un freelance de remplacer une équipe » | Les outils peuvent augmenter la production                | Ils ne remplacent pas décision produit, tests, responsabilité ni exploitation | Évaluer le résultat et les preuves, pas le nombre de lignes générées |
| « Je préfère donner des parts à un associé »           | Cela peut aligner une relation long terme                 | C’est un choix de gouvernance distinct d’une prestation                       | Sortir le sujet du comparatif et obtenir un conseil adapté           |

## 9. Plan de réécriture

| Ordre | Section proposée                 | Question résolue                              | Preuve, scénario ou outil            | Décision produite             | Action                |
| ----: | -------------------------------- | --------------------------------------------- | ------------------------------------ | ----------------------------- | --------------------- |
|     1 | Verdict en 150 mots              | Agence ou freelance ?                         | Opinion conditionnelle               | Choisir le premier entretien  | Renforcer l’ouverture |
|     2 | Trois profils de lecteur         | Validation, premier lancement ou production ? | Mini-cas                             | Définir la phase              | Créer                 |
|     3 | Responsabilités actuelles        | Qui décide, réalise et reprend ?              | Carte actuelle                       | Repérer les trous             | Conserver             |
|     4 | Même phase, mêmes critères       | Que faut-il chiffrer ?                        | Résultat accepté et exclusions       | Normaliser les devis          | Créer                 |
|     5 | Temps client et spécialistes     | Où va le travail absent du devis ?            | Scénario 90 800/108 600 €            | Comparer le vrai coût         | Créer                 |
|     6 | TCO 24 mois                      | Quel format gagne ?                           | Freelance/hybride/agence             | Départager                    | Créer                 |
|     7 | Coût d’un retard                 | La vitesse vaut-elle son prix ?               | 12 000 € attendus                    | Valoriser prudemment          | Créer                 |
|     8 | Continuité chiffrée              | Faut-il payer un relais ?                     | Seuil 23,3 %                         | Financer proportionnellement  | Créer                 |
|     9 | Sécurité par preuves             | Que doit montrer l’équipe ?                   | NIST/CISA proportionnés              | Accepter ou corriger          | Créer                 |
|    10 | Changement et incident           | Comment travaille l’équipe ?                  | Deux exercices actuels, chronométrés | Vérifier les passages de main | Renforcer             |
|    11 | Code, comptes, droits et données | Que garde l’entreprise ?                      | Sources France                       | Sécuriser les actifs          | Conserver             |
|    12 | Test de reprise                  | La sortie fonctionne-t-elle ?                 | Nouvelle équipe remet en ligne       | Prouver la réversibilité      | Créer                 |
|    13 | Coût d’équilibre du premium      | Que doit acheter l’agence ?                   | 4,67 mois ou valeur équivalente      | Justifier le supplément       | Créer                 |
|    14 | Verdict et CTA-outil             | Que faire maintenant ?                        | RACI + TCO + risques                 | Arriver avec un dossier       | Transformer           |

### Contrat des 150 premiers mots

- Nommer le lecteur : dirigeant qui a deux propositions impossibles à comparer.
- Répondre : un freelance peut gagner sur un lot étroit ; une agence gagne seulement si les rôles nécessaires sont nommés et inclus.
- Annoncer : responsabilités, TCO 24 mois, coût du temps client, risque de relais et test de sortie.
- Garder l’option de report ou validation préalable.
- Poser la limite : montants illustratifs et aucune supériorité générale d’un statut.

### À conserver

- La définition humaine du SaaS.
- Les quatre phases.
- Les six responsabilités.
- Les scénarios fonction urgente et incident.
- La distinction droits juridiques / accès technique.
- Les quatre verdicts et le conflit d’intérêt.

### À réduire ou déplacer

- Réduire les répétitions « nom, relais, trace » après création d’une matrice unique.
- Ne pas multiplier les listes de rôles ; regrouper par décision et résultat.
- Déplacer les détails juridiques dans un bloc lisible sans les affaiblir.

## 10. Contre-audit et portes de correction

### P0 — bloquants

- [ ] Ajouter au moins un TCO sur 24 mois à périmètre égal.
- [ ] Distinguer coûts de trésorerie, temps valorisé et opportunité probabilisée.
- [ ] Marquer tous les montants comme illustratifs, HT et remplaçables.
- [ ] Ajouter sécurité et exploitation comme responsabilités explicites.
- [ ] Conserver les limites juridiques et faire vérifier toute nouvelle interprétation.
- [ ] Faire recalculer toutes les formules par un second relecteur.

### P1 — nécessaires pour viser 90/100

- [ ] Produire au moins cinq scénarios chiffrés avec contrôle inverse.
- [ ] Ajouter l’interne et la validation préalable dans la comparaison.
- [ ] Quantifier le temps client, le relais, le retard et la reprise.
- [ ] Tester la réversibilité par un exercice, pas une liste d’actifs.
- [ ] Ajouter NIST, CISA, GOV.UK et DTA avec périmètres explicites.
- [ ] Donner une opinion Hagnéré Code, le cas où un freelance gagne et le signal de révision.
- [ ] Séparer création, lancement et production dans les premiers écrans.

### P2 — différenciation et finition

- [ ] Créer une matrice RACI téléchargeable avec TCO associé.
- [ ] Fournir un protocole de reprise en 90 minutes avec éléments attendus.
- [ ] Publier un exemple fictif complet de devis remis à périmètre égal.
- [ ] Faire lire la page par un fondateur non technique et un responsable informatique.
- [ ] Vérifier tableaux et cartes en navigateur réel à toutes les largeurs cibles.

### Score après correction

Non attribué. Il ne pourra être donné qu’après réécriture, recalcul indépendant, contrôle des sources, audit navigateur et test lecteur.

## 11. Preuve technique et visuelle à exiger après réécriture

```text
Page publique modifiée dans ce lot : non.
Hash avant et après audit attendu : identique.
Sources revérifiées : DAE, Légifrance L131-3/L113-9, CNIL article 28, GitHub, NIST SSDF, CISA Secure by Demand, GOV.UK et DTA.
Calculs indépendants : coût comparé, TCO 24 mois, retard, continuité, premium et reprise recalculés avec Node.js.
Liens : contrôle HTTP à rejouer après intégration ; PDF publics et protections anti-bot exigent parfois un contrôle navigateur.
SEO technique : canonical, robots, Article, BreadcrumbList, FAQ visible/JSON-LD, sitemap et maillage à recontrôler après modification.
Rendu : 320, 390, 768, 1 024 et 1 440 px ; clair/sombre ; matrices, tableaux, CTA, FAQ et sources.
Accessibilité : tableaux avec en-têtes, ordre des titres, liens explicites et version textuelle de tout diagramme.
Validation lecteur humain réel : absente à ce stade.
Indexation et position Google : non prouvées.
```

### Verdict final de l’audit

La page possède déjà une philosophie saine et une écriture supérieure aux comparatifs caricaturaux. Pour devenir une référence, elle doit maintenant prouver le prix de chaque organisation. Un dirigeant doit pouvoir sortir de la lecture avec trois devis remis au même périmètre, un coût total sur 24 mois, un risque de continuité et une phrase simple expliquant ce que le supplément d’une agence achète réellement.
