# Dossier de travail — SEO ou Google Ads

Version : 21 juillet 2026
Page : `/guides/seo-ou-google-ads`

> La version précédente de ce dossier et de la page a été invalidée après
> observation sur un téléphone de 390 px. Le fond était documenté, mais la
> rédaction obligeait un dirigeant à apprendre une méthode abstraite avant de
> comprendre la différence entre les deux investissements. La trace complète
> de cet échec figure dans
> `audit-pedagogie-humaine-43-guides-2026-07-21.md`. Ce dossier décrit
> uniquement la version réécrite.

## Journal des quatre passes — correction factuelle du 21 juillet 2026

| Passe                        | État                     | Date       | Responsable                | Snapshot     | Blocages                   |
| ---------------------------- | ------------------------ | ---------- | -------------------------- | ------------ | -------------------------- |
| 1. Recherche                 | Terminée — porte validée | 2026-07-21 | orchestrateur + fact-check | dossier relu | aucun fait majeur faux     |
| 2. Rédaction et intégration  | Terminée — porte validée | 2026-07-21 | orchestrateur              | `9df5056…`   | aucun                      |
| 3. Contre-audit indépendant  | Terminée — porte validée | 2026-07-21 | agent indépendant          | à actualiser | aucun P0/P1 restant        |
| 4. Plume humaine et contrôle | Bloquée                  |            |                            |              | P3 validée ; P4 à exécuter |

Le dossier historique ne comportait pas les rapports normalisés du nouveau
workflow. Ils sont donc constitués honnêtement lors de cette correction, sans
prétendre que le processus actuel avait été appliqué avant sa création.

### Manifeste d'entrée de P3

| Fichier                                                | SHA-256                                                            |
| ------------------------------------------------------ | ------------------------------------------------------------------ |
| `src/app/guides/seo-ou-google-ads/page.tsx`            | `9df50561f6836c1f51e11e1c39c372b1251fd9930bd20340516a45c8a78b7159` |
| `src/app/guides/seo-ou-google-ads/opengraph-image.tsx` | `60bbdeca61fa15ccf69cffc11be91bc61cb84367f5ca57c63068abdc48bafe4d` |
| `src/lib/guides.ts`                                    | `bcf3ce4569dd45db8a94a92e06ed5a45cc474ed8bda32657fdc1c21f8fc91dfb` |

## 1. Lecteur et décision

```text
Requête principale : SEO ou Google Ads
Lecteur : dirigeant de TPE/PME ou indépendant non spécialiste du marketing
Situation : il doit choisir où investir un budget limité pour être trouvé et obtenir des demandes
Phrase qu'il pourrait prononcer : « Est-ce que je paie des annonces maintenant ou est-ce que j'investis dans des articles et dans mon site ? »
Décision après lecture : commencer par Google Ads, commencer par le SEO, mener les deux avec des rôles distincts ou corriger d'abord l'offre et le site
Action sans contact commercial : choisir un objectif, vérifier les prérequis et suivre un plan de 90 jours
Bon fit Hagnéré Code : offre compréhensible, marché identifiable, budget réaliste et suivi possible des demandes
Mauvais fit : vente certaine exigée à très court terme, offre encore floue, page inutilisable ou demandes jamais rappelées
```

### Réponse courte attendue

Google Ads permet de payer pour tenter d'afficher rapidement une annonce sur
des recherches ciblées, après examen et mise en concurrence. Le référencement
naturel, appelé SEO, consiste à améliorer le site et à publier des pages utiles
pour être trouvé dans les résultats non publicitaires. Google Ads peut tester
plus vite l'ensemble formé par le ciblage, l'annonce, l'offre, la page et le
traitement commercial ; le SEO convient mieux pour répondre dans la durée à
des recherches récurrentes. Aucun des deux ne garantit visibilité, demande ou
vente.

## 2. Frontière avec les autres pages

