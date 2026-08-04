# Dossier de recherche — agence SaaS ou freelance

> Reconstruction du guide #30 à partir d'un contrat éditorial vierge. Le
> dossier historique du 22 juillet 2026 a été lu comme archive de pistes, mais
> aucun de ses textes, scores, statuts ou anciennes validations n'est hérité.

Date de la recherche P1 : **4 août 2026**

Propriétaire éditorial : **SECONDARY_ORCHESTRATOR_019fb1e0**

Agent de passe 1 : **/root/agence_saas_p1**

Agent de passe 2 : **/root/agence_saas_p2**

Agent de passe 3 : **/root/agence_saas_p3**

Agent de passe 4 : **/root/agence_saas_p4**

## Journal des quatre passes

| Passe                             | État                  | Date        | Responsable            | Snapshot                                       | Blocages                         |
| --------------------------------- | --------------------- | ----------- | ---------------------- | ---------------------------------------------- | -------------------------------- |
| 1. Création complète              | Validée par G1        | 4 août 2026 | `/root/agence_saas_p1` | `manifests/agence-saas-ou-freelance-p1.sha256` | Aucun blocage P1 connu           |
| 2. Enrichissement et vérification | Validée par G2        | 4 août 2026 | `/root/agence_saas_p2` | `manifests/agence-saas-ou-freelance-p2.sha256` | Aucun blocage P2 connu           |
| 3. Polish rédactionnel            | Validée par G3        | 4 août 2026 | `/root/agence_saas_p3` | `manifests/agence-saas-ou-freelance-p3.sha256` | Aucun blocage P3 connu           |
| 4. Antipasse IA et contrôle final | Terminée — G4 attendu | 4 août 2026 | `/root/agence_saas_p4` | `manifests/agence-saas-ou-freelance-p4.sha256` | Validation orchestrateur requise |

Une modification d'un artefact P1 après le manifeste invalide son replay. Le
gel d'entrée reste séparé et n'appartient pas au manifeste de sortie.

## 1. Fiche d'identité

| Champ                                | Décision P1                                                                                                                                                   |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Slug                                 | `agence-saas-ou-freelance`                                                                                                                                    |
| Roadmap                              | SaaS et MVP, guide #30, priorité P2                                                                                                                           |
| Requête principale                   | agence SaaS ou freelance                                                                                                                                      |
| Moment dominant                      | Décider, puis sécuriser la continuité de la forme d'équipe retenue                                                                                            |
| Lecteur précis                       | Fondateur ou dirigeant non technique qui connaît la prochaine phase de son SaaS mais ne sait pas quelle organisation peut la porter                           |
| Situation déclenchante               | Une agence, un indépendant ou une future équipe interne semblent comparables, alors qu'ils ne couvrent pas forcément les mêmes décisions, contrôles ni relais |
| Décision principale                  | Choisir freelance, agence, équipe interne, équipe hybride ou report selon la couverture réelle de la prochaine phase                                          |
| Niveau de départ                     | Le lecteur sait ce que son produit doit accomplir ensuite, sans savoir répartir le travail technique et opérationnel                                          |
| Route commerciale pertinente         | `/services/saas-applications-metier`                                                                                                                          |
| Action autonome                      | Remplir une carte : décider, réaliser, contrôler, relayer et remettre pour chaque travail critique de la phase                                                |
| CTA possible                         | Un seul CTA tardif vers `/demarrer-un-projet`, pour décrire la phase et les responsabilités encore sans nom                                                   |
| Hors périmètre                       | Sélection et notation de candidats, comparaison détaillée de devis, TJM ou prix de marché, recrutement salarié, pacte d'associés, avis juridique personnalisé |
| État public maximal avant validation | `ready-for-human-review`, sans date de première publication inventée                                                                                          |

### Les cinq questions indispensables

1. Quelle est la prochaine phase : validation, construction, mise en ligne ou
   exploitation ?
2. Qui décide, qui réalise, qui contrôle, qui peut relayer et que récupère
   l'entreprise pour chaque travail critique ?
3. Que reste-t-il réellement à la charge du dirigeant et de son équipe selon
   la forme choisie ?
4. Que se passe-t-il quand la demande change ou quand une personne devient
   indisponible pendant un incident ?
5. Quel contrat, accès, code, donnée et mode opératoire faut-il pouvoir remettre
   à une autre équipe ?

### Objections et craintes

- « Une agence sera-t-elle forcément plus chère mais plus sûre ? »
- « Un bon freelance peut-il suffire sans me rendre dépendant d'une personne ? »
- « Puis-je garder le produit en interne sans recruter toute une équipe ? »
- « Qui reprendra si la personne qui connaît le produit n'est plus disponible ? »
- « Comment éviter de payer deux fois un travail oublié dans la proposition ? »

## 1 bis. Contrat de réponse et de langage humain

### Réponse courte à démontrer

Le statut ne choisit pas l'équipe. Un freelance peut convenir à une phase
resserrée si une personne côté client décide du produit et si un relais réel
peut reprendre le travail. Une agence peut être pertinente lorsque plusieurs
responsabilités doivent être coordonnées, mais son logo ne prouve ni les
personnes affectées ni leur remplacement. Une équipe interne ou hybride peut
mieux convenir si les compétences et le temps existent déjà. Il faut reporter
si personne ne peut décider côté client ou si le problème n'est pas encore
validé.

### Questions secondaires

- Une agence peut-elle elle-même être composée de salariés et de freelances ?
- Quels accès doivent rester administrés par l'entreprise ?
- Le paiement du développement transfère-t-il automatiquement tous les droits ?
- Le prestataire est-il toujours sous-traitant au sens du RGPD ?
- Quel travail et quel budget restent à la charge du client ?

### Situations où il faut suspendre la décision

- le problème ou l'acheteur n'a pas été validé ;
- personne côté client ne peut dire « oui, non ou plus tard » à une demande ;
- la prochaine phase mélange plusieurs résultats incompatibles ;
- une responsabilité critique n'a ni responsable ni contrôle ;
- le relais annoncé n'a ni accès ni trace permettant de reprendre ;
- les rôles relatifs aux données personnelles ou les droits sur le code ne
  peuvent pas être qualifiés sans la personne compétente.

### Contrat de langage

- Phrase que le lecteur pourrait dire : « J'ai besoin d'avancer sur mon SaaS :
  est-ce qu'un freelance suffit ou faut-il une agence ? »
- Terme central : une **forme d'équipe** décrit qui travaille ensemble ; elle
  ne prouve pas ce que ces personnes prendront réellement en charge.
- Mots ordinaires : personne responsable, remplaçant, bug, mise en ligne,
  accès, code, données, décision, contrôle, reprise.
- Mots à traduire ou éviter : gouvernance, delivery, run, product owner,
  bus factor, RACI, réversibilité, handover, vélocité, staffing.
- Projet des 150 premiers mots : répondre d'abord, donner les conditions qui
  changent le choix, annoncer la carte de responsabilités et le report possible.
- H2 attendus : des questions ou actions compréhensibles sans vocabulaire
  propre au guide.
- Comparaisons : cartes mobiles produites par le composant partagé, jamais une
  colonne décisive hors écran.

### Test sujet, action, résultat préparé en P1

| Formulation abstraite écartée | Qui agit ?               | Action concrète                                                    | Ce qui change                                | Formulation retenue                                                      |
| ----------------------------- | ------------------------ | ------------------------------------------------------------------ | -------------------------------------------- | ------------------------------------------------------------------------ |
| Assurer la continuité         | Le client et l'équipe    | Nomme un relais, lui donne les accès et lui fait rejouer une tâche | La reprise devient observable                | « Nommez qui reprend, avec quels accès et quelle trace. »                |
| Gouverner le produit          | Une personne côté client | Accepte, refuse ou reporte une demande                             | Le prestataire ne décide pas seul            | « Nommez la personne qui peut dire oui, non ou plus tard. »              |
| Sécuriser la delivery         | L'équipe affectée        | Construit, teste et met en ligne                                   | Le lecteur sait qui accepte le résultat      | « Écrivez qui construit, qui vérifie et qui autorise la mise en ligne. » |
| Prévoir le handover           | Les deux parties         | Remettent code, comptes, données et procédure                      | Une autre équipe peut commencer sans deviner | « Listez ce qui sera remis et faites rejouer une reprise. »              |
| Comparer le staffing          | Le dirigeant             | Attribue les mêmes responsabilités à chaque forme                  | Les absences deviennent visibles             | « Comparez les noms et les relais sur la même phase. »                   |

## 2. Corpus interne et cannibalisation

| Page interne                                     | Intention actuelle                                                                                   | Frontière ferme du guide #30                                                                               | Usage retenu                                             |
| ------------------------------------------------ | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| `/guides/choisir-prestataire-application-metier` | Comparer des candidats et leurs propositions sur un cas commun, huit preuves et des coûts normalisés | #30 choisit d'abord la forme et la couverture de l'équipe ; aucune seconde grille de candidats ou de devis | Renvoi explicite une fois la forme décidée               |
| `/guides/mvp-saas-quoi-inclure`                  | Définir ce que contient le premier test SaaS et attribuer les familles opérationnelles               | #30 ne redéfinit pas le contenu du MVP ; il attribue les personnes qui porteront la phase                  | Entrée possible pour identifier la phase de construction |
| `/guides/prioriser-fonctionnalites-mvp-saas`     | Choisir le prochain lot à partir des problèmes, preuves et dépendances                               | #30 suppose le lot assez défini et ne crée aucun score de priorité                                         | Renvoi si le prochain lot reste indécidable              |
| `/guides/cahier-des-charges-saas`                | Décrire le produit pour le faire chiffrer sur la même base                                           | #30 ne reproduit pas les neuf blocs du cahier des charges                                                  | Document d'entrée possible, non dupliqué                 |
| `/services/saas-applications-metier`             | Présenter l'offre transactionnelle de Hagnéré Code                                                   | Le guide laisse freelance, interne, hybride et report gagner selon les faits                               | Source commerciale et sortie éventuelle                  |
| `/equipe`                                        | Présenter les sept personnes et leurs statuts publics                                                | Sert seulement à montrer qu'une « agence » peut elle-même être mixte                                       | Exemple interne explicitement attribué                   |

**Justification d'une URL distincte :** aucune page active n'aide encore le
lecteur à répartir décider, réaliser, contrôler, relayer et remettre sur quatre
phases SaaS avant de choisir la forme d'équipe.

### Faits internes à respecter

- La source `src/lib/team.ts` expose sept personnes : un président fondateur,
  un CTO et cinq autres développeurs ; trois membres ont le statut public
  « freelance long-terme ».
- Les personnes réellement mobilisées, leur charge et leurs relais restent
  propres au devis ; la page équipe ne les prouve pas pour une mission.
- La page service affiche des fourchettes Hagnéré Code indicatives, pas des prix
  de marché freelance/agence ; elles ne fondent aucun verdict général.
- Dépôt, accès, droits, documentation, correction et support dépendent du devis
  et du contrat signés.

## 3. Demande et vocabulaire observés le 4 août 2026

Méthode : recherche qualitative sur la requête exacte et ses variantes. Aucun
volume, aucune difficulté et aucune donnée Search Console ne sont disponibles
pour ce dossier ; aucun nombre n'est déduit de la présence dans la SERP.

Questions et formulations observées :

- agence ou freelance pour développer un SaaS ;
- freelance, agence ou studio produit ;
- coût d'un SaaS selon l'équipe ;
- besoin d'une équipe technique quand le fondateur ne code pas ;
- maintenance et continuité après le MVP ;
- propriété du code et reprise après le départ d'un développeur.

Les résultats visibles emploient régulièrement « court », « gros projet »,
« senior », « garanties », « bus factor », « MVP complet » et « run ». Le guide
traduit ces termes en travaux, personnes, accès, contrôles et traces.

## 4. Carte concurrentielle

