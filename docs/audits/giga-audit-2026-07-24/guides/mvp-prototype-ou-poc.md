# Giga-audit — « Prototype, POC ou MVP : lequel faut-il construire ? »

**Date de l’audit :** 24 juillet 2026  
**Mode :** audit éditorial, factuel, concurrentiel et SEO — lecture seule  
**Route auditée :** `/guides/mvp-prototype-ou-poc`  
**Fichier inspecté :** `src/app/guides/mvp-prototype-ou-poc/page.tsx`  
**Empreinte SHA-256 du `page.tsx` :** `487a2c4a056ea4795b98b5b8093d2b4ced86e44f904e57c025a49a357aa05c9d`  
**Empreinte SHA-256 de l’image sociale :** `be9639b01ff2a049db6d072b39b3e76e381961f1d1d76fbe748c3c609268c1d1`  
**Empreinte SHA-256 du dossier de recherche :** `cf187e27023f280f5e6f72cea74c6987aa43caf473a2454b5cc601b3a7dfba78`  
**Empreinte SHA-256 du registre au contrôle :** `8663e6e84352121ec854393e049492a1c2b72f242166141e5d31e0911b43cb09`  
**Registre contrôlé :** `src/lib/guides.ts` — publié le 22 juillet 2026, modifié le 22 juillet 2026, lecture annoncée 14 min  
**Dossier de recherche :** présent (`docs/research/mvp-prototype-ou-poc.md`) et contrôlé sans modification.  
**Modèle/ressource téléchargeable :** non trouvé dans la page ; le CTA « Copier les 10 questions » pointe vers une ancre et non vers un fichier.  
**Build, navigateur, production, indexation :** non exécutés dans cet audit.

> **Périmètre.** Ce rapport est un contre-audit en lecture seule selon `docs/workflow-maitre-guides-4-passes.md`. Il vérifie la promesse faite à un dirigeant : choisir entre prototype, POC, pilote, MVP ou absence de développement, puis obtenir une mission comparable et une décision exploitable. Aucun guide, registre, code, recherche, Git ou déploiement n’a été modifié.

## 1. Verdict exécutif

Le guide est **l’un des meilleurs guides de la série sur la progression pédagogique**. Il commence par la question du dirigeant (« montrer des écrans, vérifier une difficulté technique ou développer une première version utilisable ? »), donne une réponse courte, sépare clairement quatre objets souvent confondus, puis ramène chaque choix à la question qui bloque. Le tableau « ce que le format ne démontre pas » évite une erreur commerciale fréquente : croire qu’un POC technique prouve l’appétence du marché ou qu’un prototype prouve la production.

La page a aussi une vraie opinion professionnelle : construire le test le plus simple, accepter de ne rien développer, écrire la décision avant le test, ne pas acheter les quatre formats par réflexe, et conserver les résultats même si le code est jeté. L’exemple fictif du logiciel de bons de commande est honnêtement déclaré et montre comment le même produit peut donner lieu à quatre expériences différentes.

Elle n’est toutefois pas encore une **méthode de décision complète**. Les dix questions sont affichées comme des cartes mais ne constituent pas une ressource éditable, et aucune grille ne permet de comparer trois devis sur un même périmètre. Les scénarios restent essentiellement qualitatifs : le seul calcul (500 valeurs, seuil illustratif de 95 %) est utile pour expliquer un POC mais ne chiffre ni coût, ni délai, ni coût évité, ni TCO sur 12/36/60 mois. Le guide distingue l’apprentissage technique, utilisateur et métier, mais ne sépare pas assez explicitement la validation du problème, la volonté de payer, la sécurité, l’intégration, la charge opérationnelle et la capacité de passer à l’échelle.

Le socle de sources est honnête et plutôt primaire (GOV.UK, CNIL, EURAXESS, Légifrance), mais deux sources centrales sont datées ou indirectes : l’article d’Eric Ries de 2009 et la page GOV.UK alpha mise à jour en 2019. Elles conviennent pour un cadre de pensée, pas pour des règles actuelles d’entreprise. La page doit davantage marquer `FAIT VÉRIFIÉ`, `DÉDUCTION`, `RECOMMANDATION HAGNÉRÉ CODE` et `EXEMPLE ILLUSTRATIF FICTIF`, conformément au workflow.

