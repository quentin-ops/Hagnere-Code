# Dossier de recherche — Leads Google Ads non qualifiés

> Ce dossier prépare uniquement la passe 1 du deuxième guide du lot de dix
> lancé le 22 juillet 2026. Il part d’une situation précise : des appels ou
> formulaires arrivent déjà, mais ils ne correspondent pas à ce que
> l’entreprise peut réellement vendre.

Statut actuel : **P4 validée localement — publication retenue jusqu’au gel du lot**.

## Journal des quatre passes

Propriétaire éditorial unique : **agent racine Codex**.

| Passe                        | État                     | Date       | Responsable                                         | Snapshot                                           | Blocages   |
| ---------------------------- | ------------------------ | ---------- | --------------------------------------------------- | -------------------------------------------------- | ---------- |
| 1. Recherche                 | Terminée — porte validée | 2026-07-22 | Agent recherche P1 sous propriété de l’agent racine | manifests/leads-google-ads-non-qualifies-p1.sha256 | Aucun      |
| 2. Rédaction et intégration  | Terminée — porte validée | 2026-07-22 | Agent racine Codex                                  | manifests/leads-google-ads-non-qualifies-p2.sha256 | Aucun      |
| 3. Contre-audit indépendant  | Terminée — 20/20         | 2026-07-22 | Agent distinct de la rédaction                      | manifests/leads-google-ads-non-qualifies-p3.sha256 | Aucun      |
| 4. Plume humaine et contrôle | Terminée localement      | 2026-07-22 | Agent racine Codex                                  | manifests/leads-google-ads-non-qualifies-p4.sha256 | Gel du lot |

Le snapshot P1 reste l’état de recherche immuable. La route, le registre,
l’image sociale et le maillage ont été intégrés en P2 avec le statut
`ready-for-human-review`, donc sans publication dans le hub ni indexation.

### Manifeste du snapshot

| Fichier contrôlé                                | SHA-256                                        | Passe | Remarque                                       |
| ----------------------------------------------- | ---------------------------------------------- | ----- | ---------------------------------------------- |
| docs/research/leads-google-ads-non-qualifies.md | Voir le manifeste frère, sans recopier le hash | P1    | Dossier documentaire, seul fichier du snapshot |

Le manifeste frère ne contient que l’empreinte finale du présent dossier afin
d’éviter une référence autoréférentielle impossible à stabiliser.

## 1. Fiche d’identité

| Champ                                | Décision documentaire                                                                                                                                                                                              |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Slug                                 | leads-google-ads-non-qualifies                                                                                                                                                                                     |
| Statut actuel                        | Route P2 accessible en `noindex, nofollow` ; publication suspendue jusqu’au gel P4                                                                                                                                 |
| Requête principale qualitative       | leads Google Ads non qualifiés                                                                                                                                                                                     |
| Variantes qualitatives               | mauvais leads Google Ads ; contacts Google Ads hors cible ; améliorer qualité prospects Google Ads ; formulaires Google Ads non qualifiés                                                                          |
| Moment du parcours                   | Comprendre puis décider quoi corriger avant de dépenser davantage                                                                                                                                                  |
| Lecteur précis                       | Dirigeant, artisan ou indépendant qui paie déjà Google Ads, reçoit des appels ou formulaires et constate qu’une part notable ne correspond pas à son offre                                                         |
| Situation déclenchante               | Les conversions semblent exister dans Google Ads, mais les demandes concernent une autre zone, un autre type de client, un service non vendu, un budget incompatible ou restent impossibles à qualifier            |
| Décision principale après lecture    | Conserver le dispositif, corriger une cause précise, améliorer le traitement commercial, réduire le périmètre, attendre que la cohorte mûrisse ou suspendre la campagne                                            |
| Niveau de connaissance au départ     | Le lecteur connaît ses clients et les demandes reçues, mais ne maîtrise pas nécessairement la différence entre mot-clé, terme recherché, conversion suivie et contact qualifié                                     |
| Action utile sans contact commercial | Classer tous les contacts uniques d’une période fermée avec un motif principal, puis choisir une seule correction réversible                                                                                       |
| CTA possible                         | Faire diagnostiquer mes contacts Google Ads                                                                                                                                                                        |
| Bon fit Hagnéré Code                 | Des demandes existent, l’offre et la zone peuvent être décrites, les dossiers sont accessibles sans transmettre de données personnelles inutiles et l’entreprise veut isoler une cause avant de modifier le budget |
| Mauvais fit                          | Aucune demande reçue, incident de facturation ou de sécurité, compte suspendu, offre encore indéfinie, attente d’un volume ou d’une rentabilité garantis                                                           |
| Hors périmètre                       | Absence complète de conversions, implémentation détaillée du suivi, audit intégral du compte, calcul complet du budget, conseil juridique individualisé et promesse de qualité ou de rentabilité                   |
| Date et mode de recherche            | 22 juillet 2026 ; SERP en langue française observée qualitativement et sources primaires Google Ads, CNIL et Union européenne ; aucun volume Keyword Planner ou Search Console disponible                          |
| Responsable de la synthèse           | Agent recherche P1 sous responsabilité éditoriale de l’agent racine                                                                                                                                                |

### Cinq questions indispensables

1. Qu’appelle-t-on exactement un contact qualifié pour cette entreprise ?
2. Les mauvaises demandes viennent-elles des recherches, de la zone, de ce que
   l’annonce fait comprendre, de la page, du formulaire, des appels ou du
   traitement commercial ?
3. Comment classer un contact en attente, un doublon, un spam et un vrai
   contact hors cible sans fausser les chiffres ?
4. Quelle correction tester en premier sans tout modifier simultanément ?
5. Quand faut-il maintenir, réduire, suspendre ou déplacer le budget ?

### Objections ou craintes à traiter

- « Google m’envoie n’importe qui, donc la plateforme ne fonctionne pas. »
- « Si j’ajoute des questions ou des mots-clés à exclure, je vais supprimer
  toutes les demandes. »
- « L’agence me montre des conversions, mais personne ne sait combien sont
  devenues de vraies opportunités. »

### Score de lancement

La note interne du lot est conservée. Elle priorise le sujet ; elle ne prédit
ni volume de recherche, ni classement, ni nombre de prospects.

| Critère                          |       Note | Justification                                                                                                                                                       |
| -------------------------------- | ---------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Adéquation avec une offre vendue |      25/25 | Problème directement relié à l’audit et à la gestion de campagnes Google Ads                                                                                        |
| Proximité d’une demande de devis |      23/25 | Le lecteur dépense déjà et cherche une correction, mais peut légitimement agir seul                                                                                 |
| Preuve qualitative de demande    |      11/15 | Les formulations sont visibles dans une SERP en langue française et la documentation Google traite la qualité des prospects ; aucun volume propriétaire n’est connu |
| Preuve ou outil original         |      13/15 | Registre de cohorte, taxonomie des refus et chemin requête-vers-vente entièrement recalculable                                                                      |
| Différenciation                  |       9/10 | Frontière nette avec absence de conversion, suivi, audit global, landing page et budget                                                                             |
| Maillage et CTA utile            |       9/10 | Plusieurs liens contextuels naturels et une sortie autonome avant le CTA                                                                                            |
| **Total**                        | **90/100** | Note éditoriale interne confirmée, sans promesse SEO ou commerciale                                                                                                 |

## 1 bis. Contrat de langage humain

- **Phrase exacte que le lecteur pourrait dire au téléphone :** « Je reçois
  des formulaires et des appels grâce à Google Ads, mais ce sont souvent des
  particuliers alors que je travaille avec des entreprises, des gens hors de
  ma zone ou des demandes pour un service que je ne propose pas. Qu’est-ce que
  je dois corriger sans couper toute la campagne ? »
