# Dossier de recherche — Remplacer Microsoft Access par une application web

> Journal éditorial du guide `remplacer-microsoft-access-application-web`. La
> page publique ne peut être rédigée qu’après validation de la porte P1.

## Journal des quatre passes

Propriétaire éditorial unique : Codex, agent racine du lot du 21 juillet 2026.

| Passe                        | État                     | Date       | Responsable              | Snapshot                                               | Blocages |
| ---------------------------- | ------------------------ | ---------- | ------------------------ | ------------------------------------------------------ | -------- |
| 1. Recherche                 | Terminée — porte validée | 2026-07-21 | Codex                    | `remplacer-microsoft-access-application-web-p1.sha256` | Aucun    |
| 2. Rédaction et intégration  | Terminée — porte validée | 2026-07-21 | Codex                    | `remplacer-microsoft-access-application-web-p2.sha256` | Aucun    |
| 3. Contre-audit indépendant  | Terminée — porte validée | 2026-07-21 | Agent `p3_contenus_site` | `remplacer-microsoft-access-application-web-p3.sha256` | Aucun    |
| 4. Plume humaine et contrôle | Terminée — porte validée | 2026-07-21 | Codex                    | `remplacer-microsoft-access-application-web-p4.sha256` | Aucun    |

Une modification du corpus P1 après son manifeste impose de rejouer la porte.
Les manifestes d’une passe validée ne sont jamais écrasés.

### Manifeste du snapshot

| Fichier contrôlé                                                                | SHA-256                                                            | Passe | Remarque                                           |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------ | ----- | -------------------------------------------------- |
| Corpus P1 consigné dans le présent dossier                                      | Voir le manifeste P1 frère                                         | P1    | Aucun fichier public créé avant cette porte        |
| `src/app/guides/remplacer-microsoft-access-application-web/page.tsx`            | `3d961f5e1824a9edaf05a14b85f8dfc7490e3004a5c990c03ee385af6e5c783b` | P2    | Page avec porte éditoriale fermée                  |
| `src/app/guides/remplacer-microsoft-access-application-web/opengraph-image.tsx` | `bb1d40de99f4d9d054123da07fe71e133a6f2dd215877bcb399a6540ccc66444` | P2    | Image dédiée 1200 × 630                            |
| `src/lib/guides.ts`                                                             | `422a7272611afdd65b35f918daebbc6b6e7e979c385f2d09c32f2f4fcf122f89` | P2    | Entrée `ready-for-human-review`                    |
| `src/app/guides/reprendre-logiciel-metier-existant/page.tsx`                    | `8dc2e369fd8278c46e7b7a8177c0c4b14a1409a18d47d902bc6a8c3858656b73` | P2    | Lien entrant contextuel                            |
| `src/components/guides/GuidesHubPage.tsx`                                       | `14565088a1bd5b65a1d2d13046bfaaa0a69c7e64c50e01ade5c30976345f962d` | P2    | Icône explicite dans le hub                        |
| `src/app/guides/remplacer-microsoft-access-application-web/page.tsx`            | `3a91cb75634b5ec8dbb690387a6855f6c1742f19255f6a03bac48ad0456b797a` | P3    | Corrections factuelles, sécurité et plume validées |
| `src/app/guides/remplacer-microsoft-access-application-web/opengraph-image.tsx` | `bb1d40de99f4d9d054123da07fe71e133a6f2dd215877bcb399a6540ccc66444` | P3    | Image dédiée revalidée                             |
| `src/lib/guides.ts`                                                             | `b3d7c6bf1c23106a29aad14c2bf915695b1c392f8e0d98043a399f6f82e1e1d2` | P3    | Temps de lecture exact à 14 minutes                |
| `src/app/guides/reprendre-logiciel-metier-existant/page.tsx`                    | `8dc2e369fd8278c46e7b7a8177c0c4b14a1409a18d47d902bc6a8c3858656b73` | P3    | Lien entrant revalidé                              |
| `src/components/guides/GuidesHubPage.tsx`                                       | `14565088a1bd5b65a1d2d13046bfaaa0a69c7e64c50e01ade5c30976345f962d` | P3    | Icône revalidée                                    |
| `src/app/guides/remplacer-microsoft-access-application-web/page.tsx`            | `3a91cb75634b5ec8dbb690387a6855f6c1742f19255f6a03bac48ad0456b797a` | P4    | Snapshot éditorial et responsive final             |
| `src/app/guides/remplacer-microsoft-access-application-web/opengraph-image.tsx` | `bb1d40de99f4d9d054123da07fe71e133a6f2dd215877bcb399a6540ccc66444` | P4    | Image 1200 × 630 observée                          |
| `src/lib/guides.ts`                                                             | `b3d7c6bf1c23106a29aad14c2bf915695b1c392f8e0d98043a399f6f82e1e1d2` | P4    | Porte conservée jusqu’au gel du lot                |
| `src/app/guides/reprendre-logiciel-metier-existant/page.tsx`                    | `8dc2e369fd8278c46e7b7a8177c0c4b14a1409a18d47d902bc6a8c3858656b73` | P4    | Lien entrant final                                 |
| `src/components/guides/GuidesHubPage.tsx`                                       | `14565088a1bd5b65a1d2d13046bfaaa0a69c7e64c50e01ade5c30976345f962d` | P4    | Carte du hub prête                                 |

