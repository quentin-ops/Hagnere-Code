# Audit approfondi — `prix-gestion-google-ads`

Date : 24 juillet 2026

Auditeur concurrentiel : agent indépendant, lecture seule

Snapshot du guide :

```text
Page : src/app/guides/prix-gestion-google-ads/page.tsx
Registre : src/lib/guides.ts:1040-1052
Image sociale : src/app/guides/prix-gestion-google-ads/opengraph-image.tsx
Recherche : docs/research/prix-gestion-google-ads.md
Date affichée par le guide : 20/07/2026 pour les tarifs et les sources ; dateModified 21/07/2026
SHA-256 page.tsx : dfc3d59b052acedac46ed1837bb39b4b233e00039980f77e113b1cf72a6c7b6c
SHA-256 opengraph-image.tsx : 07e0747f92fd3a7a5d20afe6f310cffd628b7f951e5ebefaa0ef962aa8d3b55d
SHA-256 guides.ts : 8663e6e84352121ec854393e049492a1c2b72f242166141e5d31e0911b43cb09
SHA-256 recherche : 8ce4e744eb8912f10c01bb984151286f2d6bee2bccbde9834c1a9f5fee1272c6
```

## 1. Verdict exécutif

```text
Lecteur exact : dirigeant de TPE/PME française, non spécialiste, qui doit décider de lancer ou d'externaliser Google Ads.
Question réelle : combien faut-il prévoir au total, que couvrent les honoraires et quand vaut-il mieux attendre ?
Décision attendue : comparer une enveloppe complète sur un horizon explicite, choisir forfait/pourcentage/hybride/interne, ou ne pas lancer tant que mesure et rentabilité ne sont pas prêtes.
Réponse actuelle en une phrase : le guide sépare média, gestion et coûts annexes, montre cinq prix publics, quatre modèles de facturation, trois profils fictifs sur 3/6/12 mois et une checklist de devis.
Défaut qui coûte le plus de valeur : le mot « complet » promet un TCO fermé alors que plusieurs coûts importants sont explicitement exclus, et les trois profils ne constituent pas trois niveaux simple/central/exigeant d'un même cas.
Niveau actuel : C (socle réutilisable, plusieurs sections à réécrire substantiellement)
Priorité : haute
Statut : audité — à réécrire
P0 : 0 ; P1 : 4 ; P2 : 8
```

### Score avant correction

| Axe | Note /10 | Preuve localisable | Manque décisif |
| --- | ---: | --- | --- |
| Intention | 9 | Ouverture directe `page.tsx:249-268`, séparation des trois factures | La décision de reporter est annoncée tardivement, pas dans la promesse initiale. |
| Décision | 7 | Modèles `:488-550`, options `:759-783`, checklist `:930-1006` | Aucun verdict chiffré simple/central/exigeant pour un même métier ; le dirigeant doit encore faire l'essentiel du tri. |
| Pédagogie | 8 | Sigles définis `:644-658`, exemples fictifs et InfoBox | Les modèles, les scénarios et le seuil économique ne sont pas reliés par un fil de décision humain. |
| Profondeur | 6 | Sept postes et trois profils `:315-376`, `:552-639` | Pas de sensibilité d'une même situation, pas de coût du statu quo quantifié, pas de CPL maximal dans la page. |
| Preuve | 8 | Google/Insee et cinq offres propres datées `:384-486`, `:1031-1133` | Les offres étrangères et la fraîcheur du 24/07 ne sont pas dans le guide ; plusieurs pages commerciales sont volatiles/dynamiques. |
| Comparaison | 6 | Tableau forfait/%/hybride `:531-549` | « Même travail » est affirmé sans socle de livrables, cadence, campagnes, pays, créations ni exclusions. |
| Originalité | 8 | Sept lignes de TCO, propriété du compte, lien CRM, conflit déclaré | L'artefact vraiment différenciant (seuil CPL après coûts non média) reste dans la recherche, pas dans la page. |
| Style | 8 | Ton sobre, avertissement contre la moyenne de marché `:478-486`, absence de faux témoignage | Quelques intitulés commerciaux (« budgets complets ») et une progression très catalogue affaiblissent l'adresse au dirigeant. |
| Conversion | 8 | Cas où ne pas externaliser `:793-816`, offre Hagnéré déclarée intéressée `:884-928`, CTA `:1019-1029` | Le CTA ne donne pas d'exemple de livrable/délai et arrive avant une démonstration de seuil économique directement copiable. |
| SEO/produit | 7 | Article + Breadcrumb JSON-LD, liens internes, OG source, registre `guides.ts:1040-1052` | `dateModified` précède l'audit courant ; la mesure de lecture renvoie 404 sans serveur local ; route/HTML/mobile/OG n'ont pas été inspectés dans un navigateur. |

