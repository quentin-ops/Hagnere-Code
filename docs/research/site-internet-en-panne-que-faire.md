# Dossier de recherche — Site internet en panne : que faire ?

> Ce dossier prépare un guide destiné à un dirigeant ou à un indépendant dont
> le site ne répond plus. Il organise les décisions des quinze premières
> minutes, de la première heure et de la première journée, sans transformer le
> lecteur en administrateur système ni lui faire prendre un risque cyber.

Statut actuel : **P4 terminée localement — publication retenue jusqu'au gel
commun du lot**.

## Journal des quatre passes

Propriétaire éditorial unique : **agent racine Codex**.

| Passe                        | État                     | Date       | Responsable                      | Snapshot                                               | Blocages |
| ---------------------------- | ------------------------ | ---------- | -------------------------------- | ------------------------------------------------------ | -------- |
| 1. Recherche                 | Terminée — porte validée | 2026-07-22 | Recherche officielle et synthèse | `manifests/site-internet-en-panne-que-faire-p1.sha256` | Aucun    |
| 2. Rédaction et intégration  | Terminée — porte validée | 2026-07-22 | Agent racine Codex               | `manifests/site-internet-en-panne-que-faire-p2.sha256` | Aucun    |
| 3. Contre-audit indépendant  | Terminée — 20/20         | 2026-07-22 | Agent distinct                   | `manifests/site-internet-en-panne-que-faire-p3.sha256` | Aucun    |
| 4. Plume humaine et contrôle | Terminée — porte validée | 2026-07-22 | Agent racine Codex               | `manifests/site-internet-en-panne-que-faire-p4.sha256` | Aucun    |

### Manifeste du snapshot

Le manifeste P1 doit contenir uniquement le SHA-256 du présent dossier. Le
hash n'est pas recopié ici afin de ne pas créer une référence circulaire.

## 1. Fiche d'identité

| Champ                            | Décision documentaire                                                                                                                                                                                                                                  |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Slug                             | `site-internet-en-panne-que-faire`                                                                                                                                                                                                                     |
| Titre SEO de travail             | Site internet en panne : que faire dans l'ordre ?                                                                                                                                                                                                      |
| H1 de travail                    | Votre site internet est en panne : quoi faire maintenant ?                                                                                                                                                                                             |
| Requête principale qualitative   | site internet en panne que faire                                                                                                                                                                                                                       |
| Variantes utiles                 | mon site ne fonctionne plus ; site web inaccessible ; site affiche une erreur ; site indisponible ; qui appeler quand un site est en panne                                                                                                             |
| Moment du parcours               | Sécuriser une activité déjà touchée, puis décider qui doit intervenir                                                                                                                                                                                  |
| Lecteur précis                   | Dirigeant, commerçant, artisan ou indépendant dont le site présente des services, collecte des demandes, prend des rendez-vous ou vend en ligne                                                                                                        |
| Situation déclenchante           | Le lecteur découvre une page blanche, une erreur, une redirection inconnue ou une fonction essentielle qui ne répond plus et ne sait pas si le problème vient de son appareil, de l'hébergement, du nom de domaine, d'une mise à jour ou d'une attaque |
| Phrase qu'il dirait au téléphone | « Mon site ne répond plus depuis ce matin. Je ne sais pas si c'est l'hébergement, le nom de domaine, une mise à jour ou une attaque. Qu'est-ce que je fais tout de suite, qui dois-je appeler et que dois-je dire à mes clients ? »                    |
| Décision principale              | Observer sans aggraver, déterminer l'étendue du problème, prévenir l'intervenant compétent, informer honnêtement les clients et n'accepter la remise en service qu'après des tests métier                                                              |
| Niveau de connaissance initial   | Le lecteur connaît son activité et ses parcours clients, mais pas nécessairement le DNS, les codes HTTP, les journaux techniques ou les procédures de restauration                                                                                     |
| Action autonome                  | Ouvrir un journal d'incident avec l'heure, l'URL exacte, le message visible, les fonctions touchées, les vérifications simples et les personnes contactées                                                                                             |
| CTA possible                     | « Faire diagnostiquer la panne de mon site » vers `/demarrer-un-projet`, seulement après les actions sûres et avec possibilité d'orienter vers l'hébergeur ou un spécialiste cyber                                                                     |
| Bon fit Hagnéré Code             | Site vitrine, site marchand ou application web dont le propriétaire dispose d'au moins une partie des accès et cherche un diagnostic, une remise en service ou un plan de prévention maintenable                                                       |
| Mauvais fit                      | Intrusion confirmée ou fortement suspectée nécessitant une réponse cyber spécialisée, litige sur la propriété des accès, système critique exigeant une cellule d'incident dédiée, ou simple panne de connexion locale sans effet sur le site           |
| Hors périmètre                   | Nettoyage technique d'un site piraté, procédure forensique, conseil juridique individualisé, garantie de délai, calcul de pertes commerciales sans données, optimisation d'un site seulement lent et rédaction d'un contrat de maintenance             |
| Date et mode de recherche        | 22 juillet 2026 ; SERP française qualitative et vérification de sources primaires CNIL, ANSSI, CERT-FR, Cybermalveillance.gouv.fr, Google Search Central et Afnic ; aucun volume propriétaire disponible                                               |
| Responsable de la synthèse       | Agent de recherche P1, sous contrôle de l'agent racine                                                                                                                                                                                                 |

### Questions indispensables

1. Comment vérifier que le problème touche réellement le site et pas seulement
   un appareil ou un réseau ?
2. Quelles informations noter avant de contacter l'hébergeur, le mainteneur ou
   le registrar ?
3. Comment distinguer une panne, une lenteur et les signes possibles d'un
   incident de sécurité ?
4. Que faut-il faire dans les quinze premières minutes, dans la première heure
   et dans la première journée ?
5. Que dire aux clients sans inventer la cause ni promettre une heure de retour
   impossible à tenir ?
6. Peut-on remettre une sauvegarde immédiatement ?
7. Quels parcours faut-il tester avant de déclarer le site rétabli ?
8. Quand une indisponibilité peut-elle aussi soulever une question de données
   personnelles ?

### Objections ou craintes du lecteur

- « Chaque minute compte : je dois forcément essayer quelque chose moi-même. »
- « Si je dis que le site est en panne, mes clients vont perdre confiance. »
- « Mon prestataire dit qu'une sauvegarde existe : il suffit de la remettre. »
- « Une page d'erreur signifie peut-être que nous avons été piratés. »
- « Si le site disparaît quelques heures, Google va supprimer tout mon
  référencement. »

### Score de lancement

Cette note priorise le sujet. Elle ne prédit ni trafic, ni position Google, ni
volume de demandes commerciales.

| Critère                          |       Note | Justification                                                                                                                                     |
| -------------------------------- | ---------: | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| Adéquation avec une offre vendue |      25/25 | Le sujet rejoint directement la maintenance, la reprise de site, le développement web et la sécurisation de l'exploitation                        |
| Proximité d'une demande de devis |      25/25 | Le lecteur connaît un problème actuel et doit identifier rapidement l'intervenant capable de le résoudre                                          |
| Preuve qualitative de demande    |      13/15 | Les formulations et résultats observés confirment une demande de diagnostic, mais aucun volume Keyword Planner ou Search Console n'est disponible |
| Preuve ou outil original         |      14/15 | Journal d'incident prêt à copier, progression 15 minutes / 1 heure / 1 jour et contrôle de remise en service                                      |
| Différenciation                  |       8/10 | La SERP contient déjà des checklists techniques ; l'angle dirigeant, communication et limite cyber est moins couvert                              |
| Maillage et CTA utile            |       8/10 | Lien naturel vers lenteur, maintenance, TMA, reprise de prestataire et guide cyber, avec un mauvais fit explicitement orienté ailleurs            |
| **Total**                        | **93/100** | Sujet prioritaire, sans promesse de résultat SEO ou commercial                                                                                    |

## 1 bis. Contrat de langage humain

**Réponse attendue en une phrase :** dans les quinze premières minutes, notez
exactement ce qui ne fonctionne plus et vérifiez l'étendue du problème sans
modifier le site ; dans l'heure, transmettez ce journal au bon intervenant et
ouvrez un canal de secours pour les clients ; dans la journée, ne remettez en
service qu'une version contrôlée et testez le travail réel avant d'annoncer le
retour à la normale.

**Terme central :** une panne signifie ici que le site ou une fonction
nécessaire à l'activité est indisponible. Elle ne désigne pas automatiquement
une attaque. Une page peut aussi être seulement lente, ou le problème peut ne
toucher qu'un appareil, un réseau, une page ou un service tiers.

