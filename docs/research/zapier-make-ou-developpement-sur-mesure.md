# Dossier de recherche — Zapier, Make ou développement sur mesure

> Dossier ouvert en passe 1 puis complété jusqu'à la validation P4. Il conserve
> la recherche historique et documente la rédaction, les contre-audits et les
> contrôles terminés le 24 juillet 2026. Le guide compare trois modes
> d'exécution d'un flux existant, sans seuil universel ni promesse commerciale.

## Journal des quatre passes

Propriétaire éditorial unique : orchestrateur du lot

| Passe                        | État                     | Date             | Responsable                              | Snapshot | Blocages |
| ---------------------------- | ------------------------ | ---------------- | ---------------------------------------- | -------- | -------- |
| 1. Recherche                 | Terminée — porte validée | 23 juillet 2026  | agent de recherche Apps/SaaS             | Manifeste P1 | Aucun |
| 2. Rédaction et intégration  | Terminée — porte validée | 24 juillet 2026  | équipe éditoriale Hagnéré Code           | Manifeste P2 | Aucun |
| 3. Contre-audit indépendant  | Terminée — porte validée | 24 juillet 2026  | final_audit_apps, anti_ia_final, seo_tech_final | Manifeste P3 | Aucun P0/P1 restant |
| 4. Plume humaine et contrôle | Terminée — porte validée | 24 juillet 2026  | orchestration éditoriale                 | Manifeste P4 | Aucun blocage éditorial |

### Manifeste du snapshot

| Fichier contrôlé | Passe | Remarque |
| ---------------- | ----- | -------- |
| `docs/research/manifests/zapier-make-ou-developpement-sur-mesure-p1.sha256` | P1 | Manifeste existant ; historique de recherche conservé. |
| `docs/research/manifests/zapier-make-ou-developpement-sur-mesure-p2.sha256` | P2 | Manifeste existant de rédaction et d'intégration. |
| `docs/research/manifests/zapier-make-ou-developpement-sur-mesure-p3.sha256` | P3 | Manifeste existant après contre-audit et corrections. |
| `docs/research/manifests/zapier-make-ou-developpement-sur-mesure-p4.sha256` | P4 | Manifeste final créé après les contrôles P4 ; son empreinte est intégrée au snapshot commun du lot. |

## 1. Fiche d'identité

```text
Slug : zapier-make-ou-developpement-sur-mesure
Statut actuel : publiable — validation éditoriale déléguée
Requête principale : Zapier Make ou développement sur mesure
Moment du parcours : décider après un premier flux ou avant une automatisation critique
Lecteur précis : dirigeant de PME ou indépendant dont une automatisation relie déjà plusieurs logiciels, devient coûteuse, échoue sans être vue ou demande des corrections manuelles
Situation déclenchante : des leads, commandes, factures ou dossiers passent parfois deux fois, restent bloqués ou consomment davantage de tâches/crédits ; personne ne sait s'il faut réparer le scénario ou le réécrire
Décision principale après lecture : garder le flux, le fiabiliser dans Make/Zapier, hybrider avec un composant développé, remplacer par une connexion sur mesure, ou arrêter une automatisation qui ne vaut pas son coût
Niveau de connaissance au départ : sait créer ou acheter une automatisation simple, mais comprend mal actions facturées, limites des API tierces, files d'erreur, rejouabilité, doublons et coût d'exploitation
5 questions indispensables : quel événement déclenche quoi ? combien d'actions réelles et de reprises sur 30 jours ? que se passe-t-il en cas de 429, donnée invalide ou service indisponible ? qui voit et rejoue l'erreur sans créer un doublon ? quel coût complet pour chaque option sur 12/36 mois ?
3 objections ou craintes : « le code cassera aussi » ; « Make est toujours moins cher que Zapier » ; « si on réécrit, on perdra la simplicité »
Action utile sans contact commercial : dessiner un flux réel, relever trente jours d'exécutions et provoquer cinq pannes sans toucher à la production
CTA possible : faire examiner un flux avant de le reconstruire
Hors périmètre : choisir quel processus automatiser, catalogue complet des plateformes, tutoriel de scénario, benchmark de prix permanent, promesse zéro panne, remplacement arbitraire à partir d'un volume
Date de la recherche : 23 juillet 2026
Responsable de la synthèse : agent de recherche Apps/SaaS
```

