# Politique d'envoi d'emails marketing — HAGNÉRÉ CODE SAS

> **Document interne — règles avant tout envoi marketing.**
> Couvre LCEN art. L.34-5, RGPD, code de la consommation.
> Dernière mise à jour : 2026-04-28.

## 1. État actuel

À la date de mise en ligne du site, **aucun email marketing** n'est envoyé. Seuls des emails **transactionnels** (confirmation de soumission de brief, notification interne) sont émis via Resend, sur la base de l'exécution de mesures précontractuelles (art. 6.1.b RGPD).

Cette politique s'applique au moment où une newsletter ou une campagne d'emailing sera envisagée.

## 2. Distinction transactionnel / marketing

| Type | Exemple | Consentement requis ? |
|---|---|---|
| Transactionnel | Confirmation d'envoi de formulaire, accusé de réception, lien permanent vers brief | Non (art. 6.1.b — exécution précontractuelle) |
| Service | Mise à jour CGV, alerte sécurité, rappel facture | Non (art. 6.1.b — relation contractuelle) |
| Marketing | Newsletter, annonce nouveau service, promotion, contenu éditorial | **Oui** ou opt-out B2B selon contexte |

## 3. Règles B2B (LCEN art. L.34-5 al. 4)

Le démarchage B2B par email est autorisé sans consentement préalable **si trois conditions cumulatives** sont remplies :

1. **L'adresse a été collectée** dans le respect de la loi (formulaire de contact, signature email, échange professionnel).
2. **L'objet de la prospection** est en relation avec la **fonction professionnelle** du destinataire (CTO ne reçoit pas une promo cosmétique).
3. **Chaque email** offre une **possibilité de désinscription gratuite et simple** (lien ou email).

### Application chez HAGNÉRÉ CODE
- Les emails collectés via `/demarrer-un-projet` ou `/contact` sont des emails **professionnels** (champ entreprise obligatoire → présomption B2B).
- L'objet « actualité technique de l'agence, nouvelles études de cas » est en relation avec leur fonction (dirigeants, CTO).
- Donc **opt-out suffit** pour les prospects B2B.

⚠️ **Attention** : si un email collecté est manifestement personnel (gmail.com sans contexte société) ou le destinataire est consommateur final (cas LMNP.AI / SCI-AI), **opt-in obligatoire**.

## 4. Règles B2C (RGPD + Code conso)

Pour toute audience B2C : **consentement explicite, libre, éclairé, spécifique, préalable et univoque** (art. 4.11 RGPD).

- Case à cocher **non précochée** au moment de la collecte.
- Mention claire de la finalité marketing (distincte de la finalité de service).
- Possibilité de retrait du consentement aussi simple que celle du donner.

## 5. Mentions obligatoires dans CHAQUE email marketing

1. **Identité de l'expéditeur** (HAGNÉRÉ CODE SAS, adresse complète).
2. **Lien de désinscription** fonctionnel (`unsubscribe`).
3. **Lien vers la politique de confidentialité** (`/legal/confidentialite`).
4. **Mention de l'origine** des données (« vous recevez cet email parce que vous avez rempli le formulaire X le date Y »).

### Template minimum (footer email)

```
HAGNÉRÉ CODE SAS — 82 impasse de Bellevue, 73000 Bassens
Vous recevez cet email parce que vous nous avez contactés via hagnere-code.fr.
Politique de confidentialité : https://hagnere-code.fr/legal/confidentialite
Se désinscrire : {{unsubscribe_link}}
```

## 6. Outil envisagé

Privilégier un outil ESP qui :
- gère automatiquement les listes de désinscription (suppression cross-campagne).
- propose un opt-in confirmé (double opt-in) pour les listes B2C.
- est hébergé en UE ou couvert par DPF/SCC.
- supporte les balises de tracking sans déposer de cookies non consentis sur le site.

Candidats privilégiés : **Brevo** (ex-Sendinblue, FR), **Mailerlite** (LT), **Resend** (déjà utilisé pour transactionnel — extension marketing).

## 7. Gestion des listes

- Liste **prospects** : emails collectés via `/demarrer-un-projet`, statut « pas client », opt-out actif après 3 ans sans contact.
- Liste **clients** : emails collectés en exécution de contrat, opt-out à tout moment.
- Liste **newsletter** : opt-in dédié distinct, double opt-in si B2C.

Ne **jamais** mélanger les listes. Une opposition sur la newsletter ne doit pas couper les emails transactionnels client.

## 8. Avant le 1er envoi

Checklist :
- [ ] Outil ESP choisi et conformité DPF/SCC vérifiée
- [ ] Mention dans `/legal/confidentialite` mise à jour (sous-traitant ESP ajouté)
- [ ] Page de désinscription fonctionnelle
- [ ] Liens de tracking : si pixels → bannière cookies obligatoire (cf. `/legal/cookies`)
- [ ] Liste segmentée (B2B / B2C / opt-in / opt-out)
- [ ] Test de l'email côté Litmus / Email on Acid pour rendu et a11y
- [ ] Mention des sous-traitants à jour dans le registre des traitements
