# Dossier de travail — Contrat TMA pour une application

## 1. Fiche d’identité

- Slug : contrat-tma-application
- Statut actuel : publiable — validation éditoriale déléguée ; réécriture
  humaine intégrée le 21 juillet 2026, avec revalidation technique et temps de
  lecture centralisés à refaire avant clôture
- Requête principale : contrat TMA application
- Variantes : contrat maintenance applicative, tierce maintenance applicative, clauses TMA, modèle contrat TMA, SLA maintenance application, forfait maintenance logiciel
- Moment du parcours : choisir ou renouveler la maintenance d’une application existante après une reprise, une mise en production ou une accumulation d’incidents et d’évolutions
- Lecteur précis : dirigeant, responsable métier ou responsable informatique d’une PME française qui dépend d’une application sans disposer d’une équipe complète en interne
- Situation déclenchante : premier contrat après livraison, changement de prestataire, tickets qui s’accumulent, incident mal géré, forfait incompris, besoin d’évolutions récurrentes ou doute sur la réversibilité
- Décision principale après lecture : signer, renégocier, demander une phase de reprise, choisir un autre mode d’intervention ou refuser un contrat qui ne permet pas de piloter et de sortir
- Niveau de connaissance au départ : sait qu’il faut « de la maintenance », mais ne distingue pas toujours support, correction, prévention, évolution, infrastructure et gestion d’incident
- Questions indispensables : que couvre le contrat ; comment entre un ticket ; qui qualifie la gravité ; quel délai commence quand ; comment la capacité est consommée ; qui possède les accès ; quelle preuve clôt un travail ; que reçoit l’entreprise à la sortie
- Objections : un SLA élevé suffirait ; un forfait illimité éviterait le suivi ; tous les bugs seraient nécessairement inclus ; le code source garantirait la réversibilité ; le prestataire serait seul responsable de la sécurité
- Action autonome : simuler le premier incident et le premier mois de tickets dans une matrice « clause → question → preuve → responsable → acceptation »
- CTA possible : faire auditer le périmètre opérationnel d’une TMA ou organiser une phase de reprise avant engagement
- Hors périmètre : modèle juridique prêt à signer, interprétation d’un litige, audit de cybersécurité certifiant, réponse à incident active, benchmark universel de SLA ou de prix, détail des obligations sectorielles
- Date de la recherche : 20 juillet 2026
- Responsable : Codex pour Hagnéré Code

La décision principale : **un contrat TMA n’est pilotable que si l’entreprise
peut suivre la vie complète d’une demande, de son signalement à sa réception,
et récupérer les accès, données, connaissances et moyens de livrer à la sortie.
Un délai isolé ou un volume d’heures ne suffit pas.**

## 2. Cannibalisation

| Page existante ou future              | Intention possédée                                                     | Frontière du nouveau guide                                                                                                | Maillage prévu                                                  |
| ------------------------------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| reprendre-logiciel-metier-existant    | vérifier qu’une nouvelle équipe peut reconstruire, restaurer et livrer | la reprise est un prérequis possible ; le nouveau guide possède la gouvernance récurrente après reprise                   | résumer le contrat de reprise et renvoyer vers la TMA           |
| cout-maintenance-site-internet        | comparer le prix d’entretien d’un site                                 | ne reprendre ni fourchettes, ni forfaits de marché, ni maintenance CMS ; traiter l’application et la preuve contractuelle | lien vers le guide TMA pour les applications ou sites critiques |
| prix-logiciel-sur-mesure              | budgéter création et exploitation d’un logiciel                        | la TMA traite le fonctionnement du contrat récurrent, pas le prix initial                                                 | lien sur l’exploitation et le TCO                               |
| cahier-des-charges-application-metier | cadrer une construction ou une évolution en projet                     | les critères de recette servent à recevoir un ticket, sans refaire le cahier des charges                                  | lien sur la définition d’un lot évolutif                        |
| service maintenance-evolution         | présenter l’offre commerciale Hagnéré Code                             | page transactionnelle ; le guide doit pouvoir conclure à l’interne, au ponctuel, à la reprise ou à une TMA                | CTA après le test autonome                                      |
| futur sla-maintenance-applicative     | détailler la construction d’objectifs de service                       | le nouveau guide explique la place des délais dans l’ensemble du contrat                                                  | ne pas créer de benchmark SLA ici                               |

