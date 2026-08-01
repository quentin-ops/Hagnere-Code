# Dossier de travail — Votre entreprise a-t-elle besoin d’un logiciel métier ?

Page de travail : `/guides/signes-besoin-logiciel-metier`

Date du nouveau cycle : 31 juillet 2026

> Ce dossier remplace le cycle éditorial du 21 juillet 2026. Les anciens
> statuts `GO`, hashes et preuves de publication ne valent pas pour le corpus
> actuel : la remise à zéro des guides et le protocole strict en quatre passes
> imposent une nouvelle création et de nouveaux contrôles.

## Journal des quatre passes

Propriétaire éditorial unique : orchestrateur final `/root`

| Passe                             | État                     | Date       | Responsable                    | Snapshot                                                          | Blocages                                      |
| --------------------------------- | ------------------------ | ---------- | ------------------------------ | ----------------------------------------------------------------- | --------------------------------------------- |
| 1. Création complète              | Terminée — porte validée | 2026-07-31 | `/root/signes_p1_creation`     | `docs/research/manifests/signes-besoin-logiciel-metier-p1.sha256` | aucune ; `G1 = GO_P2`                         |
| 2. Enrichissement et vérification | Terminée — porte validée | 2026-07-31 | `/root/signes_p2_verification` | `docs/research/manifests/signes-besoin-logiciel-metier-p2.sha256` | aucune ; `G2 = GO_P3`                         |
| 3. Polish rédactionnel            | Terminée — porte validée | 2026-08-01 | `/root/g3_p1_creation`         | `docs/research/manifests/signes-besoin-logiciel-metier-p3.sha256` | aucune ; `G3 = GO_P4`                         |
| 4. Antipasse IA et contrôle final | Terminée — porte validée | 2026-08-01 | `/root/signes_p4_antipasse`    | `docs/research/manifests/signes-besoin-logiciel-metier-p4.sha256` | aucune ; `G4 = GO_CONTROLE_TRANSVERSAL`       |

États autorisés : `À faire`, `En cours`, `Bloquée`, `À reprendre`,
`Terminée — Gx à valider` et `Terminée — porte validée`. Une modification d’un
fichier après la création du manifeste d’une passe invalide ce snapshot.

### Manifeste du snapshot

Chaque manifeste est écrit en dernière opération de sa passe. Le manifeste P4
est `docs/research/manifests/signes-besoin-logiciel-metier-p4.sha256`. Il couvre
le dossier, la page, le diagnostic, ses tests, l’image sociale et les trois
illustrations éditoriales dédiées. Le dossier n’inscrit pas son propre hash
afin d’éviter une référence circulaire.

## 1. Fiche d’identité

```text
Slug : signes-besoin-logiciel-metier
Statut actuel : reprise qualité Q1 corrigée sur brouillon privé et noindex ; nouveau contre-audit indépendant obligatoire
Requête principale, encore qualitative : signes besoin logiciel métier
Moment du parcours : comprendre, diagnostiquer, puis décider quoi examiner
Lecteur précis : dirigeant ou responsable opérationnel d’une TPE/PME, expert de son activité mais non spécialiste du logiciel
Situation déclenchante : les mêmes blocages reviennent entre fichiers, e-mails, personnes et outils existants
Décision principale après lecture : sécuriser, simplifier, mieux utiliser l’existant, connecter, adopter un standard ou seulement alors examiner une fonction sur mesure
Niveau de connaissance au départ : connaît les incidents réels, pas nécessairement les familles de solutions
5 questions indispensables : qu’est-ce qui se répète ? quelles conséquences ? qui est touché ? la règle est-elle stable ? quelle réponse simple n’a pas encore été essayée ?
3 objections ou craintes : « Excel suffit peut-être », « un nouvel outil va ajouter du travail », « le sur-mesure coûtera trop cher et nous enfermera »
Action utile sans contact commercial : documenter trois situations réelles et obtenir une orientation locale, sans envoyer les données
CTA possible : faire examiner les trois situations et les réponses déjà testées
Hors périmètre : promettre un ROI, fixer un budget universel, choisir une technologie, rédiger un cahier des charges complet ou garantir un résultat
Date de la recherche : 31 juillet 2026
Responsable de la synthèse P1 : /root/signes_p1_creation
Responsable de la vérification P2 : /root/signes_p2_verification
Responsable de l’antipasse P4 : /root/signes_p4_antipasse
```

## 1 bis. Contrat de langage humain

- **Phrase exacte que le lecteur pourrait dire au téléphone :** « On perd du
  temps entre les fichiers, les mails et nos logiciels. Est-ce qu’il nous faut
  vraiment un outil à nous ? »
- **Réponse attendue en une phrase :** des blocages répétés justifient un
  diagnostic, pas automatiquement un développement sur mesure.
- **Terme central expliqué sans jargon :** un logiciel métier est un outil
  organisé autour d’un travail propre à l’entreprise, par exemple préparer une
  intervention, suivre un dossier ou valider une commande.
- **Mots ordinaires du lecteur :** recopier, chercher, attendre, relancer,
  version, accès, erreur, absence, client, commande, intervention, facture.
- **Mots d’agence à éviter sans traduction :** système d’information,
  workflow, orchestration, transformation digitale, dette technique,
  architecture cible, gouvernance.
- **Projet des 150 premiers mots :** partir de trois blocages reconnaissables ;
  demander de sécuriser immédiatement ce qui menace les données ou
  l’activité ; proposer de noter trois situations ; annoncer exactement six
  réponses possibles et rappeler que l’observation reste un verdict.
- **Décision après ces 150 mots :** le lecteur sait qu’il doit collecter des
  faits et qu’aucun « signe » isolé ne commande du sur-mesure.
- **H2 relus isolément :** oui ; chacun annonce une question ou une décision
  distincte.
- **Comparaison comprise à 390 px sans colonne masquée :** oui ; le rendu ne
  présente ni débordement horizontal ni contenu inaccessible.
- **FAQ dont la première phrase répond :** oui ; chaque réponse commence par
  la conclusion utile avant sa justification.
- **CTA formulé comme résultat :** « Faire examiner mes trois situations ».

### Test de l’ouverture

- [x] la situation vécue doit apparaître avant la méthode de l’agence ;
- [x] le coût total de possession est défini au premier usage ;
- [x] aucun lexique ne retarde la réponse ;
- [x] aucune métaphore ne devient un système à apprendre ;
- [x] la réponse reste honnête sans empiler les réserves.

## 2. Cannibalisation et maillage

| Page existante                            | Intention conservée par cette page                              | Différence du nouveau guide                                               | Lien ou arbitrage                                                     |
| ----------------------------------------- | --------------------------------------------------------------- | ------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `/guides/automatiser-processus-metier`    | choisir le premier processus à automatiser et tester l’économie | décider avant cela quelle famille de réponse examiner                     | lien contextuel seulement depuis la réponse « connecter/automatiser » |
| `/guides/calculer-roi-application-metier` | tester un investissement avec des hypothèses et un coût complet | réunir les faits et écarter les réponses inutiles avant le calcul         | lien contextuel dans la section coût/pilote                           |
| `/services/outils-internes-sur-mesure`    | présenter l’accompagnement commercial sur les outils internes   | guide autonome, neutre, pouvant conclure qu’aucun projet n’est nécessaire | CTA contextuel, sans promesse                                         |
| `/demarrer-un-projet`                     | recueillir une demande                                          | action après le diagnostic, pas substitut au diagnostic                   | CTA principal                                                         |

Les anciennes URL de guides non republiées ne sont pas liées depuis ce
brouillon. Les redirections et le registre partagé restent hors périmètre de
P1 et sous responsabilité de l’orchestrateur.

**Justification d’une URL distincte :** cette page répond à la question qui
précède l’automatisation, le calcul de rentabilité et le choix d’un outil :
« avons-nous assez de faits pour examiner une solution, et laquelle ? »

## 3. Demande et vocabulaire du lecteur

Observation qualitative du 31 juillet 2026 sur des résultats francophones
répondant à des variantes de « signes besoin logiciel métier / logiciel sur
mesure PME ». Il ne s’agit ni d’une mesure de volume ni d’un export de Search
Console.

Formulations rencontrées ou plausibles dans la bouche du lecteur :

- « Tout repose sur la personne qui tient le tableau. »
- « On saisit deux fois la même chose. »
- « On ne sait jamais quelle version est la bonne. »
- « Notre logiciel fait beaucoup, mais pas cette étape. »
- « Dès qu’une personne est absente, le dossier attend. »
- « Est-ce que je dois changer de logiciel ou relier ceux que j’ai ? »
- « À partir de quand le sur-mesure devient-il raisonnable ? »

Variantes utiles : logiciel métier PME, besoin application interne, outil
interne sur mesure, limites Excel, logiciel standard ou sur mesure, ressaisie,
processus manuel, centraliser les données. Aucun classement, volume ni
difficulté SEO n’est revendiqué sans données propriétaires.

## 4. Carte concurrentielle

