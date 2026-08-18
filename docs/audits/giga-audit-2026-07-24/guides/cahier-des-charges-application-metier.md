# Audit approfondi — `cahier-des-charges-application-metier`

Date : 24 juillet 2026

Auditeur concurrentiel : audit statique et benchmark web indépendant, sans
modification du guide

Snapshot du guide : SHA-256 calculés le 24/07/2026

- `src/app/guides/cahier-des-charges-application-metier/page.tsx` :
  `4fd7d6b89403d5010df92d2324b834b8b97333123d16cff4a01bf2a4a2ea73b9`
- `src/app/guides/cahier-des-charges-application-metier/opengraph-image.tsx` :
  `6522bed77d1e9f3c296c801874774592c1d3a0512a04f66235d41864c7c704fb`
- `src/lib/guides.ts` :
  `8663e6e84352121ec854393e049492a1c2b72f242166141e5d31e0911b43cb09`
- `docs/research/cahier-des-charges-application-metier.md` :
  `084bc182e85fb8e7b4910a44d280810b86f07caf632849b4c5ad8516c7727661`

## 1. Verdict exécutif

```text
Lecteur exact : dirigeant de TPE/PME, indépendant structuré ou responsable métier
  qui doit remplacer un tableur, des e-mails ou plusieurs ressaisies et qui ne
  sait pas encore s'il faut acheter, relier ou développer.
Question réelle : « Que dois-je donner à plusieurs prestataires pour qu'ils
  chiffrent le même besoin et que je puisse refuser une livraison incomplète ? »
Décision attendue : définir une V1, une alternative à étudier, des preuves de
  recette et les responsabilités avant consultation.
Réponse actuelle en une phrase : partir de scénarios et d'exceptions, puis
  relier données, droits, tests et responsabilités dans un modèle copiable.
Défaut qui coûte le plus de valeur : le lecteur sait mieux décrire le dossier,
  mais ne peut toujours pas mesurer si l'effort est rentable ni comparer des
  offres avec une grille pondérée, un coût complet et les clauses de sortie.
Niveau actuel : B
Priorité : haute
Statut : audité, à réécrire puis contre-auditer
```

### Score avant correction

| Axe | Note /10 | Preuve localisable | Manque décisif |
| --- | ---: | --- | --- |
| Intention | 9 | Promesse et ouverture, lignes 166–169 et 234–271 | La variante « modèle logiciel/SRS » n'est pas nommée comme telle. |
| Décision | 8 | Arbitrage conserver/acheter/relier/configurer/développer, lignes 384–443 | Pas de seuil économique ni de décision « ne rien développer ». |
| Pédagogie | 8 | Gabarits, tableaux et exemple, lignes 460–547 et 922–1023 | Un dirigeant doit encore traduire seul le modèle en choix budgétaire. |
| Profondeur | 8 | Données, droits, migration, continuité, lignes 549–920 | Versioning, changement, propriété/IP et exploitation contractuelle sont incomplets. |
| Preuve | 7 | CNIL, ANSSI, DINUM et RGESN, lignes 531–547 et 799–920 | Corpus essentiellement français ; ISO 29148, NIST SSDF et UK Code non mobilisés. |
| Comparaison | 7 | Feuille de réponse commune, lignes 431–443 | Aucun poids, score, TCO ou comparaison sur 36 mois à périmètre égal. |
| Originalité | 9 | Chaîne scénario → règle → test → preuve et cas fictif, lignes 480–521 et 973–1016 | Pas de mini-cas alternatif pour un indépendant ou une activité commerciale. |
| Style | 8 | Ton direct et jargon expliqué, lignes 234–271 et 586–593 | Densité élevée ; le « modèle d'une page » arrive sans exemple rempli court. |
| Conversion | 7 | Kit gratuit et CTA tardif, lignes 273–275 et 1059–1069 | Aucun cas client vérifiable, preuve de livrable ou qualification visible dans la page. |
| SEO/produit | 7 | Canonical, Article, Breadcrumb, OG, lignes 19–112 | `readTimeMin` à 18 diverge du dossier de recherche (4 528 mots/23 min) ; aucun rendu/URL publique prouvé. |

Total : **78/100**

Registre de priorités : **0 P0, 6 P1, 9 P2**. P0 signifie blocage ou promesse
dangereuse immédiate ; il n'y en a pas sur ce snapshot. Les P1 sont les écarts
qui empêchent une décision professionnelle ou une conversion suffisamment
crédible. Les P2 améliorent la couverture, la compréhension ou la résilience SEO.

