# Dossier de recherche — RGPD pour un SaaS B2B

> Dossier rouvert le 24 juillet 2026 après le giga-audit du corpus. La première
> validation P4 reste conservée comme historique, mais elle a été invalidée par
> la découverte de quatorze lacunes P1. La section 13 est l’état autoritatif de
> la correction renforcée. Le guide fournit une méthode de préparation produit ;
> il ne donne aucun avis juridique individualisé et ne certifie aucune
> conformité.

## Journal des quatre passes

Propriétaire éditorial unique : orchestrateur du lot

| Passe                        | État actuel                                       | Date            | Responsable                    | Snapshot  | Blocages                                               |
| ---------------------------- | ------------------------------------------------- | --------------- | ------------------------------ | --------- | ------------------------------------------------------ |
| 1. Recherche                 | Rouverte et renforcée — matrice terminée          | 24 juillet 2026 | agent factuel RGPD indépendant | À regeler | Aucun mensonge manifeste ; neuf familles P1 confirmées |
| 2. Rédaction et intégration  | Correction renforcée en cours de fermeture        | 24 juillet 2026 | Codex                          | À regeler | Kit et validations finales à intégrer                  |
| 3. Contre-audit indépendant  | Matrice juridique faite ; snapshot final à relire | 24 juillet 2026 | agent indépendant à relancer   | À créer   | Page exacte non encore contre-notée                    |
| 4. Plume humaine et contrôle | À refaire sur le snapshot corrigé                 | —               | orchestration éditoriale       | À créer   | BAT navigateur réel et gel exhaustif manquants         |

### Manifeste du snapshot

| Fichier contrôlé                                  | Passe | Remarque                                                                                            |
| ------------------------------------------------- | ----- | --------------------------------------------------------------------------------------------------- |
| `docs/research/manifests/rgpd-saas-b2b-p1.sha256` | P1    | Manifeste existant ; historique de recherche conservé.                                              |
| `docs/research/manifests/rgpd-saas-b2b-p2.sha256` | P2    | Manifeste existant de rédaction et d'intégration.                                                   |
| `docs/research/manifests/rgpd-saas-b2b-p3.sha256` | P3    | Manifeste existant après contre-audit et corrections.                                               |
| `docs/research/manifests/rgpd-saas-b2b-p4.sha256` | P4    | Manifeste final créé après les contrôles P4 ; son empreinte est intégrée au snapshot commun du lot. |

## 1. Fiche d'identité

```text
Slug : rgpd-saas-b2b
Statut actuel : correction renforcée locale — NO-GO gel final avant P3, P4 et BAT
Requête principale : RGPD SaaS B2B
Moment du parcours : sécuriser avant de vendre ou de signer
Lecteur précis : dirigeant d'un SaaS vendu à des entreprises, qui traite des données sur leurs salariés, clients, prospects ou partenaires
Situation déclenchante : un prospect demande le DPA, la liste des sous-traitants, les durées de conservation, les lieux d'hébergement et la procédure d'incident ; l'équipe découvre que ces réponses ne sont pas reliées aux fonctions du produit
Décision principale après lecture : documenter et corriger avant signature, limiter le périmètre de données, solliciter une revue DPO/juridique, ou reporter la mise en service risquée
Niveau de connaissance au départ : connaît le mot RGPD et l'hébergement européen, mais confond responsable de traitement, sous-traitant, contrat, sécurité et fonctions d'exercice des droits
5 questions indispensables : quelles données et pour quelles finalités ? qui décide réellement du pourquoi et du comment ? quels sous-traitants et transferts interviennent ? quelles fonctions permettent accès, correction, export, suppression et conservation ? comment détecter, qualifier et notifier un incident ?
3 objections ou craintes : « nous sommes seulement sous-traitants, donc le client gère tout » ; « l'hébergement en Europe suffit » ; « une politique de confidentialité et un DPA standard règlent le sujet »
Action utile sans contact commercial : cartographier un seul parcours de donnée depuis sa collecte jusqu'à sa suppression, avec acteurs, finalité, lieu, durée et fonction du produit
CTA possible : cadrer les fonctions et preuves RGPD à intégrer au SaaS
Hors périmètre : consultation juridique, registre complet prêt à signer, promesse de conformité, analyse sectorielle santé/finance/enfants, rédaction contractuelle personnalisée, conseil sur un transfert précis
Date de la recherche : 23 juillet 2026
Responsable de la synthèse : agent de recherche Apps/SaaS
```

## 1 bis. Contrat de langage humain

- Phrase exacte : « Mon SaaS traite les données des salariés ou des clients de
  mes entreprises clientes : qu'est-ce que je dois vraiment prévoir avant de
  signer ? »
- Réponse en une phrase : commencez par nommer les données, leur raison d'être
  et l'acteur qui décide ; traduisez ensuite ces choix en contrat,
  sous-traitants, durées, droits, accès et procédure d'incident, puis faites
  confirmer les cas sensibles.
- Terme central sans jargon : le responsable de traitement décide pourquoi et
  comment les données sont utilisées ; le sous-traitant les traite pour son
  compte et selon ses instructions, mais le rôle réel compte plus que
  l'étiquette du contrat.
- Mots ordinaires : données, client, utilisateur, accès, compte, suppression,
  export, sauvegarde, hébergeur, incident, prestataire, durée, contrat.
