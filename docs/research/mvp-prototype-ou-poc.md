# Dossier de recherche — `mvp-prototype-ou-poc`

> Dossier reconstruit à partir de la P1 du 4 août 2026. Il remplace le dossier
> historique du 22 juillet 2026 : aucune ancienne preuve, note, date ou
> validation n’a été transférée. La route reste privée, non déployée, non
> publiée et non indexée pendant tout le cycle local.

## A. Identité éditoriale

### A1. Fiche de cadrage

| Champ                              | Décision P1                                                                                                                                                                      |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Slug                               | `mvp-prototype-ou-poc`                                                                                                                                                           |
| Intention principale               | Choisir le plus petit dispositif qui peut lever l’incertitude principale avant un investissement logiciel plus large                                                             |
| Lecteur                            | Dirigeant, responsable métier ou porteur de produit non technique                                                                                                                |
| Question Google naturelle          | « Prototype, POC, pilote ou MVP : que faut-il construire d’abord ? »                                                                                                             |
| Réponse courte                     | On ne choisit pas par vocabulaire ou par chronologie : on écrit la question à trancher, la preuve attendue, le public qui peut la produire et la condition de passage ou d’arrêt |
| Promesse                           | Une matrice à quatre formats, une fiche d’expérience copiable, un cas fictif calculé et trois décisions finales                                                                  |
| Non-promesses                      | Aucun délai, prix, taux de réussite, nombre universel de testeurs, validation de marché, conformité ou ordre obligatoire                                                         |
| Différence avec les guides voisins | Le guide choisit **le type d’expérience** ; il ne valide pas toute l’idée, ne définit pas les fonctions du MVP, ne priorise pas une roadmap et ne choisit pas une équipe         |
| Statut                             | Brouillon privé intégré, non déployé, non publié, non indexé                                                                                                                     |

### A2. Réponse éditoriale gelée

Il n’existe pas de séquence universelle `POC → prototype → pilote → MVP`. Ces
objets peuvent se suivre, se chevaucher, être sautés ou être remplacés par un
test sans logiciel. Le mot retenu ne vaut pas preuve. La décision se prend à
partir de l’inconnue dominante :

- si l’on ignore si une personne comprend ou sait parcourir la solution, un
  **prototype** suffit souvent ;
- si l’on ignore si une contrainte technique délimitée peut être franchie, un
  **POC** est adapté ;
- si l’on ignore si le dispositif tient dans le vrai travail, avec ses rôles,
  ses données, son support et son repli, il faut un **pilote borné** ;
- si l’on doit produire un apprentissage défini sur le comportement des
  personnes visées, on parle ici de **MVP** ; l’usage répété n’est exigé que si
  l’hypothèse porte sur leur retour. La même version peut aussi servir de pilote
  si le périmètre opérationnel reste limité.

Dans tous les cas, la fiche d’expérience doit précéder la construction :
question, cas, public, preuve, condition de passage, condition d’arrêt,
responsable, données et éléments remis.

### A3. Ce que le guide ne doit pas absorber

- Validation complète du problème, de l’acheteur ou du prix :
  `/guides/valider-idee-saas-avant-developper`.
- Contenu opérationnel d’un premier produit :
  `/guides/mvp-saas-quoi-inclure`.
- Priorisation d’un lot de fonctionnalités :
  `/guides/prioriser-fonctionnalites-mvp-saas`.
- Choix entre agence, freelance, interne ou hybride :
  `/guides/agence-saas-ou-freelance`.
- Offre commerciale : `/services/saas-applications-metier`.

## B. Corpus interne relu

### B1. Documents de gouvernance

Lecture intégrale avant écriture :

1. `CLAUDE.md` ;
2. règle d’or SEO/publication ;
3. charte qualité ;
4. workflow maître quatre passes ;
5. instructions de qualité ;
6. roadmap SEO ;
7. registre de coordination ;
8. modèle de dossier ;
9. prompt maître du second orchestrateur, 1 906 lignes ;
10. quatre DOCX sources des passes 1 à 4 ;
11. ancien dossier, ancien historique Git de la page et registre central des
    guides.

Le détail du snapshot et des hashes historiques est conservé dans
`mvp-prototype-ou-poc-input-freeze.md`.

### B2. Empreinte des quatre voisins

| Guide voisin                  | Outil signature                                    | Ce qui serait un doublon ici                                       | Frontière conservée                                                                  |
| ----------------------------- | -------------------------------------------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| Valider une idée SaaS         | Six inconnues, niveaux d’engagement, carte de test | Refaire une méthode complète d’entretiens, prix et engagement      | Le présent guide suppose une question déjà assez précise pour choisir son expérience |
| Que doit contenir un MVP      | Contrat de test en sept familles et moteur local   | Refaire le périmètre fonctionnel ou les calculs de charge manuelle | Ici, le MVP n’est qu’un des quatre formats et son contenu reste à cadrer ailleurs    |
| Prioriser les fonctionnalités | Voies séparées, capacité et score RICE limité      | Classer un backlog                                                 | Ici, on choisit l’instrument de preuve avant le lot                                  |
| Agence ou freelance           | Carte décider–réaliser–contrôler–relayer–remettre  | Comparer des statuts ou une organisation de delivery               | Ici, le responsable est un champ de l’expérience, pas une forme d’équipe             |

Empreinte propre retenue : la **carte objectif–preuve–public–passage**, puis la
**fiche d’expérience en huit champs**. Le cas fictif mesure la couverture d’un
POC ; il ne produit ni ROI, ni score de priorité, ni classement d’équipe.

### B3. Cohérence avec la page service

La page service présente plusieurs offres commerciales de MVP. Le guide ne
reprend ni leurs prix, ni leur contenu comme norme, ni leur durée. Il peut
relier tardivement `/demarrer-un-projet`, en expliquant que la première réponse
peut être un prototype, un POC, un pilote, un test manuel, l’usage d’un outil
existant, un report ou un arrêt. Aucun devis automatique ni disponibilité ne
sont promis.

## C. Recherche externe datée

Recherche ouverte à nouveau le **4 août 2026**. Les sources vivantes ont été
consultées pour leur champ propre. Les résultats commerciaux servent seulement
à inventorier les formulations du marché ; les affirmations factuelles du guide
s’appuient sur des sources primaires ou institutionnelles.

### C1. Sources primaires et institutionnelles retenues

#### 1. GOV.UK Service Manual — Making prototypes

- URL : <https://www.gov.uk/service-manual/design/making-prototypes>
- Publication affichée : 18 octobre 2016 ; page encore accessible le
  4 août 2026.
- Apport : un prototype sert à explorer, partager et tester des conceptions
  avant d’engager la construction ; sa fidélité doit répondre au besoin du
  moment. Le manuel prévient qu’un prototype codé n’a pas nécessairement les
  standards de sécurité, performance ou qualité de la production et ne doit pas
  être copié tel quel en production.
- Limite : prescription pour les services GOV.UK, pas définition universelle
  ni obligation générale en France.

#### 2. GOV.UK Service Manual — How the alpha phase works

- URL :
  <https://www.gov.uk/service-manual/agile-delivery/how-the-alpha-phase-works>
- Apport : l’alpha se concentre sur les hypothèses les plus risquées ; il peut
  ne prototyper qu’une partie difficile. Le passage dépend d’un prototype assez
  substantiel pour décider de poursuivre ou non.
- Limite : les mots alpha et beta appartiennent à ce cadre de delivery ; ils ne
  sont pas transposés en étapes obligatoires du guide.

#### 3. GOV.UK Service Manual — User research in alpha

- URL :
  <https://www.gov.uk/service-manual/user-research/user-research-in-alpha>
