# Dossier de recherche — valider une idée SaaS avant de développer

Date de travail : **29 juillet 2026**
État : **passe 4 livrée pour contrôle G4 ; aucune autorisation de publication**

Ce dossier a été recréé depuis zéro. L’ancienne page, ses seuils, sa note et ses
validations historiques ne constituent ni une source ni une preuve. Les pages
concurrentes servent uniquement à comprendre la demande actuelle. Les faits
publiables reviennent aux sources primaires ou officielles ouvertes le
29 juillet 2026.

## Journal des quatre passes

Propriétaire éditorial unique : orchestrateur du lot

| Passe                             | État                     | Date       | Responsable                | Snapshot     | Blocages                      |
| --------------------------------- | ------------------------ | ---------- | -------------------------- | ------------ | ----------------------------- |
| 1. Création complète              | Terminée — porte validée | 29/07/2026 | `/root/g1_p1_creation`     | manifeste P1 | G1 : `GO_PASSE_2`             |
| 2. Enrichissement et vérification | Terminée — porte validée | 29/07/2026 | `/root/g1_p2_verification` | manifeste P2 | G2 : `GO_PASSE_3`             |
| 3. Polish rédactionnel            | Terminée — porte validée | 29/07/2026 | `/root/g1_p3_polish`       | manifeste P3 | G3 : `GO_PASSE_4`             |
| 4. Antipasse IA et contrôle final | Terminée — remise à G4   | 29/07/2026 | `/root/g1_p4_antipasse`    | manifeste P4 | Validation de l’orchestrateur |

### Manifeste du snapshot

Le manifeste de la passe 1 est écrit dans
`docs/research/manifests/valider-idee-saas-avant-developper-p1.sha256`.
Le manifeste de la passe 2 est écrit dans
`docs/research/manifests/valider-idee-saas-avant-developper-p2.sha256`.
Le manifeste de la passe 3 est écrit dans
`docs/research/manifests/valider-idee-saas-avant-developper-p3.sha256`.
Le manifeste de la passe 4 est écrit dans
`docs/research/manifests/valider-idee-saas-avant-developper-p4.sha256`.
Les empreintes intermédiaires ne valent pas validation G4.

---

## A. Identité

```text
Slug : valider-idee-saas-avant-developper
Thème roadmap : SaaS et MVP, sujet 25, ordre 2 du premier sprint
Statut actuel : Brouillon — prêt pour contrôle G4
Requête principale : valider une idée SaaS avant de développer
Moment du parcours : décider avant d’engager le budget d’un produit
Lecteur précis : dirigeant, experte métier ou porteur de projet B2B non technique
Situation déclenchante : l’idée est approuvée par l’entourage ou quelques prospects,
mais aucun test ne distingue encore problème, acheteur, offre, accès au marché et usage
Décision principale : choisir le prochain test sans produit, écrire ses trois sorties,
puis continuer, pivoter, arrêter ou seulement alors cadrer un MVP
Niveau de connaissance : métier maîtrisé ; vocabulaire produit et expérimental non requis
Route de service : /services/saas-applications-metier
CTA : /demarrer-un-projet, « Faire cadrer mon test décisif »
Action autonome : remplir et copier une carte de test locale dans le navigateur
Date de la recherche : 29 juillet 2026
Responsable P1 : /root/g1_p1_creation
```

### Contrat de langage humain

- Phrase que le lecteur pourrait dire : « Tout le monde trouve mon idée bonne,
  mais comment savoir si une entreprise paiera avant que je dépense pour la
  développer ? »
- Réponse attendue en une phrase : une idée n’est pas validée en bloc ; il faut
  tester séparément le problème, l’acheteur, l’accès aux prospects, l’offre,
  l’usage et la faisabilité, avec une décision écrite avant le résultat.
- Terme central : un SaaS est un logiciel utilisé en ligne et payé comme un
  service, souvent par abonnement ; ici, le produit n’existe pas encore.
- Mots ordinaires : problème récent, personne qui paie, budget, rendez-vous,
  proposition, essai manuel, page, maquette, continuer, changer, arrêter.
- Termes à éviter ou traduire : discovery, traction, desirability, viability,
  feasibility, concierge, smoke test, product-market fit, vanity metric,
  design partner, cohort, activation.
- Projet des 150 premiers mots : reconnaître l’enthousiasme trompeur, répondre
  que les compliments ne suffisent pas, expliquer les six inconnues et
  annoncer les quatre décisions possibles.
- Décision possible après 150 mots : ne pas commander un MVP tant que le test
  le plus risqué n’est pas écrit et exécuté.
- H2 relus isolément : oui après la passe 3 ; décision G3 réservée à l’orchestrateur.
- Comparaisons à 390 px : rendues par cartes mobiles via `GuideTable`.
- FAQ : première phrase conçue comme réponse directe.
- CTA : résultat annoncé, sans réservation ni délai garanti.

### Test sujet, action, résultat

| Formulation abstraite à éviter | Qui agit ?                        | Action concrète                                               | Résultat                                                        | Formulation retenue                                                                                       |
| ------------------------------ | --------------------------------- | ------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| Valider la désirabilité        | Le porteur de projet              | Observe des problèmes passés et demande un engagement         | Le besoin et l’achat ne sont plus confondus                     | Vérifier le problème, puis demander au bon acheteur une prochaine étape réelle                            |
| Tester le canal                | Le fondateur                      | Recrute des profils comparables hors de son entourage         | Il sait s’il peut répéter l’accès                               | Vérifier que vous pouvez joindre de nouveaux prospects comparables sans dépendre d’une seule introduction |
| Produire une preuve forte      | Le prospect                       | Donne du temps, des données autorisées ou signe un pilote     | L’engagement est observable                                     | Noter ce que le prospect engage réellement, pas seulement ce qu’il dit                                    |
| Cadrer un pivot                | La personne responsable du budget | Change une hypothèse précise après un résultat contradictoire | Le prochain test porte sur un nouveau segment, prix ou parcours | Changer une seule hypothèse et écrire le nouveau test                                                     |
| Sécuriser la faisabilité       | Une personne technique compétente | Essaie uniquement l’accès, la donnée ou le calcul incertain   | Une inconnue technique est réduite                              | Faire un essai technique ciblé sans transformer l’essai en début de produit                               |

---

## B. Contrat de réponse

### Réponse courte

Une idée SaaS n’est jamais « validée » par des compliments, un sondage ou une
liste d’attente. Avant de développer, le lecteur doit identifier l’inconnue qui
pourrait tuer le projet, choisir un test qui l’observe réellement et écrire ce
qui le fera continuer, changer d’hypothèse ou arrêter. Un entretien renseigne
le problème ; une proposition explicite renseigne davantage l’achat ; un pilote
manuel renseigne le résultat rendu. Aucun de ces tests ne prouve à lui seul
l’usage répété, la fidélité ou l’économie d’un produit encore inexistant.

### Questions indispensables

1. Que signifie « valider » sans promettre une certitude commerciale ?
2. Quelles hypothèses faut-il séparer en B2B ?
3. Comment interroger sans demander une opinion flatteuse sur l’idée ?
4. Quel test réaliser sans produire le SaaS ?
5. Que prouve réellement chaque engagement ?
6. Comment écrire un seuil sans reprendre un nombre universel ?
7. Comment décider de continuer, pivoter, mettre en attente ou arrêter ?
8. Quand un prototype, un service manuel ou un essai technique devient-il utile ?
9. Quelles précautions appliquer aux données, à la prospection et au secret ?
10. Quand un MVP devient-il enfin le prochain test raisonnable ?

### Questions secondaires

- Faut-il révéler l’idée ?
- Une lettre d’intention suffit-elle ?
- Une préinscription ou un paiement suffisent-ils ?
- Combien d’entretiens faut-il ?
- Que faire si les utilisateurs aiment l’idée mais que l’acheteur ne répond pas ?
- Peut-on tester avec une maquette générée rapidement ?

### Hors-sujet explicites

- calcul d’un marché total ;
- recherche de financement ;
- choix de structure juridique ;
- dépôt de marque ou brevet personnalisé ;
- architecture technique complète ;
- prix du futur développement ;
- définition détaillée du MVP ;
- stratégie d’acquisition après lancement.

### Situations où la bonne réponse n’est pas « développer »

- le problème n’est décrit que comme une opinion future ;
- la personne interrogée n’est ni utilisatrice ni acheteuse ;
- aucune voie répétable ne permet de joindre des prospects comparables ;
- l’engagement disparaît dès qu’un prix, une donnée ou une responsabilité est
  précisé ;
- un outil existant couvre déjà le besoin de manière acceptable ;
- le service manuel révèle un coût variable incompatible avec le prix visé ;
- l’accès aux données, la sécurité ou une contrainte réglementaire reste
  inconnue et décisive ;
- le porteur de projet refuse d’écrire une condition d’arrêt.

---

## C. Corpus interne et cannibalisation

