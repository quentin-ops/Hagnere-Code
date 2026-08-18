# Audit approfondi — `automatiser-processus-metier`

Date : **24 juillet 2026**

Auditeur concurrentiel : orchestrateur du giga-audit

Snapshot du guide :
`src/app/guides/automatiser-processus-metier/page.tsx`, SHA-256
`0783546f8b415c5ef6fffe73b390082db9dd57050966c4e4fdca632e978cc69b`.

Périmètre : lecture froide, recherche France/international, sources primaires,
calculs, pédagogie dirigeant, décision, conversion et risques visibles dans le
code. Aucun fichier public n'a été modifié. Aucun contrôle dans un vrai
navigateur n'est revendiqué dans cette passe.

## 1. Verdict exécutif

```text
Lecteur exact : dirigeant de TPE/PME qui voit plusieurs ressaisies ou relances et ne sait ni laquelle traiter d'abord, ni s'il faut acheter ou développer
Question réelle : quel premier processus automatiser sans déplacer le problème ni surpayer un outil ?
Décision attendue : choisir, simplifier, tester, reporter ou abandonner un premier cas
Réponse actuelle : commencer par une tâche fréquente, stable, mesurable, réversible et facile à reprendre à la main
Défaut qui coûte le plus de valeur : le guide promet un coût/rentabilité « complets » alors que le modèle ne chiffre que des coûts connus et valorise surtout de la capacité, puis compare six réponses sans coût commun
Niveau actuel : B+
Priorité : haute
Statut : audité / retour P1 puis réécriture P2 nécessaire
```

Le guide est déjà nettement plus honnête et plus humain que de nombreux
contenus concurrents. Il commence par le travail vécu, conseille de supprimer
une étape avant d'acheter, qualifie l'exemple fictif, sépare le temps libéré
d'une économie automatique, prévoit les échecs et peut conclure qu'il ne faut
rien développer.

Il n'atteint pourtant pas la charte renforcée. Le lecteur sait **quel type de
tâche choisir**, mais pas encore **quelle solution gagne économiquement dans
trois situations contrastées**. La comparaison des six réponses reste
qualitative. Le modèle financier est algébriquement juste sur ses hypothèses,
mais son vocabulaire lui donne une portée trop large : une heure réaffectée
valorisée au coût salarial est une valeur de capacité, pas nécessairement un
gain de trésorerie ni un bénéfice économique de même montant.

### Score avant correction

| Axe | Note /10 | Preuve localisable | Manque décisif |
| --- | ---: | --- | --- |
| Intention | 9 | lignes 232–250 : situation, définition et réponse immédiate | la promesse de coût complet dépasse ensuite le modèle |
| Décision | 8 | six réponses, cas à reporter et plan de sept jours | aucun verdict chiffré par profil ou seuil de bascule |
| Pédagogie | 9 | vocabulaire simple, termes techniques traduits, exemple cohérent | capacité, économie de trésorerie et bénéfice restent fusionnés |
| Profondeur | 8 | observation, coût, exploitation, tests, responsabilité et sortie évoqués | adoption, données, sécurité, coexistence et coûts d'échec peu modélisés |
| Preuve | 7 | France Num, Insee, Anact et CNIL, reliés aux faits | corpus inférieur au plancher ; aucune recherche internationale dans le dossier initial |
| Comparaison | 7 | six solutions et cinq tâches sont mises en regard | fonctions, horizon, charge interne et sortie ne sont pas constants |
| Originalité | 8 | fiche de tâche, choix non compensatoire, décision d'attendre | aucun actif éditable complet ni suivi 30/90 jours |
| Style | 9 | voix calme, concrète, sans dramatisation | quelques promesses de complétude et une structure numérotée très régulière |
| Conversion | 8 | CTA crédible et mauvais fits visibles | le résultat de l'échange et l'actif autonome peuvent être plus concrets |
| SEO/produit | 7 | titre, H1, canonical, maillage et sources cohérents | temps de lecture divergent, hiérarchie H2/H3 incohérente et tableaux mobiles non contrôlés |
| **Total** | **80/100** | **base pédagogique solide** | **preuves, comparaison et économie n'atteignent pas la porte** |

## 2. Ce que le guide dit réellement

- Les 150 premiers mots répondent correctement : une seule tâche fréquente,
  stable et facile à contrôler avant tout projet plus large.
- La progression va de l'observation à la sélection, puis aux six réponses, au
  calcul, aux responsabilités, aux tests et au report.
