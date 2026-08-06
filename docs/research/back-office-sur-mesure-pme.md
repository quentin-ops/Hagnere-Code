# Dossier P4 — Back-office sur mesure pour PME

## Journal des quatre passes

Propriétaire éditorial unique : `PRIMARY_ORCHESTRATOR`

| Passe                             | État                                  | Date        | Responsable            | Snapshot                                                               | Blocages |
| --------------------------------- | ------------------------------------- | ----------- | ---------------------- | ---------------------------------------------------------------------- | -------- |
| 1. Création complète              | Terminée — G1 validée                 | 5 août 2026 | `/root/back_office_p1` | `manifests/back-office-sur-mesure-pme-p1.sha256` · 13/13 à l'entrée P2 | Aucun    |
| 2. Enrichissement et vérification | Terminée — G2 validée                 | 6 août 2026 | `/root/back_office_p2` | `manifests/back-office-sur-mesure-pme-p2.sha256`                       | Aucun    |
| 3. Polish rédactionnel            | Terminée — G3 validée                 | 6 août 2026 | `/root/back_office_p3` | `manifests/back-office-sur-mesure-pme-p3.sha256`                       | Aucun    |
| 4. Antipasse IA                   | Terminée — G4 revalidée, Q2 GO 95/100 | 6 août 2026 | `/root/back_office_p4` | `manifests/back-office-sur-mesure-pme-p4.sha256` · 15 entrées          | Aucun    |

Ce dossier part du gel immuable
`docs/research/back-office-sur-mesure-pme-p0.md`, SHA-256
`070360018fdcd02b2c530d7dc26f5e4e0e1401c31365066959daff39313bd452`.
Il ne reprend aucun texte, plan, verdict ou chiffre de l’ancien guide supprimé.

## A. Identité

```text
Slug : back-office-sur-mesure-pme
Roadmap : guide n° 7
Statut actuel : snapshot intégré privé prêt au contre-audit release, non publié, non indexable
Requête principale : back-office sur mesure PME
Moment du parcours : explorer puis décider
Lecteurs : direction de PME, opérations, administration/finance, responsable métier, DSI ou prestataire de cadrage
Situation déclenchante : un outil interne est envisagé, mais les écrans et le niveau de solution ne sont pas encore démontrés
Décision principale : conserver/configurer, adopter un standard, assembler légèrement, cadrer du sur-mesure, ou différer
Niveau de connaissance au départ : métier connu, conception logicielle non requise
Route de service pertinente : /services/outils-internes-sur-mesure
CTA : /demarrer-un-projet
Dates réelles de la recherche : 5 août 2026 en P1 ; contre-vérification le 6 août 2026 en P2
Responsables : /root/back_office_p1 pour P1 ; /root/back_office_p2 pour P2 ; /root/back_office_p3 pour P3 ; /root/back_office_p4 pour P4 ; /root/back_office_q puis /root/back_office_q2 pour les contrôles indépendants
```

### Questions indispensables

1. Qu’est-ce qu’un back-office métier, et en quoi diffère-t-il d’un tableau de bord ?
2. Quelle tâche réelle et quelle exception faut-il observer avant de dessiner ?
3. Quels écrans couvrent le travail normal, le contrôle, l’erreur et la reprise ?
4. Quels rôles peuvent faire quelles actions sur quelles données, avec quelle preuve ?
5. Une configuration, un standard ou un assemblage léger couvre-t-il déjà le besoin ?
6. Comment mesurer la charge sans convertir automatiquement des minutes en économies ?
7. Qui décide, soutient, répare, maintient et organise la sortie ?
8. Quelles inconnues imposent de différer ?

### Objections et craintes

- « Nous savons déjà quels écrans il nous faut » : la liste nominale ne couvre souvent ni succès partiel, ni conflit, ni reprise.
- « Un standard sera forcément trop rigide » : cette conclusion doit être testée sur le même contrat d’écran, pas supposée.
- « Le sur-mesure nous appartiendra » : la propriété, les droits, les composants tiers et les livrables doivent être délimités ; rien n’est déduit automatiquement.

### Action autonome après lecture

Remplir un contrat d’écran sur une tâche réelle ; rejouer deux échecs ; tester
un standard sur le même contrat ; nommer le propriétaire métier, le support et
la preuve qui autorise ou suspend la décision.

## B. Contrat de réponse

### Réponse courte

Un back-office dédié n’est pas justifié par un tableur agaçant ou l’absence
d’un tableau de bord. Il devient une option lorsque des tâches récurrentes et
assez stables exigent des actions, des droits, des données, des preuves, des
exceptions et des reprises qu’une configuration ou un standard testé ne
couvre pas correctement. Le premier livrable utile est donc un contrat
d’écran observable, pas une maquette décorative. Si la charge, les rôles, les
données, le support, le coût total ou la sortie restent inconnus, la décision
est différée.

### Hors sujet explicites

- tutoriel de développement ou choix de framework ;
- comparatif détaillé Airtable, Notion ou Power Apps ;
- audit de sécurité, d’accessibilité, de conformité ou de rentabilité complet ;
- catalogue de CRM/ERP ;
- prix ou délai moyen de marché ;
- promesse de gain, de conformité, de classement ou de résultat.

### Situations où il faut arrêter ou demander une validation

- processus rarement exécuté, non observé ou encore instable ;
- standard non testé sur l’exception qui motive le projet ;
- propriétaire métier ou support absent ;
- droits, données sensibles, export ou finalité des traces non qualifiés ;
- dépendance critique sans mode dégradé et reprise ;
- coût total ou horizon de comparaison inconnu ;
- contrat, droits cédés, composants tiers ou réversibilité non relus ;
- incident actif : restaurer d’abord la continuité, puis reprendre le cadrage ;
- question juridique, sociale, sécurité, accessibilité ou données dépassant le périmètre du guide.

## B bis. Contrat de langage humain

- Phrase possible au téléphone : « On veut arrêter les fichiers et créer notre back-office, mais on ne sait pas quels écrans prévoir ni si le sur-mesure vaut le coup. »
- Réponse attendue en une phrase : « Décrivez d’abord une tâche, son erreur et sa reprise ; testez ce contrat dans l’existant et un standard avant de décider de coder. »
- Terme central : un back-office métier est l’espace interne où des personnes autorisées traitent, décident, corrigent et prouvent le travail.
- Mots ordinaires : file, dossier, action, erreur, responsable, preuve, reprise, outil actuel, logiciel standard.
- Mots à éviter dans le visible : gate, snapshot, framework, scalabilité, score de maturité, architecture optimale.
- Projet des 150 premiers mots : répondre, distinguer le back-office du tableau de bord et annoncer les cinq sorties.
- Décision après 150 mots : commencer par un contrat d’écran ; ne pas commander du sur-mesure sur la seule gêne actuelle.
- H2 relus isolément : à contrôler après rendu.
- Comparaison comprise à 390 px : les tableaux décisifs utilisent le composant mobile en cartes ; à contrôler en navigateur.
- FAQ : première phrase répond ; contrôle P1 puis P3.
- CTA : « Préparer mon brief d’outil interne » vers un parcours en six étapes, sans devis automatique ni engagement.

### Test sujet, action, résultat prévu pour P3

| Formulation à surveiller | Qui agit ?                                    | Action                                              | Résultat attendu                         |
| ------------------------ | --------------------------------------------- | --------------------------------------------------- | ---------------------------------------- |
| Qualifier les droits     | Responsable métier, sécurité ou données       | teste chaque rôle sur les actions et exports        | accès attendus et écarts prouvés         |
| Prévoir la reprise       | Support et métier                             | provoquent un échec puis restaurent                 | retour au service observable             |
| Comparer les options     | Groupe de décision nommé                      | applique le même contrat et le même horizon         | options comparables sans biais           |
| Tester le prototype      | utilisateurs représentatifs                   | réalisent tâches et exceptions sur données fictives | critères d’acceptation signés ou rejetés |
| Organiser la sortie      | propriétaire, prestataire et achats/juridique | recensent livrables, droits, exports et transfert   | réversibilité vérifiable                 |

## C. Corpus interne et cannibalisation

| Page interne                                    | Intention                                 | Frontière du présent guide                                               | Usage retenu                                          |
| ----------------------------------------------- | ----------------------------------------- | ------------------------------------------------------------------------ | ----------------------------------------------------- |
| `/services/outils-internes-sur-mesure`          | Présenter le service                      | Ne prouve ni prix, ni délai, ni pertinence du sur-mesure                 | Contexte de service, lien descriptif                  |
| `/guides/automatiser-processus-metier`          | Choisir un processus à automatiser        | Ne détaille pas les contrats d’écran                                     | Renvoi sur l’automatisation, pas reprise de son outil |
| `/guides/calculer-roi-application-metier`       | Calculer ROI et coût total                | Le présent guide mesure seulement une charge observée                    | Renvoi pour le calcul économique complet              |
| `/guides/signes-besoin-logiciel-metier`         | Diagnostiquer un besoin général           | Le présent guide part d’un besoin pressenti et cadre les écrans          | Renvoi diagnostic amont                               |
| `/guides/power-apps-ou-application-sur-mesure`  | Comparer Power Apps et sur-mesure         | Aucun comparatif produit détaillé ici                                    | Renvoi éventuel en ressource liée                     |
| `/guides/airtable-notion-ou-application-metier` | Comparer deux produits et une application | Le présent guide compare cinq niveaux de solution via le contrat d’écran | Renvoi éventuel en ressource liée                     |

