# Dossier de recherche — Sécurité d’une application métier

> Passe P1 du 30 juillet 2026. Ce dossier fixe le contrat éditorial, les
> frontières, les sources et l’oracle de l’outil avant l’écriture de la page.
> Il ne constitue ni un audit de sécurité, ni une certification, ni un avis
> juridique individualisé.

## A. Identité

| Champ                       | Valeur                                                                                                                                                           |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Slug                        | `securite-application-metier`                                                                                                                                    |
| Roadmap                     | Guide n° 23 · section A « Applications métier & outils internes »                                                                                                |
| Priorité                    | P1                                                                                                                                                               |
| Intention principale        | Fixer un socle de sécurité proportionné                                                                                                                          |
| Sortie attendue             | Menaces, sauvegardes, journalisation et responsabilités                                                                                                          |
| Lecteur                     | Dirigeante, dirigeant, responsable métier ou chef de projet non spécialiste qui prépare la mise en service d’une application métier                              |
| Situation déclenchante      | L’application va manipuler de vraies données ou devenir utile à l’activité, mais « elle est sécurisée » n’est encore étayé par aucun contrôle observable         |
| Décision                    | Autoriser une revue de mise en service, demander des preuves ou des tests, limiter le pilote, reporter, simplifier ou transmettre le point au spécialiste adapté |
| Route service principale    | `/services/audit-technique`                                                                                                                                      |
| Route commerciale tardive   | `/demarrer-un-projet`                                                                                                                                            |
| CTA                         | « Faire auditer le socle technique » ; le clic ouvre une page de service puis, seulement en fin de guide, le parcours de description du projet                   |
| Date réelle de recherche P1 | 30 juillet 2026                                                                                                                                                  |
| Agent P1                    | `/root/securite_p1_creation`                                                                                                                                     |
| Statut maximal à ce stade   | Brouillon local P1 ; non committé, non poussé, non déployé, non publié et non indexé                                                                             |

### Phrase téléphone

> « On me dit que l’application est sécurisée. Avant d’y mettre nos vraies
> données, quelles preuves dois-je demander sur les incidents, la restauration,
> les journaux et les responsables ? »

### Réponse en une phrase

Ne cherchez pas une promesse absolue : décrivez les conséquences redoutées,
attribuez un responsable à chaque contrôle, puis exigez des traces et des tests
sur la prévention, la détection, la reprise et la réponse ; si un point critique
reste inconnu, la mise en service avec de vraies données doit être reportée ou
limitée.

### Frontières

- Le guide ne promet jamais qu’une application est « sûre », « conforme »,
  « inviolable » ou « certifiée ».
- Il ne transforme ni OWASP ASVS, ni OWASP Top 10, ni NIST CSF en certificat.
- Il ne donne pas un niveau de risque automatique et ne calcule aucun score
  global. Une inconnue ou un blocage critique ne se compense pas.
- Il ne remplace pas une analyse de risques, un test d’intrusion, un audit de
  code, une analyse RGPD, un DPO, un RSSI, un avocat ou une expertise sectorielle.
- L’article 32 du RGPD n’est invoqué que lorsque des données personnelles sont
  traitées. Les recommandations CNIL restent contextualisées à ce périmètre.
- Les objectifs de perte de données et de reprise sont décidés par le métier.
  Le guide n’invente ni RPO/PDMA, ni RTO/DMIA universel.
- La durée de conservation de six mois à un an recommandée par la CNIL vise
  les données de journalisation destinées à sécuriser un traitement de données
  personnelles, avec des adaptations selon la finalité, le contrôle interne,
  une obligation ou un besoin documenté. Elle ne vaut pas pour tout journal.
- Le guide ne détaille pas la matrice des habilitations du guide n° 24.
- Il ne construit pas le dossier de preuves destiné à vendre un SaaS à un grand
  compte : cette intention appartient à `securite-saas-b2b`.
- Il ne propose aucun téléchargement XLS, XLSX ou CSV.

## B. Contrat de réponse

### Les cinq questions que le lecteur doit pouvoir trancher

1. Quelles conséquences concrètes faut-il empêcher ou réduire : divulgation,
   modification, indisponibilité, fraude, erreur irréversible ou perte de
   traçabilité ?
2. Qui est responsable de décider, d’exploiter, d’alerter, de restaurer, de
   corriger et d’informer ?
3. Quelles preuves montrent que les mesures prévues existent réellement et
   fonctionnent dans le contexte de cette application ?
4. Jusqu’à quel point l’activité peut-elle perdre des données ou rester
   interrompue, et un exercice de restauration a-t-il confirmé ce qui est
   promis ?
5. Quels événements sont journalisés, qui reçoit une alerte exploitable et que
   se passe-t-il après la détection ?

### Progression de décision

1. **Qualifier les conséquences.** Partir du métier, des données, des
   utilisateurs, des accès externes et des dépendances, pas d’un catalogue
   technique.
2. **Prévenir.** Faire relire l’architecture, minimiser les données, isoler les
   environnements, gérer les secrets, tester les composants et limiter les
   accès.
3. **Détecter.** Choisir les événements utiles, protéger les journaux, définir
   une alerte et nommer la personne qui la traite.
4. **Reprendre.** Déduire les objectifs de reprise du besoin métier, protéger
   les sauvegardes et démontrer une restauration.
5. **Répondre.** Préparer les contacts, les décisions, l’isolement, la
   conservation des éléments utiles et la communication.
6. **Décider.** Revue possible, preuve écrite à obtenir, test à exécuter,
   pilote à limiter, mise en service à reporter ou spécialiste à saisir.

### Objections à traiter

- « Nous sommes trop petits pour être visés » : l’erreur, la panne, le vol
  d’accès et la mauvaise manipulation ne dépendent pas de la taille.
- « Le cloud sauvegarde tout » : une offre d’hébergement ne prouve ni le
  périmètre sauvegardé, ni l’isolement, ni la capacité à restaurer l’application
  dans l’ordre utile au métier.
- « Nous avons des logs » : un fichier jamais consulté, sans horodatage
  fiable, protection, alerte ou responsable ne constitue pas une capacité de
  détection.
- « Le prestataire gère la sécurité » : l’exploitation peut être déléguée,
  mais les décisions métier, les responsabilités et les preuves doivent rester
  attribuées.
- « L’outil a passé le Top 10 OWASP » : le Top 10 sensibilise à des catégories
  de risques ; il n’atteste pas l’ensemble des contrôles d’une application.
- « Nous ajouterons la sécurité après le pilote » : un pilote contenant des
  données réelles ou devenant indispensable est déjà une mise en service à
  protéger.
- « Une sauvegarde quotidienne suffit » : sa fréquence n’est pertinente
  qu’au regard de la perte de données acceptable, et une copie non restaurée
  ne prouve pas la capacité de reprise.

### Cas où ne pas développer ou ne pas mettre en service

- un outil standard couvre le besoin et l’organisation ne peut pas assumer les
  responsabilités d’exploitation d’un logiciel spécifique ;
- personne n’est propriétaire de l’application, des données, des alertes ou de
  la restauration ;
- les conséquences d’une indisponibilité ou d’une altération ne sont pas
  comprises ;
- une dépendance essentielle est abandonnée ou sans responsable de mise à jour ;
- une restauration critique n’a jamais été exercée ;
- des données personnelles, sensibles ou sectorielles seraient chargées alors
  que les rôles et obligations ne sont pas qualifiés ;
- une vulnérabilité critique connue ou un incident actif reste sans traitement.

### Action autonome sans contact commercial

1. inventorier les conséquences redoutées sur une page ;
2. nommer un responsable métier, un responsable applicatif et les personnes
   chargées des alertes, corrections et restaurations ;
3. demander une preuve précise pour chacun des huit contrôles de l’outil ;
4. exécuter une restauration isolée et un scénario d’alerte ;
5. consigner ce qui est écrit, exercé, inconnu ou bloquant ;
6. tenir la revue sans conclure « sécurisé » ou « conforme ».

## C. Corpus interne et frontières éditoriales

### Routes de service

| Route                       | Rôle réel                                                                                         | Usage                                                                         |
| --------------------------- | ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `/services/audit-technique` | Revue technique destinée à documenter une décision, ses faits, hypothèses, priorités et livrables | CTA principal, après que le lecteur a compris ce qu’il doit faire vérifier    |
| `/demarrer-un-projet`       | Parcours permettant de décrire un contexte avant une réponse humaine                              | CTA commercial tardif, sans promesse de délai ou de devis automatique         |
| `/services/securite-rgpd`   | Intervention de sécurité ou de conformité sur un périmètre particulier                            | Contexte voisin seulement ; ne pas transformer le guide en page réglementaire |

### Guides voisins

