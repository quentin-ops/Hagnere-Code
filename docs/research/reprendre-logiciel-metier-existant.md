# Dossier de recherche — Reprendre un logiciel métier existant

> Slug cible : `reprendre-logiciel-metier-existant`
> Passage : P1 — recherche, architecture, production locale et preuves
> Date de gel du dossier : 30 juillet 2026
> Score de lancement gelé par l’orchestrateur : **92/100**
> Statut éditorial visé : `ready-for-human-review`
> Publication : **non autorisée dans ce passage**

## 0. Règle de travail

La future page est écrite comme une page neuve. L’ancienne page et les pages
commerciales servent uniquement à repérer les risques de promesse, de
cannibalisation et de confusion entre dépôt livré et reprise réellement
maîtrisée. Elles ne constituent pas un corpus à recycler.

La thèse éditoriale est volontairement exigeante :

> Une entreprise ne devrait pas engager une reprise durable tant que la nouvelle
> équipe n’a pas démontré, de façon indépendante et reproductible, sa capacité à
> observer, construire, déployer, restaurer et organiser la sortie.

Le guide nomme cette méthode le **test de relève** et sa synthèse le
**procès-verbal de reprise**. Ces cinq preuves sont **non compensables**. Il ne
calcule donc pas un score moyen permettant de masquer un blocage critique. Ce
vocabulaire et cette règle sont un choix éditorial propre au guide, pas une
norme ni une certification.

## 1. Intention de recherche et frontière éditoriale

### 1.1 Requête principale

`reprendre logiciel métier existant`

### 1.2 Intentions secondaires utiles

- audit avant reprise application ;
- récupérer code source et accès ;
- changer de prestataire logiciel ;
- réversibilité logiciel métier ;
- preuve de restauration sauvegarde ;
- reprise maintenance application existante ;
- droits sur le code d’un logiciel métier ;
- transfert de sous-traitant données personnelles.

### 1.3 Question à laquelle la page doit répondre

« Puis-je confier durablement ce logiciel à une nouvelle équipe, et quelles
preuves dois-je exiger avant une première bascule ? »

### 1.4 Périmètre positif

Le guide :

- qualifie l’état de reprise avant engagement durable ;
- distingue cinq capacités opérationnelles à prouver ;
- aide à réunir un dossier de reprise transmissible ;
- propose un outil local de décision sans score ;
- montre quand limiter, reporter ou refuser la reprise ;
- balise les vérifications juridiques, contractuelles et données comme des
  décisions humaines obligatoires.

### 1.5 Hors périmètre et anti-cannibalisation

| Sujet                                  | Destination                                | Traitement ici                     |
| -------------------------------------- | ------------------------------------------ | ---------------------------------- |
| Prix d’une maintenance applicative     | `cout-maintenance-application-metier`      | Aucun tarif, aucune fourchette     |
| Migration et bascule sans interruption | `migrer-logiciel-metier-sans-interruption` | Mention contextuelle seulement     |
| Choix général d’un prestataire         | Guide dédié du corpus                      | Pas de comparatif d’agences        |
| Chiffrage de dette technique           | Guide dédié du corpus                      | Pas de score de dette              |
| Reprise de site web                    | Guide dédié du corpus                      | Pas d’extension aux sites vitrines |
| SaaS développé par un freelance        | Guide dédié du corpus                      | Pas de cas spécialisé              |
| MVP produit par « vibe coding »        | Guide dédié du corpus                      | Pas de cas spécialisé              |

La page service `/services/maintenance-evolution` décrit une offre. Le présent
guide prend une décision préalable : **les preuves sont-elles suffisantes pour
engager une reprise durable ?**

## 2. Observation de l’espace de résultats

L’observation contradictoire transmise par l’orchestrateur montre un espace
majoritairement commercial : audit de code, maintenance, délais, prix ou
promesses de reprise. Ces résultats servent uniquement à caractériser
l’intention de recherche. Ils ne sont pas retenus comme sources factuelles.

L’espace différenciant défendable est la décision fondée sur des preuves :

1. définir la version installable ou l’action attendue ;
2. le reproduire dans un environnement isolé ;
3. conserver une trace datée ;
4. affecter un propriétaire ;
5. transformer toute absence critique en STOP, et non en point négatif noyé
   dans une moyenne.

## 3. Corpus primaire retenu

Les dates ci-dessous séparent la date du contenu de la date de consultation.

