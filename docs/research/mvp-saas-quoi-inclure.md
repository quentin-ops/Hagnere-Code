# Reconstruction P1 — MVP SaaS : quoi inclure ?

> Dossier reconstruit depuis un état éditorialement vierge le 2 août 2026.
> L’ancien dossier, la route retirée et leurs verdicts ne servent que
> d’historique de risques. Ils ne prouvent ni qualité actuelle, ni publication,
> ni indexation.

## A. Identité

| Champ                        | Valeur                                                                                                                           |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| Slug                         | mvp-saas-quoi-inclure                                                                                                            |
| Numéro et thème de roadmap   | Guide 28 · SaaS et MVP                                                                                                           |
| Priorité                     | Élevée : décision immédiatement antérieure à un pilote ou à un premier client                                                    |
| Intention principale         | Décider ce qui doit fonctionner, ce qui peut rester manuel ou intégré, ce qui peut être reporté et ce qui doit rester à vérifier |
| Lecteur                      | Fondatrice, dirigeant ou responsable produit d’un SaaS B2B ayant déjà validé un problème                                         |
| Situation déclenchante       | Un premier test réel devient plausible et une liste de fonctionnalités ne suffit plus à décider                                  |
| Décision                     | Prototype, pilote accompagné, premier client en production, test plus léger, solution existante ou report                        |
| Route de service             | /services/saas-applications-metier, propriétaire de l’offre transactionnelle ; aucun lien public ajouté vers cette route dans P1 |
| CTA                          | Unique, tardif et borné vers /demarrer-un-projet                                                                                 |
| Date réelle de recherche     | 2026-08-02, Europe/Paris                                                                                                         |
| Date de publication affichée | 2026-07-20T15:19:41+02:00, qualifiée comme première trace Git et non comme preuve publique                                       |
| Propriétaire du registre     | SECONDARY_ORCHESTRATOR_019fb1e0                                                                                                  |
| Agent P1                     | /root/mvp_saas_p1                                                                                                                |
| Branche et base              | codex/mvp-saas-quoi-inclure · 26042f1787f0fe7b88d14a1398480a94177ff5b0                                                           |
| État de release              | ready-for-human-review ; aucune preuve de build, route servie, déploiement, publication ou indexation                            |

### Intention reformulée

La requête ne demande pas une liste universelle de fonctions. Le lecteur doit
prendre une décision de frontière : quel test conduit à quelle preuve, avec
quelles responsabilités opérationnelles et quelle charge humaine. Le guide
répond donc par un contrat de test en sept familles, sans score compensatoire.

### Réponse directe retenue

Un MVP SaaS n’est ni un nombre minimal d’écrans ni une petite version de toute
la roadmap. Il est le plus petit contrat de test qui permet à une population
précise d’obtenir un résultat vendu et à l’équipe d’observer une preuve utile.
Pour un client réel, les accès, données, échecs, aide, opérations, vente et
sortie nécessaires à ce cas doivent être attribués. Certains éléments peuvent
rester manuels ou intégrés si leur responsable, leur charge, leur limite, leur
reprise et leur déclencheur sont écrits sur une période de test nommée ; une
inconnue reste inconnue.

## B. Contrat de réponse

### Réponse courte en cinq phrases

1. Commencer par le format du test, le résultat vendu et l’événement de preuve.
2. Examiner sept familles de capacités, pas une quantité universelle de
   fonctionnalités.
3. Pour chaque famille, choisir construire, manuel, intégrer, reporter ou à
   vérifier.
4. Nommer la période du test, additionner la charge manuelle déclarée sur cette
   période et la comparer uniquement à la capacité totale saisie pour la même
   période.
5. Maintenir un STOP lorsqu’une décision, une capacité critique ou une limite
   manque ; un statut candidat ouvre une revue humaine, jamais une autorisation.

### Six questions indispensables

| No  | Question                                                                                          | Pourquoi elle change la décision                                             |
| --- | ------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| 1   | Quel format est réellement testé : prototype, pilote accompagné ou premier client en production ? | La conclusion maximale n’est pas la même.                                    |
| 2   | Quel résultat métier est vendu et quel événement prouve qu’il a été obtenu ?                      | Sans résultat et preuve, le périmètre ne teste rien de décisif.              |
| 3   | Quelles capacités des sept familles sont nécessaires à ce test précis ?                           | Une fonction visible peut cacher accès, données, reprise, support ou sortie. |
| 4   | Quel traitement, quel responsable et quelle reprise sur échec sont retenus ?                      | Manuel, intégration et report ne sont défendables qu’avec des limites.       |
| 5   | Sur quelle période exacte les occurrences et la capacité totale sont-elles déclarées ?            | Sans horizon commun, la comparaison de charge est inexploitable.             |
| 6   | La charge manuelle tient-elle dans la capacité explicitement disponible sur cette même période ?  | Le test peut devenir inexploitable avant tout problème de code.              |

### Questions secondaires à fermer

- Le client achète-t-il de manière autonome ou par contrat et facture manuels ?
- Quelles dates ou quel horizon propre au test couvrent les occurrences et la
  capacité totale ?
- Qui invite, retire un accès, restaure, répond, administre et ferme le test ?
- Quelles données personnelles sont réellement traitées ?
- Quel incident est imprévisible et reste hors de la charge planifiée ?
- Quel événement impose de réexaminer un traitement manuel ou une intégration ?
- Quelle preuve déclenche continuer, modifier, réduire ou arrêter ?
- Quelle solution existante couvre déjà une capacité générique ?
- Quelles limites ont été annoncées aux participants du test ?

### Objections anticipées

| Objection                                                   | Réponse de cadrage                                                                                                           |
| ----------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| « Un MVP doit aller vite, ces questions ralentissent. »     | La méthode ne demande pas de tout construire ; elle évite de confondre absence de fonction et absence de responsabilité.     |
| « L’équipe compensera manuellement. »                       | Possible seulement si l’opération, le responsable, les facteurs de charge, la limite et l’échec sont écrits.                 |
| « Le fournisseur de paiement gère tout. »                   | Une intégration fournit des états ; l’équipe doit encore décider les droits, l’information et la reprise propres au contrat. |
| « Une sauvegarde existe, donc la continuité est couverte. » | Une copie déclarée ne prouve pas qu’un scénario de restauration fonctionne.                                                  |
| « Un score élevé permet de lancer. »                        | Aucun score : le premier STOP applicable reste non compensable.                                                              |
| « Le login prouve l’activation. »                           | La preuve doit correspondre au résultat vendu, pas à une simple entrée dans le produit.                                      |

### Hors-sujet explicites

- validation complète du problème, de l’acheteur et du prix ;
- estimation du calendrier et promesse de délai ;
- priorisation valeur/effort du backlog après le socle ;
- architecture SaaS universelle, certification ou audit de sécurité ;
- analyse juridique complète, base légale ou analyse d’impact automatique ;
- roadmap durable post-MVP ;
- recommandation de prestataire ou fourchette commerciale ;
- modèle de cahier des charges exhaustif.

### Cas « ne pas développer »

Ne rien construire si aucune preuve issue du produit ne changerait la décision,
si aucun participant correspondant au lecteur visé n’est accessible, si le
problème reste non validé ou si les conditions du test réel ne peuvent pas être
assumées. Documenter alors le motif et l’éventuel événement de réexamen.

### Cas « utiliser une fonction existante »

Intégrer un service existant lorsque la capacité est générique et que ses états,
erreurs, coûts, responsabilités et conditions de sortie restent compatibles
avec la preuve recherchée. L’intégration n’efface ni la recette ni la reprise.

### Cas « reporter »

Reporter seulement une capacité non nécessaire au format de test retenu, avec
un déclencheur observable. Reporter une capacité déclarée nécessaire provoque
STOP_CRITICAL_CAPABILITY_DEFERRED.

### Action utile sans contact commercial

Remplir le contrat local, relire les sept familles, exporter le texte par
copie, faire mesurer un échantillon d’opérations manuelles et réduire le format
si une inconnue critique ne peut pas être fermée.

## C. Corpus interne

### Fichiers et routes ouverts

| Élément                                             | Rôle                                        | Décision P1                                                                                    |
| --------------------------------------------------- | ------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| docs/research/mvp-saas-quoi-inclure-input-freeze.md | Contrat immuable du cycle                   | Lu intégralement ; contenu non modifié par l’agent P1 ; formatage mécanique G1 consigné en H11 |
| Ancien docs/research/mvp-saas-quoi-inclure.md       | Historique de questions et risques          | Lu intégralement puis reconstruit ; score et BAT historiques rejetés                           |
| docs/prompt-maitre-agent-parallele-guides.md        | Protocole P1, gates et manifeste            | Lu intégralement                                                                               |
| /guides/valider-idee-saas-avant-developper          | Propriétaire de la validation marché        | Lien de prérequis actif ; aucun protocole marché dupliqué                                      |
| /guides/cahier-des-charges-saas                     | Propriétaire de la spécification comparable | Lien de suite actif ; ses neuf blocs ne sont pas reproduits                                    |
| /guides/combien-de-temps-developper-saas            | Propriétaire du calendrier                  | Lien actif ; aucune durée de développement n’est promise                                       |
| /services/saas-applications-metier                  | Offre transactionnelle                      | Frontière documentée ; CTA P1 reste /demarrer-un-projet                                        |
| legacy-guide-redirects.ts                           | État actuel de la route historique          | Lu pour contexte ; hors périmètre et non modifié                                               |
| guide-premium-layout.tsx                            | Architecture de lecture                     | GuidePremiumLayout, sections, mémos, cas et CTA final                                          |
| guide-content-blocks.tsx                            | Tableaux et formules accessibles            | GuideTable, FormulaBox et InfoBox                                                              |
| guide-page-seo.ts                                   | Metadata et données structurées             | Helper local alimenté par une GuideEntry locale                                                |
| guides.ts                                           | Registre partagé                            | Types et format de date lus ; aucune entrée ajoutée                                            |
| team.ts                                             | Identité auteur                             | TEAM.quentin et profileUrl /equipe#fondateur                                                   |

### Ancienne route et état public

- Le checkout gelé ne contient pas de page statique pour le slug.
- Le slug appartient encore à la table des redirections legacy.
- La route publique observée le 2 août 2026 redirige vers le service SaaS.
- Cette redirection ne prouve ni publication du nouveau guide ni indexation.
- P1 ne modifie ni redirect, ni registre, ni sitemap, ni llms.txt.

### Risque de cannibalisation

| Sujet                   | Risque                                          | Frontière appliquée                                                        |
| ----------------------- | ----------------------------------------------- | -------------------------------------------------------------------------- |
| Validation de l’idée    | Répéter problème, acheteur, accès et engagement | Le guide suppose le problème déjà validé et renvoie au guide propriétaire. |
| Cahier des charges      | Recréer une spécification complète              | Le contrat de test devient une entrée, pas un cahier des charges complet.  |
| Calendrier SaaS         | Transformer le périmètre en délai               | Aucun jour ou semaine universel ; lien après fixation du périmètre.        |
| Priorisation future     | Noter les fonctions métier                      | Le socle est contrôlé sans score ; le backlog suivant reste hors sujet.    |
| Sécurité et RGPD futurs | Promettre une conformité minimale               | Décisions conditionnelles et sources limitées, jamais certification.       |

### Liens sortants internes retenus

- /guides/valider-idee-saas-avant-developper ;
- /guides/cahier-des-charges-saas ;
- /guides/combien-de-temps-developper-saas ;
- /demarrer-un-projet, une seule fois comme CTA final ;
- /equipe#fondateur pour l’auteur.

### Lien entrant souhaité

Après intégration seulement, un lien contextuel depuis le guide de validation
vers ce contrat serait pertinent lorsque la prochaine preuve exige un produit
exploité. Cette demande ne constitue pas une modification P1.

## D. Analyse externe

Date de consultation des entrées S01 à S11 : **2 août 2026**. La contre-source
S12 a été ajoutée et rouverte le **3 août 2026**. Une page dite « vivante »
n’expose pas de version éditoriale figée : sa date de consultation est donc
indissociable de l’affirmation. Les sources commerciales servent à analyser le
vocabulaire et les contradictions, jamais à établir une norme.

### D1. Corpus primaire

#### S01 — Lean Startup

- URL : https://leanstartup.co/resources/articles/what-is-an-mvp/
- Éditeur et auteur : Lean Startup Co., page attribuée à Eric Ries.
- Date/version : aucune date de republication fiable visible ; page courante
  consultée le 2 août 2026.
- Type : source méthodologique primaire accessible.
- Réponse fournie : un MVP vise l’apprentissage validé avec un effort limité.
- Preuve utilisable : relier le périmètre à une hypothèse et à une décision.
- Limite : aucune checklist technique universelle, aucun minimum de fonctions,
  aucune autorisation de production.
- Information manquante : conditions d’exploitation propres à un SaaS B2B.
- Formulation publique : principe d’apprentissage seulement.

#### S02 — GOV.UK Alpha · mise à jour 8 mai 2019

- URL :
  https://www.gov.uk/service-manual/agile-delivery/how-the-alpha-phase-works
- Éditeur : Government Digital Service.
- Date/version : page mise à jour le 8 mai 2019.
- Type : manuel de service public britannique.
- Réponse fournie : construire des prototypes pour tester les hypothèses les
  plus risquées avant une bêta.
- Preuve utilisable : distinguer prototype d’apprentissage et service exploité.
- Limite : organisation et obligations d’un service public britannique ;
  transposition méthodologique, pas norme du SaaS privé.
- Information manquante : contrat commercial et charge d’un petit pilote B2B.

#### S03 — GOV.UK Beta · mise à jour 19 février 2021

- URL :
  https://www.gov.uk/service-manual/agile-delivery/how-the-beta-phase-works
- Éditeur : Government Digital Service.
- Date/version : page mise à jour le 19 février 2021.
- Type : manuel de service public britannique.
- Réponse fournie : commencer par une bêta privée, limiter les utilisateurs,
  tester de bout en bout et organiser le support.
- Preuve utilisable : un test avec personnes réelles inclut exploitation et
  aide, même si sa population est limitée.
- Limite : la séquence et les pratiques ne donnent aucune durée ni obligation
  universelle à un SaaS privé.
- Information manquante : mode de vente et décisions de premier contrat.

#### S04 — RGPD consolidé, articles 5, 25 et 32

- URL :
  https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:02016R0679-20160504
- Éditeur : Union européenne, EUR-Lex.
- Date/version : texte consolidé accessible le 2 août 2026 ; règlement
  initialement applicable selon son propre calendrier.
- Type : texte juridique primaire.
- Réponse fournie : minimisation, protection des données dès la conception et
  mesures de sécurité adaptées au risque.
- Preuve utilisable : les données personnelles réelles imposent une
  qualification contextuelle dès le test.
- Limite : la page ne choisit ni la base légale, ni les rôles, ni la durée de
  conservation, ni les mesures d’un cas inconnu.
- Information manquante : traitements et contrats réels du lecteur.
- Formulation publique : conditionnelle à la présence de données personnelles.

#### S05 — CNIL, Guide RGPD du développeur

- URL : https://www.cnil.fr/fr/guide-rgpd-du-developpeur
- Éditeur : Commission nationale de l’informatique et des libertés.
- Date/version : ressource vivante ; une page liée signale une nouvelle version
  le 13 décembre 2021 ; consultation le 2 août 2026.
- Type : guide pédagogique d’autorité.
- Réponse fournie : pratiques de développement intégrant la protection des
  données, les habilitations, secrets et environnements.
- Preuve utilisable : poser ces questions dans le cycle, pas après le pilote.
- Limite : le guide ne remplace pas l’analyse du traitement ni un conseil
  juridique.
- Information manquante : données, finalités et responsabilités réelles.

#### S06 — CNIL, Guide de la sécurité · édition 2024

- URL :
  https://www.cnil.fr/fr/guide-de-la-securite-des-donnees-personnelles-nouvelle-edition-2024
- Éditeur : CNIL.
- Date/version : page publiée le 26 mars 2024 ; édition 2024, page toujours
  accessible le 2 août 2026.
- Type : guide pratique d’autorité.
- Réponse fournie : mesures organisées par fiches, tests, habilitations,
  environnements, secrets et proportion au risque.
- Preuve utilisable : ne pas reporter silencieusement les contrôles nécessaires
  au contexte.
- Limite : aucune mesure unique ne vaut pour tous les MVP ; pas de
  certification.
