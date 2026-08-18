# Audit approfondi — `choisir-prestataire-application-metier`

Date : 24 juillet 2026

Auditeur concurrentiel : Codex — cellule `corpus_inventory`

Snapshot du guide :
`a93d87a1cf8501976b31fb291735a0ac3afab65ce2d019ff3c41e654ba893e4e`

Périmètre : audit éditorial, décisionnel, concurrentiel et factuel. Aucune
page publique, aucun fichier partagé, aucun registre et aucun manifest n'a été
modifié.

## 1. Verdict exécutif

```text
Lecteur exact : dirigeant qui doit confier une application métier importante à un prestataire sans savoir si deux propositions couvrent vraiment le même travail.
Question réelle : quelle équipe a le plus de chances de livrer un résultat utile, maintenable et reprenable sans faire payer l'entreprise pour une promesse impossible à vérifier ?
Décision attendue : éliminer les offres qui échouent aux exigences minimales, puis comparer les survivantes sur un périmètre et un coût total identiques.
Réponse actuelle en une phrase : donnez le même cas aux candidats, demandez six engagements écrits et jugez les personnes, les preuves, la maintenance et la sortie plutôt que le statut ou le prix seul.
Défaut qui coûte le plus de valeur : aucune proposition n'est chiffrée sur un horizon commun ; le lecteur ne voit ni coût interne, ni score pondéré, ni prix de l'incertitude, ni cas où l'offre la moins chère doit gagner.
Niveau actuel : B+
Priorité : haute
Statut : audité — réécriture P1 nécessaire avant contre-audit
```

Le guide est nettement supérieur aux listes génériques « dix critères pour
choisir une agence ». Son cas continu, son entretien d'une heure et ses six
engagements rendent la comparaison concrète. Il évite aussi deux erreurs
commercialement commodes : agence n'est pas synonyme de continuité et prix
élevé n'est pas synonyme de qualité.

Il reste toutefois incomplet au moment où un dirigeant doit signer. La page
énumère les postes du prix sans remplir une seule offre, conseille de ne pas
additionner mécaniquement des notes sans proposer de pondération défendable et
évoque une mission préparatoire sans calculer ce qu'elle doit réduire comme
risque. La meilleure réponse francophone doit faire travailler trois
prestataires fictifs sur le même besoin, laisser l'offre la moins chère gagner
si elle franchit les garde-fous et montrer quand un pilote payé crée plus de
valeur qu'il ne coûte.

### Score avant correction

| Axe | Note /10 | Preuve localisable | Manque décisif |
| --- | ---: | --- | --- |
| Intention | 9 | L'ouverture part de trois propositions impossibles à rapprocher et du doute réel du dirigeant (`page.tsx:291-333`). | La comparaison promise n'annonce ni horizon ni unité économique. |
| Décision | 8 | Le mini-cas, les six engagements et la synthèse en six phrases produisent un chemin exploitable (`389-531`, `685-724`). | Aucun seuil n'indique quand éliminer, piloter ou signer. |
| Pédagogie | 9 | « Atelier Mercure », 12 utilisateurs et 80 commandes par jour donnent un fil humain au guide (`389-444`). | Le cas ne va jamais jusqu'à des devis remplis ni à une décision finale expliquée. |
| Profondeur | 7 | Besoin, équipe, reprise, recette, dépendances, maintenance, propriété et sortie sont couverts. | Sécurité de la chaîne logicielle, modèle de livraison, changement de périmètre et coût du temps client restent trop courts. |
| Preuve | 7 | RNE, CNIL, Code de la propriété intellectuelle et questions de référence sont mobilisés (`575-628`). | Les preuves de capacité technique et de sécurité ne sont pas reliées à un test observable ; plusieurs sources internationales plus exigeantes manquent. |
| Comparaison | 5 | Les candidats reçoivent le même cas et les postes sont alignés (`389-474`, `531-573`). | Zéro TCO, score pondéré, analyse de sensibilité ou proposition remplie. |
| Originalité | 9 | L'entretien identique, les traces attendues et les six phrases constituent un bon actif éditorial propre. | L'actif n'aboutit pas à une grille calculable et téléchargeable. |
| Style | 9 | Ton direct, prudent et compréhensible par un non-technicien. | Quelques séries de listes peuvent devenir une démonstration continue. |
| Conversion | 8 | Le CTA peut laisser gagner le report et décrit un cadrage utile (`741-771`). | Le livrable, sa durée, son prix indicatif et le mauvais fit ne sont pas nommés. |
| SEO/produit | 8 | FAQ, maillage, données structurées et sous-intentions agence/freelance, devis, maintenance et code sont présents. | Les intentions « grille prestataire logiciel », « comparer devis application », « audit fournisseur logiciel » et « TCO projet » restent insuffisamment satisfaites. |

