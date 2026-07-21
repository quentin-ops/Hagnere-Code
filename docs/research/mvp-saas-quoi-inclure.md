# Dossier de travail — MVP SaaS : quoi inclure

## 1. Fiche d'identité

- Slug : mvp-saas-quoi-inclure
- Statut actuel : publiable — validation éditoriale déléguée ; réécriture humaine intégrée le 21 juillet 2026, avec contrôles techniques et temps de lecture à revalider
- Requête principale : MVP SaaS quoi inclure
- Moment du parcours : cadrer un premier produit utilisable après validation du problème
- Lecteur précis : dirigeant, indépendant ou porteur d'un SaaS B2B qui doit décider ce qui entre dans le premier lot mis entre les mains d'un client
- Situation déclenchante : idée suffisamment étayée, premier client pilote, devis trop large ou liste de fonctionnalités qui ne permet pas encore une mise en production
- Décision principale après lecture : inclure, opérer manuellement, acheter ou intégrer, ou reporter chaque capacité, puis autoriser ou non un premier client en production
- Niveau de connaissance au départ : comprend le problème métier, sans savoir distinguer fonction visible et socle d'exploitation
- Questions indispensables : parcours métier complet ; comptes et droits ; exploitation et support ; facturation ou contractualisation ; mesure qui décidera la suite
- Objections : le socle invisible fera exploser le budget ; un MVP manuel ne serait pas sérieux ; retirer des fonctions rendrait le produit invendable
- Action autonome : remplir le contrat de premier client et tester une journée complète, de l'invitation à la sortie des données
- CTA possible : faire cadrer un lot dont hypothèse, inclusions, opérations manuelles, exclusions et critères de sortie sont écrits
- Hors périmètre : validation de l'idée, prix ou délai moyen, priorisation détaillée de toutes les fonctions, architecture multitenant, audit de sécurité certifiant, conseil juridique ou fiscal
- Date de la recherche : 20 juillet 2026
- Responsable : Codex pour Hagnéré Code

La décision principale : **un premier client ne doit pas entrer en production
tant que le produit ne couvre pas un parcours de valeur complet, un incident
prévisible, une action d'administration et une mesure qui décidera du lot
suivant.**

## 2. Cannibalisation

| Page existante ou future                  | Intention                                                                  | Différence du nouveau guide                                                                                  | Lien ou arbitrage                                                                  |
| ----------------------------------------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------- |
| valider-idee-saas-avant-developper        | prouver problème, acheteur, accès, engagement et faisabilité avant le code | commence quand un usage réel autonome devient la prochaine preuve nécessaire                                 | lien en prérequis ; ne pas reprendre le protocole d'entretiens                     |
| combien-coute-un-saas                     | construire une enveloppe et comparer des coûts                             | aucun prix de marché ; définit les postes avant de demander un budget                                        | lien après le périmètre ; ne pas recopier ses fourchettes                          |
| cahier-des-charges-application-metier     | formaliser un produit ou outil plus largement                              | produit une fiche de premier client resserrée, pas un cahier des charges complet                             | lien si la suite exige une consultation détaillée                                  |
| no-code-ou-sur-mesure                     | choisir un mode de réalisation                                             | répond à « quoi exploiter et apprendre », indépendamment de la technologie                                   | lien après le choix de périmètre                                                   |
| service SaaS et applications métier       | présenter l'offre commerciale                                              | méthode autonome pouvant conclure à un pilote manuel, un logiciel existant ou un report                      | CTA seulement après les portes de production                                       |
| futur prioriser-fonctionnalites-mvp-saas  | arbitrer les fonctions métier concurrentes                                 | fixe d'abord le socle opérationnel qui ne doit pas être noyé dans une note valeur/effort                     | aucune matrice de backlog détaillée ici                                            |
| futur mvp-prototype-ou-poc                | choisir le type d'expérience à construire                                  | ce guide ne compare les formats que pour empêcher de mettre un client en production avec un simple prototype | comparaison courte ; renvoi futur si la question principale est le choix du format |
| futurs sécurité, RGPD et facturation SaaS | approfondir chaque domaine                                                 | ne garde que les décisions minimales qui conditionnent le premier client                                     | limites et liens futurs visibles                                                   |

