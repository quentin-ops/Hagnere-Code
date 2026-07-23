# Dossier de recherche — Faut-il créer un back-office sur mesure pour sa PME ?

> Dossier de preuve des quatre passes. Recherche, rédaction, contre-audit,
> validation éditoriale déléguée et contrôle technique P4 sont terminés.

## Journal des quatre passes

Propriétaire éditorial unique : `/root`

| Passe                        | État                     | Date       | Responsable                           | Snapshot                                                       | Blocages |
| ---------------------------- | ------------------------ | ---------- | ------------------------------------- | -------------------------------------------------------------- | -------- |
| 1. Recherche                 | Terminée — porte validée | 2026-07-23 | `/root/research_internal_apps_batch2` | `docs/research/manifests/back-office-sur-mesure-pme-p1.sha256` | Aucun    |
| 2. Rédaction et intégration  | Terminée — porte validée | 2026-07-23 | `/root`                               | `docs/research/manifests/back-office-sur-mesure-pme-p2.sha256` | Aucun    |
| 3. Contre-audit indépendant  | Terminée — porte validée | 2026-07-23 | Deux relecteurs indépendants          | `docs/research/manifests/back-office-sur-mesure-pme-p3.sha256` | Aucun    |
| 4. Plume humaine et contrôle | Terminée — porte validée | 2026-07-23 | `/root`                               | `docs/research/manifests/back-office-sur-mesure-pme-p4.sha256` | Aucun    |

### Manifeste du snapshot

| Fichier contrôlé                              | SHA-256                   | Passe | Remarque                                                 |
| --------------------------------------------- | ------------------------- | ----- | -------------------------------------------------------- |
| `docs/research/back-office-sur-mesure-pme.md` | Voir le manifeste externe | P1    | Le hash n'est volontairement pas recopié dans ce fichier |

## 1. Fiche d'identité

```text
Slug : back-office-sur-mesure-pme
Statut actuel : publiable — validation éditoriale déléguée
Requête principale : back office sur mesure PME
Moment du parcours : décider
Lecteur précis : dirigeant ou responsable opérationnel d'une PME dont l'équipe
  traite des dossiers dans plusieurs outils, mais qui ne sait pas si un écran
  interne dédié mérite un développement.
Situation déclenchante : les salariés passent d'un email à un tableur, un CRM
  ou un logiciel métier pour retrouver une information et faire avancer un dossier.
Décision principale après lecture : simplifier ou configurer l'existant,
  adopter un logiciel ou un module standard, assembler un outil no-code,
  développer un back-office sur mesure, ou attendre sans ignorer les corrections utiles.
Niveau de connaissance au départ : le lecteur connaît son travail, pas le
  vocabulaire produit ou logiciel.
5 questions indispensables :
  1. Quelles actions l'équipe doit-elle accomplir chaque jour ?
  2. Où se trouvent les informations nécessaires à ces actions ?
  3. Les règles et exceptions sont-elles assez stables pour être outillées ?
  4. Un outil déjà possédé peut-il couvrir le besoin sans développement ?
  5. Quel premier périmètre peut être testé sans perturber toute l'entreprise ?
3 objections ou craintes :
  1. « Nous allons recréer un ERP trop cher. »
  2. « Les salariés ne l'utiliseront pas. »
  3. « Le sur-mesure va nous rendre dépendants. »
Action utile sans contact commercial : suivre un même dossier de commande entre
  le commercial, l'administration et la comptabilité ; relever pour chaque
  passage l'action, l'information, le rôle, l'état et la prochaine action.
CTA possible : présenter un parcours interne précis dans le formulaire ; la
  demande est ensuite relue humainement, sans livrable ni délai automatique.
Hors périmètre : sélection détaillée d'un ERP, automatisation d'un processus
  encore mal défini, architecture d'intégration, chiffrage générique, audit RGPD.
Date de la recherche : 2026-07-23
Responsable de la synthèse : /root/research_internal_apps_batch2
```

## 1 bis. Contrat de langage humain

- Phrase exacte que le lecteur pourrait dire au téléphone : « Mon équipe passe
  son temps à chercher les dossiers et à recopier des informations : est-ce
  qu'il nous faut vraiment un back-office sur mesure ? »
- Réponse qu'il attend en une phrase : un écran sur mesure devient pertinent
  quand plusieurs personnes répètent des actions propres à l'entreprise, avec
  des règles assez stables que les outils existants ne savent pas appliquer ;
  sinon, mieux vaut commencer par les configurer ou simplifier le travail.
- Terme central expliqué sans jargon : un back-office est l'écran interne dans
  lequel l'équipe retrouve un dossier, voit ce qui manque et réalise l'action
  suivante.
- Mots ordinaires employés par le lecteur : dossier, commande, demande,
  validation, retard, pièce manquante, responsable, recherche, relance, erreur.
- Mots d'agence ou de consultant à éviter : cockpit, hub, orchestration,
  expérience omnicanale, scalabilité, transformation digitale, workflow sans
  exemple.
