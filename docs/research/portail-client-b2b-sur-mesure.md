# Dossier de recherche — Portail client B2B sur mesure : commencer par une action utile

> Dossier de preuve des quatre passes. Le guide publié aide un dirigeant à
> décider ce que ses clients pourront réellement faire, sans dresser un
> catalogue de modules d'extranet.

## Journal des quatre passes

Propriétaire éditorial unique : `/root`

| Passe                        | État                     | Date       | Responsable                     | Snapshot                                                          | Blocages |
| ---------------------------- | ------------------------ | ---------- | ------------------------------- | ----------------------------------------------------------------- | -------- |
| 1. Recherche                 | Terminée — porte validée | 2026-07-23 | `/root/write_positions_drop_p2` | `docs/research/manifests/portail-client-b2b-sur-mesure-p1.sha256` | Aucun    |
| 2. Rédaction et intégration  | Terminée — porte validée | 2026-07-23 | `/root/audit_p1_saas_evolution` | `docs/research/manifests/portail-client-b2b-sur-mesure-p2.sha256` | Aucun    |
| 3. Contre-audit indépendant  | Terminée — porte validée | 2026-07-23 | Deux relecteurs indépendants    | `docs/research/manifests/portail-client-b2b-sur-mesure-p3.sha256` | Aucun    |
| 4. Plume humaine et contrôle | Terminée — porte validée | 2026-07-23 | `/root`                         | `docs/research/manifests/portail-client-b2b-sur-mesure-p4.sha256` | Aucun    |

### Journal détaillé de la reprise P1

- **Entrée contrôlée :** ancien manifeste P1 exact avant modification ; aucune
  page publique, entrée de registre ou image sociale créée.
- **Réserves reprises :** intention informationnelle et frontières avec la page
  service, le no-code et l'e-commerce ; autorisation entreprise-rôle-objet ;
  risque IDOR ; dépôts de fichiers ; socle RGPD ; six sorties honnêtes ;
  scénario continu ; mesure sans échantillon arbitraire ; coût total.
- **Sources rouvertes le 23 juillet 2026 :** OWASP Cheat Sheet Series, RGPD sur
  EUR-Lex, CNIL, DesignGouv, France Num et documentation Odoo. Les URL
  concurrentes et officielles du dossier ont été retestées par requête HTTP.
- **Limite de la passe :** il s'agit d'une synthèse P1 par agent, pas d'un audit
  de sécurité, d'un avis juridique ni d'un test auprès de dirigeants réels.

### Manifeste du snapshot

| Fichier contrôlé                                 | SHA-256                   | Passe | Remarque                        |
| ------------------------------------------------ | ------------------------- | ----- | ------------------------------- |
| `docs/research/portail-client-b2b-sur-mesure.md` | Voir le manifeste externe | P1    | Hash conservé dans le manifeste |

## 1. Fiche d'identité

```text
Slug : portail-client-b2b-sur-mesure
Statut actuel : publiable — validation éditoriale déléguée
Requête principale : portail client B2B : faut-il en créer un et quoi ouvrir en premier ?
Intention dominante : informationnelle ; comprendre l'utilité, les risques et les
  alternatives avant toute recherche d'agence ou de technologie.
Moment du parcours : comprendre / explorer, puis décider
Lecteur précis : dirigeant d'une PME qui reçoit de nombreux emails ou appels
  pour des documents, commandes, demandes de support, validations ou statuts,
  et envisage de donner de l'autonomie à ses clients professionnels.
Situation déclenchante : un client demande « où en est ma demande ? » tandis
  que l'équipe cherche la réponse dans l'ERP, le CRM ou une boîte mail.
Décision principale après lecture : choisir l'une des six sorties suivantes :
  1. ne pas ouvrir d'espace client et conserver une réponse assistée ;
  2. corriger d'abord la donnée ou le travail interne, puis réexaminer le projet ;
  3. envoyer un lien sécurisé pour une action isolée ;
  4. activer le portail ou le module déjà inclus dans un logiciel utilisé ;
  5. configurer un produit standard ou un assemblage no-code contrôlable ;
  6. développer un portail sur mesure lorsque les règles, rôles et intégrations
     propres à l'entreprise le justifient.
Niveau de connaissance au départ : le lecteur connaît les demandes clients,
  mais pas nécessairement la différence entre connexion, autorisation et droit
  d'agir sur un dossier précis.
5 questions indispensables :
  1. Quelle première action le client doit-il pouvoir terminer seul ?
  2. Quelle donnée interne alimente la réponse, à quelle fréquence et avec quel
     comportement si la source est en retard ou indisponible ?
  3. Pour chaque lecture, dépôt, modification, export ou validation, comment le
     serveur vérifie-t-il l'entreprise, le rôle et le dossier concernés ?
  4. Quelles mesures protègent les fichiers et quel socle RGPD faut-il préparer ?
  5. Laquelle des six sorties couvre le besoin au coût total le plus défendable ?
3 objections ou craintes :
  1. « Nous allons exposer des données au mauvais client. »
  2. « Les clients n'utiliseront pas un compte de plus. »
  3. « Le portail affichera des statuts que l'équipe ne tient pas à jour. »
Action utile sans contact commercial : choisir avant extraction une période
  qui couvre le rythme réel de l'activité, puis classer toutes les demandes
  reçues sur les canaux déclarés pendant cette période par motif, résultat,
  délai et action que le client aurait pu terminer seul. Si l'historique est
  incomplet, documenter les canaux, dates et exclusions sans extrapoler un taux
  à l'ensemble de l'activité.
CTA possible : définir la première action client et sa source de données.
Hors périmètre : page transactionnelle de prestation ; choix détaillé d'un
  outil no-code ; catalogue, panier, commande, paiement, livraison et
  facturation d'un site e-commerce B2B ; acquisition d'un CRM ; support
  omnicanal complet ; audit de cybersécurité ; avis juridique ou conformité
  contractuelle sectorielle.
Date de la recherche : 2026-07-23
Responsable de la synthèse : /root/write_positions_drop_p2
```

## 1 bis. Contrat de langage humain

- Phrase exacte que le lecteur pourrait dire au téléphone : « Mes clients nous
  appellent pour récupérer un document ou connaître l'état d'une demande :
  est-ce qu'un portail client vaut vraiment le coup ? »
- Réponse qu'il attend en une phrase : commencez par une demande fréquente que
  le client peut terminer seul avec une information fiable et des droits
  vérifiés ; la bonne réponse peut être de ne rien ouvrir, de corriger la donnée,
  d'envoyer un lien, d'activer l'existant, de configurer un produit ou de
  développer sur mesure.
- Terme central expliqué sans jargon : un portail client B2B est un espace
  réservé où une entreprise cliente peut consulter une information ou réaliser
  une action, au nom de son organisation.
- Mots ordinaires : compte client, commande, facture, devis, document, demande,
  validation, statut, contact, entreprise, accès, notification.
- Mots à éviter sans explication : extranet, self-service, IAM, SSO, RBAC,
  IDOR, tenant, omnicanal, orchestration, temps réel.
