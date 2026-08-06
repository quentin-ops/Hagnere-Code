# Dossier de recherche P1-P4 — `lovable-bolt-v0-ou-agence-saas`

> État : création éditoriale privée, **non publiée**.
> Recherche et consultation des sources : **6 août 2026**.
> Snapshot d’entrée : `5f305b0cc6566c093b86a7234b64c0b5291eaeb4`.
> Passes : P1 de création, P2 factuelle contradictoire, P3 de polish
> rédactionnel puis P4 antipasse IA, toutes limitées aux fichiers propres au
> slug.
> Protocole comparatif : conçu mais **non exécuté** ; aucun vainqueur, délai,
> prix, score de sécurité ou résultat de benchmark n’est avancé.

## A. Décision, lecteur et frontières

### A1. Question exacte

Le lecteur est un dirigeant, porteur de projet ou responsable produit qui se
demande : « Puis-je construire le prochain test de mon SaaS avec Lovable, Bolt
ou v0, faut-il le faire revoir, confier la construction à une équipe, ou
renoncer pour l’instant ? »

La page doit lui permettre de choisir **le prochain mode de construction**, pas
un outil pour toujours. La décision dépend de la preuve recherchée et de la
personne qui assumera les comptes, le code, les données, le déploiement, les
secrets, les incidents et la reprise.

### A2. Réponse éditoriale

Quatre sorties sont loyales :

1. construire un prototype autonome avec des données fictives lorsque le test
   est borné, réversible et sans conséquence client ;
2. construire puis faire revoir lorsque le parcours peut être prototypé seul,
   mais que le code, les accès, les données ou le déploiement doivent être
   qualifiés avant un usage réel ;
3. construire avec accompagnement lorsque le test engage des identités, des
   données personnelles, des paiements, des rôles complexes, une intégration
   critique ou une promesse de service ;
4. simplifier ou différer lorsque le besoin, le propriétaire d’exploitation,
   les droits, la sortie ou la capacité de corriger restent inconnus.

Lovable, Bolt et v0 ne sont pas trois enveloppes interchangeables. Leur modèle
de projet, leur pile par défaut, leur hébergement, leurs versions, leurs bases,
leurs exports et leurs contrôles diffèrent. La comparaison utile porte donc sur
un **colis de remise identique**, adapté au périmètre réel de chaque projet.

### A3. Ce que la page ne dira pas

- aucun « meilleur AI builder » universel ;
- aucun résultat de test ou de performance non exécuté ;
- aucun coût, nombre de jours, gain ou tarif moyen inventé ;
- aucune certification de sécurité déduite d’un scanner ;
- aucune conformité RGPD déduite du choix d’un fournisseur ;
- aucune propriété juridique déduite du simple téléchargement d’un ZIP ;
- aucune promesse qu’un export de tables permet une restauration complète ;
- aucune affirmation qu’une agence garantit la maintenabilité ou la réussite ;
- aucune date de publication : `datePublished` reste un STOP d’intégration.

### A4. Cannibalisation

| Page voisine                | Question qu’elle traite                   | Frontière du guide #33                                                               |
| --------------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------ |
| `mvp-prototype-ou-poc`      | quel type de test construire              | ici : qui construit et quelles responsabilités sont déjà nécessaires                 |
| `mvp-saas-quoi-inclure`     | quel socle inclure dans un MVP            | ici : quel mode de construction permet de prouver le prochain jalon                  |
| `bubble-ou-saas-sur-mesure` | une plateforme précise face au code dédié | ici : trois environnements IA face à quatre niveaux d’accompagnement                 |
| `agence-saas-ou-freelance`  | quelle forme de prestataire choisir       | ici : faut-il déjà mobiliser un professionnel                                        |
| `reprendre-mvp-vibe-code`   | comment auditer un prototype existant     | ici : décision avant le premier produit ; route historique non traitée comme publiée |
| service SaaS                | présenter une prestation                  | ici : méthode capable de conclure « seul », « simplifier » ou « différer »           |

Les slugs historiques `reprendre-mvp-vibe-code` et
`no-code-ou-sur-mesure` ne sont pas utilisés comme liens publics. Le seul CTA
commercial prévu est `/demarrer-un-projet`, tardif et facultatif.

## B. Demande, SERP et angle original

### B1. Requêtes et vocabulaire

Requêtes observées le 6 août 2026 : `Lovable vs Bolt vs v0`, `Lovable Bolt v0
comparison 2026`, `Lovable ou Bolt SaaS`, `v0 full stack app`, `Bolt security
audit`, `agence SaaS Lovable`. Aucun volume ni niveau de concurrence n’est
disponible ; Search Console et Keyword Planner n’ont pas été consultés.

Mots du lecteur à préserver : idée, prototype, compte, données, dépôt, version,
domaine, accès, secret, erreur, sauvegarde, retour arrière, reprise, personne
qui corrige. Traduire les termes techniques au premier usage.

### B2. Lecture des résultats

| Famille de résultats observée        | Exemple daté               | Apport                                        | Limite ou biais                                             |
| ------------------------------------ | -------------------------- | --------------------------------------------- | ----------------------------------------------------------- |
| Comparaison d’éditeur                | Lovable, 27 octobre 2025   | inventaire de sa propre offre                 | vendeur, ancien sur v0 et sur les scans Lovable             |
| Comparatifs indépendants ou affiliés | articles 2025–juillet 2026 | captures et prises en main                    | périmètres, plans, prompts et intérêts rarement comparables |
| Documentation officielle             | Lovable, Bolt, v0/Vercel   | fonctions et limites actuelles                | décrit un produit, pas la qualité de l’application obtenue  |
| Agences et intégrateurs              | pages commerciales         | font apparaître maintenance et responsabilité | vendent l’accompagnement, comme Hagnéré Code                |

La page Lovable « Lovable vs Bolt vs v0 » reste utile comme trace de SERP, mais
elle qualifie v0 de façon aujourd’hui réductrice : la documentation v0 actuelle
décrit explicitement des applications full-stack. Elle mentionne aussi un état
ancien des contrôles Lovable. Elle ne sert donc pas de source factuelle pour le
comparatif courant.

### B3. Angle différenciant : la chaîne de garde du produit

Les listes de fonctions répondent à « que peut ouvrir l’interface ? ». Le guide
répond à « qu’est-ce qu’une autre personne pourra reprendre et assumer ? ».

Chaque preuve passe entre quatre rôles :

- **gardien nommé** : personne responsable de produire ou conserver la preuve ;
- **témoin** : seconde personne qui vérifie sans se fier à la mémoire du
  gardien ;
- **pièce brute** : dépôt, export, journal, capture datée, procédure ou résultat
  reproductible ;
- **contre-preuve** : tentative volontaire de faire échouer la règle ;
- **seuil de transfert** : condition observable permettant à un tiers de
  reprendre.

Cette signature remplace l’ancienne progression « un lien / premier client »,
les « huit preuves identiques » et la chronologie « mois 1 / mois 13 ». Elle
organise la décision comme une remise de responsabilité, station par station.

## C. Recherche primaire et registre des faits

### C1. Lovable — état documenté au 6 août 2026

