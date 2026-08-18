# Dossier contradictoire R1 — `site-internet-en-panne-que-faire`

Date : **27 juillet 2026**  
Statut : **NO-GO publication premium — dossier de correction, pas validation de la page**  
Périmètre : réponse dirigeant, continuité, diagnostic par couche, preuve cyber,
données personnelles, restauration, communication, SEO temporaire et contrôle
de publication  
Baseline auditée : `src/app/guides/site-internet-en-panne-que-faire/page.tsx`,
SHA-256
`a54d8df75cb410c53d3e467ea3fa4f5e65b0e466277fcff96295006b88b2ebfc`

## 1. Décision qui remplace l'ancien faux vert

Le rapport P3 du dossier historique déclarait **20/20, sans réserve, aucun P0,
P1 ou P2**, puis le P4 qualifiait la page de publiable. Cette certification est
explicitement **annulée**. Elle porte sur le même SHA-256 que l'audit
approfondi ultérieur à 84/100 et ne couvrait ni les journaux techniques, ni la
chaîne de preuve, ni l'ensemble du cycle CNIL, ni une reprise après
compromission.

| Contrôle                       |       Résultat sur la baseline | Décision R1                                                     |
| ------------------------------ | -----------------------------: | --------------------------------------------------------------- |
| Ancien P3 interne              |            20/20, aucun défaut | **invalide** : faux négatif et gate non contradictoire          |
| Audit éditorial large du 24/07 |      84/100, B+, NO-GO premium | conservé comme état des lieux général                           |
| Audit UX dirigeant             |                     **82/100** | guide sûr et utile, mais trop dispersé sous stress              |
| Audit factuel et cyber         |                     **67/100** | NO-GO : preuves, CNIL et reprise compromises incomplètes        |
| Audit technique                | **64/100 — P0 0, P1 10, P2 6** | NO-GO : diagnostic et reprise non exécutables couche par couche |

La note de gouvernance retenue est **64/100**, soit le verdict indépendant le
plus sévère. Les notes ne sont pas moyennées : une excellente plume ne compense
pas une chaîne de preuve absente, et un contrôle technique ne valide pas le
droit. Il n'existe aucun nouveau PASS tant qu'un nouveau snapshot figé n'a pas
fermé les défauts ci-dessous.

**P0 contenu : 0. P0 gouvernance : 1.** La page ne donne pas d'instruction
directement destructrice ; le P0 de gouvernance est la certification 20/20
faussement exhaustive qui pouvait autoriser la publication.

## 2. Union des trois audits

Les identifiants ci-dessous regroupent les constats convergents. Ils ne
réécrivent pas rétroactivement les comptages propres à chaque audit.

| ID R1  | Priorité | Défaut consolidé                                                               | Risque lecteur                                                              | Fermeture exigée                                                                        |
| ------ | -------- | ------------------------------------------------------------------------------ | --------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| GOV-01 | P0       | 20/20 et « aucun P1/P2 » sur la même baseline ensuite auditée 84/82/67/64      | publication avec confiance injustifiée                                      | révoquer les anciens PASS, figer le prochain SHA et refaire trois contre-audits         |
| R1-01  | P1       | aucune réponse complète lisible en 30 secondes                                 | le dirigeant cherche dans un article long pendant l'incident                | carte d'urgence, interdits, coordinateur, prochain point                                |
| R1-02  | P1       | panne, lenteur et cyber distingués, mais pas DNS/TLS/CDN/origin/app/data/tiers | mauvais fournisseur, modifications inutiles, diagnostic retardé             | routeur symptôme → couche → preuve → interlocuteur, sans prétendre prouver la cause     |
| R1-03  | P1       | journal métier sans gel de rotation, export isolé ni provenance des traces     | logs écrasés et périmètre de compromission impossible à établir             | procédure de préservation et chaîne de preuve simple                                    |
| R1-04  | P1       | déclencheurs cyber trop étroits et endiguement insuffisamment borné            | attaque active traitée comme panne ou extinction détruisant des traces      | signaux élargis, canal hors bande, décision d'endiguement par personne qualifiée        |
| R1-05  | P1       | CNIL limitée à « panne ≠ violation » et 72 h                                   | registre, notification progressive ou information des personnes omis        | cycle exact responsable/sous-traitant, risque, 72 h, risque élevé                       |
| R1-06  | P1       | sauvegarde prudente, mais aucune preuve « système propre + données propres »   | retour d'un accès persistant ou réinfection                                 | éradication, secrets, source saine, rapprochement et surveillance                       |
| R1-07  | P1       | aucun RTO, RPO, GTI, GTR ou périmètre SLA                                      | arbitrage restauration/rollback impossible et délai contractuel mal compris | définitions, questions de décision et absence de valeur universelle                     |
| R1-08  | P1       | communication sans source de vérité hors site ni états normalisés              | messages contradictoires ou promesse de retour inventée                     | cinq états, prochaine mise à jour et canal réellement disponible                        |
| R1-09  | P1       | recette métier utile, mais e-commerce et données trop peu contrôlés            | double commande, stock, webhook ou e-mail incohérent                        | test contrôlé, idempotence, rapprochement et go/no-go signé                             |
| R1-10  | P1       | CTA honnête mais aucune barrière d'urgence                                     | un incident actif attend une réponse commerciale asynchrone                 | dire explicitement de ne pas attendre le formulaire et orienter vers les relais adaptés |
| R1-11  | P1       | aucune fiche imprimable/hors ligne                                             | guide, contacts et statut indisponibles avec le site                        | fiche A4 et copie hors domaine avec date/version                                        |
| R1-12  | P1       | chronologie limitée à 15 minutes, une heure et le lendemain                    | absence de seuil entre observation, escalade et reprise                     | séquence 0–5, 5–15, 15–60, au-delà de 60 minutes, J+1/J+7/J+30                          |
| R1-18  | P1       | aucun état `unknown/pass/fail/not-applicable` ni gate de reprise               | absence de preuve interprétée comme un succès                               | dix portes, preuve datée et aucun vert par défaut                                       |
| R1-19  | P1       | impact économique sans moteur borné                                            | coût vide assimilé à zéro ou revenu et marge comptés deux fois              | pertes irrécupérables, marge, surcoûts et `ND` séparés                                  |
| R1-13  | P2       | capture « masquée » sans distinguer original et copie expurgée                 | unique preuve modifiée ou donnée personnelle exposée                        | original restreint, copie expurgée pour partage                                         |
| R1-14  | P2       | conservation habituelle des journaux non cadrée                                | traces absentes, excessives ou contenant des secrets                        | politique proportionnée, protection contre écrasement et durée revalidée                |
| R1-15  | P2       | « paiement autorisé » ambigu                                                   | vraie carte, débit ou commande parasite pendant la recette                  | bac à sable ou procédure PSP documentée, jamais de données client                       |
| R1-16  | P2       | conseil Google 503 juste mais incomplet                                        | robots.txt bloqué ou fermeture prolongée sous 503                           | bornes 1–2 jours, HTML statique, `Retry-After`, robots.txt accessible                   |
| R1-17  | P2       | CERT-FR cité sans expliquer son périmètre                                      | mauvaise attente d'assistance pour une TPE/PME                              | distinguer CERT-FR, CSIRT territorial, Cybermalveillance, PRIS et assureur              |