| Slug                                     | Intention détenue                                                                              | Frontière du guide n° 23                                                                                                              |
| ---------------------------------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `securite-saas-b2b`                      | Constituer les preuves et réponses attendues par un acheteur grand compte avant une vente SaaS | Ici, décider comment concevoir et exploiter l’application métier elle-même ; aucun questionnaire commercial, aucune promesse de vente |
| `choisir-prestataire-application-metier` | Comparer les candidats, leurs preuves, leurs coûts et leur sortie                              | Ici, évaluer le socle de sécurité de l’application, quel que soit le prestataire                                                      |
| `plan-recette-application-metier`        | Définir des cas rejouables et accepter fonctionnellement une livraison                         | Ici, tester restauration, journalisation et réponse ; la recette générale reste distincte                                             |
| `reprendre-logiciel-metier-existant`     | Vérifier qu’une nouvelle équipe peut comprendre, déployer et restaurer un existant             | Ici, préparer la sécurité de la mise en service courante                                                                              |
| guide n° 24 sur les habilitations        | Détailler rôles, droits, séparation et revue des accès                                         | Ici, vérifier seulement qu’un responsable et une exigence d’accès existent                                                            |

### Handoff partagé requis

Entrée proposée pour `src/lib/guides.ts`, à ajouter uniquement par
l’orchestrateur dans sa fenêtre d’intégration :

```ts
{
  slug: "securite-application-metier",
  title: "Sécurité d’une application métier avant sa mise en service",
  cardTitle: "Sécurité d’une application métier",
  metaDescription:
    "Menaces, sauvegardes testées, journaux, alertes et responsables : fixez des exigences proportionnées avant la mise en service.",
  cardDescription:
    "Une méthode sans score pour obtenir des preuves, tester la restauration, attribuer les alertes et décider de la mise en service.",
  heroTitle:
    "Quel socle de sécurité exiger pour une application métier ?",
  section: "Préparer son projet",
  datePublished: "<instant réel de première publication>",
  dateModified: "<même instant tant qu’aucune publication antérieure n’existe>",
  readTimeMin: "<mesure réelle sur le HTML servi>",
  articleImagePaths: [
    "/guides/securite-application-metier/socle-securite-16x9.webp",
    "/guides/securite-application-metier/socle-securite-4x3.webp",
    "/guides/securite-application-metier/socle-securite-1x1.webp",
  ],
  editorialStatus: "ready-for-human-review",
}
```

Les dates et le temps de lecture restent volontairement inconnus en P1.

Icône exacte à ajouter dans la table `GUIDE_ICONS` de
`src/components/guides/GuidesHubPage.tsx` :

```ts
"securite-application-metier": ShieldCheck,
```

Lien entrant exact à ajouter dans le scénario « Application métier » de
`src/components/outils-internes/sections/scenarios.ts` :

```text
<a href="/guides/securite-application-metier">Avant la mise en service, vérifiez que le socle de sécurité est prouvé et testé.</a>
```

Le libellé visible exact est : « Avant la mise en service, vérifiez que le
socle de sécurité est prouvé et testé. »

### Liens internes retenus

- `/guides/choisir-prestataire-application-metier` pour faire porter les preuves
  par le candidat choisi ;
- `/guides/plan-recette-application-metier` pour distinguer recette
  fonctionnelle et exercices de sécurité ;
- `/guides/reprendre-logiciel-metier-existant` pour un logiciel déjà en
  production ;
- `/services/audit-technique` pour faire examiner un socle concret ;
- `/demarrer-un-projet` seulement en fin de parcours.

## D. Recherche externe contradictoire

### Hiérarchie et prudence

1. Le texte juridique s’applique dans son périmètre propre.
2. Les autorités publiques expliquent des obligations ou recommandent des
   mesures à contextualiser.
3. Les référentiels volontaires structurent les contrôles, mais ne prouvent
   aucune conformité à eux seuls.
4. Le guide traduit ces sources en questions de décision. Il n’invente pas de
   seuil universel.

### Matrice des affirmations sensibles

| Affirmation visible envisagée                                                                                           | Source primaire                                                         | Portée retenue                                                                                                                                | Formulation interdite                                       |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| La sécurité doit être proportionnée au risque lorsque l’application traite des données personnelles                     | RGPD, article 32                                                        | Responsable de traitement et sous-traitant ; état de l’art, coûts, nature, portée, contexte, finalités et risques pour les droits et libertés | « Toute application doit être conforme à cette checklist »  |
| La disponibilité, la résilience, la restauration et l’évaluation régulière peuvent faire partie des mesures appropriées | RGPD, article 32 §1 b-d                                                 | Seulement dans le périmètre des traitements de données personnelles, selon le risque                                                          | « Le RGPD impose telle fréquence de sauvegarde »            |
| Sécurité et protection des données doivent entrer dès la conception                                                     | CNIL, fiche « Encadrer les développements informatiques », 14 mars 2024 | Développements traitant des données personnelles ; choix d’architecture, minimisation, tests, séparation des environnements                   | « La CNIL certifie cette architecture »                     |
| Les sauvegardes doivent être protégées et la restauration exercée                                                       | ANSSI, ANSSI-BP-100 v1.1 ; CNIL, fiche « Sauvegarder »                  | Bonnes pratiques à adapter ; exigences métier préalables                                                                                      | « 3-2-1 est une loi » ou « une copie quotidienne suffit »   |
| PDMA/RPO et DMIA/RTO proviennent du besoin métier                                                                       | ANSSI-BP-100 v1.1                                                       | Valeurs à décider selon les conséquences et dépendances ; réplication parfois nécessaire si perte acceptable très faible                      | « RPO = 24 h pour tout le monde »                           |
| Les actions de restauration doivent être ordonnées selon dépendances et criticité                                       | ANSSI-BP-100 v1.1, recommandations R22-R24                              | Procédure documentée, testée, isolation possible en incident                                                                                  | « Restaurer la base suffit à relancer le service »          |
| Les applications métier doivent prévoir la journalisation dès les spécifications                                        | ANSSI, architecture de journalisation v2.0, 28 janvier 2022             | Événements de sécurité et métier utiles, formats exploitables, données minimisées                                                             | « Tout journaliser sans limite »                            |
| Les traces servent à détecter et à comprendre un incident                                                               | ANSSI v2.0 ; CNIL, fiche « Tracer les opérations », 14 mars 2024        | Collecte, protection et analyse active ; alerte et responsable nécessaires                                                                    | « Posséder des logs prouve que l’on détectera une attaque » |
| Six mois à un an est une recommandation CNIL pour certaines données de journalisation                                   | CNIL, délibération n° 2021-122 et fiche « Tracer les opérations »       | Journalisation destinée à sécuriser un traitement de données personnelles ; adaptations selon finalité, contrôle et besoin                    | « Tous les logs doivent être gardés un an »                 |
| OWASP ASVS fournit une base de vérification des contrôles techniques                                                    | OWASP ASVS 5.0.0, 30 mai 2025                                           | Référentiel volontaire ; exigences à sélectionner et référencer avec la version                                                               | « ASVS certifie l’application »                             |
| Le NIST CSF 2.0 offre une vue d’ensemble Gouverner-Identifier-Protéger-Détecter-Répondre-Récupérer                      | NIST CSWP 29, 26 février 2024                                           | Cadre flexible et non prescriptif, sans ordre ni checklist universelle                                                                        | « Le niveau CSF garantit la sécurité »                      |

### Sources primaires retenues

1. **Règlement (UE) 2016/679, article 32 — Sécurité du traitement.** Texte
   consolidé officiel consulté le 30 juillet 2026 :
   <https://eur-lex.europa.eu/eli/reg/2016/679/art_32/oj/fra>
2. **CNIL — Guide de la sécurité des données personnelles, version 2024,
   mise à jour 2026.** Page et PDF courants consultés le 30 juillet 2026 :
   <https://www.cnil.fr/fr/guide-de-la-securite-des-donnees-personnelles> et
   <https://www.cnil.fr/sites/default/files/2026-05/cnil_guide_securite_personnelle.pdf>
3. **CNIL — Sécurité des données : les règles essentielles pour protéger les
   données et votre activité**, fiche mise à jour le 19 juin 2026 :
   <https://www.cnil.fr/fr/securite-des-donnees-les-regles-essentielles>
4. **CNIL — Encadrer les développements informatiques**, 14 mars 2024 :
   <https://www.cnil.fr/fr/securite-encadrer-les-developpements-informatiques>
5. **CNIL — Sauvegarder**, 14 mars 2024 :
   <https://www.cnil.fr/fr/securite-sauvegarder>
6. **CNIL — Tracer les opérations**, 14 mars 2024 :
   <https://www.cnil.fr/fr/securite-tracer-les-operations>
7. **CNIL — Délibération n° 2021-122 du 14 octobre 2021 portant adoption
   d’une recommandation relative à la journalisation**, PDF officiel de la
   CNIL :
   <https://www.cnil.fr/sites/cnil/files/atoms/files/recommandation_-_journalisation.pdf>
