# Dossier de recherche P1 — Combien de temps faut-il pour développer un SaaS ?

## A. Identité, périmètre et statut

- Slug : combien-de-temps-developper-saas
- Guide : no 27 du registre gelé
- Passe : P1 — recherche, rédaction, moteur pur, outil local, tests et visuels
- Date de la recherche contradictoire : 1er août 2026
- Base Git imposée : 343436a8542b599c6ddf64c7bde837fd245b00ee
- Branche réservée : codex/combien-de-temps-developper-saas
- Freeze : docs/research/combien-de-temps-developper-saas-input-freeze.md
- État : payload P1 autonome ; aucune affirmation de commit, push,
  publication, déploiement ou indexation

### Périmètre public retenu

Le guide répond sans inventer de durée universelle. Il enseigne une méthode
déterministe :

1. fixer une ligne d’arrivée observable ;
2. décrire chaque résultat et son responsable ;
3. relier les dépendances ;
4. rendre la capacité dédiée explicite ;
5. renseigner des durées favorables, centrales et prudentes avec leur cause ;
6. calculer la plus longue chaîne dépendante ;
7. afficher une réserve en jours ouvrés séparément ;
8. rejouer un stress combiné ;
9. comparer le prudent au maximum disponible ;
10. laisser la décision finale à une personne.

### Hors périmètre

Le guide ne fournit aucune moyenne ou fourchette de marché, promesse de
livraison, date civile automatique, donnée financière, durée automatique liée à
une technologie, probabilité, score, tableur, téléchargement, qualification
juridique, certification ou choix de fournisseur.

## B. Contrat de réponse

### Réponse directe

La première phrase publique est :

> Il n’existe pas de durée universelle défendable pour développer un SaaS.

La réponse tient avant le premier visuel et reste inférieure à 150 mots. Elle
explique immédiatement que la fin candidate vient de la chaîne dépendante la plus
longue, après définition de la ligne d’arrivée, des responsables, de la capacité
et des trois durées. Elle ne commence pas par « cela dépend ».

### Statuts publics exacts

- STOP_REQUIRED_INPUTS_UNKNOWN
- STOP_INVALID_DEPENDENCY_NETWORK
- CLARIFY_CAPACITY_BEFORE_CALENDAR
- CALENDAR_CANDIDATE_FOR_REVIEW

Aucun score ne compense un STOP ou une clarification.

### Convention de temps

- J1 est le premier jour ouvré confirmé, pas la date de consultation du guide.
- J+N est un axe de durée : il signifie N jours ouvrés écoulés depuis
  l’ouverture de J1, pas le numéro ordinal du jour.
- Une tâche de 1 jour occupe J1 et atteint son jalon à J+1. Le moteur part donc
  de zéro sans ajouter ni retirer artificiellement une journée.
- Une date civile exige un fuseau, les jours non travaillés, la disponibilité de
  chaque capacité et le calendrier des tiers.
- Les dates ci-dessous qualifient les sources, jamais un projet utilisateur.

## C. Corpus interne et cannibalisation

### Documents de gouvernance lus

- prompt maître, 1 906 lignes ;
- charte qualité, 1 119 lignes ;
- instructions guide, 641 lignes ;
- règle d’or, 831 lignes ;
- roadmap, 341 lignes ;
- freeze du slug, 232 lignes ;
- Prompt #1 - Création Article.docx, texte intégral et 24 pages rendues.

### Guides voisins

| Route                                      | Rôle propre                            | Frontière conservée                                         |
| ------------------------------------------ | -------------------------------------- | ----------------------------------------------------------- |
| /guides/valider-idee-saas-avant-developper | décider s’il faut construire           | le calendrier suppose une ligne d’arrivée définissable      |
| /guides/cahier-des-charges-saas            | décrire le même produit et ses preuves | le présent guide transforme les résultats en réseau         |
| /guides/plan-recette-application-metier    | organiser la réception                 | la recette est ici une dépendance, pas un protocole complet |
| /guides/droits-acces-application-metier    | écrire les autorisations               | le calendrier réserve un résultat de contrôle               |
| /guides/securite-application-metier        | approfondir la sécurité                | le calendrier place la sécurité dans la chaîne              |
| /services/saas-applications-metier         | présenter l’accompagnement             | le guide reste autonome avant son action tardive            |

L’intention propre du no 27 est : obtenir une fin candidate défendable avec la
ligne d’arrivée, le réseau, la capacité, quatre scénarios déterministes et un
raisonnement inverse.

## D. Recherche externe et contradiction

### D1. Recherche de l’intention

Requêtes qualitatives exécutées le 1er août 2026 :

- combien de temps développer SaaS ;
- délai développement MVP SaaS ;
- combien de temps créer logiciel SaaS ;
- durée projet SaaS.

Les résultats commerciaux répondent souvent par une promesse en semaines ou en
mois sans rendre comparables ligne d’arrivée, réseau et capacité. Ils ont servi
à identifier le langage de la demande et le risque de fausse précision. Aucune
durée trouvée n’est reprise ou agrégée.

### D2. GAO · Schedule Assessment Guide · finale 2015

- Page : https://www.gao.gov/products/gao-16-89g
- PDF accessible relié par la page officielle :
  https://www.gao.gov/assets/690/687052.pdf
- Référence : GAO-16-89G
- Publication : 22 décembre 2015
- Statut contrôlé au 1er août 2026 : final

Éléments utilisés : logique horizontale complète, activités et dépendances
nécessaires, plus long chemin continu vers la fin, attribution des ressources et
effet de leurs limites.

Limite : ce document vise de grands programmes publics. Seuls le réseau et les
ressources sont transposés à un petit SaaS ; aucune durée ne l’est.

### D3. GOV.UK · Planning in agile · mise à jour 31 mars 2026

- Page : https://www.gov.uk/service-manual/agile-delivery/planning-agile
- Publication initiale : 16 février 2016
- Dernière mise à jour affichée : 31 mars 2026

Éléments utilisés : vision, objectifs, feuille de route visible, planification au
bon niveau et exposition des dépendances entre équipes, organisations et tiers.
Les indications de feuille de route ne deviennent pas des durées SaaS.

### D4. GOV.UK · Discovery · mise à jour 21 juin 2021

- Page :
  https://www.gov.uk/service-manual/agile-delivery/how-the-discovery-phase-works
- Publication initiale : 4 août 2016
- Dernière mise à jour affichée : 21 juin 2021

Éléments utilisés : comprendre le problème avant de construire, reconnaître les
contraintes, pouvoir arrêter et considérer contenu, information, partenariat,
données ou interface mise à disposition. L’indication de durée propre à cette
administration est exclue.

### D5. GOV.UK · Alpha · mise à jour 8 mai 2019

- Page :
  https://www.gov.uk/service-manual/agile-delivery/how-the-alpha-phase-works
- Dernière mise à jour affichée : 8 mai 2019

Un alpha teste des hypothèses risquées avec des prototypes assez réalistes pour
apprendre ; il ne constitue pas automatiquement du code de production. Sa durée
indicative n’est pas reprise.

### D6. GOV.UK · Beta · mise à jour 19 février 2021

- Page :
  https://www.gov.uk/service-manual/agile-delivery/how-the-beta-phase-works
- Dernière mise à jour affichée : 19 février 2021

La bêta confronte un service réel à des utilisateurs et prépare son exploitation.
Elle représente une autre ligne d’arrivée qu’un prototype.

### D7. GOV.UK · Live · mise à jour 8 mai 2019

- Page :
  https://www.gov.uk/service-manual/agile-delivery/how-the-live-phase-works
- Dernière mise à jour affichée : 8 mai 2019

Éléments utilisés : poursuivre recherche et amélioration ; maintenir sécurité,
accessibilité, supervision, performance et assurance qualité.

### D8. Scrum Guide · version officielle novembre 2020

- Versions : https://scrumguides.org/download.html
- Français :
  https://scrumguides.org/docs/scrumguide/v2020/2020-Scrum-Guide-French.pdf
- Version actuelle affichée au 1er août 2026 : novembre 2020

Le Sprint est un événement d’un mois au maximum pour inspecter et adapter. Il ne
prouve pas la durée totale d’un SaaS. Aucun nombre de Sprints n’est inventé.

### D9. NIST SP 800-218 · SSDF v1.1 finale · février 2022

- Page : https://csrc.nist.gov/pubs/sp/800/218/final
- Publication : 3 février 2022
- Statut : final

Les pratiques de développement sécurisé s’intègrent à chaque mise en œuvre du
cycle. Elles ne sont pas reportées dans une ultime tâche indépendante.

### D10. NIST SP 800-218 Rev. 1 · SSDF v1.2 draft · 17 décembre 2025

- Page : https://csrc.nist.gov/pubs/sp/800/218/r1/ipd
- Publication : 17 décembre 2025
- Statut au 1er août 2026 : Initial Public Draft
- Commentaires : période close le 30 janvier 2026

La v1.2 est signalée pour ne pas la présenter comme finale. La base retenue
reste la v1.1 finale.

### D11. CNIL · guide de la sécurité · version 2024 mise à jour 2026

- Page :
  https://www.cnil.fr/fr/guide-de-la-securite-des-donnees-personnelles
- PDF :
  https://cnil.fr/sites/default/files/2026-05/cnil_guide_securite_personnelle.pdf

Éléments utilisés : tests unitaires, d’intégration, fonctionnels et de sécurité
avant mise en production ; séparation des environnements ; données fictives
autant que possible ; sécurité considérée pendant le projet. Aucune conformité
n’est déclarée.

### D12. Sources non retenues

- pages commerciales donnant une durée sans réseau comparable ;
- agrégations de blogs ;
- méthodes probabilistes ;
- fournisseur de paiement ou d’hébergement non nécessaire ;
- valeurs, verdicts et textes du dossier historique.

## E. Matrice d’information

