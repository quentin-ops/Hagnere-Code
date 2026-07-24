# Dossier de recherche — Faut-il un logiciel de planning sur mesure ?

> Dossier ouvert en passe 1 puis complété jusqu'à la validation P4. Il conserve
> la recherche historique et documente la rédaction, les contre-audits et les
> contrôles terminés le 24 juillet 2026. Le guide teste des contraintes communes
> sans prétendre résoudre tous les secteurs ni donner un avis juridique.

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
| `docs/research/manifests/logiciel-planning-sur-mesure-p1.sha256` | P1 | Manifeste existant ; historique de recherche conservé. |
| `docs/research/manifests/logiciel-planning-sur-mesure-p2.sha256` | P2 | Manifeste existant de rédaction et d'intégration. |
| `docs/research/manifests/logiciel-planning-sur-mesure-p3.sha256` | P3 | Manifeste existant après contre-audit et corrections. |
| `docs/research/manifests/logiciel-planning-sur-mesure-p4.sha256` | P4 | Manifeste final créé après les contrôles P4 ; son empreinte est intégrée au snapshot commun du lot. |

## 1. Fiche d'identité

```text
Slug : logiciel-planning-sur-mesure
Statut actuel : publiable — validation éditoriale déléguée
Requête principale : logiciel planning sur mesure
Moment du parcours : décider
Lecteur précis : dirigeant ou responsable des opérations d'une PME qui planifie des personnes, interventions, véhicules, machines ou lieux dans Excel, un agenda ou un logiciel standard
Situation déclenchante : une urgence, une absence ou une compétence obligatoire oblige à refaire le planning ; plusieurs versions circulent et l'équipe ne sait pas laquelle est publiée
Décision principale après lecture : sécuriser l'outil actuel, acheter un logiciel standard, connecter et compléter un standard, développer un planning sur mesure, ou reporter tant que les règles ne sont pas explicites
Niveau de connaissance au départ : sait produire un calendrier mais ne distingue pas clairement disponibilité, capacité, compétence, règle obligatoire, préférence, publication, notification et historique
5 questions indispensables : que planifie-t-on et dans quelle unité ? quelles contraintes sont obligatoires ou préférentielles ? quels conflits doivent être détectés ? quelles données viennent d'un ERP/SIRH/GMAO et où repart le résultat ? qui prépare, valide, publie et modifie ?
3 objections ou craintes : « Excel ne tiendra plus » ; « le sur-mesure optimisera forcément tout » ; « un logiciel standard imposera sa façon de travailler »
Action utile sans contact commercial : construire quinze scénarios fictifs de conflit et les faire exécuter dans l'outil actuel puis dans deux solutions standard
CTA possible : cadrer les règles et les scénarios d'un futur planning
Hors périmètre : gestion complète des interventions terrain, ordonnancement industriel avancé, conseil juridique individualisé, surveillance permanente des salariés, algorithme d'optimisation garanti, comparaison exhaustive des éditeurs
Date de la recherche : 23 juillet 2026
Responsable de la synthèse : agent de recherche Apps/SaaS
```

## 1 bis. Contrat de langage humain

- Phrase exacte : « Notre planning Excel ne gère plus correctement les
  compétences, les absences, les véhicules et les urgences : est-ce qu'il faut
  acheter un logiciel ou créer le nôtre ? »
- Réponse en une phrase : testez d'abord quinze conflits réels ; choisissez un
  standard s'il les traite sans contournement majeur, ajoutez une connexion si
  les règles sont standards mais les données dispersées, et ne développez que
  si des règles métier stables et décisives restent impossibles à exprimer.
- Terme central : une contrainte est une règle que le planning doit respecter,
  comme une compétence obligatoire, une absence ou un véhicule indisponible ;
  une préférence améliore le planning mais peut être sacrifiée.
- Mots ordinaires : équipe, absence, urgence, compétence, véhicule, chantier,
  horaire, disponibilité, remplacement, validation, version, notification.
- Jargon à traduire : ordonnancement, capacité finie, solver, optimisation,
  API, SIRH, GMAO, ressource, règle dure/souple.
- Projet des 150 premiers mots : scène d'une absence qui force quatre appels,
  réponse standard/API/sur-mesure/report et définition de la contrainte.