**Score actuel : 84/100 — NO-GO au standard renforcé tant qu’un P1 subsiste ; très bon guide d’arbitrage, pas encore un protocole de test chiffré et transmissible.**

- **P0 bloquant : 0** — aucune erreur factuelle critique démontrée dans le périmètre lu.
- **P1 avant version étalon : 11** — ressource, critères chiffrés, TCO, comparabilité des devis, preuves et QA restent à renforcer.
- **P2 pour dépasser 90 : 9** — tests statistiques, alternatives « blue ocean », accessibilité, instrumentation et maintenance peuvent encore augmenter la valeur.

## 2. Forces vérifiées

### Pédagogie humaine

- Le début part d’une situation téléphonique réelle et donne le verdict avant le vocabulaire.
- Prototype, POC, pilote et MVP sont expliqués par la question qu’ils résolvent, non par des slogans de consultant.
- La différence entre « montrer », « faire fonctionner un point difficile », « observer en situation » et « apprendre avec de vrais utilisateurs » est intelligible.
- Le texte dit explicitement que les définitions ne forment pas une norme universelle et que le contenu du devis compte plus que son étiquette.
- Les contre-exemples (« un POC réussi ne prouve pas que des clients achèteront ») protègent le lecteur contre les promesses excessives.

### Décision et conversion

- Le tableau initial compare aussi ce que chaque format **ne démontre pas**, ce qui est plus utile qu’un tableau d’avantages générique.
- La page autorise l’abandon, le report, l’achat d’un outil existant et le test manuel. Cette possibilité de conclure « ne développez pas » crédibilise le CTA.
- Les dix questions structurent une demande de devis et la fin propose une décision explicite : poursuivre, corriger/retester, acheter autrement, reporter ou arrêter.
- La propriété du code, des résultats, des données de test et des droits est introduite au bon moment.
- Le CTA arrive après une valeur autonome et décrit la sortie attendue : question testable, format simple et éléments à récupérer.

### Intégration/SEO visible dans le code

- Metadata, canonical, Article JSON-LD et BreadcrumbList sont construits à partir du registre.
- Le titre, le H1, la meta et le corps partagent la même intention sans bourrage lexical.
- Les liens internes vers validation d’idée, MVP SaaS, cahier des charges, prestataire et prix forment un parcours cohérent.
- Une seule FAQ visible est transmise à `GuideLayout`; aucune FAQPage interdite n’a été ajoutée.

## 3. Manques et risques précis

