# Registre des activités de traitement — HAGNÉRÉ CODE SAS

> **Document interne — article 30 du RGPD.**
> À tenir à jour, à présenter à la CNIL en cas de contrôle.
> Dernière mise à jour : 2026-04-28.

## Identité du responsable de traitement

- **Raison sociale** : HAGNÉRÉ CODE SAS
- **Adresse** : 82 impasse de Bellevue, 73000 Bassens, France
- **SIREN** : 993 672 856
- **Représentant légal** : Quentin Hagnéré (président)
- **Contact RGPD** : quentin@hagnere-patrimoine.fr
- **DPO** : non désigné à ce jour ; la nécessité d'une désignation est réévaluée selon l'article 37 RGPD et l'évolution des traitements

## Traitements opérés

### T1 — Formulaire de contact / cadrage projet (`/demarrer-un-projet`)

| Champ | Détail |
|---|---|
| Finalité | Qualification de prospects, préparation de devis |
| Base légale | Mesures précontractuelles (art. 6.1.b RGPD) + consentement (art. 6.1.a) pour champs facultatifs |
| Catégories de personnes | Prospects B2B (dirigeants, CTO, responsables produit) |
| Catégories de données | Identité (prénom, nom), email, téléphone, fonction, société, SIREN, description projet, contraintes, budget, audio dictée vocale (transitoire) |
| Destinataires | Équipe HAGNÉRÉ CODE (commercial + tech) |
| Sous-traitants | Neon (DB UE), Resend (email US — DPF/SCC), Groq (transcription audio US — SCC), Cloudflare (hébergement edge) |
| Transferts hors UE | Oui (US) — encadrés par DPF + SCC |
| Durée de conservation | 3 ans après dernier contact (prospects), durée contrat + 3 ans (clients), 10 ans (factures) ; purge selon `docs/procedure-purge-donnees.md` |
| Mesures techniques | TLS 1.3, AES-256 at-rest, rate-limit, honeypot, slug aléatoire (anti-IDOR) |
| Profilage / décisions automatisées | Non — le brief de projet est lu et traité par un humain (réponse manuelle) |

### T2 — Formulaire de contact (footer `ContactProjectSection`)

| Champ | Détail |
|---|---|
| Finalité | Contact général, prise de RDV |
| Base légale | Mesures précontractuelles (art. 6.1.b) |
| Données | Identité, email, téléphone, message |
| Sous-traitants | Resend, Neon |
| Durée | 3 ans après dernier contact ; purge selon `docs/procedure-purge-donnees.md` |
| Profilage | Non |

### T3 — Logs d'application et de sécurité

| Champ | Détail |
|---|---|
| Finalité | Sécurité, prévention fraude, debug |
| Base légale | Intérêt légitime (art. 6.1.f) |
| Données | IP, user-agent, statut requête, timestamp |
| Sous-traitants | Cloudflare, Neon |
| Durée | 12 mois maximum ; purge selon `docs/procedure-purge-donnees.md` |
| Profilage | Non |

### T4 — Logs IA (`ai_call_log`)

| Champ | Détail |
|---|---|
| Finalité | Rate-limit persistant, circuit breaker coût, métriques produit |
| Base légale | Intérêt légitime (art. 6.1.f) |
| Données | IP, hash email tronqué, statut, tokens, durée |
| Durée | 12 mois ; purge selon `docs/procedure-purge-donnees.md` |
| Profilage | Non |

### T5 — Données clients sous contrat (sous-traitance pour le compte du client)

| Champ | Détail |
|---|---|
| Finalité | Exécution de la prestation (dev, TMA, audit) |
| Base légale | Exécution du contrat (art. 6.1.b) |
| Rôle HAGNÉRÉ CODE | Sous-traitant au sens de l'art. 28 RGPD |
| Cadre contractuel | DPA (article 28) inclus aux CGV ou en annexe |
| Données | Variables selon le contrat client — registre détaillé tenu par client |
| Sous-traitants ultérieurs | Documentés dans le DPA, autorisation écrite du client requise |
| Durée | Définie au contrat, restitution ou suppression à la fin |

## Mesures de sécurité transverses

- Headers HTTP : HSTS preload, X-Content-Type-Options, X-Frame-Options, Permissions-Policy, Content-Security-Policy
- MFA exigée par la politique d'accès et vérifiée avant l'ouverture d'un accès au dépôt
- Accès production accordés au strict nécessaire, inventoriés et révocables
- Sauvegardes, rétention, RPO et RTO vérifiés dans la configuration du fournisseur réellement retenu
- Rotation des secrets selon leur sensibilité, l'exposition et les capacités du fournisseur
- Pas de secret commit (`.gitignore` couvre `.env.local`)
- Sensibilisation RGPD documentée lors de l'onboarding et revue périodiquement

## Évaluations d'impact (AIPD)

Aucun traitement réalisé sur ce site ne déclenche les critères de l'article 35 RGPD imposant une AIPD :
- pas de traitement à grande échelle de données sensibles ;
- pas de profilage avec effets juridiques ;
- pas de surveillance systématique d'une zone publique.

Une AIPD est conduite ad hoc lorsqu'un client souhaite confier à HAGNÉRÉ CODE un traitement à risque élevé (art. 28.3.f).

## Procédure de mise à jour

- Tout nouveau traitement (formulaire, intégration tierce, fonctionnalité IA) déclenche une mise à jour de ce registre **avant** mise en production.
- Revue annuelle complète au 1er trimestre.
- Toute violation déclenche le protocole `/docs/procedure-incident-rgpd.md`.
