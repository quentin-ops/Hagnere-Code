# Dossier de travail — Votre entreprise a-t-elle besoin d’un logiciel métier ?

Version : 21 juillet 2026

Page prévue : `/guides/signes-besoin-logiciel-metier`

## Journal des quatre passes

Propriétaire éditorial unique : `/root`

| Passe                        | État                     | Date       | Responsable                   | Snapshot        | Blocages |
| ---------------------------- | ------------------------ | ---------- | ----------------------------- | --------------- | -------- |
| 1. Recherche                 | Terminée — porte validée | 2026-07-21 | recherche indépendante + root | voir ci-dessous | aucun    |
| 2. Rédaction et intégration  | Terminée — porte validée | 2026-07-21 | root                          | `5e13101…`      | aucun    |
| 3. Contre-audit indépendant  | Terminée — porte validée | 2026-07-21 | relecteur indépendant         | `e7fb596…`      | aucun    |
| 4. Plume humaine et contrôle | Terminée — porte validée | 2026-07-21 | root                          | manifeste P4    | aucun    |

### Manifeste P1 des fichiers locaux examinés

| Fichier                                                    | SHA-256                                                            |
| ---------------------------------------------------------- | ------------------------------------------------------------------ |
| `src/lib/guides.ts`                                        | `bcf3ce4569dd45db8a94a92e06ed5a45cc474ed8bda32657fdc1c21f8fc91dfb` |
| `src/app/guides/automatiser-processus-metier/page.tsx`     | `230949d813069849d58f63d1be61e8cbc8ae6db45fbcaa5a49284043a9177442` |
| `src/app/guides/transformer-excel-en-application/page.tsx` | `e80281de919fde1378afc38734b0acab9d251b1623634c1ebfdbf077e444fe72` |
| `src/app/guides/calculer-roi-application-metier/page.tsx`  | `0d40bb61b97fc4e99f86ad2b05b5483da26e79224edc1454544da4d1cc8fd8df` |
| `src/app/guides/erp-ou-logiciel-sur-mesure/page.tsx`       | `b6913f7513e8e4cd48eb3e9c52dba97a238b4797c53140fd0f6c2cadf553aa73` |
| `docs/roadmap-guides-seo.md`                               | `d462a54c9b90a4e79d93efccb15fadc505f496dfdfe05cd44650ceaf8c7ac367` |

## 1. Fiche d’identité

```text
Slug : signes-besoin-logiciel-metier
Statut : publiable — validation éditoriale déléguée
Requête principale : signes besoin logiciel métier
Moment du parcours : comprendre puis explorer
Lecteur : dirigeant ou responsable opérationnel de TPE/PME sans DSI structurée
Situation : l'entreprise travaille entre fichiers, e-mails, outils standards et mémoire humaine ; les mêmes blocages reviennent
Phrase réelle : « On passe notre temps à bricoler entre Excel, les mails et trois logiciels. Est-ce qu'on a vraiment besoin d'un outil à nous ? »
Décision : sécuriser, corriger l'existant, automatiser, acheter un logiciel standard, étudier une fonction sur mesure ou continuer à observer
Niveau initial : connaît très bien son activité, pas les catégories techniques de solutions
Action autonome : documenter trois problèmes réels et classer la première action utile
CTA possible : faire examiner ces trois situations sans présumer qu'un développement sera recommandé
Hors périmètre : choix de technologie, budget détaillé, cahier des charges complet, calcul de ROI et sélection d'un prestataire
```

### Contrat de langage humain

- Réponse attendue : des blocages répétés justifient un diagnostic, pas
  automatiquement un logiciel sur mesure.
- Terme central : un logiciel métier est un outil conçu autour d’un travail
  précis de l’entreprise, par exemple planifier des interventions ou suivre des
  dossiers.
- Mots du lecteur : recopier, retrouver, relancer, attendre, version, fichier,
  accès, erreur, client, commande, intervention, facture.
- Mots à éviter sans traduction : workflow, SI, dette technique, orchestration,
  gouvernance, architecture cible, digitalisation.
- Promesse des 150 premiers mots : reconnaître le problème, comprendre que
  plusieurs réponses existent et savoir quand sécuriser sans attendre.

## 2. Frontière avec les pages existantes

