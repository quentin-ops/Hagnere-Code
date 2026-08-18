# Kit de pilotage Google Ads pour un SaaS B2B

Version : 1.0  
Date de revue : 24 juillet 2026  
Éditeur : Hagnéré Code

## À quoi sert ce dossier

Ce kit aide une direction à répondre à une question concrète : **peut-on
augmenter l’investissement Google Ads sans confondre des clics avec des
clients rentables ?**

Il relie quatre réalités qui vivent souvent dans des outils séparés :

1. la cible et son comité d’achat ;
2. les campagnes et les requêtes ou signaux qui ont créé la visite ;
3. la vérité commerciale du CRM, puis la vérité d’usage du produit ;
4. les coûts, la marge contributive et le temps nécessaire pour récupérer
   l’investissement.

Le résultat attendu n’est pas un tableau de bord décoratif. C’est un dossier
qui permet au dirigeant de décider entre poursuivre, limiter, corriger,
expérimenter ou arrêter.

## Ce que ce kit ne promet pas

- Il ne garantit ni vente, ni rentabilité, ni classement publicitaire.
- Il ne remplace pas une analyse juridique du consentement, des traceurs ou
  des données envoyées aux plateformes.
- Il ne transforme pas une attribution publicitaire en preuve
  d’incrémentalité.
- Il ne fournit aucun seuil universel de bon CAC, de bon taux de conversion ou
  de bon délai de récupération.
- Il ne doit contenir aucune donnée personnelle réelle.

Tous les nombres déjà remplis sont ceux d’**AtelierFlow**, un SaaS B2B
entièrement fictif. Ils servent à comprendre la méthode, pas à prédire la
performance d’une entreprise réelle.

## L’ordre de travail recommandé

1. Décrivez une cible et son comité d’achat dans
   `01-icp-et-comite-achat.csv`.
2. Séparez les campagnes Search de marque, Search hors marque, Performance Max
   et Demand Gen dans `02-carte-requetes-et-campagnes.csv`. Ces familles ne
   doivent pas être jugées comme si elles donnaient le même niveau de contrôle
   ou répondaient au même besoin.
3. Définissez chaque événement dans `03-dictionnaire-evenements.csv`.
   Identifiez explicitement ce qui est un signal publicitaire, une vérité CRM
   ou un état du produit.
4. Reconstituez une cohorte jusqu’au client encore présent à M12 dans
   `04-cohorte-clic-client-retenu.csv`.
5. Chiffrez les postes de coûts à horizons cumulés dans
   `05-couts-12-36-60.csv`.
6. Testez la sensibilité du coût d’acquisition et du délai de récupération
   dans `06-sensibilite-cac-payback.csv`.
7. Consignez chaque test dans `07-journal-experiences.csv`. Une expérience
   modifie une variable principale et annonce sa règle de décision avant de
   lire le résultat.
8. Vérifiez la mesure, le consentement, la déduplication, le trafic invalide et
   le spam avec `08-checklist-mesure-consentement.csv`.
9. Lisez `09-exemple-atelierflow.csv` pour voir le raisonnement complet sur un
   cas fictif.
10. Formalisez l’arbitrage dans `10-releve-decision.md`.

## Les trois couches de vérité

### 1. Le signal publicitaire

Un clic, une visite ou une conversion remontée dans une plateforme aide à
piloter une campagne. Ce signal peut être incomplet, attribué selon une règle
de la plateforme, doublonné, affecté par le consentement ou pollué par du
trafic invalide et du spam.

### 2. La vérité CRM

Le CRM porte les étapes commerciales utiles : cible ICP confirmée, SQL
accepté, opportunité, contrat signé. Un événement importé vers une plateforme
reste une copie de cette vérité, pas une nouvelle vérité.

### 3. La vérité produit et financière

L’activation, la présence à M12, la marge contributive et les remboursements
ou impayés se vérifient dans les systèmes produit, facturation et finance. Une
signature n’est donc pas encore un client activé ni un client retenu.

## Identifiants et anti-double-comptage

Chaque objet reçoit une clé stable, fictive et non directement identifiante.