- **Réponse qu’il attend en une phrase :** « Prenez tous les contacts d’une
  même période, classez chacun avec un motif principal, remontez du refus vers
  la recherche, la zone, l’annonce, la page ou le traitement commercial, puis
  corrigez une seule cause avant de toucher au budget. »
- **Terme central expliqué sans jargon :** un contact qualifié est une
  personne ou une entreprise que l’équipe peut réellement servir et pour
  laquelle une prochaine étape commerciale a du sens selon des critères écrits.
- **Mots ordinaires employés par le lecteur :** mauvais contact, hors zone,
  particulier, entreprise, appel, formulaire, mauvais service, budget,
  demande sérieuse, devis, vente, rappel, doublon.
- **Mots d’agence ou de consultant à éviter ou traduire :** lead scoring, MQL,
  SQL, funnel, pipeline, smart bidding, offline conversion, attribution,
  matching, nurturing, intent signal.
- **Projet des 150 premiers mots :** montrer d’abord les demandes concrètes
  qui agacent le dirigeant, préciser que ce guide ne traite pas d’une campagne
  sans aucun contact, expliquer le décalage entre recherche et offre, puis
  annoncer le classement de la période et la première correction.
- **Ce que le lecteur saura décider après ces 150 mots :** il saura qu’il doit
  d’abord qualifier une cohorte complète et qu’augmenter le budget ou tout
  refaire ne constitue pas le premier geste.
- **H2 relus isolément :** oui au stade du plan ; à revalider sur la page P2.
- **Comparaison comprise à 390 px sans colonne masquée :** format de cartes
  prévu ; contrôle réel en attente de P4.
- **FAQ dont la première phrase répond :** oui dans le contrat ; rédaction et
  contrôle en attente.
- **CTA formulé comme résultat pour le prospect :** « Faire diagnostiquer mes
  contacts Google Ads ».

### Projet d’ouverture

> Vous payez Google Ads et des demandes arrivent. Le problème, c’est qu’elles
> viennent de particuliers alors que vous travaillez avec des entreprises, de
> personnes situées hors de votre zone, ou de prospects qui cherchent un
> service que vous ne proposez pas.
>
> Ces contacts ne prouvent pas forcément que Google Ads est un mauvais canal.
> Ils montrent qu’un décalage existe quelque part entre ce que la personne
> cherche, ce que l’annonce lui fait comprendre, ce que la page lui présente et
> ce que votre entreprise peut réellement vendre.
>
> Ce guide part donc de toutes les demandes reçues pendant une même période,
> pas uniquement des trois pires appels. Vous allez les classer, remonter à la
> cause la plus probable, puis choisir une seule correction à tester avant
> d’augmenter ou de couper le budget.

### Test sujet, action, résultat préparé pour P4

| Formulation abstraite à bannir | Qui agit ?                                       | Action concrète                                                             | Résultat pour le lecteur                                    | Formulation humaine prévue                                                                                      |
| ------------------------------ | ------------------------------------------------ | --------------------------------------------------------------------------- | ----------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| Optimiser la qualité du trafic | Le dirigeant ou la personne qui gère la campagne | Relie chaque refus au terme recherché, à la zone et au message vu           | Une cause documentée remplace une impression générale       | « Pour chaque demande refusée, notez ce que la personne cherchait et ce qu’elle avait compris de votre offre. » |
| Aligner le funnel              | L’entreprise                                     | Compare recherche, annonce, page, formulaire, qualification et vente        | Le point de rupture devient visible                         | « Suivez une demande depuis les mots tapés sur Google jusqu’au devis ou au refus. »                             |
| Faire remonter le signal CRM   | La personne qui tient le suivi commercial        | Enregistre une définition stable et le résultat réel de chaque dossier      | Google ne reçoit pas un mélange de formulaires et de ventes | « Ne renvoyez un statut à Google qu’après avoir écrit ce que qualifié veut dire pour votre entreprise. »        |
| Réduire la friction            | L’entreprise                                     | Retire une question inutile ou clarifie une question qui oriente le dossier | Le formulaire demande seulement ce qui sert à répondre      | « Gardez une question uniquement si sa réponse change ce que vous faites ensuite. »                             |
| Qualifier la demande           | La personne qui rappelle                         | Vérifie type de client, besoin, zone, conditions et calendrier              | Le contact obtient un statut justifiable                    | « Écrivez pourquoi ce dossier peut avancer, doit être refusé ou reste encore en attente. »                      |

### Test de l’ouverture

- [x] la situation vécue est planifiée avant la méthode de l’agence ;
- [x] le mot anglais lead n’est pas nécessaire dans la première réponse ;
- [x] aucun lexique de masse ne retarde la décision ;
- [x] aucune métaphore ne devient un système à apprendre ;
- [x] la réponse reste honnête sans entasser les réserves avant l’explication ;
- [x] le texte public a été relu après intégration ;
- [ ] le rendu mobile réel a été observé.

## 2. Cannibalisation

| Page existante                           | Intention de cette page                                                                                     | Différence du nouveau guide                                                                                                | Lien ou arbitrage nécessaire                                                                                          |
| ---------------------------------------- | ----------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| pourquoi-google-ads-ne-convertit-pas     | Diagnostiquer une campagne qui dépense mais ne produit pas de résultat exploitable, de la mesure à la vente | Le nouveau guide exige que des contacts soient effectivement reçus et traite leur inadéquation documentée                  | Lien entrant depuis la branche « des contacts arrivent, mais ils sont hors cible » ; ne pas reprendre l’arbre complet |
| suivi-conversions-google-ads             | Définir, tester et relier les événements reçus, uniques, qualifiés, devisés et vendus                       | Le nouveau guide utilise ces statuts pour comprendre les refus, sans expliquer toute l’implémentation du suivi             | Lien sortant si les statuts ne sont pas fiables ; aucun tutoriel technique dupliqué                                   |
| audit-google-ads-que-verifier            | Examiner l’ensemble d’un compte avant reprise ou hausse de budget                                           | Le nouveau guide suit un symptôme unique, le contact reçu mais inutilisable                                                | Lien sortant lorsque plusieurs familles de défauts sont simultanées ; aucune checklist 360°                           |
| budget-google-ads-pme                    | Construire un budget test à partir de l’économie de l’entreprise                                            | Le nouveau guide ne fixe pas un budget ; il décide si la qualité observée autorise seulement à le maintenir ou à le revoir | Lien après le diagnostic, jamais avant                                                                                |
| landing-page-google-ads                  | Concevoir une page cohérente avec une campagne déjà choisie                                                 | Le nouveau guide examine la page uniquement si une demande reçue révèle une promesse ou une qualification ambiguë          | Lien contextuel ; ne pas reproduire le wireframe ou l’audit complet de page                                           |
| prix-gestion-google-ads                  | Comprendre honoraires, média et coûts annexes                                                               | Le nouveau guide traite les motifs de refus et non le prix d’une prestation                                                | Lien uniquement si le lecteur décide ensuite d’externaliser                                                           |
| calculer-cout-par-lead-google-ads, futur | Relier coût, qualification, vente et marge dans un modèle économique complet                                | Le nouveau guide conserve uniquement les définitions financières nécessaires au diagnostic                                 | Ajouter le lien uniquement après publication ; ne pas préempter son modèle complet                                    |

**Justification d’une URL distincte :** aucune page actuelle ne part d’une
cohorte de contacts effectivement reçus pour distinguer hors cible, doublon,
contact encore en attente, problème de zone, promesse mal comprise et défaut de
traitement avant de choisir une seule correction.

### Frontière non négociable

- **Situation A — aucune conversion ou aucun contact :** hors sujet ici.
- **Situation B — contacts reçus, mais inadéquats :** sujet exact de cette URL.
- **Situation C — contacts adaptés, mais aucune vente :** le guide peut
  signaler l’étape commerciale, sans la transformer en guide complet de vente.

