# Dossier de recherche — cahier des charges SaaS

Date de travail : **1er août 2026**
État : **passe 4 antipasse IA terminée — candidat local à G4, aucune autorisation de publication**

Ce dossier repart du gel d’entrée créé par l’orchestrateur. L’ancienne page et
les anciens manifestes ne sont ni une source, ni une validation, ni une base de
score. Les faits publiables ci-dessous viennent de sources primaires ou
officielles rouvertes le 1er août 2026. Les pages concurrentes servent seulement
à comprendre la demande actuelle.

---

## A. Identité et contrat de réponse

```text
Slug : cahier-des-charges-saas
Sujet roadmap : 26 — cadrer un produit multi-organisation, ses rôles et sa facturation
Requête principale : cahier des charges SaaS
Lecteur : fondatrice, fondateur ou dirigeant B2B non technique
Prérequis : problème, acheteur et premier parcours déjà validés
Situation : plusieurs prestataires doivent chiffrer le même produit sans inventer le périmètre
Décision : rendre le dossier comparable, ou prononcer STOP tant qu’une inconnue structurante subsiste
Action autonome : remplir puis copier un cahier des charges en Markdown dans le navigateur
Route de service : /services/saas-applications-metier
CTA final : /demarrer-un-projet
Date de recherche : 1er août 2026
Responsable P1 : /root/cahier_saas_p1_creation
```

### Réponse courte attendue

Un cahier des charges SaaS utile ne commence ni par une architecture, ni par un
prestataire de paiement, ni par une liste d’écrans. Il décrit les décisions
observables qui rendent le service vendable et exploitable : création d’une
organisation cliente, rôles et révocation, parcours métier, offres et droits
d’usage, cycle d’abonnement, échecs, support, données, sauvegarde, sortie et
preuves de réception. Chaque exigence doit nommer une personne responsable, une
preuve attendue, les exclusions et les inconnues qui imposent un STOP.

### Phrase que le lecteur pourrait prononcer

> « Mon idée est validée. Comment écrire un document assez précis pour que trois
> agences chiffrent le même SaaS sans que je leur impose déjà la solution ? »

### Promesse éditoriale

Le lecteur repart avec :

1. une structure de consultation propre au SaaS B2B ;
2. un test de comparabilité des réponses ;
3. un exemple DossierClair entièrement fictif et entièrement renseigné ;
4. un générateur local qui produit un document Markdown lisible et copiable ;
5. une liste de STOP qui ne peut pas être compensée par une note globale.

### Hors-sujet explicites

- validation du problème, du segment ou de l’acheteur ;
- choix d’une architecture, d’un langage, d’un hébergeur ou d’une base ;
- choix de Stripe ou d’un autre prestataire de paiement ;
- fixation d’un prix, d’un budget, d’un délai, d’un niveau de service
  contractuel (SLA) ou d’un volume réel ;
- déclaration de conformité RGPD, WCAG, OWASP ou autre ;
- audit juridique, sécurité, accessibilité ou comptable individualisé ;
- contrat prêt à signer ;
- plan de recette complet, traité par le guide dédié.

---

## B. Gel d’entrée et frontières internes

Le fichier `docs/research/cahier-des-charges-saas-input-freeze.md` est l’entrée
immuable de P1. Il consigne notamment :

- le lecteur et le résultat attendu ;
- l’absence de réemploi automatique de l’ancien guide ;
- les routes internes autorisées ;
- l’interdiction de modifier les fichiers partagés pendant cette passe ;
- l’obligation de distinguer faits, hypothèses, décisions et exclusions.

### Pages internes relues

| Page ou dossier                              | Rôle actuel                                              | Frontière avec le nouveau guide                                                         | Lien public retenu         |
| -------------------------------------------- | -------------------------------------------------------- | --------------------------------------------------------------------------------------- | -------------------------- |
| `/guides/valider-idee-saas-avant-developper` | Décider si l’idée mérite un prochain test                | Le présent guide suppose problème, acheteur et premier parcours déjà validés            | Oui, au début              |
| `/guides/droits-acces-application-metier`    | Construire et tester une matrice détaillée de droits     | Le présent guide ne garde que les rôles, portées et refus nécessaires à la consultation | Oui, dans la section rôles |
| `/guides/plan-recette-application-metier`    | Préparer la chaîne de preuve et la décision de réception | Aucun lien : cette route n’est pas autorisée par le gel d’entrée de P1                  | Non                        |
| `/services/saas-applications-metier`         | Présenter l’accompagnement commercial                    | Le guide produit d’abord un livrable autonome et peut conclure STOP                     | Oui, tardivement           |
| `/guides`                                    | Répertoire éditorial                                     | Navigation, pas réponse au cahier des charges                                           | Oui, en fin                |
| `/demarrer-un-projet`                        | Décrire une demande                                      | CTA seulement après le livrable et les limites                                          | Oui, en fin                |

### Frontière avec le guide des droits d’accès

Le cahier des charges doit dire :

- quels rôles existent ;
- sur quelle organisation ou quel objet ils agissent ;
- comment une invitation, un changement et une révocation se comportent ;
- quels cas autorisés et refusés seront observés.

Il ne doit pas reconstruire la matrice complète ni choisir RBAC, ABAC, ReBAC ou
une technique d’implémentation. Un renvoi contextualisé vers le guide dédié
évite la cannibalisation.

### État d’intégration au début de P1

- le slug n’a pas encore d’entrée dans `src/lib/guides.ts` ;
- il figure encore dans `src/lib/legacy-guide-redirects.ts` ;
- ces deux fichiers sont hors du périmètre de l’agent P1 ;
- une route locale peut être créée, mais son intégration éditoriale appartient à
  l’orchestrateur après la porte G1.

---

## C. Analyse de la demande actuelle

### Requêtes observées le 1er août 2026

- `cahier des charges SaaS` ;
- `modèle cahier des charges SaaS` ;
- `cahier des charges logiciel SaaS exemple` ;
- `spécifications SaaS multi tenant rôles abonnement` ;
- `cahier des charges SaaS facturation récurrente`.

Search Console et Keyword Planner n’ont pas été ouverts. Aucun volume, aucune
difficulté et aucun taux de clic ne sont affirmés.

### Carte concurrentielle

| Page observée                                    | Angle visible                                                    | Bon point                       | Manque ou risque                                                                                                                    |
| ------------------------------------------------ | ---------------------------------------------------------------- | ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| CahierPro                                        | Générateur rapide pour plusieurs types de projets                | Rend le livrable concret        | Promet un résultat en quelques minutes et mélange choix fonctionnels, architecture, budget et planning                              |
| ARDN Tech, modèle SaaS 2026                      | Hébergement, isolation, disponibilité, montée en charge          | Reconnaît les spécificités SaaS | Fixe ou suggère des engagements techniques et commerciaux avant d’avoir exposé propriétaires et preuves ; propose un téléchargement |
| Aktislab, cahier des charges logiciel métier     | Contexte, utilisateurs, données, intégrations, critères de devis | Part du problème métier         | Moins centré sur organisation cliente, abonnement et remédiation d’échec                                                            |
| Captain Submit, cahier des charges d’application | Structure générique, périmètre, contraintes                      | Accessible au décideur          | Le SaaS peut rester une simple liste de modules, sans cycle client vendu                                                            |
| Journal du Freenaute                             | Entreprise, cible, fonctions, budget, délais                     | Panorama simple                 | Peu de séparation entre décision produit, hypothèse, exclusion et preuve de réception                                               |

### Angle mort retenu

Les modèles observés parlent facilement de « multi-tenant », « facturation » et
« scalabilité ». Ils décrivent moins souvent la chaîne complète qui relie une
organisation cliente à ses droits d’usage : qui crée le compte, qui invite,
quel droit est ouvert par quelle offre, que se passe-t-il après un échec de
paiement, qui peut accéder aux données en support, comment restaurer, exporter,
annuler et supprimer. Le nouveau guide prend cette chaîne comme signature.

### Différenciation éditoriale

```text
Entrée : trois devis peuvent décrire trois produits différents malgré le même titre.
Progression : frontières → organisation → parcours → droits d’usage → échecs → opérations → sortie → preuve.
Artefact : générateur Markdown local, sans score ni téléchargement.
Exemple : DossierClair, entièrement fictif, avec client séparé et cas de refus.
Conclusion : consultation comparable ou STOP, jamais une architecture choisie par le guide.
```

---

## D. Corpus officiel et fiche de preuves

Sources rouvertes le 1er août 2026.

