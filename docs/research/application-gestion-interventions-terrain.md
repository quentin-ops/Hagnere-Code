# Dossier de recherche — Application de gestion des interventions terrain

> Ce dossier prépare le premier guide du lot de cinq lancé le 22 juillet 2026.
> Il sépare les faits vérifiables des choix éditoriaux et empêche de transformer
> une liste de fonctions en conseil d’achat.

Statut actuel : **publiable — validation éditoriale déléguée**.

## Journal des quatre passes

Propriétaire éditorial unique : **agent racine Codex**.

| Passe                        | État                     | Date       | Responsable                           | Snapshot                                                        | Blocages |
| ---------------------------- | ------------------------ | ---------- | ------------------------------------- | --------------------------------------------------------------- | -------- |
| 1. Recherche                 | Terminée — porte validée | 2026-07-22 | Agent recherche P1 puis agent racine  | `manifests/application-gestion-interventions-terrain-p1.sha256` | Aucun    |
| 2. Rédaction et intégration  | Terminée — porte validée | 2026-07-22 | Agent racine Codex                    | `manifests/application-gestion-interventions-terrain-p2.sha256` | Aucun    |
| 3. Contre-audit indépendant  | Terminée — porte validée | 2026-07-22 | Agent indépendant `audit_app_terrain` | `manifests/application-gestion-interventions-terrain-p3.sha256` | Aucun    |
| 4. Plume humaine et contrôle | Terminée — porte validée | 2026-07-22 | Agent racine Codex                    | `manifests/application-gestion-interventions-terrain-p4.sha256` | Aucun    |

## 1. Fiche d’identité

| Champ                            | Décision documentaire                                                                                                                                                                                                          |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Slug                             | `application-gestion-interventions-terrain`                                                                                                                                                                                    |
| Requête principale qualitative   | application gestion interventions terrain                                                                                                                                                                                      |
| Moment du parcours               | Comprendre le besoin, comparer les réponses et préparer un premier périmètre                                                                                                                                                   |
| Lecteur précis                   | Dirigeant d’une PME de maintenance, dépannage, installation ou service terrain dont le bureau et les techniciens échangent encore par téléphone, messages, papier ou fichiers séparés                                          |
| Situation déclenchante           | Le planning change, l’information circule mal, le compte rendu revient tard ou incomplet et la facturation attend la ressaisie du bureau                                                                                       |
| Phrase qu’il dirait au téléphone | « Mes techniciens ont les informations sur leur téléphone ou sur papier, le bureau ne sait pas toujours où en est l’intervention et on perd du temps avant de facturer. De quel outil avons-nous vraiment besoin ? »           |
| Décision principale              | Corriger d’abord l’organisation actuelle, essayer un logiciel standard, le connecter aux outils existants ou faire développer une application lorsque les règles propres à l’entreprise restent impossibles à gérer proprement |
| Niveau de connaissance initial   | Le lecteur connaît parfaitement ses interventions, mais pas le vocabulaire des logiciels de gestion terrain                                                                                                                    |
| Action autonome                  | Décrire une intervention ordinaire et cinq cas difficiles, de la demande initiale aux informations remises à la facturation                                                                                                    |
| Bon fit Hagnéré Code             | Plusieurs rôles, règles stables, ressaisies récurrentes, connexions nécessaires ou travail mobile mal couvert par les logiciels plausibles                                                                                     |
| Mauvais fit                      | Processus encore changeant, problème limité à un formulaire ou à un réglage, logiciel standard satisfaisant, ou absence de responsable interne                                                                                 |
| Hors périmètre                   | Comparatif de marques exhaustif, prix universel, conseil social individualisé, suivi permanent des salariés, optimisation algorithmique des tournées, facturation électronique complète                                        |
| Date et mode de recherche        | 22 juillet 2026, SERP française qualitative et sources primaires ; aucun volume Search Console ou Keyword Planner disponible                                                                                                   |

### Questions indispensables