## 1. Fiche d’identité

```text
Slug : remplacer-microsoft-access-application-web
Statut actuel : publiable sous délégation, indexation différée au gel du lot
Requête principale : remplacer Microsoft Access par une application web
Variantes : migration Access vers application web, convertir base Access,
Access vers SQL Server, Access vers Dataverse, alternative Access entreprise
Moment du parcours : comprendre l’existant puis décider d’une trajectoire
Lecteur précis : dirigeant de PME dont un processus important dépend d’une base
Access, souvent comprise par une seule personne et difficile à utiliser à distance
Situation déclenchante : besoin d’accès navigateur, départ du référent, lenteurs,
version vieillissante, nouveaux sites ou intégrations impossibles à ajouter proprement
Décision principale : conserver et sécuriser Access, déplacer seulement les
données, choisir un outil standard/low-code ou reconstruire progressivement
Niveau de connaissance : connaît les tâches et les résultats, pas les objets Access
5 questions : Access est-il abandonné ; faut-il tout refaire ; que migrer ;
qu’est-ce qui peut être automatisé ; comment basculer sans perdre l’activité
3 craintes : perdre les données ; casser les habitudes ; payer une réécriture inutile
Action autonome : dresser un dossier de sortie, une ligne par objet ou dépendance
CTA : faire cadrer la sortie d’Access
Hors périmètre : choisir toute l’architecture cible, promettre un prix ou un délai,
réaliser une migration, donner un avis juridique ou certifier la sécurité
Date de recherche : 2026-07-21
Responsable de la synthèse : Codex
```

### Score de lancement

| Critère                          |       Note | Justification                                                         |
| -------------------------------- | ---------: | --------------------------------------------------------------------- |
| Offre réellement vendue          |      25/25 | Audit, outils internes et migration progressive entrent dans l’offre  |
| Proximité d’une demande de devis |      24/25 | Le lecteur possède déjà un problème et un actif concret               |
| Preuve de demande                |      10/15 | Formulations observées, sans volume Keyword Planner ni Search Console |
| Preuve ou outil original         |      15/15 | Dossier de sortie objet par objet et scénario de test associé         |
| Différenciation du corpus        |       9/10 | Access exige un inventaire différent d’Excel ou d’un logiciel web     |
| Maillage, ressource et CTA       |      10/10 | Liens naturels vers audit, cahier des charges et outils internes      |
| **Total**                        | **93/100** | Porte de lancement franchie                                           |

## 1 bis. Contrat de langage humain

- **Phrase téléphone :** « Toute l’entreprise dépend d’une base Access qu’une
  seule personne comprend. Je voudrais qu’elle fonctionne dans un navigateur,
  mais sans perdre nos données ni nos habitudes de travail. Est-ce qu’il faut
  tout refaire ? »
