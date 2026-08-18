# Giga-audit — « Cahier des charges d’application mobile : quoi écrire ? »

**Date de l’audit :** 24 juillet 2026  
**Mode :** audit éditorial, factuel, concurrentiel et SEO — lecture seule  
**Route auditée :** `/guides/cahier-des-charges-application-mobile`  
**Fichier inspecté :** `src/app/guides/cahier-des-charges-application-mobile/page.tsx`  
**Empreinte SHA-256 du fichier au contrôle :** `f036e49dcf9f34aca0317a76f5ea894b432d97d83b985fb2489a414a7e8b00aa`  
**Empreinte SHA-256 de l’image sociale :** `4fd291f94053fe42dc22d3f15c4bc677a2623538dab9e1c0466189708e23889d`  
**Empreinte SHA-256 du registre au contrôle :** `8663e6e84352121ec854393e049492a1c2b72f242166141e5d31e0911b43cb09`  
**Date publiée dans le registre :** 17 juillet 2026  
**Date modifiée dans le registre :** 21 juillet 2026  
**Dossier de recherche dédié trouvé :** non (`docs/research/cahier-des-charges-application-mobile.md` absent).  
**Modèle ou ressource téléchargeable trouvé dans la page :** non. Le texte explique de copier les dix titres et d’envoyer un PDF, mais aucun fichier Word, PDF, DOCX, CSV ou lien de téléchargement n’est intégré à cette route.  
**Build, navigateur réel et déploiement :** non exécutés dans cet audit.

> **Périmètre.** Ce rapport contrôle si le guide permet réellement à un dirigeant de produire un cahier des charges mobile exploitable et de comparer des devis. Il ne réécrit pas le guide. Aucun fichier de page, registre, manifeste, ressource ou configuration n’a été modifié. Les exemples chiffrés proposés ici sont des hypothèses d’audit, pas des tarifs ni des engagements.

## 1. Verdict exécutif

Le guide est **pédagogique, humain et déjà opérationnel** sur plusieurs sujets difficiles. Il commence par le problème réel — « quoi écrire pour obtenir un devis » —, explique qu’un dirigeant n’a pas à choisir React Native, Flutter ou le natif avant d’avoir décrit l’usage, propose dix sections, un exemple fictif de bout en bout et des critères de validation compréhensibles. Il protège aussi le budget en distinguant MVP, idées futures, application web/PWA et application mobile, et rappelle que les comptes Apple/Google doivent rester au nom de l’entreprise.

Il n’est cependant pas encore un **cahier des charges que trois prestataires peuvent chiffrer et tester sur la même base**. La structure promet dix sections mais le modèle reste abstrait : il n’y a pas de fiche éditable, d’identifiant d’exigence, de matrice des rôles, de contrat d’API, de modèle de données, de critères Given/When/Then, de tableau appareils/versions, de registre des permissions, de dictionnaire analytics ou de tableau TCO 12/36/60 mois. Le cas « Fleurs d’Aix » est utile pour comprendre la méthode, mais sa fourchette fictive de 20 000 à 28 000 € ne permet pas de comparer ce qui est inclus, ce qui est récurrent et ce qui arrive après le lancement.

La page traite bien hors-ligne, notifications, permissions et stores, mais laisse dans l’ombre les conflits de synchronisation, le chiffrement, les clés de signature, les environnements, l’observabilité, la disponibilité, la restauration, les obligations d’accessibilité et le plan de réversibilité. Les faits Apple/Google/CNIL sont liés à des sources officielles, ce qui est positif ; ils sont néanmoins volatils et doivent être datés et recontrôlés à chaque publication (par exemple, Google annonce déjà un niveau API Android 16 requis pour nouvelles applications et mises à jour à partir du 31 août 2026).

**Score actuel : 81/100 — NO-GO au standard renforcé tant qu’un P1 subsiste ; excellente introduction au cadrage, pas encore un modèle de consultation complet.**

