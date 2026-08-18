# Audit approfondi — `combien-coute-un-crm`

Date : 24 juillet 2026

Auditeur concurrentiel : agent P3 indépendant (France, États-Unis, Royaume-Uni,
Australie et sources européennes)

Snapshot : `src/app/guides/combien-coute-un-crm/page.tsx`, page locale
`http://localhost:3010/guides/combien-coute-un-crm`, dossier P1
`docs/research/combien-coute-un-crm.md`.

## 1. Verdict exécutif

```text
Lecteur exact : dirigeant de TPE/PME, indépendant ou responsable commercial qui voit un prix par utilisateur mais doit engager l'entreprise sur plusieurs années.
Question réelle : « Quel sera le coût total de ce CRM, de la reprise des données au départ, et quand un outil standard cesse-t-il d'être rationnel ? »
Décision attendue : acheter/tester un CRM standard, demander un cadrage de configuration, comparer un outil spécifique ou reporter l'achat faute de capacité interne.
Réponse actuelle en une phrase : additionner licences, options, mise en place, données, temps interne, administration et sortie sur 36 mois, puis comparer à périmètre et tâches égaux.
Défaut qui coûte le plus de valeur : les trois montants sont précis mais volontairement incomparables (Pipedrive Lite, HubSpot Pro, Salesforce Enterprise) ; le lecteur ne dispose pas encore d'un scénario normalisé pour trancher entre deux solutions ni d'un seuil de rentabilité standard/sur-mesure.
Niveau actuel : B
Priorité : haute
Statut : audité ; non corrigé et non contre-audité
P0 : 0 ; P1 : 6 ; P2 : 2
Verdict : NO-GO comme guide de référence au seuil de 90/100. Base éditoriale très utile, mais aucune passe n'est validée sur un snapshot corrigé.
```

Le guide est une base rare et sérieuse : il répond directement au prix affiché,
définit le TCO, chiffre les heures internes, signale les inconnues HubSpot,
refuse les faux taux d'échec, explique la sortie et déclare le conflit d'intérêt
du prestataire. La pédagogie d'ouverture (`page.tsx:245-279`) est bonne pour un
dirigeant. La page ne passe cependant pas le seuil strict : elle affiche des
totaux exacts sur trois produits et trois niveaux de service différents, mais
ne calcule pas un cas à périmètre métier commun ; elle ne montre pas le point où
la maintenance, l'adoption, les options, les crédits d'IA, la migration ou les
intégrations font basculer le choix. Un lecteur peut refaire une arithmétique,
mais pas encore défendre une décision d'achat devant son associé ou son DAF.

### Score avant correction

| Axe | Note /10 | Preuve localisable | Manque décisif |
| --- | ---: | --- | --- |
| Intention | 9 | promesse et exemples dans `:245-279`, trois scénarios en `:308-365` | nommer plus tôt le cas du dirigeant qui compare deux devis à fonctionnalités égales |
| Décision | 8 | grille `:797-828`, plan en huit étapes `:830-866` | pas de seuil de bascule, break-even ou critère go/stop lié au coût total |
| Pédagogie | 9 | définitions CRM/TCO et formules `:245-257`, `:383-434` | les scénarios nommés par éditeur peuvent être pris pour une recommandation malgré les avertissements |
| Profondeur | 8 | licences, données, connexions, temps, contrat, sortie `:383-723` | coût récurrent d'administration/support, adoption, sécurité, crédits/limites de contacts, taxes et intégrations restent hors calcul |
| Preuve | 8 | Salesforce/HubSpot/Pipedrive, Insee, CNIL, Data Act `:308-365`, `:444-522`, `:581-723` | tarifs affichés au 20/07 alors que l'audit est au 24/07 ; Pipedrive non rouvert dans le navigateur web, HubSpot rendu dynamique ; hypothèses 700/800 € non tarifaires |
| Comparaison | 7 | le guide avertit que les trois scénarios ne sont pas un classement `:310-317` et compare standard/spécifique `:725-771` | aucune comparaison A/B au même nombre d'utilisateurs, tâches, options, horizon et niveau de service |
| Originalité | 9 | trois socles, inconnues visibles, Data Act, export et grille copiable | pas de simulateur ou tableau de sensibilité qui montre le coût d'une erreur de choix |
| Style | 9 | ton direct, hypothèses honnêtes, contre-indication commerciale `:273-279`, `:857-866` | quelques nombres impressionnants peuvent ancrer le lecteur sur des offres éloignées de son cas |
| Conversion | 8 | CTA unique `:785-795`, proposition de revoir TCO et écarts, possibilité de ne rien développer | le livrable de cadrage n'est pas matérialisé par une feuille de calcul ou une question d'entrée |
| SEO/produit | 8 | H1, canonical, Article/BreadcrumbList, FAQ visible, liens connexes `:17-243` | `dateModified: 2026-07-21`, sources datées 20/07 ; local noindex et production/indexation non prouvées |