- Décision après 150 mots : le lecteur doit écrire ses scénarios avant de
  regarder des démonstrations.
- H2 relus isolément : P2.
- Comparaison à 390 px : scénarios en cartes, pas grille illisible.
- FAQ première phrase : P4.
- CTA résultat : « Clarifier les règles que mon planning doit vraiment gérer ».

### Test sujet, action, résultat

| Phrase initiale à éviter | Qui agit ? | Action | Résultat | Phrase réécrite |
| ------------------------ | ---------- | ------ | -------- | --------------- |
| « Les contraintes doivent être modélisées. » | Le planificateur | Écrit chaque règle avec un exemple et une exception | L'outil peut être testé | « Écrivez : “cette intervention exige l'habilitation X et un véhicule Y”, puis ajoutez le cas où l'urgence autorise un autre ordre. » |
| « La collaboration doit être fluidifiée. » | Le planificateur et le manager | Préparent, valident et publient une version nommée | L'équipe sait quel planning suivre | « Distinguez le brouillon, le planning validé et la modification urgente. » |
| « Une API améliore l'intégration. » | Le système | Importe absences/commandes et renvoie affectations/statuts | La double saisie baisse | « Testez d'où arrivent les absences et où l'affectation doit repartir. » |
| « L'optimisation génère des gains. » | Le responsable | Compare un critère choisi avant/après sur des cas identiques | Il constate ou non une amélioration | « Choisissez d'abord ce que vous voulez réduire — retard, trajet ou heures supplémentaires — puis mesurez-le. » |
| « Le sur-mesure s'adapte au métier. » | L'équipe projet | Transforme des règles stables en tests automatiques | Le logiciel bloque les vrais conflits | « Ne développez qu'une règle que l'équipe sait expliquer, illustrer et tester. » |

### Test de l'ouverture

- [x] scène vécue avant méthode ;
- [x] contrainte, API, SIRH et GMAO définis au premier usage ;
- [x] aucun lexique préalable ;
- [x] aucune métaphore structurante ;
- [x] réponse honnête sans promesse d'optimisation.

## 2. Cannibalisation

| Page existante | Intention | Différence | Maillage |
| -------------- | --------- | ---------- | -------- |
| `/guides/application-gestion-interventions-terrain` | Cadrer tout le parcours terrain : planning, tournées, compte rendu, facturation | Se limite au moteur de planification et aux conflits de ressources | Lier si photos, signature, hors-ligne, compte rendu ou facturation deviennent centraux |
| `/guides/application-suivi-production-pme` | Suivre ordres, étapes, rejets et alertes de production | Compare les règles d'affectation et de capacité, sans suivre toute la production | Lier pour le suivi d'atelier |
| `/guides/digitaliser-bons-intervention` | Remplacer les bons papier | Ne traite pas les comptes rendus, seulement la décision de planification | Lier si le problème vient après l'affectation |
| `/guides/transformer-excel-en-application` | Décider largement de sortir d'Excel | Teste spécifiquement quinze contraintes de planning | Lier pour migration générique et collaboration |
| `/services/outils-internes-sur-mesure` | Page commerciale | Guide pouvant recommander Excel ou un standard | CTA tardif |

**Justification d'une URL distincte :** aucune page existante ne fait tester
une série de conflits de planning afin de choisir entre outil actuel, standard,
standard connecté et développement spécifique.

## 3. Demande et vocabulaire

SERP du 23 juillet 2026 dominée par PlanningPME, Visual Planning, Odoo et des
éditeurs verticaux. L'intention `logiciel planning sur mesure` se mélange à
`planning équipe`, `planning interventions`, `planning production`, `planning
chantier`, `planning ressources`, `planning employés`.

Questions observées ou attendues :

- Quel logiciel remplace un planning Excel ?
- Peut-on gérer compétences, absences et véhicules ensemble ?
- Un planning peut-il se connecter à l'ERP ou au logiciel RH ?
- Combien coûte un logiciel de planning sur mesure ?
- Peut-il prévenir automatiquement les conflits ?
- Peut-on géolocaliser les techniciens ?

Search Console/Keyword Planner indisponibles : aucun volume ni potentiel de
classement. Le mot « planning » devra être désambiguïsé dès l'ouverture pour ne
pas attirer une intention trop large.

