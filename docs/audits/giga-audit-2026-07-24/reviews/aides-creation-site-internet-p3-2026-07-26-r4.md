# Contre-audit P3 R4 — `aides-creation-site-internet`

Date : **26 juillet 2026**  
Statut : **quatrième candidat corrigé remis en double contre-audit à froid**  
Publication, déploiement et indexation : **non autorisés**

## 1. Pourquoi un R4

Le candidat R3 a été contrôlé sur le même manifeste immuable par deux
relecteurs indépendants :

```text
Audit pédagogie, logique et accessibilité : 90/100 — GO P4
P0 : 0 ; P1 : 0 ; P2 : 2

Audit factuel, juridique et financier : 81/100 — NO-GO P4
P0 : 0 ; P1 : 3 ; P2 : 4

Manifeste R3 au début et à la fin : 31/31 conforme pour les deux relecteurs
Décision retenue : NO-GO, conformément au verdict le plus sévère
```

Les trois P1 et l'union des P2 ont été traités. R4 ne demande pas aux
relecteurs de faire confiance au présent rapport : ils doivent rejouer chaque
contre-exemple sur le code et les tests gelés par le nouveau manifeste.

## 2. Fermeture des trois P1

| Défaut bloquant R3 | Correction R4/R5 | Preuve à rejouer |
| --- | --- | --- |
| Une base juridique vague et non vide pouvait être traitée comme « hors de minimis ». | Classification fermée : seuls les trois numéros de règlements connus, leurs CELEX ou une mention explicite « hors de minimis » sont classés. Toute autre valeur reste inconnue et exige une preuve. | Valeur vague, valeur vide, référence exacte et mention explicite hors de minimis. |
| La fenêtre glissante pouvait être ancrée à la date de vérification au lieu de la date d'octroi légal de l'aide courante. | Lorsqu'une aide courante est juridiquement octroyée et documentée, son `legalGrantDate` devient l'ancre. Sans octroi courant, la date de vérification n'est qu'un précontrôle prudent à rejouer à la date réelle d'octroi. | Aide antérieure incluse à l'octroi mais pas à la vérification, aide postérieure à l'octroi courant, scénario sans octroi courant. |
| `France`, `FR` et les variantes linguistiques pouvaient scinder artificiellement un même groupe. | Les codes ISO alpha-2 et les noms français/anglais des 27 États membres sont canonisés. Un État non reconnu n'est jamais regroupé mécaniquement. | `France` + `FR` + `français`, autre État en nom/code, État inconnu. |

## 3. Fermeture des défauts P2

| Défaut R3 | Correction R4/R5 | Preuve à rejouer |
| --- | --- | --- |
| Le montant courant ne disait pas assez clairement quelle valeur utiliser. | L'écran et le TXT demandent l'équivalent-subvention brut communiqué pour le de minimis, ou le montant brut d'une subvention, jamais le nominal d'un prêt ou d'une garantie. | Libellé visible, export TXT et test de contenu. |
| Une simple mention « agricole » ou « pêche » pouvait déduire un règlement précis. | Les expressions sectorielles sans numéro ni CELEX restent inconnues. | Contre-tests sur les deux formulations nues. |
| Une alerte de cumul inter-régimes pouvait apparaître avec une seule famille de règlement. | L'alerte n'existe que si au moins deux familles reconnues portent effectivement un montant dans le groupe. | Un seul régime, puis deux régimes distincts. |
| Un paiement direct couvrant toute la facture réclamait une preuve de reste à payer inexistante. | Le reste entreprise est égal à 0 €, son champ de preuve disparaît ; la facture finale et la preuve du versement direct restent requises. Un paiement direct partiel conserve la preuve du solde. | Paiement direct intégral puis partiel. |
| La région vocale pouvait annoncer plusieurs synthèses pendant une frappe rapide. | Les annonces sont regroupées après 350 ms de stabilisation, sans annonce initiale ni avant la première analyse ; le minuteur est nettoyé au reset et au démontage. | Deux frappes rapides, reset, démontage et état initial. |

## 4. Contrôles du candidat R4

```text
Tests ciblés consolidés : 154/154, 7 fichiers
Tests moteur seuls : 63/63
Tests moteur + interface : 80/80
TypeScript global : conforme
ESLint ciblé : conforme
Prettier ciblé : conforme
Build Next.js direct : conforme
Pages statiques : 159/159
Suite SEO globale : 491/492
Défaut global restant : ancien manifeste P4 de
prioriser-fonctionnalites-mvp-saas sur src/lib/guides.ts
Défaut local aides-creation-site-internet : aucun
```

L'écart de gouvernance SEO est antérieur et extérieur à ce guide. Le build
direct compile, contrôle TypeScript et génère les 159 pages, dont la route du
guide et son image sociale.

## 5. Sources juridiques à contrôler

- [règlement général (UE) 2023/2831](https://eur-lex.europa.eu/eli/reg/2023/2831/oj) ;
- [règlement agricole 1408/2013 consolidé](https://eur-lex.europa.eu/eli/reg/2013/1408/2024-12-16/fra) ;
- [règlement pêche et aquaculture 717/2014 consolidé](https://eur-lex.europa.eu/eli/reg/2014/717/2023-10-25/fra) ;
- [décret français 2025-1361](https://www.legifrance.gouv.fr/loda/id/JORFTEXT000053177293) ;
- [circulaire du Premier ministre du 3 mars 2026](https://agriculture.gouv.fr/telecharger/153667).

## 6. Porte de sortie

Le présent rapport **ne s'auto-attribue aucune note**. R4 n'obtient un
**GO P4** que si deux relecteurs indépendants :

1. vérifient le nouveau manifeste commun au début et à la fin ;
2. rejouent les trois P1 et l'union des P2 issus de R3 ;
3. confrontent les règles financières et juridiques aux sources primaires ;
4. recherchent de nouveaux contre-exemples ;
5. rendent chacun une note sur 100 avec `P0/P1/P2` ;
6. concluent séparément à `P0 = 0`, `P1 = 0` et à l'absence de P2 empêchant une
   expérience premium.

Un éventuel GO P3 n'autorise toujours ni publication ni indexation. La P4 doit
encore prouver le rendu réel aux dix largeurs, le clavier, les thèmes, les
scénarios du formulaire, le TXT, l'impression A4, l'image sociale, les
métadonnées, le statut robots et l'absence du sitemap.
