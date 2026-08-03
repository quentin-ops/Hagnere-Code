# Dossier de recherche — droits d’accès d’une application métier

## A. Identité

- **Slug :** `droits-acces-application-metier`
- **Roadmap :** #24 — Applications métiers et outils internes
- **Priorité :** P3
- **Intention principale :** concevoir qui peut voir, créer, modifier,
  valider, exporter ou supprimer chaque information d’une application métier.
- **Lecteur :** dirigeante, dirigeant ou chef de projet non spécialiste de la
  sécurité, chargé de décrire les droits avant développement ou refonte.
- **Situation déclenchante :** plusieurs équipes partagent l’application et
  les règles actuelles reposent sur des habitudes, des comptes trop larges ou
  des décisions prises écran par écran.
- **Décision :** transformer les règles de travail en une matrice testable,
  choisir ce qui est refusé par défaut et organiser l’arrivée, la mobilité, le
  départ et la revue des accès.
- **Route de service :** `/services/outils-internes-sur-mesure`
- **CTA :** « Faire relire ma matrice de droits » vers
  `/demarrer-un-projet`. Le clic ouvre une demande de projet, pas une
  réservation ni un diagnostic automatique.
- **Date réelle du travail :** 30 juillet 2026
- **Propriétaire du registre :**
  `SECONDARY_ORCHESTRATOR_019fb1e0`
- **Responsable P1 :** `droits_acces_p1`
- **Statut maximal de P1 :** brouillon complet prêt pour G1 ; aucun commit,
  push, déploiement, publication ou contrôle de production.

## B. Contrat de réponse

### Réponse courte

Ne commencez pas par une liste de profils intitulés « utilisateur »,
« manager » et « administrateur ». Listez d’abord les objets métier
(dossier, commande, facture, document), les actions possibles et les
relations qui changent le droit : propriétaire du dossier, équipe, agence,
étape du processus ou délégation temporaire. Refusez une action lorsque
aucune règle explicite ne l’autorise, faites valider les droits sensibles par
le responsable métier et testez chaque combinaison importante avant la mise
en service. Le moindre privilège est ici une règle de conception prudente,
pas une loi universelle ; les obligations juridiques citées restent bornées
aux traitements de données personnelles.

### Questions indispensables

1. Quelles données et quelles actions faut-il distinguer ?
2. Un rôle suffit-il, ou le droit dépend-il aussi de la relation avec le
   dossier, de son état ou de l’établissement ?
3. Quelles actions doivent être refusées en l’absence de règle explicite ?
4. Qui demande, valide, applique, revoit et retire un droit ?
5. Comment prouver avant réception qu’un utilisateur autorisé passe et qu’un
   utilisateur non autorisé est bien refusé ?

### Questions secondaires

- Faut-il un rôle par personne ou par fonction de travail ?
- Comment traiter un remplacement, une délégation ou une urgence ?
- Que journaliser sans confondre trace, alerte et preuve de conformité ?
- À quelle occasion revoir les droits ?
- Comment éviter qu’un administrateur technique décide seul des règles
  métier ?

### Objections

- « Tout le monde se connaît, nous réglerons les droits plus tard. »
- « Un profil administrateur et un profil utilisateur suffisent. »
- « Les journaux diront après coup qui a fait quoi, donc les droits sont
  couverts. »

### Hors-sujet

- le socle global de sécurité, les sauvegardes, la détection et la gestion
  d’incident, traités dans `securite-application-metier` ;
- le droit d’accès d’une personne concernée à ses données personnelles au sens
  des articles 12 à 15 du RGPD ;
- un conseil juridique individualisé ;
- la gestion détaillée d’identité, l’authentification multifacteur et
  l’architecture réseau ;
- une certification ou une preuve automatique de conformité.

### Cas « ne pas développer »

- L’outil existant permet déjà de créer les profils nécessaires et d’exporter
  la configuration : documenter et tester cette fonction avant de construire
  une couche sur mesure.
- Les règles ne sont pas décidées par les responsables métier : arrêter le
  développement des écrans concernés et obtenir les arbitrages.
- Une seule personne utilise une donnée non sensible sans partage prévu :
  conserver une règle simple plutôt que fabriquer une matrice complexe.

### Cas « utiliser une fonction existante »

Configurer les groupes, rôles ou règles de partage déjà fournis par le logiciel
si leur comportement couvre les objets, actions, relations et exceptions
réelles. Exiger néanmoins un export lisible et des tests de refus.

### Cas « reporter »

Reporter la mise en service d’une fonction si l’on ne sait pas qui peut
autoriser une exportation, une suppression, une validation financière ou une
modification après clôture.

### Action autonome

Remplir la matrice sur un seul objet critique avec quatre actions : consulter,
modifier, exporter et supprimer. Ajouter un cas autorisé et un cas refusé pour
chaque ligne, puis faire signer les règles par le responsable métier.

## C. Corpus interne

### Pages et composants à relire

- `/services/outils-internes-sur-mesure` : destination commerciale ; le guide
  prépare les règles fonctionnelles à fournir au cadrage.
- `plan-recette-application-metier` : modèle de critères d’acceptation et de
  tests positifs/négatifs ; le nouveau guide produit les règles à tester.
- `choisir-prestataire-application-metier` : preuves à demander au
  prestataire ; le nouveau guide détaille les droits eux-mêmes.
- `securite-application-metier` : socle transversal ; le nouveau guide ne
  reprend ni sauvegarde, ni détection, ni incident.
- gabarit premium, FAQ, sidebar, metadata et JSON-LD centralisés déjà utilisés
  par les guides #21 à #23.

### Risque de cannibalisation

| Page                                     | Intention                          | Différence du nouveau guide                                              | Liaison souhaitée                                                        |
| ---------------------------------------- | ---------------------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `securite-application-metier`            | fixer le socle global de sécurité  | concevoir les autorisations métier, objet par objet et action par action | lien sortant vers le socle global ; lien entrant depuis sa section accès |
| `plan-recette-application-metier`        | organiser l’acceptation du produit | définir les règles qui deviennent des cas de recette                     | lien vers la méthode de recette                                          |
| `choisir-prestataire-application-metier` | sélectionner une équipe            | fournir un livrable précis à faire chiffrer et tester                    | lien entrant depuis les exigences sécurité/données                       |
| service OUTILS                           | intention transactionnelle         | méthode autonome avant toute demande commerciale                         | CTA seulement après la démonstration                                     |