- Dernière mise à jour affichée : 3 octobre 2017.
- Apport : tester les concepts avec des personnes susceptibles d’utiliser le
  service et inclure des profils ayant des besoins d’accès ou de support. Le
  parcours étudié doit inclure les interactions hors ligne et l’assistance.
- Limite : aucun nombre universel de participants n’en est déduit.

#### 4. UK Cabinet Office — Testing and piloting services

- URL de synthèse institutionnelle :
  <https://www.procurementpathway.civilservice.gov.uk/documents/best-practice/testing-and-piloting-services-sourcing-playbook/business-need>
- Note liée :
  <https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/987136/Testing_and_piloting_services_guidance_note_May_2021.pdf>
- Apport : les pilotes et autres tests servent à produire un éclairage et des
  preuves sur ce qui fonctionne dans un service, notamment avant des décisions
  d’externalisation ou d’internalisation.
- Limite : corpus de commande publique britannique ; il soutient l’idée d’un
  contexte opérationnel borné, pas une définition contractuelle française du
  mot pilote.

#### 5. EURAXESS — Five major steps for research result valorisation

- URL :
  <https://euraxess.ec.europa.eu/career-development/researchers/manual-major-steps-for-research-valorisation>
- Apport : le vocabulaire des niveaux de maturité place une « experimental
  proof of concept » au TRL 3 et une démonstration de prototype en environnement
  opérationnel au TRL 7. La même ressource décrit le POC comme une démonstration
  de faisabilité.
- Limite : contexte de valorisation de recherche. La coexistence de ces termes
  illustre justement que les frontières dépendent du contexte ; elle ne fournit
  pas un ordre universel pour un produit SaaS.

#### 6. Eric Ries / Lean Startup Co. — What is an MVP?

- URL : <https://leanstartup.co/resources/articles/what-is-an-mvp/>
- Auteur affiché : Eric Ries ; article republié par Lean Startup Co., consulté
  le 4 août 2026.
- Apport : le MVP vise l’apprentissage validé sur les clients avec le moins
  d’effort nécessaire ; l’auteur avertit que le terme ne signifie pas fabriquer
  simplement le plus petit produit possible et cite aussi un test publicitaire
  comme moyen d’apprendre plus tôt.
- Limite : cadre Lean Startup, ni norme juridique, ni garantie commerciale, ni
  exigence que tout MVP soit un logiciel entièrement automatisé. Cette source
  ne permet pas non plus d’imposer un usage réel répété à tout MVP : la répétition
  devient nécessaire uniquement lorsque l’hypothèse testée porte sur le retour.

#### 7. CNIL — Sécurité : encadrer les développements informatiques

- URL :
  <https://www.cnil.fr/fr/securite-encadrer-les-developpements-informatiques>
- Date affichée : 14 mars 2024 ; consultée le 4 août 2026.
- Apport : intégrer sécurité et protection des données dès la conception,
  séparer développement/test de la production et privilégier des données
  fictives ou anonymisées. Lorsque des données réelles sont nécessaires en
  préproduction, la CNIL demande un environnement sécurisé comme la production
  et des tests préalables.
- Limite : la fiche ne déclare aucun prototype ou POC conforme par lui-même ;
  anonymiser véritablement ne signifie pas simplement pseudonymiser.

#### 8. Légifrance — Code de la propriété intellectuelle

- Article L131-3 :
  <https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958>
- Article L113-9 :
  <https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000039279818>
- Apport : la transmission des droits d’auteur doit identifier les droits et
  délimiter leur exploitation ; le régime cité pour les logiciels créés par des
  employés s’applique dans les conditions précises de L113-9.
- Limite : ces articles ne règlent pas seuls les prestataires, composants tiers,
  licences, données, marques, secrets ou contrats particuliers. Le guide invite
  à inventorier les actifs et à faire qualifier le cas, sans donner d’avis
  juridique.

#### 9. CNIL — L’anonymisation de données personnelles

- URL :
  <https://www.cnil.fr/fr/technologies/lanonymisation-de-donnees-personnelles>
- Date affichée : 19 mai 2020 ; consultée le 4 août 2026.
- Apport : une anonymisation effective rend l’identification impossible en
  pratique et de manière irréversible. Remplacer les identifiants directs par
  des codes correspond généralement à une pseudonymisation ; les données
  restent alors personnelles.
- Limite : aucune méthode universelle ne garantit l’anonymisation. Le choix et
  la vérification dépendent du jeu, des recoupements possibles et de l’usage.

#### 10. CNIL — Licéité et bases légales prévues par le RGPD

- URL :
  <https://www.cnil.fr/fr/les-bases-legales/liceite-essentiel-sur-les-bases-legales>
- Page vivante consultée le 4 août 2026.
- Apport : une base légale doit être choisie avant le traitement, pour chaque
  finalité, parmi les bases applicables au cas. Le consentement n’est ni
  automatique, ni hiérarchiquement supérieur aux autres bases.
- Limite : le guide ne choisit jamais la base légale à la place du responsable
  de traitement ou de son conseil ; il exige seulement que cette décision soit
  prise et documentée avant le test.

### C2. Observation non exhaustive des résultats commerciaux

Requêtes observées le 4 août 2026 : « MVP prototype POC différences choisir
guide français agence SaaS » et « prototype POC pilote MVP différence produit
logiciel France ».

| Résultat observé                                                | Angle visible                                      | Limite utile au guide                                                                                                       |
| --------------------------------------------------------------- | -------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| Asana, « Proof of concept : guide pratique en 5 étapes [2026] » | Tableau POC / prototype / MVP, durée et public     | Présente les trois objets comme des étapes ; les durées génériques ne sont pas reprises                                     |
| Asana, « MVP : définition, exemples et guide complet [2026] »   | Tableau MVP / POC / prototype / maquette           | Les colonnes visibles attribuent des rôles différents du premier article Asana ; preuve que l’étiquette seule ne suffit pas |
| Hostinger, « Prototype vs MVP »                                 | Séquence explicite POC → prototype → MVP → produit | Le guide Hagnéré Code doit contredire l’ordre universel et réintroduire le pilote                                           |
| Polara Studio, glossaire MVP                                    | Définition courte et mise en production réelle     | Utile pour l’intention de recherche, insuffisant pour choisir le test et écrire son arrêt                                   |
| SuperForge, « Différence entre POC, MVP et prototype »          | Exemple SaaS et distinctions synthétiques          | Peu de place visible pour public, preuve contraire, remise et arrêt                                                         |
| Space-O Technologies, guide 2026                                | Tableau, coûts et calendrier                       | Vocabulaire abondant mais fourchettes non transposables sans périmètre comparable                                           |

Constats : le tableau comparatif est attendu ; le pilote, les conditions
d’arrêt, les données, la remise et la possibilité de ne rien construire sont
souvent absents. Le guide doit répondre rapidement, puis aller plus loin avec
une fiche de preuve exploitable. Aucun volume de recherche ou classement n’est
déduit de cette observation.

## D. Architecture d’information

### D1. Parcours retenu

1. **Réponse directe** — choisir par inconnue, pas par ordre.
2. **Matrice** — objectif, preuve attendue, public et condition de passage pour
   les quatre formats.
3. **Fiche d’expérience** — huit champs à remplir avant toute construction.
4. **Prototype** — interaction et compréhension ; limites de fidélité et de
   sécurité.
5. **POC** — faisabilité technique sur un cas et un seuil définis.
6. **Pilote** — rôles, données, assistance, exploitation et repli dans un cadre
   réel borné.
7. **MVP** — apprentissage client défini, sans confondre « minimum », usage
   répété universel et produit négligé.
8. **Cas fictif** — même besoin, quatre inconnues, calcul d’un POC.
9. **Décision** — poursuivre, refaire un test plus petit, reporter ou arrêter ;
   inventaire de remise.