- Projet des 150 premiers mots : partir d'un salarié qui ouvre quatre outils
  pour répondre à une demande ; donner immédiatement le critère de choix entre
  configuration, logiciel standard, no-code et sur-mesure ; annoncer le suivi
  d'un seul dossier puis ses tests normal, incomplet et urgent.
- Ce que le lecteur saura décider après ces 150 mots : si son problème vient
  d'abord de l'organisation ou si un véritable poste de travail interne manque.
- H2 relus isolément : oui ; chacun annonce une question ou une action concrète.
- Comparaison comprise à 390 px sans colonne masquée : validée dans le navigateur en P4.
- FAQ dont la première phrase répond : oui ; cinq réponses directes, sans
  donnée structurée FAQPage.
- CTA formulé comme résultat pour le prospect : « Définir le premier parcours
  interne à simplifier ».

### Test sujet, action, résultat

Ce test a été refait sur le guide intégré. Les formulations abstraites ont été
traduites en phrases concrètes.

| Phrase abstraite à éviter      | Qui agit ?       | Action concrète                                           | Résultat pour le lecteur                                         | Formulation attendue                                                                                                                |
| ------------------------------ | ---------------- | --------------------------------------------------------- | ---------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| « Centraliser les opérations » | Le salarié       | Ouvre un dossier et retrouve ses pièces au même endroit   | Il sait quoi faire sans rechercher dans quatre outils            | « Le salarié ouvre le dossier, voit les pièces reçues et traite l'étape suivante. »                                                 |
| « Fluidifier les workflows »   | Le responsable   | Définit les états et le prochain responsable              | Un dossier sans responsable devient repérable et testable        | « Quand le devis est validé, le dossier doit indiquer la personne chargée de la commande ; le test signale ceux qui n'en ont pas. » |
| « Gagner en visibilité »       | Le responsable   | Filtre les dossiers bloqués et leur cause                 | Il peut agir sur les vrais retards                               | « Le responsable voit les dossiers bloqués par une pièce manquante et peut les relancer. »                                          |
| « Sécuriser les accès »        | L'administrateur | Attribue à chaque rôle les données et actions nécessaires | Un utilisateur ne consulte pas les dossiers d'un autre périmètre | « Le commercial voit ses clients ; la comptabilité accède aux éléments de facturation. »                                            |
| « Améliorer la productivité »  | L'équipe         | Supprime une ressaisie ou une recherche mesurée           | Le changement est vérifiable sur le même échantillon             | « Sur dix dossiers comparables, l'équipe mesure le temps de traitement avant et après. »                                            |

### Test de l'ouverture

- [x] la situation vécue apparaît avant la méthode de l'agence ;
- [x] le terme back-office est défini dès son premier usage ;
- [x] aucun lexique de masse ne retarde la réponse ;
- [x] aucune métaphore ne devient un système à apprendre ;
- [x] la réponse reste honnête sans accumuler les réserves avant l'explication.

## 2. Cannibalisation

| Page existante                                  | Intention de cette page                                                       | Différence du nouveau guide                                                                                                             | Lien ou arbitrage nécessaire                                                         |
| ----------------------------------------------- | ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| `/guides/automatiser-processus-metier`          | Choisir le processus et le type d'automatisation                              | Le processus est déjà identifié ; on conçoit le poste de travail humain qui permet d'agir                                               | Lien en amont : si le processus n'est pas clair, commencer par ce guide              |
| `/guides/transformer-excel-en-application`      | Décider si un fichier Excel doit devenir une application                      | Excel n'est qu'une source possible ; le nouveau guide part des actions quotidiennes et des rôles                                        | Ne pas refaire le comparatif centré sur Excel                                        |
| `/guides/signes-besoin-logiciel-metier`         | Reconnaître un besoin logiciel métier                                         | Le nouveau guide arbitre précisément la forme de l'écran interne et son premier périmètre                                               | Lien comme diagnostic préalable                                                      |
| `/guides/no-code-ou-sur-mesure`                 | Comparer plafonds, coûts et réversibilité des deux modes de réalisation       | Le nouveau guide applique les options à un poste de travail interne déjà observé ; il ne refait pas le comparatif technologique général | Résumer l'option en une carte et renvoyer au guide détaillé                          |
| `/guides/erp-ou-logiciel-sur-mesure`            | Arbitrer achat ou construction d'un système de gestion global                 | Le nouveau guide suit un seul dossier et peut recommander un module standard, sans redéfinir l'achat contre le build général            | Ne pas refaire les coûts ni le choix d'un ERP complet                                |
| `/guides/connecter-erp-crm-logiciel-metier`     | Concevoir des échanges fiables entre systèmes                                 | Le nouveau guide traite ce que voit et fait l'utilisateur, non le contrat d'échange                                                     | Renvoyer à ce guide pour la source de vérité et les reprises                         |
| `/guides/cahier-des-charges-application-metier` | Préparer un cahier des charges complet                                        | La carte d'un dossier fournit une matière d'entrée, sans remplacer le cahier des charges                                                | Lien en étape suivante                                                               |
| `/guides/portail-client-b2b-sur-mesure`         | Décider d'une interface extérieure entre une entreprise et ses clients        | Le back-office étudié ici reste un poste interne de traitement administratif ; aucun accès client n'est conçu                           | Ne pas reprendre comptes clients, partage externe ou cloisonnement entre entreprises |
| `/guides/application-suivi-production-pme`      | Suivre des ordres de fabrication, quantités, reprises et événements d'atelier | Le présent guide suit un dossier administratif générique entre commercial, administration et comptabilité                               | Ne pas reprendre OF, unités, rebuts, machines ou séparation IT/OT                    |
| `/services/outils-internes-sur-mesure`          | Présenter une prestation transactionnelle                                     | Le guide peut conclure « ne développez pas » et compare cinq réponses                                                                   | CTA contextuel seulement après le diagnostic                                         |