8. **ANSSI — Sauvegarde des systèmes d’information : les fondamentaux**,
   ANSSI-BP-100, version 1.1 du 27 novembre 2025 :
   <https://messervices.cyber.gouv.fr/documents-guides/anssi_fondamentaux_sauvegarde_systemes_dinformation_v1.1.pdf>
9. **ANSSI — Recommandations de sécurité pour l’architecture d’un système de
   journalisation**, version 2.0 du 28 janvier 2022 ; page canonique et PDF
   courant consultés le 30 juillet 2026 :
   <https://messervices.cyber.gouv.fr/guides/recommandations-de-securite-pour-larchitecture-dun-systeme-de-journalisation> et
   <https://messervices.cyber.gouv.fr/documents-guides/anssi-guide-recommandations_securite_architecture_systeme_journalisation.pdf>
10. **OWASP — Application Security Verification Standard 5.0.0**, publié le
    30 mai 2025 :
    <https://owasp.org/www-project-application-security-verification-standard/>
11. **NIST — Cybersecurity Framework 2.0**, CSWP 29, 26 février 2024 :
    <https://www.nist.gov/publications/nist-cybersecurity-framework-csf-20>

### Ce que les sources ne permettent pas d’affirmer

- qu’un nombre de contrôles suffit pour toute application ;
- qu’une technologie, un hébergeur ou une certification supprime le risque ;
- qu’un exercice passé garantit une prochaine restauration ;
- qu’une durée de conservation des journaux convient à tous les événements ;
- qu’un résultat de l’outil équivaut à un audit ;
- qu’une sauvegarde présente chez le même prestataire est automatiquement
  isolée d’un incident ;
- qu’un chiffrement, une MFA ou un test d’intrusion isolé couvre toute la
  chaîne ;
- que « conforme OWASP », « conforme NIST » ou « conforme ANSSI » est un
  verdict que cette page peut produire.

### Désaccords et arbitrages

- **3-2-1.** L’ANSSI recommande et la CNIL conseille trois copies sur deux
  supports, dont une hors ligne. Elles ne le présentent pas comme une règle
  légale universelle. Le visible dit « repère utile à adapter ».
- **Durée des journaux.** La recommandation CNIL de six mois à un an reste
  attachée aux données de journalisation qui sécurisent un traitement de
  données personnelles. Le guide demande une durée justifiée et n’applique pas
  ce nombre à tous les journaux techniques.
- **MFA.** La force de l’authentification dépend du risque. Le guide demande une
  mesure adaptée et un test ; il ne décrète pas une solution unique.
- **Top 10 OWASP.** C’est un support de sensibilisation. ASVS est plus approprié
  pour formuler des exigences vérifiables ; aucun des deux ne devient un
  certificat.
- **Sauvegarde contre continuité.** Une sauvegarde répond à la perte de données ;
  elle ne garantit pas seule un redémarrage dans le délai attendu. Les
  dépendances, accès, secrets, configuration et ordre de reprise doivent être
  examinés.

## E. Architecture éditoriale de la page

### Titre et promesse

- H1 : **Quel socle de sécurité exiger pour une application métier ?**
- Sous-promesse : décider avant les vraies données, à partir de preuves et de
  tests, sans score ni promesse absolue.
- OG : **Menaces, restauration, détection et responsables**

### Sommaire

1. La réponse courte
2. Partir des conséquences métier
3. Construire quatre capacités
4. Prouver la restauration
5. Transformer les journaux en détection
6. Attribuer les responsabilités
7. Préparer la revue avec l’outil
8. Décider, limiter ou reporter
9. Cas fictif
10. Questions fréquentes et sources

### Quatre capacités, sans score

| Capacité  | Question de direction                                                                             | Exemple de preuve                                             | Mauvais raccourci              |
| --------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------ |
| Prévenir  | Qu’est-ce qui réduit la probabilité ou l’impact d’un accès, d’une erreur ou d’une vulnérabilité ? | exigence versionnée, revue, test et responsable de correction | « le framework est sécurisé »  |
| Détecter  | Quel événement produit quelle alerte, pour qui et dans quel délai opérationnel ?                  | scénario déclenché et alerte reçue par la personne nommée     | « nous avons des logs »        |
| Reprendre | Que restaure-t-on, dans quel ordre, avec quelle perte et quelle interruption acceptables ?        | compte rendu d’un exercice isolé avec limites                 | « le cloud sauvegarde »        |
| Répondre  | Qui décide, isole, conserve les éléments utiles, corrige et informe ?                             | fiche incident testée et contacts actuels                     | « le prestataire s’en occupe » |

### Menaces à traduire en conséquences

- accès non autorisé à des informations ou fonctions ;
- modification volontaire ou accidentelle d’une règle, d’un montant ou d’un
  état ;
- indisponibilité de l’application, de l’identité, d’une API, d’une base ou
  d’un prestataire ;
- suppression, corruption ou restauration incomplète ;
- vulnérabilité d’un composant ou secret exposé ;
- erreur d’administration non détectée ;
- compte compromis utilisé sans alerte ;
- absence de preuve exploitable pendant un incident.

Le guide n’affecte ni probabilité numérique, ni gravité automatique. Le lecteur
décrit les conséquences puis fait qualifier la vraisemblance par les personnes
compétentes.

### Responsabilités minimales à nommer

| Rôle                                 | Décision ou action                                                                   | Preuve attendue                             |
| ------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------- |
| Propriétaire métier                  | fixe les conséquences acceptables, le mode dégradé et la décision de mise en service | décision datée et hypothèses                |
| Responsable applicatif               | tient les dépendances, les changements et les contacts                               | registre et procédure à jour                |
| Responsable technique ou prestataire | met en œuvre, teste, corrige et documente                                            | résultats de tests et limites               |
| Responsable des alertes              | reçoit, qualifie puis alerte le niveau responsable                                   | test d’alerte et suppléance                 |
| Responsable de restauration          | déclenche et dirige l’exercice                                                       | compte rendu de restauration                |
| DPO/RSSI/juriste/spécialiste         | intervient selon données, exposition, secteur et criticité                           | avis contextualisé, sans validation fictive |

Une personne peut cumuler plusieurs rôles, mais les décisions et la suppléance
restent explicites.

### STOP visibles

- incident actif ou suspicion en cours ;
- conséquence métier critique inconnue ;
- absence de propriétaire de l’application ou des alertes ;
- restauration critique non exercée ;
- aucune détection exploitable pour les actions sensibles ou
  d’administration ;
- vulnérabilité critique connue non traitée ;
- secrets réels ou données personnelles utilisés en développement sans cadre
  qualifié ;
- dépendance essentielle abandonnée ou sans responsable ;
- responsabilité légale ou sectorielle inconnue sur un traitement matériel.

### Cas fictif

Une entreprise de douze personnes prépare une application de planification
d’interventions. Elle importera les coordonnées des clients, les rendez-vous et
les comptes rendus terrain. L’hébergement annonce des sauvegardes quotidiennes,
mais personne n’a restauré l’application. Les modifications administrateur sont
journalisées, mais aucune alerte n’est adressée et personne n’est responsable
de leur lecture. Le support dit « appeler le développeur » sans procédure ni
suppléant.

Décision pédagogique : **reporter la mise en service avec de vraies données**.
Tester une restauration isolée, déclencher une alerte sur une modification
administrateur, attribuer le traitement de l’incident et documenter les limites.
Un pilote restreint sur données fictives peut continuer si son environnement ne
devient pas implicitement la production.

## F. Spécification de l’outil signature

### Nom

**Planificateur local de revue avant mise en service**

### Promesse honnête

L’outil indique la prochaine action prudente à partir d’états déclarés. Il ne
calcule ni score, ni niveau de sécurité, ni conformité. Il ne transmet, ne
stocke et ne demande aucune information libre.

### Contexte, uniquement par choix fermés

- impact métier : `unknown`, `limited`, `material`, `critical` ;
- données personnelles : `unknown`, `no`, `yes` ;
- exposition Internet : `unknown`, `no`, `yes` ;
- incident actif ou soupçonné : `unknown`, `no`, `yes`.

Ces réponses ne servent pas à calculer un niveau. Elles changent la prochaine
étape après les contrôles :

- `material` ou `critical` mobilise une compétence capable de relire les
  conséquences, la continuité et le risque résiduel ;
- `personalData: yes` mobilise une compétence en protection des données pour
  qualifier rôles, mesures et obligations ;
- `internetExposure: yes` mobilise une compétence en sécurité applicative et en
  exploitation ;
- le cumul conserve toutes les raisons ; la compétence peut être interne à
  l’organisation ou mobilisée à l’extérieur ;