**Justification d’une URL distincte :** le lecteur doit produire une
spécification d’autorisations et ses tests de refus ; aucun guide voisin ne
relie actuellement rôles, objets, actions, relations et cycle de vie dans un
outil local.

### Liens sortants retenus

- guide de sécurité : replacer les habilitations dans le socle global ;
- guide de recette : transformer chaque règle en test d’acceptation ;
- service OUTILS et `/demarrer-un-projet` : seulement si la matrice révèle un
  besoin de cadrage ou de développement.

### Lien entrant souhaité — handoff, aucun fichier partagé modifié en P1

Ajouter une phrase contextuelle :

- dans `securite-application-metier`, après la partie accès, vers la méthode de
  conception détaillée ;
- ou dans `choisir-prestataire-application-metier`, près des preuves de
  sécurité et de données, vers la matrice à joindre au besoin.

## D. Analyse externe

Date de consultation commune : **30 juillet 2026**.

Texte consolidé officiel du RGPD utilisé pour contrôler le périmètre des
articles 5, 15, 25 et 32 :
`https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32016R0679`.

| URL                                                                               | Éditeur          | Date/version                               | Type et statut                                      | Réponse utilisable                                                                                                           | Limite / portée                                                                                   |
| --------------------------------------------------------------------------------- | ---------------- | ------------------------------------------ | --------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `https://www.cnil.fr/fr/securite-gerer-les-habilitations`                         | CNIL             | 13 mars 2024                               | recommandation publique, non texte de loi           | profils d’habilitation, validation par un responsable, retrait lors d’un changement ou départ, revue régulière               | périmètre : traitements de données personnelles ; la fiche ne rend pas un modèle RBAC obligatoire |
| `https://www.cnil.fr/fr/securite-tracer-les-operations`                           | CNIL             | 14 mars 2024                               | recommandation publique                             | tracer notamment création, consultation, partage, modification et suppression avec auteur, date, heure, nature et référence  | une trace n’est ni une alerte automatique ni une preuve suffisante de conformité                  |
| `https://cnil.fr/sites/default/files/2026-05/cnil_guide_securite_personnelle.pdf` | CNIL             | Version 2024, mise à jour 2026             | guide officiel actuel, non substitut au RGPD        | habilitations limitées au besoin, processus arrivée/mobilité/départ, revue, journalisation proportionnée                     | recommandations à adapter au risque et aux données personnelles                                   |
| `https://eur-lex.europa.eu/eli/reg/2016/679/art_5/oj`                             | Union européenne | règlement applicable depuis 2018           | texte normatif                                      | intégrité/confidentialité et responsabilité dans le périmètre des données personnelles                                       | ne prescrit pas une matrice applicative universelle                                               |
| `https://eur-lex.europa.eu/eli/reg/2016/679/art_15/oj`                            | Union européenne | règlement applicable depuis 2018           | texte normatif                                      | droit de la personne concernée d’obtenir l’accès à ses données personnelles et aux informations prévues par le texte         | différent d’une habilitation qui autorise une action dans l’application                           |
| `https://eur-lex.europa.eu/eli/reg/2016/679/art_25/oj`                            | Union européenne | règlement applicable depuis 2018           | texte normatif                                      | par défaut, seules les données personnelles nécessaires à chaque finalité sont traitées ; portée incluant leur accessibilité | ne couvre pas tous les objets métier ni toutes les autorisations hors données personnelles        |
| `https://eur-lex.europa.eu/eli/reg/2016/679/art_32/oj`                            | Union européenne | règlement applicable depuis 2018           | texte normatif                                      | mesures appropriées au risque pour les traitements de données personnelles                                                   | ne transforme ni « moindre privilège » ni un produit donné en obligation universelle              |
| `https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html`   | OWASP            | page vivante, consultée le 30 juillet 2026 | recommandation technique non normative              | moindre privilège, refus par défaut, contrôle à chaque requête, attributs/relations lorsque les rôles seuls ne suffisent pas | doit être adapté au système ; pas une loi ni une certification                                    |
| `https://owasp.org/www-project-application-security-verification-standard/`       | OWASP            | ASVS 5.0.0, 30 mai 2025                    | standard de vérification communautaire non normatif | version stable et exigences testables à sélectionner pour la conception, le développement et la vérification                 | ne certifie ni l’application ni l’organisation                                                    |

### Contradictions et prudences

- Le RGPD impose des obligations dans son champ ; OWASP et les fiches CNIL
  proposent des moyens de conception. Ne pas fondre ces statuts.
- Un rôle simple peut suffire dans un petit périmètre stable. OWASP signale
  que les attributs et relations sont souvent plus précis lorsque le droit
  dépend de la propriété ou du contexte ; cela ne justifie pas une
  architecture complexe partout.
- « Revue au moins annuelle » est une recommandation CNIL dans le périmètre
  données personnelles, pas une fréquence légale universelle. Une revue
  événementielle reste indispensable lors d’un changement ou départ.
- Une journalisation montre qu’une action a été enregistrée selon le mécanisme
  prévu. Elle ne garantit ni que toutes les actions sont tracées, ni qu’une
  alerte sera déclenchée, ni que l’organisation est conforme.

## E. Matrice d’information utile

| Question                               | Réponse courante insuffisante           | Apport du guide                                                                                      | Preuve / outil                      |
| -------------------------------------- | --------------------------------------- | ---------------------------------------------------------------------------------------------------- | ----------------------------------- |
| Qui peut faire quoi ?                  | liste de rôles générique                | séparer objet, action, relation, état et portée                                                      | matrice locale                      |
| Que refuser ?                          | « seuls les utilisateurs autorisés »    | refus explicite si aucune règle n’autorise l’action                                                  | verdict `STOP_DEFAULT_DENY_MISSING` |
| Un rôle suffit-il ?                    | RBAC présenté comme réponse unique      | tester rôle seul puis relation, agence, propriétaire, étape et délégation                            | moteur pur                          |
| Que faire au départ ?                  | suppression de compte seulement         | retirer les groupes/délégations, traiter les tâches et conserver les traces selon règles applicables | checklist événementielle            |
| Comment recevoir ?                     | tester seulement les parcours autorisés | un cas autorisé et un cas refusé pour chaque règle critique                                          | oracles exhaustifs                  |
| Le journal prouve-t-il la conformité ? | oui implicite                           | non ; il faut portée, intégrité, consultation, rétention et analyse adaptées                         | avertissement visible               |

