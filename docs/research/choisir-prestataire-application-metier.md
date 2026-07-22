# Dossier de recherche — Choisir un prestataire pour une application métier

> Journal du guide `choisir-prestataire-application-metier`. La page publique
> ne peut être rédigée qu'après validation de P1 et la clôture du guide précédent.

## Journal des quatre passes

Propriétaire éditorial unique : Codex, agent racine du lot du 21 juillet 2026.

| Passe                        | État                     | Date       | Responsable | Snapshot                                           | Blocages       |
| ---------------------------- | ------------------------ | ---------- | ----------- | -------------------------------------------------- | -------------- |
| 1. Recherche                 | Terminée — porte validée | 2026-07-21 | Codex       | `choisir-prestataire-application-metier-p1.sha256` | Aucun          |
| 2. Rédaction et intégration  | Terminée — porte validée | 2026-07-21 | Codex       | `choisir-prestataire-application-metier-p2.sha256` | Aucun          |
| 3. Contre-audit indépendant  | En cours                 | 2026-07-21 | Agent P3    |                                                    | Corrections P1 |
| 4. Plume humaine et contrôle | Bloquée                  |            |             |                                                    | P3 non validée |

## 1. Fiche d'identité

```text
Slug : choisir-prestataire-application-metier
Requête principale : choisir prestataire application métier
Moment : besoin cadré, avant les entretiens et la comparaison des propositions
Lecteur : dirigeant ou responsable d'équipe non technicien
Phrase téléphone : « J'ai trois interlocuteurs qui parlent tous différemment.
Comment vérifier qu'ils ont compris mon activité et qu'ils sauront livrer puis
maintenir l'outil, sans choisir seulement le devis le moins cher ? »
Décision : retenir un interlocuteur, demander des preuves complémentaires ou
reporter le choix parce que le besoin n'est pas assez clair
Action autonome : faire travailler chaque candidat sur le même cas métier et
consigner six réponses factuelles dans une fiche de décision
CTA : faire relire le besoin et les propositions reçues
Hors du sujet : annuaire de prestataires, palmarès agence/freelance, conseil
juridique, garantie de délai, audit de sécurité ou négociation contractuelle
Date de recherche : 2026-07-21
```

### Score de lancement

| Critère            |       Note | Justification                                       |
| ------------------ | ---------: | --------------------------------------------------- |
| Offre vendue       |      25/25 | Applications métier et reprise de projets           |
| Proximité du devis |      25/25 | Le lecteur choisit avant engagement                 |
| Demande observée   |       9/15 | Intention nette, sans volume Search Console         |
| Outil original     |      15/15 | Fiche d'entretien fondée sur un même cas réel       |
| Différenciation    |      10/10 | Comparaison de preuves, pas score universel         |
| Maillage et CTA    |      10/10 | Suite du cahier des charges et entrée vers le devis |
| **Total**          | **94/100** | Porte franchie                                      |

## 1 bis. Contrat de langage humain

- **Réponse en une phrase :** le meilleur prestataire n'est pas celui qui
  emploie les mots les plus techniques, mais celui qui comprend un cas réel,
  rend ses hypothèses visibles et prouve comment il livrera, protégera et fera
  évoluer l'outil.
- **Mots ordinaires :** commande, stock, autorisation, erreur, reprise, document,
  personne responsable, accès, données, maintenance, sortie.
- **Traductions :** mise en situation plutôt que atelier de discovery ; essai
  vérifiable plutôt que proof of concept ; passage en production plutôt que
  go-live ; retour en arrière plutôt que rollback.
- **Mots à éviter sans explication :** stack, vélocité, sprint, architecture
  scalable, DevOps, CI/CD, SLA, réversibilité, dette technique.
- **150 premiers mots :** partir des trois propositions reçues et de la peur de
  choisir sur un prix impossible à comparer ; annoncer un entretien identique
  pour tous et la décision concrète obtenue.
