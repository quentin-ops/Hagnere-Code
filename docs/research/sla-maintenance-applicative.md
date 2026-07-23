# Dossier de recherche — SLA de maintenance applicative

> Les quatre passes sont terminées. Les engagements, les définitions et le
> rendu ont été contre-audités puis contrôlés sous délégation éditoriale, sans
> test par un lecteur humain réel.

## Journal des quatre passes

Propriétaire éditorial unique : `/root/p1p2_batch3_decisions`

| Passe                        | État                     | Date            | Responsable                   | Snapshot                                                        | Blocages |
| ---------------------------- | ------------------------ | --------------- | ----------------------------- | --------------------------------------------------------------- | -------- |
| 1. Recherche                 | Terminée — porte validée | 23 juillet 2026 | `/root/p1p2_batch3_decisions` | `docs/research/manifests/sla-maintenance-applicative-p1.sha256` | Aucun    |
| 2. Rédaction et intégration  | Terminée — porte validée | 23 juillet 2026 | `/root/p1p2_batch3_decisions` | `docs/research/manifests/sla-maintenance-applicative-p2.sha256` | Aucun    |
| 3. Contre-audit indépendant  | Terminée — porte validée | 23 juillet 2026 | `/root/p2_batch3_apps`        | `docs/research/manifests/sla-maintenance-applicative-p3.sha256` | Aucun    |
| 4. Plume humaine et contrôle | Terminée — porte validée | 23 juillet 2026 | `/root`                       | `docs/research/manifests/sla-maintenance-applicative-p4.sha256` | Aucun    |

## 1. Fiche d’identité

```text
Slug : sla-maintenance-applicative
Statut actuel : publiable — validation éditoriale déléguée
Requête principale : SLA maintenance applicative
Moment du parcours : rédiger ou relire les engagements avant de signer une maintenance
Lecteur précis : dirigeant ou responsable opérationnel dont une application soutient facturation, commandes, production ou relation client
Situation déclenchante : le contrat promet une réponse sous quatre heures, mais une panne bloque les factures et personne ne sait quand l’activité doit reprendre ni quelles données peuvent être perdues
Décision principale après lecture : écrire des engagements compréhensibles sur les services couverts, les horaires, l’accusé de réception, le rétablissement, la restauration des données, la mesure et les conséquences
Niveau de connaissance au départ : connaît le mot SLA et quelques délais, mais confond réponse, diagnostic, contournement, rétablissement et correction définitive
5 questions indispensables : quel service doit fonctionner ? quand le chronomètre tourne-t-il ? quelle action est promise ? quand l’activité reprend-elle ? jusqu’à quel état les données sont-elles récupérées ?
3 objections ou craintes : « 99,9 % suffit » ; « une réponse sous quatre heures protège l’activité » ; « le prestataire peut garantir tout le système »
Action utile sans contact commercial : écrire la journée d’une panne réelle ou plausible, du premier utilisateur bloqué à la vérification des données
CTA possible : faire relire les engagements à partir d’un incident concret
Hors périmètre : conseil juridique personnalisé, rédaction contractuelle finale, garantie générique Hagnéré Code, disponibilité universelle, seuil RPO/RTO imposé
Date de la recherche : 23 juillet 2026
Responsable de la synthèse : /root/p1p2_batch3_decisions
```

## 2. Contrat de langage humain

- Phrase réelle : « Le contrat dit qu’on me répond en quatre heures. Est-ce que
  cela veut dire que mon application repart dans quatre heures ? »
- Réponse attendue : non. Un accusé de réception, le début du diagnostic, un
  fonctionnement provisoire, le retour du service, la récupération des données
  et la correction définitive sont six résultats différents.
- Définition simple : un SLA est la partie du contrat qui dit quel niveau de
  service est promis, comment il est mesuré et ce qui se passe s’il n’est pas
  tenu.
- Mots ordinaires : panne, bloqué, appel, réponse, reprise, données perdues,
  horaires, week-end, personne responsable, preuve, solution provisoire.
- Termes à traduire : SLA, SLI, SLO, disponibilité, criticité, RTO, RPO,
  astreinte, MTTA, MTTR, service credit, exclusion.
- Ouverture retenue : à 9 h 10, l’équipe ne peut plus facturer ; à 9 h 20, le
  ticket automatique est reçu. Le contrat a-t-il déjà tenu sa promesse ?

## 3. Cannibalisation

