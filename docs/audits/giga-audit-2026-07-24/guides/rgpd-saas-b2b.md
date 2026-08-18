# Audit juridique et produit — `rgpd-saas-b2b`

Date : 24 juillet 2026  
Auditeur : revue éditoriale, RGPD, produit SaaS et gouvernance, en lecture seule  
Périmètre : `src/app/guides/rgpd-saas-b2b/page.tsx`, image Open Graph, registre, dossier de recherche et manifestes.  
Avertissement : cet audit ne constitue ni une consultation juridique, ni une qualification de rôle, ni une validation de conformité d'un SaaS particulier. Les sources normatives sont EUR-Lex, la CNIL, le CEPD/EDPB et, pour le benchmark de couverture uniquement, les autorités étrangères compétentes.

## 1. Verdict exécutif

```text
Lecteur exact : fondateur, dirigeant ou responsable produit d'un SaaS B2B qui doit répondre à un questionnaire client sur les données, le DPA, les sous-traitants, les pays d'accès, les droits et les incidents.
Question réelle : « Qu'est-ce que mon produit et mon contrat doivent réellement permettre avant que je fasse traiter des données de clients ? »
Décision attendue : cartographier chaque finalité, qualifier les rôles par traitement, réduire les données, vérifier les fonctions, encadrer les prestataires et faire intervenir un DPO/juriste lorsque le risque dépasse l'information générale.
Réponse actuelle en une phrase : la page est prudente, humaine et juste sur les deux casquettes possibles, la minimisation, les prestataires, les droits, l'article 28 et la violation sous-traitant/responsable ; elle reste trop courte pour un sujet à haut risque : les responsables conjoints, les éléments complets de l'article 28, le chapitre V et les TIA/SCC, les bases juridiques, l'information, les délais de droits, l'article 32, l'article 30, l'AIPD/DPO, les cookies/ePrivacy, les données sensibles, l'architecture multi-tenant, l'IA, la portabilité de sortie et le TCO sont insuffisamment traités.
Défaut qui coûte le plus de sécurité : un lecteur peut croire qu'une cartographie et un DPA réalignent le produit, alors qu'il manque une matrice de décision juridique et une preuve d'exécution par finalité, pays et fournisseur.
Niveau actuel : B, solide en introduction mais incomplet comme guide de préparation contractuelle à enjeu élevé.
Priorité : critique avant publication à grande échelle ; revue DPO/juridique obligatoire pour toute version présentée à un prospect comme support de conformité.
Statut : audit terminé ; aucun guide, registre, dossier de recherche, manifeste ou fichier Git modifié.
```

### Score avant correction

| Axe                   | Note /10 | Preuve dans la page                                                    | Manque décisif                                                                                 |
| --------------------- | -------: | ---------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| Intention dirigeant   |        9 | prospect, DPA, sous-traitants, fuite, données                          | pas de décision courte par niveau de risque                                                    |
| Prudence juridique    |        9 | avertissement, « à confirmer », aucun label conforme                   | pas de revue normative section par section ni date de fraîcheur par article                    |
| Rôles                 |        8 | responsable, sous-traitant, deux casquettes, co-responsabilité évoquée | article 26 et critères de responsables conjoints peu opérationnels                             |
| Article 28/DPA        |        7 | contrat relié aux fonctions et clauses CNIL                            | éléments obligatoires, instructions, assistance, audit et sous-traitants ultérieurs non listés |
| Transferts            |        5 | distinction article 28/transferts, pays et prestataires                | chapitre V, adéquation, SCC, TIA/AITD, accès distant et réévaluation absents                   |
| Principes/base/droits |        6 | minimisation, finalité, export/correction/suppression                  | bases légales, information, accès/opposition/limitation, délais et exceptions absents          |
| Sécurité/incident     |        8 | exercice fictif, 72 h correctement borné, lien sécurité                | article 32, mesures vérifiables, logs, RTO/RPO et preuves d'incident incomplets                |
| Gouvernance           |        5 | DPO/juriste et quelques cas d'escalade                                 | registre article 30, AIPD, DPO obligatoire/position, responsables/validation absents           |
| Produit SaaS          |        6 | cycle de donnée, fonctions, sauvegardes                                | tenant isolation, support, journalisation, backups, sortie, IA, cookies et données sensibles   |
| Conversion/qualité    |        8 | CTA honnête et scénario Orbia fictif                                   | livrables, périmètre, TCO et conditions de sortie non chiffrés                                 |

Total : **71/100**.

Le score est inférieur au « 19/20 P4 » du dossier de recherche parce que ce dernier certifie une intégration éditoriale et technique du lot, pas une revue juridique exhaustive. Le guide ne contient pas de fausse promesse flagrante ; il ne doit cependant pas être présenté comme une checklist suffisante pour signer un DPA ou lancer un traitement à haut risque.

## 2. Ce que la page fait bien et qu'il faut préserver

### Pédagogie humaine

- L'ouverture commence par la situation concrète du prospect : DPA, prestataires, durées et fuite. Elle évite le glossaire abstrait.
- Le fil « une donnée, de la collecte à la suppression » est une bonne technique de dirigeant : chaque principe doit laisser une preuve dans le produit.
- Le texte dit explicitement que le SaaS peut être sous-traitant pour un traitement et responsable pour une finalité propre ; c'est conforme à l'approche factuelle de la CNIL.
- L'hébergement européen n'est pas présenté comme une garantie globale.
- Le DPA est décrit comme devant correspondre à la réalité, pas comme un certificat magique.
- Le cas Orbia est explicitement fictif et ne prétend pas qualifier un client.
- Le délai de 72 heures est correctement borné : responsable, risque, « si possible », motifs du retard, sous-traitant qui alerte sans délai indu et information des personnes en cas de risque élevé.
- Le CTA conserve le recours à un DPO ou à un juriste et ne vend pas une conformité automatique.

