# Dossier de recherche — Cahier des charges d'une application métier

## 1. Fiche d'identité

- **Slug prévu** : `cahier-des-charges-application-metier`
- **Intention principale** : aider un dirigeant ou un responsable métier à produire un dossier suffisamment précis pour arbitrer le projet, consulter plusieurs prestataires et recetter une application métier.
- **Décision rendue possible** : savoir quoi faire construire, ce qui doit rester hors V1, quelles preuves exiger et comment rendre les offres comparables.
- **Lecteur prioritaire** : dirigeant de TPE/PME, indépendant structuré, responsable d'exploitation, administratif ou commercial qui pilote un processus aujourd'hui tenu par des tableurs, des e-mails et des logiciels mal raccordés.
- **Stade du parcours** : problème reconnu, projet plausible, avant consultation ou avant validation d'un devis.
- **Promesse** : repartir avec un modèle copiable fondé sur 7 livrables, 5 à 8 scénarios métier et des critères de recette observables.
- **Date de collecte et de vérification** : 20 juillet 2026.
- **Statut** : contre-audit éditorial corrigé, registre et kit intégrés. Rendu documentaire et audit d'accessibilité réalisés ; build, contrôle navigateur et revue humaine indépendante restent à terminer.

## 2. Frontière sémantique et cannibalisation

| URL existante                                           | Question traitée par cette page                                                           | Frontière avec le nouveau guide                                                                                                                                                                       | Lien interne utile                                            |
| ------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| `/guides/cahier-des-charges-site-internet`              | Comment cadrer un site public, ses contenus, sa conversion et son référencement ?         | Le nouveau guide traite un processus interne, ses règles, données, droits, intégrations et preuves de recette.                                                                                        | Oui, comme variante « site public ».                          |
| `/guides/cahier-des-charges-application-mobile`         | Comment cadrer un produit mobile, ses plateformes, stores et usages sur appareil ?        | Le nouveau guide est indépendant du canal : web interne, poste de travail ou mobile ne sont que des réponses possibles au processus.                                                                  | Oui, si le besoin comporte une vraie contrainte mobile.       |
| `/guides/transformer-excel-en-application`              | Faut-il conserver Excel, acheter, passer au no-code ou développer ?                       | Ce guide intervient après ce premier arbitrage : il transforme le besoin retenu en dossier consultable et recettable.                                                                                 | Oui, très proche dans le parcours mais non substituable.      |
| `/guides/prix-logiciel-sur-mesure`                      | Quels postes composent le prix et le coût total d'un logiciel spécifique ?                | Le nouveau guide ne donne pas un prix : il fixe le périmètre commun sans lequel les devis ne se comparent pas.                                                                                        | Oui, pour préparer le budget et lire les offres.              |
| `/guides/no-code-ou-sur-mesure`                         | Quel mode de réalisation choisir ?                                                        | Le nouveau guide doit rester neutre sur la technologie et permettre au candidat de justifier sa solution.                                                                                             | Oui, après le cadrage du besoin.                              |
| `/guides/erp-ou-logiciel-sur-mesure`                    | Faut-il choisir un progiciel, le configurer, l'étendre ou construire un cœur spécifique ? | Le cahier des charges formalise le périmètre et les preuves nécessaires avant cet arbitrage ; il ne recommande aucune stratégie.                                                                      | Oui, avant et après la note de décision.                      |
| `/guides/combien-coute-un-crm`                          | Comment construire le coût total et contrôler le contrat d'un CRM ?                       | Le nouveau guide reste transversal et ne compare ni éditeur ni tarif CRM.                                                                                                                             | Oui, lorsqu'un besoin commercial est concerné.                |
| `/ressources/kit-cahier-des-charges-application-metier` | Télécharger immédiatement un modèle Word et un exemple PDF.                               | La ressource répond à l'intention transactionnelle de téléchargement ; le guide répond à l'intention informationnelle « apprendre à rédiger et valider ». Titres, H1 et canonicals restent distincts. | Oui, comme mise en pratique, sans dupliquer toute la méthode. |
| `/services/outils-internes-sur-mesure`                  | Présentation commerciale de l'offre Hagnéré Code.                                         | Le guide doit être utile sans prise de contact et ne contient qu'un CTA tardif, qualifiant aussi les mauvais fits.                                                                                    | Oui, en sortie secondaire.                                    |