## F. Registre des affirmations

| ID  | Affirmation                                                                                                                            | Type           | Source primaire                 | Périmètre/date                                 | Statut  |
| --- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------- | ------------------------------- | ---------------------------------------------- | ------- |
| A01 | La CNIL recommande de définir les profils d’habilitation selon les besoins des utilisateurs et de les faire valider par un responsable | FAIT           | CNIL habilitations              | données personnelles, 13/03/2024               | VERIFIE |
| A02 | La CNIL recommande de retirer les habilitations lors d’un départ et de les adapter lors d’un changement                                | FAIT           | CNIL habilitations + guide 2026 | données personnelles, consulté 30/07/2026      | VERIFIE |
| A03 | La CNIL recommande une revue régulière, au moins annuelle, des habilitations                                                           | FAIT           | CNIL habilitations              | recommandation bornée aux données personnelles | VERIFIE |
| A04 | L’article 25(2) du RGPD borne par défaut l’accessibilité des données personnelles à ce qui est nécessaire pour chaque finalité         | FAIT           | EUR-Lex art. 25                 | données personnelles                           | VERIFIE |
| A05 | L’article 32 impose des mesures appropriées au risque                                                                                  | FAIT           | EUR-Lex art. 32                 | traitement de données personnelles             | VERIFIE |
| A06 | Le moindre privilège est une recommandation de conception, pas une loi universelle                                                     | DEDUCTION      | OWASP + textes RGPD             | tout système, statut distingué                 | VERIFIE |
| A07 | Refuser par défaut une action non autorisée est recommandé par OWASP                                                                   | FAIT           | OWASP Authorization Cheat Sheet | recommandation technique non normative         | VERIFIE |
| A08 | Le contrôle d’autorisation doit être appliqué à chaque requête concernée, pas seulement caché dans l’interface                         | FAIT           | OWASP Authorization Cheat Sheet | recommandation technique                       | VERIFIE |
| A09 | Les rôles seuls peuvent mal exprimer la propriété, l’établissement, l’étape ou la délégation                                           | FAIT           | OWASP Authorization Cheat Sheet | selon le contexte applicatif                   | VERIFIE |
| A10 | La CNIL recommande de tracer des opérations sur les données personnelles avec auteur, date, heure, nature et référence                 | FAIT           | CNIL tracer les opérations      | données personnelles, 14/03/2024               | VERIFIE |
| A11 | Un journal n’est pas une alerte et ne prouve pas à lui seul la conformité                                                              | DEDUCTION      | limites CNIL/OWASP              | portée générale explicitée                     | VERIFIE |
| A12 | La matrice proposée n’est ni un audit juridique ni une certification                                                                   | RECOMMANDATION | limites éditoriales             | guide local                                    | VERIFIE |
| A13 | Chaque règle critique doit comporter au moins un test positif et un test négatif                                                       | RECOMMANDATION | OWASP/ASVS + guide recette      | méthode de réception                           | VERIFIE |
| A14 | Le scénario « Atelier Atlas » est entièrement fictif et ne prouve aucune mission                                                       | SCENARIO       | création éditoriale             | exemple 2026                                   | VERIFIE |
| A15 | Une information inconnue ne peut pas être interprétée comme un refus décidé par le métier                                              | RECOMMANDATION | prudence de spécification       | outil local                                    | VERIFIE |
| A16 | Le droit d’accès de l’article 15 du RGPD est distinct d’une autorisation d’effectuer une action dans l’application                     | DEDUCTION      | EUR-Lex art. 15                 | données personnelles                           | VERIFIE |

## G. Artefact, moteur et scénarios

### Matrice signature

Dimensions obligatoires :

1. **objet** : dossier, commande, facture, document ;
2. **action** : consulter, créer, modifier, valider, exporter, supprimer ;
3. **acteur** : rôle ou fonction de travail ;
4. **relation** : propriétaire, équipe, établissement, délégation ;
5. **état** : brouillon, soumis, validé, clôturé ;
6. **portée** : propre dossier, équipe, établissement, entreprise ;
7. **décision** : autorisé, refusé, à décider ;
8. **responsable** : demande, validation, application et revue ;
9. **test** : exemple autorisé et exemple refusé ;
10. **trace** : événement utile et finalité, sans promettre une alerte.

### Entrées fermées de l’outil

- sept contrôles, chacun avec `inconnu`, `absent` ou `documenté` :
  matrice, portée/relations, refus par défaut, validation sensible,
  arrivée–mobilité–départ, tests d’autorisation/refus et trace d’audit ;
- quatre éléments de contexte, chacun avec `inconnu`, `non` ou `oui` :
  données personnelles, actions sensibles, plusieurs établissements et
  délégations temporaires.

### Verdicts ordonnés

1. `CLARIFY_CONTEXT`
2. `CLARIFY_RULES`
3. `STOP_MATRIX_MISSING`
4. `STOP_DEFAULT_DENY_MISSING`
5. `STOP_SENSITIVE_APPROVAL_MISSING`
6. `STOP_LIFECYCLE_MISSING`
7. `STOP_NEGATIVE_TEST_MISSING`
8. `REVIEW_RELATION_RULES`
9. `REVIEW_TRACE_SCOPE`
10. `READY_FOR_WORKSHOP`

Un verdict plus tardif ne compense jamais un STOP antérieur. Aucun score
agrégé n’est calculé.

### Calculs et oracles

- **Combinaisons de règles :** sept contrôles ternaires :
  `3^7 = 2 187` combinaisons.
- **Contextes fermés :** quatre choix ternaires : `3^4 = 81`.
- **Oracle exhaustif prévu :** `2 187 × 81 = 177 147` combinaisons.
- **Test indépendant :** pour chaque combinaison, recomposer la priorité
  attendue sans appeler la fonction de production, puis comparer le code de
  verdict. Une assertion distincte vérifie que les dix verdicts sont tous
  atteints dans le domaine exhaustif.
- **Limite :** cet oracle prouve la cohérence du moteur pour son domaine
  fermé ; il ne prouve pas la justesse juridique d’une règle métier ni la
  sécurité du système déployé.

