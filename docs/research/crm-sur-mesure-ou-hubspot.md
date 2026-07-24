# Dossier de recherche — CRM sur mesure ou HubSpot

> Dossier ouvert en passe 1 puis complété jusqu'à la validation P4. Il conserve
> la recherche historique et documente la rédaction, les contre-audits et les
> contrôles terminés le 24 juillet 2026. Il ne constitue ni un comparatif
> tarifaire permanent, ni une recommandation automatique en faveur du
> sur-mesure.

## Journal des quatre passes

Propriétaire éditorial unique : orchestrateur du lot

| Passe                        | État                     | Date             | Responsable                              | Snapshot | Blocages |
| ---------------------------- | ------------------------ | ---------------- | ---------------------------------------- | -------- | -------- |
| 1. Recherche                 | Terminée — porte validée | 23 juillet 2026  | agent de recherche Apps/SaaS             | Manifeste P1 | Aucun |
| 2. Rédaction et intégration  | Terminée — porte validée | 24 juillet 2026  | équipe éditoriale Hagnéré Code           | Manifeste P2 | Aucun |
| 3. Contre-audit indépendant  | Terminée — porte validée | 24 juillet 2026  | final_audit_apps, anti_ia_final, seo_tech_final | Manifeste P3 | Aucun P0/P1 restant |
| 4. Plume humaine et contrôle | Terminée — porte validée | 24 juillet 2026  | orchestration éditoriale                 | Manifeste P4 | Aucun blocage éditorial |

### Manifeste du snapshot

| Fichier contrôlé | Passe | Remarque |
| ---------------- | ----- | -------- |
| `docs/research/manifests/crm-sur-mesure-ou-hubspot-p1.sha256` | P1 | Manifeste existant ; historique de recherche conservé. |
| `docs/research/manifests/crm-sur-mesure-ou-hubspot-p2.sha256` | P2 | Manifeste existant de rédaction et d'intégration. |
| `docs/research/manifests/crm-sur-mesure-ou-hubspot-p3.sha256` | P3 | Manifeste existant après contre-audit et corrections. |
| `docs/research/manifests/crm-sur-mesure-ou-hubspot-p4.sha256` | P4 | Manifeste final créé après les contrôles P4 ; son empreinte est intégrée au snapshot commun du lot. |

## 1. Fiche d'identité

```text
Slug : crm-sur-mesure-ou-hubspot
Statut actuel : publiable — validation éditoriale déléguée
Requête principale : CRM sur mesure ou HubSpot
Moment du parcours : décider
Lecteur précis : dirigeant d'une PME dont l'équipe commerciale travaille déjà dans HubSpot, dans Excel ou dans plusieurs outils, et qui hésite entre mieux configurer HubSpot, le compléter ou le remplacer
Situation déclenchante : le CRM coûte davantage, demande des contournements ou ne reflète plus le processus de vente réel ; les commerciaux saisissent ailleurs et la direction ne sait plus quelle donnée croire
Décision principale après lecture : conserver et mieux paramétrer HubSpot, l'intégrer à un outil spécifique, le remplacer par un CRM sur mesure, ou reporter le projet tant que le processus commercial n'est pas stabilisé
Niveau de connaissance au départ : sait qu'un CRM centralise prospects et ventes, mais ne connaît pas précisément les effets des droits, objets, API, exports, intégrations et coûts internes
5 questions indispensables : quelles actions commerciales faut-il réellement accomplir ? lesquelles HubSpot sait-il couvrir sans contournement ? quel coût total sur 36 mois ? quelles données et intégrations doivent rester maîtrisées ? comment sortir ou revenir en arrière ?
3 objections ou craintes : « le sur-mesure sera forcément trop cher » ; « HubSpot finira toujours par s'adapter » ; « migrer va faire perdre nos données »
Action utile sans contact commercial : faire exécuter et chronométrer douze actions commerciales réelles, puis noter les contournements, doubles saisies, permissions et exports nécessaires
CTA possible : cadrer le test d'adéquation et le scénario de sortie d'un CRM
Hors périmètre : classement général de tous les CRM, promesse d'économie, audit juridique personnalisé, migration technique détaillée, recommandation fondée uniquement sur le nombre d'utilisateurs
Date de la recherche : 23 juillet 2026
Responsable de la synthèse : agent de recherche Apps/SaaS
```