## 4. Carte concurrentielle

| Page | Réponse | Preuves | Bon point | Manque | Conflit |
| ---- | ------- | ------- | --------- | ------ | ------- |
| PlanningPME | Planning partagé de ressources | Fonctions/démonstrations | Vocabulaire PME | Ne compare pas loyalement avec spécifique/hybride | Éditeur |
| Visual Planning | Plateforme configurable, API et développements | Fonctions, API REST/SOAP annoncée | Rend l'option standard + intégration visible | Les affirmations de performance restent fournisseur | Éditeur/intégrateur |
| Odoo Planning | Planifier équipes, rôles et shifts dans une suite | Documentation produit | Intégration à une suite métier | Cas spécifiques et coût de paramétrage à tester | Éditeur |
| Éditeurs verticaux | Planning adapté à un secteur | Démonstration métier | Couverture spécialisée | Comparaison hors de leur modèle limitée | Éditeur |
| Développeurs sur mesure | Règles propres et intégrations | Méthode/projets | Reconnaissent les contraintes atypiques | Peuvent minimiser adoption, maintenance et standards | Vendeur |
| Service-Public/CNIL | Règles sociales et géolocalisation | Sources officielles | Cadre fiable | Ne choisit pas le logiciel | Aucun |

**Angle mort commun :** un jeu public et reproductible de scénarios de conflit
permettant de comparer un standard et un spécifique sans se fier à la
démonstration parfaite du vendeur.

**Valeur originale :** quinze scénarios, distinction obligatoire/préférence,
workflow brouillon-validé-publié et décision pouvant préserver Excel.

## 5. Fiche de preuves