- **Réponse attendue :** pas forcément ; inventoriez d’abord les données, les
  écrans, les documents, les calculs et les automatismes, puis choisissez une
  trajectoire proportionnée au besoin réel.
- **Terme central :** migrer ne signifie pas seulement copier les tables ; il
  faut aussi reprendre ce que les salariés voient, font, calculent et éditent.
- **Mots ordinaires :** base Access, écrans, boutons, données, calculs, documents,
  règles automatiques, fichiers liés, ancien outil, nouvel outil.
- **Mots à éviter ou traduire :** legacy, replatforming, lift and shift, schéma
  relationnel, refactoring, découplage, cloud-native, reverse engineering, TCO.
- **Projet des 150 premiers mots :** reconnaître la dépendance, répondre « pas
  forcément », expliquer pourquoi le fichier ne résume pas le travail, puis
  donner les quatre issues possibles.
- **Décision après 150 mots :** ne commander aucune réécriture avant inventaire.
- **H2 isolés :** oui, chaque titre annonce une question ou une action.
- **Comparaison à 390 px :** oui, cartes complètes sans colonne masquée.
- **FAQ :** oui, chaque première phrase tranche.
- **CTA :** « Faire cadrer l’avenir de ma base Access ».

### Test de l’ouverture

- [x] la situation vécue précède toute explication technique ;
- [x] aucun sigle n’est nécessaire dans le premier écran ;
- [x] aucun lexique ne retarde la réponse ;
- [x] aucune métaphore ne devient un système ;
- [x] la nuance « garder Access peut être raisonnable » est annoncée sans détour.

### Test sujet, action, résultat

| Phrase initiale                                             | Qui agit ?                       | Action concrète                            | Résultat pour le lecteur                                 | Phrase réécrite                              |
| ----------------------------------------------------------- | -------------------------------- | ------------------------------------------ | -------------------------------------------------------- | -------------------------------------------- |
| « Commencez par comprendre ce que l’outil fait réellement » | Le dirigeant et les utilisateurs | Montrent les tâches critiques              | L’inventaire décrit le travail, pas seulement le fichier | Conservée, puis illustrée                    |
| « L’inventaire vient avant le choix »                       | L’entreprise                     | Liste données, écrans, documents et règles | Elle évite une réécriture mal chiffrée                   | Conservée                                    |
| « Une étape hybride peut éviter le grand saut »             | L’équipe projet                  | Déplace les données avant l’interface      | Elle teste une transition limitée                        | Détaillée avec limites et authentification   |
| « Testez un parcours »                                      | Les utilisateurs concernés       | Rejouent cas normal et exceptions          | La reprise devient observable                            | Conservée                                    |
| « Le prix ne dépend pas seulement du nombre de tables »     | Le prestataire et l’entreprise   | Chiffrent comportements, données et tests  | Deux offres deviennent comparables                       | Réécrite depuis une formule trop catégorique |

## 2. Cannibalisation

| Page existante                          | Intention de cette page                             | Différence du nouveau guide                              | Arbitrage                                 |
| --------------------------------------- | --------------------------------------------------- | -------------------------------------------------------- | ----------------------------------------- |
| `transformer-excel-en-application`      | Décider si un tableur doit être corrigé ou remplacé | Access contient déjà écrans, états, requêtes et code     | Lien court, aucun score Excel repris      |
| `erp-ou-logiciel-sur-mesure`            | Choisir l’architecture cible                        | Comprendre l’outil source avant de choisir la cible      | Renvoyer au comparatif après l’inventaire |
| `reprendre-logiciel-metier-existant`    | Sécuriser une reprise de logiciel et de prestataire | Radiographier les objets propres à Access                | Ajouter un lien entrant contextuel        |
| `cahier-des-charges-application-metier` | Décrire le futur outil                              | Produire la matière qui alimentera le cahier des charges | Lien après le dossier de sortie           |
| `no-code-ou-sur-mesure`                 | Comparer deux modes de construction                 | Ne choisir aucun outil avant le diagnostic               | Résumer sans refaire le comparatif        |

**Justification d’une URL distincte :** aucun guide existant ne montre comment
distinguer, dans Access, les données transférables des écrans, documents,
requêtes, règles VBA et dépendances qu’il faut comprendre ou reconstruire.

