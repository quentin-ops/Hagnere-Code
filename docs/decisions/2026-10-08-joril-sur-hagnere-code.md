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
- Joril a été conçu et développé par Hagnéré Code (réponse du dirigeant du
  8 octobre 2026 au soir, voir plus bas) ;
- la nouvelle version de LMNP.AI, avec Joril, est en alpha ;
- le premier déploiement de Joril dans LMNP.AI est prévu à partir du
  25 octobre 2026 (annonce décidée par le dirigeant le 8 octobre 2026) ;
- sur joril.ai, Comptabilité AI propose des assistants IA sur mesure pour les
  logiciels, back-offices et espaces clients des entreprises ; Hagnéré Code les
  réalise et les déploie.

Aucun client, chiffre, résultat, témoignage ni prix. Jamais « en production »
pour LMNP.AI. La conception de LMNP.AI lui-même n'est pas attribuée à Hagnéré
Code : la page publique ne la prouve pas (voir la réponse du dirigeant plus bas
pour Joril, qui est le seul élément attribué).
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

## Réponse du dirigeant : Joril a été conçu et développé par Hagnéré Code

Le 8 octobre 2026 au soir, la première version de cette décision laissait une
question ouverte : joril.ai écrit « nous avons construit Joril pour LMNP.AI »,
mais la page publique de LMNP.AI ne le prouve pas et CLAUDE.md demandait de ne
pas attribuer à l'agence la conception des produits du groupe. Quentin Hagnéré a
répondu, par le Scribe : « Oui on peut l'écrire, c'est bien le cas ».

Décidé en conséquence :

- le site dit que Joril, l'assistant IA intégré à LMNP.AI, a été conçu et
  développé par Hagnéré Code, en une phrase sobre, sans résultat ni chiffre
  (`JORIL_DEFINITION` dans `src/lib/joril.ts`), avec les mêmes réserves qu'avant :
  nouvelle version de LMNP.AI en alpha, premier déploiement prévu à partir du
  25 octobre 2026 ;
- le fait est consigné dans CLAUDE.md, à la liste des faits vérifiés, daté du
  08/10/2026 et attribué à Quentin Hagnéré, pour qu'un audit ne le retire pas ;
  `src/lib/joril.test.ts` vérifie que cette ligne reste dans CLAUDE.md ;
- l'attribution vaut pour Joril seulement. Elle ne s'étend ni à LMNP.AI dans son
  ensemble, ni à SCI-AI.app, Hagnéré Patrimoine ou Hagnéré Investissement, dont
  les fiches de /realisations restent des inventaires datés de pages publiques
  (« ne prouve ni l'auteur du code ») ; LMNP.AI reste un produit du groupe, jamais
  un client indépendant ;
- option écartée : retoucher la fiche /realisations/lmnp-ai. Elle décrit la page
  publique actuelle de lmnp.ai, consultée le 20 juillet 2026, où Joril n'apparaît
  pas encore ; la bande « Assistants IA · Joril » porte la mention de Joril.

## Complément : licence d'utilisation

Le 8 octobre 2026 au soir, Quentin Hagnéré a décidé que les assistants Joril
(offre de Comptabilité AI présentée sur joril.ai) sont fournis sous **licence
d'utilisation** : le client n'est pas propriétaire du code. Les conditions
(frais de mise en service, puis deux formules de redevance ou de refacturation de
la consommation) sont sur joril.ai.

hagnere-code.ai dit par ailleurs, pour les projets d'agence, que les livrables
spécifiques sont transférés après paiement complet. Un acheteur qui lit les deux
sites pourrait y voir une contradiction. Décidé :

- une phrase sobre, `JORIL_LICENCE` dans `src/lib/joril.ts` : « Les assistants
  Joril sont proposés par Comptabilité AI sous licence d'utilisation, selon les
  conditions présentées sur joril.ai. » Elle apparaît dans la bande de
  /services et de /realisations (ligne « Conditions »), dans la bande de
  l'accueil, et, en quelques mots, dans le bloc « IA agentique » de la page SaaS ;
- les conditions de l'agence (CGV, pages service, tarifs) ne sont pas modifiées :
  la règle sur les livrables transférés vaut pour les projets d'agence, pas pour
  Joril ;
- ni frais, ni formule, ni montant recopiés sur hagnere-code.ai : ils restent
  sur joril.ai, seule source des conditions de la licence ; `src/lib/joril.test.ts`
  interdit les montants et les mots « propriétaire », « transfert » et
  « redevance » dans ce texte ;
- la licence est celle de Comptabilité AI : la phrase ne cite pas Hagnéré Code.
