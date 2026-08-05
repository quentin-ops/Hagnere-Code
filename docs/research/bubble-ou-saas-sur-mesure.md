# Dossier de recherche — `bubble-ou-saas-sur-mesure`

> Passe 1 créée le 5 août 2026 depuis un slug sans route historique, puis passe
> 2 de vérification factuelle et quantitative. La page reste un brouillon
> privé : elle n’est ni enregistrée dans le catalogue, ni déployée, ni publiée,
> ni indexée. La date de consultation des sources n’est jamais une date de
> publication.

## A. Identité éditoriale et contrat de réponse

### A1. Fiche d’identité

| Champ                           | Décision P1                                                                                                                                                |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Slug                            | `bubble-ou-saas-sur-mesure`                                                                                                                                |
| Requête principale, non mesurée | « Bubble ou SaaS sur mesure : comment choisir ? »                                                                                                          |
| Moment du parcours              | Décider et sécuriser, après une première compréhension du besoin                                                                                           |
| Lecteur précis                  | Dirigeant, responsable métier ou porteur de produit non technique qui envisage Bubble, l’utilise déjà, ou reçoit une proposition de reconstruction en code |
| Situation déclenchante          | Nouveau produit, hausse de charge/coûts, exigence de données, dépendance, incident, départ d’un prestataire ou projet de migration                         |
| Décision principale             | Rester/démarrer sur Bubble, construire en code dédié, isoler une capacité, simplifier ou reporter                                                          |
| Niveau de départ                | Le lecteur sait décrire le service mais ne sait pas traduire une préférence technique en preuves comparables                                               |
| Questions indispensables        | Même service comparé ? charge réelle ? données et contrat ? équipe remplaçable ? TCO sur le même horizon ? changement de solution réellement répété ?      |
| Objections                      | « Bubble ne scale pas », « le code coûte forcément plus cher », « j’exporte le JSON donc je possède le code »                                              |
| Action autonome                 | Remplir une fiche de décision en neuf rubriques et exécuter un essai de sortie                                                                             |
| CTA                             | Tardif, unique, vers `/demarrer-un-projet`, sans choix technique ni devis automatique                                                                      |
| Hors périmètre                  | Devis, délai, audit juridique, certification de conformité, benchmark universel, choix détaillé de stack, plan complet de migration                        |
| Recherche                       | Sources ouvertes et SERP observées le 5 août 2026                                                                                                          |
| Responsable P1                  | `bubble_saas_p1`                                                                                                                                           |

### A2. Contrat de réponse

Bubble est rationnel lorsque le service attendu, la charge, les données,
l’exploitation et la possibilité de changer de solution passent des tests
définis par l’organisation. Une base de code dédiée devient défendable
lorsqu’une exigence non négociable échoue, ou lorsqu’un coût total comparable le
justifie, que l’équipe sait exploiter la cible et qu’une autre personne peut
reprendre après un départ. Une approche hybride n’est retenue que pour une
frontière stable et testée. Une simplification ou un report restent des
décisions complètes. Aucun seuil d’utilisateurs, prix de migration, devis,
délai, gain ou hiérarchie de performance n’est inventé.

### A3. Contrat de langage humain

- Phrase téléphonique : « Est-ce que je continue sur Bubble ou est-ce que je
  vais le payer plus tard en performance, en coûts et en migration ? »
- Réponse en une phrase : « Comparez le même service, mesurez les parcours et
  le coût total, puis testez la récupération et la reprise avant de choisir. »
- Terme central : le **coût total de possession (TCO)** additionne ce qu’il faut
  réellement pour construire, exploiter, changer et quitter une solution sur
  un horizon commun.
- Mots ordinaires : abonnement, charge, données, accès, équipe, panne, export,
  migration, coût de sortie.
- Mots à éviter ou définir : scalabilité, lock-in, WU, DPA, P95, idempotence,
  réversibilité.
- Les 150 premiers mots partent d’une hésitation concrète — lancer, conserver
  ou reconstruire —, répondent directement, définissent les deux objets
  comparés et ouvrent cinq sorties au lieu d’un duel.
- Décision après ouverture : le lecteur sait qu’une migration n’est ni la seule
  sortie ni une amélioration automatique.
- H2 relus isolément : oui.
- Comparaison à 390 px : le composant `GuideTable` produit des cartes mobiles,
  sans colonne masquée.
- FAQ : chaque première phrase répond par oui/non ou ferme le raccourci.
- CTA : « Décrire mon besoin et mes contraintes », destination et limites
  explicitées sans promettre un choix automatique.

#### Test sujet, action, résultat

| Phrase abstraite retirée              | Qui agit ?                                     | Action                                                     | Résultat                                | Phrase publiée                                                          |
| ------------------------------------- | ---------------------------------------------- | ---------------------------------------------------------- | --------------------------------------- | ----------------------------------------------------------------------- |
| « Il faut penser à la réversibilité » | Équipe produit et exploitation                 | Exporte, reconstruit à blanc et teste le retour arrière    | Elle sait ce qui est reprenable         | « Exportez une fois, puis prouvez que vous savez reprendre. »           |
| « Comparez la scalabilité »           | Responsable technique avec le métier           | Rejoue les parcours avec données et charge cibles          | La capacité devient observable          | « Mesurez les parcours qui comptent avant de parler de capacité. »      |
| « Prenez en compte le RGPD »          | Responsable de traitement, juridique, sécurité | Cartographie données, transferts, rôles et contrat         | L’usage acceptable est qualifié         | « Un DPA ne sécurise pas à lui seul votre application. »                |
| « Calculez le TCO »                   | Finance et propriétaires de postes             | Date, source et déduplique huit lignes sur le même horizon | Les deux options deviennent comparables | « Calculez le TCO sur le même horizon et bloquez les doubles comptes. » |
| « Faites un choix objectif »          | Comité de décision                             | Applique exigences, preuves, TCO et contre-cas             | Il retient une des cinq sorties         | « Choisissez la preuve à obtenir, pas le camp à rejoindre. »            |

Ouverture : situation avant l’agence, sigles définis, aucun lexique de masse,
réponse directe et réserve reportée près de la preuve concernée.

## B. Corpus interne et cannibalisation

### B1. Documents et code relus

Lecture intégrale avant écriture : `CLAUDE.md`, règle d’or SEO/publication,
charte qualité, workflow quatre passes, instructions de qualité, roadmap,
registre de coordination externe, modèle de dossier, gel d’entrée, registre
`src/lib/guides.ts`, briques premium et SEO, service SaaS et guides voisins
#28 à #31.

Le snapshot, la branche, le périmètre fermé et les STOPs d’entrée sont dans
`bubble-ou-saas-sur-mesure-input-freeze.md`, volontairement exclu du manifeste
P1.

### B2. Cannibalisation

| Page                                         | Intention actuelle                                         | Frontière du nouveau guide                                        | Lien/arbitrage                                                                      |
| -------------------------------------------- | ---------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `/services/saas-applications-metier`         | Présenter une offre de réalisation sur mesure et convertir | Comparaison neutre, fondée sur preuves, où Bubble peut gagner     | Aucun argument commercial repris ; conflit d’intérêt visible ; CTA seulement en fin |
| `/guides/mvp-saas-quoi-inclure`              | Définir le contenu d’un MVP                                | Choisir un mode de construction et d’exploitation après le besoin | Lien si le périmètre reste indéfini                                                 |
| `/guides/prioriser-fonctionnalites-mvp-saas` | Classer un backlog                                         | Comparer architecture, TCO et sortie                              | Lien si le besoin est trop large                                                    |
| `/guides/agence-saas-ou-freelance`           | Choisir une organisation de delivery                       | Choisir Bubble, code, hybride, simplification ou report           | L’équipe est un axe du choix, pas la question principale                            |
| `/guides/mvp-prototype-ou-poc`               | Choisir le dispositif qui lève une inconnue                | Tester une architecture et son exploitation                       | Lien vers le protocole expérimental                                                 |

**Justification d’une URL distincte :** aucune page existante ne rapproche,
pour Bubble et le code dédié, l’offre actuelle, la charge observée, les données,
le TCO, la propriété et un essai de sortie.

Conflit interne neutralisé : la page service contient un raccourci ancien selon
lequel le no-code ne suivrait pas certaines ambitions. La P1 ne le reprend pas.
La documentation actuelle montre du mobile natif, des WU et une offre
Enterprise ; la décision doit rester propre au cas.

Hagnéré Code vend du développement sur mesure : ce conflit d’intérêt est réel.
Il est déclaré dans la page, et la méthode conserve Bubble, l’hybride, la
simplification et le report comme résultats valables.

## C. Demande, vocabulaire et carte concurrentielle

### C1. Observation des résultats

Requêtes exécutées le 5 août 2026, sans outil de volume :

- `Bubble ou développement sur mesure comparatif` ;
- `Bubble vs développement custom sur mesure` ;
- `quand quitter Bubble migrer vers code` ;
- `Bubble vs custom development TCO performance vendor lock-in`.

Vocabulaire observé : rapidité, coût initial, coût long terme, performance,
scalabilité, propriété, conformité, vendor lock-in, migration et « when to
switch ». Les formulations et le classement sont un instantané de SERP, pas
une preuve de demande ni de volume.

### C2. Carte concurrentielle