- L'option « ne rien faire », la simplification, une fonction existante, un
  connecteur, l'assistance avec validation et le sur-mesure sont toutes
  présentes.
- L'exemple de 345 heures et 16 114,40 € de coûts connus est reproductible.
- Les calculs de ROI et de délai de retour sont exacts **dans le modèle
  choisi**, mais le résultat reste très sensible au taux de temps réellement
  réaffecté.
- Le guide ne traite pas assez la différence entre argent économisé, embauche
  évitée, capacité libérée, chiffre d'affaires additionnel et confort de
  travail.
- Les six solutions paraissent comparées, mais aucune n'est chiffrée sur le
  même flux, le même horizon et les mêmes responsabilités.
- Le CTA permet honnêtement de conclure à une amélioration simple ou à
  l'absence de développement.

## 3. Benchmark France et international

Requêtes et date :

- France : `automatiser processus métier PME choisir processus ROI`,
  `automatisation entreprise coûts erreurs` ;
- États-Unis : `business process automation choose process ROI small
  business` ;
- Royaume-Uni : `business process automation SME where to start cost ROI` ;
- Canada : `what should an SME automate first` ;
- Australie : `business process automation ROI cost traps` ;
- consultation : **24 juillet 2026**.

### Saturation

Après les contenus français et anglophones ouverts, les nouvelles pages
répètent surtout cinq familles : définition, tâches répétitives, outils,
méthode en quatre ou cinq étapes et ROI spectaculaire. La recherche cesse
d'apporter de nouveau type de réponse lorsque reviennent les mêmes listes de
facturation, CRM, relances, reporting et support.

Les gains d'information encore rares sont :

1. séparer capacité, trésorerie, risque et revenu au lieu de les additionner ;
2. comparer six réponses sur le même cas et le même horizon ;
3. faire perdre le sur-mesure dans au moins un scénario ;
4. intégrer exception, qualité d'entrée, propriétaire, retour manuel et coût
   de changement dans la décision initiale ;
5. suivre l'écart entre estimation et résultat à 30 puis 90 jours ;
6. publier un classeur réutilisable qui peut conclure « ne pas automatiser ».

