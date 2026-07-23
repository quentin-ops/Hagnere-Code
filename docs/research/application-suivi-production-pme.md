# Dossier de recherche — Application de suivi de production pour PME : quel niveau d'outil choisir ?

> Dossier de preuve des quatre passes. Recherche, rédaction, contre-audit,
> validation éditoriale déléguée et contrôle technique P4 sont terminés.

## Journal des quatre passes

Propriétaire éditorial unique : `/root`

| Passe                        | État                                     | Date       | Responsable                 | Snapshot                                                             | Blocages                                                |
| ---------------------------- | ---------------------------------------- | ---------- | --------------------------- | -------------------------------------------------------------------- | ------------------------------------------------------- |
| 1. Recherche                 | Terminée — porte revalidée après reprise | 2026-07-23 | `/root/audit_p1_production` | `docs/research/manifests/application-suivi-production-pme-p1.sha256` | Aucun après correction des 8 P1 et 4 P2 du contre-audit |
| 2. Rédaction et intégration  | Terminée — porte validée                 | 2026-07-23 | `/root/write_production_p2` | `docs/research/manifests/application-suivi-production-pme-p2.sha256` | Aucun                                                   |
| 3. Contre-audit indépendant  | Terminée — porte validée                 | 2026-07-23 | `/root/p3_production_final` | `docs/research/manifests/application-suivi-production-pme-p3.sha256` | Aucun                                                   |
| 4. Plume humaine et contrôle | Terminée — porte validée                 | 2026-07-23 | `/root`                     | `docs/research/manifests/application-suivi-production-pme-p4.sha256` | Aucun                                                   |

### Manifeste du snapshot

| Fichier contrôlé                                    | SHA-256                   | Passe | Remarque                                        |
| --------------------------------------------------- | ------------------------- | ----- | ----------------------------------------------- |
| `docs/research/application-suivi-production-pme.md` | Voir le manifeste externe | P1    | Hash externe pour éviter une référence instable |

## 1. Fiche d'identité

```text
Slug : application-suivi-production-pme
Statut actuel : publiable — validation éditoriale déléguée
Requête principale : application suivi production PME
Moment du parcours : comprendre / décider
Lecteur précis : dirigeant ou responsable de production d'une PME qui ne sait
  pas, à un moment donné, où en sont les ordres de fabrication, pourquoi une
  étape est bloquée ou quelle quantité est réellement terminée.
Situation déclenchante : l'atelier, le commerce et l'administration donnent
  trois réponses différentes à « où en est cette commande ? ».
Décision principale après lecture : attendre tout en corrigeant la circulation
  de l'information, configurer l'outil déjà possédé, choisir un produit standard
  de gestion ou de suivi de production, assembler un outil avec des blocs
  visuels sans développement classique (no-code), ou développer un ajout ciblé
  sur mesure.
Niveau de connaissance au départ : forte connaissance de la production, mais
  vocabulaire logiciel variable.
5 questions indispensables :
  1. Quelle décision doit être prise grâce à une information plus fraîche ?
  2. Quels événements minimaux décrivent réellement l'avancement ?
  3. Qui déclare chaque événement et dans quelles conditions d'atelier ?
  4. Quel système crée l'ordre et lequel conserve le résultat ?
  5. Une solution standard couvre-t-elle étapes, unités, reprises et traçabilité ?
3 objections ou craintes :
  1. « Les opérateurs passeront leur journée à saisir. »
  2. « Nous allons acheter une GPAO trop lourde. »
  3. « Les données seront fausses dès qu'un cas sort du flux normal. »
Action utile sans contact commercial : reconstruire une journée d'atelier à
  partir d'un ordre de l'entreprise et lister seulement les événements
  nécessaires pour expliquer son état à la fin de la journée. Aucune donnée de
  production réelle ne doit être publiée dans le guide.
CTA possible : présenter un flux de production dans le formulaire guidé ; le
  clic ne livre automatiquement ni diagnostic, ni périmètre, ni devis.
Hors périmètre : choix complet d'un progiciel de gestion intégré (ERP), commande
  directe ou réglage d'une machine, modification d'un automate industriel,
  ordonnancement avancé, obligations sectorielles de traçabilité, certification
  qualité, calcul générique du taux de rendement synthétique (TRS).
Date de la recherche : 2026-07-23
Responsable de la synthèse initiale : /root/research_internal_apps_batch2
Responsable de la reprise P1 : /root/audit_p1_production
```

## 1 bis. Contrat de langage humain

- Phrase exacte que le lecteur pourrait dire au téléphone : « Quand un client
  appelle, personne ne sait exactement où en est sa commande : nous faut-il une
  application de suivi de production ? »
- Réponse qu'il attend en une phrase : commencez par les quelques événements
  que l'atelier peut déclarer sans ralentir le travail ; attendez si les règles
  ne sont pas encore décidées, puis testez dans cet ordre l'outil déjà possédé,
  un produit standard, un assemblage no-code et seulement ensuite un ajout sur
  mesure.
- Terme central expliqué sans jargon : une application de suivi de production
  enregistre ce qui vient de se passer sur un ordre — démarrage, quantité,
  blocage, reprise, contrôle ou fin — pour que la prochaine décision repose sur
  la même information.
- Mots ordinaires : ordre de fabrication, commande, étape, poste, quantité
  bonne, rebut, reprise, blocage, avance, retard, lot, opérateur, atelier.
- Mots à éviter sans explication : système d'exécution de la production (MES),
  gestion de production assistée par ordinateur (GPAO), taux de rendement
  synthétique (TRS), informatique de gestion (IT), technologie opérationnelle
  des machines (OT), « temps réel », ordonnancement et industrie 4.0. Retirer
  « shopfloor », « verticalisation » et « source de vérité » de la page publique.
- Projet des 150 premiers mots : partir des trois réponses contradictoires ;
  distinguer immédiatement suivre, planifier et conduire une machine ; annoncer
  la reconstruction d'une journée d'atelier et les cinq réponses possibles,
  dont l'attente active et le no-code défini en français.
- Ce que le lecteur saura décider : si son besoin concerne une information
  d'avancement, une planification ou un système de production plus large.
- H2 relus isolément : validés en P2.
- Comparaison comprise à 390 px : validée dans le navigateur en P4.
- FAQ dont la première phrase répond : validée en P2.
- CTA formulé comme action réelle : « Présenter mon flux de production » vers
  `/demarrer-un-projet`. Le formulaire guidé prend environ trois minutes selon
  la page de destination ; l'équipe vise une réponse personnelle le prochain
  jour ouvré sans garantir ce délai. Le clic ne promet ni rendez-vous, ni étude,
  ni devis automatique.

### Test sujet, action, résultat