- Jargon à traduire : controller, processor, DPA, sous-processeur, privacy by
  design, DPIA/AIPD, base légale, tenant, SCC/CCT, transfert hors UE.
- Projet des 150 premiers mots : partir de la question du prospect et expliquer
  les deux casquettes possibles du SaaS avec un exemple simple.
- Décision après 150 mots : le lecteur saura qu'il doit cartographier avant de
  répondre au questionnaire, et qu'un contrat seul ne corrige pas un produit
  incapable d'exporter ou supprimer.
- H2 relus isolément : réalisé en P2 puis confirmé en P3.
- Comparaison à 390 px : cartes « question / preuve / responsable », pas tableau
  juridique large.
- FAQ dont la première phrase répond : contrôlée en P4.
- CTA résultat : « Cadrer les fonctions et preuves RGPD de mon SaaS ».

### Test sujet, action, résultat

| Phrase initiale à éviter                             | Qui agit ?                             | Action concrète                                                                     | Résultat pour le lecteur                                   | Phrase réécrite                                                                                                   |
| ---------------------------------------------------- | -------------------------------------- | ----------------------------------------------------------------------------------- | ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| « Les rôles doivent être qualifiés. »                | Le fournisseur et son client           | Notent qui choisit finalité, données, durée et moyens essentiels                    | Ils voient quel rôle correspond aux faits                  | « Pour chaque usage, écrivez qui décide pourquoi les données existent et combien de temps elles restent. »        |
| « La minimisation doit être intégrée. »              | L'équipe produit                       | Retire un champ sans finalité démontrée                                             | Moins de données sont exposées et gérées                   | « Supprimez du formulaire tout champ dont personne ne peut expliquer l'utilité. »                                 |
| « L'exercice des droits doit être opérationnalisé. » | Le support et un administrateur client | Retrouvent, exportent, corrigent ou suppriment une personne test                    | La promesse contractuelle devient exécutable               | « Faites une demande fictive et chronométrez qui retrouve puis traite les données concernées. »                   |
| « La chaîne de sous-traitance doit être maîtrisée. » | Le fournisseur SaaS                    | Liste hébergeur, email, paiement, support, analytics et IA                          | Le client sait qui reçoit quoi et où                       | « Pour chaque prestataire, notez les données reçues, le pays, le contrat et la façon de le remplacer. »           |
| « Un processus de violation doit exister. »          | L'équipe d'astreinte                   | Détecte, conserve les faits, alerte le décideur et contacte le client selon le rôle | L'incident n'est pas découvert dans une boîte mail oubliée | « Simulez une fuite et vérifiez qui alerte le client, avec quelles informations et dans quel délai contractuel. » |

### Test de l'ouverture

- [x] situation du questionnaire client avant la méthode ;
- [x] RGPD, responsable, sous-traitant, DPA et AIPD définis au premier usage ;
- [x] aucun glossaire avant la réponse ;
- [x] aucune métaphore à apprendre ;
- [x] limites juridiques annoncées sans rendre le texte inutilisable.

## 2. Cannibalisation

| Page existante                           | Intention                                                                                                   | Différence du nouveau guide                                                                                      | Maillage                                                                 |
| ---------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| `/guides/securite-saas-b2b`              | Montrer les preuves techniques demandées par un acheteur : accès, secrets, sauvegardes, journaux, incidents | Répartir les rôles juridiques, les finalités, le contrat et le cycle des données, puis les traduire en fonctions | Lier pour approfondir les preuves de sécurité ; ne pas refaire son audit |
| `/guides/cahier-des-charges-saas`        | Cadrer tout le produit SaaS                                                                                 | Se limite aux données personnelles, aux rôles et aux fonctions associées                                         | Lien entrant depuis la rubrique données                                  |
| `/guides/heberger-saas-france-ou-europe` | Futur choix d'hébergement et de juridiction                                                                 | Explique pourquoi l'emplacement ne suffit pas à lui seul                                                         | Lier lorsqu'il existe, sans anticiper sa conclusion                      |
| `/services/securite-rgpd`                | Page transactionnelle                                                                                       | Guide général pouvant recommander un DPO ou juriste externe                                                      | CTA tardif ; aucune promesse de conformité                               |

**Justification d'une URL distincte :** elle transforme les responsabilités et
le cycle des données en décisions de produit vérifiables, sans dupliquer le
guide de sécurité ni le cahier des charges général.

## 3. Demande et vocabulaire du lecteur

SERP observée le 23 juillet 2026 : la CNIL apparaît sur la qualification des
rôles, aux côtés de checklists d'agences et de cabinets. Les questions visibles
portent sur `RGPD SaaS`, `DPA SaaS`, `sous-traitant SaaS`, `hébergement Europe`,
`liste des sous-traitants`, `durée de conservation`, `RGPD logiciel B2B`.

Questions de dirigeant à reprendre :

- « Est-ce nous ou le client qui sommes responsables ? »
- « Faut-il un DPA avec chaque client ? »
- « Europe veut-il dire conforme ? »
- « Dois-je avoir un DPO ? »
- « Peut-on utiliser les données du client pour améliorer l'IA ? »
- « Qui doit prévenir la CNIL en cas de fuite ? »