- Projet des 150 premiers mots : partir d'un appel « où en est ma demande ? » ;
  expliquer que le portail n'est utile que si la réponse affichée est fiable,
  si le client peut accomplir une action et si le serveur vérifie ses droits
  sur le dossier ; annoncer les six sorties sans catalogue technique.
- Ce que le lecteur saura décider : quel motif client tester en premier et si
  la donnée, les droits et la fréquence justifient un compte permanent.
- H2 relus isolément : validés en P2.
- Comparaison comprise à 390 px : validée dans le navigateur en P4.
- FAQ dont la première phrase répond : validée en P2.
- CTA formulé comme résultat : « Choisir la première action à ouvrir aux clients ».

### Test sujet, action, résultat

Refait sur le guide intégré, puis validé par deux contre-audits indépendants.

| Phrase abstraite à éviter      | Qui agit ?                                   | Action                                                           | Résultat                               | Formulation attendue                                                                                           |
| ------------------------------ | -------------------------------------------- | ---------------------------------------------------------------- | -------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| « Autonomiser les clients »    | Le client                                    | Télécharge une facture ou dépose un document                     | Il termine sans appeler                | « Le client retrouve sa facture et la télécharge sans attendre une réponse de l'équipe. »                      |
| « Offrir une vue 360° »        | Le client                                    | Consulte les informations utiles à son action                    | Il ne voit pas un écran encombré       | « Le client voit sa demande, sa dernière mise à jour et l'action attendue de sa part. »                        |
| « Synchroniser en temps réel » | Le système                                   | Affiche la dernière donnée disponible et son heure               | Le client connaît sa fraîcheur         | « Le statut indique sa date de mise à jour ; en cas de retard, le portail l'annonce. »                         |
| « Gérer les rôles »            | L'administrateur du client ou du fournisseur | Autorise un contact à agir pour une organisation                 | Les données restent dans le bon compte | « Le responsable client invite un collègue et choisit s'il peut voir les factures ou seulement les demandes. » |
| « Fluidifier le parcours »     | Le client et l'équipe                        | Soumettent, accusent réception et répondent dans le même dossier | La prochaine étape est claire          | « Après l'envoi, le client reçoit un numéro, un statut compréhensible et la prochaine action. »                |

### Test de l'ouverture

- [x] la question du client apparaît avant la technologie ;
- [x] « portail client B2B » est expliqué ;
- [x] aucun mur de fonctions ne retarde la réponse ;
- [x] aucune métaphore à apprendre ;
- [x] le lecteur obtient une règle de décision immédiate.

## 2. Cannibalisation

| Page existante                                          | Intention                                                             | Différence du nouveau guide                                                                                                              | Lien ou arbitrage                                                                                          |
| ------------------------------------------------------- | --------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `/guides/back-office-sur-mesure-pme`                    | Concevoir le poste interne des salariés                               | Le portail est utilisé par des personnes externes agissant pour une entreprise cliente                                                   | Maillage croisé ; ne pas réutiliser la grille des trois journées                                           |
| `/guides/connecter-erp-crm-logiciel-metier`             | Fiabiliser les échanges entre systèmes                                | Le nouveau guide traite les actions et mots visibles par le client                                                                       | Renvoyer pour source de vérité, reprise et doublons                                                        |
| `/guides/cahier-des-charges-application-metier`         | Formaliser tout le projet                                             | Le guide produit une première action, des rôles clients et des cas d'échec                                                               | Étape suivante, sans reproduire la trame                                                                   |
| `/guides/erp-ou-logiciel-sur-mesure`                    | Choisir largement entre progiciel et spécifique                       | Le guide compare les réponses uniquement pour un espace client                                                                           | Ne pas refaire le comparatif général acheter/construire                                                    |
| `/guides/no-code-ou-sur-mesure`                         | Comparer les deux modes de réalisation                                | Le nouveau guide choisit d'abord l'action et peut conclure qu'aucun portail n'est nécessaire                                             | Résumer l'option no-code sans refaire le comparatif technologique                                          |
| `/guides/prix-site-e-commerce` et `/services/ecommerce` | Budgéter ou acheter une boutique avec catalogue, commande et paiement | Le portail étudié ici sert d'abord à consulter, déposer, valider ou suivre après une relation B2B existante                              | Basculer vers l'e-commerce si le parcours principal consiste à acheter, payer, livrer ou facturer en ligne |
| `/services/outils-internes-sur-mesure`                  | Présenter une prestation transactionnelle de développement            | Le guide répond à une question informationnelle et peut recommander un lien, un produit existant, du no-code, un report ou aucun portail | CTA contextuel seulement après la décision autonome ; ne pas transformer le guide en page agence           |

**Évaluation du chevauchement :** la comparaison qualitative confirme une
intention distincte : des personnes externes agissent au nom d'une organisation
cliente. Aucun pourcentage de similarité non mesuré n'est revendiqué.

**Justification d'une URL distincte :** le guide décide quelles actions et
informations ouvrir à des clients professionnels, avec des rôles, une
fraîcheur et une solution de repli propres à cet usage. La page service reste
transactionnelle ; le comparatif no-code traite le mode de réalisation ; les
pages e-commerce traitent l'achat et le paiement.

## 3. Demande et vocabulaire du lecteur

Questions observées :

- quelles fonctionnalités mettre dans un portail client B2B ;
- comment connecter un espace client à un ERP ou un CRM ;
- comment permettre le téléchargement de factures ou le suivi de commande ;
- portail standard ou sur mesure ;
- comment gérer plusieurs utilisateurs d'une même entreprise ;
- comment créer un extranet sécurisé ;
- faut-il un compte pour chaque demande.

Vocabulaire naturel à privilégier : espace client, compte entreprise, contact,
accès, invitation, facture, commande, devis, demande, document, statut,
prochaine étape. « Temps réel » doit être remplacé par une fréquence et une date
de mise à jour. « Client » peut désigner l'organisation ou son contact : le
guide distinguera toujours les deux.

Observation qualitative des résultats francophones le 2026-07-23. Aucun volume
de recherche ni avantage de classement n'est affirmé.

### Frontières éditoriales à conserver en P2

- **Intention informationnelle :** répondre d'abord à « est-ce utile dans mon
  cas, et quelle première action ouvrir ? ». La sélection d'un prestataire ne
  devient qu'une suite possible.
- **Page service :** `/services/outils-internes-sur-mesure` décrit une offre
  commerciale. Le guide ne reprend ni sa promesse, ni sa structure, ni un
  verdict favorable au sur-mesure par défaut.
- **No-code :** le guide peut recommander un produit standard ou no-code, mais
  ne compare ni éditeurs, ni licences, ni plafonds techniques en détail. Cette
  décision appartient à `/guides/no-code-ou-sur-mesure`.
- **E-commerce B2B :** dès que l'objectif principal devient rechercher un
  catalogue, négocier un tarif, commander, payer, gérer la livraison ou
  facturer une vente en ligne, renvoyer au silo e-commerce. Le présent guide
  reste centré sur l'information, le document, la demande, la validation et le
  suivi d'une relation déjà établie.

## 4. Carte concurrentielle