**Justification de l’URL distincte :** aucune page existante ne livre le
contrat d’écran à douze champs, la bibliothèque de huit écrans et l’épreuve des
succès partiels, conflits et reprises comme unité de décision.

**Maillage entrant pendant P1 :** aucun. La route reste hors registre, hub,
sitemap et `llms.txt`. Le maillage partagé appartient à l’intégration sous
mutex.

## D. Demande, SERP et analyse externe

La requête et ses variantes proviennent de la roadmap et du gel P0. Elles ne
sont pas présentées comme volumes mesurés. La lecture de pages françaises de
prestataires a servi à cartographier les réponses courantes, jamais à prouver
une durée, un prix, un gain ou une bonne pratique.

| Page observée                                            | Type         | Réponse/angle                                  | Bon point                         | Manque ou biais                                            | Consultation |
| -------------------------------------------------------- | ------------ | ---------------------------------------------- | --------------------------------- | ---------------------------------------------------------- | ------------ |
| Codisys, page back-office sur mesure                     | Prestataire  | Centralisation et adaptation métier            | Rend le besoin concret            | Oriente vers la prestation, peu de critères de renoncement | 5 août 2026  |
| Enyosolutions, développement back-office                 | Prestataire  | Fonctions, intégrations, administration        | Montre plusieurs familles d’écran | Pas de contrat testable ni de comparaison symétrique       | 5 août 2026  |
| Loméa, logiciel métier sur mesure                        | Prestataire  | Productivité et adaptation                     | Parle de processus                | Gains commerciaux non utilisables comme preuve neutre      | 5 août 2026  |
| 720flow, outil interne                                   | Prestataire  | Fluidifier le travail d’équipe                 | Part du quotidien                 | Peu de traitement des droits, succès partiels et sortie    | 5 août 2026  |
| WebProdAction, Dawap, DazzStudio, ProvenceCloud, PIM-PME | Prestataires | Fonctionnalités, développement, accompagnement | Vocabulaire de la cible           | Angles de vente ; aucun prix/délai/gain repris             | 5 août 2026  |

**Angle mort commun observé :** les pages nomment listes, tableaux de bord,
formulaires et droits, mais montrent rarement comment un écran réagit à un
succès partiel, une modification concurrente, une relance risquant un doublon,
un tiers indisponible ou une reprise par une autre personne.

**Valeur originale :** faire du contrat
`rôle → action → données → preuve → exception → reprise` la même unité de test
pour les cinq options, puis laisser la conclusion en suspens si une preuve
critique manque.

## E. Sources primaires rouvertes en P1

