# Template d'accord de sous-traitance (DPA) — HAGNÉRÉ CODE SAS

> **Document interne — à annexer à chaque contrat client impliquant un traitement de données personnelles pour le compte du client.**
> Conforme à l'article 28 du RGPD.
> Dernière mise à jour : 2026-04-28.

---

## ACCORD DE SOUS-TRAITANCE DE DONNÉES PERSONNELLES

### ENTRE LES SOUSSIGNÉS

**[CLIENT]**, [forme juridique], dont le siège social est à [adresse], immatriculée au RCS de [ville] sous le numéro [SIREN], représentée par [représentant], en qualité de [qualité],

ci-après dénommée le **« Responsable de traitement »**,

**ET**

**HAGNÉRÉ CODE SAS**, société par actions simplifiée à capital variable, dont le siège social est sis 82 impasse de Bellevue, 73000 Bassens, immatriculée au RCS de Chambéry sous le numéro 993 672 856, représentée par Quentin Hagnéré, en qualité de président,

ci-après dénommée le **« Sous-traitant »**.

---

### ARTICLE 1 — OBJET

Le présent accord a pour objet de définir les conditions dans lesquelles le Sous-traitant s'engage à traiter, pour le compte du Responsable de traitement, les données à caractère personnel décrites ci-après. Il complète le contrat de prestations conclu entre les parties (ci-après « Contrat principal ») et précise les obligations respectives au regard du règlement (UE) 2016/679 (RGPD).

### ARTICLE 2 — DESCRIPTION DU TRAITEMENT

| Champ | Contenu |
|---|---|
| Nature des opérations | [collecte, stockage, modification, consultation, suppression, hébergement applicatif, etc.] |
| Finalité | [exécution de la prestation décrite dans le Contrat principal] |
| Durée | [durée du Contrat principal + 30 jours pour restitution / suppression] |
| Catégories de personnes | [utilisateurs finaux, salariés, prospects, clients, etc.] |
| Catégories de données | [identification, contact, données métier, données techniques, etc.] |

### ARTICLE 3 — OBLIGATIONS DU SOUS-TRAITANT

Le Sous-traitant s'engage à :

1. **Traiter les données uniquement sur instructions documentées** du Responsable de traitement, y compris pour les transferts hors Union européenne, sauf obligation légale contraire qu'il signale alors immédiatement.
2. **Garantir la confidentialité** des données. Toute personne autorisée à les traiter est soumise à un engagement de confidentialité.
3. **Mettre en œuvre les mesures techniques et organisationnelles appropriées** pour assurer un niveau de sécurité adapté au risque, et notamment :
   - chiffrement des données en transit (TLS 1.3 minimum) et au repos (AES-256) ;
   - contrôle d'accès basé sur les rôles (RBAC) ;
   - journalisation des accès aux données ;
   - sauvegardes régulières testées en restauration ;
   - tests de résilience et de continuité du service.
4. **Notifier sans délai** le Responsable de traitement de toute violation de données à caractère personnel, dans un délai maximum de **24 heures** après en avoir pris connaissance.
5. **Aider le Responsable de traitement** à respecter ses obligations, notamment :
   - répondre aux demandes d'exercice de droits des personnes concernées (accès, rectification, effacement, opposition, portabilité, limitation) sous 5 jours ouvrés ;
   - réaliser une analyse d'impact relative à la protection des données (AIPD) si requise ;
   - notifier les violations à l'autorité de contrôle.
6. **À la fin de la prestation**, et selon le choix exprimé par le Responsable de traitement :
   - restituer l'ensemble des données dans un format structuré, courant et lisible par machine ;
   - ou supprimer toutes les copies, sauf obligation légale de conservation.
7. **Mettre à disposition** du Responsable de traitement toute information nécessaire pour démontrer le respect du présent accord, et permettre la réalisation d'audits dans des conditions raisonnables.

### ARTICLE 4 — SOUS-TRAITANTS ULTÉRIEURS

Le Sous-traitant ne peut faire appel à un sous-traitant ultérieur sans **autorisation écrite préalable, spécifique ou générale**, du Responsable de traitement.

Les sous-traitants ultérieurs actuels sont :

| Sous-traitant | Finalité | Localisation | Encadrement |
|---|---|---|---|
| Neon, Inc. | Hébergement base de données PostgreSQL | UE (Frankfurt) | Aucun transfert hors UE |
| Cloudflare, Inc. | Hébergement Workers + CDN | Edge mondial | DPF + SCC |
| Resend, Inc. | Envoi d'emails transactionnels | États-Unis | DPF + SCC |
| Groq, Inc. | Transcription audio Whisper | États-Unis | SCC + audio non conservé |

Le Sous-traitant impose à chaque sous-traitant ultérieur les mêmes obligations de protection des données par contrat. En cas de défaillance, il demeure pleinement responsable devant le Responsable de traitement.

### ARTICLE 5 — TRANSFERTS HORS UE

Les transferts vers les États-Unis listés ci-dessus sont encadrés par :
- l'adhésion du sous-traitant au EU-US Data Privacy Framework (DPF) lorsque celle-ci est en vigueur, OU
- les clauses contractuelles types adoptées par la décision (UE) 2021/914.

Une copie de ces garanties est tenue à disposition du Responsable de traitement.

### ARTICLE 6 — DROITS DES PERSONNES CONCERNÉES

Lorsqu'une personne concernée exerce un de ses droits (art. 15 à 22 RGPD) directement auprès du Sous-traitant, celui-ci en informe le Responsable de traitement sous 48 heures et lui transmet la demande pour traitement.

### ARTICLE 7 — DOCUMENTATION ET REGISTRE

Le Sous-traitant tient un registre des activités de traitement effectuées pour le compte du Responsable de traitement, contenant les informations exigées par l'article 30.2 du RGPD.

Ce registre est mis à disposition du Responsable de traitement et de l'autorité de contrôle compétente sur demande.

### ARTICLE 8 — RESPONSABILITÉ

Sans préjudice des responsabilités définies dans le Contrat principal, chaque partie répond des dommages causés par tout traitement effectué en violation du RGPD ou du présent accord, dans les limites prévues par les articles 82 du RGPD et applicables au Contrat principal.

### ARTICLE 9 — DURÉE — RÉSILIATION

Le présent accord prend effet à la date de signature et reste en vigueur pendant toute la durée du Contrat principal. Il survit en tant que de besoin pour assurer la restitution / suppression des données et la réalisation des éventuels audits.

### ARTICLE 10 — DROIT APPLICABLE

Le présent accord est soumis au droit français. Tout litige relève des juridictions compétentes désignées dans le Contrat principal.

---

**Fait en deux exemplaires originaux, à _____________, le _____________.**

| Responsable de traitement | Sous-traitant |
|---|---|
| [CLIENT] | HAGNÉRÉ CODE SAS |
| [Représentant], [qualité] | Quentin Hagnéré, président |
| Signature : | Signature : |