- **P0 bloquant : 0** — aucune erreur critique démontrée. Les règles de stores sont susceptibles d’évoluer et doivent être revalidées, mais aucune fausse règle n’a été établie dans la lecture.
- **P1 avant version étalon : 13** — modèle réellement réutilisable, exigences testables, intégrations, sécurité, accessibilité, TCO, données et réversibilité restent insuffisants.
- **P2 pour dépasser 90 : 9** — benchmark plus profond, ressource téléchargeable, sensibilités et instrumentation éditoriale peuvent encore augmenter la valeur.

## 2. Ce que le lecteur comprend déjà bien

### Une plume adaptée à un dirigeant

- L’ouverture reformule une question vécue : faut-il décrire chaque écran, choisir la technologie, viser iPhone et Android ? La réponse « faire comprendre le même projet à tous les prestataires » est immédiatement claire.
- Le texte ne demande pas au non-technicien de parler en API ou en framework. Il part des utilisateurs, des situations réelles, de l’action principale et du résultat attendu.
- L’exemple « un technicien ouvre sa mission, ajoute trois photos hors ligne puis synchronise le rapport » montre mieux le besoin qu’une liste de fonctions.
- La notion de MVP est expliquée comme une première version réellement utile, pas comme une maquette jetable. Les exclusions sont encouragées, ce qui réduit les malentendus.
- L’exemple est honnêtement déclaré fictif. Aucun faux client, avis ou résultat commercial n’est inventé.

### Un bon socle de consultation

- Les dix sections couvrent entreprise/problème, utilisateurs, parcours, première version, plateformes, contraintes mobiles, données, publication, maintenance et budget/acceptation.
- Les cas sans réseau, paiement refusé, permission refusée, produit indisponible et notification refusée sont explicitement introduits.
- Les comptes Apple et Google au nom de l’entreprise, la remise des accès, du code et des données sont de bons réflexes de propriété.
- La répartition entreprise/prestataire/futurs utilisateurs est claire et le processus en cinq séances donne une façon réaliste d’avancer.
- Le CTA propose une relecture humaine avant chiffrage, sans promettre un prix ou une technologie.

## 3. Manques constatés sur le livrable promis