- Information manquante : menace, données et risque du produit concret.

#### S07 — ANSSI, sauvegardes · version 1.1 du 27 novembre 2025

- URL :
  https://messervices.cyber.gouv.fr/documents-guides/anssi_fondamentaux_sauvegarde_systemes_dinformation_v1.1.pdf
- Éditeur : Agence nationale de la sécurité des systèmes d’information.
- Date/version : version 1.1 du 27 novembre 2025.
- Type : guide primaire PDF d’autorité.
- Réponse fournie : préparer la restauration et tester régulièrement les
  sauvegardes, notamment via une procédure.
- Preuve utilisable : distinguer copie déclarée et restauration rejouée.
- Limite : aucun objectif universel de perte ou de délai de reprise n’est
  transposé au MVP.
- Information manquante : criticité et objectifs de continuité réels.

#### S08 — OWASP ASVS · version stable 5.0.0

- URL : https://github.com/OWASP/ASVS/releases/tag/v5.0.0_release
- Éditeur : OWASP Foundation, dépôt officiel ASVS.
- Date/version : version stable 5.0.0 publiée le 30 mai 2025 ; consultation le
  2 août 2026.
- Type : référentiel communautaire primaire de vérification.
- Réponse fournie : catalogue de contrôles vérifiables de sécurité
  applicative.
- Preuve utilisable : choisir et vérifier les exigences pertinentes au risque.
- Limite : citer ASVS ne certifie pas une application ; aucun niveau universel
  n’est choisi par ce guide.
- Information manquante : modèle de menace et périmètre de contrôle.

#### S09 — OWASP Logging Cheat Sheet · page vivante

- URL :
  https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html
- Éditeur : OWASP Foundation.
- Date/version : page vivante consultée le 2 août 2026.
- Type : guide technique communautaire primaire.
- Réponse fournie : événements utiles, tests de défaillance du journal, données
  à exclure et protection du mécanisme.
- Preuve utilisable : rendre les échecs observables sans journaliser secrets et
  données interdites.
- Limite : pas de volume ni de durée de conservation universels.
- Information manquante : événements et accès pertinents au produit.

#### S10 — W3C WCAG 2.2 · Recommendation du 12 décembre 2024

- URL : https://www.w3.org/TR/WCAG22/
- Éditeur : World Wide Web Consortium.
- Date/version : W3C Recommendation du 12 décembre 2024.
- Type : standard technique primaire.
- Réponse fournie : critères techniques testables d’accessibilité Web.
- Preuve utilisable : intégrer des critères observables au parcours et à la
  recette.
- Limite : WCAG seule ne conclut pas sur toutes les obligations juridiques
  françaises ni sur l’accessibilité complète d’un service.
- Information manquante : utilisateurs, contexte, niveau et obligations réels.

#### S11 — Stripe, Subscription webhooks · documentation vivante

- URL : https://docs.stripe.com/billing/subscriptions/webhooks
- Éditeur : Stripe.
- Date/version : documentation vivante consultée le 2 août 2026.
- Type : documentation officielle de fournisseur.
- Réponse fournie : événements et états d’abonnement à traiter, notamment
  échecs de paiement et conséquences sur le service.
- Preuve utilisable : un achat autonome exige des états, une information et une
  décision sur les droits.
- Limite : logique propre à Stripe et au modèle retenu ; aucun fournisseur
  n’est imposé dans l’outil.
- Information manquante : contrat, fournisseur et règles commerciales réels.

#### S12 — GOV.UK Live · mise à jour 8 mai 2019

- URL :
  https://www.gov.uk/service-manual/agile-delivery/how-the-live-phase-works
- Éditeur : Government Digital Service.
- Date/version : page mise à jour le 8 mai 2019, rouverte le 3 août 2026.
- Type : manuel de service public britannique, utilisé comme contre-source
  d’exploitation.
- Réponse fournie : un service en vie demande une exploitation soutenable, des
  personnes responsables, du support, des mesures, de la disponibilité, de la
  sécurité, de l’accessibilité et une capacité de retrait.
- Preuve utilisable : un premier client qui dépend du service ne peut pas faire
  disparaître un domaine entier de responsabilité en le déclarant « non
  nécessaire » puis « reporté ».
- Limite : ces exigences relèvent du cadre public britannique ; elles ne
  définissent ni sept fonctionnalités universelles, ni une architecture, ni un
  niveau de service obligatoire pour un SaaS privé.
- Information manquante : responsabilités contractuelles et risque du produit
  réel.

### D2. Pages concurrentes et vocabulaire

#### C01 — PayPro Global

- URL :
  https://payproglobal.com/fr/reponses/quest-ce-quun-mvp-saas/
- Date : mise à jour affichée le 2 avril 2026.
- Réponse fournie : version de base, fonctions principales, métriques et
  monétisation.
- Apport au guide : question naturelle et importance du test marché.
- Limite/biais : éditeur d’une solution de paiement ; la page n’établit pas les
  responsabilités opérationnelles d’un premier client.
- Manque : charge manuelle, reprise, propriétaire et sortie.

#### C02 — Sparkier

- URL :
  https://www.sparkier.io/articles/mvp-saas-b2b-arreter-le-feature-creep
- Date : publication affichée le 12 mai 2026.
- Réponse fournie : un persona, un contexte, un parcours critique, fonctions
  parfois semi-manuelles.
- Apport au guide : unité de raisonnement centrée sur le parcours.
- Limite/biais : page commerciale ; 10 à 20 premiers clients et 60 à 90 jours
  sont des repères de cette page, pas des normes reprises.
- Manque : équation de capacité et ordre de priorité des inconnues.

#### C03 — Goolive

- URL :
  https://goolive.fr/comment-rediger-un-cahier-des-charges-pour-un-mvp/
- Date : page publiée environ un an avant la consultation ; date précise non
  retenue faute de métadonnée éditoriale stable dans l’extrait ouvert.
- Réponse fournie : parcours critique, un ou deux flux complets, cas limites et
  critères de réussite.
- Apport au guide : préférer la cohérence à la liste d’écrans.
- Limite/biais : page d’agence ; le nombre de flux ne devient pas une règle.
- Manque : exploitation, charge manuelle et STOP non compensable.

#### C04 — Websual

- URL :
  https://websual.fr/blog/mvp-saas-b2b-par-ou-commencer
- Date : page courante publiée en 2026, consultée le 2 août 2026.
- Réponse fournie : plus petit livrable testant une hypothèse, tâche centrale,
  outils existants ou no-code possibles.
- Apport au guide : intégration ou outil existant comme alternative au code.
- Limite/biais : page commerciale ; aucune preuve de seuil ou de résultat
  universel.
- Manque : charge totale, continuité et décision de production.

#### C05 — InProgress

- URL : https://inprogress.agency/expertise/mvp/saas-b2b
- Date : page vivante consultée le 2 août 2026.
- Réponse fournie : multi-tenancy, billing, SSO et architecture dite
  scale-ready en 90 jours.
- Apport au guide : met en évidence les risques de fondation d’un cas
  enterprise.
- Limite/biais : promesse commerciale ; 90 jours, toutes les fondations et le
  coût annoncé de refonte 5 à 10 fois supérieur ne sont pas repris faute de
  preuve indépendante et de périmètre universel.
- Manque : possibilité qu’un pilote accompagné ou mono-contexte soit le test
  juste.

#### C06 — MVP Development Company

- URL : https://mvpdevelopment.company/blog/saas-mvp
- Date : mise à jour affichée le 15 juillet 2026.
- Réponse fournie : un flux principal, inscription, persistance, interface,
  analytique et paiement conditionnel.
- Apport au guide : insiste sur un flux de valeur observable.
- Limite/biais : page d’agence ; présente un produit déployé et un modèle
  d’abonnement comme définition étroite, alors qu’un prototype ou un pilote
  accompagné peut répondre à une incertitude antérieure.
- Manque : responsabilité manuelle et distinction entre candidat et
  autorisation.

### D3. Contradictions majeures

| Contradiction observée                                                        | Décision éditoriale                                                                                                                                                               |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| « Un flux et une mesure suffisent » contre « toute la plateforme dès le MVP » | Un flux de valeur reste le centre ; les capacités périphériques sont conditionnelles au format, aux données, au contrat et au risque.                                             |
| Pilote assisté contre libre-service                                           | Les deux modes sont explicites ; l’achat autonome ajoute des états obligatoires, sans rendre l’automatisation universelle.                                                        |
| Manuel visible contre automatisation prématurée                               | Manuel accepté seulement avec équation, propriétaire, limite, reprise et déclencheur.                                                                                             |
| Fonction métier visible contre exploitation invisible                         | Sept familles rendent aide, admin, continuité, accès et sortie discutables sans les transformer en modules universels.                                                            |
| Première preuve contre produit durable                                        | Trois formats séparent conclusion d’un prototype, candidat au pilote et candidat à la production.                                                                                 |
| Quotas et délais commerciaux contre contexte réel                             | Aucun nombre de clients, semaines, fonctions, taux ou gain externe ne devient norme publique.                                                                                     |
| « Non nécessaire » puis « Reporter » contre responsabilité de production      | Ce couple reste possible pour un prototype ou pilote borné, mais provoque STOP pour tout domaine reporté d’un premier client en production ; manuel et intégration restent admis. |

## E. Matrice d’information utile

| Question lecteur                         | Ce que les résultats externes expliquent                  | Ce qui reste flou                                                    | Apport propre du guide                                         | Preuve ou outil                           | Conséquence pour la décision                             |
| ---------------------------------------- | --------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------- | ----------------------------------------- | -------------------------------------------------------- |
| Combien de fonctions faut-il ?           | Réduire au parcours principal et à l’hypothèse.           | Les listes « toujours inclure » divergent fortement.                 | Aucun nombre ; sept familles de questions conditionnelles.     | Contrat local sans score.                 | Décider capacité par capacité.                           |
| Prototype ou vrai SaaS ?                 | Alpha et bêta n’ont pas la même finalité.                 | Beaucoup de pages appellent MVP uniquement une application déployée. | Trois formats et conclusion maximale propre à chacun.          | Statut TEST_FORMAT_NOT_PRODUCTION.        | Réduire le format si la production n’est pas nécessaire. |
| Que doit vivre le premier client ?       | Un flux de valeur cohérent.                               | Les erreurs, l’aide et la sortie sont souvent secondaires.           | Journée de bout en bout, états normaux et échecs.              | Tableau du parcours observable.           | Fermer la chaîne avant l’invitation.                     |
| Peut-on gérer les comptes manuellement ? | Les pages concurrentes citent souvent l’authentification. | Elles distinguent peu invitation, rôle et retrait.                   | Manuel autorisé avec propriétaire, preuve et limite.           | Équation par famille.                     | Comparer la charge à la capacité saisie.                 |
| Faut-il un paiement automatique ?        | Paiement conditionnel si le prix est testé.               | Facture manuelle et achat autonome sont souvent confondus.           | Deux modes de vente explicites.                                | STOP si états d’échec autonomes inconnus. | Manuel possible ; autonome exige ses états.              |
| Une sauvegarde suffit-elle ?             | ANSSI demande une restauration préparée et testée.        | Objectif de reprise propre au produit absent.                        | Continuité conditionnelle, sans seuil universel.               | Preuve de restauration rejouée.           | STOP si nécessaire mais reportée.                        |
| Quel niveau de sécurité ?                | CNIL, OWASP et RGPD donnent principes et contrôles.       | Niveau et mesures dépendent des risques et données.                  | Questions de contrôle, jamais certification.                   | Revue humaine et sources limitées.        | Qualifier avant production réelle.                       |
| Faut-il traiter l’accessibilité ?        | WCAG 2.2 fournit des critères testables.                  | Les obligations juridiques et utilisateurs varient.                  | Accessibilité incluse dans la recette du parcours.             | Tests adaptés au contexte.                | Ne pas conclure à la conformité depuis la checklist.     |
| Le support peut-il rester simple ?       | La bêta privée inclut le support.                         | Canal, délai et capacité ne sont pas universels.                     | Courriel possible avec responsable, escalade et limites.       | Famille Aide et incidents.                | Refuser une boîte non surveillée.                        |
| Quand automatiser ?                      | Les concurrents opposent souvent rapidité et fondations.  | Aucun seuil ne convient à tous.                                      | Déclencheur écrit avant le test.                               | Charge = minutes × occurrences × clients. | Automatiser, réduire, intégrer ou arrêter après revue.   |
| Comment éviter un faux total rassurant ? | Peu de pages traitent les inconnues numériques.           | Une somme partielle peut masquer une opération absente.              | Inconnue conservée, somme partielle visible, STOP prioritaire. | Moteur BigInt à trois décimales.          | Mesurer ou borner avant de conclure.                     |
| Comment finir le test ?                  | Les contenus parlent d’itérer ou pivoter.                 | Export, retrait des droits et propriétaire sont rarement reliés.     | Famille Mesure et sortie.                                      | Preuve, décision et fin écrites.          | Continuer, modifier, réduire ou arrêter.                 |

### Angles différenciants retenus

1. Le minimum est un contrat de test, pas une quantité.
2. Les sept familles sont des conversations obligatoires, pas sept modules.
3. Le manuel est calculé en unités visibles et reste séparé des incidents
   imprévisibles.
4. Une inconnue numérique ou de responsabilité ne devient jamais zéro.
5. Les STOP ont un ordre de priorité non compensable.
6. Un statut candidat signifie uniquement « prêt pour revue humaine ».
7. L’outil ne collecte, ne stocke et ne télécharge aucune saisie.

## F. Registre des affirmations

Légende des types : FAIT, CALCUL, SCENARIO, DEDUCTION, RECOMMANDATION,
INCONNU. Légende des statuts : VERIFIE, A_NUANCER, A_RETIRER, INCONNU.

