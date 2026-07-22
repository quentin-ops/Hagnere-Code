# Dossier de recherche — Landing page ou site vitrine : que choisir ?

> Ce dossier prépare un guide destiné à un dirigeant, un commerçant ou un
> indépendant qui hésite entre une page dédiée à une offre et une présence plus
> complète pour son entreprise. Il traite la décision avant la conception : quel
> actif créer, réutiliser ou reporter selon les visiteurs, leurs questions et la
> durée de vie du besoin ?

Statut actuel : **publiable — validation éditoriale déléguée ; porte P4 validée
à 19/20 et ouverture à `index, follow` autorisée pour le build de production,
sans prétendre à un test par un dirigeant réel ni à une indexation Google déjà
obtenue**.

## Journal des quatre passes

Propriétaire éditorial unique : **agent racine Codex**.

| Passe                        | État                     | Date       | Responsable                                                        | Snapshot                                           | Blocages             |
| ---------------------------- | ------------------------ | ---------- | ------------------------------------------------------------------ | -------------------------------------------------- | -------------------- |
| 1. Recherche                 | Terminée — porte validée | 2026-07-22 | Agent P1 `/root/research_landing_vs_site_p1`, sous contrôle racine | `manifests/landing-page-ou-site-vitrine-p1.sha256` | Aucun                |
| 2. Rédaction et intégration  | Terminée — porte validée | 2026-07-22 | Agent éditeur P2 unique `/root/write_seo_timeline_p2`              | `manifests/landing-page-ou-site-vitrine-p2.sha256` | Aucun pour ouvrir P3 |
| 3. Contre-audit indépendant  | Terminée — porte validée | 2026-07-22 | Deux agents distincts de l'auteur P2, en lecture seule             | `manifests/landing-page-ou-site-vitrine-p3.sha256` | Aucun                |
| 4. Plume humaine et contrôle | Terminée — porte validée | 2026-07-22 | Agent racine Codex                                                 | `manifests/landing-page-ou-site-vitrine-p4.sha256` | Aucun                |

### Manifeste du snapshot

| Fichier contrôlé                                                  | SHA-256           | Passe | Remarque                                               |
| ----------------------------------------------------------------- | ----------------- | ----- | ------------------------------------------------------ |
| `docs/research/landing-page-ou-site-vitrine.md`                   | voir le manifeste | P4    | dossier documentaire et rapports des quatre passes     |
| `src/app/guides/landing-page-ou-site-vitrine/page.tsx`            | voir le manifeste | P4    | page complète, autorisée en index/follow en production |
| `src/app/guides/landing-page-ou-site-vitrine/opengraph-image.tsx` | voir le manifeste | P4    | image dédiée 1 200 × 630 inspectée                     |
| `src/lib/guides.ts`                                               | voir le manifeste | P4    | entrée publiée dans le registre, 19 min                |
| `src/components/guides/GuidesHubPage.tsx`                         | voir le manifeste | P4    | icône de carte                                         |
| `src/lib/guide-human-language.test.ts`                            | voir le manifeste | P4    | garde-fou de hiérarchie et de langage                  |
| `src/app/guides/template-ou-site-sur-mesure/page.tsx`             | voir le manifeste | P4    | un lien entrant contextuel vers le guide               |

Le hash du présent dossier n'est pas recopié ici afin d'éviter une référence
circulaire. Il est enregistré dans le manifeste de chaque passe.

## 1. Fiche d'identité

| Champ                            | Décision documentaire                                                                                                                                                                                                                                                                                                                                                                                                           |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Slug                             | `landing-page-ou-site-vitrine`                                                                                                                                                                                                                                                                                                                                                                                                  |
| Titre SEO provisoire             | Landing page ou site vitrine : que choisir ?                                                                                                                                                                                                                                                                                                                                                                                    |
| H1 provisoire                    | Landing page ou site vitrine : que faut-il créer pour votre entreprise ?                                                                                                                                                                                                                                                                                                                                                        |
| Requête principale qualitative   | landing page ou site vitrine                                                                                                                                                                                                                                                                                                                                                                                                    |
| Variantes utiles                 | page de vente ou site vitrine ; landing page ou site web ; site one-page ou landing page ; page dédiée pour une campagne ; landing page dans un site ; faut-il un site pour Google Ads                                                                                                                                                                                                                                          |
| Moment du parcours               | Décider quoi créer ou améliorer avant de demander un devis, de lancer une campagne ou d'engager une production de contenus                                                                                                                                                                                                                                                                                                      |
| Lecteur précis                   | Dirigeant de PME, commerçant, artisan, profession libérale ou indépendant qui doit présenter une activité, lancer une offre ou envoyer des visiteurs vers une prochaine action                                                                                                                                                                                                                                                  |
| Situation déclenchante           | Le lecteur envisage une campagne, lance son entreprise ou refond sa présence en ligne et ne sait pas si une seule page suffira, si les prospects auront besoin d'explorer un site ou si les deux objets doivent fonctionner ensemble                                                                                                                                                                                            |
| Phrase qu'il dirait au téléphone | « Je veux présenter mon offre et obtenir des demandes. Est-ce qu'une seule page suffit, est-ce qu'il me faut un vrai site vitrine, ou est-ce que je vais payer deux fois pour la même chose ? »                                                                                                                                                                                                                                 |
| Décision principale              | Choisir d'abord entre conserver ou améliorer une page existante, créer une page dédiée, ou développer ou réorganiser un site avec plusieurs pages ; préciser ensuite séparément sa durée et son emplacement ; n'envisager un mini-site qu'en présence d'une contrainte de séparation ou d'une identité et d'un public tous deux propres ; attendre tant que l'offre, les droits ou le traitement des demandes ne sont pas prêts |
| Niveau de connaissance initial   | Le lecteur comprend qu'une landing page cherche souvent une action précise et qu'un site présente l'entreprise, mais il peut confondre rôle de la page, nombre de pages, nom de domaine, technologie, référencement et durée de vie                                                                                                                                                                                             |
| Action utile sans contact        | Remplir une fiche de choix qui relie visiteurs, source d'arrivée, promesse, preuves, autres questions, pages nécessaires, action, mesure, responsable et durée de vie                                                                                                                                                                                                                                                           |
| CTA possible                     | « Faire relire mon choix de pages » vers `/demarrer-un-projet`, après la décision autonome                                                                                                                                                                                                                                                                                                                                      |
| Bon fit Hagnéré Code             | Entreprise avec une offre identifiable, des visiteurs visés, des preuves disponibles ou à rassembler, une action à traiter et un besoin de site ou de page professionnelle                                                                                                                                                                                                                                                      |
| Mauvais fit                      | Offre encore indéfinie, simple besoin de profil sur une plateforme, absence de personne pour répondre aux demandes, attente d'un taux de conversion ou d'une position Google garantis, boutique ou application métier à cadrer                                                                                                                                                                                                  |
| Hors périmètre                   | Choix détaillé d'un CMS ou d'un framework, devis et fourchettes de prix, structure one-page/multipage approfondie, optimisation complète d'une page Google Ads, rédaction de tous les contenus, conseil juridique personnalisé, promesse SEO ou commerciale                                                                                                                                                                     |
| Date et mode de recherche        | 22 juillet 2026 ; SERP francophone qualitative, pages concurrentes et sources officielles Google, France Num, ministère de l'Économie et CNIL ; aucun volume Keyword Planner ou Search Console disponible                                                                                                                                                                                                                       |
| Responsable de la synthèse       | Agent P1, sous propriété éditoriale de l'agent racine                                                                                                                                                                                                                                                                                                                                                                           |

### Réponse éditoriale en une phrase

**Si vos visiteurs arrivent pour une seule offre clairement définie, une page
dédiée peut suffire — souvent à l'intérieur de votre site ; s'ils doivent
comparer plusieurs services, vérifier votre entreprise ou vous retrouver par
différents chemins, développez ou réorganisez un site vitrine avec plusieurs
pages dédiées, et attendez si l'offre ou la personne qui traitera les demandes
n'est pas prête.**

### Questions indispensables

1. D'où viennent les visiteurs et que savent-ils déjà au moment d'arriver ?
2. Viennent-ils pour une seule offre et une seule action, ou doivent-ils
   comprendre plusieurs services et choisir leur chemin ?
3. Quelles preuves doivent-ils consulter avant de téléphoner, demander un devis
   ou prendre rendez-vous ?
4. Chercheront-ils ensuite le nom de l'entreprise, son équipe, ses réalisations,
   sa zone d'intervention ou d'autres services ?
5. Une page de service existante répond-elle déjà correctement à la promesse ?
6. La page doit-elle vivre le temps d'une opération ou rester utile pendant
   plusieurs années ?
7. Qui mettra les informations à jour, recevra les demandes et vérifiera ce qui
   se passe après le clic ?
8. Quels liens pratiques, légaux ou relatifs aux données doivent rester
   accessibles, même si le parcours commercial est court ?
9. Dans quel cas un mini-site séparé aurait-il un public, une identité, un
   responsable et une fin réellement distincts ?
10. Quelles inconnues doivent conduire à attendre plutôt qu'à produire une page
    vide de preuve ou sans suivi ?

### Objections ou craintes du lecteur

- « Une landing page sans menu convertira forcément mieux. »
- « Une seule page ne peut pas apparaître dans Google. »
- « Un site complet va détourner les visiteurs de l'action principale. »
- « Pour lancer Google Ads, il faut obligatoirement une landing page séparée. »
- « Je pourrai toujours transformer la page en site plus tard sans rien
  prévoir aujourd'hui. »