**Total : 83/100.** La comparaison est l'axe limitant. Aucune extension de
volume ne doit être ajoutée pour atteindre 90 : il faut apporter une décision
réellement nouvelle, recalculable et vérifiée.

## 2. Ce que le guide dit réellement

### Réponse et parcours

Le texte commence par la bonne scène : 14 €, 25 € ou 100 € par utilisateur ne
constituent pas le budget. Il traduit CRM et TCO (`:245-257`, `:383-398`) et
annonce trois totaux sur 36 mois avec réserves (`:259-279`). Il présente ensuite
la formule, des tarifs publics, le temps de l'équipe, la reprise de données,
les connecteurs, la prise en main, le contrat, la sortie, standard contre
spécifique, une grille à copier et une décision en huit étapes.

### Valeur déjà démontrée

- Les inconnues restent visibles : frais d'onboarding HubSpot, options, taxes,
  crédits, stockage, hausse, administration et sortie ne sont pas mis à zéro
  (`:355-365`).
- Les calculs sont auditables : `5×14×36 + 8×7×44,2 + 2×7×44,2 = 5 614 €`,
  `12×100×36 + 20×7×44,2 + 8×700 + 4×7×44,2 = 56 225,6 €`, et
  `20×175×36 + 35×7×44,2 + 20×800 + 10×7×44,2 = 155 923 €`.
- Les postes de TCO sont opérationnels : licences/options, mise en place,
  données, connexions, temps, départ et document justificatif (`:400-434`).
- L'adoption n'est pas réduite à une statistique : deux ou trois utilisateurs,
  cycle complet, export, points à 30/60/90 jours (`:640-651`).
- Le conflit d'intérêt est explicitement déclaré ; la page accepte que le CRM
  standard soit la bonne conclusion (`:273-279`, `:857-866`).
- Le Data Act n'est pas présenté comme un passe-droit : la page rappelle le
  champ, les dates et la nécessité de relire un contrat important (`:697-723`).

### Ce qui paraît complet sans encore fournir la décision

Les totaux « 5 614 / 56 226 + onboarding / 155 923 » mélangent niveau de
fonctionnalité, éditeur, effectif et complexité. L'avertissement « ne pas classer
» est honnête, mais il retire précisément la comparaison que le dirigeant vient
chercher. Il manque au moins un cas **même parcours, mêmes 12 utilisateurs,
mêmes intégrations, même niveau de support, même horizon**, comparant deux offres
et une option spécifique.

Le TCO liste l'administration, l'assistance, les options et les hausses, mais
les scénarios ne les chiffrent pas. Un prix d'entrée peut donc être relié à un
montant exact tandis que le coût de renouvellement, de support, de contact/stockage,
d'IA, de connecteurs ou de nettoyage annuel demeure seulement dans une liste.

La formule « outil spécifique » existe (`:767-771`), mais il n'y a ni coût de
développement illustratif, ni durée, ni coût de maintenance, ni coût d'abandon
permettant de calculer un seuil de bascule. La page refuse à juste titre les
fourchettes sans preuve ; elle peut néanmoins donner un modèle avec variables
propres au projet.

## 3. Benchmark France et international

Requêtes relancées le 24/07/2026 : `combien coûte un CRM`, `budget CRM PME
2026`, puis équivalents anglais aux États-Unis, au Royaume-Uni et en Australie.
Les concurrents ci-dessous servent à détecter les axes de couverture. Les tarifs
et affirmations de marché restent vérifiés chez les éditeurs ou organismes
primaires, jamais chez une agence seule.

