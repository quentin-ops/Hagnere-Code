# Audit approfondi — `no-code-ou-sur-mesure`

Date : **24 juillet 2026**

Auditeur : orchestrateur du giga-audit, contrôle indépendant du snapshot
courant.

Périmètre : page, registre, image sociale, documentation disponible, prix et
limites officiels des plateformes citées, cadre juridique français et
européen, concurrence française, américaine, britannique et australienne,
pédagogie pour dirigeant, comparaison économique, réversibilité, conversion et
portes techniques observables.

Limite : ce rapport n'est ni un conseil juridique personnalisé, ni une
recommandation d'architecture propre à une entreprise, ni une preuve de build,
de déploiement, d'indexation ou de classement.

## 1. Verdict exécutif

```text
Lecteur exact : dirigeant de TPE/PME, indépendant ou porteur de SaaS qui veut
                remplacer un tableur, automatiser une tâche ou créer un outil.
Question réelle : dois-je acheter/configurer une plateforme, tester en no-code,
                  faire développer, hybrider ou ne rien construire ?
Décision attendue : sélectionner une option à tester, avec un périmètre, un
                    coût total, des limites et une sortie acceptables.
Réponse actuelle : commencer par la solution la plus simple qui couvre le
                   besoin, puis comparer coût, usage, données et reconstruction.
Défaut qui coûte le plus de valeur : les exemples annoncés comme une
                  comparaison sur cinq ans mélangent dollars et euros,
                  n'achètent pas un périmètre fonctionnel démontré identique et
                  laissent hors calcul une grande partie du coût du sur-mesure.
Niveau actuel : B — excellent guide de vigilance, comparatif économique encore
                insuffisant pour engager une décision.
Priorité : haute.
Statut : audité — à compléter avant nouvelle P3/P4.
P0 : 0 ; P1 : 7 ; P2 : 9.
Score : 82/100.
```

La page est déjà nettement plus honnête que les comparatifs qui annoncent
« 80 % moins cher » ou une bascule automatique après un nombre d'utilisateurs.
Elle définit les familles d'outils, montre des limites réelles, documente des
retraits de fonctionnalités, traite la sortie, déclare l'intérêt commercial de
Hagnéré Code et autorise la décision de ne rien construire.

Elle n'est pas encore une référence décisionnelle complète. Un dirigeant peut
comprendre les risques, mais il ne peut pas refaire une comparaison à fonctions
égales ni savoir quelle hypothèse renverse le choix. Le titre « comparer le coût
sur cinq ans » sur-promet donc par rapport au modèle réellement fourni.

### Score avant correction

| Axe | Note /10 | Preuve localisable | Manque décisif |
| --- | ---: | --- | --- |
| Intention | 9 | Hésitation et réponse directe `page.tsx:240-265` | Le livrable final à remplir n'est pas annoncé. |
| Décision | 8 | Situations, quatre voies et verdicts `:306-355`, `:852-894` | Aucun seuil, score pondéré ou test éliminatoire ne produit le choix. |
| Pédagogie | 9 | Définitions, analogie du local et exemples concrets `:357-410` | Les plateformes de catégories différentes peuvent encore paraître substituables. |
| Profondeur | 8 | Prix, limites, changements, sortie, droit et migration | Exploitation, sécurité, adoption, capacité interne et gouvernance restent peu opérationnelles. |
| Preuve | 8 | Prix éditeurs, Webflow, n8n et Légifrance cités | Pas de dossier P1 ; plusieurs assertions de sortie, RGPD et accessibilité sans source primaire proche. |
| Comparaison | 6 | Trois scénarios cinq ans `:631-671` | Devise, fonctions, récurrences et coûts de sortie non homogènes ; scénarios non reproductibles. |
| Originalité | 9 | Historique de dépréciations, test de sortie et conflit d'intérêt | Il manque un protocole d'essai réutilisable avec résultats. |
| Style | 9 | Ton direct, nuances et absence de jargon gratuit | Quelques tableaux accumulent des catégories plutôt qu'une histoire de décision. |
| Conversion | 9 | Intérêt commercial explicite `:526-533`, CTA conditionnel `:896-899` | Aucun livrable autonome à emporter ou résultat de diagnostic borné. |
| SEO/produit | 7 | Metadata, Article, BreadcrumbList, OG, FAQ et maillage | Aucune P1 complète, aucun manifeste, aucun rendu ou contrôle public rattaché au snapshot. |
| **Total** | **82/100** | **Somme contrôlée** | **Sous le seuil de 90 ; sept P1 ouverts.** |

## 2. Snapshot reproductible

