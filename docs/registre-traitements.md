# Registre des activités de traitement — HAGNERE CODE

> Document interne de travail au titre de l'article 30 du RGPD.
> Dernière mise à jour documentaire : 2026-07-20.

## Identité du responsable de traitement

- **Responsable** : HAGNERE CODE, SASU au capital de 10 €
- **Nom commercial** : Hagnéré Code
- **SIREN / RCS** : 993 672 856 / RCS Chambéry
- **Siège actuellement inscrit au RNE** : 7 rue Ernest Filliard, 73000 Chambéry
- **Adresse d'activité et de correspondance** : 82 impasse de Bellevue, 73000 Bassens (transfert de siège en cours)
- **Représentant et contact vie privée** : Quentin Hagnéré, président — quentin@hagnere-patrimoine.fr
- **DPO** : non désigné ; le contact ci-dessus ne porte pas le titre de DPO

## T1 — Demandes de contact et briefs de projet

| Élément | Description |
|---|---|
| Personnes | Prospects et interlocuteurs de clients professionnels |
| Finalités | Répondre, qualifier un besoin, préparer un rendez-vous, un devis ou un contrat |
| Base légale | Mesures précontractuelles demandées par la personne (art. 6.1.b) ; intérêt légitime pour la sécurité (art. 6.1.f) |
| Données | Identité, coordonnées, société, rôle, SIREN, description, contraintes, budget, échéance, métadonnées IP/user-agent |
| Source | Personne concernée ; données publiques d'entreprise via l'API Recherche Entreprises |
| Obligatoire | Champs marqués comme requis pour pouvoir répondre ; autres champs facultatifs |
| Destinataires | Personnes habilitées chez HAGNERE CODE ; Vercel, Neon, Resend et Google Workspace selon l'étape |
| Conservation | Prospect : jusqu'à 3 ans après le dernier échange utile ; client : durée de la relation puis durée de preuve ; factures : 10 ans |
| Décision automatisée | Aucune décision produisant un effet juridique ; réponse et devis humains |

## T2 — Messagerie et prise de rendez-vous

| Élément | Description |
|---|---|
| Finalités | Recevoir et envoyer des messages transactionnels ; organiser un rendez-vous |
| Base légale | Mesures précontractuelles ou exécution du contrat ; intérêt légitime pour le suivi des échanges |
| Données | Adresses, en-têtes, contenu des messages, pièces jointes, créneau et informations saisies |
| Destinataires | Resend pour l'envoi transactionnel, Google Workspace pour la boîte professionnelle ; Calendly après action volontaire |
| Conservation | Alignée sur le dossier prospect ou client ; conservation propre des fournisseurs à vérifier dans les réglages contractuels |

## T3 — Dictée vocale facultative

| Élément | Description |
|---|---|
| Finalité | Transcrire un message dicté en texte |
| Base légale | Mesure précontractuelle demandée par l'utilisateur lorsqu'il active volontairement la dictée |
| Données | Flux audio, métadonnées techniques, transcription |
| Destinataires | Vercel pour la route serveur ; Groq pour la transcription |
| Conservation | HAGNERE CODE ne persiste pas volontairement l'audio ; Groq indique une journalisation possible jusqu'à 30 jours par défaut sauf option ZDR effectivement activée |
| Alternative | Saisie clavier disponible sans Groq |

## T4 — Journaux applicatifs et limitation des abus

| Élément | Description |
|---|---|
| Finalités | Sécurité, prévention du spam, limitation de coût, diagnostic et preuve d'incident |
| Base légale | Intérêt légitime de protéger le service et ses utilisateurs (art. 6.1.f) |
| Données | IP, user-agent, service, statut, motif de blocage, hash tronqué d'email, volume et durée |
| Destinataires | Personnes techniques habilitées ; Vercel et Neon |
| Conservation | 12 mois maximum dans `ai_call_log` ; purge contrôlée selon `docs/procedure-purge-donnees.md` |
| Profilage | Aucun profil commercial ; compteurs anti-abus sur fenêtres glissantes |

## T5 — Brouillon local et mesure facultative

| Élément | Description |
|---|---|
| Finalités | Éviter la perte d'un brouillon ; mémoriser un choix de traceurs ; mesurer facultativement des étapes |
| Base légale | Service demandé pour le brouillon ; consentement pour l'analytics (art. 6.1.a et art. 82 loi Informatique et Libertés) |
| Données | Brouillon dans le navigateur ; choix ; nom d'événement, chemin sans query et propriétés primitives |
| Conservation | Brouillon 30 jours ; choix 183 jours ; clés analytics limitées à la session |
| État actuel | Analytics désactivé sans bannière ; collecteur Cloudflare non opérationnel dans la production Vercel actuelle |
| Identifiant | Aucun identifiant publicitaire ou persistant ajouté au payload applicatif |

## T6 — Prestations réalisées pour le compte d'un client

| Élément | Description |
|---|---|
| Rôle | À qualifier par traitement : HAGNERE CODE peut être sous-traitant, responsable conjoint ou responsable distinct |
| Cadre | Contrat et DPA complétés avant traitement lorsque l'article 28 s'applique |
| Instructions | Finalités, catégories, personnes, durée, mesures, transferts et sous-traitants décrits dans les annexes de la mission |
| Fin de contrat | Restitution ou suppression selon les instructions et obligations légales |

## Prestataires et transferts à contrôler

La liste publique actuelle recense Vercel, Neon, Plus Five Five/Resend, Google
Workspace, Groq et Calendly selon les fonctions activées. Avant une nouvelle
mission, le responsable doit vérifier l'entité contractante, la région, les
sous-traitants, la rétention et le mécanisme de transfert réellement applicables.
Une région européenne ne suffit pas à exclure tout accès depuis un pays tiers.
Les DPA, certifications DPF et clauses contractuelles types invoqués doivent
être archivés ; en leur absence, ne pas les présenter comme garantis.

## Mesures organisationnelles et techniques

- accès limités aux personnes qui en ont besoin et révocation lors d'un changement de rôle ;
- secrets hors du dépôt et variables séparées par environnement ;
- validation serveur, limitation d'abus et contrôles anti-robot ;
- chiffrement des échanges via HTTPS et configuration de sécurité révisée ;
- sauvegardes, restauration, journalisation et continuité définies selon le service réellement retenu ;
- procédure d'incident documentée dans `docs/procedure-incident-rgpd.md` ;
- procédure de purge documentée et exécution à tracer ;
- mise à jour du registre avant la mise en production d'un nouveau traitement.

Ces mesures doivent être vérifiées en pratique. Le registre ne constitue pas à
lui seul une preuve d'exécution, de sauvegarde ou de purge.

## Analyse de risque et AIPD

Le screening actuel du site vitrine n'identifie pas de traitement manifeste de
données sensibles à grande échelle, de surveillance systématique d'une zone
publique ou de décision automatisée significative. Cette conclusion doit être
réévaluée avant toute mission présentant plusieurs critères de risque élevé.
Une AIPD est réalisée lorsqu'elle est requise ; elle ne doit pas être déclarée
achevée avant validation effective.

## Gouvernance

1. Revue du registre lors de chaque nouveau fournisseur ou finalité.
2. Revue générale au moins annuelle.
3. Contrôle trimestriel de la procédure de purge tant qu'elle n'est pas automatisée et auditée.
4. Conservation d'une preuve des vérifications, contrats, purges et incidents, sans recopier inutilement des données personnelles.
5. Mise à jour coordonnée des pages `/legal/confidentialite` et `/legal/cookies`.