| Question                            | Réponse P1                                       | Preuve ou mécanisme                                   | Limite                       |
| ----------------------------------- | ------------------------------------------------ | ----------------------------------------------------- | ---------------------------- |
| Combien de temps ?                  | fin relative du plus long chemin                 | moteur déterministe                                   | pas de promesse              |
| Terminé veut dire quoi ?            | ligne d’arrivée observable                       | tableau preuve, prototype, pilote, service soutenable | fins non interchangeables    |
| Que faut-il estimer ?               | résultats et non activités vagues                | résultat + responsable + capacité + dépendances       | vérité humaine               |
| Peut-on avancer en parallèle ?      | oui avec capacités distinctes ou ordre explicite | contrôle de capacité                                  | aucun parallélisme supposé   |
| Pourquoi trois durées ?             | expliquer l’incertitude propre à la tâche        | favorable, central, prudent                           | aucune probabilité           |
| Où mettre la prudence ?             | réserve après la chaîne                          | champ séparé                                          | pas de double marge          |
| Si deux risques arrivent ensemble ? | stress externe + interne                         | scénario combinedStress                               | valeurs fictives             |
| Si le maximum est inférieur ?       | afficher l’écart                                 | raisonnement inverse                                  | aucune réduction inventée    |
| Le Sprint donne-t-il la fin ?       | non                                              | Scrum Guide                                           | boucle et produit distingués |
| La sécurité vient-elle après ?      | non                                              | NIST final + CNIL                                     | aucune conformité            |
| Peut-on ne pas développer ?         | oui si la même arrivée tient                     | GOV.UK discovery                                      | décision métier              |

## F. Registre des affirmations

| ID  | Affirmation publique                                                                                                                          | Nature                    | Source                           | Statut            | Périmètre et limite            |
| --- | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- | -------------------------------- | ----------------- | ------------------------------ |
| C01 | Pas de durée universelle défendable sans arrivée, réseau et capacité comparables                                                              | conclusion                | freeze + contradiction du corpus | retenue           | ne nie pas toute observation   |
| C02 | Le plus long chemin continu détermine la première fin possible                                                                                | planification             | GAO-16-89G final                 | retenue           | transposition qualifiée        |
| C03 | Une jonction attend son dernier prérequis                                                                                                     | calcul                    | algorithme                       | retenue et testée | réseau valide requis           |
| C04 | Une capacité partagée doit être ordonnée ou clarifiée                                                                                         | capacité                  | GAO + règle P1                   | retenue           | aucune disponibilité implicite |
| C05 | Un Sprint dure un mois au maximum                                                                                                             | cadre                     | Scrum Guide 2020                 | retenue           | pas une durée totale           |
| C06 | La découverte peut mener à ne pas construire                                                                                                  | pratique                  | GOV.UK discovery                 | retenue           | contexte britannique signalé   |
| C07 | Prototype, pilote et service soutenable sont des fins distinctes                                                                              | livraison                 | GOV.UK phases                    | retenue           | aucune durée importée          |
| C08 | La sécurité s’intègre au cycle                                                                                                                | sécurité                  | NIST v1.1 final                  | retenue           | aucune certification           |
| C09 | SSDF v1.2 reste un Initial Public Draft                                                                                                       | statut                    | NIST Rev. 1 IPD                  | retenue           | v1.1 reste finale              |
| C10 | Tests avant production et environnements séparés                                                                                              | sécurité                  | CNIL 2024 mise à jour 2026       | retenue           | produit réel à qualifier       |
| C11 | Données fictives préférées autant que possible en test                                                                                        | sécurité                  | CNIL                             | retenue           | pas une interdiction absolue   |
| C12 | F/C/P sont des scénarios déterministes                                                                                                        | contrat                   | freeze + moteur                  | retenue           | aucune probabilité             |
| C13 | La réserve reste séparée de la chaîne                                                                                                         | gouvernance               | freeze + moteur                  | retenue           | ne remplace pas une inconnue   |
| C14 | Le stress combiné peut changer le chemin                                                                                                      | calcul                    | moteur + tests                   | retenue           | RelaisPro non généralisable    |
| C15 | Le raisonnement inverse affiche un écart                                                                                                      | décision                  | freeze + moteur                  | retenue           | décision humaine               |
| C16 | IA, no-code ou personnes en plus ne réduisent pas automatiquement la chaîne                                                                   | conclusion conditionnelle | réseau + capacité                | retenue           | recalcul possible avec preuves |
| C17 | J+N mesure N jours ouvrés écoulés depuis l’ouverture de J1                                                                                    | convention                | moteur + copie publique          | retenue et testée | aucune date civile automatique |
| C18 | Chaque chemin déterminant ex aequo doit rester visible                                                                                        | calcul                    | moteur + tests                   | retenue et testée | réseau valide requis           |
| C19 | « Stress combiné » exige deux familles de stress positives                                                                                    | qualification             | moteur + tests                   | retenue et testée | scénario déterministe          |
| C20 | Chaque chaîne est contrôlée avant conversion ; entrée ou somme au-delà de six décimales significatives ou de 1 000 000 jours bloque le calcul | sécurité de calcul        | moteur + tests                   | retenue et testée | limite technique, pas marché   |

### Affirmations rejetées

| Formulation                                   | Motif                               |
| --------------------------------------------- | ----------------------------------- |
| Un SaaS prend en moyenne une durée donnée     | corpus non comparable               |
| Un MVP se développe dans une durée donnée     | MVP ne ferme pas la ligne d’arrivée |
| Plus de personnes réduit toujours le temps    | ignore coordination et capacité     |
| L’IA divise le délai                          | aucune tâche ni preuve définie      |
| Le no-code garantit une livraison plus rapide | moyen confondu avec réseau          |
| La sécurité sera traitée à la fin             | contredit NIST et CNIL              |
| La réserve donne une probabilité de réussite  | moteur non probabiliste             |
| Le statut candidat vaut engagement            | calcul et décision confondus        |

## G. Spécification du moteur et calculs

### G1. Entrées

Entrée générale :

- ligne d’arrivée ;
- tâches ;
- réserve en jours ouvrés ;
- maximum de jours ouvrés disponibles.

Chaque valeur numérique reste une chaîne brute jusqu’à sa validation. Le point
est le seul séparateur décimal accepté, sans notation exponentielle. Six
décimales significatives au maximum sont autorisées. La borne technique est de
1 000 000 jours ouvrés par entrée et par somme ; elle se situe volontairement
très au-delà d’un calendrier projet plausible tout en gardant les micro-jours
loin de la limite des entiers sûrs JavaScript.

Chaque tâche contient :

- identifiant stable ;
- résultat observable ;
- responsable ;
- identifiant de capacité ;
- liste des dépendances ;
- durées favorable, centrale et prudente ;
- incertitude qui explique l’écart ;
- stress optionnel : attente externe ou validation interne, avec jours ajoutés.

### G2. Validation

Ordre des portes :

1. entrée nécessaire manquante : STOP_REQUIRED_INPUTS_UNKNOWN ;
2. identifiant ou dépendance dupliqués, dépendance inconnue, auto-dépendance,
   cycle, format non décimal, valeur négative/non finie, septième décimale
   significative, entrée ou somme supérieure à 1 000 000 jours :
   STOP_INVALID_DEPENDENCY_NETWORK, avant toute conversion irréversible ;
3. capacité partagée sans relation d’ancêtre :
   CLARIFY_CAPACITY_BEFORE_CALENDAR ;
4. portes fermées : CALENDAR_CANDIDATE_FOR_REVIEW.

Le moteur ne calcule aucun scénario dans les trois premiers cas. Si une somme
dépasse la borne pendant un rejeu, l’ensemble des quatre scénarios est rejeté :
aucun résultat partiel n’est conservé.

### G3. Algorithme

    début(tâche) = maximum des fins de ses prérequis
    fin(tâche) = début(tâche) + durée du scénario
    fin du réseau = maximum des fins terminales
    total de revue = fin du réseau + réserve affichée séparément

Le tri topologique refuse les cycles. Chaque prédécesseur qui finit au maximum
est conservé et chaque résultat terminal ex aequo est parcouru : le moteur
restitue donc toutes les chaînes déterminantes à égalité au lieu d’en masquer une
par un simple tri d’identifiants. Ces chaînes sont recalculées pour chaque
scénario.

Les valeurs valides sont converties exactement en micro-jours après contrôle de
la chaîne brute. Chaque addition reste entière et doit demeurer inférieure ou
égale à 1 000 000 jours ouvrés ; aucun arrondi de rattrapage n’est utilisé.

### G4. Cas fictif RelaisPro

Ligne d’arrivée fictive :

> Un pilote privé peut traiter une demande fictive de bout en bout, avec accès
> attribués, recette signée, support préparé et retour arrière documenté.

| ID                 | Résultat fictif                 | Dépend de                    | Capacité             | F/C/P   | Incertitude        |
| ------------------ | ------------------------------- | ---------------------------- | -------------------- | ------- | ------------------ |
| parcours           | critères décidés                | aucune                       | produit-cadrage      | 3/5/7   | cas limites        |
| acces-tiers        | accès de test ouvert            | aucune                       | tiers-acces          | 2/4/6   | réponse externe    |
| parcours-construit | parcours testable               | parcours + accès             | dev-relaispro        | 8/12/17 | jonctions          |
| support-prepare    | support et retour arrière prêts | parcours                     | operations-relaispro | 4/6/9   | cas dégradés       |
| recette            | contrôles acceptés              | parcours construit + support | recette-relaispro    | 3/5/8   | valideurs          |
| pilote-ouvert      | pilote ouvert                   | recette                      | dev-relaispro        | 2/3/5   | derniers contrôles |

Stress :

- acces-tiers : attente externe +6 jours ;
- recette : validation interne +5 jours.

Réserve : 4 jours ouvrés.

Maximum disponible : 34 jours ouvrés.

### G5. Rejeu attendu

Favorable :

    parcours → parcours-construit → recette → pilote-ouvert
    3 + 8 + 3 + 2 = 16
    réserve séparée 4 ; revue J+20