| Page existante                          | Question conservée par cette page                 | Différence du nouveau guide                                    |
| --------------------------------------- | ------------------------------------------------- | -------------------------------------------------------------- |
| `automatiser-processus-metier`          | quelle tâche automatiser et comment la tester     | établir d’abord si un problème justifie un diagnostic          |
| `transformer-excel-en-application`      | que faire d’un fichier Excel devenu critique      | observer l’ensemble des fichiers, outils, e-mails et personnes |
| `calculer-roi-application-metier`       | comment justifier économiquement l’investissement | réunir les faits avant tout calcul                             |
| `erp-ou-logiciel-sur-mesure`            | quelle famille d’architecture choisir             | ne préconiser aucune architecture                              |
| `no-code-ou-sur-mesure`                 | quelle technologie utiliser                       | rester neutre technologiquement                                |
| `cahier-des-charges-application-metier` | formaliser une demande déjà décidée               | déterminer si cette formalisation est nécessaire               |
| `reprendre-logiciel-metier-existant`    | reprendre une application existante               | diagnostiquer une organisation encore sans outil adapté        |

**Justification de l’URL :** aucune page ne répond actuellement à la question
qui précède toutes les autres : « avons-nous un problème assez sérieux pour
ouvrir un projet logiciel, et quelle réponse examiner d’abord ? »

## 3. Demande, concurrence et angle mort

Recherche qualitative effectuée le 21 juillet 2026 avec la requête exacte
`"signes" "logiciel sur mesure" entreprise besoin`. Les pages examinées
comprennent notamment :