10. **FAQ visible** — huit questions, sans `FAQPage` ni `HowTo`.

### D2. Matrice signature

| Format    | Question dominante                                                                    | Preuve attendue                                                                 | Public capable de répondre                                                                                      | Condition de passage écrite avant le test                                                                                                  |
| --------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Prototype | « La personne comprend-elle et sait-elle parcourir ce scénario ? »                    | Comportements observés sur des tâches précises, incompréhensions et corrections | Personnes représentatives du rôle étudié, y compris besoins d’accès pertinents                                  | Les tâches critiques sont comprises, ou les incompréhensions restantes sont explicitement acceptées pour le test suivant                   |
| POC       | « Cette contrainte technique précise est-elle franchissable ? »                       | Mesures reproductibles sur le cas borné, erreurs et limites                     | Équipe technique + responsable métier capable de valider le cas                                                 | Le seuil écrit est atteint sur le corpus prévu et les limites sont documentées ; sinon arrêt ou nouvelle hypothèse                         |
| Pilote    | « Le dispositif tient-il dans le vrai travail borné ? »                               | Usage, erreurs, interventions, charge, incidents, support et repli observés     | Groupe autorisé dans un contexte opérationnel défini                                                            | Les critères d’usage et d’exploitation sont atteints sans STOP ; sinon retour arrière ou réduction                                         |
| MVP       | « Quel comportement des personnes visées doit produire l’apprentissage qui manque ? » | Usage, engagement, refus, sortie ou retour, selon le signal écrit dans la fiche | Personnes correspondant au public visé, face à une expérience assez crédible pour interpréter leur comportement | Le signal défini avant le test est observé ; s’il porte sur le retour, l’usage est réellement répété ; sinon modifier, reporter ou arrêter |

Les formulations sont une convention éditoriale Hagnéré Code, pas une
taxonomie officielle. Un MVP limité à une équipe peut être **aussi** un pilote :
la fiche garde alors deux questions et deux conditions distinctes.

### D3. Fiche d’expérience en huit champs

```text
1. Décision que ce test doit rendre possible :
2. Inconnue principale et hypothèse que le test peut contredire :
3. Cas précis inclus / cas explicitement exclus :
4. Personnes capables de produire la preuve :
5. Événement ou mesure observé, avec méthode de collecte :
6. Condition de passage / condition d’arrêt :
7. Responsable, données, accès, sécurité et repli :
8. Éléments remis : résultats, limites, code ou maquette, accès et prochaine décision :
```

Le champ 6 ne peut pas être remplacé par « retours positifs ». Le champ 7 ne
peut pas être remplacé par « voir plus tard ». Toute inconnue matérielle reste
visible et affectée à une prochaine vérification.

### D4. Valeur, effort et risque sans faux tarif

La comparaison économique ne publie aucune moyenne. Elle part de la décision
que la preuve doit autoriser, puis inventorie cinq familles : préparation et
construction ; participation des personnes ; données et exploitation ; sortie
et remise ; travaux du test suivant. La valeur n’est pas le nombre de fichiers
produits, mais l’investissement, l’engagement ou la voie que la preuve permet
d’accepter, réduire ou refuser. Toute charge ou tout prix absent reste « à
cadrer » avec un responsable ; il ne devient pas zéro.

## E. Registre des affirmations

| ID  | Affirmation publique prévue                                                                                     | Preuve                                               | Niveau                                           | Formulation / limite                                                    |
| --- | --------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- | ------------------------------------------------ | ----------------------------------------------------------------------- |
| F01 | Un prototype sert à explorer et tester une conception avant la construction de production                       | GOV.UK Making prototypes                             | Élevé dans ce cadre                              | « peut servir », pas obligation universelle                             |
| F02 | Le code d’un prototype ne doit pas être supposé prêt pour la production                                         | GOV.UK Making prototypes                             | Élevé                                            | Standards différents possibles ; audit nécessaire avant réemploi        |
| F03 | Une expérience utile cible d’abord l’hypothèse risquée                                                          | GOV.UK alpha                                         | Élevé dans ce cadre                              | Principe de cadrage, pas séquence imposée                               |
| F04 | Un POC cherche une preuve de faisabilité                                                                        | EURAXESS                                             | Moyen à élevé                                    | Contexte de valorisation de recherche, définition opérationnelle locale |
| F05 | Un pilote produit des preuves sur ce qui fonctionne dans un service réel borné                                  | Cabinet Office                                       | Moyen à élevé                                    | Contexte public britannique ; pas qualification juridique française     |
| F06 | Un MVP cherche un apprentissage validé sur les clients avec l’effort nécessaire                                 | Eric Ries / Lean Startup Co.                         | Source d’origine de la notion                    | Pas garantie d’adoption ; l’usage répété dépend de l’hypothèse          |
| F07 | Les tests doivent privilégier des données fictives ou anonymisées et un environnement distinct de la production | CNIL                                                 | Élevé pour la recommandation                     | Le besoin de données réelles exige un examen spécifique                 |
| F08 | Payer une prestation ne suffit pas à déduire tous les droits sur tous les actifs                                | L131-3 + L113-9                                      | Élevé sur les textes, qualification contextuelle | Inventaire + conseil juridique si enjeu matériel                        |
| F09 | Aucun ordre universel n’est démontré                                                                            | Comparaison des cadres + contradictions SERP         | Conclusion éditoriale                            | Dire « le guide ne l’impose pas », pas « aucun ordre n’existe jamais »  |
| F10 | Un MVP peut aussi être exploité comme pilote                                                                    | Déduction des dimensions distinctes usage / contexte | Inférence explicite                              | « peut », si les deux questions et critères sont suivis séparément      |
| F11 | Des données pseudonymisées restent des données personnelles                                                     | CNIL, anonymisation                                  | Élevé                                            | Ne jamais appeler « anonymes » des données seulement codées             |
| F12 | La base légale d’un traitement est choisie avant sa mise en œuvre, finalité par finalité                        | CNIL, licéité                                        | Élevé sur le principe                            | Le guide ne choisit pas la base applicable au cas                       |

### E1. Affirmations interdites sans nouvelle preuve

- « Un POC dure X semaines » ou « coûte X euros ».
- « Il faut N utilisateurs ».
- « Le POC vient toujours avant le prototype ».
- « Un MVP est nécessairement public, payant ou entièrement automatisé ».
- « Un prototype est sécurisé » ou « son code est jetable par définition ».
- « Le pilote valide le marché ».
- « X % de réussite prouve une faisabilité générale ».
- « Hagnéré Code transfère automatiquement tous les droits » : dépend du devis,
  des CGV, des auteurs, licences et actifs concernés.

## F. Cas calculé, contre-cas et limites

### F1. Scène fictive

Entreprise fictive **Lys Documents** : une PME veut réduire les ressaisies de
factures fournisseurs. Aucun client, délai, tarif, performance réelle ou
résultat Hagnéré Code n’est associé à ce scénario.

L’équipe sait déjà que les opérateurs comprennent le parcours. Son inconnue
dominante est plus étroite : « sur le corpus choisi, l’extraction restitue-t-elle
exactement quatre champs critiques ? ». Elle choisit un POC, pas un MVP.

Hypothèses fictives, décidées avant le test :

- 40 documents autorisés, diversifiés selon les formats connus ;
- 4 champs critiques par document : fournisseur, numéro, date, total TTC ;
- un champ est correct seulement s’il correspond exactement à la valeur de
  référence ;
- passage fictif si au moins 152 champs sur 160 sont exacts **et** si aucun
  document hors périmètre n’est présenté comme couvert ;
- arrêt si le corpus de référence est incomplet, si un document contient des
  données non autorisées ou si le résultat n’est pas reproductible.