| Page existante                                | Intention                              | Différence nécessaire                                        | Maillage prévu                                                      |
| --------------------------------------------- | -------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------------- |
| `/guides/contrat-tma-application`             | Choisir le périmètre complet d’une TMA | Approfondir uniquement les niveaux de service et leur mesure | Renvoyer vers le contrat TMA pour exclusions, reprise et évolutions |
| `/guides/cout-maintenance-application-metier` | Comprendre le budget de maintenance    | Relier le prix au niveau de service réellement demandé       | Ne publier aucune fourchette de prix ici                            |
| `/guides/tma-ou-regie`                        | Choisir un mode de collaboration       | Définir ce que le contrat doit mesurer quel que soit le mode | Renvoyer uniquement si le lecteur hésite sur l’organisation         |
| `/guides/reprendre-logiciel-metier-existant`  | Sécuriser une reprise de logiciel      | Définir les engagements après la reprise                     | Exiger une phase de reprise si l’application n’est pas maîtrisée    |
| `/services/maintenance-evolution`             | Présenter l’offre                      | Donner une grille autonome avant contact                     | CTA unique après l’exercice                                         |

**Verdict :** guide distinct à condition de ne pas refaire le contrat TMA en
entier. Le centre de gravité est la chronologie d’une panne.

## 4. Fiche de preuves

