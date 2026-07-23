# Dossier de recherche — SEO local pour une PME

> Dossier de preuve des quatre passes. Recherche, rédaction, contre-audit,
> validation éditoriale déléguée et contrôle technique P4 sont terminés.

## Journal des quatre passes

Propriétaire éditorial unique : `/root`

| Passe                        | État                      | Date            | Responsable                                | Snapshot                                          | Blocages |
| ---------------------------- | ------------------------- | --------------- | ------------------------------------------ | ------------------------------------------------- | -------- |
| 1. Recherche                 | Terminée — porte validée  | 23 juillet 2026 | `/root/research_marketing_tma_site_batch2` | `docs/research/manifests/seo-local-pme-p1.sha256` | Aucun    |
| 2. Rédaction et intégration  | Terminée — porte P2 prête | 23 juillet 2026 | `/root`                                    | `docs/research/manifests/seo-local-pme-p2.sha256` | Aucun    |
| 3. Contre-audit indépendant  | Terminée — porte validée  | 23 juillet 2026 | `/root/preaudit_seo_local`                 | `docs/research/manifests/seo-local-pme-p3.sha256` | Aucun    |
| 4. Plume humaine et contrôle | Terminée — porte validée  | 23 juillet 2026 | `/root`                                    | `docs/research/manifests/seo-local-pme-p4.sha256` | Aucun    |

### Manifeste du snapshot

Les snapshots P2 et P3 sont enregistrés hors de ce fichier dans leurs
manifestes respectifs.

## 1. Fiche d'identité

```text
Slug : seo-local-pme
Statut actuel : publiable — validation éditoriale déléguée
Requête principale : SEO local PME
Moment du parcours : comprendre puis agir
Lecteur précis : dirigeant d'une PME, commerçant, artisan ou professionnel qui sert une zone géographique et veut générer des appels, itinéraires ou demandes locales
Situation déclenchante : son entreprise apparaît mal ou de façon incohérente dans Google et Google Maps, tandis que des concurrents semblent plus visibles
Décision principale après lecture : construire un parcours local cohérent entre l'entreprise réelle, sa fiche d'établissement Google, son site et la preuve de satisfaction client, puis mesurer séparément clics, contacts reçus et résultats métier
Niveau de connaissance au départ : connaît sa fiche Google mais ne distingue pas toujours référencement du site, résultats locaux, avis et publicité
5 questions indispensables : suis-je éligible à une fiche ? que faut-il renseigner ? quel rôle joue le site ? comment demander des avis sans les manipuler ? que mesurer sans confondre visibilité et ventes ?
3 objections ou craintes : « Il suffit de mettre le nom de toutes les villes » ; « Je dois acheter des avis » ; « Une agence peut me garantir le top 3 »
Action utile sans contact commercial : suivre une recherche locale jusqu'à l'appel ou au formulaire et relever chaque rupture entre promesse, fiche, page du site et traitement du contact
CTA possible : faire aligner la fiche, le site, la mesure et le parcours de contact
Hors périmètre : audit SEO général, catalogue de villes, création de pages locales en série, optimisation éditoriale nationale, publicité locale ou promesse de position
Date de la recherche : 23 juillet 2026
Responsable de la synthèse : /root/research_marketing_tma_site_batch2
```

## 1 bis. Contrat de langage humain

- Phrase exacte que le lecteur pourrait dire au téléphone : « Quand quelqu'un
  cherche mon métier près de chez moi, mes concurrents sortent dans Google et
  pas moi. Qu'est-ce que je dois vraiment faire ? »
- Réponse qu'il attend en une phrase : commencez par rendre votre entreprise
  réelle, votre fiche Google et votre site parfaitement cohérents, puis
  améliorez les informations, les preuves et le parcours jusqu'au contact ;
  personne ne peut honnêtement garantir une place locale précise.
- Terme central expliqué sans jargon : le référencement local consiste à aider
  une personne située dans votre zone à trouver, comprendre et contacter le bon
  établissement ou prestataire.
- Mots ordinaires employés par le lecteur : apparaître sur Google Maps, fiche
  Google, horaires, téléphone, zone, avis, itinéraire, appel, devis, près de
  moi, ville.