## 1 bis. Contrat de langage humain

- Phrase exacte que le lecteur pourrait dire au téléphone : « HubSpot commence
  à nous coûter cher et mes commerciaux travaillent encore dans Excel :
  est-ce qu'on doit mieux le régler ou faire notre propre CRM ? »
- Réponse qu'il attend en une phrase : gardez HubSpot s'il exécute vos actions
  de vente essentielles sans contournement coûteux ; complétez-le si quelques
  règles sont spécifiques ; ne financez un remplacement que si le test du
  processus, le coût à 36 mois et la sortie le justifient ensemble.
- Terme central expliqué sans jargon : un CRM est l'outil dans lequel
  l'entreprise suit un prospect depuis le premier échange jusqu'à la vente et
  aux actions qui suivent.
- Mots ordinaires employés par le lecteur : prospects, clients, relances,
  devis, rendez-vous, pipeline, historique, chiffre d'affaires, doublons,
  droits, export, connexion à la facturation.
- Mots d'agence ou de consultant à éviter : stack, fit-gap, RevOps, data model,
  custom object, lock-in, TCO, workflow engine. Si « coût total de possession »
  est utile, l'expliquer immédiatement comme tous les coûts sur la période.
- Projet des 150 premiers mots : reconnaître la scène « CRM payé mais Excel
  toujours ouvert », définir CRM et répondre avec les quatre voies possibles.
- Ce que le lecteur saura décider après ces 150 mots : qu'il ne doit ni acheter
  plus de licences ni lancer un développement avant d'avoir testé les mêmes
  actions de vente dans chaque option.
- H2 relus isolément : réalisé en P2 puis confirmé en P3.
- Comparaison comprise à 390 px sans colonne masquée : contrôlée en P4 avec
  des cartes empilées.
- FAQ dont la première phrase répond : contrôlée en P4.
- CTA formulé comme résultat pour le prospect : « Vérifier si votre CRM doit
  être réglé, complété ou remplacé ».

### Test sujet, action, résultat

Les formulations ci-dessous sont des risques repérés avant rédaction.

| Phrase initiale à éviter | Qui agit ? | Action concrète | Résultat pour le lecteur | Phrase réécrite |
| ------------------------ | ---------- | --------------- | ------------------------ | --------------- |
| « L'adéquation fonctionnelle doit être évaluée. » | Le dirigeant et deux commerciaux | Rejouent douze tâches dans le CRM | Ils voient où l'outil aide ou impose un détour | « Demandez à deux commerciaux de rejouer douze tâches : chaque détour devient visible. » |
| « Il faut maîtriser la réversibilité. » | Le responsable du CRM | Exporte contacts, entreprises, affaires et associations | L'entreprise sait ce qu'elle récupère réellement | « Exportez un échantillon complet et vérifiez qu'une affaire reste reliée au bon contact et à la bonne entreprise. » |
| « Une approche hybride peut créer de la valeur. » | L'entreprise | Garde HubSpot pour le standard et développe la seule étape spécifique | Elle évite une réécriture inutile | « Gardez HubSpot pour les contacts et le pipeline, puis ne développez que l'étape métier qu'il couvre mal. » |
| « Le TCO doit guider l'arbitrage. » | La direction | Additionne licences, mise en place, administration, intégrations, maintenance et sortie sur 36 mois | Elle compare deux options au même horizon | « Additionnez tous les coûts sur trois ans, y compris le temps interne et une sortie testée. » |
| « La gouvernance des données est déterminante. » | La direction commerciale | Nomme la source de vérité, les droits et le responsable des corrections | Les équipes savent quelle donnée croire | « Décidez où naît chaque donnée, qui peut la modifier et qui corrige un doublon. » |

