# Audit approfondi — `securite-saas-b2b`

Date : 24 juillet 2026

Auditeur concurrentiel : Codex, lot benchmark international

Snapshot du guide : `src/app/guides/securite-saas-b2b/page.tsx`, SHA-256 `dbefc919707eab11989a79c3b7afe033dde6a539d05acb2aebdda08dee197661`

Périmètre : audit éditorial, factuel et décisionnel uniquement. Aucune modification de la page publique, du registre des guides, des manifestes ou de la documentation partagée n’a été réalisée dans ce lot.

## 1. Verdict exécutif

```text
Lecteur exact : dirigeant d’un SaaS B2B dont une vente se bloque sur le questionnaire sécurité d’un grand compte.
Question réelle : que dois-je pouvoir prouver avant de signer, et quand faut-il reconnaître un écart ou suspendre la vente ?
Décision attendue : signer avec des preuves, faire accepter un plan contractuel daté, ou suspendre jusqu’au diagnostic et à la correction.
Réponse actuelle en une phrase : ne cochez jamais « oui » par réflexe ; pour chaque demande, dites ce qui existe, qui le possède, quand cela a été testé et ce qui manque.
Défaut qui coûte le plus de valeur : le dossier de preuve est très bien expliqué, mais il ne permet pas encore de prioriser économiquement les corrections ni de comparer une démarche ciblée, un accompagnement continu et une certification.
Niveau actuel : A-
Priorité : haute pour une cible SaaS vendant aux entreprises
Statut : audité / à enrichir sur le risque, les objectifs de reprise, le développement sécurisé, l’économie et les niveaux d’assurance
```

Le guide possède déjà une qualité rare : il autorise explicitement le dirigeant à ne pas signer. Il ne transforme ni le cloud, ni un questionnaire rempli, ni OWASP en certificat de sécurité. La distinction « prouvé / planifié / bloquant » est compréhensible, honnête et immédiatement applicable. Les huit familles couvrent correctement les accès, les données, la restauration, les journaux, le développement, les incidents, les sous-traitants et la continuité.

Il reste néanmoins cinq écarts importants avant de pouvoir revendiquer la meilleure réponse francophone :

1. le risque n’est pas encore hiérarchisé par actif, scénario, vraisemblance, impact et mesure compensatoire ;
2. la sauvegarde est bien distinguée de la restauration, mais les objectifs RPO et RTO ne sont ni définis, ni calculés, ni confrontés à une validation métier ;
3. la partie développement ne descend pas assez dans le cycle des dépendances, secrets, vulnérabilités, corrections et contre-tests ;
4. le lecteur ne sait pas comparer dossier ciblé, service de sécurité continu, attestation SOC 2 et certification ISO/IEC 27001 sans les confondre ;
5. aucune économie de décision ne relie temps interne, effort de correction, coût complet à 36 mois et valeur réelle d’une vente.

La position professionnelle à assumer est la suivante :

> Pour une première vente entreprise, nous préférons vingt preuves récentes et limitées à cent réponses rassurantes mais invérifiables. Nous déconseillons de lancer une certification uniquement parce qu’un prospect a écrit « ISO 27001 ? » dans un tableur : il faut d’abord vérifier si elle constitue une condition contractuelle, si un plan accepté suffit et si les contrôles techniques critiques fonctionnent réellement. En revanche, une restauration jamais testée, des administrateurs inconnus ou une séparation entre clients non démontrée justifient de retarder la signature, même si la vente est importante.

### Score avant correction

| Axe         | Note /10 | Preuve localisable                                                                    | Manque décisif                                                                                  |
| ----------- | -------: | ------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| Intention   |       10 | La vente bloquée et le lecteur dirigeant sont nommés dès l’ouverture                  | Aucun                                                                                           |
| Décision    |       10 | Signer, contractualiser un plan ou suspendre sont trois sorties réellement distinctes | Le coût et la priorité des corrections ne sont pas arbitrés                                     |
| Pédagogie   |        9 | Huit fiches, exemple Nordexia, registre et vocabulaire courant                        | RPO, RTO, assurance et niveaux de preuve restent à expliquer                                    |
| Profondeur  |        8 | Accès, données, sauvegardes, logs, développement, incident, tiers et sortie           | Menaces, clés, secrets, dépendances, vulnérabilités, tests d’isolation et exercices à renforcer |
| Preuve      |        8 | CNIL, ANSSI et OWASP, avec limites explicites                                         | Corpus surtout franco-européen ; absence de NIST, NCSC, CISA, CSA et preuve économique          |
| Comparaison |        6 | Trois statuts d’exigence et plusieurs natures de pièces                               | Pas de comparaison des démarches, des niveaux d’assurance ni de TCO                             |
| Originalité |        9 | Dossier transmissible, registre et option de suspension                               | Une carte de responsabilité cloud et une matrice de fraîcheur rendraient l’outil supérieur      |
| Style       |        9 | Ton humain, ferme, sans jargon décoratif ni peur artificielle                         | Quelques blocs gagneraient à partir d’un incident ou d’une décision chiffrée                    |
| Conversion  |        9 | Valeur autonome forte et CTA tardif, avec mauvais fit explicite                       | Pas encore de pont entre effort de sécurisation, exigences de l’acheteur et économie du contrat |
| SEO/produit |        8 | Intention distincte, FAQ, sources, schémas Article/Breadcrumb et maillage             | Champ lexical international, comparatif assurance/certification et artefact chiffré manquants   |

Total : **86/100**

Le guide est publiable et professionnel. Il ne franchit pas encore le seuil renforcé de 90/100, car les axes comparaison, profondeur économique et niveaux d’assurance sont incomplets. Son enjeu n’est pas d’ajouter une encyclopédie de la cybersécurité : il faut transformer les contrôles les plus décisifs en choix vérifiables et chiffrés.

## 2. Ce que le guide dit réellement

