# Dossier de recherche — sécurité d'un SaaS B2B avant une vente

> Les quatre passes sont terminées. Ce dossier ne constitue toujours ni un
> audit de sécurité ni une certification. Les preuves et limites ont été
> contre-auditées, puis le rendu a été contrôlé sous délégation éditoriale,
> sans test par un lecteur humain réel.

## Journal des quatre passes

Propriétaire éditorial unique : `/root`

| Passe                        | État                               | Date            | Responsable                 | Snapshot                                              | Blocages |
| ---------------------------- | ---------------------------------- | --------------- | --------------------------- | ----------------------------------------------------- | -------- |
| 1. Recherche                 | Terminée — porte validée           | 23 juillet 2026 | `/root/audit_service_gaps`  | `docs/research/manifests/securite-saas-b2b-p1.sha256` | Aucun    |
| 2. Rédaction et intégration  | Terminée — prête pour contre-audit | 23 juillet 2026 | `/root/p2_batch3_marketing` | `docs/research/manifests/securite-saas-b2b-p2.sha256` | Aucun    |
| 3. Contre-audit indépendant  | Terminée — porte validée           | 23 juillet 2026 | `/root/p2_batch3_apps`      | `docs/research/manifests/securite-saas-b2b-p3.sha256` | Aucun    |
| 4. Plume humaine et contrôle | Terminée — porte validée           | 23 juillet 2026 | `/root`                     | `docs/research/manifests/securite-saas-b2b-p4.sha256` | Aucun    |

## 1. Fiche d'identité

```text
Slug : securite-saas-b2b
Statut actuel : publiable — validation éditoriale déléguée
Requête principale : sécurité SaaS B2B
Moment du parcours : répondre à un acheteur avant signature
Lecteur précis : dirigeant d'un SaaS B2B dont un prospect entreprise demande des garanties sur les accès, les données, les sauvegardes, les incidents et les sous-traitants
Situation déclenchante : le service informatique d'un grand compte envoie un questionnaire avec SSO, MFA, sauvegardes testées, journaux, continuité et notification d'incident
Décision principale après lecture : signer avec des preuves existantes, signer avec un plan contractuel daté et accepté, ou suspendre la vente jusqu'à un audit ou une correction
Niveau de connaissance au départ : sait que le produit utilise un hébergeur et des mots de passe, mais ne dispose pas d'un dossier de preuves partagé
5 questions indispensables : quelles données et fonctions sont critiques ? qui a accès ? une restauration a-t-elle été testée ? un incident serait-il détecté et traité ? quelles dépendances et sous-traitants interviennent ?
3 objections ou craintes : « Notre cloud s'occupe de la sécurité » ; « Cocher OWASP prouve que nous sommes conformes » ; « Il faut promettre tout ce que le client demande pour signer »
Action utile sans contact commercial : remplir un registre exigence, réponse factuelle, pièce, propriétaire, dernier test, écart et échéance
CTA possible : faire relire le dossier avant de répondre à l'acheteur
Hors périmètre : certification, test d'intrusion, consultation juridique, conformité d'un secteur réglementé, réponse contractuelle sans accès ni audit
Date de la recherche : 23 juillet 2026
Responsable de la synthèse : /root/audit_service_gaps
```

## 2. Contrat de langage humain

- Phrase réelle : « Un grand compte veut signer, mais son informatique exige
  SSO, MFA, sauvegardes testées, journalisation et procédure d'incident.
  Qu'est-ce qui doit exister avant la vente ? »
- Réponse attendue : répondez avec des faits et des pièces ; une exigence
  absente peut parfois faire l'objet d'un plan accepté, mais une donnée critique
  inconnue, une restauration jamais testée ou un accès non maîtrisé peut
  justifier de suspendre la signature.
- Définition simple : un dossier sécurité rassemble ce que le SaaS protège,
  comment il le fait, qui en est responsable et quelle preuve récente permet de
  le vérifier.
- Mots du lecteur : accès, compte, sauvegarde, restauration, incident,
  hébergeur, sous-traitant, journal, donnée client, continuité, engagement.
- Jargon à traduire : SSO, MFA, RPO, RTO, SIEM, S-SDLC, pentest, ASVS,
  chiffrement au repos, tenant isolation, CVE.
- Ouverture : commencer par la vente bloquée et le risque de promettre une
  fonction inexistante, pas par un cours de cybersécurité.

## 3. Cannibalisation