**Mots ordinaires à privilégier :** site inaccessible, page blanche, message
d'erreur, formulaire qui ne part plus, paiement bloqué, espace client fermé,
heure de découverte, dernière fois où cela fonctionnait, hébergeur, nom de
domaine, sauvegarde vérifiée, client à informer, personne responsable.

**Mots à traduire ou éviter à l'ouverture :** incident response, monitoring,
rollback, logs, DNS, registrar, RPO, RTO, PRA, PCA, SLA, 502, 503, containment,
forensic, failover, endpoint, criticité, blast radius.

### Projet des 150 premiers mots

> Votre site ne répond plus, votre formulaire affiche une erreur ou vos clients
> vous disent qu'ils ne peuvent plus commander. La première erreur serait de
> modifier au hasard les extensions ou les réglages du nom de domaine, ni de
> lancer une restauration. Vous risqueriez d'effacer un indice utile, de
> compliquer le diagnostic ou de remplacer des données encore récupérables.
>
> Commencez par trois choses simples : notez l'heure et le message exact,
> vérifiez le site depuis une autre connexion, puis identifiez ce qui est
> réellement bloqué pour vos clients. Dans les quinze premières minutes, vous
> devez obtenir une description fiable, pas trouver seul la cause. Dans l'heure
> qui suit, cette description permet à l'hébergeur, au mainteneur ou au
> spécialiste adapté d'agir plus vite. Ce guide vous montre aussi quoi dire à
> vos clients, quand une attaque est possible et quels tests exiger avant de
> considérer le site comme revenu.

**Ce que le lecteur saura décider après ces 150 mots :** il sait qu'il doit
documenter et qualifier avant de modifier, et qu'une éventuelle branche cyber
change la personne à appeler ainsi que les gestes autorisés.

### Test de l'ouverture

- [x] la situation vécue apparaît avant la méthode de l'agence ;
- [x] aucun sigle technique n'est nécessaire pour comprendre la première action ;
- [x] aucun lexique de masse ne retarde la réponse ;
- [x] aucune métaphore ne devient un système à apprendre ;
- [x] le lecteur reçoit une action utile avant tout CTA ;
- [x] les repères de quinze minutes, une heure et une journée sont présentés
      comme une progression éditoriale, jamais comme un délai garanti de
      rétablissement.

### Test sujet, action, résultat préparé pour P4

| Formulation abstraite à bannir | Qui agit ?                                        | Action concrète                                                             | Résultat attendu                                                                     | Formulation humaine prévue                                                                      |
| ------------------------------ | ------------------------------------------------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| Qualifier l'incident           | Le dirigeant ou la personne qui découvre la panne | Note l'heure, l'URL, le message et les fonctions touchées                   | L'intervenant reçoit des faits au lieu d'une alerte vague                            | « Écrivez l'adresse exacte et le message qui s'affiche avant de toucher au site. »              |
| Évaluer le périmètre           | Un collaborateur                                  | Essaie depuis une seconde connexion et vérifie quelques parcours précis     | Il distingue un appareil bloqué d'une panne plus large                               | « Ouvrez la même page en 4G, puis testez seulement l'accueil et la fonction importante. »       |
| Activer le mode dégradé        | Le responsable de l'activité                      | Donne un téléphone, une adresse ou une autre manière de demander le service | Les clients savent encore comment agir                                               | « Dites clairement quel moyen reste disponible pendant la panne. »                              |
| Préserver les preuves          | Le responsable et l'intervenant compétent         | Évitent les modifications en série et conservent les observations utiles    | Une suspicion cyber reste analysable                                                 | « Si le contenu a changé sans autorisation, arrêtez les essais et appelez un spécialiste. »     |
| Valider la reprise             | La personne métier nommée                         | Refait un contact, un achat ou une connexion de test de bout en bout        | Le site est déclaré revenu sur le travail du client, pas sur sa seule page d'accueil | « N'annoncez pas le retour avant d'avoir reçu le formulaire ou terminé le parcours essentiel. » |

## 2. Frontières et anti-cannibalisation

| Page existante ou prévue                  | Intention détenue                                                                                         | Différence du nouveau guide                                                                                                           | Lien ou arbitrage nécessaire                                                                       |
| ----------------------------------------- | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `pourquoi-mon-site-est-lent`              | Le site charge, mais trop lentement ; mesurer les causes et décider d'optimiser ou de refondre            | Le nouveau guide commence lorsqu'une page ou une fonction ne répond plus et organise les premières décisions d'incident               | Définir « lent » et renvoyer vers ce guide si le contenu finit par charger                         |
| `site-wordpress-pirate-que-faire`         | Traiter un compromis WordPress confirmé ou fortement étayé, ses traces, son nettoyage et ses conséquences | Le nouveau guide signale seulement les indices possibles et arrête le dépannage ordinaire ; il ne donne aucune procédure de nettoyage | Lien vers le guide cyber dès qu'un contenu, une redirection ou un accès a changé sans autorisation |
| `reprendre-maintenance-site-autre-agence` | Récupérer les accès, le code, les sauvegardes et la connaissance lors d'un changement de prestataire      | Ici, l'urgence est en cours ; le lecteur doit d'abord rétablir et documenter, pas organiser une passation générale                    | Lien après l'incident si personne ne sait qui maintient le site                                    |
| `cout-maintenance-site-internet`          | Comprendre ce qu'un contrat de maintenance couvre et combien il peut coûter                               | Le nouveau guide ne chiffre aucun contrat et ne transforme pas une panne en argument automatique pour un abonnement                   | Lien à la revue post-incident, seulement si une prévention récurrente devient utile                |
| `contrat-tma-application`                 | Répartir contractuellement responsabilités, niveaux de service et sortie                                  | Le nouveau guide ne promet aucun délai et s'adresse aussi à un site sans contrat                                                      | Lien après la remise en service pour formaliser les responsabilités futures                        |
| `pourquoi-site-pas-visible-google`        | Diagnostiquer la visibilité dans le moteur de recherche                                                   | Un site peut fonctionner tout en étant absent de Google ; le nouveau guide traite la disponibilité technique vécue par les visiteurs  | Ne pas mélanger indexation et panne dans le diagnostic initial                                     |

**Justification d'une URL distincte :** aucune page existante ne répond à la
décision immédiate « mon site vient de tomber, que puis-je vérifier sans
aggraver, qui dois-je appeler et comment accepter la remise en service ? ».

### Limites à rappeler dans la page

- **Panne :** la page ou la fonction ne répond plus, affiche une erreur ou
  renvoie un contenu vide. Cela ne prouve pas la cause.
- **Lenteur :** le contenu finit par apparaître, mais le délai gêne l'usage. Ce
  diagnostic appartient au guide de performance.
- **Incident cyber possible :** contenu modifié sans autorisation, redirection
  inconnue, alerte de sécurité, accès administrateur anormal ou autre signal
  cohérent. Le lecteur arrête alors le dépannage de routine et appelle une
  compétence adaptée.
- **Panne partielle :** l'accueil fonctionne, mais le formulaire, le paiement,
  la connexion, la prise de rendez-vous ou les e-mails automatiques échouent.
  Pour l'entreprise, il s'agit bien d'un incident à documenter.

## 3. Demande et vocabulaire du lecteur

### Observation qualitative de la SERP

Quatre recherches françaises ont été consultées le 22 juillet 2026 :

- `site internet en panne que faire` ;
- `mon site internet ne fonctionne plus que faire` ;
- `site web inaccessible diagnostic panne propriétaire entreprise` ;
- `site indisponible communication clients 503`.

Les résultats observés se répartissent principalement entre :

1. des outils qui vérifient si une URL répond pour tout le monde ;
2. des centres d'aide propres à un hébergeur ou à un constructeur de sites ;
3. des guides techniques listant codes d'erreur, extensions, cache, serveur et
   DNS ;
4. des pages commerciales de dépannage promettant parfois un diagnostic ou
   une intervention dans un délai propre au prestataire ;
5. des fiches cyber sur la défiguration ou l'intrusion.

Cette observation ne mesure ni volume, ni difficulté SEO, ni qualité des
prestataires. Elle sert seulement à documenter les formulations et à éviter un
nouveau guide générique de dépannage technique.

### Questions et formulations retenues

- « Est-ce que le site est en panne pour tout le monde ou seulement chez moi ? »
- « Pourquoi mon site affiche une erreur 500, 502 ou 503 ? »
- « Mon site est tombé après une mise à jour : que faire ? »
- « Qui appeler : l'hébergeur, le développeur ou la personne qui gère le nom de
  domaine ? »