## 3. Demande et vocabulaire du lecteur

### Observation qualitative

Requêtes observées le 22 juillet 2026 depuis une recherche web en français :

- leads Google Ads non qualifiés ;
- pourquoi mes leads Google Ads ne sont pas qualifiés ;
- améliorer qualité prospects Google Ads ;
- contacts hors cible Google Ads.

La SERP fait apparaître :

- une documentation Google consacrée aux prospects de bonne qualité et au
  passage du contact à la vente ;
- des articles d’agences ou de consultants concentrés sur les mots-clés à
  exclure, les formulaires, les enchères et les conversions hors ligne ;
- des contenus voisins qui confondent parfois absence de contact, mauvais
  contact et contact qui ne signe pas ;
- des exemples commerciaux ou taux non vérifiables qui ne doivent pas être
  repris comme preuve.

Cette observation confirme un vocabulaire et un besoin qualitatif. Elle ne
prouve aucun volume, aucune position durable et aucune performance moyenne.
Les pages commerciales observées ne servent pas de sources factuelles.

### Questions et formulations ordinaires

- Pourquoi Google Ads m’envoie-t-il des particuliers alors que je fais du B2B ?
- Pourquoi les demandes viennent-elles de villes où je n’interviens pas ?
- Pourquoi les gens demandent-ils un service absent de mon offre ?
- Dois-je mettre tous mes mots-clés en exact ?
- Dois-je ajouter davantage de questions au formulaire ?
- Est-ce que les appels manqués sont comptés comme des prospects ?
- Comment savoir si le problème vient de Google, de la page ou de mon équipe ?
- Puis-je couper les mauvaises recherches sans perdre les bonnes ?
- Est-ce que je dois renvoyer les ventes ou les contacts qualifiés dans Google ?

### Vocabulaire à privilégier

demande reçue, contact unique, en attente, hors zone, service non proposé,
client servi, mots tapés dans Google, annonce vue, page ouverte, question du
formulaire, appel décroché, motif du refus, devis, vente.

### Vocabulaire à définir avant emploi

lead, mot-clé, terme de recherche, correspondance exacte, conversion, CRM,
contact qualifié, conversion hors ligne, enchères.

## 4. Carte concurrentielle

Cette carte décrit la réponse visible dans la SERP ; les faits du guide restent
adossés exclusivement aux sources primaires de la section suivante.

| Page ou famille de pages                                                  | Réponse et angle                                                                       | Preuves ou artefacts                                          | Bon point                                                  | Manque décisionnel                                                                         | Conflit d’intérêt éventuel              |
| ------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | ------------------------------------------------------------- | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------ | --------------------------------------- |
| Google Ads — Bonnes pratiques pour générer des prospects de bonne qualité | Cartographier le parcours jusqu’à la vente, choisir un objectif et améliorer la mesure | Documentation produit et recommandations Google               | Distingue prospect, prospect qualifié et prospect converti | Ne fournit pas au petit dirigeant un registre simple pour expliquer chaque refus déjà reçu | Google vend et opère la plateforme      |
| Articles français orientés « avant le clic »                              | Resserrer offre, requêtes, négatifs et ciblage                                         | Checklists variables, rarement une cohorte complète publiable | Rappellent que le message peut sélectionner les demandes   | Tendent à supposer la cause avant de relier les demandes au CRM                            | Vente de conseil ou gestion de campagne |
| Articles orientés formulaires                                             | Ajouter, enlever ou qualifier des champs                                               | Exemples de formulaires                                       | Rendent la qualification concrète                          | Peu distinguent donnée nécessaire, friction et minimisation                                | Vente d’outils ou de prestations        |
| Articles orientés conversions hors ligne                                  | Renvoyer à Google les contacts qualifiés ou les ventes                                 | Schémas CRM et automatisations                                | Relient publicité et résultat métier                       | Peu expliquent comment écrire une définition fiable avant l’automatisation                 | Vente d’intégration ou de gestion       |
| Contenus sur les leads qui ne « convertissent » pas                       | Examiner ciblage, page, prix et vente                                                  | Arbres ou listes générales                                    | Montrent que Google Ads n’est pas l’unique cause           | Mélangent souvent aucun contact, mauvais contact et absence de signature                   | Vente d’audit                           |

**Angle mort commun :** repartir de tous les contacts uniques d’une période,
conserver les dossiers non mûrs en attente, attribuer un motif principal,
remonter vers la preuve disponible et tester une seule correction.

**Valeur originale :** un trajet lisible « mots recherchés → zone → message →
formulaire ou appel → qualification → devis → vente », accompagné d’un
registre copiable, d’une cohorte fictive recalculable et d’un droit explicite à
ne rien changer tant que la cause n’est pas prouvée.

## 5. Fiche de preuves

Toutes les sources ont été consultées le **22 juillet 2026**. Lorsqu’aucune
date de mise à jour n’est affichée par Google, le dossier le dit au lieu
d’inventer une fraîcheur.

