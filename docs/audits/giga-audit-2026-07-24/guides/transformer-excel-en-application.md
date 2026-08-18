# Audit giga — `transformer-excel-en-application`

**Date de l'audit :** 24 juillet 2026  
**Auditeur :** audit indépendant P3 (lecture, recherche, vérifications locales et navigateur)  
**Périmètre :** page publiée dans le dépôt, entrée de registre, dossier de recherche, composant de diagnostic, métadonnées/JSON-LD, liens ciblés, rendu local aux largeurs prévues, tests ciblés.  
**Statut de publication observé :** le guide est présent dans le code et répond en local. Cette vérification ne prouve ni son déploiement actuel ni son indexation Google.

## Verdict

**NO-GO pour une promesse de guide “meilleur du marché” : reprise P1 obligatoire avant de le considérer comme exemplaire.**

Le socle est nettement meilleur qu'un article SEO générique : l'introduction parle à un dirigeant confronté aux copies Excel, le guide accepte honnêtement de conserver Excel, le diagnostic est local et sans formulaire, la migration progressive est concrète et la CTA propose une décision plutôt qu'un devis automatique. Le rendu est propre et les liens importants fonctionnent en local.

Mais le guide ne tient pas encore la promesse de profondeur du cahier des charges. Il annonce quatre solutions alors que le lecteur doit comparer au moins cinq décisions de même périmètre (ne rien changer, fiabiliser Excel, acheter, no-code/low-code nommé, sur-mesure). Il ne donne qu'un exemple de licence, sans scénarios simple/central/exigeant, sans sensibilité au nombre d'utilisateurs ou au temps interne, et ses sources sont presque toutes reléguées en bas de page. Le dossier de recherche promettait plusieurs angles différenciants qui ne sont pas matérialisés dans la page : limites concrètes des plateformes, maintenance et shadow IT, plan B en cas d'échec, test de sauvegarde/restauration, sortie technique, code et réversibilité.

La décision éditoriale recommandée est donc : **conserver l'architecture et le ton, mais ajouter une couche de preuve, de comparaison et de décision chiffrée avant publication “référence”.** Ne pas allonger artificiellement par des H2 : chaque ajout doit répondre à une décision réelle du dirigeant.

## Scorecard avant correction

Barème de la charte (seuil attendu : 90/100, aucun axe sous 8 et Intention, Décision, Pédagogie, Profondeur, Preuve, Comparaison à 9 ou plus).

| Axe | Score | Constat | Seuil atteint ? |
|---|---:|---|---|
| Intention dirigeant | 8/10 | Problème reconnaissable dès l'ouverture, mais peu de repères quantifiés dans les 150 premiers mots. | Non |
| Décision | 7/10 | Diagnostic utile, mais seuils et scénarios incomplets ; impossible de calculer le point de bascule entre options. | Non |
| Pédagogie | 8/10 | Vocabulaire généralement traduit et exemples humains ; certaines notions (TCO, no-code, historique) restent sans exemple observable. | Non |
| Profondeur | 5/10 | Migration, RGPD et contrat sont amorcés ; limites produit, maintenance, incident, sauvegarde et sortie sont trop génériques. | Non |
| Preuve | 6/10 | Sources officielles pertinentes, mais citations éloignées des affirmations et manque de sources pour les recommandations opérationnelles. | Non |
| Comparaison | 5/10 | “Power Apps ou plateforme no-code” fusionne deux familles et l'option zéro n'est pas dans la table. | Non |
| Originalité | 7/10 | Diagnostic local, coût sur quatre ans et sortie sont de bons angles ; ils ne sont pas poussés jusqu'au test de sensibilité. | Non |
| Style humain | 8/10 | Ton direct, non culpabilisant, adapté à une PME ; densité de tableaux à équilibrer par des mini-scènes. | Non |
| Conversion | 8/10 | CTA unique et concrète, sans promesse abusive ; il manque un livrable de préqualification plus précis. | Non |
| SEO/produit | 8/10 | H1, canonical, Article/BreadcrumbList, maillage et OG corrects localement ; indexation et production non prouvées. | Non |
| **Total** | **70/100** | **Base publiable comme brouillon avancé, pas comme page de référence.** | **NO-GO** |

