# Audit approfondi — `site-internet-en-panne-que-faire`

Date : 24 juillet 2026  
Auditeur : audit éditorial, triage d'incident, continuité et QA en lecture seule  
Snapshot : `src/app/guides/site-internet-en-panne-que-faire/page.tsx`, SHA-256 `a54d8df75cb410c53d3e467ea3fa4f5e65b0e466277fcff96295006b88b2ebfc` ; image sociale SHA-256 `1e47f739ba84ac9e1dfc0a795328c14e7dccd5d8b58319b56f33cf6e2ab28438` ; registre observé avec `datePublished: 2026-07-22`, `dateModified: 2026-07-22`, `readTimeMin: 15`.

## 1. Verdict exécutif

```text
Lecteur exact : dirigeant, indépendant ou responsable de petite entreprise qui constate une indisponibilité et doit protéger ses clients, ses données, ses preuves et son chiffre d'affaires sans empirer l'incident.
Question réelle : « Que puis-je observer maintenant, qui dois-je appeler, quand dois-je escalader, comment continuer mon activité et comment savoir que le service est réellement rétabli ? »
Décision attendue : trier sans geste destructeur, coordonner le bon fournisseur, maintenir un service de secours, choisir entre diagnostic/panne/cyber, puis autoriser une reprise testée et documentée.
Réponse actuelle en une phrase : le guide est exceptionnellement prudent sur les essais, les sauvegardes, la branche cyber, la communication et les tests métier ; il ne donne toutefois pas encore une chronologie 0–15 min/1 h/4 h/24 h, une taxonomie DNS/CDN/hébergement/application/base/paiement, des RTO/RPO/SLA ou un calcul du coût d'arrêt.
Défaut qui coûte le plus de valeur : les consignes sont justes mais dispersées ; en situation de stress, le dirigeant doit pouvoir choisir en moins d'une minute entre panne technique, suspicion cyber, fournisseur tiers et perte de données, avec un seuil d'escalade clair.
Niveau actuel : B+ (base très sûre et humaine, incomplète comme fiche d'incident opérationnelle).
Priorité : haute.
Statut : audité ; aucun guide source, registre ou fichier Git modifié.
```

### Score avant correction

| Axe | Note /10 | Preuve localisable | Manque décisif |
| --- | ---: | --- | --- |
| Intention | 9 | hero et introduction centrés sur l'urgence, les clients et les preuves | triage par classe de panne pas assez immédiat |
| Décision | 8 | ticket express, intervenants, branches cyber et restauration | absence de matrice d'escalade et go/no-go |
| Pédagogie | 9 | vocabulaire simple, six lignes, exemples fictifs explicitement bornés | RTO/RPO/SLA et DNS/CDN non expliqués |
| Profondeur | 8 | sécurité, CNIL, sauvegarde, tests métier, communication | base de données, paiement, logs, coûts et reprise progressive manquent |
| Preuve | 9 | CNIL, ANSSI, CERT-FR, Google, Afnic, Cybermalveillance | absence de CISA/NCSC/international et de preuves d'incident locales |
| Comparaison | 7 | panne/lenteur/attaque, site vitrine/rendez-vous/boutique/espace client | DNS/CDN/hébergeur/app/DB/paiement non différenciés |
| Originalité | 9 | ticket de six lignes, test passif, scénario 08:42–10:32 | pas de journal structuré, RTO/RPO ni coût du non-service |
| Style | 9 | plume humaine, interdits explicites, aucune cause inventée | quelques paragraphes longs pour une lecture en urgence |
| Conversion | 8 | CTA transparent, pas d'astreinte ni délai de réparation promis | livrable de diagnostic et relais en dehors des heures non détaillés |
| SEO/produit | 8 | metadata OG explicite, Article/Breadcrumb/FAQ, maillage | responsive, liens et `readTimeMin` non vérifiés ; ressource réflexe absente |

Total : **84/100**.

Le guide est déjà nettement plus responsable que la plupart des « dépannages en cinq minutes ». Il déconseille le redémarrage au hasard, protège les secrets, distingue panne et violation, et exige un test métier avant d'annoncer le retour. La prochaine amélioration ne doit pas ajouter du jargon ni encourager l'entreprise à jouer au technicien : elle doit rendre l'ordre des décisions et les critères d'escalade visibles en une page.

## 2. Ce que le guide dit réellement

### Progression observée

Le début propose un ticket de six lignes et un test passif conditionnel, puis :

1. distingue panne, lenteur et attaque possible ;
2. collecte heure, URL, message, fonctions, second essai et dernier changement ;
3. tient un journal d'incident ;
4. choisit hébergeur, mainteneur, registrar ou spécialiste cyber ;
5. informe les clients avec un prochain point plutôt qu'une promesse de retour ;
6. distingue indisponibilité et violation de données ;
7. refuse la restauration aveugle et rappelle les tests de sauvegarde ;
8. teste le travail réel : formulaire, rendez-vous, commande, connexion ;
9. illustre un scénario fictif de 110 minutes ;
10. organise le lendemain et le retour d'expérience.