| Page observée                                    | Réponse / angle                                   | Artefact            | Bon point                                                   | Manque décisionnel                                                        | Conflit               |
| ------------------------------------------------ | ------------------------------------------------- | ------------------- | ----------------------------------------------------------- | ------------------------------------------------------------------------- | --------------------- |
| Flowlab, « No-code vs développement sur mesure » | Grille orientée outil interne PME, seuils et prix | Tableau + chiffrage | Question française proche                                   | Seuils universels et coûts non transposables ; sortie peu testée          | Vend du sur-mesure    |
| MigrateLab, « Bubble vs Custom Code »            | Coût, performance, contrôle, TCO 1–3 ans          | Tableau TCO         | Horizon explicitement comparé                               | Montants éditoriaux non utilisables comme devis ; cadre contractuel mince | Vend la migration     |
| Brilworks, « When to Make the Switch »           | Quitter après validation/croissance               | Tableau binaire     | Donne des déclencheurs                                      | « Scale/compliance/code ownership » trop globaux ; hybride peu instruit   | Vend du développement |
| Bubble, page de comparaison                      | Capacités Bubble face à d’autres outils           | Scores et tableau   | Offre actuelle et fonctions                                 | Source commerciale, comparaison non centrée sur code dédié ni sortie      | Éditeur de Bubble     |
| Bubble, article sur les limites du no-code       | Contraintes à tester par cas                      | Liste de tests      | Reconnaît lock-in, performance, intégrations et gouvernance | Ne construit pas le TCO symétrique ni l’exercice de reprise               | Éditeur de Bubble     |

**Angle mort commun :** les pages opposent souvent vitesse initiale et contrôle,
avec des seuils d’utilisateurs ou des montants génériques, sans faire exécuter
le même test sur les deux options ni séparer export de données, app JSON, code,
workflows, exploitation et continuité.

**Valeur originale :** cinq sorties, une base comparable, un relevé officiel
daté, un protocole de charge sans seuil inventé, un TCO dédupliqué et un essai
de sortie en six capacités.

## D. Fiche de preuves primaires

Toutes les pages ci-dessous ont été ouvertes le 5 août 2026. Les mentions
« mis à jour » appartiennent aux pages Bubble et ne valent pas audit externe.

