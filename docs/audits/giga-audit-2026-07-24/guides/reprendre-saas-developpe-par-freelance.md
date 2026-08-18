# Audit approfondi — `reprendre-saas-developpe-par-freelance`

Date : 24 juillet 2026

Auditeur concurrentiel : Codex, lot benchmark international

Snapshot du guide : `src/app/guides/reprendre-saas-developpe-par-freelance/page.tsx`, 839 lignes, 4 802 mots, SHA-256 `cd1ed59ca986f329e5402a89721321da61f0d5ce0c7a82e178ad18dbdbe94dc4`

Périmètre : audit éditorial, factuel et décisionnel uniquement. Aucune modification de la page publique, du registre des guides, des manifestes ou de la documentation partagée n’a été réalisée dans ce lot.

## 1. Verdict exécutif

```text
Lecteur exact : dirigeant d'un SaaS déjà utilisé et payé, dont le freelance part ou devient indisponible.
Question réelle : mon entreprise peut-elle continuer à encaisser, servir les clients et restaurer le produit sans cette personne ?
Décision attendue : stabiliser, reprendre tel quel, migrer une dépendance, réécrire progressivement ou arrêter.
Réponse actuelle en une phrase : ne retirez aucun accès sur une date ; retirez-le lorsque son remplaçant, sa récupération, sa preuve et son retour arrière ont été vérifiés.
Défaut qui coûte le plus de valeur : le guide sécurise remarquablement la passation, mais ne chiffre ni le risque, ni le coût complet des options, ni les objectifs de reprise.
Niveau actuel : A-
Priorité : moyenne-haute
Statut : audité / à enrichir économiquement sans dégrader la méthode
```

Le guide est déjà nettement supérieur à une checklist de reprise ordinaire. Il ne confond pas dépôt de code et service exploitable, ne recommande pas une réécriture réflexe, traite dix fonctions concrètes et exige trois preuves différentes : parcours fictif, restauration protégée et service actif contrôlé. La condition de retrait attachée à chaque accès est un actif éditorial réellement différenciant.

Il manque toutefois la couche que le dirigeant doit présenter à son comité, son associé ou son financeur :

1. combien coûte le maintien, une migration ciblée et une réécriture sur un même horizon, en coût total de possession (TCO) ;
2. quel temps maximal de remise en service (RTO) et quelle perte maximale de données (RPO) le métier accepte ;
3. quels risques sont prioritaires à partir de leur impact, et non de leur sophistication technique ;
4. combien de valeur supplémentaire une réécriture doit créer pour compenser son surcoût ;
5. ce que coûte une passation préparée par rapport à une récupération en crise.

La position professionnelle à assumer :

> Notre avis par défaut est de reprendre et stabiliser avant de réécrire. Nous ne changeons cette recommandation que si une contrainte prouvée — sécurité, support impossible, coût récurrent, architecture incompatible ou trajectoire commerciale — rend la conservation plus chère ou plus dangereuse sur l’horizon retenu. Hagnéré Code vend aussi du développement : ce conflit d’intérêt doit être visible, et le scénario où nous déconseillons une réécriture doit être chiffré.

### Score avant correction

| Axe | Note /10 | Preuve localisable | Manque décisif |
| --- | ---: | --- | --- |
| Intention | 10 | Départ du freelance alors que les clients se connectent et paient | Aucun manque majeur |
| Décision | 9 | Maintenir, stabiliser, migrer, réécrire progressivement ou arrêter | Aucun seuil économique pour départager |
| Pédagogie | 10 | Dix fiches concrètes et vocabulaire explicité | RTO, RPO et TCO ne sont pas encore traduits en mots métier |
| Profondeur | 9 | Comptes, paiement, DNS, tâches, courriel, fichiers, monitoring, tests, droits | Criticité métier, journal de décision et gestion d’incident à renforcer |
| Preuve | 9 | Preuves isolées, service actif, restauration, sources GitHub/Stripe/Vercel/CNIL/Légifrance | Pas de modèle chiffré ni de preuve de coût |
| Comparaison | 4 | Plusieurs suites sont nommées | Pas de périmètre, horizon ou TCO commun |
| Originalité | 10 | Condition de retrait et solution de repli pour chaque fonction | Actif déjà distinctif |
| Style | 9 | Humain, concret, ferme et prudent | La succession des dix cartes peut fatiguer sans synthèse exécutive |
| Conversion | 8 | CTA après une méthode autonome et conflit commercial implicite | Le prospect n’arrive pas encore avec budget, RTO/RPO et arbitrage |
| SEO/produit | 8 | Intention propre, FAQ, JSON-LD, cas fictif complet et maillage | Couverture coût, SLA, sécurité incident et acquisition/reprise juridique incomplète |