1. Que doit relier une application de gestion d’interventions ?
2. Quels rôles et quelles informations faut-il prévoir du bureau au terrain ?
3. Comment travailler lorsque le réseau disparaît ou qu’une intervention change ?
4. Faut-il acheter un logiciel existant, le connecter ou développer du sur-mesure ?
5. Que tester avant d’équiper toute l’équipe ?
6. Quelles données ne faut-il pas collecter par réflexe ?
7. Que doit recevoir la facturation sans transformer le guide en projet comptable ?

### Score de lancement

Le score priorise le sujet ; il ne prédit ni trafic, ni classement, ni ventes.

| Critère                          |       Note | Justification                                                                                                                                                     |
| -------------------------------- | ---------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Adéquation avec une offre vendue |      25/25 | Prolongement direct de l’offre d’outils internes sur mesure                                                                                                       |
| Proximité d’une demande de devis |      24/25 | Le lecteur décrit un problème opérationnel et peut déjà rechercher une solution                                                                                   |
| Preuve qualitative de demande    |      11/15 | La SERP actuelle contient des éditeurs spécialisés et des formulations planning, mobile, compte rendu et facturation ; aucun volume propriétaire n’est disponible |
| Preuve ou outil original         |      15/15 | Parcours d’une intervention, carte des rôles et cinq essais difficiles reproductibles                                                                             |
| Différenciation                  |      10/10 | Le guide cadre un flux terrain précis ; il ne refait ni le diagnostic général, ni Excel, ni le cahier des charges générique                                       |
| Maillage et CTA utile            |      10/10 | Liens naturels vers automatisation, choix d’un prestataire, cahier des charges, ROI et service outils internes                                                    |
| **Total**                        | **95/100** | Sujet maintenu sans promesse sur la demande réelle                                                                                                                |

## 1 bis. Contrat de langage humain

**Réponse attendue en une phrase :** une application utile relie la demande,
le planning, les informations remises au technicien, le compte rendu et la
suite administrative ; testez d’abord ce parcours dans un logiciel existant et
ne développez du sur-mesure que si vos règles stables restent mal couvertes.

**Terme central :** une application de gestion des interventions est l’outil
partagé par le bureau et les équipes mobiles pour préparer, réaliser, suivre et
terminer une intervention. Elle peut être un logiciel déjà disponible, un
assemblage connecté ou une application créée pour l’entreprise.

**Mots ordinaires à privilégier :** appel client, adresse, urgence, planning,
technicien, matériel, photo, travail fait, travail restant, compte rendu,
signature, retour au bureau, facture, erreur, absence de réseau.

**Mots à traduire ou éviter à l’ouverture :** FSM, workflow, dispatch, ticket,
SLA, mobilité, orchestration, géolocalisation temps réel, synchronisation
bidirectionnelle, ERP, API.

### Projet des 150 premiers mots

Le lecteur doit reconnaître les appels, messages, feuilles et ressaisies qui
font perdre l’état réel d’une intervention. Le texte explique ensuite ce que
l’application relie, donne la réponse courte — tester un parcours avant de
développer — et annonce les trois choix : réparer l’existant, prendre un outil
standard ou construire ce qui manque.

### Test sujet, action, résultat préparé pour P4

| Formulation abstraite à bannir | Qui agit ?                 | Action concrète                                                           | Résultat attendu                          | Formulation humaine prévue                                                                                 |
| ------------------------------ | -------------------------- | ------------------------------------------------------------------------- | ----------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| Optimiser le workflow terrain  | Le bureau et le technicien | Suivent la même intervention de sa création à sa clôture                  | Chacun sait ce qu’il doit faire           | « Suivez la même intervention depuis l’appel du client jusqu’aux informations envoyées à la facturation. » |
| Fluidifier la communication    | Le coordinateur            | Modifie l’horaire et vérifie que le technicien reçoit la nouvelle version | Le changement n’est pas perdu             | « Déplacez une intervention urgente et vérifiez ce que voit le technicien avant de partir. »               |
| Digitaliser les comptes rendus | Le technicien              | Saisit le travail fait, les pièces et la suite sur place                  | Le bureau peut contrôler puis transmettre | « Faites remplir un compte rendu sur téléphone, y compris lorsque le réseau disparaît. »                   |
| Centraliser la donnée          | L’entreprise               | Désigne l’information de référence et qui peut la modifier                | Les versions contradictoires diminuent    | « Décidez où se trouve l’adresse à jour et qui peut la corriger. »                                         |
| Assurer la traçabilité         | Le responsable             | Consulte les changements utiles et leurs auteurs                          | Une erreur peut être comprise             | « Gardez la date et l’auteur des changements qui affectent le client, le planning ou la facturation. »     |

