# Audit approfondi — `power-apps-ou-application-sur-mesure`

Date : 24 juillet 2026

Auditeur concurrentiel : Codex, lot benchmark international

Snapshot du guide : `src/app/guides/power-apps-ou-application-sur-mesure/page.tsx`, SHA-256 `30ba9c21df82d460acd950115f0236e507eab77d88d56ef18fd217fe1c8159e7`

Périmètre : audit éditorial et décisionnel uniquement. Aucune modification de la page publique, du registre des guides, des manifestes ou de la documentation partagée n’a été réalisée dans ce lot.

## 1. Verdict exécutif

```text
Lecteur exact : dirigeant de PME déjà équipé de Microsoft 365, dont une Power App commence à devenir importante.
Question réelle : faut-il continuer avec Power Apps, ajouter une brique sur mesure, migrer ou ne rien changer ?
Décision attendue : choisir la trajectoire qui passe les contraintes d’usage et minimise le coût total sur un horizon commun.
Réponse actuelle en une phrase : Power Apps reste rationnel si utilisateurs, données, connecteurs, exploitation et sortie passent cinq tests observables.
Défaut qui coûte le plus de valeur : le guide calcule les licences, mais pas le coût total ni le seuil où le nombre d’utilisateurs ou l’exploitation font basculer le verdict.
Niveau actuel : B+
Priorité : haute
Statut : audité / à enrichir substantiellement
```

Le guide fait déjà mieux que la majorité des comparatifs commerciaux. Il ne caricature ni Power Apps en solution « gratuite et instantanée », ni le sur-mesure en réponse prestigieuse à tout. Les cinq tests sont compréhensibles, les limites de délégation sont bien expliquées, la désignation Premium est traitée avec prudence et l’approche hybride est réellement ouverte.

Il reste néanmoins en dessous du niveau « meilleure réponse pour un dirigeant » pour quatre raisons :

1. le seul calcul numérique porte sur les licences Premium et s’arrête avant le coût total ;
2. le guide ne distingue pas assez un prototype utile, une application gouvernée et une charge de travail réellement critique ;
3. l’administration, l’ALM, les environnements, la capacité Dataverse, l’adoption, l’observabilité et la continuité sont évoqués sans être chiffrés ni testés ;
4. aucune comparaison à 36 mois ne montre quand Power Apps, l’hybride ou l’application dédiée gagne.

La position professionnelle à assumer est la suivante :

> Nous déconseillons de réécrire une Power App uniquement parce qu’elle grossit. Nous déconseillons tout autant de la laisser devenir critique dans l’environnement par défaut, sans propriétaire, pipeline, test de restauration ni coût complet. Power Apps gagne pour un processus interne bien délimité ; le sur-mesure gagne lorsque l’expérience, la diffusion externe, la portabilité ou le coût à l’échelle deviennent des contraintes dominantes.

### Score avant correction

| Axe         | Note /10 | Preuve localisable                                                               | Manque décisif                                                                                               |
| ----------- | -------: | -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| Intention   |        9 | Ouverture sur une Power App déjà utilisée et décision en cinq tests              | Le profil « application critique » n’est pas distingué assez tôt du simple outil d’équipe                    |
| Décision    |        9 | Maintien, Power Apps structuré, hybride et dédié restent possibles               | Aucun seuil économique recalculable ne fait basculer l’option                                                |
| Pédagogie   |        9 | Délégation, licences, invités, hors connexion et export traduits en conséquences | ALM, environnement, capacité et observabilité restent abstraits                                              |
| Profondeur  |        7 | Utilisateurs, données, connecteurs, exploitation et sortie sont couverts         | Adoption, sécurité par criticité, API, stockage, tests, accessibilité et dette de plateforme sont incomplets |
| Preuve      |        8 | Documentation Microsoft officielle, datée et proche des affirmations             | Sources presque exclusivement éditeur ; aucun cas indépendant ni preuve avant/après                          |
| Comparaison |        7 | Quatre voies et un calcul de licences                                            | Aucun TCO commun, coût d’administration, coût de coexistence ou analyse de sensibilité                       |
| Originalité |        8 | Les cinq tests constituent un dispositif utile et mémorable                      | Aucun calculateur, fiche de criticité ou matrice de bascule propriétaire                                     |
| Style       |        9 | Ton humain, précis et non militant                                               | Quelques formulations prudentes remplacent encore une opinion d’expert explicite                             |
| Conversion  |        8 | Audit autonome avant CTA et possibilité honnête de ne pas investir               | Le lecteur ne repart pas avec un coût complet ni un verdict chiffré                                          |
| SEO/produit |        8 | Intention distincte, FAQ, maillage, données structurées et sources actuelles     | Couverture internationale, entités ALM/gouvernance et actif calculable insuffisants                          |

