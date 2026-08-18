# Audit giga — `contrat-tma-application`

**Date :** 24 juillet 2026  
**Auditeur :** contre-audit indépendant P3, en lecture seule  
**Périmètre :** page, registre, dossier de recherche, image sociale, maillage, données structurées, sources juridiques et sécurité, benchmark France/États-Unis/Royaume-Uni/Australie, calculs, rendu local et tests ciblés.  
**Limite :** l'audit ne constitue ni un avis juridique, ni une certification de sécurité, ni une preuve de déploiement ou d'indexation.

## 1. Verdict exécutif

```text
Lecteur exact : dirigeant ou responsable métier d'une PME française qui dépend d'une application et doit choisir, renouveler ou reprendre sa maintenance.
Question réelle : « Si l'application tombe, qui agit, sous quel délai, pour quel résultat, à quel coût, et comment puis-je changer d'équipe ? »
Décision attendue : signer, renégocier, organiser une reprise, choisir un support ponctuel/interne ou refuser.
Réponse actuelle : un contrat TMA n'est pilotable que si le périmètre, la chronologie d'incident, la facture, les responsabilités et la sortie sont testables.
Défaut qui coûte le plus de valeur : les trois scénarios de prix/SLA sont qualitatifs ; le dirigeant ne peut pas refaire un calcul chiffré ni voir le point de bascule entre support ponctuel, équipe interne et TMA.
Niveau actuel : B — très bon guide opérationnel, pas encore référence exhaustive.
Priorité : haute (P1), sans P0.
Statut : audité ; à reprendre sur les scénarios, la continuité, les responsabilités et la fraîcheur éditoriale.
```

### Score avant correction

| Axe | Note /10 | Preuve localisable | Manque décisif |
|---|---:|---|---|
| Intention | 9 | Incident fictif et question du dirigeant dans `page.tsx:227-248` | Ajouter un repère de coût dans l'ouverture. |
| Décision | 8 | Cinq sorties dans `page.tsx:856-895` | Pas de seuil chiffré pour choisir le mode de maintenance. |
| Pédagogie | 9 | Réponse/prise en charge/rétablissement/correction traduits dans `:322-385` | Une matrice de gravité chiffrée aiderait un non-technicien. |
| Profondeur | 8 | Périmètre, sécurité, sauvegardes, recette, sortie (`:387-839`) | Responsabilité/assurance/plafond, continuité et pénalités restent en marge. |
| Preuve | 8 | Légifrance, CNIL et ANSSI sont liés au fil de la page | Recherche annoncée au 20 juillet ; plusieurs recommandations concurrentes ne sont pas transformées en preuves mesurables. |
| Comparaison | 8 | Cinq organisations comparées dans `:576-620` | Critères économiques et niveaux de risque pas entièrement homogènes. |
| Originalité | 8 | Incident unique + simulation du mois + exercice de sortie | Les simulations n'ont pas de valeurs illustratives reproductibles. |
| Style | 9 | Voix directe, exemples fictifs étiquetés, avertissement juridique | Densité de tableaux à alterner avec un cas central chiffré. |
| Conversion | 8 | CTA après les cas adaptés/inadaptés (`:898-945`) | Le livrable de premier échange pourrait être explicité. |
| SEO/produit | 8 | Canonical, Article/BreadcrumbList, FAQ visible, maillage et OG locaux | `dateModified` du registre reste au 21/07 ; production/indexation non prouvées. |
| **Total** | **83/100** | Base solide et utile | **Sous le seuil de 90 ; NO-GO comme page de référence.** |

**P0 : aucun.**  
**P1 :** scénarios chiffrés et sensibilité ; matrice SLA/continuité ; responsabilités, assurance, plafonds et conséquences ; contrôle de fraîcheur avant publication.  
**P2 :** exclusions détaillées, garantie/maintenance après livraison, gouvernance et changement de prix, dépendance aux personnes, composants tiers et licence/escrow.

## 2. Ce que le guide dit réellement

### Parcours existant

Le guide ouvre par un lundi matin fictif où des documents d'expédition sont bloqués, puis définit la TMA et promet de permettre cinq décisions (`page.tsx:227-248`). Il pose correctement la frontière juridique (“guide opérationnel, pas modèle juridique”) et demande une relecture professionnelle lorsque l'enjeu le justifie (`:250-260`).

La progression est cohérente :