| Ressource et URL directe | Marché | Réponse utile | Preuve/outil | Limite | Apport à intégrer ou réfuter |
| --- | --- | --- | --- | --- | --- |
| [Entreprisma — coût CRM PME](https://entreprisma.fr/comparatifs/combien-coute-un-crm-pour-pme) | France | gammes, licences, formation, migration et intégrations | TCO annoncé sur 12 mois | pourcentages et fourchettes sans pièces de devis | conserver l'idée des coûts additionnels, mais passer à des lignes et horizons vérifiables |
| [PromptConsulting — budget CRM TPE/PME](https://promptconsulting.fr/insights/combien-coute-crm-pme-2026) | France | déploiement, nettoyage, pipeline, automatisations, tests | vocabulaire proche des PME | agence qui vend le déploiement ; pas de scénario comparable | garder les tâches concrètes, ajouter coûts internes et seuils |
| [Tellao — budget CRM 2026](https://www.tellao.com/blog/budget-crm-entreprise-guide-complet) | France | TCO trois ans, segmentation, simulateur | outil de calcul annoncé | avantage du sur-mesure potentiellement intéressé, hypothèses non auditables | proposer un vrai tableau de sensibilité avec variables éditoriales explicites |
| [La Fabrique du Net — intégration CRM](https://www.lafabriquedunet.fr/agences/pages/agences-crm/tarifs) | France | budgets de prestation d'intégration | décompose une prestation | méthode et périmètres des tarifs peu documentés | demander livrables, jours, responsabilités et tests dans tout devis |
| [Inversify — MVP CRM/small business checklist](https://www.inversifymedia.com/blog/mvp-development-checklist-for-small-businesses) | États-Unis | support, hosting, monitoring, budget post-lancement, succès à 30–60 jours | checklist post-déploiement | contenu d'agence, pas un tarif primaire | ajouter support, monitoring et horizon de décision au TCO |
| [Sasanova — State of CRM Pricing Q1 2026](https://www.sasanova.com/guides/state-of-crm-pricing-q1-2026) | États-Unis | distingue sticker price, implémentation, migration et add-ons | rapport trimestriel annoncé | chiffres de fournisseur/rapport non méthodologiquement primaire ; ne pas reprendre 3–5× | garder les postes cachés sans importer ses multiples |
| [HubSpot TCO Report](https://www.hubspot.com/hubfs/Total%20Cost%20of%20Ownership/Total%20Cost%20of%20Ownership%20Report%202023.pdf) | États-Unis, source éditeur | décompose acquisition, implémentation, intégration, personnel | document officiel de HubSpot | 2023, vendeur intéressé, ne décrit pas une PME française en 2026 | utile comme exemple de catégories, jamais comme benchmark neutre |
| [Whito — CRM pricing UK 2026](https://whito.co.uk/research/crm-pricing-uk/) | Royaume-Uni | licence contre implémentation et migration, TCO | structure de coût lisible | agence/consultant ; chiffres à vérifier | ajouter une comparaison licence/implémentation et sortie |
| [UK Digital Marketplace — Dynamics 365 pricing PDF](https://assets.applytosupply.digitalmarketplace.service.gov.uk/g-cloud-14/documents/721707/291621348803579-pricing-document-2024-04-25-1534.pdf) | Royaume-Uni, achat public | jours de cadrage, migration, setup, configuration, formation/support | exemple de proposition et total £11 400 / £6 650 | tarifs de fournisseur et de marché public 2024, pas offre universelle | montrer la structure d'un devis avec jours et livrables, pas importer le total |
| [AMBR IT — CRM implementation Australia 2026](https://www.ambrit.com.au/blog/crm-implementation-cost-australia-2026) | Australie | décomposition projet, données, intégration, adoption | donne un axe 15–25 % données selon l'agence | expérience de prestataire, pas étude statistique indépendante | intégrer migration, mais exclure le pourcentage sans échantillon primaire |
| [SOL Business Solutions — CRM implementation Australia](https://solbusiness.com.au/blog/crm-implementation-cost-australia-2026/) | Australie | coût tiré par scope, données et intégrations | expose un QuickStart vendeur | prix de sa propre offre, conflit explicite | comparer les livrables et hypothèses, jamais sa fourchette |
| [Commission européenne — Data Act expliqué](https://digital-strategy.ec.europa.eu/en/factpages/data-act-explained) | UE/international | contrats cloud, export lisible, switching, suppression des frais au 12/01/2027 | source institutionnelle accessible | ne tranche pas l'applicabilité à chaque CRM ou contrat | renforcer la section sortie et bornes juridiques |

### Saturation

Les pages françaises et anglophones abondent en fourchettes, gammes et slogans
« coûts cachés ». Elles se différencient rarement par un calcul égalisé. Les
pages d'agences ont souvent le bon inventaire (migration, formation,
intégrations), mais leurs prix sont leurs offres, pas le marché. L'opportunité
est de donner au dirigeant une comparaison qui tient même lorsque les éditeurs,
devis et monnaies changent : unité de travail, horizon, effectif, options,
support, données et sortie.

## 4. Matrice de gain d'information

| Question décisive | Couverture concurrente | Couverture actuelle | Manque | Réponse supérieure à produire |
| --- | --- | --- | --- | --- |
| Quel est le prix affiché ? | beaucoup de catalogues et éditeurs | bonne, `:444-522` | prix observés datés 20/07, Pipedrive/HubSpot à revalider | page tarifaire datée, devise, HT/TTC, engagement et options visibles |
| Quel est le coût total sur 36 mois ? | Tellao/Whito annoncent TCO | bonne formule, `:383-434` | administration, support et usage non chiffrés | tableau de TCO avec inconnue, propriétaire, fréquence et preuve |
| Peut-on comparer deux éditeurs ? | comparatifs classent souvent des offres différentes | faible, `:308-317` | pas de périmètre égal | scénario A/B normalisé : tâches, postes, données, intégrations, support, sortie |
| Le temps du dirigeant compte-t-il ? | rarement | bonne base Insee, `:319-331`, `:524-574` | coût d'opportunité et taille <10 salariés | remplacer par coût chargé réel, inclure heures différées et sensibilité |
| Quand le sur-mesure devient-il rationnel ? | agences le suggèrent | formule qualitative, `:725-771` | aucun break-even ni coût de maintenance spécifique | équation à fonctions égales avec variables de projet et contrôle inverse |
| Que coûtent migration et intégrations ? | agences détaillent les postes | bonne liste, `:576-638` | pas de charge par volume/erreur/rollback | échantillon, règles de doublons, tests d'erreur et réserve de retour |
| Que se passe-t-il au renouvellement ? | hidden costs souvent évoqués | partiel, `:653-723` | crédits, contacts, stockage, indexation, sièges dormants | tableau année 1/2/3 et clauses qui font varier la facture |
| L'adoption est-elle une dépense ? | US ajoute post-launch | 30/60/90 jours présents, `:640-651` | aucun coût de support et seuil de décision | heures d'aide, utilisateurs actifs, taux de tâches complètes, stop/go |
| Que récupère-t-on à la sortie ? | Data Act et exports variables | bonne intention, `:685-723` | test d'export et liens fichiers/notes non chiffrés | export réel, format, délai, frais, rapprochement et plan de réimport |
| Le lecteur doit-il acheter maintenant ? | peu de contre-cas | bon filtre, `:857-866` | CTA sans livrable d'entrée | feuille TCO + deux devis + échantillon de données comme livrable clair |

## 5. Faits et fraîcheur

| Affirmation | Verdict | Source primaire actuelle | Limite | Correction requise |
| --- | --- | --- | --- | --- |
| Salesforce affiche Suite Starter 25 €, Pro 100 €, Grands groupes 175 €, Illimité 350 €, Agentforce 1 Sales 550 € par utilisateur/mois, et une suite gratuite | confirmé au 24/07 | [Salesforce FR](https://www.salesforce.com/fr/sales/pricing/) (lignes 13–31, 64–84, 118–176, 218–269) | page informative, devise/engagement/options à sélectionner ; prix susceptible de changer | revalider la date dans l'article et ne jamais transformer catalogue en devis |
| HubSpot affiche 10/100/150 € dans la page produit actuelle | à revalider | [HubSpot Sales Hub](https://www.hubspot.fr/products/sales) | rendu dynamique ; l'ancien article officiel présente d'autres montants et onboarding ; le snapshot 20/07 est insuffisant | conserver divergence et dater une capture ou un devis, pas déduire onboarding zéro |
| Pipedrive EUR 14/39/59/79 HT en facturation annuelle | plausible, non rouvert par web tool le 24/07 | [Pipedrive pricing](https://www.pipedrive.com/fr/pricing?currency=EUR) | page renvoyait une erreur à l'ouverture web ; prix et promotions peuvent évoluer | P1 : rouvrir dans navigateur réel ou retirer l'affirmation datée |
| 44,2 € est le coût horaire 2025 des services marchands, entreprises françaises ≥10 salariés | confirmé | [Insee](https://www.insee.fr/fr/statistiques/2381340), publié 02/07/2026 | repère statistique, pas salaire/tarif/dirigeant/TPE | garder le champ dans le paragraphe et inviter à remplacer par coût chargé |
| Les traitements commerciaux peuvent retenir trois ans pour certains prospects | confirmé mais borné | [Référentiel CNIL PDF](https://www.cnil.fr/sites/cnil/files/atoms/files/referentiel_traitements-donnees-caractere-personnel_gestion-activites-commerciales.pdf) | référentiel exclut certains secteurs et n'est pas une durée universelle ; base légale et finalité déterminent | préciser le champ et rappeler registre/base légale |
| Data Act impose préavis max deux mois, transition max 30 jours, récupération et suppression progressive des frais | globalement confirmé mais formulation à sécuriser | [Data Act FR EUR-Lex](https://eur-lex.europa.eu/eli/reg/2023/2854/oj) et [Commission](https://digital-strategy.ec.europa.eu/en/factpages/data-act-explained) | champ « services de traitement de données », dates et exceptions ; ne remplace pas analyse contractuelle | citer articles exacts, distinguer service ordinaire, pénalité, frais de switching et egress |
| Trois totaux sont des exemples fictifs | confirmé | arithmétique du code `:308-365` | hypothèses 700/800 € choisies par la rédaction | conserver « variable pédagogique », donner scénario égalisé en complément |

### Contradictions ou risques de lecture

- Le titre promet « combien coûte un CRM », mais les seuls montants comparables
  sont les licences ; les totaux de trois éditeurs ne sont pas comparables. Le
  lecteur peut néanmoins retenir Salesforce = 155 923 € comme réponse générale.
- « 5 postes, 12 utilisateurs, 20 utilisateurs » mélange postes et utilisateurs
  sans expliquer si les droits, contacts ou licences légères changent selon le
  produit ; normaliser le vocabulaire.
- La formule de TCO inclut administration, assistance et hausses, alors que les
  trois budgets affichés les excluent. Le contenu le dit, mais l'œil retient le
  nombre exact.
- Le Data Act est traité correctement avec prudence, mais la page doit éviter
  « au moins 30 jours après la transition » si la situation contractuelle ou le
  statut du service change ; demander une lecture juridique en cas d'enjeu.
- Les tarifs sont annoncés le 20 juillet et `dateModified` est au 21 juillet ;
  une republication le 24 juillet sans nouvelle date de revalidation dégrade la
  confiance promise par le guide.

### Faits à retirer plutôt qu'affaiblir

- fourchettes d'agence, « 50–100 % de budget supplémentaire », 15–25 % de
  migration ou multiples 3–5× sans protocole primaire ;
- tout classement du CRM « moins cher » à partir des trois scénarios actuels ;
- tout prix de connecteur ou de maintenance non daté, HT/TTC et périmètre ;
- toute conclusion « rentable » pour le spécifique sans valeur du temps, coût
  de maintenance, durée, risques et réversibilité ;
- toute assurance juridique tirée du Data Act ou de la CNIL sans vérifier le
  champ et les finalités.

## 6. Scénarios et calculs à construire

### Contrôle des calculs présents

Les trois calculs de la page sont justes sous leurs hypothèses :

```text
5×14×36 + 8×7×44,2 + 2×7×44,2 = 5 614,00 €
12×100×36 + 20×7×44,2 + 8×700 + 4×7×44,2 = 56 225,60 €
20×175×36 + 35×7×44,2 + 20×800 + 10×7×44,2 = 155 923,00 €
```

Le premier est lisible. Les deux autres arrondissent correctement mais ajoutent
des coûts dont la source est purement pédagogique. Rien ne prouve que ces jours,
tarifs et réserves décrivent un projet réel ; cette limite est bien dite.

### Scénario égalisé indispensable

Le correctif doit ajouter un scénario **central neutre**, sans changer les
montants publics des pages éditeurs : 12 utilisateurs, même pipeline, 2
intégrations, 10 000 contacts, une importation initiale, même support 8 h/an,
même export de sortie, 36 mois, mêmes taxes exclues, même coût interne de
44,2 €/h à remplacer. Comparer ensuite :

| Ligne sur 36 mois | Offre A | Offre B | Spécifique | Hypothèse/preuve |
| --- | ---: | ---: | ---: | --- |
| Licences + options + crédits | à remplir | à remplir | 0 ou composants à remplir | page tarifaire/devis daté |
| Configuration et automatisations | jours × taux | jours × taux | cadrage + développement | devis et livrables |
| Nettoyage/import/rollback | heures × taux | heures × taux | heures × taux | échantillon de données |
| Intégrations et surveillance | coût des deux connecteurs | coût des deux connecteurs | build + hébergement | tests d'erreur |
| Formation/support/administration | heures × coût interne | idem | idem + maintenance | journal 30/60/90 jours |
| Hausses, minimums, contacts/stockage/IA | variable explicite | variable explicite | hébergement/usage | clause ou hypothèse |
| Export et réimport | test + heures | test + heures | script + heures | export réellement ouvert |
| **TCO** | somme connue + inconnues | somme connue + inconnues | somme connue + inconnues | aucune cellule inconnue = zéro |

### Formules et sensibilité

```text
TCO = licences + options/usage + intégrations + migration + formation
      + administration/support récurrents + coûts de changement

Coût du temps interne = heures × coût chargé réel
Coût d'une erreur de périmètre = heures mensuelles perdues × mois × coût chargé
                              + coût incident + coût du retard commercial

Seuil spécifique (simplifié) = TCO standard évitable − TCO spécifique évitable
Décision : ne pas appeler cela « rentable » si les hypothèses de valeur,
maintenance, risque et durée ne sont pas écrites.
```

Exemple pédagogique de sensibilité : 4 h d'administration mensuelle à 44,2 €/h
pendant 36 mois représentent `4 × 44,2 × 36 = 6 364,80 €`. À 8 h/mois, le même
poste atteint `12 729,60 €`. Cette différence peut dépasser la licence d'entrée,
mais elle ne justifie pas seule un développement : vérifier adoption, sécurité,
intégration, valeur de la règle métier et coût de maintenance.

**Horizon :** 36 mois pour abonnement et sortie ; 12 mois additionnels si le
contrat augmente selon contacts, sièges, crédits ou support.

**Inclus :** montants explicitement prouvés, temps interne, données,
intégrations, adoption, administration et export. **Exclus à nommer :** TVA,
change, remises non garanties, marketing, coût d'opportunité du chiffre
d'affaires, incident non prévu, conseil juridique et audit de sécurité.

**Variable qui fait basculer la décision :** coût récurrent réel par mois et
écart fonctionnel qui oblige les commerciaux à contourner le CRM. Sans mesure
de ces deux variables, un prix catalogue n'est pas une décision.

## 7. Comparaison et position professionnelle

| Option | Ce qu'elle optimise | Risque/coût dominant | Cas où elle gagne | Position professionnelle |
| --- | --- | --- | --- | --- |
| CRM gratuit/entrée de gamme | apprentissage rapide, petite équipe | limites d'export, contacts, automatisations, support | processus standard et faible volume | à tester en premier si le cycle complet passe |
| CRM standard configuré | couverture générale avec accompagnement | licences, intégrations, adoption, dépendance au modèle | 6–20 utilisateurs et règles courantes | choix par défaut après essai documenté |
| CRM enterprise | gouvernance, droits, profondeur et écosystème | licence, admin, modules, mise en œuvre et complexité | équipes nombreuses, obligations et processus déjà stabilisés | ne pas acheter pour le prestige ou une seule fonction |
| CRM spécifique/no-code | règle métier différenciante, contrôle du flux | investissement, maintenance, sécurité, réversibilité | écart récurrent et mesuré que le standard ne couvre pas | défendable seulement avec TCO égalisé et propriétaire interne |
| Reporter/acheter autrement | éviter un projet sans capacité d'adoption | coût de rester sur l'outil actuel | personne ne peut nettoyer, tester ou administrer | conclusion professionnelle, pas échec |

**Périmètre commun requis :** mêmes tâches, utilisateurs, contacts, intégrations,
support, sécurité, horizon et plan de sortie. L'offre la moins chère est celle
qui satisfait ce périmètre avec les inconnues et responsabilités les plus
faibles — pas celle qui affiche le plus petit €/utilisateur.

**Position Hagnéré Code :** commencer par un essai réel et un export. Si un CRM
standard couvre le cycle, les données et la sortie à TCO supportable, le choisir.
Si les écarts sont importants, récurrents, mesurés et coûteux, financer un
cadrage d'outil spécifique resserré ; ne pas vendre un logiciel sur mesure parce
que le devis CRM est mal comparé.

**Cas où l'opposé gagne :** un CRM standard peut perdre face à une règle de
calcul critique, une intégration propriétaire ou une exigence de droits que le
standard ne peut absolument pas tenir ; à l'inverse, un spécifique perd face à
un outil existant si l'équipe n'a ni temps de recette ni responsable de
maintenance.

**Ce que nous déconseillons :** comparer les trois totaux actuels comme un
classement, supprimer les coûts inconnus par commodité, ou promettre qu'un
développement est rentable sans scénario de valeur et de maintenance.

## 8. Objections et cas limites

| Objection loyale | Réponse prouvée | Incertitude | Conséquence |
| --- | --- | --- | --- |
| « Le prix par utilisateur est tout ce que je dois payer. » | migration, temps, options, intégrations, administration et sortie sont listés `:383-434` | volume réel, modules, support | demander une ligne et un justificatif pour chaque poste |
| « Le CRM gratuit ne coûte rien. » | il peut convenir si cycle complet, export et équipe simple ; le temps et les limites restent | limite fonctionnelle et coût d'une sortie | tester avant d'acheter, calculer heures et données |
| « Un devis HubSpot mentionne zéro onboarding. » | deux pages officielles divergent ; le guide garde l'inconnue `:510-521` | offre, contrat, période, niveau de service | obtenir devis/bon de commande daté, ne pas remplir zéro |
| « Salesforce est forcément trop cher. » | le prix n'est pas comparable sans tâches, droits, options, support et adoption | périmètre enterprise réel | normaliser le scénario avant de conclure |
| « Le sur-mesure sera rentable à 20 utilisateurs. » | le nombre d'utilisateurs seul ne prouve rien `:142-145` et `:725-771` | charge évitable, valeur, maintenance | écrire une équation et un contrôle inverse |
| « Les frais de sortie disparaîtront avec le Data Act. » | la suppression vise les frais de switching dans le champ du règlement à partir du 12/01/2027, pas les services ordinaires/pénalités | qualification du service/contrat | demander conseil juridique et tester l'export |
| « L'équipe adoptera le CRM si on la forme une fois. » | la page recommande essais et mesures à 30/60/90 jours `:640-651` | usage durable, soutien managérial | chiffrer formation, aide et administration récurrente |
| « Nous n'avons pas le temps de changer maintenant. » | absence de capacité est une raison de reporter `:857-866` | coût du statu quo et urgence | comparer coût du report avec coût du projet, pas forcer l'achat |

## 9. Plan de réécriture localisable

| Ordre | Section | Question | Ajout demandé | Décision | Action |
| ---: | --- | --- | --- | --- | --- |
| 1 | Ouverture `:245-279` | quel lecteur et quelle décision ? | annoncer le comparatif égalisé, le TCO et la possibilité de ne rien acheter | savoir ce qu'on va décider | conserver l'ouverture humaine, préciser prix catalogue ≠ TCO |
| 2 | Scénarios `:308-381` | les montants sont-ils comparables ? | garder les trois exemples comme repères, ajouter un scénario central commun aux offres | éviter l'ancrage éditeur | renommer « repères de méthode », déplacer le classement après égalisation |
| 3 | Formule `:383-434` | quelles lignes comptent ? | ajouter contacts/stockage/crédits/IA, support, sécurité, RGPD, indexation et administration récurrente | TCO complet | conserver le tableau, marquer chaque ligne prouvée/hypothétique/inconnue |
| 4 | Tarifs `:444-522` | quel prix est actuel ? | revalidation 24/07, devise, HT/TTC, engagement, dynamique HubSpot/Pipedrive | confiance dans les nombres | ouvrir les pages en navigateur et dater une preuve |
| 5 | Temps `:524-574` | combien d'heures l'entreprise immobilise ? | coût chargé réel + coût d'opportunité + sensibilité 4/8 h mensuelles | inclure le coût invisible | conserver Insee comme repère encadré |
| 6 | Données/intégrations `:576-651` | quel travail se cache derrière un connecteur ? | volumes, doublons, rollback, fréquence, monitoring et responsable | chiffrer la reprise | ajouter un exemple de 10 000 contacts et deux intégrations |
| 7 | Contrat/sortie `:653-723` | que coûte le départ ? | articles Data Act bornés, egress, fichiers/notes, export d'essai et plan de réimport | sécuriser réversibilité | conserver avertissement juridique, ajouter preuve d'export |
| 8 | Standard/spécifique `:725-783` | quand construire ? | scénario coût/maintenance/valeur, seuil et contrôle inverse | choisir sans opinion commerciale | ne pas mettre de chiffre de marché artificiel |
| 9 | Grille/CTA `:785-828` | quelle prochaine action ? | ressource copiable : feuille TCO, deux devis, tâches, inconnues, export | demander un cadrage utile | montrer ce que Hagnéré Code relit et peut refuser |
| 10 | Plan/sources `:830-942` | comment vérifier ? | dates et sources réouvertes, `dateModified` synchronisée, limites | auditable | revalider avant publication |

### Contrat des 150 premiers mots

« Vous voyez une offre CRM à 14 €, 25 € ou 100 € par utilisateur et vous
cherchez à savoir ce que votre entreprise paiera vraiment. Le prix catalogue ne
comprend pas forcément le nettoyage des contacts, la migration, les connexions,
la formation, l'administration, les options, les hausses ni la sortie. Dans ce
guide, nous allons comparer un même parcours commercial sur 36 mois, puis
montrer trois repères chiffrés et une feuille pour deux devis. Vous saurez ce
qui est prouvé, ce qui reste à confirmer, quand un CRM standard suffit et
quelles données justifieraient un outil sur mesure. Les chiffres pédagogiques ne
sont ni devis ni moyenne de marché. »

### À conserver

- l'ouverture destinée aux dirigeants et la définition simple de CRM/TCO ;
- le conflit d'intérêt et la possibilité de choisir un standard ou de reporter ;
- les inconnues HubSpot explicitement non nulles ;
- les lignes de TCO, la grille copiable et le test d'export ;
- Insee avec champ statistique et CNIL/Data Act avec limites.

### À couper ou reformuler

- toute lecture implicite des trois totaux comme classement de produits ;
- les seuils par nombre d'utilisateurs lorsque rien ne les prouve ;
- toute promesse de rentabilité du spécifique sans maintenance et valeur ;
- la date 20/07 après revalidation du 24/07 ;
- les lignes « inconnues » qui ne donnent pas un propriétaire ou un document à
  demander.

## 10. Contre-audit après correction

| Problème | Priorité | Correction attendue | Revalidation indépendante |
| --- | --- | --- | --- |
| P1-01 — scénarios éditeurs non comparables | P1 | ajouter un scénario central à périmètre identique et renommer les trois repères | refaire le même calcul pour A/B/spécifique, vérifier unités et horizon |
| P1-02 — postes TCO récurrents non chiffrés | P1 | support, admin, options, contacts, stockage, crédits, IA, indexation, taxes/HT-TTC en inconnues ou valeurs projet | vérifier que chaque ligne a preuve, hypothèse, fréquence et propriétaire |
| P1-03 — absence de break-even standard/spécifique | P1 | équation, coûts de maintenance et contrôle inverse propres au projet | tenter la décision avec données fictives, refuser toute moyenne universelle |
| P1-04 — adoption et coût du statu quo non reliés au budget | P1 | heures d'aide, usage 30/60/90, coût du report et seuil go/stop | relire par un dirigeant non technique ; une mesure doit changer une décision |
| P1-05 — fraîcheur des prix et statut Data Act | P1 | revalider Salesforce/HubSpot/Pipedrive, borner articles et dates juridiques, synchroniser `dateModified` | rouvrir sources primaires et comparer texte/code/registre |
| P1-06 — migration/intégrations sans scénario de rollback | P1 | volume, doublons, erreurs, monitoring, import test et sortie testée | exécuter un cas de doublon/indisponibilité/export et conserver preuve |
| P2-01 — ressource de conversion trop implicite | P2 | feuille TCO copiable avec deux devis et liste de pièces à fournir | vérifier CTA, cas de renoncement et absence de promesse |
| P2-02 — statut SEO/production non prouvé | P2 | QA build/deployed, canonical, sitemap, OG, JSON-LD et robots séparés | navigateur local + URL de production ; ne pas appeler indexation sans Search Console |

### Score après correction cible

| Axe | Cible /10 | Condition |
| --- | ---: | --- |
| Intention | 9 | décision à périmètre égal dès l'introduction |
| Décision | 9 | break-even et stop/go documentés |
| Pédagogie | 9 | produits, variables, HT/TTC et inconnues expliqués |
| Profondeur | 9 | TCO récurrent, adoption, migration, intégrations, sécurité et sortie |
| Preuve | 9 | sources primaires fraîches et bornées |
| Comparaison | 9 | A/B/spécifique sur même tâches, horizon et support |
| Originalité | 9 | feuille de sensibilité et coût de dérive |
| Style | 9 | aucun ancrage trompeur, opinion conditionnelle |
| Conversion | 9 | livrable de cadrage concret et possibilité de renoncer |
| SEO/produit | 9 | date/JSON-LD/QA/déploiement distingués |

Seuil : **90/100 et aucun axe sous 8**. La cible n'est atteinte qu'après
réécriture, nouvelle lecture humaine, revalidation primaire et QA indépendante.

## 11. Preuves techniques et visuelles

```text
Manifeste : entrée `combien-coute-un-crm` dans `src/lib/guides.ts`, non modifiée dans cet audit.
Calculs refaits : 3 076 mots visibles dans `main`; les trois arithmétiques donnent 5 614,00 €, 56 225,60 € et 155 923,00 € sous les hypothèses publiées.
Sources rouvertes le 24/07/2026 : Salesforce FR, HubSpot FR, Insee, CNIL, Data Act/EUR-Lex et Commission européenne ; Pipedrive URL retournée en erreur par l'ouverture web et à rouvrir dans un navigateur réel avant republication.
Liens locaux : page, `/robots.txt` et `/sitemap.xml` HTTP 200 ; liens externes et internes à relancer après correction.
JSON-LD : 2 blocs détectés dans le rendu local, Article et BreadcrumbList définis dans la page ; FAQ visible sans FAQPage.
Rendu 320 / 390 / 768 / 1024 / 1440 : 1 H1, CTA présent, aucun débordement horizontal, aucune table/pre/code tronqué ; logs navigateur error/warning vides.
Image sociale : route OG déclarée (`opengraph-image.tsx`) et métadonnées présentes ; aucun audit visuel de l'image source distinct dans cette passe.
Statut maximal prouvé : inspection source + rendu local ; aucune preuve de build final, déploiement actif, traitement sitemap ou indexation Google.
Réserve publication : local `noindex, nofollow` attendu ; ne pas le confondre avec production. Vérifier canonical/robots/sitemap/JSON-LD et URL déployée séparément.
```

### Empreintes du snapshot

```text
src/app/guides/combien-coute-un-crm/page.tsx
  b8de6edfdd2f31c0d2d6fb65242994e6f83bf9125a28a3a23babcd4f5a9405c9
src/app/guides/combien-coute-un-crm/opengraph-image.tsx
  71f45a5286af096487dd4fba102f49618630f56bc343d4ea106189b3665846da
src/lib/guides.ts
  8663e6e84352121ec854393e049492a1c2b72f242166141e5d31e0911b43cb09
docs/research/combien-coute-un-crm.md
  6c9057c8702bfebc0f30a5261ffe86880abd0a59328ceb79ead13dfc0498814f
docs/charte-qualite-guides.md
  5ee616faa4959dc8ad2b0eb19a5b19ffbf53299b62665700093c5c176b0b8491
docs/workflow-maitre-guides-4-passes.md
  91f6caabd28fdf90c33198594894955d175871d218987457af3a7aff5d593631
docs/regle-or-vigilance-seo-publication.md
  6109eec7f4b0cfedeffe8bd92efe0d5db31d4360d51dd8b7ebbd2b9bdc43a7f6
docs/roadmap-guides-seo.md
  b472449bf780d6e22da888e8a0ec2eee53e834b86ebbf97fbfb5e3bbdedba2f4
docs/audits/giga-audit-2026-07-24/_modele-audit-guide.md
  1871570ce33c2e6eebbb31dac56571b5f9e84229a48fedd26b50ad80db87a55f
```

Ce rapport est un audit P3 indépendant. Il n'a pas modifié le guide, le
registre, le code, le manifest ni l'état de déploiement.
