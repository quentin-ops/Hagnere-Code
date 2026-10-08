# Joril et l'offre d'assistants IA sur hagnere-code.ai

Date : 8 octobre 2026. Ordre du dirigeant le même jour : « oui tu peux rajouter ».

## Contexte

L'audit du 8 octobre 2026 a constaté que hagnere-code.ai ne citait ni Joril ni
les assistants IA, alors que https://joril.ai écrit que son offre est « réalisée
et déployée par Hagnéré Code ». Un visiteur qui passait de l'un à l'autre ne
retrouvait pas l'agence dans la même histoire.

## Décision

Le site présente Joril et l'offre d'assistants IA en **cinq emplacements**, tous
alimentés par une seule source, `src/lib/joril.ts` :

1. une bande « Assistants IA · Joril » sur `/services`, juste après le catalogue ;
2. la même bande sur `/realisations`, entre les quatre analyses et l'offre de
   services (Joril est l'assistant intégré à l'un des quatre produits du groupe,
   LMNP.AI) ;
3. une bande courte sur l'accueil, dans la section « services », avant la bande
   « Pas sûr du bon service ? » ;
4. une phrase avec lien dans le bloc « IA agentique & automatisations » de
   `/services/saas-applications-metier` ;
5. une carte « Assistants IA (Joril) » dans la catégorie « Construire » du
   méga-menu et une tuile dans le pied de page, donc sur toutes les pages.

Tous les liens vers https://joril.ai s'ouvrent dans un nouvel onglet
(`rel="noopener noreferrer"`, nom accessible qui le dit).

Faits écrits, et seulement ceux-là :

- Joril est l'assistant IA intégré à LMNP.AI, logiciel édité par Comptabilité AI,
  société du groupe Hagnéré ;
- la nouvelle version de LMNP.AI, avec Joril, est en alpha ;
- le premier déploiement de Joril dans LMNP.AI est prévu à partir du
  25 octobre 2026 (annonce décidée par le dirigeant le 8 octobre 2026) ;
- sur joril.ai, Comptabilité AI propose des assistants IA sur mesure pour les
  logiciels, back-offices et espaces clients des entreprises ; Hagnéré Code les
  réalise et les déploie.

Aucun client, chiffre, résultat, témoignage ni prix. Jamais « en production »
pour LMNP.AI. Le site n'écrit pas que Hagnéré Code a construit Joril dans LMNP.AI :
la page publique ne le prouve pas et CLAUDE.md demande de ne pas l'affirmer.
`src/lib/joril.test.ts` (rangé dans `check:seo`, donc bloquant avant build) tient
ces limites et vérifie que chaque emplacement lit la source commune.

## Pourquoi pas une page « Assistants IA » dans les services

Un douzième service du registre `SERVICE_LINKS` aurait entraîné : une page de
plus à tenir à jour en double de joril.ai (risque de contenu dupliqué), une ligne
dans la grille tarifaire (`pricing-grid.test.ts` l'exige pour chaque service),
donc un prix ou un « sur devis » à inventer côté agence, alors que joril.ai
chiffre « sur devis après un atelier » et que l'offre appartient à Comptabilité AI.
La page dédiée existe déjà, c'est joril.ai : le site de l'agence y renvoie.

## Où corriger si le calendrier ou le statut changent

Dans `src/lib/joril.ts` uniquement (`JORIL_STATUT`, `JORIL_CALENDRIER`), puis
relancer `npm run test`. Quand le premier déploiement aura eu lieu, remplacer
la phrase « prévu à partir du » par le fait constaté, avec sa date.

## Options écartées

- Ajouter Joril comme cinquième fiche de `/realisations` : la page compte quatre
  inventaires datés de pages publiques (compte vérifié par test) ; Joril est une
  fonction d'un de ces produits, pas un produit de plus, et sa nouvelle version
  n'est pas encore publique.
- Mentionner Joril dans `llms.txt` : cet index ne liste que des pages de
  hagnere-code.ai (un test l'impose) ; aucune page nouvelle n'a été créée.
- Données structurées (`Organization`, `Service`) : rien ne s'y ajoute sans
  miroir exact dans le visible ; l'offre n'est pas un service du registre.
