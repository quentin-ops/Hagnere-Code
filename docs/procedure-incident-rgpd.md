# Procédure d'incident RGPD — HAGNÉRÉ CODE SAS

> **Document interne — articles 33 et 34 du RGPD.**
> Notification CNIL sous 72 heures, communication aux personnes si risque élevé.
> Dernière mise à jour : 2026-04-28.

## 1. Définitions

**Violation de données à caractère personnel** (art. 4.12 RGPD) :
> Une violation de la sécurité entraînant, de manière accidentelle ou illicite, la destruction, la perte, l'altération, la divulgation non autorisée de données à caractère personnel transmises, conservées ou traitées d'une autre manière, ou l'accès non autorisé à de telles données.

Trois types de violation :
- **Confidentialité** : divulgation, accès non autorisé.
- **Intégrité** : modification non autorisée.
- **Disponibilité** : perte ou destruction.

## 2. Détection — qui peut détecter ?

- Devs internes (alerte Sentry, log anormal, code review).
- Sous-traitant (Neon, Cloudflare, Resend, Groq) qui notifie HAGNÉRÉ.
- Personne concernée elle-même (formulaire contact, droits RGPD).
- Tiers (chercheur en sécurité, journaliste, autorité).

## 3. Chaîne d'alerte — qui contacter immédiatement ?

| Rôle | Personne | Contact |
|---|---|---|
| Référent RGPD | Quentin Hagnéré (président) | hello@hagnere-code.fr · +33 3 74 47 20 18 |
| CTO / sécurité technique | Nicolas Wallerand | via Slack `#incidents` |
| Backup référent | (à définir) | — |

**Activation : Slack `#incidents` + email à hello@hagnere-code.fr + appel téléphonique au président si hors heures ouvrées.**

## 4. Timeline réglementaire

```
T+0h    Détection effective
T+2h    Confinement initial (révoquer accès, isoler)
T+12h   Évaluation du risque (gravité × probabilité)
T+24h   Décision : notification CNIL ? Communication aux personnes ?
T+72h   ⚠️ NOTIFICATION CNIL OBLIGATOIRE (art. 33 RGPD)
        sauf si "non susceptible d'engendrer un risque pour les
        droits et libertés des personnes physiques"
T+72h+  Si risque élevé → communication aux personnes concernées (art. 34)
T+1mois Rapport interne post-mortem complet
```

## 5. Procédure étape par étape

### Étape 1 — Confinement (T+0 à T+2h)

1. Identifier le périmètre exact : quel système, quelles données, combien de personnes affectées.
2. Stopper l'écoulement : révoquer les accès compromis, fermer le service incriminé si critique, isoler les sauvegardes.
3. Préserver les preuves : snapshot DB, logs, captures d'écran.
4. Ouvrir un canal d'incident dédié (Slack `#incident-YYYYMMDD`).

### Étape 2 — Évaluation du risque (T+2 à T+24h)

Évaluer selon la grille CNIL :

| Critère | Score 1 (faible) | Score 2 (moyen) | Score 3 (élevé) |
|---|---|---|---|
| Catégories de données | Identité publique | Identité + contacts | Données sensibles, financières |
| Volume | < 100 personnes | 100 à 10 000 | > 10 000 |
| Identifiabilité | Pseudonymisée | Indirecte | Directe |
| Conséquences potentielles | Gêne mineure | Préjudice limité | Préjudice grave / irréversible |

**Total ≥ 8** ou **un score à 3** → notification CNIL **obligatoire**.

### Étape 3 — Notification CNIL (avant T+72h)

Via le formulaire en ligne CNIL : https://www.cnil.fr/fr/notifier-une-violation-de-donnees-personnelles

Contenu minimum :
- Nature de la violation (3 types ci-dessus)
- Catégories et nombre de personnes concernées
- Catégories et volume de données concernées
- Conséquences probables
- Mesures prises ou envisagées pour limiter l'impact
- Coordonnées du référent RGPD (Quentin Hagnéré)

⚠️ Si tous les éléments ne sont pas connus à T+72h, faire une **notification initiale** puis compléter au fur et à mesure (notification en plusieurs temps autorisée).

### Étape 4 — Communication aux personnes concernées (si risque élevé)

Conditions cumulatives qui dispensent de communiquer (art. 34.3) :
- les données étaient chiffrées de manière robuste, ET
- le risque ne peut plus se concrétiser, OU
- la communication exigerait des efforts disproportionnés (auquel cas → communication publique).

Sinon → email individuel + page dédiée sur le site avec :
- description claire de la violation (langue accessible)
- conséquences possibles
- mesures prises
- recommandations à la personne (changer mot de passe, surveiller son compte, etc.)
- coordonnées du référent RGPD

### Étape 5 — Documentation interne (obligatoire art. 33.5)

Un registre interne des violations doit être tenu, **même pour les violations non notifiées à la CNIL**.

Champs minimaux :
- Date et heure de la détection
- Nature de la violation
- Catégories et nombre de personnes / données concernées
- Conséquences
- Mesures prises
- Décision de notification (et justification si non)
- Liens vers les preuves (logs, captures, rapports)

Stocker dans `/docs/violations-log.md` (à créer le jour J, jamais committer en clair des PII).

### Étape 6 — Post-mortem (T+1 mois)

Réunion interne :
- Cause racine
- Maillons faibles identifiés
- Plan d'action correctif (court / moyen / long terme)
- Mise à jour de la procédure si besoin

## 6. Cas concrets typiques pour HAGNÉRÉ CODE

### Cas A — Fuite de la base via Neon

- **Action immédiate** : révoquer la chaîne de connexion, rotater le mot de passe, vérifier les logs Neon pour identifier l'accès non autorisé.
- **Évaluation** : si fuite des emails/SIREN/briefs → notification CNIL probable.
- **Communication aux personnes** : oui si > 10 000 ou données financières (briefs sensibles).

### Cas B — Email Resend envoyé au mauvais destinataire

- **Action immédiate** : demander la suppression au destinataire, révoquer l'email s'il est encore récupérable côté Resend.
- **Évaluation** : faible volume, contenu probablement non sensible → notification CNIL non obligatoire si < 250 personnes.
- **Documentation interne** : oui systématique.

### Cas C — Brief partagé via lien `/r/<slug>` deviné

- **Action immédiate** : rotater le slug, vérifier les logs d'accès Cloudflare.
- **Évaluation** : violation de confidentialité ; gravité dépend des données contenues dans le brief.
- **Notification** : oui si l'accès non autorisé est confirmé.

### Cas D — Fuite côté sous-traitant (ex: Groq)

- **Action** : le sous-traitant doit notifier HAGNÉRÉ sous délai contractuel (typiquement 24-72h).
- HAGNÉRÉ relaie la notification au CNIL et aux personnes si applicable.

## 7. Contact CNIL

- **Site** : https://www.cnil.fr
- **Téléphone (heures ouvrées)** : 01 53 73 22 22
- **Formulaire de notification** : https://www.cnil.fr/fr/notifier-une-violation-de-donnees-personnelles
