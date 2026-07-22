# Dossier de recherche — Agence SaaS ou freelance

> Recherche P1 du deuxième guide du lot du 22 juillet 2026. Le guide doit
> comparer des organisations réelles, sans caricaturer une agence comme une
> équipe complète ni un indépendant comme une personne isolée.

**Statut final : publiable — validation éditoriale déléguée.**

## Journal des quatre passes

Propriétaire éditorial unique : **agent racine Codex**.

| Passe                        | État                     | Date       | Responsable                          | Snapshot                                       | Blocages |
| ---------------------------- | ------------------------ | ---------- | ------------------------------------ | ---------------------------------------------- | -------- |
| 1. Recherche                 | Terminée — porte validée | 2026-07-22 | Agent recherche P1 puis agent racine | `manifests/agence-saas-ou-freelance-p1.sha256` | Aucun    |
| 2. Rédaction et intégration  | Terminée — porte validée | 2026-07-22 | Agent racine Codex                   | `manifests/agence-saas-ou-freelance-p2.sha256` | Aucun    |
| 3. Contre-audit indépendant  | Terminée — porte validée | 2026-07-22 | Agent auditeur indépendant           | `manifests/agence-saas-ou-freelance-p3.sha256` | Aucun    |
| 4. Plume humaine et contrôle | Terminée — porte validée | 2026-07-22 | Agent racine Codex                   | `manifests/agence-saas-ou-freelance-p4.sha256` | Aucun    |

## 1. Fiche d’identité

| Champ                            | Décision documentaire                                                                                                                                                                                                                                                                                              |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Slug                             | `agence-saas-ou-freelance`                                                                                                                                                                                                                                                                                         |
| Requête principale qualitative   | agence SaaS ou freelance                                                                                                                                                                                                                                                                                           |
| Lecteur précis                   | Fondateur ou dirigeant non technique qui a validé un problème et cherche l’équipe capable de construire puis d’exploiter un SaaS                                                                                                                                                                                   |
| Situation déclenchante           | Un indépendant propose une relation directe, une agence présente plusieurs compétences, mais les devis ne rendent pas les mêmes responsabilités visibles                                                                                                                                                           |
| Phrase qu’il dirait au téléphone | « J’ai une idée de SaaS et deux propositions très différentes. Est-ce qu’un bon freelance suffit ou est-ce que j’ai besoin d’une agence ? »                                                                                                                                                                        |
| Décision principale              | Choisir une personne, une agence, une équipe hybride ou un report selon les responsabilités à couvrir pendant la phase suivante et les personnes déjà présentes côté client                                                                                                                                        |
| Réponse courte                   | Le statut ne décide pas de la qualité : un freelance peut convenir à un premier lot bien limité si les décisions produit et la continuité sont couvertes ; une agence devient utile lorsque plusieurs compétences doivent être coordonnées et qu’une équipe identifiable assume aussi la mise en ligne et la suite |
| Action autonome                  | Écrire les responsabilités de la prochaine phase et mettre un nom, un remplaçant et une trace attendue devant chacune                                                                                                                                                                                              |
| Bon fit Hagnéré Code             | Produit B2B ou outil métier, besoin de cadrage et développement, plusieurs rôles, données ou intégrations, continuité après lancement                                                                                                                                                                              |
| Mauvais fit                      | Idée non validée, recherche d’un associé plutôt que d’un prestataire, tâche technique très isolée, ou choix fondé uniquement sur le tarif journalier                                                                                                                                                               |
| Hors périmètre                   | Classement des agences, tarifs de marché, recrutement salarié, pacte d’associés, conseil juridique personnalisé, garantie de disponibilité ou de succès commercial                                                                                                                                                 |
| Recherche                        | 22 juillet 2026, SERP qualitative et sources primaires ; aucun volume mesuré                                                                                                                                                                                                                                       |

### Questions et objections

1. Quelles responsabilités un SaaS ajoute-t-il à un simple prototype ?
2. Dans quels cas une seule personne expérimentée suffit-elle ?
3. Quand plusieurs compétences doivent-elles être réellement coordonnées ?
4. Une agence a-t-elle toujours des remplaçants et un freelance travaille-t-il
   toujours seul ? Non : il faut vérifier les personnes nommées et leurs
   engagements.