1. **Pas de véritable modèle.** Le lecteur doit copier les titres dans un document. Il n’obtient ni formulaire guidé, ni champs obligatoires, ni exemples de réponses, ni version Word/PDF à transmettre. Pour une requête « cahier des charges application mobile », c’est une perte de valeur et de conversion.
2. **Objectifs métier non mesurables.** « Réduire les appels » ou « apporter de la valeur » n’est pas converti en baseline, cible, délai, taux d’activation, rétention, commandes, temps gagné ou marge. Le devis ne peut pas proposer une solution orientée résultat.
3. **Utilisateurs sans matrice de rôles.** Clients, techniciens, managers, administrateurs, support et prestataires sont évoqués mais aucun tableau ne précise permissions, actions autorisées, données visibles ou séparation des responsabilités.
4. **Parcours sans exigences atomiques.** Les actions sont bonnes pour démarrer, mais il manque un ID, une priorité, une précondition, un résultat attendu, les erreurs, la preuve d’acceptation et le responsable de validation.
5. **MVP non chiffrable.** Les listes « indispensable/plus tard/absent » n’indiquent ni valeur métier, ni effort estimé, ni dépendance, ni risque, ni critère pour déplacer une fonction d’une version à l’autre.
6. **Backend/API presque invisible.** Authentification, API, modèle de données, synchronisation serveur, intégrations ERP/CRM, webhooks, import/export, environnements et contrats d’erreur sont indispensables au prix d’une app mais peu documentés.
7. **Hors-ligne trop générique.** « Deux modifications synchronisées dans le bon ordre » ne dit pas qui gagne en cas de conflit, si les pièces jointes sont chiffrées, combien de temps elles restent locales, comment reprendre une synchronisation interrompue ni comment informer l’utilisateur.
8. **Parc appareils incomplet.** Il faut une matrice iOS/Android, version minimale, modèles bas de gamme, tailles d’écran, tablettes/foldables, orientation, qualité réseau, pays et appareils réellement utilisés. « iPhone et Android » est insuffisant pour tester et chiffrer.
9. **Stores sous-décrits.** Les comptes, fiches et tests sont présents, mais pas les certificats/signing keys, bundle/package IDs, TestFlight/Play tracks, Data Safety/Privacy Nutrition Labels, âge et audience, comptes de démonstration, transferts d’app, obligations de paiement numérique ou plan de réponse au rejet.
10. **Sécurité et RGPD incomplets.** La table des données ne donne pas base légale, responsable/sous-traitant, DPA, minimisation, chiffrement en transit/au repos, secrets, journalisation, rétention, export/suppression, sauvegardes, incident, droits d’administration ou données sensibles.
11. **Accessibilité absente.** Aucun objectif WCAG/WCAG2Mobile, taille de texte, lecteur d’écran, focus, contraste, zone tactile, réduction des animations, orientation ou test utilisateur n’est prévu.
12. **Analytics et preuve de valeur absents.** « Mesure d’usage » figure dans une ligne, mais aucun événement, nommage, consentement, entonnoir, source d’acquisition, KPI, dashboard ou règle de décision n’est décrit.
13. **Budget/TCO trop vague.** La fourchette fictive 20 000–28 000 € HT ne décompose pas étude, UX, mobile, backend, back-office, comptes, cloud, outils, publication, support, maintenance et évolutions sur 12/36/60 mois. Les mêmes écrans peuvent cacher des périmètres radicalement différents.
14. **Maintenance sans SLA.** Le texte liste les responsabilités mais pas niveaux de sévérité, délais de réponse/rétablissement, couverture, monitoring, RTO/RPO, mises à jour OS, dépendances et coûts annuels.
15. **Réversibilité non transformée en remise.** La propriété est mentionnée, mais il manque une liste des livrables : dépôt, historique, CI/CD, certificats, clés, secrets, schéma de données, sauvegardes, dashboards, contrats API, comptes stores et procédure de transfert.
16. **Comparaison de devis insuffisante.** « Comparez les hypothèses avant les montants » est juste, mais il manque une grille de notation commune et l’obligation de faire apparaître inclusions, exclusions, jours/hommes, dépendances, risques et change requests.
17. **Mise en œuvre et QA non prouvées.** Les métadonnées Article/Breadcrumb sont présentes dans le code, mais aucun build, test de liens, JSON-LD, rendu 320–1600 px, vérification de tableau mobile, artefact téléchargé ou route publiée n’a été contrôlé dans cet audit.

## 4. Audit ciblé du modèle et de la ressource

Le modèle est annoncé comme « dix sections », mais la page ne contient qu’un tableau de structure et des exemples dispersés. Aucun `href` vers un fichier de téléchargement n’a été trouvé dans le fichier contrôlé, et aucune ressource correspondante n’a été repérée par recherche du slug. Le lecteur peut copier le texte, mais il doit lui-même créer les colonnes, les cases à cocher et les critères.

**Ressource à construire en P1 :** un pack public réellement utile, composé de :

- un DOCX/Google Doc de 12 à 15 pages avec champs à remplir et exemples fictifs ;
- un PDF identique pour consultation des prestataires ;
- un tableur de priorisation (valeur, effort, risque, dépendances, V1/V2) ;
- un tableau appareils/versions/contraintes de test ;
- une matrice rôles-données-permissions ;
- un registre API/intégrations et un dictionnaire d’événements analytics ;
- une grille de comparaison de devis et un calcul TCO 12/36/60 ;
- une checklist de publication, sécurité, accessibilité, acceptation et réversibilité.

