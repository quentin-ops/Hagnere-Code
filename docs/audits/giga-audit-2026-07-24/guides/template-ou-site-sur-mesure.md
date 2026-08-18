# Audit approfondi — `template-ou-site-sur-mesure`

Date : 24 juillet 2026

Auditeur concurrentiel : Codex — cellule `corpus_inventory`

Snapshot du guide : `3d5efb06caca134fc1861d9c7237e8edea79a2ea49d3222bd31c05e3add79aa1`

Périmètre : audit éditorial, décisionnel, concurrentiel et factuel. Aucune
page publique, aucun fichier partagé, aucun registre et aucun manifest n'a été
modifié.

## 1. Verdict exécutif

```text
Lecteur exact : dirigeant ou indépendant qui reçoit un devis basé sur un modèle et un autre annoncé « sur mesure », sans savoir ce que le surcoût achète réellement.
Question réelle : faut-il corriger l'existant, utiliser un template, personnaliser une base standard ou financer une conception spécifique ?
Décision attendue : choisir le niveau minimum qui satisfait l'objectif, reste maintenable et justifie son coût total sur trois ans.
Réponse actuelle en une phrase : un template convient aux besoins courants, une personnalisation aux différences ciblées et le sur-mesure seulement aux parcours ou fonctions qui sortent réellement du standard.
Défaut qui coûte le plus de valeur : le guide parle de coûts sans publier un seul montant illustratif, un TCO commun ou un seuil de bascule ; « ce que vous payez » reste une liste.
Niveau actuel : B
Priorité : haute
Statut : audité — réécriture P2 nécessaire avant contre-audit
```

Le faux duel est bien démonté et le template n'est jamais rabaissé. La page
donne quatre choix, traite les contenus, l'autonomie, la qualité, les licences
et la sortie. Pourtant, elle ne tient pas encore sa promesse de comparer
« budget, liberté, autonomie et entretien » : aucun devis n'est rempli, aucun
temps de mise à jour n'est valorisé et aucun coût de sortie n'est calculé.
Pour devenir la meilleure réponse francophone, elle doit montrer que le
sur-mesure perd sur un site courant et ne gagne que lorsqu'un écart prouvé
rembourse réellement son surcoût ou protège un enjeu non financier décisif.

### Score avant correction

| Axe | Note /10 | Preuve localisable | Manque décisif |
| --- | ---: | --- | --- |
| Intention | 8 | L'ouverture met en scène deux devis et pose exactement la question du surcoût (`page.tsx:226-248`). | La réponse n'annonce ni horizon de coût ni test de la différence à financer. |
| Décision | 8 | Quatre décisions, puis un arbre final simple, rendent le verdict visible (`page.tsx:272-315`, `684-719`). | Deux devis plausibles ne peuvent pas être classés faute de poids et de TCO. |
| Pédagogie | 8 | Template, personnalisation et sur-mesure sont expliqués en français courant. | Les couches contenu/design/fonctions/administration/plateforme ne sont pas explicitement séparées dans un outil unique. |
| Profondeur | 7 | Contenus, design, développement, recette, licences, autonomie, maintenance et sortie sont évoqués. | Coût interne, dépendances, reprise de données, dette de personnalisation, disponibilité et test de migration restent sans démonstration. |
| Preuve | 7 | WordPress, Google, W3C, CNIL et Wix apparaissent en sources (`page.tsx:733-864`). | Les sources sont concentrées en fin de page ; prix et fonctions actuelles de plateformes ne sont ni datés ni appliqués au verdict. |
| Comparaison | 6 | Les quatre voies et les postes de devis sont comparés avec un périmètre conceptuel cohérent. | Aucun scénario identique, TCO, calcul de sensibilité ni cas chiffré où chaque voie gagne. |
| Originalité | 7 | Le continuum de quatre issues et le refus du prestige technique sont utiles. | L'outil promis par le dossier de recherche — registre des écarts irréductibles — n'existe pas dans la page finale. |
| Style | 8 | Ton professionnel, humain et non méprisant envers le standard. | Plusieurs listes pourraient être remplacées par un cas continu qui donne du rythme et de la preuve. |
| Conversion | 8 | Le guide peut recommander correction ou template et le CTA parle de comparer avant signature (`page.tsx:721-731`). | Le livrable de l'échange n'est pas nommé et le mauvais fit commercial reste implicite. |
| SEO/produit | 8 | Metadata, FAQ, maillage et données structurées couvrent bien la requête. | Les intentions « coût template vs sur mesure », « TCO site », « faux sur mesure », « coût maintenance » et « export site » restent insuffisamment satisfaites. |

