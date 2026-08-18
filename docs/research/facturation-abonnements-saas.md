# Dossier de recherche — facturation des abonnements d'un SaaS

> **SUPERSEDED — dossier historique du 23 juillet 2026.** Son score, ses
> validations et son autorisation de publication ne décrivent plus l’état
> courant. Voir
> `docs/research/facturation-abonnements-saas-r1-2026-07-28.md` et son
> manifeste final pour la décision actuelle.

## Journal des quatre passes

Propriétaire éditorial unique : `/root`

| Passe                        | État                               | Date            | Responsable                 | Snapshot                                                         | Blocages |
| ---------------------------- | ---------------------------------- | --------------- | --------------------------- | ---------------------------------------------------------------- | -------- |
| 1. Recherche                 | Terminée — porte validée           | 23 juillet 2026 | `/root`                     | `docs/research/manifests/facturation-abonnements-saas-p1.sha256` | Aucun    |
| 2. Rédaction et intégration  | Terminée — prête pour contre-audit | 23 juillet 2026 | `/root/p2_batch3_apps`      | `docs/research/manifests/facturation-abonnements-saas-p2.sha256` | Aucun    |
| 3. Contre-audit indépendant  | Terminée — porte validée           | 23 juillet 2026 | `/root/p2_batch3_marketing` | `docs/research/manifests/facturation-abonnements-saas-p3.sha256` | Aucun    |
| 4. Plume humaine et contrôle | Terminée — porte validée           | 23 juillet 2026 | `/root`                     | `docs/research/manifests/facturation-abonnements-saas-p4.sha256` | Aucun    |

## 1. Fiche d'identité

```text
Slug : facturation-abonnements-saas
Statut historique : superseded — ne pas utiliser comme autorisation actuelle
Requête principale : facturation abonnement SaaS
Moment du parcours : cadrer le cycle de vente avant ou après les premiers clients
Lecteur précis : dirigeant ou porteur d'un SaaS B2B qui doit proposer plusieurs rythmes de paiement, gérer les changements de formule et savoir qui conserve l'accès
Situation déclenchante : les premiers clients demandent un abonnement annuel, un essai, un bon de commande ou une date de facture différente, alors que le produit ne connaît qu'un bouton de paiement
Décision principale après lecture : choisir ce qui peut rester manuel, ce qui peut être confié à un service de facturation et ce que l'application doit enregistrer, puis traiter explicitement les échecs de paiement et la résiliation
Niveau de connaissance au départ : sait qu'un prestataire de paiement peut prélever une carte, mais confond encore paiement, facture, droit d'accès et comptabilité
5 questions indispensables : que se passe-t-il avant le premier paiement ? qui décide qu'un client a accès ? comment gérer essai, prorata et changement de formule ? que faire après un échec ? quelles données transmettre à la comptabilité ?
3 objections ou craintes : « Stripe gère tout » ; « Nous ajouterons l'annuel plus tard » ; « Si le prélèvement échoue, il suffit de couper immédiatement »
Action utile sans contact commercial : dessiner la vie d'un abonnement depuis l'offre acceptée jusqu'à la résiliation, avec l'événement, le responsable, le document et le droit d'accès à chaque étape
CTA possible : faire relire le cycle réel avant de l'intégrer au SaaS
Hors périmètre : conseil fiscal ou comptable personnalisé, choix exhaustif de prestataires, rédaction des CGV, recouvrement contentieux, tarification du SaaS
Date de la recherche : 23 juillet 2026
Responsable de la synthèse : /root
```

## 2. Contrat de langage humain

- Phrase exacte que le lecteur pourrait dire : « J'ai mis un paiement par
  carte, mais mon premier grand client veut un devis, une facture annuelle et
  trente jours pour payer. Comment je fais sans bricoler mon SaaS ? »
- Réponse attendue : un abonnement fiable ne se résume pas au prélèvement ; il
  faut relier l'offre acceptée, la facture, le paiement, l'état du compte et le
  droit d'utiliser le service.
- Définition simple : le cycle d'abonnement est la suite des décisions qui dit
  ce que le client achète, quand il doit payer, ce qu'il peut utiliser et ce
  qui arrive lorsqu'il change d'offre, ne paie pas ou part.
- Mots du lecteur : formule, essai, carte, virement, annuel, mensuel, facture,
  bon de commande, date de renouvellement, impayé, résiliation, accès.
