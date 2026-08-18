# Dossier de recherche — `cahier-des-charges-application-mobile`

> **Statut au 25 juillet 2026 : reconstitution documentaire, P1 à
> reprendre.** La page actuelle est un bon guide d'amorçage, mais elle ne livre
> pas encore le modèle complet que son intention laisse attendre. Ce dossier
> archive les constats observés et les recherches rapportées par l'audit ; il
> ne certifie ni leur fraîcheur future, ni l'existence d'une ressource
> téléchargeable, ni une porte P1–P4.

## Journal des quatre passes

Propriétaire éditorial unique : à désigner.

| Passe                        | État            | Date                          | Responsable            | Snapshot                        | Blocages                                                                                      |
| ---------------------------- | --------------- | ----------------------------- | ---------------------- | ------------------------------- | --------------------------------------------------------------------------------------------- |
| 1. Recherche                 | **À reprendre** | 24/07/2026                    | à désigner             | page et audit listés ci-dessous | Rejouer demande, benchmark, règles stores/CNIL/WCAG ; figer le modèle et le cas commun.       |
| 2. Rédaction et intégration  | **À reprendre** | page existante                | à désigner             | page `f036e4…aa`                | Treize P1 hérités ; aucun DOCX/PDF/tableur réellement livré.                                  |
| 3. Contre-audit indépendant  | **À reprendre** | rapport initial du 24/07/2026 | autre agent            | audit `837b15…904`              | Le rapport précède la correction et n'a pas ouvert de ressource finale.                       |
| 4. Plume humaine et contrôle | **Bloquée**     | —                             | lecteur dirigeant + QA | —                               | P3 requise, puis téléchargement, ouverture, responsive, accessibilité, liens, build et route. |

### Manifeste documentaire observé

| Fichier                                                                             | SHA-256 au 24/07/2026                                              | Observation                                          |
| ----------------------------------------------------------------------------------- | ------------------------------------------------------------------ | ---------------------------------------------------- |
| `src/app/guides/cahier-des-charges-application-mobile/page.tsx`                     | `f036e49dcf9f34aca0317a76f5ea894b432d97d83b985fb2489a414a7e8b00aa` | Guide courant de dix sections.                       |
| `docs/audits/giga-audit-2026-07-24/guides/cahier-des-charges-application-mobile.md` | `837b15387ff74bf17f4ac6a1a55b4db72ec02a2004a0c6135ba903a622cb6904` | Giga-audit documentaire, sans modification du guide. |
| `docs/charte-qualite-guides.md`                                                     | `5ee616faa4959dc8ad2b0eb19a5b19ffbf53299b62665700093c5c176b0b8491` | Règles people-first et preuve.                       |
| `docs/workflow-maitre-guides-4-passes.md`                                           | `a3a8c8f1be5d5d60b096f251f22b27ae5526adb708c334c4d6f0b7b4270c60c4` | Portes et responsabilités.                           |

L'audit historique indique qu'aucun fichier Word, PDF, DOCX, CSV ni lien de
téléchargement n'était intégré à la route. Le présent dossier ne change pas ce
constat et ne crée aucun manifeste de validation.

## 1. Brief dirigeant

```text
Slug : cahier-des-charges-application-mobile
Statut : guide d'amorçage existant ; modèle de consultation non livré
Requête principale hypothétique : cahier des charges application mobile
Moment du parcours : cadrer avant prototype, consultation et devis
Lecteur : dirigeant de PME, responsable métier ou porteur de produit qui sait
          décrire un problème mais ne veut pas choisir une technologie à l'aveugle
Déclencheur : plusieurs prestataires posent des questions différentes ou
              chiffrent des objets incomparables
Question réelle : « Que dois-je écrire pour que trois équipes comprennent,
                   chiffrent et testent la même application ? »
Décision : produire un document transmissible, limiter la V1, comparer les
           hypothèses et savoir s'il faut une app, une PWA, un outil ou rien
Action sans contact : remplir un modèle avec exigences, preuves et responsables
CTA : relecture du document avant consultation, avec livrable et limites
Hors périmètre : choix automatique de stack, conseil juridique, audit de
                 sécurité complet, garantie d'acceptation par les stores
```

### Phrase réelle et réponse attendue

- **Phrase téléphone :** « J'ai une idée d'application, mais je ne sais pas
  jusqu'où décrire les écrans ni quoi demander sur les données, les stores et
  la maintenance pour obtenir des devis comparables. »