- Mots d'agence ou de consultant à éviter : pack local, citation building, NAP,
  entity, géogrille, prominence, local rank tracking sans traduction.
- Projet des 150 premiers mots : commencer par la recherche d'un client local,
  montrer le parcours jusqu'au contact, donner la réponse en trois actifs
  cohérents — entreprise réelle, fiche, site — et dire ce qui ne se contrôle
  pas.
- Ce que le lecteur saura décider après ces 150 mots : s'il doit réparer
  l'éligibilité et la propriété de la fiche, les informations, la page du site
  ou le traitement des contacts avant d'ajouter du contenu.
- H2 relus isolément : oui.
- Comparaison comprise à 390 px sans colonne masquée : validée dans le navigateur en P4.
- FAQ dont la première phrase répond : oui.
- CTA formulé comme résultat pour le prospect : « Rendre votre parcours local
  cohérent, mesurable et réellement exploitable. »

### Test sujet, action, résultat

Effectué en P2 sur cinq phrases, puis revalidé en P3. « Travailler la
pertinence » est exclu sans information concrète à compléter et sans résultat
compréhensible pour le client.

### Test de l'ouverture

- [x] la recherche vécue par le client arrive avant la méthode ;
- [x] « SEO local » est traduit dès le premier usage ;
- [x] aucun lexique d'acronymes ne précède le verdict ;
- [x] aucune métaphore structurante n'est prévue ;
- [x] la limite sur le classement est posée sans noyer la réponse.

## 2. Cannibalisation

| Page existante                             | Intention de cette page                                            | Différence du nouveau guide                                                | Lien ou arbitrage nécessaire                                             |
| ------------------------------------------ | ------------------------------------------------------------------ | -------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| `/guides/pourquoi-site-pas-visible-google` | Diagnostiquer l'absence d'une URL dans les résultats classiques    | Construire un parcours local qui inclut Google Maps et Business Profile    | La FAQ du guide existant exclut explicitement Maps : lien croisé naturel |
| `/services/referencement-google`           | Présenter la prestation SEO, dont un aperçu du référencement local | Donner un mode d'action autonome et détaillé                               | Reprendre aucun argument commercial avant le diagnostic                  |
| `/guides/preparer-contenus-site-vitrine`   | Préparer les informations et preuves d'un site                     | Expliquer le rôle de la fiche et des pages dans une recherche géolocalisée | Lier pour la collecte des contenus, sans refaire son inventaire          |
| `/guides/seo-ou-google-ads`                | Arbitrer acquisition organique et payante                          | Traiter uniquement la visibilité organique locale                          | Ne pas refaire l'arbitrage de canal                                      |

**Justification d'une URL distincte :** le corpus actuel ne suit pas un client
depuis une recherche locale dans Google ou Maps jusqu'à une action mesurable,
et le guide général de visibilité exclut précisément ce périmètre.

**Verdict de cannibalisation :** risque faible. L'intention locale est
distincte. La rédaction devra éviter de devenir un guide SEO général ou une
liste de pages « métier + ville ».

## 3. Demande et vocabulaire du lecteur

Observation manuelle de résultats français le 23 juillet 2026, sans données de
volume, pour :

- `SEO local PME fiche Google Business Profile site internet France` ;
- `"SEO local" PME guide référencement local` ;
- `comment apparaître Google Maps entreprise locale` ;
- `référencement local PME avis fiche Google site`.

Formulations observées ou directement induites par les résultats :

- comment apparaître sur Google Maps ;
- optimiser sa fiche Google Business Profile ;
- améliorer son référencement local ;
- être visible dans sa ville ou sa zone ;
- obtenir plus d'avis Google ;
- choisir ses catégories et renseigner ses services ;
- relier la fiche à une page du site ;
- suivre les appels, itinéraires et clics vers le site.

Les résultats mélangent des guides de plateformes publiques, des pages
d'agences et des promesses de « dominer » ou d'atteindre le « top 3 ». Aucun
volume de recherche n'a été mesuré. Le choix du sujet repose sur sa cohérence
avec les services et le besoin décisionnel, pas sur une estimation de trafic.