Search Console et Keyword Planner non accessibles. Aucun volume ni difficulté
n'est avancé. Le guide devra rester centré sur la décision produit, pas devenir
un dictionnaire du RGPD.

## 4. Carte concurrentielle

| Page                              | Réponse et angle                                   | Preuves                   | Bon point                                | Manque décisionnel                                   | Conflit            |
| --------------------------------- | -------------------------------------------------- | ------------------------- | ---------------------------------------- | ---------------------------------------------------- | ------------------ |
| CNIL — identifier son rôle        | Le rôle dépend des faits, pas du titre contractuel | Exemples et critères      | Autorité primaire, nuance des casquettes | Ne construit pas le parcours SaaS complet            | Aucun commercial   |
| CNIL — guide développeur          | Vie privée dès la conception                       | Fiches techniques         | Relie principes et développement         | Très large pour un dirigeant pressé                  | Aucun              |
| CNIL — sous-traitance             | Contrat, garanties et contrôle                     | Obligations et conseils   | Source de référence                      | Ne produit pas seul la matrice fonctionnelle du SaaS | Aucun              |
| CEPD — lignes directrices 07/2020 | Analyse détaillée responsable/sous-traitant        | Interprétation européenne | Profondeur juridique                     | Dense et peu orientée produit                        | Aucun              |
| Checklists d'agences/cabinets     | Liste de documents et actions                      | Modèles, audits           | Accessibles                              | Peuvent laisser croire qu'une checklist suffit       | Vendeur de conseil |
| Pages d'hébergeurs                | Localisation, sécurité, certifications             | Fiches d'offre            | Données pratiques                        | Hébergement présenté parfois comme réponse complète  | Vendeur            |

**Angle mort commun :** la continuité entre une finalité, un rôle, une clause
contractuelle et une fonction réellement testable dans le SaaS.

**Valeur originale :** suivre une donnée de bout en bout et produire une
matrice « décision / acteur / fonction / preuve / spécialiste à consulter ».

## 5. Fiche de preuves