## 1 bis. Contrat de langage humain

- Phrase exacte : « Nos automatisations Make ou Zapier commencent à casser et
  à coûter cher : est-ce qu'on doit les garder ou faire développer la
  connexion ? »
- Réponse en une phrase : gardez l'outil s'il traite le flux au coût attendu et
  rend les erreurs visibles et récupérables ; fiabilisez ou hybridez-le si le
  problème est local ; développez seulement si le flux critique, ses règles et
  sa supervision justifient aussi la maintenance du code.
- Terme central : un flux est la suite d'actions qui part d'un événement — par
  exemple un formulaire reçu — et crée ou met à jour des données dans d'autres
  outils.
- Mots ordinaires : formulaire, client, commande, facture, ligne, erreur,
  doublon, relancer, historique, coût, connexion, panne, responsable.
- Jargon à traduire : trigger, task, credit, webhook, rate limit/429,
  idempotence, retry, queue, observability, payload.
- Projet des 150 premiers mots : scène d'une commande dupliquée et d'une autre
  manquante, réponse en cinq voies, invitation à mesurer le même flux.
- Décision après 150 mots : ne pas réécrire avant d'avoir un journal de trente
  jours et un test d'erreur.
- H2 relus isolément : P2.
- Comparaison à 390 px : cartes verticales, détail calcul dans un accordéon ou
  exemple lisible.
- FAQ première phrase : P4.
- CTA résultat : « Comprendre s'il faut réparer, hybrider ou reconstruire mon
  flux ».

### Test sujet, action, résultat

| Phrase initiale à éviter | Qui agit ? | Action concrète | Résultat | Phrase réécrite |
| ------------------------ | ---------- | --------------- | -------- | --------------- |
| « La criticité doit être évaluée. » | Le dirigeant | Note l'effet d'une heure, d'un jour et d'une perte définitive | Il sait quel niveau de reprise financer | « Écrivez ce qui se passe si ce flux attend une heure, un jour ou disparaît. » |
| « Le coût dépend du volume. » | Le responsable du flux | Compte événements, actions réussies, échecs et reprises sur 30 jours | Il estime la consommation réelle | « Comptez chaque événement et chaque action réellement exécutée pendant trente jours. » |
| « Les erreurs doivent être supervisées. » | Une personne nommée | Reçoit l'alerte, lit le contexte, corrige puis rejoue | Une erreur ne reste pas invisible | « Nommez la personne qui recevra l'erreur et montrez-lui comment la rejouer sans créer de doublon. » |
| « Une architecture hybride peut être pertinente. » | L'équipe | Laisse l'orchestration visible dans Make/Zapier et code la seule règle complexe | Elle garde la lisibilité sans forcer la plateforme | « Gardez le scénario lisible et développez uniquement le calcul ou la connexion qui le bloque. » |
| « Le sur-mesure offre plus de contrôle. » | L'entreprise | Finance hébergement, journalisation, alertes, mises à jour et astreinte | Elle sait ce que le contrôle exige | « Le code donne du contrôle seulement si quelqu'un l'héberge, le surveille et le corrige. » |

### Test de l'ouverture

- [x] scène vécue avant méthode ;
- [x] API, tâche, crédit et erreur 429 définis au premier usage ;
- [x] pas de glossaire préalable ;
- [x] pas de métaphore structurante ;
- [x] réponse sans fausse promesse de fiabilité.

## 2. Cannibalisation

| Page existante | Intention | Différence | Maillage |
| -------------- | --------- | ---------- | -------- |
| `/guides/automatiser-processus-metier` | Choisir quel processus automatiser en premier | Choisir comment exécuter un flux déjà défini | Lier si le processus n'est pas encore choisi |
| `/guides/connecter-erp-crm-logiciel-metier` | Définir source de vérité et échanges entre systèmes | Arbitrer plateforme, hybride ou code sur un flux précis | Lier pour la cartographie globale |
| `/guides/no-code-ou-sur-mesure` | Comparaison technologique générale | Données réelles de consommation, erreurs et supervision Make/Zapier | Ne pas refaire le duel générique |
| `/services/outils-internes-sur-mesure` | Réalisation commerciale | Guide pouvant conclure de garder Make ou Zapier | CTA seulement après l'audit autonome |

