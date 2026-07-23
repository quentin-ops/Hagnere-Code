# Dossier de recherche — prise de rendez-vous en ligne sur un site vitrine

> Les quatre passes sont terminées. Le parcours de réservation, les limites et
> le rendu ont été contre-audités puis contrôlés sous délégation éditoriale,
> sans test par un lecteur humain réel.

## Journal des quatre passes

Propriétaire éditorial unique : `/root`

| Passe                        | État                     | Date            | Responsable                   | Snapshot                                                                    | Blocages |
| ---------------------------- | ------------------------ | --------------- | ----------------------------- | --------------------------------------------------------------------------- | -------- |
| 1. Recherche                 | Terminée — porte validée | 23 juillet 2026 | `/root`                       | `docs/research/manifests/prise-rendez-vous-en-ligne-site-vitrine-p1.sha256` | Aucun    |
| 2. Rédaction et intégration  | Terminée — porte validée | 23 juillet 2026 | `/root/p1p2_batch3_decisions` | `docs/research/manifests/prise-rendez-vous-en-ligne-site-vitrine-p2.sha256` | Aucun    |
| 3. Contre-audit indépendant  | Terminée — porte validée | 23 juillet 2026 | `/root/p2_batch3_marketing`   | `docs/research/manifests/prise-rendez-vous-en-ligne-site-vitrine-p3.sha256` | Aucun    |
| 4. Plume humaine et contrôle | Terminée — porte validée | 23 juillet 2026 | `/root`                       | `docs/research/manifests/prise-rendez-vous-en-ligne-site-vitrine-p4.sha256` | Aucun    |

## 1. Fiche d'identité

```text
Slug : prise-rendez-vous-en-ligne-site-vitrine
Statut actuel : publiable — validation éditoriale déléguée
Requête principale : prise de rendez-vous en ligne site internet
Moment du parcours : choisir le bon niveau d'outil avant d'ajouter un agenda au site
Lecteur précis : dirigeant, commerçant ou indépendant qui reçoit des demandes par téléphone et courriel et envisage d'ouvrir des créneaux en ligne
Situation déclenchante : deux personnes partagent un agenda, des rendez-vous sont déplacés à la main, certains créneaux sont pris deux fois et des clients ne se présentent pas
Décision principale après lecture : choisir entre formulaire de demande, agenda standard, plateforme métier, paiement ou intégration sur mesure selon les règles réelles de réservation
Niveau de connaissance au départ : sait partager un calendrier, mais n'a pas encore écrit les durées, ressources, délais, annulations, acomptes et exceptions
5 questions indispensables : le rendez-vous est-il confirmé ou seulement demandé ? quelle personne ou ressource doit être libre ? faut-il payer ? quelles informations sont nécessaires ? comment traiter annulation, retard et absence ?
3 objections ou craintes : « Un bouton Calendly suffit » ; « Plus on demande d'informations, plus le rendez-vous sera qualifié » ; « Il faut tout intégrer au site pour paraître professionnel »
Action utile sans contact commercial : rejouer cinq rendez-vous récents, dont une annulation et une absence, et écrire chaque décision prise entre la demande et la réalisation
CTA possible : transformer les règles réelles en parcours simple et testable
Hors périmètre : conseil juridique personnalisé, choix d'un logiciel médical, gestion exhaustive d'un cabinet de santé, conditions de vente ou politique d'annulation à rédiger
Date de la recherche : 23 juillet 2026
Responsable de la synthèse : /root
```

## 2. Contrat de langage humain

- Phrase réelle : « Je veux que mes clients réservent sans m'appeler, mais je
  ne veux ni doublons, ni créneaux fantômes, ni formulaire interminable. »
- Réponse attendue : commencez par écrire ce qui rend un créneau réellement
  réservable ; l'outil le plus simple qui applique ces règles et reste
  compréhensible sera souvent le bon.