Central :

    parcours → parcours-construit → recette → pilote-ouvert
    5 + 12 + 5 + 3 = 25
    réserve séparée 4 ; revue J+29

Prudent :

    parcours → parcours-construit → recette → pilote-ouvert
    7 + 17 + 8 + 5 = 37
    réserve séparée 4 ; revue J+41

Stress combiné :

    acces-tiers → parcours-construit → recette → pilote-ouvert
    (6 + 6) + 17 + (8 + 5) + 5 = 47
    réserve séparée 4 ; revue J+51

Le stress change le premier nœud de la chaîne. Le chemin n’est pas figé.
L’étiquette « Stress combiné » est réservée au cas où attente externe et
validation interne ont chacune un effet additionnel strictement positif. Avec
une seule famille, le libellé la nomme ; sans effet positif, le rejeu est annoncé
comme identique au prudent.

Raisonnement inverse :

    prudent avec réserve 41
    maximum disponible 34
    écart 41 - 34 = 7 jours ouvrés

Le moteur ne retire aucun résultat, ne raccourcit aucune tâche et n’invente
aucune capacité.

### G6. Cas adversariaux

- zéro et jusqu’à six décimales significatives acceptés sans conversion
  silencieuse ;
- la chaîne `9000000000.1234567` est refusée pour sa septième décimale avant que
  JavaScript puisse l’arrondir ;
- le point est le seul séparateur décimal ; virgule et exposant sont refusés ;
- la valeur exacte `1000000` est acceptée ; `1000000.000001` est refusée ;
- négatifs, NaN, infinis, entrée ou somme au-delà de 1 000 000 jours : STOP
  réseau ;
- identifiant, dépendance dupliquée, auto-dépendance, dépendance inconnue et
  cycle : STOP réseau ;
- branche parallèle non additionnée ;
- jonction rejouée ;
- chemins déterminants ex aequo tous restitués ;
- plus de 1 000 chemins ex aequo : STOP explicite plutôt qu’affichage partiel ou
  saturation du navigateur ;
- hypothèse différente, chemin différent ;
- attente externe et validation interne dégradées ensemble ;
- un seul stress ou aucun n’est jamais présenté comme combiné ;
- responsable ou durée inconnus : STOP ;
- capacité partagée sans ordre : clarification ;
- capacité partagée explicitement ordonnée directement ou transitivement :
  calcul ;
- suppression ou renommage laissant une référence orpheline : STOP réseau ;
- réserve toujours distincte ;
- maximum inférieur au prudent : écart seulement ;
- convention J+N rejouée sur une tâche de 1 jour ;
- Markdown sélectionnable et copiable, sans fichier.

## H. Architecture éditoriale et expérience

### H1. Plan public

Neuf sections hors FAQ, sources et action :

1. réponse directe ;
2. chaîne déterminante ;
3. capacité dédiée ;
4. lignes d’arrivée et options sans développement ;
5. exemple entièrement fictif ;
6. planificateur local ;
7. scénarios et réserve ;
8. raisonnement inverse ;
9. qualité et exploitation intégrées.

### H2. Outil local

Le planificateur :

- commence vide et en STOP ;
- charge un exemple fictif séparé ;
- permet d’ajouter et retirer des tâches ;
- expose arrivée, résultat, responsable, capacité, dépendances, durées,
  incertitude, stress, réserve et maximum ;
- ne fait aucun appel réseau ;
- n’utilise ni cookie ni stockage local ;
- ne télécharge aucun fichier ;
- calcule seulement après les portes ;
- qualifie le quatrième rejeu selon zéro, une ou deux familles de stress
  réellement positives ;
- restitue toutes les chaînes déterminantes ex aequo ;
- expose un Markdown sélectionnable et copiable ;
- sépare calcul et décision.

### H3. Visuels

| Fichier                           | Ratio      | Fonction                                              |
| --------------------------------- | ---------- | ----------------------------------------------------- |
| calendrier-saas-16x9.svg et .webp | 1600 × 900 | réseau fictif, parallèle, jonction et chaîne centrale |
| calendrier-saas-4x3.svg et .webp  | 1200 × 900 | quatre scénarios et réserve séparée                   |
| calendrier-saas-1x1.svg et .webp  | 900 × 900  | quatre portes de statut                               |

Les trois WebP sont dérivés des SVG dédiés. Aucun visuel d’un autre guide n’est
réutilisé.

### H4. SEO et données structurées

- Titre visé : Combien de temps pour développer un SaaS ?
- H1 : Combien de temps faut-il pour développer un SaaS ?
- OG : Calculer une chaîne relative, puis la faire revoir
- JSON-LD : Article et BreadcrumbList via buildGuideStructuredData
- FAQ visible, sans FAQPage
- registre partagé non modifié en P1 ; intégration sérialisée avant build

### H5. Action tardive

Il n’existe aucune action dans le hero ou la barre latérale. Réponse, équations,
exemple, outil, scénarios, raisonnement inverse et contrôle autonome précèdent
strategyCta.

## I. Inventaire de l’historique

### I1. Artefacts au départ

Le checkout contenait :

- un dossier historique de 1 200 lignes au même chemin ;
- des manifestes historiques P1, P2, P3 et P4 ;
- aucun code ni visuel de route P1 dans le worktree réservé.

Une lecture d’inventaire orientée risques a porté sur l’entête et un échantillon
du dossier historique. Aucun texte n’a été copié.

### I2. Historique rejeté

- toute fourchette commerciale ou universelle ;
- toute dépendance à un fournisseur ;
- tout plan, texte, calcul ou verdict de l’ancienne chaîne ;
- toute provenance ne garantissant pas des agents distincts ;
- tout score ou ancien statut prêt ;
- toute affirmation de commit, push, publication ou navigateur ;
- tout manifeste P2, P3 ou P4 comme preuve de la nouvelle P1.

### I3. Éléments revalidés

Seuls l’intention et les candidats de sources primaires ont été réexaminés.
Chaque source retenue a été rouverte sur son site officiel le 1er août 2026.

### I4. Manifestes

- le P1 sera remplacé par le SHA-256 exact du nouveau snapshot ;
- les P2, P3 et P4 historiques restent intacts ;
- ils ne certifient pas le snapshot P1 ;
- les passes suivantes devront contrôler leur propre snapshot.

## J. Journal P1

### J1. Recherche et lecture

- [x] prompt maître intégral, 1 906 lignes
- [x] charte qualité intégrale, 1 119 lignes
- [x] instructions guide intégrales, 641 lignes
- [x] règle d’or intégrale, 831 lignes
- [x] roadmap intégrale, 341 lignes
- [x] freeze intégral, 232 lignes
- [x] DOCX extrait, texte lu et 24 pages rendues contrôlées
- [x] guides voisins inventoriés
- [x] SERP observée qualitativement
- [x] GAO final contrôlé
- [x] GOV.UK contrôlé page par page
- [x] Scrum officiel contrôlé
- [x] NIST v1.1 final et v1.2 draft distingués
- [x] CNIL version 2024 mise à jour 2026 contrôlée

### J2. Fichiers P1

- [x] page.tsx
- [x] opengraph-image.tsx
- [x] schedule-planner-engine.ts
- [x] schedule-planner-engine.test.ts
- [x] schedule-planner-tool.tsx
- [x] schedule-planner-tool.test.tsx
- [x] content-quality.test.ts
- [x] trois SVG
- [x] trois WebP

### J3. Contrôles finaux

| Contrôle            | Cible                          | Résultat                                                        |
| ------------------- | ------------------------------ | --------------------------------------------------------------- |
| Vitest              | moteur, outil, contenu du slug | vert : 3 fichiers, 34 tests                                     |
| ESLint              | TS et TSX du slug              | vert : aucune erreur ni alerte                                  |
| TypeScript          | dépôt, sans émission           | vert : aucune erreur                                            |
| Prettier            | fichiers texte P1              | vert : tous les fichiers ciblés conformes                       |
| XML                 | trois SVG                      | vert : xmllint accepte les trois fichiers                       |
| dimensions          | trois WebP                     | vert : 1600×900, 1200×900 et 900×900                            |
| inspection visuelle | trois WebP originaux           | vert : lisibles, sans découpe observée                          |
| diff                | espaces et marqueurs           | vert : git diff --check vide, aucun marqueur provisoire         |
| périmètre Git       | diff et non suivis             | vert : seulement freeze, dossier, slug, visuels et manifeste P1 |
| passes historiques  | manifestes P2, P3 et P4        | intacts                                                         |
| manifeste           | SHA-256 trié                   | vert : 15 entrées exactes, manifestes exclus                    |

### J4. Risques avant intégration

1. L’entrée getGuide du slug n’est volontairement pas ajoutée au registre
   partagé par P1.
2. Le build de route attend l’intégration sérialisée de cette entrée.
3. Les dates de source ne sont pas les dates éditoriales du registre.
4. Le test navigateur et la publication appartiennent aux portes ultérieures.
5. Toute correction après manifeste impose un nouveau SHA-256.

### J5. Gate P1

Statut final de la passe :

PASSE_1_CORRIGEE — PRET_POUR_RE_G1

Le snapshot P1 contient le freeze, ce dossier, les sept fichiers du slug et les
six visuels dédiés. Le manifeste P1 couvre exactement ces 15 fichiers. Il exclut
son propre chemin et tous les manifestes historiques. Aucun registre, fichier
partagé, lock, dépendance, serveur, build ou opération Git n’a été modifié.

### J6. Refus G1 et correction ciblée

Verdict G1 initial : NO_GO_P1.

Défaut confirmé : la clé React du fieldset concaténait l’index et
l’identifiant métier éditable. Chaque modification de cet identifiant pouvait
donc démonter puis recréer la ligne et faire perdre le focus.

Correction du 2 août 2026 :