## 2. Ce que le guide dit réellement

Dans les 150 premiers mots visibles, la page part d'un cas humain (trois
prestataires comprennent trois projets différents), définit le document et
donne une réponse claire : décrire cinq à huit scénarios, des exceptions et des
critères d'acceptation. Elle retire honnêtement le biais « sur-mesure » en
mentionnant logiciel existant, automatisation et correction de processus
(lignes 234–271). C'est un bon début pour un dirigeant.

La progression est cohérente : modèle d'une page, choix de la V1, scénarios,
données/droits/intégrations, recette, responsabilités, risques puis exemple de
PME de maintenance (lignes 295–319). Les tableaux « formulation faible / critère
vérifiable » et les tests de doublon, panne et contrôle d'accès sont plus utiles
qu'un catalogue d'écrans (lignes 608–680 et 983–1016).

Ce qui paraît complet mais n'aide pas encore assez à décider :

- « cinq à huit scénarios » est une contrainte éditoriale utile, pas une règle
  universelle ni un résultat démontré (lignes 523–529) ;
- le tableau des options compare des logiques, pas des coûts complets, temps
  interne, horizon ou réversibilité (lignes 396–429) ;
- les responsabilités couvrent la réalisation, mais pas explicitement propriété
  du code, licences, hébergement, export contractuel, niveaux de service et
  changement approuvé (lignes 695–783) ;
- l'exemple fictif est excellent pour la recette, mais ne montre ni le budget
  interne, ni le volume qui ferait basculer vers l'existant ou le spécifique ;
- le CTA promet une relecture sans preuve concrète du livrable remis ou du délai
  de restitution (lignes 1059–1069).

## 3. Benchmark France et international

Requêtes benchmark : `cahier des charges application métier`, `modèle cahier
des charges logiciel métier`, `software requirements specification business
application`, `BRD template`, relevé du 24/07/2026. Les pages concurrentes
servent à mesurer la couverture, jamais de preuve de tarif, de conformité ou de
résultat.