Refait sur le guide intégré, puis validé par le contre-audit indépendant.

| Phrase abstraite à éviter    | Qui agit ?                | Action                                                              | Résultat                                        | Formulation attendue                                                                                   |
| ---------------------------- | ------------------------- | ------------------------------------------------------------------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| « Digitaliser l'atelier »    | L'opérateur               | Déclare le début, la quantité et le blocage d'une étape             | L'équipe connaît l'état de l'ordre              | « L'opérateur scanne l'ordre, déclare 18 pièces bonnes et signale une attente matière. »               |
| « Piloter en temps réel »    | Le responsable            | Consulte l'heure de la dernière déclaration et les blocages         | Il sait ce qui est connu et ce qui ne l'est pas | « Le responsable voit qu'aucune donnée n'a été déclarée depuis 10 h 15 et appelle le poste concerné. » |
| « Optimiser la performance » | L'équipe                  | Compare prévu, réalisé et cause d'écart selon une définition stable | Elle choisit une action                         | « L'équipe distingue un arrêt machine d'une attente de matière avant de décider. »                     |
| « Assurer la traçabilité »   | L'opérateur et le système | Rattachent un lot ou un résultat à l'ordre concerné                 | Une recherche ultérieure retrouve le lien       | « Le lot de matière utilisé et le contrôle déclaré restent attachés à l'ordre. »                       |
| « Interfacer l'ERP »         | Les deux systèmes         | Échangent l'ordre, son identifiant et le résultat attendu           | La donnée n'est pas ressaisie                   | « L'ERP envoie l'ordre ; l'application lui retourne les quantités validées sans recréer la commande. » |

### Test de l'ouverture

- [x] la question client apparaît avant le logiciel ;
- [x] suivi, planification et conduite d'une machine sont distingués ;
- [x] les sigles sont repoussés puis développés au premier usage ;
- [x] aucune métaphore ne remplace l'atelier réel ;
- [x] la première réponse cite honnêtement les cinq options.

### Scénario fictif canonique de la page

Le scénario est entièrement fictif. Il ne décrit ni un client, ni une usine, ni
un résultat obtenu par Hagnéré Code. Son seul rôle est de faire tester toutes les
options sur les mêmes faits, sans publier de données réelles.

- L'ordre `OF-FICTIF-2407`, créé dans l'ERP, porte sur un lot fixe de **100
  pièces à inspecter**, à l'unité « pièce », sur le poste fictif « Découpe ».
  Le scénario attribue un état à chacune ; il ne vise pas 100 pièces bonnes.
- À 8 h 10, l'opérateur démarre l'étape et la déclare à 8 h 10.
- À 10 h 05, il observe 40 pièces acceptées, 3 rebutées et 7 encore en cours ;
  il saisit ce point à 10 h 15. Les 50 autres pièces ne sont pas encore engagées.
- À 11 h 00, une matière manque ; le blocage est saisi à 11 h 03. La reprise a
  lieu à 11 h 40 et est saisie à 11 h 41.
- À 12 h 00, 60 pièces acceptées partent vers l'étape suivante ; les 40 non
  transférées se composent des 3 rebuts déjà connus et de 37 pièces encore à
  qualifier. Ce fractionnement est saisi à 12 h 04 et ne doit pas faire croire
  que l'ordre entier est terminé.
- À 15 h 20, le bilan fictif de fin de journée totalise 92 pièces acceptées, 5
  rebutées et 3 placées une première fois en reprise, soit 100 pièces
  inspectées. Il est saisi à 15 h 22 ; l'ordre reste ouvert puisque la reprise
  n'est pas terminée.

La rédaction P2 annonce le caractère fictif **avant** la première donnée et
reprend exactement ce scénario dans la chronologie, les cinq options, les cas
d'échec et les calculs. Toute autre quantité exige de reconstruire les totaux ;
aucune valeur ne devient une promesse de performance.

Les cinq options doivent aussi rejouer six mauvais cas fixes sur ce même ordre :
réseau indisponible au moment du fractionnement puis rétabli, double scan du
même événement, unité « kg » saisie par erreur puis corrigée, reprise terminée
sans compter les trois pièces comme une nouvelle production, événement
obligatoire absent et droits insuffisants ou excessifs. Ce sont des conditions
d'essai fictives, pas des incidents observés. Les calculs illustratifs ci-dessous
utilisent la chronologie normale, avant ces rejeux.

## 2. Cannibalisation

| Page existante                                  | Intention                                                            | Différence du nouveau guide                                                                                                                                      | Lien ou arbitrage                                                                        |
| ----------------------------------------------- | -------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `/guides/erp-ou-logiciel-sur-mesure`            | Choisir globalement entre progiciel et spécifique                    | Le nouveau guide applique la décision aux événements, postes et exceptions d'un atelier                                                                          | Lien pour le choix d'ensemble ; ne pas refaire tout l'ERP                                |
| `/guides/transformer-excel-en-application`      | Décider si un tableur doit devenir une application                   | Excel peut être présent mais n'est pas le déclencheur central                                                                                                    | Ne pas structurer le guide autour de la migration du fichier                             |
| `/guides/connecter-erp-crm-logiciel-metier`     | Décider quel système fait foi et quels échanges sont nécessaires     | Le guide précise les événements de production et leur saisie                                                                                                     | Renvoyer pour fiabilité technique des flux                                               |
| `/guides/calculer-roi-application-metier`       | Calculer un retour sur investissement                                | Le guide définit d'abord ce qui est mesurable dans l'atelier                                                                                                     | Ne pas promettre ni refaire un calcul financier complet                                  |
| `/guides/cahier-des-charges-application-metier` | Formaliser un projet                                                 | La journée reconstruite devient une entrée du cahier des charges                                                                                                 | Étape suivante                                                                           |
| `/guides/back-office-sur-mesure-pme`            | Choisir un écran interne pour faire avancer un dossier administratif | Le nouveau guide suit un ordre de fabrication, les quantités et les conditions de déclaration dans l'atelier ; il ajoute une frontière stricte avec les machines | Ne pas reprendre son parcours de commande entre commerce, administration et comptabilité |
| `/guides/no-code-ou-sur-mesure`                 | Comparer de façon générale no-code, logiciel existant et sur-mesure  | Le nouveau guide applique ces options au scénario de production et exclut toute commande de machine par un assemblage no-code                                    | Résumer l'option en une carte et renvoyer au comparatif général                          |
| `/guides/signes-besoin-logiciel-metier`         | Reconnaître si un problème justifie l'étude d'un logiciel métier     | Le besoin est ici déjà circonscrit au suivi d'un ordre ; la décision porte sur les événements et le niveau d'outil                                               | Ne pas refaire le diagnostic général des symptômes                                       |
| `/guides/automatiser-processus-metier`          | Décider si un processus stable mérite une automatisation             | Le nouveau guide peut rester sur des déclarations manuelles et mesure d'abord leur fiabilité                                                                     | Renvoyer si les étapes elles-mêmes ne sont pas encore décidées                           |
| `/services/outils-internes-sur-mesure`          | Vendre des applications de production                                | Le guide peut recommander le module ERP, une GPAO ou un tableau                                                                                                  | CTA seulement si le spécifique est justifié                                              |