Total : **79/100**

## 2. Ce que le guide dit réellement

- Trois offres ne sont comparables qu'après avoir exposé leurs hypothèses,
  exclusions, personnes et dépendances.
- Le statut agence ou freelance n'est pas un verdict de qualité.
- Une recherche de prestataire doit commencer par le résultat métier, les
  utilisateurs, le problème actuel et les contraintes.
- Tous les candidats doivent traiter le même cas « Atelier Mercure ».
- Un entretien d'une heure est structuré en compréhension, démonstration,
  équipe, déroulement et clôture.
- Six engagements écrits sont demandés : compréhension, périmètre testable,
  acceptation, dépendances, après-lancement et sortie.
- Les prix doivent être décomposés après alignement du travail.
- L'existence juridique, les références, les rôles RGPD et la cession de droits
  doivent être vérifiés sans transformer un document administratif en preuve
  de compétence.
- La maintenance et la sortie sont préparées avant la mise en ligne.
- La décision finale tient en six phrases afin de rendre les compromis
  explicites.

Ce qui semble complet sans encore permettre de choisir : le prix reste une
liste non remplie ; le temps des salariés n'est jamais valorisé ; aucune offre
fictive n'est classée ; la sécurité du développement et des dépendances reste
largement implicite ; le pilote est conseillé sans seuil économique.

## 3. Benchmark France et international

Requêtes, pays, langues et date :

- France, français, 24 juillet 2026 : `choisir prestataire application métier`,
  `comparer devis logiciel sur mesure`, `sourçage fournisseur logiciel`,
  `contrat développement application sécurité`.
- États-Unis, anglais, 24 juillet 2026 : `choose custom software vendor`,
  `software supplier due diligence`, `digital acquisition acceptance criteria`,
  `secure software acquisition`.
- Royaume-Uni, anglais, 24 juillet 2026 : `choose technology supplier total
  cost`, `software procurement build buy break clause`, `DDaT playbook`.
- Australie, anglais, 24 juillet 2026 : `software procurement supplier security
  due diligence`, `digital sourcing lifecycle`.

Saturation : les agences et annuaires répètent objectifs, budget, portfolio,
avis, communication et maintenance. Les cadres publics étrangers vont plus
loin sur la gouvernance : coût total, modèle contractuel adapté à
l'incertitude, propriété des données et règles métier, sécurité du fournisseur,
chaîne de dépendances, acceptation, clauses de sortie et résilience. Le gain
d'information n'est donc pas d'ajouter vingt critères, mais de **relier chaque
critère à une trace, une condition éliminatoire, un score pondéré et un coût
sur 36 mois**.

