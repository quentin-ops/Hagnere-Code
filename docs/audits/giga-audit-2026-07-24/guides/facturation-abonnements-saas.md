# Audit approfondi — `facturation-abonnements-saas`

Date : 24 juillet 2026

Auditeur concurrentiel : Codex, lot France et international

Snapshot du guide : `src/app/guides/facturation-abonnements-saas/page.tsx`, SHA-256 `59a3466eccfc8df4b54dbf12bdc6635410ca17dfd366dcecf3e4515f75358e20`

Périmètre : audit éditorial, factuel, décisionnel, SEO et conversion en lecture seule de la page publique. Aucune page, entrée de registre, donnée structurée, ressource, règle de gouvernance ou manifeste n’a été modifié dans ce lot.

## 1. Verdict exécutif

```text
Lecteur exact : fondateur de SaaS, dirigeant de PME ou indépendant qui commence à vendre des abonnements et doit relier vente, facturation, encaissement, comptabilité et droits d’accès.
Question réelle : que puis-je encore gérer manuellement, que dois-je confier à un service et quelles règles mon produit doit-il posséder lui-même ?
Décision attendue : choisir un cycle simple, une source de vérité par information et un niveau d’automatisation proportionné aux offres, volumes, exceptions et pays vendus.
Réponse actuelle en une phrase : séparez l’offre acceptée, la facture, le paiement et l’accès ; décidez chaque transition avant de l’automatiser.
Défaut qui coûte le plus de valeur : le mécanisme est très bien expliqué, mais aucun coût total, seuil de bascule, scénario de rapprochement ni comparatif à périmètre égal ne permet au dirigeant de choisir entre manuel, moteur hébergé et couche spécifique.
Niveau actuel : B+
Priorité : haute
Statut : audité / à enrichir sur l’économie, le quote-to-cash, la mesure et l’outil réutilisable
```

Le guide part d’une vraie scène de dirigeant : le bouton de carte fonctionne, puis un premier client B2B demande un devis, un bon de commande, une facture annuelle et un virement. Il explique avec des mots humains pourquoi quatre vérités peuvent diverger. Les exemples Planor, le prorata volontairement simplifié, les cas d’impayé et la recommandation de garder une étape manuelle tant qu’elle reste contrôlée donnent une position professionnelle utile et peu vendeuse.

Il est donc **pédagogiquement bon et prudent**, mais pas encore la réponse la plus complète disponible. Cinq écarts le maintiennent sous 90/100 :

1. **la décision économique n’est pas démontrée** : le texte recommande manuel, service hébergé ou couche spécifique sans comparer temps, frais, maintenance, rapprochement et coût des erreurs sur le même horizon ;
2. **le cycle reste plus court que le quote-to-cash réel** : catalogue tarifaire, remise, bon de commande, renouvellement, usage mesuré, avoir, remboursement, contestation, chargeback, écriture comptable et reconnaissance du revenu ne sont pas cartographiés ;
3. **aucun indicateur ne révèle que le système se dégrade** : taux d’échec, récupération après relance, temps manuel, facture non rapprochée, droit incohérent et délai de clôture n’ont ni valeur de départ, ni propriétaire, ni fréquence de revue ;
4. **la fiscalité internationale est correctement exclue mais pas orientée** : le lecteur ne reçoit pas la matrice minimale qui lui dit quand interroger son expert-comptable sur France, Union européenne, Royaume-Uni, Canada, Australie ou Allemagne ;
5. **la checklist n’est pas un actif autonome** : aucun diagramme d’états éditable, fichier de rapprochement, matrice de 72 cas ou jeu de données Planor ne peut être repris et testé.

La position professionnelle à assumer est la suivante :

> Pour un SaaS qui vend une offre simple à quelques clients, un processus manuel explicite et rapproché chaque mois vaut mieux qu’une automatisation fragile. Dès que les offres se répètent, nous recommandons généralement un moteur de facturation éprouvé, relié à une couche métier mince qui décide des droits d’accès. Une couche spécifique ne se justifie pas parce que le volume augmente : elle se justifie lorsque le contrat, l’usage, les entités, les quantités ou les droits ne peuvent pas être représentés proprement. Nous déconseillons de reconstruire le rail de paiement, de cacher une comptabilité parallèle dans le SaaS ou de couper automatiquement un client B2B sur le seul état d’un prestataire.

### Score avant correction

| Axe         | Note /10 | Preuve localisable                                                                        | Manque décisif                                                                                          |
| ----------- | -------: | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| Intention   |        9 | Ouverture sur le bouton de carte et le premier grand compte, réponse en moins de 150 mots | La question économique « quel niveau d’automatisation ? » n’est pas résolue par un seuil                |
| Décision    |        9 | Quatre vérités, six événements, quatre mauvais cas et verdict manuel/hébergé/spécifique   | Pas de grille finale à horizon et périmètre communs                                                     |
| Pédagogie   |        9 | Planor, vocabulaire traduit, erreurs concrètes, prorata calculé et réserves visibles      | Il manque une vente complète chiffrée de la commande au rapprochement                                   |
| Profondeur  |        7 | Offre, facture, paiement, accès, changement, impayé, résiliation et facture électronique  | Catalogue, remises, usage, crédits, remboursements, chargebacks, renouvellement, comptabilité et mesure |
| Preuve      |        8 | Documentation Stripe et sources officielles françaises datées                             | Sources internationales et preuve primaire sur doublons/ordre des événements à consolider               |
| Comparaison |        6 | Trois modes sont nommés et les cas d’usage sont distingués                                | Aucun TCO, coût d’exploitation, seuil, matrice de choix ou cas opposé chiffré                           |
| Originalité |        8 | Séparation offre/facture/paiement/droits et quatre ventes fictives cohérentes             | Pas d’actif téléchargeable ni de jeu de tests exploitable                                               |
| Style       |        9 | Ton direct, humain, ferme, sans jargon gratuit ni promesse excessive                      | Quelques concepts pourraient être représentés visuellement pour une lecture dirigeant                   |
| Conversion  |        8 | CTA précis sur trois ventes et recommandation honnête de garder du manuel                 | Le lecteur ne repart pas avec un diagnostic chiffré ni un livrable                                      |
| SEO/produit |        9 | Intention nette, canonical, Article, BreadcrumbList, FAQ visible et maillage SaaS         | Couverture insuffisante de TCO, dunning, quote-to-cash, rapprochement et international                  |

Total : **82/100**

Le guide mérite de rester publié : aucun défaut critique ne justifie un retrait. Il ne peut toutefois pas encore être présenté comme la réponse de référence complète sur la facturation SaaS.

## 2. Ce que le guide dit réellement

- **Réponse dans les 150 premiers mots :** oui. Un abonnement ne se réduit pas au prélèvement ; il faut relier ce qui a été accepté, facturé, payé et ouvert.
- **Scène d’entrée :** le premier grand compte demande devis, bon de commande, annuel et virement alors que le produit ne sait vendre que par carte.
- **Progression :** quatre informations, six événements, quatre ventes Planor, changement de formule, quatre formes d’échec, facture électronique française, cinq événements de contrôle, puis choix manuel/hébergé/spécifique.
- **Verdict actuel :** commencer par le cycle le plus simple que l’entreprise sait vendre et gérer ; automatiser les transitions répétées et testées.
- **Bon fit :** SaaS au démarrage ou en structuration, offres encore limitées, équipe qui doit clarifier ses règles avant d’automatiser.
- **Mauvais fit :** entreprise qui cherche un traité fiscal international, une politique comptable, un avis juridique, une comparaison détaillée de prestataires ou une architecture de paiement réglementée.
- **Exemple suivi :** Planor est explicitement fictif ; quatre ventes exposent des décisions différentes.
- **Calcul présent :** passage fictif de 100 € HT à 200 € HT à mi-période de trente jours, soit un écart brut illustratif de 50 € HT. Les exclusions sont bien signalées.
- **Comparaison présente :** manuel à faible volume, service pour offres répétées, spécifique lorsque contrat, quantité, entité ou droit ne rentrent pas dans l’outil.
- **Comparaison absente :** aucun coût initial, temps mensuel, frais variables, charge de maintenance, seuil de bascule ou risque résiduel.
- **Conformité :** mentions obligatoires, calendrier français de facturation électronique et conseil de validation par expert-comptable.
- **Limites annoncées :** pas de taux d’impayé, délai de relance, TVA internationale, reconnaissance du revenu ni substitution aux spécialistes.
- **CTA :** faire relire une vente carte, une vente virement et les règles après essai, impayé ou résiliation.
- **Élément qui paraît complet sans suffire à décider :** les quatre états expliquent la cohérence fonctionnelle, mais pas quel système fait foi entre CRM, devis, moteur de facturation, banque, comptabilité et application.
- **Élément de repérage à clarifier :** les « 6 événements à décider » du bandeau décrivent le cycle complet tandis que les « cinq événements à tester » forment une checklist réduite. Il n’y a pas de contradiction factuelle, mais la différence entre carte complète et test minimal doit être explicite.

## 3. Benchmark France et international

Requêtes, pays, langues et date :

- France : « facturation abonnement SaaS », « facturation récurrente SaaS prorata », « facture électronique SaaS 2026 2027 », « choisir logiciel facturation électronique » ;
- États-Unis : « SaaS subscription billing lifecycle », « quote to cash SaaS billing », « subscription dunning recovery », « billing vendor RFP » ;
- Royaume-Uni : « subscription invoice receipt VAT place of supply digital services » ;
- Canada : « digital services GST HST non resident subscription invoices » ;
- Australie : « GST digital products subscription tax invoice » ;
- Allemagne : « SaaS Abrechnung E-Rechnung B2B 2026 » ;
- Union européenne : « OSS cross-border digital services VAT », « VAT in the Digital Age » ;
- recherche effectuée le 24 juillet 2026. Le benchmark décrit les types de réponses disponibles et non un classement Google stable.

### Saturation

La saturation a été atteinte lorsque les ressources supplémentaires ont répété les mêmes familles : cycle d’abonnement, prorata, relance, rapprochement, conformité de facture, choix d’un outil et fiscalité de vente internationale.

Les contenus français visibles couvrent généralement soit la réforme de la facturation électronique, soit les fonctions d’un logiciel, soit le prorata. Les contenus américains sont plus profonds sur quote-to-cash, dunning, catalogue tarifaire, usage et reconnaissance du revenu, mais ils proviennent souvent d’éditeurs qui vendent la solution décrite. Les sources publiques britannique, canadienne, australienne, allemande et européenne ajoutent les questions de document, lieu d’imposition, immatriculation, déclaration et format électronique ; elles ne doivent jamais être transposées en obligations françaises.

Le gain d’information encore disponible est donc précis :

- relier **devis → commande → facture → paiement → droit → comptabilité** ;
- comparer trois architectures sur vingt-quatre mois avec les mêmes hypothèses ;
- montrer un rapprochement mensuel chiffré qui ne se réduit pas au total bancaire ;
- calculer la valeur d’une récupération après échec sans la présenter comme benchmark ;
- faire choisir les règles d’essai, prorata, remise, avoir, remboursement, contestation et sortie ;
- fournir un diagramme d’états et une matrice de tests éditables ;
- donner une orientation internationale sans avis fiscal générique ;
- nommer les conflits d’intérêts des sources commerciales.