| Page existante                                   | Intention                                            | Différence                                                          | Maillage                                             |
| ------------------------------------------------ | ---------------------------------------------------- | ------------------------------------------------------------------- | ---------------------------------------------------- |
| `/guides/mvp-saas-quoi-inclure`                  | Choisir ce qui rend une première version exploitable | Préparer les preuves demandées par un acheteur B2B                  | Le MVP renverra ici avant la vente à un grand compte |
| `/guides/cahier-des-charges-saas`                | Écrire les règles du produit avant développement     | Évaluer l'état actuel de huit familles de sécurité                  | Lier pour inscrire les exigences dans le produit     |
| `/guides/reprendre-saas-developpe-par-freelance` | Sécuriser accès et continuité lors d'une reprise     | Répondre à un questionnaire de vente sans changement de prestataire | Lier si les accès et dépendances sont inconnus       |
| `/services/securite-rgpd`                        | Présenter un accompagnement                          | Donner une méthode autonome et ses limites                          | CTA tardif vers le formulaire général                |

**Verdict :** guide distinct. Il ne doit pas devenir « comment sécuriser tout
un SaaS ».

## 4. Fiche de preuves

| Affirmation utilisable                                                                                                                                                                                                   | Source primaire                                                                                                                                                                                                          | Périmètre et limite                                                               | Conséquence lecteur                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| La CNIL organise ses mesures autour de la gouvernance, des utilisateurs, habilitations, serveurs, développement, sous-traitance, maintenance, journaux et sauvegardes                                                    | [CNIL — Guide de la sécurité des données personnelles](https://www.cnil.fr/fr/guide-de-la-securite-des-donnees-personnelles)                                                                                             | Guide de référence, pas certification ni analyse de risque exhaustive             | Utiliser ces familles pour ne pas répondre seulement sur le mot de passe                       |
| Sécurité et protection de la vie privée doivent être intégrées dès la conception ; les tests avant mise en production et l'utilisation de données fictives ou anonymisées en test font partie des recommandations        | [CNIL — Guide sécurité 2024, version mise à jour](https://www.cnil.fr/sites/default/files/2026-05/cnil_guide_securite_personnelle.pdf)                                                                                   | Recommandations générales à proportionner                                         | Demander des preuves de développement et de test, pas seulement d'hébergement                  |
| La CNIL recommande des identifiants individuels, d'éviter les comptes partagés et définit l'authentification multifacteur par au moins deux catégories distinctes de facteurs                                            | [CNIL — Authentifier les utilisateurs](https://www.cnil.fr/securite-authentifier-les-utilisateurs)                                                                                                                       | Mesures à adapter au risque ; MFA n'est pas une garantie absolue                  | Décrire utilisateurs, administrateurs et scénarios sensibles séparément                        |
| Les habilitations doivent être retirées lorsque la mission, la fonction ou le contrat prend fin                                                                                                                          | [CNIL — Gérer les habilitations](https://www.cnil.fr/fr/securite-gerer-les-habilitations)                                                                                                                                | Principe organisationnel et technique                                             | Prouver le propriétaire des droits et leur revue, pas seulement l'écran de rôles               |
| La CNIL recommande des sauvegardes régulières et testées, une copie géographiquement distincte, au moins une copie hors ligne et une protection comparable à la production                                               | [CNIL — Sauvegarder](https://cnil.fr/fr/securite-sauvegarder)                                                                                                                                                            | Fréquence et objectifs de reprise dépendent du métier                             | Donner la date du dernier test de restauration sans inventer un RPO ou RTO universel           |
| L'ANSSI recommande de définir la journalisation selon les besoins fonctionnels et techniques, de tracer des événements utiles, limiter les données personnelles et organiser conservation et suppression                 | [ANSSI — Recommandations de sécurité pour l'architecture d'un système de journalisation](https://cyber.gouv.fr/sites/default/files/2022/01/anssi-guide-recommandations_securite_architecture_systeme_journalisation.pdf) | Guide technique, à appliquer de façon proportionnée                               | Une liste de logs sans responsable ni utilisation n'est pas une preuve suffisante              |
| OWASP ASVS peut servir de base aux exigences, aux tests et aux clauses d'achat                                                                                                                                           | [OWASP — Application Security Verification Standard](https://owasp.org/www-project-application-security-verification-standard/)                                                                                          | Standard volontaire ; sélectionner des exigences ne certifie pas l'application    | Décrire précisément le périmètre testé et le résultat                                          |
| Toute violation de données personnelles doit être documentée ; une notification à la CNIL sous 72 heures concerne les violations présentant un risque, et l'information des personnes dépend notamment d'un risque élevé | [CNIL — Notifier une violation de données](https://www.cnil.fr/fr/services-en-ligne/notifier-une-violation-de-donnees-personnelles)                                                                                      | Règles relatives aux données personnelles, pas délai universel pour tout incident | Ne pas transformer « 72 heures » en SLA générique ; prévoir qualification et conseil compétent |
| L'ANSSI rappelle l'intérêt d'intégrer systématiquement la sécurité au cycle de développement et de livraison                                                                                                             | [ANSSI — Étude S-SDLC/DevSecOps](https://cyber.gouv.fr/nous-connaitre/publications/etude-de-marche/etude-de-marche-s-sdlc-devsecops/)                                                                                    | Étude de marché et de gouvernance, pas label                                      | Demander comment les corrections et dépendances sont suivies dans la durée                     |

### Garde-fous

- ne pas écrire « certifié ANSSI » ou « conforme OWASP » sans certification ou
  audit correspondant ;
- ne pas imposer 99,9 %, une fréquence de test d'intrusion ou une fréquence de
  sauvegarde à tous les SaaS ;
- ne pas affirmer que SSO ou MFA est obligatoire pour chaque cas ;
- ne pas dire que tout incident doit être notifié sous 72 heures ;
- ne pas confondre données hachées et données anonymes ;
- ne pas affirmer que NIS2 s'applique à tout éditeur SaaS ;
- ne pas transmettre au prospect des secrets, détails exploitables ou pièces
  contenant des données personnelles non nécessaires.

## 5. Les huit fiches de preuve

| Famille                      | Question de l'acheteur                             | Pièce possible                                     | Blocage à rechercher                        |
| ---------------------------- | -------------------------------------------------- | -------------------------------------------------- | ------------------------------------------- |
| Identités et droits          | Qui peut faire quoi ?                              | Rôles, procédure arrivée-départ, dernière revue    | Compte partagé ou administrateur inconnu    |
| Données et séparation        | Quelles données sont stockées et séparées ?        | Cartographie, flux, règle d'accès                  | Données ou destinataires inconnus           |
| Sauvegarde et restauration   | Que peut-on récupérer ?                            | Rapport du dernier test, périmètre et résultat     | Sauvegarde jamais restaurée                 |
| Journaux et alertes          | Comment voyez-vous un accès ou incident ?          | Événements suivis, alerte, propriétaire            | Journaux collectés mais jamais examinés     |
| Développement et dépendances | Comment évitez-vous et corrigez-vous les défauts ? | Revue, tests, dépendances, procédure de correction | Mise en production sans contrôle            |
| Incident                     | Qui décide, informe et documente ?                 | Procédure, rôles, exercice                         | Aucun responsable ou moyen de qualification |
| Sous-traitants               | Qui traite ou héberge quoi ?                       | Liste, rôle, clauses, revue                        | Prestataire critique inconnu                |
| Continuité et sortie         | Que se passe-t-il en panne ou au départ ?          | Plan, export, objectifs validés                    | Promesse de reprise jamais testée           |

## 6. Décision prévue

Pour chaque exigence, trois réponses honnêtes seulement :

1. **existe et est prouvable** : pièce actuelle, propriétaire et dernier test ;
2. **manque mais peut être planifiée** : écart reconnu, mesure temporaire,
   responsable, date et acceptation écrite du client ;
3. **inconnue ou bloquante** : vente suspendue jusqu'à diagnostic, correction
   ou avis spécialisé.

Le dirigeant ne doit pas classer seul une exigence réglementaire ou un risque
technique qu'il ne sait pas qualifier.

## 7. Exemple pédagogique prévu

**Exemple illustratif fictif :** « Nordexia », SaaS de gestion documentaire,
reçoit un questionnaire d'un prospect de 450 salariés. Il affirme d'abord que
« les sauvegardes sont gérées par le cloud ». L'équipe retrouve une tâche
automatique, mais aucun compte rendu de restauration et personne ne sait qui
serait autorisé à lancer la reprise.

Le guide montrera comment remplacer cette réponse par :

- ce qui est sauvegardé ;
- où et sous quelle responsabilité ;
- le dernier test réellement effectué ;
- son résultat et ses limites ;
- l'écart restant ;
- la décision de tester avant signature ou de faire accepter un plan daté.

## 8. Plan annoté

| Section                                             | Question                                          | Format                          | Décision                                 |
| --------------------------------------------------- | ------------------------------------------------- | ------------------------------- | ---------------------------------------- |
| La vente se bloque sur un questionnaire             | Pourquoi faut-il répondre autrement que « oui » ? | Scène                           | Construire un dossier de faits           |
| L'acheteur cherche un risque réduit et une preuve   | Que veut-il réellement ?                          | Traduction de dix termes        | Ne pas vendre une perfection impossible  |
| Cartographiez avant de cocher                       | Que protège-t-on ?                                | Données, services, rôles, tiers | Identifier les inconnues                 |
| Remplissez huit fiches                              | Quelles preuves rassembler ?                      | Cartes                          | Attribuer propriétaire et dernier test   |
| Classez chaque demande en trois réponses            | Peut-on signer ?                                  | Existe, planifiée, bloquante    | Décision de direction argumentée         |
| Ne transmettez pas vos secrets                      | Que partager ?                                    | Dossier transmissible           | Répondre sans créer un risque            |
| Décidez signer, signer sous conditions ou suspendre | Quel verdict ?                                    | Trois scénarios                 | Refuser la promesse non maîtrisée        |
| Plan de trente jours                                | Comment avancer ?                                 | Chronologie adaptable           | Fermer les écarts prioritaires           |
| Audit autonome                                      | Que faire aujourd'hui ?                           | Registre copiable               | Produire une première version du dossier |
| Bon fit, mauvais fit et FAQ                         | Quand demander de l'aide ?                        | Encadrés                        | Conversion responsable                   |

## 9. Action autonome et conversion

Artefact intégré : registre avec exigence, réponse factuelle, pièce ou lien,
propriétaire, date du dernier test, écart, mesure temporaire et échéance. La
case « conforme » sans pièce est interdite.

Bon fit : SaaS B2B avec données opérationnelles ou personnelles, plusieurs
rôles, sous-traitants et vente à des organisations structurées.

Mauvais fit : demande de certification formelle sans audit, contexte santé,
finance, défense ou autre secteur exigeant un spécialiste, et produit dont les
actifs ou données ne sont pas encore cartographiés.

CTA : « Faire relire mon dossier sécurité SaaS » vers `/demarrer-un-projet`,
avec limite explicite : accompagnement technique et général, avis juridique ou
sectoriel spécialisé lorsque nécessaire.

## 10. Rapport P1

```text
PASSE 1 TERMINÉE
Slug : securite-saas-b2b
Lecteur et phrase réelle : dirigeant SaaS — « Le grand compte exige des garanties : que faut-il prouver avant de signer ? »
Décision : signer avec preuves, signer sous conditions acceptées ou suspendre pour auditer et corriger
Angle et forme dominante : transformer le questionnaire en huit fiches de preuve
Pages proches et différence : MVP, cahier et reprise évoquent la sécurité ; aucun ne prépare le dossier demandé par un acheteur
Sources décisives : CNIL, ANSSI et OWASP, avec limites de périmètre
Incertitudes exclues : certification, disponibilité, fréquence de pentest, obligation universelle de MFA et application automatique de NIS2
Action autonome et CTA possible : registre de preuves ; faire relire le dossier avant réponse
Plan : vente, attente acheteur, cartographie, huit fiches, trois statuts, partage, verdict, trente jours, audit, fits, FAQ
Snapshot : docs/research/manifests/securite-saas-b2b-p1.sha256
```

## 11. Revue de porte P1

- [x] lecteur, situation et décision définis ;
- [x] questionnaire transformé en preuves et responsabilités ;
- [x] sources officielles ou standard volontaire qualifiées ;
- [x] sauvegarde distinguée d'une restauration testée ;
- [x] incident général distingué d'une violation de données ;
- [x] certification et secteurs réglementés hors périmètre ;
- [x] exemple fictif annoncé ;
- [x] option de suspendre la vente conservée ;
- [x] aucune garantie de sécurité ou conformité ;
- [x] P2, P3 et P4 terminées ; publication déléguée et contrôlée.

## 12. Rapport P2 — rédaction et intégration

```text
PASSE 2 TERMINÉE — PRÊTE POUR CONTRE-AUDIT INDÉPENDANT
Éditeur unique : /root/p2_batch3_marketing
Ouverture : le questionnaire d'un grand compte bloque une signature ; le lecteur reçoit immédiatement trois réponses possibles — faits existants, plan accepté ou suspension
Forme propre : huit fiches factuelles, trois statuts de réponse et un dossier transmissible qui n'expose pas les secrets techniques
Exemple : Nordexia est annoncé comme entièrement fictif avant son premier usage ; aucune réalisation client n'est suggérée
Action autonome : registre exigence, réponse, document, propriétaire, dernier test, écart et échéance, copiable sans contact
Bon et mauvais fit : vente SaaS B2B structurée d'un côté ; certification, audit formel et secteurs réglementés de l'autre
Sources visibles : CNIL, ANSSI et OWASP, avec limites sur certification, MFA, sauvegardes, journalisation et notification
Conversion : un seul CTA tardif vers /demarrer-un-projet ; téléphone et CTA de barre latérale désactivés
SEO technique : métadonnées du registre en statut ready-for-human-review ; canonical, Article et BreadcrumbList ; image sociale dédiée 1 200 × 630
Contrôles P2 : formatage ciblé, ESLint ciblé et TypeScript conformes selon le rapport de l'éditeur
État : index/follow autorisé après validation P3, P4 et délégation explicite
Snapshot : docs/research/manifests/securite-saas-b2b-p2.sha256
```

## 13. Rapport P3 — contre-audit indépendant

```text
PASSE 3 TERMINÉE
Relecteur indépendant : /root/p2_batch3_apps
Affirmations et sources revérifiées : CNIL, ANSSI et OWASP ; accès, sauvegardes, restauration, journaux, incidents, sous-traitants et continuité
Calculs refaits : aucun calcul décisif ; la règle CNIL des 72 heures reste conditionnée au risque et n’est pas transformée en obligation universelle de notification
P0 trouvés / corrigés : 0 / 0
P1 trouvés / corrigés : 1 / 1 — la promesse non sourcée « en une heure » a été retirée
Suggestions rejetées et pourquoi : aucune certification, fréquence de pentest, MFA ou conformité sectorielle universelle ajoutée
Corrections pédagogiques et commerciales : deux tableaux ramenés à trois colonnes, statut et preuve réunis, registre lisible sur téléphone, décision de suspendre conservée
Revalidation du relecteur : P0/P1/P2 = 0/0/0 sur le contenu courant
Contrôles intermédiaires : Prettier, ESLint, TypeScript, tests ciblés, liens officiels, CTA, schémas et OG conformes
Snapshot : docs/research/manifests/securite-saas-b2b-p3.sha256
```

## 14. Rapport P4 — plume, rendu et gel

```text
PASSE 4 TERMINÉE
Passages humanisés : le questionnaire du grand compte conduit directement à trois réponses honnêtes — prouver, planifier ou suspendre — puis à huit pièces compréhensibles
Coupe ou resserrement : numérotation mécanique et blocs de conversion clonés retirés ; la promesse de traitement « en une heure » a disparu faute de périmètre contractuel
Retour P3 effectué : oui — accès, restauration, journaux, incidents, sous-traitants, CNIL, ANSSI et OWASP ont été revérifiés ; relecture finale P0/P1/P2 = 0/0/0
Scorecard justifiée : 19/20 — Intention 2, Décision 2, Pédagogie 2, Profondeur 2, Preuve 2, Comparaison 2, Originalité 2, Style 1, Conversion 2, SEO/produit 2
Validation humaine réelle : non
Test réalisé par une personne réelle : non
Autorisation éditoriale : délégation explicite du commanditaire
Décision de publication : autorisée explicitement par le commanditaire
Commandes et résultats : check:seo 215/215 ; ESLint 32 fichiers ; TypeScript conforme ; npm test 440/440 ; build et postbuild de production conformes ; diff-check conforme
Largeurs et états contrôlés : 320, 390, 768, 1 024 et 1 440 px ; clair et sombre ; fiches de preuve, statuts, CTA, FAQ et footer sans débordement
Route, OG et console : route 200, H1 unique, canonical et robots conformes ; OG 200 en PNG 1 200 × 630 ; aucun overlay ni erreur navigateur
Snapshot final : docs/research/manifests/securite-saas-b2b-p4.sha256
Statut maximal : Publiable
Verdict : publiable en index/follow ; ce guide ne vaut ni audit ni certification et ne prouve aucune indexation Google
```