- **Réponse en une phrase :** décrivez le résultat métier, les utilisateurs,
  les parcours, les erreurs, les données, les appareils, la V1, les critères
  d'acceptation et la remise attendue ; laissez les prestataires justifier la
  solution technique.
- **Décision promise :** le lecteur repart avec un cahier qu'une équipe
  produit, mobile et métier peut relire sans interpréter trois projets
  différents.

### Contrat de langage humain

| Terme   | Traduction à donner au premier usage                                              |
| ------- | --------------------------------------------------------------------------------- |
| API     | façon documentée pour deux logiciels d'échanger des données                       |
| Backend | partie serveur qui gère données, règles et accès                                  |
| MVP     | première version réellement utilisable pour apprendre, pas maquette jetable       |
| PWA     | site installable pouvant imiter certains usages d'une app, avec des limites       |
| SLA     | engagements de support et de délai selon la gravité                               |
| RPO/RTO | quantité de données qu'on accepte de perdre et temps maximal de remise en service |
| TCO     | coût total de conception, exploitation, support, évolution et sortie              |

Les 150 premiers mots doivent partir de « obtenir trois devis sur le même
projet », dire qu'un dirigeant n'a pas à choisir Flutter, React Native ou natif
en premier, et annoncer le modèle éditable réellement disponible.

## 2. Couverture de la page actuelle

### Ce qu'elle fait bien

- Elle part du problème réel : quoi écrire pour obtenir un devis.
- Elle privilégie utilisateurs, situations, actions et résultats avant la
  technologie.
- Elle propose dix blocs : entreprise/problème, utilisateurs, parcours, V1,
  plateformes, contraintes mobiles, données, publication, maintenance,
  budget/acceptation.
- Elle montre un parcours terrain hors ligne avec photos et synchronisation.
- Elle demande d'écrire erreurs, permission refusée, paiement refusé et produit
  indisponible.
- Elle protège les comptes Apple/Google, le code, les données et les accès.
- Elle compare app mobile, web et PWA.
- Elle étiquette l'exemple « Fleurs d'Aix » et la fourchette 20–28 k€ comme
  fictifs.
- Le CTA ne promet ni prix ni technologie.

### Ce que le livrable ne permet pas encore

- Aucun document éditable n'est fourni : le lecteur doit recréer les champs.
- Les objectifs ne comportent pas valeur de départ, cible et horizon.
- Les rôles n'ont pas de matrice actions/données/permissions.
- Les parcours n'ont ni ID, ni précondition, ni erreur, ni preuve
  d'acceptation.
- La V1 n'est pas priorisée par valeur, effort, dépendance et risque.
- Backend, API, intégrations, webhooks, environnements et modèle de données
  restent trop discrets.
- Le hors-ligne ne dit pas qui gagne en cas de conflit ni comment reprendre.
- Le parc iOS/Android, versions, tailles, tablettes, réseau et pays n'est pas
  formalisé.
- Les stores ne couvrent pas certificats, IDs, pistes de test, fiches privacy,
  transferts et gestion d'un rejet.
- Sécurité, RGPD, accessibilité et analytics ne deviennent pas des critères
  testables.
- Support, sévérité, sauvegardes, RPO/RTO et mises à jour OS ne sont pas
  chiffrés.
- La remise de sortie n'est pas une checklist exécutable.
- Le devis fictif 20–28 k€ n'a ni décomposition, ni récurrence, ni TCO.

## 3. Frontières et cannibalisation

| Page voisine                                   | Intention                                         | Frontière                                                                                             |
| ---------------------------------------------- | ------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `/guides/combien-coute-une-application-mobile` | définir budget, exploitation et rentabilité       | ici, produire le document qui permet ce chiffrage                                                     |
| `/guides/combien-coute-un-saas`                | budgéter un produit SaaS et son modèle économique | ici, spécifier une application mobile ; le SaaS peut être son backend mais n'est pas la même décision |
| `/services/application-mobile`                 | présenter l'offre commerciale Hagnéré Code        | le guide doit rester utilisable avant tout contact et accepter « pas d'app »                          |
| `/methode`                                     | expliquer l'accompagnement                        | le guide fournit le livrable de cadrage et ses critères, pas une présentation de processus générique  |

**Justification d'une URL distincte :** l'intention est documentaire et
précontractuelle : transformer un besoin en exigences compréhensibles,
chiffrables et testables.