- ajout d’une identité UI séparée et stable pour chaque ligne ;
- conservation de cette identité pendant les mises à jour des champs ;
- retrait coordonné de la tâche et de son identité UI ;
- nouvelles identités lors du chargement de l’exemple fictif ;
- test de saisie sur quatre états successifs de l’identifiant ;
- assertion que le même élément input reste connecté et focalisé ;
- retour de copie et de réinitialisation exposé avec role status,
  aria-live polite et aria-atomic true ;
- assertions ciblées sur l’annonce de ces deux retours.

Le snapshot corrigé doit être présenté à un nouveau G1. Le refus initial n’est
ni effacé ni transformé rétroactivement en validation.

## K. Journal P2 — vérification contradictoire et enrichissements décisifs

### K1. Certificat d’entrée et indépendance

P2 a été exécutée par un agent distinct de P1. Avant toute écriture :

- le freeze, le dossier P1, la page entière, le moteur, l’outil, leurs trois
  tests et les trois couples SVG/WebP ont été relus ;
- le manifeste P1 a été vérifié ligne par ligne : 15 fichiers sur 15 étaient
  conformes ;
- l’empreinte du fichier manifeste P1 était
  `2ea3aabed155d3112819b8c310ec0eafe7feeecf775f80cf26a3327d241eb2fe` ;
- les manifestes historiques P3 et P4 n’ont pas été utilisés comme preuve et
  n’ont pas été modifiés ;
- aucun fichier partagé, registre, lock, dépendance, serveur, build ou Git n’a
  été modifié par P2.

### K2. Cartographie contradictoire des affirmations

Les vingt affirmations C01 à C20 ont été rapprochées de la prose, des tableaux,
de la FAQ, du moteur, du Markdown copiable et des visuels.

| Lot contrôlé         | Conclusion P2                                         | Limite conservée                                             |
| -------------------- | ----------------------------------------------------- | ------------------------------------------------------------ |
| durée universelle    | aucune durée de marché importée                       | la fin reste propre au réseau et à la ligne d’arrivée        |
| plus long chemin     | calcul confirmé par rejeu indépendant                 | transposition limitée d’un guide GAO pour programmes publics |
| capacité             | ordre direct et transitif rejoué                      | aucune disponibilité humaine n’est inventée                  |
| scénarios            | F/C/P restent déterministes                           | aucune probabilité ni taux de confiance                      |
| stress               | deux familles positives exigées pour dire « combiné » | une seule famille ou aucune est nommée comme telle           |
| réserve              | ajoutée après le chemin                               | ne remplace jamais une inconnue                              |
| raisonnement inverse | écart calculé dans le bon sens                        | aucune réduction automatique du périmètre                    |
| sécurité et données  | intégrées au réseau                                   | aucune conformité, certification ou avis spécialisé déclaré  |

### K3. Sources, contre-sources et limites — contrôle du 2 août 2026

- **GAO-16-89G** : page officielle finale du 22 décembre 2015 et PDF accessible
  de 240 pages rouverts. Le document relie le plus long chemin à la première fin,
  exige des dépendances complètes et traite les limites de ressources. Il vise de
  grands programmes publics : aucune durée SaaS n’en est déduite. L’ancien
  raccourci PDF du dossier a été remplacé par le PDF réellement relié par la page
  officielle.
- **GOV.UK** : Planning in agile affiche toujours une mise à jour au 31 mars
  2026 ; Discovery au 21 juin 2021 ; Live au 8 mai 2019. Les dépendances, les
  alternatives à la construction et la continuité d’exploitation sont retenues.
  La durée indicative propre à Discovery et les horizons de roadmap ne sont pas
  convertis en durée de SaaS.
- **Scrum Guide** : novembre 2020 reste la version officielle courante. Le Sprint
  dure un mois ou moins ; il s’agit d’une boucle d’inspection, pas de la durée
  totale d’un produit.
- **NIST SP 800-218** : v1.1 reste finale depuis février 2022 et se présente comme
  un ensemble de recommandations. La v1.2 publiée le 17 décembre 2025 reste une
  Initial Public Draft, commentaires clos le 30 janvier 2026. « Base normative »
  a donc été corrigé en « recommandation de référence ».
- **CNIL** : le PDF porte bien « Version 2024 — mise à jour 2026 ». Il demande
  notamment environnement distinct, données fictives ou anonymisées et tests
  avant production. Le guide n’autorise aucune déclaration de conformité du
  projet réel.

### K4. Défauts P1 confirmés et corrections

1. **Signe inversé dans la formule publique** : `maximum 34 - prudent 41 = 7`
   était faux comme écriture. Correction : `41 - 34 = 7`.
2. **Chemins ex aequo masqués** : le tri ne conservait qu’un prédécesseur et un
   terminal. Le moteur restitue maintenant chaque chaîne déterminante à égalité,
   avec son équation, dans l’interface et le Markdown.
3. **Stress trompeusement “combiné”** : le quatrième rejeu portait toujours ce
   titre. Le libellé distingue maintenant deux, une ou zéro famille de stress
   ayant un effet strictement positif.
4. **Convention J1/J+N ambiguë** : J+N est désormais défini comme N jours
   ouvrés écoulés depuis l’ouverture de J1. Une tâche de 1 jour occupe J1 et
   atteint son jalon à J+1 ; aucun décalage artificiel n’est ajouté au moteur.
5. **Réseau insuffisamment défensif** : dépendances dupliquées et références
   orphelines après suppression ou renommage produisent un STOP explicite.
6. **Extrêmes numériques** : le moteur travaille en micro-jours, soit au plus
   six décimales. Toute précision supérieure, valeur non finie ou somme hors des
   entiers sûrs est refusée sans arrondi, scénario partiel ni ancien résultat.
7. **Lien et portée de source** : lien PDF GAO corrigé ; statut NIST reformulé
   sans surqualification normative.

Aucune affirmation n’a été entièrement retirée. Les sept lots ci-dessus
regroupent cinq corrections de formulation ou de lien et trois corrections de
mécanisme ; le dernier lot contient les deux corrections de source.

### K5. Calculs reproduits sans reprendre les totaux affichés

| Rejeu RelaisPro fictif   |           Addition indépendante | Réserve séparée | Total de revue |
| ------------------------ | ------------------------------: | --------------: | -------------: |
| favorable                |              3 + 8 + 3 + 2 = 16 |               4 |           J+20 |
| central                  |             5 + 12 + 5 + 3 = 25 |               4 |           J+29 |
| prudent                  |             7 + 17 + 8 + 5 = 37 |               4 |           J+41 |
| stress externe + interne | (6 + 6) + 17 + (8 + 5) + 5 = 47 |               4 |           J+51 |

Raisonnement inverse : prudent avec réserve 41, maximum 34, donc
`41 - 34 = 7 jours ouvrés`. Le moteur ne transforme pas cet écart en réduction
automatique.

### K6. Matrice de cas limites rejoués

| Cas                                              | Résultat attendu et obtenu                                 |
| ------------------------------------------------ | ---------------------------------------------------------- |
| champ vide ou inconnue                           | STOP_REQUIRED_INPUTS_UNKNOWN, aucun scénario               |
| zéro                                             | valeur conservée, jamais remplacée ou considérée manquante |
| décimales jusqu’à six chiffres                   | micro-jours exacts, y compris écart inverse                |
| septième décimale                                | STOP, aucun arrondi silencieux                             |
| négatif, NaN, +Infinity, -Infinity               | STOP réseau, aucun NaN dans le Markdown                    |
| entrée ou somme extrême                          | STOP réseau avant tout résultat partiel                    |
| ID dupliqué                                      | STOP réseau                                                |
| dépendance dupliquée                             | STOP réseau                                                |
| auto-dépendance ou dépendance inconnue           | STOP réseau                                                |
| cycle                                            | STOP réseau                                                |
| branche réellement parallèle                     | non additionnée                                            |
| jonction                                         | attend le dernier prérequis                                |
| changement d’hypothèse                           | chemin déterminant recalculé                               |
| chemins ex aequo                                 | toutes les chaînes et équations restituées                 |
| `0,1 + 0,2` face à `0,3`                         | égalité conservée malgré le bruit binaire                  |
| plus de 1 000 chemins ex aequo                   | STOP explicite, aucun affichage partiel                    |
| capacité partagée sans ordre                     | CLARIFY_CAPACITY_BEFORE_CALENDAR                           |
| capacité partagée avec ordre direct ou transitif | calcul autorisé                                            |
| suppression ou renommage d’une tâche référencée  | STOP sur le lien orphelin                                  |
| stress externe + interne positifs                | Stress combiné                                             |
| une seule famille positive                       | famille unique nommée, jamais « combiné »                  |
| aucun effet positif                              | rejeu annoncé identique au prudent                         |
| réserve                                          | toujours séparée du chemin                                 |
| maximum inférieur au prudent                     | écart seulement, sans décision inventée                    |
| tâche de 1 jour depuis J1                        | fin relative J+1                                           |

### K7. React, accessibilité et cohérence visible

- l’identité React des lignes reste distincte de l’identifiant métier éditable ;
- la saisie d’un identifiant conserve le même input connecté et focalisé ;
- retirer la ligne précédente conserve aussi l’input suivant et son focus ;
- renommer ou retirer ne réécrit jamais silencieusement les dépendances ;
- statut, copie et réinitialisation conservent leurs régions `role=status`,
  `aria-live=polite` et `aria-atomic=true` ;
- page, FAQ, tableau, formule, moteur, interface et Markdown portent la même
  convention J+N, la même réserve séparée et le même raisonnement inverse ;
- les liens internes éditoriaux et commerciaux pointent toujours vers des
  routes existantes ; aucun téléchargement XLS, XLSX ou CSV n’est introduit.

### K8. Visuels

Les trois WebP ont été inspectés à leur définition originale avant édition. Les
trois SVG passent `xmllint`; les WebP mesurent toujours 1600×900, 1200×900 et
900×900. Aucun visuel n’a été modifié : l’exemple qu’ils représentent conserve
un seul chemin déterminant, donc il n’entre pas en contradiction avec la règle
générale des chemins ex aequo.

