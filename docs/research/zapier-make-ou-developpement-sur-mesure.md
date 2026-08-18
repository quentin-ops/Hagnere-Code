# Dossier de recherche P1 — Zapier, Make ou développement sur mesure

Date de la passe : 6 août 2026  
Slug : `zapier-make-ou-developpement-sur-mesure`  
Question : **comment exécuter un flux déjà identifié sans confondre prix affiché,
coût complet, capacité de reprise et responsabilité d'exploitation ?**  
État : création P1 neuve, destinée au gate de l'orchestrateur. Aucun statut de
publication, de déploiement ou d'indexation n'est revendiqué.

> Le dossier historique et ses manifestes ont été retirés avant P1. Ils n'ont
> été ni restaurés, ni consultés dans Git, ni employés comme texte, plan,
> preuve, source ou verdict. Le gel P0 du 6 août 2026 est l'unique entrée
> éditoriale antérieure utilisée.

## 1. Identité éditoriale

### 1.1 Intention et lecteur

- Requête principale : `Zapier Make ou développement sur mesure`.
- Lecteurs : direction de PME, responsable métier ou opérations, DSI,
  responsable automatisation, prestataire chargé d'une reprise.
- Moment : le processus a déjà été choisi ; un flux existe ou peut être dessiné,
  mais sa consommation, ses erreurs, sa reprise et son coût complet ne sont pas
  encore rapprochés.
- Travail à accomplir : choisir une prochaine étape défendable à partir du même
  flux, du même horizon et de preuves observées.
- Hors périmètre : tutoriel de configuration, palmarès permanent, catalogue de
  connecteurs, devis, audit juridique individuel ou promesse de disponibilité.

### 1.2 H1, réponse et promesse

H1 : **Zapier, Make ou développement sur mesure : que choisir pour un flux
devenu critique ?**

Réponse à placer dans le héros et dans les 150 premiers mots : Zapier ou Make
reste souvent la bonne réponse tant que le flux est lisible, observable,
récupérable et soutenable au coût complet. Une autre plateforme n'est utile que
si le même flux, testé de la même façon, résout une limite réelle. Le code
dédié devient une option lorsque règle, séquencement, volume, reprise ou données
dépassent la plateforme, à condition de financer aussi l'exploitation. Une
architecture hybride peut isoler la seule difficulté. Sans mesure, propriétaire,
relève, tests de panne et coûts comparables, il faut mesurer, simplifier ou
suspendre — pas migrer par intuition.

### 1.3 Sorties honnêtes, sans classement implicite

Les cinq sorties restent ouvertes jusqu'à la fin :

1. **Conserver et sécuriser Zapier ou Make** : réparer la conception,
   l'observation, la documentation ou la reprise sans changer d'outil.
2. **Changer de plateforme** : refaire le même flux sur l'autre plateforme
   seulement si le test résout la limite identifiée sans déplacer le problème.
3. **Choisir une architecture hybride** : conserver l'orchestration visible et
   coder uniquement une règle ou une connexion dont la frontière est nette.
4. **Développer une connexion dédiée** : financer construction, exploitation,
   surveillance, maintenance, évolution d'API, support et sortie.
5. **Simplifier, arrêter ou maintenir humainement** : réduire le flux, assumer
   un traitement manuel provisoire ou supprimer une automatisation peu utile.

Le guide ne doit jamais transformer ces sorties en score. Un échec de panne
indispensable ne peut être compensé par un coût plus bas.

### 1.4 Conflit d'intérêts et CTA

Hagnéré Code vend du développement sur mesure. Ce conflit d'intérêts doit être
visible : la méthode peut conclure « gardez l'existant », « changez de
plateforme », « simplifiez » ou « arrêtez ». Le seul CTA conduit vers
`/demarrer-un-projet` après l'atelier autonome ; il propose l'examen d'un flux,
sans devis automatique ni présupposition de code.

## 2. Contrat de réponse

### 2.1 Ce que le lecteur doit pouvoir faire seul

En trente jours, sur un flux non sensible ou une copie sûre, le lecteur doit
pouvoir :

1. dessiner `déclencheur → branches → actions → preuve → erreur → reprise → responsable` ;
2. relever événements, branches, unités facturées, résultats, reprises,
   doublons et temps humain sans les confondre ;
3. rapprocher le relevé de l'historique d'exécution et de la facture ;
4. éprouver sept pannes en sandbox, sur copie ou avec données anonymisées ;
5. comparer le maintien et une option candidate à 12 et 36 mois avec les mêmes
   catégories ;
6. consigner les inconnues et choisir manuellement une des cinq sorties.

### 2.2 Définitions à traduire avant usage

