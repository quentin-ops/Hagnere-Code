# Dossier de recherche — `choisir-son-agence-web`

> **Statut au 25 juillet 2026 : reconstitution documentaire, P1 à
> reprendre.** La page courante est une checklist humaine et prudente. Son
> audit montre qu'elle n'amène pas encore le dirigeant jusqu'à un choix
> démontré. Ce dossier conserve ces constats sans déclarer que les recherches
> ou les corrections ont été rejouées.

## Journal des quatre passes

Propriétaire éditorial unique : à désigner.

| Passe                        | État            | Date                          | Responsable            | Snapshot           | Blocages                                                                                 |
| ---------------------------- | --------------- | ----------------------------- | ---------------------- | ------------------ | ---------------------------------------------------------------------------------------- |
| 1. Recherche                 | **À reprendre** | 24/07/2026                    | à désigner             | page + audit       | Rejouer requêtes, corpus, sources et cannibalisation ; figer les trois offres comparées. |
| 2. Rédaction et intégration  | **À reprendre** | page existante                | à désigner             | page `2a7034…7c`   | TCO, protocole portfolio, contenu, score et point mort manquants.                        |
| 3. Contre-audit indépendant  | **À reprendre** | rapport initial du 24/07/2026 | autre agent            | audit `89f2e2…7a7` | Le rapport constate les défauts ; aucun snapshot corrigé.                                |
| 4. Plume humaine et contrôle | **Bloquée**     | —                             | lecteur dirigeant + QA | —                  | P3, puis test de décision, tableaux mobiles, liens, build, route.                        |

### Manifeste documentaire observé

| Fichier                                                              | SHA-256 au 24/07/2026                                              | Usage                        |
| -------------------------------------------------------------------- | ------------------------------------------------------------------ | ---------------------------- |
| `src/app/guides/choisir-son-agence-web/page.tsx`                     | `2a70343a5b0d561b56073284f6043fab017e83ff2e6fabb4747df577f4433f7c` | Page courante.               |
| `docs/audits/giga-audit-2026-07-24/guides/choisir-son-agence-web.md` | `89f2e2515107860adc4d2b5886db1eae6a6de6fc8fe5cd19162878f5a25777a7` | Audit approfondi historique. |
| `docs/charte-qualite-guides.md`                                      | `5ee616faa4959dc8ad2b0eb19a5b19ffbf53299b62665700093c5c176b0b8491` | Qualité éditoriale.          |
| `docs/workflow-maitre-guides-4-passes.md`                            | `a3a8c8f1be5d5d60b096f251f22b27ae5526adb708c334c4d6f0b7b4270c60c4` | Processus de validation.     |

## 1. Fiche d'identité

```text
Slug : choisir-son-agence-web
Statut : page existante, score historique 73/100, corrections non appliquées
Requête principale hypothétique : choisir agence web
Moment du parcours : décider entre plusieurs offres avant signature
Lecteur : dirigeant ou indépendant non spécialiste qui veut un site
          professionnel, des résultats vérifiables et une sortie possible
Déclencheur : trois agences présentent des portfolios et devis très différents
Question : « Quelle équipe produira le meilleur résultat au meilleur coût
            complet, et comment le prouver avant de signer ? »
Décision : normaliser les offres, éliminer les risques inacceptables, noter les
           preuves puis choisir la solution la plus simple qui atteint le résultat
Action sans contact : tester une référence et remplir une grille TCO/risque
CTA : audit borné d'offres ou de périmètre, avec possibilité de déconseiller l'agence
Hors périmètre : palmarès d'agences, avis juridique, garantie de trafic,
                 conversion ou classement
```

### Phrase réelle et réponse

- **Phrase téléphone :** « Les trois agences semblent sérieuses, mais l'une est
  beaucoup plus chère. Comment savoir si je paie une vraie différence ou
  seulement une belle présentation ? »
- **Réponse en une phrase :** définissez la tâche et la mesure attendues,
  testez le travail réellement livré, faites remplir le même devis, puis
  comparez équipe, preuves, coût sur 36 mois et sortie.
- **Verdict possible :** agence spécifique, CMS standard, freelance,
  conservation du site actuel ou report.