| Page proche                          | Question traitée par cette page                 | Différence du présent guide                                     |
| ------------------------------------ | ----------------------------------------------- | --------------------------------------------------------------- |
| `prix-referencement-naturel`         | combien coûte une prestation SEO                | ici, le lecteur choisit entre deux types d'investissement       |
| `prix-gestion-google-ads`            | combien coûtent média, gestion et lancement     | ici, le montant n'est qu'un des critères du choix               |
| `audit-seo-que-contient-il`          | que doit produire un audit SEO                  | ici, l'audit est une étape éventuelle après le choix            |
| `audit-google-ads-que-verifier`      | comment contrôler un compte existant            | ici, le lecteur peut ne pas encore avoir de campagne            |
| `pourquoi-mon-site-ne-convertit-pas` | pourquoi les visites ne donnent pas de demandes | ici, cette vérification détermine s'il faut investir maintenant |

Une URL distincte est justifiée parce qu'aucune de ces pages ne répond à la
question : « dans lequel des deux dois-je investir en premier ? »

## 3. Questions auxquelles la page répond

- quelle est la différence concrète entre SEO et Google Ads ;
- lequel peut donner de la visibilité le plus vite ;
- lequel reste utile lorsque les dépenses publicitaires s'arrêtent ;
- quand commencer par l'un, par l'autre ou par les deux ;
- quels coûts comparer au-delà du prix affiché ;
- que vérifier avant toute dépense ;
- quoi faire pendant les 90 premiers jours ;
- dans quels cas reporter les deux investissements.

## 4. Fiche de preuves