5. Comment comparer deux prix qui n’incluent pas le même pilotage, les mêmes
   tests ni la même maintenance ?
6. Qui possède et administre le code, le domaine, l’hébergement, les paiements
   et les données ?
7. Peut-on commencer petit sans s’enfermer ?

### Score de lancement

| Critère                          |       Note | Justification                                                                                                                      |
| -------------------------------- | ---------: | ---------------------------------------------------------------------------------------------------------------------------------- |
| Adéquation avec une offre vendue |      25/25 | Le site commercialise la conception, la reprise et l’évolution de SaaS                                                             |
| Proximité d’une demande de devis |      24/25 | Le lecteur est en train de choisir une équipe                                                                                      |
| Preuve qualitative de demande    |       9/15 | La question agence/freelance est visible dans les recherches connexes ; aucun volume exact ni signal propriétaire n’est disponible |
| Preuve ou outil original         |      15/15 | Carte des responsabilités par phase et exercice de continuité                                                                      |
| Différenciation                  |       9/10 | L’URL générale agence web/freelance existe, mais ne traite ni vente récurrente, comptes clients, exploitation et support d’un SaaS |
| Maillage et CTA utile            |      10/10 | Liens naturels vers validation, MVP, cahier des charges, reprise et service SaaS                                                   |
| **Total**                        | **92/100** | Sujet maintenu sans estimation de volume                                                                                           |

## 1 bis. Contrat de langage humain

**Terme central :** un SaaS est un logiciel accessible à distance et fourni
comme un service. Le guide se concentre sur un produit destiné à plusieurs
clients : même lorsqu’il commence petit, il faut décider qui peut se connecter,
ce qui arrive aux données, comment un client est aidé et comment le service
continue après une mise à jour.

**Mots du lecteur :** mon idée, première version, premier client, budget,
personne qui répond, retard, bug, paiement, données, reprendre le code, faire
évoluer.

**Jargon à traduire :** product owner, discovery, delivery, DevOps, QA, backlog,
run, vélocité, capacité, architecture, CI/CD, bus factor.

**Projet des 150 premiers mots :** présenter les deux propositions, expliquer
en une phrase ce qui distingue un SaaS d’une maquette, donner le verdict
conditionnel et annoncer la fiche qui permettra d’attribuer chaque
responsabilité avant de comparer le prix.

### Test sujet, action, résultat préparé pour P4

| Formulation abstraite         | Qui agit ?                  | Action                                                         | Résultat                                       | Formulation prévue                                                                                                  |
| ----------------------------- | --------------------------- | -------------------------------------------------------------- | ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| Sécuriser la delivery         | L’équipe nommée             | Transforme une décision en version testée puis publiée         | Le client sait qui accepte la version          | « Demandez qui prépare, teste et met en ligne chaque version, puis qui décide qu’elle peut être utilisée. »         |
| Assurer la continuité         | Le prestataire et le client | Documentent comptes, code et remplacement                      | Le produit peut continuer si une personne part | « Écrivez qui reprend le travail si l’interlocuteur principal devient indisponible. »                               |
| Garder la gouvernance produit | Le dirigeant                | Nomme la personne qui tranche le besoin et les priorités       | Le prestataire ne décide pas seul du produit   | « Désignez dans votre entreprise la personne qui peut dire oui, non ou plus tard à une fonction. »                  |
| Maîtriser la réversibilité    | Les parties                 | Listent les éléments remis et les accès retirés                | Un changement d’équipe devient possible        | « Listez ce que vous récupérez : code, historique, comptes, données, documentation et procédure de mise en ligne. » |
| Comparer à périmètre égal     | Le dirigeant                | Remet la même phase et les mêmes responsabilités aux candidats | Les écarts de prix deviennent explicables      | « Faites chiffrer la même prochaine étape et demandez qui réalise chaque travail. »                                 |

## 2. Cannibalisation

