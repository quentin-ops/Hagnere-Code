# Registre des activités de traitement — HAGNERE CODE

> Document interne de travail au titre de l'article 30 du RGPD.
> Dernière mise à jour documentaire : 2026-07-20.

Ce registre décrit les traitements et les exigences à contrôler. Une mention
« à vérifier », une politique fournisseur ou une ligne de ce document ne vaut
pas preuve de mise en œuvre. Les contrats, paramètres, résultats de tests,
purges et revues d'accès doivent être archivés séparément.

## Identité du responsable de traitement

- **Responsable** : HAGNERE CODE, SASU au capital de 10 €
- **Nom commercial** : Hagnéré Code
- **SIREN / RCS** : 993 672 856 / RCS Chambéry
- **Siège social et adresse de correspondance** : 82 impasse de Bellevue, 73000 Bassens
- **Représentant et contact vie privée** : Quentin Hagnéré, président — quentin@hagnere-patrimoine.fr
- **DPO** : non désigné ; le contact ci-dessus ne porte pas le titre de DPO

## T1 — Demandes de contact et briefs de projet

| Élément | Description |
|---|---|
| Personnes | Prospects et interlocuteurs de clients professionnels |
| Finalités | Répondre, qualifier un besoin, préparer un rendez-vous, un devis ou un contrat |
| Base légale | Mesures précontractuelles lorsque la personne est partie au futur contrat (art. 6.1.b) ; intérêt légitime pour répondre à un interlocuteur agissant au nom d'une organisation et pour la sécurité (art. 6.1.f) |
| Données | Identité, coordonnées, société, rôle, SIREN, description, contraintes, budget et échéance ; IP et user-agent sont aussi collectés pour la sécurité et relèvent de T4 |
| Source | Personne concernée ; données publiques d'entreprise via l'API Recherche Entreprises |
| Obligatoire | Champs marqués comme requis pour pouvoir répondre ; autres champs facultatifs |
| Destinataires | Personnes habilitées chez HAGNERE CODE ; Vercel, Neon, Resend et Google Workspace selon l'étape |
| Conservation | Prospect : jusqu'à 3 ans après le dernier contact actif pertinent ; client : durée de la relation puis durée nécessaire à la preuve, en principe 5 ans ; factures et pièces comptables : 10 ans |
| Contrôle à effectuer | Vérifier que l'IP et le user-agent ne restent pas attachés au brief au-delà des 12 mois de T4 ; supprimer leur duplication si elle n'est pas nécessaire |
| Décision automatisée | Aucune décision produisant un effet juridique ; réponse et devis humains |

## T2 — Messagerie et prise de rendez-vous

| Élément | Description |
|---|---|
| Finalités | Recevoir et envoyer des messages transactionnels ; organiser un rendez-vous |
| Base légale | Mesures précontractuelles ou contrat lorsque la personne est partie ; intérêt légitime pour répondre et suivre les échanges avec l'interlocuteur d'une organisation ; consentement distinct si une prospection l'exige |
| Données | Adresses, en-têtes, contenu des messages, pièces jointes, créneau et informations saisies |
| Destinataires | Resend pour l'envoi transactionnel, Google Workspace pour la boîte professionnelle ; Calendly après action volontaire |
| Conservation | Alignée sur le dossier prospect ou client ; paramètres et durées propres à Resend, Google Workspace et Calendly à vérifier, archiver et intégrer au cycle d'effacement |

## T3 — Dictée vocale facultative

| Élément | Description |
|---|---|
| Finalité | Transcrire un message dicté en texte |
| Base légale | Consentement (art. 6.1.a), exprimé par l'activation volontaire de « Dicter » après l'information affichée à proximité du bouton ; la saisie clavier reste disponible |
| Données | Flux audio, métadonnées techniques, transcription |
| Destinataires | Vercel pour la route serveur ; Groq pour la transcription |
| Conservation | HAGNERE CODE ne persiste pas volontairement l'audio ; réglage et durée réellement applicables chez Groq à vérifier et archiver avant d'invoquer une option ZDR |
| Alternative et retrait | Saisie clavier disponible sans Groq ; avant l'envoi de l'audio, l'utilisateur peut arrêter ou abandonner la dictée. Le retrait n'affecte pas un traitement déjà effectué à sa demande |