- **Réponse dans les 150 premiers mots :** oui. Le dirigeant reçoit immédiatement les trois réponses honnêtes : prouver, planifier avec acceptation, ou suspendre.
- **Progression :** attente de l’acheteur, cartographie minimale, huit familles de preuves, trois statuts, cas fictif de restauration, partage prudent, registre, décision puis accompagnement.
- **Verdict :** une affirmation sans pièce, propriétaire, date et test ne suffit pas.
- **Exemple présent :** Nordexia, cas explicitement fictif, montre pourquoi « le cloud gère nos sauvegardes » n’est pas une réponse suffisante.
- **Calcul présent :** aucun calcul économique, de capacité, de reprise ou de coût complet.
- **Comparaison présente :** exigence prouvée, exigence planifiée et exigence bloquante ; elle ne compare pas les voies de mise à niveau.
- **Sources :** CNIL, ANSSI et OWASP ; le périmètre et les limites sont correctement signalés.
- **Action autonome :** construire un registre exigence, fait, pièce, propriétaire, dernier test, écart et échéance.
- **CTA :** tardif, cohérent et limité à une relecture technique générale.
- **Élément faussement complet :** huit familles couvrent le terrain, mais ne démontrent pas que les contrôles les plus risqués sont efficaces. Un classeur rempli peut rester faux, périmé ou hors périmètre.

La future version doit préserver sa limite. Elle ne doit pas devenir « tout ce qu’il faut savoir sur la sécurité d’un SaaS ». Elle doit rester « comment prendre une décision de vente honnête à partir de preuves proportionnées ».

## 3. Benchmark France et international

Requêtes, marchés et date :

- France : « questionnaire sécurité SaaS B2B », « preuves sécurité avant vente grand compte », « audit sécurité SaaS » ;
- États-Unis : « SaaS security questionnaire enterprise buyer », « secure by demand SaaS », « SOC 2 vs security evidence » ;
- Royaume-Uni : « SaaS shared responsibility security evidence », « cloud supplier security questionnaire » ;
- Australie : « Essential Eight assessment evidence backups access » ;
- recherche effectuée le 24 juillet 2026 ; les résultats décrivent un paysage éditorial observé, pas un classement Google stable.

### Saturation

Les contenus commerciaux français et anglophones savent lister les thèmes d’un questionnaire. Vanta, Drata et Sprinto expliquent également comment centraliser les réponses, les politiques et les attestations. Les sources publiques internationales apportent toutefois ce que les comparatifs commerciaux omettent souvent :

- NIST CSF 2.0 organise la gouvernance et les résultats de gestion du risque sans imposer une technologie ;
- le NCSC britannique rend visible le partage de responsabilité entre éditeur, cloud et client ;
- CISA demande aux fournisseurs de prendre davantage la responsabilité des résultats de sécurité et recommande, dans son guide d’achat, des journaux utiles et des informations sur les dépendances ;
- l’ACSC australien distingue une déclaration ou une politique d’une preuve d’efficacité observée ;
- CSA CAIQ donne un langage standard de questionnaire cloud et distingue auto-évaluation et certification ;
- OWASP ASVS 5.0.0 fournit une base testable pour la sécurité applicative, pas une conformité globale.

