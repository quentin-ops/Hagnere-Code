# Contre-audit P3 R7 / moteur R8 — `aides-creation-site-internet`

Date : **26 juillet 2026**  
Statut : **septième candidat éditorial, moteur R8, remis en double
contre-audit à froid**  
Publication, déploiement et indexation : **non autorisés**

## 1. Verdicts du candidat R7

Deux relecteurs indépendants ont vérifié le manifeste R7 au début et à la fin,
rejoué les défauts antérieurs et cherché de nouveaux contre-exemples :

```text
Audit factuel, juridique et financier : 72/100 — NO-GO P4
P0 : 0 ; P1 : 1 ; P2 : 3

Audit pédagogie, logique et accessibilité : 72/100 — NO-GO P4
P0 : 0 ; P1 : 1 ; P2 : 2

Manifeste R7 au début et à la fin : 37/37 conforme pour les deux relecteurs
Décision retenue : 72/100 — NO-GO
```

L'union conservée dans le registre de recherche comprend **1 P1 et 3 P2**.
Le présent candidat R8 corrige ces quatre blocages sans s'attribuer de note ni
de GO.

## 2. Fermeture du P1 R7

| P1 R7                                                                                                                                        | Correction R8                                                                                                                                                                                                                                                                                                                                                                                 | Contre-preuve attendue                                                                                                                                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Une déclaration « hors de minimis » pouvait être mécaniquement authentifiée par une référence plausible, une URL racine ou une fausse pièce. | Le moteur conserve désormais deux états distincts : le statut déclaré et le statut résolu. Toute branche déclarée « hors de minimis » qui ne contient pas l'un des trois règlements de minimis reconnus devient `not-de-minimis-external-review`. Elle ajoute toujours une pièce manquante bloquante et une limite de l'outil, même si la base, la référence ou l'URL paraissent officielles. | Rejouer la base et le registre avec `Décision fake-12`, `Loi article 4`, `Décret 1/23`, les pages racines `gouv.fr` et Service-Public, des références structurées plausibles et une URL officielle : verdict `incomplete`, alerte à 301 100 € non supprimée, aucune formulation « prouvée » dans l'écran ou le TXT. |

Une référence exacte à `2023/2831`, `1408/2013` ou `717/2014` reste prioritaire
et déclenche le contrôle de minimis prudent correspondant. Si elle est saisie
en même temps qu'une branche « hors de minimis », la contradiction est visible
et bloquante ; elle ne permet pas de contourner le contrôle.

## 3. Fermeture des trois P2 R7

| P2 R7                                                                   | Correction R8                                                                                                                                                                                                                                                                                                                  | Contre-preuve attendue                                                                                                                                                                                              |
| ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Des erreurs accessibles visaient encore le mauvais contrôle.            | Les champs du profil, les portes d'éligibilité et l'échéancier ont des cibles distinctes. Chaque ligne de devis et chaque aide du registre possède des identifiants positionnels stables. Les douze familles d'erreurs du registre ciblent le champ qui peut effectivement les résoudre, sans repli vers la trésorerie.        | Collision « Activité » / « Activité admise », échéancier vide, deux devis au même libellé et chaque champ d'une aide du registre : lien, focus et `aria-invalid` sur le contrôle exact.                             |
| Le benchmark contredisait l'état de paiement direct `full-provisional`. | Le benchmark autorise un reste arithmétique de 0 € et le masquage de la preuve d'un reste inexistant, mais interdit d'en déduire une couverture validée. Rapprochement de la facture, date, référence du versement direct et chronologie restent requis. Une donnée invalide rend le reste `ND` et conserve la preuve visible. | Paiement direct arithmétiquement intégral mais incomplet : `full-provisional`, reste 0 €, couverture non validée. Montant incohérent ou invalide : reste `ND`, preuve visible. Dossier complet : `full-documented`. |
| La synthèse effaçait la date particulière du registre agricole.         | Page, recherche, benchmark et tests distinguent le 1er janvier 2026 pour les régimes général, SIEG et pêche-aquaculture, du 1er janvier 2027 pour l'agriculture.                                                                                                                                                               | Les deux dates et leurs périmètres sont visibles ; aucune synthèse ne présente le 1er janvier 2026 comme date universelle.                                                                                          |

## 4. Contrat de décision R8

- **Hors de minimis déclaré** : piste d'audit conservée, jamais authentifiée
  localement ; validation externe écrite obligatoire avant tout verdict
  exploitable.
- **Règlement de minimis exact** : `2023/2831`, `1408/2013` ou `717/2014`,
  avec État membre, entreprise unique, fenêtre et date d'octroi propres au
  régime.
- **Valeur juridique ou ESB** : cumul réglementaire seulement.
- **Contribution financière approuvée** : coût conditionnel et comparaison
  d'attente d'une subvention, sous réserve d'une assiette prise en charge.
- **Paiement effectif** : coût réalisé seulement après chaîne documentaire
  complète.
- **Paiement direct** : égalité arithmétique, couverture provisoire et
  couverture documentée sont trois conclusions distinctes.
- **Accessibilité** : chaque problème actionnable conduit au contrôle exact,
  y compris dans des lignes portant le même libellé.

La version testée est
`SITE_AID_DECISION_VERSION = site-aid-decision-r8-2026-07-26`.

## 5. Vérifications du candidat R8

```text
Tests ciblés consolidés : 232/232, 7 fichiers
Tests moteur seuls : 129/129
Tests interface seuls : 27/27
Tests moteur + interface + contrat éditorial : 170/170
TypeScript global : conforme
ESLint ciblé : conforme
Prettier 3.6.2 ciblé : conforme
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

## 6. Sources primaires à contrôler

- [règlement général (UE) 2023/2831](https://eur-lex.europa.eu/eli/reg/2023/2831/oj) ;
- [règlement agricole 1408/2013 consolidé](https://eur-lex.europa.eu/eli/reg/2013/1408/2024-12-16/fra) ;
- [règlement pêche et aquaculture 717/2014 consolidé](https://eur-lex.europa.eu/eli/reg/2014/717/2023-10-25/fra) ;
- [décret français 2025-1361](https://www.legifrance.gouv.fr/loda/id/JORFTEXT000053177293) ;
- [circulaire du Premier ministre du 3 mars 2026](https://agriculture.gouv.fr/telecharger/153667).

## 7. Porte de sortie

Le présent rapport **ne s'auto-attribue aucune note**. R8 n'obtient un
**GO P4** que si deux relecteurs indépendants :

1. vérifient le nouveau manifeste commun au début et à la fin ;
2. rejouent le P1 et les trois P2 R7 ;
3. rejouent les treize défauts documentés des candidats R4 et R5/R6 ;
4. confrontent les règles financières et juridiques aux sources primaires ;
5. recherchent de nouveaux contre-exemples ;
6. rendent chacun une note sur 100 avec `P0/P1/P2` ;
7. concluent séparément à `P0 = 0`, `P1 = 0` et à l'absence de P2 empêchant une
   expérience premium.

Un éventuel GO P3 n'autorise toujours ni publication ni indexation. La P4 doit
encore prouver le rendu réel aux dix largeurs, le clavier, les thèmes, les
scénarios du formulaire, le TXT, l'impression A4, l'image sociale, les
métadonnées, le statut robots et l'absence du sitemap.