1. **Le « test le plus simple » n’est pas quantifié.** Le lecteur ne voit pas le coût, le délai, le nombre de participants, la charge interne ou le niveau de preuve qui différencient un entretien, une maquette, un POC, un pilote et un MVP.
2. **Pas de comparaison à périmètre égal.** Le même logiciel fictif change d’objectif selon le format, mais aucune table ne garde fixes les utilisateurs, données, intégrations, environnement, support et horizon pour comparer les offres.
3. **Pas de scénarios simple/central/exigeant.** Le workflow maître le demande pour prix, ROI, délai et comparaison. Le seul seuil de 95 % est explicitement illustratif, mais ne montre pas une sensibilité (90/95/99 %), un coût par erreur ou un point de bascule.
4. **Valeur métier non mesurée.** Le guide demande une décision, mais pas de baseline, KPI, cible, coût du statu quo, temps économisé, taux d’activation, rétention, marge ou volonté de payer. Un MVP peut donc « apprendre » sans savoir ce qui justifie la dépense.
5. **Validation de problème et validation de marché mélangées.** L’entretien, l’usage et la volonté de payer sont évoqués indirectement ; il faut séparer désirabilité, faisabilité, viabilité économique, adoption et conformité.
6. **Pilote insuffisamment opérationnel.** Participants, aide et retour arrière sont nommés, mais pas durée, volume, groupe de contrôle, critères d’arrêt, responsable incident, données autorisées, support et plan de généralisation.
7. **POC technique insuffisamment spécifié.** Il manque l’environnement de test, les versions, les données représentatives, les cas d’échec, la latence, le coût par unité, les seuils par type d’erreur, les dépendances et la preuve de reproductibilité.
8. **MVP sans critères de production.** La page rappelle accès, données, sauvegardes, aide et incidents, mais ne donne pas sécurité, disponibilité, monitoring, sauvegarde/restauration, support, droits, accessibilité, RGPD, réversibilité ou coût après le premier mois.
9. **Ressource annoncée mais non téléchargeable.** « Copier les 10 questions » est une ancre, pas un DOCX/PDF/CSV. Le lecteur doit recopier les cartes sans cases, version, champs, espace de réponse ni grille d’offre.
10. **Propriété et réversibilité incomplètes.** Les fichiers et droits sont séparés, mais le guide ne liste pas dépôt, historique, CI/CD, secrets, clés, comptes cloud, données, sauvegardes, journaux, SDK et procédure de transfert.
11. **Comparaison des prestataires trop légère.** Il n’existe pas de scorecard identique (périmètre, livrables, hypothèses, exclusions, délais, équipe, tests, maintenance, changement, propriété, sortie).
12. **Sources vieillissantes ou non primaires.** Eric Ries 2009 n’est pas une norme ; le guide GOV.UK alpha est mis à jour en 2019 ; EURAXESS concerne la valorisation de la recherche. Leur portée et date doivent être visibles près de chaque conclusion.
13. **Accessibilité quasiment absente.** Le guide parle des utilisateurs mais ne demande ni inclusion de personnes handicapées, ni critères WCAG, ni test clavier/lecteur d’écran, ni contraste/zoom/assistance.
14. **Données et sécurité trop comprimées.** La CNIL est citée pour les environnements et données fictives, mais aucune checklist ne couvre minimisation, séparation, anonymisation, chiffrement, droits, conservation, sous-traitants, incident ou données sensibles.
15. **« Blue oceans » peu développés.** Les alternatives manuelles et outils existants sont mentionnés, mais pas les options concierge, no-code, service humain assisté, formulaire + tableur, API existante, expérience web/PWA ou achat vertical. Le lecteur risque encore de croire qu’il faut choisir un artefact logiciel.
16. **Pas de plan après décision.** La décision est écrite, mais la page n’impose pas une mesure de départ, une fréquence de revue, un propriétaire, un seuil de retour arrière et une date de fin de l’expérimentation.
17. **QA technique non prouvée.** Aucun build, test de liens, vérification responsive 320–1600 px, contrôle du texte en mobile, validation JSON-LD, route déployée ou test d’ancre n’a été exécuté dans cet audit.

## 4. Ressource et actif signature à produire

Le guide promet une fiche de dix questions mais ne fournit pas d’artefact. Il faut soit créer la ressource, soit retirer la promesse de copie. La ressource recommandée est un pack libre, sans capture d’adresse :

- une fiche DOCX/PDF « Quel test construire ? » avec les dix questions et zones de réponse ;
- une matrice Prototype/POC/Pilote/MVP/Manuel/Outil existant avec question, preuve, coût, délai, risque, livrable, décision et limites ;
- un calculateur TCO 12/36/60 mois et temps interne ;
- une grille de seuils POC (exactitude, latence, coût par unité, erreurs bloquantes) ;
- un protocole de pilote (participants, durée, consentement, support, arrêt, retour arrière) ;
- une grille de comparaison de devis et un registre de remise/propriété ;
- une checklist sécurité, RGPD, accessibilité et passage en production.

**Test de ressource requis :** lien public, bon MIME/nom de fichier, téléchargement sans formulaire, ouverture Word/PDF, version/date visibles, calculs recomputés dans trois scénarios et lecture mobile de la fiche. Dans l’état audité, aucun de ces tests ne peut être déclaré réalisé.

## 5. Benchmark FR/US/UK/AU/DACH

Les concurrents servent à identifier la couverture et les formats. Leurs définitions, durées et prix ne sont pas des normes ni des tarifs Hagnéré Code.