| Terme | Traduction visible | Limite à conserver |
| --- | --- | --- |
| Déclencheur | événement qui lance le flux | il peut être interrogé périodiquement ou reçu à l'arrivée |
| Action | opération réalisée dans un logiciel connecté | une action métier et une unité facturée ne sont pas synonymes |
| Tâche / crédit | unité commerciale propre au fournisseur | comptage, exceptions et plan doivent être vérifiés sur le flux réel |
| API | porte documentée entre deux logiciels | son existence ne garantit ni stabilité, ni droit d'usage, ni reprise |
| Webhook | message envoyé à l'arrivée d'un événement | le même message peut être reçu plusieurs fois |
| Erreur 429 | réponse indiquant trop de requêtes dans le contexte concerné | elle peut venir de la plateforme ou d'un logiciel connecté |
| Nouvelle tentative | nouvel essai après un échec | sans contrôle de l'effet déjà produit, elle peut créer un doublon |
| Idempotence | propriété ou mécanisme empêchant une répétition utile de créer deux effets métier | elle se prouve sur l'opération réelle, pas sur un mot dans un schéma |
| File | attente ordonnée avant traitement | elle exige capacité, statut, responsable et procédure de reprise |
| Journal | trace contextualisée permettant de comprendre et réparer | son contenu, ses accès et sa durée doivent rester proportionnés |
| Mode dégradé | fonctionnement limité mais explicite pendant un incident | il doit être testé, communiqué et suivi d'un retour au normal |
| Réversibilité | capacité pratique à remettre scénarios, données, secrets, documentation et responsabilités | un export téléchargé mais non relu ne suffit pas |

### 2.3 Portes non compensables

Chaque porte vaut `RÉUSSI`, `ÉCHEC` ou `INCONNU`. Il n'existe ni pondération ni
moyenne :

1. donnée obligatoire absente ou invalide ;
2. limite de débit ou réponse `429` ;
3. logiciel tiers temporairement indisponible ;
4. même webhook reçu deux fois ;
5. première action réussie puis action suivante échouée ;
6. secret, jeton ou autorisation expiré ;
7. reprise manuelle après un effet déjà produit chez le tiers.

Pour chaque porte, relever : signal, élément en attente, effet déjà produit,
possibilité de reprise, risque de doublon, personne alertée, preuve du retour au
normal et éventuelle compensation. Si le test n'est pas exécutable sans risque,
l'impossibilité devient un STOP explicite.

## 3. Corpus interne et frontières

| Ressource locale | Apport autorisé | Ce que le guide n'en reprend pas |
| --- | --- | --- |
| `automatiser-processus-metier` | amont : choisir ou simplifier un processus | pas de duplication du diagnostic du premier processus |
| `calculer-roi-application-metier` | vocabulaire coût, horizon et inconnues | pas de modèle économique complet d'application |
| `back-office-sur-mesure-pme` | contrat d'écran, droits, support et sortie | pas de bibliothèque d'écrans |
| `/services/outils-internes-sur-mesure` | frontière du service et CTA | aucune preuve client ou promesse de résultat |
| composants premium actuels | mise en page, FAQ, sources, CTA et accessibilité | aucune donnée éditoriale empruntée à un autre guide |

Propriété exclusive du guide : **le contrat d'exploitation d'un flux et son
observatoire sur trente jours**. La redirection publique historique reste en
place pendant les passes ; la route locale reste privée et absente du registre.

## 4. Analyse externe

### 4.1 Observation de la recherche française

Quatre requêtes ont été observées le 6 août 2026 : `Zapier ou Make
développement sur mesure automatisation PME`, `Zapier vs Make France
automatisation coût limites`, `quand passer Zapier Make développement sur
mesure` et `alternative Zapier Make développement spécifique`.

Les résultats visibles privilégient souvent :

- comparaisons de fonctions, nombres d'intégrations et prix d'appel ;
- verdicts généraux du type « plus simple », « moins cher » ou « meilleur à
  fort volume » ;
- tableaux Zapier / Make / n8n ;
- conseils commerciaux ou affiliations ;
- quelques avertissements sur la complexité et la maintenance.

Les angles rarement réunis sur une même page sont : mesure d'un flux réel,
succès partiels, doublons, reprise après effet, origine exacte d'un `429`, coût
humain observé, absence de double comptage, propriétaire et remplaçant, mode
dégradé, réversibilité testée, et possibilité honnête de conserver ou d'arrêter.
Le guide se différencie par ces preuves et non par un volume de mots.

Les résultats tiers ne servent à aucune affirmation produit. Toutes les
fonctionnalités, règles de comptage, limites, données et conditions conservées
dans le guide proviennent des sources primaires ci-dessous.

### 4.2 Sources primaires ouvertes — Zapier

Toutes les pages suivantes ont été ouvertes le 6 août 2026. Les mentions de
date interne décrivent l'état vu ce jour et doivent être revalidées avant une
publication réelle.