## 3. Architecture éditoriale cible

Le futur guide doit fonctionner à deux vitesses.

### Mode urgence — trente secondes

1. **Ne rien modifier au hasard** : pas de redémarrage, restauration, extension,
   DNS, cache ou nettoyage.
2. **Arrêter les essais actifs** si contenu, domaine, certificat, accès, compte,
   paiement ou alerte ont changé sans explication.
3. **Noter six faits** : heure et fuseau, URL, message/code, fonctions touchées,
   dernière réussite, dernier changement connu.
4. **Nommer un coordinateur** et ouvrir le journal.
5. **Appeler le propriétaire probable de la couche**, sans attendre le
   formulaire commercial si l'incident est actif.
6. **Annoncer uniquement l'heure du prochain point**, jamais une cause ou une
   heure de retour non établie.

### Guide complet — ordre imposé

1. routeur de cinq symptômes ;
2. chronologie 0–5 / 5–15 / 15–60 / plus de 60 minutes ;
3. matrice des couches et intervenants ;
4. journal, traces et secrets ;
5. branche compromission et données personnelles ;
6. service dégradé et cinq états de communication ;
7. rollback, restauration et rapprochement ;
8. recette métier et go/no-go ;
9. moteur de dix portes et faux verts ;
10. RTO/RPO/SLA et impact borné ;
11. RETEX J+1/J+7/J+30 ;
12. fiche A4 hors ligne ;
13. CTA borné.

La profondeur reste dans les sections ; la carte d'urgence ne doit pas dépasser
un écran mobile courant.

## 4. Routeur technique sans diagnostic amateur

Le symptôme oriente une collecte et un interlocuteur. Il ne démontre jamais la
cause.

| Observation passive                                               | Couches à faire vérifier                                | Preuves à demander au prestataire                                                       | Interlocuteur probable              | Ne pas faire                                                          |
| ----------------------------------------------------------------- | ------------------------------------------------------- | --------------------------------------------------------------------------------------- | ----------------------------------- | --------------------------------------------------------------------- |
| accessible en réseau mobile mais pas depuis un poste ou un bureau | navigateur, réseau local, proxy ou résolveur local      | heure, réseau, poste, résultat passif sur une seconde connexion                         | support interne ou opérateur réseau | conclure que le site ou le DNS autoritatif est réparé                 |
| `NXDOMAIN`, `SERVFAIL`, domaine expiré, site introuvable          | registrar, délégation DNS, DNSSEC                       | statut du domaine, nameservers, enregistrements, réponse autoritative, heure/fuseau     | registrar ou opérateur DNS          | changer les nameservers ou désactiver DNSSEC au hasard                |
| alerte de certificat, nom invalide, TLS impossible                | certificat edge, CDN, certificat d'origine, horloge     | nom présenté, chaîne, expiration, mode TLS, logs edge/origin                            | CDN, hébergeur ou mainteneur        | contourner l'alerte ou exposer directement l'origine                  |
| 502/504, panne variable selon région/réseau                       | CDN/WAF, load balancer, tunnel, origine                 | code et page exacts, URL, identifiant de requête, en-têtes utiles, logs edge et origine | CDN puis hébergeur/ops              | conclure que « le code est cassé » sur le seul statut                 |
| 500, page blanche ou erreur après déploiement                     | runtime, application, configuration, secret, dépendance | dernier déploiement, version, endpoint, trace corrélée, état des dépendances            | mainteneur/développeur              | désactiver plusieurs composants à la fois                             |
| accueil visible, formulaire ou connexion en échec                 | application, API, identité, anti-spam, e-mail           | requête de test contrôlée, logs applicatifs/auth, fournisseur tiers                     | mainteneur et fournisseur concerné  | saisir un identifiant réel ou des données client                      |
| données manquantes, incohérentes ou bloquées                      | base, cache, file, réplication, migration               | dernière transaction saine, erreurs, schéma, réplication, file, RPO                     | DBA/ops/mainteneur                  | restaurer avant d'évaluer ce qui sera écrasé                          |
| panier correct, paiement ou confirmation absent                   | PSP, webhook, stock, CRM, e-mail                        | identifiant de test, idempotence, statut fournisseur, rapprochement                     | mainteneur et PSP/intégrateur       | répéter un paiement réel                                              |
| contenu, DNS, certificat, compte ou accès modifié                 | identité, registrar, chaîne web, compromission possible | traces préservées, changements de compte/configuration, périmètre connu/inconnu         | réponse à incident                  | nettoyer, réinstaller ou prévenir l'attaquant par des essais visibles |