| Affirmation utilisable                                                                                                                                                    | Catégorie        | Source primaire et passage                                                                                                     | Périmètre                                       | Consultation    | Limite                                                      | Conséquence lecteur                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------- | --------------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------ |
| Un SLO fixe une cible de fiabilité ; Google distingue cette cible du SLA, qui est un accord commercial avec une conséquence lorsque le service n’atteint pas l’engagement | Fait vérifié     | [Google SRE Workbook — Implementing SLOs](https://sre.google/workbook/implementing-slos/), introduction et note 2              | Pratique SRE et services numériques             | 23 juillet 2026 | Ce n’est pas une définition juridique française universelle | Le contrat doit relier mesure, cible et conséquence                            |
| Un indicateur centré sur l’utilisateur et couvrant le service rendu est plus utile qu’une moyenne de composants                                                           | Fait vérifié     | [Google SRE Workbook — Implementing SLOs](https://sre.google/workbook/implementing-slos/), sections sur les SLI et dépendances | Services logiciels                              | 23 juillet 2026 | Méthode technique, à adapter au métier                      | Mesurer « peut-on facturer ? » plutôt que seulement « le serveur répond-il ? » |
| Le RTO correspond à la durée pendant laquelle la récupération peut se poursuivre avant d’affecter les fonctions de l’organisation                                         | Fait vérifié     | [NIST CSRC — Recovery Time Objective](https://csrc.nist.gov/glossary/term/Recovery_Time_Objective), renvoi SP 800-34 Rev. 1    | Continuité et reprise                           | 23 juillet 2026 | Le NIST ne fixe aucun seuil universel                       | Le dirigeant choisit le délai à partir de l’impact métier                      |
| Le RPO désigne le point dans le temps jusqu’auquel les données doivent être récupérées après une interruption                                                             | Fait vérifié     | [NIST CSRC — Recovery Point Objective](https://csrc.nist.gov/glossary/term/recovery_point_objective), renvoi SP 800-34 Rev. 1  | Continuité et reprise                           | 23 juillet 2026 | Ce n’est pas la fréquence de sauvegarde à lui seul          | Écrire la perte de données tolérable, puis tester la restauration              |
| Un SLA public réel définit le service couvert, la période, la méthode de calcul, les exclusions, la demande du client et le crédit éventuel                               | Exemple officiel | [Google Maps Platform SLA](https://cloud.google.com/maps-platform/terms/sla)                                                   | Service Google Maps, pas maintenance sur mesure | 23 juillet 2026 | Ne pas recopier ses seuils ni ses recours                   | Un pourcentage seul ne constitue pas un engagement exploitable                 |

### Distinctions obligatoires

1. **Accusé de réception** : le ticket est enregistré.
2. **Prise en charge** : une personne qualifiée commence à agir.
3. **Diagnostic** : une cause ou une zone probable est identifiée.
4. **Contournement** : l’activité reprend autrement, avec des limites connues.
5. **Rétablissement** : le service utile fonctionne de nouveau.
6. **Restauration des données** : les données reviennent à un état convenu.
7. **Correction définitive** : la cause est traitée et la correction validée.

Ces événements ne doivent pas partager un mot vague comme « résolution » sans
définition contractuelle.

### Ce que les sources ne permettent pas d’affirmer

- aucune disponibilité minimale universelle ;
- aucun temps de prise en charge ou de rétablissement adapté à toutes les PME ;
- aucun RTO ou RPO standard ;
- aucune corrélation automatique entre prix élevé et rétablissement rapide ;
- aucune garantie couvrant les fournisseurs tiers sans contrat correspondant ;
- aucun recours juridique ou montant de pénalité générique ;
- aucune définition universelle de « critique », « ouvré » ou « indisponible ».

## 5. Chronologie métier à documenter

Le guide fera remplir une ligne pour chaque service important :

| Question                                        | Exemple de formulation, à adapter                               |
| ----------------------------------------------- | --------------------------------------------------------------- |
| Quel travail est bloqué ?                       | Émettre et envoyer une facture validée                          |
| Qui constate le problème ?                      | Utilisateur habilité ou supervision convenue                    |
| Comment l’alerte est-elle transmise ?           | Portail et téléphone pendant la plage couverte                  |
| Quand le délai commence-t-il ?                  | À réception d’une alerte contenant les informations minimales   |
| Qu’est-ce qu’une prise en charge ?              | Un intervenant nommé commence le diagnostic                     |
| Qu’est-ce qu’un rétablissement ?                | Une facture peut être validée, envoyée et retrouvée             |
| Quel fonctionnement provisoire est acceptable ? | Export manuel, avec rapprochement ultérieur                     |
| Jusqu’où récupérer les données ?                | Point temporel choisi par l’entreprise après analyse d’impact   |
| Quand le chronomètre s’arrête-t-il ?            | Résultat vérifié par la preuve définie, hors pauses acceptées   |
| Quelle conséquence en cas d’écart ?             | Escalade, analyse, plan correctif ou recours contractuel validé |

## 6. Exemple pédagogique prévu

**Exemple illustratif fictif :** « Aster Comptoir » utilise une application
pour valider et envoyer ses factures. À 9 h 10, les utilisateurs sont bloqués.
À 9 h 18, un ticket automatique confirme la demande. À 10 h 05, un technicien
commence le diagnostic. À 11 h 40, un export manuel permet d’envoyer les
factures urgentes. À 14 h 20, l’application repart. À 16 h, la dernière
synchronisation est vérifiée.

L’exemple ne suggère aucun délai recommandé. Il montre seulement pourquoi le
contrat doit nommer :

- la réception à 9 h 18 ;
- la prise en charge à 10 h 05 ;
- le contournement à 11 h 40 ;
- le rétablissement à 14 h 20 ;
- la vérification des données à 16 h ;
- la correction définitive, encore distincte.

## 7. Empreinte éditoriale

```text
Tension motrice : « réponse en quatre heures » ne dit pas quand l’entreprise retravaille.
Type d’ouverture : minute par minute pendant une panne de facturation.
Architecture générale : remonter la journée, définir chaque promesse, puis écrire une fiche de service.
Traitement de l’exemple : chronologie fictive, aucun seuil recommandé.
Rythme dominant : horloge, questions contractuelles en français courant et cartes de résultat.
Action utile : rédiger une page SLA sur un parcours critique.
Moment du CTA : après le test de la fiche sur trois incidents.
Mécanismes non repris : tableau de prix, pourcentage « idéal », matrice de criticité opaque, modèle juridique prêt à signer.
```

## 8. Plan annoté

| Section                                                       | Question résolue                                | Preuve ou exemple                                   | Conséquence                                | Format        |
| ------------------------------------------------------------- | ----------------------------------------------- | --------------------------------------------------- | ------------------------------------------ | ------------- |
| Le ticket est reçu, mais l’entreprise reste bloquée           | Pourquoi « réponse » ne suffit-elle pas ?       | Chronologie fictive                                 | Nommer le résultat attendu                 | Scène         |
| Sept moments différents pendant une panne                     | Quels mots faut-il distinguer ?                 | Définitions opérationnelles                         | Éviter « résolution » seul                 | Frise         |
| Commencez par les services réellement critiques               | Qu’est-ce qui mérite un engagement ?            | Parcours facturation                                | SLA par service, pas par application vague | Exercice      |
| Écrivez les horaires et le départ du chronomètre              | Quand le délai s’applique-t-il ?                | Cas soir, week-end, ticket incomplet                | Éviter le faux 24/7                        | Questions     |
| RTO et RPO répondent à deux pertes différentes                | Combien de temps et de données peut-on perdre ? | NIST, traduit                                       | Choisir selon l’impact                     | Deux cartes   |
| Un pourcentage de disponibilité ne raconte pas toute la panne | Pourquoi 99,x % est insuffisant seul ?          | SLA officiel comme anatomie                         | Définir mesure, période, exclusions        | Décomposition |
| Vérifiez les dépendances et la capacité réelle                | Qui peut promettre quoi ?                       | Fournisseur tiers, accès, sauvegarde                | Refuser l’engagement impossible            | Liste         |
| Trois niveaux de contrat, sans seuil universel                | Quel niveau acheter ?                           | heures ouvrées, plage étendue, continuité renforcée | Relier service et coût                     | Profils       |
| Testez le SLA sur trois incidents                             | Comment savoir s’il est lisible ?               | panne, donnée, fournisseur tiers                    | Réécrire les ambiguïtés                    | Atelier       |
| Bon fit, mauvais fit, CTA et FAQ                              | Quand se faire accompagner ?                    | Limites                                             | Conversion honnête                         | Sortie        |

## 9. Action autonome et conversion

Action autonome : choisir un seul parcours important et compléter :

```text
Le travail à maintenir :
La preuve que ce travail fonctionne :
Les heures où il est nécessaire :
La personne qui alerte :
Le minimum à fournir dans l’alerte :
L’action attendue après réception :
Le fonctionnement provisoire acceptable :
Le délai maximal tolérable avant impact :
Le point de données à retrouver :
Les dépendances externes :
La preuve qui arrête chaque chronomètre :
La conséquence si l’engagement n’est pas tenu :
```

Bon fit : entreprise qui peut nommer ses parcours critiques, ses horaires et
les conséquences d’une panne, et dont le prestataire peut auditer
l’application avant de promettre.

Mauvais fit : demande d’un « 24/7 » sans organisation, contrat à rédiger sans
analyse métier, ou attente d’une garantie sur un fournisseur tiers non couvert.

CTA : « Faire relire mes niveaux de service » vers `/demarrer-un-projet`.
Le formulaire produit un échange sur le besoin ; il ne vaut pas rédaction
juridique ni engagement immédiat.

## 10. Rapport P1

```text
PASSE 1 TERMINÉE
Slug : sla-maintenance-applicative
Lecteur et phrase réelle : dirigeant — « Une réponse sous quatre heures signifie-t-elle que mon application repart ? »
Décision : écrire service, horaires, réception, prise en charge, rétablissement, données, mesure et conséquences
Angle et forme dominante : une journée de panne reconstruite minute par minute
Pages proches et différence : contrat TMA couvre l’ensemble ; ce guide approfondit les engagements mesurables
Sources décisives : Google SRE Workbook, NIST SP 800-34 via CSRC, exemple contractuel Google Cloud
Incertitudes exclues : seuils universels, recours générique, prix et disponibilité idéale
Action autonome et CTA possible : écrire une fiche de service ; faire relire les niveaux de service
Plan : incident, sept moments, service, horaires, RTO/RPO, disponibilité, dépendances, niveaux, test, fits et FAQ
Snapshot : docs/research/manifests/sla-maintenance-applicative-p1.sha256
```

## 11. Revue de porte P1

- [x] lecteur, situation et décision unique définis ;
- [x] accusé, prise en charge, rétablissement, restauration et correction distingués ;
- [x] RTO et RPO traduits sans seuil universel ;
- [x] horaires et départ/arrêt des délais prévus ;
- [x] dépendances et preuves de mesure incluses ;
- [x] aucune promesse Hagnéré Code ni conseil juridique personnalisé ;
- [x] exemple fictif annoncé ;
- [x] option simple et mauvais fit présents ;
- [x] sources primaires consultées le 23 juillet 2026 ;
- [x] P3 et P4 terminées ; publication déléguée et contrôlée.

## 12. Rapport P2

```text
PASSE 2 TERMINÉE
Fichiers créés ou modifiés : dossier de recherche, page publique et image Open Graph dédiée
Ouverture et réponse : une réponse sous quatre heures ne garantit pas le rétablissement ; sept événements distincts sont nommés
Forme propre au sujet : chronologie minute par minute d’une panne, puis fiche de service et test sur trois incidents
Exemples ou calculs : Aster Comptoir, exemple illustratif fictif sans seuil présenté comme recommandé
Sources visibles : Google SRE, NIST RTO/RPO et SLA officiel Google Cloud, avec périmètres et limites explicites
Action autonome, bon fit et mauvais fit : compléter une fiche sur un parcours critique ; mauvais fit pour un 24/7 sans moyens ou un conseil juridique
CTA et destination : « Décrire mon application » vers /demarrer-un-projet, sans téléphone ni engagement immédiat
Contrôles rapides : Prettier, ESLint ciblé, TypeScript et git diff --check
Snapshot : docs/research/manifests/sla-maintenance-applicative-p2.sha256
```

### Revue de porte P2

- [x] guide complet, sans placeholder ;
- [x] accusé, prise en charge, diagnostic, contournement, rétablissement, restauration et correction distingués ;
- [x] horaires, départ, pause et arrêt des délais expliqués ;
- [x] RTO et RPO traduits sans seuil universel ;
- [x] disponibilité comparée sans pourcentage recommandé ;
- [x] dépendances et limite des engagements visibles ;
- [x] Article et BreadcrumbList uniquement ;
- [x] un CTA éditorial, destination réelle et `showPhone={false}` ;
- [x] image sociale dédiée en 1 200 × 630 ;
- [x] statut de publication aligné sur la délégation explicite ;
- [x] P3 indépendante requise avant P4.

## 13. Rapport P3 — contre-audit indépendant

```text
PASSE 3 TERMINÉE
Relecteur indépendant : /root/p2_batch3_apps
Affirmations et sources revérifiées : SLO Google SRE, définitions NIST de RTO et RPO, dépendances et exemples de disponibilité
Calculs refaits : exemple fictif d’horaires et de pourcentage de disponibilité, sans seuil recommandé ni crédit inventé
P0 trouvés / corrigés : 0 / 0
P1 trouvés / corrigés : 0 / 0
Suggestions rejetées et pourquoi : aucun 24/7, délai de rétablissement, disponibilité ou pénalité universelle ajouté
Corrections pédagogiques et commerciales : sept moments de l’incident maintenus distincts, preuve métier séparée du statut technique et reprise préalable conservée lorsque la capacité n’est pas connue
Revalidation du relecteur : P0/P1/P2 = 0/0/0 sur le contenu courant
Contrôles intermédiaires : Prettier, ESLint, TypeScript, tests ciblés, liens officiels, CTA, schémas et OG conformes
Snapshot : docs/research/manifests/sla-maintenance-applicative-p3.sha256
```

## 14. Rapport P4 — plume, rendu et gel

```text
PASSE 4 TERMINÉE
Passages humanisés : la promesse « réponse sous quatre heures » est traduite en journée de panne et en question métier — quand peut-on reprendre le travail ?
Coupe ou resserrement : termes contractuels rapprochés de leurs effets ; prise en charge, contournement, rétablissement, restauration et correction restent distincts
Retour P3 effectué : oui — SLO, RTO, RPO, disponibilité, horaires et dépendances ont été revérifiés sans ajouter de seuil universel ; relecture finale P0/P1/P2 = 0/0/0
Scorecard justifiée : 19/20 — Intention 2, Décision 2, Pédagogie 2, Profondeur 2, Preuve 2, Comparaison 2, Originalité 2, Style 1, Conversion 2, SEO/produit 2
Validation humaine réelle : non
Test réalisé par une personne réelle : non
Autorisation éditoriale : délégation explicite du commanditaire
Décision de publication : autorisée explicitement par le commanditaire
Commandes et résultats : check:seo 215/215 ; ESLint 32 fichiers ; TypeScript conforme ; npm test 440/440 ; build et postbuild de production conformes ; diff-check conforme
Largeurs et états contrôlés : 320, 390, 768, 1 024 et 1 440 px ; clair et sombre ; chronologie, tableaux, formules, CTA, FAQ et footer sans débordement
Route, OG et console : route 200, H1 unique, canonical et robots conformes ; OG 200 en PNG 1 200 × 630 ; aucun overlay ni erreur navigateur
Snapshot final : docs/research/manifests/sla-maintenance-applicative-p4.sha256
Statut maximal : Publiable
Verdict : publiable en index/follow ; ce guide ne vaut ni rédaction juridique ni garantie de disponibilité
```