### Contrat de langage

- Dire « qui écrit les huit pages et quand ? » plutôt que « stratégie de
  contenu » seule.
- Dire « qui possède le domaine et peut changer les accès ? » plutôt que
  « gouvernance des actifs ».
- Traduire TCO, CMS, QA, accessibilité et réversibilité au premier usage.
- Les 150 premiers mots doivent présenter trois propositions concrètes et la
  règle : aligner le résultat et le coût complet, éliminer les sorties
  dangereuses, puis payer plus seulement pour une différence prouvée.

## 2. Ce que le guide couvre

La page observée propose dix vérifications :

1. cinq qualités à rechercher ;
2. besoin formulé en résultat ;
3. réalisations et références ;
4. premier échange ;
5. propositions et prix ;
6. équipe ;
7. contrat, droits, comptes et sortie ;
8. abonnements et location financière ;
9. décision sans précipitation ;
10. auto-audit de Hagnéré Code.

### Forces

- Ton clair pour un acheteur non technique.
- Résultat observable avant solution.
- Portfolio ouvert et rôle réel de l'agence interrogé.
- Références appelées avec accord.
- Budget et date partagés ; capacité à réduire le périmètre demandée.
- Équipe nommée plutôt que marque.
- Domaine, hébergement, comptes, droits et sortie traités.
- Distinction utile entre agence et organisme financier.
- Conflit d'intérêts Hagnéré Code reconnu.

### Manques de décision

- Aucun site de référence n'est testé avec un protocole identique.
- Aucun devis n'est rempli de bout en bout.
- Le temps de production et validation des contenus est absent du coût.
- Accessibilité, performance, sécurité et mesure sont des promesses, pas un
  procès-verbal.
- Les garde-fous non compensables ne sont pas séparés des préférences notées.
- Aucun TCO 36 mois ni score pondéré n'est dans la page.
- Le surcoût n'est pas relié à la contribution par vente ni à une exigence
  critique.
- Le CTA ne définit pas le livrable, le délai, le mauvais fit et la possibilité
  de recommander une solution standard.

## 3. Cannibalisation et parcours

| Page                                               | Question résolue                 | Frontière                                                                                   |
| -------------------------------------------------- | -------------------------------- | ------------------------------------------------------------------------------------------- |
| `/guides/agence-web-ou-freelance`                  | quelle forme d'équipe choisir    | ici, une fois la voie agence retenue, comment sélectionner l'agence                         |
| `/guides/combien-coute-un-site-internet`           | quel budget total                | ici, comment évaluer preuves, équipe, contrat et TCO de plusieurs offres                    |
| `/ressources/kit-cahier-des-charges-site-internet` | exprimer le besoin               | ici, tester et noter les réponses reçues                                                    |
| `/realisations`                                    | montrer les projets Hagnéré Code | le guide doit expliquer comment les vérifier et ne pas les traiter comme preuve automatique |
| `/tarifs` si maillé ultérieurement                 | présenter des offres             | le guide doit pouvoir conclure qu'une offre Hagnéré ne gagne pas                            |

**Justification :** l'URL répond à une décision de sélection et de contrôle,
pas à un choix agence/freelance ni à une simple question de prix.

## 4. Benchmark historique et gain d'information

L'audit rapporte une recherche du 24 juillet 2026 en France, États-Unis,
Royaume-Uni et Australie. Les concurrents français et Clutch couvrent déjà
objectifs, budget, portfolio, avis, proximité, technologie et maintenance. Les
ressources publiques internationales apportent critères écrits, accessibilité,
jalons, cycle de vie et réutilisation.

### Sources et pages rapportées