| Page observée et date de consultation                                                                                                                                                                                                    | Réponse et angle                                           | Bon point                                                                      | Manque décisionnel ou de preuve                                                                             | Conflit d’intérêt possible                                                 |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- | ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| [Jaïkin — « 5 signes que votre PME a besoin d’un logiciel sur mesure »](https://www.jaikin.eu/blog/signes-pme-logiciel-sur-mesure), publié le 2 avril 2026, consulté le 31 juillet 2026                                                  | cinq irritants mèneraient vers le sur-mesure               | situations faciles à reconnaître et rappel final que le standard peut convenir | seuils horaires, gains, budgets et cas présentés sans méthode publiable suffisante pour devenir nos preuves | Jaïkin vend du conseil, de l’automatisation et du développement sur mesure |
| [SetInUp — « Logiciel personnalisé : 7 signes… »](https://www.setinup.com/logiciel-personnalise-7-signes-besoin-logiciel-sur-mesure/), publié le 6 juillet 2026, consulté le 31 juillet 2026                                             | sept symptômes conduiraient à un éditeur-concepteur        | mentionne aussi l’entretien et la dépendance au prestataire                    | déductions fortes à partir de statistiques secondaires dont le périmètre n’est pas établi dans l’article    | SetInUp vend des logiciels personnalisés                                   |
| [Spiria — « 10 signes qu’il est temps d’investir dans le logiciel sur mesure »](https://www.spiria.com/fr/blogue/10-signes-quil-est-temps-dinvestir-dans-le-logiciel-sur-mesure), publié le 27 octobre 2018, consulté le 31 juillet 2026 | dix symptômes, puis invitation à une analyse de l’existant | reconnaît finalement que le sur-mesure n’est pas une panacée                   | page ancienne ; plusieurs formulations absolues sur propriété, sécurité, évolution et productivité          | Spiria vend du développement logiciel sur mesure                           |

**Angle mort commun :** les listes confondent souvent le constat d’un problème
avec le choix d’une technologie. Elles laissent peu de place à la sécurité
immédiate, à la suppression du processus, à une meilleure configuration, au
standard ou à la décision d’attendre.

**Valeur originale :** un diagnostic construit sur trois situations vécues,
avec exactement six réponses comparables. « Observer » reste un verdict
possible lorsque les faits manquent ou que les règles changent ; ce n’est pas
une septième solution à acheter.

## 5. Fiche de preuves

Sources institutionnelles et dossier pratique secondaire rouverts le
31 juillet 2026.

| Affirmation utilisable                                                                                                                  | Source primaire et passage utile                                                                                                                                                                                                                                                   | Nature                                                                                                                      | Périmètre et limite                                                                                                                                                           | Fraîcheur                                                 | Emplacement prévu                        | Conséquence lecteur                                  |
| --------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- | ---------------------------------------- | ---------------------------------------------------- |
| Avant d’automatiser, inventorier les tâches répétitives et observer fréquence, durée, personnes, complexité et impact d’une erreur      | [France Num — L’automatisation, une solution pour gagner en efficacité](https://www.francenum.gouv.fr/guides-et-conseils/pilotage-de-lentreprise/numerisation-des-processus/lautomatisation-une-solution), parties sur le choix et la cartographie                                 | dossier pratique secondaire hébergé par France Num, rédigé par Erwan Kezzar (Contournement) et Marc-Olivier Sercki (Pathta) | méthode utile ; auteurs privés spécialistes du no-code et du développement, donc conflit d’intérêt possible ; les gains et préférences d’outils du dossier ne sont pas repris | mis à jour le 9 juillet 2026, consulté le 31 juillet 2026 | diagnostic et fiche des trois situations | mesurer avant de choisir                             |
| Cartographier peut révéler des améliorations avant toute automatisation ; commencer petit, décrire les exceptions, documenter et former | même dossier France Num signé par deux acteurs privés                                                                                                                                                                                                                              | dossier pratique secondaire                                                                                                 | pas une garantie de gain et pas une doctrine publique indépendante                                                                                                            | mis à jour le 9 juillet 2026, consulté le 31 juillet 2026 | réponses 2, 3 et pilote                  | garder les solutions simples                         |
| Les droits doivent suivre le besoin d’en connaître ; les comptes partagés nuisent à la traçabilité                                      | [CNIL — Gérer les habilitations](https://www.cnil.fr/fr/securite-gerer-les-habilitations) et [Guide de la sécurité des données personnelles, version 2024 mise à jour 2026](https://cnil.fr/sites/default/files/2026-05/cnil_guide_securite_personnelle.pdf), fiches habilitations | recommandation d’autorité                                                                                                   | concerne d’abord les traitements de données personnelles                                                                                                                      | mise à jour 2026                                          | urgence sécurité                         | corriger les accès avant d’ajouter une fonction      |
| Les sauvegardes doivent être régulières, protégées, séparées et leur restauration testée                                                | [CNIL — Les règles essentielles de sécurité](https://www.cnil.fr/fr/securite-des-donnees-les-regles-essentielles) et guide 2026, fiche sauvegardes                                                                                                                                 | recommandation d’autorité                                                                                                   | proportionner au risque ; portée légale principale : données personnelles                                                                                                     | 19 juin 2026 / guide 2026                                 | urgence sécurité                         | sauvegarder ne suffit pas sans essai de restauration |
| Préparer le fonctionnement dégradé, les alertes, la continuité et la reprise                                                            | guide CNIL 2026, fiche continuité d’activité                                                                                                                                                                                                                                       | recommandation d’autorité                                                                                                   | à adapter à l’activité et aux risques                                                                                                                                         | mise à jour 2026                                          | urgence, pilote et arrêt                 | nommer qui reprend la main                           |
| Partir des besoins et tester avant de développer                                                                                        | [DesignGouv — Bien concevoir un service numérique](https://design.numerique.gouv.fr/bien-concevoir/)                                                                                                                                                                               | doctrine de conception publique                                                                                             | vise les services publics ; utilisée seulement comme heuristique transférable                                                                                                 | consultée en 2026                                         | réponse sur mesure et pilote             | rencontrer les personnes qui font le travail         |
| Évaluer la nécessité, les alternatives non numériques et les services existants avant de créer                                          | [RGESN 2024](https://ecoresponsable.numerique.gouv.fr/publications/referentiel-general-ecoconception/), critères 1.1 et 1.2                                                                                                                                                        | référentiel public d’écoconception                                                                                          | ne prouve ni rentabilité ni obligation générale de ne pas développer                                                                                                          | 2024, consulté en 2026                                    | comparaison des six réponses             | examiner l’existant et le standard avant le neuf     |

Les sources sont également listées en fin de page avec leur périmètre. Les
liens décisifs apparaissent près des affirmations correspondantes.

### Contradictions et données à ne pas publier

- Aucun nombre universel d’heures perdues ne prouve un besoin logiciel.
- Aucun nombre de feuilles, d’onglets, de salariés ou d’utilisateurs ne
  déclenche automatiquement du sur-mesure.
- Une ressaisie peut être supprimée, mieux configurée ou connectée ; elle ne
  démontre pas à elle seule qu’il faut remplacer les outils.
- « Centraliser » ne signifie pas « ouvrir tous les accès » et n’est pas
  toujours la réponse la plus sûre.
- Un incident de sécurité ou de continuité exige d’abord une correction et un
  plan de reprise, pas un cahier des charges.
- Les gains, budgets, délais, taux d’adoption et économies de concurrents ne
  sont pas repris faute de méthode et de périmètre vérifiables.
- Le guide CNIL ne transforme pas toute donnée d’entreprise en donnée
  personnelle ; son périmètre est indiqué.
- DesignGouv et le RGESN inspirent la méthode de conception, sans constituer
  une preuve commerciale de performance pour une PME.
- Aucune obligation RGPD de développer un logiciel sur mesure n’est affirmée.

### Calculs reproductibles

Le guide ne produit aucun ROI ni budget par défaut. La fiche demande seulement
des observations brutes :

- fréquence observée sur une période renseignée par le lecteur ;
- durée de travail et durée d’attente, séparées ;
- nombre de personnes concernées ;
- conséquence constatée et mode de reprise.

Le coût total de possession (TCO) est présenté comme une liste de postes à
confirmer : cadrage, réalisation ou paramétrage, migration, intégrations,
formation, temps interne, licences/hébergement, support/maintenance, sécurité,
évolutions, double exploitation et sortie/réversibilité. Une inconnue reste
« à confirmer » ; elle n’est jamais remplacée par zéro.

Pour un chiffrage ultérieur, le guide renvoie vers le guide dédié au ROI. Aucun
calcul caché ni score moyen n’alimente l’orientation locale.

## 6. Empreinte éditoriale à ne pas reproduire

| Guide voisin                             | Ouverture                              | Progression                          | Dispositif             | Risque de répétition                                      |
| ---------------------------------------- | -------------------------------------- | ------------------------------------ | ---------------------- | --------------------------------------------------------- |
| Automatiser un processus métier          | choix d’un premier processus           | portes, sept options, calcul, pilote | calculateur économique | ne pas reprendre ses cinq portes ni son calcul            |
| Calculer le ROI d’une application métier | séparation trésorerie/capacité         | TCO, scénarios, stress tests         | calculateur ROI        | ne pas ouvrir par les coûts ni produire de chiffre        |
| Valider une idée de SaaS                 | tester une demande avant de développer | hypothèses, tests, arrêt             | planificateur de tests | ne pas transformer les situations en validation de marché |

Choix propre au nouveau guide :

```text
Tension motrice : « j’observe de vrais blocages, mais est-ce un problème d’outil ? »
Ouverture : trois scènes ordinaires, puis réponse immédiate « diagnostic, pas développement automatique »
Progression : urgence → trois situations → six réponses → contre-cas → exemples → choix/pilote → coût complet → décision
Artefact signature : fiche locale et copiable de trois situations, sans envoi ni score opaque
Rythme : phrases concrètes, questions que le dirigeant peut poser à son équipe, décisions courtes
Place du CTA : après une action autonome complète et dans le panneau latéral cohérent avec le site
Conclusion : une phrase de prochaine action qui peut être « observer »
Différences : pas de seuil, pas de calcul financier, pas de destination technologique imposée, sécurité séparée de l’investissement
```

## 7. Plan annoté

| Section                                  | Question résolue                          | Preuve ou exemple                                                            | Décision produite                               | Format                     |
| ---------------------------------------- | ----------------------------------------- | ---------------------------------------------------------------------------- | ----------------------------------------------- | -------------------------- |
| Un blocage répété ouvre un diagnostic    | faut-il déjà lancer un projet ?           | trois scènes ordinaires                                                      | documenter avant d’acheter                      | réponse courte + mémo      |
| Sécuriser ce qui peut arrêter l’activité | qu’est-ce qui ne peut pas attendre ?      | CNIL accès, sauvegardes, continuité                                          | correction immédiate distincte du projet        | liste priorisée            |
| Noter trois situations réelles           | quels faits réunir ?                      | méthode France Num                                                           | dossier comparable sans données envoyées        | diagnostic local           |
| Comparer exactement six réponses         | quelles options examiner ?                | France Num, RGESN, DesignGouv                                                | prochaine vérification, pas prescription        | six cartes numérotées      |
| Reconnaître les faux signaux             | quand Excel/l’existant suffisent-ils ?    | contre-cas                                                                   | attendre, former, simplifier ou observer        | cartes « ne pas investir » |
| Lire trois scénarios fictifs             | comment appliquer la méthode ?            | situations clairement étiquetées                                             | voir que plusieurs réponses peuvent se succéder | cas pédagogiques           |
| Comparer sans score magique              | quels critères départagent les réponses ? | fréquence, conséquence, personnes, stabilité, accès, adoption, réversibilité | préparer une décision                           | matrice mobile             |
| Tester petit et savoir arrêter           | comment réduire le risque ?               | France Num + méthode de conception                                           | pilote réversible et critères d’arrêt           | checklist                  |
| Examiner le coût complet                 | quels coûts et responsabilités manquent ? | douze familles TCO                                                           | laisser les inconnues à confirmer               | grille                     |
| Écrire la prochaine action               | que faire lundi ?                         | synthèse des trois fiches                                                    | phrase de décision et CTA facultatif            | conclusion                 |

## 8. Ressource et conversion

```text
Ressource nécessaire : oui, mais intégrée à la page ; aucun XLS/XLSX/CSV ni téléchargement
Problème résolu : transformer une impression générale en trois situations comparables
Résultat autonome : une orientation transparente pour chaque situation et une synthèse copiable
Format : composant local accessible, imprimable et copiable
Champs : travail, résultat attendu, fait observé, fréquence/période, durée de travail/attente, personnes, outils, conséquence, contournement, stabilité, accès/reprise, essais déjà menés
Exemple rempli : trois scénarios fictifs séparés du formulaire
Conclusion « ne pas investir » : oui, verdict OBSERVER ou réponse simple suffisante
Sources/hypothèses/limites : visibles au-dessus et au-dessous de l’outil
Données et destination : état React local au navigateur ; aucun envoi, stockage distant ou analytics spécifique
Processus : règles d’orientation pures, visibles et testées ; aucun score caché
QA : clavier, libellés, contraste, état vide, copie, impression, vue 320 à 1440 px
Limite : orientation de préparation, pas audit, prescription, devis ou validation de sécurité
Maintenance : composant et tests dans le dossier du slug
Bon fit Hagnéré Code : problème répété, règle assez stable, responsable métier disponible, solutions simples raisonnablement examinées
Mauvais fit : incident cyber actif, urgence juridique, litige, processus encore indéfini, demande de garantie
Action non commerciale : remplir et partager la synthèse en interne
CTA : Faire examiner mes trois situations
Résultat après clic : transmettre le contexte via /demarrer-un-projet ; aucune réponse ou faisabilité n’est garantie par le formulaire
```

### Règles transparentes de l’orientation locale

1. Si une situation menace les accès, l’intégrité des données ou la continuité,
   la première orientation est **sécuriser**.
2. Si le fait n’est pas répété, si la règle change encore ou si les informations
   essentielles manquent, le verdict est **observer**. Il ne compte pas parmi
   les six réponses.
3. Si l’étape peut disparaître ou être simplifiée, examiner **simplifier ou
   supprimer**.
4. Si une fonction, un paramétrage ou une formation de l’outil actuel n’a pas
   été réellement essayé, examiner **mieux configurer et former**.
5. Si les outils conviennent chacun mais que le transfert crée le blocage,
   examiner **connecter ou automatiser de façon limitée**.
6. Si une solution standard plausible n’a pas été essayée sur les cas réels,
   examiner **adopter un logiciel standard**.
7. Une **fonction sur mesure** n’est examinée que lorsque le besoin est répété,
   important, assez stable, que les réponses précédentes ont été raisonnablement
   vérifiées et qu’un propriétaire métier accepte un pilote réversible.

Ces règles n’établissent ni une obligation d’achat ni un diagnostic de sécurité.

## 9. Rapport de sortie P1

Rapport établi après rédaction, contrôles techniques et BAT, puis figé par le
manifeste créé en dernière opération. La porte G1 relève encore de
l’orchestrateur.

```text
PASSE_1_TERMINEE
Slug : signes-besoin-logiciel-metier
Fichiers : dossier de recherche ; page ; diagnostic et son test ; test de qualité ; image Open Graph ; trois illustrations SVG dédiées
Contrat de réponse : tenu dans l’ouverture ; exactement six familles de réponse ; OBSERVER reste un verdict hors décompte
Sources institutionnelles : CNIL 2026 ; DesignGouv, limité aux services publics ; RGESN 2024, limité à l’écoconception
Dossier pratique secondaire : France Num 2026, rédigé par Erwan Kezzar (Contournement) et Marc-Olivier Sercki (Pathta), avec intérêt commercial signalé
Concurrents observés : Jaikin (2 avril 2026), SetInUp (6 juillet 2026), Spiria (27 octobre 2018), consultés le 31 juillet 2026
Calculs : aucun chiffre, gain, prix, délai ou ROI arbitraire ; les montants inconnus restent « à confirmer »
Exemples : trois situations explicitement fictives, sans résultat présenté comme réel
Contre-cas : existant ou Excel suffisant, standard préférable, sécurité d’abord, attente justifiée, sur-mesure prématuré, processus à supprimer
Diagnostic : trois situations locales ; sept champs factuels ; neuf réponses oui/non/inconnu ; règles transparentes ; aucun score ni envoi ; copie et impression des trois situations
CTA : /demarrer-un-projet et /services/outils-internes-sur-mesure
Contrôles : 16/16 tests ciblés ; ESLint ciblé ; TypeScript ; build Next.js Webpack ; BAT clair/sombre de 320 à 1440 px ; interactions, copie, impression, CTA, canonical, robots, schémas et médias contrôlés
Contrôle SEO global : 174/175 ; seul échec attendu, le garde-fou signale cette route P1 locale non encore intégrée au registre partagé
BAT : aucun débordement horizontal, un H1, un main#main-content, aucune erreur console ; Open Graph 1200 × 630 ; Article et BreadcrumbList uniquement
Inconnues et risques résiduels : porte G1 non validée ; intégration centrale et dates de publication à décider par l’orchestrateur ; absence de test avec un lecteur humain réel ; P2/P3/P4 non lancées
Manifeste P1 : docs/research/manifests/signes-besoin-logiciel-metier-p1.sha256
Publication : aucune ; aucun commit, push ou déploiement effectué
```

## 10. Revue finale

La scorecard, le test lecteur et le contre-audit restent volontairement vides
en P1. Ils ne peuvent pas être prévalidés par l’auteur de cette passe.

### Vérifications P1 prévues

- [x] réponse et limites dans les 150 premiers mots ;
- [x] exactement six réponses, avec `OBSERVER` hors décompte ;
- [x] trois exemples explicitement fictifs ;
- [x] aucune statistique, économie, prix ou délai inventé ;
- [x] sources primaires proches des affirmations et périmètre visible ;
- [x] outil local sans envoi, règles transparentes, copie et impression ;
- [x] un seul H1, un seul `main#main-content`, canonical exact et noindex ;
- [x] seulement `Article` et `BreadcrumbList` en JSON-LD ;
- [x] image sociale dynamique 1200 × 630 et illustrations dédiées ;
- [x] CTA honnête vers des routes existantes ;
- [x] TypeScript, ESLint, tests ciblés, build et contrôle du rendu ;
- [x] aucun fichier partagé, registre, redirection ou publication modifié ;
- [x] P1 validée par l’orchestrateur avant toute P2.

## G1 — validation indépendante de l’orchestrateur

Contrôle réalisé le 31 juillet 2026 après vérification du manifeste P1, sans
reprendre le verdict de l’agent auteur.

### Fond, réponse et preuves

- les 150 premiers mots rendent immédiatement le verdict utile : un blocage
  répété ouvre un diagnostic, pas automatiquement un développement ;
- les six réponses sont distinctes et ordonnées ; `OBSERVER` reste explicitement
  un verdict hors décompte ;
- les trois exemples sont signalés comme fictifs et n’empruntent aucun chiffre
  à un cas client ;
- les affirmations CNIL ont été rapprochées du guide de sécurité 2026 et de la
  fiche sur les habilitations ; les sauvegardes, la restauration, les droits et
  la continuité restent dans leur périmètre déclaré ;
- les critères 1.1 et 1.2 du RGESN 2024, la méthode DesignGouv et la page France
  Num ont été rouverts ; cette dernière reste qualifiée de source secondaire
  rédigée par deux prestataires privés et son conflit d’intérêt est visible ;
- aucun prix, gain, seuil, délai, ROI, obligation légale générale ou promesse de
  faisabilité n’est inventé.

### Produit, accessibilité et rendu

- dix largeurs contrôlées de 320 à 1 536 px, plus paysage mobile et équivalent
  zoom 200 % : aucun débordement horizontal global ;
- thèmes clair et sombre contrôlés ; héros, CTA, sommaire, article et panneaux
  restent lisibles ;
- un seul `h1`, un seul `main#main-content`, canonical exact et robots
  `noindex, nofollow` ;
- les trois situations conservent séparément leurs textes et leurs neuf réponses ;
  les branches `sécuriser` et `simplifier` ont été rejouées dans le navigateur ;
- la copie contient les trois situations ; l’impression contient trois fiches,
  les sept faits — le travail servant de titre de fiche —, les neuf réponses
  brutes et l’orientation de chacune ;
- l’illustration éditoriale 16:9 et l’image Open Graph ont été inspectées ;
  l’Open Graph répond en PNG 1200 × 630 ;
- les deux seuls objets JSON-LD racine sont `Article` et `BreadcrumbList` ;
  aucune donnée structurée FAQ, avis, prix, offre ou date de publication
  inventée n’est émise.

### Contrôles reproductibles

```text
Manifeste P1 avant annotation G1 : 9/9 empreintes valides
Tests ciblés orchestrateur : 22/22
ESLint ciblé : OK
TypeScript : OK
Build Next.js Webpack : OK
Mesure rendue : 3 965 mots, 20 min à 200 mots/min
Contrôle SEO : 174/175
Suite globale : 532/533
Artefact d’indexation privé : OK
```

L’unique échec des deux suites globales est le même garde-fou attendu :
`src/lib/guides.test.ts:134` détecte la route locale explicitement privée et
absente du registre partagé. Il interdit une publication prématurée, mais ne
bloque pas l’enrichissement P2. Il devra disparaître avant la porte de
publication.

L’ajout de cette section rend le manifeste P1 historique : ses neuf empreintes
ont été vérifiées avant l’annotation du dossier par l’orchestrateur. La passe
suivante devra produire son propre manifeste sur l’état enrichi.

```text
G1 = GO_P2
P0 : 0
P1 : 0
Réserve de publication : guide toujours privé, non enregistré, non publié
```

## Passe 2 — enrichissement, contradiction et vérification

Passe menée le 31 juillet 2026 par
`/root/signes_p2_verification`, à partir du contenu P1 autorisé par
`G1 = GO_P2`. L’agent a terminé l’enrichissement substantiel mais son processus
de clôture documentaire est resté bloqué après les contrôles techniques.
L’orchestrateur a donc repris uniquement la consignation des preuves, le
manifeste et la porte G2 ; il n’a pas attribué à l’agent un verdict que celui-ci
n’avait pas rendu.

### Registre contradictoire des affirmations

| Affirmation examinée                                                                                          | Statut P2                 | Décision éditoriale                                                                                                          |
| ------------------------------------------------------------------------------------------------------------- | ------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Une situation peut être orientée sans avoir décrit le travail réel                                            | `À_RETIRER`               | les sept champs factuels sont désormais requis ; hors sécurité, un champ vide impose `OBSERVER`                              |
| Une inconnue peut être compensée par les autres réponses                                                      | `À_RETIRER`               | aucune moyenne ni pondération ; chaque inconnue décisive impose `OBSERVER`                                                   |
| Un risque d’accès, de restauration, d’intégrité ou de continuité doit être traité avant le projet fonctionnel | `VÉRIFIÉE_À_NUANCER`      | priorité conservée pour un risque significatif, après évaluation proportionnée ; aucune qualification automatique d’incident |
| Des sauvegardes suffisent sans essai de restauration                                                          | `À_RETIRER`               | intégrité et restauration régulières doivent être testées selon le contexte                                                  |
| Un mode dégradé peut relâcher les protections                                                                 | `À_RETIRER`               | le mode dégradé conserve les protections, prévoit le rattrapage et le retour au fonctionnement normal                        |
| La journalisation doit tout conserver indéfiniment                                                            | `À_RETIRER`               | finalité, actions tracées, personnes habilitées, durée et information des utilisateurs doivent être définies                 |
| Le RGESN démontre la rentabilité ou la conformité complète du projet                                          | `À_RETIRER`               | seuls les critères 1.1 et 1.2 servent de questions de nécessité ; aucune évaluation RGESN complète ni conclusion économique  |
| DesignGouv constitue une doctrine générale pour les PME                                                       | `À_RETIRER`               | source limitée aux pratiques de conception des services publics, utilisée comme heuristique transférable                     |
| La page France Num est une preuve publique indépendante                                                       | `À_RETIRER`               | source secondaire rédigée par deux acteurs privés, avec périmètre et intérêt commercial visibles                             |
| Un logiciel standard est nécessairement plus rapide                                                           | `À_RETIRER`               | le délai total reste inconnu avant paramétrage, migration, formation et adoption                                             |
| Une connexion limitée est toujours préférable au remplacement                                                 | `INCONNUE`                | présentée comme hypothèse à tester avec surveillance, reprise manuelle et réversibilité                                      |
| Les six réponses et le verdict `OBSERVER` couvrent le choix préparatoire                                      | `VÉRIFIÉE_DANS_LE_MODÈLE` | ordre explicite et testé ; il ne remplace ni audit, ni faisabilité, ni devis                                                 |

### Sources rouvertes et périmètres retenus

- **CNIL, habilitations**, page datée du 13 mars 2024 : besoin d’en
  connaître, revue des habilitations et danger des comptes partagés pour la
  traçabilité ; périmètre principal des données personnelles.
- **CNIL, Guide de la sécurité des données personnelles**, version 2024 mise
  à jour en 2026 : accès, sauvegardes, restauration, continuité et reprise,
  avec mesures proportionnées au risque.
- **CNIL, règles essentielles**, page du 19 juin 2026 : stratégie de
  sauvegarde et tests de restauration à adapter au contexte.
- **RGESN, version 2024 du 28 mai 2024** : seules les questions 1.1 et 1.2
  relatives à la nécessité, aux alternatives non numériques et aux services
  existants sont utilisées. Le guide n’annonce ni conformité globale ni
  rentabilité.
- **DesignGouv, Bien concevoir un service numérique** : pratiques destinées
  aux services publics ; aucune date visible n’a été inventée.
- **France Num**, dossier publié le 14 novembre 2025 et mis à jour le
  9 juillet 2026 : source secondaire signée par Erwan Kezzar et Marc-Olivier
  Sercki, acteurs privés. Seules les méthodes d’observation, cartographie,
  test et maintenance sont reprises.

Les sept URL externes rendues dans la page ont répondu en HTTP 200 lors du
contrôle P2. La date de consultation reste le 31 juillet 2026.

### Modifications issues de la contradiction

1. Ajout d’un certificat de complétude factuelle : travail, résultat attendu,
   fait observé, période et fréquence, conséquence, personnes et outils,
   contournement et essais.
2. Priorité de la branche `SÉCURISER` lorsque la réponse sécurité vaut oui,
   y compris si un fait reste vide ; dans tous les autres cas, un fait vide
   interdit une orientation fonctionnelle.
3. Conservation explicite de toutes les inconnues : une réponse
   `À vérifier` ne devient jamais un zéro ou une réponse implicite.
4. Remplacement de l’expression ambiguë « donnée sensible » par des
   catégories compréhensibles : donnée personnelle, information
   confidentielle, secret d’affaires et identifiant d’accès.
5. Ajout des exigences de restauration, d’intégrité, de continuité en mode
   dégradé, de rattrapage et de retour à la normale.
6. Définition plus exacte de la journalisation : finalité, actions, accès,
   durée de conservation et information des utilisateurs.
7. Limitation visible du RGESN, de DesignGouv et de France Num à ce qu’ils
   permettent réellement d’affirmer.
8. Suppression de la promesse implicite qu’un standard serait plus rapide ;
   paramétrage, migration, formation et adoption restent à établir.
9. Ajustement de la description SEO pour annoncer le choix standard ou
   sur-mesure sans promettre de résultat.
10. Correction de l’alternative textuelle de l’illustration 4:3.

### Invariants vérifiés du diagnostic

```text
Entrées : 7 faits + 9 réponses oui / non / à vérifier
Calcul caché : aucun
Stockage distant : aucun
Ordre : sécuriser → observer si faits/inconnues → simplifier → configurer → connecter → standard → sur-mesure
Champ factuel vide : OBSERVER
Champ factuel vide + risque sécurité oui : SÉCURISER
Répétition non ou règles instables : OBSERVER
Étape supprimable : SIMPLIFIER
Existant non réellement testé : CONFIGURER
Transfert entre deux outils autrement adaptés : CONNECTER
Standard non essayé ou déjà adapté : STANDARD
Responsable métier absent ou inconnu : OBSERVER
Sur-mesure : seulement après élimination explicite des branches précédentes
Sorties : les trois situations sont copiables et imprimables
```

### Contre-analyse du paysage concurrentiel

Onze pages francophones ont été ouvertes : Jaïkin, SetInUp, Websual, Atenia,
deux pages Aktislab, Pictogramaweb, ClicConcept, Sage, Azerty et Spiria. La page
la plus proche est celle d’Aktislab et la plus exhaustive celle de Websual.
Aucune ne réunit toutefois un diagnostic local non captif, trois situations,
six réponses ordonnées et un verdict `OBSERVER` hors décompte.

La frontière de cannibalisation est maintenue :

- ce guide choisit une **famille de réponse** ;
- `/guides/automatiser-processus-metier` choisit un processus et teste son
  économie ;
- `/guides/calculer-roi-application-metier` calcule des scénarios ;
- la sécurité, les accès et la conformité relèvent de guides dédiés ;
- la stabilisation, la reprise et la migration d’un logiciel vieillissant
  relèveront des slugs prévus, sans créer ici de lien vers une route absente.

### Contrôles de sortie P2

```text
Tests ciblés agent P2 : 20/20
Tests ciblés orchestrateur après dernière correction : 20/20
ESLint ciblé : OK
TypeScript : OK
git diff --check : OK
Build Next.js Webpack orchestrateur : OK, 63 pages
Contrôle SEO : 174/175
Artefact d’indexation privé : OK
Mesure rendue : 4 070 mots, 20 min à 200 mots/min
Sources externes : 7/7 réponses HTTP 200
JSON-LD : Article + BreadcrumbList uniquement
Canonical : https://hagnere-code.ai/guides/signes-besoin-logiciel-metier
Robots : noindex, nofollow
BAT : 320, 390, 768, 1 024 et 1 440 px ; aucun débordement ; un H1 ; un main
BAT interactif : situation complète → SIMPLIFIER ; fait retiré → OBSERVER ; sécurité oui malgré ce fait manquant → SÉCURISER
Erreurs navigateur : 0
```

L’échec SEO restant est volontairement le garde-fou
`src/lib/guides.test.ts:134` : la route reste privée et absente du registre
central tant que les passes 3 et 4 et le contrôle transversal ne sont pas
validés.

```text
PASSE_2_TERMINEE
Publication : aucune
Statut : brouillon privé, noindex, non enregistré
Clôture documentaire : reprise par l’orchestrateur après blocage technique de l’agent
```

## G2 — validation indépendante de l’orchestrateur

Contrôle réalisé le 31 juillet 2026 après reprise des sorties substantielles de
P2. Le verdict repose sur les fichiers et le rendu observés par
l’orchestrateur, pas sur l’annonce de fin de l’agent.

### Contradiction factuelle

- les pages CNIL, le guide CNIL, le RGESN, DesignGouv et France Num ont été
  recoupés par un agent de sources distinct de l’agent P2 ;
- les formulations de portée générale ont été retirées ou limitées à leur
  périmètre réel ;
- la dernière formulation absolue sur la sécurité a été corrigée avant la
  porte : elle vise désormais un risque significatif, évalué et traité de
  façon proportionnée ;
- aucune statistique, économie, durée, budget, obligation juridique générale
  ou résultat client n’a été ajouté ;
- les inconnues restent visibles et empêchent toute conclusion fonctionnelle
  prématurée.

### Logique et expérience

- les sept champs factuels sont réellement nécessaires ;
- les neuf réponses n’utilisent ni score, ni moyenne, ni valeur cachée ;
- les tests couvrent chaque fait manquant, chaque inconnue, les six branches
  et le verdict `OBSERVER` ;
- le navigateur confirme la séquence complète
  `SIMPLIFIER → OBSERVER → SÉCURISER` lorsqu’un fait est retiré puis qu’un
  risque de sécurité est déclaré ;
- la copie et l’impression conservent les trois situations ; aucun formulaire
  commercial n’est mêlé au diagnostic local ;
- le rendu reste harmonieux avec le gabarit GuidePremiumLayout et le CTA de
  droite reste contextuel.

### Preuves techniques

```text
Manifeste P2 avant annotation G2 : 9/9 empreintes valides
Tests ciblés finaux : 20/20
ESLint ciblé : OK
TypeScript : OK
git diff --check : OK
Build Next.js Webpack : OK
Contrôle SEO : 174/175, seul garde-fou privé attendu
Artefact d’indexation privé : OK
BAT responsive : 320 à 1 440 px, aucun débordement
Métadonnées : canonical exact ; noindex, nofollow
Données structurées : Article + BreadcrumbList uniquement
Erreurs navigateur : 0
```

L’annotation G2 rend le manifeste P2 historique. Ses neuf empreintes ont été
contrôlées avant cette section ; P3 devra créer un nouveau manifeste couvrant
sa propre sortie.

```text
G2 = GO_P3
P0 : 0
P1 : 0
Réserve de publication : guide toujours privé, non enregistré, non publié
```

## Passe 3 — polish rédactionnel

Passe menée le 1er août 2026 par `/root/g3_p1_creation`, après lecture
intégrale du Prompt Word « Prompt #3 - Polish Rédactionnel », du présent
dossier, de la page, du diagnostic, des deux tests, de l’image sociale et des
trois illustrations. Le travail est resté strictement rédactionnel : aucun
fait, chiffre, seuil, prix, délai, source, garantie, cas client ou règle de
décision n’a été ajouté.

### Adaptation du Prompt Word au contexte Hagnéré Code

Les principes utiles ont été conservés : réponse rapide, français naturel,
paragraphes respirables, transitions logiques, vocabulaire expliqué, FAQ qui
répond dès la première phrase et CTA formulé comme un résultat. Les éléments
patrimoniaux obsolètes ont été écartés : persona fiscal, répétition de marque,
citations juridiques, double FAQ et schéma `FAQPage`. Les règles actuelles du
dépôt restent prioritaires : FAQ visible sans données structurées FAQ,
`Article` et `BreadcrumbList` seulement, route privée `noindex, nofollow`,
aucune promesse et aucun téléchargement de tableur.

### Audit rédactionnel établi avant modification

1. Les dix sections étaient solides sur le fond, mais les neuf passages d’une
   section à la suivante n’avaient pas tous un pont explicite. Les ruptures les
   plus nettes se situaient après l’illustration d’ouverture, les contrôles de
   sécurité, le verdict `OBSERVER`, les contre-cas, les exemples et le pilote.
2. Les dix titres de section étaient exacts, mais aucun n’était formulé comme
   la question immédiate du dirigeant. La lecture isolée des titres ressemblait
   davantage à un plan interne qu’à un parcours de décision.
3. Le deuxième paragraphe d’ouverture réunissait l’urgence, les faits à noter
   et les six réponses dans une seule unité dense. La réponse restait claire,
   mais la respiration à l’oral pouvait être améliorée.
4. Trois FAQ étaient légèrement indirectes : préférence du standard, moment
   d’étudier le sur-mesure et contrôles à sécuriser. Leur conclusion utile
   arrivait après une tournure impersonnelle ou une liste nominale.
5. Quatre microcopies du diagnostic sonnaient comme une spécification : la
   conservation locale, la question du périmètre sur mesure, le titre de sortie
   et l’action d’impression.

### Corrections ciblées

- La meta description passe de 141 à 145 caractères, sans nouvelle promesse :
  elle nomme l’existant, le standard et le sur-mesure comme choix à comparer.
- Cinq titres sur dix prennent une forme interrogative ; les cinq autres
  conservent un verbe d’action. Le H1 et la promesse du héros restent inchangés.
- Le paragraphe dense de l’ouverture est scindé sans perdre le verdict, les
  trois situations, les six réponses ni la place séparée d’`OBSERVER`.
- Neuf ponts relient maintenant les dix sections : continuité, observation,
  ordre des réponses, faux signaux, exemples, critères, pilote, coût complet
  puis phrase de décision.
- Trois réponses de FAQ commencent directement par « Un logiciel standard… »,
  « Le sur-mesure mérite… » et « Commencez par… ». Aucun fait n’a changé.
- La microcopy du diagnostic dit désormais que tout reste dans la page, propose
  de tester un résultat plutôt que de « prouver la valeur », nomme les trois
  fiches dans le titre de sortie et dans le bouton d’impression.
- Un test rédactionnel vérifie la longueur de la meta, les dix sections, les
  cinq titres interrogatifs et l’absence des principaux tics du Prompt P3.

### Relecture isolée et invariants

- **H1 et héros :** inchangés, cohérents avec le title et sans promesse de
  résultat.
- **H2/H3 :** dix sections dans le même ordre ; les cartes des six réponses,
  les trois exemples fictifs et le verdict `OBSERVER` conservent leur hiérarchie.
- **Ouverture :** le verdict utile reste dans les premières phrases ; la
  sécurité précède le choix fonctionnel et les six réponses restent explicites.
- **Conclusion :** prochaine preuve, possibilité d’attendre et CTA facultatif
  restent clairement séparés d’une décision de développer.
- **FAQ :** neuf questions, réponses directes, aucune FAQ structurée.
- **Diagnostic :** sept faits, neuf réponses et ordre de `orientSituation`
  inchangés ; aucune moyenne, aucun score, aucun envoi et aucun stockage.
- **Faits P2 :** limites CNIL, RGESN, DesignGouv et France Num intactes ; aucune
  statistique, moyenne, durée, budget ou obligation générale ajoutée.
- **SEO et données structurées :** canonical, `PRIVATE_ROBOTS`, `Article` et
  `BreadcrumbList` inchangés ; aucun `FAQPage`, `HowTo`, avis ou `wordCount`.
- **Conversion :** CTA vers `/demarrer-un-projet` et
  `/services/outils-internes-sur-mesure` inchangés, sans garantie de faisabilité.

### Contrôles P3

```text
Tests ciblés : 21/21
ESLint ciblé : OK
TypeScript : OK
Prettier ciblé : OK
git diff --check : OK
Contrôle SEO : 174/175
Suite globale : 537/538
Échec unique des deux suites : src/lib/guides.test.ts:134, garde-fou attendu pour la route locale privée absente du registre
Indexation : noindex, nofollow ; aucun changement du catalogue, du sitemap ou de llms.txt
Données structurées : Article + BreadcrumbList uniquement
```

Le BAT navigateur P2 n’a pas été présenté comme une preuve P3 nouvelle. Cette
passe modifie uniquement des textes et des transitions ; le contrôle rendu et
la porte G3 restent à la charge de l’orchestrateur.

### Correction demandée pendant le contrôle G3

Le premier manifeste P3 a été invalidé après une mesure du texte rendu par
l’orchestrateur : `4 257 mots / 21 min`, contre `20 min` encore affichées dans
le héros. Le champ local `readTimeMin` a été corrigé de 20 à 21, sans modifier
le contenu, les métadonnées, les règles du diagnostic ni son indexabilité. Les
contrôles P3 ont été rejoués avant la création d’un nouveau manifeste complet.
La mesure locale sur le serveur Next.js Webpack a confirmé une route HTTP 200
et le résultat `4 257 mots / 21 min`.

```text
PASSE_3_TERMINEE
Statut : Terminée — G3 à valider
Publication : aucune
Git : aucun add, commit, push ou déploiement
Limite : aucun verdict G3 attribué par l’agent P3
```

## G3 — validation indépendante de l’orchestrateur

Contrôle réalisé le 1er août 2026 sur le snapshot P3, puis entièrement rejoué
après une correction demandée par l’orchestrateur.

### Verdict initial et correction

Le premier contrôle a trouvé une incohérence lecteur : le polish portait le
texte rendu à **4 257 mots, soit 21 minutes**, alors que le héros conservait
`20 min`. G3 a donc été maintenue en `NO_GO` provisoire. L’agent P3 a corrigé
`readTimeMin` à 21, documenté l’écart, rejoué ses contrôles et produit un
nouveau manifeste. Le rendu de production local affiche désormais `21 min` et
la mesure indépendante confirme `4 257 mots / 21 min`.

### Revue du polish

- les neuf transitions améliorent la continuité sans transformer chaque fin de
  section en annonce mécanique ;
- cinq titres interrogatifs portent les questions du lecteur, tandis que les
  autres restent des actions, ce qui évite une monotonie de forme ;
- l’ouverture répond avant le CTA et conserve la sécurité, les trois situations,
  les six réponses et `OBSERVER` dans le bon ordre ;
- les trois FAQ corrigées donnent la réponse dès leur première phrase ;
- la microcopy locale est plus simple, sans changer les sept faits, les neuf
  réponses, les règles de calcul, la copie ou l’impression ;
- aucune nouvelle source, statistique, promesse, obligation, durée, économie
  ou histoire client n’a été introduite.

### Contrôle rendu et technique

```text
Manifeste P3 corrigé avant annotation G3 : 9/9 empreintes valides
Tests orchestrateur : 30/30 avant correction ; 21/21 après correction ciblée
ESLint ciblé : OK
TypeScript : OK
git diff --check : OK
Build Next.js Webpack après correction : OK, 63 pages
Mesure rendue : 4 257 mots, 21 min
BAT : 320, 390, 768, 1 024, 1 440 et 1 536 px ; aucun débordement significatif
Thèmes : clair et sombre lisibles
Structure : un H1, un main#main-content, dix sections éditoriales
SEO privé : canonical exact ; noindex, nofollow
Données structurées : Article + BreadcrumbList uniquement
Erreurs navigateur : 0
Contrôle SEO : 174/175, seul garde-fou de brouillon privé attendu
Artefact d’indexation privé : OK
```

L’annotation G3 rend le manifeste P3 historique. Ses neuf empreintes ont été
contrôlées avant cette section ; P4 devra produire son propre manifeste sur le
texte final.

```text
G3 = GO_P4
P0 : 0
P1 : 0
Réserve de publication : guide toujours privé, non enregistré, non publié
```

## Passe 4 — antipasse IA et contrôle d’authenticité

Passe menée le 1er août 2026 par `/root/signes_p4_antipasse`, agent distinct
des responsables P1, P2 et P3, après `G3 = GO_P4`. L’agent a lu intégralement
le Prompt Word « Prompt 4 - Antipasse IA », le dossier jusqu’à G3 et les neuf
fichiers couverts par le snapshot P3. Les exemples patrimoniaux et le ton
« café-CGP » du Prompt n’ont pas été transposés : la voix visée est celle d’un
professionnel du logiciel qui explique une décision à un dirigeant de TPE ou
PME, sans familiarité jouée.

### Audit établi avant modification

L’audit initial attribuait **17/20** au texte P3. Le fond était déjà solide et
la plupart des marqueurs habituels étaient absents. Les défauts restants se
concentraient dans les ponts ajoutés entre les sections, trois images de
langage, quelques formulations d’agence et une conclusion trop construite.

| Famille contrôlée                  | Observation avant correction                                                                                   | Décision P4                                                                                                                  | État final                                       |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| 1. Sur-structuration               | dix sections, six cartes, tableaux et diagnostic très visibles                                                 | garder : la structure sert la comparaison et l’usage mobile ; aucune sous-section décorative ajoutée                         | volontaire, fonctionnelle                        |
| 2. Répétitions                     | « trois situations », « six réponses » et `OBSERVER` reviennent souvent ; la marque apparaissait dans le corps | garder les trois termes contractuels ; retirer la marque des exemples et de la fiche imprimée                                | répétitions restantes nécessaires au modèle      |
| 3. Annonces de plan                | quatre fins de section annonçaient explicitement la section suivante                                           | supprimer les annonces sur les réponses, les exemples, les critères et la décision finale                                    | corrigé                                          |
| 4. Transitions mécaniques          | « Reste à examiner », « montrent maintenant », « Il faut donc » et « vous pouvez enfin » créaient un patron    | conclure chaque section sur le fait ou l’action en cours ; conserver seulement les liens de cause à effet utiles             | corrigé                                          |
| 5. Symétries parfaites             | six réponses et trois exemples utilisent des cartes de même forme                                              | garder les composants comparables ; casser uniquement les symétries de prose qui n’aident pas la lecture                     | symétrie fonctionnelle assumée                   |
| 6. Empilements ternaires           | l’ouverture utilise trois scènes et les CTA trois bénéfices                                                    | garder ces inventaires bornés ; aucune triplette « un, deux, trois » ou raison rhétorique ajoutée                            | aucun tic résiduel                               |
| 7. Conclusions génériques          | « Le but du guide n’est pas… Il est… » fermait le texte comme une synthèse automatique                         | remplacer par la conséquence concrète pour le lecteur : éviter de financer une solution qui ne traite pas le fait observé    | corrigé                                          |
| 8. Ton promotionnel                | CTA déjà limités et absence de promesse ; une question disait « mérite-t-il vraiment »                         | remplacer par « justifie-t-il » et conserver les limites de faisabilité                                                      | neutre                                           |
| 9. Faux naturel                    | aucun « du coup », aucune confidence, aucune familiarité forcée                                                | ne pas importer les tournures patrimoniales ou le ton café du Prompt                                                         | absent                                           |
| 10. Métaphores forcées             | « robot silencieux », « épouse les habitudes », « maquiller en certitude » et un pilote qui « ne peut perdre » | remplacer par propagation sans alerte, reproduction des habitudes, distinction établi/à tester et condition d’arrêt          | corrigé                                          |
| 11. Adverbes béquilles             | quelques « notamment », « vraiment », « réellement », « exactement » et « raisonnablement »                    | retirer ceux qui n’apportent rien ; garder « exactement six » et « raisonnablement examinées », qui protègent les invariants | résiduels justifiés                              |
| 12. Phrases de longueur uniforme   | rythme déjà varié, mais plusieurs ponts ajoutaient une cadence identique                                       | supprimer ces ponts ; conserver les phrases longues quand elles délimitent une source ou un risque                           | rythme varié                                     |
| 13. Jargon d’agence                | « prochaine preuve », « preuve suivante » et « projet fonctionnel » sonnaient comme un livrable de cadrage     | employer « ce qu’il faut vérifier », « ce que vous allez vérifier » et « choisir ou modifier un outil »                      | corrigé ; TCO et réversibilité restent expliqués |
| 14. Prudence en cascade            | l’introduction des exemples alignait trois dénégations                                                         | répartir la limite en deux phrases ; garder les limites CNIL, RGESN, DesignGouv et France Num nécessaires à l’exactitude     | corrigé sans affaiblir le périmètre des sources  |
| 15. Formulations sans sujet humain | « L’ordre empêche », « Une bonne orientation autorise » et « Le diagnostic vient ensuite » abstraient l’action | adresser directement le lecteur ou nommer l’équipe et les personnes concernées                                               | corrigé                                          |

Le contrôle parallèle des quinze motifs du Prompt Word confirme aussi
l’absence d’auto-félicitation, de dramatisation creuse, de parenthèses en
chaîne, de conclusion « En conclusion », d’inversion sujet-verbe artificielle
et de connecteur administratif.

### Corrections ciblées appliquées

- Le label répété « Prochaine preuve » devient « Ce qu’il faut vérifier ».
- Quatre ponts de section purement annonciateurs sont supprimés ; les autres
  transitions restent lorsqu’elles rendent le lien de cause à effet explicite.
- La sécurité est toujours prioritaire, mais le texte parle directement de
  choisir ou modifier un outil plutôt que de « projet fonctionnel ».
- Les trois métaphores repérées sont remplacées par leurs effets concrets :
  propagation d’une erreur, reproduction d’une habitude et confusion entre
  fait établi et hypothèse.
- Le titre du pilote nomme sa condition d’arrêt au lieu de jouer sur l’idée de
  victoire ou de défaite.
- Les exemples restent fictifs ; leur avertissement est plus court et le nom
  Hagnéré Code n’est plus répété dans le corps éditorial.
- La FAQ demande directement quand étudier le sur-mesure et commence sa réponse
  par l’action à mener.
- Le diagnostic remplace deux questions conditionnelles par une adresse
  directe, simplifie le verdict `OBSERVER` et retire la marque de la fiche
  imprimée.
- La dernière section parle de la décision du lecteur et de son effet, sans
  conclusion générique ni promesse commerciale.
- Le test de qualité interdit désormais explicitement six formulations
  résiduelles de la version P3.

### Relecture à voix haute simulée

| Bloc relu                       | Verdict  | Observation                                                                                                     |
| ------------------------------- | -------- | --------------------------------------------------------------------------------------------------------------- |
| Ouverture et héros              | `HUMAIN` | trois scènes concrètes, verdict immédiat, sécurité puis collecte des faits ; le triptyque sert l’identification |
| Sections 1 à 3                  | `HUMAIN` | questions directes, personnes nommées, passage naturel de la continuité aux situations vécues                   |
| Section 4 et six réponses       | `HUMAIN` | régularité assumée pour comparer ; textes précis et points d’arrêt asymétriques                                 |
| Section 5 et contre-cas         | `HUMAIN` | aucune dramatisation ; chaque carte peut conclure à ne pas investir                                             |
| Trois exemples fictifs          | `HUMAIN` | scénarios distincts, avertissement bref, orientations expliquées sans résultat client                           |
| Sections 7 et 8                 | `HUMAIN` | critères puis pilote reliés par la décision réelle, sans score ou transition promotionnelle                     |
| Sections 9 et 10                | `HUMAIN` | TCO expliqué avant le sigle ; fin concrète et non formatée comme une conclusion de rapport                      |
| FAQ, neuf réponses              | `HUMAIN` | réponse dans la première phrase ; limites conservées sans double FAQ ni schéma FAQ                              |
| Diagnostic, copie et impression | `HUMAIN` | microcopies directes, inconnues visibles, aucun langage de scoring ou de captation                              |
| CTA latéraux et CTA final       | `HUMAIN` | résultat attendu explicite, standard et attente possibles, aucune garantie de faisabilité                       |

### Score final d’authenticité

```text
Test de détection IA crédible : OUI
Authenticité humaine avant P4 : 17/20
Authenticité humaine après P4 : 19/20
Seuil de publication P4 : atteint (minimum 18/20)
```

Le point restant n’est pas un défaut à corriger : les six réponses, les
tableaux et les trois fiches emploient volontairement des formes répétables
pour permettre une comparaison fiable. Les trois tics résiduels surveillés
sont donc les répétitions contractuelles, les cartes parallèles et la prudence
technique autour des sources ; tous trois sont justifiés par l’usage ou
l’exactitude.

### Invariants contrôlés après correction

- sept faits, neuf réponses brutes, six orientations et verdict `OBSERVER`
  inchangés ;
- ordre de `orientSituation` et priorité de la sécurité inchangés ;
- trois exemples toujours fictifs ;
- aucune statistique, date, source, promesse, prix, délai, obligation ou cas
  client ajouté ;
- limites CNIL, RGESN, DesignGouv et France Num intactes ;
- outil local, copie et impression inchangés ;
- canonical, `PRIVATE_ROBOTS`, CTA et `readTimeMin: 21` inchangés ;
- données structurées limitées à `Article` et `BreadcrumbList` ;
- aucun catalogue, registre, lock, redirection, fichier partagé, commit, push
  ou déploiement modifié.

### Contrôles de sortie P4

```text
Tests ciblés : 27/27
ESLint ciblé : OK
TypeScript : OK
Prettier ciblé : OK
git diff --check : OK
Build Next.js Webpack : OK, 63 pages
Route de production locale : HTTP 200
Mesure rendue finale : 4 218 mots, 21 min à 200 mots/min
Contrôle SEO : 174/175
Échec SEO unique : src/lib/guides.test.ts:134, garde-fou attendu du brouillon privé non enregistré
Artefact d’indexation : OK, preview noindex
Structure rendue : un H1, un main#main-content
Canonical : https://hagnere-code.ai/guides/signes-besoin-logiciel-metier
Robots : noindex, nofollow
JSON-LD rendu : Article + BreadcrumbList uniquement
Schémas interdits : aucun FAQPage, HowTo, avis, offre ou wordCount
```

```text
PASSE_4_TERMINEE
Statut : Terminée — G4 à valider
Publication : aucune
Git : aucun add, commit, push ou déploiement
Limite : aucun verdict G4 attribué par l’agent P4
Manifeste P4 : docs/research/manifests/signes-besoin-logiciel-metier-p4.sha256
```

## G4 — validation indépendante de l’orchestrateur

Contrôle réalisé le 1er août 2026 sur le snapshot P4, sans reprendre le score
de l’agent comme verdict automatique.

### Relecture anti-IA

- les quinze familles distinguent les répétitions artificielles des structures
  nécessaires à la comparaison ;
- les transitions supprimées étaient des annonces de plan, non des liens
  logiques indispensables ;
- les métaphores retirées sont remplacées par leurs conséquences concrètes ;
- l’ouverture, les sources, les limites et les six réponses n’ont pas été
  affaiblies pour paraître plus naturelles ;
- la dernière section aboutit à une décision praticable sans conclusion
  générique ni promesse commerciale ;
- les cartes parallèles, tableaux et fiches restent assumés : leur régularité
  sert l’usage, elle n’est pas un tic rédactionnel ;
- le score de **19/20** est cohérent avec la lecture, tout en restant une aide
  de contrôle et non une mesure scientifique.

### Fond et invariants

- aucune source, date, statistique, économie, délai, prix, obligation, cas
  client ou garantie n’a été ajouté ;
- les limites CNIL, RGESN, DesignGouv et France Num restent visibles et
  correctement circonscrites ;
- les sept faits, neuf réponses, six orientations, la priorité sécurité et le
  verdict `OBSERVER` sont inchangés ;
- les trois exemples restent fictifs et la décision peut toujours être de
  sécuriser, corriger l’existant, choisir un standard ou attendre ;
- l’outil reste local, sans envoi ni stockage, avec copie et impression des
  trois situations.

### Preuves indépendantes

```text
Manifeste P4 avant annotation G4 : 9/9 empreintes valides
Tests orchestrateur : 30/30
ESLint ciblé : OK
TypeScript : OK
git diff --check : OK
Build Next.js Webpack : OK, 63 pages
Mesure rendue : 4 218 mots, 21 min
BAT : 320, 390, 768, 1 024, 1 440 et 1 536 px ; aucun débordement significatif
Structure : un H1, un main#main-content
Canonical : https://hagnere-code.ai/guides/signes-besoin-logiciel-metier
Robots : noindex, nofollow
JSON-LD : Article + BreadcrumbList uniquement
Erreurs navigateur : 0
Contrôle SEO : 174/175, seul garde-fou du brouillon privé attendu
Artefact d’indexation privée : OK
Authenticité éditoriale : 19/20, seuil P4 atteint
```

L’annotation G4 rend le manifeste P4 historique. Ses neuf empreintes ont été
contrôlées avant cette section. Toute correction issue du contrôle transversal
invalidera ce verdict et imposera un nouveau contrôle complet.

```text
G4 = GO_CONTROLE_TRANSVERSAL
P0 : 0
P1 : 0
Réserve de publication : contrôle transversal indépendant encore obligatoire
```

## Q1 — contrôle transversal initial, refus et correction

Le premier contrôle transversal a été confié à
`/root/signes_transversal_quality`, distinct des agents P1 à P4. Il a relu le
snapshot en lecture seule et rendu le verdict terminal suivant :

```text
Score global : 87/100
P0 : 0
P1 : 3
Axes sous 80 % : logique décisionnelle, sécurité, reproductibilité
Décision : BLOCKED_RELEASE
État : local uniquement ; aucun commit, push, déploiement ou publication
```

Ce refus a invalidé le candidat P4 comme candidat de publication. Le manifeste
P4 reste la preuve historique du texte qui avait franchi G4 ; il n'est pas
réécrit après correction.

### Défauts reproduits

1. `standardTested="no"` conduisait trop tôt vers « Adopter un logiciel
   standard », même lorsque `standardFits="no"` rendait les réponses
   contradictoires.
2. Le lockfile propre contenait `brace-expansion` 2.1.2 et 5.0.7 ainsi que
   `sharp` 0.34.5 sous Next et Miniflare. `npm audit --omit=dev` signalait
   sept nœuds de gravité haute, issus de deux avis et non de sept défauts
   indépendants.
3. Le test global refusait encore le brouillon local non enregistré. Cet échec
   reste attendu tant que l'intégration publique n'est pas autorisée, mais il
   interdit de décrire le brouillon comme un candidat de publication vert.
4. À 320 px, « Voir le service outils internes » dépassait la largeur utile du
   libellé du CTA mobile et était ellipsé.

### Corrections appliquées

- L'orientation `standard` affiche « Tester un logiciel standard » seulement
  pour `no / unknown` ; elle affiche « Adopter » uniquement après
  `yes / yes`.
- `no / no` et `no / yes` deviennent des états contradictoires avec verdict
  `OBSERVER`. `yes / no` ne permet d'étudier le sur-mesure que si un
  responsable métier est nommé ; sinon le verdict reste `OBSERVER`.
- La matrice de régression couvre ces combinaisons, les inconnues, la priorité
  sécurité, les faits manquants, les sept orientations externes, les trois
  situations, les sept champs factuels et les neuf questions.
- La cinquième réponse visible est désormais « Tester avant d'adopter un
  logiciel standard ».
- Le CTA mobile devient « Outils internes » sans changer sa destination
  `/services/outils-internes-sur-mesure`.
- L'override npm temporaire `sharp: 0.35.3` déduplique les Sharp imbriqués sur
  la version corrigée. La mise à jour ciblée du lockfile résout
  `brace-expansion` en 1.1.18, 2.1.4 et 5.0.9.

L'override Sharp est un P2 de maintenance accepté, pas une promesse de sécurité
absolue. Il doit être retiré dès qu'une version stable de Next compatible avec
OpenNext dépend nativement de Sharp 0.35.x. Aucun upload d'image ni traitement
Sharp à partir d'une donnée lecteur n'a été identifié dans le site actuel.

### Preuves sur une installation propre

```text
npm ci : OK, 750 paquets, 0 vulnérabilité
Next réellement installé : 16.2.12
Tests ciblés propres : 38/38
ESLint ciblé : OK
TypeScript : OK
Prettier 3.6.2 sur les quatre fichiers corrigés : OK
git diff --check : OK
npm audit --omit=dev : 0 vulnérabilité
Build direct Next.js Webpack : OK, 63 routes
Contrôle SEO : 174/175
Échec SEO unique : garde-fou attendu du brouillon privé non enregistré
Route corrigée : HTTP 200 sur le serveur construit depuis l'installation propre
Mesure rendue : 4 234 mots, 21 min
Navigateur, matrice standard : test / adopter / sur-mesure / observer conformes
CTA mobile à 320 px : 97 px de contenu pour 97 px disponibles, aucun tronquage
Débordement document à 320 px : 0
Erreurs et avertissements navigateur : 0
```

Le serveur propre et le build direct prouvent la reproductibilité du brouillon
privé. Ils ne rendent pas vert le `prebuild` de publication : l'inscription au
registre, les dates réelles, les builders SEO et la suppression de la
redirection historique restent interdits avant le nouveau contre-audit.

```text
Q1_CORRIGEE_PRETE_POUR_RECONTROLE
P0 connu : 0
P1 connu après correction ciblée : 0
Décision de publication : aucune
Contrôle requis : nouvel agent indépendant sur la nouvelle empreinte Q1
```

## Q2 — recontrôle indépendant après correction

Le snapshot Q1 corrigé a été confié en lecture seule à
`/root/signes_quality_reaudit`. L'agent n'a participé ni à la correction de la
logique, ni à la mise à jour des dépendances. Il a vérifié le manifeste 11/11,
rejoué la matrice et les contrôles techniques, puis rendu le verdict terminal
suivant :

```text
Score global : 96/100
Tous les axes : au moins 80/100
P0 : 0
P1 : 0
P2 : 1 accepté — override temporaire sharp 0.35.3 à requalifier lors d'une mise à jour Next/OpenNext
P3 : 2 — compteurs historiques et seconde capture sombre/impression incomplète
Verdict terminal : GO_QUALITE_GUIDE
Portée : prêt à intégrer localement, pas publié ni déployé
```

Les preuves indépendantes confirment l'installation propre (750 paquets,
zéro vulnérabilité), Next 16.2.12, Sharp 0.35.3 dédupliqué, les versions
corrigées de `brace-expansion`, 37/37 tests ciblés, TypeScript et ESLint verts,
un build de 63 routes et 4 234 mots rendus pour 21 minutes de lecture. Le seul
échec de la suite complète et du contrôle SEO est le garde-fou volontaire qui
interdit de présenter un guide privé, absent du registre, comme publié.

Un Lighthouse mobile indicatif sur le serveur issu de la copie propre donne
86 en performance, 100 en accessibilité, 100 en bonnes pratiques et 69 en SEO.
Le score SEO est exclusivement dégradé par le `noindex` volontaire du brouillon.
Le LCP de laboratoire à 4,2 s est classé P2 de suivi : il devra être recontrôlé
sur le candidat public et après déploiement. Le binaire Lighthouse signalait en
outre Node 22.18 alors que sa version demandait au moins 22.19 ; ce résultat
n'est donc pas présenté comme une mesure définitive.

L'orchestrateur valide ce GO local. Toute intégration publique modifie
l'empreinte : elle impose une nouvelle installation propre, les tests complets,
le build avec la chaîne de publication, une BAT publique locale et un dernier
contre-audit en lecture seule avant commit et push.

```text
Q2 = GO_INTEGRATION
P0 : 0
P1 : 0
Publication : non
Étape suivante : intégration sérialisée et recontrôle du nouveau candidat
```

## R1 — intégration publique et batterie de release locale

L'orchestrateur a acquis le verrou d'intégration partagé avant de modifier les
sources communes. L'entrée publique utilise les dates réelles du 1er août 2026,
les trois illustrations dédiées et 21 minutes de lecture. La page importe
désormais l'entrée centrale par `getGuide`, puis produit ses métadonnées et ses
données structurées par `buildGuideMetadata` et
`buildGuideStructuredData`.

L'intégration a aussi :

- retiré le slug de l'inventaire des anciennes redirections ;
- ajouté le guide à `PUBLISHED_GUIDES`, donc au hub, au sitemap et à
  `llms.txt` sans édition manuelle de ces artefacts ;
- ajouté l'icône de carte et un lien entrant contextuel depuis
  `automatiser-processus-metier` ;
- remplacé la date du guide mis en avant dans le pied du hub par la date du
  guide réellement le plus récent ;
- masqué le lien d'évitement clavier uniquement à l'impression, après
  observation de sa présence indésirable sur la première page PDF ;
- ajouté des tests de régression pour l'intégration, le mois le plus récent et
  la règle d'impression.

### Installation propre et chaîne de publication

```text
npm ci : 750 paquets, 0 vulnérabilité
npm audit --omit=dev : 0 vulnérabilité
Next : 16.2.12
Sharp : 0.35.3 dédupliqué
brace-expansion : 1.1.18, 2.1.4 et 5.0.9
Suite complète finale : 550/550
Contrôle SEO production final : 176/176
TypeScript : OK
ESLint ciblé : OK
Build npm officiel avec prebuild et postbuild : OK
Routes générées : 63/63
Artefact d'indexation : production indexable
Artefact contrôlé : 47 URL, 30 liens llms.txt, 47 pages, 5 temps de lecture, 82 blocs JSON-LD
```

### BAT du build exact

```text
Route dédiée : HTTP 200, 0 redirection
Hub, sitemap.xml, llms.txt, Open Graph et trois SVG : HTTP 200
Canonical : https://hagnere-code.ai/guides/signes-besoin-logiciel-metier
Robots local de production : index, follow
JSON-LD : Article + BreadcrumbList uniquement
Dates Article et Open Graph : cohérentes avec le registre
Structure : 1 H1, 1 main#main-content
Erreurs console et overlay : 0
Débordement horizontal : 0 de 320 à 1 600 px
CTA mobile : non tronqué
FAQ : flèches, Home, End et accordéons conformes
Diagnostic rendu : tester / contradiction OBSERVER / adopter / sur-mesure conformes
Outil : 7 champs factuels, 9 questions, aucun stockage local ou de session
Mode sombre 390 px : contrôlé visuellement
Impression : 30 pages Letter, première et dernière pages contrôlées ; lien d'évitement absent après correction
```

Lighthouse 12.8.2 sur le build public local donne 86 en performance, 100 en
accessibilité, 100 en bonnes pratiques et 100 en SEO, sans audit binaire
échoué. FCP : 1,7 s ; LCP : 4,2 s ; CLS : 0 ; TBT : 30 ms. Le LCP est un P2
de performance du gabarit : son élément est le paragraphe du héros et le
rapport attribue l'écart au délai de rendu de laboratoire, pas à une image
absente, une erreur ou une instabilité. Il devra être suivi sur le déploiement
réel et dans une optimisation globale du gabarit, sans bloquer ce contenu.

```text
R1_CANDIDAT_RELEASE_LOCAL
P0 connu : 0
P1 connu : 0
Commit, push, déploiement, publication publique : aucun à ce stade
Étape obligatoire : dernier contre-audit indépendant sur l'empreinte intégrée
```

## R2 — contre-audit indépendant de release

Le candidat intégré et nettoyé a été gelé par le manifeste
`signes-besoin-logiciel-metier-release-candidate.sha256`, vérifié 25/25, puis
confié en lecture seule à `/root/signes_p2_sources`. Cet agent avait audité la
différenciation pendant P2, mais n'a participé ni aux corrections Q1 ni à
l'intégration publique.

```text
Score global : 96/100
Valeur lecteur : 97
Exactitude : 96
Logique décisionnelle : 98
Sécurité : 95
UX : 95
Accessibilité : 96
SEO et schémas : 98
Conversion : 97
Maintenabilité : 92
Gouvernance : 98
P0 : 0
P1 : 0
P2 : 2
P3 : 0
Verdict terminal : RELEASE_GO
```

Le contradicteur a reproduit 88/88 tests ciblés sur onze fichiers, contrôlé
les 25 chemins du manifeste, le diff partagé nettoyé, la logique complète du
diagnostic, les builders SEO, les dates, les images, la redirection retirée,
la découvrabilité dérivée du registre, le lien entrant, l'impression et
l'absence de stockage ou d'envoi. Il confirme également les preuves globales
de 550/550 tests, 176/176 contrôles SEO de production, zéro vulnérabilité et
63 routes construites.

Les deux P2 ne bloquent pas la release :

1. l'override `sharp: 0.35.3` doit être retiré lorsque Next et OpenNext
   fourniront nativement une dépendance corrigée et compatible ;
2. le score Lighthouse de performance 86 et le LCP de laboratoire à 4,2 s
   doivent être recontrôlés après déploiement et suivis dans l'optimisation
   globale du gabarit.

L'ajout de ce verdict au dossier rend le manifeste candidat historique, sans
modifier le code audité. Un manifeste final distinct couvre le présent dossier,
le manifeste candidat et l'ensemble du code destiné au commit.

```text
R2 = RELEASE_GO
P0 : 0
P1 : 0
État : candidat local autorisé pour commit et push
Déploiement, publication publique et indexation : non encore prouvés
```