Calcul :

```text
contrôles prévus = 40 documents × 4 champs = 160 contrôles
contrôles exacts observés (fictifs) = 153
taux de champs exacts = 153 ÷ 160 × 100 = 95,625 %
contrôle inverse = 153 exacts + 7 inexacts = 160
seuil fictif = 152 ÷ 160 × 100 = 95 %
écart au seuil = 153 − 152 = 1 contrôle
```

Verdict limité : le seuil fictif est dépassé d’un contrôle sur **ce corpus et
ces quatre champs**. Cela ne prouve ni performance en production, ni capacité à
traiter d’autres documents, ni sécurité, ni coût acceptable, ni adoption. Le
calcul global est exact, mais la répartition des sept erreurs par champ et par
document n’est pas fournie dans le scénario. Elles pourraient être concentrées
sur le total TTC ou sur quelques factures : le taux agrégé ne permet donc pas de
conclure sur chaque champ ni de compenser un cas bloquant. Avant d’envisager un
pilote, la décision reste de ventiler les sept erreurs, d’appliquer les critères
critiques écrits avant le test et, si nécessaire, de refaire un POC plus étroit.

### F2. Contre-cas du même besoin

| Inconnue réellement dominante                                                                       | Dispositif plus juste                                | Pourquoi                                                                  |
| --------------------------------------------------------------------------------------------------- | ---------------------------------------------------- | ------------------------------------------------------------------------- |
| Les opérateurs ne comprennent pas comment corriger un champ                                         | Prototype cliquable avec tâches de correction        | Une précision technique ne répondrait pas à l’incompréhension du parcours |
| Les quatre champs ne sont pas extractibles sur le corpus                                            | POC borné                                            | La faisabilité doit être mesurée avant l’exploitation                     |
| L’extraction marche, mais on ignore qui corrige, qui répond et comment revenir à la saisie manuelle | Pilote dans une équipe autorisée                     | La question porte sur le vrai travail et le repli                         |
| Le service tient, mais on ignore si les équipes reviennent l’utiliser pour traiter leurs factures   | MVP exploitable, éventuellement déployé comme pilote | L’usage répété devient la preuve recherchée                               |
| Le processus lui-même change chaque semaine                                                         | Observation, entretien et test manuel avant logiciel | Construire figerait une hypothèse encore instable                         |

### F3. Stress tests oubliés à rendre visibles

- Une source indispensable est indisponible : le résultat devient-il
  « inconnu » ou est-il silencieusement compté comme échec/succès ?
- Le volume double : le dispositif mesure-t-il seulement l’algorithme ou aussi
  la charge humaine ?
- Une personne exerce un droit ou souhaite quitter le test : quel droit
  s’applique réellement, qui traite la demande et que prévoit le cadre de
  conservation ? Un retrait ne signifie pas automatiquement effacement dans
  tous les cas.
- Un testeur utilise un lecteur d’écran ou uniquement le clavier : le prototype
  est-il compatible avec la question posée ?
- Le POC réussit grâce à une intervention manuelle non déclarée : la preuve
  change-t-elle de nature ?
- Le pilote exige des données réelles : pourquoi les données fictives ou
  anonymisées ne suffisent-elles pas et qui autorise le traitement ?
- Les noms ont seulement été remplacés par des identifiants : le jeu est-il
  pseudonymisé plutôt qu’anonymisé, et reste-t-il traité comme donnée
  personnelle ?
- Le code du prototype contient un secret ou un composant sans licence claire :
  le livrable est-il réellement transférable ?
- Le responsable de la décision quitte le projet : qui peut accepter le
  résultat et sur quelle trace ?

## G. Contrat de page P1

### G1. Métadonnées locales privées

Proposition temporaire, tant que `src/lib/guides.ts` reste hors périmètre :

- title : `Prototype, POC, pilote ou MVP : que choisir ?` ;
- card / OG : `Prototype, POC, pilote ou MVP ?` ;
- description : `Choisissez le test adapté à l’inconnue à lever : prototype, preuve de concept, pilote ou MVP, avec preuve, personnes, passage et arrêt.` ;
- canonical :
  `https://hagnere-code.ai/guides/mvp-prototype-ou-poc` ;
- robots : `noindex, nofollow` via `PRIVATE_ROBOTS` ;
- schémas P1 : `Article` sans date inventée + `BreadcrumbList`, jamais
  `FAQPage`, `HowTo`, `Review`, `Product` ou `SoftwareApplication`.

Après le GO P4, l’orchestrateur d’intégration partagée devra ajouter l’entrée
centrale et remplacer la configuration locale par `buildGuideMetadata` et
`buildGuideStructuredData`. Aucun agent slug-only ne ferme le registre, les
dates ou le temps de lecture. La **vraie** `datePublished` restera STOP jusqu’à
preuve de première publication ; `dateModified` devra correspondre au snapshot
substantiel réellement intégré.

### G2. Visuels originaux

1. `objectif-preuve-public-passage-16x9.svg` — les quatre formats sur quatre
   questions, avec les personnes capables de produire la preuve ;
2. `fiche-experience-4x3.svg` — huit champs et séparation preuve / décision ;
3. `poursuivre-reduire-arreter-1x1.svg` — trois sorties sans faux score.

Ils sont explicatifs, accessibles par `title` et `desc`, sans interface fictive
de client ni chiffres de performance.

### G3. CTA et maillage

- Un seul CTA projet, tardif : `/demarrer-un-projet`.
- Pas de CTA de téléphone, pas de sidebar commerciale, pas de CTA dans la FAQ.
- Texte transparent : apporter la fiche et l’inconnue ; la réponse peut être un
  test plus petit, un outil existant, un report ou un arrêt ; aucun devis ou
  délai automatique.
- Liens voisins : validation d’idée, contenu du MVP, priorisation du lot et
  choix d’équipe.

## H. Matrice de couverture P1

| Exigence                                     | Couverture P1                                         | État P1                   |
| -------------------------------------------- | ----------------------------------------------------- | ------------------------- |
| Réponse concrète avant 150 mots              | Hero + première section                               | Contrôlé statiquement     |
| Matrice objectif / preuve / public / passage | Section 2 + SVG 16:9                                  | Implémentée et testée     |
| Pas d’ordre universel                        | Hero, matrice, FAQ, tests                             | Implémenté et testé       |
| Prototype / POC / pilote / MVP               | Sections propres + contre-cas                         | Implémenté et testé       |
| Alternative sans construction                | Réponse, contre-cas, décision                         | Implémentée et testée     |
| Calcul transparent                           | 40 × 4, 153/160, inverse, seuil, limites              | Rejoué statiquement       |
| Répartition des erreurs                      | 7 erreurs à ventiler par champ/document avant pilote  | Implémentée et testée     |
| Données / sécurité                           | Section fiche + CNIL + FAQ                            | Implémenté et testé       |
| Pseudonymisation / base légale               | Pilote + sources CNIL                                 | Implémentée et testée     |
| Droits / remise                              | Section décision + Légifrance + FAQ                   | Implémenté et testé       |
| Inconnues non transformées en zéro           | Fiche, cas, tests                                     | Implémenté et testé       |
| FAQ visible sans rich result                 | 8 questions                                           | Rendue statiquement · 8/8 |
| CTA tardif transparent                       | 1 lien `/demarrer-un-projet`                          | Contrôlé statiquement     |
| 3 SVG accessibles                            | 16:9, 4:3, 1:1                                        | Implémentés · XML 3/3     |
| Metadata privée sans fausse date             | Config locale privée                                  | Contrôlée statiquement    |
| Recherche source près des affirmations       | Sources du layout + liens dans les sections sensibles | Implémentée et testée     |