## T4 — Journaux applicatifs et limitation des abus

| Élément | Description |
|---|---|
| Finalités | Sécurité, prévention du spam, limitation de coût, diagnostic et preuve d'incident |
| Base légale | Intérêt légitime de protéger le service et ses utilisateurs (art. 6.1.f) |
| Données | IP, user-agent, service, statut, motif de blocage, hash tronqué d'email, volume et durée ; le hash reste une donnée pseudonymisée, non anonyme |
| Destinataires | Personnes techniques habilitées ; Vercel et Neon |
| Conservation | 12 mois maximum dans `ai_call_log` et pour toute copie d'IP/user-agent dans `project_brief` ; purge ou mise à null contrôlée et tracée selon `docs/procedure-purge-donnees.md` |
| Profilage | Aucun profil commercial ; compteurs anti-abus sur fenêtres glissantes |

## T5 — Brouillon local et mesure facultative

| Élément | Description |
|---|---|
| Finalités | Après activation volontaire, éviter la perte d'un brouillon ; mémoriser un choix de traceurs ; mesurer facultativement des étapes |
| Régime | Exemption de consentement uniquement si le brouillon est strictement nécessaire au service expressément demandé ; consentement pour l'analytics (art. 6.1.a RGPD et art. 82 loi Informatique et Libertés) |
| Données | Brouillon limité aux informations de projet dans l'onglet ; nom, courriel, téléphone, SIREN, société, rôle et accusé de lecture exclus ; choix ; nom d'événement, chemin sans paramètres et propriétés primitives |
| Conservation | Brouillon : 24 heures au plus après la dernière sauvegarde, sans dépasser la session de l'onglet ; choix 183 jours ; clés analytics limitées à la session |
| État actuel | Analytics désactivé sans bannière ; collecteur Cloudflare non opérationnel dans la production Vercel actuelle |
| Identifiant | Aucun identifiant publicitaire ou persistant ajouté au payload applicatif |
| Contrôle à effectuer | Vérifier à chaque évolution que les coordonnées restent exclues, que les anciennes clés durables sont purgées et que l'exemption demeure limitée à ce qui est strictement nécessaire |

## T6 — Prestations réalisées pour le compte d'un client

| Élément | Description |
|---|---|
| Rôle | À qualifier par traitement : HAGNERE CODE peut être sous-traitant, responsable conjoint ou responsable distinct |
| Cadre | Contrat et DPA complétés avant traitement lorsque l'article 28 s'applique |
| Instructions | Finalités, catégories, personnes, durée, mesures, transferts et sous-traitants décrits dans les annexes de la mission |
| Fin de contrat | Restitution ou suppression selon les instructions et obligations légales |

## Registre distinct du Sous-traitant — article 30.2

Pour toute mission où HAGNERE CODE agit comme sous-traitant, une entrée distincte
doit être créée et tenue à jour. Le seul DPA ou la section T6 ne remplace pas ce
registre. Chaque entrée comporte au minimum :

| Élément | À renseigner pour chaque responsable / mission |
|---|---|
| Responsable de traitement | Identité et coordonnées ; représentant et DPO le cas échéant |
| HAGNERE CODE | Coordonnées du Sous-traitant et de son représentant |
| Catégories de traitements | Opérations, catégories de données et personnes, services concernés |
| Sous-traitants ultérieurs | Entités juridiques exactes et opérations confiées |
| Transferts | Pays ou organisation internationale, mécanisme du chapitre V et, si l'article 49.1 second alinéa est utilisé, documentation des garanties appropriées |
| Sécurité | Description générale des mesures techniques et organisationnelles de l'article 32.1 |
| Durée et fin de mission | Critères de conservation, restitution, suppression et sort des sauvegardes |
| Preuves | DPA signé, instructions, annexes, contrôles, incidents, demandes de droits et suppression |