| ID  | Affirmation                                                                                                | Type           | Source primaire                     | Périmètre/date                                 | Statut    |
| --- | ---------------------------------------------------------------------------------------------------------- | -------------- | ----------------------------------- | ---------------------------------------------- | --------- |
| F01 | Le MVP sert une boucle d’apprentissage validé, pas une checklist technique universelle.                    | FAIT           | S01                                 | Page accessible au 2026-08-02                  | VERIFIE   |
| F02 | Une phase alpha peut utiliser des prototypes pour traiter les hypothèses les plus risquées.                | FAIT           | S02                                 | Service public britannique, mise à jour 2019   | VERIFIE   |
| F03 | Une bêta privée limite les utilisateurs et traite le service de bout en bout avec du support.              | FAIT           | S03                                 | Service public britannique, mise à jour 2021   | VERIFIE   |
| F04 | Les phases GOV.UK imposent un calendrier type au SaaS privé.                                               | DEDUCTION      | S02 et S03                          | Transposition interdite                        | A_RETIRER |
| F05 | Un prototype sans production ne prouve pas qu’un client peut dépendre du service.                          | DEDUCTION      | S02, S03 et contrat du guide        | Format défini dans P1                          | VERIFIE   |
| F06 | Un MVP SaaS contient toujours un nombre fixe de fonctions.                                                 | RECOMMANDATION | Aucune source primaire              | Universel                                      | A_RETIRER |
| F07 | Les articles 5, 25 et 32 sont pertinents lorsque des données personnelles sont traitées.                   | FAIT           | S04                                 | Traitement réel à qualifier                    | VERIFIE   |
| F08 | Le guide peut choisir automatiquement une base légale RGPD.                                                | DEDUCTION      | S04                                 | Contexte inconnu                               | A_RETIRER |
| F09 | Les mesures de sécurité doivent être adaptées au risque.                                                   | FAIT           | S04, S05, S06                       | Données et risques réels                       | VERIFIE   |
| F10 | Citer la CNIL ou OWASP prouve la conformité ou la sécurité.                                                | DEDUCTION      | S05, S06, S08, S09                  | Aucun audit réalisé                            | A_RETIRER |
| F11 | Une sauvegarde déclarée ne prouve pas seule la restauration.                                               | DEDUCTION      | S07                                 | Continuité du cas réel                         | VERIFIE   |
| F12 | Un objectif de reprise identique convient à tous les MVP.                                                  | RECOMMANDATION | S07 ne le soutient pas              | Universel                                      | A_RETIRER |
| F13 | ASVS 5.0.0 est la version stable consultée.                                                                | FAIT           | S08                                 | Release du 30 mai 2025, consultée 2026-08-02   | VERIFIE   |
| F14 | La Logging Cheat Sheet recommande de considérer les échecs du mécanisme et les données à exclure.          | FAIT           | S09                                 | Page vivante au 2026-08-02                     | VERIFIE   |
| F15 | WCAG 2.2 est une W3C Recommendation du 12 décembre 2024.                                                   | FAIT           | S10                                 | Version citée                                  | VERIFIE   |
| F16 | Satisfaire une sélection de critères WCAG conclut seul à toutes les obligations françaises.                | DEDUCTION      | S10                                 | Analyse juridique absente                      | A_RETIRER |
| F17 | Les webhooks Stripe exposent des événements utiles aux changements d’état d’abonnement.                    | FAIT           | S11                                 | Stripe uniquement, page vivante                | VERIFIE   |
| F18 | Stripe est obligatoire pour tout MVP SaaS.                                                                 | RECOMMANDATION | S11                                 | Fournisseur non choisi                         | A_RETIRER |
| F19 | Un achat autonome exige que les états et échecs du paiement retenu aient une conséquence explicite.        | RECOMMANDATION | S11 et contrat du guide             | Seulement si achat autonome                    | VERIFIE   |
| F20 | Une vente par contrat et facture peut rester manuelle si responsabilité, preuve et charge sont écrites.    | RECOMMANDATION | Contrat P1                          | Pilote borné et revue humaine                  | VERIFIE   |
| F21 | Les sept familles sont toujours sept modules logiciels à construire.                                       | DEDUCTION      | Contrat P1                          | Universel                                      | A_RETIRER |
| F22 | Les sept familles doivent toutes recevoir une décision explicite.                                          | RECOMMANDATION | Gel d’entrée et moteur              | Chaque contrat P1                              | VERIFIE   |
| F23 | Les traitements exacts sont CONSTRUIRE, MANUEL, INTEGRER, REPORTER et INCONNU.                             | FAIT           | Gel d’entrée et moteur              | P1                                             | VERIFIE   |
| F24 | Une famille nécessaire peut être reportée si le score global reste élevé.                                  | DEDUCTION      | Moteur sans score                   | P1                                             | A_RETIRER |
| F25 | Le premier STOP applicable fixe le statut.                                                                 | FAIT           | Moteur pur et tests                 | P1                                             | VERIFIE   |
| F26 | Une opération manuelle se calcule en minutes × occurrences par client × clients.                           | CALCUL         | Gel d’entrée et moteur              | Unités déclarées                               | VERIFIE   |
| F27 | La capacité manuelle totale est la somme des seules opérations planifiées et bornées.                      | CALCUL         | Moteur pur                          | Incidents imprévisibles exclus                 | VERIFIE   |
| F28 | Un incident imprévisible vaut zéro dans la charge.                                                         | DEDUCTION      | Contrat P1                          | Incertitude non planifiée                      | A_RETIRER |
| F29 | Une durée manquante reste inconnue et déclenche un STOP même si une somme partielle est affichée.          | FAIT           | Moteur et tests                     | P1                                             | VERIFIE   |
| F30 | Les entrées acceptent au plus trois décimales et un million pour les bornes techniques exposées.           | FAIT           | Moteur et tests                     | Limite technique de l’outil, pas benchmark     | VERIFIE   |
| F31 | Les limites numériques de l’outil constituent des recommandations commerciales.                            | DEDUCTION      | Aucune                              | Universel                                      | A_RETIRER |
| F32 | Accordia est une entreprise ou un client réel de Hagnéré Code.                                             | SCENARIO       | Aucun                               | Exemple fictif                                 | A_RETIRER |
| F33 | Accordia est un exemple entièrement fictif signalé avant les nombres.                                      | SCENARIO       | Dossier et page P1                  | Illustration seulement                         | VERIFIE   |
| F34 | Pour Accordia, quatre opérations donnent 72 + 60 + 45 + 60 = 237 minutes.                                  | CALCUL         | Moteur et tests                     | 3 clients fictifs                              | VERIFIE   |
| F35 | 237 minutes sur 300 laissent 63 minutes.                                                                   | CALCUL         | Moteur et tests                     | Exemple fictif                                 | VERIFIE   |
| F36 | Avec 5 clients, les mêmes facteurs donnent 395 minutes et dépassent 300 de 95.                             | CALCUL         | Moteur et tests                     | Stress fictif                                  | VERIFIE   |
| F37 | Une capacité critique reportée reste STOP même avec une charge de 177 minutes.                             | SCENARIO       | Moteur et tests                     | Variante fictive                               | VERIFIE   |
| F38 | Une durée manuelle inconnue permet de conclure depuis la somme partielle de 165 minutes.                   | DEDUCTION      | Moteur et tests                     | Variante fictive                               | A_RETIRER |
| F39 | Un prototype peut répondre à une incertitude sans autoriser la production.                                 | RECOMMANDATION | S02, S03 et moteur                  | Format explicitement non productif             | VERIFIE   |
| F40 | Le statut PILOT_CANDIDATE_FOR_REVIEW autorise l’invitation automatique.                                    | DEDUCTION      | Moteur et copie publique            | Revue humaine manquante                        | A_RETIRER |
| F41 | L’outil envoie, stocke ou télécharge les saisies.                                                          | FAIT           | Inspection source et tests          | P1 local                                       | A_RETIRER |
| F42 | L’outil génère un contrat Markdown sélectionnable et copiable.                                             | FAIT           | Outil et tests                      | Navigateur du lecteur                          | VERIFIE   |
| F43 | Le guide utilise uniquement Article et BreadcrumbList comme types JSON-LD.                                 | FAIT           | Helper SEO et test de contenu       | P1                                             | VERIFIE   |
| F44 | La première trace Git du 20 juillet 2026 prouve une publication publique.                                  | INCONNU        | Historique du gel uniquement        | Aucune preuve publique correspondante          | A_RETIRER |
| F45 | La route actuelle est déployée, publiée ou indexée.                                                        | INCONNU        | Aucun build ni contrôle public P1   | État au 2026-08-02                             | INCONNU   |
| F46 | La version P2 contient 3 740 mots visibles et demande 19 minutes à 200 mots/minute.                        | CALCUL         | Rendu statique de test              | Page P2 après contre-audit                     | VERIFIE   |
| F47 | En premier client production, `NON` puis `REPORTER` peut contourner le STOP d’une famille opérationnelle.  | FAIT           | Moteur P1 et test contradictoire P2 | Snapshot P1 vérifié le 2026-08-03              | A_RETIRER |
| F48 | En premier client production, toute famille reportée provoque STOP, même déclarée non nécessaire.          | RECOMMANDATION | S03, S12 et contrat P2              | Domaine de responsabilité, pas module logiciel | VERIFIE   |
| F49 | Un prototype ou pilote peut reporter une famille explicitement non nécessaire à sa preuve.                 | RECOMMANDATION | S01, S02 et contrat P2              | Format borné ; motif et déclencheur exigés     | VERIFIE   |
| F50 | Doubler l’exemple de 3 à 6 clients porte 237 à 474 minutes et dépasse 300 de 174 minutes.                  | CALCUL         | Moteur et tests P2                  | Exemple fictif, facteurs inchangés             | VERIFIE   |
| F51 | Une intégration tierce sans détection d’indisponibilité ni reprise ne peut obtenir un statut candidat.     | RECOMMANDATION | S03, S09, S12 et moteur P2          | Tiers réellement retenu à qualifier            | VERIFIE   |
| F52 | La version P3 contient 3 926 mots visibles et demande 20 minutes à 200 mots par minute.                    | CALCUL         | Rendu statique de test P3           | Page P3 après polish rédactionnel              | VERIFIE   |
| F53 | La version P4 contient 3 945 mots visibles et demande 20 minutes à 200 mots par minute.                    | CALCUL         | Rendu statique de test P4           | Page P4 après antipasse IA                     | VERIFIE   |
| F54 | La période couverte par le test est obligatoire et commune aux occurrences/client et à la capacité totale. | FAIT           | Moteur, outil et tests Q            | Horizon propre au contrat, jamais universel    | VERIFIE   |
| F55 | En achat autonome, `Vente et droits associés` doit être nécessaire (`OUI`).                                | RECOMMANDATION | S11 et contrat Q                    | Mode autonome uniquement                       | VERIFIE   |
| F56 | Une somme incomplète conserve ses nombres exploitables mais porte l’état `partiel/inexploitable`.          | FAIT           | Moteur, outil et tests Q            | Aucune inconnue convertie en zéro              | VERIFIE   |
| F57 | Le Markdown exporte période, achat autonome, limites manuelles, équations et raisons du verdict.           | FAIT           | Moteur et tests Q                   | Copie locale, sans stockage ni envoi           | VERIFIE   |
| F58 | Accordia réduit une liste initiale fictive à un résultat vendu et un parcours de test bornés.              | SCENARIO       | Page et moteur Q                    | Illustration fictive seulement                 | VERIFIE   |
| F59 | Les erreurs du formulaire sont reliées aux seuls champs concernés par des identifiants stables.            | FAIT           | Outil et tests Q                    | Revue DOM locale, pas BAT lecteur d’écran      | VERIFIE   |

### Formulations retirées ou interdites

- « sept indispensables au lancement » : transforme les familles en modules ;
- « toujours inclure » : ignore format, client, données, vente et risque ;
- « lancer en N semaines » : aucune base contextuelle ;
- « premiers N clients » : aucun quota universel ;
- « conforme RGPD », « sécurisé », « accessible » : aucun audit permettant la
  conclusion ;
- « la sauvegarde protège les données » : sans restauration testée ;
- « la connexion prouve l’activation » : preuve mal alignée ;
- « Stripe gère le paiement » : responsabilités et droits non décrits ;
- « score MVP » : compensation interdite ;
- « prêt à lancer » : confond candidat et décision humaine.

## G. Calculs et scénarios

### G1. Contrat numérique

#### Formules

Pour chaque opération manuelle bornée :

**charge opération sur la période = minutes par occurrence × occurrences par
client sur toute la période × clients**

Puis :

**charge manuelle totale sur la période = somme des charges des opérations
manuelles bornées**

**capacité restante sur la période = capacité manuelle totale saisie sur cette
même période − charge manuelle totale**

#### Unités et période

- minutes par occurrence ;
- période exacte du test, obligatoire et écrite sans durée universelle ;
- occurrences planifiées par client sur l’ensemble de cette période ;
- nombre entier de clients du test ;
- capacité totale en minutes sur la même période de test ;
- aucune conversion implicite en heures, jours ou personnes.

#### Règles numériques

- aucun facteur prérempli dans le formulaire vide ;
- une période vide produit STOP_REQUIRED_DECISIONS_UNKNOWN ;
- une valeur absente reste null et produit une décision à vérifier ;
- le séparateur accepté est le point ;
- trois décimales au maximum ;
- clients entiers et strictement positifs ;
- minutes par occurrence et occurrences par client strictement positives ;
- capacité totale positive ou nulle ;
- borne technique à 1 000 000 clients ;
- borne technique à 1 000 000 minutes par occurrence ou de capacité ;
- borne technique à 1 000 000 occurrences par client ;
- parsing décimal par BigInt avant conversion d’affichage ;
- multiplication exacte des facteurs à l’échelle, sans arrondi binaire exposé ;
- une opération ou un nombre de clients invalide rend la somme
  `partiel/inexploitable` ; les nombres encore exploitables restent affichés,
  sans capacité restante trompeuse ;
- ces bornes ne sont ni seuils métier ni recommandations de marché.

### G2. Accordia : exemple entièrement fictif

#### Hypothèse et rôles

Accordia est un SaaS B2B fictif de décision sur des devis fournisseurs. La
preuve relie trois rôles fictifs :

1. une administratrice achats invite ;
2. un responsable de site approuve ou refuse ;
3. une opératrice du service retrouve et exporte la décision.

La liste initiale fictive contient huit envies : annuaire fournisseurs,
demandes d’achat, dépôt de devis, circuit de décision, commentaires, signature,
paiement et tableaux de bord. Le test la réduit explicitement au résultat vendu
« obtenir une décision traçable sur un devis fournisseur sans échange de
fichier par courriel ». Son parcours borné conserve seulement l’invitation
nominative, le dépôt contrôlé, l’approbation ou le refus motivé, puis la
restitution et l’export de la décision.

Le format choisi est un pilote accompagné. La vente utilise un contrat et une
facture gérés manuellement. Le maximum saisi est 3 clients et la capacité
manuelle saisie est 300 minutes pour la période fictive « du 7 septembre au 18
octobre 2026 inclus ». Les occurrences par client et cette capacité totale
couvrent l’ensemble de cette même période, sans conversion implicite. Cet
horizon n’est ni une durée recommandée ni une moyenne de marché.

#### Équations réconciliées

| Famille                  | Opération                              | Calcul indépendant | Résultat moteur |
| ------------------------ | -------------------------------------- | ------------------ | --------------- |
| Comptes et accès         | Créer ou reprendre les accès           | 12 × 2 × 3         | 72 min          |
| Données et continuité    | Préparer et contrôler l’import initial | 20 × 1 × 3         | 60 min          |
| Vente et droits associés | Contrôler contrat et facture pilote    | 15 × 1 × 3         | 45 min          |
| Aide et incidents        | Tenir une permanence planifiée         | 10 × 2 × 3         | 60 min          |
| Total                    | Somme des quatre opérations            | 72 + 60 + 45 + 60  | 237 min         |
| Reste                    | Capacité moins charge                  | 300 − 237          | 63 min          |

Test indépendant arithmétique :

- 12 × 2 × 3 = 72 ;
- 20 × 1 × 3 = 60 ;
- 15 × 1 × 3 = 45 ;
- 10 × 2 × 3 = 60 ;
- 72 + 60 + 45 + 60 = 237 ;
- 300 − 237 = 63.

Résultat : PILOT_CANDIDATE_FOR_REVIEW. La revue humaine reste obligatoire et
le total ne prouve ni sécurité, ni conformité, ni capacité à absorber un
incident imprévisible.

### G3. Stress de capacité

Même contrat, mêmes facteurs par client, mais 5 clients :

| Opération | Calcul               | Résultat |
| --------- | -------------------- | -------- |
| Accès     | 12 × 2 × 5           | 120 min  |
| Données   | 20 × 1 × 5           | 100 min  |
| Vente     | 15 × 1 × 5           | 75 min   |
| Aide      | 10 × 2 × 5           | 100 min  |
| Total     | 120 + 100 + 75 + 100 | 395 min  |
| Reste     | 300 − 395            | −95 min  |

Résultat : STOP_MANUAL_CAPACITY_EXCEEDED. Le moteur ne recommande pas
automatiquement d’automatiser. Réduire le nombre de clients, augmenter une
capacité réellement disponible, intégrer, construire ou arrêter sont des
décisions humaines distinctes.

### G3 bis. Doublement exact du volume

Même contrat, mêmes facteurs par client, mais 6 clients au lieu de 3 :

- accès : 12 × 2 × 6 = 144 minutes ;
- données : 20 × 1 × 6 = 120 minutes ;
- vente : 15 × 1 × 6 = 90 minutes ;
- aide : 10 × 2 × 6 = 120 minutes ;
- total : 144 + 120 + 90 + 120 = 474 minutes ;
- reste : 300 − 474 = −174 minutes.

Résultat : STOP_MANUAL_CAPACITY_EXCEEDED. Le doublement de la population
double exactement la charge dans cet exemple parce que tous les facteurs par
client restent inchangés ; ce n’est ni une loi de marché ni une hypothèse sur
les économies d’échelle d’un autre produit.

### G4. Capacité critique reportée

La famille Données et continuité, déclarée nécessaire, passe de MANUEL à
REPORTER. Sa charge de 60 minutes disparaît du total :

**237 − 60 = 177 minutes**

Le résultat reste STOP_CRITICAL_CAPABILITY_DEFERRED. La capacité restante
n’annule pas le report critique.

### G5. Responsable et durée inconnus

La famille Comptes et accès perd son responsable et ses minutes par
occurrence. Son équation de 72 minutes n’est plus calculable. Les trois autres
opérations restent visibles :

**60 + 45 + 60 = 165 minutes de sous-total des seules opérations
exploitables**

Cette somme ne permet aucune conclusion. Le résultat est
STOP_MANUAL_OPERATION_UNBOUNDED. Le moteur, l’outil et le Markdown affichent
`partiel/inexploitable`, conservent les facteurs saisis et n’affichent aucune
capacité restante. Le Markdown porte aussi « responsable à vérifier », « minutes
par occurrence à vérifier » et la limite explicite de chaque opération.