### Test de l'ouverture

- [x] la situation vécue apparaît avant la méthode de l'agence ;
- [x] CRM, API et coût total seront définis au premier usage ;
- [x] aucun lexique de masse ne retardera la réponse ;
- [x] aucune métaphore ne deviendra un système à apprendre ;
- [x] la réponse annoncera les quatre décisions sans fausse promesse.

## 2. Cannibalisation

| Page existante | Intention de cette page | Différence du nouveau guide | Lien ou arbitrage nécessaire |
| -------------- | ----------------------- | --------------------------- | ---------------------------- |
| `/guides/combien-coute-un-crm` | Estimer licences, mise en place, migration, maintenance et sortie d'un CRM | Décider spécifiquement si HubSpot correspond encore au processus de vente réel | Lier pour détailler les postes de coût ; ne pas recopier ses fourchettes |
| `/guides/erp-ou-logiciel-sur-mesure` | Choisir largement entre ERP standard et logiciel spécifique | Se limite au travail commercial : prospects, affaires, relances, devis, droits et données | Lier seulement si le besoin déborde vers achats, stocks ou production |
| `/guides/no-code-ou-sur-mesure` | Choisir une famille générale de construction | Compare un produit nommé, une intégration hybride et un remplacement | Ne pas refaire les avantages génériques du no-code |
| `/services/outils-internes-sur-mesure` | Présenter une prestation de réalisation | Aider à conclure honnêtement « gardez HubSpot » ou « ne changez rien » | CTA tardif uniquement si le test révèle un besoin spécifique |

**Justification d'une URL distincte :** aucune page existante ne fait décider,
à partir des mêmes actions commerciales, entre reconfiguration de HubSpot,
complément spécifique, remplacement et report.

**Frontière des 60 % :** le guide ne reprend ni un cours général sur les CRM,
ni la ventilation complète des coûts déjà traitée. Son artefact central est le
protocole d'essai du processus réel et de la sortie.

## 3. Demande et vocabulaire du lecteur

### Questions observées dans la SERP le 23 juillet 2026

- Quel CRM choisir pour une PME ?
- HubSpot est-il adapté à une PME ?
- CRM sur mesure ou CRM standard ?
- HubSpot coûte-t-il trop cher quand l'équipe grandit ?
- Peut-on exporter ses données HubSpot ?
- Peut-on connecter HubSpot à un logiciel métier ?

La SERP française associe des pages HubSpot, des intégrateurs, des comparateurs
et des prestataires de CRM sur mesure. Les pages répondent surtout par listes
de fonctions, tarifs d'appel ou argumentaires de vente. La requête la plus
utile n'est donc pas « quel outil a le plus de fonctions ? », mais « lequel
exécute nos ventes sans double saisie et avec une sortie acceptable ? ».

### Formulations et variantes à employer

- CRM sur mesure ou HubSpot ;
- remplacer HubSpot ;
- HubSpot pour PME ;
- coût HubSpot ou CRM personnalisé ;
- connecter HubSpot à un logiciel métier ;
- limites HubSpot ;
- exporter les données HubSpot ;
- CRM adapté au processus commercial.

### Limite des données de demande

Search Console et Keyword Planner n'étaient pas accessibles pendant P1. Aucun
volume, difficulté ou position potentielle n'est revendiqué. La demande est
qualifiée à partir des résultats visibles et suggestions de recherche observés
le 23 juillet 2026 ; elle devra être confrontée aux données réelles du site.

## 4. Carte concurrentielle