**Justification d'une URL distincte :** elle répond au mode d'exécution et de
supervision d'un flux réel, décision non couverte par les guides qui choisissent
le processus ou cartographient tout le système d'information.

## 3. Demande et vocabulaire du lecteur

SERP observée le 23 juillet 2026 : résultats dominés par les comparatifs
fournisseurs `Make vs Zapier`, contenus d'agences et listes de fonctions. Les
recherches visibles portent sur prix, tâches, crédits, erreurs, limites et
alternatives.

Variantes : `Make ou Zapier`, `Zapier ou développement sur mesure`,
`alternative Make entreprise`, `coût automatisation Make`, `tâches Zapier`,
`Make erreurs 429`, `développer API sur mesure`, `remplacer Zapier`.

Phrase dirigeant : « Ce scénario tournait bien à dix commandes, maintenant on
ne sait plus ce qui est passé. » La page doit employer « action exécutée »,
« erreur visible », « commande en double » et « personne qui corrige » avant
les termes techniques.

Sans Search Console ni Keyword Planner : pas de volume, de difficulté ou de
promesse SEO. Demande fondée sur SERP datée seulement.

## 4. Carte concurrentielle

| Page | Réponse | Preuves | Bon point | Manque | Conflit |
| ---- | ------- | ------- | --------- | ------ | ------- |
| Zapier — tarifs et tâches | Explique offres et unité de consommation | Barème et aide | Source primaire | Ne compare pas le coût total d'un code exploité | Éditeur |
| Make — tarifs et crédits | Explique offres et crédits | Barème et aide | Source primaire | Ne tranche pas la criticité ni le sur-mesure | Éditeur |
| Make/Zapier — gestion des erreurs | Montre reprise, exécutions incomplètes, alertes | Documentation | Rend les échecs actionnables | L'idempotence métier reste à concevoir | Éditeurs |
| Comparatifs Make vs Zapier | Désignent l'outil le plus simple ou flexible | Tableaux de fonctions/prix | Accessibles | Troisième option hybride/code et responsabilité peu traitées | Affiliation/intégration possible |
| Agences d'automatisation | Audit et construction de scénarios | Méthodes/cas | Parlent du processus | Peuvent recommander leur plateforme | Vendeur |
| Développeurs/intégrateurs | API sur mesure et contrôle | Architecture | Font apparaître maintenance et robustesse | Peuvent sous-estimer lisibilité et rapidité du no-code | Vendeur |

**Angle mort commun :** mesurer pendant trente jours le même flux, ses
exécutions, échecs, reprises et temps humain, puis tester cinq pannes avant de
choisir.

**Valeur originale :** registre d'incidents + calcul comparable + option hybride
qui peut conclure « réparez l'existant ».

## 5. Fiche de preuves