- seul `limited / no / no`, hors incident, peut terminer sur une revue métier
  limitée après satisfaction des contrôles.

### Huit contrôles

1. conséquences et actifs ;
2. accès et secrets ;
3. développement, tests et dépendances ;
4. sauvegarde et restauration ;
5. journaux, alerte et détection ;
6. réponse à incident ;
7. maintenance et corrections ;
8. responsabilités et suppléance.

### États de preuve

- `unknown` : aucune réponse exploitable ;
- `verbal` : affirmation orale non localisée ;
- `written` : exigence ou procédure versionnée ;
- `tested` : exercice ou contrôle observé avec résultat et limites ;
- `blocker` : condition incompatible avec la mise en service prévue.

### Priorité déterministe des verdicts

1. `ESCALATE_ACTIVE_INCIDENT` si incident = oui ;
2. `STOP_RELEASE` si un contrôle = blocage ;
3. `CLARIFY_CONTEXT` si un élément de contexte est inconnu ;
4. `CLARIFY_CONTROLS` si un contrôle est inconnu ;
5. `REQUEST_WRITTEN_EVIDENCE` si un contrôle reste oral ;
6. `ASSIGN_RESPONSIBILITY` si responsabilités et suppléance ne sont pas
   exercées : un écrit seul ne confirme ni les contacts, ni l’acceptation des
   rôles, ni le remplacement ;
7. `TEST_RESTORE` si sauvegarde/restauration n’est pas testée ;
8. `TEST_DETECTION` si journalisation/détection n’est pas testée ;
9. `RUN_CONTROL_TESTS` si un autre contrôle nécessitant un essai reste seulement
   écrit ;
10. `REVIEW_CONTEXTUAL_RISKS` si les contrôles sont satisfaits, mais que
    l’impact est matériel ou critique, que des données personnelles sont
    traitées ou que l’application est exposée à Internet ;
11. `READY_FOR_REVIEW` uniquement pour le contexte déclaré limité, sans données
    personnelles et sans exposition Internet.

Ni `REVIEW_CONTEXTUAL_RISKS`, ni `READY_FOR_REVIEW` ne signifie « sécurisé »,
« conforme » ou « prêt pour la production ». Le premier dirige vers les
compétences correspondant aux raisons visibles ; le second dirige vers le
propriétaire métier et le responsable applicatif pour une revue limitée.

### Exigence de test

L’oracle parcourt exhaustivement les `5^8 = 390 625` combinaisons d’états des
huit contrôles dans un contexte connu, puis vérifie séparément toutes les
branches de contexte et la priorité des verdicts. Une seconde implémentation
indépendante sert d’oracle dans le test et ne rappelle pas le moteur.

### Confidentialité et accessibilité

- aucun champ texte ;
- aucun nom d’application, donnée métier ou donnée personnelle demandé ;
- aucun `fetch`, stockage local, cookie ou télémétrie spécifique ;
- labels explicites et `fieldset`/`legend` ;
- résultat dans une région `aria-live` ;
- bouton de remise à zéro avec cible tactile d’au moins 44 px ;
- mouvement non essentiel neutralisé avec `motion-reduce`.

## G. Visuels

### Concept

Une chaîne de décision originale sur fond sombre : un noyau « application
métier » entouré de quatre capacités — prévenir, détecter, reprendre, répondre —
et relié à une ligne de preuves. Aucun cadenas générique géant, aucun écran
factice, aucun score, aucun chiffre marketing.

### Livrables

| Fichier                              | Dimensions  |
| ------------------------------------ | ----------- |
| `socle-securite-16x9.svg` et `.webp` | 1600 × 900  |
| `socle-securite-4x3.svg` et `.webp`  | 1200 × 900  |
| `socle-securite-1x1.svg` et `.webp`  | 1000 × 1000 |

Les trois SVG sont composés pour leur ratio ; le carré n’est pas un simple
recadrage du 16:9. Les WebP doivent être décodés et leurs dimensions contrôlées.

## H. Journal P1 obligatoire

### Agent et état d’entrée

- agent : `/root/securite_p1_creation` ;
- date de la passe et de sa correction : 30 juillet 2026 ;
- worktree exclusif :
  `/Users/quentinhagnere/Developpement/Hagnere-Code-wt-securite-application` ;
- branche observée à l’entrée : `codex/securite-application-metier` ;
- entrée éditoriale : slug absent et aucun ancien fichier propre au slug ;
- coordination observée avant travail : guide n° 23 réservé en P1 par
  `SECONDARY_ORCHESTRATOR_019fb1e0` ;
- contraintes : aucun fichier partagé, registre, verrou, serveur, build, commit
  ou push dans cette passe.

### Fichiers et instructions lus

- `docs/prompt-maitre-agent-parallele-guides.md` et
  `docs/registre-coordination-guides.md`, lus intégralement ;
- `CLAUDE.md`, règle d’or, charte qualité, workflow, instructions de fabrication,
  roadmap et modèle de dossier ;
- quatre prompts historiques DOCX, lus en texte sans modification ;
- dossier voisin `docs/research/securite-saas-b2b.md` pour fixer la frontière
  acheteur SaaS / exploitation d’une application métier ;
- page et moteur du guide
  `choisir-prestataire-application-metier`, pages voisines, composants premium,
  SEO de guide, catalogue de services et routes `/services/audit-technique`,
  `/services/securite-rgpd` et `/demarrer-un-projet`.

### Fichiers créés ou modifiés dans le périmètre

1. `docs/research/securite-application-metier.md` ;
2. `docs/research/manifests/securite-application-metier-p1.sha256` ;
3. `src/app/guides/securite-application-metier/page.tsx` ;
4. `src/app/guides/securite-application-metier/opengraph-image.tsx` ;
5. `src/app/guides/securite-application-metier/security-readiness.ts` ;
6. `src/app/guides/securite-application-metier/security-readiness-tool.tsx` ;
7. `src/app/guides/securite-application-metier/security-readiness.test.ts` ;
8. `src/app/guides/securite-application-metier/content-quality.test.ts` ;
9. les trois SVG `socle-securite-16x9.svg`, `socle-securite-4x3.svg` et
   `socle-securite-1x1.svg` ;
10. leurs trois déclinaisons WebP.

### Recherches externes effectuées

- EUR-Lex : article 32 du RGPD en français ;
- CNIL : guide sécurité 2024, développement, sauvegarde, journalisation et
  authentification ;
- ANSSI : sauvegarde ANSSI-BP-100 v1.1 du 27 novembre 2025 et architecture de
  journalisation v2.0 du 28 janvier 2022 ;
- OWASP : ASVS 5.0.0 du 30 mai 2025 et frontière avec le Top 10 ;
- NIST : Cybersecurity Framework 2.0 du 26 février 2024.

Les URLs, dates, portées et formulations interdites sont consignées en section
D. Aucune source secondaire n’est utilisée pour fonder une obligation visible.

### Faits ajoutés, corrigés ou retirés

Ajoutés :

- distinction sauvegarde / restauration et décision métier de PDMA/RPO et
  DMIA/RTO ;
- chaîne événement, journal protégé, alerte, destinataire et action ;
- huit contrôles non compensables et responsabilités exercées ;
- contextes `limited`, `material`, `critical`, données personnelles et
  exposition Internet avec conséquences de décision ;
- STOP incident actif, blocage critique et responsabilités absentes.

Corrigés après le `NO_GO_P1` de l’orchestrateur :

- les trois choix de contexte connus influencent désormais réellement le
  verdict : `limited / no / no` et `critical / yes / yes` ne partagent plus la
  même prochaine étape ;
- la compétence contextualisée peut être interne ou externe et n’est jamais
  rendue universellement externe ;
- la responsabilité a une seule règle : `minimum: "tested"` avec exercice des
  contacts et de la suppléance ;
- le suffixe H1 suit le patron voisin sans espace avant `?` ;
- le bandeau supérieur du 4:3 est recomposé pour rester dans son canevas.
- le dernier formatage est appliqué et contrôlé avec Prettier 3.9.6, version
  réellement résolue par `npx prettier` dans l’environnement de validation.

Retirés ou explicitement refusés :

- score global, compensation entre contrôles et fausse certification ;
- fréquence universelle de sauvegarde, RPO/RTO génériques et durée universelle
  des journaux ;
- assimilation du repère 3-2-1 à une obligation légale ;
- questionnaire acheteur, dossier commercial ou preuve de vente SaaS ;
- obligation générale de recourir à un spécialiste externe.

### Calcul et oracles

- aucun score ou calcul de risque ;
- ordre déterministe de onze verdicts, incident actif prioritaire ;
- oracle indépendant sur `5^8 = 390 625` combinaisons des huit contrôles dans un
  contexte connu ;
- matrice indépendante de `4 × 3 × 3 × 3 = 108` contextes ;
- test dédié comparant `limited / no / no` à `critical / yes / yes` ;
- test dédié exigeant `tested` pour responsabilités et suppléance.