| Affirmation utilisable | Source primaire | Nature | Périmètre | Date | Confiance | Lien visible | Conséquence | Fraîcheur |
| ---------------------- | --------------- | ------ | --------- | ---- | --------- | ------------ | ----------- | --------- |
| Des logiciels standards couvrent ressources, événements, disponibilités et usages métiers variés | [PlanningPME — logiciel de planning](https://www.planningpme.fr/logiciel-planning.htm) | Fournisseur | Fonctions annoncées | 23 juillet 2026 ; page difficile à extraire automatiquement | Moyenne jusqu'à relecture P2 | Comparaison standard | Tester les fonctions au lieu de supposer qu'elles manquent | Trimestrielle |
| Visual Planning annonce une API pour lire/créer/modifier ressources et événements et interfacer ERP, CRM ou SIRH | [Visual Planning — API](https://www.visual-planning.com/fr/interfaces/api-visual-planning) | Fournisseur | Offre et licence en vigueur | 23 juillet 2026 | Élevée sur l'annonce | Option hybride | Vérifier documentation, droits, limites et coût dans le devis réel | Trimestrielle |
| Odoo documente une application de planification intégrée à sa suite | [Odoo — Planning](https://www.odoo.com/fr_FR/app/planning) et [documentation Odoo 19](https://www.odoo.com/documentation/19.0/fr/applications/services/planning.html) | Fournisseur | Version 19/offre courante | 23 juillet 2026 ; extraction web indisponible | Moyenne jusqu'à relecture P2 | Comparaison standard | Inclure les solutions déjà présentes dans l'écosystème de l'entreprise | À la version |
| Les règles d'aménagement et de modification des horaires dépendent du cadre applicable ; Service-Public détaille notamment des règles de délai dans certains cas | [Service-Public — aménagement des horaires](https://www.service-public.gouv.fr/particuliers/vosdroits/F75) | Administration | Salariés du privé, accords et situations précises | 23 juillet 2026 | Élevée | Encadré juridique | Ne pas coder un délai universel ; faire valider convention et contexte |
| Les durées maximales, repos et exceptions sont encadrés et dépendent de la situation | [Service-Public — durée du travail](https://www.service-public.gouv.fr/particuliers/vosdroits/F1911) | Administration | Salarié majeur à temps plein du privé ; exceptions | 23 juillet 2026 | Élevée | Partie règles | Paramétrer les règles applicables et leur source, avec revue compétente |
| La géolocalisation des véhicules de salariés doit répondre à une finalité légitime, rester proportionnée et ne pas surveiller hors temps de travail | [CNIL — géolocalisation des véhicules des salariés](https://www.cnil.fr/fr/la-geolocalisation-des-vehicules-des-salaries) | Autorité | Véhicules/salariés ; analyse propre | 23 juillet 2026 | Élevée | À côté de toute fonction carte | Ne pas ajouter la géolocalisation par défaut ; consulter DPO/juriste si besoin |
| France Num publie un guide 2026 sur la démarche numérique des entreprises, incluant choix, conduite du changement et sécurité | [France Num — Guide numérique des entreprises 2026](https://www.francenum.gouv.fr/files/2026-03/guide-numerique-des-entreprises_edition-2026_mars-2026.pdf) | Ressource publique | Cadre général PME | Mars 2026, consulté le 23 juillet | Élevée | Partie adoption | Évaluer usages, accompagnement et sécurité, pas seulement fonctions |

### Contradictions et données à ne pas publier

- « Le planning sur mesure optimise automatiquement les tournées, coûts ou
  équipes » : aucune optimisation sans objectif, données, contraintes et test.
- Aucun délai universel de modification d'horaires ; droit, accord, convention,
  secteur, urgence et contrat peuvent changer l'analyse.
- Ne pas traiter géolocalisation ou suivi permanent comme fonction normale.
- Ne pas affirmer qu'Excel est dangereux ou obsolète : il peut rester adapté à
  un planning simple, peu partagé et contrôlable.
- Ne pas prétendre qu'un standard ne peut gérer les règles métier avant de
  l'avoir configuré et testé.
- Les prix, API et fonctions fournisseur doivent être revérifiés.
- Aucun faux client, économie, taux d'erreur, délai ou ROI.
- Ne pas mélanger planning de personnel, interventions et production dans un
  exemple qui ferait croire à une solution universelle.

### Calculs reproductibles

- Aucun ROI sans mesure avant/après.
- Coût sur 36 mois : licences + paramétrage + migration + intégrations +
  formation + temps de planification + maintenance + support + évolution +
  sortie.
- Temps actuel : mesurer quatre semaines normales et une semaine tendue ;
  distinguer création, modification, appel de confirmation et correction.
- Erreurs : compter conflits détectés avant publication, après publication et
  coûts documentés ; pas de montant inventé.
- Si gain de temps : `(temps avant - temps après) × fréquence`, puis vérifier
  que le temps est réellement réaffecté ou évité.
- Contrôle inverse : somme mensuelle × 36 + ponctuel ; recomptage de quinze
  scénarios par une seconde personne.
- Inconnus : saisonnalité, absences, convention, adoption, qualité des données,
  optimisation et changements d'organisation.

## 6. Empreinte éditoriale

| Guide | Ouverture | Progression | Artefact | Exemple | CTA | Conclusion |
| ----- | --------- | ----------- | -------- | ------- | --- | ---------- |
| `application-gestion-interventions-terrain` | Terrain/bureau | Parcours complet | Carte des rôles | Intervention | Cadrage | Produit métier |
| `application-suivi-production-pme` | Atelier | Ordres/étapes/alertes | Flux | Production | Cadrage | Suivi |
| `transformer-excel-en-application` | Fichier devenu fragile | Diagnostic/migration | Checklist | Tableur | Audit | Remplacer ou garder |
| `digitaliser-bons-intervention` | Papier | Saisie/preuve/transmission | Modèle de bon | Terrain | Fin | Numérisation |

```text
Tension : « Une absence déclenche quatre appels et personne ne sait quelle version est la bonne. »
Ouverture : scène d'une modification urgente
Progression : définir l'objet → séparer règles/préférences → 15 scénarios → tester standards → intégrations → droit/données → coût → verdict
Artefact : jeu de quinze conflits
Voix : proche du responsable d'exploitation, sans abstraction mathématique
CTA : après le test autonome
Conclusion : tester deux solutions avec les mêmes quinze scénarios
Différences : moteur de planning seul ; version brouillon/publiée ; règles dures/souples ; test standard avant spécifique ; Excel reste possible
```

## 7. Plan annoté

| Section | Question | Preuve/exemple | Décision | Format |
| ------- | -------- | -------------- | -------- | ------ |
| Une absence, quatre appels, trois versions | Quel problème ? | Scène | Nommer la source publiée | Ouverture |
| Que planifiez-vous vraiment ? | Personne, tâche, machine, lieu ? | Quatre familles | Limiter le périmètre | Questions |
| Règle obligatoire ou préférence ? | Que peut-on sacrifier ? | Compétence vs trajet | Prioriser | Paires |
| Quinze conflits à écrire | Que doit réussir l'outil ? | Absence, compétence, matériel, chevauchement, urgence, multi-site, demande de changement, etc. | Créer le test | Cartes |
| Testez l'outil actuel et deux standards | Le spécifique est-il nécessaire ? | Même jeu | Garder/acheter | Score commenté |
| Vérifiez les entrées et sorties | Où sont les données ? | ERP, RH, GMAO, notification | Standard + API possible | Schéma |
| Brouillon, validation, publication | Qui décide ? | Trois statuts | Éviter versions concurrentes | Chronologie |
| Droit du travail et données | Que ne pas automatiser seul ? | Horaires/géolocalisation | Revue spécialisée | Encadré |
| Coût 36 mois et adoption | Quelle option tient ? | Formule | Verdict | Calcul |
| Cinq verdicts et action lundi | Que faire ? | Conditions observables | Garder, standard, hybride, spécifique, reporter | Cartes |

### Quinze scénarios prévus

1. deux tâches au même horaire ;
2. salarié absent ;
3. compétence ou habilitation obligatoire ;
4. véhicule ou machine indisponible ;
5. capacité maximale dépassée ;
6. urgence insérée après publication ;
7. déplacement entre deux sites impossible ;
8. préférence d'un salarié contraire à une contrainte ;
9. changement demandé puis validé ;
10. brouillon visible par erreur ;
11. notification non reçue ;
12. donnée d'absence modifiée dans le SIRH ;
13. commande annulée dans l'ERP ;
14. export complet et historique de modification ;
15. retour à la version précédente.

Les données et entreprises seront fictives. Le résultat ne sera pas un score
universel : une contrainte bloquante peut suffire à écarter une option.

### Scénario dirigeant

**Exemple illustratif fictif :** une entreprise de contrôle affecte techniciens
et véhicules. Un outil standard réussit treize scénarios ; il échoue sur une
règle rare de double habilitation mais expose une API. Le verdict peut être
« standard + petit module de validation », et non « tout réécrire ».

### FAQ

- Excel peut-il encore suffire pour un planning ?
- Combien coûte un logiciel de planning sur mesure ?
- Le sur-mesure optimise-t-il automatiquement le planning ?
- Comment intégrer les règles de temps de travail ?
- Peut-on géolocaliser les salariés ?
- Peut-on connecter le planning à l'ERP, au SIRH ou à la paie ?
- Combien de temps faut-il pour migrer ?

## 8. Ressource et conversion

```text
Ressource nécessaire : oui si construite et testée
Problème : démonstrations incomparables et règles implicites
Résultat : verdict garder / standard / standard + API / sur-mesure / reporter
Formats : tableur éditable + PDF
Champs : scénario, donnée initiale, règle obligatoire, préférence, résultat attendu, résultat observé, contournement, criticité, preuve, intégration, responsable
Exemple rempli : entreprise fictive de contrôle
Conclusion ne pas investir : oui
Données : fictives ou anonymisées, usage local
QA : quinze scénarios exécutés, formules, PDF, impression, accessibilité, revue juridique des règles concernées
Limite : ne certifie ni conformité sociale ni optimisation
Maintenance : revue à chaque changement de règle/organisation et annuelle des sources
Bon fit : contraintes stables, plusieurs ressources, conflits coûteux, intégrations ou validation spécifique
Mauvais fit : planning simple, processus instable, équipe non prête, besoin principal situé après l'affectation
Action : écrire et tester les quinze scénarios
CTA : « Clarifier les règles que mon planning doit vraiment gérer » vers /demarrer-un-projet
```

## 9. Rapport P1

```text
PASSE 1 TERMINÉE
Slug : logiciel-planning-sur-mesure
Lecteur : dirigeant/opérations — « Excel ne gère plus compétences, absences, véhicules et urgences : acheter ou créer ? »
Décision : garder, standard, standard + API, sur-mesure ou report
Angle : quinze conflits identiques testés avant le choix
Pages proches : interventions/production/Excel couvrent des parcours plus larges ; celui-ci isole le moteur de planning
Sources : éditeurs primaires, Service-Public, CNIL, France Num
Incertitudes exclues : optimisation garantie, règle sociale universelle, géolocalisation par défaut, coût/délai/ROI inventés
Action/CTA : jeu de scénarios ; clarifier les règles
Plan : scène, objet, règles, scénarios, test, intégrations, publication, droit, coût, verdict
Snapshot : dossier P1 courant ; manifeste par orchestrateur
```

## 10. Historique P1 — portes prévues le 23 juillet 2026

> État conservé pour la traçabilité : ces travaux restaient à accomplir à la
> clôture de P1. P2, P3 et P4 ont été terminées le 24 juillet 2026 ; voir
> section 12.

- P2 devait intégrer l’article et revérifier les fonctions fournisseurs ainsi
  que le cadre social.
- P3 devait refaire indépendamment les scénarios et calculs, puis contrôler la
  cannibalisation.
- P4 devait contrôler plume, cinq largeurs, thèmes, liens, console, image
  sociale, accessibilité et autorisation.

## 11. Historique P1 — revue préparatoire

> Cette photographie du 23 juillet 2026 est remplacée, pour le verdict courant,
> par la validation finale de la section 12.

| Critère | État P1 | Condition finale |
| ------- | ------- | ---------------- |
| Intention | Validée | « planning » désambiguïsé dès l'ouverture |
| Décision | Validée | Cinq verdicts observables |
| Pédagogie | Validée au plan | Obligatoire/préférence compris |
| Preuves | Primaires, limites notées | Réouverture P2/P3 |
| Droit/données | Prudence intégrée | Revue spécialiste selon contexte |
| Conversion | Loyale | Excel/standard possibles |
| Test humain | Non réalisé | À réaliser ou déclarer |
| Page/rendu/SEO | Non créés | P4 obligatoire |

- État historique P1 — contre-audit indépendant : non réalisé.
- État historique P1 — ressource, page, schémas et image sociale : non créés à
  ce stade.
- État historique P1 — publication : hors périmètre de cette première passe.

## 12. Validation finale P2, P3 et P4 — 24 juillet 2026

### Rapport P2 — Rédaction et intégration

- Article complet intégré sur `/guides/logiciel-planning-sur-mesure`, avec
  ouverture destinée au dirigeant, comparaison loyale, sources visibles,
  scénarios fictifs signalés, limites juridiques, FAQ, maillage et CTA unique.
- Métadonnées, données structurées `Article` et `BreadcrumbList`, image sociale
  dédiée et inscription au registre des guides contrôlées.
- Snapshot :
  `docs/research/manifests/logiciel-planning-sur-mesure-p2.sha256`.

### Rapport P3 — Contre-audits et corrections

- `final_audit_apps` : contre-audit indépendant du fond, des sources, des
  scénarios, des limites juridiques et de la pédagogie dirigeant.
- `anti_ia_final` : passe de plume humaine, suppression des formulations
  mécaniques et vérification de la réponse dans l'ouverture.
- `seo_tech_final` : contrôle indépendant de l'intégration SEO et technique.
- Les corrections P3 ont été appliquées puis relues ; aucun P0 ni P1 ne reste.
- Snapshot :
  `docs/research/manifests/logiciel-planning-sur-mesure-p3.sha256`.

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
  `docs/research/manifests/logiciel-planning-sur-mesure-p4.sha256`.

### Verdict

**Score final : 19/20.** Le fond, la pédagogie, les preuves, la comparaison, les
limites juridiques, la conversion et l'intégration sont validés. Un point reste
volontairement retiré car aucun lecteur humain réel indépendant n'a participé
au test final.

Statut actuel : publiable — validation éditoriale déléguée

Décision de publication : autorisée explicitement par le commanditaire

Test réalisé par une personne réelle : non

Réserve SEO : la page est techniquement indexable ; indexable ne signifie pas
indexée par Google, et aucune indexation effective ni position n'est promise.