### G6. Achat autonome incomplet

Le mode de vente devient ACHAT_AUTONOME. Les états nominaux sont saisis, mais
la détection de l’échec, l’information, la conséquence sur les droits et la
reprise restent absentes.

Résultat : STOP_REQUIRED_DECISIONS_UNKNOWN. Aucun fournisseur n’est imposé ;
les états officiels de Stripe illustrent seulement le type de décisions à
fermer si Stripe est effectivement retenu.

Dans ce mode, la famille `salesEntitlements` doit aussi porter
`necessaryForTest = OUI`. Le contre-cas où les états et la procédure sont
complets mais où la famille vaut `NON` + `REPORTER` reste
STOP_REQUIRED_DECISIONS_UNKNOWN ; il ne devient plus candidat au pilote.

### G7. Prototype non productif

Le contrat complet peut être rejoué avec PROTOTYPE_SANS_PRODUCTION. Le moteur
retourne TEST_FORMAT_NOT_PRODUCTION : le test peut répondre à l’incertitude,
mais ne permet pas de conclure à l’accueil d’un client dépendant du service.

### G7 bis. Contournement `NON` puis `REPORTER` en production

Le snapshot P1 permettait de passer
`Administration et exploitation.necessaryForTest` à `NON`, son traitement à
`REPORTER`, puis le format à `PREMIER_CLIENT_PRODUCTION`. Les champs textuels
restant remplis, le moteur rendait à tort
FIRST_CLIENT_CANDIDATE_FOR_REVIEW.

P2 retire ce faux positif : pour un premier client en production, toute famille
reportée déclenche STOP_CRITICAL_CAPABILITY_DEFERRED, quelle que soit la valeur
`OUI` ou `NON` de nécessité. Cette règle ne rend aucune fonctionnalité
universelle. Elle exige seulement un traitement actuel du domaine ;
`CONSTRUIRE`, `MANUEL` et `INTEGRER` restent possibles. Pour un prototype ou un
pilote accompagné, `NON` puis `REPORTER` reste accepté si la motivation, le
responsable, la preuve, la reprise et le déclencheur sont renseignés.

### G8. Ordre de priorité déterministe

1. STOP_REQUIRED_DECISIONS_UNKNOWN ;
2. STOP_CRITICAL_CAPABILITY_DEFERRED ;
3. STOP_MANUAL_OPERATION_UNBOUNDED ;
4. STOP_MANUAL_CAPACITY_EXCEEDED ;
5. TEST_FORMAT_NOT_PRODUCTION ;
6. PILOT_CANDIDATE_FOR_REVIEW ;
7. FIRST_CLIENT_CANDIDATE_FOR_REVIEW.

Les quatre premiers sont des STOP. Les trois suivants décrivent le format ou
un candidat à revue. Aucun statut ne constitue une autorisation automatique.

### G9. Cas plus simple, mauvais fits et arrêt

| Situation                                        | Option préférable possible                                 | Critère de décision                                            |
| ------------------------------------------------ | ---------------------------------------------------------- | -------------------------------------------------------------- |
| Le problème ou l’acheteur reste incertain        | Retour au guide de validation, entretien ou pré-engagement | Aucun produit exploité n’est nécessaire à la prochaine preuve. |
| Le parcours reste mal compris                    | Prototype avec données fictives                            | La production ajouterait du risque sans apprendre davantage.   |
| Le résultat peut être livré comme service        | Pilote concierge accompagné                                | La charge et la limite sont bornées.                           |
| Une capacité générique existe déjà               | Intégration d’un service                                   | États, erreurs, coûts et sortie restent acceptables.           |
| Les responsabilités ne peuvent pas être assumées | Report ou arrêt                                            | Le test exposerait un client sans reprise.                     |
| Aucun résultat du test ne changerait la décision | Ne rien construire                                         | Le coût évité est documenté.                                   |

### G10. Occurrences à réconcilier

Les mêmes valeurs doivent apparaître sans contradiction dans :

- le moteur pur ;
- les tests du moteur ;
- le tableau calculé de la page ;
- la prose Accordia ;
- le visuel 4:3 ;
- le présent dossier ;
- le Markdown généré par l’outil ;
- la période commune aux occurrences/client et à la capacité totale ;
- les états et la procédure d’achat autonome, ainsi que la nécessité `OUI` de
  la famille `salesEntitlements` ;
- la limite explicite de chaque opération et l’état
  `partiel/inexploitable` lorsque la somme est incomplète ;
- les contre-cas 3, 5, 6, 177 et 165 minutes ;
- le doublement 474/−174 et le STOP production `NON` + `REPORTER`.

Un contrôle P1 a détecté puis corrigé des libellés décalés dans la prose et le
visuel 4:3. Une assertion dédiée compare désormais les familles, équations,
rendu statique et texte SVG au résultat du moteur.

## H. Journal

### H0. Historique récupéré, explicitement non probant

Le gel fournit les seules données historiques conservées :

- première apparition Git au commit
  c42fb1b9cc7b4bbbf524a086de43cb5baee61e89, horodatée
  2026-07-20T15:19:41+02:00 ;
- dernier snapshot avant retrait : page 1 287 lignes, SHA-256
  8f3b4bb5f66e54b60656cc97afb9e52d267626b482771c37a946c35ce1cba4ce ;
- image OG historique, SHA-256
  3dec79ce5ed85ad961c8dca523e0762e5b821fe822480435ffbace0c31cbb5df ;
- retrait au commit 1e2abea69289e9d856dfeba392237f11bed6d293 le
  2026-07-29T17:01:03+02:00 ;
- ancien dossier au gel, SHA-256
  305cd25d2667020f0f8971f34c3976b56be27c3adac3708db4c3d410c96c87f1.

Ces valeurs ne prouvent ni publication, ni qualité, ni BAT actuel. Les
consultations du 20 juillet, l’ancien score, les comptes de mots, l’autorisation
historique et tout ancien verdict sont périmés. Aucun ancien paragraphe ou plan
n’a été conservé comme base éditoriale.

### H1. Passe 1 — entrée

| Champ               | Valeur                                                                             |
| ------------------- | ---------------------------------------------------------------------------------- |
| Agent               | /root/mvp_saas_p1, distinct des futures passes                                     |
| État d’entrée       | Route statique absente, dossier historique présent, freeze non suivi mais immuable |
| Worktree            | /Users/quentinhagnere/Developpement/Hagnere-Code-wt-mvp-saas-quoi-inclure          |
| Branche/base        | codex/mvp-saas-quoi-inclure / 26042f1787f0fe7b88d14a1398480a94177ff5b0             |
| Contraintes         | Aucun fichier partagé, serveur, build, commit, push ou mutex                       |
| Décision éditoriale | Reconstruction intégrale depuis le lecteur, la preuve et les sources actuelles     |

### H2. Fichiers lus

- gel d’entrée complet, 314 lignes ;
- ancien dossier historique complet, 278 lignes au gel ;
- prompt maître complet, 1 906 lignes ;
- guides récents : validation d’idée, cahier des charges et calendrier SaaS ;
- composants premium, blocs de contenu, SEO, auteur et outils de guides ;
- registre de guides, redirects legacy et routes actives, en lecture seule ;
- sources primaires S01 à S11 ;
- pages concurrentes C01 à C06.

### H3. Recherches

- question française et variantes « MVP SaaS quoi inclure » ;
- source méthodologique primaire du MVP ;
- distinction alpha, bêta privée et exploitation ;
- minimisation, protection dès la conception et sécurité ;
- habilitations, secrets, environnements et données de test ;
- sauvegarde contre restauration prouvée ;
- ASVS stable et journalisation ;
- WCAG 2.2 ;
- états d’un paiement autonome ;
- contradictions parcours minimal contre fondations enterprise ;
- alternative manuelle, service existant, no-code et arrêt.

### H4. Faits ajoutés, corrigés ou retirés

Ajoutés :

- trois formats de test avec conclusion maximale ;
- sept familles exactes et cinq traitements exacts ;
- sept statuts exacts sans score ;
- charge manuelle en unités réconciliables ;
- statut candidat séparé de la décision humaine ;
- sources datées, versionnées et limitées ;
- alternatives et mauvais fits.

Corrigés pendant P1 :

- compatibilité TypeScript des calculs BigInt, sans modifier les résultats ;
- casse et espace insécable dans deux attentes de tests ;
- temps de lecture provisoire 24 remplacé par 18 après mesure de 3 508 mots ;
- libellés erronés de quatre équations Accordia dans la prose et le visuel
  4:3, réalignés sur le moteur.

Retirés ou refusés :

- nombre universel de fonctionnalités ;
- sept « indispensables » présentés comme modules ;
- délai, quota de clients, activation ou taux de marché ;
- conformité, sécurité ou accessibilité déclarées ;
- score global ;
- téléchargement tableur ;
- publication supposée depuis Git.

### H5. Fichiers P1 modifiés

- docs/research/mvp-saas-quoi-inclure.md ;
- docs/research/manifests/mvp-saas-quoi-inclure-p1.sha256, à générer après
  contrôles ;
- src/app/guides/mvp-saas-quoi-inclure/page.tsx ;
- src/app/guides/mvp-saas-quoi-inclure/opengraph-image.tsx ;
- src/app/guides/mvp-saas-quoi-inclure/mvp-contract-engine.ts ;
- src/app/guides/mvp-saas-quoi-inclure/mvp-contract-engine.test.ts ;
- src/app/guides/mvp-saas-quoi-inclure/mvp-contract-tool.tsx ;
- src/app/guides/mvp-saas-quoi-inclure/mvp-contract-tool.test.tsx ;
- src/app/guides/mvp-saas-quoi-inclure/content-quality.test.ts ;
- trois SVG dédiés et leurs trois WebP.

L’agent P1 n’a pas modifié le contenu du freeze pendant la production
initiale. Son formatage mécanique ultérieur par l’orchestrateur G1 est consigné
en H11. Aucun autre fichier de travail n’est modifié.

### H6. Artefact signature

Moteur pur et outil local de contrat du premier client :

- formulaire vide par défaut ;
- exemple fictif chargé uniquement sur action ;
- aucun fetch, socket, cookie, stockage local ou stockage de session ;
- aucune génération de fichier ni téléchargement ;
- Markdown sélectionnable et copiable ;
- labels, fieldsets et annonces accessibles ;
- exactitude décimale contrôlée avant conversion ;
- équations, inconnues et décision visibles.

### H7. Tests et contrôles P1

État du contrôle final avant génération du manifeste :

- installation locale des dépendances : PASS ;
- Prettier check du dossier et des sources : PASS ;
- ESLint ciblé, zéro avertissement : PASS ;
- TypeScript sans émission : PASS après correction BigInt et nom d’export ;
- tests moteur, outil et contenu : PASS, 3 fichiers et 43/43 tests ;
- XML des trois SVG : PASS ;
- trois WebP : PASS, RIFF/WEBP, sRGB et dimensions 1600 × 900,
  1200 × 900 et 900 × 900 ;
- inspection visuelle des trois WebP : PASS après correction de contraste et
  réconciliation des familles ;
- mesure de lecture : PASS, 3 508 mots, 18 minutes ;
- Article et BreadcrumbList seulement : PASS ;
- liens internes vers routes actives : PASS ;
- interdiction réseau, stockage, téléchargement et tableur : PASS ;
- git diff --check du fichier suivi et contrôle équivalent des fichiers non
  suivis : PASS ;
- portée Git : PASS, uniquement freeze formaté mécaniquement sans changement
  sémantique, dossier, manifeste et deux répertoires du slug ;
- build, serveur et BAT : non exécutés conformément au mandat P1.

### H8. Risques résiduels et limites

- Aucun build ni serveur n’est autorisé à P1 : le rendu servi, le thème, le
  responsive, le zoom, le clavier, le lecteur d’écran et l’impression restent à
  contrôler dans les passes suivantes.
- Le guide n’est pas intégré au registre partagé ; la route reste hors sitemap
  et la redirection legacy n’est pas modifiée.
- Les pages vivantes peuvent évoluer après le 2 août 2026.
- Les mesures juridiques, techniques et contractuelles restent contextuelles.
- Le bouton de copie dépend des capacités du navigateur ; le texte reste
  sélectionnable en repli.
- L’outil ne sauvegarde volontairement aucune saisie.

### H9. Gate P1

Gate de contenu et de code : **PRET_POUR_G1**.

| Axe P1                                  |      Score |
| --------------------------------------- | ---------: |
| Intention et décision lecteur           |     98/100 |
| Exactitude, sources et limites          |     96/100 |
| Pédagogie et cas reproductible          |     97/100 |
| Moteur, équations et inconnues          |     98/100 |
| SEO, schémas et maillage local          |     94/100 |
| Accessibilité vérifiable dans la source |     93/100 |
| **Score P1 pondéré**                    | **96/100** |

Défauts locaux connus après contrôle : **0 P0 / 0 P1 / 0 P2**.

Le manifeste exact est généré seulement après cette dernière écriture du
payload. Il couvre le freeze, le dossier et tous les fichiers du slug, et
exclut tous les manifestes. Son propre SHA-256 est communiqué dans le rapport
P1 plutôt qu’inséré ici : l’insérer dans le dossier modifierait récursivement
le payload qu’il certifie.

### H10. État Git, intégration et publication

| État                     | Valeur P1                                                                          |
| ------------------------ | ---------------------------------------------------------------------------------- |
| Git add/commit/push      | Non exécutés, interdits à l’agent P1                                               |
| Intégration dans main    | Non                                                                                |
| Build                    | Non exécuté                                                                        |
| Route servie             | Non vérifiée                                                                       |
| Déploiement              | Non                                                                                |
| Publication              | Non prouvée                                                                        |
| URL publique actuelle    | Historique de redirection seulement ; non recontrôlée comme nouvelle page après P1 |
| Indexation               | Non prouvée                                                                        |
| Score final P1           | 96/100 ; score éditorial de la passe, jamais score produit dans l’outil            |
| P0/P1/P2 connus          | 0 / 0 / 0                                                                          |
| Contre-audit transversal | Réservé aux passes indépendantes ultérieures                                       |

### H11. Boucle de correction G1 du 3 août 2026

Le replay de l’orchestrateur G1 a relevé un unique avertissement Prettier sur
le freeze. L’orchestrateur a formaté mécaniquement ce Markdown sans changement
sémantique ; l’agent P1 ne l’a pas réécrit. Ce changement rend le manifeste P1
précédent, dont le SHA-256 externe était
92a4448dd3e4d012f5701524e26888fc5264a2bc0b788d0406d6f74a85814618,
obsolète. Après cette écriture, les contrôles P1 complets et les 15 payloads
sont rejoués puis le seul manifeste P1 est régénéré. Son nouveau SHA-256 reste
communiqué dans le rapport externe afin d’éviter toute référence récursive.

### H12. Passe 2 contradictoire du 3 août 2026

#### Entrée et intégrité

- agent : `/root/mvp_saas_p2`, distinct de P1 ;
- manifeste P1 relu avant toute édition : 15/15 payloads conformes ;
- SHA-256 externe P1 vérifié :
  `b5fda49373dc93597ae9bbe4c153c7356e4af642fcf74d3e33489afc01411280` ;
- gel d’entrée et manifeste P1 conservés sans modification ;
- périmètre respecté : dossier, fichiers et médias du seul slug, puis manifeste
  P2 ; aucun fichier partagé, Git, registre, verrou, serveur, build ou BAT.

#### Sources et contre-sources rouvertes

Le 3 août 2026, P2 a rouvert les sources utiles à la contradiction : Lean
Startup sur le caractère non formule du MVP ; GOV.UK Beta sur le service de bout
en bout, le support et la capacité de l’équipe ; GOV.UK Live sur
l’exploitation soutenable ; le RGPD consolidé et les guides CNIL sur la portée
conditionnelle aux données et au risque ; ANSSI v1.1 sur le test de restauration
; OWASP ASVS 5.0.0 et Logging Cheat Sheet sur les contrôles et défaillances ;
WCAG 2.2 Recommendation du 12 décembre 2024 ; documentation Stripe sur les
états et échecs d’abonnement. Les pages vivantes restent datées de leur
consultation. Aucune de ces sources ne transforme les sept familles en sept
fonctions universelles ni ne prouve une conformité.