### Exemple illustratif entièrement fictif

« Atelier Atlas » est une PME fictive qui gère des demandes d’achat. Les
employés peuvent créer et consulter leurs demandes ; leur responsable peut
valider celles de son équipe ; la comptabilité peut exporter uniquement les
demandes validées ; une personne ne valide jamais sa propre demande.
L’exemple ne revendique ni client, ni mission, ni architecture réelle.

### Inconnues à conserver

- sensibilité réelle de chaque objet ;
- séparation de responsabilités juridiquement ou contractuellement exigée ;
- durée de conservation des traces ;
- fréquence de revue adaptée au risque hors recommandation CNIL ;
- procédure d’urgence et propriétaire de chaque décision ;
- règles sectorielles ou contractuelles de séparation des responsabilités.

## H. Journal

### Passe 1 — création complète

- **Agent :** `droits_acces_p1`
- **État d’entrée :** branche
  `codex/droits-acces-application-metier`, base
  `4d386da4f3e5e450ec702736dcd01d52511e1680`, worktree propre.
- **Fichiers lus :** prompt maître, registre, `CLAUDE.md`, règle d’or,
  charte, workflow quatre passes, instructions qualité, roadmap, modèle de
  recherche ; conventions des guides #21 à #23 inventoriées et page, moteur,
  outil, tests et visuels du guide voisin de sécurité directement relus.
- **Recherches :** CNIL habilitations et journalisation, guide sécurité CNIL
  courant 2026, RGPD articles 5/25/32, OWASP Authorization Cheat Sheet et ASVS
  5.0.0.
- **Faits ajoutés :** portée normative du RGPD ; statut de recommandation des
  fiches CNIL et d’OWASP ; séparation trace/alerte/conformité.
- **Calculs :** domaine fermé réconcilié de `3^7 × 3^4 = 177 147`
  combinaisons ; oracle indépendant exhaustif exécuté sur chacune d’elles.
- **Fichiers modifiés :** treize artefacts propres au slug : dossier de
  recherche, page, image OG, moteur pur, outil local, deux fichiers de tests,
  trois SVG et trois WebP. Aucun fichier partagé modifié.
- **Contrôles exécutés :**
  - Vitest ciblé : 2 fichiers, 27 tests réussis, dont l’oracle exhaustif des
    177 147 combinaisons et l’assertion d’atteignabilité des dix verdicts ;
  - ESLint ciblé : réussi sans avertissement ;
  - TypeScript : `tsc --noEmit --pretty false --incremental false` réussi ;
  - Prettier 3.9.6 : contrôle réussi sur les sept fichiers Markdown/TS/TSX ;
  - `xmllint --noout` : trois SVG valides ;
  - ImageMagick `identify` : WebP 1600 × 900, 1200 × 900 et 1000 × 1000 ;
  - inspection visuelle individuelle des trois WebP : texte lisible, hiérarchie
    cohérente, aucune coupe ni collision constatée ;
  - `git diff --check` : réussi.
- **Contrôles non exécutés en P1 par séparation des responsabilités :** build,
  serveur local, HTML servi, test SEO global, BAT navigateur et mobile,
  intégration aux fichiers partagés, commit, push, déploiement, preuve publique
  et indexation.
- **Risques :** glissement vers le guide sécurité global ; confusion avec le
  droit d’accès RGPD ; complexité inutile si des rôles simples suffisent ;
  durée de conservation des traces et fréquence de revue à décider selon le
  contexte réel.
- **P0/P1 ouverts par l’agent P1 :** aucun après correction du typage du filtre
  de contexte, des trois attentes éditoriales ciblées et de la visibilité du
  focus clavier sur les deux groupes de radios.
- **Gate initiale :** `PRET_POUR_G1`, ensuite invalidée par le
  `NO_GO_P1` de G1 décrit ci-dessous.
- **Manifeste :** `docs/research/manifests/droits-acces-application-metier-p1.sha256`,
  généré après la présente clôture et vérifié avec `shasum -a 256 -c`.

### Correction après `NO_GO_P1` de G1

- **Défaut public constaté :** le titre, la description accessible et le
  sous-titre du visuel 4:3 annonçaient « six décisions », alors que le schéma
  représente cinq dimensions — fonction, objet, action, relation et décision
  — puis deux tests et une trace.
- **Correction :** les trois formulations sont désormais alignées sur
  « Cinq dimensions, deux tests et une trace » ; la description accessible
  énumère séparément le test autorisé, le test refusé et la trace.
- **Non-régression :** le test qualité exige le nouveau titre et le nouveau
  sous-titre, puis interdit l’ancienne expression.
- **Visuel dérivé :** le WebP 4:3 est régénéré depuis le SVG corrigé, conservé
  en 1200 × 900 et inspecté individuellement.
- **P0/P1 ouverts après correction :** aucun identifié par l’agent P1.
- **Gate actuelle :** `PRET_POUR_RECONTROLE_G1`.
- **Manifeste :** régénéré après le correctif, les tests et l’inspection ; son
  SHA-256 externe est transmis hors du manifeste.

### Passe 2 — vérification contradictoire et enrichissement décisif

- **Agent :** `droits_acces_p2`, distinct de P1.
- **État d’entrée :** snapshot P1 gelé de treize artefacts ; manifeste P1
  vérifié avant édition, SHA-256 externe
  `12ede8b792c0eb013529da671fe45728f5ba282ff76092a6ada678ccc37491e2`.
  Le fichier du manifeste P1 reste une preuve historique immuable.
- **Fichiers lus intégralement :** prompt maître, registre de coordination,
  dossier de recherche, page, image OG, moteur, outil, deux tests, trois SVG,
  trois WebP et manifeste P1. Les trois WebP ont été inspectés séparément à
  leur définition originale.
- **Sources primaires rouvertes le 30 juillet 2026 :** fiches CNIL
  « Gérer les habilitations » et « Tracer les opérations », guide pratique
  CNIL courant « Version 2024 — mise à jour 2026 », texte EUR-Lex des articles
  5, 15, 25 et 32 du RGPD, OWASP Authorization Cheat Sheet et page officielle
  OWASP ASVS confirmant la version stable 5.0.0 du 30 mai 2025.
