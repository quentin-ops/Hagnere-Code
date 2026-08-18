# Recherche approfondie — `facturation-abonnements-saas`

**Date de recherche :** 24 juillet 2026

**Nature du document :** dossier de décision pour la future réécriture du guide

**Périmètre :** devis, commande, contrat, abonnement, facture, paiement, relance, droits d’accès, rapprochement, mesure et préparation à la facturation électronique

**Lecteur final visé :** dirigeant, fondateur de SaaS, responsable produit ou responsable administratif qui doit choisir une architecture compréhensible et exploitable

**Statut :** recherche et modèles vérifiés ; aucune modification de la page publique n’est incluse dans ce document

> Tous les noms d’entreprise, volumes, prix, durées et taux des cas « Planor » sont fictifs. Les calculs sont reproductibles, mais ils ne constituent ni un devis, ni une moyenne de marché, ni un conseil juridique, fiscal ou comptable. Les règles applicables dépendent notamment du pays d’établissement, de la nature du service, du statut du client, du contrat et du référentiel comptable. Les points sensibles doivent être validés par l’expert compétent avant mise en production.

---

## 1. Verdict de recherche

Le guide actuel a une bonne intuition : une facturation SaaS fiable n’est pas un simple bouton de paiement. Il reste cependant trop proche d’une liste de règles produit. Il ne permet pas encore à un dirigeant de répondre complètement à ces questions :

1. **Que se passe-t-il exactement entre un devis accepté et l’argent rapproché en comptabilité ?**
2. **Quelles responsabilités acheter à un prestataire, lesquelles garder dans le SaaS et lesquelles ne jamais reconstruire ?**
3. **Combien coûtent réellement une gestion manuelle, un moteur de facturation, une couche métier spécifique et un moteur entièrement développé sur mesure ?**
4. **Que faut-il faire quand la facture, le paiement, l’abonnement et le droit d’accès ne racontent pas la même histoire ?**
5. **Comment distinguer MRR, ARR, facturation, encaissement et reconnaissance du chiffre d’affaires ?**
6. **Quelles données faut-il prévoir dès maintenant pour la France et pour les ventes internationales ?**

La réponse de référence doit défendre une position professionnelle nette :

> **Pour la majorité des SaaS B2B français, le choix par défaut le plus sûr est un moteur de facturation éprouvé, relié à une petite couche métier interne qui possède le contrat commercial et les droits d’accès. Le prestataire gère les rails de paiement et les mécanismes génériques de facturation ; le SaaS garde la règle qui dit ce que le client a acheté et ce qu’il peut utiliser. La comptabilité reste un système distinct.**

Cette position a quatre corollaires :

- **ne pas reconstruire les rails de paiement** ni stocker soi-même les données brutes de carte ;
- **ne pas utiliser le seul statut `active` du prestataire comme autorisation métier**, car certains moyens de paiement sont asynchrones et certains statuts ne prouvent pas que toutes les factures sont réglées ;
- **ne pas confondre une facture avec un encaissement**, ni le MRR avec un chiffre d’affaires comptable ;
- **ne pas attendre 2027 pour modéliser la facture électronique française**, car toute entreprise concernée doit pouvoir recevoir dès le 1er septembre 2026 et les données structurées doivent exister avant le choix de la plateforme.

Le guide ne doit pas devenir un traité fiscal. Il doit donner au dirigeant :

- une carte complète du cycle ;
- un comparatif économique reproductible ;
- des règles de décision ;
- un cas suivi pendant douze mois ;
- une liste de tests et de preuves ;
- les signaux qui imposent un expert-comptable, un fiscaliste ou un juriste.

---

## 2. Décision du lecteur et intention de recherche

### 2.1 Situation réelle du lecteur

Le lecteur ne cherche généralement pas « la meilleure API de billing ». Il se trouve dans l’une de ces situations :

- les premières factures sont encore créées à la main et les exceptions commencent à s’accumuler ;
- le SaaS sait encaisser, mais les accès restent ouverts après un impayé ou sont coupés trop tôt ;
- les commerciaux ont négocié des prix, des dates ou des quantités que le produit ne sait pas représenter ;
- les abonnements annuels, les virements et les paiements par carte ne se rapprochent plus proprement ;
- personne ne sait expliquer pourquoi le MRR, les factures du mois et les encaissements sont différents ;
- une expansion internationale révèle que « pays du client » ne suffit pas à déterminer la taxe ou le document à émettre ;
- la réforme française de la facturation électronique approche, mais le logiciel ne possède pas encore toutes les données nécessaires.

### 2.2 Requêtes et formulations à couvrir naturellement

**Intention principale**

- facturation abonnements SaaS ;
- gérer la facturation d’un SaaS ;
- automatiser la facturation récurrente ;
- système de facturation SaaS ;
- logiciel de billing ou développement sur mesure.

**Questions de décision**

- Stripe Billing ou facturation sur mesure ;
- à partir de combien de clients automatiser la facturation ;
- comment gérer un changement d’offre en cours de mois ;
- comment gérer les impayés d’un SaaS ;
- facture, paiement et abonnement : quelle différence ;
- comment rapprocher les paiements d’un SaaS ;
- MRR et chiffre d’affaires : quelle différence ;
- facturation électronique SaaS 2026 2027 ;
- comment facturer un SaaS à l’étranger ;
- merchant of record ou prestataire de paiement.

**Vocabulaire à expliquer, pas à exhiber**

- devis, bon de commande, contrat, abonnement, échéancier ;
- facture, avoir, remboursement, litige, rétrofacturation ;
- paiement synchrone, paiement asynchrone, virement, prélèvement ;
- prorata, quantité, usage, palier, remise, période ;
- relance d’impayé, recouvrement, délai de grâce ;
- MRR, ARR, expansion, contraction, churn ;
- rapprochement, créance client, grand livre ;
- facture structurée, UBL, CII, Factur-X, plateforme agréée, e-reporting.

### 2.3 Promesse éditoriale

Après lecture, un dirigeant doit pouvoir :

1. dessiner son cycle réel sur une page ;
2. choisir entre manuel, moteur hébergé, hybride, merchant of record et spécifique ;
3. chiffrer un coût sur 24 mois avec ses propres hypothèses ;
4. écrire les règles de modification, d’impayé et d’accès ;
5. demander à son équipe les preuves qui ferment chaque mois ;
6. identifier les points qui requièrent une validation fiscale ou comptable.

---

## 3. Ce que le guide actuel couvre et ce qu’il doit encore gagner

| Dimension | Déjà présente | Manque décisif | Gain attendu |
|---|---|---|---|
| Pédagogie | Exemples simples, vocabulaire relativement accessible | Un cas continu sur douze mois et une vue « une vente de bout en bout » | Le lecteur comprend les divergences, pas seulement les composants |
| Profondeur métier | Offres, prorata, statuts et droits | Devis, commande, contrat, usage, avoir, remboursement, litige, rapprochement | Couverture du cycle réel |
| Comparaison | Quelques options d’architecture | TCO paramétré, sensibilité, merchant of record, coûts de sortie | Décision économique défendable |
| Opinion | Prudence sur le développement spécifique | Doctrine conditionnelle plus nette et contre-cas explicites | Autorité sans dogmatisme |
| Mesure | Quelques indicateurs | Roll-forward MRR, dunning par cohorte, pont facture-cash, anomalies d’accès | Pilotage mensuel |
| Conformité | Mentions de vigilance | Calendrier français à jour, formats structurés, plateforme agréée, limites étrangères | Préparation exploitable sans pseudo-conseil |
| Technique | Webhooks et statuts | Doublons, ordre non garanti, reprise, idempotence, preuve de traitement | Fiabilité opérationnelle |
| Conversion | Appel à l’accompagnement | Diagnostic concret et ressource réellement utilisable | Conversion par la preuve |
| Différenciation SEO | Sujet bien ciblé | Synthèse internationale, modèles chiffrés et kit de contrôle | Gain d’information supérieur |

La longueur seule ne corrigera pas ces manques. Chaque nouvelle section doit produire au moins l’un de ces effets :

- rendre une décision possible ;
- rendre un calcul reproductible ;
- prévenir une erreur coûteuse ;
- donner une preuve que le dirigeant peut demander ;
- poser une limite honnête.

---

## 4. Benchmark de contenu : ce que chaque famille de sources apporte et oublie

### 4.1 Sources publiques françaises

Les sources françaises sont les meilleures pour :

- le calendrier de la réforme ;
- le périmètre e-invoicing/e-reporting ;
- les plateformes agréées ;
- les formats et les mentions ;
- la conservation et la valeur documentaire.

Elles expliquent moins bien :

- le cycle produit d’un abonnement SaaS ;
- la relation entre facture, paiement et droit d’accès ;
- les arbitrages build/buy ;
- les coûts d’exploitation ;
- le MRR et le churn.

### 4.2 Documentation des moteurs de facturation

Les documentations Stripe, Chargebee ou Recurly sont particulièrement utiles pour :

- les états d’un abonnement et d’une facture ;
- les proratas ;
- la facturation à l’usage ;
- les relances ;
- les événements asynchrones ;
- les devis et amendements.

Leur limite structurelle est commerciale : chaque documentation décrit son propre modèle, ses propres états et sa propre tarification. Une capacité du produit ne prouve ni sa pertinence pour le lecteur, ni sa conformité dans tous les pays.

### 4.3 Contenus quote-to-cash et CPQ

Les éditeurs américains de CPQ mettent correctement en évidence la continuité entre :

> devis → acceptation → contrat/commande → abonnement → facture → paiement → renouvellement.

