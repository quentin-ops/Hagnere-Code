# Dossier de recherche — Digitaliser les bons d'intervention sans perdre les informations ni bloquer le terrain

> Dossier de preuve des quatre passes. Le guide publié suit le document, de sa
> préparation à la facturation, sans refaire un guide général sur la gestion
> des interventions.

## Journal des quatre passes

Propriétaire éditorial unique : `/root`

| Passe                        | État                     | Date       | Responsable                           | Snapshot                                                          | Blocages |
| ---------------------------- | ------------------------ | ---------- | ------------------------------------- | ----------------------------------------------------------------- | -------- |
| 1. Recherche                 | Terminée — porte validée | 2026-07-23 | `/root/research_internal_apps_batch2` | `docs/research/manifests/digitaliser-bons-intervention-p1.sha256` | Aucun    |
| 2. Rédaction et intégration  | Terminée — porte validée | 2026-07-23 | `/root`                               | `docs/research/manifests/digitaliser-bons-intervention-p2.sha256` | Aucun    |
| 3. Contre-audit indépendant  | Terminée — porte validée | 2026-07-23 | Deux relecteurs indépendants          | `docs/research/manifests/digitaliser-bons-intervention-p3.sha256` | Aucun    |
| 4. Plume humaine et contrôle | Terminée — porte validée | 2026-07-23 | `/root`                               | `docs/research/manifests/digitaliser-bons-intervention-p4.sha256` | Aucun    |

### Manifeste du snapshot

| Fichier contrôlé                                 | SHA-256                   | Passe | Remarque                                   |
| ------------------------------------------------ | ------------------------- | ----- | ------------------------------------------ |
| `docs/research/digitaliser-bons-intervention.md` | Voir le manifeste externe | P1    | Hash conservé uniquement dans le manifeste |

## 1. Fiche d'identité

```text
Slug : digitaliser-bons-intervention
Statut actuel : publiable — validation éditoriale déléguée
Requête principale : digitaliser bons d'intervention
Moment du parcours : décider / sécuriser
Lecteur précis : dirigeant d'une entreprise de maintenance, installation ou
  service terrain dont les bons papier, PDF ou photos arrivent tard, incomplets
  ou difficiles à rapprocher de la facturation.
Situation déclenchante : le technicien a terminé, mais l'administration ne sait
  pas exactement ce qui a été fait, accepté, refusé ou facturable.
Décision principale après lecture : garder le papier ou le PDF en corrigeant la
  manière de le remplir, utiliser un formulaire no-code, choisir un logiciel
  terrain standard ou développer un parcours spécifique.
Niveau de connaissance au départ : métier élevé, technique et droit de la
  preuve faibles à intermédiaires.
5 questions indispensables :
  1. À quelle décision le bon doit-il servir après l'intervention ?
  2. Quels faits, réserves et validations doivent être enregistrés ?
  3. Que se passe-t-il sans réseau, en cas de refus ou après une correction ?
  4. Qui reçoit le bon, sous quelle version et dans quel outil ?
  5. Une solution standard couvre-t-elle réellement le parcours ?
3 objections ou craintes :
  1. « Les techniciens vont perdre du temps sur leur téléphone. »
  2. « Une signature au doigt suffit-elle vraiment ? »
  3. « Sans réseau, nous perdrons les informations. »
Action utile sans contact commercial : prendre tous les bons d'une courte
  période ou un échantillon documenté de dix bons récents, relever les champs
  manquants, corrections, retards et causes de reprise, puis jouer un cas hors
  ligne avec des données fictives. Dix bons servent à apprendre, pas à
  généraliser un taux à toute l'activité.
CTA possible : cadrer le parcours d'un bon, de l'intervention à sa destination.
Hors périmètre : planification complète des tournées, géolocalisation des
  salariés, droit sectoriel détaillé, valeur probante d'un cas précis, logiciel
  de facturation complet.
Date de la recherche : 2026-07-23
Responsable de la synthèse : /root/research_internal_apps_batch2
```

## 1 bis. Contrat de langage humain

- Phrase exacte que le lecteur pourrait dire au téléphone : « Mes techniciens
  font signer un bon, mais il revient trop tard ou incomplet : comment le
  digitaliser sans compliquer leur travail ? »
- Réponse qu'il attend en une phrase : choisissez l'outil après avoir défini ce
  que le bon doit permettre d'expliquer, qui doit le compléter et ce qui doit
  arriver en cas d'absence de réseau, de réserve ou de correction.
- Terme central expliqué sans jargon : le bon d'intervention est le document
  qui décrit l'intervention prévue, ce qui a réellement été fait, les
  observations et la validation ou les réserves du client.
- Mots ordinaires employés par le lecteur : technicien, client, bon, chantier,
  matériel, pièce, heure, photo, réserve, refus, signature, envoi, facture.
- Mots à éviter sans explication : valeur probante, piste d'audit, horodatage
  qualifié, synchronisation bidirectionnelle, non-répudiation, workflow.
- Projet des 150 premiers mots : montrer le décalage entre intervention finie
  et bon exploitable ; répondre que « remplacer le papier par une tablette » ne
  suffit pas ; annoncer le trajet complet du document.
- Ce que le lecteur saura décider après ces 150 mots : si son premier problème
  est le formulaire, le parcours de validation, le hors-ligne ou la liaison
  administrative.