| Préfixe  | Objet                                 | Exemple           |
| -------- | ------------------------------------- | ----------------- |
| `SEG`    | segment ou ICP                        | `SEG-001`         |
| `BUY`    | rôle dans le comité d’achat           | `BUY-001`         |
| `CAM`    | campagne                              | `CAM-S-001`       |
| `MAP`    | correspondance cible-campagne         | `MAP-001`         |
| `EVT`    | événement défini                      | `EVT-001`         |
| `COH`    | cohorte figée                         | `COH-ATF-001`     |
| `LP`     | page de destination ou variante       | `LP-001`          |
| `LEAD`   | demande dédupliquée                   | `LEAD-FICTIF-001` |
| `OPP`    | opportunité CRM                       | `OPP-FICTIVE-001` |
| `CTR`    | contrat                               | `CTR-FICTIF-001`  |
| `TEN`    | compte produit                        | `TEN-FICTIF-001`  |
| `COUT`   | poste de coût unique                  | `COUT-ATF-001`    |
| `EXP`    | expérience                            | `EXP-001`         |
| `MES`    | contrôle de mesure                    | `MES-001`         |
| `DEC`    | décision                              | `DEC-001`         |
| `SCN`    | scénario économique complet           | `SCN-ATF-PILOT`   |
| `STG`    | étape du parcours                     | `STG-SQL`         |
| `ACTION` | action décidée et attribuée           | `ACTION-001`      |
| `ECO`    | indicateur économique calculé         | `ECO-ATF-001`     |
| `UNK`    | inconnue qui peut changer la décision | `UNK-ATF-001`     |
| `RATIO`  | taux dérivé de deux volumes           | `RATIO-ATF-001`   |
| `SENS`   | scénario de sensibilité isolé         | `SENS-ATF-001`    |

La clé `conversion_unique_key` empêche qu’un même événement, renvoyé après une
erreur ou une synchronisation, soit compté plusieurs fois. Elle ne doit pas
être une adresse électronique, un nom, un numéro de téléphone ou une autre
donnée personnelle en clair.

Une dépense ne peut apparaître qu’une fois dans le total. Si elle est déjà
incluse dans un autre poste, renseignez `included_in_cost_key` au lieu de la
recompter.

Dans tout le kit, **M12 signifie douze mois après l’activation de chaque
compte**. Une cohorte est mûre lorsque le dernier compte activé a atteint cette
date. Ne choisissez pas un autre point de départ au milieu de l’analyse.

## Attribution et incrémentalité ne répondent pas à la même question

- **Attribution** : selon la règle retenue, quel canal reçoit le crédit d’une
  conversion observée ?
- **Incrémentalité** : combien de résultats n’auraient probablement pas eu lieu
  sans l’investissement testé ?

Une plateforme peut attribuer une vente sans démontrer que cette vente a été
créée par la publicité. Documentez la fenêtre, la règle d’attribution et les
chevauchements entre campagnes. Lorsque l’enjeu financier le justifie,
préparez un test d’incrémentalité adapté au volume et au marché, puis faites
valider son protocole par une personne compétente.

## Comment lire Search, Performance Max et Demand Gen

- **Search de marque** capte des recherches contenant la marque. Il ne doit pas
  masquer la performance du Search hors marque.
- **Search hors marque** répond à une intention exprimée par une requête, sous
  réserve de la correspondance et des termes réellement observés.
- **Performance Max** mobilise plusieurs inventaires et signaux. Isolez son
  budget et surveillez le chevauchement avec la marque et les autres campagnes.
- **Demand Gen** sert une logique de création ou de stimulation de demande.
  Ne l’évaluez pas uniquement avec les mêmes attentes immédiates qu’une requête
  Search à forte intention.

Ces distinctions structurent le diagnostic. Elles ne constituent pas une
recommandation universelle d’utiliser ou d’exclure un type de campagne.

## Règles de saisie

- Encodage : UTF-8.
- Séparateur CSV : point-virgule.
- Une ligne représente un objet, un fait, un contrôle ou une décision.
- Les montants 12, 36 et 60 mois sont **cumulatifs**. Ne les additionnez
  jamais entre eux.