- « Plus il y a de pages, meilleur sera le référencement. »
- « Si le design est beau, l'offre et le traitement des demandes peuvent être
  réglés ensuite. »

### Priorité éditoriale interne

Le sujet porte la note interne **86/100** dans le lot du 22 juillet 2026. Cette
note sert uniquement à ordonner la production. Elle ne mesure ni le volume de
recherche, ni la difficulté SEO, ni une probabilité de conversion.

## 1 bis. Contrat de langage humain

### Termes à distinguer sans construire un lexique de masse

| Terme           | Définition de travail pour le lecteur                                                                                                                                             | Ce qu'il ne faut pas lui faire croire                                                                                |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| Landing page    | La page sur laquelle une personne arrive après avoir cliqué ou suivi un lien ; dans ce guide, la « page dédiée » organise surtout une offre, une promesse et une prochaine action | Ce n'est pas forcément un site séparé, une technologie particulière ou une page obligatoirement privée de navigation |
| Page de service | Une page du site consacrée à une offre précise                                                                                                                                    | Elle peut aussi servir de page d'arrivée pour une campagne si son message correspond aux visiteurs                   |
| Site vitrine    | La présence durable qui permet de comprendre l'entreprise, ses offres, ses preuves, ses informations pratiques et les chemins de contact                                          | Il n'est pas automatiquement multipage, bien référencé ou plus convaincant                                           |
| Site one-page   | Un site dont les contenus principaux sont organisés sur une longue page                                                                                                           | « One-page » décrit une structure ; « landing page » décrit d'abord le rôle d'une page dans un parcours              |
| Mini-site       | Un petit ensemble de pages séparé du site principal pour un projet réellement distinct                                                                                            | Ce n'est pas une solution par défaut pour chaque campagne                                                            |
| Conversion      | L'action que l'entreprise a décidé d'observer : appel, formulaire reçu, rendez-vous, inscription ou vente, selon le cas                                                           | Ce n'est pas automatiquement un client ni une preuve de rentabilité                                                  |

**Mots ordinaires à privilégier :** visiteurs, origine, offre, promesse,
questions, preuves, réalisations, équipe, téléphone, formulaire, rendez-vous,
page existante, durée de vie, mise à jour, personne responsable, demande reçue.

**Mots d'agence ou de consultant à éviter dans l'ouverture :** funnel, tunnel,
lead magnet, CRO, hero, above the fold, intent mapping, conversion-first,
authority, content silo, landing experience, nurturing, scalable, MVP de page.

### Projet des 150 premiers mots

> Vous lancez une offre, une campagne ou votre activité et vous hésitez : faut-il
> créer une seule page qui conduit vers un formulaire, ou un site vitrine qui
> présente toute l'entreprise ? Si les visiteurs arrivent d'une source précise
> pour une offre claire, une page dédiée peut suffire — et elle peut parfaitement
> faire partie de votre site. Si vos prospects doivent comparer plusieurs
> services, vérifier qui vous êtes ou consulter des réalisations, un site vitrine
> avec des pages dédiées sera généralement plus utile. Vous pouvez aussi garder
> et améliorer une page de service déjà publiée. Si l'offre, les preuves ou la
> personne chargée des demandes ne sont pas prêtes, mieux vaut attendre que
> financer une page qui n'aura pas de suite. Ce guide vous aide à choisir selon
> vos visiteurs, leurs questions,
> l'action attendue et la durée de vie du projet.

**Ce que le lecteur saura décider après cette ouverture :** il comprend que la
page dédiée peut vivre dans le site, que le choix dépend du parcours réel et
qu'une page existante ou un report sont des options légitimes.

### Test de l'ouverture à imposer en P2

- [x] la situation vécue apparaît avant la méthode de l'agence ;
- [x] la réponse et l'option hybride arrivent avant la première grille ;
- [x] aucun sigle technique n'est nécessaire ;
- [x] aucune promesse SEO ou de conversion n'apparaît ;
- [x] le lecteur n'est pas forcé de choisir entre deux produits fermés ;
- [x] l'option « attendre » est possible sans culpabilisation ;
- [x] l'ouverture annonce une décision concrète et non un cours de marketing.

### Test sujet, action, résultat préparé pour P4

| Formulation abstraite à bannir    | Qui agit ?                             | Action concrète                                               | Résultat pour le lecteur                                      | Formulation humaine prévue                                                                        |
| --------------------------------- | -------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| Aligner l'actif sur l'acquisition | Le dirigeant                           | Note d'où vient le visiteur et ce qu'il a vu avant le clic    | Il choisit une page qui poursuit la même conversation         | « Écrivez ce que le visiteur vient de lire avant d'arriver sur votre page. »                      |
| Optimiser le parcours             | Le lecteur                             | Liste les questions et les preuves nécessaires avant l'action | Il sait si une seule page suffit                              | « Notez ce que le prospect doit encore vérifier avant de vous appeler. »                          |
| Définir l'architecture            | Le décideur                            | Regroupe les questions qui méritent une réponse distincte     | Les pages découlent des besoins, pas d'un nombre arbitraire   | « Créez une page distincte seulement lorsqu'une question ou une offre mérite sa propre réponse. » |
| Prévoir la gouvernance            | L'entreprise                           | Nomme qui met à jour la page et traite les demandes           | Le dispositif reste utilisable après sa mise en ligne         | « Écrivez le nom de la personne qui répondra et de celle qui corrigera la page. »                 |
| Mesurer la performance            | Le responsable commercial ou marketing | Suit une action reçue jusqu'à son traitement                  | Il distingue un clic d'une demande réellement prise en charge | « Vérifiez qu'une demande test arrive au bon endroit et qu'une personne la traite. »              |

## 2. Frontières et anti-cannibalisation

| Page existante ou prévue              | Intention détenue par cette page                                                                                        | Frontière du présent guide                                                                                                                                              | Lien ou arbitrage nécessaire                                                                       |
| ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `landing-page-google-ads`             | Une fois Google Ads choisi, vérifier la cohérence entre recherche, annonce, page, formulaire et traitement des demandes | Choisir ici l'actif à créer ou à réutiliser avant l'audit détaillé d'une page Ads ; ne pas reprendre ses quatre décisions, son exemple ThermoBureau ni sa fiche d'audit | Renvoyer vers ce guide seulement lorsque la page doit accueillir une campagne Search               |
| `seo-ou-google-ads`                   | Choisir un canal d'acquisition et répartir l'investissement selon l'objectif                                            | Supposer ici que la ou les sources envisagées sont connues ; ne pas refaire le duel SEO/Ads                                                                             | Renvoyer si le lecteur ne sait pas encore d'où viendront les visiteurs                             |
| futur `site-one-page-ou-multipage`    | Choisir la structure et le nombre de pages d'un site durable                                                            | Décider ici s'il faut une page de campagne, une présence complète ou un hybride ; rappeler qu'un site one-page est une structure et non un synonyme de landing page     | Ne lier qu'après sa création, au moment de structurer le site retenu                               |
| `template-ou-site-sur-mesure`         | Choisir le niveau de personnalisation, la base de production et les écarts qui justifient du sur-mesure                 | Ne choisir aucune technologie, aucun CMS et aucun niveau de design dans le présent guide                                                                                | Renvoyer une fois l'actif et ses pages décidés                                                     |
| `prix-site-vitrine`                   | Comprendre les périmètres et le coût d'un site vitrine                                                                  | Ne publier ici ni tarif, ni fourchette, ni promesse de délai                                                                                                            | Renvoyer après la décision de développer ou réorganiser un site                                    |
| futur `prix-landing-page`             | Budgéter une page dédiée selon contenu, design, intégrations, mesure et maintenance                                     | Décider ici de l'utilité de la page, sans chiffrage                                                                                                                     | Ne lier qu'après implémentation de la route                                                        |
| `combien-de-temps-pour-creer-un-site` | Comprendre les dépendances qui font le calendrier d'un site                                                             | Ne donner aucun délai type ; nommer seulement les prérequis qui permettent de démarrer                                                                                  | Renvoyer lorsque le périmètre doit être planifié                                                   |
| `preparer-contenus-site-vitrine`      | Rassembler les messages, preuves, images et responsabilités pour rédiger un site                                        | Inventorier ici seulement les questions et preuves nécessaires pour choisir le format                                                                                   | Renvoyer dès que le site ou les pages dédiées sont retenus                                         |
| `pourquoi-mon-site-ne-convertit-pas`  | Diagnostiquer un site déjà en ligne qui reçoit des visites mais trop peu de résultats utiles                            | Choisir ici le format avant production ; ne pas reprendre son arbre mesure → trafic → page → confiance → suivi commercial → offre                                       | Renvoyer vers ce diagnostic lorsque le site existe déjà et que le problème porte sur ses résultats |
| `/services/sites-vitrines`            | Présenter l'accompagnement commercial Hagnéré Code                                                                      | Conserver un guide capable de recommander l'existant, une page dédiée, plusieurs pages ou l'attente                                                                     | CTA seulement après la fiche de choix autonome                                                     |

**Justification d'une URL distincte :** aucune page existante ne possède la
décision « quel actif web faut-il créer ou réutiliser selon le chemin réel des
visiteurs ? » tout en autorisant explicitement une page dédiée à l'intérieur du
site, une page existante ou un report.

**Règles anti-cannibalisation :**

- ne pas titrer les sections comme un audit Google Ads ;
- ne pas détailler mots-clés, annonces, Quality Score ou enchères ;
- ne pas recommencer un comparatif de technologies ou de prix ;
- ne pas transformer la question en choix one-page/multipage ;
- ne pas rédiger le workbook complet de collecte des contenus ;
- ne pas présenter la page de service comme une troisième technologie : c'est
  une page du site qui peut jouer le rôle de destination ;
