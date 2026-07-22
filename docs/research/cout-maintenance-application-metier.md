# Dossier de recherche — Coût de maintenance d'une application métier

Journal du guide `cout-maintenance-application-metier`. La page publique reste
interdite tant que la P1, la réconciliation des guides existants et le
contre-audit indépendant ne sont pas terminés.

## Journal des quatre passes

Propriétaire éditorial unique : Codex, agent racine du lot du 21 juillet 2026.

| Passe                        | État                     | Date       | Responsable       | Snapshot                                        | Blocages |
| ---------------------------- | ------------------------ | ---------- | ----------------- | ----------------------------------------------- | -------- |
| 1. Recherche                 | Terminée — porte validée | 2026-07-21 | Codex             | `cout-maintenance-application-metier-p1.sha256` | Aucun    |
| 2. Rédaction et intégration  | Terminée — porte validée | 2026-07-21 | Codex             | `cout-maintenance-application-metier-p2.sha256` | Aucun    |
| 3. Contre-audit indépendant  | Terminée — porte validée | 2026-07-21 | Agent indépendant | `cout-maintenance-application-metier-p3.sha256` | Aucun    |
| 4. Plume humaine et contrôle | Terminée — porte validée | 2026-07-21 | Codex             | `cout-maintenance-application-metier-p4.sha256` | Aucun    |

## 1. Fiche d'identité

- **Slug :** `cout-maintenance-application-metier`.
- **Requête principale :** coût maintenance application métier.
- **Variantes :** prix maintenance logiciel sur mesure, budget annuel
  application métier, coût TMA application, combien coûte la maintenance d'un
  logiciel.
- **Lecteur :** dirigeant ou responsable administratif d'une PME dont
  l'application fonctionne déjà et qui doit préparer le budget des douze
  prochains mois.
- **Phrase téléphone :** « Notre application est en ligne. Combien devons-nous
  réellement mettre de côté l'an prochain pour l'hébergement, les corrections,
  la sécurité et les évolutions ? »
- **Décision :** construire une enveloppe annuelle justifiable, laisser les
  inconnues visibles, puis décider entre contrat récurrent, travaux ponctuels,
  évolution reportée ou arrêt.
- **Action autonome :** réunir factures, contrat, tickets, feuille de route et
  temps interne, puis remplir un registre annuel poste par poste.
- **Hors sujet :** clauses détaillées d'un contrat de TMA, prix de construction
  initial, maintenance d'un site WordPress, choix détaillé entre forfait et
  régie, promesse de sécurité ou estimation ferme sans données.
- **Date de recherche :** 21 juillet 2026.

### Réponse en une phrase

Le budget annuel ne se déduit pas honnêtement d'un pourcentage du prix de
création : il se construit à partir des dépenses réelles, de la couverture
contractuelle, des incidents observés, des changements décidés et du temps
interne.

### Questions que le guide doit résoudre

1. Quels postes sont réellement payés pour maintenir une application ?
2. Comment éviter de compter deux fois hébergement, support et évolutions ?
3. Que faire lorsqu'un coût est encore inconnu ?
4. Comment transformer les preuves disponibles en budget annuel ?
5. Quand un contrat récurrent est-il utile, et quand un lot ponctuel suffit-il ?

## 2. SERP observée et espace éditorial

Recherche Google Web observée depuis la France le 21 juillet 2026. Cette
observation décrit les résultats vus ce jour ; elle ne prouve ni volume de
recherche ni classement futur.

| Requête observée                                       | Résultats et promesses dominantes                                                                 | Limite utile pour notre guide                                                     |
| ------------------------------------------------------ | ------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| coût maintenance application métier                    | pages d'agences mêlant prix de création, hébergement, maintenance et TCO                          | le lecteur ne sait pas construire son propre budget annuel                        |
| prix maintenance logiciel sur mesure annuel            | forfaits commerciaux, pourcentages du coût initial et fourchettes sans périmètre commun           | les chiffres ne disent pas ce qui est inclus ni ce qui reste inconnu              |
| maintenance application pourcentage coût développement | résultats annonçant des ratios très différents et parfois un « coût après lancement » majoritaire | l'écart entre ratios confirme qu'aucun ne doit être présenté comme règle générale |
| coût TMA application métier                            | définitions de TMA, offres et marchés publics                                                     | le modèle contractuel prend le pas sur la décision budgétaire du dirigeant        |