- **P0 trouvés / corrigés / résiduels :** 0 / 0 / 0.
- **P1 trouvés :** 2. Le moteur pouvait rendre `READY_FOR_WORKSHOP` lorsque
  `scopeAndRelations` était explicitement `missing` dans un contexte simple ;
  l’alternative « configurer la fonction existante et ne pas développer » ne
  figurait pas assez clairement dans la page publique.
- **P1 corrigés :** `scopeAndRelations: "missing"` produit désormais toujours
  `REVIEW_RELATION_RULES`, avec un contexte concerné vide lorsqu’aucun facteur
  aggravant n’est déclaré ; un encadré public demande de tester les groupes,
  rôles ou règles de partage déjà disponibles et d’arrêter le développement
  s’ils couvrent la matrice et les tests.
- **P1 résiduels :** 0 identifié par l’agent P2 ; verdict réservé à G2.
- **P2 trouvés :** 3 ensembles. L’article 15 cité n’avait pas sa preuve
  dédiée ; la page pointait la release GitHub plutôt que la page officielle
  courante ASVS ; le scénario fictif divergeait sur une auto-validation
  conditionnée par un seuil absent de la page. Les limites du compte partagé
  et du repère de conservation des traces demandaient aussi un périmètre plus
  visible.
- **P2 corrigés :** source EUR-Lex directe de l’article 15 et affirmation A16
  ajoutées ; lien ASVS remplacé par la page officielle stable ; règle fictive
  harmonisée en refus d’auto-validation sans seuil inventé ; compte partagé et
  repère de six à douze mois explicitement bornés aux traitements de données
  personnelles et présentés comme recommandations CNIL, non comme règles
  universelles.
- **P2 résiduels :** 0 identifié par l’agent P2.
- **Affirmations retirées :** le seuil indéterminé du scénario fictif. Aucune
  valeur de remplacement n’a été inventée.
- **Calcul indépendant :** sept contrôles ternaires donnent `3^7 = 2 187`,
  quatre contextes ternaires donnent `3^4 = 81`, soit
  `2 187 × 81 = 177 147` états. Une énumération contradictoire séparée de la
  fonction de production atteint les dix verdicts ; l’oracle Vitest compare
  ensuite les 177 147 états en respectant l’ordre des priorités.
- **Tests et contrôles :** Vitest ciblé, 2 fichiers et 28 tests réussis ;
  ESLint des six fichiers TS/TSX du slug réussi ; TypeScript
  `tsc --noEmit --pretty false --incremental false` réussi ; Prettier 3.9.6
  réussi sur les sept fichiers Markdown/TS/TSX ; trois SVG valides avec
  `xmllint` ; trois WebP décodés et confirmés en 1600 × 900, 1200 × 900 et
  1000 × 1000 ; aucun build, serveur, SEO global ni BAT lancé en P2.
- **Risques et limites conservés :** la fréquence de revue et la conservation
  des traces restent à adapter au traitement et aux règles applicables ; une
  matrice ne prouve ni l’application côté serveur, ni la sécurité, ni la
  conformité ; les règles sectorielles et les données réelles restent
  inconnues.
- **Gate :** `PRET_POUR_G2`. La décision `GO_PASSE_3` ou `NO_GO_P2`
  appartient à l’orchestrateur.
- **Manifeste :**
  `docs/research/manifests/droits-acces-application-metier-p2.sha256`, généré
  sur les treize artefacts après les contrôles finaux ; son SHA-256 externe est
  transmis hors du manifeste.

### Passe 3 — polish rédactionnel

- **Agent :** `droits_acces_p3_reprise`, distinct de P1 et P2. Le premier
  agent P3 a été interrompu sans écrire aucun octet ; cette reprise le
  remplace.
- **État d’entrée :** G2 `GO_PASSE_3`, snapshot P2 de treize artefacts vérifié
  avec le manifeste
  `docs/research/manifests/droits-acces-application-metier-p2.sha256`. Le
  SHA-256 externe du manifeste P2 reste
  `f9a1eca2d508aca704204effe2e59d17d0bfe9beab5d5cb60dae893ae3f07c44`.
  Les manifestes P1 et P2 n’ont pas été modifiés.
- **Fichiers relus :** sections P3 et G3 du prompt maître, registre, dossier
  de recherche, page, image OG, moteur, outil, deux tests, trois SVG, trois
  WebP et manifestes P1/P2. Chaque visuel WebP a été inspecté séparément à sa
  définition originale.
- **Problème de lisibilité corrigé :** le sigle RBAC apparaissait dans la
  réponse courte avant toute définition. L’ouverture parle désormais de
  règles claires ; le premier usage conservé définit explicitement le
  contrôle par rôles avant le sigle. Les contrôles fondés sur des attributs
  (ABAC) ou sur des relations (ReBAC) sont eux aussi développés dès leur
  première apparition.
- **Allègements bornés :** le paragraphe qui opposait rôles, attributs et
  relations a été fractionné ; la recommandation CNIL sur la validation, le
  retrait et la revue a été distribuée sur des phrases plus courtes ; le
  déclenchement événementiel du cycle de vie a été rendu direct ; la limite
  trace–alerte et le repère CNIL de six à douze mois ont été séparés pour
  rester lisibles sur téléphone.
- **Paragraphes, transitions et titres :** chaque paragraphe porte une idée
  principale ; les neuf H2 restent compréhensibles isolément ; les passages
  matrice → rôles → refus → cycle → trace → outil → recette → cas fictif
  suivent la prochaine décision du lecteur. Les tableaux conservent des
  intitulés autonomes et des cellules actionnables. La FAQ répond toujours
  dès sa première phrase.
- **Faits et nuances laissés inchangés :** matrice de dix dimensions ; sept
  contrôles et quatre contextes ternaires ; `3^7 × 3^4 = 177 147`
  combinaisons ; dix verdicts ordonnés ; portée absente toujours en revue ;
  article 15 distinct des habilitations ; CNIL et OWASP non présentés comme
  lois universelles ; revue annuelle et six à douze mois bornés aux
  recommandations concernées ; alternative de la fonction existante ;
  scénario Atelier Atlas explicitement fictif, sans seuil et sans
  auto-validation ; trace distincte d’une alerte et d’une conformité ; aucun
  score, stockage, transmission ou tableur.