Un code HTTP identique peut être produit par plusieurs couches. À l'inverse, la
page d'accueil peut répondre `200` tandis que le parcours métier est en panne.
Une page d'état fournisseur verte ne prouve pas davantage que le service propre
à l'entreprise fonctionne.

## 5. Chronologie opérationnelle

| Fenêtre       | Actions sûres                                                                                                   | Décision produite                                        |
| ------------- | --------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| 0–5 min       | vérifier l'URL, noter heure/fuseau/message, observer sans saisie si aucun signal cyber                          | local, global, partiel ou compromission possible         |
| 5–15 min      | coordinateur, ticket six faits, page d'état des fournisseurs connus, impact métier                              | couche à contacter et priorité métier                    |
| 15–60 min     | préserver traces si cyber possible, ouvrir canal hors bande, message « investigation », définir service dégradé | responsable technique, prochain point, besoin cyber/CNIL |
| > 60 min      | actualiser le périmètre, rapprocher opérations, arbitrer rollback/restauration avec RTO/RPO                     | décision documentée, pas simple attente                  |
| avant reprise | source propre, tests techniques et métier, surveillance, acceptation                                            | go, go partiel ou no-go                                  |
| J+1           | faits/effets/mesures, cause et inconnues, registre de violation si applicable                                   | RETEX initial et actions datées                          |
| J+7           | corriger monitoring, accès, contrats, sauvegardes et runbook                                                    | responsables et échéances                                |
| J+30          | exercice de restauration et d'incident, mesure RTO/RPO réels                                                    | preuve de préparation, pas simple intention              |

Le journal sépare obligatoirement : **dernier fonctionnement connu**, **premier
échec connu**, **détection**, **prise en charge**, **mitigation**, **reprise
technique**, **validation métier** et **clôture**. Une seule heure de
« résolution » ne remplace pas cette chronologie. Chaque événement conserve son
fuseau, son auteur et sa preuve.

## 6. Preuves, journaux et chaîne cyber

### Ce que le dirigeant peut conserver sans intrusion

- heure avec fuseau, URL, code ou message exact ;
- dernière réussite connue et fonctions réellement touchées ;
- capture originale conservée dans un espace restreint ;
- copie expurgée destinée au ticket ;
- dernier changement connu, référence du ticket et personne contactée ;
- décisions, auteur, heure, résultat et éléments encore incertains.

### Ce que le prestataire ou spécialiste doit préserver

- registrar, DNS et modifications de zone ;
- CDN, WAF, reverse proxy, répartiteur et pare-feu ;
- hébergeur/cloud, système, conteneur et interface d'administration ;
- application, authentification, comptes privilégiés et déploiements ;
- base, cache, files, réplication et tâches planifiées ;
- paiement, webhooks, CRM, e-mail et autres tiers critiques ;
- EDR/antivirus ou autre télémétrie de sécurité lorsqu'ils existent.

Formulation publique obligatoire :

> Si une compromission est possible, demandez immédiatement au prestataire ou
> au spécialiste de préserver les traces avant leur rotation. Les originaux
> sont exportés vers un emplacement isolé et protégé contre l'écrasement. La
> source, la période, le fuseau horaire, la personne et l'heure de collecte sont
> notés. Une coupure, une extinction ou une isolation n'est exécutée que selon
> le plan d'incident ou sur instruction de la personne qualifiée : une action
> mal choisie peut détruire des traces volatiles.

Le guide public ne demande jamais au dirigeant de capturer une mémoire, imager
un disque ou installer un outil forensique. Il lui demande de faire préserver
ces éléments par la bonne personne.

### Intégrité et minimisation

- synchroniser les sources sur une référence de temps connue ;
- conserver l'original et travailler sur une copie ;
- documenter source, périmètre, exporteur, date et transfert ; utiliser une
  empreinte lorsque le processus de l'intervenant le prévoit ;
- restreindre et journaliser l'accès aux traces ;
- ne pas recopier mots de passe, jetons, clés, chaînes de connexion, carte
  bancaire ou données sensibles inutiles ;
- ne pas conserver les traces sans limite.

Pour la préparation, la CNIL recommande généralement une conservation glissante
de six mois à un an des traces pertinentes, sauf obligation ou besoin
particulier. Cette recommandation n'est ni une durée universelle pour tous les
logs, ni l'autorisation de collecter davantage de données personnelles. En
incident, le gel de rotation doit rester borné, documenté et réévalué.

## 7. Branche compromission

Les déclencheurs incluent :

- contenu ou redirection inconnus ;
- compte administrateur, rôle, clé, jeton ou accès nouveau ;
- modification inexpliquée du registrar, des nameservers, du DNSSEC ou du
  certificat ;
