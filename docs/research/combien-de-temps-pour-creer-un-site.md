# Dossier de recherche — `combien-de-temps-pour-creer-un-site`

> **Avis d'autorité P1 r1 — 25 juillet 2026.** Les sections 13 à 27 constituent
> désormais le dossier de recherche opposable pour la prochaine rédaction.
> Elles remplacent les fourchettes, calculs, comparaisons, sources et consignes
> des sections 1 à 12 lorsqu'ils divergent. Les éléments antérieurs restent
> conservés comme historique de l'audit. Cette passe n'a modifié ni la page
> publique, ni son image sociale, ni le registre partagé. Elle ne prouve ni P2,
> ni P3, ni P4, ni publication, ni indexation.

## Journal des quatre passes

| Passe                        | État                        | Date       | Responsable                                  | Snapshot                                                    | Blocages                                                               |
| ---------------------------- | --------------------------- | ---------- | -------------------------------------------- | ----------------------------------------------------------- | ---------------------------------------------------------------------- |
| 1. Recherche                 | **Terminée — porte validée** | 25/07/2026 | `/root/excel_p1_mondial`                     | manifeste P1 r1 externe                                    | Aucun défaut P1 ouvert après contre-audit à froid et revalidation.      |
| 2. Rédaction et intégration  | **À faire**                  | —          | `/root`, propriétaire éditorial unique       | page, OG et registre courants inclus au manifeste P1        | Appliquer le plan annoté sans reprendre une durée comme moyenne marché. |
| 3. Contre-audit indépendant  | **Bloquée**                  | —          | autre agent que l'éditeur P2                 | futur manifeste P2                                         | P2 non terminée et aucun rendu corrigé à auditer.                       |
| 4. Plume humaine et contrôle | **Bloquée**                  | —          | lecteur dirigeant réel + QA                  | futur manifeste P3                                         | P3 non validée ; aucun BAT navigateur ni autorisation éditoriale.       |

### Manifeste documentaire observé

| Fichier                                                                           | SHA-256 au 24/07/2026                                              | Portée              |
| --------------------------------------------------------------------------------- | ------------------------------------------------------------------ | ------------------- |
| `src/app/guides/combien-de-temps-pour-creer-un-site/page.tsx`                     | `7f0390185f8a9af9c8f98f935091d44a992a68b02de78d6d9fac2e2dd4fc5308` | Guide courant.      |
| `docs/audits/giga-audit-2026-07-24/guides/combien-de-temps-pour-creer-un-site.md` | `b258f9aa8f163882965fdd12d5a5e7986123b01e9e53b4a5778b135ec58f40fd` | Audit historique.   |
| `docs/charte-qualite-guides.md`                                                   | `5ee616faa4959dc8ad2b0eb19a5b19ffbf53299b62665700093c5c176b0b8491` | Contrat de qualité. |
| `docs/workflow-maitre-guides-4-passes.md`                                         | `a3a8c8f1be5d5d60b096f251f22b27ae5526adb708c334c4d6f0b7b4270c60c4` | Portes.             |

## 1. Brief dirigeant

```text
Slug : combien-de-temps-pour-creer-un-site
Statut : page existante, score historique 71/100, P1 non validée
Requête principale hypothétique : combien de temps pour créer un site
Moment : planifier avant engagement et protéger une date commerciale
Lecteur : dirigeant de TPE/PME, indépendant ou responsable de lancement avec
          ouverture, salon, campagne, recrutement ou saison à date fixe
Déclencheur : un prestataire annonce 4–8 semaines sans détailler les
              validations, contenus et dépendances
Question : « À quelle date le site sera-t-il utilisable et stable, qui peut
            bloquer, et quelles décisions dois-je prendre maintenant ? »
Décision : date cible, V1, responsabilités, marge, go/no-go et plan de bascule
Action sans contact : remplir un rétroplanning daté et une matrice de responsables
CTA : diagnostic de fenêtre, chemin critique et prérequis, avec délai/limites
Hors périmètre : date universelle, indexation garantie, engagement contractuel
                 sans étude du périmètre
```

### Phrase réelle et réponse

- **Phrase téléphone :** « Nous ouvrons le 15 octobre. Si je signe maintenant,
  est-ce que le site sera testé à temps, et qu'est-ce que mon équipe doit
  fournir cette semaine ? »
- **Réponse en une phrase :** la date dépend du vrai point de départ, du
  périmètre de V1, des contenus, validations, tiers et tests ; il faut remonter
  depuis l'événement avec responsabilités, marge et critères de sortie.
- **Promesse :** distinguer travail et attente, identifier le chemin critique
  et obtenir un planning à mettre au devis.

### Contrat de langage

| Terme           | Traduction                                                                                           |
| --------------- | ---------------------------------------------------------------------------------------------------- |
| chemin critique | suite des tâches dont tout retard décale la date finale                                              |
| recette         | vérification formelle que le site fait ce qui était prévu                                            |
| RACI            | tableau simple indiquant qui fait, valide, conseille et doit être informé                            |
| DNS/TTL         | réglages qui dirigent le domaine et durée pendant laquelle certains réseaux gardent l'ancien réglage |
| rollback        | procédure pour revenir à la version précédente si la bascule échoue                                  |
| V1              | version utile limitée à publier avant les fonctions secondaires                                      |

Les 150 premiers mots doivent partir de la date fixe, distinguer « coder » de
« utilisable et testé », annoncer trois calendriers datés et expliquer que les
fourchettes sont conditionnelles.

## 2. Couverture actuelle

La page traite :

1. délais par type ;
2. vrai début et vraie fin ;
3. phases ;
4. préparation ;
5. validations ;
6. accélération ;
7. dépendances ;
8. après mise en ligne ;
9. rétroplanning ;
10. clauses du devis.

### Forces

- 1–3 semaines pour une page, 4–8 pour une vitrine, 2–4 mois pour une boutique
  sont qualifiés d'estimations, non promesses.
- Démarrage, version test, mise en ligne et fin des vérifications sont séparés.
- Les contenus et validations sont reconnus comme travail.
- Un décideur unique et des retours regroupés sont recommandés.
- « Cinq pages testées plutôt que vingt inachevées » donne une opinion utile.
- Refonte, e-commerce, outil métier et multilingue sont distingués.
- L'exploration Google n'est pas confondue avec une garantie d'indexation.
- L'exemple du cabinet est fictif.
- Le devis doit annoncer jalons et responsabilités.

### Manques

- 4–8 semaines mélange heures de travail et attentes.
- Les phases ne montrent pas parallèle versus dépendance.
- La boutique n'est pas segmentée par catalogue, paiement, livraison,
  fiscalité, ERP ou B2B.
- « outil métier : à chiffrer » ne donne pas les questions de l'étude.
- La marge n'a pas d'emplacement ni de niveau conditionnel.
- La recette n'a ni navigateurs, ni tailles, ni cas formulaire/commande, ni
  accessibilité, ni consentement.
- DNS, TTL, fenêtre de bascule, accès et retour arrière restent superficiels.
- Mentions, données, cookies, droits photos et accessibilité ne deviennent pas
  jalons.
- L'exemple six semaines n'a pas de calendrier, propriétaire ni marge.
- Le CTA ne dit pas ce que reçoit le prospect ni sous quel délai.

## 3. Frontières éditoriales

| Page                                     | Intention                      | Frontière                                                              |
| ---------------------------------------- | ------------------------------ | ---------------------------------------------------------------------- |
| `/guides/combien-coute-un-site-internet` | budget et TCO                  | ici, date, dépendances et marge                                        |
| `/guides/cout-maintenance-site-internet` | fonctionnement après lancement | ici, inclure seulement J+1/J+7/J+30 et mailler vers le détail          |
| kit cahier des charges                   | formaliser périmètre           | ici, transformer périmètre et date en rétroplanning                    |
| guides refonte/migration                 | protéger trafic et bascule     | ici, une voie spécifique du planning, sans remplacer le guide détaillé |
| guides SaaS/app métier                   | cycles produit plus longs      | sortir de la simple fourchette de site et montrer des lots             |

**Justification :** l'URL résout une décision de calendrier et de
responsabilité, non une estimation de coût ou un cahier des charges complet.

P1 doit vérifier « délai création site », « combien de semaines site vitrine »,
« planning refonte », « délai e-commerce » et « rétroplanning site ».

## 4. Benchmark historique

L'audit rapporte une recherche du 24 juillet 2026 en français, anglais et
allemand.