## I. STOPs et inconnues transmis à P2

1. `datePublished` inconnue : STOP publication, aucun substitut P1.
2. Entrée #31 absente de `src/lib/guides.ts` : intégration partagée future.
3. Aucun dirigeant ou utilisateur réel n’a relu la matrice : P2 doit challenger
   les cas où le vocabulaire pourrait sembler normatif.
4. Le seuil 95 % est entièrement fictif et ne doit jamais devenir référence
   générale.
5. La recherche concurrentielle est non exhaustive et sans volume SEO.
6. La protection des données, les droits et la sécurité restent à qualifier sur
   le cas réel ; aucune conformité n’est déclarée.
7. P2 devra vérifier que le lecteur comprend qu’un MVP peut aussi être un
   pilote, sans fusionner leurs deux preuves.
8. Après G3, l’orchestrateur devra contrôler au navigateur le tableau mobile,
   le reflow, les SVG, le clavier, les thèmes, le print et l’absence du CTA en
   impression ; ces preuves ne sont pas produites par l’agent rédactionnel P3.
9. P4 devra revalider les faits vivants, la plume et la cohérence du candidat
   slug-only. Il ne ferme ni le registre central, ni `datePublished`, ni
   `dateModified`, ni `readTimeMin`, ni la publication. Après GO P4, ces points
   et leurs preuves relèvent exclusivement de l’orchestrateur d’intégration ;
   une build locale ne prouvera ni déploiement, ni publication, ni indexation.

## J. Journal P1

- Snapshot Git, historique et périmètre gelés avant édition.
- Gouvernance, ancien dossier, ancienne page, quatre DOCX et corpus voisin lus.
- Recherche web primaire et SERP refaite le 4 août 2026.
- Taxonomie traitée comme convention opérationnelle et non norme.
- Architecture différenciée des quatre guides voisins.
- Première implémentation contrôlée ; tests ciblés et manifeste exact rejoués.

## K. Rapport de fermeture P1

```text
PASSE_1_TERMINEE
Vitest ciblé : 12/12
TypeScript : npx tsc --noEmit — vert
ESLint ciblé : vert
Prettier ciblé : vert
XML des SVG : 3/3
Rendu statique React : vert
Manifeste P1 : 7/7
Espaces finaux, y compris fichiers untracked : aucun
HEAD : d4a7fb58b44e46314156e60cd580c45a4224021d — inchangé
Git : aucun git add, commit ou push
Release : aucun deploy, déploiement, publication ou indexation
```

Ce rapport clôt uniquement la production P1 et ses contrôles statiques. Il ne
constitue ni la porte G1 de l’orchestrateur, ni un BAT navigateur, ni une preuve
publique.

## L. Idéation contradictoire P2

Relecture recommencée sans suivre le plan P1, le **4 août 2026** :

| Perspective             | Question contradictoire                                                                               | Statut P2           | Localisation ou justification                                                                                                               |
| ----------------------- | ----------------------------------------------------------------------------------------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Lecteur débutant        | « Un MVP exige-t-il toujours que les personnes reviennent utiliser le service ? »                     | `AJOUTEE → COUVERT` | Réponse, matrice, section MVP et SVG : l’apprentissage dépend de l’hypothèse ; la répétition n’est requise que pour tester le retour        |
| Lecteur prêt à agir     | « Le score 153/160 cache-t-il un champ ou des documents qui échouent systématiquement ? »             | `AJOUTEE → COUVERT` | Cas Lys Documents : ventilation des sept erreurs exigée avant pilote                                                                        |
| Autre profil            | « Les personnes ayant des besoins d’accès et celles qui assurent l’assistance sont-elles incluses ? » | `DEJA_COUVERTE`     | Prototype, public de preuve, source GOV.UK et pilote                                                                                        |
| Scénario dégradé        | « Que devient la conclusion si le volume double ou si une dépendance tombe ? »                        | `DEJA_COUVERTE`     | Stress test du cas et table du pilote                                                                                                       |
| Cas inverse             | « Si le processus change encore chaque semaine, faut-il vraiment construire ? »                       | `DEJA_COUVERTE`     | Contre-cas sans logiciel et réponse directe                                                                                                 |
| Solution opposée        | « Un entretien, un test manuel ou une fonction déjà payée suffit-il ? »                               | `DEJA_COUVERTE`     | Héros, réponse, matrice et CTA                                                                                                              |
| Chronologie             | « Un POC ou un pilote vert autorise-t-il directement plusieurs sites ou deux fois plus de volume ? »  | `AJOUTEE → COUVERT` | Décision : tout élargissement ouvre une nouvelle expérience avec mesure et repli                                                            |
| Contradiction données   | « Des noms remplacés par des codes sont-ils vraiment anonymes ? »                                     | `AJOUTEE → COUVERT` | Pilote + source CNIL : pseudonymisation encore soumise au RGPD                                                                              |
| Contradiction juridique | « Faut-il toujours recueillir le consentement pour tester ? »                                         | `AJOUTEE → COUVERT` | Pilote + source CNIL : base légale choisie au cas par cas avant traitement                                                                  |
| Droits des personnes    | « Quitter le test impose-t-il toujours l’effacement immédiat ? »                                      | `ECARTEE_JUSTIFIEE` | Le dossier retire cet automatisme ; la réponse dépend du droit exercé, de la base et du cadre de conservation, à faire qualifier sur le cas |
| Autonomie               | « Puis-je préparer la prochaine décision sans contacter l’agence ? »                                  | `DEJA_COUVERTE`     | Fiche d’expérience copiable, quatre sorties et inventaire de remise                                                                         |

Aucun angle matériel ne reste `BLOQUANT` dans cette boucle. La date de première
publication, le registre central et la validation par un lecteur humain restent
des STOPs d’intégration ou de qualité, pas des lacunes à remplir en P2.

## M. Contre-audit des affirmations et calculs P2

### M1. Cartographie et verdicts

- **12 affirmations contrôlées** dans le registre F01 à F12 ;
- **3 corrections matérielles** : portée du MVP, portée du taux agrégé du POC,
  et qualification données/base légale ;
- **1 formulation retirée comme règle universelle** : « tout MVP exige un usage
  réel répétable » ;
- **0 prix, délai, taux de réussite réel ou nombre de testeurs ajouté** ;
- **0 fait Hagnéré Code, client, devis, témoignage ou résultat commercial
  ajouté**.

### M2. Recalcul indépendant du scénario fictif

```text
40 × 4 = 160 contrôles
153 / 160 = 0,95625 = 95,625 %
160 − 153 = 7 erreurs
152 / 160 = 0,95 = 95 %
153 − 152 = 1 contrôle au-dessus du seuil
```

Les opérations P1 sont exactes. La contradiction P2 porte sur leur portée : la
moyenne agrégée ne donne aucune répartition par champ ou document. La décision
visible exige désormais cette ventilation et l’examen des cas bloquants avant
un pilote.

### M3. Sources vivantes ouvertes en P2

- GOV.UK `Making prototypes`, `How the alpha phase works` et `User research in
alpha` : accessibles, périmètre public britannique conservé ;
- UK Cabinet Office / Procurement Pathway : accessible, conseil juridique et
  commercial propre aux marchés concernés conservé comme limite ;
- EURAXESS : page de valorisation et page TRL accessibles, contexte de recherche
  et variations sectorielles confirmés ;
- Eric Ries / Lean Startup Co. : définition et réserves relues ; la page source
  ne fonde pas une exigence universelle d’usage répété ;
- CNIL, développement informatique : environnement séparé, données fictives ou
  anonymisées, préproduction réelle sécurisée comme la production et tests
  préalables confirmés ;
- CNIL, anonymisation : distinction irréversible avec la pseudonymisation
  confirmée ;