- [Jaïkin — 5 signes que votre PME a besoin d’un logiciel sur mesure](https://www.jaikin.eu/blog/signes-pme-logiciel-sur-mesure) ;
- [SetInUp — 7 signes que vous avez besoin d’un logiciel sur mesure](https://www.setinup.com/logiciel-personnalise-7-signes-besoin-logiciel-sur-mesure/) ;
- [Spiria — 10 signes qu’il est temps d’investir dans le logiciel sur mesure](https://www.spiria.com/fr/blogue/10-signes-quil-est-temps-dinvestir-dans-le-logiciel-sur-mesure) ;
- [Sola IA — 5 signes que votre entreprise en a besoin](https://sola-ia.com/blog/application-sur-mesure-signes-besoin).

Cette observation montre de nombreuses listes qui passent rapidement de la
gêne au développement sur mesure. Aucune donnée de volume, de difficulté ou de
positionnement n’est revendiquée dans ce dossier.

Angles morts récurrents :

- seuils horaires invérifiables ;
- sur-mesure présenté comme issue naturelle ;
- peu de place pour configurer l’outil actuel ;
- automatisation légère et logiciel standard sous-traités ;
- incident de continuité confondu avec besoin de développement ;
- absence de vraie option « attendre et observer ».

Valeur originale : un signe établit l’existence d’un problème, jamais à lui
seul la nécessité d’un logiciel sur mesure.

## 4. Fiche de preuves

Sources rouvertes le 21 juillet 2026.

| Fait sourcé                                                                                                                                  | Source primaire et passage utile                                                                                                                                                                                                                        | Limite                                                                                         | Déduction stratégique Hagnéré Code                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| France Num recommande d’observer les ressaisies, la fréquence, la durée, le nombre de personnes et l’impact d’une erreur avant d’automatiser | [France Num — Automatisation](https://www.francenum.gouv.fr/guides-et-conseils/pilotage-de-lentreprise/numerisation-des-processus/lautomatisation-une-solution), parties « tâches ou processus » et « bonnes pratiques », mise à jour du 9 juillet 2026 | le dossier comporte aussi des exemples et gains illustratifs qui ne deviennent pas nos preuves | documenter trois situations réelles avant de choisir une solution                                           |
| La cartographie d’un processus peut révéler une correction sans automatisation                                                               | même source France Num, partie « Cartographiez vos processus »                                                                                                                                                                                          | bonne pratique, pas résultat garanti                                                           | conserver explicitement l’option de corriger l’organisation                                                 |
| Le RGESN demande d’évaluer le besoin et les solutions existantes avant de créer un service numérique                                         | [Référentiel général d’écoconception 2024](https://ecoresponsable.numerique.gouv.fr/publications/referentiel-general-ecoconception/), critère relatif à l’évaluation du besoin                                                                          | référentiel d’écoconception, pas règle de rentabilité                                          | un développement neuf doit arriver après l’examen de l’existant et du standard                              |
| DesignGouv recommande de partir des besoins, de rencontrer les utilisateurs et de tester                                                     | [DesignGouv — Bien concevoir un service numérique](https://design.numerique.gouv.fr/bien-concevoir/)                                                                                                                                                    | doctrine des services publics transposée ici comme bonne pratique                              | interroger les personnes qui font réellement le travail                                                     |
| La CNIL recommande une gestion des habilitations selon le besoin d’en connaître                                                              | [CNIL — Gérer les habilitations](https://www.cnil.fr/fr/securite-gerer-les-habilitations)                                                                                                                                                               | concerne les traitements de données personnelles                                               | un compte partagé ou trop puissant appelle une correction immédiate, pas nécessairement un nouveau logiciel |
| La CNIL recommande des sauvegardes régulières, testées et séparées, ainsi qu’un plan de continuité adapté                                    | [CNIL — Sauvegarder](https://www.cnil.fr/fr/securite-sauvegarder) et [continuité et reprise](https://www.cnil.fr/fr/securite-prevoir-la-continuite-et-la-reprise-dactivite)                                                                             | concerne la protection des données personnelles et doit être adaptée au risque                 | si un fichier perdu arrête l’activité, sécuriser avant de financer de nouvelles fonctions                   |

### Faits, déductions et recommandations

- **Faits :** les sources recommandent d’observer, cartographier, tester,
  contrôler les accès et prévoir sauvegarde et continuité.
- **Déduction :** des ressaisies récurrentes et une information éclatée peuvent
  justifier un diagnostic.
- **Recommandation Hagnéré Code :** classer la première réponse parmi sécuriser,
  corriger, automatiser, acheter, étudier le sur-mesure ou attendre.

### Affirmations interdites

- « trois signes suffisent pour justifier un logiciel sur mesure » ;
- seuil universel d’heures perdues ;
- gain de temps ou ROI non calculé à partir des données du lecteur ;
- « l’erreur humaine disparaît » ;
- « centraliser toutes les données est toujours préférable » ;
- « l’IA est la solution » sans résultat métier ni règle stable ;
- obligation RGPD de développer un logiciel sur mesure.

## 5. Signes à expliquer sans diagnostic automatique

### À sécuriser maintenant

- une absence, un fichier perdu ou une panne peut interrompre commandes,
  interventions ou factures ;
- personne ne sait restaurer la dernière version utile ;
- des comptes sont partagés ou donnent accès à trop d’informations ;
- personne ne peut expliquer qui a modifié ou validé une donnée importante.

### À mesurer sur des cas réels

- la même information est recopiée entre plusieurs outils ;
- plusieurs versions doivent être réconciliées avant de travailler ;
- une réponse simple exige d’interrompre plusieurs personnes ;
- les délais augmentent avec le volume à cause d’une étape manuelle ;
- une relance ou validation dépend de la mémoire d’une personne ;
- le logiciel officiel est contourné par des fichiers ou messages parallèles ;
- le terrain note puis ressaisit ;
- le tableau de pilotage arrive après la décision.

### Faux positifs

- irritation isolée et peu coûteuse ;
- pic temporaire ;
- règles qui changent chaque semaine ;
- responsable ou résultat attendu non défini ;
- configuration ou formation de l’outil actuel non essayée ;
- solutions standards plausibles non examinées raisonnablement sur les vrais cas ;
- envie de « mettre de l’IA » sans résultat précis.

## 6. Dispositif autonome : trois situations réelles

Le lecteur doit pouvoir recopier cette fiche sans téléchargement :

```text
Date et travail à accomplir :
Résultat attendu :
Ce qui s'est réellement passé :
Outils, fichiers et personnes concernés :
Temps de travail et temps d'attente :
Erreur, retard, perte, mécontentement ou risque :
Contournement employé :
Correction déjà essayée dans l'outil actuel :
Solution standard comparée, démontrée ou essayée, et résultat :
La règle métier est-elle stable ?
Solution manuelle disponible en cas de panne :
```

Règles de restitution, sans score moyen :

- risque de continuité, d’accès ou de données : sécuriser ;
- correction de l’existant concluante : corriger et s’arrêter ;
- outils adaptés mais transferts répétitifs : automatiser ;
- logiciel standard concluant sur les cas réels : acheter ;
- besoin stable, important et mal couvert par les solutions raisonnablement
  examinées : étudier une fonction sur mesure ;
- preuves insuffisantes ou règles instables : observer encore.

## 7. Plan annoté

| Section                                                             | Question résolue                              | Preuve ou exemple                       | Conséquence                                      |
| ------------------------------------------------------------------- | --------------------------------------------- | --------------------------------------- | ------------------------------------------------ |
| Un problème d’outil ne signifie pas encore qu’il faut du sur-mesure | quel est le verdict immédiat ?                | distinction problème/solution           | le lecteur ne saute pas au devis                 |
| Sécurisez d’abord ce qui peut arrêter l’entreprise                  | faut-il agir maintenant ?                     | CNIL sauvegarde, accès, continuité      | correction immédiate même sans projet            |
| Observez ce qui fait réellement perdre du temps                     | quels signes mesurer ?                        | méthode France Num                      | faits au lieu d’impressions                      |
| Regardez comment l’équipe contourne les outils                      | pourquoi les usages parallèles comptent-ils ? | situations observables                  | comprendre ce que l’outil officiel ne couvre pas |
| Vérifiez si le problème vient vraiment du logiciel                  | quels faux positifs éliminer ?                | corrections, comparaison ou essai       | éviter un développement inutile                  |
| Quelle solution examiner dans votre situation ?                     | quelles familles de réponse ?                 | six sorties sans score                  | choisir la prochaine enquête, pas la technologie |
| Notez trois situations réelles                                      | que préparer ?                                | fiche copiable                          | action autonome                                  |
| Quand le sur-mesure mérite d’être étudié                            | quels points vérifier ?                       | besoin stable, important et mal couvert | ouvrir une étude seulement si justifié           |
| Votre prochaine décision tient en une phrase                        | que faire demain ?                            | phrase à compléter                      | sortie nette                                     |

La progression diffère des guides voisins : diagnostic avant technologie,
aucun scénario financier, fiche de situations réelles et conclusion pouvant
écarter tout développement.

## 8. Conversion

```text
Action non commerciale : remplir la fiche sur trois situations et appliquer la première règle de sortie
Bon fit Hagnéré Code : situations répétées, règles assez stables, responsable métier disponible
Mauvais fit : incident cyber actif, litige, processus non défini, besoin réglementé hors compétence, exigence de garantie
CTA : Faire examiner mes trois situations
Résultat après clic : confronter les faits et recommander une correction, une automatisation, un logiciel standard, une étude sur mesure ou l'attente
Ressource téléchargeable : non ; la fiche copiable suffit et évite un faux aimant à contacts
```

## Rapport P1 — Recherche

```text
PASSE 1 TERMINÉE
Slug : signes-besoin-logiciel-metier
Lecteur et phrase réelle : dirigeant bricolant entre plusieurs outils et demandant s'il lui faut vraiment un outil propre
Décision : sécuriser, corriger, automatiser, acheter, étudier ou attendre
Angle : diagnostic neutre à partir de trois situations vécues
Pages proches : automatisation, Excel, ROI, ERP et cahier des charges ; aucune ne traite la décision préalable
Sources décisives : France Num 2026, RGESN, DesignGouv et fiches sécurité CNIL
Incertitudes exclues : volumes SEO, seuils horaires, gains et ROI universels
Action autonome : fiche copiable de trois situations
Plan : neuf questions allant du risque immédiat à la prochaine action
Snapshot : manifeste P1 ci-dessus
```

## Rapport P2 — Rédaction et intégration

```text
PASSE 2 TERMINÉE
Fichiers créés ou modifiés : page, image sociale, registre, lien entrant depuis automatiser-processus-metier et dossier de recherche
Ouverture et réponse : situation vécue, définition simple et réponse « problème à examiner, pas sur-mesure automatique » dans les 150 premiers mots
Forme propre au sujet : six décisions non hiérarchiques et fiche de trois situations réelles
Exemples ou calculs : un exemple fictif sans gain inventé ; aucun calcul arbitraire
Sources visibles : France Num, RGESN et fiches CNIL placés près des affirmations
Action autonome : remplir trois fiches ; bon fit et mauvais fit explicités
CTA : présenter trois situations sur /demarrer-un-projet ; un seul CTA
Contrôles rapides : Prettier, ESLint, TypeScript et 51 tests ciblés réussis ; git diff --check réussi
Snapshot : page 5e13101…, OG 0a86833…, registre 32c23c5…, lien entrant 710430a…
```

### Snapshot P2

| Fichier                                                            | SHA-256                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `src/app/guides/signes-besoin-logiciel-metier/page.tsx`            | `5e13101ba20ac90da9389dc950e74ec2f4194cb2a49b8009a37e660baa19290e` |
| `src/app/guides/signes-besoin-logiciel-metier/opengraph-image.tsx` | `0a86833221ba684bdb46353aed7443e06fcdd1cf7a510d9fb78409eecc6553e8` |
| `src/lib/guides.ts`                                                | `32c23c59e826aa1517940a7129ae786a55a47139bf4840629520d54a0be915ed` |
| `src/app/guides/automatiser-processus-metier/page.tsx`             | `710430a83da2eb8f571f4fa40adb4e28676a417b938b30b1804afd6469788677` |

## Rapport P3 — Contre-audit indépendant

```text
PASSE 3 TERMINÉE
Snapshot d’entrée : page 5e13101…, OG 0a86833…, registre 32c23c5…
Relecteur distinct : oui ; relecture froide en lecture seule
Sources rouvertes : France Num, RGESN, DesignGouv et fiches CNIL habilitations, sauvegarde et continuité
P0 initiaux : 0
P1 initiaux : sauvegarde insuffisamment isolée, examen du standard trop absolu, bloc de décision dupliqué
Corrections : sauvegarde hors ligne et site distinct, comparaison/démonstration/essai proportionné, section de décision originale
P2 corrigés : hero propre au sujet, verbes moins catégoriques, urgence qualifiée, DesignGouv adjacent, concurrence traçable, roadmap et registre alignés
Revalidation : P0 = 0 ; P1 = 0
Contrôles indépendants : 184/184 tests SEO, ESLint ciblé et TypeScript réussis ; un CTA, un bloc de six choix, aucun tableau
Snapshot de sortie : page e7fb596…, OG 0a86833…, registre 8cc1255…, lien entrant 710430a…, roadmap 44fe2ac…
Verdict : porte P3 validée
```

### Snapshot P3

| Fichier                                                            | SHA-256                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `src/app/guides/signes-besoin-logiciel-metier/page.tsx`            | `e7fb59638dee7937a20f35fb2ef9bd066bc726e669564b5f3d0be8e3ab7761fb` |
| `src/app/guides/signes-besoin-logiciel-metier/opengraph-image.tsx` | `0a86833221ba684bdb46353aed7443e06fcdd1cf7a510d9fb78409eecc6553e8` |
| `src/lib/guides.ts`                                                | `8cc125593ae794d7a05ae4b0b460bc0accaedec292317c7d39a96988bbee95a2` |
| `src/app/guides/automatiser-processus-metier/page.tsx`             | `710430a83da2eb8f571f4fa40adb4e28676a417b938b30b1804afd6469788677` |
| `docs/roadmap-guides-seo.md`                                       | `44fe2ace46d1e5830886c57dac72d2481c9913bbab18a8494713400173867e4f` |

## Rapport P4 — Plume humaine et contrôle final

```text
PASSE 4 TERMINÉE
Vérifications de plume : ouverture propre au diagnostic, sauvegarde formulée concrètement, test standard proportionné et absence de répétition des six cartes
Coupe ou resserrement : les corrections avaient été intégrées et revalidées en P3 ; aucune nouvelle modification sémantique de la page n’a été requise en P4
Retour P3 effectué : oui, deux fois ; revalidation finale P0 = 0 et P1 = 0
Diff sémantique après la dernière revalidation P3 : aucun changement de fond
Scorecard justifiée : 20/20, détail ci-dessous
Validation humaine réelle : non
Autorisation éditoriale : Décision de publication : autorisée explicitement par le commanditaire
Commandes et résultats : 184/184 tests SEO, ESLint ciblé, TypeScript, git diff --check et build de production réussis ; artefact SEO validé
Largeurs et états contrôlés : 320, 390, 768, 1024 et 1440 px ; absence de débordement, H1 unique, blocs de décision, fiche copiable, CTA et FAQ contrôlés
Route, image sociale et console : route 200, canonical exact, noindex temporaire de lot, deux JSON-LD, OG 1200 × 630 lisible, aucune erreur ni alerte console
Snapshot final individuel : page e7fb596…, OG 0a86833…, registre 8cc1255…, lien entrant 710430a…, roadmap 44fe2ac…
Statut maximal : publiable — validation éditoriale déléguée
Verdict : porte individuelle P4 validée ; le marqueur noindex reste volontaire jusqu’au gel et au build commun des trois guides
```

### Scorecard justifiée

| Axe         |      Note | Preuve dans la page                                                                  | Correction éventuelle |
| ----------- | --------: | ------------------------------------------------------------------------------------ | --------------------- |
| Intention   |         2 | Situation du dirigeant et réponse nuancée dans l’ouverture                           | —                     |
| Décision    |         2 | Six issues non hiérarchiques et phrase de prochaine action                           | —                     |
| Pédagogie   |         2 | Logiciel métier défini, exemples ordinaires et fiche directement copiable            | —                     |
| Profondeur  |         2 | Continuité, accès, usages parallèles, standard, entretien et sortie                  | —                     |
| Preuve      |         2 | France Num, RGESN, DesignGouv et CNIL placés près des affirmations                   | —                     |
| Comparaison |         2 | Corriger, automatiser, acheter, étudier, sécuriser et attendre restent comparables   | —                     |
| Originalité |         2 | Diagnostic sans score arbitraire, fondé sur trois situations réelles                 | —                     |
| Style       |         2 | Mots du dirigeant, verbes concrets, aucune architecture propriétaire                 | —                     |
| Conversion  |         2 | Action autonome complète, mauvais cas explicites et CTA sans développement présumé   | —                     |
| SEO/produit |         2 | Métadonnées, canonical, Article/Breadcrumb, OG, temps de lecture et rendu responsive | —                     |
| **Total**   | **20/20** | Porte éditoriale et technique individuelle atteinte                                  | QA de lot à rejouer   |

### Test lecteur non technique

```text
Test réalisé par une personne réelle : non
Profil du lecteur : non disponible pendant cette production
Ce qu’il a compris comme réponse : non mesuré auprès d’une personne réelle
Décision qu’il prendrait : non mesurée auprès d’une personne réelle
Endroit où il a commencé à survoler : non mesuré auprès d’une personne réelle
Passage crédible ou trop commercial : non mesuré auprès d’une personne réelle
Termes ou passages bloquants : aucun détecté par le contre-audit indépendant et la relecture de plume
Questions encore sans réponse : aucune P0 ou P1 connue
Corrections appliquées : recherche officielle, contre-audit indépendant, réécriture, build et contrôle du vrai rendu
Décision de publication : autorisée explicitement par le commanditaire
```

## Gel commun du lot

Le 21 juillet 2026, le marqueur `ready-for-human-review` a été retiré après la
validation des trois dossiers et l’ajout du slug au contrôle de gouvernance.
Le snapshot commun passe 184/184 tests SEO, 328/328 tests globaux, ESLint,
TypeScript et le build de production. L’artefact vérifie 88 URL, 71 liens dans
`llms.txt`, 46 temps de lecture et 164 blocs JSON-LD. La page est donc
indexable dans l’artefact de production ; cela ne prouve ni son crawl, ni son
indexation effective, ni son classement.

### Snapshot commun final

| Fichier                                                            | SHA-256                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `src/app/guides/signes-besoin-logiciel-metier/page.tsx`            | `f1c631340f94775b5abb51cd904d5e4fd5d74abee0a5d3c088b55d2d54474efe` |
| `src/app/guides/signes-besoin-logiciel-metier/opengraph-image.tsx` | `0a86833221ba684bdb46353aed7443e06fcdd1cf7a510d9fb78409eecc6553e8` |
| `src/app/guides/automatiser-processus-metier/page.tsx`             | `710430a83da2eb8f571f4fa40adb4e28676a417b938b30b1804afd6469788677` |
| `src/lib/guides.ts`                                                | `b1d1f628949d73648fdb1a3d80922f7ca71ee0f48e1388db22fb87b4671f0318` |
| `src/lib/editorial-governance.test.ts`                             | `e79ed862c4af56ab56ed31d29d0d5a116c10db06ec5fc21dd302c34d51864ab8` |
| `docs/roadmap-guides-seo.md`                                       | `c0fc92baccd3adb3999ccc09827cd7423fc9c4933e089486bf018f91137be619` |

Le manifeste externe `manifests/lot-trois-guides-final.sha256` gèle également
les trois dossiers de recherche sans tenter de faire hacher le manifeste par
lui-même.