- Jargon à traduire ou éviter : entitlement, webhook, dunning, proration,
  MRR, provisioning, ledger, involuntary churn.
- Projet des 150 premiers mots : partir d'un client qui accepte l'offre mais ne
  peut pas payer comme le produit l'avait imaginé ; donner le verdict
  « paiement, facture et accès sont trois choses reliées, pas une seule ».
- H2 relus isolément : à contrôler en P2.
- CTA : un seul, après le cycle complet et l'action autonome.

## 3. Cannibalisation

| Page existante                         | Intention de cette page                              | Différence du nouveau guide                                       | Lien ou arbitrage                                                    |
| -------------------------------------- | ---------------------------------------------------- | ----------------------------------------------------------------- | -------------------------------------------------------------------- |
| `/guides/mvp-saas-quoi-inclure`        | Définir la première version réellement exploitable   | Détailler la vie commerciale et comptable d'un abonnement         | Le MVP renverra ici lorsque le paiement récurrent devient nécessaire |
| `/guides/cahier-des-charges-saas`      | Décrire le produit et ses règles avant développement | Fournir le sous-ensemble précis à documenter pour la facturation  | Lier comme exemple de règle métier critique                          |
| `/guides/faire-evoluer-saas-apres-mvp` | Organiser les évolutions après le premier lot        | Décider si une nouvelle formule modifie facture, accès et support | Ne pas reprendre la méthode de priorisation                          |
| `/guides/prix-developpement-saas`      | Estimer le coût de construction                      | Expliquer ce qui crée la complexité de facturation                | Aucune fourchette de développement ici                               |

**Verdict :** intention distincte et proche de l'achat. Le guide ne doit pas
devenir un tutoriel Stripe ni une consultation comptable.

## 4. Demande, vocabulaire et angle

Formulations à couvrir sans les empiler dans les titres :

- gérer des abonnements mensuels et annuels ;
- proposer une période d'essai ;
- changer de formule en cours de période ;
- facturer une entreprise par virement ou bon de commande ;
- suspendre ou conserver l'accès après un impayé ;
- réconcilier les paiements avec les clients et les factures ;
- préparer la facturation électronique en France.

Angle original : suivre un abonnement fictif du devis à la résiliation et
montrer, à chaque changement, quatre états différents :

1. ce que le client a accepté ;
2. ce qui a été facturé ;
3. ce qui a été payé ;
4. ce que le produit autorise.

## 5. Fiche de preuves

