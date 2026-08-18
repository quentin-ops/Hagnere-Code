# Contre-audit P3 R6 / moteur R7 — `aides-creation-site-internet`

Date : **26 juillet 2026**  
Statut : **sixième candidat éditorial, moteur R7, remis en double contre-audit à froid**  
Publication, déploiement et indexation : **non autorisés**

## 1. Verdicts du candidat R5/R6

Deux relecteurs indépendants ont vérifié le manifeste R5 au début et à la fin,
rejoué les défauts antérieurs et recherché de nouveaux contre-exemples :

```text
Audit factuel, juridique et financier : 84/100 — NO-GO P4
P0 : 0 ; P1 : 1 ; P2 : 1

Audit pédagogie, logique et accessibilité : 64/100 — NO-GO P4
P0 : 0 ; P1 : 3 ; P2 : 5

Manifeste R5 au début et à la fin : 35/35 conforme pour les deux relecteurs
Décision retenue : 64/100 — NO-GO, conformément au verdict le plus sévère
```

L'union conservée dans le registre de recherche comprend **3 P1 et 5 P2**.
Le défaut documentaire relevé à 84/100 et les lacunes de traçabilité relevées à
64/100 sont regroupés dans le même chantier de référentiel R7.

## 2. Fermeture des trois P1

| P1 R5/R6                                                                                                                                                                       | Correction R7                                                                                                                                                                                                                                                                                                                                              | Contre-preuve attendue                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Une contribution de 10 000 € pouvait être appliquée à une facture de 100 € lorsque l'assiette était hors du modèle, produisant un coût négatif et un besoin de trésorerie nul. | Toute contribution approuvée ou effective attribuée à la facture est bornée par son TTC connu, dans tous les modes. Si l'assiette n'est pas `eligible-ex-vat`, les contributions exploitables, coûts après aide, avance et comparaison d'attente restent `ND` ; le besoin de trésorerie reste prudent à TTC + frais. Les coûts sont en outre bornés à 0 €. | Facture 100 €, assiette `other`, avance puis remboursement, contribution/paiement 10 000 € : invalidité, aucune sortie financière négative, cash jamais réduit. |
| `bidon 123` ou `Mon aide locale 2026` accompagnés d'une preuve libre pouvaient classer l'aide hors de minimis.                                                                 | La base exige désormais un instrument juridique identifiable et un identifiant structuré. La preuve exige une URL officielle reconnue ou une pièce d'autorité identifiable avec référence structurée. Les textes libres, courriels génériques, URL génériques et marqueurs d'incertitude restent inconnus. Le même contrat s'applique au registre.         | Rejouer `bidon123`, `Mon aide locale 2026`, `Article 4`, `preuve456`, `Courriel quelconque123` et `https://example.com/aide`, avec 299 000 € antérieurs.        |
| La formule publique soustrayait encore le « montant brut notifié » au lieu de la contribution approuvée.                                                                       | Page, FAQ, tableaux, recherche, benchmark et test qualité réservent la valeur juridique ou l'ESB au cumul. Le coût conditionnel et la comparaison d'attente utilisent la contribution financière approuvée pour la facture.                                                                                                                                | Recherche textuelle active sans ancienne formule ; test négatif dédié.                                                                                          |

## 3. Fermeture des cinq P2

