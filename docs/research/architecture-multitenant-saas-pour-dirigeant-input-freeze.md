# Gel d’entrée — guide #34 `architecture-multitenant-saas-pour-dirigeant`

Date du gel : **6 août 2026**
Passe suivante : **P1 — recherche actuelle, architecture et création complète**
Responsable de coordination : **`SECONDARY_ORCHESTRATOR_019fb1e0`**

## 1. Snapshot Git et périmètre

- worktree :
  `/Users/quentinhagnere/Developpement/Hagnere-Code-wt-architecture-multitenant-saas-pour-dirigeant` ;
- branche : `codex/architecture-multitenant-saas-pour-dirigeant` ;
- HEAD d’entrée : `3622dbc35e141c2598d7ac5fbcbb3a26ea8e29e8` ;
- état initial : propre avant la création du présent gel ;
- registre de coordination : guide #34 réservé atomiquement ;
- verrou permanent du slug présent dans le worktree de coordination ;
- `integration.lock` et `registry.lock` absents après la création du worktree ;
- aucun `git add`, commit, push, merge, rebase, déploiement ou changement de
  fichier partagé n’est autorisé pendant P1 à P4.

Périmètre d’écriture fermé des quatre passes :

1. le présent gel d’entrée ;
2. `docs/research/architecture-multitenant-saas-pour-dirigeant.md` ;
3. les quatre manifestes P1 à P4 sous `docs/research/manifests/` ;
4. `src/app/guides/architecture-multitenant-saas-pour-dirigeant/page.tsx` ;
5. `src/app/guides/architecture-multitenant-saas-pour-dirigeant/opengraph-image.tsx` ;
6. `src/app/guides/architecture-multitenant-saas-pour-dirigeant/content-quality.test.ts` ;
7. au plus trois SVG originaux sous
   `public/guides/architecture-multitenant-saas-pour-dirigeant/`.

Le manifeste de chaque passe couvre les artefacts utiles au lecteur : dossier,
page, image Open Graph, test et SVG. Le gel et le manifeste lui-même restent
hors manifeste de passe pour éviter toute référence circulaire.

## 2. Gouvernance applicable

La passe applique, dans cet ordre :

- `CLAUDE.md` et sa règle zéro invention ;
- `docs/regle-or-vigilance-seo-publication.md` ;
- `docs/charte-qualite-guides.md` ;
- `docs/workflow-maitre-guides-4-passes.md` ;
- `docs/instructions-guide-de-qualite.md` ;
- la roadmap et le registre de coordination ;
- `docs/research/_modele-guide.md` ;
- le prompt maître du second orchestrateur et l’intention des quatre DOCX.

Sont neutralisés : quotas mécaniques, densité de mot-clé, jargon non expliqué,
faux client, faux benchmark, faux coût moyen, fausse obligation réglementaire,
promesse absolue de sécurité, conformité, disponibilité, délai, économie ou
performance, schémas `FAQPage` et `HowTo`, et téléchargement XLS/XLSX/CSV non
demandé.

## 3. État hérité

Aucune ancienne route, page, recherche ou manifeste portant ce slug n’est
présent dans le snapshot. Les mentions génériques de « multi-tenant » ailleurs
dans le dépôt ne constituent ni une source factuelle ni une base rédactionnelle.

La seule intention éditoriale gelée par la roadmap est :

> permettre à un dirigeant de comprendre les décisions d’architecture qui
> affectent le coût et l’isolation client, au moyen de schémas simples et de
> conséquences commerciales concrètes.

Priorité roadmap : **P3**. Sortie attendue : **cadrage SaaS**, pas audit de
sécurité, conseil juridique, tutoriel PostgreSQL ou catalogue cloud.

## 4. Décision principale à rendre possible

Le lecteur doit pouvoir choisir un **niveau d’isolation à faire instruire et
prouver**, sans prétendre choisir seul une implémentation technique définitive.
Le guide doit faire émerger quatre sorties loyales :