### Validations P1

- Prettier 3.9.6 ciblé sur tout le corpus texte/code P1 : vert ;
- deux suites Vitest : 25 tests sur 25, oracle exhaustif et matrice contexte
  inclus ;
- ESLint du slug : vert ;
- TypeScript `--noEmit --incremental false` : vert ;
- `xmllint` sur 3 SVG : vert ;
- dimensions et décodage de 3 WebP : 1600 × 900, 1200 × 900 et 1000 × 1000,
  tous sRGB et décodables ;
- inspection visuelle à taille réelle : 3 ratios sur 3, sans texte tronqué ;
- test textuel ciblé ajouté pour le bandeau 4:3 ;
- `git diff --check` : vert ;
- manifeste fermé de 13 artefacts, hors lui-même : à régénérer après ce journal
  puis à vérifier depuis une commande externe.

### Inconnues et risques transmis

- date et heure réelles de première publication ;
- temps de lecture mesuré sur le HTML servi ;
- résultat du build global et rendu navigateur desktop/mobile ;
- état public de la route, déploiement et indexation ;
- entrée partagée `src/lib/guides.ts`, volontairement hors périmètre P1 ;
- exigences sectorielles, objectifs chiffrés de reprise, architecture, menace,
  exposition et conformité d’une application réelle ;
- revues indépendantes P2 à P4 et contrôles d’intégration non exécutés en P1.

### Gate et manifeste

Le verdict de gate appartient exclusivement à l’orchestrateur. Cette passe ne
prononce ni G1, ni autorisation de commit, de push, de déploiement ou de
publication.

Le manifeste P1 est
`docs/research/manifests/securite-application-metier-p1.sha256`. Il couvre
exactement le dossier, la page, l’OG, le moteur, l’outil, les deux tests et les
six images, soit 13 artefacts. Sa valeur externe doit être recalculée après la
dernière correction.

## I. Journal P2 — vérification contradictoire

### Agent, état d’entrée et périmètre

- agent distinct : `/root/securite_p2_counteraudit` ;
- date : 30 juillet 2026 ;
- état d’entrée : G1 déclaré `GO_PASSE_2`, registre observé en `P2_EN_COURS` ;
- manifeste P1 conservé sans modification :
  `docs/research/manifests/securite-application-metier-p1.sha256`, 13 lignes,
  SHA-256 externe du fichier manifeste
  `c3425637e49db085bc565fefd050a504367012651e1b4686d06b95b7f61e3e3e` ;
- périmètre d’écriture : uniquement le dossier de recherche, la page, l’OG, le
  moteur, l’outil, les deux tests et les six images propres au slug ;
- aucun fichier partagé, registre, verrou, serveur, build, index Git, commit,
  push ou déploiement modifié par P2.

P2 a relu intégralement le prompt maître, le registre de coordination, les
3 157 lignes du corpus P1 texte/code/SVG, le manifeste P1 et les trois WebP à
leur définition d’origine. La frontière avec `securite-saas-b2b` a été
recontrôlée dans sa fiche : ce guide reste centré sur la conception,
l’exploitation et la décision de mise en service d’une application métier. Il
n’intègre aucun questionnaire acheteur, dossier de vente ou engagement de
cycle commercial SaaS.

### Sources primaires rouvertes

- EUR-Lex : article 32 du RGPD, y compris risques pour les droits et libertés,
  responsable de traitement, sous-traitant et mesures appropriées ;
- CNIL : page du guide, PDF courant « Version 2024 — mise à jour 2026 », fiche
  générale du 19 juin 2026, développement, sauvegarde, traçabilité et
  délibération n° 2021-122 sur la journalisation ;
- ANSSI : sauvegarde ANSSI-BP-100 v1.1 du 27 novembre 2025 et journalisation
  v2.0 du 28 janvier 2022, avertissements de portée non normative et
  adaptation au contexte inclus ;
- OWASP : page officielle et dépôt ASVS, version stable 5.0.0 publiée le
  30 mai 2025 ;
- NIST : CSWP 29 du 26 février 2024 et FAQ du CSF 2.0 sur les six fonctions et
  les résultats non prescriptifs.

Les URL visibles ou décisives ont été testées par requête HTTP après
correction. Elles répondent en 200, y compris le PDF CNIL 2026, la
recommandation CNIL de journalisation, le PDF ANSSI v1.1 et la page canonique
ANSSI de journalisation.

### Affirmations contrôlées et corrections

1. **Article 32.** La formulation visible précise désormais que la
   proportionnalité porte sur le risque pour les droits et libertés des
   personnes dans le périmètre d’un traitement de données personnelles. Elle
   ne transforme pas ce texte en checklist générale de sécurité logicielle.
2. **Fraîcheur CNIL.** La source publique « Guide sécurité 2024 » a été
   remplacée par le PDF courant « Version 2024 — mise à jour 2026 ». La fiche
   générale mise à jour le 19 juin 2026 a été ajoutée pour distinguer les
   données personnelles des autres informations d’entreprise sans étendre le
   RGPD à ces dernières.
3. **Journalisation CNIL.** Six mois à un an ne vise plus, dans le texte, tous
   les logs ni seulement une catégorie imprécise de traces d’accès. La portée
   est rattachée aux données de journalisation destinées à sécuriser un
   traitement de données personnelles, avec les adaptations prévues pour le
   contrôle interne, les finalités, obligations et besoins documentés.
4. **Liens ANSSI.** L’ancien chemin
   `cyber.gouv.fr/uploads/...journalisation.pdf`, qui répondait 404, a été
   retiré. Le visible utilise la page canonique MesServicesCyber ; le dossier
   conserve aussi le PDF courant pour les recommandations précises.
5. **Caractère non normatif.** Les notices publiques ANSSI de sauvegarde et de
   journalisation indiquent explicitement que les recommandations ne sont pas
   normatives sauf texte contraire et qu’elles doivent être adaptées.
6. **Repère 3-2-1.** Le visible reprend la formulation vérifiée : trois copies,
   deux supports, dont une hors ligne. Il la présente comme une recommandation
   à adapter, jamais comme une loi ou une preuve de reprise.
7. **Restauration.** Le titre absolu selon lequel une sauvegarde ne serait
   « prouvée » qu’à sa restauration a été remplacé. Le guide distingue
   existence de la copie et preuve de la capacité de reprise.
8. **Outil.** La phrase éditoriale correspond maintenant au moteur : certains
   contrôles exigent un écrit, d’autres un exercice. La confidentialité est
   formulée précisément : les choix ne quittent pas la page et ne sont pas
   enregistrés durablement par l’outil.
9. **Visuels.** Les trois ratios remplaçaient la capacité « répondre » par
   « décider », contrairement au corps et à l’artefact. Ils affichent
   désormais « RÉPONDRE — Responsable nommé — Isoler, corriger, informer ».
   Les SVG ont été rerendus en WebP et les trois définitions ont été inspectées.

Retirés : le millésime CNIL incomplet, le lien ANSSI mort, la portée trop large
ou trop étroite des six à douze mois, l’alternative imprécise « hors site ou
hors ligne » dans le repère 3-2-1, la preuve absolue de sauvegarde et la
divergence visuelle « décider ».

### Moteur, cas limites et oracles

- onze verdicts conservés sans score, niveau de sécurité, conformité ou
  autorisation de production ;
- priorité vérifiée : incident actif, blocage, contexte inconnu, contrôle
  inconnu, oral, responsabilités, restauration, détection, autres exercices,
  revue contextualisée, revue métier limitée ;
- valeurs étrangères de preuve et de contexte normalisées en `unknown` ;
- blocage conservé prioritaire sur un contexte inconnu, après l’incident actif ;
- `limited / no / no / no` et `critical / yes / yes / no` conduisent à deux
  étapes différentes ;
- responsabilités et suppléance exigées au statut `tested` ;
- compteur explicite de `5^8 = 390 625` combinaisons de huit contrôles, avec
  oracle de verdict séparé du moteur ;
- compteur explicite de `4 × 3 × 3 × 3 = 108` contextes ;
- aucune entrée libre, transmission, stockage persistant, compensation ou
  score.

### Contrôles P2

- Prettier 3.9.6 ciblé : vert ;
- Vitest : 2 suites, 27 tests sur 27, dont oracle 390 625 et matrice 108 ;
- ESLint du dossier du slug : vert ;
- TypeScript `--noEmit --pretty false --incremental false` : vert ;
- `xmllint --noout` : trois SVG valides ;
- décodage WebP : trois sur trois, sRGB, 1600 × 900, 1200 × 900 et
  1000 × 1000 ;
- inspection visuelle originale : trois ratios sans troncature et avec la
  capacité « répondre » ;