| Page réellement ouverte                                                                                                                                               | Réponse et angle                                                                | Bon point                           | Manque décisionnel ou preuve fragile                                                                                                                   | Conflit d'intérêt                |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------- |
| [Polara Studio — Développeur freelance ou agence](https://www.polarastudio.fr/blog/developpeur-freelance-vs-agence) · 3 décembre 2025, mise à jour 11 avril 2026      | Oppose relation directe et risque individuel à l'équipe d'agence                | Invite à regarder au-delà du tarif  | « 90 % » non sourcé ; affirme qu'avec un freelance le risque de concentration vaut toujours 1 ; obligation de moyen/résultat trop générale             | Studio qui vend du développement |
| [Krafter — Freelance, agence ou studio pour un SaaS](https://krafter.io/fr/blog/freelance-agence-ou-studio-qui-pour-developper-votre-saas) · mise à jour juillet 2026 | Freelance pour lot court, agence pour gros projet, studio pour le cycle complet | Traite l'après-livraison            | TJM et verdicts structurels sans corpus visible ; le studio présenté comme troisième voie supérieure                                                   | Studio produit                   |
| [EID Lab — Freelance vs agence 2026](https://www.eid-lab.com/blog/developpeur-freelance-vs-agence-comparatif) · 13 mars 2026                                          | Seuils de budget, durée et criticité                                            | Réponse directe                     | Seuils `15 k€`, `6 mois`, statistique « Freelancer.com 2026 », délais IA et « 200+ projets » non reliés à des sources vérifiables dans la page ouverte | Agence de développement          |
| [VeryCreatives — SaaS agency vs freelancer](https://verycreatives.com/blog/saas-development-agency-vs-freelancer) · 7 mai 2026                                        | Agence par défaut pour fondateur non technique                                  | Reconnaît des contre-cas freelance  | Présente l'agence comme continuité quasi structurelle et le freelance comme nécessairement solo                                                        | Agence SaaS                      |
| [Manuel Coffin — coût développement SaaS](https://www.manuelcoffin.fr/fr/blog/cout-developpement-saas-2026) · 21 avril 2026                                           | Compare agence, freelance et no-code par prix                                   | Montre que les périmètres diffèrent | Fourchettes non réutilisables sans corpus/méthode publiable ; angle principalement tarifaire                                                           | Prestataire indépendant          |

**Angle mort commun :** les pages classent surtout des statuts. Elles montrent
peu comment attribuer une décision, un contrôle, un relais opérationnel et une
remise vérifiable sur la même prochaine phase.

**Valeur propre du guide :** une carte non notée, réutilisable pour cinq formes
d'équipe, puis deux répétitions concrètes : une demande qui change et une
indisponibilité pendant un incident.

## 5. Sources externes ouvertes et fiche de preuves

Toutes les sources ci-dessous ont été ouvertes et lues le **4 août 2026**.

| Source, organisme et date                                                                                                                                                                                                                         | Type et portée                                                                                                                 | Fait utilisable                                                                                                                                                                                                                             | Limite à conserver                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Code de la propriété intellectuelle, art. L131-3](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958) · Légifrance · version en vigueur depuis le 3 juillet 1992                                                               | Texte officiel français sur la cession de droits d'auteur                                                                      | Chaque droit cédé doit être mentionné distinctement et son exploitation délimitée quant à l'étendue, la destination, le lieu et la durée                                                                                                    | Ne qualifie pas à lui seul toutes les composantes d'un logiciel ni un contrat particulier                                                               |
| [Code de la propriété intellectuelle, art. L113-9](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000039279818) · Légifrance · version en vigueur depuis le 1er janvier 2020                                                             | Texte officiel français sur les logiciels créés par des employés dans leurs fonctions ou selon les instructions de l'employeur | Sauf dispositions ou stipulations contraires, les droits patrimoniaux correspondants sont dévolus à l'employeur                                                                                                                             | Le texte vise les employés et agents publics concernés ; il ne règle pas par analogie tous les freelances, sous-traitants, composants tiers ou contrats |
| [RGPD, article 28](https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX%3A32016R0679) · Parlement européen et Conseil · règlement du 27 avril 2016                                                                                           | Texte officiel UE, lorsqu'un traitement est effectué pour le compte d'un responsable                                           | Garanties suffisantes, encadrement écrit, objet/durée/nature/finalité, catégories de données/personnes, instructions, confidentialité, sécurité, sous-traitants ultérieurs, assistance, retour/suppression et audit figurent dans l'article | Ne signifie pas que tout développeur est sous-traitant pour tout traitement ; les rôles dépendent des faits                                             |
| [Responsable, sous-traitant : identifier son rôle](https://www.cnil.fr/fr/rgpd-comment-bien-identifier-son-role) · CNIL · 6 juin 2025                                                                                                             | Explication officielle française, qualification au cas par cas                                                                 | La qualification dépend de qui décide de quoi et qui exécute quoi ; la CNIL cite compétence, fiabilité et moyens humains/techniques et demande de maîtriser l’identité de la chaîne de sous-traitance                                       | Un simple tiers ou composant n’est pas qualifié par sa seule présence ; une qualification contractuelle seule ne suffit pas                             |
| [Sécurité : gérer la sous-traitance](https://www.cnil.fr/fr/securite-gerer-la-sous-traitance) · CNIL · 14 mars 2024                                                                                                                               | Fiche officielle pour traitements confiés à un sous-traitant                                                                   | Le responsable doit connaître les mesures, prévoir responsabilités, authentification, restitution/destruction, incidents, assistance et moyens de vérification                                                                              | Les mesures restent proportionnées aux données et risques réels ; une certification n'est qu'un indice                                                  |
| [Sécurité : encadrer la maintenance et la fin de vie](https://www.cnil.fr/fr/securite-encadrer-la-maintenance-et-la-fin-de-vie-des-materiels-et-logiciels) · CNIL · 14 mars 2024                                                                  | Fiche officielle limitée à la sécurité des données pendant la maintenance                                                      | La CNIL recommande de tracer les interventions et de n'ouvrir un accès de maintenance à distance que pour une durée demandée et définie, puis de le refermer                                                                                | Ne prescrit ni une organisation générale d'équipe SaaS, ni une disponibilité contractuelle, ni une préférence agence/freelance                          |
| [Externalisation et sécurité des SI](https://messervices.cyber.gouv.fr/guides/externalisation-et-securite-des-systemes-dinformation-un-guide-pour-maitriser-les) · ANSSI/MesServicesCyber · 3 décembre 2010                                       | Guide institutionnel ancien sur l'infogérance                                                                                  | L'externalisation peut créer des risques contextuels ; le texte indique aussi qu’elle peut être souhaitable si les compétences internes sont absentes ou insuffisantes                                                                      | Source ancienne : ne pas en tirer un état technique actuel, une obligation générale ni une préférence agence/freelance/interne                          |
| [Rôles de dépôt dans une organisation](https://docs.github.com/fr/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization) · GitHub Docs · date de page non affichée | Documentation produit officielle                                                                                               | Une organisation GitHub peut attribuer des rôles distincts, de lecture à administration, aux membres, équipes et collaborateurs externes                                                                                                    | Exemple propre à GitHub et à ses offres ; d'autres services ont d'autres rôles et conditions                                                            |
| [Sourçage opérationnel 2025](https://www.economie.gouv.fr/files/files/directions_services/dae/media-document/Guide_sourcage_operationnel.pdf) · Direction des achats de l'État · décembre 2025                                                    | Cadre d'achat public                                                                                                           | Étudier le marché en amont aide l'acheteur public à préciser le besoin et préparer la consultation                                                                                                                                          | Ne crée aucune obligation pour une PME privée et appartient surtout au guide #22 sur la sélection des candidats                                         |

### Registre de preuves utilisables dans la page

| ID    | Affirmation soutenable                                                                                         | Nature                           | Périmètre                                                | Confiance                | Conséquence lecteur                                                                                              | Fraîcheur                                                                   |
| ----- | -------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------------------------------------------------------- | ------------------------ | ---------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| PR-01 | Une cession de droits doit identifier les droits cédés et délimiter leur exploitation                          | Officielle                       | Droit français, art. L131-3                              | Élevée                   | Lire et faire relire les clauses plutôt que déduire les droits du paiement                                       | Revalider avant évolution juridique                                         |
| PR-02 | Le régime de L113-9 vise les logiciels et documentations créés par des employés dans les conditions du texte   | Officielle                       | Cas salariés/agents visés                                | Élevée                   | Demander comment une structure sécurise sa chaîne de droits, sans l'étendre aux indépendants                     | Revalider avant évolution juridique                                         |
| PR-03 | L'article 28 impose un cadre écrit précis dans les relations responsable/sous-traitant qu'il couvre            | Officielle                       | Traitements de données personnelles pour compte d'autrui | Élevée                   | Nommer les rôles, données, instructions, sous-traitants, incidents et sortie                                     | Revalider au changement de texte ou qualification                           |
| PR-04 | Les rôles RGPD dépendent des faits, pas seulement du titre contractuel                                         | Officielle CNIL                  | Qualification au cas par cas                             | Élevée                   | Distinguer responsable, sous-traitant, sous-traitant ultérieur et simple tiers avant d’attribuer des obligations | Revalider à nouvelle doctrine CNIL/CEPD                                     |
| PR-05 | Les garanties d'un sous-traitant incluent aussi moyens humains, compétence et fiabilité                        | Officielle CNIL                  | Choix et encadrement d'un sous-traitant                  | Élevée                   | Regarder les personnes et moyens réellement prévus                                                               | Revalider à nouvelle doctrine                                               |
| PR-06 | Les interventions et accès de maintenance à distance doivent être encadrés dans le champ traité par la CNIL    | Officielle CNIL                  | Sécurité des données pendant la maintenance              | Élevée                   | Tracer l'intervention, borner l'accès demandé et le refermer après usage                                         | Revalider à nouvelle doctrine ; ne pas généraliser hors maintenance/données |
| PR-07 | Une externalisation peut créer des risques contextuels mais aussi répondre à un manque de compétences internes | Institutionnelle ancienne        | Infogérance, guide 2010                                  | Moyenne à cause de l'âge | Tester l'accès, la reprise et la dépendance sans opposer automatiquement interne et externe                      | Utiliser seulement avec date et limite visibles                             |
| PR-08 | Un service de dépôt peut séparer les niveaux d'accès par rôle                                                  | Documentation officielle produit | GitHub Organisations                                     | Élevée pour GitHub       | Garder l'administration au niveau approprié et tester le retrait/relais                                          | Revalider si fonctions GitHub changent                                      |

### Contradictions et données à ne pas publier

- Aucun statut n'est, par nature, toujours moins cher, plus rapide, plus sûr ou
  plus disponible.
- Un freelance n'est pas nécessairement seul ; une agence n'a pas
  nécessairement un remplaçant opérationnel.
- Aucun TJM, budget, délai ou taille d'équipe universels ne sont défendables
  avec le corpus ouvert.
- Le paiement ne prouve pas une cession automatique et exhaustive du code.
- Une archive de code seule ne prouve pas qu'une autre équipe peut remettre le
  produit en ligne.
- Une agence, un contrat ou une certification ne garantit pas l'absence
  d'incident.
- Une documentation GitHub ne prescrit pas l'outil de dépôt d'un projet.
- Le guide ANSSI de 2010 ne décrit pas l'état technique de 2026.
- Les obligations NIS2 ou sectorielles ne sont jamais généralisées à tous les
  SaaS.

## 6. Registre des perspectives

| Perspective               | Statut     | Question reportée dans la couverture                                                      |
| ------------------------- | ---------- | ----------------------------------------------------------------------------------------- |
| Dirigeant non technique   | APPLICABLE | Qui peut décider et quelle forme limite le travail non couvert ?                          |
| Produit                   | APPLICABLE | Qui accepte, refuse ou reporte une demande ?                                              |
| Utilisateurs/métier       | APPLICABLE | Qui décrit la situation et qui vérifie que le changement aide réellement ?                |
| Finance                   | APPLICABLE | Quels décaissements et temps internes restent à confirmer ?                               |
| Technique et sécurité     | APPLICABLE | Qui construit, révise, met en ligne, surveille et reprend ?                               |
| Données et RGPD           | APPLICABLE | Qui décide des traitements, qui agit pour le compte de qui et quels tiers interviennent ? |
| Achats/juridique          | APPLICABLE | Quels droits, responsabilités et remises doivent être écrits ?                            |
| Adoption                  | APPLICABLE | Qui prépare les utilisateurs et recueille les erreurs après mise en ligne ?               |
| Maintenance               | APPLICABLE | Qui corrige, met à jour et décide du travail d'évolution ?                                |
| Incident/reprise          | APPLICABLE | Qui détecte, décide, agit, contrôle et communique en cas d'incident ?                     |
| Changement de prestataire | APPLICABLE | Code, comptes, données et procédure sont-ils récupérables et testés ?                     |
| Solution plus simple      | APPLICABLE | Une personne ou un outil existant suffit-il pour la phase ?                               |
| Maintien/report           | APPLICABLE | Le problème et le décideur côté client sont-ils assez clairs pour commencer ?             |

## 7. Matrice de couverture P1

| Angle ou sous-intention     | Question réelle                                          | Localisation prévue              | Exemple ou démonstration                                      | Limite/contre-cas/source                           | Action rendue possible                    | Statut P1        |
| --------------------------- | -------------------------------------------------------- | -------------------------------- | ------------------------------------------------------------- | -------------------------------------------------- | ----------------------------------------- | ---------------- |
| Réponse directe             | Agence ou freelance ?                                    | `#reponse`                       | Conditions de choix en ouverture                              | Aucun statut gagnant                               | Refuser le choix par logo                 | COUVERT          |
| Quatre phases               | De quelle équipe ai-je besoin maintenant ?               | `#phase`                         | Validation, construction, mise en ligne, exploitation         | Une phase peut être reportée                       | Choisir seulement la prochaine phase      | COUVERT          |
| Cinq champs                 | Que faut-il attribuer ?                                  | `#carte`                         | Modèle copiable décider/réaliser/contrôler/relayer/remettre   | Une ligne incomplète reste bloquante               | Remplir la carte sans contact             | COUVERT          |
| Formes d'équipe             | Quand freelance, agence, interne ou hybride ?            | `#formes`                        | Comparaison sur les mêmes responsabilités                     | Report inclus ; pas de classement                  | Repérer ce que le client doit couvrir     | COUVERT          |
| Demande qui change          | Qui tranche une nouvelle demande ?                       | `#changement`                    | Scénario fictif de changement de règles d'accès               | Ne prouve aucune expérience client                 | Rejouer le changement avant engagement    | COUVERT          |
| Incident et indisponibilité | Qui reprend quand une personne manque ?                  | `#incident`                      | Scénario fictif d'erreur de connexion et interlocuteur absent | L'exercice ne garantit pas la continuité réelle    | Tester relais, accès et trace             | COUVERT          |
| Budget                      | Pourquoi les prix ne sont-ils pas comparables ?          | `#budget`                        | Cinq charges à attribuer, inconnues `à confirmer`             | Aucun montant de marché                            | Isoler le travail encore porté en interne | COUVERT          |
| Code, données, accès        | Que doit récupérer l'entreprise ?                        | `#sortie`                        | Inventaire et test de reprise                                 | Droit/RGPD au cas par cas                          | Faire relire contrat et tester les accès  | COUVERT          |
| Verdict conditionnel        | Quelle forme choisir ?                                   | `#decision`                      | Cinq issues non classées                                      | Mauvais fit Hagnéré Code explicite                 | Choisir ou reporter                       | COUVERT          |
| Comparaison des candidats   | Comment sélectionner une agence ou un freelance précis ? | Renvoi visible vers le guide #22 | Guide existant avec cas commun et preuves                     | Hors décision de forme                             | Passer à la sélection après la carte      | RENVOI_EXPLICITE |
| Contenu du MVP              | Quelles fonctions inclure ?                              | Renvoi vers le guide #28         | Contrat en sept familles existant                             | Hors décision d'équipe                             | Fermer la phase avant attribution         | RENVOI_EXPLICITE |
| Priorisation                | Quel prochain lot choisir ?                              | Renvoi vers le guide #29         | Atelier existant                                              | Hors décision d'équipe                             | Définir le lot avant la forme             | RENVOI_EXPLICITE |
| Prix/TJM de marché          | Quel est le prix moyen ?                                 | Dossier uniquement               | Aucun corpus défendable                                       | Une moyenne changerait artificiellement le verdict | Demander des montants sur la phase réelle | ECARTE_JUSTIFIE  |
| Recrutement salarié         | Comment embaucher l'équipe ?                             | Dossier uniquement               | N/A                                                           | Décision RH indépendante                           | Faire traiter dans un contenu dédié       | ECARTE_JUSTIFIE  |

Aucun angle matériel n'est laissé `BLOQUANT` au contrat P1. La page et la
matrice devront être réconciliées par l'orchestrateur avant G1.

## 8. Registre des affirmations

| ID   | Affirmation                                                                                        | Type           | Source primaire                  | Périmètre/date                              | Statut P1                            |
| ---- | -------------------------------------------------------------------------------------------------- | -------------- | -------------------------------- | ------------------------------------------- | ------------------------------------ |
| A-01 | Le statut ne prouve pas la couverture des responsabilités                                          | DEDUCTION      | Carte et faits internes/externes | Toutes formes d'équipe                      | VERIFIE                              |
| A-02 | Un freelance peut convenir à une phase resserrée si décision, contrôle et relais sont couverts     | RECOMMANDATION | Raisonnement conditionnel        | Pas une garantie de qualité/disponibilité   | A_NUANCER dans chaque occurrence     |
| A-03 | Une agence peut convenir quand plusieurs travaux doivent être coordonnés                           | RECOMMANDATION | Raisonnement conditionnel        | Les personnes et relais doivent être nommés | A_NUANCER dans chaque occurrence     |
| A-04 | Une équipe interne peut gagner si elle possède compétences, temps et responsabilité d'exploitation | RECOMMANDATION | Raisonnement conditionnel        | Aucune instruction de recrutement           | VERIFIE comme condition              |
| A-05 | L'hybride peut répartir métier et technique entre client et extérieur                              | RECOMMANDATION | Fait organisationnel général     | Interfaces et relais écrits nécessaires     | VERIFIE comme condition              |
| A-06 | Le report est préférable sans problème validé ou décideur côté client                              | RECOMMANDATION | Contrat de réponse interne       | Décision éditoriale, pas loi                | VERIFIE comme recommandation         |
| A-07 | Les droits cédés et leur exploitation doivent être délimités selon L131-3                          | FAIT           | Légifrance                       | Droit français                              | VERIFIE                              |
| A-08 | L113-9 prévoit le régime des logiciels d'employés dans les conditions du texte                     | FAIT           | Légifrance                       | Droit français, cas visé                    | VERIFIE                              |
| A-09 | Le rôle RGPD dépend des faits et l'article 28 encadre les sous-traitants qu'il couvre              | FAIT           | EUR-Lex/CNIL                     | Traitements concernés                       | VERIFIE                              |
| A-10 | L'ANSSI identifie des risques contextuels d'externalisation                                        | FAIT           | ANSSI 2010                       | Source institutionnelle ancienne            | A_NUANCER par date/portée            |
| A-11 | Hagnéré Code compte sept personnes, dont trois freelances long-terme                               | FAIT           | `src/lib/team.ts`                | Composition publique au 4 août 2026         | VERIFIE ; revalider si équipe change |
| A-12 | Les personnes affectées à une mission Hagnéré Code sont celles du devis                            | FAIT INTERNE   | Bios et page service             | Offre Hagnéré Code seulement                | VERIFIE                              |
| A-13 | Les prix moyens agence/freelance                                                                   | INCONNU        | Aucun corpus défendable          | France 2026 non établi                      | A_RETIRER                            |
| A-14 | Une agence dispose toujours d'un remplaçant                                                        | INCONNU        | Aucun                            | Aucun                                       | A_RETIRER                            |
| A-15 | Un freelance travaille toujours seul                                                               | INCONNU        | Aucun                            | Aucun                                       | A_RETIRER                            |

### Registre contradictoire P2 des affirmations contrôlables

Le registre ci-dessous couvre les faits, recommandations, calculs et
généralisations contrôlables de la page P2. Les deux scènes fictives ne sont pas
traitées comme des faits : seules leurs règles explicites et leurs limites le
sont.

| ID    | Affirmation contrôlée                                                                                               | Nature                       | Vérification, portée ou limite                                                                                   | Statut P2                                    |
| ----- | ------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ---------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| P2-01 | Le nom agence/freelance ne prouve pas les personnes, accès ou relais d'une mission                                  | Déduction                    | La page demande les éléments du cas réel et ne transforme pas le statut en garantie                              | VERIFIEE                                     |
| P2-02 | Validation, construction, mise en ligne et exploitation appellent des travaux différents                            | Méthode organisationnelle    | Découpage utile mais non exhaustif ; aucune phase ne fixe seule prix, durée ou taille                            | A_NUANCER, limite visible                    |
| P2-03 | Décider, réaliser, contrôler, relayer et remettre sont cinq champs non compensables                                 | Méthode éditoriale           | Ni norme ni garantie ; une ligne remplie ne prouve ni compétence, ni disponibilité, ni résultat                  | A_NUANCER, qualification ajoutée             |
| P2-04 | Un freelance peut convenir à une phase resserrée                                                                    | Recommandation               | Seulement si décision client, contrôle adapté, disponibilité et relais praticable sont confirmés                 | VERIFIEE comme recommandation conditionnelle |
| P2-05 | Une agence peut convenir lorsque plusieurs travaux doivent être coordonnés                                          | Recommandation               | Les personnes affectées et le remplacement restent à prouver ; le logo ne suffit pas                             | VERIFIEE comme recommandation conditionnelle |
| P2-06 | L'interne peut convenir si compétences, temps et exploitation existent                                              | Recommandation               | L'organigramme ne prouve pas la capacité ; aucune instruction de recrutement                                     | VERIFIEE comme recommandation conditionnelle |
| P2-07 | L'hybride peut répartir métier, accès et compétences                                                                | Recommandation               | Les frontières, décisions, contrôles et relais doivent être nommés                                               | VERIFIEE comme recommandation conditionnelle |
| P2-08 | Reporter peut être préférable sans problème validé ou décideur client                                               | Recommandation éditoriale    | Ce n'est ni une obligation ni un diagnostic universel ; l'événement de reprise doit être nommé                   | VERIFIEE comme recommandation conditionnelle |
| P2-09 | Un freelance peut avoir un relais et une agence peut concentrer la connaissance sur une personne                    | Possibilités contradictoires | Aucun cas particulier n'est affirmé ; la correction empêche deux stéréotypes symétriques                         | A_NUANCER, formulation conditionnelle        |
| P2-10 | L'équipe publique Hagnéré Code compte sept personnes, dont trois freelances long-terme                              | Fait interne daté            | Recalculé depuis la source partagée au snapshot P1 ; ne prouve pas l'affectation à une mission                   | VERIFIEE, à revalider si l'équipe change     |
| P2-11 | Les personnes, charges, relais et disponibilités d'une future mission sont connus                                   | Fait de mission              | Aucun devis de la mission dans le corpus                                                                         | INCONNUE, laissée à confirmer                |
| P2-12 | Un prix, TJM, délai ou effectif moyen départage agence et freelance en France en 2026                               | Généralisation de marché     | Aucun corpus ou protocole défendable ; aucune valeur publique conservée                                          | A_RETIRER                                    |
| P2-13 | Six lignes critiques moins quatre lignes complètes donnent deux lignes incomplètes                                  | Calcul de cardinalité        | Recalcul indépendant par complément puis contrôle inverse ; unité unique, aucun arrondi                          | VERIFIEE                                     |
| P2-14 | L131-3 impose la mention distincte des droits cédés et la délimitation du domaine d'exploitation                    | Fait juridique               | Texte français, version en vigueur affichée depuis le 3 juillet 1992 ; ne qualifie pas seul le contrat           | VERIFIEE dans cette portée                   |
| P2-15 | L113-9 dévolue à l'employeur les droits patrimoniaux sur certains logiciels d'employés                              | Fait juridique               | Cas et réserves du texte, version en vigueur depuis le 1er janvier 2020 ; pas d'extension aux indépendants       | VERIFIEE dans cette portée                   |
| P2-16 | Le rôle RGPD se détermine d'après les faits et non par le seul titre du contrat                                     | Fait réglementaire expliqué  | CNIL du 6 juin 2025 ; un développeur peut avoir des qualifications différentes selon ses décisions et opérations | VERIFIEE                                     |
| P2-17 | L'article 28 encadre la relation responsable/sous-traitant lorsqu'il s'applique                                     | Fait réglementaire           | Objet, durée, nature, finalité, données, personnes, instructions, sécurité, assistance, sortie et audit          | VERIFIEE dans cette portée                   |
| P2-18 | Un sous-traitant RGPD, un sous-traitant ultérieur et un simple tiers ou composant sont interchangeables             | Généralisation               | La CNIL exige une qualification par les faits et la maîtrise de la chaîne concernée                              | A_RETIRER                                    |
| P2-19 | Les accès de télémaintenance peuvent être ouverts sans durée ni trace                                               | Recommandation contraire     | CNIL du 14 mars 2024 : intervention tracée, durée adaptée définie, accès refermé                                 | A_RETIRER                                    |
| P2-20 | L'externalisation peut créer perte de maîtrise, intervention à distance ou hébergement mutualisé selon le contexte  | Fait institutionnel ancien   | ANSSI/MesServicesCyber, 3 décembre 2010 ; ne décrit pas l'état technique de 2026                                 | A_NUANCER par âge et périmètre               |
| P2-21 | L'externalisation est à opposer à la sécurité ou à l'équipe interne                                                 | Généralisation               | Le même guide 2010 indique qu'un prestataire peut être souhaitable si les compétences internes manquent          | A_RETIRER                                    |
| P2-22 | GitHub Organisations permet plusieurs niveaux d'accès au dépôt                                                      | Fonction produit             | Documentation officielle ouverte ; exemple GitHub seulement, non prescription d'outil                            | VERIFIEE dans le périmètre GitHub            |
| P2-23 | Une archive de code suffit toujours à permettre une reprise                                                         | Généralisation               | La page demande aussi construction, comptes, données, décisions et exercice ; ce contrôle reste pratique         | A_RETIRER                                    |
| P2-24 | Doubler le volume produit automatiquement une panne ou impose une agence                                            | Généralisation               | Le stress-test ne suppose ni panne ni seuil ; volume, seuil, coût et réponse restent propres au produit          | A_RETIRER                                    |
| P2-25 | Une défaillance de tiers se traite toujours de la même façon                                                        | Généralisation               | Détection, mode dégradé, retour arrière, données et qualification du tiers dépendent du produit                  | A_RETIRER                                    |
| P2-26 | Besoin, intégration, licences, migration, formation, support, maintenance et sortie valent zéro sans ligne de devis | Généralisation financière    | Tous les montants et temps restent « à confirmer » ; aucun TCO fictif                                            | A_RETIRER                                    |
| P2-27 | Une licence ou compétence déjà payée doit être refacturée automatiquement                                           | Généralisation financière    | Vérifier d'abord si l'existant répond réellement au besoin                                                       | A_RETIRER                                    |
| P2-28 | Droits, qualification RGPD, assurance et contraintes sectorielles du projet futur sont déterminés                   | Faits du cas particulier     | Aucun contrat ni produit final dans le corpus                                                                    | INCONNUE, STOP avant affirmation             |
| P2-29 | Une agence, un freelance, un contrat ou une certification garantit la continuité, la conformité ou le résultat      | Garantie générale            | Aucun fondement ; les preuves de mission et les tests restent nécessaires                                        | A_RETIRER                                    |

### Contre-sources et limites utilisées en P2

- **Contre « le paiement transfère tout » :** L131-3 impose une cession
  délimitée et L113-9 ne vise que les cas qu'il énumère.
- **Contre « tout développeur est sous-traitant » :** la CNIL qualifie les
  rôles selon les décisions et opérations réelles ; elle donne aussi des cas où
  un développeur est responsable ou sous-traitant.
- **Contre « un fournisseur suffit à décrire toute la chaîne » :** la CNIL du
  6 juin 2025 demande de maîtriser l'identité des sous-traitants et
  sous-traitants ultérieurs concernés, selon le risque.
- **Contre « externaliser est nécessairement moins sûr » :** le guide ANSSI de
  2010 présente des risques contextuels mais indique aussi que le recours à un
  prestataire peut être souhaitable lorsque les compétences internes sont
  absentes ou insuffisantes. Son âge et son champ interdisent une préférence
  automatique.
- **Contre « le dépôt doit être administré par tout le monde ou par une seule
  personne » :** GitHub documente plusieurs rôles. Ce n'est qu'un exemple
  produit et non une architecture universelle.
- **Limite financière :** aucune contre-source ne transforme un coût manquant
  en montant. Les postes sont rendus visibles et restent à confirmer sur la
  même phase, le même volume et le même niveau de service.

## 9. Calculs et scénarios reproductibles

### Calcul P1-C1 — compter les lignes incomplètes, pas noter l'équipe

- Nature : contrôle de complétude, **pas un score**.
- Unité : ligne de responsabilité.
- Formule : `lignes incomplètes = lignes critiques − lignes dont
les cinq champs sont tous renseignés`.
- Exemple fictif : 6 lignes critiques ; 4 complètes ; `6 - 4 = 2` lignes
  incomplètes.
- Contrôle inverse : `4 + 2 = 6`.
- Conséquence : les deux lignes sont traitées ou explicitement reportées ; les
  quatre lignes complètes ne compensent pas les deux absences.
- Limite : le comptage ne mesure ni compétence, ni qualité, ni disponibilité,
  ni coût. Une ligne remplie avec un nom non confirmé ne devient pas une preuve.

### Reproduction indépendante P2-C1 et cas limites

Le résultat affiché n'a pas été repris comme point de départ. Soit un ensemble
de **six** lignes critiques. Le sous-ensemble des lignes dont les cinq champs
sont renseignés contient **quatre** éléments. Son complément dans l'ensemble
initial contient donc **deux** éléments : `6 − 4 = 2`. La partition est
recomposée indépendamment : `4 + 2 = 6`.

- Unité de chaque opérande : ligne de responsabilité ; aucune monnaie, période,
  TVA, conversion ou arrondi.
- `0` ligne critique et `0` complète donnent `0` incomplète, mais ne prouvent
  pas que la phase a été correctement découpée.
- Une ligne avec un champ vide est incomplète ; une chaîne comme « à voir » ou
  un rôle non confirmé reste une hypothèse et non une preuve.
- Un nombre négatif, décimal ou non fini est invalide : il ne peut pas
  représenter la cardinalité d'un ensemble de lignes.
- Un nombre de lignes complètes supérieur au nombre de lignes critiques signale
  une saisie incohérente ; le calcul doit être refusé, pas ramené à zéro.
- Sur un très grand nombre de lignes, l'arithmétique reste vraie, mais la carte
  devient difficile à exploiter : il faut découper la phase plutôt que déduire
  une meilleure forme d'équipe du volume.
- Le contrôle mesure seulement la complétude déclarative. Il ne calcule aucun
  score, TCO, niveau de sécurité, disponibilité ou probabilité d'échec.

### Scénario P1-S1 — la demande change

**Exemple entièrement fictif.** Un SaaS B2B permet à un responsable client
d'inviter des collègues. Une demande ajoute un rôle « observateur » qui voit
les dossiers sans pouvoir les modifier.

1. Côté client, une personne décide si ce besoin appartient à la phase.
2. L'équipe évalue les effets sur écrans, droits, données, tests et assistance.
3. Le décideur accepte, réduit ou reporte le changement.
4. Une personne réalise, une autre contrôle les refus et autorisations.
5. Le relais reçoit la décision, les tests et la procédure modifiée.

Le scénario ne contient ni client, ni prix, ni délai, ni résultat Hagnéré Code.

### Scénario P1-S2 — incident et indisponibilité

**Exemple entièrement fictif.** Après une mise en ligne, certains utilisateurs
ne peuvent plus se connecter. La personne qui a écrit le mécanisme est
indisponible.

1. Une alerte ou un signal utilisateur ouvre l'incident.
2. Une personne qualifie l'impact et décide de contourner, revenir en arrière
   ou corriger.
3. Le relais utilise les accès, l'historique et la procédure disponibles.
4. Une personne distincte contrôle le rétablissement et les cas refusés.
5. L'équipe consigne ce qui a changé et ce qui reste à surveiller.

Le scénario teste une organisation ; il ne prouve aucune garantie de service.

### Budget : absence volontaire de faux calcul

Le guide ne publie aucun TCO ou prix illustratif. Les montants de facture,
temps client, services tiers, exploitation et sortie dépendent du lot et du
contrat. Chaque ligne reste `à confirmer` tant qu'une source ou une proposition
datée ne la renseigne pas. Le guide #22 couvre ensuite la comparaison des
propositions sur une base commune.

### Cartographie P2 des charges cachées

| Famille à rendre visible                         | Ce qui peut manquer à la proposition                                                 | Traitement P2                                             |
| ------------------------------------------------ | ------------------------------------------------------------------------------------ | --------------------------------------------------------- |
| Besoin, phase et disponibilité client            | Informations métier, décisions, validation et temps d'acceptation                    | Montant et temps `à confirmer`                            |
| Conception, réalisation, intégration et contrôle | Connexions, environnements, jeux de données, contrôles, corrections                  | Même phase, volume et niveau de service                   |
| Licences, services et comptes tiers              | Abonnements, consommation, administration, retrait des accès                         | Vérifier d'abord l'outil ou la compétence déjà payés      |
| Migration et mise en ligne                       | Nettoyage, reprise, contrôle, bascule et retour arrière                              | Aucun coût nul implicite                                  |
| Formation, adoption et assistance                | Préparation des personnes, questions, erreurs d'usage, support initial               | Distinguer travail client et travail extérieur            |
| Maintenance, exploitation et évolution           | Surveillance, incident, mises à jour, assistance, décisions de changement            | Ne pas confondre livraison initiale et fonctionnement     |
| Sortie et reprise                                | Export, fermeture, transfert, reconstruction, procédure, temps de la nouvelle équipe | Garder le poste `à confirmer` jusqu'à une clause vérifiée |

Aucune somme n'est calculée : un devis, une licence déjà payée ou une compétence
interne ne couvre une ligne que si son périmètre répond au besoin décrit. Une
fonction déjà achetée n'est ni ignorée, ni considérée automatiquement suffisante.

### Stress-tests P2 ajoutés au scénario d'incident

1. **Volume doublé dans le cas testé.** Le test ne prédit pas une panne. Il
   oblige à nommer le volume initial, le signal observé, le seuil, la personne
   qui décide et les options : limiter, renforcer, revenir en arrière ou
   reporter. Toutes les valeurs restent `à confirmer`.
2. **Service ou composant indispensable indisponible.** Le test oblige à nommer
   qui détecte, contacte le tiers, active le mode dégradé ou le retour arrière,
   contrôle les données et confirme le rétablissement.
3. **Qualification du tiers.** Un fournisseur, une bibliothèque, un
   sous-traitant RGPD et un sous-traitant ultérieur ne sont pas synonymes. La
   présence d'une dépendance ne qualifie pas seule son rôle ; l'analyse reste
   fondée sur les faits et le traitement réel.

Ces stress-tests peuvent modifier la couverture requise sans faire gagner une
forme par défaut. Une agence peut concentrer la connaissance ; un freelance peut
documenter un relais ; l'interne et l'hybride doivent eux aussi montrer qui
détecte, décide, replie, contrôle et communique.

## 10. Empreinte éditoriale à ne pas reproduire

| Guide voisin                                 | Ouverture/progression                                                      | Dispositif dominant                  | Choix volontaire pour #30                                                  |
| -------------------------------------------- | -------------------------------------------------------------------------- | ------------------------------------ | -------------------------------------------------------------------------- |
| #22 `choisir-prestataire-application-metier` | Dossiers incomparables puis cas commun, huit preuves, coûts et outil local | Procédure de sélection d'un candidat | Aucun outil de notation, aucun entretien de candidat, aucun coût normalisé |
| #28 `mvp-saas-quoi-inclure`                  | Résultat vendu puis sept familles et calcul de travail manuel              | Contrat de MVP et outil local        | Ne pas redéfinir les fonctions ; progression par phase et personnes        |
| #29 `prioriser-fonctionnalites-mvp-saas`     | Score insuffisant puis voies critiques et atelier local                    | Demandes, décisions et dépendances   | Aucun score de priorité ; deux répétitions organisationnelles              |
| #26 `cahier-des-charges-saas`                | Faire chiffrer le même produit avec neuf blocs                             | Générateur Markdown                  | Une carte courte copiable, sans générateur ni duplication des neuf blocs   |

```text
Tension motrice : le nom de la structure rassure ou inquiète, mais le vide se
voit seulement lorsqu'une responsabilité, un relais ou une remise n'a pas de nom.
Ouverture : réponse conditionnelle directe, sans devis fictif.
Progression : prochaine phase -> cinq champs -> formes -> deux événements ->
budget restant -> droits/accès -> décision.
Artefact signature : carte copiable d'une ligne de responsabilité.
Rythme : explication courte, cartes de phase, modèle, deux scènes fictives.
CTA : après l'action autonome et les cinq issues, jamais dans le héros.
Conclusion : choisir une forme pour une phase ou reporter, pas désigner un gagnant.
```

Trois différences fortes : aucune grille de sélection, aucune fonction MVP à
prioriser, aucune note globale. Le guide vérifie une responsabilité par son
responsable, son contrôle, son relais et sa trace.

## 11. Plan annoté P1

| Section       | Question résolue                                            | Preuve/exemple                                   | Conséquence                                   | Format                       |
| ------------- | ----------------------------------------------------------- | ------------------------------------------------ | --------------------------------------------- | ---------------------------- |
| `#reponse`    | Quelle est la réponse courte ?                              | Conditions de cinq formes                        | Refuser le choix par statut                   | Prose + mémo                 |
| `#phase`      | De quelle organisation ai-je besoin maintenant ?            | Quatre phases et résultat attendu                | Ne choisir que pour la prochaine phase        | Cartes mobiles               |
| `#carte`      | Quelles informations attribuer ?                            | Modèle copiable + 6 - 4 = 2                      | Voir les absences non compensables            | Formule + image              |
| `#formes`     | Quand chaque forme est-elle raisonnable ?                   | Même responsabilité, conditions et charge client | Choisir sans classement                       | Tableau transformé en cartes |
| `#changement` | Qui arbitre une nouvelle demande ?                          | Scénario fictif observateur                      | Rejouer la décision et la transmission        | Chronologie                  |
| `#incident`   | Qui agit si l'auteur, le volume ou un tiers pose problème ? | Scénario fictif connexion + deux stress-tests    | Tester détection, décision, repli et contrôle | Chronologie + mémo           |
| `#budget`     | Quel travail reste chez le client ?                         | Sept familles sans montant inventé               | Obtenir les inconnues avant comparaison       | Cartes                       |
| `#sortie`     | Que faut-il récupérer et encadrer ?                         | Légifrance, RGPD, CNIL, GitHub                   | Faire qualifier et tester la reprise          | Prose sourcée + checklist    |
| `#decision`   | Quelle forme choisir maintenant ?                           | Cinq issues conditionnelles                      | Choisir, limiter ou reporter                  | Cartes + CTA tardif          |

## 12. Ressource, conversion et maillage

```text
Ressource naturellement nécessaire : non, pas de téléchargement.
Raison : le modèle copiable dans la page produit déjà la carte autonome.
Format : texte Markdown copiable, imprimable avec la page.
Conclusion « ne pas investir » : oui, via le report explicite.
Données saisies : aucune ; aucun outil interactif ni envoi réseau.
Bon fit Hagnéré Code : phase SaaS B2B définie, plusieurs responsabilités à
coordonner, besoin de développement et de continuité à préciser au devis.
Mauvais fit : problème non validé, recherche d'un associé, mission très isolée
déjà couverte par un indépendant, équipe interne autonome, décision fondée sur
un prix de marché inexistant.
Action non commerciale : remplir une ligne pour chaque travail critique, puis
rejouer changement et incident.
CTA : « Décrire la phase et les responsabilités à couvrir » vers
`/demarrer-un-projet` ; le formulaire recueille un contexte, sans produire de
devis, de certification ou d'avis juridique automatique.
```

Maillage sortant retenu :

- #28 pour définir le socle du MVP avant de choisir les personnes ;
- #29 si le prochain lot reste à décider ;
- #22 pour comparer ensuite des candidats et propositions ;
- service SaaS pour comprendre l'offre Hagnéré Code, sans la faire gagner.

Le maillage entrant et la suppression de la redirection historique restent
interdits pendant P1 et seront traités sous verrou central.

## 13. Inconnues et STOP opérationnels

- Première date de publication : **INCONNUE**. Aucun champ public ne reçoit une
  date inventée pendant le travail slug-only.
- Date de modification publiée : **INCONNUE** jusqu'au snapshot réellement
  servi.
- Temps de lecture : à mesurer sur le HTML final après intégration du registre.
- Intervenants, disponibilité, relais et sous-traitants d'une proposition : à
  confirmer par les documents de la mission.
- Prix, délai et charge de chaque forme : à confirmer ; aucune moyenne publiée.
- Droits, qualification RGPD, assurance et exigences sectorielles : à faire
  qualifier sur le contrat et le produit réels.
- Aucune revue par un lecteur humain n'est revendiquée en P1.
- Aucun déploiement, publication, indexation ou performance publique n'est
  revendiqué.

## 14. Journal détaillé P1

### Fichiers lus

- `CLAUDE.md` ;
- règle d'or SEO/publication ;
- charte qualité ;
- workflow maître quatre passes ;
- instructions qualité transversales ;
- roadmap ;
- modèle de dossier ;
- gel d'entrée ;
- ancien dossier historique intégral ;
- registre, équipe, page service et composants premium concernés ;
- guides #22, #26, #28 et #29, avec leurs structures et frontières.

### Recherches réalisées

- SERP qualitative exacte et variantes, le 4 août 2026 ;
- ouverture de cinq pages concurrentes représentatives ;
- ouverture des articles L131-3 et L113-9 sur Légifrance ;
- ouverture du RGPD officiel sur EUR-Lex, article 28 ;
- ouverture des fiches CNIL de qualification des rôles, de sécurité de la
  sous-traitance et d'encadrement de la maintenance ;
- ouverture du guide ANSSI/MesServicesCyber sur l'externalisation, avec limite
  liée à sa publication en 2010 ;
- ouverture de GitHub Docs sur les rôles de dépôt ;
- ouverture du guide DAE 2025, conservé comme source de contexte d'achat public
  et non comme obligation privée.

### Affirmations ajoutées, retirées ou corrigées

- Ajout : la couverture est vérifiée par cinq champs non compensables.
- Ajout : équipe interne et report sont des options à part entière.
- Ajout : l'équipe publique Hagnéré Code est elle-même mixte ; le label
  « agence » ne signifie donc pas « salariés seulement ».
- Retrait : tout TJM, budget, délai, taille d'équipe ou supériorité générale.
- Correction : l'article L113-9 est limité aux conditions et personnes qu'il
  vise ; il ne règle pas le sort de tous les indépendants.
- Correction : le prestataire n'est pas toujours sous-traitant RGPD ; la
  qualification dépend des décisions et opérations réelles.
- Correction : l'ANSSI 2010 sert à poser des risques de perte de maîtrise, pas
  à décrire un standard technique actuel.

### Contrôles P1 à consigner en fin de passe

- [x] page, image OG et test de contenu créés ;
- [x] trois visuels SVG éditoriaux présents aux ratios 16:9, 4:3 et 1:1 ;
- [x] seules les racines Article et BreadcrumbList sont émises ;
- [x] aucune date de publication ou de modification inventée ;
- [x] un seul CTA éditorial, tardif, vers `/demarrer-un-projet`, sans téléphone ;
- [x] aucun XLS, XLSX ou CSV public ;
- [x] test ciblé : 11 tests sur 11 réussis ;
- [x] formatage, XML, parsing TSX, `git diff --check` et replay du manifeste verts ;
- [x] limites d'environnement TypeScript, ESLint et build consignées.

## 15. Rapport P1 — fermeture

```text
PASSE_1_TERMINEE
Slug : agence-saas-ou-freelance
Fichiers créés ou réécrits :
- docs/research/agence-saas-ou-freelance.md
- docs/research/manifests/agence-saas-ou-freelance-p1.sha256
- src/app/guides/agence-saas-ou-freelance/page.tsx
- src/app/guides/agence-saas-ou-freelance/opengraph-image.tsx
- src/app/guides/agence-saas-ou-freelance/content-quality.test.ts
- public/guides/agence-saas-ou-freelance/equipe-responsabilites-16x9.svg
- public/guides/agence-saas-ou-freelance/carte-responsabilites-4x3.svg
- public/guides/agence-saas-ou-freelance/relais-incident-1x1.svg
Contrat de réponse : choisir une forme d'équipe pour la prochaine phase en
attribuant décider, réaliser, contrôler, relayer et remettre.
Sources primaires : Légifrance L131-3/L113-9, EUR-Lex RGPD art. 28, CNIL rôles
et sous-traitance/maintenance, ANSSI externalisation avec limite 2010,
GitHub Docs.
Plan et sections : neuf sections, quatre phases, cinq formes et deux événements.
Calculs et exemples : lignes incomplètes = lignes critiques − lignes dont les
cinq champs sont tous renseignés ; replay 6 − 4 = 2 et 4 + 2 = 6 ; deux
scénarios entièrement fictifs.
Contre-cas : interne, hybride, freelance resserré, agence coordonnée et report.
CTA et destination : un CTA tardif vers /demarrer-un-projet.
Contrôles : Vitest ciblé 11/11 ; Prettier vert ; XML des trois SVG valide ;
parsing TSX page et OG vert ; git diff --check vert ; titre 50 caractères ;
description 139 caractères ; manifeste P1 rejoué 7/7.
Inspection visuelle : les miniatures Quick Look étaient recadrées pour les
ratios non carrés. Le carré corrigé ne chevauche plus son panneau ; un rendu
Chrome headless local aux dimensions 1600x900, 1200x900 et 1000x1000 n'a
montré ni collision ni texte coupé. G1 doit néanmoins refaire le plein-ratio
sur la page servie et le BAT responsive/print ; ce rendu local n'est pas une
preuve publique.
Commandes de contrôle exactes :
- NODE_PATH=/Users/quentinhagnere/.npm/_npx/59109c6fa2077907/node_modules
  node /Users/quentinhagnere/.npm/_npx/59109c6fa2077907/node_modules/vitest/
  vitest.mjs run src/app/guides/agence-saas-ou-freelance/
  content-quality.test.ts --maxWorkers=1
- npx --yes prettier@3.6.2 --check [page, OG, test, dossier]
- xmllint --noout public/guides/agence-saas-ou-freelance/*.svg
- npx --yes esbuild@0.25.12 [page ou OG] --bundle --platform=node
  --format=esm '--external:*' --outfile=[fichier temporaire]
- git diff --check
- Google Chrome --headless=new --disable-gpu --hide-scrollbars
  --window-size=[1600,900|1200,900|1000,1000] --screenshot=[temporaire]
  file://[SVG]
- shasum -a 256 -c
  docs/research/manifests/agence-saas-ou-freelance-p1.sha256
Limite d'environnement : `node_modules/.bin/tsc`, `eslint`, `next` et
`vitest` sont absents ; `npm ls --depth=0 --silent` sort avec le code 1 et
des dépendances UNMET. Aucun tsc, ESLint ou build complet n'est donc revendiqué
en P1. G1 doit restaurer l'arbre de dépendances puis exécuter ces portes.
Risques résiduels : première date publique, temps de lecture rendu, intégration
partagée, build complet, BAT servi et toute preuve publique.
Manifeste P1 : docs/research/manifests/agence-saas-ou-freelance-p1.sha256
Périmètre du manifeste : dossier + page + OG + test + trois SVG ; gel d'entrée
et manifeste lui-même exclus.
```

## 16. Journal de reprise G1 — libellés et noms accessibles

Reprise bornée du 4 août 2026, demandée après le contrôle G1 :

- les badges « Responsabilités vérifiées » et « Relais testé » présupposaient
  des contrôles accomplis par le lecteur ; ils deviennent « Responsabilités à
  attribuer » et « Relais à tester » ;
- l'arbre d'accessibilité concaténait les fragments des titres de conversion et
  de FAQ malgré leur espacement visuel ; une espace fine U+2009 est placée au
  début du fragment emphatique, et aussi à sa fin avant le dernier fragment de
  FAQ ;
- le test ciblé recompose les chaînes depuis les propriétés source et exige
  exactement « Décrire la phase et les responsabilités encore sans nom » et
  « Comparer les responsabilités réelles avant les statuts. » ;
- aucun composant partagé, registre, verrou, gel d'entrée ou autre slug n'est
  modifié.

```text
REPRISE_P1_TERMINEE
Défauts corrigés : 2/2.
Badge de couverture : Responsabilités à attribuer.
Badge de continuité : Relais à tester.
Séparateur accessible : U+2009 dans les deux titres fragmentés.
Contrôles : Vitest ciblé 12/12 ; Prettier vert ; tsc --noEmit vert ; ESLint
ciblé page/OG/test vert ; xmllint sur les trois SVG vert ; git diff --check
vert ; manifeste P1 rejoué 7/7.
Contrôle navigateur local : route HTTP 200 ; l'arbre AX expose exactement
« Décrire la phase et les responsabilités encore sans nom » et « Comparer
les responsabilités réelles avant les statuts. » ; les deux nouveaux badges
sont visibles. Le serveur et la session navigateur ont été fermés.
Portée : page, test, dossier et manifeste P1 ; OG et trois SVG conservés dans
le snapshot, sans mutation partagée.
```

## 17. Journal détaillé P2 — vérification contradictoire

Date : **4 août 2026**

Agent distinct : **/root/agence_saas_p2**

### Gel du snapshot P1

Avant toute édition, la page, le dossier, l'image OG, le test et les trois SVG
ont été lus intégralement. Le manifeste P1 a été relu sans être modifié. Les
hashes du snapshot P1 étaient :

```text
eea917e032cba0abc15ce4478bc35865ace5810934efa37918aa9857d6a89381  docs/research/agence-saas-ou-freelance.md
a5f07239eb446723f802ec4002042c0d5e0b4dd498fc6df47e13f80a1ad81efe  src/app/guides/agence-saas-ou-freelance/page.tsx
1ed836a8f50965b475a4e589e1ace27d44855cce9bd9dbbce4f2fadfd1cbec2b  src/app/guides/agence-saas-ou-freelance/opengraph-image.tsx
42df790442bfb05676f937a4618b0bd20d41a1c4197d4aead9f11278c1bf03a7  src/app/guides/agence-saas-ou-freelance/content-quality.test.ts
d9db0adc5024d222039b958547b2c49e4d1bcaaee0f8b7dffc50c9898e696d2f  public/guides/agence-saas-ou-freelance/equipe-responsabilites-16x9.svg
afad858c4bb4eeeeaa409e8e31ac9a4d63bfc0d9a22429325016a914da095106  public/guides/agence-saas-ou-freelance/carte-responsabilites-4x3.svg
02443cf31f2a9fb84c5159987d3351950085dffa15203d70fb4ef6d91ec93275  public/guides/agence-saas-ou-freelance/relais-incident-1x1.svg
```

Le gel d'entrée `agence-saas-ou-freelance-input-freeze.md` est resté
strictement inchangé et hors manifeste.

### Sources primaires rouvertes

- Légifrance, L131-3 : version en vigueur affichée depuis le 3 juillet 1992 ;
- Légifrance, L113-9 : version en vigueur affichée depuis le 1er janvier 2020 ;
- EUR-Lex, RGPD consolidé `02016R0679-20160504`, article 28 : garanties,
  autorisation des sous-traitants ultérieurs, écrit et contenu du contrat ;
- CNIL, qualification des rôles, 6 juin 2025 : faits, décisions, moyens,
  garanties et identité de la chaîne de sous-traitance ;
- CNIL, sécurité de la sous-traitance, 14 mars 2024 : responsabilités,
  authentification, incidents, restitution/destruction, assistance et audit ;
- CNIL, maintenance et fin de vie, 14 mars 2024 : trace, accès temporaire,
  durée définie et fermeture ;
- ANSSI/MesServicesCyber, externalisation, 3 décembre 2010 : risques
  contextuels **et** contre-limite favorable à l'externalisation lorsque les
  compétences internes sont absentes ou insuffisantes ;
- GitHub Docs, rôles de dépôt : niveaux de lecture, tri, écriture, maintenance
  et administration, dans le seul périmètre GitHub Organisations.

La première URL EUR-Lex de l'article a présenté un écran anti-robot lors d'une
ouverture directe ; la version consolidée officielle indexée par EUR-Lex a
permis de recouper l'article 28. Aucune source secondaire n'a remplacé le texte
ou les organismes publics dans les affirmations visibles.

### Failles cherchées et décisions P2

- **Carte à cinq champs :** conservée mais explicitement qualifiée de méthode
  éditoriale, ni norme ni garantie. Une ligne remplie n'est pas une preuve.
- **Comparaison symétrique :** ajout des deux contre-cas « freelance avec relais
  documenté » et « agence concentrée sur une personne » ; interne, hybride et
  report restent évalués sur les mêmes cinq responsabilités.
- **Volume doublé :** ajouté comme stress-test sans seuil inventé, ni panne
  supposée, ni préférence d'équipe.
- **Tiers défaillant :** ajout de détection, contact, mode dégradé ou retour
  arrière, contrôle des données et rétablissement.
- **Qualification des tiers :** distinction visible entre simple tiers ou
  composant, sous-traitant RGPD et sous-traitant ultérieur ; aucune
  qualification n'est déduite du nom du fournisseur.
- **Coûts cachés :** sept familles visibles couvrent besoin, intégration,
  licences, migration, formation, assistance, maintenance, évolution et sortie.
  Chaque montant et temps reste `à confirmer`.
- **Fonction déjà payée :** le guide demande si un outil ou une compétence
  existants couvrent réellement le besoin avant d'ajouter une dépense.
- **ANSSI :** la contre-limite favorable au recours à un prestataire a été
  ajoutée ; l'âge 2010 et l'absence de préférence automatique restent visibles.
- **Calcul :** refait par ensemble, complément et partition inverse, avec cas
  zéro, vide, négatif, décimal, non fini, incohérent et extrême.
- **Remplissage retiré :** aucun chiffre, exemple, score, norme, outil ou
  nouvelle section autonome n'a été ajouté quand il ne changeait pas la
  décision.

### Risques résiduels après P2

- Les montants, durées, volumes, seuils, intervenants, relais, outils et tiers
  du projet réel restent inconnus.
- Les droits, rôles RGPD, obligations sectorielles, assurances et mesures de
  sécurité exigent le contrat, le produit et les données réels.
- Le guide ne prouve aucun délai de réponse, remplacement, continuité,
  conformité ou performance d'une équipe.
- La date de première publication, le temps de lecture rendu, l'intégration
  partagée et toute preuve publique restent des STOP opérationnels inchangés.
- La passe 2 ne revendique ni revue humaine, ni déploiement, ni publication,
  ni indexation.

## 18. Rapport P2 — fermeture

```text
PASSE_2_TERMINEE
Affirmations contrôlées : 29 familles contrôlables cartographiées en P2 :
recommandations sur les cinq formes, méthode des cinq champs, calcul, composition
interne, prix/délais inconnus, droits, RGPD, maintenance, externalisation,
accès de dépôt, reprise, volume, tiers et charges cachées.
Affirmations corrigées :
- la carte devient explicitement une méthode éditoriale, ni norme ni garantie ;
- une ligne remplie ne devient pas une preuve ;
- freelance avec relais et agence avec connaissance concentrée sont deux
  contre-cas symétriques ;
- la chaîne RGPD est distinguée des simples tiers et composants sans
  qualification automatique ;
- l'ANSSI 2010 est aussi citée pour sa contre-limite favorable à un prestataire
  quand les compétences internes manquent ;
- budget et temps sont comparés à phase, volume et niveau de service identiques.
Affirmations retirées : neuf généralisations sont classées A_RETIRER et absentes
du contenu public : prix/délai/effectif moyen décisif, transfert automatique des
droits, développeur toujours sous-traitant, agence toujours relayable, freelance
toujours seul, externalisation opposée à la sécurité, volume doublé égal panne,
tiers tous équivalents, coût inconnu égal zéro.
Contre-sources : Légifrance L131-3/L113-9 ; EUR-Lex RGPD article 28 ; CNIL rôles
du 6 juin 2025, sous-traitance et maintenance du 14 mars 2024 ;
ANSSI/MesServicesCyber du 3 décembre 2010 avec limite d'âge et contre-limite ;
GitHub Docs uniquement comme exemple produit.
Calculs reproduits : ensemble de 6 lignes, sous-ensemble de 4 complètes,
complément de 2 ; 6 − 4 = 2 puis partition inverse 4 + 2 = 6. Unité unique,
aucun arrondi, TVA, période, coût ou double compte.
Cas limites : zéro, champ vide, rôle non confirmé, négatif, décimal, non fini,
complet supérieur au total et très grand volume ; aucun résultat invalide n'est
ramené à zéro. Stress-tests ajoutés pour volume doublé et tiers indisponible.
Enrichissements décisifs : sept familles de charge visibles, outil ou compétence
déjà payés à vérifier, détection/décision/repli/contrôle lors des deux chocs,
identité de la chaîne de sous-traitance et comparaison symétrique des cinq formes.
Risques résiduels : prix, durées, volumes, seuils, personnes, disponibilité,
contrats, droits, rôles RGPD, tiers, exigences sectorielles, assurance et sécurité
du projet réel restent à confirmer. Date de publication, readtime, intégration,
BAT final et preuve publique restent des STOP. Aucune revue humaine revendiquée.
Tests : Vitest ciblé 14/14 ; tsc --noEmit vert ; ESLint ciblé page/OG/test vert ;
Prettier textes vert ; xmllint trois SVG vert ; git diff --check vert.
Manifeste P2 : docs/research/manifests/agence-saas-ou-freelance-p2.sha256 ;
snapshot de 7 fichiers (dossier, page, OG, test, trois SVG), gel et manifeste
lui-même exclus ; replay final 7/7 vert après génération.
```

## 19. Journal détaillé P3 — polish rédactionnel

Date : **4 août 2026**

Agent distinct : **/root/agence_saas_p3**

### Lecture à trois hauteurs

- **Dirigeant pressé :** le héros donne désormais, dès sa première phrase, le
  critère concret de choix. Il nomme freelance, agence, interne et hybride,
  puis donne les conditions de chacune et le cas de report avant la fin du
  premier bloc.
- **Lecteur méfiant :** aucune retouche n'a transformé une condition en
  promesse. Les cinq issues restent sans classement global ; la méthode des
  cinq champs, les inconnues et les limites des sources restent visibles.
- **Lecteur sur téléphone :** les titres d'action ont été raccourcis là où une
  formulation rhétorique ou procédurale retardait la réponse. Les tableaux,
  mémos et listes gardent les mêmes unités et le même ordre.

### Problèmes de lisibilité corrigés

- le héros abstrait sur la « couverture » devient une réponse concrète sur ce
  que chaque personne prend réellement en charge ;
- « Le meilleur statut » disparaît du premier H2 au profit d'un choix selon les
  responsabilités effectivement couvertes ;
- le H2 de la carte nomme directement les cinq actions et leur responsable ;
- les deux sections de scénario deviennent des « exercices » plutôt que des
  « répétitions » ;
- les titres sur le changement, l'incident et la charge client annoncent
  directement la décision attendue ;
- les occurrences de « rejouer » sont remplacées par une action observable :
  une autre personne exécute réellement une tâche à partir des accès et traces
  transmis ;
- « stress-tests » devient « situations à tester » et « mode dégradé » est
  expliqué à son premier usage par « fonctionnement limité ».

### Transitions et FAQ

La progression reste phase, responsabilités, formes, changement, incident,
charge client, reprise et décision. Les libellés de sommaire accompagnent cette
progression avec des verbes ordinaires. Les six questions de FAQ conservent
leur réponse directe dès la première phrase. La première réponse ne demande
plus de « rejouer » abstraitement une reprise : elle demande au relais prévu
d'exécuter une tâche à partir des traces disponibles.

### Faits inchangés et nuances protégées

- aucun fait, chiffre, prix, délai, effectif, seuil, source ou scénario n'a été
  ajouté ;
- le calcul reste un contrôle de complétude, ni une norme, ni une garantie ;
- une ligne remplie ne prouve ni compétence, ni disponibilité, ni résultat ;
- freelance, agence, interne, hybride et report restent cinq issues
  conditionnelles sans gagnant ;
- tous les coûts, volumes, personnes et outils du projet réel restent à
  confirmer ; l'inconnu n'est ni gratuit, ni inclus ;
- les articles L131-3 et L113-9, le RGPD et les fiches CNIL restent bornés à
  leur champ ; l'ANSSI reste explicitement datée de 2010 ;
- le volume doublé ne suppose aucune panne et le tiers indisponible ne reçoit
  aucune qualification automatique ;
- les deux scènes restent entièrement fictives et ne ressemblent à aucun
  témoignage ou résultat Hagnéré Code ;
- Hagnéré Code ne gagne pas la comparaison et ses personnes affectées restent
  propres à une proposition réelle ;
- date de première publication, date de modification, temps de lecture,
  intégration, déploiement, publication et indexation restent des STOP.

### Contrôles P3

- replay du manifeste P2 avant édition : 7/7 ;
- Vitest ciblé : 15/15 ;
- TypeScript `tsc --noEmit --pretty false` : vert ;
- ESLint ciblé page, OG et test : vert ;
- Prettier sur les textes : vert ;
- `xmllint` sur les trois SVG : vert ;
- `git diff --check` : vert.

## 20. Rapport P3 — fermeture

```text
PASSE_3_TERMINEE
Problèmes de lisibilité corrigés : héros concret dès la première phrase ; H2
d'ouverture, de carte, de changement, d'incident et de charge client plus
directs ; répétitions renommées exercices ; continuité exprimée par une tâche
réellement exécutée par le relais.
Jargon retiré ou défini : « stress-tests » retiré ; « mode dégradé » expliqué
par « fonctionnement limité » ; « rejouer » remplacé par exécuter ou tester.
Transitions : sommaire et sections suivent phase -> responsabilités -> formes ->
changement -> incident -> charge client -> reprise -> décision, sans nouvelle
section ni nouvelle liste.
FAQ : six réponses conservées ; chacune répond dès sa première phrase. La
première rend le test de reprise observable sans dupliquer la procédure du corps.
Faits laissés inchangés : sources, cinq issues, quatre phases, cinq champs,
calcul 6 − 4 = 2 puis 4 + 2 = 6, sept charges, deux scènes fictives et deux
chocs conditionnels.
Nuances protégées : méthode ni norme ni garantie ; ligne remplie non preuve ;
aucun prix, délai ou effectif universel ; coûts et inconnues à confirmer ; droits,
RGPD, CNIL et ANSSI bornés ; aucune promesse Hagnéré Code ; dates, readtime,
intégration et preuve publique restent des STOP.
Tests : Vitest ciblé 15/15 ; tsc vert ; ESLint ciblé vert ; Prettier textes vert ;
xmllint trois SVG vert ; git diff --check vert.
Manifeste P3 : docs/research/manifests/agence-saas-ou-freelance-p3.sha256 ;
snapshot exact de 7 fichiers (dossier, page, OG, test et trois SVG), gel et
manifeste lui-même exclus ; replay 7/7 à consigner après génération.
```

## 21. Journal détaillé P4 — antipasse IA

Date : **4 août 2026**

Agent distinct : **/root/agence_saas_p4**

### Snapshot et motifs matériels

Le manifeste P3 a été rejoué avant édition : les sept fichiers étaient
conformes. La page, l'image OG, le test, le dossier et le manifeste P3 ont été
relus intégralement. Les motifs suivants justifiaient une correction :

- le dernier paragraphe alignait cinq négations de même forme pour l'agence,
  le freelance, l'interne, l'hybride et le report ; la conclusion répétait le
  tableau avec une symétrie trop visible ;
- quatre libellés de section et la colonne `STOP typique` employaient une voix
  de procédure interne plutôt que celle d'un dirigeant en train de décider ;
- le titre de la deuxième section reposait sur le faux contraste avec un
  « SaaS imaginaire terminé », alors que le paragraphe explique déjà pourquoi
  seule la prochaine phase compte ;
- le sous-titre de FAQ et l'encadré sur les prix parlaient du contenu lui-même
  (« six réponses », « ce guide ne publie ») avant de nommer l'action ou la
  limite ;
- le héros reprenait une construction très régulière, forme d'équipe après
  forme d'équipe, puis la première section recommençait presque la même réponse.

Aucun superlatif, autosatisfaction, promesse, métaphore forcée, série de
questions rhétoriques, parenthèses en cascade ou témoignage déguisé n'a été
repéré.

### Corrections P4

- Le héros commence par la prochaine phase et le travail de chaque personne.
  Il conserve ensuite, sans les raccourcir, les conditions du freelance, de
  l'agence, de l'interne, de l'hybride et du report.
- `Périmètre temporel`, `Action autonome`, `Comparaison équitable` et
  `Verdict conditionnel` deviennent `Prochaine étape`, `Carte à remplir`,
  `Même grille de lecture` et `Choix à ce stade`. `STOP typique` devient
  `Quand s'arrêter`.
- Le H2 de phase devient « Choisissez l'équipe pour la prochaine phase ».
  L'équipe théorique « de bout en bout » reste dans la réponse et conserve le
  contre-cas utile.
- Le sous-titre de FAQ demande ce qui change avant de contacter un candidat.
  L'encadré annonce directement que prix, durée et effectif restent à
  confirmer.
- La conclusion tient en trois phrases. Elle conserve les cinq contre-cas :
  travail isolé sans besoin d'agence, décision/contrôle/continuité qui ne
  doivent pas reposer sur le seul freelance, capacité interne réelle,
  frontières et relais hybrides écrits, puis report si le problème reste
  indécidable.
- Deux formulations administratives proches ont été humanisées sans retirer
  leur limite : la `route` privée devient la `page` privée, et la phrase RGPD
  dit qu'aucun prestataire du produit n'est qualifié ici.

### Passages volontairement conservés

- Les tableaux parallèles restent en place : leur répétition rend comparables
  les quatre phases, cinq responsabilités, cinq formes et sept charges. Elle
  n'est pas une série de puces décorative.
- Les limites juridiques et de sécurité conservent leurs répétitions
  (`ne prouve ni`, champ du texte, qualification selon les faits). Les lisser
  aurait supprimé des bornes L131-3, L113-9, RGPD, CNIL ou ANSSI.
- La formule, son contrôle inverse et l'avertissement « méthode éditoriale, ni
  norme ni garantie » restent mot pour mot : ils empêchent de transformer la
  carte en score ou en preuve.
- Les deux scènes gardent leur étiquette fictive avant le récit et leur
  chronologie observable. Les raccourcir aurait rendu implicites la décision,
  le contrôle ou la tâche réellement exécutée par le relais.
- Le cas Hagnéré Code reste précis et inconfortable à dessein : la composition
  publique ne prouve pas l'affectation d'une mission, et une mission isolée
  peut mal convenir à l'agence.
- Les STOP de date, temps de lecture, intégration, déploiement, publication et
  indexation restent visibles. La passe 4 n'en ferme aucun.

### Contrôle des H2 isolés

| H2                                                                                    | Réponse donnée dans la section                                                | Conséquence ou action                                                              |
| ------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Choisissez selon les responsabilités réellement couvertes                             | Conditions du freelance, de l'agence, de l'interne, de l'hybride et du report | Refuser un choix fondé sur le seul statut et compléter la phrase de responsabilité |
| Choisissez l'équipe pour la prochaine phase                                           | Quatre phases, résultat attendu et motif d'arrêt                              | Nommer un seul résultat avant d'acheter une équipe                                 |
| Pour chaque travail critique, nommez qui décide, réalise, contrôle, relaie et remet   | Cinq champs, preuve minimale et calcul de complétude                          | Remplir la carte, traiter ou reporter toute ligne incomplète                       |
| Comparez freelance, agence, interne, hybride et report sur les mêmes responsabilités  | Conditions, charge client et mauvais signal pour chaque issue                 | Réécrire les mêmes lignes et vérifier les personnes de la mission                  |
| Vérifiez qui décide lorsqu'une demande change                                         | Scène fictive, décision client, effets, contrôle et transmission              | Faire exécuter un cas au relais à partir des traces remises                        |
| Vérifiez la reprise d'un incident si la personne qui a conçu le mécanisme est absente | Qualification, décision, accès borné, contrôle et consignation                | Tester le relais et nommer ce qui reste à surveiller                               |
| Comparez le travail restant côté client avant les tarifs                              | Sept familles de charge sans montant inventé                                  | Garder chaque poste à confirmer sur la même phase et le même service               |
| Préparez ce qu'une autre équipe devra réellement récupérer                            | Code, comptes, données, décisions, exploitation, droits et rôles RGPD         | Faire qualifier le contrat et exécuter une reprise délimitée                       |
| Choisissez une forme pour cette phase — ou reportez-la                                | Cinq décisions conditionnelles et leurs actions suivantes                     | Confirmer la forme retenue ou nommer l'événement qui rouvrira la décision          |

### Cohérence et faits inchangés

Le héros, le corps, le tableau de décision, la FAQ et le CTA restent alignés :
aucune forme ne gagne globalement, Hagnéré Code n'est pas une conclusion
automatique et le CTA sert à décrire une phase, y compris pour la limiter ou la
reporter. Le test verrouille désormais les cinq causes de la conclusion, au
lieu de dépendre d'une seule phrase négative.

Aucun chiffre, source, calcul, prix, délai, effectif, seuil, fait interne ou
scénario n'a été ajouté. Le sens des articles L131-3 et L113-9, de l'article 28
du RGPD, des fiches CNIL, du guide ANSSI daté de 2010 et de l'exemple GitHub
reste inchangé. Les chocs de volume et de tiers restent conditionnels. Les
coûts et personnes inconnus restent à confirmer.

Les deux exemples ont été relus comme scènes inventées : aucun nom
d'entreprise, interlocuteur réel, prix, délai, résultat ou détail singulier ne
les fait ressembler à une expérience client. Leur étiquette fictive précède
toujours le récit.

Contradictions finales cherchées : aucun gagnant implicite dans le héros ou le
verdict ; aucune promesse de continuité, de conformité ou de disponibilité ;
aucune moyenne de marché ; aucune confusion entre simple tiers, sous-traitant
RGPD et sous-traitant ultérieur ; aucune date ou preuve publique inventée.

## 22. Rapport P4 — fermeture

```text
PASSE_4_TERMINEE
Motifs repérés : conclusion artificiellement symétrique ; libellés
administratifs ; faux contraste dans le H2 de phase ; sous-titre FAQ et encadré
prix autoréférentiels ; héros trop régulièrement construit et proche de la
réponse suivante.
Corrections : conclusion en trois phrases causales ; libellés orientés lecteur ;
H2 raccourci ; FAQ et limite marché réorientées vers la décision ; héros plus
direct sans retrait de condition ; deux formulations administratives adjacentes
humanisées.
Passages conservés et raison : tableaux et listes comparatives nécessaires à la
méthode ; limites juridiques répétées pour leur portée ; formule et avertissement
inchangés ; scènes fictives détaillées ; transparence Hagnéré Code ; tous les
STOP opérationnels.
Faits inchangés : quatre phases, cinq champs, cinq issues sans gagnant, sept
charges, calcul 6 − 4 = 2 puis 4 + 2 = 6, sources et bornes juridiques, deux
chocs conditionnels, inconnues à confirmer et aucun prix/délai/effectif
universel.
Exemples contrôlés : changement de rôle et incident de connexion toujours
entièrement fictifs, étiquetés avant le récit, sans client ni résultat réel.
Contradictions finales : aucune entre héros, corps, verdict, FAQ et CTA ; aucune
promesse, aucun superlatif, aucun témoignage déguisé et aucune forme gagnante.
Tests : Vitest ciblé 15/15 ; tsc vert ; ESLint ciblé vert ; Prettier textes vert ;
xmllint trois SVG vert ; git diff --check vert.
Manifeste P4 : docs/research/manifests/agence-saas-ou-freelance-p4.sha256 ;
snapshot exact de 7 fichiers (dossier, page, OG, test et trois SVG), gel et
manifestes eux-mêmes exclus ; replay final 7/7 vert.
```

## 23. Reprise P4 demandée par G4 — césure du titre

Le contrôle rendu à 1 440 px a montré que les deux-points du titre principal
passaient seuls à la ligne, entre « freelance » et l'emphase. Le test rendu
borné a confirmé qu'une espace insécable garde « freelance : » sur la même
ligne à cette largeur, sans dégrader le titre déjà propre à 320 px.

La seule retouche de contenu est l'échappement source explicite `\u00a0` entre
« freelance » et les deux-points dans `heroTitle`. Le test ciblé exige cette
chaîne exacte et refuse désormais la variante avec espace simple. Aucun autre
libellé, fait, exemple, source, composant partagé ou STOP n'est modifié.

```text
REPRISE_P4_TERMINEE
Défaut corrigé : deux-points isolés à la ligne dans le H1 rendu à 1 440 px.
Correction : heroTitle avec espace insécable explicite \u00a0 avant les
deux-points.
Test ajouté : présence de la chaîne insécable et absence de la variante à
espace simple.
Contrôles : Vitest ciblé 15/15 ; tsc vert ; ESLint ciblé vert ; Prettier textes
vert ; xmllint trois SVG vert ; git diff --check vert.
Manifeste P4 : sept fichiers autorisés, replay 7/7 vert.
Portée : page, test, dossier et manifeste P4 ; OG et trois SVG conservés.
```

## 24. Reprise P4 bis — interprétation JSX de l'espace insécable

Le rendu G4 à 1 440 px a invalidé la première syntaxe : dans un attribut JSX
entre guillemets, la séquence `\u00a0` a été servie comme du texte littéral au
lieu de devenir une espace insécable. Le titre affichait donc
`freelance\u00a0:`.

La chaîne est désormais une expression JavaScript exacte :
`heroTitle={"Agence SaaS ou freelance\u00a0:"}`. Dans cette expression,
l'échappement Unicode est interprété avant le rendu. Le test exige cette forme
et refuse les deux variantes fautives : attribut JSX entre guillemets avec la
séquence littérale, ou attribut avec une espace simple avant les deux-points.
Aucun autre texte, fait, exemple, source ou STOP n'est modifié.

```text
REPRISE_P4_BIS_TERMINEE
Constat rendu : \u00a0 restait littéral dans l'attribut JSX entre guillemets.
Correction : heroTitle devient une expression JavaScript contenant
« Agence SaaS ou freelance\u00a0: ».
Tests source : expression exacte exigée ; forme JSX littérale et espace simple
refusées.
Contrôles : Vitest ciblé 15/15 ; tsc vert ; ESLint ciblé vert ; Prettier textes
vert ; xmllint trois SVG vert ; git diff --check vert.
Manifeste P4 : sept fichiers autorisés, replay 7/7 vert.
Portée : page, test, dossier et manifeste P4 ; OG et trois SVG conservés.
```

## 25. Reprise qualité Q1 — premier écran du sommaire mobile

Le contrôle transversal Q1 a isolé un défaut P2 sur une session navigateur
neuve à 320 et 360 px. Le libellé « De la prochaine phase à une reprise
vérifiable » occupait le début du scroller horizontal ; la première pastille
« 01. Réponse » commençait vers x ≈ 382 et restait hors du premier écran.

Le libellé devient simplement `Sommaire`. La preuve attendue après
reconstruction est que la première pastille soit visible dès le chargement
d'une session neuve à 320 et 360 px, sans défilement horizontal préalable. Le
test exige la valeur courte et refuse l'ancienne phrase. Aucun autre texte,
fait, composant, CTA, source ou STOP n'est modifié. Les manifestes P1 à P4
restent des snapshots historiques ; cette reprise utilise un nouveau manifeste
`quality-1`.

```text
REPRISE_QUALITE_Q1_TERMINEE
Défaut corrigé : libellé du sommaire trop long dans le premier viewport du
scroller à 320 et 360 px.
Correction : tocLabel="Sommaire".
Test ajouté : valeur courte exigée et ancienne phrase refusée.
Preuve rendue attendue : première pastille « 01. Réponse » visible dès le
chargement d'une session neuve à 320 et 360 px.
Contrôles : Vitest ciblé 15/15 ; tsc vert ; ESLint ciblé vert ; Prettier textes
vert ; xmllint trois SVG vert ; git diff --check vert.
Manifeste qualité :
docs/research/manifests/agence-saas-ou-freelance-quality-1.sha256 ; sept fichiers
finaux autorisés, replay 7/7 vert ; manifeste lui-même exclu.
Portée : page, test, dossier et nouveau manifeste quality-1 ; OG et trois SVG
conservés ; manifestes P1-P4 non modifiés.
```

## 26. Intégration centrale — snapshot privé

L'intégration centrale a commencé le 4 août 2026 à 14:40:46 +02:00, après
acquisition atomique du mutex partagé. La branche part de
`3069ca828eae40fceacb100f4a43feca8a2e0699`, dont le parent public suivi au
moment de l'intégration est `origin/main` au SHA
`577a9ff9632cceba51e1a0c46cda3dbb3f7830c0`.

La page utilise désormais le registre central et ses constructeurs communs de
métadonnées et de données structurées. Le registre porte le titre, la
description, les trois illustrations, `readTimeMin: 13`, le statut
`ready-for-human-review` et les deux dates suivantes :

- `datePublished: 2026-07-22T11:05:08+02:00` vient du commit historique
  `2219dcaf03dc4b5c6044ca8bd15a1f158c8fe48d` qui a ajouté la première version
  de la route. Cette trace Git ne prouve pas à elle seule une première mise en
  ligne publique : la date reste un **STOP opérationnel avant toute future
  publication réelle** et devra être rapprochée du snapshot effectivement
  déployé ;
- `dateModified: 2026-08-04T14:40:46+02:00` borne le snapshot intégré et devra
  correspondre à la date d'auteur du commit final ;
- la mesure rendue Q2 du texte de lecture, inchangé pendant l'intégration,
  comptait 2 533 mots et conduit à 13 minutes. Le HTML intégré affiche
  `13 min` depuis le registre.

La route reste volontairement privée : `robots` vaut `noindex, nofollow`, le
badge `Brouillon privé` est visible et le guide n'apparaît ni sur le hub, ni
dans `sitemap.xml`, ni dans `llms.txt`. Cette absence est un état éditorial,
pas une publication. Le HTML servi porte bien la canonique et les dates du
registre, mais aucun déploiement, aucune publication et aucune indexation ne
sont revendiqués.

Les mutations partagées sont bornées aux opérations nécessaires :

- ajout du guide et de son icône au registre et au hub ;
- retrait de son slug de la liste des redirections historiques ;
- ajout d'un lien entrant depuis `mvp-saas-quoi-inclure`, avec mise à jour de
  son test et de son dossier ;
- mise à jour des tests de registre et de redirections ;
- aucune modification des composants de mise en page, du pied de page, du CTA
  mobile ou d'un autre guide au-delà de ce lien entrant.

### Preuves locales du snapshot intégré avant contre-audit

- batterie complète : 115 fichiers et 1 175 tests sur 1 175, verts ;
- build de production : TypeScript vert, 188 tests SEO sur 188, 76 pages
  statiques sur 76 et contrôle post-build vert ;
- route servie : HTTP 200, canonique exacte, `noindex, nofollow`, un H1, un
  `main`, aucun lien vide, CTA du guide vers `/demarrer-un-projet` ;
- visibilité privée : zéro occurrence du slug sur le hub, le sitemap et
  `llms.txt`, deux occurrences du lien entrant sur la page MVP servie ;
- responsive réel : 320, 360, 390, 430, 640, 768, 1 024, 1 280, 1 440 et
  1 920 px sans débordement global, H1 contenu et première pastille du sommaire
  visible dès 320 et 360 px ;
- accessibilité : zéro violation axe aux couples 320/1 440 px et
  clair/sombre ; premier `Tab` sur « Aller au contenu principal », puis
  activation vers `#main-content` ; aucune surcouche d'erreur ;
- médias : les trois SVG répondent HTTP 200 et chargent avec leurs dimensions
  intrinsèques après défilement ;
- impression : PDF local lisible de 27 pages au format Letter.

Deux P2 partagés, non bloquants pour ce brouillon privé, restent explicitement
ouverts : l'impression conserve la navigation, le badge privé et les blocs
commerciaux globaux ; certains noms accessibles du formulaire de contact
global concatènent encore le libellé et son complément. Ils ne sont pas
masqués par une retouche propre au slug et devront être traités sous une future
fenêtre partagée avec replay transversal.

Le manifeste d'intégration
`docs/research/manifests/agence-saas-ou-freelance-integration.sha256` fige les
21 fichiers modifiés ou créés par le lot, manifeste lui-même exclu. Les
manifestes P1 à P4 et `quality-1` restent des snapshots historiques de leurs
passes respectives.

```text
INTEGRATION_CENTRALE_PRE_Q_VERTE
État lecteur : brouillon privé, noindex/nofollow, absent du hub, du sitemap et
de llms.txt.
Registre : métadonnées, JSON-LD, dates, trois images et lecture centralisés.
Maillage : lien entrant depuis le guide MVP ; redirection historique retirée.
Tests : 1175/1175 ; prébuild SEO 188/188 ; build 76/76 ; postbuild vert.
BAT : dix largeurs, axe clair/sombre, clavier, médias et PDF contrôlés.
P2 partagés : impression globale et deux noms accessibles du contact, bornés.
Frontière : aucun déploiement, aucune publication, aucune indexation revendiqués.
Prochaine porte : replay du manifeste puis contre-audit indépendant exact.
```