Le téléchargement doit afficher une version, une date de mise à jour, la licence d’utilisation et la limite « outil de cadrage général, pas avis juridique ». Un lien de téléchargement réellement fonctionnel, une vérification MIME/nom de fichier, une ouverture dans Word/PDF et un contrôle mobile doivent être testés avant de le présenter comme ressource.

## 5. Benchmark de couverture internationale

Les pages concurrentes servent à repérer les angles et les formats. Leurs prix, témoignages et méthodes ne sont pas des faits transposables au marché français.

| Marché / ressource consultée | Couverture ou format différenciant | Ce que le guide doit reprendre ou dépasser |
|---|---|---|
| **France — AquilApp, 22 mai 2026** | Huit sections, compatibilité avec l’agile, erreurs et consultation prestataire ; parle aussi du coût d’un mauvais cadrage. | Ajouter le lien entre cahier des charges, backlog priorisé, décisions révisables et chiffrage par lot. |
| **France — La Fabrique du Net, 9 juillet 2026** | Modèle gratuit, sept rubriques, backend/API, choix natif/cross-platform, stores, budget et facteurs de coût. | Le guide actuel doit rendre le backend/API et les facteurs de coût aussi visibles que les écrans. |
| **France — TikupMedia, 4 mai, mis à jour 13 juin 2026** | Onze sections, modèle 2026, exemple, erreurs et retour d’expérience revendiqué sur des projets. | Ajouter la section analytics, sécurité, ownership et réversibilité ; ne pas reprendre un chiffre de projets sans preuve vérifiable. |
| **France/Suisse — Apptitude, version augmentée, juillet 2026** | Distingue cahier de besoins et choix de solution, traite applications web/mobile et organisation agile. | Introduire une colonne « besoin / preuve / décision / hypothèse » pour éviter de figer trop tôt la technologie. |
| **États-Unis — LegalClarity, 16 juin 2026** | Modèle Word orienté business requirements, monétisation, maintenance et sévérité des bugs ; relie le document à la prévention de litiges. | Ajouter modèle Word, monétisation, SLA et changement de périmètre, sans présenter un cahier comme conseil juridique. |
| **États-Unis — Mind Studios, mis à jour 26 juin 2026** | Document de requirements par niveaux, architecture, sécurité, analytics et sample ; approche plus technique. | Donner une annexe technique optionnelle plutôt que surcharger le dirigeant dès l’introduction. |
| **Royaume-Uni — guides anglophones de mobile app requirements** | Les meilleurs formats séparent business requirements, functional requirements et non-functional requirements. | Ajouter une distinction explicite : résultat métier, comportement observable et qualité attendue (performance, sécurité, disponibilité). |
| **Australie — guides d’agences app/mobile 2026** | Insistent sur device matrix, store readiness, post-launch support et coût de maintenance. | Ajouter parc réel, versions minimales, budget de support et calendrier de mise à niveau des OS. |
| **DACH — appels d’offres et spécifications publiques** | Décrivent exigences ID, critères d’acceptation, support, interfaces, protection des données et maintien en conditions opérationnelles. | Reprendre le niveau de traçabilité (ID, test, responsable, preuve) dans une version simple pour TPE/PME. |

**Angle différenciant à viser :** une ressource en français qui reste lisible pour un dirigeant tout en produisant un document suffisamment structuré pour qu’une équipe produit, un développeur mobile et un juriste/DSI puissent vérifier les mêmes hypothèses.

## 6. Structure cible du cahier à fournir

Le modèle devrait conserver les dix sections de l’article mais ajouter, dans chaque section, quatre colonnes : **décision**, **hypothèse**, **preuve attendue**, **responsable/date**.