1. démarrer simple avec des garde-fous explicites et une trajectoire de sortie ;
2. isoler davantage certaines données, charges ou fonctions à risque ;
3. prévoir une offre ou un déploiement dédié pour certains comptes ;
4. différer la décision finale et financer un test d’architecture ciblé lorsque
   les contraintes sont encore inconnues.

Le hero répond immédiatement à trois questions :

- « multi-tenant » veut-il dire que tous les clients partagent tout ? **Non** ;
- une base par client est-elle toujours plus sûre ou moins chère ? **Non** ;
- quelle décision dirigeant faut-il prendre ? **Définir ce qui doit être isolé,
  pourquoi, comment on le prouve et quel coût d’exploitation on accepte.**

## 5. Frontières techniques obligatoires

Le guide sépare au minimum :

- le **tenant métier** : entreprise, organisation, espace, filiale ou contrat ;
- l’identité, l’appartenance à une organisation et le contexte actif ;
- l’autorisation objet par objet, distincte de la simple authentification ;
- l’application et ses processus de fond ;
- les données transactionnelles, fichiers, sauvegardes et restaurations ;
- les caches, index de recherche, files, événements et tâches planifiées ;
- les journaux, métriques, exports, support et outils d’administration ;
- le calcul, le réseau, le stockage, la région et le déploiement ;
- le plan de contrôle commun et, le cas échéant, des plans de données isolés.

Les familles d’options doivent être expliquées sans palmarès universel :

1. données partagées avec clé de tenant et contrôles cohérents ;
2. schéma ou namespace séparé dans une infrastructure partagée ;
3. base, stockage ou ressources dédiés par tenant ;
4. déploiement dédié ;
5. architecture hybride selon le risque, la région, le volume ou l’offre.

Une option peut différer selon la couche. « Base dédiée » ne prouve pas, à elle
seule, l’isolation des fichiers, caches, sauvegardes, logs, exports, identités ou
outils de support. À l’inverse, une base partagée n’implique pas automatiquement
une fuite : les contrôles et leurs preuves doivent être examinés.

## 6. Conséquences dirigeant à traduire

Chaque choix technique est relié à des effets observables :

- vitesse d’onboarding et coût marginal d’un nouveau client ;
- capacité de proposer des offres standard, premium ou dédiées ;
- personnalisation, configuration et dérive des variantes ;
- ventes grands comptes, questionnaires sécurité et engagements contractuels ;
- résidence des données, régions, sous-traitants et responsabilités à qualifier ;
- migrations de schéma, déploiements, correctifs et retour arrière ;
- voisin bruyant, quotas, performance et rayon d’impact d’un incident ;
- sauvegarde, restauration d’un seul client et tests de restauration ;
- support, accès administrateur, export, suppression et départ d’un client ;
- observabilité par tenant sans exposer de données sensibles ;
- réversibilité, portabilité et coût d’exploitation réel.

Le guide ne transforme pas ces conséquences en prix universels. Toute
illustration chiffrée est un cas fictif, avec formule, unités, hypothèses
éditables, inconnues séparées et contrôle inverse.

## 7. Preuves et sources attendues en P1/P2

Les assertions techniques volatiles ou normatives doivent être rouvertes au
6 août 2026 dans des sources primaires. La recherche doit notamment couvrir :

- recommandations officielles AWS SaaS Lens et guidance d’isolation SaaS ;
- guidance Microsoft Azure Architecture Center sur les solutions multitenant ;
- documentation PostgreSQL courante sur Row-Level Security, sans la présenter
  comme une garantie autonome ;
- OWASP sur les contrôles d’accès objet et les risques d’IDOR/BOLA ;
- documentation d’un fournisseur d’identité ou standard pertinent uniquement
  si une affirmation précise l’exige ;
- CNIL ou textes européens seulement pour les points réellement juridiques,
  avec périmètre et date, sans faire du choix multi-tenant une certification RGPD.

Chaque fait important du dossier reçoit un état `VERIFIED`, `A_NUANCER`,
`A_RETIRER` ou `INCONNUE`, une source primaire, une date de consultation et une
conséquence rédactionnelle. Une source secondaire peut orienter la recherche,
jamais fermer seule une affirmation sensible.

