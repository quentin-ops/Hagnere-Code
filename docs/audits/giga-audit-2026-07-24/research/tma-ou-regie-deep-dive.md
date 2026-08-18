# Recherche approfondie — `tma-ou-regie`

Date de réouverture des sources et des pages voisines : **24 juillet 2026**

Périmètre : note préparatoire à une réécriture successive. Ce document ne
modifie ni la page publique, ni le registre des guides, ni les tests, ni les
manifestes. Il ne constitue pas un avis juridique, fiscal, social ou
cybersécurité personnalisé.

## Verdict de recherche

Le guide actuel explique bien pourquoi « TMA ou régie » est un faux duel :
la tierce maintenance applicative décrit un service confié à un tiers, tandis
que la régie désigne couramment une facturation du temps. Ce point doit rester.

Il manque cependant la décision que le dirigeant est venu prendre :

> Pour le même historique de bugs et d’évolutions, que paierai-je vraiment sur
> douze mois en temps passé, en capacité réservée, par lots, en hybride, sans
> organisation récurrente ou avec une compétence interne ? Et à quel moment le
> verdict change-t-il ?

La future page doit donc faire trois choses que la version actuelle ne fait pas
encore :

1. comparer toutes les options sur **le même flux mensuel**, et non sur une
   charge annuelle artificiellement lissée ;
2. ajouter au prix du prestataire le **temps interne de décision, de briefing,
   de recette et de contrôle** ;
3. faire apparaître les règles qui changent réellement le résultat : report des
   jours, plafond, surcharge mensuelle, coût d’une panne, capacité interne et
   coût de sortie.

### Correction importante par rapport au premier audit

Le premier scénario de l’audit annuelisait 90 jours face à une capacité de
96 jours. Il en déduisait six jours inutilisés. Cette lecture est exacte
uniquement si les jours sont librement mutualisables sur l’année.

Avec une capacité contractuelle de huit jours **par mois sans report**, la
distribution fictive détaillée ci-dessous produit au contraire :

- 96 jours achetés ;
- 81 jours consommés dans leur mois ;
- 15 jours réservés mais non utilisés ;
- 9 jours de surcharge à acheter en plus.

Ce n’est pas un détail. Le même abonnement passe de **81 360 €** de coût
complet avec mutualisation annuelle à **89 010 €** sans report mensuel. La page
doit montrer cette différence au lieu de comparer seulement des totaux
annualisés.

---

## 1. Faits utilisables, sources, périmètres et fraîcheur

### 1.1 Matrice de faits