À vérifier en P1 : requêtes « modèle », « exemple », « PDF », « Word »,
« application métier », « spécifications fonctionnelles » et chevauchement
avec le cahier des charges SaaS.

## 4. Recherche et benchmark documentés

L'audit indique un benchmark France, États-Unis, Royaume-Uni, Australie et
DACH au 24 juillet 2026. Les pages commerciales sont utilisées pour leur
couverture et leur format, pas comme preuves d'un tarif français.

### Pages rapportées dans l'audit

| Marché / ressource         | Apport historique                                   | Limite                                    |
| -------------------------- | --------------------------------------------------- | ----------------------------------------- |
| AquilApp, France           | huit sections, agilité et erreurs                   | agence ; rouvrir contenu/date             |
| La Fabrique du Net, France | modèle et backend/API                               | agrégateur commercial                     |
| TikupMedia, France         | onze sections et exemple                            | retour d'expérience revendiqué à vérifier |
| Apptitude, France/Suisse   | besoins avant solution, web/mobile                  | source commerciale                        |
| LegalClarity, États-Unis   | modèle Word, monétisation, maintenance, bugs        | droit et marché US non transposables      |
| Mind Studios, États-Unis   | niveaux d'exigences, architecture, analytics        | contenu technique commercial              |
| guides UK                  | business, functional et non-functional requirements | corpus exact à reconsigner                |
| guides Australie           | devices, stores, support                            | prix et droit non transposables           |
| appels/spécifications DACH | identifiants, acceptation, interfaces, données      | adapter la complexité aux PME             |

**État :** corpus rapporté, non rouvert pendant cette reconstitution. P1 doit
enregistrer URL, extrait utile, date, biais et saturation. La ligne générique
« guides UK/Australie/DACH » est insuffisante comme journal reproductible et
doit être remplacée par des pages exactes ou retirée.

### Gain d'information à viser

Une ressource française qui :

1. reste lisible par un dirigeant ;
2. sépare besoin métier, comportement observable et qualité attendue ;
3. produit des exigences traçables avec responsable et preuve ;
4. permet à trois prestataires de noter les mêmes inclusions/exclusions ;
5. contient un TCO 12/36/60 et une remise de sortie ;
6. peut conclure qu'une PWA ou un outil existant suffit.

## 5. Fiche de preuves et fraîcheur

Les URLs suivantes sont présentes dans la page ou rapportées comme revérifiées
par l'audit du 24 juillet. Elles doivent être rouvertes à la date de P1.

| Fait ou obligation à borner                          | Source                                                             | Nature                                                  | Conséquence                                 |
| ---------------------------------------------------- | ------------------------------------------------------------------ | ------------------------------------------------------- | ------------------------------------------- |
| Apple Developer Program, 99 $/an rapportés           | `https://developer.apple.com/programs/`                            | source primaire Apple, prix/devise/taxes volatils       | mettre variable, date et type de compte     |
| App Review, délai moyen rapporté, complétude requise | `https://developer.apple.com/distribute/app-review/`               | source primaire Apple                                   | ne jamais garantir une date de revue        |
| apps anciennes et mise à jour                        | `https://developer.apple.com/support/app-store-improvements/`      | règle Apple datée                                       | prévoir veille et budget de maintenance     |
| confidentialité Apple                                | `https://developer.apple.com/app-store/user-privacy-and-data-use/` | source primaire                                         | documenter données, SDK et fiches           |
| tests Google Play                                    | support Google Play, réponse 14151465                              | source primaire à portée de compte précise              | ne pas universaliser 12 testeurs/14 jours   |
| frais Google Play                                    | support, réponse 11131145                                          | source primaire volatile                                | séparer frais fixe, commission et paiement  |
| niveau API cible Google Play                         | support, réponse 11926878                                          | source primaire ; l'audit rapporte API 36 au 31/08/2026 | créer une veille plutôt qu'un chiffre figé  |
| permission Android notifications                     | documentation Android                                              | source primaire                                         | décrire refus, nouvelle demande et réglages |
| recommandations CNIL mobiles                         | `https://www.cnil.fr/fr/recommandations-applications-mobiles`      | autorité française                                      | transformer en registre, pas simple lien    |
| WCAG2Mobile                                          | `https://www.w3.org/TR/wcag2mobile-22/`                            | guidance W3C                                            | ajouter critères mobile et tests humains    |

### Hypothèses et contradictions