### Priorités

- **P0 : aucune** détectée dans le code ou le contenu lors de cet audit.
- **P1 :** scénarios et sensibilité ; comparaison à cinq voies ; sources au fil de la lecture ; matérialisation des angles annoncés par le dossier de recherche ; diagnostic enrichi et explicitement indicatif.
- **P2 :** précision CNIL/responsable de traitement ; distinction archive légale/historique applicatif ; clauses de reprise (Git, sauvegardes, SLA, escrow ou procédure de sortie) ; propriétaire opérationnel et maintenance ; enrichissement du benchmark produit.

## Ce que contient réellement la page

### Promesse et parcours

Le hero promet d'aider une entreprise dont Excel est devenu difficile à partager, contrôler ou faire évoluer, puis propose de distinguer Excel fiabilisé, logiciel existant et application métier (`page.tsx:166-208`). La première décision est saine : “commencez par l'option la moins coûteuse” (`page.tsx:256-262`).

Le parcours suit :

1. corriger la coédition, la structure et les ressaisies avant de remplacer Excel (`:310-351`) ;
2. utiliser un diagnostic local à huit signaux (`:353-368`) ;
3. comparer quatre réponses (`:370-413`) ;
4. traduire colonnes, formules et habitudes en données, règles et écrans (`:415-456`) ;
5. comparer un coût sur quatre ans avec un exemple Power Apps (`:458-504`) ;
6. migrer par échantillon, pilote et ancien fichier en lecture seule (`:506-543`) ;
7. traiter données, résidence et archives (`:545-573`) ;
8. demander une restitution, les accès et les droits au contrat (`:575-618`) ;
9. observer un cas fictif puis décider en trente jours (`:620-678`) ;
10. passer à une CTA d'examen du besoin (`:680-689`).

### Ce qu'un lecteur peut déjà décider

- Il peut tester une coédition Microsoft avant de lancer un projet.
- Il peut repérer les symptômes qui justifient une qualification (droits, historique, intégrations, incidents).
- Il comprend qu'une licence n'est pas le coût total et qu'une migration doit être progressive.
- Il sait demander un export, les accès et des clauses de reprise.
- Il dispose d'un plan de trente jours pour documenter le processus.

### Ce qu'il ne peut pas encore décider avec assez de confiance

- Le point où le temps interne et l'administration rendent un abonnement moins intéressant qu'un outil existant ou un sur-mesure.
- La différence entre une plateforme de type Power Apps, une base no-code et un constructeur mobile/web.
- Le coût et la difficulté d'une sortie avec automatisations, pièces jointes, historiques et identités.
- La couverture réelle des sauvegardes, de la restauration, de l'audit et de la continuité.
- Le plan B si le pilote échoue ou si la personne qui connaît les formules quitte l'entreprise.
- La quantité et la qualité de données qui peuvent être importées sans supprimer silencieusement des valeurs.

## Benchmark de recherche et saturation

Recherche effectuée le 24 juillet 2026, avec une lecture France puis États-Unis/Royaume-Uni et un marché additionnel. Les résultats commerciaux servent à comparer la couverture, pas à valider leurs promesses.

### Requêtes représentatives

- France : `transformer fichier Excel en application métier PME coût Power Apps no-code`.
- États-Unis : `turn Excel spreadsheet into business application migration cost no-code US`.
- Royaume-Uni : `replace Excel with business app UK SME Power Apps low-code migration`.
- Australie/anglais : `convert Excel to app Australia SME no-code spreadsheet`.

### Ce que couvrent les meilleurs résultats