| Page | Réponse et angle | Preuves/artefacts | Bon point | Manque décisionnel | Conflit d'intérêt éventuel |
| ---- | ---------------- | ----------------- | --------- | ------------------ | -------------------------- |
| HubSpot — choisir un CRM pour PME | Conseils de sélection puis orientation vers HubSpot | Listes de besoins et fonctions | Langage PME accessible | Ne teste pas l'hypothèse d'un complément ou d'un remplacement sur mesure | Éditeur du produit |
| HubSpot — Sales Hub | Présente fonctions, éditions et résultats marketing | Démonstrations produit et tarifs courants | Source primaire sur ce que HubSpot annonce | Les gains clients publiés ne sont pas une preuve indépendante pour le lecteur | Éditeur et vendeur |
| Flowlab — HubSpot vs CRM sur mesure | Comparaison directe annoncée comme honnête | Critères de prix, personnalisation et délai | Couvre explicitement l'arbitrage recherché | Risque de comparaison générique sans essai du processus ni sortie réelle | Prestataire CRM |
| Sites de CRM sur mesure | Le spécifique épouse le métier | Promesses de personnalisation | Font émerger les besoins atypiques | Minimiseraient parfois maintenance, adoption et risque de projet | Vendeurs de sur-mesure |
| Comparateurs CRM | Classent plusieurs logiciels | Tableaux de fonctions et prix | Vue large du marché | Peu de contexte sur les actions propres à l'entreprise | Affiliation ou génération de leads possible |

**Angle mort commun :** peu de pages demandent à l'équipe de rejouer exactement
les mêmes actions, de mesurer les contournements, puis de tester l'export des
relations entre données avant de choisir.

**Valeur originale que le guide apportera :** un test en douze actions, quatre
verdicts possibles, un coût comparable sur 36 mois et un essai de sortie qui
peut conclure en faveur de HubSpot.

## 5. Fiche de preuves