- La fourchette fictive 20–28 k€ ne peut pas devenir un ordre de marché.
- « iPhone et Android » ne définit pas le parc à tester.
- Un compte store au nom de l'entreprise ne suffit pas si certificats, clés,
  bundle IDs et accès de livraison restent ailleurs.
- Une app « hors ligne » n'est pas spécifiée sans cache, queue, conflits,
  chiffrement, reprise et retour utilisateur.
- Une exigence « accessible » n'est pas testable sans critères et protocole.
- Une mention « analytics » n'est pas un plan de mesure sans événements,
  consentement, KPI, propriétaire et décision.

## 6. Structure cible du modèle public

Chaque exigence doit pouvoir porter :

```text
ID :
Besoin ou résultat métier :
Utilisateur/rôle :
Précondition :
Action :
Résultat observable :
États d'erreur et cas limite :
Priorité :
Hypothèse ou dépendance :
Preuve d'acceptation :
Responsable de validation :
Date :
```

### Blocs du document

| Bloc                  | Champs minimaux                                                                  |
| --------------------- | -------------------------------------------------------------------------------- |
| Problème et objectifs | situation mesurée, cible 3/6/12 mois, coût du statu quo, indicateur              |
| Utilisateurs et rôles | fréquence, appareils, contexte, permissions, données visibles                    |
| Parcours              | préconditions, étapes, états vides/erreurs, ID, test                             |
| V1/V2/hors périmètre  | valeur, effort, dépendance, risque, seuil de report                              |
| Appareils             | OS min/cible, modèles, tailles, tablette/foldable, orientation, réseau, pays     |
| Backend/API           | systèmes, données maîtres, auth, API, imports, exports, webhooks, environnements |
| Données/sécurité      | base légale à qualifier, chiffrement, secrets, logs, conservation, incident      |
| Accessibilité         | lecteur d'écran, texte, contraste, zones tactiles, mouvement, test humain        |
| Stores                | comptes, certificats, IDs, pistes de test, privacy, paiements, rejet, transfert  |
| Analytics/support     | événements, consentement, KPI, crash, sévérité, SLA, RPO/RTO                     |
| Budget/planning       | phases, livrables, jours, inconnues, TCO 12/36/60                                |
| Propriété/sortie      | dépôt, code, design, données, clés, CI/CD, comptes, backups, documentation       |

## 7. Scénarios et calculs

Le cas « Fleurs d'Aix » peut rester fictif, mais il doit geler un périmètre :
deux plateformes, trois rôles, 120 produits, une API de stock, paiement,
notifications, back-office, deux environnements, analytics avec consentement
et support en heures ouvrées.

### Calcul à publier comme méthode

```text
TCO = cadrage + UX + mobile + backend + publication
      + cloud/SDK + support + maintenance + évolutions
      + temps interne + coût de sortie
```

Trois scénarios sont requis :

| Variable           | Simple              | Central                  | Exigeant                                        |
| ------------------ | ------------------- | ------------------------ | ----------------------------------------------- |
| plateformes        | une PWA ou une base | iOS + Android partagés   | modules natifs/deux bases                       |
| utilisateurs/rôles | peu, droits simples | clients + équipe + admin | multi-entités, rôles fins                       |
| hors-ligne         | non                 | cache et reprise         | conflits, pièces jointes, terrain faible réseau |
| intégrations       | aucune              | une API                  | ERP/CRM/paiement/webhooks                       |
| données            | courantes           | personnelles             | sensibles/réglementées                          |
| support            | heures ouvrées      | SLA défini               | astreinte et continuité renforcée               |

Les montants ne peuvent être remplis qu'après recherche/hypothèses. La
fourchette 20–28 k€ actuelle doit soit être décomposée, soit rester explicitement
sans valeur comparative.

### Contrôle inverse

Le modèle doit demander :

- quel usage mesuré justifie le produit ;
- quelle fonction impose réellement le mobile ;
- quelle exigence ferait préférer une PWA ;
- quelle donnée ou obligation change le budget ;
- quel coût annuel devient inacceptable ;
- quelle preuve ferait reporter la V1.

## 8. Ressource et conversion

### Pack public attendu

- DOCX ou document éditable de 12–15 pages ;
- PDF de consultation ;
- tableur de priorisation ;
- matrice rôles/données/permissions ;
- matrice appareils/versions ;
- registre API/intégrations ;
- dictionnaire analytics ;
- grille de comparaison de devis ;
- feuille TCO 12/36/60 ;
- checklist publication, sécurité, accessibilité, acceptation et sortie.