| ID   | Fait utilisable                                                                                                                                                                                                                                                                | Source officielle ou primaire                                                                                         | Portée et limite                                                                                                                  | Conséquence pour le cahier des charges                                                                            |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| F01  | Les profils d’habilitation doivent limiter l’accès aux données nécessaires ; une demande est validée et les permissions obsolètes sont supprimées                                                                                                                              | CNIL, _Guide pratique RGPD — Sécurité des données personnelles_, version 2024 mise à jour 2026, fiche 5, p. 15        | Données personnelles ; recommandation de sécurité, pas modèle produit universel                                                   | Écrire rôle, portée, validation, révocation et preuve de refus                                                    |
| F02  | Les opérations de support doivent être encadrées ; l’accès de télémaintenance est ouvert à la demande, limité à l’intervention puis refermé                                                                                                                                    | CNIL, même guide, fiche 15, p. 36                                                                                     | Accès d’un prestataire aux données ; le guide ne fixe pas une durée universelle                                                   | Nommer approbateur, périmètre, trace, fermeture et test d’accès après fermeture                                   |
| F03  | Les sauvegardes doivent être réalisées et testées ; l’intégrité et la capacité de restauration sont vérifiées                                                                                                                                                                  | CNIL, même guide, fiche 17, p. 41                                                                                     | Mesures pour des données personnelles ; fréquence et objectifs dépendent du risque                                                | Exiger un scénario de restauration observable plutôt que « sauvegardes incluses »                                 |
| F04  | Le contrat de sous-traitance précise notamment responsabilités, sécurité, restitution, destruction, incidents et assistance                                                                                                                                                    | CNIL, même guide, fiche 14, p. 34–35                                                                                  | Article 28 du RGPD lorsque le prestataire est sous-traitant ; qualification à confirmer                                           | Séparer exigences produit, responsabilités contractuelles et décision juridique                                   |
| F05  | ASVS fournit une base de vérification et de spécification contractuelle ; la version stable est 5.0.0, publiée en mai 2025                                                                                                                                                     | OWASP ASVS, page projet officielle et branche `v5.0.0`                                                                | Standard de vérification, ni certification automatique ni conformité juridique                                                    | Référencer la version et transformer les contrôles retenus en tests                                               |
| F06  | ASVS 5.0.0 demande de documenter les restrictions fonctionnelles et sur les données, de contrôler l’accès côté service, d’appliquer immédiatement les changements d’autorisation ou des mesures compensatoires et d’empêcher les opérations inter-organisations non autorisées | OWASP ASVS `v5.0.0-8.1.1`, `v5.0.0-8.2.2`, `v5.0.0-8.3.1`, `v5.0.0-8.3.2`, `v5.0.0-8.4.1`                             | Les identifiants sont versionnés comme le recommande OWASP ; la solution dépend notamment du type de session                      | Tester les requêtes déjà ouvertes après changement de portée et un refus entre deux organisations fictives        |
| F07  | ASVS 5.0.0 prévoit que la désactivation ou suppression d’un compte termine ses sessions actives                                                                                                                                                                                | OWASP ASVS `v5.0.0-7.4.2`                                                                                             | L’exigence vise le compte désactivé ou supprimé ; elle n’impose pas de fermer toute session après le retrait d’une seule adhésion | Distinguer retrait d’une portée, qui doit être refusée, et désactivation du compte, qui termine les sessions      |
| F08  | WCAG 2.2 exige notamment l’usage au clavier, un focus visible, des erreurs décrites en texte, des labels/instructions et des messages de statut perceptibles par les technologies d’assistance                                                                                 | W3C, WCAG 2.2, critères 2.1.1, 2.4.7, 3.3.1, 3.3.2 et 4.1.3                                                           | Critères de contenu Web ; aucune conformité n’est déduite d’une checklist                                                         | Écrire des cas de réception accessibles et observables                                                            |
| F09  | Une intégration d’abonnement peut comporter plusieurs états et événements ; le produit doit coordonner ces états avec ses propres droits d’accès                                                                                                                               | Stripe Docs, _Using webhooks with subscriptions_                                                                      | Illustration d’un fournisseur, pas recommandation de choisir Stripe ni modèle universel                                           | Exiger une table produit « événement → état interne → droit → message → remédiation » indépendante du fournisseur |
| F09b | Stripe indique que les événements peuvent être livrés dans un ordre différent de leur génération et qu’un endpoint peut recevoir un même événement plusieurs fois                                                                                                              | Stripe Docs, _Receive Stripe events in your webhook endpoint_, sections _Event ordering_ et _Handle duplicate events_ | Contre-cas propre à cette documentation fournisseur ; il ne prouve pas le comportement de tous les prestataires                   | Tester ordre différent et doublon, sans copier l’architecture ni le vocabulaire Stripe                            |
| F10  | Le chapitre VI du Data Act traite du changement de fournisseurs de services de traitement de données et définit les données exportables ; les articles 23 à 25 ne créent pas un droit universel pour tout abonnement nommé SaaS                                                | Règlement (UE) 2023/2854, art. 2, 23–25 ; Commission européenne, _Data Act explained_                                 | Qualification juridique nécessaire ; le règlement vise les services entrant dans sa définition et prévoit aussi des exclusions    | Écrire contractuellement export et sortie sans prétendre que le Data Act s’applique automatiquement               |
| F11  | Une cession de droits d’auteur doit mentionner distinctement les droits cédés et délimiter leur exploitation                                                                                                                                                                   | Code de la propriété intellectuelle, art. L131-3, Légifrance                                                          | Droit français ; ne dit pas qui détient automatiquement chaque livrable logiciel dans tous les montages                           | Distinguer export des données clientes, remise des livrables et droits sur le code ; faire valider le contrat     |

### Sources canoniques retenues

- CNIL, guide sécurité mis à jour en mai 2026 :
  `https://www.cnil.fr/sites/default/files/2026-05/cnil_guide_securite_personnelle.pdf`
- OWASP ASVS :
  `https://owasp.org/www-project-application-security-verification-standard/`
- OWASP ASVS 5.0.0, branche figée :
  `https://github.com/OWASP/ASVS/tree/v5.0.0`
- W3C WCAG 2.2 : `https://www.w3.org/TR/WCAG22/`
- Stripe, illustration abonnement :
  `https://docs.stripe.com/billing/subscriptions/webhooks`
- Stripe, contre-cas de livraison des événements :
  `https://docs.stripe.com/webhooks`
- Règlement (UE) 2023/2854 :
  `https://eur-lex.europa.eu/eli/reg/2023/2854/oj?locale=fr`
- Commission européenne, explication du Data Act :
  `https://digital-strategy.ec.europa.eu/en/factpages/data-act-explained`
- Légifrance, article L131-3 :
  `https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958`

### Registre des affirmations publiques prévues

| ID  | Affirmation                                                                                                                                                      | Type                       | Appui              | Statut P1                                            |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ------------------ | ---------------------------------------------------- |
| A01 | Plusieurs devis ne sont comparables que s’ils répondent aux mêmes décisions, hypothèses et exclusions                                                            | Déduction de méthode       | Contrat de réponse | Retenue, sans statistique                            |
| A02 | Un rôle sans portée et sans cas refusé est insuffisant                                                                                                           | Recommandation de sécurité | F01, F05–F07       | Retenue                                              |
| A03 | Un retrait de portée doit être testé sur les requêtes issues d’une session déjà ouverte ; la désactivation ou suppression du compte termine ses sessions actives | Recommandation vérifiable  | F06, F07           | Corrigée en P2 pour distinguer adhésion et compte    |
| A04 | « Sauvegardé » ne prouve pas « restaurable »                                                                                                                     | Déduction opérationnelle   | F03                | Retenue                                              |
| A05 | Un accès support permanent par défaut est à éviter pour les données personnelles                                                                                 | Recommandation bornée      | F02                | Retenue, formulation conditionnelle                  |
| A06 | Le fournisseur de paiement ne doit pas dicter seul les droits du produit                                                                                         | Déduction d’intégration    | F09                | Retenue, Stripe seulement illustratif                |
| A07 | Toute sortie SaaS est légalement couverte par les articles 23 à 25 du Data Act                                                                                   | Fait supposé               | —                  | Rejetée comme trop large                             |
| A08 | Le document peut demander un export et une suppression contractuels même si la qualification Data Act reste inconnue                                             | Recommandation prudente    | F04, F10           | Retenue                                              |
| A09 | Citer WCAG ou OWASP vaut conformité                                                                                                                              | Fait supposé               | —                  | Rejetée                                              |
| A10 | Le scénario DossierClair représente un client réel                                                                                                               | Fait supposé               | —                  | Rejetée ; exemple fictif étiqueté avant toute donnée |

### Raccourcis interdits

- « conforme RGPD », « conforme WCAG » ou « certifié OWASP » sans audit et
  périmètre appropriés ;
- « architecture multi-tenant obligatoire » : le besoin est une séparation
  observable entre organisations, pas une technique imposée ;
- « Stripe est le standard » ou reprise de ses statuts comme modèle produit ;
- « disponibilité 99,9 % », « réponse en deux secondes », délai de support,
  budget, prix ou planning inventé ;
- « sauvegarde quotidienne » comme fréquence universelle ;
- « export de toutes les données imposé par le Data Act » sans qualification ;
- « le client est propriétaire de tout le code » sans lecture contractuelle ;
- faux bouton de téléchargement, XLS, XLSX ou CSV ;
- score global qui compense une inconnue bloquante.

---

## E. Architecture d’information du guide

| Section                          | Question du lecteur                                  | Décision ou livrable                                                         | Preuve ou source      |
| -------------------------------- | ---------------------------------------------------- | ---------------------------------------------------------------------------- | --------------------- |
| 01. Réponse immédiate            | Qu’est-ce qu’un cahier des charges SaaS comparable ? | Règle décision–responsable–preuve–exclusion–inconnue                         | A01                   |
| 02. Entrées et frontières        | Que faut-il savoir avant d’écrire ?                  | Prérequis validés, inclusions et STOP                                        | Gel d’entrée          |
| 03. Organisation cliente         | Qui crée, administre, invite et révoque ?            | Cycle de vie organisation et adhésion                                        | F01, F07              |
| 04. Parcours et droits           | Que vend le produit et qui peut agir ?               | Parcours principal, objets, rôles, portées et refus                          | F05–F07               |
| 05. Offre et abonnement          | Quel droit naît d’une offre et comment évolue-t-il ? | Catalogue, droits d’usage, états, échecs et remédiation                      | F09                   |
| 06. Exploitation et données      | Comment administrer, soutenir, restaurer et sortir ? | Administration, support, données, rétention, sauvegarde, export, suppression | F02–F04, F10          |
| 07. Exigences non fonctionnelles | Comment remplacer « rapide, sécurisé, accessible » ? | Conditions, méthode, seuil à décider, preuve, propriétaire                   | F03, F05–F08          |
| 08. Générateur local             | Le dossier est-il consultable ou en STOP ?           | Markdown copiable, aucun score                                               | Moteur testé          |
| 09. DossierClair                 | À quoi ressemble un exemple complet ?                | Exemple fictif, fournisseurs comparables, limites                            | Hypothèses ci-dessous |
| 10. Consultation                 | Que remettre et que demander ensuite ?               | Pack de consultation et prochaine action                                     | Synthèse              |

