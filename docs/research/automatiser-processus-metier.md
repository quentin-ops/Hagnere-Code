# Dossier de recherche — Automatiser un processus métier

> Remise à zéro éditoriale du 29 juillet 2026. L’ancien dossier et l’ancien
> article ne sont ni une source ni un modèle de fond. Cette fiche accompagne
> exclusivement la nouvelle version créée selon
> `docs/workflow-maitre-guides-4-passes.md`.

## A. Identité

```text
Slug : automatiser-processus-metier
Numéro dans la roadmap : 1
Thème : Automatiser un processus métier : par où commencer ?
Sortie éditoriale : OUTILS
Intention principale : choisir le premier processus à automatiser
Lecteur visé : dirigeant de TPE/PME ou responsable opérationnel non technique
Situation déclenchante : ressaisies, dossiers copiés entre outils, relances ou
rapports récurrents ; le lecteur pressent un gain mais ne sait ni par quel cas
commencer ni quelle solution acheter
Décision attendue : sélectionner un processus contrôlable, choisir la réponse
la moins complexe qui satisfait le besoin, préparer un pilote ou décider de
ne pas automatiser
Route de service : /services/outils-internes-sur-mesure
Différenciateur demandé par la roadmap : carte des processus, matrice
gain/risque et exemple chiffré
Différenciateur réalisé en P1 puis vérifié en P2 : cinq portes non
compensatoires, comparaison de sept réponses distinctes, calcul séparant temps
retirable, adoption, réaffectation, capacité et dépense réellement évitée,
outil interactif local et protocole d’erreur/reprise
Date du travail P1 : 2026-07-29
Date du travail P2 : 2026-07-29
Date du travail P3 : 2026-07-29
Date du travail P4 : 2026-07-29
Statut : PASSE_4_TERMINEE_EN_ATTENTE_GATE_G4
```

### Empreinte éditoriale retenue

```text
Tension motrice : la tâche la plus visible ou la plus chère n’est pas
nécessairement le meilleur premier essai
Ouverture : situation concrète de ressaisie, puis réponse conditionnelle
Architecture : travail réel → portes bloquantes → options → calcul
contradictoire → exemple de refus économique → pilote → responsabilités →
sécurité → fiche de décision
Traitement des exemples : un seul scénario numérique fictif, arrondi,
reproductible et volontairement défavorable
Rythme et formats : prose courte, carte copiable, tableaux mobiles, calculateur
local et tests d’erreur
Action autonome : remplir la carte, passer les cinq portes, refaire le calcul
et produire une fiche de décision sans contacter Hagnéré Code
CTA : sidebar du gabarit vers /demarrer-un-projet, avec une promesse précise
et sans délai ni résultat garanti
Mécanismes volontairement non repris : classement universel de métiers,
seuils de volume inventés, liste de marques, gains moyens, prix de marché,
« quick win » automatique, témoignage client et téléchargement de tableur
```

## B. Contrat de réponse

### Réponse courte

Le premier processus à automatiser doit être fréquent, mesuré, régi par des
règles assez stables, alimenté par des données fiables et facile à reprendre
si l’outil échoue. Le gain potentiel ne compense pas une erreur impossible à
détecter, l’absence de responsable ou une décision sensible sans contrôle
humain. Avant un développement, il faut comparer la simplification, une
fonction existante, un connecteur, le no-code ou la RPA, un logiciel sur mesure
et une assistance par IA. Le calcul sépare le temps techniquement retirable,
l’adoption moyenne et les heures réellement réaffectées. Leur valorisation au
coût horaire mesure une capacité ; elle ne devient une dépense évitée que si
un paiement disparaît réellement.

### Phrase réelle du lecteur

> « On recopie les mêmes dossiers entre trois outils : par quoi commencer sans
> acheter une usine à gaz ni déplacer le problème ? »

### Questions indispensables

1. Comment décrire un processus sans méthode de consultant ?
2. Quelles conditions éliminent un mauvais candidat avant le calcul ?
3. Comment distinguer tâche pénible, tâche coûteuse et bon premier pilote ?
4. Peut-on supprimer ou simplifier l’étape ?
5. Le logiciel déjà payé contient-il la fonction ?
6. Quand un connecteur suffit-il ?
7. Quand choisir une plateforme no-code ?
8. Quand une automatisation d’interface RPA reste-t-elle raisonnable ?
9. Quand le sur-mesure se justifie-t-il ?
10. Quand l’IA aide-t-elle et quand faut-il garder une validation humaine ?
11. Comment calculer le volume et le temps actuels ?
12. Comment séparer temps retirable, adoption, réaffectation, valeur de
    capacité et dépense réellement évitée ?
13. Quels coûts additionner sur une même durée ?
14. Comment préparer le cas normal, les doublons, les pannes et la reprise ?
15. Qui tient la règle, reçoit l’alerte et décide d’arrêter ?
16. Quelles questions poser sur sécurité, RGPD, sous-traitance, AIPD et sortie ?

### Questions secondaires

- Combien de cas faut-il observer avant de décider ?
- Un processus rare mais risqué doit-il être automatisé ?
- Comment traiter les exceptions sans bloquer le chemin normal ?
- Comment comparer deux propositions qui n’utilisent pas la même technologie ?
- Que devient le flux lorsque son propriétaire quitte l’entreprise ?
- Quels éléments conserver pour comprendre un échec ?
- Comment savoir si les utilisateurs ont réellement adopté le nouveau chemin ?
- Quel indicateur comparer avant et après le pilote ?

### Hors-sujet

- classement exhaustif ou tarifaire de Make, Zapier, n8n, Power Automate,
  UiPath ou d’autres éditeurs ;
- promesse de gain moyen ou de retour sur investissement pour une PME type ;
- prix de marché d’un projet d’automatisation sans corpus vérifiable ;
- tutoriel de configuration d’un outil particulier ;
- avis juridique, DPO ou cybersécurité individualisé ;
- remplacement d’un audit technique pour un système sensible ;
- guide complet du ROI d’une application métier ;
- téléchargement XLS, XLSX ou CSV.

### Cas de refus, report ou validation professionnelle

- **Refuser ou reporter** si le résultat correct ne peut pas être observé, si
  les règles changent fréquemment, si la source de données ne fait pas foi, si
  une erreur ne peut pas être repérée et reprise, ou si aucun responsable
  n’accepte les alertes.
- **Simplifier** si une validation ou une ressaisie ne produit aucun contrôle
  utile.
- **Activer une fonction existante** lorsqu’elle couvre le résultat avec des
  droits, exports et coûts acceptables.
- **Garder la décision humaine** lorsque le jugement porte sur une négociation,
  une personne, un prix ou une action difficile à annuler.
- **Demander l’avis du DPO ou d’un conseil juridique** si une décision
  individuelle fondée sur des données personnelles est exclusivement
  automatisée dans les faits et produit un effet juridique ou similaire
  significatif, ou si le traitement est susceptible de présenter un risque
  élevé pour les droits et libertés.
- **Faire intervenir le responsable sécurité** pour des données ou systèmes
  sensibles, des accès à privilèges, des exigences sectorielles ou une reprise
  d’activité critique.
- **Demander au comptable/contrôle de gestion** le coût horaire et la réalité
  d’une dépense évitée avant de monétiser le temps.

## C. Corpus interne

Après la remise à zéro, aucun ancien guide ne peut devenir un lien éditorial.
Le guide doit rester utile avec les seules routes actives ci-dessous.

| Route ou artefact actif | Intention | Utilité pour ce guide | Décision de lien |
|---|---|---|---|
| `/services/outils-internes-sur-mesure` | Transactionnelle : comprendre l’offre d’outils internes | Suite logique si plusieurs règles, rôles ou intégrations justifient un projet propre | Un lien contextuel dans la dernière section |
| `/demarrer-un-projet` | Décrire un besoin à l’équipe | Destination réelle du CTA premium | CTA sidebar et FAQ, libellé « Faire cadrer mon premier processus » |
| `/guides` | Répertoire des guides actifs | Retour vers le corpus réécrit | Un lien contextuel final |
| `ProcessPriorityTool` | Outil local du guide | Passer les cinq portes puis tester temps retirable, adoption moyenne, réaffectation, coûts renseignés et sensibilité | Intégré dans la section économie ; aucun envoi réseau |

### Cannibalisation

| Page | Intention dominante | Différence maintenue |
|---|---|---|
| Guide courant | Informationnelle/décisionnelle : choisir le premier processus et décider aussi de ne pas automatiser | Carte, portes, options, formule, pilote, contrôles |
| Service outils internes | Transactionnelle : faire étudier ou construire un outil interne | Ne reprend pas le classement ni le guide complet ; le guide ne promet pas le service |

### Liens internes retenus

- `/services/outils-internes-sur-mesure` : uniquement après la fiche de
  décision, avec l’ancre descriptive « outils internes sur mesure » ;