Total : **82/100**

Le guide est utile et publiable, mais il ne passe pas le seuil du nouveau référentiel : 90/100, aucun axe sous 8, axes décision/preuve/comparaison à 9 ou 10.

## 2. Ce que le guide dit réellement

- **Réponse dans les 150 premiers mots :** oui. Le choix dépend d’un cadre maîtrisé, pas d’une opposition low-code contre code.
- **Progression :** cinq tests — utilisateurs, données, connecteurs, exploitation, sortie — puis licences, quatre trajectoires et audit autonome.
- **Verdict :** conserver Power Apps si les contraintes restent compatibles ; compléter ou migrer lorsqu’une contrainte métier importante ne tient plus.
- **Exemples présents :** recherche non délégable, accès invité, usage hors connexion, créateur absent, export/import.
- **Calcul présent :** `40 × 17,30 € × 36 = 24 912 € HT`, explicitement limité aux licences.
- **Comparaison présente :** maintien organisé, poursuite Power Apps, hybride et application dédiée, mais sans périmètre ni horizon économique commun.
- **Sources :** Microsoft uniquement ou presque. Elles sont légitimes pour le produit, moins suffisantes pour démontrer le résultat économique.
- **Action autonome :** réunir quatre rôles et produire cinq preuves.
- **CTA :** cohérent, car il intervient après le diagnostic et n’impose pas la réécriture.
- **Élément faussement complet :** les cinq tests donnent une bonne porte d’entrée, mais ne constituent pas encore une revue d’architecture, de sécurité ou de coût total.

Le guide a donc une bonne colonne vertébrale. L’enrichissement doit porter sur la décision, pas sur une nouvelle liste générique d’avantages et d’inconvénients.

## 3. Benchmark France et international

Requêtes, marchés et date :

- France, français : « Power Apps ou développement sur mesure », « coût Power Apps PME », « application low-code ou sur mesure » ;
- États-Unis, anglais : « Power Apps vs custom development », « Power Platform TCO governance » ;
- Royaume-Uni, anglais : « Power Apps vs custom build », « Power Platform application lifecycle » ;
- Australie, anglais : « Power Apps custom app cost comparison » ;
- recherche effectuée le 24 juillet 2026 ; les résultats observés ne sont pas présentés comme un classement Google stable.

### Saturation

La saturation est forte sur quatre messages : Power Apps serait plus rapide, le sur-mesure plus flexible, les licences créeraient un coût récurrent et l’écosystème Microsoft favoriserait Power Apps. Ajouter une nouvelle liste « rapidité / coût / flexibilité / scalabilité » produirait peu de gain.

Le gain d’information disponible se trouve ailleurs :

- coût complet selon le nombre d’utilisateurs et la criticité ;
- différence entre application qui fonctionne et application gouvernée ;
- coût de l’administration, des environnements, des tests et du support ;
- preuve d’adoption plutôt que gain de productivité déclaré ;
- seuil de bascule vers l’hybride ou le dédié ;
- définition opérationnelle de la sortie ;
- scénario où ne rien réécrire est réellement la meilleure décision.