### Vocabulaire à traduire

| Terme          | Traduction choisie                                                                   |
| -------------- | ------------------------------------------------------------------------------------ |
| tenant         | organisation cliente ; « locataire » seulement dans une note technique si nécessaire |
| entitlement    | droit d’usage ouvert par une offre ou une décision commerciale                       |
| dunning        | relance et remédiation après un paiement non abouti                                  |
| provisioning   | ouverture effective des droits d’usage                                               |
| deprovisioning | retrait ou réduction effective des droits                                            |
| back-office    | espace d’administration et d’exploitation                                            |
| NFR            | exigence non fonctionnelle, observable et testable                                   |

---

## F. Modèle de décision du générateur

### Principe

Le générateur ne calcule aucune note. Chaque bloc produit cinq lignes :

```text
Décision : ce que le produit doit faire ou refuser
Responsable : personne qui peut trancher ou accepter
Preuve de réception : scénario, mesure ou pièce observable
Exclusion : ce qui n’est pas demandé dans ce lot
Inconnue bloquante : décrire le STOP ou écrire « Aucune identifiée »
```

La cinquième ligne est un champ éditable distinct. Sa sémantique est
conservatrice et ne dépend d’aucun score :

- champ vide : `STOP`, car la déclaration manque ;
- déclaration normalisée exactement égale à `Aucune identifiée` : aucun
  blocage déclaré pour ce bloc ;
- toute autre valeur non vide : elle décrit une inconnue et force `STOP`.

Un responsable, une preuve, une exclusion ou un autre bloc complet ne peut
jamais compenser cette cinquième ligne.

### Blocs du document

1. produit vendu et premier parcours ;
2. cycle de vie de l’organisation cliente ;
3. invitations, rôles, portées et révocation ;
4. offres et droits d’usage ;
5. cycle de l’abonnement ;
6. échecs, correction et exploitation ;
7. données, conservation et accès support ;
8. sauvegarde, restauration, résiliation et sortie ;
9. exigences non fonctionnelles et réception.

### États du moteur

| État                              | Condition                                                                                                                             | Signification                                                                                                     |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `STOP_REQUIRED_INPUTS_UNKNOWN`    | Le nom ou une décision structurante manque, une déclaration d’inconnue bloquante est vide, ou sa valeur n’est pas `Aucune identifiée` | La consultation n’est pas comparable ; la liste exacte des STOP et leur détail sont affichés                      |
| `CLARIFY_BEFORE_COMPARISON`       | Les décisions existent, chaque bloc déclare `Aucune identifiée`, mais un responsable, une preuve ou une exclusion manque              | Le produit est décrit, mais les réponses des prestataires resteront interprétables                                |
| `CANDIDATE_FOR_VENDOR_COMPARISON` | Les cinq champs des neuf blocs sont renseignés et chacun déclare explicitement `Aucune identifiée`                                    | Le document peut être relu pour consultation ; le moteur ne valide ni sa vérité, ni son contrat, ni sa conformité |

### Marqueurs conservateurs

Les chaînes vides, `à décider`, `inconnu`, `TBD`, `à confirmer` et `STOP` sont
traitées comme des inconnues, même si le champ contient d’autres mots. Une
phrase telle que « à décider après le devis » ne devient donc pas favorable.
Ce traitement concerne le nom, la décision, le responsable, la preuve et
l’exclusion. La cinquième ligne suit la règle plus stricte décrite ci-dessus :
seule la déclaration normalisée `Aucune identifiée` ne bloque pas.

### Absence de persistance

- état React de la page uniquement ;
- aucun `fetch`, `XMLHttpRequest`, cookie, stockage local ou session ;
- aucune API et aucun envoi ;
- copie par l’API du presse-papiers avec texte toujours sélectionnable ;
- bouton de réinitialisation ;
- exemple fictif chargeable ;
- aucun téléchargement.

---

## G. Exemple complet — DossierClair, entièrement fictif

**Étiquette obligatoire avant toute donnée :** DossierClair, Atelier Nord,
Studio Rivage, Claire et Léa sont inventés. Ils ne représentent aucun client,
logiciel, contrat, tarif ou résultat réel de Hagnéré Code.

### Produit et premier parcours

- Problème déjà validé : de petits cabinets de conseil perdent la trace des
  pièces attendues avant l’ouverture d’une mission.
- Acheteuse : dirigeante du cabinet, autorisée à engager l’abonnement.
- Utilisatrice principale : responsable de mission.
- Premier parcours vendu : Claire crée Atelier Nord, invite Léa, ouvre un
  dossier, demande une pièce à un contact externe, Léa qualifie la pièce et
  Claire clôture la demande.
- Résultat : un dossier montre qui attend quoi, le statut de chaque pièce et la
  prochaine action ; le guide ne promet aucun gain chiffré.
- Contre-cas fictif : le même jeu est rejoué avec une fonction déjà payée et un
  processus manuel. L’annexe de consultation conserve les écarts décisifs ; si
  une option plus simple couvrait le résultat et les refus attendus, la décision
  correcte serait de ne pas développer.

### Organisation, rôles et révocation

- Atelier Nord est une organisation cliente distincte de Studio Rivage.
- Une acheteuse crée l’organisation initiale et devient propriétaire ; le
  transfert de propriété exige une décision explicite d’une seconde personne
  habilitée.
- Rôles : propriétaire, administratrice, contributrice et contact externe.
- Portées : les rôles internes agissent seulement dans leur organisation ; le
  contact externe voit seulement les demandes qui lui sont adressées.
- Invitation : adresse, rôle, organisation, expiration et personne invitante
  sont visibles avant confirmation.
- Révocation : après retrait de l’adhésion de Léa à Atelier Nord, les requêtes
  vers Atelier Nord sont refusées, y compris depuis une session déjà ouverte,
  sans modifier un éventuel accès à une autre organisation. Si le compte entier
  est désactivé ou supprimé, toutes ses sessions actives prennent fin. Une trace
  permet de relire auteur, date, action et organisation sans enregistrer le
  contenu des pièces dans le journal.
- Test négatif : Claire, connectée à Atelier Nord, ne peut ni voir ni modifier
  un dossier de Studio Rivage, même en utilisant directement son identifiant.

### Offre, droits d’usage et abonnement

- L’offre `Équipe` fictive ouvre la création de dossiers, les invitations
  internes, les contacts externes et l’export des dossiers de l’organisation.
- Le prix, le nombre de sièges et les quotas sont volontairement hors de
  l’exemple : chaque prestataire doit les traiter comme paramètres fournis par
  le commanditaire, jamais comme choix technique implicite.
- États produit : `à_activer`, `active`, `régularisation`, `résiliée` et
  `sortie_terminée`. Ces noms appartiennent au produit fictif, pas à Stripe.
- Un paiement confirmé ouvre les droits prévus par l’offre une seule fois, même
  si le même événement est reçu plusieurs fois.
- Un paiement non abouti place l’organisation en `régularisation`, affiche une
  action de correction à la propriétaire et conserve les données. Le contrat
  commercial décide séparément quand et comment les droits sont réduits ; le
  prestataire ne doit ni supprimer les dossiers ni inventer ce délai.
- Une régularisation confirmée rétablit les droits sans recréer l’organisation.
- Si le service de paiement ou de notification fictif est indisponible, la
  transition reste en attente et visible. La supervision détecte l’écart,
  l’exploitation applique la reprise prévue et aucun droit n’est ouvert,
  retiré ou dupliqué silencieusement.
- Une résiliation empêche un nouveau renouvellement, conserve l’accès prévu
  pour la sortie contractuelle puis mène à `sortie_terminée` après export et
  validation de la suppression.

### Administration, support, données et restauration

- L’administration interne recherche une organisation par identifiant non
  sensible, voit son état produit et peut déclencher seulement les actions
  autorisées et tracées.
- Le support n’accède pas par défaut aux pièces. Claire demande une intervention,
  approuve le périmètre et l’accès est refermé après l’intervention ; une
  requête de contrôle confirme ensuite le refus.
- Données : organisation, adhésions, demandes de pièces, métadonnées de fichier,
  états, journal d’actions et données de facturation strictement nécessaires.
- Les finalités, bases juridiques et durées de conservation sont attribuées à la
  responsable du traitement fictive et restent à confirmer juridiquement hors
  du cahier des charges produit.
- Sauvegarde : le fournisseur décrit la copie, la protection et le scénario de
  restauration. La preuve attendue est une restauration en environnement de
  test d’un jeu fictif, avec contrôle d’intégrité, écarts et responsable.
- Aucun objectif de perte de données, de reprise ou de disponibilité n’est
  inventé par ce guide ; le commanditaire doit les décider après analyse de
  risque avant toute promesse contractuelle.

### Accessibilité, performance, sécurité et sortie

- Clavier : Claire accomplit le parcours principal, corrige une erreur et copie
  un export sans souris ; le focus reste visible.
- Mobile et thèmes : le parcours reste lisible à 320 px, en mode clair et sombre,
  sans perte de contenu ni défilement horizontal du document.
- Erreurs et statuts : une erreur identifie le champ et la correction en texte ;
  une confirmation est annoncée sans déplacement forcé du focus.
- Performance : le prestataire fournit un protocole, l’environnement, le jeu de
  données et les mesures. Le seuil contractuel est une décision du commanditaire,
  pas une valeur inventée par le guide.
- Capacité : l’hypothèse de consultation entièrement fictive contient 20
  organisations, 100 personnes internes et 2 000 dossiers. Un second passage
  utilise 40 organisations, 200 personnes et 4 000 dossiers. Les mesures,
  limites et variations de coût restent séparées ; ces nombres ne sont ni une
  norme ni une cible réelle.
- Sécurité : tests autorisé/refusé entre Atelier Nord et Studio Rivage, refus
  des requêtes Atelier Nord après retrait de l’adhésion, fin de toutes les
  sessions seulement si le compte entier est désactivé ou supprimé, et contrôle
  côté service ; ASVS 5.0.0 est un référentiel de sélection, pas une
  certification.