- routes CTA et trois guides voisins : fichiers de page présents ;
- vérification externe des liens primaires décisifs : HTTP 200 ;
- diff-check fermé sur les fichiers propres au slug : vert ;
- absence de `node_modules` et `tsconfig.tsbuildinfo` résiduels : vérifiée.

### Sévérités et risques résiduels

- P0 trouvé / corrigé / résiduel : `0 / 0 / 0` ;
- P1 trouvé / corrigé / résiduel : `1 / 1 / 0` — fraîcheur CNIL et lien
  primaire ANSSI cassé regroupés dans le même défaut de preuve publique ;
- P2 trouvés / corrigés / résiduels : `7 / 7 / 0` — portée des journaux,
  formulation de restauration, 3-2-1, cohérence outil, confidentialité,
  cohérence visible des visuels et cohérence de leurs descriptions accessibles ;
- les exigences sectorielles, l’architecture réelle, les objectifs chiffrés de
  reprise et le risque résiduel d’une application donnée restent inconnus et
  exigent une qualification humaine ;
- build, HTML servi, BAT navigateur, intégration partagée, publication et
  indexation restent hors de P2.

### Gate et manifeste P2

Le verdict G2 appartient à l’orchestrateur. Le manifeste
`docs/research/manifests/securite-application-metier-p2.sha256` couvre le
snapshot courant de 13 artefacts propres au slug, hors manifestes historiques
et hors lui-même. Son SHA-256 externe est communiqué dans la sortie P2 après
génération et vérification.

### Reprise G2 — descriptions accessibles des visuels

Le premier contrôle G2 a conclu `NO_GO_P2` : le libellé visible « RÉPONDRE »
était corrigé dans les trois SVG, mais la description accessible du ratio
16:9 conservait « décider » et les deux autres descriptions ne nommaient pas
explicitement les quatre capacités. La recherche de régression P2 était trop
étroite, car elle excluait uniquement `DÉCIDER` en capitales.

La reprise :

- nomme dans chaque `<desc>` les quatre capacités exactes « prévenir, détecter,
  reprendre et répondre » ;
- interdit désormais `décider` sans distinction de casse dans l’intégralité de
  chaque source SVG ;
- ajoute un test dédié sur l’existence et le contenu des trois descriptions
  accessibles ;
- porte Vitest à 28 tests ;
- rejoue Prettier 3.9.6, Vitest, ESLint, TypeScript, `xmllint`, le décodage et
  les dimensions WebP ainsi que le diff-check ;
- invalide le premier manifeste P2, puis régénère et vérifie le snapshot des
  13 artefacts.

Après reprise : P0 résiduel `0`, P1 résiduel `0`, P2 résiduel `0`. Le nouveau
SHA-256 externe du manifeste est communiqué dans la sortie P2 corrigée.

## J. Journal P3 — polish rédactionnel repris sur le snapshot intermédiaire

### Agent, état d’entrée et responsabilité du snapshot

- agent P3 distinct de P1 et P2 : `/root/securite_p3_reprise` ;
- date : 30 juillet 2026 ;
- état de coordination observé : G2 déclaré `GO_PASSE_3`, registre en
  `P3_EN_COURS`, propriétaire `SECONDARY_ORCHESTRATOR_019fb1e0` ;
- état repris : un premier regard P3 avait appliqué des corrections
  rédactionnelles partielles, puis s’était arrêté sans journal P3 ni manifeste
  P3 ; le présent agent a donc relu et assumé l’intégralité du snapshot courant,
  sans considérer les retouches intermédiaires comme validées par défaut ;
- manifeste P2 conservé sans modification :
  `docs/research/manifests/securite-application-metier-p2.sha256`, SHA-256
  externe
  `0846f306664e29ff39768178015896527818031604f83fae52dfe9bbb617ed12` ;
- la vérification du manifeste P2 sur le snapshot P3 échoue comme attendu sur
  six artefacts texte ou code déjà retouchés ; les sept autres artefacts,
  notamment l’OG et les six images, restent identiques au snapshot P2 ;
- aucun fichier partagé, registre, verrou, serveur, build, index Git, commit,
  push, déploiement ou publication n’a été modifié par P3.

### Lecture complète et contrôle de l’état intermédiaire

P3 a relu intégralement :

- le prompt maître de 1 906 lignes et le registre de coordination de 265
  lignes ;
- le dossier de recherche, la page, l’OG, le moteur, l’outil et les deux suites
  de tests propres au slug ;
- les trois sources SVG, y compris leurs titres et descriptions accessibles ;
- les trois WebP à leur définition d’origine : 16:9, 4:3 et 1:1.

L’inspection a été menée comme une lecture pressée, méfiante et mobile : réponse
dans l’ouverture, autonomie des titres, longueur des paragraphes, compréhension
des tableaux, enchaînement des questions, réponse initiale des FAQ, cohérence
entre le héros, le corps, l’outil, les CTA et les métadonnées.

### Bonnes corrections intermédiaires conservées

- le règlement général sur la protection des données est développé avant
  `RGPD` ;
- `ASVS` est accompagné de son intitulé
  _Application Security Verification Standard_ ;
- la perte de données maximale admissible (`PDMA`, `RPO` en anglais) et la
  durée maximale d’interruption admissible (`DMIA`, `RTO` en anglais) sont
  expliquées dans la phrase qui les introduit ;
- le délégué à la protection des données (`DPD`, aussi appelé `DPO`) et le
  responsable de la sécurité des systèmes d’information (`RSSI`) sont nommés
  en toutes lettres ;
- le mode dégradé est expliqué par la question « comment continuer sans
  l’application » ;
- la réponse courte reste visible avant tout développement juridique ou
  technique ;
- la confidentialité de l’outil reste précise : choix fermés, aucune réponse
  envoyée ni enregistrée durablement par cet outil ;
- les FAQ répondent dès leur première phrase et ne se présentent ni comme une
  certification, ni comme une autorisation de mise en production.

### Corrections P3 finales

- les occurrences publiques de `escalade` et `escalader` ont été remplacées
  par l’action attendue : alerter ou transmettre au niveau responsable, y
  compris en cas d’absence ;
- le terme interne `pipeline` a été remplacé dans l’outil par « chaîne de
  livraison automatisée ou procédure observée » ;
- les six fonctions anglaises du NIST CSF 2.0 sont traduites à leur première
  explication visible, sans modifier la portée non prescriptive décrite par
  P2 ;
- « exercice sur table » est défini comme une simulation discutée sans
  provoquer d’incident réel ;
- « risques résiduels » est remplacé dans la décision visible par « les risques
  qui restent » ;
- trois transitions de cause à effet relient désormais conséquences et
  contrôles, reprise et détection, puis détection et responsabilités ;
- le test de contenu vérifie ces définitions et interdit le retour des termes
  internes dans la copie publique.

Ces corrections n’ajoutent aucun fait, chiffre, seuil, obligation ou promesse.
Elles ne retirent aucune limite, source ou qualification P2.

### Faits, nuances et mécanique laissés inchangés

- les huit contrôles, leurs identifiants et leurs minima `written` ou `tested` ;
- les onze identifiants de verdict, y compris
  `ESCALATE_ACTIVE_INCIDENT`, et leur ordre de priorité ;
- les oracles indépendants de `5^8 = 390 625` états de preuve et de
  `4 × 3 × 3 × 3 = 108` contextes ;
- les STOP sur incident actif, blocage, inconnue critique, restauration,
  détection ou responsabilité ;
- l’absence de score, de compensation, de verdict de conformité et de
  _readiness_ de production ;
- les dates, URL, portées et limites des sources EUR-Lex, CNIL, ANSSI, OWASP et
  NIST vérifiées en P2 ;
- la frontière avec `securite-saas-b2b`, sans questionnaire acheteur ni dossier
  de vente ;
- le scénario entièrement fictif, les CTA réels et l’absence de téléchargement
  XLS, XLSX ou CSV ;
- le contenu des trois SVG, des trois WebP et de l’OG.

### Validations P3

- Prettier `3.9.6` ciblé sur le dossier, la page, l’OG, le moteur, l’outil et
  les deux tests : vert ; les SVG, sans parseur Prettier applicable, sont
  contrôlés séparément ;
- Vitest : deux suites, 30 tests sur 30, oracle 390 625 et matrice 108 inclus ;
- ESLint du dossier du slug : vert ;
- TypeScript `--noEmit --pretty false --incremental false` : vert ;
- `xmllint --noout` : trois SVG valides ;
- ImageMagick : trois WebP décodables en sRGB, aux dimensions 1600 × 900,
  1200 × 900 et 1000 × 1000 ;
- inspection visuelle à la définition d’origine : trois ratios lisibles, sans
  troncature, avec les quatre capacités et leur branche STOP ;
- diff-check fermé sur les 13 artefacts : vert ;
- aucun `node_modules` ni `tsconfig.tsbuildinfo` résiduel.