| Fait sourcé                                                                                                                                                                                                               | Source primaire et passage utile                                                                                                                                           | Limite                                                                                                            | Déduction stratégique Hagnéré Code                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| Google présente le SEO comme un travail qui aide les moteurs à comprendre le contenu et les personnes à décider de visiter                                                                                                | [Google Search Central — Guide de démarrage SEO](https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=fr), sections sur l'utilité et les délais     | aucune indexation, présence ou position n'est garantie ; l'effet peut prendre de quelques heures à plusieurs mois | investir dans l'utilité, l'indexabilité et l'entretien plutôt qu'acheter une promesse de classement |
| Google recommande de créer du contenu d'abord pour les personnes                                                                                                                                                          | [Google Search Central — Contenu utile](https://developers.google.com/search/docs/fundamentals/creating-helpful-content?hl=fr), auto-évaluation du contenu people-first    | ce principe ne garantit ni trafic ni vente                                                                        | répondre aux vraies questions plutôt que remplir un quota d'articles                                |
| Une annonce doit être examinée, puis gagner une enchère dont le résultat dépend notamment du montant proposé, de sa qualité, du contexte et de la concurrence                                                             | [Google Ads — Examen](https://support.google.com/google-ads/answer/1722120?hl=fr) et [classement des annonces](https://support.google.com/google-ads/answer/1752122?hl=fr) | la visibilité rapide reste une possibilité, jamais un droit acheté                                                | présenter Ads comme un test plus rapide, pas comme une présence immédiate garantie                  |
| Les campagnes Search visent les personnes qui recherchent des produits ou services, mais une campagne teste simultanément ciblage, annonce, offre, page et traitement                                                     | [Google Ads — Campagnes Search](https://support.google.com/google-ads/answer/9510373?hl=fr)                                                                                | la seconde partie est une déduction du parcours, pas une affirmation de Google sur la demande totale              | ne jamais conclure qu'une campagne seule valide ou invalide la demande                              |
| Le rapport sur les termes de recherche ne montre pas individuellement toutes les requêtes à faible activité                                                                                                               | [Google Ads — Termes de recherche](https://support.google.com/google-ads/answer/2472708?hl=fr), limites de confidentialité                                                 | le rapport disponible n'est pas exhaustif                                                                         | parler d'une partie des termes, jamais des mots réellement recherchés au complet                    |
| Google Ads n'impose pas de dépense minimale, mais le budget quotidien est une moyenne et peut atteindre deux fois ce montant un jour donné, dans la limite mensuelle de 30,4 fois la moyenne pour de nombreuses campagnes | [Google Ads — Coûts](https://support.google.com/google-ads/answer/6319?hl=fr) et [budgets](https://support.google.com/google-ads/answer/10486536?hl=fr)                    | les règles varient selon le type de budget et de campagne                                                         | fixer un risque total supportable plutôt qu'assimiler le budget quotidien à un plafond journalier   |
| Une conversion Google Ads est une action configurée par l'annonceur                                                                                                                                                       | [Google Ads — Suivre les conversions](https://support.google.com/google-ads/answer/1722054?hl=fr)                                                                          | formulaire, clic ou appel ne signifie pas automatiquement client rentable                                         | rapprocher les actions des prospects qualifiés, ventes et marges dans l'outil commercial            |
| Acheter des annonces n'améliore pas directement le classement naturel                                                                                                                                                     | [Google Ads — Résultats naturels et sponsorisés](https://support.google.com/google-ads/answer/3097241?hl=fr)                                                               | des apprentissages commerciaux indirects restent possibles                                                        | suivre séparément média, gestion, site et contenus                                                  |
| Les traceurs publicitaires non strictement nécessaires nécessitent en principe un consentement préalable en France                                                                                                        | [CNIL — Cookies et autres traceurs](https://www.cnil.fr/fr/cookies-et-autres-traceurs/que-dit-la-loi)                                                                      | l'application exacte dépend des finalités et du paramétrage                                                       | prévoir une mesure conforme et présenter ses données comme potentiellement incomplètes              |

### Affirmations volontairement exclues

- « Google Ads apporte immédiatement des prospects » ;
- « payer Google Ads garantit une visibilité immédiate » ;
- « le rapport montre toutes les recherches effectuées » ;
- « le budget quotidien est toujours un plafond journalier » ;
- « une campagne Ads mesure la demande indépendamment de l'offre et de la page » ;
- « le SEO prend toujours trois, six ou douze mois » ;
- « le SEO est gratuit » ;
- « une répartition 50/50 convient aux PME » ;
- « une conversion annoncée par la plateforme est une vente » ;
- « le SEO ou Google Ads garantit un retour sur investissement ».

## 5. Contrat de langage humain

Les premiers mots doivent reprendre le choix tel que le lecteur le formule :
prendre le temps d'améliorer son site et de publier, ou payer Google pour
afficher des annonces.

| Terme nécessaire    | Formulation visible                                                                                |
| ------------------- | -------------------------------------------------------------------------------------------------- |
| SEO                 | améliorer le site et publier des pages utiles pour apparaître dans les résultats non publicitaires |
| Google Ads          | payer pour afficher des annonces sur des recherches choisies                                       |
| conversion          | action mesurée : formulaire, appel, rendez-vous ou achat                                           |
| coût d'acquisition  | somme dépensée pour obtenir un client, pas seulement un clic                                       |
| page de destination | page ouverte après le clic sur l'annonce                                                           |

À retirer de la page : toute métaphore transformée en méthode, tout système à
mémoriser et tout titre qu'un dirigeant ne peut pas comprendre isolément.

## 6. Structure retenue

1. expliquer la différence entre les deux investissements ;
2. partir de l'objectif de l'entreprise ;
3. reconnaître les situations favorables à Google Ads ;
4. reconnaître les situations favorables au SEO ;
5. expliquer quand les combiner ;
6. vérifier l'offre, le site, le suivi et la capacité à répondre ;
7. comparer média, prestation, pages, contenus, mesure et temps interne ;
8. montrer trois entreprises fictives aux besoins différents ;
9. proposer un plan simple sur 90 jours ;
10. donner une décision finale selon quatre situations.

Les tableaux longs ont été remplacés par des cartes et des listes. Sur
téléphone, la situation, le choix et sa raison restent visibles ensemble.

## 7. Conversion

```text
Action autonome : noter l'objectif, le délai et le budget ; vérifier l'offre, la page, la mesure et le traitement des demandes ; choisir le premier test
CTA principal : « Faire le point sur mon projet »
Résultat annoncé : confronter objectif, délai, budget et site avant de recommander SEO, Ads, les deux ou une correction préalable
Alternative admise : conserver la situation actuelle et corriger un problème précis avant d'acheter du trafic ou des contenus
Ressource téléchargeable : non, la décision ne justifie pas un fichier supplémentaire
```

## 8. Contre-audit indépendant

Le 21 juillet 2026, un agent qui n'a pas rédigé la nouvelle version a relu le
guide, ses sources, ses calculs, sa FAQ, son CTA et son image sociale.

| Axe         | Note | Justification                                                        |
| ----------- | ---: | -------------------------------------------------------------------- |
| Intention   |    2 | la vraie question reçoit une réponse dès l'ouverture                 |
| Décision    |    2 | quatre choix possibles, y compris attendre                           |
| Pédagogie   |    2 | SEO et Ads sont expliqués avec des actions ordinaires                |
| Profondeur  |    2 | coûts, délai, mesure, suivi commercial et mauvais fits sont couverts |
| Preuve      |    2 | affirmations importantes reliées à Google et à la CNIL               |
| Comparaison |    2 | les deux solutions sont comparées jusqu'au résultat commercial       |
| Originalité |    2 | trois situations et un plan de 90 jours propres au sujet             |
| Style       |    2 | aucun système abstrait à apprendre                                   |
| Conversion  |    2 | CTA sobre et possibilité de recommander une solution moins chère     |
| SEO/produit |    2 | build indexable et contrôles navigateur mobile et bureau réussis     |

Score interne final : **20/20**. Ce score décrit la conformité du snapshot à la
charte et aux contrôles du dépôt. Il ne constitue ni un avis de clients, ni une
preuve de classement futur, ni un test utilisateur extérieur.

### Test humain réel

```text
Test réalisé par une personne réelle : non
Décision de publication : autorisée explicitement par le commanditaire
Ce que nous ne revendiquons pas : panel de dirigeants, entretien utilisateur ou validation humaine extérieure
```

Statut éditorial : **publiable — validation éditoriale déléguée**. Cette
formulation consigne l'autorisation de publication ; elle ne remplace pas les
contrôles techniques et visuels ci-dessous.

## 9. Vérifications finales

- [x] ouverture reformulable après une seule lecture ;
- [x] aucun titre ne demande d'apprendre un vocabulaire propre au guide ;
- [x] sources importantes placées au niveau des affirmations ;
- [x] comparaison principale transformée en cartes lisibles sur téléphone ;
- [x] FAQ directe et CTA formulé comme résultat pour le prospect ;
- [x] metadata, canonical, Article, BreadcrumbList et image sociale cohérents ;
- [x] contre-audit indépendant et score interne final à 20/20 ;
- [x] batterie globale TypeScript, ESLint et SEO sur le snapshot final ;
- [x] build de production et contrôle de l'artefact indexable ;
- [x] rendu final contrôlé de 320 à 1 600 px, notamment à 390 px ;
- [x] URL de production, canonical, robots, données structurées et image sociale vérifiés.

## 10. Preuve de publication

Contrôle réalisé le 21 juillet 2026 après fusion du commit `0815aeb` dans
`main` par le commit `a12f5b7` :

- déploiement Vercel de production `dpl_Gq6XYZhxKmXR7JXW8j9kobQQbHcm` prêt et
  relié à `https://hagnere-code.ai` ;
- URL canonique en `200`, sans redirection ;
- robots `index, follow` ;
- canonical exact ;
- un H1, `Article` et `BreadcrumbList` présents ;
- image sociale en PNG de 1 200 × 630 px, titre non coupé ;
- guide présent dans le hub, le sitemap et `llms.txt` ;
- ancienne terminologie et tableau principal absents ;
- rendu réel sans débordement à 390 × 844 px et console sans erreur ;
- les 43 URL de guides ont répondu en `200` avec canonical, robots et données
  structurées cohérents.

Statut actuel : **publié et contrôlé en production**. Ce statut ne signifie pas
que Google a déjà exploré, indexé ou classé la nouvelle version.