- `/guides` : retour vers le répertoire, sans faire croire que les anciens
  guides supprimés restent disponibles ;
- `/demarrer-un-projet` : destination réelle des CTA du gabarit.

### Liens internes refusés

Tous les slugs de l’ancien corpus, même lorsqu’ils paraissent sémantiquement
proches. Ils sont en cours de redirection et ne doivent pas redevenir un
maillage éditorial.

## D. Analyse externe

Consultation : **29 juillet 2026**. Les extraits de moteur ont servi à repérer
des pages ; toute affirmation conservée a été contrôlée sur la page originale.

### Sources primaires ou officielles

| URL | Éditeur | Date | Type | Affirmation utilisable | Limite ou contradiction | Consultation |
|---|---|---:|---|---|---|---:|
| `https://www.francenum.gouv.fr/guides-et-conseils/pilotage-de-lentreprise/numerisation-des-processus/lautomatisation-une-solution` | France Num | Publié 2025-11-14, mis à jour 2026-07-09 | Plateforme publique, dossier rédigé par deux professionnels externes | Inventorier les tâches répétitives ; mesurer fréquence × durée ; prendre en compte complexité, impact d’une erreur, tests et maintenance | Ce n’est pas une étude primaire. Les affirmations de souveraineté, conformité générale, prix, facilité et marques sont trop larges ou volatiles : non reprises | 2026-07-29 |
| `https://www.cnil.fr/sites/cnil/files/2024-03/cnil_guide_securite_personnelle_2024.pdf` | CNIL | 2024-03-26 | Guide officiel | Protection dès la conception, tests avec données fictives/anonymisées, habilitations, journalisation, sauvegardes testées, continuité, API, responsabilités | Guide horizontal ; les mesures doivent être adaptées au risque et ne certifient pas un système | 2026-07-29 |
| `https://www.cnil.fr/fr/securite-gerer-la-sous-traitance` | CNIL | 2024-03-14 | Fiche officielle | Le contrat doit encadrer objet, durée, finalité, sécurité, responsabilités, incidents, restitution et destruction ; les garanties doivent être vérifiables | S’applique à la sous-traitance de données personnelles au sens du RGPD, pas à tout achat de logiciel | 2026-07-29 |
| `https://www.cnil.fr/fr/profilage-et-decision-entierement-automatisee` | CNIL | Page d’origine 2018, reconsultée 2026-07-29 | Fiche officielle | L’article 22 encadre les décisions fondées exclusivement sur un traitement automatisé produisant un effet juridique ou un effet similaire significatif ; la page détaille exceptions, information, contestation et intervention humaine | Ne permet pas d’affirmer que toute automatisation, tout classement ou toute IA tombe sous l’article 22 | 2026-07-29 |
| `https://www.cnil.fr/fr/ce-quil-faut-savoir-sur-lanalyse-dimpact-relative-la-protection-des-donnees-aipd` | CNIL | Page d’origine 2017, reconsultée 2026-07-29 | Fiche officielle | Une AIPD est requise lorsqu’un traitement de données personnelles est susceptible d’engendrer un risque élevé ; la décision se prend avant la mise en œuvre selon le contexte et les critères applicables | Une technologie ou l’IA seule ne suffit pas à conclure ; le responsable de traitement doit qualifier son cas | 2026-07-29 |
| `https://eur-lex.europa.eu/eli/reg/2016/679/oj?locale=fr` | Union européenne | Règlement 2016/679 ; applicable depuis 2018-05-25 | Texte juridique primaire | Articles 22, 28, 32 et 35 : décision automatisée, sous-traitance, sécurité et AIPD | L’application à un cas exige de qualifier les données, rôles, finalités et risques | 2026-07-29 |
| `https://www.anact.fr/sites/default/files/2023-12/FSE%2520Nume%25CC%2581rique.pdf` | Anact | Métadonnée PDF 2020-03-06 ; chemin de diffusion actuel 2023-12 | Guide public issu d’une expérimentation avec cinq PME industrielles | Analyser le travail actuel, associer les salariés, simuler le travail futur et ajuster le projet | Retour de terrain ciblé, pas mesure causale universelle de productivité ni règle pour tout secteur | 2026-07-29 |
| `https://learn.microsoft.com/en-gb/power-automate/overview-cloud` | Microsoft Learn | Mis à jour 2025-11-27 | Documentation officielle éditeur | Les flux cloud peuvent être événementiels, instantanés ou planifiés et relier des services par connecteurs | Exemple d’un produit ; ne définit pas tout le marché ni les licences actuelles | 2026-07-29 |
| `https://learn.microsoft.com/en-us/power-automate/limits-and-config` | Microsoft Learn | Page mise à jour en continu, état consulté 2026-07-29 | Documentation officielle éditeur | Les limites, la rétention, les arrêts après erreurs, la propriété et les requêtes varient avec le produit et la licence | Valeurs volatiles ; le guide n’en publie aucun seuil et demande une revalidation au choix | 2026-07-29 |
| `https://learn.microsoft.com/en-us/power-automate/desktop-flows/ui-elements` | Microsoft Learn | Mis à jour 2026-05-14 | Documentation officielle éditeur | Les flux de bureau pilotent des éléments d’interface au moyen de sélecteurs ; plusieurs sélecteurs et des tests peuvent être nécessaires, et certains éléments web sont moins fiables que les éléments web natifs | Exemple Power Automate ; ne définit pas tous les produits RPA et n’autorise pas à généraliser leurs fonctions ou licences | 2026-07-29 |
| `https://www.nist.gov/itl/ai-risk-management-framework` | NIST | AI RMF 1.0 publié 2023-01-26 ; révision en cours, note 2026-04-07 | Cadre public volontaire | Tester, évaluer, surveiller et prévoir une intervention humaine selon les risques d’un système d’IA | Volontaire, américain et en révision ; ne remplace ni l’AI Act ni le RGPD | 2026-07-29 |

### Résultats de SERP et angles morts observés

| URL | Éditeur/date | Réponse donnée | Valeur observée | Manque ou risque à ne pas reproduire |
|---|---|---|---|---|
| `https://invaist.com/processus-a-automatiser-pme` | Invaist, 2026-04-23 | Six processus à automatiser « en premier » ; trois critères | Définit règles stables et jugement humain | Seuil hebdomadaire et priorité par catégorie non démontrés ; pas de TCO, réaffectation, reprise, responsable ou porte RGPD |
| `https://www.mekso.fr/blog/automatiser-process-tpe-pme` | Mekso, mis à jour 2026-05-06 | Flux le plus coûteux, no-code puis sur-mesure | Carte simple et rappel de commencer par un flux | Chiffres d’heures, erreurs, prix, délais et ROI universalisés ; « sans risque d’erreur » ; calcul hebdomadaire incohérent avec 40 × 3 min × 35 €/h ; intérêts commerciaux non séparés |
| `https://www.smart-ops.fr/automatisation-processus-metiers-pme` | SmartOps, 2026 | No-code en quelques semaines, seuils d’heures et exemples par fonction | Déclencheur, étapes, outils et personnes | 30 %, 80 %, temps nul, seuils absolus et cas « clients » sans preuve visible ; addition de points qui laisse le gain masquer l’irréversibilité ; peu de reprise |
| `https://www.techtarget.com/searchcio/definition/business-process-automation` | TechTarget, 2023-12-14 | Définition large, bon candidat récurrent et à règles stables | Distingue BPA, BPM, RPA, low-code et nécessité d’impliquer les parties | Source secondaire anglophone ; peu de calcul, de droit français ou de fiche immédiatement réutilisable |

### Demande et vocabulaire observés

Requêtes examinées le 29 juillet 2026 :

- `automatiser processus métier par où commencer choisir processus premier France PME` ;
- `prioriser processus à automatiser matrice gain risque erreurs reprise manuel` ;
- `automatisation processus métier calcul ROI coût total heures réaffectées France` ;
- `business process automation which process automate first governance rollback human intervention`.

Questions et formulations récurrentes : « par où commencer », « quel processus
en premier », « combien ça coûte », « combien de temps », « no-code ou sur
mesure », « l’IA est-elle nécessaire », « faut-il des compétences techniques »,
« l’automatisation remplace-t-elle les employés ». Aucun volume de recherche
n’est inventé. Aucune donnée Search Console n’a été fournie à l’agent P1.

## E. Matrice d’information utile