La contre-source décisive ajoutée est S12. GOV.UK Live demande de penser
support, responsables, disponibilité, mesure, sécurité, accessibilité et
retrait lorsqu’un service est réellement exploité, mais dans le cadre public
britannique. P2 en déduit une règle bornée de contrat : un premier client en
production ne peut pas reporter une famille entière ; le domaine peut toutefois
être traité manuellement ou par intégration.

#### Affirmations corrigées ou retirées

- corrigée : le snapshot P1 rendait
  FIRST_CLIENT_CANDIDATE_FOR_REVIEW lorsque
  `Administration et exploitation` passait à `NON` puis `REPORTER` ;
- retirée du comportement public : l’idée qu’un libellé « non nécessaire »
  puisse effacer un domaine de responsabilité d’un premier client en production
  ;
- précisée : `REPORTER` reste défendable pour un prototype ou pilote borné si
  la famille n’est pas nécessaire à la preuve et si motif, responsable, preuve,
  reprise et déclencheur restent écrits ;
- précisée : l’indisponibilité d’un service intégré exige détection, mode
  dégradé, reprise et sortie ; l’intégration ne transfère pas la responsabilité
  de la décision ;
- aucune affirmation juridique, financière, de sécurité ou d’accessibilité n’a
  été renforcée en promesse ; aucune source n’autorise un lancement.

#### Calculs reproduits indépendamment

- 12 × 2 × 3 = 72 ; 20 × 1 × 3 = 60 ; 15 × 1 × 3 = 45 ;
  10 × 2 × 3 = 60 ;
- 72 + 60 + 45 + 60 = 237 ; 300 − 237 = 63 ;
- à 5 clients : 120 + 100 + 75 + 100 = 395 ; 300 − 395 = −95 ;
- doublement exact à 6 clients : 144 + 120 + 90 + 120 = 474 ;
  300 − 474 = −174 ;
- report de la continuité : 237 − 60 = 177, toujours STOP ;
- durée inconnue sur les accès : 60 + 45 + 60 = 165, somme partielle sans
  conclusion ;
- produit maximal testé par BigInt : 1 000 000 × 1 000 000 × 1 000 000 =
  1 000 000 000 000 000 000, sans débordement `Number` exposé.

#### Cas limites et ordre des STOP

P2 a testé : formulaire vide ; capacité zéro ; minutes et occurrences zéro ;
négatifs ; décimales exactes ; plus de trois décimales ; espaces extérieurs ;
virgule ; notation scientifique ; `NaN` ; `Infinity` ; bornes exactes et
dépassements ; duplicat et famille absente ; responsable ou durée inconnus ;
tiers intégré indisponible sans reprise ; achat autonome incomplet ; report
critique ; `NON` + `REPORTER` sur chacune des sept familles en production ;
priorités entre décision inconnue, report critique, manuel non borné et capacité
dépassée. Une capacité de zéro reste une décision valide mais provoque le STOP
de dépassement si une charge positive existe ; une opération manuelle déclarée
à zéro reste non bornée.

#### Réconciliation et contrôles P2

- page, moteur, outil, Markdown généré et dossier portent la même règle de
  production ;
- les quatre équations 72/60/45/60, le total 237, la capacité 300, le reste 63
  et les visuels SVG/WebP restent réconciliés ;
- le stress 395/−95, le doublement 474/−174, les sommes 177 et 165, le paiement
  incomplet et le report de production figurent dans la page ou le dossier et
  sont rejoués par tests ;
- Prettier Markdown/TS/TSX : PASS ;
- Vitest ciblé : PASS, 3 fichiers et 50/50 tests ;
- ESLint ciblé TS/TSX : PASS, zéro avertissement ;
- TypeScript sans émission : PASS ;
- XML des trois SVG : PASS ;
- trois WebP : PASS et inspection visuelle cohérente, dimensions 1600 × 900,
  1200 × 900 et 900 × 900 ;
- page : 3 740 mots visibles et 19 minutes à 200 mots/minute ;
- `git diff --check` et contrôle équivalent des fichiers non suivis : PASS ;
- build, serveur et BAT : non exécutés, hors mandat P2.

#### Gate et limites résiduelles

Décision P2 : **GO_PASSE_3**. Défauts locaux connus : **0 P0 / 0 P1 / 0 P2 /
0 P3**. Le moteur sépare toujours statut déterministe et revue humaine. La
portée juridique, contractuelle, RGPD, sécurité et accessibilité reste à
qualifier sur le produit réel. L’accessibilité du rendu servi, les dimensions
responsive, le clavier en navigateur réel, l’impression et le repli de copie
restent à vérifier dans les passes autorisées à lancer un serveur et un BAT.

Le manifeste P2 couvre exactement les 15 mêmes payloads que P1, hors
manifestes. Son SHA-256 externe est communiqué après sa génération, et n’est pas
inséré ici afin de ne pas modifier récursivement le payload.

### H13. Boucle de correction G2 du 3 août 2026

L’orchestrateur G2 a prononcé un `NO_GO_P2` ciblé sur deux divergences de copie,
sans remettre en cause les calculs ni la règle de production :

1. le paragraphe Accordia attribuait à tort l’absence d’une durée ou d’un
   responsable au STOP des décisions inconnues, alors que le moteur et G5
   rendent `STOP_MANUAL_OPERATION_UNBOUNDED` ;
2. le mémo d’ordre ne mentionnait que la capacité nécessaire reportée et
   omettait la famille reportée en premier-client production malgré `NON`.

P2 a remplacé la première formulation par le STOP public exact « opération
manuelle non bornée », prioritaire sur le dépassement de capacité. Le deuxième
niveau du mémo couvre désormais les deux branches du moteur. Les messages de
capacité reportée sont aussi grammaticalement neutres pour tous les libellés :
`Report critique : … est nécessaire au test` et
`Report interdit en production : …, même si la famille est déclarée non
nécessaire`.

Les assertions moteur, outil et contenu contrôlent les libellés exacts et
l’absence de l’ancienne contradiction. Après correction : Prettier PASS,
Vitest ciblé 50/50 PASS, ESLint PASS, TypeScript PASS, XML PASS et diff-check
PASS. Le freeze et le manifeste P1 restent inchangés. Défauts connus après la
nouvelle porte G2 : **0 P0 / 0 P1 / 0 P2 / 0 P3**. Décision :
**GO_PASSE_3**. Le seul manifeste P2 est régénéré après cette écriture.

### H14. Passe 3 — polish rédactionnel du 3 août 2026

#### Entrée et périmètre

- agent : `/root/mvp_saas_p3`, distinct de P1 et P2 ;
- gel d’entrée lu intégralement et conservé sans modification ;
- SHA-256 externe du manifeste P1 vérifié :
  `b5fda49373dc93597ae9bbe4c153c7356e4af642fcf74d3e33489afc01411280` ;
- manifeste P2 vérifié sur 15/15 payloads avant toute édition ;
- SHA-256 externe du manifeste P2 vérifié :
  `70880e8c0eb11c11e395cc56c4ea6d287b0e6ad113c048e78744a5af0739dd55` ;
- gel, manifestes P1/P2, moteur pur, tests du moteur, image Open Graph et
  médias éditoriaux laissés inchangés ;
- aucune intervention sur les fichiers partagés, un autre guide, Git, le
  registre, les verrous, un serveur, un build ou un BAT.

#### Lecture pressée, méfiante et mobile

- la réponse directe nomme désormais le MVP comme un test borné avant de
  définir le « contrat de test » ;
- les dix titres de section portent seuls leur décision ou leur action ;
- les paragraphes qui empilaient format, responsabilités, reprise, sécurité et
  sortie sont divisés par idée principale ;
- le « déclencheur de réexamen » est traduit dès son premier usage comme
  l’événement observable qui oblige à revoir le choix ;
- le « statut candidat » signifie explicitement « prêt à relire », jamais
  autorisé à lancer ;
- les libellés de l’outil posent des questions concrètes : responsable, preuve,
  échec, limite et moment où revoir le choix ;
- le label d’agence « Faux positifs et misfits » disparaît, comme les sigles
  `SSO` et `multi-tenant` non expliqués ;
- les variantes Accordia et la revue humaine sont réparties en paragraphes
  courts, plus faciles à balayer sur un écran étroit ; aucun BAT mobile n’est
  revendiqué à cette passe.

#### Cohérence héros, corps, FAQ, CTA et metadata

- la description SEO et la carte annoncent la décision, les cinq choix et la
  charge calculée sans promesse de lancement ;
- le héros présente les cinq choix en français courant et rappelle
  qu’inconnue ne signifie pas zéro ;
- le CTA corrige « sept traitements » en « sept familles et leurs choix » et
  conserve la possibilité d’un test plus simple ou d’un STOP ;
- la légende erronée « cinq variantes » est corrigée en « sept variantes » ;
- la FAQ répond dès la première phrase : aucun nombre universel, oui sous
  conditions, pas nécessairement, non, ou action immédiate ;
- les réponses FAQ sont raccourcies pour orienter l’action sans recopier les
  développements du corps ;
- le temps de lecture passe à 20 minutes pour 3 926 mots visibles, à 200 mots
  par minute.

#### Faits, calculs et nuances laissés inchangés

- Accordia reste entièrement fictif avant tout nombre ;
- 237 minutes sur 300 laissent 63 minutes ;
- 395 minutes dépassent 300 de 95 minutes ;
- 474 minutes laissent −174 minutes par rapport à 300, uniquement parce que la
  population fictive double à facteurs inchangés ;
- 177 minutes restent un STOP lorsque la continuité nécessaire est reportée ;
- 165 minutes restent une somme partielle sans conclusion lorsque le
  responsable ou la durée manque ;
- sept familles, cinq traitements, sept statuts et leur ordre de priorité sont
  inchangés ;
- en premier client production, `NON` puis `REPORTER` reste un STOP ; manuel et
  intégration restent possibles ;
- l’indisponibilité d’un tiers exige toujours détection, solution de repli,
  reprise et sortie ;
- aucune inconnue n’est convertie en zéro ; aucun score, fait, seuil, source,
  certitude juridique, promesse de sécurité ou autorisation de production
  n’est ajouté ;
- le moteur, ses calculs BigInt, ses statuts, le Markdown généré et sa portée
  locale restent inchangés.

#### Contrôles P3

- Prettier sur Markdown, TS et TSX : PASS ;
- Vitest ciblé : PASS, 3 fichiers et 51/51 tests ;
- ESLint ciblé : PASS, zéro avertissement ;
- TypeScript sans émission : PASS ;
- XML des trois SVG : PASS ;
- trois WebP : PASS, signatures et dimensions inchangées ;
- contrôle des espaces et diff-check : PASS ;
- build, serveur et BAT : non exécutés, conformément au mandat P3.

#### Gate P3 et limites

Lecture pressée : PASS. Lecture méfiante : PASS. Lecture mobile sur la source :
PASS, sans revendiquer un rendu navigateur. Les limites juridiques,
contractuelles, RGPD, sécurité et accessibilité restent contextuelles. Le repli
de copie reste le texte Markdown sélectionnable ; son comportement servi sera
à contrôler dans une passe autorisée au BAT.

Défauts locaux connus : **0 P0 / 0 P1 / 0 P2 / 0 P3**. Décision P3 :
**GO_PASSE_4**. Le manifeste P3 couvre exactement les 15 payloads de P2, hors
manifestes. Son SHA-256 externe est communiqué après sa génération et n’est pas
inséré ici pour éviter une référence récursive.

### H15. Passe 4 — antipasse IA du 3 août 2026

#### Entrée, agent et périmètre

- agent : `/root/mvp_saas_p4`, distinct de P1, P2 et P3 ;
- prompt maître relu intégralement, dont P4 et G4 ; gel, dossier, page, outil et
  moteur relus en entier ; chaque H2 a ensuite été contrôlé isolément ;
- manifeste P3 vérifié sur 15/15 payloads avant toute édition ;
- SHA-256 externe P3 vérifié :
  `22bf14ad81b2b988564da7cd70d9d9db7aec50b400cd580b3654c8986c3dc1dc` ;
- gel d’entrée et manifestes P1, P2 et P3 laissés inchangés ;
- moteur pur, outil, tests du moteur et de l’outil, image Open Graph, SVG et
  WebP laissés inchangés ;
- fichiers édités : page, test de contenu et présent journal ; le manifeste P4
  est créé seulement après les contrôles finaux ;
- aucun fichier partagé, autre guide, Git, registre, verrou, serveur, build ou
  BAT touché.

#### Motifs repérés et corrections

L’audit a recherché les quinze motifs du prompt dans le héros, les tableaux, les
dix sections, le scénario, l’outil, la FAQ, le CTA, les sources et la
conclusion. Les défauts réellement présents étaient rédactionnels : aucun
masquait une erreur de moteur ou de calcul.

| Motif contrôlé                | Constat et traitement P4                                                                                                                                                        |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Autosatisfaction              | Aucun résultat commercial ni superlatif de qualité. Les limites de revue, de production et de publication restent visibles.                                                     |
| Triptyques réflexes           | Les séries purement rythmiques ont été rompues. Les listes de champs, familles, états et preuves sont conservées lorsqu’elles portent le contrat.                               |
| Symétrie binaire              | Les ouvertures « pas X, mais Y » sur le MVP, les familles et le calcul ont été remplacées par une définition, une cause et une action.                                          |
| Adjectifs vendeurs            | « Bon premier test », « moyen le plus rapide » et « intégration plus juste » ont été remplacés par l’incertitude à fermer et les conditions observables.                        |
| Métaphores forcées            | Aucune métaphore ajoutée ; « ligne d’arrivée » reste dans un mémo opératoire avec une phrase à remplir, pas comme argument.                                                     |
| Parenthèses en cascade        | Aucune cascade repérée dans la copie publique ; les précisions utiles restent dans la phrase principale.                                                                        |
| Connecteurs robotiques        | « Il faut donc », « En revanche » et le déictique « Ici » ont été retirés. Les transitions nomment désormais le déclencheur ou la conséquence.                                  |
| Conclusion répétitive         | La revue finale distingue le statut moteur des preuves de release ; elle ne résume pas à nouveau les dix sections.                                                              |
| Longueur uniforme             | Les questions en rafale du parcours ont été converties en phrases courtes puis en une consigne développée. Les sections conservent des rythmes différents.                      |
| Verbes vagues                 | « Peut être soumis », « il faut qualifier » et « peut convenir » dans la narration deviennent « soumettez », « attribuez », « consignez », « rejouez » ou « corrigez ».         |
| Formulations administratives  | Les passifs de revue ont été remplacés par la personne ou l’action responsable. Les mentions de release restent factuelles parce qu’elles empêchent une fausse preuve publique. |
| Inversions artificielles      | Aucune inversion conservée hors questions réelles de tableau ou de FAQ.                                                                                                         |
| Puces parallèles mais pauvres | Les tableaux comparatifs restent parallèles parce que leurs colonnes rapprochent situation, décision et preuve. Le mémo des STOP conserve l’ordre déterministe.                 |
| Dramatisation creuse          | Aucun vocabulaire d’urgence ou de catastrophe. Le mot STOP reste le code public exact du moteur et nomme une décision non compensable.                                          |
| Logique implicite             | Les phrases révisées relient format et conclusion, client réel et responsabilités, inconnue et STOP, intégration tierce et reprise, preuve locale et état de release.           |

Contrôles supplémentaires : la série de questions rhétoriques qui ouvrait la
journée du client est devenue une suite d’actions ; « Dans ce guide », « Ici »
et « Le guide recommande-t-il » ont disparu ; les faux contrastes du calcul ont
été reformulés positivement. Les titres et plans des trois guides voisins
`valider-idee-saas-avant-developper`, `cahier-des-charges-saas` et
`combien-de-temps-developper-saas` ont été comparés : le parcours en dix étapes,
le contrat en sept familles et l’ordre des STOP restent propres à ce guide.

#### Conséquence ou action de chaque H2