**Évaluation du chevauchement :** aucune proportion chiffrée n'est revendiquée
sans grille et corpus reproductibles. La frontière qualitative est nette : les
guides voisins diagnostiquent un besoin, comparent des familles de solutions,
décrivent un dossier administratif ou traitent l'automatisation générale ; ce
guide décide comment connaître l'état d'un ordre de fabrication sans confondre
suivi, planification et conduite d'une machine. En P2, si plus de 60 % du plan
ou de la réponse reproduit finalement un voisin, la rédaction doit s'arrêter et
l'arbitrage fusion, redirection ou nouvel angle doit être refait.

**Justification d'une URL distincte :** le lecteur doit choisir le niveau
d'outil adapté à l'avancement réel de ses ordres, sans confondre suivi,
planification et automatisation industrielle.

## 3. Demande et vocabulaire du lecteur

Formulations candidates du lecteur, à ne pas présenter comme des volumes de
recherche observés :

- quel logiciel pour suivre la production d'une PME ;
- comment suivre les ordres de fabrication dans l'atelier ;
- quelle différence entre ERP, GPAO et MES ;
- comment connaître les quantités produites et les rebuts ;
- comment remplacer un tableau de suivi de production ;
- faut-il scanner les ordres ou connecter les machines ;
- comment suivre les retards et les temps.

Vocabulaire naturel : commande, ordre de fabrication (OF), étape, poste,
quantité, lot, pièce bonne, rebut, reprise, blocage, panne, matière, contrôle,
atelier. Définir GPAO comme gestion de production assistée par ordinateur et MES
comme système de suivi/exécution des opérations de production, sans suggérer
qu'une PME a besoin des deux.

Provenance : ces formulations viennent de l'intention éditoriale, des titres et
du vocabulaire des pages concurrentes accessibles publiquement le 2026-07-23.
Ni Search Console, ni Keyword Planner, ni export de résultats de recherche n'ont
été consultés. L'observation est qualitative ; elle ne prouve ni volume, ni
position, ni demande commerciale. Aucun benchmark de retour sur investissement
ou taux d'équipement n'est revendiqué.

## 4. Carte concurrentielle