- Sortie : Claire peut obtenir un export documenté des données de son
  organisation, vérifier sa lisibilité, demander la résiliation et recevoir une
  preuve de l’effacement prévu. Les secrets internes du fournisseur et les
  droits sur le code sont traités séparément dans le contrat.

### Responsabilités et exclusions

- Sponsor produit fictif : tranche les rôles, offres, seuils et critères de
  réception.
- Responsable métier : valide le premier parcours et les règles de dossier.
- Responsable données : confirme catégories, finalités, conservation, support,
  export et suppression.
- Prestataire : explicite hypothèses, dépendances, preuves, responsabilités et
  variantes sans choisir silencieusement à la place du sponsor.
- Autorité de réception : personne nommée dans les documents applicables ; le
  moteur n’accepte jamais le produit automatiquement.
- Inconnues bloquantes : les neuf blocs déclarent une absence explicite. La
  valeur saisie est « Aucune identifiée » afin que l’exemple reste seulement
  candidat à une relecture.
- Exclus : architecture, fournisseur de paiement, prix, budget, planning,
  niveau de service contractuel (SLA), conformité déclarative et conseil
  juridique personnalisé.

### Coût complet à rendre comparable, sans montant inventé

Chaque réponse prestataire doit isoler, sur la même version du périmètre :

- cadrage, conception et reprise d’un existant ;
- intégrations, licences et consommation de tiers ;
- migration, contrôles d’import, formation et adoption ;
- supervision, support, maintenance corrective et évolutive, mises à jour et
  nouveaux tests après correction ;
- export, documentation, assistance au changement, récupération, suppression
  et preuve de sortie.

Une catégorie absente reste inconnue ou exclue ; elle ne devient jamais zéro.
Cette grille ne fixe aucun prix. Elle empêche seulement de comparer un devis
initial à une offre qui inclut aussi l’exploitation et la sortie.

---

## H. Tests et contrôles P1 prévus

### Moteur pur

- état vide = `STOP_REQUIRED_INPUTS_UNKNOWN` ;
- chaque décision structurante retirée de l’exemple = STOP correspondant ;
- déclaration d’inconnue bloquante vide = STOP correspondant ;
- `Aucune identifiée`, avec normalisation des accents, espaces, casse et
  ponctuation = absence explicite de blocage ;
- toute autre déclaration non vide d’inconnue bloquante = STOP avec le détail ;
- propriétaire, preuve ou exclusion absent = `CLARIFY_BEFORE_COMPARISON` ;
- exemple complet = `CANDIDATE_FOR_VENDOR_COMPARISON` avec avertissement ;
- marqueurs `à décider`, `TBD`, `inconnu`, `à confirmer` et `STOP` restent
  bloquants ;
- variantes accentuées ou non, en casse et ponctuation différentes, ainsi que
  `inconnue`, `inconnus`, `inconnues` et `non renseigne`, restent bloquantes ;
- valeurs de type inattendu normalisées en inconnues ;
- conteneurs et zéro numérique reçus hors interface normalisés en inconnues ;
- sortie déterministe et toutes les rubriques présentes ;
- aucun score, aucune compensation, aucun zéro implicite.

### Composant

- aucun envoi ou stockage ;
- labels explicites, focus visible, zones tactiles, navigation clavier ;
- sous-région concise `role="status"` limitée au verdict et à son explication ;
- listes de STOP, clarifications et prochaine action hors de cette région ;
- rendu mobile, clair et sombre ;
- chargement de l’exemple, réinitialisation et copie ;
- texte de repli sélectionnable si le presse-papiers échoue.

### Page et SEO

- `GuidePremiumLayout` ;
- H1 unique et intention alignée avec le titre social ;
- trois WebP dédiés et visibles : 16:9, 4:3 et 1:1 ;
- `Article` et `BreadcrumbList` seulement ;
- aucun `FAQPage`, `HowTo`, `Offer`, `Review`, `AggregateRating` ou `wordCount` ;
- liens internes limités aux routes du gel d’entrée ;
- aucun téléchargement, XLS, XLSX ou CSV ;
- canonical via les helpers actuels ;
- date de modification réelle ;
- intégration registre et redirection laissée explicitement à l’orchestrateur.

### Commandes prévues

```text
npx vitest run <tests du slug>
npx eslint <fichiers TypeScript/TSX du slug>
npx tsc --noEmit
npx prettier --check <fichiers du slug et dossier de recherche>
git diff --check
file + dimensions des SVG/WebP
contrôles source H1, structured data, liens et formats interdits
build si l’intégration partagée permet le prérendu
```

---

## I. Rapport d’exécution P1

### Reprise demandée par G1

G1 a prononcé `P1_A_REPRENDRE` après avoir constaté que le gel d’entrée et la
page décrivaient cinq natures par bloc alors que la première version du moteur
et de l’outil n’en exposait que quatre. La reprise corrige ce défaut sans
modifier de fichier partagé :

- ajout d’un champ `blockingUnknown` éditable séparément dans chacun des neuf
  blocs, le moteur, la sortie Markdown et les 45 zones de texte ;
- sémantique conservatrice testée : vide = STOP, `Aucune identifiée` normalisé =
  absence déclarée, toute autre valeur = STOP détaillé ;
- ajout de la déclaration explicite d’absence dans les neuf blocs de
  DossierClair ;
- déplacement de l’annonce dynamique vers une sous-région concise
  `role="status"`, avec listes et prochaine action hors de cette région ;
- nouveaux tests du moteur, du DOM interactif et du contrat de contenu.

### Livrables réalisés

- page premium complète avec dix sections, réponse directe, tableaux, limites,
  neuf FAQ et CTA tardifs ;
- moteur pur de neuf blocs non compensables ;
- générateur local avec saisie, statut, sortie Markdown sélectionnable, copie,
  exemple fictif et réinitialisation ;
- exemple DossierClair entièrement renseigné dans le moteur et affiché dans la
  page ;
- image Open Graph dédiée ;
- trois schémas éditoriaux originaux aux formats SVG et WebP, visibles dans la
  page ;
- tests du moteur, du composant et du contrat de contenu public ;
- dossier de recherche recréé à partir des sources rouvertes ;
- manifeste SHA-256 P1 couvrant le gel d’entrée et tous les fichiers propres au
  slug, hors manifeste lui-même.

### Contrôles exécutés le 1er août 2026

| Contrôle                                                           | Résultat                                          | Limite ou précision                                                                                                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Vitest ciblé : moteur, composant interactif et contrat de contenu  | **PASS — 3 fichiers, 43 tests**                   | Cinq champs, sémantique de l’inconnue bloquante, région de statut concise, états, exemple, copie, sources, liens, schémas et formats                       |
| ESLint ciblé sur le dossier du slug, avec zéro avertissement admis | **PASS — 0 erreur, 0 avertissement**              | Configuration officielle chargée depuis le checkout principal qui possède les dépendances                                                                  |
| TypeScript complet, sans émission ni incrément                     | **PASS — 0 erreur**                               | node_modules a été relié temporairement au magasin du checkout principal puis le lien a été retiré ; aucun fichier de dépendance ne reste dans le worktree |
| Prettier 3.6.2 sur les fichiers TS/TSX et le dossier de recherche  | **PASS**                                          | Tous les fichiers textuels propres au slug et le dossier de recherche ont été contrôlés                                                                    |
| Contrôle des espaces finaux Git                                    | **PASS après retrait de l’unique espace signalé** | Les fichiers non suivis sont couverts par Prettier, xmllint et les tests de contenu                                                                        |
| XML des trois SVG                                                  | **PASS**                                          | xmllint sans erreur                                                                                                                                        |
| WebP                                                               | **PASS**                                          | 1600 × 900, 1200 × 900 et 900 × 900 ; en-têtes RIFF/WEBP vérifiés                                                                                          |
| Inspection visuelle des trois WebP                                 | **PASS**                                          | Texte lisible, ratios cohérents, aucun contenu trompeur ou tronqué constaté                                                                                |
| Données structurées                                                | **PASS**                                          | Helpers actuels limités à Article et BreadcrumbList                                                                                                        |
| Liens internes                                                     | **PASS**                                          | Seulement validation SaaS, droits d’accès, hub, service SaaS et /demarrer-un-projet                                                                        |
| Outil local                                                        | **PASS**                                          | Aucun fetch, stockage navigateur, cookie, Blob, téléchargement ou export tableur                                                                           |
| Construction complète                                              | **NON EXÉCUTÉE — frontière d’intégration connue** | Le slug est volontairement absent de src/lib/guides.ts et encore présent dans les redirections ; ces fichiers partagés sont hors périmètre P1              |

La non-exécution du build n’est pas présentée comme un succès. Appeler la page
avant l’intégration partagée ferait échouer
getGuide("cahier-des-charges-saas"). L’orchestrateur doit ajouter l’entrée
éditoriale, traiter la redirection puis exécuter type-check, build, rendu et
contrôles de route sur l’état intégré.

### Contrôle des frontières

- aucun fichier partagé modifié ;
- aucun lien vers un ancien guide redirigé ;
- aucun choix d’architecture, fournisseur de paiement, prix, délai ou SLA ;
- aucune promesse de conformité ou de portabilité universelle ;
- aucun score global et aucune branche bloquante compensée ;
- aucun fichier XLS, XLSX ou CSV créé ou proposé ;
- aucun commit, push, déploiement, publication ou contrôle public effectué.

### Défauts ouverts dans le périmètre P1

> P0 ouverts : 0
> P1 ouverts : 0
> P2 ouverts : 0
> P3 ouverts : 0

### Passages de relais obligatoires

1. ajouter le guide au registre central avec son statut éditorial et ses trois
   images ;
2. traiter la redirection historique sans créer de route concurrente ;
3. relancer les contrôles globaux, le build et la preuve de HTML servi après
   intégration ;
