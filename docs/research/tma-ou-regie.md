# Dossier de recherche — TMA ou régie pour maintenir une application

> Dossier de travail des quatre passes. La recherche et la rédaction sont
> terminées. Le guide corrige un faux choix fréquent : la TMA décrit un service
> de maintenance confié à un tiers, tandis que la régie désigne couramment une
> manière d'acheter du temps ou de la capacité. Les deux notions peuvent se
> combiner.

## Journal des quatre passes

Propriétaire éditorial unique : `/root`

| Passe                        | État                      | Date            | Responsable                                | Snapshot                                         | Blocages                                                             |
| ---------------------------- | ------------------------- | --------------- | ------------------------------------------ | ------------------------------------------------ | -------------------------------------------------------------------- |
| 1. Recherche                 | Terminée — porte validée  | 23 juillet 2026 | `/root/research_marketing_tma_site_batch2` | `docs/research/manifests/tma-ou-regie-p1.sha256` | Aucun, sous réserve de conserver le cadrage « mode d'achat du flux » |
| 2. Rédaction et intégration  | Terminée — porte P2 prête | 23 juillet 2026 | `/root`                                    | `docs/research/manifests/tma-ou-regie-p2.sha256` | Aucun                                                                |
| 3. Contre-audit indépendant  | Terminée — porte validée  | 23 juillet 2026 | `/root/preaudit_tma_regie`                 | `docs/research/manifests/tma-ou-regie-p3.sha256` | Aucun                                                                |
| 4. Plume humaine et contrôle | Terminée — porte validée  | 23 juillet 2026 | `/root`                                    | `docs/research/manifests/tma-ou-regie-p4.sha256` | Aucun                                                                |

### Manifeste du snapshot

La recherche P1 reste conservée dans son manifeste historique. Les snapshots
P2 et P3 sont enregistrés dans leurs manifestes respectifs.

## 1. Fiche d'identité

```text
Slug : tma-ou-regie
Statut actuel : publiable — validation éditoriale déléguée
Requête principale : TMA ou régie
Moment du parcours : décider et sécuriser
Lecteur précis : dirigeant ou responsable métier qui possède une application, reçoit des demandes de correction et d'évolution et doit choisir comment acheter la capacité de maintenance
Situation déclenchante : le prestataire propose une TMA, un forfait, des jours en régie ou un mélange, mais l'entreprise ne sait pas quel modèle correspond à son flux réel
Décision principale après lecture : distinguer ce qui est acheté — continuité, diagnostic ou livraison — de sa facturation — prix fixe, capacité ou temps — à partir des demandes, de leur impact métier et de la capacité interne à décider
Niveau de connaissance au départ : sait que l'application doit être maintenue, ne distingue pas forcément périmètre de service, mode de facturation, engagement de résultat et organisation
5 questions indispensables : que recouvre la TMA ? que signifie la régie dans la proposition reçue ? quelles demandes sont prévisibles ? qui priorise et accepte ? comment contrôler le temps, le résultat, les accès et la sortie ?
3 objections ou craintes : « Le forfait va me faire payer du temps inutilisé » ; « La régie ouvre un compteur sans fin » ; « La TMA couvre forcément tout »
Action utile sans contact commercial : reprendre les demandes de trois mois, les classer par fréquence, impact, interruption acceptable, résultat vérifiable et dépendances, puis séparer le service attendu de sa facturation
CTA possible : faire cadrer le flux, les responsabilités, la capacité et les règles de preuve avant de signer
Hors périmètre : liste exhaustive des clauses d'un contrat TMA, budget annuel complet, tarif journalier, reprise d'une autre agence, recrutement d'un développeur ou conseil juridique personnalisé
Date de la recherche : 23 juillet 2026
Responsable de la synthèse : /root/research_marketing_tma_site_batch2
```

## 1 bis. Contrat de langage humain

- Phrase exacte que le lecteur pourrait dire au téléphone : « Mon application
  a des bugs et des évolutions tous les mois. Est-ce que je dois prendre un
  forfait de maintenance ou payer les jours réellement passés ? »