| Source | Information utile conservée | Portée / limite |
| --- | --- | --- |
| [How is task usage measured in Zapier?](https://help.zapier.com/hc/en-us/articles/8496196837261-How-is-task-usage-measured-in-Zapier) | une tâche correspond en principe à une action réussie ; déclencheurs, filtres, chemins et actions échouées suivent des règles différentes ; un rejeu complet peut recompter des actions déjà réussies | aide officielle mise à jour le 21 juillet 2026 ; exceptions produit et plan à relire |
| [Zap limits](https://help.zapier.com/hc/en-us/articles/8496181445261-Zap-limits) | limites de tâches mensuelles, exécutions retenues et limites distinctes entre Zapier et applications connectées | valeurs et comportement selon offre ; aucun quota brut n'est généralisé dans le guide |
| [Troubleshoot errors in Zap workflows](https://help.zapier.com/hc/en-us/articles/8496037690637-How-to-troubleshoot-errors-in-Zap-workflows) | statuts d'erreur, exécution retenue, erreur traitée et nouvelle tentative ; un `429` peut venir de Zapier ou d'une application | aide mise à jour le 29 mai 2026 ; mécanismes et seuils peuvent dépendre du plan |
| [Pricing](https://zapier.com/pricing) | prix, unités et fonctions dépendent du plan au moment du relevé | aucune valeur tarifaire n'est publiée dans le guide ; le lecteur saisit sa facture réelle |
| [Terms of Service](https://zapier.com/legal/terms-of-service) | cadre contractuel et responsabilité du contenu ; le DPA s'applique selon le traitement | version exacte à rapprocher du contrat du client |
| [Data Processing Addendum](https://zapier.com/legal/data-processing-addendum) | le DPA fait partie du contrat applicable ; la donnée transmise à un service tiers relève ensuite aussi de l'accord avec ce tiers | page indiquant une mise à jour au 1er avril 2026 et une prise d'effet au 7 avril ; aucun avis juridique individuel |
| [Subprocessors](https://zapier.com/legal/subprocessors) | liste et localisations déclarées des sous-traitants traitant le contenu client | liste volatile affichant une publication le 10 juin 2026 et une prise d'effet le 24 juin ; revalidation obligatoire |
| [Data Privacy Overview](https://zapier.com/legal/data-privacy) | Zapier se décrit comme sous-traitant du contenu client lorsque le client en détermine les finalités | qualification réelle à vérifier pour chaque acteur et traitement |
| [Customize data retention](https://help.zapier.com/hc/en-us/articles/8496327478413-Customize-data-retention-in-Zapier) | l'historique et sa personnalisation dépendent de l'offre | les durées exactes, notamment Enterprise, restent volatiles et ne sont pas généralisées |
| [Trust Center](https://trust.zapier.com/) | point d'entrée vers attestations, sécurité et documents actuels | une vignette ou certification ne prouve pas à elle seule la conformité du flux du lecteur |

### 4.3 Sources primaires ouvertes — Make

| Source | Information utile conservée | Portée / limite |
| --- | --- | --- |
| [How features use credits](https://help.make.com/how-features-use-credits) | pour beaucoup de modules non-IA, une opération consomme un crédit, mais déclencheurs, recherches, agrégateurs, itérateurs, modules IA et code suivent des règles propres | il faut reconstruire le comptage du scénario module par module ; page ouverte le 6 août 2026 |
| [Incomplete executions](https://help.make.com/incomplete-executions) | les exécutions incomplètes sont une fonction de sécurité à activer selon le contexte ; elles conservent un état à reprendre | activation, types d'erreur et capacité dépendent de la configuration et de l'offre |
| [Manage incomplete executions](https://help.make.com/manage-incomplete-executions) | une reprise repart du module en erreur avec l'entrée et la configuration enregistrées ; résolution et suppression restent des actes explicites | le rejeu ne démontre pas à lui seul l'absence d'effet antérieur chez le tiers |
| [Fix rate limit errors](https://help.make.com/fix-rate-limit-errors) | `RateLimitError` peut correspondre à un `429` de l'application ; le comportement dépend du déclencheur et des exécutions incomplètes | certaines applications tierces ne respectent pas exactement les codes attendus ; tester le flux réel |
| [Pricing](https://www.make.com/en/pricing) | les crédits, limites et fonctions sont attachés à l'offre ; un scénario peut consommer de quelques crédits à beaucoup plus selon modules et données | prix et allocations volatils ; saisie de la facture réelle dans l'atelier |
| [Organizations](https://help.make.com/organizations) | l'organisation choisit une région de centre de données, États-Unis ou Union européenne selon la page ouverte ; ce choix ne peut pas être modifié après création | vérifier l'organisation réelle ; la région n'épuise pas la chaîne de sous-traitance ni les transferts |
| [Make API structure](https://developers.make.com/api-documentation/getting-started/api-structure) | l'URL de zone correspond à la région et à l'environnement de l'organisation | exemples `eu1`, `eu2`, `us1`, `us2` ; aucune déduction sur l'organisation du lecteur |
| [Data Processing Agreement for Make](https://www.make.com/data-processing-agreement.pdf) | le DPA version mai 2024 désigne le client responsable du traitement et Celonis sous-traitant dans le périmètre décrit | document à rapprocher du contrat actuel et du traitement exact |
| [Security](https://www.make.com/en/security) | point d'entrée sécurité et engagements différenciés selon offre | les mentions marketing ou Enterprise ne sont pas étendues à tous les plans |
| [Privacy and GDPR](https://www.make.com/en/privacy-and-gdpr) | point d'entrée vers DPA, sécurité et vie privée | ne remplace pas la qualification du traitement client |
| [List of sub-processors](https://www.make.com/sub-processors.pdf) | document officiel accessible, mais la version trouvée indique une dernière révision au 5 janvier 2022 | **INCONNU / STOP fraîcheur** : ne pas présenter cette liste comme l'état actuel sans source plus récente ou confirmation contractuelle |
| [Terms and Conditions](https://www.make.com/en/terms-and-conditions) | cadre contractuel de service | offre, entité et version réellement acceptées à vérifier avant décision |

### 4.4 Sources primaires — droit, données et ingénierie

| Source | Information utile | Qualification |
| --- | --- | --- |
| [RGPD — EUR-Lex](https://eur-lex.europa.eu/eli/reg/2016/679/oj?locale=fr) | art. 5 : finalité, minimisation, exactitude et responsabilité ; art. 25 : protection dès la conception et par défaut ; art. 28 : garanties et contrat du sous-traitant ; art. 32 : sécurité appropriée au risque | texte juridique ; aucune conclusion de conformité individuelle |
| [CNIL — gérer la sous-traitance](https://www.cnil.fr/fr/securite-gerer-la-sous-traitance) | garanties suffisantes, contrat, sécurité, incidents, restitution/destruction, vérification et chaîne de sous-traitance | recommandation de sécurité et rappel juridique publiés le 14 mars 2024 |
| [CNIL — recommandations API](https://www.cnil.fr/fr/api-les-recommandations-de-la-cnil-sur-le-partage-de-donnees) | analyse de risques, granularité, authentification, chiffrement, journalisation et responsabilités des acteurs | mesures à adapter au contexte et au risque |
| [CNIL — documenter la conformité](https://www.cnil.fr/fr/documenter-la-conformite) | documentation, traitements, transferts, droits, contrats et incidents à tenir à jour | ne crée pas un dossier universel identique pour toute PME |
| [RFC 9110 § 9.2.2](https://www.rfc-editor.org/rfc/rfc9110#section-9.2.2) | une méthode est idempotente lorsque plusieurs requêtes identiques ont l'effet voulu d'une seule ; PUT, DELETE et méthodes sûres le sont selon la spécification | propriété HTTP de la méthode ; une opération métier derrière POST exige un mécanisme applicatif explicite |
| [RFC 6585 § 4](https://www.rfc-editor.org/rfc/rfc6585#section-4) | `429 Too Many Requests` signale trop de requêtes sur une période ; la réponse peut comporter `Retry-After` | la norme ne fixe ni comment l'utilisateur est identifié, ni le compteur, ni une garantie de réponse 429 |
| [OWASP REST Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/REST_Security_Cheat_Sheet.html) | HTTPS, contrôle d'accès, validation, limites, erreurs génériques et journaux d'audit | recommandation d'ingénierie, pas obligation française générale |
| [OWASP Logging Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html) | journalisation applicative cohérente, événements de sécurité et protection des traces | recommandation d'ingénierie ; contenu et durée dépendent des risques et finalités |

## 5. Matrice d'information

Statuts : `COUVERT`, `RENVOI_EXPLICITE`, `ECARTE_JUSTIFIE`, `BLOQUANT`.

| ID | Question qui peut changer la décision | Perspective | Statut | Localisation prévue |
| --- | --- | --- | --- | --- |
| M01 | Quelle donnée ou action fait foi dans chaque logiciel ? | métier, données | COUVERT | contrat du flux, protocole |
| M02 | Combien d'événements, branches et actions ont réellement circulé en 30 jours ? | opérations, finance | COUVERT | observatoire local |
| M03 | Comment le fournisseur compte-t-il l'unité sur ce flux ? | finance, achats | COUVERT | section comptage + sources |
| M04 | La limite vient-elle de la plateforme ou du logiciel connecté ? | IT, incident | COUVERT | section 429 + panne 2 |
| M05 | Qui détecte l'échec, sous quel délai et avec quel contexte ? | opérations | COUVERT | contrat + observatoire |
| M06 | Quel effet a déjà réussi avant la reprise ? | métier, incident | COUVERT | portes 5 et 7 |
| M07 | Quelle opération est relançable, compensable ou humaine ? | métier, IT | COUVERT | protocole des pannes |
| M08 | Que se passe-t-il pendant un pic et après retour à la normale ? | dirigeant, incident | COUVERT | panne 2/3 + plan 30 jours |
| M09 | Quelles données personnelles ou sensibles transitent ? | données/RGPD | COUVERT | contrat et porte données |
| M10 | Qui est responsable ou sous-traitant dans le traitement réel ? | données, juridique | COUVERT | sources RGPD/CNIL + STOP juridique |
| M11 | Quelles traces sont nécessaires et combien de temps ? | sécurité, données | COUVERT | section traces proportionnées |
| M12 | Qui possède comptes, connexions, secrets, documentation et alertes ? | maintenance, achats | COUVERT | carte de garde |
| M13 | Un remplaçant peut-il reprendre sans l'auteur ? | adoption, réversibilité | COUVERT | exercice de relève |
| M14 | Les coûts sont-ils comparés sur 12 et 36 mois sans recouvrement ? | finance | COUVERT | moteur et atelier |
| M15 | Une fonction native ou le maintien humain est-il préférable ? | statu quo, métier | COUVERT | cinq sorties et cas 1/4 |
| M16 | Changer de plateforme répare-t-il la limite ou déplace-t-il le problème ? | dirigeant, IT | COUVERT | test croisé et cas 5 |
| M17 | Qui exploitera le code après livraison ? | maintenance, direction | COUVERT | sortie dédiée + CTA loyal |
| M18 | Quelle capacité interne est réellement disponible en incident ? | adoption, incident | COUVERT | propriétaire/remplaçant/délai |
| M19 | Quel plan, région et contrat s'appliquent ? | achats, juridique | COUVERT | sources visibles + dossier |
| M20 | La liste Make des sous-traitants est-elle actuelle ? | données, achats | BLOQUANT | registre INCONNU ; revalidation avant publication |
| M21 | Faut-il choisir le premier processus à automatiser ? | dirigeant | RENVOI_EXPLICITE | guide `automatiser-processus-metier` |
| M22 | Faut-il construire un back-office complet ? | métier, produit | RENVOI_EXPLICITE | guide `back-office-sur-mesure-pme` |
| M23 | Quel est le ROI complet d'une application ? | finance | RENVOI_EXPLICITE | guide `calculer-roi-application-metier` |
| M24 | Quel outil gagne un palmarès général en 2026 ? | SEO | ECARTE_JUSTIFIE | question trop volatile et indépendante du flux |

### 5.1 Couverture des douze perspectives

| Perspective | État | Question de contrôle | Réponse/localisation |
| --- | --- | --- | --- |
| Direction | APPLICABLE | quel risque justifie une migration et quelle preuve l'arrête ? | héros, sorties, lundi |
| Métier | APPLICABLE | quel effet fait foi et comment compenser ? | contrat, sept pannes |
| Opérations | APPLICABLE | qui surveille, reprend et clôt l'incident ? | observatoire, carte de garde |
| Finance | APPLICABLE | quel coût 12/36 mois sans double comptage ? | atelier local |
| IT / sécurité | APPLICABLE | limites, secrets, idempotence, journaux ? | pannes, sources RFC/OWASP |
| Données / RGPD | APPLICABLE | données, rôles, DPA, région, sous-traitants ? | contrat, sources EUR-Lex/CNIL |
| Achats / juridique | APPLICABLE | plan, entité, contrat, sortie et tiers ? | comparaison et réversibilité |
| Adoption | APPLICABLE | un remplaçant sait-il reprendre ? | exercice de relève |
| Maintenance | APPLICABLE | qui finance l'évolution des API et le support ? | coût du code |
| Incident / reprise | APPLICABLE | que devient un succès partiel ? | sept portes |
| Réversibilité | APPLICABLE | export, secrets et documentation sont-ils réellement remis ? | sortie et exercice |
| Statu quo | APPLICABLE | garder ou simplifier est-il testé loyalement ? | cinq sorties, cas 1 et 4 |

## 6. Registre des affirmations

Types : `FAIT`, `CALCUL`, `SCENARIO`, `DEDUCTION`, `RECOMMANDATION`, `INCONNU`.
Statuts : `VERIFIE`, `A_NUANCER`, `A_RETIRER`, `INCONNU`.

| ID | Type | Affirmation bornée | Source / calcul | Périmètre et date | Statut |
| --- | --- | --- | --- | --- | --- |
| ZAP-01 | FAIT | Une tâche Zapier est en principe une action réussie | aide Zapier tâches | page ouverte 2026-08-06 | VERIFIE |
| ZAP-02 | FAIT | Déclencheurs et filtres ne suivent pas le même comptage que les actions réussies | aide Zapier tâches | exceptions produit possibles | VERIFIE |
| ZAP-03 | FAIT | Une action échouée ne compte généralement pas comme tâche | aide Zapier tâches | règle officielle et exceptions à relire | A_NUANCER |
| ZAP-04 | FAIT | Un rejeu complet peut recompter une action déjà réussie | aide Zapier tâches | fonction et choix de rejeu réels | VERIFIE |
| ZAP-05 | FAIT | Les limites de la plateforme et celles des applications connectées sont distinctes | aide Zapier limites | flux et plan réels | VERIFIE |
| ZAP-06 | FAIT | Un `429` peut provenir de Zapier ou d'une application connectée | aide Zapier erreurs | diagnostic du run obligatoire | VERIFIE |
| ZAP-07 | FAIT | Les statuts erreur, retenu, traité et nouvelle tentative ne sont pas synonymes | aide Zapier erreurs | interface/version du jour | VERIFIE |
| ZAP-08 | FAIT | Prix, tâches et fonctions dépendent du plan | tarifs Zapier | aucune valeur publiée | VERIFIE |
| ZAP-09 | FAIT | Le DPA Zapier s'intègre au contrat applicable | DPA Zapier | version datée avril 2026 | VERIFIE |
| ZAP-10 | FAIT | Une donnée transmise à un service tiers relève aussi de l'accord avec ce tiers | DPA Zapier | chaîne réelle à qualifier | VERIFIE |
| ZAP-11 | FAIT | La liste de sous-traitants Zapier est un document daté et volatil | liste Zapier | publication affichée juin 2026 | A_NUANCER |
| ZAP-12 | FAIT | Une personnalisation de rétention est liée à certaines offres | aide rétention Zapier | ne pas généraliser une durée | VERIFIE |
| MAKE-01 | FAIT | Beaucoup de modules non-IA consomment un crédit par opération | aide Make crédits | module et version réels | VERIFIE |
| MAKE-02 | FAIT | Un déclencheur peut consommer au run même sans donnée produite | aide Make crédits | type de déclencheur réel | VERIFIE |
| MAKE-03 | FAIT | Une recherche peut compter au run indépendamment du nombre de bundles retournés | aide Make crédits | module réel | VERIFIE |
| MAKE-04 | FAIT | Un itérateur peut multiplier les exécutions en aval | aide Make crédits | structure du scénario | VERIFIE |
| MAKE-05 | FAIT | IA et code peuvent suivre une consommation différente | aide Make crédits | fonction et offre réelles | A_NUANCER |
| MAKE-06 | FAIT | Les exécutions incomplètes doivent être comprises et configurées | aide Make exécutions incomplètes | configuration réelle | VERIFIE |
| MAKE-07 | FAIT | Une reprise repart du module en erreur avec l'entrée enregistrée | aide Make gestion des exécutions | ne prouve pas l'absence d'effet tiers | VERIFIE |
| MAKE-08 | FAIT | Le comportement face à un `429` dépend du type de déclencheur et de la reprise | aide Make limites de débit | scénario réel | VERIFIE |
| MAKE-09 | FAIT | Les limites d'une application s'agrègent au-delà d'un seul scénario | aide Make limites de débit | connexion/application réelle | VERIFIE |
| MAKE-10 | FAIT | Une organisation Make choisit une région US ou UE selon l'aide actuelle | aide Make organisations | organisation réelle ; choix non modifiable après création | VERIFIE |
| MAKE-11 | FAIT | L'URL de zone correspond à la région/environnement de l'organisation | Make Developer Hub | URL réelle à vérifier | VERIFIE |
| MAKE-12 | INCONNU | La liste publique Make trouvée est-elle l'état actuel complet des sous-traitants ? | PDF officiel révisé 2022 | fraîcheur insuffisante en 2026 | INCONNU |
| MAKE-13 | FAIT | Certaines erreurs transitoires peuvent être réessayées avec attente croissante lorsque les exécutions incomplètes sont activées | aide Make limites de débit | type d'erreur et configuration réels | A_NUANCER |
| LAW-01 | FAIT | Le RGPD impose finalité et minimisation | RGPD art. 5 | traitement réel | VERIFIE |
| LAW-02 | FAIT | La protection des données doit être pensée dès la conception et par défaut | RGPD art. 25 | mesures adaptées | VERIFIE |
| LAW-03 | FAIT | Le responsable recourt à un sous-traitant présentant des garanties suffisantes | RGPD art. 28 | qualification réelle | VERIFIE |
| LAW-04 | FAIT | La sécurité doit être appropriée au risque | RGPD art. 32 | pas de mesure universelle | VERIFIE |
| LAW-05 | RECOMMANDATION | Contrat, chaîne de sous-traitance, incidents et garanties doivent être vérifiés | CNIL sous-traitance | recommandation/obligation selon point | VERIFIE |
| LAW-06 | RECOMMANDATION | Une API exige analyse de risque, contrôle d'accès, chiffrement et traces adaptés | CNIL API | contexte et données réels | VERIFIE |
| TECH-01 | FAIT | PUT, DELETE et méthodes sûres sont idempotentes au sens HTTP | RFC 9110 §9.2.2 | effet demandé au serveur | VERIFIE |
| TECH-02 | DEDUCTION | Un POST métier à effet exige une clé ou vérification applicative avant rejeu | RFC 9110 + pannes | recommandation de conception | VERIFIE |
| TECH-03 | FAIT | `429` signifie trop de requêtes sur une période | RFC 6585 §4 | compteur non défini par la RFC | VERIFIE |
| TECH-04 | FAIT | `Retry-After` peut être fourni mais n'est pas garanti | RFC 6585 §4 | réponse réelle | VERIFIE |
| TECH-05 | RECOMMANDATION | Les erreurs de validation et événements de sécurité utiles peuvent être journalisés | OWASP REST/Logging | minimisation et protection requises | VERIFIE |
| TECH-06 | RECOMMANDATION | Une API REST doit protéger les échanges, notamment les secrets, par HTTPS | OWASP REST Security | recommandation d'ingénierie à adapter | VERIFIE |
| DEC-01 | CALCUL | Le coût courant fictif à 12 mois vaut 14 800 € | formule C12 détaillée ci-dessous | exemple fictif | VERIFIE |
| DEC-02 | CALCUL | Le coût hybride fictif à 36 mois vaut 40 380 € | formule H36 détaillée ci-dessous | exemple fictif | VERIFIE |
| DEC-03 | DEDUCTION | Des intervalles qui se recouvrent ne départagent pas les options par le coût | marge de 15 % calculée | exemple fictif | VERIFIE |
| DEC-04 | RECOMMANDATION | Une porte de panne en échec bloque toute conclusion de migration ou construction | gel P0 + protocole | non compensable | VERIFIE |
| UNK-01 | INCONNU | Prix futur de Zapier ou Make sur le flux | facture et offre futures | saisie lecteur | INCONNU |
| UNK-02 | INCONNU | Disponibilité contractuelle applicable au lecteur | contrat exact | aucune généralisation marketing | INCONNU |
| UNK-03 | INCONNU | Qualification juridique complète de chaque acteur | traitement et contrats réels | revue compétente | INCONNU |

**Recompte P1 : 44 lignes — 36 `VERIFIE`, 4 `A_NUANCER`, 0
`A_RETIRER`, 4 `INCONNU`.** Les deux lignes `MAKE-12` et `UNK-01` à `UNK-03`
restent des STOP de publication si une formulation prétend les résoudre.

## 7. Calculs, unités et scénarios

### 7.1 Politique de calcul de l'atelier

- période observée : 30 jours ;
- compteurs : entiers sûrs, zéro explicite admis, vide = `INCONNU` ;
- heures et euros : nombres finis positifs ou nuls, deux décimales au plus ;
- euros convertis en centimes avant addition ;
- coût humain mensuel : `(heures observation + correction + réconciliation − heures déjà incluses) × coût horaire` ;
- une heure contractuelle incluse reste visible mais n'est pas ajoutée deux fois ;
- coût mensuel courant : plateforme + tiers + humain + exploitation du code + incident ;
- coût candidat mensuel : plateforme + tiers + humain + hébergement + surveillance + maintenance + support + incident ;
- coût à `m` mois : `coûts initiaux + m × coûts mensuels + (m / 12) × mises à jour annuelles + coût de sortie` ;
- marge basse/haute : `total × (1 − marge)` et `total × (1 + marge)` ;
- la marge décrit une incertitude saisie, pas une probabilité statistique ;
- si les intervalles se recouvrent, le coût ne départage pas les options ;
- même sans recouvrement, l'atelier ne recommande pas automatiquement une option.

### 7.2 Exemple fictif reproduit à la main

Période de 30 jours : 1 200 événements, 1 680 exécutions de branche, 2 540
unités facturées, 1 130 succès complets, 30 échecs, 40 succès partiels, 22
reprises automatiques, 8 reprises manuelles, 3 doublons. Temps : 4 h
d'observation + 9 h de correction + 5 h de réconciliation = 18 h ; 3 h sont
déjà incluses dans un contrat, donc `15 × 55 € = 825 €` de coût humain non
recouvert.

Option courante fictive :

- plateforme : `90 + 40 + 20 = 150 € / mois` ;
- services tiers : `30 € / mois` ;
- humain : `825 € / mois` ;
- exploitation code : `0 € / mois` ;
- incident documenté/hypothèse nommée : `120 € / mois` ;
- total mensuel : `150 + 30 + 825 + 0 + 120 = 1 125 €` ;
- remise en état initiale : `600 €` ; évolution API annuelle : `300 €` ;
  sortie : `400 €`.

Calculs :

- `C12 = 600 + 12 × 1 125 + 1 × 300 + 400 = 14 800 €` ;
- `C36 = 600 + 36 × 1 125 + 3 × 300 + 400 = 42 400 €`.

Option hybride fictive : cadrage `800 €`, réalisation `2 800 €`, tests `900 €`,
migration `500 €`, soit `5 000 €` initiaux. Coûts mensuels : plateforme `120 €`,
tiers `30 €`, humain `(6 − 1) × 55 = 275 €`, hébergement `50 €`, surveillance
`80 €`, maintenance `200 €`, support `100 €`, incident `50 €`, soit
`905 € / mois`. Évolution API annuelle `600 €`, sortie `1 000 €`.

- `H12 = 5 000 + 12 × 905 + 1 × 600 + 1 000 = 17 460 €` ;
- `H36 = 5 000 + 36 × 905 + 3 × 600 + 1 000 = 40 380 €`.

Avec une marge de 15 % :

- courant 12 mois : `[12 580 € ; 17 020 €]` ;
- hybride 12 mois : `[14 841 € ; 20 079 €]` ;
- courant 36 mois : `[36 040 € ; 48 760 €]` ;
- hybride 36 mois : `[34 323 € ; 46 437 €]`.

Les intervalles se recouvrent aux deux horizons. Dans ce cas fictif, le coût ne
peut pas recommander l'hybride, même si son point central est plus bas à 36
mois. Les portes de panne, la responsabilité et la réversibilité restent de
toute façon non compensables.

### 7.3 États invalides à tester

- champ vide : `INCONNU`, jamais zéro ;
- virgule et point français/anglais : acceptés puis normalisés ;
- négatif, infini, `NaN`, plus de deux décimales ou valeur hors plage : erreur ;
- heures déjà incluses supérieures aux heures totales : erreur ;
- somme succès + échecs + succès partiels supérieure aux événements : erreur ;
- coût d'incident sans base nommée : manque critique ;
- option « changer », « hybride » ou « dédiée » sans type/couts candidat
  concordants : conclusion suspendue ;
- porte inconnue ou en échec : conclusion suspendue ;
- propriétaire, remplaçant ou délai maximal absent : conclusion suspendue.

## 8. Cas contrastés entièrement fictifs

### Cas 1 — conserver la plateforme

- Contexte : notification de nouveau dossier, faible criticité, faible volume.
- Connu : erreur visible, historique exploitable, reprise manuelle courte,
  propriétaire et remplaçant nommés.
- Inconnu : coût d'un changement de plateforme.
- Incident : donnée obligatoire absente ; le dossier reste en attente sans
  action partielle.
- Décision provisoire : conserver et documenter la plateforme.
- Condition inverse : si l'erreur n'est plus détectée à temps ou si les
  doublons apparaissent au volume réel, rouvrir l'architecture.

### Cas 2 — isoler une règle complexe

- Contexte : la plateforme orchestre clairement quatre logiciels, mais une
  règle tarifaire change selon des données historiques.
- Connu : déclencheur, actions, source de vérité et équipe d'exploitation.
- Inconnu : fréquence de changement de l'API métier.
- Incident : règle calculée, puis écriture tierce refusée.
- Décision provisoire : tester une fonction dédiée, sans reconstruire
  l'orchestration visible.
- Condition inverse : si la règle devient native ou reste instable, conserver
  le flux ou simplifier plutôt que figer du code.

### Cas 3 — étudier une connexion dédiée

- Contexte : séquencement strict, volumes testés, conséquences métier élevées.
- Connu : budget d'exploitation, astreinte réaliste, propriétaire, relève,
  file, identifiant de déduplication et mode dégradé.
- Inconnu : coût futur d'une API tierce ; ligne conservée comme telle.
- Incident : première action réussie, seconde en échec ; la compensation est
  testée avant reprise.
- Décision provisoire : cadrer une connexion dédiée et la comparer au maintien.
- Condition inverse : si l'équipe ne finance pas surveillance, maintenance et
  sortie, le code perd la comparaison.

### Cas 4 — simplifier ou maintenir humainement

- Contexte : règles modifiées chaque semaine et faible utilité observée.
- Connu : quelques heures humaines ; aucune criticité démontrée.
- Inconnu : propriétaire futur des règles.
- Incident : les mêmes dossiers sont retraités après chaque changement.
- Décision provisoire : réduire les étapes et tenir un mode humain provisoire.
- Condition inverse : rouvrir l'automatisation quand le processus, la valeur et
  le propriétaire sont stables.

### Cas 5 — changer de plateforme, ou ne pas changer

- Contexte : un même flux est reproduit dans Zapier et Make avec données
  fictives, même volume et sept pannes.
- Connu : la plateforme candidate passe un besoin de branchement et son coût
  complet reste acceptable.
- Inconnu : coût de reprise des scénarios historiques, à conserver hors total
  tant qu'il n'est pas chiffré.
- Incident : `429` du logiciel connecté ; les deux plateformes rencontrent la
  même limite.
- Décision provisoire : changer seulement pour la limite réellement résolue ;
  ne pas changer si le problème vient de l'API tierce, des données ou de
  l'absence de responsable.
- Condition inverse : une preuve de migration, de reprise ou de coût qui
  contredit le test annule la décision.

## 9. Plan éditorial localisable

1. Réponse directe : les cinq sorties, le conflit d'intérêts et les STOP.
2. Contrat du flux : dessiner la chaîne et nommer la source de vérité.
3. Mesure sur trente jours : distinguer événements, branches, unités, résultats,
   reprises, doublons et temps.
4. Comptage Zapier et Make : méthodes officielles, plan réel, facture réelle.
5. Sept pannes : protocole non compensable et preuve de retour au normal.
6. Coût 12/36 mois : catégories symétriques, marge, aucun double comptage.
7. Données, contrats et traces : RGPD/CNIL, régions, sous-traitants, limites.
8. Cinq sorties : cas directs et inverses, aucune préférence cachée.
9. Exercices de relève et sortie : remplaçant, export, secrets, mode dégradé.
10. Décider lundi : plan d'observation, atelier local, CTA unique.

FAQ résiduelle : questions qui subsistent après ces dix sections — comptage,
`429`, doublon, webhook, RGPD, choix Zapier/Make, coût du code, maintenance,
réversibilité, absence de données et décision de garder l'existant.

## 10. Contrat de l'artefact local

L'observatoire :

- fonctionne sans réseau et sans envoi ;
- conserve les données uniquement dans `localStorage` du navigateur ;
- permet d'effacer immédiatement le dossier local ;
- accepte zéro et refuse une inconnue silencieuse ;
- calcule uniquement depuis des fonctions pures testées ;
- affiche sous-totaux, inconnues, erreurs et intervalles 12/36 mois ;
- exige les sept portes, le propriétaire, le remplaçant et le délai ;
- propose une sélection manuelle parmi les cinq sorties ;
- bloque la conclusion si une preuve critique manque, si une porte échoue ou
  si le type de cible ne correspond pas à la sortie choisie ;
- ne promet ni économie, ni robustesse, ni conformité.

## 11. Journal de recherche et limites

| Heure locale approximative | Action | Résultat |
| --- | --- | --- |
| 2026-08-06 | lecture du gel P0 et des règles projet | périmètre, sorties, portes et fichiers figés |
| 2026-08-06 | lecture des guides 1, 2, 6 et 7 et des composants premium | frontières internes et contrat de rendu établis |
| 2026-08-06 | ouverture des aides Zapier tâches, limites et erreurs | comptage et diagnostics bornés au plan/produit |
| 2026-08-06 | ouverture des pages Zapier DPA, sous-traitants, vie privée et Trust Center | chaîne contractuelle identifiée, revalidation publication requise |
| 2026-08-06 | ouverture des aides Make crédits, exécutions incomplètes et `429` | règles module/scénario et reprise bornées |
| 2026-08-06 | ouverture Make organisations, API, DPA et sous-traitants | région documentée ; liste sous-traitants trop ancienne = INCONNU |
| 2026-08-06 | ouverture EUR-Lex, CNIL, RFC 9110/6585 et OWASP | droit et recommandations séparés |
| 2026-08-06 | observation de quatre SERP françaises | angle différenciant : exploitation, reprise et coût observé |

Limites P1 :

- aucune connexion à un compte client Zapier ou Make ;
- aucun plan, facture, quota, SLA ou DPA client examiné ;
- aucune panne exécutée sur un flux de production ;
- aucune qualification juridique individuelle ;
- aucune preuve publique Hagnéré Code utilisée ;
- aucun prix produit publié afin d'éviter une comparaison vite périmée ;
- la fraîcheur de la liste Make des sous-traitants reste bloquante ;
- toutes les fonctions et pages volatiles doivent être rouvertes indépendamment
  en P2 et avant toute publication réelle.

## 12. Checklist de remise P1

- [x] question, lecteur, résultat et CTA cadrés ;
- [x] cinq sorties sans classement ;
- [x] douze perspectives localisées ;
- [x] vingt-quatre questions de matrice traitées ;
- [x] quarante-quatre affirmations avec type, source, portée, date et statut ;
- [x] formules et exemple 12/36 mois reproduits ;
- [x] sept portes non compensables ;
- [x] cinq cas directs/inverses entièrement fictifs ;
- [x] limites contractuelles, juridiques et volatiles explicites ;
- [ ] gate orchestrateur, tests, rendu navigateur et manifeste à rejouer après
  création des fichiers propres au slug.
