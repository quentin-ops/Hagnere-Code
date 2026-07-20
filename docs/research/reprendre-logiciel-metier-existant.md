# Dossier de travail — reprendre un logiciel métier existant

## 1. Fiche d'identité

```text
Slug : reprendre-logiciel-metier-existant
Statut actuel : publiable — validation éditoriale déléguée le 20 juillet 2026
Requête principale : reprendre un logiciel métier existant
Moment du parcours : sécuriser puis décider
Lecteur précis : dirigeant ou responsable opérationnel d'une PME dont une application utile doit changer d'équipe technique
Situation déclenchante : départ du développeur, relation prestataire rompue, maintenance impossible, incidents répétés ou acquisition d'un produit existant
Décision principale après lecture : autoriser une reprise, imposer une phase de sécurisation, migrer par lots, réécrire une partie ou reporter faute de preuves
Niveau de connaissance au départ : connaît les usages métier et les incidents, sans devoir savoir lire le code
5 questions indispensables : quels accès posséder ; quelles données protéger ; comment prouver qu'une livraison et une restauration sont possibles ; comment classer la dette ; que prévoir au contrat
3 objections ou craintes : le code sera incompréhensible ; la reprise coupera la production ; l'audit ne sera qu'un prétexte à tout réécrire
Action utile sans contact commercial : constituer un coffre de reprise et soumettre l'application à cinq portes non compensables
CTA possible : demander un audit de reprise dont les accès, limites, livrables et critères de sortie sont écrits avant intervention
Hors périmètre : audit de cybersécurité certifiant, avis juridique, réponse à incident en cours, prix moyen de TMA, migration détaillée ou choix de framework
Date de la recherche : 20 juillet 2026
Responsable de la synthèse : Codex pour Hagnéré Code
```

La décision principale : **ne pas signer une maintenance durable tant que la
nouvelle équipe n'a pas prouvé qu'elle peut observer, livrer, restaurer et
quitter le système sans dépendre de l'ancienne.**

## 2. Cannibalisation

| Page existante                           | Intention de cette page                                               | Différence du nouveau guide                                                                               | Lien ou arbitrage nécessaire                                            |
| ---------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `/services/maintenance-evolution`        | présenter l'offre de maintenance et de TMA                            | expliquer le travail préalable qui permet d'accepter ou de refuser une reprise                            | CTA vers un audit de reprise ; ne pas recopier les forfaits             |
| `/services/audit-technique`              | vendre un audit large de code, architecture, sécurité et organisation | guider une décision précise de changement d'équipe sur une application déjà en production                 | lien comme option si le périmètre dépasse la seule reprise              |
| `cout-maintenance-site-internet`         | comprendre le budget de maintenance d'un site                         | aucun prix de marché ; application métier, accès, données, continuité et preuve de livraison              | lien seulement si le lecteur cherche ensuite un budget                  |
| `proprietaire-site-internet-code-source` | vérifier propriété et actifs d'un site                                | ne tranche aucun droit ; transforme les clauses et actifs disponibles en conditions techniques de reprise | lien pour approfondir le code source et les contrats                    |
| `cahier-des-charges-application-metier`  | préparer une nouvelle application                                     | partir d'un système vivant, avec comportements, données et dépendances à préserver                        | lien pour formaliser les évolutions après stabilisation                 |
| `calculer-roi-application-metier`        | mesurer l'intérêt économique d'un investissement                      | arbitrer continuité, risque et dette avant d'engager la maintenance                                       | lien si une migration ou réécriture devient une option d'investissement |

**Porte de sortie :** cette URL répond à une urgence de continuité entre deux
équipes ; aucune page existante ne donne les preuves à réunir avant d'accepter la
responsabilité d'un logiciel déjà en production.