### Affirmations déjà justes

| Affirmation de la page                                                            | Contrôle                                                                             | Verdict             |
| --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | ------------------- |
| Le rôle dépend des activités réelles et non du titre contractuel                  | CNIL rappelle que la qualification se fait au cas par cas selon les faits            | validé              |
| Un même SaaS peut avoir plusieurs rôles                                           | CNIL cite des rôles différents selon les traitements et des cas de co-responsabilité | validé, à détailler |
| L'article 28 encadre la relation responsable/sous-traitant                        | texte RGPD et CNIL                                                                   | validé, incomplet   |
| L'hébergement UE ne suffit pas                                                    | cohérent avec finalités, accès, destinataires et transferts                          | validé              |
| Pseudonymisation n'est pas anonymisation                                          | CNIL distingue ré-identification possible et irréversibilité                         | validé              |
| Une violation n'est pas automatiquement notifiée par le SaaS à la CNIL            | notification dépend du rôle et du risque                                             | validé              |
| 72 heures courent après la prise de connaissance, si possible, avec retard motivé | articles 33–34 et CNIL                                                               | validé              |
| Le guide ne remplace ni DPO ni juriste                                            | honnêteté nécessaire pour un contenu général                                         | validé              |

## 3. Sources normatives rouvertes

Les textes et autorités ont été consultés le 24 juillet 2026. EUR-Lex était protégé par une vérification JavaScript au moment de l'ouverture, mais l'URL officielle du règlement est conservée et les points d'articles sont croisés avec les pages CNIL qui renvoient au texte. Aucune source commerciale n'est utilisée comme autorité juridique.

