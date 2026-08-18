# Dossier de recherche — Préparer les contenus d’un site vitrine

> Journal éditorial du guide `preparer-contenus-site-vitrine`. La page publique
> ne peut être rédigée qu’après validation de la porte P1 décrite dans
> [`docs/workflow-maitre-guides-4-passes.md`](../workflow-maitre-guides-4-passes.md).

## Journal des quatre passes

Propriétaire éditorial unique : Codex, agent racine du lot du 21 juillet 2026.

| Passe                        | État                     | Date       | Responsable              | Snapshot                                   | Blocages |
| ---------------------------- | ------------------------ | ---------- | ------------------------ | ------------------------------------------ | -------- |
| 1. Recherche                 | Terminée — porte validée | 2026-07-21 | Codex                    | `preparer-contenus-site-vitrine-p1.sha256` | Aucun    |
| 2. Rédaction et intégration  | Terminée — porte validée | 2026-07-21 | Codex                    | `preparer-contenus-site-vitrine-p2.sha256` | Aucun    |
| 3. Contre-audit indépendant  | Terminée — porte validée | 2026-07-21 | Agent `p3_contenus_site` | `preparer-contenus-site-vitrine-p3.sha256` | Aucun    |
| 4. Plume humaine et contrôle | Terminée — porte validée | 2026-07-21 | Codex                    | `preparer-contenus-site-vitrine-p4.sha256` | Aucun    |

Une modification du corpus P1 après la création de son manifeste impose de
rejouer cette porte. Les manifestes d’une passe validée ne sont jamais écrasés.

### Manifeste du snapshot

| Fichier contrôlé                                                    | SHA-256                                                            | Passe | Remarque                                           |
| ------------------------------------------------------------------- | ------------------------------------------------------------------ | ----- | -------------------------------------------------- |
| Corpus P1 consigné dans le présent dossier                          | Voir le manifeste P1 frère                                         | P1    | Aucun fichier public ne doit exister à cette passe |
| `src/app/guides/preparer-contenus-site-vitrine/page.tsx`            | `35705dfb6ac18b7c1099cdc383a75b24d32bea449247444d34194f75a93b31bd` | P2    | Page avec porte éditoriale fermée                  |
| `src/app/guides/preparer-contenus-site-vitrine/opengraph-image.tsx` | `0526964bd89b4f7790740091b858181471ffe8ad174f6745229b4a1d07dbe3ac` | P2    | Image dédiée 1200 × 630                            |
| `src/lib/guides.ts`                                                 | `2e47d22d28fa1623d676ad87d9ee6baa9e47c49f687de708e1898f5095a1b925` | P2    | Entrée `ready-for-human-review`                    |
| `src/app/guides/cahier-des-charges-site-internet/page.tsx`          | `be779caae5858804dadab3e275bbf824dcb69f6ed7cc7343ff7890da308cb7c9` | P2    | Lien entrant contextuel                            |
| `src/components/sites-vitrines/body.ts`                             | `bc18f4e1bdd52a9a8238be2290eeac584276e41979416e61c92800a999ab02eb` | P2    | Lien entrant depuis la FAQ service                 |
| `src/app/guides/preparer-contenus-site-vitrine/page.tsx`            | `39e90f70ac83c6578261fbb20fa128a7cdbb9033310c64ccd07989861902a734` | P3    | P0/P1 corrigés et retouches de plume revalidées    |
| `src/app/guides/preparer-contenus-site-vitrine/opengraph-image.tsx` | `0526964bd89b4f7790740091b858181471ffe8ad174f6745229b4a1d07dbe3ac` | P3    | Revalidée par le contre-auditeur                   |
| `src/lib/guides.ts`                                                 | `5c19f617bcf9dc161e2db4f831d2c92b04d569636fb20b8e52efa27e97330aa4` | P3    | Titre et temps de lecture revalidés                |
| `src/app/guides/cahier-des-charges-site-internet/page.tsx`          | `be779caae5858804dadab3e275bbf824dcb69f6ed7cc7343ff7890da308cb7c9` | P3    | Lien entrant revalidé                              |
| `src/components/sites-vitrines/body.ts`                             | `bc18f4e1bdd52a9a8238be2290eeac584276e41979416e61c92800a999ab02eb` | P3    | Lien entrant revalidé                              |
| `src/components/guides/GuidesHubPage.tsx`                           | `e5f4ca4dd687a1ddb3df29f7168b5cd6252a0cee985e779423839692b2f0eb3a` | P3    | Icône explicite du guide revalidée                 |
| `src/app/guides/preparer-contenus-site-vitrine/page.tsx`            | `39e90f70ac83c6578261fbb20fa128a7cdbb9033310c64ccd07989861902a734` | P4    | Snapshot éditorial et visuel final                 |
| `src/app/guides/preparer-contenus-site-vitrine/opengraph-image.tsx` | `0526964bd89b4f7790740091b858181471ffe8ad174f6745229b4a1d07dbe3ac` | P4    | Image 1200 × 630 observée                          |
| `src/lib/guides.ts`                                                 | `5c19f617bcf9dc161e2db4f831d2c92b04d569636fb20b8e52efa27e97330aa4` | P4    | Porte éditoriale conservée jusqu’au gel du lot     |
| `src/app/guides/cahier-des-charges-site-internet/page.tsx`          | `be779caae5858804dadab3e275bbf824dcb69f6ed7cc7343ff7890da308cb7c9` | P4    | Lien entrant final                                 |
| `src/components/sites-vitrines/body.ts`                             | `bc18f4e1bdd52a9a8238be2290eeac584276e41979416e61c92800a999ab02eb` | P4    | Lien entrant final                                 |
| `src/components/guides/GuidesHubPage.tsx`                           | `e5f4ca4dd687a1ddb3df29f7168b5cd6252a0cee985e779423839692b2f0eb3a` | P4    | Carte du hub prête                                 |