- CNIL, licéité : base légale avant traitement, finalité par finalité et sans
  primauté automatique du consentement confirmée ;
- Légifrance L131-3 et L113-9 : textes en vigueur et limites salariés/cession
  confirmées.

### M4. Risques résiduels transmis

1. `datePublished` reste inconnue et bloque toute publication réelle.
2. L’entrée centrale, le temps de lecture, le maillage entrant et la redirection
   restent hors périmètre slug-only.
3. Aucun lecteur humain n’a encore testé la reformulation et l’usage de la
   fiche.
4. Le scénario fictif ne fournit volontairement pas la répartition des sept
   erreurs ; le guide en fait désormais une donnée à obtenir, pas un zéro ou une
   conclusion inventée.
5. Les bases légales, droits, licences et mesures de sécurité restent à choisir
   sur le cas réel avec les responsables compétents.

## N. Journal et rapport de fermeture P2

- Agent distinct : `mvp_poc_p2`.
- État d’entrée : G1 `GO_PASSE_2`, manifeste P1 conservé en lecture seule.
- Fichiers modifiés : dossier, page, test et SVG 16:9 de la matrice.
- Fichiers relus mais inchangés : image Open Graph et deux SVG 4:3 / 1:1.
- Affirmations corrigées : portée du MVP, agrégation du calcul, vocabulaire et
  cadre des données personnelles.
- Affirmations retirées : usage réel répété comme condition universelle du MVP.
- Calculs : cinq opérations reproduites ; aucune valeur P1 modifiée.
- Tests non exécutés par P2 : build complet et BAT navigateur, réservés à
  l’orchestrateur selon le périmètre confié.
- Risques : STOPs M4 transmis sans les fermer artificiellement.

```text
PASSE_2_TERMINEE
Affirmations contrôlées : 12
Affirmations corrigées : 3
Affirmations retirées : 1 règle universelle non soutenue
Contre-sources : Ries sur la portée non formule du MVP ; CNIL anonymisation, pseudonymisation et bases légales
Calculs reproduits : 40 × 4 ; 153/160 ; 160 − 153 ; 152/160 ; 153 − 152
Cas limites : erreurs concentrées, volume doublé, dépendance indisponible, élargissement, données pseudonymisées
Enrichissements décisifs : apprentissage MVP conditionnel ; ventilation des erreurs ; passage à l’échelle comme nouveau test
Risques résiduels : datePublished, intégration partagée, lecteur humain, qualification juridique/sécurité du cas réel
Vitest ciblé : 12/12
TypeScript : npx tsc --noEmit — vert
ESLint ciblé : vert
Prettier ciblé : vert
XML des SVG : 3/3
Rendu statique React : vert
Manifeste P2 : 7/7
Espaces finaux, y compris fichiers untracked : aucun
HEAD : d4a7fb58b44e46314156e60cd580c45a4224021d — inchangé
Git : aucun git add, commit ou push
Release : aucun deploy, déploiement, publication ou indexation
Manifeste P2 : docs/research/manifests/mvp-prototype-ou-poc-p2.sha256
```

Ce rapport clôt uniquement la production P2 et ses contrôles ciblés. Il ne
constitue ni la porte G2 de l’orchestrateur, ni un BAT navigateur, ni une preuve
publique.

## O. Polish rédactionnel et rapport de fermeture P3

- Agent distinct : `mvp_poc_p3`.
- État d’entrée : G2 `GO_PASSE_3`, snapshot P2 relu en entier ; freeze et
  manifestes P1/P2 conservés en lecture seule.
- Problèmes de lisibilité corrigés : réponse d’ouverture allégée, sigles POC et
  MVP développés dès l’entrée, H2 raccourcis, bloc CNIL séparé en trois idées et
  cas calculé réparti en paragraphes plus courts.
- Jargon retiré ou défini dans le visible : « public de preuve », « taxonomie »,
  « hypothèse falsifiable », « corpus », « repli » et « STOP » ont été remplacés
  par personnes à observer, règle universelle, hypothèse que le test peut
  contredire, jeu d’essai, retour au fonctionnement précédent et condition
  d’arrêt. La pseudonymisation, la base légale et la préproduction restent
  présentes, avec une explication immédiate.
- Transitions et cohérence : héros, réponse directe, matrice, fiche, sections des
  quatre formats, décision, CTA, metadata, image OG et trois SVG emploient la
  même logique inconnue → personnes → preuve → passage ou arrêt.
- FAQ : les réponses sur le niveau de détail du prototype, le réemploi du code
  et les droits répondent désormais dès leur première phrase, sans renforcer
  une promesse.
- Faits laissés inchangés : les 12 affirmations F01 à F12, les sources, dates,
  périmètres et cinq opérations du scénario fictif n’ont reçu aucun fait neuf.
- Nuances protégées : le MVP vise un apprentissage client et le retour répété
  seulement si l’hypothèse le demande ; les sept erreurs doivent être ventilées
  avant pilote ; pseudonymisation, anonymisation et base légale restent
  distinctes ; tout élargissement ouvre un nouveau test ; aucune norme
  universelle, conformité, prix, délai ou performance n’est affirmé.
- Fichiers modifiés : dossier, page, OG, test et trois SVG propres au slug.
- Contrôles non exécutés par P3 : build complet et BAT navigateur réel, réservés
  à l’orchestrateur après G3.

```text
PASSE_3_TERMINEE
Problèmes de lisibilité corrigés : ouverture allégée ; H2 raccourcis ; paragraphes CNIL et calcul séparés
Jargon retiré ou défini : POC et MVP développés ; public de preuve, corpus, repli, STOP et taxonomie remplacés ; base légale et préproduction expliquées
Transitions : logique inconnue → personnes → preuve → passage ou arrêt harmonisée du héros au CTA
FAQ : trois premières réponses rendues plus directes ; portée juridique et technique inchangée
Faits laissés inchangés : 12 affirmations, 10 sources, cinq opérations et scénario fictif sans fait neuf
Nuances protégées : apprentissage MVP conditionnel ; sept erreurs à ventiler ; données/base légale ; élargissement = nouveau test ; aucune norme universelle
Vitest ciblé P3 : 13/13
TypeScript : npx tsc --noEmit — vert
ESLint ciblé : vert
Prettier ciblé, types supportés : vert
XML des SVG : 3/3
Rendu statique React : vert
Manifeste P3 : 7/7
Espaces finaux, y compris fichiers untracked : aucun
HEAD : d4a7fb58b44e46314156e60cd580c45a4224021d — inchangé
Git : aucun git add, commit ou push
Release : aucun deploy, déploiement, publication ou indexation
Manifeste P3 : docs/research/manifests/mvp-prototype-ou-poc-p3.sha256
```

Ce rapport clôt uniquement la production P3 et ses contrôles ciblés. Il ne
constitue ni la porte G3 de l’orchestrateur, ni un BAT navigateur, ni une preuve
publique.

## P. Antipasse IA et rapport de fermeture P4

### P1. Motifs repérés et corrections bornées

- **Symétrie de l’ouverture** : les quatre formats étaient définis par quatre
  phrases presque identiques. L’entrée part maintenant de la décision bloquée,
  puis varie naturellement la manière d’introduire prototype, POC, pilote et
  MVP.
- **Faux contrastes répétés** : les oppositions nom / preuve, chronologie /
  inconnue et méthode / règle revenaient dans le héros, la FAQ et le disclaimer.
  Une seule idée suffit désormais à chaque emplacement ; la limite sur
  l’absence de définition officielle commune reste explicite.
- **Formulations nominales et administratives** : le CTA, le sous-titre FAQ et
  deux titres d’encadré nommaient le dispositif sans partir de l’action du
  lecteur. Ils commencent maintenant par la décision, le cas ou l’effet à
  observer.