4. soumettre le contenu à une passe 2 indépendante, sans réutiliser ce verdict
   comme preuve de qualité finale.

> Verdict P1 : **GO_PASSE_2**
> Portée : candidat local complet dans les fichiers propres au slug
> Autorisation de publication : **NON**
> Commit : **NON EFFECTUE**
> Push : **NON EFFECTUE**
> Déploiement : **NON EFFECTUE**
> Publication : **NON EFFECTUEE**
> URL publique : **NON VERIFIEE**
> Indexation : **NON VERIFIEE**

Ce verdict autorise seulement la passe 2 indépendante. Il ne vaut ni
GO_QUALITE_GUIDE, ni validation G1 de l’orchestrateur, ni autorisation de
commit, de push ou de publication.

---

## J. Journal de passe 2 — vérification contradictoire

- Date : **1er août 2026**
- Agent : **`/root/cahier_saas_p2_contradiction`**
- Portée : **fichiers propres au slug, lecture seule du gel d’entrée et du
  manifeste P1, sans intégration partagée**

### Gel contrôlé avant toute correction

- le manifeste P1 a été relu avant les modifications P2 : **15 entrées sur 15
  conformes** ;
- son empreinte externe initiale et toujours actuelle est
  `716780da7cb13437b35118ea598418ad0b697cf689518c86a62ac3381bf1d845` ;
- le manifeste P1 n’a pas été modifié pendant la passe 2. Ses empreintes
  décrivent donc volontairement l’instantané P1 et ne doivent pas être
  présentées comme conformes aux fichiers corrigés en P2 ;
- le gel d’entrée, la page, l’outil, le moteur, les trois fichiers de tests
  (moteur, outil et `content-quality`), l’image Open Graph, les trois paires
  SVG/WebP, le dossier de recherche et le manifeste P1 ont été lus
  intégralement.

### Sources officielles rouvertes et limites conservées

| Source                                                                | Contrôle contradictoire                                                                                            | Limite retenue                                                                                                                         |
| --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------- |
| CNIL, guide de la sécurité des données personnelles, édition mai 2026 | Habilitations p. 15, sous-traitance p. 34-35, maintenance et support p. 36-37, sauvegarde et restauration p. 41-42 | Le guide fournit des mesures de cadrage et de preuve ; il ne certifie pas un produit                                                   |
| OWASP ASVS 5.0.0                                                      | Exigences 8.1.1, 8.2.2, 8.3.1, 8.3.2, 8.4.1 et 7.4.2 vérifiées dans la version officielle                          | Le retrait d’une adhésion est distingué de la désactivation ou suppression du compte entier                                            |
| W3C, WCAG 2.2                                                         | Critères 2.1.1, 2.4.7, 3.3.1, 3.3.2 et 4.1.3 rouverts                                                              | Les critères deviennent des preuves à demander, jamais une promesse globale de conformité                                              |
| Stripe Docs, abonnements et réception des webhooks                    | États d’abonnement, absence de garantie d’ordre et possibilité de doublons confirmés                               | Illustration d’un fournisseur et contre-cas de test uniquement ; aucune recommandation de Stripe ni généralisation                     |
| Règlement (UE) 2023/2854 et présentation de la Commission             | Chapitre VI, articles 23 à 25 et 31, application depuis le 12 septembre 2025                                       | Le passage reste borné aux services de traitement de données et à leurs conditions ; aucune portabilité SaaS universelle n’est promise |
| Code de la propriété intellectuelle, article L. 131-3                 | Mention distincte des droits cédés et délimitation du domaine d’exploitation confirmées                            | Le passage demeure conditionnel à une cession et ne remplace pas une revue contractuelle                                               |

### Affirmations corrigées ou resserrées

1. **Marqueurs d’inconnue.** Le texte public annonçait que `inconnue` et les
   variantes d’accent, de casse et de ponctuation restaient bloquantes, alors
   que le moteur ne reconnaissait qu’une partie de ces formes. La
   normalisation couvre désormais `TBD`, `unknown`, les flexions de
   `inconnu/inconnue`, `STOP`, `à/a décider`, `à/a confirmer` et
   `non renseigné/non renseigne` sans relâcher la règle.
2. **Révocation de droits.** Une adhésion retirée à Atelier Nord doit rendre
   les requêtes Atelier Nord interdites, y compris depuis une session déjà
   ouverte, sans retirer les autres organisations. La terminaison de toutes
   les sessions est réservée à la désactivation ou suppression du compte
   entier, conformément au périmètre de l’ASVS 7.4.2 ; l’ASVS 8.3.2 documente
   le changement immédiat des autorisations ou ses contrôles compensatoires.
3. **Webhooks.** L’ordre différent et le doublon ont été ajoutés comme
   contre-cas officiels propres à la documentation Stripe, sans en déduire
   une architecture ni un comportement universel des prestataires.

Aucune affirmation soutenable n’a dû être retirée entièrement. Les formulations
sur la portabilité, la propriété intellectuelle et l’accessibilité restent
conditionnelles et bornées.

### Reproduction indépendante du moteur et cas limites

| Entrée reproduite                                                                                           | Résultat attendu et observé                                                                                                                                                                      |
| ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Projet entièrement vide                                                                                     | `STOP_REQUIRED_INPUTS_UNKNOWN`, 19 blocages : un nom de projet, neuf décisions et neuf déclarations d’inconnue ; 27 clarifications : responsable, preuve et exclusion dans chacun des neuf blocs |
| Exemple fictif DossierClair complet                                                                         | `CANDIDATE_FOR_VENDOR_COMPARISON`, aucun blocage et aucune clarification                                                                                                                         |
| Une décision vide ou contenant un marqueur                                                                  | STOP, sans compensation possible par les huit autres blocs                                                                                                                                       |
| Un responsable, une preuve ou une exclusion vide                                                            | `CLARIFY_BEFORE_COMPARISON`, jamais candidat                                                                                                                                                     |
| Déclaration exactement « Aucune identifiée » après normalisation des espaces, accents, casse et ponctuation | Le STOP propre à cette déclaration est levé                                                                                                                                                      |
| Déclaration vide ou tout autre texte, y compris « Aucune identifiée sauf… »                                 | STOP conservateur et détaillé                                                                                                                                                                    |
| Valeur non textuelle injectée à l’exécution, dont zéro                                                      | Valeur traitée comme vide, donc STOP ; aucune exception ni validation accidentelle                                                                                                               |
| Volumes fictifs de l’exemple soumis au stress ×2                                                            | 20 × 2 = 40 organisations ; 100 × 2 = 200 personnes ; 2 000 × 2 = 4 000 dossiers                                                                                                                 |

Le moteur ne calcule aucun score global : une ligne bloquante ne peut donc pas
être compensée. Sa sortie qualifie seulement la complétude formelle des
réponses, jamais leur véracité, leur faisabilité, leur conformité ni leur
valeur contractuelle.

### Enrichissements décisifs G2

- comparaison obligatoire entre développement neuf, fonctionnalité déjà
  payée, option manuelle ou allégée et décision de ne pas développer ;
- inventaire comparable des familles de coûts sans montant inventé : cadrage
  et reprise, intégrations et licences, migration et adoption, exploitation et
  maintenance, sortie ;
- scénario d’indisponibilité d’un tiers avec détection, attente ou mode dégradé,
  réconciliation ou retour arrière, absence de perte silencieuse de droits ou
  de données et responsable nommé ;
- test au volume déclaré puis à son double, en séparant mesures et variation de
  coût ;
- volumes DossierClair explicitement fictifs : 20 organisations, 100 personnes
  et 2 000 dossiers, puis 40, 200 et 4 000 dans le scénario doublé.

### Contrôles P2 et risques résiduels

| Contrôle                                             | Résultat P2                                                      |
| ---------------------------------------------------- | ---------------------------------------------------------------- |
| Vitest ciblé moteur, composant et contrat de contenu | **PASS — 3 fichiers, 55 tests**                                  |
| ESLint ciblé, zéro avertissement admis               | **PASS — 0 erreur, 0 avertissement**                             |
| TypeScript complet sans émission ni incrément        | **PASS — 0 erreur**                                              |
| Prettier                                             | **PASS**                                                         |
| XML des trois SVG                                    | **PASS**                                                         |
| Dimensions et en-têtes des trois WebP                | **PASS — 1600 × 900, 1200 × 900 et 900 × 900**                   |
| `git diff --check`                                   | **PASS**                                                         |
| Build, rendu navigateur, route servie                | **NON EXÉCUTÉS — réservés à l’état intégré par l’orchestrateur** |

Risques résiduels : la qualification d’un service et des obligations précises
du Data Act dépend du cas ; les volumes DossierClair sont pédagogiques et non
des objectifs ; la complétude déclarative de l’outil ne prouve pas la vérité
produit ; le build, le BAT navigateur et la preuve de route attendent
l’intégration des fichiers partagés.

Fichiers corrigés ou enrichis en P2 :

- `src/app/guides/cahier-des-charges-saas/saas-specification-engine.ts` ;
- `src/app/guides/cahier-des-charges-saas/saas-specification-engine.test.ts` ;
- `src/app/guides/cahier-des-charges-saas/page.tsx` ;
- `src/app/guides/cahier-des-charges-saas/content-quality.test.ts` ;
- `docs/research/cahier-des-charges-saas.md`.

Manifeste P2 :
`docs/research/manifests/cahier-des-charges-saas-p2.sha256`, couvrant exactement
le gel d’entrée, le dossier de recherche et les treize fichiers propres au slug,
hors manifestes P1 et P2. Son empreinte externe est fournie dans le passage de
relais afin d’éviter toute boucle de hachage.

> P0 ouverts après P2 : 0
>
> P1 ouverts après P2 : 0
>
> Décision proposée à l’orchestrateur : **GO_PASSE_3**
>
> Publication : **NON AUTORISÉE**