| Source et URL                                                                                                                              | Passage utile                                                                                             | Nature et périmètre                         | Limite explicite dans le guide                                                                                             | Consultation |
| ------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------- | ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------ |
| [DesignGouv — Bien concevoir](https://design.numerique.gouv.fr/bien-concevoir/)                                                            | Partir du besoin, tester avec les usagers, itérer, distribuer les rôles                                   | Méthode de service public numérique         | Transposition méthodologique à une PME, pas obligation générale ni preuve de performance                                   | 5 août 2026  |
| [DesignGouv — Mémo design](https://design.numerique.gouv.fr/outils/memo-design/)                                                           | Libellés, tableaux, saisies, erreurs et exemples                                                          | Outil de conception public                  | Inspiration de conception, pas norme universelle d’un back-office privé                                                    | 5 août 2026  |
| [Anact — Boîte à outils QVCT numérique](https://www.anact.fr/sites/default/files/2024-10/boite-a-outils-qvct-numerique.pdf)                | Observer l’activité et associer les personnes concernées                                                  | Ressource méthodologique QVCT               | PDF non récupéré directement lors du contrôle P1 ; titre, URL et portée issus du corpus P0, à rouvrir en P2                | 5 août 2026  |
| [Anact — Quelques clés pour réussir un projet numérique](https://www.anact.fr/sites/default/files/2023-12/FSE%2520Nume%25CC%2581rique.pdf) | Travail réel, usages et conduite de projet                                                                | Ressource méthodologique                    | PDF non récupéré directement lors du contrôle P1 ; aucune statistique ni obligation dérivée                                | 5 août 2026  |
| [CNIL — Minimiser les données](https://www.cnil.fr/fr/minimiser-les-donnees-collectees)                                                    | Limiter les données à ce qui est nécessaire                                                               | Recommandation et rappel des principes RGPD | Ne détermine pas seule les champs nécessaires dans le contexte du lecteur                                                  | 5 août 2026  |
| [CNIL — Gérer les habilitations](https://www.cnil.fr/fr/securite-gerer-les-habilitations)                                                  | Besoin d’en connaître, arrivées, mobilités, départs et revues                                             | Recommandations de sécurité                 | Un test de rôle reste nécessaire ; aucun modèle unique de rôle déduit                                                      | 5 août 2026  |
| [CNIL — Tracer les opérations](https://www.cnil.fr/fr/securite-tracer-les-operations)                                                      | Événements pertinents, accès encadré et conservation                                                      | Recommandations de sécurité                 | La durée indicative et les exceptions doivent être revalidées en P2 ; pas de surveillance par défaut                       | 5 août 2026  |
| [CNIL — Sauvegarder](https://www.cnil.fr/fr/securite-sauvegarder)                                                                          | Sauvegardes régulières, isolées et restaurations testées                                                  | Recommandations de sécurité                 | Une sauvegarde annoncée ne prouve pas la reprise métier                                                                    | 5 août 2026  |
| [CNIL — Continuité et reprise](https://www.cnil.fr/fr/securite-prevoir-la-continuite-et-la-reprise-dactivite)                              | Mode dégradé, continuité et retour au fonctionnement normal                                               | Recommandations de sécurité                 | À adapter au risque et au service précis                                                                                   | 5 août 2026  |
| [CNIL — Sécurité des API](https://www.cnil.fr/fr/securite-api-interfaces-de-programmation-applicative)                                     | Authentification, autorisation, exposition et contrôle des interfaces                                     | Recommandations de sécurité                 | Ne certifie ni l’API ni l’architecture du lecteur                                                                          | 5 août 2026  |
| [CNIL — Contrôle de l’activité des personnes employées](https://www.cnil.fr/fr/controle-de-lactivite-des-personnes-employees)              | Nécessité, proportionnalité, information et conditions concernant les représentants du personnel          | Page juridique publiée le 9 juillet 2026    | Le passage sur le CSE est borné aux entreprises privées de 50 salariés et plus dans son contexte ; relecture P2 impérative | 5 août 2026  |
| [EUR-Lex — RGPD](https://eur-lex.europa.eu/eli/reg/2016/679/oj?locale=FR)                                                                  | Art. 5 minimisation ; 25 protection dès la conception ; 28 sous-traitance ; 32 sécurité adaptée au risque | Texte officiel européen                     | Le guide ne qualifie pas seul les rôles ni la conformité du lecteur                                                        | 5 août 2026  |
| [OWASP — Authorization Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html)                         | Refus par défaut, moindre privilège et vérification des autorisations                                     | Recommandations d’ingénierie                | Pas une loi française ni une preuve de conformité                                                                          | 5 août 2026  |
| [OWASP — Logging Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html)                                     | Événements utiles, données à ne pas journaliser et protection des traces                                  | Recommandations d’ingénierie                | Pas une obligation universelle ; finalité et proportion restent contextuelles                                              | 5 août 2026  |
| [RGAA 4.1.2 — critères et tests](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)                                       | Référence de tests d’accessibilité                                                                        | Référentiel public actuel consulté          | Applicabilité juridique selon l’organisme ; RGAA 5 annoncé pour fin 2026, version à revalider avant publication            | 5 août 2026  |
| [CPI L131-3](https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000006278958/2026-02-28)                                               | Délimitation des droits cédés et du domaine d’exploitation                                                | Texte légal français                        | Aucune propriété automatique du client déduite                                                                             | 5 août 2026  |
| [CPI L113-9](https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000039279818)                                                          | Logiciels créés par des employés dans l’exercice de leurs fonctions ou sur instructions                   | Texte légal français                        | Portée salarié seulement ; ne couvre pas automatiquement prestataires, sous-traitants ou tous les livrables                | 5 août 2026  |

### Sources commerciales et volatilité

La page `/demarrer-un-projet` décrit actuellement six étapes internes : projet,
contexte, contenu/périmètre, contraintes, coordonnées, synthèse/envoi. Elle
précise l’absence de devis automatique et l’absence d’engagement. Sa promesse
de temps de réponse est volatile et n’est pas reprise comme garantie. La page
service `/services/outils-internes-sur-mesure` situe le service ; elle ne sert
pas de preuve neutre en faveur du sur-mesure.

## F. Registre des affirmations

| ID  | Affirmation                                                                          | Type                | Source ou base               | Périmètre/date                              | Statut P1                                         |
| --- | ------------------------------------------------------------------------------------ | ------------------- | ---------------------------- | ------------------------------------------- | ------------------------------------------------- |
| A01 | Commencer par la tâche et le besoin avant la solution                                | RECOMMANDATION      | DesignGouv, Anact            | Transposition méthodologique PME            | VERIFIE, portée visible                           |
| A02 | Tester avec des personnes représentatives révèle des écarts de tâche et de langage   | RECOMMANDATION      | DesignGouv                   | Méthode public vers PME                     | VERIFIE, sans promesse de résultat                |
| A03 | Un écran sert une tâche, un rôle et un résultat observable                           | DEDUCTION           | Cadre éditorial du guide     | Aucun caractère légal                       | VERIFIE comme méthode                             |
| A04 | Les accès doivent être limités au nécessaire et revus                                | FAIT/RECOMMANDATION | CNIL habilitations, RGPD     | Selon traitement et risque                  | VERIFIE, qualification requise                    |
| A05 | Refuser par défaut et vérifier chaque autorisation est une pratique d’ingénierie     | RECOMMANDATION      | OWASP Authorization          | Ingénierie, pas droit français              | VERIFIE, limite visible                           |
| A06 | Les traces doivent avoir une finalité utile et ne pas contenir de données superflues | RECOMMANDATION      | CNIL, OWASP, RGPD            | Selon finalité et risque                    | VERIFIE, pas de durée universelle publiée         |
| A07 | Un dispositif de traces peut soulever des questions de surveillance des salariés     | FAIT                | CNIL, 9 juillet 2026         | Contexte emploi exact                       | A_NUANCER et P2 obligatoire                       |
| A08 | La sauvegarde ne suffit pas sans restauration testée                                 | RECOMMANDATION      | CNIL sauvegarde/continuité   | Organisation concernée                      | VERIFIE                                           |
| A09 | Un tiers indisponible exige une file, une reprise ou un mode manuel selon criticité  | RECOMMANDATION      | CNIL continuité + ingénierie | Choix contextuel                            | VERIFIE comme méthode, pas obligation universelle |
| A10 | L131-3 impose de délimiter les droits cédés et leur exploitation                     | FAIT                | CPI L131-3                   | Contrat concerné                            | VERIFIE, aucune propriété automatique             |
| A11 | L113-9 vise le logiciel créé par un employé dans les conditions du texte             | FAIT                | CPI L113-9                   | Salariés seulement                          | VERIFIE, périmètre visible                        |
| A12 | Le RGAA fournit des critères et tests ; l’obligation dépend de l’organisme           | FAIT/RECOMMANDATION | RGAA 4.1.2                   | Version consultée, évolution annoncée       | A_NUANCER avant publication                       |
| A13 | Charge active = cas × minutes actives par cas                                        | CALCUL              | Formule visible              | Même période et unités                      | VERIFIE par tests                                 |
| A14 | Charge de reprise = cas en reprise × minutes de reprise                              | CALCUL              | Formule visible              | Même période et unités                      | VERIFIE par tests                                 |
| A15 | Charge totale = active + reprise, sauf reprise déjà incluse                          | CALCUL              | Convention visible           | Double compte explicitement évité           | VERIFIE par tests                                 |
| A16 | La charge observée n’est pas automatiquement une économie                            | DEDUCTION           | Frontière avec guide ROI     | Réaffectation et coût évité inconnus        | VERIFIE                                           |
| A17 | Un prix moyen, un gain ou un délai de projet est défendable ici                      | INCONNU             | Aucune source comparable     | Interdit P0                                 | A_RETIRER, jamais publié                          |
| A18 | Le sur-mesure est préférable                                                         | INCONNU             | Aucune preuve universelle    | La réponse dépend du contrat et des preuves | A_RETIRER comme assertion générale                |
| A19 | Un exemple de gestion de commandes illustre les cas difficiles                       | SCENARIO            | Exemple fictif construit     | Données et chiffres fictifs signalés        | VERIFIE si étiquette proche                       |
| A20 | Les cinq sorties doivent rester visibles sans classement automatique                 | RECOMMANDATION      | Méthode propre au guide      | Aucune décision automatique                 | VERIFIE par modèle et interface                   |

### Contradictions et données à ne pas publier

- aucun prix, délai, taux de gain ou seuil moyen ;
- aucune statistique Anact transposée ;
- aucune durée de conservation universelle des journaux ;
- aucune conformité RGPD, sécurité ou accessibilité promise ;
- aucune expérience client, capture de production ou résultat Hagnéré Code ;
- aucune propriété automatique du code ou des données ;
- aucune obligation CSE généralisée hors du contexte précis de la source ;
- aucune recommandation issue d’un score ou du seul volume.

## G. Calculs et scénarios

### Calculs reproductibles autorisés

```text
charge active (minutes/période) = nombre de cas (cas/période) × minutes actives par cas
charge de reprise (minutes/période) = cas en reprise (cas/période) × minutes par reprise
charge totale observée = charge active + charge de reprise
```

Convention : si la reprise est déjà comprise dans le temps actif, elle reste
affichée mais n’est pas ajoutée une seconde fois. Les cas sont des entiers
positifs ou nuls. Dans l’atelier, les minutes sont positives ou nulles et se
saisissent par pas de 0,1. Une valeur vide est inconnue. Les valeurs négatives,
non finies, hors granularité ou dont la mise à l’échelle en dixièmes n’est plus
un entier sûr bloquent le résultat avant toute multiplication.

**Politique d’arrondi « dixièmes de minute sûrs » :** après ces garde-fous, les
minutes sont multipliées et additionnées sous forme de dixièmes entiers sûrs,
puis exposées au dixième. Les heures dérivées sont arrondies à quatre décimales.
Le plus petit résultat positif permis, 0,1 minute, reste ainsi positif
(`0,0017 h`) au lieu de devenir silencieusement zéro.

### Exemple fictif, test manuel indépendant

Période : une semaine fictive. 120 dossiers × 6 minutes actives = 720 minutes.
8 dossiers repris × 15 minutes = 120 minutes. Si la reprise n’est pas incluse,
total = 840 minutes = 14 heures. Si elle est déjà incluse, total = 720 minutes
= 12 heures. Conséquence : l’équipe connaît une charge à investiguer ; elle ne
connaît encore ni économie, ni rentabilité, ni budget de construction.

### Familles de coût à recueillir, sans montant imposé

Cadrage ; configuration ou développement ; licences ; intégrations ; migration
et nettoyage ; recette ; formation et adoption ; hébergement ; support ;
maintenance ; sécurité ; évolutions ; sortie, export et transfert. Chaque ligne
doit porter une quantité, une unité, une période, une source et un propriétaire.
Le calcul économique complet est renvoyé au guide ROI.

## H. Contrat d’écran à douze champs

1. tâche et résultat attendu ;
2. déclencheur d’entrée ;
3. rôle autorisé ;
4. actions disponibles ;
5. données strictement nécessaires ;
6. source de vérité de chaque donnée ;
7. preuve ou événement utile à conserver ;
8. erreur ou exception et message attendu ;
9. reprise, annulation ou compensation ;
10. responsable en cas de blocage ;
11. comportement si un tiers est indisponible ;
12. critère de recette observable.

Chaque case inconnue est affichée « à définir » ; elle n’équivaut ni à une
autorisation ni à un refus.

## I. Matrice de couverture

| Angle               | Question du lecteur                                       | Réponse/localisation prévue | Exemple ou démonstration                                     | Limite/source/inconnue                     | Décision rendue possible        | Statut P1 |
| ------------------- | --------------------------------------------------------- | --------------------------- | ------------------------------------------------------------ | ------------------------------------------ | ------------------------------- | --------- |
| Réponse directe     | Faut-il développer ?                                      | §1                          | cinq sorties                                                 | aucune préférence automatique              | commencer ou suspendre          | COUVERT   |
| Définitions         | Back-office, tableau de bord, portail, console, CRM/ERP ? | §1                          | comparaison courte                                           | cadre éditorial                            | éviter un faux périmètre        | COUVERT   |
| Travail réel        | Que regarder avant la maquette ?                          | §2                          | commande fictive et exception                                | DesignGouv/Anact méthodologiques           | choisir une tâche test          | COUVERT   |
| Contrat d’écran     | Que doit décrire chaque écran ?                           | §2                          | contrat à douze champs                                       | cases inconnues visibles                   | produire un livrable testable   | COUVERT   |
| Huit familles       | Quels écrans prévoir ?                                    | §3                          | file, fiche, saisie, masse, reprise, preuve, droits, support | toutes ne sont pas nécessaires             | choisir par tâche, pas quota    | COUVERT   |
| Matrice des droits  | Qui fait quoi sur quelles données ?                       | §4                          | six rôles et huit actions                                    | qualification contextuelle                 | préparer tests de rôle          | COUVERT   |
| Succès partiel      | Que faire si une action de masse échoue en partie ?       | §4                          | rapport par élément, reprise sûre                            | annulation parfois impossible              | concevoir réparation            | COUVERT   |
| Concurrence         | Deux personnes modifient la même fiche                    | §4                          | conflit explicite                                            | dépend du processus                        | définir résolution              | COUVERT   |
| Tiers indisponible  | L’écriture locale réussit, le tiers échoue                | §4                          | file, état en attente, reprise                               | criticité contextuelle                     | prévoir mode dégradé            | COUVERT   |
| Cinq options        | Standard ou sur-mesure ?                                  | §5                          | même contrat, même horizon                                   | aucun score caché                          | écarter ou tester chaque option | COUVERT   |
| Charge              | Comment quantifier sans faux ROI ?                        | §6 + atelier                | trois formules                                               | minutes ≠ économies                        | mesurer avant chiffrage         | COUVERT   |
| TCO                 | Quelles dépenses comparer ?                               | §6                          | familles de coût                                             | montants inconnus                          | préparer guide ROI/devis        | COUVERT   |
| Prototype           | Comment tester avant de développer ?                      | §7                          | données fictives et critères de recette                      | prototype non production                   | accepter/rejeter un parcours    | COUVERT   |
| Accessibilité       | Clavier, zoom, mobile, sombre ?                           | §7                          | critères d’acceptation                                       | obligation juridique à qualifier           | inclure dans recette            | COUVERT   |
| Droits/données      | Quelles protections prévoir ?                             | §8                          | arrivée, mobilité, départ, export                            | pas d’audit de conformité                  | demander validation adaptée     | COUVERT   |
| Traces/surveillance | Tout journaliser ?                                        | §8 + FAQ                    | finalités/proportion                                         | CNIL emploi à revalider P2                 | limiter ou suspendre            | COUVERT   |
| Propriété/sortie    | Qui possède et qui reprend ?                              | §8                          | checklist contractuelle                                      | L131-3/L113-9 bornés                       | relire le contrat               | COUVERT   |
| Responsables        | Qui tient l’outil après livraison ?                       | §8                          | RACI opérationnel                                            | organisation à nommer                      | refuser si absent               | COUVERT   |
| Preuves finales     | Que manque-t-il avant décision ?                          | §9                          | tableau présent/manquant/bloquant                            | aucune inconnue à zéro                     | conclure ou différer            | COUVERT   |
| Plan lundi          | Que faire sans contacter une agence ?                     | §9                          | plan en sept actions                                         | aucun achat requis                         | avancer en autonomie            | COUVERT   |
| CTA                 | Que se passe-t-il après le clic ?                         | héros/sidebar + §9          | six étapes du brief                                          | pas de devis automatique, pas d’engagement | transmettre un dossier si utile | COUVERT   |

## J. Registre des perspectives

| Perspective                    | Statut     | Question reportée dans la matrice                                               |
| ------------------------------ | ---------- | ------------------------------------------------------------------------------- |
| Dirigeant non technique        | APPLICABLE | Quelle option choisir ou différer avec quelles preuves ?                        |
| Métier utilisateur             | APPLICABLE | La tâche, l’erreur et la reprise sont-elles faisables ?                         |
| Opérations                     | APPLICABLE | Qui traite file, succès partiel, incident et mode dégradé ?                     |
| Finance                        | APPLICABLE | Les coûts sont-ils comparés sur le même horizon sans inconnue à zéro ?          |
| IT et sécurité                 | APPLICABLE | Droits, intégrations, journaux, sauvegarde et reprise sont-ils testés ?         |
| Données et RGPD                | APPLICABLE | Chaque donnée et trace a-t-elle une finalité, un accès et un export qualifiés ? |
| Achats/juridique               | APPLICABLE | Livrables, droits, tiers, sortie et transfert sont-ils relus ?                  |
| Adoption                       | APPLICABLE | Des personnes représentatives acceptent-elles les tâches, erreurs et libellés ? |
| Maintenance                    | APPLICABLE | Qui diagnostique, corrige, priorise et finance les évolutions ?                 |
| Incident et reprise            | APPLICABLE | Quelle continuité avant la refonte et quel retour au mode normal ?              |
| Réversibilité/prestataire      | APPLICABLE | Que récupère l’entreprise et qui peut reprendre ?                               |
| Solution plus simple/statu quo | APPLICABLE | L’existant ou un standard couvre-t-il déjà le contrat ?                         |

## K. Empreinte éditoriale

| Guide voisin                    | Ouverture                  | Progression                   | Artefact              | Exemple               | CTA/conclusion                      |
| ------------------------------- | -------------------------- | ----------------------------- | --------------------- | --------------------- | ----------------------------------- |
| Automatiser un processus        | choix du premier processus | portes puis calcul            | carte + calculateur   | scénario défavorable  | décision d’automatiser ou non       |
| Signes d’un besoin logiciel     | diagnostic général         | signaux puis six réponses     | dossier de diagnostic | situations de blocage | observer/choisir                    |
| Power Apps ou sur-mesure        | comparatif produit         | contraintes puis options      | modèle de décision    | cas produit           | choix de plateforme                 |
| Airtable, Notion ou application | migration contestée        | journée difficile puis sortie | douze contrôles       | cinq cas              | conserver/renforcer/hybrider/sortir |

```text
Tension motrice : une liste d’écrans séduisante peut oublier le travail qui échoue et la personne qui doit le réparer.
Ouverture : réponse courte, puis distinction tableau de bord/back-office.
Progression : tâche observée → contrat d’écran → huit familles → cas difficiles → cinq options → charge/TCO → prototype → responsabilités → preuves lundi.
Artefact signature : contrat d’écran à douze champs, complété par un atelier de preuves sans score.
Rythme : prose courte, tableaux fonctionnels, deux scénarios fictifs, calcul local et décisions de section.
CTA : présent dans le système premium, même destination /demarrer-un-projet ; explication factuelle en fin de parcours.
Conclusion : choisir une preuve à produire lundi ; le contact reste facultatif.
Différences : unité écran plutôt qu’outil ; succès partiel et concurrence au premier plan ; sortie et support au même rang que la saisie.
```

## L. Plan annoté P1

| Section                 | Question résolue                                         | Preuve/exemple                          | Conséquence                          | Format                     |
| ----------------------- | -------------------------------------------------------- | --------------------------------------- | ------------------------------------ | -------------------------- |
| 01 Réponse              | Quand un back-office dédié devient-il une option ?       | cinq sorties                            | ne pas partir du code                | prose + comparaison        |
| 02 Tâche et contrat     | Comment transformer une gêne en écran testable ?         | contrat 12 champs                       | produire le bon livrable             | exemple fictif + tableau   |
| 03 Huit écrans          | Quelles familles éprouver ?                              | bibliothèque complète                   | retenir seulement celles nécessaires | cartes/tableau + SVG       |
| 04 Cas difficiles       | Comment l’écran se comporte-t-il quand ça se passe mal ? | masse, doublon, conflit, tiers          | définir réparation et responsabilité | matrice + cas fictif       |
| 05 Cinq options         | Comment comparer sans favoriser le sur-mesure ?          | même contrat et même horizon            | tester/écarter/choisir               | tableau + contre-cas       |
| 06 Charge et coût       | Que peut-on calculer honnêtement ?                       | formules + atelier                      | mesurer sans faux ROI                | formules + outil local     |
| 07 Prototype et recette | Que tester avant de construire ?                         | données fictives, clavier, zoom         | accepter ou refuser un parcours      | plan de prototype          |
| 08 Responsabilités      | Qui tient données, support, droit et sortie ?            | sources CNIL/RGPD/CPI/OWASP             | nommer/revoir/suspendre              | tableau de propriétaires   |
| 09 Lundi                | Quelle action autonome ?                                 | preuves présentes/manquantes/bloquantes | décider ou différer                  | checklist + CTA explicatif |

## M. Ressource et conversion

```text
Ressource : atelier interactif local dans la page, pas de téléchargement.
Problème résolu : distinguer fait, zéro, inconnue et contradiction pour les cinq options.
Résultat autonome : dossier texte copiable ou page imprimable.
Données : uniquement dans l’état React du navigateur ; aucun envoi ni stockage.
Calculs : trois formules de charge, unités visibles, double compte évité.
Conclusion « ne pas investir » : disponible explicitement.
Bon fit Hagnéré Code : tâche stable, écrans et responsabilités testables, options simples réellement écartées.
Mauvais fit : incident actif, besoin mouvant, standard non testé, propriétaires ou TCO absents.
Action non commerciale : remplir le contrat, tester deux erreurs, copier le dossier.
CTA : /demarrer-un-projet ; brief en six étapes ; pas de devis automatique, pas d’engagement.
```

## N. Journal P1 gelé pour G1

- Agent : `/root/back_office_p1`.
- Fichiers lus intégralement : P0, `CLAUDE.md`, règle d’or SEO, charte qualité,
  protocole quatre passes, instructions post-guide, modèle de dossier et les
  quatre DOCX fournis.
- APIs inspectées : gabarit premium, FAQ catégorisée, blocs de contenu, guide
  Airtable/Notion, modèle/atelier adjacent, SEO guide, robots privés, service
  outils internes et parcours `/demarrer-un-projet`.
- Recherche P1 : sources listées en E et SERP de prestataires listée en D.
- Arbitrage DOCX : le P0 neutralise quotas, densité, faux cas, FAQPage, dates,
  score détecteur IA, téléchargements tableur et mentions de marque forcées.
- Livrable : douze fichiers créés ou réécrits en plus du P0 immuable : présent
  dossier, page, données privées, OG, modèle pur, atelier, trois tests et trois
  SVG. Aucun fichier partagé, registre, verrou, commit ou push touché.
- Couverture éditoriale automatisée : neuf étapes, douze FAQ résiduelles, douze
  champs du contrat d’écran, huit familles d’écrans, cinq issues symétriques,
  cas difficiles, trois formules et trois scénarios explicitement fictifs.
- Tests ciblés : 38/38 sur trois fichiers Vitest. Les cas couvrent zéro valide,
  inconnue distincte, valeurs invalides, unités et périodes, reprise incluse ou
  séparée, cinq sorties sans recommandation automatique, blocages, copie,
  impression et absence de réseau/stockage/téléchargement.
- Contrôles statiques : TypeScript focalisé vert, ESLint vert, Prettier vert sur
  les fichiers P1 formatables, trois SVG XML valides et `git diff --check` vert.
  Le P0 immuable n’a pas été reformaté.
- Contrôles de frontière : 48/49 tests partagés verts. L’unique échec est la
  sentinelle volontaire `src/lib/guides.test.ts:280`, qui reçoit seulement
  `{ slug: "back-office-sur-mesure-pme", explicitLocalDraft: true }` tant que
  le brouillon local n’est pas ajouté au registre sous mutex. Les contrôles
  sitemap, robots, LLM, redirection historique et indexation restent verts.
- Build isolé : la compilation Webpack aboutit, puis le typage global s’arrête
  dans le fichier partagé `src/app/agence-next-js/page.tsx` sur un type interne
  Next absent. Le worktree n’a aucune dépendance installée ; l’exécutable
  emprunté est en Next 16.2.10 alors que `package.json` exige 16.2.12. Ce rouge
  d’environnement partagé ne provient pas d’un fichier du slug ; build complet
  et BAT réel restent à rejouer par l’orchestrateur dans l’environnement
  d’intégration aligné.
- Risques P1 ouverts : PDF Anact à rouvrir en P2 ; page CNIL emploi et version
  RGAA à revalider ; promesses commerciales de la destination CTA à revalider
  avant publication ; date de publication interdite au brouillon ; rendu réel,
  clavier, zoom, thèmes, impression et réseau à contrôler au G1/BAT.
- Décision orchestrateur : non rendue.

## O. Rapport de sortie P1 — candidat gelé

```text
PASSE_1_TERMINEE : oui — candidat remis au G1, aucune porte orchestrateur revendiquée
Slug : back-office-sur-mesure-pme
Fichiers créés ou réécrits : 12 ; P0 immuable inclus séparément au manifeste 13/13
Contrat de réponse : présent sections A/B
Sources primaires : section E
Plan et sections : section L
Calculs et exemples : section G
Contre-cas : matrice section I
CTA et destination : /demarrer-un-projet, six étapes, aucun devis automatique ni engagement
Contrôles : 38/38 ciblés ; TypeScript focalisé, ESLint, Prettier, XML et diff verts
Frontière partagée : 48/49 ; seule sentinelle locale draft attendue avant intégration
Build : compilation verte, contrôle global bloqué hors slug par dépendance Next non alignée
Risques résiduels : section N ; aucun P0/P1 propre connu au moment du gel
Manifeste P1 : docs/research/manifests/back-office-sur-mesure-pme-p1.sha256
Statut transmis : P1_PRETE_POUR_G1
```

## P. Journal P2 — enrichissement et contre-vérification

### Intégrité d’entrée et méthode

- Agent distinct : `/root/back_office_p2` ; périmètre limité aux fichiers du
  slug, sans registre, mutex, Git, déploiement ni publication.
- Gel P0 relu intégralement : SHA-256
  `070360018fdcd02b2c530d7dc26f5e4e0e1401c31365066959daff39313bd452`.
- Manifeste P1 rejoué avant toute modification : 13/13 fichiers conformes ;
  SHA-256 externe
  `d3b5bf73efbc1bae0ba6f8f52e651218316a646b79d1fc553bf88ba50c01a780`.
- Les sources primaires ont été rouvertes. Les deux PDF Anact ont été lus et
  contrôlés visuellement ; aucune statistique ni promesse de résultat n’en a
  été importée.
- Les calculs et les cinq sorties ont été attaqués par des cas nuls, inconnus,
  contradictoires, extrêmes et incompatibles. Une preuve inconnue ou invalide
  ne devient jamais zéro, « non » ou recommandation.
- Le premier candidat P2 a reçu `NO_GO` à G2 sur un défaut unique reproduit :
  `3 × 0,1` exposait `0,30000000000000004`. La même passe et le même agent ont
  repris le modèle, l’interface, les tests et le dossier avant de regeler un
  nouveau manifeste. Cette ligne documente la reprise ; elle ne vaut pas
  validation G2.

### Contre-vérification des sources primaires au 6 août 2026

| Source primaire                                                                                                                                                                                     | Point effectivement vérifié                                                                                                                                                              | Transposition autorisée dans le guide                                   | Borne conservée                                                                                          |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| [DesignGouv — Bien concevoir](https://design.numerique.gouv.fr/bien-concevoir/)                                                                                                                     | besoin avant solution, tests avec les personnes concernées, itération et rôles                                                                                                           | méthode pour observer puis tester une tâche                             | ressource de service public, ni obligation générale ni preuve de performance pour une PME                |
| [DesignGouv — Mémo design](https://design.numerique.gouv.fr/outils/memo-design/)                                                                                                                    | repères sur libellés, tableaux, saisies et erreurs                                                                                                                                       | aide à concevoir et recetter les écrans                                 | inspiration, pas norme universelle d’un back-office privé                                                |
| [Anact — Boîte à outils QVCT numérique](https://www.anact.fr/sites/default/files/2024-10/boite-a-outils-qvct-numerique.pdf)                                                                         | observation du travail réel, implication précoce et simulation du travail futur                                                                                                          | méthode de cadrage des tâches, erreurs et reprises                      | document de 72 pages issu du sanitaire et médico-social ; aucune statistique transposée à toutes les PME |
| [Anact — Quelques clés pour réussir un projet numérique](https://www.anact.fr/sites/default/files/2023-12/FSE%2520Nume%25CC%2581rique.pdf)                                                          | analyse du travail actuel, simulation du travail futur et participation des salariés                                                                                                     | contre-épreuve d’un prototype sur l’activité réelle                     | retours de cinq PME industrielles ; aucune garantie de résultat                                          |
| [CNIL — minimisation](https://www.cnil.fr/fr/minimiser-les-donnees-collectees)                                                                                                                      | limiter les données à celles nécessaires à la finalité                                                                                                                                   | demander la finalité et la nécessité de chaque champ                    | le guide ne décide pas seul des données nécessaires au lecteur                                           |
| [CNIL — habilitations](https://www.cnil.fr/fr/securite-gerer-les-habilitations)                                                                                                                     | retrait lors d’un changement de fonction/mission ou d’un départ ; revue régulière recommandée au moins annuellement                                                                      | tester arrivées, mobilités, départs et revue des accès                  | périodicité CNIL recommandée, pas règle universelle indépendante du contexte                             |
| [CNIL — journalisation](https://www.cnil.fr/fr/securite-tracer-les-operations)                                                                                                                      | conservation recommandée sur une période glissante de six mois à un an ; exceptions en cas d’obligation légale, contentieux, contrôle interne ou analyse post-incident                   | borner finalité, accès, événements et conservation des traces           | aucune durée légale universelle ; aucun détournement vers la surveillance autorisé                       |
| [CNIL — sauvegardes](https://www.cnil.fr/fr/securite-sauvegarder) et [continuité](https://www.cnil.fr/fr/securite-prevoir-la-continuite-et-la-reprise-dactivite)                                    | sauvegardes isolées et restaurations testées ; mode dégradé, reprise, retour au fonctionnement normal et exercices réguliers                                                             | exiger un test de restauration et de reprise métier                     | à adapter au risque et au service ; une sauvegarde annoncée ne prouve pas la continuité                  |
| [CNIL — contrôle de l’activité](https://www.cnil.fr/fr/controle-de-lactivite-des-personnes-employees)                                                                                               | nécessité, proportionnalité et information ; passage CSE borné aux entreprises privées d’au moins 50 salariés et à certains établissements publics employant du personnel de droit privé | signaler qu’un journal peut changer de finalité et devoir être qualifié | page du 9 juillet 2026 ; d’autres instances s’appliquent dans le public selon la situation               |
| [EUR-Lex — RGPD](https://eur-lex.europa.eu/eli/reg/2016/679/oj?locale=FR)                                                                                                                           | articles 5, 25, 28 et 32 : minimisation, protection dès la conception, sous-traitance, sécurité adaptée au risque                                                                        | faire entrer données, prestataires et risque dans le cadrage            | aucune conformité individuelle conclue par le guide                                                      |
| [OWASP — autorisations](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html) et [journalisation](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html) | moindre privilège, refus par défaut, contrôle de chaque requête ; événements utiles et données à ne pas journaliser                                                                      | critères d’ingénierie pour rôles et traces                              | recommandations techniques, pas droit français                                                           |
| [RGAA 4.1.2](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)                                                                                                                    | version publiée des critères et tests consultée le 6 août 2026 ; version 5 annoncée pour fin 2026                                                                                        | critères utiles à la conception et à la recette                         | applicabilité juridique selon l’organisme ; version à rouvrir avant publication                          |
| [CPI L131-3](https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000006278958/2026-02-28)                                                                                                        | chaque droit cédé doit être mentionné distinctement et son exploitation délimitée par étendue, destination, lieu et durée                                                                | checklist contractuelle de cession                                      | aucune propriété automatique du client                                                                   |
| [CPI L113-9](https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000039279818)                                                                                                                   | logiciels et documentation créés par les employés dans les conditions du texte ; certains agents publics également visés                                                                 | distinguer création salariée, prestataire et composants tiers           | ne s’étend pas automatiquement aux prestataires ni à tous les livrables                                  |

### Registre contradictoire P2

| Défaut ou ambiguïté attaqué                                                                             | Risque lecteur                                                                                      | Correction réalisée                                                                                                                                                                       | État P2 |
| ------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Assemblage léger et sur-mesure pouvaient être tous deux disponibles lorsque la frontière était isolable | le modèle pouvait justifier deux conclusions incompatibles                                          | la preuve 7 vise désormais une brique légère **testée**, avec frontière, source de vérité, exploitation et reprise ; `oui` ouvre l’assemblage et contredit le dédié, `non` fait l’inverse | FERMÉ   |
| Le test de l’existant n’était pas un arrêt global                                                       | une équipe sans logiciel pouvait être poussée vers un achat sans avoir observé son processus manuel | la preuve porte sur « l’outil ou le processus manuel actuel » ; `non` suspend toutes les options d’investissement, `oui` peut documenter un processus manuel réellement observé           | FERMÉ   |
| Le héros annonçait « 8 écrans éprouvés » alors qu’il s’agit de familles à examiner                      | faux accomplissement et quota implicite                                                             | héros, sommaire et corps disent désormais « 8 familles à éprouver » ; seules les familles nécessaires sont retenues                                                                       | FERMÉ   |
| Les preuves s’affichaient dans l’ordre 1–9, 11, 10, 12–14                                               | parcours de contrôle incohérent                                                                     | ordre DOM et visuel rendu strictement 1 à 14                                                                                                                                              | FERMÉ   |
| Le calcul acceptait des minutes hors plage sûre lorsque le multiplicateur valait zéro                   | résultat techniquement fini mais numériquement non fiable                                           | chaque valeur est validée avant multiplication et tout produit hors plage sûre est refusé                                                                                                 | FERMÉ   |
| Les cas en reprise pouvaient dépasser le nombre total de cas                                            | charge de reprise incohérente                                                                       | contrainte `cas en reprise ≤ cas totaux`, aide visible et erreur bloquante                                                                                                                | FERMÉ   |
| `3 × 0,1` exposait `0,30000000000000004` dans l’objet, l’UI et le dossier                               | fuite de précision binaire et calcul illisible                                                      | politique nommée « dixièmes de minute sûrs » : granularité 0,1 validée par entier mis à l’échelle, calcul en dixièmes sûrs, heures à quatre décimales                                     | FERMÉ   |
| CRM/ERP étaient implicitement assimilés à des produits standard                                         | définition factuellement trop étroite                                                               | le texte les présente comme familles de systèmes pouvant être standard, configurées ou spécifiques                                                                                        | FERMÉ   |
| Sources P1 encore marquées « à rouvrir » ou trop générales                                              | dette de vérification invisible au lecteur                                                          | PDF Anact rouverts ; bornes CNIL, RGPD, RGAA et CPI précisées dans le corps, la FAQ et les sources                                                                                        | FERMÉ   |

### Matrice de tests adversariaux

| Cas essayé                                                                  | Résultat attendu et obtenu                                                              |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| zéro cas, zéro minute, zéro reprise                                         | résultat complet à 0, sans transformer zéro en inconnu                                  |
| période ou valeur vide                                                      | état incomplet ; total inconnu, jamais converti en 0                                    |
| quantité négative ou fractionnaire ; minute négative ou non finie           | état invalide                                                                           |
| minute supérieure à `Number.MAX_SAFE_INTEGER`, même multipliée par zéro     | état invalide avant multiplication                                                      |
| produit au-delà de la plage de calcul sûre                                  | état invalide avec motif explicite                                                      |
| cinq reprises pour quatre cas                                               | état invalide avec message de cohérence                                                 |
| reprise déjà incluse                                                        | reprise affichée mais non additionnée une seconde fois                                  |
| exemple 120 × 6 et 8 × 15                                                   | 720 min actives + 120 min de reprise = 840 min = 14 h ; si déjà incluse, 720 min = 12 h |
| trois cas × 0,1 minute                                                      | objet, UI et dossier exposent `0,3`, jamais `0,30000000000000004`                       |
| 0,1 minute active + 0,2 minute de reprise                                   | total exclu = `0,3` ; si la reprise est incluse, total = `0,1` et reprise reste visible |
| plus petit pas positif : un cas × 0,1 minute                                | `0,1 min` et `0,0017 h`, jamais zéro                                                    |
| minute positive hors granularité, par exemple 0,05                          | état invalide ; aucune valeur arrondie silencieusement                                  |
| plus grande minute dont `valeur × 10` reste un entier sûr, puis pas suivant | borne acceptée à un cas ; pas suivant refusé avant le produit                           |
| processus manuel actuel réellement observé                                  | preuve de test de l’existant recevable ; aucune obligation de posséder déjà un logiciel |
| outil ou processus actuel non testé                                         | suspension globale, même si une option a été choisie                                    |
| frontière légère inconnue                                                   | aucune conclusion sur assemblage ou sur-mesure                                          |
| frontière légère testée et isolable                                         | assemblage disponible ; sur-mesure contradit                                            |
| frontière légère testée et non isolable                                     | sur-mesure peut rester disponible ; assemblage contradit                                |
| existant ou standard couvre le contrat                                      | option correspondante disponible ; le sur-mesure perd la comparaison                    |
| processus instable, droits/TCO/support inconnus                             | arrêt explicite ou décision suspendue                                                   |
| report sélectionné avec preuves manquantes                                  | report visible, mais jamais présenté comme recommandation automatique définitive        |

### Contrôle du rendu P2

- Route locale servie en production avec `noindex, nofollow`, canonical cohérente,
  deux objets JSON-LD (`Article`, `BreadcrumbList`) sans date inventée et sans
  `FAQPage`.
- Absence de débordement horizontal contrôlée à 320, 360, 390, 430, 640, 768,
  1024, 1280, 1440 et 1600 px, en clair et sombre. Les quatorze preuves restent
  atteignables.
- Chrome système 151, clavier seul : premier `Tab` sur le lien d’évitement,
  `Entrée` vers `#main-content` avec focus du `main`, CTA atteint avec contour
  visible, FAQ ouverte avec `Entrée` puis refermée avec `Espace`.
- Atelier réel : 120 × 6, 8 × 15 et total 840 reproduits ; contradictions
  standard/dédié et assemblage/dédié visibles ; processus actuel non testé et
  reprise supérieure au total bloquants ; preuves rendues dans l’ordre 1–14.
- Axe : zéro violation en clair, sombre et à 320 px. Le contrôle de contraste
  automatisé laisse un résultat « incomplete » sur des zones en dégradé ; il
  ne constitue pas à lui seul une preuve exhaustive de contraste.
- Les trois SVG chargent avec leurs dimensions intrinsèques et des textes
  alternatifs descriptifs. Après rechargement : aucune réponse HTTP ≥ 400,
  aucun échec réseau et aucune erreur ou alerte console.
- Reflow équivalent à un zoom de 200 % contrôlé de 640 vers 320 px CSS. Le zoom
  natif à 200 % n’a pas été produit de manière fiable par l’automate et reste à
  rejouer au contrôle transversal ; aucune preuve plus large n’est revendiquée.

### Résidus et frontières transmis à G2

- L’unique échec partagé attendu avant intégration est la sentinelle
  `src/lib/guides.test.ts`, qui détecte volontairement le brouillon local hors
  registre. Sa correction appartient à l’intégration sous mutex, jamais à P2.
- `npm audit --omit=dev` signale 1 vulnérabilité haute et 3 modérées dans la
  chaîne partagée `@opennextjs/cloudflare → wrangler → miniflare → undici`.
  La correction proposée est forcée et rétrograde une dépendance majeure ; elle
  n’est ni attribuable au slug ni appliquée dans cette passe éditoriale.
- La navigation, le formulaire, le pied de page et le CTA mobile fixe sont des
  composants globaux. Leur rendu imprimé/commercial reste à qualifier au
  contrôle transversal ; P2 ne modifie pas ces fichiers partagés.
- `datePublished` et `dateModified` restent interdites sans instant réel de
  déploiement. Aucun déploiement, URL publique, découverte ou indexation n’est
  affirmé.
- La page CNIL du 9 juillet 2026, la version RGAA, les promesses du CTA et les
  autres faits volatils devront être rouverts avant une publication réelle.

## Q. Rapport de sortie P2 — candidat gelé

```text
PASSE_2_TERMINEE : oui — candidat remis au G2, aucune porte orchestrateur revendiquée
Slug : back-office-sur-mesure-pme
Agent distinct : /root/back_office_p2
Corrections factuelles : sources Anact, CNIL, RGPD, RGAA et CPI rouvertes et bornées
Corrections décisionnelles : exclusivité assemblage/dédié, test global de l'existant manuel ou logiciel, calculs extrêmes et cohérence des reprises
Reprise G2 : précision fixe en dixièmes sûrs, heures à quatre décimales, aucune petite durée positive convertie en zéro
Calcul reproductible : 720 + 120 = 840 min = 14 h ; reprise incluse = 720 min = 12 h
Calculs décimaux : 3 × 0,1 = 0,3 ; 0,1 + 0,2 = 0,3 ; reprise incluse = 0,1 ; plus petit pas = 0,1 min = 0,0017 h
Contrôles ciblés du snapshot repris : 53/53 sur les trois fichiers Vitest du slug
Statique : TypeScript, ESLint, Prettier, trois SVG XML et git diff --check verts
Preuves antérieures à la reprise, non revendiquées sur ce nouveau snapshot : global 1 176/1 177, SEO 186/187, build 76/76 et postbuild verts ; seul rouge partagé = sentinelle local draft
Audit dépendances : 1 haute et 3 modérées partagées dans la chaîne Cloudflare/Undici, sans correctif forcé slug-only
BAT : dix largeurs, deux thèmes, clavier Chrome, atelier, axe, médias et réseau contrôlés ; zoom natif 200 % à rejouer en Q
Frontières : aucune date, intégration, publication, URL publique ou indexation revendiquée
Manifeste P2 : docs/research/manifests/back-office-sur-mesure-pme-p2.sha256
Statut transmis : P2_PRETE_POUR_G2
```

## R. Rapport de sortie P3 — candidate remise

```text
PASSE_3_TERMINEE : oui — candidate remise à G3, aucune porte orchestrateur revendiquée
Slug : back-office-sur-mesure-pme
Agent distinct : /root/back_office_p3
Polish appliqué : raccords naturels entre contrat, familles d’écran, droits, options, charge, prototype, exploitation et décision
Clarté lexicale : CRM, ERP, OWASP, ROI, RGAA, RGPD et CSE expliqués dans le contexte ; B2B et IT remplacés lorsqu’un terme français suffisait
Reprise G3 : NO_GO sur « Le Le Référentiel… » rendu par un article extérieur au lien ; article dupliqué supprimé sans changer le fond ni l’URL
Garde-fou : test du texte rendu contre ce doublon exact et trois autres doublons d’articles bornés
Préservation : titre, meta, faits, sources, cinq options, douze champs, huit familles, calculs, modèle, atelier, OG, SVG, noindex et données structurées inchangés
Contrôles ciblés : 56/56 sur les trois fichiers Vitest du slug
Statique : TypeScript, ESLint, Prettier sur le périmètre pris en charge, trois SVG XML et git diff --check verts
Manifeste P3 : docs/research/manifests/back-office-sur-mesure-pme-p3.sha256 — 14 entrées, sans auto-référence
Frontières : aucune G3, P4, intégration, publication, URL publique ou indexation revendiquée
Statut transmis : REMISE_P3_POUR_G3
```

## S. Journal P4 — antipasse IA candidate remise

### Intégrité d’entrée et adaptation du Prompt 4

- Agent distinct : `/root/back_office_p4` ; aucun autre agent lancé et aucun
  fichier partagé, registre, verrou ou état Git touché.
- La skill Documents et son protocole de lecture ont été lus intégralement. Le
  DOCX `Prompt 4 - Antipasse IA.docx` a été rendu en neuf pages, inspecté
  visuellement page par page à 100 % et ses 381 paragraphes ont été extraits.
- Gel P0 vérifié avant édition : SHA-256
  `070360018fdcd02b2c530d7dc26f5e4e0e1401c31365066959daff39313bd452`.
- Manifeste P3 rejoué avant édition : 14/14 ; SHA-256 externe exact
  `f8e551f7a885b5d5cd9c6fc53c70c6f3028d409dda9b88e17bcb1a404fd95702`.
- Les exemples fiscaux, le ton « café-CGP », le quota de reformulations, la
  multiplication de sous-agents et les contrôles de schéma FAQ du DOCX ne sont
  pas transposés. Le lecteur reste une direction de PME ; P0, les faits P2 et
  le polish validé P3 priment.

### Cartographie des neuf H2 et diagnostic borné

| H2                          | Passage exact ou constat                                                                | Pattern                                             | Gravité | Décision P4                                                                                                    |
| --------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------- | ------- | -------------------------------------------------------------------------------------------------------------- |
| 01 Réponse directe          | Héros, définitions, cinq issues et règle de décision relus                              | Aucun défaut démontré                               | —       | Inchangé : les répétitions du contrat d’écran servent la mémorisation et la décision                           |
| 02 Contrat d’écran          | « La personne qui exécute… Le propriétaire métier… Le support… Une quatrième lecture… » | 3, symétrie répétée                                 | MOYENNE | Trois rôles regroupés dans un rythme court/long, puis consigne directe pour la quatrième lecture               |
| 03 Huit familles            | « La file n’est pas… La fiche n’est pas… La reprise n’est pas… Le support n’est pas… »  | 3 et 13, parallélisme mécanique                     | MOYENNE | Quatre titres remplacés par des formulations fonctionnelles différentes ; deux descriptions légèrement variées |
| 04 Droits et cas difficiles | Matrices, succès partiel et message d’erreur relus                                      | Aucun défaut démontré                               | —       | Inchangé : le parallélisme appartient ici à des lignes de comparaison et de recette                            |
| 05 Cinq options             | « Une méthode qui ne peut jamais conclure “garder l’existant” prépare une vente »       | 14, dramatisation et intention générale non prouvée | MOYENNE | Remplacé par « Si “garder l’existant” est impossible, la comparaison est biaisée »                             |
| 06 Charge et coût           | Formules, cas fictif, atelier et lien ROI relus                                         | Aucun défaut démontré                               | —       | Inchangé : la répétition des unités et des cinq options est un garde-fou de calcul                             |
| 07 Prototype et recette     | Plan de recette, RGAA, média et passage vers l’exploitation relus                       | Aucun défaut démontré                               | —       | Inchangé : le tableau est volontairement régulier pour rendre les critères comparables                         |
| 08 Responsables et sortie   | RGPD, CNIL, CPI, responsabilités et relève relus                                        | Aucun défaut démontré                               | —       | Inchangé : les formulations juridiques bornées ne sont pas remplacées par du faux oral                         |
| 09 Décider lundi            | Plan en sept actions, preuves, CTA et dernière question relus                           | Aucun défaut démontré                               | —       | Inchangé : l’impératif est légitime dans une procédure et le CTA reste facultatif                              |

Le média 16:9 portait en plus « Du travail à la reprise, sans angle mort ».
L’expression promettait une exhaustivité impossible à prouver (patterns 4 et
14, gravité MOYENNE). Elle devient « Du traitement courant à la reprise » sans
modifier dimensions, rôle, `title`, `desc`, structure accessible ni sens du
contrat.

### Revue des quinze familles

1. aucune auto-félicitation du guide trouvée ;
2. aucune triplette numérotée narrative ; les nombres visibles décrivent un
   contrat, des preuves ou une procédure ;
3. le parallélisme artificiel des rôles et des quatre cartes a été fermé ;
4. le seul slogan adjectival non prouvé était celui du SVG 16:9 ;
5. aucune métaphore fabriquée restante ne justifie une correction ;
6. aucune cascade de parenthèses dans un même raisonnement ;
7. aucun connecteur robotique utilisé comme remplissage ; les « notamment »
   juridiques conservent une fonction de borne ;
8. aucune conclusion « pour conclure » ou « ce qu’il faut retenir » ;
9. la cadence alterne déjà phrases courtes, phrases développées, tableaux,
   exemples et questions ;
10. aucun verbe neutre n’a été remplacé lorsqu’un verbe plus oral aurait réduit
    la précision ;
11. les formulations administratives restantes appartiennent aux passages
    juridiques et contractuels ;
12. aucune inversion sujet-verbe artificielle ;
13. les listes parallèles restantes sont des contrats, comparatifs ou tests qui
    exigent justement une structure stable ;
14. l’accusation « prépare une vente » a été ramenée au biais observable ;
15. les liens de cause à effet, les cas inverses et les STOP restent explicites.

### Corrections, préservations et limites

- Corrections visibles : un paragraphe de rôles, quatre titres de cartes et
  deux descriptions, un titre de contre-test et un titre de SVG.
- Test éditorial ajouté uniquement sur les formulations fermées et leurs
  remplacements exacts ; aucune regex large ni interdiction de mots ordinaires.
- Préservés sans modification : titre, meta, héros, neuf H2, douze FAQ, CTA,
  sources, faits et bornes juridiques, cinq options, douze champs, huit
  familles, modèle décisionnel, calcul en dixièmes sûrs, atelier, schémas,
  noindex/nofollow et absence de dates.
- Aucun quota de reformulation appliqué. Les six H2 déjà naturels n’ont reçu
  aucun changement de style.
- Cette remise ne vaut ni G4, ni contrôle transversal, ni intégration, ni
  publication.

### Reprise après le NO_GO P2 de G4

- G4 a relevé à 390 px l’écho exact « La file montre le travail à traiter Elle
  montre ce qui attend une action ».
- Le titre reste inchangé. Seul le premier verbe de la description devient
  « Elle indique » ; le sens, la priorité, le rôle et la suite du texte restent
  identiques.
- Un test borné interdit uniquement la concaténation rendue signalée et exige
  son remplacement exact. Aucun autre passage n’a été rouvert.
- Cette correction rend un nouveau candidat à G4 ; elle ne revendique pas son
  verdict.

### Reprise après le NO_GO P1 de Q

- Le contrôle indépendant Q a montré que l’absence de `ctaDescription` dans le
  `faqMeta` laissait apparaître le texte partagé « Un conseiller vous rappelle
  sous 24 h. ».
- Le périmètre propre au slug fournit désormais exactement : « Décrivez votre
  question et les preuves déjà réunies ; elle sera relue avant toute
  proposition. » Aucun délai, rappel ou garantie n’est ajouté.
- Le garde-fou porte sur le HTML rendu : il exige cette phrase exacte, interdit
  l’ancien texte et toute variante visible de « sous 24 h ».
- Aucun composant partagé, texte de FAQ, CTA principal ou autre partie du guide
  n’a été modifié. Le snapshot est un nouveau candidat à G4 puis à Q ; aucun de
  ces verdicts n’est revendiqué.

### Contrôles du snapshot P4 repris après Q

- Tests ciblés : 59/59 sur les trois fichiers Vitest du slug.
- TypeScript `--noEmit` et ESLint sur les sept fichiers de route, code et tests :
  verts.
- Prettier : tous les fichiers TS/TSX du slug et le présent journal sont
  conformes. Le parseur Prettier ne prend pas en charge les SVG dans cet
  environnement ; leur XML est valide 3/3 avec `xmllint`.
- `git diff --check` : vert.
- SVG 16:9 rerastérisé en 1600 × 900 et inspecté après la correction : titre
  entier, aucun débordement ni changement de structure accessible observé.
- Le manifeste P4 est créé après le gel de ce journal, sans auto-référence, sur
  exactement quinze entrées : P0, journal, P1/P2/P3, trois SVG et sept fichiers
  de route, code et tests. Son SHA externe et son replay sont rapportés dans la
  remise P4.

### Normalisation mécanique avant intégration

- Le premier `git diff --cached --check` a détecté huit doubles espaces de fin
  de ligne Markdown et une ligne vide finale dans le gel P0, invisibles pendant
  les passes tant que ce fichier était non suivi.
- L’orchestrateur a retiré uniquement ces caractères de mise en forme. Aucune
  question, source, limite, valeur, règle ou autorisation du P0 n’a changé.
- Le SHA du P0 normalisé devient
  `070360018fdcd02b2c530d7dc26f5e4e0e1401c31365066959daff39313bd452`.
  Cette normalisation invalide mécaniquement l’ancienne empreinte P4 et impose
  un nouveau manifeste d’intégration ainsi qu’un contre-audit release ; elle ne
  vaut ni nouveau verdict Q, ni publication.

## T. Contrôle transversal, intégration privée et remise release

### Verdicts indépendants avant intégration

- Le premier agent Q, distinct des quatre rédacteurs, a rendu `NO_GO` à
  94/100 sur un unique P1 : le CTA FAQ partagé affichait encore une promesse de
  rappel « sous 24 h » faute de texte propre au slug.
- Le même agent P4 a ajouté un texte sans délai ni garantie, puis G4 a rejoué
  le périmètre. Un second agent indépendant, `/root/back_office_q2`, a rendu
  `GO_QUALITE_GUIDE` à **95/100**, charte **19/20**, avec **0 P0 et 0 P1**.
- Ce Q2 portait sur le snapshot P4 avant la normalisation mécanique du P0. Le
  manifeste P4 historique courant, à quinze entrées, a pour SHA-256 externe
  `a2b306555f162a9b0cca1adb4744625ad9ad156c8bad096dc09e66e48e6e6a99`.
  Il reste historique : le snapshot d’intégration rejoue séparément les
  fichiers courants.

### Intégration partagée sous mutex

- La route est inscrite dans `src/lib/guides.ts` avec son titre, sa meta, son
  héros, ses trois images, sa section et **21 minutes** de lecture mesurées.
  Son statut `ready-for-human-review` la maintient hors des guides publiés.
- La redirection d’attente du slug est retirée. Le hub connaît son icône et le
  guide `signes-besoin-logiciel-metier` apporte un maillage entrant contextuel,
  sans recommandation automatique de sur-mesure.
- `guide-data.ts` dérive désormais metadata et données structurées du registre
  central. Le rendu émet seulement `Article` et `BreadcrumbList`, avec
  `isPartOf`, trois images, un titre aligné et aucune date inventée.
- Deux sentinelles du guide #33 ont été réparées sans toucher à son gel ni à
  son manifeste : l’attente du SHA P0 a été alignée sur le fichier réellement
  livré et son manifeste intégré est désormais vérifié comme historique, donc
  sans comparer les futurs registres partagés à un ancien snapshot.

### Batterie intégrée avant gel release

- Suite globale : **1 353/1 353** tests verts avant l’ajout des trois
  sentinelles finales de manifeste et d’impression ; ces nouvelles sentinelles
  doivent être rejouées dans la batterie release après gel.
- TypeScript, ESLint, Prettier, `xmllint` sur les trois SVG et
  `git diff --check` : verts.
- Build Next.js 16.2.12 avec Webpack : compilation et TypeScript verts,
  **81/81** pages statiques générées. Postbuild : **50 URL** de sitemap,
  **33 liens** LLM, **50 pages**, **23 temps de lecture** et **88 blocs
  JSON-LD** contrôlés en environnement privé `noindex`.
- `npm audit --omit=dev` conserve un résidu partagé : **1 vulnérabilité haute
  et 3 modérées** dans la chaîne Cloudflare/Wrangler/Miniflare/Undici. Le seul
  correctif proposé force une rétrogradation majeure incompatible ; il n’est
  pas appliqué aveuglément et reste un P2 opérationnel avant production.

### BAT du build réellement servi

- Largeurs CSS exactes **320, 360, 390, 430, 640, 768, 1024, 1280, 1440 et
  1600 px**, en clair et sombre : aucun débordement horizontal stable ; H1,
  article et sommaire restent dans le viewport. Le reflow équivalent à 200 %
  est couvert par le passage de 640 à 320 px CSS.
- Axe sur 320, 768 et 1600 px dans les deux thèmes : **0 violation**. Les
  contrôles de contraste en dégradé restent classés « incomplete » par l’outil
  et ne sont pas transformés en preuve automatique.
- Les trois SVG se chargent réellement avec leurs dimensions 1600 × 900,
  1200 × 900 et 1000 × 1000 après défilement. Sur 48 réponses réseau : aucun
  HTTP ≥ 400, aucun échec et aucune exception. Quatre avertissements Chrome de
  préchargement CSS, sans erreur de page, restent bornés au moteur.
- L’atelier reproduit **720 + 120 = 840 minutes**, refuse 121 reprises pour
  120 cas et retombe à **720 minutes** lorsque la reprise est déclarée incluse.
  Aucune donnée n’est envoyée. Les douze questions FAQ conservent leurs
  relations `aria-controls`/`aria-labelledby` ; les interactions directes et
  les états calculés sont verts.
- Le navigateur intégré laisse `Tab` sur `BODY`, défaut déjà isolé de cet
  outil. Le Q2 indépendant avait recoupé le parcours au clavier dans Chrome
  système sur le snapshot éditorial : lien d’évitement, CTA, FAQ avec Entrée et
  Espace et focus visible. L’intégration ne modifie aucun de ces composants
  interactifs ; le contre-audit release doit néanmoins recouper cette frontière.
- L’impression a d’abord révélé une sortie Letter faute de contrat de page.
  Le guide déclare désormais `@page { size: A4; margin: 10mm; }` et un test de
  non-régression. Le PDF Chrome final est un A4 tagué de **41 pages** ; la
  planche complète et les pages détaillées ont été inspectées sans texte coupé,
  chevauchement, carré noir ni média illisible. Navigation, formulaire global,
  CTA commerciaux et pied de page ne polluent pas l’impression.

### Frontière de remise

Le manifeste `back-office-sur-mesure-pme-integration.sha256` doit figer et
rejouer exactement les vingt-cinq fichiers de la branche, sans auto-référence.
Après sa création, une batterie complète, un build, un BAT de non-régression et
un contre-audit release indépendant restent obligatoires avant commit et push.
Même après un push vérifié, aucune fusion, aucun déploiement, aucune publication,
aucune URL publique, aucune découverte et aucune indexation ne seront déduits.
`datePublished` et `dateModified` restent un STOP jusqu’au snapshot réellement
déployé et daté.