| Bloc cible | Ajouts nécessaires pour obtenir un devis comparable |
|---|---|
| Problème et objectifs | situation actuelle mesurée, cible à 3/6/12 mois, KPI, coût du statu quo, résultat qui justifie l’investissement |
| Utilisateurs et rôles | persona/job, fréquence, appareils, contexte réseau, permissions, rôle dans l’équipe et données accessibles |
| Parcours | préconditions, étapes, états vides/erreurs, résultat observable, ID d’exigence, priorité, test d’acceptation |
| V1/V2/hors périmètre | valeur, effort, dépendance, risque, seuil de passage en V2, fonctions explicitement exclues |
| Mobile/appareils | OS minimum et cible, modèles, tailles, orientation, tablette/foldable, pays, réseau, performances |
| Backend/API | systèmes existants, données maîtres, auth, API, imports/exports, webhooks, environnements, SLA |
| Données/sécurité/RGPD | registre des données, base légale à qualifier, rôles, chiffrement, secrets, journalisation, conservation, suppression, incident |
| Accessibilité/UX | WCAG2Mobile, lecteur d’écran, contraste, texte redimensionné, zones tactiles, erreurs, tests avec personnes concernées |
| Stores/monétisation | comptes, certificats, test tracks, fiches, Privacy/Data Safety, achats intégrés, taxes/frais, transfert et rejet |
| Analytics/support | événements, consentement, KPI, crash reporting, support, sévérité, RTO/RPO, mises à jour OS et dépendances |
| Budget/planning | phases, livrables, jours/hommes, hypothèses, risques, 12/36/60 mois, cloud, stores, support, évolutions |
| Propriété/sortie | dépôt, code, design, données, clés, comptes, CI/CD, sauvegardes, documentation, procédure de transfert |

## 7. Exemple chiffré à ajouter (illustratif)

L’exemple « Fleurs d’Aix » doit garder son statut fictif mais montrer un calcul vérifiable. Cas égal : 2 plateformes (iOS/Android), 3 rôles (client, boutique, admin), catalogue de 120 produits, 1 API de stock, paiement, notifications, un back-office, 5 000 utilisateurs actifs mensuels, deux environnements, analytics avec consentement, support en heures ouvrées.

| Poste | V1 à chiffrer | Récurrent à 12/36/60 mois |
|---|---|---|
| Discovery/UX/tests utilisateurs | ateliers, parcours, prototype, tests | recherche et optimisation futures |
| Mobile | iOS/Android, authentification, catalogue, panier, notifications | adaptation OS, crash fixes, versions stores |
| Backend/back-office | API, stock, paiement, rôles, exports, logs | cloud, sauvegarde, supervision, sécurité |
| Publication | comptes entreprise, fiches, captures, TestFlight/Play | renouvellements, soumissions, support review |
| Mesure et confidentialité | événements, consentement, politique, suppression | audit, modification des traceurs et SDK |
| Maintenance | SLA par gravité, astreinte éventuelle, corrections | forfait annuel ou banque d’heures |

Le guide peut donner une **méthode**, pas un prix de marché : `TCO = conception + développement + comptes/stores + cloud/SDK + support + maintenance + évolutions + temps interne + réserve de sortie`. Afficher les trois scénarios (basique, métier, sensible) et faire varier utilisateurs, intégrations, hors-ligne, nombre de plateformes et niveau de support. La fourchette de 20 000–28 000 € doit être reliée à des livrables précis ou présentée comme une simple illustration sans valeur comparative.

## 8. Faits techniques à sécuriser