## 2. Frontières et anti-cannibalisation

| Page voisine                             | Intention détenue                                                 | Différence du nouveau guide                                                                                | Lien prévu                                               |
| ---------------------------------------- | ----------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| `signes-besoin-logiciel-metier`          | Savoir si les outils actuels créent un problème assez sérieux     | Ici, décrire précisément une activité d’interventions et l’outil qui peut la relier                        | Lien entrant depuis les situations réelles               |
| `automatiser-processus-metier`           | Choisir un processus à automatiser                                | Ici, suivre un seul type de dossier entre bureau et terrain, avec ses exceptions mobiles                   | Lien sortant vers la priorisation                        |
| `transformer-excel-en-application`       | Remplacer un fichier Excel devenu fragile                         | Excel n’est qu’un outil possible parmi téléphone, papier, messages et logiciels séparés                    | Lien seulement si le planning dépend d’un fichier        |
| `cahier-des-charges-application-metier`  | Rédiger le besoin complet d’une application                       | Le présent guide produit la matière métier avant le cahier des charges                                     | Lien sortant après les essais                            |
| `choisir-prestataire-application-metier` | Comparer des prestataires                                         | Le présent guide aide à définir le même cas d’intervention à leur soumettre                                | Lien sortant final                                       |
| Futur `digitaliser-bons-intervention`    | Remplacer précisément le bon papier et sa validation              | Ici, le bon n’est qu’un passage de main dans un parcours plus large, du planning à la suite administrative | Ne pas détailler le modèle de bon ni sa valeur probante  |
| Futur `logiciel-planning-sur-mesure`     | Décider si les règles de planification justifient un outil adapté | Ici, le planning n’est qu’une étape et aucun moteur d’affectation ou calcul de tournée n’est conçu         | Renvoyer vers ce futur guide pour la logique de planning |
| `/services/outils-internes-sur-mesure`   | Intention transactionnelle de développement                       | Le guide reste une aide à la décision et peut conclure en faveur d’un logiciel standard                    | Sortie commerciale après le verdict                      |

**Justification d’une URL distincte :** aucun guide actuel ne suit ensemble le
planning, le travail mobile, le compte rendu et la transmission à la
facturation d’une entreprise d’interventions.

## 3. Demande et vocabulaire observés

La SERP française du 22 juillet 2026 est principalement occupée par des
éditeurs de logiciels. Les promesses récurrentes portent sur le planning, le
suivi, l’usage mobile, le fonctionnement hors connexion, les photos, les
rapports et la facturation. Cette observation confirme le vocabulaire du
problème, mais pas la supériorité d’une marque ni le besoin de sur-mesure.

Questions qualitatives retenues :

- comment gérer le planning des techniciens ;
- comment transmettre les bonnes informations au terrain ;
- que faire sans réseau ;
- comment éviter de ressaisir le compte rendu avant la facture ;
- quel logiciel choisir pour des interventions ;
- quand une application personnalisée devient-elle justifiée ?

Les volumes, difficultés, positions et coûts publicitaires ne sont pas connus.

## 4. Fiche de preuves

