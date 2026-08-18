# Giga-audit — Zapier, Make ou développement sur mesure

## Fiche d’identité

- **Guide audité :** `/guides/zapier-make-ou-developpement-sur-mesure`
- **Fichier relu intégralement :** `src/app/guides/zapier-make-ou-developpement-sur-mesure/page.tsx`
- **Date de l’audit :** 24 juillet 2026
- **Périmètre :** réponse à l’intention, comparaison des plateformes, architecture, coût, exploitation, protection des données, preuves et conversion
- **Statut :** audit seulement ; aucune réécriture publique réalisée dans ce dossier
- **Intention principale observée :** aider une entreprise dont une automatisation échoue ou coûte trop cher à choisir entre garder, réparer, hybrider, reconstruire ou arrêter

> **Référence du score :** version intégralement lue au démarrage de l’audit. Le score est un état initial ; il devra être recalculé après toute réécriture concurrente et stabilisation du guide.

## Verdict exécutif

Le guide actuel fait mieux que beaucoup de comparatifs sur un point essentiel : il part d’une commande dupliquée, pas d’une liste de logos. Les trente jours observés, les cinq pannes provoquées et les cinq verdicts sont utiles.

Cependant, il répond encore mal à la formulation exacte de la requête. Il explique **comment auditer une automatisation**, mais compare très peu **Zapier contre Make contre un développement**. Un dirigeant ne trouve ni tableau produit complet, ni calcul de consommation réellement exécuté sur le même scénario, ni prix datés, ni comparaison du niveau de compétence requis, ni alternative n8n/Power Automate.

La promesse « réparer ou reconstruire » est juste, mais le guide doit assumer trois positions professionnelles plus nettes, à présenter comme des choix par défaut conditionnels et non comme des résultats statistiques :

1. privilégier Zapier au départ pour un flux simple maintenu par un profil non technique ;
2. privilégier Make lorsque les branches, tableaux et transformations rendent le flux difficile à exprimer ou maintenir dans Zapier ;
3. le sur-mesure ne se justifie pas par l’économie d’abonnement seule, mais par une règle critique, stable et durablement mal couverte.

Le futur article doit devenir un **comparatif d’exploitation sur un même flux**, avec unités, coûts, pannes et reprise publiés.

## Score officiel — 10 axes

| Axe | Note /10 | Preuve présente dans le guide | Manque qui bloque la référence |
|---|---:|---|---|
| Intention | 7 | Part d’un incident et répond au choix garder/réparer/reconstruire | Compare trop peu Zapier et Make comme produits |
| Décision | 8 | Cinq verdicts observables, dont hybrider et arrêter | Pas de choix assez clair par profil avant l’audit |
| Pédagogie | 9 | Commande fictive, flux dessiné et pannes expliquées simplement | Idempotence, ordre, files et rapprochement ne sont pas nommés clairement |
| Profondeur | 8 | Erreurs, limites, reprise, responsabilité et TCO couverts | Gouvernance, historique, données et changements d’API à renforcer |
| Preuve | 6 | Sources officielles et protocole de pannes | Aucun scénario réellement exécuté dans plusieurs solutions |
| Comparaison | 5 | Coûts plateforme/code séparés et verdict hybride | Pas de matrice Zapier/Make/n8n/code ni de consommation chiffrée |
| Originalité | 8 | Les cinq pannes et le verdict « arrêter » sont différenciants | Aucun pack de test ou démonstrateur publié |
| Style | 8 | Incident vivant, ton prudent et professionnel | Peu d’opinions produit mémorables |
| Conversion | 7 | CTA cohérent, sans réécriture imposée | Calculateur et passeport d’automatisation absents |
| SEO / produit | 7 | Requête forte, FAQ, liens internes et sources datées | n8n, Power Automate, coûts, données et observabilité insuffisants |
| **Total officiel** | **73/100** | **Très bonne méthode d’incident** | **Comparatif produit et preuve chiffrée insuffisants** |

**Cible officielle : 94/100**, avec aucun axe sous 8/10. La cible suppose un benchmark propriétaire, reproductible et mis à jour lorsque les modèles de facturation changent.

## Diagnostic pondéré secondaire