| Question lecteur | Déjà traité ailleurs | Manque observé | Réponse ou outil à apporter | Preuve |
|---|---|---|---|---|
| Que faut-il cartographier ? | Déclencheur, étapes, outils, personnes | Source de vérité, exceptions, erreur, reprise et mesure après | Carte copiable en onze lignes | France Num + déduction opérationnelle explicitée |
| Le gain suffit-il à prioriser ? | Matrices impact/effort fréquentes | Un risque grave peut être compensé par une note moyenne | Cinq portes non compensatoires avant le calcul | Recommandation Hagnéré Code ; cohérente avec CNIL sécurité |
| Quelle solution choisir ? | Listes d’outils ou opposition no-code/sur-mesure | Fonction existante, simplification, connecteur/API, no-code, RPA et IA rarement distingués ensemble | Sept réponses jugées sur le même résultat et les mêmes erreurs | Microsoft Learn pour flux, limites et sélecteurs ; recommandations qualifiées |
| Comment valoriser le temps ? | Fréquence × durée × coût horaire | Part retirable, adoption moyenne, travail résiduel, réaffectation et trésorerie souvent confondus | Quatre étages, puis séparation capacité/dépense réellement évitée | Calcul éditorial transparent et contre-cas recalculés |
| Quel coût comparer ? | Prix initial ou abonnement | Temps interne, coûts ponctuels, suivi, maintenance, volume et sortie | Coût renseigné sur un horizon commun ; inconnues explicitement à confirmer | Calcul éditorial ; charte qualité |
| Peut-on décider de ne pas investir ? | Rarement mis en avant | Les scénarios sont presque toujours positifs | Exemple fictif volontairement négatif, ROI −41,2 % | Recalcul manuel en G |
| Comment tester un échec ? | Cas normal et parfois champ manquant | Doublon, accès expiré, panne tiers, action partielle, reprise | Tableau de huit situations avec résultat et preuve | CNIL sécurité + raisonnement technique |
| Qui reste responsable ? | « Impliquer les équipes » | Qui tient la règle, reçoit l’alerte et arrête le pilote | Tableau de six rôles et preuves attendues | Anact + CNIL sécurité |
| Quelles protections RGPD ? | Mentions générales de conformité | Portée exacte article 22, exceptions, droits, AIPD, chaîne de sous-traitance, sauvegarde et sortie | Quatre conditions cumulatives pour l’article 22, garanties, qualification AIPD et renvoi vers DPO/sécurité | CNIL + EUR-Lex |
| L’IA est-elle nécessaire ? | IA souvent présentée comme point de départ | Mesure des erreurs et contrôle humain insuffisants | IA seulement pour entrée variable, avec jeu de test et contrôle adapté | NIST AI RMF + CNIL article 22 pour le cas juridique |
| Puis-je refaire le calcul ? | Calculateurs opaques ou formulaires commerciaux | Formules, portes, adoption moyenne, coûts additionnels et limites non visibles | Composant local sans envoi ; formules affichées, contre-cas et tests unitaires | Code et tests P1/P2 |

## F. Registre des affirmations

| ID | Affirmation | Type | Source primaire | Périmètre/date | Statut |
|---|---|---|---|---|---|
| F01 | Un processus est présenté ici comme une suite d’étapes entre un déclencheur et un résultat utile | RECOMMANDATION | France Num décrit déclencheur puis actions ; définition éditoriale simplifiée | Guide non normatif, 2026 | VERIFIE |
| F02 | Fréquence × durée permet d’estimer le temps actuel | CALCUL | France Num | Cas et période définis | VERIFIE |
| F03 | Complexité et impact d’une erreur doivent compléter le gain | FAIT | France Num | Dossier TPE/PME, maj 2026-07-09 | VERIFIE |
| F04 | Le gain financier ne compense pas une porte de risque fermée | RECOMMANDATION | Raisonnement éditorial ; CNIL sécurité pour le caractère proportionné au risque | Méthode Hagnéré Code, 2026 | VERIFIE |
| F05 | Les cinq portes sont résultat, règles, données, reprise et responsable | RECOMMANDATION | Synthèse éditoriale | Outil de présélection, pas norme | VERIFIE |
| F06 | Simplifier ou supprimer une étape doit être comparé à l’automatisation | RECOMMANDATION | France Num évoque l’analyse du processus ; déduction éditoriale | Tous projets | VERIFIE |
| F07 | Un flux no-code peut relier des services au moyen de connecteurs | FAIT | Microsoft Learn, aperçu des flux cloud | Power Automate, maj 2025-11-27 | VERIFIE |
| F08 | Les limites de volume, rétention, exécution et propriété dépendent du produit/licence | FAIT | Microsoft Learn, limits-and-config | Power Automate, état 2026-07-29 | VERIFIE |
| F09 | Les valeurs de limites doivent être revérifiées au choix | RECOMMANDATION | Documentation éditeur évolutive | Produit/licence/date | VERIFIE |
| F10 | L’IA doit être testée et surveillée dans la durée | FAIT | NIST AI RMF 1.0 | Cadre volontaire US en révision | VERIFIE |
| F11 | Une validation humaine doit être proportionnée à la conséquence | RECOMMANDATION | NIST AI RMF + CNIL article 22 pour certains effets | Ne signifie pas que toute IA relève de l’art. 22 | VERIFIE |
| F12 | L’article 22 vise certaines décisions exclusivement automatisées avec effet juridique ou similaire significatif | FAIT | RGPD art. 22 ; CNIL | UE, données personnelles | VERIFIE |
| F13 | Toutes les automatisations ne relèvent pas de l’article 22 | FAIT | Périmètre explicite CNIL/RGPD | UE | VERIFIE |
| F14 | Le contrat de sous-traitance RGPD encadre notamment responsabilités, incidents, restitution/destruction | FAIT | CNIL ; RGPD art. 28 | Sous-traitance de données personnelles | VERIFIE |
| F15 | La CNIL recommande des tests avec des données fictives ou anonymisées pendant le développement | FAIT | Guide sécurité CNIL 2024, fiche développements | Données personnelles | VERIFIE |
| F16 | La CNIL recommande sauvegardes régulières, protection et tests de restauration | FAIT | Guide sécurité CNIL 2024, fiche 17 | Données personnelles ; à adapter | VERIFIE |
| F17 | L’Anact conseille d’observer le travail réel et d’associer les utilisateurs | FAIT | Guide Anact projet numérique | PME ; repères organisationnels | VERIFIE |
| F18 | Le temps techniquement retirable, le temps réellement retiré après adoption et le temps réaffecté sont trois quantités distinctes | RECOMMANDATION | Charte qualité + modèle P2 | Modèle économique, pas règle comptable | VERIFIE |
| F19 | Valeur de capacité = heures actuelles × part retirable × adoption moyenne × réaffectation × coût horaire chargé | CALCUL | Modèle transparent P2 | Hypothèses visibles ; ne prouve pas une économie de trésorerie | VERIFIE |
| F20 | Coût renseigné = conception + temps interne + autres coûts ponctuels déjà chiffrés + coût mensuel × horizon | CALCUL | Modèle transparent P2 | Un poste inconnu reste à confirmer et n’est pas réputé nul | VERIFIE |
| F21 | Le scénario 120 cas produit 432 h actuelles sur 24 mois | CALCUL | `120 × 9 ÷ 60 × 24` | Exemple fictif | VERIFIE |
| F22 | Le même scénario produit 302,4 h retirables, 241,92 h réellement retirées après adoption et 145,152 h réaffectées | CALCUL | `432 × 70 %`, puis `× 80 %`, puis `× 60 %` | Exemple fictif | VERIFIE |
| F23 | La valeur de capacité du scénario est 5 515,78 € | CALCUL | `145,152 × 38` | Exemple fictif ; pas une économie de trésorerie | VERIFIE |
| F24 | Le coût renseigné du scénario est 9 376 € | CALCUL | `4 800 + 32 × 38 + 0 + 140 × 24` | Exemple fictif ; zéro signifie seulement aucun autre coût saisi | VERIFIE |
| F25 | L’écart est −3 860,22 € et le ROI du scénario de capacité environ −41,2 % | CALCUL | `(5 515,776 − 9 376) / 9 376` | Exemple fictif, arrondi ; pas un ROI de trésorerie | VERIFIE |
| F26 | L’outil interactif n’envoie aucune donnée | FAIT | Inspection du composant : état React local, aucun fetch/form/action | Version P2 | VERIFIE |
| F27 | Une erreur partielle doit être testée pour éviter un doublon lors de la reprise | RECOMMANDATION | Raisonnement technique ; CNIL continuité/journalisation | Dépend du processus | VERIFIE |
| F28 | Aucun prix, délai ou ROI moyen de marché n’est publié | FAIT | Inspection page P2 | Version P2 | VERIFIE |
| F29 | Les bénéfices d’erreurs évitées ou de ventes restent non chiffrés sans mesure | RECOMMANDATION | Charte qualité | Modèle P2 | VERIFIE |
| F30 | La bonne réponse peut être simplifier, reporter ou ne pas automatiser | RECOMMANDATION | Contrat de réponse | Décision éditoriale | VERIFIE |
| F31 | Huit cas simples sur dix peuvent ne représenter que 28,6 % du temps si les deux exceptions durent dix fois plus longtemps | CALCUL | `(8 × 3) ÷ (8 × 3 + 2 × 30)` | Contre-cas fictif | VERIFIE |
| F32 | Une capacité valorisée au coût horaire n’est pas une dépense évitée ; une économie de trésorerie exige la disparition réelle d’un paiement | RECOMMANDATION | Charte qualité + logique de non-double-compte | Modèle décisionnel, pas règle comptable individualisée | VERIFIE |
| F33 | À 220 cas/mois, 80 % d’adoption produit +736,26 €, mais une adoption moyenne de 70 % produit −527,78 € | CALCUL | Recalcul P2, autres entrées du scénario G2 inchangées | Contre-cas fictif sur 24 mois | VERIFIE |
| F34 | À 600 cas/mois, le scénario positif à 140 €/mois redevient négatif à partir d’environ 899 €/mois | CALCUL | Seuil `(27 578,88 − 6 016) ÷ 24 = 898,4533` | Contre-cas fictif ; coût susceptible d’évoluer avec le volume | VERIFIE |
| F35 | Une automatisation d’interface utilise des éléments et sélecteurs qui doivent être retestés lorsque l’interface change | FAIT | Microsoft Learn, UI elements et test selectors | Exemple Power Automate Desktop ; portée éditeur | VERIFIE |
| F36 | L’article 22 suppose une décision individuelle fondée exclusivement sur un traitement automatisé avec effet juridique ou similaire significatif ; des exceptions et garanties existent | FAIT | RGPD art. 22 ; CNIL | Données personnelles, UE ; qualification au cas par cas | VERIFIE |
| F37 | Une AIPD est requise lorsqu’un traitement de données personnelles est susceptible d’engendrer un risque élevé pour les droits et libertés | FAIT | RGPD art. 35 ; CNIL | Ne signifie pas que toute IA ou automatisation exige une AIPD | VERIFIE |
| F38 | Un résultat économique positif du calculateur ne vaut jamais autorisation de déployer | RECOMMANDATION | Portes, tests et limites P2 | Outil de présélection uniquement | VERIFIE |