### K9. Contrôles finaux P2

| Contrôle                     | Résultat                                                      |
| ---------------------------- | ------------------------------------------------------------- |
| Vitest ciblé                 | vert : 3 fichiers, 51 tests, 0 échec                          |
| ESLint du slug               | vert : aucune erreur ni alerte                                |
| TypeScript dépôt `--noEmit`  | vert : aucune erreur                                          |
| Prettier ciblé               | vert                                                          |
| `git diff --check`           | vert                                                          |
| XML des trois SVG            | vert                                                          |
| dimensions des trois WebP    | vert                                                          |
| manifeste P1 avant édition   | 15/15 conforme                                                |
| empreinte du manifeste P1    | inchangée après P2                                            |
| manifestes P3/P4 historiques | inchangés                                                     |
| périmètre                    | freeze, dossier, slug, six visuels et manifeste P2 uniquement |

### K10. Risques résiduels et frontières

1. Au-delà de 1 000 chemins déterminants ex aequo, l’outil bloque volontairement
   et demande de simplifier le réseau ; il ne prétend pas visualiser un graphe
   combinatoire massif.
2. Le registre partagé `getGuide` n’est toujours pas intégré dans ce worktree ;
   l’orchestrateur doit sérialiser cette modification avant un build de route.
3. Aucun serveur, build, navigateur réel, commit, push, déploiement, publication
   ou indexation n’est revendiqué par P2.
4. Les statuts des sources ont été vérifiés au 2 août 2026 et devront être
   rafraîchis si la publication est différée.
5. Les choix de sécurité, données et conformité d’un produit réel restent à
   attribuer à ses responsables, DPO ou expert sécurité selon son contexte.

### K11. Sortie officielle P2

PASSE_2_TERMINEE

- Affirmations contrôlées : 20 affirmations du registre, plus leurs occurrences
  dans la page, la FAQ, l’outil, le Markdown et les visuels.
- Affirmations corrigées : 5 formulations ou liens ; signe, stress, J+N, portée
  NIST et lien GAO.
- Affirmations retirées : 0.
- Contre-sources : 5 familles de limites documentées — GAO, GOV.UK, Scrum, NIST
  et CNIL.
- Calculs reproduits : 16/20, 25/29, 37/41, 47/51 et `41 - 34 = 7`.
- Cas limites : 25 familles rejouées, dont micro-jours, non-finis, réseau,
  capacité, égalités, stress, réserve et raisonnement inverse.
- Enrichissements décisifs : chemins ex aequo complets, stress honnête,
  arithmétique sûre, dépendances orphelines visibles et convention J+N.
- Risques résiduels : cinq frontières listées en K10, aucune P0 ou P1 ouverte.
- Tests : 51 verts, 0 échec ; ESLint, TypeScript, Prettier, XML et diff verts.
- Manifeste P2 :
  `docs/research/manifests/combien-de-temps-developper-saas-p2.sha256`, snapshot
  exact de 15 fichiers, trié et hors manifestes.

## L. Reprise P2 après le NO_GO G2 numérique

### L1. Défaut reproduit et statut du snapshot précédent

Le G2 orchestrateur a refusé la première sortie P2. Le défaut est confirmé :
`Number("9000000000.1234567")` produit `9000000000.123457`. La multiplication
par un million donne ensuite `9000000000123457`, encore reconnu comme entier
sûr par JavaScript. Le moteur pouvait donc accepter une valeur déjà arrondie
alors que l’interface promettait un refus avant arrondi.

K9 et K11 décrivent le snapshot rejeté. Ils sont conservés comme historique,
mais ne constituent plus le résultat P2 courant. La présente section les
remplace pour la porte G2.

### L2. Correction du contrat numérique

- le formulaire conserve désormais la chaîne brute ; aucun `Number` n’est
  appelé dans le gestionnaire de saisie ;
- le point est le seul séparateur décimal public, sans exposant ;
- la septième décimale significative est détectée sur la chaîne avant le
  contrôle de magnitude et avant toute conversion ; les zéros terminaux qui ne
  changent pas la valeur restent acceptés ;
- après validation lexicale, la chaîne est transformée exactement en
  micro-jours avec `BigInt`, puis en nombre seulement sous la borne ;
- une valeur programmatique déjà numérique n’est acceptée que si ses
  micro-unités entières reconstruisent exactement la même valeur ;
- `MAX_WORKING_DAYS = 1_000_000` est la même borne dans le moteur, l’attribut
  HTML `max`, la copie visible, les erreurs, les tests et le présent dossier ;
- chaque entrée et chaque somme doit rester au plus à 1 000 000 jours ouvrés.
  Cette borne représente encore des milliers d’années et ne cherche donc pas à
  imposer une durée de marché ; elle maintient les micro-jours très loin de la
  limite des entiers sûrs ;
- si une addition franchit la borne pendant un rejeu, l’affectation atomique des
  quatre scénarios échoue : `scenarios` reste vide et le raisonnement inverse
  reste `null`.

### L3. Matrice contradictoire ajoutée

| Cas                                       | Résultat obtenu                                                     |
| ----------------------------------------- | ------------------------------------------------------------------- |
| chaîne `9000000000.1234567`               | STOP sur la précision brute avant contrôle de magnitude             |
| valeur exacte `1000000`                   | acceptée, aller-retour exact en micro-jours                         |
| valeur `1000000.000001`                   | STOP, dépassement d’un micro-jour                                   |
| somme `600000 + 400000.000001`            | STOP, aucun scénario partiel ni raisonnement inverse                |
| nombres `NaN`, `Infinity`, `-Infinity`    | STOP, aucune valeur non finie dans le Markdown                      |
| chaînes `NaN`, `Infinity`, `-Infinity`    | STOP avant conversion                                               |
| virgule `0,5` ou exposant `1e3`           | STOP avec rappel du point décimal et de l’absence d’exposant        |
| nombre exact `0.12965` avec bruit binaire | accepté après aller-retour exact, sans changement de valeur         |
| saisie extrême dans le composant React    | chaîne visible inchangée, statut STOP, aucune forme arrondie rendue |

### L4. Revue React après correction

La revue ciblée des bonnes pratiques React confirme que `NumberField` reste au
niveau module, que les mises à jour d’état restent fonctionnelles, que les clés
de lignes restent indépendantes des identifiants métier éditables et qu’aucun
effet ou accès réseau n’a été ajouté. Chaque champ numérique référence la règle
visible avec `aria-describedby`, et la saisie extrême est couverte dans le DOM.

### L5. Contrôles finaux de la reprise P2

| Contrôle                    | Résultat                                                         |
| --------------------------- | ---------------------------------------------------------------- |
| Vitest ciblé                | vert : 3 fichiers, 62 tests, 0 échec                             |
| ESLint du slug              | vert : aucune erreur ni alerte                                   |
| TypeScript dépôt `--noEmit` | vert : aucune erreur                                             |
| Prettier ciblé              | vert                                                             |
| `git diff --check`          | vert                                                             |
| XML des trois SVG           | vert                                                             |
| dimensions des trois WebP   | 1600×900, 1200×900 et 900×900                                    |
| manifeste P2                | 15 fichiers sur 15, trié, vérifié et hors manifestes             |
| manifeste P1                | empreinte externe `2ea3aabe…b2fe`, inchangée                     |
| manifestes P3 et P4         | empreintes externes `a502ebe2…c62` et `8f86d32e…2a9`, inchangées |

### L6. Sortie officielle P2 corrigée

PASSE_2_TERMINEE_APRES_CORRECTION_G2

- défaut numérique G2 reproduit puis fermé à la source ;
- borne publique et technique unique : 1 000 000 jours ouvrés ;
- chaîne brute contrôlée avant conversion, six décimales significatives au
  maximum, point uniquement, aucun exposant ;
- aucune entrée ni somme hors borne, aucun arrondi silencieux et aucun scénario
  partiel ;
- 62 tests verts et contrôles techniques listés en L5 ;
- manifeste P2 régénéré seul après la correction ; P1, P3 et P4 préservés.

## M. Journal P3 — polish rédactionnel

### M1. Entrée, lectures et périmètre

La passe a été menée par l’agent distinct
`/root/delai_saas_p3_polish`. Avant toute édition, le manifeste P2 a été
contrôlé sur ses 15 fichiers : 15/15 conformes. Son empreinte externe était
`95c095ac9fa60b525b732db3ffd66725c23278c7c1fa3469fdd008456b86f473`.
Ce certificat décrit le point d’entrée P2 ; les changements P3 rendent ensuite
normalement ce snapshot antérieur non conforme.

Les sources de gouvernance relues intégralement sont le prompt maître, les
règles de vigilance SEO/publication, la charte qualité, le workflow en quatre
passes, les instructions de qualité, la feuille de route, le registre partagé,
le modèle de journal et le gel d’entrée de ce slug. Le snapshot P2 complet a
également été relu : journal de recherche, page, moteur, outil, trois suites de
tests, image Open Graph, trois SVG et trois WebP. Les visuels ont été inspectés
à leur définition originale. Le document DOCX de P3 a été lu intégralement ;
ses consignes historiques incompatibles avec la gouvernance actuelle n’ont pas
été appliquées.

Le périmètre éditable a été limité à la page, aux libellés visibles de l’outil,
au présent journal et au manifeste P3. Aucun mécanisme, calcul, test, visuel,
source, fichier partagé ou gel d’entrée n’a été modifié. Aucun build, serveur,
BAT navigateur, commit, push, déploiement, publication ou indexation n’est
revendiqué par cette passe.

### M2. Défauts de lisibilité observés

1. L’ouverture donnait la bonne réponse, mais concentrait trop tôt les termes
   « fin relative », « capacité dédiée » et « chemins ex aequo ».
2. Plusieurs entrées du sommaire et titres de section décrivaient davantage la
   méthode de planification que la question concrète du lecteur.