**Porte de sortie :** aucune page actuelle ne fait vivre un ticket de bout en
bout, du premier incident à la consommation du forfait, à la recette, au
reporting puis à la sortie du prestataire.

## 3. Demande et carte concurrentielle

Questions à couvrir dans le vocabulaire réel :

- que veut dire TMA et que couvre-t-elle ;
- quelle différence entre maintenance corrective, préventive et évolutive ;
- quelle différence entre SLA, GTI, GTR, prise en charge et résolution ;
- que doit contenir un contrat de maintenance informatique ;
- comment facturer une banque d’heures ou une capacité mensuelle ;
- qui décide qu’un incident est critique ;
- les heures non consommées sont-elles reportées ;
- comment gérer les urgences, astreintes et dépassements ;
- qui est responsable des sauvegardes, accès et données ;
- comment changer de prestataire et récupérer la connaissance.

Angles récurrents observés à revalider le jour de publication : listes de
clauses, définitions de la TMA, forfait contre régie, promesses de disponibilité
et modèles de contrat. Les contenus commerciaux décrivent souvent une offre
idéale sans montrer la qualification d’un incident réel, la preuve de
rétablissement, le coût des files d’attente ni l’exercice de sortie.

**Valeur originale :** ouvrir par le premier lundi du contrat et tester chaque
clause par un événement observable. La progression suit :
incident → qualification → prise en charge → contournement → rétablissement →
correction → recette → reporting → sortie.

## 4. Fiche de preuves