- La page Apple Developer Program indique une adhésion de **99 $/an** et l’accès à TestFlight ; la devise, les taxes et le type de compte doivent être précisés pour une entreprise française.
- Apple App Review indique que 90 % des soumissions sont examinées en moins de 24 heures en moyenne, mais rappelle que les soumissions incomplètes peuvent être retardées. Le guide le dit correctement ; il devrait ajouter compte de démonstration, politique de confidentialité, captures exactes et plan de réponse au rejet.
- Apple App Store Improvements mentionne les apps non mises à jour depuis trois ans et sous un seuil minimal de téléchargements, avec demande de mise à jour sous 90 jours. C’est une règle actuelle à dater, pas une garantie de retrait automatique de toutes les apps.
- Android 13 introduit la permission runtime `POST_NOTIFICATIONS` pour les nouvelles installations ciblées ; la demande doit être contextualisée. La page du guide est pertinente mais devrait distinguer l’installation, le refus et le changement ultérieur dans les réglages.
- La page officielle Google Play consultée le 24 juillet 2026 annonce qu’à partir du **31 août 2026**, nouvelles applications et mises à jour doivent cibler Android 16/API 36 (avec exceptions de facteurs de forme). Cette information actuelle n’est pas dans le guide ; un tableau de veille OS serait plus durable qu’un chiffre isolé.
- La règle des 12 testeurs/14 jours ne concerne pas tous les comptes : elle vise les comptes personnels créés après le 13 novembre 2023. Le document doit garder cette portée et renvoyer vers la page d’aide officielle le jour de la soumission.
- La CNIL a une recommandation mobile modifiée en 2025 ; la page actuelle lie la recommandation mais ne transforme pas ses exigences en registre actionnable (permissions, SDK, information, suppression, sous-traitants).
- W3C **WCAG2Mobile** fournit une guidance officielle pour appliquer WCAG 2.2 aux applications mobiles ; elle doit être citée et convertie en critères de recette simples. La page actuelle ne traite pas l’accessibilité.

## 9. P0/P1/P2 numérotés

### P0 — bloquant

Aucun P0 démontré. Une règle de store citée avec une portée universelle alors qu’elle ne concerne qu’un type de compte, un montant actuel présenté comme fixe en France, une fausse promesse de publication ou un téléchargement cassé d’un modèle présenté comme disponible ferait passer la porte P0 en fermée.

### P1 — avant de considérer le guide comme version étalon

- **P1-MOB-01 — vrai modèle.** Produire un DOCX/PDF éditable avec champs, exemples, version, date et licence ; tester téléchargement, ouverture et rendu.
- **P1-MOB-02 — objectifs mesurables.** Ajouter baseline, KPI, cible, horizon, valeur du problème non résolu et règle de décision.
- **P1-MOB-03 — rôles et permissions.** Ajouter matrice utilisateurs/données/actions, y compris back-office et support.
- **P1-MOB-04 — exigences testables.** Attribuer un ID, une priorité, une précondition, un résultat, les erreurs et une preuve d’acceptation à chaque parcours.
- **P1-MOB-05 — V1/V2 comparable.** Relier priorité, effort, dépendance, risque et seuil de passage à la version suivante.
- **P1-MOB-06 — appareils/OS.** Ajouter matrice iOS/Android, versions minimales/cibles, modèles, tablettes/foldables, réseau et orientation.
- **P1-MOB-07 — backend/API.** Documenter auth, données maîtres, intégrations, sync, conflits, imports/exports, environnements, disponibilité et performance.
- **P1-MOB-08 — offline/sécurité.** Décrire cache, queue, conflits, reprise, chiffrement, secrets, pièces jointes, logs, sauvegardes et incidents.
- **P1-MOB-09 — RGPD/accessibilité.** Ajouter registre de données, rôles CNIL, conservation/suppression, consentement, SDK, WCAG2Mobile et tests humains.
- **P1-MOB-10 — stores complet.** Ajouter comptes, certificats, IDs, TestFlight/Play tracks, fiches, privacy/data safety, paiements, transferts, refus et calendrier.
- **P1-MOB-11 — analytics/support.** Ajouter dictionnaire d’événements, KPI, crash reporting, sévérité, SLA, RTO/RPO, mises à jour OS et coûts.
- **P1-MOB-12 — TCO.** Décomposer conception, mobile, backend, publication, cloud, support, maintenance, évolution, temps interne et sortie à 12/36/60 mois.
- **P1-MOB-13 — procurement/ownership.** Ajouter grille de comparaison des devis et liste de remise (code, dépôt, design, données, clés, CI/CD, comptes, sauvegardes, docs).

