# Dossier de travail — Google Ads pour un SaaS B2B

> Dossier ouvert en passe 1 puis complété jusqu'à la validation P4. Il conserve
> la recherche historique et documente la rédaction, les contre-audits et les
> contrôles terminés le 24 juillet 2026. Il ne constitue pas une promesse de
> performance publicitaire.

Le déroulement et les portes de sortie sont définis dans
[`docs/workflow-maitre-guides-4-passes.md`](../workflow-maitre-guides-4-passes.md).

## Journal des quatre passes

Propriétaire éditorial unique : équipe éditoriale Hagnéré Code, orchestration
du lot du 23 juillet 2026.

| Passe                        | État                     | Date             | Responsable                                   | Snapshot | Blocages |
| ---------------------------- | ------------------------ | ---------------- | --------------------------------------------- | -------- | -------- |
| 1. Recherche                 | Terminée — porte validée | 23 juillet 2026  | Agent recherche                               | Manifeste P1 | Aucun |
| 2. Rédaction et intégration  | Terminée — porte validée | 24 juillet 2026  | équipe éditoriale Hagnéré Code                | Manifeste P2 | Aucun |
| 3. Contre-audit indépendant  | Terminée — porte validée | 24 juillet 2026  | final_audit_marketing, anti_ia_final, seo_tech_final | Manifeste P3 | Aucun P0/P1 restant |
| 4. Plume humaine et contrôle | Terminée — porte validée | 24 juillet 2026  | orchestration éditoriale                      | Manifeste P4 | Aucun blocage éditorial |

### Manifeste du snapshot

| Fichier contrôlé | Passe | Remarque |
| ---------------- | ----- | -------- |
| `docs/research/manifests/google-ads-saas-b2b-p1.sha256` | P1 | Manifeste existant ; historique de recherche conservé. |
| `docs/research/manifests/google-ads-saas-b2b-p2.sha256` | P2 | Manifeste existant de rédaction et d'intégration. |
| `docs/research/manifests/google-ads-saas-b2b-p3.sha256` | P3 | Manifeste existant après contre-audit et corrections. |
| `docs/research/manifests/google-ads-saas-b2b-p4.sha256` | P4 | Manifeste final créé après les contrôles P4 ; son empreinte est intégrée au snapshot commun du lot. |

## 1. Fiche d'identité

```text
Slug : google-ads-saas-b2b
Statut actuel : publiable — validation éditoriale déléguée
Requête principale, encore hypothétique avant recherche : google ads saas b2b
Moment du parcours : décider puis sécuriser un premier test
Lecteur précis : dirigeant ou fondateur d'un SaaS B2B français, sans équipe acquisition senior, qui envisage Google Ads ou qui reçoit des demandes de démonstration sans savoir lesquelles deviennent clientes
Situation déclenchante : le dirigeant voit des clics et des formulaires dans Google Ads, mais son cycle de vente dure plusieurs semaines ou mois et personne ne relie les campagnes aux contrats signés
Décision principale après lecture : financer, corriger, différer ou arrêter un test Google Ads en fonction de la demande recherchée, du suivi du cycle commercial et de l'économie d'un client signé
Niveau de connaissance au départ : sait ce qu'est Google Ads, mais ne maîtrise ni l'import de conversions hors ligne ni le pilotage par valeur
5 questions indispensables : existe-t-il une demande exprimée sur Google ? quelle étape commerciale faut-il mesurer ? comment relier un clic à un contrat ? quel coût complet comparer à quelle marge ? dans quels cas ne pas lancer ?
3 objections ou craintes : « mon cycle est trop long » ; « Google Ads attire seulement des curieux » ; « je n'ai pas assez de données pour savoir »
Action utile sans contact commercial : remplir un registre de cohorte allant du clic au contrat signé et calculer le coût par prospect accepté puis par client
CTA possible : préparer un premier test publicitaire mesurable, vers /demarrer-un-projet
Hors périmètre : promesse de rentabilité, benchmark universel de CPC/CPL, tutoriel exhaustif de l'interface, comparaison complète de tous les canaux, conseil juridique ou fiscal
Date de la recherche : 23 juillet 2026
Responsable de la synthèse : agent recherche du lot batch 4
```

## 1 bis. Contrat de langage humain

- Phrase exacte que le lecteur pourrait dire au téléphone : « Je paie Google
  pour obtenir des demandes de démo, mais je ne sais pas quelles campagnes
  amènent les entreprises qui signent vraiment. Est-ce que je continue ? »
- Réponse qu'il attend en une phrase : ne jugez pas Google Ads au nombre de
  formulaires ; suivez au moins une cohorte jusqu'aux prospects acceptés, aux
  propositions et aux contrats, puis comparez son coût complet à la marge
  réellement attendue.