| Sujet                     | Source primaire                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Point à vérifier dans la réécriture                                               |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------- |
| Texte complet RGPD        | [Règlement (UE) 2016/679 sur EUR-Lex](https://eur-lex.europa.eu/eli/reg/2016/679/oj)                                                                                                                                                                                                                                                                                                                                                                                     | articles 4, 5, 6, 9, 12–14, 15–22, 24–32, 33–36, 37–39, 44–49                     |
| Rôles                     | [CNIL — identifier son rôle](https://www.cnil.fr/fr/rgpd-comment-bien-identifier-son-role) ; [CEPD — lignes directrices 07/2020](https://www.edpb.europa.eu/documents/guideline/guidelines-072020-on-the-concepts-of-controller-and-processor-in-the-gdpr_en)                                                                                                                                                                                                            | faits, moyens essentiels, responsable conjoint, rôle multiple, documentation      |
| Registre                  | [CNIL — registre des activités](https://www.cnil.fr/fr/RGPD-le-registre-des-activites-de-traitement)                                                                                                                                                                                                                                                                                                                                                                     | deux registres si responsable et sous-traitant ; contenu article 30 ; mise à jour |
| Bases juridiques          | [CNIL — bases légales](https://www.cnil.fr/fr/les-bases-legales)                                                                                                                                                                                                                                                                                                                                                                                                         | aucune base unique ; finalité par finalité ; documentation et compatibilité       |
| Article 28/sous-traitance | [CNIL — clauses responsable/sous-traitant](https://www.cnil.fr/fr/clauses-contractuelles-types-entre-responsable-de-traitement-et-sous-traitant) ; [CNIL — sécurité de la sous-traitance](https://www.cnil.fr/fr/securite-gerer-la-sous-traitance)                                                                                                                                                                                                                       | contrat concret, garanties, sous-traitants ultérieurs, assistance et fin          |
| Finalité/minimisation     | [CNIL — guide du développeur](https://www.cnil.fr/fr/guide-rgpd-du-developpeur) ; [CNIL — minimiser les données](https://www.cnil.fr/fr/minimiser-les-donnees-collectees)                                                                                                                                                                                                                                                                                                | champs, accès, architecture et tests                                              |
| Information               | [CNIL — information et transparence](https://www.cnil.fr/fr/conformite-rgpd-information-des-personnes-et-transparence)                                                                                                                                                                                                                                                                                                                                                   | identité, finalité, droits, destinataires, transferts, information en couches     |
| Droits                    | [CNIL — droits des personnes](https://www.cnil.fr/fr/passer-laction/les-droits-des-personnes-sur-leurs-donnees) ; [répondre aux demandes](https://www.cnil.fr/fr/respecter-les-droits-des-personnes/repondre-aux-demandes-dexercice-des-droits)                                                                                                                                                                                                                          | délai d'un mois, prolongation possible, identité, tiers, formats et exceptions    |
| Conservation              | [CNIL — durées de conservation](https://www.cnil.fr/fr/passer-laction/les-durees-de-conservation-des-donnees)                                                                                                                                                                                                                                                                                                                                                            | finalité, base active/archivage, secteur, critères et suppression effective       |
| Sécurité                  | article 32 RGPD ; [CNIL — guide développeur](https://www.cnil.fr/fr/guide-rgpd-du-developpeur)                                                                                                                                                                                                                                                                                                                                                                           | risque, chiffrement, accès, disponibilité, tests, restauration et preuve          |
| Violations                | [CNIL — notifier une violation](https://www.cnil.fr/fr/services-en-ligne/notifier-une-violation-de-donnees-personnelles)                                                                                                                                                                                                                                                                                                                                                 | journal interne, risque, 72 h si possible, contenu initial et complément          |
| AIPD                      | [CNIL — analyse d'impact](https://www.cnil.fr/fr/RGPD-analyse-impact-protection-des-donnees-aipd)                                                                                                                                                                                                                                                                                                                                                                        | risque élevé, listes CNIL, traitement à grande échelle, IA/surveillance           |
| DPO                       | [CNIL — DPO](https://www.cnil.fr/fr/passer-laction/le-delegue-la-protection-des-donnees-dpo)                                                                                                                                                                                                                                                                                                                                                                             | obligation selon activités, indépendance, ressources et contact                   |
| Transferts                | [CNIL — transferts hors UE](https://www.cnil.fr/fr/les-outils-de-la-conformite/transferer-des-donnees-hors-de-lue) ; [Commission — SCC](https://commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection/standard-contractual-clauses-scc_en) ; [CEPD — recommandations mesures supplémentaires](https://www.edpb.europa.eu/our-work-tools/our-documents/recommendations/recommendations-012020-measures-supplement-transfer-tools_en) | adéquation, outil chapitre V, TIA/AITD, mesures supplémentaires et accès          |
| Cookies/ePrivacy          | [CNIL — cookies et autres traceurs](https://www.cnil.fr/fr/cookies-et-autres-traceurs) ; directive ePrivacy                                                                                                                                                                                                                                                                                                                                                              | traceurs non nécessaires, consentement, preuve et distinction produit/marketing   |

## 4. Revue juridique par obligation

### 4.1 Responsable, sous-traitant et responsables conjoints

La page explique correctement que le rôle est factuel et peut varier. Il faut ajouter une fiche par traitement avec : finalité, décisions sur les moyens essentiels, catégories de personnes, catégories de données, destinataires, durée et autorité décisionnelle. La CNIL indique qu'un fournisseur peut être responsable lorsqu'il croise des données pour créer un nouveau service, et qu'une relation peut devenir conjointe lorsque les parties déterminent ensemble finalités et moyens.

Manques P1 :

- un tableau article 26 : accord transparent, répartition de l'information, droits, sécurité, violations et AIPD ;
- la précision que la personne peut exercer ses droits auprès de chaque responsable conjoint ;
- l'analyse d'un SaaS qui choisit des moyens techniques non essentiels sans devenir automatiquement responsable ;
- la possibilité qu'un fournisseur soit responsable de sa facturation, sécurité, support ou prospection et sous-traitant pour les données du client ;
- une règle « ne jamais qualifier tout le produit en une seule ligne ».

### 4.2 Article 28 et DPA : check-list minimale

Le guide dit que le contrat doit correspondre au produit, mais il ne donne pas la structure attendue. La réécriture doit montrer que le DPA décrit au minimum, selon les faits et l'article 28 :

1. objet, durée, nature et finalité du traitement ;
2. catégories de données et personnes concernées ;
3. instructions documentées et procédure si instruction illicite ;
4. confidentialité des personnes autorisées ;
5. mesures de sécurité appropriées ;
6. conditions d'autorisation et information des sous-traitants ultérieurs ;
7. assistance pour droits, sécurité, violation et AIPD/consultation préalable ;
8. suppression ou restitution au choix du responsable en fin de service ;
9. mise à disposition des informations et audits/inspections ;
10. notification des changements, localisation et engagements réellement tenus.

Ce n'est pas un modèle contractuel à copier. Le guide doit distinguer DPA, conditions générales, politique d'information et clauses de transfert. Une annexe sécurité ne doit pas promettre « suppression immédiate de toutes les sauvegardes » si l'architecture a un cycle de restauration différent.

### 4.3 Sous-traitants ultérieurs et chaîne fournisseur

La page demande nom, fonction, pays et contrat, ce qui est utile. Il faut ajouter :

- liste publique/versionnée des sous-traitants et procédure de changement ;
- catégories de données et environnements réellement touchés (production, support, logs, sauvegarde, monitoring, ticketing) ;
- autorisation générale ou spécifique selon le DPA ;
- délai d'objection client et alternative réaliste ;
- obligation contractuelle du sous-traitant ultérieur envers le SaaS ;
- accès de support à distance comme flux potentiel, même sans déplacement de base ;
- preuve de revue des garanties, sécurité et transferts.

### 4.4 Chapitre V : transferts, accès et SCC/TIA

Le texte actuel avertit de ne pas confondre article 28 et transferts, mais s'arrête là. C'est insuffisant pour un SaaS utilisant support, analytics, e-mail, cloud ou IA hors EEE.

La matrice à ajouter doit demander :

| Question                                        | Preuve attendue                                                                  | Ne pas conclure                                                        |
| ----------------------------------------------- | -------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| Y a-t-il transfert ou accès hors EEE ?          | entité, pays, accès humain/technique, sous-traitants, support                    | « serveur UE » ne suffit pas si support ou administration est hors EEE |
| Y a-t-il décision d'adéquation applicable ?     | destination, périmètre, date, bénéficiaire                                       | pays de siège ≠ tous les accès et fournisseurs                         |
| Quel outil de l'article 46 ?                    | SCC 2021, BCR, code/certification ou autre mécanisme pertinent                   | SCC seule ≠ analyse de l'environnement réel                            |
| TIA/AITD et mesures supplémentaires ?           | analyse du droit/pratiques du pays, chiffrement, contrôle des clés, minimisation | certification commerciale ≠ preuve suffisante                          |
| Quelles garanties d'information et de recours ? | contrat, notice, obligations et canal de droits                                  | « conforme au DPF » sans vérifier le destinataire                      |
| Le flux peut-il être retiré ?                   | désactivation, alternative EEE, plan de sortie                                   | impossible de supprimer un fournisseur après signature                 |

Le guide ne doit pas donner une réponse universelle pour les États-Unis, le Royaume-Uni, l'Inde, l'Australie ou tout autre pays. Il doit renvoyer à la version applicable au moment du transfert et à un spécialiste. Les règles changent : la CNIL rappelle par exemple la décision d'adéquation UE–États-Unis de 2023 et le cadre particulier du Royaume-Uni ; cela n'annule pas l'analyse de l'entité, du service et du contrat.

### 4.5 Bases, finalités, minimisation et données sensibles

Le texte explique la finalité mais ne traite pas les six bases de l'article 6. Il ne faut pas choisir une base à la place du lecteur ; il faut lui demander de documenter pour chaque traitement : finalité, base envisagée, nécessité, équilibre/consentement, compatibilité des usages ultérieurs, information et responsable de décision.

Ajouter une alerte article 9 : les données sensibles (santé, biométrie, opinions, origine, syndicat, etc.) ne sont pas seulement « une catégorie à signaler » ; leur traitement est en principe interdit sauf exception spécifique. Un SaaS RH, santé ou surveillance ne doit pas suivre le même chemin qu'une adresse professionnelle ordinaire.

### 4.6 Information et droits

La page dit « informer » et « retrouver, exporter, corriger, supprimer », mais ne donne pas la preuve attendue :

- identité et coordonnées du responsable et DPO si applicable ;
- finalités et bases ;
- catégories de données, destinataires, transferts ;
- durée ou critères ;
- droits d'accès, rectification, effacement, limitation, opposition, portabilité et décision automatisée lorsqu'applicables ;
- source des données indirectes ;
- information en couches au moment et dans le support de collecte ;
- procédure et identité de la personne qui reçoit la demande ;
- délai d'un mois, prolongation possible en cas de complexité, refus motivé et vérification d'identité proportionnée.

La portabilité n'est pas un export universel de toute la base : elle concerne les données fournies par la personne, dans les conditions de l'article 20, et un format structuré lorsque le droit s'applique. Le guide doit l'expliquer sans promettre une migration complète de tous les objets métier.

### 4.7 Conservation, suppression, archivage et sauvegardes

La page demande une durée et avertit sur les backups. Il faut distinguer : base active, archivage intermédiaire, obligations légales, sauvegarde de reprise, suppression logique, suppression physique, anonymisation et données de logs/support.

Le responsable de traitement détermine la durée selon la finalité et les règles sectorielles. Le SaaS doit fournir une règle exécutable et une preuve de date d'expiration ; il ne doit pas inventer « 3 ans pour tout ». Une sauvegarde restaurée peut réintroduire une donnée supprimée : le test doit vérifier la procédure et la fenêtre réelle.

### 4.8 Sécurité et article 32

Le guide de sécurité voisin peut être lié, mais ce guide RGPD doit au moins demander une preuve synthétique de mesures adaptées au risque :

- contrôle d'accès par tenant et rôle, MFA pour administration/support ;
- chiffrement en transit et au repos, gestion des clés et secrets ;
- séparation production/test, données fictives dans les tests, masquage ;
- journalisation, intégrité et durée des logs ;
- détection, alerte, sauvegarde, restauration, disponibilité et résilience ;
- tests réguliers d'efficacité, revue des dépendances et correction ;
- accès support limité dans le temps, justifié et audité ;
- plan de continuité, RTO/RPO et communication ;
- preuve de revue des accès et révocation au départ.

« Chiffré », « ISO », « SOC » ou « hébergé en Europe » ne vaut pas démonstration sans périmètre, version, sous-traitants et tests. La CNIL demande des garanties suffisantes et que le responsable connaisse les mesures des sous-traitants.

### 4.9 Violations et délai de 72 heures

Le passage existant est juridiquement prudent et doit être conservé. Il faut cependant ajouter une chronologie et un registre :

```text
T0 découverte → contenir et préserver les preuves → qualifier confidentialité/intégrité/disponibilité
→ identifier catégories/personnes/volume/conséquences → évaluer le risque
→ alerter le responsable selon le rôle et le contrat → décider notification autorité
→ informer les personnes si risque élevé → compléter et documenter.
```

La notification initiale n'attend pas nécessairement l'enquête complète ; les informations complémentaires suivent. La règle de 72 heures vise le responsable lorsqu'une notification est requise, « si possible », après prise de connaissance ; elle n'impose pas au sous-traitant de notifier lui-même la CNIL à la place du responsable. Le contrat peut imposer un délai plus court d'alerte au client : ne pas le présenter comme le délai légal universel.

### 4.10 AIPD, DPO et registre

La page renvoie au DPO/juriste pour « données sensibles, surveillance, profilage, grande échelle, transfert complexe », mais doit expliquer les portes :

- AIPD avant traitement susceptible d'engendrer un risque élevé, avec description, nécessité/proportionnalité, risques, mesures et avis DPO si présent ;
- DPO obligatoire seulement dans les cas de l'article 37 (autorité/organisme public, suivi régulier et systématique à grande échelle, traitement à grande échelle de données sensibles ou pénales, sous réserve du droit applicable) ;
- registre article 30 : un SaaS peut devoir distinguer ses traitements en responsable de ses propres finalités et ses catégories d'activités comme sous-traitant ;
- personne responsable du registre, version, date et changement déclencheur ;
- consultation préalable si le risque résiduel élevé ne peut être réduit.

Le guide ne doit pas dire « une PME n'a pas besoin de registre » : la CNIL précise que la dérogation aux moins de 250 salariés est très limitée et recommande d'intégrer les traitements en cas de doute.

### 4.11 Cookies, ePrivacy et marketing

Le guide parle de support, e-mail et mesure, mais ignore cookies et traceurs. Ajouter une branche distincte :

- traceurs strictement nécessaires au service vs analytics/marketing ;
- consentement préalable lorsqu'exigé, preuve et retrait aussi simple ;
- information sur finalité, fournisseur, durée et accès ;
- distinction RGPD/base juridique et directive ePrivacy/règles nationales ;
- outils de chat, replay, analytics, pixels et IA qui peuvent transmettre des données avant consentement.

Il ne faut pas assimiler « DPA signé » et « consentement cookie obtenu ».

### 4.12 Multi-tenant, logs, backups, support, IA et sortie

Ces aspects produit sont insuffisants :

- **multi-tenant :** test d'isolation d'un tenant à l'autre, identifiants non prédictibles, autorisation serveur et recherche globale ;
- **logs :** données personnelles indirectes, IP, identifiants, contenu de requête, accès support, durée et export pour incident ;
- **backups :** chiffrement, accès, localisation, restauration, expiration et suppression différée documentée ;
- **support :** accès temporaire, justification, consentement/autorisation du client, capture d'écran et sous-traitants ;
- **IA :** finalité de réutilisation, rôle, base, information, entraînement, conservation, transfert, fournisseur, sortie et possibilité de désactivation ; ne pas confondre RGPD et règlement IA ;
- **portabilité/sortie :** format exploitable, relations, pièces jointes, métadonnées, API, délai, coût, suppression des copies et assistance ;
- **preuve contractuelle :** version du DPA, annexes, liste fournisseurs, changements, incidents, tests et acceptation client.

## 5. Scénarios de décision et TCO illustratif

Les montants suivants sont fictifs et ne sont ni tarifs de marché, ni risque juridique, ni devis. Ils servent à montrer ce que le guide doit faire calculer sans donner un pourcentage de conformité.

### Scénario PME française — SaaS mono-région, données ordinaires

Hypothèses 12 mois : 1 développeur 6 jours pour droits/export/suppression à 650 € = 3 900 €, cartographie/DPA accompagnée 2 500 €, tests sécurité et sauvegarde 2 000 €, maintenance 250 €/mois = 3 000 €.

```text
TCO illustratif 12 mois = 3 900 + 2 500 + 2 000 + 3 000 = 11 400 €.
```

Ce chiffre ne dit pas que la conformité coûte 11 400 € : les tâches peuvent déjà être nécessaires pour le produit. Il aide à arbitrer une fonction risquée, un stockage inutile ou une automatisation de droits.

### Scénario entreprise — multi-tenant, support et sous-traitants multiples

Hypothèses : isolation et tests 20 000 €, logs/accès support 12 000 €, registre/contrats 8 000 €, DPO externe 1 500 €/mois, pentest annuel 9 000 €.

```text
TCO illustratif 12 mois = 20 000 + 12 000 + 8 000 + 18 000 + 9 000 = 67 000 €.
TCO 36 mois (maintenance 15 %/an sur build + DPO + pentest annuel) ≈ 67 000 + 3 000 + 3 000 = 73 000 €.
```

La formule est volontairement simplifiée ; le dossier réel doit séparer coûts internes, licences, conseil, audits, incident et coûts de sortie.

### Scénario international — transferts et IA

Hypothèses 60 mois : 35 000 € pour architecture et chiffrement, 20 000 € de TIA/SCC/revues spécialisées, 2 000 €/mois de DPO et sécurité, 15 000 € de plan de sortie et tests, 30 000 € de remplacement fournisseur.

```text
TCO illustratif 60 mois = 35 000 + 20 000 + (2 000 × 60) + 15 000 + 30 000 = 220 000 €.
```

Ce scénario ne suppose pas qu'un transfert est interdit ou qu'une IA est possible. Il montre que l'économie apparente d'un fournisseur peut déplacer le coût vers TIA, mesures supplémentaires, revue des prompts, sortie ou remplacement. La décision doit être prise avec DPO/juriste et les faits du fournisseur.

### Portes économiques

| Situation                                                               | Porte                                                       |
| ----------------------------------------------------------------------- | ----------------------------------------------------------- |
| Finalité, rôle ou base inconnus                                         | NO-GO données réelles ; pilote fictif ou revue spécialiste  |
| Données sensibles, surveillance, IA ou transfert complexe sans AIPD/TIA | NO-GO production jusqu'à décision documentée                |
| Export/suppression impossible mais promis                               | NO-GO signature ou limiter le périmètre contractuel         |
| DPA signé mais sous-traitant/log/support non cartographié               | NO-GO déclaration de conformité ; corriger la chaîne        |
| Preuves disponibles, risque borné, fonctions testées                    | GO limité avec responsable, version et date de revalidation |
| Coût de correction supérieur à la valeur de la fonction                 | réduire ou retirer la donnée/fonction, décision documentée  |

## 6. Benchmark international de couverture — sans transposer le droit

Ce benchmark compare seulement les axes pédagogiques rencontrés dans les marchés France, États-Unis, Royaume-Uni, Australie et DACH. Les lois étrangères ne sont pas converties en règles françaises et ne servent pas d'autorité pour une mise en conformité sous RGPD.

| Zone et source officielle                                                                                                                                                                                                     | Axe couvert                                                         | Limite de comparaison                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| France — [CNIL rôles](https://www.cnil.fr/fr/rgpd-comment-bien-identifier-son-role)                                                                                                                                           | controller/processor/joint, faits et documentation                  | référence française à garder prioritaire                                            |
| France/UE — [CNIL transferts](https://www.cnil.fr/fr/les-outils-de-la-conformite/transferer-des-donnees-hors-de-lue)                                                                                                          | adéquation, SCC, AITD, pays tiers                                   | ne remplace pas un TIA réel                                                         |
| Royaume-Uni — [ICO controllers/processors](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/controllers-and-processors/controllers-and-processors/)                                                        | casquettes multiples, joint controllers, sous-traitants             | UK GDPR sous droit britannique ; ne pas appliquer automatiquement au RGPD UE        |
| Royaume-Uni — [ICO transferts](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/international-transfers/a-brief-guide-to-international-transfers/)                                                         | cartographie, test en trois étapes, adequacy/IDTA/Addendum/TRA      | mécanismes UK distincts des SCC UE                                                  |
| Australie — [OAIC APP 8](https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/australian-privacy-principles-guidelines/chapter-8-app-8-cross-border-disclosure-of-personal-information) | divulgation transfrontière, accountability et destinataire overseas | Privacy Act/APP, pas RGPD                                                           |
| États-Unis — [FTC Data Security](https://www.ftc.gov/business-guidance/privacy-security/data-security)                                                                                                                        | minimisation, inventaire, prestataires, sécurité raisonnable        | pas de régime fédéral unique équivalent au RGPD ; obligations sectorielles et États |
| DACH — [BfDI Cloud Computing](https://www.bfdi.bund.de/SharedDocs/Downloads/DE/DSK/Orientierungshilfen/OHCloudComputing.pdf?__blob=publicationFile&v=5)                                                                       | cloud, responsable/processor, pays tiers, garanties                 | document allemand/UE à lire dans son contexte ; pas une checklist française         |
| DACH/UE — [BfDI lignes EDPB](https://www.bfdi.bund.de/SharedDocs/Downloads/DE/DokumenteEDSA_Art29Gruppe/Guidelines/EDPB_20210701.pdf?__blob=publicationFile&v=2)                                                              | profondeur européenne sur roles                                     | traduction/autorité locale à vérifier                                               |

**Constat :** les sources étrangères mettent davantage en avant cloud, supply chain, transfert, incident et sortie. Il faut importer les axes, jamais les seuils ou les mécanismes juridiques étrangers.

## 7. Plan de correction éditoriale

1. Ajouter un avertissement visible dès l'ouverture : information générale, pas avis, sources datées, nécessité DPO/juriste.
2. Insérer un arbre « finalité → rôle → base à confirmer → données → destinataires/pays → sécurité → droits → durée → contrat → preuve ».
3. Créer un encadré responsables conjoints/article 26 et une check-list article 28 complète.
4. Ajouter une matrice transferts chapitre V : adéquation, SCC, TIA/AITD, mesures supplémentaires, accès distant, revalidation.
5. Ajouter bases juridiques, article 9, information en couches et droits avec délai d'un mois et limites.
6. Ajouter registre article 30, AIPD/risque élevé et critères DPO sans décider pour le lecteur.
7. Relier article 32 aux preuves de sécurité SaaS : tenant isolation, logs, backups, support, tests, RTO/RPO.
8. Ajouter cookies/ePrivacy, analytics, chat et outils IA.
9. Ajouter portabilité/exit et suppression des copies et sauvegardes.
10. Ajouter scénarios PME, entreprise et international avec TCO 12/36/60 entièrement fictifs.
11. Ajouter stop-go/rollback et preuve contractuelle versionnée.
12. Soumettre la version finale à un DPO ou juriste compétent avant publication comme support de vente.

### Introduction recommandée

> Votre prospect vous demande un DPA, la liste des sous-traitants, les pays d'accès, les durées de conservation et la procédure en cas de fuite. Vous pouvez être sous-traitant pour les données que le client vous confie, mais responsable — voire responsable conjoint — pour une autre finalité de votre propre SaaS. Un hébergement en Europe ou un modèle de contrat ne suffit donc pas à répondre. Dans ce guide, vous allez suivre une donnée de sa collecte à sa suppression, écrire qui décide pourquoi elle existe, vérifier les fonctions d'accès/export/effacement, cartographier les prestataires et distinguer les transferts hors EEE. Les articles, bases, durées et obligations dépendent des faits : ce document prépare une discussion avec votre DPO ou votre juriste, il ne certifie pas votre conformité.

## 8. P0/P1/P2 et portes de publication

Ce tableau décrit les corrections attendues ; aucune n'a été appliquée dans cette mission.

| ID    | Problème                                                                                    | Priorité | Correction attendue                                                        | Revalidation                                   |
| ----- | ------------------------------------------------------------------------------------------- | -------- | -------------------------------------------------------------------------- | ---------------------------------------------- |
| P0-01 | Aucune affirmation manifestement fausse repérée ; risque de publication juridique non revue | P0       | conserver le verrou : revue DPO/juriste exigée avant support de conformité | approbation documentée, pas seulement test SEO |
| P1-01 | Responsables conjoints/article 26 trop peu opérationnels                                    | P1       | matrice accord, transparence, droits, sécurité, incidents, AIPD            | cas partagé fictif                             |
| P1-02 | Article 28 incomplet                                                                        | P1       | dix éléments, instructions, assistance, audits, sous-traitants, fin        | lecture croisée EUR-Lex/CNIL                   |
| P1-03 | Chapitre V, SCC, TIA/AITD et accès distant absents                                          | P1       | arbre transfert et spécialiste obligatoire                                 | cas cloud/IA hors EEE                          |
| P1-04 | Bases légales et article 9 non traités                                                      | P1       | finalité/base à confirmer, données sensibles et limites                    | revue juridique                                |
| P1-05 | Information et droits trop généraux                                                         | P1       | notice, responsable, destinataires, délai, exceptions, portabilité         | demande fictive de bout en bout                |
| P1-06 | Article 30, DPO et AIPD insuffisants                                                        | P1       | registres séparés, critères DPO, risque élevé, consultation                | scénario PME/enterprise                        |
| P1-07 | Article 32 et preuves SaaS incomplets                                                       | P1       | tenant, accès, MFA, chiffrement, logs, backups, tests, RTO/RPO             | test sécurité indépendant                      |
| P1-08 | Cookies/ePrivacy absents                                                                    | P1       | traceurs, consentement, preuve, fournisseur, retrait                       | test navigateur                                |
| P1-09 | Données sensibles/IA non branchées à la décision                                            | P1       | article 9, AIPD, finalité IA, modèle, transfert, droits                    | cas RH/santé/IA                                |
| P1-10 | Portabilité/exit et suppression backups incomplets                                          | P1       | export relationnel, API, copies, preuve de fin                             | exercice de sortie                             |
| P1-11 | TCO 12/36/60, capacité et coût d'attente absents                                            | P1       | scénarios chiffrés fictifs, non-conformité non quantifiée                  | recalcul indépendant                           |
| P1-12 | Pas de portes stop-go/rollback contractuelles                                               | P1       | NO-GO production, pilote fictif, responsable et retour                     | simulation incident                            |
| P1-13 | CTA et ressource ne bornent pas livrable et responsabilité                                  | P1       | matrice livrable, source, spécialiste et exclusions                        | test commercial                                |
| P1-14 | P4 interne « 19/20 » peut être lu comme validation juridique                                | P1       | préciser intégration éditoriale ≠ avis/revue juridique                     | relecture governance                           |
| P2-01 | Benchmark international limité dans la recherche                                            | P2       | France/US/UK/AU/DACH officiel, sans transposition                          | liens rouvertes                                |
| P2-02 | Hashes et date de source non affichés dans la page                                          | P2       | registre interne, pas de surcharge publique                                | contrôle manifeste                             |
| P2-03 | `readTimeMin: 12` à recalculer après enrichissement                                         | P2       | registre et texte                                                          | lecture réelle                                 |
| P2-04 | OG/JSON-LD/canonical non vérifiés publiquement dans cet audit                               | P2       | crawler, navigateur, Rich Results                                          | QA publique                                    |
| P2-05 | Responsive long tableaux et CTA non recontrôlé ici                                          | P2       | 320–1440 px, clavier, sombre, impression                                   | captures                                       |
| P2-06 | Ressource téléchargeable de cartographie absente                                            | P2       | matrice local/PDF/tableur avec avis juridique                              | test de téléchargement                         |
| P2-07 | Sources normatives sans date par affirmation                                                | P2       | table de fraîcheur et propriétaire                                         | revue trimestrielle                            |
| P2-08 | Maillage vers sécurité, cloud, IA et cookies incomplet                                      | P2       | liens contextuels après chaque branche                                     | parcours interne                               |
| P2-09 | Pas de grille d'acceptation client/prestataire                                              | P2       | version DPA, annexes, sous-traitants, preuve                               | simulation questionnaire                       |
| P2-10 | Aucun audit de code, logs ou architecture réel                                              | P2       | rester explicitement théorique                                             | ne jamais sur-vendre                           |

### Portes explicites

```text
P0 — STOP : ne jamais présenter cette page comme avis juridique, certification ou conformité garantie. Revue DPO/juriste exigée pour un usage contractuel.
P1 — NO-GO publication commerciale : transferts, article 28, droits, article 30/32/35/37, ePrivacy, IA, exit et TCO doivent être ajoutés puis relus.
P2 — À CORRIGER : benchmark, ressource, hashes internes, SEO public, responsive et maillage.
P3 — NON PROUVÉ : aucun rôle, DPA, transfert, AIPD, sécurité, suppression, tenant ou incident réel n'est validé par cet audit.
P4 — NON PROUVÉ : aucune conformité, absence de risque, droit exercé, notification ou protection juridique ne peut être déduite du contenu.
```

### Score cible après correction

| Axe                  | Cible /10 | Condition                                                 |
| -------------------- | --------: | --------------------------------------------------------- |
| Intention            |        10 | scénario, décision et spécialiste visibles immédiatement  |
| Prudence juridique   |        10 | chaque règle bornée, date/source, aucune personnalisation |
| Rôles/contrat        |        10 | article 26/28 et chaîne complète                          |
| Transferts           |        10 | chapitre V, SCC/TIA, accès et revalidation                |
| Droits/principes     |        10 | base, information, minimisation, conservation et droits   |
| Sécurité/incident    |        10 | article 32, multi-tenant, logs, backups, violation        |
| Gouvernance          |        10 | registre, DPO, AIPD, preuve et responsable                |
| Produit/exit/IA      |         9 | fonctions, IA, portabilité, sortie et suppression         |
| Pédagogie/conversion |         9 | TCO fictif, ressource, CTA honnête                        |
| SEO/QA               |         9 | OG, JSON-LD, maillage et rendu vérifiés                   |

Total cible : **97/100**, avec une validation DPO/juriste séparée du score éditorial.

## 9. Hashes, OG, recherche et limites de preuve

```text
Page : src/app/guides/rgpd-saas-b2b/page.tsx
OG : src/app/guides/rgpd-saas-b2b/opengraph-image.tsx, ImageResponse via helper, 1200×630, titre « Que prévoir pour le RGPD de votre SaaS B2B ? », labels Rôles/Données/Contrat/Incident.
Registre : src/lib/guides.ts, datePublished/dateModified 2026-07-24, readTimeMin 12, entrée sans editorialStatus explicite.
Recherche : docs/research/rgpd-saas-b2b.md, 359 lignes/4 043 mots, 4 passes, P4 19/20, sources consultées le 23/24 juillet 2026.
SHA-256 observés le 24/07/2026 :
  docs/research/rgpd-saas-b2b.md = 072ee189bf28d2093360edfe59e98f566245838917d84f16a6742248f567feed
  src/app/guides/rgpd-saas-b2b/page.tsx = f88aee567210ee3eb12d16944ca9e08643cf4191eae0b81769bb0b39cb83de20
  src/app/guides/rgpd-saas-b2b/opengraph-image.tsx = 4fa0b1f422c7e84e49fb5884ae7b57f605ddffb158defdb79a2968566288289c
  src/lib/guides.ts = 8663e6e84352121ec854393e049492a1c2b72f242166141e5d31e0911b43cb09
Manifestes P4 comparés : page, OG et recherche concordants ; src/lib/guides.ts n'est pas présent dans le manifeste P4, état observé M préexistant hors de cette mission.
Requêtes dossier : RGPD SaaS, DPA SaaS, sous-traitant SaaS, hébergement Europe, liste sous-traitants, durée conservation, RGPD logiciel B2B.
Sources juridiques rouvertes : EUR-Lex, CNIL rôles/registre/bases/durées/droits/information/transferts/DPO/AIPD/cookies/sécurité/violations, CEPD, Commission SCC ; benchmark ICO/OAIC/FTC/BfDI uniquement pour couverture.
Calculs : aucun score ou pourcentage de conformité ; seuls les TCO du rapport sont fictifs et explicitement non juridiques.
Commandes : sed/rg/sha256sum en lecture seule ; aucun compte, données client, code applicatif, audit de sécurité, build, navigateur, commit, push ou déploiement.
Rendu 320–1440, OG public, JSON-LD, sitemap et robots : non exécutés dans cet audit ; statut maximal = analyse locale et vérification des sources/hashes.
```

## Conclusion opérationnelle

La page a une excellente base humaine et plusieurs affirmations déjà justes. Elle ne doit pas être retirée ; elle doit être transformée en guide de préparation juridique et produit à risque contrôlé. Le manque le plus sérieux est la chaîne entre le rôle annoncé, le DPA, le transfert, la fonction du produit et la preuve d'exécution.

La règle de publication est stricte : **information générale, source officielle, faits datés, aucune certification implicite, et revue DPO/juriste avant tout usage contractuel ou sectoriel sensible**. Tant que les articles 26/28/30/32/35/37 et le chapitre V ne sont pas traités, la page peut servir à préparer des questions, mais ne doit pas être vendue comme une réponse complète au questionnaire RGPD d'un prospect.

## 10. Correction complète et revalidation locale — 24 juillet 2026

Le verdict de 71/100 ci-dessus décrit le snapshot initial du giga-audit. Il est
conservé comme preuve de départ et ne décrit plus la page locale courante.

### Résultat du cycle de correction

```text
Quatorze P1 historiques du giga-audit : fermés sur le contenu local.
Quatre P1 résiduels du contre-audit : fermés.
P0 éditorial : 0.
P1 éditorial : 0.
P2 : 1 — BAT navigateur exact.
P3 factuelle : GO éditorial local.
P4 centrée lecteur : 94/100.
Publication, production et indexation : non vérifiées.
```

Les corrections résiduelles portent sur :

1. un développement complet du DPO — déclencheurs, autres règles possibles,
   désignation, moyens, indépendance, missions, conflits, coordonnées et CNIL ;
2. un cas Orbia cohérent entre page, questionnaire et kit ;
3. des budgets présentés comme hypothèses et sous-totaux fictifs incomplets ;
4. le champ exact de l’article 31 du Data Act et le régime de l’article 29 au
   12 janvier 2027 ;
5. un journal d’incident avec heures, périmètre, volumes, conséquences, rôle,
   risque, décisions, compléments, article 34 et clôture ;
6. l’explication des neuf CSV, trois Markdown et du relevé `.md` ;
7. une confirmation en deux actions avant remise à zéro et des groupes radio
   accessibles ;
8. l’article 25, la collecte indirecte et une chronologie d’incident qui ne
   retarde pas le confinement.

### Preuves conservées

- [P3 factuelle](../reviews/rgpd-saas-b2b-p3-facts.md) ;
- [P4 centrée lecteur](../reviews/rgpd-saas-b2b-p4-human.md) ;
- dossier de recherche, section 13 ;
- manifestes P2, P3 et P4 dans `docs/research/manifests/`.

La batterie ciblée compte **98 tests réussis sur 98**. TypeScript, ESLint
ciblé, Prettier et `git diff --check` réussissent. La route, l’image sociale et
le ZIP répondent localement ; le ZIP contient douze fichiers et son intégrité
est vérifiée.

La mesure réelle du rendu est désormais **7 018 mots, 35 minutes** et le
registre partagé est aligné à 35 minutes.

### Limite finale

Le guide est un dossier de préparation. Il ne prouve aucune conformité et ne
valide aucun rôle, base, transfert, DPO, traceur, modèle IA, architecture,
incident ou exercice de droit réel. Le BAT navigateur, la production, le
sitemap, l’indexation et la position Google restent non vérifiés.
