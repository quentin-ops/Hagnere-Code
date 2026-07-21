# Dossier de travail — reprendre un MVP créé avec Lovable, Bolt ou v0

## Journal des quatre passes

Propriétaire éditorial unique : agent principal Codex.

| Passe                        | État                     | Date       | Responsable                   | Snapshot     | Blocages |
| ---------------------------- | ------------------------ | ---------- | ----------------------------- | ------------ | -------- |
| 1. Recherche                 | Terminée — porte validée | 2026-07-21 | Codex + relecteur des sources | manifeste P1 | aucun    |
| 2. Rédaction et intégration  | Terminée — porte validée | 2026-07-21 | Codex                         | manifeste P2 | aucun    |
| 3. Contre-audit indépendant  | Terminée — porte validée | 2026-07-21 | relecteur distinct            | manifeste P3 | aucun    |
| 4. Plume humaine et contrôle | Terminée — porte validée | 2026-07-21 | Codex                         | manifeste P4 | aucun    |

Le snapshot de chaque passe couvre le dossier de recherche, puis la page, son
image sociale, le registre et les liens entrants lorsqu'ils existent. Une
modification de sens après P3 impose une nouvelle vérification factuelle.

## 1. Fiche d'identité

```text
Slug : reprendre-mvp-vibe-code
Statut actuel : publiable — validation éditoriale déléguée
Requête principale qualitative : reprendre un projet Lovable, Bolt ou v0
Moment du parcours : décider avant de continuer à investir
Lecteur précis : fondateur ou dirigeant non technique ayant déjà une démonstration ou un premier MVP généré avec un outil d'IA
Situation déclenchante : le prototype fonctionne en démonstration, mais son créateur ne peut plus avancer ou le dirigeant veut le fiabiliser
Décision principale après lecture : conserver, stabiliser, migrer progressivement, réécrire une partie ou arrêter
Niveau de connaissance au départ : sait utiliser l'application, mais ne distingue pas encore le code, la base de données, les fichiers, les comptes et les secrets
5 questions indispensables : le code se reconstruit-il ; peut-on le déployer ailleurs ; les données et fichiers sont-ils récupérables ; les accès sont-ils maîtrisés ; les droits et dépendances sont-ils identifiés
3 objections ou craintes : tout jeter ; rester prisonnier de la plateforme ; découvrir un coût ou un risque après la reprise
Action utile sans contact commercial : constituer un dossier de reprise et demander cinq preuves exécutées
CTA possible : faire examiner le dépôt, l'URL et les accès disponibles
Hors périmètre : tutoriel Lovable/Bolt/v0, promesse de sécurité, avis juridique, estimation universelle de budget ou de délai, choix initial d'un générateur IA
Date de la recherche : 2026-07-21
Responsable de la synthèse : Codex
```

## 1 bis. Contrat de langage humain

- Phrase exacte que le lecteur pourrait dire au téléphone : « J'ai créé un
  premier produit avec Lovable, Bolt ou v0. Est-ce qu'un développeur peut le
  reprendre sans tout refaire ? »
- Réponse attendue en une phrase : souvent oui, mais une reprise sérieuse doit
  d'abord prouver que le code se reconstruit, que l'application peut être
  déployée, que les données et fichiers sont récupérables et que l'entreprise
  contrôle les accès nécessaires.
- Terme central expliqué sans jargon : un dépôt GitHub est le dossier qui
  conserve les fichiers du projet et l'historique de leurs modifications.
- Mots ordinaires à employer : récupérer, relancer, sauvegarder, accès,
  comptes, factures, utilisateurs, erreurs, continuer, remplacer.
- Mots à traduire au premier usage : dépôt, build, variables d'environnement,
  backend, dépendance, RLS, rollback.
- Mots à éviter quand ils n'ajoutent rien : stack, scale, dette legacy,
  industrialiser, production-ready, architecture cible, ownership.
- Projet des 150 premiers mots : partir de la démonstration déjà créée,
  répondre « souvent oui » et expliquer immédiatement pourquoi le lien public
  ou le fichier ZIP ne suffisent pas.
- Décision après l'ouverture : ne pas accepter une réécriture totale ni une
  reprise aveugle avant les cinq preuves.
- CTA formulé comme résultat : savoir ce qui est récupérable, quel premier test
  exécuter et si un audit payant est justifié.

### Test sujet, action, résultat