| Ressource et URL directe | Pays | Réponse utile | Preuve, outil ou exemple | Limite | Apport à adapter |
| --- | --- | --- | --- | --- | --- |
| [France Num — automatisation TPE-PME](https://www.francenum.gouv.fr/guides-et-conseils/pilotage-de-lentreprise/numerisation-des-processus/lautomatisation-une-solution) | France | mesure fréquence × durée × personnes, complexité et impact ; cartographie, test et maintenance | source publique mise à jour le 9 juillet 2026 | certains prix ou promesses générales ne constituent pas un benchmark | conserver la méthode, préciser le risque non compensatoire |
| [Volteyr — guide automatisation 2026](https://www.volteyr.com/ressources/insights/automatisation-entreprise-guide-complet-2026) | France | ouverture rapide, catégories, outils et cas chiffrés | chiffres internes et cas clients affichés | intérêt commercial et méthodologie des ratios insuffisamment visible | gagner par la reproductibilité plutôt que par des pourcentages spectaculaires |
| [Blink — automatisation PME](https://fr-blink.com/articles/automatisation-des-processus-en-pme-le-guide-complet-2026) | France | cinq cas concrets et méthode courte | nombreux chiffres et outils nommés | plusieurs statistiques ou généralisations exigent une remontée à la source primaire | montrer les limites et les cas où automatiser dégrade le résultat |
| [Leadership Services — BPA for SMEs](https://leadership-services.co.uk/insights/business-process-automation-smes-where-to-start-2026/) | Royaume-Uni | volume, règle, stabilité, mesure, coûts et erreurs fréquentes | fourchettes et recommandations par contexte britannique | contenu commercial ; plusieurs ratios sont secondaires et non transposables | ajouter coût, change management et secteur sans reprendre les ratios |
| [Osher Digital — ROI of BPA](https://osher.com.au/blog/roi-business-process-automation-comprehensive-guide/) | Australie | distingue temps libéré et argent, inclut maintenance et réalité du déploiement | modèle financier détaillé et contre-exemples | contenu d'agence et montants australiens | renforcer fortement la séparation capacité/trésorerie et l'analyse de sensibilité |
| [Mapageweb — What should an SME automate first?](https://www.mapageweb.ca/en/insights/what-should-an-sme-automate-first) | Canada | transfert fréquent, règles, entrée fiable, propriétaire et échec détectable | checklist très concise, revue le 17 juillet 2026 | page commerciale courte, pas de modèle économique | compléter la grille initiale par qualité des données, propriétaire et exception |
| [Insee — coût horaire du travail](https://www.insee.fr/fr/statistiques/2381340) | France | 44,20 € en services marchands en 2025 | statistique primaire, champ et date explicites | entreprises de 10 salariés ou plus ; ce coût n'est pas la valeur économique universelle d'une heure | conserver comme hypothèse de coût, pas comme bénéfice automatique |
| [CNIL — décision entièrement automatisée](https://www.cnil.fr/fr/profilage-et-decision-entierement-automatisee) | France/UE | champ de l'article 22 pour les décisions exclusivement automatisées à effet juridique ou significatif | autorité de contrôle | ne concerne pas toute automatisation ni tous les contrôles humains | conserver la nuance et ajouter le cas où une validation humaine doit être réelle |

Les pages commerciales étrangères servent à cartographier l'offre éditoriale,
pas à prouver un coût français. Les faits du futur guide doivent rester reliés
à France Num, Insee, CNIL, Anact ou à une autre source primaire pertinente.

## 4. Matrice de gain d'information

| Question décisive | Meilleure réponse française | Apport international | Couverture actuelle | Manque réel | Réponse supérieure à produire |
| --- | --- | --- | --- | --- | --- |
| Quel processus commencer ? | volume, répétition, simplicité | entrée fiable, propriétaire, échec visible et stabilité | bonne sur gain/stabilité/risque | qualité des données, taux d'exception, propriétaire et dépendances | grille à huit critères avec quatre motifs d'arrêt non compensatoires |
| Faut-il automatiser ? | listes de cas fréquents | simplifier et mesurer avant l'outil | bon contre-cas « supprimer l'étape » | coût du statu quo comparé au coût de changement | trois décisions chiffrées : simplifier, connecter, développer |
| Combien vaut le temps libéré ? | fréquence × durée × coût horaire | distinction forte entre capacité et trésorerie | taux de réaffectation explicite | le mot bénéfice reste trop large | quatre lignes séparées : cash, capacité, risque attendu, revenu attribuable |
| Quelle solution choisir ? | outil existant, no-code, IA, sur-mesure | coût, maintenance et change management | six options qualitatives | aucun horizon commun ni charge interne | TCO 12/36 mois pour un même flux, avec options gagnantes différentes |
| Que se passe-t-il en cas d'échec ? | test et maintenance | exception owner, retry et observabilité | six tests utiles | coût et priorité des échecs non chiffrés | budget d'exploitation, seuil d'alerte et temps maximal de reprise |
| Comment prouver la valeur ? | heures et erreurs avant/après | écart prévision/réalisation et adoption | indicateurs cités | aucun relevé 30/90 jours ni règle d'arrêt économique | tableau prévu/réalisé, responsable, décision poursuivre/corriger/arrêter |
| Que puis-je utiliser sans agence ? | checklists intégrées | worksheet et ROI model | fiche copiable dispersée | aucun fichier partageable complet | classeur éditable avec exemple rempli et conclusion « ne pas investir » |

## 5. Faits, fraîcheur et calculs

| Affirmation du guide | Verdict | Source primaire actuelle | Périmètre et date | Correction |
| --- | --- | --- | --- | --- |
| Cartographier étapes, informations, exceptions et personnes avant d'automatiser | confirmé | [France Num](https://www.francenum.gouv.fr/guides-et-conseils/pilotage-de-lentreprise/numerisation-des-processus/lautomatisation-une-solution) | TPE/PME ; mise à jour 9 juillet 2026 | conserver |
| Prioriser par temps, complexité et impact d'erreur | confirmé | [France Num](https://www.francenum.gouv.fr/guides-et-conseils/pilotage-de-lentreprise/numerisation-des-processus/lautomatisation-une-solution) | méthode générale | conserver, mais ne pas rendre compensable un risque critique |
| 44,20 € est le coût horaire 2025 des services marchands | confirmé avec périmètre | [Insee](https://www.insee.fr/fr/statistiques/2381340) | France, entreprises de 10 salariés ou plus, apprentis inclus ; publié 2 juillet 2026 | conserver le champ visible |
| L'article 22 encadre certaines décisions entièrement automatisées | confirmé | [CNIL](https://www.cnil.fr/fr/profilage-et-decision-entierement-automatisee) | personnes, données personnelles, décision exclusivement automatisée à effet juridique ou significatif | conserver la nuance ; ne pas généraliser |
| Le guide calcule un coût complet | faux par rapport au visible | le tableau exclut sortie et fiscalité ; le texte le reconnaît | snapshot audité | écrire « coûts connus » ou compléter réellement le modèle |
| Le guide calcule une rentabilité complète | à nuancer fortement | le modèle n'intègre ni adoption, montée en charge, coût d'échec, sortie, fiscalité ni bénéfice cash distinct | snapshot audité | écrire « simulation partielle » et séparer les quatre catégories de valeur |

### Recalcul indépendant du scénario visible

```text
Temps annuel = ((30 × 12 / 60) + 1,5) × 46
             = 345 h

Coût connu = 1 600 + 5 000 + (32 × 44,20) + (75 × 36) + (150 × 36)
           = 16 114,40 €

Valeur de capacité centrale = 345 × 70 % × 44,20
                            = 10 674,30 €/an

Valeur cumulée = 10 674,30 × 3
               = 32 022,90 €

Écart provisoire = 32 022,90 - 16 114,40
                 = 15 908,50 €

Ratio provisoire = 15 908,50 / 16 114,40 × 100
                 = 98,72 %

Coût initial = 1 600 + 5 000 + 1 414,40
             = 8 014,40 €

Charge annuelle récurrente = (2 700 + 5 400) / 3
                           = 2 700 €

Retour après mise en service = 8 014,40 / (10 674,30 - 2 700) × 12
                             = 12,06 mois
```

Les opérations sont exactes. Le défaut est sémantique et décisionnel : la
valeur de capacité n'est un bénéfice monétaire que si sa réaffectation produit
une valeur mesurable ou évite une dépense.

### Sensibilité manquante à publier

En conservant le même flux et les mêmes coûts :

| Part réellement réaffectée | Valeur annuelle de capacité | Ratio à 36 mois | Retour après mise en service | Décision probable |
| ---: | ---: | ---: | ---: | --- |
| 20 % | 3 049,80 € | -43,22 % | environ 275 mois | ne pas investir sur ce seul motif |
| 40 % | 6 099,60 € | 13,55 % | environ 28,3 mois | test limité, seulement si les risques restent bas |
| 70 % | 10 674,30 € | 98,72 % | environ 12,1 mois | projet défendable si l'adoption et les coûts exclus sont contrôlés |

Une hausse de 25 % du coût initial ramène le ratio du scénario à 40 % proche
de zéro sur 36 mois. Cette sensibilité doit être visible : elle montre que le
verdict dépend davantage de l'usage réel que d'un taux de ROI séduisant.

### Contradictions

- `page.tsx:187` annonce « un calcul de rentabilité complet » ;
- `page.tsx:248` annonce « calculer le coût complet » ;
- `page.tsx:637` affiche « total connu » ;
- `page.tsx:672–675` confirme que plusieurs postes sont exclus ;
- le dossier de recherche qualifie correctement le résultat de socle chiffré,
  mais cette prudence n'a pas été réconciliée avec le hero.

## 6. Défauts classés

### P0

Aucun P0 factuel, juridique ou arithmétique confirmé sur ce snapshot.

### P1 — blocages avant nouvelle validation

| ID | Localisation | Défaut | Conséquence | Correction exigée |
| --- | --- | --- | --- | --- |
| P1-01 | lignes 187, 245–250, 637, 672–675 | « complet » contredit les coûts exclus | le lecteur peut surestimer la solidité du ROI | remplacer la promesse par « simulation partielle » ou chiffrer réellement les inconnues |
| P1-02 | lignes 582–600 et 641–675 | capacité libérée appelée « bénéfice » sans séparer cash, risque et revenu | une heure interne déjà payée peut être prise pour une économie bancaire | publier quatre sous-totaux et une règle anti-double comptage |
| P1-03 | lignes 465–508 | six réponses sans même périmètre, même horizon ni TCO | impossible de choisir fonction existante, connecteur, assistance ou sur-mesure | chiffrer au moins trois options sur 12/36 mois et montrer des gagnants différents |
| P1-04 | lignes 650–669 | seulement deux hypothèses de sensibilité | la page ne couvre pas simple/central/exigeant et masque le cas d'échec | ajouter au minimum 20/40/70 %, coût dépassé et adoption retardée |
| P1-05 | dossier de recherche et sources | quatre sources françaises seulement ; benchmark international absent | preuve et gain d'information sous le plancher de la charte | consolider France/US/UK/Canada/Australie et relier les apports au plan |
| P1-06 | dossier de recherche | score 20/20 attribué malgré l'absence de test humain et selon l'ancienne grille | l'ancien statut donne un faux signal de conformité actuelle | rouvrir P1–P4 sous le référentiel 100 points |
| P1-07 | lignes 465 et 524 | sections numérotées 4 et 5 rendues en `h3` alors que le sommaire les traite comme sections majeures | hiérarchie et navigation éditoriale incohérentes | convertir en H2 ou renuméroter sous la section 3 |
| P1-08 | tableaux aux lignes 399, 433, 473, 628, 650 et 744 | réponses décisives réparties sur trois colonnes de phrases ; aucun contrôle 390 px actuel | choix et conséquence peuvent être hors écran | cartes mobiles ou preuve visuelle que les trois informations restent ensemble |
| P1-09 | `src/lib/guides.ts:1023` | 13 minutes dans le registre contre 16 minutes mesurées dans l'inventaire initial ; la commande actuelle échoue sans serveur | promesse de lecture non synchronisée | mesurer sur le build final, corriger le registre et retester l'artefact |
| P1-10 | section « décider en sept jours » | calendrier trop ferme pour un processus mensuel, saisonnier ou peu fréquent | fausse impression qu'une semaine suffit toujours à décider | renommer « préparer une première décision » et imposer une période représentative |

### P2 — améliorations non bloquantes après les P1

| ID | Défaut | Amélioration |
| --- | --- | --- |
| P2-01 | les quatre cartes du hero ont une description vide | retirer les cartes décoratives ou leur donner une conséquence concrète |
| P2-02 | le tableau de sélection ne couvre que gain, stabilité et erreur | ajouter qualité d'entrée, exceptions, propriétaire, dépendances et retour manuel |
| P2-03 | la base HT/TTC et le mélange coûts externes/internes restent peu lisibles | écrire une convention unique et rappeler que le coût interne ne porte pas de TVA |
| P2-04 | adoption et conduite du changement sont surtout traitées comme responsabilités | ajouter temps de formation, taux d'usage et coût de double fonctionnement |
| P2-05 | le CTA porte le tag générique « Budget expliqué » | annoncer le livrable réel : carte relue, inconnues et prochaine expérience |
| P2-06 | aucune action téléchargeable malgré un sujet de travail | livrer le classeur décrit ci-dessous, sans email obligatoire |

## 7. Actif signature recommandé

Créer un classeur éditable « Choisir et tester sa première automatisation » :

1. inventaire de cinq tâches ;
2. volume, temps actif, attente, correction et taux d'exception ;
3. fiabilité de l'entrée, stabilité de la règle, impact d'erreur, possibilité
   d'annuler et propriétaire ;
4. quatre motifs d'arrêt non compensatoires ;
5. comparaison supprimer / fonction existante / connecteur / assistance /
   sur-mesure ;
6. cash évité, capacité libérée, risque attendu et revenu attribuable séparés ;
7. coûts initial, récurrent, interne, coexistence, maintenance et sortie ;
8. scénarios prudent, central et exigeant ;
9. résultats attendus, réels à 30 jours et réels à 90 jours ;
10. décision poursuivre, corriger, arrêter ou reporter ;
11. exemple fictif entièrement rempli ;
12. mode d'emploi, version, hypothèses et limites.

L'actif doit pouvoir conclure que la meilleure solution est de supprimer une
étape, de mieux utiliser l'existant ou de ne pas investir. C'est ce qui le
rend crédible et difficile à remplacer par une checklist générique.

## 8. Position professionnelle à rendre visible

```text
Recommandation fréquente :
commencer par un transfert d'information fréquent, stable, observable et
réversible ; supprimer l'étape avant d'acheter ; ne développer que si la règle
propre à l'entreprise crée une valeur durable.

Cas où une fonction existante gagne :
flux standard, faible volume, peu d'exceptions et sortie acceptable.

Cas où un connecteur gagne :
deux outils stables, API documentées, règle claire et traitement manuel
possible en cas de rejet.

Cas où le sur-mesure gagne :
plusieurs rôles, règles propres, forte fréquence, coût d'erreur maîtrisé,
avantage métier durable et exploitation financée.

Signal de révision :
taux d'exception, coût d'exploitation, adoption ou temps réellement réaffecté
s'écarte de plus de la tolérance décidée avant le pilote.

Ce que Hagnéré Code doit déconseiller même si l'agence peut le vendre :
un développement quand une suppression d'étape, une fonction déjà payée ou
un test manuel répond encore au besoin.

Conflit d'intérêts :
Hagnéré Code vend des outils internes et peut bénéficier d'un projet sur
mesure ; ce guide doit donc donner plus de poids aux solutions plus simples
lorsqu'elles satisfont le besoin.
```

## 9. Plan de réécriture

| Ordre | Section proposée | Question résolue | Preuve, scénario ou outil | Décision produite |
| ---: | --- | --- | --- | --- |
| 1 | La réponse en 90 secondes | quel cas commencer ? | règle fréquente/stable/observable/réversible | sélectionner ou reporter |
| 2 | Une semaine ne suffit pas toujours | combien observer ? | semaine, clôture, saison ou cycle complet | choisir une période représentative |
| 3 | Huit critères et quatre motifs d'arrêt | le cas est-il automatisable ? | classeur éditable | GO, clarifier ou STOP |
| 4 | Supprimer avant d'automatiser | faut-il un outil ? | avant/après du même flux | ne rien acheter si le problème disparaît |
| 5 | Trois entreprises, trois gagnants | quelle solution choisir ? | même flux, trois volumes et mêmes coûts | fonction, connecteur ou sur-mesure |
| 6 | Séparer argent et capacité | comment chiffrer honnêtement ? | quatre sous-totaux, scénarios et sensibilité | investissement défendable ou non |
| 7 | Tester les échecs avant le cas normal | que peut casser l'automatisation ? | données manquantes, doublon, panne, droit et reprise | accepter ou bloquer le pilote |
| 8 | Qui surveille après lundi ? | qui porte la règle et les alertes ? | responsabilités et budget récurrent | nommer les responsables |
| 9 | Prévu contre réalisé | comment savoir si cela paie ? | relevés 30/90 jours et critère d'arrêt | poursuivre, corriger ou arrêter |
| 10 | Notre avis et nos mauvais fits | quand Hagnéré Code est-il pertinent ? | opinion, contre-cas et conflit d'intérêts | contact qualifié ou autonomie |

### Contrat des 150 premiers mots

Conserver l'ouverture concrète. Remplacer « calculer le coût complet » par la
promesse exacte : comparer les coûts connus, tester ce qui change le verdict et
séparer le temps libéré de l'argent réellement économisé.

## 10. Contre-audit après correction

| Problème | Priorité | Correction appliquée | Revalidation indépendante |
| --- | --- | --- | --- |
| promesse de complétude | P1 | non appliquée dans ce lot | à faire |
| bénéfice/capacité/cash | P1 | non appliquée dans ce lot | calcul et sémantique à refaire |
| six options non homogènes | P1 | non appliquée dans ce lot | TCO commun à refaire |
| sensibilité insuffisante | P1 | non appliquée dans ce lot | trois scénarios minimum |
| P1 internationale incomplète | P1 | benchmark d'audit produit, dossier canonique non consolidé | à faire |
| ancienne auto-note 20/20 | P1 | invalidée par le présent audit | nouvelle scorecard après P2 |
| hiérarchie H2/H3 | P1 | non appliquée | test structurel |
| comparaisons mobiles | P1 | non contrôlées | vrai navigateur obligatoire |
| temps de lecture | P1 | divergence confirmée ; mesure runtime indisponible, HTTP 404 | mesurer sur le build final |
| calendrier sept jours | P1 | non appliquée | relecture dirigeant |

Score après correction : **non attribué**.

## 11. Preuves techniques et limites

```text
Snapshot : 0783546f8b415c5ef6fffe73b390082db9dd57050966c4e4fdca632e978cc69b
Calculs refaits : oui, exacts dans leurs hypothèses
Sources primaires rouvertes : France Num, Insee, CNIL
Concurrents rouverts : France, Royaume-Uni, Canada, Australie ; résultats US cartographiés mais aucun fait produit n'en dépend
Commande de temps de lecture : lancée, échec HTTP 404 faute de serveur local ; aucune valeur actuelle inventée
Rendu 320 / 390 / 768 / 1024 / 1440 : non réalisé dans cette passe
Image sociale : non contrôlée dans cette passe
Statut maximal prouvé : audit concurrentiel et plan de réécriture
Réserve publication / indexation : la page est peut-être déjà publique, mais elle n'est pas conforme au seuil renforcé sur ce snapshot
```