| Affirmation utilisable                                                                                                                                                                                                                                  | Source primaire et passage utile                                                                                                                                                                                                                    | Nature / périmètre                                                                                                                                  | Confiance               | Lien visible               | Conséquence                                                   | Fraîcheur                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- | -------------------------- | ------------------------------------------------------------- | -------------------------------------------- |
| Free 0 $ US, 50K WU ; Starter 59 $ US/mois annuel, 175K ; Growth 209 $ US, 250K ; Team 549 $ US, 500K ; Enterprise sur contact                                                                                                                          | [Bubble Pricing](https://bubble.io/pricing), cartes plans et FAQ ; [Bubble Terms](https://bubble.io/terms), §11 pour la devise, les taxes et le paiement d’avance                                                                                   | Offre affichée, web + mobile ; prix en dollars US, taxes applicables en sus, période payée d’avance ; montant fiscal final propre au client inconnu | Haute pour l’instantané | §03 + sources              | Relevé daté, jamais TCO ; add-ons séparés                     | Volatile, contrôle avant achat               |
| Les WU agrègent les ressources serveur des processus                                                                                                                                                                                                    | [Workload](https://manual.bubble.io/help-guides/workload), « What is workload? »                                                                                                                                                                    | Modèle de mesure/facturation Bubble                                                                                                                 | Haute                   | §03–04                     | Mesurer l’app, pas les comptes                                | Documentation consultée le 05/08/2026        |
| Pas de réponse universelle par nombre d’utilisateurs                                                                                                                                                                                                    | [Scaling with Bubble](https://manual.bubble.io/help-guides/infrastructure/hosting-and-scaling/scaling-with-bubble), « How many users… »                                                                                                             | Charge dépend des actions et ressources                                                                                                             | Haute                   | §04 + FAQ                  | Retrait de tout seuil universel                               | À recontrôler si modèle WU change            |
| Web et mobile partagent backend/base ; WU cumulées                                                                                                                                                                                                      | [Bubble Pricing](https://bubble.io/pricing), FAQ workload                                                                                                                                                                                           | Même projet web/mobile                                                                                                                              | Haute                   | §03                        | Additionner les charges                                       | Volatile avec l’offre                        |
| Mobile natif sans wrapper, vues propres et backend partagé                                                                                                                                                                                              | [What is a native mobile app?](https://manual.bubble.io/help-guides/getting-started/building-for.../native-ios-and-android/what-is-a-native-mobile-app) et [publishing](https://manual.bubble.io/help-guides/publishing-your-app/native-mobile-app) | Éditeur mobile / React Native ; systèmes supportés évolutifs                                                                                        | Moyenne-haute           | §03                        | Retrait du raccourci PWA/wrapper                              | Fonction émergente, recontrôle indispensable |
| Le contenu direct inclut design, workflow et données ; client conserve ses droits                                                                                                                                                                       | [Bubble Terms](https://bubble.io/terms), sections 6 et 8                                                                                                                                                                                            | Relation client–Bubble, sous réserve du contrat applicable                                                                                          | Haute                   | §06 + FAQ                  | Séparer propriété du contenu et plateforme                    | Conditions modifiables                       |
| Bubble conserve la plateforme                                                                                                                                                                                                                           | [Bubble Terms](https://bubble.io/terms), 8(a)                                                                                                                                                                                                       | Moteur/plateforme Bubble                                                                                                                            | Haute                   | §06                        | Le droit sur les workflows ne fournit pas un runtime autonome | Conditions modifiables                       |
| Données exportables CSV, JSON, NDJSON                                                                                                                                                                                                                   | [Exporting data](https://manual.bubble.io/help-guides/data/the-database/export-import-data/exporting-data)                                                                                                                                          | Données de la base ; export pouvant être retardé par le scheduler                                                                                   | Haute                   | §06                        | Tester formats, relations et délai                            | Documentation datée d’environ un an          |
| L’application peut être exportée/importée en JSON dans Bubble avec un plan Growth                                                                                                                                                                       | [Settings Overview](https://manual.bubble.io/help-guides/getting-started/navigating-the-bubble-editor/tabs-and-sections/settings-tab/overview), « Export/Import application »                                                                       | Sauvegarde/portabilité au sein de Bubble, pas runtime autonome                                                                                      | Haute                   | §06                        | Ne pas appeler cela code exécutable                           | Documentation consultée le 05/08/2026        |
| L’application n’est pas exportable comme code autonome ; logique à reconstruire hors Bubble                                                                                                                                                             | [Application and data ownership](https://manual.bubble.io/account-and-marketplace/application-and-data-ownership), « Exporting your application & data »                                                                                            | Documentation informative ; Terms prévalent                                                                                                         | Haute                   | §06 + FAQ                  | Planifier reconstruction et reprise                           | Recontrôle avant migration                   |
| Hébergement partagé aux États-Unis ; choix de région uniquement avec une instance Enterprise dédiée selon offre/contrat                                                                                                                                 | [How Bubble hosting works](https://manual.bubble.io/help-guides/infrastructure/hosting-and-scaling/how-bubble-hosting-works), FAQ                                                                                                                   | L’environnement partagé ne permet pas de choisir la région                                                                                          | Haute                   | §05                        | Qualifier caractère dédié et région avant décision            | Volatile par offre                           |
| Les privacy rules contrôlent recherche, vue et modification et sont la protection applicative principale                                                                                                                                                | [Privacy](https://manual.bubble.io/core-resources/data/privacy) et [security features](https://manual.bubble.io/help-guides/security/bubbles-security-features)                                                                                     | Configuration par le constructeur                                                                                                                   | Haute                   | §05                        | Tester chaque type et rôle                                    | Revoir après évolution du schéma             |
| DPA : mesures, transferts, sous-traitants, suppression et responsabilités client                                                                                                                                                                        | [Bubble DPA](https://bubble.io/dpa), §§5, 7, 9, 12–13                                                                                                                                                                                               | Traitement de données pour le client ; DPA révisé le 21/04/2025                                                                                     | Haute                   | §05 + sources              | Contrat et usage à qualifier                                  | Vérifier version signée                      |
| DPA §13.4 exclut identifiants publics, biométrie, mots de passe de comptes en ligne, identifiants financiers, déclarations fiscales, cartes PCI, données personnelles d’enfants de moins de 16 ans, données pénales et catégories particulières du RGPD | [Bubble DPA](https://bubble.io/dpa), §13.4                                                                                                                                                                                                          | Usage contractuel du service visé                                                                                                                   | Haute                   | §05 + FAQ                  | Suspendre si ces données sont concernées avant qualification  | Décisif, vérifier contrat actuel             |
| Liste de sous-traitants révisée le 28/04/2026                                                                                                                                                                                                           | [Bubble Subprocessors](https://bubble.io/subprocessors)                                                                                                                                                                                             | Fournisseurs actuels, données d’utilisateurs finaux vs directs                                                                                      | Haute                   | Dossier / §05 par lien DPA | Inventaire vivant, notification/objection à instruire         | Très volatile                                |
| Le responsable du traitement doit encadrer le sous-traitant                                                                                                                                                                                             | [CNIL, sous-traitant](https://www.cnil.fr/fr/sous-traitant) et RGPD art. 28                                                                                                                                                                         | Cadre UE/France, pas conseil au cas particulier                                                                                                     | Haute                   | §05 + sources              | Retrait du verdict binaire « outil conforme »                 | Source institutionnelle                      |
| Les transferts hors UE exigent un inventaire des flux, lieux, prestataires et mécanismes                                                                                                                                                                | [CNIL, transferts hors UE](https://www.cnil.fr/fr/responsables-de-traitement-comment-identifier-et-traiter-des-transferts-de-donnees-hors-ue) ; [Bubble DPA](https://bubble.io/dpa), mécanismes DPF/SCC selon le cas                                | Qualification du transfert concret, pas validation générique                                                                                        | Haute                   | §05 + sources              | Cartographier hébergement, support et sous-traitants          | Revoir avec la liste courante                |
| Les Terms promettent des efforts commercialement raisonnables, pas un service ininterrompu, et plafonnent en principe la responsabilité à 100 $ US avec exceptions listées                                                                              | [Bubble Terms](https://bubble.io/terms), §§5 et 14                                                                                                                                                                                                  | Conditions standard, à comparer au contrat signé                                                                                                    | Haute                   | §05 + sources              | Ne pas transformer les Terms en SLA chiffré                   | Conditions modifiables                       |
| Retour de version applicative et restauration de base sont deux opérations distinctes ; une restauration peut retirer les écritures postérieures au point choisi                                                                                        | [Bubble Manual — Version control](https://manual.bubble.io/help-guides/maintaining-an-application/version-control) et [Database backups](https://manual.bubble.io/help-guides/maintaining-an-application/database-maintenance/database-backups)     | Continuité et reprise, profondeur selon plan                                                                                                        | Haute                   | §06 + sources              | Tester séparément sur copie et prévoir la réconciliation      | Revoir avec le plan souscrit                 |

### D1. Contradictions, limites et données à ne pas publier

1. Le droit contractuel sur design/workflows/données ne contredit pas l’absence
   de code exécutable exportable : ce sont deux niveaux différents. Les réunir
   sous « je possède/ne possède pas mon app » serait trompeur.
2. Le JSON d’application s’importe dans Bubble ; il ne prouve pas une exécution
   autonome. L’expression « export du code Bubble » est retirée.
3. Bubble affirme pouvoir monter en charge, mais sa propre documentation dit
   que la consommation dépend de l’application. Aucune limite ou capacité par
   nombre d’utilisateurs n’est publiée.
4. La documentation mobile contient des mentions historiques de bêta et de
   prix futur tandis que la page Pricing actuelle inclut web et mobile. La page
   de prix au jour de la décision prime pour l’offre ; fonctions et systèmes
   supportés doivent être revérifiés.
5. L’environnement partagé est annoncé aux États-Unis ; le choix de région ne
   concerne qu’une instance Enterprise dédiée selon l’offre et le contrat. Il
   est interdit d’en déduire « non RGPD » ou « conforme RGPD » sans flux, rôle,
   DPA, mécanisme de transfert et configuration.
6. Les termes peuvent changer cinq jours après publication pour les utilisateurs
   existants selon leur section 1(e). Le guide ne fige aucun droit futur.
7. Les pages concurrentes donnent coûts de migration, délais et seuils. Ils ne
   sont pas repris : aucun corpus publiable ne les rend applicables au lecteur.
8. Aucun devis, délai, taux de réussite, gain client, benchmark Hagnéré Code ou
   validation de dirigeant extérieur n’est disponible.
9. Aucune `datePublished` ni `dateModified` n’est prouvée pour cette route sans
   historique. Elles sont omises des metadata et de l’Article JSON-LD. **STOP
   avant publication réelle.**

### D2. Calculs reproductibles

#### Relevé annuel de base, pas TCO

- Source : prix mensuels affichés et mention « billed annually » le 05/08/2026 ;
  les Terms §11 établissent le paiement en dollars US, les taxes applicables en
  sus et le paiement d’avance pour la période facturée.
- Starter : `59 $ US × 12 = 708 $ US`; contrôle inverse `708 ÷ 12 = 59`.
- Growth : `209 $ US × 12 = 2 508 $ US`; contrôle inverse `2 508 ÷ 12 = 209`.
- Team : `549 $ US × 12 = 6 588 $ US`; contrôle inverse `6 588 ÷ 12 = 549`.
- Unité : dollars US, hors taxes. Conversion éventuelle, montant fiscal final,
  WU additionnelles, overages, plugins, stockage, services tiers et travail
  humain restent propres au cas. Le stockage additionnel est affiché à
  `3 $ US / 100 Go / mois` ; ce poste n’est pas inclus dans les bases ci-dessus.
- Arrondi : aucun.
- Interdiction : ne pas comparer ces bases à un devis de développement.

#### TCO symétrique

```text
TCO_option(H) = INITIAUX_option
  + PLATEFORME_INFRA_option(H)
  + INTEGRATIONS_option(H)
  + EXPLOITATION_option(H)
  + MAINTENANCE_option(H)
  + SECURITE_CONFORMITE_option(H)
  + INCIDENTS_option(H)
  + SORTIE_option

INITIAUX_Bubble = cadrage + construction/configuration + migration_vers_Bubble
INITIAUX_Code   = cadrage + construction/configuration + migration_vers_Code

PLATEFORME_INFRA_Bubble(H) = plan (WU incluses) + WU_additionnelles
  + stockage sur H
PLATEFORME_INFRA_Code(H) = cloud + licences + stockage sur H

MAINTENANCE_option(H) inclut, si nécessaire, maintien de compétence, formation,
passation et recrutement. Une dépense déjà comptée dans INITIAUX_option ou
EXPLOITATION_option(H) n'est jamais recomptée.
```

Les `WU_additionnelles` sont celles consommées au-delà des WU incluses ; les WU
incluses ne sont jamais recomptées. Chaque ligne `(H)` additionne les
décaissements ponctuels, mensuels et annuels aux vraies échéances. Sécurité et
conformité existent des deux côtés, sous forme ponctuelle ou récurrente. Le
maintien de compétence, la formation, la passation et le recrutement nécessaire
relèvent uniquement de `MAINTENANCE_option(H)` ; une dépense déjà placée dans
les coûts initiaux ou l’exploitation est marquée « incluse dans… » et n’est pas
recomptée.

`E = TCO_Bubble(H) - TCO_Code(H)` : `E > 0` signifie que Bubble coûte plus,
`E < 0` qu’il coûte moins et `E = 0` une égalité seulement si aucune cellule
matérielle n’est inconnue. `0` signifie une absence de coût et de temps prouvée ;
`NON APPLICABLE` exige une raison écrite ; `À CONFIRMER` suspend le signe de
l’écart. Contrôle inverse : `TCO - INITIAUX - SORTIE` doit égaler la somme des
six postes intermédiaires. Pour un incident, séparer perte de revenu/capacité,
décaissement, prestation déjà comprise, temps non monétaire et continuité.

Résultat P2 : aucune comparaison financière de cas n’est produite, faute
d’entrées réelles. Une cellule inconnue reste `À CONFIRMER`, jamais zéro.

## E. Registre des douze perspectives logicielles

| Perspective                               | Statut     | Question reportée dans la couverture                                 | Localisation visible |
| ----------------------------------------- | ---------- | -------------------------------------------------------------------- | -------------------- |
| Dirigeant non technique                   | APPLICABLE | Quelle décision puis-je prendre sans choisir une stack ?             | §01 et §09           |
| Métier utilisateur                        | APPLICABLE | Les parcours et exceptions du vrai travail sont-ils identiques ?     | §02 et §04           |
| Opérations                                | APPLICABLE | Qui surveille, aide, sauvegarde et restaure ?                        | §04–05               |
| Finance                                   | APPLICABLE | Les deux options couvrent-elles le même horizon sans double compte ? | §07                  |
| IT et sécurité                            | APPLICABLE | Accès, secrets, logs, dépendances et tests sont-ils opérables ?      | §04–06               |
| Données et RGPD                           | APPLICABLE | Quelles catégories, régions, transferts, règles et exclusions ?      | §05                  |
| Achats ou juridique                       | APPLICABLE | Compte, offre, DPA, plugins, droits et sortie sont-ils contractés ?  | §05–06               |
| Adoption                                  | APPLICABLE | L’équipe peut-elle utiliser et administrer la solution choisie ?     | §02, §08–09          |
| Maintenance                               | APPLICABLE | Qui corrige les versions, dépendances et changements ?               | §05 et §07           |
| Incident et reprise                       | APPLICABLE | Que se passe-t-il pendant une panne et une restauration ?            | §04, §06–07          |
| Réversibilité / changement de prestataire | APPLICABLE | Les données, workflows, intégrations et accès sont-ils reprenables ? | §06                  |
| Solution plus simple / statu quo          | APPLICABLE | Un outil existant, un flux manuel, rester ou reporter suffit-il ?    | §01 et §08           |

Aucune perspective `NON_APPLICABLE_JUSTIFIE` : chacune peut inverser la
décision sur ce sujet.

## F. Empreinte éditoriale propre

| Guide voisin                | Ouverture          | Progression                  | Dispositif               | Exemple           | CTA / conclusion          |
| --------------------------- | ------------------ | ---------------------------- | ------------------------ | ----------------- | ------------------------- |
| MVP : quoi inclure          | Contenu minimum    | familles de test puis moteur | contrat MVP              | cas de lot        | CTA tardif / périmètre    |
| Prioriser un MVP            | Backlog à réduire  | voies et score               | matrice de priorisation  | backlog fictif    | CTA tardif / prochain lot |
| Agence ou freelance         | Statut insuffisant | rôles et gouvernance         | carte de responsabilités | équipe contrastée | CTA tardif / équipe       |
| Prototype, POC, pilote, MVP | Inconnue dominante | quatre preuves               | fiche expérience         | cas calculé       | CTA tardif / dispositif   |

Choix du nouveau guide :

```text
Tension : une préférence technologique ne prouve ni coût, ni capacité, ni sortie.
Ouverture : verdict conditionnel en moins de 100 mots, car le lecteur veut trancher.
Progression : même service -> offre actuelle -> tests -> données -> sortie -> TCO -> cinq décisions.
Artefact signature : fiche TCO + essai de sortie en six capacités.
Voix : directive, symétrique, sans dramatiser Bubble ni idéaliser le code.
CTA : après la fiche autonome et les bons/mauvais fits.
Conclusion : une des cinq sorties avec prochaine preuve et STOP possible.
Différences : (1) relevé contractuel Bubble daté ; (2) répétition de sortie ;
(3) déduplication coûts/continuité ; (4) cinq sorties, pas deux ;
(5) aucun faux persona, montant ou seuil.
```

## G. Plan annoté

| Section        | Question résolue                                         | Preuve / exemple                                   | Décision                                   | Format                          |
| -------------- | -------------------------------------------------------- | -------------------------------------------------- | ------------------------------------------ | ------------------------------- |
| 01 Réponse     | Quels résultats sont légitimes ?                         | Matrice cinq sorties + contre-cas                  | Ouvrir sans choisir un camp                | Tableau + visuel                |
| 02 Base        | Compare-t-on le même service et une équipe remplaçable ? | Cinq champs avec preuves, passation et suspension  | Normaliser, tester la reprise ou suspendre | Tableau                         |
| 03 Bubble      | Que vend Bubble aujourd’hui ?                            | Pricing/WU/mobile officiels datés + calcul inverse | Budgéter ou vérifier l’offre               | Tableau + formule               |
| 04 Performance | La charge cible est-elle prouvée ?                       | Protocole parcours/pointe/données/API/exploitation | Tester, optimiser, isoler ou refuser       | Tableau + cas P95               |
| 05 Données     | L’usage et la configuration sont-ils acceptables ?       | DPA, hébergement, privacy rules, CNIL              | Qualifier offre/contrat ou STOP            | Tableau + RACI                  |
| 06 Sortie      | Que récupère-t-on réellement ?                           | Terms, données, app JSON, absence de code autonome | Rester, préparer ou migrer                 | Visuel + tableau                |
| 07 TCO         | Quel coût total comparable ?                             | Formule H mois, huit lignes, double compte         | Comparer après contraintes                 | Formule + tableau               |
| 08 Cas         | Quand chaque option devient bonne ou mauvaise ?          | Quatre cas fictifs qualitatifs                     | Bubble, code, hybride, simplifier/report   | Cartes                          |
| 09 Fiche       | Que peut faire le lecteur seul ?                         | Neuf rubriques copiables + contrôle inconnue       | Produire le dossier de décision            | Liste + mémo                    |
| 10 FAQ         | Quelles objections restent ?                             | Huit réponses autonomes                            | Éviter les raccourcis                      | FAQ visible sans schema FAQPage |

## H. Matrice de couverture P1

| Angle                     | Question / objection                                     | Réponse et localisation                                      | Démonstration / contraste                   | Limite / inconnue                         | Action rendue possible                                 | Statut           |
| ------------------------- | -------------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------- | ----------------------------------------- | ------------------------------------------------------ | ---------------- |
| Définition                | Bubble et SaaS sur mesure sont-ils deux produits ?       | §01 : deux modes pour livrer le même service                 | Cinq sorties                                | « SaaS » ne décrit pas la stack           | Reformuler le choix                                    | COUVERT          |
| Réponse immédiate         | Qui gagne ?                                              | Héros + §01 : verdict conditionnel                           | Matrice cinq sorties                        | Aucune option universelle                 | Choisir la preuve suivante                             | COUVERT          |
| Base comparable           | Pourquoi les devis divergent ?                           | §02 : service, charge, données, équipe/remplacement, horizon | Deux faux comparatifs                       | Périmètre absent = STOP                   | Normaliser le brief                                    | COUVERT          |
| Offre Bubble              | Quels plans/coûts actuels ?                              | §03, relevé 05/08/2026                                       | Calcul annuel + inverse                     | Taxes/devise/add-ons à confirmer          | Demander prix actuel                                   | COUVERT          |
| Workload                  | WU signifie quoi ?                                       | §03–04                                                       | Processus plutôt qu’utilisateurs            | Modèle évolutif                           | Mesurer par parcours                                   | COUVERT          |
| Utilisateurs              | Quel seuil fait migrer ?                                 | §04 + FAQ : aucun seuil universel                            | Actif/inactif et charge                     | Données réelles requises                  | Construire un test                                     | COUVERT          |
| Mobile                    | Bubble est-il un wrapper ?                               | §03 : mobile natif actuel                                    | Web/mobile partagent backend                | Offre/fonctions évolutives                | Vérifier le cas mobile                                 | COUVERT          |
| Performance               | Code toujours plus rapide ?                              | §04 : même protocole des deux côtés                          | Cinq épreuves                               | Seuils métier absents = STOP              | Accepter/optimiser/isoler                              | COUVERT          |
| Données                   | Où sont-elles hébergées ?                                | §05 : partagé US, région Enterprise                          | Tableau offre/preuve/STOP                   | Contrat actuel requis                     | Qualifier l’offre                                      | COUVERT          |
| RGPD                      | Bubble est-il conforme ?                                 | §05 + FAQ : verdict impossible sans cas                      | DPA + responsabilités client                | Avis juridique exclu                      | Cartographier et consulter                             | COUVERT          |
| Sensible                  | Toutes données admises ?                                 | §05 : DPA 13.4                                               | STOP explicite                              | Contrat/offre à qualifier                 | Suspendre l’arbitrage                                  | COUVERT          |
| Sécurité                  | La plateforme suffit-elle ?                              | §05 : privacy rules, accès, API                              | Tests positifs/négatifs                     | Configuration propre                      | Tester la matrice de droits                            | COUVERT          |
| Responsabilités           | Qui opère après lancement ?                              | §05, six propriétaires                                       | Rôles cumulables mais visibles              | Noms réels inconnus                       | Construire le RACI                                     | COUVERT          |
| Propriété                 | Possède-t-on l’app ?                                     | §06 + FAQ : contenu vs plateforme                            | Terms + documentation                       | Contrat applicable prime                  | Vérifier droits/comptes                                | COUVERT          |
| Données export            | Peut-on partir avec les données ?                        | §06 : CSV/JSON/NDJSON                                        | Comptage et relecture                       | Relations/fichiers/délais à tester        | Exécuter l’export                                      | COUVERT          |
| App JSON                  | Est-ce le code ?                                         | §06 : import Bubble seulement                                | Contraste export/app/runtime                | Pas d’exécutable autonome                 | Ne pas surpromettre                                    | COUVERT          |
| Workflows/plugins         | Que faut-il reconstruire ?                               | §06, six blocs                                               | Essai de sortie                             | Licences et équivalents inconnus          | Inventorier                                            | COUVERT          |
| Hybride                   | Peut-on sortir une partie ?                              | §01, §06, §08                                                | API et panne partielle                      | Deux systèmes peuvent coûter plus         | Tester une frontière                                   | COUVERT          |
| TCO                       | Comment compter ?                                        | §07, formule H mois                                          | Huit postes et inverse                      | Entrées réelles inconnues                 | Remplir sans faux zéro                                 | COUVERT          |
| Double compte             | Incident/maintenance déjà compris ?                      | §07, colonne recouvrement                                    | Cinq dimensions d’un incident               | Contrats réels requis                     | Dédupliquer                                            | COUVERT          |
| Recrutement               | Une autre personne peut-elle reprendre après un départ ? | §02 et §07 : compétence à former, transmettre ou recruter    | Passation et reprise par une autre personne | Disponibilité et coût propres au cas      | Évaluer la reprise et l’inscrire une seule fois au TCO | COUVERT          |
| Incident/reprise          | Qui détecte et restaure ?                                | §04, §06–07                                                  | Panne d’API, restauration, retour arrière   | SLA/astreinte réels inconnus              | Exercice de reprise                                    | COUVERT          |
| Migration                 | Quand quitter ?                                          | §01, §08 + FAQ                                               | Exigence échouée / TCO / capacité cible     | Coût/délai jamais inventés                | Écrire des gates                                       | COUVERT          |
| Statu quo                 | Rester est-il légitime ?                                 | §01 et cas B                                                 | Bubble retenu faute de bénéfice code        | Réexamen après changement                 | Ne pas migrer                                          | COUVERT          |
| Solution simple           | Faut-il construire ?                                     | §01 et cas inverse                                           | Formulaire/outil/manuel                     | Risque légal non contournable             | Réduire ou reporter                                    | COUVERT          |
| CTA                       | Le diagnostic force-t-il le code ?                       | §09 + CTA tardif                                             | Bons/mauvais fits                           | Aucun devis/choix auto                    | Contact facultatif                                     | COUVERT          |
| Prix/délais personnalisés | Quel devis exact ?                                       | Frontière visible : nécessite besoin réel                    | Fiche produite avant contact                | Hors page et inconnu                      | Préparer un cadrage                                    | RENVOI_EXPLICITE |
| Stack détaillée           | React, Laravel, cloud ?                                  | Hors intention, après contraintes                            | Aucun catalogue prématuré                   | N’inverse pas le choix avant architecture | Reporter à la conception                               | ECARTE_JUSTIFIE  |

Aucun angle matériel `BLOQUANT` dans le texte P1. Les inconnues qui peuvent
inverser une décision sont visibles et suspendent la conclusion au lieu de
laisser une cellule vide.

## I. Ressource, conversion et limites

```text
Ressource nécessaire : oui, mais intégrée dans la page ; aucun fichier à télécharger.
Problème : transformer une opinion technique en dossier vérifiable.
Résultat autonome : fiche décision en neuf rubriques + essai de sortie.
Format : liste copiable, tableaux responsive et formules en texte.
Champs : décision, service, exigences, mesures, contrats, TCO, sortie,
contre-cas, verdict/prochaine preuve.
Exemple : quatre cas fictifs qualitatifs, explicitement sans prix ni délai.
Conclusion « ne pas investir » : oui, simplifier, reporter ou rester.
Sources/limites : visibles au niveau des affirmations et en fin de guide.
Données saisies : aucune ; page statique.
Processus : copier, attribuer les propriétaires, attacher les preuves, tester,
réconcilier et dater la décision.
QA : test source + rendu statique, TypeScript, ESLint/Prettier, XML des SVG,
diff et manifeste.
Maintenance : revérifier Pricing, Terms, DPA, subprocessors, hosting, mobile et
workload avant intégration/publication puis à chaque revue éditoriale.
Bon fit : SaaS/application métier avec besoin, données et contraintes testables.
Mauvais fit : validation automatique du code, prix/délai sans périmètre ou avis juridique.
Action non commerciale : remplir la fiche et tester l’export.
CTA : /demarrer-un-projet ; décrit un contexte, sans résultat automatique.
```

## J. Journal P1 et rapport de sortie

### J1. Journal d’exécution

| Étape P1               | État     | Preuve                                                                                                         |
| ---------------------- | -------- | -------------------------------------------------------------------------------------------------------------- |
| Gouvernance et gel     | Terminée | Neuf documents/ressources obligatoires relus ; freeze inchangé                                                 |
| Inventaire interne     | Terminée | Service, registre, composants et guides #28–#31 relus                                                          |
| SERP FR/EN             | Terminée | Quatre requêtes, carte concurrentielle, aucun volume revendiqué                                                |
| Sources primaires      | Terminée | Pricing, Workload/Scaling, Terms, ownership/export, hosting, security/privacy, DPA/subprocessors, mobile, CNIL |
| Registre des preuves   | Terminée | Section D, contradictions et STOPs                                                                             |
| Architecture/rédaction | Terminée | Dix étapes du lecteur, cinq sorties, trois SVG originaux                                                       |
| Metadata/schema        | Terminée | Canonical absolue, robots privés, Article/BreadcrumbList sans dates inventées                                  |
| FAQ/CTA                | Terminée | FAQ visible sans `FAQPage`/`HowTo`, CTA unique tardif et facultatif                                            |
| QA                     | Terminée | TypeScript, ESLint, Prettier, XML et 12/12 tests ciblés verts ; voir J2                                        |
| Manifeste P1           | Généré   | `docs/research/manifests/bubble-ou-saas-sur-mesure-p1.sha256` ; gel et manifeste exclus                        |

### J2. Contrôles exécutés

Le worktree ne contenait pas de `node_modules`. Les premiers appels `npx tsc`
et `npx eslint` n’ont donc pas chargé les dépendances du projet et ne sont pas
des résultats de code. Le lien local ignoré `node_modules -> ../Hagnere
Code/node_modules`, déjà utilisé par d’autres worktrees, a permis de rejouer les
versions installées du dépôt ; il est retiré après les contrôles.

| Commande                                                                                                                     | Résultat P1                                        |
| ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| `./node_modules/.bin/tsc --noEmit`                                                                                           | PASS, sortie vide                                  |
| `./node_modules/.bin/eslint src/app/guides/bubble-ou-saas-sur-mesure/{page.tsx,opengraph-image.tsx,content-quality.test.ts}` | PASS, sortie vide                                  |
| `npx prettier --check` sur le dossier et les trois TSX                                                                       | PASS, `All matched files use Prettier code style!` |
| `xmllint --noout public/guides/bubble-ou-saas-sur-mesure/*.svg`                                                              | PASS sur les trois SVG                             |
| `./node_modules/.bin/vitest run --maxWorkers=1 src/app/guides/bubble-ou-saas-sur-mesure/content-quality.test.ts`             | PASS, 1 fichier, 12/12 tests                       |
| `git diff --check` et contrôle d’espaces finaux sur les fichiers P1                                                          | PASS, sorties vides                                |
| `shasum -a 256 -c docs/research/manifests/bubble-ou-saas-sur-mesure-p1.sha256`                                               | PASS, 7/7 entrées `OK`                             |

Le formatage SVG est contrôlé par XML : Prettier ne possède pas de parseur SVG
dans cette installation. Aucun build, déploiement, publication, indexation,
commit ou push n’est revendiqué.

### J3. Rapport P1 — création complète

```text
PASSE_1_TERMINEE
Slug : bubble-ou-saas-sur-mesure
Fichiers : dossier, page, OG, test, trois SVG et manifeste P1.
Contrat : comparer le même service et accepter cinq sorties.
Sources primaires : Bubble officiel + CNIL, consultés le 05/08/2026.
Plan : réponse, base, offre, charge, données, sortie, TCO, cas, fiche, FAQ.
Calculs : bases annuelles affichées + contrôle inverse ; formule TCO symétrique.
Exemples : quatre cas fictifs qualitatifs, aucun faux prix/délai.
Contre-cas : code sans exploitation, hybride fragmenté, Bubble non qualifié,
simplification risquée, report sans propriétaire.
CTA : tardif vers /demarrer-un-projet, contact facultatif.
Risques résiduels : offre volatile, données/contrat/performance propres au cas,
aucune date de publication prouvée.
Manifeste : docs/research/manifests/bubble-ou-saas-sur-mesure-p1.sha256
```

G1 a ensuite autorisé explicitement la passe 2 sur le manifeste P1 gelé. La
passe 2 reste limitée aux fichiers propres au slug ; elle n’autorise ni P3, ni
intégration partagée, ni publication.

## K. Passe 2 — contrôle factuel, quantitatif et contradictoire

### K1. Cartographie des assertions contrôlées

`CONTRÔLÉE` signifie que l’assertion et sa réserve concordent avec une source
primaire ouverte le 5 août 2026. `CORRIGÉE` signifie que P2 a resserré une
formulation ou un calcul. `RETIRÉE` signifie que la formulation n’était pas
assez démontrée ou n’avait pas sa place dans le rendu lecteur.

| Assertion contrôlée                  | Source ou contrôle contradictoire                 | Verdict P2 | Traitement dans la page                                                                       |
| ------------------------------------ | ------------------------------------------------- | ---------- | --------------------------------------------------------------------------------------------- |
| Plans et WU au 05/08/2026            | Bubble Pricing                                    | CONTRÔLÉE  | Relevé daté, aucune permanence promise                                                        |
| Devise, taxes et échéance            | Bubble Terms §11 contre lecture isolée de Pricing | CORRIGÉE   | Dollars US, taxes en sus, paiement d’avance                                                   |
| Base annuelle affichée               | Multiplication et division inverse                | CORRIGÉE   | Valeurs en dollars US hors taxes, jamais appelées TCO                                         |
| WU et add-ons                        | Pricing + Workload                                | CORRIGÉE   | WU incluses séparées des `WU_additionnelles`, stockage/plugins hors base                      |
| Capacité par utilisateurs            | Scaling with Bubble                               | CONTRÔLÉE  | Aucun seuil universel ; mesure par parcours et consommation                                   |
| Croissance défavorable               | Protocole interne reproductible                   | CORRIGÉE   | Données, pointe ou traitements doublés séparément puis ensemble                               |
| Mobile natif                         | Manuel Bubble, React Native et backend partagé    | CONTRÔLÉE  | Retrait du raccourci « wrapper » ; fonctions à revérifier                                     |
| Hébergement partagé                  | How Bubble hosting works                          | CONTRÔLÉE  | Environnement partagé annoncé aux États-Unis                                                  |
| Choix de région                      | How Bubble hosting works                          | CORRIGÉE   | Seulement instance Enterprise dédiée selon offre/contrat                                      |
| Transferts hors UE                   | CNIL + DPA Bubble                                 | CORRIGÉE   | Flux/lieux/prestataires à inventorier ; DPF ou SCC selon le cas                               |
| Sous-traitants                       | Liste Bubble révisée le 28/04/2026                | CORRIGÉE   | Inventaire vivant rapproché des flux réels                                                    |
| Catégories DPA §13.4                 | DPA Bubble révisé le 21/04/2025                   | CORRIGÉE   | Liste explicite, dont données personnelles d’enfants de moins de 16 ans                       |
| Responsabilité de configuration      | DPA + Privacy rules + CNIL                        | CONTRÔLÉE  | Aucun verdict binaire de conformité par nom d’outil                                           |
| Disponibilité standard               | Bubble Terms §§5 et 14                            | CORRIGÉE   | Efforts raisonnables, absence d’interruption non garantie, limite de responsabilité qualifiée |
| Droits sur le contenu                | Bubble Terms §§6 et 8                             | CONTRÔLÉE  | Design/workflows/données distingués de la plateforme                                          |
| Export des données                   | Manuel Bubble                                     | CONTRÔLÉE  | CSV/JSON/NDJSON, reprise à tester                                                             |
| Export JSON d’application            | Settings Overview actuel                          | CORRIGÉE   | Plan Growth requis, sauvegarde réimportable dans Bubble seulement                             |
| Export de code autonome              | Application and data ownership                    | CONTRÔLÉE  | Absence d’exécutable autonome, reconstruction hors Bubble                                     |
| Retour arrière                       | Manuel Bubble sur versions et sauvegardes         | CORRIGÉE   | Version applicative et base restaurées séparément                                             |
| TCO symétrique                       | Recomposition ligne par ligne + contrôle inverse  | CORRIGÉE   | Huit postes identiques, entrées et sorties symétriques, périodicités réelles                  |
| Signe financier                      | Trois cas `E > 0`, `E < 0`, `E = 0`               | CORRIGÉE   | Sens du signe écrit ; égalité interdite si inconnue matérielle                                |
| Valeurs manquantes                   | Convention de saisie                              | CORRIGÉE   | `0`, `NON APPLICABLE` et `À CONFIRMER` ont trois sens distincts                               |
| Images Article                       | Concordance JSON-LD / rendu                       | CORRIGÉE   | Seulement les trois SVG réellement visibles, pas l’OG                                         |
| Statut public                        | Metadata, registre et absence de date             | CONTRÔLÉE  | Brouillon privé, noindex/nofollow, aucune date inventée                                       |
| Jargon interne P1/STOP dans le rendu | Relecture lecteur                                 | RETIRÉE    | Remplacé par « revue éditoriale » et « suspendre »                                            |

### K2. Idéation contradictoire avant clôture

| Perspective adverse  | Question posée                                                            | Décision P2                                                                            | Statut                     |
| -------------------- | ------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------- |
| Débutant             | Peut-il confondre abonnement, TCO et devis de migration ?                 | Devise, taxes, add-ons et frontière « pas un TCO » rapprochés du tableau               | AJOUTÉE                    |
| Prêt à agir          | Sait-il quelle preuve produire demain ?                                   | Charge doublée, inventaire de transfert, essai de sortie et conventions TCO explicités | AJOUTÉE                    |
| Autre profil         | Finance, juridique et exploitation peuvent-ils relire la même fiche ?     | Huit postes et six propriétaires gardés, preuves contractuelles ajoutées               | DÉJÀ_COUVERTE_ET_RENFORCÉE |
| Situation dégradée   | Que se passe-t-il pendant une panne ou une restauration ?                 | Absence de SLA standard chiffré et séparation app/base ajoutées                        | AJOUTÉE                    |
| Cas inverse          | Le code dédié peut-il être le mauvais choix ?                             | Cas de code fragile et charge d’exploitation déjà présents                             | DÉJÀ_COUVERTE              |
| Solution plus simple | Faut-il parfois ne rien reconstruire ?                                    | Rester, simplifier et reporter demeurent trois issues valables                         | DÉJÀ_COUVERTE              |
| Chronologie          | Une sauvegarde garantit-elle le retour simultané du code et des données ? | Non ; deux opérations, point de coupure et réconciliation ajoutés                      | AJOUTÉE                    |
| Contradiction        | « Je possède mes workflows » implique-t-il « je possède un runtime » ?    | Droits sur contenu et exécutable autonome maintenus séparés                            | DÉJÀ_COUVERTE              |
| Autonomie            | Peut-on conclure avec une cellule financière inconnue ?                   | Non ; `À CONFIRMER` suspend le signe et donc le verdict TCO                            | AJOUTÉE                    |

Une idée a été écartée : publier un nombre maximal d’utilisateurs ou un coût de
migration générique. Les sources officielles ne rendent ni l’un ni l’autre
transposable au lecteur ; inventer un chiffre réduirait la qualité de décision.

### K3. Calculs, cas limites et contrôles inverses

1. Les bases de plan sont recalculées dans les deux sens : `59 × 12 = 708` et
   `708 ÷ 12 = 59`, puis les mêmes contrôles pour `209` et `549`. L’unité est le
   dollar US hors taxes ; la facturation annuelle reste une échéance annuelle.
2. `plan (WU incluses) + WU_additionnelles` interdit de recompter les WU déjà
   comprises. Un overage, un palier ou du stockage n’entre que sur preuve de
   consommation et de prix applicables au cas.
3. Le TCO Bubble et le TCO code utilisent les mêmes huit postes. Leur ligne
   initiale comprend des migrations d’entrée symétriques vers Bubble ou vers le
   code ; sécurité/conformité existent des deux côtés.
4. `E > 0`, `E < 0` et `E = 0` couvrent les trois signes. Un montant inconnu
   interdit de conclure sur le signe, même si le sous-total visible paraît égal.
5. `0` n’est accepté qu’avec preuve d’absence de coût et de temps ; `NON
APPLICABLE` exige une justification ; `À CONFIRMER` est une inconnue, jamais
   une valeur numérique.
6. Le scénario de volume défavorable double une seule dimension — données,
   pointe ou traitements — avant un scénario combiné. Il conserve temps,
   erreurs, files et coût, ce qui évite d’attribuer un échec à la mauvaise cause.
7. Une panne d’API tierce teste timeout, file, idempotence et message utilisateur.
   Une restauration teste séparément version applicative, base, écritures
   postérieures au point choisi et reprise du service.
8. Un choix de région n’est jamais déduit du seul mot Enterprise : l’instance
   dédiée, la région et le contrat signé sont trois preuves distinctes.

### K4. Contre-sources et arbitrages

- La page Pricing décrit l’offre ; les Terms §11 la contredisent utilement sur
  ce qu’une simple lecture de carte ne montre pas : dollars US, taxes et paiement
  d’avance. Les deux sources sont donc liées près du calcul.
- La promesse de capacité est bornée par le manuel Scaling : Bubble ne donne pas
  de plafond universel d’utilisateurs. Le protocole mesure les actions réelles.
- La documentation d’hébergement est bornée par la méthode CNIL : une région ou
  un DPA ne remplace pas l’inventaire des flux, du support et des prestataires.
- Les droits sur le contenu dans les Terms sont bornés par la documentation
  d’export : posséder design/workflows/données ne fournit pas un code autonome.
- La sauvegarde JSON de configuration est bornée par la documentation actuelle :
  plan Growth et réimport dans Bubble ; elle n’est pas présentée comme une sortie.
- Les Terms standard sont la contre-source de toute promesse implicite de SLA :
  continuité, restauration et limite de responsabilité doivent être contractualisées.

### K5. Risques résiduels après P2

| Risque résiduel                                  | Pourquoi il reste ouvert                        | Traitement avant une décision réelle                   |
| ------------------------------------------------ | ----------------------------------------------- | ------------------------------------------------------ |
| Prix, WU, stockage et fonctions mobiles volatils | Offre commerciale évolutive                     | Refaire le relevé au jour du devis et archiver l’offre |
| Taxes et conversion propres au client            | Situation fiscale et moyen de paiement inconnus | Faire valider la facture/proposition applicable        |
| Sous-traitants, lieux de support et transfert    | Liste et flux propres à l’usage                 | Inventaire courant, analyse juridique et contrat signé |
| Performance et consommation                      | Dépendent de l’application et du jeu de données | Exécuter le protocole sur les deux options             |
| Continuité et responsabilité                     | Terms standard ≠ exigence métier                | Obtenir le niveau de service et tester la reprise      |
| TCO et migration                                 | Entrées réelles absentes                        | Garder `À CONFIRMER`, ne publier aucun résultat de cas |
| Date de publication                              | Route sans historique et non intégrée           | STOP obligatoire avant toute publication réelle        |

### K6. Rapport P2 et batterie

| Contrôle P2                            | Résultat                                                                     |
| -------------------------------------- | ---------------------------------------------------------------------------- |
| Test ciblé `content-quality.test.ts`   | PASS, 1 fichier et 12/12 tests                                               |
| Test `src/app/sitemap.test.ts`         | PASS, 1 fichier et 16/16 tests ; route privée absente du sitemap             |
| `tsc --noEmit`                         | PASS, sortie vide                                                            |
| ESLint sur page, OG et test            | PASS, sortie vide                                                            |
| Prettier sur dossier, page, OG et test | PASS                                                                         |
| `xmllint --noout` sur les trois SVG    | PASS                                                                         |
| `git diff --check`                     | PASS, sortie vide                                                            |
| Manifeste P2 non circulaire            | PASS, 7/7 entrées `OK` ; freeze et manifestes exclus                         |
| Hash du freeze P1                      | `19e1d876f7b401a67814d592c6336a95a355b75fbca521e22b0a73df702ad610`, inchangé |
| Hash du manifeste P1                   | `d7ca23c373e53b955a428ad6fe82336c670854f89de6faf609acc3aa69fd2334`, inchangé |

Le contrôle `src/lib/guides.test.ts` rend exactement 17/18 : l’unique échec est
l’assertion ligne 288 qui exige zéro brouillon local non enregistré alors que
la route apparaît volontairement comme
`{ slug: "bubble-ou-saas-sur-mesure", explicitLocalDraft: true }`. Ce résultat
est attendu pendant le travail slug-only ; aucun fichier partagé n’est modifié
pour le masquer.

```text
PASSE_2_TERMINEE
Assertions contrôlées : 25.
Corrections matérielles regroupées : 13.
Assertions supprimées du rendu : jargon P1/STOP et image OG non visible dans Article.image.
Calculs : bases annuelles en dollars US hors taxes ; TCO symétrique à huit postes ;
signe et valeurs 0/NON APPLICABLE/À CONFIRMER explicités.
Cas limites : volume doublé, panne tierce, restauration app/base, inconnue matérielle,
instance Enterprise dédiée et transfert concret.
Risques résiduels : offre volatile et entrées propres au cas ; datePublished reste un STOP.
Manifeste : docs/research/manifests/bubble-ou-saas-sur-mesure-p2.sha256
```

Aucune passe 3, intégration, publication, indexation, date éditoriale, commit ou
push n’est revendiquée.

## L. Passe 3 — polish rédactionnel sans dérive factuelle

### L1. Checkpoint avant écriture

L’agent distinct `bubble_saas_p3` a relu intégralement la gouvernance demandée,
le gel d’entrée, le dossier P2, la page, l’OG, le test, les trois SVG et les
manifestes P1/P2. Le manifeste P2 avait l’empreinte exacte
`d5bad628190a0cc6c8298a7f1136a69bde44e22ea71e4ae4d77e26be692bc3dc`
et rejouait 7/7 avant toute écriture. Le checkpoint a été validé par
l’orchestrateur avant les corrections.

### L2. Corrections de lecture

- l’ouverture part désormais d’une hésitation concrète déjà couverte par le
  dossier, puis conserve le verdict conditionnel et les cinq sorties ;
- le badge de production visible a été retiré ; les libellés du héros, de la
  FAQ et du CTA parlent au lecteur plutôt qu’au chantier éditorial ;
- coût total, accord de traitement des données, unités de charge, tableau des
  responsabilités, interface de connexion, délai d’expiration, absence de
  double traitement et engagement de niveau de service sont expliqués avant ou
  à la place de leurs sigles et anglicismes ;
- les réponses sur la propriété, le départ de Bubble et la comparaison des
  prix donnent leur conclusion dès la première phrase ;
- les virgules qui suivaient quatre liens sont désormais accolées au lien dans
  le rendu ;
- la liste complète de la section 13.4 du DPA est sortie d’une cellule mobile
  trop dense vers une liste lisible, sans retrait ni ajout de catégorie ;
- les H2 sur le DPA, le coût total et les cas contrastés se comprennent sans le
  paragraphe précédent ;
- de courtes transitions relient décision, base comparable, offre, charge,
  données, sortie, coût et fiche sans ajouter d’affirmation.

### L3. Fond P2 volontairement inchangé

Aucun prix, date, devise, taxe, seuil, fait Bubble, source, lien, formule,
signe, convention `0` / `NON APPLICABLE` / `À CONFIRMER`, formulation
contractuelle, limite ou STOP n’a été modifié. La distinction entre droits sur
le contenu, export des données, sauvegarde JSON Bubble et code exécutable reste
intacte. Les neuf catégories citées pour le DPA §13.4 restent toutes visibles.
La définition du TCO et la phrase sur la sauvegarde JSON apparaissent chacune
une seule fois et cette unicité est testée dans la source et le rendu statique.

### L4. Fichiers et contrôles P3

| Élément                                   | État P3                                                                                        |
| ----------------------------------------- | ---------------------------------------------------------------------------------------------- |
| Dossier, page, OG et test propres au slug | Modifiés uniquement pour le polish et ses garde-fous                                           |
| Trois SVG originaux                       | Inchangés, toujours inclus dans le manifeste final                                             |
| Gel d’entrée et manifestes P1/P2          | Lecture seule, empreintes préservées                                                           |
| Sources et recherche web                  | Aucune source ajoutée ; le corpus P2 reste la seule base factuelle                             |
| Test ciblé `content-quality.test.ts`      | PASS, 1 fichier et 13/13 tests ; faits, DPA, ponctuation et unicités verrouillés               |
| Test `src/app/sitemap.test.ts`            | PASS, 1 fichier et 16/16 tests ; route privée absente du sitemap                               |
| Test `src/lib/guides.test.ts`             | 17/18 ; unique échec partagé attendu ligne 288 sur le brouillon local explicite non enregistré |
| `tsc --noEmit`                            | PASS, sortie vide                                                                              |
| ESLint sur page, OG et test               | PASS, sortie vide                                                                              |
| Prettier sur dossier, page, OG et test    | PASS, tous les fichiers utilisent le style attendu                                             |
| `xmllint --noout` sur les trois SVG       | PASS                                                                                           |
| `git diff --check` et contrôle ciblé      | PASS, sorties vides                                                                            |
| Manifeste P3                              | PASS, mêmes sept artefacts finaux, hors gel et manifestes, replay 7/7                          |

Le worktree ne contient pas de binaire local `node_modules`. Les tests, le
type-check et le lint ont donc utilisé les binaires déjà installés du dépôt via
`NODE_PATH`, sans créer de lien ni modifier les dépendances. Prettier a été
appelé depuis le cache `npx` existant. Le premier appel au chemin local absent
a échoué avant exécution et n’a modifié aucun fichier.

```text
PASSE_3_TERMINEE
Problèmes de lisibilité corrigés : ouverture, quatre ponctuations, tableau DPA,
H2, FAQ et CTA.
Jargon retiré ou défini : TCO, WU/workload, DPA, RACI, API, timeout,
idempotence, SLA, overages, wrapper et double run.
Transitions : décision -> base -> offre -> charge -> données -> sortie -> fiche.
FAQ : réponses propriété, départ et comparaison rendues immédiates.
Faits laissés inchangés : tous les prix, dates, calculs, contrats, sources et STOP.
Nuances protégées : cinq sorties, inconnue suspensive, code non automatiquement
préférable, DPA complet, droits/export/runtime et disponibilité qualifiée.
Tests : ciblé 13/13, sitemap 16/16, tsc, ESLint, Prettier, XML et diff verts ;
guides 17/18 avec le seul rouge partagé documenté.
Manifeste P3 : docs/research/manifests/bubble-ou-saas-sur-mesure-p3.sha256
```

### L5. Reprise après le gate G3

Le premier contrôle G3 racine a rendu `NO_GO_PASSE_3` sur un défaut lecteur :
le HTML statique concaténait le libellé de plusieurs liens avec le mot suivant,
par exemple `Bubble Pricingaffiche` et `CNIL rappelleque`. Les faits et les URL
étaient justes, mais la phrase rendue ne l’était pas.

La reprise ajoute une jonction JSX explicite après chacun des seize liens
externes concernés et une ponctuation explicite après les deux liens internes.
Les quatre virgules restent accolées au lien, avec un espace explicite après la
virgule. Le test lit désormais le HTML réellement rendu, vérifie les dix-huit
jonctions attendues, refuse toute lettre immédiatement après `</a>`, refuse un
espace avant virgule et recherche les concaténations observées par G3.

```text
PASSE_3_REPRISE_TERMINEE
Cause : espaces JSX implicites supprimés au rendu statique après des liens.
Correction : espaces ou ponctuation + espace explicites sur tous les paragraphes liés.
Faits, libellés, URL, chiffres, formules, limites et STOP : inchangés.
Tests : ciblé 13/13, sitemap 16/16, tsc, ESLint, Prettier, XML et diff verts ;
guides 17/18 avec le seul rouge partagé documenté.
Manifeste P3 : docs/research/manifests/bubble-ou-saas-sur-mesure-p3.sha256
```

Aucune intégration, publication, indexation, date éditoriale, opération Git,
modification de registre ou modification de fichier partagé n’est revendiquée.

## M. Passe 4 — antipasse IA et contre-audit

### M1. Checkpoint avant écriture

L’agent distinct `bubble_saas_p4` a relu intégralement la gouvernance, le gel,
le dossier, la page, l’OG, le test, les trois SVG et les manifestes P1/P2/P3.
Le manifeste P3 avait l’empreinte exacte
`1d61b34f7df922ad3c34ff72da59038508959941ef7589f39e939eed9fcd60b1`
et rejouait 7/7 avant toute écriture. Le checkpoint a relevé zéro P0, deux P1
locaux — recrutement/remplacement insuffisamment explicite et
`Article.articleSection` non visible — ainsi que des P2 de jargon, de rythme et
de lisibilité des deux SVG textuels. L’orchestrateur a autorisé le lot minimal.

### M2. Corrections P4

- la base commune nomme désormais la compétence à former, transmettre ou
  recruter, la passation et la reprise par une autre personne après un départ ;
- le maintien de compétence, la formation, la passation et le recrutement
  nécessaire relèvent d’une seule ligne, `MAINTENANCE_option(H)`, avec
  interdiction explicite de recompter un coût déjà placé dans les coûts initiaux
  ou l’exploitation ; la formule, les huit postes et le signe de l’écart ne
  changent pas ;
- `Article.articleSection` vaut exactement `SaaS`, terme visible dans le H1 ;
- le sommaire et le H2 annoncent quatre situations illustrant les cinq sorties,
  sans créer de cinquième cas ;
- deux phrases-ponts mécaniques ont été supprimées, après l’offre Bubble et
  après la section données/contrat ;
- réversibilité, sortie, observabilité, arbitrage technique, PCI DSS, DPF,
  webhooks et secrets sont traduits au point utile, en conservant les noms
  officiels nécessaires ;
- l’alt OG nomme la capacité à changer de solution et son sous-titre parle d’un
  changement testé, sans imposer le jargon « essai de sortie » avant son
  explication ;
- les SVG 16:9 et 4:3 sont simplifiés : libellés plus courts et caractères plus
  grands, tandis que les détails restent dans les tableaux HTML adjacents ; le
  SVG 1:1 n’avait pas de défaut prouvé et reste inchangé.

### M3. Invariants factuels protégés

Prix, date de relevé, devise, taxes, paiement d’avance, WU, neuf catégories DPA
§13.4, hébergement, transferts, conditions et responsabilité, droits, exports,
séparation version/base, formule TCO à huit postes, convention de signe,
inconnues suspensives, dix-huit raccords HTML, noindex et absence de dates
éditoriales restent inchangés. Aucun fait, chiffre, source, promesse ou
assertion de marché sur le recrutement n’a été ajouté.

### M4. Contrôles P4

| Élément                                | Résultat P4                                                                                      |
| -------------------------------------- | ------------------------------------------------------------------------------------------------ |
| Test ciblé `content-quality.test.ts`   | PASS, 1 fichier et 13/13 tests                                                                   |
| Test `src/app/sitemap.test.ts`         | PASS, 1 fichier et 16/16 tests ; route privée absente du sitemap                                 |
| Test `src/lib/guides.test.ts`          | 17/18 ; unique échec partagé attendu ligne 288 sur ce brouillon local explicite non enregistré   |
| `tsc --noEmit`                         | PASS, sortie vide                                                                                |
| ESLint sur page, OG et test            | PASS, sortie vide                                                                                |
| Prettier sur dossier, page, OG et test | PASS                                                                                             |
| `xmllint --noout` sur les trois SVG    | PASS                                                                                             |
| `git diff --check`                     | PASS, sortie vide                                                                                |
| Contrôle visuel des SVG modifiés       | PASS aux dimensions natives et après réduction à 320 px ; contraste, libellés et icônes lisibles |
| Gel et manifestes P1/P2/P3             | Empreintes exactes préservées : `19e1…`, `d7ca…`, `d5ba…`, `1d61…`                               |
| Manifeste P4 non circulaire            | PASS, sept artefacts finaux rejoués 7/7, hors gel et manifestes                                  |

L’auto-évaluation P4, qui ne remplace ni G4 ni le contrôle transversal Q,
atteint 92/100 sur les dix axes et 19/20 sur la scorecard. Les axes bloquants
Intention, Décision, Pédagogie et Preuve sont à 2/2. Aucun P0, P1 ou P2 local
ne subsiste. Le point de scorecard retenu jusqu’au contrôle racine concerne le
BAT navigateur complet, distinct de ce contrôle visuel ciblé. Les prix,
conditions, sous-traitants et mécanismes de transfert restent à revalider sur
leurs sources courantes avant toute publication future.

```text
PASSE_4_TERMINEE
Motifs repérés : deux lacunes décisionnelles sur l’équipe, deux transitions
mécaniques, jargon non traduit, H2 générique et deux SVG trop denses sur mobile.
Corrections : remplacement et recrutement reliés à la base et au TCO sans
double compte ; Article.articleSection visible ; quatre situations/cinq sorties
explicites ; jargon traduit, y compris dans l’OG ; deux transitions retirées ;
deux SVG simplifiés.
Passages conservés et raison : offre, charge, DPA, droits/export, formule,
contre-cas et fiche restent intacts parce qu’ils portent les faits et limites.
Faits inchangés : prix, date, devise, taxes, paiement, WU, DPA, hébergement,
transferts, conditions, responsabilité, droits, exports, versions/base et STOP.
Exemples contrôlés : quatre cas fictifs restent qualitatifs, sans faux client,
prix, délai ou promesse inventés.
Contradictions finales : aucune dans le lot ; seul rouge global attendu = draft
local non enregistré dans src/lib/guides.test.ts, ligne 288.
Tests : ciblé 13/13, sitemap 16/16, tsc, ESLint, Prettier, XML, diff et visuels
verts ; guides 17/18 avec l’unique rouge partagé documenté.
Manifeste P4 : docs/research/manifests/bubble-ou-saas-sur-mesure-p4.sha256
```

### M5. Reprise P4 ciblée avant G4

Le contrôle racine a relevé un P2 propre restant dans l’image de partage : son
alt parlait encore de « sortie » et son sous-titre d’« essai de sortie » avant
que le guide n’explique ce terme. L’alt nomme désormais exactement la capacité
à changer de solution ; le sous-titre emploie « changement testé ». Le test
verrouille les deux chaînes exactes et interdit l’ancien sous-titre dans l’OG.

La reprise reste limitée à l’OG, son test, ce journal et le manifeste P4. Le P2
d’impression globale borné séparément par G4 concerne des fichiers partagés et
n’a été ni corrigé ni revendiqué ici. Après reprise, le ciblé repasse 13/13, le
sitemap 16/16, puis TypeScript, ESLint, Prettier, XML, diff et le manifeste 7/7
repassent tous au vert. Le gel et les manifestes P1/P2/P3 restent inchangés.

## N. Contrôle transversal indépendant du snapshot P4

L’agent distinct `bubble_saas_q` a audité en lecture seule le manifeste P4
final, dont l’empreinte de fichier est exactement
`f1110411d2679b45eb292b760053b31e023521da03fc9de05fa538de9cd1d92f`.
Il a rendu `GO_QUALITE_GUIDE` à **94/100**, avec une charte à **19/20** et
zéro P0/P1. Il a confirmé la réponse lecteur, les cinq sorties, le TCO à huit
postes, les contre-cas, les sources, la visibilité des huit FAQ, les trois
illustrations et le caractère privé du brouillon.

Trois P2 restaient alors strictement bornés : contraste sombre du lien de
stratégie partagé, éléments globaux encore imprimés et alertes de dépendances
transitives. Aucun ne justifiait de réécrire un fait ou un exemple du guide.
La publication restait de toute façon interdite tant qu’une vraie date de
première publication et un snapshot public n’étaient pas prouvés.

## O. Intégration centrale — release candidate privée

### O1. Baseline et mutations partagées autorisées

`integration.lock` a été acquis atomiquement le 5 août 2026 à 22:17:33 +02:00.
La branche a été rebasée sans conflit sur `origin/main`
`ffab025f5385ae4bb0289f54baf5cd1a55594a26`, qui contient la release publique
du guide Airtable/Notion. Le HEAD rejoué avant les mutations centrales était
`027fd26ac9ffe92d3ff8dbbadf40912dd1a9a88f`.

L’intégration ajoute le brouillon au registre et au hub privé, mesure son temps
de lecture à 18 minutes pour 3 595 mots visibles, puis centralise metadata et
JSON-LD dans `buildGuideMetadata` et `buildGuideStructuredData`. Les dates sont
désormais optionnelles pour un brouillon privé : Bubble n’a ni
`datePublished`, ni `dateModified`, ni champs Open Graph/Article équivalents.
Le garde de type interdit en revanche tout guide public sans paire de dates.
`Article.headline` reprend le H1 accessible, `articleSection` vaut `SaaS` et
`isPartOf` cible la collection des guides.

Le guide `mvp-saas-quoi-inclure` apporte un lien entrant contextuel depuis sa
FAQ architecture. Son dossier et son test consignent uniquement ce maillage.
Le CTA de stratégie partagé passe en `dark:text-indigo-300` : sa couleur
calculée sur le fond réel atteint **8,82:1**. Le correctif d’impression livré
par la baseline exclut désormais navigation, contact, CTA et pied de page. Les
tests partagés verrouillent le contraste source et l’accessibilité du composant.

### O2. Batterie automatisée et build

Après installation isolée exacte du lockfile, les validations intégrées ont
rendu :

- tests ciblés du guide, du voisin, du registre et du layout : **67/67** verts ;
- batterie Vitest globale : 121 fichiers et **1 266/1 266** tests verts ;
- `tsc --noEmit` : vert, sortie vide ;
- build Webpack de production Next.js 16.2.12 : compilation, types et
  génération statique verts, **79/79** routes ;
- postbuild SEO : 50 URL de sitemap, 33 liens `llms.txt`, 50 pages, 21 temps
  de lecture et 88 blocs JSON-LD contrôlés ;
- ESLint global sans avertissement, Prettier, XML des trois SVG et
  `git diff --check` : verts ;
- manifeste d’intégration : 21/21 fichiers rejoués octet par octet par le test
  du guide et par `shasum -a 256 -c`.

Le build de production ne rend pas ce brouillon public : son statut
`ready-for-human-review` conserve `noindex, nofollow` et l’exclut du hub
public, du sitemap et de `llms.txt`.

### O3. BAT navigateur lecteur

La route locale de production répond en 200 avec le canonical exact
`https://hagnere-code.ai/guides/bubble-ou-saas-sur-mesure`. Les seuls schémas
sont `Article` et `BreadcrumbList`; aucun champ de date n’est émis. Le H1 reste
contenu, les huit FAQ et l’unique CTA tardif restent présents, sans débordement
horizontal, en clair et en sombre aux largeurs CSS 320, 360, 390, 430, 640,
1 024, 1 280, 1 440 et 1 600 px. Le facteur 1,25 du navigateur intégré a
d’abord encadré 768 px à 767 et 769 px, tous deux verts ; le viewport Chrome a
ensuite mesuré **exactement 768 px**, avec `clientWidth = scrollWidth = 768`,
H1 contenu, huit FAQ et CTA présents. Le zoom 200 % à 1 024 px et le paysage
640 × 360 sont également verts.

Les trois images différées ont été réellement chargées par défilement. Un
rechargement a observé 47 réponses, aucune réponse HTTP en erreur et aucun
échec réseau ; la console ne porte ni erreur ni avertissement. Axe 4.11 rend
zéro violation et 48 règles passées. Il laisse 59 nœuds de contraste
incomplets sur des couleurs OKLCH ; ils ne sont pas convertis artificiellement
en succès. Le CTA partagé a donc été mesuré séparément dans le canvas du
navigateur : 8,82:1 en sombre.

Le clic réel ouvre la première FAQ. L’injection synthétique `Entrée`/`Espace`
de cette session n’a pas déclenché le bouton et n’est donc pas revendiquée
comme preuve clavier intégrée. Le contrôle Q antérieur avait validé clavier et
focus sur le composant inchangé ; les tests d’accessibilité partagés restent
verts. Cette limite instrumentale est conservée comme telle dans la preuve.

### O4. Épreuve PDF réelle

Chrome a produit une épreuve A4 balisée de **29 pages**, non chiffrée et sans
JavaScript ni formulaire. Le texte extrait contient les sources et les huit
FAQ. Navigation globale, contact, CTA de stratégie et pied de page en sont
absents. Les pages de couverture, cartes, tableaux de charge et de TCO,
sources et FAQ ont été rendues en PNG puis inspectées : aucun chevauchement,
texte coupé ou élément commercial résiduel n’a été observé.

### O5. Dépendances et frontière de release

`npm audit --omit=dev` conserve **1 alerte haute et 3 modérées**, sans alerte
critique. La haute est transitive : `@opennextjs/cloudflare@1.20.1` dépend de
`wrangler@4.110.0`, puis `miniflare@4.20260708.1` fixe
`undici@7.28.0`. Le correctif annoncé pour Undici est postérieur, mais
Miniflare fixe encore cette version dans le lockfile. Le correctif automatique
proposé rétrograderait OpenNext vers une version majeure incompatible. Aucune
surcouche forcée ni rétrogradation cassante n’est introduite sans validation
amont ; ce résiduel reste un P2 dépendance et un STOP avant publication.

Le snapshot d’intégration sera gelé dans
`docs/research/manifests/bubble-ou-saas-sur-mesure-integration.sha256`, manifeste
lui-même exclu et rejoué par le test du guide. Après batterie finale, un
contre-audit release indépendant doit encore confirmer zéro P0/P1 sur ce
snapshot exact. À ce stade, aucun commit, push, déploiement, publication,
indexation ni découverte publique n’est revendiqué.