1. quatre réponses minimales : couverture, reprise d'activité, facture, changement d'équipe (`:262-295`) ;
2. replay du premier incident, de l'alerte à la clôture (`:322-385`) ;
3. périmètre correctif/préventif/adaptatif/évolutif/assistance/exploitation (`:387-467`) ;
4. consommation réelle d'un forfait et trois mois types (`:469-620`) ;
5. livraison, tests, production, retour arrière et recette (`:622-666`) ;
6. accès, données, sauvegardes, sous-traitants et alerte RGPD (`:668-761`) ;
7. reporting et réversibilité (`:763-850`) ;
8. signer, corriger, support ponctuel, reprise ou refus (`:852-933`) ;
9. CTA et sources (`:935-1047`).

### Ce qu'un lecteur peut décider

- Il sait qu'une réponse automatique n'est pas une prise en charge et qu'une prise en charge n'est pas un rétablissement.
- Il peut faire préciser chaque famille de maintenance comme incluse, plafonnée, séparée ou exclue.
- Il peut simuler un mois calme, un mois chargé et une urgence hors horaires.
- Il peut demander des comptes nominatifs, un journal d'intervention, un test de restauration et un exercice de sortie.
- Il peut conclure qu'il faut une reprise avant de signer, ce qui protège la crédibilité commerciale.

### Ce qui paraît complet mais reste insuffisant

- “Trois mois types” ne donne aucun montant, formule HT/TTC, unité interne ou coût horaire : il faut demander au prestataire de remplir le vide.
- Les délais sont bien définis conceptuellement, mais aucun exemple de matrice P1/P2/P3 ne montre ce que signifierait 2 h de réponse, 4 h de rétablissement ou une pause justifiée.
- La sécurité traite accès, RGPD et sauvegardes, mais ne couvre pas explicitement MFA, secrets, correctifs critiques, RTO/RPO, chiffrement, vulnérabilités, fournisseur en faillite ou risque de personne-clé.
- La clause juridique d'avertissement cite responsabilité, assurance, pénalités, résiliation, droit et litiges, sans donner la checklist minimale permettant de les négocier.
- La réversibilité est excellente sur les actifs, mais le lecteur ne voit pas le coût, la durée, la propriété des composants tiers ni le test si l'éditeur sortant cesse son activité.

## 3. Benchmark France et international

### Recherche

Requêtes exécutées le 24 juillet 2026 :

- France : `contrat TMA maintenance applicative SLA clauses prix réversibilité PME` ;
- États-Unis : `software maintenance agreement SLA incident response service credits source code escrow` ;
- Royaume-Uni : `software support maintenance agreement service levels transition out` ;
- Australie : `software support maintenance agreement SLA incident response support contract`.

### Saturation

La SERP française est saturée de listes de “5 ou 7 clauses essentielles” et de pages d'avocats ou d'intégrateurs. Les pages anglophones ajoutent souvent une matrice de sévérité, la distinction réponse/résolution, des crédits de service, les versions supportées, le passage de garantie à maintenance et un plan d'exit. L'opportunité du guide n'est donc pas d'ajouter une nouvelle liste : c'est de relier chaque clause à une scène, un propriétaire, une preuve, un calcul et un droit de sortie, sans transformer les sources commerciales en droit applicable.