Total : **86/100**

La page est publiable, utile et crédible. Elle ne franchit pas encore le seuil interne « numéro un visé » : 90/100, aucun axe sous 8 et comparaison à 9 minimum.

## 2. Ce que le guide dit réellement

- **Réponse dans les 150 premiers mots :** oui. La priorité est la continuité du service et la disparition de la dépendance à une personne, pas le jugement du code.
- **Progression :** gel raisonné, distinction code/service, dix fonctions de RelanceSimple, fiche vierge, trois contrôles, paiement, transferts, ordre par résultat, choix de la suite.
- **Verdict :** stabiliser d’abord ; ne réécrire que lorsqu’une raison technique ou métier le justifie.
- **Exemple :** RelanceSimple, 18 petites sociétés, dix services fictifs et une preuve de retrait pour chacun.
- **Preuves :** propriétaire, accès sortant, contrôle entreprise, test, blocage, action, condition de retrait et solution de repli.
- **Calculs :** aucun calcul économique exécuté.
- **Comparaison :** options nommées, mais non normalisées.
- **Droit et conformité :** propriété intellectuelle, cession, sous-traitance, accès et destruction des données sont abordés avec une limite de conseil juridique.
- **Bon fit :** service en activité, volonté de coopérer, comptes récupérables, priorité à la continuité.
- **Mauvais fit :** incident en cours, compte détourné, conflit aigu ou attente d’une reprise sans accès ni preuve.
- **Élément faussement complet :** dix comptes au vert prouvent la maîtrise de la passation ; ils ne prouvent ni la rentabilité future, ni la maintenabilité du code, ni la capacité de tenir un niveau de service.

## 3. Benchmark France et international

Requêtes et marchés étudiés le 24 juillet 2026 :

- France : « reprise maintenance SaaS », « reprise projet TMA », « freelance parti SaaS » ;
- États-Unis et plateformes globales : « SaaS asset transfer checklist », documentation GitHub et Stripe ;
- Royaume-Uni : « developer handover », exigences publiques de sortie et transfert de connaissances ;
- Australie : sécurité des prestataires managés et comptes privilégiés ;
- Japon : changement de fournisseur de développement et actifs à remettre.

Les résultats observés ne constituent ni un classement stable ni une preuve de performance.

### Saturation

La concurrence couvre déjà largement : inventaire du code, documentation, audit technique, dépendances, sécurité, transfert des comptes et plan de stabilisation. Plusieurs pages commerciales ajoutent des délais spectaculaires ou un cas client sans méthode de vérification.

Les gains d’information encore rares sont :

- une condition de retrait par fonction ;
- la distinction entre test isolé, restauration et service actif ;
- un TCO à périmètre constant ;
- des objectifs RTO/RPO acceptés par le métier ;
- un seuil économique de réécriture ;
- le coût d’une récupération en crise ;
- la preuve de destruction des copies et le retrait des anciens accès ;
- le cas où le repreneur conseille de conserver l’existant.