- alerte de sécurité cohérente, extorsion ou exfiltration possible ;
- e-mails, paiements ou coordonnées modifiés sans autorisation ;
- sauvegarde, journalisation ou protection désactivée ;
- anomalies corrélées sur plusieurs systèmes.

Trois niveaux de décision suffisent au guide public :

1. aucun signal cyber observé : branche technique, sans conclure à l'absence
   d'attaque ;
2. compromission possible : branche cyber avant toute action destructive ;
3. compromission confirmée, propagation ou données potentiellement touchées :
   réponse à incident, direction et fonctions juridique/données mobilisées sans
   attendre la restauration.

Réponse publique :

> Un seul de ces signaux suffit à changer de procédure, sans prouver encore
> l'attaque. Arrêtez les tests actifs et l'administration ordinaire, utilisez
> un moyen de communication hors du système suspect et transmettez les faits à
> une compétence de réponse à incident. Cette personne décide du périmètre, de
> l'endiguement et des traces à préserver.

Le CERT-FR intervient prioritairement pour les systèmes d'importance
particulière pour la nation. Une PME peut être orientée vers un CSIRT
territorial, Cybermalveillance.gouv.fr ou un prestataire qualifié ; une
organisation complexe peut rechercher un PRIS. L'assureur est prévenu tôt
lorsque le contrat le demande, sans retarder l'endiguement.

## 8. Données personnelles : formulation CNIL complète

Une panne n'est pas automatiquement une violation. Une violation peut cependant
affecter la **disponibilité**, l'**intégrité** ou la **confidentialité** de
données personnelles, accidentellement ou illicitement.

> Dès qu'une violation de données personnelles est plausible, documentez en
> interne les faits, leurs effets et les mesures prises, même si aucune
> notification externe n'est finalement requise. Le sous-traitant transmet les
> faits au responsable du traitement dans les meilleurs délais. Si la violation
> présente un risque pour les personnes, le responsable la notifie à la CNIL
> dans les meilleurs délais et, si possible, au plus tard 72 heures après en
> avoir pris connaissance. Il ne faut pas attendre tous les détails : une
> notification initiale peut être complétée. En cas de risque élevé, les
> personnes concernées sont aussi informées dans les meilleurs délais, sauf
> exception applicable.

Le guide ne décide jamais si le seuil de risque est atteint. Il identifie le
responsable de cette qualification et impose la transmission immédiate des
faits. Le registre interne doit contenir les faits, effets et mesures, y compris
quand la conclusion est « pas de notification CNIL ».

## 9. Rollback, restauration et reprise propre

### Questions avant décision

1. Quelle est la dernière version de code connue et quel schéma de données
   attend-elle ?
2. Quelle est la dernière copie saine prouvée, et a-t-elle été restaurée dans un
   environnement séparé ?
3. Quelles demandes, commandes ou écritures sont postérieures au point de
   reprise ?
4. La panne est-elle une régression connue ou une compromission possible ?
5. Le vecteur d'entrée et les mécanismes de persistance ont-ils été recherchés ?
6. Quels comptes, mots de passe, clés, jetons ou certificats doivent être
   révoqués ou renouvelés ?

Principe obligatoire :

> Après une compromission possible, un rollback du code ne prouve pas que le
> site est sain. La remise en production exige que l'intervenant ait recherché
> les mécanismes de persistance, corrigé le vecteur d'entrée, traité les secrets
> exposés et confirmé que les systèmes comme les données restaurées sont
> propres. Les opérations récentes sont ensuite rapprochées et une surveillance
> renforcée est maintenue avant le go/no-go final.

### Ne pas confondre quatre décisions

| Décision | Objet                                                              | Preuve minimale avant production                                                                   |
| -------- | ------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------- |
| fix      | corriger code, configuration ou dépendance sur la version courante | cause ou défaut reproduit, changement isolé, tests et retour arrière disponible                    |
| rollback | revenir à une version antérieure du code ou de la configuration    | snapshot, intégrité, compatibilité avec le schéma et les données actuelles                         |
| failover | basculer vers une capacité, zone ou fournisseur de secours         | dépendances accessibles, données suffisamment synchronisées, test depuis plusieurs réseaux/régions |
| restore  | reconstruire un système ou des données depuis une sauvegarde       | source saine, intégrité, restauration isolée, RPO mesuré et opérations récentes rapprochées        |

Un rollback applicatif compatible avec l'ancien schéma peut échouer sur une base
déjà migrée. Un failover qui fonctionne depuis une seule région ne démontre pas
un retour global. Une sauvegarde présente mais jamais restaurée reste
`unknown`, pas `pass`.

### Recette contrôlée

| Activité       | Test autorisé après décision de reprise                 | Preuve de sortie                                                                                                                                                    |
| -------------- | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| vitrine        | formulaire avec adresse de test                         | réception unique, confirmation, trace corrélée                                                                                                                      |
| rendez-vous    | création puis annulation d'un créneau de test           | agenda, notification et disponibilité cohérents                                                                                                                     |
| boutique       | bac à sable ou procédure PSP documentée                 | un seul effet métier après déduplication ; livraisons webhook manquantes, dupliquées ou désordonnées rapprochées ; commande, débit, stock et confirmation cohérents |
| espace client  | compte de test aux droits minimaux                      | accès attendu, aucune donnée ou fonction supplémentaire                                                                                                             |
| données        | rapprochement depuis le point de reprise                | base, fichiers, files, cache, index et opérations tierces cohérents ; écarts expliqués                                                                              |
| e-mail         | message vers une boîte de test surveillée               | réception effective ; un statut API « accepté » ne suffit pas                                                                                                       |
| exposition     | contrôle depuis plusieurs réseaux/régions utiles        | DNS/TLS, HTTP et fonctions critiques cohérents                                                                                                                      |
| SEO temporaire | contrôle du statut, de `Retry-After` et de `robots.txt` | réponse conforme à la stratégie 200/503 décidée                                                                                                                     |