| Affirmation utilisable | Source primaire, URL et passage utile | Nature | Périmètre | Date/consultation | Confiance | Emplacement du lien visible | Conséquence lecteur | Fraîcheur |
| ---------------------- | ------------------------------------- | ------ | --------- | ----------------- | --------- | --------------------------- | ------------------- | --------- |
| Sales Hub propose une édition gratuite et plusieurs éditions payantes ; les prix et conditions varient | [HubSpot — Sales Hub](https://www.hubspot.fr/products/sales), section « tarification » | Source fournisseur | Offre HubSpot affichée en France | Consulté le 23 juillet 2026 | Élevée pour l'affichage, faible comme preuve de valeur | Au niveau de toute mention tarifaire | Relever le devis et les options nécessaires au jour du choix | À revérifier avant P2 |
| HubSpot documente des limites d'API différentes selon le type d'application, l'authentification et l'abonnement, ainsi que les réponses 429 | [HubSpot Developers — API usage guidelines](https://developers.hubspot.com/docs/developer-tooling/platform/usage-guidelines) | Documentation technique fournisseur | Intégrations HubSpot ; pas un plafond universel | Consulté le 23 juillet 2026 ; page mise à jour en 2026 | Élevée | À côté du test d'intégration | Tester le flux réel et le plan réel, pas recopier un nombre générique | Trimestrielle |
| HubSpot permet de suivre certaines limites liées aux fiches, associations, pipelines et propriétés | [HubSpot Developers — Limits tracking](https://developers.hubspot.com/docs/api-reference/latest/crm/limits-tracking/guide) | Documentation technique fournisseur | Comptes et fonctions compatibles | Consulté le 23 juillet 2026 | Élevée | Dans la partie « vérifier avant d'intégrer » | Ajouter les limites de structure au test d'adéquation | Trimestrielle |
| Les fiches HubSpot peuvent être exportées avec leurs propriétés et, selon les options, leurs associations ; les modalités sont documentées | [HubSpot — Exporter vos fiches d'informations](https://knowledge.hubspot.com/fr/import-and-export/export-records) | Aide fournisseur | Export de fiches ; ne prouve pas qu'une migration complète sera simple | Consulté le 23 juillet 2026 | Élevée | Près du test de sortie | Vérifier un export exploitable, les liens entre objets et les pièces hors export | Trimestrielle |
| Les droits HubSpot couvrent notamment consultation, modification, suppression, import/export et certains objets, avec différences selon abonnement | [HubSpot — Guide des autorisations utilisateurs](https://knowledge.hubspot.com/fr/user-management/hubspot-user-permissions-guide) | Aide fournisseur | Fonctionnalités et abonnements concernés | Consulté le 23 juillet 2026 ; mise à jour 2026 | Élevée | Dans le test des rôles | Rejouer une action avec un commercial, un manager et un administrateur | Trimestrielle |
| Les traitements de gestion commerciale ont des finalités, bases, destinataires et durées à documenter | [CNIL — référentiel gestion commerciale](https://www.cnil.fr/sites/cnil/files/atoms/files/referentiel_traitements-donnees-caractere-personnel_gestion-activites-commerciales.pdf) | Autorité de contrôle | Cadre général ; analyse propre à l'entreprise requise | Consulté le 23 juillet 2026 | Élevée | Dans la partie données et migration | Ne pas transférer mécaniquement toutes les anciennes données | Annuelle |

### Contradictions et données à ne pas publier

- Ne pas reprendre les pourcentages de gains commerciaux publiés par HubSpot
  comme résultat attendu ou preuve indépendante.
- Ne pas figer les prix observés sans date, devise, taxes, nombre de sièges,
  engagement, promotion et fonctions réellement nécessaires.
- Ne pas écrire qu'un CRM sur mesure est moins cher, plus sûr ou plus simple par
  nature.
- Ne pas présenter une limite d'API comme identique pour tous les comptes.
- Ne pas confondre « export disponible » avec « migration complète, fidèle et
  réimportable ».
- Ne pas annoncer un seuil arbitraire d'utilisateurs au-delà duquel le
  sur-mesure deviendrait rentable.
- Ne pas inventer de client, de délai de migration, de retour sur investissement
  ou de taux d'adoption.

### Calculs reproductibles

Le guide comparera les options sur 36 mois, sans publier de moyenne de marché.

- Nature du résultat : coût total estimatif, pas ROI garanti.
- Horizon et périodicité : 36 mois ; coûts mensuels, annuels et ponctuels
  distingués.
- Formule : `coût 36 mois = licences + mise en place + migration + intégrations
  + administration interne + formation + maintenance + hébergement éventuel +
  coût estimé d'une sortie testée`.
- Licences : prix courant × sièges réellement nécessaires × durée, avec
  engagement et taxes précisés.
- Temps interne : heures observées × coût horaire chargé choisi par
  l'entreprise ; ne compter comme gain que du temps réellement supprimé ou
  réaffecté.
- Coût d'erreur : ne pas monétiser sans registre d'incidents et hypothèse
  explicite.
- Contrôle inverse : recalcul annuel, puis division par 36 pour vérifier le coût
  mensuel moyen ; comparer au total des postes détaillés.
- Postes inclus une seule fois : cadrage, migration initiale, formation
  initiale.
- Postes exclus ou inconnus, explicitement « à confirmer » : évolution des
  tarifs, volume futur, prestations imposées, nettoyage réel des données,
  nouvelles obligations, coût d'opportunité.

## 6. Empreinte éditoriale à ne pas reproduire

| Guide | Type d'ouverture | Progression | Dispositif récurrent | Type d'exemple | Place du CTA | Type de conclusion |
| ----- | ---------------- | ----------- | -------------------- | -------------- | ------------ | ------------------ |
| `combien-coute-un-crm` | Question budgétaire | Postes de coût puis scénarios | Coût total | Scénarios chiffrés | Fin | Budget et vigilance |
| `erp-ou-logiciel-sur-mesure` | Choix d'architecture large | Standard, spécifique, hybride | Matrice | Cas d'entreprise fictif | Fin | Arbitrage |
| `no-code-ou-sur-mesure` | Duel de méthodes | Avantages, limites, coût, sortie | Tableau comparatif | Projet fictif | Fin | Choix par complexité |
| `connecter-erp-crm-logiciel-metier` | Données dispersées | Flux, source de vérité, erreurs | Carte des échanges | Flux métier | Fin | Architecture progressive |

Choix du nouveau guide :

```text
Tension ou question motrice : « Pourquoi payons-nous un CRM si l'équipe vend encore ailleurs ? »
Type d'ouverture retenu et pourquoi : scène de réunion commerciale avec HubSpot, Excel et le devis ouverts ; elle rend la douleur immédiatement reconnaissable
Progression retenue et pourquoi : douze actions réelles → trois tests de données/droits/intégrations → coût à 36 mois → essai de sortie → quatre verdicts
Artefact signature : fiche de test des douze actions et preuve de sortie
Rythme/registre de voix : phrases directes, vocabulaire de vente, une décision à la fois
Place naturelle du CTA : après le verdict autonome, jamais avant
Forme de conclusion : « votre prochaine action lundi matin », différente selon le verdict
Au moins trois différences avec les guides voisins : essai chronométré ; HubSpot nommé et documenté ; export relationnel testé ; option de reconfiguration prioritaire ; conclusion possible « gardez HubSpot »
```

## 7. Plan annoté

| Section provisoire | Question résolue | Preuve ou exemple | Conséquence/décision | Format choisi |
| ------------------ | ---------------- | ----------------- | -------------------- | ------------- |
| Vous payez HubSpot, mais Excel reste ouvert | Est-ce bien votre situation ? | Scène de dirigeant | Ne pas commencer par un catalogue de fonctions | Ouverture narrative courte |
| La réponse courte : quatre voies, pas deux | Faut-il remplacer ? | Arbre simple | Garder, régler, hybrider, remplacer ou reporter | Cartes empilées |
| Rejouez douze actions de vente | Où l'outil gêne-t-il vraiment ? | Créer un prospect, qualifier, relancer, deviser, valider, transmettre, prévoir | Transformer les plaintes en faits | Fiche test |
| Vérifiez les rôles et la donnée | Qui voit, modifie et croit quoi ? | Trois profils et une affaire test | Corriger droits et source de vérité | Parcours |
| Testez les connexions utiles | Le problème vient-il du CRM ou de ses interfaces ? | Facturation, messagerie, support, logiciel métier | Choisir configuration ou hybride | Schéma simple |
| Comparez le coût sur 36 mois | Qu'est-ce qui coûte réellement ? | Formule reproductible | Comparer au même horizon | Calcul guidé |
| Faites un essai de sortie | Que récupérez-vous ? | Export échantillon avec associations | Réduire le risque avant décision | Checklist |
| Quatre verdicts honnêtes | Quelle option correspond au test ? | Conditions observables | Décider sans seuil magique | Quatre cartes |
| Ce qu'il faut faire lundi | Quelle action sans prestataire ? | Test de deux commerciaux | Avancer ou arrêter | Conclusion opérationnelle |
| Bon fit, mauvais fit et FAQ | Quand demander une aide externe ? | Cas limites | Conversion loyale | Encadrés et réponses directes |

### Scénario dirigeant prévu

**Exemple illustratif fictif :** une PME de maintenance emploie six commerciaux.
HubSpot suit correctement prospects et affaires, mais les devis complexes et
la disponibilité des techniciens sont recopiés dans Excel. Le test peut
conclure qu'il est inutile de réécrire le CRM : HubSpot reste la source des
contacts et affaires, tandis qu'un module spécifique gère uniquement le devis
technique et renvoie son statut.

Aucun gain, tarif, délai ni résultat client ne sera attribué à cette entreprise.

### FAQ résiduelle prévue

- HubSpot gratuit suffit-il à une petite entreprise ?
- Peut-on exporter toutes ses données HubSpot ?
- Un CRM sur mesure peut-il rester connecté à HubSpot ?
- À partir de combien d'utilisateurs faut-il du sur-mesure ?
- Un CRM sur mesure est-il plus sécurisé ?
- Qui possède les données et le code ?

Chaque réponse commencera par « oui », « non » ou « cela dépend de… », puis
nommera le test à effectuer. La question du nombre d'utilisateurs rejettera tout
seuil universel.

## 8. Ressource et conversion

```text
Une ressource est-elle naturellement nécessaire ? oui, sous réserve de réalisation et de test en P2/P4
Problème qu'elle résout après la lecture : comparer les options avec les mêmes actions et le même horizon
Résultat autonome produit : verdict documenté garder / régler / hybrider / remplacer / reporter
Format éditable et format de consultation : tableur éditable + PDF lisible, uniquement s'ils sont réellement générés
Rubriques, champs ou matrices réellement livrés : 12 actions, utilisateurs, fréquence, temps, détour, erreur, permission, donnée source, intégration, criticité, option, coût 36 mois, test de sortie
Exemple rempli : scénario fictif de la PME de maintenance
Conclusion « ne pas investir » possible : oui
Sources, hypothèses et limites visibles : tarifs datés, hypothèses de sièges et de temps, fonctions dépendantes du plan
Données saisies et destination de ces données : aucune collecte requise pour un fichier local
Processus de génération reproductible : modèle versionné dans le dépôt si la ressource est créée
Journal de QA : aucun fichier téléchargeable n'a été promis ; le contenu intégré à la page a été contrôlé en P4
Limites connues et niveau de revue humaine : pas de benchmark de marché ; validation par le décideur et l'équipe commerciale
Mode de maintenance : contrôle trimestriel des liens et tarifs ; revue annuelle du modèle
Test du fichier ou outil : non applicable ; aucun fichier téléchargeable n'a été créé ou annoncé
Bon fit Hagnéré Code : quelques étapes spécifiques, plusieurs intégrations ou migration nécessitant cadrage et développement
Mauvais fit : CRM standard bien utilisé, processus commercial encore instable, simple besoin de formation ou de nettoyage
Action non commerciale : faire rejouer douze actions par deux commerciaux cette semaine
CTA principal et résultat après clic : « Vérifier si mon CRM doit être réglé, complété ou remplacé » vers /demarrer-un-projet ; le prospect obtient un échange de cadrage, pas une promesse de remplacement
```

## 9. Rapport P1 — Recherche

```text
PASSE 1 TERMINÉE
Slug : crm-sur-mesure-ou-hubspot
Lecteur et phrase réelle : dirigeant de PME — « HubSpot coûte plus cher et mes commerciaux travaillent encore dans Excel : on le règle ou on le remplace ? »
Décision : garder, reconfigurer, hybrider, remplacer ou reporter à partir d'un test identique
Angle et forme dominante : douze actions commerciales, coût sur 36 mois et essai de sortie
Pages proches et différence : le guide du coût détaille le budget ; celui-ci teste l'adéquation spécifique de HubSpot au processus réel
Sources décisives : documentation officielle HubSpot sur offres, API, limites, droits et exports ; référentiel CNIL de gestion commerciale
Incertitudes exclues : performance commerciale du fournisseur, seuil d'utilisateurs, prix futur, rentabilité garantie, facilité supposée d'une migration
Action autonome et CTA possible : fiche de douze actions ; vérifier si le CRM doit être réglé, complété ou remplacé
Plan : scène, réponse, actions, rôles/données, intégrations, coût, sortie, verdicts, prochaine action, FAQ
Snapshot : dossier P1 courant ; manifeste à produire par l'orchestrateur
```

## 10. Historique P1 — portes prévues le 23 juillet 2026

> État conservé pour la traçabilité de P1 : ces trois portes étaient alors à
> exécuter. Elles ont toutes été levées le 24 juillet 2026 ; les preuves et le
> verdict courant figurent dans la validation finale, section 12.

- P2 devait couvrir la rédaction humaine, l’intégration, les sources visibles
  au niveau des affirmations et les contrôles techniques.
- P3 devait organiser le contre-audit indépendant, la réouverture des sources,
  le recalcul à 36 mois et la correction de tout défaut prioritaire.
- P4 devait vérifier la plume, le rendu réel aux cinq largeurs, les thèmes, les
  liens, le CTA, l’image sociale, la console et l’autorisation éditoriale.

## 11. Historique P1 — revue préparatoire

> Cette photographie du 23 juillet 2026 explique les conditions posées avant
> rédaction. Elle est remplacée, pour le statut courant, par la section 12.

| Critère | État P1 | Condition de validation finale |
| ------- | ------- | ------------------------------ |
| Intention et décision | Validées | Ouverture répond dans les 150 premiers mots |
| Pédagogie dirigeant | Contractualisée | Test par une personne réelle ou mention explicite de son absence |
| Profondeur | Validée au plan | Les douze actions, les droits, l'intégration et la sortie sont réellement expliqués |
| Comparaison | Validée | Même processus et même horizon pour toutes les options |
| Preuves | Corpus primaire daté | Sources rouvertes au moment de P2/P3 |
| Originalité | Validée | Aucun copier-coller de la structure des guides voisins |
| Conversion | Loyale | Action autonome avant le CTA ; mauvais fit visible |
| SEO | Hypothèse SERP seulement | Aucune promesse de position ou d'indexation |
| Juridique | Cadre général | Renvoi DPO/juriste si traitement ou migration présente un risque propre |
| Rendu et accessibilité | Non testés | Contrôle navigateur P4 obligatoire |

- État historique P1 — personne réelle impliquée dans le test : non.
- État historique P1 — contre-audit indépendant : non réalisé.
- État historique P1 — page publique, métadonnées, données structurées et image
  sociale : non créées à ce stade.
- État historique P1 — autorisation de publication : hors périmètre de cette
  passe.

## 12. Validation finale P2, P3 et P4 — 24 juillet 2026

### Rapport P2 — Rédaction et intégration

- Article complet intégré sur `/guides/crm-sur-mesure-ou-hubspot`, avec
  ouverture destinée au dirigeant, comparaison loyale, sources visibles,
  exemples fictifs signalés, limites, FAQ, maillage et CTA unique.
- Métadonnées, données structurées `Article` et `BreadcrumbList`, image sociale
  dédiée et inscription au registre des guides contrôlées.
- Snapshot : `docs/research/manifests/crm-sur-mesure-ou-hubspot-p2.sha256`.

### Rapport P3 — Contre-audits et corrections

- `final_audit_apps` : contre-audit indépendant du fond, des sources, des
  comparaisons, des calculs, des limites et de la pédagogie dirigeant.
- `anti_ia_final` : passe de plume humaine, suppression des formulations
  mécaniques et vérification de la réponse dans l'ouverture.
- `seo_tech_final` : contrôle indépendant de l'intégration SEO et technique.
- Les corrections P3 ont été appliquées puis relues ; aucun P0 ni P1 ne reste.
- Snapshot : `docs/research/manifests/crm-sur-mesure-ou-hubspot-p3.sha256`.

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
  `docs/research/manifests/crm-sur-mesure-ou-hubspot-p4.sha256`.

### Verdict

**Score final : 19/20.** Le fond, la pédagogie, les preuves, la comparaison, la
conversion et l'intégration sont validés. Un point reste volontairement retiré
car aucun lecteur humain réel indépendant n'a participé au test final.

Statut actuel : publiable — validation éditoriale déléguée

Décision de publication : autorisée explicitement par le commanditaire

Test réalisé par une personne réelle : non

Réserve SEO : la page est techniquement indexable ; indexable ne signifie pas
indexée par Google, et aucune indexation effective ni position n'est promise.