Cette progression protège très bien un lecteur non technique. Elle doit encore être convertie en fiche « heure par heure » et en arbre de triage. En particulier, le guide dit qui appeler mais pas comment reconnaître que le problème se situe probablement au niveau DNS, CDN, hébergement, runtime, application, base de données ou paiement.

### Ce qui paraît complet sans encore l'être

- « Le site ne répond plus » englobe une expiration de domaine, une résolution DNS, un certificat, un CDN/WAF, un serveur, un conteneur, une base de données, une API ou un prestataire de paiement. Ces causes n'ont ni propriétaire ni action de vérification commune.
- Le ticket de six lignes ne demande pas explicitement le code HTTP observé, la région/réseau concerné, un identifiant de commande ou la référence du fournisseur — sans demander de données personnelles inutiles.
- Le guide dit de conserver les preuves, mais ne distingue pas capture d'écran, horodatage, en-têtes, journaux et mémoire volatile ; en cas de suspicion cyber, l'installation d'un outil ou un redémarrage peut détruire des indices.
- La branche « spécialiste cyber » est saine, mais le seuil d'escalade devrait être une liste de déclencheurs : contenu modifié, redirection inconnue, compte nouveau, clé exposée, extorsion, exfiltration possible, plusieurs systèmes atteints.
- La CNIL est citée correctement, mais le délai de 72 heures et le risque de violation méritent une phrase « transmettre immédiatement les faits à la personne qui qualifie » ; l'article ne doit pas devenir une pseudo-consultation juridique.
- La restauration est prudente mais RPO (perte de données acceptable) et RTO (temps cible de reprise) ne sont pas nommés. Sans ces notions, le dirigeant ne peut pas arbitrer entre remettre une page vitrine et reconstruire un panier/stock/commande.
- Le scénario fictif traite une erreur 502 liée à une version d'application, mais ne montre ni coût d'arrêt, ni mise à jour client 0–15/1 h/4 h/24 h, ni post-mortem.
- Les tests de retour mentionnent téléphone/ordinateur, mais pas cache/CDN, paiement réel ou simulé, e-mail de confirmation, webhooks, stock, double commande, base de données ni accessibilité.
- Aucun SLA n'est défini : heure de couverture, GTI (temps de prise en compte), GTR (objectif de rétablissement), exclusions, escalade, astreinte et pénalités restent dans les guides voisins.
- Le lendemain demande un RETEX sans modèle : cause, déclencheur, durée, systèmes touchés, décisions, coûts, actions, responsable et date de vérification.
- Cyber-assurance et autorités ne sont pas traitées. C'est acceptable pour éviter l'alarmisme, mais une phrase peut dire de consulter la police et le courtier dès qu'un déclencheur contractuel ou une suspicion établie existe, sans recommander une déclaration automatique.

## 3. Benchmark France et international

Recherche effectuée le 24 juillet 2026. Les ressources officielles sont utilisées pour les réflexes, la sauvegarde, la réponse à incident, la continuité et la notification. Les organismes étrangers ne remplacent pas la qualification française (CNIL, ANSSI, CERT-FR) ; ils servent à vérifier que les angles opérationnels sont complets.