## 8. Preuves différenciantes à produire

Le guide doit fournir des outils réellement utilisables, pas des illustrations
décoratives :

- une carte des couches où une séparation peut échouer ;
- une matrice lisible comparant cinq familles d’isolation sur des critères
  identiques ;
- un chemin de décision « contrainte → preuve → option → coût d’exploitation » ;
- un mini-protocole reproductible avec deux tenants fictifs A et B, couvrant
  lecture, écriture, export, tâche de fond, fichier, cache, log, sauvegarde et
  restauration ;
- un registre des inconnues à apporter à un atelier technique ;
- des questions de contrat et d’exploitation formulées sans promesse.

Au plus trois SVG originaux sont autorisés. Ils doivent rester lisibles en clair
et sombre, à 320 px, au zoom et à l’impression, avec titre, description, texte
alternatif utile et source interne explicite.

## 9. Cannibalisation à éviter

- `cahier-des-charges-saas` décrit les exigences globales du produit ;
- `mvp-saas-quoi-inclure` fixe le socle minimum avant le premier client ;
- `facturation-abonnements-saas` traitera essais, plans, impayés et changements
  d’offre ;
- `securite-saas-b2b` traitera le socle de sécurité vendable ;
- `rgpd-saas-b2b` répartira les rôles et preuves de protection des données ;
- `heberger-saas-france-ou-europe` comparera les implantations ;
- `droits-acces-application-metier` approfondit rôles et permissions d’un outil
  métier ;
- `bubble-ou-saas-sur-mesure` compare une plateforme et du code dédié.

Le guide #34 se concentre sur le **niveau d’isolation entre organisations et sa
trajectoire d’exploitation**. Il renvoie vers les sujets voisins au lieu de les
réécrire.

## 10. Exigences de page et de contrôle

- titre et description naturels, orientés question de dirigeant ;
- un seul H1, structure H2/H3 logique et aucun saut artificiel ;
- langage français accessible, tout terme technique expliqué à sa première
  occurrence ;
- tableaux transformés en cartes lisibles sous 768 px ;
- zones défilables focusables et nommées si elles subsistent ;
- douze FAQ utiles et visibles, sans JSON-LD `FAQPage` ;
- un seul CTA éditorial tardif et loyal vers `/demarrer-un-projet`, avec mauvais
  fit explicite et action autonome avant contact ;
- aucun CTA téléphone ou promesse de rappel/délai ;
- page privée `noindex,nofollow` sans `datePublished` inventée pendant les passes ;
- BAT réel attendu à 320, 360, 390, 430, 640, 768, 1024, 1280, 1440 et 1600 px,
  thèmes clair/sombre, clavier, axe, console, réseau et impression ;
- tests de contenu vérifiant surtout les invariants et risques, pas un comptage
  mécanique destiné à gonfler le score.

## 11. STOPs d’entrée

- « multi-tenant », « silo », « pool », « bridge », « RLS », « sharding » et
  « cellule » n’ont aucun sens utile tant que la couche concernée n’est pas dite ;
- aucune architecture ne sera déclarée sûre, conforme, hautement disponible ou
  moins chère sans preuve et périmètre ;
- aucune recommandation « une base par client » ou « tout partager » par défaut ;
- aucune affirmation qu’un identifiant de tenant, un sous-domaine, un rôle ou
  RLS suffit seul à empêcher les fuites ;
- aucune extrapolation juridique à partir d’un schéma technique ;
- aucun chiffre de coût, charge, latence, disponibilité, incident ou économie
  présenté comme moyenne du marché ;
- aucune donnée, marque cliente, incident ou témoignage réel inventé ;
- aucune validation par un lecteur humain extérieur n’est disponible ;
- registre, hub, sitemap, `llms.txt`, redirection, maillage entrant et dates
  éditoriales restent hors périmètre jusqu’à l’intégration autorisée ;
- la future `datePublished` réelle et le BAT public restent des STOPs avant toute
  publication.