- Une inconnue reste `à confirmer`. Elle ne devient jamais `0` pour faire
  fonctionner un calcul.
- Avant tout import, contrôlez la méthode réellement disponible, l’éligibilité
  de l’événement, le délai depuis le clic admissible, la déduplication et le
  journal d’erreurs. Dans le scénario AtelierFlow, l’activation à quatre mois
  et la présence douze mois après activation restent dans le CRM et le produit
  plutôt que d’être présentées comme importables ; SQL ou opportunité fournissent
  un signal plus précoce à examiner.
- Les formules sont décrites en toutes lettres. Les CSV ne contiennent aucune
  formule active.
- Si une saisie libre commence par `=`, `+`, `-` ou `@`, préfixez-la d’une
  apostrophe avant de l’ouvrir dans un tableur.
- N’utilisez que des identifiants fictifs ou pseudonymisés et faites examiner
  les flux de données, la durée de conservation, les accès et le consentement
  par les personnes compétentes.

## Quand ne pas augmenter le budget

Ne passez pas à l’échelle tant que l’une de ces inconnues change matériellement
la décision :

- la part marque et hors marque n’est pas séparée ;
- les campagnes Search, Performance Max et Demand Gen se recouvrent sans
  contrôle ;
- le CRM ne déduplique pas les leads, opportunités et contrats ;
- la plateforme optimise sur un formulaire alors que la direction juge sur le
  client activé ou retenu ;
- la marge contributive ou le périmètre de coûts n’est pas défini ;
- le trafic invalide, le spam ou les tests internes ne sont pas isolés ;
- le fonctionnement du consentement et de la CMP n’est pas vérifié ;
- l’attribution est présentée comme une preuve d’incrémentalité ;
- la cohorte n’a pas atteint la maturité nécessaire.

## Le cas fictif AtelierFlow

L’exemple part d’une dépense média de 12 000 €. Le pilotage (4 500 €), la
page et sa configuration initiale (2 000 €), les créations (1 500 €), les
données et diagnostics (1 000 €) et le temps commercial valorisé (3 000 €)
portent le coût d’acquisition complet de la cohorte à 24 000 €. Il suit :

`2 000 clics → 80 leads → 32 ICP → 16 SQL → 8 opportunités → 4 contrats
signés → 3 comptes activés → 2 comptes encore présents à M12`.

Le CPC média est donc de 6 €. Le CPL média est de 150 €, tandis que le CPL
complet est de 300 €. Le coût complet atteint 1 500 € par SQL, 3 000 € par
opportunité, 6 000 € par contrat signé, 8 000 € par compte activé et 12 000 €
par client encore présent à M12.

La marge contributive supposée est de 900 € par mois et par client. Le délai
théorique de récupération après activation est de 8,9 mois. Avec trois mois de
cycle commercial et un mois de mise en route, il devient environ 12,9 mois
depuis le premier clic.

Le fichier de sensibilité isole ensuite trois changements, sans les présenter
comme des prévisions :

- une page à 3 % donne 2,25 activations attendues, un CAC complet activé
  arrondi à 10 667 € et un payback après activation de 11,9 mois ;
- un taux SQL vers opportunité divisé par deux donne 1,5 activation attendue,
  un CAC complet activé de 16 000 € et un payback de 17,8 mois ;
- un CPC supérieur de 25 %, avec budget média inchangé, donne 2,4 activations
  attendues, un CAC complet activé de 10 000 € et un payback de 11,1 mois.

Les nombres 2,25, 1,5 et 2,4 sont des espérances mathématiques. Ils ne
représentent pas des fractions de clients réellement observées.

Le plan pluriannuel est un autre périmètre : 8 000 € de lancement, puis
88 000 € par année complète (48 000 € de média, 18 000 € de pilotage,
6 000 € de créations, 4 000 € de données et diagnostics et 12 000 € de temps
commercial valorisé). Les TCO illustratifs sont de 96 000 € à 12 mois,
272 000 € à 36 mois et 448 000 € à 60 mois. Ces horizons ne doivent pas être
additionnés et le TCO de planification ne doit pas être divisé par la cohorte
pilote sans prouver qu’ils couvrent exactement la même période et les mêmes
postes.