**Porte de sortie :** aucune page actuelle ne montre que le « minimum » d'un
MVP B2B inclut aussi la capacité de créer un compte, traiter un échec, aider un
utilisateur, administrer le service, sortir les données et mesurer
l'apprentissage — même si certaines actions restent manuelles.

## 3. Demande et vocabulaire du lecteur

Questions et formulations observées dans la SERP francophone le 20 juillet
2026 :

- « Que doit contenir un MVP SaaS ? » ;
- « Combien de fonctionnalités dans un MVP ? » ;
- « Authentification et paiement sont-ils obligatoires ? » ;
- « MVP, prototype, POC ou V1 ? » ;
- « Peut-on facturer manuellement le premier client ? » ;
- « Qu'est-ce qu'on peut repousser après le MVP ? ».

La question profonde est : « que puis-je retirer sans rendre le produit
invendable, inutilisable ou dangereux ? »

Variantes utiles : périmètre MVP SaaS, checklist MVP, fonctionnalités MVP,
premier client SaaS, MVP B2B, produit minimum viable, socle SaaS, back-office,
onboarding, activation, pilote, première valeur, multi-tenant, rôles,
permissions, SSO, API, facturation, support, sauvegarde et restauration.

Traductions à donner une fois : dérive du périmètre pour feature creep ; délai
avant la première valeur pour time to value ; architecture accueillant plusieurs
organisations clientes avec séparation de leurs données pour multi-tenant.

La priorité vient de la roadmap commerciale P1 et de la proximité avec un
projet achetable. Aucun volume Search Console attribuable ne sera inventé.

## 4. Carte concurrentielle