| Affirmation utilisable | Source primaire | Nature | Périmètre | Date | Confiance | Lien visible | Conséquence | Fraîcheur |
| ---------------------- | --------------- | ------ | --------- | ---- | --------- | ------------ | ----------- | --------- |
| Zapier affiche une offre gratuite de 100 tâches/mois et des offres payantes à partir de prix variables selon paiement, devise et palier | [Zapier — Pricing](https://zapier.com/pricing) | Fournisseur | Offre affichée | 23 juillet 2026 | Élevée pour l'affichage | Toute mention chiffrée | Relever son propre palier et dater | À chaque P2 |
| Zapier compte généralement les actions réussies comme tâches ; triggers et certaines étapes ont un traitement distinct, et certains usages ont des taux variables | [Zapier — How task usage is measured](https://help.zapier.com/hc/en-us/articles/8496196837261-How-is-task-usage-measured-in-Zapier) | Aide fournisseur | Modèle actuel, selon produit/action | 23 juillet 2026 ; mise à jour juillet 2026 | Élevée | Calcul 30 jours | Calculer à partir du flux réel | Mensuelle |
| Zapier documente des limites propres à la plateforme et rappelle que les applications connectées ont aussi leurs limites | [Zapier — Zap limits](https://help.zapier.com/hc/en-us/articles/8496181445261-Zap-limits) | Aide fournisseur | Compte/app/plan concernés | 23 juillet 2026 | Élevée | Test de charge | Vérifier chaque API tierce | Trimestrielle |
| Zapier distingue causes temporaires et erreurs de données et documente historique/replay selon fonctions | [Zapier — Troubleshoot errors](https://help.zapier.com/hc/en-us/articles/8496037690637-How-to-troubleshoot-errors-in-Zap-workflows) | Aide fournisseur | Fonctions disponibles selon plan | 23 juillet 2026 | Élevée | Partie erreur | Prévoir qui lit et corrige | Trimestrielle |
| Make affiche une offre gratuite et des paliers de crédits dont les montants dépendent du volume et de la facturation | [Make — Pricing](https://www.make.com/en/pricing) | Fournisseur | Offre affichée | 23 juillet 2026 | Élevée pour l'affichage | Toute mention de prix | Dater devise, crédits et engagement | À chaque P2 |
| Make explique comment modules, bundles, itérateurs et fonctions IA consomment des crédits, avec exceptions | [Make — How features use credits](https://help.make.com/how-features-use-credits) | Aide fournisseur | Modèle courant | 23 juillet 2026 | Élevée | Calcul | Compter le scénario réel plutôt qu'une moyenne | Mensuelle |
| Les exécutions incomplètes Make peuvent conserver un état d'erreur pour résolution ; la fonction et son activation doivent être vérifiées | [Make — Incomplete executions](https://help.make.com/incomplete-executions) et [Manage incomplete executions](https://help.make.com/manage-incomplete-executions) | Aide fournisseur | Paramètres/plan actuels | 23 juillet 2026 | Élevée | Partie reprise | Activer/tester avant de supposer que tout est récupérable | Trimestrielle |
| Make documente les erreurs de limite de débit 429 et des réponses comme planification, agrégation, files et reprises | [Make — Fix rate limit errors](https://help.make.com/fix-rate-limit-errors) | Aide fournisseur | API tierces et scénarios | 23 juillet 2026 | Élevée | Test de panne | Concevoir le débit avec l'API réelle | Trimestrielle |

### Contradictions et données à ne pas publier

- Aucun « Make est moins cher » ou « Zapier est plus simple » sans même flux,
  même volume, même période, mêmes fonctions et date.
- Ne pas comparer abonnement no-code et seul coût initial du code : inclure
  hébergement, surveillance, maintenance et intervention.
- Pas de seuil arbitraire d'exécutions où le code « devient rentable ».
- Une erreur non facturée peut quand même coûter du temps ou perdre une vente ;
  une action facturée peut être utile. Ne pas confondre consommation et valeur.
- Les limites des logiciels connectés ne sont pas contrôlées par Make/Zapier.
- Une relance automatique peut reproduire une action déjà effectuée ; ne pas
  promettre l'absence de doublons. Concevoir une clé métier/idempotence et la
  tester.
- Aucun « zéro panne », aucune sécurité ou conformité implicite.
- Les tarifs observés sont volatils ; ne pas les utiliser sans devise, taxes,
  périodicité, crédits/tâches et date.

### Calculs reproductibles

- Horizon : fenêtre observée de 30 jours, puis projection 12 et 36 mois.
- Formule consommation : `événements × actions par chemin`, en séparant succès,
  échecs, reprises et fonctions à tarification particulière.
- Coût outil : abonnement + dépassement + options + temps de correction.
- Coût code : cadrage + développement + tests + hébergement + logs/alertes +
  maintenance + mises à jour API + support/astreinte + sortie.
- Coût incident : seulement à partir d'incidents réels ou d'une hypothèse
  explicitement nommée, jamais d'une moyenne inventée.
- Temps : heures effectivement observées × coût horaire choisi.
- Contrôle inverse : réconcilier total des journaux avec facture/consommation ;
  échantillonner dix exécutions ; vérifier chaque branche.
- Inconnus : croissance, changement tarifaire, limites tierces, intervention
  humaine, indisponibilités et nouvelles fonctions.

## 6. Empreinte éditoriale

| Guide | Ouverture | Progression | Artefact | Exemple | CTA | Conclusion |
| ----- | --------- | ----------- | -------- | ------- | --- | ---------- |
| `automatiser-processus-metier` | Tâches répétitives | Choisir le processus | Matrice gain/risque | Processus fictif | Diagnostic | Priorité |
| `connecter-erp-crm-logiciel-metier` | Données dispersées | Sources/flux/reprise | Carte des échanges | Flux métier | Cadrage | Architecture |
| `no-code-ou-sur-mesure` | Choix technologique | Avantages/limites/coût | Tableau | Projet | Fin | Méthode |

```text
Tension : « Une commande est passée deux fois et une autre pas du tout. »
Ouverture : incident concret puis réponse courte
Progression : dessiner → mesurer 30 jours → provoquer cinq erreurs → calculer → cinq verdicts
Artefact : registre d'exécutions et d'incidents
Voix : opérationnelle, sans guerre no-code/code
CTA : après le verdict
Conclusion : action réalisable demain sur une copie du flux
Différences : flux existant ; données réelles observées ; pannes testées ; option hybride ; coût de supervision
```

## 7. Plan annoté

| Section | Question | Preuve/exemple | Décision | Format |
| ------- | -------- | -------------- | -------- | ------ |
| Une commande en double, une autre absente | Quelle douleur ? | Scène | Auditer avant réécrire | Ouverture |
| Cinq voies possibles | Quel choix ? | Conditions | Garder, réparer, hybrider, coder, arrêter | Cartes |
| Dessinez un seul flux | Que compare-t-on ? | Événement, actions, systèmes | Fixer le périmètre | Schéma |
| Relevez trente jours | Combien et à quel coût ? | Journal + facture | Calculer | Fiche |
| Provoquez cinq pannes | Le flux sait-il échouer proprement ? | donnée invalide, 429, indisponibilité, doublon, secret expiré | Exiger reprise | Tests |
| Nommez la personne qui corrige | Qui exploite ? | Alerte et replay | Financer supervision | Parcours |
| Comparez 12/36 mois | Quel coût complet ? | Formules | Même horizon | Calcul |
| Choisissez sans seuil magique | Quel verdict ? | Criticité, complexité, transparence, coût | Décider | Cartes |
| Action cette semaine | Que faire seul ? | Copie/sandbox | Apprendre sans risque | Checklist |
| Fit et FAQ | Quand demander de l'aide ? | Cas | CTA loyal | Encadrés |

### Scénario dirigeant

**Exemple illustratif fictif :** un formulaire crée un contact, une affaire et
une tâche, puis envoie un email. Le guide comptera quatre actions utiles,
testera une adresse invalide et une limite API, et vérifiera qu'un nouveau
passage ne crée pas une seconde affaire. Aucun tarif ou résultat ne sera
présenté comme universel.

### FAQ

- Make ou Zapier est-il le moins cher ?
- Quand faut-il passer au développement sur mesure ?
- Que faire lorsqu'une API renvoie une erreur 429 ?
- Les exécutions en erreur sont-elles facturées ?
- Un prestataire peut-il reprendre un scénario existant ?
- Que se passe-t-il si la plateforme change ses tarifs ?

## 8. Ressource et conversion

```text
Ressource nécessaire : oui, si réellement créée
Résultat : verdict documenté pour un flux
Formats : tableur éditable + PDF
Champs : événement, chemin, action, succès, échec, reprise, doublon, temps humain, coût, criticité, responsable, test 429/invalidité/indisponibilité/doublon/secret
Exemple : flux fictif formulaire → CRM → tâche → email
Conclusion ne pas investir : oui
Données : l'utilisateur peut travailler localement avec données anonymisées
QA : formules, facture réconciliée, export PDF, scénarios de panne en sandbox
Limite : projection, pas garantie de disponibilité
Maintenance : revue trimestrielle tarifs et aides
Bon fit : flux critique, règles spécifiques, incidents, plusieurs API ou besoin de supervision
Mauvais fit : flux simple, stable, peu coûteux, récupérable et bien compris
Action : relever 30 jours et tester cinq erreurs
CTA : « Faire examiner un flux avant de le reconstruire » vers /demarrer-un-projet
```

## 9. Rapport P1

```text
PASSE 1 TERMINÉE
Slug : zapier-make-ou-developpement-sur-mesure
Lecteur : dirigeant — « Nos automatisations cassent et coûtent cher : garder ou développer ? »
Décision : garder, réparer, hybrider, développer ou arrêter
Angle : trente jours de faits et cinq pannes testées
Pages proches : choix du processus et architecture globale ; nouveau guide = mode d'exécution d'un flux
Sources : tarifs/aides officiels Zapier et Make
Incertitudes exclues : outil toujours moins cher, seuil de volume, zéro panne, coût futur
Action/CTA : registre + tests ; examiner avant reconstruire
Plan : incident, voies, dessin, mesure, pannes, exploitation, coût, verdict, action, FAQ
Snapshot : dossier P1 courant ; manifeste par orchestrateur
```

## 10. Historique P1 — portes prévues le 23 juillet 2026

> État conservé pour la traçabilité : ces travaux restaient à accomplir à la
> clôture de P1. P2, P3 et P4 ont été terminées le 24 juillet 2026 ; voir
> section 12.

- P2 devait assurer rédaction, intégration, sources datées et ressource
  effectivement construite si elle était annoncée.
- P3 devait recalculer un cas et vérifier les modèles de tâches, les crédits et
  les pannes.
- P4 devait contrôler plume, cinq largeurs, thèmes, liens, console, image
  sociale et autorisation.

## 11. Historique P1 — revue préparatoire

> Cette photographie du 23 juillet 2026 est remplacée, pour le verdict courant,
> par la validation finale de la section 12.

| Critère | État P1 | Condition finale |
| ------- | ------- | ---------------- |
| Décision | Validée | Réponse précoce |
| Pédagogie | Validée au plan | Flux compris sans jargon |
| Calcul | Méthode définie | Exemple recalculé indépendamment |
| Preuves | Primaires/datées | Réouverture P2/P3 |
| Conversion | Loyale | Conclusion garder/arrêter possible |
| Test humain | Non réalisé | À faire ou déclarer |
| Page/rendu/SEO | Non créés | P4 obligatoire |

- État historique P1 — contre-audit indépendant : non réalisé.
- État historique P1 — page, ressource, schémas et image : non créés à ce
  stade.
- État historique P1 — publication : hors périmètre de cette première passe.

## 12. Validation finale P2, P3 et P4 — 24 juillet 2026

### Rapport P2 — Rédaction et intégration

- Article complet intégré sur
  `/guides/zapier-make-ou-developpement-sur-mesure`, avec ouverture destinée au
  dirigeant, comparaison loyale, sources visibles, exemple fictif signalé,
  limites, FAQ, maillage et CTA unique.
- Métadonnées, données structurées `Article` et `BreadcrumbList`, image sociale
  dédiée et inscription au registre des guides contrôlées.
- Snapshot :
  `docs/research/manifests/zapier-make-ou-developpement-sur-mesure-p2.sha256`.

### Rapport P3 — Contre-audits et corrections

- `final_audit_apps` : contre-audit indépendant du fond, des sources, des
  calculs, des pannes simulées, des limites et de la pédagogie dirigeant.
- `anti_ia_final` : passe de plume humaine, suppression des formulations
  mécaniques et vérification de la réponse dans l'ouverture.
- `seo_tech_final` : contrôle indépendant de l'intégration SEO et technique.
- Les corrections P3 ont été appliquées puis relues ; aucun P0 ni P1 ne reste.
- Snapshot :
  `docs/research/manifests/zapier-make-ou-developpement-sur-mesure-p3.sha256`.

### Rapport P4 — Contrôle final du lot

- 55 tests ciblés, `check:seo` 228, suite générale 453, TypeScript, ESLint et
  `diff-check` : validés.
- Build : 159 pages générées.
- Audit d'artefact : 143 URLs, 126 liens, 143 pages, 101 temps de lecture et
  274 blocs JSON-LD contrôlés.
- Navigateur réel : 10 routes × 5 largeurs = 50 contrôles, thèmes clair et
  sombre compris.
- Images sociales : 10/10 au format 1200 × 630.
- Snapshot P4 :
  `docs/research/manifests/zapier-make-ou-developpement-sur-mesure-p4.sha256`.

### Verdict

**Score final : 19/20.** Le fond, la pédagogie, les preuves, la comparaison, la
conversion et l'intégration sont validés. Un point reste volontairement retiré
car aucun lecteur humain réel indépendant n'a participé au test final.

Statut actuel : publiable — validation éditoriale déléguée

Décision de publication : autorisée explicitement par le commanditaire

Test réalisé par une personne réelle : non

Réserve SEO : la page est techniquement indexable ; indexable ne signifie pas
indexée par Google, et aucune indexation effective ni position n'est promise.