## 1. Fiche d’identité

```text
Slug : preparer-contenus-site-vitrine
Statut actuel : Faits vérifiés
Requête principale : préparer contenu site internet
Variantes utiles : contenu site vitrine, quels textes fournir pour un site,
photos pour site professionnel, que donner à une agence web
Moment du parcours : préparer / décider / accélérer la réalisation
Lecteur précis : dirigeant de TPE-PME, artisan, commerçant ou indépendant qui
va créer ou refaire un site vitrine et à qui un prestataire demande les contenus
Situation déclenchante : le devis est signé ou presque, mais le lecteur ne sait
pas quels textes, photos, preuves et informations remettre
Décision principale après lecture : constituer un dossier de matière première
suffisant, attribuer les responsabilités et savoir ce qui peut attendre
Niveau de connaissance au départ : connaît son métier, pas le vocabulaire éditorial
5 questions indispensables : que préparer ; faut-il écrire les textes soi-même ;
quelles photos choisir ; quelles preuves publier ; qui valide quoi
3 objections ou craintes : ne pas savoir écrire ; retarder le projet ; remettre
des éléments qui ne sont pas publiables ou qui donnent une image amateur
Action utile sans contact commercial : remplir une fiche d’une page par offre
et classer les éléments dans six dossiers nommés
CTA possible : faire transformer ces éléments en pages claires
Hors périmètre : choisir le prestataire, chiffrer le site, définir toute
l’arborescence, rédiger un cahier des charges technique ou promettre un classement
Date de la recherche : 2026-07-21
Responsable de la synthèse : Codex
```

### Score de lancement

| Critère                             |                    Note | Justification                                                              |
| ----------------------------------- | ----------------------: | -------------------------------------------------------------------------- |
| Proximité avec les services vendus  |                   20/20 | Entrée naturelle vers la création ou la refonte d’un site vitrine          |
| Problème commercial concret         |                   18/20 | Le manque de matière retarde le projet et produit des pages génériques     |
| Intention distincte                 |                   18/20 | Le guide répond à « que fournir », pas au prix ni au cahier des charges    |
| Potentiel de décision et conversion |                   18/20 | Le lecteur peut agir seul puis confier structure, rédaction et intégration |
| Profondeur défendable               |                   17/20 | Offre, preuves, droits, formulaires, SEO image et responsabilités          |
| Risque de cannibalisation           |                    7/10 | Chevauchement maîtrisé par un périmètre strict de collecte des contenus    |
| **Total**                           | **98/110, soit 89/100** | Seuil de 70 dépassé                                                        |

## 1 bis. Contrat de langage humain

- **Phrase exacte que le lecteur pourrait dire au téléphone :** « Vous me
  demandez les textes et les photos du site, mais je ne sais pas ce qu’il faut
  vous envoyer ni si c’est à moi de tout rédiger. »
- **Réponse attendue en une phrase :** rassemblez les faits que personne ne peut
  inventer à votre place — offres, limites, preuves, photos, informations
  pratiques et façon de vous contacter — puis convenez par écrit de la personne
  qui les transforme en pages et de celle qui les valide.
- **Terme central expliqué sans jargon :** le « contenu » n’est pas seulement le
  texte final ; ce sont les informations et fichiers qui permettent de
  comprendre l’offre, de lui faire confiance et d’agir.
- **Mots ordinaires du lecteur :** services, clients, réalisations, photos,
  horaires, zone d’intervention, devis, appel, rendez-vous, avis.
- **Mots d’agence à éviter ou traduire :** copywriting, assets, persona, tunnel,
  lead magnet, brand voice, conversion copy, pain points, contenu SEO.
- **Projet des 150 premiers mots :** reconnaître le dossier vide, déculpabiliser
  le lecteur qui n’est pas rédacteur, donner immédiatement les six familles
  d’éléments et répartir les responsabilités.
- **Décision après 150 mots :** commencer par les faits et les preuves, sans
  attendre de savoir écrire le texte final.
- **H2 relus isolément :** oui ; chacun annonce une action ou une décision.
- **Comparaison comprise à 390 px :** oui ; les tableaux deviennent des cartes
  complètes sans colonne cachée.
- **FAQ dont la première phrase répond :** oui pour les huit réponses.
- **CTA formulé comme résultat :** « M’aider à préparer les contenus ».

### Test de l’ouverture

- [x] la situation vécue est définie avant la méthode du prestataire ;
- [x] aucun sigle n’est nécessaire dans l’ouverture ;
- [x] aucun lexique ne retarde la réponse ;
- [x] aucune métaphore ne devient un système à apprendre ;
- [x] la réponse peut rester nuancée sans préambule défensif.

### Test sujet, action, résultat