- Réponse qu'il attend en une phrase : nommez d'abord ce que vous achetez —
  continuité, diagnostic ou livraison — puis la façon de le payer ; la
  fréquence seule ne décide ni la couverture de support ni la facturation.
- Terme central expliqué sans jargon : la tierce maintenance applicative, ou
  TMA, consiste à confier à un prestataire la correction, l'entretien et
  parfois l'évolution d'une application.
- Mots ordinaires employés par le lecteur : bugs, petites évolutions, urgence,
  jours, forfait, ticket, devis, délai, responsable, validation, application
  disponible, accès, facture.
- Mots d'agence ou de consultant à éviter : run, backlog capacitaire, centre de
  services, engagement au ticket, vélocité, ETP, SLA, MCO sans définition.
- Projet des 150 premiers mots : partir des factures et demandes concrètes,
  défaire le faux duel lexical, donner la réponse « récurrent / variable /
  borné / hybride » et annoncer le tri des trois derniers mois.
- Ce que le lecteur saura décider après ces 150 mots : quel élément de sa
  maintenance relève d'une capacité récurrente, d'un temps piloté ou d'un lot.
- H2 relus isolément : validés en P2.
- Comparaison comprise à 390 px sans colonne masquée : validée dans le navigateur en P4.
- FAQ dont la première phrase répond : validée en P2.
- CTA formulé comme résultat pour le prospect : « Transformer vos demandes de
  maintenance en un dispositif achetable et contrôlable. »

### Test sujet, action, résultat

Testé en P2 sur cinq phrases : aucun « industrialiser le run » ni « absorber le
backlog » ; les formulations indiquent qui reçoit la demande, qui la priorise,
ce qui est remis et qui l'accepte.

### Test de l'ouverture

- [x] le flux vécu par l'entreprise précède les modèles contractuels ;
- [x] TMA est développée et expliquée au premier usage ;
- [x] aucun lexique SLA/MCO/ETP ne retarde la réponse ;
- [x] aucune métaphore structurante n'est prévue ;
- [x] la nuance TMA/régie clarifie le choix au lieu de l'éluder.

## 2. Cannibalisation

| Page existante                                    | Intention de cette page                                                           | Différence du nouveau guide                                                                | Lien ou arbitrage nécessaire                                                 |
| ------------------------------------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------- |
| `/guides/contrat-tma-application`                 | Vérifier le contenu d'un contrat TMA : périmètre, incidents, consommation, sortie | Choisir comment acheter le flux de maintenance avant de négocier les clauses               | Lien obligatoire après le choix ; ne pas réécrire la checklist contractuelle |
| `/guides/cout-maintenance-application-metier`     | Construire le budget annuel de maintenance et d'évolution                         | Affecter chaque famille de demandes à une capacité récurrente, du temps consommé ou un lot | Aucun tarif ni budget annuel ici ; lien pour chiffrer ensuite                |
| `/guides/reprendre-maintenance-site-autre-agence` | Organiser le changement de prestataire et la reprise                              | Choisir le fonctionnement courant une fois les accès et connaissances disponibles          | Lier uniquement pour le cas de transfert                                     |
| `/services/maintenance-evolution`                 | Présenter le service de maintenance Hagnéré Code                                  | Donner une méthode autonome de qualification du besoin                                     | CTA seulement après le tri des demandes                                      |

**Justification d'une URL distincte :** les pages existantes expliquent ce
qu'un contrat doit contenir et ce que la maintenance coûte, mais pas comment
transformer un historique de demandes en un mode d'achat adapté.

**Verdict de cannibalisation :** risque moyen à élevé, mais non bloquant sous
une condition stricte. Le guide traite le choix de capacité et de pilotage,
jamais une nouvelle liste de clauses TMA. Si la P2 consacre l'essentiel du texte
au périmètre, aux SLA, à la réversibilité ou à la facture TMA, elle doit être
arrêtée et fusionnée avec `contrat-tma-application`.

## 3. Demande et vocabulaire du lecteur

Observation manuelle de résultats français le 23 juillet 2026, sans volume
mesuré, pour :