| Marché/source | Ce qui est utile pour le lecteur | Ce qui reste commercial ou incomplet |
|---|---|---|
| Microsoft Learn, conversion Excel vers application canevas | Trois voies (upload Dataverse, connexion Excel cloud, canevas vide), table structurée exigée, risque de mismatch de types, upload jusqu'à 5 Go, stockage cloud requis. | Ne traite pas le coût total, la gouvernance PME, la sortie ni la migration métier. |
| Microsoft FAQ Excel-to-table/app | La première feuille/plage peut générer table et app ; métadonnées générées à revoir car pas garanties exactes. | Pas de comparaison avec Excel fiabilisé, ERP ou sur-mesure. |
| Zerobug et Alticap (France) | Cas d'usage visibles : interventions mobiles, stocks, approbations, connexion Excel/SharePoint/Dataverse ; promesse de délais qui aide à formuler les questions. | Partenaires vendeurs ; “inclus dans Microsoft 365” et délais 2 jours/4 semaines non établis comme tarifs ou engagements généraux. |
| Appizy (international) | Montre l'attente “préserver les formules, web/mobile, sans Excel installé”. | Promesse de conversion en minutes ; sécurité, droits, maintenance et propriété absents. |
| SY Limited (Royaume-Uni) | Workflow concret : approbations, notifications, documents, SharePoint/Dataverse, Power BI et write-back. | Argumentaire de partenaire ; pas une comparaison neutre ni un prix France. |
| AppSheet, documentation Google | Alternative nommée, tarification par utilisateurs et connexion à APIs/données existantes, export/backup/sync à vérifier. | La page actuelle ne l'offre pas comme option identifiable. |
| Digital Marketplace UK | Montre qu'un projet est vendu par phases (conception, développement, déploiement, support, formation) et qu'une rate card peut varier de £300 à £1,500/personne/jour. | Tarif fournisseur britannique, pas une moyenne française ni un devis transposable. |
| Programme singapourien pré-approuvé | Décompose nettoyage Excel, migration, UAT, go-live et formation ; un package particulier affiche SGD 20,520. | Subvention/version/périmètre précis ; interdit d'en déduire un prix France. |

### URLs vérifiées