**Justification de la nouvelle URL** : aucune page existante ne prend comme objet central le dossier de consultation et de recette d'un outil interne. Le mot-clé, l'intention et le livrable sont donc distincts.

## 3. Demande, questions et vocabulaire du lecteur

### Requêtes observées ou dérivées de l'intention

- cahier des charges application métier ;
- modèle cahier des charges logiciel métier ;
- exemple cahier des charges outil interne ;
- cahier des charges logiciel sur mesure PME ;
- spécifications fonctionnelles application métier ;
- critères de recette logiciel ;
- comment comparer devis logiciel sur mesure ;
- expression de besoin application métier ;
- matrice droits utilisateurs logiciel ;
- reprise de données cahier des charges.

### Questions auxquelles le guide doit répondre

1. Que doit contenir le document final, concrètement ?
2. Comment décrire un métier sans dessiner arbitrairement les écrans ?
3. Comment faire ressortir les règles, exceptions, données et droits d'accès ?
4. Comment séparer V1, plus tard et hors périmètre ?
5. Comment écrire un critère d'acceptation qu'une personne non technique peut vérifier ?
6. Qui fournit les données, décide, développe, valide et exploite ?
7. Quels sujets de sécurité, RGPD, continuité, accessibilité et écoconception doivent être cadrés ?
8. Comment donner les mêmes hypothèses à chaque candidat et comparer leurs réponses ?

### Champ lexical à employer et à expliquer

Expression de besoin, processus, acteur, scénario métier, déclencheur, précondition, règle de gestion, cas nominal, exception, donnée de référence, source de vérité, rôle, droit, journalisation, intégration, API, import/export, reprise de données, lot, V1, hors périmètre, critère d'acceptation, recette, preuve, anomalie bloquante, réversibilité, continuité, restauration, maintenance et responsabilité.

Le guide évite les anglicismes lorsque le français est plus clair. Les termes utiles à la consultation — API, RACI, « Given/When/Then » — sont traduits avant d'être éventuellement nommés.

## 4. Cartographie éditoriale de la SERP

Relevé non exhaustif effectué le 20 juillet 2026 avec les requêtes `cahier des charges application métier`, `modèle cahier des charges logiciel métier` et `exemple cahier des charges application web`, dans un contexte de recherche web en français. La position exacte varie selon l'appareil, le lieu, le moteur et la personnalisation ; aucune position universelle ni aucun volume de recherche n'est revendiqué.