| Phrase initiale                                                      | Qui agit ?                     | Action concrète                                     | Résultat pour le lecteur                                     | Phrase réécrite                                                                    |
| -------------------------------------------------------------------- | ------------------------------ | --------------------------------------------------- | ------------------------------------------------------------ | ---------------------------------------------------------------------------------- |
| « Ces incertitudes ne se corrigent pas avec une belle mise en page » | Le responsable du projet       | Attribue chaque inconnue à une personne et une date | Le lecteur sait ce qui bloque réellement                     | « Elles doivent être attribuées à une personne et à une date. »                    |
| « Une preuve sert à réduire une hésitation précise »                 | L’entreprise                   | Relie une preuve à une question du client           | Le lecteur évite le chiffre ou le logo décoratif             | Phrase conservée, puis illustrée par trois exemples concrets                       |
| « Cette transparence protège les deux parties »                      | L’entreprise et le prestataire | Écrivent les éléments inclus et les validations     | Chacun sait ce qu’il doit livrer                             | « Vous savez ce que vous recevrez et le prestataire sait ce qu’il doit produire. » |
| « Une première version peut parfois se passer de… »                  | L’équipe projet                | Diffère les pages secondaires                       | Le lancement conserve l’essentiel sans fausse urgence        | Phrase conservée avec la liste de ce qui ne doit pas manquer                       |
| « Un dossier devient utilisable lorsque… »                           | L’interlocuteur unique         | Range les originaux et centralise les décisions     | Le prestataire ne reconstitue pas le projet dans les e-mails | Phrase conservée puis suivie du tableau de remise                                  |

## 2. Cannibalisation

| Page existante                        | Intention de cette page                                                    | Différence du nouveau guide                                                 | Lien ou arbitrage nécessaire                                                       |
| ------------------------------------- | -------------------------------------------------------------------------- | --------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `cahier-des-charges-site-internet`    | Définir le périmètre, les responsabilités et les livrables d’un projet web | Le nouveau guide fabrique la matière éditoriale après ou pendant ce cadrage | Ajouter un lien entrant depuis la partie consacrée aux contenus                    |
| `combien-de-temps-pour-creer-un-site` | Comprendre le calendrier et les causes de retard                           | La préparation des contenus n’est ici qu’un facteur de délai                | Lier vers le calendrier pour la planification, sans reprendre ses durées           |
| `prix-site-vitrine`                   | Comprendre ce qui influence le devis et ce qui est inclus                  | Aucun tarif ni comparaison de prix dans le nouveau guide                    | Renvoyer au guide prix lorsque le lecteur veut savoir si la rédaction est comprise |
| `template-ou-site-sur-mesure`         | Choisir le niveau de conception                                            | Le nouveau guide ne choisit ni technologie ni niveau graphique              | Mentionner que les contenus restent nécessaires quel que soit le niveau choisi     |
| `services/sites-vitrines`             | Présenter l’accompagnement commercial                                      | Le guide enseigne une méthode utilisable sans acheter la prestation         | Lien commercial unique et contextuel après la démonstration                        |

**Justification d’une URL distincte :** aucune page actuelle ne dit précisément
quels faits, preuves, photos et informations un dirigeant doit rassembler, ni
comment partager le travail de rédaction et de validation avec son prestataire.

**Cohérence avec l’offre actuelle :** la page service précise que la rédaction
complète et le shooting ne font pas partie du forfait de base, puis que textes
et visuels peuvent être chiffrés selon leur volume, leurs droits et le niveau de
validation. Le guide doit donc dire une seule chose sans ambiguïté : l’entreprise
apporte la vérité métier ; la transformation en textes finaux et la production
des visuels ne sont dues que si le devis les prévoit explicitement.

## 3. Demande et vocabulaire du lecteur

### Questions observées dans les résultats actuels

- Que faut-il préparer avant la création d’un site internet ?
- Qui rédige les textes d’un site : le client ou l’agence ?
- Quelles pages et quelles informations sont indispensables ?
- Combien de photos faut-il fournir et peut-on utiliser des images trouvées en ligne ?
- Comment écrire une page service quand on n’est pas rédacteur ?
- Peut-on lancer le site si certains contenus ne sont pas prêts ?

### Observation et limites

Observation réalisée le 21 juillet 2026 à partir de résultats francophones et
de pages récentes. Ces formulations signalent une demande ; elles ne prouvent
ni un volume de recherche ni une difficulté de positionnement. Aucune donnée
issue d’un outil de mots-clés n’est présentée comme acquise.

## 4. Carte concurrentielle