Exemples visibles dans les résultats :
[PilotOne](https://pilotone.fr/application-metier-sur-mesure) affiche des
montants mensuels et annuels propres à son offre ;
[PeakLab](https://peaklab.fr/blog/application-metier-sur-mesure) avance une part
importante du coût après lancement ;
[Thillion](https://thillion-agency.fr/blog/prix-application-metier-sur-mesure-2026)
annonce un coût de possession sur trois ans. D'autres pages utilisent des ratios
autour de 10 à 25 %. Ces pages commerciales servent à comprendre la SERP, jamais
à établir une moyenne de marché.

### Occasion éditoriale

Le guide doit répondre à la question ordinaire « combien dois-je inscrire au
budget de l'an prochain ? » et livrer une méthode réutilisable. Il ne doit ni
vendre la peur de la panne, ni prétendre qu'une application stable ne coûte
presque rien, ni transformer un exemple Hagnéré Code en tarif public.

## 3. Frontières anti-cannibalisation

| Page existante ou future                            | Intention conservée                                         | Propriété exclusive du nouveau guide                              |
| --------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------------- |
| `contrat-tma-application`                           | clauses, tickets, délais, réception, consommation et sortie | montant à financer pendant les douze prochains mois               |
| `cout-maintenance-site-internet`                    | contrats et offres publiques pour site, CMS et WordPress    | application métier sur mesure et coûts d'exploitation applicatifs |
| `prix-logiciel-sur-mesure`                          | prix de construction, périmètre et alternatives             | année d'exploitation d'une application déjà en service            |
| `calculer-roi-application-metier`                   | valeur, gains et coût complet pluriannuel                   | registre budgétaire annuel et inconnues                           |
| `reprendre-logiciel-metier-existant`                | possibilité de construire, restaurer et reprendre           | budget après reprise                                              |
| futur `tma-ou-regie`                                | choix du modèle commercial                                  | besoin financier avant choix du modèle                            |
| futur `sla-maintenance-applicative`                 | niveaux de service et engagements                           | coût seulement lorsque la couverture est connue                   |
| futur `maintenance-preventive-corrective-evolutive` | arbitrage détaillé entre natures de travail                 | consolidation annuelle sans refaire un lexique complet            |

## 4. Réconciliation obligatoire avant publication

Deux guides publics contenaient des ratios qui pouvaient être pris pour des
repères généraux :

1. `prix-logiciel-sur-mesure` : 10 à 25 % par an, hébergement de 40 à
   100 €/mois, plusieurs estimations annuelles et un tableau 5–10 % / 5–15 % ;
2. `react-native-ou-flutter` : hypothèse de 10 à 20 % du coût initial par an.

Ils ont été réconciliés le 21 juillet 2026 dans
`src/app/guides/prix-logiciel-sur-mesure/page.tsx` et
`src/app/guides/react-native-ou-flutter/page.tsx`. Les fourchettes de maintenance
et d'hébergement ont disparu au profit de la règle commune suivante :

> Le prix initial peut servir de réserve provisoire uniquement lorsqu'aucune
> donnée n'existe encore. Il ne constitue pas la méthode budgétaire finale.
> Remplacez-le par les factures, le contrat, les incidents, les changements
> décidés et le temps interne ; laissez les autres postes « montant inconnu ».

Le dossier de recherche `docs/research/prix-logiciel-sur-mesure.md` a également
abandonné son ancien calcul fondé sur 15 %. La FAQ du guide sur le prix de
construction renverra vers le nouveau guide à son intégration. Les estimations
de construction, qui répondent à une autre intention, restent séparées avec
leurs sources et limites.

## 5. Matrice des sources

| Source primaire ou de référence                                                                                                                                               | Fait utilisable                                                                                                                | Limite à écrire dans le guide                                                                              |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------- |
| [Légifrance — CCAG-TIC, article 38](https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000043310752)                                                                      | vocabulaire préventif, correctif, évolutif et adaptatif ; la TMA vise à conserver un système en état de remplir sa fonction    | cahier applicable aux marchés publics qui l'intègrent ; vocabulaire utile, pas règle tarifaire universelle |
| [ANSSI — Sauvegarde des systèmes d'information, version 1.1](https://messervices.cyber.gouv.fr/documents-guides/anssi_fondamentaux_sauvegarde_systemes_dinformation_v1.1.pdf) | contrôles de sauvegarde, tests réguliers, procédure et ordre de restauration, prise en compte des configurations applicatives  | recommandations de sécurité, pas obligation générale ni garantie de reprise                                |
| [CNIL — Encadrer la maintenance](https://www.cnil.fr/fr/securite-encadrer-la-maintenance-et-la-fin-de-vie-des-materiels-et-logiciels)                                         | interventions enregistrées, accès de télémaintenance ouverts pour une durée définie puis refermés, supervision par l'organisme | à mobiliser lorsque les interventions peuvent exposer des données personnelles                             |
| [CNIL — Gérer la sous-traitance](https://www.cnil.fr/fr/securite-gerer-la-sous-traitance)                                                                                     | contrat, responsabilités, authentification, incidents, restitution/destruction et vérification des garanties                   | concerne le prestataire qui traite des données personnelles pour le compte de l'entreprise                 |
| [OWASP — Gestion des dépendances](https://devguide.owasp.org/en/05-implementation/02-dependencies/)                                                                           | inventaire des dépendances de production ; version, licence, source et statut de support/maintenance dans un SBOM              | bonne pratique de sécurité logicielle ; ne chiffre ni le budget ni une obligation générale                 |

### Ce que les sources consultées ne permettent pas d'affirmer

- aucun pourcentage annuel universel ;
- aucun minimum mensuel de maintenance ;
- aucune garantie « zéro panne », « zéro bug » ou « application sécurisée » ;
- aucune inclusion automatique de l'hébergement ou des évolutions ;
- aucun délai d'intervention sans contrat ;
- aucune obligation automatique d'adopter toute recommandation ANSSI ou OWASP.

## 6. Artefact signature : le registre annuel

Le lecteur part de cinq preuves :

1. factures et relevés des douze derniers mois ;
2. contrat et périmètre réellement souscrit ;
3. tickets, incidents et temps de résolution observés ;
4. évolutions décidées pour l'année suivante ;
5. temps interne réellement consacré au pilotage.

Chaque ligne du registre contient :

- poste et responsable ;
- preuve utilisée : facture, contrat, devis, ticket ou mesure ;
- coût fixe ou variable ;
- inclus ou exclu du contrat ;
- formule annuelle ;
- dépense externe prévue ;
- temps et coût internes, séparés ;
- réalisé à date et écart ;
- inconnue, déclencheur et date de décision.

Sur mobile, ne jamais afficher douze colonnes mensuelles. La page publique
utilisera des cartes par poste, puis un tableau court « inconnue / déclencheur /
prochaine décision ». Aucun téléchargement ne sera annoncé tant qu'un vrai
fichier n'aura pas été produit et testé.

## 7. Exemple illustratif fictif — PlanifPro Services

La mention exacte **« exemple illustratif fictif »** doit apparaître avant le
premier montant, dans le titre et le texte introductif. PlanifPro Services est
une PME imaginaire qui utilise une application de planning, d'interventions et
de facturation en semaine, sans astreinte.

| Poste fictif                                                                       | Calcul                | Montant annuel |
| ---------------------------------------------------------------------------------- | --------------------- | -------------: |
| Abonnements techniques : cloud, base, stockage, courriels et outil de surveillance | 300 € HT × 12         |     3 600 € HT |
| Support ouvré, correction et prévention                                            | contrat annuel fictif |    18 000 € HT |
| Exercice annuel de restauration et d'export                                        | devis unique fictif   |     1 500 € HT |
| Évolution décidée pour l'année                                                     | devis fictif          |     4 800 € HT |
| Coordination interne                                                               | 3 h × 45 € × 12       |        1 620 € |

Périmètres fictifs à afficher avant les calculs :

- les 3 600 € couvrent uniquement les abonnements techniques ; aucune
  surveillance humaine, correction ou assistance n'est comptée dans cette ligne ;
- les 18 000 € couvrent le support pendant les heures ouvrées, les corrections
  prévues au contrat et des travaux préventifs planifiés. Hébergement,
  évolutions, astreinte et exercice annuel de restauration/export sont exclus ;
- les 1 500 € correspondent à un devis unique couvrant un exercice défini de
  restauration et d'export, avec son compte rendu. Ce n'est pas deux prestations
  comptées séparément.

PlanifPro récupère la TVA. Les dépenses externes sont donc comparées hors taxes.
Les 45 €/h représentent un coût chargé interne fictif, sans TVA.

Calculs à rendre vérifiables :

- dépenses externes de maintien : 3 600 + 18 000 + 1 500 =
  **23 100 € HT** ;
- avec l'évolution planifiée : 23 100 + 4 800 =
  **27 900 € HT de dépenses externes** ;
- coût complet avec le temps interne : 27 900 + 1 620 =
  **29 520 € de coût complet**, composé de 27 900 € HT de dépenses externes et
  de 1 620 € de coût interne ;
- si l'évolution est reportée : 23 100 + 1 620 = **24 720 €**.

Les 45 €/h représentent l'hypothèse interne de l'entreprise fictive, pas un taux
de marché. Incidents hors couverture, hausse d'usage, migration majeure et audit
sectoriel restent « montant inconnu », jamais zéro. Le guide montrera comment
transformer chacune de ces inconnues en responsable, déclencheur et date.

## 8. Architecture publique

Titre SEO :

> Maintenance application métier : quel coût ? · Hagnéré Code

H1 :

> Combien coûte la maintenance annuelle d'une application métier ?

Meta :

> Hébergement, support, corrections, sécurité et évolutions : construisez le
> budget annuel de votre application sans appliquer un pourcentage arbitraire.

Progression prévue :

1. **La réponse courte : partez de ce qui sera réellement payé**
2. **Réunissez cinq preuves avant de chiffrer**
3. **Séparez les postes pour éviter les doublons**
4. **Exemple illustratif fictif : de 23 100 € à 29 520 €**
5. **Gardez visibles les montants encore inconnus**
6. **Transformez le registre en demande de devis comparable**
7. **Choisissez contrat récurrent, lot ponctuel, report ou arrêt**
8. **Sources, limites et prochaines décisions**

L'ouverture doit parler au dirigeant en moins de 150 mots : application déjà en
ligne, budget de l'année suivante, impossibilité de répondre par un ratio
universel, résultat concret du guide.

## 9. Décisions, conversion et maillage

Le guide doit permettre quatre conclusions honnêtes :

- financer les dépenses récurrentes lorsque le besoin et la couverture sont stables ;
- commander un lot ponctuel lorsque le risque ou le travail est circonscrit ;
- reporter une évolution et conserver le fonctionnement indispensable ;
- arrêter ou remplacer l'application lorsque sa valeur ne justifie plus le coût.

CTA unique :

> **Faire vérifier le budget annuel de votre application**
>
> Préparez le contrat actuel, les factures d'infrastructure, les incidents des
> douze derniers mois et les évolutions prévues. Quentin Hagnéré relit
> directement la situation et distingue les dépenses nécessaires au
> fonctionnement, les travaux à chiffrer et les inconnues. Objectif de réponse
> le jour ouvré suivant, sans
> délai garanti ni obligation de commander.

Destination : `/demarrer-un-projet`. Aucun second lien commercial dans le corps.
Guides liés :
`contrat-tma-application`, `reprendre-logiciel-metier-existant`,
`calculer-roi-application-metier` et `prix-logiciel-sur-mesure` après correction.

Liens entrants prioritaires :

- `contrat-tma-application` ;
- `prix-logiciel-sur-mesure` après réconciliation ;
- `calculer-roi-application-metier` ;
- `reprendre-logiciel-metier-existant`.

## 10. Formulations à bannir

- « La maintenance coûte toujours 15 à 25 % du développement. »
- « Une application stable ne coûte presque rien. »
- « L'hébergement est inclus dans la maintenance. »
- « Toutes les évolutions sont incluses. »
- « Tous les bugs sont couverts. »
- « Une sauvegarde automatique garantit la reprise. »
- « Les mises à jour empêchent les attaques. »
- « Une TMA garantit zéro panne. »
- « La maintenance coûte toujours moins cher qu'une panne. »
- « Prix moyen du marché » construit à partir de pages concurrentes.

## 11. Porte P1

- [x] intention dirigeant et décision clairement séparées ;
- [x] SERP observée et limites consignées ;
- [x] sources primaires ou de référence, faits et limites adjacents ;
- [x] aucune moyenne ou ratio universel retenu ;
- [x] frontières anti-cannibalisation écrites ;
- [x] réconciliation des ratios publics identifiée comme P0 ;
- [x] registre annuel suffisamment précis pour être utilisé ;
- [x] exemple fictif calculé et qualifié avant le premier montant ;
- [x] inconnues laissées visibles, jamais converties en zéro ;
- [x] alternatives, CTA et maillage prévus ;
- [x] réconciliation appliquée ;
- [x] contre-audit P1 indépendant obtenu ;
- [x] snapshot P1 créé.

Verdict P1 : **PASS après contre-audit indépendant et corrections**.

## 12. Rapport P1 — Recherche et architecture

PASSE 1 TERMINÉE — PASS

- Intention : budget des douze prochains mois d'une application déjà en service,
  sans refaire le guide contractuel TMA ni le prix de construction.
- Recherche : quatre requêtes observées le 21 juillet 2026 ; les offres
  commerciales servent uniquement à décrire la SERP et non à produire une
  moyenne.
- Sources : Légifrance, ANSSI, CNIL et OWASP avec leur champ d'application et
  leurs limites. Aucune source n'est utilisée pour inventer un ratio ou une
  garantie.
- Artefact : registre annuel fondé sur cinq preuves, avec dépense externe,
  coût interne, inconnue, responsable et date de décision.
- Exemple : PlanifPro Services est fictive ; périmètres, exclusions, TVA,
  assiettes et calculs 23 100 / 27 900 / 29 520 / 24 720 € sont explicités.
- Réconciliation : les ratios de maintenance ont été retirés des deux pages
  publiques et du dossier de recherche historique sur le prix d'un logiciel.
- Contre-audit : verdict initial sans P0 mais trois P1 ; double comptage,
  assiettes et source de vérité corrigés. Le dernier résidu documentaire sur les
  pourcentages a été supprimé selon la condition explicite de PASS.
- Verdict : 0 P0, 0 P1. La rédaction P2 peut commencer sur ce gel.
- Snapshot :
  `docs/research/manifests/cout-maintenance-application-metier-p1.sha256`.

## 13. Rapport P2 — Rédaction et intégration

PASSE 2 TERMINÉE — PASS AUTEUR

- Page : `/guides/cout-maintenance-application-metier`.
- Ouverture : un dirigeant prépare le budget de l'année suivante ; la réponse
  écarte immédiatement le pourcentage automatique et part des factures,
  contrats, incidents, décisions et temps interne.
- Forme propre : cinq preuves à réunir, registre annuel, cinq fiches verticales
  et quatre décisions possibles. Les tableaux servent au contrôle ; ils ne
  remplacent pas l'explication.
- Exemple : PlanifPro Services est annoncée comme PME fictive avant tout
  montant. Les assiettes HT externes et le coût interne sans TVA restent
  séparés ; chaque inclusion et exclusion prévient le double comptage.
- Action autonome : fiche annuelle de neuf champs, registre des inconnues avec
  responsable, déclencheur et date, puis trois simulations à demander aux
  prestataires.
- Sources visibles : Légifrance pour le vocabulaire public de maintenance,
  OWASP pour l'inventaire des dépendances, ANSSI pour les tests de restauration
  et CNIL lorsque des données personnelles sont accessibles. Le champ et les
  limites de chaque source sont écrits à côté de l'affirmation.
- Conversion : un seul CTA, après la démonstration, vers la présentation de
  l'application. Le texte permet explicitement de conclure à un lot ponctuel,
  un report ou l'absence de TMA.
- Intégration : entrée dans le registre sous porte éditoriale, image sociale
  dédiée, quatre guides liés et quatre liens entrants contextuels.
- Réconciliation : les anciens ratios universels ont été retirés des pages sur
  le prix du logiciel et le choix mobile, ainsi que du dossier de recherche
  historique ; ils sont remplacés par des preuves à réunir.
- Contrôles : Prettier, ESLint, TypeScript, 184/184 tests SEO et
  `git diff --check` passent. Le premier test SEO a détecté une formulation
  pouvant évoquer un retour client ; elle a été remplacée avant le gel P2.
- Verdict : le contre-audit P3 indépendant peut commencer sur ce gel.
- Snapshot :
  `docs/research/manifests/cout-maintenance-application-metier-p2.sha256`.

## 14. Rapport P3 — Contre-audit indépendant

PASSE 3 TERMINÉE — PASS APRÈS CORRECTIONS

- Relecteur : agent indépendant, strictement en lecture seule sur le gel P2.
- Verdict initial : 0 P0, 3 P1 et 4 P2. La porte est restée fermée jusqu'à la
  suppression de tous les P1.
- TVA : la page explique désormais comment choisir HT, TTC ou trois colonnes
  lorsque la récupération est partielle, avec validation du traitement par le
  comptable. Le jargon « assiette fiscale » a disparu de la fiche.
- Pilotage annuel : « dépense réalisée à date » et « écart avec le budget » ont
  été ajoutés à l'artefact public, puis repris dans l'explication de la revue.
- Conversion : l'invitation intermédiaire vers le service a été supprimée ; le
  seul lien commercial du corps mène au CTA final `/demarrer-un-projet`.
- Cohérence économique : « maintien opérationnel décaissé » a été remplacé par
  « dépenses externes de maintien ». Les montants HT ne sont plus appelés des
  décaissements.
- Plume : TMA est développée au premier emploi dans le corps ; « criticité »,
  « arbitrage », « socle », « assiette » et plusieurs formulations abstraites
  ont été traduits en mots ordinaires.
- Recalcul indépendant : 300 × 12 = 3 600 ; 3 × 45 × 12 = 1 620 ; totaux
  23 100, 27 900, 29 520 et 24 720 € exacts. Aucune ligne n'est comptée deux
  fois.
- Contrôles : H1 unique, sources et limites adjacentes, 30/30 tests ciblés,
  `git diff --check`, un seul lien `/demarrer-un-projet` et aucun lien service.
- Profondeur : 2 476 mots visibles, huit H2 éditoriaux, huit FAQ et temps de
  lecture calculé à 12 minutes.
- Verdict final indépendant : 0 P0, 0 P1. La P4 est autorisée.
- Snapshot :
  `docs/research/manifests/cout-maintenance-application-metier-p3.sha256`.

## 15. Rapport P4 — Plume humaine, technique et rendu réel

PASSE 4 TERMINÉE — PASS

- Plume finale : les répétitions de « réellement » ont été remplacées par des
  verbes observables ; « montants qui restent à chiffrer », « dépenses
  externes » et « fonctionnement indispensable » remplacent les formulations
  abstraites. Aucun chiffre ni fait nouveau n'a été ajouté après P3.
- Retour P3 : oui. Les 3 P1 et 4 P2 du premier verdict, puis l'unique résidu sur
  le mot « décaissé », ont tous été corrigés avant le PASS indépendant final.
- Rendu réel : build de production inspecté dans le navigateur aux largeurs CSS
  exactes 320, 390, 768, 1 024 et 1 440 px. Chaque vue possède un H1, huit H2,
  un lien final `/demarrer-un-projet` et aucun débordement horizontal.
- Inspection visuelle : premier écran mobile et bureau, exemple PlanifPro,
  première fiche verticale, CTA final, guides liés et FAQ. La deuxième réponse
  de FAQ a été ouverte par clic ; le texte reste lisible et le focus visible.
- Données structurées : `Article` et `BreadcrumbList` uniquement. Aucun
  `FAQPage`, `HowTo`, faux avis, faux prix ou `wordCount` n'est publié.
- Métadonnées : titre, description, canonique de production et état éditorial
  local `noindex, nofollow` conformes. L'image sociale répond 200 en PNG,
  mesure 1 200 × 630 px et pèse 163 151 octets ; son vocabulaire final est
  « Factures → Coûts → À chiffrer → Décision ».
- Profondeur : 2 477 mots visibles, huit H2, huit FAQ, cinq fiches chiffrées et
  12 minutes de lecture calculées à 200 mots par minute.
- Technique : Prettier, ESLint, TypeScript, 184/184 tests SEO, build de 111
  routes et vérificateur d'artefact passent. Ce dernier contrôle 88 URL, 71
  liens dans `llms.txt`, 88 pages, 53 temps de lecture et 164 blocs JSON-LD.
- Scorecard : humain 2/2, réponse 2/2, décision 2/2, preuve 2/2, autonomie 2/2,
  alternatives 2/2, conversion 2/2, différenciation 2/2, sécurité 2/2 et rendu
  2/2. Total : 20/20, sans P0 ni P1.
- Autorisation : le guide reste sous porte `ready-for-human-review` jusqu'au gel
  global des dix guides. Il ne sera indexé qu'après ce dernier contrôle.
- Snapshot :
  `docs/research/manifests/cout-maintenance-application-metier-p4.sha256`.
