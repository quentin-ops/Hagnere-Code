# Dossier de recherche — Reprendre un SaaS développé par un freelance

Journal du guide `reprendre-saas-developpe-par-freelance`. La page reste un
candidat local tant que le contre-audit du snapshot courant n’est pas clos.

## Refonte premium R3 — 28 juillet 2026

Statut courant : **GO_LOCAL_DRAFT R3 — 96/96/98, P0 = 0, P1 = 0**.

### Contre-audits indépendants du candidat gelé

Snapshot audité :
`reprendre-saas-developpe-par-freelance-r3-candidate-2026-07-28.sha256`,
**46/46 empreintes conformes** ; empreinte du manifeste :
`fac225003ccd08630e6b6130d4e77969ef1843f50bcf34ae4f8dc425ccb71ae0`.

| Lecture indépendante | Note | P0 | P1 | Verdict |
| -------------------- | ---: | -: | -: | ------- |
| Technique et modèle  | 96/100 | 0 | 0 | GO_LOCAL_DRAFT |
| Faits et doctrine    | 96/100 | 0 | 0 | GO |
| UX et valeur lecteur | 98/100 | 0 | 0 | GO_LOCAL_DRAFT |

Les limites non bloquantes conservées sont explicites : le cycle global reste
rouge sur deux dettes de gouvernance hors de ce guide, et le classeur n'a pas
été recalculé dans Microsoft Excel. Les dates du dossier, du modèle, du
catalogue et des preuves R3 sont alignées au 28 juillet 2026.

Les quatre passes du 21 juillet conservées plus bas sont un historique obsolète,
pas une preuve actuelle. Le giga-audit du 24 juillet a ramené le guide à 86/100,
et la reprise du 28 juillet a constaté que les anciens manifestes ne validaient
plus le candidat complet. La nouvelle passe repart donc des sources, des calculs,
du HTML servi, du classeur réimporté et de tests dédiés.

### Corpus mondial réellement utilisé

- France : CNIL pour habilitations, sous-traitance, restitution/destruction,
  sauvegardes et guide de sécurité 2026 ; Légifrance pour les articles L111-1,
  L113-9 et L131-3.
- États-Unis : GitHub, Stripe et Vercel pour les limites de leurs transferts ;
  NIST pour RTO, RPO et plan de continuité ; AWS et Google Cloud pour l’arbitrage
  par parcours et le coût d’objectifs plus courts.
- Royaume-Uni : Digital, Data and Technology Playbook et Model Services Contract
  comme benchmarks de commande publique pour le plan de sortie, les
  responsabilités, les jalons et l’assistance. Ils ne constituent pas une règle
  applicable telle quelle à une PME française.
- Australie : Australian Signals Directorate pour MFA, moindre privilège et
  retrait des comptes prestataires devenus inutiles.
- Japon : Digital Agency pour l’inventaire de transfert — code, configuration,
  outils, comptes, incidents et rapport de passation.

### Corrections substantielles R1 à R3

- Doctrine d’accès corrigée : préparer avant l’échéance ; à la fin du contrat,
  désactiver sauf prolongation écrite, bornée, nominative, minimale et
  journalisée. Un incident ou un litige sort de la passation normale.
- Comptes techniques, droits d’exploitation et sort des données sont désormais
  trois contrôles distincts. Restitution, copies, sauvegardes, destruction et
  attestation écrite sont explicitement traitées.
- Les dix fonctions reposent sur
  `src/lib/saas-freelance-handover-functions.json` et s’affichent d’abord dans
  une synthèse exécutive, puis dans des détails progressifs.
- Une matrice canonique de 18 scénarios couvre gouvernance, code, infrastructure,
  continuité, paiements, données, droits, support, décision et sortie.
- Le guide distingue RTO et RPO par parcours et ne transforme jamais une
  fréquence de sauvegarde en preuve de restauration.
- Le conflit d’intérêt commercial de Hagnéré Code est déclaré avant le CTA
  contextualisé ; le CTA sticky du guide est désactivé.
- Le premier contre-audit R1 a refusé le candidat : valeurs impossibles encore
  acceptées par le XLSX, cibles RTO/RPO divergentes entre page et classeur,
  exports incomplets, trois gardes SEO propres au guide et absence de BAT gelé.
- R2 partage désormais un seul dataset de criticité entre page et XLSX,
  distingue RPO nul et RPO sans objet, exporte toutes les saisies courantes,
  conserve les virgules intermédiaires et replie les trois groupes de champs
  avancés.
- Le sommaire est continu de 1 à 14 ; la section de tests reste dans le corps
  sans créer une seconde section 7.

### Calculs vérifiés

- TCO fictifs sur 36 mois : **141 500 €** pour stabiliser, **186 640 €** pour
  migrer et **274 800 €** pour réécrire.
- Surcoût réécriture/stabilisation : **133 300 €** ; à 800 € de contribution
  mensuelle et 27 mois productifs, **166,625 clients-mois**, soit **6,1713**
  clients équivalents présents pendant chacun des 27 mois et **7** après
  arrondi supérieur. Ce n’est pas un calendrier de cohortes.
- RPO illustratif : 900/450 événements maximum/moyens à 24 h, puis 150/75 à
  4 h ; reconstruction maximale 4 050 € puis 675 € dans les hypothèses. Les
  moyennes supposent à la fois un instant d’incident uniformément réparti dans
  l’intervalle et un flux d’événements suffisamment régulier.
- Exercice : 680 € ; exposition horaire 141,25 €. Le seuil de 4,81 h n’est
  valable qu’à 100 % de probabilité annuelle ; il devient **19,26 h à 25 %** et
  **48,14 h à 10 %**.
- Arrêts illustratifs : 1 130 € à 8 h et 5 085 € à 36 h. Comptes personnels :
  1 280 € en passation préparée, 2 720 € en crise, soit 1 440 € d’écart direct.

### Artefacts et contrat de preuve

- Outil local : TCO, seuil de réécriture, RPO, exercice, arrêts et comptes, avec
  branches `unknown` et `incident` obligatoirement routées vers `STOP`.