Les futurs sujets `reprendre-saas-developpe-par-freelance`,
`reprendre-mvp-vibe-code`, `audit-technique-avant-reprendre-site` et
`contrat-tma-application` devront rester spécialisés respectivement sur le
contexte SaaS/freelance, les risques du code généré, un site web et le contrat de
maintenance. Le présent guide conserve l'intention transversale de continuité
d'une application métier entre deux équipes.

## 3. Demande et vocabulaire du lecteur

Questions observées dans les résultats et pages concurrentes consultés le
20 juillet 2026 :

- « Peut-on reprendre une application développée par un autre prestataire ? » ;
- « Que faut-il récupérer de l'ancien développeur ? » ;
- « Comment changer de prestataire sans arrêter le logiciel ? » ;
- « Faut-il réécrire ou maintenir l'existant ? » ;
- « Que contient un audit de reprise ? » ;
- « Comment reprendre un logiciel sans documentation ? » ;
- « Qui possède le dépôt, l'hébergement et les comptes ? ».

Variantes utiles : reprise applicative, audit de reprise logiciel, changement de
prestataire application, maintenance d'un logiciel existant, TMA application
existante, logiciel sans documentation, récupérer code source et accès.

Il n'existe pas ici de mesure de volume Search Console attribuable à la requête.
La priorité vient de la roadmap commerciale et de la proximité avec un besoin
urgent et qualifié ; elle ne doit pas être présentée comme une demande chiffrée.

## 4. Carte concurrentielle

Résultats francophones consultés le 20 juillet 2026. Ces pages servent à
comprendre la réponse dominante, jamais à soutenir un fait technique.