3. Les passages entre dépendances, capacité, ligne d’arrivée, cas fictif, outil,
   hypothèses, décision et exploitation manquaient de phrases de liaison.
4. Certains libellés du planificateur reprenaient un vocabulaire d’agence au
   lieu d’indiquer directement l’action attendue.
5. Deux réponses de FAQ et les CTA parlaient d’un « réseau en STOP » alors que
   le besoin visible était un calendrier bloqué ou à faire relire.
6. Les paragraphes GAO, GOV.UK, Scrum, NIST et CNIL étaient exacts, mais parfois
   trop denses pour une lecture non spécialiste.

### M3. Corrections rédactionnelles appliquées

- La réponse initiale commence toujours exactement par « Il n’existe pas de
  durée universelle défendable pour développer un SaaS. » et tient en moins de
  150 mots avant le premier tableau.
- La chaîne déterminante, la jonction et la capacité sont définies en langage
  courant avant de servir au raisonnement ; le terme « capacité » reste ensuite
  disponible pour le contrat technique.
- Le sommaire et les titres annoncent désormais une question ou une décision
  concrète : ce qui fixe la fin, qui peut travailler, ce que « terminé » veut
  dire, l’écart à traiter et les contrôles à planifier.
- Des transitions explicites relient les neuf sections sans ajouter de nouvelle
  affirmation factuelle.
- Les étapes et champs du planificateur nomment directement le résultat attendu,
  la personne ou équipe disponible, l’ordre des tâches et la relecture du
  brouillon.
- La FAQ répond plus directement aux inconnues, à l’ajout de personnes et au
  statut de revue. Les CTA restent tardifs et sobres ; ils demandent une version
  sans donnée sensible et ne promettent ni date ni résultat.
- Les limites de portée des sources sont conservées, avec des phrases plus
  courtes et une séparation plus nette entre principe transposé et durée non
  fournie.

### M4. Contrat et nuances protégés

- Les quatre statuts restent identiques : `STOP_REQUIRED_INPUTS_UNKNOWN`,
  `STOP_INVALID_DEPENDENCY_NETWORK`, `CLARIFY_CAPACITY_BEFORE_CALENDAR` et
  `CALENDAR_CANDIDATE_FOR_REVIEW`.
- Une inconnue ne devient jamais zéro. La réserve reste séparée et les quatre
  scénarios restent déterministes, sans score ni probabilité.
- J+N signifie toujours N jours ouvrés écoulés depuis l’ouverture de J1 ; une
  tâche de 1 jour occupe J1 et atteint son jalon à J+1.
- Tous les chemins déterminants ex aequo restent restitués, avec blocage au-delà
  de 1 000 chemins ; aucun chemin n’est masqué.
- Le libellé « stress combiné » exige toujours deux familles ayant chacune un
  effet additionnel strictement positif.
- La borne reste 1 000 000 jours ouvrés, avec point décimal, sans exposant et au
  plus six décimales significatives ; aucun arrondi ni scénario partiel n’est
  introduit.
- Le guide ne génère aucune date civile, promesse, engagement ni téléchargement.
- RelaisPro reste entièrement fictif. Les additions 16/20, 25/29, 37/41, 47/51
  et le raisonnement inverse `41 - 34 = 7` restent inchangés.
- Les portées GAO, GOV.UK, Scrum, NIST et CNIL sont conservées. NIST v1.1 reste
  la version finale et la v1.2 une Initial Public Draft qui ne la remplace pas.
- L’option simple conserve la fonction disponible, le processus manuel
  contrôlé, le contenu explicatif, le partenariat et la possibilité de ne rien
  construire.

### M5. Contrôles P3

| Contrôle                    | Résultat                                                    |
| --------------------------- | ----------------------------------------------------------- |
| manifeste P2 avant édition  | 15/15 conforme, empreinte externe exacte                    |
| Vitest ciblé                | vert : 3 fichiers, 62 tests, 0 échec                        |
| ESLint du slug              | vert : aucune erreur ni alerte                              |
| TypeScript dépôt `--noEmit` | vert : aucune erreur                                        |
| Prettier page et outil      | vert                                                        |
| `git diff --check`          | vert                                                        |
| XML des trois SVG           | vert                                                        |
| dimensions des trois WebP   | 1600×900, 1200×900 et 900×900                               |
| React et Next.js            | frontières serveur/client et identité des lignes intactes   |
| périmètre                   | aucun fichier partagé, build, serveur, BAT ou opération Git |

### M6. Sortie officielle P3

PASSE_3_TERMINEE

- problèmes de lisibilité corrigés : ouverture, hiérarchie, transitions, FAQ,
  libellés de l’outil et CTA ;
- jargon retiré ou défini sans suppression du vocabulaire nécessaire au
  contrat ;
- faits, chiffres, sources, statuts, mécanismes et exemples inchangés ;
- nuances et portes STOP conservées ;
- 62 tests ciblés verts, ESLint et TypeScript verts ;
- manifeste P3 régénéré sur les mêmes 15 fichiers que P2, hors manifestes.

## N. Reprise P3 après le NO_GO G3 de nuance

### N1. Défaut confirmé

Le contrôle G3 orchestrateur a classé la première sortie P3 en
`NO_GO_P3` ciblé. L’ouverture disait qu’une même personne ou équipe attendue
sur deux tâches bloquait le calcul. Cette formulation était trop large : le
moteur demande une clarification seulement lorsque la même personne ou équipe
est partagée entre des tâches sans ordre explicite. Le manifeste P3 externe
`a96013b5…ec7d` décrit donc un snapshot rejeté. M5 et M6 restent l’historique de
ce snapshot, mais la présente reprise les remplace comme sortie P3 courante.

### N2. Corrections de la reprise

- L’ouverture porte désormais la condition exacte : une entrée manquante, une
  boucle ou une personne ou équipe partagée entre des tâches sans ordre
  explicite bloque le calcul. Elle conserve la réponse directe et compte 147
  mots avant le premier tableau.
- Dans le mémo de la section 01, la citation J+N est fermée dans son propre
  paragraphe. La phrase sur l’ordre réel des tâches devient un second paragraphe
  et ne semble plus appartenir à la citation.
- La transition GOV.UK ne commente plus l’ordre de la page. Elle pose la
  question de décision utile : une hypothèse différente déplace-t-elle la suite
  de tâches qui fixe la fin ?
- Les deux premières réponses de FAQ n’emploient plus « réseau » avant de le
  traduire. Elles demandent directement de viser le même résultat, d’ordonner
  les tâches et de relier celles qui attendent une décision, un tiers, une
  recette, une reprise ou les conditions d’exploitation.
- Le sommaire de l’outil ne dit plus « dans cette page » ; il annonce le contrôle
  des entrées.

### N3. Audit des transitions ajoutées

Les transitions conservées répondent chacune à une question nécessaire : qui
peut réellement travailler en parallèle ; les calendriers visent-ils le même
résultat ; quelle hypothèse déplace la fin ; les entrées autorisent-elles le
calcul ; que couvrent les trois durées ; la réserve dépasse-t-elle le temps
disponible ; les contrôles et l’exploitation figurent-ils dans le calendrier.
Les deux renvois mécaniques vers « ce qui suit » ou « l’outil suivant » ont été
retirés. Aucun nouveau fait, calcul, statut, mécanisme, lien ou périmètre de
source n’a été ajouté.

### N4. Contrôles de la reprise P3

| Contrôle                    | Résultat                                                 |
| --------------------------- | -------------------------------------------------------- |
| ouverture                   | 147 mots, condition de capacité exacte                   |
| Vitest ciblé                | vert : 3 fichiers, 62 tests, 0 échec                     |
| ESLint du slug              | vert : aucune erreur ni alerte                           |
| TypeScript dépôt `--noEmit` | vert : aucune erreur                                     |
| Prettier ciblé              | vert                                                     |
| `git diff --check`          | vert                                                     |
| XML des trois SVG           | vert                                                     |
| périmètre P2 vers P3        | journal, page et libellés visibles de l’outil uniquement |
| opérations exclues          | aucun fichier partagé, build, serveur, BAT ou Git        |

### N5. Sortie officielle P3 corrigée

PASSE_3_TERMINEE_APRES_CORRECTION_G3

- P1 de nuance fermé dans l’ouverture ;
- citation, FAQ et transitions corrigées ;
- tous les contrats et toutes les nuances P2 protégés ;
- 62 tests verts, contrôles techniques verts ;
- manifeste P3 régénéré seul sur les 15 chemins P2, hors manifestes ;
- P1, P2 et P4 préservés.

## O. Journal P4 — antipasse IA et cohérence finale

### O1. Certificat d’entrée, lectures et périmètre

La passe a été ouverte par l’agent distinct
`/root/delai_saas_p4_antiai`, puis sa clôture a été reprise après une
interruption externe par l’agent distinct
`/root/delai_saas_p4_completion`. Aucun des deux n’a participé à P1, P2 ou P3.

Le journal laissé au point d’interruption consignait un contrôle du manifeste
P3 avant édition : 15/15 fichiers conformes et empreinte externe
`54eab432b650418d0e97d31fc8ee67f3f3087578cbf98d155c52e183e1e2a4c2`.
La reprise a vérifié cette empreinte exacte. Sur le snapshot P4 déjà édité,
12 chemins restent conformes à P3 ; seuls le présent dossier, `page.tsx` et
`schedule-planner-tool.tsx` divergent, soit exactement le périmètre éditorial
annoncé par la passe interrompue.

Le premier agent a consigné la lecture intégrale du prompt maître, de
`CLAUDE.md`, de la règle d’or SEO et publication, de la charte qualité, du
workflow en quatre passes, des instructions de qualité, de la roadmap, du gel
du slug et du DOCX P4. La reprise a relu intégralement les sections P4/G4 du
prompt maître et du workflow, le mandat DOCX P4, le gel, le présent dossier,
la page, le moteur, l’outil, les trois suites de tests, l’image Open Graph et
les trois SVG. Les trois WebP ont de nouveau été inspectés à leur définition
originale. Les squelettes de deux guides SaaS voisins n’ont servi qu’à repérer
les automatismes de structure, sans en reprendre le fond.