- Définition simple : une réservation en ligne relie une demande, une
  disponibilité réelle, une confirmation et ce qui doit se passer avant et
  après le rendez-vous.
- Mots du lecteur : créneau, agenda, durée, disponibilité, confirmation,
  rappel, annulation, absence, acompte, lieu, visio, collaborateur.
- Jargon à éviter ou traduire : booking engine, round robin, buffer,
  no-show, resource scheduling, workflow, webhook, slot.
- Ouverture : une cliente voit 14 h comme libre, mais la salle et la personne
  ne le sont pas ensemble. Le verdict arrive avant la liste des outils.

## 3. Cannibalisation

| Page existante                           | Intention                                      | Différence                                                     | Maillage prévu                                                                               |
| ---------------------------------------- | ---------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `/guides/site-one-page-ou-multipage`     | Décider comment organiser les contenus du site | Décider comment réserver un service et une ressource           | Le guide de structure renverra ici lorsqu'une prise de rendez-vous est une action principale |
| `/guides/landing-page-ou-site-vitrine`   | Choisir l'actif web à créer                    | Choisir le mécanisme opérationnel après le clic                | Ne pas refaire le comparatif landing/site                                                    |
| `/guides/preparer-contenus-site-vitrine` | Rassembler les informations et preuves         | Écrire les règles de disponibilité, confirmation et annulation | Lier la préparation du service et de ses modalités                                           |
| `/services/sites-internet`               | Présenter la prestation                        | Aider à décider sans contact préalable                         | CTA seulement après l'audit autonome                                                         |

**Verdict :** intention spécifique et transactionnelle, sans cannibaliser les
guides d'architecture du site.

## 4. Les décisions à écrire avant l'outil

1. **Demande ou confirmation :** le client choisit-il un créneau garanti, ou
   propose-t-il une préférence à valider ?
2. **Ressources :** faut-il une personne, une salle, un véhicule, une machine
   ou plusieurs éléments libres ensemble ?
3. **Durée réelle :** préparation et remise en état doivent-elles bloquer du
   temps avant ou après ?
4. **Éligibilité :** tout le monde peut-il réserver ce service ou faut-il une
   vérification préalable ?
5. **Paiement :** gratuit, acompte, paiement complet ou facturation après ?
6. **Modification :** jusqu'à quand et par qui un rendez-vous peut-il être
   déplacé ou annulé ?
7. **Rappel et suivi :** quel message est utile, par quel canal et avec quelle
   donnée ?
8. **Exception :** urgence, retard, absence, surbooking volontaire, fermeture
   exceptionnelle et fuseau horaire.

## 5. Fiche de preuves