| Page                                   | Intention actuelle                                                | Différence du guide                                                 | Lien retenu                                        |
| -------------------------------------- | ----------------------------------------------------------------- | ------------------------------------------------------------------- | -------------------------------------------------- |
| `/services/saas-applications-metier`   | Choisir une équipe pour cadrer, développer ou reprendre un SaaS   | Le guide peut conclure qu’il ne faut rien développer                | Lien seulement après la matrice de décision        |
| `/guides/automatiser-processus-metier` | Choisir un travail interne à automatiser et calculer une capacité | Le nouveau guide teste un modèle SaaS vendu à plusieurs entreprises | Aucun renvoi dans P1 : éviter une fausse proximité |
| `/demarrer-un-projet`                  | Décrire une demande à l’équipe                                    | Le guide fournit d’abord une action autonome                        | CTA après démonstration et sortie explicite        |
| `/guides`                              | Répertoire éditorial                                              | Hub de parcours, pas réponse à la validation d’idée                 | Lien de retour en fin de guide                     |

Justification d’une URL distincte : la page service suppose un projet à
étudier, tandis que ce guide apprend au lecteur à décider si un produit mérite
seulement d’être cadré.

### Ancien corpus

L’ancien slug reste présent dans l’inventaire fermé des redirections au début
de P1. La route statique du nouveau candidat prime localement, mais
l’orchestrateur devra retirer le slug de
`src/lib/legacy-guide-redirects.ts` après validation, dans son périmètre, puis
rejouer les tests de redirection. P1 ne modifie pas ce fichier.

---

## D. Analyse externe

### Demande et vocabulaire observés

Requêtes observées le 29 juillet 2026 :

- `valider une idée SaaS avant de développer` ;
- `tester son idée SaaS sans développer` ;
- `valider son idée SaaS volonté de payer` ;
- `comment valider une idée de SaaS`.

Questions visibles :

- faut-il créer un MVP avant de valider ;
- combien d’entretiens réaliser ;
- comment savoir si un prospect paiera ;
- quelle différence entre liste d’attente, prévente et pilote ;
- comment protéger l’idée ;
- comment décider « go ou no-go » ;
- combien de temps ou d’argent consacrer au test.

Search Console et Keyword Planner n’ont pas été ouverts dans cette passe. Aucun
volume, aucune difficulté et aucun taux de clic ne sont inventés.

### Carte concurrentielle

| Page observée le 29/07/2026                                       | Réponse et angle                                | Bon point                                             | Manque décisionnel ou prudence                                                                                                                             |
| ----------------------------------------------------------------- | ----------------------------------------------- | ----------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| PeakLab, « Comment valider son idée de SaaS avant de développer » | Entretiens, page, prévente, prototype et seuils | Distingue compliments et engagements                  | Publie 2 à 6 semaines, moins de 2 000 €, 10 à 20 entretiens, 10 % de conversion et des statistiques d’échec sans corpus suffisant pour en faire des normes |
| Luciol, « Valider une idée de SaaS ou micro-SaaS en France »      | Méthode en dix phases et niche précise          | Rappelle qu’une cible vague produit une réponse vague | Promesse de méthode « complète » ; peu de séparation entre ce qu’un test montre et ce qu’il ne montre pas                                                  |
| PayPro Global, « Comment valider votre idée SaaS »                | Checklist, marché, valeur, client               | Panorama accessible                                   | Contenu lié à une ressource d’acquisition et à une solution de paiement ; décision B2B et faux positifs peu approfondis                                    |
| Aetherio, « Valider idée application »                            | Entretiens, page et prototype sans code         | Montre plusieurs formats de test                      | Statistique « plus de 70 % » non suffisamment étayée ; prototype et validation commerciale restent proches                                                 |
| Bpifrance Création, « Le Lean Startup »                           | Hypothèses puis confrontation au marché         | Source publique française, langage sobre              | Cadre général, pas de protocole B2B ni de hiérarchie détaillée des engagements                                                                             |

### Angle mort commun

Les pages donnent souvent un nombre universel d’entretiens, un taux de
conversion ou un budget de validation. Elles parlent moins du décalage B2B
entre utilisateur, responsable métier, acheteur et signataire. Elles séparent
rarement ce qu’un entretien, une page, une maquette, un pilote manuel, une offre
ou un essai technique permettent vraiment de conclure.

### Valeur supplémentaire retenue

- six inconnues distinctes plutôt qu’une idée globalement « validée » ;
- un tableau « test / observation / limite » ;
- une hiérarchie honnête des engagements ;
- un outil local qui oblige à écrire continuer, pivoter et arrêter avant le
  résultat, sans score opaque ;
- un scénario fictif où le problème est confirmé mais le développement reste
  refusé faute de chemin d’achat suffisant ;
- les limites B2B, données personnelles et confidentialité adaptées à la
  France.

---

## E. Fiche de preuves

Sources ouvertes et relues le 29 juillet 2026.