**Évaluation du chevauchement :** la comparaison qualitative confirme une
intention propre : un poste interne qui fait avancer un dossier administratif.
Aucun pourcentage de similitude non mesuré n'est revendiqué.

**Justification d'une URL distincte :** ce guide aide à décider si le travail
quotidien justifie un poste interne dédié et comment en fixer le premier
périmètre ; cette décision n'est pas traitée par les guides généraux sur
l'automatisation, Excel ou le cahier des charges.

## 3. Demande et vocabulaire du lecteur

Questions observées dans les résultats consultés :

- qu'est-ce qu'un back-office sur mesure ;
- pourquoi créer une application métier plutôt qu'utiliser un logiciel ;
- quels modules mettre dans un outil interne ;
- comment remplacer les tableurs et les ressaisies ;
- faut-il choisir du no-code ou un développement spécifique ;
- comment connecter l'outil interne au CRM ou à l'ERP.

Formulations à privilégier : « retrouver un dossier », « savoir ce qu'il reste
à faire », « éviter une double saisie », « attribuer la demande », « traiter
une exception », « retrouver l'historique ». Variantes utiles : outil de
gestion interne, interface d'administration, logiciel interne PME, application
métier interne.

Observation qualitative effectuée le 2026-07-23 sur les résultats français
accessibles publiquement. Aucun volume de recherche, CPC ou position n'est
revendiqué : Search Console et Keyword Planner n'ont pas été consultés.

## 4. Carte concurrentielle