Total : **75/100**

Le seuil de publication est 90/100, aucun axe sous 8, et Intention, Décision,
Pédagogie, Profondeur, Preuve et Comparaison à 9 ou 10. Le guide n'atteint donc
pas la porte de sortie éditoriale, même si ses faits principaux sont solides.

## 2. Ce que le guide dit réellement

- Dans les 150 premiers mots, il répond correctement à « budget Google + honoraires » et annonce un exemple local de 11 534 € HT sur six mois (`page.tsx:249-268`). C'est humain et utile, mais il manque une phrase de verdict : *« si vous ne pouvez pas relier une dépense à une marge et à un prospect qualifié, ne lancez pas encore »*.
- Le parcours va de sept postes de coût, à cinq tarifs publics, aux modes forfait/%/hybride/temps, puis à trois profils, aux formules CPC/CPL/CPA, au choix interne/freelance/agence, à la propriété du compte et à une checklist de 16 points.
- Le guide sépare correctement les prix affichés des prix de marché : il dit explicitement que cinq offres ne constituent ni panel ni moyenne (`:384-390`, `:478-486`).
- Les calculs A/B/C sont arithmétiquement justes. A vaut 2 903,60 € initial + 1 438,40 €/mois ; B 6 895,60 € + 4 071 €/mois ; C 6 318,80 € + 6 926,80 €/mois. Les arrondis 3/6/12 mois correspondent aux formules.
- La page paraît complète parce qu'elle affiche sept postes et 3/6/12 mois, mais A exclut encore page/appels/licences/taxes/hausse de budget (`:604-607`), B exclut CRM/équipe commerciale/démonstration (`:620-624`) et C exclut marge/retours/promotions/stock/frais de paiement (`:636-639`). Il faut donc distinguer **coût renseigné** et **coûts à confirmer**, pas « budget complet ».
- Le registre et le hero répètent la promesse « trois exemples complets » (`guides.ts:1043-1046`, `page.tsx:175`, `:300`, `:552`) alors que le corps la dément partiellement.
- La formule présente le CPL média, le CPL complet et le CPA (`:653-658`), puis renvoie le calcul de budget à une autre page (`:660-675`). La recherche source promet, elle, un « seuil de CPL maximal » contrôlé (`docs/research/prix-gestion-google-ads.md`, section 5), absent du guide : c'est une divergence de contrat éditorial.
- Les options internes et « audit puis autonomie » sont honnêtement possibles (`:759-816`). La déclaration « Hagnéré Code vend cette prestation et n'est donc pas une source neutre » (`:884-894`) est une très bonne pratique de conversion professionnelle.

## 3. Benchmark France et international

Requêtes observées le 24 juillet 2026, sans données de volume :

```text
FR : prix gestion Google Ads agence tarif forfait pourcentage France 2026
US : Google Ads management pricing agency monthly fee percentage United States
UK : UK Google Ads management pricing agency monthly fee percentage
Canada : Canada Google Ads management pricing agency monthly fee percentage 2026
```

Les pages commerciales sont utilisées pour cartographier les réponses et les
offres, jamais comme preuve d'une moyenne. Les faits de produit et de budget
doivent rester adossés aux pages Google officielles.