- ne pas lier les routes futures tant qu'elles ne sont pas implémentées.

## 3. Demande et vocabulaire du lecteur

### Mode d'observation et limites

Recherches francophones observées le 22 juillet 2026 :

- `landing page ou site vitrine entreprise` ;
- `"landing page ou site vitrine" entreprise` ;
- `landing page site vitrine quelle différence choisir` ;
- `site vitrine vs one page vs landing page`.

Les résultats observés sont surtout des pages d'agences, de freelances, de
constructeurs de sites et quelques ressources institutionnelles. Ils confirment
les formulations et les confusions à traiter, mais **ne fournissent aucun
volume de recherche, CPC, niveau de difficulté, taux de conversion ou potentiel
commercial mesuré**. La P1 ne dispose ni de Keyword Planner, ni de Search
Console, ni d'un corpus de conversions Hagnéré Code attribuable à cette requête.

### Questions réellement visibles ou directement dérivées des résultats

- Quelle est la différence entre une landing page et un site vitrine ?
- Une landing page peut-elle faire partie d'un site internet ?
- Faut-il une landing page pour lancer une campagne Google Ads ?
- Une seule page peut-elle être référencée sur Google ?
- Site one-page et landing page, est-ce la même chose ?
- Vaut-il mieux une page sans menu ou un site dans lequel le visiteur peut
  naviguer ?
- Peut-on commencer par une page et construire le reste du site plus tard ?
- Quand faut-il créer un mini-site séparé ?
- Une page de service existante peut-elle servir pour une campagne ?
- Comment savoir si plusieurs offres méritent plusieurs pages ?

### Vocabulaire utile

Page d'arrivée, page dédiée, page de campagne, page de service, site vitrine,
site one-page, site multipage, mini-site, offre, public, source d'arrivée,
promesse, preuve, avis, réalisation, équipe, zone d'intervention, action
principale, formulaire, appel, rendez-vous, navigation, recherche de marque,
référencement naturel, lien interne, mesure, propriétaire, mise à jour, date de
fin, redirection.

### Formulations à ne pas transformer en faits

- « Une landing page convertit mieux » : affirmation incomplète sans définir la
  page comparée, les visiteurs, l'action et la méthode de mesure.
- « Un site vitrine est meilleur pour le SEO » : généralisation trop large ;
  des pages distinctes et utiles peuvent répondre à des besoins distincts, sans
  garantie de classement.
- « Une landing page est temporaire » : fréquent dans certains usages, mais
  pas une définition.
- « Un site vitrine contient au moins cinq pages » : aucun nombre universel.
- « Une landing page n'a pas de menu » : choix de conception, pas définition ni
  règle Google.

## 4. Carte concurrentielle