- **Triptyques saccadés** : « Huit champs. Une preuve. Une décision limitée. »
  et l’accroche symétrique de l’image de sortie ont été remplacés par deux
  phrases continues. Le CTA passe de trois badges parallèles à deux conditions
  concrètes.
- **Page qui parle d’elle-même** : la FAQ ne se donne plus comme origine d’un
  nombre universel et le lien vers le guide voisin décrit directement la
  frontière d’apprentissage.
- **Rythme de la section MVP** : les trois paragraphes ne commencent plus
  mécaniquement par « Le MVP », « La version » et « La source ». La définition,
  les exigences du test et la condition de retour restent séparées.

Les tableaux comparatifs, les questions opérationnelles du POC et du pilote,
la fiche numérotée et l’inventaire de remise conservent leur parallélisme : ici,
il sert une comparaison ou une exécution réelle. Les listes n’ont pas été
réécrites pour produire une variation artificielle.

### P2. Relecture de chaque H2 isolément

1. **Réponse directe** : réponse autonome, quatre formats distincts et option
   sans construction conservés ; ouverture désuniformisée.
2. **Matrice** : la grille répond à son titre ; son introduction explique le
   mélange de preuves au lieu d’enchaîner deux slogans opposés.
3. **Fiche** : les huit champs restent copiables ; le passage sur la valeur
   part désormais de la décision plutôt que du nombre de fichiers.
4. **Prototype** : compréhension, fidélité, accessibilité et réemploi du code
   restent bornés ; l’encadré nomme le risque de confusion avec le produit.
5. **POC** : cas, mesure, seuil, limites et remise restent intacts ; le mémo
   rattache directement la réussite à la décision écrite.
6. **Pilote** : rôles, charge, continuité, données, pseudonymisation, base
   légale et retour arrière restent complets. Aucun allègement stylistique n’a
   retiré une qualification CNIL.
7. **MVP** : apprentissage client inchangé ; le retour réel reste exigé
   seulement lorsque l’hypothèse porte sur le retour.
8. **Cas fictif** : scène, formule, seuil, contrôle inverse et sept erreurs à
   ventiler sont inchangés. Le caractère entièrement fictif reste visible à
   proximité.
9. **Décision** : poursuivre, refaire, reporter et arrêter restent des sorties
   distinctes ; tout élargissement ouvre toujours un nouveau test.
10. **FAQ** : huit réponses commencent directement et gardent les limites sur
    le nombre de participants, les données, les droits et le résultat ambigu.

### P3. Faits, calculs et nuances protégés

- Registre F01 à F12, sources, URLs, dates et périmètres : inchangés.
- Calcul fictif : `40 × 4 = 160`, `153 / 160 = 95,625 %`, `153 + 7 = 160`,
  `152 / 160 = 95 %` et `153 − 152 = 1` : inchangé.
- Sept erreurs : toujours à ventiler par champ et par document avant tout
  pilote ; aucune répartition n’est inventée.
- MVP : apprentissage client défini, avec retour répété conditionnel à
  l’hypothèse ; aucune adoption n’est promise.
- Données : anonymisation, pseudonymisation, base légale, environnement séparé
  et qualification du cas restent distincts.
- Élargissement : nouveau volume, site, donnée ou dépendance = nouveau test.
- Taxonomie : aucun ordre, tarif, délai, seuil, nombre de testeurs ou standard
  universel n’est ajouté.
- Exemple Lys Documents : entièrement fictif, jamais présenté comme client,
  mission, performance ou preuve commerciale.

### P4. Fichiers et contrôles

- Agent distinct : `mvp_poc_p4`.
- État d’entrée : G3 `GO_PASSE_4`, build 77/77 et BAT 320–1 440 transmis par
  l’orchestrateur ; snapshot P3 relu en entier.
- Fichiers modifiés : dossier, page, image Open Graph, test, SVG 4:3 de la fiche
  et SVG 1:1 de décision.
- Fichier relu mais inchangé : SVG 16:9 de la matrice.
- Freeze et manifestes P1/P2/P3 : lus puis conservés octet pour octet.
- Build complet, BAT navigateur et contrôle transversal : non exécutés par P4,
  réservés à l’orchestrateur sur le snapshot suivant.

```text
PASSE_4_TERMINEE
Motifs repérés : symétrie de l’ouverture ; faux contrastes répétés ; style nominal du CTA ; triptyques saccadés ; page qui parle d’elle-même ; rythme uniforme du MVP
Corrections : ouverture, FAQ, CTA, disclaimer, quatre titres ou transitions, sous-titre OG et deux accroches SVG
Passages conservés et raison : tableaux, questions de contrôle, fiche numérotée et inventaire — parallélisme utile à la comparaison ou à l’exécution
Faits inchangés : F01 à F12, dix sources, dates, périmètres et cinq opérations du scénario fictif
Exemples contrôlés : Lys Documents reste entièrement fictif ; seuil, sept erreurs et limites inchangés
Contradictions finales : aucune ; MVP et pilote gardent deux preuves séparées ; aucune définition universelle
Vitest ciblé P4 : 14/14
TypeScript : npx tsc --noEmit — vert
ESLint ciblé : vert
Prettier ciblé, types supportés : vert
XML des SVG : 3/3
Rendu statique React : vert
Manifeste P4 : 7/7
Diff-check et espaces finaux, y compris fichiers untracked : aucun défaut
HEAD : d4a7fb58b44e46314156e60cd580c45a4224021d — inchangé
Git : aucun git add, commit ou push
Release : aucun deploy, déploiement, publication ou indexation
Manifeste P4 : docs/research/manifests/mvp-prototype-ou-poc-p4.sha256
```

Ce rapport clôt uniquement la production P4 et ses contrôles ciblés. Il ne
constitue ni la porte G4 de l’orchestrateur, ni le contrôle transversal, ni une
preuve publique.

## Reprise qualité post-Q

Le contre-audit indépendant a rendu `GO` à **95/100**, sans P0 ni P1, et a
confirmé deux P2 visuels bornés :

1. à 1 024 px, la statistique du héros `Fiche / 8 champs` tronquait sa valeur ;
   elle devient `Champs / 8`, sans changer l’information ;
2. entre 320 et 430 px, `ARRÊT` débordait du médaillon fixe du dernier cas ;
   l’initiale devient `!`, tandis que « Dernière vérification », le titre et la
   décision « arrêter » restent visibles dans le contenu.

Seuls le dossier, la page et le test propre au slug sont modifiés après P4.
Aucun composant partagé ni manifeste P1–P4 n’est réécrit. Vitest ciblé 15/15,
TypeScript, ESLint, Prettier et diff-check sont verts. Le manifeste post-Q
rejouable couvre 3/3 fichiers :
`docs/research/manifests/mvp-prototype-ou-poc-quality.sha256`.

## Intégration centrale — snapshot privé

L’intégration centrale a commencé le 5 août 2026 à 10:01:50 +02:00, après
autorisation directe du commanditaire et acquisition atomique du mutex
`integration.lock`. La branche part de
`d4a7fb58b44e46314156e60cd580c45a4224021d`, soit deux commits au-dessus de
`origin/main` `577a9ff9632cceba51e1a0c46cda3dbb3f7830c0` et exactement du dernier
snapshot poussé du guide #30.

La page utilise désormais le registre central, `buildGuideMetadata` et
`buildGuideStructuredData`. Cette source unique ferme les deux P2 JSON-LD du
contre-audit : `Article.headline` reprend le H1 complet « Prototype, POC,
pilote ou MVP : que construire d’abord ? » et `Article.isPartOf` désigne la
collection des guides. Le fil d’Ariane utilise le `cardTitle` du même registre.