| Page                                     | Intention                                             | Frontière du nouveau guide                                                                                      | Maillage                                                 |
| ---------------------------------------- | ----------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| `agence-web-ou-freelance`                | Comparer deux formats pour un projet web général      | Ici, la décision porte sur la vie d’un produit vendu à plusieurs clients et ses responsabilités après lancement | Lien pour le comparatif général, sans reprendre son plan |
| `choisir-prestataire-application-metier` | Comparer les réponses de prestataires sur un même cas | Ici, déterminer d’abord la forme d’équipe et les responsabilités SaaS par phase                                 | Lien vers l’entretien détaillé                           |
| `mvp-saas-quoi-inclure`                  | Définir la première version exploitable               | Ici, décider qui peut la construire et l’exploiter                                                              | Lien entrant depuis la préparation du MVP                |
| `reprendre-saas-developpe-par-freelance` | Reprendre un produit après le départ d’un développeur | Le nouveau guide intervient avant le choix et utilise ce risque pour rendre les accès explicites                | Lien sortant sur la sortie et la continuité              |
| `/services/saas-applications-metier`     | Intention transactionnelle d’agence SaaS              | Le guide compare honnêtement agence, freelance, hybride et report                                               | CTA seulement après la fiche autonome                    |

**Justification d’une URL distincte :** le corpus ne répond pas encore à la
décision d’équipe propre à un produit multi-client qu’il faudra vendre,
exploiter, aider et faire évoluer.

## 3. Demande qualitative et carte de preuves

La SERP exacte est moins riche que les requêtes générales « agence web ou
freelance » et « développeur SaaS freelance ». Le sujet reste retenu grâce à sa
proximité commerciale et à sa différence SaaS, pas grâce à un volume prétendu.