Ce journal produit un **candidat G2 local**. Le verdict G2, l’intégration, le
build, le BAT, le commit et le push appartiennent exclusivement à
l’orchestrateur.

---

## K. Journal de passe 3 — polish rédactionnel

- Date : **1er août 2026**
- Agent : **`/root/cahier_saas_p3_polish`**
- Portée : **fichiers propres au slug uniquement, sans modification du fond,
  du gel d’entrée, des manifestes P1/P2 ni de la logique de décision**

### Instantané P2 figé avant toute correction

- le manifeste P2 a été vérifié avant la première modification P3 : **15
  entrées sur 15 conformes** ;
- son empreinte externe vérifiée est
  `0623b6b98b6cd8384553011ef8343c6d499852acd98b4464af28b25abdd1273f` ;
- le manifeste P2 n’a pas été modifié pendant P3. Il reste la preuve de
  l’instantané remis à cette passe, pas celle des fichiers polis ensuite ;
- le prompt P3/G3, le gel d’entrée, la page, le moteur, l’outil, les trois
  fichiers de tests, tout le présent dossier de recherche et le manifeste P2
  ont été lus intégralement avant le verdict de passe.

### Reprise demandée par G3

G3 a renvoyé `P3_A_REPRENDRE` pour quatre écarts de surface, sans contester le
fond ni la logique du moteur :

- l’accord est corrigé en « Anciennes et nouvelles responsabilités visibles » ;
- la dernière occurrence publique de `retest` devient « nouveau test après
  correction » ;
- le visuel 16:9 affiche désormais « message · correction » ;
- la description et le titre du visuel 4:3 utilisent « action de correction »
  et « CORRECTION ».

Les WebP 16:9 et 4:3 ont été régénérés depuis leurs SVG à leurs dimensions
initiales, 1600 × 900 et 1200 × 900. Leur inspection visuelle confirme que les
nouveaux libellés sont lisibles, non tronqués et cohérents avec les autres
cartes. Le WebP 1:1, non concerné, n’a pas été régénéré.

Le contrat de contenu interdit maintenant explicitement, dans la page, le
moteur, l’outil et les SVG publics, les formes `back-office`, `remédiation`,
`réconcilier`, `scalable`, `retest` et `retests`. Le dossier de recherche reste
hors de ce contrôle afin de conserver honnêtement le vocabulaire des sources et
le journal des corrections.

### Trois lectures effectuées

**Dirigeant pressé.** Le titre éditorial, le héros, la promesse sociale et la
metadata disent désormais la même chose : faire chiffrer le même produit. La
description du héros tient en deux phrases. Les 150 premiers mots conservent la
réponse avant le premier visuel : produit vendu, organisation, droits,
abonnement, échec, sortie, responsable, preuve, exclusion et STOP.

**Lecteur méfiant.** Aucune limite factuelle de P2 n’a été retirée. Les passages
denses ASVS et WCAG ont été découpés en listes lisibles, mais chaque version,
identifiant, portée et avertissement reste présent. La réponse FAQ sur le Data
Act commence directement par « Non, pas automatiquement », puis conserve le
champ, les catégories et la qualification nécessaires.

**Lecteur sur téléphone.** La table d’abonnement à cinq colonnes utilise
désormais le composant `GuideTable`, qui présente les lignes sous forme de
cartes sur petit écran et garde la table défilable sur écran plus large. Les
paragraphes les plus denses de l’introduction, du Data Act et du mode d’emploi
de l’outil ont été scindés sans retirer d’information.

### Problèmes de lisibilité corrigés

- promesse de metadata réalignée sur le H1 et l’image sociale ;
- héros raccourci et première réponse fractionnée sans retarder la conclusion ;
- tableau d’abonnement rendu lisible sur mobile, sans supprimer aucun état ni
  contre-cas ;
- listes ASVS et WCAG aérées pour que chaque identifiant puisse être contrôlé
  séparément ;
- transitions causales ajoutées seulement aux ruptures utiles : organisation
  vers droits, droits vers offre, exploitation vers sortie, sortie vers
  exigences et exigences vers trame ;
- mode d’emploi des 45 champs séparé en trois idées : décision, déclaration de
  STOP et absence de score ;
- libellé de l’outil corrigé : le document est commun aux prestataires, ce ne
  sont pas les prestataires qui le comparent entre eux.

### Jargon retiré ou défini

- `back-office` devient « espace d’administration » ;
- `remédiation` devient « action de correction » ;
- `réconcilier` devient « remettre l’état en cohérence » ;
- `scalable` devient « tenir la charge » ;
- `retest` devient « nouveau test après correction » ;
- la première occurrence publique de `SLA` est développée en « niveau de
  service contractuel » ;
- le fonctionnement réduit définit le « mode dégradé » et le plan de recette
  est présenté comme le document détaillant les tests de réception ;
- la portée d’un droit est reliée concrètement à l’organisation, au dossier ou
  à la donnée concernée.

### FAQ et duplication

Les neuf réponses commencent par la décision ou l’action attendue. Elles
restent des réponses courtes de décision, sans recopier les tableaux ni les cas
DossierClair du corps. La FAQ ne transforme ni une source illustrative en
recommandation, ni un contrôle en promesse de conformité.

### Faits et nuances laissés inchangés

- CNIL 2026, OWASP ASVS 5.0.0 et ses six identifiants, WCAG 2.2 et ses cinq
  critères, Stripe comme illustration bornée, Data Act à qualifier et article
  L131-3 restent sourcés et limités comme en P2 ;
- le retrait d’une adhésion reste distinct de la désactivation ou suppression
  du compte entier ;
- les alternatives au développement, les familles de coût complet, le tiers
  indisponible et le passage fictif au volume doublé restent visibles ;
- DossierClair reste explicitement fictif avant toute donnée ;
- les neuf blocs et leurs cinq champs restent indépendants, avec la même règle
  STOP conservatrice et sans score ;
- aucune promesse de prix, délai, SLA, conformité, certification, résultat ou
  acceptation automatique n’a été ajoutée ;
- aucune donnée n’est envoyée ou stockée et aucun XLS, XLSX ou CSV n’est créé
  ou proposé ;
- aucun fichier partagé, dépendance, lockfile, registre ou verrou n’a été
  modifié ; aucun serveur, build, BAT, commit, push ou déploiement n’a été
  exécuté pendant P3.

### Contrôles P3

| Contrôle                                             | Résultat P3                                                       |
| ---------------------------------------------------- | ----------------------------------------------------------------- |
| Manifeste P2 avant correction                        | **PASS — 15/15, empreinte externe conforme**                      |
| Vitest ciblé moteur, composant et contrat de contenu | **PASS — 3 fichiers, 56 tests**                                   |
| ESLint ciblé, zéro avertissement admis               | **PASS — 0 erreur, 0 avertissement**                              |
| TypeScript complet sans émission ni incrément        | **PASS — 0 erreur**                                               |
| Prettier sur tous les textes propres au slug         | **PASS**                                                          |
| XML des trois SVG                                    | **PASS**                                                          |
| WebP                                                 | **PASS — 1600 × 900, 1200 × 900 et 900 × 900**                    |
| Inspection visuelle des WebP 16:9 et 4:3 repris      | **PASS — textes lisibles, non tronqués et sens préservé**         |
| `git diff --check`                                   | **PASS**                                                          |
| Build, serveur et BAT navigateur                     | **NON EXÉCUTÉS — hors périmètre P3 et réservés à l’état intégré** |

Manifeste P3 :
`docs/research/manifests/cahier-des-charges-saas-p3.sha256`, couvrant le gel
d’entrée, le dossier de recherche et les treize fichiers propres au slug, hors
manifestes P1, P2 et P3. Son empreinte externe est fournie dans le passage de
relais.

> P0 ouverts après P3 : 0
>
> P1 ouverts après P3 : 0
>
> Décision proposée à l’orchestrateur : **GO_PASSE_4**
>
> Publication : **NON AUTORISÉE**

Ce journal produit un **candidat G3 local**. Le verdict G3, la passe 4,
l’intégration, le build, le BAT, le commit et le push appartiennent
exclusivement à l’orchestrateur.

---

## L. Journal de passe 4 — antipasse IA

- Date : **1er août 2026**
- Agent : **`/root/cahier_saas_p4_antiai`**
- Portée : **voix, rythme et enchaînement des fichiers propres au slug,
  sans modification du fond, du gel d’entrée, des manifestes P1/P2/P3 ni de
  la logique du moteur**

### Instantané P3 figé avant toute correction

- le manifeste P3 a été vérifié avant la première modification P4 : **15
  entrées sur 15 conformes** ;
- son empreinte externe vérifiée est
  `1d63297e922357c42f034c6ec64b66299af7051c9c6d00f8c9c3e4244b5beea8` ;
- le manifeste P3 n’a pas été modifié pendant P4. Il reste la preuve de
  l’instantané remis à cette passe, pas celle des fichiers corrigés ensuite ;
- le prompt P4/G4, le gel d’entrée, la page, le moteur, l’outil, les trois
  fichiers de tests, l’image Open Graph, les trois SVG, tout le présent dossier
  de recherche et le manifeste P3 ont été lus intégralement avant correction ;
- les titres et structures des guides voisins
  `valider-idee-saas-avant-developper` et
  `droits-acces-application-metier` ont été comparés pour éviter de reprendre
  leur cadence par défaut.

### Lecture des quinze motifs