| Formulation à interdire    | Qui agit ?               | Action concrète                           | Résultat lecteur                           | Formulation retenue                                                                     |
| -------------------------- | ------------------------ | ----------------------------------------- | ------------------------------------------ | --------------------------------------------------------------------------------------- |
| « auditer la stack »       | le repreneur             | installe et reconstruit le projet         | sait si le code est exploitable            | « Le repreneur installe une copie neuve et vérifie qu'elle se construit sans erreur. »  |
| « sécuriser le backend »   | le responsable           | vérifie droits, clés et règles d'accès    | sait qui peut lire ou modifier les données | « Vérifiez avec un compte ordinaire ce qu'il peut réellement voir et modifier. »        |
| « réduire la dette »       | l'équipe                 | corrige les risques qui bloquent la suite | peut choisir où investir                   | « Corrigez d'abord ce qui empêche une mise en ligne, une sauvegarde ou une évolution. » |
| « préparer une migration » | le dirigeant et l'équipe | choisissent ce qui reste et ce qui part   | évite une réécriture globale               | « Gardez les parties prouvées et remplacez seulement celles qui bloquent la suite. »    |
| « valider l'ownership »    | le dirigeant             | rassemble comptes, contrats et licences   | sait ce qu'il contrôle                     | « Rassemblez les comptes, les contrats et les licences avant de confier la reprise. »   |

## 2. Cannibalisation

| Page existante                               | Intention actuelle                                     | Différence du nouveau guide                                                | Arbitrage de maillage                                         |
| -------------------------------------------- | ------------------------------------------------------ | -------------------------------------------------------------------------- | ------------------------------------------------------------- |
| `/guides/creer-un-site-avec-ia`              | choisir une façon de créer un site avec l'IA           | part d'un MVP déjà créé et vérifie sa reprise                              | lien entrant après la section Lovable/Bolt/v0                 |
| `/guides/mvp-saas-quoi-inclure`              | choisir ce qu'un premier MVP doit contenir             | ne redéfinit pas le MVP ; examine un prototype existant                    | lien contextuel vers la reprise si le MVP existe déjà         |
| `/guides/reprendre-logiciel-metier-existant` | reprendre une application déjà exploitée par un métier | traite le contexte spécifique des générateurs IA et de l'état hors du code | lien vers le guide général pour une application déjà critique |
| `/guides/no-code-ou-sur-mesure`              | choisir une famille de solution avant de construire    | décide quoi faire d'un actif déjà produit                                  | pas de nouvelle comparaison générale no-code/sur-mesure       |
| `/guides/audit-technique-site-web`           | auditer un site existant                               | porte sur un MVP applicatif, sa base, ses fichiers et ses accès            | aucun doublon de checklist générique du site                  |

**Justification d'une URL distincte :** aucune page existante ne répond à la
question concrète « un développeur peut-il reprendre ce MVP généré sans tout
jeter ? » à partir de preuves exécutées.

## 3. Demande et vocabulaire du lecteur

La demande est observée qualitativement dans les résultats francophones du 21
juillet 2026 et dans les formulations commerciales consacrées à la « reprise
Lovable ». Aucun volume de recherche ni tendance chiffrée n'est revendiqué.

Questions et formulations à couvrir naturellement :

- « Peut-on reprendre un projet Lovable ? » ;
- « Est-ce qu'un développeur peut modifier le code de Bolt ? » ;
- « Faut-il tout réécrire après un MVP créé avec l'IA ? » ;
- « Comment récupérer ma base de données et mes utilisateurs ? » ;
- « Le code exporté suffit-il pour changer de prestataire ? » ;
- « Est-ce que je suis bloqué chez Lovable, Bolt ou Vercel ? » ;
- « Comment savoir si mon prototype peut devenir un vrai produit ? ».

Vocabulaire naturel à conserver : prototype, premier produit, lien public,
comptes clients, paiements, données, fichiers envoyés, mots de passe, domaine,
facture et personne qui a créé le projet.

## 4. Carte concurrentielle qualitative