- **Fichiers modifiés :** page, test de qualité et présent journal seulement.
  Le moteur, l’outil, l’oracle exhaustif, l’image OG et les six visuels sont
  restés byte-identiques au snapshot P2.
- **Contrôles exécutés :**
  - Prettier 3.9.6 : formatage puis contrôle réussi sur les sept fichiers
    Markdown/TS/TSX ;
  - Vitest ciblé : 2 fichiers, 28 tests réussis, dont l’oracle indépendant sur
    les 177 147 combinaisons et l’atteignabilité des dix verdicts ;
  - ESLint ciblé sur le dossier du slug : réussi sans avertissement ;
  - TypeScript : `tsc --noEmit --pretty false --incremental false` réussi ;
  - `xmllint --noout` : trois SVG valides ;
  - ImageMagick `identify` : trois WebP décodés en 1600 × 900, 1200 × 900 et
    1000 × 1000 ;
  - inspection visuelle individuelle des trois WebP : hiérarchie et texte
    lisibles, aucune coupe ni collision ;
  - `git diff --check` : réussi.
- **Incident de test résolu :** après la séparation d’un paragraphe, une
  assertion cherchait une phrase à travers le saut de ligne brut du JSX. Le
  test compare désormais la copie publique normalisée des espaces ; la phrase
  et sa nuance n’ont pas changé. Le second passage ciblé est entièrement vert.
- **Contrôles non exécutés en P3 :** build, serveur, SEO global, BAT
  navigateur, intégration partagée, commit, push, déploiement, preuve publique
  et indexation.
- **Risques résiduels conservés :** les responsables, règles sectorielles,
  données réelles, fréquence de revue adaptée hors repère CNIL et durée de
  conservation restent à qualifier ; la matrice ne prouve ni l’application
  côté serveur, ni la sécurité, ni la conformité.
- **P0/P1 ouverts par l’agent P3 :** 0 / 0.
- **Gate :** `PRET_POUR_G3`. La décision `GO_PASSE_4` ou `NO_GO_P3`
  appartient à l’orchestrateur.
- **Manifeste :**
  `docs/research/manifests/droits-acces-application-metier-p3.sha256`, généré
  sur les treize artefacts après les contrôles finaux ; son SHA-256 externe
  est transmis hors du manifeste.

### Passe 4 — anti-automatismes IA

- **Agent :** `droits_acces_p4`, distinct des agents P1, P2 et P3.
- **État d’entrée :** G3 `GO_PASSE_4`. Le snapshot P3 de treize artefacts a
  été vérifié avec
  `docs/research/manifests/droits-acces-application-metier-p3.sha256`. Le
  SHA-256 externe du manifeste P3 reste
  `a28f5a1d780594a24f8cdb9e768a4d6933dba0d534877207ba3ea03abd7ce41b`.
  Les manifestes P1, P2 et P3 sont restés byte-identiques ; leurs SHA-256
  externes ont été revérifiés avant édition.
- **Fichiers relus :** sections P4 et G4 du prompt maître, registre complet,
  dossier de recherche, page, image OG, moteur, outil, deux tests, trois SVG,
  trois WebP et manifestes P1/P2/P3. Les neuf H2 ont aussi été relus
  isolément et la structure a été comparée aux guides #21 à #23.
- **Motifs cherchés :** autosatisfaction, triptyques réflexes, symétrie
  binaire, adjectifs vendeurs, métaphores, parenthèses en cascade, connecteurs
  mécaniques, conclusion répétitive, longueurs uniformes, verbes neutres,
  formulations administratives, inversions artificielles, puces parallèles
  pauvres, dramatisation et logique implicite. Le contrôle a aussi porté sur
  les faux contrastes, questions rhétoriques, mots passe-partout, texte qui
  parle du guide et structure trop proche des guides voisins.
- **Occurrences corrigées :**
  - l’ouverture ne repose plus sur deux faux contrastes ni sur « Commencez
    donc » ; elle introduit la décision par une question de travail ordinaire ;
  - « matrice concrète » devient « matrice déjà remplie », information
    observable avant la prise de contact ;
  - les personnifications du rôle qui « gagne », de la trace qui « raconte »,
    de l’outil qui « conserve » et de la recette qui « alterne » sont remplacées
    par des actions vérifiables : garder, enregistrer, afficher et associer un
    test de refus ;
  - « conforme par magie » est remplacé par la conséquence précise d’un
    journal incomplet ou non consulté ;
  - la FAQ ne demande plus ce que « ce guide » traite : elle pose directement
    la distinction entre l’article 15 du RGPD et une habilitation applicative ;
  - le mémo formaté « prochaine action autonome » nomme désormais la première
    tâche : commencer par un seul objet ;
  - le choix entre rôles, attributs et relations se termine par la règle métier
    observable, sans faux duel avec le vocabulaire technique.
- **Éléments volontairement conservés :**
  - les questions des tableaux et de la FAQ demandent une réponse exploitable ;
    elles ne sont pas des questions rhétoriques ;
  - les séries « objet, action, relation », les listes de contrôles et les
    puces parallèles codent des dimensions distinctes et ne sont pas des
    triptyques décoratifs ;
  - les mentions `STOP`, « autorisé / refusé / à décider » et les limites en
    « ni… ni… » expriment la priorité du moteur ou une frontière factuelle ;
  - les parenthèses restantes développent les sigles ABAC/ReBAC ou bornent un
    exemple ; aucune cascade n’a été ajoutée ;
  - les neuf étapes restent matrice → relations → refus → cycle → trace →
    outil → recette → cas fictif. Cette progression suit les décisions du
    lecteur ; elle ne reproduit pas le sujet ni l’ordre détaillé d’un guide
    voisin. Deux H2 seulement emploient l’impératif, parmi des titres
    descriptifs et narratifs.
- **Faits et invariants inchangés :** dix dimensions ; sept contrôles et quatre
  contextes ternaires ; `3^7 × 3^4 = 177 147` combinaisons ; dix verdicts
  ordonnés ; portée absente toujours envoyée en revue ; article 15 distinct
  des habilitations ; statut et limites des sources CNIL/OWASP ; revue annuelle
  et six à douze mois bornés aux recommandations concernées ; option de
  fonction existante ; trace distincte d’une alerte et d’une conformité ;
  aucun score, stockage, transmission ou tableur.
