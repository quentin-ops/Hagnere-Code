# Audit approfondi — `prise-rendez-vous-en-ligne-site-vitrine`

Date : 24 juillet 2026

Auditeur concurrentiel : Codex, lot benchmark international

Snapshot du guide : `src/app/guides/prise-rendez-vous-en-ligne-site-vitrine/page.tsx`, SHA-256 `8f26a123dd526aa0475a3d149a6c7df9077c26a5919c218c040c5a3b11fd0439`

Périmètre : audit éditorial et décisionnel uniquement. Aucune modification de la page publique n’a été réalisée dans ce lot.

## 1. Verdict exécutif

```text
Lecteur exact : dirigeant, indépendant ou commerce qui veut ajouter une prise de rendez-vous sur son site sans créer de doubles réservations ni de travail administratif caché.
Question réelle : faut-il un formulaire, un agenda standard, une plateforme métier, une solution avec paiement ou une intégration sur mesure ?
Décision attendue : choisir le niveau de solution le moins complexe qui confirme honnêtement le rendez-vous et rembourse son coût complet.
Réponse actuelle en une phrase : un agenda n'est adapté que si les disponibilités et ressources permettent une vraie confirmation ; sinon, une demande de créneau claire est plus professionnelle.
Défaut qui coûte le plus de valeur : le guide promet de choisir une solution, mais ne compare aucun produit, aucun coût complet et aucun seuil d'équilibre.
Niveau actuel : B
Priorité : haute
Statut : audité / à réécrire
```

Le guide possède une excellente idée centrale : le libellé « Réserver » est une promesse, pas un bouton décoratif. Les quatre promesses — demande, disponibilité, confirmation, suite — parlent au dirigeant et au client. La distinction entre confirmation directe et demande de créneau est plus honnête que la plupart des comparatifs de logiciels. Le cas de la salle partagée rend aussi visible une erreur opérationnelle réelle.

Mais l’article ne répond pas encore complètement à son propre titre. Il compare six familles de solution sans nommer les fonctions qui les distinguent, sans prix daté, sans coût de paramétrage, sans temps d’administration et sans horizon. Un lecteur peut comprendre le problème puis rester incapable de choisir entre l’outil déjà inclus dans Google Workspace ou Microsoft 365, un planificateur spécialisé, une plateforme verticale, un module avec paiement ou une intégration.

La position professionnelle à assumer est la suivante :

> Pour une personne, un service et une durée simple, commencez par l’outil standard déjà payé ou un planificateur léger. Passez à une plateforme métier quand ressources, paiement, liste d’attente ou parcours sectoriel sont réellement utilisés. Ne développez sur mesure que si des règles inter-systèmes mesurées coûtent davantage que l’intégration sur l’horizon retenu.

Cette position est tranchée, favorable au lecteur et potentiellement défavorable à la vente d’un développement inutile : c’est précisément ce qui augmente la conversion qualifiée.

### Score avant correction

| Axe | Note /10 | Preuve localisable | Manque décisif |
| --- | ---: | --- | --- |
| Intention | 9 | L’ouverture répond immédiatement « confirmation ou demande » | Le titre promet un choix de solution que l’article ne termine pas |
| Décision | 8 | Six familles et conditions d’adéquation | Aucun arbre de décision avec coût d’équilibre |
| Pédagogie | 9 | Quatre promesses, cinq rendez-vous à rejouer, cas Studio Liseron | Aucun parcours complet de réservation jusqu’au rendez-vous réalisé |
| Profondeur | 7 | Ressources, données, paiement, échecs et mesure sont couverts | Accessibilité multicanale, sécurité, sous-traitants, migration, sortie et adoption restent insuffisants |
| Preuve | 6 | CNIL et WCAG sont des sources primaires solides | Pas de test produit, de documentation éditeur, de preuve avant/après ni de cas réel |
| Comparaison | 5 | Six familles sont nommées | Aucun produit, tarif, TCO, limite fonctionnelle ou horizon commun |
| Originalité | 8 | Cadre des quatre promesses et distinction demande/confirmation | Aucun outil propriétaire ou banc d’essai |
| Style | 9 | Ton clair, humain, professionnel et non commercial | Quelques recommandations restent abstraites faute de chiffres |
| Conversion | 8 | CTA demande services, ressources et cas d’échec | Pas de diagnostic immédiat, de matrice ou de calculateur à emporter |
| SEO/produit | 7 | Bonne intention, FAQ, maillage et données structurées | Entités logicielles, requêtes prix/comparatif/intégration et preuve originale manquent |