| Ressource et URL directe | Pays | Réponse utile | Preuve, outil ou exemple | Limite | Apport à vérifier ou adapter |
| --- | --- | --- | --- | --- | --- |
| [Aktislab — modèle logiciel métier PME](https://www.aktislab.fr/articles/cahier-des-charges-logiciel-metier-modele-pme) | France | Ouverture par une scène de tableur/ressaisie, objectifs, utilisateurs, données, V1 | Exemple de processus et promesse de devis fiable ; page datée 29/05/2026, mise à jour 07/06/2026 | Modèle surtout en rubriques, peu de preuve de recette et de retour arrière | Conserver cette entrée humaine et ajouter une fiche de décision, pas seulement des rubriques. |
| [Axopen — cahier des charges application métier](https://www.axopen.com/blog/2025/02/cahier-des-charges-application-metier-modele/) | France | Modèle et conseil d'agence, granularité fonctionnelle | Questions concrètes sur besoin, rôles et fonctionnalités | Angle prestataire ; moins de contrôle indépendant du devis | Répondre avec un protocole identique pour les candidats et un conflit d'intérêt explicite. |
| [La Fabrique du Net — modèle d'application web](https://www.lafabriquedunet.fr/agences/tendances/modele-de-cahier-des-charges-pour-une-application-web) | France | Formulaire guidé, structure, rôles et intégrations | Parcours de qualification et collecte de besoin | Valeur partiellement derrière l'intermédiation commerciale | Donner tout le modèle dans la page puis proposer le kit, sans capture obligatoire. |
| [France Num — modèles de cahier des charges](https://www.francenum.gouv.fr/guides-et-conseils/developpement-commercial/site-web/modeles-de-cahiers-des-charges-pour-un-site) | France | Trames courtes, objectifs, contraintes, budget, organisation | Plusieurs PDF et grille de prestataire | Site internet, pas processus interne, données et droits | Ajouter une distinction site public / application métier / SRS et reprendre la grille d'évaluation. |
| [Asana — Business Requirements Document](https://asana.com/resources/business-requirements-document-template) | États-Unis | Distingue BRD et exigences fonctionnelles, sept composants | Template PDF, exemple, parties prenantes, contraintes, coût-bénéfice | Outil commercial et exemple marketing ; pas de migration terrain | Ajouter le glossaire BRD/FRD/SRS/PRD et un coût-bénéfice explicitement hypothétique. |
| [TechTarget — SRS](https://www.techtarget.com/searchsoftwarequality/definition/software-requirements-specification) | États-Unis | Exigences vérifiables et exigences non fonctionnelles | Vitesse, disponibilité, sécurité, récupération, interactions réelles | Article de vulgarisation technique, pas de consultation PME | Transformer les exigences non fonctionnelles en tests lisibles par un dirigeant. |
| [Red Eagle — SRS for UK businesses](https://redeagle.tech/blog/software-requirements-specification) | Royaume-Uni | Guide orienté propriétaire non technique, MoSCoW, erreurs, IP et partenaire | Exemples bon/mauvais et modèle téléchargeable | Source commerciale ; affirmation de succès à 97 %/échec à 70 % non retenue faute de preuve primaire | Reprendre les objections, la priorisation et le bloc IP ; retirer toute statistique non sourcée. |
| [GOV.UK — Software Security Code of Practice](https://www.gov.uk/government/publications/software-security-code-of-practice/software-security-code-of-practice) | Royaume-Uni | 14 principes de sécurité et résilience pour éditeurs B2B | Code volontaire, auto-évaluation et usage dans les négociations fournisseur | Destiné aux vendeurs de logiciel ; pas un contrat PME prêt à signer | Ajouter une mini-checklist fournisseur : sécurité, incidents, dépendances, preuve et sortie. |
| [Space-O Canada — SRS template](https://www.spaceo.ca/templates/software-requirements-documentation-template/) | Canada | 18 étapes, version, propriétaire, plateforme, jalons | Modèle Word/Google Docs, test plan et change request liés | Forte orientation lead generation, conseils parfois génériques | Ajouter version/auteur/historique et lien exigence → test → changement. |

**Saturation observée.** Les pages françaises et étrangères savent toutes lister
contexte, utilisateurs, périmètre, fonctions et intégrations. Ajouter un huitième
inventaire de rubriques n'apporterait presque plus d'information. Le gain encore
disponible est décisionnel : quantifier l'intérêt, faire répondre les candidats
sur le même cas, tracer les versions, exiger une preuve, négocier la sortie et
montrer quand l'achat ou l'abstention gagne.

## 4. Matrice de gain d'information

| Question décisive | Meilleure réponse française | Apport international | Couverture actuelle | Manque | Réponse supérieure à produire |
| --- | --- | --- | --- | --- | --- |
| Quel document rédiger ? | France Num parle de trame et de consultation. | Asana distingue BRD/FRD ; TechTarget SRS. | Implicite, jamais nommé comme arbre de documents. | Confusion possible entre besoin métier et spécification technique. | Encadré « BRD, expression de besoin, SRS, backlog : lequel quand ? ». |
| Faut-il développer ? | France Num/ERP invitent à étudier l'existant. | Asana inclut coût-bénéfice ; les guides UK demandent quand ne pas faire un SRS. | Tableau des cinq réponses, sans calcul. | Le dirigeant ne peut pas justifier l'abstention ou l'achat. | Trois scénarios économiques avec hypothèses et seuil de bascule. |
| Un devis est-il comparable ? | Feuille commune proposée dans le guide. | Guides US/UK distinguent scope, contraintes, parties prenantes et changement. | Pas de poids, score, exclusions normalisées ni TCO. | Un prix global peut encore masquer migration, licences et support. | Matrice pondérée + TCO 36 mois + colonne « preuve remise ». |
| Comment accepter ? | Tests Given/When/Then et preuves présents. | SRS internationaux insistent sur exigences vérifiables. | Très bon socle, exemple unique. | Pas de traçabilité complète exigence-règle-test-anomalie. | Identifiant stable, version, statut et registre de changement. |
| Que négocier avec le fournisseur ? | Responsabilités et fin de contrat partiellement traitées. | GOV.UK couvre résilience et négociation fournisseur ; Red Eagle couvre IP. | IP, hébergement, dépendances, données et SLA non structurés. | Risque de verrouillage malgré une bonne recette. | Annexe « propriété, accès, export, incident, réversibilité, maintenance ». |
| Que faire si l'entreprise est petite ? | Exemple PME de maintenance de 18 personnes. | Guides non techniques US/UK proposent des variantes et objections. | Un seul secteur, une seule taille. | Faible identification pour artisan, cabinet ou indépendant. | Trois mini-cas sans sur-promesse : cabinet, commerce B2B, technicien terrain. |
| Les exigences sont-elles actuelles ? | CNIL/ANSSI/RGESN et DINUM consultés. | ISO 29148, NIST SSDF, W3C WCAG 2.2 donnent des repères internationaux. | Corpus surtout français. | Le lecteur international et le fournisseur SaaS manquent de vocabulaire commun. | Sources primaires avec version, date et périmètre, sans transformer un standard en obligation. |

## 5. Faits et fraîcheur

| Affirmation du guide | Verdict | Source primaire actuelle | Périmètre et date | Correction |
| --- | --- | --- | --- | --- |
| Un cahier des charges sert à rendre le besoin et les devis comparables (lignes 244–249). | Confirmé comme méthode, pas comme garantie. | [ISO/IEC/IEEE 29148:2018](https://www.iso.org/cms/%20render/live/en/sites/isoorg/contents/data/standard/07/20/72089.html), réexaminée en 2024 | Standard de requirements engineering, accès au résumé ISO le 24/07/2026. | Citer le standard pour la qualité des exigences, en indiquant qu'il ne force pas un format PME. |
| Cinq à huit scénarios sont une bonne contrainte (lignes 523–529). | Heuristique éditoriale, non fait universel. | Aucune source primaire nécessaire si explicitement présenté comme repère. | Dépend du processus et du risque. | Écrire « point de départ pratique pour ce guide », puis proposer un critère de réduction/extension. |
| Observer les utilisateurs et tester tôt (lignes 531–545). | Confirmé dans le périmètre public. | [DesignGouv](https://design.numerique.gouv.fr/bien-concevoir/) | Méthode de service public, transposition privée explicitement signalée. | Conserver le périmètre et ajouter une observation du travail réel. |
| Minimisation, conservation, sous-traitance et restauration (lignes 799–849). | Confirmé, mais dépendant de la finalité et du secteur. | [CNIL — minimisation](https://www.cnil.fr/fr/minimiser-les-donnees-collectees), [conservation](https://cnil.fr/fr/passer-laction/les-durees-de-conservation-des-donnees), [sous-traitance](https://www.cnil.fr/fr/securite-gerer-la-sous-traitance), [sauvegarde](https://www.cnil.fr/fr/securite-sauvegarder) | Recommandations CNIL, pages à rouvrir lors de chaque mise à jour. | Ajouter une ligne « vérifier l'obligation sectorielle et le DPO/juriste ». |
| Risque, mesure et acceptation ANSSI (lignes 786–894). | Correct comme méthode proportionnée ; pas une homologation universelle. | [ANSSI — homologation](https://cyber.gouv.fr/securisation/homologation-de-securite/) | La page avertit déjà que l'homologation formelle n'est pas universelle. | Conserver la nuance et relier chaque risque à un test et à un responsable. |
| MFA, moindre privilège et restauration testée (lignes 851–877). | Socle raisonnable, insuffisant seul pour un fournisseur logiciel. | [NIST SP 800-218 SSDF](https://csrc.nist.gov/pubs/sp/800/218/final) | SSDF 1.1 final ; une version 1.2 était encore en projet au relevé. | Ajouter un encadré « demander la preuve au fournisseur », sans promettre sécurité absolue. |
| Accessibilité par petit écran, clavier et contraste (lignes 896–904). | Conseil utile, mais sans référentiel ni obligations. | [W3C WCAG 2.2](https://www.w3.org/TR/WCAG22/) | Recommandation W3C du 12/12/2024 ; l'applicabilité juridique varie. | Citer WCAG/RGAA/EN 301 549 selon le canal, puis écrire des tests observables. |
| « Votre première page dans les prochaines 48 heures » (lignes 1025–1049). | Invitatif mais non prouvé et potentiellement perçu comme délai universel. | Aucune. | La durée dépend des utilisateurs, données et disponibilité. | Remplacer par « en une séance de cadrage » ou qualifier « si un dossier réel est accessible ». |
| Lecture 18 minutes (registre, `src/lib/guides.ts:1079–1081`). | À revalider ; le dossier de recherche annonce 4 528 mots et 23 min à 200 mots/min (`docs/research/...:267–271`). | Mesure locale à refaire sur le HTML rendu. | Commande de mesure renvoie HTTP 404 sans serveur local ; aucun temps réel prouvé. | Recalculer après rendu et aligner hero, registre et carte. |

### Contradictions

- Le registre annonce 18 minutes, tandis que le dossier de recherche indique 23
  minutes et 4 528 mots. Ce n'est pas une erreur de fond, mais c'est une
  incohérence produit visible au lecteur (ligne 193 de la page contre
  `src/lib/guides.ts:1081` et le dossier de recherche).
- La recherche affirme un modèle en « sept livrables », alors que l'ouverture
  parle de modèle d'une page puis d'annexes : le lecteur doit voir une carte
  explicite « page de décision + six annexes », sinon le nombre paraît arbitraire.
- La source de recherche a été collectée le 20/07/2026 ; elle ne couvre pas les
  benchmarks US/UK/Canada rouverts le 24/07/2026. Le corpus doit être daté de
  manière homogène lors de la prochaine réécriture.

### Faits à retirer plutôt qu'à affaiblir

- Toute formulation qui ferait croire que cinq à huit scénarios, une page ou 48
  heures constituent une norme de projet.
- Toute statistique de réussite, d'économie ou de délai non reliée à une étude
  primaire et à un périmètre comparable.
- Toute promesse de conformité RGPD, d'invulnérabilité ou de récupération garantie
  simplement parce qu'une case du modèle a été remplie.

## 6. Scénarios et calculs à construire

Le sujet n'exige pas un prix de marché artificiel. Il exige cependant un test de
raisonnement : l'effort de cadrage vaut-il la peine et quelle option couvre le
besoin ? Les montants ci-dessous sont **des hypothèses pédagogiques**, pas des
tarifs Hagnéré Code ni des résultats client.

| Variable | Simple | Central | Exigeant | Source ou hypothèse |
| --- | ---: | ---: | ---: | --- |
| Dossiers/mois concernés | 40 | 180 | 700 | Hypothèse fictive à remplacer par un export réel. |
| Minutes économisées/dossier | 8 | 15 | 25 | Mesure avant/après sur 10 dossiers, pas déclaration. |
| Coût horaire chargé | 35 € | 45 € | 55 € | Hypothèse interne ; salaire, charges et temps indirect varient. |
| Gain brut annuel de temps | 2 240 € | 24 300 € | 192 500 € | Formule ci-dessous, hors erreurs évitées et adoption. |
| Budget total de décision supposé | 12 000 € | 30 000 € | 90 000 € | Enveloppes fictives destinées au test, pas prix de marché. |
| Seuil de retour simple | 5,4 ans | 1,2 an | 0,5 an | Budget / gain brut annuel ; ne remplace pas un TCO. |

```text
Gain brut annuel = dossiers/mois × minutes économisées × 12 × coût horaire / 60
Seuil simple = budget total supposé / gain brut annuel
Horizon recommandé = 36 mois, avec licences, migration, formation, support,
  temps interne, incidents et sortie dans les coûts.
Inclus : temps directement mesuré, périmètre de la V1 et hypothèses annoncées.
Exclus : chiffre d'affaires additionnel, erreurs évitées, marge, fiscalité,
  coût du changement et valeur stratégique tant qu'ils ne sont pas mesurés.
Résultat : le spécifique n'est défendable que si le gain ou le risque évité est
  documenté et si une alternative ne couvre pas les scénarios prioritaires.
Sensibilité : ±25 % sur le volume, le temps économisé et l'adoption ; afficher
  la fourchette, pas seulement le scénario central.
Contrôle inverse : mesurer dix dossiers avant/après et demander « quel volume
  rend l'achat existant moins cher que le développement ? ».
```

Cette grille ajoute une vraie décision sans faire passer des hypothèses pour une
promesse. Le guide actuel ne contient aucun calcul de ce type : c'est un P1,
parce que le lecteur peut produire un excellent dossier pour un projet qui ne
mérite pas son coût.

## 7. Comparaison et position professionnelle

```text
Options réellement comparables : corriger le processus ; conserver le tableur
  avec contrôles ; acheter/configurer un logiciel ; automatiser deux outils ;
  développer une application spécifique.
Périmètre et horizon communs : les mêmes 5–8 scénarios, mêmes volumes et données,
  migration, formation, exploitation et sortie sur 36 mois.
Option la moins chère : souvent corriger/conserver si le risque et le volume sont
  faibles ; à confirmer par mesures, jamais à décréter.
Option la moins risquée : l'existant éprouvé si ses règles, exports et droits
  couvrent réellement le travail ; sinon un lot spécifique limité et réversible.
Option qui demande le moins de temps interne : l'achat/configuration, seulement
  si l'adoption et le nettoyage des données sont budgétés.
Position Hagnéré Code pour le cas fréquent : commencer par le processus et
  l'existant ; le sur-mesure gagne lorsqu'une règle métier, une intégration ou
  une contrainte de contrôle est réellement distinctive.
Faits qui la fondent : scénarios observés, échecs de l'existant, coût mesuré,
  tests d'accès/import/export et capacité de sortie.
Cas où l'option opposée gagne : logiciel existant si 80–90 % des scénarios sont
  couverts sans contournement dangereux ; abstention si le gain est inférieur au
  coût de changement ; no-code si le volume et la criticité restent maîtrisables.
Signal de révision : volume doublé, nouvelle donnée sensible, intégration
  indisponible, adoption sous 70 %, ou anomalie bloquante répétée.
Ce que nous déconseillons même si nous pourrions le vendre : coder avant de
  mesurer, choisir une technologie dans le cahier des charges sans raison, et
  promettre une conformité ou un retour arrière non testé.
```

Le comparatif à ajouter doit garder exactement le même périmètre : prix initial,
abonnement/licences, migration, formation, temps interne, maintenance, risques,
propriété des données, réversibilité et preuve de recette. Comparer seulement
trois devis « 30 k€, 45 k€, 60 k€ » serait trompeur.

## 8. Objections et cas limites

| Objection loyale | Réponse prouvée | Ce qui reste incertain | Conséquence |
| --- | --- | --- | --- |
| « Je n'ai pas le temps de rédiger. » | Rejouer un dossier réel et remplir une page, puis faire relire par l'opérationnel (lignes 280–291 et 1027–1039). | Disponibilité réelle des équipes. | Proposer une séance cadrée, pas promettre 48 h. |
| « Le prestataire peut tout écrire. » | Il peut animer et reformuler, mais l'entreprise doit arbitrer objectifs, exceptions et acceptation (lignes 123–126 et 695–704). | Qualité du métier transmis si l'utilisateur n'est pas présent. | Exiger signataire métier et décideur. |
| « Nous travaillons en agile, donc aucun cahier des charges. » | Les scénarios, résultats et tests peuvent rester stables alors que les écrans évoluent (FAQ, lignes 134–138). | Le niveau de détail d'une équipe à l'autre. | Ajouter version, backlog dérivé et règle de changement. |
| « Je connais déjà la technologie. » | Lignes 388–426 demandent d'étudier l'existant et de justifier le spécifique. | Contrainte réelle du SI ou d'un éditeur. | Mettre la technologie en contrainte justifiée, non en solution réflexe. |
| « Il me faut 100 pages pour être sérieux. » | Le modèle vise une page décisionnelle et des annexes seulement utiles (lignes 322–338). | Projet réglementé ou multi-intégrations. | Mesurer la complétude par preuves, pas par nombre de pages. |
| « Nous sommes trop petits pour la sécurité. » | CNIL/ANSSI demandent une approche proportionnée, pas une sécurité absolue (lignes 791–894). | Niveau de risque et obligations sectorielles. | Ajouter au moins accès, sauvegarde, incident, sortie et responsable. |
| « Je veux un prix aujourd'hui. » | Un prix n'est comparable qu'avec mêmes hypothèses, exclusions et tests (lignes 431–443). | Devis exploratoire possible mais très incertain. | Envoyer une phase de cadrage séparée plutôt qu'un faux forfait. |
| « Un ERP existe déjà. » | Le guide demande de l'étudier avant le spécifique (lignes 384–429). | Couverture réelle des exceptions, coûts de licence et verrouillage. | Faire un mini-benchmark avec données et cas réels. |
| « Je ne peux pas transmettre nos données. » | Le guide prévoit des dossiers anonymisés et une matrice de données (lignes 280–284 et 560–583). | Anonymisation suffisante selon la sensibilité. | Prévoir échantillon synthétique, NDA et responsable des données. |
| « Une sauvegarde suffit. » | La CNIL exige un test d'intégrité/restauration, et la page le traduit déjà (lignes 624–626 et 779–783). | Fréquence et RPO/RTO propres au métier. | Exiger preuve datée et exercice de reprise. |

## 9. Plan de réécriture

| Ordre | Section proposée | Question résolue | Preuve, scénario ou outil | Décision produite | À conserver / créer / couper |
| ---: | --- | --- | --- | --- | --- |
| 1 | Ouverture « le devis n'est pas le besoin » | « Pourquoi mes trois devis diffèrent-ils ? » | Même scène + réponse en 3 phrases + verdict | Lire ou quitter | Conserver lignes 234–271, raccourcir les répétitions. |
| 2 | Quel document faut-il réellement ? | « BRD, expression de besoin, SRS ou backlog ? » | Arbre BRD/FRD/SRS/PRD/backlog, sources ISO/Asana | Choisir le bon niveau | Créer ; ne pas imposer de jargon. |
| 3 | Page de décision remplie | « Que dois-je écrire aujourd'hui ? » | Exemple de cabinet, commerce ou maintenance | Passer à l'atelier | Conserver le FormulaBox, créer un exemple ligne par ligne. |
| 4 | V1 et alternatives | « Acheter, relier ou développer ? » | Tableau actuel + critères d'arrêt + coût-bénéfice | Continuer ou stopper | Conserver le tableau, créer test économique simple/central/exigeant. |
| 5 | Scénarios et exceptions | « Comment raconter le vrai travail ? » | Cas nominal + panne + doublon + absence de validateur | Prioriser | Conserver le gabarit et le cas maintenance, ajouter deux mini-cas. |
| 6 | Matrice fournisseur pondérée | « Comment comparer deux offres ? » | 100 points : couverture 30, preuves 20, TCO 20, sécurité 10, équipe 10, sortie 10 | Choisir ou demander clarification | Créer ; couper les injonctions non mesurables. |
| 7 | Recette et traçabilité | « Quand puis-je accepter et payer ? » | ID exigence → test → preuve → anomalie → version | Accepter, corriger ou refuser | Conserver lignes 595–693, ajouter registre de changement. |
| 8 | Contrat et réversibilité | « Que se passe-t-il si le projet ou le fournisseur change ? » | IP, code, données, hébergement, incident, SLA, export, sortie | Signer avec garde-fous | Créer ; relier au guide TMA. |
| 9 | Sécurité/accessibilité internationales | « Que demander sans être expert ? » | CNIL/ANSSI + NIST SSDF + WCAG 2.2 + UK Code | Adapter au risque | Conserver les nuances, ajouter références et tests. |
| 10 | Décision finale et CTA honnête | « Quelle est ma prochaine action ? » | Checklist 30 minutes, bon/mauvais fit, livrable de relecture | Télécharger ou demander une revue | Conserver le CTA, ajouter livrable, limites et preuve vérifiable. |

### Contrat des 150 premiers mots

Nommer le dirigeant, sa scène de ressaisie ou de validation bloquée, la question
« acheter, relier ou développer ? », puis donner la réponse courte : un dossier
utile décrit le résultat et les cas qui le prouvent, pas les écrans. Annoncer le
livrable de la page (une fiche, une matrice et un test) et la limite : aucun modèle
ne remplace une analyse juridique, sécurité ou sectorielle.

### Éléments à supprimer

- l'impératif temporel « prochaines 48 heures », sauf s'il est présenté comme
  une séance possible sous hypothèses explicites ;
- les formulations répétant « comparer les offres » sans montrer la grille, le
  poids ou le coût complet ;
- toute impression que cinq à huit scénarios est une norme de conformité ;
- le nombre de minutes non recalculé dans le registre.

### Éléments à conserver

- l'ouverture humaine et le refus explicite du sur-mesure automatique ;
- le modèle copiable et la feuille de réponse commune ;
- les exceptions, tests de droits, doublons, pannes et migrations ;
- l'exemple fictif clairement signalé et le CTA tardif qualifiant.

## 10. Contre-audit après correction

Aucune correction n'a été appliquée dans cette mission (audit demandé en lecture
seule). La contre-validation est donc **non réalisée** ; le tableau ci-dessous
est un registre d'actions, pas une preuve de correction.

| Problème | Priorité | Correction appliquée | Revalidation indépendante |
| --- | --- | --- | --- |
| Aucun calcul de décision économique | P1 | Aucune | À faire avec trois hypothèses, formule et mesure d'un dossier réel. |
| BRD/FRD/SRS/backlog non distingués | P1 | Aucune | À relire par un dirigeant non technique. |
| Comparaison sans poids/TCO/36 mois | P1 | Aucune | Refaire deux offres fictives à périmètre constant et vérifier le verdict. |
| Version, changement, IP et réversibilité incomplets | P1 | Aucune | Vérifier une annexe contractuelle avec juriste/prestataire. |
| Corpus international absent | P1 | Aucune | Rouvrir ISO, NIST, W3C et GOV.UK à la date de publication. |
| CTA sans preuve de livrable ou cas | P1 | Aucune | Contrôler le formulaire et le livrable réellement envoyé en environnement de test. |
| Exemple unique | P2 | Aucune | Test de compréhension avec trois profils métiers. |
| Accessibilité sans critères testables | P2 | Aucune | Ajouter WCAG/RGAA/EN 301 549 selon le canal et exécuter les tests. |
| « 48 heures » non sourcé | P2 | Aucune | Remplacer ou qualifier ; contre-lecture humaine. |
| Lecture 18/23 minutes incohérente | P2 | Aucune | Rendu HTML, recomptage et alignement du registre. |
| Carte « sept livrables » pas assez visible | P2 | Aucune | Relier visuellement la page de décision aux six annexes et au kit. |
| Cas de maintenance unique | P2 | Aucune | Ajouter deux mini-cas contrastés, sans inventer de résultat client. |
| Date du corpus de recherche non alignée avec le benchmark | P2 | Aucune | Date, version et événement de revalidation dans le dossier de recherche. |
| OG déclarée mais non inspectée en rendu réel | P2 | Aucune | Générer 1200 × 630 et contrôler lisibilité, contraste et recadrage. |
| Après téléchargement, prochaine action peu explicitée | P2 | Aucune | Ajouter une checklist post-kit et un lien vers la revue, sans pression commerciale. |

### Score après correction

Non calculable : **aucun fichier guide, registre ou ressource n'a été modifié**.
La cible de sortie est **92/100 minimum**, avec Intention, Décision, Pédagogie,
Profondeur, Preuve et Comparaison à 9/10 ou davantage. Un score cible ne vaut pas
validation ; il devra être obtenu après réécriture, test humain et QA navigateur.

## 11. Preuves techniques et visuelles

```text
Manifeste : le registre contient le guide à src/lib/guides.ts:1069–1081 ;
  canonical, Article, Breadcrumb et OG sont définis dans page.tsx:19–112.
Calculs refaits : hash SHA-256 ; wc -l (page 1 196 lignes, OG 235, recherche 284)
  et 4 882 mots source actuels ; aucun calcul économique existant dans la page.
  Les 4 528 mots visibles et 23 minutes mentionnés ailleurs sont l'ancien
  recomptage déclaré par le dossier de recherche (docs/research/...:267–271),
  pas le comptage actuel de cet audit. Les scénarios chiffrés de cet audit sont
  des hypothèses proposées, non des chiffres publiés.
Sources rouvertes : Aktislab, Asana, Red Eagle, GOV.UK, Space-O, ISO 29148,
  NIST SP 800-218 et W3C WCAG 2.2 ; sources françaises déjà liées dans la page.
Liens vérifiés : URLs de benchmark rouvertes par recherche web ; les liens du
  HTML local n'ont pas tous été testés par curl dans cette passe.
Commandes : npm run check:seo → 35 fichiers, 229 tests, tous passés (2,13 s) ;
  npm run measure:guide-readtime -- cahier-des-charges-application-metier
  → HTTP 404, aucun serveur local de route dans cette session.
Rendu 320 / 390 / 768 / 1024 / 1440 : non exécuté ; aucune affirmation de QA
  responsive ne doit être publiée sur cette base.
Image sociale : source OG locale présente ; dimension déclarée 1200 × 630 dans
  opengraph-image.tsx:17–18 ; rendu PNG réel non inspecté dans cette passe.
Ressource : ZIP et trois fichiers présents sous
  public/ressources/kit-cahier-des-charges-application-metier/ ; manifeste et
  tailles déclarées dans src/lib/resources.ts:131–203 ; QA du kit datée 20/07/2026.
Statut maximal prouvé : audit statique + tests SEO du dépôt + existence des
  artefacts locaux. Pas de preuve de build complet, route HTTP, production,
  sitemap distant, indexation Google, conversion ou lecture humaine indépendante.
Réserve publication / indexation : corriger les P1, aligner le temps de lecture,
  exécuter le build et la QA navigateur, puis vérifier l'URL publique. Index/follow
  ne signifie pas indexation effective.
```