| Dimension | Poids | Score actuel | Diagnostic |
|---|---:|---:|---|
| Réponse à l’intention de recherche | 15 | 10 | Excellente méthode d’audit, comparatif de choix insuffisant |
| Pédagogie dirigeant | 15 | 13 | Incident concret, vocabulaire accessible, quelques concepts techniques non expliqués |
| Profondeur opérationnelle | 20 | 15 | Pannes, reprise et responsabilité bien traitées ; gouvernance et architecture distribuée à compléter |
| Faits, sources et actualité | 15 | 11 | Sources officielles solides, chiffres et fonctions 2026 pas assez restitués |
| Comparaison concrète | 15 | 7 | Aucun banc d’essai Zapier/Make/code sur le même jeu |
| Exemples et calculs | 10 | 4 | Formules génériques, exemple final sans chiffres |
| Opinion professionnelle | 5 | 3 | Cinq verdicts utiles, choix produit non assumé |
| Conversion honnête | 5 | 4 | CTA cohérent, pas d’outil téléchargeable ni preuve propriétaire |
| **Total secondaire** | **100** | **67/100** | **Bonne méthode d’incident, comparatif trop abstrait** |

Ce second calcul conserve l’ancienne pondération pour comparaison interne ; le score officiel du chantier est celui des dix axes ci-dessus.

## Promesse actuelle

Le guide propose :

1. partir d’un incident métier ;
2. dessiner un flux unique ;
3. observer trente jours de volumes, erreurs et reprises ;
4. provoquer cinq pannes hors production ;
5. nommer un responsable ;
6. comparer 12 et 36 mois ;
7. conclure garder, réparer, hybrider, reconstruire ou arrêter.

Cette architecture est excellente. Elle doit devenir la deuxième moitié du guide, après une vraie comparaison des options.

## Forces à préserver

- La commande en double est plus parlante qu’un tableau marketing.
- L’article rappelle correctement que le code rencontre les mêmes API et les mêmes données invalides.
- Les cinq pannes couvrent donnée invalide, limite, indisponibilité, doublon et secret expiré.
- L’environnement de test et les données fictives sont exigés.
- La reprise métier est distinguée du statut technique « succès ».
- Le coût du code inclut logs, alertes, maintenance, changements d’API et transfert.
- L’option hybride est présentée comme un résultat normal.
- L’arrêt de l’automatisation existe parmi les verdicts.
- Les tâches Zapier et crédits Make ne sont pas présentés comme directement équivalents.
- Le CTA permet de conserver Make ou Zapier.

## Cartographie de la concurrence

### Échantillon de la SERP francophone

L’échantillon reflète les pages retrouvées le 24 juillet 2026, sans prétendre figer le classement Google.