| Page                                                                                                                                   | Réponse et angle                                | Preuves/artefacts                                    | Bon point                                                  | Manque décisionnel                                              | Conflit d'intérêt éventuel           |
| -------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------------- | --------------------------------------------------------------- | ------------------------------------ |
| [Codisys — Reprendre une application web existante](https://codisys.fr/articles/reprendre-application-web-existante.html)              | audit technique large puis reprise/refonte      | listes code, base, dépendances, sécurité, sauvegarde | couverture technique accessible                            | peu de contrat, propriété de comptes et preuves exécutées       | vend maintenance et développement    |
| [Elipce — Reprise de logiciel existant](https://www.elipce.com/reprise-de-logiciel-existant)                                           | faisabilité, audit, transfert puis maintenance  | étapes de mission                                    | reconnaît qu'un prestataire doit pouvoir refuser           | critères et livrables peu précis ; lignes de code survalorisées | accompagnement global Elipce         |
| [Oniti — Reprise de logiciel et d'application](https://www.oniti.fr/expertises/creation-logiciel-metier/reprise-logiciel-application/) | audit puis reprise, refonte partielle ou totale | mentions des droits et de la propriété               | pose la question contractuelle                             | chaîne de livraison, restauration et dette peu détaillées       | agence arbitre et réalise            |
| [Wwire — Reprise de projet](https://wwire.fr/expertise/reprise-projet)                                                                 | audit, stabilisation et continuité              | symptômes et documentation                           | relie technique et conséquences métier                     | pas de méthode autonome de sortie ni d'arbitrage complet        | propose la reprise progressive       |
| [ARDNTECH — Reprise de maintenance SaaS](https://ardn.tech/fr-fr/nos-services/reprise-maintenance-saas)                                | audit opérationnel spécialisé                   | Git, CI/CD, sécurité, RGPD, dette, plan              | livrables et priorités concrets                            | délais et récupérabilité propres à l'offre ; contrat limité     | spécialisation Symfony/SaaS          |
| [Adimeo — neuf étapes d'une reprise TMA](https://www.adimeo.com/blog/reprise-projet-tma)                                               | passation systémique puis TMA                   | rôles, accès, dette, gouvernance                     | prestataire sortant, entrant, hébergeur et métier couverts | très long, jargon, trajectoire TMA présupposée                  | correspond à l'offre TMA de l'agence |
| [Kalessi — Reprise de projet IT](https://www.kalessi.fr/reprise-de-projet)                                                             | audit, stabilisation, technologies et FAQ       | réponse commerciale concise                          | rassure sur reprise ou refonte                             | critères, réversibilité et preuves insuffisants                 | débouche sur la prestation           |

**Angle mort commun :** les listes demandent souvent le code et les accès, mais
prouvent rarement qu'une compilation, une livraison, une restauration et une
révocation des anciens accès fonctionnent réellement avant la signature d'une
maintenance. Elles expliquent peu qu'un code imparfait ne justifie pas à lui seul
une réécriture.

**Valeur originale :** cinq portes non compensables, un « test du lundi 8 h »,
un registre des inconnues et un plan de trente jours qui sépare sécurisation,
stabilisation et évolution.

## 5. Fiche de preuves

| Affirmation utilisable                                                                                                                                                                                                                                                                                             | Source primaire, URL et passage utile                                                                                                                                                                                                   | Nature                                       | Périmètre                                                                                                                                                                  | Date/consultation                                             | Confiance                                                                  | Conséquence lecteur                                                                                                                 | Fraîcheur                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- | -------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| Une cession doit mentionner distinctement les droits cédés et délimiter leur exploitation                                                                                                                                                                                                                          | Code de la propriété intellectuelle, art. L131-3, https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958                                                                                                                  | texte officiel français                      | règle générale de cession ; ne tranche ni le contrat particulier ni toutes les règles propres aux logiciels                                                                | version en vigueur consultée 20/07/2026                       | élevée pour le texte, faible pour conclure sans dossier                    | ne pas confondre livraison du dépôt et droits de faire modifier/exploiter ; faire examiner contrats et licences                     | vérifier version consolidée                             |
| Les droits patrimoniaux sur un logiciel créé par un salarié dans l'exercice de ses fonctions ou selon les instructions de l'employeur sont, sauf stipulations contraires, dévolus à l'employeur                                                                                                                    | Code de la propriété intellectuelle, art. L113-9, https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000039279818                                                                                                                  | texte officiel français                      | régime particulier des salariés ; aucune conclusion automatique sur un prestataire externe, un sous-traitant ou tous les contributeurs                                     | version en vigueur consultée 20/07/2026                       | élevée pour le texte, faible pour un dossier individuel                    | distinguer salariés, prestataires, sous-traitants et composants tiers avant de conclure sur les droits                              | vérifier version consolidée                             |
| Le droit d'exploitation d'un logiciel comprend notamment les actes de reproduction et d'adaptation visés par le texte, sous réserve des règles applicables                                                                                                                                                         | Code de la propriété intellectuelle, art. L122-6, https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278919                                                                                                                  | texte officiel français                      | droits relatifs au logiciel ; doit être lu avec le contrat, les exceptions et la chaîne de titulaires                                                                      | version en vigueur consultée 20/07/2026                       | élevée pour le texte, faible pour attribuer les droits dans un cas concret | ne pas réduire la reprise à la possession matérielle du dépôt ; faire vérifier droit de modification et licences                    | vérifier version consolidée                             |
| Au terme de certaines prestations de sous-traitance, le RGPD prévoit renvoi ou suppression des données personnelles et copies ; le sous-traitant doit fournir les informations et permettre les audits prévus à l'article 28 ; l'article 32 exige une sécurité adaptée au risque et une capacité de rétablissement | RGPD, articles 28.3.g–h et 32, texte consolidé EUR-Lex, https://eur-lex.europa.eu/eli/reg/2016/679/2016-05-04?locale=fr                                                                                                                 | règlement européen                           | données personnelles et relation responsable/sous-traitant ; ne transfère ni code, ni domaine, ni actifs non personnels                                                    | texte consulté 20/07/2026                                     | élevée dans ce périmètre                                                   | cartographier les données et contractualiser restitution, suppression, assistance, audit et continuité                              | vérifier texte consolidé                                |
| Le contrat d'un sous-traitant traitant des données personnelles doit notamment préciser responsabilités, authentification, restitution/destruction, incidents, assistance et revue des mesures ; les garanties doivent pouvoir être vérifiées                                                                      | CNIL, _Guide de la sécurité des données personnelles 2024_, fiches 14, p. 34–35, lignes web 1026–1079, https://www.cnil.fr/sites/default/files/2024-03/cnil_guide_securite_personnelle_2024.pdf                                         | guide officiel de l'autorité de contrôle     | traitement de données personnelles et sous-traitance au sens du RGPD                                                                                                       | édition 2024, consultée 20/07/2026                            | élevée dans ce périmètre                                                   | ne pas signer la reprise avant la répartition écrite et les conditions de sortie ; faire relire le contrat                          | revalider à chaque nouvelle édition                     |
| Les accès de télémaintenance doivent être ouverts pour une durée définie, refermés ensuite, encadrés et les interventions consignées                                                                                                                                                                               | même guide CNIL, fiche 15, p. 36–37, lignes web 1097–1144                                                                                                                                                                               | recommandation officielle de sécurité        | maintenance donnant accès à des données personnelles                                                                                                                       | édition 2024, consultée 20/07/2026                            | élevée pour le principe ; modalités à adapter au risque                    | créer des comptes nominatifs temporaires, tracer et retirer l'ancien prestataire après transfert                                    | revalider à chaque édition                              |
| Une sauvegarde doit être séparée, protégée, testée et réellement restaurable ; sa seule présence ne suffit pas                                                                                                                                                                                                     | CNIL, « Sécurité : Sauvegarder », lignes 173–194, https://www.cnil.fr/fr/securite-sauvegarder                                                                                                                                           | recommandation officielle                    | données personnelles ; utile comme socle de continuité plus large                                                                                                          | 14/03/2024, consultée 20/07/2026                              | élevée dans le périmètre                                                   | exiger un test de restauration isolé avant toute évolution risquée                                                                  | relecture annuelle                                      |
| Les droits doivent suivre le moindre privilège ; les permissions devenues inutiles doivent être supprimées et revues                                                                                                                                                                                               | CNIL, « Sécurité : Gérer les habilitations », lignes 174–198, https://www.cnil.fr/fr/securite-gerer-les-habilitations                                                                                                                   | recommandation officielle                    | accès aux traitements de données personnelles                                                                                                                              | 13/03/2024, consultée 20/07/2026                              | élevée dans le périmètre                                                   | inventorier propriétaires, administrateurs, comptes partagés et anciens intervenants                                                | relecture annuelle                                      |
| Un référentiel de maintenance sécurisée demande un plan de sauvegarde/restauration testé, la confidentialité/intégrité des sauvegardes et la journalisation des accès/actions                                                                                                                                      | ANSSI, référentiel PAMS v1.1, § IV.2.4–IV.2.5, https://cyber.gouv.fr/documents/389/ANSSI_PAMS_referentiel_v1.1_vFR.pdf                                                                                                                  | référentiel public d'exigences               | exigences portant sur le système utilisé pour fournir le service PAMS ; benchmark seulement, pas obligation universelle ni validation automatique de l'application cliente | v1.1 datée 06/10/2022, consultée 20/07/2026                   | élevée comme référentiel, portée limitée                                   | utiliser ces contrôles comme questions de vérification et non comme certification implicite du repreneur ou du logiciel             | vérifier version avant citation                         |
| Les contrats liés à l'administration d'un SI peuvent préciser confidentialité, sécurité, audit, responsabilité, continuité et réversibilité ; les accès des tiers doivent être encadrés                                                                                                                            | ANSSI, _Recommandations relatives à l'administration sécurisée des SI_, v3.0, chapitre 12, recommandation R60 et annexe B p. 69–70, https://messervices.cyber.gouv.fr/guides/recommandations-relatives-ladministration-securisee-des-si | guide public de sécurité                     | administration externalisée d'un système d'information                                                                                                                     | version consultée 20/07/2026                                  | élevée comme recommandation, pas comme avis juridique                      | faire apparaître la sortie, les accès et la continuité dans le contrat de reprise, avec conseil juridique si nécessaire             | vérifier version avant nouvelle publication             |
| En cas d'externalisation, le contrat peut prévoir réversibilité, audits, sauvegardes et restitution des données dans un format ouvert ; les comptes privilégiés et actifs doivent aussi rester cartographiés                                                                                                       | ANSSI, _Guide d'hygiène informatique_, règles 10, 16, 38 et 39, https://messervices.cyber.gouv.fr/documents-guides/guide_hygiene_informatique_anssi.pdf                                                                                 | recommandations officielles                  | socle général d'hygiène publié en 2017 ; pas une obligation universelle ni un modèle de contrat                                                                            | guide consulté 20/07/2026                                     | élevée comme principe, fraîcheur moyenne                                   | inscrire les actifs, comptes et modalités de sortie dans le coffre de reprise, puis adapter le contrat avec les conseils compétents | rechercher une version plus récente avant republication |
| Une stratégie de sauvegarde doit définir perte admissible et interruption admissible, protéger une copie hors ligne, tester la restauration, tenir compte de l'ordre des dépendances et conserver configurations/procédures nécessaires                                                                            | ANSSI, _Sauvegarde des systèmes d'information_ v1.1, https://messervices.cyber.gouv.fr/documents-guides/anssi_fondamentaux_sauvegarde_systemes_dinformation_v1.1.pdf                                                                    | recommandations officielles                  | système d'information ; mesures à adapter à l'activité                                                                                                                     | version 1.1 du 27/11/2025, consultée 20/07/2026               | élevée comme guide                                                         | exiger une restauration isolée documentée, pas un simple voyant vert ; ne pas confondre réplication, sauvegarde et plan de reprise  | revalider à chaque version                              |
| Les pratiques de développement sécurisé incluent protection du dépôt et de sa configuration, conservation des versions et documentation, inventaire/provenance des composants et plan pour les dépendances abandonnées ; le SSDF sert aussi de vocabulaire entre acheteurs et fournisseurs                         | NIST SP 800-218 SSDF 1.1, https://csrc.nist.gov/pubs/sp/800/218/final                                                                                                                                                                   | standard public de recommandations           | développement logiciel, non spécifique au droit français ni à la reprise                                                                                                   | publié 02/2022, consulté 20/07/2026                           | élevée pour le cadre                                                       | tester clonage, construction, versions, dépendances, provenance et fin de support sans prétendre certifier le produit               | suivre les mises à jour du NIST                         |
| Les secrets doivent avoir propriétaire, consommateur, finalité, droits, journal, rotation/révocation et procédure documentée                                                                                                                                                                                       | OWASP, _Secrets Management Cheat Sheet_, https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html                                                                                                             | guide technique communautaire officiel OWASP | secrets applicatifs et d'infrastructure ; non normatif                                                                                                                     | page vivante consultée 20/07/2026                             | élevée comme pratique, aucune obligation universelle de fréquence          | inventorier clés API, certificats, comptes de service et secrets de livraison, puis les révoquer ou renouveler selon le risque      | revalider avant citation                                |
| OWASP ASVS fournit une base de vérification des contrôles techniques et peut servir à formuler des exigences de sécurité dans un contrat                                                                                                                                                                           | OWASP ASVS 5.0, lignes 32–63, https://owasp.org/www-project-application-security-verification-standard/                                                                                                                                 | standard ouvert d'une fondation technique    | applications web ; périmètre à choisir selon le risque                                                                                                                     | version stable 5.0.0 publiée 30/05/2025, consultée 20/07/2026 | élevée pour le cadre technique, aucune certification automatique           | demander quelles exigences et quels tests sont couverts, avec version explicite                                                     | revalider à chaque version majeure                      |

### Contradictions et données à ne pas publier

- aucun pourcentage de « code généralement récupérable » sans base primaire ;
- aucun délai universel d'audit, de reprise ou de réécriture ;
- aucun coût moyen extrapolé depuis les forfaits commerciaux du site ;
- aucune affirmation de propriété intellectuelle sans lire le contrat et sans
  conseil juridique adapté ;
- aucun label « sécurisé » tiré d'un simple scan automatisé ;
- aucune promesse de zéro interruption ou de correction de toute la dette avant
  la reprise ;
- aucun « 70 % des reprises échouent » ou autre statistique générique sans
  étude primaire pertinente ;
- aucune équivalence entre dépôt livré et droits de modification, entre voyant
  de sauvegarde et restauration réussie, entre réplication et plan de reprise,
  ou entre export CSV et données complètes réimportables ;
- aucune règle universelle du type audit en trois, cinq ou dix jours, rotation
  de tous les secrets tous les 90 jours, hébergement obligatoirement dans
  l'Union européenne ou notification de tout incident sous 72 heures ;
- aucune conclusion « zéro vulnérabilité = logiciel sécurisé », ni
  certification implicite tirée de l'usage d'OWASP, du NIST ou de l'ANSSI.

### Calculs reproductibles

Pas de prix ni de ROI dans ce guide. Un exemple fictif pourra compter les cinq
portes et les preuves manquantes, mais **un total ne devra jamais compenser une
porte critique rouge** : l'absence de sauvegarde restaurable, d'accès production
ou de base légale/contractuelle ne vaut pas quelques points de documentation.

## 6. Empreinte éditoriale à ne pas reproduire

| Guide                                   | Type d'ouverture                 | Progression                                   | Dispositif récurrent             | Exemple/fil rouge  | Place du CTA        | Type de conclusion      |
| --------------------------------------- | -------------------------------- | --------------------------------------------- | -------------------------------- | ------------------ | ------------------- | ----------------------- |
| `calculer-roi-application-metier`       | contre-calcul chiffré            | cinq pièces → scénarios → comparaison → suivi | formules et tableaux économiques | atelier fictif     | après gouvernance   | quatre verdicts         |
| `automatiser-processus-metier`          | choix du processus avant l'outil | observation → classement → options → pilote   | matrice gain/risque/stabilité    | cinq processus     | avant plan autonome | phrase de décision      |
| `transformer-excel-en-application`      | garder ou remplacer              | diagnostic → options → migration              | score et paliers                 | classeur critique  | après plan          | décision de bascule     |
| `cahier-des-charges-application-metier` | préparation du besoin            | rôles → fonctions → contraintes → recette     | document à produire              | application future | vers la fin         | dossier de consultation |

```text
Tension motrice : le code est disponible, mais personne n'a encore prouvé que l'entreprise maîtrise son système
Ouverture : le « test du lundi 8 h » — l'ancienne équipe ne répond plus et une livraison doit partir
Progression : arrêter les gestes risqués → cinq portes → preuves exécutées → quatre stratégies → plan de trente jours
Artefact signature : coffre de reprise + matrice vert/ambre/rouge non compensable
Rythme/voix : directeur de crise calme, phrases décisionnelles, aucune glorification de la réécriture
Place du CTA : après le périmètre d'un audit honnête et les motifs de refus
Conclusion : reprendre, reprendre sous conditions, migrer par lots ou reporter
Différences : pas de score global ; ouverture opérationnelle ; preuves exécutées plutôt que documents déclaratifs ; chronologie des trente premiers jours
```

## 7. Plan annoté

| Section provisoire | Question résolue                            | Preuve ou exemple                                                | Conséquence/décision                  | Format choisi        |
| ------------------ | ------------------------------------------- | ---------------------------------------------------------------- | ------------------------------------- | -------------------- |
| Test du lundi 8 h  | que doit savoir faire la nouvelle équipe ?  | observer, livrer, restaurer, révoquer                            | identifier le vrai périmètre          | scène opérationnelle |
| Avant de toucher   | comment ne pas aggraver la situation ?      | gel, copie, responsables, fenêtre                                | aucune modification irréversible      | protocole 0–48 h     |
| Cinq portes        | quelles conditions ne se compensent pas ?   | accès, production, données, code, contrat                        | vert/ambre/rouge par porte            | matrice              |
| Coffre de reprise  | quels actifs récupérer ?                    | comptes propriétaires, dépôts, secrets, procédures, fournisseurs | liste avec preuve d'ouverture         | checklist            |
| Prouver la chaîne  | les documents sont-ils exploitables ?       | build propre, livraison, restauration, alerte                    | accepter ou limiter la responsabilité | quatre tests         |
| Dette utile        | que corriger avant d'évoluer ?              | impact métier, probabilité, détectabilité, contournement         | priorités P0–P3                       | registre             |
| Quatre stratégies  | maintenir, stabiliser, migrer ou réécrire ? | critères et coûts inconnus                                       | choisir sans réflexe technologique    | tableau comparatif   |
| Contrat            | que faire écrire ?                          | périmètre, accès, données, incidents, sortie                     | consultation juridique si besoin      | clauses à clarifier  |
| Trente jours       | comment reprendre sans tout promettre ?     | étapes et livrables                                              | point de décision hebdomadaire        | chronologie          |
| CTA                | quand un audit externe est-il adapté ?      | bons et mauvais cas                                              | contacter ou agir seul                | bloc unique          |
| Sources            | quelles limites restent ?                   | primaires et périmètres                                          | ne pas surinterpréter                 | notes contextuelles  |

## 8. Ressource et conversion

```text
Une ressource est-elle naturellement nécessaire ? non dans cette version
Problème après lecture : le coffre et la matrice visibles sont directement copiables ; un fichier séparé créerait une maintenance supplémentaire
Résultat autonome produit : inventaire de reprise, preuves à exécuter, registre d'inconnues et plan de trente jours
Format : contenu HTML copiable ; aucune promesse de téléchargement
Rubriques : accès, production, données, code, contrat, dette, décisions, suivi
Exemple rempli : application de planification fictive, sans client ni métrique inventés
Conclusion ne pas investir : oui, report ou maintien sous confinement si une porte critique reste rouge
Sources, hypothèses et limites : visibles
Données saisies : aucune
Processus de génération : sans objet
Journal de QA : page, liens, données structurées, navigateur et build
Limites : aucune revue juridique, certification de sécurité ou validation humaine réelle
Maintenance : revalider CNIL, ANSSI, NIST et OWASP après évolution substantielle
Test du fichier : sans objet
Cas adapté Hagnéré Code : application en production, responsable métier, accès récupérables et besoin de continuité ou de feuille de route
Cas inadapté : incident cyber actif, litige de propriété non tranché, refus d'accès, périmètre réglementé exigeant un prestataire qualifié non couvert
Action non commerciale : nommer un propriétaire interne, figer les accès, remplir les cinq portes et tester une restauration
CTA : `/demarrer-un-projet`, pour décrire l'application, les processus critiques, les incidents et les accès déjà disponibles ; le lecteur obtient un cadrage du périmètre vérifiable, des limites et des livrables, sans acceptation automatique de maintenance
Conflit d'intérêt : Hagnéré Code vend audits, TMA et développement ; la méthode doit pouvoir conclure à une stabilisation limitée, une migration, une réécriture différée, au maintien avec l'équipe actuelle ou à un refus de reprise
```

## 9. Revue finale

### Scorecard justifiée

| Axe         | Note 0-2 | Preuve dans la page                                                                     | Correction éventuelle                  |
| ----------- | -------: | --------------------------------------------------------------------------------------- | -------------------------------------- |
| Intention   |        2 | urgence précise de changement d'équipe et requête couverte dès l'ouverture              | aucune                                 |
| Décision    |        2 | cinq verdicts observables, dont stabilisation, report et refus                          | aucune                                 |
| Pédagogie   |        2 | jargon défini ou remplacé ; fausses équivalences expliquées                             | build, rollback, CVE et ASVS corrigés  |
| Profondeur  |        2 | actifs, livraison, données, exploitation, dette, droits, audit et trente jours          | aucune                                 |
| Preuve      |        2 | sources primaires contextualisées et huit tests exécutables                             | liens directs L113-9 et L122-6 ajoutés |
| Comparaison |        2 | quatre trajectoires et grille de comparaison de deux audits                             | aucune                                 |
| Originalité |        2 | test du lundi 8 h, cinq portes non compensables et coffre de reprise                    | aucune                                 |
| Style       |        2 | voix de direction calme, cas fictif identifié, aucune réécriture glorifiée              | chronologie clarifiée                  |
| Conversion  |        2 | CTA spécifique après les critères d'un audit honnête ; conflit d'intérêt visible        | aucune                                 |
| SEO/produit |        2 | title 55 caractères, meta 142, registre, canonical, Article et BreadcrumbList cohérents | temps de lecture ramené à 20 min       |

**Total : 20/20 au contre-audit éditorial indépendant.** Cette note ne vaut ni
validation humaine, ni certification technique ou juridique.

### Test lecteur non technique

```text
Test réalisé par une personne réelle : non
Profil : non disponible
Compréhension, décision, survol, crédibilité et blocages : non testés
Corrections : aucune validation humaine inventée
Décision de publication : autorisée explicitement par le commanditaire sur la base du contre-audit indépendant ; cela ne constitue pas un test lecteur
```

### Contre-audit indépendant

```text
Auteur : agent `/root/reprise_final_audit`, distinct de l'auteur de la page
Indépendant : oui dans le processus multi-agent ; aucune personne humaine
Réserves initiales : jargon build/rollback/CVE/ASVS, chevauchement de la chronologie et description du hero ambiguë
Corrections : termes expliqués ou remplacés, ASVS lié et défini, période renommée « fin de semaine 1 », objets du hero explicités
Second passage : 20/20, aucune réserve éditoriale bloquante
Statut maximal : publiable après autorisation éditoriale déléguée du commanditaire
```

### Vérifications

- [x] faits, citations et fraîcheur revérifiés ; les URL Légifrance refusent
      l'automate HTTP avec un code 403, mais les références officielles et leurs
      périmètres ont été contrôlés pendant la recherche ;
- [x] aucun chiffre de performance ou cas réel inventé ; la chronologie est
      explicitement adaptable et l'unique cas est étiqueté « Exemple illustratif
      fictif » ;
- [x] CTA disponible vers `/demarrer-un-projet` et aucune ressource fantôme ;
- [x] metadata, données structurées, registre, maillage et ancres cohérents ;
      FAQ visible, sans schéma JSON-LD `FAQPage` ;
- [x] Prettier, ESLint ciblé et TypeScript passés ; le contrôle final exécute
      86 tests SEO, génère 98 pages, puis valide le postbuild SEO global ;
- [x] métriques responsive contrôlées à 320, 360, 390, 430, 640, 768, 1024,
      1280, 1440 et 1600 px : H1 et CTA contenus, tableaux défilables, sans perte de
      contenu ; une capture visuelle finale n'a pas pu être obtenue après le blocage
      de sécurité du navigateur ;
- [x] porte éditoriale levée ; l'URL publique et l'indexation effective restent
      deux états distincts à vérifier après déploiement.