- **Exemple contrôlé :** Atelier Atlas reste explicitement fictif, sans seuil,
  sans résultat réel et sans auto-validation. La suppression indécise reste en
  `STOP` et aucune durée universelle n’est ajoutée.
- **Fichiers modifiés :** page, test de qualité et présent journal seulement.
  Le moteur, l’outil, l’oracle, l’image OG et les six visuels restent
  byte-identiques au snapshot P3.
- **Contrôles exécutés :**
  - Prettier 3.9.6 : formatage puis contrôle réussi sur les sept fichiers
    Markdown/TS/TSX ;
  - Vitest ciblé : 2 fichiers et 29 tests réussis, dont l’oracle indépendant
    des 177 147 combinaisons et un contrôle des formulations P4 retirées ;
  - ESLint ciblé sur le dossier du slug : réussi sans avertissement ;
  - TypeScript : `tsc --noEmit --pretty false --incremental false` réussi ;
  - `xmllint --noout` : trois SVG valides ;
  - ImageMagick `identify` : trois WebP décodés en 1600 × 900, 1200 × 900 et
    1000 × 1000 ;
  - inspection visuelle individuelle des trois WebP à leur définition
    originale : texte lisible, hiérarchie intacte, aucune coupe ni collision ;
  - `git diff --check` : réussi.
- **Contrôles non exécutés en P4 :** build, serveur, SEO global, BAT
  navigateur, intégration partagée, commit, push, déploiement, preuve publique
  et indexation.
- **Risques résiduels :** la fréquence de revue hors repère CNIL, la
  conservation des traces, les responsables et les règles sectorielles restent
  à qualifier. Le format premium commun aux guides voisins reste visible, sans
  reprise de leur démonstration.
- **P0/P1 ouverts par l’agent P4 :** 0 / 0.
- **Gate :** `PRET_POUR_G4`. La décision `GO_CONTROLE_QUALITE` ou
  `NO_GO_P4` appartient à l’orchestrateur.
- **Manifeste :**
  `docs/research/manifests/droits-acces-application-metier-p4.sha256`, généré
  sur les treize artefacts après les contrôles finaux ; son SHA-256 externe est
  transmis hors du manifeste.

### Contrôle transversal

#### Audit Q initial — snapshot P4

- **Agent :** `droits_acces_q_transversal`, distinct de P1 à P4 et resté en
  lecture seule.
- **Snapshot :** manifeste P4 vérifié 13/13 ; SHA-256 externe
  `eff47c61a0904e0561e610c7820c93795c265ab22c502697a55cf247d1f38e1d`.
  Les manifestes P1 à P3 sont restés byte-identiques.
- **Verdict :** `NO_GO_QUALITE`, 93/100 et scorecard 18/20. Le total ne
  compensait ni le P1, ni l’axe technique à 7/10.
- **P0 :** 0.
- **P1 :** les quatre questions de contexte et les sept contrôles partageaient
  seulement deux `fieldset`. Les options répétées avaient un libellé, mais
  chaque groupe radio n’avait pas de nom contextuel relié à sa question.
- **P2 :**
  1. le sticky mobile « Faire relire la matrice » héritait de la route du
     service au lieu de l’étape `/demarrer-un-projet` ;
  2. les flèches du cycle carré présentes dans le SVG disparaissaient dans le
     WebP ;
  3. « aucun téléchargement » restait visible dans le pied du visuel 4:3 alors
     qu’il s’agissait d’une contrainte interne, pas d’une aide à la décision.
- **P3 :** « Retirer · Sans inertie » restait abstrait dans le carré.
- **Contrôles Q :** sources primaires rouvertes le 31 juillet 2026, calcul et
  oracle rejoués, 29 tests réussis, ESLint, TypeScript, Prettier, SVG, WebP et
  diff-check verts. Aucun fichier n’a été édité par Q.

#### Correction post-Q

- **Correcteur effectif :** `/root`, distinct de Q et des agents P1 à P4. Les
  agents `droits_acces_quality_correction` puis
  `droits_acces_quality_reprise` ont été interrompus sans edit après deux
  inventaires bloqués ; aucun chevauchement de fichier n’a été conservé.
- **Accessibilité :** les deux regroupements globaux sont désormais des
  sections titrées. Chacune des onze questions possède son propre `fieldset`,
  son `legend` contextuel et une description reliée par `aria-describedby`.
  Le DOM réellement rendu est contrôlé : onze groupes, onze légendes attendues
  et trois radios par groupe.
- **CTA :** le CTA contextuel et son sticky mobile portent tous deux « Faire
  relire la matrice » et ouvrent `/demarrer-un-projet`. Le CTA du héros conserve
  la route explicative `/services/outils-internes-sur-mesure`.
- **Visuel carré :** six flèches remplies, donc visibles dans le WebP livré,
  donnent l’ordre demander → valider → appliquer → tester → revoir → retirer.
  « Sans inertie » devient « À la date prévue ». Le SVG et le WebP ont été
  recomposés puis inspectés à 1000 × 1000.
- **Visuel 4:3 :** le résidu « aucun téléchargement » est remplacé par
  « test autorisé + test refusé ». Le SVG et le WebP ont été régénérés puis
  inspectés à 1200 × 900.
- **Fichiers modifiés après Q :** page, outil, test qualité, SVG/WebP 1:1,
  SVG/WebP 4:3 et présent journal. Le moteur, l’oracle, l’image OG, le visuel
  16:9 et ses faits restent inchangés.
- **Contrôles :** Vitest ciblé 30/30, dont le nouveau test DOM rendu ; ESLint
  du slug ; TypeScript sans émission ; Prettier 3.9.6 ; trois SVG valides ;
  trois WebP décodables aux dimensions attendues ; inspection visuelle native ;
  diff-check. Aucun `node_modules` temporaire n’est conservé.
- **P0/P1 résiduels du correcteur :** 0 / 0.
- **Gate :** `PRET_POUR_RECONTROLE_Q`. Ce statut n’est ni un
  `GO_QUALITE_GUIDE`, ni une autorisation d’intégration.
- **Manifeste qualité distinct :**
  `docs/research/manifests/droits-acces-application-metier-quality.sha256`.
  Les manifestes historiques P1 à P4 ne sont pas réécrits ; le SHA-256 externe
  du nouveau manifeste est transmis hors de celui-ci.