### Affirmations observées puis retirées

| Affirmation externe | Motif du retrait |
|---|---|
| « Une PME perd 10 à 25 heures par semaine » | Source et population non établies dans la page observée |
| « 76 % des employés transfèrent 1 à 3 h de données par jour » | Étude éditeur secondaire et extrapolation au lecteur non vérifiées |
| « 1 à 4 % d’erreurs de saisie » | Périmètres hétérogènes, dont recherche clinique, non transposables |
| « Sans intervention humaine, sans risque d’erreur » | Absolu faux et contradictoire avec la nécessité de tests/reprise |
| Prix de 2 000 à 8 000 € et délais de 1 à 8 semaines | Offre d’un prestataire, pas marché comparable |
| « ROI moyen 10x » ou remboursement en 3 à 6 mois | Méthode et échantillon non publiés |
| « 30 % du temps perdu » et « 80 % des tâches automatisables » | Sources absentes sur la page observée |
| « Données personnelles non sensibles = outil conforme au RGPD » | Conformité dépend de la finalité, des rôles, transferts, contrat et mesures |

## G. Calculs et scénarios

### G1. Modèle de calcul interactif

```text
Nom : calcul de priorité économique après portes non compensatoires
Unité : heures et euros sur un horizon en mois

Heures actuelles =
  cas par mois × minutes par cas ÷ 60 × horizon en mois

Heures techniquement retirables =
  heures actuelles × taux d’automatisation

Heures réellement retirées =
  heures techniquement retirables × adoption moyenne sur l’horizon

Heures réaffectées à un travail utile identifié =
  heures réellement retirées × taux de réaffectation

Valeur de capacité =
  heures réaffectées × coût horaire chargé retenu

Coût initial renseigné =
  coût de conception/intégration/tests
  + heures internes de préparation/test × coût horaire interne réel
  + autres coûts ponctuels déjà chiffrés

Coût renseigné =
  coût initial renseigné + coût mensuel d’exploitation × horizon

Écart =
  valeur de capacité − coût renseigné

ROI =
  écart ÷ coût renseigné × 100, uniquement si coût renseigné > 0

Retour du coût initial =
  coût initial renseigné ÷ (valeur mensuelle de capacité − coût mensuel),
  uniquement si le dénominateur est positif
```

Limites :

- aucun revenu, coût d’erreur, gain de qualité ou délai n’est ajouté sans
  mesure ;
- une valeur de capacité n’est pas une économie de trésorerie : une dépense
  n’est évitée que si un paiement disparaît effectivement et sans double
  comptage ;
- le coût de sortie, la fiscalité, l’inflation, le financement,
  l’indisponibilité, la formation ou l’hébergement sont à ajouter s’ils
  s’appliquent ;
- l’adoption saisie est une moyenne sur tout l’horizon et le délai de retour
  suppose une contribution mensuelle constante dès le premier mois ;
- zéro dans « autres coûts ponctuels » signifie seulement qu’aucun montant
  supplémentaire n’a été saisi, pas qu’aucun coût n’existe ;
- le calcul ne vaut ni devis, ni prévision, ni règle comptable ;
- une porte fermée force `blocked`, même si l’écart économique est positif ;
- un résultat `pilot` autorise seulement une vérification sur périmètre
  limité, jamais un déploiement.

### G2. Exemple fictif affiché

```text
Étiquette : exemple fictif — hypothèses arrondies
Période : 24 mois
Cas par mois : 120
Minutes par cas : 9
Coût horaire interne : 38 €
Part du temps retirée : 70 %
Adoption : 80 %
Réaffectation réelle : 60 %
Conception/intégration/tests : 4 800 €
Temps interne : 32 h
Autres coûts ponctuels déjà chiffrés : 0 € dans cet exemple fictif
Exploitation mensuelle : 140 €

Heures actuelles :
120 × 9 ÷ 60 × 24 = 432 h

Heures techniquement retirables :
432 × 0,70 = 302,40 h

Heures réellement retirées après adoption :
302,40 × 0,80 = 241,92 h

Heures réaffectées à un travail utile identifié :
241,92 × 0,60 = 145,152 h

Valeur de capacité :
145,152 × 38 = 5 515,776 €, affiché 5 515,78 €

Coût initial renseigné :
4 800 + 32 × 38 + 0 = 6 016 €

Coût renseigné :
6 016 + 140 × 24 = 9 376 €

Écart :
5 515,776 − 9 376 = −3 860,224 €, affiché −3 860,22 €

ROI :
−3 860,224 ÷ 9 376 × 100 = −41,17 %, affiché −41,2 %

Décision :
Avec ces seules hypothèses, ne pas acheter cette version. Tester une fonction
existante, réduire le coût, élargir prudemment le processus et recalculer, ou
ne pas investir.

Contre-calcul sur la composition des cas :
8 cas simples à 3 min + 2 exceptions à 30 min = 84 min. Automatiser les seuls
cas simples retire 24 min, soit 24 ÷ 84 = 28,5714 % du temps, et non 80 %.

Contre-calcul sur l’adoption :
à 220 cas/mois, une adoption moyenne de 80 % donne une valeur de capacité de
10 112,256 € et un écart de +736,256 €. Si l’adoption vaut 40 % pendant
6 mois puis 80 % pendant 18 mois, sa moyenne pondérée sur 24 mois est 70 % ;
la valeur de capacité tombe à 8 848,224 € et l’écart à −527,776 €.

Contre-calcul sur le coût variable :
à 600 cas/mois, la valeur de capacité vaut 27 578,88 €. Le coût mensuel seuil
est `(27 578,88 − 6 016) ÷ 24 = 898,4533 €`. À 899 €/mois, l’écart devient
légèrement négatif ; le test automatisé retient 900 €/mois.
```

### G3. Tests manuels indépendants et cas limites

| Cas | Entrée ou variation | Résultat attendu |
|---|---|---|
| Porte fermée | résultat non mesurable + forte valeur économique | `blocked`, car une porte ne se compense pas |
| Scénario défavorable | valeurs G2, cinq portes ouvertes | `unfavorable`, écart négatif |
| Scénario positif | 600 cas/mois, autres valeurs G2, portes ouvertes | `pilot`, écart positif ; cette sensibilité ne promet pas que le coût reste fixe au volume |
| Adoption progressive | 220 cas/mois ; comparer 80 % cible et 70 % moyenne pondérée | `pilot` à 80 %, `unfavorable` à 70 % |
| Coût ponctuel omis | scénario 220 cas/mois + 1 000 € | l’écart positif devient négatif |
| Coût variable au volume | 600 cas/mois et 900 €/mois | `unfavorable`, malgré le scénario positif à 140 €/mois |
| Pourcentage > 100 | automatisation 300 % | borné à 100 % |
| Valeur négative | cas ou coût négatif | neutralisé à zéro |
| Coût nul | tous coûts nuls | ROI `null`, retour 0 si la contribution mensuelle est positive, pas de division par zéro |
| Gain mensuel ≤ exploitation | très faible volume, coût mensuel élevé | retour `null` |
| Horizon 0 | 0 mois | borné à 1 mois |

### G4. Tests métier du pilote