| Élément | Empreinte ou observation au 24/07/2026 |
| --- | --- |
| Page | `src/app/guides/no-code-ou-sur-mesure/page.tsx` — 982 lignes, 4 504 mots source |
| SHA-256 page | `d965ce6976d99a53d504fc274c5c4783fed1451491a1aa46d65aa100cd0f8c35` |
| Image sociale | `src/app/guides/no-code-ou-sur-mesure/opengraph-image.tsx` — 101 lignes |
| SHA-256 image | `f17e60b80ee25457c6879d5962a8322bcfae0b7d4b8faab676dcf179b95468d8` |
| Registre | `src/lib/guides.ts`, SHA-256 `8663e6e84352121ec854393e049492a1c2b72f242166141e5d31e0911b43cb09` |
| Entrée registre | publié le 18/07/2026, modifié le 21/07/2026, lecture annoncée 16 min |
| Dossier de recherche | aucun `docs/research/no-code-ou-sur-mesure.md` trouvé |
| Manifestes P2/P3/P4 | aucun manifeste propre à ce slug trouvé |

Le rapport fige le code source observé, pas le HTML de production. La mesure
« 4 504 mots » porte sur le fichier TSX et inclut imports, données structurées,
FAQ et syntaxe. Elle ne valide pas les 16 minutes visibles. Cette durée doit être
recalculée sur le texte réellement rendu après réécriture.

## 3. Ce que le guide dit réellement

Le parcours actuel est cohérent :

1. choisir la solution la plus simple qui couvre le besoin ;
2. considérer aussi l'outil existant et le statu quo ;
3. distinguer application, site, base, automatisation et logiciel du marché ;
4. relever prix et limites directement chez les éditeurs ;
5. observer ce qui arrive lorsqu'un éditeur retire une fonction ;
6. comparer trois cas sur cinq ans ;
7. tester ce qui peut être récupéré ;
8. traiter propriété, données personnelles et accessibilité ;
9. préparer une migration progressive ;
10. conclure selon le profil de l'entreprise.

### Forces à conserver

- Les 150 premiers mots parlent à un humain : tableur, tâche à automatiser,
  nouvel outil, budget et reconstruction.
- L'option « ne rien construire » n'est pas un alibi ; elle est répétée et
  expliquée.
- Le no-code n'est ni diabolisé ni vendu comme gratuit. Le sur-mesure conserve
  hébergement, maintenance, dette technique et dépendance à une équipe.
- Les prix sont datés, reliés aux pages officielles et explicitement présentés
  comme volatils.
- La limite Airtable est traduite en conséquence concrète : tester la charge au
  lieu d'inventer un nombre d'utilisateurs.
- Les retraits Webflow sont un exemple factuel et mémorable de dépendance à une
  feuille de route externe.
- La page distingue export de données, écrans, règles, droits et pièces jointes.
- L'intérêt commercial est déclaré avant le CTA : Hagnéré Code vend du
  développement sur mesure.
- Le CTA promet d'examiner le statu quo, l'existant, le no-code et le
  sur-mesure avant de recommander une construction.

### Ce qui paraît complet mais ne l'est pas

- Le scénario A écrit « base + automatisations » à 45 dollars par utilisateur
  sans nommer la plateforme, le plan, les actions incluses ni les fonctions
  achetées. Le nombre est calculable, pas reproductible.
- Le scénario B applique 9 dollars à cent invités sans rattacher ce prix à un
  pack Airtable précis. La documentation officielle indique des packs de 15,
  25, 50, 100 et 200 sièges, avec prix différents selon Team/Business et
  remises de volume. Une multiplication linéaire n'est donc pas une offre.
- Les 15 000 et 25 000 euros de développement sont laissés seuls face à cinq
  ans de licences. Hébergement, maintenance, support, évolutions, sécurité et
  sortie sont seulement « à estimer séparément ». Le tableau ne compare donc
  pas encore deux TCO.
- Les scénarios ne prouvent pas que le no-code et le sur-mesure couvrent les
  mêmes rôles, règles, volumes, intégrations, disponibilité et niveau de
  support.
- Les devises restent séparées sans taux daté. Cette prudence évite une fausse
  conversion, mais empêche de calculer un seuil de bascule.
- Le coût du temps interne, de la construction no-code, de la formation, de la
  gouvernance et des contournements n'apparaît pas.
- Les catégories sont expliquées, mais Webflow, Bubble, Airtable, Make et n8n
  répondent à des couches différentes. Le lecteur ne doit jamais additionner
  ou opposer leurs prix sans une architecture précise.
- La sortie est décrite en détail, mais aucun test réel n'est fourni : format,
  relations, pièces jointes, temps d'export, réimport et contrôle du résultat.
- Le juridique reste un bon avertissement général. Il ne remplace ni une
  qualification des rôles RGPD, ni la vérification des transferts, ni le champ
  exact de l'accessibilité, ni une clause de cession adaptée.

## 4. Benchmark France et international

Requêtes observées le 24 juillet 2026 :

```text
FR : no-code ou développement sur mesure coût TCO PME comparaison
US : no-code low-code custom software five-year TCO vendor lock-in
UK : no-code custom software community business support guide
AU : SaaS no-code custom software total cost ownership build versus buy
```

Les concurrents servent à identifier la couverture et les formats utiles. Ils
ne prouvent ni un prix français, ni une économie, ni un seuil de croissance.