- **Mobile :** une question et ses preuves par carte ; pas de matrice illisible.
- **CTA :** « Demander une relecture de mes propositions ».

### Test de l'ouverture

- [x] situation vécue par un dirigeant avant tout vocabulaire technique ;
- [x] réponse immédiate, sans promesse de trouver un prestataire parfait ;
- [x] agence, freelance et équipe interne traités sans hiérarchie de principe ;
- [x] prix, références et relation humaine remis à leur juste place ;
- [x] possibilité explicite de ne retenir personne si le besoin reste flou.

## 2. Cannibalisation

| Page existante                           | Intention détenue                                | Frontière du nouveau guide                                    |
| ---------------------------------------- | ------------------------------------------------ | ------------------------------------------------------------- |
| `cahier-des-charges-application-metier`  | Décrire le besoin et obtenir des devis           | Évaluer les réponses et la capacité réelle à exécuter         |
| `prix-logiciel-sur-mesure`               | Comprendre budget, hypothèses et coût complet    | Choisir une équipe à besoin déjà suffisamment cadré           |
| `agence-web-ou-freelance`                | Comparer deux formes d'organisation              | Juger le prestataire précis, quel que soit son statut         |
| `proprietaire-site-internet-code-source` | Droits, comptes et livrables                     | Vérifier la reprise et la gouvernance avant engagement        |
| `reprendre-logiciel-metier-existant`     | Organiser la reprise d'un produit déjà construit | Anticiper maintenabilité et sortie pendant la sélection       |
| `/services/outils-internes-sur-mesure`   | Présenter l'offre Hagnéré Code                   | Donner une méthode autonome et honnête avant prise de contact |

**Propriété éditoriale :** conduire un entretien comparable avec plusieurs
prestataires et transformer leurs réponses en décision, sans note magique.

## 3. Demande et angle concurrentiel

Observation qualitative du 21 juillet 2026. Les résultats autour de la requête
proposent surtout des listes de critères : références, compétences, méthode,
budget, communication et support. Ces listes ont une utilité, mais elles laissent
le dirigeant seul face à des affirmations impossibles à comparer.

Requêtes observées depuis la France : « choisir prestataire application métier
critères devis agence freelance », « comment choisir prestataire logiciel sur
mesure », « questions poser prestataire développement logiciel métier » et
« comparer devis application métier prestataire ». Aucun volume ni difficulté
SEO n'est déduit de cette observation.