Total : **75/100**

## 2. Ce que le guide dit réellement

- L'ouverture répond correctement au faux duel et ajoute l'option de conserver
  le site actuel.
- Quatre décisions sont présentées : corriger, template, base standard
  personnalisée, conception sur mesure.
- Le choix part du rôle du site et des pages réellement nécessaires.
- Un template est décrit comme professionnel possible, avec contenus, photos,
  identité et hiérarchie propres à l'entreprise.
- La personnalisation ciblée est distinguée d'un développement entièrement
  spécifique.
- Le sur-mesure est réservé aux catalogues complexes, parcours multiples,
  intégrations et administrations propres.
- Le guide dit justement qu'un projet spécifique réutilise toujours des
  briques standard.
- Les postes payés, les questions de devis, la recette et la sortie sont bien
  inventoriés.
- Ce qui paraît complet mais ne décide pas : les tableaux restent sans nombres,
  aucune plateforme actuelle n'est comparée, aucun coût interne n'est valorisé,
  et la page ne mesure pas combien d'heures de contournement justifieraient la
  personnalisation.

## 3. Benchmark France et international

Requêtes, pays, langues et date :

- France, français, 24 juillet 2026 : `template ou site sur mesure`, `site
  vitrine template personnalisé coût`, `site sur mesure prix maintenance`,
  `comment comparer devis site`.
- États-Unis, anglais, 24 juillet 2026 : `template vs custom website total
  cost`, `website builder export code CMS`, `custom web design ownership`.
- Royaume-Uni, anglais, 24 juillet 2026 : `template vs bespoke website five
  year cost`, `reuse design system components`, `buy reuse build website`.
- Australie, anglais, 24 juillet 2026 : `business website template custom
  design`, `don't reinvent the wheel digital service`.

Saturation : les concurrents opposent presque tous rapidité/prix du template à
différenciation/flexibilité du sur-mesure. Les documentations officielles
ajoutent trois dimensions moins bien couvertes : restrictions réelles
d'export, coût des plans et risque de maintenir des composants fortement
modifiés. Après les marchés français, américain, britannique et australien,
les nouvelles pages répétaient le duel sans calcul supplémentaire. Le gain
d'information décisif devient donc : **un même site fictif, quatre TCO sur 36
mois, un registre des écarts et les heures mensuelles qui font basculer la
décision**.