| Marché / ressource | Apport utile observé | Lacune à combler chez Hagnéré Code |
|---|---|---|
| **France — Asana, POC guide 2026** | Compare POC/prototype/MVP sur but, public, durée et livrables ; insiste sur décideurs et documentation. | Ajouter public, durée, livrables et journal de résultats dans chaque format, sans reprendre ses durées comme une règle. |
| **France — Asana, MVP guide 15 avril 2026** | Décrit MVP/POC/prototype/MLP/MMP et donne des étapes, cas et métriques. | Distinguer apprentissage validé, adoption, rentabilité et niveau de produit ; éviter les exemples de grandes startups non transposables. |
| **France — guides d’agences 2026** | Les pages françaises mettent l’accent sur réduction du risque et erreurs de cadrage, mais confondent souvent POC et pilote. | Conserver l’honnêteté du guide et ajouter une matrice « ce qui est prouvé / ce qui ne l’est pas ». |
| **États-Unis — UXPin, comparaison 2026** | Oppose prototype (UX), POC (faisabilité) et MVP (usage réel) avec conseils sur le moment de tester. | Ajouter la viabilité économique et le coût évité ; un MVP fonctionnel ne prouve pas automatiquement le product-market fit. |
| **États-Unis — Mind Studios/Zulbera, 2026** | Relie le choix au risque dominant et au niveau de maturité du produit ; parle de runway et de décision. | Décliner le risque en temps, argent, intégration, sécurité, adoption et conformité pour un dirigeant de PME. |
| **Royaume-Uni — GOV.UK Service Manual** | Distingue alpha, prototype, test d’hypothèses risquées, accessibilité, budget, équipe, passage ou arrêt. | Le guide cite GOV.UK mais ne reprend pas encore la grille complète : risque, inclusion, coût-efficacité et décision de passer en beta. |
| **Royaume-Uni — Cabinet Office pilot guidance** | Encadre test en conditions réelles, échantillon, organisation et limites de généralisation. | Ajouter durée, participants, critère d’arrêt, retour arrière et prudence sur l’extrapolation. |
| **Australie — AUZtec, 22 juillet 2026** | Structure par incertitude la plus risquée et recommande de mesurer les apprentissages avec prudence sur petit échantillon. | Introduire intervalle de confiance ou au moins taille d’échantillon, biais et différence entre signal et preuve. |
| **Australie — guides startup 2026** | Opposent MVP et pilote selon adoption/usage réel et proposent un verdict rapide. | Ajouter l’option de ne rien construire et le coût du support réel, rarement chiffré. |
| **DACH — guides produit allemands 2026** | Parlent de « Risikohypothese », de test de faisabilité, de prototypage UX et de décision go/no-go ; certains séparent pilot et MVP. | Traduire hypothèse de risque, preuve, seuil et décision pour un non-technicien sans importer le jargon allemand. |
| **Marchés publics européens** | Les cahiers publics donnent identifiants d’exigence, critères d’acceptation, interfaces, sécurité, support et maintien en conditions opérationnelles. | Fournir une annexe de traçabilité légère, utilisable par une PME qui consulte plusieurs prestataires. |

**Gain d’information différenciant :** ne pas faire un article plus long, mais fournir le même test sous cinq options (manuel, prototype, POC, pilote, MVP), avec question, seuil, coût complet, responsable, limites, résultat et décision suivante.

## 6. Comparaison à périmètre égal

Cas proposé, **exemple illustratif fictif** à présenter comme tel : logiciel interne de lecture de bons de commande pour 20 utilisateurs, 1 000 documents/mois, 5 champs critiques, une connexion à l’ERP, deux rôles, données anonymisées en test, support en heures ouvrées, horizon 12/36/60 mois.