Le registre porte les trois illustrations, `readTimeMin: 15`, le statut
`ready-for-human-review` et deux dates explicitement bornées :

- `datePublished: 2026-07-23T00:59:26+02:00` est l’horodatage d’auteur du
  commit historique `14a388b91c2199ba1309cba304653248d6baf084`, première
  trace Git retrouvée de la route. Cette trace ne prouve pas une première mise
  en ligne publique : elle reste un **STOP opérationnel** à rapprocher du
  snapshot réellement déployé avant toute future publication ;
- `dateModified: 2026-08-05T10:01:50+02:00` borne le début de l’intégration et
  sera utilisé comme date d’auteur du commit final ;
- la mesure officielle du HTML post-Q comptait 2 902 mots visibles, soit 15
  minutes à 200 mots par minute.

La route reste volontairement privée : `noindex, nofollow`, badge « Brouillon
privé », absence attendue du hub public, de `sitemap.xml` et de `llms.txt`.
Les mutations partagées sont bornées à l’entrée du registre et à son icône, au
retrait du slug des redirections héritées, aux tests correspondants et à un
lien entrant depuis la section « Frontière du test » du guide
`mvp-saas-quoi-inclure`. Le dossier voisin consigne ce lien sans changer ses
calculs, médias, CTA, metadata, dates ou statut.

À ce stade, aucun commit, push, déploiement, publication ou indexation n’est
revendiqué. La batterie globale, le contrôle SEO, le build de production, le
BAT lecteur, l’impression, le replay du manifeste d’intégration et le
contre-audit release indépendant doivent encore être exécutés sur le snapshot
exact.

### Preuves locales du snapshot intégré avant contre-audit release

La batterie automatisée et le build complet ont été exécutés sur l’intégration
centrale :

- tests ciblés du guide, du voisin, du registre et des redirections : 4
  fichiers, 65/65 tests verts ;
- batterie Vitest globale : 116 fichiers et 1 191/1 191 tests verts ;
- TypeScript sans émission, ESLint global, Prettier ciblé, XML des trois SVG et
  `git diff --check` : verts ;
- contrôle SEO : 33 fichiers et 189/189 tests verts ;
- build de production : compilation et TypeScript verts, 77/77 pages statiques
  générées ; postbuild noindex vert sur 49 URL, 32 liens, 49 pages, 19 temps de
  lecture et 86 blocs JSON-LD.

La route de production locale répond directement en 200. Son canonical est
`https://hagnere-code.ai/guides/mvp-prototype-ou-poc`, ses robots sont
`noindex, nofollow`, le H1 accessible est exactement égal à
`Article.headline`, et les seuls schémas sont `Article` et `BreadcrumbList`.
`Article.isPartOf` vise `https://hagnere-code.ai/guides#collection`. La page
compte un H1, un `main#main-content`, huit FAQ, un CTA principal propre au
guide, aucun lien vide, aucun lien XLS/XLSX/CSV et aucun lien téléphonique dans
le contenu principal. Le guide reste absent du hub, du sitemap et de
`llms.txt`; le lien entrant apparaît deux fois dans le HTML rendu du guide MVP
voisin. L’OG et les trois SVG répondent en 200 ; l’OG mesure 1 200 × 630 et les
trois SVG chargent avec leurs dimensions et textes alternatifs.

Le responsive réel a été mesuré aux largeurs CSS 320, 360, 390, 430, 640, 768,
1 024, 1 280, 1 440 et 1 920 px. À chaque largeur, le `scrollWidth` du document
égale la largeur utile, le H1 reste contenu, les huit FAQ sont présentes, la
statistique `Champs / 8` ne tronque rien et le médaillon `!` conserve
`clientWidth = scrollWidth = 40`. Les tableaux sont remplacés par leurs cartes
avant le breakpoint, puis réapparaissent sans élargir le document. Le thème
sombre a été rejoué à 320, 390, 1 024 et 1 440 px, sans ellipsis ni
débordement. La console ne contient aucune erreur ni alerte.

La connexion navigateur intégrée a bien vérifié la structure, les thèmes, les
largeurs, les médias et la console, mais son injection synthétique de touches
n’a pas déclenché `Tab`, `Entrée` ou `Espace` sur ce snapshot. Cette limite de
l’outil ne prouve pas un défaut de la page : le contrôle clavier exact reste
attribué au contre-auditeur release indépendant, qui devra rendre un verdict
avant commit.

Chrome a produit une épreuve PDF Letter balisée de 31 pages. Les huit questions
de FAQ sont extraites et le CTA propre au guide est absent. Les pages 1, 16 et
31 ont été rendues en PNG et inspectées : aucune coupe, superposition ou ligne
illisible. En revanche, la navigation globale, son bouton « Démarrer un
projet », le badge privé, le bloc commercial et formulaire de contact des pages
27 à 30, puis le pied de page restent imprimés. Il s’agit d’un P2 partagé déjà
borné, sans incidence sur la décision ou le contenu du guide privé. Aucune
retouche de composant commun n’est introduite dans ce lot.

### Reprise de preuve après le premier contre-audit release

Le premier contre-audit release a noté le contenu intégré 94/100, sans P0 ni
P1, mais a rendu `NO_GO` parce que son instance navigateur n’était pas
disponible. Il a aussi relevé deux imprécisions de preuve : l’en-tête du dossier
le présentait encore comme un candidat P1 et le paragraphe d’impression disait
à tort que le bloc commercial global était absent. Ces deux mentions sont
rectifiées ci-dessus ; aucun texte lecteur ni composant n’est modifié.

L’orchestrateur a ensuite rejoué le rendu intégré dans une session navigateur
neuve. En thème clair, les largeurs 320, 360, 390, 430, 640, 768, 1 024, 1 280,
1 440 et 1 600 px gardent `scrollWidth` égal à la largeur utile, le H1 contenu,
les huit FAQ et les correctifs `Champs / 8` et `!` intacts. Les cartes mobiles
restent actives sous le breakpoint et les neuf tableaux reviennent sur le
format bureau. L’échantillon sombre 320, 390, 1 024 et 1 440 px donne les mêmes
résultats. Une seule ellipse demeure à partir de 1 280 px : le libellé global
« Développement SaaS sur mesure » dans une tuile du bloc commercial commun,
hors contenu du guide. Ce P2 partagé n’est pas masqué par une retouche du slug.

Axe a rendu zéro violation en clair et en sombre, avec 50 règles passées dans
chaque thème. Les 57 puis 56 contrôles `color-contrast` laissés incomplets
correspondent aux dégradés et superpositions que l’outil ne sait pas trancher ;
ils ne sont pas convertis artificiellement en succès. Les trois SVG ont ensuite
été chargés par défilement réel, avec dimensions intrinsèques et textes
alternatifs ; la console ne porte ni avertissement ni erreur, et le replay
réseau n’a remonté aucun chargement échoué ni réponse HTTP en erreur.

Le contrôle natif a confirmé que le skip-link puis les boutons de FAQ entrent
bien dans l’ordre de focus. Son activation locale a toutefois été perturbée
par le navigateur de secours, qui a forcé l’ancre HTTP de `localhost` vers
HTTPS et chargé la page sans ses ressources. Cette tentative n’est donc pas
présentée comme une preuve clavier release. Le navigateur principal a été
entièrement libéré afin que le contre-auditeur indépendant puisse reprendre le
test réel `Tab`, `Entrée` et `Espace` sur le snapshot final exact.

Le prochain état sera gelé par
`docs/research/manifests/mvp-prototype-ou-poc-integration.sha256`, manifeste
lui-même exclu. Les manifestes P1 à P4 et `quality` restent les preuves
historiques de leurs snapshots et ne sont pas réécrits après intégration.