| Source                                                                                                                                                             | Apport historique                                      | Limite                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------ | -------------------------------------------------- |
| [France Num — choisir le bon prestataire](https://www.francenum.gouv.fr/formations/comment-choisir-le-bon-prestataire-pour-votre-site-internet)                    | objectifs, références, domaine, maintenance            | certaines affirmations SEO/réversibilité à nuancer |
| [France Num — cahier des charges](https://www.francenum.gouv.fr/guides-et-conseils/developpement-commercial/site-web/batir-le-cahier-des-charges-du-site-internet) | objectifs, responsabilités, résultats                  | ne compare pas trois offres                        |
| [France Num — combien payer](https://www.francenum.gouv.fr/guides-et-conseils/developpement-commercial/site-web/combien-payer-pour-un-site-web-ou-un-site-e)       | familles de solutions/budgets                          | périmètres hétérogènes                             |
| [DGCCRF — location financière](https://www.economie.gouv.fr/dgccrf/laction-de-la-dgccrf/les-enquetes/location-financiere-aupres-des-professionnels-demarches)      | plaintes et démarchage « one shot »                    | ne condamne pas tout financement                   |
| [AFNIC — FAQ domaines](https://www.afnic.fr/noms-de-domaine/faq/)                                                                                                  | titulaire, contact, bureau d'enregistrement            | procédure selon extension/registrar                |
| [Légifrance L131-3](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958)                                                                          | délimitation des droits cédés                          | contrat concret à analyser                         |
| [Médiateur des entreprises](https://www.economie.gouv.fr/mediateur-des-entreprises)                                                                                | voie de médiation possible                             | ni garantie ni conseil juridique                   |
| [Clutch, États-Unis](https://clutch.co/resources/how-to-choose-a-web-developer)                                                                                    | checklist proche                                       | annuaire commercial                                |
| [USWDS](https://designsystem.digital.gov/documentation/sample-contract-language/)                                                                                  | critères d'évaluation et accessibilité dans le contrat | marché public US à adapter                         |
| [Google Search Central](https://developers.google.com/search/docs/appearance/page-experience)                                                                      | aucune garantie SEO par étiquette technique            | ne choisit pas une agence                          |
| [W3C WAI](https://www.w3.org/WAI/test-evaluate/report-template/)                                                                                                   | modèle de rapport d'évaluation                         | rapport ≠ certification                            |
| [GOV.UK Technology Code](https://www.gov.uk/guidance/the-technology-code-of-practice)                                                                              | besoin, accessibilité, cycle de vie                    | contexte public britannique                        |
| [business.gov.au](https://business.gov.au/people/contractors/prepare-a-contract)                                                                                   | résultat, jalons, variations, propriété                | droit australien non transposable                  |
| [ACCC](https://www.accc.gov.au/business/advertising-and-promotions/false-or-misleading-claims)                                                                     | affirmations marketing étayées                         | droit australien                                   |

**État de preuve :** l'audit dit les avoir rouvertes ; elles ne l'ont pas été
pour cette reconstitution. La P1 actuelle doit consigner URLs, passages, dates,
biais et conflits. Les règles étrangères servent au design du contrôle, pas à
fournir une clause juridique française.

### Matrice de gain d'information

| Question                                | Couverture actuelle  | Manque                         | Réponse supérieure                                   |
| --------------------------------------- | -------------------- | ------------------------------ | ---------------------------------------------------- |
| Que doit produire le site ?             | objectifs            | mesure initiale et responsable | tâche, utilisateur, baseline, cible, preuve          |
| Comment vérifier le portfolio ?         | ouvrir et appeler    | protocole commun               | mobile, tâche, formulaire, accessibilité, rôle exact |
| Les devis sont-ils comparables ?        | postes généraux      | cas rempli/TCO                 | trois offres normalisées sur 36 mois                 |
| Qui travaille ?                         | équipe/disponibilité | charge et suppléance           | personne, rôle, charge, suppléant, temps client      |
| Qui produit les contenus ?              | mention              | coût et retard                 | deux plans chiffrés et seuil d'avance                |
| Qualité SEO/accessibilité/performance ? | promesses            | preuve finale                  | contrôle avant/après, périmètre, limites             |
| L'abonnement est-il pertinent ?         | alerte               | coût et sortie                 | durée, indexation, services, défaillance, TCO        |
| À qui appartiennent les actifs ?        | droits/comptes       | inventaire                     | actif, titulaire, droit/licence, accès, format       |
| Le surcoût est-il rationnel ?           | absent               | point mort                     | contribution, taux de vente, demandes nécessaires    |
| Quand le standard gagne ?               | déclaré              | cas démontré                   | faire gagner le CMS standard dans le cas courant     |

## 5. Faits et limites

| Affirmation                              | Statut historique                       | Source ou preuve               | Règle éditoriale                                    |
| ---------------------------------------- | --------------------------------------- | ------------------------------ | --------------------------------------------------- |
| un portfolio prouve tout le travail      | faux                                    | contrat et référence du projet | demander rôle exact et état livré                   |
| proximité = meilleure agence             | non prouvé                              | aucune source primaire         | critère secondaire seulement                        |
| paiement = transfert automatique de tout | faux                                    | Légifrance L131-3, licences    | inventaire, contrat et avis si enjeu                |
| changer d'agence = changer de registrar  | faux comme règle                        | AFNIC                          | distinguer prestataire, titulaire, admin, registrar |
| hébergement France = bonus SEO           | non soutenu par source Google consultée | Google page experience         | ne pas le promettre                                 |
| CMS standard = sortie facile             | faux sans test                          | export, licences, restauration | exécuter ou documenter la limite                    |
| thème/agence = accessibilité             | faux                                    | W3C                            | évaluer le site final                               |
| abonnement = abus                        | faux                                    | contrats et services           | comparer durée, financeur et sortie                 |
| performance = ventes garanties           | faux                                    | dépend offre, trafic et mesure | traiter comme hypothèse testable                    |

### À retirer plutôt qu'affaiblir

- tarif universel ou conversion moyenne sans périmètre ;
- proximité/technologie/hébergement comme garantie SEO ;
- « propriétaire à 100 % » sans inventaire ;
- jurisprudence isolée utilisée comme avis juridique ;
- score qui compense un garde-fou éliminatoire.

## 6. Scénarios et calculs historiques à reprendre

Les montants suivants sont des hypothèses fictives de l'audit, pas des offres.

### TCO 36 mois

| Poste                 | A — abonnement | B — projet CMS | C — spécifique |
| --------------------- | -------------: | -------------: | -------------: |
| mise en place         |        1 500 € |       12 000 € |       24 000 € |
| abonnement/support    |     480 € × 36 |     240 € × 36 |     350 € × 36 |
| temps interne         |   120 h × 45 € |    90 h × 45 € |    75 h × 45 € |
| sortie/reconstruction |        6 000 € |        2 000 € |        3 000 € |
| **TCO**               |   **30 180 €** |   **26 690 €** |   **42 975 €** |

Résultat de la simulation : B gagne dans le cas simple. C coûte 16 285 € de
plus et doit justifier cette différence par un résultat, une fonction ou un
risque évité.

### Score après garde-fous

Poids historiques : compréhension/message 20 %, périmètre/contenu 20 %,
preuves 15 %, équipe/processus 15 %, QA/accessibilité 10 %, maintenance 10 %,
comptes/sortie 10 %. Scores fictifs : A 59,5 ; B 81 ; C 82.

Le point d'avance de C ne justifie pas à lui seul 16 285 €. Les poids doivent
être décidés avant les soutenances ; les garde-fous doivent être traités avant
la note.

### Contenus et point mort

```text
Rédaction interne fictive : 8 × 3 h × 45 € = 1 080 €
Rédaction agence : 8 × 600 € + 8 h × 45 € = 5 160 €
Surcoût : 4 080 €
Valeur fictive de 1,5 mois d'avance :
4 demandes/mois × 25 % × 1 800 € × 1,5 = 2 700 €
Seuil : environ 6,04 demandes qualifiées/mois
```

```text
Surcoût C vs B : 16 285 €
Contribution par vente : 1 800 €
À 25 % de transformation : 37 demandes supplémentaires sur 36 mois
```

Ces calculs montrent la méthode, pas une causalité entre site et demandes. La
P3 doit refaire les formules, expliciter attribution, contribution, taxes,
temps et horizon.

## 7. Position professionnelle

```text
Recommandation fréquente : choisir la solution standard la plus simple qui
atteint le résultat et passe les garde-fous.
Payer davantage : seulement pour une différence prouvée de message, contenus,
parcours, intégration, exploitation, délai ou risque.
Cas où Hagnéré Code perd : CMS standard, freelance ou conservation du site
suffit ; le surcoût ne franchit pas le point mort.
Signal de révision : équipe remplacée, contenu en retard, financeur distinct,
accès non remis, preuve absente ou TCO modifié.
Ce que nous déconseillons : financement sous pression « one shot » et
sur-mesure vendu comme garantie SEO/conversion.
Conflit d'intérêts : Hagnéré Code est une agence ; la grille doit pouvoir
l'éliminer ou la faire perdre.
```

## 8. Ressource et conversion

### Grille autonome

La ressource utile doit contenir :

- tâche utilisateur et mesure ;
- test d'une référence en 30 minutes ;
- rôle exact de l'agence ;
- personne, charge et suppléant ;
- même périmètre, inclusions et exclusions ;
- contenus, responsables et dates ;
- procès-verbal QA/accessibilité ;
- droits, comptes, données et sortie ;
- TCO 12/36/60 ;
- garde-fous éliminatoires ;
- score pondéré seulement après garde-fous ;
- point mort du surcoût ;
- verdict et possibilité « ne pas refaire ».

Elle ne doit pas être un palmarès ni un formulaire qui choisit automatiquement
Hagnéré Code.

### CTA

Un CTA honnête doit préciser :

- le document à envoyer ;
- le résultat rendu ;
- le délai de restitution ;
- la profondeur contractuelle et technique ;
- le prix ou la condition de gratuité ;
- les mauvais fits ;
- la possibilité de recommander standard, freelance ou report.

## 9. Empreinte humaine et anti-IA

### Ce qui rend la page crédible

- questions utilisables en rendez-vous ;
- prudence sur les références et droits ;
- alerte concrète sur les deux contrats ;
- auto-audit de l'agence ;
- absence de promesse de classement.

### Risques de gabarit

- dix chapitres de checklist sans entreprise fil rouge ;
- répétition de verbes injonctifs ;
- tableaux non remplis ;
- abstractions « écoute », « expertise », « qualité » non reliées à une preuve ;
- conclusion commerciale trop proche des critères évalués.

### Réécriture humaine

Suivre une entreprise fictive qui reçoit A, B et C. À chaque section :

1. montrer ce qu'elle voit ;
2. poser la question exacte ;
3. enregistrer la preuve ;
4. faire évoluer TCO/score ;
5. rendre le verdict visible.

P4 doit faire lire uniquement le hero, le cas et la conclusion à un dirigeant
et vérifier qu'il sait quelle offre gagne et pourquoi. Sans personne réelle,
inscrire « validation humaine non réalisée ».

## 10. Registre des défauts hérités

### P0

Aucun P0 identifié dans l'audit initial. Le juridique doit néanmoins être
revalidé après réécriture.

### P1

1. TCO 36 mois absent de la page.
2. Portfolio sans protocole reproductible.
3. Aucun score après garde-fous.
4. Contenus non valorisés.
5. Surcoût sans point mort.
6. Accessibilité/performance sans rapport.
7. Propriété et sortie trop globales.
8. Sources France Num à nuancer.

### P2

- tableaux à tester sur 390 px ;
- benchmark et sources à rouvrir ;
- cas filé à intégrer ;
- livrable et délai du CTA ;
- métadonnées, JSON-LD, liens, OG, build et route ;
- temps de lecture à recalculer après correction.

## 11. Prochaines corrections

1. Refaire la P1 avec requêtes, corpus daté, saturation et frontières.
2. Figer trois offres et les garde-fous avant d'écrire.
3. Construire le protocole portfolio, le TCO, le score et le point mort dans
   un support calculable.
4. Réécrire le guide autour de l'entreprise fictive et de son verdict.
5. Produire la grille publique et tester son utilisation autonome.
6. Faire recalculer et requalifier les sources par un autre agent.
7. Exécuter P4 avec lecteur dirigeant, responsive, clavier, liens, données
   structurées, build et route.
8. Ne pas confondre validation éditoriale, déploiement et indexation.

**Porte de sortie :** aucun « guide de référence » tant que les offres ne sont
pas normalisées, que la solution standard ne peut pas gagner dans le scénario
simple et que le snapshot corrigé n'a pas franchi une P3 indépendante puis une
P4 prouvée.