Une vraie carte ou un compte client ne sert jamais de donnée de test. Si un
parcours échoue, le statut reste « rétabli partiellement ».

### États de preuve et dix portes

Chaque porte utilise exclusivement :

- `unknown` : non vérifié, périmé ou preuve inaccessible ;
- `pass` : preuve datée, environnement et propriétaire identifiés ;
- `fail` : résultat contraire au critère ;
- `not-applicable` : hors périmètre avec justification et responsable.

`unknown` et champ vide ne sont jamais verts. Un changement de code,
configuration, données, DNS ou fournisseur peut rendre une ancienne preuve
périmée et la ramener à `unknown`.

| Porte                 | Question bloquante                                                                                                   |
| --------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `public_access`       | le service est-il accessible depuis les réseaux/régions utiles ?                                                     |
| `dns_tls`             | domaine, délégation, DNSSEC et TLS sont-ils cohérents ?                                                              |
| `homepage_http`       | la réponse HTTP attendue est-elle servie sans masquer une erreur ?                                                   |
| `critical_journey`    | la fonction métier prioritaire aboutit-elle de bout en bout ?                                                        |
| `payment`             | autorisation, commande et absence de doublon sont-elles prouvées ?                                                   |
| `email`               | le message est-il effectivement reçu, pas seulement accepté par l'API ?                                              |
| `webhook`             | les livraisons manquantes, dupliquées ou désordonnées sont-elles rapprochées sans produire plusieurs effets métier ? |
| `data_reconciliation` | base, fichiers, files, cache, index, stock et CRM sont-ils rapprochés ?                                              |
| `cyber_clearance`     | la personne qualifiée autorise-t-elle la reprise si cyber était possible ?                                           |
| `business_signoff`    | le propriétaire métier accepte-t-il le périmètre et les limites ?                                                    |

Un go total exige `pass` sur toutes les portes applicables et aucun `unknown` ou
`fail`. Un `not-applicable` doit être expliqué. Un go partiel nomme les portes
restées fermées, le canal de secours et l'heure de réévaluation.

### Cas adversariaux obligatoires

- accueil `200`, formulaire en échec ;
- 502 présenté à tort comme preuve d'une panne applicative ;
- page fournisseur verte, service client encore indisponible ;
- sauvegarde détectée mais restauration jamais testée ;
- rollback du code incompatible avec le schéma courant ;
- paiement accepté avec webhook dupliqué ou désordonné ;
- e-mail accepté par l'API mais jamais reçu ;
- reprise visible depuis une seule région ;
- RTO absent présenté comme respecté ;
- RPO cible de 24 h avec dernière copie saine vieille de 30 h ;
- coût vide interprété comme 0 au lieu de `ND` ;
- clôture avant validation métier ou période d'observation ;
- soupçon cyber sans `cyber_clearance`.

## 10. RTO, RPO, GTI, GTR, SLA et impact

| Terme | Définition utile                                                                                          | Limite à écrire                                                                                                   |
| ----- | --------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| RTO   | durée cible pour remettre un service ou mode dégradé en fonction                                          | cible métier, pas promesse universelle                                                                            |
| RPO   | point de reprise cible, donc quantité maximale de données que l'entreprise accepte de devoir reconstituer | une sauvegarde quotidienne peut exposer jusqu'à une journée d'opérations ; elle ne prédit pas le temps de reprise |
| GTI   | objectif de prise en compte par le support                                                                | ne signifie ni diagnostic ni réparation                                                                           |
| GTR   | objectif contractuel de rétablissement ou contournement selon définition                                  | vérifier départ, heures couvertes, exclusions et pénalités                                                        |
| SLA   | engagements mesurés sur un périmètre et une période                                                       | un pourcentage d'uptime ne prouve ni sauvegarde, ni sécurité, ni reprise                                          |

RTO et RPO ne peuvent être déclarés « respectés » que si la cible
**préexistait**, si son point de départ est défini et si les heures/preuves sont
disponibles. Une cible inventée après l'incident n'est qu'une recommandation
pour la suite.

Le guide ne fournit aucune valeur « standard ». Il fait décider, par service :

- délai maximal avant mode dégradé ;
- perte de données acceptable et mode de rapprochement ;
- fonctions prioritaires et dépendances ;
- heures de couverture et chaîne d'escalade ;
- preuve de restauration et fréquence d'exercice ;
- autorité capable d'accepter un go partiel ou total.

### Impact sans faux chiffre

Le moteur distingue :

- marge contributive des ventes ou demandes réellement irrécupérables ;
- opérations différées ou rattrapées, comptées séparément ;
- temps interne exceptionnel ;
- prestataires, astreinte, investigation et reprise ;
- gestes commerciaux, pénalités et frais prouvés ;
- crédits fournisseur ou indemnités, affichés séparément et non présumés.

Il ne cumule pas chiffre d'affaires perdu et marge correspondante. Une donnée
absente vaut `ND`, jamais 0. La réputation reste qualitative sans méthode et
source propres.