Cas normal, champ absent, doublon, accès expiré, outil tiers indisponible,
échec après action partielle, valeur inhabituelle et retour manuel. Pour chaque
cas : résultat attendu, alerte, état du dossier et preuve à conserver.

## H. Journal des passes

### Passe 1 — création

```text
Agent : /root/passe_1_creation
État : VALIDEE_GATE_G1
Fichiers lus intégralement :
- CLAUDE.md
- docs/regle-or-vigilance-seo-publication.md
- docs/charte-qualite-guides.md
- docs/roadmap-guides-seo.md
- docs/workflow-maitre-guides-4-passes.md
- docs/research/automatiser-processus-metier.md dans son état remis à zéro
- src/components/guides/guide-premium-layout.tsx
- src/components/guides/guide-premium-faq-categorized.tsx
- src/components/guides/guide-content-blocks.tsx
- src/app/guides/automatiser-processus-metier/page.tsx, uniquement pour les API
  techniques ; aucun texte, chiffre, plan ou exemple réutilisé comme source

Fichiers modifiés :
- src/app/guides/automatiser-processus-metier/page.tsx
- src/app/guides/automatiser-processus-metier/opengraph-image.tsx
- src/app/guides/automatiser-processus-metier/process-priority-tool.tsx
- src/app/guides/automatiser-processus-metier/process-priority-tool.test.ts
- src/lib/guides.ts, unique entrée du slug
- docs/research/automatiser-processus-metier.md
- docs/research/manifests/automatiser-processus-metier-p1.sha256

Recherches :
- sources France Num, CNIL, EUR-Lex, Anact, Microsoft Learn et NIST
- quatre résultats représentatifs de la SERP FR/EN
- vérification contradictoire des chiffres, prix, délais et promesses observés

Affirmations :
- F01 à F30 consignées
- huit affirmations externes fortes écartées faute de périmètre ou de preuve

Calculs :
- modèle heures actuelles → temps retiré → adoption → réaffectation → valeur
- coût initial et coût connu sur le même horizon
- écart, ROI et retour du coût initial
- scénario fictif G2 recalculé
- cas limites G3 couverts par test unitaire

Contrôles :
- `npx vitest run src/app/guides/automatiser-processus-metier/process-priority-tool.test.ts`
  → premier passage : 4/5, écart d’arrondi dans l’attente du test de retour ;
  attente corrigée de 66,94 à 66,98 mois après recalcul ; second passage : 5/5
- `npx eslint src/app/guides/automatiser-processus-metier/page.tsx
  src/app/guides/automatiser-processus-metier/opengraph-image.tsx
  src/app/guides/automatiser-processus-metier/process-priority-tool.tsx
  src/app/guides/automatiser-processus-metier/process-priority-tool.test.ts
  src/lib/guides.ts` → succès
- `npx tsc --noEmit` → succès
- `npm run measure:guide-readtime -- automatiser-processus-metier`
  → 2 889 mots visibles, 14 min ; registre réconcilié
- rendu local Next.js → HTTP 200 ; 475 193 octets dans l’HTML initial ;
  un H1, un `Article`, un `BreadcrumbList`, zéro `FAQPage`, zéro `HowTo`,
  CTA et calculateur présents
- recherche ciblée → aucun lien vers un guide supprimé, aucun téléchargement
  XLS/XLSX/CSV, aucun prix ou délai de marché
- `git diff --check` global → échec limité à deux espaces finaux dans
  `docs/workflow-maitre-guides-4-passes.md:3-4`, fichier partagé hors
  périmètre P1 ; signalé à l’orchestrateur
- `git diff --check -- <artefacts P1>` → succès

Risques résiduels :
- aucune donnée Search Console ou Keyword Planner fournie en P1
- les limites et licences des éditeurs restent volatiles ; aucun seuil n’est
  publié, la revalidation au moment du choix est demandée
- la portée juridique et sécurité dépend du cas ; le guide route vers DPO,
  responsable sécurité ou conseil adapté
- le contrôle whitespace global reste à corriger par l’orchestrateur dans
  `docs/workflow-maitre-guides-4-passes.md:3-4`, hors périmètre autorisé P1
- P2 doit vérifier de nouveau chaque source, refaire les calculs sans reprendre
  le résultat et chercher un contre-cas supplémentaire
- la validation P1 n’est ni P2, ni P3, ni P4, ni publication

Décision orchestrateur : GO_PASSE_2
Manifeste : docs/research/manifests/automatiser-processus-metier-p1.sha256
SHA-256 : validé par l’orchestrateur, puis régénéré après inscription du gate.
```

#### GATE_P1

```text
Décision : GO_PASSE_2
Contrôles :
- intention : réponse directe à « quel processus automatiser en premier » ;
  choix, refus, simplification et pilote sont tous actionnables
- sources : France Num, CNIL, RGPD, Anact, Microsoft Learn et NIST relus ;
  limites et nature volontaire/éditoriale correctement signalées
- calculs : 432 h, 241,92 h, 145,152 h, 5 515,776 €, 9 376 €,
  −3 860,224 €, −41,1713 % et 66,9754 mois recalculés indépendamment
- structure : dix sections complètes, cinq portes, six réponses, exemple
  fictif, outil local, protocole de test, responsabilités, sécurité et FAQ
- technique : manifeste initial 6/6 OK ; Vitest 5/5 ; ESLint et TypeScript
  verts ; HTTP 200 ; 2 894 mots visibles et 14 min ; un H1, Article et
  BreadcrumbList ; aucun FAQPage/HowTo ; rendu desktop comparé au gabarit ;
  scénario interactif positif vérifié sur localhost
Corrections exigées : aucune en P1
SHA-256 validé : oui ; manifeste P1 régénéré après cette décision
```

### Passe 2 — enrichissement et vérification

```text
Agent : /root/passe_2_verification
État : TERMINEE_EN_ATTENTE_GATE_G2

Précondition :
- `shasum -a 256 -c
  docs/research/manifests/automatiser-processus-metier-p1.sha256`
  exécuté avant toute modification P2 : 6/6 artefacts P1 conformes

Fichiers lus intégralement :
- CLAUDE.md
- docs/regle-or-vigilance-seo-publication.md
- docs/charte-qualite-guides.md
- docs/roadmap-guides-seo.md
- docs/workflow-maitre-guides-4-passes.md
- docs/research/automatiser-processus-metier.md et les six artefacts P1
- src/components/guides/guide-premium-layout.tsx
- src/components/guides/guide-premium-faq.tsx
- src/components/guides/guide-premium-faq-categorized.tsx
- src/components/guides/guide-premium-toc-pills.tsx
- src/components/guides/guide-premium-mobile-cta.tsx
- src/components/guides/guide-premium-types.ts
- src/components/guides/guide-content-blocks.tsx
- src/components/guides/GuidesShell.tsx

Fichiers modifiés :
- src/app/guides/automatiser-processus-metier/page.tsx
- src/app/guides/automatiser-processus-metier/opengraph-image.tsx
- src/app/guides/automatiser-processus-metier/process-priority-tool.tsx
- src/app/guides/automatiser-processus-metier/process-priority-tool.test.ts
- src/lib/guides.ts, unique entrée du slug
- docs/research/automatiser-processus-metier.md
- docs/research/manifests/automatiser-processus-metier-p2.sha256

Sources relues contradictoirement :
- France Num : publication 2025-11-14, mise à jour 2026-07-09 ; méthode
  fréquence × durée, complexité, impact d’une erreur, test et maintenance
- CNIL sécurité 2024 : conception, données fictives, habilitations, journaux,
  sauvegardes testées, continuité et responsabilités
- CNIL sous-traitance : contrat, incidents, contrôles, chaîne de
  sous-traitants, localisation, restitution et destruction
- RGPD article 22 sur EUR-Lex et fiche CNIL : conditions cumulatives,
  exceptions, information, contestation et intervention humaine réelle
- CNIL AIPD : exigence liée au risque élevé, à qualifier avant mise en œuvre ;
  aucune automaticité fondée sur la seule présence d’IA
- Anact : guide tiré d’une expérimentation avec cinq PME industrielles ;
  observation du travail réel, participation et simulation, sans généraliser
  un effet causal de productivité
- Microsoft Learn : limites de flux par produit/licence et dépendance des
  automatisations d’interface aux éléments et sélecteurs
- NIST AI RMF : cadre volontaire en révision, utilisé seulement pour les tests
  et la surveillance dans la durée
- contrôle réseau du 2026-07-29 : France Num, quatre ressources CNIL, Anact, deux
  pages Microsoft et NIST répondent HTTP 200 ; EUR-Lex répond HTTP 202

Corrections factuelles et contradictoires :
- séparation de sept réponses : simplification, fonction existante,
  connecteur/API, flux no-code, RPA d’interface, sur-mesure, IA contrôlée
- ajout de la fragilité propre aux sélecteurs, sessions et changements
  d’interface d’un robot RPA
- exemple des huit cas simples et deux exceptions explicitement fictif et
  recalculé : 80 % des dossiers ne retirent ici que 28,6 % du temps
- séparation des heures techniquement retirables, retirées après adoption,
  réaffectées, puis de leur valeur de capacité
- distinction visible entre valeur de capacité et dépense réellement évitée ;
  aucun double comptage autorisé
- adoption libellée comme moyenne sur tout l’horizon ; ajout d’un contre-cas
  où une montée en charge progressive inverse la décision
- ajout d’une entrée pour les autres coûts ponctuels déjà chiffrés ; zéro ne
  vaut pas preuve d’absence et les coûts omis restent à confirmer
- le résultat économique positif devient un candidat à un pilote limité et
  précise qu’il n’autorise aucun déploiement
- article 22 limité aux décisions individuelles exclusivement automatisées
  avec effet juridique ou similaire significatif ; exceptions, garanties et
  réexamen humain réel ajoutés
- AIPD qualifiée séparément selon le risque élevé ; chaîne de sous-traitance,
  pays, garanties et fin de contrat ajoutés
- retrait des durées arbitraires par section ; temps global recalculé sur
  l’HTML visible et registre porté de 14 à 18 minutes

Calculs refaits sans reprendre les résultats P1 :
- scénario principal : 432 h actuelles ; 302,4 h techniquement retirables ;
  241,92 h retirées après adoption ; 145,152 h réaffectées ;
  5 515,776 € de valeur de capacité ; 6 016 € de coût initial renseigné ;
  9 376 € de coût total ; écart −3 860,224 € ; ROI −41,171331 % ;
  retour théorique du coût initial 66,975419 mois
- composition des cas : `(8 × 3) ÷ (8 × 3 + 2 × 30) = 28,5714 %`
- 220 cas/mois : adoption moyenne 80 % → +736,256 € ; moyenne pondérée
  70 % → −527,776 €
- ajout de 1 000 € de coût ponctuel au cas 220 → −263,744 €
- 600 cas/mois : +18 202,88 € à 140 €/mois ; seuil mensuel
  `(27 578,88 − 6 016) ÷ 24 = 898,4533 €` ; résultat négatif à 900 €/mois

Contrôles :
- `npx vitest run
  src/app/guides/automatiser-processus-metier/process-priority-tool.test.ts`
  → 1 fichier, 9/9 tests réussis
- ESLint ciblé sur page, image OG, outil, test et registre → succès
- `npx tsc --noEmit` → succès
- `npm run measure:guide-readtime -- automatiser-processus-metier`
  avec `GUIDE_BASE_URL=http://127.0.0.1:3000` → 3 523 mots visibles,
  18 minutes ; second passage identique après réconciliation du registre