- Classeur : `kit-reprise-saas-freelance.xlsx`, dix feuilles, dix fonctions,
  dix-huit tests, dix-huit sources et vingt-quatre contrôles indépendants.
- Validation classeur R3 : deux réimports et cinq mutations légitimes.
  Onze entrées adversariales sont refusées. Huit sabotages de formules sont
  détectés ; la copie publique reste identique et aucune erreur de formule n’est
  relevée. Le classeur n’a pas été recalculé par Microsoft Excel : la validation
  porte sur le moteur local et les formules exportées.
- BAT local R3 :
  `docs/research/evidence/reprendre-saas-developpe-par-freelance-r3-bat-2026-07-28.md`.
  Les 33 tests propres au guide passent. Le build normal atteint ce précontrôle,
  puis reste bloqué par deux échecs de gouvernance historiques hors du lot ; le
  build de la charge utile, rejoué sans scripts de cycle de vie, compile et
  produit 159/159 pages. Dix largeurs et les deux thèmes sont contrôlés.
- Précontrôle ciblé R3 du 28 juillet : **33/33 tests passent** après les
  corrections factuelles, techniques et UX.

## Journal historique des quatre passes du 21 juillet 2026

Propriétaire éditorial unique : Codex, agent racine du lot du 21 juillet 2026.

| Passe                        | État                     | Date       | Responsable | Snapshot                                           | Blocages |
| ---------------------------- | ------------------------ | ---------- | ----------- | -------------------------------------------------- | -------- |
| 1. Recherche                 | Terminée — porte validée | 2026-07-21 | Codex       | `reprendre-saas-developpe-par-freelance-p1.sha256` | Aucun    |
| 2. Rédaction et intégration  | Terminée — porte validée | 2026-07-21 | Codex       | reprendre-saas-developpe-par-freelance-p2.sha256   | Aucun    |
| 3. Contre-audit indépendant  | Terminée — porte validée | 2026-07-21 | Agent P3    | `reprendre-saas-developpe-par-freelance-p3.sha256` | Aucun    |
| 4. Plume humaine et contrôle | Terminée — porte validée | 2026-07-21 | Codex       | `reprendre-saas-developpe-par-freelance-p4.sha256` | Aucun    |

## 1. Fiche d'identité

- **Slug :** `reprendre-saas-developpe-par-freelance`.
- **Requête principale :** reprendre SaaS développé par freelance.
- **Variantes :** reprendre un SaaS existant, départ développeur SaaS, changer de
  développeur SaaS, récupérer les accès d'un SaaS.
- **Lecteur :** fondateur ou dirigeant non technicien dont le produit est déjà
  utilisé et payé par des clients.
- **Niveau initial :** il possède au moins une URL, parfois un dépôt GitHub, mais
  ne sait pas quels comptes font réellement fonctionner le produit.
- **Phrase téléphone :** « Le freelance qui a construit notre SaaS part. Les
  clients continuent à se connecter et à payer : dans quel ordre reprendre les
  comptes sans tout couper ? »
- **Décision :** organiser une passation contrôlée et achever les contrôles avant
  l’échéance ; à la fin du contrat, désactiver l’ancien accès sauf prolongation
  écrite, bornée, nominative, minimale et journalisée.
- **Action autonome :** passer en revue les dix fonctions du registre, retirer
  celles qui n'existent pas dans le SaaS et ajouter les services propres au
  produit avant d'écrire la condition de retrait de chaque accès.
- **Hors du sujet :** audit complet du code, choix détaillé entre migration et
  réécriture, médiation, conseil juridique, investigation après intrusion,
  garantie de continuité ou prix ferme sans accès.
- **Date de recherche :** 21 juillet 2026.

### Les cinq questions auxquelles le guide doit répondre

1. Le dépôt GitHub suffit-il pour reprendre le SaaS ?
2. Quels comptes doivent appartenir à l'entreprise avant le départ ?
3. Comment vérifier les paiements, les données et les tâches sans toucher aux
   vrais clients par erreur ?
4. Quand peut-on retirer l'accès du freelance ?
5. Dans quels cas faut-il suspendre la transition normale et traiter un incident ?

### Les trois craintes du lecteur

- couper les connexions ou les paiements en changeant un compte ;
- découvrir trop tard qu'une sauvegarde, un domaine ou une boîte d'envoi dépend
  encore d'une adresse personnelle ;
- payer une réécriture alors qu'une passation ordonnée aurait suffi.

### Score de lancement

| Critère            |       Note | Justification                                               |
| ------------------ | ---------: | ----------------------------------------------------------- |
| Offre vendue       |      25/25 | Reprise, maintenance et évolution de SaaS                   |
| Proximité du devis |      25/25 | Produit actif, clients et prestataire sortant identifiés    |
| Demande observée   |       9/15 | Intention visible, sans volume Search Console               |
| Outil original     |      15/15 | Registre centré sur la condition de retrait de chaque accès |
| Différenciation    |      10/10 | Passation opérationnelle, pas nouvel audit général du code  |
| Maillage et CTA    |      10/10 | Suite distincte des guides reprise/TMA                      |
| **Total**          | **94/100** | Porte de potentiel franchie                                 |

## 2. Contrat de langage humain

**Réponse en une phrase :** le freelance peut quitter le projet lorsque
l'entreprise contrôle les comptes vitaux et qu'une autre personne a réussi les
actions prévues ; posséder une copie du code ne suffit pas.

- **Mots ordinaires :** clients actifs, paiement, domaine, courriel, sauvegarde,
  titulaire du compte, administrateur, contrôle réussi, retour arrière.
- **Traductions :** ajouter un deuxième accès plutôt que « doubler » ; service
  plutôt que « couche » ; tâche automatique plutôt que « cron » ; remise en ligne
  plutôt que « redéploiement » lorsque le détail technique n'aide pas.
- **Mots à éviter sans explication :** stack, pipeline, CI/CD, observabilité,
  rotation de secrets, provisioning, dette technique, refactoring, réversibilité.