### Sévérités, gate et manifeste P3

- P0 trouvé / corrigé / résiduel : `0 / 0 / 0` ;
- P1 trouvé / corrigé / résiduel : `0 / 0 / 0` ;
- défauts P3 corrigés : jargon interne, définitions manquantes et raccords
  éditoriaux ; aucun risque factuel nouveau ;
- build global, HTML servi, BAT navigateur, intégration partagée, publication
  et indexation restent hors de P3.

Le verdict G3 appartient exclusivement à l’orchestrateur. Le manifeste
`docs/research/manifests/securite-application-metier-p3.sha256` couvre
exactement le dossier, la page, l’OG, le moteur, l’outil, les deux tests et les
six images, soit 13 artefacts courants, hors manifestes. Son SHA-256 externe est
communiqué dans la sortie P3 après génération et vérification.

## K. Journal P4 — anti-automatismes et cohérence de voix

### Agent, snapshot et périmètre

- agent P4 distinct de P1, P2 et P3 :
  `/root/securite_p4_antiai` ;
- date : 30 juillet 2026 ;
- état d’entrée : G3 déclaré `GO_PASSE_4`, registre observé en
  `P4_EN_COURS` ;
- prompt maître de 1 906 lignes et registre de coordination de 265 lignes
  relus intégralement avant l’audit ;
- snapshot P3 relu en entier : dossier de recherche, page, OG, moteur, outil,
  deux suites de tests, trois SVG, trois WebP et les trois manifestes
  historiques ;
- manifestes P1, P2 et P3 conservés sans modification, avec respectivement
  13 lignes et les SHA-256 externes
  `c3425637e49db085bc565fefd050a504367012651e1b4686d06b95b7f61e3e3e`,
  `0846f306664e29ff39768178015896527818031604f83fae52dfe9bbb617ed12` et
  `f849d0085238e34819f06fe2aaffe057bf49d948a300eb11f5d507bd094b0d79` ;
- comparaison de rythme avec les guides voisins
  `choisir-prestataire-application-metier`,
  `plan-recette-application-metier` et
  `reprendre-logiciel-metier-existant`, sans reprise de leurs titres, plans ou
  cadences ;
- aucun fichier partagé, registre, verrou, serveur, build, index Git, commit,
  push, déploiement ou publication modifié par P4.

### Motifs repérés

1. **Titres trop uniformément directifs.** Sept des neuf titres de section
   commençaient par un impératif : « Demandez », « Traduisez », « Reliez »,
   « Prouvez », « Nommez », « Trouvez » et « Choisissez ». Ce rythme était
   proche de celui de plusieurs guides voisins et donnait l’impression d’une
   trame appliquée mécaniquement.
2. **Contrastes négatifs en série.** L’introduction des quatre capacités
   enchaînait trois fois « ne sert pas » ou « ne suffit pas ». Quelques
   verdicts répétaient aussi « ne signifie ni… ni… » alors qu’une formulation
   affirmative pouvait garder la même limite.
3. **Texte qui parle de lui-même.** Plusieurs phrases invoquaient « ce guide »
   au lieu de nommer la méthode ou la décision. La dernière boîte affirmait
   « la valeur du guide » puis résumait le plan, ce qui relevait de
   l’autosatisfaction et de la conclusion formatée.
4. **Noms abstraits trop rapprochés.** « Preuve », « contrôle », « revue » et
   « responsable » sont nécessaires au fond, mais leur reprise dans plusieurs
   titres et transitions rendait la voix plus administrative que dirigeante.
5. **Outil formulé comme un rapport.** « Situer huit contrôles » et
   « prochaine preuve à obtenir » étaient exacts, mais moins directs que la
   question concrète posée à l’utilisateur.

Aucun adjectif vendeur, superlatif, dramatisation creuse, métaphore forcée,
parenthèse en cascade, inversion artificielle, série de questions rhétoriques
ou connecteur robotique matériel n’a été relevé. Les tableaux et listes
parallèles ont été conservés lorsqu’ils portent les huit contrôles, les quatre
capacités, les responsabilités ou de vraies options comparables.

### Corrections P4

- les sept titres impératifs ont été remplacés par des titres déclaratifs
  autonomes, notamment « Les faits observables valent mieux qu’une promesse de
  sécurité », « La restauration révèle ce que la sauvegarde permet vraiment »
  et « Les responsabilités doivent tenir même en cas d’absence » ;
- les trois négations parallèles de la section sur les capacités sont devenues
  trois images concrètes de longueur différente : accès bloqué, journaux sans
  alerte et base restaurée sans ses dépendances ;
- les références à « ce guide » ont été remplacées par la méthode, le
  regroupement éditorial ou le résultat réel de l’outil ;
- la conclusion autosatisfaite a été remplacée par une consigne vérifiable :
  écrire l’action manquante, la personne chargée de la mener et la date de
  réexamen ;
- les titres du planificateur demandent désormais quel point établir et où en
  sont les huit contrôles ; les états, branches et verdicts techniques ne
  changent pas ;
- les verdicts « contrôle inconnu » et « dossier présentable » évitent le
  double contraste automatique et disent directement ce que l’état permet ou
  n’autorise pas ;
- une régression de contenu protège les nouveaux titres, la fin actionnable et
  le retrait des anciennes formules mécaniques.

### Passages conservés et raisons

- les 150 premiers mots gardent leurs phrases courtes sur la restauration,
  l’alerte et la première heure d’un incident : le rythme sert une action
  immédiate, pas une symétrie décorative ;
- les formulations négatives qui bornent l’article 32, la CNIL, l’ANSSI,
  OWASP, NIST, le repère 3-2-1 et l’autorisation de production restent en place
  lorsque les retirer affaiblirait une portée vérifiée par P2 ;
- les libellés « preuve », « contrôle », « revue », « responsable » et
  « propriétaire » restent présents dans les tableaux, le moteur et les
  résultats lorsqu’ils désignent une pièce, un identifiant fonctionnel ou une
  responsabilité réellement distincte ;
- les trois listes de bénéfices des CTA restent brèves et substantielles :
  elles décrivent périmètre, écarts et attribution, sans promesse commerciale ;
- le scénario est toujours précédé de « Scénario entièrement fictif » et
  continue d’indiquer qu’aucun client, système, incident ou résultat réel
  n’est représenté ;
- l’OG et les six images restent inchangés : les trois WebP ont été inspectés
  à leur définition d’origine, sans troncature ni contradiction avec les quatre
  capacités et la branche STOP.

### Faits, frontières et mécanique inchangés

- toutes les URL, dates, versions, portées et limites EUR-Lex, CNIL, ANSSI,
  OWASP et NIST fixées par P2 ;
- huit contrôles, leurs identifiants et leurs minima `written` ou `tested` ;
- onze verdicts, leurs identifiants et leur ordre de priorité ;
- oracles indépendants `5^8 = 390 625` et
  `4 × 3 × 3 × 3 = 108` ;
- distinction entre contexte limité et revue contextualisée, compétences
  internes ou externes, STOP et inconnues non compensables ;
- absence de score, de conformité automatique et d’autorisation de production ;
- frontière avec `securite-saas-b2b`, CTA réels, cas fictif et absence de
  téléchargement XLS, XLSX ou CSV ;
- aucune affirmation, source, date, technologie, obligation, fréquence, seuil
  ou promesse nouvelle.

### Contradictions, sévérités et validations P4

- contradiction finale détectée : aucune ;
- P0 trouvé / corrigé / résiduel : `0 / 0 / 0` ;
- P1 trouvé / corrigé / résiduel : `0 / 0 / 0` ;
- automatismes éditoriaux matériels trouvés / corrigés / résiduels :
  `5 / 5 / 0` ;
- Prettier `3.9.6` ciblé : vert ;
- Vitest : deux suites, 31 tests sur 31, oracle 390 625 et matrice 108 inclus ;
- ESLint du dossier du slug : vert ;
- TypeScript `--noEmit --pretty false --incremental false` : vert ;
- `xmllint --noout` : trois SVG valides ;
- trois WebP décodables en RGB, aux dimensions 1600 × 900, 1200 × 900 et
  1000 × 1000 ;
- inspection visuelle originale : trois ratios lisibles, sans troncature ;
- diff-check ciblé : vert ;
- aucun `node_modules` ni `tsconfig.tsbuildinfo` résiduel.

Le verdict G4 appartient exclusivement à l’orchestrateur. Le manifeste
`docs/research/manifests/securite-application-metier-p4.sha256` couvre
exactement le dossier, la page, l’OG, le moteur, l’outil, les deux tests et les
six images, soit 13 artefacts courants, hors manifestes historiques et hors
lui-même. Son SHA-256 externe est communiqué après génération et vérification.

## L. Journal post-Q — correction bornée du handoff