| Motif                              | Constat P4                                                                                               | Décision                                                                                      |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| 1. Autosatisfaction                | Aucun score éditorial, éloge de la page, rang ou promesse de supériorité dans le contenu public          | Aucun ajout                                                                                   |
| 2. Triptyques réflexes             | Des séries existent, mais décrivent des champs, contrôles ou responsabilités réellement distincts        | Conserver les séries utiles ; ne pas ajouter de rythme ternaire décoratif                     |
| 3. Symétrie binaire excessive      | Le titre DossierClair reposait sur « structure, pas norme » et répétait un contraste déjà fréquent       | Le remplacer par une fonction directe : l’exemple sert uniquement à montrer la structure      |
| 4. Adjectifs vendeurs sans chiffre | Aucun superlatif ni adjectif commercial non prouvé                                                       | Conserver cette sobriété                                                                      |
| 5. Métaphores forcées              | Aucune métaphore décorative ; « fil rouge » est la seule image courante et décrit la continuité du cas   | La conserver, car elle relie concrètement les sections                                        |
| 6. Parenthèses en cascade          | Les parenthèses servent à développer SLA et mode dégradé ou à porter une référence                       | Les conserver ; aucune cascade                                                                |
| 7. Connecteurs robotiques          | « ainsi », « ensuite », « c’est le rôle » et « peuvent maintenant » masquaient plusieurs liens causaux   | Nommer l’effet : cycle → portée, droits → offre, incident → restauration, preuves → trame     |
| 8. Conclusion qui répète           | Le dernier mémo ne résume pas les dix sections ; il ajoute les contrôles restant avant signature         | Le conserver                                                                                  |
| 9. Longueur et rythme uniformes    | Six H2 et la majorité des H3 démarraient à l’impératif, comme une suite de commandes                     | Varier les titres en constats, règles, conséquences et actions                                |
| 10. Verbes neutres                 | Plusieurs titres disaient seulement « décrire », « relier », « prévoir » ou « générer »                  | Exposer l’effet observable : fixe, possède, ouvre, appelle, exige, se construit               |
| 11. Formulations administratives   | « Construisez un inventaire » et « définir la réception » nommaient une tâche sans expliquer sa fonction | Dire que l’inventaire sert une décision et que la réception se prépare avant le développement |
| 12. Inversions artificielles       | Aucune inversion sujet-verbe littéraire ou forcée                                                        | Aucun changement                                                                              |
| 13. Puces parallèles pauvres       | Les listes parallèles sont des cas de test, des champs de comparaison ou des responsabilités distinctes  | Les conserver : retirer leur parallélisme réduirait la contrôlabilité                         |
| 14. Dramatisation creuse           | Aucun vocabulaire de catastrophe, d’urgence ou de transformation garantie                                | Aucun changement                                                                              |
| 15. Logique implicite              | Cinq fins de section annonçaient la suivante sans dire ce que la décision précédente permettait          | Rendre la cause et l’action suivantes explicites                                              |

### Recherche complémentaire des automatismes

- aucune conclusion « ce qu’il faut retenir » ;
- aucune multiplication de « concret », « clé », « essentiel » ou
  « stratégique » ;
- les questions restent cantonnées aux FAQ, aux neuf entrées de cadrage et aux
  cellules qui transforment une situation en décision. Elles attendent une
  réponse et ne servent pas à créer un effet rhétorique ;
- les faux contrastes n’ont pas été multipliés. Le titre DossierClair a été
  neutralisé ; « Comparable ne veut pas dire prêt à signer » reste une limite
  décisive et non un slogan ;
- trois formulations qui parlaient de « ce guide » plutôt que de la décision
  ont été rendues directes : portée des identifiants ASVS, absence de prix ou
  délai universel et durée de conservation inconnue ;
- l’expression « guide sécurité de la CNIL » est conservée, car elle nomme la
  source officielle et non la page elle-même ;
- la série d’impératifs H2/H3, proche du rythme du guide de validation SaaS, a
  été remplacée par des titres causaux propres au cycle organisation → droit →
  abonnement → exploitation → sortie.

### Contrôle de chaque H2 isolément

| H2  | Réponse autonome au titre                                                                      | Conséquence ou action visible                                                            |
| --- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| 01  | La comparabilité vient des mêmes situations, résultats, responsables, preuves et exclusions    | Conserver chaque inconnue en STOP                                                        |
| 02  | Le résultat vendu détermine la frontière fonctionnelle                                         | Tester d’abord les options déjà payées, plus simples ou sans développement               |
| 03  | L’organisation cliente traverse création, administration, transfert, suspension et fermeture   | Rejouer ces états avec deux organisations fictives                                       |
| 04  | Un droit relie objet, action, portée et refus                                                  | Tester autorisation, refus inter-organisation et révocation                              |
| 05  | Une offre ouvre des droits et l’abonnement les fait évoluer                                    | Écrire la table événement → état → droit → message → action                              |
| 06  | Un échec devient réceptionnable lorsqu’une action, une personne et une trace sont prévues      | Simuler échec, tiers indisponible, support et correction                                 |
| 07  | Une sauvegarde seule ne prouve pas la restauration ni la sortie                                | Restaurer un jeu fictif, relire l’export et tester le refus après suppression prévue     |
| 08  | Les adjectifs non fonctionnels ne deviennent comparables qu’avec conditions, seuils et preuves | Préparer les cas de réception avant le développement                                     |
| 09  | La trame est locale et copiable en Markdown                                                    | Remplir les 45 champs sans donnée sensible, traiter les STOP puis copier le document     |
| 10  | DossierClair montre uniquement la structure d’un exemple fictif                                | Remplacer ses décisions, comparer le coût complet et remettre une version figée à chacun |

### Corrections de voix et d’enchaînement

- les H2 02, 03, 04, 05, 06, 08, 09 et 10 ne reprennent plus le même impératif ;
- les H3 sur l’option simple, les états de l’organisation, les événements
  imparfaits, l’inventaire, la réception, le coût complet et la version figée
  annoncent désormais le résultat de l’action ;
- les transitions entre organisation et droits, droits et offre, exploitation
  et sortie, sortie et exigences, puis exigences et générateur explicitent la
  dépendance ;
- le moteur parle d’un choix « imposé dans le document » au lieu de parler du
  guide lui-même ; la règle d’exclusion reste identique ;
- le visuel 1:1 disait « Quatre réponses distinctes » alors que le bloc possède
  quatre réponses et une cinquième déclaration d’inconnue bloquante. Son titre
  et sa description disent maintenant « Cinq champs distincts », sans toucher
  aux cinq éléments ni à la règle STOP. Le WebP 900 × 900 a été régénéré et
  inspecté : le nouveau libellé est lisible et non tronqué ;
- les deux assertions textuelles affectées ont été réalignées sur la nouvelle
  voix sans réduire la couverture ni le nombre de tests.

### Passages conservés et raison

- les énumérations décision, responsable, preuve, exclusion et inconnue sont
  le modèle du livrable, pas un triptyque décoratif ;
- les listes ASVS et WCAG restent séparées par identifiant pour permettre une
  vérification versionnée ;
- les séries de questions des tableaux sont conservées parce qu’elles imposent
  une réponse observable au lecteur ;
- les FAQ commencent par une décision courte et ne rejouent pas le scénario
  complet ;
- le dernier mémo conserve la comparaison conditionnelle : il ajoute les
  contrôles de faisabilité, contrat, prix, calendrier, compétences, risques et
  preuves avant signature ;
- les aspérités `STOP`, `À décider`, `Aucune identifiée`, les états fictifs et
  les noms techniques versionnés ne sont pas lissés.

### Faits, règles et exemples laissés inchangés

- les neuf blocs, leurs cinq champs, les 45 zones de texte et les trois états
  du moteur restent identiques ;
- aucune règle de normalisation, de STOP, de clarification ou de candidature
  n’a changé ;
- DossierClair, Atelier Nord, Studio Rivage, Claire, Léa, l’offre Équipe et les
  états restent entièrement fictifs et inchangés ;
- les volumes restent 20 puis 40 organisations, 100 puis 200 personnes et
  2 000 puis 4 000 dossiers ;
- le retrait d’une adhésion reste distinct de la désactivation ou suppression
  du compte entier ;
- alternatives au développement, familles de coût, tiers indisponible,
  sauvegarde, restauration, export, résiliation, suppression et volume doublé
  restent présents ;
- CNIL 2026, OWASP ASVS 5.0.0 et ses six identifiants, WCAG 2.2 et ses cinq
  critères, Stripe illustratif, Data Act borné et article L131-3 gardent leurs
  formulations et limites ;
- aucun prix, délai, niveau de service contractuel, conformité, certification,
  résultat ou acceptation automatique n’a été ajouté ;
- aucun envoi, stockage, téléchargement, XLS, XLSX ou CSV n’a été introduit.

### Contradictions finales et risques résiduels

- la contradiction de surface « quatre réponses » / cinq champs du visuel 1:1
  est levée ;
- aucune contradiction n’a été trouvée entre l’ouverture, les dix H2, l’exemple
  complet, la FAQ et la décision finale ;
- aucune section n’est dépourvue de conséquence ou d’action ;
- aucune voix de témoignage, familiarité fabriquée, promesse, superlatif ou
  urgence n’a été ajoutée ;
- les risques de qualification Data Act, de volumes purement pédagogiques et de
  complétude déclarative du générateur restent ceux de P2/P3 ;
- build, serveur, BAT navigateur et intégration partagée restent hors du
  périmètre de cette passe.

### Contrôles P4

| Contrôle                                             | Résultat P4                                                          |
| ---------------------------------------------------- | -------------------------------------------------------------------- |
| Manifeste P3 avant correction                        | **PASS — 15/15, empreinte externe conforme**                         |
| Vitest ciblé moteur, composant et contrat de contenu | **PASS — 3 fichiers, 56 tests**                                      |
| ESLint ciblé, zéro avertissement admis               | **PASS — 0 erreur, 0 avertissement**                                 |
| TypeScript complet sans émission ni incrément        | **PASS — 0 erreur**                                                  |
| Prettier sur les textes propres au slug              | **PASS**                                                             |
| XML des trois SVG                                    | **PASS — 3/3 avec `xmllint`**                                        |
| En-têtes et dimensions des trois WebP                | **PASS — 1600 × 900, 1200 × 900 et 900 × 900**                       |
| Inspection du WebP 1:1 repris                        | **PASS — 900 × 900, texte lisible et non tronqué**                   |
| Inspection des WebP 16:9 et 4:3 conservés            | **PASS — textes lisibles, sens et limites inchangés**                |
| `git diff --check`                                   | **PASS**                                                             |
| Manifeste P4                                         | **15 fichiers exacts, hors manifestes ; SHA dans le passage P4**     |
| Premier appel Vitest                                 | **ENVIRONNEMENT — Vitest absent du cache local, aucun test exécuté** |
| Reproduction Vitest avec dépendances canoniques      | **PASS — cache local restauré après le contrôle**                    |
| Serveur, build et BAT navigateur                     | **NON EXÉCUTÉS — hors périmètre P4 et réservés à l’état intégré**    |