| Page consultée                                                                                                                                                   | Réponse et angle                                                                                                      | Preuves ou artefacts                          | Bon point                                     | Manque décisionnel                                                                                                             | Conflit d'intérêt éventuel                                           |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------- |
| [Agence Be Comm — « Site vitrine ou landing page ? »](https://agencebecomm.com/site-vitrine-ou-landing-page/)                                                    | L'objectif guide le choix ; landing pour une campagne, site pour une présence durable ; les deux peuvent se compléter | Tableau et cas par secteur                    | Reconnaît l'hybride et part de l'objectif     | Ne sépare pas nettement page de service intégrée et site isolé ; pas de fiche visiteurs, preuves, propriétaire et durée de vie | Agence vendant des prestations web                                   |
| [Easyweb — « Landing page vs site vitrine »](https://www.easyweb-agency.fr/blog/landing-page-vs-site-vitrine-quelles-sont-les-differences)                       | Oppose exploration du site et action de la page, puis évoque leur complémentarité                                     | Définitions et comparaison                    | Lecture simple pour un non-spécialiste        | Généralise la temporalité et le SEO ; pas de décision sur réemploi d'une page, maintenance ou mesure                           | Agence web                                                           |
| [Wizz You — « Landing page ou site vitrine »](https://wizz-you.com/blog/landing-page-ou-site-vitrine-clients)                                                    | Compare usages, provenance du trafic et option hybride                                                                | Tableau, scénarios et chiffres commerciaux    | Angle de la source d'arrivée utile            | Taux, budgets, durées et multiplicateurs non suffisamment démontrés ; « sans menu » trop absolu                                | Agence web ; chiffres favorables à des prestations                   |
| [Traqpad — « Site vitrine, one page ou landing page »](https://traqpad.fr/site-vitrine-one-page-landing-page-quel-type-choisir/)                                 | Ajoute le site one-page et part du modèle d'activité                                                                  | Comparatif de trois formats                   | Montre que la décision dépasse le simple duel | Risque de mélanger rôle de la page et structure du site ; peu de preuve et aucun artefact copiable                             | Prestataire web                                                      |
| [Shopify France — définition et exemples de site vitrine](https://www.shopify.com/fr/blog/site-vitrine-definition-exemples)                                      | Présente le site vitrine comme une présence de marque et la landing comme une page atteinte depuis un lien            | Exemples et définitions accessibles           | Rend la différence générale compréhensible    | Discours commercial, pas de décision hybride détaillée ni de vérification du besoin                                            | Éditeur de plateforme de commerce en ligne                           |
| [France Num — créer un site internet](https://www.francenum.gouv.fr/guides-et-conseils/developpement-commercial/site-web/creer-un-site-internet-pour-developper) | Invite à partir des objectifs, publics, besoins, budget et temps de mise à jour                                       | Questions de préparation et familles de sites | Source institutionnelle utile pour le cadrage | Certaines statistiques et formulations commerciales ne sont pas assez fraîches ou primaires pour être reprises                 | Plateforme publique hébergeant aussi des contributions d'Activateurs |

**Angle mort commun :** les résultats opposent souvent une page isolée,
supposée sans navigation et immédiatement performante, à un site complet,
supposé durable et favorable au SEO. Ils expliquent moins bien le cas le plus
utile à de nombreuses entreprises : **un site vitrine qui porte des pages de
service ou de campagne dédiées**, chacune reliée à un public et une promesse.

**Valeur originale du guide :** suivre le trajet du visiteur avant de nommer le
format, séparer le rôle d'une landing page de la structure d'un site, ordonner
trois décisions de base puis deux choix indépendants — durée et emplacement —, conserver l'option « attendre »
et livrer une fiche de choix copiable avec propriétaire et date de fin.

## 5. Fiche de preuves

| Affirmation utilisable                                                                                                                                   | Source primaire, URL et passage utile                                                                                                                                                                                                                       | Nature                                                           | Périmètre et limite                                                                                               | Consultation | Confiance                      | Emplacement du lien visible                                       | Conséquence lecteur                                                                                          | Fraîcheur        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ------------ | ------------------------------ | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | ---------------- |
| Dans Google Ads, la page de destination est la page vers laquelle l'annonce envoie l'utilisateur ; elle correspond généralement à l'URL finale           | [Aide Google Ads — Page de destination](https://support.google.com/google-ads/answer/14086?hl=fr)                                                                                                                                                           | Documentation officielle du produit                              | Définit le rôle de destination dans Ads ; ne dit pas qu'elle doit être séparée du site                            | 2026-07-22   | Haute                          | Définition initiale, près de « une page peut appartenir au site » | Refuser le faux choix technologique                                                                          | Page vivante     |
| Google recommande que la page corresponde précisément à l'annonce et aux mots-clés, et que l'action promise soit facile à trouver                        | [Aide Google Ads — Optimiser les annonces et pages de destination](https://support.google.com/google-ads/answer/6238826?hl=fr)                                                                                                                              | Documentation officielle Google Ads                              | Conseils pour des campagnes Ads ; aucune garantie de conversion ni obligation d'une nouvelle page                 | 2026-07-22   | Haute                          | Section consacrée aux visiteurs venant d'une annonce              | Réutiliser une page existante si elle poursuit vraiment le message ; sinon corriger ou créer une page dédiée | Page vivante     |
| Une destination publicitaire doit être fonctionnelle, utile et navigable                                                                                 | [Règles Google Ads — Exigences concernant la destination](https://support.google.com/adspolicy/answer/16427615?hl=fr)                                                                                                                                       | Règle officielle de diffusion publicitaire                       | S'applique aux destinations Ads ; ne tranche pas site versus page dédiée                                          | 2026-07-22   | Haute                          | Encadré avant les contrôles pratiques Ads                         | Tester la page et ses fonctions avant de financer le trafic                                                  | Page vivante     |
| Google Search recommande un contenu conçu d'abord pour des personnes, avec un public visé et un objectif principal clairs                                | [Google Search Central — Créer du contenu utile, fiable et axé sur les utilisateurs](https://developers.google.com/search/docs/fundamentals/creating-helpful-content?hl=fr)                                                                                 | Documentation officielle Search                                  | Conseils d'évaluation du contenu ; pas une formule de classement et aucun nombre de pages imposé                  | 2026-07-22   | Haute                          | Section SEO honnête, au niveau de l'affirmation                   | Une page ou un site doit d'abord résoudre les questions de son public                                        | Page vivante     |
| Le format d'une page unique ne l'exclut pas de Google si Googlebot peut y accéder, si la page répond correctement et si son contenu est indexable        | [Google Search Central — Exigences techniques](https://developers.google.com/search/docs/essentials/technical?hl=fr)                                                                                                                                        | Documentation officielle Search                                  | Conditions minimales d'éligibilité ; elles ne garantissent ni indexation ni classement                            | 2026-07-22   | Haute                          | FAQ sur la page unique                                            | Répondre sans prétendre qu'un format garantit ou interdit la visibilité                                      | Page vivante     |
| Une organisation logique du site peut aider les personnes et les moteurs à comprendre les relations entre les pages                                      | [Google Search Central — Guide de démarrage SEO](https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=fr)                                                                                                                            | Documentation officielle Search                                  | Ne signifie pas qu'un site multipage gagne automatiquement ; les pages doivent avoir une utilité distincte        | 2026-07-22   | Haute                          | Section sur plusieurs offres et questions                         | Créer des pages distinctes lorsque les sujets méritent réellement des réponses distinctes                    | Page vivante     |
| Des liens internes descriptifs et contextualisés aident les visiteurs et Google à comprendre le site et à trouver d'autres pages                         | [Google Search Central — Bonnes pratiques relatives aux liens](https://developers.google.com/search/docs/crawling-indexing/links-crawlable?hl=fr)                                                                                                           | Documentation officielle Search                                  | Ne fixe pas un nombre idéal de liens et ne garantit aucune position                                               | 2026-07-22   | Haute                          | Partie sur page intégrée au site et navigation                    | Relier une page dédiée aux pages utiles plutôt que l'isoler par principe                                     | Page vivante     |
| La préparation d'un site commence notamment par ses objectifs, ses cibles, ses besoins, ses canaux, son budget et le temps consacré aux mises à jour     | [France Num — Créer un site internet pour développer son entreprise](https://www.francenum.gouv.fr/guides-et-conseils/developpement-commercial/site-web/creer-un-site-internet-pour-developper)                                                             | Guide institutionnel                                             | Conseils généraux ; ne reprendre ni anciennes statistiques, ni affirmation absolue de performance                 | 2026-07-22   | Moyenne à haute                | Introduction de la fiche de choix                                 | Nommer public, objectif et responsable avant de choisir le format                                            | Page vivante     |
| Les pages importantes d'un site doivent aider le visiteur à agir et peuvent être améliorées progressivement sans reconstruire tout le site               | [France Num — Faire de son site vitrine un site web performant](https://www.francenum.gouv.fr/guides-et-conseils/developpement-commercial/site-web/comment-faire-de-son-site-vitrine-un-site-web)                                                           | Contribution d'une Activateur France Num hébergée par France Num | Recommandation pratique, pas règle Google ni étude causale ; page mise à jour en 2026                             | 2026-07-22   | Moyenne                        | Option « améliorer une page existante »                           | Ne pas vendre une refonte si une page utile peut être corrigée                                               | Mise à jour 2026 |
| L'exploitant d'un site professionnel doit rendre accessibles des mentions d'identification et d'hébergement selon sa situation                           | [Ministère de l'Économie — Mentions obligatoires sur un site internet](https://www.economie.gouv.fr/entreprises/developper-son-entreprise/innover-et-numeriser-son-entreprise/mentions-sur-votre-site-internet-les-obligations-respecter)                   | Information administrative française                             | Présentation générale, pas conseil juridique individualisé ; obligations exactes selon acteur et fonction du site | 2026-07-22   | Haute pour le principe général | Encadré « une page courte n'efface pas les obligations »          | Prévoir l'accès aux informations nécessaires même sur une page temporaire                                    | Mise à jour 2025 |
| Un formulaire doit limiter les données demandées à ce qui est nécessaire au but annoncé                                                                  | [CNIL — Minimiser les données collectées](https://www.cnil.fr/fr/minimiser-les-donnees-collectees)                                                                                                                                                          | Autorité française de protection des données                     | Principe de minimisation ; ne valide pas le formulaire du lecteur                                                 | 2026-07-22   | Haute                          | Contrôle du formulaire dans la fiche                              | Ne pas demander plus d'informations sous prétexte qu'une landing page doit qualifier le visiteur             | Page vivante     |
| L'information sur les données peut être organisée en plusieurs niveaux, avec l'essentiel au point de collecte et des détails accessibles ailleurs        | [CNIL — Information des personnes et transparence](https://www.cnil.fr/fr/conformite-rgpd-information-des-personnes-et-transparence) et [exemples de formulaires](https://www.cnil.fr/fr/exemples-de-formulaire-de-collecte-de-donnees-caractere-personnel) | Autorité française de protection des données                     | Exemples généraux à adapter ; pas audit de conformité ni rédaction juridique                                      | 2026-07-22   | Haute                          | Partie liens de soutien et formulaire                             | Une page commerciale peut renvoyer vers une information détaillée sans prétendre vivre seule                 | Pages vivantes   |
| Pour juger l'efficacité d'un site, il est utile de distinguer les sources de trafic et de suivre les actions correspondant aux objectifs de l'entreprise | [France Num — Comment augmenter l'efficacité de son site ?](https://www.francenum.gouv.fr/guides-et-conseils/developpement-commercial/site-web/comment-augmenter-lefficacite-de-son-site)                                                                   | Guide institutionnel ou contribution hébergée                    | Orientation générale ; ne fournit aucun benchmark applicable à tous                                               | 2026-07-22   | Moyenne                        | Fiche de choix, champs source et mesure                           | Nommer ce qui sera observé avant de choisir ou de comparer les pages                                         | Page vivante     |

### Séparation entre sources et recommandations Hagnéré Code

Les sources Google permettent de dire que la destination Ads doit correspondre
au message, fonctionner et rester utile, que le contenu Search doit être conçu
pour un public et que des liens internes compréhensibles aident à découvrir les
pages. Elles **ne permettent pas** d'affirmer que :

- Google exige une landing page séparée pour chaque campagne ;
- une page sans menu convertit mieux ;
- un site multipage se classe mieux qu'une page unique ;
- une page dédiée dans un site reçoit un avantage de classement ;
- un nombre déterminé de pages, de mots ou de liens assure une position ;
- le SEO ou Google Ads impose à lui seul le format du site.

Le choix proposé par Hagnéré Code — partir de la source, des questions, des
preuves, du propriétaire et de la durée de vie — est une **méthode éditoriale
de cadrage**, pas une règle attribuable à Google.

### Contradictions et données à ne pas publier

- aucun taux de conversion moyen pour landing page ou site vitrine ;
- aucun budget, délai ou nombre de pages « type » dans ce guide ;
- aucun classement « landing page = court terme, site = long terme » sans
  examiner le projet réel ;
- aucune phrase absolue « une page ne se référence pas » ;
- aucune promesse qu'un site vitrine crée de la confiance ou des demandes par
  sa seule existence ;
- aucune obligation de supprimer menu, pied de page, page équipe ou liens de
  preuve ;
- aucune confusion entre clic, formulaire envoyé, demande reçue et client ;
- aucune statistique ancienne de France Num ou chiffre commercial d'agence ;
- aucun cas client inventé ni résultat attribué à Hagnéré Code ;
- aucune interprétation juridique personnalisée des mentions, formulaires,
  traceurs ou politiques de confidentialité ;
- aucune recommandation de mini-site sauf si une contrainte impose la
  séparation, ou si le projet possède à la fois sa propre identité et son
  propre public ; dans les deux cas, un responsable et une durée de vie sont
  nommés ;
- aucune création de pages uniquement pour « faire du SEO » sans question
  utile et contenu propre.

### Calculs reproductibles

Aucun calcul de prix, de retour sur investissement ou de taux de conversion
n'est nécessaire pour répondre à la décision. Les trois situations du guide
seront **fictives et explicitement étiquetées comme telles**. Elles ne
contiendront ni résultat commercial, ni moyenne de marché, ni benchmark de
durée.

Si une mesure apparaît, elle sera décrite comme un événement observable : appel
test reçu, formulaire reçu, rendez-vous confirmé ou vente rapprochée. Elle ne
sera jamais présentée comme un seuil universel permettant de choisir le format.

## 6. Empreinte éditoriale à ne pas reproduire

| Guide voisin                          | Type d'ouverture                                                    | Progression dominante                              | Dispositif récurrent                                    | Exemple                    | Place du CTA                | Risque de répétition                                              |
| ------------------------------------- | ------------------------------------------------------------------- | -------------------------------------------------- | ------------------------------------------------------- | -------------------------- | --------------------------- | ----------------------------------------------------------------- |
| `landing-page-google-ads`             | Une campagne envoie des clics, mais la page peut rompre la promesse | Requête → annonce → page → formulaire → traitement | Audit et quatre verdicts garder/corriger/créer/reporter | Fil rouge ThermoBureau     | Après la fiche d'audit      | Ne pas refaire l'audit Ads, son fil rouge ni ses quatre décisions |
| `seo-ou-google-ads`                   | Le dirigeant hésite entre deux investissements d'acquisition        | Contraintes, objectifs, temporalité, combinaison   | Comparatif canal et arbitrage                           | Scénarios d'acquisition    | Après le choix autonome     | Ne pas réexpliquer tout le choix SEO/Ads                          |
| `template-ou-site-sur-mesure`         | Le faux duel entre standard et unique est démonté                   | Couches du site, écarts, devis, recette            | Registre des écarts irréductibles                       | Cas de personnalisation    | Après le registre           | Ne pas créer un nouveau continuum technique                       |
| `preparer-contenus-site-vitrine`      | L'entreprise doit réunir les éléments avant production              | Offre, publics, preuves, images, responsabilités   | Workbook de collecte                                    | Exemple rempli de contenus | Après l'inventaire          | Ne pas livrer un second workbook de rédaction                     |
| `prix-site-vitrine`                   | La question du budget révèle des périmètres différents              | Périmètre, intervenants, coûts et comparaison      | Tableaux de prix et TCO                                 | Projets budgétés           | Après le cadrage            | Aucun prix ni devis fictif ici                                    |
| `combien-de-temps-pour-creer-un-site` | Une date souhaitée rencontre les dépendances du projet              | Calendrier par décisions et validations            | Planning et responsabilités                             | Scénarios de délai         | Après l'estimation autonome | Aucun délai magique ni calendrier complet                         |

Choix propre au nouveau guide :

```text
Question motrice : Que doit pouvoir faire et vérifier ce visiteur avant d'agir ?
Type d'ouverture : une hésitation réelle, suivie immédiatement d'une réponse hybride
Progression : deux parcours visiteurs opposés → définitions → arbre de décision → durée et emplacement → fiche de choix → trois situations → verdict
Artefact signature : fiche de choix copiable centrée sur la source, les questions, le propriétaire et la durée de vie
Rythme et voix : conseiller pragmatique parlant au dirigeant, phrases courtes, aucune mise en scène d'agence
Place naturelle du CTA : après que le lecteur a rempli la fiche et peut conclure seul
Forme de conclusion : autoriser explicitement page intégrée, site + pages dédiées, besoin temporaire, réemploi ou attente
```

Différences obligatoires avec les guides voisins :

1. deux parcours visiteurs concrets avant toute matrice ;
2. distinction visible entre le **rôle** d'une landing page et la **structure**
   one-page ou multipage d'un site ;
3. page de service intégrée traitée comme une solution centrale, pas comme un
   compromis honteux ;
4. trois situations brèves plutôt qu'un long fil rouge ;
5. aucun prix, délai, taux ou technologie ;
6. propriétaire, durée de vie, date de fin et redirection intégrés à la
   décision ;
7. conclusion pouvant recommander de réutiliser l'existant ou d'attendre.

## 7. Plan annoté

| Section provisoire                            | Question résolue                                                | Preuve ou exemple                                                                                                                                     | Conséquence ou décision                                                                 | Format choisi                                |
| --------------------------------------------- | --------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | -------------------------------------------- |
| Ouverture : « une page ou tout un site ? »    | Quelle réponse simple faut-il retenir ?                         | Deux phrases de verdict et option hybride                                                                                                             | Le lecteur cesse d'opposer deux technologies                                            | Prose courte, moins de 150 mots              |
| Deux visiteurs ne cherchent pas la même chose | Que sait le visiteur avant d'arriver ?                          | Parcours A : clic sur une offre précise ; parcours B : recherche de l'entreprise et comparaison                                                       | Une page peut suffire au premier, le second a besoin de chemins et de preuves           | Deux cartes narratives, pas un tableau large |
| Une landing page peut vivre dans un site      | Que signifient les mots ?                                       | Définitions Google Ads et distinction rôle/structure                                                                                                  | Page dédiée, page de service et site ne sont plus confondus                             | Définitions intégrées au récit               |
| Commencez par la source et la promesse        | La page poursuit-elle la conversation commencée avant le clic ? | Source Ads, e-mail, QR, partenaire, recherche de marque, recherche organique ou accès direct                                                          | Réutiliser si la page existante correspond ; corriger ou créer sinon                    | Liste guidée avec exemple de phrase          |
| Comptez les questions, pas les pages          | Le prospect a-t-il besoin d'explorer ?                          | Questions sur offre, autres services, réalisations, équipe, zone, méthode, informations pratiques                                                     | Une question distincte et durable peut justifier une page ; aucune page SEO automatique | Regroupement de questions                    |
| Suivez l'arbre avant de qualifier le projet   | Que peut-on effectivement choisir ?                             | Conserver ou corriger l'existant, créer une page dédiée ou structurer plusieurs pages ; puis préciser séparément durée, emplacement et éventuel arrêt | Ne pas présenter ces choix comme des produits concurrents                               | Arbre court puis cartes mobiles              |
| Ce que le SEO change — et ne change pas       | Une page peut-elle apparaître dans Google ?                     | Documentation people-first, organisation et liens internes                                                                                            | Aucune garantie ; plusieurs intentions utiles peuvent appeler plusieurs pages           | Encadré sourcé sans promesse                 |
| Ce que la confiance change                    | Quelles vérifications précèdent le contact ?                    | Preuves, équipe, réalisations, informations pratiques, mentions et confidentialité selon le cas                                                       | Garder accessibles les liens utiles ; ne pas supprimer la navigation par dogme          | Checklist courte                             |
| Remplissez la fiche de choix                  | Comment prendre la décision sans agence ?                       | Artefact copiable complet                                                                                                                             | Le lecteur obtient un verdict argumenté et une date de revue                            | Bloc texte copiable + explications           |
| Trois situations fictives                     | Comment le raisonnement s'applique-t-il ?                       | Page existante à améliorer, nouvelle page dédiée, cabinet avec plusieurs offres                                                                       | Démontrer séparément les trois décisions de base, sans benchmark                        | Trois cartes étiquetées « exemple fictif »   |
| Avant de publier, nommez la suite             | Qui répond, qui maintient et que devient la page ?              | Demande test, propriétaire, date de fin, redirection                                                                                                  | Reporter si le dispositif n'a pas de responsable                                        | Liste de contrôles                           |
| Verdict final                                 | Que faut-il choisir aujourd'hui ?                               | Décision de base, durée, emplacement et éventuelle condition d'arrêt                                                                                  | Décision explicite en quelques lignes                                                   | Conclusion courte + CTA conditionnel         |

### Trois décisions de base, deux choix complémentaires et une condition d'attente

Les trois décisions de base définissent ce qu'il faut produire ou conserver.
La durée et l'emplacement répondent ensuite à deux questions différentes et
peuvent donc se combiner. L'attente reste une condition d'arrêt honnête avant
toute production.

#### Décision de base — choisissez une seule case

1. **Conserver ou améliorer une page existante** lorsque sa promesse et son
   action correspondent déjà au visiteur : ne changez rien sans motif ;
   corrigez seulement les réponses, preuves ou fonctions manquantes.
2. **Créer une page dédiée** lorsqu'une offre ou une campagne mérite une
   réponse précisément destinée à ce visiteur. Elle vit normalement dans le
   site principal ; son emplacement est décidé séparément.
3. **Développer ou réorganiser un site vitrine, nouveau ou existant, avec
   plusieurs pages dédiées** lorsque plusieurs publics, offres ou questions
   durables demandent des réponses distinctes.

#### Durée — choisissez une ligne

- **Durable** lorsque la page ou le site doit rester utile sans date de fin
  connue et possède un responsable de mise à jour.
- **Temporaire** lorsque le besoin et sa source sont clairement bornés, avec un
  responsable, une date de fin et une destination future de l'URL.

#### Emplacement — choisissez une ligne

- **Site principal** par défaut, afin de réutiliser son identité, ses preuves,
  ses informations et sa maintenance.
- **Mini-site réellement séparé**, exceptionnellement, si une contrainte
  impose la séparation, ou si le projet possède à la fois sa propre identité
  et son propre public. Dans les deux cas, nommer un responsable et une durée
  de vie. Ce choix ajoute au minimum des comptes, des mises à jour et une
  éventuelle fermeture à gérer ; selon le projet, des données ou des contenus
  peuvent aussi devoir être séparés.

#### Condition d'arrêt — ne produisez rien tant qu'elle s'applique

- **Attendre avant de produire** lorsque l'offre, les preuves, la prochaine
  action, la personne
  qui répond ou le droit d'utiliser les contenus ne sont pas prêts.

### Fiche de choix copiable — artefact signature

Le bloc doit être réellement copiable dans une note ou un document, sans outil
à créer ni donnée envoyée au site :

```text
OFFRE OU SITUATION :
VISITEURS VISÉS :
SOURCE(S) D'ARRIVÉE :
CE QU'ILS ONT VU OU COMPRIS AVANT D'ARRIVER :
PROMESSE À POURSUIVRE SUR LA PAGE :
PREUVES NÉCESSAIRES AVANT D'AGIR :
ACTION PRINCIPALE ATTENDUE :
AUTRES QUESTIONS AVANT CETTE ACTION :
PAGES OU INFORMATIONS À CONSULTER :
MESURE UTILE (demande reçue, appel, rendez-vous, vente...) :
PERSONNE QUI TRAITE CETTE ACTION :
PROPRIÉTAIRE DES MISES À JOUR :
DROITS D'UTILISATION DES TEXTES, PHOTOS ET PREUVES : acquis / à obtenir / inconnu
DURÉE DE VIE OU DATE DE FIN :
DESTINATION DE L'URL À LA FIN — SI PAGE TEMPORAIRE :
PAGE, PROFIL OU OUTIL EXISTANT À RÉUTILISER :

DÉCISION DE BASE — UNE SEULE CASE :
[ ] conserver ou améliorer une page existante
[ ] créer une page dédiée
[ ] développer ou réorganiser un site vitrine avec plusieurs pages dédiées

DURÉE — UNE SEULE CASE :
[ ] durable, sans date de fin connue et avec un responsable de mise à jour
[ ] temporaire, avec date de fin et destination future de l'URL

EMPLACEMENT — UNE SEULE CASE :
[ ] site principal ou site existant
[ ] mini-site seulement si une contrainte impose la séparation OU si identité et public sont tous deux propres au projet ; responsable et durée de vie nommés dans les deux cas

CONDITION D'ARRÊT :
[ ] attendre : une information, une preuve, un droit ou une personne responsable manque encore

RAISON PRINCIPALE :
INCONNUES À LEVER :
DATE DE REVUE :
```

### Exemple rempli : trois situations fictives, aucun benchmark

> Ces exemples sont inventés pour expliquer la méthode. Ils ne décrivent aucun
> client Hagnéré Code et n'annoncent aucun résultat de conversion ou de
> référencement.

| Situation fictive                                                                                              | Visiteur et source                                                                                                     | Ce qu'il doit encore vérifier                                                                      | Décision de base illustrée                                                                                 | Pourquoi                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| Une entreprise de chauffage possède déjà une page consacrée à son contrat d'entretien, mais ses preuves datent | Un responsable de locaux arrive depuis une recherche ou une annonce consacrée à ce contrat                             | Zone couverte, contenu à jour, preuves d'intervention, contact et informations sur l'entreprise    | **Conserver l'URL et améliorer seulement la page existante**                                               | L'URL et la promesse sont déjà les bonnes ; le manque porte sur les réponses et les preuves, pas sur un nouvel actif                    |
| Un organisme de formation lance une session destinée aux responsables d'équipe depuis son site actuel          | Les visiteurs arrivent depuis un e-mail et des publications qui présentent cette session précise                       | Programme, public, dates, intervenant, conditions et inscription                                   | **Créer une page dédiée dans le site existant**                                                            | Cette session mérite une réponse précise, tandis que le site apporte l'identité, les autres formations et les informations de confiance |
| Un cabinet de conseil ouvre avec trois offres destinées à des décideurs différents                             | Les visiteurs arrivent par recommandation, recherche du nom, liens partenaires et recherches sur les problèmes traités | Qui intervient, pour quel problème, avec quelle méthode, quelles preuves et quelle prochaine étape | **Développer ou réorganiser un site vitrine avec plusieurs pages dédiées** lorsque les questions diffèrent | Une seule page obligerait des publics différents à trier un discours trop large                                                         |

La durée et l'emplacement viennent seulement après cette décision de base. Une
page dédiée à une opération ponctuelle peut être **temporaire** et rester sur le
**site principal**. Un mini-site n'est retenu que si une contrainte impose la
séparation, ou si l'identité et le public du projet sont tous deux propres. Dans
les deux cas, un responsable et une durée de vie sont nommés. L'absence de
droits sur les contenus ou de personne pour traiter les demandes déclenche la
condition **attendre**, au lieu d'inventer un produit supplémentaire.

### Questions à traiter dans la FAQ

1. **La même page peut-elle servir à Google Ads et au référencement naturel ?**
   Oui si le public, l'offre et les réponses attendues restent les mêmes ; les
   origines des visites et demandes sont toutefois suivies séparément.
2. **Une fiche Google Business Profile ou une plateforme peut-elle suffire ?**
   Parfois, lorsque le besoin se limite aux informations qu'elle fournit et que
   l'entreprise accepte ce qu'elle ne contrôle pas.
3. **Qui doit posséder le nom de domaine et les accès ?** L'entreprise doit
   connaître les comptes utilisés et faire écrire au devis ce qui sera créé, au
   nom de qui et avec quels accès remis.
4. **Plusieurs campagnes peuvent-elles envoyer vers la même page ?** Oui si
   elles visent le même public, la même offre et la même action ; sinon la page
   risque de devenir vague.
5. **Peut-on commencer par une page puis agrandir le site ?** Oui si l'adresse,
   le responsable des contenus et la future place dans la navigation sont
   prévus ; ce n'est pas automatiquement moins coûteux.

La FAQ doit répondre dans sa première phrase. Elle ne doit pas répéter de longs
passages déjà visibles dans les sections principales.

### Maillage interne prévu

| Destination                                   | Moment naturel                                             | Ancre indicative                               | Statut de la route                |
| --------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------- | --------------------------------- |
| `/guides/landing-page-google-ads`             | Après avoir retenu une page pour une campagne Search       | vérifier la page de destination de Google Ads  | existante                         |
| `/guides/seo-ou-google-ads`                   | Lorsque l'origine des visiteurs reste indécise             | choisir entre SEO et Google Ads                | existante                         |
| `/guides/preparer-contenus-site-vitrine`      | Après avoir choisi les pages à produire                    | préparer les contenus et les preuves du site   | existante                         |
| `/guides/template-ou-site-sur-mesure`         | Après le choix de l'actif                                  | choisir le niveau de personnalisation utile    | existante                         |
| `/guides/prix-site-vitrine`                   | Lorsque le lecteur doit construire un budget comparable    | comprendre le prix d'un site vitrine           | existante                         |
| `/guides/combien-de-temps-pour-creer-un-site` | Lorsque le périmètre doit devenir un calendrier            | estimer le temps nécessaire pour créer le site | existante                         |
| `/services/sites-vitrines`                    | Après l'action autonome, pour un projet adapté             | découvrir l'accompagnement site vitrine        | existante                         |
| `/demarrer-un-projet`                         | CTA final seulement si le lecteur veut cadrer le périmètre | choisir les pages réellement nécessaires       | existante                         |
| futur `/guides/site-one-page-ou-multipage`    | Après sa publication, pour structurer un site retenu       | choisir entre site one-page et multipage       | ne pas lier en P2 tant qu'absente |
| futur `/guides/prix-landing-page`             | Après sa publication, pour budgéter une page retenue       | comprendre le prix d'une landing page          | ne pas lier en P2 tant qu'absente |

Maillage entrant à examiner en P2 ou P4, sans modifier d'autre page pendant
cette P1 :

- `landing-page-google-ads`, au moment où une page existante peut suffire ;
- `template-ou-site-sur-mesure`, avant de choisir la production ;
- `preparer-contenus-site-vitrine`, en amont de la collecte complète ;
- `prix-site-vitrine`, pour rappeler que le nombre de pages découle du besoin ;
- la page service sites vitrines, depuis une question fréquente pertinente.

### Métadonnées provisoires

```text
Titre SEO : Landing page ou site vitrine : que choisir ?
Titre de carte : Landing page ou site vitrine : quel format choisir ?
H1 : Landing page ou site vitrine : que faut-il créer pour votre entreprise ?
Description : Page dédiée, site vitrine ou les deux ? Choisissez selon vos visiteurs, vos offres, les preuves attendues, le SEO et la durée du projet.
Section du registre : Comparatifs & choix
Slug : landing-page-ou-site-vitrine
Date affichée : à réconcilier avec la date réelle de publication
Temps de lecture : à calculer sur le texte final, jamais anticipé en P1
Alt social : Une page dédiée reliée à un site vitrine, avec plusieurs parcours visiteurs
Canonical : https://hagnere-code.ai/guides/landing-page-ou-site-vitrine
Robots : décision P4 uniquement après contrôle de qualité ; aucune indexation déclarée en P1
```

Le titre répond à la formulation principale sans promettre « le meilleur
format ». La description annonce la décision et l'option hybride. Le H1 parle
du besoin de l'entreprise plutôt que d'un duel d'outils.

## 8. Ressource et conversion

```text
Une ressource téléchargeable est-elle naturellement nécessaire ? non
Pourquoi : la fiche courte doit pouvoir être copiée immédiatement ; un PDF ou un formulaire ajouterait du poids sans améliorer la décision
Problème résolu après lecture : relier l'objet à créer au parcours des visiteurs plutôt qu'à une préférence de prestataire
Résultat autonome produit : une décision de base argumentée, une durée, un emplacement, la possibilité d'attendre et une liste d'inconnues à lever
Format éditable : bloc texte copiable dans une note, un document ou un brief
Format de consultation : cartes mobiles et champs lisibles dans la page
Rubriques réellement livrées : visiteurs, source, promesse, preuves, action, questions, pages, mesure, responsable, propriétaire, durée, fin, existant, décision
Exemple rempli : trois situations fictives, sans taux ni résultat commercial
Conclusion « ne pas investir » possible : oui, réutiliser une page ou attendre
Sources et limites visibles : oui, au niveau des affirmations SEO, Ads, données et obligations générales
Données saisies et destination : aucune donnée saisie ni envoyée ; le lecteur copie le bloc localement
Processus de génération : aucun fichier ou outil à générer
Journal de QA : la lisibilité mobile du bloc et des cartes sera contrôlée en P4
Limites et revue humaine : la fiche prépare une décision ; elle ne remplace pas un cadrage complet, un audit juridique ou un devis
Mode de maintenance : mettre à jour les sources et les routes internes lors des revues éditoriales
Test du fichier ou outil : non applicable ; tester le copier-coller du bloc dans le navigateur
Bon fit Hagnéré Code : offre et visiteurs identifiés, besoin de site ou page professionnelle, interlocuteur capable de fournir les preuves et traiter les demandes
Mauvais fit : offre non définie, personne pour répondre absente, simple profil de plateforme suffisant, besoin principal de boutique ou d'application, garantie de SEO ou de conversion attendue
Action non commerciale : remplir la fiche, tester une demande et nommer la personne responsable
CTA principal : « Faire relire mon choix de pages »
Destination : /demarrer-un-projet
Résultat honnête après clic : décrire le besoin pour obtenir une première orientation sur le périmètre ; aucun délai, devis ou résultat n'est garanti par le bouton
```

### Conditions du CTA

Le CTA n'apparaît qu'après la fiche et les options de report. Il ne doit pas
dire « obtenir plus de clients », « maximiser mes conversions » ou « dominer
Google ». Sa promesse reste le résultat réellement maîtrisable : **clarifier
les pages et responsabilités nécessaires avant la conception**.

Le mauvais fit doit rester visible près de la conversion. Si le problème porte
sur une campagne déjà active, une application, une boutique complexe, un
litige, une conformité individualisée ou une offre encore floue, le lecteur
doit être orienté vers le guide ou le spécialiste pertinent plutôt que forcé
vers un devis de site vitrine.

## 9. Rapports de sortie des quatre passes

### Rapport P1 — Recherche

```text
PASSE 1 TERMINÉE
Slug : landing-page-ou-site-vitrine
Lecteur et phrase réelle : dirigeant, commerçant ou indépendant qui veut présenter une offre et obtenir des demandes sans savoir si une page suffit ou si un site complet est nécessaire
Décision de base : conserver ou améliorer une page existante, créer une page dédiée, ou développer ou réorganiser un site nouveau ou existant avec plusieurs pages dédiées
Choix suivants : choisir séparément durable ou temporaire, puis site principal ou mini-site réellement séparé ; attendre si une condition indispensable manque
Angle et forme dominante : deux parcours visiteurs opposés, puis une réponse hybride ; fiche de choix copiable et trois situations fictives
Pages proches et différence : landing-page-google-ads optimise une destination Ads déjà choisie ; site-one-page-ou-multipage structurera un site durable ; les guides template, prix, délai et contenus possèdent leurs décisions respectives
Sources décisives : Google Ads sur définition, cohérence et destination ; Google Search Central sur people-first, organisation et liens ; France Num sur objectifs et maintenance ; ministère de l'Économie et CNIL pour les limites générales
Incertitudes exclues : volumes, positions, taux de conversion, prix, délais, nombre idéal de pages, effet SEO garanti, règle universelle de navigation
Action autonome et CTA possible : fiche de choix copiable ; CTA conditionnel « Faire relire mon choix de pages » vers /demarrer-un-projet
Plan : ouverture humaine → deux visiteurs → définitions → source et questions → arbre de décision → durée et emplacement → SEO et confiance → fiche → trois cas fictifs → responsabilités → verdict
Snapshot : docs/research/manifests/landing-page-ou-site-vitrine-p1.sha256
```

#### Revalidation contradictoire de P1 — 22 juillet 2026

Un second agent, distinct de la recherche initiale et resté en lecture seule,
a vérifié le corpus de sources externes, les exemples fictifs, la frontière avec
les guides voisins et la décision proposée au dirigeant. Le décompte d'URL
n'est pas utilisé comme preuve de complétude : certaines lignes regroupent
plusieurs sources et la canonical du futur guide n'est pas une source externe.

- aucun P0 ;
- le choix inclut désormais le développement ou la réorganisation d'un site
  existant, sans imposer une reconstruction ;
- la frontière avec `pourquoi-mon-site-ne-convertit-pas` est explicite ;
- la réponse sur une page unique reprend les exigences techniques minimales de
  Google et conserve l'absence de garantie d'indexation ou de classement ;
- les liens internes, le mini-site et le cas multipublic sont formulés sans
  causalité ni obligation absolue ;
- le CTA promet seulement une relecture du choix de pages ;
- aucun taux de conversion, prix, délai ou résultat SEO n'est inventé.

Le prévol P2 a ensuite corrigé une ambiguïté de décision : les sorties ne sont
pas des produits équivalents. Le lecteur choisit d'abord de conserver ou
améliorer une page existante, de créer une page dédiée ou de structurer
plusieurs pages ; il choisit ensuite séparément la temporalité et l'implantation,
et peut encore attendre. Les
formulations commerciales de la page service, dont un nombre de sections, un
« A/B ready » ou un audit gratuit, ne constituent aucune preuve générale et ne
doivent pas être reprises dans le guide.

Cette revalidation rouvre la porte P1 après correction et régénération du
manifeste. Elle ne remplace pas le futur contre-audit P3 de la page publique.

#### Correctif après le second audit P1 — 22 juillet 2026

Le second audit en lecture seule a trouvé trois P1 documentaires, corrigés
avant toute écriture de la page publique :

- la fiche sépare maintenant une décision de base, la temporalité,
  l'implantation et la condition d'arrêt, au lieu de présenter plusieurs
  produits équivalents ;
- les trois cas fictifs démontrent séparément conserver ou améliorer
  l'existant, créer une page et structurer plusieurs pages ; durée,
  implantation et attente sont expliquées ensuite ;
- le décompte inexpliqué de sources a été retiré au profit d'un périmètre de
  contrôle explicite.

Deux précisions opératoires ont aussi été ajoutées à la fiche : les droits
d'utilisation des textes, photos et preuves, puis la destination de l'URL
réservée au cas d'une page temporaire. Le manifeste P1 est régénéré sur ce
nouvel état avant la reprise de P2.

La première revalidation de ce correctif a encore refusé la porte avec trois
P1 résiduels. Les résumés du dossier présentaient toujours les sorties à plat ;
« temporaire » et « mini-site » étaient rendus artificiellement exclusifs alors
qu'ils décrivent deux dimensions différentes ; « améliorer » oubliait enfin le
cas honnête où une page peut être conservée sans modification. Le présent état
ferme ces trois points partout : décision de base, temporalité, implantation et
condition d'arrêt sont propagées dans la fiche, le plan, le rapport P1 et la
scorecard ; conserver sans modifier est une issue explicite. Un nouveau
manifeste P1 doit être vérifié avant la reprise définitive de P2.

### Rapport P2 — Rédaction et intégration

```text
PASSE 2 TERMINÉE
État : TERMINÉE — PORTE VALIDÉE, P3 indépendante requise
Fichiers créés ou modifiés : page, image sociale, registre, icône du hub, garde-fou de langage humain, lien entrant depuis template-ou-site-sur-mesure et présent dossier
Ouverture et réponse : 126 mots ; l'hésitation réelle, la page intégrée au site, plusieurs pages, la conservation de l'existant et l'attente apparaissent avant toute méthode
Forme propre au sujet : deux parcours visiteurs, distinction rôle/structure, trois décisions de base, durée et emplacement séparés, puis fiche copiable
Décisions : conserver ou améliorer sans changement automatique ; créer une page dédiée sans présumer son emplacement ; développer ou réorganiser plusieurs pages ; attendre reste une condition d'arrêt
Exemples : trois situations entièrement fictives couvrent séparément les trois décisions de base ; aucun client, taux, prix, délai ou résultat SEO n'est inventé
Sources visibles : Google Ads adjacent à la définition et à la continuité annonce-page ; Google Search adjacent aux conditions minimales, au contenu utile, à l'organisation et aux liens ; ministère et CNIL limités aux principes généraux
Action autonome, bon fit et mauvais fit : fiche locale sans compte, saisie ni e-mail ; droits d'utilisation, responsable, mesure, durée, emplacement et inconnues sont explicités ; conserver et attendre restent possibles
CTA et destination : un seul GuideInlineCTA tardif « Faire relire mon choix de pages » vers /demarrer-un-projet ; sidebar commerciale et promotion du livre blanc désactivées ; intérêt commercial déclaré
Métadonnées et produit : titre 44 caractères ; description 140 caractères ; canonical exacte ; entrée ready-for-human-review ; temps de lecture recalculé à 19 minutes sur 3 788 mots rendus après corrections P3
Contrôles rapides : dernier manifeste P1 exact avant P2 ; Prettier vert ; ESLint ciblé vert ; TypeScript vert ; 22/22 tests de langage humain verts ; route et OG locales en 200 ; OG 1 200 × 630 inspectée ; 38 destinations internes uniques rendues en 200 ; canonical exacte ; noindex,nofollow ; Article + BreadcrumbList uniquement ; un lien entrant contextuel
Snapshot : docs/research/manifests/landing-page-ou-site-vitrine-p2.sha256
```

### Rapport P3 — Contre-audit indépendant

```text
PASSE 3 TERMINÉE — PORTE VALIDÉE
Relecteurs : deux agents distincts de l'auteur P2, tous deux restés en lecture seule ; un contrôle de sources séparé a aussi été effectué.
Snapshot contrôlé : manifeste P2 vérifié 7/7 avant et après chaque lecture.
Premier verdict : 0 P0 et 8 P1 uniques ; aucune porte P3 ouverte sur cet état.
P1 trouvés : temps de lecture et nombre de mots faux ; OG favorisant « Créer une page » ; règle du mini-site différente selon les passages ; affirmation non démontrable sur l'absence de double paiement ; 39 liens annoncés contre 38 ; case « page temporaire » incompatible avec un site ; verdict répété trois fois avant le premier chapitre ; FAQ répétant presque entièrement le corps.
Suggestions acceptées : H2 moins mécaniques ; durée et emplacement à la place de temporalité et implantation dans la page publique ; intérêt commercial raccourci ; alt sociale neutre.
Corrections appliquées : 19 minutes et 3 788 mots ; 38 liens ; trois cartes OG égales ; règle mini-site unique et restrictive ; devis séparant réemploi et travail nouveau ; durée applicable à une page ou un site ; encadré d'ouverture redondant supprimé ; cinq FAQ apportant de nouvelles objections ; titres variés et vocabulaire ordinaire.
Garde-fous ajoutés : temps de lecture fixé à 19 ; absence de mise en avant conditionnelle dans l'OG ; règle du mini-site ; libellés DURÉE et EMPLACEMENT ; promesse économique retirée.
Second refus : 0 P0 et 2 P1, tous deux limités au dossier interne ; l'ancienne règle mini-site oubliait la séparation imposée et une phrase affirmait trop absolument la duplication de données et de contenus.
Dernières corrections : règle « contrainte de séparation OU identité ET public propres » ; responsable et durée de vie dans les deux cas ; comptes, mises à jour et fermeture à gérer, données ou contenus seulement selon le projet.
Verdict final indépendant : 0 P0 / 0 P1 ; page publique, sources, dossier et manifeste cohérents.
Snapshot : docs/research/manifests/landing-page-ou-site-vitrine-p3.sha256
```

### Rapport P4 — Plume humaine et contrôle final

```text
PASSE 4 TERMINÉE — PORTE VALIDÉE
Passages humanisés : ouverture centrée sur l'hésitation du dirigeant ; trois décisions formulées en actions ordinaires ; « durée » et « emplacement » remplacent les abstractions ; les dix chapitres suivent les questions réelles du visiteur.
Coupe ou resserrement : verdict redondant retiré de l'ouverture ; FAQ ramenée à cinq objections complémentaires ; transparence commerciale raccourcie ; aucun nouvel argument ajouté après P3.
Retour P3 effectué : les huit P1 publics du premier audit et les deux P1 documentaires du second refus sont corrigés ; deux relecteurs distincts confirment finalement 0 P0 / 0 P1.
Diff sémantique après la plume : aucune promesse de classement, de conversion ou d'économie ajoutée ; conserver l'existant, utiliser une plateforme ou attendre restent des décisions possibles.
Scorecard justifiée : 19/20 ; le point manquant correspond uniquement à l'absence de test conduit avec un dirigeant réel.
Test réalisé par une personne réelle : non.
Commandes et résultats : manifeste P2 7/7 ; Prettier ; 22/22 tests ciblés racine et 36/36 contrôles indépendants ; ESLint ciblé ; TypeScript ; git diff --check.
Largeurs et états contrôlés : 320, 390, 640, 768, 1 024 et 1 440 px sans débordement ; thème sombre sur mobile et clair sur bureau inspectés ; fiche copiable lisible à 390 px ; trois tableaux présents sans largeur excédentaire.
Interactions : bouton d'ouverture activé par clic réel avec arrivée sur #deux-visiteurs ; deuxième FAQ ouverte par clic réel et réponse visible.
Structure : un H1, douze H2 d'article et douze cibles du sommaire valides ; cinq FAQ ; un CTA propre au guide, placé après 90 % de l'article ; aucun CTA latéral.
Route, image sociale et console : route et OG en 200 ; PNG 1 200 × 630 inspecté ; canonical exacte ; robots noindex,nofollow attendu avant le gel ; Article + BreadcrumbList uniquement ; aucune erreur console.
Liens : 38 destinations internes DOM uniques répondent en 200.
React : composant serveur, données statiques hors rendu, aucune cascade de requêtes, dépendance client ou clé instable ; checklist React/Next sans écart matériel.
Snapshot final : docs/research/manifests/landing-page-ou-site-vitrine-p4.sha256
Statut maximal : P4 validée à 19/20, prête pour le gel commun ; ni déploiement ni indexation Google ne sont encore revendiqués.
```

## 10. Revue finale des quatre passes

### Scorecard finale

La note reste volontairement limitée à **19/20** : tous les contrôles
éditoriaux, factuels et techniques prévus sont réalisés, mais aucun dirigeant
réel extérieur à la production n'a testé la page.

| Axe         |  Note 0-2 | Preuve finale                                                                                    |
| ----------- | --------: | ------------------------------------------------------------------------------------------------ |
| Intention   |         2 | L'hésitation d'un dirigeant qui prépare une offre ou une campagne ouvre le guide                 |
| Décision    |         2 | Conserver, créer une page, structurer plusieurs pages ou attendre restent des issues distinctes  |
| Pédagogie   |         2 | Rôle d'une landing page, forme du site, durée et emplacement ne sont pas confondus               |
| Profondeur  |         2 | Source d'arrivée, questions, preuves, mesure, responsable, droits et fin de vie sont reliés      |
| Preuve      |         2 | Onze sources officielles sont placées près des affirmations et leurs limites restent visibles    |
| Comparaison |         2 | Les trois décisions utilisent les mêmes questions et trois exemples explicitement fictifs        |
| Originalité |         2 | Deux parcours visiteurs et une fiche copiable donnent une forme propre au sujet                  |
| Style       |         1 | Plume relue et vocabulaire ordinaire, mais aucun test par un dirigeant réel                      |
| Conversion  |         2 | Le lecteur peut conclure seul avant un CTA unique, tardif, conditionnel et sans promesse         |
| SEO/produit |         2 | Métadonnées, maillage, image, interactions, données structurées et six largeurs sont contrôlés   |
| **Total**   | **19/20** | Guide prêt pour le gel commun, encore volontairement hors index avant la décision de publication |

### Test lecteur non technique

```text
Test réalisé par une personne réelle : non.
Profil visé : dirigeant, commerçant ou indépendant non spécialiste du web.
Ce que les contrôles de compréhension confirment : une landing page peut vivre dans un site ; le choix part de ce que le visiteur sait déjà et de ce qu'il doit encore vérifier.
Décision rendue possible : conserver ou améliorer une page existante, créer une page dédiée ou structurer plusieurs pages ; choisir ensuite durée et emplacement ; attendre si un indispensable manque.
Limite maintenue : la relecture indépendante et l'inspection navigateur ne remplacent pas un test avec une personne de la cible.
Corrections appliquées : ouverture directe, distinction rôle/structure, décisions hiérarchisées, vocabulaire simple, fiche copiable, exemples fictifs et FAQ complémentaire.
```

### Contre-audit indépendant

```text
Auteur du contre-audit : deux agents distincts de l'auteur P2, dont une vérification séparée des sources
Indépendant de la rédaction : oui ; lecture seule lors de chaque verdict
Réserves initiales : huit P1 publics, puis deux P1 documentaires après correction
Réserves finales sur les sources et la décision : aucune P0, aucune P1
Réserves sur la conversion : aucune ; conserver, utiliser une plateforme ou attendre restent possibles avant le CTA
Corrections : temps de lecture, OG, règle mini-site, promesse économique, décompte des liens, durée, ouverture, FAQ, vocabulaire et dossier harmonisés
Statut maximal réellement atteint : P4 terminée — porte validée à 19/20, publication encore non revendiquée avant le gel commun
```

### Vérifications P1

- [x] documents de gouvernance, modèle, roadmap et lot éditorial lus ;
- [x] pages et dossiers de recherche voisins inspectés ;
- [x] recherche Web francophone datée et limites de la SERP explicitées ;
- [x] sources primaires ou officielles privilégiées pour les faits actuels ;
- [x] recommandations Hagnéré Code séparées des règles Google ;
- [x] aucun taux de conversion, budget, délai ou volume inventé ;
- [x] aucune promesse SEO et aucune phrase « une page ne se référence pas » ;
- [x] landing page décrite comme un rôle pouvant exister dans le site ;
- [x] page de service, page temporaire, mini-site et report distingués ;
- [x] frontières établies avec les guides Ads, structure, template, prix, délai,
      contenus et acquisition ;
- [x] ouverture humaine proposée sous 150 mots ;
- [x] artefact signature copiable et trois exemples fictifs préparés ;
- [x] bon fit, mauvais fit, action autonome, CTA et résultat après clic définis ;
- [x] plan, FAQ, maillage et métadonnées provisoires préparés ;
- [x] aucune route, registre public, donnée structurée ou image sociale modifiés ;
- [x] rédaction P2 terminée ;
- [x] contre-audit indépendant P3 terminé à 0 P0 / 0 P1 ;
- [x] contrôle navigateur et passe de plume P4 terminés ;
- [x] absence de test par une personne réelle explicitement consignée ;
- [ ] publication, déploiement et indexation vérifiés.

### Vérifications P2

- [x] dernier manifeste P1 vérifié avant rédaction ;
- [x] page complète, image Open Graph dédiée, registre, hub, test et lien entrant
      intégrés ;
- [x] ouverture de 126 mots adressée au dirigeant, sans jargon de consultant ;
- [x] conserver ou améliorer, créer une page et structurer plusieurs pages
      restent trois décisions de base distinctes ;
- [x] durable ou temporaire et site principal ou mini-site restent deux choix
      indépendants et combinables ;
- [x] l'attente reste une condition d'arrêt, jamais un produit supplémentaire ;
- [x] fiche copiable, droits d'utilisation et destination réservée aux pages
      temporaires présents ;
- [x] trois situations fictives annoncées avant leurs détails, sans résultat
      commercial ni SEO ;
- [x] un CTA tardif, bon fit, mauvais fit et intérêt commercial visibles ;
- [x] Prettier, ESLint ciblé, TypeScript et 22 tests de langage humain verts ;
- [x] route et OG locales en 200, OG 1 200 × 630 inspectée, liens internes en
      200 ;
- [x] canonical exacte, noindex,nofollow et deux scripts JSON-LD publics
      Article + BreadcrumbList ;
- [x] aucun commit, push, déploiement ou indexation effectué en P2.

**Verdict des portes : P1, P2, P3 et P4 valides.** Le guide peut rejoindre le
gel commun du lot. Toute modification matérielle ultérieure impose une nouvelle
génération du manifeste P4 et une nouvelle revue du diff. Ce verdict ne prouve
ni un déploiement ni une indexation réelle dans Google.

## Décision de gel commun — 22 juillet 2026

Les mentions précédentes de publication différée décrivent l’état de contrôle
avant le gel atomique des dix guides.

Statut éditorial final : **publiable — validation éditoriale déléguée**.

Décision de publication : autorisée explicitement par le commanditaire.

Test réalisé par une personne réelle : non.

Le retrait du statut d’attente ouvre la route à `index, follow` dans un build de
production. Il ne prouve ni le déploiement final ni l’indexation effective par
Google, qui doivent être vérifiés séparément.