Chargebee montre par exemple qu’un devis peut concerner une nouvelle vente, un amendement, un renouvellement ou une charge ponctuelle, puis être converti en abonnement après acceptation ([documentation Chargebee CPQ](https://www.chargebee.com/docs/cpq/generate-quote), [conversion en abonnement](https://www.chargebee.com/docs/cpq/convert-a-quote-to-subscription)).

Leur faiblesse est le vocabulaire d’entreprise (« CPQ », « RevOps », « Q2C ») et une faible pédagogie pour une PME. Le guide Hagnéré Code doit reprendre le mécanisme, pas le jargon.

### 4.4 Merchant of record

Les offres de merchant of record regroupent paiement, facturation, taxes, fraude et parfois support. Paddle affiche, au 24 juillet 2026, une offre à **5 % + 0,50 $ par transaction Checkout**, avec un périmètre annoncé qui inclut notamment paiement, billing et conformité fiscale ([tarifs Paddle](https://www.paddle.com/pricing)).

Ce prix ne peut pas être comparé directement aux **0,7 % de volume Billing** affichés par Stripe France : Stripe Billing n’achète pas le même périmètre et les frais de traitement des paiements restent distincts ([tarifs Stripe France](https://stripe.com/fr/pricing)). Comparer uniquement les pourcentages serait trompeur.

### 4.5 Sources de métriques SaaS

Les outils de billing et d’analytics proposent des définitions utiles du MRR, mais elles ne sont pas identiques. Stripe permet par exemple de configurer l’inclusion de certaines remises et le moment où un abonné devient « actif » ([Stripe Billing Analytics](https://docs.stripe.com/billing/subscriptions/analytics)). Cette variabilité doit devenir une leçon du guide :

> Un indicateur n’est comparable dans le temps que si sa définition est écrite, versionnée et appliquée de façon stable.

### 4.6 Gain d’information visé

| Besoin du lecteur | Sources officielles | Documentation produit | Contenus concurrents génériques | Réponse cible Hagnéré Code |
|---|---:|---:|---:|---:|
| Comprendre le cycle complet | Partiel | Morcelé par objet | Souvent simplifié | Une vente suivie de bout en bout |
| Choisir une architecture | Non | Orienté produit | Listes superficielles | Comparatif conditionnel et TCO |
| Chiffrer | Non | Prix du fournisseur | Rarement reproductible | Formules, hypothèses et sensibilités |
| Gérer les échecs | Partiel | Très détaillé mais spécifique | Quelques conseils | Matrice incident → décision → preuve |
| Préparer la France 2026/2027 | Excellent | Variable | Souvent daté | Synthèse datée et limites explicites |
| Vendre à l’étranger | Juridiction par juridiction | Automatisation proposée | Survol | Données à collecter et escalades |
| Piloter MRR, cash et factures | Séparé | Définitions propres | Souvent confondu | Trois ponts de rapprochement |
| Tester avant production | Non | Cas par produit | Rare | Matrice de 18 tests critiques |

La différenciation n’est donc pas « plus de texte ». Elle est la réunion, dans un langage de dirigeant, de domaines habituellement séparés.

### 4.7 Affirmations volontairement écartées

La recherche a rencontré plusieurs chiffres séduisants qui ne doivent pas entrer dans le guide comme des faits généraux :

- taux de récupération ou hausse de revenus annoncés par un fournisseur sans cohorte comparable ;
- ROI d’une intégration calculé dans une étude commandée par l’éditeur ;
- « bon » taux universel d’échec de paiement ou de churn ;
- nombre figé de plateformes françaises agréées ;
- profil Factur-X repris d’une ancienne version des spécifications ;
- règle comptable selon laquelle tout abonnement annuel serait reconnu linéairement ;
- seuil de clients universel pour automatiser ;
- promesse qu’un merchant of record élimine toute obligation du SaaS ;
- promesse qu’une page de paiement hébergée supprime toute responsabilité PCI.

Le guide peut citer un prix public daté ou construire un scénario fictif. Il ne doit pas transformer une revendication commerciale en benchmark de marché.

---

## 5. La carte complète : une vente n’est pas un paiement

### 5.1 Les douze étapes à représenter

1. **Identifier le client** : personne ou entreprise, pays, établissement, identifiant fiscal, entité facturée.
2. **Émettre une offre** : produits, quantités, prix, remise, durée, reconduction, date d’effet, délai de paiement.
3. **Conserver l’acceptation** : version exacte du devis, signature ou mécanisme d’acceptation, date et auteur.
4. **Créer la commande ou le contrat exploitable** : ce qui a été promis devient une donnée, pas une note libre.
5. **Créer l’abonnement ou l’échéancier** : fréquence, début, fin, renouvellement, essai, quantité, usage.
6. **Ouvrir les droits** selon une règle explicite : immédiatement, après paiement, après validation manuelle ou avec délai de grâce.
7. **Mesurer l’usage**, si le prix en dépend, avec une identité d’événement et une règle d’agrégation.
8. **Produire la facture** : lignes, période, taxe, mentions, avoirs antérieurs et identifiants de rapprochement.
9. **Transmettre le document et les données** par le canal requis.
10. **Encaisser** par carte, prélèvement, virement ou autre moyen, avec des délais et des échecs différents.
11. **Traiter l’après-paiement** : relance, nouveau moyen de paiement, avoir, remboursement, litige, annulation, suspension.
12. **Rapprocher et clôturer** : contrat, abonnement, facture, paiement, banque, droits et comptabilité doivent être explicables.

### 5.2 Pourquoi cette séparation est factuelle

La documentation Stripe distingue elle-même les objets Customer, Subscription, Invoice et PaymentIntent. Elle précise qu’avec un moyen de paiement asynchrone, un abonnement peut devenir `active` avant le résultat définitif du paiement ; un échec ultérieur peut invalider la facture alors que l’abonnement reste actif ([cycle de vie des abonnements Stripe](https://docs.stripe.com/billing/subscriptions/overview)).

Il est donc faux de coder la règle universelle :

```text
subscription.status === "active"  =>  accès autorisé
```

La règle correcte dépend du contrat :

```text
accès autorisé =
  droit métier actif
  ET date d'effet atteinte
  ET situation de paiement compatible avec la politique du contrat
  ET absence de suspension explicite
```

Le paiement est une entrée de décision, pas la décision entière.

### 5.3 Les sept sources de vérité

| Question | Source de vérité recommandée | Ce qu’elle ne doit pas décider seule |
|---|---|---|
| Qu’a promis le commercial ? | Devis/contrat versionné | L’état bancaire |
| Quel cycle doit être facturé ? | Domaine d’abonnement ou moteur de billing | Les droits fonctionnels fins |
| Quel document a été émis ? | Système de facturation et, en France, flux de plateforme | Le chiffre d’affaires reconnu |
| Quel paiement a réussi ? | Prestataire de paiement et rapprochement bancaire | La portée de l’accès |
| Que peut utiliser le client ? | Couche d’autorisations interne | La conformité fiscale |
| Quelle écriture comptable est correcte ? | Logiciel et processus comptables | Le MRR produit |
| Quel indicateur dirigeant afficher ? | Entrepôt de données avec définition versionnée | Le grand livre |

### 5.4 Identifiants minimaux à relier

Une ligne de rapprochement exploitable doit pouvoir relier :

- `customer_id` interne ;
- entité juridique cliente et identifiant fiscal ;
- `quote_id` et version ;
- `contract_id` ou `order_id` ;
- `subscription_id` ;
- période de service ;
- `invoice_id` et numéro légal ;
- `payment_id` ou référence de virement ;
- `credit_note_id`, `refund_id` ou `dispute_id` si applicable ;
- `entitlement_change_id` ;
- identifiant du flux de facturation électronique ;
- écriture ou lot d’export comptable.

Sans ces liens, l’automatisation accélère la création d’écarts qu’une équipe devra ensuite expliquer à la main.

---

## 6. Comparatif des architectures

### 6.1 Option A — Gestion manuelle explicite

**Ce que cela signifie réellement**

- règles commerciales écrites sur une page ;
- factures et contrôles opérés manuellement dans un outil conforme ;
- paiement via un prestataire, jamais via un stockage artisanal des cartes ;
- registre des abonnements et échéances tenu avec un responsable nommé ;
- rapprochement mensuel obligatoire.

**Bon cas**

- très peu de clients ;
- une seule cadence ;
- prix fixe ;
- pas de changement en cours de période ;
- faible fréquence d’exception ;
- chaque facture peut être revue humainement.

**Mauvais cas**

- usage, quantités ou proratas ;
- plusieurs entités ;
- ventes internationales ;
- remises négociées ;
- volume d’impayés ;
- accès applicatifs liés à l’état de paiement.

**Opinion**

La gestion manuelle n’est pas honteuse au démarrage. Le danger n’est pas le manuel ; c’est le manuel implicite, sans règles, sans propriétaire et sans contrôle de fin de mois.

### 6.2 Option B — Moteur de facturation hébergé

**Achète généralement**

- catalogue de produits et de prix ;
- abonnements et échéanciers ;
- factures ;
- proratas ;
- relances ;
- portail client ;
- événements ;
- rapports et exports.

**Ne règle pas automatiquement**

- la promesse commerciale ;
- les exceptions négociées ;
- le modèle exact de droits ;
- les données fiscales absentes ;
- le rapprochement avec un système tiers mal conçu ;
- la reconnaissance comptable ;
- la stratégie de sortie.

**Bon cas**

- offre représentable dans le catalogue du moteur ;
- priorité à la rapidité et à la fiabilité générique ;
- équipe technique limitée ;
- besoin d’API sans reconstruire les cas standards.

### 6.3 Option C — Moteur éprouvé + couche métier spécifique

**Répartition recommandée**

- moteur : prix récurrent, facture, paiement, relance, documents standards ;
- couche interne : contrat, version de l’offre, date d’effet, règles de droits, exceptions approuvées, correspondance avec le produit ;
- plateforme agréée ou connecteur : flux réglementaires français ;
- comptabilité : écritures, clôture et obligations comptables.

**Bon cas**

- B2B avec contrats négociés ;
- quantités ou droits spécifiques ;
- offres en évolution ;
- plusieurs moyens de paiement ;
- besoin de garder un modèle métier portable.

**Risque**

Une « fine couche » peut devenir un deuxième moteur de billing si son périmètre n’est pas écrit. Elle ne doit ni recalculer silencieusement toutes les taxes, ni dupliquer toutes les factures, ni inventer ses propres états concurrents.

### 6.4 Option D — Merchant of record

**Principe**

Le merchant of record devient le vendeur enregistré auprès de l’acheteur pour le périmètre contractuel prévu. Il peut prendre en charge davantage de responsabilités fiscales, de paiement et de litige qu’un simple prestataire de paiement.

**Bon cas**

- SaaS B2C vendu rapidement dans de nombreux pays ;
- petite équipe ;
- volonté d’acheter un périmètre large de conformité et d’opérations ;
- économie compatible avec un coût par transaction plus élevé.

**Contreparties**

- relation juridique et expérience de facturation différentes ;
- dépendance et migration potentiellement plus fortes ;
- marge diminuée ;
- contrôle plus limité ;
- périmètre exact à vérifier dans le contrat, pays par pays.

**Opinion**

Un merchant of record n’est ni « Stripe en plus simple », ni une assurance universelle de conformité. C’est un autre modèle de vente. Il doit être comparé sur le périmètre assumé, le contrat et la sortie, pas sur un pourcentage isolé.

### 6.5 Option E — Moteur de billing entièrement spécifique

**À réserver à**

- contrats ou tarifications impossibles à représenter raisonnablement ;
- très fort volume rendant les frais variables significatifs ;
- orchestration multi-prestataires ;
- contraintes d’entités, de marchés ou de produit réellement différenciantes ;
- équipe finance/produit/technique capable de posséder le système dans la durée.

**Même dans ce cas**

- les rails de paiement restent externalisés ;
- la conformité carte reste gérée avec un prestataire spécialisé ;
- la facture électronique passe par le dispositif requis ;
- le système comptable reste distinct.

**Opinion**

Construire son moteur de billing pour « économiser un abonnement » est généralement une mauvaise raison. Le spécifique se justifie lorsque la facturation est un avantage produit ou une contrainte opérationnelle majeure, pas lorsqu’elle est seulement perçue comme du code.

### 6.6 Tableau de décision

| Signal dominant | Manuel explicite | Moteur hébergé | Hybride | Merchant of record | Spécifique |
|---|---:|---:|---:|---:|---:|
| Moins de règles qu’une page | Excellent | Possible | Surdimensionné | Surdimensionné | À éviter |
| Prix fixe mensuel/annuel | Possible | Excellent | Bon | Bon | À éviter |
| Contrats B2B négociés | Fragile | Bon si représentable | Excellent | Variable | Possible |
| Facturation à l’usage | Mauvais | Bon à excellent | Excellent | Variable | Possible |
| B2C mondial, petite équipe | Fragile | Complexité fiscale à gérer | Complexe | Excellent si contrat adapté | Mauvais défaut |
| Droits métier fins | Fragile | Limité | Excellent | Limité | Excellent |
| Très fort volume et panier élevé | Coûteux en opérations | Frais variables à négocier | Souvent bon | Coûteux | À étudier |
| Besoin de changer de prestataire | Manuel mais peu scalable | Export à préparer | Modèle portable possible | Sortie à auditer | Contrôle maximal, coût maximal |

---

## 7. Modèle TCO sur 24 mois

### 7.1 But du modèle

Le modèle ne cherche pas à prédire un « vrai prix de marché ». Il montre comment une décision change quand on modifie :

- le nombre moyen de clients actifs ;
- le panier récurrent moyen ;
- le coût horaire chargé ;
- les frais du moteur ;
- le temps d’exploitation ;
- l’investissement initial ;
- la maintenance.

Les quatre options sont comparées à périmètre technique aussi proche que possible. Le merchant of record reste hors du tableau TCO, car son prix achète un rôle de vendeur et un ensemble de services plus large ; le comparer honnêtement exigerait aussi le nombre de transactions, les pays servis, les moyens de paiement et le coût interne de la conformité. Dans les quatre scénarios, les frais de traitement des paiements, la fiscalité, la plateforme agréée, la comptabilité, les litiges, la migration et la sortie sont exclus. Ils devront être ajoutés avec les données du projet.

### 7.2 Variables

| Variable | Définition | Valeur du scénario central |
|---|---|---:|
| `n` | Nombre moyen de clients actifs sur 24 mois | 10, 100 ou 500 |
| `p` | Facturation récurrente moyenne par client et par mois | 100 € HT |
| `t` | Coût horaire chargé de l’opérateur | 45 € |
| `f` | Frais variables du moteur de billing | 0,7 % |
| Horizon | Durée comparée | 24 mois |

Le taux de **0,7 %** correspond au prix public « paiement à l’utilisation » de Stripe Billing affiché en France le 24 juillet 2026. Il sert uniquement d’exemple vérifiable et exclut les frais de paiement ([source tarifaire](https://stripe.com/fr/pricing)). Un autre produit, un contrat négocié ou un forfait fixe donnera un autre résultat.

### 7.3 Hypothèses éditoriales

**Manuel explicite**

- 2 h de contrôle fixe par mois ;
- 0,1 h par client et par mois.

```text
M = 24 × t × (2 + 0,1n)
```

**Moteur hébergé**

- 2 800 € d’intégration ;
- 150 €/mois de coûts fixes d’outillage et d’exploitation ;
- 1 h fixe par mois ;
- 1 h par tranche de 30 clients et par mois ;
- frais variables `f` sur le volume récurrent.

```text
H = 2 800 + 24 × 150 + 24 × t × (1 + n/30) + 24 × n × p × f
```

**Moteur hébergé + couche métier**

- 14 000 € de conception et d’intégration ;
- 200 €/mois d’outillage ;
- 500 €/mois de maintenance de la couche ;
- 0,5 h fixe par mois ;
- 1 h par tranche de 60 clients et par mois ;
- mêmes frais variables de billing.

```text
Y = 14 000 + 24 × (200 + 500) + 24 × t × (0,5 + n/60) + 24 × n × p × f
```

**Moteur spécifique, rails de paiement externalisés**

- 60 000 € de construction ;
- 1 500 €/mois de maintenance et d’exploitation ;
- 1 h fixe par mois ;
- 1 h par tranche de 100 clients et par mois ;
- frais du moteur de billing supprimés dans le modèle, mais frais de paiement toujours exclus.

```text
S = 60 000 + 24 × 1 500 + 24 × t × (1 + n/100)
```

### 7.4 Résultats du scénario central

| Clients moyens | Manuel explicite | Moteur hébergé | Hybride | Spécifique |
|---:|---:|---:|---:|---:|
| 10 | 3 240 € | 8 008 € | 31 688 € | 97 188 € |
| 100 | 12 960 € | 12 760 € | 34 820 € | 98 160 € |
| 500 | 56 160 € | 33 880 € | 48 740 € | 102 480 € |

**Contrôle arithmétique à 100 clients**

```text
Manuel
= (2 + 100 × 0,1) × 45 × 24
= 12 960 €

Moteur hébergé
= 2 800 + 150 × 24
  + (1 + 100/30) × 45 × 24
  + 0,007 × 100 × 100 × 24
= 12 760 €
```

### 7.5 Seuil central et sensibilité

Dans le scénario central, l’égalité manuel/moteur est :

```text
2 160 + 108n = 7 480 + 52,8n
n = 5 320 / 55,2
n = 96,38
```

Le moteur devient moins coûteux à partir d’environ **97 clients moyens** dans ce scénario précis.

| Hypothèse modifiée | Seuil manuel / moteur |
|---|---:|
| Temps valorisé 30 €/h, panier 100 €, frais 0,7 % | 183 clients |
| Temps valorisé 45 €/h, panier 100 €, frais 0,7 % | 97 clients |
| Temps valorisé 70 €/h, panier 100 €, frais 0,7 % | 50 clients |
| Temps valorisé 45 €/h, panier 300 €, frais 0,7 % | 247 clients |
| Temps valorisé 45 €/h, panier 100 €, sans frais variables de billing | 74 clients |

À 45 €/h et 0,7 %, si le panier moyen dépasse environ **428,57 € par client et par mois**, le coût variable direct du moteur croît plus vite que le temps manuel supposé dans ce modèle. Cela ne signifie pas que le manuel devient opérationnellement préférable : le modèle ne valorise ni les erreurs, ni les retards, ni le contrôle interne, ni l’expérience client. Cela prouve seulement qu’un seuil fondé sur le nombre de clients est intellectuellement insuffisant.

### 7.6 Seuils entre architectures

Avec le panier à 100 € et les autres hypothèses centrales :

- le moteur hébergé et l’hybride se rejoignent vers **1 326 clients moyens** ;
- l’hybride et le spécifique se rejoignent vers **2 740 clients moyens**.

À panier plus élevé, le coût variable du moteur peut rapprocher le seuil du spécifique. Par exemple, à 1 000 € par client et par mois, le second seuil mathématique tombe autour de 376 clients. Mais ce calcul ignore toujours :

- les frais de paiement ;
- la fiscalité automatisée ;
- les plateformes de facturation électronique ;
- les incidents ;
- les migrations ;
- les remises négociées ;
- la multi-devise ;
- les audits ;
- le coût d’une erreur ;
- le risque de départ d’un développeur clé.

### 7.7 Conclusion économique honnête

Il n’existe pas de nombre universel du type « automatisez à 50 clients ». Les déclencheurs les plus solides sont :

1. les règles ne tiennent plus sur une page ;
2. les exceptions prennent plus de deux heures par mois ;
3. l’accès dépend du paiement ;
4. une erreur peut toucher plusieurs clients à la fois ;
5. la facture nécessite des données que plusieurs systèmes se renvoient ;
6. personne ne peut fermer le mois sans retraitement.

---

## 8. Cas fictif suivi pendant douze mois : Planor

### 8.1 Offre et conventions

Planor vend un SaaS B2B de planification.

- offre de base : 100 € HT/mois ;
- offre annuelle : 1 200 € HT facturés d’avance, soit 100 € de MRR normalisé ;
- certaines options d’usage et prestations ponctuelles ne sont pas du MRR ;
- les mouvements sont supposés effectifs au début du mois pour rendre le calcul lisible ;
- les montants de taxe sont omis afin de ne pas transformer l’exemple en recommandation fiscale.

### 8.2 Roll-forward du MRR

```text
MRR fin = MRR début
        + nouveau MRR
        + expansion
        - contraction
        - churn
```

| Mois | MRR début | Nouveau | Expansion | Contraction | Churn | MRR fin | Événement lisible |
|---|---:|---:|---:|---:|---:|---:|---|
| Janvier | 0 € | 2 200 € | 0 € | 0 € | 0 € | 2 200 € | 20 mensuels + 2 annuels |
| Février | 2 200 € | 300 € | 0 € | 0 € | 0 € | 2 500 € | 3 nouveaux mensuels |
| Mars | 2 500 € | 200 € | 100 € | 0 € | 0 € | 2 800 € | 2 nouveaux + 1 montée d’offre |
| Avril | 2 800 € | 200 € | 0 € | 0 € | 100 € | 2 900 € | 2 nouveaux, 1 résiliation |
| Mai | 2 900 € | 100 € | 0 € | 100 € | 0 € | 2 900 € | 1 nouveau, 1 baisse d’offre |
| Juin | 2 900 € | 300 € | 0 € | 0 € | 0 € | 3 200 € | 2 mensuels + 1 annuel |
| Juillet | 3 200 € | 100 € | 100 € | 0 € | 100 € | 3 300 € | nouveau, montée, résiliation |
| Août | 3 300 € | 200 € | 0 € | 0 € | 0 € | 3 500 € | 2 nouveaux mensuels |
| Septembre | 3 500 € | 0 € | 0 € | 100 € | 200 € | 3 200 € | baisse + 2 résiliations |
| Octobre | 3 200 € | 300 € | 100 € | 0 € | 0 € | 3 600 € | 3 nouveaux + 1 montée |
| Novembre | 3 600 € | 100 € | 0 € | 0 € | 100 € | 3 600 € | acquisition compensée par churn |
| Décembre | 3 600 € | 200 € | 100 € | 0 € | 100 € | 3 800 € | 2 nouveaux, montée et résiliation |
| **Total mouvements** |  | **4 100 €** | **300 €** | **200 €** | **400 €** | **3 800 €** |  |

Contrôle :

```text
0 + 4 100 + 300 - 200 - 400 = 3 800 € de MRR fin décembre
```

L’ARR de rythme de sortie, selon la convention simple `MRR × 12`, est :

```text
3 800 × 12 = 45 600 €
```

Ce montant n’est ni le total des factures de l’année, ni les encaissements, ni le chiffre d’affaires comptable de l’année.

### 8.3 Ce que l’exemple doit montrer au lecteur

En janvier, les deux contrats annuels apportent ensemble **200 € de MRR**, mais produisent **2 400 € de factures**. En février, ils continuent d’apporter 200 € de MRR sans nouvelle facture annuelle. Cette seule différence suffit à rendre incohérent un tableau qui assimile MRR et facturation.

En mai, un paiement de 300 € échoue. Planor conserve temporairement le MRR selon sa politique d’indicateurs et place le client dans un délai de grâce. Deux cents euros sont recouvrés en juin ; le solde de 100 € aboutit à une résiliation en juillet. Une autre entreprise pourrait sortir ce client du MRR dès l’état `unpaid`. Les deux séries ne sont comparables que si la convention est écrite.

---

## 9. Pont entre factures, encaissements et créances

### 9.1 Formule de contrôle

Dans l’exemple simplifié, hors taxes et hors écritures comptables :

```text
Créances fin
= créances début
  + factures brutes
  - avoirs imputés
  - encaissements affectés
```

Un remboursement après paiement est présenté séparément : il réduit la trésorerie, mais ne recrée pas automatiquement la même créance client.

### 9.2 Journal fictif Planor

| Mois | Factures brutes | Avoirs | Encaissements affectés | Créances fin | Remboursements | Cash net du mois |
|---|---:|---:|---:|---:|---:|---:|
| Janvier | 4 400 € | 0 € | 3 200 € | 1 200 € | 0 € | 3 200 € |
| Février | 2 300 € | 0 € | 3 500 € | 0 € | 0 € | 3 500 € |
| Mars | 2 600 € | 0 € | 2 500 € | 100 € | 0 € | 2 500 € |
| Avril | 2 800 € | 100 € | 2 800 € | 0 € | 0 € | 2 800 € |
| Mai | 2 900 € | 0 € | 2 600 € | 300 € | 0 € | 2 600 € |
| Juin | 4 100 € | 0 € | 4 300 € | 100 € | 0 € | 4 300 € |
| Juillet | 3 200 € | 50 € | 3 250 € | 0 € | 0 € | 3 250 € |
| Août | 3 500 € | 0 € | 3 500 € | 0 € | 100 € | 3 400 € |
| Septembre | 3 300 € | 100 € | 3 000 € | 200 € | 0 € | 3 000 € |
| Octobre | 3 500 € | 0 € | 3 700 € | 0 € | 0 € | 3 700 € |
| Novembre | 3 600 € | 0 € | 3 500 € | 100 € | 0 € | 3 500 € |
| Décembre | 4 800 € | 0 € | 4 900 € | 0 € | 0 € | 4 900 € |
| **Total** | **41 000 €** | **250 €** | **40 750 €** | **0 €** | **100 €** | **40 650 €** |

Contrôles :

```text
41 000 - 250 - 40 750 = 0 € de créances de clôture
40 750 - 100 = 40 650 € de cash net après remboursement
```

Les factures de décembre incluent 1 300 € d’usage ou de prestations ponctuelles, non récurrentes. C’est pourquoi elles ne font pas progresser le MRR du même montant.

### 9.3 Pourquoi un total bancaire ne suffit pas

Un encaissement peut :

- régler plusieurs factures ;
- régler une facture partiellement ;
- arriver sans référence exploitable ;
- être net de frais ;
- être remboursé plus tard ;
- faire l’objet d’un litige ;
- être reçu dans une autre devise ;
- arriver après la période de service ;
- être compté par le prestataire avant son arrivée en banque.

Le rapprochement doit donc être fait par identifiants et mouvements, pas seulement par égalité entre deux totaux.

### 9.4 Preuves de clôture à exiger

- total des factures finalisées ;
- total des avoirs ;
- factures ouvertes, annulées et irrécouvrables ;
- paiements réussis non affectés ;
- factures payées sans paiement identifiable ;
- remboursements et litiges ;
- écarts de change et frais ;
- droits ouverts sans contrat actif ;
- contrats actifs sans prochaine échéance ;
- événements reçus mais non traités ;
- cohérence avec l’export comptable.

---

## 10. Prorata : un calcul simple, une décision complexe

### 10.1 Exemple de base

Un client passe de 100 € à 200 € au milieu d’une période de 30 jours, avec une convention linéaire :

```text
Crédit de l’ancienne offre = -100 × 15/30 = -50 €
Débit de la nouvelle offre =  200 × 15/30 = 100 €
Solde du changement        =  50 €
```

Le calcul de 50 € est juste **dans cette convention**.

### 10.2 Questions à trancher avant de coder

- Le changement est-il immédiat ou au renouvellement ?
- Utilise-t-on les jours calendaires, les secondes ou des périodes commerciales ?
- Le client a-t-il déjà payé la période ?
- Que se passe-t-il si la facture précédente est impayée ?
- La remise s’applique-t-elle au crédit, au débit ou aux deux ?
- Le changement de quantité est-il traité comme un changement d’offre ?
- Un downgrade donne-t-il un avoir, un solde client ou aucun remboursement ?
- L’usage déjà consommé peut-il être crédité ?
- Le cycle repart-il à la date du changement ?
- Les taxes sont-elles recalculées avec la même localisation ?

Stripe documente trois comportements de prorata et avertit notamment qu’un crédit peut être calculé sur une période antérieure non payée. Sa documentation indique aussi que la facturation à l’usage n’est pas soumise au même mécanisme de prorata ([prorations Stripe](https://docs.stripe.com/billing/subscriptions/prorations)).

### 10.3 Contre-cas

Un contrat annuel à 1 200 € prévoit que les baisses d’offre ne prennent effet qu’au renouvellement. Un client demande une baisse exactement à mi-parcours. Le calcul mathématique d’un crédit de 300 € n’est pas la décision contractuelle : si le contrat et l’information préalable prévoient une prise d’effet au renouvellement, le système doit planifier le changement, pas créer automatiquement l’avoir.

### 10.4 Position

Le guide doit déconseiller le prorata par défaut pour chaque changement. Le choix le plus lisible est souvent :

- montée d’offre immédiate avec prix affiché avant confirmation ;
- baisse d’offre au prochain renouvellement ;
- exception validée et traçable ;
- aperçu du document avant application.

Cette recommandation reste conditionnelle au contrat et au modèle commercial.

---

## 11. Relance d’impayé : mesurer une cohorte terminée

### 11.1 Scénario fictif

Planor a 20 000 € de paiements récurrents présentés sur un mois.

- volume échoué à la première tentative : 3 % ;
- volume initialement échoué : `20 000 × 3 % = 600 €`.

| Taux de récupération final | Récupéré | Non récupéré |
|---:|---:|---:|
| 30 % | 180 € | 420 € |
| 60 % | 360 € | 240 € |
| 80 % | 480 € | 120 € |

Si le même volume d’échec se répétait chaque mois :

- passer de 30 % à 60 % représenterait `180 × 12 = 2 160 €` de différence annuelle ;
- passer de 30 % à 80 % représenterait `300 × 12 = 3 600 €`.

Ce ne sont pas des promesses de performance. Ce sont des sensibilités arithmétiques.

### 11.2 Définitions à figer

```text
Taux d’échec initial
= volume échoué à la première tentative
  / volume récurrent présenté

Taux de récupération final
= volume finalement récupéré
  / volume initialement échoué
```

Stripe précise que les mois récents peuvent encore comporter des paiements « en récupération » tant que la fenêtre de tentative n’est pas close. Le taux récent peut donc sembler artificiellement mauvais ([Revenue Recovery Analytics](https://docs.stripe.com/billing/revenue-recovery/recovery-analytics)).

### 11.3 Politique d’impayé à écrire

| Situation | Action paiement | Action client | Action accès | Preuve |
|---|---|---|---|---|
| Échec temporaire | Retenter selon politique | Message clair, moyen de paiement modifiable | Délai de grâce | Tentative et message horodatés |
| Authentification requise | Demander l’action | Lien d’authentification | Ne pas promettre le paiement | État final du paiement |
| Refus définitif | Demander un nouveau moyen | Contact ciblé | Grâce ou suspension selon contrat | Motif et décision |
| Virement en attente | Attendre/réconcilier | Rappeler référence et échéance | Selon délai contractuel | Référence bancaire |
| Client stratégique | Relance humaine | Responsable nommé | Décision explicite | Note d’exception |
| Échec après moyen asynchrone | Reprendre l’état final | Expliquer sans double prélèvement | Réévaluer, pas couper aveuglément | Événement + resynchronisation |

### 11.4 Position

Un premier échec ne doit pas automatiquement supprimer les données ou couper tous les utilisateurs. Inversement, une politique de grâce sans fin transforme les impayés en crédit gratuit. Le dirigeant doit choisir :

- durée ;
- nombre de tentatives ;
- canaux ;
- personnes exemptées ;
- état final ;
- réactivation ;
- propriétaire de l’exception.

---

## 12. Événements, doublons et reprise

### 12.1 Ce que dit la documentation primaire

Stripe indique que :

- la livraison des événements peut être retentée ;
- leur ordre n’est pas garanti ;
- un même événement peut être reçu plusieurs fois ;
- le traitement complexe doit être asynchrone ;
- la signature doit être vérifiée ;
- une réponse `2xx` doit être renvoyée rapidement ([documentation Webhooks](https://docs.stripe.com/webhooks)).

Pour la facturation à l’usage, les événements peuvent être traités de façon asynchrone et doivent être rendus idempotents afin d’éviter un double comptage ([enregistrement de l’usage](https://docs.stripe.com/billing/subscriptions/usage-based/recording-usage-api)).

### 12.2 Conséquences de conception

Le gestionnaire d’événements doit :

1. vérifier l’origine ;
2. conserver l’identifiant reçu ;
3. répondre rapidement ;
4. placer le traitement dans une file ;
5. ignorer un doublon déjà appliqué ;
6. relire l’état source si l’ordre reçu est incohérent ;
7. rendre chaque changement métier idempotent ;
8. conserver le résultat et l’erreur ;
9. permettre une reprise manuelle contrôlée ;
10. alerter sur les événements définitivement non traités.

### 12.3 Mauvaise implémentation

```text
invoice.paid reçu
→ ouvrir les droits
→ envoyer trois emails
→ écrire en comptabilité
→ appeler le CRM
→ répondre 200 à la fin
```

Un timeout peut provoquer une nouvelle livraison et répéter plusieurs actions.

### 12.4 Implémentation robuste, en langage dirigeant

```text
événement reçu
→ origine vérifiée
→ événement enregistré une fois
→ accusé de réception rapide
→ traitement repris en arrière-plan
→ état final relu
→ action métier appliquée une fois
→ résultat contrôlable
```

Le guide n’a pas besoin de fournir du code complet. Il doit donner la preuve à demander : « Montrez-moi un doublon, un événement en retard et une reprise après panne dans l’environnement de test. »

---

## 13. MRR, ARR, churn, factures, cash et chiffre d’affaires

### 13.1 MRR

Le MRR est une mesure de pilotage qui normalise mensuellement la valeur récurrente des abonnements selon une convention écrite.

Une convention raisonnable doit préciser :

- abonnements inclus ;
- statut inclus (`active`, `past_due`, etc.) ;
- remises incluses ou non ;
- taxes exclues ;
- usage estimé ou exclu ;
- devises et taux de conversion ;
- date de prise d’effet ;
- traitement des pauses et impayés.

### 13.2 ARR

`ARR = MRR × 12` est un rythme de sortie utile lorsque :

- les revenus sont réellement récurrents ;
- les conventions sont stables ;
- la saisonnalité et l’usage ne rendent pas l’extrapolation trompeuse.

Ce n’est pas le chiffre d’affaires déjà acquis, ni la somme des contrats signés, ni un montant comptable automatiquement reconnu.

### 13.3 Churn clients et churn MRR

```text
Churn clients
= clients perdus pendant la période
  / clients actifs au début de la période

Churn MRR brut
= (MRR perdu par résiliation
   + MRR perdu par baisse d’offre)
  / MRR au début de la période
```

Une autre convention peut exclure la contraction du churn et la publier séparément. Ce qui compte est la stabilité de la définition.

### 13.4 Facturation

La facture formalise l’opération et décrit les biens ou services facturés selon les règles applicables. Elle peut rester à payer ou être réglée immédiatement. Une facture annuelle peut créer douze mois de MRR normalisé d’un coup, sans douze factures.

### 13.5 Encaissement

L’encaissement est le mouvement de paiement affecté à une ou plusieurs créances. Il peut précéder, suivre ou échouer après une facture, selon le moyen utilisé.

### 13.6 Reconnaissance du chiffre d’affaires

La reconnaissance comptable dépend du référentiel, du contrat et des obligations de prestation. IFRS 15, par exemple, repose sur cinq étapes et reconnaît le produit lorsque l’obligation de prestation est satisfaite, à un instant ou progressivement ([présentation officielle IFRS 15](https://www.ifrs.org/issued-standards/list-of-standards/ifrs-15-revenue-from-contracts-with-customers/)).

Le guide ne doit pas :

- imposer IFRS 15 à toutes les entreprises françaises ;
- proposer des écritures comptables génériques ;
- affirmer qu’une facture annuelle doit toujours être reconnue linéairement ;
- transformer le MRR en règle comptable.

Il peut montrer une séparation pédagogique :

| Événement fictif | Janvier | Février à décembre |
|---|---:|---:|
| Facture annuelle | 1 200 € | 0 € |
| Encaissement, s’il arrive en février | 0 € | 1 200 € en février |
| MRR de pilotage | 100 € | 100 €/mois |
| Montant affecté à la prestation dans une illustration linéaire | 100 € | 100 €/mois |

La dernière ligne n’est qu’une illustration de gestion. Le traitement comptable réel doit être validé selon le contrat et le référentiel applicable.

### 13.7 Tableau de bord dirigeant minimal

- MRR début, nouveaux, expansions, contractions, churn, MRR fin ;
- factures finalisées, avoirs, créances de fin ;
- cash collecté, remboursements et litiges ;
- volume échoué à la première tentative ;
- volume encore en récupération ;
- taux de récupération des cohortes closes ;
- paiements non affectés ;
- droits sans abonnement cohérent ;
- abonnements sans prochaine facture ;
- délai moyen de résolution des anomalies.

---

## 14. France : préparer la facturation électronique sans figer une règle périssable

### 14.1 Calendrier vérifié au 24 juillet 2026

Selon le ministère de l’Économie :

- **1er septembre 2026** : toutes les entreprises concernées doivent pouvoir recevoir des factures électroniques ;
- **1er septembre 2026** : grandes entreprises et ETI doivent émettre électroniquement ;
- **1er septembre 2027** : PME et micro-entreprises doivent émettre électroniquement.

La source officielle rappelle aussi que le e-reporting accompagne la réforme ([calendrier et présentation](https://www.economie.gouv.fr/tout-savoir-sur-la-facturation-electronique-pour-les-entreprises)).

### 14.2 Un PDF par email ne suffit pas

Une facture électronique au sens de la réforme doit comporter des données structurées et respecter les formats attendus. La DGFiP cite UBL, CII ou un format hybride combinant données structurées et image ; elle indique qu’un PDF ordinaire envoyé par email n’est pas conforme au nouveau dispositif ([présentation DGFiP](https://www.impots.gouv.fr/professionnel/je-decouvre-la-facturation-electronique)).

Factur-X est un format hybride : une représentation PDF lisible contient un fichier de données structurées. Le socle et les profils techniques doivent être vérifiés dans la version courante des spécifications et de la norme **XP Z12-012**, publiée en juin 2026 ([norme AFNOR](https://www.boutique.afnor.org/fr-fr/norme/xp-z12012/formats-et-profils-des-messages-factures-et-statuts-de-cycle-de-vie-constit/fa301169/601641), [spécifications DGFiP version 3.2](https://www.impots.gouv.fr/specifications-externes-b2b)).

### 14.3 Plateforme agréée et solution compatible

La DGFiP indique que seule une plateforme agréée peut assurer toutes les fonctions réglementaires de transmission/réception et de e-reporting. Un logiciel SaaS peut être une solution compatible reliée à cette plateforme sans être lui-même agréé ([rôle des plateformes](https://www.impots.gouv.fr/facturation-electronique-et-plateformes-agreees)).

La liste des opérateurs est évolutive. La page officielle a été modifiée le 17 juillet 2026 et distingue les opérateurs ayant satisfait aux conditions, dont les tests d’interopérabilité, de ceux encore en attente ([liste officielle](https://www.impots.gouv.fr/je-consulte-la-liste-des-plateformes-agreees)).

Le guide ne doit donc pas :

- figer un nombre de plateformes ;
- conserver l’ancien terme PDP sans expliquer le vocabulaire actuel ;
- promettre qu’un fournisseur précis restera agréé ;
- affirmer que l’application peut transmettre directement parce qu’elle génère Factur-X.

### 14.4 Données à modéliser

- SIREN et, selon le cas, identifiant TVA ;
- entité juridique du vendeur et du client ;
- adresse de facturation et adresse de livraison/prestation si requise ;
- nature de l’opération ;
- période de service ;
- lignes, quantités, prix, remises ;
- taux, base et montant de taxe selon validation fiscale ;
- devise ;
- numéro et date ;
- référence d’avoir ;
- statut de cycle de vie ;
- statut de paiement ;
- canal et identifiant de plateforme ;
- piste entre contrat, facture et prestation.

### 14.5 Conservation

Le ministère indique que les factures établies ou reçues doivent être conservées dix ans en qualité de pièces comptables ([mentions obligatoires et conservation](https://www.economie.gouv.fr/entreprises/gerer-son-entreprise-au-quotidien/gerer-sa-comptabilite-et-ses-demarches/mentions-obligatoires-dune-facture-tout-savoir)). D’autres règles fiscales ou probatoires peuvent viser des documents ou durées distincts. Le guide doit recommander un plan de conservation validé, pas un simple dossier de PDF.

### 14.6 Limite temporelle obligatoire

Chaque passage réglementaire public devra afficher :

> Informations vérifiées le 24 juillet 2026. Le calendrier, les spécifications, les profils techniques et la liste des plateformes peuvent évoluer ; vérifier les pages officielles avant tout projet de mise en conformité.

---

## 15. International : les données à collecter avant de calculer une taxe

### 15.1 Principe

Une règle `taxe = taux[pays]` est trop pauvre. La décision peut dépendre de :

- pays d’établissement du vendeur ;
- établissement qui réalise la vente ;
- pays, État ou province du client ;
- B2B ou B2C ;
- identifiant fiscal valide ;
- nature exacte du service et niveau d’intervention humaine ;
- lieu d’utilisation ;
- volume ou seuil ;
- vente directe, plateforme ou merchant of record ;
- date de l’opération ;
- devise ;
- exemption ;
- document requis.

### 15.2 Union européenne

La Commission européenne indique que les services électroniques B2C sont en principe taxés là où réside le client. Une règle simplifiée de 10 000 € peut s’appliquer dans certaines conditions aux services TBE transfrontaliers et ventes à distance, et l’OSS peut simplifier la déclaration ([lieu d’imposition](https://taxation-customs.ec.europa.eu/where-tax_en), [règles transfrontalières](https://europa.eu/youreurope/business/finance-and-tax/vat/cross-border-vat/index_en.htm), [OSS](https://europa.eu/youreurope/business/taxation/vat/one-stop-shop/index_en.htm)).

Conséquence produit : le SaaS doit distinguer client entreprise/consommateur, pays, preuve et régime ; il ne doit pas appliquer mécaniquement le seuil à toutes ses ventes.

### 15.3 États-Unis

La décision *South Dakota v. Wayfair* a écarté la présence physique comme exigence constitutionnelle générale pour la collecte par un vendeur distant ([opinion de la Cour suprême](https://www.supremecourt.gov/opinions/17pdf/17-494_j4el.pdf)). La qualification et les seuils restent ensuite largement liés aux États.

Le Texas illustre la variation de qualification : son administration traite certains services de traitement de données comme taxables et prévoit des règles pour les contrats mêlant services taxables et non taxables ([Texas Comptroller](https://comptroller.texas.gov/taxes/publications/94-127.php)).

Conséquence produit : « États-Unis » n’est pas une juridiction suffisamment précise. Il faut une matrice État × type de produit × nexus × client, validée par un spécialiste ou un moteur adapté.

### 15.4 Royaume-Uni

HMRC indique que les services numériques fournis à des consommateurs britanniques sont soumis à la TVA britannique et qu’un fournisseur établi hors du Royaume-Uni peut devoir s’enregistrer. La qualification de service numérique dépend notamment de l’automatisation et de l’intervention humaine ([guidance HMRC](https://www.gov.uk/guidance/the-vat-rules-if-you-supply-digital-services-to-private-consumers), [place of supply](https://www.gov.uk/guidance/vat-place-of-supply-of-services-notice-741a)).

Conséquence produit : conserver le statut du client, sa localisation et la qualification de l’offre. Un logiciel automatisé et une prestation humaine vendue avec le logiciel peuvent ne pas suivre exactement la même analyse.

### 15.5 Canada

L’Agence du revenu du Canada distingue notamment les ventes directes et celles facilitées par une plateforme. Une fois l’inscription requise réalisée, le taux dépend du lieu de fourniture et de la province ([règles GST/HST pour l’économie numérique](https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses/digital-economy.html), [ventes transfrontalières](https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses/digital-economy-gsthst/charge-collect/cross-border.html)).

Conséquence produit : pays seul insuffisant ; province, statut d’inscription du client, vente directe ou plateforme et preuve doivent être conservés.

### 15.6 Allemagne

Pour les opérations domestiques B2B visées, l’Allemagne définit depuis le 1er janvier 2025 la facture électronique comme un format structuré permettant le traitement électronique. Les entreprises domestiques doivent être capables de recevoir ; des transitions d’émission courent notamment jusqu’à fin 2026 et, sous conditions de chiffre d’affaires antérieur, fin 2027 ([FAQ du ministère fédéral des Finances](https://www.bundesfinanzministerium.de/Content/DE/FAQ/e-rechnung.html), [§14 UStG](https://www.gesetze-im-internet.de/ustg_1980/__14.html), [§27 UStG](https://www.gesetze-im-internet.de/ustg_1980/__27.html)).

Conséquence produit : ne pas appliquer la règle domestique allemande à toute facture envoyée à un client allemand sans analyser le lieu d’établissement et l’opération.

### 15.7 Australie

L’Australian Taxation Office indique que les entreprises non résidentes vendant des services ou produits numériques importés à des consommateurs australiens et atteignant le seuil annuel de 75 000 AUD doivent s’inscrire au GST selon le régime applicable ([ATO](https://softwaredevelopers.ato.gov.au/GSTintangibles)).

Conséquence produit : le statut de consommateur australien, le volume et le canal de vente doivent déclencher une revue, pas un simple taux.

### 15.8 Matrice de données et d’escalade

| Donnée | Pourquoi | Si absente |
|---|---|---|
| Pays et sous-juridiction | Taux, nexus, document | Bloquer ou revue manuelle |
| B2B/B2C | Lieu et responsabilité | Ne pas deviner depuis le nom |
| Identifiant fiscal + résultat de validation | Preuve du statut | Appliquer la règle validée ou escalader |
| Nature du service | Classification fiscale | Référentiel produit versionné |
| Canal de vente | Prestataire, plateforme, MoR | Identifier le vendeur légal |
| Preuves de localisation | Règles B2C | Conserver selon politique validée |
| Date d’effet de la règle | Temporalité | Versionner le moteur |
| Source et date de vérification | Auditabilité | Refuser une règle orpheline |
| Responsable de validation | Gouvernance | Aucune publication automatique |

---

## 16. Paiement, carte et litige : limites à rendre visibles

### 16.1 Externaliser réduit le périmètre, pas toute responsabilité

Le PCI Security Standards Council précise qu’un marchand qui externalise entièrement le paiement reste responsable de vérifier le statut de conformité du prestataire, de formaliser les responsabilités et de suivre la relation ; il peut toujours devoir valider sa propre conformité ([FAQ PCI SSC](https://www.pcisecuritystandards.org/faqs/1092/)).

Le guide doit donc dire :

> Utiliser une page de paiement hébergée réduit fortement l’exposition et le travail de conformité, mais ne crée pas un « zéro PCI » automatique.

### 16.2 Données de carte

La CNIL rappelle que, par défaut, les données de carte ne doivent pas être conservées au-delà de la transaction et que le cryptogramme ne doit pas être conservé après celle-ci. La conservation pour des achats ultérieurs obéit à des conditions spécifiques ([recommandation CNIL](https://www.cnil.fr/fr/le-paiement-distance-par-carte-bancaire)).

Position : le SaaS conserve des identifiants de moyen de paiement fournis par le prestataire, pas les numéros bruts ni le cryptogramme.

### 16.3 Avoir, remboursement et chargeback ne sont pas synonymes

- **Avoir** : document qui diminue tout ou partie d’une facture ;
- **remboursement** : restitution d’une somme ;
- **chargeback/rétrofacturation** : procédure liée au paiement carte et aux conditions de la marque ou de la banque ;
- **annulation de facture** : traitement documentaire distinct selon son état et les règles applicables.

La DGCCRF précise que le chargeback est un service contractuel proposé sous conditions, et non un mécanisme obligatoire universel ([fiche DGCCRF](https://www.economie.gouv.fr/dgccrf/les-fiches-pratiques/retrofacturation-ou-chargeback-quest-ce-que-cest)).

La documentation Stripe montre également qu’un avoir sur une facture payée peut conduire à un remboursement ou à un crédit de solde, ce qui confirme la nécessité de séparer document et mouvement de fonds ([credit notes Stripe](https://docs.stripe.com/invoicing/dashboard/credit-notes)).

---

## 17. Échecs et contre-cas que le guide doit traiter

### 17.1 Le commercial promet un prix que le catalogue ne représente pas

**Risque :** note libre, facture manuelle parallèle, MRR faux.

**Décision :** refuser l’exception, créer une offre versionnée ou approuver une surcharge structurée.

**Preuve :** devis accepté et configuration produisent les mêmes lignes.

### 17.2 Le devis est modifié après acceptation

**Risque :** le système facture la dernière version, pas celle acceptée.

**Décision :** version immuable, nouvel amendement et nouvelle acceptation.

**Preuve :** hash/version/date/auteur.

### 17.3 Un paiement asynchrone échoue après ouverture des droits

**Risque :** accès gratuit ou coupure incohérente.

**Décision :** état provisoire, resynchronisation et politique de grâce.

**Preuve :** état final relu et transition unique.

### 17.4 Deux webhooks identiques arrivent

**Risque :** double accès, double email, double export.

**Décision :** idempotence par événement et action métier.

**Preuve :** le second traitement ne change rien.

### 17.5 Les événements arrivent dans le désordre

**Risque :** facture payée reçue avant la création locale de l’abonnement.

**Décision :** relire la ressource source et reprendre.

**Preuve :** test automatisé avec ordre inversé.

### 17.6 Upgrade sur une période impayée

**Risque :** créditer un montant jamais payé.

**Décision :** politique spéciale : pas de prorata, nouvelle facture ou régularisation contrôlée.

**Preuve :** aperçu du calcul et statut de la facture antérieure.

### 17.7 Usage dupliqué ou reçu en retard

**Risque :** surfacturation ou sous-facturation.

**Décision :** identifiant idempotent, fenêtre de correction, journal d’ajustement.

**Preuve :** total source = total facturé + ajustements.

### 17.8 Virement sans référence

**Risque :** cash reçu mais créance encore ouverte.

**Décision :** file de paiements non affectés, rapprochement humain.

**Preuve :** aucun paiement non affecté au-delà du délai cible.

### 17.9 Remboursement sans avoir

**Risque :** banque et documents divergent.

**Décision :** workflow lié, contrôlé selon le contexte.

**Preuve :** lien facture → avoir → remboursement.

### 17.10 Chargeback après utilisation du service

**Risque :** perte de cash et accès toujours actif.

**Décision :** dossier de preuve, politique d’accès et suivi du litige.

**Preuve :** identifiants du paiement, du contrat et de l’usage.

### 17.11 Client avec plusieurs entités

**Risque :** utilisateur dans une entité, facture dans une autre, mauvais identifiant fiscal.

**Décision :** séparer organisation produit, entité contractante et compte de facturation.

**Preuve :** chaque facture pointe vers l’entité acceptante.

### 17.12 Changement de plateforme ou de moteur

**Risque :** perdre échéanciers, crédits, mandats, historique et définitions MRR.

**Décision :** plan de sortie avant signature et export régulier.

**Preuve :** export test restauré et rapprochement avant/après.

---

## 18. Univers de test et sélection par risque

### 18.1 Univers minimal

Avec seulement :

- 3 offres ;
- 2 cadences ;
- 3 contextes client/taxe ;
- 4 transitions ;

on obtient :

```text
3 × 2 × 3 × 4 = 72 combinaisons
```

Les tester toutes en interface n’est pas nécessairement rentable. Il faut couvrir toutes les règles, puis sélectionner les combinaisons qui croisent le plus de risques.

### 18.2 Dix-huit tests critiques

| # | Cas | Résultat attendu | Preuve |
|---:|---|---|---|
| 1 | Nouveau mensuel, carte réussie | Facture payée, droit actif une fois | IDs liés |
| 2 | Première carte, authentification requise | Aucun faux succès | État final |
| 3 | Paiement asynchrone en traitement | Droit provisoire selon règle | Transition tracée |
| 4 | Échec asynchrone tardif | Grâce/suspension correcte | Resynchronisation |
| 5 | Virement avec délai de 30 jours | Facture ouverte, accès contractuel | Échéance |
| 6 | Virement sans référence | Paiement en file d’exception | Affectation manuelle |
| 7 | Webhook dupliqué | Aucune action répétée | Journal d’idempotence |
| 8 | Webhooks dans le désordre | État final correct | Relecture source |
| 9 | Upgrade immédiat payé | Prorata annoncé = facture | Aperçu + document |
| 10 | Upgrade avec facture antérieure impayée | Aucun crédit indu | Règle d’exception |
| 11 | Downgrade au renouvellement | Aucun avoir immédiat | Changement planifié |
| 12 | Annulation fin de période | Accès jusqu’à la date convenue | Date d’effet |
| 13 | Annulation immédiate + remboursement | Droits, avoir et cash liés | Chaîne complète |
| 14 | Usage dupliqué | Une seule unité facturée | Clé idempotente |
| 15 | Usage tardif après clôture | Ajustement contrôlé | Journal |
| 16 | Échec de relance puis nouveau moyen | Réactivation unique | Cohorte dunning |
| 17 | Facture électronique rejetée | Alerte, correction, nouvelle transmission | Statuts de plateforme |
| 18 | Migration d’un abonnement annuel avec crédit | Prochaine facture et solde identiques | Rapprochement avant/après |

### 18.3 Tests de rupture supplémentaires

- panne du moteur pendant un renouvellement massif ;
- panne de la file d’événements ;
- secret de webhook invalide ;
- changement de version d’API ;
- taxe inconnue ;
- identifiant fiscal invalidé ;
- devise sans taux ;
- utilisateur supprimé mais contrat actif ;
- abonnement supprimé alors qu’une facture est ouverte ;
- export comptable relancé deux fois.

---

## 19. Opinions professionnelles à assumer

### 19.1 « Le billing n’est pas votre produit » est trop simpliste

Pour un SaaS à prix fixe, le moteur générique n’est probablement pas un avantage concurrentiel. Pour un SaaS dont la valeur dépend de quantités, de consommation, de contrats multi-entités ou de partage de revenus, la capacité de facturer peut devenir une partie du produit.

**Position :** acheter le générique, construire le différenciant.

### 19.2 Le nombre de clients n’est pas le bon seuil principal

Dix clients avec cinq entités, des virements, des usages et des contrats négociés peuvent être plus complexes que cinq cents abonnés identiques par carte.

**Position :** mesurer le nombre de règles, d’exceptions et d’heures de clôture avant le nombre de clients.

### 19.3 Le moteur de billing ne doit pas être le registre de droits

Les statuts de prestataire sont conçus pour le paiement et la facturation. Le produit doit traduire ces états selon son contrat.

**Position :** garder un registre interne de droits, alimenté de façon idempotente et réconcilié.

### 19.4 Une facture annuelle n’est pas douze mois de cash prévisible

Elle peut rester impayée, être remboursée, faire l’objet d’un avoir ou couvrir des obligations différentes.

**Position :** piloter séparément engagement commercial, facture, cash et prestation.

### 19.5 Le pourcentage le plus faible n’est pas forcément l’option la moins chère

Un fournisseur à 0,7 % de billing n’assume pas le même rôle qu’un merchant of record à 5 % + 0,50 $. Inversement, acheter un périmètre trop large pour un SaaS français B2B simple détruit inutilement de la marge.

**Position :** comparer les responsabilités, les coûts exclus et la sortie.

### 19.6 La réforme française est un projet de données avant d’être un choix de plateforme

Une plateforme ne peut pas inventer le SIREN client, la nature de l’opération, la période de service ou une piste entre contrat et facture.

**Position :** auditer le modèle de données et les cas d’usage avant de signer l’outil.

### 19.7 Le premier KPI n’est pas le taux de récupération

Un taux élevé peut masquer un volume initial d’échec anormal ou une fenêtre non close.

**Position :** suivre à la fois l’échec initial, le montant en récupération, le montant récupéré et le délai.

---

## 20. Ressource signature à construire

### 20.1 Proposition

**Nom :** `kit-pilotage-facturation-saas.xlsx`

**Promesse :** « Décrivez vos règles, comparez quatre architectures sur 24 mois et contrôlez un mois de facturation sans confondre MRR, facture et cash. »

Le fichier doit être téléchargeable librement et utilisable sans laisser d’email. La conversion repose sur sa qualité, sur un onglet d’aide neutre et sur un appel à diagnostic discret, pas sur une fausse barrière.

### 20.2 Onglets

1. **LIRE_D_ABORD**
   - objectif et limites ;
   - date de mise à jour ;
   - champs éditables ;
   - légende fait/hypothèse ;
   - avertissement juridique/comptable.

2. **REGLES**
   - offre ;
   - cadence ;
   - essai ;
   - date d’effet ;
   - upgrade/downgrade ;
   - prorata ;
   - annulation ;
   - impayé ;
   - délai de grâce ;
   - droits ;
   - propriétaire de chaque décision.

3. **TCO_24_MOIS**
   - nombre de clients ;
   - panier moyen ;
   - coût horaire ;
   - temps par client ;
   - frais fixes/variables ;
   - intégration ;
   - maintenance ;
   - seuils et graphique ;
   - aucune recommandation opaque.

4. **MRR**
   - MRR début ;
   - nouveau ;
   - expansion ;
   - contraction ;
   - churn ;
   - MRR fin ;
   - contrôle automatique ;
   - convention visible.

5. **RAPPROCHEMENT**
   - facture ;
   - avoir ;
   - paiement ;
   - remboursement ;
   - litige ;
   - créance ;
   - alerte sur ligne non liée.

6. **RELANCES**
   - cohorte d’échecs ;
   - fenêtre ;
   - récupéré ;
   - encore en cours ;
   - non récupéré ;
   - taux uniquement sur cohorte close.

7. **TESTS**
   - 18 cas préremplis ;
   - responsable ;
   - résultat attendu ;
   - résultat obtenu ;
   - preuve ;
   - bloquant oui/non.

8. **EXEMPLE_PLANOR**
   - les douze mois de ce dossier ;
   - formules visibles ;
   - cellules d’entrée distinctes ;
   - contrôles à zéro.

### 20.3 Critères de publication

La page ne devra promettre cette ressource que lorsque :

- toutes les formules auront des tests ;
- les cellules modifiables seront distinguées ;
- un utilisateur externe pourra terminer sans explication orale ;
- les onglets seront lisibles sur Excel et LibreOffice ;
- les montants seront identifiés comme hypothèses ;
- aucune règle fiscale automatique non validée ne sera incluse ;
- le fichier d’exemple retombera exactement sur 3 800 € de MRR, 41 000 € de factures brutes, 250 € d’avoirs et 40 650 € de cash net.

---

## 21. Frontières SEO et anti-cannibalisation

| Guide existant | Question qu’il doit posséder | Ce guide peut y renvoyer | Ce guide ne doit pas développer |
|---|---|---|---|
| `/guides/mvp-saas-quoi-inclure` | Ce qui entre dans un MVP SaaS | Quand inclure un premier flux de facturation | Architecture complète du billing |
| `/guides/prioriser-fonctionnalites-mvp-saas` | Comment ordonner une roadmap | Priorité des risques de facturation | Tous les calculs de TCO |
| `/guides/cahier-des-charges-saas` | Comment spécifier tout le SaaS | Le chapitre « abonnements et paiement » | Guide général du cahier des charges |
| `/guides/combien-coute-un-saas` | Budget complet du produit | La ligne de coût facturation | Budget global du SaaS |
| `/guides/securite-saas-b2b` | Sécurité du SaaS | Webhooks, secrets et accès comme cas | Programme de sécurité complet |
| `/guides/rgpd-saas-b2b` | Données personnelles et rôles | Données client/paiement à minimiser | Analyse RGPD générale |
| `/guides/faire-evoluer-saas-apres-mvp` | Évolution après lancement | Signaux d’automatisation | Roadmap produit complète |

### 21.1 Futurs contenus à isoler

- « Facturation électronique 2026/2027 pour un éditeur SaaS » : réforme détaillée, plateformes et intégration ;
- « Pricing SaaS B2B » : choix du modèle économique et des prix ;
- « Réduire le churn involontaire » : relance et expérience client ;
- « MRR, ARR, NRR et churn » : dictionnaire complet des métriques ;
- « Merchant of record ou PSP » : comparaison internationale dédiée.

Dans le présent guide, ces thèmes doivent être suffisamment traités pour la décision de facturation, mais pas au point de devenir cinq guides superposés.

---

## 22. Plan humain de réécriture

### 22.1 Titre et promesse

**H1 proposé**

> Facturation des abonnements SaaS : construire un système fiable, du devis au paiement

**Angle**

> Le dirigeant ne choisit pas seulement un outil. Il choisit qui possède le contrat, qui produit la facture, qui encaisse, qui ouvre les droits et qui explique les écarts.

### 22.2 Proposition d’ouverture

> Vous avez vendu un abonnement à 100 € par mois. Le client passe à l’offre supérieure le 18, paie par virement avec quinze jours de retard, puis demande un avoir. Que doit faire votre SaaS entre-temps : modifier la facture, ouvrir les nouvelles fonctions, relancer le paiement ou attendre la banque ?
>
> C’est à cet endroit que les systèmes fragiles apparaissent. Une facture n’est pas un paiement. Un paiement n’est pas un droit d’accès. Et le MRR affiché dans votre tableau de bord n’est ni votre trésorerie ni votre chiffre d’affaires comptable.
>
> Dans ce guide, nous allons suivre une entreprise fictive pendant douze mois, comparer quatre architectures sur 24 mois et écrire les règles indispensables : devis, abonnement, prorata, impayé, avoir, remboursement, facture électronique et rapprochement. Mon avis est simple : dans la plupart des SaaS B2B, il faut acheter le moteur générique et garder en interne la logique qui décrit ce que le client a réellement acheté.

Cette introduction :

- part d’une situation ordinaire ;
- nomme le dirigeant sans le flatter ;
- expose la confusion ;
- annonce la réponse ;
- donne une opinion conditionnelle ;
- promet des preuves concrètes.

### 22.3 Enchaînement proposé

#### 1. « Commencez par suivre une seule vente »

Dessiner les douze étapes avec l’exemple du client à 100 €. Traduire immédiatement « quote-to-cash » en français. Finir par une question : « À quelle étape perdez-vous aujourd’hui l’information ? »

#### 2. « Facture, paiement et accès : trois décisions différentes »

Présenter les sept sources de vérité et le contre-cas du paiement asynchrone. Introduire la position sur les droits internes.

#### 3. « Faut-il rester manuel, acheter un moteur ou développer ? »

Tableau des cinq architectures, verdict conditionnel, merchant of record et coûts non comparables.

#### 4. « Ce que coûtent vraiment les quatre options sur 24 mois »

Afficher les hypothèses avant les résultats, le seuil de 97 clients, puis la sensibilité qui détruit l’idée d’un seuil universel. Proposer le téléchargement du kit TCO ici.

#### 5. « Douze mois dans la facturation de Planor »

Raconter les événements avant d’afficher le tableau :

- janvier : deux annuels gonflent les factures, pas le MRR ;
- mai : paiement échoué ;
- juin : récupération partielle ;
- août : remboursement ;
- septembre : contraction et churn ;
- décembre : usage ponctuel.

#### 6. « Écrivez vos règles avant de brancher l’API »

Checklist : cadence, date d’effet, essai, quantité, usage, remise, upgrade, downgrade, annulation, prorata, grâce, réactivation, avoir, remboursement.

#### 7. « Le prorata n’est pas une règle, c’est une convention »

Exemple à 50 €, cas impayé, downgrade annuel. Prendre position pour la montée immédiate/baisse au renouvellement comme défaut lisible.

#### 8. « Un impayé n’est pas encore un client perdu »

Scénario 20 000 €/600 €, trois taux de récupération, cohorte close, politique de grâce.

#### 9. « Fermez le mois sans vous contenter du relevé bancaire »

Pont factures/avoirs/cash/créances, contrôle Planor et preuves de clôture.

#### 10. « Le MRR n’est ni une facture ni du chiffre d’affaires »

Définitions, conventions, roll-forward, limite comptable et appel à l’expert.

#### 11. « Préparez la France 2026/2027 dans votre modèle de données »

Calendrier daté, plateforme agréée, UBL/CII/Factur-X, données à posséder, lien vers les sources officielles.

#### 12. « À l’étranger, le pays ne suffit pas »

Six juridictions en tableau, uniquement pour montrer les dimensions et les escalades. Ne pas donner de moteur fiscal artisanal.

#### 13. « Les 18 tests à réussir avant d’encaisser en production »

Sélection par risque, preuves et cas de panne. CTA d’audit technique naturel.

#### 14. « Mon choix par défaut pour un SaaS B2B français »

Synthèse :

1. moteur éprouvé ;
2. paiement hébergé ;
3. couche contrat/droits interne ;
4. plateforme agréée ou connecteur ;
5. export comptable ;
6. rapprochement mensuel ;
7. plan de sortie.

#### 15. Conclusion et conversion

Question concrète :

> « Pouvez-vous relier en moins de cinq minutes le devis accepté, la facture, le paiement et les droits d’un client qui a changé d’offre ? »

CTA :

> « Si la réponse est non, nous pouvons cartographier votre cycle actuel, chiffrer les options et vous remettre une architecture et une matrice de tests avant tout développement. »

### 22.4 Variété de forme

Pour éviter une structure mécanique :

- ouvrir certaines sections par une scène ;
- utiliser les tableaux uniquement pour comparer ;
- réserver les listes aux décisions ;
- insérer deux calculs détaillés, pas une formule à chaque paragraphe ;
- alterner phrases courtes de verdict et explications plus développées ;
- employer « moteur de facturation » avant « billing engine » ;
- éviter « il est crucial », « robuste », « optimiser », « enjeux », « levier » sans preuve ;
- ne pas répéter une mini-conclusion identique à chaque H2.

---

## 23. Appels à l’action et conversion honnête

### 23.1 CTA après le comparatif

> Vous hésitez entre un moteur existant et une couche spécifique ? Le bon comparatif part de vos règles, de votre panier moyen et de vos heures de clôture. Téléchargez le modèle et remplacez les hypothèses Planor par les vôtres.

### 23.2 CTA après les tests

> Un audit utile ne commence pas par le choix d’un prestataire. Il commence par un client réel : devis, facture, paiement, accès et export comptable. Nous pouvons tester cette chaîne et vous remettre les écarts classés par risque.

### 23.3 Ce que l’offre doit promettre

- cartographie du cycle ;
- inventaire des règles et exceptions ;
- modèle de données ;
- comparaison d’architectures et TCO ;
- matrice de tests ;
- plan de migration ;
- frontières avec l’expert-comptable/fiscaliste.

### 23.4 Ce qu’elle ne doit pas promettre

- conformité fiscale mondiale automatique ;
- absence totale d’incident ;
- récupération garantie des impayés ;
- reconnaissance comptable sans validation ;
- agrément ou pérennité d’un fournisseur ;
- économie garantie à partir d’un nombre de clients.

---

## 24. Registre de sources et limites

### 24.1 France

| Source | Fait utilisé | Limite/rafraîchissement |
|---|---|---|
| [Ministère — tout savoir sur la facturation électronique](https://www.economie.gouv.fr/tout-savoir-sur-la-facturation-electronique-pour-les-entreprises) | Calendrier, réception, émission, structure | Revoir avant publication et à chaque mise à jour réglementaire |
| [DGFiP — découvrir la facturation électronique](https://www.impots.gouv.fr/professionnel/je-decouvre-la-facturation-electronique) | UBL, CII, hybride, PDF insuffisant | Revoir avec les spécifications courantes |
| [DGFiP — plateformes agréées](https://www.impots.gouv.fr/facturation-electronique-et-plateformes-agreees) | Rôle exclusif de la plateforme agréée | Vocabulaire et dispositif susceptibles d’évoluer |
| [DGFiP — liste des plateformes](https://www.impots.gouv.fr/je-consulte-la-liste-des-plateformes-agreees) | Liste évolutive et tests d’interopérabilité | Ne jamais recopier une liste figée |
| [DGFiP — spécifications externes](https://www.impots.gouv.fr/specifications-externes-b2b) | Version 3.2 du 30 avril 2026 | Vérifier version au jour du développement |
| [AFNOR XP Z12-012](https://www.boutique.afnor.org/fr-fr/norme/xp-z12012/formats-et-profils-des-messages-factures-et-statuts-de-cycle-de-vie-constit/fa301169/601641) | Norme en vigueur, juin 2026 | Ne pas résumer les profils sans lire la version applicable |
| [Ministère — mentions obligatoires](https://www.economie.gouv.fr/entreprises/gerer-son-entreprise-au-quotidien/gerer-sa-comptabilite-et-ses-demarches/mentions-obligatoires-dune-facture-tout-savoir) | Mentions et conservation comptable | Faire valider les cas particuliers |
| [CNIL — paiement à distance](https://www.cnil.fr/fr/le-paiement-distance-par-carte-bancaire) | Conservation et sécurité des données de carte | Revoir recommandation et contexte du traitement |
| [DGCCRF — chargeback](https://www.economie.gouv.fr/dgccrf/les-fiches-pratiques/retrofacturation-ou-chargeback-quest-ce-que-cest) | Nature contractuelle du mécanisme | Ne pas généraliser à tous les moyens de paiement |

### 24.2 Produit et opérations

| Source | Fait utilisé | Limite |
|---|---|---|
| [Stripe — abonnements](https://docs.stripe.com/billing/subscriptions/overview) | États et paiements asynchrones | Modèle Stripe, pas norme universelle |
| [Stripe — webhooks](https://docs.stripe.com/webhooks) | Retours rapides, doublons, ordre non garanti, file | Implémentation à adapter |
| [Stripe — prorations](https://docs.stripe.com/billing/subscriptions/prorations) | Trois comportements, impayés, usage | Comportement dépendant du produit/version |
| [Stripe — usage](https://docs.stripe.com/billing/subscriptions/usage-based/how-it-works) | Ingestion, agrégation, traitement asynchrone | Limites propres au fournisseur |
| [Stripe — recovery analytics](https://docs.stripe.com/billing/revenue-recovery/recovery-analytics) | Définitions d’échec/récupération | Aucune statistique fournisseur utilisée |
| [Stripe — analytics](https://docs.stripe.com/billing/subscriptions/analytics) | Définitions MRR configurables | Ne pas présenter comme norme comptable |
| [Stripe — credit notes](https://docs.stripe.com/invoicing/dashboard/credit-notes) | Séparation avoir/remboursement | Flux produit spécifique |
| [Chargebee — devis et amendements](https://www.chargebee.com/docs/billing/2.0/chargebee-cpq/chargebee-cpq-amendment-quote) | Devis → abonnement/amendement | Source commerciale |
| [PCI SSC — externalisation](https://www.pcisecuritystandards.org/faqs/1092/) | Responsabilité résiduelle du marchand | Confirmer le programme applicable |

### 24.3 Tarifs publics, photographiés au 24 juillet 2026

| Fournisseur | Prix observé | Usage dans le guide |
|---|---|---|
| [Stripe Billing France](https://stripe.com/fr/pricing) | 0,7 % du volume Billing ; forfait annuel à partir de 500 €/mois | Paramètre d’exemple, frais de paiement exclus |
| [Chargebee](https://www.chargebee.com/pricing/) | Starter gratuit jusqu’à 250 k$ cumulés puis 0,75 % ; Performance 7 188 $/an jusqu’à 100 k$/mois | Montrer la diversité des modèles, pas classer |
| [Recurly](https://recurly.com/pricing/) | Starter 249 $/mois + 0,9 %, avec conditions affichées | Montrer les forfaits mixtes |
| [Paddle](https://www.paddle.com/pricing) | 5 % + 0,50 $ par transaction Checkout | Illustrer le périmètre merchant of record |

Tous ces tarifs peuvent changer. La page finale doit dater chaque valeur ou préférer le modèle paramétrable.

### 24.4 International

| Juridiction | Source primaire | Utilisation |
|---|---|---|
| Union européenne | [Commission — place of taxation](https://taxation-customs.ec.europa.eu/where-tax_en), [Your Europe](https://europa.eu/youreurope/business/finance-and-tax/vat/cross-border-vat/index_en.htm) | Montrer statut, localisation, seuil conditionnel et OSS |
| États-Unis | [Cour suprême — Wayfair](https://www.supremecourt.gov/opinions/17pdf/17-494_j4el.pdf), [Texas Comptroller](https://comptroller.texas.gov/taxes/publications/94-127.php) | Montrer nexus et variation de classification |
| Royaume-Uni | [HMRC — digital services](https://www.gov.uk/guidance/the-vat-rules-if-you-supply-digital-services-to-private-consumers) | Localisation et nature du service |
| Canada | [CRA — digital economy](https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses/digital-economy.html) | Direct/plateforme, province et statut |
| Allemagne | [BMF — E-Rechnung](https://www.bundesfinanzministerium.de/Content/DE/FAQ/e-rechnung.html) | Structure et transitions domestiques |
| Australie | [ATO — imported digital services](https://softwaredevelopers.ato.gov.au/GSTintangibles) | Consommateur australien et seuil |
| Comptabilité internationale | [IFRS 15](https://www.ifrs.org/issued-standards/list-of-standards/ifrs-15-revenue-from-contracts-with-customers/) | Séparer prestation, facture et cash sans prescrire |

---

## 25. Contrôles de reproductibilité

### 25.1 TCO

Formules centrales simplifiées avec `t = 45`, `p = 100`, `f = 0,007` :

```text
M = 2 160 + 108n
H = 7 480 + 52,8n
Y = 31 340 + 34,8n
S = 97 080 + 10,8n
```

Substitutions :

```text
n = 10
M = 3 240
H = 8 008
Y = 31 688
S = 97 188

n = 100
M = 12 960
H = 12 760
Y = 34 820
S = 98 160

n = 500
M = 56 160
H = 33 880
Y = 48 740
S = 102 480
```

### 25.2 Seuil manuel/moteur

Formule générale :

```text
n = (6 400 - 24t) / (1,6t - 24pf)
```

Elle n’a de sens économique dans le modèle que si le dénominateur est positif et si le résultat est positif.

### 25.3 MRR

```text
Nouveau annuel = 4 100
Expansion annuelle = 300
Contraction annuelle = 200
Churn annuel = 400

MRR final = 4 100 + 300 - 200 - 400 = 3 800
ARR de rythme = 3 800 × 12 = 45 600
```

### 25.4 Rapprochement

```text
Factures brutes = 41 000
Avoirs = 250
Encaissements affectés = 40 750

Créances finales
= 0 + 41 000 - 250 - 40 750
= 0

Cash net
= 40 750 - 100 de remboursement
= 40 650
```

### 25.5 Relance

```text
20 000 × 3 % = 600 de volume initial échoué
600 × 30 % = 180 récupéré
600 × 60 % = 360 récupéré
600 × 80 % = 480 récupéré
```

---

## 26. Porte de sortie pour la future réécriture

La page ne devra pas être considérée comme prête tant que les points suivants ne sont pas vrais :

- [ ] les 150 premiers mots décrivent une situation humaine, annoncent le verdict et promettent le cas Planor ;
- [ ] devis, commande/contrat, abonnement, facture, paiement, droits et comptabilité sont séparés ;
- [ ] les cinq architectures sont comparées sur le même périmètre ;
- [ ] les prix fournisseurs sont datés et ne sont pas comparés comme des services équivalents ;
- [ ] le TCO affiche hypothèses, formules, résultats et sensibilités ;
- [ ] le seuil de 97 clients est présenté comme scénario, jamais comme règle ;
- [ ] le cas Planor retombe exactement sur les contrôles publiés ;
- [ ] l’exemple d’impayé distingue cohorte close et mois en cours ;
- [ ] le prorata mentionne l’impayé et la facturation à l’usage ;
- [ ] les webhooks sont décrits comme asynchrones, non ordonnés et potentiellement dupliqués ;
- [ ] MRR, ARR, facture, cash et chiffre d’affaires ne sont jamais synonymes ;
- [ ] la partie française porte la date du 24 juillet 2026 et renvoie aux sources officielles ;
- [ ] l’international sert à définir les données et escalades, pas à donner une recette fiscale ;
- [ ] les limites PCI/CNIL sont exactes et sans promesse « zéro responsabilité » ;
- [ ] la matrice de 18 tests est exploitable ;
- [ ] la ressource n’est annoncée qu’après création et vérification ;
- [ ] le CTA vend une cartographie et un plan testable, pas une conformité magique ;
- [ ] les guides voisins restent propriétaires de leur intention ;
- [ ] une relecture humaine peut expliquer chaque tableau sans jargon.

### Verdict final de recherche

Le futur guide peut devenir une réponse de référence s’il cesse d’être seulement un guide de configuration et devient un **guide de maîtrise du cycle économique d’un abonnement**. Son avantage défendable sera l’association de quatre éléments rarement réunis :

1. une vente suivie de bout en bout ;
2. un comparatif d’architectures avec TCO sensible ;
3. un rapprochement MRR–factures–cash compréhensible ;
4. une préparation réglementaire datée, internationale et honnêtement limitée.

La doctrine à conserver est simple :

> **Achetez les mécanismes génériques éprouvés. Possédez vos règles commerciales et vos droits. Rapprochez chaque mois. Et ne laissez jamais un statut technique décider seul de ce que votre client a acheté.**