| Ressource et URL directe                                                                                                                                                                                                                       | Pays                                       | Réponse utile                                                                  | Preuve, outil ou exemple                        | Limite                                                                      | Apport à vérifier ou adapter                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ | ------------------------------------------------------------------------------ | ----------------------------------------------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| [Impots.gouv.fr — je découvre la facturation électronique](https://www.impots.gouv.fr/professionnel/je-decouvre-la-facturation-electronique)                                                                                                   | France / officiel                          | Périmètre, calendrier, réception, émission et e-reporting                      | Source fiscale primaire et liens opérationnels  | Le cas exact dépend de l’entreprise et de l’opération                       | Dater chaque échéance et envoyer les cas particuliers vers le spécialiste |
| [Ministère de l’Économie — tout savoir sur la facturation électronique](https://www.economie.gouv.fr/tout-savoir-sur-la-facturation-electronique-pour-les-entreprises)                                                                         | France / officiel                          | Réception au 1er septembre 2026, émission échelonnée et préparation            | Synthèse dirigeant                              | Page volatile pendant le déploiement de la réforme                          | Conserver l’explication, ajouter taille de l’entreprise et type de flux   |
| [Service Public Entreprendre — facturation](https://entreprendre.service-public.fr/vosdroits/F31808)                                                                                                                                           | France / officiel                          | Mentions, conservation et cadre général de la facture                          | Référence pratique                              | Ne décide pas l’architecture d’un SaaS                                      | Créer une fiche de données à transmettre, sans reproduire le droit        |
| [France Num — choisir une plateforme de facturation électronique](https://www.francenum.gouv.fr/guides-et-conseils/pilotage-de-lentreprise/dematerialisation-des-documents/comment-bien-choisir-sa)                                            | France / public                            | Questions de choix et de préparation                                           | Guide orienté petites entreprises               | Non spécifique au quote-to-cash SaaS                                        | Relier choix de plateforme et responsabilités internes                    |
| [PayPro Global — facturation SaaS au prorata](https://payproglobal.com/fr/reponses/quest-ce-que-la-facturation-au-prorata-saas/)                                                                                                               | International / page française commerciale | Cas de prorata et explication accessible                                       | Exemples utiles pour découvrir les questions    | L’entreprise vend une solution ; ni source fiscale ni preuve de performance | Garder l’exemple propre et tester le résultat dans l’outil choisi         |
| [Tridens — facturation des abonnements](https://tridenstechnology.com/fr/facturation-des-abonnements/)                                                                                                                                         | International / page française commerciale | Fonctionnalités, modèles récurrents et usage                                   | Large inventaire fonctionnel                    | Contenu vendeur et très générique                                           | Utiliser pour vérifier les angles, jamais pour prouver ROI ou obligation  |
| [Stripe — subscription overview](https://docs.stripe.com/billing/subscriptions/overview)                                                                                                                                                       | États-Unis / documentation produit         | Cycle Stripe entre produit, prix, client, abonnement, invoice et PaymentIntent | Modèle concret et documentation vivante         | Modèle d’un fournisseur, pas ontologie universelle                          | Cartographier les objets Stripe vers les vérités métier                   |
| [Stripe — subscription webhooks](https://docs.stripe.com/billing/subscriptions/webhooks)                                                                                                                                                       | États-Unis / documentation produit         | Événements asynchrones et états d’abonnement                                   | Source primaire pour une intégration Stripe     | États et comportements évolutifs                                            | Dater la consultation et rendre le traitement idempotent                  |
| [Stripe — prorations](https://docs.stripe.com/billing/subscriptions/prorations)                                                                                                                                                                | États-Unis / documentation produit         | Comportements possibles lors d’un changement                                   | Paramètres et cas d’intégration                 | Ne définit pas la politique commerciale ou fiscale du SaaS                  | Exiger une facture de test avec date, quantité, crédit et taxe réels      |
| [Stripe — guide du dunning](https://stripe.com/ae/resources/more/dunning-what-subscription-based-businesses-need-to-know)                                                                                                                      | États-Unis / commercial                    | Relances, récupération et expérience client                                    | Vocabulaire utile                               | Stripe vend les moyens de récupération ; taux et gains ne sont pas neutres  | Construire un scénario hypothétique et mesurer ses propres taux           |
| [Stripe — RFP template for billing vendors](https://stripe.com/ae/guides/rfp-template-for-billing-vendors)                                                                                                                                     | États-Unis / commercial                    | Questions pour comparer couverture et intégration                              | Trame de consultation                           | Source commerciale intéressée                                               | Transformer la trame en critères opposables et preuves de démonstration   |
| [Chargebee — subscription billing guide](https://www.chargebee.com/resources/guides/subscription-billing-and-management-guide/)                                                                                                                | États-Unis / commercial                    | Catalogue, cycle de vie, usage, relance et indicateurs                         | Couverture large des cas                        | Chargebee vend la plateforme ; pas de preuve indépendante de ROI            | Compléter la carte fonctionnelle sans adopter les seuils du vendeur       |
| [Chargebee — SaaS revenue recognition guide](https://www.chargebee.com/resources/guides/saas-revenue-recognition-guide/)                                                                                                                       | États-Unis / commercial                    | Distingue facture, paiement et revenu reconnu                                  | Fait apparaître une frontière comptable absente | Ne remplace ni référentiel comptable ni expert                              | Ajouter la frontière et refuser de la coder comme règle universelle       |
| [NetSuite — complete billing for SaaS](https://www.netsuite.com/portal/resource/articles/accounting/billing-software-saas-companies.shtml)                                                                                                     | États-Unis / commercial                    | Quote-to-cash, renouvellement, usage et finance                                | Vision transversale                             | Éditeur ERP intéressé, cible plus grande                                    | Étendre le cycle sans imposer un ERP à une jeune entreprise               |
| [GOV.UK — invoices and taking payment](https://www.gov.uk/invoicing-and-taking-payment-from-customers)                                                                                                                                         | Royaume-Uni / officiel                     | Différence entre facture, paiement et reçu ; informations à conserver          | Source publique britannique                     | Droit britannique, pas français                                             | Renforcer la distinction conceptuelle seulement                           |
| [GOV.UK — VAT place of supply of services](https://www.gov.uk/guidance/vat-place-of-supply-of-services-notice-741a)                                                                                                                            | Royaume-Uni / officiel                     | Lieu de prestation et traitement des services                                  | Questions de vente transfrontalière             | Texte complexe, contexte britannique                                        | Ajouter un déclencheur de consultation, pas une conclusion fiscale        |
| [Canada Revenue Agency — GST/HST records](https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses/calculate-prepare-report/gst-hst-records-keep.html)                                                        | Canada / officiel                          | Documents et données à conserver                                               | Source fiscale primaire canadienne              | Ne s’applique pas automatiquement à une société française                   | Prévoir la preuve de client, transaction et taxe retenue                  |
| [Canada Revenue Agency — cross-border digital products and services](https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses/digital-economy-gsthst/charge-collect/cross-border.html)                        | Canada / officiel                          | Questions d’inscription et de collecte pour économie numérique                 | Arbre réglementaire canadien                    | Seuils, statut et clients à confirmer au jour de la vente                   | Ajouter le pays comme signal d’escalade                                   |
| [Australian Taxation Office — tax invoices](https://www.ato.gov.au/businesses-and-organisations/gst-excise-and-indirect-taxes/gst/tax-invoices)                                                                                                | Australie / officiel                       | Exigences de document et de GST                                                | Source fiscale primaire australienne            | Périmètre australien                                                        | Ne pas supposer qu’une facture française suffit partout                   |
| [Australian Taxation Office — GST on imported services and digital products](https://www.ato.gov.au/businesses-and-organisations/international-tax-for-business/gst-for-non-resident-businesses/gst-on-imported-services-and-digital-products) | Australie / officiel                       | Vente numérique par un non-résident à des clients australiens                  | Critères et inscription                         | Situation et seuils à valider                                               | Ajouter une fiche pays/segment de client avant automatisation             |
| [Bundesfinanzministerium — FAQ E-Rechnung](https://www.bundesfinanzministerium.de/Content/DE/FAQ/e-rechnung.html)                                                                                                                              | Allemagne / officiel                       | Réception B2B, formats et périodes transitoires depuis 2025                    | FAQ officielle mise à jour                      | Règles allemandes et transitions évolutives                                 | Montrer qu’un SaaS multi-pays ne peut pas figer une seule sortie PDF      |
| [Your Europe — VAT One Stop Shop](https://europa.eu/youreurope/business/taxation/vat/one-stop-shop/index_en.htm)                                                                                                                               | Union européenne / officiel                | Déclaration simplifiée de certaines ventes B2C transfrontalières               | Source européenne primaire                      | OSS n’englobe pas tous les flux, pays ou clients                            | Ajouter type de client, lieu et opération à la collecte                   |
| [Commission européenne — VAT in the Digital Age](https://taxation-customs.ec.europa.eu/taxation/vat/vat-digital-age-vida_en)                                                                                                                   | Union européenne / officiel                | Direction des réformes de déclaration et facture numériques                    | Calendrier européen de haut niveau              | Déploiement progressif et textes nationaux nécessaires                      | Installer une veille, pas coder une règle définitive                      |

**Avertissement méthodologique :** Stripe, Chargebee, NetSuite, PayPro Global et Tridens vendent des produits directement liés au problème. Leurs pages sont utiles pour découvrir des fonctions, erreurs et questions de consultation. Elles ne prouvent ni rentabilité, ni taux de récupération, ni supériorité, ni conformité du système final.

## 4. Matrice de gain d’information

| Question décisive                              | Meilleure réponse française                                   | Apport international                               | Couverture actuelle        | Manque                                                      | Réponse supérieure à produire                                                    |
| ---------------------------------------------- | ------------------------------------------------------------- | -------------------------------------------------- | -------------------------- | ----------------------------------------------------------- | -------------------------------------------------------------------------------- |
| Qu’est-ce qu’un abonnement fiable ?            | Séparer contrat, facture, paiement et accès                   | Quote-to-cash et objets de facturation             | Excellente                 | Comptabilité et commande                                    | Carte à six vérités avec propriétaire et identifiant commun                      |
| Quel outil fait foi ?                          | Outil comptable pour la facture, prestataire pour le paiement | Source-of-truth explicite par objet                | Partielle                  | CRM, devis, commande, catalogue, droit et grand livre       | Tableau système, objet, propriétaire, identifiant, correction et journal         |
| Dois-je automatiser maintenant ?               | Rester manuel si peu de clients                               | Comparer effort, licences et maintenance           | Bonne intuition            | Aucun chiffre ni seuil                                      | TCO 24 mois et seuil remplaçable autour de 74 clients dans le scénario central   |
| Quand un moteur hébergé gagne-t-il ?           | Offres répétées                                               | Catalogue, usage, relance et portail               | Partielle                  | Coût variable et limites fonctionnelles                     | Démonstration avec trois offres, deux cadences et exceptions                     |
| Quand développer une couche spécifique ?       | Contrats, quantités, entités ou droits atypiques              | Orchestration et entitlements                      | Bonne                      | Le volume est confondu avec la complexité possible          | Décider sur écart métier prouvé, coût du contournement et risque                 |
| Comment traiter l’essai ?                      | Écrire son issue                                              | Conversion, information, accès et données          | Bonne                      | Pas de date, message, métrique ni reprise                   | Machine d’états essai → actif/limité/fermé avec preuves                          |
| Comment changer de formule ?                   | Décider date, droits et prorata                               | Crédit, remise, quantité, usage et renouvellement  | Bonne                      | Un seul calcul simplifié                                    | Trois cas testés dans l’outil et résultat de facture attendu                     |
| Comment gérer un impayé ?                      | Distinguer carte, virement, litige et résiliation             | Dunning, récupération et churn involontaire        | Très bonne qualitativement | Pas de mesure économique                                    | Scénario 20 000 € de MRR, échecs et récupération, clairement hypothétique        |
| Comment rapprocher ?                           | Nommer une personne                                           | Relier invoice, credit, payment, refund et ledger  | Faible                     | Aucun exemple de clôture                                    | Mois Planor à 10 000 € facturés, 100 € d’avoir, 300 € impayés, 9 600 € encaissés |
| Comment gérer un remboursement ou chargeback ? | Non traité                                                    | Workflows de correction et litige                  | Absente                    | Droits, facture, avoir, trésorerie et journal               | Matrice cause → document → cash → accès → responsable                            |
| Comment vendre à l’usage ?                     | Non traité                                                    | Metering, late events et correction                | Absente                    | Unité, période, preuve et contestation                      | Cas exclu du MVP ou protocole de collecte/rejeu                                  |
| Comment reconnaître le revenu ?                | Correctement exclu                                            | Frontière invoice/cash/revenue                     | Absente                    | Risque de confusion comptable                               | Expliquer la frontière et renvoyer le traitement au professionnel                |
| Que change la réforme française ?              | Calendrier et périmètre général                               | Allemagne et ViDA montrent la volatilité           | Bonne                      | Taille, flux, e-reporting et données de paiement à orienter | Arbre France daté et veille attribuée                                            |
| Que faire avec les ventes internationales ?    | Validation expert-comptable                                   | UK, Canada, Australie, OSS                         | Faible mais honnête        | Aucune fiche de qualification                               | Collecter pays, B2B/B2C, preuve, identifiants, lieu et règle validée             |
| Combien de cas faut-il tester ?                | Cinq événements minimaux                                      | Matrice de combinaisons et tests par risque        | Partielle                  | Variantes offre/cadence/client/changement                   | Univers de 72 combinaisons, puis sélection justifiée                             |
| Comment savoir que le cycle se dégrade ?       | Aucun indicateur                                              | Échec, récupération, rapprochement et temps manuel | Absente                    | Baseline, cible, propriétaire                               | Tableau mensuel et seuils décidés par l’entreprise                               |
| Quel livrable puis-je reprendre ?              | Checklist visible                                             | Diagrammes et modèles de consultation              | Absente                    | Pas de téléchargement                                       | Kit CSV/XLSX/Markdown avec états, tests, rapprochement et décisions              |

## 5. Faits et fraîcheur

Sources primaires rouvertes ou retrouvées le 24 juillet 2026.

| Affirmation du guide                                                                                        | Verdict                                                                      | Source primaire actuelle                                                                                                                                                                                             | Périmètre et date                                                                                                  | Correction                                                                            |
| ----------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------- |
| Les événements de paiement sont asynchrones et les abonnements Stripe ont plusieurs états                   | confirmé, mais spécifique et volatil                                         | [Stripe — subscription webhooks](https://docs.stripe.com/billing/subscriptions/webhooks)                                                                                                                             | Documentation produit consultée le 24/07/2026                                                                      | Conserver « ces mots appartiennent au modèle Stripe » et dater la source              |
| Un retour de navigateur ne doit pas, seul, ouvrir définitivement les droits                                 | confirmé pour l’architecture Stripe et robuste comme principe                | [Stripe — subscription overview](https://docs.stripe.com/billing/subscriptions/overview) et webhooks                                                                                                                 | Intégration à adapter au prestataire                                                                               | Conserver ; ajouter signature, reprise, journal et tests de concurrence               |
| Un prestataire peut renvoyer un événement et l’ordre d’arrivée n’est pas une règle métier fiable            | confirmé dans la documentation webhook, à revalider lors de l’implémentation | [Stripe — webhooks](https://docs.stripe.com/webhooks)                                                                                                                                                                | Comportement du fournisseur consulté le 24/07/2026                                                                 | Lier directement la section doublons/ordre et exiger une clé d’idempotence métier     |
| Les proratas dépendent des paramètres du prestataire                                                        | confirmé                                                                     | [Stripe — prorations](https://docs.stripe.com/billing/subscriptions/prorations)                                                                                                                                      | Produit Stripe ; réglages évolutifs                                                                                | Conserver le test réel plutôt qu’une formule universelle                              |
| 100 € d’écart × 15/30 produit 50 €                                                                          | confirmé arithmétiquement dans le scénario fictif                            | Recalcul indépendant                                                                                                                                                                                                 | Simplification volontaire, hors taxes, remises, arrondis et jours réels                                            | Conserver exactement les réserves actuelles                                           |
| Un reçu de paiement ne prouve pas que la facture convient                                                   | confirmé conceptuellement ; la conformité française dépend du cas            | [Service Public — facturation](https://entreprendre.service-public.fr/vosdroits/F31808)                                                                                                                              | France ; mentions et obligations à la date de consultation                                                         | Éviter « toujours » ; conserver la validation expert-comptable                        |
| Toutes les entreprises concernées doivent pouvoir recevoir des factures électroniques au 1er septembre 2026 | confirmé                                                                     | [Impots.gouv.fr](https://www.impots.gouv.fr/professionnel/je-decouvre-la-facturation-electronique)                                                                                                                   | Réforme française, page consultée le 24/07/2026                                                                    | Dire « entreprises entrant dans le périmètre » et surveiller les textes d’application |
| L’émission est échelonnée entre 2026 et 2027 selon la taille                                                | confirmé                                                                     | [Ministère de l’Économie](https://www.economie.gouv.fr/tout-savoir-sur-la-facturation-electronique-pour-les-entreprises)                                                                                             | Grandes entreprises et ETI : 01/09/2026 ; PME et microentreprises : 01/09/2027, sous réserve du périmètre officiel | Ajouter ces deux lignes au lieu de laisser le lecteur interpréter « selon la taille » |
| La facture électronique visée concerne les opérations B2B domestiques entre assujettis à la TVA             | confirmé avec exclusions et cas particuliers                                 | [Impots.gouv.fr](https://www.impots.gouv.fr/professionnel/je-decouvre-la-facturation-electronique)                                                                                                                   | France, opérations entrant dans le champ                                                                           | Conserver la réserve « sous réserve des opérations exclues »                          |
| Des transactions B2C ou internationales peuvent relever de l’e-reporting                                    | confirmé, mais la formulation est trop compacte                              | [Impots.gouv.fr](https://www.impots.gouv.fr/professionnel/je-decouvre-la-facturation-electronique)                                                                                                                   | Nature de l’opération, établissement et TVA à qualifier                                                            | Séparer données de transaction et données de paiement ; écrire « selon l’opération »  |
| Des données de paiement doivent parfois être transmises                                                     | confirmé sous conditions, pas universel                                      | [Guide pratique de la facturation électronique](https://www.impots.gouv.fr/sites/default/files/media/1_metier/2_professionnel/EV/2_gestion/290_facturation_electronique/guide_pratique_facturation_electronique.pdf) | Notamment selon la nature de la prestation et l’exigibilité de la TVA                                              | Ne pas coder une collecte générale ; faire valider le cas                             |
| Un essai sans carte peut être configuré avec plusieurs issues                                               | confirmé pour Stripe                                                         | [Stripe — trials without payment method](https://docs.stripe.com/payments/checkout/free-trials)                                                                                                                      | Produit et intégration Stripe                                                                                      | Conserver comme possibilité, jamais comme recommandation de durée                     |
| Aucun délai universel de relance ne convient à tous les SaaS                                                | confirmé comme position prudente, non comme fait réglementaire               | Contrat, moyen, client et risque propres                                                                                                                                                                             | Opinion professionnelle conditionnelle                                                                             | Conserver ; donner des scénarios, pas un benchmark inventé                            |
| Le logiciel ne doit pas embarquer une conclusion générale de TVA internationale                             | confirmé comme principe de gouvernance                                       | Sources fiscales France, UE, Royaume-Uni, Canada et Australie                                                                                                                                                        | Règles dépendantes des flux et évolutives                                                                          | Ajouter pays, statut client, preuve et validation comme données d’entrée              |

### Contradictions ou ambiguïtés

- **Six événements / cinq événements :** le bandeau compte six étapes de cycle ; la dernière section sélectionne cinq événements de contrôle. Ce sont deux périmètres légitimes, mais le guide doit dire « carte complète » puis « test de fumée minimal ».
- **« Quatre états » :** l’offre acceptée, la facture, le paiement et le droit sont davantage quatre enregistrements ou vérités métier que quatre états d’une seule machine. Le corps l’explique ; le bandeau peut employer « quatre vérités à réconcilier ».
- **Facturation électronique / e-reporting :** la phrase actuelle est globalement juste, mais « relèvent plutôt » peut laisser croire à un choix exclusif ou uniforme. Il faut qualifier opération, client, établissement, TVA et donnée.
- **Service hébergé / couche spécifique :** le guide ne dit pas que les deux sont souvent complémentaires. Une couche spécifique peut orchestrer les droits tout en conservant un prestataire de paiement et un outil comptable.

### Faits à retirer plutôt qu’à affaiblir

- Tout taux « moyen » d’échec, de récupération ou de churn provenant d’un vendeur sans corpus comparable.
- Toute promesse qu’une séquence de relance augmente nécessairement le revenu.
- Tout seuil universel de clients qui imposerait l’automatisation.
- Toute conclusion fiscale dérivée du seul pays de facturation, de l’adresse IP ou de la devise.
- Toute formule de prorata présentée comme facture conforme hors de l’outil et du cas testés.
- Toute promesse « conforme facturation électronique » sans plateforme, format, identifiants, opération et date vérifiés.
- Toute affirmation qu’un outil de paiement remplace la comptabilité ou que le solde bancaire détermine les droits.
- Tout développement maison d’un rail de paiement présenté comme avantage produit.

## 6. Scénarios et calculs à construire

Tous les chiffres ci-dessous sont des **hypothèses fictives et remplaçables**, hors taxes. Ils ne sont ni des tarifs Hagnéré Code, ni des prix de marché, ni des données client, ni des benchmarks de performance. Les frais de transaction, la fiscalité, les coûts comptables et les incidents exceptionnels sont exclus sauf mention contraire.

### Scénario 1 — Comparer quatre architectures sur 24 mois

Le premier calcul omettait les frais variables du moteur de facturation et créait un seuil artificiellement favorable à l’hébergé. Le modèle d’implémentation doit les réintroduire et montrer la sensibilité au panier moyen. Les montants restent des **hypothèses éditoriales fictives**, hors taxes, et non des tarifs Hagnéré Code ou des benchmarks de marché.

Hypothèses centrales :

- temps interne valorisé `t = 45 €/h` ;
- revenu facturé moyen `p = 100 €/client/mois` ;
- frais variables illustratifs du moteur `f = 0,7 %` du volume facturé, à remplacer par le périmètre et le tarif réellement négociés ;
- mode manuel : 2 h de clôture par mois + 6 minutes par client actif et par mois ;
- moteur hébergé : 2 800 € de mise en place, 150 €/mois, frais variables `f`, 1 h de clôture + 2 minutes par client et par mois ;
- moteur hébergé + couche métier : 14 000 € d’intégration, 200 €/mois de services, 500 €/mois de maintenance, frais variables `f`, 30 minutes de clôture + 1 minute par client et par mois ;
- moteur de facturation spécifique, rails de paiement externalisés : 60 000 € de mise en place, 1 500 €/mois de maintenance, 1 h de clôture + 36 secondes par client et par mois ;
- mêmes offres simples, même période de 24 mois et même niveau de service attendu.

| Clients actifs moyens |   Manuel | Moteur hébergé | Hébergé + couche métier | Moteur spécifique |
| --------------------: | -------: | -------------: | ----------------------: | ----------------: |
|                    10 |  3 240 € |        8 008 € |                31 688 € |          97 188 € |
|                   100 | 12 960 € |       12 760 € |                34 820 € |          98 160 € |
|                   500 | 56 160 € |       33 880 € |                48 740 € |         102 480 € |

```text
Nombre moyen de clients actifs : n.
Manuel M(n) = 24 × t × (2 + 0,1n) = 2 160 + 108n.
Hébergé H(n) = 2 800 + 24 × 150 + 24 × t × (1 + n/30) + 24 × n × p × f
             = 7 480 + 52,8n.
Hébergé + couche métier Y(n) = 14 000 + 24 × (200 + 500)
                             + 24 × t × (0,5 + n/60) + 24 × n × p × f
                             = 31 340 + 34,8n.
Spécifique S(n) = 60 000 + 24 × 1 500 + 24 × t × (1 + n/100)
                = 97 080 + 10,8n.
Horizon : 24 mois.
Inclus : mise en place indiquée, licence/services, maintenance indiquée, frais variables de facturation indiqués et temps de clôture.
Exclus : traitement du paiement, taxes, plateforme agréée de facturation électronique, comptabilité, litiges, support client, migration, sortie, incidents et coût d’opportunité.
Résultat central : le manuel est le moins coûteux à 10 clients ; l’hébergé passe sous le manuel à partir d’environ 97 clients ; la couche métier et le spécifique ne gagnent pas par le seul coût sur ces trois volumes.
```

Sensibilité du seuil `manuel = hébergé` :

| Temps interne | Panier mensuel | Frais variables | Premier nombre entier où l’hébergé passe sous le manuel |
| ------------- | -------------- | --------------- | ------------------------------------------------------: |
| 30 €/h        | 100 €          | 0,7 %           |                                                     183 |
| 45 €/h        | 100 €          | 0,7 %           |                                                      97 |
| 70 €/h        | 100 €          | 0,7 %           |                                                      50 |
| 45 €/h        | 300 €          | 0,7 %           |                                                     247 |
| 45 €/h        | 100 €          | 0 %             |                                                      74 |

Ce tableau est plus important que le seuil central. À `45 €/h`, avec `0,7 %` de frais variables, le dénominateur du calcul devient nul autour de `428,57 €` facturés par client et par mois : dans ce modèle de coûts directs, le moteur hébergé ne passe alors plus automatiquement sous le manuel par la seule croissance du nombre de clients. Le guide doit donc interdire toute « règle magique » fondée sur le volume. La complexité des contrats, les erreurs, l’auditabilité et la continuité peuvent justifier une architecture différente bien avant le seuil ; dix clients hétérogènes peuvent coûter plus cher que cinq cents abonnements identiques.

Le Merchant of Record ne doit pas être placé dans ce tableau comme une cinquième ligne interchangeable. Il prend un rôle juridique, fiscal et opérationnel différent selon le contrat. Son pourcentage public ne peut pas être comparé directement aux seuls frais d’un moteur de facturation, qui n’incluent pas nécessairement le traitement du paiement, la taxe, les litiges ou la qualité de marchand officiel.

### Scénario 2 — Chiffrer la récupération après paiement échoué sans inventer un benchmark

Hypothèses fictives :

- MRR facturable : 20 000 € ;
- part des paiements échoués au premier passage : 3 % ;
- trois hypothèses de récupération après relances : 30 %, 60 % et 80 %.

| Calcul mensuel         | Prudent | Central |  Haut |
| ---------------------- | ------: | ------: | ----: |
| Montant échoué initial |   600 € |   600 € | 600 € |
| Part récupérée         |    30 % |    60 % |  80 % |
| Montant récupéré       |   180 € |   360 € | 480 € |
| Reste non récupéré     |   420 € |   240 € | 120 € |

```text
Échec initial = 20 000 × 3 % = 600 €.
Gain illustratif entre 30 % et 60 % de récupération = (360 - 180) × 12 = 2 160 € par an.
Inclus : encaissements récupérés dans l’hypothèse.
Exclus : frais, remboursements, churn volontaire, support, fraude, chargebacks et effet de trésorerie.
Variable qui fait basculer : taux d’échec propre au portefeuille et coût réel de la relance.
Contrôle inverse : si aucun paiement n’échoue ou si tous sont déjà récupérés manuellement, l’automatisation n’ajoute pas ce revenu.
```

Le guide doit demander de mesurer son taux et sa récupération, pas reprendre les chiffres d’un éditeur. Un paiement récupéré n’est ni une marge pure, ni une preuve que le client est satisfait.

### Scénario 3 — Un mois ne se rapproche pas avec le seul total bancaire

Planor facture fictivement :

- 80 abonnements mensuels à 100 € : 8 000 € ;
- 2 renouvellements annuels à 1 000 € : 2 000 € ;
- total brut facturé : 10 000 € ;
- un avoir de 100 € ;
- une facture nette de 300 € encore impayée.

```text
Brut facturé = 80 × 100 + 2 × 1 000 = 10 000 €.
Créance après avoir = 10 000 - 100 = 9 900 €.
Encaissement du mois = 9 900 - 300 = 9 600 €.
Écart entre facturé brut et encaissé = 400 €, expliqué par 100 € d’avoir et 300 € d’impayé.
```

Le solde de 9 600 € ne dit pas si le client qui a reçu l’avoir garde son accès, si l’impayé est un échec de carte ou un litige, ni si les deux renouvellements couvrent exactement la période facturée. Le fichier de rapprochement doit relier identifiants de commande, facture, avoir, paiement, client, période et droit.

### Scénario 4 — Mesurer l’univers de test avant de sélectionner par risque

Planor possède fictivement :

- 3 offres ;
- 2 cadences, mensuelle et annuelle ;
- 3 contextes client/taxe à valider ;
- 4 transitions critiques : souscription, changement, échec, résiliation.

```text
Univers combinatoire brut = 3 × 2 × 3 × 4 = 72 combinaisons.
```

Il ne faut pas exécuter mécaniquement 72 scénarios si certains sont impossibles ou équivalents. La valeur du calcul est de rendre les dimensions visibles, puis de sélectionner :

1. chaque règle réellement différente ;
2. chaque frontière fiscale ou contractuelle ;
3. chaque transition qui modifie de l’argent et des droits ;
4. chaque échec déjà observé ;
5. un test de répétition, d’ordre inattendu et de reprise.

### Scénario 5 — Le prorata actuel est juste dans son modèle, pas universel

```text
Prix ancien : 100 € HT.
Prix nouveau : 200 € HT.
Différence : 100 € HT.
Part fictive restante : 15 / 30 = 0,5.
Écart brut : 100 × 0,5 = 50 € HT.
```

Le calcul est validé. La réécriture doit lui adjoindre deux contre-cas :

- baisse immédiate : crédit, report ou absence de remboursement selon la règle décidée ;
- changement de quantité : sept accès ajoutés, date, taxe, remise et droits testés dans l’outil.

### Indicateurs à faire posséder au dirigeant

| Indicateur                       | Formule minimale                                           | Propriétaire      | Fréquence              | Décision associée                         |
| -------------------------------- | ---------------------------------------------------------- | ----------------- | ---------------------- | ----------------------------------------- |
| Factures sans paiement rapproché | nombre et montant ouverts à date                           | Finance           | Hebdomadaire/mensuelle | Rechercher, relancer ou corriger          |
| Paiements sans facture reliée    | nombre et montant                                          | Finance/technique | Hebdomadaire           | Bloquer la clôture, pas forcément l’accès |
| Droits incohérents               | compte actif sans règle ou droit fermé malgré règle valide | Produit/support   | Quotidienne/alerte     | Corriger et analyser la cause             |
| Échec initial                    | montant échoué / montant tenté                             | Finance           | Mensuelle              | Revoir moyen, message ou relance          |
| Récupération                     | montant récupéré / montant initialement échoué             | Finance           | Mensuelle              | Comparer coût et résultat                 |
| Temps manuel                     | heures de rapprochement, correction et support             | Opérations        | Mensuelle              | Garder, intégrer ou simplifier l’offre    |
| Contestations                    | nombre, montant, motif et délai                            | Finance/support   | Mensuelle              | Corriger facture, contrat ou explication  |
| Délai de clôture                 | temps entre fin de période et rapprochement                | Finance           | Mensuelle              | Ajouter capacité ou automatisation        |

Aucun seuil universel n’est proposé. L’entreprise doit fixer sa valeur de départ, son seuil d’alerte et la personne qui décide.

## 7. Comparaison et position professionnelle

```text
Options réellement comparables : processus manuel explicite ; moteur de facturation hébergé ; moteur hébergé avec couche métier spécifique.
Périmètre et horizon communs : mêmes offres, événements, documents, paiements, droits, contrôles, exploitation et sortie sur 24 mois.
Option la moins chère : manuel à 10 clients dans le scénario central ; moteur hébergé à 100 et 500 clients.
Option la moins risquée : celle dont les transitions sont observables, rapprochées et réversibles ; ce n’est pas automatiquement la plus automatisée.
Option qui demande le moins de temps interne : moteur hébergé dans le scénario simple ; une couche spécifique demande une maintenance assumée.
Position Hagnéré Code pour le cas fréquent : moteur éprouvé pour factures/paiements, comptabilité comme vérité comptable, et couche métier mince pour offre, entreprise et droits.
Faits qui la fondent : séparation des vérités, événements asynchrones, fiscalité évolutive, coût de maintenance et besoin de rapprochement.
Cas où l’option opposée gagne : manuel pour une offre pilote à faible volume avec responsable nommé ; spécifique lorsque les contrats, usages, entités ou droits ne rentrent pas dans le moteur et que le coût du contournement est mesuré.
Signal de révision : temps manuel au-dessus du budget choisi, écarts récurrents, nouvelles cadences/pays/entités, factures contestées ou absence de clôture fiable.
Ce que nous déconseillons même si nous pourrions le vendre : réécrire le rail de paiement, répliquer un grand livre comptable incomplet, automatiser une règle commerciale indécise ou couper l’accès depuis un retour navigateur.
```

### Tableau de décision

| Critère                         | Manuel explicite                        | Moteur hébergé                         | Hébergé + couche spécifique                        |
| ------------------------------- | --------------------------------------- | -------------------------------------- | -------------------------------------------------- |
| Offre simple, faible volume     | Très bon fit                            | Possible mais peut coûter plus         | Surdimensionné                                     |
| Plusieurs cadences répétées     | Fragile si charge croissante            | Bon fit                                | Utile seulement si droits particuliers             |
| Bon de commande et virement B2B | Possible avec propriétaire              | À vérifier dans le moteur              | Orchestration parfois utile                        |
| Prix à l’usage                  | Lourd et contestable                    | Dépend des fonctions de mesure         | Bon fit si unité/preuve maîtrisées                 |
| Multiples entités/pays          | Risque d’erreur élevé                   | Dépend de la couverture                | Peut organiser, sans remplacer le fiscaliste       |
| Coût initial                    | Faible                                  | Moyen                                  | Élevé                                              |
| Temps mensuel                   | Croît avec le portefeuille              | Plus faible si flux standard           | Faible seulement si la maintenance est tenue       |
| Réversibilité                   | Bonne si données propres                | Export et contrat à tester             | Dépend de la documentation et de la reprise        |
| Risque de dépendance            | Personne clé                            | Fournisseur                            | Fournisseur + code spécifique                      |
| Cas où refuser                  | Mémoire informelle, aucun rapprochement | Outil qui ne représente pas le contrat | Spécifique sans propriétaire ni budget de maintien |

Une réponse réellement professionnelle ne dit pas « Stripe suffit » ou « il faut du sur-mesure ». Elle montre quelle vérité appartient à quel système, quelles exceptions restent manuelles, comment le mois se ferme et à quel signal la décision sera revue.

## 8. Objections et cas limites

| Objection loyale                                      | Réponse prouvée                                                                                      | Ce qui reste incertain                                                          | Conséquence                                                    |
| ----------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| « J’ai dix clients, un tableur suffit »               | Oui, si une personne rapproche et si les règles sont stables                                         | Temps, erreurs et dépendance à cette personne                                   | Garder le manuel mais mesurer et documenter                    |
| « Stripe gère tout »                                  | Stripe gère de nombreux objets et événements                                                         | Contrat, bon de commande, droits, fiscalité, comptabilité et exceptions propres | Écrire la couche de décision hors du modèle fournisseur        |
| « Mon expert-comptable corrigera en fin d’année »     | Il peut conseiller et traiter la comptabilité                                                        | Il ne voit pas forcément les droits ouverts ou l’événement technique            | Organiser un rapprochement mensuel et des identifiants communs |
| « Je coupe dès que la carte échoue »                  | Un échec est observable                                                                              | Cause, contrat, virement, litige et relation client diffèrent                   | Décider une politique par cas, puis l’automatiser              |
| « L’annuel est plus simple »                          | Il réduit le nombre de paiements                                                                     | Bon de commande, renouvellement, avoir et revenu couvrent une longue période    | Tester les dates et le traitement comptable                    |
| « Le prorata par défaut est équitable »               | L’outil sait calculer selon ses paramètres                                                           | Politique commerciale, taxe, remise, quantité et contestation                   | Approuver une facture de test réelle                           |
| « Je ne vends qu’en France »                          | Le périmètre est plus simple                                                                         | Client étranger, groupe, établissement ou expansion peuvent apparaître          | Qualifier le client avant de coder                             |
| « La réforme 2026 signifie seulement envoyer un PDF » | Les sources officielles décrivent réception et émission électroniques structurées selon le périmètre | Plateforme, format et données exactes évoluent                                  | Revalider au jour de l’intégration                             |
| « Mon SaaS est B2B, donc pas d’e-reporting »          | Le B2B domestique est au cœur de l’e-invoicing                                                       | Flux internationaux, particuliers et paiements peuvent changer le traitement    | Faire qualifier chaque type de flux                            |
| « Un remboursement ferme forcément l’accès »          | Paiement et droit sont séparés                                                                       | Motif du remboursement, contrat et période                                      | Décision explicite et journalisée                              |
| « Un chargeback est un impayé comme un autre »        | Il affecte l’encaissement                                                                            | Contestation, preuve et frais suivent un autre processus                        | Workflow distinct et responsable nommé                         |
| « La facturation à l’usage maximisera le revenu »     | Elle peut aligner prix et consommation                                                               | Mesure, correction, prévisibilité et contestation créent du coût                | Ne l’ajouter que si l’unité est compréhensible et vérifiable   |
| « 72 tests, c’est trop »                              | Le produit combinatoire est réel                                                                     | Toutes les combinaisons ne sont pas valides ou distinctes                       | Sélection par risque et traçabilité, pas exhaustivité aveugle  |
| « Une couche spécifique supprimera notre dépendance » | Elle peut porter les règles métier                                                                   | Paiement, fiscalité, infrastructure et maintenance restent dépendants           | Mesurer la dépendance totale et tester la sortie               |
| « Plus d’automatisation signifie moins d’erreurs »    | Elle réduit certaines saisies répétitives                                                            | Une mauvaise règle s’exécute plus vite et à plus grande échelle                 | Automatiser après décision, test et observabilité              |

## 9. Plan de réécriture

| Ordre | Section proposée                           | Question résolue                          | Preuve, scénario ou outil                                    | Décision produite              | À conserver / créer / couper |
| ----: | ------------------------------------------ | ----------------------------------------- | ------------------------------------------------------------ | ------------------------------ | ---------------------------- |
|     1 | Réponse en 150 mots                        | Que dois-je faire maintenant ?            | Trois modes et cas de refus                                  | Manuel, hébergé ou étude       | Conserver et renforcer       |
|     2 | Choisir son niveau de complexité           | Quel cycle vends-je réellement ?          | Offre simple, B2B virement, usage/multi-pays                 | Simplifier ou cadrer           | Créer                        |
|     3 | Les quatre vérités                         | Pourquoi le bouton ne suffit-il pas ?     | Offre, facture, paiement, droit                              | Nommer les propriétaires       | Conserver                    |
|     4 | La source de vérité de bout en bout        | Quel outil fait foi ?                     | Carte CRM/devis/commande/facture/paiement/droit/comptabilité | Attribuer objet et correction  | Créer                        |
|     5 | Machine d’états éditable                   | Que produit chaque événement ?            | Kit état, entrée, sortie, erreur, reprise                    | Valider le cycle               | Créer                        |
|     6 | Planor de la vente à la clôture            | Comment cela se passe-t-il vraiment ?     | 10 000 € facturés, avoir, impayé et 9 600 € encaissés        | Rapprocher                     | Enrichir fortement           |
|     7 | Comparatif 24 mois                         | Quel niveau coûte le moins ?              | Scénario 10/100/500 clients                                  | Choisir avec hypothèses        | Créer                        |
|     8 | Essai, rythme, remise et prorata           | Quelles règles commerciales écrire ?      | 50 € actuel + baisse + quantité                              | Tester les factures            | Conserver et enrichir        |
|     9 | Paiement échoué et relance                 | Que vaut la récupération ?                | MRR 20 000 €, 3 %, 30/60/80 %                                | Mesurer avant achat            | Enrichir                     |
|    10 | Avoir, remboursement, litige et chargeback | Comment corriger sans casser les droits ? | Matrice cause/document/cash/accès                            | Choisir un workflow            | Créer                        |
|    11 | Facturation à l’usage                      | Faut-il l’ajouter ?                       | Unité, mesure, correction et preuve                          | Inclure ou exclure             | Créer court                  |
|    12 | France 2026–2027                           | Que change la réforme ?                   | Sources officielles datées et arbre par taille/flux          | Préparer et escalader          | Conserver, dater, préciser   |
|    13 | Vendre hors de France                      | Quelles données collecter ?               | Fiche pays/B2B-B2C/preuve/identifiants                       | Consulter avant de coder       | Créer                        |
|    14 | Tests par risque                           | Que faut-il réellement tester ?           | Univers de 72 combinaisons, sélection et reprise             | Construire la recette          | Enrichir                     |
|    15 | Tableau de bord mensuel                    | Quand revoir l’architecture ?             | Échec, récupération, écarts, temps, clôture                  | Garder, intégrer ou simplifier | Créer                        |
|    16 | Position professionnelle                   | Que recommande Hagnéré Code ?             | Faits, cas inverse et signal de révision                     | Décider sans discours vendeur  | Renforcer                    |
|    17 | CTA diagnostic                             | Qu’obtiendra le dirigeant ?               | Carte, TCO et trois flux contrôlés                           | Demander un audit borné        | Resserrer                    |

### Contrat des 150 premiers mots

- Ouvrir sur le problème exact : « votre carte est débitée, mais savez-vous expliquer quelle facture, quelle période et quel accès en résultent ? »
- Répondre immédiatement : quatre vérités distinctes et une source fiable pour chacune.
- Donner les trois voies : manuel explicite, moteur hébergé, couche métier spécifique.
- Annoncer le critère : volume, temps manuel, répétition et exceptions, pas préférence technique.
- Promettre un résultat concret : TCO 24 mois, cycle Planor rapproché et matrice de tests.
- Dire le mauvais cas : si le prix, le contrat ou le pays ne sont pas décidés, ne pas automatiser.

### Éléments à supprimer ou réduire

- Ne pas multiplier les noms d’états Stripe dans les titres ou les promesses.
- Ne pas transformer la page en comparateur de marques.
- Ne pas détailler la fiscalité internationale au point de produire un avis générique.
- Ne pas ajouter de taux d’impayé ou de récupération présenté comme norme.
- Regrouper les réserves de conformité dans un bloc décisionnel lisible.
- Ne pas exiger les 72 combinaisons comme recette exhaustive.

### Éléments à conserver

- La scène du premier grand compte.
- Les quatre vérités et leurs propriétaires.
- Les six événements du cycle.
- Les quatre ventes fictives Planor.
- Le prorata simplifié et toutes ses exclusions.
- La distinction carte refusée, virement non rapproché, facture contestée et résiliation.
- Le refus d’un délai universel.
- Le conseil de validation par expert-comptable.
- La possibilité assumée de rester manuel.
- Le refus de reconstruire le système de paiement réglementé.

### Maillage interne à ajouter

- `/guides/combien-coute-un-saas` pour le TCO et le budget de construction ;
- `/guides/securite-saas-b2b` pour les événements, secrets, journaux et accès ;
- `/guides/rgpd-saas-b2b` pour les données, conservation et sortie ;
- `/guides/contrat-tma-application` ou le guide de maintenance pertinent pour le budget de maintien de la couche spécifique ;
- conserver `/guides/mvp-saas-quoi-inclure`, `/guides/cahier-des-charges-saas` et `/guides/prioriser-fonctionnalites-mvp-saas`.

Le maillage doit suivre une question réelle du lecteur. Il ne faut pas ajouter des liens uniquement pour augmenter leur nombre.

## 10. Contre-audit et portes de correction

### P0 — bloquants avant de revendiquer une réponse de référence

- [ ] Revalider Stripe, Impots.gouv.fr, ministère de l’Économie, Service Public et les échéances de réforme au jour de la réécriture.
- [ ] Faire confirmer par une source primaire ou retirer toute formulation sur doublons et ordre d’événements qui dépend du fournisseur.
- [ ] Étiqueter chaque coût, taux, seuil et cas Planor comme fictif, remplaçable et hors taxes.
- [ ] Faire recalculer indépendamment TCO, seuil, dunning, rapprochement, prorata et combinatoire.
- [ ] Ne publier aucune conclusion fiscale internationale ni reconnaissance du revenu sans validation adaptée.
- [ ] Créer le kit réellement éditable et vérifier qu’il s’ouvre sans compte ni formulaire obligatoire.
- [ ] Ne promettre ni réduction d’impayé, ni gain de revenu, ni conformité automatique.

### P1 — nécessaires pour viser au moins 90/100

- [ ] Ajouter la carte quote-to-cash et une source de vérité pour chaque objet.
- [ ] Comparer manuel, moteur hébergé et couche spécifique sur 24 mois.
- [ ] Publier toutes les hypothèses, inclusions, exclusions et sensibilités du calcul.
- [ ] Ajouter un mois de rapprochement complet avec facture, avoir, paiement, impayé et droit.
- [ ] Ajouter avoir, remboursement, litige et chargeback.
- [ ] Ajouter une décision courte sur facturation à l’usage.
- [ ] Distinguer moteur de paiement, moteur de facturation, comptabilité et couche d’entitlements.
- [ ] Ajouter les indicateurs, propriétaires, baselines et signaux de révision.
- [ ] Préciser la différence entre six événements et test minimal de cinq événements.
- [ ] Donner l’opinion Hagnéré Code, son cas inverse et ce que l’entreprise refuse de vendre.

### P2 — différenciation et finition

- [ ] Fournir machine d’états, fichier de rapprochement, matrice de tests et grille de choix en CSV/XLSX/Markdown.
- [ ] Ajouter un exemple Planor rempli avec identifiants factices cohérents.
- [ ] Ajouter un arbre France/multi-pays qui oriente vers le spécialiste sans produire d’avis.
- [ ] Faire utiliser le kit par un fondateur non financier et observer les incompréhensions.
- [ ] Faire contre-auditer l’exemple par une personne produit/technique et un professionnel comptable ou fiscal adapté.
- [ ] Tester tables, diagrammes, téléchargements et CTA à 320, 390, 768, 1 024 et 1 440 px.
- [ ] Contrôler thèmes clair/sombre, navigation clavier, liens externes et image sociale.

### Score après correction

Non attribué. Le seuil de 90/100 dépendra du vrai kit, du contre-calcul indépendant, de la validation des sources au jour de publication, du test lecteur et du rendu navigateur.

## 11. Preuves techniques et visuelles

```text
Manifeste : non modifié et non revalidé.
Calculs refaits : TCO 24 mois central 3 240/8 008/31 688/97 188 €, 12 960/12 760/34 820/98 160 €, 56 160/33 880/48 740/102 480 € ; seuil manuel/hébergé 96,3768, soit 97 clients entiers ; sensibilités 183/97/50/247/74 ; récupération 180/360/480 € ; écart annuel 2 160 € ; rapprochement 10 000 - 100 - 300 = 9 600 € ; matrice 72 ; prorata 50 €.
Sources rouvertes : Stripe, Impots.gouv.fr, ministère de l’Économie, Service Public, France Num, GOV.UK, CRA, ATO, BMF, Your Europe et Commission européenne.
Liens vérifiés : URLs directes retrouvées le 24/07/2026 ; contrôle HTTP complet à refaire après intégration.
Commandes : shasum -a 256 ; assertions Node.js ; inspection localisée du TSX, du registre et du layout.
Rendu 320 / 390 / 768 / 1024 / 1440 : non réalisé, aucune page publique modifiée.
Image sociale : source référencée dans les métadonnées, rendu non contrôlé.
Statut maximal prouvé : audit en lecture seule avec calculs vérifiés.
Réserve publication / indexation : aucune publication, aucun déploiement et aucune indexation prouvés.
```

### Verdict final de l’audit

La page possède déjà la bonne thèse : facturation et paiement ne doivent jamais décider seuls de ce que le client a acheté ni de ce qu’il peut utiliser. Pour devenir la meilleure réponse, elle doit désormais transformer cette thèse en décision économique, en clôture mensuelle démontrée et en actif réutilisable. L’avantage compétitif ne viendra pas d’une liste supplémentaire de fonctions Stripe. Il viendra d’un cycle complet que le dirigeant peut chiffrer, tester, rapprocher et faire évoluer sans confondre commerce, trésorerie, comptabilité et produit.

## 12. Plan d’implémentation exécutable après le GO TMA

### 12.1. Statut, périmètre et garde-fou de démarrage

Ce plan est prêt à être exécuté **successivement, après restitution du contrôle exclusif d’écriture du dépôt par le chantier TMA**. À ce stade :

- page publique relue : `src/app/guides/facturation-abonnements-saas/page.tsx` ;
- SHA-256 de la page : `59a3466eccfc8df4b54dbf12bdc6635410ca17dfd366dcecf3e4515f75358e20` ;
- recherche longue relue : `docs/audits/giga-audit-2026-07-24/research/facturation-abonnements-saas-deep-dive.md` ;
- SHA-256 de la recherche : `5598108c984dde60f0a3b54f67ad8dceacfdd7ae002d5a2631e6f3ed2ba6127b` ;
- aucun fichier public, registre, test, manifeste, composant ou fichier de recherche n’est modifié par cette préparation.

Le GO d’implémentation ne doit être donné qu’après vérification de `git status`, inventaire des changements des autres agents et attribution explicite des fichiers. Une dérive de l’un des deux SHA ci-dessus impose une relecture différentielle avant toute écriture.

### 12.2. Décision que le lecteur doit pouvoir prendre

Le guide ne doit pas seulement apprendre « comment marche un abonnement ». À la fin, un dirigeant doit pouvoir :

1. décrire ce qu’il vend dans un enregistrement commercial accepté ;
2. nommer le système qui fait foi pour le contrat, l’abonnement, la facture, le paiement, le droit d’accès, la comptabilité et l’analyse ;
3. choisir entre cinq architectures sans confondre leurs périmètres ;
4. estimer son coût total à vingt-quatre mois avec ses propres hypothèses ;
5. écrire les règles de prorata, impayé, avoir, remboursement, résiliation et facturation à l’usage ;
6. rapprocher un mois sans prendre le relevé bancaire pour une comptabilité ;
7. sélectionner les tests critiques de son cycle ;
8. savoir quand rester simple, quand intégrer et quand demander une validation comptable, fiscale ou juridique.

La réponse professionnelle doit être visible avant le premier long développement :

> Dans la plupart des SaaS B2B, achetez le moteur générique de facturation et de paiement, mais gardez en interne une couche métier mince qui sait ce que le client a accepté et quels droits en découlent. Restez manuel si le volume est faible, les règles stables et le rapprochement réellement tenu. Ne développez un moteur spécifique que lorsque les contrats, usages, entités ou droits ne rentrent plus proprement dans un outil éprouvé et que le coût total le justifie.

### 12.3. Ouverture humaine proposée

Titre éditorial recommandé :

> **Facturation des abonnements SaaS : construire un système fiable, du devis au paiement**

Premiers paragraphes proposés :

> Vous avez vendu un abonnement à 100 € par mois. Le client passe à l’offre supérieure le 18, paie par virement avec quinze jours de retard, puis demande un avoir. Que doit faire votre SaaS entre-temps : modifier la facture, ouvrir les nouvelles fonctions, relancer le paiement ou attendre la banque ?
>
> C’est à cet endroit que les systèmes fragiles apparaissent. Une facture n’est pas un paiement. Un paiement n’est pas un droit d’accès. Et le MRR affiché dans votre tableau de bord n’est ni votre trésorerie ni votre chiffre d’affaires comptable.
>
> Dans ce guide, nous allons suivre une entreprise fictive pendant douze mois, comparer quatre architectures sur vingt-quatre mois et écrire les règles indispensables : devis, abonnement, prorata, impayé, avoir, remboursement, facture électronique et rapprochement. Mon avis est simple : dans la plupart des SaaS B2B, il faut acheter le moteur générique et garder en interne la logique qui décrit ce que le client a réellement acheté.

Contrôle des 150 premiers mots :

- le lecteur se reconnaît dans une situation ordinaire ;
- trois confusions dangereuses sont levées sans jargon ;
- le contenu concret du guide est annoncé ;
- l’opinion est donnée immédiatement ;
- aucune promesse de conformité, de revenu ou de réduction d’impayé n’est formulée.

### 12.4. Architecture éditoriale non répétitive

Les ancres existantes utiles sont conservées autant que possible pour limiter la rupture de liens. Les nouvelles ancres ne doivent pas reproduire mécaniquement le rythme « paragraphe, cartes, encadré ».

| Ordre | Ancre / section | Forme éditoriale | Preuve ou scénario | Résultat pour le lecteur |
| ----: | ---------------- | ---------------- | ------------------- | ------------------------ |
| 1 | `reponse` — La réponse courte | Ouverture narrative + verdict en deux niveaux | Client à 100 €, upgrade le 18, virement, avoir | Comprendre la séparation facture/paiement/droit |
| 2 | `cycle` — Une vente de bout en bout | Frise quote-to-cash en 12 étapes | Identifiants fictifs communs du devis à la clôture | Voir où naissent les écarts |
| 3 | `quatre-etats` — Les sources de vérité | Tableau de responsabilité, pas quatre cartes similaires | Contrat, abonnement, facture, paiement, droit, comptabilité, analyse | Attribuer chaque donnée et sa correction |
| 4 | `choisir` — Cinq architectures | Comparatif à périmètre explicite | Manuel, hébergé, hébergé + couche, MoR, spécifique | Éliminer les mauvais choix |
| 5 | `cout` — Le coût sur 24 mois | Tableau chiffré + formule lisible + sensibilité | 10, 100, 500 clients ; panier, temps, frais variables | Remplacer le seuil magique par un calcul |
| 6 | `exemple` — Douze mois chez Planor | Récit mensuel ponctué de trois tableaux courts | MRR, mouvements, factures, crédits et encaissements | Relier produit, cash et pilotage |
| 7 | `changement` — Upgrade, downgrade et prorata | Cas pas-à-pas + arbre de décision | 100 → 200 € à mi-période, avoir -50 €, débit 100 € | Écrire une politique avant de paramétrer |
| 8 | `impaye` — Échec et relance | Trois cohortes chiffrées + cas opposés | 20 k€ de MRR, 3 % d’échec, 30/60/80 % récupérés | Mesurer sans inventer de benchmark |
| 9 | `rapprochement` — Fermer le mois | Mini-grand-livre narré | Factures, avoirs, paiements, remboursements et créances | Expliquer chaque écart |
| 10 | `mesure` — Cinq chiffres qui ne disent pas la même chose | Tableau de définitions avec exemples | MRR, ARR, churn, facturation, trésorerie, revenu comptable | Éviter les décisions sur un mauvais indicateur |
| 11 | `comptabilite` — France et vente internationale | Matrice d’escalade, sans recette fiscale | Flux France, UE, États-Unis, Royaume-Uni, Canada, Allemagne, Australie | Savoir quelles données réunir et qui consulter |
| 12 | `audit` — Dix-huit tests critiques | Checklist classée par risque | Cas synchrones, asynchrones, usage, virement, e-facture, migration | Construire la recette |
| 13 | `verdict` — Ce que nous ferions | Opinion, contre-cas, signaux de révision | Coût, complexité et responsabilités | Décider et assumer la prochaine étape |
| 14 | `sources` — Sources et limites | Bibliographie commentée par rôle | Primaire, produit, commerciale, internationale | Comprendre ce qui prouve quoi |

Rythme visuel imposé :

- une scène vécue pour entrer ;
- une frise pour la séquence ;
- un tableau seulement lorsqu’il compare réellement ;
- une formule suivie d’une phrase humaine ;
- une chronologie Planor ;
- un arbre pour une décision conditionnelle ;
- une checklist pour la recette ;
- un bloc d’opinion court à la fin.

Interdits de style :

- faire commencer chaque H2 par une définition ;
- répéter les mêmes composants en grille à chaque section ;
- empiler les anglicismes sans traduction immédiate ;
- écrire « cela dépend » sans nommer les variables qui font dépendre ;
- transformer les réserves en paragraphes défensifs qui cassent la lecture ;
- confondre longueur, exhaustivité et valeur décisionnelle.

### 12.5. Données et scénarios chiffrés à intégrer

#### A. Planor sur douze mois

Les données fictives doivent rester cohérentes dans le guide, le classeur, les tests et, si créé, le calculateur.

| Mois | MRR de fin de mois |
| ---- | -----------------: |
| Janvier | 2 200 € |
| Février | 2 500 € |
| Mars | 2 800 € |
| Avril | 2 900 € |
| Mai | 2 900 € |
| Juin | 3 200 € |
| Juillet | 3 300 € |
| Août | 3 500 € |
| Septembre | 3 200 € |
| Octobre | 3 600 € |
| Novembre | 3 600 € |
| Décembre | 3 800 € |

Contrôle annuel des mouvements :

```text
MRR de départ : 0 €.
Nouveau MRR cumulé : +4 100 €.
Expansion : +300 €.
Contraction : -200 €.
Churn : -400 €.
MRR de fin : 0 + 4 100 + 300 - 200 - 400 = 3 800 €.
ARR de sortie illustratif : 3 800 × 12 = 45 600 €.
```

Le texte doit préciser que l’ARR de sortie est une annualisation du rythme de décembre, pas le chiffre d’affaires de l’année.

#### B. Factures et trésorerie Planor

```text
Factures brutes émises : 41 000 €.
Avoirs : 250 €.
Montants encaissés : 40 750 €.
Remboursements : 100 €.
Créances clients de fin : 0 €.
Trésorerie nette illustrative : 40 750 - 100 = 40 650 €.
```

Le guide public montre les totaux et un mois détaillé. Le classeur contient les douze mois et permet de vérifier :

`factures brutes - avoirs - variation des créances = encaissements`, après traitement explicite des remboursements et selon la convention décrite. Aucune formule ne doit prétendre constituer une écriture comptable universelle.

#### C. Relance après paiement échoué

Hypothèses fictives :

- volume facturable mensuel : 20 000 € ;
- échec au premier passage : 3 %, soit 600 € ;
- récupération : 30 %, 60 % ou 80 % ;
- montant récupéré : 180 €, 360 € ou 480 € ;
- montant non récupéré : 420 €, 240 € ou 120 € ;
- différence annuelle si le mois se répétait entre 30 % et 60 % : `180 × 12 = 2 160 €` ;
- différence annuelle entre 30 % et 80 % : `300 × 12 = 3 600 €`.

Le guide doit exiger une mesure par cohortes fermées et rappeler que ces taux ne viennent pas d’un benchmark.

#### D. Prorata et changements d’offre

Cas principal :

```text
Ancienne formule : 100 € HT par période de 30 jours.
Nouvelle formule : 200 € HT.
Changement à mi-période.
Crédit illustratif sur l’ancienne formule : -50 €.
Débit illustratif sur la nouvelle formule : +100 €.
Solde illustratif : +50 € HT.
```

Le même bloc doit montrer trois contre-cas :

- facture précédente encore impayée : ne pas créer automatiquement un crédit économiquement injustifié ;
- downgrade : possibilité de le programmer au renouvellement plutôt que de rembourser immédiatement ;
- tarification à l’usage : la quantité observée et corrigée remplace le simple prorata calendaire.

#### E. Univers de tests

L’univers théorique `3 offres × 2 cadences × 3 contextes × 4 transitions = 72` sert à expliquer la combinatoire. Il ne devient jamais une injonction à exécuter aveuglément 72 tests. La recette sélectionne les cas par impact financier, fréquence, irréversibilité et difficulté de reprise.

### 12.6. Comparateur et ressource signature

#### Ressource P1 — classeur libre et non captif

Fichier cible après GO :

`public/ressources/kit-pilotage-facturation-saas.xlsx`

Accès recommandé : téléchargement libre, sans formulaire obligatoire. La page peut proposer un contact ensuite, mais le fichier promis doit exister avant publication du lien.

Onglets obligatoires :

1. `LIRE_D_ABORD` — objectif, limites, mode d’emploi et code couleur ;
2. `REGLES` — essai, cadence, prorata, relance, avoir, remboursement, résiliation et droit d’accès ;
3. `TCO_24_MOIS` — variables, quatre architectures, inclusions, exclusions et sensibilité ;
4. `MRR` — nouveau MRR, expansion, contraction, churn et contrôle du solde ;
5. `RAPPROCHEMENT` — factures, avoirs, encaissements, remboursements, créances et écarts ;
6. `RELANCES` — cohortes, montants échoués, récupérés et non récupérés ;
7. `TESTS` — dix-huit cas, risque, précondition, résultat attendu, reprise et propriétaire ;
8. `EXEMPLE_PLANOR` — jeu rempli qui permet de comprendre tous les autres onglets.

Critères d’acceptation :

- toutes les cellules d’entrée sont distinguées des formules ;
- aucune cellule protégée n’empêche l’usage normal ;
- formules recalculées et contre-calculées indépendamment ;
- ouverture vérifiée dans Excel et LibreOffice ;
- aucune macro, aucune connexion distante et aucune donnée réelle ;
- exemples Planor exactement égaux à MRR final 3 800 €, factures brutes 41 000 €, avoirs 250 € et trésorerie nette 40 650 € ;
- notice explicite : outil pédagogique, pas logiciel comptable, fiscal ou juridique ;
- métadonnées, nom de fichier, poids, type MIME et lien de téléchargement testés ;
- version et date visibles dans le fichier.

#### Comparateur P2 — calculateur TCO interactif

Le calculateur peut être ajouté après le classeur si le budget de test le permet. Il doit partager une fonction pure et testée avec les données affichées, et non dupliquer les formules dans le JSX.

Entrées minimales :

- nombre moyen de clients actifs ;
- panier facturé moyen ;
- coût horaire interne ;
- heures fixes et minutes par client pour chaque option ;
- mise en place, abonnement, maintenance et frais variables ;
- horizon.

Sorties :

- TCO de chaque option ;
- décomposition mise en place / récurrent / temps interne / variable ;
- seuil seulement lorsqu’il existe mathématiquement ;
- message explicite lorsqu’aucun seuil n’existe dans l’intervalle ;
- rappel des éléments exclus ;
- export ou report des valeurs dans le classeur si cela reste simple et accessible.

Tests obligatoires :

- valeurs centrales 10, 100 et 500 clients ;
- cinq sensibilités du tableau de la section 6 ;
- frais variables à zéro ;
- panier moyen qui annule le seuil ;
- zéro client, valeurs extrêmes, virgule décimale, entrée vide et nombre négatif ;
- arrondis monétaires cohérents ;
- usage clavier, lecteurs d’écran et mobile 320 px.

### 12.7. Carte des sources à citer et à dater

Le guide doit citer la source au plus près du fait, avec le rôle et la limite de la source. Les pages commerciales servent à documenter un produit ou à découvrir un angle, jamais à prouver une obligation ou un gain.

| Sujet | Source primaire ou adaptée | Usage autorisé | Réserve |
| ----- | -------------------------- | -------------- | ------- |
| Cycle d’abonnement et objets | Stripe, documentation « Subscription overview » | Expliquer un exemple concret d’objets | Modèle fournisseur, pas vérité universelle |
| Événements asynchrones | Stripe, documentation webhooks | Prouver les événements et recommander idempotence/reprise | Dater et tester la version intégrée |
| Prorata | Stripe, documentation prorations | Montrer les paramètres et risques | La politique commerciale reste au SaaS |
| Usage | Stripe, documentation usage-based billing | Décrire mesure et facturation | Ne prouve ni pertinence ni conformité |
| Relance et analyse | Stripe, recovery et subscription analytics | Définir ce que l’outil sait mesurer | Aucun taux vendeur utilisé comme benchmark |
| Avoirs | Stripe, documentation credit notes | Montrer le mécanisme fournisseur | Ne remplace pas le traitement comptable |
| Prix public illustratif | Stripe, page France Billing | Alimenter une hypothèse datée | Périmètre et paiement à distinguer |
| Quote-to-cash | Chargebee, documentation quote-to-subscription | Vérifier les étapes fonctionnelles | Source commerciale |
| Merchant of Record | Paddle, tarification et documentation MoR | Expliquer le rôle et son coût public daté | Ne pas comparer son pourcentage à un seul module Billing |
| Réforme française | Ministère de l’Économie et DGFiP/Impots.gouv.fr | Calendrier, champ, réception, émission, e-reporting | Revalider le jour de publication |
| Plateformes agréées | Liste officielle DGFiP | Orienter vers la liste dynamique | Ne jamais figer une liste dans l’article |
| Formats et spécifications | DGFiP spécifications externes, version en vigueur | Nommer UBL, CII et format hybride/Factur-X | Versionner et dater |
| Norme française | AFNOR, XP Z12-012 de juin 2026 | Signaler le cadre d’interopérabilité | Vérifier l’accès et le statut de la norme |
| Mentions et conservation | Service Public Entreprendre | Rappeler le cadre général | Cas métier à valider |
| Carte et sécurité | PCI SSC FAQ, CNIL paiement à distance | Expliquer que l’externalisation réduit sans supprimer toutes les responsabilités | Pas d’avis de conformité personnalisé |
| Chargeback | DGCCRF | Distinguer contestation de l’impayé simple | Contrat et moyen de paiement à qualifier |
| Union européenne | Commission européenne et Your Europe | Construire la matrice d’escalade | Pas de recette TVA multi-pays |
| États-Unis | Cour suprême, *South Dakota v. Wayfair*, et une administration fiscale d’État | Montrer l’hétérogénéité et le besoin de qualification | Aucun seuil généralisé à tous les États |
| Royaume-Uni | GOV.UK / HMRC | Questions de lieu et statut | Vérification au cas concret |
| Canada | Canada Revenue Agency | Questions GST/HST et non-résident | Vérification au cas concret |
| Allemagne | BMF et texte UStG | E-facture et obligations locales | Ne pas transposer à la France |
| Australie | Australian Taxation Office | GST sur produits numériques | Vérification au cas concret |
| Revenu comptable | IFRS 15, uniquement comme frontière conceptuelle | Dire pourquoi facture, cash et revenu peuvent différer | Renvoi au professionnel, aucun conseil comptable |

Fraîcheur obligatoire avant publication :

- revalider les échéances françaises du 1er septembre 2026 et 2027 ;
- vérifier la version des spécifications DGFiP et le statut de la liste des plateformes agréées ;
- dater les prix publics Stripe et Paddle ;
- contrôler les URLs et leur redirection ;
- retirer ou reformuler toute donnée dont la source primaire n’est plus accessible ;
- afficher « vérifié le [date] » dans la bibliographie ou la note de mise à jour.

### 12.8. Opinion professionnelle, cas inverses et refus assumés

Opinion centrale :

> Achetez les mécanismes génériques ; possédez les règles commerciales et les droits d’accès ; rapprochez chaque mois. Aucun statut technique ne décide à lui seul ce que le client a acheté.

Cette opinion doit être justifiée par :

- le coût total et non le seul coût de construction ;
- les événements asynchrones et les reprises ;
- l’évolution des règles fiscales et documentaires ;
- la nécessité d’un propriétaire pour le contrat, la facture, le paiement, les droits et la comptabilité ;
- la possibilité de changer de fournisseur sans perdre l’historique commercial.

Cas où l’option opposée gagne :

- **manuel** : très petit portefeuille, offres stables, règles tenant sur une page, responsable nommé, clôture mensuelle réelle ;
- **Merchant of Record** : lancement international B2C précoce où le transfert d’une partie des obligations et opérations compense le coût et la perte de contrôle ;
- **moteur spécifique** : contrats, usages, entités, quantités ou droits véritablement non représentables, économies démontrées et équipe durablement responsable.

Signaux qui imposent de revoir la décision :

- plus de deux heures par mois absorbées par les exceptions ;
- écarts récurrents entre facture, paiement, droit et comptabilité ;
- nouveau pays, nouvelle entité, nouvelle cadence ou tarification à l’usage ;
- factures contestées ou avoirs improvisés ;
- clôture mensuelle non fiable ;
- dépendance à une personne ou impossibilité de reconstituer un dossier client.

Ce que Hagnéré Code doit refuser de vendre :

- la reconstruction d’un rail de paiement ;
- un pseudo-grand-livre comptable dans le produit ;
- l’automatisation d’une règle commerciale que l’entreprise n’a pas décidée ;
- une promesse de conformité universelle ;
- une coupure d’accès déclenchée par un seul signal technique non rapproché.

### 12.9. CTA utiles et conversion sans surpromesse

CTA intermédiaire, après le TCO :

> **Calculez votre coût réel avant de choisir.** Téléchargez le classeur, remplacez le temps interne, le panier moyen, les frais et le volume par vos données, puis comparez les architectures sur vingt-quatre mois.

CTA final :

> **Pouvez-vous relier en moins de cinq minutes le devis accepté, la facture, le paiement et les droits ouverts d’un client ?** Si la réponse est non, Hagnéré Code peut cartographier votre cycle actuel, chiffrer les options, écrire les règles et livrer une matrice de tests priorisée.

Livrables annoncés pour un diagnostic :

- carte du cycle quote-to-cash et propriétaires ;
- inventaire des règles et exceptions ;
- TCO à vingt-quatre mois avec hypothèses ;
- recommandation d’architecture et cas inverse ;
- matrice des flux critiques et critères de reprise ;
- feuille de route bornée.

Interdits :

- « augmentez votre revenu » ;
- « éliminez les impayés » ;
- « soyez conforme automatiquement » ;
- « rentabilisé en X mois » sans données client ;
- faux sentiment d’urgence ou formulaire obligatoire pour accéder à la ressource promise.

### 12.10. Maillage interne et prévention de la cannibalisation

Le guide `facturation-abonnements-saas` doit posséder exclusivement l’intention suivante :

> Concevoir, choisir, chiffrer, tester et rapprocher le cycle opérationnel de facturation d’un abonnement SaaS.

Répartition des intentions :

| Page | Intention qui lui appartient | Ce que le guide facturation doit seulement résumer |
| ---- | ---------------------------- | ------------------------------------------------- |
| `/guides/mvp-saas-quoi-inclure` | Périmètre fonctionnel du premier produit | La facturation peut être manuelle ou minimale au MVP |
| `/guides/prioriser-fonctionnalites-mvp-saas` | Priorisation de la roadmap | Où placer l’automatisation de facturation dans les risques |
| `/guides/cahier-des-charges-saas` | Spécification complète du SaaS | Les interfaces et règles à inscrire au cahier des charges |
| `/guides/combien-coute-un-saas` | Budget global de construction et d’exploitation | Le TCO facturation comme sous-ensemble |
| `/guides/securite-saas-b2b` | Modèle complet de sécurité | Secrets, webhooks, journaux et accès sensibles |
| `/guides/rgpd-saas-b2b` | Protection des données | Données clients, prestataires, conservation et sortie |
| `/guides/faire-evoluer-saas-apres-mvp` | Évolution du produit après le lancement | Signaux qui justifient une couche métier |
| `/guides/contrat-tma-application` | Maintenance et gouvernance de l’application | Budget et responsabilités de la couche spécifique |

Futurs sujets à isoler plutôt qu’à absorber :

- réforme française de la facturation électronique pour un SaaS ;
- stratégie tarifaire SaaS ;
- churn involontaire et relance ;
- MRR, ARR, churn, cash et revenu ;
- Merchant of Record ou PSP.

Règles de lien :

- un lien suit une question réelle du lecteur ;
- ancre descriptive, jamais « cliquez ici » ;
- deux à quatre liens contextuels forts valent mieux qu’une liste finale exhaustive ;
- ne pas reprendre dans le guide facturation le mot-clé principal ou la promesse centrale de la page liée ;
- vérifier les canonicals et les titres avant publication.

### 12.11. Ordre d’exécution après GO et carte des fichiers

Ordre strict :

1. vérifier le contrôle exclusif du worktree et relire les changements intervenus depuis les deux snapshots ;
2. revalider les sources volatiles et archiver la date de contrôle ;
3. figer les données Planor et les formules dans une source unique ;
4. construire puis contre-tester le classeur ;
5. réécrire la page section par section en conservant la promesse et les ancres utiles ;
6. ajouter le comparateur uniquement si sa fonction pure et ses tests sont prêts ;
7. mettre à jour métadonnées, FAQ, données structurées, registre, temps de lecture et maillage ;
8. lancer lint, typecheck, tests ciblés, tests globaux et build ;
9. faire une relecture anti-IA et une relecture dirigeant ;
10. contrôler le rendu réel aux largeurs prévues, les liens, le téléchargement et les thèmes ;
11. faire le contre-audit P0/P1/P2 ;
12. seulement ensuite, intégrer au commit, pousser, déployer et vérifier la production si ces opérations sont autorisées.

Carte de fichiers prévisionnelle, sans création à ce stade :

```text
src/app/guides/facturation-abonnements-saas/page.tsx
public/ressources/kit-pilotage-facturation-saas.xlsx
src/lib/billing-tco.ts                         # si calculateur P2
src/lib/billing-tco.test.ts                    # si calculateur P2
src/components/guides/BillingTcoCalculator.tsx # si calculateur P2
tests ou fichier de test du composant           # selon conventions du dépôt
registre/manifeste/métadonnées concernés        # après inventaire, jamais supposés
```

### 12.12. Dix-huit tests métier minimum

1. nouvel abonnement mensuel par carte ;
2. paiement nécessitant une authentification ;
3. paiement initial encore en traitement ;
4. échec asynchrone reçu après un succès apparent ;
5. vente B2B par virement à quinze ou trente jours ;
6. virement reçu sans référence exploitable ;
7. webhook reçu deux fois ;
8. événements reçus dans un ordre inattendu ;
9. upgrade alors que la période est payée ;
10. upgrade alors que la facture précédente reste impayée ;
11. downgrade programmé au renouvellement ;
12. résiliation à fin de période ;
13. résiliation immédiate avec remboursement ;
14. mesure d’usage envoyée deux fois ;
15. mesure d’usage reçue après la clôture ;
16. relance réussie avec un nouveau moyen de paiement ;
17. rejet d’une facture électronique ou d’un identifiant ;
18. migration d’un contrat annuel comportant déjà un avoir.

Chaque test doit préciser : précondition, événement, identifiant d’idempotence, résultat facture, résultat paiement, résultat droit, résultat comptable attendu, journal observable, reprise et propriétaire.

### 12.13. Critères P1 bloquants avant publication de la réécriture

- [ ] Les premiers 150 mots répondent à la question du dirigeant et donnent l’opinion.
- [ ] Les cinq architectures sont distinguées ; le MoR n’est pas comparé comme un simple pourcentage.
- [ ] Le TCO central et les cinq sensibilités sont recalculés par un second moyen.
- [ ] Toute hypothèse fictive est signalée ; chaque inclusion et exclusion est visible.
- [ ] Les douze MRR Planor se soldent à 3 800 € et les mouvements à 4 100 + 300 - 200 - 400.
- [ ] Les totaux Planor se soldent à 41 000 € facturés, 250 € d’avoirs et 40 650 € de trésorerie nette illustrative.
- [ ] MRR, ARR, facture, cash et revenu comptable sont explicitement séparés.
- [ ] Le prorata montre crédit, débit, solde et trois contre-cas.
- [ ] Le scénario d’impayé montre 180/360/480 € sans transformer ces valeurs en benchmark.
- [ ] Les sept sources de vérité ont un propriétaire, un identifiant et une règle de correction.
- [ ] Les dix-huit tests critiques sont présents dans le kit et une sélection lisible apparaît dans le guide.
- [ ] Le classeur existe, s’ouvre, se recalcule et ne contient aucune donnée réelle.
- [ ] Les sources françaises volatiles et les prix publics sont datés le jour de publication.
- [ ] Les sujets fiscaux et comptables restent une matrice d’escalade, pas un avis.
- [ ] Deux CTA concrets existent sans garantie de conformité, de ROI ou de récupération.
- [ ] La FAQ visible et le JSON-LD racontent la même chose.
- [ ] Canonical, métadonnées sociales, sitemap/registre et maillage sont cohérents.
- [ ] Lint, typecheck, tests et build réussissent dans l’état exact destiné au commit.
- [ ] Le rendu et le téléchargement sont contrôlés dans un vrai navigateur à 320, 390, 768, 1 024 et 1 440 px.
- [ ] Aucun texte tronqué, tableau illisible, débordement horizontal ou contraste insuffisant ne subsiste.

Échec d’un seul critère P1 : la nouvelle version ne doit pas être déclarée prête à publier.

### 12.14. Critères P2 pour viser la meilleure réponse

- [ ] Le calculateur interactif et le classeur utilisent exactement les mêmes formules.
- [ ] Un fondateur non financier réussit les tâches « choisir une option », « expliquer décembre » et « retrouver un écart » sans aide.
- [ ] Un profil produit/technique contre-audite les événements, l’idempotence et les droits.
- [ ] Un professionnel comptable ou fiscal adapté relit les passages France, international et rapprochement.
- [ ] Les cas Merchant of Record et moteur spécifique sont expliqués avec un vrai cas inverse.
- [ ] La page reste fluide malgré la profondeur : aucun bloc ne dépasse son utilité décisionnelle.
- [ ] Les composants visuels alternent et restent compréhensibles sans couleur.
- [ ] Le classeur est testé dans Excel et LibreOffice, sur ordinateur et mobile en lecture.
- [ ] Les liens sortants, dates de fraîcheur et ressources téléchargeables ont un contrôle automatisable.
- [ ] Un mini journal de contre-audit consigne calculs, sources, tests, captures et réserves.

### 12.15. Verdict prêt à exécuter

**GO éditorial conditionnel après fin du chantier TMA.** Le sujet, l’ouverture, l’architecture, les chiffres, la ressource, les sources, l’opinion, les CTA, le maillage et les portes qualité sont définis. La réécriture peut commencer sans nouvelle phase de conception, mais elle ne doit pas démarrer tant que le contrôle exclusif du dépôt n’est pas confirmé.

Le premier livrable d’implémentation doit être le modèle de données et le classeur, pas la prose. Cette séquence empêchera le guide de promettre des calculs ou une ressource qui n’existent pas encore. Le verdict de publication restera **non attribué** jusqu’au passage de tous les critères P1 sur l’état exact destiné à la production.