| ID  | Statut  | Fait borné                                                                                                                                                                                                                                                                                                                                                                                                             | Source primaire                                                                                                                      | Conséquence lecteur                                                                                                                           |
| --- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| L01 | FAIT    | La publication met en ligne la version courante ; les changements ultérieurs ne sont pas publiés automatiquement et exigent une mise à jour.                                                                                                                                                                                                                                                                           | [Lovable — Publish](https://docs.lovable.dev/features/publish), consulté le 6 août 2026, documentation éditeur                       | distinguer prévisualisation, version publiée et version en travail                                                                            |
| L02 | FAIT    | L’accès au projet — éditeur, code et conversation — est distinct de l’accès au site publié.                                                                                                                                                                                                                                                                                                                            | [Lovable — Project visibility](https://docs.lovable.dev/features/project-visibility), consulté le 6 août 2026                        | tester séparément qui peut éditer et qui peut utiliser le site                                                                                |
| L03 | FAIT    | Le code reste stocké et géré dans Lovable. Une connexion GitHub crée un nouveau dépôt privé et permet une copie/synchronisation bidirectionnelle ; Lovable n’édite et ne synchronise qu’une branche active à la fois. Renommer le dépôt est documenté comme sûr ; transférer le dépôt, renommer le compte ou l’organisation GitHub, supprimer le dépôt ou déconnecter l’intégration peut rompre ou recréer la liaison. | [Lovable — GitHub](https://docs.lovable.dev/integrations/github), consulté le 6 août 2026                                            | ne pas appeler GitHub « source de vérité » par déduction ; garder dépôt, droits et tests de reprise sous contrôle de l’entreprise             |
| L04 | FAIT    | Les nouveaux projets créés à partir du 13 mai 2026 utilisent TanStack Start avec rendu serveur, sauf contexte Enterprise indiqué ; les anciens restent sur React et Vite.                                                                                                                                                                                                                                              | [Lovable — FAQ](https://docs.lovable.dev/introduction/faq), consulté le 6 août 2026                                                  | dater et inspecter le projet réel avant de parler de pile ou de reprise                                                                       |
| L05 | FAIT    | Les projets Cloud nouveaux ne disposent plus de Test/Live depuis le 24 mars 2026 ; les projets qui avaient déjà la fonction la conservent.                                                                                                                                                                                                                                                                             | [Lovable — Environments](https://docs.lovable.dev/features/environments), consulté le 6 août 2026                                    | ne pas promettre deux environnements intégrés à un nouveau projet                                                                             |
| L06 | FAIT    | Pour les projets qui conservent Test/Live, la première copie porte sur structure, données et configuration ; les publications suivantes synchronisent la structure, pas les données ni la configuration. Des sauvegardes sont créées avant publication et la restauration passe par le support selon la page.                                                                                                          | même source                                                                                                                          | une sauvegarde fournisseur n’est pas une procédure de restauration autonome                                                                   |
| L07 | FAIT    | Le contrôle Basic recherche notamment des problèmes de règles RLS, de schéma et de dépendances ; Deep ajoute des contrôles d’accès, de backend et de code. Deep n’est pas automatique. Des problèmes critiques peuvent être publiés malgré l’avertissement, sauf politique de blocage d’espace de travail.                                                                                                             | [Lovable — Security](https://docs.lovable.dev/features/security), consulté le 6 août 2026                                            | un scan est une alerte, pas un certificat ; vérifier si Deep a réellement été lancé et ce qui reste ouvert                                    |
| L08 | FAIT    | Lovable précise que ses outils de sécurité ne remplacent pas une revue complète, que le client reste responsable et qu’une sécurité complète n’est pas garantie.                                                                                                                                                                                                                                                       | même source                                                                                                                          | la décision de production reste humaine et projet-spécifique                                                                                  |
| L09 | FAIT    | Les secrets du Cloud sont injectés côté serveur et peuvent être utilisés par des fonctions ; des journaux sont disponibles.                                                                                                                                                                                                                                                                                            | [Lovable — Cloud](https://docs.lovable.dev/integrations/cloud), consulté le 6 août 2026                                              | tester rotation, révocation et lecture des journaux ; ne pas placer le secret dans le dépôt                                                   |
| L10 | INCONNU | La page de portabilité parle de Vite + React alors que la FAQ courante décrit TanStack Start pour les nouveaux projets.                                                                                                                                                                                                                                                                                                | [Lovable — Hosting & ownership](https://docs.lovable.dev/tips-tricks/deployment-hosting-ownership) et FAQ, consultées le 6 août 2026 | contradiction fournisseur : inspecter le dépôt et son build, ne pas généraliser                                                               |
| L11 | INCONNU | La page de conditions visible est « last updated 16 June 2026 » et indique une prise d’effet au 15 août 2026, sauf acceptation expresse plus tôt.                                                                                                                                                                                                                                                                      | [Lovable — Terms](https://lovable.dev/terms), consulté le 6 août 2026                                                                | au 6 août, demander la version effectivement acceptée par le compte et l’éventuel contrat/plan ; ne pas appliquer automatiquement ces clauses |
| L12 | FAIT    | Tout utilisateur peut activer un opt-out d’entraînement sur tout plan, mais seulement pour ses propres données. L’opt-out de toutes les données d’un espace est réservé aux administrateurs et propriétaires Business ou Enterprise. La page précise par ailleurs que des données client non identifiantes peuvent servir à l’entraînement ou à d’autres finalités selon les conditions.                               | [Lovable — Data opt-out](https://docs.lovable.dev/features/business/data-opt-out), consulté le 6 août 2026                           | relever le plan et les deux réglages ; ne pas déduire l’absence d’entraînement d’un opt-out individuel ni d’un libellé « privé »              |
| L13 | FAIT    | Lovable utilise une balance de crédits pour la construction, le Cloud et l’IA embarquée, mais ces trois usages ont des modes de calcul et des facteurs distincts ; le déploiement consomme donc autre chose que les seuls messages de génération.                                                                                                                                                                      | [Lovable — Credits and usage](https://docs.lovable.dev/introduction/credits-and-usage), consulté le 6 août 2026                      | mesurer construction et exécution séparément ; ne pas comparer un crédit Lovable à un jeton Bolt ou un crédit v0                              |

### C2. Bolt — état documenté au 6 août 2026

| ID  | Statut  | Fait borné                                                                                                                                                                                                                                                                                                                                                                       | Source primaire                                                                                                                                                                   | Conséquence lecteur                                                                                                                         |
| --- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| B01 | FAIT    | L’audit complet examine projet et base, signale ou propose des corrections ; il est réservé aux plans payants. Un contrôle de base de données plus léger existe pour tous les plans.                                                                                                                                                                                             | [Bolt — Security](https://support.bolt.new/building/security), consulté le 6 août 2026                                                                                            | consigner quel contrôle a été exécuté, ne pas appeler les deux « audit complet »                                                            |
| B02 | FAIT    | La page indique jusqu’à 30 audits complets par jour, remis à zéro à minuit UTC.                                                                                                                                                                                                                                                                                                  | même source                                                                                                                                                                       | limite volatile : la dater uniquement si elle devient nécessaire au protocole, sinon ne pas l’afficher                                      |
| B03 | FAIT    | Revenir à une version antérieure retire les changements de sécurité ajoutés après cette version.                                                                                                                                                                                                                                                                                 | même source                                                                                                                                                                       | après tout rollback, rejouer les contrôles et la revue                                                                                      |
| B04 | FAIT    | L’historique, les sauvegardes manuelles, GitHub et le ZIP couvrent le code ; la restauration d’une version ne modifie pas la base Bolt ou Supabase.                                                                                                                                                                                                                              | [Bolt — Version history, backups and export](https://support.bolt.new/building/using-bolt/rollback-backup), consulté le 6 août 2026                                               | séparer rollback du code et restauration des données                                                                                        |
| B05 | FAIT    | Le téléchargement ZIP est disponible dans Export.                                                                                                                                                                                                                                                                                                                                | même source                                                                                                                                                                       | prouver ensuite installation, variables, build et déploiement ; le ZIP seul n’est pas une reprise                                           |
| B06 | FAIT    | Les nouveaux projets utilisent Bolt Database par défaut. Le choix de Supabase au démarrage est disponible sur les plans payants, exige une connexion Supabase et n’est actuellement pris en charge que pour les projets Vite ; Next.js ne l’est pas. Une base Bolt peut être revendiquée dans Supabase, mais la direction Supabase vers Bolt Database n’est pas prise en charge. | [Bolt — Supabase](https://support.bolt.new/integrations/supabase), consulté le 6 août 2026                                                                                        | vérifier plan, framework, base réelle et direction de migration avant de choisir une sortie                                                 |
| B07 | FAIT    | Connecter Supabase à un projet possédant déjà Bolt Database peut remplacer la connexion et causer une perte de données ; la procédure « claim » est documentée pour conserver le projet.                                                                                                                                                                                         | même source                                                                                                                                                                       | copie et essai de restauration avant toute migration                                                                                        |
| B08 | FAIT    | Les lignes d’une ou de toutes les tables peuvent être exportées en CSV ou JSON.                                                                                                                                                                                                                                                                                                  | [Bolt — Database tables](https://support.bolt.new/cloud/database/tables), consulté le 6 août 2026                                                                                 | un export de lignes n’est ni schéma, ni identités, ni fonctions, ni restauration complète                                                   |
| B09 | FAIT    | Les effets de la duplication dépendent du contexte. La duplication de son propre projet copie code et réglages sans GitHub/Netlify ; avec Bolt Database, la structure peut être copiée sans les données. La duplication d’un projet partagé ne copie ni schéma ni données. Le domaine personnalisé reste attaché à l’original.                                                   | [Bolt — Projects and files](https://support.bolt.new/building/using-bolt/projects-files), consulté le 6 août 2026                                                                 | nommer le mode de duplication et prouver séparément données, services et transfert de propriété                                             |
| B10 | FAIT    | Une publication Bolt Cloud peut exposer un site public ou privé ; les changements ne sont pas publiés automatiquement.                                                                                                                                                                                                                                                           | [Bolt — Publish](https://support.bolt.new/cloud/hosting/publish), consulté le 6 août 2026                                                                                         | vérifier publication et accès utilisateur séparément de la collaboration projet                                                             |
| B11 | FAIT    | Les secrets sont lus côté serveur par les fonctions ; la documentation recommande de ne pas les coder en dur et de les faire tourner.                                                                                                                                                                                                                                            | [Bolt — Secrets](https://support.bolt.new/cloud/database/secrets), consulté le 6 août 2026                                                                                        | documenter propriétaire, rotation et révocation                                                                                             |
| B12 | FAIT    | Une page d’assistance affirme que tout code créé avec Bolt/StackBlitz appartient au client et peut être utilisé légalement et commercialement.                                                                                                                                                                                                                                   | [Bolt — Corporate and commercial use](https://support.bolt.new/account-and-subscription/corporate-commercial), consulté le 6 août 2026                                            | information utile mais non suffisante pour qualifier sorties IA, composants tiers et plan                                                   |
| B13 | INCONNU | Les conditions StackBlitz, mises à jour le 10 janvier 2024, ne définissent pas expressément le régime des sorties IA Bolt actuelles et distinguent certains usages commerciaux du service. Cela ne constitue pas, à lui seul, une contradiction directe avec l’assertion du support sur le code.                                                                                 | [StackBlitz — Terms of Service](https://stackblitz.com/terms-of-service), consulté le 6 août 2026                                                                                 | vérifier conditions acceptées, plan, composants et droits tiers avant usage commercial ; ne pas transformer une lacune en conflit juridique |
| B14 | FAIT    | Bolt facture la construction en jetons ; ses limites d’hébergement portent séparément sur la bande passante et les requêtes, partagées au niveau du compte entre les sites.                                                                                                                                                                                                      | [Bolt — Tokens](https://support.bolt.new/account-and-subscription/tokens) et [Bolt Cloud — Hosting plans](https://support.bolt.new/cloud/hosting/plans), consultés le 6 août 2026 | mesurer génération et exécution séparément ; tester hausse de trafic, plafond et comportement d’arrêt                                       |
| B15 | FAIT    | La documentation Bolt affirme que les données du projet ne sont jamais utilisées pour entraîner les agents IA. Cette assertion éditeur ne documente pas à elle seule la conservation, les sous-traitants, les autres traitements ou le contrat applicable.                                                                                                                       | [Bolt — Introduction to LLMs](https://support.bolt.new/concepts/intro-llms), consulté le 6 août 2026                                                                              | conserver la portée exacte « données projet / entraînement des agents » et vérifier séparément les autres dimensions de confidentialité     |

### C3. v0 et Vercel — état documenté au 6 août 2026

| ID  | Statut | Fait borné                                                                                                                                                                                                                                                                                                       | Source primaire                                                                                                        | Conséquence lecteur                                                                                   |
| --- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| V01 | FAIT   | v0 documente la création d’applications full-stack. Next.js est la pile par défaut et la plus fiable ; routes App Router et server actions servent le côté serveur. D’autres frameworks sont possibles.                                                                                                          | [v0 — Full-stack apps](https://v0.app/docs/full-stack-apps), consulté le 6 août 2026                                   | ne pas réduire v0 à un générateur de maquettes ; inspecter toutefois le projet réel                   |
| V02 | FAIT   | v0 documente des connexions à Supabase, Neon et Upstash.                                                                                                                                                                                                                                                         | même source                                                                                                            | la donnée peut vivre hors du dépôt et exige sa propre preuve de sortie                                |
| V03 | FAIT   | Une fois GitHub connecté, le dépôt devient source de vérité ; chaque conversation travaille sur une branche dédiée, avec commits et pull requests, sans pousser directement sur `main`.                                                                                                                          | [v0 — GitHub](https://v0.app/docs/github), consulté le 6 août 2026                                                     | inclure revue/merge dans la chaîne de garde ; ne pas confondre génération et mise en production       |
| V04 | FAIT   | La suppression du dépôt peut rendre le code irrécupérable selon la documentation.                                                                                                                                                                                                                                | même source                                                                                                            | dépôt sous compte d’entreprise, protection et sauvegarde nécessaires                                  |
| V05 | FAIT   | Un projet regroupe plusieurs conversations autour d’une même application et partage déploiement, domaines et variables d’environnement. La visibilité du chat — privée, équipe, non répertoriée ou publique — est distincte de la visibilité Production réglée au projet et de l’accès aux ressources partagées. | [v0 — Projects](https://v0.app/docs/projects) et [v0 — Sharing](https://v0.app/docs/sharing), consultés le 6 août 2026 | inventorier séparément chats, rôles, production, ressources, branches et personnes autorisées         |
| V06 | FAIT   | « Publish to Production » déploie vers Vercel ; un projet a une URL de production.                                                                                                                                                                                                                               | [v0 — Deployments](https://v0.app/docs/deployments), consulté le 6 août 2026                                           | une production technique ne prouve ni validation métier ni sécurité applicative                       |
| V07 | FAIT   | Une version v0 est créée quand v0 met à jour un bloc de code en réponse à un message. Les modifications directes ou hors message ne créent pas nécessairement de version. Restaurer crée une nouvelle version la plus récente.                                                                                   | [v0 — Versions](https://v0.app/docs/versions), consulté le 6 août 2026                                                 | compléter par Git et tester quel état exact est restauré                                              |
| V08 | FAIT   | v0 annonce une analyse du code généré avant exécution, une sandbox et des protections de plateforme ; la documentation distingue les variables Next.js publiques et serveur.                                                                                                                                     | [v0 — Security](https://v0.app/docs/security), consulté le 6 août 2026                                                 | protections de génération/plateforme ≠ certification de la logique de l’application                   |
| V09 | FAIT   | Les conditions IA Vercel en vigueur depuis le 31 mars 2026 disent que les sorties peuvent être incomplètes, erronées ou causer défaillance, corruption ou perte ; le client doit les examiner.                                                                                                                   | [Vercel — AI Product Terms](https://vercel.com/legal/ai-product-terms), consulté le 6 août 2026                        | revue et tests restent obligatoires                                                                   |
| V10 | FAIT   | Dans la mesure permise, le client conserve ses droits sur son contenu et Vercel lui cède ses droits sur la sortie ; les sorties peuvent être non uniques. Le client doit vérifier l’usage commercial et les droits tiers.                                                                                        | même source                                                                                                            | ne pas promettre exclusivité ni absence de contrefaçon                                                |
| V11 | FAIT   | Les conditions excluent notamment les garanties de sécurité, performance, exactitude et absence d’atteinte aux droits. L’engagement de ne pas entraîner sur le contenu v0 s’applique à Enterprise ou à une autre offre habilitée à l’opt-out, sous réserve du consentement prévu.                                | même source                                                                                                            | vérifier offre, réglages et conditions ; ne pas généraliser confidentialité ou absence d’entraînement |
| V12 | FAIT   | v0 consomme des crédits pour les générations et le nombre de jetons par crédit dépend du modèle ; ces crédits ne couvrent pas automatiquement les ressources Vercel ni les services tiers de l’application.                                                                                                      | [v0 — Pricing](https://v0.app/docs/pricing), consulté le 6 août 2026                                                   | séparer coût de génération, exécution Vercel, bases/API externes et travail humain                    |

### C4. Protection des données et développement

| ID  | Statut | Fait borné                                                                                                                                                                                                                                                               | Source primaire                                                                                                                                                                                                  | Conséquence lecteur                                                                                   |
| --- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| C01 | FAIT   | La CNIL recommande d’intégrer sécurité et protection des données dès la conception et d’effectuer des tests unitaires, d’intégration, fonctionnels et de sécurité avant mise à disposition ou mise à jour.                                                               | [CNIL — Guide de la sécurité des données personnelles, version 2024 mise à jour en 2026, fiche 11](https://www.cnil.fr/sites/default/files/2026-05/cnil_guide_securite_personnelle.pdf), consulté le 6 août 2026 | un prototype destiné à de vrais usagers change de niveau d’exigence                                   |
| C02 | FAIT   | La CNIL recommande de séparer développement/test et production, d’utiliser des données fictives ou anonymisées, de ne pas mettre les secrets dans le contrôle de version et de les changer pour la production.                                                           | même source                                                                                                                                                                                                      | le protocole utilise uniquement deux organisations et comptes fictifs                                 |
| C03 | FAIT   | Une donnée pseudonymisée reste une donnée personnelle ; l’anonymisation vise un état effectivement irréversible empêchant la réidentification.                                                                                                                           | [CNIL — Anonymisation](https://www.cnil.fr/fr/technologies/lanonymisation-de-donnees-personnelles), consulté le 6 août 2026                                                                                      | ne pas appeler « anonymisé » un jeu simplement remplacé par des identifiants                          |
| C04 | FAIT   | Lorsque données fictives ou anonymisées ne suffisent pas, la CNIL admet l’emploi de données réelles en préproduction seulement après les tests unitaires, d’intégration et fonctionnels, avec une préproduction sécurisée comme la production et les garanties adaptées. | même guide, fiche 11                                                                                                                                                                                             | exception bornée, jamais permission par défaut ; documenter nécessité, ordre des tests et protections |

### C5. Contradictions, lacunes et séparations à préserver

1. **Lovable, pile du projet :** la FAQ actuelle décrit TanStack Start pour les
   projets récents, tandis qu’une page de portabilité parle encore de Vite et
   React. Conclusion : inspecter le dépôt, jamais extrapoler.
2. **Lovable, conditions :** la page visible le 6 août annonce une prise
   d’effet au 15 août sauf acceptation anticipée. Conclusion : demander la
   version effectivement acceptée.
3. **Bolt, droits :** le support affirme un usage commercial et une propriété
   du code ; les conditions StackBlitz anciennes ne définissent pas clairement
   la sortie IA Bolt actuelle et distinguent certains usages du service. Ce
   sont une assertion et une lacune, pas une contradiction juridique démontrée.
   Conclusion : documenter plan, conditions, composants et droits tiers.
4. **Comparatifs SERP :** une page Lovable de 2025 réduit v0 au front-end, alors
   que sa documentation courante décrit le full-stack. Conclusion : dater les
   capacités, ignorer les palmarès non rejoués.
5. **Version contre données :** les trois produits offrent des notions de
   version, mais aucune ne permet d’inférer qu’un retour de code restaure
   automatiquement la base, les identités et les services. Conclusion : quatre
   tests distincts.
6. **Visibilité et entraînement :** chat privé, déploiement protégé, accès au
   projet et opt-out d’entraînement sont des frontières différentes. Conclusion
   : relever offre, réglages compte/espace/projet et version contractuelle sans
   généraliser « privé » ni « non entraîné ».

## D. Artefact signature : protocole de chaîne de garde

### D1. Scénario fictif commun

Produit fictif : **Relais Devis**, outil permettant à deux ateliers fictifs de
faire approuver un devis interne. Organisations : **Atelier Lune** et
**Atelier Silex**. Comptes fictifs : `lea@atelier-lune.example` et
`yanis@atelier-silex.example`. Les devis, montants, messages et documents sont
entièrement inventés. Aucun test n’a été exécuté et aucune donnée client ne doit
être importée.

Objectif limité : prouver qu’un utilisateur peut déposer un devis fictif, qu’un
second rôle peut l’approuver et que les deux organisations ne peuvent jamais
lire les éléments de l’autre. Un témoin métier doit aussi tenter le parcours
sans aide du créateur et expliquer ce qu’il comprend. Ce scénario n’est ni une
preuve d’adoption ou de marché, ni une spécification de production.

### D2. Fiche commune de chaque station

```text
Station :
Périmètre et version/plan datés :
Gardien nommé :
Témoin indépendant :
Action :
Pièce brute conservée :
Contre-preuve volontaire :
Résultat : FERMÉ / ÉCHEC / INCONNU
Seuil de transfert à un tiers :
Responsable si le seuil n’est plus tenu :
```

### D3. Les huit stations non compensables

| Station             | Action reproductible                                                                                              | Pièce brute                                                              | Contre-preuve                                                              | Seuil de transfert                                                                                                 |
| ------------------- | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ | -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| 1. Périmètre        | figer besoin, exclusions, jeu fictif, outil, plan, date et pile observée                                          | fiche signée et jeu d’essai                                              | proposer un cas explicitement exclu                                        | un tiers sait ce que la version ne promet pas                                                                      |
| 2. Code             | récupérer le dépôt ou ZIP, installer, injecter des variables de test, construire                                  | commit, lockfile, commandes et journal de build                          | repartir d’une machine ou session vierge                                   | un tiers reconstruit sans conversation privée                                                                      |
| 3. Identités        | créer deux organisations et deux comptes fictifs, tester chaque rôle                                              | matrice rôles/actions et captures                                        | utiliser le lien de l’autre compte, changer l’identifiant, retirer un rôle | aucun accès croisé observé et règle relue ; cela ne certifie pas la sécurité globale                               |
| 4. Déploiement      | publier une version identifiée depuis des comptes appartenant à l’entreprise                                      | URL, identifiant de déploiement, commit, propriétaire du domaine         | tenter une publication depuis un compte non autorisé                       | le tiers sait publier et retirer une version sans compte personnel du créateur                                     |
| 5. Données          | exporter code, schéma, lignes fictives, fichiers et identités selon leur système ; restaurer sur une cible vierge | archives distinctes et journal de restauration                           | supprimer la copie de test avant restauration                              | un tiers obtient un état exploitable ; export, restauration et migration de comptes restent des preuves distinctes |
| 6. Secrets          | inventorier chaque secret, propriétaire, portée, rotation et révocation                                           | registre sans valeur secrète et journal de rotation                      | révoquer une clé de test                                                   | le produit signale l’échec et repart avec une clé neuve sans secret dans Git                                       |
| 7. Erreur           | provoquer une intégration indisponible et une entrée invalide ; rejouer avec un volume fictif doublé              | journaux, message utilisateur, alerte, mesure de limite/coût et décision | couper volontairement le service fictif et dépasser un seuil borné         | une personne nommée détecte, limite et explique l’incident ; toute conséquence non observée reste `INCONNU`        |
| 8. Retour et relève | revenir à un code antérieur, traiter séparément les données, puis faire reprendre par le témoin                   | procédure rejouée, résultats avant/après, inventaire de remise           | retirer le gardien initial                                                 | le témoin rétablit ou met en sécurité sans mémoire orale du créateur                                               |

### D4. Adaptation par produit

- **Lovable :** noter date de création et pile réelle ; vérifier la copie GitHub
  bidirectionnelle et la branche unique effectivement synchronisée, sans la
  renommer « source de vérité » par déduction ; tester publication et accès
  projet/site séparément ; relever les opt-out individu et espace ; consigner
  Basic et Deep séparément ; ne pas supposer Test/Live sur un nouveau projet ;
  traiter restauration Cloud et migration comme des preuves distinctes.
- **Bolt :** noter Bolt Database ou Supabase ; tester ZIP/Git indépendamment de
  la base ; si Supabase est envisagé, vérifier plan payant et projet Vite plutôt
  que Next.js ; exporter les lignes sans appeler cela une restauration ;
  vérifier la direction Bolt→Supabase et ne pas supposer l’inverse ; rejouer la
  sécurité après rollback ; conserver domaine, Netlify/GitHub et données dans
  l’inventaire de transfert.
- **v0/Vercel :** noter projet, conversations, branches et dépôt ; prouver le
  merge et le commit réellement déployé ; compléter les versions v0 par Git ;
  inventorier séparément visibilité du chat, visibilité Production, Vercel,
  domaine, variables, base externe et réglage d’entraînement ; vérifier qu’une
  autre personne peut reprendre sans la conversation d’origine.

### D5. Comptage de complétude, pas score de qualité

Chaque station reçoit exactement un état : `FERMÉ`, `ÉCHEC` ou `INCONNU`.

```text
F + E + I = 8
reste_ouvert = E + I
décision de transfert = SUSPENDRE si reste_ouvert > 0
```

Ce calcul vérifie seulement qu’aucune station n’a disparu. Il ne mesure ni
sécurité, ni qualité, ni performance et n’autorise aucune compensation.

**Exemple de calcul fictif, non exécuté :** 6 stations fermées, 1 en échec et 1
inconnue donnent `6 + 1 + 1 = 8`, puis `reste_ouvert = 2`. Décision : STOP.
La remise publique reste suspendue ; le registre interne conserve le statut
STOP. Passer l’inconnue à zéro serait une falsification du contrôle.

## E. Architecture de la page et aide à la décision

### E1. Première réponse en moins de 150 mots

L’ouverture nomme explicitement les quatre chemins : autonome avec Lovable,
Bolt ou v0 ; prototype suivi d’une revue ; construction accompagnée ;
simplification ou report. Elle dit immédiatement que le choix dépend de la
preuve et de la responsabilité, non d’un classement.

### E2. Douze perspectives logicielles

| Perspective         | Question lecteur                                   | Traitement prévu                                                 |
| ------------------- | -------------------------------------------------- | ---------------------------------------------------------------- |
| 1. Utilité          | quel apprentissage le prototype doit-il produire ? | cas fictif borné et « ne pas construire »                        |
| 2. Périmètre        | qu’est-ce qui est inclus/exclu ?                   | station 1 et exclusions visibles                                 |
| 3. Architecture     | quelle pile et quels services réels ?              | fonctions officielles datées, aucune équivalence forcée          |
| 4. Code             | peut-on reconstruire ailleurs ?                    | dépôt/ZIP, dépendances, build vierge                             |
| 5. Identités        | deux clients restent-ils isolés ?                  | deux comptes fictifs et contre-preuve                            |
| 6. Données          | que récupère-t-on vraiment ?                       | code, schéma, données, fichiers, identités séparés               |
| 7. Déploiement      | qui peut mettre en ligne et retirer ?              | compte, commit, domaine, protection                              |
| 8. Secrets          | comment révoquer sans exposer ?                    | inventaire, rotation, absence de valeur dans Git                 |
| 9. Erreurs          | qui voit et traite l’échec ?                       | journaux, alerte, mode dégradé                                   |
| 10. Retour arrière  | code et données reviennent-ils ensemble ?          | tests distincts, aucun raccourci                                 |
| 11. Exploitation    | qui répond après la remise ?                       | gardien, témoin, responsable nommé                               |
| 12. Droits et tiers | peut-on exploiter la sortie ?                      | conditions acceptées, licences, composants tiers, STOP juridique |

### E2 bis. Matrice formelle de couverture G1

| Exigence                                                            | Statut           | Réponse apportée                                                                                                                    | Exemple, limite ou action                                                         | Localisation dossier / page                  |
| ------------------------------------------------------------------- | ---------------- | ----------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | -------------------------------------------- |
| Réponse immédiate en quatre voies                                   | COUVERT          | autonomie, prototype + revue, construction accompagnée, simplification/report                                                       | aucun ordre universel                                                             | A2 / hero et §01                             |
| Différencier Lovable, Bolt et v0                                    | COUVERT          | modèle de projet, code, base, publication, version et contrôles bornés par source                                                   | aucun palmarès                                                                    | C1–C3 / §02                                  |
| Sources primaires actuelles                                         | COUVERT          | pages officielles rouvertes le 6 août 2026                                                                                          | fonctions et offres volatiles                                                     | C1–C4 et G1 / §02, §06, §07, sources         |
| Conditions Lovable applicables                                      | COUVERT          | la page visible annonce le 15 août sauf acceptation anticipée ; la version du compte reste INCONNU/STOP                             | demander la version acceptée par le compte avant usage juridique ou donnée réelle | C1 L11 et C5 / §02, FAQ droits, sources      |
| Git et sortie Lovable                                               | COUVERT          | code géré dans Lovable, nouveau dépôt privé, synchronisation bidirectionnelle sur une branche active ; téléchargement direct payant | ne pas appeler le dépôt « source de vérité » sans convention ni rejeu             | C1 L03 / §02 et §06                          |
| Données d’entraînement Lovable                                      | COUVERT          | opt-out individuel tout plan limité à ses données ; opt-out espace Business/Enterprise                                              | plan, compte et espace à contrôler séparément                                     | C1 L12 / §02 et §08                          |
| Deux contrôles Bolt distincts                                       | COUVERT          | audit complet projet payant ; contrôle DB plus léger tous plans                                                                     | aucun scan ne certifie l’application                                              | C2 B01–B03 / §02, §07 et FAQ                 |
| Bolt Database / Supabase                                            | COUVERT          | Bolt Database par défaut ; Supabase initial payant et Vite, Next.js non pris en charge                                              | migration Bolt→Supabase non symétrique                                            | C2 B06–B08 / §02 et §06                      |
| Entraînement sur données projet Bolt                                | COUVERT          | assertion éditeur d’absence d’entraînement des agents sur les données projet                                                        | ne couvre pas conservation, sous-traitants, traitements ou contrat                | C2 B15 / §02                                 |
| v0 full-stack sans exclusivité de framework                         | COUVERT          | Next.js par défaut et plus fiable ; autres frameworks possibles                                                                     | projet réel à inspecter                                                           | C3 V01 / §02                                 |
| Visibilités et entraînement v0                                      | COUVERT          | chat, Production et ressources Project séparés ; opt-out selon offre habilitée                                                      | aucune confidentialité générale déduite                                           | C3 V05, V11 / §02, §06 et §08                |
| Protocole reproductible                                             | COUVERT          | gardien, témoin, pièce brute, contre-preuve, seuil                                                                                  | conçu mais non exécuté                                                            | D1–D4 / §03–§08                              |
| Huit stations exactes                                               | COUVERT          | périmètre, code, identités, déploiement, données, secrets, erreur, retour/relève                                                    | non compensables                                                                  | D3 / meta, §03–§04                           |
| Deux organisations et comptes fictifs                               | COUVERT          | Atelier Lune/Silex et deux adresses `.example`                                                                                      | aucun client réel                                                                 | D1 / §05                                     |
| Export code, données, restauration, comptes, exploitation distincts | COUVERT          | cinq sorties et preuves séparées                                                                                                    | un ZIP ne couvre pas la base                                                      | D3–D4 / §06 et FAQ                           |
| Secrets, erreurs, journaux, rollback et reprise                     | COUVERT          | test de révocation, coupure et relève                                                                                               | retour de code ≠ retour des données                                               | D3 / §06–§07                                 |
| Panne tierce et volume fictif doublé                                | COUVERT          | coupure d’un service et rejeu d’un volume borné                                                                                     | protocole non exécuté ; limite/coût/dégradation restent inconnus                  | D3 station 7 / §07                           |
| Bon et mauvais fit de l’autonomie                                   | COUVERT          | prototype borné contre données/rôles/continuité                                                                                     | réduire si responsabilité inconnue                                                | E3 / §01 et §08                              |
| Bon et mauvais fit de l’agence                                      | COUVERT          | responsabilité précise, comptes et remise                                                                                           | conflit d’intérêt Hagnéré Code visible                                            | E3 / §08                                     |
| Option « ne pas construire »                                        | COUVERT          | entretien, écran sans compte, formulaire ou procédure manuelle                                                                      | besoin ou exploitation inconnus                                                   | E3 / §01, §09–§10                            |
| Action autonome avant CTA                                           | COUVERT          | minuteur éditorial de départ, huit lignes et inconnues conservées                                                                   | 45 minutes n’est pas une durée promise                                            | E4 / §09                                     |
| Chiffres de prix, délai, performance ou gain                        | ECARTE_JUSTIFIE  | aucune donnée comparable et aucun benchmark exécuté                                                                                 | seule formule de complétude non qualitative est publiée                           | A3, D5 et G3 / §02, §04                      |
| Question financière                                                 | COUVERT          | séparer construction, exécution, tiers et travail humain ; unités fournisseur non comparables                                       | aucun prix ou TCO inféré ; valeurs non observées `INCONNU`                        | C1 L13, C2 B14, C3 V12 / §08                 |
| Exception CNIL en préproduction                                     | COUVERT          | données réelles seulement si jeux fictifs/anonymisés insuffisants, après autres tests et sécurité production                        | exception bornée, jamais permission par défaut                                    | C4 C04 / §05 et FAQ                          |
| FAQ visible sans schéma enrichi                                     | COUVERT          | douze réponses directes                                                                                                             | aucun balisage de FAQ ou tutoriel                                                 | E5 / FAQ après le guide                      |
| Meta, canonical et données structurées privées                      | COUVERT          | noindex/nofollow, Article + BreadcrumbList, aucune date                                                                             | remplacement central après GO P4                                                  | F1 / en-tête technique de la page            |
| Dates éditoriales et publication réelle                             | RENVOI_EXPLICITE | aucune première date publique prouvée ; STOP opérationnel conservé                                                                  | `datePublished` à établir au snapshot effectivement publié                        | A3, F1, G3 / absente de la page              |
| Intégration au registre, hub, sitemap et maillage                   | RENVOI_EXPLICITE | hors fichiers propres au slug pendant P1                                                                                            | orchestrateur central après GO qualité                                            | F1, G3 / aucun fichier partagé touché        |
| Déploiement, indexation et preuve publique                          | RENVOI_EXPLICITE | aucune revendication locale                                                                                                         | release distincte avec preuve publique                                            | G3 / badge « Brouillon privé » et disclaimer |

Statuts autorisés : `COUVERT`, `RENVOI_EXPLICITE`, `ECARTE_JUSTIFIE` et
`BLOQUANT`. Aucune ligne matérielle n’est `BLOQUANT` à la fermeture P1 : les
inconnues lecteur restent visibles comme `INCONNU/STOP`, et les actes de release
hors passe sont des renvois explicites.

### E2 ter. Registre formel des perspectives de la charte

| Perspective obligatoire     | Statut     | Réponse attendue                                                                  | Localisation                                       |
| --------------------------- | ---------- | --------------------------------------------------------------------------------- | -------------------------------------------------- |
| Dirigeant                   | APPLICABLE | choisir le prochain mode et la responsabilité à acheter                           | A1–A2 / hero, §01, §10                             |
| Métier                      | APPLICABLE | borner l’action utile et les cas exclus                                           | D1–D3 / §03–§05                                    |
| Opérations                  | APPLICABLE | nommer publication, alerte, intervention et relève                                | D3 stations 4, 7, 8 / §07–§08                      |
| Finance                     | APPLICABLE | séparer construction, exécution, tiers, humain et unités non comparables          | C1 L13, C2 B14, C3 V12 / §08                       |
| IT / sécurité               | APPLICABLE | dépôt, pile, rôles, scans, secrets et contre-preuves                              | C1–C4 / §02–§07                                    |
| Données / RGPD              | APPLICABLE | données fictives, exception préproduction, anonymisation et réglages entraînement | C1 L12, C3 V11, C4 / §02, §05–§06                  |
| Achats / juridique          | APPLICABLE | version des conditions, plan, licences, droits et livrables                       | C1 L11–L12, C2 B12–B13, C3 V09–V11 / §02, §08, FAQ |
| Adoption                    | APPLICABLE | témoin métier accomplit et explique le parcours sans aide du créateur             | D1 / §05                                           |
| Maintenance                 | APPLICABLE | dépendances, rotation, correction, version et personne responsable                | D3 / §02, §07–§08                                  |
| Incident / reprise          | APPLICABLE | provoquer l’échec, détecter, limiter, corriger, revenir et relever                | D3 stations 7–8 / §07                              |
| Réversibilité               | APPLICABLE | séparer code, données, restauration, comptes et exploitation                      | D4 / §06                                           |
| Solution simple / statu quo | APPLICABLE | écran sans compte, formulaire, entretien, procédure manuelle ou report            | A2, E3 / §01, §09–§10                              |

### E3. Bons et mauvais fits

**Prototype autonome — bon fit :** interaction bornée, données fictives,
absence de promesse client, résultat jetable accepté, personne disponible pour
apprendre l’outil et inventorier les comptes.

**Prototype autonome — mauvais fit :** paiement, donnée personnelle réelle,
autorisations complexes, intégration critique, secret de production, absence
de personne pour corriger, besoin de continuité ou croyance qu’un scan suffit.

**Prototype + revue — bon fit :** parcours déjà utile à montrer, prototype
conservé comme matière, enjeu précis à relire avant toute donnée ou utilisateur
réel, possibilité de corriger ou jeter.

**Accompagnement — bon fit :** architecture, identité, conformité, migration,
opérations et maintenance doivent être décidées ensemble ; plusieurs rôles ou
services ; responsabilité contractuelle attendue.

**Agence — mauvais fit :** besoin non vérifié, aucun décideur côté client,
refus de fournir les accès ou de participer aux tests, budget considéré comme
une garantie, ou attente qu’un prestataire accepte une promesse impossible.

**Ne pas construire :** personne ne sait quel acte utilisateur doit changer,
aucun propriétaire ne peut exploiter le service, ou les données/droits exigés
ne peuvent pas être utilisés légalement et prudemment dans le test.

### E4. Action autonome avant CTA

Action proposée : lancer volontairement un minuteur de 45 minutes pour commencer
à remplir les huit lignes de la chaîne de garde sans ouvrir un outil. Ce
minuteur est un format éditorial, **pas une estimation du temps nécessaire** au
cadrage. Écrire un gardien, un témoin, une pièce brute et une
contre-preuve pour chacune. Toute case vide devient `INCONNU`, pas « à faire
plus tard ». Une vérification extérieure interrompt le minuteur sans effacer
l’inconnue. Le résultat peut être de réduire le scénario à un parcours sans
compte ni donnée.

Le CTA ne vient qu’après cette action et propose de cadrer une remise
reproductible. Une seule destination : `/demarrer-un-projet`, sans téléphone,
sans formulaire trompeur et sans téléchargement fictif.

### E5. FAQ visible

1. quel outil choisir pour un premier SaaS ?
2. un non-technicien peut-il lancer seul ?
3. un ZIP suffit-il pour sortir ?
4. une version antérieure restaure-t-elle la base ?
5. un scan intégré prouve-t-il la sécurité ?
6. à qui appartient le code généré ?
7. quand demander une revue ou une agence ?
8. une agence rend-elle le projet automatiquement reprenable ?
9. peut-on tester avec des données réelles ?
10. que doit contenir la remise ?
11. quand ne faut-il pas construire ?
12. quelle action faire aujourd’hui ?

Le rendu contient une FAQ HTML visible, mais aucun JSON-LD `FAQPage` ou
`HowTo`.

## F. Métadonnées, visuels et contrat technique privé

### F1. SEO naturel

- titre/H1/Article : **Lovable, Bolt, v0 ou agence : comment lancer votre SaaS ?**
- meta description : **Choisissez un mode de construction pour votre SaaS avec
  huit stations de garde : périmètre, code, identités, déploiement, données,
  secrets, erreur et relève.**
- canonical :
  `https://hagnere-code.ai/guides/lovable-bolt-v0-ou-agence-saas` ;
- robots P1 : `noindex, nofollow` via `PRIVATE_ROBOTS` ;
- statut local explicite `ready-for-human-review`, sans inscription au registre ;
- schémas : `Article` et `BreadcrumbList` seulement ;
- aucune date inventée dans Metadata ou Article ;
- image OG locale dédiée ;
- après GO P4 et intégration centrale seulement : remplacer la metadata et les
  données structurées locales par `buildGuideMetadata` et
  `buildGuideStructuredData` à partir du registre partagé.

### F2. Trois SVG originaux

1. `chaine-garde-produit.svg` — huit stations et états non compensables ;
2. `frontieres-responsabilite.svg` — comptes, code, données, déploiement,
   secrets et exploitation répartis par frontière ;
3. `colis-remise-saas.svg` — inventaire du colis transmis au témoin.

Les SVG sont conceptuels, non factuels : ils ne montrent aucun score d’outil.
Ils comportent `title`, `desc`, contrastes forts, typographie système et
`viewBox` pour la lisibilité mobile.

### F3. CTA et maillage

- un seul bloc CTA tardif via `strategyCta` ;
- `showPhoneCta: false` ;
- aucun CTA de hero ou de sidebar ;
- aucun lien vers les deux anciennes routes au statut seulement historique ;
- les sources officielles sont des liens externes visibles ;
- le service peut être mentionné comme conflit d’intérêt, pas comme preuve.

## G. Sources, fraîcheur, biais et limites

### G1. Inventaire des sources primaires

| Source                     | URL                                                                                 | Date de page connue                                                             | Consultation | Type              | Biais / limite                                        |
| -------------------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------ | ----------------- | ----------------------------------------------------- |
| Lovable Security           | https://docs.lovable.dev/features/security                                          | page courante, date non affichée                                                | 6 août 2026  | doc éditeur       | décrit les scanners, pas un audit indépendant         |
| Lovable Project visibility | https://docs.lovable.dev/features/project-visibility                                | non affichée                                                                    | 6 août 2026  | doc éditeur       | fonctions dépendantes du compte/plan                  |
| Lovable Publish            | https://docs.lovable.dev/features/publish                                           | non affichée                                                                    | 6 août 2026  | doc éditeur       | offre volatile                                        |
| Lovable GitHub             | https://docs.lovable.dev/integrations/github                                        | non affichée                                                                    | 6 août 2026  | doc éditeur       | procédure, pas preuve qu’un dépôt précis repart       |
| Lovable FAQ                | https://docs.lovable.dev/introduction/faq                                           | changement indiqué 13 mai 2026                                                  | 6 août 2026  | doc éditeur       | coexistence de générations de projets                 |
| Lovable Environments       | https://docs.lovable.dev/features/environments                                      | changement indiqué 24 mars 2026                                                 | 6 août 2026  | doc éditeur       | fonction héritée seulement pour certains projets      |
| Lovable Cloud              | https://docs.lovable.dev/integrations/cloud                                         | non affichée                                                                    | 6 août 2026  | doc éditeur       | cloud propriétaire                                    |
| Lovable hosting/ownership  | https://docs.lovable.dev/tips-tricks/deployment-hosting-ownership                   | non affichée                                                                    | 6 août 2026  | doc éditeur       | contradiction de pile avec la FAQ                     |
| Lovable Terms              | https://lovable.dev/terms                                                           | mise à jour 16 juin 2026, effet annoncé 15 août 2026 sauf acceptation anticipée | 6 août 2026  | conditions        | version réellement acceptée inconnue                  |
| Lovable data opt-out       | https://docs.lovable.dev/features/business/data-opt-out                             | non affichée                                                                    | 6 août 2026  | doc éditeur       | plan/réglage/contrat à vérifier                       |
| Lovable credits/usage      | https://docs.lovable.dev/introduction/credits-and-usage                             | déploiement progressif du solde unifié indiqué                                  | 6 août 2026  | doc éditeur       | unités et prix volatils ; mesure du compte nécessaire |
| Bolt Security              | https://support.bolt.new/building/security                                          | non affichée                                                                    | 6 août 2026  | support éditeur   | contrôle automatisé, pas certification                |
| Bolt rollback/export       | https://support.bolt.new/building/using-bolt/rollback-backup                        | non affichée                                                                    | 6 août 2026  | support éditeur   | version du code distincte de la base                  |
| Bolt Supabase              | https://support.bolt.new/integrations/supabase                                      | non affichée                                                                    | 6 août 2026  | support éditeur   | chemins de migration volatils                         |
| Bolt tables                | https://support.bolt.new/cloud/database/tables                                      | non affichée                                                                    | 6 août 2026  | support éditeur   | export de lignes seulement                            |
| Bolt projects/files        | https://support.bolt.new/building/using-bolt/projects-files                         | non affichée                                                                    | 6 août 2026  | support éditeur   | duplication distincte du transfert                    |
| Bolt publish               | https://support.bolt.new/cloud/hosting/publish                                      | non affichée                                                                    | 6 août 2026  | support éditeur   | hébergement et plans volatils                         |
| Bolt secrets               | https://support.bolt.new/cloud/database/secrets                                     | non affichée                                                                    | 6 août 2026  | support éditeur   | ne couvre pas tous les services tiers                 |
| Bolt commercial support    | https://support.bolt.new/account-and-subscription/corporate-commercial              | non affichée                                                                    | 6 août 2026  | support éditeur   | assertion commerciale à rapprocher du contrat         |
| Bolt tokens                | https://support.bolt.new/account-and-subscription/tokens                            | non affichée                                                                    | 6 août 2026  | support éditeur   | jetons de construction, pas coût complet              |
| Bolt hosting plans         | https://support.bolt.new/cloud/hosting/plans                                        | non affichée                                                                    | 6 août 2026  | support éditeur   | limites volatiles et agrégées au compte               |
| Bolt intro LLMs            | https://support.bolt.new/concepts/intro-llms                                        | non affichée                                                                    | 6 août 2026  | support éditeur   | assertion entraînement limitée aux données projet     |
| StackBlitz Terms           | https://stackblitz.com/terms-of-service                                             | 10 janvier 2024                                                                 | 6 août 2026  | conditions        | antérieures au produit actuel, sortie IA peu claire   |
| v0 Full-stack              | https://v0.app/docs/full-stack-apps                                                 | non affichée                                                                    | 6 août 2026  | doc éditeur       | préférence de pile, pas garantie d’architecture       |
| v0 GitHub                  | https://v0.app/docs/github                                                          | non affichée                                                                    | 6 août 2026  | doc éditeur       | dépend d’un dépôt et de droits réels                  |
| v0 Projects                | https://v0.app/docs/projects                                                        | non affichée                                                                    | 6 août 2026  | doc éditeur       | partage des ressources à revalider par projet         |
| v0 Deployments             | https://v0.app/docs/deployments                                                     | non affichée                                                                    | 6 août 2026  | doc éditeur       | déploiement n’est pas validation de l’application     |
| v0 Versions                | https://v0.app/docs/versions                                                        | non affichée                                                                    | 6 août 2026  | doc éditeur       | ne couvre pas toutes les modifications                |
| v0 Security                | https://v0.app/docs/security                                                        | non affichée                                                                    | 6 août 2026  | doc éditeur       | protections plateforme, pas audit produit             |
| v0 Sharing                 | https://v0.app/docs/sharing                                                         | non affichée                                                                    | 6 août 2026  | doc éditeur       | chat distinct de Production et Project                |
| v0 Pricing                 | https://v0.app/docs/pricing                                                         | non affichée                                                                    | 6 août 2026  | doc éditeur       | crédits/journaux selon modèle et offre                |
| Vercel AI Product Terms    | https://vercel.com/legal/ai-product-terms                                           | effet 31 mars 2026                                                              | 6 août 2026  | conditions        | dépend de l’offre et du compte                        |
| CNIL, guide sécurité       | https://www.cnil.fr/sites/default/files/2026-05/cnil_guide_securite_personnelle.pdf | version 2024, mise à jour en 2026                                               | 6 août 2026  | autorité publique | recommandations générales, pas validation d’un projet |
| CNIL, anonymisation        | https://www.cnil.fr/fr/technologies/lanonymisation-de-donnees-personnelles          | date non affichée                                                               | 6 août 2026  | autorité publique | qualification contextuelle à effectuer                |

### G2. Sources secondaires observées, non utilisées pour trancher

Enterprise DNA (26 juillet 2026), DesignRevision (décembre 2025),
BigBangIndex (juin 2026), BMAD en français (mars 2026), Better Stack (octobre
2025), PublorAI (juin 2026), CloverLabs (juin 2026), BuildThisNow (juillet 2026) et Quinoid (juillet 2026). Elles confirment l’intention de recherche, mais
leurs critères, intérêts, versions et protocoles ne suffisent pas à classer les
produits.

### G3. Limites et STOPs

- `datePublished` et `dateModified` publiques inconnues : STOP avant
  publication ;
- plans, crédits, limites et fonctions volatils : rouverts en P2, puis à rouvrir
  en P4 et avant toute mise en ligne ;
- version des conditions Lovable effectivement acceptée : INCONNU ;
- portée juridique exacte des droits Bolt et composants tiers : INCONNU ;
- comportement réel d’un projet généré : non testé ;
- aucune preuve humaine navigateur, mobile, clavier, thème, impression ou axe
  en P1 tant que les tests finaux ne sont pas exécutés ;
- aucune donnée de benchmark, coût total, délai ou performance ; les unités de
  fournisseur ont été qualifiées, pas mesurées sur un projet ;
- aucune revue juridique, RGPD ou sécurité d’une application réelle ;
- aucune publication, indexation, déploiement ou découverte revendiquée.

## H. Journal P1, anti-recyclage et passation

### H1. Journal de création

1. gel d’entrée lu et conservé inchangé ;
2. gouvernance, modèle de dossier et quatre prompts éditoriaux relus ;
3. historique consulté uniquement pour identifier les formulations et la
   structure interdites ;
4. SERP actuelle observée ;
5. sources primaires Lovable, Bolt, v0/Vercel et CNIL rouvertes le 6 août 2026 ;
6. contradictions documentaires conservées comme inconnues ;
7. nouvelle signature « chaîne de garde du produit » conçue ;
8. scénario fictif, huit stations, formule de complétude et STOPs définis ;
9. page, OG, tests et trois SVG créés dans le périmètre du slug ;
10. formatage, test ciblé, typage, lint, XML, raster, portée et manifeste
    rejoués après les dernières corrections.

### H2. Contrôle de non-réutilisation

Empreinte historique volontairement exclue : ouverture « un lien fonctionne /
premier client », libellé « huit preuves identiques », séquence « mois 1 / mois
13 », cas de consultant et sociétés Alba/Noro, CTA « préparer mon premier
test ». La version neuve emploie une remise à un témoin, des stations de garde,
Relais Devis, Atelier Lune/Silex et une action de 45 minutes.

Le contrôle final recherche textuellement ces expressions dans la page neuve.
Le dossier les cite seulement ici pour prouver le contrôle ; elles ne doivent
pas apparaître dans le contenu public.

### H3. Manifeste P1 attendu

Sept entrées exactement :

1. ce dossier ;
2. `page.tsx` ;
3. `opengraph-image.tsx` ;
4. `content-quality.test.ts` ;
5. les trois SVG.

Le gel, le manifeste lui-même, les manifestes historiques et tout fichier
partagé sont exclus pour éviter la circularité. La passation P1 ne donne aucune
autorisation P2, Git, intégration ou publication.

### H4. Contrôles exécutés à la fermeture P1

| Contrôle                                                    | Résultat courant                                              | Frontière                                                                                                                              |
| ----------------------------------------------------------- | ------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| Vitest propre au slug                                       | 15/15 vert                                                    | couvre metadata privée, réponse, sources, huit stations, cas fictif, sorties, CTA, matrices, FAQ, SVG, gel et manifeste                |
| Tests sitemap, robots, llms, legacy, indexation et registre | 47/48 vert                                                    | unique échec attendu : le registre central refuse toute route locale non encore intégrée ; `explicitLocalDraft: true` est bien détecté |
| TypeScript `--noEmit`                                       | vert                                                          | dépendances du dépôt principal reliées temporairement au worktree                                                                      |
| ESLint ciblé                                                | vert, zéro avertissement après correction                     | page, OG et test uniquement                                                                                                            |
| Prettier                                                    | vert                                                          | Markdown, TSX et SVG avec parseur HTML                                                                                                 |
| `xmllint --noout`                                           | vert                                                          | trois SVG                                                                                                                              |
| Raster ImageMagick                                          | contrôlé visuellement sur les trois SVG                       | textes inline lisibles ; sous-titre du colis au-dessus du rabat ; zones défilables prévues pour mobile                                 |
| Rejeu SHA-256                                               | vert après dernière mutation                                  | sept entrées, sans gel ni manifeste circulaire                                                                                         |
| Portée Git                                                  | uniquement les fichiers propres au slug et le gel P0 immuable | aucun fichier partagé modifié                                                                                                          |

L’échec transversal 47/48 est un **renvoi d’intégration**, pas un angle P1
manquant : le corriger exigerait `src/lib/guides.ts` et le retrait du slug de la
liste legacy sous mutex central. Ces mutations sont interdites pendant P1.

### H5. Reprise après contrôle G1

- la liste de sources visible sépare désormais la FAQ Lovable de sa page de
  portabilité, afin que la contradiction TanStack Start / Vite + React pointe
  vers ses deux documents exacts ;
- les pages v0 `Projects`, `Versions` et `Security` possèdent chacune leur
  citation visible, sans source composite ;
- la formule publique dit `SUSPENDRE` et « la remise reste suspendue » ; le mot
  `STOP` demeure réservé aux états internes du dossier et de la release ;
- le test propre au slug exige les trois URL ajoutées et interdit l’ancienne
  formule dans tout le contenu public.

## I. Passe P2 factuelle contradictoire

### I1. Méthode et frontière

La P2 a rouvert les sources primaires au 6 août 2026 sans reprendre les
conclusions P1 comme acquises. Elle a cherché les exceptions, différences de
plan, migrations non symétriques, confusions entre code et données, visibilité
et entraînement, ainsi que les conséquences pour un dirigeant. Aucun test
produit n’a été exécuté : les comportements d’un projet précis restent à
prouver. Le gel P0 et le manifeste P1 demeurent des snapshots historiques
immuables.

Chaque assertion factuelle identifiée en C1–C4 reçoit exactement un statut P2 :

- `VERIFIED` : la source primaire courante soutient la formulation bornée ;
- `A_NUANCER` : la source soutient seulement une formulation plus précise, qui
  a été corrigée dans le dossier et la page ;
- `A_RETIRER` : la source contredit l’assertion sans remplacement loyal ;
- `INCONNUE` : la décision dépend d’un compte, projet, contrat ou fait non
  observé ; l’inconnue reste visible et peut imposer un STOP.

### I2. Registre exhaustif des assertions et sort public

| ID  | Statut P2 | Contrôle contradictoire                                                                          | Sort dans la page publique candidate                                               |
| --- | --------- | ------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------- |
| L01 | VERIFIED  | instantané publié et mise à jour manuelle confirmés                                              | conservé                                                                           |
| L02 | VERIFIED  | accès projet et accès site distincts confirmés                                                   | conservé                                                                           |
| L03 | A_NUANCER | code géré dans Lovable ; nouveau dépôt privé, copie/sync bidirectionnelle, branche active unique | « source de vérité » retiré ; stockage, copie, plan payant et limites explicités   |
| L04 | VERIFIED  | coexistence TanStack Start récent / React+Vite ancien confirmée                                  | conservé avec inspection du projet réel                                            |
| L05 | VERIFIED  | fermeture Test/Live aux nouveaux projets Cloud depuis le 24 mars 2026 confirmée                  | conservé                                                                           |
| L06 | VERIFIED  | structure synchronisée, données/configuration séparées et restauration support confirmées        | conservé dans le dossier et la sortie                                              |
| L07 | VERIFIED  | périmètres Basic/Deep, Deep non automatique et publication malgré alerte confirmés               | conservé                                                                           |
| L08 | VERIFIED  | limite explicite des outils et responsabilité client confirmées                                  | conservé                                                                           |
| L09 | VERIFIED  | secrets serveur et journaux Cloud confirmés                                                      | conservé                                                                           |
| L10 | INCONNUE  | contradiction FAQ/portabilité confirmée ; pile du projet non observée                            | contradiction visible, aucune pile universelle                                     |
| L11 | INCONNUE  | texte daté confirmé ; version réellement acceptée par le compte non observée                     | date d’effet et acceptation anticipée visibles, conclusion contractuelle suspendue |
| L12 | A_NUANCER | opt-out individu tout plan limité à ses données ; espace entier Business/Enterprise              | limites compte/espace ajoutées, aucune confidentialité généralisée                 |
| L13 | VERIFIED  | balance couvrant Build, Cloud et IA avec calculs distincts confirmée                             | coût décomposé, aucun prix ni TCO inféré                                           |
| B01 | VERIFIED  | audit projet payant et contrôle DB plus léger tous plans confirmés                               | conservé                                                                           |
| B02 | VERIFIED  | limite quotidienne documentée, mais volatile                                                     | conservé au dossier, non affiché comme promesse durable                            |
| B03 | VERIFIED  | rollback retirant aussi les correctifs ultérieurs confirmé                                       | conservé                                                                           |
| B04 | VERIFIED  | versions/code sans restauration Bolt Database ou Supabase confirmés                              | conservé                                                                           |
| B05 | VERIFIED  | téléchargement ZIP confirmé                                                                      | conservé comme sortie code seulement                                               |
| B06 | A_NUANCER | Bolt Database par défaut ; Supabase initial payant, Vite seulement, Next.js non pris en charge   | formulation Claude Agent retirée ; limites plan/framework ajoutées                 |
| B07 | VERIFIED  | remplacement de connexion et risque de perte lors du raccord Supabase confirmés                  | conservé                                                                           |
| B08 | VERIFIED  | export de lignes CSV/JSON confirmé                                                               | conservé sans l’appeler restauration                                               |
| B09 | A_NUANCER | effets différents pour duplication propre et projet partagé                                      | généralisation retirée ; contexte de duplication exigé                             |
| B10 | VERIFIED  | publication publique/privée et mise à jour non automatique confirmées                            | conservé au dossier                                                                |
| B11 | VERIFIED  | secrets côté serveur et rotation recommandée confirmés                                           | conservé                                                                           |
| B12 | VERIFIED  | assertion du support sur propriété du code et usage commercial confirmée                         | présentée comme assertion éditeur, non comme avis juridique                        |
| B13 | A_NUANCER | conditions 2024 silencieuses sur sorties IA actuelles ; aucune contradiction directe démontrée   | mot « contradiction » retiré, lacune et usages du service distingués               |
| B14 | VERIFIED  | jetons de construction distincts des requêtes/bande passante d’hébergement confirmés             | unités non comparables et test de volume ajoutés                                   |
| B15 | VERIFIED  | assertion Bolt d’absence d’entraînement des agents sur les données projet confirmée              | portée strictement bornée ; conservation, sous-traitants et contrat non déduits    |
| V01 | VERIFIED  | full-stack et préférence Next.js confirmés                                                       | conservé sans exclusivité de framework                                             |
| V02 | VERIFIED  | connexions Supabase, Neon et Upstash confirmées                                                  | conservé au dossier                                                                |
| V03 | VERIFIED  | dépôt source de vérité, branche par chat, commits et PR confirmés                                | conservé                                                                           |
| V04 | VERIFIED  | risque de perte après suppression du dépôt confirmé                                              | conservé au dossier                                                                |
| V05 | A_NUANCER | visibilité chat, visibilité Production et ressources Project distinctes                          | trois frontières visibles ajoutées                                                 |
| V06 | VERIFIED  | publication Vercel et URL Production confirmées                                                  | conservé sans inférer validation métier                                            |
| V07 | VERIFIED  | création/restauration des versions et exclusions des éditions directes confirmées                | conservé                                                                           |
| V08 | VERIFIED  | analyse, sandbox et variables serveur documentées                                                | conservé comme protections de plateforme seulement                                 |
| V09 | VERIFIED  | risques d’erreur et devoir d’examen des sorties confirmés                                        | conservé                                                                           |
| V10 | VERIFIED  | droits bornés, non-unicité et droits tiers confirmés                                             | conservé                                                                           |
| V11 | A_NUANCER | non-entraînement seulement Enterprise ou autre offre habilitée à l’opt-out                       | plan, réglages et conditions exigés ; aucune généralisation                        |
| V12 | VERIFIED  | crédits et jetons par modèle documentés                                                          | génération séparée de Vercel, tiers et humain                                      |
| C01 | A_NUANCER | contenu de la fiche confirmé ; document nommé version 2024 mise à jour en 2026                   | intitulé « édition 2026 » corrigé                                                  |
| C02 | VERIFIED  | séparation, jeux fictifs/anonymisés et secrets hors Git confirmés                                | conservé                                                                           |
| C03 | VERIFIED  | pseudonymisation personnelle et anonymisation irréversible confirmées                            | conservé                                                                           |
| C04 | VERIFIED  | exception préproduction réelle après autres tests et sécurité équivalente production confirmée   | exception ajoutée à la FAQ et au cas, jamais comme permission par défaut           |

Synthèse : **34 `VERIFIED`, 8 `A_NUANCER`, 0 `A_RETIRER`, 2 `INCONNUE`**, soit
44 assertions sur 44 classées. Les deux inconnues sont L10 — pile du projet
réel — et L11 — conditions réellement acceptées. `A_RETIRER` est présent dans
la taxonomie mais aucune assertion n’a dû être supprimée sans remplacement ;
les huit formulations trop larges ont été corrigées.

### I3. Questions contradictoires et sort éditorial

| Question P2                                                               | Statut            | Décision et localisation                                                               |
| ------------------------------------------------------------------------- | ----------------- | -------------------------------------------------------------------------------------- |
| Le lecteur comprend-il une prochaine décision plutôt qu’un palmarès ?     | DEJA_COUVERTE     | quatre voies dans le hero et §01                                                       |
| Le dépôt Lovable est-il réellement la source de vérité ?                  | AJOUTEE           | non déduit ; stockage Lovable et copie/sync Git explicités en C1, §02 et §06           |
| Supabase fonctionne-t-il sur tout nouveau projet Bolt ?                   | AJOUTEE           | plan payant, Vite seulement et Next.js non pris en charge ajoutés                      |
| Une duplication Bolt remet-elle toujours données et services ?            | AJOUTEE           | contextes propre/partagé distingués en C2 ; aucune remise déduite                      |
| Que se passe-t-il si le volume fictif double ?                            | AJOUTEE           | station 7 et §07 ; limite, coût, dégradation ou alerte restent à mesurer               |
| Que se passe-t-il si un fournisseur tiers tombe ?                         | DEJA_COUVERTE     | contre-preuve d’indisponibilité maintenue et renforcée en D3/§07                       |
| Un utilisateur métier adopte-t-il réellement le parcours ?                | AJOUTEE           | témoin sans aide ajouté ; succès technique ≠ adoption ni marché                        |
| Qui paie construction, exécution, services tiers et travail humain ?      | AJOUTEE           | unités séparées dans C1/C2/C3 et §08 ; aucun TCO automatique                           |
| « Privé » signifie-t-il absence d’entraînement ?                          | AJOUTEE           | compte/espace Lovable, données projet Bolt, chat/Production/v0 et offre Vercel séparés |
| Peut-on utiliser une donnée réelle en préproduction ?                     | AJOUTEE           | exception CNIL bornée ajoutée à C4, §05 et FAQ                                         |
| Les droits Bolt sont-ils juridiquement contradictoires ?                  | AJOUTEE           | conclusion ramenée à assertion support + silence contractuel, sans faux conflit        |
| Une autre personne peut-elle reprendre sans conversation du créateur ?    | DEJA_COUVERTE     | témoin, build vierge, colis de remise et relève conservés                              |
| Faut-il afficher les prix catalogue du jour ?                             | ECARTEE_JUSTIFIEE | volatils et non comparables ; seule la structure de coût décisionnelle est publiée     |
| Peut-on déclarer publication, indexation ou dates publiques en P2 ?       | RENVOYEE          | intégration/release centrale et preuve publique distinctes                             |
| Des labels Enterprise suffisent-ils à certifier sécurité ou conformité ?  | ECARTEE_JUSTIFIEE | contrôles fournisseur ≠ qualification du projet                                        |
| Une solution plus simple ou aucun logiciel reste-t-il un résultat loyal ? | DEJA_COUVERTE     | voie simplifier/différer, §01, §09 et §10                                              |

### I4. Changements P2 apportés au candidat

1. correction du statut Git Lovable : copie/synchronisation plutôt que « source
   de vérité » déduite, branche active unique, nouveau dépôt privé et
   téléchargement direct payant ;
2. correction Bolt Database/Supabase : défaut courant, plan payant, Vite et
   absence de prise en charge Next.js ;
3. distinction des duplications Bolt et retrait du faux conflit juridique sur
   les droits ;
4. séparation des visibilités chat/Production/Project v0 et des réglages
   d’entraînement Lovable/v0, plus assertion Bolt bornée aux données projet ;
5. correction du nom du guide CNIL et ajout de son exception préproduction ;
6. décomposition du coût en construction, exécution, tiers et humain, avec
   unités fournisseur non comparables ;
7. ajout d’un témoin métier, d’un volume fictif doublé et d’une panne tierce
   comme contre-épreuves sans inventer de résultat.

### I5. Contrôles de fermeture P2

| Contrôle                                   | Résultat P2 | Portée et preuve                                                                                                |
| ------------------------------------------ | ----------- | --------------------------------------------------------------------------------------------------------------- |
| Registre factuel exhaustif                 | vert        | 44/44 assertions : 34 `VERIFIED`, 8 `A_NUANCER`, 0 `A_RETIRER`, 2 `INCONNUE`                                    |
| Questions contradictoires                  | vert        | 16/16 avec sort `AJOUTEE`, `DEJA_COUVERTE`, `RENVOYEE` ou `ECARTEE_JUSTIFIEE`                                   |
| Sources primaires nouvelles ou décisives   | vert        | 12/12 URL HTTP 200 après redirections ; la route Bolt canonique `/concepts/intro-llms` répond 200               |
| Ancienne route Bolt `/building/intro-llms` | écart fermé | HTTP 404 confirmé ; elle n’est utilisée ni dans le dossier, ni dans la page                                     |
| Vitest propre au slug                      | vert        | 17/17, incluant classification P2, limites produit, gel P0, snapshot P1 et rejeu P2                             |
| TypeScript `--noEmit`                      | vert        | candidat complet avec dépendances du dépôt reliées temporairement                                               |
| ESLint ciblé                               | vert        | page, OG et test, zéro avertissement                                                                            |
| Prettier                                   | vert        | Markdown/TSX et SVG contrôlés avec parseur HTML explicite                                                       |
| XML et raster SVG                          | vert        | `xmllint` 3/3 ; raster 1200×675, 1000×750 et 800×800                                                            |
| Gel P0                                     | vert        | SHA-256 `813aa58708f630030068ab38d081e55b3ca3860c021be669a3afbbf38abe39ad` inchangé                             |
| Manifeste historique P1                    | vert        | fichier immuable SHA-256 `c08a27774c97ffb4feaf345470592217f2d5b73a04805e4180ef432b6f1f39ae` ; non rejoué sur P2 |
| Manifeste P2                               | vert        | sept entrées propres au slug, sans gel, manifeste ni fichier partagé ; rejeu après dernière mutation            |
| Portée Git                                 | vert        | aucun fichier partagé modifié par P2 ; aucune opération Git, registre, hub, sitemap, déploiement ou publication |

Verdict de l’agent distinct : `PASSE_2_TERMINEE`. Les deux inconnues
résiduelles sont loyales et visibles : pile exacte du projet Lovable à inspecter
et conditions Lovable réellement acceptées à obtenir. Elles interdisent une
conclusion universelle, mais ne bloquent pas la poursuite éditoriale privée vers
G2. Seul l’orchestrateur peut valider G2 et autoriser P3.

## J. Passe P3 — polish rédactionnel

### J1. Lecture lecteur et idéation avant édition

L’agent P3 distinct a relu à voix haute le titre, le héros, les dix sections,
les douze FAQ, le CTA, les sources visibles et les trois SVG avant toute
correction. La lecture comme dirigeant non technique a fait ressortir dix
frottements de plume, sans défaut factuel :

1. la meta description parlait d’abord de « stations de garde », vocabulaire
   propre à la méthode plutôt que question naturelle du lecteur ;
2. plusieurs badges et libellés de sommaire exigeaient de comprendre
   « chaîne de garde » avant d’en connaître l’utilité ;
3. `gardien`, `témoin`, `pièce brute`, `contre-preuve` et `seuil de transfert`
   formaient un mini-lexique de consultant ;
4. le H2 sur la « même enveloppe » reposait sur une métaphore inutile ;
5. quatre FAQ ne donnaient pas leur réponse dès la première phrase ;
6. la réponse sur les droits concentrait trop de conditions dans une seule
   phrase ;
7. le CTA « cadrer la prochaine preuve » décrivait le processus du prestataire,
   pas le résultat du lecteur ;
8. `build`, `rollback`, `sandbox`, `bon fit` et `mauvais fit` restaient
   traduisibles sans perte de précision ;
9. les statuts internes en capitales apparaissaient trop souvent hors de la
   fiche et de la formule où ils sont nécessaires ;
10. certaines transitions parlaient du protocole ou du guide alors qu’elles
    pouvaient annoncer directement l’action suivante.

### J2. Corrections de plume et de hiérarchie

La méthode conserve son nom lors de sa définition, puis emploie dans la page
les mots que le lecteur peut réutiliser :

| Terme de travail P2      | Formulation publique P3                  |
| ------------------------ | ---------------------------------------- |
| gardien                  | personne responsable                     |
| témoin                   | seconde personne qui vérifie             |
| pièce brute              | trace conservée                          |
| contre-preuve            | test volontaire d’échec                  |
| seuil de transfert       | condition pour passer la main            |
| build vierge             | compilation sur un environnement vierge  |
| rollback                 | retour à une version antérieure          |
| sandbox                  | environnement isolé                      |
| bon fit / mauvais fit    | quand le mode convient / ne convient pas |
| valeur publique inconnue | à confirmer                              |

Le héros donne toujours les quatre chemins, mais nomme maintenant la personne
qui construira, relira, accompagnera ou reprendra. Les H2, le sommaire, les
tableaux, les légendes et les SVG suivent la même progression en langage
ordinaire. Les FAQ sur l’autonomie, le retour de version, la revue et le colis
de remise commencent par une réponse directe. Le CTA reste unique, tardif,
sans téléphone et relié à `/demarrer-un-projet` ; il propose désormais de
décrire ce qui doit être repris et admet toujours qu’un test plus simple peut
suffire.

### J3. Invariants P2 préservés

- classifications inchangées : **34 `VERIFIED`, 8 `A_NUANCER`, 0
  `A_RETIRER`, 2 `INCONNUE`** ;
- aucune source, date, limite, inconnue, formule, station, chiffre, scénario ou
  conséquence factuelle ajoutée, retirée ou rendue plus certaine ;
- les libellés exacts `FERMÉ / ÉCHEC / INCONNU`, la formule
  `F + E + I = 8` et la décision `SUSPENDRE` restent dans la fiche et la
  formule ; leur explication en prose est seulement traduite ;
- l’absence de benchmark exécuté, de prix, de délai, de date publique et de
  garantie reste visible ;
- metadata, Article, Open Graph et Twitter utilisent toujours une description
  unique, sans date ni schéma supplémentaire ;
- gel P0 et manifestes P1/P2 immuables ; P4 historique non modifié ;
- aucun fichier partagé, registre, verrou, Git, déploiement ou publication
  touché.

### J4. Contrôles P3

| Contrôle                                  | Résultat P3 | Portée et preuve                                                                                                      |
| ----------------------------------------- | ----------- | --------------------------------------------------------------------------------------------------------------------- |
| Lecture intégrale et orale                | vert        | titre, héros, dix sections, douze FAQ, CTA, sources et trois SVG relus ; dix frottements consignés avant correction   |
| Registre factuel P2                       | inchangé    | 44/44 assertions : 34 `VERIFIED`, 8 `A_NUANCER`, 0 `A_RETIRER`, 2 `INCONNUE`                                          |
| Vitest propre au slug                     | 19/19 vert  | metadata, faits, inconnues, langage P3, SVG, P0, snapshots P1/P2 et rejeu du candidat P3                              |
| TypeScript `--noEmit`                     | vert        | candidat complet avec dépendances du dépôt reliées temporairement                                                     |
| ESLint ciblé                              | vert        | page, OG et test ; zéro avertissement                                                                                 |
| Prettier                                  | vert        | dossier, page, OG, test et trois SVG                                                                                  |
| XML                                       | 3/3 vert    | trois SVG parsables avec `xmllint --noout`                                                                            |
| Raster et inspection visuelle             | vert        | 1200 × 675, 1000 × 750 et 800 × 800 ; tampon recentré après une première inspection, puis trois visuels relus         |
| Formule et inconnues                      | inchangées  | `FERMÉ / ÉCHEC / INCONNU`, `F + E + I = 8`, `SUSPENDRE`, aucun inconnu converti en zéro                               |
| Metadata / Article / Open Graph / Twitter | cohérents   | une description commune, Article + BreadcrumbList seulement, aucune date inventée                                     |
| Gel et manifestes historiques             | inchangés   | P0 `813aa587…`, P1 `c08a2777…`, P2 `e30ce514…`, P4 historique `8083d817…`                                             |
| Portée et diff-check                      | vert        | fichiers propres au slug et manifeste P3 uniquement ; aucun fichier partagé, verrou, registre ou état externe modifié |
| Manifeste P3                              | 7/7 vert    | dossier, page, OG, test et trois SVG ; sans gel, manifeste circulaire ni fichier partagé                              |

Le manifeste P3 est généré après la dernière mutation du dossier et rejoué par
le test propre au slug. Son empreinte externe est remise à l’orchestrateur avec
le compte rendu de passe ; elle n’est pas recopiée ici afin de ne pas créer de
cycle dossier → manifeste → dossier.

## K. Passe P4 — antipasse IA

### K1. Lecture isolée des sections et quinze motifs

L’agent P4 distinct a relu le héros, chaque H2 hors de son contexte, le corps,
les douze FAQ, le CTA, la conclusion, les sources, l’image Open Graph et les
trois SVG. La question posée à chaque section était double : répond-elle à son
titre et conduit-elle le dirigeant vers une action ou une conséquence ?

| Motif recherché                          | Observation P4                                                                                                  | Décision                                                                                       |
| ---------------------------------------- | --------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| 1. Autosatisfaction                      | absente : aucune note de qualité, victoire ou promesse sur le guide                                             | conserver                                                                                      |
| 2. Triptyques réflexes                   | les séries portent des objets réels : quatre voies, huit vérifications et cinq éléments de reprise              | conserver les inventaires utiles                                                               |
| 3. Symétrie binaire excessive            | les quatre issues incluent autonomie, revue, accompagnement et report                                           | conserver cette asymétrie de décision                                                          |
| 4. Adjectifs vendeurs sans chiffre       | aucun superlatif ; « très concrète » qualifiait cependant la méthode sans apporter de preuve                    | remplacer par « liste d’actions et de preuves »                                                |
| 5. Métaphores forcées                    | « chaîne de garde » et « colis de remise » désignent deux artefacts expliqués et illustrés                      | conserver ; ils structurent le test au lieu de le décorer                                      |
| 6. Parenthèses en cascade                | absentes du contenu public                                                                                      | conserver                                                                                      |
| 7. Connecteurs robotiques                | aucun enchaînement automatique dominant ; une phrase juridique cumulait trois adverbes                          | la rendre directe sans changer sa portée                                                       |
| 8. Conclusion formatée qui répète        | les H2 01 et 10 commençaient tous deux par « Décidez » et répétaient la reprise                                 | distinguer choix du constructeur en ouverture et validation de la prochaine étape en fermeture |
| 9. Longueur de phrases uniforme          | alternance déjà présente entre réponses courtes, explications et tableaux                                       | conserver                                                                                      |
| 10. Verbes neutres cachant l’action      | « fermer » une vérification et « cinq façons de sortir » demandaient de traduire la méthode                     | demander une réponse et nommer cinq éléments de reprise                                        |
| 11. Formulations administratives         | « ne définissent simplement pas expressément » alourdissait deux passages sur les droits Bolt                   | écrire « ne précisent pas le régime »                                                          |
| 12. Inversions sujet-verbe artificielles | absentes                                                                                                        | conserver                                                                                      |
| 13. Puces parallèles mais pauvres        | les puces attribuent comptes, preuves, risques ou conditions d’arrêt ; aucune n’est seulement décorative        | conserver                                                                                      |
| 14. Dramatisation creuse                 | aucun gain, urgence ou catastrophe inventé ; la remarque sur une vidéo détournait toutefois l’attention du test | recentrer sur le premier test sans garantir la durée d’un engagement                           |
| 15. Enchaînement logique implicite       | la conclusion ne disait pas assez directement quand rouvrir la décision                                         | indiquer de reposer la question si périmètre, données ou responsabilité changent               |

Les recherches complémentaires n’ont trouvé ni « ce qu’il faut retenir »,
ni conclusion annoncée, ni série de questions rhétoriques, ni vocabulaire de
solution « incontournable » ou « robuste ». Les oppositions entre code et
données, projet et site, ou scan et audit sont conservées : elles décrivent des
frontières factuelles, pas un faux contraste de plume.

### K2. Corrections positives

1. le H2 01 devient « Choisissez qui construit avant d’ouvrir un outil » : il
   introduit les quatre modes sans annoncer déjà la conclusion ;
2. le H2 10 devient « Validez seulement la prochaine étape du projet » : il
   distingue le premier test d’un engagement de long terme sans promettre la
   réversibilité et dit quand rouvrir la décision ;
3. le sommaire et les H2 04 et 06 nomment l’action attendue — obtenir huit
   réponses et tester cinq éléments — au lieu d’employer « fermer » ou « façons
   de sortir » ;
4. la définition de la chaîne de garde annonce une liste d’actions et de
   preuves, sans adjectif autosatisfait ;
5. les deux passages sur les conditions StackBlitz disent désormais qu’elles
   « ne précisent pas le régime » des sorties IA Bolt actuelles ; la lacune, les
   usages du service et l’absence de contradiction juridique démontrée restent
   inchangés ;
6. le premier paragraphe final retire la pique contre une vidéo, demande de ne
   pas transformer le choix du premier test en engagement de long terme, puis
   de rouvrir le choix lorsque le périmètre, les données ou la responsabilité
   changent.

### K3. Passages volontairement conservés

- la réponse du héros en quatre voies reste dense mais lisible en moins de 150
  mots ; elle répond avant d’expliquer ;
- la chaîne de garde, ses huit stations et le colis de remise restent les
  aspérités propres à ce guide ; les remplacer par une liste générique ferait
  perdre la méthode ;
- les listes de comptes, données, secrets et actions restent parallèles parce
  qu’elles servent d’inventaire opérationnel ;
- les phrases directes « Non. » ou « Oui » des FAQ sont conservées : la réponse
  vient avant la précaution ;
- les rappels sur les scans, les inconnues et la restauration restent répétés
  aux endroits où une fausse déduction pourrait conduire à une mise en production.

### K4. Faits, exemples et contradictions

- registre P2 inchangé : **44/44 assertions**, soit **34 `VERIFIED`, 8
  `A_NUANCER`, 0 `A_RETIRER`, 2 `INCONNUE`** ;
- 32 URL, dates de consultation, limites de plans et frontières produit
  inchangées ;
- formule exacte `F + E + I = 8`, règle `SUSPENDRE` et impossibilité de convertir
  une inconnue en zéro inchangées ;
- Relais Devis, Atelier Lune, Atelier Silex et les deux adresses `.example`
  restent explicitement fictifs ; aucun résultat ou témoignage ne leur est
  attribué ;
- la méthode reste non exécutée, sans benchmark, prix, délai, gain, donnée réelle
  ni date publique ;
- les deux inconnues Lovable restent ouvertes : pile réelle du projet et
  conditions effectivement acceptées par le compte ;
- la lacune des conditions StackBlitz reste une lacune, jamais transformée en
  contradiction juridique ;
- CTA unique, tardif, vers `/demarrer-un-projet`, sans téléphone ni promesse de
  résultat.

### K5. Contrôles de fermeture P4

| Contrôle                       | Résultat P4 | Portée et preuve                                                                                               |
| ------------------------------ | ----------- | -------------------------------------------------------------------------------------------------------------- |
| Lecture H2 isolée et 15 motifs | vert        | dix H2 distincts ; six corrections positives ; aucune réécriture mécanique                                     |
| Registre factuel P2            | inchangé    | 44/44 : 34 `VERIFIED`, 8 `A_NUANCER`, 0 `A_RETIRER`, 2 `INCONNUE`                                              |
| Vitest propre au slug          | 22/22 vert  | ajoute la distinction des H2, interdit la promesse de désengagement et rejoue le manifeste P4                  |
| TypeScript `--noEmit`          | vert        | candidat complet avec dépendances reliées temporairement                                                       |
| ESLint ciblé                   | vert        | page, image Open Graph et test ; zéro avertissement                                                            |
| Prettier                       | vert        | dossier, page, image Open Graph, test et trois SVG ; parseur HTML explicite pour les SVG                       |
| XML                            | 3/3 vert    | les trois SVG sont parsables                                                                                   |
| Raster et inspection visuelle  | vert        | 1200 × 675, 1000 × 750 et 800 × 800 ; aucun texte coupé ni chevauchement observé                               |
| Différentiel P3 → P4           | vert        | image Open Graph et trois SVG identiques ; 32 URL, dates et nombres publics identiques                         |
| Gel et manifestes historiques  | inchangés   | P0 `813aa587…`, P1 `c08a2777…`, P2 `e30ce514…`, P3 `435dab84…`                                                 |
| Portée                         | vert        | dossier, page, test et manifeste P4 seulement ; aucun fichier partagé, registre, verrou, Git ou release touché |
| Manifeste P4                   | 7/7 vert    | sept fichiers relus, sans gel, manifeste circulaire ni fichier partagé ; rejeu après la dernière mutation      |

L’empreinte externe du manifeste P4 est remise à l’orchestrateur avec le
compte rendu de passe ; elle n’est pas recopiée ici afin d’éviter tout cycle
dossier → manifeste → dossier.

### K6. Reprise après G4

Le premier contrôle G4 a refusé l’assertion « Votre décision ne vous engage pas
pour les trois prochaines années ». Cette phrase promettait une absence
d’engagement que le guide ne pouvait pas prouver : un contrat, un compte, une
donnée ou une dépendance technique peut produire l’effet inverse.

La reprise la remplace par une action bornée : « Ne transformez pas le choix du
premier test en engagement de long terme. » La suite reste inchangée et demande
de choisir la plus petite expérience dont la remise peut être vérifiée, puis de
rouvrir la question si le périmètre, les données ou la responsabilité changent.
Un test dédié interdit désormais la promesse rejetée et exige les deux phrases
d’action. Aucun autre passage public, fait, exemple, visuel ou fichier partagé
n’a été modifié pendant cette reprise.

## L. Contrôle transversal indépendant

L’agent Q distinct `lovable_saas_q` a audité en lecture seule le snapshot P4
exact, manifeste 7/7 SHA-256
`e5c4b547417574099019071221b50d25aaa407592a392e995ddc382344e79ad2`.
Il a rendu `GO_QUALITE_GUIDE` à **95/100**, avec une charte à **19/20**,
aucun axe sous 9/10 et zéro P0/P1.

Le contrôle a rouvert 44/44 assertions et 34/34 URL primaires uniques. Il
confirme le décompte **34 `VERIFIED`, 8 `A_NUANCER`, 0 `A_RETIRER`, 2
`INCONNUE`**, sans divergence factuelle matérielle. Les deux inconnues restent
la pile réellement utilisée par le projet Lovable et les conditions
effectivement acceptées par le compte. La politique Lovable doit être rouverte
avant toute publication et après le changement annoncé pour le 9 septembre
2026 ; la page actuelle reste loyale parce qu’elle exige offre, réglages et
conditions exacts au lieu de généraliser une confidentialité.

Le BAT Q a parcouru 320, 360, 390, 430, 640, 768, 1024, 1280, 1440 et 1600 px.
Il constate zéro débordement global, un H1 contenu, sept tableaux transformés
en cartes sous 768 px, douze FAQ, trois SVG réellement chargés, un CTA
éditorial tardif dans `main`, aucun CTA téléphone dans `main`, aucune erreur de
console ou de réseau et zéro violation axe à 390 et 1440 px. Les contrastes
OKLCH restent `incomplete` dans axe-core 4.10 et ont donc été relus visuellement
en clair et en sombre, sans être artificiellement déclarés automatisés.

## M. Intégration centrale — release candidate privée

### M1. Baseline, registre et mutations autorisées

La fenêtre centrale a été explicitement accordée le 6 août 2026.
`integration.lock` a été acquis atomiquement à 02:59:09 +02:00. La branche
reste empilée sur le HEAD d’entrée exact
`5f305b0cc6566c093b86a7234b64c0b5291eaeb4`, déjà poussé pour le guide #32 ;
aucun rebase implicite ni date éditoriale n’est introduit.

L’intégration inscrit le guide dans `src/lib/guides.ts` comme
`ready-for-human-review`. Aucune date de publication n’est créée par cette
intégration : `datePublished` et `dateModified` restent absentes, de même que
leurs équivalents Open Graph et `Article`. La metadata et les données
structurées locales sont remplacées par `buildGuideMetadata` et
`buildGuideStructuredData`. Le brouillon reste `noindex,nofollow`, absent du
hub public, du sitemap et de `llms.txt`. Le HTML réellement servi contient
3 034 mots visibles ; le temps de lecture central est donc **15 minutes** à
200 mots par minute.

Le guide `mvp-saas-quoi-inclure` apporte un lien entrant contextuel quand le
lecteur doit encore choisir qui construira le premier test. L’ancre annonce les
quatre voies, responsabilités et preuves de reprise sans classement universel.
Après cette retouche, le guide voisin contient 4 681 mots visibles et conserve
son temps de lecture de 23 minutes.

Le P2 partagé trouvé par Q dans le formulaire global est fermé sous mutex :
le libellé « En quelques phrases » utilise désormais `htmlFor` vers l’identifiant
stable du `textarea`, tandis que le bouton « Dicter » reste hors du `label`.
Un test de rendu statique verrouille l’association et l’absence d’imbrication.
Le slug est également retiré de l’inventaire des redirections historiques et
reçoit une icône de hub, sans devenir découvrable tant que son statut reste
privé.

À ce stade, aucune publication, aucun déploiement, aucune indexation et aucune
preuve publique ne sont revendiqués. Batterie globale, build, BAT release,
manifeste d’intégration, contre-audit release, commit et push restent à fermer.

### M2. Batterie globale, alerte croisée et build de production

L’installation propre `npm ci` a installé 750 paquets. Le rejeu final après
intégration et corrections ferme les contrôles suivants :

| Contrôle                 | Résultat release | Preuve                                                                                    |
| ------------------------ | ---------------- | ----------------------------------------------------------------------------------------- |
| manifeste d’intégration  | vert             | chaque chemin et SHA-256 rejoué après la dernière mutation couverte                       |
| tests ciblés intégration | 108/108          | guide #32 historique, guide #33, voisin MVP, footer, registre et redirections             |
| tests globaux Vitest     | 1 292/1 292      | 122 fichiers de test, quatre workers                                                      |
| `check:seo` final        | 194/194          | 33 fichiers de test ; le test du CTA FAQ partagé est inclus                               |
| TypeScript               | vert             | `npx tsc --noEmit`, aucune erreur                                                         |
| ESLint ciblé             | vert             | guide, voisin, footer, FAQ, hub, registre et redirections, aucun avertissement            |
| build production         | vert             | Next.js 16.2.12, 80 pages statiques générées, TypeScript inclus                           |
| artefact SEO post-build  | vert             | 50 URL de sitemap, 33 liens `llms.txt`, 50 pages, 22 temps de lecture et 88 blocs JSON-LD |

Une alerte qualité croisée du guide #7 a signalé le texte partagé « Un
conseiller vous rappelle sous 24 h. » dans le CTA par défaut de la FAQ
catégorisée. Le #33 utilise la FAQ plate et ne rendait donc pas ce texte, mais
la promesse absolue restait un P1 partagé. Sous le mutex central, elle est
remplacée par « Objectif : vous répondre le prochain jour ouvré, sans délai
garanti. ». Un test DOM global exige cette formulation qualifiée et interdit
l’ancienne. La recherche source ne retrouve plus la promesse hors assertions
négatives ; le primaire a été notifié avant le nouveau build.

`npm audit --omit=dev` relève un risque fournisseur connu : un niveau `high` et
trois `moderate`, sans niveau `critical`. Ils proviennent tous de
`undici@7.28.0`, transitif dans
`@opennextjs/cloudflare@1.20.1 → wrangler@4.110.0 → miniflare@4.20260708.1`.
La seule correction proposée par npm recule le paquet direct vers
`@opennextjs/cloudflare@1.8.4` et est signalée comme majeure. Aucun changement
de dépendance non relié au guide n’est donc improvisé dans cette release ; le
risque est déclaré, sans être présenté comme résolu.

### M3. BAT release réel et impression

Le build final a été servi localement par `next start`, puis contrôlé dans un
navigateur réel. Les largeurs 320, 360, 390, 430, 640, 768, 1024, 1280, 1440
et 1600 px sont couvertes par le BAT Q ; le BAT release a rejoué la même série,
avec le point 768 encadré à 767 px par l’échelle du navigateur intégré. Aucun
débordement horizontal racine n’apparaît. Chaque largeur conserve un H1, un
`main`, douze questions, sept tableaux, le badge `Brouillon privé`, le libellé
du message relié à son `textarea` et zéro identifiant dupliqué. Les trois SVG
différés ont été réellement chargés au défilement avec des dimensions natives
non nulles.

Le chargement final produit 27 réponses réseau, zéro code HTTP en erreur, zéro
échec de chargement et aucune entrée console de niveau avertissement ou erreur.
axe-core ne relève aucune violation à 390 ni à 1440 px. Le script axe injecté
pour ce contrôle a été retiré par rechargement. Les thèmes clair et sombre ont
été inspectés visuellement à 1440 px ; héros, badges, texte, bordures et
navigation restent lisibles, sans rognage. Le parcours clavier et le point
exact 768 px restent en outre couverts par le BAT Q indépendant et les tests
d’accessibilité globaux rejoués après correction.

L’impression réelle a été produite par Chromium puis relue avec Poppler : 28
pages PDF balisées, douze FAQ et leurs réponses, trois illustrations nettes,
aucun CTA éditorial, mobile, téléphone ou rendez-vous, aucune superposition,
aucun texte coupé et aucun glyphe manquant. Une planche des 28 pages et les
pages contenant les trois visuels ont été inspectées à leur résolution rendue.
La dernière page contient uniquement la douzième FAQ complète ; cet espace
blanc résulte de la conservation de la carte et non d’un contenu manquant.

### M4. Snapshot remis au contre-audit release

Le manifeste d’intégration couvre le dossier final, les quatre manifestes
historiques, le gel P0, le voisin maillé, les trois SVG, les pages et tests du
guide, la correction de provenance du #32, le footer, les deux composants FAQ
partagés et leurs tests, le hub, le registre privé et les redirections. Le
manifeste s’exclut lui-même pour éviter tout cycle et son empreinte externe est
remise au dernier agent indépendant.

Le contre-audit doit relire exactement ce snapshot, les preuves de batterie,
le build, le BAT et l’impression. Après son verdict, aucune mutation suivie du
snapshot n’est autorisée avant commit. Un GO ne vaudra que pour la branche
privée : sans déploiement et BAT public distincts, l’état maximal restera
`POUSSE`, jamais `PUBLIE` ni indexé.