Le périmètre édité est limité à la copie visible de `page.tsx`, à une phrase
d’introduction du planificateur, au présent journal et au manifeste P4. Le
moteur, les tests, l’image Open Graph, les visuels, le freeze et les manifestes
P1 à P3 n’ont pas été modifiés. Aucun fichier partagé, build, serveur, BAT,
commit, push, déploiement, publication ou indexation n’est revendiqué par P4.

### O2. Motifs repérés

1. Plusieurs fins de section utilisaient la même transition abstraite :
   « reste une question », « reste une vérification » ou « il reste à
   expliquer ».
2. « De même » liait artificiellement l’ajout d’une personne, de l’IA ou du
   no-code au paragraphe précédent alors que la condition pouvait être énoncée
   directement.
3. Trois formulations de navigation parlaient de la page plutôt que de
   l’action : « dans cette page », un renvoi générique par « dans ce guide »
   et « le bouton qui suit ». Deux qualifications de source qui contiennent
   encore « de ce guide » ou « dans ce guide » sont d’une autre nature : elles
   indiquent que la v1.1 finale, et non la v1.2 encore en Initial Public Draft,
   reste la recommandation retenue comme référence.
4. « Ces portes sont fermées » et l’intertitre « Dernière porte » prolongeaient
   une métaphore de structure déjà fréquente dans les guides SaaS voisins. Les
   quatre portes de statut restent utiles ; leur reprise décorative ne l’était
   pas.
5. « Une date vide » restait vague. La cause réelle est une date dépourvue
   d’hypothèses explicites.
6. La conséquence de la double prudence était nommée « décisive » sans dire
   assez directement ce que le lecteur ne pouvait plus distinguer.

Aucune autosatisfaction, superlatif, témoignage, dramatisation creuse,
inversion artificielle majeure ou conclusion répétant l’ouverture n’a été
relevé. Le rythme général varie déjà entre réponse, tableau, équation, exemple,
outil et décision.

### O3. Corrections appliquées

- Les transitions abstraites deviennent des actions : relire les
  disponibilités, rejouer une hypothèse, vérifier les entrées et expliquer les
  trois durées avant la discussion.
- La phrase sur les moyens d’accélération commence directement par « Ajouter
  une personne, un outil d’IA ou une plateforme no-code » ; ses conditions et
  limites restent inchangées.
- La date GOV.UK est distinguée de la livraison en une phrase courte, puis la
  conséquence consiste à rejouer une hypothèse et observer le déplacement de
  la chaîne.
- Le planificateur dit que les saisies restent locales à l’outil, sans parler
  de « cette page ». L’absence d’appel réseau, de stockage, de promesse et de
  date contractuelle reste explicite.
- Le passage précédant le CTA nomme désormais l’utilité de chaque guide lié et
  la demande de relecture, sans annoncer « le bouton qui suit ».
- Le renvoi éditorial générique par « dans ce guide » a été retiré. Les deux
  occurrences liées au statut NIST sont conservées : elles qualifient la
  source retenue et ne vantent ni la page ni son ordre de lecture.
- « Dernière porte » devient « Statut du calcul » et le statut candidat reste
  explicitement un brouillon à faire relire.
- « Une date vide » devient « une date sans hypothèses » ; l’encadré sur la
  réserve explique désormais qu’un dépassement ne permet plus de distinguer le
  travail estimé de la prudence ajoutée.

### O4. Passages volontairement conservés

- Les listes d’entrées, de décisions et de contrôles restent parallèles : ce
  sont des inventaires actionnables, pas des triptyques décoratifs.
- Les oppositions répétées entre inconnue et zéro, calcul et engagement,
  réserve et durée, prototype et service soutenable restent visibles. Elles
  protègent le contrat de réponse et ne servent pas un effet de style.
- Les codes des quatre statuts, « chaîne déterminante », « capacité dédiée »,
  « chemins ex aequo » et « stress combiné » restent présents après leur
  traduction en langage courant. Les remplacer créerait une divergence avec
  l’outil et les tests.
- Les limites de sources restent parfois denses dans le bloc légal : leur date,
  leur statut et leur portée sont nécessaires pour ne pas transformer une
  méthode en durée SaaS.
- Les formulations « recommandation de référence de ce guide » et « ne
  remplace pas la v1.1 finale dans ce guide » restent volontairement présentes
  dans les passages NIST. Elles bornent la sélection documentaire : la v1.2
  est une Initial Public Draft et la v1.1 demeure la recommandation finale de
  référence. Le test de contenu protège explicitement cette nuance.
- Les neuf H2 restent inégaux mais autonomes. Chacun aboutit à un calcul, une
  vérification, une option ou une action identifiable.

### O5. Faits, calculs et limites inchangés

- quatre statuts exacts ; aucune inconnue remplacée par zéro ;
- J+N = N jours ouvrés écoulés depuis l’ouverture de J1 ; une tâche de 1 jour
  atteint J+1 ;
- tous les chemins déterminants ex aequo restent visibles, avec STOP au-delà
  de 1 000 chemins ;
- « Stress combiné » exige toujours une attente externe et une validation
  interne strictement positives ;
- point décimal, aucun exposant, six décimales significatives au maximum et
  borne de 1 000 000 jours ouvrés par entrée et par somme ;
- calculs RelaisPro 16/20, 25/29, 37/41, 47/51 et `41 - 34 = 7` ;
- réserve séparée, aucune probabilité, date civile, promesse, score,
  téléchargement ou résultat partiel ;
- portées GAO, GOV.UK, Scrum, NIST et CNIL inchangées ; NIST v1.1 reste finale
  et la v1.2 une Initial Public Draft ;
- fonction existante, processus manuel contrôlé, contenu explicatif,
  partenariat et option de ne rien construire toujours visibles ;
- CTA tardif et sobre vers `/demarrer-un-projet`.

### O6. Exemple et contradictions finales

RelaisPro reste présenté avant ses chiffres comme un exemple entièrement
fictif qui ne constitue aucune référence de marché. Aucun passage ne l’appelle
client, mission, devis ou résultat Hagnéré Code. Les trois visuels répètent
cette qualification et ne montrent ni interface client ni promesse de
livraison.

La relecture complète après correction ne révèle aucune contradiction entre
l’ouverture, les neuf sections, la FAQ, l’outil, le Markdown, les sources, le
CTA ou les visuels. Aucun défaut factuel ou de calcul n’a nécessité un retour à
P1, P2 ou P3.

### O7. Contrôles P4

| Contrôle                    | Résultat                                                                                                     |
| --------------------------- | ------------------------------------------------------------------------------------------------------------ |
| manifeste P3                | contrôle initial consigné 15/15 ; SHA externe exact ; reprise : 12 chemins inchangés et 3 écarts P4 attendus |
| Vitest ciblé                | vert : 3 fichiers, 62 tests, 0 échec                                                                         |
| ESLint du slug              | vert : aucune erreur ni alerte                                                                               |
| TypeScript dépôt `--noEmit` | vert : aucune erreur                                                                                         |
| Prettier ciblé              | vert sur le journal et les fichiers du slug                                                                  |
| XML des trois SVG           | vert                                                                                                         |
| dimensions des trois WebP   | 1600×900, 1200×900 et 900×900                                                                                |
| inspection visuelle         | trois WebP lisibles, cadrés et explicitement fictifs                                                         |
| `git diff --check`          | aucun défaut d’espace ou marqueur sur le périmètre P4                                                        |
| React et Next.js            | frontière serveur/client, métadonnées et clés stables                                                        |
| périmètre                   | aucun moteur, test, visuel, fichier partagé, build ou Git                                                    |

### O8. Sortie officielle P4

PASSE_4_TERMINEE

- motifs repérés : transitions abstraites répétées, phrases parlant de la
  page, métaphore de portes décorative et une conséquence trop vague ;
- corrections : douze reformulations locales dans la page et l’outil, sans
  modification du fond ;
- passages conservés : listes actionnables, contrastes de sécurité, vocabulaire
  contractuel, sources et H2 autonomes ;
- faits inchangés : statuts, calculs, limites, sources, options et CTA ;
- exemples contrôlés : RelaisPro reste entièrement fictif dans la prose et les
  trois visuels ;
- contradictions finales : aucune ;
- tests : 62 verts, ESLint, TypeScript, Prettier, XML, dimensions et diff
  contrôlés ;
- manifeste P4 :
  `docs/research/manifests/combien-de-temps-developper-saas-p4.sha256`, mêmes
  15 chemins que P3, hors manifestes.

## P. Intégration locale et BAT de l’artefact de production

### P1. Autorisation et état d’entrée

Le contrôle transversal indépendant `/root/delai_saas_q_transversal` a relu le
snapshot P4 sans le modifier. Son verdict est `GO_QUALITE_GUIDE` :

- score : **95/100** ;
- scorecard : **19/20** ;
- P0 : **0** ;
- P1 : **0** ;
- manifeste P4 : **15/15**, empreinte externe
  `902072b53a2f757eaf93b3233ea16e254a7e55451a73671e20515976ac2100fe` ;
- tests ciblés rejoués par Q : **62/62**.

Q a laissé un P2 documentaire sur l’absence de lien de profil dans la carte
auteur visible et deux P3 optionnels sur le lien CNIL direct et les attributs
d’erreur par champ. Aucun de ces constats ne rend le contenu trompeur ni
inutilisable. La page du slug n’a pas été modifiée après Q : le snapshot P4
reste donc la preuve du corps éditorial. Le présent manifeste d’intégration
gèle séparément les raccordements partagés et la correction print issue du
BAT.