| Ressource                                                                                                                                                                                                          | Apport historique                         | Limite                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------- | ------------------------------------------ |
| [Shopify — website timeline](https://www.shopify.com/blog/build-website-timeline/)                                                                                                                                 | sept phases et QA                         | éditeur ; 1 semaine–5 mois non statistique |
| [Adobe Commerce](https://business.adobe.com/content/dam/dx/us/en/resources/sdk/getting-started-with-adobe-commerce/getting-started-with-adobe-commerce-sw.pdf)                                                     | roadmap pouvant aller jusqu'à 40 semaines | contexte enterprise                        |
| [Resourcifi, US](https://www.resourcifi.com/insights/website-development-timeline/)                                                                                                                                | phases parallèles et paliers              | source commerciale                         |
| [Website Development Services, US](https://websitedevelopment-services.us/web-development-timeline-usa/)                                                                                                           | discovery/design/dev/QA                   | agence                                     |
| [Webdigita, UK](https://webdigita.co.uk/blog/how-long-ecommerce-development-take-realistic-uk/)                                                                                                                    | ERP, données produit et validations       | expérience prestataire                     |
| [Alactic, UK](https://alactic.net/blog/how-long-does-a-website-take-to-build)                                                                                                                                      | impact de contenus/brand manquants        | source agence                              |
| [WP Creative](https://wpcreative.com.au/wordpress-maintenance-cost/) / [ACT Websites](https://actwebsites.com.au/wp-content/uploads/2025/02/WordPress-Maintenance-Service-Agreement-Version-0001-1.pdf), Australie | lancement ≠ fin, accès/setup              | maintenance plus que création              |
| [WordPress-Wartung.at, DACH](https://www.wordpress-wartung.at/wartungspakete/)                                                                                                                                     | exclusions, backup, fréquence             | maintenance                                |
| [Bord Bia, Irlande](https://www.bordbia.ie/globalassets/bordbia2020/industry/think-digital/guidebooks/website-project-fundamentals---considerations-for-developing-and-improving-guidebook.pdf)                    | phases, tests, rôle client                | document 2022                              |
| [Google site moves](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes) / [recrawl](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl)         | migration, 301, sitemap, surveillance     | ne donne pas la durée de production        |
| [CNIL cookies](https://cnil.fr/fr/cookies-et-autres-traceurs/regles/cookies/comment-mettre-mon-site-web-en-conformite)                                                                                             | consentement avant traceurs selon cas     | obligation dépend du traitement            |
| [Cloudflare TTL](https://developers.cloudflare.com/dns/manage-dns-records/reference/ttl/)                                                                                                                          | influence des caches DNS                  | pas de délai universel                     |

Saturation rapportée : ajouter d'autres fourchettes ne crée plus de valeur. Le
gain vient de travail versus attente, tâches parallèles, retard de contenu,
app/intégrations, recette/conformité, migration/DNS et rétroplanning daté.

P1 doit rouvrir les sources, noter dates, extraits, biais et arrêter quand
aucune nouvelle décision ou preuve n'apparaît.

## 5. Faits et limites

| Affirmation                                 | Statut historique         | Source                         | Règle                                |
| ------------------------------------------- | ------------------------- | ------------------------------ | ------------------------------------ |
| vitrine 4–8 semaines                        | estimation Hagnéré        | pas de statistique officielle  | scope, début, charge, attente, marge |
| boutique 2–4 mois                           | estimation large          | Shopify/Adobe comme méthodes   | segmenter standard/intégrée/B2B      |
| page 1–3 semaines                           | estimation conditionnelle | pages concurrentes divergentes | contenus/identité prêts              |
| Google explore en jours/semaines            | confirmé avec variabilité | Google recrawl                 | exploration ≠ indexation ≠ rang      |
| migration demande mapping/301/tests/sitemap | confirmé                  | Google site moves              | intégrer avant bascule               |
| TTL influence la bascule                    | confirmé                  | Cloudflare                     | ne pas promettre un délai            |
| consentement avant certains traceurs        | confirmé en principe      | CNIL                           | jalon selon outil/donnée             |
| validation tacite                           | clause à négocier         | pas règle générale             | écrire la règle au contrat           |

### Contradictions

- Les fourchettes sont dites non officielles mais dominent le hero.
- Une phase « développement » masque des travaux parallèles.
- Une marge est conseillée sans calcul.
- L'e-commerce standard et intégré partagent une seule fourchette.
- L'indexation est traitée après lancement, mais pas tout le run de
  stabilisation.

### À retirer

- fourchette sans inclus/exclus/départ ;
- durée qui inclut implicitement textes, photos ou traductions ;
- visibilité Google promise au lancement ;
- délai d'app métier avant rôles, données, API, sécurité et recette ;
- « plusieurs semaines » sans mécanisme.

## 6. Gain d'information

| Question                       | Page actuelle | Manque              | Réponse supérieure                   |
| ------------------------------ | ------------- | ------------------- | ------------------------------------ |
| Quand utilisable ?             | fourchette    | départ/marge        | date à rebours                       |
| Pourquoi les devis diffèrent ? | périmètre     | travail vs attente  | charge et calendrier                 |
| Qui bloque ?                   | client/accès  | RACI                | propriétaire par dépendance          |
| Boutique réelle ?              | 2–4 mois      | classes/volumes     | standard, intégrée, B2B              |
| App/SaaS ?                     | à chiffrer    | lots                | discovery, sécurité, pilote, recette |
| Que tester ?                   | liste         | acceptation         | checklist signable                   |
| Quelle marge ?                 | aléas         | niveau              | 15–30 % comme hypothèse bornée       |
| Après lancement ?              | indexation    | stabilisation       | J+1/J+7/J+30                         |
| Refonte ?                      | redirections  | inventaire/critères | voie migration                       |
| DNS échoue ?                   | domaine       | fallback            | fenêtre, TTL, accès, rollback        |

## 7. Modèles de calendrier

### Formule de base

```text
Date exploitable = date de démarrage réel
                  + travail sur le chemin critique
                  + temps d'attente des validations
                  + dépendances tierces
                  + recette et corrections bloquantes
                  + marge
```

Le travail en parallèle ne doit pas être additionné deux fois. Une attente
répétée à chaque jalon doit être additionnée.

### Trois cas à construire

| Cas                     | Échéance fictive  | Inclusions minimales                                  | Porte                                     |
| ----------------------- | ----------------- | ----------------------------------------------------- | ----------------------------------------- |
| vitrine professionnelle | 15 octobre 2026   | 7 pages, contenus, formulaire, mobile, consentement   | V1 testée avant communication             |
| boutique standard       | 1er décembre 2026 | catalogue, paiement, livraison, mails, commandes test | commandes réussies et remboursement testé |
| MVP métier/SaaS         | 1er février 2027  | rôles, données, API, logs, sécurité, pilote           | recette et pilote avant ouverture         |

Le scénario applicatif historique de l'audit s'étendait de septembre à
février : discovery, architecture, trois lots, tests, pilote, correction,
préproduction, marge puis ouverture progressive. Il indiquait 55–90 jours
prestataire et 15–25 jours métier/tiers comme hypothèses, non comme moyenne.

### Sensibilité historique

| Événement                       |                Vitrine |               Boutique | Application |
| ------------------------------- | ---------------------: | ---------------------: | ----------: |
| contenus +1 semaine             | +1 semaine si critique |                   +1–2 |        +1–3 |
| validation 5 jours au lieu de 2 |         +3 jours/jalon | +1–2 semaines cumulées |        +1–3 |
| API/paiement +10 jours          |          0 à +10 jours |          +1–2 semaines |        +2–4 |
| périmètre +30 %                 |          +1–2 semaines |                   +2–4 |        +4–8 |

Ces valeurs sont des scénarios d'audit. Elles doivent être recalculées sur les
tâches réelles.

### Marge comme hypothèse

- vitrine connue et préparée : 15 % peut servir de point de discussion ;
- boutique avec tiers/migration : 20–30 % peut être plus prudent ;
- application métier : marge lot par lot et pilote.

Ce ne sont pas des statistiques. Le devis doit dire où se trouve la marge,
qui peut l'utiliser et ce qui se passe si elle est consommée.

## 8. Responsabilités et critères de sortie

| Livrable                 | Client                  | Prestataire       | Tiers               | Porte                      |
| ------------------------ | ----------------------- | ----------------- | ------------------- | -------------------------- |
| brief/pages              | valide                  | anime/formalise   | —                   | périmètre signé            |
| textes/photos/droits     | fournit                 | conseille/intègre | traducteur éventuel | contenu autorisé/versionné |
| maquettes                | valide en un lot        | conçoit           | —                   | validation datée           |
| domaine/DNS              | donne accès/titularité  | configure         | registrar/hébergeur | accès et rollback testés   |
| paiement/e-mail/API      | fournit contrat/contact | intègre/teste     | sandbox/support     | cas passants               |
| mentions/cookies/données | décide et fait valider  | implémente        | CMP/conseil         | conformité contrôlée       |
| recette                  | teste métier/accepte    | corrige           | corrige son service | PV, zéro bloqueur          |
| mise en ligne            | autorise/communique     | bascule/surveille | support             | monitoring actif           |

La recette minimale doit inclure mobile, clavier, formulaires, erreurs,
paiement si présent, consentement, redirections, sauvegardes et données.

## 9. Position, ressource et conversion

```text
Position fréquente : annoncer une fenêtre conditionnelle, jamais un chiffre
nu ; écrire chemin critique et responsabilités dans le devis.
Le plus court : V1 limitée, contenus prêts, décideur unique, composants
réutilisés, aucun tiers critique.
Le plus défendable : un peu plus long avec jalons, marge, recette et bascule.
Cas opposé : page de campagne rapide si l'objectif est de tester une offre.
Signal de révision : contenus, décideur, API, paiement, domaine, langue,
données sensibles ou événement sans marge.
Ce que nous déconseillons : une semaine promise sans contenus, ou recette/
redirections traitées après coup.
Conflit d'intérêts : Hagnéré Code vend des projets ; le guide doit pouvoir
recommander une page/V1 plus petite.
```

### Ressource autonome

Un pack planning :

- date cible et définition de « utilisable » ;
- tâches, durées de travail et attentes ;
- dépendances et chemin critique ;
- RACI ;
- contenus et accès ;
- marge ;
- critères de recette ;
- migration/DNS/rollback ;
- J+1/J+7/J+30 ;
- changement de périmètre avec impact coût/date ;
- exemple vitrine, boutique et app.

Il doit être éditable, avoir un exemple rempli et permettre de constater que
la date n'est pas tenable.

### CTA

Le diagnostic doit annoncer :

- informations demandées ;
- restitution (fenêtre, chemin critique, prérequis, risques) ;
- délai ;
- exclusions ;
- absence de garantie sur tiers, indexation et date sans données complètes.

## 10. Empreinte humaine

### À conserver

- ouverture/salon/saison ;
- cabinet dans six semaines ;
- distinction test/mise en ligne/vérifications ;
- « cinq pages testées » ;
- décideur unique ;
- avertissement Google.

### À améliorer

- suivre une date réelle du début à J+30 ;
- présenter calendrier visuel avant les longues listes ;
- remplacer « aléas » par dépendance, propriétaire et effet ;
- éviter de répéter « cela dépend » ;
- faire parler le client, le prestataire et le tiers ;
- ne pas confondre jargon de gestion de projet et pédagogie.

P4 doit demander au lecteur :

1. quelle est sa vraie date de démarrage ;
2. quel élément est sur le chemin critique ;
3. ce qu'il doit fournir cette semaine ;
4. quelle marge il garde ;
5. ce qui autorise ou bloque la mise en ligne.

## 11. Registre des défauts hérités

### P0

Aucun danger immédiat démontré.

### P1

1. **P1-01** — fourchettes sans chemin critique ni départ.
2. **P1-02** — travail et attente confondus.
3. **P1-03** — app/SaaS seulement « à chiffrer ».
4. **P1-04** — e-commerce non segmenté.
5. **P1-05** — contenus/traductions/validations sans coût calendrier.
6. **P1-06** — recette, conformité et accessibilité non bloquantes.
7. **P1-07** — migration, DNS, rollback et post-lancement.
8. **P1-08** — marge non chiffrée.
9. **P1-09** — CTA sans livrable/délai.

### P2

- benchmark international à intégrer avec limites ;
- sources Google migration, CNIL, Cloudflare ;
- temps de lecture ;
- OG ;
- FAQ chemin critique/recette/responsabilité ;
- ressource planning ;
- indicateurs J+1/J+7/J+30 ;
- droits, consentement et accessibilité au calendrier ;
- règle de changement de scope ;
- maillage vers app métier/TMA.

## 12. Ordre de correction

1. Rejouer recherche et sources.
2. Figer trois projets et leur définition de « livré ».
3. Construire calendriers, RACI, recette, marge et sensibilité.
4. Réécrire autour de la date du dirigeant.
5. Créer et tester le pack planning.
6. P3 indépendante : recalcul des dates, sources, clauses et cas de bascule.
7. P4 : lecteur dirigeant, tableaux 320–1600 px, clavier, liens, OG,
   JSON-LD, build et route.
8. Vérifier séparément production, sitemap, exploration et indexation.

**Porte de sortie :** aucune promesse « votre site sera prêt en X semaines »
sans définition de départ/fin, périmètre, responsabilités, marge et recette.
Le guide n'est une référence qu'après calculs revalidés, ressource testée et
P3/P4 manifestées.

---

## 13. Contrat P1 r1 et définitions gelées

### Question, lecteur et décision

```text
Lecteur : dirigeant de TPE/PME, indépendant ou responsable de lancement qui
          doit protéger une ouverture, un salon, une campagne ou une migration.
Phrase réelle : « Nous devons communiquer l'adresse le 30 octobre. Quelle
                version peut être testée avant, qui doit fournir quoi et quel
                retard ferait glisser la date ? »
Décision après lecture : choisir un périmètre de V1, vérifier si la date est
                         tenable, attribuer les dépendances et faire annexer au
                         devis un planning avec portes de sortie et marge.
Action sans contact : remplir un chemin critique, un tableau de responsabilités
                      et un calcul de coût du retard.
Hors périmètre : moyenne officielle du marché, date garantie sans étude,
                 estimation du prix, audit juridique, promesse d'indexation ou
                 promesse de classement.
```

### Unité de comparaison obligatoire

Toute durée doit préciser cinq éléments :

1. **départ effectif** : périmètre de V1 accepté, interlocuteur disponible,
   accès critiques vérifiés et créneau de production confirmé ;
2. **fin** : site public, parcours prioritaire testé, critères d'acceptation
   fermés et surveillance initiale active ;
3. **périmètre** : pages, langues, contenus, catalogue, intégrations, reprise de
   données et migration d'URL ;
4. **charge** : jours-personnes du client, du prestataire et des tiers ;
5. **calendrier** : chemin critique, attentes, tâches parallèles et marge.

Un site « codé », une version privée, un site public, un site accepté et un
site retraité par Google sont cinq états différents. Le guide P2 devra employer
le mot **prêt** seulement pour la définition de fin ci-dessus, puis préciser
séparément la stabilisation et le suivi de recherche.

### Porte de qualité commune aux trois scénarios

Pour éviter une comparaison trompeuse, les cas simple, central et exigeant
partagent la même définition de « prêt » :

- contenu et droits de publication validés ;
- adresse publique en HTTPS, sauvegarde et procédure de retour documentées ;
- parcours prioritaire fonctionnel au clavier, sur mobile et sur ordinateur ;
- formulaire, commande ou action principale testé de bout en bout ;
- information sur les données et comportement des traceurs vérifiés selon le
  périmètre réel ;
- anciennes URL utiles redirigées lorsqu'il s'agit d'une refonte ;
- aucune anomalie bloquante ou majeure ouverte selon la grille convenue ;
- responsable, indicateurs et période de surveillance après lancement nommés.

Cette porte est une **exigence éditoriale Hagnéré Code**, pas une certification
juridique, RGAA, WCAG, sécurité ou SEO.

## 14. Rejeu de la demande et méthode internationale

### Requêtes et langues

Recherche rejouée le **25 juillet 2026** :

- français : `combien de temps créer site internet`, `délai site vitrine`,
  `planning refonte`, `délai e-commerce`, `rétroplanning lancement site` ;
- anglais : `website development timeline`, `client approval website delay`,
  `B2B website timeline`, `website launch QA accessibility`, `site migration
  launch checklist` ;
- allemand : `wie lange dauert Website erstellen`, `Firmenwebsite Zeitplan`,
  `Website Livegang Checkliste`, `Inhalte Freigabe Test` ;
- sources officielles ciblées : chemin critique et risque de planning,
  accessibilité, traceurs, mentions, migration d'URL, exploration et DNS.

### Corpus réellement examiné

- 4 réponses commerciales ou éditoriales françaises ;
- 5 réponses commerciales internationales : États-Unis/international,
  Royaume-Uni, Allemagne et environnement e-commerce enterprise ;
- 11 entrées de preuve fondées sur 13 pages primaires ou institutionnelles :
  France, États-Unis, Royaume-Uni, Allemagne et standards internationaux.

Ce corpus n'est ni un palmarès exhaustif du Web ni une étude statistique du
marché. Il sert à identifier les **meilleurs types de réponse observés** et
leurs angles morts. Les chiffres d'un prestataire décrivent son processus, pas
le marché ni Hagnéré Code.

### Critère de saturation atteint

Les trois dernières réponses commerciales examinées ont encore ajouté des
fourchettes, mais aucune nouvelle catégorie de décision. Le corpus converge
vers les mêmes facteurs : périmètre, contenus, validation, intégrations, tests
et lancement. La recherche est donc arrêtée sur les fourchettes et approfondie
sur ce que les pages traitent mal :

- même périmètre et même définition de fin ;
- effort versus temps calendaire ;
- chemin critique et responsabilités ;
- coût du retard ;
- portes de conformité, accessibilité et recette ;
- migration, bascule, retour arrière et stabilisation ;
- conditions qui permettent d'accélérer ou imposent de différer.

## 15. Benchmark France, États-Unis, Royaume-Uni et Allemagne

| Page examinée | Zone et date | Apport réellement utile | Limite ou conflit d'intérêt | Décision P1 |
| -------------- | ------------- | ------------------------ | ---------------------------- | ----------- |
| [Clickdev — temps pour créer un site](https://www.clickdev.fr/blog/temps-creer-site-internet-2026) | France, 24/06/2026 | compare DIY, freelance et agence ; affiche un temps client ; traite contenus, retours et recette | expérience déclarée d'un freelance ; périmètres et niveaux de preuve différents ; vend la prestation | conserver l'idée de charge client, refaire la comparaison à périmètre égal |
| [WebEngine — délais 2026](https://www.web-engine.fr/combien-temps-creer-site-internet-paris-delais-2026/) | France, 02/05/2026 | segmente vitrine, boutique, application et refonte ; isole une phase de tests | tableau commercial non documenté ; affirme une part de retards et des gains sans source ; Paris n'est pas une variable technique de durée | ne reprendre aucun chiffre comme moyenne |
| [Artichaud Studio — délai de création](https://artichaud-studio.fr/blog/delai-creation-site-internet) | France, 26/01/2026 | rend visible le rôle du client et la différence entre production et livraison | méthode d'échantillonnage absente ; avance un délai Google et une réduction de délai non démontrés ; source agence | reprendre les questions, préférer Google pour exploration/indexation |
| [Impact Media — combien de temps](https://www.impact-media-agency.com/blog/combien-temps-creer-site-web) | France, consulté le 25/07/2026 | détaille livrables par phase et parallélisation contenu/développement | oppose ses propres délais à une « moyenne France » non sourcée et se déclare trois à cinq fois plus rapide ; vend l'offre | cas exemplaire d'une comparaison à ne pas reproduire |
| [Shopify — website timeline](https://www.shopify.com/blog/build-website-timeline) | États-Unis/international, 08/05/2025 | sept phases, hébergement/CMS en amont, QA et commandes test | Shopify vend sa plateforme ; la fourchette d'une semaine à cinq mois n'est pas statistique | garder phases et tests, écarter la fourchette brute |
| [Adobe Commerce — getting started](https://business.adobe.com/content/dam/dx/us/en/resources/sdk/getting-started-with-adobe-commerce/getting-started-with-adobe-commerce-sw.pdf) | États-Unis/enterprise, consulté le 25/07/2026 | explique que les phases se chevauchent, que les systèmes et données changent l'échelle et qu'une implémentation peut aller jusqu'à 40 semaines | cas enterprise et produit Adobe ; maximum commercial, non transposable à une vitrine | créer un basculement explicite vers le cas exigeant |
| [Rubik Digital — realistic timeline](https://www.rubikdigital.co.uk/knowledge/website-development-timeline) | Royaume-Uni, consulté le 25/07/2026 | contenu en parallèle, jalons signés, intégrations, accessibilité, SEO et suivi post-lancement | agence B2B ; modèle 12 semaines non documenté comme moyenne | reprendre le tableau phase / sortie, pas le nombre de semaines |
| [Dawidweb — Firmenwebsite](https://dawidweb.com/blog/wie-lange-dauert-firmenwebsite-erstellen/) | Allemagne, 23/11/2025 | rend les validations, contenus, DNS et contrôle post-lancement visibles | expérience individuelle ; affirmations réglementaires et durées à requalifier hors Allemagne | garder la responsabilité et la bascule, pas généraliser le droit allemand |
| [Dr. Web — checklist Livegang](https://www.drweb.de/wp-content/uploads/2025/04/checkliste_website_livegang.pdf) | Allemagne, PDF consulté le 25/07/2026 | attribue chaque tâche au client, à l'agence, au rédacteur, au conseil ou à l'hébergeur ; inclut tests, droit, sauvegarde et maintenance | checklist éditoriale sans données de marché | adapter la matrice de responsabilités |
| [GAO — Schedule Assessment Guide](https://www.gao.gov/products/gao-16-89g) | États-Unis, 22/12/2015 | méthode stable : activités reliées, chemin critique, risque de planning et effet du retard sur le coût | programmes publics complexes, pas un barème de site web | utiliser la méthode, jamais ses échelles de projet |
| [GOV.UK — live phase](https://www.gov.uk/service-manual/agile-delivery/how-the-live-phase-works) | Royaume-Uni, mise à jour 08/05/2019 | le passage en production exige tests, accessibilité, sécurité, mesure, disponibilité et exploitation durable | service public britannique, exigences non contractuelles pour une PME française | faire de « live » une porte, pas une date technique |
| [BSI — développement sécurisé d'applications web](https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Publikationen/Studien/Webanwendungen/Webanw_Auftraggeber.pdf?__blob=publicationFile&v=2) | Allemagne, ressource officielle consultée le 25/07/2026 | quality gates, exigences de sécurité et tests documentés ; préconise des testeurs indépendants selon le besoin de protection | niveau de rigueur à proportionner ; ne vaut pas obligation française | intégrer sécurité et indépendance des tests au cas exigeant |
| [W3C WAI — évaluer l'accessibilité](https://www.w3.org/WAI/test-evaluate/) | international, mise à jour 01/08/2023 | tester tôt et pendant le développement ; aucun outil ne suffit seul ; évaluation humaine compétente nécessaire | méthode, pas certification d'un site particulier | réserver temps et responsable avant la fin |
| [USAGov — accessibility testing](https://www.usa.gov/blog/2024/01/accessibility-testing-creating-digital-services-everyone-can-use) | États-Unis, mise à jour 09/06/2026 | combine tests automatiques, manuels et utilisateurs ; recommande de commencer tôt | retour d'un service public fédéral | renforcer la recette, sans importer le droit américain |

### Conclusion comparative

Les meilleurs contenus examinés savent décomposer un projet, mais la plupart
gardent un défaut : ils comparent des durées sans garantir le même périmètre,
la même disponibilité, la même charge client ou la même définition de «
livré ». La contribution originale à produire n'est donc pas une fourchette de
plus. C'est un **planning calculable et contestable**, où le lecteur peut voir
la tâche qui déplace sa date.

## 16. Fiche de preuves primaires et limites

| Affirmation utilisable en P2 | Source primaire et passage utile | Nature | Périmètre / limite | Consultation et fraîcheur | Conséquence lecteur |
| ---------------------------- | -------------------------------- | ------ | ------------------- | ------------------------- | ------------------- |
| Un planning fiable relie toutes les activités, montre les événements et permet d'analyser l'effet d'un changement ; un retard a aussi un effet de coût. | [U.S. GAO, Schedule Assessment Guide](https://www.gao.gov/products/gao-16-89g), résumé, lignes sur integrated schedule, change et cost effects | fait méthodologique | méthode générale, non spécifique au Web ; aucune durée commerciale | publié le 22/12/2015, rouvert le 25/07/2026 ; principe stable | demander prédécesseurs, chemin critique et effet des changements |
| L'accessibilité doit être évaluée tôt et tout au long du développement ; un outil seul ne détermine pas l'accessibilité. | [W3C WAI, Evaluating Web Accessibility](https://www.w3.org/WAI/test-evaluate/), introduction | fait de méthode | ne constitue pas un certificat WCAG/RGAA | page mise à jour le 01/08/2023, rouvert le 25/07/2026 | ne pas laisser l'accessibilité à la veille du lancement |
| Un service prêt à passer en production doit aussi prévoir sécurité, mesure, disponibilité, accessibilité, performance et qualité. | [GOV.UK, How the live phase works](https://www.gov.uk/service-manual/agile-delivery/how-the-live-phase-works), « Other things to consider before you move into live » | fait sur la méthode GOV.UK | guide public britannique ; adaptation volontaire à une PME | mise à jour le 08/05/2019, rouvert le 25/07/2026 | définir des portes de go/no-go et un responsable du run |
| Les tests automatiques ne couvrent pas tout ; manuel, clavier, technologies d'assistance et utilisateurs ajoutent des défauts invisibles aux scanners. | [USAGov, Accessibility testing](https://www.usa.gov/blog/2024/01/accessibility-testing-creating-digital-services-everyone-can-use) et [Digital.gov](https://digital.gov/resources/how-test-websites-for-accessibility) | retour d'expérience institutionnel | exigences fédérales américaines non transposables comme droit français | USAGov mis à jour le 09/06/2026, consultation 25/07/2026 | budgéter plusieurs méthodes de test selon le risque |
| Pour les traceurs non exemptés, le consentement préalable et un choix clair sont requis ; certains traceurs sont exemptés sous conditions. | [CNIL, mettre son site en conformité](https://www.cnil.fr/fr/cookies-et-autres-traceurs/regles/cookies/comment-mettre-mon-site-web-en-conformite), typologies et recueil du consentement | fait réglementaire français | dépend des traceurs et traitements ; ne pas écrire « tout cookie exige consentement » | page courante rouverte le 25/07/2026 | inventorier les traceurs avant la recette et tester accepter/refuser/retirer |
| Des mentions sont obligatoires sur un site professionnel français. | [Ministère de l'Économie, mentions sur votre site](https://www.economie.gouv.fr/entreprises/developper-son-entreprise/innover-et-numeriser-son-entreprise/mentions-sur-votre-site-internet-les-obligations-respecter) | fait réglementaire français | contenu exact selon forme et activité ; validation juridique hors mission technique | écrit le 11/12/2025, rouvert le 25/07/2026 | obtenir les informations et leur validation avant go-live |
| Le champ légal de l'accessibilité numérique varie selon l'organisme et le service ; l'e-commerce est visé depuis le 28/06/2025 avec des exemptions et cas particuliers. | [RGAA, champ d'application](https://accessibilite.numerique.gouv.fr/obligations/champ-application/) et [DGCCRF, directive Accessibilité](https://www.economie.gouv.fr/dgccrf/les-fiches-pratiques/professionnels-vos-produits-et-services-doivent-etre-conformes-la-directive-accessibilite) | fait réglementaire français | ne pas généraliser le seuil RGAA ni l'exemption des microentreprises à tous les textes ou services ; faire confirmer le cas | pages courantes, DGCCRF écrite le 13/11/2025, consultation 25/07/2026 | qualifier le champ juridique ; garder l'accessibilité comme porte qualité même hors obligation identifiée |
| Pour limiter le risque d'une migration avec changement d'URL, Google recommande inventaire, correspondance anciennes/nouvelles URL, redirections permanentes, tests, sitemap et suivi. | [Google Search Central, Site Moves](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes) | recommandation primaire du moteur | URLs modifiées ; ne garantit ni trafic ni classement et ne crée pas d'obligation générale | mise à jour le 17/06/2026, consultation 25/07/2026 | commencer le mapping avant le jour de bascule |
| Une migration peut produire des fluctuations ; quelques semaines sont une règle générale de retraitement pour un site moyen, plus pour un grand site. | [Google Search Central, Site Moves](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes), préparation et monitoring | fait déclaré par Google | dépend du nombre d'URL et de la vitesse serveur ; ce n'est pas le délai de construction | mise à jour le 17/06/2026 | ne pas faire coïncider une refonte risquée avec un pic sans marge |
| Une demande d'exploration peut prendre de quelques jours à quelques semaines et ne garantit pas l'inclusion. | [Google Search Central, Ask Google to recrawl](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl) | fait déclaré par Google | exploration/indexation, pas fabrication ni rang | mise à jour le 10/12/2025, consultation 25/07/2026 | séparer mise en ligne, exploration, indexation et classement |
| Le TTL contrôle la durée de cache d'un enregistrement DNS ; un cache local peut faire durer l'ancien état au-delà du TTL annoncé. | [Cloudflare DNS, TTL](https://developers.cloudflare.com/dns/manage-dns-records/reference/ttl/) | documentation opérateur | valeurs Cloudflare non universelles ; DNS, cache et registrar varient | mise à jour le 16/04/2026, consultation 25/07/2026 | préparer accès, fenêtre, contrôle et retour arrière ; ne promettre aucune « propagation en cinq minutes » |
| Un développement web sécurisé peut utiliser des exigences, quality gates et tests indépendants proportionnés au besoin de protection. | [BSI, Leitfaden Auftraggeber](https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Publikationen/Studien/Webanwendungen/Webanw_Auftraggeber.pdf?__blob=publicationFile&v=2) | méthode institutionnelle allemande | cas et profondeur selon risque ; pas obligation française générale | ressource rouverte le 25/07/2026 | ajouter sécurité et revue indépendante lorsque données, rôles ou paiement l'exigent |

### Ce que ces sources ne prouvent pas

Elles ne prouvent aucune « moyenne 2026 » de quatre, huit ou douze semaines.
Elles ne prouvent pas qu'une agence est plus lente qu'un freelance, ni
l'inverse. Elles ne donnent pas le coût d'un retard pour l'entreprise du
lecteur. Elles justifient la **structure** du planning, les portes et les
questions à documenter. Les durées et euros des sections suivantes sont donc
des **estimations éditoriales illustratives**, à remplacer par les données du
projet.

## 17. Taxonomie factuelle à conserver dans la page

| Formulation | Nature | Exemple autorisé |
| ----------- | ------ | ---------------- |
| « Google recommande… » | fait sourcé | mapping, redirections permanentes, tests et suivi |
| « La CNIL distingue… » | fait sourcé | traceurs exemptés et traceurs soumis au consentement |
| « Nous en déduisons… » | déduction Hagnéré | la conformité doit avoir un propriétaire et une date |
| « Notre estimation de planning… » | estimation éditoriale | 26, 46 ou une base conditionnelle de 106 jours, sous les hypothèses écrites |
| « Nous recommandons… » | position professionnelle | réduire la V1 avant de supprimer la recette |
| « À confirmer » | inconnue visible | délai d'API, validation juridique, volume de redirections, disponibilité réelle |

Interdictions P2 :

- « délai moyen » sans corpus statistique ;
- « l'agence met X semaines » ou « le freelance est plus rapide » sans capacité
  et périmètre identiques ;
- « le DNS se propage en cinq minutes » ;
- « Google indexe sous X jours » ;
- « tous les sites doivent être certifiés RGAA » ;
- « le coût du retard est nul » lorsque les données manquent ;
- marge ajoutée en pourcentage sans indiquer la base et le propriétaire ;
- témoignage ou résultat client fictif présenté comme vécu.

## 18. Matrice de gain d'information P1

| Question décisive | Meilleure réponse française observée | Meilleur apport international observé | Réponse actuelle | Gain vérifiable à produire en P2 |
| ----------------- | ------------------------------------ | -------------------------------------- | ---------------- | -------------------------------- |
| Quelle date est réellement tenable ? | fourchette par type de site | GAO relie tâches, événements, risques et changements | 4–8 semaines dominent le hero | calculer une date depuis les prédécesseurs et la marge |
| Que signifie « livré » ? | mise en ligne et recette parfois séparées | GOV.UK lie live à exploitation, accessibilité, mesure et disponibilité | démarrage/test/live sont distingués mais sans porte | une définition commune de prêt + J+1/J+7/J+30 |
| Qui consomme du temps ? | Clickdev affiche un temps client | Dr. Web attribue client/agence/rédacteur/juridique/hébergeur | responsabilités évoquées | jours-personnes client/prestataire/tiers et propriétaire par jalon |
| Agence, freelance ou interne : qui est le plus rapide ? | tableaux non comparables | aucun corpus examiné ne neutralise complètement le scope | aucune comparaison équivalente | même projet, même fin, bornes de capacité et conditions de victoire |
| Pourquoi 36 jours de travail ne donnent-ils pas 36 jours calendaires ? | phases et validations | Adobe explicite le chevauchement ; GAO le chemin critique | travail et attente confondus | formule, réseau de dépendances et calcul d'arrivée au plus tôt |
| Quand le contenu bloque-t-il ? | toutes les pages le citent | UK traite le contenu en parallèle et avec propriétaire | contenu dans une liste | matrice page/propriétaire/statut/date/droits et effet d'un retard |
| Quelle boutique sort du scénario vitrine ? | catalogue et paiement cités | Adobe ajoute données, systèmes et équipes | 2–4 mois unique | variables de bascule : transactions, catalogue, langues, API, reprise, risque |
| Que faut-il tester ? | mobile, formulaires, commande | W3C/USAGov exigent plusieurs méthodes ; BSI des portes proportionnées | recette générale | checklist signable : parcours, erreurs, clavier, données, traceurs, sécurité, rollback |
| Que coûte une semaine de retard ? | presque absent | GAO relie glissement et coût | absent | formule marge attribuable + coûts directs + contournement + reprise |
| Qu'est-ce qui accélère sans déplacer le risque ? | V1, contenus prêts, décideur | design systems, parallélisation et tests précoces | bons conseils mais non conditionnés | préconditions, limite du chemin critique et critères de report |
| Quand faut-il différer ? | rarement conseillé | GOV.UK permet de réviser le scope et l'exploitation | absent | no-go si propriétaire, contenu, accès, règles métier ou recette manquent |
| Une refonte est-elle finie au lancement ? | redirections citées | Google recommande mapping, test, sitemap et suivi | indexation surtout | runbook bascule, suivi et fluctuations sans garantie |

## 19. Comparaison à périmètre égal : interne, freelance ou agence

### Projet témoin identique

Le comparatif doit utiliser exactement ce projet fictif :

- vitrine B2B de 10 pages, une langue ;
- identité existante, contenus à réviser et non à créer de zéro ;
- système de gestion de contenu ;
- formulaire relié à un outil commercial par une intégration documentée ;
- reprise et redirection de 40 anciennes URL ;
- mesure d'audience avec configuration des traceurs selon le choix retenu ;
- porte de qualité de la section 13 ;
- suivi initial jusqu'à J+7.

Tout retrait d'un test, d'une page, d'une intégration ou d'une responsabilité
annule la comparaison.

### Formules de borne

```text
Borne de capacité = effort qui ne peut pas être parallélisé pour l'acteur
                    / capacité réellement réservée par semaine

Borne de dépendances = durée du chemin critique dans le réseau modélisé

Borne inférieure théorique = max(borne de capacité, borne de dépendances)

Calendrier défendable = date réelle de disponibilité
                        + réseau nivelé selon les ressources
                        + attentes tierces et validations non absorbées
                        + marge explicitement placée
```

La première formule ne donne qu'un **plancher avant nivellement des ressources,
files d'attente et dates de démarrage**. Elle n'autorise une date que lorsque
les capacités par rôle, les prédécesseurs, les validations et les délais tiers
sont nommés. Sinon, le résultat reste une borne basse suivie de « à confirmer ».

### Exemple de capacité, non moyenne de marché

Hypothèses du cas central : 36 jours-personnes de production, 12,5 jours côté
client et 2 jours côté tiers, hors éventuelle revue juridique. Le chemin
critique calculé section 21 vaut 42 jours ouvrés avant marge.

| Lot de charge | Prestataire | Client | Tiers | Contrôle |
| ------------- | -----------: | -----: | ----: | -------- |
| cadrage | 2 j-p | 1 j-p | 0 | objectifs, V1 et accès |
| contenu et preuves | 4 j-p | 5 j-p | 0 | 10 pages, droits compris |
| architecture et design | 8 j-p | 1 j-p | 0 | parcours et deux modèles |
| construction, CRM et redirections | 11 j-p | 0,5 j-p | 2 j-p | sandbox, cas d'erreur et mapping de 40 URL |
| intégration des contenus | 3 j-p | 1 j-p | 0 | pages complètes |
| vie privée et conformité technique | 1 j-p | 1 j-p | revue juridique inconnue | textes validés séparément |
| recette et corrections | 5 j-p | 2 j-p | 0 | anomalies classées |
| lancement et J+7 | 2 j-p | 1 j-p | 0 | surveillance attribuée |
| **Total connu** | **36 j-p** | **12,5 j-p** | **2 j-p** | revue juridique non ramenée à zéro |

| Mode | Hypothèse de capacité | Borne basse simplifiée | Quand ce mode peut gagner | Risque à rendre visible |
| ---- | ---------------------- | -------------- | ------------------------ | ------------------------ |
| Interne / DIY | la même personne absorbe 36 + 12,5 jours, ajoute 8 jours d'apprentissage et ne réserve que 2 jours/semaine | charge `(36 + 12,5 + 8) / 2 = 28,25 semaines` ; plancher avec marge : `max(28,25 ; 8,4) + 0,8 = 29,05 semaines`, hors date de démarrage | compétence déjà présente, faible urgence, apprentissage utile à long terme | le temps interne et la validation par soi-même sont rarement chiffrés |
| Freelance | 36 jours à 4 jours réservés/semaine ; le client travaille en parallèle | charge `36 / 4 = 9 semaines` ; plancher avec marge : `max(9 ; 8,4) + 0,8 = 9,8 semaines`, hors date de démarrage | expert disponible, intégration maîtrisée, interlocuteur unique | capacité individuelle, congés et absence de relais |
| Agence | contenu, design, développement et test ont des capacités séparées | plancher de dépendances avec marge : `8,4 + 0,8 = 9,2 semaines` ; aucune date avant capacités par rôle, file d'attente et démarrage confirmés | plusieurs disciplines réellement mobilisées et décisions rapides | file d'attente, passations et coordination peuvent annuler le parallélisme |

**Contrôle :** 42 jours ouvrés / 5 = 8,4 semaines et la marge de 4 jours vaut
0,8 semaine. Ajouter des personnes ne réduit pas une attente de validation ni
une API indisponible. Inversement, un freelance disponible immédiatement peut
battre une agence dont le démarrage est dans six semaines. La bonne question
n'est pas « quel statut est le plus rapide ? », mais « quelle capacité est
réservée sur les tâches critiques ? ».

## 20. Trois scénarios de planning, même définition de « prêt »

Les chiffres ci-dessous sont des **modèles Hagnéré Code**, pas des observations
du marché. Une « journée » est une journée ouvrée. Les jours-personnes mesurent
la charge ; les jours ouvrés mesurent le calendrier.

| Variable | Cas simple | Cas central | Cas exigeant | Nature |
| -------- | ---------- | ----------- | ------------ | ------ |
| Résultat | vitrine 5 pages | vitrine B2B 10 pages + reprise | boutique transactionnelle | hypothèse éditoriale |
| Contenu | textes et photos finaux au départ | révision partagée, propriétaires nommés | 250 produits, 2 langues, règles et droits à contrôler | hypothèse éditoriale |
| Design | identité et composants existants | deux modèles à concevoir | système de composants + parcours achat | hypothèse éditoriale |
| Intégration | formulaire e-mail simple | formulaire vers CRM documenté | paiement, livraison, taxes et ERP par API | hypothèse éditoriale |
| Migration | aucune ancienne URL | 40 URL à mapper | 800 URL + catalogue et comptes selon décision | hypothèse éditoriale |
| Données | contact simple | prospects et mesure | commandes, clients, paiement externalisé | hypothèse éditoriale |
| Effort prestataire | 10–14 j-p | 30–42 j-p ; exemple détaillé à 36 | 70–110 j-p | estimation à recalculer |
| Effort client | 3–5 j-p | 8–15 j-p ; exemple détaillé à 12,5 | 25–40 j-p | estimation à recalculer |
| Effort tiers | 0–1 j-p | 2 j-p + juridique éventuel inconnu | 8–20 j-p + délais fournisseurs inconnus | estimation / inconnue |
| Calendrier modèle | 26 jours ouvrés, soit 5,2 semaines | 46 jours ouvrés, soit 9,2 semaines | base conditionnelle de 106 jours ouvrés, soit 21,2 semaines, plus tout impact tiers non absorbé | calcul de scénario |
| Marge incluse | 2 jours | 4 jours | 7 jours | hypothèse de planning |
| Variable de bascule | contenu ou accès non prêt → central | transaction, volume, deuxième langue, API critique ou reprise lourde → exigeant | si règles/API/données restent inconnues → ne pas dater | règle Hagnéré |

### Cas simple — 26 jours ouvrés

```text
Cadrage 2
+ architecture 2
+ modèle visuel 4
+ validation 1
+ intégration 5
+ intégration et contrôle des contenus 2
+ conformité finale 1
+ recette 3
+ corrections 2
+ go/no-go 1
+ lancement 1
= 24 jours sur le chemin critique
+ marge 2
= 26 jours ouvrés
```

La préparation des textes, photos et droits se déroule en parallèle puisqu'ils
sont finaux au départ. Les deux jours ci-dessus correspondent à leur
intégration dans les pages puis à leur contrôle visuel, après la construction.
Si les textes doivent être rédigés, si le domaine n'est pas accessible ou si
le formulaire se connecte à un outil externe, ce n'est plus ce cas.

### Cas central — 46 jours ouvrés

Le calcul complet et les prédécesseurs figurent section 21. Le résultat n'est
valable que si le client regroupe ses retours sous deux jours ouvrés et si
l'intégration CRM dispose d'un accès de test documenté. Une attente de cinq
jours au lieu de deux à la porte de validation design F ajoute trois jours
ouvrés :

```text
5 - 2 = 3 jours ouvrés supplémentaires
46 + 3 = 49 jours ouvrés, soit 9,8 semaines
```

### Cas exigeant — base conditionnelle de 106 jours ouvrés

Cette base suppose les règles arbitrées, les accès et environnements de test
disponibles, et chaque réponse tierce bloquante obtenue sous deux jours ouvrés
lorsqu'elle est déjà absorbée dans la durée de sa tâche. Tout dépassement
bloquant ajoute son écart au réseau. Sans engagement de réponse exploitable,
écrire **« 106 jours + attente tierce à confirmer »** et ne pas promettre de
date.

```text
Discovery 5
+ règles commerce et architecture 8
+ design critique jusqu'à validation 10 + 3
+ cœur de la boutique 15
+ intégrations et répétition de migration 15
+ tests transactionnels 8
+ accessibilité, sécurité et vie privée 8
+ corrections 7
+ pilote métier 9
+ répétition finale / go-no-go 6
+ lancement et stabilisation 5
= 99 jours sur le chemin critique
+ marge 7
= 106 jours ouvrés
```

La préparation des 250 produits commence après la discovery et se déroule en
parallèle. Si elle n'est pas terminée avant la répétition d'import, elle rejoint
le chemin critique. Le délai de réponse de l'ERP, d'un prestataire de paiement,
d'un conseil ou d'un traducteur reste **à confirmer**, jamais ramené à zéro ni
implicitement inclus au-delà de l'hypothèse de deux jours ci-dessus.

### Contrôle inverse

- `26 / 5 = 5,2` semaines ;
- `46 / 5 = 9,2` semaines ;
- base conditionnelle : `106 / 5 = 21,2` semaines, avant tout impact tiers non
  absorbé.

Ces divisions contrôlent l'unité ; elles ne transforment pas les scénarios en
moyennes de marché.

## 21. Chemin critique reproductible du cas central

Règle de calcul :

```text
Fin au plus tôt d'une tâche =
  max(fin au plus tôt de chacun de ses prédécesseurs) + durée
```

| ID | Tâche | Durée | Prédécesseur(s) | Fin au plus tôt | Propriétaire principal | Porte |
| -- | ----- | ----: | ---------------- | ----------------: | ---------------------- | ----- |
| A | cadrage, V1, succès, accès | 3 j | — | J+3 | partagé | périmètre et accès signés |
| B | matrice des 10 pages | 4 j | A | J+7 | client, aide contenu | propriétaire, preuve et date par page |
| C | arborescence et parcours | 4 j | A | J+7 | prestataire | architecture acceptée |
| D | textes, visuels et droits finaux | 7 j | B | J+14 | client | contenu versionné et autorisé |
| E | modèles visuels desktop/mobile | 7 j | C | J+14 | prestataire | deux modèles prêts à valider |
| F | validation design regroupée | 2 j | E | J+16 | décideur client | décision datée, une liste |
| G | construction des modèles et CMS | 8 j | F | J+24 | prestataire | pages types fonctionnelles |
| H | formulaire et CRM | 3 j | G | J+27 | prestataire + tiers | soumission reçue, erreur gérée |
| I | intégration des contenus | 4 j | D, G | J+28 | prestataire | 10 pages complètes |
| J | mentions, données et traceurs finaux | 3 j | I | J+31 | client/conseil + prestataire | texte validé et comportement testé |
| K | inventaire et mapping des 40 anciennes URL | 4 j | A | J+7 | prestataire + client | une destination justifiée par URL |
| L | configuration et test des redirections | 2 j | G, K | J+26 | prestataire | réponses et destinations contrôlées |
| M | recette multi-parcours | 5 j | H, I, J, L | J+36 | partagé | anomalies classées |
| N | corrections bloquantes et majeures | 3 j | M | J+39 | prestataire | zéro P0/P1 selon grille |
| O | go/no-go | 1 j | N | J+40 | décideur client | autorisation de bascule |
| P | mise en ligne et contrôle initial | 2 j | O | J+42 | prestataire | monitoring et retour possibles |
| Q | marge protégée | 4 j | P | J+46 | propriétaire du planning | date commerciale protégée |

Chemin critique calculé :

```text
A → C → E → F → G → I → J → M → N → O → P → Q
3 + 4 + 7 + 2 + 8 + 4 + 3 + 5 + 3 + 1 + 2 + 4
= 46 jours ouvrés
```

La branche migration `A → K → L` finit à J+26 et ne bloque donc pas M, qui
attend J à J+31. Elle devient critique si l'inventaire, la destination ou les
règles de redirection ne sont pas validés avant la recette. Le contenu finit à
J+14 et ne bloque pas dans ce scénario. Un retard de 12
jours sur D déplace sa fin à J+26 ; I attend alors D plutôt que G à J+24, et le
projet gagne 2 jours de retard :

```text
max(fin D = 26, fin G = 24) + durée I 4 = J+30
au lieu de max(14, 24) + 4 = J+28
impact final = +2 jours, toutes choses égales par ailleurs
```

Cette sensibilité empêche la règle trompeuse « une semaine de contenu en retard
= toujours une semaine de projet en retard ». L'effet dépend de la marge libre
de la tâche ; il faut recalculer le réseau.

## 22. Dépendances client, prestataire et tiers

| Élément | Client | Prestataire | Tiers éventuel | Délai à écrire | Signal de blocage |
| ------- | ------ | ----------- | --------------- | --------------- | ----------------- |
| V1 et critères de succès | tranche et accepte | formalise et challenge | — | date de cadrage | aucun décideur habilité |
| textes, preuves, photos, droits | fournit ou valide | structure, édite, intègre | rédacteur, photographe, traducteur | date par page | propriétaire ou droit absent |
| design | donne une liste consolidée | conçoit et explique les arbitrages | marque éventuelle | temps de réponse convenu | retours contradictoires |
| domaine, DNS et hébergement | prouve la titularité et donne l'accès | prépare la bascule et le retour | registrar, hébergeur | test d'accès avant recette | compte inconnu ou validation MFA impossible |
| formulaire, CRM, API | nomme le cas métier et le destinataire | intègre, journalise et teste les erreurs | éditeur/API | sandbox, quota et support confirmés | documentation ou jeu de test absent |
| catalogue, prix, taxes, livraison | décide les règles et contrôle les données | importe et implémente | ERP, paiement, transporteur | date de gel et répétition d'import | règle métier non arbitrée |
| données personnelles et traceurs | documente les finalités et moyens, fait qualifier les rôles au cas par cas et valide les textes | documente son rôle, implémente le comportement prévu et signale les outils ajoutés | conseil, CMP, outils | inventaire avant design final | rôle présumé ou outil tiers ajouté à la dernière minute |
| accessibilité | nomme le niveau attendu et participe aux parcours métier | conçoit et teste pendant le projet | auditeur/utilisateurs selon enjeu | méthode et échantillon écrits | audit repoussé après lancement |
| sécurité et reprise | exprime sensibilité, rôles, continuité | implémente, sauvegarde, restaure, documente | hébergeur, auditeur | test avant go/no-go | restauration jamais essayée |
| recette | teste ses cas réels et accepte | fournit environnement, corrige et trace | corrige son service | fenêtre et critères signés | personne métier indisponible |
| lancement et J+7 | autorise, informe et répond aux incidents | bascule, surveille et rend compte | hébergeur, DNS, paiement | fenêtre et astreinte convenues | aucun propriétaire après mise en ligne |

Une validation contractuelle ne doit pas être inventée au premier retard. Le
devis doit dire si le silence suspend le planning, décale la date ou déclenche
une autre procédure. Ce dossier ne prétend pas qu'un silence vaut acceptation.

## 23. Portes de contenu, conformité, accessibilité, recette et lancement

### Porte 1 — le projet peut réellement démarrer

- V1 et hors-périmètre signés ;
- accès au domaine, ancien site, hébergement et outils testés ;
- capacité réservée par acteur ;
- matrice des contenus avec propriétaire, source, droit et date ;
- règles de changement de périmètre écrites.

### Porte 2 — le design peut être validé

- contenu réel des pages critiques disponible, pas uniquement du faux texte ;
- parcours prioritaire représenté sur petit et grand écran ;
- états vides, erreurs et confirmations prévus ;
- composants et contraste examinés avant déclinaison de toutes les pages ;
- traceurs, formulaires et intégrations inventoriés.

### Porte 3 — la recette peut commencer

- environnement stable et version identifiée ;
- contenu final intégré ;
- navigation, formulaires, emails, commande et erreurs testables ;
- anciennes URL et redirections chargées si refonte ;
- information données/traceurs implémentée selon la décision validée ;
- sauvegarde et procédure de retour disponibles.

### Porte 4 — go/no-go

- aucun bloqueur ou défaut majeur ouvert selon la grille du projet ;
- parcours critique testé sur les navigateurs et appareils convenus ;
- tests clavier et manuels d'accessibilité exécutés, plus audit spécialisé si
  le périmètre ou l'obligation le requiert ;
- consentement ou absence de consentement testé selon chaque traceur ;
- formulaire, paiement, livraison, remboursement et emails testés s'ils
  existent ;
- redirections échantillonnées puis contrôlées en masse si migration ;
- monitoring, sauvegarde, restauration et retour arrière attribués ;
- responsable joignable et critères d'arrêt définis.

### Porte 5 — J+1, J+7, J+30

| Moment | Contrôle minimum | Décision |
| ------ | ---------------- | -------- |
| J+1 | disponibilité, erreurs, formulaire/commande, paiements, redirections critiques, consentement, logs | corriger, revenir ou poursuivre |
| J+7 | demandes reçues, anomalies, erreurs 404, données de mesure, capacité support | clôturer stabilisation ou prolonger |
| J+30 | parcours, contenus incompris, conversions observables, couverture des redirections, Search Console si disponible | prioriser V2 sans confondre observation et causalité |

Une réponse HTTP 200 ne ferme aucune de ces portes à elle seule.

## 24. Coût du retard : calcul reproductible

### Formule

```text
Coût total d'un retard de h semaines =
  h × (coûts directs hebdomadaires maintenus
       + contournements manuels hebdomadaires
       + marge contributive hebdomadaire attribuable non réalisée)
  + frais ponctuels de décalage réellement engagés
  + reprise ou heures supplémentaires ponctuelles réellement provoquées
```

La marge contributive attribuable, si elle peut être estimée, se calcule ainsi :

```text
opportunité attribuable / semaine =
  opportunités qualifiées / semaine
  × taux de transformation observé
  × marge contributive par vente
  × part raisonnablement attribuable au nouveau site
```

Le chiffre d'affaires brut ne doit pas remplacer la marge. Une opportunité non
mesurée reste **inconnue**, pas zéro. Une campagne non lancée ne devient pas
automatiquement une vente perdue.

### Scénario fictif composite

Cet exemple ne décrit pas un client réel et ne constitue ni un devis, ni un
gain prévisionnel :

| Poste | Hypothèse | Calcul | Périodicité | Résultat |
| ----- | ---------- | ------ | ----------- | -------: |
| ancien hébergement et outil conservés | factures observées | — | par semaine | 180 € |
| traitement manuel temporaire | 9 h à 42 €/h | `9 × 42` | par semaine | 378 € |
| replanification de communication | dépense déjà engagée | — | une seule fois | 220 € |
| marge attribuable | 12 opportunités, 20 % de transformation, 500 € de marge, attribution 25 % | `12 × 0,20 × 500 × 0,25` | par semaine | 300 € |
| **sous-total hebdomadaire central** | hors frais ponctuel | `180 + 378 + 300` | par semaine | **858 €** |

Pour quatre semaines :

```text
858 € × 4 + 220 € = 3 652 €
contrôle inverse : (3 652 € - 220 €) / 4 = 858 € par semaine
```

### Sensibilité à l'attribution

| Part attribuable au site | Opportunité / semaine | Sous-total / semaine | Frais ponctuel | Total sur 4 semaines |
| -----------------------: | ---------------------: | --------------------: | -------------: | --------------------: |
| 0 % | 0 € | 558 € | 220 € | 2 452 € |
| 25 % | 300 € | 858 € | 220 € | 3 652 € |
| 50 % | 600 € | 1 158 € | 220 € | 4 852 € |

La variable qui change le verdict est la part de marge réellement attribuable,
pas le trafic espéré. Si cette part n'est pas défendable, le lecteur ne garde
que les 558 € hebdomadaires et les 220 € ponctuels observables, puis écrit
l'opportunité « à mesurer ».

### Utilité décisionnelle

- si le coût documenté de quatre semaines est inférieur au coût et au risque
  d'une livraison précipitée, différer peut être rationnel ;
- si une petite V1 fait disparaître la majorité des coûts sans supprimer les
  portes de qualité, elle peut gagner ;
- si la date déclenche une pénalité, un événement ou une double exploitation,
  la ligne correspondante doit venir d'un contrat ou d'une facture, pas d'un
  pourcentage générique.

## 25. Accélérer, réduire ou différer

### Accélération défendable

| Levier | Condition préalable | Ce qu'il réduit | Ce qu'il ne réduit pas |
| ------ | -------------------- | --------------- | ---------------------- |
| réduire la V1 | parcours prioritaire défini et V2 acceptée | pages, contenu, variantes et tests associés | tests du parcours restant |
| réutiliser un système de composants éprouvé | composants adaptés à l'identité et au contenu | conception et défauts répétitifs | validation du message et du parcours |
| produire contenu et design en parallèle | architecture et propriétaires de page figés | temps d'attente | réécriture si le message change |
| un décideur et retours sous 2 jours | autorité réelle et créneaux réservés | attente aux portes | temps de réflexion nécessaire sur un risque réel |
| tester l'API et les accès dès le cadrage | sandbox, données et interlocuteur disponibles | découverte tardive d'un blocage | délai propre du fournisseur |
| tester à chaque lot | critères d'acceptation disponibles | volume de corrections finales | couverture manuelle et métier |
| préparer la bascule tôt | inventaire, accès et plan de retour | stress et découverte tardive | durée des caches, du crawl ou d'un tiers |

### Réduction de périmètre acceptable

- page de campagne avec objectif unique ;
- vitrine courte avec offres et preuves principales ;
- commande ou réservation temporairement manuelle si le volume, la sécurité et
  l'expérience restent acceptables et si le fonctionnement est explicite ;
- catalogue limité aux références prioritaires ;
- une langue au lancement avec traduction planifiée ;
- ancienne fonction conservée le temps que la nouvelle soit pilotée.

### Critères de report ou de no-go

Différer la date ou réduire la V1 si l'un de ces éléments reste vrai à la porte
concernée :

1. aucun décideur ne peut accepter le périmètre ou le go/no-go ;
2. les contenus critiques, preuves ou droits n'ont pas de propriétaire ;
3. l'entreprise ne maîtrise pas le domaine, l'hébergement ou les accès ;
4. les règles de prix, taxe, livraison, rôles ou permissions restent
   contradictoires ;
5. l'API, le paiement ou la migration n'a ni sandbox, ni données de test, ni
   interlocuteur ;
6. l'inventaire des anciennes URL est absent pour une refonte ;
7. personne n'est disponible pour la recette métier ;
8. les traitements de données, traceurs ou obligations applicables n'ont pas
   été qualifiés ;
9. la sauvegarde ou le retour arrière n'a jamais été essayé ;
10. le coût du retard est inconnu et sert pourtant à justifier une urgence.

Un report n'est pas un échec lorsque la date n'est plus défendable. Le vrai
échec serait de communiquer une URL non testée ou de migrer sans possibilité de
retour.

## 26. Position professionnelle Hagnéré Code

```text
Recommandation pour le cas fréquent :
  vendre et signer une fenêtre conditionnelle, jamais un nombre nu. Annexer au
  devis le périmètre de V1, la charge client/prestataire/tiers, le chemin
  critique, les portes, la marge et le suivi J+7.

Faits qui la fondent :
  GAO relie activités, événements, changement et coût ; W3C et USAGov demandent
  des tests précoces et humains ; GOV.UK sépare passage en live et exploitation ;
  Google recommande préparation et suivi des migrations ; CNIL et Bercy rendent
  certaines décisions de conformité antérieures au lancement.

Déduction :
  le statut de l'exécutant ne décide pas seul de la date. La capacité réservée,
  les dépendances et la vitesse de décision sont les variables comparables.

Cas où l'option opposée gagne :
  une page sur un modèle maîtrisé, réalisée en interne ou par un freelance,
  gagne lorsque le message, les contenus, les droits, les accès et le parcours
  sont déjà prêts et qu'aucune migration ou intégration critique n'existe.

Signal qui impose de revoir la décision :
  nouvelle langue, transaction, donnée sensible, API, catalogue, reprise de
  données, changement de domaine, validation juridique ou indisponibilité du
  décideur.

Ce que nous déconseillons même si nous pourrions le vendre :
  une refonte complète précipitée avant un événement ; un e-commerce daté avant
  validation des règles et données ; une application sur mesure si une page ou
  un processus manuel limité suffit à tester l'offre ; une recette supprimée
  pour sauver une date.

Conflit d'intérêts :
  Hagnéré Code vend des projets Web. Le guide doit donc permettre les conclusions
  « lancer plus petit », « conserver l'existant » et « différer ».

Prochaine vérification :
  rouvrir toutes les sources décisives au démarrage de P2, puis avant
  publication si plus de 90 jours se sont écoulés ou si le droit, Google,
  Cloudflare ou les standards d'accessibilité ont changé.
```

## 27. Plan P2 annoté, livrables et porte P1

### Plan de rédaction transmis au propriétaire `/root`

| Ordre | H2 provisoire | Question résolue | Preuve / calcul | Décision produite | Format |
| ----: | ------------- | ---------------- | ---------------- | ----------------- | ------ |
| 1 | « Votre date est-elle tenable ? » | que doit-il être prêt avant l'événement ? | définition commune de prêt + trois cas | sélectionner une V1 et une porte | réponse immédiate, sans fourchette nue |
| 2 | « Effort et calendrier ne sont pas la même chose » | pourquoi 36 jours de charge donnent-ils plus ou moins de neuf semaines ? | formule capacité/dépendances + schéma section 21 | demander les deux nombres au devis | exemple calculé |
| 3 | « Trois projets, trois chemins critiques » | simple, central ou exigeant ? | 26/46 jours et base conditionnelle 106 + tiers, avec inclus/exclus | identifier la variable de bascule | cartes à portée égale, pas tableau masqué à 390 px |
| 4 | « Interne, freelance ou agence à périmètre égal » | quel mode peut aller plus vite ? | projet témoin et bornes de capacité | choisir selon capacité et risque | comparaison avec contre-cas |
| 5 | « Ce que le client doit livrer » | qui bloque quoi ? | matrice section 22 | nommer propriétaires et dates | checklist courte |
| 6 | « Le contenu est une tâche du planning » | quand textes, preuves, photos et traductions commencent-ils ? | matrice de pages et effet D/G sur I | déplacer le contenu avant l'intégration | mini-exemple de dépendance |
| 7 | « Design et développement : ce qui peut se chevaucher » | que paralléliser sans reprise ? | réseau A–Q | protéger les validations | diagramme lisible |
| 8 | « Intégrations, boutique et données changent de scénario » | quand sortir de la fourchette vitrine ? | variables de bascule + Adobe/BSI | refuser de dater si API/règles inconnues | questions d'étude |
| 9 | « Les tests qui autorisent le go-live » | que signifie zéro bloqueur ? | W3C, USAGov, GOV.UK, CNIL, portes 3–4 | signer ou refuser la bascule | checklist de recette |
| 10 | « Refonte, DNS et retour arrière » | comment protéger l'adresse et les URL ? | Google Site Moves + Cloudflare | préparer mapping, fenêtre et rollback | runbook synthétique |
| 11 | « Ce que coûte une semaine de retard » | l'urgence vaut-elle une V1 ? | formule et exemple 558–1 158 €/semaine + 220 € ponctuels | lancer petit, maintenir ou différer | calcul reproductible |
| 12 | « Accélérer sans déplacer le risque » | quels leviers ont des préconditions ? | tableau section 25 | couper la V1, pas les portes | conditions / limites |
| 13 | « Quand reporter le lancement » | quels no-go assumer ? | dix critères section 25 | différer ou réduire | position professionnelle |
| 14 | « Ce que le devis doit rendre vérifiable » | quelles clauses demander ? | départ/fin/scope/charge/calendrier, changement et suspension | comparer deux offres | checklist à copier |
| 15 | « Les trente jours après » | qui surveille et quand clôturer ? | J+1/J+7/J+30 + Google | acheter la continuité | frise courte |
| 16 | « Construire votre planning » | quelle prochaine action autonome ? | feuille inline ou ressource réellement livrée et testée | constater une date intenable | aucun faux téléchargement |

### Ressource et CTA : décision P1

Une ressource autonome est pertinente : modèle éditable avec tâches,
prédécesseurs, durée, propriétaire, fin au plus tôt, marge, portes et coût du
retard. P2 ne doit annoncer un téléchargement que si le fichier existe, contient
un exemple rempli, se recalcule correctement et a été testé visuellement. Sinon,
le calcul central doit rester directement utilisable dans la page.

Le CTA peut promettre une **restitution** seulement si le parcours réel la
produit. Formulation de fond possible :

```text
Entrées : date cible, V1, contenus, accès, intégrations et responsables.
Restitution : fenêtre conditionnelle, chemin critique, prérequis et risques.
Limites : aucun engagement de date avant validation du périmètre et des tiers ;
          aucune garantie d'indexation, de trafic ou de classement.
```

Ne publier aucun délai de réponse commercial tant qu'il n'est ni mesuré ni
opérationnellement tenu.

### Registre des neuf P1 hérités

| ID | Statut après P1 r1 | Preuve de fermeture documentaire | Travail P2 restant |
| -- | ------------------- | -------------------------------- | ------------------ |
| P1-01 | fermé en recherche | sections 13, 20 et 21 | mettre le chemin critique avant les fourchettes |
| P1-02 | fermé en recherche | sections 19 à 21 | distinguer visuellement jours-personnes et calendrier |
| P1-03 | fermé en recherche | cas exigeant, variables de bascule et critères de non-datation | remplacer « à chiffrer » par les questions d'étude |
| P1-04 | fermé en recherche | cas exigeant : catalogue, paiement, livraison, taxes, ERP, langues | segmenter la boutique dans la page |
| P1-05 | fermé en recherche | tâches B/D/I, matrice section 22 et sensibilité | rendre les propriétaires visibles |
| P1-06 | fermé en recherche | sections 16, 22 et 23 | intégrer les portes et sources près des affirmations |
| P1-07 | fermé en recherche | Google/Cloudflare, sections 16, 22, 23 et plan P2 | écrire runbook et suivi sans garantie |
| P1-08 | fermé en recherche | marge placée dans chaque scénario et calcul A–Q | expliquer qui possède la marge |
| P1-09 | fermé en recherche | section 27, restitution et limites | n'afficher que le livrable réellement disponible |

« Fermé en recherche » signifie que P2 dispose d'une consigne, d'un calcul ou
d'une source suffisante. Cela ne signifie pas que la page est corrigée.

### Contre-audit P1 à froid

```text
Relecteur indépendant : /root/excel_p1_mondial/cold_p1_audit_delai_site
Indépendance : lecture à froid en écriture interdite ; aucun fichier modifié
Périmètre : recherche uniquement ; aucun code ni page publique
Affirmations revérifiées : définition de « prêt », même périmètre, migration,
                           Google, conformité, rôles données et tiers inconnus
Calculs refaits : 26/46/base 106 jours ; 36/12,5/2 j-p ; validation design ;
                  chemin migration ; 558–1 158 €/semaine + 220 € ponctuels
P0 : 0
P1 : 0 ouvert après correction du NO-GO provisoire
Corrections appliquées : somme du cas exigeant ; sensibilité de validation ;
                         branche migration ; frais ponctuels séparés ; 106
                         qualifié par l'attente tierce ; formule ramenée à une
                         borne basse avant nivellement ; contenus du cas simple ;
                         rôles de traitement au cas par cas ; Google ramené à
                         une recommandation ; corpus et plan P2 réconciliés
Revalidation : le relecteur a confirmé la première série de corrections ;
               le responsable P1 a ensuite refait le contrôle ciblé de la
               dernière série avant gel, le créneau du relecteur étant clos
Verdict : GO pour la porte de recherche P1 uniquement ; ce n'est pas P3
```

### Rapport de sortie P1

```text
PASSE 1 TERMINÉE
Slug : combien-de-temps-pour-creer-un-site
Lecteur et phrase réelle : dirigeant avec date fixe ; « quelle V1 testée et qui
                           doit fournir quoi ? »
Décision : date conditionnelle, V1, responsabilités, go/no-go et marge
Angle : remplacer la fourchette par un planning calculable et contestable
Pages proches : coût/TCO, maintenance et cahier des charges restent hors
                périmètre ; ici, décision de calendrier et responsabilité
Sources décisives : GAO, W3C, USAGov/Digital.gov, GOV.UK, BSI, Google, CNIL,
                    ministère de l'Économie/RGAA et Cloudflare
Incertitudes exclues : moyenne marché, délai tiers, validation juridique,
                       indexation, trafic, classement et opportunité non mesurée
Action autonome : chemin critique + RACI + coût du retard
CTA possible : restitution conditionnelle seulement si le parcours la produit
Plan : 16 sections annotées ci-dessus
Snapshot : docs/research/manifests/combien-de-temps-pour-creer-un-site-p1-2026-07-25-r1.sha256
           après contre-audit et gel
```

### Limite de statut

La porte P1 prépare une réécriture premium ; elle ne l'effectue pas. La page
publique conserve donc son score historique et ses défauts tant que `/root`
n'a pas terminé P2. P3 doit être réalisée par un autre agent sur le snapshot
P2. P4 exige notamment rendu réel, lecture dirigeant, contrôles de liens, image
sociale, commandes bloquantes et autorisation éditoriale. Aucun de ces statuts
ne peut être déduit du présent dossier.