| Ressource et URL directe                                                                                                                                                                                                                          | Marché                        | Réponse utile                                                                                                          | Preuve, outil ou exemple                                       | Limite ou conflit d’intérêt                                                          | Apport à adapter                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- | ---------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------- |
| [CNIL — Guide de la sécurité des données personnelles](https://www.cnil.fr/fr/guide-de-la-securite-des-donnees-personnelles)                                                                                                                      | France / autorité             | Mesures organisationnelles et techniques proportionnées                                                                | Fiches sur accès, habilitations, sauvegardes et sous-traitants | Ne vaut ni audit de SaaS complet ni certification                                    | Conserver le socle et relier chaque fiche à un scénario métier                                              |
| [ANSSI — Architecture d’un système de journalisation](https://cyber.gouv.fr/sites/default/files/2022/01/anssi-guide-recommandations_securite_architecture_systeme_journalisation.pdf)                                                             | France / autorité             | Journaliser selon les besoins, protéger, conserver et exploiter les traces                                             | Recommandations techniques détaillées                          | Guide plus technique que la cible dirigeant                                          | Traduire en événements critiques, propriétaire, alerte testée et durée justifiée                            |
| [NIST — Cybersecurity Framework 2.0](https://www.nist.gov/publications/nist-cybersecurity-framework-csf-20)                                                                                                                                       | États-Unis / public           | Gouverner, identifier, protéger, détecter, répondre et rétablir selon le risque                                        | Taxonomie de résultats et profils                              | Ne prescrit pas l’implémentation                                                     | Ajouter profil actuel, profil cible, priorité et responsable                                                |
| [NIST — Secure Software Development Framework](https://csrc.nist.gov/pubs/sp/800/218/final)                                                                                                                                                       | États-Unis / public           | Intégrer des pratiques de développement sécurisé au cycle existant                                                     | Ensemble de pratiques de haut niveau                           | Ne remplace pas les tests techniques propres au produit                              | Détailler dépendances, secrets, vulnérabilités, correction et prévention de récidive                        |
| [CISA — Secure by Demand Guide](https://www.cisa.gov/sites/default/files/2024-08/SecureByDemandGuide_080624_508c.pdf)                                                                                                                             | États-Unis / public           | Aide l’acheteur à exiger des fonctions et preuves de sécurité utiles                                                   | Journaux, MFA, vulnérabilités, dépendances et transparence     | Contexte américain ; certaines recommandations dépassent une petite vente française  | Ajouter une fiche « ce que l’acheteur peut légitimement demander » sans en faire une obligation universelle |
| [NCSC — Cloud security shared responsibility model](https://www.ncsc.gov.uk/collection/cloud/understanding-cloud-services/cloud-security-shared-responsibility-model)                                                                             | Royaume-Uni / public          | La responsabilité varie selon IaaS, PaaS, SaaS et le service réellement choisi                                         | Tableau de répartition des composants                          | Le contrat et l’architecture réels priment                                           | Créer une matrice fournisseur cloud / éditeur SaaS / client                                                 |
| [ACSC — Essential Eight assessment process](https://www.cyber.gov.au/business-government/asds-cyber-security-frameworks/essential-eight/essential-eight-assessment-process-guide)                                                                 | Australie / public            | Évalue l’implémentation et l’efficacité ; une politique ou une déclaration verbale est une preuve faible               | Plans de test et exemples de preuves                           | Essential Eight n’est pas un référentiel complet de SaaS                             | Classer les preuves par force et exiger un test observé sur les contrôles critiques                         |
| [CSA — CAIQ v4.1](https://cloudsecurityalliance.org/artifacts/star-level-1-security-questionnaire-caiq-v4-1)                                                                                                                                      | International / association   | Questionnaire standard pour documenter les contrôles IaaS, PaaS et SaaS                                                | Auto-évaluation structurée                                     | Une CAIQ remplie n’est pas une certification                                         | Proposer CAIQ-Lite comme vocabulaire de départ, sans copier 138 questions dans le guide                     |
| [OWASP — ASVS 5.0.0](https://owasp.org/www-project-application-security-verification-standard/)                                                                                                                                                   | International / fondation     | Exigences testables pour la sécurité des applications web et les achats                                                | Identifiants de contrôles et niveaux                           | Ne certifie pas le produit et ne couvre pas toute la gouvernance                     | Exiger version, périmètre, exigences retenues, résultat, date et contre-test                                |
| [ISO — ISO/IEC 27001:2022](https://www.iso.org/standard/27001)                                                                                                                                                                                    | International / normalisation | Exigences pour un système de management de la sécurité adapté au risque                                                | Référentiel certifiable                                        | Une certification ne prouve pas chaque contrôle technique d’un produit               | Comparer gouvernance certifiée et preuve technique, sans les opposer                                        |
| [AICPA — Guide officiel SOC 2](https://www.aicpa-cima.com/cpe-learning/publication/soc-2-reporting-on-an-examination-of-controls-at-a-service-organization-relevant-to-security-availability-processing-integrity-confidentiality-or-privacy-OPL) | États-Unis / profession       | Examen de contrôles pertinents pour la sécurité, disponibilité, intégrité de traitement, confidentialité ou vie privée | Description du système, critères et rapport d’auditeur         | Le lecteur doit examiner périmètre, période, exceptions et contrôles complémentaires | Expliquer le rapport et ses limites au lieu de réduire SOC 2 à un logo                                      |
| [Vanta — Security questionnaires](https://www.vanta.com/collection/trust/security-questionnaires)                                                                                                                                                 | États-Unis / éditeur          | Centralisation des réponses, politiques, continuité et attestations                                                    | Taxonomie et workflow                                          | Vanta vend l’automatisation de conformité                                            | Reprendre le principe de bibliothèque vivante, pas l’idée qu’un outil crée la sécurité                      |
| [Sprinto — Security questionnaire](https://sprinto.com/blog/security-questionnaire/)                                                                                                                                                              | International / éditeur       | Couvre gouvernance, données, accès, vulnérabilités, continuité et conformité                                           | Checklist lisible                                              | Contenu commercial orienté plateforme                                                | Ajouter le cycle de réutilisation et de fraîcheur des réponses                                              |

### Lecture concurrentielle

Le guide Hagnéré Code dépasse déjà les comparateurs génériques sur trois points : il interdit la fausse réponse, donne une décision de suspension et protège les pièces sensibles. Les acteurs internationaux le dépassent encore sur :

- le langage standardisé d’un questionnaire ;
- la force d’une preuve ;
- le partage de responsabilité ;
- le lien entre gestion du risque et programme de sécurité ;
- les niveaux d’assurance formelle ;
- la mise à jour continue des réponses.

La meilleure différenciation n’est donc pas « plus de contrôles ». C’est une chaîne complète :

```text
exigence de l’acheteur → actif et scénario de risque → contrôle → preuve datée → test d’efficacité → écart → décision commerciale et contractuelle
```

## 4. Matrice de gain d’information

| Question décisive                                     | Réponse dominante du marché                 | Apport international                                   | Couverture actuelle | Manque                                                      | Réponse supérieure à produire                                                                  |
| ----------------------------------------------------- | ------------------------------------------- | ------------------------------------------------------ | ------------------- | ----------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| Que cherche réellement l’acheteur ?                   | Une liste de cases et de certifications     | Risque, transparence, responsabilités et assurance     | Très bonne          | Niveau d’assurance attendu                                  | Demander exigence, risque couvert, preuve acceptée et caractère bloquant                       |
| Que protège le SaaS ?                                 | Données et infrastructure                   | Services, utilisateurs, dépendances et chaîne client   | Bonne               | Actifs critiques et scénarios de menace                     | Carte actif, événement redouté, impact, propriétaire et mesure                                 |
| « Le cloud s’en occupe » suffit-il ?                  | Réponse souvent ambiguë                     | Responsabilité partagée selon le service               | Partielle           | Matrice contractuelle fournisseur/éditeur/client            | Attribuer chaque contrôle et vérifier le contrat, la configuration et la preuve                |
| Qu’est-ce qu’une preuve forte ?                       | Politique, capture ou attestation           | Observation, test, échantillon, résultat et fraîcheur  | Bonne               | Échelle de confiance et date d’expiration                   | Déclaration < document < configuration < test observé < attestation indépendante, selon le cas |
| Une sauvegarde suffit-elle ?                          | Oui si automatique                          | Objectifs de reprise et restauration validée           | Bonne               | RPO/RTO, périmètre, validation métier et dépendances        | Chronométrer la perte de données et le retour du service réellement utilisable                 |
| Comment prouver les accès ?                           | MFA et rôles                                | Cycle de vie, moindre privilège et revue               | Bonne               | Comptes de service, accès d’urgence, sessions et exceptions | Inventaire complet, propriétaire, dernière utilisation, justification et retrait               |
| Comment prouver la séparation des clients ?           | Déclaration d’architecture                  | Exigences et tests applicatifs                         | Partielle           | Test d’autorisation inter-tenant et contre-test             | Décrire scénario, jeu de test, résultat, correctif et date                                     |
| Comment traiter dépendances et vulnérabilités ?       | Scanner puis corriger                       | SSDF, provenance, politique de divulgation et récidive | Partielle           | Délai par gravité, exception, SBOM et preuve de correction  | Registre vulnérabilité, décision, échéance, déploiement et retest                              |
| ISO 27001 ou SOC 2 prouvent-ils que le SaaS est sûr ? | Oui, comme signal de confiance              | Assurance de gouvernance ou de contrôles définis       | Faible              | Comparatif scope, période, auditeur et limites              | Expliquer ce que chaque rapport couvre et ce qu’il ne démontre pas                             |
| Quand faut-il certifier ?                             | Dès que les grands comptes le demandent     | Décision selon marché, risque et programme continu     | Faible              | Coût complet et condition commerciale                       | Vérifier exigence contractuelle, réutilisation, capacité interne et horizon                    |
| Comment ne pas exposer de secrets ?                   | Envoyer le maximum pour rassurer            | Divulgation graduée et accès contrôlé                  | Très bonne          | Durée d’accès, destinataire, journal et révocation          | Résumé public, NDA si nécessaire, pièce expurgée, salle contrôlée et date d’expiration         |
| Comment garder le dossier vrai ?                      | Le mettre à jour avant chaque questionnaire | Bibliothèque de contrôles et surveillance continue     | Partielle           | Déclencheurs et péremption                                  | Propriétaire, périodicité, événement de revue et réponse automatiquement marquée périmée       |
| Comment décider de signer ?                           | Cocher le maximum                           | Risque accepté, compensé, transféré ou refusé          | Très bonne          | Valeur économique et autorité d’acceptation                 | Décision de direction documentée, coût, limite contractuelle et condition de révision          |

## 5. Faits, fraîcheur et contradictions

Sources primaires revérifiées le 24 juillet 2026.

| Affirmation du guide                                                                                  | Verdict                                     | Source primaire actuelle                                                                                                                                                                                                                          | Périmètre et fraîcheur                                                       | Correction ou enrichissement                                                                 |
| ----------------------------------------------------------------------------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| Des identifiants individuels et des habilitations maîtrisées sont nécessaires                         | Confirmé comme recommandation proportionnée | [CNIL — Authentifier](https://www.cnil.fr/securite-authentifier-les-utilisateurs) et [habilitations](https://www.cnil.fr/fr/securite-gerer-les-habilitations)                                                                                     | Mesures à adapter au risque                                                  | Ajouter comptes de service, accès d’urgence et contrôle de retrait                           |
| Une sauvegarde ne vaut pas preuve de reprise si la restauration n’a pas été testée                    | Confirmé                                    | [CNIL — Sauvegarder](https://cnil.fr/fr/securite-sauvegarder) et [NIST CSF 2.0](https://www.nist.gov/publications/nist-cybersecurity-framework-csf-20)                                                                                            | Fréquence et objectifs dépendent du métier                                   | Définir RPO/RTO, point de départ du chronomètre, validation métier et dépendances            |
| La journalisation doit être définie selon les besoins et réellement exploitée                         | Confirmé                                    | [ANSSI — journalisation](https://cyber.gouv.fr/sites/default/files/2022/01/anssi-guide-recommandations_securite_architecture_systeme_journalisation.pdf) et [NCSC — logging](https://www.ncsc.gov.uk/blog-post/what-exactly-should-we-be-logging) | Le contenu et la conservation doivent rester proportionnés                   | Ajouter tests d’alerte, responsable, disponibilité des journaux et procédure de consultation |
| OWASP ASVS sert de base d’exigences et de vérification, pas de certification globale                  | Confirmé                                    | [OWASP ASVS](https://owasp.org/www-project-application-security-verification-standard/)                                                                                                                                                           | Version stable 5.0.0 annoncée le 30 mai 2025                                 | Afficher version, niveau ou exigences retenues, périmètre et date du test                    |
| Le délai de 72 heures ne s’applique pas indistinctement à tout incident                               | Confirmé                                    | [CNIL — notifier une violation](https://www.cnil.fr/fr/services-en-ligne/notifier-une-violation-de-donnees-personnelles)                                                                                                                          | Concerne les violations de données présentant le niveau de risque requis     | Conserver la réserve ; distinguer détection, qualification, notification et communication    |
| Le fournisseur cloud ne prend pas toute la sécurité à la charge de l’éditeur                          | Confirmé                                    | [NCSC — responsabilité partagée](https://www.ncsc.gov.uk/collection/cloud/understanding-cloud-services/cloud-security-shared-responsibility-model)                                                                                                | La répartition dépend du service et du contrat                               | Ajouter une matrice de responsabilité propre à l’architecture                                |
| Une politique ou une déclaration ne suffit pas à prouver l’efficacité d’un contrôle                   | Confirmé                                    | [ACSC — assessment process](https://www.cyber.gov.au/business-government/asds-cyber-security-frameworks/essential-eight/essential-eight-assessment-process-guide)                                                                                 | Essential Eight n’est pas exhaustif pour un SaaS                             | Employer son échelle de force de preuve, sans prétendre être évalué Essential Eight          |
| ISO/IEC 27001 porte sur un système de management du risque                                            | Confirmé                                    | [ISO — ISO/IEC 27001:2022](https://www.iso.org/standard/27001)                                                                                                                                                                                    | Certification et périmètre doivent être vérifiés                             | Ne jamais la présenter comme test de toutes les fonctions du SaaS                            |
| Un rapport SOC 2 porte sur la description et les contrôles d’un système au regard de critères définis | Confirmé                                    | [AICPA — guide SOC 2](https://www.aicpa-cima.com/cpe-learning/publication/soc-2-reporting-on-an-examination-of-controls-at-a-service-organization-relevant-to-security-availability-processing-integrity-confidentiality-or-privacy-OPL)          | Périmètre, période, critères, exceptions et contrôles complémentaires à lire | Ajouter une méthode de lecture plutôt qu’une case « SOC 2 : oui/non »                        |

### Contradictions ou tensions

- Aucune erreur factuelle majeure n’a été identifiée.
- Le lien OWASP pointe désormais vers ASVS 5.0.0 ; le guide devrait nommer la version retenue afin d’éviter une référence flottante.
- « Huit familles de preuves » est une excellente architecture éditoriale, pas un référentiel exhaustif de conformité.
- « Existe et est prouvable » devrait aussi préciser la fraîcheur, le périmètre, le résultat et la personne qui a produit ou observé la preuve.
- Un plan accepté par le client ne supprime ni une obligation légale, ni un risque technique, ni la responsabilité de l’éditeur.
- Une certification peut accélérer certains achats, mais elle ne doit pas servir à masquer une restauration, une séparation client ou une gestion des accès défaillante.

### Faits à retirer plutôt qu’à ajouter

- Ne pas inventer de fréquence universelle de test d’intrusion, de rotation ou de sauvegarde.
- Ne pas affirmer qu’un SaaS B2B doit obligatoirement posséder ISO 27001 ou SOC 2.
- Ne pas employer « conforme OWASP », « certifié ANSSI » ou « cloud sécurisé » sans périmètre et preuve correspondants.
- Ne pas reprendre les prix ou délais commerciaux publiés par les plateformes de conformité comme références de marché.
- Ne pas présenter un score de sécurité agrégé comme vérité : une faiblesse critique ne se compense pas par dix cases secondaires.
- Ne pas promettre qu’une pièce, un rapport ou un questionnaire empêche un incident.

## 6. Cinq scénarios et calculs à construire

Tous les montants sont **illustratifs, hors taxes et non issus d’un client**. Les durées, taux et probabilités doivent être remplacés par les données de l’entreprise. Ces scénarios servent à montrer une méthode de décision, pas à publier des normes ou des prix de marché.

### Scénario 1 — Une restauration respecte-t-elle réellement le RPO et le RTO ?

Hypothèses fictives :

- incident à 14 h 00 ;
- dernière copie cohérente à 11 h 30 ;
- restauration lancée à 14 h 20 ;
- service techniquement accessible à 17 h 05 ;
- validation des fonctions métier à 17 h 45 ;
- RPO annoncé : 4 heures ;
- RTO annoncé : 3 heures à compter du lancement de la reprise.

```text
Perte de données observée = 14 h 00 - 11 h 30 = 2 h 30
Marge sur le RPO = 4 h 00 - 2 h 30 = 1 h 30 : objectif atteint dans ce test
Rétablissement technique = 17 h 05 - 14 h 20 = 2 h 45 : inférieur à 3 h
Rétablissement métier = 17 h 45 - 14 h 20 = 3 h 25 : dépassement de 25 minutes
```

La conclusion dépend de la définition contractuelle du RTO. Si « rétabli » signifie seulement que le serveur répond, le test passe ; si cela signifie que les utilisateurs peuvent reprendre leur travail, il échoue. Le guide doit imposer le point de départ, le périmètre, les dépendances et le validateur métier.

**Sensibilité :** avec une validation métier à 17 h 15, le RTO de 3 heures serait atteint avec 5 minutes de marge. Avec une copie cohérente à 9 h 30, le RPO de 4 heures serait dépassé de 30 minutes.

**Contrôle inverse :** un test réussi une fois ne prouve pas que tous les jeux de données, régions, dépendances ou scénarios de panne sont couverts.

### Scénario 2 — Combien coûte réellement une revue des accès ?

Hypothèses fictives :

- 68 comptes nominatifs ;
- 8 comptes de service ;
- 4 minutes de revue standard par identité ;
- 11 exceptions nécessitant 15 minutes chacune ;
- 1 h 30 de synthèse et validation managériale ;
- temps valorisé à 60 €/h.

```text
Identités à revoir = 68 + 8 = 76
Revue standard = 76 × 4 = 304 minutes
Exceptions = 11 × 15 = 165 minutes
Synthèse = 90 minutes
Total = 304 + 165 + 90 = 559 minutes = 9 h 19
Capacité valorisée = 559 / 60 × 60 = 559 €
```

**Sensibilité :**

- à 2 minutes par identité : 407 minutes, soit 6 h 47 et 407 € ;
- à 8 minutes par identité : 863 minutes, soit 14 h 23 et 863 €.

**Décision :** la revue doit avoir une date, un propriétaire et une capacité réservée ; elle ne doit pas être promise « régulièrement » sans calendrier.

**Contrôle inverse :** une liste courte n’est pas nécessairement saine. Un seul compte administrateur partagé ou un secret de service sans propriétaire peut peser davantage que cinquante comptes correctement gérés.

### Scénario 3 — Le plan de correction tient-il avant la date de vente ?

Hypothèses fictives :

- 4 écarts critiques à 12 heures chacun ;
- 6 écarts élevés à 8 heures chacun ;
- 8 écarts modérés à 3 heures chacun ;
- 25 % de temps supplémentaire pour produire les preuves et contre-tester ;
- capacité réellement disponible : 20 heures par semaine.

```text
Correction initiale = 4 × 12 + 6 × 8 + 8 × 3
Correction initiale = 48 + 48 + 24 = 120 heures
Avec preuves et retests = 120 × 1,25 = 150 heures
Délai à 20 h/semaine = 150 / 20 = 7,5 semaines
```

**Sensibilité :**

- capacité de 12 h/semaine : 12,5 semaines ;
- capacité de 30 h/semaine : 5 semaines.

**Décision :** une signature dans quatre semaines n’est pas compatible avec la fermeture complète de ce backlog à capacité constante. Il faut réduire le périmètre, mobiliser de la capacité, accepter contractuellement certains écarts non bloquants ou reporter.

**Contrôle inverse :** des heures consommées ne prouvent pas la réduction du risque. Chaque fermeture doit renvoyer à une pièce, un test et, si nécessaire, un contre-test indépendant.

### Scénario 4 — Comparer trois démarches sur 36 mois

Périmètre commun fictif : registre vivant, revues d’accès trimestrielles, suivi des vulnérabilités, un test d’intrusion annuel, un exercice d’incident annuel, dossier acheteur et transition de sortie. Les montants ne sont pas des prix de marché.

| Poste sur 36 mois                      | Démarche ciblée interne | Service managé | Programme ISO/IEC 27001 |
| -------------------------------------- | ----------------------: | -------------: | ----------------------: |
| Diagnostic / cadrage                   |                12 000 € |       18 000 € |                15 000 € |
| Corrections initiales                  |                35 000 € |       25 000 € |                45 000 € |
| Mise en place du système de management |                       — |              — |                35 000 € |
| Audit initial / surveillance           |                       — |              — |                44 000 € |
| Outils ou service récurrent            |                25 200 € |      144 000 € |                25 200 € |
| Temps interne valorisé                 |                40 320 € |       15 120 € |                60 480 € |
| Tests d’intrusion                      |                36 000 € |       30 000 € |                36 000 € |
| Exercices                              |                12 000 € |         inclus |                12 000 € |
| Transition de sortie                   |                 5 000 € |        6 000 € |                 5 000 € |
| **TCO 36 mois**                        |           **165 520 €** |  **238 120 €** |           **277 680 €** |

Formules principales :

```text
Démarche ciblée = 12 000 + 35 000 + 700 × 36 + 16 h × 70 × 36 + 12 000 × 3 + 4 000 × 3 + 5 000
Service managé = 18 000 + 25 000 + 4 000 × 36 + 6 h × 70 × 36 + 10 000 × 3 + 6 000
Programme ISO = 15 000 + 45 000 + 35 000 + 20 000 + 12 000 × 2 + 700 × 36 + 24 h × 70 × 36 + 12 000 × 3 + 4 000 × 3 + 5 000
```

**Sensibilité au coût horaire interne :**

| Taux interne | Démarche ciblée | Service managé | Programme ISO |
| -----------: | --------------: | -------------: | ------------: |
|       50 €/h |       154 000 € |      233 800 € |     260 400 € |
|       70 €/h |       165 520 € |      238 120 € |     277 680 € |
|       90 €/h |       177 040 € |      242 440 € |     294 960 € |

**Décision :** la démarche ciblée gagne sur le coût dans cette hypothèse ; le service managé peut gagner si l’équipe ne possède pas la capacité d’exploitation ; la certification peut gagner si plusieurs acheteurs l’exigent réellement ou si l’entreprise a besoin du système de management au-delà d’une vente.

**Contrôle inverse :** une certification de management ne remplace ni un test d’isolation entre clients, ni une restauration, ni la correction d’une vulnérabilité produit.

### Scénario 5 — Une correction demandée par un prospect est-elle économiquement défendable ?

Hypothèses fictives :

- contrat annuel : 80 000 € ;
- marge contributive : 70 % ;
- durée analysée : 3 ans ;
- mise à niveau initiale : 45 000 € ;
- exploitation de sécurité supplémentaire : 18 000 €/an ;
- probabilité de signature estimée à 15 % sans mise à niveau et 55 % avec celle-ci.

```text
Marge contributive du contrat sur 3 ans = 80 000 × 70 % × 3 = 168 000 €
Coût sécurité sur 3 ans = 45 000 + 18 000 × 3 = 99 000 €
Contribution après ce coût si le contrat est signé = 168 000 - 99 000 = 69 000 €
Gain de probabilité estimé = 55 % - 15 % = 40 points
Valeur contributive incrémentale attendue pour un prospect = 168 000 × 40 % = 67 200 €
Solde attendu pour un prospect = 67 200 - 99 000 = -31 800 €
Solde attendu si la même mise à niveau soutient deux prospects comparables = 2 × 67 200 - 99 000 = 35 400 €
```

Le seuil de hausse de probabilité nécessaire pour couvrir 99 000 € avec un seul contrat est `99 000 / 168 000 = 58,93 points`. Cette estimation n’est pas une vérité statistique : elle force la direction à distinguer une capacité réutilisable d’une correction sur mesure pour un seul acheteur.

**Sensibilité :** avec une hausse de probabilité de 20 points, la valeur attendue n’est que de 33 600 € ; à 60 points, elle atteint 100 800 €.

**Contrôle inverse :** ne jamais réduire la décision à la seule valeur commerciale. Une obligation légale, un risque grave pour les clients ou un contrôle critique doit être traité même si un contrat particulier ne le rentabilise pas.

### Cadre commun des calculs

```text
Horizon : durée contractuelle ou 36 mois pour le programme.
Inclus : construction, exploitation, temps interne, tests, exercices, preuves et sortie.
Exclus : taxes, sinistre hypothétique non modélisé, valeur de marque et promesse de vente.
Variable qui fait basculer : exigence réelle des acheteurs, réutilisation, capacité interne et criticité.
Contrôle inverse : recalculer le cas où le prospect accepte un plan limité ou où la certification n’est pas demandée.
```

## 7. Comparaison et position professionnelle

```text
Options réellement comparables : dossier ciblé interne ; appui ponctuel d’experts ; service de sécurité managé ; programme de conformité/certification.
Périmètre commun : actifs, accès, données, sauvegarde, journaux, développement, incident, tiers, continuité, preuves et sortie.
Horizon commun : 36 mois pour les démarches durables ; date de signature pour le plan immédiat.
Option la moins chère dans le cas fréquent : dossier ciblé, corrections prioritaires et exploitation interne lorsque l’équipe possède la compétence et la capacité.
Option la moins risquée pour une petite équipe sans responsable : service managé avec responsabilités, preuves, contre-tests et réversibilité explicites.
Option la plus utile quand plusieurs acheteurs l’exigent : programme ISO/IEC 27001 ou attestation adaptée, après vérification du périmètre attendu.
Position Hagnéré Code : construire d’abord les contrôles et preuves qui protègent réellement les clients ; ajouter l’assurance formelle quand le marché ou la gouvernance la justifie.
Cas où l’option opposée gagne : secteur réglementé, appel d’offres formel, client imposant une certification valide ou organisation déjà mûre souhaitant structurer tout son système.
Signal de révision : nouvelle donnée sensible, nouveau pays, changement d’hébergeur, nouvelle dépendance critique, incident, nouvelle exigence contractuelle ou croissance des accès.
Ce que nous déconseillons même si nous pourrions le vendre : cocher avant de tester, acheter un outil de conformité sans propriétaire, ou lancer une certification pour masquer des contrôles techniques inconnus.
```

Il faut aussi expliquer clairement les niveaux d’assurance :

| Élément                     | Ce qu’il peut apporter                                       | Ce qu’il ne prouve pas seul                                 | Question avant de l’exiger                                          |
| --------------------------- | ------------------------------------------------------------ | ----------------------------------------------------------- | ------------------------------------------------------------------- |
| Registre interne            | Responsabilités, preuves et écarts                           | Indépendance ou exhaustivité                                | Qui le maintient et comment les pièces sont-elles testées ?         |
| Test d’intrusion            | Défauts observés sur un périmètre et une date                | Gouvernance, continuité ou absence de toute vulnérabilité   | Quel périmètre, quelle méthode, quels retests ?                     |
| CAIQ / auto-évaluation      | Langage standard et transparence cloud                       | Certification ou efficacité de tous les contrôles           | Version, périmètre, pièces et date de mise à jour ?                 |
| Rapport SOC 2               | Opinion d’un auditeur sur des critères et une période donnés | Sécurité parfaite ou couverture de fonctions hors périmètre | Type, période, exceptions, entité et services couverts ?            |
| Certification ISO/IEC 27001 | Système de management du risque dans un périmètre certifié   | Test exhaustif du code ou du produit                        | Organisme, périmètre, validité et attentes précises de l’acheteur ? |

## 8. Objections et cas limites

| Objection loyale                                          | Réponse prouvée                                                                      | Incertitude restante                                  | Conséquence                                                            |
| --------------------------------------------------------- | ------------------------------------------------------------------------------------ | ----------------------------------------------------- | ---------------------------------------------------------------------- |
| « Notre hébergeur est certifié »                          | La responsabilité reste partagée et dépend du service réellement utilisé             | Configuration et contrat                              | Cartographier fournisseur, éditeur et client                           |
| « Le questionnaire exige oui ou non »                     | Une réponse binaire peut masquer périmètre, exception et date                        | Tolérance de l’acheteur                               | Joindre commentaire, preuve et plan accepté                            |
| « Nous avons des sauvegardes automatiques »               | Cela ne démontre pas une restauration complète et chronométrée                       | Couverture et dépendances                             | Exécuter un test et faire valider le résultat métier                   |
| « Nous utilisons OWASP »                                  | ASVS fournit des exigences et une base de vérification                               | Version, périmètre et résultat                        | Citer les contrôles retenus et les tests                               |
| « ISO 27001 réglera tous les questionnaires »             | La norme structure le système de management                                          | Exigences propres des acheteurs et contrôles produit  | Vérifier le gain réel avant le programme                               |
| « Le client acceptera un plan après signature »           | Certains écarts peuvent être contractualisés                                         | Obligation légale ou criticité                        | Faire approuver l’écart par les personnes compétentes avant signature  |
| « Nous ne pouvons rien montrer pour ne pas nous exposer » | Une divulgation graduée et expurgée peut protéger les secrets                        | Niveau de preuve exigé                                | Résumé, NDA, accès limité, expiration et journal de consultation       |
| « Un pentest annuel suffit »                              | Il fournit une photographie utile d’un périmètre                                     | Changements entre tests et correction des dépendances | Ajouter cycle continu, délais, retest et surveillance                  |
| « Nous sommes trop petits pour formaliser »               | Le registre peut rester court et proportionné                                        | Risque et exigences du marché                         | Commencer par actifs critiques, administrateurs, reprise et incident   |
| « La vente finance la correction »                        | C’est parfois rationnel si le plan est accepté et le risque temporaire maîtrisé      | Trésorerie, probabilité et responsabilité             | Chiffrer, attribuer, dater et conserver l’option de suspendre          |
| « Le client demande les journaux complets »               | Les journaux peuvent contenir des données personnelles ou des informations sensibles | Besoin exact du client                                | Fournir le niveau utile, protéger l’accès et justifier la conservation |
| « Nous avons corrigé tous les écarts »                    | Une fermeture demande une preuve et parfois un contre-test                           | Qualité et indépendance du contrôle                   | Ne pas changer le statut tant que le résultat n’est pas vérifié        |

## 9. Plan de réécriture

| Ordre | Section proposée                                     | Question résolue                                | Preuve, scénario ou outil                           | Décision produite                           | Action éditoriale     |
| ----: | ---------------------------------------------------- | ----------------------------------------------- | --------------------------------------------------- | ------------------------------------------- | --------------------- |
|     1 | Le grand compte attend-il une preuve ou un label ?   | Que faut-il réellement fournir ?                | Ouverture actuelle + niveaux d’assurance            | Prouver, planifier ou suspendre             | Renforcer l’ouverture |
|     2 | Les quatre décisions que l’acheteur veut prendre     | Quel risque cherche-t-il à réduire ?            | Risque, responsabilité, reprise, incident           | Identifier les exigences bloquantes         | Créer                 |
|     3 | Cartographier actifs et responsabilités              | Que protège-t-on et qui en répond ?             | NIST CSF + NCSC shared responsibility               | Carte fournisseur/éditeur/client            | Enrichir              |
|     4 | Qualifier la force et la fraîcheur d’une preuve      | Une capture ou une politique suffit-elle ?      | Échelle inspirée de l’ACSC                          | Accepter, compléter ou retester             | Créer                 |
|     5 | Huit familles de preuves                             | Que faut-il examiner ?                          | Fiches actuelles                                    | Registre initial                            | Conserver             |
|     6 | Accès, comptes de service et séparation client       | Peut-on limiter et tester les privilèges ?      | Scénario 2 + ASVS                                   | Revue et test d’isolation                   | Approfondir           |
|     7 | Reprise réellement utilisable                        | Combien de données et de temps peut-on perdre ? | Scénario 1                                          | RPO/RTO définis et testés                   | Créer                 |
|     8 | Développement, dépendances et vulnérabilités         | Comment éviter, corriger et retester ?          | NIST SSDF, CISA, OWASP                              | Backlog de correction                       | Approfondir           |
|     9 | Incident et exercice                                 | L’équipe sait-elle agir sous pression ?         | Rôles, chronologie, test d’alerte, exercice         | Corriger la procédure                       | Enrichir              |
|    10 | Plan de correction réaliste                          | La date de vente est-elle tenable ?             | Scénario 3                                          | Réduire, renforcer, accepter ou reporter    | Créer                 |
|    11 | Dossier, audit, service ou certification             | Quelle démarche choisir ?                       | Scénario 4 + tableau assurance                      | Choix sur 36 mois                           | Créer                 |
|    12 | La vente finance-t-elle utilement la mise à niveau ? | L’effort est-il réutilisable et défendable ?    | Scénario 5                                          | Investir, limiter ou refuser                | Créer                 |
|    13 | Partager sans exposer                                | Quelles pièces transmettre et pendant combien ? | Divulgation graduée                                 | Dossier acheteur                            | Conserver et préciser |
|    14 | Registre vivant, fits et CTA                         | Comment garder les réponses vraies ?            | Propriétaire, date d’expiration, événement de revue | Maintenir ou demander une revue spécialisée | Enrichir              |

### Contrat des 150 premiers mots

- Nommer le dirigeant qui a une vente concrète bloquée.
- Dire ce que l’acheteur cherche : comprendre le risque et vérifier des contrôles, pas obtenir une promesse d’invulnérabilité.
- Répondre : preuve actuelle, plan accepté ou suspension.
- Donner la première action : sélectionner les cinq exigences potentiellement bloquantes et retrouver une pièce récente pour chacune.
- Promettre : huit fiches, force de preuve, RPO/RTO, plan de correction, niveaux d’assurance et TCO.
- Poser la limite : le guide ne vaut ni audit, ni test d’intrusion, ni certification, ni avis juridique ou sectoriel.

### À conserver

- L’ouverture sur la vente et la réponse immédiate.
- Les huit familles.
- Les trois statuts et la possibilité de suspendre.
- Le cas Nordexia, clairement fictif.
- Le registre autonome et les règles de partage prudent.
- Les réserves CNIL, ANSSI et OWASP.

### À réduire ou déplacer

- Éviter d’ajouter des acronymes avant la première décision.
- Regrouper les avertissements juridiques dans un encadré clairement situé.
- Ne pas transformer les nouvelles sources internationales en longue bibliographie dans le corps : citer la conséquence au bon endroit.
- Ne pas ajouter un score global de sécurité ; préférer blocages, risques et preuves.

## 10. Contre-audit et portes de correction

### P0 — bloquants avant de revendiquer une supériorité éditoriale

- [ ] Conserver explicitement la possibilité de suspendre la vente.
- [ ] Ne jamais présenter CAIQ, ASVS, SOC 2 ou ISO/IEC 27001 comme preuve absolue de sécurité.
- [ ] Définir RPO, RTO, point de départ, périmètre et validateur avant tout calcul.
- [ ] Étiqueter tous les montants, temps, probabilités et taux comme illustratifs et remplaçables.
- [ ] Faire recalculer indépendamment les cinq scénarios.
- [ ] Faire revoir les passages légaux ou sectoriels par le spécialiste compétent lorsque le cas l’exige.

### P1 — nécessaires pour viser 90/100

- [ ] Ajouter la matrice actif / événement redouté / impact / mesure / preuve.
- [ ] Ajouter le partage de responsabilité fournisseur cloud / éditeur / client.
- [ ] Ajouter une échelle de force et de fraîcheur des preuves.
- [ ] Ajouter le protocole de restauration chiffré et validé métier.
- [ ] Renforcer comptes de service, secrets, séparation client, dépendances, vulnérabilités et retests.
- [ ] Comparer dossier ciblé, service managé et assurance formelle sur un horizon commun.
- [ ] Ajouter le coût de capacité et le plan de correction avant signature.
- [ ] Donner l’opinion Hagnéré Code, le cas inverse et les signaux de révision.

### P2 — différenciation et finition

- [ ] Ajouter au registre les champs version, périmètre, force, date d’expiration et destinataire.
- [ ] Produire un modèle de matrice de responsabilité cloud.
- [ ] Produire un exemple de rapport de restauration expurgé et fictif.
- [ ] Ajouter un tableau de suivi des vulnérabilités avec exception et contre-test.
- [ ] Faire remplir le registre par un fondateur SaaS non spécialiste et noter temps, incompréhensions et décisions.
- [ ] Tester les tableaux et fiches à 320, 390, 768, 1 024 et 1 440 px.

### Score après correction

Non attribué. Aucun score futur ne doit être simulé avant réécriture, recalcul indépendant, contrôle des sources, test navigateur, revue sécurité et test par un lecteur dirigeant réel.

## 11. Preuve technique et visuelle à exiger après réécriture

```text
Page publique modifiée dans ce lot : non.
Hash avant et après audit attendu : identique.
Sources revérifiées : CNIL, ANSSI, OWASP ASVS 5.0.0, NIST CSF 2.0, NIST SSDF, CISA, NCSC, ACSC, CSA et ISO.
Calculs indépendants : restauration, revue des accès, capacité de correction, TCO 36 mois et économie de vente recalculés avec Node.js.
Liens : contrôle HTTP à rejouer après intégration ; une protection anti-bot ne prouve pas un lien mort.
SEO technique : canonical, robots, Article, BreadcrumbList, FAQ visible/JSON-LD, sitemap et maillage à recontrôler après modification.
Rendu : 320, 390, 768, 1 024 et 1 440 px, clair/sombre, tableaux, fiches, CTA, FAQ et sources.
Sécurité de l’artefact : aucun secret, jeton, architecture exploitable ou donnée client réelle dans les exemples.
Accessibilité : titres, liens explicites, tableaux, ordre de lecture, focus et alternative textuelle aux matrices.
Validation sécurité indépendante : absente à ce stade.
Validation lecteur humain réel : absente à ce stade.
Indexation Google : non prouvée par cet audit.
```

### Verdict final de l’audit

Le guide est déjà une réponse responsable et convertissante : il protège le dirigeant contre la tentation de promettre l’inexistant. Pour devenir la référence, il doit maintenant montrer comment hiérarchiser les risques, distinguer les niveaux d’assurance, vérifier la reprise et décider si l’effort demandé par un acheteur mérite un plan ciblé, un service continu ou un programme plus formel. La meilleure version ne sera pas celle qui contient le plus de contrôles ; ce sera celle qui permet à un dirigeant de prendre une décision difficile sans mentir au client ni se raconter d’histoire.