| Ressource et URL directe | Zone | Réponse utile | Preuve / méthode | Limite | Apport à adapter |
| --- | --- | --- | --- | --- | --- |
| [ANSSI — anticiper et gérer une crise cyber](https://cyber.gouv.fr/securisation/gestion-de-crise/anticiper-gerer-une-crise-cyber/) | France | PCA/PRA, communication, seuils d'escalade, coordination métier/technique, RETEX, assurance cyber | source institutionnelle opérationnelle | crise cyber, pas toute panne fournisseur | ajouter seuils et retour d'expérience |
| [ANSSI — piloter la remédiation](https://cyber.gouv.fr/securisation/gestion-de-crise/piloter-la-remediation-dun-incident-cyber/) | France | endiguement, reprise de contrôle et rétablissement suffisant | guide officiel de remédiation | destiné aux équipes cyber/DSI | mieux séparer triage dirigeant et réponse experte |
| [CERT-FR — bons réflexes intrusion](https://cert.ssi.gouv.fr/les-bons-reflexes-en-cas-dintrusion-sur-un-systeme-dinformation/) | France | synthétiser connu/inconnu et mobiliser les compétences adaptées | source opérationnelle officielle | intrusion, pas simple 503 | renforcer préservation et escalade |
| [ANSSI — sauvegarde SI](https://messervices.cyber.gouv.fr/guides/sauvegarde-des-systemes-dinformation) | France | stratégie de restauration, copies hors ligne, isolation, tests et sources de confiance | guide officiel | contexte SI plus large qu'un site | ajouter sauvegarde saine et reconstruction |
| [CNIL — continuité et reprise](https://www.cnil.fr/fr/securite-prevoir-la-continuite-et-la-reprise-dactivite) | France | intervenants, alertes, fonctionnement temporaire et tests | source institutionnelle | protection des données, pas SLA web | enrichir PCA/PRA et relais client |
| [CNIL — incidents et violations](https://www.cnil.fr/fr/securite-gerer-les-incidents-et-les-violations) | France | distinction incident/violation et analyse des faits | source officielle | qualification selon risque | garder la frontière juridique |
| [Google — suspendre temporairement une activité](https://developers.google.com/search/docs/crawling-indexing/pause-online-business?hl=fr) | international | service limité/503 plutôt que suppression dans fermeture courte | documentation officielle | SEO, pas dépannage applicatif | intégrer 503 au plan technique seulement |
| [Afnic — lexique DNS](https://www.afnic.fr/lexique/) | France | rôle DNS et nom de domaine | source registre .fr/.re/.pm/.yt/.tf/.wf | périmètre extensions Afnic | expliquer ownership DNS/registrar |
| [CISA — StopRansomware Guide](https://www.cisa.gov/stopransomware/ransomware-guide) | États-Unis | isoler, préserver preuves, backups offline, communications, restaurer proprement, RETEX | agence officielle américaine | ransomware, pas panne ordinaire | ajouter preuves volatiles et ordre des actions |
| [CISA — données et preuves](https://www.cisa.gov/sites/default/files/FactSheets/NCCIC%20ICS_FactSheet_AreYouCompromised_S508C.pdf) | États-Unis | toute action modifie des preuves ; prudence avant arrêt/installation | fiche officielle | systèmes ICS, principe généralisable avec prudence | mieux expliciter « ne pas toucher » |
| [NCSC UK — préparer les incidents](https://www.ncsc.gov.uk/collection/small-business-guidance--response-and-recovery/step-1-prepare-for-incidents) | Royaume-Uni | triggers, rôle de décision, contacts hors bande, contrats et cyber-assurance | guide officiel PME | préparation plus que panne en direct | formaliser responsabilités et contacts accessibles hors site |
| [NCSC UK — réponse et récupération](https://www.ncsc.gov.uk/collection/small-business-guidance--response-and-recovery) | Royaume-Uni | séquence préparation/réponse/récupération et exercices | collection officielle | à contextualiser France | ajouter exercice et continuité |
| [Cyber.gov.au — plan de réponse cyber](https://www.cyber.gov.au/business-government/detecting-responding-to-threats/cyber-security-incident-response/cyber-security-incident-response-planning-executive-guidance) | Australie | identifier systèmes/données critiques et préparer gouvernance | guidance officielle australienne | cyber, pas disponibilité simple | relier criticité métier au RTO/RPO |
| [Cyber.gov.au — data breach](https://www.cyber.gov.au/report-and-recover/recover-from/data-breaches) | Australie | plan de réponse et obligations de violation | portail officiel | droit australien | benchmark de processus, pas règle française |
| [Cyber.gov.au — Business Continuity in a Box](https://www.cyber.gov.au/business-government/small-business-cyber-security/small-business-hub/business-continuity-in-a-box) | Australie | service ICT minimal en mode dégradé | ressource officielle PME | périmètre et pays différents | créer un vrai canal de secours |
| [Cloudflare — troubleshooting DNS](https://developers.cloudflare.com/dns/troubleshooting/) | international / opérateur | vérifier délégation, enregistrements, propagation, DNSSEC et caches | documentation primaire | Cloudflare-specific | ajouter la branche DNS/CDN sans modifier au hasard |
| [Cloudflare — status](https://www.cloudflarestatus.com/) | international / opérateur | vérifier incident global documenté | page d'état primaire | un fournisseur parmi d'autres | distinguer fournisseur global et site local |
| [AWS — incident response](https://docs.aws.amazon.com/whitepapers/latest/aws-security-incident-response-guide/aws-security-incident-response-guide.html) | US / cloud | préparation, détection, analyse, containment, recovery | documentation éditeur primaire | architecture AWS | rappeler que cloud provider et application sont responsabilités différentes |

### Saturation et enseignements

La plupart des ressources disent « contacter le prestataire, sauvegarder, restaurer et communiquer ». Le différenciant utile est l'ordre : préserver les preuves, isoler si cyber, choisir le service critique, définir RTO/RPO, puis restaurer une source saine et vérifier le métier. Les sources étrangères ajoutent trois angles que le guide doit adopter : contacts accessibles sans le site, triggers de transfert à la direction, et exercices de continuité.

## 4. Matrice de gain d'information

| Question décisive | Meilleure réponse française | Apport international | Couverture actuelle | Manque | Réponse supérieure à produire |
| --- | --- | --- | --- | --- | --- |
| Que faire dans les 15 premières minutes ? | noter sans modifier, ticket de six lignes | CISA insiste sur preuves volatiles et isolement si cyber | bonne | chronologie et déclencheurs | fiche 0–15 min avec « ne pas faire » |
| Comment savoir qui appeler ? | hébergeur, mainteneur, registrar, cyber | NCSC exige liste de contacts hors bande et transfert de responsabilité | partielle | matrice fournisseur/symptôme | arbre DNS/CDN/host/app/DB/paiement |
| Panne ou cyber ? | contenu/redirection/compte changé = branche cyber | ANSSI/CISA détaillent indicateurs et préservation | bonne | seuils et exemples supplémentaires | triggers explicites, aucune conclusion hâtive |
| Le serveur répond-il vraiment ? | 500/502/503 utile mais non causal | Cloudflare distingue DNS/CDN/edge/origin | faible | statut HTTP/headers/edge/origin | tableau de triage technique |
| La boutique est-elle revenue ? | tester panier/paiement/confirmation | AWS/CISA priorisent services critiques et recovery | partielle | stock, webhooks, double commande | recette e-commerce signée |
| Quand restaurer ? | jamais aveuglément, copie testée | ANSSI/CISA : source saine, offline, isolation et tests | bonne | décision selon RPO/RTO et données récentes | fiche restauration/rollback |
| Que promettre au client ? | prochain point, pas heure inventée | ANSSI/NCSC/CISA communications planifiées | bonne | fréquence, canal hors site, message cyber | modèles 0–15/1h/4h/24h |
| Faut-il contacter CNIL/autorités/assurance ? | seulement si faits et risque le justifient | ANSSI/NCSC parlent de notification et police/assurance selon plan | partielle | déclencheurs et rôles | encadré « qualifier avant notifier » |
| Comment mesurer le coût ? | impact métier mentionné | continuité officielle relie services critiques et reprise | faible | montant/minute, commandes, leads, pénalités | calculateur d'arrêt et réserve |
| Quand dire rétabli ? | parcours métier testés et acceptés | ANSSI recovery + RETEX | partielle | critères RTO/RPO/SLA | matrice go/no-go |
| Que faire le lendemain ? | journal, accès, test restauration, maintenance | ANSSI exige RETEX et exercices | partielle | modèle RETEX et action owners | rapport 24 h / 7 jours |

## 5. Faits et fraîcheur

| Affirmation du guide | Verdict | Source primaire actuelle | Périmètre et date | Correction |
| --- | --- | --- | --- | --- |
| Une panne n'est pas automatiquement une violation de données | confirmé et important | [CNIL incidents/violations](https://www.cnil.fr/fr/securite-gerer-les-incidents-et-les-violations) | qualification selon données et risque | conserver, ajouter « transmettre les faits immédiatement » |
| 72 h concerne certaines violations présentant un risque | confirmé, mais juridiquement à manier avec prudence | CNIL notification | données personnelles, responsable de traitement | dire que le délai se calcule dès connaissance et qu'une personne compétente qualifie |
| Sauvegarde doit être restaurable/testée | confirmé | CNIL sauvegarde, ANSSI sauvegarde | données et SI | ajouter RPO, RTO, source saine, hors ligne et isolation |
| Une sauvegarde peut contenir le vecteur de compromission | confirmé dans contexte cyber | [ANSSI Essentiels sauvegarde](https://cyber.gouv.fr/sites/default/files/document/anssi_essentiels_sauvegarde-si_v1.1.pdf) | sauvegardes SI après incident | conserver et ajouter scan/source de confiance |
| Ne pas modifier au hasard si cyber possible | confirmé comme principe de préservation | CERT-FR, CISA | intrusion et preuves volatiles | préciser que l'isolation doit être coordonnée par expert |
| 503 peut servir pour fermeture courte | confirmé avec limites | [Google pause online business](https://developers.google.com/search/docs/crawling-indexing/pause-online-business?hl=fr) | activité temporairement fermée, SEO | ne pas transformer en recette de panne sans prestataire |
| DNS, hébergement, code peuvent appartenir à différents fournisseurs | confirmé en pratique | Afnic lexique DNS et contrats | nom de domaine / hébergement | conserver, ajouter tableau de responsabilités |
| Afficher prochain point plutôt qu'heure de retour | bonne pratique de communication | ANSSI communication de crise, NCSC/CISA plans | crise et incident | conserver, ajouter fréquence et canal hors bande |
| Une page d'accueil visible ne prouve pas le retour | principe métier confirmé | continuité/recette propre à l'entreprise | formulaire, paiement, rendez-vous | conserver et formaliser go/no-go |
| Le scénario 08:42–10:32 représente 110 minutes | calcul fictif correct | arithmétique locale, explicitement fictive | aucune généralisation | conserver mais ajouter coût et RTO/RPO |

### Contradictions ou risques de lecture

- Le guide dit de ne pas lancer de test complet avant intervention, puis propose des tests métiers après retour : la frontière doit être écrite en gras — observation passive avant diagnostic, tests contrôlés après décision du prestataire.
- « Page d'état de l'hébergeur » peut être indisponible ou ne pas couvrir le CDN, le registrar, l'API ou le paiement. Il faut proposer un canal téléphonique/hors bande.
- « Appeler la bonne personne » ne donne pas de priorité en cas de panne partielle : paiement et données critiques peuvent passer devant la page d'accueil.
- La référence ANSSI sur l'isolement doit rester orientée vers les spécialistes ; un dirigeant ne doit pas couper un serveur ou supprimer des preuves sur une simple suspicion.
- Le texte mentionne « retour à l'ancienne version » sans définir les conditions de rollback, la conservation des commandes, la compatibilité schéma et la durée d'acceptation.

### Faits à retirer plutôt qu'à affaiblir

- toute promesse de réparation ou de réponse « dans l'heure » ;
- toute instruction générique de redémarrer, restaurer, désactiver une extension ou modifier DNS ;
- toute notification CNIL/autorité/assureur sans déclencheur factuel et qualification compétente ;
- tout montant d'impact inventé à partir du seul nombre de minutes.

## 6. Chronologie, scénarios et calculs à construire

### Chronologie opérationnelle commune

| Fenêtre | Action sûre | Interdit sans spécialiste | Sortie attendue / escalade |
| --- | --- | --- | --- |
| 0–15 min | horodater, URL, code/message, capture, fonctions, dernier changement, test passif conditionnel, vérifier canal fournisseur | identifiants, paiement, restauration, redémarrage, suppression, changement DNS | ticket express + coordinateur ; cyber immédiat si contenu/accès/redirection inconnus |
| 15–60 min | ouvrir le journal, appeler fournisseur le plus probable, maintenir téléphone/e-mail, préparer message clients | multiplier les intervenants ou modifier plusieurs couches | hypothèse classée DNS/CDN/host/app/DB/paiement ; GTI démarrée |
| 1–4 h | diagnostic coordonné, décider service dégradé, choisir rollback ou restauration testée, communiquer à heure fixe | nettoyer une compromission ou restaurer production sans preuve | RTO cible, propriétaire, décision go/no-go ; escalade direction si impact critique |
| 4–24 h | rétablir une version contrôlée, tests métier, rapprocher commandes/demandes, qualifier données et assurance | annoncer « sécurisé » sans analyse, supprimer journaux | service accepté partiellement/totalement ; notification/autorités seulement si déclencheur qualifié |
| J+1–J+7 | journal final, cause retenue et inconnues, tests backup, suivi clients, correctifs | fermer le ticket dès retour de page | RETEX initial, actions responsables/dates |
| J+30–J+90 | exercice, correction SLA/RPO/RTO, monitoring, contacts hors site, contrôle restauration | considérer l'incident comme isolé si cause structurelle | RETEX final, plan de prévention et décision maintenance |

### Triage par couche

| Symptôme prudent à observer | Couche probable à confier | Preuve demandée | Ne pas conclure |
| --- | --- | --- | --- |
| domaine introuvable, certificat, plusieurs réseaux touchés | registrar/DNS/TLS/CDN | résolution, expiration, DNSSEC, certificat, statut fournisseur | que l'application est cassée |
| 5xx intermittent, edge différent selon région | CDN/WAF/origin/hébergement | code, headers, logs edge/origin, incident fournisseur | que 502 = code défectueux |
| accueil visible, formulaire/connexion en erreur | application/API/runtime | logs applicatifs, dernier déploiement, endpoint, secrets | que la base est perdue |
| page visible, commandes incohérentes ou lenteur DB | base de données/stock/intégration | erreurs, locks, réplication, dernière transaction | restaurer sans RPO |
| panier OK, paiement ou confirmation absent | PSP/webhook/e-mail/CRM | transaction test, statut fournisseur, idempotence, e-mail | doubler la commande |
| contenu remplacé, compte admin inconnu, redirection | cyber/identité/DNS compromise possible | captures, logs, accès, horodatage, indicateurs | nettoyer ou réinstaller soi-même |

### RTO/RPO/SLA à expliquer

```text
RTO (Recovery Time Objective) : durée cible pour remettre le service ou un
mode dégradé en fonction. Ce n'est pas une promesse si le contrat ne définit
pas départ, périmètre, exclusions et tests.

RPO (Recovery Point Objective) : quantité maximale de données que l'entreprise
accepte de perdre en cas de restauration. Une sauvegarde quotidienne peut
impliquer jusqu'à 24 h de données à rapprocher ; elle ne dit rien sur le temps
de reprise.

GTI : délai de prise en compte par le support.
GTR : objectif de rétablissement ou de contournement, à distinguer d'une
réponse automatique.
```

| Type | Exemple de RTO/RPO à décider | Test métier | Escalade |
| --- | --- | --- | --- |
| vitrine sans transaction | mode contact téléphonique le jour même ; RPO contenu 24 h | formulaire + e-mail | mainteneur/hebergeur en heures ouvrées |
| rendez-vous | service de réservation dégradé en quelques heures ; RPO créneaux selon outil | création/annulation + agenda | mainteneur + fournisseur de réservation |
| boutique | panier/paiement ou commande manuelle en quelques heures ; RPO commandes proche du dernier export | paiement contrôlé, confirmation, stock | mainteneur + PSP + hébergeur |
| application métier | RTO/RPO établis par criticité, parfois astreinte | rôles, données, intégration, reprise | cellule incident / cyber selon déclencheur |

Les valeurs sont des exemples de cadrage, jamais des standards universels. Le dirigeant doit comparer le coût d'un RTO plus court avec le coût du mode dégradé et de l'astreinte.

### Coût d'arrêt sans faux ROI

```text
Coût direct estimé = durée × (leads ou commandes par heure × marge moyenne)
                    + temps interne de coordination
                    + coût de reprise / rapprochement
                    + communication ou geste commercial.

Coût attendu annuel = probabilité d'incident × impact direct + indirect.
```

Exemple illustratif, à remplacer par les chiffres de l'entreprise :

| Activité | Hypothèse | Coût brut de 4 h | Ce qu'il faut vérifier |
| --- | --- | ---: | --- |
| vitrine | 2 demandes qualifiées/h × 120 € de marge | 960 € | appels réellement perdus ou rattrapés |
| rendez-vous | 3 réservations/h × 80 € de marge | 960 € | créneaux et confirmations |
| boutique | 5 commandes/h × 55 € de marge | 1 100 € | commandes doublées, panier abandonné, stock |
| application interne | 6 salariés × 4 h × 45 € de coût chargé | 1 080 € | activité récupérable ou définitivement perdue |

Le chiffre ne doit pas servir à vendre une assurance ou un SLA sans historique. Il permet seulement de décider si un canal de secours, une sauvegarde testée, une astreinte ou un RTO plus court mérite d'être financé.

## 7. Comparaison et position professionnelle

```text
Option la plus sûre immédiatement : observer, documenter, coordonner et préserver les preuves ; ne pas multiplier les changements.
Option la plus rapide quand la cause est connue : rollback contrôlé ou contournement limité, après sauvegarde/validation et avec conservation des données récentes.
Option la moins risquée en suspicion cyber : isoler et faire intervenir une compétence réponse à incident ; restaurer seulement depuis une source saine après qualification.
Position Hagnéré Code : aider à qualifier le symptôme, produire un journal exploitable et orienter vers le propriétaire de la couche concernée ; ne pas se présenter comme astreinte, CERT ou assureur.
Ce que nous déconseillons même si nous pourrions le vendre : restaurer la dernière copie au hasard, changer DNS pour faire « quelque chose », désactiver la sécurité, publier une cause non prouvée ou promettre un retour horaire.
```

## 8. Objections et cas limites

| Objection loyale | Réponse prouvée | Ce qui reste incertain | Conséquence |
| --- | --- | --- | --- |
| « Je vais redémarrer, cela réglera peut-être tout. » | un redémarrage peut supprimer des preuves et ne traite pas DNS/DB/paiement | couche réellement en panne | attendre le diagnostic, sauf procédure fournisseur connue |
| « La dernière sauvegarde est forcément la meilleure. » | elle peut contenir le défaut, écraser commandes ou être compromise | intégrité et RPO | restaurer en environnement séparé et rapprocher les données |
| « La page d'état dit que tout va bien. » | elle ne couvre pas forcément CDN, compte, paiement ou site propre | couverture fournisseur | vérifier la couche et le parcours métier |
| « C'est sûrement un piratage. » | 500/502/503 ne prouvent pas une attaque | indicateurs réels | brancher cyber seulement sur déclencheurs observables |
| « Je dois prévenir la CNIL tout de suite. » | panne et violation ne sont pas synonymes | données touchées et risque | transmettre les faits au responsable, qualifier puis notifier si requis |
| « Le site est revenu, je peux fermer le ticket. » | page visible ≠ formulaire/commande/CRM rétablis | parcours métier | recette et acceptation signée |
| « Je ne veux pas inquiéter les clients. » | un message factuel et un canal de secours évitent les essais répétés | durée et périmètre | communiquer au prochain point, sans cause inventée |
| « Le prestataire habituel ne répond pas. » | contrats, registrar, hébergeur et fournisseur restent des pistes | accès et autorité | préparer preuve, ne pas donner secrets à un inconnu |
| « Nous n'avons pas de RPO/RTO. » | on peut commencer par un mode dégradé et mesurer l'impact | criticité réelle | définir une valeur après l'incident, puis la tester |
| « Mon assurance cyber paiera forcément. » | couverture, déclaration et exclusions dépendent du contrat | police et déclencheur | consulter courtier/assureur sans retarder la réponse technique |

## 9. Plan de réécriture

| Ordre | Section proposée | Question résolue | Preuve / outil | Décision produite | Conserver / créer / couper |
| ---: | --- | --- | --- | --- | --- |
| 1 | « D'abord : sécurité et preuves » | que ne dois-je surtout pas faire ? | encadré observé / interdit / cyber | continuer ou escalader | conserver l'ouverture, raccourcir |
| 2 | « Arbre de triage par couche » | DNS, CDN, host, app, DB ou paiement ? | symptômes, fournisseur et preuve | appeler le bon acteur | créer tableau |
| 3 | « 0–15 minutes » | que noter maintenant ? | ticket six lignes + code/heure/réseau | ticket exploitable | conserver et clarifier |
| 4 | « 1 h, 4 h, 24 h » | quelle action et quel message ensuite ? | chronologie + propriétaires | coordonner, communiquer, escalader | créer timeline |
| 5 | « RTO, RPO, SLA » | quelle reprise est acceptable ? | définitions et exemples | choisir priorité et contrat | créer encadré |
| 6 | « Service dégradé et communication » | comment continuer l'activité ? | téléphone/e-mail/status page, modèles | prévenir sans mentir | conserver messages, ajouter canal hors site |
| 7 | « Restaurer/rollback sans écraser » | quelle version et quelles données ? | source saine, test, rapprochement | restaurer, rollback ou attendre | approfondir avec ANSSI/CISA |
| 8 | « Retour accepté » | quand le site est réellement revenu ? | recette par site | go/no-go | créer checklist |
| 9 | « Coût de l'arrêt » | quel investissement prévention ? | formule leads/commandes/heures | SLA, backup, maintenance | créer calcul illustratif |
| 10 | « J+1, J+7, J+30, J+90 » | comment éviter la répétition ? | journal, RETEX, action owner | plan correctif | créer modèle |
| 11 | CTA | qui peut aider et dans quel périmètre ? | livrable diagnostic, orientation | demande qualifiée | conserver honnêteté, expliciter heures |

### Contrat des 150 premiers mots

> Votre site ne répond plus, le formulaire n'arrive plus ou les clients ne peuvent plus payer. Dans les premières minutes, votre travail n'est pas de devenir développeur : c'est de protéger les preuves, de ne pas écraser des commandes ou des sauvegardes, et de donner à la bonne personne un constat exploitable. Une erreur 502, un DNS expiré, un CDN indisponible, une base de données bloquée, une API de paiement en panne ou un contenu modifié sans autorisation ne se traitent pas de la même façon. Ce guide vous donne une chronologie 0–15 minutes, 1 heure, 4 heures et 24 heures, un arbre de triage et des messages clients sans cause inventée. Il explique aussi RTO, RPO et SLA, quand une suspicion cyber doit prendre le relais, quoi demander avant une restauration et quels tests permettent d'accepter réellement le retour. Les exemples de coût et de durée sont illustratifs : aucun site ne peut recevoir ici une promesse de réparation ou d'absence de perte de données.

### Éléments à supprimer ou déplacer

- déplacer la longue explication fournisseur vers l'arbre de triage ;
- remplacer la seule échéance « lendemain » par 0–15/1 h/4 h/24 h/J+1/J+7/J+30/J+90 ;
- éviter que « compétence cyber » semble accessible uniquement après une preuve : un faisceau de déclencheurs suffit ;
- ajouter le code HTTP, le réseau/région, la couche suspectée et la référence de ticket au journal ;
- encadrer « page de maintenance 503 » comme action du prestataire, pas geste DIY ;
- ne pas transformer le scénario de 110 minutes en repère de marché.

### Éléments à conserver

- le principe « ne changez rien au hasard » ;
- le test passif conditionnel et l'interdiction de saisir des secrets ;
- le ticket de six lignes ;
- la séparation panne/lenteur/attaque ;
- la protection des données et la distinction CNIL incident/violation ;
- la sauvegarde restaurable et la mise en garde contre les copies compromises ;
- les messages clients, le test métier et le scénario explicitement fictif ;
- le CTA sans astreinte ni promesse de réparation.

## 10. Contre-audit après correction

Ce tableau décrit les corrections attendues ; aucune n'a été appliquée à la page dans cette mission.

| ID | Problème | Priorité | Correction attendue | Revalidation indépendante |
| --- | --- | --- | --- | --- |
| P0-01 | Aucun risque vital ou instruction dangereuse repérée ; le guide déconseille les gestes destructeurs | P0 | aucune | relecture sécurité et juridique |
| P1-01 | Taxonomie panne insuffisante DNS/CDN/host/app/DB/paiement | P1 | arbre de triage par couche, symptôme et propriétaire | test par dirigeant non technique |
| P1-02 | Chronologie 0–15/1 h/4 h/24 h absente | P1 | timeline avec actions sûres, interdits, sorties et escalades | simulation d'incident |
| P1-03 | Preuves et journal incomplets pour suspicion cyber | P1 | horodatage, headers/logs selon expert, mémoire volatile, secrets interdits | revue CERT/ANSSI-like |
| P1-04 | RTO/RPO/SLA non expliqués | P1 | définitions, exemples vitrine/boutique/app et limites | recalcul et lecture contrat |
| P1-05 | Critères d'escalade cyber, direction, fournisseur et assurance non formalisés | P1 | triggers et transferts de responsabilité | exercice en mode dégradé |
| P1-06 | Restauration/rollback sans décision données récente | P1 | source saine, environnement séparé, rapprochement commandes, go/no-go | test de restauration documenté |
| P1-07 | Cost of downtime absent | P1 | formule leads/commandes/heures/marge avec hypothèses | contrôle inverse et sensibilité |
| P1-08 | Communication sans chronologie ni canal hors site | P1 | modèles 0–15/1 h/4 h/24 h, prochaine information et service alternatif | test d'envoi sans site |
| P1-09 | Retour accepté sans matrice de couche/activité | P1 | tests par formulaire, agenda, panier, paiement, DB, CRM et mobile | recette métier signée |
| P1-10 | RETEX sans modèle ni actions datées | P1 | cause, impact, durée, décision, action owner, échéance, exercice | revue J+7/J+30/J+90 |
| P2-01 | Benchmark international officiel absent | P2 | ANSSI/CNIL/CERT-FR + CISA/NCSC/Cyber.gov.au/Cloudflare | URLs rouvertes avant publication |
| P2-02 | Cyber-assurance et autorités seulement indirectes | P2 | encadré « consulter si déclencheur contractuel établi » | validation juridique, pas conseil automatique |
| P2-03 | `readTimeMin: 15` à recalculer après timeline ajoutée | P2 | recalculer le registre | texte vs registre |
| P2-04 | Liens, JSON-LD et metadata non testés en ligne | P2 | vérifier validité, canonical, OG, FAQ et Article | crawl/navigateur réel |
| P2-05 | Responsive et lisibilité d'urgence non vérifiés | P2 | QA 320–1440, tableaux, encadrés et CTA | capture réelle mobile/desktop |
| P2-06 | Ressource téléchargeable absente | P2 | fiche incident offline + journal + contacts | téléchargement sans site |
| P2-07 | Monitoring fournisseur/status page et DNS/CDN non reliés aux contacts | P2 | registre externe de contacts et pages d'état | exercice canal hors bande |
| P2-08 | Accessibilité et langues non traitées en urgence | P2 | messages lisibles, contrastes, alternatives téléphoniques | test UX |
| P2-09 | Liens vers guides voisins nombreux mais peu hiérarchisés | P2 | séparer panne, lenteur, cyber, maintenance | test parcours utilisateur |
| P2-10 | Données e-commerce/CRM et idempotence peu explicites | P2 | vérifier double commande, webhooks, stock, e-mails | recette contrôlée |

### Portes explicites

```text
P1 — PRÉSENTE MAIS INCOMPLÈTE : NO-GO jusqu'à fermeture et simulation des P1-01 à P1-10.
P2 — À CORRIGER : benchmark officiel, ressources offline, metadata, responsive, fournisseurs et e-commerce restent à traiter.
P3 — REJETÉE / NON VALIDÉE : aucun test réel de panne, restauration, rollback, page d'état, DNS/CDN, responsive ou production n'est prouvé par cet audit.
P4 — REJETÉE / NON VALIDÉE : aucun délai de réparation, RTO réel, intégrité des données, SLA ou résultat commercial ne peut être déclaré.
```

### Score cible après correction

| Axe | Cible /10 | Condition de passage |
| --- | ---: | --- |
| Intention | 10 | action sûre en urgence et triage immédiat |
| Décision | 9 | timeline, seuils, propriétaire et go/no-go |
| Pédagogie | 10 | couches expliquées avec symptômes concrets |
| Profondeur | 9 | preuves, RTO/RPO/SLA, cyber, données, coûts, RETEX |
| Preuve | 10 | sources officielles françaises et internationales bornées |
| Comparaison | 9 | vitrine/rendez-vous/boutique/app et couches fournisseurs |
| Originalité | 10 | fiche offline, journal, coût et chronologie |
| Style | 10 | phrases courtes, interdits explicites, ton non anxiogène |
| Conversion | 9 | orientation claire et limites du CTA |
| SEO/produit | 9 | FAQ utile, metadata, ressource et QA réelles |

Total cible : **95/100**. La note cible désigne la qualité d'une fiche de décision, pas une garantie de disponibilité.

## 11. Preuves techniques et visuelles

```text
Manifeste : src/app/guides/site-internet-en-panne-que-faire/page.tsx ; opengraph-image de route observée par metadata ; entrée src/lib/guides.ts.
Constats source : metadata OG avec image explicite, Twitter image, robots guideRobots, Article/Breadcrumb JSON-LD, 10 FAQ, 10 sections H2, ticket express, tableaux, CTA et maillage interne.
Registre : datePublished/dateModified 2026-07-22, readTimeMin 15 ; aucune modification.
Calculs refaits : scénario 08:42→10:32 = 110 minutes correctement borné ; coûts d'arrêt proposés comme hypothèses illustratives, non comme faits.
Sources rouvertes : ANSSI crise/remédiation/sauvegarde ; CNIL continuité/sauvegarde/violations ; CERT-FR ; CISA ; NCSC UK ; Cyber.gov.au ; Cloudflare DNS/status ; Google pause business ; Afnic.
Liens vérifiés : URLs directes enregistrées le 24/07/2026 ; vérifier encore les redirections et dates avant réécriture finale.
Commandes : inspection lecture seule par sed/rg ; aucun build, test navigateur, test d'URL ou simulation de panne exécuté.
Rendu 320 / 390 / 768 / 1024 / 1440 : non exécuté ; lecture mobile d'une fiche d'urgence, tableaux et CTA restent P3.
Metadata/JSON-LD : présence statique observée ; canonical, Article, Breadcrumb, FAQ, OG public et données structurées non validés en ligne.
Statut maximal prouvé : audit local et benchmark documenté.
Réserve publication / incident : aucun secret, log client, ticket fournisseur, backup, restauration, DNS, production, commit, push ou déploiement manipulé.
```

## Conclusion opérationnelle

Ce guide est déjà une base de haute confiance : il protège les preuves, interdit les restaurations aveugles, distingue panne et cyber, donne des messages clients honnêtes et exige une validation métier. Il doit maintenant devenir une fiche réflexe utilisable sous stress. La priorité n'est pas d'ajouter davantage de théorie, mais de mettre au premier plan la chronologie, l'arbre DNS/CDN/hébergement/application/DB/paiement, les critères d'escalade, RTO/RPO/SLA, le coût d'arrêt et le journal de reprise.

La position professionnelle à maintenir est nette : observer et coordonner sans geste destructeur, appeler le propriétaire de la couche concernée, préserver les preuves dès qu'un déclencheur cyber existe, restaurer seulement une source saine et déclarer le retour uniquement après tests métier. Cette prudence est plus utile à un dirigeant qu'une promesse de réparation rapide ou une notification automatique aux autorités.