| Option | Ce qui doit rester constant | Ce qui change et doit être chiffré | Preuve possible | Ne prouve pas |
|---|---|---|---|---|
| Entretien + échantillon manuel | mêmes 100 documents, mêmes 5 champs | temps métier, coût d’analyse, biais de sélection | liste d’erreurs et décision humaine | automatisation ou adoption |
| Prototype | même parcours de dépôt/correction/validation | maquettes, nombre de tests, itérations | taux de compréhension, temps de tâche | API, OCR, sécurité, production |
| POC technique | mêmes 100 documents difficiles, mêmes champs | intégration isolée, modèle, seuil et coût par document | exactitude par champ, latence, erreurs bloquantes | workflow et usage réel |
| Pilote | mêmes 20 utilisateurs, durée et environnement écrits | support, formation, incidents, retour arrière | temps traité, erreurs, contournements, satisfaction | déploiement à toute l’entreprise |
| MVP | même workflow et données autorisées | backend, comptes, sauvegardes, observabilité, maintenance | usage répété, résultat métier, coût d’exploitation | rentabilité long terme sans suivi |
| Outil existant/no-code | même volume et objectifs | abonnement, configuration, limites, export, adaptation | démonstration sur données représentatives | adéquation durable sans contrat et TCO |

### TCO illustratif

Le guide doit montrer une méthode, jamais des « vrais prix » universels. Avec des hypothèses déclarées, un ordre de grandeur pourrait distinguer :

- manuel/concierge : 1 500 € de cadrage + 2 000 €/an de temps opérationnel ;
- prototype : 4 000 € de conception/tests, sans hébergement de production ;
- POC : 8 000 € de faisabilité + 1 000 € de données/environnement ;
- pilote : 15 000 € de version limitée + 4 000 €/an support/cloud ;
- MVP : 35 000 € de build + 8 000 €/an cloud, maintenance et support ;
- outil existant : 3 000 € de configuration + 6 000 €/an d’abonnement/support.

Ces valeurs sont **exclusivement illustratives** et doivent être remplacées par les hypothèses du projet. Afficher les totaux 12/36/60 et séparer : coût ponctuel, récurrent, temps interne, formation, données, intégration, support, migration, arrêt et reprise. Le point de bascule peut être le nombre de documents ou d’utilisateurs ; le guide doit le calculer plutôt que dire seulement « cela dépend ».

## 7. Critères de décision à ajouter

Pour éviter le résultat « le test a été intéressant », préparer avant l’essai :

1. **Question :** quelle incertitude peut faire changer la dépense ?
2. **Hypothèse :** quelle réponse attend-on, dans quelles conditions ?
3. **Mesure :** quelle donnée est observée, par qui, avec quel instrument ?
4. **Seuil :** quelle valeur déclenche poursuivre, corriger, acheter, reporter ou arrêter ?
5. **Limite :** qu’est-ce que le test ne permet pas d’extrapoler ?
6. **Coût :** investissement ponctuel, coût d’exploitation et temps interne.
7. **Responsable :** qui valide, qui aide les utilisateurs, qui arrête ?
8. **Sortie :** fichiers, résultats, code, accès, données de test, droits et documentation.
9. **Date :** jour de décision et date de révision si résultat intermédiaire.
10. **Retour arrière :** comment revenir au processus précédent sans perte ni double traitement ?

Le test d’un POC d’extraction ne devrait pas afficher uniquement « 95 % correct » : il doit montrer `475/500`, la formule, les 25 erreurs par catégorie, le coût par document, le seuil de rejet critique et l’incertitude sur un échantillon limité. Le taux est un exemple illustratif, pas une recommandation universelle.

## 8. P0/P1/P2

### P0 — bloquant

Aucun P0 démontré. Une fausse preuve de client, un seuil présenté comme norme, un POC décrit comme validation de marché, une donnée personnelle réelle utilisée sans cadre ou un CTA promettant une ressource inexistante ferait fermer la porte P0.

### P1 — avant la version étalon