| Page                                                                                                                           | Réponse et angle                                          | Preuves/artefacts                        | Bon point                                   | Manque décisionnel                                  | Conflit d'intérêt                |
| ------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------- | ---------------------------------------- | ------------------------------------------- | --------------------------------------------------- | -------------------------------- |
| [Espaceclient.io](https://www.espaceclient.io/)                                                                                | Portail client prêt à l'emploi                            | Fonctionnalités et démonstration produit | Rend visible l'option standard              | Le lecteur doit encore choisir l'action prioritaire | Éditeur                          |
| [We Devops — portail client](https://wedevops.fr/portail-client)                                                               | Création d'un espace client                               | Offre et liste de fonctions              | Présente documents, tickets et échanges     | Peu de « quand un lien suffit »                     | Prestataire                      |
| [Chomette — espace client](https://www.chomette.com/fr_fr/espace-client)                                                       | Portail réellement utilisé par des clients professionnels | Accès à un service existant              | Exemple concret d'écosystème B2B            | Pas un guide de décision                            | Entreprise utilisatrice/vendeuse |
| [ChannelDock — portail B2B](https://website.channeldock.com/fr/b2b-portal/)                                                    | Commandes B2B et intégration                              | Démonstration produit                    | Montre un cas précis orienté commande       | Ne couvre pas les demandes hors commerce            | Éditeur                          |
| [Dawap — extranet B2B](https://dawap.fr/developpement-web/portail-client-extranet-b2b)                                         | Développement sur mesure                                  | Cas d'usage et prestation                | Aborde personnalisation et connexions       | Le spécifique est la solution proposée              | Prestataire                      |
| [Odoo 19 — comptes clients](https://www.odoo.com/documentation/19.0/fr/applications/websites/ecommerce/customer_accounts.html) | Fonctions d'un portail inclus dans une suite              | Documentation officielle produit         | Prouve qu'une option existante peut suffire | Périmètre limité à Odoo                             | Éditeur/documentation            |

**Angle mort commun :** les pages empilent commandes, factures, documents,
support et messagerie. Peu commencent par une seule action client, la qualité de
sa donnée, le niveau organisation/contact et le comportement lorsque le système
interne ne répond pas.

**Valeur originale que le guide apportera :** reconstruire le parcours avant
l'invitation, pendant l'action et après la réponse ; montrer qu'un lien sécurisé
peut être préférable à un compte ; traduire les statuts internes en prochaines
actions compréhensibles.

## 5. Fiche de preuves

| Affirmation utilisable                                                                                                                                                                                                                       | Source primaire, URL et passage utile                                                                                                                                                                                     | Nature                                                | Périmètre                                                                                                          | Date/consultation   | Confiance                | Emplacement visible                                  | Conséquence lecteur                                                                                                                                               | Fraîcheur                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ | ------------------- | ------------------------ | ---------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| L'autorisation doit refuser par défaut, appliquer le moindre privilège et être vérifiée à chaque requête ; un rôle général ne suffit pas toujours lorsque l'entreprise et la relation avec l'objet changent                                  | [OWASP — Authorization Cheat Sheet, « Deny by Default », « Validate the Permissions on Every Request » et contrôles par attribut/relation](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html) | Recommandation primaire de sécurité applicative       | Toutes les requêtes et ressources d'une application ; ce n'est pas une obligation juridique française en soi       | Consulté 2026-07-23 | Haute sur le principe    | Section droits et critères de réception              | Exiger un contrôle serveur `personne + entreprise + rôle + objet + action` pour lire, déposer, modifier, valider, exporter, supprimer et administrer              | Revoir lors d'une évolution OWASP        |
| Un identifiant difficile à deviner ne remplace pas le contrôle d'accès à l'objet ; la recherche doit être limitée aux objets autorisés et les essais doivent couvrir lecture, création, modification, suppression, export et administration  | [OWASP — Insecure Direct Object Reference Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Insecure_Direct_Object_Reference_Prevention_Cheat_Sheet.html)                                            | Recommandation primaire de sécurité applicative       | Risque IDOR/BOLA sur URL, paramètres, corps de requête, fichier ou autre référence                                 | Consulté 2026-07-23 | Haute                    | Checklist des tests négatifs                         | Tester qu'un contact de l'entreprise A ne peut jamais ouvrir ni agir sur le dossier de l'entreprise B, même en changeant un identifiant ou en réutilisant un lien | Revoir lors d'une évolution OWASP        |
| Un dépôt de fichier doit limiter les extensions utiles, vérifier le type au-delà de l'en-tête déclaré, générer le nom, limiter la taille, contrôler l'auteur, protéger la requête, isoler le stockage et analyser le fichier selon le risque | [OWASP — File Upload Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/File_Upload_Cheat_Sheet.html)                                                                                                            | Recommandation primaire de sécurité applicative       | Dépôts de fichiers ; antivirus, bac à sable ou reconstruction selon types et risques                               | Consulté 2026-07-23 | Haute                    | Scénario de dépôt et critères de réception           | Ne jamais traiter ni rendre téléchargeable un fichier avant les contrôles prévus ; servir le fichier privé par un chemin qui revérifie l'autorisation             | Revoir lors d'une évolution OWASP        |
| Les accès doivent être limités aux données nécessaires à la fonction, revus et retirés lorsqu'ils ne sont plus justifiés                                                                                                                     | [CNIL — Gérer les habilitations](https://www.cnil.fr/fr/securite-gerer-les-habilitations)                                                                                                                                 | Recommandation de sécurité d'une autorité publique    | Données personnelles                                                                                               | Consulté 2026-07-23 | Haute                    | Section organisation, contacts et départs            | Prévoir invitation, changement de rôle, retrait et revue                                                                                                          | À vérifier avant publication             |
| Chaque utilisateur doit être authentifié ; l'authentification multifacteur est à privilégier lorsque possible, notamment pour des accès externes à risque                                                                                    | [CNIL — Authentifier les utilisateurs](https://www.cnil.fr/fr/securite-authentifier-les-utilisateurs)                                                                                                                     | Recommandation de sécurité                            | Accès à des données personnelles ; niveau selon risque                                                             | Consulté 2026-07-23 | Haute                    | Section connexion                                    | Choisir une protection proportionnée aux actions et données                                                                                                       | À vérifier avant publication             |
| Il faut collecter et exposer seulement les données adéquates, pertinentes et nécessaires                                                                                                                                                     | [CNIL — Minimiser les données collectées](https://www.cnil.fr/fr/minimiser-les-donnees-collectees)                                                                                                                        | Principe RGPD expliqué par la CNIL                    | Données personnelles                                                                                               | Consulté 2026-07-23 | Haute                    | Section premier périmètre                            | Ne pas recopier tout l'ERP dans le portail et prévoir la purge des données devenues inutiles                                                                      | À vérifier avant publication             |
| Le socle RGPD dépend de la finalité : base juridique, transparence, minimisation, exactitude, durée, protection dès la conception, registre, sécurité et, selon le risque, analyse d'impact                                                  | [RGPD — articles 5, 13, 25, 30, 32 et 35 sur EUR-Lex](https://eur-lex.europa.eu/eli/reg/2016/679/oj?locale=fr)                                                                                                            | Texte juridique primaire                              | Traitements de données personnelles dans le champ du RGPD ; application à qualifier selon les rôles et le contexte | Consulté 2026-07-23 | Haute pour les principes | Section « avant de mettre des données en ligne »     | Faire valider l'objectif, la base juridique, les personnes informées, les données, destinataires, droits, durées et mesures avant la conception détaillée         | Revalidation juridique avant publication |
| L'information doit notamment préciser responsable, finalité, base juridique, destinataires, durée ou critères et modalités d'exercice des droits                                                                                             | [CNIL — Information des personnes et transparence](https://www.cnil.fr/fr/conformite-rgpd-information-des-personnes-et-transparence)                                                                                      | Explication officielle d'une autorité de contrôle     | Information générale ; le contenu exact dépend de la collecte et de la source des données                          | Consulté 2026-07-23 | Haute                    | Scénario lors de l'invitation et du dépôt            | Prévoir une information compréhensible au bon moment, pas seulement une politique éloignée dans le pied de page                                                   | À vérifier avant publication             |
| Une durée de conservation est déterminée selon l'objectif ; les données ne sont pas conservées indéfiniment et leur cycle actif, archivage et suppression doit être organisé                                                                 | [CNIL — Les durées de conservation des données](https://www.cnil.fr/fr/passer-laction/les-durees-de-conservation-des-donnees)                                                                                             | Explication officielle                                | Données personnelles ; aucune durée universelle pour tout portail                                                  | Consulté 2026-07-23 | Haute                    | Section clôture du dossier et coût d'exploitation    | Écrire une durée ou un critère par catégorie : comptes, dossiers, fichiers, journaux et sauvegardes                                                               | À vérifier avant publication             |
| Un prestataire qui traite des données pour l'entreprise doit être choisi et encadré avec un contrat précisant notamment objet, durée, finalité et obligations de sécurité                                                                    | [CNIL — Gérer la sous-traitance](https://www.cnil.fr/fr/securite-gerer-la-sous-traitance)                                                                                                                                 | Recommandation officielle liée à l'article 28 du RGPD | Sous-traitants au sens RGPD ; qualification à confirmer au cas par cas                                             | Consulté 2026-07-23 | Haute                    | Comparaison produit/no-code/sur-mesure et coût total | Inventorier hébergeur, authentification, stockage, envoi et analyse de fichiers ; vérifier garanties, localisation/transferts et conditions de sortie             | À vérifier avant publication             |
| Une AIPD n'est pas automatique pour tout portail ; elle est requise lorsque le traitement est susceptible d'engendrer un risque élevé pour les droits et libertés                                                                            | [CNIL — Analyse d'impact relative à la protection des données](https://www.cnil.fr/fr/RGPD-analyse-impact-protection-des-donnees-aipd)                                                                                    | Explication officielle de l'article 35                | Traitements de données personnelles à risque élevé                                                                 | Consulté 2026-07-23 | Haute                    | Limites RGPD                                         | Qualifier le risque avant de promettre qu'une simple checklist suffit ou, à l'inverse, d'imposer une AIPD sans examen                                             | À vérifier avant publication             |
| Les opérations sensibles peuvent être tracées avec auteur, date, nature et référence, de façon proportionnée                                                                                                                                 | [CNIL — Tracer les opérations](https://www.cnil.fr/fr/securite-tracer-les-operations)                                                                                                                                     | Recommandation de sécurité                            | Données personnelles ; les journaux ont eux-mêmes accès et durée à définir                                         | Consulté 2026-07-23 | Haute                    | Section validation et documents                      | Pouvoir expliquer un téléchargement, un dépôt ou une validation sans journaliser le contenu inutilement                                                           | À vérifier avant publication             |
| La sécurité doit être adaptée au risque et couvrir aussi sauvegarde, continuité, incidents et violations, pas uniquement l'écran de connexion                                                                                                | [CNIL — Guide de la sécurité des données personnelles](https://www.cnil.fr/fr/guide-de-la-securite-des-donnees-personnelles)                                                                                              | Guide officiel                                        | Données personnelles ; niveau à déterminer par analyse de risque                                                   | Consulté 2026-07-23 | Haute                    | Coût total et solution de repli                      | Budgéter exploitation, restauration testée, gestion d'incident et maintien des mesures                                                                            | Revoir lors d'une nouvelle édition       |
| Il faut partir d'un besoin concret et tester avec les utilisateurs                                                                                                                                                                           | [DesignGouv — Bien concevoir un service numérique](https://design.numerique.gouv.fr/bien-concevoir/)                                                                                                                      | Référentiel public de conception                      | Discipline de conception, non obligation légale privée                                                             | Consulté 2026-07-23 | Haute sur la méthode     | Section choix de la première action                  | Tester avec des contacts clients réels, avec autorisation                                                                                                         | À revoir annuellement                    |
| Des outils no-code peuvent servir à créer des portails et outils internes                                                                                                                                                                    | [France Num — Outils no-code](https://www.francenum.gouv.fr/guides-et-conseils/pilotage-de-lentreprise/numerisation-des-processus/pourquoi-utiliser-des-outils)                                                           | Guide public d'expert                                 | Alternative technologique, pas prescription ; article signé par un prestataire                                     | Consulté 2026-07-23 | Moyenne                  | Comparatif                                           | Conserver une option intermédiaire entre suite standard et spécifique sans reprendre les bénéfices commerciaux comme des faits universels                         | Mise à jour 2026-07-13                   |
| Un logiciel existant peut déjà fournir des comptes et accès portails                                                                                                                                                                         | [Odoo 19 — Comptes clients](https://www.odoo.com/documentation/19.0/fr/applications/websites/ecommerce/customer_accounts.html)                                                                                            | Documentation primaire d'un produit                   | Exemple Odoo uniquement                                                                                            | Consulté 2026-07-23 | Haute pour le produit    | Comparatif « regardez d'abord l'existant »           | Vérifier les capacités, licences, droits et limites de la suite déjà utilisée                                                                                     | Version 19, à dater                      |

### Contradictions et données à ne pas publier

- Ne pas promettre une baisse des appels, une adoption ou un gain de temps sans
  mesure sur les motifs réellement éligibles.
- Ne pas présenter « temps réel » comme une qualité automatique ; annoncer la
  dernière mise à jour et le comportement en cas de retard.
- Ne pas dire que le MFA est juridiquement obligatoire pour tout portail ; le
  niveau d'authentification dépend du risque et du contexte.
- Ne pas confondre authentification et autorisation : être connecté ne prouve
  ni l'appartenance actuelle à l'entreprise cliente, ni le droit sur le dossier,
  ni le droit d'effectuer l'action demandée.
- Ne pas présenter un UUID, une URL longue, un lien « secret », un menu masqué
  ou un contrôle uniquement dans l'interface comme une protection contre
  l'accès à l'objet d'une autre entreprise.
- Ne pas contrôler les droits seulement à l'ouverture d'une page : lecture,
  dépôt, téléchargement, modification, validation, export, suppression et
  administration sont chacune revérifiées côté serveur.
- Ne pas accepter l'entreprise, le rôle, le propriétaire du dossier ou le nom
  du fichier uniquement parce que le navigateur les a envoyés.
- Ne pas accepter un fichier selon sa seule extension ou son en-tête
  `Content-Type`, ni le publier directement sous son nom d'origine.
- Ne pas copier tous les champs de l'ERP « pour être complet ».
- Ne pas garantir qu'un portail sur mesure est plus sûr qu'un produit standard :
  la conception, l'exploitation et la maintenance comptent.
- Ne pas transformer une documentation Odoo en recommandation universelle.
- Ne pas présenter ce socle comme un audit RGPD ou une certification de
  sécurité. La finalité, la base juridique, les durées, les sous-traitants,
  transferts, droits et éventuelle AIPD dépendent du projet.
- Ne pas convertir la formule « cent demandes » ou un échantillon de convenance
  en taux d'activité. La période, les canaux, la population et les exclusions
  sont fixés et publiés avant le calcul.
- Ne pas appeler « coût total » le seul devis de construction. Licences,
  intégrations, sécurité, exploitation, administration des accès, stockage,
  analyse des fichiers, support, évolutions et sortie restent visibles.
- Ne pas traiter ici un catalogue, un panier, une commande ou un paiement en
  ligne comme une simple fonctionnalité de portail : ce parcours relève de
  l'e-commerce et de ses obligations propres.

### Calculs reproductibles

#### Constituer une base d'observation sans nombre arbitraire

Avant d'extraire les données, l'entreprise écrit :

1. la date de début et de fin choisie selon son cycle réel — saison, clôture,
   renouvellement ou autre variation connue ;
2. les canaux couverts : e-mail, téléphone, formulaire, tickets et demandes
   saisies directement dans les logiciels ;
3. la règle de dédoublonnage d'une même demande passée par plusieurs canaux ;
4. les motifs et résultats de classement ;
5. les exclusions et données manquantes.

Toutes les demandes accessibles dans ce périmètre sont classées. Si une
extraction exhaustive est impossible, le dossier décrit la méthode
d'échantillonnage, le taux de couverture et les biais connus ; aucun résultat
n'est généralisé au-delà de cette population.

#### Mesurer le besoin puis le pilote

- part de demandes éligibles =
  `demandes qu'un client pourrait terminer seul / demandes observées × 100` ;
- délai de réponse actuel = date/heure de réponse exploitable moins date/heure
  de réception, avec médiane, quartiles et volume lorsque les données le
  permettent ; les demandes encore sans réponse à la date d'arrêt sont
  présentées à part avec leur volume, leur part et leur ancienneté, afin de ne
  pas améliorer artificiellement la mesure ;
- taux de réussite autonome après pilote =
  `actions terminées sans intervention de l'équipe / M × 100` ;
- taux d'achèvement assisté =
  `actions terminées avec intervention de l'équipe / M × 100` ;
- taux d'abandon = `actions non terminées à la fin de la fenêtre annoncée / M ×
100`, avec `M = actions éligibles commencées dont la fenêtre d'observation
est terminée` ;
- fraîcheur = heure d'affichage moins heure de mise à jour de la source ;
- erreurs de droits = incidents confirmés, jamais déduits d'un simple échec de
  connexion ;
- refus d'autorisation attendu = tentative de test explicitement prévue et
  bloquée ; ce n'est pas un incident client.

Séparer les demandes inéligibles, les incidents techniques, les refus
d'autorisation attendus et les erreurs de compréhension. Contrôle inverse :
`demandes éligibles + non éligibles + non classables = demandes dédupliquées
du périmètre observé`, puis `succès autonomes + achèvements assistés + abandons
= M`.

#### Comparer le coût total des six sorties

Le coût total de possession sur un horizon écrit additionne une seule fois :

```text
travail préalable sur la donnée et le processus
+ licence ou abonnement
+ configuration ou développement
+ intégrations et migration
+ identité, autorisations, tests de sécurité et conformité
+ hébergement, stockage, bande passante et analyse des fichiers
+ sauvegarde, supervision et gestion des incidents
+ support aux clients et administration des comptes
+ maintenance corrective et mises à jour des dépendances
+ évolutions prévues
+ formation, accompagnement et documentation
+ export des données, réversibilité et fermeture
= coût total sur l'horizon choisi
```

Comparer les options sur le même volume, la même durée, les mêmes actions, le
même niveau de risque et les mêmes exigences de support. Une inconnue reste
`à confirmer`, jamais zéro. Le bénéfice éventuel est calculé à part ; le temps
n'est valorisé que si l'entreprise explique sa réaffectation ou le coût
réellement évité. Aucun taux d'adoption, seuil de rentabilité ou horizon
universel n'est imposé.

### Les six sorties que le guide doit pouvoir recommander

1. **Ne pas ouvrir de portail** lorsque la demande est rare, hétérogène ou
   mieux traitée par une personne.
2. **Corriger la donnée ou le travail interne avant d'exposer quoi que ce soit**
   lorsque les statuts sont faux, tardifs ou sans responsable.
3. **Utiliser un lien sécurisé et limité** lorsqu'une action est ponctuelle,
   sans navigation ni compte durable.
4. **Activer l'espace déjà inclus dans un logiciel** lorsqu'il couvre les
   actions, droits et conditions de sortie nécessaires.
5. **Configurer un produit standard ou no-code** lorsque les règles sont
   simples, l'administration maîtrisable et le coût total acceptable.
6. **Développer sur mesure** lorsque plusieurs rôles externes, règles propres,
   intégrations et cas d'échec stables ne sont pas couverts honnêtement par les
   cinq réponses précédentes.

Chaque sortie précise ce qu'elle résout, ce qu'elle laisse manuel, qui
administre les accès, comment les données sont récupérées et quel événement
impose de réexaminer le choix.

### Scénario illustratif fictif continu à suivre en P2

Le scénario ne porte aucun nom de client et aucun résultat commercial. Une PME
reçoit d'une entreprise cliente une attestation nécessaire pour faire avancer
un dossier. Il doit rester identique de l'ouverture à la conclusion :

1. **Avant l'invitation :** la PME définit la finalité, les données utiles, la
   durée, l'entreprise cliente, le rôle « déposant » et le dossier auquel
   l'attestation se rapporte.
2. **Invitation :** un administrateur autorisé invite un contact nominatif. Le
   serveur rattache la personne à l'entreprise ; le navigateur ne choisit pas
   librement cette entreprise.
3. **Ouverture du dossier :** après authentification, le serveur vérifie
   `personne + entreprise + rôle + dossier + lecture`. Un identifiant modifié
   vers le dossier d'une autre entreprise renvoie un refus sans révéler son
   contenu.
4. **Dépôt :** le serveur revérifie le droit de déposer, limite extension,
   signature/type, taille et nom, renomme le fichier, le place en stockage
   privé et applique les analyses prévues avant traitement. Un fichier refusé
   reçoit une raison compréhensible et n'est ni transmis ni publié.
5. **Accusé :** le client reçoit une référence, l'heure de réception, l'état
   exact — reçu, en analyse, accepté ou refusé — et la prochaine action. « Reçu »
   ne signifie pas « validé ».
6. **Traitement interne :** une personne habilitée examine le document. La
   source interne conserve l'état qui fait foi ; le portail affiche la date de
   mise à jour et n'invente pas un statut si cette source est indisponible.
7. **Consultation et téléchargement :** chaque lecture ou téléchargement
   revérifie entreprise, rôle, dossier et action. Le fichier n'est jamais une
   URL publique durable.
8. **Erreur et repli :** si l'analyse, la source ou la notification échoue, le
   portail montre l'état réellement connu et fournit un canal de repli, sans
   annoncer une validation inexistante.
9. **Changement de rôle ou départ :** l'accès du contact est retiré ; un autre
   responsable client peut être invité sans partager le compte précédent.
10. **Clôture :** le dossier, le fichier, les journaux et les sauvegardes
    suivent leurs durées documentées ; les droits des personnes et la procédure
    d'incident restent praticables.

Les tests de réception reprennent ce scénario avec deux entreprises, deux
rôles et au moins un objet chacune. Ils couvrent succès, identifiant modifié,
lien transféré, rôle retiré, fichier invalide, source indisponible, nouvelle
tentative et clôture. Ils prouvent un comportement attendu ; ils ne prouvent
pas l'absence de toute faille.

## 6. Empreinte éditoriale à ne pas reproduire

| Guide                                   | Ouverture                  | Progression                       | Dispositif          | Exemple           | CTA              | Conclusion               |
| --------------------------------------- | -------------------------- | --------------------------------- | ------------------- | ----------------- | ---------------- | ------------------------ |
| `connecter-erp-crm-logiciel-metier`     | Deux systèmes divergent    | Sources puis flux                 | Contrat de données  | Client/commande   | Après fiabilité  | Tester les échecs        |
| `cahier-des-charges-application-metier` | Projet à cadrer            | Périmètre complet                 | Trame               | Application       | Après cadrage    | Consulter                |
| `erp-ou-logiciel-sur-mesure`            | Choix acheter/construire   | Comparatif général                | Matrice             | Plusieurs métiers | Après choix      | Décider par contrainte   |
| `automatiser-processus-metier`          | Processus manuel           | Types de réponse                  | Matrice             | Back-office       | Après diagnostic | Petit périmètre          |
| `back-office-sur-mesure-pme` (ce lot)   | Salarié dans quatre outils | Trois journées puis vues internes | Grille des journées | Dossier interne   | Fin              | Configurer ou construire |

Choix du nouveau guide :

```text
Tension : le client réclame une réponse que l'entreprise possède, mais ne peut
  pas lui rendre de façon fiable et sûre.
Ouverture : un appel « où en est ma demande ? », vu du client.
Progression : avant la connexion, pendant une action, après la réponse.
Artefact signature : la fiche « une action client » : demande, période observée,
  entreprise, rôle, objet, action, source, fraîcheur, dépôt éventuel, résultat,
  repli, socle RGPD et coût total comparable.
Rythme : point de vue client, mots visibles à l'écran, peu de vocabulaire technique.
CTA : après le classement autonome des demandes.
Conclusion : choisir honnêtement entre ne rien ouvrir, corriger le travail interne,
  utiliser un lien sécurisé, activer l'existant, configurer un produit ou
  développer sur mesure.
Différences :
  1. Le fil est temporel du point de vue externe.
  2. Organisation cliente et contact individuel sont distingués.
  3. Chaque action est contrôlée avec entreprise, rôle, objet et droit demandé.
  4. Chaque statut comporte une date, une prochaine action et un repli.
  5. Les six sorties restent possibles jusqu'à la conclusion.
```

## 7. Plan annoté

| Section provisoire                                               | Question résolue                                                    | Preuve ou exemple                                                                                                     | Conséquence/décision                                                                                             | Format                                        |
| ---------------------------------------------------------------- | ------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| « Où en est ma demande ? » : faut-il vraiment créer un portail ? | Quel problème le dirigeant cherche-t-il à résoudre ?                | Appel client et recherche interne                                                                                     | Annoncer les six sorties possibles avant toute technologie                                                       | Ouverture narrative et réponse courte         |
| Commencez par une action terminée, pas par un menu               | Quelle première utilité tester ?                                    | Télécharger un document, déposer une attestation, valider ou suivre                                                   | Choisir un motif fréquent, faisable et compréhensible                                                            | Fiche « une action client »                   |
| Vérifiez d'abord si l'information interne mérite d'être montrée  | La donnée et le processus sont-ils prêts ?                          | Statut sans responsable ou mis à jour trop tard                                                                       | Corriger d'abord l'interne si la réponse n'est pas fiable                                                        | Test de préparation                           |
| Suivez le même client de l'invitation à la clôture               | Que vit réellement un contact client ?                              | Scénario fictif continu de l'attestation                                                                              | Repérer chaque action, état, erreur et repli avant de choisir une solution                                       | Frise narrative en dix étapes                 |
| Une personne connectée n'a pas accès à toute son entreprise      | Comment éviter qu'un client voie ou modifie le dossier d'un autre ? | Contrôle serveur `personne + entreprise + rôle + objet + action`, identifiant modifié et lien transféré               | Refuser par défaut et revérifier lecture, dépôt, modification, validation, export, suppression et administration | Explication IDOR sans jargon + tests négatifs |
| Un fichier reçu n'est pas encore un fichier accepté              | Comment sécuriser un dépôt et un téléchargement ?                   | Type, extension, signature, taille, nom généré, stockage privé, analyse et autorisation au téléchargement             | Concevoir la chaîne complète, le refus compréhensible et le coût d'exploitation                                  | Parcours de fichier                           |
| Montrez la source, sa date et ce qui se passe si elle répond mal | D'où vient l'information affichée ?                                 | ERP/CRM indisponible ou en retard                                                                                     | Définir source qui fait foi, fraîcheur, état réellement connu et canal de repli                                  | Mini-contrat de donnée visible                |
| Préparez le socle RGPD avant d'ajouter des écrans                | Quelles questions de données personnelles doivent être tranchées ?  | Finalité, base juridique, information, minimisation, droits, durées, sous-traitants, sécurité et AIPD selon le risque | Faire qualifier le projet sans promettre une conformité par checklist                                            | Tableau de cadrage et limites                 |
| Comparez six réponses, pas seulement deux technologies           | Faut-il vraiment un compte et faut-il développer ?                  | Aucun portail, correction interne, lien, module existant, standard/no-code, sur-mesure                                | Garder chaque sortie possible jusqu'au verdict                                                                   | Six cartes sur les mêmes critères             |
| Comparez le coût total sur le même horizon                       | Quelle option est réellement défendable ?                           | Licences, construction, intégrations, sécurité, stockage, support, maintenance, évolutions et sortie                  | Ne pas confondre devis initial et coût total                                                                     | Tableau de coût avec inconnues explicites     |
| Mesurez toutes les demandes d'un périmètre annoncé               | Le besoin puis le pilote produisent-ils un résultat utile ?         | Période couvrant le rythme réel, canaux, dédoublonnage, exclusions, éligibilité, réussite, abandon et fraîcheur       | Produire des taux limités à la population observée, sans échantillon arbitraire ni extrapolation                 | Protocole et formules                         |
| Bon fit, mauvais fit et prochaine action                         | Quand le sur-mesure devient-il raisonnable ?                        | Règles propres, plusieurs rôles et intégrations versus demande rare ou besoin déjà couvert                            | Pouvoir recommander de ne pas investir ; proposer un contact seulement après le diagnostic                       | Deux listes + CTA contextuel                  |

## 8. Ressource et conversion

```text
Une ressource est-elle naturellement nécessaire ? non, aucun téléchargement.
Problème : choisir la première action client.
Résultat autonome : une fiche remplie avec motif, périmètre d'observation,
  entreprise, rôle, objet, action, source, fraîcheur, dépôt éventuel, résultat,
  exception, solution de repli, questions RGPD et coût total.
Format : tableau copiable dans l'article.
Rubriques : période et canaux observés, demande, résultat attendu, personne,
  entreprise, rôle, objet, action, source et date, accusé, repli, sensibilité,
  fichier, finalité, durée, sous-traitants, coûts connus et inconnues.
Exemple rempli : le scénario fictif continu du dépôt d'une attestation, de
  l'invitation à la clôture ; aucun nom réel ni résultat commercial.
Comparaison : les six sorties sont évaluées avec les mêmes actions, volumes,
  horizon, risques, exigences de support et conditions de sortie.
Conclusion « ne pas investir » : oui, si la demande reste assistée, si le
  processus doit être corrigé, si un lien suffit ou si l'existant couvre le cas.
Sources, hypothèses, limites : visibles.
Données saisies : aucune.
Processus : modèle statique.
QA : rendu mobile contrôlé en P4 à cinq largeurs, sans débordement.
Limites : ne remplace ni analyse de risque, ni audit de sécurité, ni qualification
  RGPD ou juridique, ni test auprès de clients réels.
Maintenance : revue des sources et des fonctions produits citées.
Test intégré : deux entreprises, deux rôles et au moins un dossier chacune ;
  succès, identifiant modifié, lien transféré, rôle retiré, fichier invalide,
  source indisponible, nouvelle tentative et clôture.
Bon fit : plusieurs rôles client, actions stables et récurrentes, données fiables,
  règles ou intégrations non couvertes par l'existant.
Mauvais fit : faible récurrence, donnée interne non tenue à jour, besoin couvert
  par une réponse assistée, un lien ou un module existant, impossibilité
  d'administrer les accès et les incidents.
Action non commerciale : fixer avant l'extraction une période qui couvre les
  variations connues du rythme métier, les canaux, le dédoublonnage et les
  exclusions, puis classer toutes les demandes accessibles dans ce périmètre.
  Si l'exhaustivité est impossible, publier la méthode, la couverture et les
  biais sans généraliser.
CTA : « Choisir la première action à ouvrir aux clients » vers
  /demarrer-un-projet ; le lien ouvre une demande de projet, pas un diagnostic
  automatique ni une promesse de livrable.
```

## 9. Rapports de sortie des quatre passes

### Rapport P1 — Recherche

```text
PASSE 1 TERMINÉE
Slug : portail-client-b2b-sur-mesure
Responsable : /root/write_positions_drop_p2
Lecteur et phrase réelle : dirigeant B2B ; « Mes clients nous appellent pour des
  informations déjà présentes : un portail vaut-il le coup ? »
Intention : informationnelle ; la page service, le comparatif no-code et le
  parcours e-commerce restent distincts.
Décision : ne pas ouvrir, corriger d'abord l'interne, envoyer un lien sécurisé,
  activer l'existant, configurer un produit standard/no-code ou développer sur
  mesure.
Angle et forme dominante : parcours avant, pendant et après une action client.
Pages proches et différence : intégration, cahier des charges, ERP/sur-mesure et
  back-office ; ici une personne externe agit au nom d'une organisation. Le
  no-code traite le mode de réalisation et l'e-commerce l'achat en ligne.
Sources décisives : OWASP Authorization, IDOR et File Upload ; RGPD sur EUR-Lex ;
  CNIL habilitations, information, minimisation, durées, sous-traitance, AIPD,
  traçabilité et sécurité ; DesignGouv ; France Num ; documentation Odoo.
Incertitudes exclues : baisse garantie des appels, adoption, sécurité intrinsèque,
  conformité automatique, « temps réel » non défini et coût réduit au devis.
Méthode : population, période, canaux, dédoublonnage et exclusions annoncés ;
  aucune extrapolation d'un échantillon arbitraire.
Action autonome et CTA : classer les demandes, comparer le coût total des six
  sorties, puis choisir une première action ; contact commercial facultatif.
Plan : 12 sections avec scénario continu, cycle d'accès, contrôle
  entreprise-rôle-objet-action, dépôts, RGPD, données, repli, coût et mesures.
Snapshot : docs/research/manifests/portail-client-b2b-sur-mesure-p1.sha256
```

### Rapport P2 — Rédaction et intégration

```text
PASSE 2 TERMINÉE
Fichiers créés ou modifiés : page publique et image sociale dédiées ; entrée
  de registre maintenue en attente ; lien entrant depuis le guide back-office ;
  tests de langage humain ; présent dossier
Ouverture et réponse : un client demande où en est son dossier ; les 136
  premiers mots définissent le portail et annoncent six conclusions possibles,
  dont ne rien ouvrir, corriger d'abord le travail ou utiliser un simple lien
Forme propre au sujet : une attestation entièrement fictive traverse dix états,
  de l'invitation nominative à la clôture, avec panne, départ du contact,
  dépôt refusé et dernière information confirmée
Comparaison : les six réponses passent par le même besoin, les mêmes droits,
  fichiers, connexions, volumes et charges d'exploitation ; le sur-mesure ne
  bénéficie d'aucun verdict par défaut
Exemples ou calculs : autorisation expliquée par cinq contrôles côté serveur ;
  coût total sur une durée commune ; taux avec population, période,
  dédoublonnage, exclusions, dénominateur nul et identité de réconciliation
Sources visibles : OWASP près des contrôles d'autorisation et de fichiers ;
  RGPD et CNIL près des finalités, informations, durées, habilitations,
  sous-traitance, analyse d'impact et traçabilité
Action autonome, bon fit et mauvais fit : fiche copiable avant tout achat,
  période réelle à classer, huit épreuves négatives ; un lien, un module
  existant, une réponse humaine ou un report restent des conclusions valides
CTA et destination : un seul CTA tardif vers /demarrer-un-projet ; l'action
  obtenue après clic, la relecture humaine et l'absence de diagnostic, délai ou
  recommandation garantie sont explicites
Contrôles rapides : 60/60 tests ciblés ; Prettier, ESLint, TypeScript et
  diff-check conformes ; image sociale rendue et inspectée en 1200 × 630
Snapshot : docs/research/manifests/portail-client-b2b-sur-mesure-p2.sha256
```

### Rapport P3 — Contre-audit indépendant

Deux relecteurs indépendants ont refusé le premier snapshot P2 avec **P0 = 0,
P1 = 1**. Le blocage venait de l'image sociale : « Quel portail ouvrir ? »
présupposait la création et la pastille « SUR-MESURE » recevait seule une
couleur, un fond et une bordure distincts. Cette hiérarchie contredisait les six
conclusions honnêtes de la page.

Leurs P2 et les sous-audits sécurité/RGPD ont aussi demandé de rendre plusieurs
preuves plus reproductibles :

- remplacer l'état-machine générique par un parcours fictif continu
  `PB2B-2407`, du premier fichier refusé à la version 2 acceptée ;
- comparer les coûts avec de vraies méthodes communes et distinguer valeur
  inconnue, zéro vérifié et poste non applicable ;
- donner le même dénominateur `M` au succès autonome, à l'achèvement assisté et
  à l'abandon, puis réconcilier ces trois issues ;
- expliquer la signature binaire du format, la quarantaine et l'indisponibilité
  de l'analyse ;
- tester bonne entreprise/mauvais rôle et bon objet/mauvaise action pour chaque
  opération sensible ;
- compléter la notice RGPD, la revue annuelle des habilitations, l'alt fictif
  et le résultat humain du formulaire.

Tous ces points sont intégrés. L'image 1 200 × 630 pose désormais la question
« Faut-il ouvrir un portail client B2B ? » et applique exactement le même style
aux six pastilles. Le test isole le bloc visuel des six conclusions, exige la
bordure et le fond communs, puis refuse tout index, comparaison d'une conclusion
ou condition ternaire dans ce bloc.

Les relecteurs ont ensuite demandé quatre améliorations secondaires avant la
fermeture : convertir le temps interne avant de l'additionner aux dépenses,
publier le volume et l'ancienneté des demandes encore sans réponse, aligner le
dossier sur le dénominateur `M`, et faire apparaître les six issues dans la
description de carte. Toutes ont été intégrées. Le test de l'OG a également été
durci afin de ne pas protéger une seule expression conditionnelle connue.

Deux relecteurs indépendants ont revérifié le manifeste final en lecture seule :
**6/6 empreintes exactes, P0 = 0, P1 = 0 et P2 = 0** pour chacun. Ils ont
contrôlé le scénario `PB2B-2407`, les six sorties, les coûts, les demandes sans
réponse, les autorisations, les fichiers, la CNIL, le CTA, le SEO et l'image
sociale. La porte P3 est validée et son état historique est conservé dans
`portail-client-b2b-sur-mesure-p3.sha256`.

### Rapport P4 — Plume humaine et contrôle final

```text
PASSE 4 TERMINÉE
Passages humanisés : appel client placé avant la technologie ; portail B2B défini sans sigle ; scénario PB2B-2407 continu ; six réponses présentées sans avantager le sur-mesure
Retour P3 effectué : oui ; deux relecteurs indépendants ont validé le nouvel état à P0 = 0, P1 = 0 et P2 = 0
Scorecard justifiée : 20/20 ; détail dans la table ci-dessous
Validation humaine réelle : non
Test réalisé par une personne réelle : non
Autorisation éditoriale : Décision de publication : autorisée explicitement par le commanditaire
Commandes et résultats : check:seo, ESLint, TypeScript, batterie Vitest, build Next.js, postbuild et git diff --check conformes au gel final du lot
Snapshot final : docs/research/manifests/portail-client-b2b-sur-mesure-p4.sha256
Statut maximal : publiable — validation éditoriale déléguée
Verdict : porte P4 validée
```

Contrôles P4 déjà réalisés sur le serveur local :

- 4 817 mots comptés dans l'artefact final, soit 24 minutes avec la convention de
  200 mots par minute ;
- largeurs effectives 320, 390, 767, 1 024 et 1 440 px, sans débordement
  horizontal ; les tableaux deviennent des cartes sur mobile ;
- thèmes clair et sombre relus ; ouverture, scénario, six réponses, droits,
  mesures et conclusion inspectés ;
- un H1, un CTA vers le formulaire, aucun téléphone dans l'article, canonical
  exact, Article et BreadcrumbList parsables ;
- image sociale 1 200 × 630 relue en taille originale : question ouverte,
  scénario fictif et six pastilles strictement équitables.

## 10. Revue finale

La recherche, la rédaction, les contre-audits indépendants et la P4 sont
terminés. Le rendu réel, la plume, la durée de lecture, l'indexation, le build
commun et le snapshot P4 ont été contrôlés.

### Scorecard P4

| Axe         | Note 0-2 | Preuve actuelle                                                                                       | Correction éventuelle |
| ----------- | -------: | ----------------------------------------------------------------------------------------------------- | --------------------- |
| Intention   |        2 | Le guide répond à « où en est ma demande ? » avant de parler de technologie                           | Aucune                |
| Décision    |        2 | Six issues cohérentes, dont assistance, correction interne, lien et module                            | Aucune                |
| Pédagogie   |        2 | PB2B-2407 suit invitation, dépôt refusé, deux versions, panne, départ et clôture                      | Aucune                |
| Profondeur  |        2 | Autorisations, fichiers, fraîcheur, repli, RGPD, coûts, mesures et échecs négatifs                    | Aucune                |
| Preuve      |        2 | OWASP, CNIL, RGPD, DesignGouv et documentation produit visibles avec leurs limites                    | Aucune                |
| Comparaison |        2 | Les six réponses partagent besoin, droits, données, charges, continuité et sortie                     | Aucune                |
| Originalité |        2 | Le guide part d'une seule action client et d'une organisation cliente, pas d'un catalogue de portails | Aucune                |
| Style       |        2 | Ouverture téléphonique, titres directs et jargon expliqué au point utile                              | Aucune                |
| Conversion  |        2 | CTA unique et tardif ; le sur-mesure peut perdre ; résultat du formulaire explicite                   | Aucune                |
| SEO/produit |        2 | Intention distincte, lien entrant, metadata, OG, index/follow et cinq largeurs contrôlés              | Aucune                |

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

- [x] décision et lecteur B2B précis ;
- [x] organisation cliente distinguée du contact ;
- [x] intention informationnelle et frontières service, no-code, back-office,
      intégration et e-commerce explicites ;
- [x] résultats concurrents et angle mort documentés ;
- [x] sources primaires/publiques contextualisées ;
- [x] OWASP IDOR/autorisation traduit en contrôle serveur
      `personne + entreprise + rôle + objet + action` à chaque opération ;
- [x] chaîne de dépôt et téléchargement de fichiers cadrée ;
- [x] socle RGPD documenté avec limites et qualification selon le projet ;
- [x] aucune promesse d'adoption ou de gain ;
- [x] six sorties honnêtes conservées jusqu'au verdict ;
- [x] scénario fictif continu de l'invitation à la clôture ;
- [x] mesure bornée sans échantillon arbitraire ni extrapolation ;
- [x] coût total comparé sur le même horizon, avec inconnues visibles ;
- [x] action autonome, bon et mauvais fit ;
- [x] aucun téléchargement absent promis ;
- [x] liens externes officiels et concurrents revalidés le 2026-07-23 ;
- [x] aucune publication ou indexation déclarée.

### Verdict P1 final

**VALIDÉE — 0 réserve bloquante P0, 0 réserve majeure P1 ouverte.**

La P2 peut rédiger uniquement à partir de ce snapshot. Elle devra conserver les
six sorties, le scénario continu, les limites de preuve et la vérification des
droits à chaque action. Toute promesse de conformité, de sécurité, d'adoption,
de gain ou de classement créerait une nouvelle réserve et imposerait une reprise
avant intégration publique.