## 3. Demande et vocabulaire du lecteur

Formulations observées le 21 juillet 2026 : remplacer Microsoft Access,
migration Access vers application web, convertir une base Access, alternative
Access pour une entreprise, Access vers Power Apps, SQL Server ou Dataverse,
utiliser Access dans un navigateur, migrer sans perdre les données, savoir si
Access va disparaître et déterminer s’il faut tout réécrire.

Ces requêtes prouvent l’existence de la question, pas son volume ni la facilité
de classement. Aucun chiffre de recherche ne sera avancé.

Questions à traiter :

1. Access est-il abandonné ?
2. Une base stable doit-elle être remplacée ?
3. Que contient réellement une application Access ?
4. Qu’est-ce qui migre automatiquement ?
5. Peut-on conserver l’interface et déplacer seulement les données ?
6. Power Apps est-il toujours le meilleur remplacement ?
7. Comment retrouver les règles cachées dans le code VBA ?
8. Comment tester sans arrêter l’activité ?
9. Comment comparer deux propositions ?

## 4. Carte concurrentielle

| Famille de page              | Bon point                                      | Manque décisionnel ou biais                                |
| ---------------------------- | ---------------------------------------------- | ---------------------------------------------------------- |
| Microsoft Support et Learn   | Limites et possibilités techniques vérifiables | Ne construisent pas la décision complète du dirigeant      |
| Éditeurs d’alternatives      | Montrent mobilité et collaboration possibles   | Choisissent souvent leur produit avant l’inventaire        |
| Sociétés de migration Access | Reconnaissent parfois la valeur de l’existant  | Seuils, délais et promesses commerciales peu transposables |
| Listes d’outils              | Donnent des noms à comparer                    | Ignorent les règles et documents à reprendre               |

**Angle mort commun :** demander « par quoi remplacer Access ? » avant de
demander « que fait réellement cette base pour l’entreprise ? ».

**Valeur originale :** une radiographie en six parties, suivie d’une décision
pour chaque élément : conserver, transférer, reconstruire ou supprimer.

## 5. Fiche de preuves

Sources primaires consultées le 21 juillet 2026.