| P2 R5/R6                                                                                                                                                        | Correction R7                                                                                                                                                                                                                                                                                                               | Contre-preuve attendue                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Le paiement direct intégral était déclaré « validé » avant rapprochement de la facture et des preuves.                                                          | Le moteur expose six états : non applicable, inconnu, invalide, partiel, intégral provisoire et intégral documenté. Seul `full-documented` vaut couverture intégrale validée. Un reste arithmétique de 0 peut masquer la preuve d'un reste inexistant, mais l'écran et le TXT le qualifient de provisoire jusqu'aux pièces. | Facture non rapprochée ou références manquantes : `full-provisional`, aucune formulation définitive ; dossier complet : `full-documented`. |
| `99,999 €` pouvait être arrondi à 100 € tout en restant différent lors de la comparaison.                                                                       | Toutes les familles monétaires sont rejetées au-delà de deux décimales avant arrondi : devis, plafond, valeurs d'aide, contributions, trésorerie, frais et registre.                                                                                                                                                        | `99.999` et autres valeurs à trois décimales : invalidité liée au champ ; `99,99` conserve le reste de `0,01`.                             |
| Plusieurs erreurs n'étaient pas reliées au bon champ accessible.                                                                                                | Les contrôles possèdent des identifiants stables. Le résumé cible explicitement instrument, chaque champ du devis, bases juridiques, valeurs, contributions, facture et preuves. `aria-invalid` ne marque que les données invalides ou manquantes, jamais une limitation valide.                                            | Analyse vide, montants à trois décimales et pièces manquantes : focus et `aria-invalid` sur le contrôle exact.                             |
| Prêts, garanties et allègements conservaient des champs financiers invitant à saisir un nominal.                                                                | Tout passage à un instrument autre qu'une subvention vide puis désactive contribution approuvée, paiement effectif, mode, préfinancement et pièces financières. Revenir à « subvention » ne restaure rien implicitement.                                                                                                    | Bascules subvention → prêt/garantie/allègement → subvention, avec valeurs antérieures : aucun nominal conservé ni restauré.                |
| Benchmark, dossier de recherche et traçabilité ne reflétaient pas complètement R6 ; le rapport historique R5 n'avait pas été inclus dans son contrôle Prettier. | Le benchmark mondial et le contrat actif sont entièrement migrés R7. Le dossier conserve les quatre verdicts 89/74/84/64 et treize défauts historiques. Les rapports et manifestes historiques restent immuables ; le présent rapport est inclus dans son propre contrôle de format avant gel.                              | Vérifier l'historique, l'absence d'auto-GO, le contrat actif R7 et le format du présent rapport.                                           |

## 4. Contrat de décision R7

- **Valeur juridique ou ESB** : cumul réglementaire seulement.
- **Contribution financière approuvée** : coût conditionnel et comparaison
  d'attente d'une subvention, sous réserve d'une assiette prise en charge.
- **Paiement effectif** : coût réalisé seulement après chaîne documentaire
  complète.
- **Paiement direct** : égalité arithmétique distincte de la couverture
  documentée.
- **Instrument non modélisé** : aucun nominal, coût après aide ou gain de
  trésorerie calculé.
- **Donnée monétaire** : deux décimales au maximum avant tout calcul.

## 5. Vérifications du candidat R7

```text
Tests ciblés consolidés : 215/215, 7 fichiers
Tests moteur seuls : 116/116
Tests interface seuls : 24/24
Tests moteur + interface : 140/140
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

## 6. Sources primaires à contrôler

- [règlement général (UE) 2023/2831](https://eur-lex.europa.eu/eli/reg/2023/2831/oj) ;
- [règlement agricole 1408/2013 consolidé](https://eur-lex.europa.eu/eli/reg/2013/1408/2024-12-16/fra) ;
- [règlement pêche et aquaculture 717/2014 consolidé](https://eur-lex.europa.eu/eli/reg/2014/717/2023-10-25/fra) ;
- [décret français 2025-1361](https://www.legifrance.gouv.fr/loda/id/JORFTEXT000053177293) ;
- [circulaire du Premier ministre du 3 mars 2026](https://agriculture.gouv.fr/telecharger/153667).

## 7. Porte de sortie

Le présent rapport **ne s'auto-attribue aucune note**. R7 n'obtient un
**GO P4** que si deux relecteurs indépendants :

1. vérifient le nouveau manifeste commun au début et à la fin ;
2. rejouent les trois P1 et les cinq P2 issus de R5/R6 ;
3. rejouent tous les défauts fermés lors des candidats antérieurs ;
4. confrontent les règles financières et juridiques aux sources primaires ;
5. recherchent de nouveaux contre-exemples ;
6. rendent chacun une note sur 100 avec `P0/P1/P2` ;
7. concluent séparément à `P0 = 0`, `P1 = 0` et à l'absence de P2 empêchant une
   expérience premium.

Un éventuel GO P3 n'autorise toujours ni publication ni indexation. La P4 doit
encore prouver le rendu réel aux dix largeurs, le clavier, les thèmes, les
scénarios du formulaire, le TXT, l'impression A4, l'image sociale, les
métadonnées, le statut robots et l'absence du sitemap.