- HTML servi sur localhost:3000 → HTTP 200, 499 890 octets, un H1,
  JSON-LD `Article` et `BreadcrumbList` seulement, FAQ et calculateur visibles,
  zéro `FAQPage`, zéro `HowTo`, zéro attribut de téléchargement et zéro
  référence XLS/XLSX/CSV
- liens contenant `/guides` dans l’HTML servi → canonique du guide, `/guides`
  et URL France Num ; le source ne contient aucun ancien slug local et ajoute
  seulement la route de service active et les CTA `/demarrer-un-projet`
- aucun lien local vers un ancien slug de guide ; aucun ancien libellé à six
  réponses ; aucun ancien champ économique confondant temps et adoption
- garde-fou « aucun déploiement » retrouvé dans le bundle client servi ;
  scénario positif et portes non compensatoires couverts par Vitest
- `git diff --check -- <six artefacts P2>` → succès avant manifeste

Risques résiduels :
- aucune donnée Search Console ou Keyword Planner n’a été fournie ; aucune
  demande mensuelle ni difficulté de classement n’est affirmée
- les limites, licences et interfaces des éditeurs sont volatiles et doivent
  être revalidées lors d’un choix réel
- le calcul valorise une capacité selon des hypothèses saisies ; il ne prouve
  ni économie de trésorerie, ni revenu, ni coût d’erreur évité
- la portée de l’article 22, l’AIPD, les transferts et les mesures de sécurité
  dépend du traitement réel ; la page route vers DPO, sécurité ou conseil
- pas de navigation interactive automatisée en P2 : contrôle proportionné par
  HTML et bundles servis, calcul pur testé 9/9 ; le BAT navigateur final reste
  à la batterie d’orchestration
- P3 et P4 ne sont pas lancées ; aucun build de publication, commit, push,
  déploiement ou contrôle d’indexation n’est revendiqué

Décision orchestrateur : GO_PASSE_3
```

#### GATE_P2

```text
Décision : GO_PASSE_3
Contrôles indépendants de l’orchestrateur :
- périmètre : agent P2 distinct de P1, six artefacts autorisés seulement ;
  manifeste P2 vérifié 6/6 avant inscription du présent gate
- sources : neuf ressources officielles ou primaires répondent HTTP 200 le
  29 juillet 2026 ; portée de l’article 22, AIPD, sous-traitance, sécurité,
  limites éditeur et caractère volontaire du NIST relus sur les sources
- calculs : scénario principal, cas d’adoption, coût ponctuel omis, coût
  mensuel au volume, seuil de 898,4533 € et contre-cas 28,5714 % recalculés
  sans reprendre les résultats de l’agent
- contenu : 3 523 mots visibles, réponse directe, sept solutions réellement
  distinctes, refus/report possibles, hypothèses et inconnues explicites,
  aucune promesse commerciale ou donnée SEO inventée
- outil : scénario positif vérifié dans le navigateur à 600 cas/mois ;
  résultat limité au pilote, puis immédiatement bloqué lorsqu’une porte est
  fermée ; FAQ catégorisée testée par interaction
- technique : Vitest 9/9, ESLint ciblé et TypeScript verts, HTTP 200, un H1,
  JSON-LD Article + BreadcrumbList seulement, aucun FAQPage/HowTo,
  téléchargement XLS/XLSX/CSV ou ancien lien de guide
Corrections exigées : aucune
SHA-256 validé : oui ; manifeste P2 régénéré après cette décision
```

### Passe 3 — polish rédactionnel

```text
Agent : /root/passe_3_polish
État : TERMINEE_EN_ATTENTE_GATE_G3

Précondition :
- `shasum -a 256 -c
  docs/research/manifests/automatiser-processus-metier-p2.sha256`
  exécuté avant toute modification P3 : 6/6 artefacts P2 conformes

Documents et artefacts relus intégralement :
- Prompt #3 - Polish Rédactionnel.docx, texte extrait intégralement
- CLAUDE.md
- docs/regle-or-vigilance-seo-publication.md
- docs/charte-qualite-guides.md
- docs/workflow-maitre-guides-4-passes.md
- docs/roadmap-guides-seo.md
- docs/research/_modele-guide.md
- docs/research/automatiser-processus-metier.md
- les six artefacts du manifeste P2

Fichiers modifiés :
- src/app/guides/automatiser-processus-metier/page.tsx
- src/app/guides/automatiser-processus-metier/process-priority-tool.tsx,
  microcopie seulement
- src/lib/guides.ts, unique entrée du slug
- docs/research/automatiser-processus-metier.md
- docs/research/manifests/automatiser-processus-metier-p3.sha256

Fichiers P2 relus mais inchangés :
- src/app/guides/automatiser-processus-metier/opengraph-image.tsx
- src/app/guides/automatiser-processus-metier/process-priority-tool.test.ts

Polish réalisé :
- métatitre déclaratif de 51 caractères remplacé par la question décisionnelle
  « Quel processus métier automatiser en premier ? », 46 caractères
- métadescription recentrée sur les cinq portes, les sept réponses et le
  calcul transparent, 146 caractères
- ouverture et hero raccourcis : réponse et résultat attendu apparaissent
  avant la méthode
- titres des sections 1, 3, 5 et 9 rendus plus directs et orientés vers
  l’action ; sommaire aligné sur ces formulations
- transitions explicites ajoutées entre les dix sections sans créer de
  résumé artificiel
- no-code, interface d’échange/API, robot d’interface, ROI, CNIL, Anact, DPO,
  RGPD et AIPD définis à leur première utilité ou reformulés en français
  courant
- CTA rendu concret avec « Décrire mon premier processus » sans modifier sa
  destination, sa promesse ni le gabarit premium
- FAQ clarifiée sur le no-code, le robot d’interface et le calcul économique
- microcopie de l’outil clarifiée sur les portes, les coûts inconnus, le petit
  volume du pilote, les heures réaffectées et la contribution mensuelle
- relecture intégrale du résultat final après modification ; aucun nouvel
  argument, chiffre, seuil, prix, délai, exemple ou source ajouté

Invariant de fond :
- les cinq portes, les sept réponses, les contre-cas P2, les limites
  juridiques, les sources et tous les nombres sont conservés