| Page consultée                                                                                                       | Réponse et angle                      | Bon point                                   | Manque décisionnel pour un dirigeant                              | Conflit d'intérêt           |
| -------------------------------------------------------------------------------------------------------------------- | ------------------------------------- | ------------------------------------------- | ----------------------------------------------------------------- | --------------------------- |
| [Noxcod — agence Lovable](https://www.noxcod.com/agence/lovable)                                                     | audit puis reprise et évolution       | reconnaît que tout ne doit pas être réécrit | peu de preuves que le client peut exiger avant de signer          | vend la reprise             |
| [Shenrard — prototype en production](https://shenrard.be/prototype-en-production/)                                   | passage du prototype à la production  | distingue reprise, nettoyage et déploiement | grille commerciale plus présente que la méthode autonome          | vend audit et développement |
| [Algomax — reprise de projet Lovable](https://algomax.fr/blog/reprise-de-projet-lovable-ce-que-personne-ne-vous-dit) | risques et fourchettes de reprise     | rend le problème visible                    | prix et scénarios non transposables ; ton anxiogène               | vend des prestations        |
| [Lovable — page de présentation](https://lovable.dev/fr/meta-lp)                                                     | export du code et poursuite du projet | rappelle la possibilité d'un dépôt GitHub   | page produit, pas diagnostic indépendant de l'ensemble des actifs | éditeur de la plateforme    |

**Angle mort commun :** le code est souvent traité comme s'il représentait
toute l'application. Or il faut reprendre au moins huit couches : dépôt et
historique ; installation et construction ; hébergement et configuration ;
schéma et données ; fichiers ; utilisateurs et sessions ; secrets et services
tiers ; enfin domaines, sauvegardes et procédures d'exploitation. Une archive
ZIP contient surtout les fichiers du projet. Même un bon dépôt Git ne prouve
pas à lui seul que les sept autres couches sont récupérables.

**Valeur originale :** cinq preuves simples, chacune associée à une décision,
et cinq sorties honnêtes : conserver, stabiliser, migrer, réécrire une partie
ou arrêter. Le guide ne part ni du principe qu'un MVP IA est mauvais, ni du
principe que l'export garantit la reprise.

## 5. Fiche de preuves

| Affirmation utilisable                                                                                                                                                                                                   | Source primaire et passage utile                                                                                                                         | Nature / périmètre                                      | Consultation | Confiance | Emplacement visible      | Conséquence lecteur                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- | ------------ | --------- | ------------------------ | ------------------------------------------------------------------------------------------- |
| Lovable stocke et gère le code dans sa plateforme ; GitHub permet d'en exporter une copie et de la synchroniser dans les deux sens pour sauvegarder, collaborer, travailler localement ou déployer ailleurs.             | [Lovable — GitHub](https://docs.lovable.dev/integrations/github), introduction et fonctionnement de la synchronisation                                   | documentation éditeur                                   | 2026-07-21   | élevée    | preuve code              | demander l'accès au projet Lovable et au dépôt synchronisé, sans déclarer une source unique |
| Un déploiement hors de Lovable transfère à l'équipe la responsabilité du pipeline, des variables, du cache et de l'exploitation.                                                                                         | [Lovable — external deployment](https://docs.lovable.dev/tips-tricks/external-deployment-hosting), responsabilités du déploiement externe                | documentation éditeur                                   | 2026-07-21   | élevée    | preuve déploiement       | exiger un déploiement indépendant réellement exécuté                                        |
| Le contrôle de sécurité intégré de Lovable ne remplace pas un audit complet et des problèmes critiques n'empêchent pas toujours la publication.                                                                          | [Lovable — security](https://docs.lovable.dev/features/security), fonctionnement et limites des scanners                                                 | documentation éditeur                                   | 2026-07-21   | élevée    | preuve accès             | ne pas vendre un badge ou un scan comme certification                                       |
| La technique d'un projet Lovable dépend notamment de sa date ; les nouveaux projets annoncés depuis le 13 mai 2026 utilisent TanStack Start SSR, avec exceptions, alors que les plus anciens peuvent être en React/Vite. | [Lovable — FAQ](https://docs.lovable.dev/introduction/faq), question sur la technologie                                                                  | documentation datée de l'éditeur                        | 2026-07-21   | élevée    | section code             | ne pas promettre une reprise à partir du seul nom « Lovable »                               |
| Bolt permet de télécharger les fichiers du projet et de les ouvrir localement ou ailleurs.                                                                                                                               | [Bolt — project files](https://support.bolt.new/building/using-bolt/projects-files), téléchargement et ouverture du projet                               | documentation éditeur                                   | 2026-07-21   | élevée    | preuve code              | récupérer le projet, puis prouver l'installation ; ne pas s'arrêter à l'export              |
| L'historique de versions Bolt ne restaure pas une base Supabase ; revenir à une version du projet laisse la base actuelle inchangée.                                                                                     | [Bolt — Supabase](https://support.bolt.new/integrations/supabase), version history et database                                                           | documentation éditeur                                   | 2026-07-21   | élevée    | preuve données           | séparer sauvegarde du code et sauvegarde de la base                                         |
| Bolt permet d'exporter des lignes de tables en CSV ou JSON.                                                                                                                                                              | [Bolt — tables](https://support.bolt.new/cloud/database/tables), export des données                                                                      | documentation éditeur                                   | 2026-07-21   | élevée    | preuve données           | vérifier l'export, mais ne pas le confondre avec une restauration complète                  |
| Dans v0, le dépôt GitHub connecté est la source de vérité ; les projets regroupent aussi des déploiements, domaines et variables qui ne se résument pas au dépôt.                                                        | [v0 — GitHub](https://v0.app/docs/github) et [v0 — Projects](https://v0.app/docs/projects)                                                               | documentation éditeur                                   | 2026-07-21   | élevée    | preuves code/déploiement | inventorier ce qui n'est pas contenu dans le dépôt                                          |
| Les variables d'environnement Vercel sont conservées hors du dépôt et leurs modifications nécessitent un nouveau déploiement pour s'appliquer.                                                                           | [Vercel — environment variables](https://vercel.com/docs/environment-variables)                                                                          | documentation éditeur                                   | 2026-07-21   | élevée    | preuve accès             | transférer les configurations et remplacer les clés sensibles                               |
| `npm ci` exige un fichier de verrouillage cohérent avec `package.json` et échoue en cas d'écart au lieu de modifier les fichiers de dépendances.                                                                         | [npm — npm ci](https://docs.npmjs.com/cli/commands/npm-ci/), description et conditions                                                                   | documentation officielle                                | 2026-07-21   | élevée    | preuve code              | utiliser une installation propre comme preuve reproductible                                 |
| Les sauvegardes de base Supabase ne contiennent pas les objets de Storage API.                                                                                                                                           | [Supabase — backups](https://supabase.com/docs/guides/platform/backups), section Storage                                                                 | documentation officielle                                | 2026-07-21   | élevée    | preuve données           | sauvegarder séparément les fichiers envoyés par les utilisateurs                            |
| Pour une sortie de Lovable Cloud, les données utilisateurs sont exportables, mais pas leurs mots de passe ; un parcours de réinitialisation doit être prévu.                                                             | [Lovable — external deployment](https://docs.lovable.dev/tips-tricks/external-deployment-hosting), tableau de migration, ligne « User accounts »         | documentation éditeur, cas Lovable Cloud seulement      | 2026-07-21   | élevée    | preuve données           | ne pas promettre une migration invisible des comptes                                        |
| Les clés secrètes ou `service_role` ne doivent jamais être placées côté navigateur ; elles peuvent contourner les règles de ligne de Supabase.                                                                           | [Supabase — API keys](https://supabase.com/docs/guides/getting-started/api-keys) et [secure data](https://supabase.com/docs/guides/database/secure-data) | documentation officielle                                | 2026-07-21   | élevée    | preuve accès             | rechercher les clés exposées, les remplacer et tester les droits                            |
| Le secret scanning de GitHub recherche des formats de secrets connus dans l'historique ; un secret exposé doit être révoqué ou remplacé.                                                                                 | [GitHub — secret scanning](https://docs.github.com/en/code-security/concepts/secret-security/secret-scanning)                                            | documentation officielle                                | 2026-07-21   | élevée    | preuve accès             | un scan aide, mais ne garantit pas qu'aucun secret n'existe                                 |
| Les droits sur le code, les contenus et les services tiers dépendent des contrats et licences applicables ; l'utilisateur reste responsable de l'évaluation des sorties IA et des droits de tiers.                       | [Vercel — AI Product Terms](https://vercel.com/legal/ai-product-terms) et [Terms](https://vercel.com/legal/terms)                                        | conditions contractuelles générales, pas avis juridique | 2026-07-21   | moyenne   | preuve contrats          | faire un inventaire et demander un avis juridique en cas d'incertitude matérielle           |

### Contradictions et données à ne pas publier

- ne pas écrire « le code Lovable est toujours du React/Vite » ; la technique
  dépend du projet et de sa date ;
- ne pas écrire « vous possédez forcément tout » ; distinguer le code produit,
  les contenus, les éléments tiers, les comptes et les conditions applicables ;
- ne pas présenter un export CSV comme une sauvegarde restaurable de toute
  l'application ;
- ne pas confondre le retour à une version du code avec le retour à une version
  des données ;
- ne pas annoncer qu'un scan intégré, GitHub ou automatisé prouve la sécurité ;
- ne pas donner de prix, de durée ou de pourcentage de code réutilisable sans
  examen du projet ;
- ne pas dire qu'une réécriture totale est toujours plus propre ou qu'une
  conservation est toujours moins chère.

### Recommandations explicitement éditoriales

- exécuter les cinq preuves sur une copie ou un environnement isolé ;
- remplacer les secrets potentiellement partagés avant un transfert de
  responsabilité ;
- décider après les preuves, pas après l'apparence du code ;
- conserver la partie qui fonctionne lorsqu'elle est reproductible et
  maîtrisée ;
- préférer un remplacement progressif quand seul un sous-ensemble bloque la
  suite ;
- arrêter ou reporter si le produit n'a pas démontré de besoin et que la
  reprise n'apporterait aucune décision commerciale utile.

## 6. Empreinte éditoriale à ne pas reproduire

| Guide voisin                       | Ouverture                    | Progression dominante              | Dispositif principal   | Conclusion         |
| ---------------------------------- | ---------------------------- | ---------------------------------- | ---------------------- | ------------------ |
| signes besoin logiciel métier      | irritations opérationnelles  | trois situations puis six réponses | cartes de décisions    | phrase de décision |
| reprendre logiciel métier existant | continuité d'une application | audit large puis plan de reprise   | plusieurs tableaux     | trois options      |
| créer un site avec IA              | choix initial                | panorama d'outils et limites       | comparaisons           | choix de méthode   |
| MVP SaaS : quoi inclure            | périmètre du premier produit | fonctions, validation, budget      | checklist de périmètre | cadrage du MVP     |

Choix du nouveau guide :

```text
Question motrice : est-ce qu'un développeur peut reprendre ce que j'ai déjà créé sans tout jeter ?
Ouverture : dialogue intérieur d'un fondateur devant une démo qui fonctionne mais dont il ne maîtrise pas les dessous
Progression : cinq preuves exécutées, puis seulement la décision
Artefact signature : dossier de reprise copiable en une page
Rythme : phrases concrètes, exemples courts, une preuve = une conséquence
Place du CTA : après les cinq preuves et les cinq décisions, quand le lecteur sait ce qu'il demande
Conclusion : ordre des trois prochaines actions, sans nouveau verdict abstrait
Différences : pas de score ; pas de grand tableau ; pas de calendrier générique ; pas de prix ; décision conditionnée à des tests exécutés
```

## 7. Plan annoté

| Section provisoire                              | Question résolue                                          | Preuve ou exemple                                             | Décision produite                          | Format               |
| ----------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------ | -------------------- |
| Réponse immédiate                               | faut-il tout jeter ?                                      | une démo n'est ni une preuve de reprise ni une preuve d'échec | tester avant de promettre                  | ouverture + encadré  |
| Ce que le fichier ZIP ne contient pas           | qu'est-ce qui compose réellement l'application ?          | code, données, fichiers, clés, comptes, domaine               | inventaire complet                         | liste illustrée      |
| Preuve 1 — reconstruire                         | le code peut-il repartir de zéro ?                        | clone propre, verrouillage, installation et build             | conserver ou examiner les erreurs          | protocole court      |
| Preuve 2 — déployer                             | peut-on publier sans le bouton d'origine ?                | déploiement indépendant, variables et domaine                 | réduire la dépendance ou la nommer         | protocole court      |
| Preuve 3 — récupérer données et fichiers        | peut-on sauver et restaurer ce qui compte ?               | distinction base/Storage/versions                             | sécuriser avant toute modification         | scénario concret     |
| Preuve 4 — tester accès et secrets              | les utilisateurs voient-ils seulement ce qu'ils doivent ? | comptes ordinaires, règles, clés et intégrations              | corriger ou isoler avant ouverture         | parcours utilisateur |
| Preuve 5 — vérifier comptes, licences et droits | l'entreprise contrôle-t-elle ce qu'elle finance ?         | dépôt, plateforme, backend, domaine, paiements, contrats      | transférer, documenter ou demander conseil | checklist            |
| Décider après les preuves                       | conserver, stabiliser, migrer, réécrire ou arrêter ?      | conditions observables                                        | choix honnête                              | cinq cartes sobres   |
| Préparer le dossier de reprise                  | que remettre à un développeur ?                           | fiche copiable                                                | action autonome                            | FormulaBox           |
| Faire examiner sans abandonner le contrôle      | que doit livrer un audit ?                                | preuves, inconnues, options et prochaine étape                | CTA puis limites                           | CTA + conclusion     |

## 8. Ressource et conversion

```text
Ressource téléchargeable nécessaire : non pour cette première version ; une fiche copiable dans la page suffit
Problème résolu : éviter un devis fondé sur une simple démonstration ou sur la peur de tout refaire
Résultat autonome : un dossier de reprise avec les actifs, accès, inconnues et cinq preuves demandées
Conclusion « ne pas investir » possible : oui, si le besoin n'est pas confirmé ou si le coût de reprise n'apporte aucune décision utile
Bon fit Hagnéré Code : MVP accessible, objectif métier explicite, dépôt ou accès à récupérer, responsable disponible
Mauvais fit : incident cyber en cours, litige de propriété, demande de garantie juridique, absence totale d'accès et de personne habilitée
CTA principal : Faire examiner mon MVP
Résultat après clic : savoir ce qui semble récupérable, quel premier test lancer et si un audit de reprise est justifié
Données proposées au prospect : URL, plateforme, backend, dépôt si disponible, problème principal et accès manquants ; ne jamais demander un secret dans le formulaire
```

## Rapport P1 — Recherche

```text
PASSE 1 TERMINÉE
Slug : reprendre-mvp-vibe-code
Lecteur et phrase réelle : fondateur avec une démo Lovable, Bolt ou v0 qui demande si un développeur peut continuer sans tout refaire
Décision : conserver, stabiliser, migrer, réécrire une partie ou arrêter après cinq preuves
Angle et forme dominante : preuves exécutées, sans score ni réécriture présumée
Pages proches et différence : création avec IA, MVP et reprise d'un logiciel existant ; aucune ne traite l'état hors du code d'un MVP généré
Sources décisives : documentations Lovable, Bolt, v0/Vercel, Supabase, npm et GitHub, consultées le 21 juillet 2026
Incertitudes exclues : prix, durée, pourcentage réutilisable, sécurité garantie et conclusion juridique sur la propriété
Action autonome et CTA : constituer le dossier de reprise ; demander seulement ensuite un examen ciblé
Plan : réponse, inventaire, cinq preuves, cinq décisions, dossier copiable, audit et limites
Snapshot : manifeste P1
```

## Rapport P2 — Rédaction et intégration

```text
PASSE 2 TERMINÉE
Fichiers créés ou modifiés : page, image sociale, registre, dossier de recherche et deux liens entrants
Ouverture et réponse : situation réelle d'un fondateur, réponse « souvent oui » et cinq vérifications nommées dans les 150 premiers mots
Forme propre au sujet : huit couches de l'application, cinq tests exécutés puis cinq décisions sans score
Exemples ou calculs : aucun prix, délai, taux de réutilisation ou calcul inventé
Sources visibles : Lovable, Bolt, v0/Vercel, Supabase, npm et GitHub placés près des affirmations qu'ils soutiennent
Action autonome : dossier de reprise copiable, sans collecte de secret
CTA : URL, outil, dépôt s'il existe et blocage principal ; résultat attendu précisé ; un seul CTA
Contrôles rapides : Prettier, ESLint et TypeScript réussis ; 47/47 tests ciblés réussis ; git diff --check réussi
Snapshot : page 149c58f…, OG 088c99a…, registre 1752155…, liens entrants 07a28db… et 2faf957…
```

### Snapshot P2

| Fichier                                                      | SHA-256                                                            |
| ------------------------------------------------------------ | ------------------------------------------------------------------ |
| `src/app/guides/reprendre-mvp-vibe-code/page.tsx`            | `149c58fbe929176580c31c366f7b44b0fe1ce82d55c35ae151da97a2573b85eb` |
| `src/app/guides/reprendre-mvp-vibe-code/opengraph-image.tsx` | `088c99adc5eb2c7e3f771b273886f9dcd3d53c52ed6de7b08df513c65fb07022` |
| `src/lib/guides.ts`                                          | `175215509d81aa70e3abe8527a499cdbbed8c0a5ca56c324a18c6288c1e7f679` |
| `src/app/guides/creer-un-site-avec-ia/page.tsx`              | `07a28db017339ddf779467b3bde44f462ddf2744ac5f5b18b63a9425141240fe` |
| `src/app/guides/reprendre-logiciel-metier-existant/page.tsx` | `2faf95705b2c0629d1b1ed8c30f8f05f84af22362443bfca40a9ff9e165e899c` |
| `docs/roadmap-guides-seo.md`                                 | `44fe2ace46d1e5830886c57dac72d2481c9913bbab18a8494713400173867e4f` |

## Rapport P3 — Contre-audit indépendant

```text
PASSE 3 TERMINÉE
Snapshot d'entrée : page 149c58f…, OG 088c99a…, registre 1752155…
Relecteur distinct : oui ; lecture seule et réouverture des documentations officielles
P0 initial : l'intégration Lovable/GitHub était décrite à tort comme une source de vérité unique
P1 initiaux : migration des mots de passe trop générale ; jargon non traduit ; installation dans un simple dossier ; mauvais fits tardifs ; comparaison économique incomplète
Corrections factuelles : export et synchronisation Lovable reformulés ; sortie Lovable Cloud distinguée des autres services ; sources adjacentes
Corrections de sécurité : installation dans un environnement temporaire sans donnée réelle ni accès sensible ; réserve recopiée dans l'artefact autonome
Corrections pédagogiques : MVP, dépôt, Node, construction et variables expliqués ; mise en ligne et historique des erreurs employés dans les titres et questions
Corrections de décision : incident, litige et absence d'accès orientés avant les tests ; cinq options comparées sur travaux, abonnements, interruption, temps interne, données, retour arrière et inconnues
Corrections P2 : disponibilité du secret scanning qualifiée ; lien v0 Projects adjacent ; CTA et compteurs du hero allégés
Revalidation finale indépendante : P0 = 0 ; P1 = 0
Contrôles : 184/184 tests SEO, ESLint ciblé et git diff --check réussis
Snapshot de sortie : page 05d2a65…, OG 088c99a…, registre bf4ad05…, recherche avant rapport 5c66e83…
Verdict : porte P3 validée ; passage en P4 autorisé
```

### Snapshot P3

| Fichier                                                      | SHA-256                                                            |
| ------------------------------------------------------------ | ------------------------------------------------------------------ |
| `src/app/guides/reprendre-mvp-vibe-code/page.tsx`            | `05d2a652530845d2a422a76f1475e40827d3773fcb95bfc5746aaa812a856d9b` |
| `src/app/guides/reprendre-mvp-vibe-code/opengraph-image.tsx` | `088c99adc5eb2c7e3f771b273886f9dcd3d53c52ed6de7b08df513c65fb07022` |
| `src/lib/guides.ts`                                          | `bf4ad05c942c99e1dd4e03798511c8ee6233225e33b9855c2c4d0fa374821ff8` |
| `src/app/guides/creer-un-site-avec-ia/page.tsx`              | `07a28db017339ddf779467b3bde44f462ddf2744ac5f5b18b63a9425141240fe` |
| `src/app/guides/reprendre-logiciel-metier-existant/page.tsx` | `2faf95705b2c0629d1b1ed8c30f8f05f84af22362443bfca40a9ff9e165e899c` |
| `docs/roadmap-guides-seo.md`                                 | `44fe2ace46d1e5830886c57dac72d2481c9913bbab18a8494713400173867e4f` |

## Rapport P4 — Finition humaine, rendu et décision

```text
PASSE 4 TERMINÉE
Verdict éditorial : publiable — validation éditoriale déléguée
Décision de publication : autorisée explicitement par le commanditaire
Test réalisé par une personne réelle : non
Score : 20/20
Lecture humaine simulée : la question du fondateur est posée avant le vocabulaire technique ; chaque terme nécessaire est expliqué au moment où il apparaît ; les cinq vérifications conduisent à une décision concrète
Passe anti-IA : vérification de l’absence de slogans, métaphores de consultant, transitions mécaniques et conclusions abstraites ; les corrections de plume avaient été intégrées et revalidées en P3, donc aucune nouvelle modification sémantique de la page n’a été requise en P4
Contrôle mobile : largeurs exactes 320 et 390 px, sans débordement horizontal, ancre manquante ni élément masqué
Contrôle large : 1024 et 1440 px, sans débordement ; hero, cartes, dossier copiable, CTA et FAQ inspectés
Accessibilité fonctionnelle : un H1 ; hiérarchie de titres cohérente ; huit FAQ ouvrables au clavier ; lien d’évitement et CTA présents ; aucun avertissement ni erreur console
SEO local : canonical exact, deux blocs JSON-LD, huit FAQ, image sociale 1200 × 630 ; noindex temporaire conservé tant que le lot de trois guides n’est pas gelé
Image sociale : texte final « mise en ligne » et « cinq vérifications » lisible ; cinq éléments et cinq décisions visibles sans coupe
Réserve explicite : aucun prix, délai, pourcentage de code récupérable, garantie de sécurité ou avis juridique n’est déduit sans audit du projet
Décision de lot : retirer le statut ready-for-human-review uniquement lors du gel commun des trois guides, après les tests complets du dépôt
Snapshot : manifeste P4
```

### Scorecard justifiée

| Axe         |      Note | Preuve dans la page                                                                           | Correction éventuelle |
| ----------- | --------: | --------------------------------------------------------------------------------------------- | --------------------- |
| Intention   |         2 | Le fondateur part de son prototype existant et de la question « faut-il tout jeter ? »        | —                     |
| Décision    |         2 | Conserver, stabiliser, migrer, réécrire ou arrêter selon cinq preuves exécutées               | —                     |
| Pédagogie   |         2 | Code, dépôt, construction, données, comptes et secrets expliqués au moment utile              | —                     |
| Profondeur  |         2 | Construction, mise en ligne, données, accès, dépendances et exploitation sont séparés         | —                     |
| Preuve      |         2 | Documentations Lovable, Bolt, v0/Vercel, Supabase, GitHub et npm adjacentes aux affirmations  | —                     |
| Comparaison |         2 | Les cinq décisions sont comparées sur travaux, risques, interruption, coûts et retour arrière | —                     |
| Originalité |         2 | Cinq tests exécutables puis dossier de reprise copiable, sans score technique arbitraire      | —                     |
| Style       |         2 | Question du fondateur, phrases concrètes et absence de verdict fondé sur l’esthétique du code | —                     |
| Conversion  |         2 | Action autonome complète, mauvais cas avant test et CTA limité à un premier avis              | —                     |
| SEO/produit |         2 | Métadonnées, canonical, Article/Breadcrumb, FAQ, OG et rendu responsive contrôlés             | —                     |
| **Total**   | **20/20** | Porte éditoriale et technique individuelle atteinte                                           | QA de lot à rejouer   |

### Snapshot P4

| Fichier                                                      | SHA-256                                                            |
| ------------------------------------------------------------ | ------------------------------------------------------------------ |
| `src/app/guides/reprendre-mvp-vibe-code/page.tsx`            | `05d2a652530845d2a422a76f1475e40827d3773fcb95bfc5746aaa812a856d9b` |
| `src/app/guides/reprendre-mvp-vibe-code/opengraph-image.tsx` | `a6379051f1108d40d8e93995b17b01ddc247c9b0fba0039deb3c642170d8a01d` |
| `src/lib/guides.ts`                                          | `bf4ad05c942c99e1dd4e03798511c8ee6233225e33b9855c2c4d0fa374821ff8` |
| `docs/research/reprendre-mvp-vibe-code.md` (entrée P4)       | `7da7b4f336611b41c764e55382ea2d2d93af52f1b4bc0429c5c28f54adb1959e` |
| `src/app/guides/creer-un-site-avec-ia/page.tsx`              | `07a28db017339ddf779467b3bde44f462ddf2744ac5f5b18b63a9425141240fe` |
| `src/app/guides/reprendre-logiciel-metier-existant/page.tsx` | `2faf95705b2c0629d1b1ed8c30f8f05f84af22362443bfca40a9ff9e165e899c` |
| `docs/roadmap-guides-seo.md`                                 | `44fe2ace46d1e5830886c57dac72d2481c9913bbab18a8494713400173867e4f` |

## Gel commun du lot

Le 21 juillet 2026, le marqueur `ready-for-human-review` a été retiré après la
validation des trois dossiers et l’ajout du slug au contrôle de gouvernance.
Le snapshot commun passe 184/184 tests SEO, 328/328 tests globaux, ESLint,
TypeScript et le build de production. L’artefact vérifie 88 URL, 71 liens dans
`llms.txt`, 46 temps de lecture et 164 blocs JSON-LD. La page est donc
indexable dans l’artefact de production ; cela ne prouve ni son crawl, ni son
indexation effective, ni son classement.

### Snapshot commun final

| Fichier                                                      | SHA-256                                                            |
| ------------------------------------------------------------ | ------------------------------------------------------------------ |
| `src/app/guides/reprendre-mvp-vibe-code/page.tsx`            | `92711d6f5020bd5a210c36e17f1adbcb284d15412fd2241a3779c59799e68925` |
| `src/app/guides/reprendre-mvp-vibe-code/opengraph-image.tsx` | `a6379051f1108d40d8e93995b17b01ddc247c9b0fba0039deb3c642170d8a01d` |
| `src/app/guides/creer-un-site-avec-ia/page.tsx`              | `07a28db017339ddf779467b3bde44f462ddf2744ac5f5b18b63a9425141240fe` |
| `src/app/guides/reprendre-logiciel-metier-existant/page.tsx` | `2faf95705b2c0629d1b1ed8c30f8f05f84af22362443bfca40a9ff9e165e899c` |
| `src/lib/guides.ts`                                          | `b1d1f628949d73648fdb1a3d80922f7ca71ee0f48e1388db22fb87b4671f0318` |
| `src/lib/editorial-governance.test.ts`                       | `e79ed862c4af56ab56ed31d29d0d5a116c10db06ec5fc21dd302c34d51864ab8` |
| `docs/roadmap-guides-seo.md`                                 | `c0fc92baccd3adb3999ccc09827cd7423fc9c4933e089486bf018f91137be619` |

Le manifeste externe `manifests/lot-trois-guides-final.sha256` gèle également
les trois dossiers de recherche sans tenter de faire hacher le manifeste par
lui-même.