Total : **76/100**

## 2. Ce que le guide dit réellement

- **Réponse dans les 150 premiers mots :** oui. Il faut afficher une confirmation seulement si le système peut réellement vérifier toutes les ressources ; sinon, proposer une demande avec délai de réponse.
- **Progression :** quatre promesses, replay de cinq rendez-vous, ressources partagées, minimisation des données, paiement, six familles de solution, échecs, mesure jusqu’au rendez-vous réalisé.
- **Verdict actuel :** le sur-mesure n’est plausible que lorsque plusieurs ressources, règles, droits, étapes ou logiciels doivent décider ensemble.
- **Exemple :** Studio Liseron, deux intervenantes et une salle, avec quinze minutes de préparation. Le cas explique la collision mais ne calcule ni capacité ni coût.
- **Comparaison :** formulaire, lien d’agenda, plateforme métier, réservation avec paiement, intégration ciblée, absence de réservation directe. Les catégories sont pertinentes mais non testées.
- **Données :** principe de minimisation et conservation selon finalité correctement introduits.
- **Accessibilité :** la source WCAG 2.2 est réduite à l’assistance à la saisie ; le parcours complet, le clavier, le focus, les messages d’état, l’authentification et un canal alternatif restent peu traités.
- **Paiement :** le guide évoque acompte, annulation et remboursement sans comparer les frais, le risque de litige ni le parcours d’échec.
- **Mesure :** le guide recommande d’aller jusqu’au rendez-vous réalisé, ce qui est juste, mais ne donne aucun funnel chiffré.
- **CTA :** cohérent et non trompeur ; il demande précisément les ressources et un cas de double réservation.
- **Élément faussement complet :** « six solutions » ressemble à un comparatif alors qu’aucun lecteur ne peut encore calculer le TCO ou vérifier une fonction.

## 3. Benchmark France et international

Requêtes, pays, langues et date :

- France, français : « prise rendez-vous en ligne site internet comparatif », « logiciel réservation prix TPE », « module rendez-vous ressources paiement » ;
- États-Unis / international, anglais : « appointment scheduling pricing resource management no-show » ;
- Royaume-Uni, anglais : « appointment service pattern online booking accessibility » ;
- Canada, anglais et français : « accessible booking service alternate channel » ;
- recherche effectuée le 24 juillet 2026 ; les prix et fonctions doivent être redatés avant toute publication.

### Saturation

La concurrence est saturée sur les promesses « disponible 24/7 », « moins d’appels », « rappels automatiques » et « synchronisation d’agenda ». Les comparatifs de logiciels ajoutent des listes et des prix, mais très peu comparent :

- la confirmation réelle plutôt qu’un formulaire maquillé ;
- la disponibilité combinée d’une personne, d’une salle et d’un équipement ;
- le temps d’exception restant après automatisation ;
- le funnel jusqu’au rendez-vous réalisé ;
- le coût de sortie et de migration ;
- un canal accessible alternatif ;
- la différence entre prix de licence et coût complet.

Une nouvelle ressource n’ajoute plus de valeur lorsqu’elle ne fait que nommer un outil supplémentaire. Le benchmark devient suffisant quand les catégories fonctionnelles, les modèles de prix, les besoins d’accessibilité et les scénarios d’échec ne changent plus. Le gain restant doit venir d’un test et de calculs propriétaires.