| Affirmation utilisable                                                                                                                                                                                                         | Source primaire                                                                                                                                                                                                                   | Nature et périmètre                                                                                                                                         | Conséquence lecteur                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| Les événements d'un abonnement et de son paiement sont asynchrones ; le produit doit écouter et traiter les changements d'état pertinents                                                                                      | [Stripe — Using webhooks with subscriptions](https://docs.stripe.com/billing/subscriptions/webhooks)                                                                                                                              | Documentation d'un prestataire, applicable à son modèle d'abonnement                                                                                        | Ne pas accorder ou retirer un accès sur la seule réponse immédiate du navigateur            |
| Stripe documente plusieurs états d'abonnement, notamment `trialing`, `active`, `incomplete`, `past_due`, `canceled`, `unpaid` et `paused`                                                                                      | [Stripe — Subscription webhooks](https://docs.stripe.com/billing/subscriptions/webhooks)                                                                                                                                          | États propres à Stripe, pas vocabulaire juridique universel                                                                                                 | Traduire ces états en règles produit explicites au lieu de les laisser décider seuls        |
| Un changement de formule peut produire des proratas ; le comportement dépend des paramètres et du moment choisi                                                                                                                | [Stripe — Prorations](https://docs.stripe.com/billing/subscriptions/prorations)                                                                                                                                                   | Documentation Stripe                                                                                                                                        | Décider avant le développement si la différence est facturée, créditée ou reportée          |
| Une période d'essai peut exister sans moyen de paiement ; l'intégration doit choisir l'issue appliquée à son terme, notamment l'annulation ou la pause                                                                         | [Stripe — Configure free trials without payment methods](https://docs.stripe.com/payments/checkout/free-trials)                                                                                                                   | Documentation Stripe Checkout ; comportement à confirmer dans l'intégration utilisée                                                                        | Écrire ce qui se passe avant et après la fin de l'essai, y compris sans carte valide        |
| Une facture française doit comporter des mentions obligatoires qui dépendent notamment des parties et de l'opération                                                                                                           | [Ministère de l'Économie — mentions obligatoires d'une facture](https://www.economie.gouv.fr/entreprises/gerer-son-entreprise-au-quotidien/gerer-sa-comptabilite-et-ses-demarches/mentions-obligatoires-dune-facture-tout-savoir) | Information publique générale, à faire confirmer selon la situation                                                                                         | Ne pas considérer le reçu de paiement comme une facture automatiquement conforme            |
| La réforme française prévoit une réception obligatoire des factures électroniques à partir du 1er septembre 2026 pour les entreprises assujetties concernées ; l'émission est échelonnée entre 2026 et 2027 selon leur taille  | [Ministère de l'Économie — facturation électronique](https://www.economie.gouv.fr/tout-savoir-sur-la-facturation-electronique-pour-les-entreprises)                                                                               | Calendrier officiel consulté le 23/07/2026 ; achats et ventes B2B entre entreprises établies en France et assujetties à la TVA, sous réserve des exclusions | Prévoir un raccordement comptable sans affirmer que chaque paiement SaaS relève du même cas |
| Pour des opérations avec des particuliers, certaines associations ou des opérateurs étrangers, l'entreprise établie en France et assujettie à la TVA transmet plutôt des données de transaction et de paiement par e-reporting | [Ministère de l'Économie — glossaire e-reporting](https://www.economie.gouv.fr/tout-savoir-sur-la-facturation-electronique-pour-les-entreprises)                                                                                  | Présentation générale de la réforme ; cas précis à confirmer avec un professionnel                                                                          | Séparer facture envoyée au client et données transmises à l'administration                  |

### Données à ne pas inventer

- aucun taux d'impayé, de churn ou de conversion universel ;
- aucun délai de relance « optimal » ;
- aucun prix de Stripe ou d'un autre prestataire sans page tarifaire actuelle ;
- aucune affirmation selon laquelle un outil rend à lui seul une facture
  conforme ;
- aucune règle de coupure automatique présentée comme obligatoire ;
- aucune analyse fiscale, TVA internationale ou reconnaissance de revenu
  personnalisée.

## 6. Décision à rendre possible

| Situation                                                     | Réponse raisonnable                                                 | Condition de succès                                                                  | Signal d'alerte                                            |
| ------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | ---------------------------------------------------------- |
| Quelques clients, une seule formule et factures B2B négociées | Processus manuel documenté et paiement hébergé                      | Un responsable tient le registre et réconcilie chaque mois                           | L'accès dépend d'une mémoire individuelle                  |
| Offres standard, carte et volumes croissants                  | Facturation récurrente hébergée reliée au SaaS                      | États et événements traduits en règles produit testées                               | Un webhook suffit prétendument à « tout gérer »            |
| Bons de commande, virements, filiales ou facturation décalée  | Couche d'abonnement séparée du seul paiement carte                  | Identité contractuelle, facture, paiement et accès peuvent diverger sans incohérence | Le compte client est attaché à une adresse e-mail isolée   |
| Règles tarifaires propres au métier                           | Développement ciblé autour d'un moteur ou d'un prestataire existant | Les exceptions sont écrites et testables                                             | Reconstruction inutile d'un système de paiement réglementé |
| Offre encore instable et aucun client                         | Simuler le cycle avant d'automatiser                                | Trois scénarios de vente réels ou plausibles sont décrits                            | Construction de toutes les options avant validation        |

## 7. Exemple pédagogique prévu

**Exemple illustratif fictif :** « Planor », SaaS de planification B2B, signe :

- un client mensuel par carte ;
- un client annuel par virement après bon de commande ;
- un essai de quatorze jours sans carte ;
- un client qui passe de cinq à douze utilisateurs en cours de période.

Le récit ne cherchera pas une architecture parfaite. Il montrera plutôt où
Planor doit répondre clairement :

- quand le compte est créé ;
- quand l'essai commence et finit ;
- quel document est émis ;
- quand l'accès est ouvert ;
- comment un changement d'utilisateurs est facturé ;
- ce qui arrive si le paiement échoue ;
- ce qui reste accessible après résiliation ;
- quelles données vont à la comptabilité.

## 8. Plan annoté

| Section                                               | Question résolue                          | Dispositif                          | Décision                                                   |
| ----------------------------------------------------- | ----------------------------------------- | ----------------------------------- | ---------------------------------------------------------- |
| Votre premier contrat sort déjà du bouton de paiement | Pourquoi le problème arrive-t-il si tôt ? | Scène de Planor                     | Séparer les quatre états                                   |
| Paiement, facture et accès ne sont pas synonymes      | Que doit mémoriser le produit ?           | Quatre cartes                       | Nommer une source de vérité par information                |
| Dessinez la vie d'un abonnement                       | Quelles étapes existent ?                 | Chronologie                         | Écrire les transitions avant le code                       |
| Mensuel, annuel, essai : ce qui change vraiment       | Faut-il tout proposer ?                   | Comparaison courte                  | Garder seulement les formules vendables                    |
| Un changement de formule n'est pas un simple bouton   | Que faire du prorata et des droits ?      | Exemple chiffré sans montant imposé | Fixer une règle compréhensible                             |
| L'impayé demande une décision commerciale             | Quand relancer, limiter ou suspendre ?    | Scénarios                           | Ne pas laisser l'outil choisir seul                        |
| Le B2B introduit devis, commande et virement          | Comment servir un grand compte ?          | Parcours parallèle                  | Découpler paiement carte et contrat                        |
| Préparez la comptabilité et la facture électronique   | Quelles interfaces anticiper ?            | Checklist datée                     | Attribuer les responsabilités                              |
| Audit autonome de votre cycle                         | Que faire aujourd'hui ?                   | Tableau à remplir                   | Repérer les trois transitions non définies                 |
| Quand développer, intégrer ou rester manuel           | Quel investissement est justifié ?        | Bon/mauvais fit                     | Choisir la solution la plus simple qui tient les cas réels |
| Questions fréquentes                                  | Réponses directes                         | FAQ                                 | Lever les objections sans conseil personnalisé             |

## 9. Ressource et conversion

La ressource reste dans la page : une fiche « vie de l'abonnement » avec les
colonnes événement, document, paiement, accès, responsable et erreur possible.
Elle doit pouvoir être copiée sans donner ses coordonnées.

Bon fit Hagnéré Code : SaaS B2B dont les règles ont été confrontées à de vrais
parcours de vente et qui doit relier proprement produit, paiement et
comptabilité.

Mauvais fit : recherche d'une consultation fiscale, d'un prestataire de
recouvrement, d'une garantie de conformité comptable ou d'une automatisation
complète avant le premier client.

CTA envisagé : « Faire relire mon cycle d'abonnement » vers
`/demarrer-un-projet`, avec annonce d'un échange de cadrage et sans audit
gratuit implicite.

## 10. Rapport P1

```text
PASSE 1 TERMINÉE
Slug : facturation-abonnements-saas
Lecteur et phrase réelle : dirigeant de SaaS B2B — « Mon client ne peut pas payer comme mon bouton l'avait prévu. »
Décision : relier offre, facture, paiement et accès, puis choisir ce qui reste manuel, hébergé ou intégré
Angle et forme dominante : la vie complète d'un abonnement fictif
Pages proches et différence : MVP et cahier des charges cadrent le produit ; ce guide traite le cycle commercial après souscription
Sources décisives : Stripe pour les états techniques ; ministère de l'Économie pour les factures et le calendrier français
Incertitudes exclues : prix, taux d'impayé, délai de relance, conformité automatique et conseil fiscal
Action autonome et CTA possible : remplir la fiche du cycle ; faire relire les transitions critiques
Plan : scène, quatre états, chronologie, offres, changement, impayé, B2B, comptabilité, audit, fit, FAQ
Snapshot : docs/research/manifests/facturation-abonnements-saas-p1.sha256
```

## 11. Revue de porte P1

- [x] lecteur, situation et décision définis ;
- [x] paiement, facture et droit d'accès distingués ;
- [x] documentation officielle actuelle consultée ;
- [x] calendrier français daté et périmètre limité ;
- [x] exemple fictif explicitement annoncé ;
- [x] option manuelle et option de ne pas automatiser conservées ;
- [x] action autonome définie ;
- [x] CTA tardif, unique et honnête prévu ;
- [x] aucun prix ou ratio inventé ;
- [x] P2, P3 et P4 terminées ; publication déléguée et contrôlée.

## 12. Rapport P2

```text
PASSE 2 TERMINÉE
Fichiers créés ou modifiés : page.tsx et opengraph-image.tsx du slug ; dossier P1 complété par ce rapport
Ouverture et réponse : un abonnement relie offre acceptée, facture, paiement et accès ; un bouton de carte ne porte pas seul le cycle
Forme propre au sujet : quatre registres, chronologie de six événements, quatre ventes fictives et audit autonome événement par événement
Exemple ou calcul : Planor est annoncé comme exemple illustratif fictif ; prorata volontairement simplifié et exclusions de calcul visibles
Sources visibles : Stripe pour webhooks, états, essais et proratas ; ministère de l’Économie pour mentions de facture et calendrier français
Action autonome, bon fit et mauvais fit : remplir les six colonnes du cycle ; garder un traitement manuel reste possible à faible volume
CTA et destination : un seul GuideInlineCTA, « Présenter mon cycle », vers /demarrer-un-projet, téléphone masqué
Contrôles rapides : Prettier ciblé, ESLint ciblé, TypeScript et git diff --check conformes selon le rapport de l'éditeur
Snapshot : docs/research/manifests/facturation-abonnements-saas-p2.sha256
```

L’entrée `src/lib/guides.ts`, le maillage entrant et le garde-fou éditorial
commun sont ajoutés au snapshot P2 par l’éditeur central. Cette porte ne vaut
ni P3, ni P4, ni autorisation de publication.

## 13. Rapport P3 — contre-audit indépendant

```text
PASSE 3 TERMINÉE
Relecteur indépendant : /root/p2_batch3_marketing
Affirmations et sources revérifiées : webhooks, états, proratas, essais sans moyen de paiement, facturation B2B française, calendrier 2026-2027 et e-reporting
Calculs refaits : prorata fictif 100 € × 15/30 = 50 € HT, présenté sans devenir une règle contractuelle ou fiscale
P0 trouvés / corrigés : 0 / 0
P1 trouvés / corrigés : 2 / 2 — périmètre français trop général et source d’essai Stripe remplacée par la page explicite
Suggestions rejetées et pourquoi : aucun délai d’impayé, taux de churn ni traitement fiscal universel ajouté
Corrections pédagogiques et commerciales : B2B domestique distingué du B2C et de l’international, issue d’essai explicitée, scénario Planor clairement séparé de tout client réel
Revalidation du relecteur : P0/P1/P2 = 0/0/0 sur le contenu courant
Contrôles intermédiaires : Prettier, ESLint, TypeScript, tests métier, garde-fou fictif, données structurées et liens conformes
Snapshot : docs/research/manifests/facturation-abonnements-saas-p3.sha256
```

## 14. Rapport P4 historique — plume, rendu et gel superseded

```text
PASSE 4 TERMINÉE
Passages humanisés : le client qui ne peut pas payer comme le bouton le prévoyait mène désormais à quatre informations simples — offre, facture, paiement et accès
Coupe ou resserrement : l’audit répétitif en cinq cartes a été remplacé par une vérification concise des événements critiques ; les cas mensuel, annuel, essai, changement et impayé restent traités
Retour P3 effectué : oui — exemple de prorata, essais Stripe, facturation B2B française et e-reporting ont été revérifiés ; relecture finale P0/P1/P2 = 0/0/0
Scorecard justifiée : 19/20 — Intention 2, Décision 2, Pédagogie 2, Profondeur 2, Preuve 2, Comparaison 2, Originalité 2, Style 1, Conversion 2, SEO/produit 2
Validation humaine réelle : non
Test réalisé par une personne réelle : non
Autorisation éditoriale : délégation explicite du commanditaire
Décision de publication : autorisée explicitement par le commanditaire
Commandes et résultats : check:seo 215/215 ; ESLint 32 fichiers ; TypeScript conforme ; npm test 440/440 ; build et postbuild de production conformes ; diff-check conforme
Largeurs et états contrôlés : 320, 390, 768, 1 024 et 1 440 px ; clair et sombre ; chronologie, cartes, tableaux, CTA, FAQ et footer sans débordement
Route, OG et console : route 200, H1 unique, canonical et robots conformes ; OG 200 en PNG 1 200 × 630 ; aucun overlay ni erreur navigateur
Snapshot final : docs/research/manifests/facturation-abonnements-saas-p4.sha256
Statut maximal : Publiable
Verdict : publiable en index/follow ; cela ne prouve ni crawl, ni indexation Google, ni position
```