## Prestataires et transferts à contrôler

La liste publique actuelle recense Vercel, Neon, Plus Five Five/Resend, Google
Workspace, Groq et Calendly selon les fonctions activées. Elle ne prouve ni le
plan souscrit, ni l'entité contractante, ni les garanties applicables. Maintenir
une fiche de contrôle par fournisseur :

| Contrôle | Preuve attendue |
|---|---|
| Entité et service | Contrat, facture ou paramètres de compte identifiant l'entité et le plan |
| Rôle et instructions | Qualification responsable/sous-traitant et périmètre du service |
| Localisation | Région de stockage, pays d'accès distant et liste des sous-traitants |
| Encadrement | DPA accepté/signé, version, date et mécanisme de transfert réellement applicable |
| Rétention et effacement | Réglage du compte, documentation contractuelle et procédure de suppression |
| Sécurité | Mesures pertinentes et preuves disponibles, sans recopier une déclaration commerciale non vérifiée |
| Évolution | Mécanisme de notification des changements et date de dernière revue |

Une région européenne ne suffit pas à exclure tout accès depuis un pays tiers.
Les DPA, certifications DPF, décisions d'adéquation et clauses contractuelles
types invoqués doivent être vérifiés pour l'entité et le service concernés puis
archivés. En leur absence, ne pas les présenter comme garantis.

## Mesures organisationnelles et techniques à prouver

| Mesure attendue | Preuve opérationnelle minimale |
|---|---|
| Accès au moindre privilège et révocation | Liste des accès, propriétaire, date de revue et test de révocation |
| MFA et comptes administrateurs | Export ou capture datée des réglages pertinents |
| Secrets séparés des sources et environnements | Inventaire des emplacements et contrôle d'absence dans le dépôt |
| Validation serveur, anti-abus et sécurité applicative | Tests datés, revue de code ou résultat d'audit |
| Chiffrement et configuration HTTPS | Configuration et test datés ; portée du chiffrement au repos précisée |
| Sauvegarde et restauration | Politique fournisseur, date du dernier test, résultat, RPO et RTO |
| Journalisation et supervision | Sources, accès, alertes, durées et test de détection |
| Gestion des vulnérabilités | Responsable, fréquence, correctifs et preuve de suivi |
| Incident | Procédure `docs/procedure-incident-rgpd.md`, contacts testés et exercice périodique |
| Purge et demandes de droits | Résultats datés selon `docs/procedure-purge-donnees.md` |

Une mesure sans preuve ou non testée reste « à vérifier » ; elle ne doit pas être
présentée publiquement ou contractuellement comme garantie acquise.

## Analyse de risque et AIPD

Un screening AIPD daté doit être conservé pour le site et renouvelé à chaque
changement significatif. Il examine notamment les données sensibles, la grande
échelle, la surveillance systématique, le croisement de données, les personnes
vulnérables, l'usage innovant et les décisions produisant des effets importants.
L'absence apparente d'un critère ne constitue pas à elle seule une conclusion.
Si le traitement est susceptible d'engendrer un risque élevé, une AIPD est
réalisée avant sa mise en œuvre et une consultation préalable est engagée si le
risque résiduel élevé ne peut pas être atténué.

## Gouvernance

1. Revue du registre lors de chaque nouveau fournisseur ou finalité.
2. Revue générale au moins annuelle.
3. Contrôle trimestriel de la procédure de purge tant qu'elle n'est pas automatisée et auditée.
4. Revue au moins annuelle des accès, sous-traitants, transferts, durées et mesures de sécurité.
5. Conservation datée des preuves : contrats, paramètres, tests, purges, droits et incidents, sans recopier inutilement des données personnelles.
6. Mise à jour coordonnée des pages `/legal/confidentialite` et `/legal/cookies` avant toute nouvelle finalité ou tout nouveau destinataire.
7. Enregistrement de la date, du responsable et du résultat de chaque contrôle ; une case documentaire non cochée n'est pas une validation.