| Ressource et URL directe | Marché / type | Ce qu’elle couvre bien | Limite observée | Apport à adapter |
| --- | --- | --- | --- | --- |
| [ARDNTECH — Reprendre la maintenance d’un SaaS](https://ardn.tech/fr-fr/nos-services/reprise-maintenance-saas) | France / concurrent | Audit en cinq jours, stabilisation, sécurité, dépendances, RGPD | Page commerciale ; délais, fréquence et cas ne sont pas des repères universels | Garder une progression lisible, sans reprendre les délais comme normes |
| [Adimeo — 9 étapes d’une reprise TMA](https://www.adimeo.com/blog/reprise-projet-tma) | France / concurrent | Transition, connaissance métier, continuité et transfert | L’affirmation qu’une mauvaise reprise peut coûter plus qu’une reconstruction n’est pas chiffrée | Produire le comparatif qui manque |
| [Software Sustainability Institute — Help, my developer is running away](https://www.software.ac.uk/guide/help-my-developer-running-away) | Royaume-Uni / organisme public financé | Handover anticipé, priorisé et humain ; actifs au-delà du code | Ancien, orienté logiciel de recherche et équipes techniques | Ajouter les personnes et contacts à la reprise, sans transposer le contexte |
| [Department for Education — Statement of Work](https://www.contractsfinder.service.gov.uk/Notice/Attachment/e02c8b3f-0418-4951-a9ca-b3d3ea07ed8c) | Royaume-Uni / marché public | Sortie et transfert de connaissances pensés dès le démarrage | Contrat public lourd, disproportionné pour une PME | Faire du plan de sortie un livrable initial, en version légère |
| [Acquire — SaaS asset transfer guide](https://help.acquire.com/saas-asset-transfer-guide) | États-Unis / place de marché | Inventaire acquisition, paiement, code, domaine et données | Affirme trop largement qu’un compte Stripe doit toujours être recréé ; ne pas la traiter comme source technique | Utiliser la checklist comme benchmark, vérifier chaque transfert chez le fournisseur |
| [GitHub — Transferring a repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/transferring-a-repository) | États-Unis / source primaire | Conditions, éléments transférés, collaborateurs, secrets, redirections | Ne couvre pas le reste du SaaS | Conserver le détail fournisseur et prouver les dépendances hors dépôt |
| [Stripe — Import subscriptions toolkit](https://docs.stripe.com/billing/subscriptions/import-subscriptions-toolkit?locale=en-GB) | États-Unis / source primaire | Migration par CSV, validation, contrôle et annulation limitée | Un outil d’import n’établit pas qu’une migration de compte est nécessaire | Séparer maintien du compte, transfert de propriété et migration de données |
| [Cyber.gov.au — Protecting MSPs and customers](https://www.cyber.gov.au/about-us/advisories/protecting-against-cyber-threats-managed-service-providers-and-their-customers) | Australie + partenaires UK/US/CA / autorité | Désactivation des comptes inutiles, MFA, rôles de sécurité contractuels | Vise les MSP, pas tout freelance ou tout SaaS | Adapter les principes aux accès privilégiés, avec périmètre annoncé |
| [Oflight — Switching development vendors](https://www.oflight.co.jp/en/columns/dev-vendor-switch-2026) | Japon / concurrent | Code, base, comptes, serveur, domaine et documentation | Checklist commerciale, peu d’économie ou de preuve active | Comparer le registre Hagnéré Code à un inventaire international simple |
| [CNIL — Guide de la sécurité 2024](https://www.cnil.fr/sites/default/files/2024-03/cnil_guide_securite_personnelle_2024.pdf) | France / autorité | Sous-traitance, sauvegardes, restauration, continuité, incidents | Guide général ; la mesure doit être adaptée aux risques du SaaS | Formaliser responsabilités, restauration et preuves |

### Lecture concurrentielle

Le guide actuel gagne déjà sur la preuve opérationnelle. Sa faiblesse n’est pas un manque de cartes supplémentaires : c’est l’absence de traduction financière et de niveaux de service. L’avantage le plus difficile à copier serait un dossier de décision en deux pages : fonctions critiques, RTO/RPO, trois options à coût comparable, conditions de bascule et preuve de sortie.

## 4. Matrice de gain d’information

| Question du dirigeant | Réponse dominante chez les concurrents | Couverture actuelle | Manque | Réponse supérieure à produire |
| --- | --- | --- | --- | --- |
| Le dépôt Git suffit-il ? | Inventorier code, documentation et accès | Excellente | Aucun manque majeur | Garder les dix fonctions et la démonstration |
| Quand retirer le freelance ? | Après transfert ou fin du contrat | Excellente | Synthèse de gouvernance | Retrait par résultat, approuvé par un responsable et journalisé |
| Faut-il réécrire ? | « Pas toujours » ou « cela dépend » | Bonne | Aucun calcul | TCO 36 mois + seuil de valeur supplémentaire |
| Combien de données peut-on perdre ? | Sauvegardes régulières | Faible | Aucun RPO métier | Calculer événements exposés selon l’intervalle |
| Combien de temps peut-on rester arrêté ? | Plan de reprise | Faible | Aucun RTO ni coût de mobilisation | Chiffrer 8 h/36 h et tester la restauration |
| Qui possède le code ? | Vérifier le contrat | Bonne | Risque de transformer deux articles en avis juridique | Arbre « accès matériel / droits / exploitation » et revue juridique si litige |
| Que devient la donnée à la sortie ? | Export ou sauvegarde | Bonne | Attestation de destruction peu visible | Renvoi, destruction des copies, preuve écrite et droits résiduels |
| Quel transfert est réellement possible ? | Checklist générique | Très bonne | Page fournisseur à revalider le jour J | Branche spécifique par fournisseur, sans généralisation |
| Quel est le coût de la passation ? | Devis ou durée type | Absent | Temps interne, outils, TMA et sortie | TCO constant et coût de récupération en crise |
| Et si un incident est déjà en cours ? | Peu traité | Limite bien annoncée | Orientation plus opérationnelle | Isoler, conserver les preuves, déclencher incident/juridique/cyber adapté |

## 5. Faits, fraîcheur et contradictions

Sources primaires revérifiées le 24 juillet 2026.

| Affirmation ou règle | Verdict | Source primaire et date visible | Action éditoriale |
| --- | --- | --- | --- |
| Un dépôt GitHub peut être transféré, mais des secrets, webhooks, collaborateurs et réglages subsistent | Confirmé | [GitHub — transfert de dépôt](https://docs.github.com/en/repositories/creating-and-managing-repositories/transferring-a-repository), consulté le 24/07/2026 | Conserver ; revalider avant opération |
| Les permissions doivent être retirées lorsque l’utilisateur n’est plus habilité et à la fin du contrat | Confirmé | [CNIL — gérer les habilitations](https://www.cnil.fr/fr/securite-gerer-les-habilitations), 13/03/2024 | Conserver ; relier au résultat de remplacement |
| La sortie d’un sous-traitant doit organiser renvoi ou destruction des données et destruction des copies, avec justification écrite | Confirmé comme exemple de clauses à adapter | [CNIL — exemple de clauses](https://www.cnil.fr/fr/sous-traitance-exemple-de-clauses), 04/10/2017 | Préciser que l’exemple ne constitue pas seul un contrat |
| Les restaurations et mesures de continuité doivent être testées | Confirmé | [CNIL — Guide de la sécurité 2024](https://www.cnil.fr/sites/default/files/2024-03/cnil_guide_securite_personnelle_2024.pdf), fiches 17 et 18 | Conserver et ajouter RTO/RPO |
| Un contrat de prestation n’emporte pas automatiquement transfert des droits de l’auteur | Confirmé dans le cadre du droit d’auteur, sous réserves | [Légifrance — article L111-1](https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000042814694), version en vigueur depuis le 27/12/2020 | Garder la limite de conseil juridique |
| Les droits cédés et leur domaine d’exploitation doivent être délimités | Confirmé | [Légifrance — article L131-3](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958/2025-08-10), version en vigueur depuis le 03/07/1992 | Ne pas réduire l’analyse à « facture payée = code acquis » |
| Toute reprise Stripe impose un nouveau compte | **Contredit comme règle générale** | Acquire le dit, mais la documentation Stripe distingue outils et situations | Ne jamais reprendre cette généralisation ; brancher selon titulaire et besoin réel |
| MFA et retrait des comptes inutiles réduisent le risque d’accès prestataire | Confirmé dans le périmètre MSP de l’avis | [Cyber.gov.au — avis conjoint](https://www.cyber.gov.au/about-us/advisories/protecting-against-cyber-threats-managed-service-providers-and-their-customers) | Adapter sans prétendre que tout freelance est un MSP |

### Contradictions à rendre visibles

- **Continuité contre sécurité immédiate :** conserver temporairement un accès peut protéger le service, mais prolonge aussi un privilège. La décision doit être courte, approuvée, surveillée et assortie d’une condition de retrait.
- **Transfert contre migration :** changer de propriétaire d’un actif n’est pas toujours migrer ses données ; inversement, une migration peut être nécessaire sans transfert possible.
- **Preuve contre données réelles :** un test isolé réduit le risque, mais ne prouve pas le service actif. Un contrôle de production doit rester minimal, autorisé et réversible.
- **Code acquis contre droits acquis :** posséder un fichier ou un dépôt n’établit pas seul tous les droits d’exploitation.
- **Stabiliser contre conserver indéfiniment :** stabiliser est une décision temporaire. La dette, le support des dépendances et la roadmap doivent être revus à date fixe.

### Faits à ne pas ajouter

- Aucun délai universel de reprise, de cinq jours, quinze jours ou quatre semaines.
- Aucun pourcentage de SaaS « récupérables » sans étude traçable.
- Aucun prix moyen de reprise importé d’un concurrent.
- Aucune règle unique pour Stripe, Vercel, GitHub ou un registrar.
- Aucun RTO ou RPO choisi par le développeur seul.
- Aucune promesse « zéro coupure » hors scénario testé.

## 6. Scénarios et calculs à construire

Les montants et volumes ci-dessous sont **illustratifs, hors taxes et non issus d’un client**. Ils servent à montrer la méthode. Chaque hypothèse doit devenir un champ remplaçable.

### Scénario 1 — Comparer trois suites sur trente-six mois

Même périmètre : continuité du produit actuel, fonctions équivalentes, hébergement, observabilité, maintenance, temps d’un responsable interne et sortie documentée.

| Poste sur 36 mois | Stabiliser l’existant | Migration ciblée | Réécriture |
| --- | ---: | ---: | ---: |
| Audit / prise en main | 9 000 € | 9 000 € | 14 000 € de cadrage |
| Stabilisation initiale | 18 000 € | 12 000 € | incluse dans la construction |
| Migration ou construction | 0 € | 55 000 € | 140 000 € |
| TMA | 2 200 € × 36 = 79 200 € | 1 800 € × 36 = 64 800 € | ancien 2 200 € × 9 + nouveau 1 500 € × 27 = 60 300 € |
| Infrastructure / observabilité | 650 € × 36 = 23 400 € | 750 € × 36 = 27 000 € | 900 € × 36 = 32 400 € |
| Temps interne valorisé | 5 h × 55 € × 36 = 9 900 € | 8 h × 55 € × 36 = 15 840 € | 220 h × 55 € = 12 100 € |
| Double exploitation | 0 € | 0 € | 12 000 € |
| Sortie documentée | 2 000 € | 3 000 € | 4 000 € |
| **TCO 36 mois** | **141 500 €** | **186 640 €** | **274 800 €** |

```text
Horizon : 36 mois à partir de la décision.
Inclus : même continuité, maintenance, infrastructure, temps interne et sortie.
Exclus : TVA, fonctions nouvelles, perte d'exploitation, financement et revenu futur.
Sensibilité : durée de la double exploitation, volume de maintenance, coût chargé et travaux découverts.
Contrôle inverse : si l'existant n'est plus supportable ou empêche une obligation commerciale prouvée, l'option la moins chère peut devenir la plus risquée.
```

### Scénario 2 — Calculer ce que la réécriture doit créer

Le surcoût du scénario central est :

```text
274 800 - 141 500 = 133 300 €
```

Si un client supplémentaire ou conservé apporte 800 € de contribution mensuelle :

```text
Client-mois nécessaires = 133 300 / 800 = 166,625
Sur les 27 mois suivant la mise en service = 166,625 / 27 = 6,17 clients simultanés
```

La réécriture doit donc créer ou préserver environ **sept clients simultanés pendant vingt-sept mois** pour dépasser le coût de stabilisation dans ce cas.

| Contribution mensuelle par client | Client-mois requis | Clients simultanés sur 27 mois |
| ---: | ---: | ---: |
| 400 € | 333,25 | 12,34 |
| 800 € | 166,63 | 6,17 |
| 1 500 € | 88,87 | 3,29 |

```text
Horizon : 36 mois, avec mise en service de la réécriture au neuvième mois.
Inclus : seul le surcoût face à la stabilisation.
Exclus : valeur terminale, bénéfice au-delà du mois 36 et valeur non mesurable de la marque.
Sensibilité : contribution réelle, date de lancement, attrition évitée et coûts de double exploitation.
Contrôle inverse : sans client ajouté ou conservé de façon attribuable, la stabilisation garde 133 300 € d'avance.
```

### Scénario 3 — Transformer la fréquence de sauvegarde en données exposées

Hypothèse : le SaaS enregistre 900 modifications métier par jour, une reprise repart de la dernière sauvegarde exploitable et l’instant de l’incident est réparti uniformément dans l’intervalle.

| Intervalle | Exposition moyenne | Exposition maximale | Reconstitution maximale à 6 min/événement et 45 €/h |
| --- | ---: | ---: | ---: |
| 24 h | 450 événements | 900 événements | `900 × 0,1 h × 45 = 4 050 €` |
| 4 h | 75 événements | 150 événements | `150 × 0,1 h × 45 = 675 €` |

Ce calcul n’établit pas que chaque événement est récupérable ni qu’il vaut 4,50 €. Le montant valorise une capacité de travail, pas nécessairement une sortie de trésorerie. Il force le métier à dire si 900 événements perdus sont acceptables.

```text
Horizon : un incident de restauration.
Inclus : volume moyen et capacité manuelle de reconstitution.
Exclus : pertes clients, obligations légales, corruption silencieuse et indisponibilité.
Sensibilité : volume journalier, intervalle, point de restauration et temps de reconstitution.
Contrôle inverse : sur un produit à dix changements non critiques par jour, une sauvegarde quotidienne testée peut être préférable à une architecture plus coûteuse.
```

### Scénario 4 — Donner une valeur à l’exercice de restauration

Hypothèses : contribution mensuelle 22 500 €, deux personnes mobilisées à 55 €/h et exercice de restauration coûtant 6 h externes à 95 € plus 2 h internes à 55 €.

```text
Coût de l'exercice = 6 × 95 + 2 × 55 = 680 €
Coût de mobilisation et contribution exposée par heure
= 22 500 / (30 × 24) + 2 × 55
= 141,25 €/h
Seuil = 680 / 141,25 = 4,81 h
```

| Durée d’arrêt | Contribution exposée | Capacité mobilisée | Total illustratif |
| ---: | ---: | ---: | ---: |
| 8 h | 250 € | 880 € | 1 130 € |
| 36 h | 1 125 € | 3 960 € | 5 085 € |

```text
Horizon : un exercice annuel comparé à un incident.
Inclus : contribution linéaire exposée et capacité de deux personnes.
Exclus : pénalités, remboursements, réputation, rattrapage et probabilité d'incident.
Sensibilité : marge horaire, effectif mobilisé, durée réellement réduite par l'exercice.
Contrôle inverse : si l'exercice ne réduit pas la durée ou si la restauration n'est pas le mode de panne concerné, le seuil n'est pas atteint.
```

### Scénario 5 — Passation préparée ou récupération en crise

Quatre services restent sur des comptes personnels.

| Mode | Hypothèse par service | Quatre services | Outil commun | Total |
| --- | ---: | ---: | ---: | ---: |
| Passation préparée | `2 h × 95 + 1 h × 55 = 245 €` | 980 € | 300 € | **1 280 €** |
| Récupération en crise | `6 h × 95 + 2 h × 55 = 680 €` | **2 720 €** | inclus | **2 720 €** |

Écart direct illustratif : **1 440 €**, sans valoriser les jours d’attente ni une coupure.

```text
Horizon : une transition de quatre comptes.
Inclus : temps externe, temps interne et mise en place d'un coffre/MFA dans le cas préparé.
Exclus : frais fournisseur, avocat, perte d'exploitation et compte définitivement irrécupérable.
Sensibilité : nombre de comptes personnels, disponibilité du sortant et procédure fournisseur.
Contrôle inverse : si tous les comptes sont déjà détenus par l'organisation avec deux administrateurs, une rotation contrôlée coûte moins que les deux options.
```

## 7. Comparaison et position professionnelle

```text
Options comparables : stabilisation de l'existant ; migration ciblée ; réécriture ; arrêt organisé.
Périmètre commun : fonctions actuelles, continuité, maintenance, hébergement, observabilité, temps interne et sortie.
Horizon commun : 36 mois.
Option la moins chère dans le scénario : stabilisation.
Option la plus souple : migration ciblée si une dépendance précise porte le risque.
Option la plus coûteuse : réécriture, justifiable seulement par une contrainte ou une valeur supplémentaire chiffrée.
Position Hagnéré Code : reprendre d'abord, prouver le service, puis décider composant par composant.
Cas où l'option opposée gagne : technologie non maintenable, support fournisseur terminé, exposition de sécurité non corrigeable, roadmap bloquée ou coût d'exploitation durablement supérieur.
Signal de révision : incident, hausse du TCO, dépendance hors support, nouveau contrat client, attrition attribuable au produit ou impossibilité de respecter le RTO/RPO.
Conflit d'intérêt : Hagnéré Code peut vendre audit, TMA, migration et réécriture ; le guide doit publier le calcul où la réécriture perd.
Ce que nous déconseillons même si nous pourrions le vendre : une refonte avant contrôle des comptes, sauvegardes, paiement et service actif.
```

## 8. Objections et cas limites

| Objection loyale | Réponse à apporter | Incertitude restante | Conséquence |
| --- | --- | --- | --- |
| « Le freelance est de confiance, inutile de tout transférer » | La confiance n’assure pas disponibilité, succession ou récupération | Le niveau de coopération réel | Préparer sans accusation et conserver une période contrôlée |
| « Nous avons le dépôt, donc nous possédons le SaaS » | Le service dépend d’autres actifs et les droits se lisent dans le contrat | Qualification juridique du code et des contributions | Audit contractuel spécialisé si enjeu |
| « Il faut couper tous ses accès ce soir » | Possible en incident, dangereux en passation normale non préparée | Menace réelle et capacité de continuité | Séparer réponse à incident et transition planifiée |
| « Réécrire sera plus propre » | Peut être vrai techniquement | Valeur métier et TCO comparé | Exiger le seuil de 133 300 € dans l’exemple |
| « La sauvegarde existe » | Une sauvegarde non restaurée n’est pas une preuve de reprise | Intégrité, fichiers externes et secrets | Exercice protégé et preuve datée |
| « Zéro perte de données est obligatoire » | Cela peut imposer une architecture coûteuse | Nécessité métier ou réglementaire | Faire accepter RPO et coût par la direction |
| « Stripe interdit le transfert » | Les situations et outils diffèrent | Titulaire, pays, acquisition, données et contrats | Vérifier le compte réel avec la documentation/support |
| « Le produit tourne, donc la reprise est finie » | Le service actif est une preuve, pas la maintenabilité future | Dette et dépendances | Revue à 30/90 jours ou jalon fondé sur résultats |
| « Le contrat dit que tout appartient au client » | Le texte doit être lu précisément, avec droits, périmètre, durée et composants tiers | Interprétation juridique | Ne pas transformer le guide en avis |
| « Nous n’avons pas le budget d’une reprise » | Une transition limitée peut viser d’abord paiement, domaine, données et alertes | Risque résiduel accepté | Écrire ce qui reste rouge et qui l’assume |

## 9. Plan de réécriture

| Ordre | Section proposée | Question résolue | Preuve ou outil | Décision produite | Action |
| ---: | --- | --- | --- | --- | --- |
| 1 | Verdict de continuité | Que faire aujourd’hui ? | Quatre fonctions vitales | Stabiliser ou déclencher incident | Conserver |
| 2 | Passation normale ou incident | Sommes-nous dans le bon processus ? | Arbre de qualification | Continuer ou escalader | Renforcer |
| 3 | Résumé exécutif des dix fonctions | Qu’est-ce qui est rouge ? | Tableau propriétaire/preuve/retrait | Prioriser | Créer avant les cartes |
| 4 | Dix fiches RelanceSimple | Comment prouver chaque transfert ? | Cas fictif actuel | Retirer ou maintenir l’accès | Conserver intégralement |
| 5 | Droits et données | Que possède l’entreprise ? | Légifrance + CNIL | Faire relire ou poursuivre | Renforcer |
| 6 | Objectifs RTO/RPO | Combien de temps et de données ? | Scénarios 3 et 4 | Dimensionner la reprise | Créer |
| 7 | Trois contrôles | Quel niveau de preuve ? | Isolé, restauration, actif | Passer le jalon | Conserver |
| 8 | Fournisseurs | Transfert ou migration ? | Arbres GitHub/Stripe/hébergement | Choisir la branche réelle | Conserver et dater |
| 9 | TCO 36 mois | Que coûte chaque suite ? | Scénario 1 | Stabiliser, migrer ou réécrire | Créer |
| 10 | Seuil de réécriture | Que doit produire le surcoût ? | Scénario 2 | Autoriser ou refuser | Créer |
| 11 | Coût de la passation | Pourquoi agir avant le départ ? | Scénario 5 | Planifier | Créer |
| 12 | Plan de sortie futur | Comment éviter la prochaine dépendance ? | Propriétaires, coffre, preuves, export | Contractualiser | Créer |
| 13 | Position et conflit | Que recommande Hagnéré Code ? | Cas central, inverse et signal | Demander un audit qualifié | Renforcer |

### Contrat des 150 premiers mots

- Nommer le lecteur : dirigeant dont le SaaS sert encore des clients et dépend d’un freelance sortant.
- Donner le verdict : ne réécrivez pas et ne coupez pas à l’aveugle ; protégez paiement, données, domaine et alertes.
- Annoncer la méthode : dix fonctions, une preuve et une condition de retrait par accès.
- Ajouter la promesse nouvelle : comparer stabilisation, migration et réécriture sur 36 mois, puis fixer RTO/RPO.
- Signaler la limite : intrusion, détournement, litige ou violation de données exigent une réponse spécialisée.

### À conserver

- L’ouverture humaine.
- RelanceSimple et ses dix fiches.
- Les trois niveaux de preuve.
- Les branches de paiement.
- Le refus d’une durée universelle.
- Le choix final qui inclut maintien et arrêt.

### À réduire ou déplacer

- Ajouter un tableau exécutif avant les dix cartes pour éviter la fatigue.
- Éviter de répéter « oui, cela bloque » lorsque le statut peut être porté visuellement.
- Rassembler les avertissements juridiques dans un encadré décisionnel, sans les supprimer.
- Ne pas ajouter de nouveaux fournisseurs tant qu’ils n’apportent pas une branche réellement différente.

## 10. Contre-audit et portes de correction

### P0 — bloquants

- [ ] Revalider les pages fournisseur GitHub, Stripe et hébergement le jour de la réécriture.
- [ ] Ajouter un TCO à horizon et périmètre identiques.
- [ ] Ajouter RTO, RPO, propriétaire métier et preuve d’acceptation.
- [ ] Distinguer explicitement passation normale, litige et incident cyber.
- [ ] Conserver les chiffres fictifs clairement étiquetés.
- [ ] Recalculer indépendamment les cinq scénarios.

### P1 — nécessaires pour viser 90/100

- [ ] Ajouter le seuil économique de réécriture et son contrôle inverse.
- [ ] Ajouter coût de passation préparée et coût de récupération.
- [ ] Ajouter synthèse exécutive des dix fonctions.
- [ ] Formaliser renvoi/destruction des données et retrait des comptes.
- [ ] Déclarer le conflit d’intérêt de Hagnéré Code.
- [ ] Traiter loyalement le cas où l’existant doit être conservé.

### P2 — différenciation et finition

- [ ] Créer une feuille téléchargeable RTO/RPO/TCO sans secret.
- [ ] Proposer un export local des dix fiches.
- [ ] Ajouter un journal de décision et de preuve horodaté.
- [ ] Faire relire le droit par un professionnel si le guide devient contractuel.
- [ ] Tester la compréhension avec deux dirigeants non techniques.
- [ ] Vérifier le rendu mobile des dix cartes et des tableaux.

### Score après correction

Non attribué. Il devra être calculé seulement après réécriture, vérification factuelle, recalcul indépendant, contrôle navigateur et test lecteur.

## 11. Preuves techniques et visuelles à exiger après réécriture

```text
Page publique modifiée dans ce lot : non.
Hash public avant audit : cd1ed59ca986f329e5402a89721321da61f0d5ce0c7a82e178ad18dbdbe94dc4.
Hash attendu après audit : identique.
Sources revérifiées : CNIL, Légifrance, GitHub, Stripe, avis cyber australien et benchmarks FR/UK/US/JP.
Calculs recalculés avec Node.js : TCO 141 500 / 186 640 / 274 800 €, delta 133 300 €, RPO, restauration et accès.
Liens : contrôle du 24/07/2026 effectué ; les URL éditoriales ont répondu 200, tandis que Contracts Finder et les deux pages Légifrance ont répondu 403 au client curl et Cyber.gov.au 000, mais les quatre pages ont bien été ouvertes et lues via le navigateur de recherche. Ces protections ne prouvent pas un lien mort.
SEO technique : canonical, robots, Article, BreadcrumbList, FAQ visible/JSON-LD, sitemap et maillage à recontrôler après modification.
Rendu : 320, 390, 768, 1 024 et 1 440 px ; clair/sombre ; cartes longues, tableaux, CTA et FAQ.
Accessibilité : ordre des titres, tableaux lisibles, statuts non transmis par la couleur seule et alternative imprimable.
Validation lecteur humain réel : absente à ce stade.
Indexation et position Google : non prouvées.
```

### Verdict final de l’audit

Cette page a déjà une vraie avance éditoriale : elle montre comment retirer une dépendance humaine sans transformer la reprise en pari. Pour devenir la réponse de référence d’un dirigeant, elle doit maintenant relier cette rigueur à quatre décisions économiques : coût total, perte de données acceptable, durée d’arrêt acceptable et valeur minimale d’une réécriture. Il faut enrichir cette couche, pas diluer les dix preuves qui font sa force.