- le calculateur n’a reçu aucun changement de formule, d’état, d’API ou de
  valeur initiale ; les 9 tests P2 restent inchangés
- la valeur de capacité reste distincte d’une économie de trésorerie et un
  résultat positif reste limité à un candidat pour un pilote
- JSON-LD maintenu à Article + BreadcrumbList ; aucun FAQPage ou HowTo
- aucun ancien slug de guide et aucun téléchargement XLS/XLSX/CSV
- editorialStatus reste `ready-for-human-review`

Mesure avant/après :
- P2 : 3 523 mots visibles, 18 minutes
- P3 : 3 811 mots visibles, 19 minutes, deux mesures identiques
- évolution : +288 mots visibles, soit +8,2 %, principalement due aux
  définitions utiles et aux transitions ; aucune section de remplissage

Contrôles :
- manifeste P2 vérifié avant édition : 6/6
- `npx vitest run
  src/app/guides/automatiser-processus-metier/process-priority-tool.test.ts`
  → 1 fichier, 9/9 tests réussis
- ESLint ciblé sur page, image OG, outil, test et registre → succès
- `npx tsc --noEmit` → succès
- recherche ciblée des formules éditoriales convenues, automatismes de
  transition et superlatifs creux → aucune occurrence
- HTML servi sur localhost:3000 → HTTP 200, 505 720 octets, un H1, dix
  sections, JSON-LD Article et BreadcrumbList seulement, CTA, FAQ, tableaux
  et calculateur présents
- HTML servi → `noindex, nofollow` attendu pour la revue humaine, zéro
  FAQPage/HowTo, téléchargement XLS/XLSX/CSV ou ancien lien de guide
- `git diff --check -- <six artefacts P3>` → succès avant manifeste

Risques résiduels :
- aucun lecteur humain non technique indépendant n’a été recruté pendant P3 ;
  le statut de revue humaine est donc conservé
- les sources et interfaces d’éditeur restent volatiles ; aucune actualisation
  factuelle n’a été nécessaire ni autorisée en polish
- la batterie responsive complète, le build de publication, le commit, le
  push, le déploiement et l’indexation relèvent des passes/gates suivantes
- P4 n’est pas lancée ; l’absence de défaut rédactionnel relevé en P3 ne vaut
  pas contre-audit antipasse IA

Décision orchestrateur : GO_PASSE_4
Manifeste : docs/research/manifests/automatiser-processus-metier-p3.sha256
```

#### GATE_P3

```text
Décision : GO_PASSE_4
Contrôles indépendants de l’orchestrateur :
- lecture pressée : le héros et le premier H2 répondent immédiatement ; les
  cinq portes, sept options et la sortie pilote/refus sont repérables sans
  connaître le vocabulaire d’un prestataire
- lecture méfiante : les hypothèses, limites, contre-cas, coûts omis, reprise,
  validation humaine, article 22 et AIPD restent visibles et qualifiés
- clarté des chiffres : toutes les valeurs P2 sont inchangées ; Vitest 9/9 et
  scénario navigateur à 600 cas/mois reproduit, puis bloqué par une porte
- cohérence héros/corps/FAQ : même décision, même nombre d’options, même
  distinction capacité/trésorerie et CTA vers /demarrer-un-projet
- technique : manifeste P3 6/6, 3 811 mots visibles et 19 minutes, ESLint,
  TypeScript et diff-check verts, HTTP 200, un H1, Article +
  BreadcrumbList seulement, aucun ancien lien ou téléchargement tableur
Point confié explicitement à P4 : éprouver les phrases de transition ajoutées
par P3 afin de conserver seulement celles qui font réellement avancer la
lecture.
Corrections exigées avant P4 : aucune
SHA-256 validé : oui ; manifeste P3 régénéré après cette décision
```

### Passe 4 — antipasse IA

```text
Agent : /root/passe_4_contre_audit
État : TERMINEE_EN_ATTENTE_GATE_G4

Précondition :
- `shasum -a 256 -c
  docs/research/manifests/automatiser-processus-metier-p3.sha256`
  exécuté avant toute modification P4 : 6/6 artefacts P3 conformes

Documents et artefacts relus intégralement :
- Prompt 4 - Antipasse IA.docx, texte extrait intégralement et rendu de neuf
  pages inspecté
- CLAUDE.md
- docs/regle-or-vigilance-seo-publication.md
- docs/charte-qualite-guides.md
- docs/roadmap-guides-seo.md
- docs/workflow-maitre-guides-4-passes.md
- docs/research/automatiser-processus-metier.md
- les six artefacts du manifeste P3

Fichiers modifiés :
- src/app/guides/automatiser-processus-metier/page.tsx
- docs/research/automatiser-processus-metier.md
- docs/research/manifests/automatiser-processus-metier-p4.sha256

Fichiers P3 relus mais inchangés :
- src/app/guides/automatiser-processus-metier/opengraph-image.tsx
- src/app/guides/automatiser-processus-metier/process-priority-tool.tsx
- src/app/guides/automatiser-processus-metier/process-priority-tool.test.ts
- src/lib/guides.ts, y compris
  `editorialStatus: "ready-for-human-review"`

Audit des quinze motifs :
1. Autosatisfaction : aucune promesse d’exclusivité, de supériorité ou de
   guide « ultime ». « Calcul transparent » est conservé, car les formules et
   limites sont réellement visibles.
2. Séries artificielles : aucun « un, deux, trois » décoratif. Les dix
   sections, cinq portes, sept réponses, quatre étapes du calcul et huit tests
   sont conservés parce qu’ils correspondent à des objets fonctionnels,
   vérifiables et exigés par le guide.
3. Symétrie : « Ces portes ne disent pas… Elles disent… » est devenu
   « Passer les cinq portes ne prouve pas… Cela indique seulement… ». Les
   tableaux comparatifs restent parallèles par nécessité.
4. Adjectifs commerciaux : aucune occurrence creuse relevée. Les termes
   « significatif » et « risque élevé » sont conservés dans leur portée
   juridique précise.
5. Métaphores : les cinq portes non compensatoires sont conservées, car elles
   structurent l’outil et empêchent un gain de masquer un risque. « Écrire
   l’échec » reste dans le mémo final, immédiatement traduit par alerte,
   dossier en attente, reprise et condition d’arrêt.
6. Parenthèses : aucune cascade. Les parenthèses restantes définissent au
   premier emploi ROI, API, no-code, CNIL, Anact, DPO, RGPD ou AIPD.
7. Connecteurs robotiques : quatre transitions de pur balisage supprimées ;
   « Indépendamment de l’article 22 » simplifié en « Même lorsque l’article 22
   ne s’applique pas ». Les « notamment » juridiques sont conservés pour ne pas
   transformer une liste non exhaustive en liste fermée.
8. Conclusion répétitive : aucune répétition de l’ouverture. Le mémo final
   conduit à une action observable : obtenir l’alerte, la reprise et la
   condition d’arrêt avant de comparer les outils.
9. Longueur uniforme : la phrase aphoristique sur « l’automatisation sans
   responsable » est remplacée par deux questions directes de longueurs
   différentes. Sur le HTML final : 34 phrases de 3 à 8 mots, 69 de 9 à 15,
   63 de 16 à 22, 44 de 23 à 30 et 34 de 31 mots ou plus.
10. Verbes neutres : le passage sur la notation nomme désormais le mécanisme
    exact — un gain financier compense une erreur dans la note — et le passage
    sur les rôles demande qui décide et qui traite l’alerte. Les verbes
    fonctionnels des définitions sont conservés.
11. Langage administratif : la transition juridique « Indépendamment de » a
    été simplifiée. Les formulations de l’article 22 et de l’AIPD restent
    précises pour ne pas altérer leur portée.
12. Inversions artificielles : aucune occurrence relevée.
13. Puces parallèles pauvres : aucune. Les listes de sécurité, les tableaux de
    choix et les cas de test sont parallèles parce qu’ils servent une
    comparaison ou une vérification ; chaque ligne apporte une décision,
    conséquence ou preuve différente.
14. Dramatisation : « un gros gain masquer un danger » est remplacé par le
    mécanisme concret d’une note où le gain financier peut compenser une erreur
    impossible à reprendre.
15. Saut logique : le H2 « Un calcul positif en apparence… » ne correspondait
    pas au scénario final négatif ; il devient « Les heures retirées ne
    suffisent pas à justifier l’investissement ». Les transitions sans relation
    causale ont été retirées.

Transitions P3 examinées une par une :
- « Pour vérifier ces conditions… » : conservée ; elle transforme les
  conditions de sélection en prochaine action observable.
- « Une fois le travail décrit… » : supprimée ; le H2 suivant porte déjà
  l’action et la phrase n’ajoutait aucun lien causal.
- « Quand une option paraît adaptée… » : conservée ; elle explique pourquoi le
  calcul vient après la comparaison des solutions.
- « Pour voir pourquoi ces précautions… » : supprimée ; annonce de
  démonstration redondante avec le H2 suivant.