| Ressource et URL directe                                                                                                                                              | Marché                   | Réponse utile                                                                          | Preuve, outil ou exemple                                     | Limite                                                                               | Apport à adapter                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ | -------------------------------------------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| [AquilApp — No-code, low-code ou sur mesure](https://www.aquilapp.fr/ressources/developpement-sur-mesure/no-code-low-code-ou-sur-mesure)                              | France                   | Compare trois familles de solution avec délais et budgets annoncés                     | Tableau immédiatement lisible                                | Chiffres commerciaux, périmètres non normalisés, promesse de gain à ne pas reprendre | Faire mieux avec un même cas, un horizon et des hypothèses visibles                        |
| [PowerApp.fr — Intégration Microsoft Power Apps](https://powerapp.fr/nos-solutions/integrer-des-outils-metiers/integration-microsoft-power-apps/)                     | France                   | Montre des usages métier concrets                                                      | Cas contrats, finance et RH                                  | Page vendeuse Power Apps ; ROI éditeur non indépendant                               | Ajouter des mini-cas sans présenter un ROI sponsorisé comme résultat attendu               |
| [Microsoft — Tarification Power Apps France](https://www.microsoft.com/fr-fr/power-platform/products/power-apps/pricing)                                              | France / éditeur         | Donne le tarif public et les droits affichés                                           | Prix datable et vérifiable                                   | Ne calcule ni intégration, ni support, ni sortie                                     | Conserver comme entrée du TCO, jamais comme TCO                                            |
| [eSoftware Associates — Power Apps vs custom software](https://www.tmcnet.com/usubmit/-power-apps-vs-custom-software-development-mid-market-/2026/07/23/10418995.htm) | États-Unis               | Positionne Power Apps sur les processus internes et le dédié sur les produits externes | Opinion nette pour le mid-market                             | Communiqué commercial ; délais et supériorité non indépendants                       | Reprendre la clarté du verdict, pas les promesses                                          |
| [Brilworks — Power Apps vs Custom Development](https://www.brilworks.com/blog/power-apps-vs-custom-development/)                                                      | International anglophone | Aborde verrouillage, coût et portabilité                                               | Ouverture par un risque concret et cadre de décision         | Cas non audités publiquement                                                         | Ajouter une sortie testée et chiffrée                                                      |
| [Talk Think Do — Power Apps vs SaaS vs Custom Build](https://talkthinkdo.com/blog/power-apps-vs-custom-build-vs-saas/)                                                | Royaume-Uni              | Ajoute l’achat d’un SaaS standard au faux duel                                         | Comparaison à trois voies                                    | Article d’agence, antérieur aux changements 2026                                     | Mentionner aussi « acheter/configurer un standard » lorsque pertinent                      |
| [Team 400 — Power Apps vs Custom App Development](https://team400.ai/blog/2026-05-power-apps-vs-custom-app-development-when-to-choose)                                | Australie                | Donne des cas, des fourchettes et une voie hybride                                     | Comparaison par type d’application                           | Fourchettes commerciales australiennes, non transposables en France                  | Produire des scénarios remplaçables plutôt qu’un prix moyen                                |
| [Microsoft — Power Platform Well-Architected](https://learn.microsoft.com/en-us/power-platform/well-architected/)                                                     | International / éditeur  | Structure fiabilité, sécurité, exploitation, performance et expérience                 | Checklists et outil d’évaluation                             | Cadre éditeur, pas verdict économique                                                | Faire passer toute application critique dans ces cinq piliers                              |
| [Microsoft — ALM Power Platform](https://learn.microsoft.com/en-us/power-platform/alm/overview-alm)                                                                   | International / éditeur  | Décrit planifier, tester, déployer, exploiter et maintenir                             | Source officielle sur solutions, contrôle de source et CI/CD | N’indique pas le coût organisationnel                                                | Ajouter une ligne ALM explicite dans chaque TCO                                            |
| [Microsoft — Gérer l’environnement par défaut](https://learn.microsoft.com/en-us/power-platform/guidance/adoption/manage-default-environment)                         | International / éditeur  | Distingue productivité personnelle et application de valeur                            | Critères utilisateurs, données, impact et ALM                | Recommandation éditeur, seuils de gouvernance et non de performance                  | Créer une fiche de criticité, sans transformer les nombres en seuil universel de migration |

### Lecture concurrentielle

Les concurrents les plus séduisants affichent souvent des délais ou budgets précis avant d’avoir normalisé le périmètre. Leur faiblesse est une opportunité : Hagnéré Code peut être plus convaincant en montrant comment le verdict change, sans prétendre qu’un chiffre australien ou américain décrit une PME française.

## 4. Matrice de gain d’information

| Question décisive                               | Réponse française dominante              | Apport international                                                               | Couverture actuelle     | Manque                                                               | Réponse supérieure à produire                                                                         |
| ----------------------------------------------- | ---------------------------------------- | ---------------------------------------------------------------------------------- | ----------------------- | -------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| Power Apps est-il « inclus » ?                  | Oui, avec réserves peu détaillées        | Microsoft sépare connecteurs, plans et environnements                              | Bonne                   | Coût des capacités, flux et administration                           | Inventaire licence par personne, application, flux, environnement et capacité                         |
| L’application tient-elle avec plus de données ? | « Power Apps scale » ou « ne scale pas » | Documentation de délégation et limites de service                                  | Bonne sur la délégation | Aucun protocole de charge ni mesure utilisateur                      | Jeu de données représentatif, requêtes critiques, temps de réponse et résultat complet                |
| Quand devient-elle critique ?                   | Rarement défini                          | Well-Architected et gouvernance distinguent impact, sécurité et ALM                | Faible                  | Pas de score de criticité                                            | Fiche impact financier, données, nombre d’équipes, mode dégradé et récupération                       |
| Quel est le vrai coût ?                         | Prix de licence ou budget de réalisation | Les comparatifs étrangers ajoutent souvent des fourchettes, mais sans base commune | Insuffisant             | Administration, support, adoption, capacité, double run et sortie    | TCO 36 mois, hypothèses remplaçables et sensibilité par utilisateurs                                  |
| Le low-code réduit-il toujours le travail ?     | Promesse fréquente                       | Microsoft lui-même demande ALM, monitoring et support                              | Partiel                 | Le travail déplacé vers le tenant et les métiers n’est pas quantifié | Tableau « qui fait quoi » et coût horaire interne séparé                                              |
| Comment préparer la sortie ?                    | Export présenté comme réversibilité      | ALM : solution, source de vérité, import, pipeline                                 | Bonne prudence          | Pas de test de restauration ni coût de migration                     | Exercice export/import dans un environnement propre, données, secrets, dépendances et temps mesuré    |
| Quand l’hybride gagne-t-il ?                    | Option citée, peu calculée               | Plusieurs acteurs étrangers la présentent comme troisième voie                     | Présent                 | Pas de frontière d’architecture ou de coût                           | Placer le processus standard dans Power Apps et isoler l’exception coûteuse ; chiffrer les deux côtés |
| Faut-il réécrire ?                              | Verdict souvent lié au vendeur           | Approches internationales plus tranchées selon interne/externe                     | Bonne neutralité        | Opinion Hagnéré Code trop discrète                                   | Ne réécrire qu’après échec documenté sur expérience, diffusion, contrôle, économie ou sortie          |

## 5. Faits, fraîcheur et contradictions

Sources primaires revérifiées le 24 juillet 2026.

| Affirmation du guide                                                                     | Verdict                    | Source primaire actuelle                                                                                                                                                       | Périmètre et fraîcheur                                                                   | Correction ou enrichissement                                                       |
| ---------------------------------------------------------------------------------------- | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Power Apps Premium est affiché à 17,30 € HT par utilisateur et par mois, paiement annuel | Confirmé à la date d’audit | [Microsoft France — Tarification](https://www.microsoft.com/fr-fr/power-platform/products/power-apps/pricing)                                                                  | Tarif public, fiscalité et contrat à confirmer au devis                                  | Conserver la date et ajouter les paliers 10/40/100 utilisateurs                    |
| Un connecteur Premium, personnalisé ou local peut rendre l’application Premium           | Confirmé, avec limites     | [Microsoft Learn — License designation](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/license-designation)                                                    | La désignation de l’app peut ne pas révéler tous les besoins d’un flux lié               | Conserver l’inventaire application + flux                                          |
| Une opération non délégable traite 500 lignes par défaut, jusqu’à 2 000 configurées      | Confirmé                   | [Microsoft Learn — Delegation](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/delegation-overview)                                                             | Limite locale d’une formule non délégable, pas taille maximale de Dataverse              | Ajouter un exemple à 50 000 lignes et un test de résultat manquant                 |
| Le navigateur ne fournit pas le même hors-ligne que Power Apps Mobile                    | Confirmé                   | [Microsoft Learn — Offline canvas apps](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/offline-apps)                                                           | Dépend de l’appareil, de Dataverse, de la source et de la stratégie de synchronisation   | Ajouter conflits, reprise et données en attente                                    |
| Le Developer Plan n’est pas un droit de production                                       | Confirmé                   | [Microsoft Learn — Developer Plan](https://learn.microsoft.com/en-us/power-platform/developer/plan)                                                                            | Offre et droits susceptibles d’évoluer                                                   | Conserver                                                                          |
| Exporter une solution ne convertit pas l’application en code web autonome                | Confirmé                   | [Microsoft Learn — Export solutions](https://learn.microsoft.com/en-in/power-apps/maker/data-platform/export-solutions)                                                        | Export/import Power Platform                                                             | Ajouter un test d’import sur environnement vierge et un inventaire des dépendances |
| Une application critique demande plus qu’un créateur identifié                           | Confirmé et à renforcer    | [Microsoft — ALM](https://learn.microsoft.com/en-us/power-platform/alm/overview-alm) et [Well-Architected](https://learn.microsoft.com/en-us/power-platform/well-architected/) | Pratiques d’architecture et d’exploitation                                               | Ajouter contrôle de source, tests, pipeline, monitoring, rollback et support       |
| Les environnements gérés exigent une attention particulière aux licences                 | Confirmé et très actuel    | [Microsoft — Managed environment licensing](https://learn.microsoft.com/en-us/power-platform/admin/managed-environment-licensing)                                              | Page mise à jour le 22 juin 2026 ; notifications utilisateurs annoncées depuis juin 2026 | Ajouter une alerte de fraîcheur et demander le rapport de consommation du tenant   |

### Contradictions ou tensions

- Aucune erreur factuelle majeure n’a été identifiée dans la page auditée.
- Le titre compare une plateforme et une application dédiée, alors que le guide part surtout d’une Power App existante. L’ouverture doit expliciter cette intention afin de ne pas décevoir le lecteur en choix initial.
- « Audit en une réunion » est acceptable pour un triage, pas pour valider une architecture, une sécurité ou une licence contractuelle. Renommer l’exercice « prédiagnostic ».
- Le calcul de 40 licences est juste, mais sa présence isolée peut surpondérer la licence et sous-pondérer le travail de gouvernance.

### Faits à retirer plutôt qu’à ajouter

- Ne pas publier un gain de productivité moyen ou un ROI commandé par l’éditeur comme résultat probable.
- Ne pas convertir les fourchettes de prix d’agences étrangères en « prix du marché français ».
- Ne pas dire que Power Apps est gratuit avec Microsoft 365, que le sur-mesure est sans dépendance, ou que l’export garantit la réversibilité.
- Ne pas présenter 10, 30 ou 100 utilisateurs comme un seuil universel de migration : le seuil économique dépend des droits, du coût de construction et de l’exploitation.

## 6. Scénarios et calculs à construire

Tous les montants sont **illustratifs, hors taxes et non issus d’un client**. Ils montrent une méthode et doivent pouvoir être remplacés par les données du lecteur.

### Scénario 1 — Sensibilité du coût de licences

Tarif public observé : 17,30 € HT par utilisateur et par mois, paiement annuel.

| Utilisateurs attribués | Calcul sur 36 mois | Licences seules |
| ---------------------: | ------------------ | --------------: |
|                     10 | `10 × 17,30 × 36`  |         6 228 € |
|                     40 | `40 × 17,30 × 36`  |        24 912 € |
|                    100 | `100 × 17,30 × 36` |        62 280 € |
|                    150 | `150 × 17,30 × 36` |        93 420 € |

**Contrôle inverse :** ce tableau ne dit rien du coût de réalisation, de Dataverse additionnel, de Power Automate, de l’administration, du support ou de la sortie. Il ne doit jamais être intitulé « coût de Power Apps ».

### Scénario 2 — Une recherche peut sembler correcte et être fausse

```text
Base de production : 50 000 enregistrements
Limite locale configurée pour une formule non délégable : 2 000
Part potentiellement examinée localement : 2 000 / 50 000 = 4 %
```

Le chiffre de 4 % ne signifie pas que Power Apps ne peut traiter que 4 % de la base. Il montre qu’une formule non délégable peut produire un résultat incomplet. Le test doit placer une occurrence connue après la 2 000e ligne et vérifier si la recherche la retrouve.

### Scénario 3 — TCO sur 36 mois, même fonction métier

Hypothèses centrales :

- Power Apps : conception 18 000 €, 40 licences, administration 8 h/mois à 50 €, support 6 000 €/an, sortie testée 5 000 € ;
- hybride : Power Apps pour 20 utilisateurs, module dédié 35 000 €, administration 6 h/mois, support/intégration 10 000 €/an, sortie 8 000 € ;
- dédié : développement 70 000 €, hébergement 250 €/mois, administration 2 h/mois, maintenance 12 000 €/an, sortie 7 000 € ;
- même processus, mêmes exigences métier, aucun gain de chiffre d’affaires et aucun incident exceptionnel.

| Option                      | Construction | Licences / hébergement | Administration | Support / maintenance |  Sortie |   TCO 36 mois |
| --------------------------- | -----------: | ---------------------: | -------------: | --------------------: | ------: | ------------: |
| Power Apps, 40 utilisateurs |     18 000 € |               24 912 € |       14 400 € |              18 000 € | 5 000 € |  **80 312 €** |
| Hybride, 20 utilisateurs    |     35 000 € |               12 456 € |       10 800 € |              30 000 € | 8 000 € |  **96 256 €** |
| Application dédiée          |     70 000 € |                9 000 € |        3 600 € |              36 000 € | 7 000 € | **125 600 €** |

Dans ce scénario, Power Apps gagne. Il ne s’agit pas d’un verdict général.

#### Seuil économique illustratif lié au nombre d’utilisateurs

Le coût fixe Power Apps du scénario précédent, hors licences, est de 55 400 €. Le TCO dédié est de 125 600 €.

```text
Utilisateurs d'équilibre
= (125 600 - 55 400) / (17,30 × 36)
= 112,72 utilisateurs
```

À 100 utilisateurs, le TCO Power Apps illustratif est de 117 680 €. À 120, il atteint 130 136 € et dépasse le dédié du scénario.

**Contrôle inverse :** ce seuil disparaît si les utilisateurs disposent d’autres droits, si le coût de développement dédié change, si plusieurs applications partagent la licence ou si la maintenance dédiée est sous-estimée. Le guide doit le nommer « seuil du scénario », jamais « seuil Power Apps ».

### Scénario 4 — Gain d’usage, adoption et réalisation

Hypothèse brute : 50 personnes gagnent 8 minutes par jour, 220 jours par an, coût valorisé 35 €/h.

```text
Gain brut = 50 × 8/60 × 220 × 35 = 51 333 €/an
```

| Adoption réelle | Part du temps libéré réellement réaffectée | Capacité valorisée |
| --------------: | -----------------------------------------: | -----------------: |
|            40 % |                                       50 % |        10 267 €/an |
|            60 % |                                       60 % |        18 480 €/an |
|            80 % |                                       70 % |        28 747 €/an |

Cette table interdit de présenter 51 333 € comme économie de trésorerie. Il faut mesurer connexions, tâche accomplie, ancien canal réellement abandonné et usage du temps libéré.

### Scénario 5 — Une brique hybride peut éviter une réécriture

Une exception complexe consomme actuellement 20, 35 ou 50 heures par mois. Une brique dédiée de 30 000 € ramène ce travail à 5 heures, valorisées 45 €/h.

| Charge avant | Capacité libérée mensuelle | Retour simple |
| -----------: | -------------------------: | ------------: |
|    20 h/mois |    `(20 - 5) × 45 = 675 €` |     44,4 mois |
|    35 h/mois |                    1 350 € |     22,2 mois |
|    50 h/mois |                    2 025 € |     14,8 mois |

Le scénario montre pourquoi l’hybride doit être évalué sur l’exception coûteuse, pas comme compromis esthétique.

### Variables de sensibilité obligatoires

| Variable             |      Simple |             Central |           Exigeant | Source                               |
| -------------------- | ----------: | ------------------: | -----------------: | ------------------------------------ |
| Utilisateurs Premium |          10 |                  40 |                150 | Inventaire des personnes et droits   |
| Administration       |    2 h/mois |            8 h/mois |          20 h/mois | Journal administrateur               |
| Adoption             |        40 % |                60 % |               80 % | Analytique et entretiens             |
| Réalisation du gain  |        20 % |                50 % |               70 % | Processus abandonné et réaffectation |
| Horizon              |     12 mois |             36 mois |            60 mois | Durée de vie attendue                |
| Coût de sortie       | test simple | migration partielle | double run complet | Devis et exercice d’import           |

```text
Formule : TCO = construction + licences + capacité + administration + support + coexistence + sortie.
Horizon : 36 mois dans l'exemple central.
Inclus : mêmes fonctions, exploitation, support et sortie explicite.
Exclus : gains commerciaux non prouvés, taxes, remises contractuelles et incident exceptionnel.
Variable qui fait basculer : utilisateurs licenciés, coût d'exploitation ou exception métier.
Contrôle inverse : calculer le cas où conserver l'application actuelle et corriger seulement sa gouvernance gagne.
```

## 7. Comparaison et position professionnelle

```text
Options réellement comparables : organiser l'existant ; Power Apps gouverné ; hybride ; application dédiée ; standard du marché lorsque pertinent.
Périmètre commun : mêmes utilisateurs, rôles, données, appareils, parcours, connexions, disponibilité, support et sortie.
Horizon commun : 36 mois par défaut, avec une sensibilité à 12 et 60 mois.
Option la moins chère dans le cas fréquent : Power Apps pour un processus interne borné, au sein d'un environnement Microsoft déjà administré.
Option la moins risquée à court terme : organiser l'existant si le processus fonctionne et si l'exposition est faible.
Option qui protège le mieux l'expérience et la portabilité : le dédié, si ces exigences sont réellement dominantes et financées.
Position Hagnéré Code : ne pas réécrire par prestige ; gouverner d'abord, isoler ensuite l'exception qui coûte, puis recalculer.
Cas où l'option opposée gagne : public externe large, expérience très spécifique, données ou flux hors cadre, coûts par utilisateur dominants, sortie stratégique ou exigences non satisfaites par la plateforme.
Signal de révision : nouveau connecteur Premium, changement de volume, incident, ouverture externe, coût de licence, changement contractuel, échec d'import ou dégradation de l'usage.
Ce que nous déconseillons même si nous pourrions le vendre : une migration sans test d'import, un sur-mesure sans coût d'exploitation, ou une Power App critique laissée dans un cadre de productivité personnelle.
```

La position doit être ferme sur les preuves et conditionnelle sur la technologie. Le guide gagnera en confiance s’il montre explicitement un cas où Hagnéré Code recommande de ne rien reconstruire.

## 8. Objections et cas limites

| Objection loyale                                           | Réponse prouvée                                                                                                 | Incertitude restante                                                     | Conséquence                                                                         |
| ---------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------- |
| « Power Apps est déjà dans Microsoft 365 »                 | Certains usages standard peuvent être couverts ; connecteurs, flux, environnements et droits changent le besoin | Contrat et tenant réels                                                  | Faire l’inventaire dans le centre d’administration, pas depuis le souvenir du devis |
| « Notre application marche sur 200 lignes »                | Cela ne prouve pas la délégation ni le comportement à 50 000 lignes                                             | Source, formule et distribution réelles                                  | Tester une occurrence connue au-delà de la limite locale                            |
| « Nous pouvons exporter, donc nous sommes libres »         | L’export permet de déplacer une solution dans Power Platform                                                    | Dépendances, secrets, données et code spécifique                         | Tester l’import dans un environnement propre et mesurer le temps                    |
| « Le sur-mesure évite le verrouillage »                    | Il évite certaines dépendances de plateforme                                                                    | Framework, hébergeur, équipe et architecture créent d’autres dépendances | Comparer deux plans de sortie, pas « verrouillé » contre « libre »                  |
| « Cent utilisateurs, c’est trop pour Power Apps »          | Aucun seuil universel ne le prouve                                                                              | Prix, nombre d’apps, droits et TCO                                       | Calculer le seuil du scénario réel                                                  |
| « L’application est interne, donc la sécurité est simple » | Les données, droits, flux et appareils restent exposés                                                          | Criticité et menaces propres au cas                                      | Appliquer une revue proportionnée et les piliers Well-Architected                   |
| « Un salarié peut la maintenir »                           | Oui pour une application bornée et documentée                                                                   | Départ, disponibilité, contrôle de changement                            | Ajouter relais, solution, contrôle de source, environnement de test et restauration |
| « Il faut migrer avant que Microsoft change les prix »     | Un prix peut évoluer, mais une migration anticipée a aussi un coût                                              | Évolution contractuelle inconnue                                         | Sensibilité à +20 % et date de réexamen, pas panique                                |
| « Nos techniciens travaillent sans réseau »                | Le hors-ligne existe dans certains contextes mobiles                                                            | Conflits, volume, appareil et reconnexion                                | Test terrain en mode avion, synchronisation et reprise                              |
| « L’IA de Power Apps rend le sur-mesure inutile »          | Les fonctions évoluent rapidement                                                                               | Elles ne suppriment ni données, exploitation, sécurité ni adoption       | Évaluer une tâche et un résultat, pas une promesse de génération                    |

## 9. Plan de réécriture

| Ordre | Section proposée                         | Question résolue                       | Preuve, scénario ou outil                                       | Décision produite                 | Action éditoriale              |
| ----: | ---------------------------------------- | -------------------------------------- | --------------------------------------------------------------- | --------------------------------- | ------------------------------ |
|     1 | Verdict en 150 mots                      | Continuer ou envisager autre chose ?   | Position Hagnéré Code conditionnelle                            | Choisir le premier test           | Renforcer l’ouverture actuelle |
|     2 | Outil d’équipe ou application critique ? | Quel niveau de gouvernance faut-il ?   | Fiche impact/données/utilisateurs/mode dégradé                  | Classer la criticité              | Créer                          |
|     3 | Les cinq tests actuels                   | Quelles preuves obtenir ?              | Utilisateurs, données, connexions, exploitation, sortie         | Triage                            | Conserver et resserrer         |
|     4 | Ce que « gouverné » veut dire            | L’application peut-elle durer ?        | ALM, environnement, source, test, pipeline, monitoring, support | Corriger avant de migrer          | Créer                          |
|     5 | Le coût des licences par paliers         | Quel coût récurrent ?                  | 10/40/100/150 utilisateurs                                      | Écarter une fausse gratuité       | Enrichir                       |
|     6 | TCO 36 mois                              | Quelle option coûte réellement moins ? | Power Apps/hybride/dédié                                        | Comparer à périmètre égal         | Créer                          |
|     7 | Seuil de bascule                         | Quand le verdict change-t-il ?         | 112,72 utilisateurs dans le scénario                            | Tester la sensibilité             | Créer                          |
|     8 | Données, performance et hors-ligne       | Le prototype dit-il vrai ?             | Test 50 000 lignes + test terrain                               | Valider ou corriger               | Renforcer                      |
|     9 | Adoption et valeur                       | Le temps gagné devient-il utile ?      | Scénario adoption/réalisation                                   | Poursuivre ou arrêter             | Créer                          |
|    10 | L’hybride par l’exception                | Peut-on éviter une réécriture ?        | Retour simple sur une brique ciblée                             | Isoler l’exception                | Créer                          |
|    11 | Sortie testée                            | Que récupère-t-on réellement ?         | Export/import, données, secrets, documentation                  | Accepter ou refuser la dépendance | Renforcer                      |
|    12 | Position et CTA                          | Que recommande Hagnéré Code ?          | Cas fréquent, cas inverse, signal de révision                   | Arriver avec un dossier chiffré   | Transformer le CTA en résultat |

### Contrat des 150 premiers mots

- Nommer le lecteur : dirigeant dont une Power App est devenue utile à plusieurs personnes.
- Répondre : ne réécrivez pas parce qu’elle grandit ; ne la laissez pas devenir critique sans gouvernance.
- Annoncer les trois vraies voies : structurer Power Apps, isoler une brique hybride, construire une application dédiée.
- Promettre : cinq tests, un coût complet sur 36 mois, un seuil de bascule et un test de sortie.
- Poser la limite : les montants sont des exemples remplaçables, pas des prix universels.

### À conserver

- Les cinq tests et leur vocabulaire ordinaire.
- La distinction précise entre taille de base et limite de délégation.
- Les nuances sur les connecteurs de flux.
- Les quatre trajectoires.
- Le refus d’une migration automatique.

### À réduire ou déplacer

- Réduire les répétitions entre « responsable », « relais » et « preuve » après création d’une fiche ALM unique.
- Renommer l’« audit en une réunion » en prédiagnostic.
- Déplacer les détails les plus techniques après le verdict économique, sans les supprimer.

## 10. Contre-audit et portes de correction

### P0 — bloquants avant de revendiquer une supériorité éditoriale

- [ ] Revalider le tarif public et les droits exacts le jour de la réécriture.
- [ ] Ajouter un TCO à horizon égal avec hypothèses, inclusions et exclusions.
- [ ] Distinguer clairement prix de licence, coût de capacité et coût total.
- [ ] Présenter le seuil de 112,72 comme résultat illustratif, jamais comme seuil Power Apps.
- [ ] Renommer l’exercice en prédiagnostic et ne pas le présenter comme audit de licence, sécurité ou architecture.
- [ ] Faire recalculer toutes les formules par un second relecteur.

### P1 — nécessaires pour viser 90/100

- [ ] Ajouter la criticité, l’ALM, les environnements, le monitoring et la capacité.
- [ ] Produire au moins cinq scénarios chiffrés avec contrôle inverse.
- [ ] Ajouter l’adoption et la réalisation du gain.
- [ ] Définir la sortie par un test d’import et non par un export disponible.
- [ ] Comparer le standard du marché lorsque l’alternative existe.
- [ ] Donner une opinion Hagnéré Code, son cas inverse et son signal de révision.
- [ ] Conserver une source primaire près de chaque affirmation volatile.

### P2 — différenciation et finition

- [ ] Créer un mini-calculateur TCO 36 mois exportable en PDF.
- [ ] Fournir une fiche de criticité et un protocole de test 50 000 lignes.
- [ ] Ajouter un diagramme simple de l’architecture hybride.
- [ ] Faire tester le texte par un dirigeant non technique et consigner les incompréhensions.
- [ ] Vérifier le rendu des tableaux à 320, 390, 768, 1 024 et 1 440 px.

### Score après correction

Non attribué. Aucun score futur ne doit être simulé avant réécriture, contre-audit factuel, recalcul, contrôle navigateur et test lecteur.

## 11. Preuve technique et visuelle à exiger après réécriture

```text
Page publique modifiée dans ce lot : non.
Hash avant et après audit attendu : identique.
Sources revérifiées : Microsoft pricing, licence, délégation, hors-ligne, ALM, gouvernance et Well-Architected.
Calculs indépendants : paliers de licences, TCO, seuil, adoption et retour hybride recalculés avec Node.js.
Liens : contrôle HTTP à rejouer après intégration ; une réponse anti-bot ne vaut pas lien invalide.
SEO technique : canonical, robots, Article, BreadcrumbList, FAQ visible/JSON-LD, sitemap et maillage à recontrôler après modification.
Rendu : 320, 390, 768, 1 024 et 1 440 px, clair/sombre, tableaux, cartes, CTA, FAQ et source.
Accessibilité : ordre des titres, liens explicites, tableaux utilisables au clavier et alternatives aux schémas.
Validation lecteur humain réel : absente à ce stade.
Indexation Google : non prouvée par cet audit.
```

### Verdict final de l’audit

Le guide possède la meilleure partie la plus difficile à inventer : cinq tests neutres, concrets et techniquement sérieux. Pour devenir une référence supérieure aux comparatifs internationaux, il doit maintenant accomplir le travail économique qu’eux-mêmes réalisent mal : normaliser le périmètre, chiffrer toutes les options, montrer la sensibilité et publier le cas où Power Apps reste la meilleure décision.