### Snapshot et verdict d’entrée

- correcteur distinct : `/root/securite_quality_correction` ;
- date : 30 juillet 2026 ;
- état de coordination observé : registre `QUALITE_A_REPRENDRE`, propriétaire
  `SECONDARY_ORCHESTRATOR_019fb1e0` ;
- snapshot audité par Q : manifeste P4 historique de 13 artefacts, vérifié
  `13/13`, dont le SHA-256 externe est
  `1b306b2bce509ae30c00a770082d1571ef08c957325a3cbbe48ccbc5e1d5e2d3` ;
- contre-auditeur distinct : `/root/securite_q_transversal` ;
- verdict Q : `NO_GO`, score `92/100`, P0 `0`, P1 `1`, P2 `2` ;
- périmètre de reprise : dossier de recherche uniquement ; aucun fichier
  partagé, registre, verrou, serveur, build, index Git, commit, push,
  déploiement ou publication.

### Liste fermée des défauts Q

1. **P1 — titre de handoff trop long.** La proposition comptait 72 caractères.
   L’entrée `guides.ts` devait utiliser exactement « Sécurité d’une application
   métier avant sa mise en service », soit 58 caractères.
2. **P2 — icône du hub imprécise.** Le handoff devait donner l’association
   exacte `"securite-application-metier": ShieldCheck,`.
3. **P2 — maillage entrant imprécis.** Le handoff devait nommer le scénario
   « Application métier » de
   `src/components/outils-internes/sections/scenarios.ts`, la destination
   `/guides/securite-application-metier` et le libellé visible exact « Avant la
   mise en service, vérifiez que le socle de sécurité est prouvé et testé. »

### Corrections appliquées

- le champ `title` proposé pour `src/lib/guides.ts` contient désormais
  exactement les 58 caractères exigés ;
- la ligne exacte de `GUIDE_ICONS` est fournie dans un bloc TypeScript ;
- le lien entrant est fourni sous forme de balise HTML exacte, avec le chemin
  source, la destination et le libellé visible demandés ;
- aucun fait, source, calcul, verdict, texte public, test, composant ou visuel
  n’a été modifié ;
- les manifestes P1 à P4 restent des preuves historiques intactes.

### Contrôles et nouvelle preuve

- Prettier 3.9.6 ciblé sur le dossier : vert ;
- Vitest ciblé sur les deux suites propres au slug : 31 tests sur 31 ;
- ESLint ciblé sur les six fichiers TypeScript et TSX du slug : vert ;
- TypeScript `--noEmit --pretty false --incremental false` : vert ;
- vérification des manifestes historiques sur le snapshot post-Q : P1 échoue
  sur 12 artefacts, P2 sur 6, P3 sur 6 et P4 uniquement sur le dossier modifié ;
  ces écarts correspondent aux passes postérieures et à la reprise post-Q,
  sans aucune réécriture des manifestes historiques ;
- nouveau manifeste qualité :
  `docs/research/manifests/securite-application-metier-quality.sha256`, couvrant
  exactement les 13 artefacts courants hors manifestes, vérifié `13/13`.

Verdict du correcteur après vérifications : `PRET_POUR_RECONTROLE_Q`, avec P0
résiduel `0`, P1 résiduel `0` et les deux précisions P2 demandées intégrées au
handoff.

## M. Journal d’intégration — catalogue, maillage et BAT

### Autorisation et snapshot d’entrée

- intégrateur : `/root` ;
- fenêtre ouverte le 30 juillet 2026 à `22:03:29+02:00`, après acquisition du
  verrou d’intégration partagé ;
- décision indépendante d’entrée : `GO_QUALITE_GUIDE`, score `94/100`,
  scorecard `20/20`, P0/P1/P2/P3 `0` ;
- manifeste qualité d’entrée vérifié `13/13`, SHA-256 externe
  `dddf9431098f2945201be35312234d1484252b46e7ebeae1883d37794c43fa5e` ;
- branche : `codex/securite-application-metier` ; base avant intégration :
  `3e3503b8742b0b73b4824316318a5f1adcb3732c`.

### Fichiers partagés intégrés

1. `src/lib/guides.ts` : entrée du slug, titre exact de 58 caractères,
   métadonnées, trois images, dates ISO de l’intégration, temps de lecture
   mesuré de 16 minutes et statut `ready-for-human-review`.
2. `src/components/guides/GuidesHubPage.tsx` : association exacte
   `"securite-application-metier": ShieldCheck,`.
3. `src/app/guides/choisir-prestataire-application-metier/page.tsx` : lien
   entrant éditorial depuis la section sur les garanties de sécurité.
4. `src/components/outils-internes/sections/scenarios.ts` : lien entrant exact
   depuis le scénario « Application métier ».
5. `src/lib/guides.test.ts` : enregistrement du septième guide reconstruit et
   preuve des deux liens entrants.

Le slug n’apparaît pas dans `LEGACY_GUIDE_SLUGS` : aucune redirection
historique n’a été retirée. Le statut éditorial conserve volontairement la
route hors hub public, sitemap et `llms.txt`.

### Mesure, qualité de code et batterie globale

- installation reproductible : `npm ci`, 758 paquets installés ;
- mesure sur HTML réellement servi :
  `securite-application-metier — 3 189 mots — 16 min` ;
- Prettier 3.9.6, `git diff --check`, ESLint ciblé et TypeScript
  `--noEmit --pretty false --incremental false` : verts ;
- SEO en environnement normal : 33 fichiers, 176 tests sur 176 ;
- SEO avec `NODE_ENV=production` : 33 fichiers, 176 tests sur 176 ;
- batterie Vitest complète : 83 fichiers, 623 tests sur 623 ;
- build de production avec
  `NODE_OPTIONS=--max-old-space-size=8192 NEXT_PUBLIC_ENV=production` :
  compilation, TypeScript, 65 pages et postbuild verts ;
- artefact SEO de production : 44 URL, 27 liens `llms.txt`, 44 pages, sept
  temps de lecture et 76 blocs JSON-LD contrôlés ;
- `npm audit --omit=dev` retrouve 10 vulnérabilités hautes dans la pile
  existante (`brace-expansion` et `sharp`, via Next/OpenNext/Miniflare). Leur
  correction proposée impose des changements majeurs de dépendances ; aucun
  paquet ni verrou de dépendances n’a été modifié dans ce lot.

### HTML servi, SEO et maillage

- route du guide : HTTP 200, `text/html`, un H1, langue `fr`, lien d’évitement
  vers `main-content` ;
- titre, description, canonical
  `https://hagnere-code.ai/guides/securite-application-metier`, Open Graph et
  Twitter cohérents ;
- robots : `noindex, nofollow`, conformément au statut
  `ready-for-human-review` ;
- données structurées : `Article` et `BreadcrumbList` uniquement ; aucun
  `FAQPage`, `HowTo`, `Review` ou `AggregateRating` ajouté ;
- neuf questions de FAQ visibles dans le rendu, aucun lien XLS, XLSX ou CSV ;
- image Open Graph : HTTP 200, `image/png`, 1200 × 630 ;
- slug absent du hub, du sitemap et de `llms.txt`, comme attendu avant
  publication ;
- les deux liens entrants sont présents dans le HTML servi : guide du choix du
  prestataire et scénario « Application métier ».

### BAT navigateur réelle

- largeurs CSS contrôlées : 320, 360, 390, 430, 640, 768, 1024, 1280, 1440 et
  1600 px, sans débordement horizontal de la page ;
- inspections visuelles en mobile 320 px, tablette 768 px et desktop 1440 px,
  en thèmes sombre et clair ;
- petit paysage 640 × 360 px : navigation et H1 lisibles, sans débordement ;
- reflow équivalent à un zoom de 200 % sur une fenêtre de 1 440 px : viewport
  utile de 720 px, sans débordement ;
- police racine portée temporairement de 16 à 20 px : aucun débordement à
  1 024 px, contrôles de l’outil hauts de 55 px ; la modification de test a été
  annulée par rechargement ;
- clavier : changement de catégorie FAQ avec flèche droite et ouverture d’une
  réponse avec Entrée ;
- outil local vérifié dans le navigateur : priorité à l’incident actif, remise
  à zéro des douze sélections, dossier limité complet, contexte critique avec
  données personnelles et exposition Internet, puis condition STOP ;
- aucun avertissement ni erreur dans la console du navigateur.

### Preuve d’intégration et limites d’état

Le manifeste
`docs/research/manifests/securite-application-metier-integration.sha256`
couvre 23 fichiers : les 13 artefacts courants, les cinq manifestes
historiques P1/P2/P3/P4/quality et les cinq fichiers partagés modifiés. Il
exclut son propre contenu.

À ce stade, les validations sont locales. Aucun déploiement, publication, URL
publique contrôlée ou indexation n’est revendiqué.