| ID  | Affirmation utilisable                                                                                                                                                                                                                                                                                                                                                | Source primaire ou officielle                                                                                                                                                                                                                                  | Périmètre/date                                                     | Confiance                                          | Conséquence lecteur                                                                                                          | Fraîcheur                                          |
| --- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| F01 | Une carte de test explicite hypothèse, test, mesure et seuil avant l’expérience                                                                                                                                                                                                                                                                                       | Strategyzer, [Test Card](https://www.strategyzer.com/library/validate-your-ideas-with-the-test-card), 5 mars 2015                                                                                                                                              | Méthode d’expérimentation commerciale                              | Élevée pour le cadre, non prédictive               | Écrire la décision avant de connaître le résultat                                                                            | Stable                                             |
| F02 | Ce que les personnes font est généralement plus probant que ce qu’elles disent ; l’investissement demandé renforce le signal dans son périmètre                                                                                                                                                                                                                       | Strategyzer, [Business testing: is your hypothesis really validated?](https://www.strategyzer.com/library/business-testing-is-your-hypothesis-really-validated), 6 mai 2021                                                                                    | Hiérarchie méthodologique, pas norme statistique                   | Élevée avec limite                                 | Ne pas comparer un compliment, un e-mail, du temps et un paiement comme des preuves équivalentes                             | Stable                                             |
| F03 | Une hypothèse utile est testable, précise et séparée des autres                                                                                                                                                                                                                                                                                                       | Strategyzer, [Formulating strong hypotheses](https://www.strategyzer.com/library/mastering-business-testing-formulating-strong-hypotheses), 3 décembre 2019                                                                                                    | Modèle économique                                                  | Élevée                                             | Un test ne doit pas prétendre valider problème, canal et prix à la fois                                                      | Stable                                             |
| F04 | En B2B, utilisateur, client et payeur peuvent être différents                                                                                                                                                                                                                                                                                                         | Steve Blank, [Customer Hypotheses](https://steveblank.com/2011/04/04/the-leanlaunch-pad-at-stanford-%E2%80%93-class-4-customer-hypotheses/), 4 avril 2011                                                                                                      | Customer development B2B                                           | Élevée pour la distinction des rôles               | Interroger un utilisateur ne suffit pas à connaître l’achat                                                                  | Stable                                             |
| F05 | Bpifrance recommande de définir problème, solution, acteurs, cible et indicateurs avant de développer                                                                                                                                                                                                                                                                 | Bpifrance Création, [Le Lean Startup](https://bpifrance-creation.fr/moment-de-vie/lean-startup)                                                                                                                                                                | Porteurs de projet en France, consulté 29/07/2026                  | Élevée pour le cadrage général                     | Commencer par les suppositions, pas l’ergonomie du produit                                                                   | Revoir si page évolue                              |
| F06 | Un prototype sert à explorer et tester avant de s’engager dans la construction ; son code ne doit pas être présumé prêt pour la production                                                                                                                                                                                                                            | GOV.UK Service Manual, [Making prototypes](https://www.gov.uk/service-manual/design/making-prototypes), publié 18 octobre 2016                                                                                                                                 | Services numériques publics britanniques                           | Élevée pour la discipline de prototype             | Une maquette testée peut être jetée ; elle ne prouve pas la sécurité ou la tenue en charge                                   | Stable                                             |
| F07 | Le MVP vise un apprentissage validé avec le moins d’effort utile ; il n’est pas synonyme de produit simplement petit                                                                                                                                                                                                                                                  | Eric Ries, [What is an MVP?](https://leanstartup.co/resources/articles/what-is-an-mvp/)                                                                                                                                                                        | Définition originale Lean Startup                                  | Élevée comme définition, non comme règle de succès | Ne construire que si l’apprentissage exige maintenant un produit utilisable                                                  | Stable                                             |
| F08 | Un travail manuel non industrialisable peut précéder l’échelle pour comprendre ce qui doit être construit                                                                                                                                                                                                                                                             | Y Combinator, [YC’s Essential Startup Advice](https://www.ycombinator.com/blog/ycs-essential-startup-advice/), 25 septembre 2017                                                                                                                               | Conseil d’accélérateur, pas étude contrôlée                        | Moyenne à élevée                                   | Tester un service rendu manuellement avant de l’automatiser                                                                  | Stable                                             |
| F09 | Pour une coordonnée professionnelle nominative, la prospection électronique B2B peut reposer sur l’intérêt légitime si l’objet est lié à la profession ; information et opposition simple et gratuite restent requises. La CNIL distingue les adresses génériques de personnes morales. Chaque sollicitation doit identifier l’émetteur et permettre un refus simple. | CNIL, [Prospection commerciale par courrier électronique](https://www.cnil.fr/fr/la-prospection-commerciale-par-courrier-electronique-sms-mms-et-automate-dappel), 10 juin 2026                                                                                | France, prospection professionnelle ; canal et contexte à vérifier | Élevée                                             | Distinguer adresse nominative et générique, documenter la source, l’objet professionnel, l’identité et le refus des relances | Revoir à chaque évolution CNIL/CPCE                |
| F10 | Les données collectées doivent être adéquates, pertinentes et nécessaires, avec une durée par catégorie                                                                                                                                                                                                                                                               | CNIL, [Minimiser les données collectées](https://www.cnil.fr/fr/minimiser-les-donnees-collectees), 27 janvier 2020                                                                                                                                             | RGPD, France/UE                                                    | Élevée                                             | Ne pas conserver en vrac enregistrements, détails clients ou données sensibles                                               | Revoir doctrine                                    |
| F11 | En collecte directe, l’information doit être fournie au moment du recueil et préciser notamment finalité, base, destinataires, durée et droits                                                                                                                                                                                                                        | CNIL, [Information et transparence](https://www.cnil.fr/fr/conformite-rgpd-information-des-personnes-et-transparence), mise à jour 26 juillet 2019                                                                                                             | RGPD, France/UE                                                    | Élevée                                             | Informer avant formulaire, entretien enregistré ou pilote                                                                    | Revoir doctrine                                    |
| F12 | Une durée de conservation dépend de l’objectif ayant justifié la collecte                                                                                                                                                                                                                                                                                             | CNIL, [Durées de conservation](https://www.cnil.fr/fr/passer-laction/les-durees-de-conservation-des-donnees), 2 avril 2026                                                                                                                                     | RGPD, France/UE                                                    | Élevée                                             | Une phase de test ne permet pas une conservation indéfinie                                                                   | Revoir si guide évolue                             |
| F13 | Une e-Soleau constitue une preuve de contenu et de date ; l’enveloppe ne constitue pas un titre de propriété industrielle                                                                                                                                                                                                                                             | INPI, [Se préparer au dépôt d’une e-Soleau](https://www.inpi.fr/realiser-demarches/propriete-intellectuelle/se-preparer-au-depot-dune-e-soleau) et brochure [Protéger ses créations](https://www.inpi.fr/sites/default/files/proteger_ses_creations.pdf), p. 3 | Propriété intellectuelle, France                                   | Élevée                                             | Dater une matérialisation n’accorde pas un monopole sur l’idée                                                               | Revoir procédure et tarifs avant citation chiffrée |
| F14 | Un accord de confidentialité peut encadrer l’échange avec un partenaire                                                                                                                                                                                                                                                                                               | INPI, brochure [Protéger ses créations](https://www.inpi.fr/sites/default/files/proteger_ses_creations.pdf), p. 3                                                                                                                                              | France, recommandation générale                                    | Élevée pour l’existence, pas conseil contractuel   | Réserver un accord adapté aux informations réellement sensibles                                                              | Stable, contenu personnalisé à faire vérifier      |
| F15 | Un intérêt déclaré ne prouve pas à lui seul une demande ; la validation doit aussi révéler les fragilités, confronter l’offre aux solutions existantes et ne pas chercher à confirmer l’idée à tout prix                                                                                                                                                              | Bpifrance Création, [Valider son marché avant de lancer son activité](https://bpifrance-creation.fr/encyclopedie/letude-marche/valider-son-marche/valider-son-marche-lancer-son-activite), mai 2026                                                            | Création d’activité en France, méthode générale                    | Élevée pour le cadrage, non prédictive             | Tester pourquoi le tableur, le logiciel existant, le prestataire ou l’inaction ne suffisent pas                              | Revoir si page évolue                              |

### Registre des affirmations

| ID  | Affirmation publique prévue                                                                                                     | Type                     | Source                                              | Statut P1                                                             |
| --- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------ | --------------------------------------------------- | --------------------------------------------------------------------- |
| A01 | Une idée SaaS doit être décomposée en suppositions testables                                                                    | DÉDUCTION fondée         | F01, F03, F05                                       | VÉRIFIÉ                                                               |
| A02 | Un entretien sur un épisode passé renseigne mieux le problème qu’une question sur l’achat futur                                 | RECOMMANDATION           | F02                                                 | VÉRIFIÉ, sans absolutisme                                             |
| A03 | Utilisateur, responsable, acheteur et signataire peuvent différer en B2B                                                        | FAIT de méthode          | F04                                                 | VÉRIFIÉ                                                               |
| A04 | Une liste d’attente mesure une action légère dans le trafic et la promesse choisis                                              | DÉDUCTION                | F02                                                 | VÉRIFIÉ, portée affichée                                              |
| A05 | Un engagement commercial renseigne davantage l’achat mais pas l’usage répété                                                    | DÉDUCTION                | F02                                                 | VÉRIFIÉ, limite visible                                               |
| A06 | Un prototype peut être jetable et ne doit pas être confondu avec le code de production                                          | FAIT/recommandation      | F06                                                 | VÉRIFIÉ                                                               |
| A07 | Un pilote manuel renseigne le résultat et les opérations cachées, pas l’économie future du logiciel                             | DÉDUCTION                | F08                                                 | VÉRIFIÉ, limite visible                                               |
| A08 | Le régime B2B de prospection électronique exige information et opposition simple ; sa base dépend du contexte                   | FAIT juridique général   | F09                                                 | VÉRIFIÉ et nuancé                                                     |
| A09 | Les données d’entretiens et pilotes doivent être minimisées, informées et conservées pour une durée justifiée                   | FAIT juridique général   | F10–F12                                             | VÉRIFIÉ                                                               |
| A10 | e-Soleau date un contenu mais n’est pas un titre de propriété industrielle                                                      | FAIT                     | F13                                                 | VÉRIFIÉ                                                               |
| A11 | Le scénario de pièces fournisseurs est entièrement fictif                                                                       | SCÉNARIO                 | Hypothèses G                                        | VÉRIFIÉ par étiquette, aucune preuve client                           |
| A12 | Il n’existe pas de nombre universel d’entretiens ou de taux universel autorisant un MVP                                         | RECOMMANDATION prudente  | absence de norme primaire, limites concurrentielles | À NUANCER : formulé « pas de nombre applicable à tous les projets »   |
| A13 | Un paiement de pilote prouve qu’un marché est validé                                                                            | FAIT supposé             | —                                                   | À RETIRER : le paiement ne couvre qu’une organisation et un périmètre |
| A14 | Un problème réel ne justifie pas un nouveau SaaS si une réponse existante reste acceptable                                      | DÉDUCTION/recommandation | F15                                                 | VÉRIFIÉ, contre-cas visible                                           |
| A15 | Le contrôle de la carte ne valide pas son contenu ; il vérifie seulement la présence des champs et la compatibilité risque/test | FAIT logiciel            | code et tests du composant                          | VÉRIFIÉ, limite affichée dans l’interface                             |

### Contradictions et données à ne pas publier

- `42 %` des échecs pour absence de besoin : ancien corpus de post-mortems,
  souvent cité comme statistique universelle.
- `plus de 70 %`, `90 %` ou `92 %` d’échec : périmètre non démontré.
- `10 à 20 entretiens`, `2 à 6 semaines`, `moins de 2 000 €`, `10 % de
conversion`, `10 % du budget produit` : repères concurrents non transposables
  sans population, canal, prix et décision.
- « Une prévente valide le marché » : trop absolu.
- « Une lettre d’intention vaut contrat » : non retenu.
- « Une idée est protégée par e-Soleau » : faux raccourci.
- « Le NDA est obligatoire avant tout entretien » : non fondé et parfois
  contre-productif ; aucun conseil individuel n’est donné.
- « Un prototype no-code est déjà le MVP » : confusion retirée.
- Toute affirmation sur un délai ou prix Hagnéré Code sans source commerciale
  actuelle.
- « La carte de test est validée » lorsqu’un formulaire est simplement
  complet : le composant n’évalue ni l’échantillon, ni la qualité du seuil, ni
  la réalité des observations.

---

## F. Matrice d’information utile et plan annoté

| Section                       | Question résolue                                | Preuve ou démonstration | Décision produite                                                        | Format               |
| ----------------------------- | ----------------------------------------------- | ----------------------- | ------------------------------------------------------------------------ | -------------------- |
| 01. Réponse courte            | Quand ne pas développer ?                       | A01–A05                 | Identifier l’inconnue la plus dangereuse                                 | Prose + illustration |
| 02. Six inconnues             | Qu’est-ce qui doit être vrai ?                  | F03–F05                 | Séparer problème, utilisateur, acheteur, canal, offre et faisabilité     | Cartes/tableau       |
| 03. Entretiens                | Que demander ?                                  | F02, F04                | Relever un épisode passé et le parcours d’achat                          | Questions commentées |
| 04. Tests sans produit        | Quel test correspond à quelle inconnue ?        | F02, F06–F08            | Choisir le test le plus léger qui observe le risque                      | Tableau mobile       |
| 05. Engagements               | Tous les « oui » se valent-ils ?                | F02                     | Monter d’un cran sans surinterpréter                                     | Échelle commentée    |
| 06. Carte de test             | Comment écrire une décision avant le résultat ? | F01, composant local    | Copier hypothèse, mesure, trois sorties, responsable                     | Outil interactif     |
| 07. Scénario fictif           | Comment interpréter un résultat mixte ?         | G01–G08                 | Continuer le test acheteur sans coder                                    | Chronologie + calcul |
| 08. Données et secret         | Comment tester proprement en France ?           | F09–F14                 | Minimiser, informer, organiser l’opposition, protéger ce qui doit l’être | Checklist            |
| 09. Continuer/pivoter/arrêter | Quand un MVP devient-il raisonnable ?           | Synthèse A01–A13        | Une des quatre sorties écrites                                           | Matrice finale       |

### Empreinte éditoriale distincte

| Guide observé                  | Ouverture                          | Progression                                          | Artefact                | Mécanisme à ne pas reprendre                                         |
| ------------------------------ | ---------------------------------- | ---------------------------------------------------- | ----------------------- | -------------------------------------------------------------------- |
| `automatiser-processus-metier` | Travail répétitif concret          | Carte → cinq portes → sept options → calcul → pilote | Calculateur de capacité | Portes bloquantes et ROI                                             |
| Page service SaaS              | Promesse de construction           | Offre, architecture, scénarios et plans              | Checklist commerciale   | Partir d’un produit déjà décidé                                      |
| Ancien guide retiré            | Validation globale puis hiérarchie | Long protocole et seuils fictifs                     | Journal statique        | Reprendre ses formulations, son score ou sa « porte à cinq verrous » |

Choix P1 :

```text
Tension : l’enthousiasme existe, mais aucune réponse ne dit encore qui paiera.
Ouverture : la conversation « tout le monde trouve l’idée bonne » puis réponse immédiate.
Progression : six inconnues → entretiens → tests → engagements → carte → cas mixte → décision.
Artefact : générateur local de carte à trois sorties, sans score.
Rythme : objections concrètes, tableaux courts, scénario qui refuse encore le MVP.
CTA : après la décision, pour faire cadrer le test et non commander un SaaS.
Conclusion : nommer le risque le plus faible en preuve et écrire le prochain test.
Différences : pas de ROI, pas de portes, pas de nombre universel, pas de faux cas client,
pas de téléchargement, pas de conclusion automatique vers le développement.
```

---

## G. Calculs et scénario fictif

Toutes les valeurs ci-dessous sont inventées, arrondies et ne décrivent aucun
client de Hagnéré Code.

### Scénario

Une fondatrice envisage un SaaS qui relance les pièces manquantes dans les
dossiers fournisseurs de PME industrielles.

Elle écrit ses propres critères avant chaque test :

- problème : continuer si la proportion prévue d’entretiens qualifiés relate
  un épisode récent documentable ; le seuil lui appartient et n’est pas publié
  comme norme ;
- acheteur : pivoter si les responsables achats confirment le problème mais
  ne peuvent pas nommer le budget ou le signataire ;
- offre : arrêter cette version si aucun acheteur habilité n’accepte la
  prochaine étape écrite, malgré un recrutement conforme ;
- faisabilité : suspendre si les documents nécessaires ne peuvent pas être
  utilisés légalement ou techniquement dans le périmètre visé.

Résultat fictif :

- 7 entretiens qualifiés ;
- 6 personnes relatent un épisode récent ;
- 4 montrent un suivi actuel par courriels et tableur ;
- 2 donnent une introduction vers une personne qui peut engager un budget ;
- 3 propositions de service manuel sont présentées ;
- 1 acheteur signe un pilote payé de `480 € HT`.

Interprétation : le problème est mieux documenté, mais une seule organisation
et un seul paiement ne prouvent ni un canal répétable, ni la demande de
plusieurs entreprises, ni l’usage durable. La décision fictive est de continuer
le test acheteur avec un segment resserré, pas de développer le MVP.

### Budget de test fictif

```text
Temps interne valorisé de la fondatrice : 28 h × 55 €/h = 1 540 €
Recrutement ciblé et déplacements : 240 € HT
Revue technique ciblée : 3 h × 120 € HT = 360 € HT
Autres coûts connus : 0 € saisi, donc « aucun autre montant renseigné »
Effort connu valorisé : 1 540 + 240 + 360 = 2 140 €
Encaissement du pilote fictif : 480 € HT
Écart de trésorerie connu : 480 − 240 − 360 = −120 € hors taxes et avant
fiscalité, le temps interne n’étant pas un décaissement supplémentaire
Effort valorisé net de l’encaissement : 2 140 − 480 = 1 660 €
```

Le guide n’appelle ni `−120 €` ni `1 660 €` un ROI, un bénéfice ou une perte
comptable. Le premier écart dépend du traitement du temps interne et exclut
fiscalité, traitement réel de la TVA et coûts inconnus. Le second est un effort
d’apprentissage valorisé, pas une perte évitée ni une preuve de rentabilité.

### Contrôle manuel

- `28 × 55 = 1 540`
- `3 × 120 = 360`
- `1 540 + 240 + 360 = 2 140`
- `480 − 240 − 360 = −120`
- `2 140 − 480 = 1 660`

### Limites

Exclus : conseil juridique, assurance, TVA récupérable ou non, outil de
prototype déjà détenu, frais bancaires, coût de délivrance du pilote, futur
développement, maintenance, support, acquisition à l’échelle et coût de sortie.
Chaque exclusion reste « à confirmer », jamais zéro implicite.

---

## H. Ressource, conversion et journal P1

```text
Ressource externe nécessaire : non
Résultat autonome : carte de test copiée dans le presse-papiers
Format : formulaire HTML local + bloc texte sélectionnable
Rubriques : risque, segment, hypothèse, test, observation, continuer, pivoter,
arrêter, responsable, portée et limite
Exemple rempli : scénario fictif des pièces fournisseurs
Conclusion « ne pas investir » : oui
Données saisies : état React local, aucun envoi réseau
Téléchargement : aucun XLS, XLSX, CSV ou PDF
Bon fit Hagnéré Code : problème B2B documenté, acheteur accessible,
prochaine incertitude technique ou produit précise
Mauvais fit : demande de coder pour éviter les entretiens, clone, budget sans
exploitation, collecte opaque ou volonté de fabriquer une fausse prévente
CTA : /demarrer-un-projet
Résultat après clic : parcours guidé de description d’un projet, sans promesse de délai
```

### Rapport P1 — création complète

```text
PASSE_1_TERMINEE
Slug : valider-idee-saas-avant-developper
Fichiers : dossier de recherche, page, OG, outil local, tests, images et entrée registre
Contrat : choisir un test sans produit puis continuer, pivoter, arrêter ou cadrer un MVP
Sources : Strategyzer, Steve Blank, Bpifrance, GOV.UK, Lean Startup,
Y Combinator, CNIL et INPI
Plan : neuf sections, trois catégories FAQ
Calculs : scénario fictif 2 140 €, 480 €, −120 € et 1 660 €, sans faux ROI
Contre-cas : compliments, entourage, liste d’attente, utilisateur sans acheteur,
prototype confondu avec production, paiement unique, faisabilité inconnue
CTA : /demarrer-un-projet, cadrage du test décisif
Contrôles : outil 6/6, ESLint, TypeScript et build directs verts ; 409/411
tests globaux, deux garde-fous de transition explicités ci-dessous
Risques : absence de test lecteur humain ; retrait de la redirection réservé à l’orchestrateur
Manifeste : docs/research/manifests/valider-idee-saas-avant-developper-p1.sha256
```

### Contrôles P1 historiques exécutés le 29 juillet 2026

| Contrôle                     | Résultat           | Preuve ou limite                                                                                                                                |
| ---------------------------- | ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Formatage ciblé              | OK                 | Prettier exécuté sur le dossier de route, le registre et ce dossier de recherche                                                                |
| Espaces et marqueurs Git     | OK                 | `git diff --check` sans sortie avant snapshot                                                                                                   |
| Outil de carte de test       | OK, 6/6            | Cas complet, champ manquant, incompatibilité entretien/prix, essai technique, page d’attente et normalisation                                   |
| ESLint ciblé                 | OK                 | Page, OG, outil, tests et registre                                                                                                              |
| TypeScript                   | OK                 | `npx tsc --noEmit`                                                                                                                              |
| Build Next direct            | OK                 | 60 pages générées ; route et OG du guide présentes. Commande directe utilisée car le `prebuild` appelle les garde-fous de transition ci-dessous |
| Route locale                 | HTTP 200           | H1 unique ; canonique `https://hagnere-code.ai/guides/valider-idee-saas-avant-developper`                                                       |
| Indexation en brouillon      | OK                 | `noindex, nofollow`, cohérent avec `ready-for-human-review`                                                                                     |
| JSON-LD propre à la page     | OK                 | Deux scripts seulement : `Article` et `BreadcrumbList` ; aucun `FAQPage`                                                                        |
| OG dynamique                 | HTTP 200           | `content-type: image/png`                                                                                                                       |
| Images Article               | OK                 | 1600 × 900, 1200 × 900 et 1200 × 1200 WebP ; inspection visuelle du carré après correction de cadrage                                           |
| Temps de lecture rendu       | 3 247 mots, 16 min | Mesure sur l’élément `article` servi à 200 mots/minute ; registre corrigé à 16                                                                  |
| Suite SEO ciblée             | 169/171            | Deux échecs attendus : inventaire de test encore figé à un seul guide ; nouveau slug encore déclaré comme redirection historique                |
| Suite globale                | 409/411            | Les mêmes deux échecs, aucun autre                                                                                                              |
| Navigateur responsive        | Non exécuté        | Le navigateur intégré demandé par le protocole était indisponible dans cette session ; aucune preuve de BAT n’est revendiquée                   |
| Lecteur humain non technique | Non exécuté        | Réservé à la porte de validation orchestrateur et aux passes suivantes                                                                          |

Les deux tests rouges ne sont pas corrigés en passe 1 : les seules corrections
possibles toucheraient `src/lib/guides.test.ts` et
`src/lib/legacy-guide-redirects.ts`, expressément hors du périmètre de cet
agent. La route statique est néanmoins générée par Next. L’orchestrateur devra
retirer la redirection historique et mettre à jour l’attente du registre
seulement après validation éditoriale.

Ce tableau décrit exclusivement le snapshot P1. Après `GO_PASSE_2`,
l’orchestrateur a réalisé ces deux ajustements d’intégration dans son propre
périmètre. Leurs tests sont verts dans l’état P2 ; ils ne sont ni réécrits ni
inclus dans le manifeste P2 de l’agent.

### Revue P1 préparatoire

La scorecard finale, la validation humaine, le contre-audit indépendant et
`GO_QUALITE_GUIDE` restent volontairement vides. Ils appartiennent aux passes
et portes suivantes. P1 n’utilise aucune validation historique pour les
préremplir.

### Test lecteur non technique

```text
Test par une personne réelle : non
Compréhension : non mesurée
Point de survol : non mesuré
Passage commercial : non mesuré
Corrections issues d’un lecteur : aucune
```

### Risques résiduels remis à G1

1. Les seuils du scénario doivent rester clairement propres au scénario.
2. La nuance juridique CNIL doit rester générale et datée.
3. Le statut registre demeure `ready-for-human-review`.
4. Le slug reste dans l’inventaire des redirections historiques : correction
   volontairement réservée à l’orchestrateur après gate.
5. Le BAT responsive en navigateur réel reste à exécuter : la connexion au
   navigateur intégré était indisponible pendant cette passe.
6. Aucune publication, indexation, performance de terrain ou conversion n’est
   prouvée par cette passe.

---

## I. Rapport P2 — enrichissement et vérification contradictoire

```text
PASSE_2_TERMINEE
Slug : valider-idee-saas-avant-developper
Date de contrôle : 29 juillet 2026
Agent distinct : /root/g1_p2_verification
Décision proposée : remise à l’orchestrateur pour la porte G2
P0 ouverts : 0
P1 ouverts : 0 après correction
P2 éditoriaux bloquants ouverts : 0
Publication, commit, push ou déploiement : aucun
Statut registre : ready-for-human-review, inchangé
```

### Périmètre relu

La passe a relu le protocole éditorial complet, le dossier de recherche, la
page, l’image Open Graph, l’outil de carte de test, ses tests, le registre et
les trois images déclarées dans le balisage `Article`. Elle a contrôlé le rendu
HTML local et les sources publiques. Les modifications d’intégration apportées
par l’orchestrateur dans `src/lib/guides.test.ts`,
`src/lib/legacy-guide-redirects.ts` et son test restent hors du périmètre et du
manifeste P2.

Fichiers textuels corrigés pendant P2 :

- `docs/research/valider-idee-saas-avant-developper.md` ;
- `src/app/guides/valider-idee-saas-avant-developper/page.tsx` ;
- `src/app/guides/valider-idee-saas-avant-developper/validation-test-planner.tsx` ;
- `src/app/guides/valider-idee-saas-avant-developper/validation-test-planner.test.ts` ;
- `src/lib/guides.ts`.

L’image Open Graph et les trois images WebP n’ont pas nécessité de correction
visuelle pendant P2, mais elles appartiennent au snapshot exact contrôlé.

### Sources rouvertes et contradictoires

Les sources primaires ou officielles suivantes ont été rouvertes le
29 juillet 2026 :

- les trois ressources Strategyzer sur la carte de test, la force des preuves
  et la formulation d’une hypothèse ;
- Steve Blank sur la distinction entre utilisateur, client, payeur,
  prescripteur et décideur ;
- Bpifrance Création sur le Lean Startup et, dans sa publication de mai 2026,
  sur la différence entre intérêt déclaré et demande, la recherche de
  fragilités et la comparaison aux réponses existantes ;
- le `Service Manual` GOV.UK sur le prototype exploratoire et le code qui
  n’est pas présumé prêt pour la production ;
- Eric Ries sur le MVP comme moyen d’apprentissage, sans formule universelle ;
- Y Combinator sur le travail manuel initial, utilisé comme conseil
  d’accélérateur et non comme étude contrôlée ;
- la CNIL sur la prospection B2B, la minimisation, l’information et les durées
  de conservation ;
- l’INPI sur l’e-Soleau et l’accord de confidentialité.

Les douze URL publiques effectivement présentées dans la page servie ont
répondu en HTTP 200. Aucune durée, aucun budget, aucun nombre d’entretiens,
aucun taux de conversion et aucune chance de succès n’est transformé en norme.
Search Console et Keyword Planner n’ont pas été utilisés ; aucun volume de
recherche n’est affirmé.

### Constats contradictoires et corrections

| Gravité initiale | Constat                                                                                                                                                                                               | Correction                                                                                                                                                                                                                                   | État |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---- |
| P1               | Le scénario mélangeait un paiement annoncé hors taxes et des dépenses dont le traitement HT/TTC n’était pas assez explicite, ce qui pouvait faire passer un effort valorisé pour une perte ou un ROI. | Les dépenses externes sont maintenant explicitement HT, le temps interne est distingué d’un décaissement, la TVA et la fiscalité restent inconnues, et les deux écarts sont nommés « écart de trésorerie connu » et « effort valorisé net ». | Clos |
| P1               | L’outil annonçait qu’une carte complète pouvait « produire une décision », alors qu’il ne vérifie ni le recrutement, ni la qualité du seuil, ni une observation réelle.                               | Le résultat confirme uniquement que la structure de la carte est complète. Une limite visible précise exactement ce que l’outil ne valide pas. Un septième test empêche le retour de l’ancienne surpromesse.                                 | Clos |
| P2               | L’intérêt pour le problème pouvait encore être lu comme une preuve suffisante de demande.                                                                                                             | Ajout de la position Bpifrance de mai 2026 et d’un contre-test explicite des réponses déjà acceptables : tableur, logiciel existant, prestataire ou inaction.                                                                                | Clos |
| P2               | Le test de canal relevait insuffisamment l’effort réel de recrutement.                                                                                                                                | Le journal d’observation inclut désormais source du contact, rôles, réponses, rendez-vous, effort et coût.                                                                                                                                   | Clos |
| P2               | Le pilote payé ne rappelait pas assez les conditions opérationnelles qui peuvent invalider son signal.                                                                                                | Ajout d’un tableau sur résultat et durée, données et accès, confidentialité et droits, fin et restitution, prix et charge, avec responsables et conditions d’arrêt.                                                                          | Clos |
| P2               | La formulation CNIL pouvait faire oublier la différence entre une adresse professionnelle nominative et une adresse générique de personne morale.                                                     | Le texte distingue les deux cas, limite l’intérêt légitime au message lié à la profession et conserve l’exigence d’information, d’identité de l’émetteur et d’opposition simple et gratuite.                                                 | Clos |
| P2               | Le lien commercial final ne montrait que le formulaire projet.                                                                                                                                        | La page explique d’abord le service SaaS pertinent, puis conserve le CTA vers `/demarrer-un-projet`, sans promesse de délai ni obligation de développer.                                                                                     | Clos |

Aucun conseil juridique individualisé, aucun faux client, aucun résultat
terrain et aucune performance commerciale ne sont ajoutés. La qualification
CNIL reste générale et datée ; un contexte réel peut nécessiter une revue
juridique.

### Réconciliation du scénario chiffré

```text
Temps interne valorisé : 28 × 55 = 1 540 €
Recrutement et déplacements : 240 € HT
Revue technique : 3 × 120 = 360 € HT
Effort connu valorisé : 1 540 + 240 + 360 = 2 140 €
Encaissement fictif : 480 € HT
Écart de trésorerie connu : 480 − 240 − 360 = −120 € HT
Effort valorisé net : 2 140 − 480 = 1 660 €
```

Le temps interne ne devient pas artificiellement un paiement. Le coût de
délivrance du pilote, la TVA récupérable ou non, la fiscalité, les outils, les
frais bancaires et tout coût non renseigné restent exclus. Le texte ne présente
donc ni `−120 €` ni `1 660 €` comme une perte comptable, un bénéfice ou un ROI.

### Contrôles actuels exécutés après correction

| Contrôle                            | Résultat        | Preuve ou limite                                                                                                                                                      |
| ----------------------------------- | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Test unitaire de l’outil            | OK, 7/7         | Inclut le garde-fou « carte complète mais hypothèse non vérifiée »                                                                                                    |
| ESLint ciblé                        | OK              | Page, OG, outil, test et registre                                                                                                                                     |
| TypeScript                          | OK              | `npx tsc --noEmit` sans erreur                                                                                                                                        |
| Suite globale                       | OK, 412/412     | 73 fichiers de tests                                                                                                                                                  |
| Contrôle SEO, environnement courant | OK, 171/171     | 33 fichiers                                                                                                                                                           |
| Contrôle SEO, `NODE_ENV=production` | OK, 171/171     | Même inventaire ; le guide reste volontairement en brouillon                                                                                                          |
| Build de production                 | OK              | `NEXT_PUBLIC_ENV=production npm run build` ; postbuild : 43 URL dans le sitemap, 26 liens dans `llms.txt`, 43 pages, 2 temps de lecture et 74 blocs JSON-LD contrôlés |
| Route locale servie                 | OK, HTTP 200    | 3 699 mots dans `article`, soit 18 minutes à 200 mots/minute ; registre corrigé de 16 à 18                                                                            |
| Canonique et robots                 | OK              | Canonique propre au slug ; `noindex, nofollow` cohérent avec `ready-for-human-review`                                                                                 |
| Données structurées                 | OK              | Un `Article` et un `BreadcrumbList` seulement ; trois images ; aucun faux `FAQPage` ou `HowTo`                                                                        |
| Hub, sitemap et `llms.txt`          | Absent, attendu | Le brouillon n’est exposé dans aucun des trois avant validation et publication                                                                                        |
| Formats indésirables                | Absents         | Aucun XLS, XLSX ou CSV                                                                                                                                                |
| Images Article                      | OK              | WebP 1600 × 900, 1200 × 900 et 1200 × 1200 ; cadrages et lisibilité contrôlés                                                                                         |
| Espaces et marqueurs Git            | OK              | `git diff --check` sans erreur à la clôture P2                                                                                                                        |

### Limites et risques transmis à la porte G2

1. Le navigateur intégré n’était pas disponible après la procédure de
   dépannage prévue par le skill navigateur. Aucun BAT responsive, zoom,
   clavier, mode sombre ou lecteur d’écran n’est revendiqué. Ce contrôle reste
   obligatoire avant `GO_QUALITE_GUIDE`.
2. Aucun lecteur humain non technique n’a encore exécuté le guide ou la carte
   de test. La mesure de compréhension et les corrections issues de ce test
   restent à faire à la porte transversale.
3. `npm audit --omit=dev` signale dix vulnérabilités hautes dans des
   dépendances transitives de build ou de rendu (`glob`/`minimatch`/
   `brace-expansion` et `sharp`). Le correctif automatique proposé impose des
   changements forcés potentiellement cassants ; aucune dépendance partagée
   n’est donc modifiée dans cette passe éditoriale. Le build applicatif reste
   vert, mais ce risque projet doit être traité séparément.
4. Le maillage sortant du guide vers la page service existe. Un éventuel lien
   retour de la page service vers ce guide relève de l’orchestrateur et de la
   stratégie de publication ; le hub créera son lien seulement après passage
   au statut publiable.
5. Cloudflare, Vercel, l’URL publique, Search Console, l’indexation et la
   conversion réelle ne sont pas testés ni revendiqués en P2.

Conclusion de l’agent P2 : aucun P0, P1 ou P2 éditorial bloquant ne demeure
dans le snapshot. Les limites ci-dessus interdisent encore toute déclaration
de publication finale. Le manifeste P2 fige précisément le candidat remis à
l’orchestrateur ; seul celui-ci peut prononcer `GO_PASSE_3`.

---

## J. Rapport P3 — polish rédactionnel

```text
PASSE_3_TERMINEE
Slug : valider-idee-saas-avant-developper
Date de contrôle : 29 juillet 2026
Agent distinct : /root/g1_p3_polish
Décision proposée : remise à l’orchestrateur pour la porte G3
Statut registre : ready-for-human-review, inchangé
Publication, commit, push ou déploiement : aucun
```

### État d’entrée et périmètre

La passe a d’abord vérifié intégralement le manifeste P2 : les neuf fichiers
du snapshot correspondaient à leurs empreintes. Elle a ensuite relu la
gouvernance, le dossier P2, la page, l’image sociale, l’outil local, ses tests,
le registre et l’empreinte du guide voisin
`automatiser-processus-metier`.

Fichiers textuels modifiés pendant P3 :

- `docs/research/valider-idee-saas-avant-developper.md` ;
- `src/app/guides/valider-idee-saas-avant-developper/page.tsx` ;
- `src/app/guides/valider-idee-saas-avant-developper/opengraph-image.tsx` ;
- `src/app/guides/valider-idee-saas-avant-developper/validation-test-planner.tsx` ;
- `src/lib/guides.ts`.

Le test unitaire et les trois images WebP n’ont pas été modifiés, mais ils
restent inclus dans le snapshot P3 contrôlé. Les fichiers d’intégration de
l’orchestrateur, dont les redirections et leurs tests, sont restés hors
périmètre.

### Problèmes de lecture corrigés

1. Le héros et l’ouverture définissent maintenant immédiatement un SaaS puis
   une hypothèse avec des mots courants.
2. Les 150 premiers mots décrivent l’enthousiasme initial, répondent que les
   retours ne suffisent pas, séparent les six questions et annoncent
   explicitement les décisions : continuer, changer l’hypothèse ou arrêter.
3. Les H2 abstraits sur le « sacrifice », la « décision étroite » et le
   « matériau » ont été remplacés par des titres qui gardent leur sens hors
   contexte.
4. Le sommaire, le héros, les CTA et la FAQ parlent de la décision du lecteur
   plutôt que de « preuve proportionnée », de « périmètre » ou de processus
   d’agence.
5. Les trois liens auparavant nommés « Voir la méthode » ont reçu des libellés
   distincts qui annoncent leur destination.
6. « Pivoter » est traduit par « changer d’hypothèse » avant d’être conservé
   entre parenthèses dans la matrice finale.
7. Les durées de la préparation sont désormais présentées comme un exemple à
   adapter, pas comme une norme de validation.
8. Les phrases longues sur la prospection électronique ont été séparées sans
   modifier la distinction CNIL entre adresse professionnelle nominative et
   adresse générique de personne morale.
9. Le scénario chiffré progresse désormais des règles du test aux résultats,
   au coût puis à la décision, avec moins de formules abstraites.
10. Le texte visible de l’outil correspond exactement à son comportement : il
    contrôle les champs et la compatibilité question/test, mais ne juge ni le
    recrutement, ni le seuil, ni la réalité de l’observation.

### Nuances P2 volontairement préservées

- les six inconnues restent séparées ;
- aucun nombre d’entretiens, taux, budget ou délai n’est érigé en seuil
  universel ;
- utilisateur, responsable, acheteur et signataire restent distingués ;
- entretien, page, prototype, pilote, offre et essai technique conservent
  chacun leur portée et leurs limites ;
- le pilote payé ne prouve ni usage répété, ni renouvellement, ni rentabilité ;
- le scénario reste explicitement fictif ;
- les montants et opérations restent `28 × 55 = 1 540 €`,
  `3 × 120 = 360 €`, `1 540 + 240 + 360 = 2 140 €`,
  `480 − 240 − 360 = −120 € HT` et `2 140 − 480 = 1 660 €` ;
- le temps interne reste distinct d’un décaissement, et fiscalité, TVA et
  coûts inconnus restent à confirmer ;
- les nuances CNIL, minimisation, conservation, e-Soleau et confidentialité
  restent générales et reliées à leurs sources ;
- aucun client, résultat, délai ou conseil juridique individualisé n’a été
  ajouté ;
- le statut `ready-for-human-review` reste inchangé.

### Empreinte distincte du guide voisin

Le guide conserve une progression propre :

```text
idée applaudie → six questions séparées → entretiens rétrospectifs →
tests sans produit → engagements → carte locale à trois décisions →
pilote fictif qui refuse encore le développement → cadre données/prospection →
continuer, changer, attendre ou arrêter
```

Il ne reprend ni les cinq portes, ni les sept réponses, ni le calculateur de
capacité, ni la conclusion ROI du guide
`automatiser-processus-metier`. Son artefact reste une carte de test locale,
sans score et sans téléchargement.

### Contrôles P3 exécutés

| Contrôle                            | Résultat                      | Preuve ou limite                                                                                                                                                                                       |
| ----------------------------------- | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Manifeste d’entrée P2               | OK, 9/9                       | `shasum -a 256 -c` avant toute correction                                                                                                                                                              |
| Formatage ciblé                     | OK                            | Prettier sur page, outil, test, OG et registre                                                                                                                                                         |
| Outil de carte de test              | OK, 7/7                       | Inclut le garde-fou qui sépare carte complète et validation réelle                                                                                                                                     |
| ESLint ciblé                        | OK                            | Page, outil, test, OG et registre                                                                                                                                                                      |
| TypeScript                          | OK                            | `npx tsc --noEmit`                                                                                                                                                                                     |
| Temps de lecture servi              | 3 919 mots, 20 min            | Mesure sur `article` à 200 mots/minute ; registre réconcilié                                                                                                                                           |
| SEO, environnement courant          | OK, 171/171                   | 33 fichiers                                                                                                                                                                                            |
| SEO, `NODE_ENV=production`          | OK, 171/171                   | 33 fichiers                                                                                                                                                                                            |
| Suite globale                       | OK, 412/412                   | 73 fichiers                                                                                                                                                                                            |
| Build production                    | OK                            | 60 routes générées ; guide et OG présents                                                                                                                                                              |
| Contrôle postbuild                  | OK                            | 43 URL sitemap, 26 liens `llms.txt`, 43 pages, 2 temps de lecture et 74 blocs JSON-LD                                                                                                                  |
| HTML de l’artefact servi            | OK, HTTP 200                  | H1 unique, canonical exact, `noindex, nofollow`, FAQ visible et CTA `/demarrer-un-projet`                                                                                                              |
| Données structurées                 | OK                            | `Article` et `BreadcrumbList` seulement ; aucun `FAQPage`, `HowTo`, `Offer` ou avis                                                                                                                    |
| Image OG                            | OK, HTTP 200                  | `content-type: image/png`                                                                                                                                                                              |
| Images Article                      | OK                            | 1600 × 900, 1200 × 900 et 1200 × 1200 WebP, inchangées                                                                                                                                                 |
| Espaces et marqueurs Git            | OK                            | `git diff --check`                                                                                                                                                                                     |
| Audit des dépendances de production | 10 alertes hautes transitives | Même portée que P2 : OpenNext/Cloudflare, `glob`/`minimatch`/`brace-expansion` et `sharp`; les corrections proposées imposent `--force` et des versions cassantes, donc aucune mutation partagée en P3 |

### Risques résiduels remis à G3

1. La structure et le HTML servi ont été contrôlés, mais aucun BAT visuel
   complet aux dix largeurs, en thème sombre, zoom 200 %, clavier ou lecteur
   d’écran n’est revendiqué par P3. Il reste obligatoire avant
   `GO_QUALITE_GUIDE`.
2. Aucun lecteur humain non technique n’a participé. Aucune compréhension
   réelle ni point de survol humain n’est inventé.
3. Les dix alertes hautes transitives de l’audit npm restent un risque projet
   déjà qualifié en P2 ; aucun `npm audit fix --force` n’a été exécuté.
4. La publication, Vercel, la production publique, Search Console,
   l’indexation et la conversion restent hors de cette passe.

Le manifeste P3 fige le candidat remis à l’orchestrateur. Seul
l’orchestrateur peut prononcer `GO_PASSE_4`.

### Correctif demandé au contrôle G3

Le 29 juillet 2026 à `23:08:54+02:00`, l’agent P3 a réconcilié
`dateModified` avec l’instant réel relevé par `date -Iseconds`. Le précédent
instant `22:43:45+02:00` décrivait encore le snapshot P2 alors que la page,
l’image sociale et la microcopie avaient été substantiellement modifiées
pendant P3. Aucun autre contenu, calcul, statut éditorial ou fichier
d’intégration n’a été changé par ce correctif.

---

## K. Rapport P4 — antipasse IA et contrôle final rédactionnel

```text
PASSE_4_TERMINEE
Slug : valider-idee-saas-avant-developper
Date de contrôle : 29 juillet 2026
Agent distinct : /root/g1_p4_antipasse
Décision proposée : remise à l’orchestrateur pour la porte G4
P0 ouverts : 0
P1 ouverts : 0 après correction
P2 ouverts : 2 limites transversales consignées ci-dessous
Statut registre : ready-for-human-review, inchangé
Publication, commit, push ou déploiement : aucun
```

### Lecture hostile avant correction

L’audit a lu la page comme un dirigeant B2B qui survole d’abord les titres,
les tableaux et les encadrés, puis essaie réellement l’outil. Il a recherché
les structures trop régulières, les transitions mécaniques, le langage de
consultant, les répétitions de négations, la fausse assurance, les exemples
présentés comme du vécu, la survente du CTA et les divergences entre la page
et le comportement du composant.

Constats classés avant correction :

| Gravité | Constat                                                                                                                                                                                                                                                   | Risque lecteur                                                                                | État                                                                                                        |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| P1      | Quatre couples question/test pouvaient produire une carte verte alors que les propres limites du composant disaient que le test ne répondait pas directement à cette question : entretien/achat, page/problème, prototype/problème et pilote manuel/prix. | Prendre une carte complète pour une justification suffisante du prochain investissement.      | Corrigé et couvert par quatre tests de non-régression                                                       |
| P2      | L’encadré d’entrée distribuait artificiellement la préparation en `30`, `45` et `45` minutes, sans source ni nécessité pour décider.                                                                                                                      | Donner à une suggestion éditoriale l’apparence d’une méthode chronométrée.                    | Corrigé : trois étapes sans durée                                                                           |
| P2      | Plusieurs limites revenaient sous la même forme « ne prouve pas », malgré un contenu exact.                                                                                                                                                               | Produire une voix uniforme et défensive qui fatigue la lecture.                               | Cinq passages reformulés en portée positive ou inconnues restantes                                          |
| P2      | Sept tableaux rythment neuf sections.                                                                                                                                                                                                                     | Effet de gabarit possible si les tableaux répètent la prose ou cachent la réponse sur mobile. | Conservés : chacun compare une décision différente ; contrôle visuel mobile réservé au contrôle transversal |

### Corrections appliquées

1. La compatibilité de la carte est désormais stricte :
   - l’entretien rétrospectif répond au problème, pas à la décision d’achat ;
   - la page de présentation répond à l’accès aux prospects, pas au problème ;
   - le prototype cliquable répond au parcours simulé, pas au problème ;
   - le pilote manuel répond à l’usage ou au problème observé, pas au prix par
     défaut ;
   - l’offre commerciale reste le test compatible avec l’acheteur et le prix.
2. Quatre tests dédiés empêchent le retour de ces cartes vertes trompeuses.
3. Le bloc `BeforeFirstInterview` remplace l’ancien chronométrage par trois
   notes concrètes à écrire avant le premier entretien.
4. Cinq formulations répétitives ont été réécrites sans modifier leur portée :
   ce que la liste d’attente, le paiement, le prototype, l’essai technique et
   le pilote fictif laissent encore inconnu apparaît directement.
5. `dateModified` a été relevé avec `date -Iseconds` et réconcilié dans le
   registre à `2026-07-29T23:16:41+02:00`.

### Passages volontairement conservés

- Les sections numérotées restent en place : elles permettent de retrouver
  une décision dans un guide de vingt minutes et appartiennent au gabarit
  partagé, sans créer de méthode propriétaire.
- Les sept tableaux restent distincts : six inconnues, types de notes, tests,
  engagements, résultats du scénario, responsabilités du pilote et décisions
  finales ne répondent pas à la même question.
- Le vocabulaire `hypothèse`, `test`, `observation` et `décision` revient
  volontairement parce qu’il nomme les quatre éléments réellement utilisés par
  la carte ; aucun synonyme décoratif ne remplace ces termes stables.
- Les limites CNIL, INPI, prototype/production et pilote/renouvellement sont
  conservées intégralement. Le naturel de la plume ne justifie pas de raccourci
  juridique ou commercial.
- Le scénario de pièces fournisseurs reste explicitement fictif et refuse
  encore le développement complet malgré un paiement.

### Faits, calculs et promesses

Aucun fait externe, seuil, montant, formule ni verdict du scénario n’a été
modifié en P4. Les calculs restent :

```text
28 × 55 = 1 540
3 × 120 = 360
1 540 + 240 + 360 = 2 140
480 − 240 − 360 = −120
2 140 − 480 = 1 660
```

La page continue de distinguer temps valorisé, décaissement, encaissement et
coûts inconnus. Elle ne transforme aucun résultat en ROI. Le CTA ouvre
`/demarrer-un-projet`, décrit un échange de cadrage et ne promet ni devis
instantané, ni délai garanti, ni construction automatique. L’outil conserve
ses données dans l’état React du navigateur et utilise uniquement l’API de
presse-papiers pour la copie ; aucun envoi applicatif n’est ajouté.

### Scorecard P4 proposée

Score de la charte : **19/20**, avec les limites de preuve suivantes. Ce score
n’est ni le `GO_QUALITE_GUIDE`, ni un BAT visuel, ni une autorisation de
publication.

| Axe         | Note | Preuve                                                                                                                               |
| ----------- | ---: | ------------------------------------------------------------------------------------------------------------------------------------ |
| Intention   |    2 | Le héros et les premiers paragraphes répondent avant la méthode et distinguent les six inconnues.                                    |
| Décision    |    2 | La carte et la dernière section conduisent à continuer, changer, attendre ou arrêter.                                                |
| Pédagogie   |    2 | Chaque terme central est défini au premier emploi ; les H2 restent compréhensibles isolément.                                        |
| Profondeur  |    2 | Acheteur, canal, prix, usage, faisabilité, données, sortie du pilote et contre-solutions sont traités.                               |
| Preuve      |    2 | Les limites des sources et de chaque test restent visibles au plus près de l’affirmation.                                            |
| Comparaison |    2 | Les tests sont comparés par question, observation et limite, avec une compatibilité maintenant stricte dans l’outil.                 |
| Originalité |    2 | Carte locale à trois décisions, scénario qui refuse le MVP et absence de score opaque.                                               |
| Style       |    2 | Chronométrage artificiel retiré, répétitions réduites et absence de superlatif ou faux vécu.                                         |
| Conversion  |    2 | Action autonome avant le CTA, bon et mauvais fit visibles, destination honnête.                                                      |
| SEO/produit |    1 | Code, HTML, metadata et build sont verts ; le BAT visuel, clavier, zoom et lecteur d’écran reste à exécuter au contrôle transversal. |

### Contrôles P4 exécutés sur le snapshot

| Contrôle                            | Résultat           | Preuve ou limite                                                                                                                                                                                                 |
| ----------------------------------- | ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Manifeste d’entrée P3               | OK, 9/9            | `shasum -a 256 -c` exécuté avant modification                                                                                                                                                                    |
| Outil de carte de test              | OK, 11/11          | Inclut les quatre couples question/test refusés en P4                                                                                                                                                            |
| Tests ciblés outil + registre       | OK, 16/16          | Deux fichiers de test                                                                                                                                                                                            |
| ESLint ciblé                        | OK                 | Page, OG, outil, test et registre                                                                                                                                                                                |
| TypeScript                          | OK                 | `npx tsc --noEmit`                                                                                                                                                                                               |
| Temps de lecture servi              | 3 916 mots, 20 min | Mesure sur l’élément `article` à 200 mots/minute ; registre inchangé à 20                                                                                                                                        |
| SEO, environnement courant          | OK, 171/171        | 33 fichiers                                                                                                                                                                                                      |
| SEO, `NODE_ENV=production`          | OK, 171/171        | 33 fichiers                                                                                                                                                                                                      |
| Suite globale                       | OK, 416/416        | 73 fichiers                                                                                                                                                                                                      |
| Build de production                 | OK                 | `NEXT_PUBLIC_ENV=production npm run build`, 60 routes générées                                                                                                                                                   |
| Contrôle postbuild                  | OK                 | 43 URL sitemap, 26 liens `llms.txt`, 43 pages, 2 temps de lecture et 74 blocs JSON-LD                                                                                                                            |
| HTML de production local servi      | OK, HTTP 200       | H1 unique, canonical exact, `noindex, nofollow`, FAQ visible, CTA réel                                                                                                                                           |
| Données structurées                 | OK                 | Un `Article` et un `BreadcrumbList`, aucun `FAQPage`, `HowTo`, `Offer`, `Review` ou `AggregateRating`                                                                                                            |
| Image OG                            | OK, HTTP 200       | PNG 1200 × 630                                                                                                                                                                                                   |
| Brouillon dans hub/sitemap/llms.txt | Absent, attendu    | `ready-for-human-review` reste respecté                                                                                                                                                                          |
| XLS, XLSX, CSV ou PDF               | Aucun              | Aucun format indésirable annoncé ou lié                                                                                                                                                                          |
| Espaces et marqueurs Git            | OK                 | `git diff --check`                                                                                                                                                                                               |
| Audit des dépendances de production | 10 alertes hautes  | Dépendances transitives `brace-expansion`/`minimatch`/`glob` via OpenNext/Cloudflare et `sharp` via Next/miniflare ; le correctif proposé impose `--force` et des versions cassantes, donc aucune mutation en P4 |

### Limites et risques remis à G4

1. Le navigateur intégré n’était pas disponible après la procédure de
   dépannage prévue par le skill. Aucun contrôle visuel aux dix largeurs,
   thème sombre, zoom 200 %, orientation paysage, clavier, lecteur d’écran,
   console ou réseau n’est revendiqué. Le contrôle transversal doit réaliser
   ce BAT avant `GO_QUALITE_GUIDE`.
2. Aucun lecteur humain non technique n’a participé. L’instruction du
   commanditaire délègue la décision de publication au contre-audit, mais elle
   ne remplace pas les preuves de rendu.
3. Les dix alertes hautes de dépendances restent un P2 de projet qualifié. Un
   `npm audit fix --force` n’a pas été exécuté.
4. La production publique, Vercel, le maillage public, Search Console,
   l’indexation et la conversion restent hors de P4.

Conclusion de l’agent P4 : le défaut P1 de l’outil est clos, aucun P0 ou P1
éditorial, factuel, juridique, commercial ou logique n’est identifié dans le
snapshot. Les limites P2 ci-dessus doivent rester visibles. Le manifeste P4
fige l’état remis à l’orchestrateur ; seul celui-ci peut prononcer
`GO_CONTROLE_QUALITE` ou `NO_GO_PASSE_4`.

---

## L. Décision finale de l’orchestrateur et autorisation de publication

```text
Date : 30 juillet 2026
Décision du commanditaire : publication autorisée après lecture du guide
Décision de l’orchestrateur : GO_PUBLICATION_ASSUMEE
P0 ouverts : 0
P1 éditoriaux, factuels, légaux, commerciaux ou logiques : 0
P2 acceptés : audit npm transitive et preuves d’assistance technique détaillées ci-dessous
```

Le commanditaire a explicitement demandé de lever le `NO_GO_QUALITE_GUIDE`
provisoire, après lecture du guide, et a autorisé son passage sur `main`. Cette
autorisation ne transforme pas une preuve absente en preuve acquise. Les
contrôles effectivement rejoués sur le candidat public sont donc consignés
séparément des deux limites acceptées.

### Contrôles finaux réellement rejoués

| Contrôle | Résultat |
| --- | --- |
| Installation propre | `npm ci`, 758 paquets installés |
| Diff et ESLint ciblé | OK |
| TypeScript | OK |
| SEO courant | 172/172 |
| SEO avec `NODE_ENV=production` | 172/172 |
| Suite globale | 417/417 |
| Build `NEXT_PUBLIC_ENV=production` | OK, 60 routes |
| Artefact SEO postbuild | 44 URL sitemap, 27 liens `llms.txt`, 44 pages, 2 temps de lecture et 76 blocs JSON-LD |
| Route du guide | HTTP 200, HTML 502 731 octets et 72 683 octets après compression gzip locale |
| Hub, sitemap, robots et `llms.txt` | HTTP 200 |
| Image Open Graph | HTTP 200, `image/png`, 197 762 octets |
| Responsive | 320, 360, 390, 430, 640, 768, 1024, 1280, 1440 et 1600 px contrôlés ; aucun débordement horizontal du document |
| Petit écran paysage | 667 × 375 px, aucun débordement horizontal du document |
| Thème sombre | 390 px, contraste de base et absence de débordement contrôlés |
| Lien d’évitement | focus visible, activation vers `#main-content`, focus final sur `main` |
| FAQ au clavier | changement d’onglet avec `End`, panneau associé présent, ouverture d’une réponse avec `Entrée` |
| Outil | couple incohérent refusé avec message explicite ; couple cohérent accepté |
| Console | aucune erreur ni alerte capturée |
| Structure rendue | H1 unique, 2 189 éléments DOM, 136 liens, 43 contrôles de formulaire |

### Limites acceptées, non maquillées

1. Le zoom navigateur à 200 % a été tenté, mais son niveau effectif n’a pas pu
   être lu de manière fiable par l’interface de recette. Les largeurs de
   reflow voisines ont été contrôlées, sans présenter cela comme une mesure de
   zoom indépendante.
2. La structure accessible, le focus, la navigation clavier, les rôles ARIA et
   les panneaux ont été contrôlés dans le navigateur et par tests. Une lecture
   orale complète par VoiceOver n’est pas revendiquée.
3. `npm audit --omit=dev` conserve dix alertes hautes transitives dans la pile
   OpenNext/Cloudflare, Next et Miniflare. Les corrections proposées imposent
   des changements cassants ; aucun `npm audit fix --force` n’a été exécuté.

Le statut `ready-for-human-review` a été retiré. `datePublished` et
`dateModified` sont réconciliées avec l’instant réel de préparation de la
première publication : `2026-07-30T07:04:32+02:00`.