Le registre partagé est passé de `PRET_A_INTEGRER` à
`INTEGRATION_EN_COURS` après acquisition atomique de `integration.lock` le
2 août 2026 à 22:38:56+02:00. Le verrou précédent, détenu par
`PRIMARY_ORCHESTRATOR`, a été respecté jusqu’à sa libération ; aucun fichier
partagé n’a été modifié en parallèle.

### P2. Métadonnées, historique et frontière de publication

L’entrée centrale ajoutée à `src/lib/guides.ts` porte :

- `title` et `heroTitle` :
  `Combien de temps faut-il pour développer un SaaS ?`, identiques au H1 et
  au titre de l’`Article` ;
- `metaDescription` : 131 caractères ;
- section : `Préparer son projet` ;
- trois images Article 16:9, 4:3 et 1:1 propres au slug ;
- statut : `ready-for-human-review`.

Le premier commit Git qui introduit la route historique est
`14a388b91c2199ba1309cba304653248d6baf084`, daté du
`2026-07-23T00:59:26+02:00`. Cet instant reproductible devient
`datePublished` : il prouve l’apparition dans le dépôt, pas un ancien
déploiement public. `dateModified: "2026-08-02T22:39:26+02:00"` date la
refonte locale intégrée ; elle ne revendique aucune modification du site
public.

La mesure sur l’article HTML servi donne **3 444 mots visibles** et
**17 minutes** à 200 mots par minute. Le post-build a d’abord refusé la valeur
provisoire de 34 minutes ; le registre a été corrigé à 17 puis l’artefact a été
entièrement reconstruit.

Le slug est retiré de `LEGACY_GUIDE_SLUGS` ; l’inventaire passe de 95 à 94.
La route locale répond en 200 et reste `noindex, nofollow`. Elle demeure
absente du hub publié, du sitemap et de `llms.txt`. Ce lot n’autorise ni
déploiement, ni publication, ni indexation.

### P3. Intégration partagée et maillage entrant

Deux liens contextuels entrants sont ajoutés :

1. depuis `valider-idee-saas-avant-developper`, après la transformation d’une
   idée validée en cahier des charges comparable ;
2. depuis `cahier-des-charges-saas`, lorsque le même périmètre devient l’entrée
   du calendrier.

`src/lib/guides.test.ts` contrôle ces deux sources, l’entrée centrale, les
images et la présence de l’icône `Timer`. Le contrat de destinations du guide
`cahier-des-charges-saas` autorise explicitement ce nouveau lien. Aucune route
de service, sitemap, page robots ou fichier `llms.txt` n’est édité à la main.

### P4. Batterie reproductible

| Contrôle | Résultat final |
| --- | --- |
| `npm ci` | **PASS — 758 paquets installés** |
| `git diff --check` | **PASS** |
| ESLint des fichiers modifiés | **PASS** |
| TypeScript `--noEmit` | **PASS** |
| tests ciblés d’intégration | **PASS — 5 fichiers, 79/79** |
| `npm run check:seo` | **PASS — 33 fichiers, 180/180** |
| `NODE_ENV=production npm run check:seo` | **PASS — 180/180** |
| `npm test` | **PASS — 91 fichiers, 775/775** |
| `NEXT_PUBLIC_ENV=production npm run build` | **PASS — 68 pages générées** |
| post-build SEO | **PASS — 44 URL, 27 liens `llms.txt`, 44 pages, 10 temps de lecture et 76 blocs JSON-LD** |

Le premier replay global a révélé que le test fermé des destinations du guide
SaaS précédent ne connaissait pas encore le nouveau lien. Le contrat a été
mis à jour puis les contrôles ont été rejoués. Le premier build a ensuite
refusé le temps de lecture provisoire ; la mesure servie a remplacé cette
valeur et le build final est vert.

`npm audit --omit=dev` signale **7 vulnérabilités hautes et 0 critique** dans
la chaîne existante : `brace-expansion`, `sharp`, `next`, `miniflare`,
`wrangler`, `@opennextjs/aws` et `@opennextjs/cloudflare`. Aucun fichier de
dépendances n’est modifié par ce lot. Aucun `npm audit fix --force` n’a été
exécuté, car la proposition inclut un changement de version majeur.

### P5. HTML, Open Graph et données structurées servis

Le serveur `next start` de l’artefact de production a été contrôlé sur
`/guides/combien-de-temps-developper-saas` :

- HTTP **200**, sans redirection ;
- un H1 exact : `Combien de temps faut-il pour développer un SaaS ?` ;
- titre, description, canonical et robots identiques au registre ;
- canonical :
  `https://hagnere-code.ai/guides/combien-de-temps-developper-saas` ;
- robots : `noindex, nofollow` ;
- Open Graph et Twitter présents ;
- OG locale : HTTP **200**, `image/png`, **1200 × 630** ;
- JSON-LD : `Article` et `BreadcrumbList` uniquement ;
- FAQ visible et deux liens entrants servis ;
- aucune mention ou implémentation XLS, XLSX ou CSV ;
- aucune présence du slug dans le hub, le sitemap ou `llms.txt`.

L’URL OG absolue vise le domaine canonique ; seule sa route locale sur
l’artefact est prouvée ici. L’HTML mesure 493 586 octets bruts et 67 166
octets transférés avec gzip. Le navigateur a observé 2 178 nœuds DOM, 40
ressources, 15 scripts et 3 images, sans image cassée, erreur console,
exception de page ou requête 4xx/5xx.

### P6. BAT Chrome 151

Les 20 couples largeur × thème ont été rejoués sur l’artefact final :

- largeurs : 320, 360, 390, 430, 640, 768, 1024, 1280, 1440 et 1600 px ;
- thèmes : clair et sombre par la vraie bascule du site ;
- aucun débordement horizontal, aucune image cassée et aucun élément fixe ou
  sticky plus large que la fenêtre ;
- zoom 200 % : largeur CSS effective de 640 px, sans débordement ;
- police racine portée de 16 à 24 px : aucun débordement ; les boutons et
  champs visibles du planificateur restent à 66 px de haut au minimum ;
- paysage 844 × 390 : aucun débordement ;
- préférence de mouvement réduit : page stable ;
- focus clavier : contour visible de 2 px ; activation par espace du bouton
  d’exemple ;
- arbre d’accessibilité : H1 exact, tableaux nommés, champs, boutons, zones de
  statut et préformaté Markdown nommés.

Les états du planificateur ont été rejoués :

- vide : `STOP_REQUIRED_INPUTS_UNKNOWN`, aucune tâche et aucun scénario ;
- exemple RelaisPro : `CALENDAR_CANDIDATE_FOR_REVIEW`, 6 tâches et 4
  scénarios, avec les totaux J+20, J+29, J+41 et J+51 ;
- saisie extrême `9000000000.1234567` :
  `STOP_INVALID_DEPENDENCY_NETWORK`, aucun scénario ni raisonnement inverse ;
- réinitialisation : retour au STOP, champs et tâches vidés, annonce en zone
  vive ;
- copie : le Chrome headless interdit le presse-papiers système
  (`NotAllowedError`). Les branches navigateur de succès et d’échec ont donc
  été rejouées avec un adaptateur local déterministe : 4 431 caractères
  copiés et annonces accessibles exactes. La permission système réelle reste
  une limite de l’environnement BAT, pas une preuve de production.

Les captures 320 px clair, outil 390 px sombre, outil 768 px clair et héros
1440 px sombre ont été inspectées : texte lisible, hiérarchie intacte, champs
utilisables, CTA non tronqués et aucun chevauchement bloquant.

### P7. BAT impression et correction issue du rendu

Le premier PDF Chrome a montré le lien d’évitement fixe « Aller au contenu
principal » sur plusieurs pages. Retirer le focus ne suffisait pas : Chrome le
réactivait pendant la composition imprimée. `src/app/globals.css` masque
désormais `.skip-to-content` sous `@media print` et le contrat est protégé par
un test dans `accessibility-contract.test.tsx`.

Après reconstruction, le PDF final est balisé, comporte 34 pages au format
Letter et ne montre plus ce lien. Les pages 1, 15, 25 et 34 ont été rendues en
PNG et inspectées : titres, tableaux, calculs, encadrés et pied de page sont
lisibles, sans texte coupé, chevauchement ni carré noir. La dernière page
contient seulement la fin du pied de page ; ce blanc résiduel n’altère aucun
contenu.

### P8. État exact avant contre-audit

- qualité éditoriale P4 + Q : **GO 95/100** ;
- intégration locale, tests, build, HTML, responsive et impression : **PASS** ;
- manifeste d’intégration : à générer sur l’état exact ci-dessus ;
- staging et contre-audit indépendant : à réaliser ;
- commit : non effectué ;
- push : non effectué ;
- déploiement : non effectué ;
- publication : non effectuée ;
- indexation : non vérifiée.

### P9. Correction de lisibilité et nouveau snapshot — 18 août 2026

Le texte public n'affiche plus les codes internes de moteur
`STOP_REQUIRED_INPUTS_UNKNOWN`, `STOP_INVALID_DEPENDENCY_NETWORK` ou
`CALENDAR_CANDIDATE_FOR_REVIEW`. Ils restent stables dans la logique et les
tests, mais l'interface, le Markdown copiable, l'OG et l'illustration 1:1 les
traduisent en français : informations à compléter, ordre des tâches à
corriger, disponibilités à clarifier et calendrier prêt à relire.

Le contrôle différentiel couvre la page, l'outil, le moteur, le Markdown, les
tests et les visuels. L'ouverture contient 147 mots avant le premier tableau,
répond directement et ne place plus un vocabulaire de statut devant la
décision. Résultats : tests ciblés 62/62, `check:seo` 206/206, suite globale
1 163/1 163, ESLint, TypeScript et build de production verts ; audit npm à
zéro vulnérabilité. P0 : 0. P1 : 0.

Le manifeste P4 est remplacé par le snapshot exact de cette correction. Le
guide reste `PUBLISHED`; le déploiement de cette révision doit encore être
vérifié publiquement. Cette vérification ne prouvera pas son indexation Google.