- `TMA ou régie maintenance applicative choisir France` ;
- `"TMA ou régie" application maintenance` ;
- `TMA régie forfait maintenance applicative différences contrat` ;
- `maintenance applicative régie ou forfait TMA choisir prestataire`.

Le résultat exact « TMA ou régie » est peu traité. Les pages visibles portent
surtout sur :

- la définition de la TMA ;
- la maintenance corrective, préventive et évolutive ;
- les clauses du contrat ;
- la différence entre forfait et régie dans les projets informatiques ;
- la maîtrise des coûts et délais ;
- le transfert de connaissances et la réversibilité.

Cette faiblesse de la SERP exacte est une opportunité éditoriale, mais ne prouve
aucun volume. Elle impose surtout de répondre au vocabulaire approximatif du
dirigeant sans valider le faux binaire.

Champ lexical humain à privilégier : demande reçue, bug, évolution, fréquence,
urgence, résultat attendu, jour consommé, capacité réservée, lot, acceptation,
priorité, personne responsable, accès temporaire, journal d'intervention,
facture compréhensible.

## 4. Carte concurrentielle

| Page                                                                                                                                                                                     | Réponse et angle                                  | Preuves/artefacts         | Bon point                                       | Manque décisionnel                                                     | Conflit d'intérêt éventuel     |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- | ------------------------- | ----------------------------------------------- | ---------------------------------------------------------------------- | ------------------------------ |
| [Axopen — Tierce maintenance applicative : comment ça marche ?](https://www.axopen.com/blog/2026/03/tierce-maintenance-applicative-comment-ca-marche/)                                   | Définit et présente l'organisation d'une TMA      | Expérience de prestataire | Explications accessibles                        | Ne part pas d'un historique de demandes pour choisir le mode d'achat   | Prestataire de développement   |
| [ITGwada — maintenance applicative et contrat TMA](https://www.itgwada.com/blog/maintenance/maintenance-applicative-contrat-tma/)                                                        | Présente maintenance et contrat                   | Guide général             | Couvre les notions principales                  | Mélange parfois service, contrat et facturation ; peu de test autonome | Prestataire informatique       |
| [Riant Avocat — clauses du contrat TMA](https://riant-avocat.fr/contrat-tma-clauses-essentielles-exemples/)                                                                              | Sécurise les clauses essentielles                 | Analyse juridique         | Rappelle la nécessité d'un périmètre précis     | Ne choisit pas l'organisation opérationnelle                           | Offre juridique                |
| [Cigref/Syntec — charte infogérance et TMA](https://www.cigref.fr/cigref_publications/RapportsContainer/Parus2004/2004_-_Charte_CIGREF_Syntec_informatique_-_infogerance_et_TMA_web.pdf) | Cadre historique des relations client-prestataire | Charte de 2004            | Définit durablement les familles de maintenance | Ancien, non conçu pour une PME ni pour trancher régie/forfait          | Organisations professionnelles |

**Angle mort commun :** les contenus répondent « qu'est-ce qu'une TMA ? » ou
« quelles clauses signer ? », mais distinguent rarement les trois axes :
services couverts, manière d'acheter le travail et organisation de décision.
Ils conduisent alors à choisir une étiquette avant d'observer le flux réel.

**Valeur originale que le guide apportera :** reclasser trois mois de demandes
réelles selon leur prévisibilité, leur impact, l'interruption acceptable, leur
résultat vérifiable et la capacité du client à arbitrer. Le guide sépare le
service acheté de sa facturation et autorise une combinaison, pas un gagnant
artificiel.

## 5. Fiche de preuves

| Affirmation utilisable                                                                                                                                                                                                              | Source primaire, URL et passage utile                                                                                                                                                                                                         | Nature                                     | Périmètre                                                                                                     | Date/consultation | Confiance                 | Emplacement du lien visible               | Conséquence lecteur                                                 | Fraîcheur                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------- | ----------------- | ------------------------- | ----------------------------------------- | ------------------------------------------------------------------- | --------------------------------------- |
| Le CCAG-TIC définit la TMA comme les opérations nécessaires pour maintenir un système d'information en état d'accomplir sa fonction, avec notamment maintenance préventive et corrective, et éventuellement évolution ou adaptation | [Légifrance — arrêté du 30 mars 2021 portant approbation du CCAG-TIC](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000043310689) et [article relatif à la maintenance](https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000043310752) | Texte officiel                             | Marchés publics qui se réfèrent au CCAG-TIC ; définition utile mais non modèle automatique d'un contrat privé | 23/07/2026        | Élevée dans son périmètre | Définition et encadré de limite           | Distinguer correction, prévention, adaptation et évolution          | Revoir avant publication                |
| Une charte professionnelle décrit historiquement la TMA comme la prise en charge par un prestataire de tout ou partie de la maintenance et de l'évolution d'un système applicatif                                                   | [Cigref/Syntec — charte infogérance et TMA, 2004](https://www.cigref.fr/cigref_publications/RapportsContainer/Parus2004/2004_-_Charte_CIGREF_Syntec_informatique_-_infogerance_et_TMA_web.pdf)                                                | Source professionnelle primaire historique | Terminologie sectorielle, pas droit actuel ni source de prix                                                  | 23/07/2026        | Moyenne                   | Note de vocabulaire                       | Expliquer la TMA sans lui attribuer un modèle de facturation unique | Stable historiquement, signaler la date |
| Les accès de maintenance à distance doivent être encadrés, limités dans le temps et les interventions tracées                                                                                                                       | [CNIL — encadrer la maintenance et la fin de vie](https://www.cnil.fr/fr/securite-encadrer-la-maintenance-et-la-fin-de-vie-des-materiels-et-logiciels)                                                                                        | Recommandation d'autorité                  | Sécurité des traitements de données                                                                           | 23/07/2026        | Élevée                    | Partie contrôle commun à tous les modèles | Exiger accès nominatifs et traces, quel que soit le mode d'achat    | Revoir annuellement                     |
| Le recours à un sous-traitant exige de clarifier responsabilités, sécurité, sort des données et maîtrise des accès                                                                                                                  | [CNIL — gérer la sous-traitance](https://www.cnil.fr/fr/securite-gerer-la-sous-traitance)                                                                                                                                                     | Recommandation d'autorité                  | Traitement de données personnelles confié à un tiers                                                          | 23/07/2026        | Élevée                    | Garde-fou commun                          | Ne pas choisir uniquement sur le prix ou le nombre de jours         | Revoir annuellement                     |

### Statut des recommandations éditoriales

Les catégories suivantes ne sont pas présentées comme des définitions légales ;
elles constituent une grille opérationnelle Hagnéré Code :

- capacité récurrente : une équipe et un volume sont réservés avec des règles
  de priorité et de consommation ; cette capacité ne définit pas à elle seule
  les plages ni le délai de prise en charge d'un incident ;
- temps consommé, souvent appelé « régie » dans les offres : l'entreprise paie
  le temps effectivement mobilisé et pilote les priorités ;
- lot borné : un résultat défini, des critères d'acceptation et un prix sont
  convenus pour une évolution délimitée ;
- hybride : incidents récurrents couverts d'un côté, évolutions variables ou
  lots séparés de l'autre.

La continuité, le diagnostic et la livraison décrivent ce que l'entreprise
achète. Prix fixe, capacité et temps décrivent comment elle le paie. Un
diagnostic borné peut donc être payé à prix fixe ou au temps plafonné ; il doit
dans les deux cas remettre les faits établis, les inconnues et une décision
d'arrêt ou de suite.

Le contrat réel prime toujours sur l'étiquette commerciale.

### Contradictions et données à ne pas publier

- Ne pas écrire « TMA = forfait » ni « régie = absence de contrat ».
- Ne pas présenter la régie comme une catégorie juridique universellement
  définie ; décrire les clauses concrètes de temps, capacité, responsabilité et
  acceptation.
- Ne pas affirmer qu'un modèle garantit les coûts, délais ou résultats.
- Aucun tarif journalier, minimum mensuel, délai d'intervention ou pourcentage
  de maintenance ne sera inventé.
- Le CCAG-TIC ne s'applique pas automatiquement à un contrat privé : il sert ici
  à définir les familles de maintenance, avec la limite visible.
- La charte Cigref/Syntec date de 2004 : ne pas l'utiliser comme preuve d'une
  pratique tarifaire actuelle.
- Ce guide n'est pas un avis juridique. Les responsabilités, données
  personnelles, pénalités et engagements doivent être adaptés au contrat réel.

### Calculs reproductibles

Aucun prix ne sera calculé. Le lecteur construira une matrice factuelle sur les
trois derniers mois :

| Champ                | Règle de saisie                                                                                |
| -------------------- | ---------------------------------------------------------------------------------------------- |
| Demande              | une ligne par correction ou évolution réellement reçue                                         |
| Fréquence            | isolée, mensuelle, hebdomadaire ou continue, sans en déduire seule la couverture               |
| Impact et continuité | conséquence métier, durée d'interruption acceptable et plages utiles, pas seulement « urgent » |
| Résultat vérifiable  | condition qui permet au métier d'accepter                                                      |
| Taille connue        | bornée, à explorer ou dépendante d'un tiers                                                    |
| Priorisation interne | personne disponible ou absente                                                                 |
| Mode candidat        | capacité récurrente, temps piloté, lot ou report                                               |

Contrôle inverse : si aucune personne côté client ne peut prioriser et accepter
les travaux, une régie pure restera difficile à piloter ; si le résultat ne
peut pas être borné, un lot au forfait reposera sur des hypothèses fragiles.

## 6. Empreinte éditoriale à ne pas reproduire

| Guide                                     | Type d'ouverture          | Progression                      | Dispositif récurrent       | Type d'exemple     | Place du CTA     | Type de conclusion            |
| ----------------------------------------- | ------------------------- | -------------------------------- | -------------------------- | ------------------ | ---------------- | ----------------------------- |
| `contrat-tma-application`                 | Contrat reçu à vérifier   | Clauses puis parcours d'incident | Simulation de consommation | Incident et ticket | Après checklist  | Contrat lisible et réversible |
| `cout-maintenance-application-metier`     | Budget annuel inconnu     | Postes de coût puis arbitrage    | Construction budgétaire    | Application métier | Fin              | Budget soutenable             |
| `reprendre-maintenance-site-autre-agence` | Changement de prestataire | Accès, transfert, stabilisation  | Plan de reprise            | Site existant      | Après diagnostic | Reprise sécurisée             |
| Page service maintenance                  | Application à maintenir   | Offre et modalités               | Blocs de bénéfices         | Cas généraux       | Répété           | Prendre contact               |

Choix du nouveau guide :

```text
Tension ou question motrice : que révèlent les demandes réellement reçues sur la bonne manière d'acheter la maintenance ?
Type d'ouverture retenu et pourquoi : une application qui accumule bugs, urgences et évolutions face à trois étiquettes commerciales, afin de défaire le faux duel dès les premières phrases
Progression retenue et pourquoi : faux duel -> historique réel -> quatre modes -> responsabilités -> choix et garde-fous
Artefact signature : reclassement de trois mois de demandes selon prévisibilité et résultat attendu
Rythme/registre de voix : concret et opérationnel, une situation avant chaque notion
Place naturelle du CTA : après la matrice remplie, lorsque le périmètre à cadrer est visible
Forme de conclusion : recommandation par profil de flux, avec option hybride et option de report
Au moins trois différences avec les guides voisins : aucun inventaire exhaustif de clauses ; aucun budget annuel ; l'historique précède le contrat ; l'étiquette TMA/régie est déconstruite ; résultat hybride autorisé
```

## 7. Plan annoté

| Section provisoire                                                      | Question résolue                                      | Preuve ou exemple                                        | Conséquence/décision                                               | Format choisi                |
| ----------------------------------------------------------------------- | ----------------------------------------------------- | -------------------------------------------------------- | ------------------------------------------------------------------ | ---------------------------- |
| TMA ou régie : vous ne comparez pas exactement deux choses équivalentes | Pourquoi le duel est-il trompeur ?                    | Définitions officielles et commerciales limitées         | Lire les engagements réels plutôt que le titre du devis            | Réponse directe              |
| Commencez par les trois derniers mois, pas par le contrat               | Quel est le flux réel ?                               | Bugs, demandes récurrentes, petites évolutions, gros lot | Classer avant d'acheter                                            | Histoire de trois mois       |
| Quatre façons d'acheter le travail                                      | Quelles options concrètes existent ?                  | Capacité récurrente, temps, lot, hybride                 | Retenir plusieurs modes si nécessaire                              | Quatre cartes mobiles        |
| La capacité récurrente convient à ce qui revient                        | Quand réserver une équipe ou un volume ?              | Incidents et entretien régulier                          | Organiser la continuité et la consommation                         | Bon/mauvais fit              |
| Le temps piloté convient à ce qui change                                | Quand payer le temps réellement mobilisé ?            | Priorités variables et exploration                       | Exiger un responsable client, des traces et des points de décision | Bon/mauvais fit              |
| Le lot convient à un résultat borné                                     | Quand demander un prix pour une évolution ?           | Fonction avec critères d'acceptation                     | Ne pas forcer un forfait sur l'inconnu                             | Bon/mauvais fit              |
| L'hybride sépare continuité et évolution                                | Comment éviter de tout mettre dans un même compteur ? | Socle récurrent + lots ou capacité variable              | Rendre les factures et décisions lisibles                          | Exemple complet              |
| Les garde-fous restent les mêmes                                        | Que contrôler quel que soit le modèle ?               | Accès, traces, données, responsable, acceptation, sortie | Ne pas acheter seulement des jours                                 | Checklist limitée avec liens |
| Reclassez vos demandes maintenant                                       | Quelle action autonome ?                              | Matrice des trois mois                                   | Préparer une proposition comparable                                | Exercice dans la page        |
| Quand Hagnéré Code est un bon ou mauvais fit                            | Quand déléguer ?                                      | Flux, accès, disponibilité métier                        | Conversion honnête                                                 | Deux encadrés                |
| FAQ                                                                     | Répondre aux confusions                               | Contrat réel et sources                                  | Éviter les verdicts juridiques                                     | Réponses courtes             |

## 8. Ressource et conversion

```text
Une ressource est-elle naturellement nécessaire ? non
Problème qu'elle résout après la lecture : qualifier le flux de maintenance avant de demander un prix
Résultat autonome produit : une matrice remplie sur les trois derniers mois directement à partir des champs fournis
Format éditable et format de consultation : tableau HTML à recopier dans l'outil de l'entreprise ; aucune promesse de téléchargement
Rubriques, champs ou matrices réellement livrés : demande, fréquence, impact et continuité, résultat, taille, dépendances, responsable, mode candidat
Exemple rempli : incidents récurrents couverts par une capacité, lenteur traitée par un diagnostic borné facturable au fixe ou au temps plafonné, évolution livrée séparément et idée reportée
Conclusion « ne pas investir » possible : oui, si les accès, le responsable métier ou les critères d'acceptation sont absents
Sources, hypothèses et limites visibles : oui, notamment limites du CCAG-TIC et de la charte de 2004
Données saisies et destination de ces données : aucune donnée saisie
Processus de génération reproductible : sans objet
Journal de QA : à réaliser en P4
Limites connues et niveau de revue humaine : le contrat réel et le contexte de données exigent une revue humaine
Mode de maintenance : revue annuelle des recommandations CNIL et avant toute évolution du cadre cité
Test du fichier ou outil : sans objet
Bon fit Hagnéré Code : application existante, demandes identifiables, interlocuteur métier disponible, accès transmissibles et volonté de suivre les résultats
Mauvais fit : recherche d'une responsabilité illimitée pour un forfait minimal, absence totale d'accès ou de personne capable d'accepter les travaux
Action non commerciale : exporter les demandes de trois mois et compléter les huit champs
CTA principal et résultat après clic : présenter l'historique pour séparer continuité, diagnostic et livraison, puis discuter prix fixe, capacité ou temps avec responsabilités et couverture visibles
```

## 9. Rapports de sortie des quatre passes

### Rapport P1 — Recherche

```text
PASSE 1 TERMINÉE
Slug : tma-ou-regie
Lecteur et phrase réelle : dirigeant — « Dois-je prendre un forfait de maintenance ou payer les jours passés ? »
Décision : choisir capacité récurrente, temps piloté, lot borné ou hybride à partir du flux et de la gouvernance réels
Angle et forme dominante : trois mois de demandes reclassés par prévisibilité, urgence et résultat attendu
Pages proches et différence : contrat-tma traite les clauses ; cout-maintenance traite le budget ; ce guide traite le mode d'achat
Sources décisives : Légifrance CCAG-TIC, charte Cigref/Syntec avec date visible, recommandations CNIL
Incertitudes exclues : qualification juridique universelle de la régie, tarifs, SLA, économies et garanties
Action autonome et CTA possible : matrice des demandes ; cadrage d'un dispositif comparable et contrôlable
Plan : faux duel, historique, quatre modes, garde-fous, matrice, fits, FAQ
Snapshot : docs/research/manifests/tma-ou-regie-p1.sha256
```

### Rapport P2 — Rédaction et intégration

```text
PASSE 2 TERMINÉE — PRÊTE POUR CONTRE-AUDIT INDÉPENDANT
Éditeur unique : `/root`
Historique : pré-audit en lecture seule conclu avec P0 = 0 ; P1 = 3 ; P2 = 3, puis reprise complète avant gel P2
Ouverture et réponse : le faux duel TMA/régie est défait dès les 140 premiers mots ; TMA et régie sont définies ; le lecteur distingue le service acheté de sa facturation
Forme propre au sujet : huit champs appliqués aux demandes réelles ; quatre modes comparés ; exemple fictif de quatre demandes ; six contrôles communs ; décision explicite de signer, limiter ou reporter
Corrections de fond : fréquence séparée de la continuité ; impact, interruption acceptable et plages de support ajoutés ; capacité de développement distinguée de la couverture d'incident
Comparaison : historique assaini avant envoi ; noms, identifiants, secrets, données personnelles et informations de sécurité inutiles retirés ; canal et destinataires contrôlés
Diagnostic : sortie concrète définie — mesures, faits confirmés, causes écartées, inconnues et décision d'arrêt ou de suite — avec facturation au fixe ou au temps plafonné selon l'offre
Action autonome : modèle copiable, tableau fictif sur trois colonnes, résultat attendu observable et possibilité de reporter
CTA : « Préparer ma maintenance » vers `/demarrer-un-projet` ; échange humain qui sépare continuité, diagnostic, livraison et mode de facturation, sans résultat ou délai garanti
Temps de lecture : 22 minutes pour 4 382 mots visibles au contrôle navigateur
Contrôles rapides : garde-fou éditorial dédié ; trois colonnes maximum ; image sociale ; noindex/nofollow ; Article et BreadcrumbList uniquement ; cinq largeurs de 320 à 1 440 px sans débordement après stabilisation
Snapshot : `docs/research/manifests/tma-ou-regie-p2.sha256`
```

### Rapport P3 — Contre-audit indépendant

```text
PASSE 3 TERMINÉE — VALIDÉE APRÈS REPRISE
Relecteur indépendant : `/root/preaudit_tma_regie`
Snapshot audité : `docs/research/manifests/tma-ou-regie-p2.sha256`
Verdict initial : P0 = 0 ; P1 = 0 ; P2 = 3
Finitions appliquées : conclusion recentrée sur le diagnostic borné et sa facturation distincte ; image sociale alignée sur « diagnostic / conclusion bornée » ; traces documentaires P1/P2 fermées
Revalidation finale : P0 = 0 ; P1 = 0 ; P2 = 0
Fond revérifié : distinction entre service acheté et facturation ; continuité distincte de la fréquence ; interruption acceptable et plages de couverture ; sortie concrète du diagnostic ; historique assaini et transmis par canal contrôlé
Pédagogie et conversion : quatre modes sans choix automatique ; exemple fictif ; huit champs ; décision de signer, limiter ou reporter ; un seul CTA tardif sans délai ou résultat garanti
Contrôles : manifeste P2 exact 6/6 au moment du contre-audit ; test éditorial 31/31 ; ESLint, TypeScript, Prettier et diff-check conformes
Rendu : HTTP 200 ; canonical exacte ; noindex/nofollow ; un H1 ; Article et BreadcrumbList uniquement ; image sociale 1 200 × 630
État : porte P3 validée ; P4 autorisée
```

### Rapport P4 — Plume humaine et contrôle final

```text
PASSE 4 TERMINÉE
Passages humanisés : faux duel TMA/régie expliqué dès l'ouverture ; service acheté séparé de sa facturation ; continuité, diagnostic et livraison illustrés par des demandes concrètes
Retour P3 effectué : oui ; trois finitions P2 appliquées puis revalidation finale à P0 = 0, P1 = 0 et P2 = 0
Lecture et artefact : 4 097 mots comptés dans l'artefact final, soit 20 minutes avec la convention de 200 mots par minute
Scorecard justifiée : 20/20 ; détail dans la table ci-dessous
Validation humaine réelle : non
Test réalisé par une personne réelle : non
Autorisation éditoriale : Décision de publication : autorisée explicitement par le commanditaire
Commandes et résultats : check:seo, ESLint, TypeScript, batterie Vitest, build Next.js, postbuild et git diff --check conformes au gel final du lot
Largeurs et états contrôlés : 320, 390, 767, 1 024 et 1 440 px ; aucun débordement ; canonical exact ; un H1 ; Article et BreadcrumbList ; un CTA sans téléphone
Snapshot final : docs/research/manifests/tma-ou-regie-p4.sha256
Statut maximal : publiable — validation éditoriale déléguée
Verdict : porte P4 validée
```

### Scorecard P4

| Axe         | Note 0-2 | Preuve dans la page                                                                              | Correction éventuelle |
| ----------- | -------: | ------------------------------------------------------------------------------------------------ | --------------------- |
| Intention   |        2 | Le dirigeant choisit comment acheter et contrôler un flux réel de maintenance                    | Aucune                |
| Décision    |        2 | Capacité récurrente, temps piloté, lot borné, hybride ou report restent possibles                | Aucune                |
| Pédagogie   |        2 | Un historique fictif est trié par interruption, résultat, dépendances et preuve                  | Aucune                |
| Profondeur  |        2 | Couverture, diagnostic, livraison, facturation, accès, acceptation et sortie sont distingués     | Aucune                |
| Preuve      |        2 | Définitions publiques et limites contractuelles sont attribuées sans avis juridique personnalisé | Aucune                |
| Comparaison |        2 | Les quatre modes sont évalués sur le même flux sans avantager la formule vendue                  | Aucune                |
| Originalité |        2 | Le guide corrige un faux duel lexical avant de comparer les mécanismes achetés                   | Aucune                |
| Style       |        2 | Vocabulaire de factures et de demandes, sigles traduits et titres directement actionnables       | Aucune                |
| Conversion  |        2 | CTA unique et tardif ; diagnostic borné sans livrable ou délai automatique                       | Aucune                |
| SEO/produit |        2 | Intention distincte, metadata, maillage, OG, index/follow et cinq largeurs contrôlés             | Aucune                |

Total final : **20/20**.

### Test lecteur non technique

```text
Test réalisé par une personne réelle : non
Profil du lecteur : non testé
Ce qu'il a compris comme réponse : non revendiqué
Décision qu'il prendrait : non revendiquée
Endroit où il a commencé à survoler : non mesuré
Passage crédible ou trop commercial : non mesuré
Termes ou passages bloquants : non mesurés
Corrections appliquées : contre-audit indépendant, contrôles visuels réels et délégation explicite du commanditaire ; aucun faux test lecteur n'est inventé
```

## 10. Revue historique de porte P1

- [x] faux binaire TMA/régie identifié et corrigé ;
- [x] décision unique centrée sur l'achat du flux ;
- [x] sources primaires et limites de périmètre documentées ;
- [x] SERP française observée sans inventer de volume ;
- [x] chevauchement avec contrat et budget explicitement borné ;
- [x] aucune fourchette de prix ni garantie créée ;
- [x] action autonome, bon fit et mauvais fit définis ;
- [x] aucune ressource téléchargeable inexistante annoncée ;
- [x] au gel P1, P2, P3 et P4 restaient bloquées avant publication.