| Ressource et URL directe | Marché | Réponse ou outil utile | Limite | Adaptation supérieure |
| --- | --- | --- | --- | --- |
| [France Num — no-code pour TPE/PME](https://www.francenum.gouv.fr/guides-et-conseils/pilotage-de-lentreprise/numerisation-des-processus/pourquoi-utiliser-des-outils) | France, institutionnel | Cas d'usage, familles d'outils, accessibilité pour petites structures | Dossier d'initiation, peu de TCO et de sortie | Utiliser pour le vocabulaire TPE/PME ; conserver le diagnostic économique propre à la page. |
| [Visionsoft — TCO no-code industriel](https://visionsoft.tech/no-code-industriel-vs-developpement-sur-mesure-cout-tco/) | France | Décompose développement, intégration et exploitation ; propose l'hybride | Source commerciale et chiffres à ne pas transposer | Publier une matrice de coûts vérifiable sans moyennes de prestataire. |
| [NoCode Factory — logiciel sur mesure](https://www.nocodefactory.fr/blog/creer-un-logiciel-sur-mesure) | France | Parcours no-code/low-code/sur-mesure et délais | Préférence commerciale no-code, promesses rapides non universelles | Conserver la déclaration de conflit et exiger des preuves par scénario. |
| [Frogslayer — low-code, no-code ou custom](https://frogslayer.com/guides/low-code-no-code-comparison/) | États-Unis | Cinq critères, TCO cinq ans, verrouillage, talent et pilote non critique | Règles de plafond et délai de 18 mois issues du point de vue de l'agence | Reprendre les critères et le pilote ; retirer tout seuil temporel non mesuré. |
| [YuSMP — custom ou off-the-shelf](https://yusmpgroup.com/blog/custom-software-vs-off-the-shelf) | États-Unis/UE | Score à cinq critères, TCO et option hybride | Pondérations commerciales et exemples non normalisés | Publier les poids, les seuils éliminatoires et la preuve attendue. |
| [No-code but not alone](https://www.tnlcommunityfund.org.uk/media/insights/documents/%E2%80%98No-code-but-not-alone-A-guide-for-community-businesses-developing-the-right-tech-with-the-right-type-of-support.pdf?focal=none&mtime=20250626174315) | Royaume-Uni, fonds public | Compare existant, sur-mesure et no-code ; insiste sur capacité humaine et accompagnement ; cas réels | Contexte d'organisations communautaires, pas une PME française marchande | Ajouter capacité interne, propriétaire produit et niveau de support au choix technique. |
| [Advantage Digital — TCO SaaS vs custom](https://advantagedigitalmarketing.com.au/insights/total-cost-of-ownership-saas-vs-custom/) | Australie | Licences de toute la pile, intégrations, temps interne, migration et remplacement | Estimations commerciales de seuils d'effectif | Reprendre les catégories, jamais le seuil de 50–200 salariés. |
| [Advantage Digital — build vs buy](https://advantagedigitalmarketing.com.au/insights/build-vs-buy-decision-framework/) | Australie | Score 1–5 SaaS/low-code/custom | Méthode d'agence sans valeur universelle | Donner une grille téléchargeable avec poids choisis par l'entreprise. |

### Saturation

Le web est saturé de tableaux « vitesse / prix / flexibilité / scalabilité » et
de promesses de réduction de coût. Ajouter un énième tableau d'adjectifs
n'apporterait rien. Le gain encore rare est de réunir :

1. une architecture fonctionnelle égale ;
2. un TCO vérifiable à 12, 36 et 60 mois ;
3. une sensibilité au nombre d'utilisateurs et à l'usage ;
4. un test d'export réellement réimporté ;
5. un pilote avec critères d'arrêt ;
6. la capacité humaine à maintenir la solution ;
7. une position commerciale qui accepte « acheter » ou « ne rien faire ».

## 5. Matrice de gain d'information

| Question décisive | Réponse courante | Apport international | Couverture actuelle | Manque | Réponse supérieure à produire |
| --- | --- | --- | --- | --- | --- |
| Que compare-t-on ? | No-code vs code | No-code/low-code/buy/custom/hybride | Cinq familles bien définies | Elles ne sont pas recomposées en architectures équivalentes | Décrire trois architectures complètes sur un même cas. |
| Quel coût retenir ? | Abonnement vs devis | TCO cinq ans | Trois scénarios visibles | Coûts, devise et fonctions non homogènes | TCO 12/36/60 avec prix datés, temps interne, récurrences, sortie et marge d'incertitude. |
| Quand le prix bascule-t-il ? | Après X utilisateurs | Sensibilité et plafond | Refus juste du nombre magique | Aucun seuil calculé avec les données du lecteur | Calculer le point d'égalité et afficher les variables qui le déplacent. |
| La plateforme couvre-t-elle le besoin ? | Liste de fonctions | Test de cinq demandes futures | Limites officielles et profils | Pas de protocole de démonstration | Rejouer trois cas normaux, trois erreurs et deux montées en charge. |
| Peut-on réellement sortir ? | « Export CSV » | Lock-in et coût de réarchitecture | Très bonne liste de questions | Aucun export/réimport chronométré | Test de sortie signé : données, relations, fichiers, règles, comptes et contrôle. |
| Qui maintient ? | Éditeur ou développeur | Talent et capacité interne | Continuité évoquée | Temps, rôle, remplaçant et budget absents | Nommer propriétaire, suppléant, support, documentation et temps mensuel. |
| Le cadre légal est-il couvert ? | Hébergement UE = RGPD | Contrat, transferts, sécurité et accessibilité | Alertes présentes | Sources et qualification par cas insuffisantes | Checklist primaire CNIL/DGCCRF + validation spécialiste quand nécessaire. |
| Comment limiter l'engagement ? | Faire un MVP | Pilote non critique | Prototype recommandé | Pas de critères de succès/arrêt | Pilote de quatre semaines ou cycle réel, avec volumes et verdicts écrits. |

## 6. Faits et fraîcheur

| Affirmation du guide | Verdict au 24/07/2026 | Source primaire | Correction ou périmètre |
| --- | --- | --- | --- |
| Bubble Starter coûte 59 $/mois annuels pour 175 000 WU ; Growth 209 $ avec 2 éditeurs et 250 000 WU | Confirmée | [Bubble Pricing](https://bubble.io/pricing) | Prix produit daté ; ne dit rien du coût d'une application donnée. |
| Bubble Team coûte 549 $ avec 5 éditeurs et 500 000 WU ; choix de région sur Enterprise | Confirmée | [Bubble Pricing](https://bubble.io/pricing) | Revalider au jour de décision ; région choisie seulement dans le périmètre Enterprise actuel. |
| Une application Bubble ne s'exporte pas comme code exécutable ailleurs | Confirmée avec nuance | [Bubble — application and data ownership](https://manual.bubble.io/account-and-marketplace/application-and-data-ownership) | Les données s'exportent et un JSON d'application peut être réimporté dans Bubble ; quitter la plateforme exige de reconstruire la logique. |
| Airtable Team 20 $/utilisateur/an et 50 000 enregistrements ; Business 45 $ et 125 000 | Confirmée | [Airtable pricing](https://airtable.com/pricing), [Airtable plans](https://support.airtable.com/docs/en/airtable-plans) | Les droits facturés diffèrent selon plan ; le tableau doit préciser Team ou Business. |
| Airtable limite son Web API à 5 requêtes/s/base | Confirmée | [Airtable Web API](https://support.airtable.com/getting-started-with-airtables-web-api) | Limite identique entre plans ; quotas mensuels distincts. |
| Airtable Portals démarre à 120 $/mois pour 15 sièges sur Team | Confirmée mais scénario incomplet | [Airtable Portals](https://support.airtable.com/using-airtable-portals-for-external-collaborators) | Business démarre à 150 $/15 ; packs 15/25/50/100/200 et remises de volume. Ne pas linéariser 100 × 9 sans offre datée. |
| Webflow a arrêté Logic le 27/06/2025 et User Accounts le 29/01/2026 | Confirmée | [Webflow — sunsets](https://help.webflow.com/hc/en-us/articles/36046081578515-Feature-sunsets-deprecations) | Exemple de risque de feuille de route, pas preuve que toute plateforme fera pareil. |
| Webflow a réduit certains quotas Business/Cloud en 2026 | Confirmée sur l'avis officiel cité par la page | [Webflow — pricing May 2026](https://help.webflow.com/hc/en-us/articles/51059955082387-Updated-pricing-and-simplified-plans-for-May-2026) | Distinguer ancien plan, renouvellement et changement facturable. |
| Payer un développement ne cède pas automatiquement tous les droits | Direction correcte, formulation à sécuriser | [CPI, article L131-3](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958) | La situation dépend de l'auteur, du contrat, des éléments antérieurs et des licences ; avis juridique pour enjeu significatif. |
| Un service cloud exige d'identifier rôles, contrat, sous-traitants, transferts et sécurité | Confirmée | [CNIL — qualification cloud](https://cnil.fr/fr/quelles-qualifications-pour-les-acteurs-de-linformatique-en-nuage-cloud), [CNIL — sécurité cloud](https://www.cnil.fr/fr/securite-cloud-informatique-en-nuage) | Hébergement européen seul ne suffit pas. |
| Certaines obligations d'accessibilité s'appliquent depuis le 28/06/2025 | Confirmée, champ limité | [DGCCRF](https://www.economie.gouv.fr/dgccrf/les-fiches-pratiques/la-nouvelle-directive-europeenne-accessibilite-pour-des-produits-et-des-services-accessibles-aux-personnes-en-situation), [directive UE 2019/882](https://eur-lex.europa.eu/eli/dir/2019/0882) | Certains produits/services B2C, transitions et exemptions ; ne pas généraliser à toute application métier B2B. |

### Contradictions et limites

- La page promet une comparaison sur cinq ans mais refuse volontairement de
  convertir les devises et n'intègre pas les coûts récurrents du sur-mesure.
  C'est une illustration de calcul, pas une comparaison.
- « 100 invités × 9 dollars » ne correspond pas à la tarification officielle
  publiée sous forme de packs et de plans. Le résultat doit être remplacé par
  une offre datée ou clairement étiqueté comme hypothèse indépendante.
- La ligne « Make, Softr, Glide » agrège des produits dont les modèles
  d'export sont différents sans sources propres à Softr et Glide.
- La page dit « Make annonçait un hébergement européen » sans URL primaire
  proche. Cette affirmation doit être reliée à la documentation contractuelle
  actuelle et aux sous-traitants/transferts, ou retirée.
- Les sources finales ne citent pas la CNIL, la DGCCRF, EUR-Lex ou les
  documentations d'export pourtant nécessaires aux paragraphes correspondants.
- Aucun dossier P1 n'établit les requêtes, la date, les extraits, les
  contradictions, le niveau de preuve et les faits à revalider.

### Faits à retirer plutôt qu'à affaiblir

- Toute économie universelle de 60, 80 ou 90 %.
- Tout seuil automatique d'utilisateurs, de lignes, de mois ou de chiffre
  d'affaires qui ferait « gagner » une option.
- Tout TCO qui compare cinq ans de licences à un devis initial sans maintenance.
- Tout tarif d'invité reconstruit par division lorsqu'un pack officiel existe.
- Toute phrase « hébergé en Europe donc conforme RGPD ».
- Toute promesse d'export qui ne distingue pas données, relations, fichiers,
  écrans, règles, identités et historique.
- Toute assertion selon laquelle le code sur mesure est automatiquement
  détenu, maintenable, sécurisé ou moins cher.

## 7. Scénarios et calculs à construire

### 7.1 Cas canonique à fonctions égales

Construire un cas fictif, clairement annoncé comme tel :

```text
Entreprise : PME de services
Utilisateurs internes : 12
Partenaires externes : 100, dont les droits exacts sont définis
Volume : 3 000 dossiers actifs, 20 000 opérations d'automatisation/mois
Fonctions : formulaire, validation, pièces jointes, notifications, export,
            trois rôles, journal d'action et une intégration comptable
Service : sauvegarde/restauration testée, support ouvré, disponibilité mesurée
Sortie : données + relations + fichiers + règles documentées
Horizon : 12, 36 et 60 mois
```

Comparer ensuite, et seulement ensuite :

1. outil existant configuré ;
2. Airtable + Portals + automatisation identifiée ;
3. plateforme applicative no-code identifiée ;
4. hybride : base/plateforme + fonction spécifique ;
5. sur-mesure ;
6. statu quo.

Chaque ligne doit répondre `couvert`, `couvert avec adaptation`, `non couvert`
ou `non démontré`, avec la preuve. Une option qui échoue sur un critère
éliminatoire ne doit pas rester dans le classement par coût.

### 7.2 Formule TCO homogène

```text
TCO à l'horizon
= cadrage et mise en place
+ licences de toute la pile
+ hébergement et consommation
+ intégrations et supervision
+ temps interne chargé
+ formation et documentation
+ maintenance corrective, sécurité et évolutions prévues
+ coût probable des contournements
+ migration et coexistence
+ sortie/reconstruction à l'horizon si le scénario l'exige
+ marge d'incertitude explicitée
```

Utiliser une devise de décision unique. Pour un prix en dollars, enregistrer :
prix d'origine, date, taux utilisé, frais et fiscalité. Afficher aussi les
montants d'origine pour permettre le contrôle. Ne pas actualiser des flux sans
expliquer le taux ; une vue nominale simple peut suffire à une PME si toutes
les options suivent la même convention.

### 7.3 Sensibilité minimale

| Variable | Prudent | Central | Haut | Nature |
| --- | ---: | ---: | ---: | --- |
| Utilisateurs internes | 8 | 12 | 25 | Hypothèse entreprise |
| Utilisateurs externes payants | 15 | 100 | 200 | Droits et packs à préciser |
| Actions/exécutions mensuelles | 10 000 | 20 000 | 100 000 | Mesure du prototype |
| Temps interne mensuel | 4 h | 12 h | 30 h | Journal réel |
| Hausse annuelle des prix | 0 % | 5 % | 10 % | Hypothèse, pas prévision |
| Maintenance sur-mesure | devis bas | devis central | central + 30 % | Offres comparables |
| Coût de sortie | test simple | reprise centrale | reprise + 50 % | Devis ou exercice |

Le guide doit montrer quelle variable fait passer une option devant une autre.
Une seule courbe ou un tableau de bascule est plus utile que dix nouveaux prix.

### 7.4 Pilote et critères d'arrêt

Avant un engagement structurel, tester un processus non critique ou une copie
de données :

| Porte | Test | Succès | Arrêt ou correction |
| --- | --- | --- | --- |
| Usage | 10 dossiers normaux + 5 exceptions | 90 % terminés sans contournement non prévu | Cartographier l'écart avant de poursuivre |
| Droits | 3 rôles + un accès interdit | aucune fuite ; journal observable | Bloquer la mise en service |
| Charge | volume central et pic convenu | temps et erreurs sous seuil écrit | Changer architecture ou offre |
| Export | données, relations, fichiers et identifiants | réimport contrôlé sur échantillon | Chiffrer reconstruction réelle |
| Exploitation | erreur d'intégration et restauration | responsable et délai observés | Ajouter support/supervision |
| Adoption | utilisateurs réels sans constructeur | tâche terminée et comprise | Simplifier ou former |

Les valeurs finales appartiennent au projet. Le guide ne doit pas transformer
les exemples ci-dessus en norme universelle.

## 8. Comparaison et position professionnelle

```text
Options réellement comparables : statu quo ; outil déjà détenu ; logiciel du
  marché ; plateforme no-code/low-code ; hybride ; sur-mesure.
Périmètre commun : mêmes utilisateurs, fonctions, volumes, rôles, intégrations,
  preuve de sortie, niveau de service et horizon.
Option la moins chère au démarrage : souvent l'existant ou un prototype
  no-code, à condition que le temps de construction et les outils annexes soient
  comptés.
Option la moins risquée : celle qui passe les critères éliminatoires avec le
  plus petit engagement réversible ; ce n'est pas toujours la moins chère.
Option la plus contrôlable : un sur-mesure bien contracté peut donner davantage
  de maîtrise, mais crée une responsabilité de maintenance, de sécurité et de
  continuité.
Position Hagnéré Code : acheter ou configurer ce qui est standard ; tester
  léger lorsque l'usage est incertain ; hybrider lorsqu'une seule fonction
  différencie ; construire seulement ce qui mérite réellement d'être possédé.
Faits qui fondent la position : modèles de prix et plafonds différents,
  impossibilité d'exporter certaines logiques, changements de fonctions,
  coûts récurrents et obligations qui existent dans les deux modèles.
Signal de révision : utilisateurs, volume, prix, fonction critique,
  réglementation, support, compétence interne ou qualité de l'export changent.
Ce que nous déconseillons même si nous pourrions le vendre : refaire un outil
  standard, promettre qu'un prototype devient automatiquement le produit final,
  ou présenter un devis initial comme un TCO.
```

La déclaration d'intérêt commercial actuelle est excellente. Elle doit rester
avant les chiffres et le CTA. La future grille doit permettre au lecteur de
conclure sans contact commercial, puis proposer un diagnostic borné seulement
s'il reste une incertitude.

## 9. Objections et cas limites

| Objection loyale | Réponse défendable | Incertitude | Conséquence |
| --- | --- | --- | --- |
| « 45 $ par personne est plus cher que 15 000 €. » | Cinq ans de licence peuvent dépasser un devis initial. | Maintenance, fonctions égales, devise, temps et sortie. | Construire les deux TCO complets avant de conclure. |
| « Je peux exporter un CSV, donc je ne suis pas captif. » | Les données principales sont une partie de la sortie. | Relations, fichiers, logique, droits, historique et reprise. | Faire un export puis un réimport test. |
| « Le sur-mesure m'appartient. » | Une cession peut organiser les droits. | Contrat, auteurs, briques antérieures et licences. | Faire relire la chaîne de droits et contrôler les comptes. |
| « Mes données sont en Europe, donc je suis conforme. » | La localisation est un critère utile. | Rôles, sous-traitants, transferts, sécurité, finalité et droits. | Réaliser la qualification et le contrôle contractuel. |
| « Le no-code est réservé aux prototypes. » | Certains outils internes durent longtemps sur une plateforme. | Complexité, gouvernance, volume, support et économie. | Tester les limites réelles plutôt qu'un préjugé. |
| « Avec l'IA, le sur-mesure ne coûte presque plus rien. » | Le coût de production de code peut baisser. | Cadrage, validation, sécurité, exploitation, maintenance et responsabilité. | Chiffrer le système livré, pas seulement le code généré. |
| « Nous éviterons la maintenance avec une plateforme. » | L'éditeur maintient une partie de l'infrastructure. | Données, automatisations, comptes, incidents et changements restent à gouverner. | Budgéter un propriétaire et du support. |
| « La fonction sera ajoutée plus tard. » | Une feuille de route peut évoluer. | Aucun droit à une date ou à une priorité sans engagement. | Décider sur les fonctions contractuelles présentes. |

## 10. Défauts par sévérité

### P0 — aucun constaté

Les nombres visibles sont étiquetés comme hypothèses, les devises ne sont pas
faussement converties et la page avertit que les coûts récurrents du sur-mesure
restent à estimer. Aucun résultat, conformité ou propriété n'est garanti. Le
modèle est incomplet et peut induire une comparaison biaisée, mais les réserves
explicites empêchent de le classer P0 sur ce snapshot.

### P1 — à fermer avant nouvelle validation de référence

| ID | Défaut | Risque lecteur | Correction exigée |
| --- | --- | --- | --- |
| P1-01 | TCO cinq ans non comparable : devises différentes et récurrences sur-mesure hors tableau | Choix fondé sur un abonnement complet contre un achat incomplet | Refaire 12/36/60 mois dans une convention commune, avec coûts complets et deux vues de sortie. |
| P1-02 | Scénarios A/B non reproductibles : stack, plan, fonctions et prix invités non identifiés | Le dirigeant peut reprendre 32 400 $ ou 86 500 $ comme offre réelle | Nommer chaque produit/plan/date, utiliser les packs officiels ou des hypothèses explicitement indépendantes. |
| P1-03 | Périmètre fonctionnel non égal entre catégories | L'option la moins chère peut acheter moins de fonctions, de sécurité ou de support | Figer le cas canonique et la matrice pass/fail avant le coût. |
| P1-04 | Aucune sensibilité ni seuil de bascule | Un seul nombre masque l'effet des utilisateurs, usages, hausse de prix et maintenance | Publier prudent/central/haut et la variable qui inverse le verdict. |
| P1-05 | Pas de protocole de pilote et de go/no-go | Le lecteur sait quoi surveiller mais pas comment prouver le fit | Ajouter usage, droits, charge, export, panne et adoption avec seuils choisis. |
| P1-06 | Dossier P1 et chaîne P1–P4 absents pour le slug | Les prix et verdicts ne sont pas rattachés à une recherche reproductible ni à des relecteurs indépendants | Créer le dossier P1, réécrire en P2, faire P3 indépendante et P4 humaine/QA sur un manifeste complet. |
| P1-07 | Preuves primaires incomplètes pour sortie, RGPD, hébergement, accessibilité et licence des produits agrégés | Une alerte correcte peut être généralisée ou devenir obsolète | Sourcer chaque affirmation près du texte, qualifier le périmètre et supprimer ce qui ne peut être vérifié. |

### P2 — améliorations utiles après les P1

| ID | Amélioration |
| --- | --- |
| P2-01 | Ajouter coût du statu quo : temps, erreurs, outils, risque et coût d'opportunité du report. |
| P2-02 | Isoler le temps de construction/administration no-code, la formation, le propriétaire et son suppléant. |
| P2-03 | Distinguer explicitement produit applicatif, base, automatisation, site et logiciel du marché dans les architectures chiffrées. |
| P2-04 | Ajouter sécurité opérationnelle : MFA, droits, journaux, sauvegarde/restauration, incidents, SLA et dépendances. |
| P2-05 | Traiter l'IA générative comme un mode d'assistance au développement, pas comme une nouvelle catégorie qui supprime maintenance et responsabilité. |
| P2-06 | Fournir une grille locale téléchargeable sans collecte : capacités, TCO, sensibilité, pilote, sortie et décision. |
| P2-07 | Recalculer le temps de lecture sur le HTML visible et aligner hero, registre et carte après correction. |
| P2-08 | Tester liens externes, redirections, ancres, FAQ, tableaux, JSON-LD et image sociale sur le snapshot final. |
| P2-09 | Exécuter une QA navigateur 320–1600 px et prouver séparément build, production, robots, sitemap et indexation. |

## 11. Plan de réécriture localisable

| Ordre | Zone | Travail | Décision produite |
| ---: | --- | --- | --- |
| 1 | `page.tsx:240-265` | Annoncer la grille finale et les six options, avec la règle « fonctions avant prix » | Savoir ce que le lecteur obtiendra. |
| 2 | `:306-410` | Recomposer les outils en architectures complètes et non en simples catégories | Comparer des solutions qui répondent au même besoin. |
| 3 | `:413-575` | Conserver les prix officiels, ajouter plan, droits facturés, date, source et limites | Construire des hypothèses reproductibles. |
| 4 | `:577-629` | Garder Webflow et ajouter la conduite à tenir contractuelle | Transformer l'exemple de dépendance en contrôle. |
| 5 | `:631-671` | Remplacer les trois exemples par le cas canonique, TCO 12/36/60 et sensibilité | Voir le vrai seuil économique. |
| 6 | `:686-778` | Transformer les six questions en test d'export/réimport avec preuve | Chiffrer la sortie au lieu de la supposer. |
| 7 | `:780-818` | Ajouter sources CNIL/DGCCRF/EUR-Lex, rôles, transferts et champ précis | Éviter les raccourcis juridiques. |
| 8 | après `:820` | Ajouter pilote, portes éliminatoires et responsabilités d'exploitation | Décider go, correction, changement d'option ou arrêt. |
| 9 | `:852-899` | Remplacer les seuils de taille implicites par les résultats du cas et offrir la grille autonome | Convertir par la preuve, pas par la peur. |
| 10 | dossier, registre, manifestes | Reprendre P1–P4 sur le snapshot complet, puis seulement actualiser date et statut | Rendre la validation documentaire défendable. |

### Contrat des 150 premiers mots

Conserver la question humaine et la réponse « option la plus simple ». Ajouter :

> Le vrai piège est de comparer 45 dollars d'abonnement à un devis de
> développement : aucun des deux nombres ne dit encore ce que l'outil fera,
> combien de temps votre équipe y passera ni ce qu'il faudra payer pour en
> sortir. Dans ce guide, nous allons donc mettre six options sur le même cas,
> vérifier d'abord les fonctions et les limites, puis calculer leur coût à un,
> trois et cinq ans. Vous pourrez conclure : garder l'existant, acheter,
> configurer, tester en no-code, hybrider ou développer.

### À conserver

- l'ouverture et le statu quo ;
- la définition simple des catégories ;
- les prix et limites officiels datés ;
- les changements Webflow ;
- le refus des pourcentages marketing ;
- la déclaration d'intérêt commercial ;
- les six questions de réversibilité ;
- la prudence juridique et la migration progressive ;
- le CTA qui accepte une recommandation sans construction.

### À ne pas ajouter

- un catalogue de vingt plateformes ;
- des prix moyens d'agences non comparables ;
- un « quiz » qui choisit une architecture sans preuve ;
- un seuil magique d'utilisateurs ;
- un calculateur sophistiqué dont les hypothèses resteraient opaques ;
- une ressource téléchargeable qui recopierait simplement l'article.

## 12. État des portes P1–P4

| Porte | État au 24/07/2026 | Motif |
| --- | --- | --- |
| P1 — recherche | **REJETÉE / absente** | Aucun dossier propre au slug ; le présent audit ne remplace pas le dossier de production P1 à reprendre. |
| P2 — rédaction | **existante, à corriger** | Page riche et humaine, mais sept P1 empêchent une version de référence. |
| P3 — contre-audit | **REJETÉE / non prouvée** | Aucun rapport indépendant et aucun manifeste du snapshot avant ce giga-audit ; le présent rapport définit les corrections, il ne valide pas sa propre réécriture. |
| P4 — humanisation et QA | **REJETÉE / non prouvée** | Score 82, comparaison à 6, aucun rendu, build, QA ou manifeste complet rattaché au snapshot. |

Après correction, un autre agent doit reprendre les calculs et les faits. L'agent
de P2 ne peut pas valider sa propre P3. La P4 cible au moins 90/100, aucun axe
sous 8 et les axes critiques à 9 ou 10. L'exécution du plan ne présume jamais
que la cible est atteinte.

## 13. Contre-audit exigé après correction

| Contrôle | Revalidation indépendante |
| --- | --- |
| Équivalence | Vérifier que toutes les options achètent les mêmes fonctions, volumes, rôles, intégrations et service. |
| TCO | Refaire chaque opération 12/36/60, devise, indexation, temps interne, maintenance et sortie. |
| Prix | Rouvrir Bubble, Webflow, Airtable, Make, n8n ; enregistrer date, plan, devise, droits et limite. |
| Scénarios | Rejouer 8/12/25 utilisateurs, 15/100/200 externes, usages et prix haut/bas. |
| Export | Tester données, relations, fichiers, règles, utilisateurs et réimport sur une vraie plateforme candidate. |
| Droit | Vérifier L131-3, contrats/licences, CNIL, transferts et accessibilité avec le périmètre réel. |
| Pilote | Contrôler que chaque seuil est choisi par le projet et qu'aucun exemple devient une norme. |
| Conversion | Faire lire conflit d'intérêt, contre-cas et CTA par une personne qui n'a pas écrit la page. |
| Produit | Tester clavier, responsive, tableaux, liens, FAQ, OG, clair/sombre et annonces accessibles. |
| Technique | Formatter, lint, TypeScript, tests, build, HTML/JSON-LD, manifeste complet et contrôles publics séparés. |

## 14. Preuves techniques et visuelles

```text
Calculs actuels refaits :
- scénario A : 12 × 45 × 12 = 6 480 $/an ;
  × 5 = 32 400 $.
- scénario B : 6 480 + (100 × 9 × 12) = 17 280 $/an ;
  × 5 = 86 400 $, arrondi dans la page à ≈ 86 500 $.
- scénario C : 2 × 60 = 120 $.
Verdict arithmétique :
- opérations cohérentes avec leurs hypothèses ;
- hypothèses tarifaires et périmètre insuffisants pour former un TCO.
Sources primaires rouvertes :
- Bubble prix, workload, hébergement et export ;
- Airtable prix, plans, Portals et limite API ;
- Webflow dépréciations ;
- CNIL cloud/sous-traitance/transferts ;
- DGCCRF et directive UE accessibilité ;
- Légifrance L131-3.
Benchmark :
- France, États-Unis, Royaume-Uni et Australie consultés le 24/07/2026.
Recherche et manifestes :
- absents pour ce slug.
Tests actuels :
- non rejoués dans ce rapport documentaire.
Rendu 320 / 390 / 768 / 1024 / 1440 / 1600 :
- non exécuté ; obligatoire après correction.
Image sociale :
- source et hash contrôlés ; PNG final non rendu ni inspecté ici.
Statut maximal prouvé :
- audit éditorial, économique, concurrentiel, factuel et documentaire du
  snapshot listé.
Réserve :
- aucune preuve actuelle de build, déploiement, indexation, classement ou
  conversion de production.
```