- **Distinction constante :** le titulaire d'un compte de service n'est pas
  nécessairement le titulaire des droits sur le code.
- **Ouverture verrouillée :** « Votre développeur freelance vous annonce son départ
  alors que des clients se connectent encore à votre SaaS et paient chaque mois.
  Votre priorité n'est pas de juger son code ni de tout refaire. Elle est de
  vérifier que votre entreprise peut encaisser, envoyer les courriels, retrouver
  les données et remettre le service en ligne sans dépendre d'une seule personne.
  Ce guide vous aide à reprendre chaque compte dans le bon ordre, à tester ce qui
  compte sans toucher aux vrais clients, puis à décider quand l'ancien accès peut
  être retiré. Si vous faites face à un conflit, une intrusion ou un compte
  détourné, cette passation normale ne suffit pas : il faut traiter l'incident
  séparément. »

### Règle de prudence

Ne jamais recommander de supprimer tous les accès immédiatement sans savoir ce
qu'ils commandent. Dans une passation normale, ajouter et tester le nouvel accès,
puis réduire l'ancien. En cas d'intrusion, de détournement ou de menace crédible,
la protection immédiate peut primer : ce cas sort du tutoriel normal et demande
une réponse à incident adaptée.

## 3. Propriété éditoriale et cannibalisation

**Propriété exclusive :** organiser le départ du développeur d'un SaaS déjà vendu,
transférer les comptes vitaux et retirer ses accès selon des conditions observables,
sans perturber abonnements, connexions, tâches automatiques et support.

| Page voisine                             | Question qu'elle possède déjà                        | Ce que le nouveau guide ne répète pas                           |
| ---------------------------------------- | ---------------------------------------------------- | --------------------------------------------------------------- |
| `reprendre-logiciel-metier-existant`     | Comment une nouvelle équipe reprend un outil interne | Audit technique général et choix détaillé de la solution future |
| `reprendre-mvp-vibe-code`                | Comment reprendre un prototype Lovable, Bolt ou v0   | Limites propres aux générateurs et passage prototype → produit  |
| `proprietaire-site-internet-code-source` | Quels droits et comptes demander pour un site        | Inventaire générique de propriété d'un site                     |
| `contrat-tma-application`                | Comment organiser la maintenance après reprise       | Clauses et niveaux de service détaillés                         |
| `cahier-des-charges-saas`                | Que décider avant de construire un SaaS              | Conception du produit, rôles et abonnement futurs               |

Le nouveau guide peut renvoyer vers l'audit de reprise et la TMA, mais consacre
son corps aux paiements, comptes clients, données, domaine, courriels, tâches et
support pendant le départ d'une personne.

## 4. Observation de la demande et des résultats

Observation qualitative effectuée sur Google Web depuis la France le 21 juillet
2026, avec des résultats non personnalisés dans la mesure du possible. Requêtes :
« reprendre SaaS développé freelance », « départ développeur SaaS accès »,
« changer prestataire SaaS existant » et « reprise maintenance SaaS ». Aucun volume,
niveau de difficulté ou position future n'est déduit de cette observation.