### P2 — amélioration importante

- **P2-MOB-01 — téléchargement sans friction.** Relier le guide à une ressource publique dans le menu Ressources et mesurer clics/téléchargements.
- **P2-MOB-02 — exemple complet.** Ajouter une exigence ID par parcours de Fleurs d’Aix, avec calcul de TCO et cas négatif.
- **P2-MOB-03 — alternatives.** Ajouter une matrice mobile/web/PWA/SaaS/outil existant et le test qui départage les options.
- **P2-MOB-04 — test utilisateur.** Donner un protocole de cinq tâches, profils, taux de réussite, temps, erreurs et décision.
- **P2-MOB-05 — internationalisation.** Ajouter langue, formats de date/devise, fuseaux, pays de stores, droit local et support.
- **P2-MOB-06 — monétisation.** Distinguer abonnement, achat intégré, paiement web, commission store et flux B2B ; demander une validation actuelle.
- **P2-MOB-07 — produit vivant.** Ajouter roadmap, dépréciation SDK, migration de données, releases progressives et plan de rollback.
- **P2-MOB-08 — sécurité avancée.** Ajouter threat model simplifié, dépendances/SBOM, pentest selon le risque, gestion des comptes privilégiés.
- **P2-MOB-09 — QA web.** Contrôler metadata/JSON-LD, liens, tableaux mobiles, build et route réelle ; ne pas présenter la page comme publiée sans preuve.

## 10. Portes P1–P4

- **P1 — recherche/cadrage : fermée.** Le guide ne dispose pas de dossier de recherche et son modèle n’est pas un artefact téléchargeable ; le benchmark international n’est pas intégré.
- **P2 — rédaction/intégration : à faire.** Il faut intégrer exigences, API, données, accessibilité, TCO, stores détaillés et ressources éditables avant d’améliorer le style.
- **P3 — contre-audit indépendant : non validée.** Le présent rapport est le contrôle initial ; aucun snapshot corrigé n’a été contre-vérifié.
- **P4 — plume humaine + QA : partiellement prometteuse, non prouvée.** Le texte est lisible et les exemples sont honnêtement fictifs, mais aucune relecture par dirigeant, vérification anti-IA, ouverture de modèle, build ou rendu responsive n’a été exécutée.

## 11. Scorecard

| Axe | Note | Justification |
|---|---:|---|
| Intention et promesse | 9/10 | Répond directement à « quoi écrire pour obtenir un devis ». |
| Pédagogie humaine | 9/10 | Langage clair, situations métier, jargon traduit, exemple fictif honnête. |
| Profondeur | 8/10 | Mobile/stores/MVP présents ; backend, données, QA et maintenance détaillée manquent. |
| Preuves | 8/10 | Bon socle Apple/Google/CNIL ; règles volatiles non toutes datées dans le corps et dossier absent. |
| Comparaison | 7/10 | Alternatives web/PWA mentionnées ; grille de devis, TCO et options de réalisation absents. |
| Chiffrage | 6/10 | Fourchette fictive utile mais sans périmètre, postes ou horizon récurrent. |
| Risques/obligations | 7/10 | Permissions, stores et propriété évoqués ; sécurité, RGPD, accessibilité et réversibilité incomplètes. |
| Originalité | 9/10 | Bon refus du choix technologique prématuré et processus en cinq séances. |
| Conversion honnête | 8/10 | CTA de relecture pertinent ; absence de ressource téléchargeable limite la valeur immédiatement capturable. |
| SEO/UX technique | 8/10 | Metadata/Article/Breadcrumb visibles ; QA mobile, lien, build et production non vérifiés. |
| **Total** | **81/100** | Très bon guide d’amorçage ; pas encore un cahier de consultation et de recette complet. |