| Ressource | Ce qu’elle fait bien | Limite ou erreur potentielle | Leçon |
|---|---|---|---|
| [Rotek — Make vs Zapier 2026](https://rotek.fr/make-vs-zapier-comparatif-automatisation/) | Verdict rapide, tarifs, interface, intégrations, logique et IA | Certaines affirmations sur les agents Make et la logique Zapier vieillissent déjà ; un exemple compte toutes les étapes Zapier comme tâches alors que la règle dépend du type d’étape | Gagner par la précision des unités et une date de contrôle |
| [Senek — Zapier vs Make](https://www.senek.com/ressources/zapier-vs-make/) | Bonne explication de la complexité dans le temps et de la lisibilité | Peu de preuve chiffrée et pas de sur-mesure | Conserver l’angle maintenance, le mesurer |
| [Bruit Blanc Tech — n8n vs Make vs Zapier](https://bruit-blanc-tech.fr/blog/n8n-vs-make-vs-zapier-quel-outil-automatisation-2026/) | Cas TPE/PME, troisième voie n8n, avis d’un praticien | Chiffres d’intégrations et de prix déjà mouvants ; coût d’auto-hébergement réduit au VPS | Ajouter n8n sans présenter l’exploitation comme gratuite |
| [Websual — Zapier, Make ou n8n](https://websual.fr/blog/zapier-make-n8n-quel-outil) | Couvre budget, données et contrôle | Comparatif généraliste | Approfondir le même flux et les incidents |
| [IT Systèmes — Power Automate, n8n, Make, Zapier](https://www.itsystemes.fr/articles/power-automate-vs-n8n-vs-make-vs-zapier-vs-it-systemes-comparatif-2026) | Élargit aux entreprises Microsoft et aux options d’intégration | Intérêt commercial pour sa propre solution | Ajouter un embranchement « écosystème Microsoft » |

### Ressources internationales

La recherche a interrogé séparément des résultats des États-Unis, du Royaume-Uni, du Canada et d’Australie. Les pages d’agences étrangères ci-dessous servent à cartographier les arguments commerciaux et les angles éditoriaux concurrents. Leurs prix, ratios d’économie et durées d’apprentissage ne sont jamais utilisés comme benchmarks : seuls les mécanismes confirmés par les documentations officielles peuvent nourrir les faits du futur guide.

| Pays / ressource | Apport distinctif | Prudence |
|---|---|---|
| Australie — [InterMeta, Zapier vs Make](https://www.intermeta.ai/zapier-vs-make-australia) | Met au centre le coût humain de construction, surveillance et dépannage | Page d’agence ; les engagements de correction doivent être contractuels |
| Australie — [OpFlow, comparaison PME](https://opflow.com.au/blog/make-com-vs-zapier-australia/) | Exemples de flux simples/complexes, coûts en contexte et avis par profil | Certaines grilles Zapier semblent déjà dater ; vérifier chaque prix |
| Royaume-Uni — [Softomate, Make vs Zapier pour entreprises britanniques](https://www.softomatesolutions.com/blog/make-vs-zapier-uk/) | Décompose un flux, une migration, les unités de facturation et les contraintes UK GDPR ; verdict très assumé par profil | Chiffres d’économie, temps d’apprentissage et généralisation « Make gagne » publiés par une agence d’automatisation : hypothèses non réutilisables sans réplication |
| Canada — [Balgio, Make vs Zapier pour PME québécoises](https://balgio.ca/blogue/make-vs-zapier.html) | Ton dirigeant, exemples PME concrets, migration manuelle et recommandation issue de leur pratique | Plusieurs volumes, fonctions et ratios tarifaires sont affirmés sans protocole ; ne pas en faire des faits 2026 sans contrôle officiel |
| États-Unis — [Zapier, tâches](https://help.zapier.com/hc/en-us/articles/8496196837261-How-is-task-usage-measured-in-Zapier) | Source primaire sur actions réussies, recherche, replay, sous-Zaps et IA | Les multiplicateurs et produits évoluent ; vérifier le compte |
| République tchèque / international — [Make, consommation des crédits](https://help.make.com/how-features-use-credits) | Source primaire très détaillée par déclencheur, recherche, action, agrégateur, itérateur, code et IA | Modèle complexe ; une grille générique peut être fausse pour un scénario donné |
| États-Unis — [Zapier, replay](https://help.zapier.com/hc/en-us/articles/19220226086797-What-is-replay) | Décrit jusqu’à cinq tentatives, intervalles, plans et limites | Rejouer n’annule pas une action déjà réussie dans le système cible |
| International — [Make, exécutions incomplètes](https://help.make.com/incomplete-executions) | Confirme que le stockage des exécutions incomplètes est désactivé par défaut et doit être activé | La fonction n’élimine ni doublons ni erreurs métier |
| France — [CNIL, recommandations API](https://cnil.fr/fr/api-les-recommandations-de-la-cnil-sur-le-partage-de-donnees) | Cadre primaire sur partage sécurisé de données personnelles par API | Ne choisit pas de plateforme et doit être appliqué au flux concret |

## Ce que les concurrents couvrent mieux

1. **Un choix produit immédiat.** Zapier pour simplicité, Make pour complexité et volume, n8n pour contrôle technique.
2. **Les tarifs d’entrée et quotas.** Même imparfaits, ils répondent à la question du lecteur.
3. **Le nombre et la nature des intégrations.**
4. **L’interface et la courbe d’apprentissage.**
5. **La logique conditionnelle, les tableaux et transformations.**
6. **Les fonctions IA et MCP devenues importantes en 2026.**
7. **n8n comme troisième voie majeure.**
8. **Power Automate pour une entreprise Microsoft.**

Le guide actuel est meilleur sur les incidents, mais il ne peut pas gagner la requête sans couvrir ces axes attendus.

## Ce que les concurrents présentent souvent de manière trompeuse

- « Make est trois à cinq fois moins cher » n’est pas une vérité générale. Make facture aussi déclencheurs, recherches, itérations et bundles selon sa règle ; Zapier compte principalement les actions réussies et applique désormais des taux variables à certains usages.
- « Zapier est linéaire » est trop simpliste : Paths, filtres, gestion d’erreur et autres fonctions existent, avec disponibilité et limites selon le plan.
- « n8n auto-hébergé coûte 10 € » oublie sauvegardes, mises à jour, supervision, sécurité et intervention.
- Le nombre total d’intégrations ne dit pas si l’action exacte, les champs et les déclencheurs requis sont disponibles.
- Une automatisation visuelle peut devenir aussi opaque qu’un code non documenté.
- Un scénario réussi en démonstration ne prouve pas qu’il traite les doublons, l’ordre inversé ou la panne de destination.

## Axes absents ou insuffisants

### 1. Le comparatif Zapier/Make n’est pas réellement effectué

Ajouter une matrice datée :

- type d’utilisateur ;
- construction ;
- branches ;
- tableaux et lots ;
- transformations ;
- webhooks ;
- code ;
- connecteurs ;
- historique ;
- replay ;
- alertes ;
- rôles ;
- versionnage ;
- export ;
- résidence des données ;
- coûts par unité ;
- support ;
- IA/MCP ;
- limites d’exécution.

### 2. n8n et Power Automate manquent

Le duel à trois est incomplet :

- n8n intéresse les équipes techniques, l’auto-hébergement et le contrôle ;
- Power Automate peut être rationnel lorsque Microsoft 365, Dynamics ou Azure structurent déjà l’entreprise ;
- Workato ou Tray.ai peuvent apparaître pour gouvernance d’entreprise ;
- Pipedream convient à des profils développeurs ;
- un microservice sur mesure peut compléter une plateforme sans tout remplacer.

Les mentionner brièvement évite une fausse exhaustivité.

### 3. Les modèles de facturation 2026 doivent être expliqués par un flux

La [documentation Zapier](https://help.zapier.com/hc/en-us/articles/8496196837261-How-is-task-usage-measured-in-Zapier) dit qu’une tâche est une action réussie, avec cas particuliers. La [documentation Make](https://help.make.com/how-features-use-credits) détaille déclencheurs, recherches, actions, bundles, itérations, code et IA. Le futur guide doit compter le même flux ligne par ligne dans chaque outil.

### 4. Idempotence, ordre et rapprochement sont trop peu expliqués

Traduction dirigeant à ajouter :

- **idempotence :** rejouer la même commande ne doit pas en créer une deuxième ;
- **ordre :** une annulation reçue avant la création ne doit pas disparaître ;
- **rapprochement :** un contrôle périodique compare source et destination pour retrouver les écarts ;
- **file d’attente :** si la destination tombe, les opérations patientent ;
- **lettre morte :** les opérations impossibles à traiter sont isolées pour intervention ;
- **limitation :** le flux ralentit plutôt que bombarder l’API.

Le code n’offre aucune de ces garanties s’il ne les implémente pas.

### 5. L’historique et l’observabilité sont sous-traités

Faits actuels utiles :

- Zapier annonce jusqu’à 60 jours et 10 000 runs dans l’historique standard ; les logs HTTP détaillés peuvent n’être disponibles que sept jours ;
- Make affiche selon les plans des durées de logs de 7, 30 ou 60 jours ;
- une alerte après la dernière relance peut arriver plusieurs heures après le premier échec ;
- une réussite technique ne confirme pas nécessairement la création métier attendue.

Ajouter export de journaux, métriques, taux d’échec, âge du plus ancien incident et délai de reprise.

### 6. La gouvernance des comptes manque

Documenter :

- compte entreprise contre compte personnel ;
- propriétaire et remplaçant ;
- connexions partagées ;
- rotation des secrets ;
- retrait d’un collaborateur ;
- validation avant mise en production ;
- versions ;
- inventaire des scénarios ;
- responsable métier ;
- responsable technique ;
- coût par centre ou client.

### 7. La protection des données est trop absente

Un flux peut envoyer les mêmes données dans plusieurs services. Vérifier :

- rôles responsable/sous-traitant ;
- DPA ;
- sous-traitants ;
- transferts hors EEE ;
- choix du centre de données ;
- minimisation ;
- conservation des historiques ;
- données dans les logs ;
- données sensibles ;
- suppression et exercice des droits.

### 8. Les API évoluent

Ajouter un chapitre « changement sans panne visible » :

- champ renommé ;
- valeur de statut supprimée ;
- version API dépréciée ;
- permission révoquée ;
- pagination différente ;
- webhook dupliqué ;
- charge utile plus grande ;
- horodatage ou fuseau différent.

### 9. L’arrêt manuel mérite un cas complet

Parfois, dix opérations manuelles mensuelles coûtent moins qu’un scénario fragile. Donner un seuil économique calculé, sans honte éditoriale.

## Faits à actualiser ou préciser

| Sujet | Fait vérifié le 24 juillet 2026 | Conséquence |
|---|---|---|
| Zapier tâches | Les [actions réussies](https://help.zapier.com/hc/en-us/articles/8496196837261-How-is-task-usage-measured-in-Zapier) comptent comme tâches, avec règles spécifiques pour recherche, replay, sous-Zaps, code et IA | Compter étape par étape ; ne pas dire « toute étape = une tâche » |
| Zapier offres | La [page tarifaire](https://zapier.com/pricing) affiche actuellement Free à 100 tâches, Professional à partir de 19,99 $/mois et Team à partir de 69 $/mois, selon périodicité, volume et devise | Publier comme photographie datée, pas comme coût France garanti |
| Zapier replay | L’[autoreplay](https://help.zapier.com/hc/en-us/articles/19220226086797-What-is-replay) peut tenter jusqu’à cinq reprises avec intervalles croissants ; Filters et Paths ne sont pas rejoués dans certains modes | Ajouter un cas où une action déjà réussie ne doit pas être répétée |
| Zapier arrêt automatique | La [documentation d’erreurs](https://help.zapier.com/hc/en-us/articles/8496037690637-How-to-troubleshoot-errors-in-Zap-workflows) indique qu’un Zap peut s’arrêter si 95 % des runs échouent sur sept jours, avec nuances selon plans | Surveiller avant ce seuil et prévoir une alerte métier indépendante |
| Zapier historique | La [documentation d’historique](https://help.zapier.com/hc/en-us/articles/8496291148685-View-and-manage-your-Zap-history) garantit au maximum 60 jours et 10 000 runs affichés | Exporter si l’entreprise a besoin de preuve ou d’analyse longue |
| Make crédits | La [règle actuelle](https://help.make.com/how-features-use-credits) facture généralement un crédit par opération, y compris déclencheur sans donnée, recherche et traitement de bundles ; routeurs/filtres et certains gestionnaires d’erreur sont gratuits ; le code a sa propre règle | Construire un calcul par scénario, pas convertir « tâche = crédit » |
| Make offres | La [page tarifaire](https://www.make.com/en/pricing) affiche actuellement Free à 1 000 crédits, Core à 9 $/mois pour 10 000 crédits, Pro à 16 $ et Teams à 29 $, selon périodicité et configuration | Dater, indiquer USD et recontrôler le jour de publication |
| Make exécutions incomplètes | Le [stockage est désactivé par défaut](https://help.make.com/incomplete-executions) et doit être activé | En faire un P0 du test, pas une note secondaire |
| Make centre de données | Make documente des [organisations US ou UE](https://help.make.com/organizations), choix non modifiable après création | Vérifier avant de créer l’organisation de production |
| Zapier DPA | Le [DPA Zapier](https://zapier.com/legal/data-processing-addendum) prévoit transferts internationaux, SCC/DPF et une liste de sous-traitants ; son annexe standard indique qu’aucune donnée sensible n’est prévue | Lire le contrat applicable avant tout flux sensible |
| Make DPA | Le [DPA Make](https://www.make.com/en/data-processing-agreement.pdf) décrit Make comme sous-traitant pour les traitements initiés par l’utilisateur | Cartographier également chaque application connectée |

## Comparatif concret à ajouter

### Flux témoin

Un formulaire fictif crée ou retrouve :

1. un contact CRM ;
2. une affaire ;
3. un brouillon de facture ;
4. une tâche interne ;
5. un e-mail dans un bac à sable.

Ajouter :

- deux branches selon type de client ;
- une liste de trois lignes produit ;
- une adresse invalide ;
- la même demande envoyée deux fois ;
- une API renvoyant 429 ;
- une destination indisponible ;
- un secret révoqué ;
- une annulation arrivée avant la création.

### Options testées

- Zapier ;
- Make ;
- n8n géré ou auto-hébergé avec coûts réels ;
- plateforme + microservice ciblé ;
- service entièrement sur mesure.

### Mesures

| Critère | Mesure |
|---|---|
| Temps de construction | heures actives par profil |
| Consommation | tâches, crédits, exécutions et coût daté |
| Lisibilité | seconde personne explique le flux sans le créateur |
| Erreurs | cinq pannes détectées et classées |
| Reprise | temps, doublons et opération finale |
| Idempotence | même identifiant rejoué sans duplication |
| Ordre | annulation anticipée traitée correctement |
| Observabilité | alerte, contexte, journal et métrique |
| Gouvernance | comptes, rôles, versions et approbation |
| Données | DPA, localisation, minimisation et logs |
| Sortie | export du scénario, secrets et documentation |
| TCO | 12, 36 et 60 mois |

Le résultat doit publier le plan, les volumes, les unités et les corrections. Une capture du canvas seule ne suffit pas.

## Exemples chiffrés reproductibles à ajouter

Sauf les pages tarifaires officielles citées séparément, tous les chiffres ci-dessous sont **fictifs** et servent uniquement à montrer les calculs.

### Exemple 1 — compter le même résultat métier

Hypothèses fictives :

- 100 commandes/jour ;
- 22 jours/mois ;
- Zapier : 4 actions réussies facturables par commande ;
- Make : 1 déclencheur, 1 recherche et 3 actions par commande ; routeur supposé gratuit selon la règle actuelle ;
- aucun bundle supplémentaire.

```text
Commandes mensuelles = 100 × 22 = 2 200

Zapier = 2 200 × 4 = 8 800 tâches
Make = 2 200 × 5 = 11 000 crédits
```

Conclusion : Make peut consommer davantage d’unités tout en coûter moins cher selon le plan ; les unités ne se comparent jamais seules.

### Exemple 2 — coût humain des erreurs

Hypothèses fictives :

- 2 200 commandes/mois ;
- 1,5 % nécessitent une correction ;
- 12 minutes par correction ;
- coût chargé : 42 €/h.

```text
Incidents = 2 200 × 1,5 % = 33
Temps = 33 × 12 / 60 = 6,6 h
Coût humain = 6,6 × 42 = 277,20 €/mois
```

Ajouter séparément l’impact métier vérifié ; ne pas inventer une vente perdue par erreur.

### Exemple 3 — exposition créée par les doublons

Hypothèses fictives :

- 2 500 commandes ;
- 0,4 % dupliquées ;
- panier moyen : 85 €.

```text
Doublons = 2 500 × 0,4 % = 10
Montant brut exposé = 10 × 85 = 850 €
```

Ce montant n’est pas une perte nette : certaines commandes seront annulées avant expédition. Mesurer avoirs, logistique, support et insatisfaction réels.

### Exemple 4 — seuil de rattrapage du sur-mesure

Hypothèses fictives :

- coût plateforme complet : 1 700 €/mois, incluant abonnement et 18 h de support ;
- développement initial : 30 000 € ;
- exploitation sur mesure : 650 €/mois ;
- même résultat métier.

```text
Économie mensuelle supposée = 1 700 - 650 = 1 050 €
Seuil = 30 000 / 1 050 = 28,6 mois
```

Rejeter ce calcul si la maintenance et les changements d’API ne sont pas inclus.

### Exemple 5 — solution hybride contre réécriture

Hypothèses fictives :

- microservice d’idempotence : 12 jours à 850 €/jour ;
- exploitation : 250 €/mois ;
- réécriture complète : 45 jours à 850 €/jour ;
- exploitation : 650 €/mois.

```text
Hybride année 1 = 12 × 850 + 12 × 250 = 13 200 €
Réécriture année 1 = 45 × 850 + 12 × 650 = 46 050 €
Écart année 1 = 32 850 €
```

L’hybride est rationnel dans cet exemple si le reste de la plateforme reste lisible, fiable et maintenable.

## Objections et cas limites

### « Make est forcément moins cher »

Non. Le coût dépend du nombre de modules, bundles, déclencheurs, recherches, code, IA et volume. Compter le flux réel.

### « Zapier est trop simple pour notre métier »

Tester l’action exacte, les Paths, webhooks et fonctions disponibles. La simplicité peut être un avantage de maintenance.

### « Le code supprimera toutes les limites »

Il déplace les limites vers l’API cible, l’hébergement, la file, la base et l’équipe de support. Le contrôle augmente avec la responsabilité.

### « n8n auto-hébergé est presque gratuit »

Le serveur peut être peu cher ; sauvegardes, mises à jour, surveillance, sécurité et astreinte ne le sont pas.

### « Le flux n’échoue jamais »

Vérifier la période, les événements manquants et les résultats métier. Un historique sans erreur peut simplement ignorer les événements jamais reçus.

### « Nous pouvons rejouer toutes les erreurs »

Une action déjà réussie peut être répétée. Tester un identifiant métier et une recherche avant création.

### « Nos données restent en Europe »

Le centre de données de l’orchestrateur ne suffit pas si le flux appelle des services hors EEE ou des sous-traitants. Cartographier tout le trajet.

### « Le processus change souvent, le no-code sera plus flexible »

La modification est rapide, mais des changements fréquents peuvent rendre le flux incontrôlable. Versionner, approuver et tester.

### « Nous avons seulement dix opérations par mois »

Une procédure manuelle contrôlée peut être moins chère et plus fiable qu’une automatisation maintenue.

### « Le workflow utilise une IA pour décider »

Ajouter seuil de confiance, revue humaine, journal de la décision, coût des tokens, protection contre instructions malveillantes et solution si le modèle est indisponible.

## Opinion professionnelle tranchée, mais conditionnelle

Position recommandée :

> **Je déconseille par défaut de réécrire toute une automatisation dans le seul but d’économiser un abonnement.** Il faut d’abord mesurer les erreurs invisibles, l’absence de propriétaire et les reprises manuelles, puis comparer leur coût au plan Make ou Zapier.
> **Zapier est mon choix de départ pour un flux court qu’un responsable métier doit comprendre et maintenir. Make est mon choix de départ lorsque le flux manipule des listes, plusieurs branches et des transformations visibles. Le sur-mesure devient mon choix uniquement quand une règle stable et critique exige idempotence, ordre, performance ou observabilité que la plateforme ne fournit pas proprement.** Dans cette situation, mon architecture de départ est souvent Make ou Zapier pour l’orchestration et un petit service codé pour le point difficile ; le test du flux peut conduire à une autre conclusion.

Conditions minimales du sur-mesure :

1. flux stable ;
2. volume et incidents mesurés ;
3. règle spécifique isolable ;
4. coût 36 mois accepté ;
5. propriétaire opérationnel ;
6. logs, alertes, sauvegarde et support budgétés ;
7. plan de retour arrière ;
8. API source et destination suffisamment fiables.

## Ressources et outils à créer

### 1. Calculateur de consommation

Entrées :

- événements ;
- actions ;
- branches ;
- recherches ;
- bundles ;
- polling ;
- code ;
- IA ;
- erreurs et replays ;
- coût horaire de support.

Sorties :

- tâches Zapier ;
- crédits Make ;
- estimation n8n ;
- TCO 12/36 mois ;
- point de bascule hypothétique ;
- liste des hypothèses à confirmer.

### 2. Pack des cinq pannes

- données fictives ;
- mock API 429/500 ;
- événement dupliqué ;
- secret expiré ;
- destination indisponible ;
- grille de résultat ;
- avertissement de ne jamais l’utiliser en production.

### 3. Passeport d’automatisation

Un document par flux :

- objectif métier ;
- source et destination ;
- propriétaire ;
- comptes ;
- secrets ;
- données ;
- volume ;
- coût ;
- alertes ;
- reprise ;
- dernière revue ;
- procédure d’arrêt.

### 4. Modèle de registre des sous-traitants du flux

Pour chaque outil traversé : rôle, donnée, pays, DPA, sous-traitants, conservation, suppression, contact et date de contrôle.

### 5. Démonstrateur d’idempotence

Petit exemple open source et commenté :

- identifiant de commande ;
- recherche avant création ;
- verrou ou contrainte unique ;
- replay ;
- journal ;
- rapprochement.

L’outil doit expliquer le concept à un dirigeant sans l’inciter à copier du code en production.

## Proposition de nouveau plan

1. **Verdict immédiat : Zapier simple, Make complexe, code seulement pour une contrainte prouvée**
2. **Même flux, quatre options : ce que nous avons réellement testé**
3. **Zapier, Make, n8n, Power Automate et sur-mesure : carte des profils**
4. **Compter correctement tâches, crédits, bundles, code et IA**
5. **Calcul comparatif sur 100, 2 000 et 50 000 événements**
6. **La commande dupliquée : comprendre idempotence sans jargon**
7. **Cinq pannes provoquées et résultats par outil**
8. **Replay, files, ordre et opérations impossibles à traiter**
9. **Logs, alertes et délai réel avant détection**
10. **Données, DPA, localisation et historique**
11. **Qui possède le compte et qui corrige à 18 h ?**
12. **Quand coder un seul maillon plutôt que tout le flux**
13. **TCO sur 12, 36 et 60 mois**
14. **Cas par profil : commerce, SaaS, PME de services, finance, RH**
15. **Verdict garder, réparer, migrer, hybrider, reconstruire ou arrêter**
16. **Plan d’audit sans toucher à la production**
17. **Outils téléchargeables, sources datées et limites**

## Risques juridiques et commerciaux

### Juridiques

- Chaque service traversé peut être un sous-traitant distinct.
- Vérifier DPA, sous-traitants, transferts et localisation au jour de la mise en production.
- Minimiser les données dans le flux et les journaux.
- Les historiques techniques peuvent contenir des données personnelles ou confidentielles.
- Le contrat de prestation doit préciser propriété des scénarios, comptes, connexions, documentation, support et réversibilité.
- Les données sensibles, bancaires, de santé ou RH exigent une analyse spécialisée ; le DPA standard Zapier consulté ne les prévoit pas.
- Une automatisation de décision peut exiger transparence, intervention humaine ou analyse supplémentaire selon son usage.
- Les recommandations de la CNIL sur les API doivent être appliquées au partage réel, pas citées comme label.

### Commerciaux

- Ne pas promettre un nombre d’heures économisées sans mesure avant/après.
- Ne pas annoncer Make moins cher ou Zapier plus simple dans tous les cas.
- Ne pas présenter le coût d’un VPS comme TCO de n8n.
- Ne pas garantir zéro doublon : publier les mécanismes et tests.
- Dater chaque tarif et indiquer devise, périodicité et volume.
- Déclarer le biais des comparatifs écrits par Make, Zapier ou une agence.
- Si un cas client est utilisé, obtenir l’autorisation et publier la méthode de calcul.

## Priorités de réécriture

### P0 — indispensable

1. ajouter une vraie comparaison Zapier/Make/n8n/code ;
2. expliciter que les exécutions incomplètes Make sont désactivées par défaut ;
3. compter un même flux avec les règles 2026 ;
4. publier un verdict produit par profil ;
5. ajouter cinq exemples chiffrés ;
6. traiter idempotence, ordre et rapprochement.

### P1 — forte valeur

1. créer calculateur, pack de panne et passeport ;
2. ajouter gouvernance, données et historique ;
3. tester l’option hybride ;
4. comparer 60 mois et pics de charge ;
5. inclure IA/MCP sans détourner le sujet.

### P2 — avantage défendable

1. exécuter trimestriellement le même flux ;
2. publier captures, exports, logs et coûts ;
3. faire vérifier les résultats par une seconde personne ;
4. ajouter cas clients autorisés ;
5. maintenir un changelog des règles tarifaires.

## Critères d’acceptation de la future refonte

- La réponse courte choisit une option par profil.
- Le même flux est exécuté dans plusieurs solutions.
- Les tâches et crédits sont calculés selon les règles officielles actuelles.
- Les prix sont datés, devisés et liés aux pages officielles.
- Chaque montant illustratif est marqué fictif.
- n8n et Power Automate sont au moins positionnés.
- Les cinq pannes incluent doublon et ordre.
- La conservation des logs et la détection sont chiffrées.
- Le TCO inclut temps humain et exploitation.
- Le lecteur peut télécharger un calculateur ou un pack de test.
- Le CTA n’impose ni migration ni développement.

## Sources primaires à conserver

- [Zapier — mesure des tâches](https://help.zapier.com/hc/en-us/articles/8496196837261-How-is-task-usage-measured-in-Zapier)
- [Zapier — tarifs](https://zapier.com/pricing)
- [Zapier — limites](https://help.zapier.com/hc/en-us/articles/8496181445261-Zap-limits)
- [Zapier — replay](https://help.zapier.com/hc/en-us/articles/19220226086797-What-is-replay)
- [Zapier — diagnostic des erreurs](https://help.zapier.com/hc/en-us/articles/8496037690637-How-to-troubleshoot-errors-in-Zap-workflows)
- [Zapier — historique](https://help.zapier.com/hc/en-us/articles/8496291148685-View-and-manage-your-Zap-history)
- [Zapier — DPA](https://zapier.com/legal/data-processing-addendum)
- [Make — crédits](https://help.make.com/how-features-use-credits)
- [Make — tarifs](https://www.make.com/en/pricing)
- [Make — exécutions incomplètes](https://help.make.com/incomplete-executions)
- [Make — gestion des exécutions incomplètes](https://help.make.com/manage-incomplete-executions)
- [Make — organisations et centres de données](https://help.make.com/organizations)
- [Make — DPA](https://www.make.com/en/data-processing-agreement.pdf)
- [CNIL — recommandations API](https://cnil.fr/fr/api-les-recommandations-de-la-cnil-sur-le-partage-de-donnees)

## Conclusion d’audit

Le guide actuel sait diagnostiquer un flux cassé, ce qui constitue une excellente base. Pour devenir la meilleure ressource, il doit maintenant **faire fonctionner, casser, reprendre et chiffrer le même scénario dans chaque option**. Cette preuve permettra d’être plus tranché que les comparateurs, tout en étant plus fiable qu’eux : pas « Make est toujours moins cher » ni « le code résout tout », mais une décision calculée, reproductible et exploitable par un dirigeant.