| Affirmation utilisable                                                                                                                           | Source primaire                                                                                                           | Nature et périmètre                           | Conséquence lecteur                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- | ---------------------------------------------------------------------------------------- |
| Les données personnelles collectées doivent être adéquates, pertinentes et limitées à ce qui est nécessaire à la finalité annoncée               | [CNIL — Minimiser les données collectées](https://www.cnil.fr/fr/minimiser-les-donnees-collectees)                        | Principe général de minimisation              | Ne pas transformer la réservation en questionnaire commercial sans nécessité             |
| La durée de conservation doit être définie selon l'objectif de la collecte ; les données ne peuvent pas être conservées indéfiniment             | [CNIL — Les durées de conservation des données](https://cnil.fr/fr/passer-laction/les-durees-de-conservation-des-donnees) | Rappel CNIL mis à jour en 2026                | Définir ce qui reste dans l'agenda, le CRM ou la facturation et pendant combien de temps |
| La CNIL recommande une attention renforcée lorsque les informations collectées sont sensibles, notamment liées à la santé                        | [CNIL — Minimiser les données collectées](https://www.cnil.fr/fr/minimiser-les-donnees-collectees)                        | Principe général, pas guide sectoriel complet | Éviter de demander le motif détaillé d'un rendez-vous lorsqu'il n'est pas nécessaire     |
| Les formulaires doivent identifier les erreurs et aider l'utilisateur à les corriger ; les libellés et instructions doivent être compréhensibles | [W3C — WCAG 2.2, Input Assistance](https://www.w3.org/TR/WCAG22/#input-assistance)                                        | Standard d'accessibilité web                  | Tester le parcours avec clavier, erreurs, mobile et informations obligatoires explicites |

### Limites à signaler

- aucune durée de conservation unique ne convient à tous les rendez-vous ;
- un acompte, une annulation ou un remboursement peut relever de règles
  contractuelles et sectorielles à faire valider ;
- la collecte d'informations de santé change fortement le niveau de vigilance ;
- un rappel réduit peut-être les oublis, mais aucun taux universel ne sera
  promis ;
- une synchronisation de calendrier ne remplace pas la définition des
  ressources et des exceptions ;
- les fonctions et tarifs des plateformes évoluent : le guide compare des
  niveaux de solution, pas une grille commerciale figée.

## 6. Comparaison prévue

| Réponse                                 | Bon cas d'usage                                                               | Limite principale                                           | Décision avant mise en ligne                     |
| --------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------- | ------------------------------------------------ |
| Formulaire de demande                   | Le professionnel doit vérifier chaque besoin avant de proposer un horaire     | Échanges supplémentaires                                    | Délai et responsable de réponse                  |
| Agenda partagé avec lien de réservation | Une durée, une personne, des règles simples                                   | Exceptions, ressources multiples et données métier limitées | Source de disponibilité et confirmation          |
| Plateforme métier                       | Les pratiques du secteur sont standardisées et couvertes                      | Dépendance, abonnement et personnalisation                  | Export, propriété des données et intégration     |
| Réservation avec acompte ou paiement    | La place a une valeur et le processus commercial le justifie                  | Échec, remboursement, facture et contestation à traiter     | Moment du paiement et règle d'annulation validée |
| Intégration ou développement ciblé      | Plusieurs ressources, droits ou étapes doivent être coordonnés                | Coût et maintenance                                         | Mauvais cas, pilote et retour manuel             |
| Ne rien ouvrir en réservation directe   | L'équipe doit encore qualifier fortement ou les disponibilités sont instables | Téléphone et courriels restent à traiter                    | Améliorer d'abord le formulaire et la réponse    |

## 7. Exemple pédagogique prévu

**Exemple illustratif fictif :** « Studio Liseron » propose des séances de deux
durées avec deux intervenantes et une seule salle équipée. Une séance requiert
quinze minutes de préparation. Les clients peuvent déplacer une fois leur
rendez-vous ; un acompte est envisagé mais les conditions ne sont pas encore
validées.

Le guide montrera pourquoi un simple agenda par personne crée un doublon de
salle et comment cinq décisions suffisent à tester une solution :

- personne et salle disponibles ensemble ;
- préparation bloquée ;
- demande confirmée ;
- données strictement nécessaires ;
- annulation traitée sans opération oubliée.

## 8. Plan annoté

| Section                                                  | Question                                    | Format                                      | Décision                              |
| -------------------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------- |
| Le créneau paraît libre, mais il ne l'est pas            | Quel problème résout-on ?                   | Scène                                       | Définir la disponibilité réelle       |
| Un rendez-vous comporte quatre promesses                 | Que doit garantir le parcours ?             | Demande, disponibilité, confirmation, suite | Écrire le résultat attendu            |
| Rejouez cinq rendez-vous récents                         | Quelles règles existent déjà ?              | Exercice                                    | Extraire les exceptions vécues        |
| Personne, salle, durée : ce qui doit être libre ensemble | Comment éviter les doublons ?               | Carte des ressources                        | Choisir la source de vérité           |
| Demandez seulement ce qui est nécessaire                 | Comment rester simple et responsable ?      | Bon/mauvais formulaire                      | Réduire les champs                    |
| Acompte et paiement ajoutent un vrai cycle               | Faut-il encaisser en ligne ?                | Chronologie                                 | Valider annulation, facture et échec  |
| Comparez six niveaux de solution                         | Quel outil choisir ?                        | Cartes mobiles                              | Garder l'option la plus simple        |
| Testez le parcours qui se passe mal                      | Comment choisir sans démonstration idéale ? | Annulation, retard, absence, fermeture      | Vérifier les exceptions               |
| Mesurez jusqu'au rendez-vous réalisé                     | Qu'est-ce qu'une conversion utile ?         | Entonnoir                                   | Séparer clic, réservation et présence |
| Bon fit, mauvais fit et FAQ                              | Quand se faire accompagner ?                | Encadrés                                    | Conversion honnête                    |

## 9. Action autonome et conversion

Artefact intégré : fiche d'un rendez-vous avec service, durée, préparation,
ressources, confirmation, données demandées, paiement, rappel, modification,
annulation, absence et responsable. Elle est copiable sans inscription.

Bon fit : professionnel qui connaît ses services et exceptions et veut relier
le site à un agenda, un paiement ou un outil métier existant.

Mauvais fit : recherche d'une validation juridique, logiciel médical complet,
ou automatisation alors que les disponibilités ne sont jamais tenues à jour.

CTA : « Simplifier mon parcours de rendez-vous » vers `/demarrer-un-projet`,
après l'exercice.

## 10. Rapport P1

```text
PASSE 1 TERMINÉE
Slug : prise-rendez-vous-en-ligne-site-vitrine
Lecteur et phrase réelle : professionnel — « Je veux des réservations sans appels, doublons ni formulaire interminable. »
Décision : formulaire, agenda standard, plateforme métier, paiement, intégration ciblée ou attente
Angle et forme dominante : rejouer un rendez-vous de la demande à sa réalisation
Pages proches et différence : les guides site choisissent la page ; celui-ci choisit le fonctionnement après le clic
Sources décisives : CNIL pour minimisation et conservation ; W3C pour l'assistance dans les formulaires
Incertitudes exclues : taux d'absence, délai de conservation universel, règle contractuelle et tarif de plateforme
Action autonome et CTA possible : fiche de rendez-vous ; simplifier le parcours réel
Plan : scène, promesses, cinq cas, ressources, données, paiement, comparaison, mauvais cas, mesure, fits, FAQ
Snapshot : docs/research/manifests/prise-rendez-vous-en-ligne-site-vitrine-p1.sha256
```

## 11. Revue de porte P1

- [x] lecteur, situation et décision définis ;
- [x] confirmation distinguée d'une simple demande ;
- [x] ressources et mauvais cas inclus ;
- [x] minimisation et conservation sourcées ;
- [x] santé et conseil juridique explicitement hors périmètre ;
- [x] plateforme standard et option de ne pas automatiser conservées ;
- [x] exemple fictif annoncé ;
- [x] action autonome prévue ;
- [x] aucun gain ou taux d'absence inventé ;
- [x] P3 et P4 terminées ; publication déléguée et contrôlée.

## 12. Rapport P2

```text
PASSE 2 TERMINÉE
Fichiers créés ou modifiés : page publique, image Open Graph et rapport P2 du dossier de recherche
Ouverture et réponse : confirmer immédiatement seulement si toutes les ressources et règles permettent un vrai créneau ; sinon demander un rendez-vous
Forme propre au sujet : quatre promesses, cinq rendez-vous à rejouer, six solutions en cartes et test systématique des cas d’échec
Exemples ou calculs : Studio Liseron, exemple illustratif fictif avec deux intervenantes et une salle, sans résultat client inventé
Sources visibles : CNIL sur minimisation et conservation ; W3C WCAG 2.2 sur l’assistance à la saisie
Action autonome, bon fit et mauvais fit : remplir la fiche d’un rendez-vous ; mauvais fit pour un logiciel médical, une validation juridique ou des agendas non tenus
CTA et destination : « Décrire mes règles » vers /demarrer-un-projet, sans téléphone
Contrôles rapides : Prettier, ESLint ciblé, TypeScript et git diff --check
Snapshot : docs/research/manifests/prise-rendez-vous-en-ligne-site-vitrine-p2.sha256
```

### Revue de porte P2

- [x] guide complet, sans placeholder ;
- [x] demande de rendez-vous distinguée d’une confirmation ;
- [x] personnes, salles, durées et exceptions traitées ;
- [x] paiement présenté comme un cycle complet, sans promesse sur les absences ;
- [x] minimisation et conservation des données sourcées ;
- [x] six niveaux de solution, dont le report de la réservation directe ;
- [x] Article et BreadcrumbList uniquement ;
- [x] un CTA éditorial, destination réelle et `showPhone={false}` ;
- [x] image sociale dédiée en 1 200 × 630 ;
- [x] statut de publication aligné sur la délégation explicite ;
- [x] P3 indépendante requise avant P4.

## 13. Rapport P3 — contre-audit indépendant

```text
PASSE 3 TERMINÉE
Relecteur indépendant : /root/p2_batch3_marketing
Affirmations et sources revérifiées : minimisation et conservation CNIL, aide à la saisie WCAG, distinction demande et confirmation, ressources et paiements
Calculs refaits : exemple Studio Liseron entièrement fictif ; aucun taux d’absence, gain ou revenu inventé
P0 trouvés / corrigés : 0 / 0
P1 trouvés / corrigés : 0 / 0
Suggestions rejetées et pourquoi : aucun agenda, délai de rappel, acompte ou politique d’annulation universel ajouté
Corrections pédagogiques et commerciales : six niveaux de solution maintenus, dont formulaire et report de la réservation directe ; mauvais cas testés avant le volume
Revalidation du relecteur : P0/P1/P2 = 0/0/0
Contrôles intermédiaires : Prettier, ESLint, TypeScript, batch complet, garde-fous humains, liens, CTA, schémas et OG conformes
Snapshot : docs/research/manifests/prise-rendez-vous-en-ligne-site-vitrine-p3.sha256
```

## 14. Rapport P4 — plume, rendu et gel

```text
PASSE 4 TERMINÉE
Passages humanisés : l’ouverture distingue immédiatement demande et confirmation, puis rejoue personnes, salle, durée, paiement et exceptions avec les mots du professionnel
Coupe ou resserrement : répétitions sur les agendas retirées ; six niveaux de solution restent comparés, dont le formulaire simple et le report de la réservation directe
Retour P3 effectué : oui — minimisation, conservation, assistance de saisie, ressources et paiement ont été revérifiés ; relecture finale P0/P1/P2 = 0/0/0
Scorecard justifiée : 20/20 — Intention 2, Décision 2, Pédagogie 2, Profondeur 2, Preuve 2, Comparaison 2, Originalité 2, Style 2, Conversion 2, SEO/produit 2
Validation humaine réelle : non
Test réalisé par une personne réelle : non
Autorisation éditoriale : délégation explicite du commanditaire
Décision de publication : autorisée explicitement par le commanditaire
Commandes et résultats : check:seo 215/215 ; ESLint 32 fichiers ; TypeScript conforme ; npm test 440/440 ; build et postbuild de production conformes ; diff-check conforme
Largeurs et états contrôlés : 320, 390, 768, 1 024 et 1 440 px ; clair et sombre ; tableau, cartes, formulaire logique, CTA, FAQ et footer sans débordement
Route, OG et console : route 200, H1 unique, canonical et robots conformes ; OG 200 en PNG 1 200 × 630 ; aucun overlay ni erreur navigateur
Snapshot final : docs/research/manifests/prise-rendez-vous-en-ligne-site-vitrine-p4.sha256
Statut maximal : Publiable
Verdict : publiable en index/follow ; aucune baisse d’absences, conversion ou conformité n’est garantie
```