| Affirmation utilisable                                                                                              | Source primaire                                                                                                                                                                                     | Périmètre et limite                                               | Conséquence lecteur                                     |
| ------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- | ------------------------------------------------------- |
| Access n’est pas globalement abandonné : Access 2021 se retire le 13 octobre 2026 et Access 2024 le 9 octobre 2029  | [Cycle Access 2021](https://learn.microsoft.com/en-us/lifecycle/products/access-2021) et [produits retirés en 2029](https://learn.microsoft.com/en-us/lifecycle/end-of-support/end-of-support-2029) | Distinguer versions perpétuelles et Microsoft 365                 | Vérifier la version, ne pas migrer à cause d’une rumeur |
| Une base Access comprend tables, requêtes, formulaires et états ; macros et modules peuvent aussi porter des règles | [Structure d’une base Access](https://support.microsoft.com/en-US/Access/learn-the-structure-of-an-access-database)                                                                                 | Inventaire technique à compléter par l’usage réel                 | Ne pas limiter le devis aux tables                      |
| Microsoft publie 2 Go par fichier et 255 utilisateurs simultanés comme limites maximales                            | [Spécifications Access](https://support.microsoft.com/en-us/access/access-specifications)                                                                                                           | Maximum de format, pas seuil de confort                           | Refuser les seuils commerciaux universels               |
| Pour partager Access, Microsoft décrit une séparation entre données et interface locale                             | [Déployer Access](https://support.microsoft.com/en-us/access/deploy-an-access-application) et [scinder une base](https://support.microsoft.com/en-us/access/split-an-access-database)               | Peut stabiliser un usage local ; ne crée pas une application web  | Tester la correction la plus simple                     |
| Le Documenteur détaille objets, propriétés et contrôles                                                             | [Structure d’une base Access](https://support.microsoft.com/en-US/Access/learn-the-structure-of-an-access-database)                                                                                 | Le rapport ne dit pas ce qui compte pour le salarié               | L’associer à des démonstrations utilisateur             |
| Le volet des dépendances omet notamment macros/modules et s’arrête à quatre niveaux                                 | [Dépendances d’objet](https://support.microsoft.com/en-us/access/use-the-object-dependencies-pane-to-see-how-objects-relate)                                                                        | Inventaire non exhaustif                                          | Compléter manuellement                                  |
| SSMA convertit les tables, colonnes, index, clés étrangères et la plupart des requêtes SELECT                       | [Conversion Access avec SSMA](https://learn.microsoft.com/en-us/sql/ssma/access/converting-access-database-objects-accesstosql?view=sql-server-ver17)                                               | Certaines requêtes ne sont pas converties                         | Lire le rapport d’évaluation                            |
| SSMA ne convertit pas formulaires, états, macros ou modules                                                         | [Conversion Access avec SSMA](https://learn.microsoft.com/en-us/sql/ssma/access/converting-access-database-objects-accesstosql?view=sql-server-ver17)                                               | Migration des données seulement                                   | Chiffrer séparément la reconstruction des usages        |
| SSMA peut produire un rapport d’évaluation avec erreurs et avertissements                                           | [Guide Access vers SQL Server](https://learn.microsoft.com/en-us/sql/sql-server/migrate/guides/access-to-sql-server?view=sql-server-ver17)                                                          | Rapport technique, à confronter aux tâches                        | Prioriser le pilote                                     |
| Access peut continuer à utiliser des tables liées après migration SQL                                               | [Lier Access à SQL Server](https://learn.microsoft.com/en-us/sql/ssma/access/linking-access-applications-to-sql-server-azure-sql-db-accesstosql?view=sql-server-ver17)                              | Des requêtes peuvent devoir être adaptées                         | Une étape hybride est possible                          |
| Access et Dataverse permettent aussi un scénario de tables liées                                                    | [Access vers Dataverse](https://support.microsoft.com/en-US/Access/get-started-migrate-access-data-to-dataverse)                                                                                    | Licences, clés, relations et types à vérifier                     | Ne pas présenter Power Platform comme automatique       |
| Microsoft déconseille de créer de nouvelles Access Web Apps                                                         | [Base bureau ou Access Web App](https://support.microsoft.com/fr-fr/access/training/decide-whether-to-create-a-desktop-database-or-an-access-web-app)                                               | Concerne l’ancien produit web, pas la disparition d’Access bureau | Ne pas confondre les deux offres                        |
| Une sauvegarde doit être saine et restaurable                                                                       | [Sauvegarde Access](https://support.microsoft.com/en-US/Access/protect-your-data-with-backup-and-restore-processes) et [CNIL](https://www.cnil.fr/fr/securite-sauvegarder)                          | La CNIL vise notamment les traitements de données personnelles    | Tester la restauration avant la bascule                 |
| L’ANSSI recommande inventaire, maintien de la restauration et audit après migration                                 | [ANSSI, Sécuriser une migration numérique, janvier 2026](https://messervices.cyber.gouv.fr/documents-guides/anssi_essentiels_migration_1.0.pdf)                                                     | Guide général à proportionner au risque de la PME                 | Prévoir pilote et retour possible                       |

### Contradictions et affirmations interdites

- « Access est mort » ou « Microsoft l’a abandonné » ;
- un seuil pratique universel à 5, 10 ou 255 utilisateurs ;
- « mettre le fichier dans le cloud le transforme en application web » ;
- « SSMA convertit toute l’application » ;
- « Power Apps remplace automatiquement Access » ;
- « SQL Server ou Dataverse rendent l’outil sécurisé ou conforme » ;
- un prix moyen, un délai standard, zéro panne ou un ROI immédiat ;
- « le VBA peut toujours être traduit automatiquement » ;
- « une réécriture complète est obligatoire » ;
- « le fichier accdb contient forcément toutes les données ».

### Calculs reproductibles

Aucun calcul financier. Le nombre de tables n’est pas un indicateur suffisant du
coût : écrans, documents, règles, interfaces, qualité des données, tests et
bascule doivent être examinés séparément.

## 6. Empreinte éditoriale à ne pas reproduire

| Guide voisin                            | Progression                      | Dispositif à ne pas copier |
| --------------------------------------- | -------------------------------- | -------------------------- |
| `transformer-excel-en-application`      | diagnostic puis quatre solutions | score de tableur           |
| `reprendre-logiciel-metier-existant`    | sécurisation d’une reprise       | crise et contrôle d’accès  |
| `erp-ou-logiciel-sur-mesure`            | comparaison des cibles           | matrice ERP/sur-mesure     |
| `cahier-des-charges-application-metier` | modèle du futur outil            | cahier des charges général |

```text
Tension : l’entreprise possède le fichier, mais ignore ce qu’elle perdrait en
ne migrant que les données.
Ouverture : situation vécue, réponse « pas forcément », sans alarme.
Progression : tâches réelles → six parties → automatisable/non automatisable →
quatre trajectoires → pilote → preuve de reprise → décision.
Artefact signature : dossier de sortie Access, une ligne par objet.
Rythme : concret, phrases courtes, un exemple fictif unique.
CTA : après que le lecteur a produit son premier inventaire.
Conclusion : choisir un parcours pilote, pas commander une réécriture totale.
Différences : aucun score, aucun prix, aucune architecture imposée.
```

## 7. Plan annoté

| Section                         | Question résolue                            | Preuve ou exemple                      | Décision                           | Format                |
| ------------------------------- | ------------------------------------------- | -------------------------------------- | ---------------------------------- | --------------------- |
| Faut-il tout refaire ?          | Access est-il vraiment condamné ?           | cycles de support datés                | Vérifier la version et le besoin   | réponse directe       |
| Montrez trois tâches            | Que fait l’outil pour les salariés ?        | résultats observables                  | Nommer les tâches critiques        | mini-fiches           |
| Six parties à inventorier       | Que contient l’application ?                | sources Microsoft                      | Remplir le dossier de sortie       | cartes                |
| Ce que les outils ne voient pas | L’inventaire automatique suffit-il ?        | limites Documenteur/dépendances        | Interroger les utilisateurs        | mise en garde         |
| Ce qui se transfère             | Que peut faire SSMA ?                       | objets pris/non pris                   | Séparer données et usages          | comparaison mobile    |
| Quatre trajectoires             | Garder, hybrider, acheter ou reconstruire ? | critères concrets                      | Choisir une trajectoire provisoire | cartes décisionnelles |
| Un seul parcours pilote         | Comment éviter l’arrêt brutal ?             | ANSSI, sauvegarde et répétition        | Tester avant généralisation        | chronologie           |
| Prouver la reprise              | Comment accepter le nouvel outil ?          | cas normal, exception, document, droit | Écrire les tests avant le devis    | feuille d’acceptation |
| Comparer les propositions       | Que doit contenir un devis crédible ?       | exclusions et réversibilité            | Refuser les forfaits opaques       | liste                 |
| Quand garder Access             | Dans quels cas ne pas migrer ?              | version supportée et besoin local      | Assumer le statu quo               | verdicts              |
| Première action                 | Que faire lundi matin ?                     | copie, inventaire, démonstration       | Choisir un pilote                  | action finale         |

## 8. Ressource et conversion

```text
Ressource téléchargeable : non pour cette première publication.
Justification : le dossier HTML doit suffire et aucun fichier non produit ou non
testé ne sera annoncé. Un futur classeur local pourra être ajouté séparément.
Résultat autonome : une ligne par objet ou dépendance avec utilité, règle, sort
envisagé et test de reprise.
Exemple rempli : formulaire fictif de clôture d’intervention SAV.
Conclusion « ne pas investir » : oui, si Access reste stable et adapté.
Données saisies : aucune.
Bon fit : règles propres à l’entreprise, besoin web, plusieurs sites, droits,
intégrations ou traçabilité, responsable métier disponible.
Mauvais fit : usage local stable, outil standard suffisant, personne ne peut
valider les règles, droits contestés ou incident de cybersécurité en cours.
Action non commerciale : inventorier une copie et choisir un parcours pilote.
CTA : « Faire cadrer ma migration Access » vers /demarrer-un-projet.
```

## 9. Rapports de sortie

### Rapport P1 — Recherche

```text
PASSE 1 TERMINÉE
Slug : remplacer-microsoft-access-application-web
Lecteur : dirigeant dont une base Access critique dépend d’une personne ou ne
répond plus aux usages à distance.
Décision : garder, hybrider, remplacer par un outil ou reconstruire progressivement.
Angle : inventorier le travail avant de comparer les technologies.
Pages proches : Excel, ERP/sur-mesure, reprise de logiciel et cahier des charges ;
aucune ne radiographie les objets Access.
Sources décisives : Microsoft Lifecycle, Support et Learn, CNIL et ANSSI.
Incertitudes exclues : seuils pratiques, prix, délais, conversion automatique,
promesse de sécurité, de conformité ou de ROI.
Action autonome : dossier de sortie objet par objet.
CTA : faire cadrer la sortie d’Access, avec possibilité de recommander de garder l’outil.
Snapshot : docs/research/manifests/remplacer-microsoft-access-application-web-p1.sha256
```

### Rapport P2 — Rédaction et intégration

```text
PASSE 2 TERMINÉE
Fichiers créés : page, image Open Graph et entrée du registre.
Fichiers modifiés : guide de reprise d’un logiciel pour le lien entrant et
registre d’icônes du hub.
Ouverture : « faut-il tout refaire ? Pas forcément », avant toute technologie.
Forme propre : six parties à inventorier et dossier de sortie en cartes, avec
une preuve de reprise pour chaque élément.
Exemple : PME de SAV explicitement fictive ; aucun résultat client inventé.
Sources visibles : Microsoft Lifecycle, Support et Learn, CNIL et ANSSI,
placées à côté des affirmations qu’elles étayent.
Action autonome : travailler sur une copie, observer trois tâches et construire
le dossier de sortie.
Bon fit / mauvais fit : quatre trajectoires, dont conserver Access et choisir
un logiciel standard ; le sur-mesure n’est pas présenté comme automatique.
CTA : un seul, « Présenter ma base Access », vers /demarrer-un-projet.
Contrôles rapides : Prettier, ESLint, TypeScript, 184/184 tests SEO et
git diff --check passent.
Snapshot : docs/research/manifests/remplacer-microsoft-access-application-web-p2.sha256
```

### Rapport P3 — Contre-audit indépendant

```text
PASSE 3 TERMINÉE
Relecteur : agent p3_contenus_site, indépendant et en lecture seule.
Sources rouvertes : Microsoft Lifecycle, Support et Learn, CNIL et ANSSI.
Calcul : 2 742 mots dans l’article, soit 14 minutes à 200 mots/minute.
P0 : aucun.
P1 corrigés : temps de lecture ; portée des dates Access 2021/2024 et cas
Microsoft 365 ; périmètre Dataverse ; authentification des tables liées ;
fractionnement de base ; délai arbitraire ; incident cyber avant migration.
Corrections pédagogiques : utilisateurs par rôle, accord, plateforme avec peu
de code expliquée, Dataverse défini, portée CNIL précisée, prix nuancé et CTA
plus neutre. knowsAbout Microsoft Access retiré faute d’attestation dédiée.
Revalidation : PASS, 0 P0/P1.
Contrôles : Prettier, ESLint, TypeScript, diff-check, 184/184 SEO et build
indépendant du snapshot avant l’ajustement exact de lecture. L’ajustement 13→14
est revalidé et impose seulement un nouveau build de fraîcheur en P4.
Snapshot : docs/research/manifests/remplacer-microsoft-access-application-web-p3.sha256
```

### Rapport P4 — Plume humaine et contrôle final

```text
PASSE 4 TERMINÉE
Passages humanisés : plateforme avec peu de code et Dataverse expliqués,
utilisateurs définis par rôle, CTA neutralisé et délai arbitraire retiré.
Coupe : huit H2, un exemple fictif et un artefact. Chaque bloc restant apporte
une décision, une source, un risque ou une preuve.
Retour P3 : oui ; les sept P1 et huit P2 ont été appliqués puis revalidés.
Diff sémantique : les précisions Microsoft/CNIL/ANSSI ont resserré le périmètre
sans transformer le verdict. La valeur de lecture 14 min a été revalidée.
Validation humaine réelle : non ; lecture froide indépendante et navigateur,
sans les présenter comme un lecteur humain extérieur.
Autorisation : délégation du commanditaire ; route conservée en
ready-for-human-review jusqu’au gel global des dix guides.
Commandes : ESLint PASS ; TypeScript PASS ; SEO 184/184 ; tests 328/328 ;
build production PASS ; postbuild PASS sur 88 URL, 48 temps de lecture et
164 JSON-LD ; git diff --check PASS.
Responsive : métriques exactes à 320, 390, 768, 1024 et 1440 px ; document égal
à la fenêtre, un H1, aucune ancre manquante ni identifiant dupliqué. Seul
débordement géométrique : halo décoratif du CTA contenu dans overflow-hidden.
Visuel : héros observé à 390 et 1152 px ; cartes d’inventaire à 390 px.
FAQ : huit questions, ouverture et fermeture au clic vérifiées.
Route : HTTP 200, canonical exact, noindex/nofollow conforme à la porte locale
et console sans erreur ni avertissement.
Image sociale : HTTP 200 image/png, 1200 × 630, texte et marque non coupés.
Verdict : PASS — publiable sous délégation, publication différée au gel du lot.
Snapshot : docs/research/manifests/remplacer-microsoft-access-application-web-p4.sha256
```

## 10. Revue finale

| Axe         | Note | Preuve                                                               |
| ----------- | ---: | -------------------------------------------------------------------- |
| Intention   |    2 | La dépendance à Access et « faut-il tout refaire ? » ouvrent la page |
| Décision    |    2 | Garder, hybrider, acheter ou reconstruire                            |
| Pédagogie   |    2 | Tâches, six parties et dossier de sortie                             |
| Profondeur  |    2 | Données, écrans, VBA, documents, sécurité, bascule et devis          |
| Preuve      |    2 | Sources primaires adjacentes et limites explicites                   |
| Comparaison |    2 | Quatre trajectoires et transfert objet par objet                     |
| Originalité |    2 | Radiographie Access plutôt qu’une liste d’alternatives               |
| Style       |    1 | Lecture froide et orale, sans lecteur humain réel distinct           |
| Conversion  |    2 | Action autonome puis CTA acceptant le maintien d’Access              |
| SEO/produit |    2 | Intent, maillage, metadata, OG, Article et responsive validés        |

**Total : 19/20.** Les axes bloquants intention, décision, pédagogie et preuve
obtiennent 2.

### Test lecteur non technique

```text
Test réel : non.
Simulation froide : dirigeant sachant ce que fait l’entreprise mais pas ce que
signifient SSMA, VBA ou Dataverse.
Réponse comprise : inventorier le travail avant de choisir la technologie.
Décision : garder Access, déplacer les données, essayer un outil ou chiffrer
un parcours web pilote.
Point de survol : aucun P0/P1 ; les comparaisons larges sont en cartes.
Termes : plateforme avec peu de code et Dataverse expliqués ; SSMA défini.
CTA : crédible car il accepte une stabilisation ou un outil existant.
```

### Contre-audit indépendant

```text
Auteur : agent p3_contenus_site, lecture seule.
P0 : 0.
P1 trouvés et corrigés : 7.
P2 de plume appliqués : 8.
Sources rouvertes : Microsoft, CNIL et ANSSI.
Verdict final : PASS, 0 P0/P1.
```

- [x] réponse utile dans les 150 premiers mots ;
- [x] cinq phrases passent sujet, action, résultat ;
- [x] H2 compréhensibles isolément ;
- [x] exemple fictif annoncé ;
- [x] sources sensibles et fraîcheur revérifiées ;
- [x] comparaison lisible à 390 px ;
- [x] un CTA éditorial et liens valides ;
- [x] metadata, JSON-LD, maillage et ancres cohérents ;
- [x] tests, build, route et image sociale validés ;
- [x] publication et indexation distinguées.