| ID  | Source primaire                                                                                                                                                                         | État au 30/07/2026                                                       | Usage dans la page                                                                                                               |
| --- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| S1  | [Code de la propriété intellectuelle, art. L122-6 — Légifrance](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278919)                                                   | En vigueur depuis le 11/05/1994, vérifié le 30/07/2026                   | Sous réserve de L122-6-1, droits d’exploitation dont reproduction, adaptation et modification                                    |
| S2  | [Code de la propriété intellectuelle, art. L122-6-1 — Légifrance](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278920/)                                                | Version en vigueur depuis le 26/11/2021, vérifiée le 30/07/2026          | Pas de droit universel de reprise ; actes nécessaires à l’usage selon la destination et réserve contractuelle de correction      |
| S3  | [Code de la propriété intellectuelle, art. L113-9 — Légifrance](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000039279818)                                                   | En vigueur depuis le 01/01/2020, vérifié le 30/07/2026                   | Régime limité aux logiciels créés par des employés dans l’exercice de leurs fonctions ou d’après les instructions de l’employeur |
| S4  | [Code de la propriété intellectuelle, art. L131-3 — Légifrance](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958)                                                   | En vigueur depuis le 03/07/1992, vérifié le 30/07/2026                   | Délimitation distincte des droits cédés et de leur étendue, destination, lieu et durée                                           |
| S5  | [RGPD — EUR-Lex](https://eur-lex.europa.eu/eli/reg/2016/679/oj?locale=fr)                                                                                                               | Règlement (UE) 2016/679, texte officiel relu le 30/07/2026               | Art. 28 : encadrement du sous-traitant ; art. 32 : sécurité adaptée au risque                                                    |
| S6  | [CNIL — Sécurité : gérer la sous-traitance](https://www.cnil.fr/fr/securite-gerer-la-sous-traitance)                                                                                    | Page datée du 14/03/2024, consultée le 30/07/2026                        | Contrat art. 28, garanties vérifiables, sort des données à la fin de la prestation                                               |
| S7  | [CNIL — Guide de la sécurité des données personnelles 2024](https://www.cnil.fr/sites/cnil/files/2024-03/cnil_guide_securite_personnelle_2024.pdf)                                      | Édition 2024, consultée le 30/07/2026                                    | Comptes, habilitations, journalisation, maintenance, sauvegardes                                                                 |
| S8  | [CNIL — Sécurité : sauvegarder](https://www.cnil.fr/fr/securite-sauvegarder)                                                                                                            | Page officielle, consultée le 30/07/2026                                 | Sauvegarder ne suffit pas : protection et tests de restauration                                                                  |
| S9  | [ANSSI — Les fondamentaux de la sauvegarde des systèmes d’information](https://messervices.cyber.gouv.fr/documents-guides/anssi_fondamentaux_sauvegarde_systemes_dinformation_v1.1.pdf) | Version 1.1 du 27/11/2025, consultée le 30/07/2026                       | Stratégie, copies, protection, restauration et continuité                                                                        |
| S10 | [ANSSI — Recommandations relatives à l’administration sécurisée des SI](https://messervices.cyber.gouv.fr/guides/recommandations-relatives-ladministration-securisee-des-si)            | Page officielle, consultée le 30/07/2026                                 | Séparer et maîtriser les accès d’administration                                                                                  |
| S11 | [NIST SP 800-218 — SSDF v1.1](https://csrc.nist.gov/pubs/sp/800/218/final)                                                                                                              | **FINAL**, février 2022 ; toujours final au 30/07/2026                   | Pratiques de développement sécurisé et preuve de processus                                                                       |
| S12 | [NIST SP 800-218 Rev.1 — SSDF v1.2](https://csrc.nist.gov/pubs/sp/800/218/r1/ipd)                                                                                                       | **Initial Public Draft**, publié le 17/12/2025 ; non final au 30/07/2026 | Signal d’évolution uniquement ; aucune présentation comme norme finale                                                           |
| S13 | [OWASP — Secrets Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html)                                                            | Référentiel vivant, consulté le 30/07/2026                               | Inventaire, rotation et révocation des secrets                                                                                   |
| S14 | [OWASP ASVS](https://owasp.org/www-project-application-security-verification-standard/)                                                                                                 | Version stable 5.0.0, publiée le 30/05/2025, vérifiée le 30/07/2026      | Trame possible de vérification, sans prétendre à une certification                                                               |

### Statut des sources

- S1 à S6 ont été relues sur les sources officielles le 30 juillet 2026 et
  doivent encore faire l’objet d’un contrôle daté si l’intégration ou la
  publication intervient plus tard.
- S7 à S14 guident les contrôles techniques ; ils ne prouvent pas à eux seuls
  la conformité d’une application particulière.
- La version 1.2 du SSDF reste un brouillon initial. Toute phrase qui la
  présenterait comme finale serait fausse.

## 4. Registre des affirmations

| ID  | Affirmation publiable                                                                                                              | Source / preuve                           | Statut                | Garde-fou                                                                   |
| --- | ---------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- | --------------------- | --------------------------------------------------------------------------- |
| C1  | Posséder une archive du dépôt ne démontre pas que la nouvelle équipe sait produire une version installable.                        | S11 + test reproductible propre au projet | VALIDÉ                | Formuler comme critère opérationnel, pas comme obligation légale            |
| C2  | Une sauvegarde n’est une preuve de reprise qu’après une restauration testée dans un environnement isolé et documentée.             | S8, S9                                    | VALIDÉ                | Ne promettre ni RPO ni RTO générique                                        |
| C3  | Les comptes d’administration, secrets et journaux doivent être identifiés, limités, transférés puis révoqués selon le rôle.        | S7, S10, S13                              | VALIDÉ                | Ne jamais demander de secret dans l’outil public                            |
| C4  | Un contrat avec un sous-traitant doit encadrer les obligations de l’article 28 et le sort des données en fin de prestation.        | S5 art. 28, S6                            | VALIDÉ                | Responsable du traitement ; délégué à la protection des données si concerné |
| C5  | L’article 32 du RGPD impose des mesures appropriées au risque, sans fournir une recette universelle.                               | S5 art. 32                                | VALIDÉ                | Pas de badge « conforme RGPD »                                              |
| C6  | Sous réserve de L122-6-1, le droit d’exploitation comprend notamment reproduction, adaptation et modification.                     | S1                                        | VALIDÉ AU 30/07/2026  | Ne pas conclure sur un contrat concret                                      |
| C7  | L’article L122-6-1 ne crée pas un droit universel de reprise ou de modification.                                                   | S2                                        | VALIDÉ AU 30/07/2026  | STOP juriste avant conclusion                                               |
| C8  | L’article L113-9 ne transfère pas automatiquement les droits relatifs à tout logiciel produit par un freelance ou une agence.      | S3                                        | VALIDÉ AU 30/07/2026  | Distinguer salarié, indépendant, société et chaîne de cession               |
| C9  | Une cession doit délimiter distinctement les droits transférés et préciser son étendue, sa destination, son lieu et sa durée.      | S4                                        | VALIDÉ AU 30/07/2026  | Lecture contractuelle humaine obligatoire                                   |
| C10 | Un déploiement réussi une fois ne suffit pas ; la procédure, le retour arrière et les responsabilités doivent être reproductibles. | S7, S11 + preuve projet                   | VALIDÉ COMME PRATIQUE | Pas de fréquence ou délai universel                                         |
| C11 | La version finale courante du SSDF est la v1.1 ; la Rev.1 / v1.2 reste Initial Public Draft depuis le 17/12/2025.                  | S11, S12                                  | VALIDÉ AU 30/07/2026  | Afficher les deux statuts et leurs dates                                    |
| C12 | Le test de relève limite ou reporte la reprise lorsqu’une preuve critique manque, sans compensation par des points ailleurs.       | Architecture de décision du guide         | CHOIX ÉDITORIAL       | Méthode propre au guide ; ne pas l’appeler norme ou certification           |
| C13 | Une preuve reste limitée à la version, au volume, à l’environnement et aux dépendances réellement testés.                          | S11 + protocole propre au guide           | VALIDÉ COMME PRATIQUE | Nouveau cas non démontré = inconnu, pas extension automatique               |

## 5. Analyse contradictoire

### Objection A — « Le dépôt Git est livré, donc la reprise est possible »

Un dépôt peut être incomplet, dépendre d’un dépôt privé de dépendances, d’un
secret détenu par une seule personne, d’une version d’exécution obsolète ou
d’une étape manuelle non documentée. La preuve attendue n’est pas la présence du
dépôt : c’est une construction propre, répétable, à partir des éléments remis.

### Objection B — « La production tourne, donc le déploiement est maîtrisé »

L’instance courante peut avoir été créée par une personne partie, avec une
procédure non rejouable. La reprise exige au minimum une démonstration contrôlée
hors production, une observation des journaux et une stratégie de retour
arrière adaptée au système réel.

### Objection C — « Il existe des sauvegardes, donc le risque est couvert »

Une copie peut être incomplète, chiffrée avec une clé indisponible, non
restaurable ou incompatible avec la version courante. La preuve utile est un
compte rendu de restauration : périmètre, date, environnement, résultat,
écarts, responsable et prochaine vérification.

### Objection D — « Le contrat payé donne automatiquement tous les droits »

Le paiement, la possession de fichiers et la titularité de droits sont trois
questions distinctes. Le régime dépend notamment de l’auteur, de son statut,
des clauses, de la chaîne de cession et de l’usage prévu. Le guide peut révéler
un doute ; seul un juriste peut conclure sur le dossier.

### Objection E — « Une bonne équipe compensera les accès manquants »

Une compétence déclarée ne remplace pas une clé de signature, un compte
d’hébergement, un droit sur le code, une sauvegarde restaurable ou le moyen de
révoquer l’ancien prestataire. Un manque critique conduit à une mission
limitée, un report ou un refus.

### Objection F — « Un score de 80 % suffit »

Une moyenne ferait disparaître la différence entre une documentation faible et
une impossibilité de restaurer les données. L’outil retient donc quatre états
par preuve — non renseigné, partiel, démontré, bloqué — et applique la règle la
plus prudente.

## 6. Architecture éditoriale retenue

### Ouverture

Scène concrète : le logiciel tourne encore, l’ancien prestataire se retire et
le nouveau candidat demande l’accès au dépôt. La réponse courte explique que la
signature durable doit attendre cinq démonstrations indépendantes.

### Bloc 1 — Avant la première modification

- nommer un responsable de la décision ;
- préserver dépôt, journaux, contrats, factures, exports et sauvegardes ;
- geler les changements non nécessaires ;
- cartographier production, données, dépendances et comptes ;
- séparer les faits observés des déclarations.

### Bloc 2 — Le test de relève et ses cinq capacités

1. **Observer** : schéma des serveurs, services et flux, versions, métriques,
   journaux, incidents et dépendances accessibles sans compte personnel opaque.
2. **Construire** : version installable créée depuis un environnement propre,
   avec dépendances et version d’exécution identifiées.
3. **Déployer** : essai contrôlé hors production, procédure datée, contrôle
   post-déploiement et retour arrière explicite.
4. **Restaurer** : sauvegarde testée en environnement isolé, intégrité et
   limites consignées.
5. **Sortir** : droits, données, comptes, secrets, documentation, révocations et
   conditions de restitution organisés.

### Bloc 3 — Le dossier de reprise transmissible

Tableau « élément / preuve acceptable / signal d’arrêt / propriétaire » pour :

- dépôts et historique ;
- dépendances, dépôts de dépendances et licences ;
- environnements et hébergement ;
- base, fichiers et sauvegardes ;
- chaîne automatique de construction et de déploiement, signatures et secrets ;
- supervision, alertes et journaux ;
- contrats, auteurs et cessions ;
- sous-traitants et transferts de données ;
- documentation d’exploitation ;
- procédure de sortie et révocations.

### Bloc 4 — Outil local

Le lecteur qualifie chaque preuve. Aucun champ libre sensible, aucune réponse
envoyée par le composant, aucun score, aucune estimation de prix ou de délai.

### Bloc 5 — Décider sans forcer la reprise

- cinq preuves démontrées : candidat à une bascule encadrée, après validation
  humaine ;
- une ou plusieurs preuves partielles : reprise limitée à la stabilisation ou
  à l’investigation ;
- preuve non renseignée : reporter la décision ;
- preuve bloquée : STOP, ne pas signer une reprise durable ;
- doute de droits ou contrat : STOP juriste ;
- doute sur les données personnelles : STOP responsable du traitement, avec le
  délégué à la protection des données s’il est désigné ou si son avis est requis.

### Bloc 6 — Séquence de démonstration

Une séquence conditionnelle sans délai arbitraire :

1. préserver et inventorier ;
2. reproduire la construction ;
3. observer un environnement représentatif ;
4. restaurer une copie isolée ;
5. déployer un changement réversible à faible portée ;
6. simuler la sortie et les révocations ;
7. tenir une revue de décision documentée.

### Bloc 7 — Juridique et données

Le guide distingue :

- droit d’utiliser ;
- droit de reproduire, adapter ou modifier ;
- titularité et chaîne de cession ;
- obligations de sous-traitance ;
- restitution ou destruction des données ;
- maintien des preuves nécessaires.

Toute conclusion appliquée à un dossier concret reste un STOP juriste ou
responsable du traitement, avec le délégué à la protection des données lorsqu’il
est concerné.

### Bloc 8 — FAQ

Catégories prévues :

- « Décider » ;
- « Prouver » ;
- « Contrat et données ».

Les réponses réutilisent exactement les mêmes faits que le corps de page et le
JSON-LD.

## 7. Spécification de l’outil

### Entrées

Pour chacune des cinq capacités :

- `unknown` — non renseigné ;
- `partial` — élément présent, démonstration incomplète ;
- `proved` — démonstration reproduite et preuve datée ;
- `blocked` — dépendance ou droit indisponible.

### Ordre de décision

1. si une capacité est `blocked` : `STOP` ;
2. sinon, si une capacité est `unknown` : `REPORTER` ;
3. sinon, si une capacité est `partial` : `REPRISE LIMITÉE` ;
4. sinon : `CANDIDAT À UNE BASCULE ENCADRÉE`.

### Sorties

- verdict ;
- capacités concernées ;
- prochaine action prudente ;
- rappel que le résultat n’est ni un audit, ni un avis juridique, ni une
  certification.

### Interdictions

- aucun envoi des réponses par le composant ;
- aucun stockage ;
- aucun nom d’entreprise, mot de passe, secret ou donnée personnelle ;
- aucun score numérique ;
- aucun prix, délai, SLA ou probabilité ;
- aucun verdict « conforme ».

## 8. Direction visuelle

Une illustration originale représente les cinq capacités du test de relève
reliées au procès-verbal de reprise. La couleur ambre matérialise une validation
requise ; le rouge est réservé au STOP. Les trois ratios doivent rester lisibles
sans dépendre d’une légende dans le corps :

- 16:9 pour l’ouverture de l’article ;
- 4:3 pour les surfaces de partage ;
- 1:1 pour les cartes et données structurées ;
- image OG générée par la route Next dédiée.

Texte alternatif prévu :

> Schéma du test de relève d’un logiciel métier : observer, construire,
> déployer, restaurer et organiser la sortie avant le procès-verbal de reprise.

## 9. Maillage et CTA

Liens autorisés lorsqu’ils servent la décision :

- `/services/audit-technique` pour cadrer une investigation ;
- `/services/maintenance-evolution` pour comprendre la suite possible après la
  preuve de reprise ;
- `/demarrer-un-projet` comme CTA principal.

Le guide ne reprend aucune promesse de délai, de prix, d’équipe, de SLA, de
certification ou de disponibilité issue des pages service.

### 9.1 Maillage entrant proposé — à intégrer dans les fichiers partagés

Ces ajouts ne sont pas réalisés dans ce passage. Ils sont proposés avec des
ancres précises, sans changer la promesse commerciale des pages service :

- `src/components/maintenance-evolution/sections/what-we-do.ts` : dans la carte
  `<article data-family="handover">`, après la phrase « avant de définir une
  reprise progressive », ajouter « Le
  [test de relève avant engagement durable](/guides/reprendre-logiciel-metier-existant)
  vérifie séparément cinq capacités avant de signer. » L’ancre exacte proposée
  est **test de relève avant engagement durable**.
- `src/components/maintenance-evolution/sections/faq.ts` : dans la réponse à
  « On a déjà un freelance / un prestataire, comment ça se passe ? », après
  « une documentation partagée », ajouter « Avant une reprise durable, consultez
  le [test de relève du logiciel
  existant](/guides/reprendre-logiciel-metier-existant). » L’ancre exacte
  proposée est **test de relève du logiciel existant**.

## 10. Inconnues et STOP de publication

Les champs suivants restent volontairement inconnus jusqu’à leur contrôle :

- identité des auteurs et statut salarié, indépendant ou sous-traitant ;
- chaîne complète des cessions ;
- licences et conditions des dépendances ;
- qualité réelle des sauvegardes et date du dernier test ;
- propriétaires actuels des comptes, domaines, dépôts de dépendances et clés ;
- flux de données et sous-traitants ;
- exigences métier de continuité ;
- valeur contractuelle des documents remis ;
- date réelle de première publication ;
- temps de lecture mesuré sur la version intégrée.

Le guide ne doit jamais convertir ces inconnues en suppositions.

## 11. Intégration partagée proposée — hors périmètre P1

Le passage P1 ne modifie ni `src/lib/guides.ts`, ni les redirections, ni le hub,
ni le sitemap. L’intégrateur principal devra :

1. supprimer l’entrée de redirection de
   `src/lib/legacy-guide-redirects.ts` qui envoie
   `reprendre-logiciel-metier-existant` vers
   `/services/maintenance-evolution` ;
2. ajouter une `GuideEntry` canonique dans `src/lib/guides.ts` ;
3. fixer la date réelle de publication au moment du déploiement ;
4. mesurer le temps de lecture après intégration ;
5. exécuter les tests de catalogue, redirections, sitemap, hub et build.

Entrée candidate, avec les deux valeurs STOP explicites :

```ts
{
  slug: "reprendre-logiciel-metier-existant",
  title: "Reprendre un logiciel métier : le test de relève",
  cardTitle: "Reprendre un logiciel métier existant",
  metaDescription:
    "Faites le test de relève : vérifiez code, accès, déploiement, sauvegardes, données et contrat avant de confier votre logiciel à une nouvelle équipe.",
  cardDescription:
    "Un test de relève en cinq capacités et un procès-verbal de reprise pour décider de reprendre, limiter la mission ou reporter la bascule.",
  heroTitle:
    "Reprendre un logiciel métier existant sans signer à l’aveugle",
  section: "Maintenance applicative et reprise",
  datePublished: "__DATE_REELLE_DE_PREMIERE_PUBLICATION__",
  dateModified: "__DATE_REELLE_DE_MODIFICATION__",
  readTimeMin: 0, // STOP : mesurer après intégration
  articleImagePaths: [
    "/guides/reprendre-logiciel-metier-existant/reprise-logiciel-16x9.webp",
    "/guides/reprendre-logiciel-metier-existant/reprise-logiciel-4x3.webp",
    "/guides/reprendre-logiciel-metier-existant/reprise-logiciel-1x1.webp",
  ],
  editorialStatus: "ready-for-human-review",
}
```

Cette entrée est une proposition d’intégration, pas une deuxième source de
vérité locale.

## 12. Contrôles P1 prévus

- test unitaire des quatre verdicts et de la priorité des blocages ;
- type-check ciblé ou global si disponible ;
- lint ciblé ;
- validation des dimensions et formats WebP ;
- vérification des URLs internes et des ancres ;
- recherche de termes interdits : prix, délai garanti, SLA, certification,
  conformité automatique ;
- recherche de résidus géographiques ou d’autres guides ;
- calcul d’un manifeste SHA-256 slug-only après stabilisation ;
- BAT navigateur et intégration des surfaces partagées délégués aux passages
  ultérieurs.

## 13. Verdict de recherche

**RECHERCHE GELÉE — architecture prête pour production P1.**

Le dossier autorise l’écriture de la page et de l’outil, mais n’autorise ni la
publication, ni une conclusion juridique, ni une affirmation de conformité.

## 14. Journal P2 — vérification contradictoire

### 14.1 Gel et méthode

- Date du contrôle : 30 juillet 2026.
- Snapshot d’entrée : manifeste P1 vérifié avant toute correction.
- Périmètre : dossier, page, FAQ visible, outil, tests, métadonnées candidates,
  JSON-LD autorisé, image OG et trois ratios d’illustration.
- Affirmations contrôlées : C1 à C13.
- Recherche : sources primaires ou référentiels officiels uniquement pour les
  faits juridiques, données et sécurité.

### 14.2 Contradictions et corrections

- L122-6 a été reformulé avec sa réserve explicite à L122-6-1 ; la page ne
  présente plus reproduction, adaptation et modification comme une règle sans
  exception.
- L122-6-1 distingue désormais les actes nécessaires à l’usage selon la
  destination du logiciel et la réserve contractuelle de correction, sans en
  déduire un droit universel de reprise.
- Les versions en vigueur de L122-6, L122-6-1, L113-9 et L131-3 ont été relues
  sur Légifrance et datées. Le lien EUR-Lex pointe vers le texte officiel du
  RGPD.
- La fin de sous-traitance distingue effacement ou renvoi au choix du
  responsable du traitement et réserve l’hypothèse d’une conservation imposée
  par le droit.
- Le DPO n’est plus présenté comme un intervenant obligatoire dans tous les
  dossiers : le responsable du traitement reste nommé, avec le DPO lorsqu’il
  est désigné ou concerné.
- Une mission limitée doit être autorisée et réversible ; elle ne permet pas une
  modification dont le droit reste contesté.
- Une preuve est limitée à la version, au volume, à l’environnement et aux
  dépendances testés. Doublement de charge, indisponibilité d’un tiers ou
  changement d’architecture redeviennent des inconnues jusqu’à démonstration.
- Le guide précise que les cinq portes ne valident ni devis ni coût total. Les
  licences, l’intégration, les tests, la coexistence, la formation, le support,
  la maintenance et la sortie restent à vérifier séparément ; aucun coût
  inconnu n’est transformé en zéro.
- « Données envoyées » a été remplacé par « réponses envoyées » : l’affirmation
  porte sur le questionnaire, pas sur toute l’infrastructure du site.

### 14.3 Recalcul indépendant et cas adversariaux

L’outil n’accepte ni montant, ni durée, ni pourcentage. Les contrôles TVA,
HT/TTC, horizon, double compte et valeur non finie ne s’appliquent donc pas à
un calcul financier. Le moteur discret a en revanche été recomposé et testé :

- les `4^5`, soit 1 024 combinaisons possibles, ont été parcourues ;
- priorité vérifiée : `blocked` → `STOP`, puis `unknown` → `REPORTER`, puis
  `partial` → `REPRISE_LIMITEE`, sinon `BASCULE_ENCADREE` ;
- les portes concernées sont recalculées pour chaque combinaison ;
- objet incomplet, `null`, `undefined`, zéro, négatif, décimal, `NaN`,
  `Infinity` et chaîne non reconnue sont traités comme inconnus ;
- aucun état invalide ne peut produire le verdict le plus favorable.

Le dernier point corrige un faux vert possible dans P1 : une valeur d’exécution
non reconnue ne correspondait à aucun état et pouvait laisser toutes les portes
paraître démontrées.

### 14.4 Cohérence éditoriale et technique

- Corps, tableau des quatre issues, FAQ et outil conservent les mêmes quatre
  verdicts et le même ordre de prudence.
- Le NIST SSDF v1.1 reste la publication finale de février 2022 ; la Rev.1 /
  v1.2 publiée le 17 décembre 2025 reste un `Initial Public Draft`.
- OWASP ASVS 5.0.0 est la version stable vérifiée ; il reste une trame de
  vérification et n’est pas présenté comme une certification.
- Les FAQ restent visibles sans balisage `FAQPage`. Les seules données
  structurées du guide sont `Article` et `BreadcrumbList`, alimentées par
  l’entrée canonique à intégrer.
- Aucun tarif, calendrier de migration, score de dette ou comparatif de
  prestataires n’a été ajouté. Les frontières avec les guides voisins sont
  conservées.
- Les trois images WebP ont été inspectées ; leur information ne dépend pas
  uniquement de la couleur et les SVG sources sont valides.

### 14.5 Contrôles exécutés

- Vitest ciblé : 1 fichier, 16 tests, tous verts.
- ESLint ciblé : vert.
- TypeScript `--noEmit` : vert.
- Prettier ciblé : vert.
- `git diff --check` slug-only : vert.
- `xmllint` sur les trois SVG : vert.
- Recherche de schémas interdits et de téléchargements XLS, XLSX ou CSV :
  aucun résultat.

### 14.6 Limites et verdict

La route ne peut pas faire l’objet d’un BAT fiable avant l’intégration de
`src/lib/guides.ts` et la suppression de la redirection historique dans
`src/lib/legacy-guide-redirects.ts`. Ces fichiers partagés, le build, le BAT et
la publication restent hors périmètre P2.

P0 après correction : **0**. P1 après correction : **0**.

Verdict conditionnel : **PRET_POUR_G2**, sous réserve de génération et de
validation du manifeste
`docs/research/manifests/reprendre-logiciel-metier-existant-p2.sha256` sur ce
snapshot exact.

## 15. Journal P3 — polish rédactionnel

### 15.1 Méthode et invariants

- Date du passage : 30 juillet 2026.
- Périmètre relu : héros, sommaire, corps, tableaux, outil, FAQ, CTA et
  métadonnées visibles dans la page.
- Le début a été relu comme un dirigeant pressé : la réponse et les conditions
  de STOP ou de report sont désormais visibles dès le héros.
- Les paragraphes et transitions ont été vérifiés pour ne porter qu’une idée
  principale, sans ajouter de fait ni de recommandation.
- Les quatre issues et leur ordre de prudence restent inchangés :
  `STOP` → `REPORTER` → `REPRISE_LIMITEE` → `BASCULE_ENCADREE`.

### 15.2 Corrections représentatives

- Le héros passe de « Avant de confier durablement… » à « Ne signez pas une
  reprise durable tant que… ». Il répond avant d’expliquer et rend immédiatement
  visibles le STOP et le report.
- L’ouverture conserve le scénario du lundi matin, mais retire la question
  rhétorique et demande directement ce que la nouvelle équipe peut démontrer.
- « Constituez un coffre de reprise » devient « Rassemblez les preuves dans un
  dossier transmissible ». Le contenu ne change pas ; la métaphore interne ne
  gêne plus la compréhension du H2.
- « Passer les cinq portes sans moyenne rassurante » devient « Tester chaque
  capacité sans calculer de moyenne ». Le principe non compensable reste
  identique.
- Les expressions « porte verte », « STOP humain » et « Handoff » deviennent
  respectivement « capacités démontrées », « Droits et données » et
  « Transmission ».
- La FAQ sur la maintenance durable répond désormais « Non » dès sa première
  phrase lorsque la preuve critique reste bloquée ou non renseignée, avant de
  décrire le seul cadre d’une mission limitée.
- Le statut NIST `Initial Public Draft` est conservé mot pour mot et expliqué
  une fois par « projet public initial ».
- Des transitions courtes relient la préservation des faits aux démonstrations,
  puis le dossier de reprise au questionnaire, sans répéter le plan.
- Le libellé de résultat de l’outil parle de « capacités concernées » ; son
  moteur, ses états et ses décisions ne changent pas.

### 15.3 Faits et nuances protégés

- Aucun lien, source, article, date de vérification ou statut de publication
  NIST / OWASP n’a été retiré ni rendu plus certain.
- Les distinctions entre possession, droit d’usage et droit de modification
  sont intactes, ainsi que le `STOP juriste`.
- Les obligations et arbitrages liés aux données personnelles restent attribués
  au responsable du traitement, avec le DPO lorsqu’il est concerné.
- L’ordre de démonstration, la séparation hors production / production et les
  limites de périmètre des preuves sont inchangés.
- Aucun prix, délai universel, SLA, certification, score moyen ni promesse de
  conformité n’a été introduit.
- Les frontières anti-cannibalisation et l’absence de téléchargement XLS, XLSX
  ou CSV sont conservées.

### 15.4 Contrôles P3

- Le moteur de décision et ses tests n’ont pas été modifiés ; leur empreinte
  reste celle du manifeste P2.
- Vitest ciblé : 1 fichier, 16 tests, tous verts.
- ESLint ciblé : vert.
- TypeScript `--noEmit` : vert.
- Prettier ciblé : vert.
- `git diff --check` sur le dossier suivi et recherche des espaces finaux sur
  tout le périmètre slug : verts.
- `xmllint` sur les trois SVG : vert.
- Les neuf fichiers non édités par P3 correspondent encore à leurs empreintes
  du manifeste P2.
- Build, BAT navigateur et intégration des fichiers partagés restent hors
  périmètre de P3.

P0 : **0**. P1 : **0**.

Verdict P3 : **PRET_POUR_G3**, sous réserve de génération et de validation du
manifeste
`docs/research/manifests/reprendre-logiciel-metier-existant-p3.sha256` sur ce
snapshot exact.

## 16. Journal P4 — antipasse IA

### 16.1 Snapshot et méthode

- Date du passage : 30 juillet 2026.
- Le manifeste P3 a été vérifié intégralement avant la première correction.
- Le héros, les neuf H2, les tableaux, les encadrés, les deux formulaires à
  recopier, l’outil, ses quatre sorties, les FAQ, les CTA et l’image OG ont été
  relus comme un ensemble.
- Les titres ont aussi été comparés à ceux de
  `automatiser-processus-metier` et
  `valider-idee-saas-avant-developper`.
- Le prompt DOCX de passe 4 a été extrait intégralement. Ses instructions
  héritées de Hagnéré Patrimoine, son orchestration parallèle et ses contrôles
  par serveur n’ont pas été appliqués : le prompt maître du dépôt et le
  périmètre P4 restent la règle.

### 16.2 Motifs repérés

- Huit H2 sur neuf commençaient par un impératif. Pris isolément, chacun était
  clair ; lus à la suite, ils donnaient au guide une cadence de procédure
  générée.
- « Faites tenir la décision sur une page » reprenait presque mot pour mot le
  H2 « Faites tenir la décision sur une seule page » du guide sur
  l’automatisation des processus.
- Les deux CTA enchaînaient chacun trois bénéfices construits exactement de la
  même façon.
- « Ce point de départ préservé… » et « Ce dossier donne au
  questionnaire… » servaient surtout à annoncer la section suivante.
- « Démontrez d’abord, engagez-vous ensuite » ajoutait une symétrie de slogan à
  une règle déjà expliquée.
- « Une capture isolée ne ferme pas le risque » et plusieurs sorties de l’outil
  employaient un registre de cabinet plus abstrait que l’action demandée.
- Les mots « preuve », « capacité » et « décision » sont nombreux. Ils restent
  nécessaires au moteur de décision, mais n’avaient pas besoin d’occuper aussi
  les titres, les bénéfices et chaque transition.

### 16.3 Corrections

- Les H2 alternent désormais formulations déclaratives, constat et action. Le
  dernier devient « Le verdict doit se lire sans rouvrir tout l’audit », ce qui
  retire la proximité avec le guide voisin.
- Le scénario du lundi matin est explicitement annoncé comme fictif. Il ne
  comporte toujours ni identité, ni citation, ni résultat attribué à un client.
- Les deux transitions qui répétaient le plan ont été supprimées. Aucun fait
  n’en dépendait.
- Le rôle de la mission courte, le périmètre d’une preuve et la transmission du
  dossier sont formulés avec la tâche ou la limite réelle plutôt qu’avec un
  slogan.
- Les bénéfices des CTA ne forment plus deux triptyques d’infinitifs.
- Le questionnaire demande simplement « Où en est la reprise ? ». Ses messages
  STOP et bascule encadrée nomment l’intervenant ou l’étape suivante sans
  modifier le verdict.

### 16.4 Passages conservés et raison

- La série « observer, construire, déployer, restaurer, organiser la sortie »
  reste répétée aux endroits où elle définit le modèle. Ce n’est pas une
  triplette décorative : ces cinq capacités alimentent l’outil et sont
  non compensables.
- Le parallélisme des tableaux, des quatre états et des fiches à remplir est
  conservé. Il sert la comparaison et l’exécution.
- Les formulations juridiques prudentes, les réserves de L122-6-1, les STOP
  juriste et responsable du traitement, ainsi que la mention du DPO lorsqu’il
  est concerné, restent intactes.
- `Initial Public Draft`, SSDF v1.1 final et OWASP ASVS 5.0.0 gardent leur statut
  et leur date. Les formulations techniques ou administratives indispensables
  à ces faits n’ont pas été remplacées par un ton familier.
- Les quatre décisions conservent strictement leur ordre :
  `STOP` → `REPORTER` → `REPRISE_LIMITEE` → `BASCULE_ENCADREE`.

### 16.5 Contrôle final

- Faits, sources, liens, dates et registre d’affirmations : inchangés.
- Moteur, normalisation des entrées et tests adversariaux : inchangés.
- Exemples : un seul scénario d’ouverture, désormais signalé comme fictif ;
  aucun témoignage, aucune anecdote personnelle et aucune preuve sociale.
- Contradiction héros, corps, outil, tableau des issues, FAQ ou CTA : aucune
  détectée.
- Superlatif, autosatisfaction, conclusion récapitulative, promesse, prix,
  délai, SLA, certification ou téléchargement XLS/XLSX/CSV ajouté : aucun.
- Build, serveur et BAT navigateur : non exécutés dans cette passe, comme
  imposé par le périmètre P4. Ils restent liés à l’intégration des fichiers
  partagés.

### 16.6 Contrôles P4

- Vitest ciblé : 1 fichier, 16 tests, tous verts.
- ESLint ciblé : vert.
- TypeScript `--noEmit` : vert.
- Prettier ciblé : vert.
- `git diff --check` sur le fichier suivi et recherche des espaces finaux sur
  tout le périmètre slug : verts.
- `xmllint` sur les trois SVG : vert.
- P0 : **0**.
- P1 : **0**.

Verdict P4 : **PRET_POUR_G4**, sous réserve de génération et de validation du
manifeste
`docs/research/manifests/reprendre-logiciel-metier-existant-p4.sha256` sur ce
snapshot exact.

## 17. Journal de correction qualité — après NO_GO transversal

### 17.1 Traçabilité du contrôle

- Date de correction : 30 juillet 2026.
- Verdict d’entrée : `QUALITE_A_REPRENDRE`, 88/100, scorecard 15/20,
  P0 = 0 et P1 = 1 (pédagogie et jargon public).
- Snapshot P4 historique : 12/12 empreintes vérifiées avant la première
  correction. Le manifeste P4 n’est pas réécrit ; son empreinte propre est
  `f5f1e9101943e6c446cdb803b59987ab6528ba42b32336cea5edc06b5099b227`.
- Agents des cinq contrôles précédents :
  - P1 : `/root/reprise_p1_creation` ;
  - P2 : `/root/reprise_p2_verification` ;
  - P3 : `/root/reprise_p3_polish` ;
  - P4 : `/root/reprise_p4_antiai` ;
  - Q : `/root/reprise_q_transversal`.
- Correcteur distinct post-Q : `/root/reprise_quality_correction`.

### 17.2 Contrat de lecture et identité de la méthode

Le badge `TMA` est remplacé par le nom de la méthode. Les termes techniques
visibles qui obligeaient un décideur à traduire la page sont remplacés au fil
du texte par leurs formulations ordinaires : version installable, version
d’exécution, chaîne automatique de construction, schéma des serveurs, services
et flux, dépôt de dépendances, fichier exécutable et copie neuve du dépôt.
L’abréviation DPO est développée au premier emploi en « délégué à la protection
des données (DPO) ».

La méthode propre à cette page s’appelle désormais **test de relève**. Elle
conserve les cinq capacités non compensables et les quatre verdicts dans leur
ordre strict : `STOP` → `REPORTER` → `REPRISE_LIMITEE` →
`BASCULE_ENCADREE`. Son document de synthèse s’appelle
**procès-verbal de reprise**. Ces deux noms sont un choix éditorial destiné à
rendre la décision mémorisable ; ils ne désignent ni une norme, ni une
certification, ni une obligation légale.

### 17.3 Correction des surfaces publiques

- Le héros, les badges, la section des cinq capacités, l’outil, la fiche finale,
  la proposition de métadonnées et l’image OG nomment le test de relève.
- La fiche finale devient le procès-verbal de reprise ; elle conserve les
  responsables, dates, limites, STOP et inconnues.
- La digression détaillée sur les versions NIST est retirée du corps, car elle
  ne changeait aucun verdict. Les références NIST v1.1 finale et Rev.1 / v1.2
  `Initial Public Draft`, leurs liens, dates et statuts restent intacts dans le
  bloc de références et dans le présent dossier.
- Les trois SVG ne parlent plus de portes, d’environnement d’exécution en
  jargon, d’artefact ou de « STOP HUMAIN ». Ils présentent cinq capacités, une
  « VALIDATION REQUISE » et le procès-verbal de reprise. Les WebP sont
  régénérés à dimensions inchangées depuis ces SVG.
- Un test slug-only interdit le retour du jargon public relevé par Q, de
  « STOP HUMAIN » et de l’ancienne empreinte « cinq portes / décision sur une
  page ». Il ne lit pas les journaux historiques P2 à P4.

### 17.4 Invariants factuels et décisionnels

Les articles L122-6, L122-6-1, L113-9 et L131-3, le RGPD, les recommandations
CNIL, les statuts NIST final/brouillon et OWASP, leurs liens et dates de
vérification restent inchangés. Le STOP juriste et l’intervention du responsable
du traitement avec le délégué à la protection des données lorsqu’il est
concerné sont conservés. Le moteur garde la normalisation des valeurs invalides,
les 1 024 combinaisons et la priorité `STOP` → `REPORTER` →
`REPRISE_LIMITEE` → `BASCULE_ENCADREE`.

### 17.5 Maillage entrant à remettre à l’intégrateur

Les deux propositions détaillées en section 9.1 restent hors de ce passage :

- carte `article[data-family="handover"]` de
  `src/components/maintenance-evolution/sections/what-we-do.ts`, avec l’ancre
  **test de relève avant engagement durable** ;
- réponse « On a déjà un freelance / un prestataire, comment ça se passe ? »
  de `src/components/maintenance-evolution/sections/faq.ts`, avec l’ancre
  **test de relève du logiciel existant**.

### 17.6 Contrôles avant recontrôle Q

- Vitest ciblé : 2 fichiers, 36 tests, tous verts. Le moteur parcourt toujours
  les 1 024 combinaisons et les cas d’entrée invalide ; le second fichier
  contrôle le vocabulaire public et l’identité de la méthode.
- ESLint ciblé : 6 fichiers TypeScript/TSX, vert.
- TypeScript `--noEmit` : vert.
- Prettier : Markdown et TypeScript/TSX verts ; les trois SVG sont verts avec le
  parseur HTML explicite.
- `git diff --check` sur le dossier suivi et recherche des espaces finaux sur
  tout le périmètre texte slug-only : verts.
- `xmllint` : 3/3 SVG valides.
- WebP régénérés et dimensions confirmées : 16:9 en 3 200 × 1 800 px, 4:3 en
  2 400 × 1 800 px et 1:1 en 2 400 × 2 400 px.
- Inspection visuelle : 3/3 exports lisibles, sans texte coupé ni ancien
  vocabulaire visible.
- P0 après correction : **0**.
- P1 après correction : **0**.

Le build, le serveur, le BAT navigateur, l’intégration du catalogue et la
publication restent hors périmètre de cette correction. Le manifeste quality
doit figer ce snapshot exact après ces contrôles.

Verdict du correcteur : **PRET_POUR_RECONTROLE_Q**.

## 18. Réconciliation du statut — 18 août 2026

La revue humaine globale du 7 août 2026 a ouvert ce guide dans le registre
central. Le 18 août, sa route publique, son canonical, son statut `index,
follow`, sa présence dans le hub, le sitemap et `llms.txt` ont été vérifiés.
La batterie courante est verte : `check:seo` 206/206, suite globale 1 163/1 163,
TypeScript, ESLint et build de production. Le statut de référence est donc
`PUBLISHED`; les phrases de la section 17 décrivent le snapshot antérieur et
ne doivent plus être lues comme l'état de diffusion actuel. Cette vérification
ne prouve ni exploration, ni indexation Search Console, ni classement.