| Page observée                                                                                                                                                                                    | Force                                                                                | Limite ou espace laissé                                                                | Décision pour le guide                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| [France Num, « Bâtir le cahier des charges du site internet… »](https://www.francenum.gouv.fr/guides-et-conseils/developpement-commercial/site-web/batir-le-cahier-des-charges-du-site-internet) | Guide éditorial public, méthode lisible, objectifs et contraintes.                   | Porte sur le site internet et non sur les règles, données et droits d'un outil métier. | Reprendre la logique de formalisation, expliciter le transfert de périmètre.                             |
| [AktisLab, « Cahier des charges logiciel métier : modèle PME »](https://www.aktislab.fr/articles/cahier-des-charges-logiciel-metier-modele-pme)                                                  | Part du terrain, des processus, utilisateurs, données, intégrations et V1.           | Angle proche ; reste principalement organisé comme un modèle de rubriques.             | Se différencier par les scénarios rejouables, les preuves de recette et la feuille d'hypothèses commune. |
| [La Fabrique du Net, modèle d'application web](https://www.lafabriquedunet.fr/agences/tendances/modele-de-cahier-des-charges-pour-une-application-web)                                           | Générateur et parcours guidé, bonne couverture du besoin, des rôles et intégrations. | Contexte d'intermédiation commerciale ; le formulaire précède une partie de la valeur. | Donner le modèle complet dans la page, sans e-mail ni téléchargement obligatoire.                        |
| [Axopen, modèle d'application métier](https://www.axopen.com/blog/2025/02/cahier-des-charges-application-metier-modele/)                                                                         | Contexte technique crédible et attention à la granularité.                           | Offre surtout une ossature documentaire.                                               | Ajouter responsabilités, modes dégradés, migration, retour arrière et comparabilité des offres.          |

### Manque éditorial exploitable

La SERP explique fréquemment **quelles rubriques remplir**. Le guide Hagnéré Code doit montrer **quelle preuve une rubrique doit produire**. Sa chaîne logique est :

> objectif opérationnel → scénario métier → règle et exception → donnée et responsable → critère de recette → preuve attendue.

Il doit aussi remettre en concurrence quatre décisions avant le développement : conserver le processus, corriger l'organisation, acheter un logiciel existant, automatiser une jonction ou construire du spécifique.

## 5. Fiche de preuves

### Registre de nature et de fraîcheur

| Élément                                                         | Nature exacte                                                                       | Date ou état observé                                           | Passage utilisé                                                           | Événement de revalidation                                       |
| --------------------------------------------------------------- | ----------------------------------------------------------------------------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------- | --------------------------------------------------------------- |
| DesignGouv « Bien concevoir »                                   | Guide méthodologique institutionnel destiné au service public numérique             | page consultée le 20/07/2026 ; date de mise à jour non relevée | partir des besoins, parler aux utilisateurs, tester et itérer             | modification de la page ou revue annuelle du guide              |
| RGESN 2024                                                      | Référentiel interministériel d'écoconception                                        | édition 2024, consultée le 20/07/2026                          | utilité, besoin réel, alternatives et documentation des choix             | nouvelle version du référentiel                                 |
| CNIL — minimisation, conservation, sous-traitance et sauvegarde | Recommandations et fiches pratiques de l'autorité française                         | pages consultées le 20/07/2026                                 | finalité, minimisation, durée, journaux, responsabilités et restauration  | mise à jour CNIL, évolution réglementaire ou nouveau traitement |
| ANSSI — homologation et règles d'or                             | Méthode et recommandations de sécurité                                              | pages consultées le 20/07/2026                                 | risque, responsabilité, privilège minimal, authentification et sauvegarde | nouvelle version ANSSI ou changement du niveau de risque        |
| France Num — ERP pour TPE                                       | Guide éditorial hébergé par une plateforme publique                                 | page consultée le 20/07/2026                                   | besoins, solutions existantes et implication des équipes                  | mise à jour du dossier ou changement important du marché        |
| France Num — cahier des charges d'un site                       | Dossier éditorial d'une contributrice référencée France Num, pas une étude primaire | publié le 20/03/2026, mis à jour le 23/03/2026                 | objectifs, contraintes, budget et organisation                            | modification du dossier ou revue annuelle                       |

Une source institutionnelle peut soutenir une méthode sans prouver un résultat universel. Chaque transposition du service public, du site internet ou de l'ERP vers l'application métier privée reste signalée dans le périmètre de la fiche concernée.

### 5.1 Partir du besoin, observer et tester tôt

- **Fait publiable** : le guide « Bien concevoir » de DesignGouv recommande d'identifier les besoins avant les solutions, de parler aux utilisateurs réels, de tester avant de développer, de travailler par itérations et de piloter par l'impact et des indicateurs.
- **Source ou référentiel** : DINUM / DesignGouv, « Concevoir un service public numérique de qualité » — <https://design.numerique.gouv.fr/bien-concevoir/>.
- **Périmètre** : méthode destinée aux services publics numériques. Ses principes sont utiles à un outil interne privé, mais ne sont pas présentés comme une obligation générale pour les PME.
- **Consultation** : 20/07/2026.
- **Confiance** : solide.
- **Usage** : justifier l'ouverture par les résultats et les scénarios plutôt que par une technologie ou des écrans.

### 5.2 Questionner la nécessité et documenter les choix

- **Fait publiable** : le RGESN 2024 invite à évaluer l'utilité du service, à vérifier que chaque fonctionnalité répond à un besoin, à documenter les choix d'architecture par rapport aux alternatives et à limiter ressources, données et fonctions au besoin réel.
- **Source ou référentiel** : Mission interministérielle numérique écoresponsable, « Référentiel général d'écoconception de services numériques (RGESN) — 2024 » — <https://ecoresponsable.numerique.gouv.fr/publications/referentiel-general-ecoconception/>.
- **Périmètre** : référentiel d'écoconception ; ne pas le présenter comme légalement obligatoire pour toute application privée.
- **Consultation** : 20/07/2026.
- **Confiance** : solide.
- **Usage** : ajouter le test « utile maintenant ? » et l'exigence de justification des choix structurants.

### 5.3 Minimisation, durées et journaux

- **Fait publiable** : la CNIL recommande de documenter les catégories de données avant l'implémentation, de ne collecter que les données nécessaires, de définir une durée par catégorie, d'organiser la purge et de ne pas placer de données sensibles ou critiques dans les journaux.
- **Sources ou référentiels** : CNIL, « Minimiser les données collectées » — <https://www.cnil.fr/fr/minimiser-les-donnees-collectees> ; CNIL, « Les durées de conservation des données » — <https://cnil.fr/fr/passer-laction/les-durees-de-conservation-des-donnees>.
- **Périmètre** : les durées concrètes dépendent de la finalité, du secteur et des obligations applicables ; le guide ne fixe pas une durée universelle.
- **Consultation** : 20/07/2026.
- **Confiance** : solide.
- **Usage** : exiger un dictionnaire de données avec finalité, visibilité, source, durée et sort en fin de conservation.

### 5.4 Sous-traitance, fin de contrat et incidents

- **Fait publiable** : la CNIL demande de choisir un sous-traitant présentant des garanties suffisantes et de cadrer notamment l'objet, la durée, les responsabilités, l'authentification, la notification des incidents et le sort des données à la fin de la prestation.
- **Source ou référentiel** : CNIL, « Sécurité : gérer la sous-traitance » — <https://www.cnil.fr/fr/securite-gerer-la-sous-traitance>.
- **Périmètre** : pertinent lorsqu'un prestataire traite des données personnelles pour le compte de l'entreprise ; ne remplace pas une analyse juridique du cas.
- **Consultation** : 20/07/2026.
- **Confiance** : solide.
- **Usage** : matrice des responsabilités et bloc réversibilité.

### 5.5 Sauvegarder ne suffit pas : restaurer doit être testé

- **Fait publiable** : la CNIL recommande des sauvegardes régulières, protégées au même niveau que la production, séparées, et des tests réguliers d'intégrité et de restauration.
- **Source ou référentiel** : CNIL, « Sécurité : sauvegarder » — <https://www.cnil.fr/fr/securite-sauvegarder>.
- **Périmètre** : recommandation de sécurité ; fréquence et objectifs de reprise sont proportionnés au risque métier.
- **Consultation** : 20/07/2026.
- **Confiance** : solide.
- **Usage** : transformer « il y aura des sauvegardes » en preuve de restauration avec propriétaire et fréquence.

### 5.6 Risques, mesures et acceptation explicite

- **Fait publiable** : la démarche d'homologation présentée par l'ANSSI et la DINUM consiste à identifier les impacts et risques, retenir des mesures et faire accepter explicitement les risques résiduels par une autorité responsable.
- **Source ou référentiel** : ANSSI, « Homologation de sécurité » — <https://cyber.gouv.fr/securisation/homologation-de-securite/>.
- **Périmètre** : méthode adaptable du système simple au complexe. Une homologation formelle n'est pas affirmée comme obligatoire pour toute PME.
- **Consultation** : 20/07/2026.
- **Confiance** : solide.
- **Usage** : proposer un registre proportionné « risque / impact / mesure / responsable / risque accepté ».

### 5.7 Mesures de base : authentification, privilèges et sauvegardes

- **Fait publiable** : les « 10 règles d'or » de l'ANSSI recommandent notamment l'authentification multifacteur lorsque possible, des sauvegardes régulières et l'attribution des seuls privilèges nécessaires.
- **Source ou référentiel** : ANSSI, « 10 règles d'or en matière de sécurité numérique » — <https://cyber.gouv.fr/securisation/10-regles-or-securite-numerique/>.
- **Périmètre** : socle de sensibilisation, à compléter selon le niveau de risque.
- **Consultation** : 20/07/2026.
- **Confiance** : solide.
- **Usage** : liste de questions concrètes, sans promesse de conformité ou de sécurité absolue.

### 5.8 Évaluer l'existant avant le spécifique et impliquer les équipes

- **Fait publiable** : France Num conseille, pour le choix d'un ERP en TPE, de définir les besoins auxquels l'outil doit absolument répondre, d'étudier les solutions adaptées au secteur et d'impliquer les équipes.
- **Source ou référentiel** : France Num, « Pourquoi et comment mettre en place un ERP pour les TPE » — <https://www.francenum.gouv.fr/guides-et-conseils/pilotage-de-lentreprise/logiciels-de-gestion-de-lentreprise/pourquoi-et-comment>.
- **Périmètre** : page consacrée aux ERP et TPE ; le guide n'en fait pas une règle universelle de développement.
- **Consultation** : 20/07/2026.
- **Confiance** : solide.
- **Usage** : forcer l'étude d'une solution existante et la participation des utilisateurs opérationnels.

### 5.9 Formaliser objectifs, contraintes, budget et organisation

- **Fait publiable** : France Num présente le cahier des charges comme un moyen de formaliser besoins, contraintes, objectifs, budget et organisation avant consultation.
- **Source ou référentiel** : France Num, « Bâtir le cahier des charges du site internet de son entreprise : les 10 points clés » — <https://www.francenum.gouv.fr/guides-et-conseils/developpement-commercial/site-web/batir-le-cahier-des-charges-du-site-internet>.
- **Périmètre** : contenu orienté site internet ; seules les fonctions générales du document sont transférées au cas d'une application métier.
- **Consultation** : 20/07/2026.
- **Confiance** : solide.
- **Usage** : cadrer la consultation et la feuille d'hypothèses commune.

### 5.10 Limites de preuve et affirmations interdites

Ne pas publier :

- un nombre universel de pages ou de jours de rédaction ;
- une promesse selon laquelle le cahier des charges empêcherait tout dépassement ;
- un taux d'échec projet ou un ROI non sourcé et non transposable ;
- l'affirmation que RGESN, RGAA ou une homologation ANSSI s'imposent à chaque PME ;
- une « conformité RGPD » garantie par une liste de cases ;
- une sécurité absolue ou une restauration certaine sans essai observé ;
- une technologie, une architecture, un hébergeur ou une fréquence de sauvegarde présentés comme universels ;
- une économie, un délai ou un budget prêté à l'exemple fictif comme s'il provenait d'un client réel.

## 6. Empreinte éditoriale anti-modèle

Pour ne pas reproduire mécaniquement les autres guides :

- ouverture sur le **dossier final attendu**, pas sur la définition du cahier des charges ;
- progression par objets de preuve : scénario, règle, donnée, droit, recette, responsabilité ;
- modèle complet copiable dans la page, sans dépendance à une capture d'e-mail ;
- tableau des options avant V1, incluant « ne pas développer » ;
- un seul exemple filé, explicitement fictif, qui relie scénario, exception et recette ;
- un mini-lexique placé au moment où le lecteur en a besoin, non un glossaire artificiel en fin de page ;
- cinq FAQ seulement, alignées sur les objections de décision ;
- un seul CTA commercial, après la méthode et avant les sources ;
- pas de fourchette de prix ni de promesse de délai : le sujet est la comparabilité du périmètre.

## 7. Plan annoté du guide

1. **Le dossier final en sept livrables** — donner immédiatement la sortie attendue et le modèle copiable.
2. **Cinq à huit scénarios métier** — décrire le cas nominal, les exceptions et la preuve attendue sans imposer un écran.
3. **Règles, données et droits** — produire dictionnaire, matrice des rôles et modes de défaillance des intégrations.
4. **Découper la V1** — confronter chaque besoin à conserver/corriger/acheter/relier/développer ; écrire les exclusions.
5. **Écrire la recette avant le devis** — rendre les critères observables, préparer les jeux d'essai et classer les anomalies.
6. **Répartir les responsabilités** — de la fourniture des données à l'exploitation, avec preuve et décideur.
7. **Exigences transverses proportionnées** — sécurité, données personnelles, continuité, accessibilité et écoconception sans sur-promesse juridique.
8. **Exemple illustratif fictif** — PME de maintenance de 18 personnes, un seul processus, critère complet avec cas déconnecté et validation d'une pièce coûteuse.
9. **Comparer les offres** — feuille d'hypothèses commune, tableau de comparaison, signaux d'offres non comparables et plan d'action de 48 heures.
10. **Sources ou référentiels** — titre, organisme, périmètre et lien.

## 8. Conversion et ressource

### Valeur autonome de la page

Le modèle en sept blocs et les gabarits de scénario, de données, de droits, de recette et de responsabilités sont lisibles et copiables directement. Le lecteur ne doit pas donner ses coordonnées pour accéder à la méthode.

### Ressource intégrée

Le kit est intégré à l'adresse `/ressources/kit-cahier-des-charges-application-metier`. Sa page cible l'intention « télécharger un modèle Word », tandis que le guide cible « apprendre à rédiger et valider ». Le modèle décline les sept livrables en quatorze rubriques guidées et six annexes éditables : scénarios, dictionnaire de données, droits, intégrations, recette et responsabilités.

Contenu livré :

- modèle modifiable du dossier en sept livrables ;
- cinq scénarios prioritaires plus trois optionnels, avec acteur, déclencheur, préconditions, nominal, exceptions, données, résultat et preuve ;
- dictionnaire de données et matrices dédiées aux droits, intégrations, recette et responsabilités ;
- feuille de réponse commune aux prestataires ;
- grille de comparaison des offres ;
- exemple fictif rempli, séparé du modèle vierge ;
- note d'utilisation indiquant les champs à adapter et les sujets nécessitant un conseil juridique ou de sécurité.

### CTA de service

- **Proposition** : « Faire relire mon dossier de consultation ».
- **Bon fit** : processus critique ou multi-utilisateur, règles et intégrations spécifiques, besoin d'un regard sur le périmètre et la recette.
- **Mauvais fit explicite** : recherche d'une simple mise en page, d'un prix instantané ou d'un logiciel standard déjà adapté.
- **Position** : tardive, une seule occurrence, après toute la méthode.

## 9. Contrôle qualité avant intégration

| Critère de la charte | Score provisoire / 2 | Justification                                                                                                                                |
| -------------------- | -------------------: | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Intention            |                    2 | Une intention : produire et exploiter un dossier de consultation/recette.                                                                    |
| Décision             |                    2 | Le lecteur peut cadrer V1, exclusions, preuves et comparabilité.                                                                             |
| Pédagogie            |                    2 | Modèles copiables, méthode progressive, exemple filé et mini-lexique.                                                                        |
| Profondeur           |                    2 | Données, droits, intégrations, migration, continuité, responsabilités et réversibilité.                                                      |
| Preuves              |                    2 | Sources officielles DINUM, RGESN, CNIL, ANSSI et France Num, périmètres signalés.                                                            |
| Comparaison          |                    2 | Alternatives au spécifique et feuille d'hypothèses identique pour les offres.                                                                |
| Originalité          |                    2 | Scénario + preuve de recette comme unité, non une suite de rubriques génériques.                                                             |
| Style                |                    2 | Phrases directes, jargon traduit, aucune statistique décorative ni faux client.                                                              |
| Conversion           |                    2 | Valeur autonome puis CTA qualifié, sans captation préalable.                                                                                 |
| SEO/produit          |                    1 | Métadonnées, JSON-LD, maillage, OG, registre et ressource sont intégrés ; build, navigateur, sitemap publié et production restent à valider. |

**Total provisoire : 19/20.** Ce score est une auto-évaluation documentaire après contre-audit, pas un test humain. Le statut maximal reste « prêt pour revue humaine » jusqu'à une lecture indépendante par la cible.

### Vérifications restantes avant publication

1. ESLint ciblé sur la page et l'image OG.
2. Build complet sans erreur de résolution de guide.
3. Rendu visuel de la page aux largeurs prévues par la procédure projet.
4. Rendu réel de l'image OG en 1200 × 630.
5. Cohérence entre FAQ visible et schéma `FAQPage`.
6. Validation des liens internes et externes.
7. Contrôle du canonique absolu, de l'indexation, du fil d'Ariane et du schéma `Article`.
8. Vérification du sitemap après publication ; découverte ou demande d'indexation ne vaut pas preuve d'indexation.
9. Contre-lecture humaine par un dirigeant ou responsable métier n'ayant pas participé à la rédaction.
10. Relevé de contrôle du kit : `docs/qa/kit-cahier-des-charges-application-metier.md`.