- Terme central expliqué sans jargon : une **cohorte** est simplement le groupe
  de contacts issus d'une période ou d'une campagne que l'on suit ensemble
  jusqu'au résultat commercial.
- Mots ordinaires employés par le lecteur : demande de démonstration, entreprise
  sérieuse, bon prospect, devis ou proposition, contrat signé, abonnement,
  coût commercial, marge, délai de décision.
- Mots d'agence ou de consultant à éviter : full funnel, MQL, SQL, lead gen,
  attribution omnicanale, hypercroissance, ROAS « garanti », scaling. Si un
  sigle métier est indispensable, l'expliquer immédiatement avec le mot du
  dirigeant.
- Projet des 150 premiers mots : ouvrir pendant une réunion commerciale : le
  tableau publicitaire annonce trente demandes de démonstration, le CRM montre
  un seul contrat, mais personne ne sait s'il vient de Google. Définir Google
  Ads comme l'achat d'une présence sur des recherches, donner la réponse et
  annoncer la décision.
- Ce que le lecteur saura décider après ces 150 mots : s'il doit d'abord tester
  la demande, réparer le suivi commercial ou renoncer provisoirement à acheter
  davantage de clics.
- H2 relus isolément : à valider en P2.
- Comparaison comprise à 390 px sans colonne masquée : à valider en P4 ; préférer
  des cartes verticales au tableau large dans l'article.
- FAQ dont la première phrase répond : à valider en P2.
- CTA formulé comme résultat pour le prospect : « Préparer un test Google Ads
  relié aux contrats signés ».

### Test sujet, action, résultat

À effectuer sur le brouillon P2. Les formulations abstraites prévisibles sont
déjà remplacées dans le plan par des actions observables.

| Phrase initiale à surveiller | Qui agit ? | Action concrète | Résultat pour le lecteur | Formulation attendue |
| ---------------------------- | ---------- | --------------- | ------------------------ | -------------------- |
| « Aligner le marketing et les ventes » | Le dirigeant et le commercial | Ils nomment les mêmes étapes et mettent à jour chaque contact | Une campagne peut être reliée à un contrat | « Le commercial marque chaque contact comme refusé, accepté, proposé ou signé. » |
| « Optimiser la qualité des leads » | L'équipe | Elle renvoie à Google les étapes commerciales fiables | Le budget vise des contacts plus proches du besoin | « Importez le statut “prospect accepté” seulement quand la même règle est appliquée à tous les contacts. » |
| « Piloter par la valeur » | Le dirigeant | Il attribue une valeur justifiée aux résultats commerciaux | Les résultats ne sont plus comptés comme équivalents | « Ne donnez pas la même valeur à un formulaire et à un contrat signé. » |
| « Valider l'économie unitaire » | Le dirigeant | Il compare le coût complet à la marge attribuable | Il sait si le test mérite d'être prolongé | « Comparez les 4 500 € dépensés à la marge attendue du client, pas seulement à son chiffre d'affaires. » |
| « Structurer le funnel » | L'équipe commerciale | Elle suit cinq étapes communes | Les pertes deviennent visibles | « Suivez demande, prospect accepté, proposition, contrat et première marge dans une seule ligne. » |

### Test de l'ouverture

- [x] la situation vécue apparaît avant la méthode de l'agence ;
- [x] les termes prévus sont définis au premier usage ;
- [x] aucun lexique de masse ne retarde la réponse ;
- [x] aucune métaphore ne devient un système à apprendre ;
- [x] la réponse reste honnête sans accumuler les réserves avant l'explication.

## 2. Cannibalisation

| Page existante | Intention de cette page | Différence du nouveau guide | Lien ou arbitrage nécessaire |
| -------------- | ----------------------- | --------------------------- | ---------------------------- |
| `/guides/seo-saas-b2b` | Construire une acquisition organique et des contenus utiles au cycle commercial d'un SaaS | Le nouveau guide décide si et comment acheter une demande existante, puis la suivre jusqu'au contrat | Lier la comparaison des temporalités sans refaire le guide SEO |
| `/guides/google-search-ads-ou-performance-max` | Choisir un type de campagne Google selon contrôle et données | Le nouveau guide part de l'économie et du cycle d'un SaaS, non de l'interface | Renvoyer vers ce guide seulement après le choix de lancer |
| `/guides/suivi-conversions-google-ads` | Réconcilier conversions publicitaires et résultats métier, tous secteurs | Le nouveau guide applique cette discipline au cas long et sélectif du SaaS B2B | Résumer le minimum puis lier pour la mise en œuvre détaillée |
| `/guides/calculer-cout-par-lead-google-ads` | Calculer CPL, coût par prospect qualifié et cohorte | Le nouveau guide tranche l'adéquation de Google Ads à un SaaS et remonte jusqu'au contrat | Réutiliser l'idée de cohorte sans recopier les explications de calcul |
| `/guides/pourquoi-google-ads-ne-convertit-pas` | Diagnostiquer une campagne active qui ne produit pas de conversions utiles | Le nouveau guide couvre aussi la décision avant lancement et la longueur du cycle de vente | Lien en sortie pour une campagne déjà en difficulté |
| `/guides/landing-page-google-ads` | Concevoir la page après le clic | Le nouveau guide traite la demande, le suivi commercial et la rentabilité | Lien contextuel si la requête est bonne mais la démonstration mal présentée |