| Page                                                                                                                          | Réponse et angle                                                  | Preuves ou artefacts                     | Bon point                             | Manque décisionnel                                                                                                         | Conflit d’intérêt éventuel                    |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- | ---------------------------------------- | ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| [Rankelier, préparer le contenu](https://rankelier.fr/comment-preparer-contenu-creation-site/)                                | Liste offres, photos, preuves, FAQ, zone et contact pour artisans | Checklist courte                         | Réponse immédiate, vocabulaire simple | Répartit peu les responsabilités et traite peu les droits, formulaires ou preuves publiables                               | Vend un pack de création de site              |
| [Conseil Web, rédiger le contenu d’un site vitrine](https://www.conseil-web.com/comment-rediger-le-contenu-dun-site-vitrine/) | Rédaction persuasive et optimisation des textes                   | Conseils par rubrique                    | Donne des pistes de structure         | Demande presque au lecteur de devenir rédacteur ; certaines preuves proposées doivent être vérifiées plutôt que fabriquées | Vend des services web                         |
| [Aurone, préparer ses contenus](https://www.aurone.com/blog/preparer-contenus-site-web/)                                      | Anticiper les contenus lors d’une création ou refonte             | Liste de médias et arguments             | Relie contenu et conception           | Angle davantage projet/design que décision du dirigeant ; peu d’arbitrage sur ce qui peut attendre                         | Agence web                                    |
| [Sublim, réaliser un site vitrine](https://www.sublim.design/blog/libre-expression-et-marketing/realiser-site-vitrine/)       | Rubriques et construction d’un site vitrine                       | Liste de pages                           | Vue générale accessible               | Mélange choix d’outil, pages et contenu ; ne produit pas un dossier à remettre                                             | Promeut son éditeur de site                   |
| [Web by Man, éléments à préparer](https://webbyman.fr/elements-a-preparer-site-vitrine/)                                      | Douze familles, des textes au domaine et au budget                | Checklist détaillée                      | Admet que tout ne doit pas être final | Mélange contenus, technologie, budget et stratégie ; la décision de responsabilité reste floue                             | Vend création, rédaction et identité visuelle |
| [Agence Anode, contenu d’un site vitrine](https://agence-anode.fr/blog/creation/contenu-site-vitrine/)                        | Parcours page par page                                            | Blocs suggérés pour les pages classiques | Aide à visualiser la future page      | Répond surtout « quelles pages » et peu « que fournir ou déléguer »                                                        | Vend la prestation décrite                    |

**Angle mort commun :** la plupart des pages dressent une liste de rubriques ou
enseignent la rédaction. Elles expliquent moins bien ce que le dirigeant doit
apporter parce que le prestataire ne peut pas l’inventer, ce que le prestataire
peut reformuler et ce qui exige une autorisation avant publication.

**Valeur originale :** une méthode de remise concrète : six dossiers, une fiche
par offre, un propriétaire et un validateur pour chaque élément, puis un seuil
de contenu suffisant pour lancer sans attendre une perfection imaginaire.

## 5. Fiche de preuves

| Affirmation utilisable                                                                                                                                                                  | Source primaire, URL et passage utile                                                                                                                                                                                                                                                                | Nature                                       | Périmètre                                                | Consultation | Confiance        | Emplacement visible                                                | Conséquence lecteur                                                                                     | Fraîcheur                        |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | -------------------------------------------------------- | ------------ | ---------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------- | -------------------------------- |
| Google recommande un contenu utile à un public existant, original et créé d’abord pour l’aider ; il ne fixe pas de nombre de mots préféré                                               | [Google Search Central, contenu utile](https://developers.google.com/search/docs/fundamentals/creating-helpful-content?hl=fr), questions d’auto-évaluation et section « se concentrer sur le contenu people-first »                                                                                  | Documentation officielle                     | Référencement Google, pas garantie de classement         | 2026-07-21   | Élevée           | Près du passage qui déconseille de remplir pour atteindre un quota | Faire répondre chaque page à une vraie question client                                                  | Actuelle à la consultation       |
| Une image utile doit être placée près du texte pertinent ; son nom et son texte alternatif doivent être descriptifs sans bourrage de mots-clés                                          | [Google Search Central, bonnes pratiques Google Images](https://developers.google.com/search/docs/appearance/google-images), sections placement, noms et texte alternatif                                                                                                                            | Documentation officielle                     | Compréhension et recherche d’images                      | 2026-07-21   | Élevée           | Section photos                                                     | Sélectionner une photo pour ce qu’elle prouve, pas pour décorer                                         | Actuelle à la consultation       |
| Le texte alternatif dépend de la fonction de l’image ; une image purement décorative doit avoir un `alt` vide                                                                           | [W3C WAI, images décoratives](https://www.w3.org/WAI/tutorials/images/decorative/) et [arbre de décision alt](https://www.w3.org/WAI/tutorials/images/decision-tree/)                                                                                                                                | Standard et tutoriel d’accessibilité         | Images HTML                                              | 2026-07-21   | Élevée           | Section photos, à côté de l’explication                            | Le dirigeant décrit ce que montre la photo ; l’intégrateur choisit l’alternative adaptée au contexte    | Référence stable                 |
| Une entreprise doit publier les informations d’identification et d’hébergement prévues pour son site ; elle doit aussi respecter les droits sur les textes et images non créés par elle | [Ministère de l’Économie, mentions obligatoires](https://www.economie.gouv.fr/entreprises/developper-son-entreprise/innover-et-numeriser-son-entreprise/mentions-sur-votre-site-internet-les-obligations-respecter), sections identification, hébergement et propriété intellectuelle                | Information administrative                   | Site professionnel français, contenu à adapter au statut | 2026-07-21   | Élevée           | Section informations légales et droits                             | Fournir les données exactes et l’origine des médias au prestataire                                      | Page mise à jour le 2025-12-11   |
| Lors d’une collecte, seules les données adéquates, pertinentes et nécessaires doivent être demandées                                                                                    | [CNIL, minimiser les données collectées](https://www.cnil.fr/fr/minimiser-les-donnees-collectees), principe de minimisation                                                                                                                                                                          | Autorité de contrôle                         | Formulaires et traitements de données personnelles       | 2026-07-21   | Élevée           | Section formulaire de contact                                      | Demander seulement ce qui est nécessaire pour répondre ou qualifier la demande                          | Actuelle à la consultation       |
| Le formulaire doit distinguer les champs obligatoires et facultatifs et informer la personne ; les exemples doivent être adaptés au traitement réel                                     | [CNIL, exemples de formulaire de collecte](https://www.cnil.fr/fr/exemples-de-formulaire-de-collecte-de-donnees-caractere-personnel), avertissement et mentions                                                                                                                                      | Autorité de contrôle                         | Formulaires en France, exemple non universel             | 2026-07-21   | Élevée           | Section formulaire                                                 | Définir le but de chaque champ avant l’intégration                                                      | Actuelle à la consultation       |
| Pour un site qui vise des clients, le contenu gagne à partir de leurs problèmes et des réponses apportées plutôt que de parler uniquement de l’entreprise                               | [France Num, faire de son site vitrine un outil marketing](https://www.francenum.gouv.fr/guides-et-conseils/developpement-commercial/site-web/comment-faire-de-son-site-vitrine-un-site-web)                                                                                                         | Guide public d’accompagnement                | TPE-PME, recommandation commerciale                      | 2026-07-21   | Moyenne à élevée | Près de la fiche par offre                                         | Décrire la situation client avant l’historique de l’entreprise                                          | Publié le 2026-06-30             |
| Une fiche Google doit représenter l’entreprise telle qu’elle existe et garder des informations exactes et cohérentes                                                                    | [Google Business Profile, consignes de représentation](https://support.google.com/business/answer/3038177?hl=fr)                                                                                                                                                                                     | Documentation officielle                     | Fiche d’établissement Google                             | 2026-07-21   | Élevée           | Section informations pratiques                                     | Réconcilier nom, adresse, zone, horaires et catégorie entre le site et la fiche                         | Actuelle à la consultation       |
| La publication de l’image reconnaissable d’une personne peut nécessiter son accord dans un contexte défini                                                                              | [Service-Public.fr, droit à l’image](https://www.service-public.fr/particuliers/vosdroits/F32103)                                                                                                                                                                                                    | Information administrative                   | France ; des exceptions existent selon contexte          | 2026-07-21   | Élevée           | Section photos et autorisations                                    | Conserver l’autorisation et le contexte de diffusion plutôt que supposer qu’une photo interne est libre | Actuelle à la consultation       |
| Une œuvre accessible en ligne ne peut pas être reproduite librement par principe ; une licence ou autorisation doit être vérifiée                                                       | [Légifrance, Code de la propriété intellectuelle, article L122-4](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278911/) et [APIE, utiliser des photographies trouvées sur internet](https://www.economie.gouv.fr/apie/utilisation-de-photographies-trouvees-sur-internet-vigilance) | Texte légal et recommandation administrative | Droit français ; exceptions à apprécier selon le cas     | 2026-07-21   | Élevée           | Section photos et droits                                           | Pour chaque visuel externe, conserver la licence, la facture ou l’autorisation et ses conditions        | Textes actuels à la consultation |
| Une cession de droits doit identifier les droits transmis et délimiter leur exploitation                                                                                                | [Légifrance, Code de la propriété intellectuelle, article L131-3](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958)                                                                                                                                                              | Texte légal                                  | Droit français ; la clause concrète dépend du projet     | 2026-07-21   | Élevée           | Section partage des responsabilités et devis                       | Faire préciser les usages couverts pour les textes, photos et créations commandés                       | Texte actuel à la consultation   |

### Contradictions et données à ne pas publier

- Ne pas affirmer qu’un nombre universel de pages, mots ou photos améliore le SEO.
- Ne pas promettre qu’un contenu « optimisé » fera monter le site dans Google.
- Ne pas écrire que toutes les photos de salariés ou de clients exigent toujours
  la même autorisation : le contexte et les exceptions comptent.
- Ne pas écrire que « libre de droits » signifie libre de toute condition, ni
  qu’un crédit remplace automatiquement l’autorisation de reproduire.
- Ne pas présenter un modèle CNIL comme une validation juridique universelle.
- Ne pas inventer de témoignages, de chiffres de satisfaction ou de résultats.
- Ne pas conseiller de remplir un formulaire de nombreux champs au nom de la
  qualification sans vérifier leur nécessité.
- Ne pas assimiler texte alternatif et liste de mots-clés.

### Calculs reproductibles

Aucun prix, ROI ou durée universelle ne sera calculé. Le seul décompte possible
est un inventaire de remise ; il ne doit pas devenir un quota artificiel.

## 6. Empreinte éditoriale à ne pas reproduire

| Guide voisin                          | Type d’ouverture            | Progression            | Dispositif récurrent         | Exemple                 | Place du CTA                  | Conclusion             |
| ------------------------------------- | --------------------------- | ---------------------- | ---------------------------- | ----------------------- | ----------------------------- | ---------------------- |
| `cahier-des-charges-site-internet`    | Projet à cadrer avant devis | Questions puis clauses | Modèle de cahier des charges | Projet illustratif      | Après cadrage                 | Livrable à remettre    |
| `combien-de-temps-pour-creer-un-site` | Demande de calendrier       | Étapes chronologiques  | Séquence de production       | Calendrier fictif       | Après explication des retards | Prochaine date à fixer |
| `prix-site-vitrine`                   | Question de budget          | Périmètre puis postes  | Comparaisons de prix         | Budgets illustratifs    | Après coût complet            | Devis comparable       |
| `template-ou-site-sur-mesure`         | Choix entre niveaux         | Quatre options         | Cartes de décision           | Situations d’entreprise | Après verdict                 | Niveau à choisir       |

```text
Tension motrice : « Je connais mon métier, mais je ne sais pas écrire un site. »
Type d’ouverture : scène du dossier vide demandé par le prestataire ; elle
reconnaît une situation ordinaire et enlève immédiatement la fausse obligation
de rédiger seul le texte final.
Progression : constituer un dossier réel, puis le transformer en fiche de page,
attribuer les responsabilités et décider ce qui peut être publié au lancement.
Artefact signature : la fiche d’une offre prête à remettre, présentée dans la page.
Rythme : direct, concret, exemples brefs, aucune dramatisation.
Place du CTA : après que le lecteur a produit lui-même une première fiche.
Conclusion : une consigne de remise et une date de validation, pas une synthèse.
Différences : pas de comparaison tarifaire ; pas de calendrier complet ; pas de
classification template/sur-mesure ; pas de cahier des charges technique.
```

## 7. Plan annoté

| Section provisoire                   | Question résolue                                               | Preuve ou exemple                                    | Conséquence ou décision                                       | Format                           |
| ------------------------------------ | -------------------------------------------------------------- | ---------------------------------------------------- | ------------------------------------------------------------- | -------------------------------- |
| Réponse immédiate                    | Dois-je tout rédiger moi-même ?                                | Répartition fait / rédaction / validation            | Commencer par la vérité métier                                | Paragraphe et mini-répartition   |
| Le dossier minimum                   | Que dois-je rassembler ?                                       | Six familles concrètes                               | Ouvrir six dossiers partagés                                  | Cartes simples                   |
| Une fiche par offre                  | Que faut-il dire sans faire du marketing creux ?               | Exemple fictif d’un artisan ou service B2B           | Décrire client, problème, réponse, limites et action          | Fiche remplie                    |
| Les preuves publiables               | Quels éléments rassurent vraiment ?                            | Réalisation, qualification, processus, avis autorisé | Retenir une preuve vérifiable plutôt qu’un slogan             | Comparaison avant/après          |
| Photos et droits                     | Quelles images envoyer ?                                       | Google Images, W3C, Bercy et Service-Public          | Nommer, dater, attribuer et autoriser                         | Checklist courte                 |
| Informations pratiques et formulaire | Que manque-t-il souvent à la fin ?                             | Bercy, CNIL et Google Business Profile               | Corriger identité, horaires, zone et champs                   | Tableau responsable / validation |
| Qui écrit et qui valide ?            | Que doit faire le dirigeant et que peut faire le prestataire ? | Répartition explicite                                | Éviter le « texte fourni par le client » ambigu dans le devis | Trois rôles                      |
| Ce qui peut attendre                 | Faut-il bloquer le lancement jusqu’à la perfection ?           | Distinction essentiel / amélioration ultérieure      | Lancer seulement quand offre, preuve et contact sont vrais    | Deux listes                      |
| Remise finale                        | Comment transmettre sans chaos ?                               | Arborescence de fichiers et fiche de validation      | Donner un dossier exploitable et un interlocuteur unique      | Action finale                    |

## 8. Ressource et conversion

```text
Une ressource est-elle naturellement nécessaire ? non
Justification : une fiche copiée directement depuis la page suffit. Un PDF
résumé ajouterait une promesse de maintenance sans produire de meilleure décision.
Problème qu’elle résout après la lecture : sans objet ; le modèle copiable est
intégré au guide et ne demande aucune adresse e-mail.
Résultat autonome : le lecteur remplit une fiche par offre et un dossier de remise.
Exemple rempli : oui, fictif et annoncé comme tel dans la page.
Conclusion « ne pas investir » possible : oui ; si l’offre, le responsable de
contact ou les preuves ne sont pas prêts, il peut préparer d’abord ces éléments.
Données saisies : aucune donnée collectée par le guide.
Bon fit Hagnéré Code : l’entreprise connaît ses offres et possède des faits ou
réalisations, mais veut être interrogée, structurée, réécrite et intégrée.
Mauvais fit : elle attend du prestataire qu’il invente une offre, des résultats,
des témoignages ou des autorisations qui n’existent pas.
Action non commerciale : préparer une fiche par offre et nommer le validateur.
CTA : « Faire transformer mes éléments en pages claires » vers
`/demarrer-un-projet`, sans promesse de résultat ni de délai garanti.
```

## 9. Rapports de sortie des quatre passes

### Rapport P1 — Recherche

```text
PASSE 1 TERMINÉE
Slug : preparer-contenus-site-vitrine
Lecteur et phrase réelle : dirigeant ou indépendant auquel on demande les
textes et photos, sans savoir ce qu’il doit produire lui-même.
Décision : constituer un dossier de matière vraie, attribuer rédaction et
validation, puis distinguer le nécessaire du contenu qui peut attendre.
Angle et forme dominante : six familles de contenus et une fiche d’offre remplie.
Pages proches : cahier des charges, délai, prix et niveau de conception ; le
guide ne reprend ni leur budget, ni leur calendrier, ni leurs choix techniques.
Sources décisives : Google Search et Images, W3C WAI, Bercy, CNIL, France Num,
Google Business Profile et Service-Public.fr.
Incertitudes exclues : quota de mots/photos/pages, promesse SEO, modèle légal
universel, statistiques de conversion et délais arbitraires.
Action autonome : remplir une fiche par offre et classer six familles d’éléments.
CTA possible : faire transformer ces éléments en pages claires.
Plan : du dossier brut à la remise validée, sans plan tarifaire ni technique.
Snapshot : docs/research/manifests/preparer-contenus-site-vitrine-p1.sha256
```

### Rapport P2 — Rédaction et intégration

```text
PASSE 2 TERMINÉE
Fichiers créés : page, image Open Graph et entrée de registre.
Fichiers modifiés : guide cahier des charges et FAQ du service site vitrine
pour deux liens entrants contextuels.
Ouverture et réponse : le dirigeant n’a pas à écrire seul les textes finaux ;
il doit fournir la vérité métier et classer les éléments en prêt, à faire
produire ou à confirmer.
Forme propre au sujet : six dossiers de collecte, une fiche par offre et un
registre de remise comprenant responsable, preuve ou droit et validateur.
Exemple : PME de maintenance industrielle explicitement fictive, sans résultat
inventé ni fausse mission Hagnéré Code.
Sources visibles : Google Search et Images, W3C, APIE, Service-Public, Bercy,
CNIL, Google Business Profile et Légifrance, placées près des affirmations.
Action autonome : remplir une fiche par offre et le tableau de remise.
Bon fit / mauvais fit : présents dans les trois verdicts et dans le CTA, avec
option de préparer en interne ou de reporter si les preuves manquent.
CTA : « M’aider à préparer les contenus » vers `/demarrer-un-projet` ; un seul
CTA éditorial, sans délai ni résultat garanti.
Contrôles rapides : Prettier, ESLint ciblé, TypeScript et git diff --check passent.
Snapshot : docs/research/manifests/preparer-contenus-site-vitrine-p2.sha256
```

### Rapport P3 — Contre-audit indépendant

```text
PASSE 3 TERMINÉE
Relecteur indépendant : agent `p3_contenus_site`, lecture seule.
Affirmations et sources revérifiées : Google Search et Images, W3C, CNIL,
Bercy, Google Business Profile, Service-Public, Légifrance et APIE.
Calculs refaits : aucun prix ni ROI ; temps de lecture vérifié sur 2 958 mots
d’article et 3 387 mots en incluant la FAQ. La valeur 16 min reste à une minute
des deux méthodes de comptage.
P0 trouvés / corrigés : aucun.
P1 trouvés / corrigés : source France Num rapprochée de l’affirmation ; note
CNIL complétée avec les informations à préparer ; tableau quatre colonnes
remplacé par des cartes ; temps de lecture aligné ; mutation du snapshot P2
consignée comme historique et non masquée.
Corrections pédagogiques : « résultat » transformé en « résultat ou prochaine
étape recherchée », « recette » expliquée comme test final, DPO traduit et
séance photo employée à la place de shooting.
Suggestions P2 appliquées en P4 puis renvoyées au relecteur : titre SEO naturel,
H2 moins absolu, demande « réaliste », phrase concrète et tag CTA sans jargon.
Revalidation : PASS, 0 P0 et 0 P1 résiduel ; aucun fait, verdict ou niveau de
promesse modifié par la passe de plume.
Contrôles intermédiaires : ESLint ciblé, 184/184 tests SEO, TypeScript et
git diff --check passent ; Article et BreadcrumbList valides, H1 et canonical cohérents.
Snapshot : docs/research/manifests/preparer-contenus-site-vitrine-p3.sha256
```

### Rapport P4 — Plume humaine et contrôle final

```text
PASSE 4 TERMINÉE
Passages humanisés : titre SEO, H2 de réponse, terme « matière vraie »,
« shooting », « recette », DPO et libellé du CTA remplacés par des formulations
ordinaires. La note CNIL donne maintenant les informations que le dirigeant doit
préparer, sans choisir une base juridique à sa place.
Coupe ou resserrement : aucune section artificielle ajoutée ; 2 958 mots dans
l’article et 3 387 avec la FAQ. Le test de coupe de 20 % conclut qu’une coupe
globale ferait perdre soit un droit à vérifier, soit une responsabilité, soit
une décision. Les répétitions de jargon ont néanmoins été retirées.
Retour P3 effectué : oui. Toutes les retouches de plume touchant le titre, le
temps de lecture ou une nuance ont été soumises au relecteur indépendant.
Diff sémantique après la plume : aucun fait, verdict ou niveau de promesse
modifié ; revalidation P3 PASS, 0 P0/P1.
Scorecard : 19/20. Le seul point non maximal est Style, faute de test par une
personne réelle distincte ; la lecture froide indépendante et l’observation en
navigateur ne sont pas présentées comme l’équivalent.
Validation humaine réelle : non.
Autorisation éditoriale : délégation du commanditaire pour produire le lot et
contre-audit indépendant documenté. La route reste toutefois volontairement
`ready-for-human-review` jusqu’au gel global des dix guides.
Commandes : check:seo 184/184 ; ESLint ciblé PASS ; TypeScript PASS ; tests
globaux 328/328 ; build production PASS ; postbuild PASS sur 88 URL, 47 temps de
lecture et 164 JSON-LD ; git diff --check PASS.
Largeurs : 320, 390, 768, 1024 et 1440 px observées avec métriques exactes.
Aucun débordement, aucune ancre manquante et un H1 à chaque largeur. Cartes
mobiles et tableau de décision inspectés. FAQ ouverte au clic ; balisage natif
`details/summary` et focus observés. L’émulation de touche du navigateur n’a pas
activé le contrôle : aucune validation clavier automatisée supplémentaire n’est
revendiquée pour ce composant partagé inchangé.
Route : HTTP 200 local depuis le `.next` exact ; canonical production cohérent ;
noindex/nofollow conforme à la porte ; console sans erreur ni avertissement ;
30 événements réseau, aucune requête échouée et aucune réponse >= 400.
Image sociale : HTTP 200, image/png, 1200 × 630, texte et marque observés.
Snapshot final : docs/research/manifests/preparer-contenus-site-vitrine-p4.sha256
Statut maximal : Publiable sous délégation, publication différée au gel du lot.
Verdict : PASS.
```

## 10. Revue finale

### Scorecard justifiée

| Axe         | Note 0-2 | Preuve dans la page                                                                        | Correction éventuelle                                 |
| ----------- | -------: | ------------------------------------------------------------------------------------------ | ----------------------------------------------------- |
| Intention   |        2 | Le lecteur qui reçoit une demande de textes et photos est nommé dès la première phrase     | Aucune                                                |
| Décision    |        2 | Trois états au départ et trois verdicts de lancement à la fin                              | Aucune                                                |
| Pédagogie   |        2 | Contenu défini en mots simples, fiche par offre et exemples concrets                       | Aucune                                                |
| Profondeur  |        2 | Offre, preuves, photos, droits, informations, formulaire, devis et remise                  | Aucune                                                |
| Preuve      |        2 | Sources primaires placées près de chaque affirmation sensible                              | Aucune                                                |
| Comparaison |        2 | Prêt / à produire / à confirmer puis lancer / déléguer / préparer                          | Aucune                                                |
| Originalité |        2 | Dossier en six parties et registre de remise, sans reprendre le plan des guides voisins    | Aucune                                                |
| Style       |        1 | Lecture froide et orale réalisée, jargon retiré ; aucun lecteur humain réel distinct       | Faire un test lecteur réel après le lot si disponible |
| Conversion  |        2 | Une action autonome précède un CTA unique qui accepte l’option interne ou le report        | Aucune                                                |
| SEO/produit |        2 | Intent distinct, maillage entrant, metadata, OG, Article, Breadcrumb et responsive validés | Publication différée au gel du lot                    |

**Total : 19/20.** Les quatre axes bloquants — intention, décision, pédagogie et
preuve — obtiennent 2.

### Test lecteur non technique

```text
Test réalisé par une personne réelle : non
Profil du lecteur : simulation froide indépendante d’un dirigeant non technicien,
sans prétendre remplacer une personne réelle
Ce qu’il a compris comme réponse : fournir les faits, preuves et droits que le
prestataire ne peut inventer, puis écrire qui produit et qui valide
Décision qu’il prendrait : lancer avec ses contenus, chiffrer la production
éditoriale ou préparer d’abord les inconnues
Endroit où il a commencé à survoler : aucun point bloquant signalé ; les tableaux
ont été transformés en cartes pour la lecture mobile
Passage crédible ou trop commercial : CTA jugé crédible car il accepte la
préparation interne et le report
Termes ou passages bloquants : recette, DPO, shooting, matière vraie et périmètre
retirés ou traduits
Questions encore sans réponse : aucune P0/P1 après la note CNIL détaillée
Corrections appliquées : voir rapport P3 et rapport P4
```

### Snapshot de réécriture — 24 juillet 2026

Le guide a été repris avec un fil de lecture plus humain et plus décisionnel :
cas fictif note brute → page, comparaison à périmètre identique des modes
interne/hybride/délégué, calculs de capacité distincts d’un prix, test de
compréhension avant publication, suivi 30/90 jours et kit éditable local. Les
valeurs (2 180 €, 2 020 €, 2 835 € et 193,50 € de capacité test) sont explicitement
des hypothèses illustratives, non des tarifs de marché ni des promesses de
conversion.

Le kit a été testé avec 17 contrôles ciblés puis renforcé : précision affichée
et calculée identique au centime, échappement des séparateurs Markdown, des
chevrons et des retours à la ligne, export local sans compte ni appel réseau.
Le lot guide/kit/langage totalise ensuite 75 tests verts, avec TypeScript et
ESLint. La vérification navigateur réelle reste à refaire lorsque le runtime
sera disponible ; aucune validation responsive multi-navigateurs, publication
ou indexation n’est déclarée dans ce snapshot.

### Contre-audit indépendant

```text
Auteur du contre-audit : agent `p3_contenus_site`
Indépendant de la rédaction : oui ; lecture seule et aucun fichier modifié
Réserves sur les sources et calculs : source France Num à rapprocher ; comptage
article / FAQ à réconcilier
Réserves sur la clarté et le plan : tableau quatre colonnes, note CNIL trop courte
et cinq formulations légèrement techniques ou absolues
Réserves sur la conversion : aucune après clarification des responsabilités
Corrections ou justification : toutes les P1 et les P2 de plume appliquées,
puis revalidées ; 0 P0/P1 résiduel
Statut maximal réellement atteint : Publiable sous délégation ; route encore
fermée à l’indexation jusqu’au gel global du lot
```

### Vérifications finales

- [x] les 150 premiers mots passent le contrat de langage humain ;
- [x] chaque H2 est compréhensible hors contexte ;
- [x] cinq phrases abstraites passent le test sujet, action, résultat ;
- [x] aucun mur de lexique ne précède la réponse ;
- [x] les cartes ou comparaisons sont lisibles à 390 px ;
- [x] la FAQ répond dans sa première phrase ;
- [x] faits, droits, sources et fraîcheur sont revérifiés ;
- [x] l’exemple fictif est annoncé comme tel ;
- [x] aucune quantité arbitraire n’est présentée comme une règle SEO ;
- [x] le CTA et tous les liens existent ;
- [x] metadata, JSON-LD, registre, maillage et ancres sont cohérents ;
- [x] TypeScript, ESLint, tests SEO, tests complets et build passent ;
- [x] rendu observé à 320, 390, 768, 1024 et 1440 px ;
- [x] publication et indexation ne sont déclarées qu’avec leurs preuves propres.