- H2 relus isolément : oui ; chaque titre annonce une décision ou un test
  compréhensible sans vocabulaire d'agence.
- Comparaison comprise à 390 px sans colonne masquée : validée dans le navigateur en P4.
- FAQ dont la première phrase répond : oui ; six réponses directes, sans
  donnée structurée FAQPage.
- CTA formulé comme résultat : « Cartographier le trajet d'un bon
  d'intervention ».

### Test sujet, action, résultat

Refait sur le guide intégré, puis validé par le contre-audit indépendant et la
lecture navigateur P4.

| Phrase abstraite à éviter     | Qui agit ?                | Action concrète                                                 | Résultat                                                                                                       | Formulation attendue                                                                                                      |
| ----------------------------- | ------------------------- | --------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| « Dématérialiser le terrain » | Le technicien             | Remplit un bon fictif sans réseau puis teste sa reprise         | L'entreprise sait si le fonctionnement hors ligne résiste à une coupure, une reconnexion et une action répétée | « Le test coupe le réseau, conserve le brouillon de façon protégée, reprend l'envoi et vérifie qu'un seul bon est reçu. » |
| « Sécuriser la signature »    | Le client et l'entreprise | Identifient le signataire, l'acte et conservent sa version      | La validation est rattachée au bon concerné                                                                    | « Le bon conserve l'identité déclarée, la version acceptée, la date et les éléments de validation. »                      |
| « Accélérer la facturation »  | L'administration          | Reçoit un bon complet et contrôle les réserves                  | Elle sait si le dossier est facturable                                                                         | « L'administration voit les pièces posées, les réserves et les champs manquants avant de facturer. »                      |
| « Assurer la traçabilité »    | Le système                | Enregistre auteur, date, nature et référence d'une modification | Une correction peut être expliquée                                                                             | « Après correction, l'historique indique qui a changé quel champ et quand. »                                              |
| « Fluidifier les échanges »   | L'entreprise              | Envoie la version validée au bon destinataire                   | Client et bureau travaillent sur la même version                                                               | « Le client reçoit le bon validé ; l'administration retrouve exactement cette version. »                                  |

### Test de l'ouverture

- [x] le bon inexploitable apparaît avant la solution ;
- [x] le terme bon d'intervention est défini ;
- [x] le droit de la preuve n'est pas présenté comme une formule magique ;
- [x] aucune métaphore ne masque le trajet réel ;
- [x] une réponse pratique précède les limites juridiques.

## 2. Cannibalisation

| Page existante                                      | Intention de cette page                                                    | Différence du nouveau guide                                                                                    | Lien ou arbitrage nécessaire                                                                          |
| --------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `/guides/application-gestion-interventions-terrain` | Organiser le parcours complet, de la planification au retour administratif | Le bon devient l'unique objet étudié : champs, versions, validation, refus, hors-ligne, transmission et preuve | La page existante réserve explicitement ce futur sujet ; ne pas refaire planning, tournée ou pilotage |
| `/guides/automatiser-saisie-donnees-entreprise`     | Éviter la ressaisie d'une donnée et gérer ses rejets                       | Le guide suit un document métier composé de faits, pièces et validations                                       | Renvoyer pour l'automatisation de la saisie, sans reprendre sa progression                            |
| `/guides/connecter-erp-crm-logiciel-metier`         | Définir source de vérité et échanges fiables                               | Le guide précise ce que le bon transmet ; le voisin traite comment les systèmes échangent                      | Lien pour les doublons, reprises et contrats de données                                               |
| `/guides/cahier-des-charges-application-metier`     | Formaliser un projet complet                                               | L'audit d'une période ou de dix bons documentés constitue une entrée métier, pas un cahier des charges         | Étape suivante possible                                                                               |
| `/services/outils-internes-sur-mesure`              | Vendre un outil interne                                                    | Le guide compare aussi papier ou PDF corrigé, formulaire no-code et logiciel standard                          | CTA après la décision                                                                                 |

**Évaluation du chevauchement :** la distinction est qualitative, sans
pourcentage inventé. Le guide terrain organise l'intervention complète ; cette
URL étudie uniquement le document, ses versions, réserves, refus, corrections,
destinataires et état avant facturation. Les deux pages doivent se lier
réciproquement.

**Justification d'une URL distincte :** le dirigeant cherche à rendre un
document dont l'origine, la version et la validation peuvent être expliquées
dans son contexte, pas à remplacer toute la gestion de ses interventions.

## 3. Demande et vocabulaire du lecteur

Questions observées :

- comment faire signer un bon d'intervention sur téléphone ou tablette ;
- comment fonctionner sans connexion ;
- quels champs mettre dans un rapport d'intervention ;
- comment envoyer automatiquement le PDF au client ;
- le bon signé électroniquement a-t-il une valeur ;
- comment passer du bon à la facture sans ressaisie ;
- quel logiciel choisir pour des techniciens.

Vocabulaire naturel : bon, compte rendu, fiche d'intervention, rapport, travaux
réalisés, pièces posées, réserve, refus de signature, photo, client absent,
hors-ligne, version corrigée. Ne pas mélanger « bon d'intervention », « bon de
travail » et « procès-verbal » comme s'ils avaient toujours le même rôle : le
guide demandera quel document et quel engagement existent dans l'entreprise.