- [Microsoft Learn — créer une application canevas depuis des données Excel](https://learn.microsoft.com/fr-fr/power-apps/maker/canvas-apps/get-started-create-from-blank) (consulté le 24/07/2026).
- [Microsoft FAQ — Excel vers table/application](https://learn.microsoft.com/en-us/power-apps/maker/common/faqs-excel-to-table-app) (consulté le 24/07/2026).
- [Microsoft Power Apps — prix France](https://www.microsoft.com/fr-fr/power-platform/products/power-apps/pricing) (consulté le 24/07/2026).
- [Microsoft Support — coédition Excel](https://support.microsoft.com/en-us/office/collaborate-on-excel-workbooks-at-the-same-time-with-co-authoring-7152aa8b-b791-414c-a3bb-3024e46fb104) (consulté le 24/07/2026).
- [Zerobug — Power Apps pour PME](https://www.zerobug.fr/blog/power-apps-application-metier-pme/) (lecture benchmark, non-source de prix/délai).
- [Alticap — applications métier low-code](https://www.alticap.com/power-apps-applications-metier-low-code) (lecture benchmark, non-source indépendante).
- [Appizy — Excel to app](https://www.appizy.com/excel-to-app/) (lecture benchmark, promesses éditeur).
- [SY Limited — Low-Code Power Apps for SMEs](https://sylimited.com/wp-content/uploads/2025/06/Low-Code-Power-Apps-for-SMEs_.pdf) (lecture benchmark, argumentaire partenaire).
- [Google Cloud — AppSheet automation](https://cloud.google.com/appsheet/automation) (alternative produit officielle).
- [UK Digital Marketplace — service Power Apps](https://www.applytosupply.digitalmarketplace.service.gov.uk/g-cloud/services/322728430179202) (rate card fournisseur, non transposable).
- [Singapore GoBusiness — package migration/formation](https://www.gobusiness.gov.sg/images/psg/201210454N_20240138_19122024_Desensitised_Annex3_Part1.pdf) (package public précis, non moyenne de marché).

### Saturation et opportunité

La SERP est saturée de tutoriels ou de pages partenaires qui disent “transformez rapidement Excel en application”. Elle est moins complète sur la décision négative (“ne développez pas”), le coût du temps interne, la gouvernance, la réversibilité et les scénarios de risque. Le guide possède les bons angles, mais doit les rendre opérationnels et comparables pour prendre l'avantage : une phrase de différenciation ne suffit pas si le lecteur ne peut pas refaire le calcul ni tester la sortie.

La formulation de recherche “seul guide SERP avec…” est **à rejeter** : elle n'est pas exhaustivement prouvable et peut devenir une promesse SEO fausse. Dire plutôt : “Ce guide ajoute une lecture de coût complet, de migration et de sortie que les pages comparées détaillent rarement.”

## Matrice d'information à gagner

| Question du dirigeant | Réponse actuelle | Information manquante | Gain attendu | Correction localisable |
|---|---|---|---|---|
| Puis-je éviter le développement ? | Oui, conseil de tester Excel/coédition. | Critères quantifiés et test de deux semaines. | Très fort | Ajouter dans `#avant-de-remplacer` une fiche “preuve d'échec” (copies, erreurs, ressaisie, temps). |
| Quand l'outil existant est-il préférable ? | “Le marché propose l'essentiel.” | Test sur 10 cas réels, seuil de contournements, coût des écarts. | Très fort | Étendre `#quatre-solutions` avec une méthode de démonstration et un seuil d'abandon. |
| No-code ou sur-mesure ? | Ligne fusionnée, sans produit nommé. | Limites, propriété, admin, intégrations et sortie par famille. | Très fort | Scinder la ligne et ajouter un mini-tableau Power Apps/AppSheet/Airtable ou autre produit vérifié. |
| Combien cela coûtera vraiment ? | Une formule et 10 utilisateurs Power Apps. | Trois scénarios, temps interne, Dataverse/connecteurs, migration, support et sortie. | Très fort | Refaire `#cout-quatre-ans` avec hypothèses et sensibilité. |
| Mes données seront-elles récupérables ? | Export générique demandé au contrat. | Test réel de CSV/pièces jointes/historique/automations et délai/coût. | Très fort | Ajouter une procédure de test de sortie dans `#contrat` et `#migration`. |
| Que se passe-t-il si le pilote échoue ? | Ancien fichier en lecture seule et “marche à suivre”. | Critères go/no-go, rollback, propriétaire de décision et date de bascule. | Fort | Ajouter un encadré plan B dans `#migration`. |
| Qui maintient l'application ? | Question dans le tableau de coût. | Rôle nominatif, heures/mois, sauvegarde/restauration, dépendance à un salarié. | Fort | Ajouter `#exploitation-apres-lancement` (court, non redondant avec TMA). |
| Les données Excel seront-elles fiables ? | Doublons et lignes ambiguës évoqués. | Profilage, taux d'anomalies, règles de rejet, rapprochement total. | Fort | Ajouter une mini-checklist de qualité de données avec indicateurs. |
| L'outil est-il conforme ? | Mise en garde CNIL et archives. | Responsable/sous-traitant, minimisation, transferts, durée et preuve de restauration. | Fort | Préciser le vocabulaire et sourcer au fil de la section RGPD. |

## Audit de preuve et fraîcheur

| Affirmation ou donnée | Vérification | Évaluation | Action |
|---|---|---|---|
| Coédition via OneDrive/OneDrive Business/SharePoint Online, formats compatibles ; SharePoint on-premises différent | Microsoft Support, page officielle consultée le 24/07/2026. | Exact dans son périmètre ; un fichier incompatible peut verrouiller le classeur pour tous. | Lien officiel à placer immédiatement après l'affirmation (`:315-321`). |
| Power Apps Premium 17,30 € HT/utilisateur/mois en annuel | Page prix Microsoft France consultée le 24/07/2026 ; prix annoncé susceptible de varier. | Actuel au moment de l'audit, volatil ; capacité Dataverse et conditions de production distinctes. | Date de vérification à actualiser ; préciser licence, capacité/connecteurs et exclusions. |
| 10 × 17,30 × 48 = 8 304 € HT | Calcul refait. | Arithmétiquement exact pour 10 utilisateurs, hors variation de prix et hors coûts. | Ajouter unités et hypothèses dans une cellule de calcul, puis scénarios. |
| Dossier de recherche : 12 × 17,30 × 48 = 9 964,80 € HT | Calcul refait. | Exact pour 12 utilisateurs ; ce n'est pas une contradiction de calcul mais une hypothèse différente du texte publié. | Harmoniser les exemples pour éviter la confusion entre 10 et 12 utilisateurs. |
| Conversion Excel vers app : table formatée, cloud, mismatch de types, fichier jusqu'à 5 Go | Microsoft Learn/FAQ officiels consultés le 24/07/2026. | Important et absent du texte courant. | Ajouter un encadré “ce que le générateur ne garantit pas” avec lien inline. |
| Résidence Airtable Europe liée à Enterprise Scale ; métadonnées/auth/analytics peuvent rester aux États-Unis | Documentation Airtable mise à jour le 14/07/2026, consultée le 24/07/2026. | Correct mais spécifique à Airtable et à son offre ; ne pas généraliser à tous les no-code. | Lien inline + test de région/plan/sous-traitants. |
| CNIL : obligations du sous-traitant | Définition officielle CNIL consultée le 24/07/2026. | Correct, mais “l'entreprise reste responsable” est trop large sans préciser le rôle. | Dire “si vous êtes responsable du traitement…” puis distinguer les obligations du sous-traitant. |
| Conservation comptable dix ans ; fiscalité selon document ; cession des droits L131-3 | Légifrance consulté le 24/07/2026. | Le texte courant reste prudemment général. | Conserver la prudence et rappeler qu'un historique applicatif n'est pas une archive légale. |
| Limites Excel, seuils SharePoint et statistiques d'erreurs | Dossier de recherche et sources Microsoft ; pas toutes rouvertes pendant ce passage web. | Ne pas publier de chiffres anciens ou de statistiques Panko/Standish comme preuve générale. | Garder le raisonnement par symptômes ; ajouter uniquement les limites officielles pertinentes avec date. |

## Scénarios et calculs à ajouter

La charte exige trois scénarios dès qu'un guide engage budget, délai, gain ou risque. Le guide actuel n'en présente qu'un. Voici une proposition de cadre à intégrer, avec des **hypothèses explicitement illustratives** et un renvoi vers le devis réel.

| Scénario | Hypothèses à afficher | Comparaison à calculer | Décision attendue |
|---|---|---|---|
| Simple | 5 utilisateurs, processus stable, 1 source de données, moins de 2 h/semaine de ressaisie, aucune donnée sensible critique. | Excel fiabilisé vs logiciel existant ; coût interne = heures évitées × coût horaire chargé ; licence sur 48 mois. | Ne pas développer si une correction documentée supprime le risque principal. |
| Central | 10–12 utilisateurs, droits par rôle, historique, 1–2 intégrations, 4 h/semaine de ressaisie, pilote de 4 semaines. | Excel fiabilisé / logiciel / plateforme nommée / sur-mesure, avec migration, formation, administration et sortie. | Choisir la solution qui couvre les cas réels avec le moins de dépendance et un coût soutenable. |
| Exigeant | 20+ utilisateurs, usage mobile, données sensibles, intégrations facturation/ERP, continuité nécessaire, règles métier non triviales. | TCO 48 mois + coût d'indisponibilité + maintenance + sauvegarde/restauration + sortie testée. | Un sur-mesure peut devenir rationnel, mais seulement après preuve du processus et devis détaillé. |

Formules à rendre visibles :

```text
TCO 48 mois = mise en place + licences/abonnements + migration + formation
              + administration + support/maintenance + évolutions
              + temps interne + coût de sortie

Temps interne annuel = heures hebdomadaires × 52 × coût horaire chargé
Coût d'un incident = durée d'arrêt × coût horaire des personnes bloquées
                    + corrections + retards client éventuels
```

La sensibilité minimale doit faire varier : nombre d'utilisateurs (5/10/20), heures internes (1/4/8 h/semaine), durée (24/48 mois), et coût d'une licence ou d'un connecteur. Une seule ligne “8 304 € HT” ne permet pas de voir que le temps interne peut dépasser les licences : par exemple, 4 h/semaine × 48 semaines × 45 € = 8 640 €/an, soit 34 560 € sur quatre ans — **exemple mathématique à qualifier comme hypothèse**, pas prix de marché. Ajouter une phrase indiquant que le coût horaire doit venir de la comptabilité ou d'une estimation du dirigeant.

Ne pas inventer un “prix moyen” du sur-mesure. Demander à la place : périmètre, jours de conception/développement/recette, migration, hébergement, garantie, maintenance et livrables de sortie. Les tarifs britanniques du Digital Marketplace peuvent illustrer la variation de périmètre, mais ne doivent pas servir de tarif français.

## Comparaison professionnelle à réécrire

La table “quatre solutions” (`:370-401`) doit devenir une matrice à critères égaux. Elle devrait séparer :

1. **Conserver Excel tel quel**, uniquement si le risque est documenté et accepté.
2. **Fiabiliser Excel**, avec structure, coédition, contrôles et documentation.
3. **Acheter un logiciel existant**, démontré sur les dix cas réels de l'entreprise.
4. **Adopter une plateforme nommée** (par exemple Power Apps, AppSheet ou une autre retenue après vérification), avec licences, connecteurs, identité, limites et sortie.
5. **Développer sur mesure**, seulement lorsque les règles, intégrations, droits ou coûts d'écart justifient la propriété d'un produit spécifique.

Critères identiques pour les cinq lignes : adéquation fonctionnelle, nombre d'utilisateurs, délai jusqu'au pilote, TCO 48 mois, rôle d'administrateur, qualité des sauvegardes/restauration, données/résidence, intégrations, export de données/pièces jointes/historique, propriété du code ou dépendance éditeur, coût de sortie, maintenance et cas où l'option est à éviter.

### Position professionnelle à assumer

> Mon avis : pour une PME, le sur-mesure ne doit pas être la réponse réflexe à un fichier Excel désordonné. Je le recommande lorsque le processus est compris, que les écarts d'un logiciel existant sont coûteux ou que les droits/intégrations deviennent critiques. Si une coédition et une structure propre éliminent le problème pour un coût inférieur, développer est une mauvaise décision.

Contre-cas à conserver : un abonnement “simple” peut devenir le choix le plus cher après quatre ans si les comptes, connecteurs, capacité, administration et sortie sont ignorés ; inversement, une application sur mesure peut être une mauvaise décision si le processus change chaque semaine et que personne n'est propriétaire du produit.

## Diagnostic local

Le composant `ExcelDecisionDiagnostic.tsx` est utile, sans collecte de coordonnées. Il propose huit signaux (coédition, mobile, permissions, doublons, traçabilité, règles fragiles, intégrations, incident coûteux) et trois questions de contexte. L'algorithme privilégie un logiciel existant si celui-ci couvre les essentiels, force une orientation de sécurisation en présence de droits/traçabilité/incident, puis distingue Excel, prototype, plateforme et sur-mesure.

Limites à corriger :

- le score additionne des risques de nature différente sans expliquer le poids relatif ;
- aucune question ne mesure volume, taux de doublons, qualité de données, sauvegarde/restauration, durée légale, propriétaire, temps d'administration ou dépendance à une personne ;
- le résultat n'est pas relié à un seuil chiffré (coût, délai, criticité) ;
- les branches sont testées dans la logique unitaire, mais pas toutes dans une interaction de composant documentée.

Correction minimale : afficher “orientation indicative, pas recommandation d'achat”, poser 4 à 6 questions de preuve supplémentaires, exposer la raison de l'orientation (“vous avez coché droits + incidents”), et proposer la prochaine mesure autonome : exporter dix lignes, chronométrer une ressaisie, tester une restauration et demander une démonstration avec trois profils.

## Pédagogie et conversion

### Points forts à préserver

- l'entrée “vous avez peut-être seulement besoin de corriger Excel” rassure et crédibilise ;
- les phrases de terrain (“je copie cette ligne pour prévenir l'atelier”) humanisent le problème (`:451-455`) ;
- le guide ne force pas le sur-mesure et ne demande pas l'email pour obtenir un score ;
- la CTA promet une comparaison de solutions, cohérente avec l'article (`:680-689`).

### Corrections de plume

- Après l'introduction, ajouter un exemple chiffré très court : “trois copies, huit personnes, quatre heures de ressaisie ; avant de parler d'application, mesurons ce que coûte le problème.”
- Remplacer les formulations abstraites (“la solution la moins coûteuse”) par une action observable : “pendant deux semaines, comptez les copies, erreurs, ressaisies et heures perdues”.
- Définir chaque terme au premier usage : no-code, low-code, TCO, connecteur, historique, restauration, sortie.
- Faire alterner tableau et mini-scène : dirigeant, personne qui connaît le fichier, utilisateur mobile, responsable administratif.
- Conserver les exemples fictifs étiquetés comme tels et ajouter l'hypothèse qui permet au lecteur de les adapter.

### CTA et livrable

La CTA actuelle est saine, mais peut convertir davantage avec un livrable explicite : “Après un premier échange, vous repartez avec une grille cinq options, les hypothèses de TCO et un plan de pilote — pas avec une promesse de développement automatique.” Un seul CTA doit rester visible ; ne pas multiplier les boutons.

## Réécriture localisable

| Zone | Priorité | Action précise |
|---|---|---|
| `page.tsx:166-208` hero/key points | P1 | Ajouter une phrase chiffrée d'identification et remplacer “4 solutions” par “5 décisions comparées” après scission de l'option zéro. |
| `page.tsx:310-351` avant remplacement | P1 | Lier Microsoft Support au fait de coéditer ; ajouter test sur deux semaines et preuve d'échec avant projet. |
| `page.tsx:353-368` diagnostic | P1 | Ajouter questions qualité/volume/backup/propriétaire ; libeller l'orientation indicative et afficher la raison. |
| `page.tsx:370-413` comparaison | P1 | Table cinq voies, critères homogènes, produits nommés seulement si leurs fiches officielles sont revalidées. |
| `page.tsx:415-456` données/règles | P2 | Ajouter exemple de règle métier et cas d'exception, avec test d'acceptation. |
| `page.tsx:458-504` coût | P1 | Trois scénarios, TCO 24/48 mois, temps interne, connecteurs/capacité, sensibilité utilisateurs et coût horaire. Lier le prix Microsoft inline. |
| `page.tsx:506-543` migration | P1 | Ajouter critères go/no-go, rollback, propriétaire de décision, rapprochement des totaux, test de restauration. |
| `page.tsx:545-573` données/RGPD | P2 | Préciser responsable/sous-traitant ; lier CNIL et Airtable à leurs phrases ; distinguer historique de l'archive légale. |
| `page.tsx:575-618` contrat | P1 | Ajouter dépôt Git, accès cloud/identité, sauvegarde/restauration, SLA, documentation de déploiement, export automatisations/pièces jointes, délai/coût de sortie. |
| `page.tsx:620-678` exemple/plan | P2 | Faire varier le même cas en simple/central/exigeant et indiquer quelle preuve fait changer de voie. |
| `page.tsx:691-794` sources | P1 | Garder le récapitulatif, mais placer les liens à proximité des faits ; ajouter date de consultation et limites des sources commerciales. |
| `src/lib/guides.ts:1054-1067` registre | P2 | Après réécriture, actualiser `dateModified`, le nombre de solutions et le temps de lecture ; ne pas déclarer “indexé” sans preuve de production. |
| `docs/research/transformer-excel-en-application.md` | P1 | Marquer les promesses non livrées et transformer les 15 lacunes en checklist de couverture réelle. |

## Technique, SEO et rendu vérifiés

### Vérifications locales exécutées

- `npx vitest run --maxWorkers=2` sur les suites diagnostic Excel, calcul de coût, guides, indexation, robots, sitemap, données structurées et langage humain : **8 fichiers, 75 tests passés**.
- `npx tsc --noEmit --pretty false` : **OK**.
- ESLint ciblé sur la page, le composant et la logique du diagnostic : **OK**.
- `curl` local de la page : **HTTP 200**, HTML 354 569 octets.
- OG local : **HTTP 200**, PNG 1 200 × 630, 181 686 octets.
- JSON-LD observé : `Article`, `BreadcrumbList`, `ImageObject`, `ListItem`, `Organization`, `Person`, `WebPage` ; pas de `FAQPage`, cohérent avec la règle projet.
- Canonical local observé : `https://hagnere-code.ai/guides/transformer-excel-en-application`.
- Les routes ciblées du maillage (guides liés, service outils internes, démarrer un projet) ont répondu **HTTP 200** en local.

### QA navigateur local

Rendu vérifié dans le navigateur local à 320, 390, 768, 1024 et 1440 px : `scrollWidth === innerWidth`, pas de débordement horizontal, un H1, CTA et diagnostic présents. À 390 px, la table desktop bascule bien vers les cartes mobiles ; le diagnostic accepte une case et met à jour son résultat (“1/8 signaux”) sans débordement. Les logs `error` et `warning` étaient vides.

Cette QA est **locale uniquement**. Elle ne prouve pas le rendu de production, le cache CDN, les headers définitifs, l'indexation, le suivi Search Console, ni le passage en `index,follow` sur le domaine public.

### Vérifications non exécutées

- pas de `npm run check:seo` complet ;
- pas de suite `npm test` complète ;
- pas de build de production complet ;
- pas de test Search Console, sitemap traité ou index Google.

Ces absences ne sont pas des défauts du guide, mais elles interdisent de conclure à une publication SEO vérifiée.

## Empreintes du snapshot audité

Les SHA-256 ci-dessous figent l'état lu le 24/07/2026. Ils devront être recalculés après toute correction.

```text
src/app/guides/transformer-excel-en-application/page.tsx
e80281de919fde1378afc38734b0acab9d251b1623634c1ebfdbf077e444fe72

src/app/guides/transformer-excel-en-application/opengraph-image.tsx
008630e67338b0690f7b812c40da8a52cff8376aa87ee6cc00cd39560001018c

src/lib/guides.ts
8663e6e84352121ec854393e049492a1c2b72f242166141e5d31e0911b43cb09

src/components/guides/ExcelDecisionDiagnostic.tsx
3c58f511f7109253c7979963061e5f90786ff11048e352ec9cd3b93632ebf233

src/lib/excel-decision-diagnostic.ts
e7fc50f37260866bcd66649d2f30b3078e8d6c4c86773743ecd63918f3f7a8d1

docs/research/transformer-excel-en-application.md
608f58968688e6b855ec1ab722d8e3bb09a2feb84f3d45f7f620f945575919b5
```

## Contre-audit à exiger après correction

Le guide ne doit repasser en GO qu'après :

1. relecture P3 indépendante avec score ≥ 90/100 et aucun axe sous 8 ;
2. trois scénarios recalculables, hypothèses et sensibilité vérifiées ;
3. matrice cinq options à critères égaux, avec option zéro et contre-cas ;
4. liens officiels placés au fil des affirmations sensibles et dates de consultation ;
5. test de migration, rapprochement, restauration et sortie écrits ;
6. diagnostic testé sur chaque orientation, rendu 320–1440 px et logs propres ;
7. `npm run check:seo`, tests, TypeScript et build de production exécutés ;
8. vérification de la page déployée, canonical, robots, sitemap, données structurées et absence de promesse d'indexation non prouvée ;
9. relecture anti-IA : chaque section doit commencer par le problème du dirigeant, donner une action ou un exemple, puis expliciter la limite et la prochaine décision.

**Conclusion opérationnelle :** ne pas supprimer ni réécrire entièrement la page. Conserver son ton et son parcours, mais bloquer le statut “guide de référence” jusqu'à l'ajout des scénarios, de la comparaison à cinq voies, des sources contextuelles et des risques d'exploitation/sortie. Aucun fichier de production n'a été modifié dans cet audit ; seul ce rapport d'audit est créé.