| Ressource et URL directe | Marché | Réponse utile | Preuve ou outil | Limite et biais | Apport à adapter |
| --- | --- | --- | --- | --- | --- |
| [Direction des achats de l'État — guide du sourçage opérationnel 2025](https://www.economie.gouv.fr/dae/le-sourcage-operationnel-ledition-2025-du-guide-publie-par-la-direction-des-achats-de-letat-est-desormais-disponible) | France | Traite le sourçage comme une préparation structurée de l'achat et inclut risques fournisseur, propriété intellectuelle et entretien logiciel. | Guide public publié le 18 décembre 2025 avec grilles. | Commande publique, donc formalisme disproportionné pour une PME. | Réduire la démarche à un entretien commun, des traces et une note de risque. |
| [CNIL — sous-traitant](https://www.cnil.fr/fr/sous-traitant) | France | Rappelle qu'un sous-traitant traite pour le compte du responsable et que les rôles/obligations doivent être contractualisés. | Source primaire française. | Ne prouve aucune compétence de livraison et ne qualifie pas seule tous les rôles. | Ajouter une carte données, sous-traitants ultérieurs, mesures et restitution. |
| [Légifrance — article L131-3](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958) | France | Exige que les droits cédés soient distinctement mentionnés et leur domaine délimité. | Texte juridique primaire. | Une page éditoriale ne peut pas conclure sur un contrat concret. | Conserver la prudence et joindre un inventaire actif/droit/licence/livraison. |
| [La Fabrique du Net — choisir une agence de développement logiciel](https://www.lafabriquedunet.fr/agences/pages/agences-developpement-logiciel/guide) | France | Couvre budget, organisation, sélection et références. | Bon relevé des questions du marché français. | Annuaire commercial ; plusieurs chiffres et promesses de productivité ne sont pas suffisamment sourcés. | Benchmark de saturation seulement ; ne reprendre aucun chiffre. |
| [Clutch — how to choose a software developer](https://clutch.co/resources/how-to-choose-a-software-developer) | États-Unis | Demande objectifs, budget, portfolio et entretiens. | Page mise à jour le 17 février 2026. | Annuaire commercial qui favorise la consultation de profils ; grille générique. | Montrer pourquoi ces critères seuls ne classent pas deux offres. |
| [NIST SP 800-218 — Secure Software Development Framework](https://csrc.nist.gov/pubs/sp/800/218/final) | États-Unis | Crée un vocabulaire commun entre producteurs et acquéreurs pour les pratiques de développement sécurisé. | Standard public final, février 2022. | Cadre, pas certification automatique ni checklist universelle. | Demander quelles pratiques sont exécutées et quelles preuves sont remises. |
| [NIST SP 1326 — Cybersecurity Supply Chain Risk Management](https://csrc.nist.gov/pubs/sp/1326/final) | États-Unis | Structure la diligence fournisseur : provenance, résilience, dépendances, sécurité fondamentale et niveaux de sous-traitance. | Publication finale du 8 juillet 2026. | Référence fédérale américaine, plus lourde qu'un projet PME. | Créer un mini-questionnaire proportionné aux données et à la criticité. |
| [Digital.gov — navigating digital acquisitions](https://digital.gov/2024/11/26/navigating-digital-acquisitions) | États-Unis | Relie recherche utilisateur, build/buy, modèle de contrat, revue de dépôt, bac à sable, utilisabilité et acceptation. | Retour public de pratique d'achat numérique. | Contexte fédéral américain. | Ajouter dépôt ou démonstration inspectable, scénario d'acceptation et choix du modèle de livraison. |
| [GOV.UK — choosing technology](https://www.gov.uk/service-manual/technology/choosing-technology-an-introduction) | Royaume-Uni | Demande coût total, contrôle des données, possibilité de changer d'avis et prototype. | Service Manual officiel. | Services publics britanniques. | Faire du prototype un achat d'information, non un rituel systématique. |
| [GOV.UK — define your purchasing strategy](https://www.gov.uk/guidance/define-your-purchasing-strategy) | Royaume-Uni | Couvre build/buy, suivi fournisseur, propriété des données/IP/règles métier et clauses de rupture. | Guide public d'achat. | Cadre gouvernemental et contrats plus complexes. | Ajouter propriétaire de chaque actif et événement de sortie. |
| [GOV.UK — DDaT Playbook](https://www.gov.uk/government/publications/the-digital-data-and-technology-playbook/the-digital-data-and-technology-playbook?dm_i=2OYA) | Royaume-Uni | Organise cycle d'achat, PME, modèle de livraison, héritage et propriété intellectuelle. | Playbook officiel. | Ne constitue pas une règle privée française. | Séparer critères de capacité, mode d'engagement et réversibilité. |
| [Australian Signals Directorate — procurement and outsourcing](https://www.cyber.gov.au/business-government/asds-cyber-security-frameworks/ism/cyber-security-guidelines/guidelines-for-procurement-and-outsourcing) | Australie | Demande transparence du fournisseur, responsabilités partagées et évaluation de la chaîne d'approvisionnement. | Contrôles mis à jour en juin 2026. | Niveau de sécurité à proportionner à une PME. | Introduire trois niveaux de diligence selon données, exposition et continuité. |
| [Australian Government Architecture — procurement and sourcing](https://architecture.digital.gov.au/capability/procurement-and-sourcing) | Australie | Replace le sourcing dans tout le cycle de vie et fournit cadres/clauses. | Référence gouvernementale actuelle. | Contexte australien. | Comparer exploitation et sortie, pas seulement réalisation. |

## 4. Matrice de gain d'information

| Question décisive | Meilleure réponse française | Apport international | Couverture actuelle | Manque | Réponse supérieure à produire |
| --- | --- | --- | --- | --- | --- |
| Agence ou freelance ? | Le guide répond justement qu'aucun statut ne gagne par nature. | Les playbooks évaluent capacité, personnes, résilience et modèle de livraison. | Très bonne. | Continuité non quantifiée et sous-traitants peu visibles. | Carte nominative : personne, rôle, disponibilité, suppléant, sous-traitance et coût. |
| Les candidats comprennent-ils le métier ? | Le mini-cas commun produit de vraies questions. | Digital.gov ajoute recherche utilisateur et bac à sable. | Excellente. | Pas de barème ni de trace d'hypothèse invalidée. | Noter reformulation, inconnues, simplification proposée et preuve à obtenir. |
| Les devis couvrent-ils le même travail ? | Décomposition qualitative solide. | GOV.UK impose coût total et droits sur données/règles. | Moyenne. | Aucun devis rempli ni horizon commun. | Trois offres fictives sur 36 mois avec coût interne, support et sortie. |
| Le prestataire sait-il livrer ? | Références et entretien sont bien traités. | Revue de dépôt, prototype et acceptation ajoutent une preuve directe. | Bonne. | Portfolio encore déclaratif ; pas de test pratique proportionné. | Démonstration annotée ou pilote payé sur le risque dominant. |
| Le logiciel sera-t-il sécurisé ? | RGPD et dépendances sont évoqués. | NIST/ASD couvrent SDLC, provenance, tiers et résilience. | Faible à moyenne. | Aucun niveau de diligence ni livrable sécurité. | Questionnaire court : données, accès, secrets, dépendances, correctifs, incidents, sauvegarde et restitution. |
| Forfait ou temps passé ? | Le guide ne donne pas de règle de choix. | Digital.gov distingue incertitude du sur-mesure et achat d'un produit existant. | Faible. | Risque de faux forfait et changements non gouvernés. | Choisir modèle selon incertitude, jalons et droit d'arrêter ; jamais par idéologie. |
| Qui assume le temps client ? | Les responsabilités sont listées. | Les cadres étrangers suivent gouvernance et dépendances. | Moyenne. | Heures internes invisibles dans le prix. | Budgeter product owner, utilisateurs, données et sécurité dans le TCO. |
| Une mission préparatoire vaut-elle son prix ? | La FAQ la propose si les offres sont incomparables. | GOV.UK recommande prototype et réversibilité de décision. | Faible. | Aucun seuil de risque évité. | Pilote : coût, exposition, baisse minimale de probabilité et décision de suite. |
| Comment éviter l'enfermement ? | Code, données, comptes, documentation et assistance sont couverts. | GOV.UK demande propriété des règles et clauses de rupture. | Bonne. | Pas de test de restauration/reprise ni coût de sortie. | Exercice de sortie chiffré avant solde ou renouvellement. |
| Comment assumer le choix ? | Résumé en six phrases très utile. | Les matrices publiques documentent arbitrage et risques. | Bonne. | Absence de poids et de contrôles éliminatoires. | Garde-fous d'abord, score pondéré ensuite, justification et signaux de révision. |

## 5. Faits et fraîcheur

| Affirmation ou sous-entendu | Verdict | Source primaire actuelle | Périmètre et date | Correction |
| --- | --- | --- | --- | --- |
| Agence et freelance ne préjugent pas de la continuité réelle. | Juste comme principe de sélection. | Équipe, contrats et preuves propres au candidat. | À vérifier offre par offre. | Conserver ; demander personnes nommées, disponibilité et suppléance. |
| L'immatriculation prouve que le prestataire livrera. | Faux ; le guide ne fait heureusement pas cette erreur. | Registre national des entreprises. | Existence administrative seulement. | Conserver la distinction existence/compétence. |
| Une attestation d'assurance prouve la qualité. | Faux ; le guide le dit. | Contrat et attestation concernés. | Couverture précise, validité et exclusions à vérifier. | Conserver sans généraliser la nécessité d'une assurance particulière. |
| Le prestataire sera toujours « sous-traitant RGPD ». | Faux comme absolu. | [CNIL — sous-traitant](https://www.cnil.fr/fr/sous-traitant) | Dépend des traitements et rôles réels. | Cartographier finalités, instructions et sous-traitants ultérieurs. |
| Payer le développement transfère automatiquement tous les droits. | Faux. | [Article L131-3](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958) | Droit français ; contrat et nature de chaque actif. | Conserver la prudence et faire relire si enjeu substantiel. |
| Un score élevé compense une absence de sauvegarde ou de droit de reprise. | Faux. | Décision de risque interne. | Garde-fous à définir selon criticité. | Séparer conditions éliminatoires et critères pondérés. |
| Un forfait protège toujours le budget. | Faux comme absolu. | Contrat, hypothèses, changements et acceptation. | Dépend de l'incertitude et de la gouvernance. | Comparer risque déplacé, marge de précaution et coût des changements. |
| Un pilote réduit nécessairement le risque. | Non démontré. | Résultat et décision produits par le pilote. | Un pilote sans hypothèse testable peut seulement retarder. | Nommer l'incertitude, le seuil et le droit d'arrêter. |
| Une certification ou un cadre NIST garantit la sécurité du produit livré. | Faux. | NIST SSDF et diligence fournisseur. | Pratiques et preuves, pas garantie générale. | Demander preuves proportionnées et contrôles du résultat. |

### Contradictions et raccourcis à corriger

- Le guide déconseille d'additionner des notes trop tôt, mais ne donne ensuite
  aucun moyen reproductible de départager deux offres survivantes.
- Il demande le coût de sortie sans le faire entrer dans le prix comparé.
- Il valorise la continuité sans chiffrer le temps interne, les absences et la
  dépendance à une personne.
- Il propose une mission préparatoire sans dire quelle incertitude elle achète
  ni quelle décision peut arrêter le projet.
- Il traite le RGPD et les droits avec prudence, mais la sécurité du processus
  de développement reste nettement moins opérationnelle.

### Faits à retirer plutôt qu'à affaiblir

- Tout pourcentage universel de projets en échec ou de productivité sans étude
  primaire applicable au contexte.
- Toute règle agence > freelance ou inversement.
- Tout tarif moyen présenté comme prédictif sans périmètre, date et dispersion.
- Toute promesse qu'une technologie, certification ou méthode garantit délai,
  budget, sécurité ou qualité.
- Toute formule selon laquelle le moins-disant est nécessairement dangereux.

## 6. Scénarios et calculs à construire

Tous les montants et taux ci-dessous sont des **hypothèses fictives
illustratives**, ni tarifs Hagnéré Code ni moyennes de marché. Même cas : une
application utilisée par 12 personnes, avec reprise de données, mise en
production, support et sortie comparés sur 36 mois.

### 6.1 Comparer trois offres sur le même TCO à 36 mois

| Poste | Offre A — forfait réduit | Offre B — équipe intégrée | Offre C — cadrage puis lots |
| --- | ---: | ---: | ---: |
| Réalisation initiale | 58 000 € | 82 000 € | 95 000 € |
| Reprise de données non incluse | 12 000 € | incluse | incluse |
| Hébergement/licences sur 3 ans | 2 400 € × 3 | 3 000 € × 3 | 2 400 € × 3 |
| Support sur 3 ans | 6 000 € × 3 | 9 600 € × 3 | 8 000 € × 3 |
| Temps interne | 360 h × 48 € | 220 h × 48 € | 260 h × 48 € |
| Sortie/documentation | 3 000 € | 4 500 € | 4 000 € |
| **TCO 36 mois** | **115 480 €** | **134 860 €** | **142 680 €** |

```text
Formule : initial + reprise + 3 × récurrents + heures internes × coût + sortie
Horizon : 36 mois
Inclus : même besoin, reprise, exploitation, temps client et sortie
Exclus : TVA, financement, nouvelles fonctions et gain métier
Résultat : A est réellement la moins chère de 19 380 € face à B ; elle doit gagner si elle franchit les garde-fous
Analyse de sensibilité : 19 380 € équivalent à 403,75 h internes à 48 €/h ou à un risque métier à documenter
Variable de bascule : exclusion cachée, incapacité de livraison ou exposition dont la valeur dépasse l'écart
Contrôle inverse : 58 000 + 12 000 + 7 200 + 18 000 + 17 280 + 3 000 = 115 480 €
```

### 6.2 Rendre visible la contribution interne

| Contribution | Hypothèse | Coût |
| --- | ---: | ---: |
| Référent métier / product owner | 100 h × 65 € | 6 500 € |
| Douze utilisateurs | 12 × 8 h × 38 € | 3 648 € |
| Responsable des données | 50 h × 52 € | 2 600 € |
| Informatique / sécurité | 36 h × 60 € | 2 160 € |
| **Total interne** | **282 h** | **14 908 €** |

```text
Formule : somme des heures par rôle × coût complet retenu
Horizon : cadrage, démonstrations, recette et déploiement du projet
Inclus : temps directement mobilisé ; valorisation économique, pas sortie de trésorerie additionnelle
Exclus : coût d'opportunité non mesuré et exploitation récurrente
Résultat : une offre « 80 000 € » peut mobiliser 14 908 € internes avant support
Analyse de sensibilité : moitié des heures = 7 454 € ; double = 29 816 €
Variable de bascule : responsabilités réellement laissées au client
Contrôle inverse : 6 500 + 3 648 + 2 600 + 2 160 = 14 908 €
```

### 6.3 Classer les offres après les garde-fous

Poids : compréhension 20 %, livraison/acceptation 20 %, sécurité 15 %,
continuité 15 %, TCO 15 %, sortie 10 %, preuves 5 %. Notes fictives sur 10.

| Critère | Poids | A | B | C |
| --- | ---: | ---: | ---: | ---: |
| Compréhension métier | 20 | 7 | 8 | 9 |
| Livraison et acceptation | 20 | 6 | 9 | 8 |
| Sécurité proportionnée | 15 | 5 | 8 | 9 |
| Continuité de l'équipe | 15 | 6 | 8 | 7 |
| TCO | 15 | 9 | 7 | 6 |
| Sortie | 10 | 5 | 8 | 9 |
| Preuves | 5 | 6 | 8 | 7 |
| **Score /100** | **100** | **64** | **80,5** | **79,5** |

```text
Formule : somme(note /10 × poids)
Horizon : décision initiale, à revoir après pilote ou changement d'équipe
Inclus : critères propres au cas et mêmes traces demandées
Exclus : garde-fous éliminatoires ; une absence de sauvegarde ne se compense pas par le prix
Résultat : B devance C d'un point ; A reste possible seulement si ses lacunes ne sont pas des exigences minimales
Analyse de sensibilité : déplacer 5 points du TCO vers la sécurité baisse A de 2 points et augmente C de 1,5 point
Variable de bascule : poids approuvés par le dirigeant avant lecture des offres
Contrôle inverse : offre B = 8×2 + 9×2 + 8×1,5 + 8×1,5 + 7×1,5 + 8×1 + 8×0,5 = 80,5
```

### 6.4 Acheter un pilote seulement s'il teste une vraie incertitude

| Poste ou hypothèse | Valeur fictive |
| --- | ---: |
| Pilote externe | 14 000 € |
| Temps interne | 80 h × 48 € = 3 840 € |
| **Coût total du pilote** | **17 840 €** |
| Perte exposée sur le projet complet | 120 000 € |
| Probabilité de perte estimée avant / après | 25 % / 8 % |
| Perte espérée évitée | (25 % − 8 %) × 120 000 € = 20 400 € |
| Valeur nette espérée | 20 400 € − 17 840 € = **2 560 €** |

```text
Formule : baisse de probabilité × exposition − coût total du pilote
Horizon : décision avant engagement du projet complet
Inclus : une incertitude testable, le temps interne et le droit d'arrêter
Exclus : probabilités présentées comme faits ; elles doivent être estimées par l'entreprise
Résultat illustratif : le pilote crée 2 560 € de valeur espérée
Analyse de sensibilité : seuil = 17 840 / 120 000 = 14,87 points de probabilité
Variable de bascule : baisse crédible du risque ou valeur d'une décision anticipée
Contrôle inverse : 0,17 × 120 000 = 20 400 ; 20 400 − 17 840 = 2 560 €
```

## 7. Comparaison et position professionnelle

```text
Options réellement comparables : reporter ; cadrage seul ; freelance ; agence ; équipe mixte ; solution existante avec intégration.
Périmètre et horizon communs : même résultat métier, reprise, utilisateurs, tests, mise en ligne, support, temps interne et sortie sur 36 mois.
Option la moins chère : l'offre A dans le scénario ; elle doit gagner si les exigences minimales et les preuves sont satisfaites.
Option la moins risquée : pas un statut ; l'équipe dont les inconnues, acceptations, personnes, sécurité et sortie sont prouvées au niveau requis.
Option qui demande le moins de temps interne : celle qui prend réellement en charge les travaux nommés ; jamais une promesse générale « clé en main ».
Position Hagnéré Code pour le cas fréquent : éliminer sur cinq garde-fous, comparer le TCO des survivants, puis pondérer seulement les différences qui comptent pour ce projet.
Faits qui la fondent : les cadres publics convergent sur besoin, coût total, acceptation, fournisseur, données, sécurité et sortie ; aucun ne fait gagner une agence ou une technologie par étiquette.
Cas où l'option opposée gagne : un freelance peut gagner avec périmètre clair et continuité organisée ; une agence peut gagner si plusieurs disciplines sont réellement mobilisées ; reporter gagne si l'acceptation et les données restent indéfinies.
Signal de révision : personne clé changée, exclusion nouvelle, pilote non concluant, preuve de sécurité absente ou TCO révisé au-delà du seuil approuvé.
Ce que nous déconseillons même si nous pourrions le vendre : un gros forfait pour acheter une impression de certitude alors que le besoin et les règles restent inconnus.
```

Les cinq garde-fous proposés sont : une personne responsable et disponible, un
scénario d'acceptation observable, un accès maîtrisé aux données/comptes, une
sauvegarde/restauration proportionnée et une sortie minimale documentée. Ils
doivent être adaptés à la criticité, pas copiés comme exigences universelles.

Conflit d'intérêts : Hagnéré Code vend du développement et de la maintenance.
La recommandation doit donc laisser gagner un logiciel existant, un freelance,
le report ou l'offre la moins chère dès que les preuves et le coût total le
justifient.

## 8. Objections et cas limites

| Objection loyale | Réponse prouvée | Incertitude restante | Conséquence |
| --- | --- | --- | --- |
| « L'agence est plus sûre qu'un indépendant. » | Le nombre de salariés ne révèle ni personnes affectées ni dépendance réelle. | Turnover, sous-traitance et disponibilité. | Demander noms, charge, suppléance et preuve de continuité. |
| « Le moins cher cache forcément quelque chose. » | Un périmètre simplifié peut expliquer un prix inférieur. | Exclusions ou sous-estimation. | Aligner le TCO et laisser gagner le moins cher s'il passe les garde-fous. |
| « Nous voulons un prix ferme avant de perdre du temps. » | Un prix ferme peut intégrer une marge de risque ou déplacer le risque vers les changements. | Degré réel d'incertitude. | Acheter un cadrage court ou définir hypothèses et mécanisme de changement. |
| « Une référence dans notre secteur suffit. » | Une référence prouve seulement une partie du travail et peut concerner une autre équipe. | Rôle exact du candidat et maintien actuel. | Appeler avec accord, demander difficultés, changements et personnes. |
| « Le prestataire est certifié, donc le logiciel sera sécurisé. » | Un cadre ou certificat ne remplace pas les contrôles du projet livré. | Portée et validité de la preuve. | Relier chaque exigence à une pratique et une trace. |
| « Le code nous appartient puisque nous payons. » | Les droits, licences et actifs doivent être distingués contractuellement. | Contrat concret et composants tiers. | Inventaire et avis juridique si enjeu élevé. |
| « Un pilote est du budget perdu. » | Il peut acheter une décision si la baisse minimale de risque dépasse son coût. | Estimation de l'exposition et de la probabilité. | Calculer le seuil avant de commander le pilote. |
| « Nous n'avons pas le temps de mobiliser nos équipes. » | Les règles, données et acceptations ne peuvent pas être totalement externalisées. | Capacité et coût d'opportunité. | Réduire le périmètre, nommer un responsable ou reporter. |
| « Le RGPD concerne seulement l'hébergeur. » | Les rôles et responsabilités dépendent des traitements réels. | Finalités et architecture. | Cartographier données, instructions, tiers et restitution. |
| « Nous choisirons au feeling après les rendez-vous. » | Une impression peut compléter, mais pas reconstruire, les preuves. | Compatibilité humaine réelle. | Figer critères/poids avant les entretiens et documenter l'écart. |

## 9. Plan de réécriture

| Ordre | Section proposée | Question résolue | Preuve, scénario ou outil | Décision produite | Action |
| ---: | --- | --- | --- | --- | --- |
| 1 | Trois offres, une seule base de comparaison | Que doit comprendre le lecteur immédiatement ? | Contrat des 150 mots | Éliminer, comparer ou cadrer | Réécrire l'annonce |
| 2 | Commencez par cinq garde-fous | Qu'est-ce qui ne se compense pas ? | Acceptation, équipe, données, restauration, sortie | Élimination proportionnée | Créer |
| 3 | Donnez le même cas aux candidats | Comprennent-ils le besoin ? | Atelier Mercure | Preuve de raisonnement | Conserver |
| 4 | Menez le même entretien | Qui fera quoi et comment ? | Entretien d'une heure | Questions comparables | Conserver, resserrer |
| 5 | Demandez sept traces, dont la sécurité | Quelle promesse est observable ? | NIST/ASD adapté | Niveau de preuve | Enrichir |
| 6 | Faites remplir les trois TCO | Quel est le vrai prix ? | Scénarios 6.1 et 6.2 | Coût 36 mois | Créer |
| 7 | Notez les survivants | Comment arbitrer sans faux chiffre scientifique ? | Scénario 6.3 | Classement explicable | Créer |
| 8 | Achetez un pilote si son seuil tient | Quelle incertitude mérite un test ? | Scénario 6.4 | Piloter, signer ou arrêter | Créer |
| 9 | Vérifiez références et existence | Que prouvent les documents ? | RNE, appels, traces | Valider sans surinterpréter | Conserver |
| 10 | Contrat, données, droits et sortie | Que récupérez-vous ? | CNIL, L131-3, exercice de reprise | Risque résiduel | Enrichir |
| 11 | Écrivez la décision en six phrases | Qui gagne et pourquoi ? | Résumé + signaux de révision | Décision assumée | Conserver |
| 12 | Position Hagnéré Code et CTA | Quand un cadrage externe aide-t-il ? | Bon/mauvais fit, livrable | Contact ou autonomie | Préciser |

### Contrat des 150 premiers mots

- Reprendre la scène des trois offres et dire tout de suite qu'aucun statut ni
  prix ne suffit.
- Promettre cinq garde-fous, un TCO à 36 mois, un score pondéré et le seuil
  économique d'un pilote.
- Répondre immédiatement : **éliminez les offres qui échouent à une exigence
  vitale ; parmi les autres, laissez gagner celle qui apporte les preuves
  nécessaires au meilleur coût total**.
- Dire explicitement que l'offre la moins chère peut être la meilleure.

### Éléments à supprimer

- Toute nouvelle liste sans trace, seuil ou conséquence.
- Les formulations qui rapprochent implicitement prix élevé et couverture.
- Les questions administratives qui ne changent aucune décision.
- Les sources regroupées loin de l'affirmation lorsqu'elles portent une
  obligation ou une date.

### Éléments à conserver

- Le cas Atelier Mercure.
- L'entretien identique.
- Les six engagements, étendus à une trace sécurité proportionnée.
- Le refus du duel agence/freelance.
- Les références par difficulté plutôt que par secteur.
- La prudence sur attestations, RGPD et propriété intellectuelle.
- La maintenance, la sortie et les six phrases finales.

## 10. Contre-audit après correction

La page publique reste inchangée.

| Problème | Priorité | Correction appliquée | Revalidation indépendante |
| --- | --- | --- | --- |
| Aucun TCO constant sur 36 mois | P1 | En attente | Refaire les trois calculs avec mêmes inclusions |
| Temps interne absent | P1 | En attente | Valider heures et coûts avec rôles réels |
| Aucun garde-fou explicite | P1 | En attente | Tester qu'une note ne compense pas un risque vital |
| Aucun score pondéré exploitable | P1 | En attente | Figer poids avant lecture des offres |
| Pilote conseillé sans seuil | P1 | En attente | Recalculer exposition et baisse minimale |
| Diligence sécurité trop faible | P1 | En attente | Expert sécurité selon criticité |
| Modèle forfait/temps passé non traité | P2 | En attente | Tester contre incertitude et mécanisme de changement |
| CTA sans livrable nommé | P2 | En attente | Nommer grille, TCO, risques et recommandation |
| Densité mobile future des tableaux | P2 | En attente | Rendu réel à 390 px |
| Fait faux ou juridiquement dangereux | P0 | Aucun à ce snapshot | Nouvelle revue après réécriture |

### Score après correction

| Axe | Note /10 | Preuve localisable | Manque résiduel |
| --- | ---: | --- | --- |
| Intention | — | Non recalculé | Réécriture non effectuée |
| Décision | — | Non recalculé | Réécriture non effectuée |
| Pédagogie | — | Non recalculé | Réécriture non effectuée |
| Profondeur | — | Non recalculé | Réécriture non effectuée |
| Preuve | — | Non recalculé | Réécriture non effectuée |
| Comparaison | — | Non recalculé | Réécriture non effectuée |
| Originalité | — | Non recalculé | Réécriture non effectuée |
| Style | — | Non recalculé | Réécriture non effectuée |
| Conversion | — | Non recalculé | Réécriture non effectuée |
| SEO/produit | — | Non recalculé | Réécriture non effectuée |

Total : **non calculé**

Objectif : **90/100 minimum**, aucun axe sous 8, six axes obligatoires à 9 ou
10, après contre-audit indépendant et test mobile réel.

## 11. Preuves techniques et visuelles

```text
Manifeste : aucun manifeste créé ; audit uniquement
Lecture intégrale : 773 lignes, 4 017 mots, snapshot SHA-256 figé
Calculs refaits : oui — trois TCO, contribution interne, score pondéré et pilote
Sources rouvertes : oui — France, États-Unis, Royaume-Uni et Australie ; priorité aux sources publiques primaires
Sources commerciales : ouvertes uniquement pour benchmark ; aucun chiffre concurrent repris comme fait
Fraîcheur : dates et périmètres volatils indiqués ; NIST SP 1326 du 8 juillet 2026
Liens : URLs directes documentées ; contrôle HTTP à refaire au moment de la réécriture
Rendu 320 / 390 / 768 / 1024 / 1440 : non exécuté, aucune page modifiée
Statut maximal prouvé : audité ; plan de réécriture documenté
Réserve publication / indexation : aucune correction publique n'est effectuée ; cet audit ne prouve ni nouvelle indexation ni classement
```