| Ressource et URL directe | Pays | Réponse utile | Preuve, outil ou exemple | Limite | Apport à vérifier ou adapter |
| --- | --- | --- | --- | --- | --- |
| [France Num — Prise de rendez-vous en ligne](https://www.francenum.gouv.fr/guides-et-conseils/developpement-commercial/gestion-de-la-relation-client/la-prise-de-rendez-vous) | France | Panorama TPE/PME, bénéfices, critères et outils | Page officielle mise à jour le 19 juin 2025 ; rappelle de conserver le téléphone | Certains chiffres viennent de tiers et la liste de prix vieillit vite | Dépasser le panorama par un TCO et une méthode de sélection |
| [Codeur.com — Comparatif 2026](https://www.codeur.com/comparatif/logiciel-prise-de-rendez-vous-en-ligne) | France | Large liste actuelle et prix visibles | Bonne couverture de la SERP transactionnelle | Comparateur commercial ; exactitude à vérifier chez chaque éditeur | Comprendre les entités recherchées, pas l’utiliser comme preuve |
| [CNIL — Minimiser les données](https://www.cnil.fr/fr/minimiser-les-donnees-collectees) | France | Principe de minimisation | Source primaire | Ne choisit pas un logiciel | Transformer le principe en test champ par champ |
| [CNIL — Durées de conservation](https://www.cnil.fr/fr/passer-laction/les-durees-de-conservation-des-donnees) | France | Conservation selon finalité | Source primaire | Pas de durée unique pour tous les rendez-vous | Exiger finalité, durée, purge et preuve |
| [Google Calendar — Appointment schedules](https://support.google.com/calendar/answer/11608416?hl=en-GB) | États-Unis / international | Page de réservation, disponibilités, intégration au calendrier, options premium | Documentation officielle | Certaines fonctions dépendent du compte ; les salles ne sont pas réservées automatiquement dans tous les scénarios | Ajouter une option « outil déjà inclus » et vérifier les limites de ressources |
| [Microsoft Bookings — Overview](https://learn.microsoft.com/en-us/microsoft-365/bookings/bookings-overview?view=o365-worldwide) | États-Unis / international | Staff, services, pages partagées, Outlook/Teams, stockage dans Microsoft 365 | Documentation officielle, mise à jour 2 avril 2025 | Inclus seulement dans des abonnements éligibles ; performance non prouvée | Comparer coût incrémental nul ou faible si la suite est déjà payée |
| [Calendly — Pricing](https://calendly.com/pricing) | États-Unis / international | Plan individuel, équipe, routage, paiements et intégrations | Le 24 juillet 2026, page officielle affichant notamment 10 $/siège/mois en annuel pour Standard et 16 $ pour Teams | Devise, taxes, promotion et territoire ; pas une preuve de ROI | Montrer comment dater un prix et remplacer par le devis réel |
| [Cal.com — Pricing](https://cal.com/pricing) | États-Unis / international | Individuel, équipe, organisation, API et options de contrôle | Le 24 juillet 2026, page officielle affichant notamment 12 $/utilisateur/mois en annuel pour Teams | Les mentions de conformité ne valent pas validation du contexte client | Comparer API, sortie et contrôle, pas seulement prix |
| [Square Appointments — Pricing](https://squareup.com/us/en/appointments/pricing) | États-Unis | Paiement, acompte, no-show, multi-staff, liste d’attente et ressources | Source produit détaillée | Page et offre américaines ; non transposables automatiquement en France | Illustrer le passage d’agenda à plateforme opérationnelle |
| [MOJ Design System — Appointments pattern](https://design-patterns.service.justice.gov.uk/service-patterns/appointment/) | Royaume-Uni | Besoins utilisateur : canal, format, langue, préparation, changement et accompagnant | Pattern public fondé sur plusieurs services | Preuve de concept, pas standard commercial | Élargir le guide au service complet et pas seulement au widget |
| [NHS England — Online appointment booking](https://www.england.nhs.uk/long-read/online-appointment-booking/) | Royaume-Uni | Nommage clair des créneaux, capacités, barrières numériques, staff et mesure | Cas opérationnels et chiffre contextualisé sur les absences | Secteur santé UK ; ne pas généraliser causalité ou taux | Ajouter mauvaises réservations, inclusion et formation |
| [W3C — WCAG 2.2](https://www.w3.org/TR/WCAG22/) | International | Exigences sur clavier, focus, erreurs, authentification, saisie et processus | Standard primaire | Ne garantit pas à lui seul l’accessibilité réelle | Tester le parcours complet, pas seulement trois champs |
| [Accessibility Standards Canada — Accessible Service Delivery 2026](https://accessible.canada.ca/standards-and-technical-guides/standards-and-technical-guides-database/can-asc-5212026-accessible-service-delivery?mode=full-html) | Canada | Méthodes alternatives faciles à trouver, langage clair et consultation des personnes handicapées | Standard public publié en 2026 | Portée juridique canadienne ; non transposable comme obligation française | Apport international majeur : un canal alternatif ne doit pas être caché |

## 4. Matrice de gain d’information

| Question décisive | Meilleure réponse française | Apport international | Couverture actuelle | Manque | Réponse supérieure à produire |
| --- | --- | --- | --- | --- | --- |
| Réserver ou demander ? | Rarement distingué clairement | MOJ : besoins et statut explicites | Excellente | Aucun test de formulation | Maquettes « demander » et « réserver », avec preuves de statut |
| Quel outil simple choisir ? | Listes de produits et prix | Google/Microsoft : solutions potentiellement déjà incluses | Absent | Pas de produits nommés | Matrice datée : inclus, planificateur, vertical, intégration |
| Comment éviter les doubles réservations ? | Synchronisation de calendrier | Square, Google et Microsoft détaillent ressources et staff avec limites | Bon concept | Aucun calcul de capacité ni test | Cas reproductible personne + salle + préparation |
| Quel coût complet ? | Abonnement mensuel | Les pages éditeurs montrent sièges, plans et fonctions | Absent | Setup, administration, paiement, migration et sortie | TCO 36 mois à périmètre égal |
| Les rappels réduisent-ils les absences ? | Affirmation marketing fréquente | NHS apporte un contexte, mais pas une causalité universelle des rappels | Affirmation prudente | Pas de baseline ni sensibilité | Mesure avant/après avec annulations, no-shows et rendez-vous réalisés |
| Le parcours est-il accessible ? | WCAG souvent réduite au formulaire | MOJ, NHS et Canada ajoutent canal, langue, soutien et alternative | Faible | Parcours complet et canal alternatif | Checklist clavier/mobile/lecteur d’écran/aide/téléphone |
| Que deviennent les données ? | RGPD générique | Microsoft documente son stockage ; API/export varient selon les produits | Minimisation présente | Sous-traitant, transferts, export, purge et sortie | Fiche de gouvernance par outil et test d’export |
| Quand le sur-mesure gagne-t-il ? | Souvent vendu sur la « flexibilité » | API/routage/ressources des produits montrent le niveau déjà standard | Condition générale présente | Aucun coût d’équilibre | Sur-mesure seulement si coût mesuré des exceptions > surcoût sur l’horizon |

## 5. Faits et fraîcheur

| Affirmation du guide | Verdict | Source primaire actuelle | Périmètre et date | Correction |
| --- | --- | --- | --- | --- |
| Il faut demander seulement les données nécessaires | Confirmé | [CNIL](https://www.cnil.fr/fr/minimiser-les-donnees-collectees) | Traitements de données en France | Conserver et ajouter une justification par champ |
| La durée dépend de la finalité | Confirmé | [CNIL](https://www.cnil.fr/fr/passer-laction/les-durees-de-conservation-des-donnees) | France, principe général | Ajouter purge, sauvegardes, preuve et finalités distinctes |
| Une confirmation automatique exige des ressources réellement disponibles | Confirmé comme règle de service, pas comme norme juridique | [Google Calendar](https://support.google.com/calendar/answer/190998?hl=en) et [Square](https://squareup.com/us/en/appointments/pricing) documentent disponibilités et ressources avec des capacités différentes | Fonctions éditeurs actuelles | Transformer en tests produit, car aucune catégorie ne garantit toutes les ressources |
| Les rappels réduisent les absences | À nuancer | [NHS England](https://www.england.nhs.uk/long-read/online-appointment-booking/) indique notamment une probabilité d’absence plus faible pour des rendez-vous pris en ligne et évoque les rappels | Santé UK ; données 2021 citées par la page | Ne pas attribuer automatiquement l’écart au rappel ; mesurer dans l’entreprise |
| Les WCAG 2.2 couvrent l’assistance à la saisie | Confirmé mais incomplet | [W3C WCAG 2.2](https://www.w3.org/TR/WCAG22/) | Standard international | Élargir à clavier, focus, messages d’état, erreurs, authentification et processus complet |
| Un canal numérique suffit si le formulaire est accessible | Faux si ajouté ; non affirmé actuellement | [Canada ASC 5.2.1:2026](https://accessible.canada.ca/standards-and-technical-guides/standards-and-technical-guides-database/can-asc-5212026-accessible-service-delivery?mode=full-html) et [MOJ](https://design-patterns.service.justice.gov.uk/service-patterns/appointment/) | Apport international, pas obligation française générale | Afficher un moyen alternatif simple et accessible |
| Un outil standard peut gérer paiement, ressources et no-show | Confirmé pour certains plans, pas tous | [Square US](https://squareup.com/us/en/appointments/pricing), [Google](https://support.google.com/calendar/answer/11608416?hl=en-GB), [Microsoft](https://learn.microsoft.com/en-us/microsoft-365/bookings/bookings-overview?view=o365-worldwide) | Fonctions et territoires différents, vérifiés le 24 juillet 2026 | Comparer plan et territoire exacts ; ne pas écrire « les agendas savent le faire » |
| Les prix d’un comparatif restent actuels | Invérifiable sans date | Pages officielles [Calendly](https://calendly.com/pricing) et [Cal.com](https://cal.com/pricing) | Prix affichés au 24 juillet 2026 | Dater, indiquer devise/facturation et inviter à remplacer par un devis |

### Contradictions

- Aucune contradiction factuelle majeure n’a été trouvée.
- Le guide conseille une source unique de disponibilité, tout en listant des intégrations multi-outils. Ce n’est pas contradictoire si « source unique » signifie autorité de décision, mais cette définition doit être écrite.
- Le guide couvre l’accessibilité par l’assistance à la saisie, alors que son propre parcours inclut choix de créneau, paiement, confirmation, modification et annulation. La source est exacte, la couverture est trop étroite.

### Faits à retirer plutôt qu’à affaiblir

- Aucun fait actuel n’est à retirer.
- Ne pas reprendre sans contrôle le « 34 % des Français » cité par France Num, car la source amont et l’année doivent être retrouvées.
- Ne pas publier un taux moyen de baisse des no-shows comme promesse.
- Ne pas présenter une certification, une mention de conformité ou un hébergement éditeur comme validation juridique du client.

## 6. Scénarios et calculs à construire

Les valeurs suivantes sont **illustratives, hors taxes et remplaçables**. Elles ne constituent ni un prix de marché ni une promesse de gain.

### Scénario 1 — Temps administratif réellement évitable

Une entreprise gère 120 rendez-vous par mois. Les échanges manuels prennent six minutes par rendez-vous. Après automatisation, les exceptions prennent encore deux minutes en moyenne.

```text
Temps libérable = 120 × (6 - 2) min = 480 min = 8 h/mois
Capacité valorisée = 8 h × 32 €/h = 256 €/mois
Capacité annuelle = 3 072 €
```

**Contrôle inverse :** si ces huit heures ne réduisent ni heures supplémentaires, prestation externe ni travail prioritaire en retard, elles ne sont pas une économie de trésorerie. Le guide doit demander ce que l’équipe fera réellement du temps.

### Scénario 2 — Funnel jusqu’au rendez-vous réalisé

```text
1 000 visites qualifiées
120 ouvertures du parcours
80 confirmations
- 8 annulations
- 6 absences
= 66 rendez-vous réalisés
```

| Indicateur | Calcul | Résultat |
| --- | --- | ---: |
| Visite → ouverture | 120 / 1 000 | 12 % |
| Ouverture → confirmation | 80 / 120 | 66,7 % |
| Ouverture → rendez-vous réalisé | 66 / 120 | 55 % |
| Visite → rendez-vous réalisé | 66 / 1 000 | 6,6 % |
| Surestimation si l’on annonce seulement 80 réservations | 80 / 66 - 1 | 21,2 % |

Ce funnel empêche de qualifier de succès un simple clic ou une confirmation qui ne produit pas le rendez-vous.

### Scénario 3 — Valeur d’une baisse de no-show

Hypothèses : 100 rendez-vous confirmés par mois, marge contributive de 60 € par rendez-vous, taux d’absence initial de 12 %.

| Baisse observée après changement | Rendez-vous récupérés | Marge mensuelle potentielle |
| ---: | ---: | ---: |
| 0 point | 0 | 0 € |
| 4 points, de 12 % à 8 % | 4 | 240 € |
| 8 points, de 12 % à 4 % | 8 | 480 € |

Il faut retrancher frais de SMS, paiement, remboursements, litiges et temps de suivi. Une mesure avant/après doit distinguer rappel, acompte, facilité d’annulation et changement de clientèle.

### Scénario 4 — Capacité d’une ressource partagée

Deux intervenants offrent chacun huit créneaux d’une heure, mais utilisent une seule salle.

```text
Capacité affichée si l'outil ne regarde que les personnes = 2 × 8 = 16
Capacité réelle de la salle = 8
Risque maximal de sur-réservation = 8 créneaux/jour
```

Si chaque prestation dure 60 minutes et exige 15 minutes de préparation :

```text
Capacité réelle sur 8 h = partie entière de 480 / 75 = 6 rendez-vous
Capacité naïve = 8
Écart = 2 rendez-vous/jour
```

Ce calcul simple apporte plus de valeur qu’une liste de vingt fonctionnalités.

### Scénario 5 — TCO sur 36 mois, même besoin multi-ressource

Besoin commun : réservation sur le site, deux ressources, rappels, modification, export, mesure et procédure de sortie.

| Poste sur 36 mois | Planificateur standard + exceptions | Plateforme métier | Intégration ciblée |
| --- | ---: | ---: | ---: |
| Mise en place | 1 000 € | 2 000 € | 12 000 € |
| Abonnement / tiers | 60 € × 36 = 2 160 € | 180 € × 36 = 6 480 € | 60 € × 36 = 2 160 € |
| Maintenance spécifique | 0 € | 0 € | 2 400 € × 3 = 7 200 € |
| Administration | 12 h × 35 € × 36 = 15 120 € | 4 h × 35 € × 36 = 5 040 € | 2 h × 35 € × 36 = 2 520 € |
| Sortie / export | 500 € | 1 000 € | 2 000 € |
| **TCO illustratif** | **18 780 €** | **14 520 €** | **25 880 €** |

Dans ce cas, la plateforme métier gagne malgré un abonnement supérieur. Si le planificateur standard ne laisse que trois heures d’administration par mois, son TCO tombe à 7 440 € et il gagne largement.

Le point d’équilibre entre standard et plateforme se situe ici à environ **8,62 heures d’administration mensuelle** pour le standard :

```text
4 h de base côté plateforme
+ (5 820 € de surcoût fixe / 35 € / 36 mois)
= 8,62 h/mois
```

L’intégration ciblée doit produire au moins 11 360 € de bénéfice supplémentaire sur 36 mois par rapport à la plateforme, soit environ 316 €/mois, pour revenir à égalité dans ce scénario.

### Variables de sensibilité obligatoires

| Variable | Simple | Central | Exigeant | Source ou hypothèse |
| --- | ---: | ---: | ---: | --- |
| Rendez-vous mensuels | 30 | 120 | 500 | Historique réel |
| Temps manuel résiduel | 1 h | 8 h | 20 h | Chronométrage des exceptions |
| Baisse de no-show | 0 point | 4 points | 8 points | Mesure avant/après |
| Ressources simultanées | 1 | 2 | 5+ | Cartographie opérationnelle |
| Horizon | 12 mois | 36 mois | 60 mois | Durée de vie et engagement |

```text
Formule : TCO = mise en place + licences + frais variables + administration + maintenance + migration + sortie.
Horizon : 36 mois.
Inclus : même parcours de réservation et même exigence de ressources.
Exclus : vente incrémentale non prouvée, réputation et temps déjà non valorisable.
Résultat : l'abonnement le moins cher n'est pas toujours l'option la moins chère.
Analyse de sensibilité : volume, temps d'exception, no-show, ressources et frais de paiement.
Variable qui fait basculer la décision : heures mensuelles d'exception réellement évitables.
Contrôle inverse : tester le cas où l'outil déjà inclus suffit.
```

## 7. Comparaison et position professionnelle

```text
Options réellement comparables : demande de créneau ; outil inclus dans la suite ; planificateur spécialisé ; plateforme métier ; module paiement/réservation ; intégration ciblée ; développement spécifique.
Périmètre et horizon communs : même volume, ressources, paiement, rappels, modifications, support, export et 36 mois.
Option la moins chère : souvent l'outil déjà payé ou un formulaire honnête lorsque la confirmation automatique n'est pas nécessaire.
Option la moins risquée : plateforme standard ou métier éprouvée si elle couvre réellement ressources, paiement, données et sortie.
Option qui demande le moins de temps interne : celle qui réduit les exceptions mesurées, pas celle qui a le moins d'écrans.
Position Hagnéré Code pour le cas fréquent : standard d'abord ; vertical lorsque le métier impose ressources et parcours ; intégration ciblée avant développement complet.
Faits qui la fondent : test des ressources, funnel réalisé, temps administratif, plan/fonctions officiels, export et TCO.
Cas où l'option opposée gagne : règles inter-systèmes stables et nombreuses, coût d'exception élevé, exigence de contrôle ou d'expérience non couverte, et bénéfice supérieur au surcoût sur l'horizon.
Signal de révision : dépassement du volume, temps d'exception au-dessus du point d'équilibre, double réservation, changement de modèle de paiement, besoin réglementaire ou échec d'export.
Ce que nous déconseillons même si nous pourrions le vendre : agenda sur mesure pour une seule personne et une durée ; faux bouton « Réserver » ; développement pour la seule personnalisation visuelle ; collecte de données « au cas où ».
```

L’article doit nommer les produits sans se transformer en comparateur d’affiliation. Les produits servent à montrer des familles et des limites datées. Le verdict se fonde ensuite sur les données du lecteur.

## 8. Objections et cas limites

| Objection loyale | Réponse prouvée | Ce qui reste incertain | Conséquence |
| --- | --- | --- | --- |
| « Calendly ou Google suffit » | Oui pour de nombreux cas simples ; les documentations officielles montrent déjà de nombreuses fonctions | Ressources, paiement, droits et export varient selon plan | Tester cinq rendez-vous et deux exceptions avant d’acheter plus |
| « Je veux une expérience entièrement à ma marque » | L’intégration visuelle peut être améliorée sans reconstruire le moteur | Les limites d’embed, cookies et accessibilité varient | Chiffrer l’écart de conversion réel avant un build |
| « Les rappels supprimeront les absences » | Ils peuvent aider, mais aucune baisse universelle n’est prouvée | Clientèle, délai, acompte et annulation influencent le résultat | Établir baseline et test sur une période comparable |
| « L’acompte est toujours la solution » | Il peut réduire certains no-shows et sécuriser un créneau | Il peut aussi réduire la conversion ou créer des remboursements | Tester par service et intégrer les frais/retours |
| « Tout doit être réservable en ligne » | Le NHS limite certains types et conserve du contrôle | Urgence, triage ou validation peuvent exiger une demande | Nommer clairement les services directement confirmables |
| « Un formulaire accessible suffit » | WCAG couvre davantage que la saisie ; MOJ et Canada insistent sur le service complet et les alternatives | Le niveau réel exige des tests utilisateurs | Ajouter téléphone/rappel facile à trouver et tester le parcours |
| « Nous traitons des données de santé » | La minimisation reste nécessaire | Base légale, hébergement, sous-traitants et règles sectorielles exigent une analyse propre | Ne pas déduire la conformité d’un logo éditeur ; conseil spécialisé |
| « Le prix mensuel est faible » | Le TCO peut être dominé par administration, paiement, migration et sortie | Les volumes et exceptions varient | Comparer 36 mois et non le prix d’appel |
| « Nous ne voulons pas dépendre d’un éditeur » | Une intégration contrôlée peut améliorer la sortie | Le sur-mesure crée aussi dépendance, maintenance et sécurité | Tester export, API, propriété des comptes et procédure de reprise |

## 9. Plan de réécriture

| Ordre | Section proposée | Question résolue | Preuve, scénario ou outil | Décision produite | À conserver / créer / couper |
| ---: | --- | --- | --- | --- | --- |
| 1 | Verdict en 150 mots | Quel niveau choisir ? | Position standard → vertical → intégration | Éviter le sur-mesure réflexe | Réécrire l’ouverture en conservant demande/confirmation |
| 2 | Les quatre promesses | Qu’est-ce qu’un vrai rendez-vous ? | Tableau actuel | Nommer le bon statut | Conserver |
| 3 | Rejouer cinq cas | Quelles règles existent déjà ? | Fiche actuelle + annulation/no-show | Écrire le besoin réel | Conserver et rendre téléchargeable |
| 4 | Calcul de capacité | Personne, salle et préparation sont-elles libres ? | Scénario 16/8/6 créneaux | Choisir un moteur de ressources | Créer |
| 5 | Comparatif produit daté | Qu’est-ce qui est déjà disponible ? | Google, Microsoft, Calendly, Cal.com, Square et un vertical français | Présélectionner une famille | Créer, daté et sans affiliation |
| 6 | TCO 36 mois | Quel coût complet ? | Trois options et point d’équilibre | Choisir sur le coût total | Créer |
| 7 | Funnel réel | Le parcours produit-il des rendez-vous ? | 1 000 → 66 | Mesurer le bon résultat | Renforcer |
| 8 | No-show et paiement | Rappel ou acompte sont-ils rentables ? | Sensibilité 0/4/8 points | Tester sans promesse | Créer |
| 9 | Données et sortie | Peut-on limiter, purger et récupérer ? | CNIL + test d’export | Écarter un outil non gouvernable | Renforcer |
| 10 | Accessibilité et canaux | Qui reste exclu ? | WCAG, MOJ, NHS, Canada | Ajouter un parcours alternatif | Créer |
| 11 | Cas où le sur-mesure gagne | Quelles règles justifient le build ? | Coût d’exception > surcoût | Autoriser une intégration qualifiée | Créer |
| 12 | CTA-diagnostic | Que faire maintenant ? | Matrice + calculateur + cinq cas | Arriver avec un dossier exploitable | Transformer |

### Contrat des 150 premiers mots

- Commencer par : « Vous hésitez entre un simple lien d’agenda, une plateforme de réservation et une intégration sur votre site. »
- Répondre : l’outil simple gagne si une personne et un agenda suffisent ; une demande gagne si la confirmation n’est pas certaine ; le sur-mesure n’arrive qu’après mesure des exceptions.
- Annoncer les critères : ressources, paiement, données, accessibilité, temps administratif et coût sur 36 mois.
- Promettre un comparatif daté et des calculs remplaçables.
- Ne promettre ni hausse de conversion ni baisse de no-show sans test.

### Éléments à supprimer

- Aucune section de fond n’est à supprimer.
- Réduire les répétitions sur l’honnêteté du libellé après l’avoir démontrée.
- Éviter une liste exhaustive de vingt outils : cinq familles et quelques représentants primaires suffisent.

### Éléments à conserver

- La distinction demande/confirmation.
- Les quatre promesses.
- Le replay de cinq rendez-vous.
- Studio Liseron et les ressources partagées.
- La minimisation des données.
- La prudence sur paiement, annulation et remboursement.
- Les six familles, réorganisées avec produits et TCO.
- La mesure jusqu’au rendez-vous réalisé.
- Le CTA centré sur un cas d’échec.

## 10. Contre-audit après correction

La page n’a pas été modifiée dans ce lot. Aucun score après correction n’est attribué.

| Problème | Priorité | Correction appliquée | Revalidation indépendante |
| --- | --- | --- | --- |
| Comparatif sans produits ni plans | P0 | Non appliquée dans ce lot | Rouvrir chaque page éditeur et dater devise/territoire |
| Aucun TCO ni point d’équilibre | P0 | Non appliquée dans ce lot | Refaire calculs et vérifier même périmètre |
| Accessibilité trop étroite | P1 | Non appliquée dans ce lot | Test clavier, mobile, lecteur d’écran et canal alternatif |
| Aucune preuve avant/après | P1 | Non appliquée dans ce lot | Mesurer funnel et temps sur un pilote |
| Données/exit incomplets | P1 | Non appliquée dans ce lot | Test export, purge, sous-traitants et responsabilités |
| Opinion professionnelle implicite | P2 | Non appliquée dans ce lot | Test de compréhension par un dirigeant |

### Score après correction

| Axe | Note /10 | Preuve localisable | Manque résiduel |
| --- | ---: | --- | --- |
| Intention | N/A | Réécriture non réalisée | À contre-auditer |
| Décision | N/A | Réécriture non réalisée | À contre-auditer |
| Pédagogie | N/A | Réécriture non réalisée | À contre-auditer |
| Profondeur | N/A | Réécriture non réalisée | À contre-auditer |
| Preuve | N/A | Réécriture non réalisée | À contre-auditer |
| Comparaison | N/A | Réécriture non réalisée | À contre-auditer |
| Originalité | N/A | Réécriture non réalisée | À contre-auditer |
| Style | N/A | Réécriture non réalisée | À contre-auditer |
| Conversion | N/A | Réécriture non réalisée | À contre-auditer |
| SEO/produit | N/A | Réécriture non réalisée | À contre-auditer |

Total : **non attribué**

Critère d’acceptation futur : **au moins 90/100, aucun axe sous 8/10**, au moins un test produit réellement exécuté, calculs refaits, sources datées et contrôle responsive/accessibilité du parcours.

## 11. Preuves techniques et visuelles

```text
Manifeste : page et recherche existante relues ; snapshot SHA-256 consigné en tête.
Calculs refaits : oui, via un script Node indépendant le 24 juillet 2026.
Sources rouvertes : CNIL, W3C, France Num, Google, Microsoft, Calendly, Cal.com, Square, MOJ, NHS et Canada.
Liens vérifiés : ouverture web effectuée le 24 juillet 2026 ; fonctions et tarifs à redater au moment de la réécriture.
Commandes : shasum -a 256 ; calculs Node des funnels, capacités, TCO et sensibilités.
Rendu 320 / 390 / 768 / 1024 / 1440 : non exécuté, car aucune page publique n'a été modifiée.
Image sociale : non auditée dans ce lot éditorial.
Statut maximal prouvé : audit éditorial complet et plan de réécriture, pas correction publique.
Réserve publication / indexation : aucune preuve de déploiement ou d'indexation n'est produite par cet audit.
```