| H2  | Sortie obtenue par le lecteur                                                                   |
| --- | ----------------------------------------------------------------------------------------------- |
| 01  | Délimiter le minimum par la preuve et attribuer toute responsabilité nécessaire.                |
| 02  | Choisir le format, écrire sa conclusion maximale et soumettre le bon niveau de revue.           |
| 03  | Décrire la journée, attribuer chaque échec et choisir l’événement réellement probant.           |
| 04  | Donner à chaque famille un choix, un responsable, une preuve, une reprise et un déclencheur.    |
| 05  | Calculer la charge manuelle déclarée et maintenir STOP lorsqu’une opération reste inconnue.     |
| 06  | Rejouer les variantes Accordia selon l’ordre déterministe, sans compenser un STOP par un total. |
| 07  | Remplir le contrat local, corriger les entrées rejetées et copier le Markdown.                  |
| 08  | Comparer prototype, service accompagné, intégration, arrêt et développement.                    |
| 09  | Faire relire le contrat par une personne responsable et documenter la décision.                 |
| 10  | Fermer les questions résiduelles avant de figer le périmètre.                                   |

#### Passages conservés et faits inchangés

Les passages denses ont été conservés lorsqu’ils servent la décision : six
entrées initiales, sept familles, cinq traitements, sept statuts, ordre des
quatre STOP, limites numériques, champs de paiement autonome, portée RGPD,
restauration testée, contrôles de journalisation, accessibilité, source et
limite. Les tableaux comparatifs restent parallèles pour permettre une lecture
sur une base identique ; ils ne sont pas des puces décoratives.

P4 n’a changé aucun fait, source, calcul, seuil technique, règle, statut, moteur
ou exemple :

- 237 minutes sur 300 laissent 63 minutes ;
- 395 minutes dépassent 300 de 95 minutes ;
- 474 minutes dépassent 300 de 174 minutes lorsque la population fictive passe
  de 3 à 6 à facteurs inchangés ;
- 177 minutes restent un STOP si la continuité nécessaire est reportée ;
- 165 minutes restent une somme partielle sans conclusion ;
- `NON` puis `REPORTER` reste bloquant pour toute famille d’un premier client
  en production, tandis que manuel et intégration restent possibles ;
- une intégration tierce conserve détection d’indisponibilité, solution de
  repli, reprise et sortie ;
- une inconnue reste distincte de zéro ;
- Accordia reste entièrement fictif, et la page le précise désormais dans la
  première phrase du scénario avant les nombres ; aucune phrase ne le présente
  comme client, mission, résultat réel ou témoignage ;
- sources, dates, versions, périmètres et limites restent identiques ;
- metadata, auteur canonique, CTA, schémas Article/BreadcrumbList et état
  `ready-for-human-review` restent inchangés ; la FAQ conserve les mêmes neuf
  décisions et limites, avec seulement deux formulations révisées.

#### Contradictions, contrôles et limites

Aucune contradiction finale n’est connue entre héros, corps, tableau Accordia,
outil, moteur, FAQ, CTA ou dossier. Le scénario reste pédagogique, jamais
commercial. La version P4 rend 3 945 mots visibles et conserve un temps de
lecture de 20 minutes à 200 mots par minute.

Contrôles du snapshot P4 :

- Prettier Markdown, TS et TSX : PASS ; les SVG, sans parseur Prettier inféré,
  sont contrôlés séparément comme XML ;
- Vitest ciblé : PASS, 3 fichiers et 52/52 tests ;
- ESLint ciblé sur les sept fichiers TS/TSX du slug : PASS, zéro avertissement ;
- TypeScript sans émission : PASS ;
- XML des trois SVG : PASS ;
- trois WebP : PASS, inspection visuelle cohérente et dimensions inchangées
  1600 × 900, 1200 × 900 et 900 × 900 ;
- contrôle des espaces et diff-check : PASS ;
- intégrité historique : gel et manifestes P1/P2/P3 inchangés ; les douze
  payloads non édités restent identiques à P3 ;
- build, serveur et BAT : non exécutés, conformément au mandat P4.

Limites résiduelles : le rendu servi, le responsive, le clavier en navigateur,
le lecteur d’écran, l’impression et le repli de copie restent à vérifier dans
la phase autorisée à lancer un serveur et un BAT. La portée juridique,
contractuelle, RGPD, sécurité et accessibilité dépend toujours du produit réel.

Décision P4 : **GO_CONTROLE_QUALITE**. Défauts locaux connus : **0 P0 / 0 P1 /
0 P2 / 0 P3**. Le manifeste P4 couvre exactement les 15 payloads de P3, hors
manifestes. Son SHA-256 externe est communiqué après sa génération et n’est pas
inséré ici afin d’éviter une référence récursive.

### H16. Boucle de correction G4 — URL ASVS du 3 août 2026

Le contrôle des douze liens primaires par l’orchestrateur G4 a identifié une
destination rompue : le tag GitHub `v5.0.0` répondait 404. Le tag officiel
stable est `v5.0.0_release`, vérifié 200 par l’orchestrateur. La première
correction a réparé le lien de la page ; une seconde vérification G4 a détecté
que la source S08 du dossier conservait encore l’ancienne cible. Le fait
éditorial reste inchangé : OWASP ASVS 5.0.0 est la version stable citée,
publiée le 30 mai 2025.

Correction strictement bornée :

- les cibles ASVS de `page.tsx` et de la source S08 utilisent
  `https://github.com/OWASP/ASVS/releases/tag/v5.0.0_release` ;
- `content-quality.test.ts` exige cette URL exacte dans `pageSource` et
  `researchSource`, puis refuse l’ancien tag exact dans les deux sources ;
- aucun texte visible, fait, calcul, moteur, outil, média, gel, fichier partagé
  ou manifeste P1 à P4 n’est modifié ;
- tests ciblés : PASS, 3 fichiers et 53/53 tests ; ESLint, TypeScript,
  Prettier et diff-check : PASS.

Cette boucle ne crée aucun manifeste qualité. Le snapshot corrigé doit être
revalidé par P4 avant la suite du gate.

### H17. Revalidation P4 ciblée après correction ASVS du 3 août 2026

#### Intégrité de la correction

L’agent `/root/mvp_saas_p4` a repris le snapshot après la boucle H16. Le
manifeste P4 historique reste intact, avec son SHA-256 externe
`87424c72d27a1731fb8f46d633d7cedad85c8cc4d00e47bd71c8922cbc2ce20c`.
Sa vérification identifie exactement trois payloads modifiés : page, test de
contenu et dossier. Les douze autres payloads correspondent toujours octet pour
octet au manifeste P4.

La portée des trois changements est démontrée sans réécrire P4 :

- remplacer en flux `v5.0.0_release` par `v5.0.0` dans la page restitue le SHA
  P4 exact de la page :
  `d3e100ccd0b6d3d9b9b561504d9b306605238e78a989878b717e558d455f350d` ;
- retirer du test le seul bloc d’assertion ASVS ajouté restitue le SHA P4 exact
  du test :
  `1c664db9df9efb5a107566ef0d66ab04ef1bdba50c9541af91bcb0d256fa5813` ;
- retirer H16 et restaurer en flux l’ancienne cible S08 restitue le SHA P4 exact
  du dossier :
  `0f195c813c31c662b39fb5005c070da33d568041600b910a8185e3efa916221f`.

La page et S08 portent maintenant l’URL officielle exacte
`https://github.com/OWASP/ASVS/releases/tag/v5.0.0_release`. Un contrôle HTTP
direct avec suivi des redirections a rendu 200 sur cette destination. Le test
exige la cible exacte dans `pageSource` et `researchSource`, puis refuse
l’ancien href public exact dans les deux sources.

#### Revalidation éditoriale P4

La cible du lien n’est pas du texte visible. Le héros, les dix H2, les tableaux,
les équations, le scénario, l’outil, la FAQ, le CTA, les descriptions de sources
et les limites restent textuellement identiques au snapshot P4. Les quinze
motifs restent donc dans l’état validé en H15 : aucun retour de
l’autosatisfaction, des triptyques réflexes, de la symétrie binaire, des
adjectifs vendeurs, des métaphores forcées, des parenthèses en cascade, des
connecteurs robotiques, d’une conclusion répétitive, d’un rythme uniforme, des
verbes vagues, du ton administratif, des inversions artificielles, des puces
pauvres, de la dramatisation ou d’une logique implicite.

Les contrôles supplémentaires restent verts : aucun faux contraste répété,
aucune question rhétorique en rafale et aucune phrase « Dans ce guide », « Ici »
ou « Le guide recommande-t-il ». Chaque H2 mène toujours à la conséquence ou à
l’action documentée en H15. Accordia reste signalé comme SaaS B2B entièrement
fictif dans la première phrase du scénario, avant les nombres, sans langage de
témoignage ou de preuve sociale.

Faits et comportements protégés : 237/63, 395/−95, 474/−174, 177 STOP, 165
partiel, sept familles, cinq traitements, sept statuts, ordre des STOP,
production `NON` puis `REPORTER`, tiers et reprise, inconnue distincte de zéro,
sources et limites, metadata, auteur, CTA, FAQ, moteur, outil et médias. Le fait
ASVS reste identique : version stable 5.0.0 publiée le 30 mai 2025 ; seule sa
destination cassée est réparée.

#### Contrôles et décision

- Vitest ciblé : PASS, 3 fichiers et 53/53 tests ;
- ESLint ciblé sur les sept fichiers TS/TSX du slug : PASS, zéro avertissement ;
- TypeScript sans émission : PASS ;
- Prettier Markdown, TS et TSX : PASS ;
- XML, WebP et dimensions : inchangés et couverts par les douze payloads P4
  demeurés exacts ;
- diff-check ciblé : PASS ;
- build, serveur et BAT : non exécutés, conformément au mandat de
  revalidation.

Décision de revalidation P4 : **GO_CONTROLE_QUALITE MAINTENU**. Défauts connus :
**0 P0 / 0 P1 / 0 P2 / 0 P3**. Un manifeste qualité distinct couvre le nouveau
snapshot exact sur les mêmes 15 payloads, hors manifestes ; son SHA-256 externe
est communiqué après génération pour éviter toute référence récursive.

### H18. Boucle qualité Q sur le snapshot audité du 3 août 2026

La boucle Q part du manifeste qualité historique dont le SHA-256 externe est
`5f245e1678d6ed9f19131f4a48e74f4b58637906bef4330f6af60ddac36e45f5`.
Ce manifeste, P1, P2, P3 et P4 restent des témoins intacts : aucun n’est
réécrit ou régénéré par cette correction.

#### Trois défauts P1 fermés

1. Le contrat possède désormais un champ obligatoire `testHorizon`. Il nomme la
   période propre au test ; vide, il produit
   `STOP_REQUIRED_DECISIONS_UNKNOWN`. Les occurrences par client et la capacité
   totale couvrent l’ensemble de cette même période, sans conversion implicite.
   L’exemple Accordia utilise du 7 septembre au 18 octobre 2026 inclus comme
   hypothèse entièrement fictive, jamais comme durée universelle.
2. Avec `salesMode = ACHAT_AUTONOME`, la famille `salesEntitlements` doit porter
   `necessaryForTest = OUI`. Le contre-cas `NON` + `REPORTER`, états et procédure
   complets, s’arrête sur les décisions requises avant tout statut candidat. La
   priorité historique des STOP reste inchangée.
3. Le Markdown copié exporte la période, les états d’achat autonome, la
   procédure d’échec, les décisions des sept familles et, pour chaque opération
   manuelle, sa limite explicite, ses facteurs, son équation et son état de
   calcul. Le succès comme le repli sélectionnable permettent donc de retrouver
   les décisions qui ont produit le verdict.

#### Défauts P2 et P3 fermés

- les attributs `min` des minutes par occurrence et des occurrences par client
  passent à `0.001`, alignés sur la précision maximale de trois décimales et sur
  la règle moteur strictement positive ; la capacité totale conserve un minimum
  valide de zéro ;
- `manualLoadState` distingue `COMPLETE` et `PARTIAL_UNUSABLE`. Une opération ou
  un nombre de clients invalide conserve ses facteurs et les sous-totaux encore
  exploitables, affiche `partiel/inexploitable` et masque la capacité restante
  devenue trompeuse ;
- Accordia réduit explicitement une liste initiale fictive de huit envies au
  résultat vendu et au parcours borné effectivement testés ;
- `dateModified` devient `2026-08-03T02:25:11+02:00`, heure réelle de la boucle ;
- la consultation générale distingue S01 à S11, ouvertes le 2 août, de S12,
  ajoutée et rouverte le 3 août 2026 ;
- chaque erreur est reliée au seul contrôle concerné par un identifiant stable,
  `aria-invalid` et `aria-describedby`. Un contrôle sans erreur n’est pas marqué
  invalide.

Le registre ajoute F54 à F59 sans retirer les faits historiques. La version Q
contient 4 775 mots visibles et demande 24 minutes à 200 mots par minute. Les
sept familles, cinq traitements, sept statuts, chiffres Accordia, sources,
absence de score, inconnue distincte de zéro et absence de stockage, réseau ou
téléchargement restent protégés.

#### Contrôles et défauts résiduels

- Vitest ciblé : PASS, 3 fichiers et 65/65 tests ;
- ESLint ciblé sur les sept fichiers TS/TSX du slug : PASS, zéro avertissement ;
- TypeScript sans émission : PASS ;
- Prettier Markdown, TS et TSX : PASS ;
- XML des trois SVG : PASS ; WebP : PASS aux dimensions inchangées 1600 × 900,
  1200 × 900 et 900 × 900 ;
- revue React : aucune nouvelle cascade réseau, aucun effet ou état dérivé, et
  les aides d’erreur restent calculées depuis le résultat mémorisé ;
- `git diff --check` : PASS ;
- build, serveur, BAT, Git, verrous et manifestes : non exécutés ou non modifiés,
  conformément au mandat.

Défauts locaux restants connus après les contrôles autorisés : **0 P0 / 0 P1 /
0 P2 / 0 P3**. Le rendu servi, le navigateur réel et la décision de release
restent à revalider par les passes suivantes ; aucun manifeste de remplacement
n’est créé ici.

### H19. Revalidation P3 après la boucle Q du 3 août 2026

L’agent `/root/mvp_saas_p3` a relu intégralement la page, l’outil, le moteur,
leurs copies Markdown et la section H18, puis a rejoué le socle ciblé avant
correction : **PASS, 3 fichiers et 65/65 tests**. Aucun défaut P0, P1 ou P2
n’est réapparu. La période commune reste nommée en langage courant ; l’achat
autonome exige toujours les droits de vente ; les états partiels ou
inexploitables, la réduction fictive Accordia et la reconstruction du contrat
Markdown restent inchangés.

#### Ajustements P3 strictement textuels et accessibles

- les erreurs détaillées sont repliées visuellement au chargement pour préserver
  la lecture mobile. Elles restent dans le DOM, disponibles aux lecteurs
  d’écran, reliées aux champs par leurs identifiants stables,
  `aria-invalid` et `aria-describedby`. Le résumé du résultat demeure visible
  et un bouton explicite, doté de `aria-pressed`, permet de les afficher ou de
  les replier sous les champs ;
- la forme maladroite `À vérifier min` disparaît à la source : le moteur écrit
  `À vérifier` sans unité quand la valeur est inconnue, tandis que les cartes
  appliquent la même règle par leur propre helper d’affichage. Aucun
  post-traitement divergent n’est appliqué au Markdown copié ; les tests moteur
  interdisent explicitement le retour de cette chaîne ;
- la période commune n’ajoute plus de second point après une hypothèse déjà
  ponctuée. Le rappel générique sur l’achat autonome, redondant avec
  l’avertissement conditionnel, est retiré ; cet avertissement conserve
  l’invariant métier exact ;
- quelques termes d’agence sont traduits en français courant : `responsable`,
  `test d’acceptation` et `reprise en cas d’échec`. Aucun fait, calcul, seuil,
  statut, donnée, source, média ou manifeste n’est modifié.

L’extension de périmètre au moteur et à son test a été autorisée uniquement
pour corriger le libellé exact de la valeur inconnue. La version P3 revalidée
contient 4 794 mots visibles et demande 24 minutes à 200 mots par minute.
`dateModified` devient `2026-08-03T02:39:28+02:00` ; `readTimeMin` reste à 24.

#### Contrôles et décision

- lecture sous pression : PASS, le verdict et les inconnues restent visibles
  sans mur initial d’erreurs ;
- lecture sceptique : PASS, période, hypothèses, états, équations et limites
  sont reconstructibles dans la page et le Markdown copié ;
- lecture mobile sur source : PASS, commandes de 44 px, blocs courts, erreurs
  repliables et absence de débordement structurel ajouté ;