```text
Impact documenté =
  marge des opérations irrécupérables
  + temps interne exceptionnel
  + surcoûts de réponse et de reprise
  + gestes, pénalités et frais prouvés
  - récupérations réellement obtenues.
```

## 11. Communication : cinq états, une source de vérité

Le canal doit rester disponible hors du site et du domaine potentiellement
touché. Chaque message indique le périmètre connu, le service de secours et
l'heure du prochain point.

| État               | Formulation minimale                                                                                                                                       |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Investigation      | « Nous constatons une indisponibilité de [fonction] depuis [heure/fuseau]. L'analyse est en cours. Utilisez [canal surveillé]. Prochain point à [heure]. » |
| Incident identifié | « La couche concernée a été identifiée, sans conclusion publique au-delà des faits établis. [fonction] reste indisponible. Prochain point à [heure]. »     |
| Contournement      | « [fonction limitée] est disponible par [canal]. Ne répétez pas [commande/paiement] si vous n'avez pas reçu de confirmation. »                             |
| Surveillance       | « Le service est de nouveau accessible et reste sous surveillance. Les parcours [liste] ont été testés ; [limites] demeurent. »                            |
| Résolu             | « L'incident est clos à [heure] après validation de [parcours]. Les opérations potentiellement incomplètes sont rapprochées selon [procédure]. »           |

Ne jamais publier « aucune donnée touchée », une cause ou une heure de retour
sans preuve. La page d'état fournisseur n'est qu'une source parmi d'autres et
peut ne pas couvrir le DNS, le CDN, le paiement ou le site propre.

## 12. Google et fermeture temporaire

La sécurité et la continuité passent avant le SEO. Lorsque le prestataire
confirme qu'une fermeture totale est nécessaire et sûre :

- Google recommande d'abord de conserver un service limité ;
- pour une fermeture urgente d'**un à deux jours**, une page informative peut
  répondre `503 Service Unavailable` ;
- la page doit être statique et légère, avec `Retry-After` ;
- `robots.txt` doit rester accessible et ne pas répondre 503 ;
- ne pas employer 403, 404, 410 ou `noindex` comme réflexe de fermeture ;
- sous 503, Google ne peut pas actualiser titres, descriptions et données
  structurées ;
- au-delà, le prestataire doit requalifier la stratégie ; aucun maintien de
  position n'est garanti.

La date « dernière mise à jour le 31 décembre 2025 » affichée par la page
française de Google est exacte au 27/07/2026.

## 13. Matrice fait, source et limite

Les références étrangères fournissent une méthode. Elles ne remplacent ni le
droit français ni l'analyse de l'incident réel.