**Justification d'une URL distincte :** aucun guide existant ne répond à la
décision complète « Google Ads convient-il à mon SaaS B2B et comment le juger
au contrat signé malgré un cycle de vente long ? ».

## 3. Demande et vocabulaire du lecteur

Questions observées dans les résultats francophones et dans la documentation
officielle consultés le 23 juillet 2026 :

- Google Ads fonctionne-t-il pour un SaaS B2B ?
- comment choisir des mots-clés SaaS sans payer des recherches scolaires ou
  trop générales ?
- faut-il compter une demande de démonstration comme conversion ?
- comment suivre un client signé plusieurs semaines après le clic ?
- peut-on importer des ventes hors ligne sans CRM sophistiqué ?
- quel budget ou quel coût par prospect est rentable ?
- faut-il séparer la marque, les concurrents et les problèmes recherchés ?

Formulations à privilégier : « bon prospect », « entreprise qui correspond à
notre cible », « démonstration acceptée », « proposition envoyée », « contrat
signé », « marge après mise en œuvre et support ». Le guide peut introduire
« conversion hors ligne » comme une action commerciale qui se produit après le
clic, hors du site, puis utiliser les mots ordinaires.

Requête principale retenue : `google ads saas b2b`. Variantes utiles, sans
chercher à créer une section pour chacune : `campagne google ads saas`,
`acquisition payante saas b2b`, `suivre clients google ads crm`, `google ads
cycle de vente long`.

Limite de méthode : il n'existe pas ici de volume propriétaire Search Console
ou Google Ads Keyword Planner. La présence et la formulation des besoins sont
issues d'une observation manuelle de la SERP française et des questions
traitées par les sources consultées ; elles ne constituent pas une mesure de
volume. Aucun chiffre de demande ne doit être inventé.

## 4. Carte concurrentielle