- Vitest ciblé : PASS, 3 fichiers et 66/66 tests ;
- ESLint ciblé sur les sept fichiers TS/TSX du slug : PASS, zéro avertissement ;
- TypeScript sans émission : PASS ;
- Prettier Markdown, TS et TSX : PASS ;
- `git diff --check` ciblé : PASS ;
- build, serveur, BAT, Git, verrous et manifestes : non exécutés ou non
  modifiés, conformément au mandat.

Décision : **GO_PASSE_4_REVALIDATION**. Défauts locaux connus après les
contrôles autorisés : **0 P0 / 0 P1 / 0 P2 / 0 P3**. Le rendu servi, le
navigateur réel et la décision de release restent à revalider par la passe
suivante ; aucun nouveau manifeste n’est créé ici.

### H20. Revalidation P4 finale après les boucles Q et P3 du 3 août 2026

#### Entrée, intégrité et périmètre

L’agent `/root/mvp_saas_p4` a repris le snapshot courant sans s’appuyer sur le
seul journal. Il a relu intégralement le prompt maître de 1 906 lignes, le gel
de 314 lignes, le présent dossier et H18/H19, la page, le moteur, l’outil, les
trois fichiers de tests, l’image Open Graph et les trois SVG. Les trois WebP ont
été inspectés visuellement à leur définition native. Chaque H2 a ensuite été
relu isolément contre son titre, sa conséquence et les quinze motifs P4.

Les manifestes historiques restent intacts. Leurs SHA-256 externes sont :

- P1 : `b5fda49373dc93597ae9bbe4c153c7356e4af642fcf74d3e33489afc01411280` ;
- P2 : `70880e8c0eb11c11e395cc56c4ea6d287b0e6ad113c048e78744a5af0739dd55` ;
- P3 : `22bf14ad81b2b988564da7cd70d9d9db7aec50b400cd580b3654c8986c3dc1dc` ;
- P4 : `87424c72d27a1731fb8f46d633d7cedad85c8cc4d00e47bd71c8922cbc2ce20c` ;
- qualité historique :
  `5f245e1678d6ed9f19131f4a48e74f4b58637906bef4330f6af60ddac36e45f5`.

La vérification du manifeste qualité historique distingue exactement les sept
payloads modifiés par les boucles Q/P3 : dossier, page, moteur, outil et leurs
trois tests. Le gel, l’image Open Graph, les trois SVG et les trois WebP restent
identiques à ce témoin. Aucun manifeste existant n’est réécrit.

#### Revalidation des trois défauts P1 historiques

1. **Période unique explicite.** `testHorizon` est obligatoire et vide produit
   `STOP_REQUIRED_DECISIONS_UNKNOWN`. Une équation manuelle n’est exploitable
   que si cette période existe. Page et outil disent que les occurrences par
   client et la capacité totale couvrent son ensemble, sans conversion
   implicite. Les cartes, équations, capacités et Markdown reprennent cette
   même valeur. Accordia conserve une seule hypothèse fictive, du 7 septembre
   au 18 octobre 2026 inclus.
2. **Achat autonome impossible sans droits de vente.** Lorsque
   `salesMode = ACHAT_AUTONOME`, le moteur exige
   `salesEntitlements.necessaryForTest = OUI`. Des états et une procédure
   complets avec `NON` puis `REPORTER` restent donc sur
   `STOP_REQUIRED_DECISIONS_UNKNOWN`, avant le STOP de report et avant tout
   statut candidat. L’aide conditionnelle de l’outil, le corps, Accordia et la
   FAQ portent la même règle.
3. **Markdown reconstructible.** Le texte exporte format, période, résultat,
   événement de preuve, mode de vente, états et échec d’achat autonome, nombre
   de clients, capacité, décisions des sept familles, responsables, preuves,
   reprises, déclencheurs, limites, facteurs, équations, état complet ou
   partiel, sous-total exploitable, inconnues et raisons du verdict. La copie
   réussie et le repli sélectionnable affichent la même valeur
   `assessment.markdown` ; aucune décision n’est cachée dans l’interface.

#### Invariants P2/P3 et audit éditorial transversal

Les entrées manuelles strictement positives commencent à `0.001`, la capacité
totale accepte zéro, les décimales restent exactes par `BigInt` et aucune
inconnue ne devient zéro. Les contre-cas restent réconciliés : 237/63,
395/−95, 474/−174, 177 avec STOP de report et 165 en somme
`partiel/inexploitable` sans capacité restante. Le moteur conserve sept
familles, cinq traitements, sept statuts et leur ordre de priorité. Un premier
client en production ne peut toujours pas masquer une responsabilité par
`NON` puis `REPORTER`; l’intégration conserve détection, repli, reprise et
sortie.

Les dix H2 produisent successivement une frontière, un format, un parcours
observable, sept décisions attribuées, un calcul borné, des contre-cas rejoués,
un contrat local, des alternatives, une revue humaine et la fermeture des
questions restantes. Les huit tableaux rapprochent des éléments qui doivent
être comparés sur les mêmes colonnes ; leurs parallélismes sont informatifs,
pas décoratifs. Les neuf FAQ répondent dès la première phrase. Le CTA demande
une relecture sans promettre lancement, conformité ou résultat et autorise un
test plus simple ou le maintien d’un STOP.

Le balayage des quinze motifs ne relève aucune régression : pas
d’autosatisfaction, triptyque réflexe, symétrie binaire répétée, adjectif
vendeur, métaphore argumentative, cascade de parenthèses, connecteur
robotique, conclusion récapitulative, cadence uniforme, verbe masquant
l’action, passif administratif, inversion artificielle, liste pauvre,
dramatisation ni cause implicite. La « ligne d’arrivée » reste une phrase à
remplir, les questions sont celles des tableaux, de l’outil ou de la FAQ, les
répétitions de période protègent un invariant de calcul et `STOP` reste le code
public exact du moteur. Chaque conservation a donc une fonction vérifiable.

Accordia est annoncé entièrement fictif avant les nombres et sa liste de huit
envies est réduite au résultat vendu et au parcours réellement testés. Aucun
client, témoignage, mission, résultat commercial, taux de succès ou preuve
sociale n’est inventé. Les visuels portent les mêmes familles, équations et
limites. Les textes alternatifs décrivent leur fonction sans recopier tous les
libellés.

L’accessibilité vérifiable dans la source reste cohérente : labels associés,
sept `fieldset` et `legend`, identifiants stables, `aria-invalid` seulement sur
le champ concerné, `aria-describedby` vers des erreurs conservées dans le DOM,
commande de détail avec `aria-pressed`, annonces polies, commandes d’au moins
44 px et Markdown parcourable au clavier. Le rendu dans un navigateur et le
lecteur d’écran réel restent hors de cette passe.

#### Contrôles finaux et décision

- Vitest ciblé : PASS, 3 fichiers et 66/66 tests ;
- ESLint ciblé sur les sept fichiers TS/TSX : PASS, zéro avertissement ;
- TypeScript sans émission : PASS ;
- Prettier sur le dossier et les sept fichiers TS/TSX : PASS ;
- XML des trois SVG : PASS ;
- trois WebP : PASS, inspection visuelle et dimensions 1600 × 900, 1200 × 900
  et 900 × 900 ;
- diff-check du dossier et contrôle équivalent des fichiers texte non suivis :
  PASS ;
- Git, fichier partagé, registre, verrou, build, serveur et BAT : non exécutés
  ou non modifiés, conformément au mandat.

Aucune correction P4 supplémentaire n’était justifiée : seuls H20 et le futur
manifeste immuable `mvp-saas-quoi-inclure-quality-v2.sha256` appartiennent à
cette revalidation. Ce manifeste est généré après cette écriture et le dernier
rejeu des contrôles, avec les mêmes 15 payloads dans le même ordre que le
manifeste qualité historique. Son SHA-256 externe est communiqué séparément
pour éviter toute référence récursive.

Décision : **GO_Q_REAUDIT**. Défauts locaux connus : **0 P0 / 0 P1 / 0 P2 /
0 P3**. Cette décision autorise le contre-audit Q du snapshot exact ; elle ne
prouve ni build, BAT, déploiement, publication ou indexation.

### H21. Correction du contre-audit Q v2 du 3 août 2026

#### Entrée exacte et défauts reçus

Le contre-audit Q v2 a porté sur le manifeste immuable
`mvp-saas-quoi-inclure-quality-v2.sha256`, dont le SHA-256 externe reste
`2b658dee1066deef79ac78244602f7be303c8f95247630732e45553c32b1d768`.
Sa décision d’entrée était **NO_GO, 94/100 et 19/20**, avec **0 P0 / 1 P1 /
3 P2 / 2 P3**. Ce manifeste, les cinq manifestes historiques, le gel d’entrée,
l’image Open Graph, les deux autres paires SVG/WebP et tous les fichiers
partagés restent intacts.

#### Corrections bornées et preuves ajoutées

1. **P1 — titre structuré différent du H1.** Le H1 visible et
   `Article.headline` dépendent désormais du même objet `heroHeading` et de sa
   composition `heroHeadline`. Un test rend la page, lit le JSON-LD Article,
   l’`aria-label` du H1 et son texte visible, les normalise, puis exige leur
   égalité directe.
2. **P2 — espace typographique de la question.** Un test distinct exige une
   espace insécable immédiatement avant le point d’interrogation dans ces trois
   sorties rendues. Le titre, le titre de carte et le fil d’Ariane appliquent la
   même convention.
3. **P2 — libellé de confidentialité trop absolu.** La statistique ne promet
   plus `Données envoyées : Aucune`. Elle dit exactement
   `Calculateur · envoi : Aucun`, ce qui borne l’affirmation à l’outil local et
   ne décrit pas l’ensemble de la page.
4. **P2 — formats fusionnés par le visuel carré.** Le SVG 900 × 900 conserve
   les quatre STOP prioritaires, puis présente trois cartes indépendantes sans
   flèche commune : prototype hors production
   (`TEST_FORMAT_NOT_PRODUCTION`), pilote accompagné en revue
   (`PILOT_CANDIDATE_FOR_REVIEW`) et premier client en revue de production
   (`FIRST_CLIENT_CANDIDATE_FOR_REVIEW`). Le statut commun et la suite visuelle
   `Prototype · pilote · production` disparaissent. Le WebP est régénéré depuis
   ce SVG et relu à sa définition native.
5. **P3 — paragraphe invalide dans les labels.** `FieldError` rend un
   `span`, avec `block` seulement quand le détail est visible. Les identifiants,
   le mode initial `sr-only`, `aria-invalid`, `aria-describedby` et le texte de
   chaque erreur sont conservés. Les tests interdisent un paragraphe dans tout
   `label` et vérifient le type de l’élément d’erreur.
6. **P3 — ponctuation de l’horizon fictif.** Le point final est retiré de la
   valeur Accordia à la source et de ses attentes exactes. Les guillemets et la
   ponctuation des équations et du Markdown ne produisent donc plus
   `2026. »,`, sans modifier la période ni aucun calcul.

La version Q v2 contient 4 794 mots visibles et demande toujours 24 minutes à
200 mots par minute. `dateModified` devient
`2026-08-03T03:28:04+02:00` ; `readTimeMin` reste à 24.

#### Contrôles et décision locale

- Vitest ciblé sur le moteur, l’outil et le contenu : PASS, 3 fichiers et 67/67
  tests ;
- ESLint ciblé sur les sept fichiers TS/TSX du slug : PASS, zéro avertissement ;
- TypeScript sans émission : PASS ;
- Prettier sur le dossier, le journal et les sept fichiers TS/TSX : PASS ;
- XML des trois SVG : PASS ;
- trois WebP : PASS, dimensions 1600 × 900, 1200 × 900 et 900 × 900 ; le WebP
  corrigé a été inspecté visuellement à 900 × 900 ;
- contrôle du manifeste Q v2 : PASS, exactement neuf payloads divergent comme
  attendu — dossier, page, moteur, outil, leurs trois tests et la paire
  SVG/WebP carrée — tandis que les six autres correspondent toujours ;
- diff-check du dossier et contrôle équivalent des fichiers texte non suivis :
  PASS ;
- build, serveur, BAT, Git, fichiers partagés, registre, verrou et manifestes :
  non exécutés ou non modifiés, conformément au mandat.

Décision : **PRET_P3_REVALIDATION**. Défauts locaux connus après correction et
contrôles autorisés : **0 P0 / 0 P1 / 0 P2 / 0 P3**. Cette décision demande une
nouvelle passe P3 ; elle ne prouve ni build, BAT, déploiement, publication ou
indexation.

### H22. Revalidation P3 après le contre-audit Q v2 du 3 août 2026

#### Entrée relue et six corrections Q vérifiées

L’agent `/root/mvp_saas_p3` a relu intégralement H20, H21 et les neuf payloads
qui divergent du manifeste qualité v2 : présent dossier, page, moteur, outil,
leurs trois tests et paire carrée SVG/WebP. Le WebP a été inspecté à sa
définition native de 900 × 900. Le socle reçu passe **3 fichiers et 67/67
tests** avant toute correction.

Les six défauts du contre-audit restent fermés :

1. le H1 visible, son libellé accessible et `Article.headline` proviennent de
   `heroHeading` et `heroHeadline` ; le test les rend, les normalise et exige
   leur égalité directe ;
2. l’espace insécable précède le point d’interrogation dans ces trois sorties,
   ainsi que dans le titre de metadata, le titre de carte et le fil d’Ariane ;
3. la statistique reste strictement bornée à
   `Calculateur · envoi : Aucun` ; l’ancienne promesse générale sur les données
   envoyées reste absente ;
4. le visuel carré conserve quatre STOP prioritaires, puis trois cartes sans
   flèche commune ni statut fusionné. Prototype, pilote accompagné et premier
   client portent chacun leur verdict propre ;
5. `FieldError` reste un `span`, contenu phrasé valide dans un `label`. Son
   identifiant demeure dans le DOM en mode initial `sr-only`, puis le détail
   visible reçoit `block`. `aria-invalid`, `aria-describedby` et la commande
   `aria-pressed` restent reliés ;
6. la valeur de période Accordia ne possède aucun point terminal. Page,
   équations et Markdown ne produisent plus la séquence `2026. »,`.

#### Défaut P3 résiduel corrigé

L’alternative textuelle historique du visuel disait qu’il allait « des
inconnues à la revue humaine ». Cette formulation suggérait encore une
trajectoire unique et décrivait mal le verdict autonome du prototype. Elle
devient : « Arbre sans score : quatre STOP prioritaires et trois verdicts
indépendants par format ». Le test exige cette description et interdit
l’ancienne. Le SVG et le WebP restent strictement inchangés.

La metadata, le H1, l’image Open Graph et le fil d’Ariane gardent des longueurs
adaptées à leur support tout en portant la même requête `MVP SaaS : quoi
inclure ?` et la même promesse de contrat de test. Aucun changement de
structure mobile n’est introduit : les trois images conservent dimensions,
`sizes` et largeur fluide ; les commandes de l’outil restent à 44 px au moins.
La voix, les dix décisions H2, la FAQ et le CTA restent directs et sans promesse
de lancement.

Les anciens invariants P1 restent exacts : période commune obligatoire, achat
autonome impossible sans `salesEntitlements = OUI`, Markdown reconstructible,
état `partiel/inexploitable`, sept familles, cinq traitements, sept statuts,
ordre des STOP, calculs 237/63, 395/−95, 474/−174, 177 et 165, inconnue distincte
de zéro, exemple Accordia fictif et absence de score, réseau, stockage ou
téléchargement.

La version P3 H22 contient 4 794 mots visibles et demande 24 minutes à 200 mots
par minute. `dateModified` devient `2026-08-03T03:37:48+02:00` ;
`readTimeMin` reste à 24.

#### Contrôles et décision

- Vitest ciblé : PASS, 3 fichiers et 67/67 tests ;
- ESLint ciblé sur les sept fichiers TS/TSX du slug : PASS, zéro avertissement ;
- TypeScript sans émission : PASS ;
- Prettier sur le dossier et les sept fichiers TS/TSX : PASS ;
- XML des trois SVG : PASS ;
- trois WebP : PASS, signatures et dimensions 1600 × 900, 1200 × 900 et
  900 × 900 ; inspection native du visuel corrigé : PASS ;
- diff-check du dossier et contrôle équivalent des fichiers texte non suivis :
  PASS ;
- build, serveur, BAT, Git, fichiers partagés, registre, verrou et manifestes :
  non exécutés ou non modifiés, conformément au mandat.