## Handoff d’intégration partagé proposé — non appliqué en P1

1. Ajouter l’entrée canonique à `src/lib/guides.ts` avec :
   - slug : `droits-acces-application-metier` ;
   - titre carte : « Droits d’accès d’une application métier » ;
   - H1 : « Qui peut voir et modifier quoi dans votre application métier ? » ;
   - section : Applications métiers et outils internes ;
   - route service : `/services/outils-internes-sur-mesure` ;
   - images : `/guides/droits-acces-application-metier/matrice-droits-16x9.webp`,
     `/guides/droits-acces-application-metier/matrice-droits-4x3.webp` et
     `/guides/droits-acces-application-metier/matrice-droits-1x1.webp` ;
   - `editorialStatus: "ready-for-human-review"` ;
   - temps de lecture mesuré seulement après intégration.
2. Ajouter l’icône du slug dans le hub si nécessaire.
3. Ajouter les attentes du slug dans `src/lib/guides.test.ts`.
4. Retirer l’ancien slug de l’inventaire de redirections uniquement s’il y
   figure réellement ; ne pas inventer de redirection.
5. Ajouter au moins un lien entrant contextuel depuis un guide voisin.
6. Rejouer SEO, tests globaux, build, HTML servi et BAT après intégration.

## Recontrôle Q et intégration partagée

### Recontrôle indépendant après correction

- **Agent :** `droits_acces_q_transversal`, distinct de P1 à P4 et resté en
  lecture seule pendant le recontrôle.
- **Snapshot :** manifeste qualité vérifié 13/13 ; SHA-256 externe
  `9dfd98b88e2b79a0bcc88fe44feaba3b7729faa71c8469f6f7bf7af199bb75df`.
  Les quatre manifestes historiques sont restés byte-identiques.
- **Verdict :** `GO_QUALITE_GUIDE`, 97/100, scorecard 20/20 et
  P0/P1/P2/P3 = 0/0/0/0.
- **Axes :** intention 10, exactitude 10, sources 10, valeur 10, décisions 10,
  calculs 9, pédagogie 9, voix 10, SEO 9 et technique 10.

### Intégration autorisée et exécutée localement

- **Orchestrateur :** `SECONDARY_ORCHESTRATOR_019fb1e0`.
- **Base Git :** `4d386da4f3e5e450ec702736dcd01d52511e1680`, branche
  `codex/droits-acces-application-metier`.
- **Verrou :** `integration.lock` acquis avant les modifications partagées et
  conservé jusqu’à la fin du push ou à l’abandon sûr.
- **Catalogue et hub :** entrée canonique ajoutée dans `src/lib/guides.ts`,
  collection « Applications métiers et outils internes » ajoutée au hub avec
  l’icône `KeyRound`, statut éditorial `ready-for-human-review` conservé.
- **Liens entrants :** contexte ajouté depuis le guide sécurité et depuis le
  service « outils internes sur mesure ». Les deux liens ont été vérifiés dans
  le HTML servi.
- **Temps de lecture :** 2 748 mots réellement mesurés, soit 14 minutes selon
  la convention du dépôt. La valeur provisoire de 18 minutes a été rejetée par
  le contrôle post-build puis corrigée avant le build vert.
- **Accessibilité partagée :** la BAT réelle a révélé qu’un gestionnaire
  `onKeyDown` du composant FAQ doublait l’activation native d’un bouton avec
  Entrée ou Espace. Le gestionnaire redondant a été retiré et un test de
  non-régression prouve désormais un seul basculement natif.

### Validation d’intégration

- **Tests :** suite complète Vitest verte, 85 fichiers et 654 tests ; suite SEO
  du build verte, 33 fichiers et 177 tests ; régression FAQ ciblée 3/3.
- **Statique :** TypeScript sans émission, ESLint ciblé, Prettier 3.9.6 et
  `git diff --check` verts sur le snapshot contrôlé.
- **Build :** le premier lancement Turbopack a échoué uniquement parce que le
  `node_modules` de validation était un lien symbolique extérieur à la racine
  du worktree. Le build de production Webpack, avec
  `NODE_OPTIONS=--max-old-space-size=8192`, a ensuite généré 66 pages et terminé
  sans erreur. Le post-build a contrôlé 44 pages, 44 URL de sitemap, 27 liens
  dans `llms.txt`, huit temps de lecture et 76 blocs JSON-LD.
- **HTML servi :** réponse 200, `lang=fr`, un seul H1 exact, canonical exact,
  `noindex,nofollow`, schémas `Article` et `BreadcrumbList` uniquement, image
  Open Graph en 200 et CTA service/projet cohérents. Le guide reste
  volontairement absent du hub public, du sitemap et de `llms.txt` tant que
  son statut est `ready-for-human-review`.
- **BAT :** 22 combinaisons thème/viewport, de 320 à 1 600 px, plus paysage
  640 × 360, équivalent zoom 720 px et police racine à 20 px. Aucun débordement
  horizontal utilisateur, aucune erreur console, 11 groupes radio correctement
  nommés, navigation clavier des radios et catégories FAQ, ouverture FAQ par
  Entrée, reset complet et dix verdicts distincts observés. La largeur brute
  du DOM de bureau inclut le mégamenu masqué commun, mais celui-ci est
  `visibility:hidden`, la racine coupe l’overflow et le défilement horizontal
  mesuré reste nul.
- **Visuel :** captures clair/sombre inspectées à 320, 768 et 1 440 px, ainsi
  que l’outil à 20 px et la FAQ au clavier ; aucune coupe, collision ou
  illisibilité bloquante.
- **Dépendances :** `npm audit --omit=dev` remonte dix vulnérabilités hautes
  préexistantes via `brace-expansion` et `sharp`. Les correctifs proposés
  exigent des changements cassants de Next/OpenNext ; aucune dépendance n’a été
  modifiée dans ce lot.
- **Hygiène :** le serveur local a été arrêté et le lien `node_modules`
  temporaire a été retiré avant le gel du snapshot.

## États externes

- **Commit :** NON EFFECTUE
- **Push :** NON EFFECTUE
- **Déploiement :** NON EFFECTUE
- **Publication :** NON EFFECTUEE
- **URL publique :** NON VERIFIEE
- **Indexation :** NON VERIFIEE