| Affirmation utilisable                                                                                                                                                 | Source primaire, URL et passage utile                                                                                                                                                                                                    | Nature                                                       | Périmètre                                                                                                             | Date/consultation                                          | Confiance                                                  | Emplacement du lien visible                                  | Conséquence lecteur                                                                       | Fraîcheur                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ------------------------------------------------------------ | ----------------------------------------------------------------------------------------- | -------------------------- |
| Google recommande de cartographier le trajet entre première interaction, prospect qualifié, prospect converti et vente avant de choisir l’objectif de conversion       | [Google Ads — Bonnes pratiques pour générer des prospects de bonne qualité](https://support.google.com/google-ads/answer/13489421?hl=fr), section « Cartographiez le parcours complet du prospect à la vente »                           | Recommandation officielle du fournisseur                     | Produit Google Ads ; les seuils techniques indiqués par Google ne deviennent pas des normes commerciales universelles | Consultation 2026-07-22 ; date de mise à jour non affichée | Élevée pour le fonctionnement déclaré                      | Près du schéma requête-vers-vente                            | Ne pas piloter sur tous les formulaires si l’entreprise cherche des dossiers qualifiés    | À revérifier en P3         |
| Un terme de recherche correspond aux mots saisis par l’utilisateur ; un mot-clé est ajouté par l’annonceur                                                             | [Google Ads — Rapport sur les termes de recherche](https://support.google.com/google-ads/answer/2472708?hl=fr), définition et section « Avantages »                                                                                      | Fait produit officiel                                        | Réseau de Recherche et surfaces compatibles                                                                           | Consultation 2026-07-22 ; date non affichée                | Élevée                                                     | Au premier diagnostic des recherches                         | Le dirigeant examine ce qui a été tapé, pas seulement sa liste de mots-clés               | À revérifier en P3         |
| Certaines requêtes de faible activité sont omises du rapport sur les termes de recherche pour respecter les normes de confidentialité                                  | [Google Ads — Rapport sur les termes de recherche](https://support.google.com/google-ads/answer/2472708?hl=fr), section sur les différences entre rapport et insights                                                                    | Fait produit officiel                                        | Rapport non exhaustif                                                                                                 | Consultation 2026-07-22 ; date non affichée                | Élevée                                                     | Dans la limite du diagnostic par requêtes                    | Ne pas prétendre expliquer chaque contact depuis un rapport complet                       | À revérifier en P3         |
| Les variantes proches peuvent partager le même sens ou la même intention ; l’exact ne signifie donc pas nécessairement une identité littérale                          | [Google Ads — Options de correspondance](https://support.google.com/google-ads/answer/7478529?hl=fr) et [rapport sur les termes de recherche](https://support.google.com/google-ads/answer/2472708?hl=fr), exemples de variantes proches | Fait produit officiel                                        | Mots-clés des campagnes compatibles                                                                                   | Consultation 2026-07-22 ; date non affichée                | Élevée                                                     | Près de la FAQ sur le passage de tous les mots-clés en exact | Éviter une correction automatique et potentiellement trop restrictive                     | À revérifier en P3         |
| Un terme réellement sans rapport avec les produits ou services peut être ajouté comme mot-clé à exclure                                                                | [Google Ads — Rapport sur les termes de recherche](https://support.google.com/google-ads/answer/2472708?hl=fr), section « Gérer vos mots clés »                                                                                          | Possibilité et recommandation produit                        | Seulement lorsque l’inadéquation est établie                                                                          | Consultation 2026-07-22 ; date non affichée                | Élevée                                                     | Près du test sur une requête documentée                      | Exclure précisément le hors sujet, pas une famille ambiguë entière                        | À revérifier en P3         |
| Le réglage géographique par défaut peut viser les personnes présentes, régulièrement présentes ou intéressées par la zone ; l’option « présence » est plus restrictive | [Google Ads — Options avancées de ciblage géographique](https://support.google.com/google-ads/answer/1722038?hl=fr)                                                                                                                      | Fait produit officiel                                        | Paramètres des campagnes compatibles                                                                                  | Consultation 2026-07-22 ; date non affichée                | Élevée                                                     | Près du diagnostic des contacts hors zone                    | Vérifier le réglage et accepter qu’un resserrement puisse réduire la diffusion            | À revérifier en P3         |
| Le ciblage géographique repose sur plusieurs signaux et n’est pas précis à 100 %                                                                                       | [Google Ads — Options avancées de ciblage géographique](https://support.google.com/google-ads/answer/1722038?hl=fr)                                                                                                                      | Limite explicitée par Google                                 | Localisation estimée                                                                                                  | Consultation 2026-07-22 ; date non affichée                | Élevée                                                     | Dans la limite du diagnostic de zone                         | Ne pas promettre la disparition absolue des contacts hors zone                            | À revérifier en P3         |
| Les zones géographiques correspondantes peuvent refléter une localisation physique ou un intérêt pour un lieu                                                          | [Google Ads — Évaluer les performances géographiques](https://support.google.com/google-ads/answer/7492954?hl=fr)                                                                                                                        | Fait produit officiel                                        | Rapports géographiques                                                                                                | Consultation 2026-07-22 ; date non affichée                | Élevée                                                     | Avec l’exemple fictif de zone                                | Croiser rapport, réglage et zone déclarée par le contact                                  | À revérifier en P3         |
| Une promotion annoncée doit rester cohérente avec la destination et les informations déterminantes de l’offre doivent être accessibles                                 | [Google Ads — Offres indisponibles](https://support.google.com/adspolicy/answer/15937063?hl=fr) et [Déclarations trompeuses](https://support.google.com/adspolicy/answer/6020955?hl=fr)                                                  | Règles publicitaires officielles                             | Conformité publicitaire ; ne prouve pas la qualité commerciale                                                        | Consultation 2026-07-22 ; dates non affichées              | Élevée pour la règle, moyenne pour la déduction éditoriale | Près de la comparaison annonce-page                          | Comparer exactement ce que l’annonce fait comprendre et ce que l’entreprise vend          | À revérifier en P3         |
| Google distingue le prospect qualifié, enrichi par une qualification hors ligne, du prospect converti ayant franchi une étape ultérieure définie par l’annonceur       | [Google Ads — Prospects qualifiés et convertis](https://support.google.com/google-ads/answer/11459091?hl=fr)                                                                                                                             | Définition produit officielle                                | Les critères concrets appartiennent à l’annonceur                                                                     | Consultation 2026-07-22 ; date non affichée                | Élevée                                                     | Près de la définition du contact qualifié et du CRM          | Écrire une définition stable avant d’importer un statut                                   | À revérifier en P3         |
| Les formulaires Google permettent des questions standards et personnalisées et une transmission par CSV, webhook, e-mail ou CRM selon la configuration                 | [Google Ads — Créer un formulaire pour prospects](https://support.google.com/google-ads/answer/16726130?hl=fr)                                                                                                                           | Fait produit officiel                                        | Formulaires hébergés par Google, pas tous les formulaires du site                                                     | Consultation 2026-07-22 ; date non affichée                | Élevée                                                     | Dans une branche spécifique « formulaire Google »            | Ne pas confondre formulaire du site et formulaire intégré à l’annonce                     | À revérifier en P3         |
| Les réponses qualifiantes des formulaires Google sont limitées aux campagnes Search et reflètent une réponse configurée                                                | [Google Ads — Réponses qualifiantes](https://support.google.com/google-ads/answer/17050941?hl=fr)                                                                                                                                        | Fait produit officiel                                        | Fonctionnalité spécifique ; le libellé ne prouve pas une vente                                                        | Consultation 2026-07-22 ; date non affichée                | Élevée                                                     | Dans la FAQ sur la qualification automatique                 | Une règle configurée peut trier, mais ne remplace pas la validation commerciale           | À revérifier en P3         |
| Un même contact issu d’un formulaire Google peut être livré plusieurs fois et son identifiant permet la déduplication                                                  | [Google Ads — Configurer l’intégration CRM pour les formulaires](https://support.google.com/google-ads/answer/17051188?hl=fr)                                                                                                            | Fait produit officiel                                        | Formulaires Google et intégrations concernées                                                                         | Consultation 2026-07-22 ; date non affichée                | Élevée                                                     | Près de la définition test, spam et doublon                  | Retirer les doublons avant de mesurer la qualité                                          | À revérifier en P3         |
| Une conversion d’appel peut dépendre d’une durée minimale ; un clic sur un numéro mobile peut mesurer le clic plutôt que l’appel lui-même                              | [Google Ads — Suivi des conversions par appel](https://support.google.com/google-ads/answer/6100664?hl=fr)                                                                                                                               | Fait produit officiel                                        | Dépend de la configuration et des pays pris en charge                                                                 | Consultation 2026-07-22 ; date non affichée                | Élevée                                                     | Près du diagnostic des appels                                | La durée ou le clic ne prouvent ni le besoin ni la qualification                          | À revérifier en P3         |
| Les données collectées doivent être adéquates, pertinentes et limitées à ce qui est nécessaire à la finalité                                                           | [CNIL — Minimiser les données collectées](https://www.cnil.fr/fr/minimiser-les-donnees-collectees) et [RGPD, article 5](https://eur-lex.europa.eu/eli/reg/2016/679/2016-05-04?locale=fr)                                                 | Principe juridique et recommandation de l’autorité française | Application à apprécier selon la finalité et le contexte                                                              | Consultation 2026-07-22                                    | Élevée                                                     | Près des questions de formulaire                             | Ajouter une question uniquement si elle sert réellement à qualifier ou orienter           | Stable, à revérifier en P3 |
| L’information requise doit être fournie lors de la collecte des données personnelles                                                                                   | [RGPD, article 13](https://eur-lex.europa.eu/eli/reg/2016/679/2016-05-04?locale=fr)                                                                                                                                                      | Texte juridique primaire                                     | Ne remplace pas une analyse juridique individualisée                                                                  | Consultation 2026-07-22                                    | Élevée                                                     | Note près du formulaire et du CTA                            | Informer correctement sans présenter le guide comme validation de conformité              | Stable, à revérifier en P3 |
| Les traceurs publicitaires ou de mesure sont souvent soumis au consentement, sous réserve des exemptions strictes                                                      | [CNIL — FAQ cookies et autres traceurs](https://www.cnil.fr/fr/cookies-et-autres-traceurs/regles/cookies/FAQ), mise à jour affichée le 29 avril 2026                                                                                     | Position et synthèse de la CNIL                              | Le régime dépend du traceur et de sa finalité                                                                         | Consultation 2026-07-22                                    | Élevée                                                     | Dans une note courte sur mesure et import                    | Ne jamais laisser entendre que le hachage ou l’import dispense du consentement applicable | Mise à jour 2026-04-29     |

### Faits, déductions et recommandations

- **Fait vérifié :** Google distingue terme de recherche et mot-clé.
- **Fait vérifié :** le rapport des termes de recherche n’affiche pas toutes
  les requêtes individuellement.
- **Fait vérifié :** l’option géographique peut inclure la présence ou
  l’intérêt pour une zone et la localisation n’est pas certaine à 100 %.
- **Fait vérifié :** une action comptée comme conversion, notamment un appel
  selon sa durée, ne contient pas à elle seule la qualification métier.
- **Fait vérifié :** Google prévoit des catégories de prospect qualifié et
  converti, dont la définition concrète dépend de l’annonceur.
- **Déduction éditoriale :** l’entreprise doit comparer, pour une demande
  précise, les mots recherchés, la zone, le message vu, la page, le formulaire
  ou l’appel et le motif commercial avant d’accuser une seule étape.
- **Recommandation Hagnéré Code :** attribuer un seul motif principal
  standardisé à chaque dossier et garder les motifs secondaires en note.
- **Recommandation Hagnéré Code :** conserver « en attente » comme statut
  distinct ; un contact injoignable n’est pas automatiquement non qualifié.
- **Recommandation Hagnéré Code :** ne modifier qu’une variable importante
  pendant une période comparable afin de pouvoir interpréter la suite.
- **Recommandation Hagnéré Code :** ne renvoyer des statuts qualifiés à Google
  qu’après stabilisation des critères, de la réception et du suivi.

### Matrice de diagnostic préparée pour P2

| Motif principal observé                                 | Preuve à examiner d’abord                                                               | Première correction possible                                                             | Conclusion interdite sans preuve                         |
| ------------------------------------------------------- | --------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| Contact hors zone                                       | Option de ciblage, zones géographiques correspondantes et zone déclarée par la personne | Passer à la présence, exclure une zone ou clarifier la zone servie, selon le constat     | « Google ignore toujours mon ciblage »                   |
| Particulier pour une offre réservée aux entreprises     | Terme recherché, annonce, premier écran et éventuelle question sur le type de client    | Écrire clairement « pour les entreprises » ou ajouter une question réellement orientante | « Il faut obligatoirement rallonger le formulaire »      |
| Demande pour un service non proposé                     | Terme recherché, mot-clé déclencheur, annonce et page                                   | Exclure un hors sujet précis ou clarifier le service vendu                               | « Toute requête large est mauvaise »                     |
| Recherche de gratuité, de prix ou de délai incompatible | Mots employés, prix ou conditions effectivement visibles, promesse de l’annonce         | Rendre le niveau de service et les conditions plus explicites                            | « Toute personne qui demande le prix est non qualifiée » |
| Formulaire incomplet ou trop vague                      | Questions réellement nécessaires, réponse attendue et destination du dossier            | Ajouter, reformuler ou retirer une question dont l’effet est explicable                  | « Plus de champs donne toujours de meilleurs prospects » |
| Test, spam ou doublon                                   | Identifiant, source, validation, réception CRM et déduplication                         | Corriger la livraison ou la déduplication avant de calculer la qualité                   | « Le ciblage attire des doublons »                       |
| Contact injoignable                                     | Heure de réception, tentatives réelles, appel décroché et statut CRM                    | Conserver « en attente » et améliorer le traitement si nécessaire                        | « Injoignable signifie hors cible »                      |
| Contact qualifié sans devis ou sans vente               | Délai de traitement, offre, prix, capacité, proposition et relance                      | Examiner ensuite le processus commercial ou la marge                                     | « Google a envoyé un mauvais contact »                   |

### Contradictions et données à ne pas publier

- aucun taux sectoriel de contacts qualifiés ;
- aucun coût par lead moyen ;
- aucun nombre minimal universel de contacts avant de décider ;
- aucun délai universel de rappel ;
- aucune affirmation selon laquelle la requête large cause nécessairement les
  mauvais contacts ;
- aucune affirmation selon laquelle la correspondance exacte est littérale ;
- aucune promesse qu’un mot-clé négatif, un formulaire plus long ou un ciblage
  plus étroit améliorera systématiquement la qualité ;
- aucune assimilation d’un contact non qualifié à du « budget gaspillé » ;
- aucune assimilation d’une durée d’appel à la qualité ;
- aucune affirmation que Google connaît les ventes ou les bons clients sans
  remontée fiable ;
- aucune promesse de ciblage géographique parfait ;
- aucune présentation du rapport des termes de recherche comme exhaustif ;
- aucune conclusion de conformité RGPD ou cookies issue du guide ;
- aucune collecte de donnée sensible ou inutile au prétexte de qualifier ;
- aucune attribution certaine d’une vente à Google à partir d’un seul champ
  CRM ;
- aucun cas client réel, nom, capture ou taux interne inventé.

### Calculs reproductibles

**Nature du résultat :** diagnostic de cohorte et coûts média descriptifs, pas
ROI ni prévision de performance.

**Horizon :** une campagne Search fictive et une offre inchangée du 1er au
30 juin ; dossiers observés au 15 juillet.

**Poste inclus :** 2 800 € de dépenses média Google Ads sur cette campagne et
cette période.

**Postes exclus ou inconnus :** gestion, outil CRM, page, temps de rappel,
coûts de vente, chiffre d’affaires, marge et issue définitive des dossiers
encore ouverts.

Définitions à rendre visibles :

- **contact brut :** formulaire, appel ou demande apparaissant dans les
  outils ;
- **contact unique reçu :** vraie demande effectivement arrivée, après retrait
  des tests et doublons ;
- **contact qualifié :** dossier répondant aux critères écrits de l’entreprise
  et pouvant passer à une prochaine étape commerciale ;
- **contact non qualifié :** dossier qui échoue clairement à un critère
  nécessaire, avec un motif documenté ;
- **contact en attente :** dossier pas encore suffisamment traité pour
  conclure ;
- **coût média par contact unique :** dépenses média divisées par les contacts
  uniques reçus ;
- **coût média par contact qualifié :** dépenses média divisées par les
  contacts qualifiés à la date d’observation ;
- **coût d’acquisition complet :** média, gestion, outils, page et temps
  interne attribuables, si chaque poste est mesuré sur le même périmètre ;
- **marge disponible avant acquisition :** chiffre d’affaires de la vente
  moins les coûts variables directement nécessaires à sa réalisation, selon
  une définition validée avec le conseil comptable de l’entreprise.

#### Cohorte illustratrice fictive

Une entreprise fictive entretient des machines utilisées par des ateliers
professionnels dans une zone définie. Une seule campagne Search et une même
page présentent la même offre pendant la période.

- 30 demandes brutes ;
- 2 tests ou doublons ;
- 28 contacts uniques reçus ;
- 4 dossiers encore en attente de qualification ;
- 24 dossiers classés ;
- 7 hors zone ;
- 5 particuliers alors que l’offre est réservée aux professionnels ;
- 4 demandes pour un service non proposé ;
- 2 projets incompatibles avec les conditions d’intervention écrites ;
- 6 contacts qualifiés ;
- parmi les 6 qualifiés, 4 ont reçu une proposition et 1 vente est enregistrée
  à la date d’observation.

Contrôles inverses :

- 30 demandes brutes − 2 tests ou doublons = 28 contacts uniques ;
- 28 contacts uniques − 4 en attente = 24 dossiers classés ;
- 7 + 5 + 4 + 2 + 6 = 24 dossiers classés.

Calculs :

- coût média par contact unique : 2 800 € ÷ 28 = **100 €** ;
- coût média provisoire par contact qualifié : 2 800 € ÷ 6 =
  **466,67 €**, arrondi au centime ;
- part qualifiée parmi les dossiers classés : 6 ÷ 24 × 100 =
  **25 %** ;
- part qualifiée parmi tous les contacts uniques à la date d’observation :
  6 ÷ 28 × 100 = **21,43 %**, arrondie au centième.

Le guide doit toujours nommer le dénominateur : 25 % et 21,43 % sont exacts,
mais ne répondent pas à la même question.

Dans le scénario fictif, « hors zone » est le premier motif individuel.
L’option de campagne observée est « présence ou intérêt ». L’entreprise
consulte le rapport géographique, puis teste l’option fondée sur la présence
pour cette seule campagne. Elle ne change ni l’annonce ni le formulaire au
même moment. Aucun résultat postérieur n’est inventé et le guide rappelle que
la diffusion peut diminuer.

## 6. Empreinte éditoriale à ne pas reproduire

| Guide                                | Type d’ouverture                                                 | Progression                                                              | Dispositif récurrent                   | Type d’exemple                | Place du CTA               | Type de conclusion                |
| ------------------------------------ | ---------------------------------------------------------------- | ------------------------------------------------------------------------ | -------------------------------------- | ----------------------------- | -------------------------- | --------------------------------- |
| pourquoi-google-ads-ne-convertit-pas | Dépense sans clients                                             | Mesure, arrivée du contact, recherche, page, qualification, vente, marge | Arbre de symptômes et ordre d’enquête  | Cas couvrant tout le parcours | Après le diagnostic global | Réparer le premier maillon prouvé |
| suivi-conversions-google-ads         | Google annonce des conversions que l’entreprise ne reconnaît pas | Reçu, unique, qualifié, devis, vente, marge                              | Contrat de mesure et protocole de test | Chaîne CRM recalculée         | Après la mesure autonome   | Construire une vérité commune     |
| audit-google-ads-que-verifier        | Compte à contrôler avant reprise ou hausse de budget             | Six familles de vérifications                                            | Checklist de compte                    | Audit transversal             | Après plusieurs contrôles  | Prioriser les risques             |
| budget-google-ads-pme                | Choix d’un budget avant lancement                                | Marge, clics, scénarios et décision                                      | Calculateur financier                  | Scénarios de budget           | Après le calcul            | Lancer, réduire ou reporter       |
| landing-page-google-ads              | Page qui doit poursuivre une annonce                             | Requête, promesse, preuve, action et test                                | Wireframe commenté                     | Page fictive                  | Après le wireframe         | Construire ou corriger la page    |

Choix du nouveau guide :

- **Tension motrice :** des contacts arrivent, mais le dirigeant ne sait pas
  si Google attire les mauvaises personnes ou si son entreprise les classe et
  les traite mal.
- **Type d’ouverture :** trois mauvais contacts reconnaissables, puis réponse
  immédiate ; aucune méthode d’agence avant la situation.
- **Progression :** partir d’une cohorte fermée, suivre chaque contact à
  rebours jusqu’à sa recherche, puis avancer à nouveau jusqu’à la vente.
- **Artefact signature :** registre des motifs principaux avec statuts
  brut, unique, en attente, non qualifié et qualifié.
- **Rythme et voix :** phrases concrètes, questions que le dirigeant peut poser
  à son équipe, une décision à la fin de chaque grande section.
- **Place du CTA :** après le registre, le diagnostic et la première action
  autonome ; jamais dans l’ouverture.
- **Forme de conclusion :** « ce lundi, classez la dernière période avant de
  modifier la campagne », puis six décisions possibles.
- **Différences majeures :** pas d’arbre complet, pas de checklist de compte,
  pas de tutoriel de suivi, pas de calculateur de budget et pas de wireframe de
  landing page.

## 7. Plan annoté

| Section provisoire                                                 | Question résolue                                                    | Preuve ou exemple                                                     | Conséquence/décision                                                  | Format choisi                 |
| ------------------------------------------------------------------ | ------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | ----------------------------- |
| Des demandes arrivent déjà : êtes-vous dans le bon guide ?         | S’agit-il d’absence de contact ou de contacts inadéquats ?          | Trois situations concrètes et frontière avec le guide voisin          | Quitter ce diagnostic si rien n’arrive réellement                     | Ouverture courte et encadré   |
| Écrivez ce qu’est un contact utile pour votre entreprise           | Selon quels critères refuser ou poursuivre ?                        | Type de client, besoin, zone, conditions et calendrier                | Écrire la définition avant de juger Google                            | Six questions ordinaires      |
| Prenez toute une période, pas seulement les pires appels           | Quel ensemble analyser sans sélectionner les cas ?                  | Contact brut, test, doublon, unique, en attente, classé               | Fermer une cohorte et choisir une date d’observation                  | Registre copiable             |
| Que la personne avait-elle réellement recherché ?                  | La demande était-elle déjà hors sujet avant le clic ?               | Rapport des termes, différence terme/mot-clé et limite d’exhaustivité | Exclure seulement un hors sujet documenté ou clarifier le ciblage     | Une demande suivie à rebours  |
| Était-elle dans la zone que vous servez ?                          | Le réglage inclut-il présence ou intérêt ?                          | Options et rapport géographiques officiels                            | Resserrer, exclure, clarifier ou conserver selon les preuves          | Deux cartes comparatives      |
| Qu’avait-elle compris de l’annonce et de la page ?                 | L’offre paraît-elle plus large, gratuite, immédiate ou différente ? | Comparaison mot recherché, annonce, premier écran et service réel     | Réécrire la promesse plutôt que blâmer le prospect                    | Avant/après textuel           |
| Le formulaire aide-t-il vraiment à orienter la demande ?           | Une question change-t-elle l’acceptation ou le traitement ?         | Minimisation CNIL, formulaire du site versus formulaire Google        | Ajouter, reformuler ou supprimer une question utile                   | Trois exemples de questions   |
| L’appel ou le CRM transforme-t-il un inconnu en « mauvais lead » ? | Le contact a-t-il été reçu, décroché, rappelé et classé ?           | Limites du clic et de la durée d’appel, doublons et statuts           | Séparer défaut de traitement et inadéquation commerciale              | Mini-journal d’appel          |
| Exemple illustratif fictif : 30 demandes, 28 contacts uniques      | Comment recalculer la qualité sans score opaque ?                   | Cohorte, calculs et contrôles inverses                                | Identifier le premier motif et un test unique                         | Cas chiffré et cartes mobiles |
| Corrigez une cause, puis observez la période suivante              | Que faut-il changer maintenant ?                                    | Matrice motif, preuve, action et conclusion interdite                 | Maintenir, corriger, attendre, réduire, suspendre ou changer de canal | Six décisions finales         |
| Quand renvoyer les contacts qualifiés à Google ?                   | L’automatisation est-elle déjà fiable ?                             | Définitions Google qualifié/converti et exigences de données          | Reporter l’import si la qualification interne est instable            | Encadré avancé facultatif     |
| Questions fréquentes                                               | Quelles fausses bonnes idées faut-il éviter ?                       | Sources Google et limites explicites                                  | Éviter les automatismes destructeurs                                  | Réponses courtes              |

### FAQ prévue

1. **Qu’est-ce qu’un lead Google Ads non qualifié ?**

   Une demande qui échoue clairement à un critère indispensable et dont le
   motif est documenté.

2. **Un prospect injoignable est-il non qualifié ?**

   Non, pas automatiquement : sa situation reste inconnue tant que la
   qualification n’est pas terminée.

3. **Faut-il ajouter davantage de questions au formulaire ?**

   Seulement si une réponse change réellement l’orientation ou le traitement.

4. **Faut-il passer tous les mots-clés en exact ?**

   Non : il faut partir des recherches et des résultats réels, et l’exact peut
   couvrir des formulations de même sens ou intention.

5. **Faut-il exclure chaque mauvais terme ?**

   Non : une exclusion trop large peut retirer des recherches utiles et le
   rapport n’est pas exhaustif.

6. **Pourquoi des prospects viennent-ils de l’extérieur de la zone ?**

   Les réglages peuvent inclure la présence ou l’intérêt et les signaux de
   localisation ne sont pas infaillibles.

7. **Un appel long est-il forcément qualifié ?**

   Non : sa durée ne prouve ni le besoin, ni la zone, ni la capacité d’achat.

8. **Google peut-il qualifier automatiquement un formulaire ?**

   Certaines réponses peuvent être configurées comme qualifiantes sur les
   formulaires Google Search ; elles ne prouvent pas une vente.

9. **Faut-il renvoyer les contacts qualifiés dans Google Ads ?**

   Cela peut devenir utile après stabilisation de la définition, de la mesure
   et des conditions de traitement des données.

10. **Combien de contacts faut-il analyser ?**

    Aucun seuil universel : il faut une période comparable, tous les contacts
    uniques et un statut séparé pour les dossiers non terminés.

## 8. Ressource et conversion

- **Une ressource téléchargeable est-elle naturellement nécessaire ?** non.
  Le registre doit être entièrement visible, copiable et utilisable sans
  donner ses coordonnées.
- **Problème résolu après lecture :** remplacer « les leads sont mauvais » par
  des motifs comptés et reliés à des preuves.
- **Résultat autonome :** une cohorte fermée, un dénominateur stable, un motif
  principal par dossier et une correction unique à tester.
- **Format :** cartes et tableau copiable dans l’article ; aucun fichier public
  à maintenir en P1.
- **Rubriques :** identifiant interne, date, campagne, terme si disponible,
  zone, message, page ou formulaire, canal, brut/test/doublon/unique,
  joignable, statut, motif principal, devis, vente, prochaine action.
- **Exemple rempli :** la cohorte fictive de 30 demandes et 28 contacts
  uniques.
- **Conclusion « ne pas investir » possible :** oui. Attendre si la cohorte
  n’est pas mûre, suspendre si l’offre ne peut pas servir la demande, ou
  corriger le traitement sans acheter davantage de trafic.
- **Sources et limites :** visibles près des réglages et définitions ; aucune
  moyenne sectorielle.
- **Données saisies et destination :** aucune donnée n’est envoyée par le
  registre public ; pour un usage réel, l’entreprise conserve son fichier dans
  un espace adapté et remplace les données personnelles par un identifiant
  interne lorsque cela suffit.
- **Processus de génération :** non applicable à un fichier téléchargeable ;
  le tableau reste du contenu éditorial.
- **Journal de QA :** en attente de P2 et P4.
- **Limites connues :** le rapport des recherches est incomplet, les statuts
  CRM dépendent de la discipline interne et les ventes peuvent mûrir après la
  date d’observation.
- **Mode de maintenance :** revérifier en P3 les interfaces, disponibilités et
  limites Google, puis lors de chaque revue éditoriale.
- **Bon fit :** contacts existants, offre et zone écrites, cohorte accessible,
  besoin d’isoler une cause.
- **Mauvais fit :** aucun contact, fraude ou compte suspendu, offre non définie,
  attente de garantie.
- **Action non commerciale :** classer la dernière période complète et choisir
  un seul test.
- **CTA principal :** « Faire diagnostiquer mes contacts Google Ads ».
- **Résultat après clic :** déterminer si la priorité concerne les recherches,
  la zone, le message, la page, le formulaire ou le traitement commercial.

### Informations possibles dans le formulaire de contact

- offre réellement vendue ;
- type de clients servis ;
- zone ;
- période analysée ;
- nombre de contacts uniques ;
- nombre qualifié ;
- principaux motifs de refus.

Ne demander ni mot de passe, ni export contenant inutilement des données
personnelles. Une première orientation peut recommander de ne rien modifier ou
de reporter l’audit.

### Maillage prévu

Liens sortants naturels :

- pourquoi-google-ads-ne-convertit-pas si aucune demande n’arrive ;
- suivi-conversions-google-ads si reçu, unique, qualifié et vendu ne sont pas
  distingués ;
- audit-google-ads-que-verifier lorsque les problèmes dépassent la seule
  qualité ;
- landing-page-google-ads si le message et la page sont en cause ;
- budget-google-ads-pme avant toute hausse ;
- prix-gestion-google-ads seulement après décision d’externaliser ;
- calculer-cout-par-lead-google-ads uniquement après sa publication ;
- la page de service Google Ads après la valeur autonome.

Liens entrants à envisager en P2 :

- branche « contacts hors cible » de
  pourquoi-google-ads-ne-convertit-pas ;
- partie contacts et CRM de audit-google-ads-que-verifier ;
- définition du prospect qualifié dans suivi-conversions-google-ads ;
- avertissement avant hausse dans budget-google-ads-pme.

## 9. Rapports de sortie des quatre passes

### Rapport P1 — Recherche

PASSE 1 TERMINÉE

- **Slug :** leads-google-ads-non-qualifies.
- **Lecteur et phrase réelle :** dirigeant recevant déjà des formulaires ou
  appels hors cible ; formulation qualitative construite à partir de la SERP,
  pas d’un entretien utilisateur enregistré.
- **Décision :** maintenir, corriger une cause, améliorer le traitement,
  attendre, réduire, suspendre ou déplacer le budget.
- **Angle et forme dominante :** trajet d’une demande réelle, du terme
  recherché au refus ou à la vente, avec registre d’une cohorte complète.
- **Pages proches et différence :** l’absence de résultat appartient au guide
  de non-conversion ; le suivi possède la mesure ; l’audit possède le compte
  complet ; le budget possède l’économie du test ; cette URL possède les
  contacts effectivement reçus mais inadéquats.
- **Sources décisives :** documentation officielle Google Ads sur termes de
  recherche, zones, prospects qualifiés, formulaires, appels et parcours vers
  la vente ; CNIL et RGPD sur minimisation et information.
- **Incertitudes exclues :** taux, coûts, taille minimale, délai de rappel,
  ciblage parfait, cause automatique, performance future et conformité
  générale.
- **Action autonome et CTA :** classer une période complète, puis faire
  diagnostiquer la première cause si elle ne peut pas être isolée seul.
- **Plan :** frontière, définition, cohorte, recherche, zone, message,
  formulaire, appel/CRM, exemple, test unique, import éventuel et FAQ.
- **Snapshot :** manifests/leads-google-ads-non-qualifies-p1.sha256.

### Rapport P2 — Rédaction et intégration

PASSE 2 TERMINÉE

- **Fichiers créés ou modifiés :** page, image sociale, registre, icône du hub,
  date éditoriale, lien entrant depuis le diagnostic Google Ads et présent
  dossier.
- **Ouverture et réponse :** particuliers, zone et service absent sont nommés
  immédiatement ; la réponse demande une période complète, un motif principal
  et une seule correction avant toute hausse ou coupure.
- **Forme propre au sujet :** trajet du contact reçu vers la recherche, la zone,
  la promesse puis le traitement ; neuf H2, trois tableaux adaptatifs, neuf FAQ
  et un seul CTA.
- **Exemple et calculs :** entreprise explicitement fictive ; 30 demandes, 28
  contacts uniques, 24 classés, 6 qualifiés et 2 800 € de média. Tous les
  dénominateurs sont nommés et aucun résultat postérieur au test n’est inventé.
- **Sources visibles :** Google Ads pour recherches, correspondances, zones,
  promesses, appels et catégories de prospects ; CNIL pour la minimisation,
  placés près des affirmations correspondantes.
- **Action autonome :** retirer tests et doublons, conserver les dossiers non
  mûrs en attente, compter un motif par refus et ne modifier qu’une variable.
- **CTA et destination :** vers `/demarrer-un-projet`, après la décision
  autonome ; première orientation gratuite et sans engagement, délai visé mais
  non garanti, attente ou réduction possibles, aucune demande de mot de passe.
- **Contrôles rapides :** manifeste P1 validé avant écriture, Prettier, ESLint,
  TypeScript et `git diff --check` réussis ; tests ciblés guides, langage humain
  et données structurées 30/30 réussis.
- **Statut :** `ready-for-human-review`, donc route accessible mais `noindex` et
  absente du hub, du sitemap et de `llms.txt`.
- **Snapshot :** manifests/leads-google-ads-non-qualifies-p2.sha256.

### Rapport P3 — Contre-audit indépendant

PASSE 3 TERMINÉE — **20/20**

- **Indépendance :** contrôle réalisé par un agent distinct de la rédaction,
  sans modification de fichier.
- **Intention, décision, pédagogie, preuve et style :** 2/2 sur chaque axe ;
  aucun P0 ni P1 restant.
- **Calculs reproduits :** `30 − 2 = 28`, `28 − 4 = 24`,
  `7 + 5 + 4 + 2 + 6 = 24`, `2 800 / 28 = 100`,
  `2 800 / 6 = 466,67`, `6 / 24 = 25 %` et `6 / 28 = 21,43 %`.
- **Sources revérifiées :** termes de recherche, correspondances, ciblage
  géographique, prospects qualifiés et convertis, appels, réponses
  qualifiantes et minimisation des données.
- **Corrections issues du premier passage à 19/20 :** suppression du jargon
  public, libellé géographique actualisé, limite du rapport reformulée, CTA
  rendu concret, source des réponses qualifiantes rendue visible et statut du
  dossier actualisé.
- **Snapshot :** manifests/leads-google-ads-non-qualifies-p3.sha256.

### Rapport P4 — Plume humaine et contrôle final

PASSE 4 TERMINÉE LOCALEMENT

- **Passe humaine :** chaque section part d’une question de dirigeant, répond
  avant d’expliquer et remplace les termes d’interface par leur conséquence
  commerciale.
- **Responsive réel :** DOM contrôlé à 320, 390, 640, 768, 1 024 et 1 440 px ;
  un H1, aucune ancre absente, aucun débordement horizontal et uniquement les
  JSON-LD `Article` et `BreadcrumbList`.
- **Contrôle visuel :** ouverture à 320 px, CTA à 390 px, cartes à 640 px et
  tableau à partir de 768 px inspectés ; les tableaux restent en cartes sous
  768 px pour préserver la lisibilité.
- **Contrôles techniques :** Prettier, ESLint, TypeScript, tests éditoriaux
  ciblés et `git diff --check` réussis.
- **Test réel :** non. Le contrôle navigateur est automatisé et visuel ; il ne
  remplace pas un entretien avec un lecteur appartenant à la cible.
- **Décision de publication :** autorisée explicitement par le commanditaire,
  mais retenue jusqu’au gel commun des dix guides afin de conserver des
  manifestes cohérents et un déploiement atomique.
- **Snapshot :** manifests/leads-google-ads-non-qualifies-p4.sha256.

## 10. Revue P1

### Scorecard justifiée du dossier, pas de la future page

| Axe         |  Note 0-2 | Preuve dans le dossier                                     | Correction encore nécessaire           |
| ----------- | --------: | ---------------------------------------------------------- | -------------------------------------- |
| Intention   |         2 | Une situation et une requête uniques                       | Revalider après rédaction              |
| Décision    |         2 | Six sorties honnêtes, dont attendre et suspendre           | Vérifier leur visibilité dans la page  |
| Pédagogie   |         2 | Contrat humain, définitions et exemple                     | Test lecteur réel en P4                |
| Profondeur  |         2 | Recherche, zone, promesse, formulaire, appel et CRM        | Couper toute répétition en P2          |
| Preuve      |         2 | Corpus exclusivement primaire et daté                      | Revérification indépendante en P3      |
| Comparaison |         2 | Motifs reliés à preuves, actions et conclusions interdites | Présentation mobile à tester           |
| Originalité |         2 | Cohorte fermée et trajet à rebours                         | Ne pas dériver vers un arbre générique |
| Style       |         1 | Voix et formulations préparées                             | La page n’est pas encore écrite        |
| Conversion  |         2 | Valeur autonome, bon fit, mauvais fit et CTA tardif        | Vérifier la destination réelle en P2   |
| SEO/produit |         1 | SERP, frontières et maillage préparés                      | Métadonnées, registre et route absents |
| **Total**   | **18/20** | Porte P1 prête                                             | Ce score n’autorise aucune publication |

### Test lecteur non technique

- **Test réalisé par une personne réelle :** non.
- **Profil prévu :** dirigeant ou indépendant utilisant Google Ads sans
  connaissance approfondie de l’interface.
- **Ce qu’il doit comprendre :** une conversion suivie n’est pas une vente et
  un contact en attente n’est pas un mauvais contact.
- **Décision qu’il doit pouvoir prendre :** choisir la première cause à tester
  ou décider de ne rien modifier.
- **Statut :** obligatoire en P4, non simulé en P1.

### Contre-audit indépendant

- **Auteur :** non désigné à ce stade.
- **Indépendant de la rédaction :** à garantir en P3.
- **Réserves à contrôler :** fraîcheur des interfaces Google, calculs,
  frontière avec le suivi des conversions, formulation juridique, clarté
  mobile et caractère non exhaustif des rapports.
- **Statut maximal réellement atteint :** P1 terminée — porte validée.

### Porte de sortie P1

- [x] lecteur, situation et décision unique définis ;
- [x] score de 90/100 documenté sans volume inventé ;
- [x] contrat humain écrit avant le plan ;
- [x] frontière « contacts inadéquats » versus « aucun contact » explicite ;
- [x] cannibalisation avec les guides actuels et futur guide de coût traitée ;
- [x] SERP en langue française observée et limites écrites ;
- [x] sources primaires Google Ads, CNIL et Union européenne datées ;
- [x] faits, déductions et recommandations séparés ;
- [x] cohorte fictive unique, étiquetée, calculée et contrôlée à l’envers ;
- [x] plan distinct des guides voisins ;
- [x] action autonome, alternatives, bon fit et mauvais fit définis ;
- [x] CTA tardif et résultat après clic précisés ;
- [x] garde-fous sur les affirmations non prouvées consignés ;
- [x] P2, P3 et P4 laissées en attente ;
- [x] aucun fichier public, partagé, registre ou Git touché dans cette passe ;
- [x] manifeste P1 frère créé puis vérifié.

### Vérifications réservées aux passes suivantes

- [ ] les 150 premiers mots de la page passent le contrat humain ;
- [ ] chaque H2 public est compris hors contexte ;
- [ ] les cinq phrases abstraites sont réellement absentes ou réécrites ;
- [ ] les tableaux et cartes sont testés à 390 px ;
- [ ] les FAQ répondent dès leur première phrase ;
- [ ] les sources visibles sont placées près des affirmations ;
- [ ] les calculs sont refaits par le contre-auditeur ;
- [ ] le cas fictif reste explicitement fictif dans la page ;
- [ ] le CTA et sa destination existent et fonctionnent ;
- [ ] les métadonnées, données structurées, registre et ancres sont cohérents ;
- [ ] TypeScript, ESLint, tests et build requis passent ;
- [ ] les largeurs et états requis sont observés ;
- [ ] aucune publication ou indexation n’est déclarée sans preuve.

## Décision de gel commun — 22 juillet 2026

Les mentions précédentes de publication différée décrivent l’état de contrôle
avant le gel atomique des dix guides.

Statut éditorial final : **publiable — validation éditoriale déléguée**.

Décision de publication : autorisée explicitement par le commanditaire.

Test réalisé par une personne réelle : non.

Le retrait du statut d’attente ouvre la route à `index, follow` dans un build de
production. Il ne prouve ni le déploiement final ni l’indexation effective par
Google, qui doivent être vérifiés séparément.