| Page | Réponse et angle | Preuves/artefacts | Bon point | Manque décisionnel | Conflit d'intérêt éventuel |
| ---- | ---------------- | ----------------- | --------- | ------------------ | -------------------------- |
| [Adwords Consultant — Google Ads SaaS B2B](https://adwords-consultant.com/blog/google-ads-saas-b2b) | Conseils de campagne et de ciblage | Captures et expertise déclarée | Sujet précisément nommé en français | Peu de parcours vérifiable jusqu'au contrat et de limites aux benchmarks | Prestataire Google Ads |
| [Berso Marketing — Google Ads pour SaaS](https://bersomarketing.com/fr/blog/google-ads-pour-saas/) | Guide de configuration et d'optimisation | Recommandations d'agence | Couvre les préoccupations pratiques | L'économie du client signé reste secondaire | Agence commercialisant la prestation |
| [Leadanic — Google Ads B2B SaaS](https://leadanic.com/blog/google-ads-b2b-saas-guide/) | Acquisition et choix de campagne | Conseils méthodologiques | Relie la publicité au B2B | Jargon et chiffres difficiles à transposer sans corpus français explicite | Prestataire de génération de leads |
| [Pivotal — Google Ads for SaaS](https://www.pivotal-consulting-group.com/insights/google-ads-for-saas) | Guide anglophone orienté performance | Conseils et exemples | Bonne couverture du sujet | Pas écrit pour le dirigeant français ; droit, interface et marché peuvent différer | Cabinet de conseil |

**Angle mort commun :** les pages parlent volontiers de mots-clés, de coût par
clic et de demandes de démonstration, mais rarement d'une règle simple pour
suivre une cohorte jusqu'au contrat, distinguer un prospect accepté d'un
formulaire et conclure honnêtement « ne pas lancer ».

**Valeur originale que le guide apportera :** un raisonnement à rebours depuis
le client signé, un registre copiable, un exemple chiffré reproductible et
quatre verdicts possibles : financer, réparer la mesure, différer ou arrêter.

## 5. Fiche de preuves

| Affirmation utilisable | Source primaire, URL et passage utile | Nature | Périmètre | Date/consultation | Confiance | Emplacement du lien visible | Conséquence lecteur | Fraîcheur |
| ---------------------- | ------------------------------------- | ------ | --------- | ----------------- | --------- | --------------------------- | ------------------- | --------- |
| Google Ads permet de relier un clic ou un appel publicitaire à une conversion réalisée plus tard hors ligne, par exemple un contrat | [Google Ads, À propos des importations de conversions hors connexion](https://support.google.com/google-ads/answer/2998031?hl=fr), description du parcours clic/appel vers vente hors ligne | Fait produit officiel | Comptes et sources de conversion compatibles | 2026-07-23 | Élevée | Section sur le suivi jusqu'au contrat | Le dirigeant n'est pas obligé de s'arrêter au formulaire | Volatile : relire avant publication |
| Google recommande les conversions améliorées pour prospects et la migration des anciens flux d'import a évolué en juin 2026 | Même source officielle, note sur la migration à compter du 15 juin 2026 | Fait produit daté | Paramétrage Google Ads actuel | 2026-07-23 | Élevée | Encadré « ce qui a changé en 2026 » seulement si utile | Évite un tutoriel obsolète ; ne pas détailler une interface appelée à changer | Très volatile |
| Un système de gestion de prospects peut être un CRM ou un tableur ; le CRM n'est pas une condition absolue | [Google Ads, Questions fréquentes sur les conversions hors connexion](https://support.google.com/google-ads/answer/10029210?hl=fr), prérequis et systèmes de prospects | Fait produit officiel | Mise en œuvre compatible et données correctement tenues | 2026-07-23 | Élevée | Réponse à « faut-il un CRM ? » | Une petite équipe peut commencer avec un registre discipliné | Volatile |
| Google cite le prospect qualifié ou le prospect converti parmi les objectifs à configurer pour les conversions améliorées pour prospects | Même FAQ officielle | Fait produit officiel | Catégories/paramétrage actuels | 2026-07-23 | Élevée | Section « ne comptez pas tous les formulaires pareil » | Encourage un signal plus proche du résultat commercial | Volatile |
| Pour les stratégies automatiques, Google recommande d'importer régulièrement les conversions hors ligne | Même FAQ officielle, recommandations d'import | Fait produit officiel | Lorsque ces conversions servent au pilotage automatique | 2026-07-23 | Élevée | Checklist d'exploitation | Un import ponctuel et tardif limite la qualité du pilotage | Volatile |
| Les fenêtres de conversion sont configurables et peuvent aller de 1 à 90 jours selon la source ; la valeur par défaut de Search/Display est indiquée à 30 jours lorsque non personnalisée | [Google Ads, À propos des fenêtres de conversion](https://support.google.com/google-ads/answer/3123169?hl=fr) | Fait produit officiel | Sources et types de conversion compatibles | 2026-07-23 | Élevée | Section cycle de vente long | Vérifier que la fenêtre couvre le délai réel au lieu de supposer que tout contrat sera attribué | Très volatile |
| Le choix de stratégie d'enchères doit partir de l'objectif commercial, par exemple conversions, valeur ou clics | [Google Ads, Déterminer une stratégie d'enchères en fonction de vos objectifs](https://support.google.com/google-ads/answer/6167148?hl=fr) | Principe produit officiel | Choix initial et ajustements de campagne | 2026-07-23 | Élevée | Après le choix du résultat à mesurer | Ne pas choisir une automatisation avant de savoir quel résultat est fiable | Volatile |
| Les noms de certaines stratégies d'enchères ont évolué en 2026 sans nécessairement changer le comportement sous-jacent | [Google Ads, À propos des stratégies d'enchères intelligentes](https://support.google.com/google-ads/answer/7065882?hl=fr), notes de mise à jour | Fait produit daté | Interface 2026 | 2026-07-23 | Élevée | Note de fraîcheur, pas dans la réponse centrale | Préférer les objectifs aux noms d'interface dans le guide | Très volatile |
| Une conversion est une action jugée utile après interaction avec une annonce | [Google Ads, Définition d'une conversion](https://support.google.com/google-ads/answer/6308?hl=fr) | Définition officielle | Mesure Google Ads | 2026-07-23 | Élevée | Première occurrence du mot conversion | Permet de distinguer conversion technique et vente | Stable à surveiller |
| Les conversions améliorées pour prospects utilisent des données first-party hachées et imposent une mise en œuvre conforme aux règles applicables | [Google Ads, À propos des conversions améliorées](https://support.google.com/google-ads/answer/9888656?hl=fr) | Fait produit et limite de conformité | Comptes et mises en œuvre éligibles | 2026-07-23 | Élevée | Limites de mise en œuvre | Ne jamais recommander d'envoyer des données sans vérifier consentement, règles et configuration | Volatile/réglementaire |

### Contradictions et données à ne pas publier

- Aucun CPC, CPL, taux de conversion, durée d'apprentissage, budget minimum ou
  ratio valeur vie client/coût d'acquisition universel : les résultats
  concurrents en publient, mais aucun corpus primaire français, daté et
  comparable n'a été établi pour ce guide.
- Ne pas écrire que Google Ads « fonctionne » ou « ne fonctionne pas » pour
  tous les SaaS. L'existence d'une demande recherchée, le prix, la marge, le
  cycle et le dispositif commercial changent la conclusion.
- Ne pas présenter une demande de démonstration comme une vente ni une valeur
  déclarée dans l'interface comme une marge encaissée.
- Ne pas affirmer qu'un CRM est obligatoire ; la source officielle autorise
  d'autres systèmes, mais une donnée tenue de façon incohérente reste
  inexploitable.
- Ne pas garantir que l'automatisation trouvera de « meilleurs clients » :
  elle dépend des données, du volume, du paramétrage et du marché.
- Ne pas transformer un changement d'interface Google de juin 2026 en règle
  durable ; relire les pages officielles à P3 et P4.
- Ne pas demander ou exposer dans l'article des données personnelles de
  prospects. Le registre public doit rester un modèle de champs, sans exemple
  réel identifiable.

### Calculs reproductibles

Exemple entièrement fictif, destiné à montrer la décision et non à fournir un
benchmark :

```text
Dépense média : 3 600 € HT
Temps et prestation de gestion attribuables au test : 900 € HT
Coût complet du test : 3 600 + 900 = 4 500 € HT
Demandes de démonstration : 30
Prospects acceptés selon la même règle commerciale : 12
Propositions envoyées : 4
Clients signés : 1

Coût par demande = 4 500 / 30 = 150 € HT
Coût par prospect accepté = 4 500 / 12 = 375 € HT
Coût d'acquisition observé par client signé = 4 500 / 1 = 4 500 € HT

Contrôle inverse :
30 × 150 = 4 500 €
12 × 375 = 4 500 €
1 × 4 500 = 4 500 €
```

- Nature du résultat : coût total de test et coûts par étape ; aucun ROI n'est
  calculé sans marge attribuable.
- Horizon et périodicité : une cohorte complète couvrant le cycle observé de
  l'entreprise ; aucune durée universelle.
- Postes inclus une seule fois : média et coût direct de gestion du test.
- Postes exclus ou inconnus, explicitement « à confirmer » : création de la
  page, temps commercial, onboarding, support, remises, impayés, churn,
  hébergement variable, marge future et ventes provenant d'autres canaux.
- Conclusion : un chiffre d'affaires contractuel supérieur à 4 500 € ne suffit
  pas à conclure à la rentabilité. Il faut comparer le coût aux marges
  attribuables et tenir compte du temps avant encaissement et du risque de
  résiliation.
- Contrôle de sensibilité attendu en P2 : montrer que zéro contrat rend le coût
  par client non calculable, et que deux contrats diviseraient le coût observé
  par client par deux sans prouver que ce résultat se répétera.

## 6. Empreinte éditoriale à ne pas reproduire

| Guide | Type d'ouverture | Progression | Dispositif récurrent | Type d'exemple | Place du CTA | Type de conclusion |
| ----- | ---------------- | ----------- | -------------------- | -------------- | ------------ | ------------------ |
| `seo-saas-b2b` | Problème de croissance organique | De la demande aux contenus | Matrice sujet/parcours | Cas SaaS | Fin de guide | Plan de couverture |
| `google-search-ads-ou-performance-max` | Comparaison de deux choix | Critères puis scénarios | Tableau comparatif | Arbitrage de campagne | Après décision | Choix conditionnel |
| `suivi-conversions-google-ads` | Décalage tableau de bord/réalité | Chaîne de mesure | Registre de conversions | Réconciliation | Tardif | Réparer avant d'automatiser |
| `calculer-cout-par-lead-google-ads` | Coût apparent trompeur | Formules et cohortes | Calculs successifs | Chiffrage publicitaire | Tardif | Piloter au bon dénominateur |
| `pourquoi-google-ads-ne-convertit-pas` | Campagne en panne | Diagnostic par causes | Arbre de vérification | Symptôme/correction | Fin | Corriger ou couper |

Choix du nouveau guide :

```text
Tension ou question motrice : trente démonstrations apparaissent dans Ads, mais quel contrat signé leur correspond ?
Type d'ouverture retenu et pourquoi : réunion commerciale avec deux écrans contradictoires, car c'est la situation vécue avant toute méthode
Progression retenue et pourquoi : remonter du contrat signé vers le clic, afin que chaque étape soit justifiée par le résultat final
Artefact signature : registre de cohorte copiable, une ligne par contact et cinq étapes compréhensibles
Rythme/registre de voix : direct, concret, phrases courtes au moment des décisions ; explications plus posées pour les limites
Place naturelle du CTA : après que le lecteur a rempli ou compris son registre et identifié un bon fit
Forme de conclusion : quatre verdicts nommés — financer, réparer, différer, arrêter
Au moins trois différences avec les guides voisins : chronologie inversée depuis le contrat ; scène de réunion commerciale ; exemple complet jusqu'à la première marge ; conclusion en quatre verdicts ; aucun duel de formats de campagne
```

## 7. Plan annoté

| Section provisoire | Question résolue | Preuve ou exemple | Conséquence/décision | Format choisi |
| ------------------ | ---------------- | ----------------- | -------------------- | ------------- |
| Trente demandes de démo ne disent pas combien de clients Google a trouvés | Quelle est la vraie question ? | Scène des deux tableaux de bord ; définition simple de Google Ads et de conversion | Le lecteur choisit entre tester la demande et réparer le suivi | Ouverture narrative + réponse en gras |
| Commencez par le contrat que vous voulez signer | Quel résultat faut-il remonter dans le système ? | Source Google sur conversions hors ligne | Nommer contrat, proposition et prospect accepté avant le formulaire | Frise inversée, mobile |
| Vérifiez que vos clients cherchent réellement le problème | Google peut-il capter cette demande ? | Trois familles à distinguer : problème, solution, marque ; aucune donnée de volume inventée | Lancer un test limité ou privilégier un autre canal | Trois cartes de décision |
| Une demande de démonstration n'est pas encore un bon prospect | Comment appliquer une règle commerciale identique ? | Critères propres au SaaS : entreprise cible, problème, autorité, échéance, contexte ; pas de score universel | Créer une étape « accepté/refusé avec motif » | Exemple commenté |
| Suivez une cohorte jusqu'au contrat, même avec un tableur | Faut-il un CRM complexe ? | FAQ officielle Google ; registre copiable | Installer une discipline minimale avant d'augmenter le budget | Artefact inline |
| Comparez le coût complet à la marge, pas au chiffre d'affaires affiché | Quand continuer devient-il rationnel ? | Exemple fictif 4 500 €, formules et inconnues | Continuer, corriger ou arrêter sans faux benchmark | Bloc calcul vertical |
| Votre cycle est long : adaptez la mesure, pas la vérité | Comment gérer le délai ? | Fenêtres de conversion 1–90 jours selon la source ; import régulier | Vérifier fenêtre et cadence, conserver une lecture CRM indépendante | Checklist datée |
| Trois situations où Google Ads est un mauvais premier choix | Quand ne pas investir ? | Demande inexistante, offre encore indécidable, suivi commercial non tenu | Différer et corriger la cause | Encadré « ne lancez pas encore » |
| Votre verdict en vingt minutes | Quelle décision prend le dirigeant ? | Registre et cinq questions oui/non | Financer, réparer, différer ou arrêter | Séquence d'action |
| Questions restantes | Réponses résiduelles | Sources officielles et renvois ciblés | Évite de diluer le corps | FAQ courte |

FAQ prévue, avec première phrase directe :

1. **Peut-on lancer sans historique de conversions ?** Oui, mais le premier test
   sert alors à apprendre si une demande utile existe ; il ne faut pas promettre
   que l'automatisation saura déjà viser les futurs clients.
2. **La demande de démonstration doit-elle être la conversion principale ?**
   Pas nécessairement : utilisez l'étape la plus proche du résultat que votre
   équipe sait renseigner régulièrement et sans ambiguïté.
3. **Combien de temps faut-il attendre avant de juger ?** Jusqu'à disposer
   d'une cohorte assez avancée dans votre cycle réel, sans laisser cette attente
   masquer un suivi cassé ; aucune durée universelle ne sera publiée.
4. **Faut-il séparer les recherches de marque ?** Oui pour l'analyse, car une
   personne qui connaît déjà la marque ne raconte pas la même acquisition
   qu'une recherche de problème.
5. **Un CRM est-il obligatoire ?** Non : Google indique qu'un autre système,
   dont un tableur, peut convenir ; la qualité et la régularité des statuts
   restent indispensables.

## 8. Ressource et conversion

```text
Une ressource est-elle naturellement nécessaire ? Non en téléchargement pour P1 ; oui sous forme de registre copiable dans la page
Problème qu'elle résout après la lecture : relier chaque contact publicitaire à une étape commerciale et à un résultat économique
Résultat autonome produit : une cohorte lisible permettant de calculer le coût par prospect accepté et par client signé
Format éditable et format de consultation : tableau Markdown/HTML copiable ; aucun fichier téléchargeable promis tant qu'il n'existe pas et n'a pas passé sa QA
Rubriques, champs ou matrices réellement livrés : période/campagne, recherche ou groupe, demande, entreprise cible oui/non, motif, démonstration tenue, proposition, contrat, revenu encaissé, marge à confirmer, coût attribuable, prochaine revue
Exemple rempli : exemple fictif et explicitement étiqueté, sans donnée personnelle
Conclusion « ne pas investir » possible : oui, si la demande n'est pas exprimée, si l'offre n'est pas achetable ou si le suivi ne permet aucune décision
Sources, hypothèses et limites visibles : sources Google près des affirmations ; hypothèses du calcul sous le calcul
Données saisies et destination de ces données : aucune donnée envoyée à Hagnéré Code ; le lecteur copie le modèle dans son propre outil
Processus de génération reproductible : modèle statique dans l'article, formules visibles
Journal de QA (formats, pages, visuel, accessibilité, liens, compatibilité) : produit en P4 ; synthèse en section 12
Limites connues et niveau de revue humaine : ce registre n'établit pas l'attribution causale parfaite et ne remplace pas une revue de confidentialité
Mode de maintenance : contrôle trimestriel des liens Google et avant toute mise à jour de l'interface décrite
Test du fichier ou outil : non applicable ; copie et lecture mobile contrôlées en P4
Bon fit Hagnéré Code : SaaS avec offre compréhensible, demande recherchée, équipe capable de qualifier et économie vérifiable
Mauvais fit : offre non stabilisée, absence de demande explicite, aucune personne pour rappeler/qualifier, besoin d'une vente certaine à très court terme
Action non commerciale : remplir une cohorte existante et identifier la première étape non renseignée
CTA principal et résultat après clic : « Préparer un test Google Ads relié aux contrats signés » vers /demarrer-un-projet ; le clic ouvre le formulaire de cadrage de projet, pas un audit instantané
```

Liens internes secondaires prévus : `/services/publicite-en-ligne`,
`/guides/suivi-conversions-google-ads`,
`/guides/calculer-cout-par-lead-google-ads`,
`/guides/google-search-ads-ou-performance-max` et, seulement si le problème
apparaît après le clic, `/guides/landing-page-google-ads`.

## 9. Rapports de sortie des quatre passes

### Rapport P1 — Recherche

```text
PASSE 1 TERMINÉE
Slug : google-ads-saas-b2b
Lecteur et phrase réelle : dirigeant de SaaS B2B ; « Je paie pour des démos, mais quelles campagnes amènent les entreprises qui signent ? »
Décision : financer, réparer, différer ou arrêter selon la demande, la cohorte et la marge
Angle et forme dominante : remonter du contrat signé vers le clic ; réunion commerciale, registre de cohorte et exemple reproductible
Pages proches et différence : les guides existants couvrent SEO SaaS, formats Google, suivi générique, CPL et panne de conversion ; aucun ne traite le go/no-go SaaS au contrat signé
Sources décisives : documentation Google Ads sur conversions hors connexion, conversions améliorées, fenêtres et stratégie d'enchères
Incertitudes exclues : benchmarks universels, budget minimum, délai garanti, taux de conversion, valeur vie client non prouvée
Action autonome et CTA possible : registre copiable ; CTA vers /demarrer-un-projet pour préparer un test mesurable
Plan : dix sections, progression inversée, quatre verdicts
Snapshot : dossier P1 achevé ; hash/manifeste à consigner par l'orchestrateur après consolidation
```

### Rapport P2 — Rédaction et intégration

```text
P2 TERMINÉE LE 24 JUILLET 2026.
Article rédigé et intégré ; rapport détaillé et snapshot en section 12.
```

### Rapport P3 — Contre-audit indépendant

```text
P3 TERMINÉE LE 24 JUILLET 2026.
Contre-audits final_audit_marketing, anti_ia_final et seo_tech_final consignés en section 12.
```

### Rapport P4 — Plume humaine et contrôle final

```text
P4 TERMINÉE LE 24 JUILLET 2026.
Contrôles de rendu, tests, build et validation éditoriale consignés en section 12.
```

## 10. Historique P1 — revue préparatoire du 23 juillet 2026

> Cette scorecard et les cases ci-dessous photographient l’état avant rédaction.
> Elles ne décrivent plus le statut courant, établi en section 12.

### Scorecard préparatoire conservée

À la clôture de P1, l’article n’existait pas encore et la grille recensait les
preuves à obtenir. La page intégrée a depuis reçu sa scorecard finale.

| Axe         | Note 0-2 | Preuve dans la page | Correction éventuelle |
| ----------- | -------: | ------------------- | --------------------- |
| Intention   | — | État P1 : texte à rédiger | Vérifier l'unicité « SaaS + contrat signé » |
| Décision    | — | État P1 : texte à rédiger | Les quatre verdicts doivent rester explicites |
| Pédagogie   | — | État P1 : texte à rédiger | Tester les termes avec un dirigeant non spécialiste |
| Profondeur  | — | État P1 : texte à rédiger | Couvrir demande, mesure, économie et limites sans tutoriel d'interface |
| Preuve      | — | État P1 : texte à rédiger | Revérifier toutes les pages Google à P3/P4 |
| Comparaison | — | État P1 : texte à rédiger | Comparer les situations, non fabriquer un duel artificiel |
| Originalité | — | État P1 : texte à rédiger | Conserver la chronologie inversée et le registre |
| Style       | — | État P1 : texte à rédiger | Faire la passe anti-abstraction |
| Conversion  | — | État P1 : texte à rédiger | Un seul CTA tardif, résultat et destination explicites |
| SEO/produit | — | État P1 : texte à rédiger | Metadata, maillage, canonique, image et rendu à vérifier |

### Test lecteur non technique

```text
État historique P1 — test par une personne réelle : non
Profil du lecteur : à recruter parmi dirigeants/fondateurs SaaS sans spécialité Ads
Ce qu'il a compris comme réponse : à renseigner
Décision qu'il prendrait : à renseigner
Endroit où il a commencé à survoler : à renseigner
Passage crédible ou trop commercial : à renseigner
Termes ou passages bloquants : à renseigner
Questions encore sans réponse : à renseigner
Corrections appliquées : à renseigner en P4
```

### Contre-audit indépendant

```text
État historique P1 — auteur du contre-audit : non désigné à cette date
Indépendant de la rédaction : à garantir
Réserves sur les sources et calculs : à établir en P3
Réserves sur la clarté et le plan : à établir en P3
Réserves sur la conversion : à établir en P3
Corrections ou justification : à renseigner
État au 23 juillet 2026 : P1 — recherche validée
```

### Vérifications historiques P1

- [ ] les 150 premiers mots passent le contrat de langage humain — à tester sur
      la P2 ;
- [ ] chaque H2 est compréhensible hors contexte — à tester sur la P2 ;
- [ ] cinq phrases abstraites ont passé le test sujet, action, résultat — table
      préparée, à refaire sur le texte réel ;
- [x] aucun mur de lexique n'est prévu avant la réponse ;
- [ ] tableaux ou cartes testés à 390 px sans réponse masquée ;
- [ ] FAQ courtes et CTA formulé comme bénéfice concret dans la page ;
- [x] faits et fraîcheur vérifiés en P1 le 23 juillet 2026 ;
- [x] calcul fictif refait et contrôle inverse documenté ;
- [x] cas fictif explicitement étiqueté ; aucun cas client réel prévu ;
- [x] aucun prix, taux ou résultat de marché non sourcé n'est retenu ;
- [x] aucun incident extrême ne dramatise la décision ;
- [ ] aucune trace d'audit visible dans l'article — à vérifier en P4 ;
- [x] ouverture, progression et conclusion prévues diffèrent des guides voisins ;
- [x] aucune ressource téléchargeable inexistante n'est promise ;
- [ ] metadata, données structurées, registre, maillage et ancres cohérents ;
- [ ] TypeScript, ESLint, tests et build requis passés ;
- [ ] rendu observé aux largeurs prescrites par le workflow ;
- [x] aucune publication ou indexation n'est déclarée dans cette P1.

## 12. Validation finale P2, P3 et P4 — 24 juillet 2026

### Rapport P2 — Rédaction et intégration

- Article complet intégré sur `/guides/google-ads-saas-b2b`, avec ouverture
  destinée au dirigeant, calculs reproductibles, sources Google actuelles,
  exemple fictif signalé, limites, FAQ, maillage et CTA unique.
- Métadonnées, données structurées `Article` et `BreadcrumbList`, image sociale
  dédiée et inscription au registre des guides contrôlées.
- Snapshot : `docs/research/manifests/google-ads-saas-b2b-p2.sha256`.

### Rapport P3 — Contre-audits et corrections

- `final_audit_marketing` : contre-audit indépendant des sources, calculs,
  conversions hors connexion, portée des affirmations et pédagogie dirigeant.
- `anti_ia_final` : passe de plume humaine, suppression des formulations
  mécaniques et vérification de la réponse dans l'ouverture.
- `seo_tech_final` : contrôle indépendant de l'intégration SEO et technique.
- La recommandation Google actuelle sur le suivi avancé des conversions pour
  les prospects a été ajoutée. Aucun P0 ni P1 ne reste.
- Snapshot : `docs/research/manifests/google-ads-saas-b2b-p3.sha256`.

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
  `docs/research/manifests/google-ads-saas-b2b-p4.sha256`.

### Verdict

**Score final : 19/20.** Le fond, la pédagogie, les sources, les calculs, la
conversion et l'intégration sont validés. Un point reste volontairement retiré
car aucun lecteur humain réel indépendant n'a participé au test final.

Statut actuel : publiable — validation éditoriale déléguée

Décision de publication : autorisée explicitement par le commanditaire

Test réalisé par une personne réelle : non

Réserve SEO : la page est techniquement indexable ; indexable ne signifie pas
indexée par Google, et aucune indexation effective ni position n'est promise.