Observation qualitative de résultats français le 2026-07-23. Aucun volume,
CPC ou classement futur n'est affirmé.

## 4. Carte concurrentielle

| Page                                                                                  | Réponse et angle                                  | Preuves/artefacts                   | Bon point                           | Manque décisionnel                                               | Conflit d'intérêt |
| ------------------------------------------------------------------------------------- | ------------------------------------------------- | ----------------------------------- | ----------------------------------- | ---------------------------------------------------------------- | ----------------- |
| [CosySign](https://cosysign.fr/)                                                      | Signature et bons numériques                      | Démonstration produit               | Rend l'usage mobile concret         | La signature est au premier plan avant le rôle exact du bon      | Éditeur           |
| [Bonero](https://www.bonero.fr/)                                                      | Application dédiée aux bons d'intervention        | Fonctionnalités et parcours produit | Cible précisément le document       | Peu de méthode pour conclure qu'un formulaire plus simple suffit | Éditeur           |
| [Extrabat Today](https://www.extrabat.com/today/)                                     | Application terrain reliée à une suite de gestion | Présentation des usages             | Montre la continuité terrain-bureau | Le choix dépend de l'écosystème Extrabat                         | Éditeur           |
| [Kwixéo — gestion de chantiers](https://www.kwixeo.fr/logiciel-gestion-de-chantiers/) | Gestion plus large incluant les interventions     | Catalogue fonctionnel               | Replace le bon dans l'activité      | Le guide recherché doit rester centré sur le document            | Éditeur           |
| [Oplia](https://oplia-app.com/)                                                       | Suivi d'interventions et comptes rendus           | Page produit                        | Aborde plusieurs étapes terrain     | Les cas refus, correction et version sont peu structurants       | Éditeur           |

**Angle mort commun :** un bouton de signature, un PDF et un mode hors ligne
sont souvent présentés comme une réponse complète. Or le dirigeant doit encore
décider quels faits enregistrer, que faire d'une réserve ou d'un refus, quelle
version envoyer et comment contrôler la reprise de synchronisation.

**Valeur originale que le guide apportera :** suivre un bon fictif de bout en
bout, distinguer validation métier et effets juridiques, puis comparer quatre
réponses avec les mêmes critères, dont conserver le support actuel et ne rien
développer.

## 5. Fiche de preuves

| Affirmation utilisable                                                                                                                                                                                                      | Source primaire, URL et passage utile                                                                                                                          | Nature                                  | Périmètre                                                                     | Date/consultation   | Confiance | Emplacement du lien visible                 | Conséquence lecteur                                                                                      | Fraîcheur                              |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- | ----------------------------------------------------------------------------- | ------------------- | --------- | ------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| Un écrit électronique peut avoir la même force probante que le papier si l'auteur est dûment identifié et si l'intégrité de l'acte est garantie                                                                             | [Code civil, article 1366](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000032042461)                                                               | Texte légal officiel                    | Droit français de la preuve ; application au cas concret à faire valider      | Consulté 2026-07-23 | Haute     | Section « ce que le bon doit conserver »    | Ne pas réduire la preuve au dessin d'une signature                                                       | À vérifier avant publication           |
| La signature identifie son auteur et manifeste son consentement ; la signature électronique repose sur un procédé fiable lié à l'acte                                                                                       | [Code civil, article 1367](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000032042456/2026-04-04)                                                    | Texte légal officiel                    | Droit français ; conditions et présomptions à interpréter selon le dispositif | Consulté 2026-07-23 | Haute     | Section signature, refus et réserves        | Relier la personne, la version et l'action de consentir                                                  | À vérifier avant publication           |
| Une signature électronique ne peut être écartée uniquement parce qu'elle est électronique ; seule la signature qualifiée équivaut expressément à la manuscrite dans tous les États membres                                  | [Règlement eIDAS consolidé, article 25](https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:02014R0910-20241018)                                         | Droit de l'Union européenne             | Effets juridiques généraux, pas validation automatique d'un produit           | Consulté 2026-07-23 | Haute     | Encadré de nuance juridique                 | Éviter « toute signature au doigt vaut signature manuscrite »                                            | Consolidation officielle au 2024-10-18 |
| Une application mobile ne doit demander que les permissions nécessaires ; le choix technique de permission ne vaut pas toujours consentement RGPD                                                                           | [CNIL — Permissions des applications mobiles](https://www.cnil.fr/fr/permissions-applications-mobiles-recommandations-de-la-cnil-pour-respecter-la-vie-privee) | Recommandations d'une autorité publique | Applications traitant des données personnelles                                | Consulté 2026-07-23 | Haute     | Section photos, localisation et permissions | Justifier caméra, position et notifications au lieu de tout demander                                     | À vérifier avant publication           |
| Les équipements mobiles appellent limitation du stockage local, verrouillage et procédure en cas de perte                                                                                                                   | [CNIL — Sécuriser l'informatique mobile](https://www.cnil.fr/fr/securite-securiser-linformatique-mobile)                                                       | Recommandations de sécurité             | Terminaux mobiles et données personnelles                                     | Consulté 2026-07-23 | Haute     | Section hors-ligne                          | Le cache hors ligne doit être protégé et effaçable                                                       | À vérifier avant publication           |
| Les journaux peuvent consigner auteur, date, heure, nature et référence d'une opération de façon proportionnée                                                                                                              | [CNIL — Tracer les opérations](https://www.cnil.fr/fr/securite-tracer-les-operations)                                                                          | Recommandation de sécurité              | Données personnelles ; durée selon finalité et risques                        | Consulté 2026-07-23 | Haute     | Section corrections et versions             | Une correction doit laisser un historique utile                                                          | À vérifier avant publication           |
| Il faut limiter la collecte aux données nécessaires                                                                                                                                                                         | [CNIL — Minimiser les données collectées](https://www.cnil.fr/fr/minimiser-les-donnees-collectees)                                                             | Principe RGPD expliqué par la CNIL      | Données personnelles                                                          | Consulté 2026-07-23 | Haute     | Section choix des champs                    | Ne pas imposer photo ou géolocalisation « au cas où »                                                    | À vérifier avant publication           |
| L'exploitation nominative d'heures, positions ou volumes peut devenir un contrôle d'activité soumis à justification, proportionnalité, information préalable et consultation des représentants lorsque les règles l'exigent | [CNIL — Contrôle de l'activité des personnes employées](https://www.cnil.fr/fr/controle-de-lactivite-des-personnes-employees)                                  | Recommandation d'une autorité publique  | Outils utilisés par des salariés ; analyse au cas par cas                     | Consulté 2026-07-23 | Haute     | Section mesure et journalisation            | Ne pas détourner secrètement les traces de sécurité pour reconstituer les heures ou classer les salariés | À vérifier avant publication           |

### Contradictions et données à ne pas publier

- Ne pas écrire qu'une signature tracée au doigt rend automatiquement le bon
  « incontestable », « certifié » ou équivalent à une signature qualifiée.
- Ne pas garantir qu'un bon numérique suffit à prouver une créance ou
  l'exécution dans tout litige ; le contrat, le secteur, le dispositif et les
  faits comptent.
- Ne pas imposer géolocalisation, photo ou pièce d'identité par défaut.
- Ne pas promettre facturation instantanée : une réserve, un contrôle ou un
  écart entre prévu et réalisé peut exiger une validation humaine.
- Ne pas reprendre les pourcentages ou heures économisées des éditeurs sans
  méthode et échantillon comparables.
- Ne pas présenter une durée universelle de conservation ; les obligations
  documentaires dépendent de la nature de l'activité et du document.
- Ne pas confondre la version métier du bon, lisible par les personnes
  autorisées, avec un journal technique limité aux opérations nécessaires.
- Ne pas réutiliser secrètement auteur, heure, position ou journal de sécurité
  pour reconstituer les heures ou classer les salariés. Un contrôle d'activité
  exige une finalité définie, un besoin démontré, une mesure proportionnée,
  l'information préalable et la consultation des représentants lorsque les
  règles l'imposent.

### Scénario fictif canonique à conserver en P2

Le guide public doit annoncer avant le premier chiffre que l'intervention, les
personnes et la référence ci-dessous sont entièrement fictives. Un seul bon
traverse ensuite toutes les sections :

1. Le bureau prépare le bon fictif `BI-042` : contrôle d'un équipement, deux
   filtres prévus, adresse, créneau, technicien et destinataire administratif.
2. Sur place, le technicien déclare deux filtres réellement remplacés, ajoute
   une observation sur un bruit persistant et rattache d'abord la référence
   fictive `F-27`.
3. À 16 h 40 dans ce scénario fictif, le contact client déclaré rattache la
   réserve « bruit encore audible après remise en route » à la version 1. Le
   guide montre en variantes ce qu'il faut enregistrer si cette personne refuse
   de valider ou si personne n'est présent, sans fabriquer une signature.
4. Le local n'a pas de réseau. Le bon et une pièce fictive restent dans l'état
   « en attente d'envoi » sur un stockage local protégé. Le téléphone perdu et
   l'effacement à distance font partie du test, pas d'une garantie générique.
5. Avant le retour du réseau, le test interrompt un envoi et provoque une
   correction concurrente au bureau. La règle de conflit doit conserver les
   versions, demander une décision ou refuser l'écrasement, jamais choisir en
   silence.
6. Au retour du réseau, un nouvel essai d'envoi ne doit créer qu'un seul bon.
   L'application confirme la réception côté serveur ou signale clairement
   l'échec et l'action manuelle attendue. La copie locale n'est purgée qu'après
   cet accusé.
7. L'administration reçoit la version 1, vérifie le prévu, le réalisé, les
   pièces, la réserve, l'auteur déclaré et le destinataire.
8. Une référence saisie `F-27` doit devenir `F-72`. La version 2 conserve
   l'auteur, la date, le champ corrigé et le lien avec la version envoyée.
9. L'administration choisit un état explicite : « facturable », « à compléter »
   ou « contesté ». Dans ce cas fictif, la réserve place le bon « à compléter »
   jusqu'au contrôle suivant ; aucune facture automatique n'est promise.
10. Le destinataire reçoit la version 2 encore « à compléter ». La réserve
    reste ouverte et le responsable maintenance reçoit la prochaine action.
    L'entreprise conserve version métier et journal technique séparément, selon
    les finalités et règles applicables.

Ce scénario matérialise le parcours attendu : prévu → réalisé et pièces →
réserve, refus ou absence → attente hors ligne → interruption et conflit →
reconnexion sans doublon → réception et contrôle → correction historique →
décision administrative → version envoyée avec réserve et prochaine action.

### Calculs reproductibles

Mesures proposées, sans objectif générique :

- taux de bons complets au premier envoi =
  `bons ne nécessitant aucune reprise / bons reçus × 100` ;
- délai de transmission = heure de réception exploitable par l'administration
  moins heure de fin déclarée de l'intervention ;
- taux de reprise = `bons rouverts ou corrigés / bons reçus × 100` ;
- taux d'action manuelle hors ligne =
  `bons résolus après une action manuelle / H_résolus × 100`, où `H_résolus`
  compte uniquement les bons hors ligne arrivés à un résultat ;
- délai jusqu'à décision de facturation = heure de décision « facturable,
  à compléter ou contesté » moins heure de fin déclarée.

Toujours préciser la période, l'unité, le nombre de bons et la définition d'un
bon « complet ». Séparer attente et temps de travail. Sur un échantillon de dix
bons, un bon représente dix points de pourcentage : ce résultat décrit
uniquement cet échantillon et n'est pas généralisable sans méthode
d'échantillonnage adaptée. Si `N = 0` ou `H_résolus = 0`, afficher « non
calculable » plutôt que 0 %.

Contrôle inverse : nombre de bons complets + incomplets = total reçu. Pour les
bons effectivement saisis hors ligne, « synchronisé automatiquement » + «
résolu après une action manuelle » = `H_résolus`, puis `H_résolus` + « encore
en attente à la date du relevé » = `H_total`. Les bons annulés ou tests sont
exclus et comptés séparément.

### Quatre réponses à comparer avec les mêmes critères

| Réponse possible                                                | Quand l'essayer                                                                                                             | Condition honnête de sortie                                                                                                       |
| --------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| Garder le papier ou le PDF en corrigeant la façon de le remplir | Les champs, validations et exceptions sont peu nombreux ; le support arrive à temps une fois les responsabilités clarifiées | Cette option peut gagner sans aucun développement si le test complet produit un document reçu, vérifiable et exploitable          |
| Utiliser un formulaire no-code relié aux outils                 | Les règles restent lisibles, les droits et volumes sont maîtrisables et une personne peut entretenir l'assemblage           | Sortir si le hors-ligne, les versions, les droits, les coûts récurrents ou la récupération des données ne résistent pas au test   |
| Choisir un logiciel terrain standard                            | Le besoin ressemble à des interventions courantes et l'entreprise peut adapter certaines habitudes                          | Sortir si une réserve, un refus, une correction, un destinataire ou une intégration essentielle impose un contournement permanent |
| Développer un parcours spécifique                               | Les règles et exceptions stables sont propres au métier et les trois autres réponses ont échoué sur des cas indispensables  | Sortir si le coût complet, l'entretien, la sécurité, la dépendance ou la reprise par un tiers ne sont pas acceptables             |

Les quatre options reçoivent la même grille : fonctionnement hors ligne
réellement testé ; rôles et droits ; versions et corrections ; réserve, refus
et absence ; identité déclarée et action de validation ; connexions et
destinataires ; exceptions ; sécurité du mobile et des données ; export et
sortie ; charge interne, abonnements, mise en place, formation, support,
maintenance et coût total sur une durée commune. Les documentations produit
des solutions no-code ou standard devront être ouvertes au moment de comparer
un produit précis ; une page commerciale ne suffit pas.

## 6. Empreinte éditoriale à ne pas reproduire

| Guide                                       | Type d'ouverture           | Progression                                 | Dispositif récurrent              | Exemple                 | CTA                  | Conclusion                |
| ------------------------------------------- | -------------------------- | ------------------------------------------- | --------------------------------- | ----------------------- | -------------------- | ------------------------- |
| `application-gestion-interventions-terrain` | Journée terrain fragmentée | Planification jusqu'au retour administratif | Parcours complet et tests terrain | Intervention de service | Après cadrage du lot | Piloter un flux complet   |
| `automatiser-saisie-donnees-entreprise`     | Donnée recopiée            | Source, transformation, rejets              | Fiche d'une donnée                | Saisie administrative   | Après mesure         | Automatiser avec contrôle |
| `connecter-erp-crm-logiciel-metier`         | Systèmes en désaccord      | Source de vérité puis reprises              | Contrat d'échange                 | Client/commande         | Après sécurisation   | Tester les échecs         |
| `cahier-des-charges-application-metier`     | Besoin à formaliser        | Projet complet                              | Trame                             | Application métier      | Étape projet         | Faire consulter           |

Choix du nouveau guide :

```text
Tension : l'intervention est finie, mais le bon n'est pas encore exploitable.
Ouverture : suivre un bon réel qui revient incomplet plutôt que décrire une
  journée entière de technicien.
Progression : préparer, saisir, valider/refuser, conserver, synchroniser,
  contrôler, transmettre et décider de facturer.
Artefact signature : la « carte de vie du bon » avec états et responsable.
Rythme : phrases concrètes ; chaque concept juridique est immédiatement traduit.
Place du CTA : après le test autonome sur dix bons.
Conclusion : choisir le support le plus simple qui résiste aux exceptions.
Différences :
  1. Le document est le personnage principal, pas la tournée.
  2. Refus, réserves, corrections et version sont traités explicitement.
  3. Preuve juridique et validation opérationnelle ne sont pas confondues.
  4. Le hors-ligne est testé comme un état avec reprise, pas une case produit.
```

## 7. Plan annoté

| Section provisoire                                                                 | Question résolue                                          | Preuve ou exemple                                                                                  | Conséquence/décision                                                            | Format                       |
| ---------------------------------------------------------------------------------- | --------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ---------------------------- |
| Votre technicien a terminé ; pourquoi le dossier n'est-il pas encore exploitable ? | Quel est le vrai problème ?                               | Bon incomplet reçu en photo deux jours après                                                       | Réponse immédiate                                                               | Scène courte                 |
| Un bon numérique doit servir à une décision précise                                | Que doit permettre le document ?                          | Contrôler, informer, facturer, traiter une réserve                                                 | Choisir la destination avant les champs                                         | Questions                    |
| Suivez le bon de sa préparation à son archivage                                    | Quelles étapes et versions existent ?                     | États et responsables                                                                              | Repérer pertes et attentes                                                      | Carte de vie verticale       |
| Demandez chaque information une seule fois, au bon moment                          | Quels champs garder ?                                     | prévu/réalisé, quantité, pièce, observation, photo conditionnelle                                  | Formulaire court et conditionnel                                                | Tableau champ/raison/auteur  |
| Signature, réserve, refus : enregistrez ce qui s'est réellement passé              | Comment traiter l'accord ?                                | client absent, réserve, refus de signer                                                            | Prévoir branches et identité                                                    | Trois cas concrets + sources |
| Le hors-ligne n'est retenu que si la coupure et le retour en ligne sont testés     | Que se passe-t-il sans réseau ?                           | doublon, téléphone perdu, synchronisation interrompue                                              | Définir stockage, reprise et alerte sans promettre un mode hors ligne générique | Scénario pas à pas           |
| Papier ou PDF corrigé, formulaire no-code, logiciel standard ou sur-mesure         | Quel niveau d'outil choisir ?                             | Même grille : hors-ligne, droits, versions, réserves, intégrations, sécurité, sortie et coût total | Décision proportionnée, dont ne rien développer                                 | Cartes comparatives          |
| Reliez le bon à l'administration sans facturer à l'aveugle                         | Que transmettre ?                                         | Version validée, réserves, pièces, contrôle                                                        | Définir une décision humaine ou automatique explicite                           | Parcours                     |
| Faites passer huit cas d'échec avant le pilote                                     | Comment tester ?                                          | réserve, refus, coupure, envoi interrompu, conflit, doublon, perte, destinataire erroné            | Critères d'acceptation                                                          | Checklist                    |
| Auditez tous les bons d'une période ou dix bons documentés                         | Comment apprendre sans généraliser un petit échantillon ? | Complétude, reprise, transmission, décision ; un bon vaut dix points sur dix                       | État initial honnête avec zéro dénominateur explicite                           | Formules                     |
| Quand demander un développement spécifique ?                                       | Bon ou mauvais fit ?                                      | Règles sectorielles stables versus simple PDF                                                      | Contact seulement si utile                                                      | Deux listes + CTA            |

## 8. Ressource et conversion

```text
Une ressource est-elle naturellement nécessaire ? non, pas de fichier séparé.
Problème résolu : l'article livre une carte de vie du bon copiable.
Résultat autonome : états, responsables, champs indispensables et huit tests.
Format : tableau copiable ; aucun téléchargement promis.
Rubriques : état, déclencheur, responsable, données ajoutées, version créée,
  destinataire, exception, reprise.
Exemple rempli : intervention de maintenance fictive, clairement étiquetée.
Conclusion « ne pas investir » : oui, si le papier cadré ou l'application
  standard fournit un bon complet et exploitable.
Sources, hypothèses et limites : visibles.
Données saisies : aucune donnée transmise.
Processus reproductible : modèle statique dans l'article.
Journal de QA : réalisé à 390 px en P4, sans colonne masquée ni débordement.
Limites : ne remplace pas un avis juridique sectoriel.
Mode de maintenance : revue annuelle des sources juridiques/CNIL.
Test : sans objet en P1.
Bon fit : champs ou validations propres au métier, besoin hors ligne réel,
  plusieurs versions/destinataires, intégration spécifique stable.
Mauvais fit : formulaire simple couvert par l'outil actuel, processus non
  stabilisé, recherche d'une garantie juridique automatique.
Action non commerciale : auditer tous les bons d'une période courte ou dix bons
  documentés, puis jouer le cas fictif hors ligne sans donnée client réelle.
CTA : « Présenter le trajet d'un bon d'intervention » vers
  /demarrer-un-projet. Le clic ouvre un formulaire guidé ; la demande est relue
  humainement, sans délai, diagnostic juridique ni livrable automatique promis.
```

## 9. Rapports de sortie des quatre passes

### Rapport P1 — Recherche

```text
PASSE 1 TERMINÉE
Slug : digitaliser-bons-intervention
Lecteur et phrase réelle : dirigeant d'une entreprise terrain ; « Le bon revient
  tard ou incomplet : comment le digitaliser sans bloquer le technicien ? »
Décision : papier ou PDF corrigé, formulaire no-code, logiciel terrain standard
  ou parcours spécifique.
Angle et forme dominante : suivre la vie du bon jusqu'à sa destination.
Pages proches et différence : le guide interventions traite le parcours global
  et réserve explicitement le modèle du bon à cette URL.
Sources décisives : Code civil 1366 et 1367, eIDAS, CNIL mobile, minimisation et
  journalisation.
Incertitudes exclues : valeur probante garantie, conservation universelle,
  gains éditeurs, obligation de géolocalisation.
Action autonome et CTA : période complète ou échantillon documenté de dix bons
  + test hors ligne fictif ; présenter le trajet d'un bon.
Plan : 11 sections, comparaison et huit tests.
Snapshot : docs/research/manifests/digitaliser-bons-intervention-p1.sha256
```

### Contre-audit préparatoire de P1

Un relecteur indépendant a d'abord conclu **P0 = 0, P1 = 4, P2 = 5**. La P1 a
été reprise avant toute rédaction publique :

- frontière resserrée sur le document, ses versions, réserves, refus,
  corrections, destinataires et état administratif, avec lien réciproque prévu
  vers le guide général des interventions ;
- quatre réponses comparées avec la même grille, dont conserver le support
  actuel et ne rien développer ;
- règlement eIDAS remplacé par sa consolidation officielle française du
  18 octobre 2024 et formulations juridiques non garanties ;
- fonctionnement hors ligne transformé en exigence testable, avec stockage
  protégé, perte du téléphone, reconnexion, action répétée et absence de
  doublon ;
- scénario fictif complet `BI-042`, calculs sur dix bons explicitement non
  généralisables, dénominateur nul et catégories de synchronisation exclusives ;
- résultat du formulaire et absence de diagnostic juridique automatique rendus
  explicites.

Après ces corrections, aucun P0 ou P1 ne subsiste dans le dossier P1. Toute
réintroduction d'une garantie de signature, de hors-ligne ou de gain bloque P2.

### Rapport P2 — Rédaction et intégration

```text
PASSE 2 TERMINÉE
Fichiers créés ou modifiés : page publique et image sociale dédiées ; entrée
  du registre maintenue en attente ; lien entrant depuis le guide général des
  interventions terrain ; tests de langage humain ; présent dossier
Ouverture et réponse : l'intervention est finie, mais l'administration ne sait
  pas encore si le dossier est facturable ; la réponse distingue immédiatement
  document prévu, document réalisé, réaction, corrections et version reçue
Forme propre au sujet : un seul bon fictif BI-042 traverse neuf états, du
  bureau à la version corrigée ; le guide montre ensuite la carte du document,
  le hors-ligne, la décision administrative et huit échecs à provoquer
Comparaison : papier ou PDF corrigé, formulaire assemblé, logiciel terrain
  standard et développement spécifique sont examinés avec les mêmes questions
  de couverture, sécurité, coût et sortie ; le développement peut perdre
Exemples ou calculs : exemple déclaré fictif avant son affichage ; F-27 devient
  F-72 sans effacer la version 1 ; taux sur N et H_résolus, dénominateur nul et
  réconciliation avec H_total ; limite explicite d'une observation de dix bons
Sources visibles : Code civil et eIDAS près de la signature ; CNIL près des
  permissions, du mobile, de la minimisation et de la journalisation
Action autonome, bon fit et mauvais fit : carte de vie copiable, scénario
  hors-ligne et huit tests ; un PDF mieux conçu ou un logiciel déjà payé
  restent des conclusions valides
CTA et destination : un seul CTA tardif vers /demarrer-un-projet ; le formulaire,
  la relecture humaine et l'absence d'avis juridique, de délai ou de
  développement garanti sont explicites
Contrôles rapides : 25/25 tests de langage humain ; Prettier ciblé, ESLint
  ciblé et TypeScript conformes
Snapshot : docs/research/manifests/digitaliser-bons-intervention-p2.sha256
```

### Rapport P3 — Contre-audit indépendant

Deux premières contre-lectures ont refusé le brouillon avec **P0 = 0** mais des
P1 à corriger avant toute validation :

- le dénominateur des heures de reprise ne permettait pas de réconcilier les
  catégories affichées ;
- le guide n'expliquait pas assez les limites d'un éventuel contrôle de
  l'activité des salariés ;
- l'interface de contact affichait encore un numéro de téléphone alors que le
  texte promettait un seul appel à l'action ;
- le caractère fictif de `BI-042` n'était pas visible dans l'image sociale ;
- les conflits entre une correction au bureau et une correction hors ligne,
  ainsi qu'un transfert interrompu, n'étaient pas testés ;
- la différence entre version métier du bon et journal technique restait trop
  implicite ;
- la comparaison des quatre solutions n'utilisait pas encore des critères
  strictement communs ;
- certains intitulés, phrases et métadonnées restaient trop abstraits.

La reprise P2 a intégré chacun de ces points : `H_résolus` est désormais
distingué de `H_total`, les huit pannes comprennent le transfert interrompu et
le conflit de correction, les règles de contrôle des salariés renvoient à la
CNIL, les quatre options partagent la même grille, le scénario conserve la
réserve ouverte et son prochain responsable, et l'unique CTA n'affiche plus de
téléphone. L'image sociale porte maintenant la mention « scénario fictif ».

Deux relecteurs indépendants ont ensuite examiné le snapshot corrigé en lecture
seule. Leurs verdicts convergent : **P0 = 0 et P1 = 0**. L'un conserve trois P2
de plume et de cohérence documentaire ; l'autre, après une contre-lecture
juridique distincte, conserve un P2 de réconciliation. Tous ont été intégrés
dans la passe 4 :

- « réaction du client » a été remplacé par les quatre issues concrètes ;
- les responsables ne mélangent plus personne, téléphone et service d'envoi ;
- le dossier annonce neuf états, comme le scénario public ;
- minimisation, permission mobile, information préalable, contrôle des salariés
  et journaux sont expliqués plus près de l'action concernée ;
- `bons complets + bons incomplets = N`, tandis que les annulations et essais
  restent comptés séparément.

Les deux relecteurs ont vérifié le manifeste 8/8, les calculs, la prudence
juridique, le CTA unique sans téléphone, Article et BreadcrumbList, ainsi que
l'image 1200 × 630. La porte P3 est validée ; le snapshot historique est
conservé dans `digitaliser-bons-intervention-p3.sha256`.

### Rapport P4 — Plume humaine et contrôle final

```text
PASSE 4 TERMINÉE
Passages humanisés : intervention terminée et bon inexploitable placés dès l'ouverture ; signature, réserve, refus et hors-ligne expliqués par des cas concrets ; jargon juridique limité et sourcé
Retour P3 effectué : oui ; deux relecteurs indépendants ont validé le nouvel état à P0 = 0, P1 = 0 et P2 = 0
Scorecard justifiée : 20/20 ; détail dans la table ci-dessous
Validation humaine réelle : non
Test réalisé par une personne réelle : non
Autorisation éditoriale : Décision de publication : autorisée explicitement par le commanditaire
Commandes et résultats : check:seo, ESLint, TypeScript, batterie Vitest, build Next.js, postbuild et git diff --check conformes au gel final du lot
Snapshot final : docs/research/manifests/digitaliser-bons-intervention-p4.sha256
Statut maximal : publiable — validation éditoriale déléguée
Verdict : porte P4 validée
```

Contrôles P4 déjà réalisés sur le serveur local :

- 3 199 mots comptés dans l'artefact final, soit 16 minutes avec la convention de
  200 mots par minute ;
- largeurs effectives 320, 390, 767, 1 024 et 1 440 px, sans débordement
  horizontal ;
- thème clair et thème sombre ; introduction, scénario, comparatif, calculs et
  CTA relus dans le rendu ;
- un H1, un CTA commercial dans l'article, aucun lien téléphonique dans
  l'article, canonical exact, Article et BreadcrumbList parsables ;
- image sociale 1 200 × 630 relue en taille originale et en vignette, avec
  `BI-042`, « scénario fictif », réserve conservée et « doublon à tester ».

## 10. Revue finale

La recherche, la rédaction, deux contre-audits indépendants et la P4 sont
terminés. Les recommandations ont été intégrées ; rendu réel, durée de lecture,
indexation, build commun et snapshot final ont été contrôlés.

### Scorecard P4

| Axe         | Note 0-2 | Preuve actuelle                                                                                  | Correction éventuelle |
| ----------- | -------: | ------------------------------------------------------------------------------------------------ | --------------------- |
| Intention   |        2 | Le guide suit le bon, distinct du pilotage complet des interventions                             | Aucune                |
| Décision    |        2 | Papier/PDF, formulaire, logiciel standard et spécifique restent possibles                        | Aucune                |
| Pédagogie   |        2 | BI-042 traverse neuf états ; jargon juridique et mobile expliqué au point utile                  | Aucune                |
| Profondeur  |        2 | Réserve, refus, hors-ligne, conflit, doublon, version, destinataire et décision administrative   | Aucune                |
| Preuve      |        2 | Code civil, eIDAS, Code du travail et CNIL visibles ; exemple déclaré fictif                     | Aucune                |
| Comparaison |        2 | Dix critères communs et huit échecs appliqués aux quatre réponses                                | Aucune                |
| Originalité |        2 | Le document et ses versions, pas un catalogue de logiciel terrain                                | Aucune                |
| Style       |        2 | Ouverture concrète, titres compréhensibles et « réaction du client » supprimée                   | Aucune                |
| Conversion  |        2 | Bon et mauvais contexte séparés ; CTA unique, tardif, sans téléphone ni développement présupposé | Aucune                |
| SEO/produit |        2 | Intention, metadata, maillage, OG, index/follow et cinq largeurs contrôlés                       | Aucune                |

Total final : **20/20**.

### Test lecteur non technique

```text
Test réalisé par une personne réelle : non
Profil du lecteur : non testé
Ce qu'il a compris comme réponse : non revendiqué
Décision qu'il prendrait : non revendiquée
Endroit où il a commencé à survoler : non mesuré
Passage crédible ou trop commercial : non mesuré
Termes ou passages bloquants : non mesurés
Corrections appliquées : deux contre-audits indépendants, contrôles visuels réels
  et délégation explicite du commanditaire ; aucun faux test lecteur n'est inventé
```

### Vérifications historiques à la fermeture de P1

- [x] lecteur, situation et décision définis ;
- [x] frontière explicite avec le guide interventions terrain ;
- [x] langage concret prévu ;
- [x] sources juridiques officielles distinguées des pages commerciales ;
- [x] signature électronique présentée sans garantie trompeuse ;
- [x] mesures reproductibles sans gain inventé ;
- [x] action autonome, bon fit et mauvais fit ;
- [x] aucun fichier téléchargeable absent promis ;
- [x] aucune publication ou indexation déclarée.