| Affirmation utilisable                                                                                                                                                                                 | Source primaire                                                                                                                                                          | Périmètre et limite                                                                                 | Conséquence lecteur                                                                                                 | Fraîcheur                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| Les contrats légalement formés tiennent lieu de loi à ceux qui les ont faits                                                                                                                           | Légifrance, Code civil, article 1103, https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000032040777                                                               | principe général ; ne permet pas d’interpréter une clause particulière                              | faire définir les termes opérationnels dans le contrat au lieu de supposer un sens courant                          | texte consolidé à revalider                |
| Les contrats doivent être négociés, formés et exécutés de bonne foi                                                                                                                                    | Légifrance, Code civil, article 1104, https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000032040772                                                               | principe d’ordre public ; aucune conclusion automatique sur un différend                            | documenter décisions, informations, dépendances et limites ; faire relire le contrat                                | texte en vigueur consulté le 20/07/2026    |
| Dans une sous-traitance de données personnelles, l’article 28 exige un acte définissant notamment objet, durée, nature, finalité, données, personnes, obligations et droits                            | CNIL / RGPD, https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre4                                                                                      | seulement si le prestataire est sous-traitant au sens RGPD ; les rôles réels commandent             | ajouter une annexe données adaptée et ne pas traiter « conformité RGPD » comme une ligne générique                  | page vivante                               |
| Le sous-traitant ultérieur requiert une autorisation écrite spécifique ou générale et une information permettant l’objection dans le cas général                                                       | CNIL / RGPD, article 28                                                                                                                                                  | périmètre données personnelles                                                                      | inventorier hébergeurs, outils de support, supervision et sous-traitants ayant accès aux données                    | page vivante                               |
| Responsable et sous-traitant doivent mettre en œuvre des mesures techniques et organisationnelles adaptées au risque                                                                                   | CNIL / RGPD, article 32 et guide sécurité, https://www.cnil.fr/fr/guide-de-la-securite-des-donnees-personnelles                                                          | obligation fondée sur le risque, pas liste universelle ni certification                             | attribuer les mesures, preuves et revues au lieu d’écrire « sécurité incluse »                                      | guide à revalider, édition 2026 disponible |
| La CNIL recommande d’encadrer la maintenance, les accès, leur durée, la fermeture après intervention et la traçabilité                                                                                 | CNIL, Guide pratique sécurité des données personnelles 2026, https://www.cnil.fr/sites/default/files/2026-05/cnil_guide_securite_personnelle.pdf                         | recommandations générales à adapter au système                                                      | prévoir accès nominatifs, autorisation, journalisation et clôture de session de maintenance                         | mai 2026                                   |
| La CNIL recommande de prévoir restitution ou destruction, assistance, audits et informations nécessaires dans la relation de sous-traitance                                                            | CNIL, guide sécurité et bonnes pratiques sous-traitance, https://www.cnil.fr/fr/responsable-de-traitement-et-sous-traitant-6-bonnes-pratiques-pour-respecter-les-donnees | données personnelles ; ne couvre pas toute la réversibilité technique                               | écrire format, délai, assistance, contrôle et sort des copies                                                       | page vivante                               |
| Les sauvegardes doivent être organisées selon objectifs, dépendances, protection et tests de restauration                                                                                              | ANSSI, Sauvegarde des systèmes d’information v1.1, https://messervices.cyber.gouv.fr/documents-guides/anssi_fondamentaux_sauvegarde_systemes_dinformation_v1.1.pdf       | recommandations à adapter, non normatives hors cadre spécifique                                     | ne pas accepter « sauvegarde incluse » sans propriétaire, couverture, test et preuve                                | version 1.1 du 27/11/2025                  |
| Le référentiel PAMS encadre des prestations d’administration et de maintenance sécurisées et distingue les exigences du bénéficiaire et du prestataire                                                 | ANSSI, PAMS v1.1, https://cyber.gouv.fr/sites/default/files/2022-10/ANSSI_PAMS_referentiel_v1.1_vFR.pdf                                                                  | référentiel de qualification et contexte de sécurité, non obligation générale de toute PME          | utiliser comme source d’exigences possibles sans prétendre qu’une TMA ordinaire est qualifiée PAMS                  | version à revalider                        |
| La remise du code, les droits d’utilisation et de modification, les licences et les comptes sont distincts                                                                                             | Légifrance, Code de la propriété intellectuelle, articles L131-3, L113-9 et L122-6                                                                                       | analyse juridique dépend des contrats, auteurs, salariés, prestataires et composants                | demander les pièces et faire analyser les droits ; ne pas déduire la réversibilité du dépôt seul                    | textes consolidés à revalider              |
| Le CCAG-TIC ne s’applique que lorsque les documents particuliers d’un marché public s’y réfèrent et ceux-ci peuvent y déroger                                                                          | Légifrance, arrêté du 30 mars 2021 portant approbation du CCAG-TIC, préambule et champ d’application, https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000043310613        | commande publique uniquement ; ce n’est ni une obligation générale ni un modèle de contrat privé    | borner chaque usage du CCAG et vérifier d’abord les documents du marché concerné                                    | texte consulté le 20/07/2026               |
| L’article 38.4 du CCAG-TIC énumère notamment sources, exécutables, documentation, paramètres, scripts, fichiers exploitables et interfaces documentées à remettre dans son dispositif de réversibilité | Légifrance, CCAG-TIC, article 38.4, https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000043310752                                                                  | liste propre aux marchés qui se réfèrent au CCAG-TIC et adaptable par leurs documents particuliers  | transformer « réversibilité incluse » en inventaire, formats, tests, assistance et acceptation                      | texte consulté le 20/07/2026               |
| L’article 42 du CCAG-TIC traite des conditions d’accès aux matériels et logiciels et de la sécurité pendant les opérations de transfert                                                                | Légifrance, CCAG-TIC, article 42, https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000043310756                                                                    | complément dans le même périmètre de commande publique ; ne contient pas la liste de l’article 38.4 | attribuer les exigences à la bonne clause et organiser le transfert sans confondre inventaire et conditions d’accès | texte consulté le 20/07/2026               |

### Faits et promesses volontairement non affirmés

- aucun SLA, GTI, GTR, disponibilité ou temps de résolution « standard » ;
- aucun délai dit garanti sans engagement commercial réel, horaires, point de
  départ, exclusions, dépendances et conséquence contractuelle ;
- aucune assimilation automatique de GTI à l’accusé de réception, ni de GTR à
  la correction définitive ;
- aucun « forfait illimité » sans décrire file d’attente, capacité, usage
  raisonnable, priorité et exclusions ;
- aucun bug réputé inclus avant qualification de l’origine, du périmètre et de
  la version ;