| Affirmation utilisable                                                                                                                                                                                     | Source primaire                                                                                                                                                                             | Nature et limite                                                                                                                  | Conséquence lecteur                                                                                   |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| Une application mobile peut accéder à la localisation, aux photos, au microphone ou au stockage ; chaque permission doit être choisie selon le besoin et dans sa version la moins intrusive possible       | [CNIL — permissions des applications mobiles, 14 janvier 2025](https://www.cnil.fr/fr/permissions-applications-mobiles-recommandations-de-la-cnil-pour-respecter-la-vie-privee)             | Recommandations et rappel du principe de minimisation ; ne vaut pas analyse juridique du projet                                   | Ne demander ni GPS permanent, ni galerie complète, ni microphone par défaut                           |
| Une permission technique du téléphone ne constitue pas toujours un consentement valable au sens du RGPD                                                                                                    | Même source CNIL                                                                                                                                                                            | Le fondement dépend de la finalité réelle ; ne pas imposer le consentement comme base universelle                                 | Décrire le traitement et son fondement au lieu de se fier à la fenêtre du téléphone                   |
| Un dispositif de contrôle de l’activité des salariés doit être justifié et proportionné, porté à leur connaissance et soumis aux représentants du personnel dans les cas prévus                            | [CNIL — contrôle de l’activité des personnes employées, 9 juillet 2026](https://www.cnil.fr/fr/controle-de-lactivite-des-personnes-employees)                                               | La qualification dépend de l’usage réel ; la fiche mentionne notamment le CSE pour les entreprises privées d’au moins 50 salariés | Examiner aussi un statut ou un horaire s’il peut servir à suivre une personne                         |
| Pour les appareils mobiles, la CNIL recommande notamment de limiter le stockage, prévoir verrouillage et chiffrement, informer sur la conduite à tenir en cas de perte et encadrer l’effacement à distance | [CNIL — sécuriser l’informatique mobile, 14 mars 2024](https://www.cnil.fr/fr/securite-securiser-linformatique-mobile)                                                                      | Les mesures exactes dépendent du risque, de l’appareil et de l’usage éventuel d’un téléphone personnel                            | Ajouter un essai de perte ou vol et vérifier réellement ce qui reste accessible hors connexion        |
| Un service numérique doit partir d’un besoin concret et être testé avec ses futurs utilisateurs                                                                                                            | [DesignGouv — bien concevoir un service numérique](https://design.numerique.gouv.fr/bien-concevoir/)                                                                                        | Guide destiné au service public, utilisé ici comme discipline de conception et non comme obligation privée                        | Observer les coordinateurs et techniciens avant de généraliser l’outil                                |
| L’authentification multifacteur s’applique aussi aux accès à des applications web et aux comptes privilégiés                                                                                               | [MesServicesCyber — authentification multifacteur et mots de passe](https://messervices.cyber.gouv.fr/guides/recommandations-relatives-lauthentification-multifacteur-et-aux-mots-de-passe) | Guide de sécurité général ; le niveau exact dépend du risque                                                                      | Protéger particulièrement les comptes d’administration sans transformer ce guide en audit de sécurité |

### Faits, déductions et recommandations

- **Fait vérifié :** des permissions mobiles peuvent donner accès à des données
  sensibles ; la CNIL recommande la permission la moins intrusive qui répond
  au besoin.
- **Fait vérifié :** un dispositif qui permet de contrôler l’activité doit être
  justifié, proportionné et porté à la connaissance des personnes concernées ;
  les représentants du personnel interviennent dans les cas prévus.
- **Fait vérifié :** l’informatique mobile exige d’anticiper la perte ou le vol,
  y compris pour les données stockées localement.
- **Déduction :** un simple statut « en route / arrivé / terminé » peut parfois
  répondre au besoin sans transmettre une position continue.
- **Recommandation Hagnéré Code :** suivre une intervention complète et cinq
  cas difficiles avant de choisir un produit ou de demander un devis.
- **Recommandation Hagnéré Code :** comparer dans cet ordre une correction de
  l’organisation, un logiciel standard, une connexion entre outils et le
  sur-mesure.

### Contradictions et informations à ne pas publier

- aucun gain de temps, taux d’erreur, délai de facturation ou retour sur
  investissement universel ;
- aucune taille d’équipe à partir de laquelle une application deviendrait
  obligatoire ;
- aucune marque déclarée meilleure sur la seule base de sa page commerciale ;
- le mode hors connexion ne sera pas présenté comme nécessaire à toutes les
  entreprises ;
- une signature à l’écran ne sera pas présentée comme preuve juridique
  suffisante dans tous les litiges ;
- une position GPS ne sera pas présentée comme nécessaire pour prouver qu’un
  technicien a travaillé ;
- aucune conformité RGPD ou sociale déduite d’une checklist.

## 5. Empreinte éditoriale à ne pas reproduire

| Guide voisin                                 | Ouverture                               | Progression                                | Dispositif à ne pas copier                    |
| -------------------------------------------- | --------------------------------------- | ------------------------------------------ | --------------------------------------------- |
| `signes-besoin-logiciel-metier`              | Trois situations où les outils craquent | Six réponses possibles avant le sur-mesure | Diagnostic général en nombreuses branches     |
| `automatiser-processus-metier`               | Temps perdu dans une tâche répétée      | Choix puis mesure d’un processus           | Matrice gain/risque                           |
| `choisir-prestataire-application-metier`     | Devis impossibles à comparer            | Même mini-cas et mêmes questions           | Cartes « réponse utile / à préciser / trace » |
| `remplacer-microsoft-access-application-web` | Base Access devenue critique            | Inventaire puis trajectoires de migration  | Inventaire de tables, formulaires et VBA      |

**Tension motrice :** une intervention ne se termine pas lorsque le technicien
quitte le site ; elle se termine lorsque l’entreprise sait ce qui a été fait,
ce qui reste, ce qui doit être envoyé au client et ce que la facturation peut
reprendre.

**Progression propre :** suivre une intervention de bout en bout, distribuer les
responsabilités, faire échouer le parcours avec cinq cas difficiles, puis
choisir le niveau de solution.

**Artefact signature :** une fiche « une intervention, cinq passages de main »
et cinq essais : changement urgent, absence de réseau, travail incomplet,
retour nécessaire et téléphone perdu.

## 6. Plan annoté

| Section provisoire                                                             | Question résolue                       | Preuve ou exemple                                                   | Conséquence                                           | Format                       |
| ------------------------------------------------------------------------------ | -------------------------------------- | ------------------------------------------------------------------- | ----------------------------------------------------- | ---------------------------- |
| Votre problème n’est pas « le papier », mais l’intervention coupée en morceaux | Que doit réellement résoudre l’outil ? | Situation ordinaire du bureau et du terrain                         | Définir un résultat plutôt qu’une liste de fonctions  | Ouverture narrative          |
| Suivez une intervention du premier appel à la facturation                      | Quelles étapes relier ?                | Demande, préparation, planification, terrain, clôture, transmission | Repérer chaque rupture et responsable                 | Parcours en cartes           |
| Donnez à chacun uniquement ce qu’il doit voir et modifier                      | Qui utilise quoi ?                     | Coordinateur, technicien, responsable, administratif, client        | Éviter un écran unique et des droits excessifs        | Carte des rôles              |
| Faites échouer le parcours avant le pilote                                     | Quels cas tester ?                     | Urgence, hors ligne, inachevé, retour, appareil perdu               | Transformer les exceptions en critères d’acceptation  | Cinq essais numérotés        |
| Comparez quatre réponses, pas seulement deux logiciels                         | Faut-il développer ?                   | Processus corrigé, standard, connexion, sur-mesure                  | Garder l’option la moins coûteuse qui traite les cas  | Comparaison mobile en cartes |
| Lancez un pilote sur un vrai type d’intervention                               | Comment réduire le risque ?            | Utilisateurs réels et données de test autorisées                    | Décider de généraliser, corriger ou arrêter           | Plan d’essai                 |
| Protégez les salariés, clients et accès                                        | Quelles données éviter ?               | CNIL mobile et géolocalisation, MesServicesCyber                    | Retirer les permissions inutiles et limiter les rôles | Prose sourcée                |
| Remettez au prestataire un dossier qu’il peut chiffrer                         | Que préparer ensuite ?                 | Une intervention, cinq cas, rôles, outils et inconnues              | Demander des réponses comparables                     | Checklist finale             |
| Sources et limites                                                             | Que prouvent les sources ?             | Sources primaires datées                                            | Revalidation future                                   | Liste courte                 |

## 7. Ressource, conversion et maillage

Une ressource téléchargeable séparée n’est pas nécessaire. La fiche de parcours
et les cinq essais seront entièrement visibles et copiables dans l’article.
Elle ne collectera aucune donnée et ne promettra aucun diagnostic automatique.

**Action sans contact :** réunir un coordinateur, un technicien et la personne
qui prépare la facture, puis remplir la fiche sur une intervention ordinaire.

**Conclusion « ne pas investir » possible :** oui. Une règle de planning, un
formulaire mobile ou une connexion existante peut résoudre le problème sans
application sur mesure.

**CTA envisagé :** « Faire étudier mon parcours d’intervention » vers
`/demarrer-un-projet`, après la décision autonome. Résultat annoncé : transmettre
le parcours et les cas difficiles pour recevoir une première orientation ;
aucun audit gratuit, délai ou gain garanti.

**Maillage sortant :** `automatiser-processus-metier`,
`cahier-des-charges-application-metier`, `calculer-roi-application-metier`,
`choisir-prestataire-application-metier`, `/services/outils-internes-sur-mesure`.

**Maillage entrant prévu :** ajout contextuel dans
`signes-besoin-logiciel-metier` depuis la description de trois situations
réelles et dans aucun autre fichier si ce lien suffit.

## 8. Porte de sortie P1

- [x] lecteur, situation et décision unique définis ;
- [x] score supérieur à 70 documenté sans données inventées ;
- [x] URL distincte justifiée ;
- [x] recherche qualitative actuelle et limites explicites ;
- [x] sources primaires utilisables près des affirmations ;
- [x] faits, déductions et recommandations séparés ;
- [x] plan distinct des guides voisins ;
- [x] action autonome, bon fit et mauvais fit définis ;
- [x] retour du chercheur indépendant intégré ;
- [x] manifeste P1 créé ;
- [x] journal passé à `Terminée — porte validée`.

## 9. Rapports de sortie

### Rapport P1 — Recherche

```text
PASSE 1 TERMINÉE
Slug : application-gestion-interventions-terrain
Lecteur et phrase réelle : dirigeant d’une entreprise d’interventions qui voit
le planning, les informations terrain, le compte rendu et la facturation se
séparer ; formulation de travail issue de la SERP, pas d’un entretien réel.
Décision : organiser l’existant, choisir un logiciel standard, connecter les
outils ou développer seulement les règles stables qui restent mal couvertes.
Angle et forme dominante : une intervention complète, cinq passages de main et
cinq cas difficiles ; cartes mobiles plutôt qu’un catalogue de fonctions.
Pages proches et différence : diagnostic général, automatisation, Excel et
cahier des charges exclus ; le guide suit le terrain jusqu’à la facturation.
Sources décisives : CNIL permissions mobiles, contrôle de l’activité et sécurité
mobile, DesignGouv, MesServicesCyber ; vérifiées le 22 juillet 2026.
Incertitudes exclues : volumes de recherche, gains de temps, seuil de taille,
preuve juridique d’une signature, efficacité d’une géolocalisation.
Action autonome et CTA possible : décrire une intervention et ses cas d’échec ;
CTA vers l’étude du parcours seulement après cette action.
Plan : parcours, rôles, cas difficiles, quatre options, pilote, données, dossier
à remettre.
Snapshot : manifests/application-gestion-interventions-terrain-p1.sha256
```

### Rapport P2 — Rédaction et intégration

```text
PASSE 2 TERMINÉE
Fichiers créés ou modifiés : page, image sociale, registre, lien entrant depuis
signes-besoin-logiciel-metier et présent dossier.
Ouverture et réponse : téléphone, papier, planning et ressaisie précèdent la
définition ; logiciel standard, connexion et sur-mesure restent ouverts.
Forme propre au sujet : cinq passages de main, rôles, cinq essais difficiles
et quatre niveaux de solution, tous lisibles en cartes mobiles.
Exemples ou calculs : aucun chiffre ou cas client ; les situations sont des
essais à exécuter avec des données fictives.
Sources visibles : CNIL permissions mobiles, contrôle de l’activité et sécurité
mobile, DesignGouv et MesServicesCyber placés près des affirmations concernées.
Action autonome, bon fit et mauvais fit : fiche copiable, pilote avec possibilité
d’arrêt et logiciel standard explicitement préférable lorsqu’il traite les cas.
CTA et destination : un seul CTA après sept sections, vers /demarrer-un-projet ;
il annonce une orientation pouvant conclure à l’absence de développement.
Contrôles rapides : git diff --check, ESLint ciblé et TypeScript réussis. Après
un premier refus P3, la source sociale a été actualisée, un cinquième essai sur
le téléphone perdu a été ajouté, la FAQ signature a été retirée et les deux
frontières SEO futures ont été documentées avant ce nouveau gel P2.
Snapshot : manifests/application-gestion-interventions-terrain-p2.sha256
```

### Rapport P3 — Contre-audit indépendant

```text
PASSE 3 TERMINÉE
Verdict initial : FAIL, 0 P0, 4 P1, score 16/20.
Corrections : remplacement d’une ancienne fiche CNIL par la fiche du 9 juillet
2026 sur le contrôle de l’activité ; ajout d’un cinquième essai sur le téléphone
perdu et d’une source CNIL sur la sécurité mobile ; suppression de la FAQ sur
la portée juridique d’une signature ; retrait d’une généralisation sur le
marché ; frontières ajoutées avec les futurs guides bons d’intervention et
planning sur mesure ; trois formulations rendues plus exactes.
Revalidation indépendante : PASS, 0 P0, 0 P1, score 20/20.
Contrôles rejoués : ESLint ciblé, TypeScript et git diff --check réussis.
Limite : aucun test par un lecteur humain réel n’est revendiqué ; le contrôle
visuel en navigateur appartient à P4.
Snapshot : manifests/application-gestion-interventions-terrain-p3.sha256
```

### Rapport P4 — Plume humaine et contrôle final

```text
PASSE 4 TERMINÉE
Passe de plume : jargon CRM retiré, absolu « montre toujours » assoupli et
dates des sources CNIL rendues visibles. L’ouverture reste centrée sur la
journée du dirigeant, puis donne la réponse avant le sommaire.
Contrôles bloquants : check:seo 184/184, ESLint ciblé, TypeScript, npm test
409/409, build Next.js de production et git diff --check réussis.
Temps de lecture : le premier contrôle d’artefact a refusé 15 minutes pour
2 486 mots visibles ; le registre a été corrigé à 12 minutes et le build final
a validé 115 routes ainsi que l’artefact de recherche.
Contrôle navigateur réel : 320, 390, 768, 1024 et 1440 px ; aucun débordement
de document après stabilisation, H1 et CTA visibles, cartes empilées à 320 px,
rendu large contrôlé et aucun message d’erreur ou avertissement en console.
Test réalisé par une personne réelle : non.
Décision de publication : autorisée explicitement par le commanditaire sur la
base du processus en quatre passes et du contre-audit indépendant ; cela ne
constitue ni un test lecteur réel ni une garantie d’indexation ou de résultat.
Verdict : publiable — validation éditoriale déléguée.
Score final : 20/20.
Snapshot : manifests/application-gestion-interventions-terrain-p4.sha256
```

## 10. Scorecard finale

| Axe         |      Note | Motif de validation                                                                    |
| ----------- | --------: | -------------------------------------------------------------------------------------- |
| Intention   |         2 | Situation, vocabulaire et décision d’un dirigeant d’entreprise d’interventions         |
| Décision    |         2 | Organisation, logiciel standard, connexion, sur-mesure ou arrêt restent possibles      |
| Pédagogie   |         2 | Définition immédiate, parcours en cinq étapes et mots ordinaires                       |
| Profondeur  |         2 | Rôles, cas difficiles, pilote, sécurité mobile et suite administrative                 |
| Preuve      |         2 | Sources primaires actuelles placées au niveau des affirmations sensibles               |
| Comparaison |         2 | Quatre réponses comparées sur les mêmes essais sans vainqueur artificiel               |
| Originalité |         2 | Cinq passages de main et cinq essais reproductibles                                    |
| Style       |         2 | Voix directe, phrases concrètes et répétitions contrôlées                              |
| Conversion  |         2 | Action autonome complète puis CTA unique, y compris si aucun développement n’est utile |
| SEO/produit |         2 | Intention distincte, lien entrant, métadonnées et rendu responsive vérifiés            |
| **Total**   | **20/20** | **P0 : 0 ; P1 : 0**                                                                    |