Le pack doit indiquer version, date, licence, limites, exemple fictif et
historique de changements. P4 doit vérifier nom MIME, téléchargement,
ouverture Word/PDF, formules, impression, mobile et accessibilité.

### Bon et mauvais fit

```text
Bon fit Hagnéré Code : besoin métier identifié, référent disponible, accès aux
utilisateurs, volonté de limiter la V1 et de mesurer.
Mauvais fit : simple présence sur les stores, aucun utilisateur interrogé,
budget incompatible, attente d'un prix ferme sans données ni intégrations.
Action autonome : remplir le pack puis l'envoyer à plusieurs prestataires.
CTA : relecture des inconnues, risques et critères ; aucun choix de technologie
ou prix promis avant étude.
```

## 9. Empreinte humaine et anti-IA

### À préserver

- le dirigeant n'a pas à parler comme un développeur ;
- le scénario terrain hors ligne ;
- les questions formulables en réunion ;
- les exclusions de V1 ;
- l'honnêteté des cas fictifs ;
- le contre-cas « application web/PWA suffisante ».

### À éviter

- une succession de douze matrices sans fil rouge ;
- des acronymes qui transforment le guide en cahier technique ;
- la même structure « problème/tableau/alerte » à chaque section ;
- des listes exhaustives non priorisées ;
- un modèle qui exige du dirigeant de décider l'architecture.

### Forme éditoriale recommandée

Suivre une consultation fictive de bout en bout :

1. phrase du dirigeant ;
2. exigence mal écrite ;
3. question de clarification ;
4. ligne correctement remplie ;
5. effet sur devis/test ;
6. décision V1/V2 ou sortie.

P4 doit isoler cinq phrases abstraites et prouver sujet, action et résultat,
faire lire le modèle par une personne non technique et noter honnêtement les
questions restantes.

## 10. Registre des défauts hérités

### P0

Aucun P0 démontré dans l'audit. Une règle store fausse, un prix courant figé ou
un modèle annoncé mais cassé deviendrait bloquant.

### P1

1. **P1-MOB-01** — livrer un vrai modèle DOCX/PDF testé.
2. **P1-MOB-02** — rendre les objectifs mesurables.
3. **P1-MOB-03** — matrice rôles et permissions.
4. **P1-MOB-04** — exigences testables avec ID et preuve.
5. **P1-MOB-05** — V1/V2 comparable.
6. **P1-MOB-06** — matrice appareils/OS.
7. **P1-MOB-07** — backend/API/intégrations.
8. **P1-MOB-08** — hors-ligne et sécurité.
9. **P1-MOB-09** — RGPD et accessibilité.
10. **P1-MOB-10** — stores complet.
11. **P1-MOB-11** — analytics, support et SLA.
12. **P1-MOB-12** — TCO 12/36/60.
13. **P1-MOB-13** — achat, propriété et remise de sortie.

### P2

- téléchargement public sans friction ;
- exemple complet avec exigence ID et cas négatif ;
- alternatives app/web/PWA/SaaS/outil ;
- protocole de test utilisateur ;
- internationalisation ;
- monétisation et règles stores actuelles ;
- produit vivant, migration et rollback ;
- sécurité avancée selon le risque ;
- QA metadata, JSON-LD, liens, responsive, build et route.

## 11. Prochaines corrections

1. Rejouer P1 sur requêtes, voisins, corpus et sources primaires.
2. Figer le schéma du pack et un cas commun avant rédaction.
3. Construire et ouvrir tous les formats de la ressource.
4. Décomposer le cas fictif et les coûts sans en faire un prix de marché.
5. Réécrire la page autour de trois lignes réellement remplies.
6. Faire une P3 indépendante : règles Apple/Google/CNIL/W3C rouvertes,
   exigences testées, TCO recalculé.
7. Exécuter P4 : plume, lecteur dirigeant, accessibilité, responsive,
   téléchargement, liens, JSON-LD, build et route.
8. Ne déclarer publication/indexation qu'après preuves distinctes.

**Porte de sortie :** le guide ne peut être appelé « modèle complet prêt à
envoyer » tant que le pack n'existe pas, n'a pas été ouvert et testé, et que
P1-MOB-01 à P1-MOB-13 ne sont pas fermés sur un snapshot manifeste.