Champ lexical humain à privilégier : établissement, zone réellement desservie,
adresse, horaires, service, catégorie, appel, itinéraire, devis, page utile,
photo actuelle, avis authentique, propriétaire de la fiche, accès, demande
locale, suivi.

## 4. Carte concurrentielle

| Page                                                                                                                                                                    | Réponse et angle                                                   | Preuves/artefacts                                   | Bon point                                                                      | Manque décisionnel                                                   | Conflit d'intérêt éventuel                   |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | --------------------------------------------------- | ------------------------------------------------------------------------------ | -------------------------------------------------------------------- | -------------------------------------------- |
| [Google — améliorer le classement local](https://support.google.com/business/answer/7091?hl=fr)                                                                         | Informations complètes et facteurs pertinence, distance, notoriété | Documentation officielle                            | Pose clairement l'absence de moyen de payer ou demander un meilleur classement | Ne transforme pas les règles en plan PME                             | Google opère le moteur                       |
| [France Num — Google Business Profile](https://www.francenum.gouv.fr/guides-et-conseils/communication-et-publicite/referencement/google-business-profile-le-service-de) | Guide d'appropriation pour TPE-PME                                 | Article pédagogique hébergé sur plateforme publique | Langage accessible aux dirigeants                                              | Ne couvre pas tout le lien fiche-site-contact                        | Contenu partenaire, pas documentation moteur |
| [Kefa Network — référencement local 2026](https://kefanetworkgroup.com/referencement-local-google-guide-pme-2026/)                                                      | Checklist de visibilité locale                                     | Conseils opérationnels                              | Couvre de nombreux leviers                                                     | Risque de liste et de promesses sans hiérarchie décisionnelle        | Prestataire SEO                              |
| [Info Conception — accompagnement SEO local](https://www.infoconception.fr/accompagnement-seo-local-pme/)                                                               | Présente l'accompagnement d'une PME                                | Offre et conseils                                   | Relie stratégie et entreprise                                                  | Peu d'action autonome avant vente                                    | Prestataire SEO                              |
| [VisibilitéCom — SEO local pour PME](https://visibilitecom.fr/seo/agence-seo-pme-guide-complet/seo-local-pour-pme/)                                                     | Guide intégré à une offre d'agence                                 | Checklist et arguments                              | Vocabulaire de recherche utile                                                 | Distingue peu ce qui est contrôlable, mesurable ou seulement corrélé | Prestataire SEO                              |

**Angle mort commun :** l'empilement de leviers masque le parcours humain. Les
guides confondent parfois cohérence des informations et facteur de classement,
promettent une position que la distance empêche de contrôler, ou recommandent
des avis sans rappeler l'interdiction des incitations et manipulations.

**Valeur originale que le guide apportera :** suivre une recherche locale
réelle jusqu'au contact, en attribuant à chaque actif un rôle précis :
fiche Google pour identifier et agir, site pour expliquer et rassurer,
entreprise pour répondre et tenir la promesse. Le dirigeant trouvera où le
parcours se rompt avant d'investir.

## 5. Fiche de preuves

| Affirmation utilisable                                                                                                                                                                                                                                                    | Source primaire, URL et passage utile                                                                                                                  | Nature                   | Périmètre                              | Date/consultation | Confiance | Emplacement du lien visible  | Conséquence lecteur                                                                                  | Fraîcheur                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------ | -------------------------------------- | ----------------- | --------- | ---------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------- |
| Google indique que les résultats locaux reposent principalement sur la pertinence, la distance et la notoriété ; les informations complètes, les liens, le nombre d'avis et les notes positives peuvent y contribuer, sans moyen de demander ou payer une meilleure place | [Google Business Profile — améliorer le classement local](https://support.google.com/business/answer/7091?hl=fr)                                       | Documentation officielle | Résultats locaux Google                | 23/07/2026        | Élevée    | Verdict, facteurs et limites | Agir séparément sur ce qui est améliorable, sans acheter une garantie                                | Revoir annuellement          |
| Une entreprise peut ajouter ou revendiquer gratuitement une fiche puis la valider pour apparaître dans Search et Maps                                                                                                                                                     | [Google — ajouter ou revendiquer une fiche](https://support.google.com/business/answer/2911778?hl=fr)                                                  | Documentation officielle | Business Profile                       | 23/07/2026        | Élevée    | Étape propriété/validation   | Rester propriétaire d'un actif gratuit                                                               | Revoir si processus change   |
| L'éligibilité exige en principe un contact en personne avec les clients ; les activités uniquement en ligne et les entreprises de génération de prospects ne sont notamment pas éligibles                                                                                 | [Google — éligibilité et propriété](https://support.google.com/business/answer/13763036?hl=fr)                                                         | Documentation officielle | Éligibilité                            | 23/07/2026        | Élevée    | Mini-test avant optimisation | Ne pas créer une fiche pour une activité non éligible                                                | Revoir avant publication     |
| Nom réel, adresse ou zone, catégories précises et unicité de la fiche doivent respecter les règles de représentation                                                                                                                                                      | [Google — consignes de représentation](https://support.google.com/business/answer/3038177?hl=fr)                                                       | Documentation officielle | Représentation                         | 23/07/2026        | Élevée    | Étape préalable              | Ne pas créer une fiche artificielle ou dupliquée                                                     | Revoir avant publication     |
| Une entreprise de zone de service qui ne reçoit personne à son adresse doit la masquer ; elle utilise en principe une fiche pour sa zone, avec actuellement jusqu'à 20 zones et un conseil d'environ deux heures de trajet pour l'ensemble                                | [Google — zones desservies](https://support.google.com/business/answer/9157481?hl=fr)                                                                  | Documentation officielle | Entreprises intervenant chez le client | 23/07/2026        | Élevée    | Cas artisans/prestataires    | Représenter le fonctionnement réel et traiter les limites comme paramètres évolutifs                 | Revoir avant publication     |
| Lorsqu'un tiers gère la fiche, l'entreprise doit rester propriétaire ou copropriétaire ; les garanties de classement sont interdites et l'accès doit pouvoir être rendu                                                                                                   | [Google — règlement pour les tiers](https://support.google.com/business/answer/7353941?hl=fr)                                                          | Documentation officielle | Prestataires Business Profile          | 23/07/2026        | Élevée    | Choix d'un prestataire       | Protéger la réversibilité et éviter les promesses                                                    | Revoir annuellement          |
| Google autorise le partage d'un lien ou QR code pour demander un avis, mais interdit les incitations                                                                                                                                                                      | [Google — demander des avis](https://support.google.com/business/answer/16816815?hl=fr)                                                                | Documentation officielle | Collecte d'avis                        | 23/07/2026        | Élevée    | Partie avis                  | Mettre en place une demande honnête                                                                  | Revoir si règles changent    |
| Les avis doivent refléter une expérience authentique ; l'incitation, la sélection des seuls avis positifs et la manipulation sont interdites                                                                                                                              | [Google Maps — politique sur les contenus générés par les utilisateurs](https://support.google.com/contributionpolicy/answer/7400114?hl=fr)            | Politique officielle     | Avis et contenus Maps                  | 23/07/2026        | Élevée    | Partie avis et erreurs       | Ne pas acheter ni filtrer les avis                                                                   | Revoir annuellement          |
| Les statistiques d'une fiche validée peuvent inclure recherches, vues et interactions ; « appels » compte les clics sur le bouton, toutes les métriques ne sont pas disponibles pour toutes les fiches et les données peuvent réunir résultats naturels et Google Ads     | [Google — performances Business Profile](https://support.google.com/business/answer/9918094?hl=fr-fr&rd=1)                                             | Documentation officielle | Mesure de la fiche                     | 23/07/2026        | Élevée    | Partie mesure                | Séparer clic d'appel, contact réellement reçu et vente ; ne pas attribuer le total au seul SEO local | Revoir si métriques changent |
| Le balisage LocalBusiness peut décrire notamment l'établissement et ses horaires, sans constituer une garantie d'affichage ni de classement                                                                                                                               | [Google Search Central — données structurées LocalBusiness](https://developers.google.com/search/docs/appearance/structured-data/local-business?hl=fr) | Documentation officielle | Résultats enrichis du site             | 23/07/2026        | Élevée    | Encadré technique secondaire | Structurer des données exactes, sans en faire un levier miracle                                      | Revoir annuellement          |

### Contradictions et données à ne pas publier

- Ne jamais promettre le « top 3 », la première place ou un délai de classement.
- La distance dépend de la position de la personne qui cherche et ne se corrige
  pas avec davantage de texte.
- Les sources officielles consultées ne présentent pas les « citations NAP »
  comme un facteur autonome garanti. La cohérence des coordonnées sera décrite
  comme protection contre les contradictions pour le client et les systèmes,
  pas comme promesse de rang.
- Ne pas recommander une page par ville sans service, preuve et contenu propres.
- Ne pas inventer un nombre minimum d'avis, une fréquence idéale, une longueur
  de description ou un taux de réponse universel.
- Un « appel » dans le rapport de la fiche est un clic sur le bouton, pas la
  preuve qu'une conversation a été établie. Le rapport peut aussi mêler
  résultats naturels et Google Ads. Le suivi du contact réellement reçu reste
  nécessaire.
- Une fiche Google est gratuite. Un prestataire peut facturer son travail, pas
  la propriété de la fiche ni une position garantie.

### Calculs reproductibles

Aucun calcul de ROI ou de classement ne sera proposé. Le guide distinguera :

1. visibilité : la fiche ou la page a été vue ;
2. interaction dans Google : clic sur le bouton d'appel, itinéraire ou clic
   vers le site ;
3. contact réellement reçu : appel établi et traité, formulaire ou message
   retrouvé ;
4. demande qualifiée : besoin, zone et échéance correspondent ;
5. résultat métier : rendez-vous, devis accepté ou vente.

Le lecteur relèvera sur une période annoncée les données réellement
disponibles, sans attribuer automatiquement chaque vente à une vue de fiche.

## 6. Empreinte éditoriale à ne pas reproduire

| Guide                              | Type d'ouverture               | Progression                         | Dispositif récurrent | Type d'exemple         | Place du CTA     | Type de conclusion      |
| ---------------------------------- | ------------------------------ | ----------------------------------- | -------------------- | ---------------------- | ---------------- | ----------------------- |
| `pourquoi-site-pas-visible-google` | URL absente d'une recherche    | Diagnostic technique puis éditorial | Arbre de causes      | Page de site           | Après diagnostic | Priorité selon la cause |
| `preparer-contenus-site-vitrine`   | Projet bloqué par les contenus | Collecte par catégories             | Inventaire           | Entreprise de services | Fin              | Dossier prêt à produire |
| `seo-ou-google-ads`                | Choix d'investissement         | Contraintes et horizon              | Comparaison          | Dirigeant              | Fin              | Canal selon objectif    |
| Page service référencement         | Besoin de visibilité           | Offre, méthode, garanties           | Blocs de service     | Cas généraux           | Répété           | Prendre contact         |

Choix du nouveau guide :

```text
Tension ou question motrice : où la recherche locale se transforme-t-elle — ou non — en demande réelle ?
Type d'ouverture retenu et pourquoi : suivre une personne qui cherche, compare, ouvre la fiche, visite le site puis appelle
Progression retenue et pourquoi : parcours client -> fondations -> fiche -> site -> avis -> mesure -> plan d'action
Artefact signature : diagnostic d'une recherche locale de bout en bout, avec une rupture à corriger à chaque étape
Rythme/registre de voix : très concret, sans vocabulaire de consultant, alternance scènes et décisions
Place naturelle du CTA : après que le lecteur a identifié la rupture qu'il ne peut pas corriger seul
Forme de conclusion : plan de sept jours portant sur les actifs existants, sans promesse de position
Au moins trois différences avec les guides voisins : parcours de recherche plutôt qu'arbre technique ; Google Maps inclus ; aucun catalogue de contenus ; mesure jusqu'à la qualification commerciale ; limite sur distance et classement posée tôt
```

## 7. Plan annoté

| Section provisoire                                                         | Question résolue                            | Preuve ou exemple                              | Conséquence/décision                                      | Format choisi                                        |
| -------------------------------------------------------------------------- | ------------------------------------------- | ---------------------------------------------- | --------------------------------------------------------- | ---------------------------------------------------- |
| Le SEO local, vu par votre prochain client                                 | Que cherche-t-on à améliorer ?              | Recherche -> fiche -> page -> contact          | Raisonner en parcours, pas en position isolée             | Scène d'ouverture                                    |
| Avant d'optimiser : votre fiche est-elle légitime et sous votre contrôle ? | Êtes-vous éligible et propriétaire ?        | Règles Google sur validation, unicité et tiers | Réparer ce socle avant tout achat                         | Checklist courte                                     |
| La fiche répond aux questions immédiates                                   | Quelles informations doivent être exactes ? | Nom réel, catégorie, horaires, zone, services  | Éliminer les ruptures pratiques                           | Vue « question du client / réponse de la fiche »     |
| Le site fait ce que la fiche ne peut pas faire                             | Pourquoi une page web reste-t-elle utile ?  | Offre, preuve, déroulement, limites, action    | Relier vers la meilleure réponse, pas seulement l'accueil | Exemple de parcours                                  |
| Les avis rassurent s'ils restent authentiques                              | Comment en demander proprement ?            | Politiques officielles                         | Organiser la demande sans récompense ni filtrage          | Bonnes et mauvaises pratiques                        |
| Vous ne contrôlez pas la distance, mais vous contrôlez la cohérence        | Que peut-on vraiment améliorer ?            | Trois facteurs officiels                       | Investir dans le contrôlable                              | Tableau « contrôlable / non contrôlable » responsive |
| Mesurez le chemin jusqu'au chiffre d'affaires                              | Quelles métriques comptent ?                | Vues, interactions, qualification, vente       | Ne pas confondre clic et client                           | Entonnoir textuel                                    |
| Audit autonome : faites une recherche comme un client                      | Quelle action effectuer aujourd'hui ?       | Requête, mobile, horaires réels, appel test    | Produire une liste de ruptures priorisée                  | Procédure en étapes                                  |
| Bon fit, mauvais fit et accompagnement                                     | Quand demander de l'aide ?                  | Accès, cohérence, contenus, suivi              | Conversion honnête                                        | Deux encadrés                                        |
| Questions fréquentes                                                       | Répondre aux cas pratiques                  | Sources Google                                 | Éviter les recettes dangereuses                           | FAQ                                                  |

## 8. Ressource et conversion

```text
Une ressource est-elle naturellement nécessaire ? non
Problème qu'elle résout après la lecture : repérer la rupture locale prioritaire
Résultat autonome produit : un audit guidé directement dans la page
Format éditable et format de consultation : procédure HTML imprimable
Rubriques, champs ou matrices réellement livrés : requête testée, fiche trouvée, informations exactes, page ouverte, action possible, appel traité, correction prioritaire
Exemple rempli : entreprise fictive de réparation de volets qui ne reçoit personne à son adresse ; recherche testée, horaire faux, page trop générale, appel non traité, correction prioritaire et données à relever
Conclusion « ne pas investir » possible : oui, si l'entreprise n'est pas éligible, si la fiche n'est pas sous son contrôle ou si personne ne répond aux contacts
Sources, hypothèses et limites visibles : oui
Données saisies et destination de ces données : aucune saisie
Processus de génération reproductible : sans objet
Journal de QA : à réaliser en P4
Limites connues et niveau de revue humaine : résultats personnalisés selon la localisation ; contrôle manuel sur plusieurs situations nécessaire
Mode de maintenance : revue annuelle des règles Google Business Profile
Test du fichier ou outil : sans objet
Bon fit Hagnéré Code : PME légitime avec une zone réelle, des services définis et la volonté d'aligner fiche, site et mesure
Mauvais fit : demande de fausses adresses, faux avis, pages de villes industrielles ou garantie de classement
Action non commerciale : effectuer une recherche locale complète et corriger d'abord la première rupture
CTA principal et résultat après clic : présenter la situation locale ; échange humain pour trouver la première incohérence et dire si Hagnéré Code peut prendre en charge les corrections, sans diagnostic formalisé ni classement promis
```

## 9. Rapports de sortie des quatre passes

### Rapport P1 — Recherche

```text
PASSE 1 TERMINÉE
Slug : seo-local-pme
Lecteur et phrase réelle : dirigeant local — « Mes concurrents apparaissent dans Google et pas moi. »
Décision : aligner établissement réel, propriété de la fiche, informations, site, avis authentiques et mesure avant de produire davantage
Angle et forme dominante : une recherche locale suivie jusqu'au contact
Pages proches et différence : le guide de visibilité classique exclut Maps ; la page service reste transactionnelle
Sources décisives : documentation officielle Google Business Profile, politiques Maps et Search Central
Incertitudes exclues : top 3, délai, volume, nombre d'avis, effet garanti des citations ou du balisage
Action autonome et CTA possible : audit d'une recherche réelle ; diagnostic priorisé du parcours local
Plan : parcours, propriété, fiche, site, avis, contrôlable, mesure, audit, fits, FAQ
Snapshot : docs/research/manifests/seo-local-pme-p1.sha256
```

### Rapport P2 — Rédaction et intégration

```text
PASSE 2 TERMINÉE — PRÊTE POUR CONTRE-AUDIT INDÉPENDANT
Éditeur unique : `/root`
Historique : pré-audit en lecture seule refusé avec P0 = 0 ; P1 = 5 ; P2 = 4, puis reprise complète avant gel P2
Fichiers créés ou modifiés : dossier de recherche ; page publique ; image sociale ; registre des guides ; lien entrant depuis `pourquoi-site-pas-visible-google` ; garde-fou éditorial dédié
Ouverture et réponse : scène d'une recherche locale formulée avec les mots du dirigeant ; fiche d'établissement Google définie ; aucune promesse de top 3
Forme propre au sujet : parcours recherche -> fiche -> site -> confiance -> contact ; mini-test d'éligibilité ; trois facteurs expliqués ; cinq niveaux de mesure ; audit autonome ; plan de sept jours
Corrections factuelles : activité uniquement en ligne et génération de prospects exclues ; adresse masquée si aucun client n'est reçu ; fiche unique de zone de service ; limites actuelles de 20 zones et environ deux heures présentées comme paramètres évolutifs
Classement : pertinence reliée aux informations et à la page ; distance impossible à effacer ; notoriété reliée aux avis authentiques, notes, liens et mentions, sans pondération inventée
Mesure : « appels » traduit en clics sur le bouton ; contact réellement reçu ajouté ; disponibilité variable des métriques et mélange possible entre résultats naturels et Google Ads explicités
Exemple : Aubeline Dépannage, entreprise entièrement fictive, avec activité, adresse masquée, recherche testée, horaire faux, page ouverte, appel non traité, correction et données à relever
Action autonome, bon fit et mauvais fit : audit daté de bout en bout ; refus des fausses adresses, avis manipulés, pages de villes en série et garanties de classement
CTA et destination : « Présenter ma situation locale » vers `/demarrer-un-projet` ; échange humain annoncé, aucune liste ou position garantie
Temps de lecture : 22 minutes pour 4 336 mots visibles au contrôle navigateur
Contrôles rapides : test éditorial dédié vert ; ESLint, Prettier et diff-check conformes ; noindex/nofollow ; Article et BreadcrumbList seulement ; cinq largeurs de 320 à 1 440 px sans débordement
Snapshot : `docs/research/manifests/seo-local-pme-p2.sha256`
```

### Rapport P3 — Contre-audit indépendant

```text
PASSE 3 TERMINÉE — VALIDÉE APRÈS REPRISE
Relecteur indépendant : `/root/preaudit_seo_local`
Snapshot audité : `docs/research/manifests/seo-local-pme-p2.sha256`
Verdict initial : P0 = 0 ; P1 = 1 ; P2 = 3, puis corrections de contenu, de métadonnée et de formatage
Corrections appliquées : effet de la validation Google nuancé ; métadonnée et sommaire simplifiés ; premier exemple remplacé par un pont vers Aubeline ; image sociale formatée avec la version Prettier du projet ; comptage visible actualisé
Revalidation finale : P0 = 0 ; P1 = 0 ; P2 = 0
Exactitude revérifiée : éligibilité et propriété de la fiche ; activité uniquement en ligne ; entreprise de zone de service ; pertinence, distance et notoriété ; appels définis comme clics sur le bouton ; limites des métriques
Contrôles : manifeste P2 exact 6/6 au moment du contre-audit ; 4 336 mots visibles, soit 22 minutes ; test éditorial, ESLint, TypeScript, Prettier et diff-check conformes
Rendu contrôlé : HTML 200 ; noindex/nofollow ; un H1 ; Article et BreadcrumbList uniquement ; image sociale PNG de 1 200 × 630
État : porte P3 validée ; P4 autorisée
```

### Rapport P4 — Plume humaine et contrôle final

```text
PASSE 4 TERMINÉE
Passages humanisés : recherche locale formulée comme au téléphone ; entreprise, fiche, site et traitement du contact reliés dans un même parcours ; métriques traduites en actions observables
Retour P3 effectué : oui ; reprise après un premier refus puis validation finale à P0 = 0, P1 = 0 et P2 = 0
Lecture et artefact : 4 233 mots comptés dans l'artefact final, soit 21 minutes avec la convention de 200 mots par minute
Scorecard justifiée : 20/20 ; détail dans la table ci-dessous
Validation humaine réelle : non
Test réalisé par une personne réelle : non
Autorisation éditoriale : Décision de publication : autorisée explicitement par le commanditaire
Commandes et résultats : check:seo, ESLint, TypeScript, batterie Vitest, build Next.js, postbuild et git diff --check conformes au gel final du lot
Largeurs et états contrôlés : 320, 390, 767, 1 024 et 1 440 px ; aucun débordement ; canonical exact ; un H1 ; Article et BreadcrumbList ; un CTA sans téléphone
Snapshot final : docs/research/manifests/seo-local-pme-p4.sha256
Statut maximal : publiable — validation éditoriale déléguée
Verdict : porte P4 validée
```

### Scorecard P4

| Axe         | Note 0-2 | Preuve dans la page                                                                                     | Correction éventuelle |
| ----------- | -------: | ------------------------------------------------------------------------------------------------------- | --------------------- |
| Intention   |        2 | Le guide répond à la recherche locale d'un client jusqu'au contact réellement reçu                      | Aucune                |
| Décision    |        2 | Éligibilité, informations, site, avis, mesure ou traitement du contact peuvent être corrigés en premier | Aucune                |
| Pédagogie   |        2 | Aubeline Dépannage relie fiche, horaire, page ouverte, appel et traitement                              | Aucune                |
| Profondeur  |        2 | Éligibilité, zone de service, pertinence, distance, notoriété, avis et limites de mesure sont couverts  | Aucune                |
| Preuve      |        2 | Sources Google officielles visibles et paramètres évolutifs explicitement signalés                      | Aucune                |
| Comparaison |        2 | Fiche, site, preuve client et traitement sont évalués dans le même parcours                             | Aucune                |
| Originalité |        2 | Le guide suit une recherche fictive de bout en bout plutôt qu'une checklist SEO générique               | Aucune                |
| Style       |        2 | Vocabulaire du dirigeant, titres directs et absence de jargon local non traduit                         | Aucune                |
| Conversion  |        2 | CTA unique et tardif ; aucune liste, position ou résultat commercial garanti                            | Aucune                |
| SEO/produit |        2 | Intention distincte, metadata, maillage, OG, index/follow et cinq largeurs contrôlés                    | Aucune                |

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

## 10. Revue historique de porte P1

- [x] lecteur, déclencheur et décision définis ;
- [x] règles officielles Google consultées ;
- [x] SERP française observée sans inventer de volumes ;
- [x] limite entre SEO classique et local documentée ;
- [x] parcours jusqu'au contact prévu ;
- [x] distance, visibilité, interaction et vente distinguées ;
- [x] pratiques interdites et promesses non défendables exclues ;
- [x] action autonome, bon fit et mauvais fit prévus ;
- [x] aucune ressource téléchargeable inexistante annoncée ;
- [x] au gel P1, P2, P3 et P4 restaient bloquées avant publication.