| Fait publiable                                                                                                                                                                                                              | Source primaire ou officielle rouverte                                                                                                                                  | Fraîcheur observée                                                                           | Périmètre exact                                                                                         | Usage éditorial autorisé                                                                                               | Ce que la source ne permet pas d’affirmer                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| La TMA peut couvrir le maintien opérationnel et de sécurité à titre préventif ou correctif, ainsi que des évolutions ou adaptations.                                                                                        | [Légifrance — CCAG-TIC, article 38](https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000043310752)                                                                | Arrêté du 30 mars 2021, publié le 1er avril 2021 ; page rouverte le 24 juillet 2026          | Marchés publics français qui rendent ce cahier applicable                                               | Fournir une taxonomie claire : préventif, correctif, évolutif, adaptatif                                               | Cette taxonomie n’impose ni le contenu d’un contrat privé, ni un forfait, ni un tarif               |
| Les niveaux de service doivent être reliés à des indicateurs, des moyens de mesure et des conséquences définies dans les documents contractuels.                                                                            | [Légifrance — CCAG-TIC, article 38.2.1](https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000043310752)                                                            | Même texte et même réouverture                                                               | Marchés publics français concernés ; partie infogérance                                                 | Expliquer que « huit jours réservés » et « réponse sous quatre heures » sont deux engagements différents               | Le texte ne fixe aucun niveau adapté à une PME privée                                               |
| Les interventions de maintenance doivent être tracées ; les accès de télémaintenance doivent être ouverts pour une durée définie puis refermés.                                                                             | [CNIL — Encadrer la maintenance et la fin de vie](https://www.cnil.fr/fr/securite-encadrer-la-maintenance-et-la-fin-de-vie-des-materiels-et-logiciels)                  | Publication du 14 mars 2024 ; page retrouvée et rouverte le 24 juillet 2026                  | Sécurité des matériels, logiciels et données ; recommandations d’autorité                               | Conserver un garde-fou commun à tous les modèles : accès nominatifs, limités, supervisés et refermés                   | Une clause de maintenance ne garantit pas à elle seule la sécurité ou la conformité                 |
| Lorsqu’un prestataire traite des données personnelles pour le compte de l’entreprise, le contrat doit notamment organiser sécurité, responsabilités, authentification, incidents, restitution ou destruction et contrôles.  | [CNIL — Gérer la sous-traitance](https://www.cnil.fr/fr/securite-gerer-la-sous-traitance)                                                                               | Publication du 14 mars 2024 ; page rouverte le 24 juillet 2026                               | Relation responsable de traitement / sous-traitant au sens du RGPD                                      | Ajouter une porte « données personnelles » et renvoyer vers le DPO ou un conseil compétent lorsque nécessaire          | Tous les prestataires de maintenance n’ont pas automatiquement le même rôle RGPD                    |
| Un contrat peut combiner plusieurs mécanismes de prix ; la clarté du périmètre, la durée et la validation du prix font partie des critères de choix.                                                                        | [CanadaBuys — Types of basis of payment](https://canadabuys.canada.ca/en/buyer-s-portal/buyer-s-guide/plan/basis-payment/types-basis-payment)                           | Publié le 30 janvier 2026, modifié le 26 mars 2026 ; rouverte le 24 juillet 2026             | Guide actuel des achats publics fédéraux canadiens                                                      | Étayer l’idée qu’un contrat hybride n’est pas une anomalie et que chaque famille de travail peut avoir son prix        | Le guide canadien n’est ni un contrat privé français, ni un tarif de marché                         |
| Dans ce cadre canadien, un prix au temps ou à l’unité doit comporter un plafond ou une limitation de dépense.                                                                                                               | [CanadaBuys — Types of basis of payment](https://canadabuys.canada.ca/en/buyer-s-portal/buyer-s-guide/plan/basis-payment/types-basis-payment)                           | Source actuelle depuis le 30 janvier 2026 ; l’ancien Supply Manual est explicitement archivé | Achats publics fédéraux canadiens                                                                       | Donner une bonne pratique de pilotage : alerte, plafond, arrêt et nouvelle autorisation                                | Cette règle publique canadienne ne crée pas une obligation identique dans un contrat privé français |
| Le guide britannique distingue notamment temps et moyens, prix fixe ou ferme, prix au volume et prix maximal garanti avec coût cible.                                                                                       | [GOV.UK — Model Services Contract Guidance, version 2.2(A)](https://assets.publishing.service.gov.uk/media/67b485cbb56d8b0856c2fe08/Buyer_Guidance_-_MSC_v2.2_2025.pdf) | Version mise à jour en septembre 2025 ; collection officielle rouverte le 24 juillet 2026    | Contrats de services publics britanniques complexes et de forte valeur, généralement supérieurs à 20 M£ | Montrer que plusieurs mécanismes peuvent coexister selon les étapes et que le prix doit être granulaire                | Le modèle est disproportionné pour une PME et ne doit jamais être copié tel quel                    |
| Le même guide britannique réserve le temps et moyens aux périmètres encore mal connus, demande un suivi précis, le relie à des jalons et recommande de changer de mécanisme lorsque le travail devient défini ou récurrent. | [GOV.UK — Model Services Contract Guidance, § 5.2.1](https://assets.publishing.service.gov.uk/media/67b485cbb56d8b0856c2fe08/Buyer_Guidance_-_MSC_v2.2_2025.pdf)        | Septembre 2025                                                                               | Commande publique britannique complexe                                                                  | Appuyer une position conditionnelle : temps plafonné pour apprendre, puis lot ou capacité lorsque le flux se stabilise | Cela ne prouve pas qu’un forfait est toujours meilleur dès qu’une tâche se répète                   |
| Pour les achats fédéraux américains, le temps et moyens est prévu lorsque l’étendue ou la durée ne peut pas être estimée avec confiance ; il nécessite un contrôle approprié et un plafond.                                 | [Acquisition.gov — FAR 16.601](https://www.acquisition.gov/far/16.601)                                                                                                  | FAC 2026-01, effective le 13 mars 2026 ; page rouverte le 24 juillet 2026                    | Contrats fédéraux américains                                                                            | Étayer trois garde-fous : incertitude réelle, surveillance, plafond                                                    | Le FAR ne régit pas une prestation privée française et ne prescrit aucun tarif                      |
| Une analyse d’impact métier doit partir des fonctions essentielles, des scénarios de perte, de la tolérance au risque et des effets sur la mission.                                                                         | [NIST IR 8286D — Business Impact Analysis](https://csrc.nist.gov/pubs/ir/8286/d/upd1/final)                                                                             | Mise à jour finale de février 2025 ; page rouverte le 24 juillet 2026                        | Gestion des risques cyber et d’entreprise ; publication américaine                                      | Justifier une méthode de coût d’incident fondée sur les données de l’entreprise, pas sur une moyenne sensationnaliste  | Le NIST ne fournit ni le coût d’une panne type ni le prix d’un contrat de maintenance               |

### 1.2 Sources à rétrograder

La charte Cigref–Syntec « Infogérance et TMA » de 2004 reste utile pour
l’histoire du vocabulaire professionnel. Elle ne doit plus porter une
recommandation économique actuelle. Si elle demeure dans la page, la date
**2004** doit rester visible et son rôle doit être explicitement historique.

Les pages d’agences françaises, américaines ou internationales peuvent servir à
observer les promesses concurrentes. Elles ne doivent pas devenir des preuves
de tarif, de gain, de responsabilité ou de délai.

### 1.3 Assertions à interdire

- « TMA = forfait » ;
- « régie = absence de contrat » ;
- « une capacité réservée garantit une prise en charge immédiate » ;
- « le forfait transfère tout le risque au prestataire » ;
- « le temps passé est toujours moins cher » ;
- « un abonnement évite les pannes » ;
- « une moyenne de marché se situe à X euros par jour » sans source, date,
  profil, localisation et périmètre comparables ;
- « le coût d’une heure d’arrêt vaut X euros pour une PME » ;
- « le guide britannique, canadien ou américain s’applique au contrat français ».

---

## 2. Scénario illustratif fictif complet sur douze mois

### 2.1 Entreprise et règles communes

**ServiPlan Atelier** est une PME entièrement fictive. Son application gère les
plannings, les interventions et la préparation de la facturation. Elle est
utilisée en semaine, de 8 h à 18 h. Aucun nom, volume, prix ou événement
ci-dessous ne correspond à un client ni à une offre Hagnéré Code.

Tous les montants externes sont des hypothèses **fictives hors taxes**. Ils ne
constituent ni un tarif, ni une fourchette, ni une moyenne de marché. ServiPlan
récupère la TVA ; les coûts internes sont présentés sans TVA.

Hypothèses communes :

- un jour de travail représente huit heures pour les calculs ;
- coût chargé interne retenu par l’entreprise fictive : **60 €/h** ;
- même application, mêmes compétences supposées et même charge utile ;
- 48 jours de corrections récurrentes et de prévention ;
- 18 jours de diagnostics dont la solution n’est pas connue au départ ;
- 24 jours d’évolutions dont le résultat et l’acceptation peuvent être bornés ;
- soit **90 jours utiles** sur douze mois ;
- horizon : douze mois complets ;
- les heures de pilotage comprennent tri, décision, briefing, réponse aux
  questions, recette, contrôle de facture et revue de service ;
- les plafonds sont des règles d’arrêt, **pas des promesses de terminer tout le
  travail**.

Exclus faute d’offre ou de mesure réelle :

- infrastructure et licences ;
- astreinte 24/7 ;
- reprise initiale du code et des accès ;
- migration majeure ;
- réponse à un incident cyber actif ;
- coût juridique, assurance, pénalités et litige ;
- inflation, financement et impôt ;
- coût de réversibilité ;
- dommage d’une panne, traité séparément en sensibilité.

Ces postes ne valent pas zéro. Ils restent « montant inconnu » jusqu’à obtention
d’une preuve ou d’un devis comparable.

### 2.2 Le flux mois par mois

| Mois      | Récurrent / prévention | Diagnostic incertain | Évolution bornée |  Total | Capacité mensuelle de 8 j consommée | Jours réservés non utilisés | Surcharge du mois |
| --------- | ---------------------: | -------------------: | ---------------: | -----: | ----------------------------------: | --------------------------: | ----------------: |
| Janvier   |                      4 |                    1 |                0 |      5 |                                   5 |                           3 |                 0 |
| Février   |                      4 |                    1 |                2 |      7 |                                   7 |                           1 |                 0 |
| Mars      |                      4 |                    2 |                0 |      6 |                                   6 |                           2 |                 0 |
| Avril     |                      4 |                    1 |                4 |      9 |                                   8 |                           0 |                 1 |
| Mai       |                      4 |                    2 |                0 |      6 |                                   6 |                           2 |                 0 |
| Juin      |                      4 |                    1 |                2 |      7 |                                   7 |                           1 |                 0 |
| Juillet   |                      4 |                    1 |                0 |      5 |                                   5 |                           3 |                 0 |
| Août      |                      4 |                    1 |                2 |      7 |                                   7 |                           1 |                 0 |
| Septembre |                      4 |                    2 |                4 |     10 |                                   8 |                           0 |                 2 |
| Octobre   |                      4 |                    2 |                0 |      6 |                                   6 |                           2 |                 0 |
| Novembre  |                      4 |                    2 |                4 |     10 |                                   8 |                           0 |                 2 |
| Décembre  |                      4 |                    2 |                6 |     12 |                                   8 |                           0 |                 4 |
| **Total** |                 **48** |               **18** |           **24** | **90** |                              **81** |                      **15** |             **9** |

Ce tableau est la partie la plus importante du scénario. Une facture de
capacité dépend du moment où les demandes arrivent et de la règle de report.
Comparer seulement 90 jours nécessaires à 96 jours achetés masque les
surcharges de fin d’année.

### 2.3 Les six portes comparées

#### A. Temps réellement passé, plafonné

- hypothèse fictive : **800 € HT par jour réellement mobilisé** ;
- travail utile : 90 jours ;
- coût externe : `90 × 800 = 72 000 € HT` ;
- pilotage interne : `5 h/semaine × 52 × 60 = 15 600 €` ;
- plafond externe annuel : **75 000 € HT** ;
- alertes recommandées dans l’exemple : 52 500 € à 70 %, puis 67 500 € à
  90 % ;
- le plafond permet au maximum `75 000 / 800 = 93,75 jours` sans nouvelle
  autorisation.

Coût complet fictif : `72 000 + 15 600 = 87 600 €`.

Cette option achète de la souplesse. Elle n’achète pas automatiquement une
couverture d’incident, un résultat fini ou une disponibilité immédiate.

#### B. Capacité réservée de huit jours par mois, sans report

- hypothèse fictive : **6 000 € HT par mois** pour huit jours réservés ;
- capacité achetée : `12 × 8 = 96 jours` ;
- abonnement : `12 × 6 000 = 72 000 € HT` ;
- neuf jours dépassent le mois dans lequel ils sont demandés ;
- dépassement fictif autorisé à **850 € HT par jour** :
  `9 × 850 = 7 650 € HT` ;
- coût externe central : `72 000 + 7 650 = 79 650 € HT` ;
- pilotage interne : `3 h/semaine × 52 × 60 = 9 360 €` ;
- plafond externe : 72 000 € de capacité + 20 400 € de dépassement, soit
  **92 400 € HT** ;
- 15 jours réservés ne sont pas utilisés faute de report.

Coût complet fictif : `79 650 + 9 360 = 89 010 €`.

Cette option ne doit être décrite comme « managée » que si elle porte réellement
des résultats, une couverture et une responsabilité supplémentaires. Réserver
du temps n’est pas réserver un délai de rétablissement.

#### C. Lots bornés

Le scénario suppose trois familles de livrables fictifs :

- 12 lots mensuels de correction et prévention à 3 500 € :
  `12 × 3 500 = 42 000 € HT` ;
- 6 diagnostics bornés à 2 700 €, chacun se terminant par des faits, des causes
  écartées, des inconnues et une décision :
  `6 × 2 700 = 16 200 € HT` ;
- 3 lots d’évolution acceptables à 7 200 € :
  `3 × 7 200 = 21 600 € HT`.

Coût externe : `42 000 + 16 200 + 21 600 = 79 800 € HT`.

Pilotage interne : `4 h/semaine × 52 × 60 = 12 480 €`.

Plafond : **79 800 € HT pour les lots décrits**. Une modification de périmètre
ne consomme pas silencieusement ce plafond ; elle déclenche une nouvelle
décision.

Coût complet fictif : `79 800 + 12 480 = 92 280 €`.

Le prix borné n’est crédible que si la sortie l’est aussi. Un lot « améliorer
les performances » est trop vague. Un diagnostic qui remet des mesures, une
conclusion et un point d’arrêt peut, lui, être borné sans promettre la cause à
l’avance.

#### D. Hybride

Le récurrent stable est acheté en capacité ; l’incertain et les évolutions sont
autorisés au temps avec plafond :

- 4 jours récurrents par mois à 3 200 € :
  `12 × 3 200 = 38 400 € HT` ;
- 42 jours variables, soit 18 jours de diagnostic et 24 d’évolution, à
  850 € :
  `42 × 850 = 35 700 € HT` ;
- coût externe : `38 400 + 35 700 = 74 100 € HT` ;
- pilotage interne : `2 h/semaine × 52 × 60 = 6 240 €` ;
- plafond variable : **36 000 € HT**, avec alertes à 25 200 € et 32 400 € ;
- plafond externe total : `38 400 + 36 000 = 74 400 € HT` ;
- le plafond variable autorise `36 000 / 850 = 42,35 jours`.

Coût complet fictif : `74 100 + 6 240 = 80 340 €`.

Dans ce seul scénario, l’hybride gagne parce que les 48 jours récurrents sont
parfaitement réguliers et que les 42 jours variables restent juste sous le
plafond. Il ne s’agit pas d’une conclusion universelle.

#### E. Aucune organisation récurrente, interventions ponctuelles

« Sans contrat » signifie ici **sans contrat-cadre ou capacité récurrente**,
pas sans devis, bon de commande, obligation de confidentialité ou encadrement
des données.

Hypothèses fictives :

- 90 jours utiles à 850 € : `90 × 850 = 76 500 € HT` ;
- 6 jours supplémentaires de rechargement de contexte, qualification des accès
  et remise en route répartis dans l’année :
  `6 × 850 = 5 100 € HT` ;
- coût externe : `76 500 + 5 100 = 81 600 € HT` ;
- pilotage interne : `7 h/semaine × 52 × 60 = 21 840 €` ;
- enveloppe annuelle maximale d’achats ponctuels : **85 000 € HT** ;
- avec six jours de friction, cette enveloppe couvre au plus
  `85 000 / 850 - 6 = 94 jours utiles`.

Coût complet fictif : `81 600 + 21 840 = 103 440 €`.

Les six jours de friction sont une hypothèse, pas une fatalité. S’ils
disparaissent parce que le même prestataire garde le contexte, le coût complet
devient `76 500 + 21 840 = 98 340 €`. Il reste supérieur aux autres options
centrales surtout à cause du pilotage interne supposé ; une entreprise très
autonome peut obtenir un autre résultat.

#### F. Internalisation par une embauche

Hypothèses entièrement fictives :

- coût chargé annuel de la personne : **96 000 €** ;
- outils, formation et solution de relais : **6 000 €** ;
- capacité productive annuelle : **200 jours** ;
- charge de maintenance : 90 jours ;
- capacité restante : `200 - 90 = 110 jours` ;
- pilotage managérial : `2 h/semaine × 52 × 60 = 6 240 €`.

Coût de trésorerie annuel de la fonction :
`96 000 + 6 000 + 6 240 = 108 240 €`.

Le coût « affecté » aux 90 jours ne doit pas remplacer ce besoin de trésorerie.
Il peut néanmoins éclairer l’usage de la capacité :

```text
Part de la capacité utilisée par la maintenance = 90 / 200 = 45 %
Coût delivery affecté = (96 000 + 6 000) × 45 % = 45 900 €
Avec le pilotage = 45 900 + 6 240 = 52 140 €
```

Les 110 jours restants ne sont ni gratuits ni automatiquement valorisés. Si
l’entreprise peut réellement les affecter à des évolutions utiles, à d’autres
applications ou à une réduction d’achats externes, l’interne peut devenir
l’option économique. Si elle ne le peut pas, le besoin de trésorerie reste
108 240 €.

L’interne n’apporte pas non plus, à lui seul, toutes les spécialités, la
continuité pendant les absences ou une couverture étendue. Ces éléments doivent
être testés plutôt qu’ajoutés comme adjectifs.

### 2.4 Tableau de décision central

| Option                           | Coût externe ou de delivery | Pilotage interne |         Coût complet fictif |                     Plafond prévu | Ce qui peut invalider le résultat                                            |
| -------------------------------- | --------------------------: | ---------------: | --------------------------: | --------------------------------: | ---------------------------------------------------------------------------- |
| Hybride                          |                    74 100 € |          6 240 € |                **80 340 €** |                  74 400 € externe | Plus de 42,35 jours variables, récurrent moins stable ou pilotage plus lourd |
| Capacité 8 j/mois, report annuel |                    72 000 € |          9 360 € |                **81 360 €** | 92 400 € externe avec dépassement | Le report doit être réel et les jours disponibles au moment utile            |
| Temps passé plafonné             |                    72 000 € |         15 600 € |                **87 600 €** |                  75 000 € externe | Le pilotage peut être beaucoup plus léger, ou au contraire dériver           |
| Capacité 8 j/mois, sans report   |                    79 650 € |          9 360 € |                **89 010 €** |                  92 400 € externe | 15 jours perdus et 9 jours de surcharge dans cette distribution              |
| Lots bornés                      |                    79 800 € |         12 480 € |                **92 280 €** |     79 800 € pour les lots nommés | Changement de besoin, diagnostic non borné ou recette indisponible           |
| Interventions ponctuelles        |                    81 600 € |         21 840 € |               **103 440 €** |                  85 000 € externe | Friction nulle et équipe client très autonome peuvent réduire l’écart        |
| Embauche interne                 |                   102 000 € |          6 240 € | **108 240 € de trésorerie** |    102 000 € de delivery planifié | Les 110 jours restants peuvent produire une valeur qui change le verdict     |

Le classement central n’est pas une recommandation commerciale. Son résultat
principal est plus utile :

> Le prix facial ne décide pas. Le report des jours, le plafond, la distribution
> mensuelle et le temps interne peuvent déplacer plus d’argent que la différence
> entre deux taux.

---

## 3. Sensibilités et seuils de bascule

### 3.1 Sensibilité 1 — Volume de demandes

Trois flux fictifs sont comparés :

- faible : 45 jours, soit 24 récurrents, 9 de diagnostic et 12 d’évolution ;
- central : 90 jours, détaillés mois par mois plus haut ;
- élevé : 120 jours, soit 60 récurrents, 24 de diagnostic et 36 d’évolution.

Pour isoler le volume, les heures annuelles de pilotage restent constantes.
C’est volontairement conservateur pour le flux faible. Dans une entreprise
réelle, il faut les mesurer et les remplacer.

Les montants élevés montrent le coût d’un service intégral **si le plafond est
formellement relevé**. La colonne de droite indique ce qui reste non autorisé
avec les plafonds centraux.

| Option             |     45 jours |    90 jours centraux |                                         120 jours | Effet du plafond central à 120 jours                                                                         |
| ------------------ | -----------: | -------------------: | ------------------------------------------------: | ------------------------------------------------------------------------------------------------------------ |
| Temps passé        | **51 600 €** |             87 600 € |                                         111 600 € | Le plafond de 75 000 € externe s’arrête à 93,75 jours ; 26,25 jours restent à décider                        |
| Capacité mensuelle |     81 360 € | 89 010 € sans report | **103 460 €** avec la distribution élevée fictive | Le plafond de 92 400 € externe laisse 2 jours de surcharge sans autorisation                                 |
| Lots               |     52 380 € |             92 280 € |                                         118 980 € | Le plafond de 79 800 € couvre les lots centraux seulement ; toute extension exige un nouveau prix            |
| Hybride            |     62 490 € |         **80 340 €** |                                         105 840 € | Le plafond variable de 36 000 € s’arrête à 42,35 jours variables ; 29,65 jours variables restent à décider   |
| Ponctuel           |     65 190 € |            103 440 € |                                         128 940 € | L’enveloppe de 85 000 € externe couvre 94 jours utiles après six jours de friction ; 26 jours utiles restent |
| Interne            |    108 240 € |            108 240 € |                                         108 240 € | Les trois flux restent sous 200 jours, sous réserve des compétences et de la continuité                      |

Hypothèses de calcul de la sensibilité :

- pour rendre les lots comparables à volume différent, et uniquement dans cette
  simulation, leur prix central est divisé par la charge qu’ils couvrent :
  `42 000 / 48 = 875 €` par jour récurrent fictif et
  `16 200 / 18 = 900 €` par jour de diagnostic fictif ;
  `21 600 / 24 = 900 €` par jour d’évolution fictif. Un vrai prix de lot n’est
  pas nécessairement linéaire ;
- flux faible :
  - temps : `45 × 800 + 15 600 = 51 600 €` ;
  - capacité : `72 000 + 9 360 = 81 360 €` ;
  - lots : `24 × 875 + 9 × 900 + 12 × 900 + 12 480 = 52 380 €` ;
  - hybride : `38 400 + 21 × 850 + 6 240 = 62 490 €` ;
  - ponctuel : `(45 + 6) × 850 + 21 840 = 65 190 €` ;
- flux élevé :
  - distribution mensuelle fictive :
    `7, 9, 8, 12, 8, 9, 7, 9, 13, 8, 13, 17`, soit 120 jours et
    26 jours au-dessus des huit jours mensuels ;
  - temps : `120 × 800 + 15 600 = 111 600 €` ;
  - capacité :
    `72 000 + 26 × 850 + 9 360 = 103 460 €` ;
  - lots :
    `60 × 875 + 24 × 900 + 36 × 900 + 12 480 = 118 980 €` ;
  - hybride : les 48 jours de base sont couverts par la capacité ; les
    12 récurrents supplémentaires, 24 diagnostics et 36 évolutions forment
    72 jours variables :
    `38 400 + 72 × 850 + 6 240 = 105 840 €` ;
  - ponctuel : `(120 + 6) × 850 + 21 840 = 128 940 €`.

Lecture :

- à 45 jours, le temps passé et les lots fictifs deviennent les moins chers ;
- à 90 jours, l’hybride gagne dans les hypothèses centrales ;
- à 120 jours, la capacité devient la moins chère, mais seulement après hausse
  explicite de son plafond ; l’interne se rapproche fortement ;
- un résultat calculé sans la colonne « travail non autorisé » serait trompeur :
  respecter un plafond en abandonnant une partie du flux n’est pas une économie
  comparable.

### 3.2 Sensibilité 2 — Report des jours réservés

Le même flux central produit trois factures :

| Règle fictive                            | Jours réservés utilisés | Jours réservés perdus | Dépassement | Coût complet |
| ---------------------------------------- | ----------------------: | --------------------: | ----------: | -----------: |
| Aucun report entre les mois              |                      81 |                    15 |   9 × 850 € | **89 010 €** |
| Report à l’intérieur de chaque trimestre |                      86 |                    10 |   4 × 850 € | **84 760 €** |
| Mutualisation sur toute l’année          |                      90 |                     6 |         0 € | **81 360 €** |

Formules :

```text
Sans report = 72 000 + (9 × 850) + 9 360 = 89 010 €
Report trimestriel = 72 000 + (4 × 850) + 9 360 = 84 760 €
Report annuel = 72 000 + 9 360 = 81 360 €
```

Avec mutualisation annuelle, l’hybride ne gagne que
`81 360 - 80 340 = 1 020 €`. L’écart est trop faible pour conclure sans vérifier
la couverture, les compétences et l’accès aux jours au moment nécessaire.

Seuil du volume variable dans cette version annualisée :

```text
Jours variables d’équilibre
= (81 360 - 38 400 - 6 240) / 850
= 43,2 jours
```

Le cas central comporte 42 jours variables. Deux jours supplémentaires
renversent le classement en faveur de la capacité annualisée.

### 3.3 Sensibilité 3 — Temps interne de pilotage

Le coût d’une heure hebdomadaire sur 52 semaines vaut :

```text
1 h × 52 × 60 € = 3 120 € par an
```

Seuils utiles :

1. **Temps passé contre hybride.**

   Le temps passé devient égal à l’hybride lorsque son pilotage tombe à :

   ```text
   (80 340 - 72 000) / (52 × 60) = 2,67 h/semaine
   ```

   Avec deux heures de pilotage hybride, le temps passé doit donc demander
   moins de 40 minutes supplémentaires par semaine pour devenir moins cher.

2. **Capacité annualisée contre hybride.**

   La capacité annualisée coûte 2 100 € de moins à l’extérieur, mais une heure
   de pilotage supplémentaire coûte 3 120 €. Elle devient moins chère si son
   pilotage tombe sous 2,67 h/semaine, en maintenant l’hybride à 2 h/semaine.

3. **Capacité sans report contre hybride.**

   La capacité sans report coûte déjà 5 550 € de plus à l’extérieur. L’hybride
   pourrait consommer jusqu’à 1,78 h de pilotage hebdomadaire de plus que la
   capacité et rester au même total. Le report contractuel change donc davantage
   le verdict qu’un petit écart de réunion.

4. **Interne contre hybride.**

   Le besoin de trésorerie interne dépasse le coût hybride de :

   ```text
   108 240 - 80 340 = 27 900 €
   ```

   Sur 110 jours internes restants, l’entreprise doit tirer au moins
   `27 900 / 110 = 253,64 €` de contribution ou d’achat évité par jour pour
   effacer cet écart, avant d’intégrer continuité et compétences.

Ces seuils ne sont pas des règles de marché. Ils montrent quelles données
l’entreprise doit remplacer : son coût chargé, ses vraies heures et la valeur
des autres travaux.

### 3.4 Sensibilité 4 — Coût d’un incident

Le coût n’est jamais déduit d’une moyenne Internet. L’entreprise construit une
analyse d’impact à partir de ses fonctions essentielles, de son mode dégradé, de
sa marge et de sa tolérance, conformément à l’esprit d’une analyse d’impact
métier.

Formule fictive :

```text
Impact = personnes bloquées × coût horaire chargé × durée
         × part réellement perdue
         + contribution commerciale non récupérée
```

| Cas fictif | Personnes | Coût chargé | Durée | Temps réellement perdu | Contribution non récupérée |       Impact |
| ---------- | --------: | ----------: | ----: | ---------------------: | -------------------------: | -----------: |
| Simple     |         5 |      35 €/h |   2 h |                   50 % |                        0 € |    **175 €** |
| Central    |        15 |      45 €/h |   4 h |                   60 % |                    2 000 € |  **3 620 €** |
| Sévère     |        50 |      55 €/h |   8 h |                   70 % |                   20 000 € | **35 400 €** |

Contrôles :

```text
Simple = 5 × 35 × 2 × 50 % = 175 €
Central = 15 × 45 × 4 × 60 % + 2 000 = 3 620 €
Sévère = 50 × 55 × 8 × 70 % + 20 000 = 35 400 €
```

Supposons un supplément de couverture entièrement fictif de **12 000 € par
an**. Il atteint son point mort uniquement s’il réduit réellement le dommage
annuel d’au moins 12 000 € :

| Type d’impact évité |                                       Nombre annuel équivalent au point mort |
| ------------------- | ---------------------------------------------------------------------------: |
| 175 €               |                                     `12 000 / 175 = 68,57` incidents simples |
| 3 620 €             |                                   `12 000 / 3 620 = 3,31` incidents centraux |
| 35 400 €            | `12 000 / 35 400 = 0,339`, soit environ un incident sévère tous les 2,95 ans |

La couverture n’est rationnelle que si le prestataire peut démontrer qu’elle
réduit la fréquence, la durée ou l’impact sur les plages réellement utiles.
Un abonnement, une capacité ou le mot « TMA » ne prouve pas cette réduction.

---

## 4. Quand ne pas signer, internaliser, remplacer ou retirer

| Décision possible                            | Signaux qui la rendent rationnelle                                                                                                           | Vérification avant décision                                                                                          | Erreur à éviter                                                                   |
| -------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| Ne pas prendre de contrat récurrent          | Charge faible, demandes contournables, application non critique, entreprise capable d’attendre une disponibilité ponctuelle                  | Historique de 6 à 12 mois, coût du mode dégradé, accès et sauvegardes, délai réel d’accès à une compétence           | Confondre « sans abonnement » et « sans contrat, sécurité ou responsabilité »     |
| Commencer par un diagnostic plafonné         | Code ou documentation inconnus, cause non identifiée, historique incomplet, aucun prestataire ne peut estimer honnêtement                    | Livrables du diagnostic, points d’arrêt, plafond, accès, conclusion « ne pas poursuivre » autorisée                  | Acheter immédiatement douze mois de capacité pour résoudre une inconnue           |
| Internaliser avec une personne déjà présente | Compétence disponible, temps réellement libre, continuité organisée, demande régulière et suffisamment large                                 | Coût d’opportunité des jours, dépendance à une personne, outils, absences, compétences spécialisées                  | Présenter le salaire déjà payé comme un coût nul                                  |
| Recruter                                     | Flux durable qui utilise la capacité, feuille de route au-delà de la maintenance, management et recrutement possibles                        | Coût chargé complet, délai de recrutement, 200 jours réellement productifs, valeur des jours restants, relais        | Comparer un salaire brut à une facture tout compris                               |
| Remplacer l’application                      | Fin de support, dépendances impossibles à maintenir, corrections qui ne restaurent plus un usage acceptable, coûts de reprise répétés        | Comparatif sur 24 à 36 mois : maintien, migration, double fonctionnement, données, formation, intégrations et sortie | Décider parce que « le code est ancien » sans prouver le risque ou le coût        |
| Retirer l’application                        | Plus de propriétaire métier, peu ou pas d’usage utile, processus remplacé, obligations et données traitables                                 | Utilisateurs, dépendances, exports testés, archivage, conservation, redirections, contrats, plan de retour           | Éteindre avant d’avoir récupéré les données et identifié les processus dépendants |
| Renégocier ou réduire une capacité           | Plus de 15 % de jours perdus sur deux revues consécutives, surcharges malgré l’abonnement, travail important systématiquement hors périmètre | Distribution mensuelle, règle de report, jours refusés, dépassements, délai d’accès                                  | Se contenter du taux facial sans regarder les jours perdus                        |
| Sortir du prestataire                        | Accès trop larges, absence de traces, dépendance non réduite, factures invérifiables, réversibilité non testée                               | Exercice de restauration, livraison d’une petite correction, export des données, inventaire des comptes et secrets   | Couper les accès avant d’avoir prouvé que l’entreprise peut continuer             |

Le seuil de 15 % est un **signal de revue interne**, pas une norme. Il oblige à
ouvrir le contrat et l’historique ; il ne commande pas automatiquement de
résilier.

### Portes de sécurité avant toute décision économique

Une comparaison de prix doit être suspendue et remplacée par une action
spécialisée si :

- un incident cyber est actif ;
- l’entreprise ne maîtrise aucun accès administrateur légitime ;
- aucune sauvegarde ne peut être restaurée ;
- les droits sur le code, les données ou les comptes sont contestés ;
- des données personnelles sont exposées sans rôles ni mesures identifiés ;
- personne dans l’entreprise ne peut prioriser ou accepter un résultat.

Le bon premier achat peut alors être un diagnostic, une reprise, une réponse à
incident ou un conseil juridique, pas une TMA annuelle.

---

## 5. Positions professionnelles conditionnelles

Ces positions peuvent donner au guide une opinion nette sans transformer une
préférence commerciale en vérité générale.

### Position 1 — Le meilleur point de départ pour un flux mixte est souvent hybride

Si l’historique contient une base récurrente stable, des diagnostics incertains
et quelques évolutions acceptables, nous commencerions généralement par :

- une petite capacité pour la continuité prévisible ;
- un plafond pour l’exploration ;
- des lots pour les changements vraiment bornés.

Nous changerions d’avis si le volume est faible, si l’entreprise pilote très
bien le temps passé ou si une forte criticité justifie une couverture managée
prouvée.

### Position 2 — Le temps passé est un outil d’apprentissage, pas un compteur ouvert

Nous le recommandons lorsque la cause, l’étendue ou la bonne solution n’est pas
encore connue. Nous exigeons une demande, un responsable, un plafond, un point
d’arrêt et une sortie. Lorsque le travail devient répétitif ou définissable, le
mode de prix doit être reconsidéré.

### Position 3 — Un forfait ne rend pas un résultat clair

Le prix fixe est professionnel pour une sortie acceptée : correction observée,
diagnostic remis, évolution testée. Il devient fragile lorsque les hypothèses,
les exclusions et le changement de besoin restent invisibles.

### Position 4 — Une capacité sans règle de report est un produit différent

Huit jours mensuels non reportables et 96 jours librement utilisables sur
l’année ne valent pas la même chose. Nous déconseillons toute comparaison qui
ne montre pas jours perdus, surcharge, délai d’accès et prix du dépassement.

### Position 5 — La disponibilité doit être achetée séparément

Réserver des développeurs ne garantit ni une réponse dans une plage donnée, ni
une remise en service, ni une correction définitive. Si la panne a un impact
économique mesurable, la couverture doit préciser plages, départ du délai,
résultat, dépendances, test et preuve.

### Position 6 — Ne rien signer peut être la bonne décision

Pour une application peu utilisée, contournable et correctement sauvegardée,
des interventions ponctuelles peuvent être rationnelles. Nous ne vendrions pas
un abonnement seulement pour rassurer. Nous demanderions toutefois qui peut
intervenir, sous quel délai, avec quels accès et quel mode dégradé.

### Position 7 — L’interne gagne quand l’entreprise sait utiliser toute la capacité

Une personne interne peut coûter moins cher par jour utile et apprendre plus
vite le métier. Elle devient une mauvaise fausse économie si la charge est
insuffisante, si une spécialité manque, si personne ne la remplace ou si les
110 jours restants n’ont aucune destination utile.

### Ce que Hagnéré Code devrait déconseiller même si cela peut se vendre

- douze mois de capacité sans historique de demandes ;
- régie sans plafond ni nouvelle autorisation ;
- forfait sans sortie et critères d’acceptation ;
- jours non reportables présentés comme une enveloppe annuelle ;
- « support inclus » sans plages, départ du délai et résultat ;
- abonnement choisi avant une reprise technique impossible ;
- tarif comparé sans coût du pilotage interne ;
- offre qui ne permet pas de réduire, remplacer ou retirer une partie du
  service.

---

## 6. Risque de cannibalisation et frontière des pages

### 6.1 Propriété éditoriale de chaque guide

| Guide                                     | Question propriétaire                                     | Ce qu’il doit posséder                                                                                                                                              | Ce que `tma-ou-regie` peut seulement résumer                                   |
| ----------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `tma-ou-regie`                            | « Comment acheter le même flux de maintenance ? »         | Historique mois par mois, comparaison des modes de prix, coût de pilotage, report, plafond, seuils, sans contrat, interne, remplacement et retrait                  | Deux ou trois clauses indispensables uniquement pour rendre le prix comparable |
| `contrat-tma-application`                 | « Ce contrat protège-t-il vraiment l’exploitation ? »     | Vie complète d’un incident, niveaux de service, ticket, gravité, consommation, sécurité, données, acceptation, responsabilités, réversibilité et exercice de sortie | Le mode de prix choisi, sans refaire son TCO                                   |
| `cout-maintenance-application-metier`     | « Combien inscrire au budget des douze prochains mois ? » | Hébergement, licences, support, prévention, sauvegarde, évolutions décidées, temps interne, inconnues, réalisé/budget et registre annuel                            | Le nom du mode commercial, sans refaire le comparatif TMA/régie                |
| `reprendre-maintenance-site-autre-agence` | « Comment changer d’équipe sans perdre le contrôle ? »    | Comptes, domaine, e-mails, copie, restauration, publication, ordre de bascule et retrait des anciens accès                                                          | La formule de maintenance future après reprise                                 |

### 6.2 Règles anti-cannibalisation

`tma-ou-regie` ne doit pas :

- refaire la checklist complète des clauses d’un contrat TMA ;
- expliquer en détail les délais de prise en charge, rétablissement et
  correction ;
- construire le budget annuel d’infrastructure, licences, sauvegardes et
  évolutions ;
- proposer un modèle de contrat ;
- reprendre le parcours complet de réversibilité ;
- utiliser « coût maintenance application » comme promesse dominante.

Il doit :

- posséder la requête et le titre « TMA ou régie » ;
- répondre dans les 150 premiers mots au choix forfait/jours ;
- comparer les offres sur un même historique ;
- intégrer le coût de gouvernance ;
- montrer le report, les jours perdus et le plafond ;
- donner le seuil qui renverse le verdict ;
- conclure vers le guide contrat pour négocier les clauses ;
- conclure vers le guide coût pour intégrer le modèle choisi au budget complet.

### 6.3 Maillage recommandé

- Après la comparaison économique :
  « Vous avez choisi le mode d’achat ; vérifiez maintenant
  [le contrat TMA et le parcours d’un incident](/guides/contrat-tma-application). »
- Après les montants fictifs :
  « Ces chiffres ne remplacent pas
  [le budget annuel complet de l’application](/guides/cout-maintenance-application-metier). »
- Dans le cas des accès inconnus :
  lien vers la reprise technique pertinente, sans développer le sujet.
- CTA final :
  promettre une comparaison sur l’historique et un périmètre recommandé, pas
  « le forfait le moins cher ».

---

## 7. Plan de page humain pour dirigeants

### Contrat des 150 premiers mots

L’ouverture doit ressembler à une conversation réelle :

> Votre prestataire vous propose soit un forfait mensuel, soit des jours
> facturés au fur et à mesure. Lequel coûtera le moins cher sans laisser votre
> application sans suivi ? La réponse ne tient pas dans les mots « TMA » ou
> « régie ». Il faut regarder les bugs et évolutions réellement reçus, le moment
> où ils arrivent, les jours qui peuvent être reportés et le temps que votre
> équipe devra passer à piloter. Dans l’exemple fictif de ce guide, l’hybride
> coûte 80 340 € sur douze mois. Mais une simple règle de report ramène la
> capacité à 81 360 €, et deux jours variables supplémentaires peuvent inverser
> le verdict. Vous allez refaire le calcul avec vos propres données.

Cette ouverture :

- part de la question du dirigeant ;
- donne la réponse immédiatement ;
- annonce un exemple et sa limite ;
- promet une action autonome ;
- évite CCAG, SLA, RACI, RGPD et vocabulaire d’acheteur public avant
  l’explication ordinaire.

### Architecture recommandée

| Ordre | Titre de travail                                                    | Question du lecteur                                     | Preuve ou outil                                                      | Décision obtenue                                     |
| ----: | ------------------------------------------------------------------- | ------------------------------------------------------- | -------------------------------------------------------------------- | ---------------------------------------------------- |
|     1 | Forfait mensuel ou jours consommés : la réponse courte              | « Que choisir ? »                                       | Position conditionnelle                                              | Comprendre qu’il faut d’abord observer le flux       |
|     2 | TMA et régie ne répondent pas à la même question                    | « Pourquoi les devis sont-ils difficiles à comparer ? » | Définition bornée Légifrance + traduction humaine                    | Séparer service, prix et couverture                  |
|     3 | Classez trois à douze mois de demandes                              | « Qu’allons-nous réellement acheter ? »                 | 8 champs actuels + distribution mensuelle                            | Distinguer récurrent, incertain, borné et reportable |
|     4 | Six portes, y compris ne rien signer et internaliser                | « Quelles options l’agence ne me présente pas ? »       | Cartes courtes                                                       | Élargir le choix avant tout calcul                   |
|     5 | Le même flux sur douze mois                                         | « Quel modèle coûte le moins ? »                        | Tableau central fictif                                               | Comparer coût externe et coût interne                |
|     6 | Pourquoi huit jours par mois ne font pas 96 jours utiles            | « Que deviennent les jours perdus ? »                   | Flux mois par mois                                                   | Négocier report, surcharge et disponibilité          |
|     7 | Les seuils qui changent le verdict                                  | « À partir de quand dois-je changer ? »                 | Volume, pilotage, plafond                                            | Tester la robustesse                                 |
|     8 | Combien vaut vraiment une panne ?                                   | « Une couverture premium est-elle rationnelle ? »       | Formule d’impact et trois cas fictifs                                | Acheter la couverture sur preuve                     |
|     9 | Quand choisir le ponctuel, l’interne, le remplacement ou le retrait | « Et si je ne signe pas ? »                             | Arbre de décision                                                    | Autoriser une conclusion non commerciale             |
|    10 | Les contrôles communs à toutes les options                          | « Comment éviter chèque en blanc et faux forfait ? »    | Plafond, alerte, acceptation, accès, sortie                          | Préparer la négociation                              |
|    11 | Notre avis professionnel, et les cas où nous changerions d’avis     | « Que recommandez-vous vraiment ? »                     | Positions conditionnelles                                            | Donner une opinion crédible                          |
|    12 | Refaites le calcul avec votre historique                            | « Que dois-je apporter au rendez-vous ? »               | Ressource CSV/calculateur seulement si réellement produite et testée | Comparer deux offres sur le même périmètre           |

### Rythme et plume

- Une question ordinaire avant chaque notion.
- Une seule idée de décision par paragraphe.
- Une phrase de verdict après chaque tableau.
- Le mot « fictif » avant le premier montant et dans chaque bloc économique.
- Le mot « plafond » toujours accompagné de ce qui s’arrête.
- Chaque recommandation suivie du cas où elle devient fausse.
- Pas de série de six tableaux contractuels : le guide `contrat-tma-application`
  les possède déjà.
- Pas de conclusion « cela dépend » sans nommer la variable et son seuil.
- Pas de chiffres décoratifs : chaque montant doit produire une décision.

### Ressource utile, si elle est réellement construite

Le meilleur actif n’est pas un PDF générique. C’est un tableur ou CSV de
comparaison contenant :

- mois ;
- famille de demande ;
- jours utiles ;
- jours reportables ;
- prix fixe ;
- taux fictif remplacé par le devis réel ;
- heures de pilotage interne ;
- coût chargé interne ;
- plafond ;
- alerte 70 % ;
- alerte 90 % ;
- jours non autorisés au plafond ;
- impact d’incident ;
- coût complet ;
- décision.

Il doit produire au minimum les six lignes du scénario, accepter les données de
l’entreprise et afficher les hypothèses. Aucun téléchargement ne doit être
annoncé avant test réel du fichier.

---

## 8. Reproductibilité et contrôle Node

Commande exécutée le 24 juillet 2026 avec Node. Aucun tarif n’est lu depuis une
source externe ; toutes les constantes sont les hypothèses fictives documentées
plus haut.

```js
const months = [
  ["Jan", 4, 1, 0],
  ["Fév", 4, 1, 2],
  ["Mar", 4, 2, 0],
  ["Avr", 4, 1, 4],
  ["Mai", 4, 2, 0],
  ["Juin", 4, 1, 2],
  ["Juil", 4, 1, 0],
  ["Août", 4, 1, 2],
  ["Sep", 4, 2, 4],
  ["Oct", 4, 2, 0],
  ["Nov", 4, 2, 4],
  ["Déc", 4, 2, 6],
];

const pilotageAnnuel = (heuresParSemaine) => heuresParSemaine * 52 * 60;

const distribution = months.map(([month, recurrent, diagnostic, evolution]) => {
  const total = recurrent + diagnostic + evolution;
  return {
    month,
    total,
    used: Math.min(total, 8),
    unused: Math.max(8 - total, 0),
    overflow: Math.max(total - 8, 0),
  };
});

const sum = (key) =>
  distribution.reduce((total, month) => total + month[key], 0);

const central = {
  temps: 90 * 800 + pilotageAnnuel(5),
  capaciteSansReport: 12 * 6000 + sum("overflow") * 850 + pilotageAnnuel(3),
  capaciteReportTrimestriel: 12 * 6000 + 4 * 850 + pilotageAnnuel(3),
  capaciteReportAnnuel: 12 * 6000 + pilotageAnnuel(3),
  lot: 12 * 3500 + 6 * 2700 + 3 * 7200 + pilotageAnnuel(4),
  hybride: 12 * 3200 + 42 * 850 + pilotageAnnuel(2),
  ponctuel: (90 + 6) * 850 + pilotageAnnuel(7),
  interne: 96000 + 6000 + pilotageAnnuel(2),
};

const low = {
  temps: 45 * 800 + pilotageAnnuel(5),
  capacite: 12 * 6000 + pilotageAnnuel(3),
  lot: 24 * 875 + 9 * 900 + 12 * 900 + pilotageAnnuel(4),
  hybride: 12 * 3200 + 21 * 850 + pilotageAnnuel(2),
  ponctuel: (45 + 6) * 850 + pilotageAnnuel(7),
  interne: 96000 + 6000 + pilotageAnnuel(2),
};

const highMonthlyLoad = [7, 9, 8, 12, 8, 9, 7, 9, 13, 8, 13, 17];
const highOverflow = highMonthlyLoad.reduce(
  (total, month) => total + Math.max(month - 8, 0),
  0,
);
const high = {
  temps: 120 * 800 + pilotageAnnuel(5),
  capacite: 12 * 6000 + highOverflow * 850 + pilotageAnnuel(3),
  lot: 60 * 875 + 24 * 900 + 36 * 900 + pilotageAnnuel(4),
  hybride: 12 * 3200 + 72 * 850 + pilotageAnnuel(2),
  ponctuel: (120 + 6) * 850 + pilotageAnnuel(7),
  interne: 96000 + 6000 + pilotageAnnuel(2),
};

const incident = {
  simple: 5 * 35 * 2 * 0.5,
  central: 15 * 45 * 4 * 0.6 + 2000,
  severe: 50 * 55 * 8 * 0.7 + 20000,
};

console.log({
  recurrent: 48,
  diagnostic: 18,
  evolution: 24,
  total: sum("total"),
  capacityUsed: sum("used"),
  capacityUnused: sum("unused"),
  overflow: sum("overflow"),
  highOverflow,
  low,
  central,
  high,
  incident,
});
```

Résultat contrôlé :

```text
Charge : 48 + 18 + 24 = 90 jours
Capacité mensuelle : 81 jours consommés, 15 perdus, 9 en dépassement
Temps passé : 87 600 €
Capacité sans report : 89 010 €
Capacité avec report trimestriel : 84 760 €
Capacité avec report annuel : 81 360 €
Lots : 92 280 €
Hybride : 80 340 €
Ponctuel : 103 440 €
Interne : 108 240 € de trésorerie
Impacts : 175 €, 3 620 €, 35 400 €
Flux faible : 51 600 €, 81 360 €, 52 380 €, 62 490 €, 65 190 €, 108 240 €
Flux élevé : 111 600 €, 103 460 €, 118 980 €, 105 840 €, 128 940 €, 108 240 €
```

Contrôles inverses effectués :

- somme des douze mois = 90 jours ;
- somme des trois familles = 90 jours ;
- capacité achetée = 96 jours ;
- `81 + 15 = 96` jours réservés ;
- `81 + 9 = 90` jours servis ;
- chaque coût complet = coût externe ou de delivery + pilotage interne ;
- le plafond du temps couvre 93,75 jours ;
- le plafond variable hybride couvre 42,35 jours ;
- le seuil hybride/capacité annualisée est de 43,2 jours variables ;
- le supplément de couverture de 12 000 € atteint les points morts de 68,57,
  3,31 et 0,339 incidents selon les trois impacts.

## 9. Porte avant réécriture

La page ne devrait être réécrite qu’avec les engagements suivants :

- conserver la distinction service / prix ;
- annoncer que tous les montants sont fictifs avant le premier euro ;
- montrer le flux mensuel, pas seulement 90 jours annualisés ;
- faire apparaître les jours perdus et les jours non autorisés au plafond ;
- séparer dépense externe, coût interne et besoin de trésorerie ;
- ne pas présenter l’interne comme gratuit ;
- ne pas présenter la couverture comme incluse dans une capacité ;
- conserver les sources publiques dans leur périmètre ;
- permettre la conclusion « ne pas signer », « diagnostiquer », « recruter »,
  « remplacer » ou « retirer » ;
- renvoyer les clauses au guide `contrat-tma-application` et le budget complet
  au guide `cout-maintenance-application-metier` ;
- refaire tous les calculs après intégration et contre-auditer la plume avec un
  lecteur dirigeant non technique.