## 12. Conditions de sortie

Le guide pourra devenir une version étalon lorsque P1-MOB-01 à P1-MOB-13 seront traités, qu’un second agent recalculera le TCO et les exigences, que les règles Apple/Google seront revalidées à la date de publication, et que P4 prouvera téléchargement, ouverture, lecture dirigeant, accessibilité de base, responsive, build, liens et données structurées. Tant que ces preuves ne sont pas produites, il est honnête de le qualifier de **très bon guide d’amorçage à compléter**, pas de modèle complet prêt à envoyer tel quel à trois prestataires.

## 13. Sources vérifiées le 24 juillet 2026

### Sources officielles/primaires

- Apple Developer Program, adhésion et TestFlight : https://developer.apple.com/programs/ — consulté le 24 juillet 2026 ; prix affiché 99 $/an.
- Apple App Review : https://developer.apple.com/distribute/app-review/ — consulté le 24 juillet 2026 ; 90 % en moins de 24 h en moyenne, exigences de complétude et privacy.
- Apple App Store Improvements : https://developer.apple.com/support/app-store-improvements/ — consulté le 24 juillet 2026 ; règle des trois ans, seuil de téléchargements et délai de 90 jours.
- Apple confidentialité/usage des données : https://developer.apple.com/app-store/user-privacy-and-data-use/
- Google Play, tests ouvert/fermé/interne : https://support.google.com/googleplay/android-developer/answer/9845334?hl=fr — portée des pistes de test et publication.
- Google Play, exigences niveau d’API cible : https://support.google.com/googleplay/android-developer/answer/11926878?hl=fr — Android 16/API 36 à partir du 31 août 2026 pour nouvelles apps et mises à jour, selon les exceptions listées.
- Google Play, règle des comptes personnels et tests : https://support.google.com/googleplay/android-developer/answer/14151465 — à revalider à chaque soumission ; la règle n’est pas universelle à tous les types de comptes.
- Google Play, frais de service : https://support.google.com/googleplay/android-developer/answer/11131145
- Android, permission runtime des notifications : https://developer.android.com/develop/ui/compose/notifications/notification-permission — URL actuelle après redirection du lien historique.
- CNIL, recommandations applications mobiles : https://www.cnil.fr/fr/recommandations-applications-mobiles — recommandation modifiée en 2025, à décliner en registre de données/SDK/permissions.
- CNIL, PDF de la recommandation modifiée : https://www.cnil.fr/sites/default/files/2025-04/recommandation-applications-mobiles-modifiee.pdf
- W3C, *Guidance on Applying WCAG 2.2 to Mobile Applications* : https://www.w3.org/TR/wcag2mobile-22/

### Benchmark éditorial — couverture et formats, non preuve de tarifs français

- AquilApp, 22 mai 2026 : https://www.aquilapp.fr/ressources/projet-mobile/cahier-des-charges-application-mobile
- La Fabrique du Net, 9 juillet 2026 : https://www.lafabriquedunet.fr/agences/tendances/exemple-cahier-des-charges-application-mobile
- Spop, 8 juin 2026 : https://spop.agency/articles/cahier-des-charges-application-mobile
- TikupMedia, publié 4 mai, mis à jour 13 juin 2026 : https://tikupmedia.com/blog/cahier-des-charges-application-mobile-modele
- Apptitude, version augmentée : https://apptitude.ch/digital-insights/comment-rediger-le-cahier-des-charges-de-votre-application-web-ou-mobile-version-augmentee/
- LegalClarity (US), 16 juin 2026 : https://legalclarity.org/mobile-app-requirements-document-template-for-word/
- Mind Studios (US), mis à jour 26 juin 2026 : https://themindstudios.com/blog/mobile-app-requirements-document/
- NHS England, exemple public de spécification de données/API mobile, édité 2 juillet 2026 : https://digital.nhs.uk/services/nhs-app/nhs-app-documents