- « Ces tests n’ont de valeur que si… » : conservée ; elle énonce la condition
  de validité opérationnelle du pilote.
- « Les rôles sont maintenant nommés… » : supprimée ; résumé du plan sans
  information nouvelle.
- « Rassemblez maintenant… » : supprimée ; le H2 et la fiche de décision
  donnent déjà l’action.

Invariants P2/P3 contrôlés :
- cinq portes, sept options, neuf FAQ et dix sections conservées
- formules, valeurs initiales, bornes, états et API du calculateur inchangés
- scénario principal inchangé : 432 h, 302,4 h, 241,92 h, 145,152 h,
  5 515,776 €, 6 016 €, 9 376 €, −3 860,224 €, −41,171331 % et
  66,975419 mois
- contre-cas inchangés : 28,5714 %, +736,256 €, −527,776 €, coût ponctuel de
  1 000 €, seuil mensuel 898,4533 € et scénario à 900 €/mois
- distinction capacité/dépense de trésorerie, coûts inconnus et absence de
  double compte conservées
- portée de l’article 22, exceptions, garanties, AIPD et renvois DPO/sécurité
  conservés
- un résultat positif reste seulement un candidat à vérifier par un pilote
  limité et n’autorise aucun déploiement
- CTA, destinations, gabarit premium, image OG et statut draft inchangés
- JSON-LD limité à Article + BreadcrumbList ; aucun FAQPage/HowTo, ancien lien
  de guide ou téléchargement XLS/XLSX/CSV

Mesure finale :
- 3 743 mots visibles
- 19 minutes selon la convention du dépôt, deux mesures identiques
- évolution P3 → P4 : −68 mots visibles, uniquement par retrait de
  transitions ou reformulations de ton ; aucune section de fond supprimée

Contrôles :
- manifeste P3 vérifié avant édition : 6/6
- `npx vitest run
  src/app/guides/automatiser-processus-metier/process-priority-tool.test.ts`
  → 1 fichier, 9/9 tests réussis
- ESLint ciblé sur page, image OG, outil, test et registre → succès
- `npx tsc --noEmit` → succès
- `npm run measure:guide-readtime -- automatiser-processus-metier`
  avec `GUIDE_BASE_URL=http://127.0.0.1:3000` → deux fois
  3 743 mots visibles et 19 minutes
- HTML servi sur 127.0.0.1:3000 → HTTP 200, 504 452 octets, un H1,
  dix sections, neuf questions de FAQ, cinq tableaux, CTA et calculateur
  visibles
- HTML servi → JSON-LD Article et BreadcrumbList seulement ; zéro
  FAQPage/HowTo, ancien lien de guide ou téléchargement XLS/XLSX/CSV ;
  canonical exact et noindex,nofollow attendu pendant la revue humaine
- recherche des automatismes, superlatifs et transitions convenus → seules
  les trois transitions conservées et justifiées subsistent
- `git diff --check -- <six artefacts P4>` → succès avant manifeste

Notation finale argumentée :
- 10/10 — réponse à l’intention : héros et première section répondent
  immédiatement au choix du premier processus et autorisent le refus
- 10/10 — exactitude et fraîcheur : aucune donnée P2 n’a été modifiée ; dates,
  périmètres et limites officielles restent visibles
- 10/10 — qualité des sources : France Num, CNIL, EUR-Lex, Anact, Microsoft
  Learn et NIST sont attribués avec leur portée
- 9/10 — valeur nouvelle : carte copiable, cinq portes, sept réponses,
  calculateur local, cas négatif et protocole d’échec sont actionnables
- 10/10 — décisions et contre-cas : simplifier, activer l’existant, reporter,
  garder une décision humaine ou tester un pilote restent des sorties réelles
- 10/10 — calculs et exemples : formules visibles, scénario fictif
  reproductible et neuf tests couvrant aussi adoption et coûts omis
- 9/10 — clarté non technique : termes définis au premier emploi et transitions
  purement mécaniques retirées sans simplifier le droit à tort
- 9/10 — fluidité et voix humaine : rythme varié, questions directes,
  contre-exemples et refus conservés ; aucune familiarité fabriquée
- 9/10 — cohérence SEO, métadonnées et maillage : intention, H1, title,
  description, canonique, sources et liens actifs concordent
- 9/10 — technique, accessibilité et rendu : HTTP, structure, tableaux, FAQ,
  calculateur, JSON-LD, tests, ESLint et TypeScript sont verts ; le BAT
  responsive final reste la responsabilité de l’orchestrateur
- Total : 95/100
- Axes sous 8 : aucun
- Axes critiques sous 9 : aucun
- P0 : aucun
- P1 : aucun

Risques résiduels :
- aucun lecteur humain non technique indépendant n’a été recruté en P4 ;
  `editorialStatus: "ready-for-human-review"` reste donc en place
- les limites et interfaces des éditeurs restent volatiles ; aucune nouvelle
  donnée factuelle n’a été ajoutée pendant cette passe
- le BAT responsive aux dix largeurs, la batterie globale, le build, le commit,
  le push, le déploiement et la vérification de production appartiennent à
  l’orchestrateur
- cette passe ne rend ni GATE_G4, ni GO_PUBLICATION, ni statut d’indexation

Décision agent : PASSE_4_TERMINEE
Décision orchestrateur : GO_PUBLICATION
Manifeste : docs/research/manifests/automatiser-processus-metier-p4.sha256
```

#### GATE_P4

```text
Décision : GO_PUBLICATION
Contrôles indépendants de l’orchestrateur :
- manifeste P4 vérifié avant toute décision : 6/6 artefacts conformes
- lecture intégrale de la page et du calculateur : intention résolue dès le
  héros, cinq portes réellement bloquantes, sept réponses distinctes, cas de
  refus, limites, coûts omis, responsabilités et reprise conservés
- calculs refaits indépendamment : scénario principal 432 h, 302,4 h,
  241,92 h, 145,152 h, 5 515,776 €, 9 376 €, −3 860,224 €, −41,171331 %
  et 66,975419 mois ; contre-cas adoption, coût omis et seuil mensuel
  reproduits
- navigateur réel : scénario à 600 cas/mois positif à 18 203 €, 194,1 % et
  6 mois ; le retrait d’une seule porte rebloque immédiatement la décision
  malgré ce gain ; ouverture de FAQ et changement de catégorie fonctionnels
- HTML servi : HTTP 200, un H1, dix sections attendues, canonical exact,
  Article + BreadcrumbList seulement, aucun FAQPage/HowTo, ancien lien de
  guide ou téléchargement XLS/XLSX/CSV
- technique ciblée : Vitest 9/9, ESLint, TypeScript, temps de lecture stable
  à 3 743 mots / 19 minutes et diff-check verts
- contre-audit rédactionnel : les quatre transitions supprimées étaient bien
  redondantes ; les trois transitions conservées apportent une action ou une
  causalité ; aucun fait ni calcul n’a été dégradé
Notation orchestrateur : 95/100 ; aucun axe sous 8, aucun axe critique sous 9
P0 : aucun
P1 : aucun
Corrections exigées : aucune
Réserve : GO_PUBLICATION autorise le retrait du statut de revue et l’ouverture
à l’indexation dans un vrai artefact de production. Il ne prouve pas encore le
build, le déploiement, le service de la route ni l’indexation effective.
```

## I. Clôture

```text
Guide : automatiser-processus-metier
Version P4 : VALIDEE_PAR_GATE_G4
Agents distincts P1/P2/P3/P4 : quatre agents distincts documentés
Gates G1/G2/G3/G4 : G1 GO_PASSE_2 ; G2 GO_PASSE_3 ;
  G3 GO_PASSE_4 ; G4 GO_PUBLICATION
Score final : 95/100
P0 : AUCUN
P1 : AUCUN
Tests locaux P4 : Vitest 9/9, ESLint, TypeScript, diff-check, HTTP 200,
  HTML/JSON-LD, calculs indépendants, interactions et temps de lecture verts
Batterie d’intégration orchestrateur : 401/401 tests globaux, 167/167
  contrôles SEO, lint complet, TypeScript, diff-check et build Next.js de
  production verts ; postbuild SEO indexable, 43 pages et 74 blocs JSON-LD
BAT responsive orchestrateur : 320, 360, 390, 430, 640, 768, 1024, 1280,
  1440 et 1600 px sans débordement horizontal ; contrôles visuels à 320, 768
  et 1440 px, cartes mobiles, calculateur, FAQ et CTA mobile contrôlés
Commit : AUCUN
Déploiement : AUCUN
URL servie : localhost:3000 vérifiée par l’orchestrateur ; production non
  vérifiée
Redirections testées : 100/100 anciennes routes en 308 exact ; neuf
  destinations en 200 ; route inconnue en 404
Indexation : NON_VERIFIEE
Décision finale : GO_DEPLOIEMENT — en attente de commit, déploiement et
  contrôle de la production servie
```