| Résultat observé                                                                                                                                                      | Angle                                      | Manque décisionnel ou conflit                                    |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ | ---------------------------------------------------------------- |
| [Clubic — 8 questions à poser](https://www.clubic.com/dossier-595561-choisir-un-prestataire-informatique-8-questions-essentielles-a-poser.html)                       | Liste généraliste informatique et sécurité | Pas d'exercice commun ni de fiche de décision                    |
| [PeakLab — application métier sur mesure](https://peaklab.fr/blog/application-metier-sur-mesure)                                                                      | Guide large, budget et agence/freelance    | Comparatifs chiffrés à ne pas reprendre sans preuve primaire     |
| [AlloHouston — développer une application métier](https://www.allohouston.fr/articles-de-fond/pourquoi-et-comment-faire-developper-une-application-metier-sur-mesure) | Besoin, étapes et choix du prestataire     | Ateliers proposés, mais pas de traces identiques avant signature |
| [La Fabrique du Net — choisir une agence logiciel](https://www.lafabriquedunet.fr/agences/pages/agences-developpement-logiciel/guide)                                 | Guide et annuaire d'agences                | Intermédiation commerciale et aucun mini-cas commun              |
| [Cityness — application métier sur mesure](https://www.cityness.fr/blog/application-metier-sur-mesure)                                                                | Besoin, budget et méthode générale         | Pas d'outil pour comparer plusieurs propositions                 |

**Angle mort retenu :** demander à chaque candidat de résoudre oralement le même
mini-cas métier, puis réclamer six engagements écrits : reformulation, inclus et
exclus, scénarios de test, comptes et coûts, support et inventaire de reprise.

L'entretien d'une heure est une recommandation éditoriale Hagnéré Code, pas une
norme. Il permet de réserver assez de temps au cas métier sans transformer la
sélection en audit gratuit ou en prototype non rémunéré.

## 4. Fiche de preuves

Sources consultées le 21 juillet 2026.

| Affirmation utilisable                                                                   | Source primaire                                                                                                                                                                                       | Limite                                                               | Conséquence lecteur                                   |
| ---------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- | ----------------------------------------------------- |
| Le sourçage aide l'acheteur public à mieux comprendre l'offre avant la consultation      | [Direction des achats de l'État, édition 2025](https://www.economie.gouv.fr/dae/le-sourcage-operationnel-ledition-2025-du-guide-publie-par-la-direction-des-achats-de-letat-est-desormais-disponible) | Référentiel public ; transfert au privé annoncé comme recommandation | Rencontrer le marché avant de figer la solution       |
| France Num invite à préparer objectifs, besoins, public, moyens et maintenance d'un site | [France Num](https://www.francenum.gouv.fr/formations/comment-choisir-le-bon-prestataire-pour-votre-site-internet)                                                                                    | Tutoriel site web ; principes seulement transférables                | Préparer un besoin commun à tous les candidats        |
| Les rôles sur les données dépendent des décisions et des opérations réelles              | [CNIL](https://www.cnil.fr/fr/rgpd-comment-bien-identifier-son-role)                                                                                                                                  | Qualification juridique au cas par cas                               | Demander qui traite quoi et avec quels accès          |
| Les données remises pour une sélection doivent rester limitées au nécessaire             | [CNIL](https://www.cnil.fr/fr/minimiser-les-donnees-collectees)                                                                                                                                       | Ne dispense pas d'encadrement après engagement                       | Utiliser des données fictives avant engagement        |
| Les droits cédés doivent être définis et leur périmètre délimité                         | [Code de la propriété intellectuelle, art. L131-3](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958)                                                                              | Faire valider les clauses sensibles                                  | Ne pas confondre facture payée et droits obtenus      |
| Les œuvres créées par des salariés ont un régime particulier pour les logiciels          | [Code de la propriété intellectuelle, art. L113-9](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000039279818)                                                                              | Ne règle pas tous les intervenants ou composants tiers               | Identifier qui crée et qui peut céder les droits      |
| L'existence légale et certaines informations peuvent être contrôlées dans le RNE         | [Service Public Entreprendre](https://entreprendre.service-public.fr/vosdroits/R19859)                                                                                                                | Ne prouve ni compétence, ni solvabilité, ni qualité future           | Vérifier l'identité sans en faire un score de qualité |

### Faits, déductions et recommandations

**Faits :** une référence, une assurance, un extrait de registre ou une
qualification répond à une question limitée ; aucune de ces pièces ne garantit à
elle seule la réussite du projet. Les droits, rôles sur les données et modalités
de sortie doivent être explicités dans les documents adaptés.

**Déductions :** des devis fondés sur des hypothèses différentes ne sont pas
comparables. Un candidat qui reformule bien le cas métier, nomme ce qu'il ignore
et propose une façon vérifiable d'accepter le résultat réduit l'incertitude ; il
ne l'annule pas.

**Recommandation Hagnéré Code :** utiliser le même cas et les mêmes questions pour
tous, puis écrire une fiche de décision en six phrases. Ne pas additionner des
notes arbitraires qui donneraient une fausse précision.

### Affirmations interdites

- une agence est toujours plus sûre qu'un freelance, ou l'inverse ;
- le devis le moins cher cache nécessairement un problème ;
- cinq références garantissent la réussite du prochain projet ;
- un prototype gratuit est un passage obligatoire ;
- une certification, une assurance ou un statut juridique garantit la qualité ;
- une méthode agile garantit budget, délai ou adéquation métier ;
- le client devient automatiquement propriétaire de tout le code et des données ;
- tout prestataire est automatiquement sous-traitant RGPD ;
- sécurité garantie, absence de faille ou disponibilité absolue ;
- délai ou tarif universel sans travail défini, hypothèses et exclusions ;
- score chiffré présenté comme vérité objective.

## 5. Mini-cas commun — la commande qui dépasse le stock ou le crédit autorisé

**Exemple entièrement fictif.** Une PME reçoit des commandes par téléphone et
par courriel. L'équipe saisit une commande dans son futur outil. Avant validation,
celui-ci doit vérifier deux éléments : le stock disponible et la limite de crédit
accordée au client. Si l'un manque, la commande ne disparaît pas : elle passe dans
un état à examiner par une personne autorisée, qui doit comprendre la cause et
laisser une trace de sa décision.

Chaque candidat reçoit exactement le même récit, puis doit préciser :

1. les questions métier qu'il pose avant de parler de solution ;
2. ce qu'il mettrait dans une première version utilisable ;
3. les erreurs et cas limites qu'il ferait confirmer ;
4. la trace écrite et le test montrant que la règle fonctionne ;
5. ce que l'entreprise devra fournir ou décider ;
6. la manière de corriger, maintenir et reprendre l'outil ensuite.

Le but n'est pas d'obtenir gratuitement un écran fini. Le but est d'observer la
façon dont le candidat transforme une situation imprécise en décisions et tests
compréhensibles.

## 6. La fiche de décision en six phrases

Avant les six phrases, recopier : entreprise candidate, personnes réellement
affectées, référence/version/date de la proposition, prix initial hors taxes et
conditions de paiement, coûts récurrents, options, exclusions, calendrier,
points de validation, travail et décisions attendus de l'équipe cliente.

Après chaque entretien, le décideur doit pouvoir compléter sans jargon :

1. **Il a compris que…** reformulation du problème et de l'utilisateur.
2. **Il suppose encore que…** inconnues qui peuvent changer le prix ou le délai.
3. **La première version permettrait de…** résultat métier réellement livré.
4. **Nous vérifierions le résultat en…** scénario observable et responsable.
5. **Après la mise en ligne, il prend en charge…** incidents, corrections et suivi.
6. **Si nous changeons d'équipe, nous récupérons…** code, comptes, données,
   documentation et procédure de reprise.

La fiche n'attribue pas une note sur 100. Elle révèle les différences de travail,
de trace et de responsabilité pour permettre une décision argumentée.

## 7. Empreinte éditoriale et plan

```text
Tension : trois propositions sérieuses, mais trois manières de raconter le projet.
Ouverture : pourquoi le prix seul ne permet pas de décider.
Progression : préparer, travailler sur le même mini-cas, réclamer six traces écrites,
contrôler les engagements, puis écrire la décision.
Artefact : fiche d'entretien et décision en six phrases.
Exemple : commande fictive bloquée par stock ou limite de crédit.
Rythme : scène d'entretien, réponse utile, signal d'incertitude, trace à demander.
CTA : après la fiche finale, lorsque le lecteur peut montrer ses propositions.
Conclusion : choisir, demander une précision ou ne retenir personne.
```

| Section                                   | Question résolue                           | Format                 |
| ----------------------------------------- | ------------------------------------------ | ---------------------- |
| Le prix ne rend pas les devis comparables | Pourquoi hésite-t-on encore ?              | scène concrète         |
| Préparer un entretien identique           | Que donner à chaque candidat ?             | fiche courte           |
| Faire vivre le mini-cas                   | Comprend-il vraiment le métier ?           | dialogue et questions  |
| Examiner la première version              | Sait-il réduire sans mutiler le besoin ?   | arbitrages             |
| Demander une trace écrite                 | Comment vérifier ce qui sera livré ?       | scénario de validation |
| Regarder l'après-lancement                | Qui répond, corrige et surveille ?         | chronologie            |
| Préparer la sortie                        | Que récupère l'entreprise ?                | inventaire             |
| Écrire la décision                        | Que sait-on réellement après l'entretien ? | six phrases            |

## 8. FAQ et conversion

FAQ retenue, maximum dix : faut-il préférer agence ou freelance ; combien de
candidats rencontrer ; faut-il un prototype ; comment comparer des prix différents ;
quelles références appeler ; que vérifier sur les données et le code ; faut-il
une assurance ; qui écrit le cahier des charges ; que faire si aucun devis n'est
comparable ; peut-on commencer par une courte mission préparatoire.

```text
Ressource téléchargeable : non pour cette publication.
Résultat autonome : un mini-cas identique, six traces attendues et une fiche de
décision remplie en six phrases.
Conclusion « ne pas investir » : oui, si aucun candidat ne peut reformuler le
besoin ou si des hypothèses déterminantes restent cachées.
Données saisies : aucune.
Bon fit : besoin réel, interlocuteurs identifiés, propositions à comparer.
Mauvais fit : recherche d'un palmarès, appel d'offres juridique complet,
certification sécurité, médiation contractuelle ou prix garanti sans besoin
défini.
CTA : « Demander une relecture de mes propositions » vers /demarrer-un-projet.
Promesse : repérer les hypothèses et responsabilités qui empêchent une décision,
y compris conseiller de préciser le besoin avant de choisir.
```

### Maillage

Sortants : cahier des charges application métier, prix logiciel sur mesure,
agence ou freelance, propriété du code, reprise d'un logiciel, service outils
internes et démarrer un projet.

Entrant prioritaire : `cahier-des-charges-application-metier`, une fois le dossier
prêt à être envoyé. Un lien contextuel secondaire peut partir de
`agence-web-ou-freelance` vers la méthode d'entretien.

### Metadata proposées

```text
Title : Choisir un prestataire d’application métier · Hagnéré Code
Card title : Choisir le bon prestataire pour son application métier
Meta : Comparez plusieurs prestataires sur un même cas métier : réponses écrites,
prix, maintenance, données, code et décision sans jargon.
H1 : Comment choisir le prestataire de votre application métier ?
Section : Préparer son projet
```

## 9. Porte P1

- [x] intention distincte et absence de route vérifiées ;
- [x] langage de dirigeant et réponse attendue fixés ;
- [x] sources primaires et limites consignées ;
- [x] exemple fictif déclaré ;
- [x] artefact original utilisable sans formulaire ;
- [x] frontières avec les guides voisins écrites ;
- [x] aucun tarif, délai ou résultat inventé ;
- [x] plan non calqué sur les quatre guides précédents ;
- [x] CTA et lien entrant prévus ;
- [x] affirmations interdites listées.

Verdict P1 : **PASS**. La rédaction publique a été ouverte après la clôture du
guide `cahier-des-charges-saas`.

## 10. Rapport P2 — Rédaction et intégration

```text
PASSE 2 TERMINÉE
Fichiers créés : page, image Open Graph et dossier de recherche.
Fichiers modifiés : registre, icône du hub, cahier des charges application
métier et comparatif agence/freelance pour deux liens entrants contextuels.
Ouverture : plusieurs propositions sérieuses mais impossibles à comparer ;
réponse immédiate par le même cas, les mêmes questions et les mêmes traces.
Forme propre : même entretien pour chaque candidat, six cartes
question/réponse utile/point à
faire préciser, puis décision en six phrases sans score universel.
Exemple : Atelier Mercure, ses volumes et sa règle stock/crédit sont annoncés
comme entièrement fictifs avant toute valeur.
Sources visibles : DAE, RNE/Service Public, CNIL et Légifrance sont placés au
voisinage de leur affirmation et accompagnés de leur limite.
Action autonome : remettre le même mini-cas, conduire un entretien d'une heure
présenté comme recommandation Hagnéré Code, puis remplir six phrases.
Bon fit / mauvais fit : choisir, faire préciser, financer une courte préparation ou
ne retenir personne ; aucun statut, prix, référence ou document ne garantit le
projet.
CTA : un seul, « Demander une relecture de mes propositions », vers
/demarrer-un-projet.
Profondeur : 2 508 mots visibles dans le corps éditorial et neuf FAQ ; temps de
lecture 13 minutes à 200 mots par minute, arrondi à l'entier supérieur.
Contrôles rapides : Prettier, ESLint, TypeScript, SEO 184/184 et git diff-check
passent ; build compilé, seul le temps provisoire a été corrigé de 11 à 13.
Snapshot : docs/research/manifests/choisir-prestataire-application-metier-p2.sha256
```

## 11. Rapport P3 — Contre-audit indépendant

```text
PASSE 3 TERMINÉE — PASS
Auditeur : agent distinct de l'auteur de la page, en lecture seule.
P0 : 0. P1 : 0. P2 : 0 après corrections.
Corrections intégrées : ouverture sans ambiguïté sur les paiements ; cas
représentatif avec données fictives ; entretien d'une heure formulé sans jargon ;
six engagements assortis d'un document précis ; liens, CTA, slug et durée
alignés entre la page, le registre et ce dossier.
Exactitude : DAE 2025, CNIL, RNE et article L131-3 revalidés ; chaque source est
placée près de l'affirmation et sa portée reste limitée.
Pédagogie : cible dirigeant explicite dans les 150 premiers mots, agence et
freelance traités sans hiérarchie, prix comparés sans moyenne inventée, possibilité
de ne choisir personne et bon/mauvais cas d'usage visibles.
Contrôles : SEO 184/184, ESLint et TypeScript conformes ; neuf FAQ, un seul CTA,
deux liens entrants et treize minutes de lecture cohérentes.
Verdict : le guide peut entrer en P4 sur ce gel exact.
Snapshot : docs/research/manifests/choisir-prestataire-application-metier-p3.sha256
```

## 12. Rapport P4 — Lecture anti-automatisme et validation finale

```text
PASSE 4 TERMINÉE — PASS
Lecture anti-automatisme : aucune ouverture générique, aucun plan copié, aucune
transition artificielle ni succession mécanique de tableaux. La progression suit
une décision réelle : préparer le besoin, donner le même cas, mener l'entretien,
obtenir six engagements, comparer, vérifier, anticiper la suite et décider.
Correction P4 : l'image sociale remplace « preuves comparables » et « Prouver »
par « engagements écrits » et « Vérifier », formulation confirmée par le
contre-auditeur sans réouverture de défaut.
Navigateur réel : contrôles aux largeurs exactes 320, 390, 768, 1024 et 1440 px ;
aucun débordement horizontal, un H1, aucune ancre manquante ni identifiant dupliqué.
Inspection visuelle : héros mobile, cartes d'entretien empilées, FAQ ouverte et
image sociale lisibles ; aucune coupure ou collision observée.
Métadonnées : canonical exact ; preview locale noindex/nofollow ; Article et
BreadcrumbList présents, sans FAQPage ni HowTo ; OG rendue en 1200 × 630.
Comportement : neuf éléments details présents et première réponse ouverte avec
succès ; CTA unique visible ; durée affichée de treize minutes.
Technique : build de production et postbuild réussis ; 184/184 tests SEO ; 109
routes générées ; 88 URL, 51 durées de lecture et 164 blocs JSON-LD contrôlés.
Verdict final : guide validé, maintenu sous porte éditoriale jusqu'au gel global
des dix guides.
Snapshot : docs/research/manifests/choisir-prestataire-application-metier-p4.sha256
```