| Page                                                                                                                     | Réponse et angle                                                   | Preuves ou artefacts                 | Bon point                                       | Manque décisionnel                                                                     | Conflit d'intérêt               |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------ | ----------------------------------------------- | -------------------------------------------------------------------------------------- | ------------------------------- |
| [PayPro Global — Qu'est-ce qu'un MVP SaaS ?](https://payproglobal.com/fr/reponses/quest-ce-quun-mvp-saas/)               | définition, sélection, abonnement, pièges et métriques             | listes générales                     | couverture large                                | aucune distinction claire entre pilote accompagné, libre-service et vente grand compte | services de monétisation        |
| [Sparkier — MVP SaaS B2B et dérive du périmètre](https://www.sparkier.io/articles/mvp-saas-b2b-arreter-le-feature-creep) | hypothèses, résultat utilisateur, parcours critique et contraintes | atelier de cadrage                   | chaque fonction reliée à une hypothèse          | support, récupération, sauvegarde, administration et supervision peu couverts          | vend un atelier de cadrage      |
| [Websual — MVP SaaS B2B : par où commencer](https://websual.fr/blog/mvp-saas-b2b-par-ou-commencer)                       | une promesse, cinq questions, no-code ou code, métriques           | exemples lisibles                    | réduction rapide du périmètre                   | une promesse, un flux et une mesure ne suffisent pas à exploiter de vraies données     | offre de MVP en quatre semaines |
| [Thatmuch — fonctionnalités d'un MVP](https://thatmuch.fr/mvp-application-fonctionnalites/)                              | définition, MoSCoW, exemples et parcours minimum                   | tableaux indispensable ou facultatif | accessible                                      | généraliste, peu de rôles, organisations clientes, support ou facturation récurrente   | vend AMOA et réalisation        |
| [Goolive — cahier des charges MVP](https://goolive.fr/comment-rediger-un-cahier-des-charges-pour-un-mvp/)                | cible, parcours, réussite et cadre technique                       | trame de cadrage                     | cahier des charges comme instrument de décision | ne tranche pas comptes, paiement, rôles, back-office ou multi-tenant                   | vend cadrage et développement   |
| [MVP Development — MVP pour SaaS](https://mvp-development.io/fr/blog/mvp-development-saas-startups-technical)            | produit, technique, outils, fonctions et retours                   | contenu large                        | couvre plusieurs dimensions                     | notions confondues et peu d'arbitrages directement applicables                         | valorise le prestataire         |
| [Inprogress — agence MVP SaaS B2B](https://inprogress.agency/expertise/mvp/saas-b2b)                                     | multi-tenant, facturation, SSO, permissions et livraison           | fondations techniques                | prend au sérieux la future vente B2B            | présente des briques lourdes comme presque systématiques                               | page de service scale-ready     |
| [Storylinker — produit minimum viable](https://storylinker.fr/glossaire/mvp)                                             | définition, qualité, socle SaaS, coût et délai                     | liste simple                         | minimum de périmètre, pas de qualité            | paiement, inscription et e-mails trop universels                                       | socle aligné sur une offre      |

**Contradiction structurante :** une école dit « un flux, une promesse, une
mesure ; tout le reste attend ». Une autre exige très tôt multi-tenant,
facturation, permissions et SSO. Aucune ne donne vraiment au dirigeant le
critère conditionnel : mode de vente, données, premier client et preuve
recherchée.

**Angles morts communs :** acheteur, administrateur et utilisateur différents ;
pilote accompagné distinct du libre-service ; intervention manuelle acceptable
si elle est visible dans le plan et soutenable ; gestion des erreurs,
récupération, support, export et supervision ; métriques adaptées à quelques
pilotes ; déclencheur écrit de chaque fonction différée.

**Valeur originale :** trois couches conditionnelles — preuve de valeur, plancher
d'exploitation, capacités propres au mode de vente — puis une journée du premier
client. Chaque capacité reçoit un traitement : construire, opérer manuellement,
acheter ou intégrer, reporter avec déclencheur. Aucun score global.

## 5. Fiche de preuves

| Affirmation utilisable                                                                                                                                                             | Source primaire et passage                                                                                                                                         | Nature                                                         | Périmètre                                                                                                    | Consultation                                                  | Confiance                               | Conséquence lecteur                                                                                                | Fraîcheur                     |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------ | ----------------------------- |
| Le MVP sert à apprendre avec une version cohérente du produit, pas à livrer un nombre universel de fonctions                                                                       | Eric Ries, « What is an MVP? », https://leanstartup.co/resources/articles/what-is-an-mvp/                                                                          | source méthodologique de l'auteur du concept                   | apprentissage produit ; aucune obligation, aucun périmètre technique automatique                             | consultée le 20/07/2026                                       | élevée pour la doctrine, non normative  | écrire d'abord l'hypothèse et la décision permise par le test                                                      | page vivante à revalider      |
| Une phase alpha sert à tester les hypothèses les plus risquées et peut conclure que le service ne doit pas être construit                                                          | GOV.UK Service Manual, « How the alpha phase works », https://www.gov.uk/service-manual/agile-delivery/how-the-alpha-phase-works                                   | manuel officiel de conception de services publics britanniques | phase alpha de services publics ; transposition éditoriale, pas norme SaaS privée                            | consultée le 20/07/2026                                       | élevée dans son contexte                | préférer un test plus léger si le produit réel n'est pas encore nécessaire                                         | revalider avant republication |
| Pour des données personnelles, finalité, minimisation, protection dès la conception et mesures adaptées au risque s'appliquent aussi à une première version                        | RGPD, articles 5, 25 et 32, https://eur-lex.europa.eu/eli/reg/2016/679/2016-05-04?locale=fr                                                                        | règlement européen                                             | uniquement lorsque des données personnelles sont traitées ; autres articles et bases à examiner selon le cas | texte consolidé consulté le 20/07/2026                        | élevée dans le périmètre                | réduire les données, définir les accès et les durées, puis tester les mesures selon le risque                      | vérifier texte consolidé      |
| Les données de test devraient être fictives ou anonymisées ; les secrets ne doivent pas être stockés dans le dépôt ; comptes, habilitations et sous-traitants doivent être cadrés  | CNIL, Guide RGPD du développeur, https://www.cnil.fr/fr/guide-rgpd-du-developpeur                                                                                  | guide officiel de l'autorité de contrôle                       | développement traitant des données personnelles ; recommandations à contextualiser                           | consulté le 20/07/2026                                        | élevée pour les pratiques               | ne pas utiliser la production comme jeu de test par facilité et séparer code, configuration et secrets             | revalider à chaque édition    |
| Une sauvegarde n'est crédible que si la restauration est testée ; les objectifs de perte et de reprise viennent du métier                                                          | ANSSI, Sauvegarde des systèmes d'information v1.1, https://messervices.cyber.gouv.fr/documents-guides/anssi_fondamentaux_sauvegarde_systemes_dinformation_v1.1.pdf | recommandation officielle                                      | système d'information, à adapter à la criticité                                                              | version du 27/11/2025 consultée le 20/07/2026                 | élevée comme guide                      | définir ce qu'il faut restaurer et exécuter un test isolé avant le premier client                                  | revalider à chaque version    |
| ASVS peut fournir des exigences de contrôle vérifiables ; ce n'est pas une certification automatique                                                                               | OWASP ASVS 5.0, https://owasp.org/www-project-application-security-verification-standard/                                                                          | standard ouvert communautaire                                  | applications web ; version et périmètre à choisir selon le risque                                            | version 5.0.0 consultée le 20/07/2026                         | élevée comme référentiel, non normative | demander les contrôles réellement exécutés et leurs preuves                                                        | revalider à chaque version    |
| Les journaux peuvent couvrir échecs d'authentification, erreurs, actions administratives et exports, sans enregistrer mots de passe, jetons ou données bancaires                   | OWASP Logging Cheat Sheet, https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html                                                                 | guide technique communautaire                                  | journalisation applicative ; à adapter aux données, risques et durées                                        | consulté le 20/07/2026                                        | élevée comme pratique                   | instrumenter le parcours et les erreurs sans transformer les journaux en fuite de données                          | page vivante                  |
| Pour un achat autonome, le cycle d'abonnement comporte des événements asynchrones ; le retour navigateur n'est pas une preuve définitive de paiement                               | Stripe, « Build a subscriptions integration with Checkout », https://docs.stripe.com/payments/checkout/build-subscriptions                                         | documentation officielle d'un fournisseur                      | uniquement si Stripe Checkout est choisi ; pas une règle universelle de facturation                          | consultée le 20/07/2026                                       | élevée pour le produit Stripe           | inclure états, échecs et notifications lorsque l'achat autonome fait partie de l'hypothèse                         | revalider avec l'API utilisée |
| Externaliser le paiement peut retirer certaines exigences du périmètre directement applicable au système du marchand, sans supprimer ses responsabilités ni la validation attendue | PCI Security Standards Council, FAQ 1092, https://www.pcisecuritystandards.org/faqs/1092/                                                                          | FAQ officielle du standard                                     | paiement par carte et responsabilités PCI ; périmètre à confirmer avec l'acquéreur                           | consultée le 20/07/2026                                       | élevée dans ce cadre                    | ne jamais promettre « conforme PCI grâce à Stripe »                                                                | revalider avec la version PCI |
| WCAG 2.2 fournit des critères techniques testables pour contenus et interfaces accessibles                                                                                         | W3C, Web Content Accessibility Guidelines 2.2, https://www.w3.org/TR/WCAG22/                                                                                       | recommandation technique internationale                        | ne détermine pas seule les obligations françaises d'un SaaS B2B                                              | recommandation publiée le 05/10/2023, consultée le 20/07/2026 | élevée techniquement                    | intégrer structure, clavier, focus, libellés, erreurs et contraste sans déclarer une conformité légale universelle | suivre les mises à jour W3C   |

### Contradictions et données à ne pas publier

- aucun nombre universel d'écrans, de fonctionnalités, de semaines ou de jours ;
- aucun taux d'échec générique des startups sans étude primaire pertinente ;
- aucune fonction « toujours obligatoire » sans dépendre du client, des données,
  du contrat et du test ;
- aucune équivalence entre paiement automatisé et capacité réelle à facturer ;
- aucune équivalence entre prototype cliquable et produit exploitable ;
- aucune promesse de sécurité, conformité RGPD, accessibilité ou disponibilité
  tirée d'une checklist ;
- aucune métrique de rétention ou d'activation transformée en seuil universel ;
- aucune donnée fictive présentée comme performance ou cas client.
- aucune affirmation que le consentement serait la base légale universelle, que
  toute analyse d'impact serait obligatoire ou que des données chiffrées
  deviendraient anonymes ;
- aucune promesse du type « conforme OWASP », « conforme PCI grâce au
  prestataire », « 99,9 % disponible » ou « accessible AA » sans version,
  périmètre, méthode, preuve et obligation réellement applicable ;
- aucune confusion entre inscription et activation, corrélation et causalité,
  ou quelques inscriptions et adéquation produit-marché.

### Calculs reproductibles

Pas de prix, de ROI ni de délai moyen. L'exemple fictif peut compter les étapes
d'un parcours et des critères d'acceptation écrits avant le pilote. Ses seuils
seront propres au cas fictif et ne deviendront jamais un benchmark.

## 6. Empreinte éditoriale à ne pas reproduire

| Guide                                 | Ouverture                  | Progression                           | Dispositif                   | Exemple                      | CTA                   | Conclusion                                  |
| ------------------------------------- | -------------------------- | ------------------------------------- | ---------------------------- | ---------------------------- | --------------------- | ------------------------------------------- |
| valider-idee-saas-avant-developper    | preuve contre enthousiasme | cinq risques puis expériences         | journal et niveaux de preuve | outil B2B fictif             | challenge des preuves | développer, tester, pivoter ou arrêter      |
| combien-coute-un-saas                 | fourchettes et budget      | étapes, profils, devis et TCO         | chiffrages                   | plusieurs scénarios          | cadrer le budget      | enveloppe et financement                    |
| reprendre-logiciel-metier-existant    | lundi 8 h sans équipe      | sécuriser, prouver, choisir           | cinq portes non compensables | application de planification | audit de reprise      | reprise, stabilisation, migration ou report |
| cahier-des-charges-application-metier | préparation du besoin      | scénarios, données, droits et recette | document téléchargeable      | outil métier fictif          | consultation          | dossier complet                             |

- Tension : trois écrans peuvent livrer la valeur sans permettre de servir un
  premier client sans dépendance dangereuse au fondateur.
- Ouverture : journée fictive du premier client, avec invitation, première
  valeur, erreur, support, administration et décision.
- Progression : choisir le bon test, remplir une seule checklist, assumer le
  manuel, vendre et protéger, mesurer sur un exemple, puis autoriser ou reporter
  le lancement.
- Artefact : une checklist unique « maintenant, manuel, intégré ou plus tard »
  et une fiche courte remise au premier client ; aucun score.
- Voix : responsable produit pragmatique ; termes techniques traduits.
- CTA : après la fiche de périmètre et les cas où ne pas développer.
- Conclusion : prêt, pilote accompagné, test plus léger ou report.
- Différences : chronologie d'usage, fonctions invisibles, opérations manuelles
  assumées, seuils de sortie écrits avant lancement.

## 7. Plan annoté

| Section                   | Question résolue                                      | Preuve ou exemple                                                      | Décision                                                                    | Format                       |
| ------------------------- | ----------------------------------------------------- | ---------------------------------------------------------------------- | --------------------------------------------------------------------------- | ---------------------------- |
| 1. Choisir le bon test    | prototype, essai client ou version vendable ?         | incertitude, données réelles et niveau d'exploitation distincts        | revenir à un test plus léger si le produit exploitable n'est pas nécessaire | comparaison courte           |
| 2. Remplir une checklist  | que faut-il vraiment prévoir pour le premier client ? | service, accès, données, vente, aide, sécurité et mesure               | classer chaque capacité : maintenant, manuel, intégrée ou plus tard         | grille unique et copiable    |
| 3. Assumer le manuel      | quand automatiser et comment traiter les échecs ?     | temps cumulé, volume, fragilité, risque, erreurs et besoins du support | automatiser sur un seuil explicite, pas sur la fréquence seule              | critères et parcours         |
| 4. Vendre et protéger     | que promettre sans sous-estimer les responsabilités ? | contrat, paiement, données, sauvegarde, sécurité et accessibilité      | choisir le mode de vente et les protections adaptés au premier client       | comparaison et sources       |
| 5. Mesurer sur un exemple | qu'observer pour décider du prochain lot ?            | SaaS fictif d'approbation de devis et métriques utiles                 | corriger, automatiser, approfondir ou arrêter                               | définitions et fiche remplie |
| 6. Autoriser ou reporter  | le lot est-il prêt pour un vrai client ?              | six groupes de vérifications et fiche client en une page               | lancer prudemment, revenir au pilote, prototyper ou reporter                | recette courte et verdict    |

### Choix d'architecture arrêtés

- H1 : « MVP SaaS : que faut-il inclure pour mettre un premier client en production ? »
- Réponse d'ouverture : un MVP SaaS est un service court mais complet, pas une petite pile de fonctionnalités.
- Artefact signature : une checklist unique en sept lignes, lisible sans couleur et sans JavaScript client.
- Fil pédagogique : suivre la journée du premier client puis révéler le produit invisible dont l'opérateur a besoin.
- Définitions : prototype, preuve de faisabilité, pilote accompagné, MVP de production, première version ; aucune durée ni prix générique.
- Exemple : exemple illustratif fictif d'approbation de devis, avec 27 demandes initiales réduites à un parcours et des déclencheurs écrits. Le nombre illustre le cas et ne constitue pas un benchmark.
- CTA : une seule occurrence après le verdict, vers /demarrer-un-projet ; la réponse peut recommander un pilote manuel, un outil existant ou l'absence de développement.
- Données structurées : Article et BreadcrumbList uniquement ; FAQ visible sans schéma `FAQPage` retiré par Google.
- Image sociale : coupe verticale en sept couches, sans score commercial.

## 8. Ressource et conversion

- Ressource séparée : non ; la fiche visible est courte et copiable.
- Résultat autonome : contrat de premier client, classement des capacités et
  critères de sortie.
- Format : HTML copiable.
- Exemple : SaaS B2B fictif d'approbation de devis, cohérent avec la page.
- Conclusion ne pas investir : oui, si service manuel ou produit existant répond
  encore à la question.
- Données saisies : aucune.
- Limites : aucune validation juridique, sécurité certifiante, seuil universel
  ou test humain réel.
- Bon fit : problème B2B validé, premier client accessible, parcours métier
  différenciant, responsable produit et décision à apprendre.
- Mauvais fit : idée sans accès client, landing page suffisante, besoin couvert
  par un outil, périmètre réglementé hors compétence ou volonté de cacher le
  caractère pilote.
- Action autonome : écrire la question d'apprentissage puis rejouer la journée
  avec les quatre traitements.
- CTA : vers /demarrer-un-projet, avec cible, preuve, parcours, données,
  opérations manuelles et décision attendue.
- Conflit d'intérêt : Hagnéré Code vend des MVP ; le guide doit pouvoir
  recommander pilote manuel, outil existant, no-code, périmètre plus petit ou
  report.

## 9. Revue finale

### Scorecard justifiée

| Axe            | Note 0-2 | Preuve dans la page                                                                                   | Correction éventuelle   |
| -------------- | -------: | ----------------------------------------------------------------------------------------------------- | ----------------------- |
| Intention      |        2 | réponse directe par service court mais complet et premier client                                      | —                       |
| Décision       |        2 | distinction prototype, POC, pilote, MVP et V1 puis quatre sorties                                     | —                       |
| Pédagogie      |        2 | termes définis dans la phrase, grille copiable et exemple fictif                                      | —                       |
| Profondeur     |        2 | valeur, comptes, données, offre, exploitation, confiance et mesure                                    | —                       |
| Preuve         |        2 | sources primaires ou référentiels contextualisés, sans les transformer en certification               | —                       |
| Comparaison    |        2 | formats comparés sur la même incertitude et la même sortie                                            | —                       |
| Originalité    |        2 | une checklist unique complétée par la journée du premier client                                       | —                       |
| Style          |        2 | six sections de décision ; doublon des sept indispensables supprimé ; dix tests ramenés à six groupes | —                       |
| Conversion     |        2 | mauvais fits, action autonome et CTA après le verdict                                                 | —                       |
| SEO ou produit |        1 | metadata, Article, BreadcrumbList et OG conservés ; temps de lecture et artefact à revalider          | contrôle central requis |

**Total provisoire après réécriture : 19/20.** La note SEO ou produit reste
plafonnée à 1 tant que les contrôles techniques, le temps de lecture et
l'artefact de production n'ont pas été rejoués. Aucun test lecteur humain n'est
revendiqué.

### Test lecteur non technique

- Test réel : non.
- Profil : non disponible.
- Corrections : aucune validation humaine inventée.
- Décision de publication : autorisée explicitement par le commanditaire sur la
  base du contre-audit indépendant ; cela ne constitue pas un test lecteur.

### Contre-audit indépendant historique

- Auteur : agent `/root/mvp_guide_audit`, distinct du rédacteur initial, puis
  contrôle technique du parent le 20 juillet 2026.
- Indépendant : oui au sein du processus multi-agent ; aucune personne humaine.
- Réserves : exemple du dossier de recherche incohérent avec la page, temps de
  lecture sous-estimé, ancienne consigne `FAQPage`, jargon PCI/SSO/API et
  incohérences avec la carte commerciale du MVP.
- Corrections historiques : exemple réconcilié sur l'approbation de devis,
  schéma FAQ retiré, source PCI corrigée, jargon traduit et offre alignée sur un
  parcours critique complet avec éléments conditionnels.
- Limite : la réécriture du 21 juillet invalide le temps de lecture, le build et
  le contrôle visuel précédemment consignés.

La passe pédagogique du 21 juillet 2026 ramène le guide de 5 412 à 4 779 mots
visibles et de 15 à 7 H2. Une seule checklist visuelle classe les sept éléments
de la première version ; les autres listes servent aux tests ou à la fiche du
client sans créer un second système de classement. La FAQ ne recommande plus
d’automatiser sur le seul critère d’une fréquence hebdomadaire.

### Vérifications

- [x] faits, citations et fraîcheur relus le 20 juillet 2026 ;
- [x] aucun chiffre ou cas réel présenté comme tel ;
- [x] CTA disponible et aucune ressource fantôme ;
- [x] metadata, données structurées, registre, maillage, ancres et temps de
      lecture réconciliés après réécriture : 4 779 mots visibles, 24 minutes,
      7 H2 et 6 tableaux ;
- [ ] Prettier, ESLint, TypeScript, batterie SEO et build rejoués sur le nouveau
      contenu ;
- [ ] rendu recontrôlé aux largeurs utiles, notamment figure, tableaux, FAQ et
      image Open Graph ;
- [ ] route et `index,follow` recontrôlés dans l'artefact de production ; crawl
      et indexation effective restent à vérifier séparément.