- **P1-MVP-01 — ressource.** Créer/tester le pack des dix questions (DOCX/PDF, matrice, TCO, critères, propriété) ou retirer la promesse « copier ».
- **P1-MVP-02 — scénario égal.** Ajouter un cas central conservant utilisateurs, données, volume, intégrations, support et horizon pour toutes les options.
- **P1-MVP-03 — trois scénarios chiffrés.** Donner simple/central/exigeant, formules, coûts ponctuels/récurrents, temps interne, limites et variable de bascule.
- **P1-MVP-04 — KPI et valeur.** Ajouter baseline, objectif, coût du statu quo, métrique d’apprentissage, seuil et date de décision.
- **P1-MVP-05 — séparation des validations.** Distinguer désirabilité, faisabilité, viabilité, adoption, intégration, sécurité et conformité.
- **P1-MVP-06 — protocole pilote.** Ajouter participants, durée, environnement, aide, incidents, retour arrière, données, arrêt et extrapolation.
- **P1-MVP-07 — POC reproductible.** Ajouter jeu de test, métriques par erreur, latence/coût, versions, seuils, dépendances et preuve de reprise.
- **P1-MVP-08 — MVP exploitable.** Ajouter sécurité, RGPD, accessibilité, monitoring, sauvegarde/restauration, support, disponibilité et réversibilité.
- **P1-MVP-09 — devis comparable.** Ajouter scorecard périmètre/livrables/hypothèses/exclusions/délai/équipe/tests/maintenance/propriété.
- **P1-MVP-10 — sources contextualisées.** Dater les sources, qualifier Eric Ries/GOV.UK/EURAXESS et distinguer fait, déduction et recommandation.
- **P1-MVP-11 — QA prouvée.** Exécuter et consigner build, liens, ancres, JSON-LD, responsive, snapshots et route ; aucune preuve de production sans test réel.

### P2 — amélioration importante

- **P2-MVP-01 — options « blue ocean ».** Ajouter concierge, tableur, formulaire, no-code, PWA, API existante, outil vertical et achat reporté.
- **P2-MVP-02 — taille d’échantillon.** Expliquer biais, petit échantillon, comparaison avant/après et prudence sur la généralisation.
- **P2-MVP-03 — accessibilité.** Ajouter personnes handicapées dans les tests et critères WCAG adaptés à la forme choisie.
- **P2-MVP-04 — journal de décision.** Donner un modèle de compte rendu avec résultat, surprise, décision, propriétaire et prochaine date.
- **P2-MVP-05 — coût de changement.** Chiffrer migration, perte de code, dette de prototype, arrêt d’un pilote et sortie d’un outil existant.
- **P2-MVP-06 — sécurité de test.** Ajouter anonymisation, séparation environnements, secrets, accès et destruction des données temporaires.
- **P2-MVP-07 — conversion.** Relier CTA à la ressource réellement téléchargeable, puis à une relecture optionnelle sans capture obligatoire.
- **P2-MVP-08 — maillage.** Ajouter une phrase de transition vers prix, cahier des charges, maintenance et validation d’idée selon la décision obtenue.
- **P2-MVP-09 — anti-duplication.** Vérifier que les guides MVP SaaS et validation d’idée ne reprennent pas cette même matrice sans lien de décision.

## 9. Portes P1–P4 et limites du présent rapport

- **P1 recherche/cadrage : rapport présent, porte non validée ici.** Le dossier existe, mais ce contre-audit n’a pas validé son journal, sa matrice de gain d’information ni ses manifestes.
- **P2 rédaction/intégration : rapport présent, corrections non appliquées.** Les recommandations sont documentées ; le guide public reste le snapshot contrôlé ci-dessus.
- **P3 contre-audit : présent.** Ce rapport indépendant couvre éditorial, faits, comparaison, conversion et SEO, sans modifier la page.
- **P4 plume/QA : non exécutée.** La plume est bonne à la lecture source, mais aucun test dirigeant, anti-IA, build, navigateur, responsive, lien, JSON-LD ou production n’a été réalisé.

## 10. Scorecard

| Axe | Note | Justification |
|---|---:|---|
| Intention et promesse | 9/10 | Le choix part du doute et répond à la question dès l’ouverture. |
| Pédagogie humaine | 9/10 | Définitions simples, contre-cas, exemple fictif clairement signalé. |
| Profondeur | 8/10 | Très bon cadrage conceptuel ; coûts, opération, sécurité et validation métier manquent. |
| Preuves | 8/10 | Sources institutionnelles utiles ; certaines sont anciennes ou de portée spécialisée. |
| Comparaison | 8/10 | Quatre formats et limites ; pas de périmètre égal ni d’options non logicielles assez structurées. |
| Chiffrage | 6/10 | Seuil de 95 % illustratif, mais pas de coût, délai, TCO ou sensibilité. |
| Risques/obligations | 8/10 | Bon rappel CNIL et droits ; accessibilité, sécurité et passage en production incomplets. |
| Originalité | 9/10 | Position « ne pas acheter les quatre » et décision d’arrêt très crédibles. |
| Conversion honnête | 9/10 | CTA conditionnel, possibilité d’outil existant/report/arrêt. |
| SEO/UX technique | 9/10 | Metadata, Article, Breadcrumb, ancre et maillage visibles ; QA non exécutée. |
| **Total** | **84/100** | Très bon guide de choix ; pas encore un protocole chiffré et transmissible. |