Décision : **GO_P4_REVALIDATION**. Défauts locaux connus après correction et
contrôles autorisés : **0 P0 / 0 P1 / 0 P2 / 0 P3**. Cette décision autorise la
revalidation P4 du snapshot exact ; elle ne prouve ni build, BAT, déploiement,
publication ou indexation. Aucun manifeste n’est créé ou modifié en H22.

### H23. Revalidation P4 finale après H21/H22 du 3 août 2026

#### Entrée exacte et lecture indépendante

L’agent `/root/mvp_saas_p4` a relu intégralement le manifeste immuable
`mvp-saas-quoi-inclure-quality-v2.sha256`, H20 à H22 et les neuf payloads qui
divergent de ce témoin : dossier, page, moteur, outil, trois fichiers de tests
et paire carrée SVG/WebP. Le SHA-256 externe de quality-v2 reste
`2b658dee1066deef79ac78244602f7be303c8f95247630732e45553c32b1d768`.
Sa vérification retrouve exactement ces neuf divergences ; gel, image Open
Graph et deux autres paires SVG/WebP restent identiques sur les six autres
chemins.

Le SVG carré a été lu en entier et son WebP inspecté à 900 × 900. Les deux
autres WebP ont aussi été relus à leur définition native. Chaque H2, tableau,
exemple, FAQ et CTA a ensuite été revu contre les quinze motifs P4, sans déduire
la qualité du seul journal ou des tests.

#### Six défauts Q et correctif P3 revalidés

1. **Source commune du titre.** `heroHeading` fournit les trois fragments du H1
   et `heroHeadline` leur composition. Cette même composition alimente
   `guide.heroTitle`, donc `Article.headline`. Le test rend la page, extrait le
   JSON-LD Article, l’`aria-label` du H1 et son texte visible, puis exige leur
   égalité après la seule normalisation des espaces.
2. **Espace insécable.** Le suffixe commun se termine par `\u00a0?`. Les trois
   sorties rendues conservent cette espace avant le point d’interrogation. Le
   titre de metadata, le titre de carte et le fil d’Ariane portent la même
   convention typographique.
3. **Confidentialité bornée.** La statistique dit
   `Calculateur · envoi : Aucun`. Elle décrit le calculateur local, sans
   prétendre caractériser tous les échanges techniques de la page. L’ancienne
   statistique générale `Données envoyées` reste absente.
4. **Verdicts indépendants dans le visuel.** Après les quatre STOP prioritaires,
   trois cartes séparées portent `TEST_FORMAT_NOT_PRODUCTION`,
   `PILOT_CANDIDATE_FOR_REVIEW` et
   `FIRST_CLIENT_CANDIDATE_FOR_REVIEW`. Aucune flèche ni statut commun ne les
   transforme en progression. Le titre et la description internes du SVG
   expliquent cette indépendance ; le WebP la rend lisible à sa définition
   native.
5. **HTML et erreurs accessibles.** `FieldError` rend un `span`, élément phrasé
   valide dans un `label`, jamais un paragraphe. Son identifiant reste présent
   en `sr-only`, puis reçoit `block` quand le détail est affiché.
   `aria-invalid` ne marque que le champ concerné et `aria-describedby` relie ce
   champ au même message stable ; la commande expose `aria-pressed`.
6. **Ponctuation Accordia.** La valeur source de `testHorizon` ne se termine par
   aucun signe de ponctuation. La page, les équations et le Markdown ajoutent
   leur propre syntaxe sans produire `2026. »,` ni modifier l’horizon.

Le correctif P3 d’alternative textuelle est exact : « Arbre sans score : quatre
STOP prioritaires et trois verdicts indépendants par format ». Il décrit le
contenu et la relation utile, interdit l’ancienne trajectoire « des inconnues à
la revue humaine » et ne duplique pas tous les libellés du visuel.

#### Anciens invariants et antipasse IA

Les trois P1 historiques restent fermés : période commune obligatoire, achat
autonome impossible sans `salesEntitlements.necessaryForTest = OUI` et Markdown
reconstructible jusque dans les responsables, preuves, reprises, limites,
facteurs, équations, inconnues et raisons du verdict. Les états numériques
restent exacts : 237/63, 395/−95, 474/−174, 177 avec STOP et 165 en somme
`partiel/inexploitable` sans capacité restante. Sept familles, cinq
traitements, sept statuts, ordre des STOP, `NON` puis `REPORTER` en production,
tiers avec repli et inconnue distincte de zéro restent cohérents dans page,
moteur, outil, tests, Markdown, dossier et médias.

Les dix H2 répondent toujours à leur titre et mènent à une action ou une
décision. Les huit tableaux comparent des options sur une base commune, les
neuf FAQ répondent dès leur première phrase et le CTA propose une relecture qui
peut réduire le test ou maintenir un STOP. Les ajouts H21/H22 ne réintroduisent
aucun des quinze motifs : pas d’autosatisfaction, triptyque réflexe, symétrie
binaire répétée, adjectif vendeur, métaphore forcée, parenthèses en cascade,
connecteur robotique, conclusion répétitive, rythme uniforme, verbe neutre,
formulation administrative, inversion artificielle, liste pauvre,
dramatisation ou logique implicite. La répétition des trois verdicts sert leur
distinction ; celle de la période protège l’unité de calcul.

Accordia reste déclaré entièrement fictif avant tout nombre. Aucun témoignage,
client réel, mission, résultat commercial, taux de réussite ou preuve sociale
n’est ajouté. Les limites de conformité, sécurité, accessibilité, production,
publication et indexation restent visibles.

#### Contrôles finaux et décision

- Vitest ciblé : PASS, 3 fichiers et 67/67 tests ;
- ESLint ciblé sur les sept fichiers TS/TSX : PASS, zéro avertissement ;
- TypeScript sans émission : PASS ;
- Prettier sur le dossier et les sept fichiers TS/TSX : PASS ;
- XML des trois SVG : PASS ;
- trois WebP : PASS, signatures, inspection native et dimensions 1600 × 900,
  1200 × 900 et 900 × 900 ;
- diff-check du dossier et contrôle équivalent des fichiers texte non suivis :
  PASS ;
- manifestes P1, P2, P3, P4, qualité historique et quality-v2 : inchangés ;
- Git, fichiers partagés, registre, verrou, build, serveur et BAT : non exécutés
  ou non modifiés, conformément au mandat.

Aucune correction P4 supplémentaire n’était justifiée. Cette passe touche
seulement H23, puis crée le nouveau manifeste immuable
`mvp-saas-quoi-inclure-quality-v3.sha256` après le dernier rejeu. Il couvre les
mêmes 15 chemins dans le même ordre que quality-v2 ; son SHA-256 externe est
communiqué séparément afin d’éviter toute référence récursive.

Décision : **GO_Q_FINAL**. Défauts locaux connus : **0 P0 / 0 P1 / 0 P2 /
0 P3**. Ce verdict autorise le dernier contre-audit Q du snapshot exact ; il ne
prouve ni build, BAT, déploiement, publication ou indexation.

### H24. Intégration partagée et fermeture des P2 du 3 août 2026

Le contre-audit indépendant du snapshot quality-v3
(e074483b0d564549c8b7962ff6e15ee67c32dc250a707f473b6fb29eb5a36d6b)
a rendu **GO_QUALITE_GUIDE, 95/100, 18/20, 0 P0 et 0 P1**. Les axes critiques
Décision, Calculs et Technique ont obtenu respectivement 10/10, 9/10 et 9/10.
Le mutex central a ensuite été acquis avant toute modification des fichiers
partagés.

#### Intégration au corpus

- src/lib/guides.ts devient la source de vérité des métadonnées, du H1, des
  trois médias, du statut ready-for-human-review et du temps de lecture ;
- la page utilise getGuide("mvp-saas-quoi-inclure") et découpe le H1 depuis
  le heroTitle du registre, de sorte que le texte visible et
  Article.headline ne puissent pas diverger ;
- le slug sort de la liste des 93 redirections héritées ;
- l’icône du futur hub est déclarée, sans rendre ce brouillon éditorial
  découvrable dans le hub, le sitemap ou llms.txt ;
- deux liens entrants contextualisés sont ajoutés depuis la validation d’idée
  et le cahier des charges SaaS, avec leurs tests de destination.

#### Quatre P2 fermés dans le snapshot d’intégration

1. Le CTA de stratégie accepte désormais showPhoneCta: false. Ce guide rend
   exactement une action projet et aucun second lien téléphonique dans ce bloc.
2. Le comptage de lecture exclut aussi les messages sr-only, qui ne sont pas
   visibles. La version intégrée H24 contient 4 568 mots visibles après ajout
   du maillage entrant vers le guide #30 et demande
   23 minutes à 200 mots par minute ; le Markdown volontairement visible reste
   compté.
3. Une période inconnue rend la charge PARTIAL_UNUSABLE, la charge totale et
   la capacité restante inexploitables même lorsqu’aucune opération manuelle
   n’est encore déclarée. Un test adversarial couvre explicitement ce cas,
   tandis qu’une équation partielle conserve son sous-total exploitable.
4. Le visuel 16:9 ne numérote plus les formats et ne dessine plus de flèches
   prototype → pilote → premier client. Trois branches verticales indépendantes
   mènent au même cadre des sept familles ; le SVG et son WebP sont
   régénérés et doivent être inspectés au BAT.

dateModified devient 2026-08-03T04:14:58+02:00. Cette intégration ne vaut
encore ni build, BAT, commit, push, déploiement, publication ou indexation. Ces
preuves restent à produire sur le snapshot d’intégration puis à soumettre à
l’audit release indépendant.

### H25. BAT et preuves de release locale du 3 août 2026

#### Batterie automatisée sur le snapshot intégré

- installation reproductible par `npm ci` : PASS, 758 paquets ;
- Vitest complet : PASS, 94 fichiers et 846/846 tests ;
- contrôles ciblés après la correction du compteur de lecture : PASS, dont
  28/28 tests de contenu du guide et le cas de régression d’un élément HTML
  vide portant `sr-only` ;
- ESLint, TypeScript sans émission, Prettier, contrôle XML des trois SVG,
  signatures et dimensions des trois WebP, et diff-check : PASS ;
- contrôle SEO en environnement développement puis production : PASS,
  181/181 règles dans chaque environnement ;
- build de production final : PASS, 69 pages, route statique du guide, puis
  artefact SEO post-build à 44 URL, 27 liens, 44 pages, 11 temps de lecture et
  76 blocs JSON-LD ;
- mesure officielle mise à jour après le maillage #30 : PASS, 4 568 mots visibles et 23
  minutes. Le compteur exclut `sr-only` sans interrompre le texte au premier
  élément HTML vide.

`npm audit --omit=dev` signale 7 vulnérabilités hautes dans des dépendances
transitives de build et d'image, notamment via `brace-expansion` et la chaîne
Sharp/libvips/Next/Miniflare/Wrangler. Les corrections automatiques proposées
incluent des changements cassants ou un changement forcé de version de Next ;
aucun paquet ni lockfile n'a donc été modifié sans mandat. Ce risque de
dépendances reste explicitement ouvert et n'est pas présenté comme une
vulnérabilité propre au guide.

#### Preuves HTML et découvrabilité

La route locale servie répond directement en 200, sans redirection. Le
canonical est `https://hagnere-code.ai/guides/mvp-saas-quoi-inclure` et le
document reste `noindex, nofollow`, conformément à
`ready-for-human-review`. Le H1 visible, son libellé accessible et
`Article.headline` sont identiques après normalisation des espaces. Les seuls
schémas sont `Article` et `BreadcrumbList` : aucun `FAQPage`, `HowTo` ou
`AggregateRating` n'est émis. Aucun lien XLS, XLSX ou CSV n'est présent. Le CTA
de stratégie contient une seule action principale et aucun lien `tel:` ; les
deux liens entrants sont rendus. Le guide reste absent du hub public, du
sitemap et de `llms.txt`. L'image Open Graph répond en 200, PNG 1200 × 630.

#### BAT lecteur et calculateur

Le rendu a été contrôlé dans un navigateur réel aux largeurs 320, 360, 390,
430, 640, 768, 1024, 1280, 1440 et 1600 px. À chaque largeur,
`document.scrollWidth` égale la largeur utile : aucun débordement horizontal du
document. Les trois médias sont visibles, le H1 reste présent et le CTA
principal reste unique. Les thèmes clair et sombre, `prefers-reduced-motion`,
le paysage 844 × 390, une police racine à 150 % et le reflow équivalent à un
zoom 200 % ont aussi été contrôlés sans perte de contenu ni débordement. La
navigation clavier commence par le lien d'évitement ; les dix premiers arrêts
de tabulation ont chacun un indicateur de focus solide de 2 px.

Les scénarios fonctionnels suivants ont été rejoués dans la page servie :

1. l'état vide reste `STOP_REQUIRED_DECISIONS_UNKNOWN` et la charge
   `PARTIAL_UNUSABLE` ;
2. l'exemple entièrement fictif Accordia produit
   `PILOT_CANDIDATE_FOR_REVIEW`, 237 min consommées sur 300 et 63 min restantes ;
3. une capacité abaissée à 200 min produit
   `STOP_MANUAL_CAPACITY_EXCEEDED` et matérialise l'écart de 37 min ;
4. l'effacement des 12 minutes de « Comptes et accès » produit
   `STOP_MANUAL_OPERATION_UNBOUNDED`, conserve le sous-total exploitable de
   165 min et rend la charge globale `PARTIAL_UNUSABLE` ;
5. le détail des erreurs rend le champ fautif `aria-invalid`, relie le message
   par `aria-describedby` et expose l'état de commande par `aria-pressed` ;
6. le mode achat autonome reste en STOP tant que les états et la procédure
   d'échec sont inconnus, devient candidat une fois renseigné, puis revient en
   STOP si « Vente et droits associés » passe à `NON` puis `REPORTER` ;
7. la copie Markdown confirme le succès, et un refus simulé du presse-papiers
   affiche le texte complet de repli sans réseau ;
8. une valeur client à zéro est refusée avec le message précis « minimum 1 ».

Aucune erreur de console, erreur de page ou ressource locale échouée n'a été
observée. L'impression navigateur produit un PDF balisé de 37 pages ; la
première page, une page du calculateur et la dernière page ont été rendues en
images et inspectées sans chevauchement, coupe illisible ou pied de page perdu.

Le visuel 16:9 corrigé a été inspecté à 1600 × 900 : il présente trois formats
indépendants reliés verticalement au même contrat en sept familles, sans flèche
prototype vers pilote ou production.

#### Frontière de release

Ces preuves autorisent un audit release indépendant du snapshot exact qui sera
gelé dans `mvp-saas-quoi-inclure-integration.sha256`. Elles ne constituent ni
commit, push, déploiement, publication, indexation, ni preuve de route publique.

### H26. Maillage entrant vers le guide de choix du format — 5 août 2026

La section « Frontière du test » relie désormais naturellement le guide
`mvp-prototype-ou-poc`. Le lien intervient lorsque le lecteur hésite encore
entre compréhension, faisabilité, travail réel et apprentissage client, avant
de fixer le contrat de test du MVP SaaS. Il rappelle qu’un entretien, un test
manuel ou un outil existant peut suffire ; il ne présente donc ni le MVP ni le
développement comme une conclusion automatique.

Cette retouche ne change aucun calcul, exemple, média, CTA, metadata, date ou
statut éditorial du présent guide. Elle appartient au snapshot d’intégration du
guide #31 et ne constitue ni une nouvelle publication ni une preuve publique.
Après le maillage #31, le rendu contient 4 613 mots visibles ; l’arrondi à 200
mots par minute reste donc 23 minutes et ne modifie pas le registre du guide.

### H27. Maillage entrant vers le comparatif Bubble — 5 août 2026

La réponse sur l’architecture relie désormais le guide
`bubble-ou-saas-sur-mesure` lorsque l’alternative porte précisément sur une
plateforme no-code et une base de code dédiée. L’ancre annonce la comparaison
sur les mêmes preuves, le coût total et la capacité à changer de solution ;
elle ne présente ni Bubble ni le code dédié comme choix automatique.

Cette retouche ne change aucun calcul, exemple, média, CTA, metadata, date ou
statut éditorial du présent guide. Elle appartient au snapshot d’intégration du
guide #32 et ne constitue ni une nouvelle publication ni une preuve publique.
Après le maillage #32, le rendu contient 4 650 mots visibles ; l’arrondi à 200
mots par minute reste 23 minutes et ne modifie pas le registre du guide.