| Affirmation utilisable                                                                                                                                                                              | Source primaire                                                                                                                                                                                                           | Limite                                                                                                                                                  | Conséquence lecteur                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| La connaissance du marché fournisseur aide à mieux définir le besoin avant de consulter                                                                                                             | [Direction des achats de l’État — guide du sourçage opérationnel 2025](https://www.economie.gouv.fr/files/files/directions_services/dae/doc/Guide_sourcing.pdf)                                                           | Cadre d’achat public utilisé comme méthode de comparaison, pas comme obligation d’une PME privée                                                        | Parler à plusieurs formes d’équipe peut clarifier le besoin avant le devis final                                                        |
| Une cession de droits doit identifier les droits cédés et délimiter leur exploitation                                                                                                               | [Légifrance — article L131-3 du Code de la propriété intellectuelle](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958)                                                                                | L’application concrète au logiciel et au contrat doit être vérifiée par un professionnel compétent                                                      | Ne pas résumer la propriété du code à « j’ai payé, donc tout m’appartient »                                                             |
| Les droits patrimoniaux sur un logiciel créé par un salarié dans l’exercice de ses fonctions sont, sauf dispositions ou stipulations contraires, dévolus à son employeur                            | [Légifrance — article L113-9 du Code de la propriété intellectuelle](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000039279818)                                                                                | Le texte vise les employés ; il ne permet pas de déduire le sort des droits d’un freelance ou d’un sous-traitant, ni de dispenser d’examiner le contrat | Demander à une agence qui produit le code et comment elle sécurise les droits nécessaires avant de les transmettre au client            |
| Lorsque le prestataire traite des données personnelles pour le compte du client, l’article 28 du RGPD prévoit un contrat décrivant notamment objet, durée, nature, finalité, données et obligations | [CNIL — chapitre IV du RGPD, article 28](https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre4)                                                                                                          | La qualification réelle dépend des décisions et traitements ; le prestataire n’est pas toujours sous-traitant pour tout                                 | Identifier les rôles et sous-traitants au lieu d’ajouter une mention générique                                                          |
| La CNIL cite les moyens humains, techniques, la compétence et la fiabilité parmi les garanties à examiner avant de confier un traitement                                                            | [CNIL — identifier responsable et sous-traitant](https://www.cnil.fr/fr/rgpd-comment-bien-identifier-son-role)                                                                                                            | Ne constitue ni certification globale ni classement de prestataires                                                                                     | Demander qui intervient réellement et avec quels accès                                                                                  |
| Dans une organisation GitHub, les rôles de dépôt accordent des droits distincts, du simple accès en lecture jusqu’à l’administration                                                                | [Documentation GitHub — rôles d’un dépôt d’organisation](https://docs.github.com/fr/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization) | Exemple propre à GitHub ; d’autres hébergeurs de code ont leurs propres rôles et réglages                                                               | Conserver un compte administré par l’entreprise lorsque le service le permet, puis donner à chacun le niveau nécessaire au travail réel |

### Catégories d’affirmations

- **Fait vérifié :** un contrat de sous-traitance est requis dans les cas
  couverts par l’article 28 et doit préciser les traitements réels.
- **Fait vérifié :** le paiement d’un développement ne suffit pas à décrire la
  cession de tous les droits ; le contrat doit être lu précisément.
- **Fait vérifié :** l’article L113-9 traite des logiciels créés par des
  employés ; il ne doit pas être étendu par analogie à tous les freelances et
  sous-traitants.
- **Déduction :** le nom « agence » ne prouve pas qu’un remplaçant connaît le
  produit, et le nom « freelance » ne prouve pas que personne ne peut prendre
  le relais.
- **Recommandation Hagnéré Code :** comparer les responsabilités couvertes par
  la prochaine phase avant de comparer le statut et le prix.
- **Recommandation Hagnéré Code :** conserver les comptes structurants au nom
  ou sous l’administration de l’entreprise lorsque le service le permet, et
  documenter les exceptions.

### À ne pas publier

- agence systématiquement plus chère, plus sûre ou plus lente ;
- freelance systématiquement moins cher, plus rapide ou dépendant d’une seule
  personne ;
- nombre minimal de personnes ou de métiers pour construire un SaaS ;
- durée ou prix universel de MVP ;
- affirmation que toute propriété intellectuelle est automatiquement cédée ;
- promesse qu’un dispositif d’équipe élimine le risque de départ ;
- label ou technologie présenté comme preuve suffisante de qualité.

## 4. Empreinte et plan annoté

**Tension motrice :** la question n’est pas « agence ou freelance ? », mais
« qui prend chaque décision et qui continue lorsque le produit rencontre son
premier client, son premier incident et sa première évolution ? »

**Artefact signature :** une carte par phase avec cinq colonnes conceptuelles
rendues en cartes mobiles : décision, responsable, remplaçant, résultat attendu
et élément remis au client.

**Différences avec les voisins :** ouverture par deux propositions
incomparables ; progression chronologique validation → construction → mise en
ligne → exploitation ; aucune grille de notation ; conclusion sous forme de
composition d’équipe, pas de vainqueur général.

| Section                                                               | Question                              | Élément utile                                             | Décision                               | Format                   |
| --------------------------------------------------------------------- | ------------------------------------- | --------------------------------------------------------- | -------------------------------------- | ------------------------ |
| Vous ne choisissez pas un statut, vous choisissez des responsabilités | Quelle est la réponse courte ?        | Deux propositions qui ne couvrent pas les mêmes travaux   | Refuser une comparaison au seul tarif  | Ouverture narrative      |
| Commencez par la prochaine phase de votre SaaS                        | De quoi avez-vous besoin maintenant ? | Validation, première version, lancement, exploitation     | Ne pas acheter une équipe trop tôt     | Quatre situations        |
| Écrivez qui décide, qui réalise et qui contrôle                       | Quels rôles couvrir ?                 | Produit, conception, code, tests, mise en ligne, support  | Repérer les rôles non couverts         | Fiche de responsabilités |
| Regardez les personnes, pas le logo                                   | Que prouve la structure ?             | Noms, disponibilité, relais, sous-traitance               | Vérifier l’équipe réellement proposée  | Questions courtes        |
| Faites rejouer un changement et un incident                           | Comment vérifier la méthode ?         | Une demande de fonction puis un défaut en production      | Observer les traces et responsabilités | Exercice guidé           |
| Comparez le coût de la même phase                                     | Comment lire les devis ?              | Temps client, coordination, tests, exploitation et sortie | Expliquer les écarts avant de choisir  | Cartes comparatives      |
| Gardez code, comptes, données et décisions récupérables               | Comment éviter l’enfermement ?        | Sources CNIL et Légifrance                                | Écrire accès, droits et remise         | Prose sourcée            |
| Choisissez freelance, agence, hybride ou report                       | Quel verdict ?                        | Conditions gagnantes et mauvais fits                      | Décision explicite                     | Quatre cartes            |
| Sources et limites                                                    | Que prouvent les sources ?            | Textes primaires                                          | Faire relire le contrat si nécessaire  | Liste commentée          |

## 5. Ressource, conversion et maillage

La fiche de responsabilités sera visible et copiable ; aucun téléchargement
séparé n’est nécessaire. L’action autonome consiste à remplir la prochaine
phase avant de reprendre les devis.

**Option moins chère :** une mission limitée avec un indépendant expérimenté,
un accompagnement produit séparé ou un court travail de validation peut suffire
avant une équipe plus large. **Option de report :** si personne côté client ne
peut décider du produit ou si le problème n’est pas validé, ne pas lancer le
développement.

**CTA :** « Présenter mon SaaS et l’équipe à couvrir » vers
`/demarrer-un-projet`. Le clic transmet le contexte ; il ne promet ni devis
immédiat, ni estimation gratuite, ni succès commercial.

**Liens sortants :** `valider-idee-saas-avant-developper`,
`mvp-saas-quoi-inclure`, `cahier-des-charges-saas`,
`choisir-prestataire-application-metier`,
`reprendre-saas-developpe-par-freelance`,
`/services/saas-applications-metier`.

**Lien entrant prévu :** ajout dans `mvp-saas-quoi-inclure`, au moment où le
guide répartit les responsabilités avant le premier client.

## 6. Porte P1

- [x] décision unique et audience définies ;
- [x] score supérieur à 70 sans volume inventé ;
- [x] frontière avec agence web, choix du prestataire et reprise SaaS ;
- [x] faits, déductions et recommandations séparés ;
- [x] sources primaires actuelles ;
- [x] progression et artefact propres ;
- [x] bon fit, mauvais fit, option moins chère et report ;
- [x] recherche indépendante intégrée ;
- [x] manifeste P1 créé ;
- [x] journal marqué terminé.

## 7. Rapports P1 à P4

### Rapport P1 — Recherche

```text
PASSE 1 TERMINÉE
Slug : agence-saas-ou-freelance
Lecteur et phrase réelle : fondateur comparant deux organisations ; formulation
de travail issue de la recherche qualitative, pas d’un entretien réel.
Décision : freelance, agence, équipe hybride ou report selon les responsabilités
de la prochaine phase et l’équipe déjà présente côté client.
Angle et forme dominante : attribuer décision, réalisation, contrôle, relais et
élément remis pour chaque responsabilité SaaS.
Pages proches et différence : aucun comparatif web général, aucune grille de
prestataire répétée ; la vie d’un produit multi-client structure la réponse.
Sources décisives : DAE 2025, CNIL article 28, Légifrance L131-3 et L113-9,
documentation GitHub sur les rôles ; consultation le 22 juillet 2026.
Incertitudes exclues : prix, seuil d’équipe, délais de MVP et supériorité d’un
statut.
Action autonome et CTA possible : remplir la carte des responsabilités ; CTA
vers la comparaison de l’équipe nécessaire.
Plan : phase, responsabilités, personnes réelles, changement et incident, coût
complet, comptes/droits, quatre verdicts.
Snapshot : manifests/agence-saas-ou-freelance-p1.sha256
```

### Rapport P2 — Rédaction et intégration

```text
PASSE 2 TERMINÉE
Fichiers créés ou modifiés : page, image sociale dédiée, registre, lien entrant
depuis le guide MVP SaaS et présent dossier.
Ouverture et réponse : deux propositions impossibles à comparer, définition du
SaaS en mots ordinaires, puis verdict freelance, agence, hybride ou report.
Forme propre au sujet : quatre phases, six cartes de responsabilités, deux
scénarios d’entretien et quatre verdicts ; aucune grille agence web réutilisée.
Comparaison : même prochaine phase, temps client, services tiers, travaux
exclus, mise en ligne, support, entretien et sortie, sans tarif de marché.
Sources visibles : DAE 2025, Légifrance L131-3 et L113-9, CNIL article 28 et
GitHub Docs placés à proximité des affirmations concernées.
Action autonome, bon fit et mauvais fit : fiche de responsabilités et deux
scénarios ; possibilité explicite de choisir un freelance ou de reporter.
CTA et destination : un seul CTA après le verdict, vers /demarrer-un-projet,
avec une alternative honnête à l’agence.
Contrôles rapides : Prettier, ESLint ciblé, TypeScript, check:seo 184/184 et git
diff --check réussis.
Snapshot : manifests/agence-saas-ou-freelance-p2.sha256
```

### Rapport P3 — Contre-audit indépendant

```text
PASSE 3 TERMINÉE
Verdict initial : FAIL, 0 P0, 4 P1, score 15/20.
Corrections : définition du SaaS rendue non absolue ; fiche de coût passée à
quatre catégories exclusives avec temps interne séparé ; jargon décisif traduit ;
frontière publique et liens ajoutés vers les deux comparatifs voisins ; CTA et
liens Légifrance précisés.
Deuxième lecture : FAIL, 0 P0, 1 P1 résiduel, score 18/20, car deux formulations
abstraites subsistaient dans les 150 premiers mots.
Revalidation indépendante : PASS, 0 P0, 0 P1, score 19/20 après remplacement par
les actions concrètes « décider quelles fonctions construire », « prévoir un
remplaçant » et « coordonner écrans, développement, paiements, tests et aide ».
Contrôles rejoués : Prettier, ESLint ciblé, TypeScript et git diff --check
réussis.
Limite : aucun test par un lecteur humain réel n’est revendiqué ; le contrôle
visuel en navigateur appartient à P4.
Snapshot : manifests/agence-saas-ou-freelance-p3.sha256
```

### Rapport P4 — Plume humaine et contrôle final

```text
PASSE 4 TERMINÉE
Passe de plume : les derniers termes abstraits signalés par le contre-audit ont
été remplacés par des actions concrètes ; l’ouverture répond avant le sommaire
et les quatre choix restent honnêtes.
Gel commun : une dernière lecture à froid a corrigé une faute qui rendait une
phrase incompréhensible et remplacé les deux occurrences d’« intégrations » par
« connexions avec d’autres logiciels ». Le même auditeur a revalidé le texte à
0 P0, 0 P1 et 0 P2.
Contrôles bloquants : check:seo 184/184, ESLint ciblé, TypeScript, npm test
409/409, build Next.js de production et git diff --check réussis.
Build : 116 routes générées ; artefact de recherche validé avec 100 URL dans le
sitemap, 83 liens dans llms.txt, 100 pages, 58 temps de lecture et 188 blocs
JSON-LD.
Contrôle navigateur réel : 320, 390, 767 et 769 autour du seuil 768, 1024 et
1440 px ; aucun débordement du document, H1 et CTA dans la fenêtre, cartes
empilées à 320 px, rendu large contrôlé et console sans erreur ni avertissement.
Le seuil 768 a été encadré à 767 et 769 px en raison du facteur d’échelle 125 %
du navigateur de contrôle.
Test réalisé par une personne réelle : non.
Décision de publication : autorisée explicitement par le commanditaire sur la
base du processus en quatre passes et du contre-audit indépendant ; cela ne
constitue ni un test lecteur réel ni une garantie d’indexation ou de résultat.
Verdict : publiable — validation éditoriale déléguée.
Score final : 20/20.
Snapshot : manifests/agence-saas-ou-freelance-p4.sha256
```

## 8. Scorecard finale

| Axe         |      Note | Motif de validation                                                                  |
| ----------- | --------: | ------------------------------------------------------------------------------------ |
| Intention   |         2 | Dilemme agence ou freelance placé dans la vie réelle d’un SaaS vendu à des clients   |
| Décision    |         2 | Freelance, agence, équipe composée ou report restent possibles                       |
| Pédagogie   |         2 | Définition simple et responsabilités traduites en actions observables                |
| Profondeur  |         2 | Mise en ligne, clients, incidents, données, droits, coût et relais couverts          |
| Preuve      |         2 | Sources primaires actuelles placées près des affirmations sensibles                  |
| Comparaison |         2 | Même travail et catégories de coût exclusives pour tous les candidats                |
| Originalité |         2 | Responsabilités SaaS et deux incidents concrets, sans recopier le comparatif général |
| Style       |         2 | Ouverture humaine, jargon traduit et cartes lisibles sans tableau mobile             |
| Conversion  |         2 | Action autonome complète puis CTA unique qui explique la destination                 |
| SEO/produit |         2 | Intention distincte, lien entrant, métadonnées et rendu responsive vérifiés          |
| **Total**   | **20/20** | **P0 : 0 ; P1 : 0**                                                                  |