## 11. Conditions de sortie

Le guide pourra devenir une version étalon lorsque P1-MVP-01 à P1-MVP-11 seront traités, que les calculs seront refaits par un second agent, que les sources datées seront annotées au plus près des conclusions et qu’une passe P4 prouvera la ressource, la lecture humaine et la QA technique. Tant que ces conditions ne sont pas réunies, le statut exact est **rapport présent, corrections non appliquées, NO-GO au standard renforcé** ; aucune conclusion d’indexation, de classement ou de production ne doit être déduite de ce rapport.

## 12. Sources vérifiées le 24 juillet 2026

### Sources officielles ou de première main

- GOV.UK Service Manual, *Making prototypes* : https://www.gov.uk/service-manual/design/making-prototypes — publié en 2016, page consultée le 24 juillet 2026 ; précise que le code de prototype n’a pas les exigences production et ne doit pas être copié sans reprise qualité.
- GOV.UK Service Manual, *How the alpha phase works* : https://www.gov.uk/service-manual/agile-delivery/how-the-alpha-phase-works — dernière mise à jour affichée 8 mai 2019 ; utile pour hypothèses risquées, accessibilité, coût-efficacité et décision beta, à dater clairement.
- Cabinet Office, *Testing and piloting services* : https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/987136/Testing_and_piloting_services_guidance_note_May_2021.pdf — guidance publique britannique, pas règle contractuelle française.
- CNIL, *Sécurité : encadrer les développements informatiques* : https://www.cnil.fr/fr/securite-encadrer-les-developpements-informatiques — séparation des environnements et données fictives/anonymisées à contextualiser.
- Légifrance, article L131-3 CPI : https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000006278958 — portée à faire relire selon le contrat et les composants utilisés.
- Commission européenne/EURAXESS, *Five Major Steps for Research Result Valorisation* : https://euraxess.ec.europa.eu/career-development/researchers/manual-major-steps-for-research-valorisation — contexte de valorisation de recherche, non définition universelle d’un POC commercial.
- Eric Ries, *Minimum Viable Product: a guide* : https://www.startuplessonslearned.com/2009/08/minimum-viable-product-guide.html — source historique de la notion d’apprentissage validé, à présenter comme référence éditoriale et non comme norme.

### Benchmark concurrentiel — couverture, pas preuve de prix

- Asana France, POC, consulté juillet 2026 : https://asana.com/fr/resources/proof-of-concept
- Asana France, MVP, 15 avril 2026 : https://asana.com/fr/resources/mvp-minimum-viable-product
- UXPin (US), comparaison 2026 : https://www.uxpin.com/studio/blog/prototype-vs-mvp-vs-proof-of-concept/
- Zulbera (US), comparaison publiée avril et mise à jour mai 2026 : https://www.zulbera.com/insights/mvp-vs-prototype-ou-poc/
- AUZtec Innovations (Australie), 22 juillet 2026 : https://auztecinnovations.com/blog/proof-of-concept-vs-prototype-vs-mvp/
- Scieneers (DACH), *PoC vs Prototyp vs MVP vs Pilot*, consulté juillet 2026 : https://www.scieneers.de/poc-vs-prototyp-vs-mvp-vs-pilot/
- Asana, version anglaise POC, 10 janvier 2026 : https://asana.com/resources/proof-of-concept
- Exemple de spécification publique européenne pour les exigences et critères d’acceptation : https://www.francophonie.org/sites/default/files/2026-05/AO_06-2026_UEFH_Annexe%201_Cahier_des_charges.pdf