| Page                                                                                                                                           | Réponse et angle                                                | Preuves/artefacts                              | Bon point                                                        | Manque décisionnel                                         | Conflit d'intérêt                                                                               |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- | ---------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| [France Num — GPAO](https://www.francenum.gouv.fr/guides-et-conseils/production-et-fabrication/gpao-la-solution-numerique-pour-mieux-gerer-la) | Explique GPAO, ERP et MES et recommande de partir du besoin     | Contenu d'expert hébergé sur un portail public | Bonne vue d'ensemble, mise en garde contre le surdimensionnement | Peu de reconstruction précise des événements d'une journée | Rédigé par SetInUp, prestataire et solution citée dans l'article ; intérêt commercial explicite |
| [Cegid — gestion de production](https://www.cegid.com/fr/solutions/gestion-de-production/)                                                     | Suite de gestion de production                                  | Fonctions produit                              | Montre le périmètre large d'une solution                         | Le produit précède le diagnostic minimal                   | Éditeur                                                                                         |
| [Horoquartz — suivi d'atelier](https://www.horoquartz.com/suivi-des-activites/logiciel-suivi-de-production-atelier/)                           | Suivi des activités et temps d'atelier                          | Fonctionnalités et cas d'usage                 | Rend visibles les déclarations terrain                           | Peu de critère pour rester sur un outil plus simple        | Éditeur                                                                                         |
| [Sage — gestion de production](https://www.sage.com/fr-fr/produits/gestion-production/)                                                        | GPAO intégrée à la gestion                                      | Offre produit                                  | Illustre l'option module/suite standard                          | Ne tranche pas un besoin local et restreint                | Éditeur                                                                                         |
| [ISA — ISA-95](https://www.isa.org/standards-and-publications/isa-standards/isa-95-standard)                                                   | Cadre entre fonctions d'entreprise et opérations de fabrication | Standard et parties officielles                | Clarifie les niveaux et échanges                                 | Trop technique comme point de départ PME                   | Organisme de normalisation                                                                      |

**Angle mort commun :** les pages présentent souvent ordres, temps, qualité,
stocks, traçabilité, planification et indicateurs dans une même liste. Le
dirigeant ne sait pas quels événements minimaux collecter, qui les déclare et
ce qui se passe pour un lot fractionné, une reprise ou une saisie tardive.

**Valeur originale que le guide apportera :** faire vivre le même ordre fictif
à cinq réponses — attendre en corrigeant le travail, configurer l'existant,
adopter un produit standard, assembler du no-code ou développer un ajout sur
mesure — puis comparer couverture, effort de déclaration, coût, continuité,
droits, sortie et risques dans les mêmes conditions. La frontière entre suivi
informatique et conduite des machines reste visible dans chaque option.

## 5. Fiche de preuves

| Affirmation utilisable                                                                                                                                                                                                                                                                                                                              | Source, URL et passage utile                                                                                                                                                                                                                                                                         | Nature et intérêt éventuel                                                                                              | Périmètre                                                                                                                    | Date/consultation   | Confiance                            | Emplacement visible                        | Conséquence lecteur                                                                                                                                                         | Fraîcheur                                                          |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ------------------- | ------------------------------------ | ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| Une GPAO peut couvrir planification, ordres, stocks, traçabilité, avancement et coûts ; ERP, GPAO et MES n'ont pas le même périmètre                                                                                                                                                                                                                | [France Num — La GPAO](https://www.francenum.gouv.fr/guides-et-conseils/production-et-fabrication/gpao-la-solution-numerique-pour-mieux-gerer-la), définitions et fonctionnalités                                                                                                                    | Contenu d'expert hébergé sur un portail public, rédigé par SetInUp, prestataire et solution citée dans l'article        | Vue d'ensemble PME ; ni norme, ni prescription universelle, ni preuve indépendante des bénéfices annoncés                    | Consulté 2026-07-23 | Moyenne                              | Section définition des niveaux             | Identifier si le besoin dépasse un simple suivi, sans reprendre la promotion du produit                                                                                     | Publié 2025-09-30 ; mis à jour 2025-10-06                          |
| Un projet doit préciser ses problèmes, associer les fonctions concernées, éviter le surdimensionnement et commencer petit                                                                                                                                                                                                                           | [France Num — La GPAO](https://www.francenum.gouv.fr/guides-et-conseils/production-et-fabrication/gpao-la-solution-numerique-pour-mieux-gerer-la), étapes de déploiement                                                                                                                             | Même contenu intéressé de SetInUp ; questions méthodologiques utiles mais non neutres                                   | Conseil de déploiement PME, pas résultat garanti                                                                             | Consulté 2026-07-23 | Moyenne                              | Section pilote                             | Choisir un flux et un poste, puis vérifier avec les opérateurs                                                                                                              | Mis à jour 2025-10-06                                              |
| ISA-95 définit un cadre d'interface entre activités d'entreprise et contrôle de fabrication ; ses parties couvrent activités et échanges d'information                                                                                                                                                                                              | [ISA — ISA-95](https://www.isa.org/standards-and-publications/isa-standards/isa-95-standard)                                                                                                                                                                                                         | Standard officiel, présentation de l'organisme                                                                          | Architecture industrielle ; ne pas imposer l'implémentation complète                                                         | Consulté 2026-07-23 | Haute sur le périmètre               | Encadré ERP/GPAO/MES                       | Séparer l'ordre provenant de l'entreprise et les événements d'atelier                                                                                                       | Partie 1 mise à jour 2025                                          |
| Il faut partir des besoins concrets et tester avec les utilisateurs                                                                                                                                                                                                                                                                                 | [DesignGouv — Bien concevoir un service numérique](https://design.numerique.gouv.fr/bien-concevoir/)                                                                                                                                                                                                 | Référentiel public de conception                                                                                        | Discipline de conception, pas obligation privée                                                                              | Consulté 2026-07-23 | Haute sur la méthode                 | Section journée d'atelier et pilote        | Tester au poste réel avec les opérateurs                                                                                                                                    | À revoir annuellement                                              |
| L'introduction d'un outil transforme le travail ; simuler le travail futur aide à anticiper les ajustements                                                                                                                                                                                                                                         | [Anact — Boîte à outils QVCT et numérique](https://www.anact.fr/sites/default/files/2024-10/boite-a-outils-qvct-numerique.pdf)                                                                                                                                                                       | Boîte à outils d'un établissement public                                                                                | Conduite du changement ; exemples variés                                                                                     | Consulté 2026-07-23 | Haute sur le principe                | Section conditions de déclaration          | Vérifier gestes, interruptions, équipement et responsabilités                                                                                                               | 2024                                                               |
| Les habilitations doivent limiter les données et actions à la fonction, avec retrait et revue                                                                                                                                                                                                                                                       | [CNIL — Gérer les habilitations](https://www.cnil.fr/fr/securite-gerer-les-habilitations), précautions élémentaires                                                                                                                                                                                  | Recommandation de sécurité d'une autorité publique                                                                      | Données personnelles présentes dans l'outil                                                                                  | Consulté 2026-07-23 | Haute                                | Section rôles                              | Opérateur, qualité, responsable et administration n'ont pas tous les mêmes droits                                                                                           | Publié 2024-03-13                                                  |
| Les données collectées doivent être adéquates, pertinentes et nécessaires ; leur durée doit être justifiée                                                                                                                                                                                                                                          | [CNIL — Minimiser les données collectées](https://www.cnil.fr/fr/minimiser-les-donnees-collectees)                                                                                                                                                                                                   | Principe RGPD expliqué par la CNIL                                                                                      | Données personnelles, notamment si les opérateurs sont identifiés                                                            | Consulté 2026-07-23 | Haute                                | Section événements minimaux                | Ne pas collecter une identité ou une précision horaire « au cas où »                                                                                                        | Publié 2020-01-27                                                  |
| Un dispositif qui mesure l'activité des salariés doit avoir une finalité précise, être nécessaire et proportionné, être porté à leur connaissance et faire l'objet d'une consultation des instances représentatives selon les règles applicables ; une surveillance permanente est en général excessive et toute exception s'examine au cas par cas | [CNIL — Contrôle de l'activité des personnes employées](https://www.cnil.fr/fr/controle-de-lactivite-des-personnes-employees), trois conditions cumulatives et contrôle de proportionnalité                                                                                                          | Recommandations actuelles d'une autorité publique                                                                       | Données et indicateurs rattachables aux salariés ; information générale, pas avis juridique du cas                           | Consulté 2026-07-23 | Haute                                | Encadré avant les mesures                  | Préférer l'agrégation par ordre, poste ou équipe ; définir finalité, accès, durée, information et consultation applicable avant toute mesure individuelle                   | Publié 2026-07-09                                                  |
| Les opérations utiles à la sécurité peuvent être journalisées ; la CNIL donne un repère général de conservation de six mois à un an, avec exceptions à justifier                                                                                                                                                                                    | [CNIL — Tracer les opérations](https://www.cnil.fr/fr/securite-tracer-les-operations)                                                                                                                                                                                                                | Recommandation de sécurité d'une autorité publique                                                                      | Traces applicatives contenant des données personnelles ; la durée dépend des obligations et finalités                        | Consulté 2026-07-23 | Haute                                | Section corrections et historique          | Distinguer le journal de sécurité du journal métier et ne pas détourner les traces vers un contrôle caché des horaires                                                      | Publié 2024-03-14                                                  |
| Les systèmes industriels ont des contraintes et risques propres ; les mesures de l'informatique de gestion ne s'y transposent pas automatiquement                                                                                                                                                                                                   | [ANSSI — La cybersécurité des systèmes industriels, méthode de classification](https://messervices.cyber.gouv.fr/guides/la-cybersecurite-des-systemes-industriels) et [mesures détaillées](https://messervices.cyber.gouv.fr/documents-guides/Guide_Systemes_industriels__Mesures_detaillees_v2.pdf) | Guides officiels de l'ANSSI ; recommandations à adapter, sans caractère normatif général hors réglementation applicable | Systèmes industriels qui conduisent ou surveillent un procédé physique ; ne crée pas une obligation identique pour toute PME | Consulté 2026-07-23 | Haute sur la frontière et la méthode | Encadré informatique de gestion / machines | Ne jamais déduire qu'une application web peut commander une machine ; cartographier, analyser les risques et protéger toute interconnexion avec les responsables compétents | Page de présentation publiée 2025-04-11 ; mesures v2 du 2025-11-27 |

### Contradictions et données à ne pas publier

- Ne pas reprendre une durée moyenne de retour sur investissement citée par une
  page secondaire sans corpus primaire, périmètre et méthode. Ne pas reprendre
  non plus le taux d'équipement, les gains ou les affirmations promotionnelles
  de l'article France Num rédigé par SetInUp.
- Ne pas dire qu'une application de suivi « optimise » automatiquement
  l'ordonnancement, les machines ou les rendements.
- Ne pas imposer ISA-95 comme obligation à toute PME ; c'est un cadre utile pour
  raisonner sur les frontières.
- Ne pas présenter chaque déclaration comme « temps réel » : afficher l'heure
  de l'événement et l'heure de saisie, surtout si elles diffèrent.
- Ne pas utiliser l'identité et les horaires de déclaration pour classer les
  opérateurs ou contrôler leur présence sans finalité distincte, nécessité,
  proportionnalité, information, durée, accès et consultation applicables.
- Ne pas promettre zéro papier, zéro erreur, ou une traçabilité sectorielle
  conforme sans étudier le secteur.
- Ne pas présenter le développement sur mesure comme le seul moyen de gérer des
  étapes propres au métier ; l'attente active, l'existant, les produits
  standards et le no-code doivent être testés sous les mêmes conditions.
- Ne pas présenter un assemblage no-code ou une application web comme apte à
  piloter, régler ou sécuriser une machine. Une lecture de données machine ou
  une commande sort du simple suivi et ouvre un chantier industriel distinct.

### Frontière entre l'informatique de gestion et les machines

La future page doit poser une limite compréhensible avant toute évocation de
connexion :

- **Dans le guide :** créer l'ordre, afficher son état, saisir une quantité,
  signaler un blocage, corriger une déclaration et retourner un résultat au
  système de gestion.
- **Hors du guide :** démarrer ou arrêter une machine, modifier une consigne,
  programmer un automate, neutraliser une sécurité, garantir la sûreté d'un
  procédé ou annoncer une conformité industrielle.

En vocabulaire technique seulement après cette explication, l'informatique de
gestion est souvent appelée **IT** et la technologie qui conduit ou surveille le
procédé physique **OT**. Si un projet lit une machine ou lui envoie une
instruction, il faut au minimum cartographier les équipements et flux, analyser
les risques, identifier les responsables de production, d'automatisme, de
sûreté et de cybersécurité, valider les conditions constructeur, protéger
l'interconnexion, tester un retour au fonctionnement sûr et prévoir le mode
dégradé. Ce dossier ne décide ni l'architecture ni les mesures adaptées au site.

### Calculs reproductibles

Le guide proposera des mesures opérationnelles, sans benchmark. Avant tout
calcul, fixer une cohorte, c'est-à-dire un groupe d'ordres comparables, puis une
période, une unité, les événements éligibles, la règle de correction et les
exclusions. Si un dénominateur vaut zéro, afficher « non calculable », jamais
0 %.

- **Retard d'une déclaration** =
  `heure de saisie − heure de l'événement`. Le seuil acceptable est choisi avant
  l'observation et peut différer par type d'événement.
- **Taux de déclarations tardives (%)** =
  `événements éligibles saisis après leur seuil ÷ événements éligibles
effectivement saisis × 100`. Les événements attendus mais absents relèvent
  d'un indicateur séparé ; ils ne doivent pas disparaître du dénominateur par
  convention implicite.
- **Taux de déclarations reçues (%)** =
  `événements obligatoires reçus ÷ événements obligatoires arrivés à échéance
dans la même cohorte × 100`.
- **Fraîcheur à la consultation** =
  `heure de consultation − heure du dernier événement confirmé`, en affichant
  aussi l'heure de saisie pour rendre un retard visible.
- **Part placée en reprise (%)** =
  `unités distinctes placées une première fois en reprise ÷ unités inspectées
de la même cohorte × 100`. Si une même unité ne peut pas être reconnue ou si
  les unités changent, publier le nombre d'événements de reprise plutôt qu'un
  taux trompeur.
- **Taux de rebut (%)** =
  `unités dont la décision finale est rebut ÷ unités inspectées de la même
cohorte × 100`. Une unité en reprise n'est pas encore un rebut.
- **Part d'ordres à état inconnu (%)** =
  `ordres ouverts sans événement obligatoire reçu avant l'heure de coupure ÷
ordres ouverts de la même cohorte × 100`.
- **Durée calendaire d'une étape** =
  `heure de fin − heure de début`. Le temps réellement travaillé exige une
  règle séparée pour les pauses et blocages ; il ne se déduit pas de la durée
  calendaire.

Pour le scénario fictif, les six événements saisis ont des retards de 0, 10, 3,
1, 4 et 2 minutes. Avec un seuil illustratif fixé à 5 minutes avant
l'observation, un seul est tardif : `1 ÷ 6 × 100 = 16,7 %`. À 15 h 20, les 100
unités inspectées donnent, à titre illustratif, `3 ÷ 100 × 100 = 3 %` placées
une première fois en reprise et `5 ÷ 100 × 100 = 5 %` rebutées. Ces résultats
décrivent uniquement l'exemple inventé ; ils ne sont ni une référence sectorielle
ni un gain attendu.

Pour les durées et retards, publier l'effectif, la médiane et une répartition
quand quelques cas extrêmes déforment la moyenne. Contrôle inverse : quantité
acceptée + rebut final + quantité encore en reprise + en-cours + écart documenté
doit reconstruire la quantité engagée selon les règles du métier. Un lot
fractionné et un changement d'unité exigent une règle explicite. Aucun gain
financier n'est déduit sans coût réellement évité ou capacité effectivement
réaffectée.

### Comparer les cinq réponses dans les mêmes conditions

Chaque réponse doit recevoir `OF-FICTIF-2407`, les mêmes rôles, les mêmes
événements, les mêmes erreurs, le même réseau dégradé et une même durée de coût
à définir selon les contrats étudiés. Les cinq cartes reprennent exactement :
couverture démontrée ; effort au poste ; qualité et fraîcheur ; coût complet ;
droits, données de salariés et historique ; continuité et retour arrière ;
personne responsable ; export, sortie et condition d'arrêt.

1. **Attendre en corrigeant le travail :** utile si les événements ou
   responsabilités ne sont pas encore décidés. Le responsable fixe une date ou
   un événement de réexamen ; attendre ne signifie pas ignorer les erreurs.
2. **Configurer l'existant :** utile si le tableur, l'ERP ou son module sait déjà
   recevoir les événements. Tester droits, doublons, corrections, sauvegardes,
   administration et export, pas seulement l'écran.
3. **Adopter un produit standard :** utile si une GPAO ou un MES couvre les
   unités, lots, reprises et connexions sans contournement permanent. Comparer
   licences, paramétrage, migration, formation, support, sauvegarde et sortie.
4. **Assembler un outil no-code :** outil composé de blocs visuels sans
   développement classique, adapté seulement à des règles lisibles, des volumes
   maîtrisés et une personne capable de l'administrer. Tester abonnements,
   droits, connexions, doublons, sauvegarde et export. Il ne commande jamais une
   machine dans le périmètre de ce guide.
5. **Développer un ajout ciblé sur mesure :** pertinent si les règles stables et
   propres au métier résistent aux quatre réponses précédentes. Le comparer sur
   la même grille de coût complet, de droits, de continuité et de réversibilité,
   sans lui accorder un périmètre plus favorable.

## 6. Empreinte éditoriale à ne pas reproduire

| Guide                                   | Ouverture                  | Progression                 | Dispositif                 | Exemple            | CTA              | Conclusion             |
| --------------------------------------- | -------------------------- | --------------------------- | -------------------------- | ------------------ | ---------------- | ---------------------- |
| `erp-ou-logiciel-sur-mesure`            | Choix de solution          | Comparatif global           | Matrice acheter/construire | Entreprise entière | Après arbitrage  | Choisir par contrainte |
| `transformer-excel-en-application`      | Fichier fragile            | Alternatives puis migration | Comparatif                 | Tableur            | Après diagnostic | Migrer progressivement |
| `connecter-erp-crm-logiciel-metier`     | Données divergentes        | Source puis flux            | Contrat de données         | Client/commande    | Après tests      | Prévoir les reprises   |
| `calculer-roi-application-metier`       | Investissement à justifier | Coûts et bénéfices          | Modèle de calcul           | Projet métier      | Après calcul     | Décider par hypothèses |
| `cahier-des-charges-application-metier` | Projet à formaliser        | Cadrage complet             | Trame                      | Application        | Fin              | Consulter              |

Choix du nouveau guide :

```text
Tension : trois services donnent trois états différents de la même commande.
Ouverture : une question client à laquelle l'entreprise ne sait pas répondre.
Progression : reconstruire une journée par événements, puis choisir le niveau
  d'outil et tester les exceptions.
Artefact signature : le journal minimal d'un ordre sur une journée.
Rythme : gestes d'atelier, exemples courts, sigles définis après le problème.
CTA : après le pilote autonome sur un ordre et un poste ; le clic ouvre le vrai
  formulaire, sans promettre un diagnostic automatique.
Conclusion : choisir le système le plus simple qui produit une information
  assez fiable pour la décision visée.
Différences :
  1. Le fil narratif est une journée d'atelier, pas une migration de logiciel.
  2. Suivi, planification et conduite des machines sont séparés.
  3. Les événements minimaux précèdent les tableaux de bord.
  4. Les lots fractionnés, reprises et saisies tardives structurent les tests.
```

## 7. Plan annoté

| Section provisoire                                                          | Question résolue                                | Preuve ou exemple                                                                | Conséquence/décision                                                                | Format                              |
| --------------------------------------------------------------------------- | ----------------------------------------------- | -------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------- |
| Trois réponses à « où en est la commande ? » : quel outil manque vraiment ? | Le problème relève-t-il du suivi ?              | Atelier, commerce et administration en désaccord                                 | Réponse immédiate                                                                   | Scène                               |
| Suivre n'est ni planifier ni conduire une machine                           | Quel périmètre traiter ?                        | Trois décisions distinctes                                                       | Éviter un projet trop large                                                         | Trois cartes courtes                |
| Reconstituez la journée de `OF-FICTIF-2407`                                 | Que faut-il enregistrer ?                       | ordre libéré, étape commencée, quantité, blocage, reprise, bilan de journée      | Produire le journal minimal                                                         | Cartes chronologiques verticales    |
| Pour chaque événement, nommez quoi, quand, quel rôle et pourquoi            | La donnée sera-t-elle fiable ?                  | poste, déclaration tardive, motif et correction                                  | Définir responsabilité et unité sans collecter une identité inutile                 | Carte d'événement, détail repliable |
| Le poste de déclaration doit respecter le travail réel                      | Comment éviter la double saisie ?               | gants, interruptions, terminal partagé, réseau                                   | Choisir interaction et équipement                                                   | Trois scènes                        |
| Attendre, configurer, acheter, assembler ou développer                      | Quel niveau d'outil ?                           | Le même ordre, les mêmes rôles, coûts, droits, incidents et conditions de sortie | Décision proportionnée                                                              | Cinq cartes au même gabarit         |
| Décidez où l'ordre naît et où le résultat revient                           | Comment éviter les doubles vérités ?            | ERP crée l'ordre, application retourne le résultat                               | Définir frontières                                                                  | Schéma textuel + lien intégration   |
| L'application suit l'atelier, elle ne conduit pas la machine                | Où s'arrête le guide ?                          | Lecture d'un événement contre envoi d'une consigne physique                      | Ouvrir un chantier industriel distinct si une machine est connectée                 | Encadré IT/OT en langage courant    |
| Faites passer les mauvais cas de l'atelier                                  | L'outil résiste-t-il ?                          | lot fractionné, rebut, reprise, panne, réseau, doublon, unité erronée            | Critères d'acceptation                                                              | Checklist                           |
| Mesurer un ordre ne justifie pas de surveiller les salariés                 | Quelles données et quels accès sont légitimes ? | Identité, heure, poste, agrégation, durée et information                         | Encadrer finalité, proportion, accès, durée, information et consultation applicable | Encadré CNIL                        |
| Mesurez la fraîcheur et les inconnues avant le retour sur investissement    | Comment vérifier l'utilité ?                    | état inconnu, saisie tardive, délai d'étape                                      | Base mesurable                                                                      | Formules                            |
| Pilotez un flux et un poste                                                 | Quel premier lot ?                              | un type d'ordre et un point de déclaration                                       | Limiter le risque                                                                   | Plan de pilote                      |
| Bon fit et mauvais fit d'un développement spécifique                        | Faut-il contacter Hagnéré Code ?                | ajout ciblé versus GPAO complète                                                 | Conversion honnête                                                                  | Deux listes + CTA                   |

### Règle de présentation mobile pour P2

La page publique ne doit pas transformer le journal en tableau fixe de dix
colonnes. À 320 et 390 px, chaque événement devient une carte verticale :

1. heure de l'événement et état ;
2. quantité et unité ;
3. rôle ou poste responsable, sans nom si le nom n'est pas nécessaire ;
4. heure de saisie et retard éventuel ;
5. cause, correction et système destinataire dans un détail repliable ou un
   second bloc.

Les cinq options utilisent aussi des cartes empilées avec les mêmes cinq
rubriques de comparaison. Une version copiable peut être proposée dans la page,
mais aucune décision ne doit dépendre d'une colonne masquée ou d'un défilement
horizontal. Le rendu réel a été contrôlé en P4 à 320, 390, 767, 1 024 et
1 440 px.

## 8. Ressource et conversion

```text
Une ressource est-elle naturellement nécessaire ? non, aucun fichier séparé.
Problème : décrire l'avancement avec un minimum d'événements fiables.
Résultat autonome : journal d'un ordre sur une journée et liste des inconnues.
Format principal : cartes verticales lisibles à 320 px ; bloc copiable facultatif
  sous les cartes, sans tableau fixe de dix colonnes.
Rubriques visibles : heure de l'événement, état, quantité/unité et rôle/poste.
Détails associés : heure de saisie, cause, correction et système destinataire.
L'identité d'une personne n'est ajoutée que si une finalité documentée l'exige.
Exemple rempli : `OF-FICTIF-2407`, annoncé comme fictif avant toute donnée et
  repris sans modifier ses quantités.
Conclusion « ne pas investir » : oui, si le tableau ou le module ERP fournit
  l'information assez fraîche au volume réel.
Sources, hypothèses et limites : visibles.
Données saisies : aucune donnée envoyée.
Processus : contenu statique présenté en cartes ; aucun calcul côté lecteur.
QA : contrôlé en P4 à cinq largeurs, sans colonne masquée ni débordement.
Limites : aucune validation sectorielle de traçabilité, de droit du travail, de
  cybersécurité industrielle ou de sûreté machine.
Maintenance : revue annuelle des sources et des versions citées.
Test : sans objet en P1.
Bon fit : étapes et exceptions stables propres au métier, besoin de saisie
  adaptée au poste, ajout ciblé relié à un ERP/GPAO, données exploitables.
Mauvais fit : besoin réel d'un ERP/GPAO standard complet, données de base
  incohérentes, processus encore instable, surveillance individuelle recherchée
  sans cadre, ou lecture/commande de machine exigeant une équipe industrielle.
Action non commerciale : reconstituer un ordre sur une journée.
CTA : « Présenter mon flux de production » vers /demarrer-un-projet. Le clic
  ouvre un formulaire guidé d'environ trois minutes ; une personne relit le
  contexte et répond de façon argumentée sans délai garanti. Aucun diagnostic,
  rendez-vous, périmètre, devis ou développement n'est produit automatiquement.
```

## 9. Rapports de sortie des quatre passes

### Contre-audit et reprise de P1

Le premier snapshot a été refusé sans P0 : **8 P1 et 4 P2**. La présente reprise
ne masque pas ce verdict ; elle enregistre les corrections avant le nouveau
manifeste.

P1 matériels corrigés :

1. statu quo actif et no-code ajoutés ; les cinq options utilisent désormais la
   même grille, le même scénario, la même durée de coût et les mêmes incidents ;
2. mesure de l'activité des salariés encadrée par la source CNIL du
   2026-07-09 : finalité, nécessité, proportionnalité, information, accès, durée
   et consultation des représentants selon les règles applicables ;
3. suivi informatique séparé de la conduite des machines, avec source ANSSI,
   rôles industriels, analyse de risque, interconnexion et retour sûr ;
4. scénario `OF-FICTIF-2407` fixé avant la rédaction, déclaré fictif, réconcilié
   et réutilisable dans les options, exceptions et calculs ;
5. frontières ajoutées avec back-office, no-code, signes d'un besoin logiciel et
   automatisation ; pourcentage de chevauchement non démontré retiré ;
6. tableau public de dix colonnes remplacé dans le contrat par des cartes
   verticales et une règle explicite pour 320 et 390 px ;
7. provenance de la demande explicitée et article France Num qualifié comme
   contenu intéressé de SetInUp, sans reprendre ses bénéfices, son taux
   d'équipement ou son retour sur investissement ;
8. retards, événements manquants, reprise, rebut, état inconnu et durées définis
   par cohorte, unité, fenêtre, dénominateur et cas `N = 0`, avec médiane et
   contrôle inverse.

P2 concrets corrigés :

1. CTA aligné sur le vrai formulaire et sur ce qui se passe après le clic ;
2. en-tête « source primaire » remplacé, car toutes les ressources ne sont pas
   des sources primaires ou neutres ;
3. cases du test d'ouverture remises à l'état « à vérifier en P2 » au lieu de
   prétendre contrôler une page non écrite ;
4. sigles et jargon traduits en langage de dirigeant ; les termes techniques ne
   viennent qu'après leur définition.

### Rapport P1 — Recherche

```text
PASSE 1 TERMINÉE — PORTE REVALIDÉE APRÈS CONTRE-AUDIT
Slug : application-suivi-production-pme
Lecteur et phrase réelle : dirigeant/responsable production ; « Personne ne sait
  exactement où en est la commande : quelle application faut-il ? »
Décision : attendre en corrigeant, configurer l'existant, adopter un produit
  standard, assembler du no-code ou développer un ajout ciblé sur mesure.
Angle et forme dominante : reconstruire `OF-FICTIF-2407` par cartes
  d'événements, puis appliquer cinq options dans les mêmes conditions.
Pages proches et différence : ERP/sur-mesure, Excel, intégration, retour sur
  investissement, cahier des charges, back-office, no-code, diagnostic logiciel
  et automatisation ;
  ici la décision porte sur la déclaration d'avancement d'un ordre.
Sources décisives : France Num GPAO qualifié comme contenu intéressé, ISA-95,
  DesignGouv, Anact, CNIL et ANSSI systèmes industriels.
Incertitudes exclues : retour sur investissement moyen, optimisation
  automatique, conformité sectorielle, surveillance licite par défaut, sécurité
  machine et temps réel non défini.
Action autonome et CTA : journal minimal d'un ordre ; « Présenter mon flux de
  production » ouvre le formulaire réel sans livrable automatique.
Contre-audit : 0 P0, 8 P1 corrigés, 4 P2 corrigés.
Plan : 13 sections, frontières, cinq options équitables et mauvais cas.
Snapshot : docs/research/manifests/application-suivi-production-pme-p1.sha256
```

### Rapport P2 — Rédaction et intégration

```text
PASSE 2 TERMINÉE
Fichiers créés ou modifiés : page et image sociale dédiées ; entrée du registre
  maintenue en attente ; lien entrant depuis le guide des signes d'un besoin de
  logiciel métier ; garde-fous de langage humain ; présent dossier
Ouverture et réponse : un client reçoit trois états contradictoires ; les 127
  mots de l'introduction définissent le suivi, le distinguent de la
  planification et de la conduite des machines, puis annoncent cinq réponses
Forme propre au sujet : OF-FICTIF-2407 traverse six événements sur une journée,
  avec heure du fait, heure de saisie, quantité, unité, rôle et information
  encore inconnue ; les cartes remplacent un tableau large
Comparaison : attente active, outil possédé, produit standard, assemblage
  no-code et ajout ciblé reçoivent la même couverture, le même effort au poste,
  les mêmes règles de qualité, coûts, droits, continuité et sortie
Exemples ou calculs : scénario déclaré entièrement fictif avant la première
  valeur ; retards 0, 10, 3, 1, 4 et 2 minutes ; calcul illustratif 16,7 % ;
  reprise 3 % et rebut 5 % sur 100 unités, avec médiane, cohorte, unité,
  dénominateur nul et contrôle inverse
Sources visibles : France Num qualifié comme contenu expert intéressé ; ISA-95
  près de la frontière entre systèmes ; DesignGouv et Anact près du travail au
  poste ; CNIL près des données des salariés ; ANSSI près de la frontière IT/OT
Action autonome, bon fit et mauvais fit : reconstruire un ordre sur une journée,
  entourer les désaccords, faire passer les six mauvais cas — coupure, double
  scan, unité erronée, reprise, événement absent et droits — ; un produit
  standard ou l'attente peuvent gagner
CTA et destination : un seul bloc tardif « Présenter mon flux de production »
  vers /demarrer-un-projet ; téléphone masqué, relecture humaine et absence de
  délai, diagnostic, périmètre, rendez-vous ou devis garantis
Contrôles rapides : 61/61 tests ciblés ; Prettier, ESLint, TypeScript et
  diff-check conformes
Snapshot : docs/research/manifests/application-suivi-production-pme-p2.sha256
```

### Rapport P3 — Contre-audit indépendant

```text
P3 VALIDÉE APRÈS REPRISE
Relecteur : `/root/p3_production_final`
Snapshot audité : `docs/research/manifests/application-suivi-production-pme-p2.sha256`
Historique : première lecture refusée avec P0 = 0 ; P1 = 1 ; P2 = 3, puis reprise par l'éditeur unique
Verdict final : P0 = 0 ; P1 = 0 ; P2 = 0
Points revalidés : trois équations du lot fixe de 100 pièces ; six mauvais cas ; mesures, dénominateurs, zéro et médiane ; cinq options équitables ; frontières IT/OT et données des salariés ; liens ANSSI dont PDF direct ; CTA et schémas
Corrections de langue : six mauvais cas dans toute la page ; idempotence traduite ; cohorte définie ; reliquats du dossier retirés
Temps de lecture P3 : 26 minutes pour 5 163 mots visibles au comptage conservateur
Contrôles : manifeste 6/6 exact ; test production 1/1 ; données structurées 4/4 ; ESLint, TypeScript, Prettier et diff-check conformes
État : porte P3 validée ; P4 autorisée
```

### Rapport P4 — Plume humaine et contrôle final

```text
PASSE 4 TERMINÉE
Passages humanisés : trois réponses contradictoires placées dès l'ouverture ; suivi, planification et conduite de machine séparés ; sigles repoussés ; scénario OF-FICTIF-2407 maintenu sur toute la décision
Retour P3 effectué : oui ; reprise après un premier refus puis validation finale à P0 = 0, P1 = 0 et P2 = 0
Lecture et artefact : 5 046 mots comptés dans l'artefact final, soit 25 minutes avec la convention de 200 mots par minute
Scorecard justifiée : 20/20 ; détail dans la table ci-dessous
Validation humaine réelle : non
Test réalisé par une personne réelle : non
Autorisation éditoriale : Décision de publication : autorisée explicitement par le commanditaire
Commandes et résultats : check:seo, ESLint, TypeScript, batterie Vitest, build Next.js, postbuild et git diff --check conformes au gel final du lot
Largeurs et états contrôlés : 320, 390, 767, 1 024 et 1 440 px ; aucun débordement ; canonical exact ; un H1 ; Article et BreadcrumbList ; un CTA sans téléphone
Snapshot final : docs/research/manifests/application-suivi-production-pme-p4.sha256
Statut maximal : publiable — validation éditoriale déléguée
Verdict : porte P4 validée
```

## 10. Revue finale

La P4 confirme l'intention, les frontières, les sources, les calculs et le
rendu. Le guide ne valide ni une architecture industrielle, ni la conformité
d'un dispositif de mesure des salariés, ni une règle sectorielle.

### Scorecard P4

| Axe         | Note 0-2 | Preuve dans la page                                                                                    | Correction éventuelle |
| ----------- | -------: | ------------------------------------------------------------------------------------------------------ | --------------------- |
| Intention   |        2 | La question « où en est cette commande ? » précède tout choix de logiciel                              | Aucune                |
| Décision    |        2 | Attendre activement, configurer, acheter, assembler en no-code ou développer restent possibles         | Aucune                |
| Pédagogie   |        2 | Un ordre fictif de 100 pièces traverse la journée, les écarts et les reprises                          | Aucune                |
| Profondeur  |        2 | Événements, unités, doublons, reprises, droits, IT/OT, données salariés et dénominateurs sont couverts | Aucune                |
| Preuve      |        2 | ISA-95, DesignGouv, Anact, CNIL, ANSSI et France Num sont contextualisés                               | Aucune                |
| Comparaison |        2 | Les cinq options rejouent le même ordre et les six mêmes mauvais cas                                   | Aucune                |
| Originalité |        2 | Le guide reconstruit une journée d'atelier au lieu d'aligner des fonctions de GPAO                     | Aucune                |
| Style       |        2 | Vocabulaire d'atelier, sigles développés et concepts techniques traduits au point utile                | Aucune                |
| Conversion  |        2 | CTA unique et tardif ; l'attente ou un produit standard peuvent gagner                                 | Aucune                |
| SEO/produit |        2 | Intention distincte, metadata, maillage, OG, index/follow et cinq largeurs contrôlés                   | Aucune                |

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

### Vérifications historiques à la fermeture de P1

- [x] problème expliqué avec des mots d'atelier ;
- [x] suivi, planification et conduite des machines séparés ;
- [x] frontières de cannibalisation explicites, sans pourcentage inventé ;
- [x] concurrence et angle mort documentés ;
- [x] sources officielles revérifiées et source commerciale contextualisée ;
- [x] cinq options comparées dans les mêmes conditions ;
- [x] scénario fictif canonique cohérent et annoncé comme tel ;
- [x] mesure des salariés encadrée sans conclusion juridique automatique ;
- [x] frontière IT/OT et sécurité industrielle visibles ;
- [x] format mobile contractuel sans tableau fixe de dix colonnes ;
- [x] aucun retour sur investissement ou gain inventé ;
- [x] événements, exceptions et mesures reproductibles ;
- [x] action autonome, bon et mauvais fit ;
- [x] CTA conforme à la destination et sans livrable automatique ;
- [x] aucun téléchargement absent promis ;
- [x] aucune publication ou indexation déclarée.
