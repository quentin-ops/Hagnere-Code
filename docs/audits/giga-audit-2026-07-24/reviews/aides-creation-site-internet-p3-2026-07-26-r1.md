# Contre-audit P3 R1 — `aides-creation-site-internet`

Date : **26 juillet 2026**  
Statut : **candidat corrigé remis en double contre-audit**  
Publication, déploiement et indexation : **non autorisés**

## 1. Verdict d’entrée

Deux relecteurs indépendants en lecture seule ont audité le gel P2 R1.

```text
Audit pédagogie, logique et valeur : 82/100 — NO-GO
Audit faits, droit et calculs : 86/100 — NO-GO
Incidents ouverts à l’entrée : P0 = 0 ; P1 = 7 ; P2 = 7
```

Les 35 tests P2 étaient verts, mais plusieurs d’entre eux validaient un contrat
trop bloquant ou insuffisamment probant. Aucun score final n’est attribué au
candidat corrigé avant la nouvelle lecture indépendante.

## 2. Fermeture des P1

| Référence | Défaut démontré sur P2 | Correction du candidat R1 | Preuve attendue au contre-audit |
| --- | --- | --- | --- |
| PED-P1-01 | Formule de facture ambiguë avec plusieurs taux de TVA. | Formule ligne par ligne `Σ [HT × (1 + TVA)]` et exemple mixte à 20 %, 10 % et 5,5 %, totalisant 11 265 € TTC. | Recalcul manuel et test du contrat éditorial. |
| PED-P1-02 | Une inconnue administrative masquait aussi des résultats financiers indépendants. | Les dépendances sont séparées : facture TTC, coût sans aide et aide théorique restent visibles lorsqu’ils sont défendables ; seul le verdict global est suspendu. | Cas adversariaux sur TVA, admissibilité, cumul, versement et preuve de notification. |
| PED-P1-03 | « Marge attribuable » et frais mélangeaient chiffre d’affaires, marge et financement général. | Champ renommé « marge contributive mensuelle perdue à cause du retard », recommandation de saisir 0 € si le lien causal n’est pas défendable, frais limités à la demande et à l’attente, sensibilité basse/centrale/haute. | Libellés, aide contextuelle, trois scénarios et tests de seuil. |
| PED-P1-04 | Une attente non rentable pouvait masquer simultanément un manque de trésorerie. | Verdict combiné : ne pas attendre uniquement pour l’aide, mais ne pas engager le projet complet sans réduire, phaser ou financer. | Test `notified-wait-dominated-cash-gap`. |
| PED-P1-05 | Le formulaire vierge réprimandait le lecteur et une grande zone dynamique était annoncée. | État initial neutre, état « dossier en cours » après première saisie, verdict seulement après action explicite ou chargement de l’exemple ; région dynamique limitée à un statut bref. | Tests vierge, première saisie, demande de verdict et portée d’`aria-live`. |
| FACT-P1-01 | Après notification, l’attente restait comparée à l’aide théorique. | Avant notification : comparaison au théorique non acquis. Après notification prouvée : comparaison au montant notifié. | Contre-exemples `théorique 2 100 / notifié 1 000 / attente 1 500` et égalité à 1 000 €. |
| FACT-P1-02 | Notification et encaissement partageaient un montant ; le coût « réalisé » utilisait le devis sans piste d’audit finale. | Montants notifié et encaissé séparés ; écart conservé ; date et référence d’encaissement exigées ; coût réalisé interdit sans facture finale acquittée rapprochée des lignes. | Cas `2 100 € notifiés / 1 800 € encaissés`, reçu absent et facture non rapprochée. |

## 3. Fermeture des P2

| Référence | Correction du candidat R1 |
| --- | --- |
| PED-P2-01 | Parcours annoncé en quatre étapes, rôle de chaque bloc expliqué, perte du brouillon au rechargement signalée et export recommandé avant de quitter. |
| PED-P2-02 | CTA recentré sur la vérification concrète du devis et du budget. Il nomme l’équipe qui relit, renvoie le délai vers le formulaire source et ne promet ni aide, ni résultat commercial. |
| FACT-P2-01 | L’outil se déclare limité aux dispositifs dont le règlement applique un taux à une assiette admissible HT ; il interdit son aide théorique pour une assiette TTC, TVA non récupérable ou autre. |
| FACT-P2-02 | Chaque contrôle oui/non exige désormais une référence de pièce, d’article, de page ou de réponse écrite. |
| FACT-P2-03 | Le registre consigne régime, État membre, périmètre de l’entreprise unique et date d’octroi juridique, en plus du montant et des dépenses. |
| FACT-P2-04 | La section CPF date l’exigence RNCP/RS, le plafond 2026 de 1 500 € pour le Répertoire spécifique et la participation forfaitaire 2026 de 150 €, avec liens officiels directs et exemptions bornées. |
| FACT-P2-05 | Besoin métier, indicateur, responsable, échéances et règle d’avenant entrent dans le dossier. Le benchmark ne transforme plus le registre britannique en preuve de même facture, utilise l’URL canadienne actuelle et borne KfW au diagnostic facultatif, au crédit et au dépôt avant projet. |

## 4. Durcissements supplémentaires

- le moteur est versionné `site-aid-decision-r2-2026-07-26` ;
- un montant notifié saisi sans référence de notification ne réduit ni le coût,
  ni le besoin maximal de trésorerie ;
- un montant encaissé saisi sans date, référence et rapprochement de facture
  n’est jamais présenté comme réalisé ;
- le besoin maximal de trésorerie reste calculé prudemment sur la facture TTC
  et les frais lorsque la part versée avant paiement n’est pas prouvée ;
- le formulaire ne transmet et ne conserve aucune saisie ;
- le TXT garde un BOM UTF-8, un nom stable et l’historique des preuves ;
- le téléchargement révoque son URL seulement après le déclenchement ;
- l’effacement reste en deux étapes et l’impression demeure isolée.

## 5. Vérifications du candidat avant remise

```text
Tests ciblés : 85/85
TypeScript : conforme
ESLint ciblé : conforme après suppression du dernier avertissement
Build Next.js direct : conforme
Pages statiques : 159/159
Suite SEO globale : 491/492
Défaut global restant : ancien manifeste P4 de
prioriser-fonctionnalites-mvp-saas sur src/lib/guides.ts
Défaut local aides-creation-site-internet : aucun
```

Le script `npm run build` s’arrête à son précontrôle global sur cet unique
écart historique hors périmètre. Le moteur Next.js direct compile pourtant le
candidat, exécute TypeScript et génère les 159 pages.

## 6. Porte de sortie

Le candidat R1 n’obtient un **GO P4** que si deux contre-auditeurs indépendants :

1. vérifient intégralement le manifeste commun ;
2. rejouent tous les contre-exemples P1 ;
3. constatent `P0 = 0`, `P1 = 0` et aucun P2 empêchant une expérience premium ;
4. attribuent chacun une note selon leur grille, sans reprendre une note
   auto-déclarée ;
5. ne modifient aucun fichier.

Même en cas de GO P3, la publication reste interdite avant le rendu réel aux dix
largeurs, le clavier, les thèmes, le téléchargement, l’impression A4, l’image
sociale, les métadonnées et le contrôle final humain P4.