| Page                                                                                                                                                            | Réponse et angle                                      | Preuves/artefacts                      | Bon point                                  | Manque décisionnel                                   | Conflit d'intérêt éventuel       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- | -------------------------------------- | ------------------------------------------ | ---------------------------------------------------- | -------------------------------- |
| [Hyperstack — applications métier](https://www.hyperstack.studio/erp-applications-metiers/applications-metier)                                                  | Développement d'applications adaptées au métier       | Exemples de besoins et approche agence | Rend le concept concret                    | Peu de critères pour préférer l'outil existant       | Prestataire de développement     |
| [Dazz Studio — outils métier](https://www.dazzstudio.fr/services/outils-metier-sur-mesure)                                                                      | Outil sur mesure pour centraliser et automatiser      | Cas d'usage et bénéfices annoncés      | Couvre plusieurs fonctions internes        | Le lecteur ne reconstruit pas son travail réel       | Prestataire                      |
| [Genee — outil interne sur mesure](https://www.genee.tech/outil-interne-sur-mesure)                                                                             | Remplacer les assemblages manuels                     | Présentation de prestation             | Parle des irritants vécus                  | « Sur mesure » arrive avant le test des alternatives | Prestataire                      |
| [SmartBooster — back-office](https://www.smartbooster.io/expertise/backoffice/)                                                                                 | Expertise de réalisation de back-office               | Catalogue de capacités                 | Identifie plusieurs briques techniques     | Peu de « quand ne pas construire »                   | Prestataire                      |
| [France Num — outils no-code](https://www.francenum.gouv.fr/guides-et-conseils/pilotage-de-lentreprise/numerisation-des-processus/pourquoi-utiliser-des-outils) | Présente le no-code pour créer des outils et portails | Guide public, exemples d'usages        | Rend visible une alternative au spécifique | N'arbitre pas un poste interne concret               | Portail public, contenu d'expert |

**Angle mort commun :** les pages partent souvent d'une solution ou d'une liste
de modules. Elles suivent rarement un même dossier lorsqu'il passe d'un rôle et
d'un outil à l'autre, puis lorsqu'une pièce manque ou qu'une urgence survient.

**Valeur originale que le guide apportera :** une méthode de décision fondée
sur les actions réellement accomplies, puis un comparatif honnête entre
configuration de l'existant, logiciel standard, no-code, sur-mesure et attente
active.

## 5. Fiche de preuves

| Affirmation utilisable                                                                                                                                                                                                                                                                                                 | Source et passage utile                                                                                                                                                                                         | Nature                                                                                                   | Périmètre                                                                                                | Date/consultation   | Confiance             | Emplacement du lien visible                   | Conséquence lecteur                                                                                      | Fraîcheur                                                 |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | ------------------- | --------------------- | --------------------------------------------- | -------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| Il faut partir d'un besoin concret et tester avec les utilisateurs réels                                                                                                                                                                                                                                               | [DesignGouv — Bien concevoir un service numérique](https://design.numerique.gouv.fr/bien-concevoir/) : partir des besoins, définir les rôles, tester et itérer                                                  | Référentiel public de conception                                                                         | Discipline de conception, pas obligation légale privée                                                   | Consulté 2026-07-23 | Haute sur la méthode  | Section sur le film d'un dossier et le pilote | Observer le travail avant de dessiner les écrans                                                         | Aucune date de mise à jour affichée ; revoir annuellement |
| Cartographier étapes, informations, exceptions et responsables peut révéler qu'une automatisation n'est pas nécessaire                                                                                                                                                                                                 | [France Num — L'automatisation, une solution ?](https://www.francenum.gouv.fr/guides-et-conseils/pilotage-de-lentreprise/numerisation-des-processus/lautomatisation-une-solution), mise à jour 2026-07-09       | Contenu expert hébergé par le portail public, signé par Contournement et Pathta, prestataires du domaine | PME, conseil méthodologique ; pas une norme officielle                                                   | Consulté 2026-07-23 | Moyenne               | Comparatif des cinq réponses                  | Autorise une conclusion « simplifier d'abord », sans reprendre les bénéfices commerciaux                 | Mise à jour 2026-07-09                                    |
| Un nouvel outil modifie le travail ; simuler le travail futur avec les utilisateurs révèle des ajustements                                                                                                                                                                                                             | [Anact — Boîte à outils QVCT et numérique](https://www.anact.fr/sites/default/files/2024-10/boite-a-outils-qvct-numerique.pdf)                                                                                  | Boîte à outils d'un établissement public                                                                 | Méthode de conduite du changement ; exemples pas tous marchands                                          | Consulté 2026-07-23 | Haute sur le principe | Section pilote et tests de résistance         | Tester cas normal, incomplet et urgent avec l'équipe                                                     | 2024                                                      |
| Il faut privilégier les comptes nominatifs ; un compte partagé reste une exception à valider, tracer et revoir, avec les droits nécessaires à la fonction                                                                                                                                                              | [CNIL — Gérer les habilitations](https://www.cnil.fr/fr/securite-gerer-les-habilitations)                                                                                                                       | Recommandation de sécurité d'une autorité publique                                                       | Traitements de données personnelles                                                                      | Consulté 2026-07-23 | Haute                 | Section rôles et droits                       | Définir des profils, encadrer les exceptions et retirer les accès devenus inutiles                       | Mise à jour 2024-03-13                                    |
| Les opérations utiles à la détection d'incidents peuvent être journalisées de façon proportionnée                                                                                                                                                                                                                      | [CNIL — Tracer les opérations](https://www.cnil.fr/fr/securite-tracer-les-operations)                                                                                                                           | Recommandation de sécurité                                                                               | Données personnelles ; repère général de six mois à un an, adaptations et formalités selon le contexte   | Consulté 2026-07-23 | Haute                 | Section historique et contrôle                | Prévoir qui a changé quoi, sans détourner les journaux pour surveiller les horaires                      | Mise à jour 2024-03-14                                    |
| Ne collecter que les données adéquates, pertinentes et nécessaires                                                                                                                                                                                                                                                     | [CNIL — Minimiser les données collectées](https://www.cnil.fr/fr/minimiser-les-donnees-collectees)                                                                                                              | Principe RGPD expliqué par la CNIL                                                                       | Données personnelles                                                                                     | Consulté 2026-07-23 | Haute                 | Section fiche dossier                         | Supprimer les champs « au cas où »                                                                       | Mise à jour 2020-01-27                                    |
| Un dispositif de contrôle de l'activité des salariés doit avoir une finalité précise, rester proportionné, être précédé d'une information et, lorsque les règles l'exigent, d'une consultation du CSE ; une surveillance permanente est en général excessive, avec examen nécessaire de toute exception au cas par cas | [CNIL — Contrôle de l'activité des personnes employées](https://www.cnil.fr/fr/controle-de-lactivite-des-personnes-employees)                                                                                   | Recommandations d'une autorité publique                                                                  | Mesure du travail et données personnelles des salariés ; information générale, pas avis juridique du cas | Consulté 2026-07-23 | Haute                 | Encadré sur la mesure d'un dossier            | Préférer les mesures agrégées et examiner finalité, accès, durée, information et consultation applicable | Mise à jour 2026-07-09                                    |
| Le no-code peut convenir à certains outils internes et portails                                                                                                                                                                                                                                                        | [France Num — Pourquoi utiliser des outils no-code ?](https://www.francenum.gouv.fr/guides-et-conseils/pilotage-de-lentreprise/numerisation-des-processus/pourquoi-utiliser-des-outils), mise à jour 2026-07-13 | Contenu expert hébergé par le portail public, signé par Contournement, prestataire du domaine            | Alternative technologique, pas prescription universelle                                                  | Consulté 2026-07-23 | Moyenne               | Comparatif des options                        | Ne pas présenter le développement spécifique comme seule voie ni reprendre ses bénéfices commerciaux     | Mise à jour 2026-07-13                                    |

### Contradictions et données à ne pas publier

- Ne pas reprendre les promesses commerciales de « gain de temps », de
  productivité ou de rentabilité sans mesure propre au lecteur.
- Ne pas présenter le no-code comme toujours plus rapide ou moins cher : cela
  dépend des règles, des volumes, des droits, des intégrations et de la
  maintenance.
- Ne pas dire qu'un historique exhaustif est toujours requis ni conserver les
  journaux indéfiniment ; la finalité, la proportion et les obligations varient.
- Ne pas transformer les recommandations DesignGouv ou Anact en obligations
  légales applicables à toute PME.
- Ne publier aucune fourchette de prix ou de délai sans périmètre et corpus
  datés.

### Calculs reproductibles

Le guide ne publiera pas de ROI générique. Il donnera une méthode de mesure :

- charge observée sur une cohorte fermée : somme des minutes réellement
  consacrées aux dossiers distincts clos de cette cohorte, divisée par leur
  nombre ; ne pas calculer si ce nombre vaut zéro et compléter la moyenne par
  une médiane ou une répartition si quelques cas la déforment ;
- attente : heure de l'action possible moins heure de disponibilité de
  l'information, en distinguant travail et attente ;
- taux de reprise : nombre de dossiers distincts d'une même cohorte de clôture
  rouverts au moins une fois pendant une durée de suivi annoncée, divisé par le
  nombre de dossiers distincts clos de cette cohorte, multiplié par 100 ; si le
  dénominateur vaut zéro, afficher « non calculable » ;
- comparaison avant/après : mêmes types de dossiers, même définition de début
  et de fin, même période ou saison explicitement corrigée ;
- coût valorisé uniquement si le temps libéré est réellement réaffecté ou si un
  coût est évité ; sinon le résultat reste du temps disponible, pas un gain
  financier.

Postes inconnus à confirmer : licences actuelles, intégrations, reprise de
données, support, hébergement, formation et temps interne. Contrôle inverse :
reconstituer la charge totale à partir du volume et du temps moyen, puis la
comparer aux temps saisis. Aucun arrondi n'est fixé avant d'avoir les données.

## 6. Empreinte éditoriale à ne pas reproduire

| Guide                                   | Type d'ouverture                   | Progression                  | Dispositif récurrent        | Type d'exemple          | Place du CTA       | Type de conclusion       |
| --------------------------------------- | ---------------------------------- | ---------------------------- | --------------------------- | ----------------------- | ------------------ | ------------------------ |
| `automatiser-processus-metier`          | Symptôme puis choix d'un processus | Six réponses puis cadrage    | Matrice de réponse          | Processus transversal   | Après diagnostic   | Commencer petit          |
| `transformer-excel-en-application`      | Fichier devenu fragile             | Garder, renforcer, remplacer | Comparatif de solutions     | Tableur métier          | Après décision     | Migrer sans rupture      |
| `signes-besoin-logiciel-metier`         | Accumulation de signaux            | Diagnostic progressif        | Liste de signes             | Situations d'entreprise | Fin de diagnostic  | Confirmer le besoin      |
| `connecter-erp-crm-logiciel-metier`     | Données divergentes                | Source de vérité puis flux   | Contrat de données          | Synchronisation         | Après sécurisation | Tester les reprises      |
| `cahier-des-charges-application-metier` | Projet à formaliser                | Questions de cadrage         | Trame de cahier des charges | Projet complet          | Étape suivante     | Préparer la consultation |

Choix du nouveau guide :

```text
Tension ou question motrice : faut-il construire un écran interne ou corriger
  d'abord le travail et les outils déjà présents ?
Type d'ouverture retenu et pourquoi : une commande entre entreprises passe du
  commercial à l'administration puis à la comptabilité ; le dirigeant voit où
  l'information et la responsabilité se perdent.
Progression retenue et pourquoi : film d'un dossier, carte des passages,
  actions, états, rôles, options, tests de résistance et premier lot. Le
  logiciel découle du travail.
Artefact signature : la carte « action → information → rôle → état → prochaine
  action » d'un seul dossier ; normal, incomplet et urgent servent ensuite de
  tests de résistance.
Rythme/registre de voix : phrases courtes, verbes d'action, exemple continu,
  aucune accumulation de jargon.
Place naturelle du CTA : après la décision et le premier périmètre autonome.
Forme de conclusion : une règle de choix en cinq branches, dont « ne rien
  développer pour l'instant ».
Au moins trois différences avec les guides voisins :
  1. L'ouverture suit un dossier précis entre trois rôles plutôt qu'un symptôme logiciel.
  2. L'artefact central cartographie les passages du dossier, pas des fonctionnalités.
  3. Le guide distingue clairement voir une information et agir sur un dossier.
  4. La conclusion peut recommander de mieux configurer l'existant.
```

## 7. Plan annoté

| Section provisoire                                                                       | Question résolue                                     | Preuve ou exemple                                                                               | Conséquence/décision                                                           | Format choisi                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | ------------------------------ |
| Vous ouvrez quatre outils pour faire avancer un dossier : que faut-il changer ?          | Le problème mérite-t-il un back-office ?             | Scène d'un dossier incomplet                                                                    | Réponse immédiate en cinq options                                              | Ouverture narrative courte     |
| Un back-office n'est pas un tableau de bord                                              | Quelle différence entre voir et agir ?               | Voir un retard versus attribuer, relancer ou corriger                                           | Écarter les écrans de chiffres sans action                                     | Exemple avant/après            |
| Suivez un dossier avant de dessiner un écran                                             | Où l'information ou la responsabilité se perd-elle ? | Une commande B2B passe du commercial à l'administration puis à la comptabilité                  | Produire la carte action, information, rôle, état, prochaine action            | Film du dossier en cartes      |
| Quel objet l'équipe fait-elle réellement avancer ?                                       | Autour de quoi organiser l'outil ?                   | Dossier, commande ou demande, avec prochain responsable                                         | Choisir un objet central                                                       | Questions guidées              |
| Transformez les gestes quotidiens en actions et en états                                 | Que doit permettre l'écran ?                         | Ouvrir, compléter, valider, refuser, attribuer, rouvrir                                         | Définir des états compréhensibles                                              | Parcours d'un dossier          |
| Chaque rôle a besoin d'une vue de travail, pas de tous les boutons                       | Comment limiter la complexité et les accès ?         | File à traiter, recherche, détail, historique                                                   | Définir profils et droits                                                      | Mini-matrice rôles/actions     |
| Existant, logiciel standard, no-code, sur-mesure ou attente : choisissez sans parti pris | Quelle solution est proportionnée ?                  | Critères : stabilité, spécificité, intégrations, droits, volume                                 | Choix explicite ; attendre n'interdit pas de corriger l'organisation           | Cartes comparatives mobiles    |
| Faites passer le même dossier par trois épreuves                                         | Quels cas tester avant de développer ?               | traitement normal, pièce absente et urgence, puis doublon, erreur, retour arrière et accès indu | Écrire les règles de reprise                                                   | Tests de résistance            |
| Mesurez avant de promettre un gain                                                       | Comment vérifier l'utilité ?                         | Temps de traitement, attente, reprises, volume                                                  | Établir une base comparable                                                    | Formules et tableau à copier   |
| Lancez un premier lot qui aide vraiment une équipe                                       | Où s'arrêter ?                                       | Un type de dossier, une équipe, cinq actions                                                    | Définir un ordre de travail et des critères d'acceptation sans délai générique | Séquence sans durée arbitraire |
| Quand Hagnéré Code est un bon interlocuteur — et quand il ne l'est pas                   | Le lecteur doit-il contacter l'agence ?              | Bons et mauvais fits                                                                            | Conversion honnête                                                             | Deux listes puis CTA           |

## 8. Ressource et conversion

```text
Une ressource est-elle naturellement nécessaire ? non, pas de téléchargement
  séparé en P1.
Problème qu'elle résout après la lecture : la carte à copier dans l'article
  suffit pour suivre un dossier.
Résultat autonome produit : pour chaque passage, action, information, rôle,
  état et prochaine action ; puis option de solution à tester.
Format éditable et format de consultation : tableau copiable dans un tableur ou
  un document ; aucun fichier externe promis.
Rubriques réellement livrées : action, information nécessaire, rôle, état,
  outil ouvert, exception et prochaine action.
Exemple rempli : un dossier client incomplet, clairement fictif.
Conclusion « ne pas investir » possible : oui.
Sources, hypothèses et limites visibles : oui dans l'article.
Données saisies et destination : aucune donnée envoyée à Hagnéré Code.
Processus de génération reproductible : sans objet, tableau statique.
Journal de QA : tableau contrôlé en P4 à 390 px, sans colonne masquée ni débordement.
Limites connues et niveau de revue humaine : l'observation ne remplace pas
  l'analyse de sécurité, de données ou de conformité.
Mode de maintenance : revoir les sources et les liens au contrôle éditorial.
Test du fichier ou outil : sans objet.
Bon fit Hagnéré Code : actions propres au métier, règles stables, plusieurs
  rôles, sources identifiées, besoin d'intégration ou d'interface dédiée.
Mauvais fit : processus encore disputé, faible volume, besoin couvert par une
  configuration simple, équipe non disponible pour le pilote.
Action non commerciale : remplir la carte d'un dossier puis lui appliquer les
  trois tests normal, incomplet et urgent.
CTA principal et résultat après clic : « Présenter mon parcours » vers
  /demarrer-un-projet ; le clic ouvre un formulaire guidé d'environ trois
  minutes. L'équipe relit ensuite la demande et répond personnellement ; aucun
  délai n'est garanti. La comparaison et un premier lot restent une suite
  possible de l'échange, pas un livrable automatique du clic.
```

## 9. Rapports de sortie des quatre passes

### Rapport P1 — Recherche

```text
PASSE 1 TERMINÉE
Slug : back-office-sur-mesure-pme
Lecteur et phrase réelle : dirigeant de PME ; « Mon équipe ouvre quatre outils
  pour faire avancer un dossier : faut-il un back-office sur mesure ? »
Décision : simplifier, configurer l'existant, assembler du no-code, développer
  sur mesure ou attendre.
Angle et forme dominante : suivre un dossier de commande B2B entre trois rôles,
  puis tester ses cas normal, incomplet et urgent avant tout écran.
Pages proches et différence : automatisation, Excel, logiciel métier,
  intégration et cahier des charges ; aucune ne conçoit le poste interne à
  partir des actions vécues.
Sources décisives : DesignGouv, France Num, Anact et CNIL.
Incertitudes exclues : volumes SEO, prix, délais, gains de productivité,
  obligation générique de journalisation.
Action autonome et CTA possible : carte d'un dossier et trois tests de
  résistance ; cadrer un premier parcours interne.
Plan : 11 sections annotées, avec réponse, comparaison, tests, mesure et fit.
Snapshot : docs/research/manifests/back-office-sur-mesure-pme-p1.sha256
```

### Contre-audit préparatoire de P1

Un relecteur distinct de l’auteur du dossier a contrôlé la P1 avant toute
rédaction publique. Verdict initial : **0 P0, 5 P1**. Les cinq réserves ont été
intégrées au présent dossier :

- frontières ajoutées avec les guides no-code et ERP ;
- forme centrale remplacée par le film d’un seul dossier ;
- recommandation CNIL reformulée sans imposer absolument un compte par personne ;
- comparaison étendue au logiciel standard et à l’attente active ;
- délai arbitraire de 30 jours et résultat garanti sur le responsable supprimés.

La P2 doit conserver ces corrections ; toute réintroduction bloque son
contre-audit.

### Rapport P2 — Rédaction et intégration

```text
PASSE 2 TERMINÉE
Fichiers créés ou modifiés : page publique et image sociale dédiées ; entrée
  du registre avec statut d'attente ; lien entrant depuis le guide des signes
  d'un besoin de logiciel métier ; tests de langage humain ; présent dossier
Ouverture et réponse : le commercial, l'administration et la comptabilité ne
  voient pas la même version d'une commande ; la réponse compare immédiatement
  configurer, acheter, assembler, développer et attendre, en moins de 150 mots
Forme propre au sujet : une commande fictive entre entreprises passe entre trois
  rôles ; la carte action, information, état et prochaine personne précède tout
  choix technique ; trois cas de résistance testent ensuite la décision
Exemples ou calculs : exemple déclaré fictif avant son affichage ; moyenne de
  temps et taux de reprise définis sur une cohorte fermée, avec dénominateur nul,
  durée de suivi et médiane ; 240 minutes ne deviennent pas une économie promise
Sources visibles : DesignGouv près de la carte du dossier ; France Num identifié
  comme contenu expert intéressé, pas comme norme ; Anact près de la simulation
  du travail ; CNIL près des droits, de la minimisation, de l'historique et du
  contrôle de l'activité des salariés
Action autonome, bon fit et mauvais fit : carte copiable dans la page ; logiciel
  déjà payé, standard, no-code, sur-mesure et attente restent tous possibles
CTA et destination : un seul CTA tardif « Présenter mon parcours » vers
  /demarrer-un-projet ; le formulaire, la relecture humaine et l'absence de
  délai garanti sont explicites ; la comparaison reste une suite possible
Contrôles rapides : commande `npx vitest run --maxWorkers=4
  src/lib/guide-human-language.test.ts src/lib/guides.test.ts
  src/lib/structured-data.test.ts src/app/sitemap.test.ts
  src/app/llms.txt/route.test.ts src/app/robots.test.ts` : 58/58 ;
  Prettier ciblé, ESLint ciblé et TypeScript conformes
Snapshot : docs/research/manifests/back-office-sur-mesure-pme-p2.sha256
```

### Rapport P3 — Contre-audit indépendant

Deux relecteurs indépendants ont refusé le premier snapshot P2, sans P0. Leurs
réserves convergentes portaient sur la comparaison trop favorable au
sur-mesure, la mesure du travail des salariés, le jargon non défini, la cohorte
du taux de reprise et le résultat réellement obtenu après le clic. La page et
le dossier ont été repris.

Une première revalidation a atteint 0 P0 et 0 P1, avec une incohérence
documentaire secondaire. Le second relecteur a ensuite relevé une formulation
CNIL trop catégorique, les sigles CRM, ERP et CSE encore inexpliqués, deux
phrases historiques du dossier et une couverture de test insuffisante. Ces
points ont tous été corrigés : la surveillance permanente est dite « en général
excessive », toute exception est examinée au cas par cas, les sigles sont
développés, les cinq choix et le résultat du formulaire sont cohérents, et les
garde-fous ont été ajoutés au test.

Le snapshot corrigé a été revalidé indépendamment en lecture seule : manifeste
P2 exact sur 6 fichiers, **P0 = 0, P1 = 0, P2 = 0** et 58 tests ciblés
conformes. La porte P3 est validée.

### Rapport P4 — Plume humaine et contrôle final

```text
PASSE 4 TERMINÉE
Passages humanisés : décision formulée avant les options techniques ; back-office défini au premier usage ; jargon ERP, CRM et CSE développé ; exemples reliés au même dossier fictif
Retour P3 effectué : oui ; deux relecteurs indépendants ont revalidé le nouvel état à P0 = 0, P1 = 0 et P2 = 0
Scorecard justifiée : 20/20 ; détail dans la table ci-dessous
Validation humaine réelle : non
Test réalisé par une personne réelle : non
Autorisation éditoriale : Décision de publication : autorisée explicitement par le commanditaire
Commandes et résultats : check:seo, ESLint, TypeScript, batterie Vitest, build Next.js, postbuild et git diff --check conformes au gel final du lot
Snapshot final : docs/research/manifests/back-office-sur-mesure-pme-p4.sha256
Statut maximal : publiable — validation éditoriale déléguée
Verdict : porte P4 validée
```

Contrôles P4 déjà réalisés sur le serveur local :

- 3 221 mots comptés dans l'artefact final, soit 16 minutes avec la convention de
  200 mots par minute ;
- largeurs effectives 320, 390, 767, 1 024 et 1 440 px, sans débordement
  horizontal ni contenu indispensable masqué ;
- thèmes clair et sombre ; introduction, dossier fictif, cinq choix, mesures et
  CTA relus dans le rendu ;
- un H1, canonical exact, Article et BreadcrumbList parsables ; route en
  `index,follow` au gel commun ;
- image sociale 1 200 × 630 inspectée : trois rôles reliés, cinq réponses au
  même niveau visuel et aucun texte tronqué.

## 10. Revue finale

La recherche, la rédaction, les contre-audits indépendants et la P4 sont
terminés. Le rendu réel, la plume, la durée de lecture, l'indexation et le gel
commun ont été contrôlés.

### Scorecard P4

| Axe         | Note 0-2 | Preuve actuelle                                                                                     | Correction éventuelle |
| ----------- | -------: | --------------------------------------------------------------------------------------------------- | --------------------- |
| Intention   |        2 | Le guide répond au dossier interne dispersé entre commerce, administration et comptabilité          | Aucune                |
| Décision    |        2 | Configurer, acheter, assembler, développer ou attendre restent possibles                            | Aucune                |
| Pédagogie   |        2 | Une commande fictive suit trois rôles et une carte action-information-état-responsable              | Aucune                |
| Profondeur  |        2 | Cas normal, incomplet, urgent, droits, données, sortie, cohorte et dénominateur nul                 | Aucune                |
| Preuve      |        2 | DesignGouv, France Num contextualisé, Anact et CNIL visibles avec leurs limites                     | Aucune                |
| Comparaison |        2 | Les cinq choix partagent couverture, effort, droits, coût, responsable et condition d'arrêt         | Aucune                |
| Originalité |        2 | La progression suit un dossier administratif, distincte du diagnostic logiciel général              | Aucune                |
| Style       |        2 | Scène immédiate, back-office défini dès l'ouverture et sigles développés                            | Aucune                |
| Conversion  |        2 | Bon et mauvais contexte séparés ; CTA tardif, résultat du formulaire et absence de délai explicités | Aucune                |
| SEO/produit |        2 | Intention distincte, lien entrant, metadata, OG, index/follow et cinq largeurs contrôlés            | Aucune                |

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
Corrections appliquées : deux contre-audits indépendants et contrôles visuels
  réels ; aucun faux test lecteur n'est inventé
```

### Vérifications historiques à la fermeture de P1

- [x] lecteur, déclencheur et décision explicites ;
- [x] vocabulaire de dirigeant prévu avant le jargon ;
- [x] chevauchement qualitatif contrôlé, sans seuil chiffré inventé ;
- [x] résultats concurrents observés et angle mort documenté ;
- [x] sources primaires ou publiques reliées aux affirmations utiles ;
- [x] contradictions et promesses non démontrées exclues ;
- [x] action autonome, bon fit et mauvais fit définis ;
- [x] plan distinct des guides voisins ;
- [x] aucune ressource téléchargeable absente n'est promise ;
- [x] aucune publication ni indexation n'est déclarée.