- aucune maintenance présentée comme protection contre tous les incidents ;
- aucune TMA présentée comme audit, assurance, infogérance, hébergement ou
  astreinte par nature ;
- aucune conformité RGPD ou cybersécurité certifiée par la seule signature ;
- aucune interprétation juridique personnalisée.

## 5. Vocabulaire et distinctions

| Terme                   | Définition opérationnelle à employer                                                                                           |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| TMA                     | organisation confiée à un tiers pour maintenir et faire évoluer une application selon un périmètre écrit                       |
| maintenance corrective  | diagnostiquer et corriger un comportement non conforme à la référence acceptée                                                 |
| maintenance préventive  | réduire un risque avant incident : dépendance, capacité, sauvegarde, dette ou vulnérabilité selon le périmètre                 |
| maintenance évolutive   | modifier le comportement attendu ou ajouter une capacité ; elle exige besoin, estimation et recette                            |
| support                 | aider un utilisateur ou qualifier une demande ; ce n’est pas nécessairement modifier le logiciel                               |
| accusé de réception     | preuve que la demande est arrivée dans le canal convenu                                                                        |
| prise en charge         | moment où un intervenant qualifie et commence réellement le traitement selon la définition contractuelle                       |
| contournement           | solution temporaire qui réduit l’impact sans supprimer nécessairement la cause                                                 |
| rétablissement          | retour du service au niveau convenu, éventuellement grâce à un contournement                                                   |
| correction définitive   | modification traitant la cause connue, testée et reçue selon un critère écrit                                                  |
| SLA / niveau de service | engagement mesurable défini par le contrat ; le sigle seul ne crée aucun niveau                                                |
| RACI                    | tableau précisant qui réalise, qui rend compte/valide, qui est consulté et qui est informé                                     |
| réversibilité           | capacité organisée à changer d’équipe ou de solution avec actifs, droits, accès, données, connaissances et assistance convenus |

## 6. Empreinte éditoriale

- Tension motrice : une clause rassurante devient inexécutable dès que l’on demande qui décide et quelle preuve termine chaque étape.
- Ouverture : citation contractuelle ambiguë, puis incident fictif très court sans chronologie chiffrée, performance ni faux client.
- Progression : quatre réponses immédiates → premier incident → couverture → facture → acceptation → responsabilités → suivi et sortie.
- Artefact signature : un seul parcours d’incident, complété par trois simulations de facture et un exercice de sortie.
- Rythme/voix : dirigeant qui demande ce qui est couvert, quand l’activité reprend, combien il paie et comment il peut partir.
- Place du CTA : après la simulation du premier mois et les cas inadaptés.
- Conclusion : rejouer l’incident et la sortie avant de signer.
- Différences : chronologie opérationnelle, pas de liste juridique abstraite ni de nouveau guide de prix.

## 7. Plan annoté

| Mouvement         | Question résolue                                         | Preuve ou outil                                               | Décision                                |
| ----------------- | -------------------------------------------------------- | ------------------------------------------------------------- | --------------------------------------- |
| Réponse immédiate | que faut-il obtenir avant de signer ?                    | couverture, retour au service, facture et sortie              | poursuivre ou demander une reprise      |
| Premier incident  | qui appelle, agit, rétablit et clôt ?                    | un parcours unique en quatre moments                          | corriger les zones muettes              |
| Couverture        | qu’est-ce qui est réellement acheté ?                    | correction, prévention, évolution, assistance et exploitation | inclure, plafonner ou exclure           |
| Facture           | comment le forfait se consomme-t-il ?                    | mois calme, mois chargé et incident hors horaires             | comparer le coût connu et les variables |
| Acceptation       | quand une correction est-elle terminée ?                 | demande, autorisation, livraison et recette                   | accepter ou rouvrir                     |
| Responsabilités   | qui gère accès, données et sauvegardes ?                 | quatre familles de contrôles                                  | attribuer les actions selon le risque   |
| Suivi et sortie   | le service s’améliore-t-il et peut-on changer d’équipe ? | bilan court et exercice de transmission                       | signer, corriger ou refuser             |

## 8. Ressource et conversion