| Affirmation utilisable                                                                                                                                                     | Source primaire, URL et passage utile                                                                                                                                                                                         | Nature                  | Périmètre                                   | Date/consultation                        | Confiance | Lien visible                        | Conséquence lecteur                                                                       | Fraîcheur |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- | ------------------------------------------- | ---------------------------------------- | --------- | ----------------------------------- | ----------------------------------------------------------------------------------------- | --------- |
| La qualification de responsable ou sous-traitant dépend des activités réelles et doit être documentée ; un organisme peut avoir des rôles différents selon les traitements | [CNIL — Comment bien identifier son rôle ?](https://www.cnil.fr/fr/rgpd-comment-bien-identifier-son-role)                                                                                                                     | Autorité                | Analyse factuelle, cas par cas              | 23 juillet 2026 ; article du 6 juin 2025 | Élevée    | Près des deux casquettes            | Cartographier chaque finalité au lieu d'appliquer une étiquette globale                   |
| L'article 28 exige un contrat encadrant le traitement effectué pour le responsable et précise des éléments obligatoires                                                    | [RGPD — article 28 sur EUR-Lex](https://eur-lex.europa.eu/eli/reg/2016/679/oj) et [CNIL — clauses contractuelles types](https://www.cnil.fr/fr/clauses-contractuelles-types-entre-responsable-de-traitement-et-sous-traitant) | Texte légal et autorité | Relation responsable/sous-traitant          | 23 juillet 2026                          | Élevée    | Partie contrat                      | Relier le DPA aux traitements, instructions, sécurité, sous-traitants et sort des données |
| Les clauses types responsable/sous-traitant ne sont pas, à elles seules, les clauses dédiées aux transferts hors UE                                                        | [CNIL — clauses contractuelles types](https://www.cnil.fr/fr/clauses-contractuelles-types-entre-responsable-de-traitement-et-sous-traitant)                                                                                   | Autorité                | Distinction article 28 / chapitre V         | 23 juillet 2026                          | Élevée    | Partie transferts                   | Ne pas présenter un seul modèle comme réponse à tous les transferts                       |
| La CNIL recommande de cartographier les flux, minimiser les données, sécuriser les utilisateurs, tester, informer, préparer les droits et gérer la conservation            | [CNIL — Guide RGPD du développeur](https://www.cnil.fr/fr/guide-rgpd-du-developpeur)                                                                                                                                          | Autorité                | Première approche, pas validation juridique | 23 juillet 2026                          | Élevée    | Au niveau de chaque fonction        | Inscrire ces fonctions dans le backlog et leurs tests                                     |
| Seules les données adéquates, pertinentes et nécessaires au regard de la finalité devraient être collectées                                                                | [CNIL — Minimiser les données collectées](https://www.cnil.fr/fr/minimiser-les-donnees-collectees)                                                                                                                            | Autorité                | Principe de minimisation                    | 23 juillet 2026                          | Élevée    | Partie formulaire/modèle de données | Exiger une finalité pour chaque champ                                                     |
| Le choix d'un sous-traitant suppose des garanties suffisantes et la relation doit être encadrée et contrôlée                                                               | [CNIL — Sécurité : gérer la sous-traitance](https://www.cnil.fr/fr/securite-gerer-la-sous-traitance)                                                                                                                          | Autorité                | Sécurité de la chaîne de sous-traitance     | 23 juillet 2026                          | Élevée    | Partie prestataires                 | Documenter services, accès, lieux, engagements et suivi                                   |
| Les lignes directrices européennes détaillent les notions de responsable, responsables conjoints et sous-traitant                                                          | [CEPD — Guidelines 07/2020](https://www.edpb.europa.eu/documents/guideline/guidelines-072020-on-the-concepts-of-controller-and-processor-in-the-gdpr_en)                                                                      | Autorité européenne     | Interprétation générale                     | 23 juillet 2026                          | Élevée    | Source d'approfondissement          | Escalader les cas où les décisions sont partagées                                         |
| Le sous-traitant informe le responsable d'une violation sans délai indu ; la notification de l'autorité par le responsable dépend du risque et du cadre de l'article 33    | [RGPD — article 33 sur EUR-Lex](https://eur-lex.europa.eu/eli/reg/2016/679/oj)                                                                                                                                                | Texte légal             | Violation de données personnelles           | 23 juillet 2026                          | Élevée    | Partie incident                     | Ne pas promettre mécaniquement « notification CNIL sous 72 h par le SaaS »                |

### Contradictions et données à ne pas publier

- « Un SaaS B2B est toujours sous-traitant » : faux comme règle générale.
- « Hébergé en France ou en Europe = conforme » : insuffisant.
- « Le DPA rend le SaaS conforme » : le contrat ne remplace pas les fonctions,
  la sécurité et les pratiques.
- « Tous les incidents doivent être notifiés par le SaaS à la CNIL en 72 h » :
  la règle dépend du rôle et du risque ; distinguer l'alerte du sous-traitant.
- Aucun délai contractuel inventé, notamment « une heure ».
- Aucun label « RGPD compliant », aucune certification ou audit implicite.
- Ne pas répondre de manière universelle sur l'obligation de DPO, d'AIPD, la
  base légale ou un transfert sans faits.
- Les données de santé, mineurs, salariés, finance, surveillance ou profilage
  peuvent exiger une analyse renforcée ; les signaler sans dramatiser.
- Ne pas suggérer de réutiliser les données clients pour entraîner ou améliorer
  une IA sans nouvelle analyse de finalité, rôle, contrat, information et droit
  applicable.

### Calculs reproductibles

Aucun calcul de conformité, score ou risque chiffré ne sera inventé. La ressource
peut seulement compter :

- nombre de finalités sans responsable nommé ;
- champs sans nécessité démontrée ;
- sous-traitants sans donnée/pays/contrat renseigné ;
- demandes de droits impossibles à exécuter ;
- durées sans règle d'expiration ;
- scénarios d'incident sans responsable ni canal.

Ces comptes sont des indicateurs de préparation, jamais un pourcentage de
conformité. Aucun ROI juridique.

## 6. Empreinte éditoriale à ne pas reproduire

| Guide                            | Ouverture              | Progression             | Dispositif          | Exemple        | CTA     | Conclusion          |
| -------------------------------- | ---------------------- | ----------------------- | ------------------- | -------------- | ------- | ------------------- |
| `securite-saas-b2b`              | Question d'un acheteur | Preuves techniques      | Dossier de sécurité | SaaS fictif    | Audit   | Montrer des preuves |
| `cahier-des-charges-saas`        | Projet à cadrer        | Ensemble des fonctions  | Checklist large     | Produit fictif | Cadrage | Périmètre           |
| `heberger-saas-france-ou-europe` | Choix d'emplacement    | Juridictions/hébergeurs | Comparaison         | À venir        | Fin     | Choix d'hébergement |

```text
Tension : « Le questionnaire client demande des preuves que le produit ne sait pas encore produire. »
Ouverture : un prospect pose cinq questions avant signature
Progression : une donnée → finalité → rôle → prestataires → fonction → contrat → incident → preuve
Artefact : carte d'une donnée et matrice des deux casquettes
Voix : calme, précise, sans transformer le RGPD en menace commerciale
CTA : après l'exercice autonome et le renvoi spécialiste
Conclusion : liste courte de ce qui peut être corrigé maintenant et de ce qui doit être confirmé
Différences : part d'un parcours de donnée ; lie droit et fonction ; distingue casquettes ; refuse un score de conformité
```

## 7. Plan annoté

| Section                                         | Question                                   | Preuve/exemple                                           | Décision                             | Format          |
| ----------------------------------------------- | ------------------------------------------ | -------------------------------------------------------- | ------------------------------------ | --------------- |
| Votre prospect pose cinq questions              | Pourquoi le sujet arrive-t-il maintenant ? | Scène avant signature                                    | Ne pas envoyer un document générique | Ouverture       |
| La réponse courte : suivez une donnée           | Par où commencer ?                         | Parcours collecte-suppression                            | Cartographier                        | Fil rouge       |
| Le SaaS peut porter deux casquettes             | Qui décide ?                               | Données du client vs données propres du fournisseur      | Qualifier par finalité               | Deux cartes     |
| Écrivez pourquoi chaque donnée existe           | Que collecter ?                            | Champ sans utilité                                       | Minimiser ou justifier               | Atelier         |
| Nommez chaque prestataire et chaque lieu        | Qui reçoit quoi ?                          | Hébergeur, email, paiement, support, analytics, IA       | Contrôler la chaîne                  | Tableau compact |
| Transformez les droits en boutons et procédures | Le produit sait-il agir ?                  | Recherche, export, correction, suppression, conservation | Corriger le backlog                  | Tests           |
| Faites correspondre contrat et réalité          | Que doit décrire le DPA ?                  | Article 28 et annexes                                    | Revue juridique si nécessaire        | Correspondances |
| Simulez un incident                             | Qui alerte qui ?                           | Exercice fictif                                          | Clarifier rôles et informations      | Chronologie     |
| Préparez un dossier de preuve limité            | Que montrer au prospect ?                  | Carte, sous-traitants, mesures, procédure                | Répondre honnêtement                 | Checklist       |
| Quand s'arrêter et demander conseil             | Quel cas dépasse le guide ?                | Données sensibles/haut risque/transferts complexes       | DPO/juriste                          | Encadré         |

### Scénario dirigeant

**Exemple illustratif fictif :** « Orbia » vend un SaaS de suivi de formation.
Pour les listes de salariés chargées par un client, Orbia peut agir comme
sous-traitant selon les faits et instructions. Pour ses propres contacts de
facturation et statistiques commerciales, elle poursuit ses propres finalités.
Le guide n'arrêtera pas définitivement cette qualification : il montrera les
questions à faire confirmer.

### FAQ prévue

- Un SaaS B2B est-il toujours sous-traitant ?
- Un hébergement en Europe suffit-il pour le RGPD ?
- Faut-il obligatoirement nommer un DPO ?
- Faut-il un DPA avec chaque client ?
- Peut-on réutiliser les données clients pour améliorer une IA ?
- Qui doit notifier une fuite et que signifie le délai de 72 heures ?

## 8. Ressource et conversion

```text
Ressource nécessaire : oui, sous réserve de création et revue
Problème : les documents et le produit ne racontent pas le même traitement
Résultat autonome : carte d'un parcours de données et liste des écarts à corriger/faire confirmer
Formats : tableur éditable + PDF ; pas de promesse de conformité
Champs : finalité, données, personnes, rôle supposé, décideur, base à confirmer, source, destination, sous-traitant, pays, durée, droits, fonction, preuve, contrat, incident, spécialiste
Exemple rempli : Orbia, explicitement fictif
Conclusion « ne pas investir » : oui, limiter ou reporter une fonction risquée
Sources/limites : CNIL, CEPD, RGPD ; qualification à confirmer
Données saisies : modèle local sans transmission à Hagnéré Code
QA : formules, listes, PDF, accessibilité, scénario complet, revue DPO/juridique recommandée
Maintenance : veille annuelle et à chaque changement de fournisseur/finalité
Bon fit : produit existant nécessitant fonctions, cartographie ou dossier client
Mauvais fit : demande d'avis juridique, transfert complexe ou secteur sensible sans conseil spécialisé
Action autonome : suivre aujourd'hui une donnée de la collecte à la suppression
CTA : « Cadrer les fonctions et preuves RGPD de mon SaaS » vers /demarrer-un-projet
```

## 9. Rapport P1

```text
PASSE 1 TERMINÉE
Slug : rgpd-saas-b2b
Lecteur et phrase réelle : dirigeant SaaS — « Que prévoir avant de signer si je traite les données de mes clients ? »
Décision : corriger/documenter, limiter, consulter un spécialiste ou reporter
Angle : suivre une donnée et relier finalité, rôle, fonction, contrat et preuve
Pages proches : sécurité SaaS traite les preuves techniques ; ce guide traite rôles et cycle des données
Sources : RGPD, CNIL et CEPD
Incertitudes exclues : conformité garantie, rôle universel, Europe suffisante, DPO/AIPD universels, notification simplifiée
Action/CTA : carte d'une donnée ; cadrer les fonctions et preuves
Plan : prospect, parcours, casquettes, minimisation, prestataires, droits, contrat, incident, dossier, spécialiste
Snapshot : dossier P1 courant ; manifeste par l'orchestrateur
```

## 10. Historique P1 — portes prévues le 23 juillet 2026

> État conservé pour la traçabilité : ces travaux restaient à accomplir à la
> clôture de P1. P2, P3 et P4 ont été terminées le 24 juillet 2026 ; voir
> section 12.

- P2 devait intégrer l’avertissement général et les sources au niveau des
  affirmations.
- P3 devait conduire une relecture indépendante, technique et juridique,
  notamment sur les articles 28 et 33 et les cas limites.
- P4 devait humaniser sans simplifier à tort et contrôler rendu, liens, console,
  accessibilité et autorisation.

## 11. Historique P1 — revue préparatoire

> Cette photographie du 23 juillet 2026 est remplacée, pour le verdict courant,
> par la validation finale de la section 12.

| Critère            | État P1         | Condition finale                                  |
| ------------------ | --------------- | ------------------------------------------------- |
| Décision           | Validée         | Réponse précoce et voies d'escalade               |
| Pédagogie          | Validée au plan | Deux casquettes comprises sans jargon             |
| Preuves            | Corpus primaire | Réouverture P2/P3                                 |
| Prudence juridique | Forte           | Aucun conseil individualisé ni conformité promise |
| Conversion         | Loyale          | Mauvais fit spécialiste clairement visible        |
| Test humain        | Non réalisé     | À réaliser ou déclarer                            |
| Page/rendu/SEO     | Non créés       | Contrôle P4 obligatoire                           |

- État historique P1 — contre-audit indépendant : non réalisé.
- État historique P1 — ressource, page, schémas et image sociale : non créés à
  ce stade.
- État historique P1 — publication : hors périmètre de cette première passe.

## 12. Historique — première validation P2, P3 et P4, désormais supersédée

> Cette section conserve la preuve de la première vague. Son verdict
> « publiable » et son score ne décrivent plus le snapshot courant. Le
> giga-audit a rouvert le guide ; seule la section 13 peut porter le prochain
> verdict.

### Rapport P2 — Rédaction et intégration

- Article complet intégré sur `/guides/rgpd-saas-b2b`, avec ouverture destinée
  au dirigeant, sources primaires, limites juridiques, cas fictifs signalés,
  FAQ, maillage et CTA unique sans promesse de conformité.
- Métadonnées, données structurées `Article` et `BreadcrumbList`, image sociale
  dédiée et inscription au registre des guides contrôlées.
- Snapshot : `docs/research/manifests/rgpd-saas-b2b-p2.sha256`.

### Rapport P3 — Contre-audits et corrections

- `final_audit_apps` : contre-audit indépendant du fond, des sources, du
  périmètre juridique, des rôles RGPD et de la pédagogie dirigeant.
- `anti_ia_final` : passe de plume humaine, suppression des formulations
  mécaniques et vérification de la réponse dans l'ouverture.
- `seo_tech_final` : contrôle indépendant de l'intégration SEO et technique.
- Les corrections P3 ont été appliquées puis relues ; aucun P0 ni P1 ne reste.
- Snapshot : `docs/research/manifests/rgpd-saas-b2b-p3.sha256`.

### Rapport P4 — Contrôle final du lot

- 55 tests ciblés, `check:seo` 228, suite générale 453, TypeScript, ESLint et
  `diff-check` : validés.
- Build : 159 pages générées.
- Audit d'artefact : 143 URLs, 126 liens, 143 pages, 101 temps de lecture et
  274 blocs JSON-LD contrôlés.
- Navigateur réel : 10 routes × 5 largeurs = 50 contrôles, thèmes clair et
  sombre compris.
- Images sociales : 10/10 au format 1200 × 630.
- Snapshot P4 :
  `docs/research/manifests/rgpd-saas-b2b-p4.sha256`.

### Verdict historique invalidé par le giga-audit

**Score final : 19/20.** Le fond, la pédagogie, les preuves, les limites
juridiques, la conversion et l'intégration sont validés. Un point reste
volontairement retiré car aucun lecteur humain réel indépendant n'a participé
au test final.

Statut actuel : publiable — validation éditoriale déléguée

Décision de publication : autorisée explicitement par le commanditaire

Test réalisé par une personne réelle : non

Réserve SEO : la page est techniquement indexable ; indexable ne signifie pas
indexée par Google, et aucune indexation effective ni position n'est promise.

## 13. Correction renforcée issue du giga-audit — état autoritatif

### 13.1. Pourquoi le guide a été rouvert

Le rapport `docs/audits/giga-audit-2026-07-24/guides/rgpd-saas-b2b.md`
a ramené le score observé à 71/100. La page était humaine et prudente, mais
elle ne traitait pas assez profondément les décisions qui exposent réellement
un dirigeant : responsables conjoints, détail de l’article 28, chapitre V,
bases et données sensibles, registres, droits, article 32, AIPD/DPO, cookies,
IA, sortie et coût de préparation.

Une contre-lecture juridique indépendante a ensuite rouvert les sources
officielles. Elle n’a trouvé aucune contre-vérité manifeste justifiant le
retrait immédiat de la page, mais elle a confirmé neuf familles de lacunes P1.
Le passage sur les violations était le plus solide ; il a été conservé et
précisé.

### 13.2. Sources normatives revérifiées

| Sujet                                           | Source officielle                                                                      | Décision éditoriale                                                                                                                                                                                                                                    |
| ----------------------------------------------- | -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Rôles, responsables conjoints et sous-traitants | RGPD articles 26 et 28 ; lignes directrices finales 07/2020 du CEPD ; CNIL rôles       | qualifier par finalité ; moyens essentiels distincts des choix techniques ; jamais de rôle universel                                                                                                                                                   |
| Registres, sécurité, AIPD et DPO                | RGPD articles 30, 32, 35 à 39 ; CNIL registre, AIPD et guide du DPO                    | deux registres si deux casquettes ; exemption moins de 250 bornée ; approche par le risque ; déclencheurs exacts ; règles sectorielles à vérifier ; désignation, moyens, indépendance, conflits, coordonnées et missions distingués                    |
| Transferts                                      | RGPD chapitre V ; guide final AITD CNIL 2025 ; recommandations finales 01/2020 du CEPD | écrire EEE et pays précis ; séparer adéquation, article 46, AITD, mesures et article 49                                                                                                                                                                |
| Conception, information et droits               | RGPD articles 12 à 14, 15 à 22 et 25 ; CNIL transparence                               | minimisation et réglages par défaut ; collecte directe/indirecte ; délai d’information article 14 borné ; délai de réponse d’un mois, prolongation possible, droits conditionnels et portabilité individuelle distincte de l’export B2B                |
| Cookies et mesure d’audience                    | article 82 de la loi Informatique et Libertés ; doctrine CNIL                          | branche distincte ; B2B n’est pas une exemption ; mesure d’audience exemptée seulement sous conditions                                                                                                                                                 |
| Réutilisation pour l’IA                         | CNIL sur la réutilisation par les sous-traitants ; RGPD articles 6, 9, 28 et 29        | autorisation écrite et test de compatibilité selon le cas CNIL ; rôle de responsable du traitement ultérieur ; pas de base inventée                                                                                                                    |
| Violations                                      | RGPD articles 33 et 34 ; procédure CNIL                                                | notification échelonnée, registre de toutes les violations, exceptions d’information et responsabilité du responsable conservées                                                                                                                       |
| Sortie                                          | RGPD article 28(3)(g), article 20 ; Data Act articles 23 à 31                          | séparer retour/suppression, droit individuel à la portabilité et changement de fournisseur ; appliquer exactement le régime particulier de l’article 31 ; signaler les frais réduits jusqu’au 12 janvier 2027 puis leur suppression selon l’article 29 |

La date seule n’est pas une garantie de fraîcheur. La page ordonne une
réouverture de ces sources à chaque changement de finalité, de fournisseur, de
pays, d’IA ou de contrat, et au minimum lors de la revue annuelle.

### 13.3. Fermeture éditoriale des quatorze P1

| ID historique                   | Correction intégrée au snapshot courant                                                                                                                                                                                   | État local                                                  |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| P1-01 responsables conjoints    | accord transparent, substance accessible et exercice des droits contre chacun ajoutés                                                                                                                                     | fermé sur le texte ; qualification réelle non prouvée       |
| P1-02 article 28                | six blocs couvrant périmètre, instructions, confidentialité/sécurité, sous-traitants, assistance, retour/suppression/audits                                                                                               | fermé sur le texte ; DPA réel non audité                    |
| P1-03 transferts                | arbre EEE, adéquation, article 46, AITD, mesures supplémentaires, accès distant et article 49                                                                                                                             | fermé sur le texte ; transfert réel non validé              |
| P1-04 bases/article 9           | finalité, hypothèse article 6, article 9 à deux portes et article 10 distinct                                                                                                                                             | fermé sur le texte ; base réelle à confirmer                |
| P1-05 information/droits        | notice, délai, prolongation, refus, accès, correction, effacement, limitation, opposition, décision automatisée et portabilité conditionnelle                                                                             | fermé sur le texte ; demande réelle non testée              |
| P1-06 registres/AIPD/DPO        | registres responsable/sous-traitant, exemption bornée, porte AIPD, trois déclencheurs DPO, autres règles possibles, désignation interne/externe/mutualisée, moyens, indépendance, missions, conflits, coordonnées et CNIL | fermé sur le texte ; obligation réelle à confirmer          |
| P1-07 article 32                | isolation, droits, journaux, sauvegarde, restauration et tests reliés aux risques SaaS                                                                                                                                    | fermé sur le texte ; architecture réelle non auditée        |
| P1-08 cookies                   | article 82, nécessaire/non nécessaire, consentement/refus/retrait et exemption d’audience conditionnelle                                                                                                                  | fermé sur le texte ; traceurs réels non audités             |
| P1-09 IA/données sensibles      | fournisseur, réutilisation, information, transfert, AIPD, désactivation, articles 9/10                                                                                                                                    | fermé sur le texte ; fonction réelle non autorisée          |
| P1-10 sortie                    | article 28, article 20, Data Act articles 23 à 31, obligations précisément écartées par l’article 31, versions d’essai et frais de changement au 12 janvier 2027, exercice deux clients + restauration                    | fermé sur le texte ; export réel non testé                  |
| P1-11 TCO                       | trois scénarios explicitement fictifs à 12/36/60 mois, calculs reproductibles et inconnues jamais égales à zéro                                                                                                           | fermé sur le texte                                          |
| P1-12 stop/go/rollback          | quatre portes : avancer, limiter, revoir, arrêter/report                                                                                                                                                                  | fermé sur le texte                                          |
| P1-13 ressource/CTA             | kit sans e-mail, aucun score ni DPA prêt à signer ; 9 CSV et 3 Markdown explicités ; frontière Hagnéré Code/DPO-juriste explicite                                                                                         | fermé localement ; téléchargement de production non vérifié |
| P1-14 score juridique implicite | ancienne note marquée historique ; aucune note de conformité portée par la page ou le kit                                                                                                                                 | fermé sur la gouvernance                                    |

### 13.4. Scénarios chiffrés entièrement fictifs

```text
PME 12 mois
3 900 + 2 500 + 2 000 + 3 000 = 11 400 €

Vente entreprise 36 mois
20 000 + 12 000 + 8 000 + (1 500 × 36) + (9 000 × 3)
+ (32 000 × 15 % × 3) = 135 400 €

Chaîne internationale 60 mois
35 000 + 20 000 + (2 000 × 60) + 15 000 = 190 000 €
Sensibilité remplacement fournisseur : 190 000 + 30 000 = 220 000 €
```

Ces profils ne couvrent pas le même périmètre et ne sont pas comparés comme
trois offres. Ils ne représentent ni un prix de marché, ni un tarif Hagnéré
Code, ni un coût de conformité, ni une amende évitée. Trésorerie, temps interne,
récurrent et inconnues doivent rester séparés.

### 13.5. Kit autonome

Le kit public doit contenir :

- registre responsable et registre sous-traitant ;
- matrice des rôles supposés ;
- matrice prestataires, pays et transferts ;
- contrôle article 28 produit–contrat–preuve ;
- tests de droits et de sortie ;
- exercice de violation ;
- triage AIPD/DPO ;
- exemple Orbia strictement fictif ;
- plan d’actions et budget avec anti-double comptage ;
- relevé de décision.

Interdictions : aucune donnée personnelle réelle, aucun secret, aucun score de
conformité, aucun rôle ou transfert « validé », aucun DPA prêt à signer, aucun
coût inconnu transformé en zéro et aucune captation d’adresse.

### 13.6. Contrôles déjà reproduits sur la nouvelle page

```text
Route locale : HTTP 200.
Image sociale locale : HTTP 200, image/png.
ZIP local : HTTP 200 ; 12 entrées plates ; test d’intégrité sans erreur.
Texte de l’article mesuré par le script du dépôt : 7 018 mots, 35 minutes à
200 mots/minute, outil interactif compris.
Tests ciblés RGPD + batch 4 + langage humain : 98/98.
TypeScript : PASS.
ESLint ciblé : PASS sans erreur ni avertissement après correction des groupes
radio.
Page : articles 13/14/25/26/28/30/32/35/37 à 39, chapitre V, cookies, IA,
Data Act articles 23 à 31, échéance du 12 janvier 2027, 12/36/60, kit et
quatre portes de décision présents.
```

### 13.7. Fermeture du contre-audit exact

Le contre-audit du snapshot enrichi a relevé quatre P1 résiduels et plusieurs
P2. Ils ont été traités dans le snapshot de fermeture :

| Défaut résiduel                        | Correction                                                                                                                                                                                | Vérification locale                                      |
| -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| DPO encore trop bref                   | obligation et droit sectoriel, DPO interne/externe/mutualisé, connaissances, moyens, association précoce, indépendance, rattachement, missions, conflits, coordonnées et désignation CNIL | assertions page + triage statique                        |
| Exemple Orbia divergent                | page, questionnaire et exemple CSV suivent désormais le même SaaS fictif de formation ; facturation et IA sont identifiées comme finalités distinctes                                     | assertions moteur + page                                 |
| Montants pouvant être lus comme tarifs | chaque ligne devient une hypothèse supposée ; les additions sont des sous-totaux fictifs incomplets ; exclusions, coûts inconnus et absence de devis rappelés                             | recalculs inchangés et assertions de prudence            |
| Data Act trop général                  | article 31(1) limité aux obligations qu’il cite, article 31(2) pour la version d’essai, information article 31(3), frais article 29 jusqu’au puis à compter du 12 janvier 2027            | EUR-Lex rouvert le 24 juillet 2026 et assertions dédiées |
| Journal d’incident trop court          | prise de connaissance, périmètre, volumes, conséquences, mesures, rôle, contact, risque, notification, retard, compléments, article 34 et clôture ajoutés                                 | CSV rectangulaire et ZIP rejoué                          |
| Formats insuffisamment expliqués       | page et mode d’emploi distinguent 9 CSV, 3 Markdown et le relevé `.md` du questionnaire                                                                                                   | assertions page + kit                                    |
| Remise à zéro immédiate                | confirmation en deux actions et annulation ajoutées, sans effacer au premier clic                                                                                                         | test de composant                                        |
| Erreurs radio peu explicites           | groupe radio étiqueté, `aria-invalid`, `aria-errormessage`, et chaque radio décrit par le message                                                                                         | test DOM + ESLint                                        |
| Article 25 et collecte indirecte       | protection dès la conception/par défaut et information article 14 ajoutées à la page et au registre                                                                                       | assertions page + CSV                                    |
| Chronologie d’incident                 | ordre confinement/preuve/rôle/risque/décision/documentation ajouté, sans retarder la protection                                                                                           | assertion éditoriale et journal                          |

Les rapports P3 factuel et P4 humain sont archivés dans
`docs/audits/giga-audit-2026-07-24/reviews/`. Ils portent sur le snapshot local
de fermeture ; ils ne valident aucun SaaS réel.

### 13.8. Portes encore ouvertes après le gel local

```text
P0 : aucune contre-vérité manifeste repérée ; interdiction maintenue de vendre
la page comme avis, certification ou validation d’un dossier réel.
P1 : aucun défaut éditorial P1 identifié par le contre-audit ne reste ouvert
sur le snapshot local.
P2 : le temps de lecture est aligné à 35 minutes dans `src/lib/guides.ts`. Le
BAT navigateur réel 320–1440, clair/sombre, clavier et rendu des
téléchargements reste à exécuter sur le snapshot exact.
P3 : aucun rôle, DPA, transfert, AIPD, DPO, cookie, modèle IA, architecture,
incident ou droit réel n’est validé.
P4 : production, sitemap, indexation et position Google non vérifiés.
```

Verdict courant : **GO éditorial local sous réserve du BAT ; NO-GO publication
prouvée** jusqu’au BAT navigateur du snapshot exact et aux contrôles de
production. Cette réserve ne remet pas en cause la profondeur ajoutée ; elle
empêche de confondre rédaction locale, validation juridique d’un cas réel et
publication observée.