Le manifeste P4 couvre le gel d’entrée, le présent dossier de recherche, les
six fichiers SVG/WebP et les sept fichiers TypeScript/TSX du slug. Les
manifestes P1, P2, P3 et P4 sont exclus de son propre périmètre pour éviter
toute boucle de hachage.

> P0 ouverts après P4 : 0
>
> P1 ouverts après P4 : 0
>
> Décision proposée à l’orchestrateur : **PRET_POUR_G4**
>
> Publication : **NON AUTORISÉE**

Ce journal produit un **candidat G4 local**. Le verdict G4, le contrôle
transversal, l’intégration, le build, le BAT, le commit et le push appartiennent
exclusivement à l’orchestrateur.

## M — Intégration locale et BAT de production

### Autorisation d’intégrer

Le contrôle transversal indépendant Q a relu la charte, le gel, le guide, le
moteur, l’outil, les tests, les sources et les trois visuels sur le snapshot P4.
Son verdict est `GO_QUALITE_GUIDE` :

- score : **94/100** ;
- scorecard : **19/20** ;
- P0 : **0** ;
- P1 : **0** ;
- tests ciblés : **56/56** ;
- manifeste P4 : **15/15**, empreinte externe
  `b9e3863cf297b0dfaa9c42fd764634be7e4a6f6a224934206bff6e460b0a1475`.

Q n’a modifié aucun fichier. Le registre partagé est passé à
`PRET_A_INTEGRER`, puis à `INTEGRATION_EN_COURS` après acquisition atomique du
verrou d’intégration.

### Métadonnées et frontières de publication

L’entrée ajoutée à `src/lib/guides.ts` porte :

- `title` : `Comment rédiger un cahier des charges SaaS ?` — 44 caractères ;
- `heroTitle` :
  `Cahier des charges SaaS : faire chiffrer le même produit`, identique au H1
  servi et au titre `Article` ;
- `metaDescription` : 137 caractères ;
- section : `Préparer son projet` ;
- statut : `ready-for-human-review` ;
- images : les trois WebP 16:9, 4:3 et 1:1 propres au slug.

Le premier historique Git contenant la route et son entrée centrale est le
commit `7847b2ba2bbb85da72782d75511201c97428073b`, daté du
`2026-07-22T07:29:32+02:00`. Son registre indiquait déjà
`datePublished: "2026-07-22"`. L’instant Git reproductible est donc conservé
comme `datePublished`. Il atteste l’apparition dans le dépôt, pas l’heure d’un
ancien déploiement. `dateModified: "2026-08-01T13:03:24+02:00"` décrit cette
refonte substantielle locale sous verrou ; il ne prouve pas une modification du
site public.

La mesure rejouée sur l’article HTML servi donne **8 413 mots visibles** et
**42 minutes** à 200 mots par minute. Cette valeur mesurée remplace
l’estimation provisoire.

Le slug est retiré de `LEGACY_GUIDE_SLUGS` ; l’inventaire passe de 96 à 95. La
route reconstruite reste `ready-for-human-review` : elle répond localement en
200 et porte `noindex, nofollow`, mais demeure absente du hub publié, du
sitemap et de `llms.txt`.

### Maillage entrant et intégration partagée

Deux liens contextuels entrants ont été ajoutés :

1. depuis `valider-idee-saas-avant-developper`, après la décision de construire
   uniquement ce que le prochain test exige ;
2. depuis `droits-acces-application-metier`, pour replacer la matrice des droits
   dans l’organisation, l’offre, les échecs de paiement, le support et la
   sortie du SaaS.

`src/lib/guides.test.ts` vérifie ces deux sources, l’entrée centrale, les trois
images et l’icône `ClipboardList`. Le hub possède l’icône sans exposer le guide
tant que son statut reste fermé.

### Batterie globale

Sur le snapshot intégré :

| Contrôle | Résultat |
| --- | --- |
| `npm ci` | **PASS — 758 paquets installés** |
| `git diff --check` | **PASS** |
| Prettier ciblé | **PASS** |
| ESLint global | **PASS — zéro avertissement** |
| TypeScript sans émission | **PASS** |
| Tests d’intégration ciblés | **PASS — 5 fichiers, 72/72** |
| `npm run check:seo` | **PASS — 33 fichiers, 178/178** |
| `NODE_ENV=production npm run check:seo` | **PASS — 178/178** |
| `npm test` | **PASS — 88 fichiers, 711/711** |
| `NEXT_PUBLIC_ENV=production npm run build` | **PASS — 67 pages générées** |
| Post-build SEO | **PASS — 44 URL, 27 liens `llms.txt`, 44 pages, 9 temps de lecture et 76 blocs JSON-LD** |

`npm audit --omit=dev` signale **7 vulnérabilités hautes et 0 critique** dans
la chaîne existante : `next`, `sharp`, `@opennextjs/cloudflare`,
`@opennextjs/aws`, `miniflare`, `wrangler` et `brace-expansion`. Aucun fichier
de dépendances n’est modifié par ce lot. Les correctifs proposés impliquent des
changements de versions à traiter séparément ; aucun `audit fix --force` n’a
été exécuté.

Le staging a révélé trois fins de ligne Markdown à deux espaces dans l’en-tête
du gel d’entrée. Elles ont été remplacées par des paragraphes séparés pour que
`git diff --cached --check` reste strictement vert. Aucun mot, contrainte,
source, fichier autorisé ou interdit du gel n’a changé. Les manifestes P1 à P4
restent les preuves historiques de leurs snapshots ; le manifeste d’intégration
couvre la normalisation finale.

### HTML, OG et données structurées servis

Le serveur de l’artefact de production a été contrôlé sur
`/guides/cahier-des-charges-saas` :

- HTTP **200**, sans redirection ;
- un seul H1, texte exact :
  `Cahier des charges SaaS : faire chiffrer le même produit` ;
- `<title>` et description identiques au registre ;
- canonical :
  `https://hagnere-code.ai/guides/cahier-des-charges-saas` ;
- robots : `noindex, nofollow` ;
- Open Graph et Twitter présents ;
- OG locale : HTTP **200**, `image/png`, **1200 × 630**, 166 806 octets ;
- données structurées : `Article` et `BreadcrumbList` uniquement ;
- FAQ visible, liens internes autorisés et deux liens entrants servis ;
- aucune mention ou implémentation XLS, XLSX ou CSV ;
- aucune présence du slug dans le hub, le sitemap ou `llms.txt`.

L’URL OG absolue pointe vers le domaine canonique. Seule sa route locale de
l’artefact est ici prouvée ; l’état du domaine public n’est pas assimilé à ce
contrôle local.

### BAT Chrome

Le BAT a été exécuté avec Google Chrome 150 sur l’artefact de production. Les
20 couples largeur × thème ont été rejoués après stabilisation :

- largeurs : 320, 360, 390, 430, 640, 768, 1024, 1280, 1440 et 1600 px ;
- thèmes : clair et sombre par la vraie bascule du site ;
- **aucun débordement horizontal**, aucune image cassée et aucun élément fixe
  plus large que la fenêtre ;
- 200 % : largeur CSS effective 640 px, sans débordement ;
- police agrandie de 16 à 20 px : sans débordement ; boutons de l’outil
  conservés au-dessus de 44 px ;
- paysage mobile 844 × 390 : sans débordement ;
- focus clavier : contour visible de 2 px ; la barre espace charge réellement
  l’exemple fictif ;
- arbre d’accessibilité : H1 exact, un statut, aucun bouton, lien ou champ sans
  nom accessible.

Le premier arbre d’accessibilité concaténait les fragments visuels du H1 en
`chiffrerle`. Le composant partagé `GuidePremiumLayout` possède désormais un
`aria-label` composé des trois fragments. Après reconstruction, le nom
accessible est exactement
`Cahier des charges SaaS : faire chiffrer le même produit`.

Les états de l’outil ont été rejoués dans le navigateur :

- vide : `STOP — une décision ou une inconnue bloquante reste à traiter`,
  19 blocages et 27 clarifications ;
- exemple DossierClair :
  `Document candidat à une relecture de consultation` ;
- responsable retiré :
  `Le produit est décrit, mais la comparaison reste fragile` ;
- réinitialisation : retour au STOP et annonce dans la zone vive.

La page charge sans erreur console, exception JavaScript, requête échouée ni
réponse réseau 4xx/5xx. Mesures indicatives de l’artefact local :

- HTML : 703 259 octets bruts, 93 285 octets gzip ;
- DOM : 2 931 nœuds ;
- ressources encodées observées : 257 265 octets de scripts,
  221 401 octets de styles, 16 921 octets d’images ;
- chargement observé en environnement local : environ 400 ms.

Les captures 320 px clair, outil 390 px sombre, outil 768 px clair et héros
1440 px sombre ont été inspectées : texte lisible, hiérarchie intacte, champs
utilisables, CTA non tronqués et aucun chevauchement bloquant.

### État exact après BAT

- qualité du guide local : **GO Q 94/100** ;
- intégration locale, tests, build, HTML et BAT : **PASS** ;
- contre-audit du snapshot stagé : **à réaliser** ;
- commit : **non effectué** ;
- push : **non effectué** ;
- déploiement : **non effectué** ;
- publication : **non effectuée** ;
- indexation : **non vérifiée**.