- Une ressource téléchargeable est-elle nécessaire ? Non dans cette première version.
- Résultat autonome : matrice copiable et exercice du premier incident/premier mois.
- Conclusion ne pas signer : oui.
- Données saisies : aucune.
- Cas adapté au CTA : application existante, actifs et interlocuteur métier identifiables, besoin récurrent, accès auditables.
- Cas inadapté : incident actif, compromission suspectée, absence totale d’actifs ou litige juridique ; traiter l’urgence, la reprise ou le droit séparément.
- Action non commerciale : rejouer un incident, cinq tickets et une sortie avec les clauses proposées.
- CTA : « Faire auditer mon périmètre de TMA », avec possibilité de recommander d’abord une reprise ou un lot ponctuel.

## 9. Revue finale

### Scorecard après réécriture humaine du 21 juillet 2026

| Axe         | Note | Preuve dans le produit final                                                                               |
| ----------- | ---: | ---------------------------------------------------------------------------------------------------------- |
| Intention   |    2 | signer, renégocier, reprendre, changer de mode ou refuser                                                  |
| Décision    |    2 | quatre réponses immédiates, incident unique, simulations de facture et exercice de sortie                  |
| Pédagogie   |    2 | triple chronologie et mini-RACI supprimés ; sigles traduits dans le fil                                    |
| Profondeur  |    2 | couverture, délais, coût, sécurité, sauvegarde, recette et réversibilité                                   |
| Preuve      |    2 | Légifrance, CNIL, ANSSI et CPI cités dans leur périmètre réel                                              |
| Comparaison |    2 | régie, capacité, forfait et lot comparés sur charge, preuve et risque                                      |
| Originalité |    2 | contrat testé sur une panne avant signature, sans chronologie générique                                    |
| Style       |    2 | progression ramenée à sept décisions et dix tableaux au lieu de douze sections et quatorze tableaux        |
| Conversion  |    2 | exercice autonome, cas inadaptés et CTA vers un audit de périmètre                                         |
| SEO/produit |    1 | métadonnées et structure conservées ; build, rendu et temps de lecture à revalider sur le snapshot modifié |

Score provisoire : **19/20**. La porte éditoriale est corrigée ; le statut final
attend le recomptage rendu, la valeur `readTimeMin`, les tests et le navigateur.

### Test lecteur non technique

```text
Test réalisé par une personne réelle : non
Profil simulé : dirigeant ou responsable métier dépendant d’une application sans équipe informatique complète
Compréhension vérifiée : chaque délai doit avoir un départ, une fin, un responsable et une preuve
Décision rendue possible : signer, corriger, demander une reprise ou choisir un autre mode d’intervention
Réserve : aucun avis juridique ni retour d’un lecteur humain réel n’est revendiqué
```

### Contre-audit indépendant historique

```text
Auteur : agent indépendant audit_guide2
Indépendant : oui
Premier passage : réserves sur l’ouverture, la portée du CCAG-TIC et des affirmations voisines non sourcées
Corrections : ouverture réécrite, portée du CCAG-TIC bornée, articles 38.4 et 42 distingués, guide de coût voisin réconcilié
Ré-audit : 19/20 avant la batterie technique et le contrôle navigateur
Clôture parent : 20/20 sur l’ancienne architecture, désormais remplacée par la réécriture humaine du 21 juillet
```

Décision de publication : autorisée explicitement par le commanditaire.

La passe pédagogique du 21 juillet 2026 conserve un seul incident à rejouer et
regroupe prise en charge, retour au service, correction, acceptation et clôture
dans ce parcours. Le rendu passe de 6 829 à 4 724 mots, de 12 à 8 H2 et de 14
à 10 tableaux. Le registre affiche 24 minutes à 200 mots/minute.

### Vérifications finales

- [x] sources rouvertes et portées vérifiées après rédaction ;
- [x] page, registre, OG et maillage créés ;
- [x] sections voisines réconciliées sans supprimer leur intention ;
- [x] temps de lecture rendu recalculé et registre mis à jour ;
- [x] score éditorial provisoire supérieur ou égal à 17/20 ;
- [x] contre-audit indépendant corrigé ;
- [ ] batterie finale repassée sur la réécriture du 21 juillet ;
- [ ] présence dans les artefacts SEO de production revérifiée après modification.