- « Dois-je remettre la dernière sauvegarde ? »
- « Comment prévenir les clients pendant une panne ? »
- « Une panne peut-elle faire perdre mon référencement ? »
- « Comment savoir si le site a été piraté ? »

### Vocabulaire naturel à couvrir

`site en panne`, `site HS`, `site inaccessible`, `page blanche`, `erreur 500`,
`erreur 502`, `erreur 503`, `connexion non sécurisée`, `certificat`, `nom de
domaine`, `hébergement`, `site piraté`, `redirection inconnue`, `formulaire ne
fonctionne plus`, `paiement bloqué`, `restaurer une sauvegarde`, `prévenir les
clients`, `maintenance site internet`.

Les codes d'erreur doivent apparaître comme exemples visibles que le lecteur
peut recopier, pas comme un cours sur le protocole HTTP. Le terme DNS ne doit
être introduit qu'au moment d'expliquer que le nom saisi par un client doit
pointer vers le bon service.

## 4. Carte concurrentielle qualitative

| Page observée                                                                                                                                             | Réponse et angle                                            | Bon point                                                                        | Manque décisionnel pour notre lecteur                                                                           | Conflit d'intérêt ou limite                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- | -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| [Siteenpanne.fr — vérification d'URL](https://siteenpanne.fr/)                                                                                            | Indique si une URL semble répondre depuis un autre point    | Aide à distinguer un problème local d'une indisponibilité plus large             | Ne décrit ni impact métier, ni interlocuteur, ni communication, ni reprise                                      | Outil tiers ; une réponse ponctuelle n'explique pas la cause et ne constitue pas une preuve de sécurité |
| [Squarespace — Mon site est-il en panne ?](https://support.squarespace.com/hc/fr-fr/articles/223738767-Mon-site-est-il-en-panne)                          | Diagnostic adapté à sa plateforme et à sa page de statut    | Oriente vers le fournisseur lorsque l'incident est généralisé                    | Ne couvre pas les sites sur d'autres plateformes et ne produit pas de journal pour l'entreprise                 | Support d'un fournisseur pour ses propres clients                                                       |
| [OVHcloud — Que faire si mon site est inaccessible ?](https://docs.ovhcloud.com/fr/guides/web-cloud/web-hosting/diagnostic-website-not-accessible)        | Étapes techniques pour un hébergement de la marque          | Montre que la réponse dépend de l'infrastructure réelle                          | Trop spécifique pour un dirigeant qui ne sait pas encore qui héberge le site ; peu de communication client      | Documentation d'un fournisseur ; la route exacte devra être revérifiée à P3 si citée publiquement       |
| [SiteBug — Dépannage site web](https://sitebug.fr/blog/depannage-site-web)                                                                                | Classe symptômes, causes supposées et actions de correction | Répond au besoin d'urgence et nomme des symptômes observables                    | Certaines actions sont techniques ou WordPress ; la cause probable peut être prise trop vite pour un diagnostic | Page d'une offre de dépannage ; délais et statistiques propres au prestataire, non réutilisables        |
| [Seahawk — Site web hors service](https://seahawkmedia.com/fr/technologie/site-web-hors-service/)                                                         | Vérification puis longue liste de causes et outils          | Rappelle qu'un problème peut être local                                          | Peu de hiérarchie entre observation sûre, modification technique et branche cyber                               | Page éditoriale commerciale ; aucune généralisation de ses recommandations                              |
| [Cybermalveillance.gouv.fr — Défiguration de site](https://www.cybermalveillance.gouv.fr/tous-nos-contenus/fiches-reflexes/defiguration-de-site-internet) | Réponse lorsqu'un contenu a été modifié par un attaquant    | Source publique claire pour identifier la branche cyber et l'escalade compétente | Ne répond pas à la majorité des pannes ordinaires                                                               | Certaines consignes sont techniques : le futur guide n'en fera pas un tutoriel amateur                  |

**Angle mort commun :** les pages expliquent souvent comment chercher une cause
ou vendre une réparation, mais rarement comment un dirigeant conserve des faits,
organise son activité, communique sans mentir, choisit le bon intervenant et
contrôle la reprise.

**Valeur originale du guide :** une fiche réflexe chronologique
`15 minutes / 1 heure / 1 jour`, complétée par un journal d'incident copiable,
une frontière cyber sûre et une validation de remise en service centrée sur le
parcours du client.

## 5. Fiche de preuves

| Affirmation utilisable                                                                                                                                                                                                                                                          | Source primaire, URL et passage utile                                                                                                                                                                                                                               | Nature et périmètre                                                                                                        | Date/consultation                                                                        | Confiance | Emplacement visible prévu                                | Conséquence lecteur                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | --------- | -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| La continuité vise à maintenir l'activité, éventuellement de manière dégradée, tandis que la reprise rassemble les actions nécessaires au redémarrage d'un système arrêté                                                                                                       | [CNIL — Sécurité : prévoir la continuité et la reprise d'activité](https://www.cnil.fr/fr/securite-prevoir-la-continuite-et-la-reprise-dactivite), définitions d'ouverture                                                                                          | Recommandation de sécurité appliquée aux traitements de données ; pas un SLA commercial                                    | Page publiée le 14 mars 2024, consultée le 22 juillet 2026                               | Élevée    | Section première heure, près du canal de secours         | Le dirigeant peut maintenir un téléphone ou une adresse de contact sans prétendre que le site fonctionne                                                                             |
| Même un plan sommaire doit désigner les intervenants ; utilisateurs, fournisseurs et sous-traitants doivent savoir qui alerter                                                                                                                                                  | [CNIL — Continuité et reprise](https://www.cnil.fr/fr/securite-prevoir-la-continuite-et-la-reprise-dactivite), recommandations sur les plans et alertes                                                                                                             | Principe d'organisation, à adapter aux contrats et rôles réels                                                             | 14 mars 2024 / 22 juillet 2026                                                           | Élevée    | Journal et première heure                                | Nommer un responsable entreprise, puis l'hébergeur, le mainteneur, le registrar ou le spécialiste compétent                                                                          |
| Les plans, sauvegardes et procédures de restauration doivent être testés régulièrement ; un fonctionnement dégradé ne doit pas réduire sans contrôle la sécurité des données                                                                                                    | [CNIL — Continuité et reprise](https://www.cnil.fr/fr/securite-prevoir-la-continuite-et-la-reprise-dactivite), sections tests et fonctionnement dégradé                                                                                                             | Recommandation générale de sécurité ; la fréquence dépend du risque                                                        | 14 mars 2024 / 22 juillet 2026                                                           | Élevée    | Première journée et revue post-incident                  | Ne pas accepter « une sauvegarde existe » comme preuve de reprise et ne pas ouvrir un canal de secours non sécurisé                                                                  |
| Les copies doivent être réalisées et testées ; leur intégrité et la capacité de restauration doivent être vérifiées                                                                                                                                                             | [CNIL — Sécurité : sauvegarder](https://www.cnil.fr/fr/securite-sauvegarder), recommandations de sauvegarde et restauration                                                                                                                                         | Précautions de sécurité ; ne définit pas une fréquence universelle                                                         | Page publiée le 14 mars 2024, consultée le 22 juillet 2026                               | Élevée    | Section restauration                                     | Demander au prestataire compétent de restaurer d'abord dans un environnement contrôlé lorsque cela est nécessaire et possible, puis de vérifier avant production                     |
| Au moins une sauvegarde devrait être géographiquement séparée et une copie isolée hors ligne, avec un niveau de protection cohérent avec les données                                                                                                                            | [CNIL — Sécurité : sauvegarder](https://www.cnil.fr/fr/securite-sauvegarder), recommandations de stockage                                                                                                                                                           | Mesure de prévention, pas une instruction à improviser pendant l'incident                                                  | 14 mars 2024 / 22 juillet 2026                                                           | Élevée    | Revue du lendemain                                       | Poser la question au prestataire après l'incident ; ne pas promettre qu'une copie particulière est saine                                                                             |
| Une stratégie de restauration doit être liée au plan de reprise, testée régulièrement et adaptée aux scénarios plausibles ; des sauvegardes hors ligne sont recommandées                                                                                                        | [ANSSI — Les essentiels : sauvegarde des systèmes d'information, v1.1](https://messervices.cyber.gouv.fr/guides/sauvegarde-des-systemes-dinformation) et [PDF officiel](https://messervices.cyber.gouv.fr/documents-guides/anssi_essentiels_sauvegarde-si_v1.1.pdf) | Recommandations de cybersécurité ; ne prouvent pas que la dernière copie est saine                                         | Version 1.1 datée 12/2023, pages consultées le 22 juillet 2026                           | Élevée    | Restauration et branche cyber                            | En cas de suspicion de compromission, une personne compétente doit choisir une source de confiance et contrôler ce qui est restauré                                                  |
| Lorsqu'une compromission est possible, il faut qualifier le signal et le périmètre, synthétiser le connu et l'inconnu, protéger les traces et mobiliser les équipes ou prestataires adaptés                                                                                     | [CERT-FR — Les bons réflexes en cas d'intrusion sur un système d'information](https://cert.ssi.gouv.fr/les-bons-reflexes-en-cas-dintrusion-sur-un-systeme-dinformation/)                                                                                            | Guide de réponse à incident ; ses actions techniques ne sont pas transposées en tutoriel pour dirigeant                    | Page officielle consultée le 22 juillet 2026                                             | Élevée    | Branche cyber                                            | Le lecteur arrête les changements aléatoires, conserve ses observations et contacte un répondant qualifié                                                                            |
| Une défiguration est une modification visible non autorisée du site et peut révéler que l'attaquant a obtenu des droits de modification ; la fiche recommande de préserver les éléments utiles et de contacter hébergeur et professionnels qualifiés                            | [Cybermalveillance.gouv.fr — Défiguration de site Internet, que faire ?](https://www.cybermalveillance.gouv.fr/tous-nos-contenus/fiches-reflexes/defiguration-de-site-internet)                                                                                     | Fiche d'assistance cyber ; ne permet pas de conclure qu'une panne ordinaire est une attaque                                | Publiée le 21 janvier 2020, mise à jour le 10 juillet 2026, consultée le 22 juillet 2026 | Élevée    | Encadré « contenu ou redirection inconnue »              | Un contenu changé sans autorisation déclenche l'escalade cyber ; une erreur 502 isolée ne suffit pas                                                                                 |
| Une panne du site n'est pas automatiquement une violation ; l'indisponibilité de données personnelles peut en revanche constituer une perte de disponibilité, au même titre que leur perte, altération, divulgation ou accès non autorisé                                       | [CNIL — Notifier une violation de données personnelles](https://www.cnil.fr/fr/services-en-ligne/notifier-une-violation-de-donnees-personnelles)                                                                                                                    | Définition réglementaire générale ; toute situation concrète peut exiger un avis compétent                                 | Page publiée le 24 mai 2018, consultée le 22 juillet 2026                                | Élevée    | FAQ données personnelles                                 | Ne pas conclure à partir de la seule panne du site ; transmettre immédiatement les faits si des dossiers ou autres données personnelles sont indisponibles ou possiblement compromis |
| L'organisation doit prévoir des procédures d'alerte, analyser les éléments disponibles, déterminer si l'incident devient une violation, évaluer le risque et documenter les violations ; une notification à la CNIL sous 72 heures concerne les violations présentant un risque | [CNIL — Sécurité : gérer les incidents et les violations](https://www.cnil.fr/fr/securite-gerer-les-incidents-et-les-violations)                                                                                                                                    | Règles et recommandations relatives aux données personnelles ; le délai part d'une violation concernée, pas de toute panne | Page publiée le 14 mars 2024, consultée le 22 juillet 2026                               | Élevée    | Branche cyber et FAQ                                     | Escalader rapidement au responsable compétent sans transformer le guide en conseil juridique ni attendre une certitude totale pour commencer l'analyse                               |
| Pour une interruption temporaire, Google recommande si possible de garder le site accessible avec des fonctions limitées ; la fermeture complète est une mesure extrême et la récupération de visibilité peut prendre un temps indéterminé                                      | [Google Search Central — Mettre en pause ou désactiver temporairement un site Web](https://developers.google.com/search/docs/crawling-indexing/pause-online-business?hl=fr)                                                                                         | Recommandation du moteur pour la recherche ; la sécurité et la réalité technique restent prioritaires                      | Mise à jour indiquée le 31 décembre 2025, consultée le 22 juillet 2026                   | Élevée    | Communication et FAQ SEO                                 | Préférer un message ou service limité lorsqu'il est sûr ; ne pas supprimer les URL ni demander `noindex` par réflexe                                                                 |
| Un prestataire technique peut utiliser une réponse temporaire 503 avec une indication de réessai lors d'une fermeture complète de courte durée                                                                                                                                  | [Google Search Central — même page](https://developers.google.com/search/docs/crawling-indexing/pause-online-business?hl=fr), section fermeture complète                                                                                                            | Conseil technique pour le prestataire ; aucune garantie de conservation des positions                                      | 31 décembre 2025 / 22 juillet 2026                                                       | Élevée    | Note technique brève, jamais dans la checklist dirigeant | Demander au prestataire une réponse temporaire correcte plutôt que modifier soi-même le serveur ; une suspicion cyber peut imposer une autre priorité                                |
| Le DNS associe un nom de domaine aux ressources nécessaires pour atteindre un service ; le registrar gère le domaine pour les extensions concernées par l'Afnic                                                                                                                 | [Afnic — Lexique](https://www.afnic.fr/lexique/) et [Gérer son nom de domaine](https://www.afnic.fr/noms-de-domaine/tout-savoir/gerer-son-nom-de-domaine/)                                                                                                          | Explication valable pour les domaines gérés dans le périmètre Afnic ; tous les domaines ne relèvent pas de l'Afnic         | Pages consultées le 22 juillet 2026                                                      | Élevée    | « Qui appeler ? »                                        | Distinguer site, hébergement, domaine et messagerie ; faire vérifier la zone par le registrar ou l'opérateur compétent, sans changer des entrées au hasard                           |

### Faits, déductions, recommandations et exemples

- **Fait vérifié :** la CNIL distingue continuité de l'activité et reprise d'un
  système arrêté.
- **Fait vérifié :** CNIL et ANSSI demandent de tester la restauration ;
  l'existence déclarée d'une sauvegarde ne prouve pas qu'elle fonctionne.
- **Fait vérifié :** la CNIL ne réduit pas toute panne à une violation de
  données personnelles. La nature des données touchées et le risque pour les
  personnes doivent être analysés.
- **Fait vérifié :** Google déconseille de fermer entièrement un site pour une
  simple pause lorsqu'une version limitée peut rester accessible. Cette
  recommandation SEO ne prime jamais sur une mesure de sécurité nécessaire.
- **Fait vérifié :** l'Afnic décrit le DNS comme le mécanisme reliant un nom de
  domaine aux ressources techniques. Un problème de domaine ou de zone peut
  donc rendre le site inaccessible sans que le code du site soit la cause.
- **Déduction éditoriale :** un dirigeant aide davantage le diagnostic en
  transmettant un journal factuel qu'en essayant plusieurs corrections
  techniques successives.
- **Déduction éditoriale :** une page d'accueil revenue ne suffit pas à
  démontrer que le formulaire, le paiement, la connexion et les notifications
  nécessaires à l'activité fonctionnent.
- **Recommandation Hagnéré Code :** utiliser les repères quinze minutes, une
  heure et une journée comme ordre de décision, jamais comme promesse de
  résolution.
- **Recommandation Hagnéré Code :** si une attaque est possible, arrêter le
  dépannage ordinaire, ne pas effacer les journaux ni restaurer au hasard et
  transmettre la décision technique à un intervenant compétent.
- **Recommandation Hagnéré Code :** tenir l'information client séparée du
  diagnostic interne : dire ce qui ne fonctionne pas et quelle alternative
  existe, sans affirmer une cause ou une absence de fuite non démontrée.
- **Exemple fictif :** le scénario du cabinet de diagnostics immobiliers est
  construit pour expliquer la méthode ; il ne décrit aucun client ni niveau de
  service réel.

### Contradictions et données à ne pas publier

- aucune liste de « causes les plus fréquentes » sans corpus daté et
  représentatif ;
- aucun pourcentage moyen de pannes, d'attaques, de perte de chiffre d'affaires
  ou d'abandon client ;
- aucun délai universel de diagnostic, d'intervention, de propagation DNS ou
  de retour à la normale ;
- aucune promesse que le site sera réparé en quinze minutes, une heure ou un
  jour ;
- aucune affirmation qu'une erreur 500, 502 ou 503 désigne à elle seule une
  cause précise ;
- aucune équivalence entre page indisponible, intrusion et violation de données
  personnelles ;
- aucune formule « la dernière sauvegarde est la meilleure » : elle peut
  contenir le défaut ou une compromission ;
- aucune promesse qu'une réponse 503 conservera les positions Google ;
- aucune consigne de supprimer les URL, ajouter `noindex`, bloquer les robots
  ou modifier le DNS uniquement pour une panne temporaire ;
- aucune procédure demandant au dirigeant de désactiver des extensions, éditer
  un fichier serveur, couper physiquement une machine, nettoyer un malware,
  supprimer les journaux, écraser la production ou réinitialiser tous les accès
  sans coordination ;
- aucun message client affirmant « aucune donnée n'a été touchée » avant une
  analyse capable de le prouver ;
- aucun « notre équipe a été alertée » si aucune personne n'est réellement en
  charge ;
- aucun conseil juridique individualisé sur la notification CNIL ;
- aucune présentation de l'Afnic comme gestionnaire de toutes les extensions de
  domaine.

### Calculs reproductibles

Le guide ne doit produire aucun ROI ni estimation de perte sans données réelles
du lecteur. Le seul calcul du cas fictif est une durée observée :

```text
heure de découverte : 08:42
heure d'acceptation de la remise en service : 10:32
durée observée : 10:32 - 08:42 = 1 h 50, soit 110 minutes
contrôle inverse : 08:42 + 110 minutes = 10:32
```

Cette durée ne constitue ni un objectif, ni une moyenne, ni un engagement. Le
nombre de demandes éventuellement perdues reste **inconnu** dans le scénario.

## 6. Scénario illustratif fictif

Le guide suivra un cabinet fictif de diagnostics immobiliers. Son site présente
les prestations et transmet les demandes de rendez-vous par un formulaire. Le
téléphone et l'adresse électronique professionnelle restent utilisables.

### Chronologie cohérente

- **08:42 :** une collaboratrice voit une erreur 502 sur l'accueil et la page
  de contact. Elle note l'heure, les deux URL et conserve une capture du message.
- **08:47 :** un second test depuis une connexion mobile obtient le même
  résultat. L'incident ne semble donc pas limité au réseau du bureau. Aucune
  redirection inconnue, modification de contenu ou alerte de sécurité n'est
  observée ; cela ne prouve toutefois pas l'absence d'incident cyber.
- **08:55 :** le journal précise que le site et le formulaire sont
  indisponibles, tandis que le téléphone et les e-mails ordinaires fonctionnent.
  La dernière consultation connue comme fonctionnelle date de 18:10 la veille.
- **09:03 :** le mainteneur reçoit un ticket contenant les faits, les URL, les
  captures, les fonctions touchées et la dernière modification connue. Personne
  ne change les extensions, le domaine ou la base de données en parallèle.
- **09:15 :** le cabinet utilise ses canaux habituels pour publier un message
  factuel : le site et le formulaire sont indisponibles, le téléphone et
  l'adresse électronique restent ouverts, une nouvelle information sera donnée
  à 10:00. Cette heure est un rendez-vous d'information, pas une promesse de
  réparation.
- **09:35 :** le mainteneur identifie, dans ce scénario fictif, une version de
  l'application déployée à 08:34 qui ne démarre plus correctement. Aucun signe
  disponible ne justifie une restauration de la base de données.
- **09:48 :** l'ancienne version de l'application est d'abord relancée dans un
  environnement de contrôle. Le mainteneur vérifie l'accueil, une page de
  prestation et l'envoi d'un formulaire avec une adresse de test.
- **10:00 :** le cabinet publie l'information promise : le diagnostic se
  poursuit et le téléphone reste disponible. Il ne publie ni cause définitive
  ni garantie de retour.
- **10:20 :** la version contrôlée répond de nouveau en production. Le cabinet
  n'annonce pas encore le retour à la normale.
- **10:32 :** l'accueil, une page de prestation et la réception d'un formulaire
  de test sont validés ; le responsable métier accepte la remise en service et
  met à jour le message client.
- **16:00 :** le cabinet et le mainteneur consignent la cause retenue, les
  décisions, l'absence de restauration de données, le contrôle effectué et les
  mesures de prévention à étudier.

La durée observée entre la découverte et l'acceptation est de 110 minutes. Le
cas ne chiffre ni chiffre d'affaires perdu, ni demande manquée, car ces données
ne sont pas connues.

### Bifurcation cyber à montrer sans tutoriel dangereux

Si, à 08:47, la collaboratrice avait vu une page inconnue, une redirection vers
un autre domaine, un accès administrateur inattendu ou une alerte cohérente de
sécurité, le scénario aurait changé : arrêt des modifications ordinaires,
conservation des observations, information du responsable interne, contact de
l'hébergeur et d'un professionnel de réponse à incident adapté. Le guide ne lui
demande ni de nettoyer le serveur, ni d'effacer des fichiers, ni de restaurer
elle-même une copie.

## 7. Empreinte éditoriale à ne pas reproduire

| Guide voisin                              | Type d'ouverture                                        | Progression                                       | Dispositif récurrent à éviter                         | Différence retenue                                                                |
| ----------------------------------------- | ------------------------------------------------------- | ------------------------------------------------- | ----------------------------------------------------- | --------------------------------------------------------------------------------- |
| `pourquoi-mon-site-est-lent`              | Le lecteur constate un site qui charge mal              | Mesure de performance puis options d'amélioration | Scores techniques et comparaison optimisation/refonte | Ici, une horloge d'incident et des décisions de continuité                        |
| `reprendre-maintenance-site-autre-agence` | L'entreprise veut changer d'interlocuteur               | Accès, code, données, sauvegardes, passation      | Inventaire de reprise du prestataire                  | Ici, un journal factuel court avant toute question de passation                   |
| `cout-maintenance-site-internet`          | Le lecteur évalue une dépense récurrente                | Niveaux de service, inclusions et coûts           | Comparaison contractuelle et budgétaire               | Ici, aucun prix ni forfait ; la priorité est le retour sûr                        |
| `contrat-tma-application`                 | Le lecteur prépare un contrat avant les incidents       | Clauses, responsabilités, délais et sortie        | Lecture clause par clause                             | Ici, l'incident existe déjà et aucun SLA n'est supposé                            |
| `site-wordpress-pirate-que-faire`         | Le lecteur soupçonne ou constate un compromis WordPress | Preuves, portée, nettoyage et sécurisation        | Procédure cyber spécialisée                           | Ici, la branche cyber est une sortie du dépannage ordinaire, pas le cœur du guide |

### Choix éditorial du nouveau guide

```text
Tension motrice : chaque minute semble pousser le dirigeant à agir, alors que
les modifications non coordonnées peuvent prolonger la panne ou détruire des
indices.

Type d'ouverture : une scène immédiate avec formulaire, commande ou prise de
rendez-vous bloquée, puis trois actions simples. Le lecteur reconnaît sa
situation avant tout vocabulaire technique.

Progression : 15 minutes / 1 heure / 1 jour, puis lendemain. Ces temps
ordonnent les responsabilités et ne promettent jamais une réparation.

Artefact signature : journal d'incident dirigeant à copier, complété par une
fiche de validation des parcours clients.

Rythme et registre : phrases courtes, verbes concrets, ton calme et direct.
Aucune dramatisation, aucune posture de sauveteur technique.

Place naturelle du CTA : après que le lecteur a complété le journal, compris
la branche cyber et identifié les parcours touchés.

Forme de conclusion : le site n'est pas « revenu » parce que l'accueil s'ouvre ;
il est accepté lorsque les actions essentielles des clients et de l'équipe ont
été contrôlées et que le journal est clos.

Différences avec les guides voisins : horloge d'incident, message client
factuel, séparation panne/lenteur/cyber, refus d'une restauration non testée et
acceptation métier de la remise en service.
```

## 8. Plan annoté

| Section provisoire                                                    | Question résolue                                               | Preuve ou exemple                                                         | Conséquence ou décision                                             | Format choisi                                    |
| --------------------------------------------------------------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------ |
| Votre site ne répond plus : commencez ici                             | Que faire avant toute modification ?                           | Trois faits à noter et test sur une seconde connexion                     | Le lecteur produit une description fiable                           | Ouverture en situation et liste de trois actions |
| Panne, lenteur ou incident de sécurité : ne suivez pas le même chemin | Quelle catégorie correspond au symptôme ?                      | Définitions et signaux observables, sans cause automatique                | Renvoyer la lenteur ; escalader une suspicion cyber                 | Trois cartes courtes, pas de tableau large       |
| Dans les quinze premières minutes, notez avant de modifier            | Quelles vérifications sont sûres ?                             | URL, heure, capture, autre réseau, fonctions métier                       | Construire le journal sans effacer d'indice                         | Chronologie ordonnée                             |
| Le journal d'incident à transmettre                                   | Quelles informations font gagner du temps au bon intervenant ? | Modèle complet et exemple rempli                                          | Le lecteur envoie un ticket exploitable                             | Fiche copiable dans la page                      |
| Dans la première heure, appelez la bonne personne                     | Hébergeur, mainteneur, registrar ou spécialiste cyber ?        | Rôles CNIL et définition DNS Afnic                                        | Un seul responsable coordonne les actions                           | Cartes par symptôme et interlocuteur             |
| Informez les clients sans inventer la cause                           | Que dire tant que le diagnostic est incomplet ?                | Modèle de message avec canal de secours et heure de prochaine information | Préserver la confiance sans fausse promesse                         | Avant/après de message                           |
| Si une attaque est possible, arrêtez le dépannage ordinaire           | Quels signes changent la réponse ?                             | CERT-FR et Cybermalveillance                                              | Conserver les faits et obtenir une compétence adaptée               | Encadré de sécurité très visible                 |
| Dans la journée, ne restaurez qu'une version réellement contrôlée     | Une sauvegarde déclarée suffit-elle ?                          | CNIL et ANSSI sur tests et sources de confiance                           | Tester avant production et ne pas écraser des données sans besoin   | Séquence décisionnelle courte                    |
| Avant d'annoncer le retour, testez le travail de vos clients          | Que signifie « rétabli » ?                                     | Accueil, service, formulaire/paiement, connexion, e-mails                 | Une personne métier accepte la reprise                              | Checklist par type de site                       |
| Exemple fictif : de 08:42 à 10:32                                     | Comment appliquer la méthode sans promettre un délai ?         | Chronologie cohérente de 110 minutes                                      | Montrer la différence entre réponse technique et acceptation métier | Timeline verticale                               |
| Le lendemain, évitez de découvrir la prochaine panne par un client    | Que conserver et améliorer ?                                   | Journal, alertes, contacts, restauration testée, responsabilités          | Prévention proportionnée et contrat seulement si utile              | Revue en six questions                           |
| Questions fréquentes                                                  | Réponses courtes aux objections                                | Sources placées près des réponses sensibles                               | Lever les derniers freins sans répéter le guide                     | FAQ concise                                      |

### Règles de rédaction P2

- chaque H2 doit être compréhensible isolément et annoncer une décision ;
- aucune section ne commence par un sigle ou un code d'erreur ;
- les cartes doivent rester entièrement lisibles à 390 px ;
- la progression temporelle doit être verticale sur mobile ;
- les consignes cyber doivent rester au niveau décisionnel et d'escalade ;
- les liens officiels doivent apparaître près de l'affirmation soutenue ;
- aucune liste de vingt causes possibles avant la première action ;
- aucun CTA avant le journal, la communication et la frontière cyber ;
- le scénario doit rester explicitement fictif à chaque reprise de ses chiffres ;
- le lecteur doit pouvoir conclure que son hébergeur, son mainteneur actuel ou
  un spécialiste cyber est le meilleur interlocuteur.

## 9. Journal d'incident à livrer dans le guide

Le journal doit être visible et copiable dans l'article. Aucun téléchargement
n'est nécessaire pour rendre l'action autonome.

### Champs indispensables

Avant les dix-huit champs complets, la page doit afficher un **ticket express**
de six éléments : heure, URL, message exact, fonctions touchées, second réseau
essayé et dernier changement connu.

1. date, heure et fuseau de découverte ;
2. nom et moyen de joindre la personne qui a constaté le problème ;
3. adresse exacte de la page ou de la fonction ;
4. symptôme ou message affiché, recopié sans interprétation ;
5. capture d'écran sans donnée personnelle inutile ;
6. dernière heure connue où le parcours fonctionnait ;
7. appareil, navigateur, réseau et seconde connexion essayés ;
8. pages et fonctions touchées : contact, rendez-vous, panier, paiement,
   connexion, téléchargement ou administration ;
9. ce qui fonctionne encore : téléphone, e-mail, boutique physique, espace
   client ou autre canal ;
10. changement connu avant l'incident : déploiement, mise à jour, domaine,
    certificat ou intervention du fournisseur ;
11. état public connu de l'hébergeur, du domaine ou d'un service tiers ;
12. faits connus, points encore inconnus et signes cyber éventuels ;
13. personnes contactées, heure, référence du ticket et réponse obtenue ;
14. décision prise, responsable de l'action et résultat observé ;
15. message donné aux clients et heure annoncée de la prochaine information ;
16. question sur les données personnelles, transmise au responsable compétent
    si nécessaire ;
17. version ou source choisie pour la reprise et preuve de son contrôle ;
18. parcours testés après remise en service, personne ayant accepté et heure de
    clôture.

### Données à ne jamais demander dans le journal public ou le formulaire CTA

- mot de passe, clé d'accès, jeton, copie de base de données ou secret API ;
- donnée personnelle de client non nécessaire au diagnostic ;
- archive complète du site envoyée sans canal adapté ;
- conclusion de sécurité non démontrée ;
- manipulation déjà tentée dissimulée au prestataire.

### Exemple minimal de ticket

```text
Découverte : 22/07/2026 à 08:42, Europe/Paris
URL : https://exemple.fr/contact
Message exact : 502 Bad Gateway
Vérifications : même résultat sur Wi-Fi du bureau et connexion mobile
Impact connu : accueil et formulaire indisponibles ; téléphone et e-mail actifs
Dernier fonctionnement connu : 21/07/2026 à 18:10
Dernier changement connu : déploiement signalé à 08:34, à confirmer
Signe cyber observé : aucun signe visible ; absence de compromission non prouvée
Action déjà faite : aucune modification technique
Contact entreprise : [nom et téléphone]
```

## 10. Communication client

### Modèle factuel pendant l'incident

> Notre site et le formulaire de demande sont momentanément indisponibles. Vous
> pouvez nous joindre au [téléphone] ou à [adresse]. Nous publierons une nouvelle
> information à [heure de mise à jour].

L'heure annoncée est celle de la prochaine information, pas celle d'un retour
garanti. Le message doit seulement citer un canal réellement surveillé.

### Message après contrôle

> Le site et le formulaire sont de nouveau disponibles depuis [heure]. Nous
> avons vérifié l'envoi et la réception d'une demande de test. Si votre demande
> envoyée entre [période réellement connue] n'a pas reçu de confirmation,
> contactez-nous par [canal].

La période ne doit être indiquée que si le journal permet de la délimiter. Le
message n'affirme pas que les données sont intactes ou qu'aucun incident de
sécurité n'a eu lieu sans preuve compétente.

### Message à ne pas écrire

> Nous subissons une attaque, mais aucune donnée n'a été touchée. Tout sera
> rétabli dans une heure.

Cette phrase cumule trois affirmations que le premier constat ne permet pas
nécessairement de prouver : la cause, l'effet sur les données et le délai.

## 11. Restauration et acceptation de la remise en service

### Questions avant toute restauration

1. La panne vient-elle réellement du contenu ou des données que la sauvegarde
   remplacerait ?
2. De quelle heure date la copie, et quelles données créées après cette heure
   pourraient disparaître ?
3. La copie a-t-elle déjà été restaurée et contrôlée dans un environnement
   séparé ?
4. En cas de suspicion cyber, qui a vérifié que la source choisie est digne de
   confiance ?
5. Qui autorise le retour en production et qui peut l'arrêter ?
6. Quelles actions clients seront refaites immédiatement après la reprise ?

### Contrôle métier avant le mot « rétabli »

Selon le site, choisir les fonctions réellement présentes :

- accueil et page de service ou de produit principale ;
- formulaire envoyé avec une adresse de test puis reçu par l'équipe ;
- prise de rendez-vous avec créneau de test annulé proprement ;
- panier, paiement en environnement de test ou opération autorisée par le
  prestataire, puis confirmation ;
- connexion d'un compte de test et accès aux seules informations prévues ;
- e-mail de confirmation, facture ou notification nécessaire ;
- affichage sur téléphone et ordinateur ;
- mesure, consentement ou autre fonction réglementaire seulement si elle fait
  partie du parcours réellement utilisé.

La page d'accueil peut répondre alors que le formulaire ou le paiement reste
en panne. La personne métier nommée accepte la remise en service après les tests
pertinents ; le développeur ne doit pas déclarer seul que l'activité est
rétablie parce que le serveur répond.

## 12. Ressource, conversion et maillage

```text
Une ressource est-elle naturellement nécessaire ? Oui, mais intégrée à la page.

Problème résolu après lecture : donner au bon intervenant des informations
exploitables et éviter les corrections contradictoires.

Résultat autonome : un journal d'incident complété, un message client factuel
et une liste de parcours à contrôler avant la reprise.

Format : blocs copiables et imprimables dans la page ; pas de fichier externe
obligatoire en P2.

Exemple rempli : cabinet fictif, erreur 502, découverte 08:42 et acceptation
10:32.

Conclusion « ne pas investir » possible : oui. Si l'incident vient d'une panne
générale déjà prise en charge par l'hébergeur, d'un renouvellement de domaine
que le registrar peut corriger ou d'un problème local, une intervention de
développement séparée peut être inutile.

Bon fit Hagnéré Code : diagnostic d'un site ou d'une application web, reprise
d'une maintenance insuffisante, correction puis mise en place d'une prévention
proportionnée.

Mauvais fit : compromission active nécessitant un prestataire de réponse à
incident qualifié, litige d'accès, infrastructure critique complexe ou panne de
connexion de l'utilisateur.

Action non commerciale : compléter le journal, contacter le fournisseur déjà
responsable et ouvrir un canal de secours honnête.

CTA principal : « Faire diagnostiquer la panne de mon site » vers
`/demarrer-un-projet`.

Résultat après clic : le prospect transmet l'URL, l'heure, le symptôme, les
fonctions touchées, les vérifications et les interlocuteurs déjà contactés ;
Hagnéré Code indique si la demande relève d'une intervention web possible,
de l'hébergeur, du registrar ou d'une escalade cyber. Aucun délai de réponse ou
de résolution n'est inventé dans le guide.
```

### Maillage sortant prévu

- `pourquoi-mon-site-est-lent`, avec l'ancre « votre site charge encore mais
  trop lentement » ;
- `site-wordpress-pirate-que-faire`, avec l'ancre « le contenu ou les accès ont
  changé sans autorisation » ;
- `reprendre-maintenance-site-autre-agence`, avec l'ancre « personne ne sait
  plus qui possède les accès » ;
- `cout-maintenance-site-internet`, dans la revue du lendemain et sans
  transformer le contrat en obligation ;
- `contrat-tma-application`, pour formaliser les responsabilités et délais
  adaptés après l'incident ;
- `/services/maintenance-evolution`, route transactionnelle constatée le
  22 juillet 2026 et à revérifier avant P2 ;
- `/demarrer-un-projet` pour le CTA unique.

### Maillage entrant prévu

- depuis le guide du coût de maintenance, sur la conduite d'une panne réelle ;
- depuis la reprise de maintenance, lorsque le changement de prestataire est
  déclenché par une indisponibilité ;
- depuis la page service maintenance si un bloc éditorial pertinent existe,
  sans ajouter de lien artificiel au-dessus de l'offre.

## 13. FAQ préparée

### Comment savoir si mon site est en panne pour tout le monde ?

Essayez l'URL exacte depuis une seconde connexion, par exemple le réseau mobile,
et vérifiez l'état public de votre hébergeur. Un outil externe peut apporter un
indice, mais une seule mesure ne prouve ni la cause ni l'absence d'incident.

### Mon site est très lent : dois-je suivre cette procédure ?

Non si les pages finissent par charger et que les fonctions restent
disponibles. Notez les symptômes puis utilisez le guide consacré à la lenteur ;
si un formulaire, un paiement ou une connexion ne répond plus, traitez cette
fonction comme un incident partiel.

### Dois-je redémarrer, désactiver une extension ou changer le DNS ?

Pas au hasard. Notez d'abord les faits et laissez l'intervenant responsable
coordonner les modifications, surtout si un contenu ou un accès a changé sans
autorisation.

### Puis-je restaurer la dernière sauvegarde immédiatement ?

Non sans savoir ce qu'elle remplacerait et sans preuve qu'elle peut être
restaurée. La dernière copie peut contenir le même défaut ou, en cas d'attaque,
un élément compromis.

### Faut-il afficher une page de maintenance ?

Seulement si le prestataire peut le faire sans masquer un incident utile ni
affaiblir la sécurité. Le message indique ce qui est indisponible et le canal
alternatif ; il ne promet pas une heure de retour.

### Une panne va-t-elle faire disparaître mon site de Google ?

Une interruption temporaire ne justifie pas de supprimer les pages ou de les
passer en `noindex`. Google recommande, lorsque c'est techniquement sûr, de
conserver un service limité et prévoit des réponses temporaires pour une courte
fermeture, sans garantir le maintien des positions. La sécurité prime en cas de
compromission possible.

### Quand faut-il notifier la CNIL ?

Une panne du site n'est pas, à elle seule, une violation de données
personnelles. En revanche, si l'incident rend des données personnelles
indisponibles — par exemple des dossiers clients — ou si elles ont pu être
perdues, altérées, divulguées ou consultées sans autorisation, transmettez
immédiatement les faits à la personne compétente dans votre entreprise. Elle
devra qualifier la situation, évaluer le risque et déterminer les obligations
applicables ; le guide ne remplace pas cet avis.

### Qui gère le nom de domaine et le DNS ?

Le registrar, c'est-à-dire l'entreprise auprès de laquelle le nom de domaine
est enregistré, gère ce domaine. L'hébergement et le service DNS peuvent
relever du même fournisseur ou d'acteurs différents. Le journal doit indiquer
les prestataires connus ; le lecteur ne modifie pas les entrées sans
coordination. L'Afnic documente directement les extensions qu'elle opère, pas
l'ensemble des noms de domaine.

### Quand peut-on considérer le site comme rétabli ?

Lorsque les parcours essentiels ont été testés de bout en bout et acceptés par
une personne qui connaît le métier. Voir seulement l'accueil ne suffit pas si
le formulaire, le paiement ou l'espace client reste indisponible.

### Que faire si le prestataire habituel ne répond pas ?

Réunissez le journal, identifiez l'hébergeur et le registrar dans les contrats
ou factures disponibles, puis sollicitez un mainteneur compétent. Une suspicion
de compromission ou un système critique exige une escalade spécialisée plutôt
qu'une série d'essais non coordonnés.

## 14. Porte de sortie P1

- [x] lecteur, phrase réelle, situation et décision unique définis ;
- [x] score de lancement supérieur à 70 documenté sans volume inventé ;
- [x] intention distincte des guides lenteur, maintenance, TMA, reprise et
      piratage ;
- [x] SERP française qualitative consultée et limites explicites ;
- [x] sources primaires vérifiées sur continuité, sauvegarde, intrusion,
      défiguration, données personnelles, fermeture temporaire et DNS ;
- [x] faits, déductions, recommandations et exemple séparés ;
- [x] aucune procédure cyber dangereuse ni restauration aveugle ;
- [x] aucun SLA, délai de réparation, impact SEO ou perte commerciale inventé ;
- [x] scénario fictif cohérent, durée recalculée et inconnues conservées ;
- [x] plan distinct, journal d'incident, communication et contrôle de reprise ;
- [x] action autonome, bon fit, mauvais fit, CTA et maillage définis ;
- [x] manifeste P1 prévu et hash à valider après la présente rédaction.

## 15. Rapport de sortie P1

```text
PASSE 1 TERMINÉE
Slug : site-internet-en-panne-que-faire

Lecteur et phrase réelle : dirigeant ou indépendant dont le site ou une
fonction commerciale vient de tomber ; « qu'est-ce que je fais maintenant,
qui dois-je appeler et que dire aux clients ? ».

Décision : observer sans aggraver, choisir l'intervenant compétent, maintenir
un canal de secours, escalader si un incident cyber est possible et n'accepter
la reprise qu'après les tests métier.

Angle et forme dominante : chronologie 15 minutes / 1 heure / 1 jour, journal
d'incident copiable, message client et contrôle de remise en service.

Pages proches et différence : la lenteur reste au guide performance ; le
piratage WordPress possède la remédiation cyber ; la reprise d'agence possède
la passation ; maintenance et TMA possèdent prix, contrat et SLA. Ce guide
possède la première réponse à une indisponibilité en cours.

Sources décisives : CNIL continuité, sauvegarde, incidents et violations ;
ANSSI sauvegarde ; CERT-FR intrusion ; Cybermalveillance défiguration ; Google
Search Central fermeture temporaire ; Afnic DNS, toutes vérifiées le 22 juillet
2026.

Incertitudes exclues : cause déduite d'un code d'erreur, délai universel,
propagation DNS fixe, sauvegarde réputée saine, violation CNIL automatique,
garantie SEO, perte de revenus et procédure cyber amateur.

Action autonome et CTA possible : compléter le journal et le message client ;
CTA de diagnostic vers /demarrer-un-projet avec orientation possible vers
l'hébergeur, le registrar ou un spécialiste cyber.

Plan : ouverture concrète, distinction panne/lenteur/cyber, quinze premières
minutes, journal, première heure, communication, branche cyber, restauration,
tests métier, scénario fictif, lendemain et FAQ.

Snapshot : manifests/site-internet-en-panne-que-faire-p1.sha256
```

### Contre-audit indépendant de la P1

Le premier verdict était **PASS conditionnel — 18,5/20**, sans P0. La réserve
P1 concernait l'oubli de la perte de disponibilité de données personnelles dans
la définition d'une violation. Le dossier inclut désormais ce cas, sans rendre
le délai de 72 heures applicable à toute panne. Les améliorations P2 retenues
sont le ticket express avant les dix-huit champs, la définition immédiate du
registrar, le cadrage prudent de la recommandation Google et l'étiquette
explicite du scénario fictif. Après corrections : **PASS — 20/20**.

### Rapport P2 — Rédaction et intégration

PASSE 2 TERMINÉE

- **Ouverture :** le dirigeant reconnaît immédiatement un site, un formulaire
  ou une commande bloquée ; les trois premières actions sûres apparaissent
  avant le sommaire.
- **Progression propre au sujet :** panne/lenteur/attaque, ticket express,
  journal, bon interlocuteur, message client, branche cyber et données,
  restauration, tests métier, scénario puis lendemain.
- **Ressource autonome :** ticket de six lignes, journal détaillé, deux modèles
  de message et contrôles de reprise directement copiables dans la page.
- **Exemple :** cabinet entièrement fictif, de 08:42 à 10:32 ;
  `1 h 50 = 110 minutes`, sans moyenne, délai promis ni demande perdue inventée.
- **Sources visibles :** CNIL, ANSSI, CERT-FR, Cybermalveillance, Google et
  Afnic placés près des affirmations sensibles, avec leurs limites.
- **Sécurité :** aucun nettoyage, changement DNS, effacement, restauration ou
  redémarrage improvisé n'est demandé au dirigeant ; l'escalade spécialisée
  remplace le dépannage ordinaire dès qu'une attaque est possible.
- **Conversion :** un seul CTA tardif, gratuit et sans engagement, pouvant
  orienter vers l'hébergeur, le registrar ou un spécialiste cyber ; aucun secret
  ni fichier contenant inutilement des données personnelles n'est demandé.
- **Intégration :** page, image sociale, registre central, icône du hub, date
  éditoriale et lien entrant contextuel depuis le guide de maintenance.
- **Contrôles :** Prettier, ESLint, TypeScript et `git diff --check` réussis ;
  route locale HTTP 200, un H1, dix FAQ, onze H2 éditoriaux et aucun `FAQPage`.
- **Statut :** `ready-for-human-review`, donc route accessible mais
  `noindex, nofollow`, hors hub public, sitemap et `llms.txt`.
- **Snapshot :** `manifests/site-internet-en-panne-que-faire-p2.sha256`.

### Rapport P3 — Contre-audit indépendant

PASSE 3 TERMINÉE — **20/20, sans réserve**

- **Premier verdict :** 19/20. Les essais initiaux devaient être rendus
  strictement passifs lorsqu'aucun signe de sécurité n'était visible.
- **Corrections appliquées :** condition préalable dans le lead, la réponse
  simple, le ticket et la FAQ ; aucune saisie d'identifiant, paiement, commande,
  rendez-vous, formulaire ou donnée client pendant l'observation initiale.
- **Second verdict :** 19,5/20. La dernière phrase ambiguë sur le test de la
  fonction essentielle a été remplacée par une observation passive ; les tests
  complets attendent désormais une version contrôlée après l'intervention.
- **Verdict final indépendant :** 20/20, aucun P0, P1 ou P2 restant.
- **Sources et droit :** disponibilité des données personnelles, délai de
  72 heures, restauration, fermeture temporaire, DNS et branche cyber
  revérifiés dans les sources officielles citées.
- **Calcul :** `10:32 − 08:42 = 1 h 50 = 110 minutes`, exemple explicitement
  fictif, sans moyenne, demande perdue ou délai de réparation inventé.
- **Conversion :** CTA tardif, non assimilé à une astreinte, sans engagement et
  capable d'orienter honnêtement vers un autre intervenant.
- **Snapshot :** `manifests/site-internet-en-panne-que-faire-p3.sha256`.

### Rapport P4 — Plume humaine et contrôle final

PASSE 4 TERMINÉE LOCALEMENT

- **Passe humaine :** chaque section part désormais d'un symptôme ou d'une
  question réellement formulable par un dirigeant, répond avant de détailler
  et réserve les termes techniques aux endroits où ils changent la décision.
- **Correction issue du rendu :** le composant commun n'affichant pas le champ
  numérique des badges, les libellés ont été rendus autonomes : « 15 minutes
  pour noter », « 1 personne qui coordonne » et « 6 faits dans le ticket ».
- **Responsive réel :** DOM contrôlé à 320, 390, 640, 768, 1 024 et 1 440 px ;
  un H1, 13 ancres sur 13 résolues, aucun débordement horizontal et uniquement
  les JSON-LD `Article` et `BreadcrumbList`.
- **Contrôle visuel :** ouverture mobile à 320 px, cartes à 640 px, tableau à
  768 px et page de bureau à 1 440 px inspectés. Les trois tableaux restent des
  cartes sous 768 px, puis redeviennent des tableaux lisibles.
- **Console :** aucune erreur navigateur ni surcouche d'erreur ; seuls les
  messages d'information du serveur de développement sont présents.
- **Contrôles techniques :** Prettier, ESLint, TypeScript, 18 tests éditoriaux
  et de composants ciblés, puis `git diff --check`, réussis.
- **Test réel :** non. Le contrôle navigateur est automatisé et visuel ; il ne
  remplace pas un entretien avec un lecteur appartenant à la cible.
- **Indexation locale :** `noindex, nofollow`, état attendu dans l'environnement
  de développement et pendant la retenue éditoriale. Le passage en
  `index, follow` devra être prouvé sur la production finale.
- **Décision de publication :** autorisée explicitement par le commanditaire,
  mais retenue jusqu'au gel commun des dix guides afin de conserver des
  manifestes cohérents et un déploiement atomique.
- **Snapshot :** `manifests/site-internet-en-panne-que-faire-p4.sha256`.

## 16. Revue finale à réserver aux passes suivantes

### Scorecard provisoire de la recherche

| Axe         | Note P1 0-2 | Preuve attendue en P2                            | Correction encore requise                      |
| ----------- | ----------: | ------------------------------------------------ | ---------------------------------------------- |
| Intention   |           2 | Réponse visible avant le sommaire                | Vérifier le rendu réel                         |
| Décision    |           2 | Trois temps et branche cyber                     | Tester qu'aucune cause n'est présumée          |
| Pédagogie   |           2 | Mots ordinaires et actions sûres                 | Faire la passe lecteur humain                  |
| Profondeur  |           2 | Journal, communication, restauration, reprise    | Ne pas transformer la profondeur en longueur   |
| Preuve      |           2 | Liens officiels près des affirmations sensibles  | Revérifier dates et ancres en P3               |
| Comparaison |           2 | Panne, lenteur, incident cyber et interlocuteurs | Préférer des cartes mobiles à un tableau large |
| Originalité |           2 | Horloge et journal dirigeant                     | Ne pas reprendre les arbres des guides voisins |
| Style       |           1 | Contrat de langage préparé                       | La prose publique n'existe pas encore          |
| Conversion  |           2 | Action autonome, mauvais fit et CTA orientable   | Confirmer la route et le texte du formulaire   |
| SEO/produit |           1 | Requête, titre et maillage préparés              | Page, metadata, JSON-LD et rendu non créés     |
| **Total**   |   **18/20** | Recherche prête pour P2                          | Aucun statut publiable à ce stade              |

### Bilan des vérifications P2 à P4

- [x] page publique rédigée et intégrée ;
- [x] données structurées et métadonnées cohérentes ;
- [x] liens officiels ouverts à nouveau par le contre-auditeur ;
- [x] test indépendant des affirmations CNIL, ANSSI et Google ;
- [x] relecture cyber confirmant l'absence de manipulation dangereuse ;
- [x] cinq phrases abstraites réécrites après rédaction ;
- [x] CTA et route de service réellement disponibles ;
- [x] rendu observé à 320, 390, 640, 768, 1 024 et 1 440 px ;
- [x] tests ciblés, TypeScript et console validés ;
- [x] autorisation éditoriale du commanditaire ;
- [ ] publication et indexation prouvées séparément.

## Décision de gel commun — 22 juillet 2026

Les mentions précédentes de publication différée décrivent l’état de contrôle
avant le gel atomique des dix guides.

Statut éditorial final : **publiable — validation éditoriale déléguée**.

Décision de publication : autorisée explicitement par le commanditaire.

Test réalisé par une personne réelle : non.

Le retrait du statut d’attente ouvre la route à `index, follow` dans un build de
production. Il ne prouve ni le déploiement final ni l’indexation effective par
Google, qui doivent être vérifiés séparément.