| Résultat observé                                                                                                                    | Réponse et artefact                                            | Manque pour notre lecteur                                                                   | Conflit à garder en tête                                         |
| ----------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| [ARDNTECH — reprise d'un SaaS Symfony](https://ardn.tech/fr-fr/nos-services/reprise-maintenance-saas)                               | Audit annoncé en cinq jours et plan de stabilisation           | Peu centré sur la remise des paiements, comptes clients et accès avant révocation           | Page commerciale avec délais et promesses propres au prestataire |
| [Adimeo — reprise de projet et TMA](https://www.adimeo.com/blog/reprise-projet-tma)                                                 | Étapes de transfert de connaissance et de maintenance          | Approche générale, pas de condition de retrait service par service                          | Agence proposant la prestation décrite                           |
| [Polara Studio — reprise de projet logiciel](https://www.polarastudio.fr/blog/reprise-de-projet-logiciel-guide-complet-prestataire) | Audit, propriété intellectuelle et choix d'une nouvelle équipe | Départ traité surtout comme crise technique ; peu de recette opérationnelle des abonnements | Agence proposant la reprise                                      |
| [Sparkier — audit avant reprise](https://www.sparkier.io/articles/audit-avant-reprise-de-projet-dev)                                | Audit avant devis et risques techniques                        | Ne donne pas au dirigeant un registre de retrait des accès                                  | CTA commercial précoce                                           |
| [Fabrice Payet — développement SaaS](https://fabricepayet.fr/services/developpement-saas)                                           | Création et évolution d'un produit SaaS                        | Pas de passation d'un produit actif entre deux équipes                                      | Page de service d'un développeur                                 |

**Angle retenu :** les clients paient encore pendant le départ. La valeur originale
est une fiche qui dit, pour chaque service, qui le détient, quel contrôle a réussi
et quelle condition autorise le retrait de l'ancien accès.

## 5. Fiche de faits vérifiés

Sources officielles consultées le 21 juillet 2026 ; la page Vercel a été
revérifiée le 28 juillet 2026.

| Catégorie                 | Affirmation utilisable                                                                                                                | Source                                                                                                                               | Limite et emploi dans le guide                                                                     |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------- |
| Fait officiel             | En droit français, l'auteur dispose de droits du seul fait de la création                                                             | [CPI, art. L111-1](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278868)                                             | Ne conclut pas à lui seul qui possède chaque élément du projet                                     |
| Fait officiel             | Le logiciel créé par un salarié suit un régime particulier                                                                            | [CPI, art. L113-9](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000039279818)                                             | Ne pas appliquer automatiquement ce régime à un freelance                                          |
| Fait officiel             | Les droits cédés doivent être nommés et leur exploitation délimitée                                                                   | [CPI, art. L131-3](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958)                                             | Contrat, contributions antérieures et composants tiers à examiner au cas par cas                   |
| Fait officiel             | Lorsque le RGPD s'applique, la sous-traitance doit encadrer restitution ou destruction des données, authentification et habilitations | [CNIL — gérer la sous-traitance](https://www.cnil.fr/fr/securite-gerer-la-sous-traitance)                                            | Rôles réels à qualifier ; l'ordre de retrait des accès reste notre recommandation                  |
| Fait officiel             | Les données réelles de production ne doivent pas servir aux tests de développement ; créer des données fictives                       | [CNIL — tester vos applications](https://www.cnil.fr/fr/tester-vos-applications)                                                     | Séparer ces tests du contrôle isolé d'une restauration                                             |
| Fait officiel             | Une sauvegarde doit être protégée, testée et réellement restaurable                                                                   | [CNIL — sauvegarder](https://www.cnil.fr/fr/securite-sauvegarder)                                                                    | Une restauration de données personnelles garde le niveau de protection de la production            |
| Fait officiel             | Après transfert GitHub, l'ancien propriétaire peut rester collaborateur et webhooks, secrets ou clés de déploiement restent associés  | [GitHub — transférer un dépôt](https://docs.github.com/en/repositories/creating-and-managing-repositories/transferring-a-repository) | Réviser membres, applications, jetons et clés avant retrait                                        |
| Fait officiel             | Un transfert Vercel ne déplace pas automatiquement toutes les intégrations, données de suivi, journaux, drains, Blob ou Edge Config   | [Vercel — transférer un projet](https://vercel.com/docs/projects/transferring-projects)                                              | Page mise à jour le 25 novembre 2025 et consultée le 28 juillet 2026 ; revérifier au moment d'agir |
| Fait officiel             | Le propriétaire d'un compte Stripe peut être changé dans le même compte                                                               | [Stripe — changer le propriétaire du compte](https://support.stripe.com/questions/change-the-owner-of-a-stripe-account?locale=en-GB) | Le rôle est confié à une personne désignée qui agit pour l'entreprise                              |
| Fait officiel             | Une migration Stripe vers un autre compte n'est pas une simple copie de tout l'historique                                             | [Stripe — copier des données entre comptes](https://support.stripe.com/questions/copy-existing-account-data-to-a-new-stripe-account) | Examiner clients, moyens de paiement et objets réellement transférables                            |
| Fait officiel             | Stripe documente une migration d'abonnements avec validation, environnement isolé et surveillance après activation                    | [Stripe Billing migration toolkit](https://docs.stripe.com/billing/subscriptions/import-subscriptions-toolkit?locale=en-GB)          | Ne jamais improviser facture, annulation ou remboursement sur les vrais clients                    |
| Bonne pratique documentée | OWASP décrit l'inventaire, le stockage centralisé et des stratégies de rotation des secrets                                           | [OWASP — Secrets Management](https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html)                     | Bonne pratique, pas certification de sécurité                                                      |

**Recommandation Hagnéré Code :** une fois les dépendances déplacées et le
nouvel identifiant testé, renouveler les secrets connus du prestataire sortant,
puis désactiver les anciens. De même, l'ordre « ajouter, tester, puis retirer »
est notre recommandation éditoriale ; la CNIL établit bien les exigences de
restitution, de suppression, d'authentification et de gestion des habilitations,
mais ne prescrit pas ce déroulé opérationnel précis pour chaque SaaS.

### Deux branches à ne pas confondre pour les paiements

1. **Le même compte de paiement est conservé.** Une personne désignée par
   l'entreprise devient `Account Owner`, ou reçoit le rôle approprié, avec une
   adresse contrôlée par l'entreprise. Avant de réduire l'accès du freelance, elle
   vérifie le compte bancaire, la facturation, la récupération et les alertes ;
   inventorie les clés et l'adresse qui reçoit les événements en production ; puis
   reproduit l'intégration dans le bac à sable Stripe, c'est-à-dire son espace de
   test. Après tout changement de clé ou d'adresse, un événement attendu doit être
   observé sans improviser de facturation réelle.
2. **Un nouveau compte de paiement doit être utilisé.** C'est une migration
   distincte. Clients, abonnements, moyens de paiement, factures, événements et
   historique ne sont pas supposés se recopier seuls. Un plan fournisseur, un test
   isolé, une prévention de la double facturation et une surveillance sont requis.

### Deux contrôles distincts pour les données

- **Tester le produit :** utiliser un jeu fictif ressemblant aux vrais parcours ;
  aucune base clients copiée vers un environnement de développement ordinaire.
- **Tester la restauration :** restaurer une sauvegarde dans un espace isolé,
  accessible aux seules personnes autorisées et protégé comme la production ;
  constater que les données et fichiers attendus sont présents, puis traiter ou
  supprimer cette copie selon la procédure prévue.

### Prudence juridique

Le guide parle du droit français et ne tranche aucun contrat. Il distingue auteur,
salarié et freelance. Le code, les bibliothèques, polices, images et autres
éléments peuvent dépendre de droits ou licences différents ; chacun doit être
rapproché du contrat et de son origine. Le paiement d'une facture et la titularité
d'un compte technique ne suffisent pas à conclure sur les droits.

### Affirmations interdites

- « dépôt GitHub = reprise complète » ;
- « facture payée = propriété automatique de tout » ;
- « l'entreprise ou le freelance possède forcément tout le code » ;
- « transférez le dépôt puis supprimez immédiatement tous les anciens accès » ;
- « une exportation de base sauvegarde aussi les fichiers et les identités » ;
- « changez de compte de paiement sans impact sur les abonnements » ;
- « une sauvegarde existe donc elle est restaurable » ;
- « une copie des données clients peut servir aux tests ordinaires » ;
- « trente jours suffisent pour tout SaaS » ;
- « le code est peu élégant, il faut donc tout réécrire » ;
- garantie de continuité, d'absence de perte, de sécurité ou de conformité ;
- ancien prestataire présenté comme malveillant sans fait établi.

## 6. Artefact central — registre de passation

Chaque ligne doit pouvoir être utilisée pendant une vraie réunion de passation.
Elle contient dix champs :

1. **service et rôle dans le produit** ;
2. **titulaire actuel** du compte ;
3. **accès actuel du freelance** — rôle ou autorisation précise à retirer ;
4. **administrateur entreprise** avec son moyen de récupération vérifié ;
5. **contrôle, résultat et date** — pas seulement « testé » ;
6. **élément encore manquant** ;
7. **ce manque bloque-t-il le retrait ?** oui ou non, avec la raison ;
8. **prochaine action, responsable et échéance** ;
9. **condition observable de retrait** de l'accès du freelance ;
10. **solution de secours** si le changement échoue.

Le guide public donnera, après l'exemple, une fiche vierge reprenant ces dix
champs. Il ne faut jamais y stocker un mot de passe, une clé, un code de
récupération ou une donnée bancaire de client : le registre indique où le secret
est géré et qui peut le récupérer, jamais sa valeur.

Une ligne ne peut pas passer à « accès retirable » tant qu'un manque marqué
bloquant n'est pas résolu. Inventorier une clé, une intégration ou un compte
personnel ne suffit pas : son remplacement ou son contrôle par l'entreprise doit
avoir été testé.

Un test isolé ne suffit pas à déclarer la bascule prête. Le service réellement
utilisé par les clients doit appartenir à l'entreprise, être facturé à l'entreprise
et être relié aux bons réglages de production. Après le transfert, la nouvelle
équipe contrôle les connexions, paiements, courriels, fichiers, tâches et alertes
prévus. Toute intervention sur le service actif est préparée et exécutée par la
personne compétente, avec une solution de retour disponible ; le dirigeant ne doit
pas improviser cette opération seul.

La date d’échéance ne remplace pas ces contrôles : ils doivent être préparés et
achevés avant. Elle borne cependant l’autorisation. À la fin du contrat, l’accès
est désactivé, sauf prolongation écrite précisant sa durée, son périmètre, son
responsable et les journaux de contrôle. Une condition observable — par exemple
« Nina et Malik ont réussi à publier sur l’adresse de test et à revenir à la
version précédente » — décrit la préparation de la bascule, pas un droit implicite
à maintenir un accès arrivé à échéance.

### RelanceSimple — dix lignes remplies

**Exemple entièrement fictif.** RelanceSimple aide 18 petites sociétés à préparer
leurs relances de factures. Sam, freelance créateur, annonce son départ. Nina,
fondatrice, détient le domaine ; Malik représente la nouvelle équipe. Tous les
noms, volumes, dates et outils servent seulement à la pédagogie.

| Service et rôle                   | Titulaire actuel              | Accès actuel de Sam                                       | Administrateur entreprise et récupération                                                                     | Contrôle daté                                                                                                       | Manque                                                                              | Bloque le retrait ?                                                               | Action — responsable — date                                                                     | Condition de retrait                                                                                                                                                                                                               | Solution de secours                                                                                                                                                    |
| --------------------------------- | ----------------------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GitHub — code                     | Compte personnel de Sam       | Propriétaire du dépôt et identifiants personnels liés     | Nina propriétaire de l'organisation ; récupération testée le 22 juillet                                       | Malik récupère le code, construit le produit et publie sur une adresse de test le 22 juillet                        | Applications liées, adresses d'événements, secrets et identifiants de mise en ligne | **Oui** : la production peut encore dépendre d'un identifiant personnel           | Recenser puis remplacer sous comptes entreprise — Malik — 23 juillet                            | Dépôt dans l'organisation de l'entreprise ; applications, adresses d'événements, clés et identifiants personnels recensés ; remplacements contrôlés par l'entreprise testés avant suppression du compte ou des identifiants de Sam | Garder une archive vérifiée et la version de production actuelle                                                                                                       |
| Hébergement — mise en ligne       | Équipe personnelle de Sam     | Propriétaire et personne autorisée à publier              | Nina propriétaire du nouveau projet ; récupération testée le 23 juillet                                       | Malik publie une page témoin sur une adresse de test qui ne sert aucun client, puis revient à sa version précédente | Intégrations, journaux, stockage et facturation qui ne suivent pas automatiquement  | **Oui** : le projet actif reste sous le compte de Sam                             | Rapprocher chaque dépendance du registre — Malik — 24 juillet                                   | Le projet qui sert réellement les clients appartient au compte de l'entreprise ; la nouvelle équipe effectue une mise en ligne planifiée, vérifie les fonctions critiques et conserve un retour immédiat à la version précédente   | Garder l'ancien projet sans le modifier et le dernier déploiement sain                                                                                                 |
| Base et sauvegarde — données      | Compte de Sam                 | Administrateur de la base et des sauvegardes              | Nina administratrice ; récupération testée le 24 juillet                                                      | Restauration autorisée dans un espace isolé et protégé ; structure, nombre attendu et fichiers contrôlés            | Stockage des fichiers géré dans un autre service                                    | **Oui** : une base sans ses fichiers ne suffit pas à servir les clients           | Tester séparément le stockage, puis documenter la suppression de la copie — Malik — 25 juillet  | Base et stockage actifs contrôlés par l'entreprise ; restauration protégée exécutée par la nouvelle équipe ; copie isolée traitée selon la procédure                                                                               | Production inchangée ; supprimer la copie isolée selon la procédure                                                                                                    |
| Paiement — abonnements            | RelanceSimple                 | Développeur pouvant consulter les identifiants techniques | Nina propriétaire du compte — rôle `Account Owner` dans Stripe ; récupération entreprise testée le 25 juillet | Intégration équivalente réussie dans l'espace de test Stripe sans facturation réelle                                | Identifiants et adresse de réception des événements de production                   | **Oui** : un abonnement peut être encaissé sans être correctement signalé au SaaS | Vérifier banque, facturation, récupération, alertes et configuration active — Nina — 26 juillet | Rôle, banque, récupération et alertes vérifiés ; configuration active inventoriée ; après tout changement d'identifiant ou d'adresse, événement attendu observé sans facturation improvisée                                        | Ne rien changer sur le compte actif avant validation ; rétablir la configuration précédente si le contrôle échoue                                                      |
| Domaine et réglages DNS — adresse | Nina                          | Contact technique et administrateur                       | Nina et Malik ont deux accès nominatifs ; récupération testée le 26 juillet                                   | Nina vérifie le renouvellement et exporte le fichier qui décrit les réglages du domaine                             | Carte de renouvellement à confirmer                                                 | **Oui** : l'entreprise pourrait perdre le renouvellement ou se verrouiller dehors | Confirmer la carte et les coordonnées — Nina — 26 juillet                                       | Deux accès entreprise fonctionnent, récupération et paiement sont vérifiés, une copie datée des réglages existe                                                                                                                    | Réimporter les réglages précédents en cas d'erreur                                                                                                                     |
| Tâche matinale — relances         | Projet d'hébergement de Sam   | Peut modifier, arrêter et déclencher la tâche             | Malik administrateur du projet entreprise ; récupération testée le 26 juillet                                 | Une exécution avec 18 dossiers synthétiques et des destinataires contrôlés produit une seule relance                | Possibilité d'une seconde exécution encore en attente                               | **Oui** : deux tâches pourraient envoyer deux relances                            | Vérifier l'arrêt et la liste des tâches encore en attente — Malik — 27 juillet                  | Planification active rattachée au compte entreprise ; bascule préparée ; prochaine exécution attendue observée une seule fois ; alerte reçue par l'entreprise                                                                      | Confirmer que la nouvelle planification est arrêtée et qu'aucune exécution reste en attente, puis réactiver l'ancienne ; contrôler qu'une seule relance a été produite |
| Authentification — connexion      | Compte personnel de Sam       | Propriétaire et administrateur du service                 | Nina administratrice avec adresse entreprise ; récupération testée le 27 juillet                              | Nina crée, connecte puis retire un utilisateur fictif sur l'adresse de test                                         | Propriété du service actif et alertes de récupération                               | **Oui** : le test ne transfère pas le service qui connecte les vrais clients      | Transférer le service actif et contrôler ses réglages — Malik — 28 juillet                      | Service actif détenu et facturé par l'entreprise ; compte fictif connecté ; récupération et alertes reçues sans intervention de Sam                                                                                                | Ne modifier aucun réglage actif avant la bascule planifiée ; conserver le réglage précédent                                                                            |
| Courriels — envoi                 | Compte de Sam                 | Propriétaire et gestionnaire du domaine d'envoi           | Nina administratrice ; récupération testée le 27 juillet                                                      | Courriel transactionnel reçu uniquement sur deux adresses de test contrôlées                                        | Domaine d'envoi, facturation et limites du compte actif                             | **Oui** : un test isolé ne prouve pas que les courriels réels partiront           | Contrôler domaine et compte actif — Malik — 28 juillet                                          | Compte actif détenu et facturé par l'entreprise ; domaine validé ; message contrôlé envoyé depuis la configuration active vers une adresse de test, sans liste client                                                              | Rétablir l'ancien réglage d'envoi et garder toute liste réelle bloquée pendant le contrôle                                                                             |
| Fichiers — PDF clients            | Stockage lié au compte de Sam | Propriétaire et administrateur du stockage                | Nina administratrice ; récupération testée le 27 juillet                                                      | Ajout, lecture et suppression d'un faux PDF dans l'espace de test                                                   | Propriété, facturation, conservation et sauvegarde du stockage actif                | **Oui** : les vrais fichiers peuvent rester hors du contrôle de l'entreprise      | Vérifier un fichier autorisé selon la procédure protégée — Malik — 28 juillet                   | Stockage actif détenu et facturé par l'entreprise ; nouvelle équipe retrouve un fichier autorisé et supprime le faux fichier de test                                                                                               | Garder le stockage de production inchangé jusqu'à la bascule et supprimer les faux fichiers                                                                            |
| Surveillance et support — alertes | Boîte et outil de Sam         | Administrateur et destinataire principal                  | Nina contrôle la boîte support ; Malik administre les alertes ; récupérations testées le 28 juillet           | Ticket fictif attribué et alerte de test reçue par deux personnes                                                   | Personne de garde et délai de traitement                                            | **Oui** : une panne peut rester invisible après le départ                         | Écrire qui répond à chaque type d'alerte — Nina — 29 juillet                                    | Alertes actives envoyées à deux personnes de l'entreprise ; incident fictif reçu, attribué, traité et clos sans Sam                                                                                                                | Réacheminer temporairement les alertes vers la boîte d'entreprise documentée                                                                                           |

Les dossiers utilisés pour le parcours fonctionnel sont entièrement fictifs et
ne proviennent pas de la base clients. Pour un vrai SaaS, tester une restauration
de données personnelles est un contrôle séparé : autorisation, espace isolé,
protections équivalentes à la production et suppression encadrée. Le registre ne
remplace ni le contrat ni un audit de sécurité.

## 7. L'ordre suivi par RelanceSimple — votre durée dépend des contrôles réussis

Les dates donnent un rythme au récit de RelanceSimple ; elles ne constituent ni
une norme ni une promesse. L'équipe passe à l'étape suivante lorsqu'elle a obtenu
le résultat annoncé, même si cela prend moins ou plus de trente jours.

| Période indicative | Travail                                                                                                                  | Porte avant la suite                                                                                        |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------- |
| Jours 1 à 3        | Nommer le responsable, geler les changements inutiles, ouvrir le registre                                                | Clients servis, version active identifiée, alertes reçues                                                   |
| Jours 4 à 7        | Ajouter les accès entreprise et leurs moyens de récupération                                                             | Deux personnes autorisées entrent dans chaque service vital                                                 |
| Semaine 2          | Construire et parcourir le produit avec des données fictives ; restaurer séparément une sauvegarde dans l'espace protégé | Publication témoin, parcours fictifs et restauration réussis                                                |
| Semaine 3          | Vérifier paiements en test, courriels, tâche matinale, support et retour arrière                                         | Aucun acte réel improvisé sur un abonnement ; chaque résultat et retour arrière sont observés               |
| Semaine 4          | Transférer ou réduire les accès un service à la fois et surveiller                                                       | Condition de retrait remplie ligne par ligne ; inconnues critiques à zéro ou décision explicite de reporter |

Le plan s'arrête si un compte n'est pas récupérable, un droit est contesté, une
sauvegarde échoue, des données paraissent compromises ou la situation devient un
incident. « Le 30e jour est arrivé » n'est jamais une condition suffisante.

## 8. Plan public annoté et empreinte éditoriale

1. **Le code ne fait pas tourner seul votre SaaS** — ouverture verrouillée et
   réponse en moins de 150 mots ; comptes critiques nommés immédiatement.
2. **Commencez par protéger les clients, pas par juger le code** — maintien
   temporaire de la version en place, consigne « ne changez que ce qui est
   nécessaire » et responsable nommé.
3. **Passez en revue les dix fonctions de RelanceSimple** — retirez celles qui
   n'existent pas dans votre SaaS, ajoutez ses services propres, puis utilisez la
   fiche vierge.
4. **Ajoutez un accès entreprise avant d'en retirer un** — compte, récupération,
   authentification et règle spéciale en cas d'incident.
5. **Vérifiez séparément produit, restauration et paiements** — données fictives,
   restauration protégée, paiement dans le bac à sable expliqué comme espace de
   test du fournisseur.
6. **Ne supposez pas qu'un transfert emporte tout** — faits GitHub, Vercel et
   branche même compte/nouveau compte de paiement ; `webhook` devient « adresse
   qui reçoit les événements », `zone DNS` « réglages du domaine » et `clé de
déploiement` « identifiant permettant la mise en ligne » au premier emploi.
7. **Préparez les preuves avant l’échéance, puis désactivez l’accès** — chaque
   ligne porte une condition observable et un retour arrière ; tout maintien
   après la fin du contrat exige une prolongation écrite et bornée.
8. **Décidez de la suite sans réécriture réflexe** — maintenir, préparer un audit
   ciblé, migrer un service, arrêter proprement ou traiter un litige ailleurs.

**Empreinte :** une passation vécue par Nina et Malik, organisée autour de dix
lignes qui changent d'état. Pas de diagnostic exhaustif de code, pas de score sur
100, pas de catastrophe mise en scène, pas de checklist générique de propriété.

## 9. FAQ, conversion et maillage

FAQ retenue, maximum dix : le dépôt suffit-il ; quels accès demander ; faut-il
couper immédiatement ; qui doit détenir les comptes ; comment tester sans toucher
les clients ; que faire des paiements ; sauvegarde ou restauration ; droits sur
le code ; faut-il réécrire ; combien de temps prévoir.

- **Résultat autonome :** dix lignes remplies, chacune avec contrôle,
  condition de retrait et retour arrière.
- **Conclusion « ne pas investir » :** possible si le produit n'est plus utilisé
  ou si sa continuité n'a plus de valeur, après traitement des clients, données,
  contrats et obligations applicables.
- **Bon cas d'usage :** SaaS actif, départ organisé, comptes identifiables,
  volonté de préserver les clients.
- **Mauvais cas d'usage :** intrusion active, litige, demande de garantie,
  titularité contestée ou besoin d'avis juridique spécialisé.
- **CTA :** « Faire vérifier mon registre de passation » vers
  `/demarrer-un-projet` ; Quentin Hagnéré relit directement la demande, objectif
  de réponse le jour ouvré suivant sans délai garanti, liberté de ne commander
  aucune prestation.

### Maillage

Sortants : `reprendre-logiciel-metier-existant` pour l'audit général,
`reprendre-mvp-vibe-code` pour les générateurs, `proprietaire-site-internet-code-source`
pour les droits et comptes, `contrat-tma-application` pour la suite et
`/services/maintenance-evolution` pour l'accompagnement.

Entrants prévus :

- `reprendre-logiciel-metier-existant`, à la bifurcation outil interne / SaaS vendu ;
- `contrat-tma-application`, avant de négocier la maintenance d'un produit repris.

### Métadonnées proposées

```text
Title : Départ du développeur SaaS : que reprendre ? · Hagnéré Code
Card title : Votre développeur SaaS part : quels accès reprendre ?
Meta : Votre développeur part ? Vérifiez code, comptes, paiements, données,
domaine et support avant de retirer ses accès ou de décider une refonte.
H1 : Comment reprendre un SaaS développé par un freelance ?
Section : Préparer son projet
```

## 10. Porte P1 — en attente du dernier contre-audit

- [x] intention distincte de la reprise générale ;
- [x] requêtes et résultats observés consignés ;
- [x] sources officielles et limites placées dans une matrice ;
- [x] paiements traités selon deux branches ;
- [x] données fictives séparées de la restauration protégée ;
- [x] droit français borné sans conclusion contractuelle ;
- [x] exemple entièrement fictif annoncé avant les valeurs ;
- [x] dix lignes de registre réellement remplies et fiche vierge prévue ;
- [x] mots de passe, clés, codes de récupération et données bancaires exclus du registre ;
- [x] accès précis du freelance, récupération entreprise et manque bloquant consignés ;
- [x] test isolé séparé du contrôle du service réellement utilisé par les clients ;
- [x] contrôles de bascule achevés avant l’échéance et désactivation à la fin du
      contrat, sauf prolongation écrite et bornée ;
- [x] plan public annoté et architecture non calquée sur les guides précédents ;
- [x] CTA, bon/mauvais cas d'usage et liens entrants prévus.

Verdict auteur P1 : **porte validée après double contre-audit indépendant**.

## 11. Rapport P1 — Recherche et architecture

```text
PASSE 1 TERMINÉE — PASS
Intention : départ du développeur d'un SaaS déjà utilisé et payé ; organiser la
passation sans confondre dépôt de code, comptes techniques et produit en service.
SERP : quatre requêtes observées sur Google Web depuis la France ; cinq résultats
consignés avec leurs limites, sans déduire volume ni position future.
Sources : Légifrance, CNIL, GitHub, Vercel, Stripe et OWASP ; faits officiels,
bonne pratique documentée et recommandations Hagnéré Code sont séparés.
Artefact : registre de dix fonctions. Chaque fiche nomme titulaire, accès précis
du freelance, récupération entreprise, contrôle daté, manque, caractère bloquant,
action, condition de retrait et solution de secours. Aucun secret n'y est stocké.
Sécurité d'usage : les tests synthétiques sont séparés de la restauration protégée
et du contrôle du service actif ; ils sont préparés avant l’échéance, puis les
accès expirés sont désactivés sauf prolongation écrite et bornée.
Contre-audits : deux lecteurs indépendants ; 0 P0, 0 P1 après corrections. Les
cartes verticales et les mots techniques traduits sont imposés à P2/P4.
Verdict : la rédaction publique P2 peut commencer sur ce gel.
Snapshot : docs/research/manifests/reprendre-saas-developpe-par-freelance-p1.sha256
```

## 12. Rapport P2 — Rédaction et intégration

PASSE 2 TERMINÉE — PASS AUTEUR

- Page : /guides/reprendre-saas-developpe-par-freelance.
- Ouverture : départ du freelance, clients et paiements actifs ; réponse immédiate
  en langage dirigeant avant tout détail technique.
- Forme propre : récit fictif RelanceSimple et dix fiches verticales. Chaque fiche
  affiche le compte, l'accès précis de Sam, le contrôle entreprise, le manque
  bloquant, l'action, la condition de retrait et la solution de secours.
- Action autonome : fiche vierge de dix champs ; aucun mot de passe, clé, code de
  récupération ni donnée bancaire ne doit y être copié.
- Sources visibles : GitHub et Vercel près des limites de transfert ; CNIL près des
  tests et sauvegardes ; Stripe près des deux branches de paiement ; Légifrance
  près des limites sur les droits.
- Pédagogie : termes DNS, événements, identifiants de mise en ligne et environnement
  de test traduits au premier emploi ; test isolé, restauration protégée et service
  actif sont trois contrôles distincts.
- Conversion : un seul CTA après la démonstration, avec résultat, répondant, objectif
  de délai non garanti et absence d'obligation de commander.
- Profondeur : 3 298 mots visibles, neuf FAQ et lecture calculée à 16 minutes.
- Intégration : entrée registre sous porte éditoriale, image sociale dédiée, deux
  liens entrants contextuels et quatre guides liés.
- Contrôles : Prettier, ESLint, TypeScript et 184/184 tests SEO passent ; build
  compilé sur 110 routes. La durée provisoire de 18 minutes a été corrigée à 16
  avant le gel P2.
- Verdict : le contre-audit P3 indépendant peut commencer sur ce gel.
- Snapshot : docs/research/manifests/reprendre-saas-developpe-par-freelance-p2.sha256

## 13. Rapport P3 — Contre-audit indépendant

PASSE 3 TERMINÉE — PASS APRÈS CORRECTIONS

- Lecteur : agent indépendant, sans modification du guide et sans accès aux
  décisions de rédaction de P2.
- Verdict initial : 0 P0, 1 P1 et 3 P2. Le P1 signalait un doublon de phrase qui
  n'était plus présent dans le gel relu par l'auteur ; la formulation correcte a
  néanmoins été vérifiée mot pour mot dans la page.
- Corrections P2 appliquées : « journaux » a été remplacé au premier emploi par
  « historique technique des événements » ; « trois preuves » est devenu
  « trois contrôles » ; la distinction déroutante entre dossiers synthétiques et
  clients fictifs a été remplacée par une phrase simple indiquant que les essais
  n'utilisent pas la base clients.
- Points validés : ouverture immédiatement compréhensible, dix fiches utiles,
  garde-fous opérationnels, fiche vierge autonome, sources adjacentes, FAQ utile,
  alternatives honnêtes et CTA unique placé après la démonstration.
- Verdict : 0 P0, 0 P1 après corrections. La P4 peut commencer sur ce gel.
- Snapshot :
  `docs/research/manifests/reprendre-saas-developpe-par-freelance-p3.sha256`.

## 14. Rapport P4 — Plume humaine, technique et rendu réel

PASSE 4 TERMINÉE — PASS

- Plume finale : les trois formulations signalées en P3 ont été simplifiées sans
  appauvrir le contrôle opérationnel. Aucun ajout commercial ni nouveau chiffre
  n'a été introduit après le contre-audit.
- Rendu réel : page inspectée dans le navigateur sur le build de production aux
  largeurs exactes 320, 390, 768, 1024 et 1440 px. Les cinq vues ont un seul H1,
  dix fiches de passation, un seul CTA éditorial et aucun débordement horizontal.
- Inspection visuelle : en-têtes mobile et bureau, première fiche, CTA mobile,
  guides liés et première réponse de FAQ ouverte. Les textes restent lisibles,
  les cartes se replient en une colonne et aucune action n'est masquée.
- Métadonnées : titre, description et canonique de production conformes ; la
  prévisualisation locale reste volontairement `noindex, nofollow` tant que le
  lot n'a pas franchi le gel global. Données structurées limitées à `Article` et
  `BreadcrumbList`, sans FAQPage ni HowTo.
- Image sociale : réponse 200, PNG 1200 × 630, 170 245 octets ; contenu et marges
  inspectés visuellement.
- Contrôles : Prettier, ESLint, TypeScript et build Next.js réussis ; 110 routes
  compilées. Les 184 tests SEO passent. L'artefact de recherche contrôle 88 URL,
  52 temps de lecture et 164 blocs JSON-LD.
- Décision : guide terminé et maintenu sous porte éditoriale jusqu'au gel des dix
  guides. Aucun défaut P0 ou P1 ne subsiste.
- Snapshot :
  `docs/research/manifests/reprendre-saas-developpe-par-freelance-p4.sha256`.