| Ressource et URL directe | Pays | Réponse utile | Preuve, outil ou exemple | Limite | Apport à vérifier ou adapter |
| --- | --- | --- | --- | --- | --- |
| [France Num — combien payer pour un site Web](https://www.francenum.gouv.fr/guides-et-conseils/developpement-commercial/site-web/combien-payer-pour-un-site-web-ou-un-site-e) | France | Présente plusieurs voies selon budget, compétences et temps. | Source publique destinée aux petites entreprises. | Page ancienne et ordres de grandeur à revalider ; ne traite pas finement la personnalisation. | Conserver l'option simple et séparer abonnement, prestation et temps interne. |
| [Morgane Marie — template ou site sur mesure](https://www.morganemarie.com/template-ou-site-sure-mesure/) | France | Répond directement avec budget, marque et maturité. | Ton humain et cas de petites activités. | Prestataire qui vend la conception ; peu de preuves et pas de TCO reproductible. | S'inspirer des situations, pas des tarifs ni du verdict. |
| [Spread — site sur mesure ou template](https://spread-communication.com/blog/site-internet-sur-mesure-ou-template/) | France | Couvre image, SEO, conversion et durée. | Bonne cartographie des craintes françaises. | Intérêt commercial pour le sur-mesure et affirmations de rendement non démontrées. | Contredire explicitement « sur-mesure = meilleur SEO/conversion ». |
| [WordPress — travailler avec les thèmes](https://wordpress.org/documentation/article/work-with-themes/) | International | Explique qu'un thème porte la présentation du contenu. | Documentation primaire du CMS. | WordPress uniquement. | Séparer contenu, logiciel, thème et adaptations. |
| [WordPress — thèmes enfants](https://developer.wordpress.org/themes/advanced-topics/child-themes/) | International | Montre comment isoler certaines modifications d'un thème parent. | Documentation technique primaire et limites des personnalisations étendues. | Ne garantit ni bonne architecture ni mise à jour sans régression. | Ajouter un test de mise à jour et le coût de maintenance des adaptations. |
| [Wix — exporter ou héberger ailleurs](https://support.wix.com/en/article/exporting-or-embedding-your-wix-site-elsewhere) | États-Unis | Documente qu'un site Wix doit fonctionner sur l'infrastructure Wix. | Source produit primaire. | Spécifique à Wix ; les contenus ou domaines ne se confondent pas avec le site exécutable. | Faire tester la sortie au lieu d'écrire « exportable » dans l'abstrait. |
| [Webflow — plans et tarifs](https://webflow.com/pricing) | États-Unis | Rend visibles plans Site, limites et options. | Au 24 juillet 2026 : Basic 15 USD/mois annuel et Premium 25 USD/mois annuel affichés, avec plans Workspace/add-ons distincts. | Prix en USD, taxes et besoins d'agence non inclus ; offre évolutive. | Montrer qu'un abonnement de plateforme n'est pas le prix du site. |
| [Webflow — export du code](https://help.webflow.com/hc/en-us/articles/33961386739347-How-do-I-export-my-Webflow-site-code) | États-Unis | Distingue code statique exporté et CMS, e-commerce, comptes ou composants non exportés. | Documentation produit mise à jour le 31 octobre 2025. | L'export nécessite un plan Workspace payant et ne reconstitue pas tout le service. | Transformer « export » en exercice de reprise vérifiable. |
| [GOV.UK — Technology Code of Practice](https://www.gov.uk/guidance/the-technology-code-of-practice) | Royaume-Uni | Demande besoins, réutilisation, intégration, achat et cycle de vie. | Référence publique mise à jour en juillet 2025. | Cadre du gouvernement britannique, non obligation pour une PME française. | Adopter la discipline « réutiliser sans masquer les limites ». |
| [GOV.UK Design System — modifier des composants](https://design-system.service.gov.uk/get-started/extending-and-modifying-components/) | Royaume-Uni | Explique qu'une modification peut casser une mise à jour ou réduire l'accessibilité. | Exemple primaire concret de dette de personnalisation. | Composants GOV.UK particuliers. | Créer le seuil : adaptation isolée, testée et maintenable ou composant séparé. |
| [business.gov.au — set up a business website](https://business.gov.au/online-and-digital/business-website/set-up-a-business-website) | Australie | Part des objectifs, distingue CMS cloud/self-hosted et template/design propre. | Guide public pour entreprises. | Contexte australien et niveau introductif. | Renforcer le choix par objectif et responsabilité de maintenance. |
| [Digital.gov.au — Digital Service Standard](https://www.digital.gov.au/policy/digital-experience/digital-service-standard) | Australie | « Don't reinvent the wheel », connaître l'utilisateur, mesurer et maintenir. | Standard public actuel. | Services publics australiens. | Utiliser comme principe de réutilisation, pas comme obligation française. |
| [W3C WAI — modèle de rapport d'évaluation](https://www.w3.org/WAI/test-evaluate/report-template/) | International | Rappelle qu'une évaluation d'accessibilité combine contrôles automatiques et manuels sur un périmètre réel. | Source du standard. | Ne choisit aucune plateforme. | Refuser « thème accessible » sans test du site livré. |
| [Google Search Central — expérience sur la page](https://developers.google.com/search/docs/appearance/page-experience) | International | Replace performance et expérience parmi plusieurs systèmes et signaux. | Source primaire Google. | Ne compare ni template ni développement propre. | Attribuer « aucune prime automatique au sur-mesure » comme déduction, pas citation directe. |

## 4. Matrice de gain d'information

| Question décisive | Meilleure réponse française | Apport international | Couverture actuelle | Manque | Réponse supérieure à produire |
| --- | --- | --- | --- | --- | --- |
| Existe-t-il vraiment deux options ? | Les meilleurs guides français admettent personnalisation intermédiaire. | Business.gov.au distingue CMS, template et design propre. | Quatre choix clairement posés. | Pas de niveau « page pilote » ni de registre couche par couche. | Conserver quatre issues mais noter contenu, architecture, interface, fonctions et exploitation séparément. |
| Qu'est-ce qui sera réellement sur mesure ? | Les pages françaises restent souvent vagues. | GOV.UK montre réutilisation et extension contrôlée de composants. | Une liste d'exemples. | Aucun inventaire remis au lecteur. | Registre : élément, base réutilisée, adaptation, raison, test, maintenance et droit de reprise. |
| Un template est-il moins professionnel ? | Le guide répond non, avec contenus et photos propres. | Les sources publiques partent de l'objectif, pas du prestige technique. | Très bonne. | Aucun exemple annoté de page standard rendue distinctive par le fond. | Montrer une même page avant/après : message, preuve, photos, hiérarchie, pas animation. |
| Le sur-mesure améliore-t-il le SEO ou la conversion ? | Les concurrents le laissent souvent entendre. | Google ne donne aucune prime au mode de production ; W3C exige un test réel. | Le guide refuse la causalité. | Pas de démonstration chiffrée ni protocole A/B prudent. | Calculer le seuil économique d'une amélioration hypothétique sans la promettre. |
| Quel est le coût total sur trois ans ? | France Num traite familles de budget ; pages agence donnent des prix non comparables. | Orchestrix et les guides UK introduisent temps, maintenance et sortie. | Liste de postes seulement. | Zéro montant et zéro calcul. | Quatre TCO fictifs sur 36 mois avec mêmes pages, contenus, support et sortie. |
| À quel moment une personnalisation devient-elle fragile ? | Peu de pages le montrent concrètement. | WordPress et GOV.UK documentent héritage, modifications et risque de mise à jour. | Avertissement qualitatif. | Aucune heure mensuelle de contournement ni test de mise à jour. | Calculer le point mort en heures et exécuter une mise à jour en préproduction. |
| Peut-on réellement quitter la plateforme ? | Le guide mentionne Wix et l'export. | Webflow distingue code exporté et fonctionnalités non exportées. | Bonne question, réponse générale. | Pas d'exercice ni inventaire de ce qui manque après export. | Recette de sortie : domaine, pages, médias, CMS, formulaires, redirections, comptes et redéploiement. |
| Qui possède thème, code et contenus ? | Les contenus français simplifient souvent. | Les documentations séparent licence du logiciel, actifs et abonnement. | FAQ prudente. | Pas de tableau actif → propriétaire → licence → livraison. | Ajouter un inventaire contractuel et renvoyer au juriste si enjeu. |
| Faut-il refaire le site actuel ? | Le guide donne l'option de corriger. | GOV.UK recommande d'examiner l'existant et de prototyper avant remplacement. | Bonne couverture. | Aucun mini-audit chiffré ni page pilote. | Comparer correction d'une page et reconstruction avant de généraliser. |
| Le site livré est-il réellement meilleur ? | Le guide donne une checklist. | W3C, Google et GOV.UK imposent mesure et tests réels. | Forte liste de recette. | Pas de valeurs de départ, responsables, seuils propres ni test de sortie. | Procès-verbal avant/après : tâches, mobile, formulaire, publication, performance, accessibilité et reprise. |

## 5. Faits et fraîcheur

| Affirmation du guide | Verdict | Source primaire actuelle | Périmètre et date | Correction |
| --- | --- | --- | --- | --- |
| Un thème WordPress contrôle la présentation du contenu. | Confirmé dans ce périmètre. | [WordPress — Work with themes](https://wordpress.org/documentation/article/work-with-themes/) | WordPress, documentation vivante rouverte le 24 juillet 2026. | Conserver sans généraliser à toutes les plateformes. |
| Un thème enfant peut isoler des modifications, mais une personnalisation très étendue devient difficile à gérer. | Confirmé et nuancé. | [WordPress — child themes](https://developer.wordpress.org/themes/advanced-topics/child-themes/) | WordPress uniquement. | Ajouter test de mise à jour et coût de maintenance plutôt qu'un verdict automatique. |
| Wix ne permet pas d'exporter le site pour l'héberger ailleurs. | Confirmé pour le service exécutable Wix. | [Wix Help Center](https://support.wix.com/en/article/exporting-or-embedding-your-wix-site-elsewhere) | Produit Wix actuel. | Préciser que domaine, données ou contenus doivent être inventoriés séparément ; ne pas généraliser. |
| Webflow permet d'exporter tout le site et de le reprendre tel quel. | Faux si formulé ainsi. | [Webflow — export code](https://help.webflow.com/hc/en-us/articles/33961386739347-How-do-I-export-my-Webflow-site-code) | Code statique exportable sous condition ; CMS, e-commerce, comptes et fonctions exclus. | Écrire exactement ce qui sort et faire un test de redéploiement. |
| Google classe un site indépendamment de l'étiquette template/sur-mesure. | Déduction raisonnable, pas formulation officielle directe. | [Google — page experience](https://developers.google.com/search/docs/appearance/page-experience) et documentation technique. | Google décrit signaux et exigences, pas un bonus par méthode de fabrication. | Dire qu'aucune source Google consultée ne soutient une prime automatique ; tester le résultat réel. |
| Un template est automatiquement rapide, accessible ou mobile. | Faux comme absolu. | [W3C — évaluation](https://www.w3.org/WAI/test-evaluate/report-template/) et Google. | Le site final, ses contenus et adaptations doivent être testés. | Conserver les critères de recette et retirer toute qualité « par nature ». |
| Une conception sur mesure réinvente tout le code. | Faux. | [GOV.UK — gérer les dépendances](https://www.gov.uk/service-manual/technology/managing-software-dependencies) | Réutilisation de bibliothèques, composants et services. | Conserver l'explication actuelle ; exiger la liste standard/spécifique. |
| Les droits sur thème, maquettes, code et contenus dépendent des licences et du contrat. | Confirmé comme prudence générale. | Licences produit et contrat applicable ; analyse juridique au cas par cas. | France et produits concernés. | Ajouter inventaire ; ne pas fournir de conclusion de propriété sans lecture du contrat. |
| Une plateforme fermée peut imposer une reconstruction lors de la sortie. | Confirmé pour certains produits, pas universel. | Wix et limites d'export Webflow. | Dépend du service et de ce que « reprendre » signifie. | Remplacer la généralité par trois tests de sortie documentés. |

### Contradictions

- Un template peut être une base maintenue et accessible, puis devenir fragile
  à cause d'adaptations locales. Le verdict porte sur le résultat et la
  discipline de modification, pas sur l'origine du thème.
- Un site sur mesure est présenté comme « unique » tout en reposant
  nécessairement sur bibliothèques, hébergement et services tiers.
- Un export de pages ou de code n'est pas une migration opérationnelle si CMS,
  formulaires, comptes, données ou fonctions restent absents.
- Un abonnement peu élevé peut cacher beaucoup de temps interne ; un coût
  initial élevé peut rester injustifié si le site ne demande que des pages
  courantes.
- La distinction visuelle peut aider la marque, mais elle ne garantit ni
  compréhension, ni SEO, ni demande commerciale.

### Faits à retirer plutôt qu'à affaiblir

- Tout prix universel du template ou du sur-mesure sans corpus et périmètre.
- Toute promesse de meilleure conversion due au caractère unique du design.
- Toute équivalence plateforme ouverte = sortie facile.
- Toute affirmation thème = sécurité, accessibilité, rapidité ou SEO.
- Tout seuil de pages à partir duquel le sur-mesure serait automatiquement
  préférable.

## 6. Scénarios et calculs à construire

Tous les montants sont des **exemples illustratifs fictifs**. Ils ne décrivent
ni un tarif Hagnéré Code ni une moyenne de marché. Le lecteur remplace chaque
hypothèse par ses devis.

### 6.1 Tester une page avant de reconstruire le site

| Poste | Corriger la page actuelle | Concevoir une nouvelle page spécifique |
| --- | ---: | ---: |
| Analyse et message | 6 h × 95 € = 570 € | 10 h × 95 € = 950 € |
| Rédaction/contenus | 8 h × 80 € = 640 € | 12 h × 80 € = 960 € |
| Design/intégration | 10 h × 95 € = 950 € | 28 h × 95 € = 2 660 € |
| Temps interne | 4 h × 45 € = 180 € | 6 h × 45 € = 270 € |
| **Total du pilote** | **2 340 €** | **4 840 €** |

```text
Formule : heures externes × taux + heures internes × coût retenu
Horizon : une page pilote et une période d'observation définie
Inclus : même offre, mêmes contenus essentiels, même formulaire et mêmes mesures
Exclus : refonte complète et hausse de conversion
Résultat : corriger coûte 2 500 € de moins avant toute preuve que la base bloque
Analyse de sensibilité : si l'ancien outil empêche la mise en œuvre ou casse les mises à jour, la nouvelle page peut gagner
Variable qui fait basculer la décision : capacité réelle de l'existant à publier et maintenir la page test
Contrôle inverse : 570 + 640 + 950 + 180 = 2 340 €
```

### 6.2 Comparer quatre TCO sur 36 mois

Même hypothèse : huit pages, un formulaire, deux types de contenu, mêmes textes,
même recette de base.

| Poste | Corriger l'existant | Template | Base personnalisée | Conception spécifique |
| --- | ---: | ---: | ---: | ---: |
| Projet initial | 4 900 € | 7 500 € | 14 000 € | 30 000 € |
| Hébergement/licences/support par an | 1 400 € | 1 800 € | 2 600 € | 6 200 € |
| Temps interne par an | 30 h × 45 € | 28 h × 45 € | 24 h × 45 € | 20 h × 45 € |
| Sortie/documentation | 1 000 € | 2 000 € | 3 000 € | 5 000 € |
| **TCO 36 mois** | **14 150 €** | **18 680 €** | **28 040 €** | **56 300 €** |

```text
Formule : initial + 3 × (récurrents annuels + temps interne) + sortie
Horizon : 36 mois
Inclus : même périmètre courant, exploitation et sortie
Exclus : fonction réellement absente d'une option, TVA, financement et ventes
Résultat : sur ce besoin courant, le spécifique perd ; il ne doit pas être artificiellement sauvé
Analyse de sensibilité : surcoût personnalisé vs template = 9 360 €, soit 208 h à 45 €/h sur trois ans
Variable qui fait basculer la décision : plus de 5,78 h/mois de contournement réellement évitées, ou enjeu non financier critique
Contrôle inverse : 14 000 + 3 × (2 600 + 1 080) + 3 000 = 28 040 €
```

### 6.3 Calculer le seuil commercial sans promettre la conversion

Hypothèses : surcoût de la base personnalisée sur le template = 9 360 € ;
contribution moyenne d'une vente = 2 400 €.

| Variable | Prudent | Central | Favorable |
| --- | ---: | ---: | ---: |
| Transformation demande qualifiée → vente | 10 % | 20 % | 35 % |
| Contribution attendue par demande qualifiée | 240 € | 480 € | 840 € |
| Demandes qualifiées supplémentaires sur 36 mois | 39 | 20 | 12 |
| Moyenne mensuelle | 1,08 | 0,56 | 0,33 |

```text
Formule : surcoût ÷ (contribution × taux de transformation)
Horizon : 36 mois
Inclus : contribution, pas chiffre d'affaires
Exclus : garantie que le design créera ces demandes et attribution parfaite
Résultat central : 9 360 ÷ 480 = 19,5, arrondi à 20 demandes qualifiées
Analyse de sensibilité : le seuil varie de 12 à 39 selon le taux de vente
Variable qui fait basculer la décision : contribution, qualification et preuve que la différence influence réellement le parcours
Contrôle inverse : 20 × 480 = 9 600 €, légèrement supérieur au surcoût
```

### 6.4 Valoriser la fragilité des mises à jour

| Variable | Simple | Central | Exigeant | Source ou hypothèse |
| --- | ---: | ---: | ---: | --- |
| Mises à jour de contenu/mois | 2 | 6 | 15 | Historique interne |
| Temps supplémentaire par mise à jour fragile | 15 min | 45 min | 90 min | Chronométrage |
| Heures sur 36 mois | 18 h | 162 h | 810 h | Calcul |
| Coût à 45 €/h | 810 € | 7 290 € | 36 450 € | Hypothèse |

```text
Formule : mises à jour/mois × minutes ÷ 60 × 36 × coût horaire
Horizon : 36 mois
Inclus : contournements, reprises de mise en forme et attente directement mesurés
Exclus : nouvelles fonctions et refonte
Résultat central : 7 290 €, inférieur au surcoût personnalisé fictif de 9 360 €
Analyse de sensibilité : à 7,70 mises à jour/mois dans cette hypothèse, le point mort est atteint
Variable qui fait basculer la décision : fréquence réelle et temps supplémentaire imputable à la base
Contrôle inverse : 6 × 0,75 × 36 = 162 h ; 162 × 45 = 7 290 €
```

## 7. Comparaison et position professionnelle

```text
Options réellement comparables : conserver/corriger ; template ; base standard personnalisée ; conception spécifique ; reporter.
Périmètre et horizon communs : mêmes huit pages, contenus, formulaire, recette, support, temps interne et sortie sur 36 mois.
Option la moins chère : corriger l'existant lorsqu'il peut publier et maintenir le résultat attendu.
Option la moins risquée : une page pilote sur l'existant ou une base standard avec sortie testée.
Option qui demande le moins de temps interne : aucune par nature ; contenu, validation, photos et exploitation restent à la charge de quelqu'un.
Position Hagnéré Code pour le cas fréquent : garder standard tout ce que le client ne perçoit pas comme une différence utile et personnaliser seulement les écarts reliés à une preuve, une fonction ou un gain d'exploitation.
Faits qui la fondent : réutilisation réduit l'effort, adaptations créent une charge de maintenance, plateformes et exports ont des limites propres.
Cas où l'option opposée gagne : parcours réellement distinctif, catalogue ou intégration complexe, administration quotidienne propre, contraintes d'accessibilité/performance impossibles à tenir avec la base testée.
Signal de révision : la page pilote ou la mise à jour test échoue, ou les contournements dépassent le point mort calculé.
Ce que nous déconseillons même si nous pourrions le vendre : un développement spécifique pour « faire premium », « mieux ranker » ou « être unique » sans différence observable et testable.
```

Conflit d'intérêts : Hagnéré Code vend des sites vitrines et du développement.
La recommandation doit donc laisser gagner correction et template dans les cas
courants, puis rendre chaque ligne spécifique attaquable par un calcul ou un
test.

## 8. Objections et cas limites

| Objection loyale | Réponse prouvée | Ce qui reste incertain | Conséquence |
| --- | --- | --- | --- |
| « Un template donnera la même image que mes concurrents. » | Le contenu, les photos, la hiérarchie et les adaptations peuvent différencier une base standard. | Importance commerciale réelle de la singularité visuelle. | Tester une page avec les vrais contenus avant de financer tout le spécifique. |
| « Le sur-mesure sera forcément plus rapide. » | Google ne donne aucune prime par méthode ; le résultat dépend du code, des médias et de l'exploitation. | Performance du projet livré. | Inscrire des mesures et appareils de recette, pas une technologie gagnante. |
| « Avec WordPress, je pourrai toujours partir facilement. » | L'export natif ne représente pas tous les actifs et extensions. | Hébergement, thème, médias, base, licences et compétences. | Exécuter sauvegarde, restauration et inventaire de licences. |
| « Webflow exporte le code, donc je suis indépendant. » | Le code statique est exportable sous conditions, mais CMS et fonctions ne le sont pas entièrement. | Périmètre exact du site. | Rejouer le formulaire, les contenus dynamiques et le déploiement après export. |
| « Notre site doit durer dix ans. » | Toute solution dépend d'évolutions de sécurité, navigateurs, contenus et services. | Durée de la stack et de l'organisation. | Comparer capacité de mise à jour et sortie, pas promettre une durée sans maintenance. |
| « Nous n'avons pas encore les textes, le design les fera émerger. » | Le guide part justement de l'objectif et des pages. | Capacité interne à produire l'expertise. | Cadrer offre et contenus avant les maquettes détaillées. |
| « Notre secteur impose une accessibilité parfaite. » | W3C demande une évaluation du site réel, automatique et manuelle. | Standard/niveau juridiquement applicable et utilisateurs concernés. | Faire définir le périmètre par un spécialiste et intégrer la recette au devis. |
| « Le site actuel est ancien, donc il faut tout refaire. » | L'âge seul ne prouve pas l'impossibilité de corriger. | Sécurité, maintenance, dépendances et coût des corrections. | Auditer une page et les dépendances critiques avant de décider. |

## 9. Plan de réécriture

| Ordre | Section proposée | Question résolue | Preuve, scénario ou outil | Décision produite | À conserver / créer / couper |
| ---: | --- | --- | --- | --- | --- |
| 1 | Deux devis, quatre choix, un calcul | Quel est le verdict ? | Contrat des 150 mots | Corriger, template, personnaliser, spécifique | Réécrire l'annonce |
| 2 | Testez d'abord une page | La base actuelle bloque-t-elle ? | Scénario 6.1 | Corriger ou reconstruire | Créer |
| 3 | Séparez les cinq couches du site | Qu'est-ce qui doit différer ? | Contenu, architecture, interface, fonctions, exploitation | Registre des écarts | Créer actif signature |
| 4 | Quand le template gagne | Quel besoin courant est couvert ? | WordPress/Wix/Webflow et cas fictif | Choix standard | Conserver + dater |
| 5 | Quand la personnalisation gagne | Quel écart ciblé est maintenable ? | Test de mise à jour | Personnaliser ou isoler | Enrichir |
| 6 | Quand le spécifique gagne réellement | Quel écart ne peut être standardisé ? | Contre-cas + intégration | Financer ou refuser | Conserver + prouver |
| 7 | Comparez les coûts sur 36 mois | Que coûte chaque voie ? | Scénarios 6.2 et 6.4 | TCO et point mort | Créer |
| 8 | Vérifiez SEO, accessibilité et conversion sur le résultat | Quelle qualité est démontrée ? | Google/W3C + procès-verbal | Accepter/corriger | Conserver, rapprocher sources |
| 9 | Testez la sortie avant la signature | Que récupérez-vous ? | Wix/Webflow/WordPress + exercice | Réversibilité | Enrichir |
| 10 | Comparez deux devis ligne à ligne | Les offres sont-elles équivalentes ? | Grille livrables/responsables | Choix final | Enrichir |
| 11 | Position Hagnéré Code | Quand le choix s'inverse-t-il ? | Règle conditionnelle | Verdict expliqué | Créer |
| 12 | CTA après l'outil autonome | Quand un cadrage externe aide-t-il ? | Bon/mauvais fit et livrable | Contact ou autonomie | Préciser |

### Contrat des 150 premiers mots

- Conserver les deux devis et la question du surcoût.
- Répondre immédiatement : **corrigez ou réutilisez par défaut ; ne
  personnalisez que la couche dont la différence est prouvée et maintenable**.
- Dire que le guide fournira une page pilote, un TCO sur 36 mois, un registre
  des écarts et un test de sortie.
- Expliquer que « sur mesure » ne signifie ni meilleur SEO, ni meilleure
  conversion, ni absence de briques standard.

### Éléments à supprimer

- Les listes répétant les mêmes critères sans nombre, test ou conséquence.
- Toute formule suggérant qu'un template est rapide ou économique par nature.
- Tout renvoi vers le guide prix qui dispense le présent comparatif de chiffrer
  au moins un exemple.
- Les sources regroupées uniquement en bibliographie lorsqu'elles portent une
  décision visible.

### Éléments à conserver

- Les quatre décisions.
- Le rôle du site avant la technologie.
- Le refus de dévaloriser le template.
- La différence design/développement.
- Les mauvaises raisons de payer du spécifique.
- Les postes du devis.
- La recette mobile, formulaire, clavier, métadonnées et administration.
- La propriété, les licences et la sortie.

## 10. Contre-audit après correction

La page publique reste inchangée. Le tableau devient la porte de la future
réécriture.

| Problème | Priorité | Correction appliquée | Revalidation indépendante |
| --- | --- | --- | --- |
| Aucun TCO ou montant illustratif | P1 | En attente | Refaire quatre TCO sur 36 mois |
| Aucun registre des écarts couche par couche | P1 | En attente | Vérifier chaque différence, preuve et test |
| Aucun point mort de personnalisation | P1 | En attente | Recalculer heures, contribution et sensibilité |
| Plateformes actuelles non appliquées au comparatif | P1 | En attente | Rouvrir prix, fonctions et limites d'export |
| Export et sortie sans exercice complet | P1 | En attente | Redéployer ou documenter exactement l'impossible |
| Sources décisives trop éloignées des affirmations | P1 | En attente | Vérifier la proximité dans la page réécrite |
| Page pilote absente | P1 | En attente | Comparer correction et reconstruction sur le même contenu |
| Tableau principal potentiellement dense sur mobile | P2 | En attente | Rendu réel à 390 px et transformation en cartes si nécessaire |
| CTA sans livrable nommé | P2 | En attente | Décrire registre, TCO et recommandation |
| Fait faux ou juridiquement dangereux identifié | P0 | Aucun à ce snapshot | Nouvelle revue factuelle après réécriture |

### Score après correction

| Axe | Note /10 | Preuve localisable | Manque résiduel |
| --- | ---: | --- | --- |
| Intention | — | Non recalculé | Réécriture non effectuée |
| Décision | — | Non recalculé | Réécriture non effectuée |
| Pédagogie | — | Non recalculé | Réécriture non effectuée |
| Profondeur | — | Non recalculé | Réécriture non effectuée |
| Preuve | — | Non recalculé | Réécriture non effectuée |
| Comparaison | — | Non recalculé | Réécriture non effectuée |
| Originalité | — | Non recalculé | Réécriture non effectuée |
| Style | — | Non recalculé | Réécriture non effectuée |
| Conversion | — | Non recalculé | Réécriture non effectuée |
| SEO/produit | — | Non recalculé | Réécriture non effectuée |

Total : **non calculé**

Objectif : **90/100 minimum**, aucun axe sous 8, six axes obligatoires à 9 ou
10, après contre-audit et test mobile réel.

## 11. Preuves techniques et visuelles

```text
Manifeste : aucun manifeste créé ; audit uniquement
Calculs refaits : oui — page pilote, quatre TCO 36 mois, seuil de demandes et coût de mise à jour
Sources rouvertes : oui — France, États-Unis, Royaume-Uni, Australie et sources internationales primaires
Liens vérifiés : syntaxe contrôlée ; sources décisives ouvertes le 24 juillet 2026
Commandes : lecture intégrale page/recherche/modèle ; shasum -a 256 ; recalculs Node.js ; contrôle Markdown
Rendu 320 / 390 / 768 / 1024 / 1440 : non exécuté, aucune page modifiée
Image sociale : non contrôlée dans cet audit éditorial
Statut maximal prouvé : audité ; plan de réécriture documenté
Réserve publication / indexation : aucune correction publique n'est effectuée ; cet audit ne prouve ni nouvelle indexation ni classement
```