| Ressource et URL directe | Pays | Réponse utile | Preuve, outil ou exemple | Limite | Apport à vérifier ou adapter |
| --- | --- | --- | --- | --- | --- |
| [MS Web — création et gestion](https://www.ms-web.fr/creation-et-gestion-de-campagne-google-ads/) | France | Sépare création 149 € HT et gestion dès 90 € HT/mois | Prix public et cadence de suivi annoncés | Offre propre, périmètre étroit et « dès » | Garder la séparation prix/livrables, ajouter le scope comparable. |
| [Viaduc — Google Ads](https://www.viaduc.fr/google-ads/) | France | 90 € affichés, note à 99 €, mise en service dès 299 €, engagement 4 mois | Exemple d'incohérence interne et de coût d'entrée | Prix commercial volatil, aucun marché moyen | Ajouter une colonne engagement/sortie et un avertissement daté. |
| [Convertix — consultant Google Ads](https://convertix.fr/consultant-google-ads/) | France | Oppose freelance et agence, fourchettes propres et offres à partir de 990 € | Fourchette de vendeur et périmètre déclaré | Intérêt commercial, pas de panel neutre | Reprendre les critères de périmètre, pas les « moyennes ». |
| [Sodigix — tarif agence](https://sodigix.com/blog/tarif-agence-google-ads/) | France | Compare forfait, pourcentage et hybride | Typologie de rémunération | Fourchettes non normalisées | Vérifier que chaque modèle est calculé sur un même travail. |
| [Emprise Digital — management cost](https://emprisedigital.co/blog/google-ads-management-cost/) | États-Unis | $500–$5,000/mois, 10–20 %, forfait/hybride | Paliers de budget et exemples de modèles | Agence qui vend ses propres services | Apporte le minimum, plafond et distinction média/honoraires. |
| [Jafen Media — USA 2026](https://jafenmedia.com/blog/google-ads-management-cost-usa-2026) | États-Unis | $750–$5,000, souvent 10–20 % | Cas par niveau de dépense | Page commerciale, chiffres non neutres | Ajouter une question « minimum mensuel/plafond ». |
| [JW Digital — fees UK 2026](https://jw-digital.co.uk/blog/google-ads-management-fees-uk-2026) | Royaume-Uni | £300–£2,500+, 10–20 % | Fourchettes et propre prix de référence | Prestataire intéressé, devise et marché distincts | Montrer qu'une devise étrangère n'est pas une borne française. |
| [DPOM — PPC pricing packages](https://www.dpom.co.uk/ppc-pricing-packages/) | Royaume-Uni | Forfaits fixes par palier de dépense, £145–£695 affichés | Paquets lisibles, pas de setup sauf cas précisés | Scope et marché UK ; tarifs peuvent changer | Inspires une table « palier, inclus, sortie » sans convertir en euros. |
| [Catmo Marketing — cost](https://www.catmomedia.ca/blog/google-ads-management-cost) | Canada | 15–20 % et coûts cachés de setup/reporting/contrat | Liste explicite des frais périphériques | Agence vendeuse | Renforce les lignes cachées et la durée d'engagement. |
| [MarketingFlow Canada](https://marketingflow.ca/how-much-does-google-ads-cost/) | Canada | 10–20 %, forfait CAD 400–1 500, propriété du compte | Ownership et modèle de prix | Blog commercial, autre devise/marché | Confirmer la section propriété et expliciter l'incomparabilité. |
| [Google Ads — présentation des budgets](https://support.google.com/google-ads/answer/10486536?hl=fr) | Source officielle | Budget quotidien moyen, limite quotidienne et mensuelle | Règle Google, exceptions documentées | Ne donne aucun tarif de gestion | Conserver comme seule preuve de règle de dépense. |
| [Google Ads — classement des annonces](https://support.google.com/google-ads/answer/1722122?hl=fr) et [niveau de qualité](https://support.google.com/google-ads/answer/156066?hl=fr) | Source officielle | Qualité de l'annonce/page et contexte influencent le classement ; 1–10 est un diagnostic | Documentation primaire | Ne garantit ni CPC ni résultat | Relier les coûts de page/création à une conséquence, sans promettre de ROI. |

### Saturation

Après les résultats français puis US, UK et Canada, les mêmes cinq familles de
réponse reviennent : séparation média/honoraires, forfait, pourcentage, hybride,
setup/frais cachés et propriété du compte. Les pages supplémentaires ajoutent
surtout des fourchettes commerciales et des promesses d'agence, pas une nouvelle
méthode de décision. Le gain d'information ne vient donc pas d'une vingt-cinquième
fourchette : il vient d'un socle de travail égal, d'un TCO transparent, d'un
seuil de marge vérifiable et d'un choix *attendre / faire en interne / déléguer*.
Les chiffres étrangers ne doivent pas être convertis ou appliqués à la France
sans préciser devise, TVA, coûts salariaux, marché, niveau de service et date.

## 4. Matrice de gain d'information

| Question décisive | Meilleure réponse française | Apport international | Couverture actuelle | Manque | Réponse supérieure à produire |
| --- | --- | --- | --- | --- | --- |
| Que paie-t-on exactement ? | Les cinq pages françaises séparent souvent setup, média et gestion | US/Canada listent reporting, plateforme et engagement | Sept postes `:315-376` | Pas de colonne connu/inconnu dans les trois budgets | Tableau TCO avec inclus, exclus et responsable de chaque ligne. |
| Quel modèle coûte le moins ? | Forfait/%/hybride existent tous | UK montre des forfaits par palier ; US ajoute minimum/plafond | Quatre modèles et quatre budgets média `:488-549` | Scope identique non défini | Socle écrit avant les montants et seuils de croisement sur le même travail. |
| Quel total sur 3/6/12 mois ? | Tarifs publics mais rarement horizon complet | Les pages étrangères donnent surtout un mois ou un palier | A/B/C sur 3/6/12 | Profils différents, pas simple/central/exigeant | Même entreprise, trois niveaux de dépense/complexité et sensibilité. |
| Quel CPL puis-je accepter ? | Les guides listent CPL/CPA | Pages commerciales parlent de ROI sans méthode neutre | Formules génériques `:653-658` | CPL maximal marge × signature absent | Exemple fictif contrôlé : marge, taux, coûts fixes, seuil et contrôle inverse. |
| Quand ne pas lancer ? | Quelques cas d'inadaptation | Les pages concurrentes poussent presque toujours l'agence | InfoBox `:793-816` | Aucun coût du report/statu quo | Chiffrer le temps interne, le coût d'un prospect non traité et le coût d'un test reporté. |
| Comment éviter la dépendance ? | Propriété et accès Google documentés | Canada/UK insistent sur ownership | `:818-850` | Pas de test concret de sortie/compte | Checklist d'export et de passation avec délai, format et propriétaire. |
| Le prix Hagnéré est-il comparable ? | Transparence du conflit d'intérêt | Les agences étrangères publient souvent leurs propres paliers | `:884-928` | Même scope/horizon absent | Tableau séparant audit, pilotage et média, puis contre-cas où Hagnéré déconseille son offre. |
| Le contenu est-il actuel ? | Cinq tarifs datés du 20/07 | Les pages étrangères sont datées mai-juillet 2026 | Source listée `:1031-1133` | Pages dynamiques non toutes rouvertes le 24/07 | Garder la date d'observation, revalider avant chaque `dateModified`, retirer une valeur non vérifiable. |

## 5. Faits et fraîcheur

| Affirmation du guide | Verdict | Source primaire actuelle | Périmètre et date | Correction |
| --- | --- | --- | --- | --- |
| Google peut dépenser jusqu'à 2× le budget quotidien moyen et, pour la plupart des campagnes, 30,4× sur le mois | confirmé, avec exceptions | [Google Ads — budgets](https://support.google.com/google-ads/answer/10486536?hl=fr) | Documentation Google, consultée dans le dossier le 20/07/2026 ; résultat officiel encore accessible le 24/07 | Garder « pour la plupart » et rappeler que c'est la dépense média, pas les honoraires. |
| Enchère, qualité, contexte et page influencent le classement/CPC | confirmé | [Google Ads — classement](https://support.google.com/google-ads/answer/1722122?hl=fr) | Réseau de recherche, documentation officielle consultée le 20/07/2026 | Ne pas transformer « peut souvent réduire » en économie garantie. |
| Le score de qualité 1–10 est un diagnostic et pas la valeur d'enchère | confirmé | [Google Ads — qualité](https://support.google.com/google-ads/answer/156066?hl=fr) | Documentation officielle, consultée le 20/07 | Correct ; ajouter que l'amélioration visée est une action/page/conversion, pas une note. |
| Les conversions principales/secondaires et prospects qualifiés peuvent revenir du CRM | confirmé sous réserve de revalidation | [Objectifs de conversion](https://support.google.com/google-ads/answer/10993988?hl=fr), [prospects qualifiés](https://support.google.com/google-ads/answer/11459091?hl=fr) | Fonctionnalités de compte Google ; certains liens ont répondu 429 lors de la réouverture du 24/07 | Revalider au prochain cycle et préciser conditions/outils compatibles. |
| Le coût horaire Insee est 44,2 €/h | confirmé mais périmètre trop étroit pour être un coût dirigeant | [Insee — coût horaire du travail](https://www.insee.fr/fr/statistiques/2381340) | Services marchands, entreprises de 10 salariés ou plus, données 2025 publiées le 02/07/2026 | Marquer explicitement « base statistique illustrative », puis proposer coût chargé et coût d'opportunité séparés. |
| MS Web, Viaduc, DP Medias, Ad-Works, Vizetoo affichent les montants du tableau | confirmé comme instantané de prix propres | Pages liées `page.tsx:438-475`, observation du 20/07/2026 ; Ad-Works/Vizetoo dynamiques lors de la réouverture du 24/07 | Ce ne sont ni un panel ni une moyenne ; les montants peuvent avoir changé | Conserver la date dans chaque ligne et enlever une valeur non revalidable plutôt que la présenter comme actuelle. |
| Les trois exemples sont des « budgets complets » | à nuancer, pas faux dans l'intention mais trompeur | Formules `:594-639` listent leurs propres exclusions | Les postes non chiffrés sont page/appels/licences/taxes/CRM/marge/retours/stock/paiement | Remplacer partout par « simulations chiffrées » ou « coût renseigné », et montrer « à confirmer ». |
| Les trois devis fictifs couvrent exactement le même travail | invérifiable comme écrit | Aucun cahier de périmètre local | `:524-529` ne définit ni campagnes, marchés, cadence, créations, tracking ni reporting | Ajouter un socle contractuel de comparaison avant le tableau, ou retirer « exactement ». |
| Le guide fournit le seuil de CPL maximal | faux pour le rendu, vrai seulement dans la recherche | `docs/research/prix-gestion-google-ads.md`, section 5, contient l'exemple 2 400 € × 20 % − 80 € = 400 € | La page ne donne que les formules génériques et renvoie à une autre URL `:660-675` | Migrer l'exemple contrôlé dans le guide, avec variables et contrôle inverse. |
| Les tarifs et sources sont vérifiés le 20/07, mais le registre est modifié le 21/07 | cohérent historiquement, insuffisant pour l'audit du 24/07 | `page.tsx:1033`, `guides.ts:1049-1051` | Prix volatils, pages dynamiques | Ne pas avancer `dateModified` sans revalidation ; dater le snapshot dans le texte. |

### Contradictions

- Le contrat de recherche annonce un « artefact signature » avec CPL maximal,
  tandis que la page délègue le budget et le seuil à d'autres guides.
- Le titre, le hero, la table des matières et les métadonnées parlent de
  « budgets/exemples complets » alors que le corps nomme leurs exclusions.
- La recherche finale affirme une batterie navigateur aux dix largeurs et un
  guide publiable ; dans le présent audit, aucun rendu de la route n'a été
  observé. Cette assertion ne doit pas être recopiée comme preuve indépendante.

### Faits à retirer plutôt qu'à affaiblir

- Toute fourchette présentée comme « prix normal du marché » sans panel neutre.
- Toute promesse de CPL, ROAS, délai ou économie moyenne.
- Toute valeur dynamique qui ne peut pas être revalidée avec sa date et son URL.
- Le terme « complet » lorsqu'un poste est inconnu ou exclu.

## 6. Scénarios et calculs à construire

### 6.1 Trois niveaux du même cas (à ajouter)

Le guide doit conserver ses profils A/B/C comme cas sectoriels, mais ajouter un
seul cas comparable. Exemple pédagogique déjà compatible avec les hypothèses
existantes : entreprise locale, recherche Google, forfait fixe, hors taxes.

| Variable | Simple | Central | Exigeant | Source ou hypothèse |
| --- | ---: | ---: | ---: | --- |
| Média mensuel | 600 € | 900 € | 1 500 € | Hypothèse illustrative, pas un minimum recommandé. |
| Gestion mensuelle | 450 € | 450 € | 900 € | Hypothèse ; l'exigeant doit déclarer campagnes/charge supplémentaires. |
| Mise en route + suivi + page | 2 550 € | 2 550 € | 4 800 € | Reprendre les postes A et expliciter la charge additionnelle. |
| Temps interne initial | 8 h | 8 h | 16 h | Hypothèse ; valoriser au coût chargé réel de l'entreprise. |
| Temps interne mensuel | 2 h | 2 h | 5 h | Hypothèse ; expliquer validation et traitement des leads. |
| Coût mensuel connu avec 44,2 €/h | 1 138,40 € | 1 438,40 € | 2 921 € | Calcul illustratif ; 44,2 € est la base Insee, pas le coût de chaque dirigeant. |
| Coût renseigné à 3 mois | 6 319 € | 7 219 € | 14 270 € | Formule ci-dessous, arrondi à l'euro. |
| Coût renseigné à 6 mois | 9 734 € | 11 534 € | 23 033 € | Idem. |
| Coût renseigné à 12 mois | 16 564 € | 20 164 € | 40 559 € | Idem. |

Ces montants sont une **proposition de réécriture**, pas des prix Hagnéré ni
des recommandations universelles. Chaque colonne doit afficher les inclusions,
exclusions, nombre de campagnes, pays, cadence d'optimisation, créations,
tracking, page, CRM et clause de sortie. L'exigeant ne doit pas seulement être
« plus cher » : il doit avoir une complexité métier explicitement différente.

```text
Formule : coût renseigné(h) = mise en route + (mois × (média + gestion + outils + temps interne))
Horizon : 3, 6 et 12 mois, même entreprise et même devise HT
Inclus : uniquement les postes écrits dans la colonne
Exclus : taxes, marge, retours, stock, frais de paiement, coûts non observés ; les afficher à part
Résultat : une enveloppe lisible, jamais un coût total garanti
Analyse de sensibilité : faire varier média, charge de gestion, heures internes et nombre de prospects
Variable qui fait basculer la décision : CPL complet et marge attendue par client, pas le prix mensuel isolé
Contrôle inverse : refaire init + (mensuel × horizon) avec les centimes avant arrondi
```

### 6.2 Seuil de CPL maximal à rapatrier de la recherche

L'exemple de la recherche est simple, falsifiable et apporte une vraie décision :

```text
Exemple illustratif fictif : marge contributive par vente = 2 400 €
Taux prospect qualifié → vente = 20 %
Valeur de marge attendue par prospect qualifié = 2 400 × 20 % = 480 €
Coûts non média du mois = 1 200 € ; objectif = 15 prospects
Part des coûts non média par prospect = 1 200 / 15 = 80 €
CPL média maximal à l'équilibre = 480 − 80 = 400 €
Budget média à 15 prospects = 15 × 400 = 6 000 €
Contrôle inverse : 3 ventes × 2 400 € = 7 200 € de marge ; 6 000 + 1 200 = 7 200 € de coûts
```

Il faut définir « prospect qualifié », préciser que le calcul ne traite pas la
TVA, le délai de transformation ni les ventes non attribuables, et faire varier
le taux de signature (10 %, 20 %, 30 %) dans un petit tableau. Le résultat ne
doit pas être présenté comme un CPL sectoriel.

## 7. Comparaison et position professionnelle

```text
Options réellement comparables : interne ; freelance ; agence ; audit puis autonomie ; attendre/mettre à niveau offre, page et mesure.
Périmètre et horizon communs : un compte, un marché, deux familles de campagnes, conversions testées, deux optimisations/mois, un reporting mensuel, 6 mois ; page/CRM/créations supplémentaires en colonnes séparées.
Option la moins chère : interne ou audit puis autonomie si une personne compétente a réellement le temps ; le coût interne ne vaut jamais zéro.
Option la moins risquée : l'option qui conserve compte, accès, historique et un responsable de qualification ; pour plusieurs canaux/CRM, une agence peut réduire le risque de continuité, mais ne garantit pas les ventes.
Option qui demande le moins de temps interne : agence avec scope explicite ; elle exige tout de même validation de l'offre, contenus et traitement des prospects.
Position Hagnéré Code pour le cas fréquent : pour une TPE qui ne connaît ni marge ni taux de signature, commencer par mesure/diagnostic et un test cadré ; ne pas acheter un pilotage mensuel avant de savoir quelle action commerciale est réellement rentable.
Faits qui la fondent : Google distingue conversions principales/secondaires ; la page et la qualité influencent le classement ; la valeur dépend de marge et de qualification, pas du clic seul.
Cas où l'option opposée gagne : interne si compte simple et responsable formé ; freelance si périmètre étroit ; agence si multi-canaux, marchés ou continuité ; attendre si aucune personne ne rappelle les prospects.
Signal de révision : trois mois de données qualifiées, coût par client stable, ou au contraire mesure cassée, marge sous le seuil et leads non traités.
Ce que nous déconseillons même si nous pourrions le vendre : promettre un ROAS, vendre une gestion récurrente à une entreprise sans mesure de marge, ou confondre 89 €/mois d'entrée et accompagnement de même périmètre qu'une agence.
```

La position ci-dessus est une recommandation Hagnéré Code, pas un fait Google.
La phrase de conflit d'intérêt doit rester immédiatement avant tout tableau de
l'offre Hagnéré.

## 8. Objections et cas limites

| Objection loyale | Réponse prouvée | Ce qui reste incertain | Conséquence |
| --- | --- | --- | --- |
| « 90 € par mois doit suffire. » | Un prix d'entrée peut exclure setup, page, créations, CRM et volume ; les cinq pages ne couvrent pas le même travail. | Charge réelle, qualité et résultat de chaque offre. | Comparer livrables, cadence, accès et coût 6 mois, pas le prix affiché. |
| « Le pourcentage est plus juste. » | Il varie automatiquement avec le média ; le forfait, le minimum, le plafond et la charge peuvent produire un autre total. | L'incitation de chaque prestataire et l'évolution du compte. | Demander les deux montants à 1k/5k/10k/30k et le travail attaché. |
| « Je peux tout faire moi-même. » | Le temps interne, la formation, le contrôle, le remplacement et les ventes non traitées ont un coût. | Coût d'opportunité individuel, compétence réelle et disponibilité. | Chiffrer heures et valeur d'une heure de vente avant de choisir. |
| « Google promet de l'optimisation. » | Google documente classement/qualité, pas une vente ou une marge garantie. | Demande, offre, page, saisonnalité et attribution. | Fixer un seuil d'arrêt fondé sur marge, CPL/CPA et prospects qualifiés. |
| « L'agence doit garder le compte. » | Google documente accès, association et propriété des données côté client. | Configuration et droits contractuels du compte réel. | Conserver deux administrateurs, facturation et export/passation. |
| « Le ROAS suffit en e-commerce. » | Le ROAS est chiffre d'affaires attribué / dépense média ; la marge, retours, stock et paiement changent la décision. | Marge par produit et attribution réelle. | Ajouter marge contributive et coûts hors média. |
| « Je dois investir tout de suite. » | La page identifie quatre cas où diagnostic, test ou mise à niveau est préférable. | Coût exact du report et de la demande perdue. | Ajouter un scénario statu quo/report et un critère de sortie. |

## 9. Plan de réécriture

| Ordre | Section proposée | Question résolue | Preuve, scénario ou outil | Décision produite | À conserver / créer / couper |
| ---: | --- | --- | --- | --- | --- |
| 1 | Ouverture « votre facture n'est pas le budget Google » | Quel montant faut-il réellement prévoir ? | Les sept postes et l'exemple local, avec connu/inconnu | Ne pas comparer un prix mensuel seul | Conserver l'ouverture ; créer une phrase de verdict et couper « trois exemples complets ». |
| 2 | « Avant de choisir un prestataire, vérifiez ces trois portes » | Offre, mesure, marge sont-elles prêtes ? | Exemple CPL maximal et conditions de report | Lancer, tester ou attendre | Créer un mini-arbre ; déplacer la mise en garde avant les tarifs. |
| 3 | Tarifs publics datés | Que montrent les offres existantes ? | Cinq offres FR + liens par ligne + mention 20/07 | Aucune moyenne de marché | Conserver le tableau ; créer colonnes scope/engagement/source. |
| 4 | Socle égal de comparaison | Forfait/%/hybride sont-ils comparables ? | 1 compte, marché, campagnes, cadence, créations, tracking, exclusions | Choisir le modèle à budget égal | Créer le socle avant `:531-543`; couper « exactement » tant qu'il n'est pas écrit. |
| 5 | Trois niveaux du même cas | Quel total simple/central/exigeant ? | Tableau proposé et formules 3/6/12 | Enveloppe et variable de bascule | Conserver A/B/C en cas complémentaires ; créer sensibilité. |
| 6 | Seuil de CPL et de marge | À quel prix s'arrêter ? | Exemple 2 400 × 20 %, contrôle inverse, 10/20/30 % | Lancer seulement si seuil atteignable | Créer dans la page ; ne plus renvoyer tout le calcul ailleurs. |
| 7 | Organisation, propriété et cas Hagnéré | Quelle option tient avec mon équipe ? | Tableau interne/freelance/agence/report, accès Google, conflit | Choix et mauvais fit | Conserver ; symétriser le périmètre et le coût 6 mois. |
| 8 | Checklist, CTA, sources | Quelle action cette semaine ? | Grille copiable, offre en entrée/sortie claire | Demander un devis comparable ou mesurer avant contact | Conserver CTA après valeur ; préciser le livrable remis, sans délai inventé. |

### Contrat des 150 premiers mots

Proposition de remplacement, à valider puis à écrire en prose naturelle :

> Vous ne cherchez probablement pas seulement un tarif mensuel. Vous voulez
> savoir combien votre entreprise devra vraiment dépenser pour obtenir des
> demandes : ce qui part chez Google, ce qui revient au freelance ou à l'agence,
> et ce qu'il faut parfois ajouter pour le suivi des appels, la page et les
> créations. Dans ce guide, nous séparons ces postes, comparons forfait,
> pourcentage et hybride sur un même périmètre, puis recalculons trois horizons
> de 3, 6 et 12 mois. Vous verrez aussi un seuil de CPL fondé sur votre marge,
> les cas où gérer en interne est plus raisonnable et les situations où nous
> vous conseillerions d'attendre. Tous les montants marqués « exemple
> illustratif fictif » sont des hypothèses : ils ne remplacent ni un devis daté,
> ni vos données de marge, ni la vérification de vos prospects.

### Éléments à supprimer

- « trois exemples complets », « trois budgets complets » et « facture complète » tant que des inconnues restent hors calcul ;
- l'affirmation de recherche « artefact CPL maximal » si le calcul n'est pas réellement visible dans le guide ;
- toute moyenne ou minimum de marché déduit de pages commerciales ;
- les fourchettes étrangères converties en euros sans périmètre, date, devise et scope ;
- une éventuelle promesse de batterie navigateur ou de test lecteur non observée par le relecteur.

### Éléments à conserver

- la phrase « Hagnéré Code n'est pas une source neutre » et le mauvais-fit explicite ;
- la séparation média/honoraires/coûts complémentaires ;
- les calculs A/B/C et leurs hypothèses, après renommage « simulations » ;
- la propriété du compte, les droits, l'historique et les 16 questions de devis ;
- les liens Google placés près des affirmations techniques et le refus d'une moyenne de marché.

## 10. Contre-audit après correction

| Problème | Priorité | Correction appliquée | Revalidation indépendante |
| --- | --- | --- | --- |
| P1-01 — « complet » contredit par les exclusions | P1 | Aucune : guide non modifié dans cet audit | À exécuter après réécriture sur hero, H2, registre, CTA et tableau. |
| P1-02 — pas de niveaux simple/central/exigeant du même cas | P1 | Aucune | Refaire les totaux, sensibilité et contrôle inverse. |
| P1-03 — même travail non spécifié | P1 | Aucune | Rejouer le comparatif avec le socle écrit et les mêmes inclusions. |
| P1-04 — CPL maximal promis dans la recherche mais absent du rendu | P1 | Aucune | Vérifier variables, définition de prospect qualifié et contrôle inverse. |
| P2-01 — sources publiques groupées et pages dynamiques | P2 | Aucune | Rouvrir chaque URL à la date de `dateModified`, retirer les prix non vérifiables. |
| P2-02 — base Insee non représentative d'un dirigeant/TPE | P2 | Aucune | Vérifier le libellé et séparer coût employeur/opportunité. |
| P2-03 — HT/TTC, taxes, engagement et sortie pas intégrés au TCO | P2 | Aucune | Ajouter colonne fiscale/contractuelle et calcul 6 mois. |
| P2-04 — statu quo/DIY non quantifié | P2 | Aucune | Ajouter un scénario report et heures internes sans double comptage. |
| P2-05 — benchmark international absent du guide publié | P2 | Aucune | Ajouter un encadré de contexte, sans convertir les prix étrangers en France. |
| P2-06 — CTA sans livrable concret ni délai vérifié | P2 | Aucune | Décrire le livrable réellement remis ; ne pas inventer de SLA. |
| P2-07 — readtime non vérifié | P2 | Aucune | Lancer mesure sur serveur actif puis comparer au registre 17 min. |
| P2-08 — route, HTML, OG et responsive non inspectés dans ce contre-audit | P2 | Aucune | QA navigateur 320/390/768/1024/1440, états et métadonnées. |

### Score après correction

Non applicable : aucune réécriture du guide n'a été effectuée dans ce rapport.
La porte de sortie visée après correction est **au moins 93/100**, avec aucun
axe sous 8 et Intention, Décision, Pédagogie, Profondeur, Preuve et Comparaison
à 9 ou 10. Ce score est une cible, pas un résultat observé.

## 11. Preuves techniques et visuelles

```text
Manifeste : hashes ci-dessus ; état Git déjà sale avant ce rapport sur plusieurs fichiers d'autres guides/docs ; aucune modification du guide par cet audit.
Calculs refaits : Node.js, A/B/C et croisements forfait/%/hybride vérifiés ; exemple CPL de la recherche vérifié manuellement (7 200 € = 7 200 €).
Sources rouvertes : Google Ads budgets/classement/qualité ; Insee 2025 ; pages MS Web/Viaduc et échantillon concurrentiel FR/US/UK/Canada consulté le 24/07/2026. Les pages dynamiques Ad-Works/Vizetoo n'ont pas toutes fourni un contenu revalidable dans la réouverture.
Liens vérifiés : URLs directes présentes dans le guide et tableau benchmark ; les docs Google conversion/prospects devront être rouvertes avant prochaine dateModified lorsqu'elles répondent 429.
Commandes : `npm run check:seo` = 35 fichiers, 229 tests passés ; `npm run measure:guide-readtime -- prix-gestion-google-ads` = HTTP 404 faute de serveur local sur le port attendu.
Rendu 320 / 390 / 768 / 1024 / 1440 : non exécuté dans cet audit ; aucune affirmation de QA visuelle.
Image sociale : fichier source inspecté ; rendu PNG non généré/inspecté.
Statut maximal prouvé : audit éditorial et concurrentiel en lecture seule, tests SEO globaux verts dans l'état partagé.
Réserve publication / indexation : ne pas publier une nouvelle date ni déclarer une QA visuelle ; réécrire, revalider les prix et les sources, lancer le serveur, contrôler route/HTML/OG/mobile, puis seulement refaire l'audit P3/P4. Cet audit ne prouve ni classement Google ni indexation.
```
