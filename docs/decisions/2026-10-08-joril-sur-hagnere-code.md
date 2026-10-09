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

- Joril est l'assistant IA intégré à LMNP.AI, site édité par LMNP AI (société
  du groupe Hagnéré) ; Joril appartient à Comptabilité AI (voir la correction
  d'exactitude plus bas) ;
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

## Correction d'exactitude : l'éditeur de LMNP.AI est LMNP AI

Le 8 octobre 2026 au soir, le Scribe a relevé que la phrase « LMNP.AI est édité
par Comptabilité AI », écrite dans `JORIL_DEFINITION`, était fausse. Les mentions
légales de lmnp.ai (https://lmnp.ai/legal/mentions-legales, version 4.0 du
11 septembre 2026) disent : « Le site internet lmnp.ai […] est édité par la
société LMNP AI, Société par Actions Simplifiée au capital de 1 000 000 € »,
immatriculée au RCS d'Avignon sous le numéro B 109 092 247, représentée par sa
présidente Hagnéré Holding One. L'annuaire des entreprises confirme : SIREN
109092247, LMNP AI, créée le 24/08/2026, siège à Avignon, présidente HAGNERE
HOLDING ONE (SIREN 993742204, président Quentin Hagnéré). Lecture refaite le
8 octobre 2026. La version précédente de la ligne de CLAUDE.md attribuait
l'édition de LMNP.AI à COMPTABILITE-AI : l'erreur venait de là.

Pour SCI-AI.app, les mentions légales (version 2.01 du 07/10/2026) disent bien
« édité par la société COMPTABILITÉ-AI » (RCS Belfort 978 548 899) : cette ligne
du tableau reste vraie.

Corrigé :

- `JORIL_DEFINITION` : « LMNP.AI est édité par LMNP AI, société du groupe
  Hagnéré. » Joril reste la propriété de Comptabilité AI, qui le propose sous
  licence sur joril.ai (`JORIL_OFFRE` le dit : « Comptabilité AI, propriétaire de
  Joril, propose… ») ;
- CLAUDE.md : la ligne COMPTABILITE-AI du tableau des sociétés ne dit plus
  qu'elle édite LMNP.AI (source et date entre parenthèses, les autres faits sont
  gardés) et une ligne LMNP AI est ajoutée ; `src/lib/joril.test.ts` interdit le
  retour de « LMNP.AI est édité par Comptabilité AI » ;
- `/agence-next-js` portait la même erreur (« LMNP.AI et SCI-AI.app, édités par
  Comptabilité AI ») : elle dit maintenant « édités par deux sociétés du même
  groupe (LMNP AI et Comptabilité AI) » ;
- la bande de l'accueil est allégée : deux phrases courtes (`JORIL_ACCUEIL`), au
  lieu de quatre blocs de texte (six lignes à 390 px). Elle garde l'alpha, la
  conception par Hagnéré Code et la licence d'utilisation ; le détail (éditeur
  de LMNP.AI, calendrier, conditions) reste sur /services et /realisations.

Non modifié : les dossiers de recherche de `docs/research/`, qui sont des
archives datées.

## Précision du 9 octobre 2026 : Hagnéré Code développe LMNP.AI

Quentin Hagnéré, via le Scribe : « la société LMNP AI est éditeur et propriétaire
de LMNP.AI, mais le site a été mis à jour et développé par la société de code ».
Jusque-là, la fiche /realisations/lmnp-ai disait « ne prouve ni l'auteur du
code » et plusieurs phrases disaient que les inventaires « ne revendiquent ni leur
conception » pour les quatre produits.

Décidé, pour LMNP.AI seulement :

- fiche /realisations/lmnp-ai : LMNP AI en est l'éditeur et le propriétaire, et
  Hagnéré Code le développe ; la fiche ne prouve toujours ni l'équipe, ni la
  technologie, ni un résultat. La note éditoriale précise que ce fait est
  déclaré par l'auteur du site et que la page publique ne le montre pas, alors que
  les fonctions listées se vérifient ;
- l'accueil, /realisations (méta et chapô) et /agence-next-js disent que Hagnéré
  Code développe LMNP.AI et que la conception des autres n'est pas revendiquée ;
- `JORIL_DEFINITION` dit que Hagnéré Code « développe aussi LMNP.AI » et que LMNP AI
  en est propriétaire ;
- CLAUDE.md consigne le fait (daté, attribué), son périmètre et la garde
  `src/lib/joril.test.ts`.

SCI-AI.app, Hagnéré Patrimoine et Hagnéré Investissement restent sous la règle
prudente : leurs fiches gardent « ne prouve ni l'auteur du code » et « sans
attribution de sa conception à Hagnéré Code », et le test le vérifie.

Laissées en l'état, car elles disent ce que les pages publiques prouvent et non ce
que le site revendique : les mentions « ces pages ne prouvent pas leur conception »
des bandeaux de preuve (logo-walls, /methode, pages de service), dont certaines
sont épinglées par des tests. Elles restent vraies : une page publique ne prouve
pas qui l'a conçue ; c'est la déclaration du dirigeant, signalée comme telle sur
la fiche, qui porte l'attribution.