| Fait ou méthode retenu                                                          | Source primaire/officielle vérifiée le 27/07/2026                                                                                                                            | Limite                                                                  | Règle éditoriale                                                                     |
| ------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| qualifier sûr/incertain, obligations et périmètre                               | [CERT-FR — bons réflexes intrusion](https://cert.ssi.gouv.fr/les-bons-reflexes-en-cas-dintrusion-sur-un-systeme-dinformation/)                                               | intrusion, pas simple panne                                             | utiliser seulement si compromission possible                                         |
| copier les logs hors ligne, prolonger leur rotation                             | [CERT-FR — bons réflexes intrusion](https://cert.ssi.gouv.fr/les-bons-reflexes-en-cas-dintrusion-sur-un-systeme-dinformation/)                                               | action technique à coordonner                                           | l'attribuer au spécialiste/prestataire                                               |
| préserver WAF, reverse proxy, hôte, site, plugins, système                      | [CERT-FR — fiche défiguration](https://www.cert.ssi.gouv.fr/uploads/CERTFR-2024-RFX-008-2.pdf)                                                                               | défiguration confirmée ou plausible                                     | ne pas imposer toutes les sources à une panne ordinaire                              |
| défiguration = droits attaquants possibles ; preuves et correction avant retour | [Cybermalveillance — défiguration](https://www.cybermalveillance.gouv.fr/tous-nos-contenus/fiches-reflexes/defiguration-de-site-internet)                                    | fiche mise à jour le 10/07/2026, scénario cyber                         | ne pas assimiler 502 et intrusion                                                    |
| sauvegardes testées et capacité de restauration                                 | [CNIL — sauvegarder](https://www.cnil.fr/fr/securite-sauvegarder), [ANSSI — sauvegarde SI](https://messervices.cyber.gouv.fr/guides/sauvegarde-des-systemes-dinformation)    | ne désigne pas automatiquement la dernière copie                        | exiger test séparé, source saine et rapprochement                                    |
| violation = disponibilité, intégrité ou confidentialité                         | [CNIL — quand notifier](https://www.cnil.fr/en/cnil-direct/question/reglement-europeen-quand-faut-il-notifier-une-violation-de-donnees-la-cnil)                              | données personnelles seulement                                          | distinguer panne et violation                                                        |
| registre interne, risque, 72 h, risque élevé                                    | [CNIL — règles à suivre](https://www.cnil.fr/fr/violations-de-donnees-personnelles-les-regles-suivre)                                                                        | qualification au cas par cas                                            | ne jamais automatiser la conclusion                                                  |
| sous-traitant → responsable dans les meilleurs délais                           | [CNIL — règles à suivre](https://www.cnil.fr/fr/violations-de-donnees-personnelles-les-regles-suivre)                                                                        | responsabilité finale du responsable de traitement                      | expliciter le transfert de rôle                                                      |
| journaliser, protéger, minimiser ; six mois à un an en général                  | [CNIL — tracer les opérations](https://www.cnil.fr/fr/securite-tracer-les-operations)                                                                                        | exceptions et finalités propres                                         | aucune durée universelle ni conservation infinie                                     |
| preuves utiles pour démontrer aussi l'absence d'événement                       | [NCSC UK — capacités techniques](https://www.ncsc.gov.uk/collection/incident-management/technical-response-capabilities)                                                     | méthode britannique                                                     | benchmark de preuve, pas droit                                                       |
| fournisseurs cloud pouvant ne pas exposer les logs par défaut                   | [NCSC UK — capacités techniques](https://www.ncsc.gov.uk/collection/incident-management/technical-response-capabilities)                                                     | dépend du contrat/service                                               | demander accès et export avant incident                                              |
| seules des données propres reviennent sur des systèmes propres                  | [NCSC UK — capacités techniques](https://www.ncsc.gov.uk/collection/incident-management/technical-response-capabilities)                                                     | page version 1.0, dernière revue indiquée le 19/09/2019 ; réponse cyber | repère technique à corroborer avec ANSSI/CISA ; gate obligatoire après compromission |
| identifier services, données, clients et fournisseurs touchés                   | [NCSC UK — guide PME, étape 2](https://www.ncsc.gov.uk/collection/small-business-guidance--response-and-recovery/step-2-identify-what-s-happening)                           | processus UK                                                            | adapter les contacts à la France                                                     |
| préserver mémoire et logs à rétention courte                                    | [CISA — StopRansomware](https://www.cisa.gov/resources-tools/resources/stopransomware-guide)                                                                                 | ransomware, révision officielle du 19/10/2023                           | principe forensique, pas procédure DIY                                               |
| journal de preuve, images mémoire/disque, audit/transaction/connexion           | [CISA — Federal Incident Playbook](https://www.cisa.gov/sites/default/files/2024-08/Federal_Government_Cybersecurity_Incident_and_Vulnerability_Response_Playbooks_508C.pdf) | administration fédérale US                                              | confier aux intervenants qualifiés                                                   |
| ne pas journaliser jetons, mots de passe, clés ou cartes                        | [OWASP — Logging Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html)                                                                       | guide technique, pas norme juridique                                    | reprendre la minimisation, pas les exemples d'implémentation                         |
| 502/504 peut venir du CDN ou de l'origine                                       | [Cloudflare — erreurs 502/504](https://developers.cloudflare.com/support/troubleshooting/http-status-codes/cloudflare-5xx-errors/error-502-504/)                             | opérateur particulier, mise à jour 20/07/2026                           | illustrer les couches sans présumer Cloudflare                                       |
| DNS : enregistrements, nameservers, DNSSEC et cache sont distincts              | [Cloudflare — incidents DNS](https://developers.cloudflare.com/dns/troubleshooting/dns-issues/)                                                                              | documentation fournisseur, mise à jour 16/04/2026                       | ne proposer aucun changement aléatoire                                               |
| domaine, DNS et hébergement peuvent avoir des gestionnaires différents          | [Afnic — lexique](https://www.afnic.fr/lexique/)                                                                                                                             | extensions opérées par l'Afnic                                          | conserver le périmètre                                                               |
| service limité, 503 borné et robots.txt accessible                              | [Google Search Central — suspendre une activité](https://developers.google.com/search/docs/crawling-indexing/pause-online-business?hl=fr)                                    | SEO, pas réponse à incident                                             | action du prestataire après sécurité                                                 |

## 14. Benchmark concurrentiel sans copie

Le benchmark sert à comprendre les formats utiles et les erreurs fréquentes. Il
ne fournit aucune preuve factuelle au guide.

| Corpus observé le 27/07/2026                                                                                                                                                                                                                           | Force visible                                                      | Limite ou risque                                                                            | Élément à produire indépendamment                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| guides français d'agence et médias, dont [WWire](https://wwire.fr/outils/site-inaccessible-urgence-30-minutes), [Sitebug](https://sitebug.fr/blog/depannage-site-web) et [Blog du Modérateur](https://www.blogdumoderateur.com/panne-site-web-causes/) | diagnostic rapide, causes familières, première demi-heure          | causalité parfois trop affirmative, essais DIY et CTA d'urgence                             | routeur prudent, preuve avant action et gate CTA                             |
| centres d'aide [Hostinger](https://www.hostinger.com/tutorials/tips-for-troubleshooting-website/) et [one.com](https://help.one.com/hc/fr/articles/33598867637777-D%C3%A9pannage-Pourquoi-mon-site-Web-est-il-en-panne)                                | profondeur par code, domaine, nameservers et produit               | solutions liées à leur plateforme ; restauration ou désactivation risquée si cyber possible | séparer observation universelle et action fournisseur                        |
| [SSL Shopper, « first 30 minutes »](https://www.sslshopper.com/website-monitoring/website-down-incident-response/)                                                                                                                                     | chronologie, DNS/hosting/app/tiers, journal                        | cadre non français, autorité commerciale                                                    | chronologie originale 0–5/5–15/15–60 avec CNIL                               |
| NCSC Small Business                                                                                                                                                                                                                                    | questions métier, rôles, fournisseurs et récupération              | processus cyber britannique plus large qu'un site                                           | vocabulaire dirigeant et contacts hors bande                                 |
| CISA                                                                                                                                                                                                                                                   | preuves volatiles, restauration propre, communications coordonnées | ransomware et contexte américain                                                            | chaîne de preuve confiée au spécialiste                                      |
| Google et Cloudflare                                                                                                                                                                                                                                   | exactitude par composant                                           | documentation fragmentée et produit-spécifique                                              | une seule matrice dirigeant reliant symptôme, couche, preuve et propriétaire |

Le différenciant mondial recherché n'est pas la longueur. C'est l'association
dans une même fiche de :

- sécurité immédiate lisible en trente secondes ;
- diagnostic multicouche sans fausse certitude ;
- preuve cyber exploitable sans demander au dirigeant de faire du forensic ;
- droit CNIL français exact ;
- restauration « systèmes propres + données propres » ;
- messages client à cinq états ;
- RTO/RPO/SLA sans promesse inventée ;
- ressource A4 utilisable quand le site ou le domaine ne répond plus.

Aucune phrase, structure ou exemple concurrent n'est à reprendre. Les tableaux,
messages et scénarios doivent être rédigés depuis ce contrat éditorial et les
sources primaires.

## 15. Critères de passage

### Gate éditorial et contradictoire

- nouveau SHA-256 figé avant audit ;
- ancien 20/20 conservé seulement comme historique invalidé ;
- trois contrôles indépendants : UX dirigeant, factuel/cyber, technique ;
- **zéro P0, zéro P1** et chaque P2 corrigé ou accepté avec justification ;
- minimum **95/100 sur chacun des trois axes**, sans moyenne de compensation ;
- aucun contrôleur ne valide son propre correctif comme seule preuve.

### Gate factuel et cyber

- chaque affirmation sensible rattachée à une source primaire encore accessible ;
- CNIL relue mot à mot : registre, sous-traitant, risque, 72 h, complément et
  risque élevé ;
- test adversarial des scénarios DNS détourné, certificat, 502, DB, PSP,
  défiguration et indisponibilité de données ;
- test des treize faux verts listés dans la section 9 ;
- preuve que l'observation initiale n'envoie ni identifiant, ni formulaire, ni
  paiement ;
- preuve que la reprise cyber exige systèmes et données propres ;
- aucune promesse de délai, de sécurité, de perte nulle ou de maintien SEO.

### Gate produit et rendu

- carte d'urgence utilisable sans ouvrir le sommaire ;
- CTA principal ancré sur la carte d'urgence immédiatement après le hero ;
- fiche hors ligne commençant par une page réflexe autonome, puis un sommaire
  d'annexes, avec la chaîne CNIL minimale ;
- verdict rappelant que les champs libres ne sont ni interprétés ni
  diagnostiqués et que la branche cyber dépend des choix structurés ;
- toutes les ancres, liens, tableaux et états testés ;
- fiche hors ligne exportable et imprimable sur A4 ;
- rendu navigateur réel à 320, 360, 390, 430, 640, 768, 1024, 1280, 1440 et
  1600 px ;
- tableaux convertis en cartes lisibles sur mobile, sans défilement horizontal
  de page ;
- navigation clavier, focus, contrastes, titres et liens explicites contrôlés ;
- build, TypeScript, lint, tests ciblés et `git diff --check` réussis ;
- vérification d'un cas e-commerce : un seul effet métier après déduplication,
  livraisons webhook manquantes, dupliquées ou désordonnées, stock et
  confirmation rapprochés ;
- dix portes rejouées avec au moins un cas `unknown`, `fail` et
  `not-applicable`, sans vert par défaut ;
- calcul contrôlé avec donnée manquante `ND`, opération rattrapée et absence de
  double compte chiffre d'affaires/marge ;
- lecture chronométrée de la carte d'urgence par une personne non technique.

### Gate publication

- décision éditoriale rattachée au SHA exact ;
- build local, déploiement, URL publique, indexabilité et indexation déclarés
  séparément ;
- sources et dates revérifiées le jour du gel ;
- aucune indexation tant que le minimum indépendant reste sous le seuil ou
  qu'un P1 est ouvert.

## 16. Limites de publication obligatoires

Le futur article devra dire clairement :

- qu'il n'identifie pas à distance la cause d'une panne ;
- qu'il ne remplace ni une réponse à incident, ni un conseil juridique ;
- qu'Hagnéré Code n'est pas présenté comme un CERT ou une astreinte ;
- qu'un incident actif ne doit pas attendre une réponse au formulaire ;
- qu'aucune restauration, isolation ou rotation de secrets n'est universelle ;
- qu'aucune donnée n'est déclarée intacte sans analyse ;
- que RTO, RPO, GTI, GTR et SLA dépendent du service et du contrat ;
- qu'un résultat local ne prouve ni déploiement, ni indexation, ni position
  Google ;
- qu'aucun test réel de panne, d'intrusion ou de restauration client n'est
  démontré par le dossier de recherche.

## 17. Ordre de production recommandé

1. figer la baseline et révoquer les anciens statuts P3/P4 ;
2. réécrire la carte d'urgence et le routeur multicouche ;
3. intégrer preuves, cyber, CNIL et restauration propre ;
4. ajouter chronologie, messages, RTO/RPO/SLA et recette ;
5. produire la fiche A4 hors ligne ;
6. contrôler faits et liens sur le snapshot ;
7. exécuter QA navigateur, accessibilité, impression et tests ;
8. lancer trois contre-audits indépendants ;
9. corriger l'union des constats, sans moyenner les notes ;
10. décider séparément publication, déploiement puis indexation.

Tant que cet ordre n'est pas achevé et prouvé sur un nouveau SHA, le dossier R1
reste une **spécification de remise à niveau**, pas une autorisation de
publication.