| Ressource et URL directe | Marché | Couverture utile | Limite | Adaptation recommandée |
|---|---|---|---|---|
| [Légifrance — CCAG-TIC, article 38](https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000043310752) | France, primaire | Définitions préventif/correctif/évolutif/adaptatif, niveaux mesurables, transition, plan de réversibilité, formats et API | Marchés publics ; le guide le précise correctement, mais l'article 38.4 mérite un lien au moment de la réversibilité. | Ajouter une phrase “exemple de nomenclature publique, pas modèle privé” près de chaque usage. |
| [CNIL — chapitre IV RGPD](https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre4) | France/UE, primaire | Article 28 : acte, instructions, sous-traitants ; article 33 : sous-traitant alerte le responsable, responsable notifie si conditions réunies | Ne remplace pas l'analyse des rôles et du risque. | Conserver la nuance 72 h et ajouter les champs minimaux de l'annexe données. |
| [ANSSI — sauvegarde des SI v1.1](https://messervices.cyber.gouv.fr/documents-guides/anssi_fondamentaux_sauvegarde_systemes_dinformation_v1.1.pdf) | France, primaire | Tests réguliers, procédure et ordre de restauration, comptes séparés, chiffrement, dépendances et durée de restauration | Recommandations, pas contrat TMA universel. | Convertir en critères de réception : test daté, résultat, limites, actions correctives. |
| [IBM — définition et métriques SLA](https://www.ibm.com/think/topics/service-level-agreement) et [réponse/résolution](https://www.ibm.com/think/topics/sla-metrics) | États-Unis/global, référence industrielle | Mesure, approbation, conséquences ; distinction réponse/résolution et escalade. | Page explicative d'un fournisseur, pas norme ni tarif. | Ajouter une mini-matrice illustrative et une formule de mesure, explicitement non contractuelle. |
| [EM Law — software support and maintenance agreements](https://emlaw.co.uk/software-support-and-maintenance-agreements/) | Royaume-Uni, cabinet | Défauts par gravité, accès limité, versions supportées, prix fixe/temps passé, crédits de service, 99,9 % et chevauchement garantie/TMA. | Analyse de droit anglais, exemples non transposables automatiquement en France. | Ajouter les questions de version supportée, garantie de livraison et crédit/recours à faire relire en droit français. |
| [Sprintlaw Australia — support and maintenance agreement](https://sprintlaw.com.au/software-it/support-and-maintenance-agreement/) | Australie, cabinet | Périmètre, horaires, catégories d'incident, escalade, frais, exclusions, confidentialité, IP, responsabilité, résiliation et obligations client. | Conseil commercial australien, pas source primaire française. | Ajouter une table “responsabilités du client” et exclusions usuelles. |
| [Standard Computers Australia — SLA](https://www.standard.com.au/service-level-agreements) | Australie, fournisseur | Exemple de niveaux bronze/silver/gold/platinum et crédits de 5 % plafonnés à 10 % ; response/on-site. | Offre d'un prestataire, non benchmark de marché. | Montrer que le crédit doit être calculable et plafonné, sans recopier ses tarifs. |
| [UK Digital Marketplace — Contract Exit and Transition](https://www.applytosupply.digitalmarketplace.service.gov.uk/g-cloud/services/225127488762998) | Royaume-Uni, marché public | Exit : revue contractuelle/commerciale, cible, organisation, continuité et transition. | Fiche fournisseur, pas obligation privée. | Ajouter la continuité pendant la passation et les critères de réception de sortie. |

Les pages concurrentes ne sont utilisées ici que pour les angles manquants. Aucun tarif, délai, pourcentage de disponibilité ou crédit ci-dessus ne doit être présenté comme tarif Hagnéré Code ou règle française.

## 4. Matrice de gain d'information

| Question décisive | Meilleure preuve actuelle | Couverture de la page | Manque | Réponse supérieure à produire |
|---|---|---|---|---|
| Quel délai est réellement promis ? | CCAG distingue niveaux mesurés ; IBM sépare réponse/résolution. | Bonne distinction textuelle (`:369-385`). | Pas de matrice gravité/horaires/pauses/escalade. | Tableau P1/P2/P3 fictif avec point de départ, réponse, rétablissement, mise à jour, conséquence. |
| Combien coûtera un mois réel ? | Le contrat doit montrer unité, arrondi, dépassement. | Trois mois types qualitatifs (`:523-565`). | Aucun calcul HT/TTC ni coût d'une heure ou d'un ticket. | Trois cas avec hypothèses modifiables et formule annuelle. |
| Que se passe-t-il hors périmètre ? | CCAG nomenclature et API tierces mentionnées. | Familles listées (`:409-447`). | Exclusions usuelles non rassemblées, responsabilités client absentes. | Table “inclus / exclu / dépendance / qui paie / délai”. |
| Qui paie si la sécurité ou les données sont touchées ? | CNIL article 28/33, ANSSI sauvegarde. | Rôles et alertes présents (`:668-761`). | Assurance, plafond, frais d'urgence, notification et conservation de preuve. | Cartographier responsabilité opérationnelle, contractuelle et juridique sans trancher le droit. |
| Une sauvegarde permet-elle vraiment de repartir ? | ANSSI exige tests et ordre de restauration. | Test demandé, sans RTO/RPO (`:701-705`, `:736-749`). | Temps, dépendances, périmètre restauré et critères d'acceptation. | Ajouter RTO/RPO comme objectifs à fixer, test et résultat. |
| Peut-on changer de prestataire ? | CCAG article 38.4 donne actifs, formats, API et plan. | Exercice de transmission très solide (`:776-839`). | Coût/délai, composants tiers, licence, escrow et insolvabilité. | Ajouter calendrier, tarif, déclencheurs et test de reprise par un tiers. |
| Une évolution est-elle un bug ? | Référence acceptée, version et test (`:458-467`). | Très bon socle. | Transition garantie/maintenance et version supportée manquantes. | Ajouter baseline, garantie post-livraison et politique de versions. |
| Quel choix hors TMA ? | Cinq organisations comparées (`:576-620`). | Bon. | Pas de critères de criticité, continuité, coût total et temps interne sur la même unité. | Scorecard cinq options avec horizon et hypothèses identiques. |
| Que peut promettre Hagnéré Code ? | Cas adapté/inadapté et reprise honnêtement indiqués (`:898-933`). | Très bon filtre commercial. | Livrable du premier échange non explicite. | Promettre une grille de périmètre + pilote, pas un SLA avant diagnostic. |

## 5. Faits, fraîcheur et cohérence

| Affirmation | Verdict | Source primaire actuelle | Périmètre/date | Correction |
|---|---|---|---|---|
| Une TMA peut être préventive, corrective, évolutive ou adaptative | Confirmée dans le périmètre CCAG-TIC | [Légifrance, art. 38.1](https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000043310752) | Marchés publics ; la page borne explicitement son usage (`:391-406`). | Conserver, ajouter la phrase de portée au voisinage du tableau. |
| Niveaux de service = indicateurs, moyens de mesure et sanctions | Confirmée pour CCAG-TIC | Légifrance art. 38.2 | Marchés publics, documents particuliers nécessaires. | Ajouter une ligne “mesure et conséquence” à la matrice SLA. |
| Article 28 RGPD : objet/durée/nature/finalité/données/personnes et obligations | Confirmée | [CNIL, chapitre IV](https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre4) | Si le prestataire est sous-traitant. | Lier la source près de `:720-733`, pas seulement la récapitulation. |
| Sous-traitant alerte le responsable dans les meilleurs délais ; responsable notifie la CNIL si conditions réunies, parfois 72 h | Confirmée | CNIL art. 33, lignes 277-290 de la page officielle | 72 h concerne le responsable après connaissance et risque ; pas un SLA TMA. | Le bloc `:751-761` est juste ; ajouter “à documenter même si aucune notification n'est requise”. |
| Tests réguliers de restauration et ordre de restauration | Confirmée | [ANSSI v1.1](https://messervices.cyber.gouv.fr/documents-guides/anssi_fondamentaux_sauvegarde_systemes_dinformation_v1.1.pdf), recommandations R22-R23 | Recommandation technique, dépendances propres au SI. | Ajouter RTO/RPO et résultat du test. |
| Contrat légalement formé obligatoire comme loi entre parties / bonne foi | Confirmée mais non décisive seule | [Code civil art. 1103](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000032040777), [art. 1104](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000032040772) | Principe général ; ne tranche aucune clause. | Garder en sources, ne pas laisser entendre que cela remplit les silences opérationnels. |
| L'article 38.4 impose toujours une liste de livrables à une PME privée | À nuancer | Légifrance art. 38.4 | Seulement si le marché se réfère au CCAG-TIC ; adaptabilité au privé. | La page dit déjà de ne pas le traiter comme modèle privé ; répéter dans le titre ou le lien. |
| “Une bonne TMA protège vraiment l'activité” | Recommandation, pas fait | Aucune source nécessaire, mais pas garantie | Dépend du périmètre, moyens, dépendances et exécution. | Remplacer par “peut réduire un risque si…” dans metadata/hero si nécessaire. |

### Contradictions ou limites observées

- Le registre conserve `dateModified: "2026-07-21"` et `readTimeMin: 17` (`src/lib/guides.ts:926-938`), alors que l'audit est du 24 juillet et que la page a été vérifiée avec la recherche du 20 juillet. Le temps de lecture est cohérent avec le corps visible (3 325 mots environ à 200 mots/minute), mais la date doit être actualisée uniquement après une vraie modification ou une revalidation documentée.
- Le dossier de recherche indique une ancienne validation “19/20” et une réécriture du 21 juillet, mais le présent audit est indépendant et ne reprend pas cette note comme preuve finale.
- Le dossier annonce “24 minutes” pour une ancienne empreinte de 4 724 mots ; le rendu actuel affiche 17 minutes. Il faut conserver le chiffre du rendu final, pas l'ancienne note historique.
- La page dit “les cinq décisions possibles” et la table en contient bien cinq ; le titre du hero n'est pas en contradiction. La formule “quatre réponses” du premier tableau désigne des questions, non des alternatives.

### Faits à retirer plutôt qu'affaiblir

- Tout taux de disponibilité ou délai chiffré importé d'un concurrent sans engagement réel.
- Tout pourcentage de pénalité présenté comme protection automatique.
- Toute phrase suggérant que la possession du dépôt donne les droits sur le code.
- Toute promesse de notification CNIL portée directement par le prestataire sans qualifier les rôles.
- Toute promesse “24/7” si l'équipe, le canal, l'astreinte et la capacité ne sont pas contractualisés.

## 6. Scénarios et calculs à construire

Les trois mois types présents respectent l'idée de scénarios, mais pas la profondeur exigée pour un sujet coût/risque. Ajouter une fiche de calcul avec des montants **purement illustratifs**, tous HT, remplaçables par le devis réel.

| Variable | Simple | Central | Exigeant | Source ou hypothèse |
|---|---:|---:|---:|---|
| Utilisateurs/processus | 5 utilisateurs, activité non critique | 15 utilisateurs, facturation et planning | 30 utilisateurs, opérations bloquantes | Hypothèses pédagogiques, pas benchmark de prix |
| Demandes moyennes/mois | 3 tickets, 1,5 h chacun | 8 tickets, 2 h chacun + 1 prévention | 15 tickets + astreinte et changements | À remplacer par historique de tickets |
| Horaires | ouvrés | ouvrés + incident critique | fenêtre critique définie, pas “24/7” implicite | À inscrire dans le contrat |
| Exemple de taux variable | 3 × 1,5 × 120 € × 12 = 6 480 €/an | 8 × 2 × 120 € × 12 = 23 040 €/an si tout est hors forfait | À calculer selon capacité réservée et majorations | 120 €/h est une hypothèse d'exemple, pas tarif Hagnéré |
| Forfait fictif à comparer | 800 €/mois + 1 200 € reprise = 10 800 € première année | 1 500 €/mois + 2 000 € reprise + 1 800 € variable = 21 800 € | 4 000 €/mois + 5 000 € transition + 3 000 € test DR = 56 000 € | Nombres pédagogiques à remplacer par deux devis |
| Décision attendue | support ponctuel peut gagner si le dossier est exploitable | capacité TMA peut gagner si la file est récurrente | TMA/infogérance partielle seulement avec continuité et RTO/RPO écrits | Interprétation, pas conseil juridique |

Formules à afficher :

```text
Coût annuel connu = 12 × forfait mensuel
                   + mise en route/reprise
                   + licences et outils explicitement inclus

Coût annuel variable = tickets hors forfait × unité × taux
                      + urgences/astreintes
                      + licences tierces + travaux de sécurité

TCO horizon = coûts connus + variables + temps interne + test de restauration
              + réserve de sortie et transfert

Coût de panne illustratif = durée d'arrêt × coût horaire des personnes bloquées
                            + retards ou pénalités réellement estimables
```

**Inclusions :** forfait, mise en route, unités, licences, astreinte, tests et sortie selon les hypothèses.  
**Exclusions :** TVA, hébergement non inclus, évolution majeure, tiers indisponible, crise de sécurité et frais juridiques, sauf mention.  
**Analyse de sensibilité :** faire varier demandes/mois (3/8/15), unité minimale, taux, heures d'ouverture et coût d'arrêt.  
**Variable qui fait basculer :** la criticité et la fréquence réelle, pas le mot “TMA”.  
**Contrôle inverse :** demander au prestataire de recomposer chaque ligne à partir de cinq tickets fictifs et d'un incident hors horaires.

Ne pas publier les montants comme tarifs de marché. Leur utilité est de montrer au dirigeant comment détecter une facture incomprise et à Hagnéré Code comment cadrer une demande sans promettre un SLA avant reprise.

## 7. Comparaison et position professionnelle

Options réellement comparables : équipe interne, support éditeur, intervention ponctuelle, capacité TMA réservée et lots projets (`page.tsx:576-610`). La table actuelle est utile mais devrait appliquer les mêmes critères : coût fixe/variable sur 12 mois, criticité, temps interne, continuité, délai de démarrage, propriété des actifs, dépendance à une personne, sortie et responsabilité.

```text
Option la moins chère : intervention ponctuelle lorsque les demandes sont rares et l'application documentée.
Option la moins risquée pour une application critique : celle qui possède un responsable, une sauvegarde restaurable, une capacité et une escalade testées ; ce n'est pas automatiquement la TMA.
Option qui demande le moins de temps interne : support éditeur ou capacité réservée si l'application est standard et les accès maîtrisés.
Position Hagnéré Code : ne pas signer une TMA avant de savoir reconstruire, restaurer, livrer et sortir ; proposer d'abord une reprise si un de ces quatre tests échoue.
Cas où l'option opposée gagne : cinq utilisateurs, peu de tickets et faible criticité → support ponctuel ; évolution autonome importante → lot projet ; compétence durable et besoin continu → équipe interne.
Signal de révision : hausse des incidents, dépendance à une personne, nouvelle donnée sensible, changement d'éditeur ou ticket critique non mesurable.
Ce que nous déconseillons même si nous pouvons le vendre : un forfait illimité sans file, unités, exclusions, mesure et sortie ; une astreinte 24/7 sans capacité démontrée ; une TMA qui cache un incident actif ou une absence d'actifs.
```

À ajouter : un contre-cas loyal où une TMA coûte plus cher qu'un support ponctuel, et un cas où le “moins cher” est le plus dangereux parce qu'aucune restauration ni continuité n'est testée.

## 8. Objections et cas limites

| Objection loyale | Réponse prouvée | Incertitude restante | Conséquence |
|---|---|---|---|
| “Un SLA élevé suffit.” | Un délai sans point de départ, mesure, résultat et conséquence ne définit pas le service. | Le niveau adapté dépend du métier et des horaires. | Rejouer un incident et écrire réponse/rétablissement/correction séparément. |
| “Le forfait illimité évite de compter.” | Sans périmètre, file et exclusions, l'illimité déplace le risque vers l'attente ou la facturation. | La capacité réelle du prestataire est à vérifier. | Simuler cinq tickets et une urgence. |
| “Le code source garantit ma sortie.” | Code, droits, comptes, dépendances, données et documentation sont distincts. | Les droits nécessitent une analyse contractuelle. | Faire un test de reconstruction et inventorier les licences. |
| “Le prestataire est responsable de la sécurité.” | Les rôles, instructions, accès et mesures doivent être répartis selon le contexte ; la CNIL n'efface pas les responsabilités du client. | Responsable/sous-traitant et risque restent à qualifier. | Ajouter une annexe données et une matrice d'accès. |
| “La sauvegarde quotidienne suffit.” | ANSSI demande contrôles, tests, procédure et ordre de restauration ; un journal de copie ne prouve pas le redémarrage du service. | RTO/RPO et dépendances sont spécifiques. | Exiger un test daté avec résultat et limites. |
| “Je peux résilier quand je veux.” | Une sortie exige préavis, actifs, assistance, coût, formats et maintien du service. | Les droits de résiliation dépendent du contrat. | Faire relire la clause et pratiquer un exercice partiel. |
| “Une panne active se règle en signant la TMA.” | Le guide distingue incident actif, reprise et litige ; une TMA n'est pas une réponse à incident par nature. | Le bon intervenant dépend de la gravité. | Suspendre le parcours commercial et orienter vers l'urgence adaptée. |

## 9. Plan de réécriture localisable

| Ordre | Section | Question résolue | Preuve/scénario/outil | Décision produite | Action |
|---:|---|---|---|---|---|
| 1 | `page.tsx:227-260` | Pourquoi lire ce guide ? | Ajouter “trois tickets/mois ou un incident critique changent le choix” ; avertissement juridique conservé. | Le lecteur se reconnaît sans promesse. | Créer, sans dramatiser. |
| 2 | `:262-295` | Quelles réponses minimales ? | Garder le tableau, ajouter propriétaire et preuve de réception. | Demander les annexes avant signature. | Conserver et préciser. |
| 3 | `:322-385` | Quel délai est réel ? | Ajouter matrice illustrative P1/P2/P3, heures, pauses, escalade et résultat. | Corriger la clause ou la refuser. | Créer, chiffres explicitement fictifs. |
| 4 | `:387-467` | Bug ou évolution ? | Ajouter garantie post-livraison, version supportée, client dépendant et API tierce. | Affecter la dépense au bon flux. | Créer un encadré court. |
| 5 | `:469-620` | Combien coûte la TMA ? | Ajouter les trois scénarios chiffrés et formule TCO HT/TTC. | Comparer ponctuel/interne/support/TMA/lots. | Priorité P1. |
| 6 | `:622-666` | Quand est-ce livré ? | Ajouter critères de recette, urgence, journal et retour arrière minimum. | Accepter, refuser ou rouvrir. | Conserver et illustrer. |
| 7 | `:668-761` | Qui porte sécurité et continuité ? | Ajouter MFA/secrets/patchs/RTO/RPO/chiffrement et propriétaire de preuve ; CNIL/ANSSI inline. | Attribuer sans promettre conformité. | Priorité P1/P2. |
| 8 | `:763-850` | Puis-je sortir ? | Ajouter calendrier, coût, déclencheurs, insolvabilité, composants tiers, licence/escrow et test par tiers. | Signer seulement si la sortie est testable. | Priorité P1. |
| 9 | `:856-945` | Quelle option choisir et qui peut aider ? | Ajouter scorecard homogène et livrable CTA (grille + plan de pilote, pas SLA garanti). | Support, reprise, TMA, lot ou refus. | Conserver ton et filtre commercial. |
| 10 | `:947-1047` et registre | Les faits sont-ils actuels ? | Recherche et dates revalidées au 24/07 ; liens officiels près des assertions ; actualiser `dateModified` après modification réelle. | Publication techniquement cohérente. | Priorité P1 de clôture. |

### Contrat des 150 premiers mots

Conserver la scène fictive, car elle est humaine et honnête. Ajouter une phrase de décision mesurable : “Si vous avez trois tickets par mois, une application critique ou un accès que personne ne sait restaurer, le bon choix ne sera pas le même.” Ne pas promettre qu'une TMA “protège” l'activité sans condition.

### Éléments à supprimer ou ne pas ajouter

- toute fourchette de prix présentée comme moyenne de marché ;
- tout “SLA standard” ou 99,9 % sans périmètre et formule ;
- les définitions juridiques répétées sans conséquence opérationnelle ;
- une FAQPage JSON-LD ou un faux modèle prêt à signer ;
- une ressource téléchargeable qui ne serait qu'une copie du tableau visible.

### Éléments à conserver

- incident unique de bout en bout ;
- distinction réponse/rétablissement/correction/acceptation ;
- trois mois types ;
- cinq alternatives ;
- test de restauration et exercice de sortie ;
- cas où Hagnéré Code déconseille de commencer par une TMA ;
- avertissement juridique clair et exemples explicitement fictifs.

## 10. Contre-audit après correction — critères de passage

| Problème | Priorité | Correction attendue | Revalidation indépendante |
|---|---|---|---|
| Trois scénarios sans valeurs ni TCO | P1 | Montants illustratifs, unités, HT/TTC, sensibilité et contrôle inverse | Refaire les calculs et vérifier que 12 mois + variables + sortie ne double-comptent pas. |
| SLA sans matrice opérationnelle | P1 | Gravité, horaires, point de départ, pauses, réponse, rétablissement, correction, escalade | Tester un incident fictif et vérifier qu'un lecteur sait quelle horloge démarre. |
| Responsabilités/assurance/plafond peu couverts | P1 | Checklist non juridique : client, prestataire, hébergeur, éditeur, tiers ; preuve et assurance à faire relire | Vérifier aucun transfert automatique de responsabilité. |
| Continuité/RTO/RPO absents | P1 | Objectifs à fixer, test de restauration, ordre, dépendances et résultat | Rejouer la restauration et vérifier les limites. |
| Fraîcheur du registre | P1 | Revalider puis mettre à jour `dateModified`, pas avant | Comparer registre, metadata, OG, Article et sitemap. |
| Exclusions, garantie/version, composants tiers | P2 | Table incluse/exclue et passage garantie→TMA | Lecture par dirigeant non technique. |
| Gouvernance et sortie | P2 | KPI, comité, changements de prix, coût/durée/declencheurs d'exit | Exercice de transfert avec tiers indépendant. |

### Score cible après correction

| Axe | Cible /10 | Condition |
|---|---:|---|
| Intention | 9 | Ouverture humaine + repère chiffré. |
| Décision | 9 | Scénarios et scorecard permettent un choix défendable. |
| Pédagogie | 9 | Matrice des horloges et exemples traduits. |
| Profondeur | 9 | Continuité, responsabilité, garantie, tiers et sortie couverts. |
| Preuve | 9 | Sources primaires inline, dates et limites. |
| Comparaison | 9 | Cinq modes comparés sur le même horizon et critères. |
| Originalité | 8 | Incident + facture + sortie restent la signature. |
| Style | 9 | Densité maîtrisée, aucune langue de consultant non traduite. |
| Conversion | 9 | CTA avec livrable de cadrage et cas où Hagnéré Code ne vend pas de TMA. |
| SEO/produit | 9 | Snapshot cohérent, build et production vérifiés séparément. |
| **Total cible** | **89/100** | Cette cible reste sous le seuil : le guide ne peut passer qu'après un gain lecteur réel, documenté et vérifié, portant la note à au moins 90/100 ; ne pas fabriquer un artefact uniquement pour la note. |

La cible 89/100 est volontairement sous le seuil : à 89, la porte reste fermée. Le guide ne peut passer qu'après un gain lecteur réel, documenté et vérifié, portant la note à au moins 90/100 ; la règle de seuil doit rester honnête et ne pas conduire à ajouter du volume sans gain d'information.

## 11. Preuves techniques, visuelles et production

### Snapshot audité

```text
src/app/guides/contrat-tma-application/page.tsx
d5b1d9495cc5d4374776167f74165984d6ccac13baee18aa3c69422e2ed47c0f

src/app/guides/contrat-tma-application/opengraph-image.tsx
232c68c8366ee372eccd525a2755541d3fd317240ccfd567e066b0842e44b2ab

src/lib/guides.ts
8663e6e84352121ec854393e049492a1c2b72f242166141e5d31e0911b43cb09

docs/research/contrat-tma-application.md
47f1a85178b93d2c3e8412666bdf962ed9ce804193aeb4857136d793d7ebccc9
```

### Vérifications locales exécutées

- Page locale `http://localhost:3010/guides/contrat-tma-application` : **HTTP 200**, 461 093 octets.
- Image sociale : **HTTP 200**, PNG 1 200 × 630, 231 686 octets.
- Canonical : `https://hagnere-code.ai/guides/contrat-tma-application`.
- JSON-LD observé : `Article`, `BreadcrumbList`, `ImageObject`, `ListItem`, `Organization`, `Person`, `WebPage`. Aucun `FAQPage`, conforme à la règle du projet ; la FAQ reste visible.
- En local, `robots` est `noindex, nofollow`, attendu en développement : ce n'est pas une preuve de la politique de production.
- Liens ciblés vers guides, service maintenance et démarrer un projet : **HTTP 200** en local.
- Tests ciblés : `npx vitest run --maxWorkers=2 src/lib/guides.test.ts src/lib/search-indexing.test.ts src/app/robots.test.ts src/app/sitemap.test.ts src/lib/structured-data.test.ts src/lib/guide-human-language.test.ts` → **6 fichiers, 69 tests passés**.

### QA navigateur local

Rendu observé aux largeurs 320, 390, 768, 1024 et 1440 px : largeur de document égale à la fenêtre, aucun débordement horizontal, un H1 et une CTA présents. À 390 px, les tables desktop sont remplacées par leurs cartes mobiles ; le contenu reste lisible. Les logs `error` et `warning` sont vides.

Cette observation est locale et ne prouve pas le rendu de production, les headers Vercel/CDN, la disponibilité externe, le sitemap traité, Search Console ou l'indexation Google.

### Non exécuté dans ce passage

- `npm run check:seo` complet ;
- suite `npm test` complète ;
- build de production complet ;
- vérification du domaine public et de l'état d'indexation.

Ne pas annoncer “publié, indexé, suivi” sur la base du seul HTTP local.

## Conclusion opérationnelle

Ce guide est déjà une bonne base commerciale et pédagogique, probablement au-dessus des listes concurrentes superficielles. Il ne faut pas le réécrire entièrement : conserver la voix, l'incident unique, les cinq options et le test de sortie. En revanche, bloquer le statut de guide “référence” jusqu'à l'intégration de scénarios chiffrés, d'une matrice SLA/continuité, d'une checklist responsabilité/assurance et d'une revalidation de la date du registre. Aucun fichier de production n'a été modifié pendant cet audit ; seul ce rapport doit être ajouté.
